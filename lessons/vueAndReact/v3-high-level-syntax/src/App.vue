<script setup>
import DeepWatch from './components/DeepWatch.vue'
import BaseCard from './components/BaseCard.vue'
import Layout from './components/Layout.vue'
import {
  ref,
  watch,
  watchEffect
} from 'vue'
// count 改变后去做些啥
const count = ref(0)
const count2 = ref(100)
const increment = () => {
  count.value++
}

// watch(count, (newVal, oldVal) => {
//   if(newVal % 2 === 0) {
//     console.log( '计数器是偶数')
//   }
//   if(newVal % 2 === 1) {
//     console.log( '计数器是奇数')
//   }
// }, {
//   immediate: true
// })
// //监听 订阅发布者模式
// watchEffect(() => {
//   console.log('当前计数器值：', count.value)
//   console.log('当前计数器二值：', count2.value)
// })

</script>

<template>
  <div>
    <DeepWatch />

    <p>计数器：{{ count }}</p>
    <p>计数器二 {{ count2 }}</p>
    <button @click="count++">增加</button>
    <button @click="count2++">增加2</button>
    <!-- 插槽 -->
    <BaseCard>
      <p>这里是默认插槽的内容,父组件slot形式传入,提升组件的定制性</p>
    </BaseCard>

    <Layout>
      <h1>默认slot</h1>
      <template #header>
        <h1>这里是头部内容，由父组件决定</h1>
      </template>
      <template #main>
        <h1>这里是主内容，由父组件决定</h1>
      </template>
      <template #footer>
        <h1>这里是页脚内容，由父组件决定</h1>
      </template>
    </Layout>

  </div>
</template>

<style scoped></style>
