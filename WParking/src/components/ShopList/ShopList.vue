<template>
  <div class="shop_container">
    <ul class="shop_list" v-if="shops.length">
      <li class="shop_li border-1px"
          v-for="(shop,index) in shops"
          :key="index"
          @click="$router.push('/shop')">
        <a>
          <div class="shop_left">
            <img class="shop_img" src="../../components/ShopList/images/shop/1.png">
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <div class="shop_title">
                <h4 class="top">{{shop.top}}</h4>
                <h6 class="mid">{{shop.mid}}</h6>
                <h6 class="bottom">{{shop.bottom}}</h6>
              </div>
            </section>
          </div>
        </a>
      </li>
    </ul>
    <ul  v-else>
      <li v-for="item in 6">
        <img src="./images/shop_back.svg"/>
      </li>
    </ul>

  </div>
</template>

<script type="text/ecmascript-6">

  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState(['shops'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .shop_container
    margin-bottom 50px
    .shop_list
      height 90px
      .shop_li
        bottom-border-1px(#f1f1f1)
        width 100%
        >a
          clearFix()
          display block
          box-sizing border-box
          padding 15px 8px
          width 100%
          .shop_left
            float left
            box-sizing border-box
            width 23%
            height 75px
            padding-right 10px
            .shop_img
              display block
              width 100%
              height 100%
          .shop_right
            float right
            width 77%
            height 75px
            .shop_detail_header
              clearFix()
              width 100%
              .shop_title
                padding 0 0 0 20px
                .top
                  font-size 16px
                  color black
                /*line-height 16px*/
                /*font-weight 700*/
                /*float left*/
                /*width 200px*/
                /*color #333*/
                .mid
                  padding 10px 0 0 0
                  font-size 6px
                .bottom
                  padding 10px 0 0 0
                  font-size 8px
              .shop_detail_ul
                float right
                margin-top 3px
                .supports
                  float left
                  font-size 10px
                  color #999
                  border 1px solid #f1f1f1
                  padding 0 2px
                  border-radius 2px
            .shop_rating_order
              clearFix()
              width 100%
              margin-top 18px
              margin-bottom 8px
              .shop_rating_order_left
                float left
                color #ff9a0d
                .star //2x图 3x图
                  float left
                  font-size 0
                  .star-item
                    display inline-block
                    background-repeat no-repeat
                  &.star-48
                    .star-item
                      width 20px
                      height 20px
                      margin-right 22px
                      background-size 20px 20px
                      &:last-child
                        margin-right: 0
                      &.on
                        bg-image('./images/stars/star48_on')
                      &.half
                        bg-image('./images/stars/star48_half')
                      &.off
                        bg-image('./images/stars/star48_off')
                  &.star-36
                    .star-item
                      width 15px
                      height 15px
                      margin-right 6px
                      background-size 15px 15px
                      &:last-child
                        margin-right 0
                      &.on
                        bg-image('./images/stars/star36_on')
                      &.half
                        bg-image('./images/stars/star36_half')
                      &.off
                        bg-image('./images/stars/star36_off')
                  &.star-24
                    .star-item
                      width 10px
                      height 10px
                      margin-right 3px
                      background-size 10px 10px
                      &:last-child
                        margin-right 0
                      &.on
                        bg-image('./images/stars/star24_on')
                      &.half
                        bg-image('./images/stars/star24_half')
                      &.off
                        bg-image('./images/stars/star24_off')
                .rating_section
                  float left
                  font-size 10px
                  color #ff6000
                  margin-left 4px
                .order_section
                  float left
                  font-size 10px
                  color #666
                  transform scale(.8)
              .shop_rating_order_right
                float right
                font-size 0
                .delivery_style
                  transform-origin 35px 0
                  transform scale(.7)
                  display inline-block
                  font-size 12px
                  padding 1px
                  border-radius 2px
                .delivery_left
                  color #fff
                  margin-right -10px
                  background-color #007AFF
                  border 1px solid #007AFF
                .delivery_right
                  color #007AFF
                  border 1px solid #007AFF
            .shop_distance
              clearFix()
              width 100%
              font-size 12px
              .shop_delivery_msg
                float left
                transform-origin 0
                transform scale(.9)
                color #666
              .segmentation
                color #ccc
</style>
