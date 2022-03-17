<template>
  <div>
    <div class="canlander">
      <p class="text1" style="font-size: 15px; margin-bottom: 3px; margin-top: 3px;">
        本小区可预约情况

          <router-link slot="right" class="header_login" :to="userInfo._id ? '/dingdan': '/detail'" >
            <m-button  type="info" size="small"  >点击预约</m-button>
          </router-link>

      </p>

      <Calendar v-on:choseDay="clickDay"
                v-on:changeMonth="changeDate"
                v-on:isToday="clickToday"
                :markDate=arr
                :class="{yy:true}"></Calendar>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Calendar from 'vue-calendar-component';
  import moment from 'moment'
  import MButton from 'vue-m-button'
  import {mapState} from 'vuex'

  export default {
    components: {
      Calendar,
      MButton
    },
    methods: {
      clickDay(date) {
        this.date = date; // 今天日期
        console.log(date); // 默认 YYYY/MM/DD
        //  moment.locale('zh-cn');
        var t = moment(date).format('YYYY-MM-DD');//没错，此处大写，非yyyy-MM-dd
        console.log(t);
      },
      changeDate(date) {
        console.log(date); //左右点击切换月份
      },
      clickToday(date) {
        date = date
      }
    },
    created() {
      this.arr = [new Date()];
    },
    computed: {
      ...mapState(['userInfo'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .canlander {
    width:100%;
    width:100%;
    .text1{
      padding-left: 14px
      height: 26x
      line-height: 26px
      border-left: 2px solid #d9dde1
      font-size: 12px
      color: rgb(147, 153, 159)
      background: #f3f5f7
    }
    .wh_content_all {
      background-color: #5698c3;
      .wh_top_changge li {
        color: #ffffff;
      }
      .wh_content_item {
        .wh_item_date {
          color:#132c33;
        }
        .wh_other_dayhide{
          color:#bfbfbf;
        }
        .wh_chose_day {
          background: #2c9678;
          color: #0d0b0b;
        }
        .wh_isToday{
          background: #33ad53;
          color: #0d0b0b;
        }
      }
    }
  }


</style>
