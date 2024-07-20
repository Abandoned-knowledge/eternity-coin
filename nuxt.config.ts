// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  css: ["~/assets/scss/tailwind.scss", "~/assets/scss/main.scss"],

  components: {
    global: true,
    dirs: ["~/shared/icon/", "~/shared/components", "~/components"],
  },

  serverDir: "~/server/",

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
