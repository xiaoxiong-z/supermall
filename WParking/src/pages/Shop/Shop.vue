<template>
  <div>
    <!--商家头部-->
    <shop-header/>
    <!--商家导航-->
    <div class="tab">
      <div class="tab-item">
        <router-link to="/shop/goods" replace>简介</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/subscribe" replace>预约</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/info" replace>收费</router-link>
      </div>
    </div>
    <!--部分详情-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">

  import ShopHeader from '../../components/ShopHeader/ShopHeader'

  export default {
    components: {
      ShopHeader
    },
    mounted () {
      this.$store.dispatch('getShopInfo')
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .tab
    height 40px
    line-height 40px
    background #fff
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      float left
      width: 33.33333%
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        position relative
        &.router-link-active
          color #007AFF
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background #007AFF
</style>
