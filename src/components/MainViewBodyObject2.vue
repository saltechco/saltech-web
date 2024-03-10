<script lang="ts" setup>
</script>

<template>
  <div id="title-layout">
    <div id="title-image-layout">
      <img id="title-image" alt="صالتک" src="/site_platforms.webp">
    </div>
    <div id="title-text-layout">
      <div id="title-text">
        <span id="text-title-icon" class="material-symbols-rounded mx-2">code</span>
        <div>
          <h1 id="text-title">کدام پلتفرم ها ... ؟!</h1>
        </div>
        <h5 id="text-title-subtitle">بر روی چه پلتفرم هایی کار انجام می دهیم؟</h5>
        <p id="text-subtitle">
          ما در پلتفرم هایی چون اندروید، ویندوز و وبسایت فعالیت و اپلیکیشن طراحی می کنیم.
        </p>
        <div class="my-3" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/styles/responsive-main-view-object.css";

* {
  direction: rtl;
}

@media (min-width: 500px) {
  #title-layout {
    display: flex;
  }

  #title-text-layout,
  #title-image-layout {
    width: 50%;
  }
}

@media (max-width: 500px) {
  #title-layout {
    display: block;
  }

  #title-text-layout,
  #title-image-layout {
    width: 100%;
  }
}

#title-layout {
  background: var(--surface-0);
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
}

#title-text-layout {
  padding-left: 5%;
  height: 91vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#title-image-layout {
  height: 91vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  font-variation-settings: 'FILL' 0,
  'wght' 700,
  'GRAD' 0,
  'opsz' 24
}

/***** Texts *****/

#text-title {
  font-family: "Peyda Black", sans-serif !important;
  font-size: 3vw;
  text-transform: uppercase;
  line-height: 0.8rem;
  padding-bottom: 2rem;
  padding-top: 0.5rem;
}

#text-title-subtitle {
  font-family: "Peyda Bold", sans-serif !important;
  font-size: 1.2vw;
  color: var(--text-color-secondary);
  line-height: 0.8rem;
}

#text-subtitle {
  font-family: "Peyda Medium", sans-serif !important;
  font-size: 1.15vw;
}

span {
  animation: caret 1s steps(1) infinite;
}

@keyframes caret {
  50% {
    border-color: transparent;
  }
}
</style>
