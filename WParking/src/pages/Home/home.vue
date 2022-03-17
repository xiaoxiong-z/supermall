<template>
  <section class="msite">
    <!--首页头部-->
    <header-top :title="address.name">
      <router-link slot="left" class="header_search" to="/serch">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link slot="right" class="header_login" :to="userInfo._id ? '/userinfo': '/login'" >
        <span class="header_login_text" v-if="!userInfo._id">登录 | 注册</span>
        <span class="header_login_text" v-else>
           <i class="iconfont icon-person"></i>
        </span>
      </router-link>
    </header-top>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <!--
            数据库获取数据
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="category.image_url">
                <img src="./images/nav/1.png">
              </div>
              <span>{{category.title}}</span>
            </a>
            -->
          <!--第一页-->
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.png">
              </div>
              <span>停车缴费</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.png">
              </div>
              <span>月卡续费</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/3.png">
              </div>
              <span>加油特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/4.png">
              </div>
              <span>车位掌柜</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/5.png">
              </div>
              <span>会员中心</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/6.png">
              </div>
              <span>优选商城</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/7.png">
              </div>
              <span>我的通知</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/8.png">
              </div>
              <span>联系客服</span>
            </a>
          </div>
          <!--第二页-->
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.png">
              </div>
              <span>停车缴费2</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.png">
              </div>
              <span>月卡续费2</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/3.png">
              </div>
              <span>加油特惠2</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/4.png">
              </div>
              <span>车位掌柜2</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/5.png">
              </div>
              <span>会员中心2</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/6.png">
              </div>
              <span>优选商城2</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/7.png">
              </div>
              <span>我的通知2</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/8.png">
              </div>
              <span>联系客服2</span>
            </a>
          </div>
        </div>

        <!--显示分页小圆圈-->
        <!--<div class="swiper-pagination"></div>-->
     </div>
      <img src="./images/home_back.svg" v-else/>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <!--商家头-->
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近小区</span>
      </div>
      <!--列表-->
      <shpo-list></shpo-list>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">

  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShpoList from '../../components/ShopList/ShopList'

  export default {
    components: {
      HeaderTop,
      ShpoList
    },
    computed: {
      ...mapState(['address','categorys','userInfo']),
      // 根据 categorys 一维数组 生成 二维数组 categorysArr 每行8个
      categorysArr () {
        const {categorys} = this
        // 准备空的2维数组
        const arr = []
        // 准备一个小数组(最大长度为8)
        let minArr = []
        // 遍历categorys
        categorys.forEach(c => {
          // 如果当前小数组已经满了, 创建一个新的
          if(minArr.length===8) {
            minArr = []
          }
          // 如果minArr是空的, 将小数组保存到大数组中
          // 先关联 再放数据
          if(minArr.length===0) {
            arr.push(minArr)
          }
          // 将当前分类保存到小数组中
          minArr.push(c)
        })

        return arr
      }
    },
    mounted(){
      // 获取分类列表
      this.$store.dispatch('getCategorys')
      this.$store.dispatch('getShops')
    },
    watch: {
      // categorys中有数据了，在异步更新界面之前
      categorys (value) {
        // 可以实现，效果不好
        // setTimeout(() => {
        //   // 创建 Swiper 实例对象 实现轮播
        //   var homeSwiper = new Swiper('.swiper-container',{
        //     loop: true, // 循环轮播
        //     pagination: {
        //       el: '.swiper-pagination'
        //     }
        //   })
        // },100)

        // 界面更新就立即创建Swiper对象
        this.$nextTick(() => { // 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
          // 创建一个Swiper实例对象, 来实现轮播
          new Swiper('.swiper-container', {
            loop: true, // 可以循环轮播
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })

          // new BScroll('.miste-content-wrapper', {
          //   click: true
          // })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    height 150px
    .msite_nav
      margin-top 45px
      /*height 150px*/
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                padding-top 10px
                font-size 0
                img
                  display inline-block
                  width 30px
                  height 30px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #007AFF
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px

</style>
