<template>
    <el-container>
        <el-header>
            <el-menu :default-active="1" class="el-menu-demo" mode="horizontal" background-color="#545c64"
                text-color="#fff" active-text-color="#ffd04b">
                <el-menu-item index="1">
                    处理中心
                </el-menu-item>
                <el-submenu index="2">
                    <template #title>
                        我的工作台
                    </template>
                    <el-menu-item index="2-1">
                        选项1
                    </el-menu-item>
                    <el-menu-item index="2-2">
                        选项2
                    </el-menu-item>
                    <el-menu-item index="2-3">
                        选项3
                    </el-menu-item>
                </el-submenu>
                <el-menu-item index="3">
                    消息中心
                </el-menu-item>
            </el-menu>
        </el-header>
        <el-aside>
            <div>
                <router-link to="/">Home</router-link>
            </div>
            <div>
                <router-link to="/login">Login</router-link>
            </div>
            <div>
                <router-link to="/about">About</router-link>
            </div>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script setup>

</script>

<style scoped></style>