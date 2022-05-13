<template>
  <el-menu class="el-menu-vertical-demo" :collapse="isCollapse" background-color="#545c64" text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">
      <i class="el-icon-s-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-collection"></i>
      <span slot="title">笔记</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-notebook-1"></i>
      <span slot="title">文章</span>
    </el-menu-item>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span slot="title">代码</span>
      </template>
      <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="5">
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
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px
}

.el-menu-vertical-demo {
  height: 100%
}
</style>