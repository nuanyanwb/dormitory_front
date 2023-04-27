<!--
<template>
  <div class="login-container">
    <van-form ref="loginForm" label-position="top" @submit="handleLogin">
      <van-field v-model="username" label="用户名" required clearable placeholder="请输入用户名" />
      <van-field v-model="password" label="密码" type="password" required clearable placeholder="请输入密码" />
      <van-button type="primary" block native-type="submit" :loading="loading">登录</van-button>
    </van-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Form, Field, Button } from 'vant';
import 'vant/lib/index.css';
import './login.css';

    const username = ref('');
    const password = ref('');
    const loading = ref(false);

    const handleLogin = () => {
      loading.value = true;
      // TODO: 发送登录请求
    };


</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.van-field__label {
  font-size: 16px;
}

.van-field__control {
  height: 40px;
  font-size: 16px;
  padding: 0 10px;
  border: 1px solid #ccc;
}

.van-button {
  margin-top: 30px;
  font-size: 16px;
}
</style>-->
