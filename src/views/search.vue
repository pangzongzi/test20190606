<template>
    <div>
        <sapn @click="go"> < </sapn>
        <input type="text">
        搜索
    </div>
</template>
<script>
    export default {
        methods:{
            go(){
                return this.$router.go(-1)
            }
        }
    }
</script>