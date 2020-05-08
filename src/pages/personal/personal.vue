<!--  -->
<template>
  <div class="perContainer">
    <div class="header">
      <div class="left">
        <img src="../../static/personal/personal.png" alt="">
        <div class="userInfo">
          <div class="userName" @click="goto('/login')">请登录</div>
          <div class="userType">普通用户</div>
        </div>
      </div>
      <div class="right">
        <img src="https://yanxuan.nosdn.127.net/595480970a07e7142c557416d23e2cac.png" alt="">
        <i class="iconfont icon-rusuodengji"></i>
        <div class="puls">
          <i class="iconfont icon-jiantou-up-down"></i>
          <div class="text">
            <span>Pro会员</span>
            <span>立即使用<i></i></span>
          </div>
        </div>
      </div>
    </div>
    <div class="myAsset">
      <div class="title">我的资产</div>
      <div class="myAssetList">
        <div class='assetItem'>
						<span>￥0</span>
						<span>回馈金</span>
					</div>
					<div class='assetItem'>
						<span>￥0</span>
						<span>红包</span>
					</div>
					<div class='assetItem'>
						<span>￥0</span>
						<span>优惠券</span>
					</div>
					<div class='assetItem'>
						<span>￥0</span>
						<span>津贴</span>
					</div>
					<div class='assetItem'>
						<span>￥0</span>
						<span>礼品卡</span>
					</div>
      </div>
    </div>
    <div class="personalList">
      <div class="navItem" v-for='(item, index) in personalList' :key='index'>
        <div class="inner">
          <i class='iconfont ' :class='item.icon'></i>
          <p>{{item.name}}</p>
        </div>
      </div>
		</div>
    <div class="btn">
      <button class="exit">退出登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      personalList: [
						{
							name: '我的订单',
							icon: 'icon-icon--copy1'
						},
						{
							name: '我的拼团',
							icon: 'icon-xin-copy'
						},
						{
							name: '领红包',
							icon: 'icon-liwu'
						},
						{
							name: '我的积分',
							icon: 'icon-jifen'
						},
						{
							name: '地址管理',
							icon: 'icon-dizhi'
						},
						{
							name: '账号安全',
							icon: 'icon-zhanghaoanquan'
						},
						{
							name: '联系客服',
							icon: 'icon-kefu'
						},
						{
							name: '用户反馈',
							icon: 'icon-yonghufankui'
						},
						{
							name: '帮助中心',
							icon: 'icon-bangzhuzhongxin'
						},
						{
							name: '退还/售后',
							icon: 'icon-tuihuan'
						}
					]
    };
  },
  methods:{
    goto(path){
      this.$router.replace(path)
    }
  }
};
</script>
<style scoped lang='stylus'>
  .perContainer
    width 100%
    background-color #EEEEEE
    .header
      // overflow hidden  
      width 100%
      box-sizing border-box
      padding-left .4rem
      background-color #F9D087  
      height 3.6rem
      display flex
      .left
        display flex
        justify-content flex-start
        padding .85333rem 0
        width 7.2rem
        align-items center
        img 
          vertical-align middle
          width 1.89333rem
          height 1.89333rem
          border-radius 50% 
        .userInfo
          margin-left .4rem
          .userName
            color #ffffff
            font-size .48rem
            text-align left
            margin-bottom .13333rem
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          .userType
            color #ffffff
      .right
        width 2.8rem
        height 100%
        padding-left .22667rem
        position relative
        img
          width .58667rem
          height .58667rem
          position absolute
          right 1.41333rem
          top 62px
        i 
          position absolute
          width .85333rem
          height .85333rem
          right .15rem
          top 68px
          color #9C4F41
          font-size 38px
        .puls
          position relative
          margin-top 2rem
          width 2.70667rem
          height 1.12rem
          border-top-left-radius: .85333rem;
          border-bottom-left-radius: .85333rem;
          overflow: hidden;
          background-image linear-gradient(180deg,#574E44 0,#0E0E0E 100%)
          i 
            position absolute
            margin: auto .12rem;
            width: .74667rem;
            height: .74667rem;
            background-repeat: no-repeat;
            background-size: .746rem 11.8488rem;
            background-position: 0 -.8622rem;
            right: 100px;
            top: 25px;
            color: #F9D494;
            font-size: 0.506667rem;
          .text
            color: #F9D494;
            span 
              display block
              margin-top 10px
              margin-left 90px
    .myAsset
      border-bottom .26667rem solid #F4F4F4
      .title
        margin-left: .4rem;
        border-bottom: .01333rem solid #D9D9D9;
        text-align: left;
        line-height: 1.38667rem;
        font-size: .37333rem;
      .myAssetList
        display flex
        text-align center
        justify-content space-between
        .assetItem
          box-sizing border-box
          display flex
          flex-direction column
          padding-top .42667rem
          height 2.13333rem
          line-height 50px
          flex-grow 1
          font-size .42667rem
    .personalList
      width: 10rem;
      margin-right: auto;
      margin-left: auto; 
      margin-bottom: .53333rem;
      background: #fff;
      overflow hidden
      .navItem
        float: left;
        width: 33.2%;
        border-right: 1px solid rgba(0,0,0,.15);
        border-bottom: 1px solid rgba(0,0,0,.15);
        .inner
          box-sizing border-box
          display: block;
          height: 2.4rem;
          padding-top: .6rem;
          text-align: center;
          font-size: 30px;
          i 
            display inline-block
            width: .66667rem;
            height: .66667rem;
            vertical-align: middle;
            margin-bottom: .21333rem;
            font-size: 50px;
            color #828384
          p
            display: block;
            line-height: .45333rem;
            color: #333;
    .btn
      width 10rem
      // margin 0 0 1.5rem 0
      padding 0 0 1.6rem 0
      .exit
        width 100%
        height 1.28rem
        line-height 1.28rem
        color #333
        background-color #ffffff
        border none
</style>