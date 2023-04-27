<template>
  <van-card
      v-for="user in userList"
      tag="VIP"
      :desc="user.description"
      :title="`${user.name} (${user.major})`"
      :thumb="user.avatar"
  >
    <template #tags>
      <van-tag plain type="primary" style="margin-right: 8px;margin-top: 8px" v-for="tag in user.tags">
        {{tag}}
      </van-tag>
      <van-tag plain type="primary">标签</van-tag>
    </template>
    <template #footer>
      <van-button size="small">详情</van-button>
    </template>
  </van-card>
  <!-- 搜索提示 -->
  <van-empty v-if="!userList || userList.length<1" image="search" description="暂无用户" />
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import {showFailToast,showSuccessToast} from "vant/es";
import request from "../plugins/request";
import qs from "qs"


const route = useRoute()
const { tags } = route.query
const userList = ref([])
onMounted(async () => {
  const userListData = await request.get('/user/search/tags',{
    params: {
      tagNameList: tags
    },
    paramsSerializer: {
      serialize:function(params) {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
    }
    // } //brackets   repeat
  })
  .then(function (response) {
    showSuccessToast('操作成功')
    return response.data;

  })
  .catch(function (error) {
   showFailToast('请求失败')
  })
  if (userListData){
    userListData.forEach(user => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags)
      }
    })
    userList.value = userListData
  }
})



const mockUser = {
  id: 1,
  username: 'nuanyan',
  name: '暖言',
  age: 22,
  gender: 1,
  avatar: 'http://ny.wbblog.top/20205515493278292.jpg',
  major: '软件工程',
  phone: '19896001100',
  email: '2942322882@qq.com',
  description: '暖言的个人简介:一直以来，努力、积极、乐观、拼搏是我的人生信条，我相信，我会一直努力下去，做好自己，奉献社会。敢做敢拼，脚踏实地；',
  tags: ['考研','抽烟','熬夜','积极','篮球'],
  createTime: new Date(),
}

</script>

<style scoped>

</style>