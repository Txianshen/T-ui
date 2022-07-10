import Vue from 'vue'
import App from './App.vue'

//按需引入
import Button from '../packages/button/index'
import Icon from '../packages/icon/index'
import Input from '../packages/input/index'
Vue.config.productionTip = false

Vue.use(Button).use(Icon).use(Input)

new Vue({
  render: h => h(App),
}).$mount('#app')
