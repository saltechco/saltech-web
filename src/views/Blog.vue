<script setup lang="ts">
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="spacer" />
  <div class="container">
    <h1 id="not-available">این بخش فعلا در دسترس نمی باشد!</h1>
  </div>
  <Footer />
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
  min-width: 100%;
}

#not-available {
  font-family: 'Peyda Black', sans-serif !important;
  font-size: 3rem;
  min-height: 75vh;
}
</style>
