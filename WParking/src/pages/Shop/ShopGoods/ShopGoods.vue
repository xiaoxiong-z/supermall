<template>
  <div>
    <div class="goods">

      <div class="foods-wrapper">
        <!--简介-->
        <ul>
          <h1 class="title">详细信息</h1>
          <ul>
            <li class="food-item bottom-border-1px">
              <div class="content">
                <h2 class="name">龙兴嘉园小区停车场</h2>
                <p class="desc">剩余 23% 空闲车位</p>
                <p class="desc">距离小区约 231m, 步行约 8 分钟</p>
              </div>
            </li>
          </ul>
          <!--附近小区-->
          <li class="food-list-hook" v-for="(good,index) in goods" :key="index">
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <li class="food-item bottom-border-1px" v-for="(food, index) in good.foods" :key="index" >
                <div class="icon">
                  <img src="../images/1.png" width="57" height="57" >
                  <div class="des">{{food.des}}</div><!--<h6 style="display:block;  ">{{food.des}}</h6>-->
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.mid}}</p>
                  <p class="desc"  style="color: burlywood">{{food.bottom}}</p>
                </div>
                <div class="cartcontrol-wrapper">
                  点击预约
                </div>
            </li>
            </ul>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>

  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    data() {
      return {
        food: {}, // 需要显示的food
      }
    },
    computed: {
      ...mapState(['goods']),
    },
    mounted() {
      this.$store.dispatch('getShopGoods', () => {// 数据更新后执行
        this.$nextTick(() => { // 列表数据更新显示后执行
          new BScroll('.foods-wrapper')

        })
      })

    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .goods
    display: flex
    position: absolute
    top: 195px
    bottom: 46px
    width: 100%
    background: #fff;
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          color: $green
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
          .des
            font-size 5px
            display: block
            word-break:keep-all
            white-space:nowrap
            color: rgb(160, 160, 160)
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
         .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
            color #007AFF
</style>
