<script lang="ts" setup>
import Footer from '@/components/main/Footer.vue'
import MainScrollTop from '@/components/main/MainScrollTop.vue'
import Services from '@/components/services/Services.vue'
</script>

<template>
  <div class="spacer" />
  <div class="container">
    <Services />
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
