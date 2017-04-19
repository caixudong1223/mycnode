<template>
    <div class="header">
        <el-row>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :offset="4">
                <el-input v-model="inputVal" icon="search" :on-icon-click="queryByVal"></el-input>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                inputVal: ''
            }
        },
        methods: {
            queryByVal(ev){
                console.log(this.inputVal);
            }
        }
    }
</script>

<style scoped>
    .header{
        background-color: #ccc;
    }
</style>