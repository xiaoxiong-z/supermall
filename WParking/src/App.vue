<template>
  <div id="app">
    <router-view/>
    <tabbar v-show="$route.meta.showTabbar"/>
  </div>
</template>

<script>

  import {mapActions} from 'vuex'
  import Tabbar from './components/Tabbar/Tabbar'

  export default {
    components: {
      Tabbar
    },
    mounted() {
      // this.$store.dispatch('getAddress')
      this.getAddress()
      this.getUserInfo()
    },
    methods: {
      ...mapActions(['getAddress','getUserInfo'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
