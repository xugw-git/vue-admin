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
                    <el-select v-model="rateSelect" placeholder="评分" clearable style="width: 100px;">
                        <el-option v-for="item in rateOption" :key="item" :label="item" :value="item" />
                    </el-select>
                    <el-button @click="refreshData" plain type="primary" icon="el-icon-refresh"
                        style="margin: 0px; width: 100px;">重置
                    </el-button>
                    <el-button @click="addData" plain type="primary" icon="el-icon-circle-plus-outline"
                        style="margin: 0px; width: 100px;">新增
                    </el-button>
                </template>
                <el-table :data="tableData" ref="checkTable" :highlight-current-row="true" style="width: 100%" stripe
                    border @sort-change="sortChange">
                    <el-table-column prop="id" label="ID" width="100" align="center" sortable="custom">
                    </el-table-column>
                    <el-table-column prop="time" label="时间" width="200" align="center" sortable>
                    </el-table-column>
                    <el-table-column prop="author" label="作者" width="100" align="center">
                    </el-table-column>
                    <el-table-column prop="rate" label="评分" width="200" align="center" sortable>
                        <template slot-scope="{row}">
                            <el-rate v-model="row.rate" disabled></el-rate>
                        </template>
                    </el-table-column>
                    <el-table-column prop="content" label="评价" header-align="center">
                    </el-table-column>
                    <el-table-column label="操作" width="200" align="center">
                        <template slot-scope="{row}">
                            <el-button plain size="mini" type="primary" icon="el-icon-edit" @click="editRow(row)">编辑
                            </el-button>
                            <el-button plain size="mini" type="danger" icon="el-icon-delete" @click="delRow(row)">
                                删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>

                <el-pagination background layout="prev, pager, next" :total="TempData.length" :pager-count="5"
                    :current-page.sync="currentPage" @current-change="handleCurrentChange"
                    style="margin-top: 20px; margin-bottom: 20px; justify-content:center; display: flex;">
                </el-pagination>

                <el-dialog :title="isCreate === true ? '新增数据' : '更新数据'" :visible.sync="dialogEdit">
                    <el-form label-position="top" :model="addForm" :rules="rules" ref="dialogForm">
                        <el-form-item label="时间" prop="time">
                            <el-date-picker v-model="addForm.time" type="datetime" placeholder="选择日期时间"
                                style="width: 50%">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="评分" prop="rate">
                            <el-select v-model="addForm.rate" placeholder="请选择评分" clearable style="width: 50%">
                                <el-option v-for="item in rateOption" :key="item" :label="item" :value="item" />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="评价" prop="content">
                            <el-input v-model="addForm.content" clearable style="width: 100%"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer">
                        <el-button @click="cancelEdit" plain type="info">取 消</el-button>
                        <el-button plain type="primary" @click="isCreate === true ? confirmAdd() : confirmUpdate()">确 定
                        </el-button>
                    </div>
                </el-dialog>

            </el-main>
        </el-container>
    </el-container>
</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue'
import HeadBar from '@/components/HeadBar.vue'
import TagBar from '@/components/TagBar.vue'
import { checkData } from '../mock/index.js'

export default {
    name: 'CheckView',
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
            rateOption: [1, 2, 3, 4, 5],
            rateSelect: '',
            isCreate: false,
            dialogEdit: false,
            currentPage: 1,
            addForm: {
                time: new Date(),
                rate: 5,
                content: ''
            },
            rules: {
                time: [
                    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ],
                rate: [
                    { required: true, message: '请完成评分', trigger: 'change' }
                ],
                content: [
                    { required: true, message: '请输入评价', trigger: 'blur' },
                    { min: 5, message: '请输入不少于 5 个字符', trigger: 'blur' }
                ],
            }
        }
    },
    mounted() {
        this.InitData = checkData().data
        this.TempData = this.InitData.slice()
        this.handleCurrentChange(this.currentPage)
    },
    watch: {
        rateSelect() {
            this.filterData()
        }
    },
    methods: {
        filterData() {
            if (this.rateSelect === '') {
                this.TempData = this.InitData.slice()
                this.handleCurrentChange(this.currentPage)
            } else {
                this.TempData = this.InitData.filter(i => i.rate === this.rateSelect)
                this.handleCurrentChange(this.currentPage)
            }
        },
        refreshData() {
            this.$refs['checkTable'].clearSort();
            this.rateSelect = ''
            this.filterData()
        },
        handleCurrentChange(val) {
            this.tableData = this.TempData.slice((val - 1) * 10, val * 10)
        },
        resetForm() {
            this.addForm = {
                time: new Date(),
                rate: 5,
                content: ''
            }
        },
        addData() {
            this.resetForm()
            this.isCreate = true
            this.dialogEdit = true
            this.$nextTick(() => {
                this.$refs['dialogForm'].clearValidate()
            })
        },
        editRow(row) {
            this.addForm = Object.assign({}, row)
            this.addForm.time = new Date()
            this.isCreate = false
            this.dialogEdit = true
            this.$nextTick(() => {
                this.$refs['dialogForm'].clearValidate()
            })
        },
        delRow(row) {
            this.InitData = this.InitData.filter(i => i !== row)
            this.filterData()
            this.$message({
                message: '删除成功',
                type: 'success'
            })
        },
        cancelEdit() {
            this.$message({
                message: '取消编辑',
            })
            this.dialogEdit = false
        },
        confirmAdd() {
            this.$refs['dialogForm'].validate((valid) => {
                if (valid) {
                    this.InitData.push({ author: 'admin', content: this.addForm.content, id: Math.max.apply(Math, this.InitData.map(item => { return item.id })) + 1, rate: this.addForm.rate, time: this.addForm.time.toLocaleString('zh-CN', { year: "numeric", month: "2-digit", day: "2-digit", hour: "numeric", minute: "numeric", second: "numeric" }).replaceAll('/', '-') })
                    this.$refs['checkTable'].clearSort();
                    this.currentPage = 1
                    this.filterData()
                    this.tableData = this.InitData.slice(-1).concat(this.tableData.slice(0, 10))
                    this.$message({
                        message: '提交成功',
                        type: 'success'
                    })
                } else {
                    this.$message.error('提交失败');
                    return false;
                }
            });
            this.dialogEdit = false
        },
        confirmUpdate() {
            this.$refs['dialogForm'].validate((valid) => {
                if (valid) {
                    const index = this.InitData.findIndex(i => i.id === this.addForm.id)
                    this.InitData.splice(index, 1, this.addForm)
                    this.InitData[index].time = this.addForm.time.toLocaleString('zh-CN', { year: "numeric", month: "2-digit", day: "2-digit", hour: "numeric", minute: "numeric", second: "numeric" }).replaceAll('/', '-')
                    this.$refs['checkTable'].clearSort();
                    this.filterData()
                    this.$message({
                        message: '提交成功',
                        type: 'success'
                    })
                } else {
                    this.$message.error('提交失败');
                    return false;
                }
            });
            this.dialogEdit = false
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
            if (prop === 'rate') {
                if (order === 'descending') {
                    this.TempData.sort((a, b) => b.rate - a.rate)
                } else {
                    this.TempData.sort((a, b) => a.rate - b.rate)
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
    }
}
</script>
