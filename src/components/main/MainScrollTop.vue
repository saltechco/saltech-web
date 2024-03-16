<script setup lang="ts">

</script>

<template>
  <ScrollTop
    class="scroll-top"
    :threshold="500"
    :pt="{
        root: 'w-3rem h-3rem border-round-sm bg-primary',
        icon: {
          class: 'text-base'
        }
      }"
    icon="pi pi-arrow-up"
  />
</template>
