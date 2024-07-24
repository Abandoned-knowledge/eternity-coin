// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  
  modules: ["@prisma/nuxt"],

  ssr: true,
  srcDir: "./src",

  dir: {
    layouts: "~/app/layouts/",
  },

  css: ["~/app/scss/tailwind.scss", "~/app/scss/main.scss"],

  components: {
    global: true,
    dirs: ["~/shared/icon/", "~/shared/components", "~/components"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
