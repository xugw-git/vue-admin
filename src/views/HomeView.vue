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
            <el-card class="box-card">
              <div slot="header" style="display:flex; align-items:center; justify-content:space-around;">
                <el-avatar shape="square" :size="80" :src="squareUrl"></el-avatar>
                <span>admin</span>
              </div>
              <div class="text item" style="display:flex; align-items:center; justify-content:space-around;">
                <span style="font-size: small; color: darkgrey;">上次登录时间:</span><span
                  style="font-size: small;">2022-05-13 12:00</span>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <div slot="header" style="display:flex; align-items:center; justify-content:space-around;">
                <el-avatar shape="square" :size="80" :src="squareUrl"></el-avatar>
                <span>admin</span>
              </div>
              <div class="text item" style="display:flex; align-items:center; justify-content:space-around;">
                <span style="font-size: small; color: darkgrey;">上次登录时间:</span><span
                  style="font-size: small;">2022-05-13 12:00</span>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <div slot="header" style="display:flex; align-items:center; justify-content:space-around;">
                <el-avatar shape="square" :size="80" :src="squareUrl"></el-avatar>
                <span>admin</span>
              </div>
              <div class="text item" style="display:flex; align-items:center; justify-content:space-around;">
                <span style="font-size: small; color: darkgrey;">上次登录时间:</span><span
                  style="font-size: small;">2022-05-13 12:00</span>
              </div>
            </el-card>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="24">
            <el-card class="box-card">
              <div slot="header" style="display:flex; align-items:center; justify-content:space-around;">
                <el-avatar shape="square" :size="80" :src="squareUrl"></el-avatar>
                <span>admin</span>
              </div>
              <div class="text item" style="display:flex; align-items:center; justify-content:space-around;">
                <span style="font-size: small; color: darkgrey;">上次登录时间:</span><span
                  style="font-size: small;">2022-05-13 12:00</span>
              </div>
            </el-card>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="8">
            <el-card class="box-card">
              <div slot="header" style="display:flex; align-items:center; justify-content:space-around;">
                <el-avatar shape="square" :size="80" :src="squareUrl"></el-avatar>
                <span>admin</span>
              </div>
              <div class="text item" style="display:flex; align-items:center; justify-content:space-around;">
                <span style="font-size: small; color: darkgrey;">上次登录时间:</span><span
                  style="font-size: small;">2022-05-13 12:00</span>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <div slot="header" style="display:flex; align-items:center; justify-content:space-around;">
                <el-avatar shape="square" :size="80" :src="squareUrl"></el-avatar>
                <span>admin</span>
              </div>
              <div class="text item" style="display:flex; align-items:center; justify-content:space-around;">
                <span style="font-size: small; color: darkgrey;">上次登录时间:</span><span
                  style="font-size: small;">2022-05-13 12:00</span>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <div slot="header" style="display:flex; align-items:center; justify-content:space-around;">
                <el-avatar shape="square" :size="80" :src="squareUrl"></el-avatar>
                <span>admin</span>
              </div>
              <div class="text item" style="display:flex; align-items:center; justify-content:space-around;">
                <span style="font-size: small; color: darkgrey;">上次登录时间:</span><span
                  style="font-size: small;">2022-05-13 12:00</span>
              </div>
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
}
</script>

<style>
.box-card {
  margin-bottom: 20px;
}
</style>