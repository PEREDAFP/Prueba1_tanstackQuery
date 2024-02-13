<script setup lang="ts">
import useClients from '@/composables/useClients'

const { isLoading, clients} = useClients()


</script>


<template>
  <div v-if="isLoading">
    <h1>Cargando</h1>
  </div>
  <div v-else>
    <h1>Los clients</h1>
    <ul>
      <li v-for="client in clients" :key="client.id">{{ client.nombre }}</li>
    </ul>

  </div>
</template>


<style scoped>

</style>