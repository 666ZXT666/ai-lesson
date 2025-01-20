<template>
    <div>
        {{ typeof user.age}}
        <input type="text" v-model="user.name">
        <p>姓名：{{ user.name }}</p>
        <input type="number" v-model.number="user.age">
        <p>年龄：{{ user.age }}</p>
        <input type="text" v-model="user.homeTown.city">
        <p>城市：{{ user.homeTown.city }}</p>
    </div>

</template>

<script setup>
import { 
  ref,
  watch,
  watchEffect,
 } from 'vue'
// count 改变后去做些啥
const user = ref({
  name: '张三',
  age: 18,
  homeTown: {
    // 深层次的属性
    city: '北京',
    province: '北京',
    code: '100000'
  }
})
// watch(user, (newVal, oldVal) => {
//   console.log('新值：', newVal)
//   console.log('旧值：', oldVal)
// }, {
//   deep: true
// })

//默认执行一次
// watchEffect 不需要配置deep 默认深度监听

watchEffect(() => {
  console.log(`当前user发生变化${user}`)
})


</script>

<style scoped>

</style>