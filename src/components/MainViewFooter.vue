<script lang="ts" setup>
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
    text: 'مرور کلمات',
    target: '/apps/WordReminder'
  },
  {
    text: 'مهد خاطره',
    target: '/websites/AnswerSheet'
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
    target: '/services/support'
  }
]

const refers = [
  {
    text: 'وبلاگ',
    target: '/blog'
  },
  {
    text: 'مشتریان',
    target: '/customers'
  },
  {
    text: 'سؤالات متداول',
    target: '/faq'
  },
  {
    text: 'تماس با ما',
    target: '/contact'
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
</script>

<template>
  <div id="container">
    <div id="sides">
      <div id="right-side">
        <div id="slogan-layout">
          <h1 id="slogan">
            صــالــتــک&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;خــلــق&nbsp;&nbsp;آیـــنــده&nbsp;&nbsp;هــوشــمـــنــد
          </h1>
        </div>
        <div id="sub-d">
          <div id="best-products" style="padding-right: 7rem">
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
      </div>
      <div id="left-side">
        <div id="icons">
          <img
            id="rgvjfukzfukzjzpefukzjxlz"
            alt="ساماندهی"
            onclick='window.open("https://logo.samandehi.ir/Verify.aspx?id=366761&p=xlaogvkagvkajyoegvkarfth", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")'
            referrerpolicy="origin"
            src="https://logo.samandehi.ir/logo.aspx?id=366761&p=qftiwlbqwlbqyndtwlbqnbpd"
            style="cursor: pointer"
            title="برای مشاهده اعتبار، روی اینماد کلیک کنید."
          />
          <div style="margin-left: 2rem" />
          <a
            href="https://trustseal.enamad.ir/?id=334332&Code=wXzoBfS1fzJHph130V65"
            referrerpolicy="origin"
            target="_blank"
          >
            <img
              id="enamad-logo"
              Code="wXzoBfS1fzJHph130V65"
              alt="نماد الکترونیک (اینماد)"
              referrerpolicy="origin"
              src="https://trustseal.enamad.ir/logo.aspx?id=334332&Code=wXzoBfS1fzJHph130V65"
              title="برای مشاهده اعتبار، روی اینماد کلیک کنید."
            />
          </a>
        </div>
        <div id="contact">
          <div style="margin-top: -1rem">
            <p class="contact-layout">
              <span class="material-symbols-rounded contact-icon">pin_drop</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://maps.app.goo.gl/N8kE4AvjEThL4cr48" class="contact-text"
                >یزد، امام شهر، میدان انقلاب، بلوار ولیعصر،<br />بعد از ایستگاه دوم اتوبوس</a
              >
            </p>
            <br />
            <p class="contact-layout">
              <span class="material-symbols-rounded contact-icon" style="transform: scaleX(-1)"
                >phone</span
              >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="tel:03535247787" class="contact-text"
                >7787&nbsp;&nbsp;&nbsp;&nbsp;3524&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;035</a
              >
            </p>
            <br />
            <p class="contact-layout">
              <span class="material-symbols-rounded contact-icon">mail</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="mailto:saltech.co.ir@gmail.com" class="contact-text"
                >saltech.co.ir@gmail.com</a
              >
            </p>
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
              <object data="/social_eitaa.svg" style="width: 2.6rem" />
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
    <div id="copyright">
      <p id="copyright-text">
        تمامی حقوق این سایت برای صالتک محفوظ است.&nbsp;&nbsp;©️&nbsp;&nbsp;1402
      </p>
    </div>
  </div>
</template>

<style scoped>
* {
  direction: rtl;
  box-sizing: border-box;
}

#container {
  background: var(--surface-200);
  height: 100%;
  width: 100vw;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
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

#sides {
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  display: flex;
}

#right-side {
  height: 70vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  width: 65%;
}

#left-side {
  height: 70vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  width: 35%;
}

#icons {
  width: 100%;
  height: 50%;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  padding-left: 7vw;
}

#contact {
  width: 100%;
  height: 50%;
}

#slogan-layout {
  width: 100%;
  height: 25%;
}

#sub-d {
  width: 100%;
  height: 75%;
  display: flex;
  flex-wrap: wrap;
}

#best-products,
#services,
#refers {
  width: 33.33%;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  padding-right: 4rem;
}

#slogan {
  font-family: 'Peyda Black', sans-serif !important;
  margin: 3.5rem 3rem;
  color: var(--primary-800);
  font-size: 2.5vw;
}

.title {
  padding-bottom: 0.3rem;
  font-family: 'Peyda Bold', sans-serif !important;
  font-size: 1.5vw;
  margin-bottom: 1.2rem;
  display: inline-block;
  border-bottom: 3px solid var(--primary-400);
}

.list {
  margin: 0;
  padding: 0;
  height: 100%;
}

.item {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-end;
  justify-content: flex-end;
  flex-direction: row;
  margin-right: 1rem;
  height: 3.5vw;
}

.item-text {
  font-family: 'Peyda Medium', sans-serif !important;
  font-size: 1.4vw;
  transition: color 0.25s;
  -webkit-transition: color 0.25s;
}

.item-icon {
  font-size: 1.6vw;
  color: var(--primary-700);
}

.refer-item {
  height: 3vw;
}

.refer-item-text {
  font-family: 'Peyda Medium', sans-serif !important;
  font-size: 1.35vw;
  transition: color 0.25s;
  -webkit-transition: color 0.25s;
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

.material-symbols-rounded {
  font-variation-settings:
    'FILL' 0,
    'wght' 500,
    'GRAD' 0,
    'opsz' 24;
}

.contact-text {
  font-family: 'Peyda Medium', sans-serif;
  font-size: 1.2vw;
  transition: color 0.25s;
  -webkit-transition: color 0.25s;
}

.contact-icon {
  transition: color 0.25s !important;
  -webkit-transition: color 0.25s !important;
}

.contact-layout {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-end;
  justify-content: flex-end;
  flex-direction: row;
  margin: 0 1rem 1rem;
}

#contact-social {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-end;
  justify-content: flex-end;
  flex-direction: row;
  scale: 0.8;
  margin: 0.5rem 2rem 1rem;
}

.social-item {
  opacity: 40%;
  width: 3vw;
  margin: 0 1rem;
  scale: 1;
  transition:
    margin 0.1s,
    scale 0.1s;
  -webkit-transition:
    margin 0.1s,
    scale 0.1s;
}

.social-item:hover {
  margin: 0 1.4rem;
  scale: 1.2;
  filter: invert(40%) sepia(100%) saturate(1591%) hue-rotate(201deg) brightness(100%) contrast(100%);
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
