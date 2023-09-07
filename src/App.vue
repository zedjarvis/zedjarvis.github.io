<script setup lang="ts">

// stores
import { useAppStore } from '@/store/app';

// variables
const appStore = useAppStore()
const theme = useTheme()


// hooks
onMounted(() => {
  theme.global.name.value = appStore.dark ? 'dark' : 'light'
})

// seo
useHead({
  // Titles
  titleTemplate: '%s %seperator %siteName',
  // Template params
  templateParams: { seperator: '←', siteName: 'Cedrouseroll' },
})
</script>


<template>
  <VApp>
    <RouterView />
  </VApp>
</template>
