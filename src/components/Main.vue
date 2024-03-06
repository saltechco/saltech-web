<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: 'Company',
    root: true,
    items: [
      [
        {
          items: [
            { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item' },
            { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item' },
            { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item' }
          ]
        }
      ],
      [
        {
          items: [
            { label: 'Solutions', icon: 'pi pi-shield', subtext: 'Subtext of item' },
            { label: 'Faq', icon: 'pi pi-question', subtext: 'Subtext of item' },
            { label: 'Library', icon: 'pi pi-search', subtext: 'Subtext of item' }
          ]
        }
      ],
      [
        {
          items: [
            { label: 'Community', icon: 'pi pi-comments', subtext: 'Subtext of item' },
            { label: 'Rewards', icon: 'pi pi-star', subtext: 'Subtext of item' },
            { label: 'Investors', icon: 'pi pi-globe', subtext: 'Subtext of item' }
          ]
        }
      ],
      [
        {
          items: [{ image: 'https://primefaces.org/cdn/primevue/images/uikit/uikit-system.png', label: 'GET STARTED', subtext: 'Build spectacular apps in no time.' }]
        }
      ]
    ]
  },
  {
    label: 'Resources',
    root: true
  },
  {
    label: 'Contact',
    root: true
  }
]);
</script>

<template>
  <MegaMenu :model="items" class="p-3" style="border: none; background: none; backdrop-filter: blur(25px)">
    <template #start>
      <object data="/src/assets/row-logo.svg" id="title-icon" class="h-3rem"> </object>
      <div style="margin-left: 10rem"/>
    </template>
    <template #item="{ item }">
      <div>
        <a v-if="item.root" v-ripple class="flex align-items-center cursor-pointer px-3 py-2 overflow-hidden relative font-semibold text-lg uppercase" style="border-radius: 2rem">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
        <a v-else-if="!item.image" class="flex align-items-center p-3 cursor-pointer mb-2 gap-2">
                    <span class="inline-flex align-items-center justify-content-center border-circle bg-primary w-3rem h-3rem">
                        <i :class="[item.icon, 'text-lg']"></i>
                    </span>
          <span class="inline-flex flex-column gap-1">
                        <span class="font-medium text-lg text-900">{{ item.label }}</span>
                        <span class="white-space-nowrap">{{ item.subtext }}</span>
                    </span>
        </a>
        <div v-else class="flex flex-column align-items-start gap-3">
          <img alt="megamenu-demo" :src="item.image" class="w-full" />
          <span>{{ item.subtext }}</span>
          <Button :label="item.label" outlined />
        </div>
      </div>
    </template>
  </MegaMenu>
</template>

<style scoped>
#title-icon {
  width: 10rem;
}
</style>
