// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1', 
      title: 'Portfolio',
      htmlAttrs: { lang: 'en' },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Portfolio'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Portfolio'
        },
      ],
      script: [],
      link: [
          {
              rel: 'icon',
              type: 'image/png',
              href: ''
          }
      ],
      style: [],
    }
  },
  css: [ '@/assets/css/tailwind.css' ],
  // extends: [ 'nuxt-seo-kit' ],
  //   runtimeConfig: {
  //   public: {
  //     siteUrl:  'https://exmaple.com',
  //     siteName: 'portfolio',
  //     siteDescription: 'portfolio',
  //     language: 'en',
  //   }
  // },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
