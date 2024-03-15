<script lang="ts" setup>
import { RouterView } from 'vue-router'
import AppBar from '@/components/AppBar.vue'
import { usePrimeVue } from 'primevue/config'
import { useCookies } from 'vue3-cookies'
import { onMounted } from 'vue'

const PrimeVue = usePrimeVue()
const systemSettingDark = window.matchMedia('(prefers-color-scheme: dark)')
const { cookies } = useCookies()

onMounted(() => {
  const darkMode = cookies.get('darkMode')
  // const systemDefaultTheme = systemSettingDark.matches
  const systemDefaultTheme = false
  if (systemDefaultTheme || darkMode == '0x23FF41') {
    PrimeVue.changeTheme('aura-light-blue', 'aura-dark-blue', 'theme-link', () => {})
  } else {
    PrimeVue.changeTheme('aura-dark-blue', 'aura-light-blue', 'theme-link', () => {})
  }
})
</script>

<template>
  <AppBar />
  <RouterView />
</template>

<style scoped>
Footer {
  margin: 0;
  padding: 0;
}
</style>
