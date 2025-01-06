<script setup>
const name="智普" // 数据

</script>

<template>
  <!-- 导航 -->
   <div class="page">
    <header class="page-header">
      <h3 class="brand">{{name}}</h3>
      <nav class="menu">
        <router-link :to="{name:'home'}">首页</router-link>
        <router-link :to="{name:'about'}">关于</router-link>
        <router-link to="/posts/index">post-index</router-link>

      </nav>
    </header>
    <main class="page-body">
      <router-view>

      </router-view>
    </main>
   </div>
</template>

<style scoped>

</style>
