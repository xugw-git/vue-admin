<template>
  <el-container style="height: 100vh">
    <el-aside style="width: auto;">
      <SideBar></SideBar>
    </el-aside>
    <el-container>
      <el-header style="padding: 0px;">
        <HeadBar></HeadBar>
      </el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-card class="box-card" body-style="padding: 15px">
              <div slot="header" style="display:flex; align-items:center; justify-content:space-around;">
                <el-avatar shape="square" :size="60" :src="squareUrl"></el-avatar>
                <span>admin</span>
              </div>
              <div class="text item" style="display:flex; align-items:center; justify-content:space-around;">
                <span style="font-size: small; color: darkgrey;">上次登录时间:</span><span
                  style="font-size: small;">2022-05-13
                  12:00</span>
              </div>
            </el-card>
          </el-col>
          <el-col :span="4">
            <el-card class="box-card">
              <div class="text item" style="display:flex; align-items:center; justify-content:space-around;">
                <span style="color: darkgrey;"><i class="el-icon-video-play"></i> 播放</span><span>999</span>
              </div>
            </el-card>
            <el-card class="box-card">
              <div class="text item" style="display:flex; align-items:center; justify-content:space-around;">
                <span style="color: darkgrey;"><i class="el-icon-document"></i> 阅读</span><span>999</span>
              </div>
            </el-card>
          </el-col>
          <el-col :span="4">
            <el-card class="box-card">
              <div class="text item" style="display:flex; align-items:center; justify-content:space-around;">
                <span style="color: darkgrey;"><i class="el-icon-user"></i> 粉丝</span><span>999</span>
              </div>
            </el-card>
            <el-card class="box-card">
              <div class="text item" style="display:flex; align-items:center; justify-content:space-around;">
                <span style="color: darkgrey;"><i class="el-icon-chat-line-square"></i> 弹幕</span><span>999</span>
              </div>
            </el-card>
          </el-col>
          <el-col :span="4">
            <el-card class="box-card">
              <div class="text item" style="display:flex; align-items:center; justify-content:space-around;">
                <span style="color: darkgrey;"><i class="el-icon-thumb"></i> 点赞</span><span>999</span>
              </div>
            </el-card>
            <el-card class="box-card">
              <div class="text item" style="display:flex; align-items:center; justify-content:space-around;">
                <span style="color: darkgrey;"><i class="el-icon-circle-check"></i> 投币</span><span>999</span>
              </div>
            </el-card>
          </el-col>
          <el-col :span="4">
            <el-card class="box-card">
              <div class="text item" style="display:flex; align-items:center; justify-content:space-around;">
                <span style="color: darkgrey;"><i class="el-icon-chat-round"></i> 评论</span><span>999</span>
              </div>
            </el-card>
            <el-card class="box-card">
              <div class="text item" style="display:flex; align-items:center; justify-content:space-around;">
                <span style="color: darkgrey;"><i class="el-icon-share"></i> 分享</span><span>999</span>
              </div>
            </el-card>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="8">
            <el-card class="box-card">
              <el-timeline>
                <el-timeline-item timestamp="2022/5/15" placement="top" color="#0bbd87">
                  <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>XUGW 提交于 2022/5/15 20:46</p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2022/5/8" placement="top" color="#0bbd87">
                  <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>XUGW 提交于 2022/5/8 20:46</p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2022/5/5" placement="top" color="#0bbd87">
                  <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>XUGW 提交于 2022/5/5 20:46</p>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
            </el-card>
          </el-col>
          <el-col :span="16">
            <el-card class="box-card">
              <div ref="lineChart" style="width: 100%; height: 300px;"></div>
            </el-card>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-card class="box-card">
                  <div ref="pieChart" style="width: 100%; height: 300px;"></div>
                </el-card>
              </el-col>
              <el-col :span="12">
                <el-card class="box-card">
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
import HeadBar from '../components/HeadBar.vue'

export default {
  name: 'HomeView',
  components: {
    SideBar,
    HeadBar
  },
  data() {
    return {
      squareUrl: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    }
  },
  mounted() {
    this.getLine();
    this.getPie();
    this.getBar();
  },
  methods: {
    getLine() {
      let chartDom = this.$refs.lineChart;
      let myChart = this.$echarts.init(chartDom);
      let option = {
        title: {
          text: '周播放/阅读量',
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['播放量', '阅读量']
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '播放量',
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
            smooth: true
          },
          {
            name: '阅读量',
            data: [220, 182, 191, 234, 290, 330, 310],
            type: 'line',
            smooth: true
          },
        ]
      };

      option && myChart.setOption(option);
    },
    getPie() {
      let chartDom = this.$refs.pieChart;
      let myChart = this.$echarts.init(chartDom);
      let option = {
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
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ]
          }
        ]
      };

      option && myChart.setOption(option);
    },
    getBar() {
      let chartDom = this.$refs.barChart;
      let myChart = this.$echarts.init(chartDom);
      let option = {
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
            name: 'Direct',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [320, 302, 301, 334, 390, 330, 320]
          },
          {
            name: 'Mail Ad',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Affiliate Ad',
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
            name: 'Video Ad',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [150, 212, 201, 154, 190, 330, 410]
          }
        ]
      };

      option && myChart.setOption(option);
    }
  }

}
</script>

<style scoped>
.box-card {
  margin-bottom: 20px;
}

.chart {
  height: 400px;
}
</style>