<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import * as echarts from "echarts";
import { provide, watch } from "vue";
import { useRouter} from 'vue-router'
provide("echarts", echarts);
const router = useRouter()


watch(() => router, (newValue, oldValue) => {
	console.log(newValue, oldValue)
}, { deep: true })
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="route-anima" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  
</template>

<style lang="scss" >
@import './assets/scss/style.scss';

*{
  transition: all .3s;
}


#app {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  font-weight: lighter;
}

body{
  margin: 0;
}

.route-anima-enter-from{
  transform: translateX(5%);
  opacity: 0;
}

.route-anima-leave-from{
  transform: translateX(0);
  opacity: 1;
}

.route-anima-leave-to {
  transform: translateX(-5%);
  opacity: 0;
}


.route-anima-enter-to {
  transform: translateX(0);
  opacity: 1;
}



.route-anima-enter-active{
  transition: all .4s;
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}

.route-anima-leave-active{
  transition: all .3s;
  // transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}






</style>
