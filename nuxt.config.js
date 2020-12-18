export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'techandcrea',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "/css/bootstrap.css" },
      { rel: "stylesheet", href: "/css/owl.carousel.css" },
      { rel: "stylesheet", href: "/css/owl.theme.css" },
      { rel: "stylesheet", href: "/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "/css/animate.css" },
      { rel: "stylesheet", href: "/css/magnific-popup.css" },
      { rel: "stylesheet", href: "/css/slick.css" },
      { rel: "stylesheet", href: "/css/icons.css" },
      { rel: "stylesheet", href: "/css/preset.css" },
      { rel: "stylesheet", href: "/css/theme.css" },
      { rel: "stylesheet", href: "/css/responsive.css" },
      { rel: "stylesheet", href: "/css/presets/color1.css" },
    ],
    script: [
      { src: "/js/jquery.js", type: "text/javascript", body: true },
      { src: "/js/bootstrap.min.js", type: "text/javascript", body: true },
      { src: "/js/modernizr.custom.js", type: "text/javascript", body: true },
      { src: "/js/gmaps.js", type: "text/javascript", body: true },
      { src: "https://maps.google.com/maps/api/js?key=AIzaSyDcRVa34aeAXfNhdqaqI2WHF95QLtIce7U", type: "text/javascript", body: true },
      { src: "/js/dlmenu.js", type: "text/javascript", body: true },
      { src: "/js/jquery.magnific-popup.js", type: "text/javascript", body: true },
      { src: "/js/mixer.js", type: "text/javascript", body: true },
      { src: "/js/jquery.easing.1.3.js", type: "text/javascript", body: true },
      { src: "/js/owl.carousel.js", type: "text/javascript", body: true },
      { src: "/js/slick.js", type: "text/javascript", body: true },
      { src: "/js/jquery.appear.js", type: "text/javascript", body: true },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
