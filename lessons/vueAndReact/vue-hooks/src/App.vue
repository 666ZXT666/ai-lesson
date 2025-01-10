<script setup>
import { ref } from 'vue'
import MousePos from './components/MousePos.vue'
const showMouse = ref(true)
const toggleMouse = () => {
  showMouse.value = !showMouse.value
}
</script>

<template>
  <MousePos v-if="showMouse" />
  <button @click="toggleMouse">切换</button>
</template>

<style scoped>

</style>
