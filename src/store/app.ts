// Utilities
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useAppStore = defineStore('app', {
  state: () => ({
    dark: useLocalStorage('dark', true),
  }),
})
