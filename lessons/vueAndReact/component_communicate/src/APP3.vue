<template>
  <div>
    <h2>父组件</h2>
    <p>来自子组件的数据:{{ messageFromChild }}</p>

    <ChildComponent @child-message="handleChildMessage" :title="title" />
  </div>
</template>

<script setup>
// @ 事件 不是js内置事件 自定义事件
// 父子组件通信
import {ref} from 'vue'
import ChildComponent from './components/childComponent.vue'

const title = ref('父组件传递的数据');
// 自定义事件 child-message 父子组件的约定 子组件调用 handleChildMessage 方法
const handleChildMessage = (message) => {
  console.log('来自子组件的数据',message)
}

</script>

<style scoped></style>
