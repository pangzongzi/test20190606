<template>
    <div class="headers">
        <header class="myheader">
            <span ><i class="fa fa-volume-up"></i></span>
            <img src="../assets/img/top-logo.png">
            <span>
                <router-link to="/search">
                    <i class="fa fa-search"></i>
                </router-link>
            </span>
        </header>

    </div>
</template>
<style scoped lang="scss">
    .myheader{
        /*background: #fff;*/
        display: flex;
        justify-content: space-around;
        padding:0.2rem;
    }


</style>