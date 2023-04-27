<template>
<div>
<!--  <div>-->
<!--    <van-notice-bar left-icon="volume-o" :scrollable="false">-->
<!--      <van-swipe-->
<!--          vertical-->
<!--          class="notice-swipe"-->
<!--          :autoplay="3000"-->
<!--          :touchable="false"-->
<!--          :show-indicators="false"-->
<!--      >-->
<!--        <van-swipe-item>明月直入，无心可猜。</van-swipe-item>-->
<!--        <van-swipe-item>仙人抚我顶，结发受长生。</van-swipe-item>-->
<!--        <van-swipe-item>今人不见古时月，今月曾经照古人。</van-swipe-item>-->
<!--      </van-swipe>-->
<!--    </van-notice-bar>-->
<!--  </div>-->

  <div style="width: 370px;">
    <el-row :gutter="8">
      <el-col :span="8">
        <el-card class="myHover_card" shadow="hover">
          <div class="container-height" style="background-color: white;border-radius: 15px; width: 740px;margin-right: 15px">
            <!--   话题动态-->
            <div class="dynamic-box" style="margin-right: 10px;">    <!--border: 1px solid #96C2F1 -->

              <div style="display: flex">
                <div style="width: 78px;">
                  <img style="width: 55px; height: 55px; border-radius: 50%"
                       src="http://ny.wbblog.top/20205515493278292.jpg">
                </div>
                <div style="flex: 1;line-height: 25px;">
                  <div style="font-weight: bold">暖言</div>
                  <div style="font-size: 12px;color: #999">19分钟前 · 来自PC端</div>
                </div>
                <el-button>关注</el-button>
              </div>

              <div class="content">
                转眼间，时光飞逝，2022年即将过去。不知大家都是如何规划“跨年”的呢？
                欢迎米粉朋友们在话题#米粉跨年狂欢会下进行发帖，大家可以通过短文、文章、视频、图文等形式，聊聊自己的跨年计划。
              </div>

              <div style="margin-right: 10px">
                <el-row :gutter="8">
                  <el-col :span="12" style="margin-top: 2px;margin-bottom: 2px">
                    <img style="width: 100%" src="http://ny.wbblog.top/20205515493278292.jpg">
                  </el-col>
                  <el-col :span="12" style="margin-top: 2px;margin-bottom: 2px">
                    <img style="width: 100%" src="http://ny.wbblog.top/20205515493278292.jpg">
                  </el-col>
                  <el-col :span="12" style="margin-top: 2px;margin-bottom: 2px">
                    <img style="width: 100%" src="http://ny.wbblog.top/20205515493278292.jpg">
                  </el-col>
                  <el-col :span="12" style="margin-top: 2px;margin-bottom: 2px">
                    <img style="width: 100%" src="http://ny.wbblog.top/20205515493278292.jpg">
                  </el-col>
                </el-row>
              </div>

              <div style=" margin: 10px 0;display: flex; line-height: 25px">
                <div style="width: 50%;">
                  <el-tag style="margin-left: 2px;margin-right: 2px" type="primary"># 你好</el-tag>
                  <el-tag style="margin-left: 2px;margin-right: 2px" type="danger"># 二手车</el-tag>
                </div>
                <div style="width: 50%; font-size: 14px; color: #999; text-align: right">
                  <van-icon name="good-job-o" size="20px" /> 168
                  &nbsp
                  <van-icon name="chat-o" size="20px" /> 15
                </div>
              </div>


            </div>

          </div>



        </el-card>
        <el-card class="myHover_card" shadow="hover">



          <div class="container-height" style="background-color: white;border-radius: 15px; width: 740px;margin-right: 15px">
            <!--   话题动态-->
            <div class="dynamic-box" style="margin-right: 10px;">    <!--border: 1px solid #96C2F1 -->

              <div style="display: flex">
                <div style="width: 78px;">
                  <img style="width: 55px; height: 55px; border-radius: 50%"
                       src="http://ny.wbblog.top/20205515493278292.jpg">
                </div>
                <div style="flex: 1;line-height: 25px;">
                  <div style="font-weight: bold">暖言</div>
                  <div style="font-size: 12px;color: #999">19分钟前 · 来自PC端</div>
                </div>
                <el-button>关注</el-button>
              </div>

              <div class="content">
                转眼间，时光飞逝，2022年即将过去。不知大家都是如何规划“跨年”的呢？
                欢迎米粉朋友们在话题#米粉跨年狂欢会下进行发帖，大家可以通过短文、文章、视频、图文等形式，聊聊自己的跨年计划。
              </div>

              <div style="margin-right: 10px">
                <el-row :gutter="8">
                  <el-col :span="12" style="margin-top: 2px;margin-bottom: 2px">
                    <img style="width: 100%" src="http://ny.wbblog.top/20205515493278292.jpg">
                  </el-col>
                  <el-col :span="12" style="margin-top: 2px;margin-bottom: 2px">
                    <img style="width: 100%" src="http://ny.wbblog.top/20205515493278292.jpg">
                  </el-col>
                  <el-col :span="12" style="margin-top: 2px;margin-bottom: 2px">
                    <img style="width: 100%" src="http://ny.wbblog.top/20205515493278292.jpg">
                  </el-col>
                  <el-col :span="12" style="margin-top: 2px;margin-bottom: 2px">
                    <img style="width: 100%" src="http://ny.wbblog.top/20205515493278292.jpg">
                  </el-col>
                </el-row>
              </div>

              <div style=" margin: 10px 0;display: flex; line-height: 25px">
                <div style="width: 50%;">
                  <el-tag style="margin-left: 2px;margin-right: 2px" type="primary"># 你好</el-tag>
                  <el-tag style="margin-left: 2px;margin-right: 2px" type="danger"># 二手车</el-tag>
                </div>
                <div style="width: 50%; font-size: 14px; color: #999; text-align: right">
                  <el-icon><View/></el-icon>168
                  &nbsp
                  <el-icon><ChatDotSquare /></el-icon>15
                </div>
              </div>


              <div>
                <el-divider/>
              </div>

            </div>

          </div>



        </el-card>
      </el-col>
    </el-row>
  </div>
</div>

</template>

<script setup lang="ts">

</script>

<style scoped>
.myHover_card {
  width: 370px;
  height: auto;
}


.content {
  margin: 10px 0;
  line-height: 25px;
  text-align: justify;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.dynamic-box {
  width: 335px;
}
</style>