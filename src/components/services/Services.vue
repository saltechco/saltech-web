<script setup lang="ts">

import Service from '@/components/services/Service.vue'
import router from '../../router'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const serviceName = ref('صالتک • ')

const route = useRoute()
switch (route.params.serviceName) {
  case 'application':
    serviceName.value += 'طراحی اپلیکیشن'
    break
  case 'website':
    serviceName.value += 'طراحی وبسایت'
    break
  case 'graphics':
    serviceName.value += 'طراحی گرافیک'
    break
  case 'hardware':
    serviceName.value += 'طراحی سخت افزار'
    break
  case 'cloud':
    serviceName.value += 'پشتیبانی سایت'
    break
  case 'office':
    serviceName.value += 'خدمات اداری'
    break
  case 'mentoring':
    serviceName.value += 'آموزش برنامه نویسی'
    break
  default:
    serviceName.value += 'معرفی خدمت'
    break
}
document.title = serviceName.value
</script>

<template>
  <Service v-if="$route.params.serviceName == 'application'" :service-name="$route.params.serviceName" service-title="طراحی اپلیکیشن">
    طراحی اپلیکیشن، شامل طراحی نرم افزار های دسکتاپ (ویندوز، لینوکس و مک) و نرم افزار های موبایلی (اندروید، آی او
    اس)
    می باشد.<br>
    این اپلیکیشن ها می توانند به صورت آنلاین یا آفلاین باشند و کار های خاصی مختص یک کاربر خاص یا همه اقشار جامعه
    باشند.<br>
    درخواست خود را در اینجا ثبت و منتظر دریافت سفارش خود با بهترین کیفیت باشید.
  </Service>
  <Service v-if="$route.params.serviceName == 'website'" :service-name="$route.params.serviceName" service-title="طراحی وبسایت">
    ما در صالتک، انواع سایت های وردپرسی، خام یا با استفاده از فریمورک های مشهور<br>با استفاده از فناوری هایی با امنیت و کارایی و همچنین پاسخگو در تمامی پلتفرم ها پیاده سازی می کنیم.
  </Service>
  <Service v-if="$route.params.serviceName == 'graphics'" :service-name="$route.params.serviceName" service-title="طراحی گرافیک">
    طراحی گرافیک شامل طراحی پوستر، بنر، تراکت، وکتور، لوگو با بهترین کیفیت در فتوشاپ و ایلوستریتور و ... می باشد.
  </Service>
  <Service v-if="$route.params.serviceName == 'hardware'" :service-name="$route.params.serviceName" service-title="طراحی سخت افزار">
    صالتک می تواند بر اساس سفارش شما، دستگاه مورد نیاز شما را طراحی کند.<br>
    مثلا دستگاه هایی مثل ثبت کننده حضور و غیاب افراد، ساعت همراه (آلارم) و ...<br>
    این گونه سیستم ها با برنامه نویسی می توانند قدرتمندتر شوند و کار هایی خارق العاده انجام دهند.
  </Service>
  <Service v-if="$route.params.serviceName == 'cloud'" :service-name="$route.params.serviceName" service-title="بهینه سازی سایت">
    پشتیبانی سایت از جمله کارهایی نظیر خدمات افزایش رتبه در موتور های جستجو،<br>بهینه سازی UI/UX، پشتیبانی از خدمات سمت سرور و ارائه سرویس های سبک و سریع هاستینگ<br>برای میزبانی هرچه بهتر سایت شما می باشد که صالتک آن ها را به بهترین نحو انجام می دهد.
  </Service>
  <Service v-if="$route.params.serviceName == 'mentoring'" :service-name="$route.params.serviceName" service-title="آموزش برنامه نویسی">
    یکی از نیاز های مبرم و روز افزون امروزه جهان تکنولوژی، برنامه نویسی می باشد<br>
    چه خوب است که برنامه نویسی را نه فقط برای کسب درآمد بلکه برای یادگیری هرچه بهتر فرایند حل مسئله و ... فرا بگیریم؛<br>
    و بهتر از آن اینکه اگر بتوانیم از کودکی و نوجوانی شروع به برنامه نویسی کنیم!<br>
    صالتک اینجاست تا رؤیا های خودتان و فرزندانتان را تحقق ببخشد.
  </Service>
</template>

<style scoped>

</style>
