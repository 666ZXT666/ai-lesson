<script setup>
import LifecycleComponent from './components/LifecycleComponent.vue';
import { ref } from 'vue';

const count = ref(0);
const showComponent = ref(true);
const width = ref(100);


const toggleComponent = () => {
  showComponent.value = !showComponent.value;
};

const changeWidth = () => {
  width.value = width.value + 100;
};

const increment = () => {
  count.value++;
};

</script>

<template>
  <div>
    <button @click="toggleComponent">Toggle Component</button>
    <button @click="increment">Increment</button>
    <p>Count:{{ count }}</p>

    <transition name="fade">
      <LifecycleComponent v-show="showComponent" :count="count" />
    </transition>

    <button @click="changeWidth">Change Width</button>
    <div class="box1" :style="{ width: width + 'px' }"></div>
    <!-- Vue内置组件 -->
    <transition>
      <h1 v-if="showComponent">你好 transition</h1>
    </transition>
  </div>
</template>

<style scoped>
.box1 {
  height: 100px;
  background-color: pink;
  transition: width 1s;
}
</style>
