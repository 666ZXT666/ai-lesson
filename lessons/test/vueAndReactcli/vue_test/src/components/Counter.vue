<script setup>
import { ref } from 'vue'
let count = ref(0);
const increment = function(){
    count.value++;
}
</script>
<template>
    <p>Count: {{ count }}</p>
    <button @click="increment">+1</button>
</template>