<template>
    <div class="detail">
        <div class="top-header">
            <h1>{{title}}</h1>
            <p>
                <span>发布于{{time | formatDate }}</span>
                <span>作者:{{loginname}}</span>
                <span>{{visitcount}}次浏览</span>
                <span>来自{{tab}}</span>
            </p>
        </div>
        <hr>
        <div class="markdown-body" v-html="contentHtml">
        </div>
    </div>
</template>

<script>
    const baseUrl = 'https://cnodejs.org/api/v1/topic/'   

    export default {
        data() {
            return {
                'contentHtml' : '',
                'title': '',
                'loginname': '',
                'time': '',
                'tab': '',
                'visitcount': ''
            }
        },
        created () {
            this.getDetailData()
        },
        methods: {
            getDetailData(){
                var _this = this;
                let id = this.$route.params.id
                this.$ajax.get(baseUrl+id,{
                    params: {
                        'mdrender': true
                    }
                }).then(function(response){
                    _this.contentHtml = response.data.data.content
                    _this.title = response.data.data.title
                    _this.loginname = response.data.data.author.loginname
                    _this.time = response.data.data.last_reply_at
                    _this.tab = response.data.data.tab
                    _this.visitcount = response.data.data.visit_count
                }).catch(function(error){
                    console.log(error)
                })
            }
        }
    }
</script>

<style lang="" scoped>    

    .detail{
        /*padding: 10px 20px;*/
        max-width: 960px;
        margin: 0 auto;
        border-radius: 2px;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);        
        background-color: #fff;
    }

    .top-header{
        padding-top: 20px;
    }

    .top-header span{
        padding: 0 5px;
        font-size: 14px;
        color: #ccc;
        border-right: 1px solid #ccc
    }

    .top-header span:last-child{
        border-right: none
    }

    .markdown-body{
        text-align: left;
        padding: 10px 20px;
    }

</style>