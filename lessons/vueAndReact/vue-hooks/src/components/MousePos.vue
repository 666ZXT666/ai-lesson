<template>
    <p>Mouse X: {{ x }}</p>
    <p>Mouse Y: {{ y }}</p>
</template>

<script setup>
import Hook from '../hooks/useMouse'

console.log(Hook)
const { x, y } = Hook()


</script>

<style scoped>

</style>
