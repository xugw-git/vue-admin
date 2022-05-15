<template>
    <el-header style="display:flex; align-items:center; justify-content:space-between;">
        <div class="hidden-sm-and-down">
            <el-button @click="handleCollapse" icon="el-icon-menu" size="mini">
            </el-button>
            <span style="margin-left: 20px;">首页</span>
        </div>
        <div class="hidden-md-and-up">
            <el-button @click="drawerMenu = true" icon="el-icon-menu" size="mini">
            </el-button>
            <span style="margin-left: 20px;">首页</span>
        </div>
        <el-drawer title="我是标题" :visible.sync="drawerMenu" :with-header="false" direction="ltr" size=200px>
            <el-menu background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
                style="height: 100%; border: none;">
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
        </el-drawer>
        <el-dropdown trigger="click" style="padding: 20px">
            <span class="el-dropdown-link">
                <el-avatar :size="40" :src="circleUrl"></el-avatar>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>主页</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
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
    methods: {
        handleCollapse() {
            this.$store.commit("HandleCollapse")
        }
    }
}
</script>