<template>
<template v-if="userAccount">
      <van-cell title="手机号" is-link to="/user/edit" :value="userAccount.phone" @click="toEdit('phone','手机号',userAccount.phone)"/>
    <van-cell title="邮箱" is-link to="/user/edit" :value="userAccount.email" @click="toEdit('email','邮箱',userAccount.email)"/>
<!--    <van-cell title="创建时间" is-link to="/user/edit" :value="user.createTime"/>-->
    <van-cell title="修改密码" is-link to="/user/edit" @click="toEdit('','','')"/>

</template>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../../api/user";
import {useRouter} from "vue-router";
const router = useRouter();

const userAccount = ref()


onMounted(async () => {
  userAccount.value = await getCurrentUser()

})

const toEdit = (editKey: string, editName: string, currentValue: string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
    }
  })
}
</script>

<style scoped>


</style>