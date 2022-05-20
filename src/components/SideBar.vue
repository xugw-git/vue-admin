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
      <i class="el-icon-star-off"></i>
      <span slot="title">审核</span>
    </el-menu-item>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-notebook-1"></i>
        <span>文章</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="4-1" @click="linkRoute('list')"><i class="el-icon-menu"></i>文章列表
        </el-menu-item>
        <el-menu-item index="4-2" @click="linkRoute('create')"><i class="el-icon-edit-outline"></i>新建文章
        </el-menu-item>
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