<script lang="ts" setup>
import { ref } from 'vue'
import { usePrimeVue } from 'primevue/config'
import { useCookies } from 'vue3-cookies'
import { gregorianToJalali } from '@/scripts/jdf-converter'

const nowGregorianDate = new Date()
const PrimeVue = usePrimeVue()
const { cookies } = useCookies()
// const systemDefaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
const isCurrentThemeDark = cookies.get('darkMode') == '0x23FF41'

const jalaliCalendar = gregorianToJalali(
  nowGregorianDate.getFullYear(),
  nowGregorianDate.getMonth() + 1,
  nowGregorianDate.getDate()
)

const bestProducts = [
  {
    text: 'پاسخنامه',
    target: '/apps/AnswerSheet'
  },
  {
    text: 'پویا خوان',
    target: '/apps/PuyaKhan'
  },
  {
    text: 'مهد خاطره',
    target: '/websites/mahdekhatere'
  },
  {
    text: 'مرور کلمات',
    target: '/apps/WordReminder'
  }
]

const services = [
  {
    text: 'طراحی نرم افزار',
    target: '/services/application'
  },
  {
    text: 'طراحی وبسایت',
    target: '/services/website'
  },
  {
    text: 'طراحی گرافیک',
    target: '/services/graphics'
  },
  {
    text: 'پشتیبانی سایت',
    target: '/services/cloud'
  }
]

const refers = [
  {
    text: 'وبلاگ',
    target: '/blog'
  },
  {
    text: 'رهگیری خدمات',
    target: '/service-tracking'
  },
  {
    text: 'سؤالات متداول',
    target: '/faq'
  },
  {
    text: 'تماس با ما',
    target: '/contactus'
  },
  {
    text: 'درباره ما',
    target: '/about'
  },
  {
    text: 'حریم خصوصی',
    target: '/privacy'
  },
  {
    text: 'قوانین و مقررات',
    target: '/terms'
  }
]

const themeText = ref(isCurrentThemeDark ? 'حالت روز' : 'حالت شب')

function changeTheme() {
  const darkMode = cookies.get('darkMode')
  if (darkMode == '0x23FF41') {
    PrimeVue.changeTheme('aura-dark-blue', 'aura-light-blue', 'theme-link', () => {})
    cookies.set('darkMode', '0x00123F')
    themeText.value = 'حالت شب'
  } else {
    PrimeVue.changeTheme('aura-light-blue', 'aura-dark-blue', 'theme-link', () => {})
    cookies.set('darkMode', '0x23FF41')
    themeText.value = 'حالت روز'
  }
}
</script>

