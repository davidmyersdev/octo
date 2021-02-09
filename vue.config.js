module.exports = {
  chainWebpack: config => config.resolve.set('symlinks', false),
  productionSourceMap: false,
  pwa: {
    manifestOptions: {
      icons: [
        {
          src: './img/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: './img/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: './img/icons/android-chrome-maskable-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: './img/icons/android-chrome-maskable-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: './img/icons/apple-touch-icon-60x60.png',
          sizes: '60x60',
          type: 'image/png',
        },
        {
          src: './img/icons/apple-touch-icon-76x76.png',
          sizes: '76x76',
          type: 'image/png',
        },
        {
          src: './img/icons/apple-touch-icon-120x120.png',
          sizes: '120x120',
          type: 'image/png',
        },
        {
          src: './img/icons/apple-touch-icon-152x152.png',
          sizes: '152x152',
          type: 'image/png',
        },
        {
          src: './img/icons/apple-touch-icon-180x180.png',
          sizes: '180x180',
          type: 'image/png',
        },
        {
          src: './img/icons/apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png',
        },
        {
          src: './img/icons/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          src: './img/icons/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          src: './img/icons/msapplication-icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: './img/icons/mstile-150x150.png',
          sizes: '150x150',
          type: 'image/png',
        },
      ],
    },
    themeColor: "#111111",
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      clientsClaim: true,
      exclude: [
        /\.map$/,
      ],
      // solution for the current version of workbox plugin
      // https://forum.vuejs.org/t/vue-cli-plugin-pwa-additionalmanifestentries-error/89234/5
      manifestTransforms: [
        (originalManifest) => {
          const manifest = originalManifest.concat([
            { url: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.26.0/moment.min.js' },
            { url: 'https://code.cdn.mozilla.net/fonts/fira.css', revision: 'v1' },
            { url: 'https://code.cdn.mozilla.net/fonts/ttf/FiraMono-Bold.ttf', revision: 'v1' },
            { url: 'https://code.cdn.mozilla.net/fonts/ttf/FiraMono-Regular.ttf', revision: 'v1' },
            { url: 'https://code.cdn.mozilla.net/fonts/ttf/FiraSans-Regular.ttf', revision: 'v1' },
            { url: 'https://code.cdn.mozilla.net/fonts/ttf/FiraSans-Medium.ttf', revision: 'v1' },
            { url: 'https://code.cdn.mozilla.net/fonts/woff/FiraMono-Bold.woff', revision: 'v1' },
            { url: 'https://code.cdn.mozilla.net/fonts/woff/FiraMono-Regular.woff', revision: 'v1' },
            { url: 'https://code.cdn.mozilla.net/fonts/woff/FiraSans-Regular.woff', revision: 'v1' },
            { url: 'https://code.cdn.mozilla.net/fonts/woff/FiraSans-Medium.woff', revision: 'v1' },
            // lato is currently required by bootstrap
            // todo: determine if this can be excluded
            { url: 'https://fonts.googleapis.com/css?family=Lato:400,700,400italic&display=swap', revision: 'v1' },
            { url: 'https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/darkly/bootstrap.min.css' },
          ]);
          // optionally set warning messages
          const warnings = [];
          return { manifest, warnings };
        },
      ],
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https\:\/\/cdnjs\.cloudflare\.com\/.*'),
          handler: 'staleWhileRevalidate',
          options: {
            cacheName: 'cloudflare-cache',
          },
        },
      ],
      skipWaiting: true,
    },
  },
};
