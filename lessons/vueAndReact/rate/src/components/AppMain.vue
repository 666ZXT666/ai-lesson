<template>
<main>
    Main
    <h1>你的评分是{{ score }}</h1>
    <Rate :value="score"/>
    <Item />
    <Item />
</main>
</template>


<script setup>
import Rate from './Rate.vue';
import Item from './Item.vue';
import { ref } from 'vue';
//将数据 从父组件传递到子组件
const score = ref(3);
</script>


<style scoped>
main{
    flex: 1;
    height: 500px;
    background-color: #b863f5;
}
</style>