<template>
  <footer>
    <div class="container">
      <div id="container-margin" />
      <div id="sides">
        <div id="right-side">
          <div id="none-column" />
          <div id="slogan-layout">
            <h1 :class="['slogan', themeText == 'حالت روز' ? 'slogan-dark' : 'slogan-light']">
              صــالــتــک&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;خــلــق&nbsp;&nbsp;آیـــنــده&nbsp;&nbsp;هــوشــمـــنــد
            </h1>
            <p id="slogan-subtitle">گروه نرم افزاری صالتک</p>
          </div>
          <div id="icons-mobile-layout">
            <div id="none-column" />
            <div id="icons-mobile">
              <img
                id="samandehi-logo"
                alt="ساماندهی"
                onclick='window.open("https://logo.samandehi.ir/Verify.aspx?id=366761&p=xlaogvkagvkajyoegvkarfth", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")'
                referrerpolicy="origin"
                src="/logo-samandehi.png"
                style="cursor: pointer"
                title="برای مشاهده اعتبار، کلیک کنید."
              />
              <div style="margin-left: 2rem" />
              <a
                href="https://trustseal.enamad.ir/?id=334332&Code=wXzoBfS1fzJHph130V65"
                referrerpolicy="origin"
                target="_blank"
              >
                <img
                  id="enamad-logo"
                  :src="
                    themeText == 'حالت روز' ? '/logo-enamad-dark.png' : '/logo-enamad-light.png'
                  "
                  Code="wXzoBfS1fzJHph130V65"
                  alt="نماد الکترونیک (اینماد)"
                  referrerpolicy="origin"
                  title="برای مشاهده اعتبار، روی اینماد کلیک کنید."
                />
              </a>
            </div>
            <div id="none-column" />
          </div>
          <div id="sub-d">
            <div id="none-row" />
            <div id="best-products">
              <h5 class="title">محصولات&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
              <ul class="list-none list">
                <li v-for="item in bestProducts">
                  <div class="item">
                    <span class="material-symbols-rounded item-icon">arrow_left</span>
                    <router-link v-slot="{ href, navigate }" :to="item.target" custom>
                      <a :href="href" class="item-text" @click="navigate">{{ item.text }}</a>
                    </router-link>
                  </div>
                </li>
              </ul>
            </div>
            <div id="services">
              <h5 class="title">خدمات&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
              <ul class="list-none list">
                <li v-for="item in services">
                  <div class="item">
                    <span class="material-symbols-rounded item-icon">arrow_left</span>
                    <router-link v-slot="{ href, navigate }" :to="item.target" custom>
                      <a :href="href" class="item-text" @click="navigate">{{ item.text }}</a>
                    </router-link>
                  </div>
                </li>
              </ul>
            </div>
            <div id="refers">
              <ul class="list-none">
                <li>
                  <div class="refer-item">
                    <a class="refer-item-text clickable" @click="changeTheme">{{ themeText }}</a>
                  </div>
                </li>
                <li v-for="item in refers">
                  <div class="refer-item">
                    <router-link v-slot="{ href, navigate }" :to="item.target" custom>
                      <a :href="href" class="refer-item-text" @click="navigate">{{ item.text }}</a>
                    </router-link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div id="none-column" />
        </div>
        <div id="left-side">
          <div id="icons">
            <img
              id="samandehi-logo"
              alt="ساماندهی"
              onclick='window.open("https://logo.samandehi.ir/Verify.aspx?id=366761&p=xlaogvkagvkajyoegvkarfth", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")'
              referrerpolicy="origin"
              src="/logo-samandehi.png"
              style="cursor: pointer"
              title="برای مشاهده اعتبار، کلیک کنید."
            />
            <div style="margin-left: 2rem" />
            <a
              href="https://trustseal.enamad.ir/?id=334332&Code=wXzoBfS1fzJHph130V65"
              referrerpolicy="origin"
              target="_blank"
            >
              <img
                id="enamad-logo"
                :src="themeText == 'حالت روز' ? '/logo-enamad-dark.png' : '/logo-enamad-light.png'"
                Code="wXzoBfS1fzJHph130V65"
                alt="نماد الکترونیک (اینماد)"
                referrerpolicy="origin"
                title="برای مشاهده اعتبار، روی اینماد کلیک کنید."
              />
            </a>
          </div>
          <div id="contact">
            <div id="mobile-d">
              <div id="refers-mobile">
                <ul class="list-none">
                  <li>
                    <div class="refer-item">
                      <a class="refer-item-text clickable" @click="changeTheme">{{ themeText }}</a>
                    </div>
                  </li>
                  <li v-for="item in refers">
                    <div class="refer-item">
                      <router-link v-slot="{ href, navigate }" :to="item.target" custom>
                        <a :href="href" class="refer-item-text" @click="navigate">{{
                          item.text
                        }}</a>
                      </router-link>
                    </div>
                  </li>
                </ul>
              </div>
              <div id="contact-components">
                <p class="contact-layout">
                  <span class="material-symbols-rounded contact-icon">pin_drop</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a class="contact-text" href="https://nshn.ir/Qb_enhVGWQuO"
                    >استان یزد، یزد، امام شهر، بلوار ولیعصر (عج)، بین ولیعصر 49 و 49.5</a
                  >
                </p>
                <br />
                <p class="contact-layout">
                  <span class="material-symbols-rounded contact-icon" style="transform: scaleX(-1)"
                    >phone</span
                  >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a class="contact-text" href="tel:03535247787"
                    >7787&nbsp;&nbsp;&nbsp;&nbsp;3524&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;035</a
                  >
                </p>
                <br />
                <p class="contact-layout">
                  <span class="material-symbols-rounded contact-icon">mail</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a class="contact-text" href="mailto:saltech.co.ir@gmail.com"
                    >saltech.co.ir@gmail.com</a
                  >
                </p>
              </div>
            </div>
            <div id="contact-social">
              <div
                class="social-item clickable"
                onclick="window.location.href = 'https://t.me/SalTech'"
              >
                <object data="/social_telegram.svg" />
              </div>
              <div
                class="social-item clickable"
                onclick="window.location.href = 'https://instagram.com/saltechco'"
              >
                <object data="/social_instagram.svg" />
              </div>
              <div
                class="social-item clickable"
                onclick="window.location.href = 'https://eitaa.ir/SalTech'"
              >
                <object data="/social_eitaa.svg" />
              </div>
              <div
                class="social-item clickable"
                onclick="window.location.href = 'https://www.youtube.com/channel/UCB8GDAt_8wRsC3NJFL4JoqA'"
              >
                <object data="/social_youtube.svg" />
              </div>
              <div
                class="social-item clickable"
                onclick="window.location.href = 'https://www.aparat.com/saltechco'"
              >
                <object data="/social_aparat.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="copyright">
      <p id="copyright-text">
        تمامی حقوق این سایت برای صالتک محفوظ است.&nbsp;&nbsp;©️&nbsp;&nbsp;{{ jalaliCalendar[0] }}
      </p>
    </div>
  </footer>
</template>

<style scoped>
@import '@/styles/responsive/footer.css';

* {
  direction: rtl;
  box-sizing: border-box;
}

