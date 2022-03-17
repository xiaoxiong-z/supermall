<template>
  <section class="order">
    <!--头部-->
    <header-top title="详情">
      <span slot="left" class="header_search" @click="$router.back()">
        <i class="iconfont icon-fanhui"></i>
      </span>
    </header-top>
    <!--body-->
    <section class="order_no_login">
      <img src="./images/beijin.png">
      <h3>登录后查看详情</h3>
      <div @click="iteClick"><button>立即登陆</button></div>
    </section>
  </section>
</template>

<script type="text/ecmascript-6">
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  export default {
    components: {
      HeaderTop
    },
    methods: {
      // itemClick(){
      //   this.$router.push('/serch').catch(err => {
      //     console.log('重复点击',err)
      //   })
      // },
      iteClick(){
        this.$router.push('/login').catch(err => {
          console.log('重复点击',err)
        })
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  //订单
  .order
    width 100%
    height 100%
    .order_no_login
        padding-top 140px
        width 60%
        margin 0 auto
        text-align center
        >img
          /*display block*/
          width 100px
          height 100px
        >h3
          padding 10px 0
          font-size 17px
          color #6a6a6a
        >div
          button
            display inline-block
            background #007AFF
            font-size 14px
            color #fff
            border 0
            outline none
            border-radius 5px
            padding 10px 20px
</style>
