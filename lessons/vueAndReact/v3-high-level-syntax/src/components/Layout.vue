<template>

    <div>
        <h1>Layout 组件</h1>
        <slot></slot>
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot name="main"></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped></style>