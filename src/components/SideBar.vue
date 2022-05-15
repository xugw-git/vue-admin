<template>
  <el-menu class="el-menu-vertical-demo hidden-sm-and-down" :collapse="isCollapse" background-color="#545c64"
    text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="1" @click="linkRoute('home')">
      <i class="el-icon-s-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="2" @click="linkRoute('note')">
      <i class="el-icon-collection"></i>
      <span slot="title">笔记</span>
    </el-menu-item>
    <el-menu-item index="3" @click="linkRoute('code')">
      <i class="el-icon-notebook-1"></i>
      <span slot="title">代码</span>
    </el-menu-item>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span slot="title" @click="linkRoute('article')">文章</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="4-1" @click="linkRoute('project')">开源项目</el-menu-item>
        <el-menu-item index="4-2" @click="linkRoute('software')">软件工具</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="5" @click="linkRoute('link')">
      <i class="el-icon-link"></i>
      <span slot="title">链接</span>
    </el-menu-item>
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