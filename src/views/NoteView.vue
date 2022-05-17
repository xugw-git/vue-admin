<template>
  <el-container style="height: 100vh">
    <el-aside style="width: auto;">
      <SideBar></SideBar>
    </el-aside>
    <el-container>
      <el-header style="padding: 0px;">
        <HeadBar></HeadBar>
      </el-header>
      <TagBar></TagBar>
      <el-main style="background-color:#EEEEEE;">
        <el-table :data="tableData" highlight-current-row="true" style="width: 100%" stripe border>
          <el-table-column type="index" width="100" align="center">
          </el-table-column>
          <el-table-column prop="time" label="时间" width="200" header-align="center" align="center">
          </el-table-column>
          <el-table-column label="用户" width="100" header-align="center" align="center">xugw
          </el-table-column>
          <el-table-column prop="import" label="紧急程度" width="100" header-align="center" align="center">
            <template slot-scope="{row}">
              <el-tag :type="row.import === '一般' ? 'primary' : row.import === '重要' ? 'warning' : 'danger'" size="large">
                {{ row.import }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="content" label="内容" header-align="center">
            <template slot-scope="{row}">
              <template v-if="row.edit">
                <el-input v-model="row.content" size="small" />
              </template>
              <span v-else>{{ row.content }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="200" header-align="center" align="center">
            <template slot-scope="{row,$index}">
              <el-button v-if="row.edit" size="mini" type="success" icon="el-icon-circle-check" @click="confirm(row)">
                确认
              </el-button>
              <template v-else>
                <el-button size="mini" type="primary" icon="el-icon-edit" @click="edit(row)">编辑
                </el-button>
                <el-button size="mini" type="danger" icon="el-icon-delete" @click="del($index)">
                  删除</el-button>
              </template>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue'
import HeadBar from '@/components/HeadBar.vue'
import TagBar from '@/components/TagBar.vue'
import { tableData } from '../mock/index.js'

export default {
  name: 'NoteView',
  components: {
    SideBar,
    HeadBar,
    TagBar
  },
  mounted() {
    this.tableData = tableData().tableData.sort((first, second) => new Date(second.time) - new Date(first.time));
  },
  data() {
    return {
      tableData: [],
    }
  },
  methods: {
    edit(row) {
      row.edit = true
    },
    del(index) {
      this.tableData.splice(index, 1)
      this.$message({
        message: '删除成功',
        type: 'success'
      })
    },
    confirm(row) {
      row.edit = false
      this.$message({
        message: '提交成功',
        type: 'success'
      })
    }
  }
}
</script>
