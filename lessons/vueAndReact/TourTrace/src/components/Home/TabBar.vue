<template>
    <div>
        <van-tabbar>
            <van-tabbar-item icon="home-o" text="首页" />
            <van-tabbar-item icon="search" text="发现" />
            <van-tabbar-item icon="friends-o" text="购物车" />
            <van-tabbar-item icon="setting-o" text="我的" />
        </van-tabbar>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const active = ref<number>(1)
</script>

<style scoped>

</style>