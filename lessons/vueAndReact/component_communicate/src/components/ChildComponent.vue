<template>
    <h2>子组件</h2>
    <p>{{title}}</p>
    <button @click="sendMessageToParent">发送</button>
</template>

<script setup>
import {
    defineProps,
    defineEmits,
    ref
} from 'vue'

const childMessage = ref('hello,parent!')

const emit = defineEmits(['child-message'])

const sendMessageToParent = () => {
    emit('child-message',childMessage.value)
}

defineProps({
  title:{
    type:String,
    required:true
  }
})


</script>

<style scoped>

</style>
