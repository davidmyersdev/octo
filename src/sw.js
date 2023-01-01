import { registerSW } from 'virtual:pwa-register'

// Only attempt to register the service worker at the root path.
if (!/^\/.*?\//.test(window.location.pathname)) {
  registerSW({
    immediate: true,
    onOfflineReady() {},
    onNeedRefresh() {
      window.dispatchEvent(
        new Event('swupdated')
      )
    },
    onRegistered(swRegistration) {},
    onRegisterError(e) {},
  })
}
