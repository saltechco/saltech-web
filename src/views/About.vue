<script setup lang="ts">
import About from '@/components/pages/About.vue'
import Footer from '@/components/main/Footer.vue'
import MainScrollTop from '@/components/main/MainScrollTop.vue'
</script>

<script lang="ts">
export default {
  title: 'درباره ما'
}
</script>

<template>
  <div class="spacer" />
  <div class="container">
    <About />
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
