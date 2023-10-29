<script setup lang="ts">
useHead({
  title: 'Ced\'s Resume'
})

definePageMeta({
  layout: 'blank',
})

const { width, height } = useWindowSize()
</script>

<template>
  <div>
    <div class="h-16 py-5 px-28">
      <NuxtLink to="/" class="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300">
        <UIcon name="i-carbon-arrow-left" class="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" />
        Cedrouseroll Omondi
      </NuxtLink>
    </div>
    <div class="w-full h-full d-flex justify-center items-center">
      <embed class="mx-auto" src="/Cedrouseroll_Omondi_Resume.pdf" :width="width * 0.85" :height="height * 0.9" />
    </div>
  </div>
</template>