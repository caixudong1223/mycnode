<template>
    <div class="topics">        
        <div class="header">
            <ul>
                <li v-for="(item,index) in itemTab" :index="index" @click="changeTab(index)" :class="{'tab-active': initIndex == index}">{{item.title}}</li>
            </ul>
        </div>
        <div class="topicsList">
            <ul>
                <li class="card clearfix" v-for="(item,index) in topicsList">
                    <router-link :to="{name: 'detail', params: {id: item.id}}">
                        <div class="content-box">
                            <div class="avatarBox">
                                <img class="avatarImg" :src="item.author.avatar_url" alt="" :title="item.author.loginname">
                            </div>
                            <div class="topicInfo">
                                <p class="title">{{item.title}}</p>
                                <p class="reply">{{item.reply_count}}/{{item.visit_count}}</p>
                                <p>
                                    <span class="good" v-if="item.good">推荐</span>
                                    <span class="top" v-if="item.top">置顶</span>
                                    <span class="last-active-time">{{item.last_reply_at | formatDate}}</span>
                                </p>
                            </div>
                            <div title="分享" :class="{'tag-share': item.tab === 'share'}"></div>
                            <div title="问答" :class="{'tag-ask': item.tab === 'ask' }"></div>
                            <div title="招聘" :class="{'tag-job': item.tab === 'job'}"></div>
                            <div title="精华" :class="{'tag-good': item.tab === 'good'}"></div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="pageBox">
            <el-pagination @current-change="handlePageChange" :current-page="page.curPage" :total="500" :page-size="page.pageNum" layout=" prev, pager, next">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    const tabs = [{
        'title': '全部',
        'tab': 'all'
    }, {
        'title':'精华',
        'tab': 'good'
    }, {
        'title':'分享',
        'tab': 'share'
    }, {
        'title':'问答',
        'tab': 'ask'
    }, {
        'title':'招聘',
        'tab': 'job'
    }]

    const baseUrl = 'https://cnodejs.org/api/v1'   
    export default {
        data() {
            return {
                'itemTab': tabs,
                'initIndex': 0,
                'topicsList': [],
                'curTab': '',
                'page': {
                    curPage: 1,
                    totalNum: 100,
                    pageNum: 20
                }
            }
        },
        created () {
            this.loadTopicsByIndex(0)
        },
        methods: {
            changeTab(index) {
                var _this = this;
                _this.initIndex = index
                _this.loadTopicsByIndex(index)
                
            },
            loadTopicsByIndex(index){
                var _this = this
                _this.curTab = _this.itemTab[index].tab
                var params = {
                    'page': 1,
                    'tab': _this.itemTab[index].tab,
                    'limit': 20,
                    'mdrender': true
                }
                _this.loadTopics(params)
            },

            loadTopics(params){
                var _this = this
                this.$ajax.get(baseUrl+'/topics',{
                    params             
                }).then(function(response){
                   _this.topicsList = response.data.data
                   _this.page.curPage = params.page
                //    _this.page.totalNum = 1000;
                }).catch(function(error){
                   console.log(error)
                })
            },
          
            handlePageChange(val){
                var _this = this
                var params = {
                    'page': val,
                    'tab': _this.curTab,
                    'limit': 20,
                    'mdrender': true
                }
                _this.loadTopics(params)
            }

        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }

    .clearfix{overflow:auto;_height:1%}

    li{
        list-style-type: none;
    }

    .header{
        border-bottom: 1px solid hsla(0,0%,59%,.1);
        max-width: 960px;
        margin: 0 auto;
        padding: 15px 0;
        background-color: #fff;
    }

    .header ul li{
        padding: 3px 10px;
        display: inline-block;
        border: 1px solid #ccc;
        margin: 0 10px;
        cursor: pointer;
        border-radius: 3px;
    }

    .tab-active{
        background-color: #EECBAD;
        color: #fff;
        border: 1px solid #EECBAD;
    }

    .topicsList{
        width: 100%;
        margin: 0 auto;
        max-width: 960px;
        position: relative;
        background-color: #fff
    }

    .pageBox{
        width: 100%;
        margin: 0 auto;
        max-width: 960px;
        position: relative;
        background-color: #fff;
    }

    .card{
        border: 1px solid hsla(0,0%,59%,.1);
        border-top: none;
    }

    .card a{
        text-decoration: none;
    }
    .content-box{
        padding: 20px;
        display: flex;
    }

    .avatarBox{
        float: left;
        width: 10%;
    }

    .avatarImg{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .topicInfo{
        padding-left: 20px;    
        width: 90%;
    }

    .topicInfo p{
        text-align: left;
        padding: 5px;
    }

    .topicInfo .title{
        color: #888
    }

    .topicInfo .reply{
        font-size: 14px;
        color: #ccc;
    }

    .top{
        background-color: red;
        color: #fff;
        padding: 2px;
        font-size: 14px;
        border-radius: 3px;
    }

    .good{
        background-color: green;
        color: #fff;
        padding: 2px;
        font-size: 14px;
        border-radius: 3px;
    }
    
    .last-active-time{
        font-size: 14px;
        color: #ccc;
        float: right;
    }
    .timeInfo{
        float: right;
    }

    .tag-share{
        width: 0;
        height: 0;
        border-top: 20px solid #B0E2FF;
        border-left: 20px solid transparent;
    }

    .tag-ask{
        width: 0;
        height: 0;
        border-top: 20px solid #FFFF00;
        border-left: 20px solid transparent;
    }

    .tag-good{
        width: 0;
        height: 0;
        border-top: 20px solid #00CD66;
        border-left: 20px solid transparent;
    }

    .tag-job{
        width: 0;
        height: 0;
        border-top: 20px solid #EEA2AD;
        border-left: 20px solid transparent;
    }

    .el-pagination{
        padding: 10px;
        border: 1px solid hsla(0,0%,59%,.1);
        border-top: none;
    }
</style>