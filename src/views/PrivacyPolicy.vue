<script setup lang="ts">
import Footer from '@/components/main/Footer.vue'
import MainScrollTop from '@/components/main/MainScrollTop.vue'
import Privacy from '@/components/pages/Privacy.vue'
</script>

<script lang="ts">
export default {
  title: 'حریم خصوصی'
}
</script>

<template>
  <div class="spacer" />
  <div class="container">
    <Privacy />
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
