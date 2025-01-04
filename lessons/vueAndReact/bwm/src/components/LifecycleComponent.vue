<template>
<div>
    <div>
        <p>LifecycleComponent-Count:{{ count }}</p>
    </div>
</div>
</template>

<script setup>
import{defineProps, 
    onMounted,
    onBeforeMount,
    onBeforeUnmount,
    onUnmounted,
    onUpdated,
    onBeforeUpdate} from 'vue';
const props = defineProps({
    count: {
        type: Number,
        required: true,
    }
});

console.log('haha');
// 组件有声明周期
onMounted(() => {
    // on 某个阶段
    // mounted 挂载
    //已经完成了挂载
    console.log('挂载完成');
});

onBeforeMount(() => {
    console.log('挂载前');
});

onBeforeUnmount(() => {
    console.log('卸载前');
});

onUnmounted(() => {
    console.log('卸载完成');
});

onUpdated(() => {
    console.log('更新完成');
});

onBeforeUpdate(() => {
    console.log('更新前');
});

</script>

<style scoped>

</style>
