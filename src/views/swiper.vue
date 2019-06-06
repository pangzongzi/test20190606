<template>
    <div>
        <div class="swiper-container"><!--官网粘贴-->
            <div class="swiper-wrapper"><!--官网粘贴-->
                <div class="swiper-slide" v-for="item in list"><!--官网粘贴  自己写循环-->
                    <img :src="item.thumb">  <!--循环内容为照片-->
                </div>

            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';//引用swiper轮播图插件
import "swiper/dist/css/swiper.css" //引用swiper的css样式
    export default {
        data(){
            return{
                list:[]
            }
        },
        created(){//获取网站上的数据 并放入数组
            this.$jsonp(`http://cre.mix.sina.com.cn/api/v3/get?callback&_=1559618231429`).then((res)=>{
                this.list=res.data.filter((item,index)=>index<5);
            })
        },
        watch:{
            //自动轮播图片时 官网上的swiper是异步加载 直接使用会导致轮播结束但是图片未加载完 结果是不轮播     加一个监听事件保证数据拿到 同时加一个$nextTick() 保证图片加载结束后进行轮播
            list(){
                this.$nextTick(()=>{
                    //官网API教程 自动切换 复制的
                    var mySwiper = new Swiper('.swiper-container', {
                        loop:true,//循环模式选项
                        autoplay: {
                            delay: 3000,//3秒自动切换
                            disableOnInteraction: false,//改为false
                        },
                        // 如果需要分页器
                        pagination: {
                            el: '.swiper-pagination',
                        }
                    })
                })
            }
        }
    }
</script>
<style scoped>
    .swiper-container{
        height:3.6rem;
        img{
            height:100%;
            width:100%;
        }
    }
</style>