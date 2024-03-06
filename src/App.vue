<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppBar from '@/components/AppBar.vue'
</script>

<template>
  <AppBar style="position: fixed; top: 0; right: 0; z-index: 1000" />
  <RouterView style="position: absolute; top: 0; right: 0" />
</template>

<style scoped></style>
