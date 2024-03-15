<script lang="ts" setup>
import MainView from '@/components/MainView.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="spacer" />
  <div class="container">
    <MainView />
    <Footer />
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
.container {
  overflow-x: hidden;
  margin: 0;
}

#scroll-top {
  margin: 1.5rem;
}
</style>
