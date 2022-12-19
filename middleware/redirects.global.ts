export default defineNuxtRouteMiddleware((to, from) => {
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
})
