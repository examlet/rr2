import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  dev: true,
  ssr: true,
  srcDir: 'src/',
  typescript: {
    shim: false,
  },
  meta: {
    title: "QuickSales",
    meta: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=0",
      }
    ],
    link: [],
    script: [],
    style: []
  },
  css: [
    '@/assets/css/index.css'
  ],
  buildModules: [
    "@unocss/nuxt",
  ],
  unocss: {
    uno: true,
    attributify: true,
    preflight: true,
    icons: {
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle'
      }
    },
    shortcuts: [],
    rules: [],
  },
})
