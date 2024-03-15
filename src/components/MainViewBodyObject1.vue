<script lang="ts" setup>
</script>

<template>
  <div id="none-column"/>
  <div id="title-layout">
    <div id="title-text-layout">
      <div id="title-text">
        <div style="margin-top: 3rem"></div>
        <span id="text-title-icon" class="material-symbols-rounded mx-2">target</span>
        <h1 id="text-title">به دنبال چه هستیم؟!</h1>
        <p id="text-subtitle">
          هدف ما ساخت نرم افزار هایی با دیدگاه بهبود فردی، ارائه مطالب آموزشی<br />و ایجاد بستر های
          مناسب برای انجام عملیات های کاربردی می باشد.
        </p>
      </div>
    </div>
    <div id="title-image-layout">
      <img id="title-image" alt="صالتک" src="/site_purpose.webp" />
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
  margin-left: 25%;
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
