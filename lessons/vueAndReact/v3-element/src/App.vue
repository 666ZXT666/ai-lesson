<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {useRouter} from 'vue-router'
const router = useRouter()
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
