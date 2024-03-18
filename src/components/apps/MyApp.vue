<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { AppType } from '@/scripts/apptypes'

const props = defineProps({
  appName: String,
  appApiKey: String,
  version: String,
  desc: String,
  image: String,
  icon: String,
  type: String,
  links: Array,
  pictures: Array,
  movie: String,
  movieCoverImage: String
})

const reviewResponse = ref(null)

onMounted(() => {
  getReviews()
})

async function getReviews() {
  try {
    const resp = await axios.get('https://sandoghche.cafebazaar.ir/api/v0/reviews', {
      headers: {
        'CAFEBAZAAR-PISHKHAN-API-SECRET': props.appApiKey
      }
    })
    reviewResponse.value = resp.data
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="container">
    <div class="app-infobar">
      <div class="app-info">
        <img v-if="props.image" :alt="props.appName" :src="props.image" class="app-img" />
        <Avatar v-else class="mr-2 app-img" size="xlarge" style="background-color: #dee9fc; color: #1a2551">
          <span class="material-symbols-rounded">deployed_code</span>
        </Avatar>
        <div class="none-row" />
        <div class="app-info-attr">
          <div class="none-column" />
          <h3 class="app-name">{{ props.appName }}</h3>
          <p class="app-short-desc">{{ props.desc }}</p>
          <p class="app-ver">نسخۀ&nbsp;&nbsp;&nbsp;{{ props.version }}</p>
        </div>
      </div>
      <div v-if="props.type == AppType.Android && props.links" class="app-download">
        <a :href="props.links[0]" target="_blank">
          <img id="download-direct" alt="دانلود مستقیم" src="/download-direct-android.svg" />
        </a>
        <a :href="props.links[1]" target="_blank">
          <img id="download-baazar" alt="دانلود از بازار" src="/download-from-baazar.svg" />
        </a>
        <a :href="props.links[2]">
          <img id="download-myket" alt="دانلود از مایکت" src="/download-from-myket.svg" />
        </a>
      </div>
      <div v-if="props.type == AppType.Windows && props.links" class="app-download">
        <a :href="props.links[0]" target="_blank">
          <img id="download-direct" alt="دانلود مستقیم" src="/download-direct-windows.svg" />
        </a>
      </div>
    </div>
    <div id="app-download-row">
      <div class="space" />
      <div v-if="props.type == AppType.Android && props.links" class="app-download-row">
        <a :href="props.links[0]" target="_blank">
          <img
            id="download-direct-row"
            class="mx-2"
            alt="دانلود مستقیم"
            src="/download-direct-android.svg"
          />
        </a>
        <a :href="props.links[1]" target="_blank">
          <img
            id="download-baazar"
            class="mx-2"
            alt="دانلود از بازار"
            src="/download-from-baazar.svg"
          />
        </a>
        <a :href="props.links[2]">
          <img
            id="download-myket"
            class="mx-2"
            alt="دانلود از مایکت"
            src="/download-from-myket.svg"
          />
        </a>
      </div>
      <div v-if="props.type == AppType.Windows && props.links" class="app-download">
        <a :href="props.links[0]" target="_blank">
          <img id="download-direct" alt="دانلود مستقیم" src="/download-direct-windows.svg" />
        </a>
      </div>
    </div>
    <div class="space" />
    <TabView>
      <TabPanel header="معرفی">
        <slot class="m-0" name="introduction"></slot>
      </TabPanel>
      <TabPanel header="مشخصات">
        <slot class="m-0" name="specification"></slot>
      </TabPanel>
      <TabPanel v-if="props.pictures || props.movie" header="تصاویر">
        <div class="m-0 app-image-layout">
          <video
            v-if="props.movie"
            :src="props.movie"
            class="app-video"
            controls
            playsinline
            preload="auto"
            :poster="props.movieCoverImage"
          />
          <Image v-for="picture in props.pictures" alt="تصویر برنامه" preview>
            <template #image>
              <img :src="picture" alt="تصویر برنامه" class="app-image" />
            </template>
            <template #preview="slotProps">
              <img
                :src="picture"
                alt="تصویر برنامه"
                :style="slotProps.style"
                @click="slotProps.onClick"
              />
            </template>
          </Image>
        </div>
      </TabPanel>
      <TabPanel v-if="props.appApiKey" header="نظرات">
        <div class="m-0">
          <p v-if="!reviewResponse" id="reviews-empty">هیچ نظری وجود ندارد!</p>
          <ul v-else class="list-none">
            <li v-for="review in reviewResponse.results">
              <div class="review-header">
                <Avatar
                  class="review-avatar"
                  icon="pi pi-user"
                  shape="circle"
                  size="large"
                  style="background-color: #dee9fc; color: #1a2551"
                />
                <div class="review-name-layout">
                  <h5 class="review-name">کاربر ناشناس</h5>
                  <Rating v-model="review.rate" :cancel="false" class="review-rate" readonly />
                </div>
              </div>
              <div class="review-text-layout">
                <pre class="review-text">
                  {{ review.text }}
                </pre>
              </div>
            </li>
          </ul>
        </div>
      </TabPanel>
    </TabView>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1024px) {
  .app-download {
    display: none !important;
  }

  #app-download-row {
    display: block !important;
  }
}

