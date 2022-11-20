<template>
  <el-header style="display:flex; align-items:center; justify-content:space-between;">
    <div class="hidden-sm-and-down" style="display:flex; align-items:center;">
      <el-button type="primary" plain @click="handleCollapse" icon="el-icon-menu" size="mini">
      </el-button>
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-left: 20px;">
        <el-breadcrumb-item v-for="(item, index) in crumbList" :key="index">{{ item }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="hidden-md-and-up" style="display:flex; align-items:center;">
      <el-button type="primary" plain @click="drawerMenu = true" icon="el-icon-menu" size="mini">
      </el-button>
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-left: 20px;">
        <el-breadcrumb-item v-for="(item, index) in crumbList" :key="index">{{ item }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-drawer title="我是标题" :visible.sync="drawerMenu" :with-header="false" direction="ltr" size=200px>
      <el-menu background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="height: 100%; border: none;">
        <el-menu-item index="1" @click="linkRoute('home')">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="2" @click="linkRoute('note')">
          <i class="el-icon-date"></i>
          <span slot="title">便签</span>
        </el-menu-item>
        <el-menu-item index="3" @click="linkRoute('check'); SetMarkFalse()">
          <i class="el-icon-s-check"></i>
          <span slot="title">审核</span>
        </el-menu-item>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-s-data"></i>
            <span>图表</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1" @click="linkRoute('common')"><i class="el-icon-pie-chart"></i>常用类型 </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="4-2" @click="linkRoute('dynamic')"><i class="el-icon-data-analysis"></i>动态图表 </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="4-3" @click="linkRoute('editable')"><i class="el-icon-edit-outline"></i>可编辑图表 </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-s-tools"></i>
            <span>功能</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="5-1" @click="linkRoute('export')"><i class="el-icon-printer"></i>数据导出 </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="5-2" @click="linkRoute('upload')"><i class="el-icon-upload"></i>数据导入 </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="5-3" @click="linkRoute('jsplumb')"><i class="el-icon-position"></i>拖拽连线</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="5-4" @click="linkRoute('todo')"><i class="el-icon-s-tools"></i>待定</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-drawer>
    <el-dropdown trigger="click" style="padding: 20px">
      <span class="el-dropdown-link">
        <el-avatar :size="40" :src="circleUrl"></el-avatar>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="linkRoute('home')">首页</el-dropdown-item>
        <a target="_blank" href="https://github.com/xugw-git" style="text-decoration:none;">
          <el-dropdown-item>github</el-dropdown-item>
        </a>
        <el-dropdown-item @click.native="logOut" divided>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
export default {
  data() {
    return {
      circleUrl: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      drawerMenu: false,
    }
  },
  computed: {
    crumbList() {
      const crumbTrans = {
        home: '首页', note: '便签', check: '审核', charts: '图表', common: '常用类型', dynamic: '动态图表', editable: '可编辑图表', function: '功能', export: '数据导出', upload: '数据导入', jsplumb: '拖拽连线', todo: '待定',
      }
      let tempList = this.$route.path.split('/').filter(i => i !== '' && isNaN(i))
      tempList = tempList.map(i => i = crumbTrans[i]);
      tempList.unshift('首页')
      return tempList
    },
    isLargeScreen() {
      return this.$store.state.DialogMark.isLargeScreen
    }
  },
  methods: {
    handleCollapse() {
      this.$store.commit("HandleCollapse")
    },
    linkRoute(item) {
      this.$router.push({ name: item })
    },
    logOut() {
      this.$store.commit('RemoveToken')
      this.$router.push({ name: 'login' })
    },
    SetMarkFalse() {
      this.$store.commit("SetFalse")
    }
  }
}
</script>