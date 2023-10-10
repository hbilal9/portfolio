import SvgIcon from '@jamescoyle/vue-icon';
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('svg-icon', SvgIcon)
});