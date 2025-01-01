<template>
<div>
    {{ rate }}
</div>
</template>


<script setup>
import{defineProps,ref,computed} from 'vue';
// 子组件和父组件不一定是一直绑定的 哪里要用到 哪里定义
//定义props 消费数据 不是自身数据 父组件传递
//告诉外界，我需要什么数据
let props = defineProps({
    value:Number
})
let count = ref(0);//组件自由的响应数据
//计算属性 
let rate = computed(
    () => {
       return "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value)
    }
);
</script>


<style scoped>

</style>