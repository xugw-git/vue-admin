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
                <template>
                    <el-input v-model="filename" placeholder="文件名" clearable style="width: 100px"></el-input>
                    <el-select v-model="bookType" style="width: 100px;">
                        <el-option v-for="item in typeOption" :key="item" :label="item" :value="item" />
                    </el-select>
                    <el-button @click="handleDownload" plain type="primary" style="margin: 0px; width: 100px;">导出 <i
                            class="el-icon-printer"></i>
                    </el-button>
                </template>
                <el-table :data="tableData" :highlight-current-row="true" style="width: 100%" stripe border>
                    <el-table-column prop="id" label="序号" width="100" align="center" sortable>
                    </el-table-column>
                    <el-table-column prop="title" label="标题" min-width="400" header-align="center">
                    </el-table-column>
                    <el-table-column prop="time" label="时间" width="200" align="center" sortable>
                    </el-table-column>
                    <el-table-column prop="name" label="作者" width="100" align="center">
                    </el-table-column>
                    <el-table-column prop="rate" label="评分" width="160" align="center" sortable>
                        <template slot-scope="{row}">
                            <el-rate v-model="row.rate" disabled></el-rate>
                        </template>
                    </el-table-column>
                    <el-table-column prop="status" label="状态" width="120" align="center" sortable>
                        <template slot-scope="{row}">
                            <el-tag :type="row.status === '草稿' ? 'info' : 'success'" size="large">
                                {{ row.status }}
                            </el-tag>
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import HeadBar from '@/components/HeadBar.vue'
import TagBar from '@/components/TagBar.vue'
import axios from "axios"

export default {
    name: 'ExportExcel',
    components: {
        SideBar,
        HeadBar,
        TagBar
    },
    data() {
        return {
            tableData: [],
            filename: '',
            typeOption: ['xlsx', 'csv', 'txt'],
            bookType: 'xlsx',
        }
    },
    mounted() {
        axios
            .get("/exceldata")
            .then(res => {
                this.tableData = res.data.data
            });
    },
    methods: {
        handleDownload() {
            import('@/untils/Export2Excel').then(excel => {
                const tHeader = ['序号', '标题', '时间', '作者', '评分', '状态']
                const filterVal = ['id', 'title', 'time', 'name', 'rate', 'status']
                const data = this.formatJson(filterVal, this.tableData)
                excel.export_json_to_excel({
                    header: tHeader,
                    data,
                    filename: this.filename,
                    bookType: this.bookType
                })
            })
        },
        formatJson(filterVal, jsonData) {
            return jsonData.map(v => filterVal.map(j => {
                return v[j]
            }))
        }
    }
}
</script>
