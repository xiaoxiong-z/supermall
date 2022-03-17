<template>
  <div class="about">
    <!--关于头部-->
    <HeaderTop title="关于 WParking ">
      <router-link slot="left" class="header_search" to="/serch">
        <!--返回-->
        <a class="back" @click="$router.back()">
          <i class="iconfont icon-fanhui"></i>
        </a>
      </router-link>
    </HeaderTop>
    <!--图片版本信息-->
    <div class="box">
      <img class="logoImg" src="./logo.png" width="100px" height="100px">
      <div class="tip appName">WParking</div>
      <div class="tip">Version 1.0.1 </div>
    </div>
    <!--服务协议-->
    <div class="copyright">
      <div class="agreement-box">
        <div class="agreement">《用户服务协议》</div>
        <h6>和</h6>
        <div class="agreement">《隐私政策》</div>
      </div>
      <div class="hint">Copyright © 2021</div>
      <div class="hint">四川xx网络技术有限公司</div>
    </div>
  </div>
</template>
<script>
  import HeaderTop from '../../../components/HeaderTop/HeaderTop'
  export default {
    components: {
      HeaderTop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /* #ifndef APP-NVUE */
  div {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
  }
  back {
    position: absolute
    top: 10px
    left: 0
  }
  /* #endif */
  .about {
    width: 750rpx;
    flex-direction: column;
  }

  .box {
    margin-top: 100px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .logoImg {
    margin-bottom: 10rpx;
    width: 160rpx;
    height: 160rpx;
    border-radius: 15px;
  }

  .tip {
    text-align: center;
    font-size: 24rpx;
    margin-top: 10px;
    padding: 10rpx;
  }

  .appName {
    margin-top: 20px;
    font-size: 42rpx;
    font-weight: 500;
  }

  .qrcode {
    margin-top: 60rpx;
  }

  .copyright {
    text-align center
    width: 750rpx;
    font-size: 32rpx;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 20px;
    left: 0;
    margin-top 100px
  }

  .agreement-box {
    text-align center
    justify-content: center;
  }

  .agreement {
    text-align center
    color: #2285ff;
    font-size: 26rpx;
  }

  .hint {
    text-align center
    text-align: center;
    color: #999999;
    font-size: 26rpx;
  }
</style>
