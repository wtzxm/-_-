<!--  -->
<template>
  <div id="app">
    <div class="header">
      <div class="search">
        <i class="iconfont icon-fangdajing"></i>
        <span>搜索商品, 共25371款好物</span>
      </div>
    </div>
    <div class="contentContainer">
      <div class="right">
        <ul class="swiperWrap">
          <li class="swiperItem"></li>
        </ul>
      </div>
      <div class="left"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang='stylus'>
  #app
    width 100%
    height 100%
    margin-top 0
    .header
      height 1.17333rem
      padding 0 .4rem
      display flex
      align-items center
      .search
        width 100%
        height .74667rem
        display flex
        align-items center
        justify-content center
        font-size .37333rem
        background-color #ededed
        border-radius .10667rem
</style>