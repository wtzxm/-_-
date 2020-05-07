<!--  -->
<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" @click="goto(`/Index`)" :class="{on:$route.path===`/Msite`}">
      <span class="item_icon">
        <i class="iconfont icon-zhuye"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto(`/Category`)" :class="{on:$route.path===`/Search`}">
      <span class="item_icon">
        <i class="iconfont icon-feneli-copy"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto(`/Deserve`)" :class="{on:$route.path===`/Order`}">
      <span class="item_icon">
        <i class="iconfont icon-zhidemai"></i>
      </span>
      <span>值得买</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto(`/Car`)" :class="{on:$route.path===`/Profile`}">
      <span class="item_icon">
        <i class="iconfont icon-qicheqianlian-"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto(`/Personal`)" :class="{on:$route.path===`/Profile`}">
      <span class="item_icon">
        <i class="iconfont icon-user1"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
export default {
    name: "FooterGuide",
    methods:{
            goto(path){
                //編程式导航
                this.$router.replace(path)
            }
        }
};
</script>
<style lang="stylus">
  .footer_guide
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 100px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 10px
      color #999999
      &.on
        color #02a774
      span
        font-size 24px
        margin-top 4px
        margin-bottom 4px
        .iconfont
          font-size 44px
</style>
