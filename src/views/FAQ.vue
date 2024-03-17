<script setup lang="ts">
import FAQ from '@/components/pages/FAQ.vue'
import Footer from '@/components/main/Footer.vue'
import MainScrollTop from '@/components/main/MainScrollTop.vue'
</script>

<script lang="ts">
export default {
  title: 'سؤالات متداول'
}
</script>

<template>
  <div class="spacer" />
  <div class="container">
    <FAQ />
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
