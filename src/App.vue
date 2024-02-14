<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'

</script>


<template>
    <RouterLink to="/">Inicio</RouterLink>
    <RouterLink to="/lista1">Lista 1</RouterLink>
    <RouterLink to="/lista2">Lista2</RouterLink>

<RouterView/>

</template>


<style scoped>

</style>