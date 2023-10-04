<script setup lang="ts">
useHead({
  titleTemplate: '%s ← Cedrouseroll',
  bodyAttrs: {
    class: 'antialiased font-space text-slate-400 leading-relaxed bg-[#002937] selection:text-teal-900 selection:bg-teal-300'
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <UNotifications />
</template>
