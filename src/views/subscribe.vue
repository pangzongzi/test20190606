<template>
    <div>
        <Myheader></Myheader>
        <MyNav></MyNav>
        <h1>订阅</h1>
        <!--<mt-search v-model="value">-->
            <!--<mt-cell-->
                    <!--v-for="item in result"-->
                    <!--:title="item.title"-->
                    <!--:value="item.value">-->
            <!--</mt-cell>-->
        <!--</mt-search>-->
    </div>
</template>
<script>
    import { Search } from 'mint-ui';
    import Myheader from "./myheader.vue"
    import MyNav from "./mynav"
    export default {
        components:{
            Myheader,MyNav
        },
        data(){
            return{
                value:"",
                result:""
            }
        }
    }
</script>
<style>

</style>