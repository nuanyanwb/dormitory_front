<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>
  <van-divider content-position="left">已选标签</van-divider>
  <div v-if="activeIds.length === 0" style="text-decoration-color: lightgrey">暂时没有选择标签</div>

  <van-row gutter="10">
    <van-col v-for="tag in activeIds">
      <van-tag  closeable size="small" type="primary" @close="doClose(tag)">
        {{ tag }}
      </van-tag>
    </van-col>
  </van-row>

  <van-divider content-position="left">选择标签</van-divider>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />

  <van-button type="success" style="width: 375px;" @click="searchResult">搜索</van-button>


</template>

<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";
const router = useRouter()
const searchText = ref('');

const originTagList = [
  {
    text: '喜好',
    children: [
      { text: '篮球', id: '篮球' },
      { text: '学习', id: '学习' },
      { text: '篮e', id: '篮e' },
      { text: '篮t', id: '篮t' },
      { text: '篮h', id: '篮h' },
      { text: '篮e', id: '篮r' },
      { text: '篮d', id: '篮d' },
      { text: '排球', id: '排球' },
    ],
  },
  {
    text: '目标',
    children: [
      { text: '考', id: '考' },
      { text: '考2', id: '考2' },
      { text: '考3', id: '考3' },
      { text: '考4', id: '考4' },
      { text: '考5', id: '考5' },
      { text: '考6', id: '考6' },
      { text: '考7', id: '考7' },
      { text: '工作', id: '工作' },
      { text: '考公', id: '考公' },
    ],
  },
]
//标签列表
let tagList = ref(originTagList);

/**
 * 搜索过滤
 * @param val
 */
const onSearch = (val) => {
  tagList.value = originTagList.map(parentTag => {
    const tempChildren = [...parentTag.children];
    const temParentTag = {...parentTag};
    temParentTag.children = tempChildren.filter(item => item.text.includes(searchText.value))
    return temParentTag;
  })
}
const onCancel = () => {
  searchText.value = '';
  tagList.value = originTagList;
}

//移除标签
const doClose = (tag) => {
  activeIds.value = activeIds.value.filter(item => {
    return item !== tag;
  })
}


const activeIds = ref([]);
const activeIndex = ref(0);

const searchResult = () => {
  router.push({
    path: '/user/list',
    query: {
      tags: activeIds.value
    }
  })
}
</script>

<style scoped>

</style>