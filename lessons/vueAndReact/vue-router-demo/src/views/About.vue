<template>
<div>
    About
    <button @click="goToHome">goToHome</button>
</div>
</template>

<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()// 获取路由实例 总管

const goToHome = () => {
router.push('/')
    // BOM > DOM
    //js 跳转Dom
    // BOM API
    // 破环了什么？ 浏览器历史记录栈
// location.href = '/';
}
</script>

<style scoped>

</style>

