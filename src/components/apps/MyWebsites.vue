<script setup lang="ts">
import MyApp from '@/components/apps/MyApp.vue'
import { AppType } from '@/scripts/apptypes'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const appName = ref('صالتک • ')

const route = useRoute()
switch (route.params.siteName) {
  case 'mahdekhatere':
    appName.value += 'مهد خاطره'
    break
  default:
    appName.value += 'وبسایت نامشخص'
    break
}
document.title = appName.value
</script>

<template>
  <MyApp
    v-if="$route.params.siteName == 'mahdekhatere'"
    :links="['https://saltech.ir/live/mahdekhatere']"
    icon="language"
    :type="AppType.Website"
    app-name="مهد خاطره"
    desc="نمونه یک سایت کامل"
    version="1.0.0"
  >
    <template #introduction>
      مهد خاطره یک سایت کامل است که همانطور که از اسمش پیداست، برای مهد کودک ساخته شده است.<br />
      این سایت دارای یک پنل کاربری برای مدیران و کاربران دارد که می توانند آنجا ثبت نام خود را انجام
      دهند.<br />
      <br />ضمن اینکه رابط کاربری جذاب و تم نارنجی، به زیبایی آن افزوده است.
    </template>
    <template #specification>
      <h4>مشخصات اصلی:</h4>
      <p>
        ساخته شده با: html, css, js, php
        <br />فریمورک استفاده شده: bootstrap
      </p>
      <br />
    </template>
  </MyApp>
</template>

<style scoped></style>
