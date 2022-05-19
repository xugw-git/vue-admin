<template>
    <div class="container">
        <div class="inner-container">
            <el-form :label-position="labelPosition" :model="formLabelAlign" class="box">
                <h1>系统登录</h1>
                <el-form-item>
                    <el-input v-model="formLabelAlign.name" icon="el-icon-edit" style="width:90%;" placeholder="账号">
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="formLabelAlign.region" style="width:90%;" placeholder="密码"></el-input>
                </el-form-item>

                <el-button type="primary" style="width:90%;margin-bottom:30px;">登录</el-button>
                <div style="font-size: 14px;">
                    <span style="margin-right:18px;">账号 : admin</span>
                    <span>密码 : 123456</span>
                </div>
                <div style="font-size: 14px;">
                    <span style="margin-right:20px;">账号 : editor</span>
                    <span>密码 : 123456</span>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginView',
    data() {
        return {
            labelPosition: 'right',
            formLabelAlign: {
                name: '',
                region: '',
                type: ''
            }
        };
    }
}
</script>

<style scoped>
.container {
    position: relative;
    height: 100vh;
    background: #999999
}

.inner-container {
    border-radius: 2%;
    width: 360px;
    height: 400px;
    position: absolute;
    top: calc(50vh - 240px);
    left: calc(50vw - 180px);
    overflow: hidden;
}

.box {
    position: absolute;
    height: 100%;
    width: 100%;
    color: #fff;
    background: rgba(0, 0, 0, 0.1);
    padding: 30px 0px;
    text-align: center;
}

.box h1 {
    text-align: center;
    margin: 30px 0;
}
</style>