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
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import HeadBar from '@/components/HeadBar.vue'
import TagBar from '@/components/TagBar.vue'

export default {
  components: {
    SideBar,
    HeadBar,
    TagBar,
  },
  data() {
    return {}
  },
  created() { },
  mounted() { },
  methods: {},
}
</script>