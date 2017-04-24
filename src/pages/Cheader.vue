<template>
    <div class="nav">
        <el-menu theme="dark" :default-active="defaultActiveIndex" mode="horizontal">
            <router-link to="/">
                <el-menu-item index="1">首页</el-menu-item>
            </router-link>
            
            <router-link to="/getstart">    
                <el-menu-item index="2">新手入门</el-menu-item>
            </router-link>
            
            
            <router-link to="/api">
                <el-menu-item index="3">API</el-menu-item>
            </router-link>
            
            
            <router-link to="/about">
                <el-menu-item index="4">关于</el-menu-item>
            </router-link>
            
            
            <router-link to="/signup">
                <el-menu-item index="5" v-if="!loginState">注册</el-menu-item>
            </router-link>
            
            
            <router-link to="/signin">
                <el-menu-item index="6" v-if="!loginState">登录</el-menu-item>
            </router-link>
            
            
            <!--<router-link to="/setting">
                <el-menu-item index="7" v-if="loginState">设置</el-menu-item>
            </router-link>-->
            
            
            <router-link to="/">
                <el-menu-item index="8" v-if="loginState" @click="loginOut">退出</el-menu-item>
            </router-link>
            
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                'defaultActiveIndex': '1',
                'loginState': false,
                'userName': '',
            }
        },
        created(){
            this.getUserInfo()
        },
        methods: {
            getUserInfo() {
                var _this = this;

                _this.loginState = window.localStorage.getItem('loginState');
                if(_this.loginState){
                    _this.userName = window.localStorage.getItem('userName');
                }
            },
            loginOut(){
                var _this = this;
                window.localStorage.clear();
                // window.localStorage.setItem('loginState',false);
                // _this.rerender = false;
                // _this.rerender = true;
            }
        }
    }
</script>

<style scoped>
    .nav{
        max-width: 960px;
        margin: 0 auto;
    }
    .el-menu-item a{
        text-decoration: none;
    }
</style>