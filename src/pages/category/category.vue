<!--  -->
<template>
  <div class="cateContainer">
    <div class="header">
      <div class="search">
        <i class="iconfont icon-fangdajing"></i>
        <span>搜索商品, 共25371款好物</span>
      </div>
    </div>
    <div class="contentContainer">
      <div class="left" ref="left">
        <ul class="swiperWrap">
          <li class="swiperItem" 
            v-for="(item,index) in categorysList" 
            :key="index"
            @click="changeNavId(item.id)"
            :class="{active:item.id === navId}"
          >
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="right" ref="right">
        <ul class="shopList">
          <div class="banner">
            <img :src="cateObj.imgUrl" alt="">
          </div>
          <ul class="cateList" >
            <li 
              class="cateItem"
              v-for="(item,index) in cateObj.subCateList"
              :key="index"
            >
              <img :src="item.wapBannerUrl" alt="">
              <span>{{item.name}}</span>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data(){
			return{
				categorysList: [],
				navId:0
			}
		},
		async mounted() {
      this.categorysList = await this.$http.index.getCateGoryData()
			// 更新左侧导航的id值
      this.navId = this.categorysList[0].id
      this.initScroll()
		},
		methods:{
			changeNavId(id){
				this.navId = id
      },
      initScroll(){
          this.$nextTick(()=>{
            new BScroll(this.$refs.left,{
              scrollY: true,
              click:true
            }),
            new BScroll(this.$refs.right,{
              scrollY: true,
              click:true
            })
        })
        }
		},
		computed:{
			 cateObj(){
				 return this.categorysList.find((item)=>{
           return item.id === this.navId
         })
       },
       
    }
	};
</script>
<style lang='stylus'>
  .cateContainer
    width 100%
    height 100%
    margin-top 0
    .header
      height 1.17333rem
      padding 0 .4rem
      display flex
      align-items center
      border-bottom 2px solid #EBEBEB
      .search
        width 100%
        height .74667rem
        display flex
        align-items center
        justify-content center
        font-size .37333rem
        background-color #ededed
        border-radius .10667rem
    .contentContainer
      width 100%
      .left
        float left
        height 100%
        width 2.16rem
        border-right 1px solid #EBEBEB
        .swiperWrap
          padding 0 0 .53333rem 0 
          .swiperItem
            position relative
            width 100%
            height .66667rem
            text-align center
            line-height .66667rem
            margin-top .53333rem
            font-size 28px
            &.active
              color #ab2b2b
              &:after
                position absolute
                left 2px
                top 15%
                content ''
                width 2px
                height 70%
                background #ab2b2b
      .right
        margin-left: 2.16rem;
        padding: .4rem .4rem .28rem;
        height: 100vh;
        overflow hidden
        .shopList
          .banner
            position: relative;
            width: 100%;
            height: 2.56rem;
            display: table;
            margin-bottom: .42667rem;
            background: center no-repeat #eee;
            background-size: cover;
            border-radius: 4px;
            img 
              width 100%
              height 2.56rem
          .cateList
            .cateItem
              display: inline-block;
              font-size: 0;
              width: 33.3%;
              vertical-align: top;
              img 
                width 1.92rem
                height 1.92rem
                margin-left 10px
              span 
                display block
                height .96rem
                font-size .32rem
                color #333
                text-align center
                line-height .48rem


</style>