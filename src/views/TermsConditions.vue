<script setup lang="ts">
import Footer from '@/components/main/Footer.vue'
import MainScrollTop from '@/components/main/MainScrollTop.vue'
import Terms from '@/components/pages/Terms.vue'
</script>

<script lang="ts">
export default {
  title: 'قوانین و مقررات'
}
</script>

<template>
  <div class="spacer" />
  <div class="container">
    <Terms />
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
