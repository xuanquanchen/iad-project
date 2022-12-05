<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from 'element-plus'
import { method } from "lodash";
defineProps<{ msg: string }>();

const count = ref(0);
const input = ref("Search whether you like");


</script>

<template>

  <div>
    <el-avatar :size="150" src="https://s2.loli.net/2022/11/08/zGNaC8oSYtIHyfK.jpg"></el-avatar>
  </div>
  <div class="Hellomessage">
    <h1>{{ msg }}</h1>
  </div>
  <Test />
  <div><h2>Scroll down to check more information</h2></div>
  <el-divider></el-divider>
  <el-container>
    <h1 color="#409EFF">Weather and Time</h1>
  </el-container>
  <div id="time">
    <h2>Now time is<Time /> </h2>
  </div>
  
  <!-- show current date-->
  <!--居中显示weather组件-->
  <div class="weather">
    <div id="he-plugin-standard">
      <Weather />
    </div>
  </div>
<el-divider></el-divider>
<h1 color="#409EFF">Map</h1>
  <div id="map">
    <Map />
  </div>
  <el-divider></el-divider>
  <h1 color="#409EFF">Calendar</h1>
  <div id="calendar"></div>
  <el-calendar >
  </el-calendar>
  <br />
  <el-divider></el-divider>
  <!--加入test-->
  <!--<el-input v-model="input" style="width: 200px; margin: 20px" />-->
  <br />
  <Music2 />


</template>

<style>
.ep-button {
  margin: 4px;
}
.calendar-wrap /deep/ .el-button{
        height: 30px;
        width: 30px;
        border-radius: 15px;
        padding: 0;
        background-color: #aec7fc;
        color: white;

    }
    .calendar-wrap /deep/ .el-icon-arrow-left,
    .calendar-wrap /deep/ .el-icon-arrow-right{
        font-weight:900 !important;
    }

</style>

