// 中央 状态管理 login userInfo
// count 收归中央 
// 定义一个仓库
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义一个仓库
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)

    function increment() {
        count.value++
    }

    return {
        count,
        increment
    }
})
