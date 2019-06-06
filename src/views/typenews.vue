<template><!--在router中显示首页的子路由不是news就是相对的type路径  路径中type会变 但是引入的组件不会变 一直是typenews-->
    <div>
        <div class="typeList">
            <ul>
                <li v-for="item in news">
                    <img :src="item.thumb" width="100">
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            news:[]
        }
    },
    watch:{//监听加载的数据  以及传过来的参数 由参数决定引入哪个页面的数据
        $route:{
            handler(n){
                var type = n.params.type;  // n   this.$route
                this.getData(type);//将受到的type参数传入获取网址内容的函数中
            },
            deep:true,
            immediate:true

        }
    },
        methods:{
            getData(type){//获取网页上的数据
                this.$jsonp(`http://cre.mix.sina.com.cn/api/v3/get?callback&cateid=1&cre=tianyi&mod=${type}&merge=3&statics=1&length=20&up=1&down=0&fields=media`,{
                    _:Date.now()//添加时间戳
                }).then((res)=>{
                    this.news=res.data;
//                    console.log(this.news)
                })
            }
        }


}
</script>
<style>
    .typeList{
        position: fixed;
        top:2.06rem;
        left:0;
        right:0;
        bottom:1.4rem;
        overflow-y:auto;
    }
</style>