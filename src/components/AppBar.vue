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
              icon: 'pi pi-android',
              subtext: 'شبیه ساز آزمون واقعی',
              route: '/apps/AnswerSheet',
              image: 'https://s.cafebazaar.ir/images/upload/icons/ir.saltech.answersheet-2267dd10-4129-4532-83c5-3742cddc000c.png'
            },
            {
              label: 'پویا خوان',
              icon: 'pi pi-android',
              subtext: 'دسترسی سریع به رمز پویا',
              route: '/apps/PuyaKhan',
              image: 'https://s.cafebazaar.ir/images/upload/icons/ir.saltech.puyakhan-041fba96-ae2b-425b-b825-7642af97a3ea.png'
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
  <MegaMenu id="menu" :model="items" class="p-3 w-full">
    <template #start>
      <div class='clickable' onclick='window.location.href = "/"'>
        <object id="title-icon" class="h-3rem" data="/src/assets/images/row-logo.svg" onclick="alert('fessfe')">
        </object>
      </div>
      <div style="padding-left: 200px" />
    </template>
    <template #item="{ item }">
      <div>
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-if="item.root" v-ripple
             :href="href"
             class="flex align-items-center cursor-pointer px-3 py-2 overflow-hidden relative font-semibold text-lg uppercase"
             style="border-radius: 2rem" @click="navigate">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
          <a v-else-if="item.image" :href="href"
             class="flex align-items-center p-3 cursor-pointer mb-2 gap-2" @click="navigate">
                    <span
                      class="inline-flex align-items-center justify-content-center image-cropper w-3rem h-3rem">
                        <img :alt="'menuitem-' + item.label" :src="item.image" />
                    </span>
            <span class="inline-flex flex-column gap-1">
                        <span class="font-medium text-lg text-900">{{ item.label }}</span>
                        <span class="white-space-nowrap">{{ item.subtext }}</span>
                    </span>
          </a>
        </router-link>
        <a v-else v-ripple
           :href="href"
           class="flex align-items-center cursor-pointer px-3 py-2 overflow-hidden relative font-semibold text-lg uppercase"
           style="border-radius: 2rem" @click="navigate">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </div>
    </template>
  </MegaMenu>
</template>

<style scoped>
#title-icon {
  width: 10rem;
}

#menu {
  width: fit-content;
  border: none;
  background: none;
  backdrop-filter: blur(25px);
}

.image-cropper {
  width: 100px;
  height: 100px;
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
