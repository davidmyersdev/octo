import { type RouteLocation } from 'vue-router'
import { setTitle } from '/src/common/title'

const legacyRoutes = [
  { path: /^\/context$/, redirect: (route: RouteLocation) => ({ path: '/workspaces' }) },
  { path: /^\/contexts$/, redirect: (route: RouteLocation) => ({ path: '/workspaces' }) },
  { path: /^\/documents$/, redirect: (route: RouteLocation) => ({ path: '/docs' }) },
  { path: /^\/documents\/[\w\-]+$/, redirect: (route: RouteLocation) => ({ path: route.path.replace(/^\/documents/, '/docs') }) },
  { path: /^\/documents\/[\w\-]+\/meta$/, redirect: (route: RouteLocation) => ({ path: route.path.replace(/^\/documents/, '/docs') }) },
  { path: /^\/documents\/actionable$/, redirect: (route: RouteLocation) => ({ path: '/docs/f/tasks' }) },
  { path: /^\/documents\/daily$/, redirect: (route: RouteLocation) => ({ path: '/notepad' }) },
  { path: /^\/documents\/discarded$/, redirect: (route: RouteLocation) => ({ path: '/docs/f/discarded' }) },
  { path: /^\/documents\/export$/, redirect: (route: RouteLocation) => ({ path: '/docs/export' }) },
  { path: /^\/documents\/import$/, redirect: (route: RouteLocation) => ({ path: '/docs/import' }) },
  { path: /^\/documents\/new$/, redirect: (route: RouteLocation) => ({ path: '/docs/new' }) },
  { path: /^\/documents\/recent$/, redirect: (route: RouteLocation) => ({ path: '/docs' }) },
  { path: /^\/documents\/tasks$/, redirect: (route: RouteLocation) => ({ path: '/docs/f/tasks' }) },
  { path: /^\/documents\/untagged$/, redirect: (route: RouteLocation) => ({ path: '/docs/f/untagged' }) },
  { path: /^\/graph$/, redirect: (route: RouteLocation) => ({ path: '/force-graph' }) },
  { path: /^\/shared\/[\w\-]+$/, redirect: (route: RouteLocation) => ({ path: route.path.replace(/^\/shared/, '/public') }) },
  { path: /^\/tags\/[\w\-\/]+$/, redirect: (route: RouteLocation) => ({ path: route.path.replace(/^\/tags/, '/docs/t') }) },
]

export default defineNuxtRouteMiddleware((to, from) => {
  const isNewVisitor = !window?.localStorage.getItem('octo/welcome/v1')

  // Set the title if necessary.
  if (typeof to.meta.title === 'string') setTitle(to.meta.title)

  // Track the pageview if applicable.
  if (to.meta.track) window.fathom?.trackPageview()

  // Handle first-time visitor redirects.
  if (isNewVisitor) {
    if (to.path === '/' || to.path === '/docs/new') {
      window?.localStorage.setItem('octo/welcome/v1', 'done')

      return navigateTo({ path: '/home' })
    }
  }

  // Handle the root redirect.
  if (to.path === '/') {
    return navigateTo({ path: '/docs/new' })
  }

  // Handle legacy redirects.
  const legacyRoute = legacyRoutes.find((legacyRoute) => {
    if (legacyRoute.path.test(to.path)) {
      return true
    }
  })

  if (legacyRoute) {
    return navigateTo(legacyRoute.redirect(to))
  }
})
