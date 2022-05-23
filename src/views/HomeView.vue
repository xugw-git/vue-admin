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
                <el-progress :text-inside="true" :stroke-width="20" :percentage="89.2" color="#67C23A"
                  style="margin-bottom: 10px"></el-progress>
                <el-tag type="warning">JavaScript</el-tag>
                <el-progress :text-inside="true" :stroke-width="20" :percentage="10.0" color="#E6A23C"
                  style="margin-bottom: 10px"></el-progress>
                <el-tag type="danger">HTML</el-tag>
                <el-progress :text-inside="true" :stroke-width="20" :percentage="0.8" color="#F56C6C"
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
            <el-card style="margin-bottom: 20px">
              <div slot="header" style="text-align: center">
                <span style="font-size: 18px; color: #409EFF;"><i class="el-icon-document-copy"></i> UI 组件</span>
              </div>
              <el-collapse accordion style="margin-bottom: 20px">
                <el-collapse-item title="首页">
                  <el-tag>卡片</el-tag>
                  <el-tag>走马灯</el-tag>
                  <el-tag>折叠面板</el-tag>
                  <el-tag>时间线</el-tag>
                </el-collapse-item>
                <el-collapse-item title="便签">
                  <el-tag>卡片</el-tag>
                </el-collapse-item>
                <el-collapse-item title="审核">
                  <el-tag>表格</el-tag>
                </el-collapse-item>
              </el-collapse>
            </el-card>
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
  name: 'HomeView',
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
    }
  },
}
</script>