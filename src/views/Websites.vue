<script lang="ts" setup>
import Footer from '@/components/main/Footer.vue'
import MainScrollTop from '@/components/main/MainScrollTop.vue'
import MyWebsites from '@/components/apps/MyWebsites.vue'
</script>

<template>
  <div class="spacer" />
  <div class="container">
    <MyWebsites />
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
