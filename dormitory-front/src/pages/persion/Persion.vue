<template>

      <van-card
          class="cardBody"
          :title="user ? user.name : '未登录' "
          desc="&nbsp&nbsp"
          :thumb="user ? user.avatar : moavatar "
          @click="toInfo"
      >
        <template #tags>
          <van-tag plain type="primary" style="margin-right: 5px;margin-top: 5px"
                   v-for="tag in user.tags" v-if="user">
            {{tag}}
          </van-tag>
<!--          <van-button plain hairline type="primary" to="/login" size="mini" v-if="user">
            {{user.tags}}
          </van-button>-->
          <van-button plain hairline type="primary" to="/login" size="mini" v-else>
            {{'去登录'}}
          </van-button>


        </template>
      </van-card>
    <div>
      <van-divider
          :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '10px 0' }">
      </van-divider>
    </div>
    <div class="cell">
      <van-cell icon="records"  title="资料设置" is-link to="/user" />
      <van-cell icon="user-circle-o" title="账号与安全" is-link to="/accountSafe" />
      <van-cell icon="guide-o" title="个性化标签设置" is-link to="/myTags" />
      <van-cell icon="friends-o" title="我的寝室分配" is-link to="/myDorm" />
    </div>
    <div>
      <van-divider
          :style="{ color: '#DCDCDC', borderColor: '#DCDCDC', padding: '0 16px' }"
      >
      </van-divider>
    </div>
    <van-cell icon="setting-o" title="系统设置" is-link to="/user" />
  <div>
    <van-divider
        :style="{ color: '#DCDCDC', borderColor: '#DCDCDC', padding: '0 16px' }"
    >
    </van-divider>
  </div>
  <van-cell icon="close" title="退出登录" @click="logout" v-if="user" />
</template>



<script setup lang="ts">


import {onMounted, ref} from "vue";
import {getCurrentUser} from "../../api/user";
import {useRouter} from "vue-router";
import {showSuccessToast} from "vant/es";
import request from "../../plugins/request";

const user = ref()
const router = useRouter();
const moavatar = 'https://ts4.cn.mm.bing.net/th?id=OIP-C.X-VG5gTN2ak8rGRij3oCogAAAA&w=212&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'

onMounted(async () => {
   user.value = await getCurrentUser()

  if (user.value.tags) {
    user.value.tags = JSON.parse(user.value.tags)
  }


})

const toInfo =  () => {
 /* if (user){
    user.value? router.push('/persionInfo') :  router.push('/login')
  }*/

}
const logout = async () => {
  const res = request.get('/logout')
 router.go(0)
}

</script>

<style >
.cardBody {
  --van-card-padding: 30px;
  --van-card-font-size: 20px;
  height: 150px;
  --van-card-thumb-radius: 50%;
}
.cardBody .van-card__title{
  line-height: unset;
}
.cardBody.van-card {
  background-color: white;
}

</style>