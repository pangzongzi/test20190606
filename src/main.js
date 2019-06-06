import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.prototype.$axios=axios
import VueJsonp from 'vue-jsonp';
import "./assets/js/flexble.js"
//引用拦截加载的文件
import "./request"
//Mint-UI库引入 三步
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

Vue.use(VueJsonp);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
