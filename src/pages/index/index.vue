<template>
  <div class="indexContainer">
    <div class="header">
      <img src="../../../public/images/logo.png" class="logo">
      <div class="searchContainer">
        <i class="iconfont icon-fangdajing"></i>
        <span>搜索商品, 共26223款好物</span>
      </div>
      <div class="btn">登录</div>
    </div>
    <div class="navContainer">
      <div class="scrollWrap" v-if='indexData.kingKongModule'>
        <div class="navItem action">
          <span>推荐</span>
        </div>
        <div class="navItem"  v-for="(item,index) in indexData.kingKongModule.kingKongList" :key="index">
          <span>{{item.text}}</span>
        </div>
      </div>
    </div>
    <div class="contentContainer">
      <div class="content">
        <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in indexData.focusList" :key="index">
                <img :src="item.picUrl" alt="">
              </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="serveContainer">
          <ul class="serveList">
            <li class="serveItem" v-for="(item,index) in indexData.policyDescList" :key='index'>
              <img :src="item.icon" alt="">
              <span>{{item.desc}}</span>
            </li>
          </ul>
        </div>
        <div class="categoryContainer">
          <ul class="categoryList" v-if="indexData.kingKongModule">
            <li class="categoryItem" v-for="(item,index) in indexData.kingKongModule.kingKongList" :key="index">
              <img :src="item.picUrl" alt="">
              <span>{{item.text}}</span>
            </li>
          </ul>
        </div>
        <div class="newUser">
          <div class="banner">
            <img src="https://yanxuan.nosdn.127.net/7db5ad89be165b82b6a3e261029d0122.gif?imageView&quality=75" alt="">
          </div>
          <div class="gift">
              <div class="header">- 新人专享礼 -</div>
              <div class="content">
                <div class="left">
                  <span>新人专属礼包</span>
                  <img src="https://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="">
                </div>
                <div class="right">
                  <div class="moudle1">
                      <div class="mouC">
                        <div class="text">
                          <span>福利社</span>
                          <p>今日特价</p>
                        </div>
                        <div class="picWrap">
                          <img src="https://yanxuan-item.nosdn.127.net/00035dccd3dd272ae01611a3325e9e31.png" alt="">
                          <div class="discount">
                            <div class="line1">￥89</div>
                            <div class="line2">￥99</div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div class="moudle2">
                    <div class="mouC">
                      <div class="text">
                        <span>新人拼团</span>
                        <p>1元起包邮</p>
                      </div>
                    <div class="picWrap">
                          <img src="https://yanxuan-item.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png" alt="">
                          <div class="discount">
                            <div class="line1">￥2.9</div>
                            <div class="line2">￥13.9</div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import {mapState,mapActions} from 'vuex'
export default {
  data() {
    return {};
  },
		components:{
			
		},
		async mounted() {
      await this.getIndexData()
      new BScroll('.navContainer',{
        scrollX: true
      })
      new BScroll('.contentContainer',{
        scrollY: true
      })
      new Swiper('.swiper-container',{
        direction:'horizontal',
        loop: true,
        autoplay:true,
      })
		},
		methods:{
			changeIndex(index,id){
				this.navIndex = index
				this.navId = id
			},
			...mapActions({
				getIndexData: 'getIndexData'
			})
		},
		computed:{
			...mapState({
				indexData: state => state.index.indexData
			})
    }
    
};
</script>
</script>

