<template>
    <div class="container">
        <div class="inner-container">
            <el-form label-width="5%" :model="loginForm" :rules="rules" ref="loginForm">
                <h2>系统登录</h2>
                <el-form-item prop="username" style="margin-right: 5%;">
                    <el-input v-model="loginForm.username" prefix-icon="el-icon-user" placeholder="账号" maxlength="10">
                    </el-input>
                </el-form-item>
                <el-form-item prop="password" style="margin-right: 5%;">
                    <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" placeholder="密码" show-password
                        maxlength="6">
                    </el-input>
                </el-form-item>

                <el-button @click="confirmLogin" icon="el-icon-s-promotion" type="primary" plain
                    style="width:90%;margin-bottom:30px;">登录
                </el-button>
                <div style="font-size: 14px;">
                    <span style="margin-right:20px;">账号 : admin</span>
                    <span>密码 : 123456</span>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginForm: {
                username: 'admin',
                password: '123456',
            },
            rules: {
                username: [
                    { required: true, message: '账号不能为空', trigger: 'blur' },
                    { min: 5, max: 10, message: '长度必须是 5~10 位字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { min: 6, message: '密码必须是 6 位字符', trigger: 'blur' },
                ],
            }
        };
    },
    methods: {
        confirmLogin() {
            this.$refs['loginForm'].validate((valid) => {
                if (valid) {
                    if (this.loginForm.username === 'admin' & this.loginForm.password === '123456') {
                        let token = Mock.Random.guid()
                        this.$store.commit('SetToken', token)
                        this.$router.push({ name: 'home' })
                    }
                    else {
                        this.$message.error('账号或密码错误')
                    }
                } else {
                    return false;
                }
            });
        }
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
    color: #fff;
    background: rgba(0, 0, 0, 0.1);
    padding: 20px 0px;
    text-align: center;
    border: 10px;
    border-radius: 2%;
    box-shadow: 0 0 20px #fff;
    width: 360px;
    height: 300px;
    position: absolute;
    top: calc(50vh - 240px);
    left: calc(50vw - 180px);
}
</style>