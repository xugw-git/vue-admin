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
                <span style="font-size: 18px; color: #409EFF;">待完成项 <i class="el-icon-date"></i></span>
              </div>
              <draggable v-model="list1" v-bind="{
                animation: 200,
                group: 'description',
                disabled: false,
                ghostClass: 'ghost'
              }">
                <el-card v-for="(i, index) in list1" :key="index" style="margin: 5px 0;" shadow="hover">
                  <el-tag :type="i.import === '一般' ? 'primary' : i.import === '重要' ? 'warning' : 'danger'"
                    style="margin:0 20px 0 0;">{{ i.import }}</el-tag>
                  <span style="font-size: 14px; color: #409EFF;">{{ i.note }}</span>
                </el-card>
              </draggable>
            </el-card>
          </el-col>
          <el-col :lg="8">
            <el-card style="margin-bottom: 20px">
              <div slot="header" style="text-align: center">
                <span style="font-size: 18px; color: #F56C6C">正在处理 <i class="el-icon-alarm-clock"></i></span>
              </div>
              <draggable v-model="list2" v-bind="{
                animation: 200,
                group: 'description',
                disabled: false,
                ghostClass: 'ghost'
              }">
                <el-card v-for="(i, index) in list2" :key="index" style="margin: 5px 0;" shadow="hover">
                  <el-tag :type="i.import === '一般' ? 'primary' : i.import === '重要' ? 'warning' : 'danger'"
                    style="margin:0 20px 0 0;">{{ i.import }}</el-tag>
                  <span style="font-size: 14px; color: #F56C6C">{{ i.note }}</span>
                </el-card>
              </draggable>
            </el-card>
          </el-col>
          <el-col :lg="8">
            <el-card style="margin-bottom: 20px">
              <div slot="header" style="text-align: center">
                <span style="font-size: 18px; color: #67C23A">已完成项 <i class="el-icon-circle-check"></i></span>
              </div>
              <draggable v-model="list3" v-bind="{
                animation: 200,
                group: 'description',
                disabled: false,
                ghostClass: 'ghost'
              }">
                <el-card v-for="(i, index) in list3" :key="index" style="margin: 5px 0;" shadow="hover">
                  <el-tag :type="i.import === '一般' ? 'primary' : i.import === '重要' ? 'warning' : 'danger'"
                    style="margin:0 20px 0 0;">{{ i.import }}</el-tag>
                  <span style="font-size: 14px; color: #67C23A">{{ i.note }}</span>
                </el-card>
              </draggable>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import draggable from 'vuedraggable'
import SideBar from '@/components/SideBar.vue'
import HeadBar from '@/components/HeadBar.vue'
import TagBar from '@/components/TagBar.vue'
import axios from "axios"

export default {
  name: 'NoteView',
  components: {
    draggable,
    SideBar,
    HeadBar,
    TagBar
  },
  mounted() {
    axios
      .get("/notedata")
      .then(res => {
        this.list1 = res.data.data1
        this.list2 = res.data.data2
        this.list3 = res.data.data3
        this.$notify({
          title: '提示',
          message: '便签中的事件卡片可以直接拖动',
          type: 'success',
          duration: 3000,
          offset: 100
        });
      });
  },
  data() {
    return {
      list1: [],
      list2: [],
      list3: []
    }
  }
}
</script>
