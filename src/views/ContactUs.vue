<script setup lang="ts">
import ContactUs from '@/components/pages/ContactUs.vue'
import Footer from '@/components/main/Footer.vue'
import MainScrollTop from '@/components/main/MainScrollTop.vue'
</script>

<template>
  <div class="spacer" />
  <div class="container">
    <ContactUs />
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
