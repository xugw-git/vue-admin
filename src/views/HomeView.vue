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
              <div slot="header" style="text-align: center">
                <span style="font-size: 18px; color: #409EFF;"><i class="el-icon-s-data"></i> 项目概况</span>
              </div>
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
              <div style="margin: 30px;">
                <el-tag style="margin: 5px 5px 0 0;">vue</el-tag>
                <el-tag style="margin: 5px 5px 0 0;">element-ui</el-tag>
                <el-tag style="margin: 5px 5px 0 0;">vue-router</el-tag>
                <el-tag style="margin: 5px 5px 0 0;">vuex</el-tag>
                <el-tag style="margin: 5px 5px 0 0;">echarts</el-tag>
                <el-tag style="margin: 5px 5px 0 0;">js-cookie</el-tag>
                <el-tag style="margin: 5px 5px 0 0;">axios</el-tag>
                <el-tag style="margin: 5px 5px 0 0;">mockjs</el-tag>
                <el-tag style="margin: 5px 5px 0 0;">vuedraggable</el-tag>
                <el-tag style="margin: 5px 5px 0 0;">xlsx</el-tag>
                <el-tag style="margin: 5px 5px 0 0;">file-saver</el-tag>
              </div>
              <el-divider content-position="left"><i class="el-icon-document"></i> 语言</el-divider>
              <div style="padding: 10px 50px 20px 50px">
                <el-tag type="success">Vue</el-tag>
                <el-progress :text-inside="true" :stroke-width="20" :percentage="86.5" color="#67C23A"
                  style="margin-bottom: 10px"></el-progress>
                <el-tag type="warning">JavaScript</el-tag>
                <el-progress :text-inside="true" :stroke-width="20" :percentage="13.0" color="#E6A23C"
                  style="margin-bottom: 10px"></el-progress>
                <el-tag type="danger">HTML</el-tag>
                <el-progress :text-inside="true" :stroke-width="20" :percentage="0.5" color="#F56C6C"
                  style="margin-bottom: 10px"></el-progress>
              </div>
            </el-card>
          </el-col>
          <el-col :lg="8">
            <el-carousel :interval="4000" type="" height="250px" style="margin-bottom: 20px">
              <el-carousel-item v-for="(i, index) in carouselImages" :key="index">
                <img :src="i" class="image" style="height: 100%; width: 100%">
              </el-carousel-item>
            </el-carousel>
            <div ref="clockChart" style="width: 100%; height: 350px; margin-bottom: 20px"></div>
          </el-col>
          <el-col :lg="8">
            <el-card style="margin-bottom: 20px">
              <div slot="header" style="text-align: center">
                <span style="font-size: 18px; color: #409EFF;"><i class="el-icon-date"></i> 项目动态</span>
              </div>
              <el-timeline>
                <el-timeline-item timestamp="2022/5/22" placement="top" color="#409EFF">
                  <el-card>
                    <p style="margin:8px 0">添加数据导入导出功能组件</p>
                    <p style="margin:8px 0">XUGW 提交于 2022/5/22 12:04</p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2022/5/21" placement="top" color="#409EFF">
                  <el-card>
                    <p style="margin:8px 0">初步完成项目</p>
                    <p style="margin:8px 0">XUGW 提交于 2022/5/21 22:37</p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2022/5/17" placement="top" color="#409EFF">
                  <el-card>
                    <p style="margin:8px 0">完成布局相关的组件</p>
                    <p style="margin:8px 0">XUGW 提交于 2022/5/17 21:20</p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2022/5/12" placement="top" color="#67C23A">
                  <el-card>
                    <p style="margin:8px 0">初始化项目</p>
                    <p style="margin:8px 0">XUGW 创建于 2022/5/12 16:44</p>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
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
      squareUrl: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      carouselImages: [
        require('@/assets/img1.jpg'),
        require('@/assets/img2.jpg'),
        require('@/assets/img3.jpg'),
        require('@/assets/img4.jpg'),
      ],
      clockOption: {
        series: [
          {
            name: 'hour',
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            min: 0,
            max: 12,
            splitNumber: 12,
            clockwise: true,
            axisLine: {
              lineStyle: {
                width: 15,
                color: [[1, 'rgba(0,0,0,0.7)']],
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 15
              }
            },
            splitLine: {
              lineStyle: {
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 3,
                shadowOffsetX: 1,
                shadowOffsetY: 2
              }
            },
            axisLabel: {
              fontSize: 20,
              distance: 20,
              formatter: function (value) {
                if (value === 0) {
                  return '';
                }
                return value + '';
              }
            },
            anchor: {
              show: false,
              icon: 'path://M532.8,70.8C532.8,70.8,532.8,70.8,532.8,70.8L532.8,70.8C532.7,70.8,532.8,70.8,532.8,70.8z M456.1,49.6c-2.2-6.2-8.1-10.6-15-10.6h-37.5v10.6h37.5l0,0c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3v0h-22.5c-1.5,0.1-3,0.4-4.3,0.9c-4.5,1.6-8.1,5.2-9.7,9.8c-0.6,1.7-0.9,3.4-0.9,5.3v16h10.6v-16l0,0l0,0c0-2.7,2.1-5,4.7-5.3h10.3l10.4,21.2h11.8l-10.4-21.2h0c6.9,0,12.8-4.4,15-10.6c0.6-1.7,0.9-3.5,0.9-5.3C457,53,456.7,51.2,456.1,49.6z M388.9,92.1h11.3L381,39h-3.6h-11.3L346.8,92v0h11.3l3.9-10.7h7.3h7.7l3.9-10.6h-7.7h-7.3l7.7-21.2v0L388.9,92.1z M301,38.9h-10.6v53.1H301V70.8h28.4l3.7-10.6H301V38.9zM333.2,38.9v10.6v10.7v31.9h10.6V38.9H333.2z M249.5,81.4L249.5,81.4L249.5,81.4c-2.9,0-5.3-2.4-5.3-5.3h0V54.9h0l0,0c0-2.9,2.4-5.3,5.3-5.3l0,0l0,0h33.6l3.9-10.6h-37.5c-1.9,0-3.6,0.3-5.3,0.9c-4.5,1.6-8.1,5.2-9.7,9.7c-0.6,1.7-0.9,3.5-0.9,5.3l0,0v21.3c0,1.9,0.3,3.6,0.9,5.3c1.6,4.5,5.2,8.1,9.7,9.7c1.7,0.6,3.5,0.9,5.3,0.9h33.6l3.9-10.6H249.5z M176.8,38.9v10.6h49.6l3.9-10.6H176.8z M192.7,81.4L192.7,81.4L192.7,81.4c-2.9,0-5.3-2.4-5.3-5.3l0,0v-5.3h38.9l3.9-10.6h-53.4v10.6v5.3l0,0c0,1.9,0.3,3.6,0.9,5.3c1.6,4.5,5.2,8.1,9.7,9.7c1.7,0.6,3.4,0.9,5.3,0.9h23.4h10.2l3.9-10.6l0,0H192.7z M460.1,38.9v10.6h21.4v42.5h10.6V49.6h17.5l3.8-10.6H460.1z M541.6,68.2c-0.2,0.1-0.4,0.3-0.7,0.4C541.1,68.4,541.4,68.3,541.6,68.2L541.6,68.2z M554.3,60.2h-21.6v0l0,0c-2.9,0-5.3-2.4-5.3-5.3c0-2.9,2.4-5.3,5.3-5.3l0,0l0,0h33.6l3.8-10.6h-37.5l0,0c-6.9,0-12.8,4.4-15,10.6c-0.6,1.7-0.9,3.5-0.9,5.3c0,1.9,0.3,3.7,0.9,5.3c2.2,6.2,8.1,10.6,15,10.6h21.6l0,0c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3l0,0h-37.5v10.6h37.5c6.9,0,12.8-4.4,15-10.6c0.6-1.7,0.9-3.5,0.9-5.3c0-1.9-0.3-3.7-0.9-5.3C567.2,64.6,561.3,60.2,554.3,60.2z',
              showAbove: false,
              offsetCenter: [0, '-35%'],
              size: 120,
              keepAspect: true,
              itemStyle: {
                color: '#707177'
              }
            },
            pointer: {
              icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
              width: 12,
              length: '55%',
              offsetCenter: [0, '8%'],
              itemStyle: {
                color: '#C0911F',
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 8,
                shadowOffsetX: 2,
                shadowOffsetY: 4
              }
            },
            detail: {
              show: false
            },
            title: {
              offsetCenter: [0, '30%']
            },
            data: [
              {
                value: 0
              }
            ]
          },
          {
            name: 'minute',
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            min: 0,
            max: 60,
            clockwise: true,
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            pointer: {
              icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
              width: 8,
              length: '70%',
              offsetCenter: [0, '8%'],
              itemStyle: {
                color: '#C0911F',
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 8,
                shadowOffsetX: 2,
                shadowOffsetY: 4
              }
            },
            anchor: {
              show: false,
              size: 20,
              showAbove: false,
              itemStyle: {
                borderWidth: 15,
                borderColor: '#C0911F',
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 8,
                shadowOffsetX: 2,
                shadowOffsetY: 4
              }
            },
            detail: {
              show: false
            },
            title: {
              offsetCenter: ['0%', '-40%']
            },
            data: [
              {
                value: 0
              }
            ]
          },
          {
            name: 'second',
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            min: 0,
            max: 60,
            animationEasingUpdate: 'bounceOut',
            clockwise: true,
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            pointer: {
              icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
              width: 4,
              length: '85%',
              offsetCenter: [0, '8%'],
              itemStyle: {
                color: '#C0911F',
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 8,
                shadowOffsetX: 2,
                shadowOffsetY: 4
              }
            },
            anchor: {
              show: true,
              size: 15,
              showAbove: true,
              itemStyle: {
                color: '#C0911F',
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 8,
                shadowOffsetX: 2,
                shadowOffsetY: 4
              }
            },
            detail: {
              show: false
            },
            title: {
              offsetCenter: ['0%', '-40%']
            },
            data: [
              {
                value: 0
              }
            ]
          }
        ]
      }
    }
  },
  mounted() {
    setInterval(() => {
      let date = new Date();
      let second = date.getSeconds();
      let minute = date.getMinutes() + second / 60;
      let hour = (date.getHours() % 12) + minute / 60;
      this.clockOption.animationDurationUpdate = 300;
      clockChart.setOption({
        series: [
          {
            name: 'hour',
            animation: hour !== 0,
            data: [{ value: hour }]
          },
          {
            name: 'minute',
            animation: minute !== 0,
            data: [{ value: minute }]
          },
          {
            animation: second !== 0,
            name: 'second',
            data: [{ value: second }]
          }
        ]
      });
    }, 1000);
    let clockChart = this.$echarts.init(this.$refs.clockChart);
    this.clockOption && clockChart.setOption(this.clockOption);
    let timer = null
    window.onresize = () => {
      if (timer !== null) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        clockChart.resize()
        timer = null
      }, 500)
    }
  }
}
</script>