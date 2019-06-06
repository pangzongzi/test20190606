<template>
  <div class="home">
  <router-view></router-view>
    <div class="footers">
      <ul>
        <li> <router-link to="/home/firstPage"><i class="fa fa-home"></i>首页</router-link></li>
        <li> <router-link to="/home/video"><i class="fa fa-home"></i>视频</router-link></li>
        <li> <router-link to="/home/sub"><i class="fa fa-home"></i>订阅</router-link></li>
        <li> <router-link to="/home/user"><i class="fa fa-home"></i>个人</router-link></li>
      </ul>

    </div>

  </div>
</template>

<script>

export default {
  name: 'home',
  components: {

  }
}
</script>
<style lang="scss">
.box{
  width:100px;
  height:100px;
  background:#ccc;
  span{
    color:blue;
  }
}
  .footers {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
  }
  .footers ul li{
    display: inline-block;
    width:25%;
    text-align: center;
    i{
      display: inline-block;
      text-align: center;
      width:100%;
      height: 0.4rem;
    }
  }
</style>
