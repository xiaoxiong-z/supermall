<template>
  <section class="profile">
    <!--我的-->
    <header-top title="我的"></header-top>
    <!--登陆-->
    <section class="profile-number">
      <router-link  :to="userInfo._id ? '/userinfo': '/login'"  class="profile-link">
        <div class="profile_image">
          <i class="iconfont icon-denglu-fill" height="20px" width="20px"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top" v-if="!userInfo.phone">{{userInfo.name || '登录/注册'}}</p>
          <p>
            <span class="icon-mobile-number">{{userInfo.phone || '暂无绑定手机号'}}</span>
          </p>
        </div>
        <span class="arrow">
              <i class="iconfont icon-jinru"></i>
        </span>
      </router-link>
      <!--<a href="javascript:" class="profile-link"></a>-->
    </section>
    <!--账户信息-->
    <section class="profile_info_data border-1px">
      <ul class="info_data_list">
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0.00</span>元</span>
          <span class="info_data_bottom">我的余额</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>个</span>
          <span class="info_data_bottom">我的优惠</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>分</span>
          <span class="info_data_bottom">我的积分</span>
        </a>
      </ul>
    </section>
    <!--列表-->
    <section class="profile_my_order border-1px">
      <!-- 我的订单 -->
      <a href='javascript:' class="my_order" @click="$router.push('/dingdan')">
            <span>
              <i class="iconfont icon-dingdan"></i>
            </span>
        <div class="my_order_div">
          <span>我的订单</span>
          <span class="my_order_icon">
                <i class="iconfont icon-jinru"></i>
              </span>
        </div>
      </a>
      <!--
      积分商城
      <a href='javascript:' class="my_order">
            <span>
              <i class="iconfont icon-jifen"></i>
            </span>
        <div class="my_order_div">
          <span>积分商城</span>
          <span class="my_order_icon">
                <i class="iconfont icon-jinru"></i>
              </span>
        </div>
      </a>
      -->
      <!-- 我的会员 -->
      <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-huiyuan"></i>
            </span>
        <div class="my_order_div">
          <span>我的会员</span>
          <span class="my_order_icon">
                <i class="iconfont icon-jinru"></i>
              </span>
        </div>
      </a>
      <!-- 服务中心 -->
      <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-jianzhu"></i>
            </span>
        <div class="my_order_div">
          <span>服务中心</span>
          <span class="my_order_icon">
                <i class="iconfont icon-jinru"></i>
              </span>
        </div>
      </a>
      <!--
      帮助与反馈
      <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-bangzhu"></i>
            </span>
        <div class="my_order_div">
          <span>帮助与反馈</span>
          <span class="my_order_icon">
                <i class="iconfont icon-jinru"></i>
              </span>
        </div>
      </a>
      -->
      <!-- 设置 -->
      <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-shezhi"></i>
            </span>
        <div class="my_order_div">
          <span  @click="$router.push('/service')">设置</span>
          <span class="my_order_icon">
                <i class="iconfont icon-jinru"></i>
              </span>
        </div>
      </a>
    </section>
    <!--退出登录 mint组件-->
    <section class="profile_my_order border-1px" v-if="userInfo._id">
      <mt-button type="danger" style="width:100%" v-if="userInfo._id" @click="logout">退出登陆</mt-button>
    </section>
  </section>
</template>

<script type="text/ecmascript-6">

  import {mapState} from 'vuex'
  import { MessageBox,Toast }from 'mint-ui';
  import HeaderTop from '../../components/HeaderTop/HeaderTop'

  export default {
    components: {
      HeaderTop
    },
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      // 退出登录
      logout () {
        MessageBox.confirm('确认退出吗?').then(
          action => {
            // 请求退出
            this.$store.dispatch('logout')
            Toast('登出完成')
          },
          action => {
            console.log('点击了取消')
          }
        );
      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .profile //我的
    width 100%
    overflow hidden
    .profile-number
      margin-top 46px
      .profile-link
        clearFix()
        position relative
        display block
        background #007AFF
        padding 20px 0 90px 0
        .profile_image
          float left
          width 60px
          height 60px
          border-radius 50%
          overflow hidden
          vertical-align top
          margin-left 15px
          .icon-denglu-fill
            background #e4e4e4
            font-size 64px
        .user-info
          float left
          margin-top 8px
          margin-left 20px
          p
            font-weight: 700
            font-size 18px
            color #fff
            &.user-info-top
              padding-bottom 8px
            .user-icon
              display inline-block
              margin-left -15px
              margin-right 5px
              width 20px
              height 20px
              .icon-shouji
                font-size 20px
                vertical-align text-top
            .icon-mobile-number
              font-size 14px
              color #fff
        .arrow
          width 12px
          height 12px
          position absolute
          right 15px
          top 40%
          .icon-jiantou1
            color #fff
            font-size 5px
    .profile_info_data
      bottom-border-1px(#e4e4e4)
      width 100%
      background #fff
      overflow hidden
      .info_data_list
        clearFix()
        .info_data_link
          float left
          width 33%
          text-align center
          border-right 1px solid #f1f1f1
          .info_data_top
            display block
            width 100%
            font-size 14px
            color #333
            padding 15px 5px 10px
            span
              display inline-block
              font-size 30px
              color #f90
              font-weight 700
              line-height 30px
          .info_data_bottom
            display inline-block
            font-size 14px
            color #666
            font-weight 400
            padding-bottom 10px
        .info_data_link:nth-of-type(2)
          .info_data_top
            span
              color #ff5f3e
        .info_data_link:nth-of-type(3)
          border 0
          .info_data_top
            span
              color #6ac20b
    .profile_my_order
      top-border-1px(#e4e4e4)
      /*margin-top 10px*/
      background #fff
      .my_order
        display flex
        align-items center
        padding-left 15px
        >span
          display flex
          align-items center
          width 20px
          height 20px
          >.iconfont
            margin-left -10px
            font-size 20px
          .icon-dingdan
            color #29b7cb
          .icon-jifen
            color #57c3c2
          .icon-huiyuan
            color #2f90b9
          .icon-bangzhu
            color #bbb
          .icon-shezhi
            color #bbb
          .icon-jianzhu
            color #126e82
        .my_order_div
          width 100%
          border-bottom 1px solid #f1f1f1
          padding 18px 10px 18px 0
          font-size 16px
          color #333
          display flex
          justify-content space-between
          span
            display block
          .my_order_icon
            width 10px
            height 10px
            .icon-jiantou1
              color #bbb
              font-size 10px
</style>
