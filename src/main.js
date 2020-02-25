import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueJsonp from 'vue-jsonp'
import common from './models/common.js'
import Regex from './models/Regex.js'
import Meta from 'vue-meta';


// 自定义引用bootstrap
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "zico/css/zico.min.css";

Vue.config.productionTip = false
Vue.use(VueJsonp)
Vue.use(common)
Vue.use(Regex)
Vue.use(Meta);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
