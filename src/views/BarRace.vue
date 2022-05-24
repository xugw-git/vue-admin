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
                        <el-card style="margin-bottom: 20px">
                            <div ref="barRace" style="width: 100%; height: 500px;"></div>
                        </el-card>
                    </el-col>
                    <el-col :lg="8">
                        <el-card style="margin-bottom: 20px">
                            <div ref="lineRace" style="width: 100%; height: 500px;"></div>
                        </el-card>
                    </el-col>
                    <el-col :lg="8">
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

const data = [];
const colorList = ['#409EFF', '#67C23A', '#E6A23C', '#F56C6C', '#909399']
for (let i = 0; i < 5; ++i) {
    data.push({
        value: Math.round(Math.random() * 200), itemStyle: {
            color: colorList[i]
        }
    });
}

export default {
    components: {
        SideBar,
        HeadBar,
        TagBar
    },
    data() {
        return {
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
                        name: 'Bar Race Chart',
                        type: 'bar',
                        data: data,
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
            }
        }
    },
    mounted() {
        let barRace = this.$echarts.init(this.$refs.barRace);
        this.barRaceOption && barRace.setOption(this.barRaceOption);
        function run() {
            for (var i = 0; i < data.length; ++i) {
                if (Math.random() > 0.9) {
                    data[i].value += Math.round(Math.random() * 2000);
                } else {
                    data[i].value += Math.round(Math.random() * 200);
                }
            }
            barRace.setOption({
                series: [
                    {
                        type: 'bar',
                        data
                    }
                ]
            });
        }
        setInterval(() => { run() }, 3000);

        let timer = null
        window.onresize = () => {
            if (timer !== null) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                barRace.resize()
                timer = null
            }, 500)
        }
    }
}
</script>