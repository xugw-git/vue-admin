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
                        style="margin: 0px; width: 100px;">添加
                    </el-button>
                </template>
                <el-table :data="tableData" highlight-current-row="true" style="width: 100%" stripe border>
                    <el-table-column prop="id" label="ID" width="100" align="center" sortable>
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
                <el-pagination background layout="prev, pager, next" :total="TempData.length" pager-count="5"
                    @current-change="handleCurrentChange"
                    style="margin-top: 20px; margin-bottom: 20px; justify-content:center; display: flex;">
                </el-pagination>

                <el-dialog title="添加数据" :visible.sync="dialogAdd">
                    <el-form label-position="top" :model="addForm" :rules="rules" ref="addform" status-icon>
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
                        <el-button plain type="primary" @click="confirmAdd('addform')">确 定</el-button>
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
            dialogAdd: false,
            dialogEdit: false,
            addForm: {
                time: '',
                rate: '',
                content: ''
            },
            rules: {
                time: [
                    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ],
                rate: [
                    { required: true, message: '请完成评分', trigger: ['blur', 'change'] }
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
        this.TempData = this.InitData
        this.handleCurrentChange(1)
    },
    watch: {
        rateSelect() {
            this.filterData()
        }
    },
    methods: {
        filterData() {
            if (this.rateSelect === '') {
                this.TempData = this.InitData
                this.handleCurrentChange(1)
            } else {
                this.TempData = this.InitData.filter(i => i.rate === this.rateSelect)
                this.handleCurrentChange(1)
            }
        },
        refreshData() {
            this.rateSelect = ''
        },
        handleCurrentChange(val) {
            this.tableData = this.TempData.slice((val - 1) * 10, val * 10)
        },
        addData() {
            this.dialogAdd = true
        },
        editRow(row) {
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
            this.addForm = {
                time: '',
                rate: '',
                content: ''
            }
            this.$message({
                message: '取消编辑',
            })
            this.dialogAdd = false
        },
        confirmAdd(formName) {
            console.log(this.addForm.time)
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.InitData.push({ author: 'admin', content: this.addForm.content, id: Math.max.apply(Math, this.InitData.map(item => { return item.id })) + 1, rate: this.addForm.rate, time: this.addForm.time.toLocaleString().replaceAll('/', '-') })
                    this.$message({
                        message: '提交成功',
                        type: 'success'
                    })
                } else {
                    this.$message.error('提交失败');
                    return false;
                }
            });
            this.addForm = {
                time: '',
                rate: '',
                content: ''
            }
            this.dialogAdd = false
        }
    }
}
</script>
