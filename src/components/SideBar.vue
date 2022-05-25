<template>
  <el-menu class="el-menu-vertical-demo hidden-sm-and-down" :collapse="isCollapse" background-color="#545c64"
    text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="1" @click="linkRoute('home')">
      <i class="el-icon-s-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="2" @click="linkRoute('note')">
      <i class="el-icon-date"></i>
      <span slot="title">便签</span>
    </el-menu-item>
    <el-menu-item index="3" @click="linkRoute('check'); SetMarkTrue()">
      <i class="el-icon-s-check"></i>
      <span slot="title">审核</span>
    </el-menu-item>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-s-data"></i>
        <span>图表</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="4-1" @click="linkRoute('common')"><i class="el-icon-pie-chart"></i>常用类型</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <el-menu-item index="4-2" @click="linkRoute('dynamic')"><i class="el-icon-data-analysis"></i>动态图表
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <el-menu-item index="4-3" @click="linkRoute('editable')"><i class="el-icon-edit-outline"></i>可编辑图表
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-s-tools"></i>
        <span>功能</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="5-1" @click="linkRoute('export')"><i class="el-icon-printer"></i>数据导出</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <el-menu-item index="5-2" @click="linkRoute('upload')"><i class="el-icon-upload"></i>数据导入</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  computed: {
    isCollapse() {
      return this.$store.state.SiderbarCollapse.isCollapse
    },
    isLargeScreen() {
      return this.$store.state.DialogMark.isLargeScreen
    }
  },
  methods: {
    linkRoute(item) {
      this.$router.push({ name: item })
    },
    SetMarkTrue() {
      this.$store.commit("SetTrue")
    }
  }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px
}

.el-menu-vertical-demo {
  height: 100%;
  border: none
}
</style>