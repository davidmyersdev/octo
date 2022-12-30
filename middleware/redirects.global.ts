import { useStore } from 'vuex'
import { setTitle } from '/src/common/title'

export default defineNuxtRouteMiddleware((to, from) => {
  const store = useStore()

  // Handle root redirect.
  if (to.path === '/') {
    if (typeof window === 'undefined') {
      return navigateTo('/home')
    }

    if (window.localStorage.getItem('octo/welcome/v1')) {
      return navigateTo({ path: '/docs/new' })
    } else {
      return navigateTo({ path: '/home' })
    }
  }

  if (typeof to.meta.title === 'string') setTitle(to.meta.title)
  if (to.meta.track) window.fathom?.trackPageview()

  if (store) {
    if (to.name === 'docs-docId') store.dispatch('SET_DOCUMENT', { id: to.params.docId })
    if (to.path === '/docs/new') store.dispatch('SET_DOCUMENT', { id: null })
  }
})
