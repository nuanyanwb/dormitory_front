<template>
  <div class="body">
    <div class="box">
      <div class="login-box">
        <h1>LOGIN</h1>
        <form @submit="onSubmit">
          <div class="effect">
            <div class="login">
              <div class="input-item flex">
                <input v-model="username" autocomplete="new-password" type="text" required="required">
                <span>账 号</span>
                <i></i>
              </div>
              <div class="input-item flex">
                <input v-model="password" autocomplete="new-password" type="text" required="required">
                <span>密 码</span>
                <i></i>
              </div>
            </div>
          </div>
          <div>
            <button class="button login_submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {ref} from "vue";

import {showFailToast, showNotify, showSuccessToast} from "vant/es";
import request from "../plugins/request";


const router = useRouter();
const username = ref('');
const password = ref('');
const onSubmit = async () => {
  const res = await request.post('/login',{
    username: username.value,
    password: password.value,
  })
  if (res.code === '200'){
    showNotify({ type: 'success', message: '登录成功' });
    await router.replace('/')
  }else {
    showFailToast(res.msg)
  }
};
</script>

<style scoped>
.body {
  background: url("../../public/yuhy.jpg");
  background-size: cover;
  height: 566px;
  padding-top: 110px;
}

.box {
  height: 372px;
  width: 370px;
  box-sizing: border-box;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  padding: 2px;
}
/*.box::before,.box::after {*/
/*  content: "";*/
/*  position: absolute;*/
/*  top: -50%;*/
/*  left: -50%;*/
/*  z-index: 0;*/
/*  width: 370px;*/
/*  height: 564px;*/
/*  background: linear-gradient(0deg,transparent,transparent,#03e9f4,#03e9f4);*/
/*  transform-origin: bottom right;*/
/*  animation: login 5s linear infinite;*/
/*}*/
/*.box::after {*/
/*  background: linear-gradient(0deg,transparent,transparent,#ff2771,#ff2771);*/
/*  animation-delay: -3s;*/
/*}*/
/*@keyframes login {*/
/*  0% {transform: rotate(0deg)}*/
/*  100% {transform: rotate(360deg)}*/
/*}*/
.login-box {
  height: 372px;
  width: 363px;
  margin: 3px;
  padding: 20px;
  background: #262626;
  box-sizing: border-box;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
opacity: 0.5;
  z-index: 1;
}
.login-box h1 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 26px;
}
@keyframes animate {
  0% {
    background-position-x: 0;
  }

  100% {
    background-position-x: 300px;
  }
}
.effect {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  padding: 0 20px;
}

.login {
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  align-content: center
}

.input-item {
  position: relative;
  width: 100%;
  margin-bottom: 30px;
  height: 55px;
}

.input-item input {
  width: 100%;
  background: transparent;
  color: #fff;
  border: none;
  outline: none;
  box-shadow: none;
  font-size: 1em;
  letter-spacing: 0.1em;
  padding: 15px 0 5px;
  height: 55px;
}

.input-item span {
  position: absolute;
  left: 0;
  padding: 15px 0 5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.1em;
  transition: .5s;
  pointer-events: none;
}

.input-item input:valid~span,
.input-item input:focus~span {
  color: #2196f3;
  transform: translateY(-16px);
  font-size: 0.85em;
}

.input-item i {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #fff;
  overflow: hidden;
}

.input-item i::before {
  content: '';
  position: absolute;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #ff1b69, #ff0, #2196f3, #9c27b0, #ff1b69);
  animation: animate 2s linear infinite;
}

.input-item input:valid~i::before,
.input-item input:focus~i::before {
  left: 0;
}
.login_submit {
  margin-left: 37px;
  /*background: #fff;*/
  font-size: 23px;
  margin-top: 30px;
  padding: 5px 20px;
  border-radius: 26px;
  border: none;
  text-transform: none;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 75%;
  color: #009688;
  /*box-shadow: 0 0 20px #009688;*/
  cursor: pointer;
  transition: .2s;
  height: 40px;
  line-height: 40px;
  justify-content: center;
  animation: animate 2s linear infinite;

  font-family: "Britannic Bold",serif;
  background-color: #383636;
  box-shadow: 0 0 10px #03e9f4;
}

.login_submit:hover {
  font-family: 华文楷体,serif;
  background: #03e9f4;
  color: #fff;
  box-shadow: 0 0 5px #03e9f4,
  0 0 25px #03e9f4,
  0 0 50px #03e9f4,
  0 0 200px #03e9f4;
}
/*.login_submit {*/
/*  width: 240px;*/
/*  height: 55px;*/
/*  text-decoration: none;*/
/*  display: grid;*/
/*  place-items: center;*/
/*  color: #fff;*/
/*  background: #03e9f4;*/
/*  position: relative;*/
/*  z-index: 0;*/
/*  border-radius: 16px;*/
/*}*/
/*.login_submit:hover {*/
/*  color: #ff9950;*/
/*}*/

.user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border-bottom: 1px solid #fff;
  background: transparent;
}
.user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}
.user-box input:focus~label,
.user-box input:valid~label {
  top: -20px;left: 0;
  color: #03e9f4;
  font-size: 12px;
}


</style>