<template>
  <div style="text-align:center;">
    <el-upload action="" ref="excelUpload" accept=".xlsx, .xls" :drag="true" :limit="1" :on-exceed="limitTip"
      :show-file-list="false" :before-upload="beforeUpload">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或点击上传</div>
      <div class="el-upload__tip" slot="tip">只能上传xlsx/xls文件，且不超过1mb</div>
    </el-upload>
  </div>
</template>

<script>
import XLSX from 'xlsx'

export default {
  props: {
    getData: Function
  },
  data() {
    return {
      excelData: {
        header: null,
        results: null
      }
    }
  },
  methods: {
    beforeUpload(rawFile) {
      const isLt1M = rawFile.size / 1024 / 1024 < 1
      if (isLt1M) {
        this.readerData(rawFile)
      } else {
        this.$message({
          message: '导入的文件过大',
          type: 'warning'
        })
        return false
      }
    },
    readerData(rawFile) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = e => {
          const data = e.target.result
          const workbook = XLSX.read(data, { type: 'array' })
          const firstSheetName = workbook.SheetNames[0]
          const worksheet = workbook.Sheets[firstSheetName]
          const header = this.getHeaderRow(worksheet)
          const results = XLSX.utils.sheet_to_json(worksheet)
          this.generateData({ header, results })
          resolve()
        }
        reader.readAsArrayBuffer(rawFile)
      })
    },
    getHeaderRow(sheet) {
      const headers = []
      const range = XLSX.utils.decode_range(sheet['!ref'])
      let C
      const R = range.s.r
      /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) { /* walk every column in the range */
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
        /* find the cell in the first row */
        let hdr = 'UNKNOWN ' + C // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
        headers.push(hdr)
      }
      return headers
    },
    generateData({ header, results }) {
      this.excelData.header = header
      this.excelData.results = results
      this.getData && this.getData(this.excelData)
    },
    limitTip() {
      this.$message({
        message: '只能导入一个文件',
        type: 'warning'
      })
    },
  }
}
</script>
