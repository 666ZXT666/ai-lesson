<template>
    <div>
        About
    </div>
</template>

<script setup>
// 快 以最快的速度让用户看到界面
import { getUserInfo } from '../api'
import { onMounted } from 'vue'

onMounted(()=>{
    const fetchUserInfo = async()=>{
        const res = await getUserInfo()
        console.log(res.data.data)
    }
    fetchUserInfo()
})

</script>

<style scoped>

</style>