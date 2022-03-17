<template>
  <div id="tab-bar">
    <footer class="footer_guide border-1px">
      <span href="javascript:;" class="guide_item" :class="{on: '/home'===$route.path }" @click="goTo('/home')">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
        <span>首页</span>
      </span>
      <span href="javascript:;" class="guide_item" :class="{on: '/serch'===$route.path }" @click="goTo('/serch')">
      <span class="item_icon">
        <i class="iconfont icon-fujin"></i>
      </span>
        <span>附近</span>
      </span>
      <span href="javascript:;" class="guide_item" :class="{on: '/profile'===$route.path }" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-wode"></i>
      </span>
        <span>我的</span>
      </span>
    </footer>
  </div>
</template>

<script>
  export default {
    methods: {
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #007AFF
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
