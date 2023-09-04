<script setup lang="ts">
// stores
import { useAppStore } from '@/store/app';

// variables
const appStore = useAppStore()
const theme = useTheme()
const { smAndDown } = useDisplay()

// computed refs
const isDark = computed({
  get() {
    return appStore.dark
  },
  set(val) {
    appStore.dark = val
  }
})

// functions
const toggleTheme = () => {
  isDark.value = !isDark.value
  theme.global.name.value = isDark.value ? 'dark' : 'light'
}
</script>

<template>
  <TheHeader :is-dark="isDark" :sm-and-down="smAndDown" @toggle-theme="toggleTheme" />
  <VMain>
    <RouterView />
  </VMain>
  <TheFooter />
  <div class="socials d-none d-md-flex">
    <VBtn href="https://github.com/zedjarvis" target="_blank" color="primary" variant="plain" icon>
      <VIcon>mdi-github</VIcon>
      <VTooltip activator="parent" location="right">Checkout my Github</VTooltip>
    </VBtn>
    <VBtn href="https://www.linkedin.com/in/cedrouseroll-omondi-44b119252/" target="_blank" color="primary"
      variant="plain" icon>
      <VIcon>mdi-linkedin</VIcon>
      <VTooltip activator="parent" location="right">View my Linkedin</VTooltip>
    </VBtn>
    <VBtn color="primary" variant="plain" icon>
      <VIcon>mdi-instagram</VIcon>
      <VTooltip activator="parent" location="right">See what's on Instagram</VTooltip>
    </VBtn>
    <VBtn href="https://twitter.com/CedrouseR" target="_blank" color="primary" variant="plain" icon>
      <VIcon>mdi-twitter</VIcon>
      <VTooltip activator="parent" location="right">It's twitter</VTooltip>
    </VBtn>
    <div class="line-div">
      <div class="line"></div>
    </div>
  </div>
  <div class="contact d-none d-md-flex">
    <div class="email-div">
      <a href="mailto:omondicedo@gmail.com">omondicedo@gmail.com</a>
    </div>
  </div>
</template>

<route lang="json">
  
</route>

<style lang="scss" scoped>
.socials {
  position: fixed;
  bottom: 0px;
  left: 30px;
  right: auto;
  height: 70%;
  display: flex;
  flex-direction: column;
  color: rgb(var(--v-theme-primary));
  line-height: 1.3;
  font-size: 20px;
  font-family: 'Space Grotesk';

  .line-div {
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    writing-mode: vertical-rl;

    .line {
      display: inline-block;
      text-decoration: none;
      color: inherit;
      position: relative;
      vertical-align: center;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
      cursor: pointer;

      &::after {
        content: "";
        width: 1px;
        height: 50vh;
        position: absolute;
        right: -20%;
        margin-top: 20px;
        background-color: rgb(var(--v-theme-primary));
      }
    }
  }
}

.contact {
  width: 30px;
  position: fixed;
  bottom: 0px;
  left: auto;
  right: 30px;
  height: 70%;
  display: flex;
  flex-direction: column;
  color: rgb(var(--v-theme-primary));
  line-height: 1.3;
  font-size: 20px;
  font-family: 'Space Grotesk';

  .email-div {
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    writing-mode: vertical-rl;


    a {
      display: inline-block;
      text-decoration: none;
      color: inherit;
      position: relative;
      vertical-align: center;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
      cursor: pointer;

      &::after {
        content: "";
        width: 1px;
        height: 50vh;
        position: absolute;
        left: 45%;
        margin-top: 20px;
        background-color: rgb(var(--v-theme-primary))
      }
    }

  }
}
</style>
