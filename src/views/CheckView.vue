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
                <template>
                    <el-select v-model="statusSelect" placeholder="状态" clearable style="width: 80px;">
                        <el-option v-for="item in statusOption" :key="item" :label="item" :value="item" />
                    </el-select>
                    <el-select v-model="nameSelect" placeholder="作者" clearable style="width: 80px;">
                        <el-option v-for="item in nameOption" :key="item" :label="item" :value="item" />
                    </el-select>
                    <el-button @click="refreshData" plain type="primary" style="margin: 0px; width: 80px;">重置 <i
                            class="el-icon-refresh"></i>
                    </el-button>
                    <el-button @click="addData" plain type="primary" style="margin: 0px; width: 80px;">新增 <i
                            class="el-icon-circle-plus-outline"></i>
                    </el-button>
                </template>
                <el-table :data="tableData" ref="checkTable" :highlight-current-row="true" style="width: 100%" stripe
                    border @sort-change="sortChange">
                    <el-table-column prop="id" label="序号" width="80" align="center" sortable="custom">
                    </el-table-column>
                    <el-table-column prop="title" label="标题" min-width="440" header-align="center">
                    </el-table-column>
                    <el-table-column prop="time" label="时间" width="200" align="center" sortable="custom">
                    </el-table-column>
                    <el-table-column prop="name" label="作者" width="100" align="center">
                    </el-table-column>
                    <el-table-column prop="rate" label="评分" width="160" align="center" sortable="custom">
                        <template slot-scope="{row}">
                            <el-rate v-model="row.rate" disabled></el-rate>
                        </template>
                    </el-table-column>
                    <el-table-column prop="status" label="状态" width="120" align="center" sortable="custom">
                        <template slot-scope="{row}">
                            <el-tag :type="row.status === '草稿' ? 'info' : 'success'" size="large">
                                {{ row.status }}
                            </el-tag>
                        </template>
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

                <el-dialog :title="isCreate === true ? '新增' : '更新'" :visible.sync="dialogEdit"
                    :width="isLargeScreen === true ? '50%' : '95%'">
                    <el-form :model="addForm" :rules="rules" ref="dialogForm">
                        <el-form-item label="时间" prop="time">
                            <el-date-picker v-model="addForm.time" type="datetime" placeholder="选择日期时间"
                                style="width: 200px">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="评分" prop="rate">
                            <el-select v-model="addForm.rate" placeholder="选择评分" clearable style="width: 200px">
                                <el-option v-for="item in rateOption" :key="item" :label="item" :value="item" />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="状态" prop="status">
                            <el-select v-model="addForm.status" placeholder="选择状态" clearable style="width: 200px">
                                <el-option v-for="item in statusOption" :key="item" :label="item" :value="item" />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="标题" prop="title">
                            <el-input v-model="addForm.title" placeholder="输入标题" clearable
                                :style="isLargeScreen === true ? 'width: 400px' : 'width: 200px'">
                            </el-input>
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
import axios from "axios"

export default {
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
            nameOption: new Set(),
            nameSelect: '',
            statusOption: ['草稿', '已发布'],
            statusSelect: '',
            isCreate: false,
            dialogEdit: false,
            currentPage: 1,
            addForm: {
                time: new Date(),
                title: '',
                rate: 5,
                status: '草稿'
            },
            rules: {
                time: [
                    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ],
                rate: [
                    { required: true, message: '请完成评分', trigger: 'change' }
                ],
                title: [
                    { required: true, message: '请输入评价', trigger: 'blur' },
                    { min: 5, message: '评价不少于 5 个字符', trigger: 'blur' }
                ],
                status: [
                    { required: true, message: '请选择状态', trigger: 'change' }
                ],
            }
        }
    },
    computed: {
        isLargeScreen() {
            return this.$store.state.DialogMark.isLargeScreen
        }
    },
    mounted() {
        axios
            .get("/checkdata")
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
            this.$refs['checkTable'].clearSort()
            this.nameSelect = ''
            this.statusSelect = ''
            this.filterData()
        },
        handleCurrentChange(val) {
            this.tableData = this.TempData.slice((val - 1) * 10, val * 10)
        },
        addData() {
            this.addForm = {
                time: new Date(),
                rate: 5,
                title: '',
                status: '草稿'
            }
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
                    this.InitData.push({ name: 'admin', title: this.addForm.title, id: Math.max.apply(Math, this.InitData.map(item => { return item.id })) + 1, rate: this.addForm.rate, time: this.addForm.time.toLocaleString('zh-CN', { year: "numeric", month: "2-digit", day: "2-digit", hour: "numeric", minute: "numeric", second: "numeric" }).replaceAll('/', '-'), status: this.addForm.status })
                    this.nameOption.add('admin')
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
