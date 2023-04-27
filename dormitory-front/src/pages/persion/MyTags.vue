<template>
  <div v-if="currentUser">
    <div v-if="activeIds === 0" style="text-decoration-color: lightgrey">暂时没有选择标签</div>
  </div>
  <div>
    <van-divider content-position="left">已选标签</van-divider>
    <div v-if="activeIds === 0" style="text-decoration-color: lightgrey">暂时没有选择标签</div>

    <el-tag style="margin: 10px;"
            v-for="tag in activeIds"
            :key="tag.id"
            class="mx-1"
            closable
            :type="tag.type"
            effect="dark" round
            size="large"
            @close="doClose(tag)"
    >
      {{ tag }}
    </el-tag>

    <van-divider content-position="left">选择标签</van-divider>
    <van-form @submit="saveTag">
      <van-tree-select
          v-model:active-id="activeIds"
          v-model:main-active-index="activeIndex"
          :items="tagList"
      />
      <van-button round block type="primary" native-type="submit" style="width: 375px;">确认选择</van-button>
    </van-form>
  </div>

</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";
import request from "../../plugins/request.js";
import {useRouter} from "vue-router";
import {showFailToast, showNotify} from "vant/es";

const originTagList = [
  {
    text: '喜好',
    children: [
      {text: '篮球', id: '篮球', type: 'success'},
      {text: '学习', id: '学习'},
      {text: '篮e', id: '篮e'},
      {text: '篮t', id: '篮t'},
      {text: '篮h', id: '篮h'},
      {text: '篮e', id: '篮r'},
      {text: '篮d', id: '篮d'},
      {text: '排球', id: '排球'},
    ],
  },
  {
    text: '目标',
    children: [
      {text: '考', id: '考'},
      {text: '考2', id: '考2'},
      {text: '考3', id: '考3'},
      {text: '考4', id: '考4'},
      {text: '考5', id: '考5'},
      {text: '考6', id: '考6'},
      {text: '考7', id: '考7'},
      {text: '工作', id: '工作'},
      {text: '考公', id: '考公'},
    ],
  },
]
//标签列表
let tagList = ref(originTagList);



const router = useRouter();
const activeIds = ref([]);
const activeIndex = ref(0);
const  currentUser = ref()

onMounted(async () => {
  const user = await request.get('/user/current')
      .then(function (response) {
        //showSuccessToast('操作成功')
        if (response.code === '200'){
          return response.data;
        }
        showFailToast(response.msg)
        router.replace('/login')
      })
      .catch(function (error) {
        currentUser.value = null
        showFailToast('数据加载失败,请重试')
      })
  // if (user.tags) {
  //   user.tag = JSON.parse(user.tags)
  // }
  currentUser.value = user


})


//移除标签
const doClose = (tag) => {
  activeIds.value = activeIds.value.filter(item => {
    return item !== tag;
  })
}

const saveTag = async () => {
console.log(activeIds.value)
  const res = await request.post('/user/updateTags',{
    'tags': JSON.stringify(activeIds.value),
  })
  if (res.code === '200') {
    await router.push('/')
    showNotify({ type: 'success', message: '修改标签信息成功' });
  }
  else {
    showNotify({ type: 'danger', message: '更新失败' });
  }
}
</script>