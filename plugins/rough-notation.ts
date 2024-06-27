import VueRoughNotation from "vue-rough-notation";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueRoughNotation);
});
