<!--
<template>
  <van-skeleton round="true">
    <template #template>
      <div :style="{ display: 'flex', width: '100%' }" >
        <van-skeleton-image>
          <img src="http://ny.wbblog.top/20205515493278292.jpg"  class="avater"/>
        </van-skeleton-image>
        <div :style="{ flex: 1, marginLeft: '16px' }">
          <van-skeleton-paragraph row-width="60%">
            你好您无权访问 chat.openai.com。

            网站所有者可能设置了阻止您访问该网站的限制。
          </van-skeleton-paragraph>

        </div>
      </div>
    </template>
  </van-skeleton>
</template>

<script>
export default {
  name: "Dormitory"
}
</script>

<style scoped>

.avater {
  width: 58px;
  height: 58px;
  border-radius: 50%;
}
</style>-->
<!--<template>
  <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <van-cell-group>
      <van-cell
          v-for="dorm in dorms"
          :key="dorm.id"
          :title="dorm.name"
          :label="dorm.label"
          center
          clickable
      >
        <template #title>
          <div class="dorm-title">{{ dorm.name }}</div>
          <van-tag v-if="dorm.gender === 'male'" type="primary">男</van-tag>
          <van-tag v-else-if="dorm.gender === 'female'" type="danger">女</van-tag>
          <van-tag v-else type="warning">混合</van-tag>
        </template>
        <template #right-icon>
          <div class="dorm-count">{{ dorm.count }}人</div>
        </template>
      </van-cell>
    </van-cell-group>
  </van-list>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const loading = ref(false);
    const finished = ref(false);
    const dorms = ref([
      {
        id: 1,
        name: '101',
        label: '标签1',
        gender: 'male',
        count: 4,
      },
      {
        id: 2,
        name: '102',
        label: '标签2',
        gender: 'female',
        count: 6,
      },
      {
        id: 3,
        name: '103',
        label: '标签3',
        gender: 'mixed',
        count: 8,
      },
    ]);

    const onLoad = () => {
      loading.value = true;

      setTimeout(() => {
        loading.value = false;
      }, 500);
    };

    return {
      loading,
      finished,
      dorms,
      onLoad,
    };
  },
};
</script>

<style scoped>
.dorm-title {
  display: inline-block;
  margin-right: 8px;
}

.dorm-count {
  color: #1989fa;
}
</style>-->
<template>
  <div class="dormitory-list">
    <van-row>
      <van-col class="col" v-for="dorm in dormList" :key="dorm.id">
        <van-card
            class="dormitory-card"
            :thumb="dorm.dormImg ? dorm.dormImg : moavatar"
            :title="`${dorm.dormNumber}寝室`"
            :desc="dorm.description"
        >
          <template #tags>
            <van-tag plain type="primary" style="margin-right: 8px;margin-top: 8px" v-for="tag in dorm.dormTag">
              {{tag}}
            </van-tag>
            <van-tag plain type="primary">标签</van-tag>
          </template>
          <template #footer>

              <van-button size="small">详情</van-button>

          </template>
        </van-card>
      </van-col>
    </van-row>
    <!-- 搜索提示 -->
    <van-empty v-if="!dormList || dormList.length<1" image="search" description="暂无寝室信息" />
  </div>
</template>
<script setup lang="ts">


import {onMounted, ref} from "vue";
import request from "../plugins/request";
import {showFailToast} from "vant/es";

const dormList = ref([])

onMounted(async () => {
  const dormitories = await request.get('/dorm/allDorm')
      .then(function (response) {
        //showSuccessToast('操作成功')
        console.log(response.data)
        return response.data;

      })
      .catch(function (error) {
        showFailToast('数据加载失败')
      })

  if (dormitories){
    dormitories.forEach(dorm => {
      if (dorm.dormTag) {
        dorm.dormTag = JSON.parse(dorm.dormTag)
      }
    })
    dormList.value = dormitories
  }
})

const moavatar = 'http://ny.wbblog.top/dorm.jpg'



</script>
<style scoped>


.dormitory-card {

  width: calc(1680 * 100vw / 1920);
  margin-bottom: 20px;
  border-radius: 25px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.col .van-col {
  padding-left: 0;
}

</style>
