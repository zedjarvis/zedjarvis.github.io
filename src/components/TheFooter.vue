<script setup lang="ts"></script>

<template>
  <VFooter :elevation="24" class="d-flex flex-column text-center mt-16 mx-md-16 mb-md-5">
    <a href="tel:0795086389" class="footer-link">+254 791 256 490</a>
    <a href="mailto:omondicedo@gmail.com" class="footer-link">omondicedo@gmail.com</a>
    <p>&copy; {{ new Date().getFullYear() }} Cedrouseroll Omondi. All rights reserved.</p>
  </VFooter>
</template>

<style lang="scss" scoped>
.footer-link {
  color: rgb(var(--v-theme-primary));
  text-decoration: none;
  font-family: 'Space Grotesk';
}
</style>
