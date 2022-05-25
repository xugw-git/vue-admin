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
                <el-row :gutter="20">
                    <el-col :lg="16">
                        <el-card style="margin-bottom: 20px">
                            <el-row :gutter="20">
                                <el-col :lg="12">
                                    <div ref="lineChart" style="width: 100%; height: 350px;"></div>
                                </el-col>
                                <el-col :lg="12">
                                    <el-card shadow="hover">
                                        <div slot="header">
                                            <span>折线图</span>
                                            <el-button @click="resetLine" style="float: right; padding: 3px 0"
                                                type="text" icon="el-icon-refresh">重置</el-button>
                                        </div>
                                        <el-form :model="lineOption" size="small">
                                            <el-form-item label="A" label-width="50px">
                                                <el-input v-model="lineOption.series[0].data[0]" style="width: 150px">
                                                </el-input>
                                            </el-form-item>
                                            <el-form-item label="B" label-width="50px">
                                                <el-input v-model="lineOption.series[0].data[1]" style="width: 150px">
                                                </el-input>
                                            </el-form-item>
                                            <el-form-item label="C" label-width="50px">
                                                <el-input v-model="lineOption.series[0].data[2]" style="width: 150px">
                                                </el-input>
                                            </el-form-item>
                                            <el-form-item label="D" label-width="50px">
                                                <el-input v-model="lineOption.series[0].data[3]" style="width: 150px">
                                                </el-input>
                                            </el-form-item>
                                            <el-form-item label="E" label-width="50px">
                                                <el-input v-model="lineOption.series[0].data[4]" style="width: 150px">
                                                </el-input>
                                            </el-form-item>
                                        </el-form>
                                    </el-card>
                                </el-col>
                            </el-row>
                        </el-card>
                        <el-card style="margin-bottom: 20px">
                            <el-row :gutter="20">
                                <el-col :lg="12">
                                    <div ref="barChart" style="width: 100%; height: 350px;"></div>
                                </el-col>
                                <el-col :lg="12">
                                    <el-card shadow="hover">
                                        <div slot="header">
                                            <span>柱状图</span>
                                            <el-button @click="resetBar" style="float: right; padding: 3px 0"
                                                type="text" icon="el-icon-refresh">重置</el-button>
                                        </div>
                                        <el-form :model="barOption" size="small">
                                            <el-form-item label="A" label-width="50px">
                                                <el-input v-model="barOption.series[0].data[0].value"
                                                    style="width: 150px">
                                                </el-input>
                                            </el-form-item>
                                            <el-form-item label="B" label-width="50px">
                                                <el-input v-model="barOption.series[0].data[1].value"
                                                    style="width: 150px">
                                                </el-input>
                                            </el-form-item>
                                            <el-form-item label="C" label-width="50px">
                                                <el-input v-model="barOption.series[0].data[2].value"
                                                    style="width: 150px">
                                                </el-input>
                                            </el-form-item>
                                            <el-form-item label="D" label-width="50px">
                                                <el-input v-model="barOption.series[0].data[3].value"
                                                    style="width: 150px">
                                                </el-input>
                                            </el-form-item>
                                            <el-form-item label="E" label-width="50px">
                                                <el-input v-model="barOption.series[0].data[4].value"
                                                    style="width: 150px">
                                                </el-input>
                                            </el-form-item>
                                        </el-form>
                                    </el-card>
                                </el-col>
                            </el-row>
                        </el-card>
                    </el-col>
                    <el-col :lg="8">
                        <el-card style="margin-bottom: 20px">
                            <el-row :gutter="20">
                                <el-col>
                                    <div ref="pieChart" style="width: 100%; height: 350px;"></div>
                                </el-col>
                                <el-col>
                                    <el-card shadow="hover">
                                        <div slot="header">
                                            <span>饼图</span>
                                            <el-button @click="resetPie" style="float: right; padding: 3px 0"
                                                type="text" icon="el-icon-refresh">重置</el-button>
                                        </div>
                                        <el-form :model="pieOption" size="small">
                                            <el-form-item label="A" label-width="50px">
                                                <el-input v-model="pieOption.series[0].data[0].value"
                                                    style="width: 150px">
                                                </el-input>
                                            </el-form-item>
                                            <el-form-item label="B" label-width="50px">
                                                <el-input v-model="pieOption.series[0].data[1].value"
                                                    style="width: 150px">
                                                </el-input>
                                            </el-form-item>
                                            <el-form-item label="C" label-width="50px">
                                                <el-input v-model="pieOption.series[0].data[2].value"
                                                    style="width: 150px">
                                                </el-input>
                                            </el-form-item>
                                            <el-form-item label="D" label-width="50px">
                                                <el-input v-model="pieOption.series[0].data[3].value"
                                                    style="width: 150px">
                                                </el-input>
                                            </el-form-item>
                                            <el-form-item label="E" label-width="50px">
                                                <el-input v-model="pieOption.series[0].data[4].value"
                                                    style="width: 150px">
                                                </el-input>
                                            </el-form-item>
                                        </el-form>
                                    </el-card>
                                </el-col>
                            </el-row>

                        </el-card>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue'
