<!--  -->
<template>
  <div class="loginContainer">
    <div class="header">
      <i class="iconfont icon-zhuye zhuye" @click="goto('/Index')"></i>
      <img class="logo" src="../../static/logo.png">
      <div class="right">
        <i class="iconfont icon-fangdajing" @click="goto('/Search')"></i>
        <i class="iconfont icon-qicheqianlian-" @click="goto('/Car')"></i>
      </div>
    </div>
    <div class="cotentContainer">
      <div class="cont">
        <div class="logoWrap">
          <img src="../../static/bigLogo.png" class="bigLogo">
        </div>
        <div class="btnWrap">
          <button class="phone">
            <i class="iconfont icon-shouji"></i>
            <span>手机号快捷登录</span>
          </button>
          <button class="email">
            <i class="iconfont icon-iconset0431"></i>
            <span>邮箱账号登录</span>
          </button>
        </div>
      </div>
    </div>
    <div class="loginType">
      <div class="typeItem">
        <i class="iconfont icon-weixin1"></i>
        <span>微信</span>
      </div>
      <div class="typeItem">
        <i class="iconfont icon-QQ"></i>
        <span>QQ</span>
      </div>
      <div class="typeItem">
        <i class="iconfont icon-weibo"></i>
        <span>微博</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
    goto(path){
      this.$router.replace(path)
    }
  }
};
</script>
<style lang='stylus'>
  .loginContainer
    background-color #F2F5F4
    width 100%
    height 100vh
    .header
      box-sizing border-box
      height: 1.16rem;
      background-color: #fafafa; 
      width: 10rem;
      margin: auto;
      overflow: hidden;
      position: relative;
      padding: 0 .21333rem 0 .32rem;
      height: 1.17333rem;
      display flex
      align-items center
      justify-content space-between
      z-index 1
      .zhuye
        display inline-block
        // width: .64rem;
        // height: .58667rem;
        font-size 55px
      .logo
        width: 2.29333rem;
        height: .72rem;
        margin-left 100px
      .right
        i 
          // display inline-block
          // width: .85333rem;
          // height: .85333rem
          font-size 55px
          margin 0 10px
    .cotentContainer
      .cont
        .logoWrap
          text-align: center;
          padding-top: 2.13333rem;
          padding-bottom: 3.09333rem;
          .bigLogo
            width: 3.57333rem;
            height: 1.2rem;
        .btnWrap
          padding: 0 .53333rem;
          margin-bottom: 2.73333rem;
          .phone
            margin-bottom: .42667rem;
            border: 0 solid #DD1A21;
            background-color: #DD1A21
            width 100%
            height: 1.25333rem;
            line-height: 1.25333rem;
            display block
            border-radius 4px
            color #ffffff
            i 
              margin-right: .21333rem;
              font-size 40px
              display inline-block
              width .533333rem
              height .533333rem
              color #fff
            span
              font-size .37333rem 
          .email
            margin-bottom: .42667rem;
            border: 2px solid #DD1A21;
            background-color: #F2F5F4
            width 100%
            height: 1.25333rem;
            line-height: 1.25333rem;
            display block
            border-radius 4px
            color #DD1A21
            i 
              margin-right: .21333rem;
              font-size 40px
              display inline-block
              width .533333rem
              height .533333rem
              color #DD1A21
            span
              font-size .37333rem 
    .loginType
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 1.06667rem;
      height: .53333rem;
      text-align: center;
      .typeItem
        height: .53333rem;
        border-right: 1px solid #979797;
        display: inline-block;
        text-align: center;
        padding: 0 .53333rem;
        i 
          position: relative;
          top: .05rem;
          display: inline-block;
          width: .53333rem;
          height: .53333rem;
          color grey 
        span 
          font-size: .37333rem;
          line-height: .53333rem;
          height: .53333rem;
          color: #7F7F7F;
          margin-left: .06667rem;
              
            
</style>