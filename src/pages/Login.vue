<template>
    <div class="signin">
        <div class="formarea">
            <p class="title">
                登录
            </p>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="用户名">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.userpwd" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button style="width: 100px;" type="primary" @click="signin">登录</el-button>                    
                </el-form-item>
            </el-form>
        </div>
        
        
    </div>
</template>

<script>
    export default{
        data(){
            return {
                form: {
                    'username': '',
                    'userpwd': ''
                }
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