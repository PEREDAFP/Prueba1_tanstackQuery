<script setup lang="ts">
import useClient from '@/composables/useClient'

const { isLoading, client} = useClient('2')


</script>


<template>
  <div v-if="isLoading">
    <h1>Cargando</h1>
  </div>
  <div v-else>
    <h1>Los clients Lista2</h1>
    <code>
      {{ client }}
    </code>

  </div>
</template>


<style scoped>

</style>