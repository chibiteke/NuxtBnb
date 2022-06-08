export default {
  components: true,
  head: {
    titleTemplate: 'Mastering Nuxt: %s',
    htmlAttrs: {
      lang: 'ja',
    },
    bodyAttrs: {
      class: ['my-style'],
    },
    meta: [
      {
        charaset: 'utf-8',
      },
    ],
  },
  router: {
    prefetchLinks: false,
  },
  publicRuntimeConfig: {
    googleApiKey: process.env.GOOGLE_API_KEY,
  },
}
