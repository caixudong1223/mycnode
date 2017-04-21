<template>
    <div class="nav">
        <el-menu theme="dark" :default-active="defaultActiveIndex" mode="horizontal">
            <el-menu-item index="1">
                <router-link to="/">首页</router-link>
            </el-menu-item>
            <el-menu-item index="2">
                <router-link to="/getstart">新手入门</router-link>
            </el-menu-item>
            <el-menu-item index="3">
                <router-link to="/api">API</router-link>
            </el-menu-item>
            <el-menu-item index="4">
                <router-link to="/about">关于</router-link>
            </el-menu-item>
            <el-menu-item index="5" v-if="!loginState">
                <router-link to="/signup">注册</router-link>
            </el-menu-item>
            <el-menu-item index="6" v-if="!loginState">
                <router-link to="/signin">登录</router-link>
            </el-menu-item>
            <el-menu-item index="7" v-if="loginState">
                <router-link to="/setting">设置</router-link>
            </el-menu-item>
            <el-menu-item index="8" v-if="loginState" @click="loginOut">
                <router-link to="/">退出</router-link>
            </el-menu-item>
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