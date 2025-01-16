<template>
    <div>
        CompSubA {{ counterStore.count }} {{ count }}
    </div>
</template>

<script setup>
import { toRefs } from 'vue'
import { useCounterStore } from '../store/counter'
const counterStore = useCounterStore();
const {count} = toRefs(counterStore); // 值， 响应式丢失了
</script>

<style scoped>

</style>