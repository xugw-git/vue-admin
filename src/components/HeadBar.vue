<template>
    <el-header style="display:flex; align-items:center; justify-content:space-between;">
        <div class="hidden-sm-and-down" style="display:flex; align-items:center;">
            <el-button type="primary" plain @click="handleCollapse" icon="el-icon-menu" size="mini">
            </el-button>
            <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-left: 20px;">
                <el-breadcrumb-item v-for="(item, index) in crumbList" :key="index">{{ item }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="hidden-md-and-up">
            <el-button type="primary" plain @click="drawerMenu = true" icon="el-icon-menu" size="mini">
            </el-button>
            <span style="margin-left: 20px;">首页</span>
        </div>

        <el-drawer title="我是标题" :visible.sync="drawerMenu" :with-header="false" direction="ltr" size=200px>
            <el-menu background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
                style="height: 100%; border: none;">
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
                        <el-menu-item index="4-1" @click="linkRoute('export')"><i class="el-icon-printer"></i>数据导出
                        </el-menu-item>
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
    name: 'HeadBar',
    data() {
        return {
            circleUrl: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            drawerMenu: false,
        }
    },
    computed: {
        crumbList() {
            const crumbTrans = { home: '首页', note: '便签', check: '审核', tool: '工具', export: '数据导出' }
            let tempList = this.$route.path.split('/').filter(i => i !== '' && isNaN(i))
            tempList = tempList.map(i => i = crumbTrans[i]);
            tempList.unshift('首页')
            return tempList
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
    }
}
</script>