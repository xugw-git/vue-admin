<template>
    <header
        style="display:flex; align-items:center; justify-content:space-between; padding: 5px; padding-left: 20px; padding-right: 20px; background-color:#EEEEEE">
        <div>
            <el-button @click="handleCollapse" icon="el-icon-menu" size="mini" style="margin-right: 20px;">
            </el-button>
            <span>首页</span>
        </div>
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                <el-avatar :size="40" :src="circleUrl"></el-avatar>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>主页</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </header>
</template>

<script>
export default {
    data() {
        return {
            circleUrl: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        }
    },
    methods: {
        handleCollapse() {
            this.$store.commit("HandleCollapse")
        }
    }
}
</script>