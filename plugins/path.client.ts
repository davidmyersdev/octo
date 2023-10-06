/**
 * Because we need `ssr: true` to pre-render our HTML, we have to delete the `path` property from the payload to ensure
 * the page does not get redirected back to `/` when served from the PWA cache.
 *
 * https://github.com/nuxt/nuxt/pull/21732
 * https://github.com/nuxt/nuxt/issues/21743#issuecomment-1605511820
 */
export default defineNuxtPlugin({
  order: -25,
  setup(nuxtApp) {
    // console.debug(JSON.stringify(nuxtApp.payload, null, 2))

    delete nuxtApp.payload.path
  },
})
