<script lang="ts" setup>
import FirstMainView from '@/components/FirstMainView.vue'
</script>

<template>
  <div class="spacer" />
  <div class="container">
    <FirstMainView />
  </div>
</template>

<style scoped>
/*
.container {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
  min-width: 100vw;
  font-family: 'Peyda Black', sans-serif !important;
  font-size: 3rem;
  overflow: hidden;
}
 */
.container {
  overflow-x: hidden;
  margin: 0;
}
</style>