import HeadBar from '@/components/HeadBar.vue'
import TagBar from '@/components/TagBar.vue'

export default {
    components: {
        SideBar,
        HeadBar,
        TagBar
    },
    data() {
        return {
            lineOption: {
                color: '#67C23A',
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['line']
                },
                xAxis: {
                    type: 'category',
                    data: ['A', 'B', 'C', 'D', 'E']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: 'line',
                        data: [100, 200, 300, 400, 500],
                        type: 'line',
                        smooth: true
                    }
                ]
            },
            barOption: {
                legend: {},
                xAxis: {
                    type: 'category',
                    data: ['A', 'B', 'C', 'D', 'E']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: 'bar',
                        data: [{
                            value: 100, itemStyle: {
                                color: '#409EFF'
                            }
                        }, {
                            value: 200, itemStyle: {
                                color: '#67C23A'
                            }
                        }, {
                            value: 300, itemStyle: {
                                color: '#E6A23C'
                            }
                        }, {
                            value: 400, itemStyle: {
                                color: '#F56C6C'
                            }
                        }, {
                            value: 500, itemStyle: {
                                color: '#909399'
                            }
                        }],
                        type: 'bar'
                    }
                ]
            },
            pieOption: {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: 'top',
                    left: 'left',
                    orient: 'vertical'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '40',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 100, name: 'A' },
                            { value: 200, name: 'B' },
                            { value: 300, name: 'C' },
                            { value: 400, name: 'D' },
                            { value: 500, name: 'E' },
                        ]
                    }
                ]
            },
        }
    },
    computed: {
        lineChart() {
            return this.$echarts.init(this.$refs.lineChart)
        },
        barChart() {
            return this.$echarts.init(this.$refs.barChart)
        },
        pieChart() {
            return this.$echarts.init(this.$refs.pieChart)
        }
    },
    watch: {
        lineOption: {
            handler() {
                this.getLineChart()
            },
            deep: true
        },
        barOption: {
            handler() {
                this.getBarChart()
            },
            deep: true
        },
        pieOption: {
            handler() {
                this.getPieChart()
            },
            deep: true
        }
    },
    mounted() {
        this.getLineChart()
        this.getBarChart()
        this.getPieChart()

        let timer = null
        window.onresize = () => {
            if (timer !== null) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                this.lineChart.resize()
                this.barChart.resize()
                this.pieChart.resize()
                timer = null
            }, 500)
        }
    },
    methods: {
        getPieChart() {
            this.pieOption && this.pieChart.setOption(this.pieOption)
        },
        getLineChart() {
            this.lineOption && this.lineChart.setOption(this.lineOption)
        },
        getBarChart() {
            this.barOption && this.barChart.setOption(this.barOption)
        },
        resetLine() {
            this.lineOption.series[0].data = [100, 200, 300, 400, 500]
        },
        resetBar() {
            this.barOption.series[0].data = [{
                value: 100, itemStyle: {
                    color: '#409EFF'
                }
            }, {
                value: 200, itemStyle: {
                    color: '#67C23A'
                }
            }, {
                value: 300, itemStyle: {
                    color: '#E6A23C'
                }
            }, {
                value: 400, itemStyle: {
                    color: '#F56C6C'
                }
            }, {
                value: 500, itemStyle: {
                    color: '#909399'
                }
            }]
        },
        resetPie() {
            this.pieOption.series[0].data = [
                { value: 100, name: 'A' },
                { value: 200, name: 'B' },
                { value: 300, name: 'C' },
                { value: 400, name: 'D' },
                { value: 500, name: 'E' },
            ]
        }
    }
}
</script>