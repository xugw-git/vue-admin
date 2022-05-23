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
            <el-main>
                <upload-excel :getData="getTableData" />
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
        getTableData({ results, header }) {
            this.tableData = results
            this.tableHeader = header
            this.$message({
                message: '数据导入成功',
                type: 'success'
            })
        }
    }
}
</script>