@media screen and (max-width: 530px) {
  .app-download {
    display: none !important;
  }

  #app-download-row {
    display: block !important;
  }

  .app-info {
    align-items: center;
    justify-content: center;
  }
}

@media screen and (max-width: 290px) {
  .app-download {
    display: none !important;
  }

  #app-download-row {
    display: block !important;
  }

  .app-info {
    align-items: center;
    justify-content: center;
  }

  .app-info-attr {
    text-align: center;
  }

  .none-column,
  .none-row {
    display: none;
  }

  .container {
    padding: 4rem 0 0 !important;
  }
}

* {
  direction: rtl;
}

.container {
  width: 100%;
  margin: 0;
  padding: 6rem;
}

.app-infobar {
  display: flex;
  align-items: center;
}

.app-info {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.app-name {
  font-family: 'Peyda Bold', sans-serif;
  font-size: clamp(1rem, 2vw, 2rem);
  line-height: 0.8;
}

.app-ver {
  font-family: 'Peyda Medium', sans-serif;
  font-size: clamp(1rem, 1.25vw, 2rem);
  color: var(--text-color-secondary);
}

.app-short-desc {
  font-family: 'Peyda Medium', sans-serif;
  font-size: clamp(1rem, 1.25vw, 2rem);
  color: var(--text-color-secondary);
  line-height: 0.8;
}

.app-img {
  border-radius: 10px;
  width: 10rem;
  height: 10rem;
  background: white;
}

.none-row {
  margin: 1.5rem;
}

.none-column {
  margin: 2.5rem;
}

.app-download {
  display: flex;
  flex-direction: column;
  margin-right: auto;
  justify-content: center;
  align-items: center;
}

#app-download-row {
  display: none;
}

.app-download-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

#download-direct {
  width: 11.9rem;
  margin-bottom: 0.5rem;
}

#download-direct-row {
  width: 11.9rem;
}

#download-baazar {
  width: 12rem;
}

#download-myket {
  width: 12.5rem;
}

.space {
  margin-top: 3rem;
}

#reviews-empty {
  text-align: center;
}

.review-header {
  display: flex;
  align-items: center;
}

.review-name-layout {
  margin-right: 1rem;
}

.review-rate {
  margin-top: -0.75rem;
  margin-right: -0.3rem;
  scale: 0.9;
}

.review-name {
  font-family: 'Peyda Medium', sans-serif;
  font-size: 0.95rem;
  line-height: 0.8;
}

.review-avatar {
  margin-top: 1.25rem;
}

.review-text {
  font-size: 1.1rem;
  max-width: 40rem;
  white-space: -moz-pre-wrap;
  white-space: -o-pre-wrap;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.review-text-layout {
  padding-right: 1.75rem;
}

.app-image-layout {
  display: flex;
  align-items: center;
  overflow-x: auto;
}

.app-image {
  width: 10rem;
  border-radius: 15px;
  margin: 1rem;
}

.app-video {
  width: 31.25rem;
  height: max-content;
  border-radius: 15px;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
}

.material-symbols-rounded {
  font-variation-settings:
    'FILL' 0,
    'wght' 600,
    'GRAD' 0,
    'opsz' 100;
  font-size: 5rem;
}

</style>
