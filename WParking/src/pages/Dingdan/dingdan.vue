<template>
  <div class="msite">
    <header-top title="我的订单">
      <router-link slot="left" class="back" to="/profile">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
    </header-top>
  </div>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  export default {
    components: {
      HeaderTop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
</style>


