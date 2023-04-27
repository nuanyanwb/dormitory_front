<template>
  <van-divider
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
  >
    寝室调换申请
  </van-divider>
  <van-form @submit="submit">
    <van-cell-group inset>
      <!-- 通过 validator 进行异步函数校验 -->
      <van-field
          v-model="applyDormNumber"
          name="有无指定寝室"
          label="有无指定寝室"
          placeholder="请输入寝室号（可选项）"
      />
      <!-- 通过 pattern 进行正则校验 -->
      <van-field
          v-model="roommateExpectations"
          name="室友期望"
          label="室友期望"
          placeholder="请输入室友期望"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="dormType"
          name="寝室类型"
          label="寝室类型"
          placeholder="请输入寝室类型"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />


     <div>
       <van-divider
           :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
       >
         申请理由
       </van-divider>
       <el-input
           style="margin-top: 20px"
           v-model="applyReason"
           name="文本域"
           label="文本yu"
           :rows="5"
           type="textarea"
           placeholder="请输入申请理由"
       />
     </div>

    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">

import {ref} from "vue";

const router = useRouter()
const applyDormNumber = ref('')
const roommateExpectations = ref('')
const dormType = ref('')
const applyReason = ref('')

import request from "../../plugins/request";
import {showNotify} from "vant/es";
import {useRouter} from "vue-router";
import {getCurrentUser} from "../../api/user";

const submit = async () => {
  const currentUser = await getCurrentUser();
  const res = await request.post('/apply',{
    'applyDormNumber': applyDormNumber.value,
    'dormType': dormType.value,
    'roommateExpectations': roommateExpectations.value,
    'applyReason': applyReason.value
  })
  if (res.code === '200') {
    showNotify({ type: 'success', message: '已提交申请' });
    await router.push('/myDorm');
  }else {
    showNotify({type: "warning",message: res.msg})
  }
}


</script>

<style scoped>

</style>