<template>
    <div>
    <ul>
        <li v-for="(repo,index) in repos" :key="index">{{repo.name}}</li>
    </ul>
    </div>
</template>

<script setup>
const repos =[
        {
            id:1,
            name:'lesson1'
        },
        {
            id:2,
            name:'lesson2'
        },
        {
            id:3,
            name:'lesson3'
        }
    ]
</script>

<style  scoped>

</style>