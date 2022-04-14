export default {
  /*
   ** Nuxt.js modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    // Doc: https://github.com/nuxt-community/google-fonts-module
    "@nuxtjs/google-fonts"
  ],
  googleFonts: {
    families: {
      Inter: true
    }
  },
  tailwindcss: {
    jit: true
  }
};
