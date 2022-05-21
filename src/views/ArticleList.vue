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
                    <el-select v-model="nameSelect" placeholder="作者" clearable style="width: 100px;">
                        <el-option v-for="item in nameOption" :key="item" :label="item" :value="item" />
                    </el-select>
                    <el-select v-model="statusSelect" placeholder="状态" clearable style="width: 100px;">
                        <el-option v-for="item in statusOption" :key="item" :label="item" :value="item" />
                    </el-select>
                    <el-button @click="refreshData" plain type="primary" icon="el-icon-refresh"
                        style="margin: 0px; width: 100px;">重置
                    </el-button>
                </template>
                <el-table :data="tableData" ref="articleTable" :highlight-current-row="true" style="width: 100%" stripe
                    border @sort-change="sortChange">
                    <el-table-column prop="id" label="ID" width="100" align="center" sortable="custom">
                    </el-table-column>
                    <el-table-column prop="time" label="时间" width="200" align="center" sortable="custom">
                    </el-table-column>
                    <el-table-column prop="name" label="作者" width="100" align="center">
                    </el-table-column>
                    <el-table-column prop="status" label="状态" width="150" align="center" sortable="custom">
                        <template slot-scope="{row}">
                            <el-tag :type="row.status === '草稿' ? 'info' : 'success'" size="large">
                                {{ row.status }}
                            </el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column prop="title" label="标题" min-width="600" header-align="center">
                    </el-table-column>
                    <el-table-column label="操作" width="150" align="center">
                        <template slot-scope="{row}">
                            <el-button plain size="mini" type="primary" icon="el-icon-edit" @click="editLink(row)">编辑
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>

                <el-pagination background layout="prev, pager, next" :total="TempData.length" :pager-count="5"
                    :current-page.sync="currentPage" @current-change="handleCurrentChange"
                    style="margin-top: 20px; margin-bottom: 20px; justify-content:center; display: flex;">
                </el-pagination>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue'
import HeadBar from '@/components/HeadBar.vue'
import TagBar from '@/components/TagBar.vue'
import axios from "axios"

export default {
    name: 'ArticleList',
    components: {
        SideBar,
        HeadBar,
        TagBar
    },
    data() {
        return {
            InitData: [],
            TempData: [],
            tableData: [],
            currentPage: 1,
            nameOption: new Set(),
            nameSelect: '',
            statusOption: ['草稿', '已发布'],
            statusSelect: ''
        }
    },
    mounted() {
        axios
            .get("/articledata")
            .then(res => {
                this.InitData = res.data.data
                this.TempData = this.InitData.slice()
                this.handleCurrentChange(this.currentPage)
                let nameList = []
                nameList.push(this.InitData.map(i => i.name))
                this.nameOption = new Set(nameList[0])
            });
    },
    watch: {
        nameSelect() {
            this.filterData()
        },
        statusSelect() {
            this.filterData()
        }
    },
    methods: {
        filterData() {
            if (this.nameSelect === '' && this.statusSelect === '') {
                this.TempData = this.InitData.slice()
                this.handleCurrentChange(this.currentPage)
            } else if (this.nameSelect === '' && this.statusSelect !== '') {
                this.TempData = this.InitData.filter(i => i.status === this.statusSelect)
                this.handleCurrentChange(this.currentPage)
            } else if (this.nameSelect !== '' && this.statusSelect === '') {
                this.TempData = this.InitData.filter(i => i.name === this.nameSelect)
                this.handleCurrentChange(this.currentPage)
            } else {
                this.TempData = this.InitData.filter(i => i.status === this.statusSelect && i.name === this.nameSelect)
                this.handleCurrentChange(this.currentPage)
            }
        },
        refreshData() {
            this.$refs['articleTable'].clearSort();
            this.nameSelect = ''
            this.statusSelect = ''
            this.filterData()
        },
        handleCurrentChange(val) {
            this.tableData = this.TempData.slice((val - 1) * 10, val * 10)
        },
        sortChange(data) {
            let { prop, order } = data
            if (prop === 'id') {
                if (order === 'descending') {
                    this.TempData.sort((a, b) => b.id - a.id)
                } else {
                    this.TempData.sort((a, b) => a.id - b.id)
                }
            }
            if (prop === 'status') {
                if (order === 'descending') {
                    this.TempData.sort((a, b) => b.status.localeCompare(a.status))
                } else {
                    this.TempData.sort((a, b) => a.status.localeCompare(b.status))
                }
            }
            if (prop === 'time') {
                if (order === 'descending') {
                    this.TempData.sort((a, b) => new Date(b.time) - new Date(a.time))
                } else {
                    this.TempData.sort((a, b) => new Date(a.time) - new Date(b.time))
                }
            }
            this.handleCurrentChange(this.currentPage)
        },
        editLink(row) {
            this.$router.push({ name: 'edit', params: { id: row.id } })
        }
    }
}
</script>
