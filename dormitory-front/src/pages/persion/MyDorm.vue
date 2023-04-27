<template>
  <van-divider
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
  >
    我的寝室信息
  </van-divider>
  <van-empty v-if="!myDorm || myDorm.length<1" image="search" description="暂无寝室信息" />
  <div v-else>
        <van-card class="dormitory-card"
            :thumb="myDorm.dormImg ? myDorm.dormImg : moAvatar"
            :title="myDorm.dormNumber"
            :desc="myDorm.desc"
        >
          <template #tags>
            <van-tag plain type="primary" style="margin-right: 8px;margin-top: 8px" v-for="dormag in myDorm.dormTag">
              {{dormag}}
            </van-tag>
            <van-tag plain type="primary">标签</van-tag>
          </template>
          <template #footer>
            <el-button type="warning" @click="toExpectation">
              再次申请
            </el-button>
          </template>
        </van-card>
    <!-- 搜索提示 -->

  </div>
  <van-divider
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
  >
    寝室成员
  </van-divider>
  <van-empty v-if="!userList || userList.length<1" image="search" description="当前寝室就你一个哦" />
  <van-card
      v-for="user in userList"
      tag="VIP"
      :desc="user.description"
      :title="`${user.name} (${user.major})`"
      :thumb="user.avatar ? user.avatar : moavatar "
  >
    <template #tags v-if="user.tags!=null">
      <van-tag plain type="primary" style="margin-right: 8px;margin-top: 8px" v-for="tag in user.tags">
        {{tag}}
      </van-tag>
      <van-tag plain type="primary">标签</van-tag>
    </template>
    <template #footer>
      <van-button size="small">详情</van-button>
    </template>
  </van-card>

</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import request from "../../plugins/request";
import {showFailToast, showSuccessToast} from "vant/es";
import {useRouter} from "vue-router";
import {getCurrentUser} from "../../api/user";

const router = useRouter()
const myDorm = ref({
  dormNumber: '',
  dormTag: '',
  description: '',
  dormImg: '',
})
const userList = ref([])





onMounted(async () => {
  const currentUser = await request.get('/user/current')
      .then(function (response) {
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
    const res = await request.get('/userDorm/myDorm')
    if (res.code === '200') {
      const dorm = res.data.dorm
      const users = res.data.users
      if (dorm.dormTag) {
        dorm.dormTag = JSON.parse(dorm.dormTag)
      }
      myDorm.value = dorm
      if (users) {
        users.forEach(user => {
          if (user.tags) {
            user.tags = JSON.parse(user.tags)
          }
        })
      }
      userList.value = users
    }



})

const toExpectation = async () => {
  await router.push('/expectation')
}

const moAvatar = 'http://ny.wbblog.top/dorm.jpg'
const moavatar = 'https://ts4.cn.mm.bing.net/th?id=OIP-C.X-VG5gTN2ak8rGRij3oCogAAAA&w=212&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'


</script>

<style scoped>
.dormitory-card {

  width: calc(1790 * 100vw / 1920);
  margin-top: 20px;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 25px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

</style>