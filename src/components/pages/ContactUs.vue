<script lang="ts" setup>
import { MapComponent, MapTypes } from '@neshan-maps-platform/mapbox-gl-vue'
import '@neshan-maps-platform/mapbox-gl-vue/dist/style.css'
import type { MapboxComponentInputOptions } from '@neshan-maps-platform/mapbox-gl-vue/dist/Types/Components/MapComponent/MapComponentProps'
import setMarkers from '@/scripts/setmarkers'
import { useCookies } from 'vue3-cookies'

const { cookies } = useCookies()
// const systemDefaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
const isCurrentThemeDark = cookies.get('darkMode') == '0x23FF41'

const currentMapType = isCurrentThemeDark ? MapTypes.neshanVectorNight : MapTypes.neshanVector

const options: MapboxComponentInputOptions = {
  mapType: currentMapType,
  zoom: 17,
  center: [54.3247, 31.9082],
  minZoom: 17,
  maxZoom: 19,
  mapKey: 'web.83aae62267aa4f31a08239805da98fb8', // Get your own API Key on https://platform.neshan.org/panel
  poi: true,
  mapTypeControllerOptions: {
    show: false
  }
}
</script>

<template>
  <Card class="contact-card">
    <template #content>
      <div class="container">
        <MapComponent id="contact-map" :options="options" :map-setter="setMarkers" />
        <div id="contact-info">
          <h1 class="contact-title">اطلاعات تماس</h1>
          <div class="contact-spacer" />
          <div class="contact-items">
            <h2 class="contact-item-title">آدرس:</h2>
            <p class="contact-item">
              استان یزد، یزد، امام شهر، میدان انقلاب، بلوار ولیعصر (عج)، بین ولیعصر 49 و ولیعصر
              49.5، مغازه سوم، طبقه بالا
            </p>
            <h2 class="contact-item-title">شماره تماس:</h2>
            <p class="contact-item">
              7787&nbsp;&nbsp;&nbsp;&nbsp;3524&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;035<span
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>( ساعات پاسخگویی 8 تا 14 )</b></span
              >
            </p>
            <p class="contact-item">9727&nbsp;&nbsp;&nbsp;&nbsp;115&nbsp;&nbsp;&nbsp;&nbsp;0905</p>
            <h2 class="contact-item-title">ایمیل:</h2>
            <p class="contact-item"><b>saltech.co.ir@gmail.com</b></p>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped>
@media screen and (max-width: 600px) {
  .container {
    display: block !important;
  }
}

.contact-card {
  background: var(--surface-100);
  margin: 3rem;
  border-radius: 28px;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
}

#contact-map {
  flex: 1;
  height: 30rem;
  border-radius: 25px;
}

#contact-info {
  flex: 1;
}

.contact-title {
  font-family: 'Peyda Black', sans-serif;
  font-size: 2.5rem;
}

.contact-spacer {
  margin-top: 2rem;
}

.contact-item-title {
  font-family: 'Peyda Bold', sans-serif;
}

.contact-item {
  font-family: 'Peyda Medium', sans-serif;
  font-size: 1em;
}
</style>
