<template>
  <section class="search">
    <form class="search_form" action="#">
      <input type="search" name="search" placeholder="请输入目的地" class="search_input">
      <input type="submit" name="submit" class="search_submit" @click="itemClick">
    </form>
    <!--引入百度地图-->
    <baidu-map class="bm-view" ak="SBzpxKwQ2U9PVN12jiD2kERn7rT1sciE" :center="center" :zoom="zoom" @ready="handler">
      <!--定位控件-->
      <bm-geolocation anchor="left" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      <!--缩放控件-->
      <bm-navigation anchor="left"></bm-navigation>
      <!--<bm-view class="map"></bm-view>-->
      <bm-local-search :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search>
    </baidu-map>
  </section>
</template>

<script type="text/ecmascript-6">

  import {BaiduMap,BmGeolocation,BmNavigation,BmLocalSearch} from 'vue-baidu-map'

  export default {
    components:{
      BaiduMap,
      BmGeolocation,
      BmNavigation,
      BmLocalSearch
    },
    data () {
      return {
        center: {lng: 0, lat: 0},
        zoom: 3,
        showAddressBar: true,
        autoLocation: true,
        location: '齐齐哈尔',
        keyword: '齐大'
      }
    },
    methods: {
      itemClick(){
        this.$router.push('/detail').catch(err => {
          console.log('重复点击',err)
        })
      },
      handler ({BMap, map}) {
        console.log(BMap, map)
        this.center.lng = 123.939068
        this.center.lat = 47.358055
        this.zoom = 17
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .search
    width 100%
    .bm-view
      width: 320px
      height: 470px
      margin-top 10px
    .search_form
      clearFix()
      background-color #fff
      padding 12px 8px
      input
        height 35px
        padding 0 4px
        border-radius 2px
        font-weight bold
        outline none
        &.search_input
          float left
          width 79%
          border 4px solid #f2f2f2
          font-size 14px
          color #333
          background-color #f2f2f2
        &.search_submit
          float right
          width 18%
          border 4px solid #007AFF
          font-size 16px
          color #fff
          background-color #007AFF
</style>
