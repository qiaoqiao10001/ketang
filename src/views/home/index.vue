<template>
  <div class="home">
    <!-- 首页 -->
    <HomeHeader></HomeHeader>
    <!-- 轮播图 -->
    <HomeSwiper></HomeSwiper>
     <!-- 课程列表 -->
    <HomeList></HomeList>
  </div>
</template>

<script lang="ts">
import HomeHeader from './home-header.vue'
import HomeList from './home-list.vue'
import HomeSwiper from './home-swiper.vue'
import { defineComponent } from '@vue/runtime-core'
export default defineComponent({
  components: {
    HomeHeader,
    HomeList,
    HomeSwiper,
  },
})
</script>
