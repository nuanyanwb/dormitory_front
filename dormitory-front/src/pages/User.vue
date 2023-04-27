<template>
  <template v-if="user">
    <van-cell title="用户名" is-link :value="user.username" @click="toEdit('username','用户名',user.username)"/>
    <van-cell class="avatarCell" title="头像" :value="user.avatar">
      <van-uploader
          :v-model="fileUrl.url"
          :after-read="afterRead"
      >
        <img :src="user.avatar" class="avatar" />
      </van-uploader>
    </van-cell>
    <van-cell title="姓名" is-link to="/user/edit" :value="user.name" @click="toEdit('name','姓名',user.name)"/>
    <van-cell title="年龄" is-link to="/user/edit" :value="user.age" @click="toEdit('age','年龄',user.age)"/>
    <van-cell title="性别" is-link to="/user/edGender" :value="user.gender==1 ? '男' : '女' " @click="toEdit('gender','性别',user.gender)"/>
    <van-cell title="专业" is-link to="/user/edit" :value="user.major" @click="toEdit('major','专业',user.major)"/>
<!--    <van-cell title="手机号" is-link to="/user/edit" :value="user.phone" @click="toEdit('phone','手机号',user.phone)"/>
    <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" @click="toEdit('email','邮箱',user.email)"/>
    <van-cell title="创建时间" is-link to="/user/edit" :value="user.createTime"/>-->
  </template>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../api/user";
import request from "../plugins/request";

// const user = {
//   id: 1,
//   username: 'nuanyan',
//   name: '暖言',
//   age: 22,
//   gender: 1,
//   avatar: 'http://ny.wbblog.top/20205515493278292.jpg',
//   major: '软件工程',
//   phone: '19896001100',
//   email: '2942322882@qq.com',
//   createTime: new Date(),
// }
const fileUrl = ref({
  url: 'http://localhost:9000/upload'
})
const user = ref();
onMounted(async () => {
   user.value = await getCurrentUser()
  // if (res){
  //   showSuccessToast('获取用户信息成功')
  //   user.value = res
  // }else {
  //   showFailToast('获取用户信息失败')
  // }
})

const router = useRouter();
const toEdit = (editKey: string, editName: string, currentValue: string) => {
  if (editKey === 'gender') {
    router.push({
      path: '/user/edGender',
      query: {
        editKey,
        editName,
        currentValue,
      }
    })
  }
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
    }
  })
}

const afterRead = async () => {
  const res = await request.post('/upload',{
    fileUrl: '',
  })
};
</script>

<style scoped>
.avatar {
  width: 58px;
  height: 58px;
  border-radius: 50%;
}
.avatarCell {
  --van-cell-line-height: 55px;
}

</style>