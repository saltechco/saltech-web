<script setup lang="ts">
import { onMounted, ref } from 'vue'

const scrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

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
              subtext: 'لحظاتی راز و نیاز با خدا',
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
              route: '/websites/mahdekhatere',
              icon: 'pi pi-desktop'
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
              route: '/apps/WordReminder',
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
    items: [
      [
        {
          items: [
            {
              label: 'طراحی اپلیکیشن',
              subtext: 'طراحی انواع اپلیکیشن ویندوز و موبایل',
              route: '/services/application',
              icon: 'pi pi-th-large'
            },
            {
              label: 'طراحی وبسایت',
              subtext: 'طراحی انواع وبسایت (وردپرس ، خام و ...)',
              route: '/services/website',
              icon: 'pi pi-desktop'
            },
            {
              label: 'طراحی گرافیک',
              subtext: 'طراحی انواع طرح های گرافیکی (بنر ، پوستر و ...)',
              route: '/services/graphics',
              icon: 'pi pi-palette'
            }
          ]
        }
      ],
      [
        {
          items: [
            {
              label: 'طراحی سخت افزار',
              subtext: 'طراحی انواع دستگاه های الکترونیکی',
              route: '/services/hardware',
              icon: 'pi pi-box'
            },
            {
              label: 'پشتیبانی سایت',
              subtext: 'خدمات بهینه سازی SEO ، هاستینگ و ...',
              route: '/services/cloud',
              icon: 'pi pi-cloud'
            },
            {
              label: 'آموزش برنامه نویسی',
              subtext: 'آموزش برنامه نویسی و طراحی نرم افزار به شیوۀ گیرا به همه',
              route: '/services/mentoring',
              icon: 'pi pi-code'
            }
          ]
        }
      ]
    ]
  },
  {
    label: 'ارتباط با ما',
    root: true,
    route: '/contactus'
  }
])

function handleScroll() {
  scrolled.value = window.scrollY >= 100
}
</script>

<template>
  <header id="menu-bg" :class="scrolled ? 'shadow-3' : ''">
    <MegaMenu id="menu" :model="items" class="p-3 w-full">
      <template #start>
        <div class="clickable" onclick='window.location.href = "/"'>
          <img
            id="title-icon-large"
            class="h-3rem"
            src="https://saltech.ir/pictures/row-logo.svg"
            alt="logo"
          />
          <img
            id="title-icon-small"
            class="h-3rem"
            src="https://saltech.ir/pictures/logo.svg"
            alt="logo"
          />
        </div>
        <div id="title-spacer" />
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
  </header>
</template>

<style scoped>
@media (min-width: 960px) {
  #menu {
    margin: 0.5rem 0.8rem;
  }

  #title-icon-large {
    width: 10rem;
    display: block;
  }

  #title-icon-small {
    display: none;
  }

  #title-spacer {
    padding-left: 200px;
  }
}

@media (max-width: 960px) {
  #menu {
    margin: 0.5rem -1rem;
  }

  #title-icon-large {
    display: none;
  }

  #title-icon-small {
    width: 5rem;
    scale: 0.925;
    display: block;
  }

  #title-spacer {
    padding-left: 100px;
  }
}

#menu-bg {
  width: 100vw;
  background: var(--surface-ground);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
}

#menu {
  border: none;
  background: none;
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
</style>
