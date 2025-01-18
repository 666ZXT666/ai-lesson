<template>
    <el-form
    style="position:absolute;left:45%;"
    ref="formRef"
    :model="form"
    label-width="auto"
    :rules="rules"
    >
    <!-- el-form-item 通过 prop 找到对应的：
             1. form 中的数据（通过 :model 绑定的）
             2. rules 中的规则（通过 :rules 绑定的）
        -->
    <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" size="small"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password" size="small"></el-input>   
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="onSubmit" :loading="loading">登录</el-button>
    </el-form-item>
    </el-form> 
</template>
<script setup>
import {ref ,reactive} from 'vue'
import {login} from '../api'

const loading = ref(false)
const formRef = ref(null);
const form = reactive({
    username:'',
    password:''
})
const onSubmit = async() => {
    console.log(formRef.value)
    loading.value = true
    await formRef.value.validate(
        async (valid) => {
            if(valid){
                loading.value = false
                const res = await login(form);
                console.log('验证成功')
            }else{
                loading.value = false

                console.log('验证失败')
            }
        }
    )
}

const rules = reactive({
    username:[{required:true,message:'请输入用户名',trigger:'blur'}],
    password:[{required:true,message:'请输入密码',trigger:'blur'}],
})

</script>

<style scoped>

</style>