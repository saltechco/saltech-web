<script lang="ts" setup>
import Footer from '@/components/main/Footer.vue'
</script>

<script lang="ts">
export default {
  title: 'صفحه پیدا نشد'
}
</script>

<template>
  <div class="spacer" />
  <div class="container">
    <lottie-player
      src="/jsons/not-found.json"
      speed="1"
      style="width: 200px; height: 200px; scale: 1.4; background: transparent"
      mode="normal"
      autoplay
      loop
    ></lottie-player>
    <h4
      style="
        color: #007cff;
        margin-top: 3rem;
        font-family: 'Peyda Black', sans-serif;
        font-size: 18pt;
      "
    >
      گــشــتم نبود ، نـــگـــرد نیست!&nbsp;🧐
    </h4>
    <p style="color: slategray; font-size: 14pt">
      ممکنه صفحه پاک شده باشه یا موقتاً در دسترس نباشه.
    </p>
  </div>
  <Footer />
</template>

<style scoped>
.container {
  overflow: hidden;
  width: 100%;
  margin: 8rem 0 14rem;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

* {
  font-family: 'Peyda Medium', sans-serif;
  direction: rtl;
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
