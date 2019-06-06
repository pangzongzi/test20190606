<template>
    <div>
        <h1>个人</h1>
        <!--<mt-tabbar v-model="selected">-->
            <!--<mt-tab-item id="外卖">-->
                <!--<img slot="icon" src="../assets/logo.png">-->
                <!--外卖-->
            <!--</mt-tab-item>-->
            <!--<mt-tab-item id="订单">-->
                <!--<img slot="icon" src="../assets/logo.png">-->
                <!--订单-->
            <!--</mt-tab-item>-->
            <!--<mt-tab-item id="发现">-->
                <!--<img slot="icon" src="../assets/logo.png">-->
                <!--发现-->
            <!--</mt-tab-item>-->
            <!--<mt-tab-item id="我的">-->
                <!--<img slot="icon" src="../assets/logo.png">-->
                <!--我的-->
            <!--</mt-tab-item>-->
        <!--</mt-tabbar>-->

        <mt-navbar v-model="selected">
            <mt-tab-item id="1">选项一</mt-tab-item>
            <mt-tab-item id="2">选项二</mt-tab-item>
            <mt-tab-item id="3">选项三</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell v-for="n in 10" :title="'内容 ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 4" :title="'测试 ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="n in 6" :title="'选项 ' + n" />
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
    import { Tabbar, TabItem } from 'mint-ui';
    import { Navbar} from 'mint-ui';

    export default {
        data(){
            return{
                selected:"1"
            }
        }
    }
</script>
<style>
    mt-tabbar{
        bottom: auto;
    }
</style>