<script lang="ts" setup>
import MainView from '@/components/main/MainView.vue'
import Footer from '@/components/main/Footer.vue'
import MainScrollTop from '@/components/main/MainScrollTop.vue'
</script>

<template>
  <div class="spacer" />
  <div class="container">
    <MainView />
    <Footer />
    <MainScrollTop />
  </div>
</template>

<style scoped>
.container {
  overflow-x: hidden;
  margin: 0;
}
</style>
