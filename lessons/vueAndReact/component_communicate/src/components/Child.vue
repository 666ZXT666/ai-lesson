<template>
    <div>
        Child
        <p>{{title}}</p>
    </div>
</template>

<script setup>
import {defineExpose} from 'vue'
import {ref} from 'vue'

const title = ref('子组件的数据')

defineExpose({
    title: '子组件传递的数据',
    someMethod: () => {
        title.value = '子组件的数据改变'
    }
})

</script>

<style scoped></style>
