<template>
  <div></div>
</template>

<script>
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  data() {
    return {};
  },
  async mounted(){
    let cateList = await $http.index.getCateListData()
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>