<style lang='stylus'>
  #app
    width 100%
    margin-top 0px
    .header
      width 100%
      display flex
      padding .21333rem .4rem
      box-sizing border-box
      align-items center
      .logo
        width 1.84rem
        height .53333rem
        margin-right .26667rem
      .searchContainer
        align-items center
        height .74667rem
        line-height .74667rem
        background-color #ededed
        border-radius .10667rem
        font-size .37333rem
        padding 0 .5rem
        i 
          display inline-block
          width .37333rem
          height .37333rem
          margin-right .13333rem
        span 
          color #666
      .btn
        width .98667rem
        height .53333rem
        line-height .53333rem
        text-align center
        color #DD1A21
        border 1px solid #DD1A21
        border-radius .10667rem
        margin-left .21333rem
        font-size .32rem
      .login
        width 37px
        height 18px
        border 1px solid #DD1A21
        color #DD1A21
        text-align center
        line-height 18px
        border-radius 5px
    .navContainer
      width 100%
      height 60px
      .scrollWrap
        display flex 
        padding-left  30px
        .navItem
          position relative
          height 60px
          font-size .37333rem
          color #333
          padding 0 .21333rem
          white-space nowrap
          text-align center
          line-height .8rem
          &.action::after
            position absolute
            content ''
            display block
            height 2px
            width 100%
            background-color #DD1A21
            left 0 
            bottom 2px
    .contentContainer
      height calc(100vh - 170px)
      overflow hidden
      .swiper-container
        height 3.94667rem
        .swiper-wrapper
          height 3.94667rem
          img 
            width 100%
            height auto
        .swiper-pagination-customs
          width 20px
          height 2px
          background-color #ffffff
          opacity .4
          margin 0 3px
          display inline-block
          &.swiper-pagination-customs-active
            opacity 1
      .serveContainer
        height 72px
        box-sizing border-box
        padding 0 30px
        line-height 72px
        .serveList
          display flex
          align-items center
          .serveItem
            display flex
            align-items center
            flex 1
            img 
              width 32px
              height 32px
            span 
              color #333
      .categoryContainer
        .categoryList
          display flex
          flex-wrap wrap
          .categoryItem
            display flex
            flex-direction column
            align-items center
            margin 10px 20px
            flex 1
            img 
              width 110px
              height 110px
              margin-bottom 16px
      .newUser
        .banner
          img 
            width 100%
            height 240px
        .gift
          padding-bottom .4rem
          margin-bottom .26667rem
          margin-top .26667rem
          .header
            position relative
            left 3.5rem
            height 1.2rem
            width 100%
            line-height 1.2rem
            text-align center
            font-size .42667rem
            padding 0 .4rem
            background-color #fff 
          .content
            padding-left .4rem
            overflow hidden
            .left
              display block
              float left
              width 4.57333rem
              height 5.78667rem
              background-color #F9E9CF
              border-radius .05333rem
              color #333
              span 
                display inline-block
                padding .4rem 0 0 .4rem
                font-size .42667rem
                margin-right 90px
              img 
                margin .49333rem auto
                width 3.44rem
                height 3.42667rem
                position relative
            .right
              float left
              margin-left 0.05rem
              .moudle1
                background-color #FBE2D3
                border-radius 8px
                width 4.57333rem
                height 2.86667rem
                margin-bottom .05333rem
                .mouC
                  padding .26667rem 0 0 .4rem
                  width 4.57333rem
                  height 2.93333rem
                  display block
                  margin 0 .05333rem .05333rem 0
                  font-size .32rem
                  .text
                    float left
                    span 
                      display inline-block
                      font-size .42667rem
                      margin-bottom 10px
                    p 
                      color #7F7F7F
                  .picWrap
                    width 2.66667rem
                    height 2.66667rem
                    float left
                    position relative
                    img 
                      width 100%
                      height 100%
                    .discount
                      width 1.06667rem
                      height 1.06667rem
                      border-radius 50%
                      background-color #F59524
                      opacity .8
                      padding-top .23333rem
                      box-sizing border-box
                      text-align center
                      position absolute
                      right 0
                      top 0
              .moudle2
                background-color #FFECC2
                border-radius 8px
                width 4.57333rem
                height 2.86667rem
                margin-bottom .05333rem
                .mouC
                  padding .26667rem 0 0 .4rem
                  width 4.57333rem
                  height 2.93333rem
                  display block
                  margin 0 .05333rem .05333rem 0
                  font-size .32rem
                  .text
                    float left
                    span 
                      display inline-block
                      font-size .42667rem
                      margin-bottom 10px
                    p 
                      color #7F7F7F
                      background-color rgba(0,0,0,.2)
                      padding 0 .13333rem
                  .picWrap
                    width 2.66667rem
                    height 2.66667rem
                    float left
                    position relative
                    img 
                      width 100%
                      height 100%
                    .discount
                      width 1.06667rem
                      height 1.06667rem
                      border-radius 50%
                      background-color #F59524
                      opacity .7
                      padding-top .23333rem
                      box-sizing border-box
                      text-align center
                      position absolute
                      right 35px
                      top 0

                      




</style>