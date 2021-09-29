import { registerSW } from 'virtual:pwa-register'

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
