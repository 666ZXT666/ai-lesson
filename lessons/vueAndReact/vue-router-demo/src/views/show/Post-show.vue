<template>
  <div>
    <div>
      <div>Post-show{{ postId }}</div>
    </div>
    <router-view></router-view>
  </div>
</template>
    
    <script setup>
import { defineProps } from "vue"; // 定义props
import { useRoute } from "vue-router"; // 获取路由参数
const route = useRoute();
const { postId } = route.params.postId;
</script>
    
    <style scoped>
</style>
    
    