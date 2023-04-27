<template>
  <van-nav-bar
      title="标题"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18"/>
    </template>
  </van-nav-bar>
<div id="content">
  <router-view />
</div>
  <van-tabbar route>
    <van-tabbar-item to="/" icon="home-o">主页</van-tabbar-item>
    <van-tabbar-item to="/notice" icon="bullhorn-o">公告</van-tabbar-item>
    <van-tabbar-item to="/dormitory" icon="search">寝室</van-tabbar-item>
<!--    <van-tabbar-item to="/user" icon="friends-o">个人</van-tabbar-item>-->
    <van-tabbar-item to="/persion" icon="friends-o">个人</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">


import {useRoute, useRouter} from "vue-router";


const router = useRouter()
const onClickLeft = () => history.back();

const onClickRight = () => {
  router.push('/search')
}

</script>

<style scoped>
#content {
  padding-bottom: 55px;
}
</style>