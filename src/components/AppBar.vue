<script setup>
import { ref } from 'vue'

const items = ref([
  {
    label: 'محصولات',
    root: true,
    items: [
      [
        {
          label: 'موبایل',
          root: false,
          items: [
            {
              label: 'پاسخنامه',
              subtext: 'شبیه ساز آزمون واقعی',
              route: '/apps/AnswerSheet',
              icon: 'pi pi-android',
              image:
                'https://s.cafebazaar.ir/images/upload/icons/ir.saltech.answersheet-2267dd10-4129-4532-83c5-3742cddc000c.png'
            },
            {
              label: 'پویا خوان',
              subtext: 'دسترسی سریع به رمز پویا',
              route: '/apps/PuyaKhan',
              icon: 'pi pi-android',
              image:
                'https://s.cafebazaar.ir/images/upload/icons/ir.saltech.puyakhan-041fba96-ae2b-425b-b825-7642af97a3ea.png'
            },
            {
              label: 'تسبیح',
              subtext: 'شروع به ذکر و نام یاد خدا',
              route: '/apps/Tasbih',
              icon: 'pi pi-android',
              image: 'https://s.cafebazaar.ir/images/upload/icons/com.saltechgroup.tasbih.png'
            }
          ]
        }
      ],
      [
        {
          label: 'وبسایت',
          root: false,
          items: [
            {
              label: 'مهد خاطره',
              subtext: 'نمونه ای از یک سایت کامل',
              route: '/websites/mahekhatere',
              icon: 'pi pi-file'
            }
          ]
        },
        {
          label: 'ویندوز',
          root: false,
          items: [
            {
              label: 'مرور کلمات',
              subtext: 'نظم دهی و مرور لغات و معانی',
              route: '/apps/WordsReminder',
              icon: 'pi pi-microsoft'
            }
          ]
        }
      ]
    ]
  },
  {
    label: 'خدمات',
    root: true,
    route: '/services'
  },
  {
    label: 'ارتباط با ما',
    root: true,
    route: '/contactus'
  }
])
</script>

<template>
  <div id="menu-bg">
    <MegaMenu id="menu" :model="items" class="p-3 w-full">
      <template #start>
        <div class="clickable" onclick='window.location.href = "/"'>
          <object
            id="title-icon"
            class="h-3rem"
            data="/src/assets/images/row-logo.svg"
            onclick="alert('fessfe')"
          ></object>
        </div>
        <div style="padding-left: 200px" />
      </template>
      <template #item="{ item }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a
            v-if="item.root"
            v-ripple
            :href="href"
            class="flex align-items-center cursor-pointer px-3 py-2 overflow-hidden relative font-semibold text-lg uppercase"
            style="border-radius: 2rem"
            @click="navigate"
          >
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
          <a
            v-else
            :href="href"
            class="flex align-items-center p-3 cursor-pointer mb-2 gap-2"
            @click="navigate"
          >
            <!--<div
              class="inline-flex align-items-center justify-content-center border-circle w-3rem h-3rem image-cropper">
              <img :src="item.image" :alt="item.label" />
            </div>-->
            <span
              class="inline-flex align-items-center justify-content-center border-circle bg-primary w-3rem h-3rem"
            >
              <i :class="[item.icon, 'text-lg']"></i>
            </span>
            <span class="inline-flex flex-column gap-1">
              <span class="font-medium text-lg text-900">{{ item.label }}</span>
              <span class="white-space-nowrap">{{ item.subtext }}</span>
            </span>
          </a>
        </router-link>
        <a
          v-else
          v-ripple
          class="flex align-items-center cursor-pointer px-3 py-2 overflow-hidden relative font-semibold text-lg uppercase"
          style="border-radius: 2rem"
        >
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </template>
    </MegaMenu>
  </div>
</template>

<style scoped>
#title-icon {
  width: 10rem;
}

#menu-bg {
  width: 100vw;
  backdrop-filter: blur(30px);
  /*background: var(--surface-ground);*/
}

#menu {
  border: none;
  background: none;
  margin-top: 1rem;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
}

.image-cropper {
  width: 1rem;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}

img {
  display: inline;
  margin: 0 auto;
  height: 100%;
  width: auto;
}

.clickable {
  cursor: pointer;
}

object {
  width: 100%;
  pointer-events: none;
}
</style>
