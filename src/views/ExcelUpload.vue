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
                <upload-excel :on-success="handleSuccess" :before-upload="beforeUpload" />
                <el-table :data="tableData" stripe border :highlight-current-row="true"
                    style="width: 100%;margin-top:20px;">
                    <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
                </el-table>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import HeadBar from '@/components/HeadBar.vue'
import TagBar from '@/components/TagBar.vue'
import UploadExcel from '@/components/UploadExcel.vue'

export default {
    name: 'ExcelUpload',
    components: {
        SideBar,
        HeadBar,
        TagBar,
        UploadExcel
    },
    data() {
        return {
            tableData: [],
            tableHeader: []
        }
    },
    methods: {
        beforeUpload(file) {
            const isLt1M = file.size / 1024 / 1024 < 1
            if (isLt1M) {
                this.$message({
                    message: '数据导入成功',
                    type: 'success'
                })
                return true
            }
            this.$message({
                message: '导入的文件过大',
                type: 'warning'
            })
            return false
        },
        handleSuccess({ results, header }) {
            this.tableData = results
            this.tableHeader = header
        }
    }
}
</script>
