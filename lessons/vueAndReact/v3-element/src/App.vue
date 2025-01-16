<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {useRouter} from 'vue-router'
const router = useRouter()
</script>

<template>
  <div>
    <el-button type="primary">按钮</el-button>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
