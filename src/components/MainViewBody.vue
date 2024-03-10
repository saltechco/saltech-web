<script setup lang="ts">

</script>

<template>
  <div id="container">
    <div v-for="n of 100" :key="n">{{ n }}</div>
  </div>
</template>

<style scoped>
#container {
  background: var(--surface-0);
}
</style>
