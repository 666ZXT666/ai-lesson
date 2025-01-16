// 全局共享的用户状态
import { defineStore } from 'pinia'
import { 
    ref,
    reactive
 } from 'vue'

 export const useUserStore = defineStore('user', () => {
    const isLogin = ref(false)
    const toLogin = () => {
        isLogin.value = true
    }
    const toLogout = () => {
        isLogin.value = false
    }

    const userInfo = reactive({
        name: '张三',
        avatar:'',
        message:0,
        uid:null
    })

    const setUserInfo = (info) => {
        userInfo.name = '张三'
        userInfo.avatar = 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
        userInfo.message = '你好，世界'
        userInfo.uid = 1234567890
    }

    return {
        isLogin, 
        toLogin, 
        toLogout,
        userInfo,
        setUserInfo
    }
 })
