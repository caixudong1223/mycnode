<template>
    <div class="signin">
        <div class="formarea">
            <p class="title">
                登录
            </p>
            <el-form ref="form" :model="form" label-width="80px">
                <!--<el-form-item label="用户名">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.userpwd" type="password"></el-input>
                </el-form-item>-->
                <el-form-item label="Token">
                    <el-input v-model="form.accessToken"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button style="width: 100px;" type="primary" @click="login">登录</el-button>                    
                </el-form-item>
            </el-form>
        </div>
        
        
    </div>
</template>

<script>
    const baseUrl = 'https://cnodejs.org/api/v1/accesstoken';
    export default{
        data(){
            return {
                form: {
                    'username': '',
                    'userpwd': '',
                    'accessToken': ''
                }
            }
        },
        methods: {
            login() {
                var _this = this;
                _this.$ajax.post(baseUrl, {
                    // accesstoken: _this.form.accessToken,
                    accesstoken: 'ea680108-d481-4fc8-8826-8dc5e32907d4'
                }).then((response) => {
                    var data = response.data;
                    if(data.success === true) {
                        _this.$message({
                            type: 'success',
                            message: '欢迎'+data.loginname
                        })
                        
                        window.localStorage.setItem('loginState',true)
                        window.localStorage.setItem('accessToken',_this.form.accessToken)
                        window.localStorage.setItem('userName', data.loginname)
                        this.$router.go(-1)//回到登录之前的页面
                    }
                }).catch((error) => {
                    console.log(error)
                    _this.$message({
                        type: 'error',
                        message: '登录失败'
                    })
                })
            }
        }
    }
</script>

<style lang="" scoped>
    .signin{
        max-width: 960px;
        margin: 0 auto;
        background-color: #fff;
    }

    .formarea{
        padding: 20px;
        max-width: 400px;
        margin: 0 auto
    }
</style>