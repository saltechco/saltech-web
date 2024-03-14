

<script lang="ts" setup>
import MainViewFooter from '@/components/Footer.vue'
</script>

<template>
  <div class="spacer" />
  <div class="container">
    <div id="desktop" style="scale: 1.15; width: 100%; height: 100vh; padding-top: 150px">
      <center>
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
      </center>
    </div>
    <MainViewFooter />
  </div>
</template>

<style scoped>
.container {
  overflow-x: hidden;
  margin: 0;
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
  height: 100vh;
  overflow: hidden;
}
</style>
