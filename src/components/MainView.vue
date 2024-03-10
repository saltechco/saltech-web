<script lang="ts" setup>
import { ref } from 'vue'
import MainViewBodyObject1 from '@/components/MainViewBodyObject1.vue'
import MainViewBodyObject2 from '@/components/MainViewBodyObject2.vue'
import MainViewBodyObject3 from '@/components/MainViewBodyObject3.vue'

const slogans = ['سازنده ایده های ناب', 'نوآور در تکنولوژی', 'در پی خلق شگفتی']

const isShowBodyAndFooterWanted = ref(false)



const typerData = slogans
const writtenText = ref(slogans[slogans.length - 1])

function typeWriter(text, i, fnCallback) {
  if (i < (text.length)) {
    writtenText.value = text.substring(0, i + 1) + '<span aria-hidden="true"></span>'

    setTimeout(function() {
      typeWriter(text, i + 1, fnCallback)
    }, 100)
  } else if (typeof fnCallback == 'function') {
    setTimeout(fnCallback, 700)
  }
}

// start a typewriter animation for a text in the dataText array
function StartTextAnimation(i) {
    if (typeof typerData[i] == 'undefined') {
      i = 0
    }
    if (i < typerData[i].length) {
      typeWriter(typerData[i], 0, function() {
        setTimeout(function() {
          StartTextAnimation(i + 1)
        }, 5000)
      })
    }
}

setTimeout( function () {
  StartTextAnimation(0)
}, 5000)
</script>

<template>
  <div id="header-title-layout">
    <div id="title-text-layout">
      <div id="title-text">
        <span id="text-title-icon" class="material-symbols-rounded mx-2">workspaces</span>
        <div>
          <h1 id="text-title" v-html="writtenText"></h1>
        </div>
        <h5 id="text-title-subtitle">
          آیا شما هم به دنبال نرم افزار های کاربردی و جذاب هستید؟
        </h5>
        <p id="text-subtitle">
          اینجا، کلکسیونی از اپلیکیشن های بروز و کم نظیر در انتظار شما هستند.<br>پس به جمع ما بپیوندید.
        </p>
        <div class="my-3" />
        <a href="#learnMore"><Button id="text-learn-more" class="my-2" icon="pi pi-arrow-left" icon-pos="right" label="بیشتر بدانید&nbsp;&nbsp;&nbsp;&nbsp;"
                                     outlined severity="secondary" @click="isShowBodyAndFooterWanted = true" /></a>
      </div>
    </div>
    <div id="title-image-layout">
      <img id="title-image" alt="صالتک" src="/site_mainviewimage.webp">
    </div>
  </div>
  <div id="learnMore">
    <MainViewBodyObject1 />
    <div class="material-symbols-rounded divider w-full text-center align-center">more_horiz</div>
    <MainViewBodyObject2 />
    <div class="material-symbols-rounded divider w-full text-center align-center">more_horiz</div>
    <MainViewBodyObject3 />
  </div>
</template>

<style scoped>
@import "@/styles/responsive-main-view-object.css";

* {
  direction: rtl;
}

#header-title-layout {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  background: var(--surface-100);
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
  width: 70%;
  margin-top: 5%;
  margin-left: 25%;
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
  text-transform: uppercase;
  line-height: 0.8rem;
  padding-top: 0.5rem;
}

#text-title-subtitle {
  font-family: "Peyda Bold", sans-serif !important;
  color: var(--text-color-secondary);
  line-height: 0.8rem;
}

#text-subtitle {
  font-family: "Peyda Medium", sans-serif !important;
}

/******************/

span {
  animation: caret 1s steps(1) infinite;
}

@keyframes caret {
  50% {
    border-color: transparent;
  }
}

.divider {
  scale: 2.85;
  color: var(--text-color-secondary);
  opacity: 20%;
}

</style>
