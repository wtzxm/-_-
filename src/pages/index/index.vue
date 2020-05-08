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
        <div 
          class="navItem" 
          :class="{action:navIndex === 0}"
          @click="changeNav(0)"
        >
          <span>推荐</span>
        </div>
        <div 
          class="navItem"  
          v-for="(item,index) in indexData.kingKongModule.kingKongList" 
          :key="index"
          :class="{action:navIndex === index + 1}"
          @click="changeNav(index + 1,item.L1id)"
        >
          <span>{{item.text}}</span>
        </div>
      </div>
    </div>
    <indexCateList :indexData='indexData' v-if="navIndex===0"/>
    
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState,mapActions} from 'vuex'
import indexCateList from '../../components/indexCateList/indexCateList'
export default {
  data() {
    return {
      navIndex:0,
      navId:0
    };
  },
  components:{
    indexCateList
  },
  async mounted() {
    await this.getIndexData()
    this.initScroll()
  },
  methods:{
    changeNav(index,id){
      this.navIndex = index
      this.navId = id
    },
    ...mapActions({
      getIndexData: 'getIndexData'
    }),
    initScroll(){
      this.$nextTick(()=>{
          new BScroll('.navContainer',{
          scrollX: true,
          click:true
        })
      })
    }
  },
  computed:{
    ...mapState({
      indexData: state => state.index.indexData
    })
  },
      
    
};
</script>
</script>

<style lang='stylus'>
  .indexContainer
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
      display flex
      overflow hidden
      .scrollWrap
        display flex 
        padding-left 30px
        // width 1000px
        .navItem
          position relative
          height 60px
          font-size 28px
          color #333
          padding 0 10px
          white-space nowrap
          text-align center
          line-height 60px
          &.action::after
            position absolute
            content ''
            display block
            height 2px
            width 100%
            background-color #DD1A21
            left 0 
            bottom 2px
    

                      




</style>