<script lang="ts" setup>
import MyApp from '@/components/apps/MyApp.vue'
import { AppType } from '@/scripts/apptypes'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const appName = ref('صالتک • ')

const route = useRoute()
switch (route.params.appName) {
  case 'AnswerSheet':
    appName.value += 'پاسخنامه'
    break
  case 'PuyaKhan':
    appName.value += 'پویا خوان'
    break
  case 'Tasbih':
    appName.value += 'تسبیح'
    break
  case 'WordReminder':
    appName.value += 'مرور کلمات'
    break
  default:
    appName.value += 'برنامه نامشخص'
    break
}
document.title = appName.value
</script>

<template>
  <MyApp
    v-if="$route.params.appName == 'AnswerSheet'"
    :links="[
      'https://s.saltech.ir/answersheet',
      'https://cafebazaar.ir/app/ir.saltech.answersheet',
      'https://myket.ir/app/ir.saltech.answersheet?utm_source=search-ads-gift&utm_medium=cpc'
    ]"
    :pictures="[
      'https://s.cafebazaar.ir/images/upload/screenshot/ir.saltech.answersheet-242843307162.jpg?x-img=v1/format,type_webp,lossless_false/resize,h_600,lossless_false/optimize',
      'https://s.cafebazaar.ir/images/upload/screenshot/ir.saltech.answersheet-775444409930.jpg?x-img=v1/format,type_webp,lossless_false/resize,h_600,lossless_false/optimize',
      'https://s.cafebazaar.ir/images/upload/screenshot/ir.saltech.answersheet-646775020729.jpg?x-img=v1/format,type_webp,lossless_false/resize,h_600,lossless_false/optimize',
      'https://s.cafebazaar.ir/images/upload/screenshot/ir.saltech.answersheet-187088014688.jpg?x-img=v1/format,type_webp,lossless_false/resize,h_600,lossless_false/optimize',
      'https://s.cafebazaar.ir/images/upload/screenshot/ir.saltech.answersheet-534306483327.jpg?x-img=v1/format,type_webp,lossless_false/resize,h_600,lossless_false/optimize',
      'https://s.cafebazaar.ir/images/upload/screenshot/ir.saltech.answersheet-612081961937.jpg?x-img=v1/format,type_webp,lossless_false/resize,h_600,lossless_false/optimize',
      'https://s.cafebazaar.ir/images/upload/screenshot/ir.saltech.answersheet-147535401768.jpg?x-img=v1/format,type_webp,lossless_false/resize,h_600,lossless_false/optimize',
      'https://s.cafebazaar.ir/images/upload/screenshot/ir.saltech.answersheet-270485545165.jpg?x-img=v1/format,type_webp,lossless_false/resize,h_600,lossless_false/optimize',
      'https://s.cafebazaar.ir/images/upload/screenshot/ir.saltech.answersheet-409156831704.jpg?x-img=v1/format,type_webp,lossless_false/resize,h_600,lossless_false/optimize',
      'https://s.cafebazaar.ir/images/upload/screenshot/ir.saltech.answersheet-913864573250.jpg?x-img=v1/format,type_webp,lossless_false/resize,h_600,lossless_false/optimize'
    ]"
    :type="AppType.Android"
    app-api-key="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJuYXNoZXItcGlzaGtoYW4tYXBpIiwiaWF0IjoxNjQ0MzA3NTA0LCJleHAiOjQ3OTc5MDc1MDQsImFwaV9hZ2VudF9pZCI6ODA4fQ.RnOALtZfF8r36whegzHZ9MCoqiTsDdKxQDnUKFz064E"
    app-name="پاسخنامه"
    desc="شبیه ساز آزمون واقعی"
    image="https://s.cafebazaar.ir/images/icons/ir.saltech.answersheet-2267dd10-4129-4532-83c5-3742cddc000c_512x512.png?x-img=v1/format,type_webp,lossless_false/resize,h_256,w_256,lossless_false/optimize"
    movie="https://ads.cdn.asset.aparat.com/cb/0fa62de24a45dab6d364b676c2952ad543211570-720p.mp4"
    movie-cover-image="https://static.cdn.asset.aparat.com/avt/43211570-1460-b__8839.jpg?width=900&quality=90&secret=N7iwEaV5kfuX2ciUHCvO4w?123"
    version="2.37.401.1811"
  >
    <template #introduction>
      <strong>پاسخنامه، جایگزینی ایده آل برای پاسخنامه های کاغذی می باشد.</strong>
      <br />
      با استفاده از این برنامه، می توانید حس و حال یک آزمون واقعی را شبیه سازی کنید. <br />
      دارای امکانات ویژه ای می باشد که به آزمون واقعی بسیار شباهت دارد. <br />
      با ظاهری مطمئن، آرام و جذاب ، که این می تواند شما را برای انجام آزمون های متعدد ترغیب کند.
      <br />
      <br />
      به طور مثال: <br />
      • امکان مشاهده آزمون های انجام شده <br />
      • امکان بارگذاری و مشاهده فایل سؤالات حین انجام آزمون (به همراه حالت شب) <br />
      • امکان استفاده از چرک نویس بدون نیاز به کاغذ <br />• امکان تخصیص زمان به طور مجزا به هر دسته
      (مثل آزمون های آزمایشی) <br />• امکان معلق کردن آزمون دلخواه <br />• امکان دسته بندی سؤالات
      <br />• امکان افزودن دستی سؤالات به آزمون <br />• امکان انجام آزمون، با سؤالات دارای الگوی
      مشخص <br />• امکان مشخص کردن شماره سؤال <br />• امکان انتخاب تصادفی سؤالات در یک بازه مشخص
      <br />• امکان زمان دار بودن آزمون <br />• امکان تصحیح آزمون (هم به صورت دستی و هم با وارد کردن
      کلید آزمون) <br />• قابلیت کرنومتر حل تست، شمارش میزان زمان انجام حل هر تست و مشاهده میانگین
      آن در کل آزمون و یا متناسب با هر دسته <br />• امکان مشاهده درصد به صورت مجزا برای هر دسته
      <br />• امکان تصحیح آزمون، با نمره منفی یا بدون نمره منفی <br />• امکان نشانه گذاری سؤالات به
      صورت دلخواه <br />• امکان مشاهده وضعیت تحصیلی متناسب با درصد آزمون <br />• امکان مشاهده نمودار
      پیشرفت تحصیلی <br />• وجود جلوه های بصری و حسی <br />• قابلیت تطبیق با حالت شب گوشی <br />•
      امکان اشتراک گذاری کارنامه <br />• امکان جستجو میان آزمون ها <br />• امکان پشتیبان گیری از
      آزمون ها و نام آزمون ها و نشانه گذاری ها <br />و...
      <br />
      <br />امیدواریم از این برنامه لذت ببرید و مورد استفاده شما عزیزان قرار بگیرد. <br />با
      بروزرسانی های جدید این برنامه، با ما همراه باشید! :)
    </template>
    <template #specification>
      <h4>مشخصات اصلی:</h4>
      <p>
        قابل نصب روی اندروید 4.0+
        <br />حجم: 29 مگابایت <br />تاریخ انتشار: 1400/11/21 <br />تاریخ آخرین بروزرسانی: 1401/03/11
        <br />
        کد شامد: 256385-0-63-689777-2-1
      </p>
      <br />
      <h4>دسترسی ها:</h4>
      <ul>
        <li>تغییر یا حذف محتویات کارت حافظه</li>
        <li>دسترسی کامل به اینترنت</li>
        <li>ممانعت از به خواب رفتن دستگاه</li>
        <li>خواندن کارت حافظه</li>
        <li>کنترل لرزش</li>
      </ul>
    </template>
  </MyApp>
  <MyApp
    v-if="$route.params.appName == 'PuyaKhan'"
    :links="[
      'https://s.saltech.ir/puyakhan',
      'https://cafebazaar.ir/app/ir.saltech.puyakhan',
      'https://myket.ir/app/ir.saltech.puyakhan?utm_source=search-ads-gift&utm_medium=cpc'
    ]"
    :pictures="[
      'https://s.cafebazaar.ir/images/upload/screenshot/ir.saltech.puyakhan-344483093604.jpg?x-img=v1/format,type_webp,lossless_false/resize,h_600,lossless_false/optimize',
      'https://s.cafebazaar.ir/images/upload/screenshot/ir.saltech.puyakhan-608892540377.jpg?x-img=v1/format,type_webp,lossless_false/resize,h_600,lossless_false/optimize',
      'https://s.cafebazaar.ir/images/upload/screenshot/ir.saltech.puyakhan-760999251634.jpg?x-img=v1/format,type_webp,lossless_false/resize,h_600,lossless_false/optimize',
      'https://s.cafebazaar.ir/images/upload/screenshot/ir.saltech.puyakhan-223650527006.jpg?x-img=v1/format,type_webp,lossless_false/resize,h_600,lossless_false/optimize'
    ]"
    :type="AppType.Android"
    app-api-key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJuYXNoZXItcGlzaGtoYW4tYXBpIiwiaWF0IjoxNzEwNjY2MTQ4LCJleHAiOjQ4NjQyNjYxNDgsImFwaV9hZ2VudF9pZCI6MjU1OH0.tt2bJeo3qaUzmdouN-Ej1RAJL5gd4SE7cwwjruoYD-s"
    app-name="پویا خوان"
    desc="دسترسی سریع و آسان به رمز پویا"
    image="https://s.cafebazaar.ir/images/icons/ir.saltech.puyakhan-041fba96-ae2b-425b-b825-7642af97a3ea_512x512.png?x-img=v1/format,type_webp,lossless_false/resize,h_256,w_256,lossless_false/optimize"
    version="1.6.24.310"
  >
    <template #introduction>
      <strong
        >همیشه پبش از این، دسترسی به رمز پویای دریافتی در هنگام پرداخت، برای همگان مشکل بود.</strong
      >
      <br />اما حالا پویا خوان کار را برای شما آسان کرده است! شما تنها با یک کلیک می توانید رمز پویا
      را کپی و آن را به راحتی در جای مناسب قرار دهید. حتی می توانید آن را برای سایر افراد ارسال
      کنید. <br />قابلیت های پویا خوان: <br />نمایش پنجره کوچک برای دسترسی آسان به کد و کپی یا
      اشتراک آن به همراه نمایشگر مدت زمان انقضای رمز <br />نمایش اعلان و امکان کپی یا اشتراک سریع آن
      به همراه نمایشگر مدت زمان انقضای رمز <br />کپی رمز پویا، بلافاصله پس از دریافت رمز <br />نمایش
      و امکان کپی و اشتراک آن در صفحه اصلی <br />امکان تنظیم مدت زمان انقضای رمز <br />امکان شخصی
      سازی نحوه نمایش رمز <br />سبک و سریع بودن برنامه <br />بهینه سازی شده برای موبایل های با سخت
      افزار ضعیف
    </template>
    <template #specification>
      <h4>مشخصات اصلی:</h4>
      <p>
        قابل نصب روی اندروید 5.0+
        <br />حجم: 2 مگابایت <br />تاریخ انتشار: 1402/09/01 <br />تاریخ آخرین بروزرسانی: 1402/09/17
      </p>
      <br />
      <h4>دسترسی ها:</h4>
      <ul>
        <li>ترسیم روی برنامه های دیگر</li>
        <li>اجرا شدن هنگام راه اندازی</li>
        <li>دسترسی به سرویس های پیش زمینه</li>
        <li>دریافت لحظه ای پیامک</li>
        <li>کنترل لرزش</li>
        <li>نمایش و کنترل اعلان ها</li>
      </ul>
    </template>
  </MyApp>
  <MyApp
    v-if="$route.params.appName == 'Tasbih'"
    :links="[
      'https://s.saltech.ir/tasbih',
      'https://cafebazaar.ir/app/com.saltechgroup.tasbih',
      'https://myket.ir/app/com.saltechgroup.tasbih?utm_source=search-ads-gift&utm_medium=cpc'
    ]"
    :type="AppType.Android"
    app-api-key="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJuYXNoZXItcGlzaGtoYW4tYXBpIiwiaWF0IjoxNjQ0MzA5NTUyLCJleHAiOjQ3OTc5MDk1NTIsImFwaV9hZ2VudF9pZCI6ODA5fQ.yJ-LeBydLiUz4PMIUK0NIc8nZoLxlIyYNdgF8ZWnFkM"
    app-name="تسبیح"
    desc="لحظاتی راز و نیاز با خدا"
    :pictures="[
      'https://s.cafebazaar.ir/images/upload/screenshot/com.saltechgroup.tasbih10.jpg?x-img=v1/format,type_webp,lossless_false/resize,h_600,lossless_false/optimize',
      'https://s.cafebazaar.ir/images/upload/screenshot/com.saltechgroup.tasbih7.jpg?x-img=v1/format,type_webp,lossless_false/resize,h_600,lossless_false/optimize',
      'https://s.cafebazaar.ir/images/upload/screenshot/com.saltechgroup.tasbih6.jpg?x-img=v1/format,type_webp,lossless_false/resize,h_600,lossless_false/optimize',
      'https://s.cafebazaar.ir/images/upload/screenshot/com.saltechgroup.tasbih8.jpg?x-img=v1/format,type_webp,lossless_false/resize,h_600,lossless_false/optimize',
      'https://s.cafebazaar.ir/images/upload/screenshot/com.saltechgroup.tasbih3.jpg?x-img=v1/format,type_webp,lossless_false/resize,h_600,lossless_false/optimize',
      'https://s.cafebazaar.ir/images/upload/screenshot/com.saltechgroup.tasbih4.jpg?x-img=v1/format,type_webp,lossless_false/resize,h_600,lossless_false/optimize',
      'https://s.cafebazaar.ir/images/upload/screenshot/com.saltechgroup.tasbih4.jpg?x-img=v1/format,type_webp,lossless_false/resize,h_600,lossless_false/optimize',
      'https://s.cafebazaar.ir/images/upload/screenshot/com.saltechgroup.tasbih12.jpg?x-img=v1/format,type_webp,lossless_false/resize,h_600,lossless_false/optimize'
    ]"
    image="https://s.cafebazaar.ir/images/icons/com.saltechgroup.tasbih_512x512.png?x-img=v1/format,type_webp,lossless_false/resize,h_256,w_256,lossless_false/optimize"
    version="1.5.4"
  >
    <template #introduction>
      شما می توانید بوسیله این نرم افزار صلوات بخوانید، تسبیح حضرت زهرا (س) بخوانید و یا حتّی ذکر
      روز را بخوانید.
      <br />نماز اول ماه بخوانيد؛ تعداد نماز و روزه های قضای خود را ذخیره کنید. <br />هرروز براساس
      زمانی که خود شما معیّن کرده اید اعلانی را در رابطه با خواندن ذکر روز برای شما نشان می دهد.
    </template>
    <template #specification>
      <h4>مشخصات اصلی:</h4>
      <p>
        قابل نصب روی اندروید 2.3+
        <br />حجم: 4 مگابایت <br />تاریخ انتشار: 1395/12/28 <br />تاریخ آخرین بروزرسانی: 1396/10/09
        <br />
        کد شامد: 8916-5-63-689777-2-1
      </p>
      <br />
      <h4>دسترسی ها:</h4>
      <ul>
        <li>خواندن وضعیت تلفن و شناسه</li>
        <li>خواندن کارت حافظه</li>
        <li>تغییر یا حذف محتویات کارت حافظه</li>
        <li>کنترل لرزش</li>
        <li>تنظیم هشدار (آلارم)</li>
      </ul>
    </template>
  </MyApp>
  <MyApp
    v-if="$route.params.appName == 'WordReminder'"
    :links="['https://s.saltech.ir/word-reminder']"
    :type="AppType.Windows"
    app-name="مرور کلمات"
    desc="نظم دهی و مرور لغات و معانی"
    version="1.0.0-ukn"
  >
    <template #introduction>
      اگر به دنبال نرم افزاری می‌گردید که بتوانید با استفاده از آن لغات و معانی را به آسانی یادداشت
      و مرور کنید، ما این نرم افزار را به شما پیشنهاد میدهیم.<br />
      <br />
      مرور کلمات هر وقت که بخواهید، برایتان 20 کلمه را هر روز نمایش میدهد. <br />
      همچنین قابلیت ذخیره سازی کلمات انگیسی، فارسی و عربی را دارد.
    </template>
    <template #specification>
      <h4>مشخصات اصلی:</h4>
      <p>
        قابل نصب روی ویندوز 10 و 11
        <br />حجم: - مگابایت
      </p>
      <br />
    </template>
  </MyApp>
</template>

<style scoped></style>
