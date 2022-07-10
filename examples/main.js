import Vue from 'vue'
import App from './App.vue'
// 引入router
// import Router from './router/index.js'
import VueRouter from 'vue-router'
import router from './router'
//按需引入
import Button from '../packages/button/index'
import Icon from '../packages/icon/index'
import Input from '../packages/input/index'
Vue.config.productionTip = false

Vue.use(Button).use(Icon).use(Input).use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
