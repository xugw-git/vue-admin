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
                    <el-col :lg="8">
                        <el-button v-show="barMark" @click="stopBar" plain type="primary" style="margin: 0px"
                            icon="el-icon-video-pause">
                            暂停</el-button>
                        <el-button v-show="!barMark" @click="startBar" plain type="primary" style="margin: 0px"
                            icon="el-icon-video-play">
                            播放</el-button>
                        <el-card style="margin-bottom: 20px">
                            <div ref="barRace" style="width: 100%; height: 500px;"></div>
                        </el-card>
                    </el-col>
                    <el-col :lg="8">
                        <el-button v-show="lineMark" @click="stopLine" plain type="primary" style="margin: 0px"
                            icon="el-icon-video-pause">暂停</el-button>
                        <el-button v-show="!lineMark" @click="startLine" plain type="primary" style="margin: 0px"
                            icon="el-icon-video-play">
                            播放</el-button>
                        <el-card style="margin-bottom: 20px">
                            <div ref="lineRace" style="width: 100%; height: 500px;"></div>
                        </el-card>
                    </el-col>
                    <el-col :lg="8">
                        <el-button v-show="dynamicMark" @click="stopDynamic" plain type="primary" style="margin: 0px"
                            icon="el-icon-video-pause">暂停</el-button>
                        <el-button v-show="!dynamicMark" @click="startDynamic" plain type="primary" style="margin: 0px"
                            icon="el-icon-video-play">播放</el-button>
                        <el-card style="margin-bottom: 20px">
                            <div ref="dynamicData" style="width: 100%; height: 500px;"></div>
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

const barData = [];
const colorList = ['#409EFF', '#67C23A', '#E6A23C', '#F56C6C', '#909399']
for (let i = 0; i < 5; i++) {
    barData.push({
        value: Math.round(Math.random() * 100), itemStyle: {
            color: colorList[i]
        }
    });
}

const lineA = [100]
const lineB = [200]
const lineC = [300]

let app = { count: 11 }
const categories = (function () {
    let now = new Date();
    let res = [];
    let len = 10;
    while (len--) {
        res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
        now = new Date(+now - 2000);
    }
    return res;
})();
const categories2 = (function () {
    let res = [];
    let len = 10;
    while (len--) {
        res.push(10 - len - 1);
    }
    return res;
})();
const data = (function () {
    let res = [];
    let len = 10;
    while (len--) {
        res.push(Math.round(Math.random() * 1000));
    }
    return res;
})();
const data2 = (function () {
    let res = [];
    let len = 0;
    while (len < 10) {
        res.push(+(Math.random() * 10 + 5).toFixed(1));
        len++;
    }
    return res;
})();

