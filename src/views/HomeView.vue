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
        <el-row :gutter="20">
          <el-col :lg="8">
            <el-tabs type="border-card" class="box-card">
              <el-tab-pane label="项目概况">
                <el-divider content-position="left"><i class="el-icon-link"></i> 链接</el-divider>
                <div style="text-align: center;">
                  <el-avatar shape="square" :size="80" :src="squareUrl"></el-avatar>
                  <div style="margin: 10px 0">
                    <el-link href="https://github.com/xugw-git/vue-admin" target="_blank" icon="el-icon-position">
                      项目仓库
                    </el-link>
                  </div>
                </div>
                <el-divider content-position="left"><i class="el-icon-setting"></i> 依赖</el-divider>
                <div style="margin: 50px;">
                  <el-tag style="margin: 5px 5px 0 0;">vue</el-tag>
                  <el-tag style="margin: 5px 5px 0 0;">element-ui</el-tag>
                  <el-tag style="margin: 5px 5px 0 0;">vue-router</el-tag>
                  <el-tag style="margin: 5px 5px 0 0;">vuex</el-tag>
                  <el-tag style="margin: 5px 5px 0 0;">echarts</el-tag>
                  <el-tag style="margin: 5px 5px 0 0;">js-cookie</el-tag>
                  <el-tag style="margin: 5px 5px 0 0;">axios</el-tag>
                  <el-tag style="margin: 5px 5px 0 0;">mockjs</el-tag>
                </div>
                <el-divider content-position="left"><i class="el-icon-document"></i> 语言</el-divider>
                <div style="padding: 10px 50px 20px 50px">
                  <el-tag type="success">Vue</el-tag>
                  <el-progress :percentage="89.5" color="#67C23A"></el-progress>
                  <el-tag type="warning">JavaScript</el-tag>
                  <el-progress :percentage="9.6" color="#E6A23C"></el-progress>
                  <el-tag type="danger">HTML</el-tag>
                  <el-progress :percentage="0.9" color="#F56C6C"></el-progress>
                </div>

              </el-tab-pane>
              <el-tab-pane label="时间线">
                <el-timeline>
                  <el-timeline-item timestamp="2022/5/20" placement="top" color="#0bbd87">
                    <el-card>
                      <p>更新 Github 模板</p>
                      <p>XUGW 提交于 2022/5/20 20:46</p>
                    </el-card>
                  </el-timeline-item>
                  <el-timeline-item timestamp="2022/5/15" placement="top" color="#0bbd87">
                    <el-card>
                      <p>更新 Github 模板</p>
                      <p>XUGW 提交于 2022/5/15 20:46</p>
                    </el-card>
                  </el-timeline-item>
                  <el-timeline-item timestamp="2022/5/8" placement="top" color="#0bbd87">
                    <el-card>
                      <p>更新 Github 模板</p>
                      <p>XUGW 提交于 2022/5/8 20:46</p>
                    </el-card>
                  </el-timeline-item>
                  <el-timeline-item timestamp="2022/5/5" placement="top" color="#0bbd87">
                    <el-card>
                      <p>更新 Github 模板</p>
                      <p>XUGW 提交于 2022/5/5 20:46</p>
                    </el-card>
                  </el-timeline-item>
                </el-timeline>
              </el-tab-pane>
            </el-tabs>
          </el-col>
          <el-col :lg="16">
            <el-card class="box-card">
              <div ref="lineChart" style="width: 100%; height: 300px;"></div>
            </el-card>
            <el-row :gutter="20">
              <el-col :lg="12" :md="12">
                <el-card class="box-card">
                  <div ref="pieChart" style="width: 100%; height: 300px;"></div>
                </el-card>
              </el-col>
              <el-col :lg="12" :md="12">
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
      squareUrl: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      lineOption: {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['HTML', 'CSS', 'JavaScript']
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
            name: 'HTML',
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
            smooth: true
          },
          {
            name: 'CSS',
            data: [220, 182, 191, 234, 290, 330, 310],
            type: 'line',
            smooth: true
          },
          {
            name: 'JavaScript',
            data: [520, 432, 601, 334, 590, 430, 620],
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
          },
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

<style scoped>
.box-card {
  margin-bottom: 20px;
}

.chart {
  height: 400px;
}
</style>