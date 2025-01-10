<template>
<div>
    <p>Mouse X: {{ mousePos.x }}</p>
    <p>Mouse Y: {{ mousePos.y }}</p>
</div>
</template>

<script setup>
import {
  // composition api vue3 核心亮点
  reactive,
  onMounted, //生命周期 life cycle
  onUnmounted
} from 'vue'
// const x = ref(0)
// const y = ref(0)
const mousePos = reactive({
  x: 0,
  y: 0
})

const mousePosHandle = (e) => {
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
    console.log('还在......')
}

onMounted(() => {
  window.addEventListener('mousemove', mousePosHandle)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', mousePosHandle)
})
</script>

<style scoped>  

</style>
