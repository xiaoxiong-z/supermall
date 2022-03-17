// 入口JS
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import {Button} from 'mint-ui'

import './mock/mockServer'
  ''
// 注册全局组件
Vue.component(Button.name, Button)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
