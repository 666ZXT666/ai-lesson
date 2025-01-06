<script setup>
// composition api
import {
  ref, // 简单数据类型
  reactive // 复杂数据类型
} from 'vue'

// 组合API
// counter 计数业务
const counter = ref(0);
const increment = () => {
  counter.value++;
}

// user form 对象数据业务
const state = reactive({
  name: '张三',
  age: 18
})
const updateState = () => {
  state.name = '李四';
  state.age++;
}
</script>

<template>
  <h1>App2</h1>
  <div>
    <p>{{ counter }}</p>
    <button @click="increment">increment</button>

    <p>Name: {{ state.name }}</p>
    <p>Age: {{ state.age }}</p>
    <button @click="updateState">updateState</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
