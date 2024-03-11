<script lang="ts" setup>
import MainView from '@/components/MainView.vue'
</script>

<template>
  <div class="spacer" />
  <div class="container">
    <MainView />
    <ScrollTop
      id="scroll-top"
      :threshold="500"
      :pt="{
        root: 'w-3rem h-3rem border-round-sm bg-primary',
        icon: {
          class: 'text-base'
        }
      }"
      icon="pi pi-arrow-up"
    />
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

#scroll-top {
  margin: 1.5rem;
}
</style>
