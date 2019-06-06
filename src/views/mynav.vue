<template>
    <div class="about">
        <div class="boxnav">
            <div class="mynav">
                <div class="swiper-container2">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide w" v-for="(item,index) in titles" :class="{'active':index===curIndex}">
                            {{item.text}}
                        </div>

                    </div>

                </div>
            </div>
            <span>三</span>
        </div>
    </div>
</template>
<script>
    import Swiper from "swiper";
    import "swiper/dist/css/swiper.css"
    export default {
        data(){
            return {
                curIndex:0,
                titles:[
                    {
                        id:1,
                        text:'头条',
                        type:"pcent"
                    },{
                        id:2,
                        text:'娱乐',
                        type:'pctech'
                    },{
                        id:3,
                        text:'科技',
                        type:'pcspt'
                    },
                    {
                        id:4,
                        text:'体育',
                        type:'pcent'
                    },
                    {
                        id:5,
                        text:'财经',
                        type:'pctech'
                    },{
                        id:6,
                        text:'军事',
                        type:'pcent'
                    },{
                        id:7,
                        text:'音乐',
                        type:'pcspt'
                    },
                    {
                        id:8,
                        text:'热点',
                        type:'pcent'
                    },
                    {
                        id:9,
                        text:'视频',
                        type:'pcent'
                    },
                    {
                        id:10,
                        text:'奇趣',
                        type:'pcent'
                    },
                    {
                        id:11,
                        text:'图片',
                        type:'pcent'
                    },{
                        id:12,
                        text:'财经',
                        type:'pcent'
                    },{
                        id:13,
                        text:'电影',
                        type:'pcent'
                    },
                    {
                        id:14,
                        text:'历史',
                        type:'pcent'
                    },
                    {
                        id:15,
                        text:'涨知',
                        type:'pcent'
                    },{
                        id:16,
                        text:'NBA',
                        type:'pcent'
                    },{
                        id:17,
                        text:'国际',
                        type:'pcent'
                    },
                    {
                        id:18,
                        text:'骑车',
                        type:'pcent'
                    },
                    {
                        id:19,
                        text:'头条',
                        type:'pcent'
                    },{
                        id:20,
                        text:'大咖',
                        type:'pcent'
                    }
                ]
            }
        },
        mounted(){//官网中API free模式
            var vm=this;
            var mySwiper = new Swiper('.swiper-container2',{
                freeMode : true,//free模式
                slidesPerView : 'auto',//网格分布
                on:{
                    click(){
                        this.setTransition(300);//设置过渡时间
                        //当前下标= 被点击的下标
                        vm.curIndex=this.clickedIndex;
                        //设当前被点击的元素是el 在轮播图中每一项都的class都是slide  全部加在一起就是slides 是一个集合
                        //设置字体居中
                        var el=this.slides[vm.curIndex];
                        //获取当前幻灯片的中心位置  元素本身左边距离 父元素 左边的距离加上元素自身宽度的一半
                        var elPos=el.offsetLeft+el.clientWidth/2;
                        //当前点击元素的父元素宽度 内容整体的宽度 是最长的
                        var werpperWidth=el.parentNode.clientWidth;
                        //获取最大滚动距离 就是除了可视窗口之外的长度
                        var maxDis=this.maxTranslate();
                        //最大的元素位置 就是当前视图窗口的一半加上除了可视窗口之外的长度 防止出现白色空白区域  因为maxPro是负值 所以加一个-号变正数
                        var maxPos=-maxDis+werpperWidth/2;
                        if(elPos<werpperWidth/2){//如果当前元素位置在中心位置之前 就不需要移动
                            this.setTranslate(0)
                        }else if(elPos>-maxDis){//如果当前元素位置比最大的滚动距离还大 也就是在最后一页上  就待在最后一页就行
//                            console.log(elPos,-maxDis,elPos+maxDis )//
                            this.setTranslate(maxDis)
                        }else {
                            this.setTranslate(werpperWidth/2-elPos)
                        }
                        //编程式导航 这就相当于router-link
                        if(vm.curIndex===0){//如果点击是第一个  直接返回到首页 相当于新闻页 router进行重定向了
                            vm.$router.push("/home/firstPage/news")
                        }else {//否则进入titles数组中被单击的那一个对象中的type
                            vm.$router.push("/home/firstPage/"+vm.titles[vm.curIndex].type)
                        }
                    }
                }
            })
        }
    }
</script>
<style>
    .boxnav{
        display: flex;
    }
    .mynav{
        width:90%;
        overflow: hidden;
    }
    .w{
        width:1.5rem;
        text-align: center;
    }
    .active{
        color:yellow;
        border-bottom:1px solid yellow;
    }
</style>