<template><!--首页下的列表-->
    <div>
        <div class="newsList">
            <swiper></swiper>
            <!--引用mint-ui做上拉加载--><!--loadMore 上拉获取数据，可以不复用getData（）加载数据  自动加载数据-->
            <ul class="newsarea">
                <!--v-infinite-scroll="loadMore"-->
                <!--infinite-scroll-disabled="loading"-->
                <!--infinite-scroll-distance="10">-->
                <li v-for="item in news"  class="news">
                    <div>
                        <h4>{{item.title}}</h4>
                        <p class="newstime"><span>{{item.source}}</span>
                            <span>{{item.ptime}}</span>
                        </p>
                    </div>
                    <img :src="item.pic[0]" />
                    <span @click="remove(index)"><i class="fa fa-close"></i></span>
                </li>
            </ul>
        </div>

    </div>
</template>
<script>
    import swiper from './swiper';
    import { InfiniteScroll,Indicator, Toast  } from 'mint-ui';
    export default {
        components:{
            swiper
        },
        data(){
            return {
                news:[],
                loading:false,//false 表示没有请求，可以发送请求
                page:1
            }
        },
        created(){//获取网页中的数据 删除自带的回调函数以及时间戳  自己加时间戳和jsonp的回调函数
            /*拦截加载用的axios 所以获取数据用axios 不用jsonp*/
            this.$jsonp("http://temp.163.com/special/00804KV1/post1603_api_all.js",{
                _:Date.now(),
                callbackName:"callback"
            }).then((res)=>{//将获取的内容筛选出前十条放入数组中
                this.news=res.data.filter((item,index)=>index<10)
            })

        },
        methods:{
//            getData(){
//                if(this.page>3){
//                    Toast({//当页面到第三页 显示弹窗数据加载完毕  不在加载
//                        message:'数据加载完毕',
//                        position:'middle',
//                        duration:1500
//                    });
//                    return
//                }
//                // 开始拦截 最开始就显示加载   然后获取数据  加载完成后拦截器关闭
//              Indicator.open('加载中...');
//              this.loading=true              // 正在发送请求，不能再发请求了
////                此处数据是从网上网址里的数据中复制粘贴为json的  axios不能直接从网址中的回调函数中取数据 只能复制粘贴为新json文件
//                this.$axios.get("http://localhost:3000/data",{
//                    params:{//参数 用来分页
//                        _page:this.page,
//                        _limit:5
//                    }
//                }).then((res)=>{
//                    setTimeout(()=>{
//                        this.news=this.news.concat(res.data);//将之前获取的数据与后来的数据连起来concat
//                        this.loading=false;//停止发送请求
//                        Indicator.close();//关闭拦截器关闭加载
//                    },1500);
//                })
//            },
//            loadMore(){//继续加载  页数上加
//              this.page++;
//              this.getData()
//            },
            remove(index){
                this.news.splice(index,1)
            }
        }
    }

</script>
<style scoped lang="scss">
    .newsarea{
        background: #eee;
        li{
            display: flex;
            padding:0.1rem 0.2rem;
            border-bottom:1px solid #cccccc;
            h4{
                font-weight:normal;
            }
            p{
                display: flex;
                justify-content: space-between;
                span{
                    margin:0 0.3rem;
                    font-size:14px;
                }
            }
            img{
                padding:0.1rem 0.1rem;
            }

        }

    }
    .fa-close{
        border:1px solid #000;
        border-radius: 50%;
    }
</style>
<style scoped>
    .newsList{
        position: fixed;
        left:0;
        right:0;
        top:2.06rem;
        bottom:1.4rem;
        overflow-y:auto;
    }
</style>