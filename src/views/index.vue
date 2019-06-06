<template>
    <div>
        <div class="top">
            <Myheader></Myheader>
            <Mynav></Mynav>
        </div>

        <!--将有meta.keepAlive的组件进行本地缓存-->
        <keep-alive v-if="$route.meta.keepAlive">
            <router-view></router-view>
        </keep-alive>
        <!--没有meta.keepAlive的组件正常加载-->
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>
<script >
    import Myheader from "./myheader.vue";
    import Mynav from "./mynav.vue"
    export default {
        components:{
            Myheader,Mynav
        }
    }
</script>
<style scoped>
.top{
    position: fixed;
    top:0;
    left:0;
    right: 0;
    background:#fff;
}
</style>