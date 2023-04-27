<template>
<!--  v-if="editUser.editKey === 'gender'"-->
<!--  v-else-if="editUser.editKey === '' "-->
  <van-form @submit="onSubmitGender" v-if="editUser.editKey === 'gender' ">
<!--    修改性别-->
    <div>
      <van-field
          v-model="editUser.currentValue"
          is-link
          readonly
          name="picker"
          :label="editUser.editName"
          placeholder="点击选择性别"
          @click="showPicker = true"
      />
      <van-popup v-model:show="showPicker" position="bottom">
        <van-picker
            :columns="columns"
            @confirm="onConfirm"
            @cancel="showPicker = false"
        />
      </van-popup>
    </div>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

  <van-form @submit="onSubmitPwd" v-else-if="editUser.editKey === '' ">
    <!--    修改密码-->
    <div>
      <van-cell-group inset>
        <van-field v-model="password" type="password" label="原始密码" placeholder="请输入原始密码" :rules="[{ required: true, message: '此处为必填项' }]" />
        <van-field v-model="newPwd"  type="password" label="新密码" placeholder="请输入新密码" :rules="[{ required: true, message: '此处为必填项' }]" />
        <!-- 输入密码 -->
        <van-field v-model="checkPwd" type="password" label="确认密码" placeholder="请再次填写确认" :rules="[{ required: true, message: '此处为必填项' }]" />
      </van-cell-group>
    </div>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
  <van-form v-else-if="editUser.editKey === 'age' " >
    <van-date-picker
        v-model="currentDate"
        title="选择日期"
        :min-date="minDate"
        :max-date="maxDate"
    />
  </van-form>
  <van-form @submit="onSubmit" v-else>
    <!--   修改其他 -->
    <div>
      <van-field
          v-model="editUser.currentValue"
          :name="editUser.editKey"
          :label="editUser.editName"
          :placeholder="editUser.editName"
          :rules="[{ required: true, message: '此处为必填项' }]"
      />
    </div>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
import request from "../plugins/request";
import {showNotify} from "vant/es";
import {getCurrentUser} from "../api/user";

const route = useRoute();
const router = useRouter();
const editUser = ref({
  editKey: route.query.editKey,
  currentValue: route.query.currentValue,
  editName: route.query.editName,
})
const password = ref('');
const newPwd = ref('');
const checkPwd = ref('');
const showPicker = ref(false);
const columns = [
  { text: '女', value: 0 },
  { text: '男', value: 1 },
];
const onConfirm = ({ selectedOptions }) => {
  editUser.value = selectedOptions[0]?.text;
  showPicker.value = false;
};

const currentDate = ref(['2021', '01', '01']);
const minDate = new Date(1900,1,1)
const maxDate = new Date(2900,1,1)

// const file = ref({
//   url: 'http://localhost:9000/upload',
// })

const onSubmit = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser){
   // showFailToast('请登录后操作')
    showNotify({type: "danger",message: "请登录后操作"})
    return;
  }
  const res = await request.post('/user/updateUser',{
    'id': currentUser.id,
    [editUser.value.editKey as string]: editUser.value.currentValue
  })
  if (res.code === '200'){
    // showSuccessToast('修改成功')
    showNotify({ type: 'success', message: '修改成功' });
    router.back();
  }else {
    showNotify({type: "warning",message: res.msg})
  }
};
const onSubmitPwd = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser){
    // showFailToast('请登录后操作')
    showNotify({type: "danger",message: "请登录后操作"})
    return;
  }
  const res = await request.post('/user/updatePwd',{
    'id': currentUser.id,
    'password': password.value,
    'newPwd': newPwd.value,
    'check': checkPwd.value,
  })
  if (res.code === '200') {
    showNotify({ type: 'success', message: '修改成功' });
    router.back();
  }else {
    showNotify({type: "warning",message: res.msg})
  }
};
const onSubmitGender = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser){
    // showFailToast('请登录后操作')
    showNotify({type: "danger",message: "请登录后操作"})
    return;
  }
  const res = request.post('/user/updateUser',{
    'id': currentUser.id,
    [editUser.value.editKey as string]: editUser.value.currentValue,
  })
  if (res.code === '200') {
    showNotify({ type: 'success', message: '修改成功' });
    router.back();
  }else {
    showNotify({type: "warning",message: res.msg})
  }
}




</script>

<style scoped>

</style>