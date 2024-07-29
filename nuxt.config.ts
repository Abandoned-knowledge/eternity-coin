// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
    },
  },

  devtools: { enabled: true },

  modules: ["@prisma/nuxt", "@pinia/nuxt"],
  pinia: {
    storesDirs: ["./entities/**"]
  },

  prisma: {
    runMigration: false,
    installStudio: false,
    generateClient: false,
  },

  ssr: false,

  dir: {
    layouts: "./app/layouts/",
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