export default {
    components: {
        SideBar,
        HeadBar,
        TagBar
    },
    data() {
        return {
            barTimer: null,
            lineTimer: null,
            dynamicTimer: null,
            barRaceOption: {
                xAxis: {
                    max: 'dataMax'
                },
                yAxis: {
                    type: 'category',
                    data: ['A', 'B', 'C', 'D', 'E'],
                    inverse: true,
                    animationDuration: 300,
                    animationDurationUpdate: 300,
                    max: 5
                },
                series: [
                    {
                        realtimeSort: true,
                        type: 'bar',
                        data: barData,
                        label: {
                            show: true,
                            position: 'right',
                            valueAnimation: true
                        }
                    }
                ],
                legend: {
                    show: true
                },
                animationDuration: 0,
                animationDurationUpdate: 3000,
                animationEasing: 'linear',
                animationEasingUpdate: 'linear'
            },
            lineRaceOption: {
                xAxis: {
                    type: 'category',
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: 'A',
                        type: 'line',
                        data: lineA,
                        smooth: true
                    },
                    {
                        name: 'B',
                        type: 'line',
                        data: lineB,
                        smooth: true
                    },
                    {
                        name: 'C',
                        type: 'line',
                        data: lineC,
                        smooth: true
                    }
                ],
                legend: {
                    data: ['A', 'B', 'C']
                },
                animationDuration: 0,
                animationDurationUpdate: 2000,
                animationEasing: 'cubicInOut',
                animationEasingUpdate: 'cubicInOut'
            },
            dynamicOption: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#283b56'
                        }
                    }
                },
                legend: {},
                dataZoom: {
                    show: false,
                    start: 0,
                    end: 100
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        data: categories
                    },
                    {
                        type: 'category',
                        boundaryGap: true,
                        data: categories2
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        scale: true,
                        name: 'Price',
                        max: 30,
                        min: 0,
                        boundaryGap: [0.2, 0.2]
                    },
                    {
                        type: 'value',
                        scale: true,
                        name: 'Order',
                        max: 1200,
                        min: 0,
                        boundaryGap: [0.2, 0.2]
                    }
                ],
                series: [
                    {
                        name: 'Dynamic Bar',
                        type: 'bar',
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        data: data
                    },
                    {
                        name: 'Dynamic Line',
                        type: 'line',
                        data: data2
                    }
                ]
            }
        }
    },
    computed: {
        barRace() {
            return this.$echarts.init(this.$refs.barRace)
        },
        lineRace() {
            return this.$echarts.init(this.$refs.lineRace)
        },
        dynamicData() {
            return this.$echarts.init(this.$refs.dynamicData)
        },
        barMark() {
            return this.$store.state.ChartsMark.barMark
        },
        lineMark() {
            return this.$store.state.ChartsMark.lineMark
        },
        dynamicMark() {
            return this.$store.state.ChartsMark.dynamicMark
        },
    },
    mounted() {
        this.getBarRace()
        this.getLineRace()
        this.getDynamicData()

        let timer = null
        window.onresize = () => {
            if (timer !== null) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                this.barRace.resize()
                this.lineRace.resize()
                this.dynamicData.resize()
                timer = null
            }, 500)
        }
    },
    beforeDestroy() {
        clearInterval(this.barTimer)
        clearInterval(this.lineTimer)
        clearInterval(this.dynamicTimer)
    },
    methods: {
        getBarRace() {
            this.barRaceOption && this.barRace.setOption(this.barRaceOption)
            if (this.barMark) {
                this.barTimer = setInterval(() => {
                    for (var i = 0; i < barData.length; ++i) {
                        if (Math.random() > 0.9) {
                            barData[i].value += Math.round(Math.random() * 500);
                        } else {
                            barData[i].value += Math.round(Math.random() * 100);
                        }
                    }
                    this.barRace.setOption({ series: [{ type: 'bar', data: barData }] })
                }, 3000)
            }
        },
        getLineRace() {
            this.lineRaceOption && this.lineRace.setOption(this.lineRaceOption)
            if (this.lineMark) {
                this.lineTimer = setInterval(() => {
                    lineA.push(lineA.slice(-1)[0] + Math.round(Math.random() * 120))
                    lineB.push(lineB.slice(-1)[0] + Math.round(Math.random() * 100))
                    lineC.push(lineC.slice(-1)[0] + Math.round(Math.random() * 80))
                    this.lineRace.setOption({
                        series: [
                            {
                                name: 'A',
                                type: 'line',
                                data: lineA
                            },
                            {
                                name: 'B',
                                type: 'line',
                                data: lineB
                            },
                            {
                                name: 'C',
                                type: 'line',
                                data: lineC
                            }
                        ]
                    })
                }, 2100)
            }
        },
        getDynamicData() {
            this.dynamicOption && this.dynamicData.setOption(this.dynamicOption)
            if (this.dynamicMark) {
                this.dynamicTimer = setInterval(() => {
                    let axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');
                    data.shift();
                    data.push(Math.round(Math.random() * 1000));
                    data2.shift();
                    data2.push(+(Math.random() * 10 + 5).toFixed(1));
                    categories.shift();
                    categories.push(axisData);
                    categories2.shift();
                    categories2.push(app.count++);
                    this.dynamicData.setOption({
                        xAxis: [
                            {
                                data: categories
                            },
                            {
                                data: categories2
                            }
                        ],
                        series: [
                            {
                                data: data
                            },
                            {
                                data: data2
                            }
                        ]
                    })
                }, 2100)
            }
        },
        stopBar() {
            clearInterval(this.barTimer)
            this.$store.commit("SetBarMarkFalse")
        },
        startBar() {
            this.$store.commit("SetBarMarkTrue")
            this.getBarRace()
        },
        stopLine() {
            clearInterval(this.lineTimer)
            this.$store.commit("SetLineMarkFalse")
        },
        startLine() {
            this.$store.commit("SetLineMarkTrue")
            this.getLineRace()
        },
        stopDynamic() {
            clearInterval(this.dynamicTimer)
            this.$store.commit("SetDynamicMarkFalse")
        },
        startDynamic() {
            this.$store.commit("SetDynamicMarkTrue")
            this.getDynamicData()
        },
    }
}
</script>