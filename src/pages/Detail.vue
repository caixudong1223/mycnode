<template>
    <div class="detail">
        <div class="top-header">
            <h1>{{title}}</h1>
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
                'title': ''
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
                }).catch(function(error){
                    console.log(error)
                })
            }
        }
    }
</script>

<style lang="" scoped>    

    .detail{
        padding: 10px;
        max-width: 960px;
        margin: 0 auto;
        /*border: 1px solid #ccc;*/
    }

    .markdown-body{
        text-align: left;
    }

</style>