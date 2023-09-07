<script setup lang="ts">

const { xs } = useDisplay()
</script>

<template>
  <RouterLink to="/">
    <span class="name-logo" :style="{ fontSize: `${xs ? '23px' : '27px'}` }">CR</span>
  </RouterLink>
</template>

<style lang="scss" scoped>
.name-logo {
  font-family: 'Space Grotesk' !important;
  font-weight: 900;
  font-variation-settings: 'wght' 900;
  background-image: linear-gradient(43deg, #C850C0 0%, rgb(100, 255, 218) 46%, #FFCC70 100%);
  background-clip: border-box;
  -webkit-background-clip: text;
  color: transparent;
  position: relative;
  transition: background-color 0.3s ease;
}

a {
  text-decoration: none;
}
</style>