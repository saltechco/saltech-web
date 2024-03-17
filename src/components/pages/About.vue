<script lang="ts" setup>
import md5 from 'md5'
import { computed, ref } from 'vue'

const employees = ref([
  {
    name: 'محمد صالح مسعودی مقدم',
    email: 'm.smasoudi72@gmail.com',
    avatar: '',
    post: 'مدیر عامل ، توسعه دهنده اندروید و سمت سرور'
  },
  {
    name: 'ابوالفضل عسکری',
    email: 'abolfazl.askari2007@gmail.com',
    avatar: '',
    post: 'مدیر فنی ، مدیر اداری و طراح گرافیک'
  },
  {
    name: 'محمد توکلی',
    email: 'tavakolimohammad689@gmail.com',
    avatar: '',
    post: 'مدیر مالی ، کارشناس امنیت و توسعه دهنده سمت سرور'
  },
  {
    name: 'محمد رضا شفیع',
    email: 'm1382reza1382@gmail.com',
    avatar: '',
    post: 'مدیر فجازی ، ادیتور ، توسعه دهنده فرانت اند'
  },
  {
    name: 'محمد رضا قنبری',
    email: 'mhmdrdaqnbry80@gmail.com',
    avatar: '',
    post: 'کارشناس دیجیتال مارکتینگ، دیتاساینتس و هوش مصنوعی'
  },
  {
    name: 'محمد جعفری',
    email: 'jafari.robot@gmail.com',
    avatar: '',
    post: 'مدیر منابع سخت افزاری ، توسعه دهنده سیستم های تعبیه شده'
  }
])

const setEmployeesAvatar = computed(() => {
  return employees.value.map((employee) => {
    if (!employee.avatar) {
      const hash = md5(employee.email.trim().toLowerCase())
      employee.avatar = `https://www.gravatar.com/avatar/${hash}`
    }
    return employee
  })
})

employees.value = setEmployeesAvatar.value
</script>

<template>
  <div class="container">
    <h1 class="title">دربـــــاره مــــــا</h1>
    <p class="subtitle">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ما کنار همیم! ❤️</p>
    <p class="description">
      ما در این راه پر فراز و نشیب و سخت، برای رفع نیاز های شما عزیزان، دستیابی به جدیدترین تکنولوژی
      های روز دنیا<br />و بهره گیری از آنها در راستای بهبود خدماتمان، تمامی تلاشمان را می کنیم.<br />ما
      در کنار هم، پر قدرت در ادامه این راه هستیم.
    </p>
    <div class="spacer" />
    <div id="employees">
      <Card v-for="employee in employees" class="employee-card">
        <template #content>
          <div class="employee-container">
            <Avatar
              :image="employee.avatar"
              class="flex align-items-center justify-content-center mr-2 employee-avatar"
              shape="circle"
              size="xlarge"
            />
            <h4 class="employee-name">{{ employee.name }}</h4>
            <p class="employee-post">{{ employee.post }}</p>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
* {
  direction: rtl;
}

.container {
  width: 100%;
  padding: 4rem 2rem;
  text-align: center;
}

.title {
  font-family: 'Peyda Black', sans-serif;
  font-size: clamp(1rem, 3vw, 2.25rem);
}

.subtitle {
  font-family: 'Peyda Bold', sans-serif;
  color: var(--text-color-secondary);
  opacity: 0.75;
  font-size: clamp(1rem, 1.7vw, 2rem);
  line-height: 0.8;
}

.description {
  font-family: 'Peyda Medium', sans-serif;
  font-size: clamp(1rem, 1.4vw, 2rem);
  margin: 4rem 2.5rem 0;
}

#employees {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
}

.employee-card {
  overflow: hidden;
  margin: 2rem;
  background: var(--primary-50);
  border-radius: 25px;
  text-align: center;
}

.employee-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.employee-name {
  font-family: 'Peyda Bold', sans-serif;
  font-size: clamp(1rem, 1.25vw, 2rem);
}
</style>
