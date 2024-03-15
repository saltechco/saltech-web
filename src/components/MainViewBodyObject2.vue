<script lang="ts" setup></script>

<template>
  <div id="none-column"/>
  <div id="title-layout">
    <div id="title-image-layout">
      <img id="title-image" alt="صالتک" src="/site_platforms.webp" />
    </div>
    <div id="title-text-layout">
      <div id="title-text">
        <div style="margin-top: 3rem"></div>
        <span id="text-title-icon" class="material-symbols-rounded mx-2">code</span>
        <h1 id="text-title">کدام پلتفرم ها ... ؟!</h1>
        <p id="text-subtitle">
          ما در پلتفرم هایی چون ویندوز، وبسایت و اندروید فعالیت می کنیم و در ساخت اپلیکیشن جزو
          بهترین ها هستیم.
        </p>
      </div>
    </div>
  </div>
  <div id="none-column"/>
</template>

<style scoped>
@import '@/styles/responsive-main-view.css';

* {
  direction: rtl;
}

#none-column {
  margin-top: 4rem;
}

#title-layout {
  background: var(--surface-0);
  width: 100%;
  margin: 0;
  padding: 5rem 0;
  flex-wrap: wrap;
  display: flex;
}

#title-text-layout {
  padding-left: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
}

#title-image-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
}

#title-image {
  width: 60%;
  margin-top: 3%;
  margin-right: 15%;
}

#text-title-icon {
  padding-right: 0.25vw;
}

.material-symbols-rounded {
  font-variation-settings:
    'FILL' 0,
    'wght' 700,
    'GRAD' 0,
    'opsz' 24;
}

/***** Texts *****/

#text-title {
  font-family: 'Peyda Black', sans-serif !important;
  font-size: 3vw;
  text-transform: uppercase;
  line-height: 0.8rem;
  padding-bottom: 2rem;
  padding-top: 0.5rem;
}

#text-title-subtitle {
  font-family: 'Peyda Bold', sans-serif !important;
  font-size: 1.2vw;
  color: var(--text-color-secondary);
  line-height: 0.8rem;
}

#text-subtitle {
  font-family: 'Peyda Medium', sans-serif !important;
  font-size: 1.15vw;
}
</style>
