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
                    <el-col :lg="24">
                        <el-card style="margin-bottom: 20px">
                            <div ref="lineChart" style="width: 100%; height: 300px;"></div>
                        </el-card>
                        <el-row :gutter="20">
                            <el-col :lg="12" :md="12">
                                <el-card style="margin-bottom: 20px">
                                    <div ref="pieChart" style="width: 100%; height: 300px;"></div>
                                </el-card>
                            </el-col>
                            <el-col :lg="12" :md="12">
                                <el-card style="margin-bottom: 20px">
                                    <div ref="barChart" style="width: 100%; height: 300px;"></div>
                                </el-card>
                            </el-col>
                        </el-row>
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
    name: 'HomeView',
    components: {
        SideBar,
        HeadBar,
        TagBar
    },
    data() {
        return {
            lineOption: {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['HTML', 'CSS', 'JavaScript']
                },
                xAxis: {
                    type: 'category',
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: 'HTML',
                        data: [150, 230, 224, 218, 135, 147, 260, 520, 432, 601, 334, 590, 430, 620],
                        type: 'line',
                        smooth: true
                    },
                    {
                        name: 'CSS',
                        data: [220, 182, 191, 234, 290, 330, 310, 150, 230, 224, 218, 135, 147, 260],
                        type: 'line',
                        smooth: true
                    },
                    {
                        name: 'JavaScript',
                        data: [520, 432, 601, 334, 590, 430, 620, 220, 182, 191, 234, 290, 330, 310],
                        type: 'line',
                        smooth: true
                    },
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
                            { value: 484, name: 'HTML' },
                            { value: 300, name: 'CSS' },
                            { value: 735, name: 'JavaScript' },
                            { value: 1048, name: 'Vue' },
                            { value: 580, name: 'elementUI' },
                        ]
                    }
                ]
            },
            barOption: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        // Use axis to trigger tooltip
                        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                    }
                },
                legend: {},
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                yAxis: {
                    type: 'value'
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                series: [
                    {
                        name: 'HTML',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: 'CSS',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [150, 212, 201, 154, 190, 330, 410]
                    },
                    {
                        name: 'JavaScript',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [320, 302, 301, 334, 390, 330, 320]
                    }
                ]
            },
        }
    },
    mounted() {
        let lineChart = this.$echarts.init(this.$refs.lineChart);
        this.lineOption && lineChart.setOption(this.lineOption);
        let pieChart = this.$echarts.init(this.$refs.pieChart);
        this.pieOption && pieChart.setOption(this.pieOption);
        let barChart = this.$echarts.init(this.$refs.barChart);
        this.barOption && barChart.setOption(this.barOption);
        window.onresize = () => {
            lineChart.resize()
            pieChart.resize()
            barChart.resize()
        }
    }
}
</script>