.container {
  background: var(--surface-200);
  width: 100vw;
  margin: 0;
  padding: 0;
  flex-wrap: nowrap;
  display: flex;
  flex-direction: column;
}

#container-margin {
  margin: 1rem 0 0;
}

#sides {
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  display: flex;
}

#right-side {
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
}

#left-side {
  flex: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
}

#sub-d {
  flex: 2;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

#mobile-d {
  display: flex;
  align-items: center;
  justify-content: center;
}

#none-row {
  flex: 0.5;
}

#none-column {
  margin-top: 2rem;
}

#best-products,
#services,
#refers {
  flex: 2;
  min-height: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
}

#refers-mobile {
  display: none;
}

#slogan-layout {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.slogan-light {
  color: var(--primary-800);
}

.slogan-dark {
  color: var(--primary-200);
}

.slogan {
  font-family: 'Peyda Black', sans-serif !important;
  margin: 0 3rem;
  font-size: clamp(1rem, 2vw, 9rem);
}

#slogan-subtitle {
  font-family: 'Peyda Medium', sans-serif !important;
  margin: 1rem 3rem 0;
  font-size: clamp(1rem, 1.2vw, 9rem);
}

#icons-mobile,
#icons {
  width: 100%;
  flex: 1;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 2vw;
}

#icons-mobile-layout {
  display: none;
}

#samandehi-logo {
  width: clamp(1rem, 50vw, 8rem);
}

#enamad-logo {
  width: clamp(1rem, 40vw, 8rem);
}

.title {
  padding-bottom: 0.3rem;
  font-family: 'Peyda Bold', sans-serif !important;
  font-size: clamp(1rem, 1.5vw, 2rem);
  margin-bottom: 1.2rem;
  display: inline-block;
  border-bottom: 3px solid var(--primary-400);
}

.list {
  margin: 1rem 0 0;
  padding: 0;
  height: 100%;
}

.item {
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  align-content: flex-end;
  justify-content: flex-end;
  flex-direction: row;
  margin-right: 1rem;
  margin-bottom: 1.5rem;
}

.item-text {
  font-family: 'Peyda Medium', sans-serif !important;
  font-size: clamp(1rem, 1.4vw, 2rem);
  transition: color 0.25s;
  -webkit-transition: color 0.25s;
}

.item-icon {
  font-size: 1.6vw;
  color: var(--primary-700);
}

.refer-item {
  margin: 1rem 0;
}

.refer-item-text {
  font-family: 'Peyda Medium', sans-serif !important;
  font-size: clamp(1rem, 1.4vw, 2rem);
  transition: color 0.25s;
  -webkit-transition: color 0.25s;
}

#contact {
  width: 100%;
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 1rem 0 0;
}

.contact-text {
  font-family: 'Peyda Medium', sans-serif;
  font-size: clamp(1rem, 1.25vw, 5rem);
  transition: color 0.25s;
  -webkit-transition: color 0.25s;
}

.contact-icon {
  transition: color 0.25s !important;
  -webkit-transition: color 0.25s !important;
}

#contact-components {
  flex: 2;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1.75rem;
}

.contact-layout {
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  margin: 0 1vw;
}

#contact-social {
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  justify-content: center;
  flex-direction: row;
  flex: 1;
  margin: 1rem 0 2rem;
}

.social-item {
  opacity: 40%;
  width: 2rem;
  margin: 0 1rem;
  scale: 1;
  transition:
    margin 0.1s,
    scale 0.1s;
  -webkit-transition:
    margin 0.1s,
    scale 0.1s;
}

.refer-item-text:hover {
  color: var(--primary-600);
}

.item-text:hover {
  color: var(--primary-600);
}

.contact-layout:hover .contact-text {
  color: var(--primary-600);
}

.contact-layout:hover .contact-icon {
  color: var(--primary-600) !important;
}

.social-item:hover {
  margin: 0 1.4rem;
  scale: 1.2;
  filter: invert(40%) sepia(100%) saturate(1591%) hue-rotate(201deg) brightness(100%) contrast(100%);
}

.material-symbols-rounded {
  font-variation-settings:
    'FILL' 0,
    'wght' 650,
    'GRAD' 0,
    'opsz' 100;
  font-size: 1.5em;
}

#copyright {
  background: var(--surface-300);
  height: 8vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
}

#copyright-text {
  font-family: 'Peyda Medium', sans-serif !important;
}

@keyframes enter-hover-margin {
  0% {
    margin: 0 0.5rem;
  }

  100% {
    margin: 0 1rem;
  }
}

@keyframes exit-hover-margin {
  0% {
    margin: 0 1rem;
  }

  100% {
    margin: 0 0.5rem;
  }
}

@keyframes enter-hover-scale {
  0% {
    scale: 0.8;
  }

  100% {
    scale: 1;
  }
}

@keyframes exit-hover-scale {
  0% {
    scale: 1;
  }

  100% {
    scale: 0.8;
  }
}
</style>
