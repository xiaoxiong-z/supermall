import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home/home'
import Profile from '../pages/Profile/profile'
import Serch from '../pages/Serch/serch'
import Detail from '../pages/Detail/detail'
import Login from '../pages/Login/Login'
import UserInfo from '../pages/UserInfo/UserInfo'

import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopSubscribe from '../pages/Shop/ShopSubscribe/ShopSubscribe'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import Service from '../pages/Profile/Service/Service'
import Dingdan from '../pages/Dingdan/dingdan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
      meta:{
        showTabbar: true
      }
    },
    {
      path: "/profile",
      component: Profile,
      meta:{
        showTabbar: true
      },
    },
    {
      path: "/serch",
      component: Serch,
      meta:{
        showTabbar: true
      }
    },
    {
      path: "/detail",
      component: Detail
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/userinfo",
      component: UserInfo
    },
    {
      path: "/dingdan",
      component: Dingdan
    },
    {
      path: "/service",
      component: Service
    },
    {
      path: "/shop",
      component: Shop,
      children:[
        {
          path: "",
          redirect: "/shop/goods",
        },
        {
          path: "/shop/goods",
          component: ShopGoods
        },
        {
          path: "/shop/subscribe",
          component: ShopSubscribe
        },
        {
          path: "/shop/info",
          component: ShopInfo
        }
      ]
    },

  ]
})
