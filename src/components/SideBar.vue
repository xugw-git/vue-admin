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
    <el-menu-item index="3" @click="linkRoute('check')">
      <i class="el-icon-s-check"></i>
      <span slot="title">审核</span>
    </el-menu-item>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-s-tools"></i>
        <span>工具</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="4-1" @click="linkRoute('export')"><i class="el-icon-printer"></i>数据导出</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'SideBar',
  computed: {
    isCollapse() {
      return this.$store.state.HandleCollapse.isCollapse
    }
  },
  methods: {
    linkRoute(item) {
      this.$router.push({ name: item })
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