import { type RouteLocation } from 'vue-router'
import { isClient } from '#helpers/environment'

const legacyRoutes = [
  { path: /^\/context$/, redirect: (_route: RouteLocation) => ({ path: '/workspaces' }) },
  { path: /^\/contexts$/, redirect: (_route: RouteLocation) => ({ path: '/workspaces' }) },
  { path: /^\/documents$/, redirect: (_route: RouteLocation) => ({ path: '/docs' }) },
  { path: /^\/documents\/[\w\-]+$/, redirect: (route: RouteLocation) => ({ path: route.path.replace(/^\/documents/, '/docs') }) },
  { path: /^\/documents\/[\w\-]+\/meta$/, redirect: (route: RouteLocation) => ({ path: route.path.replace(/^\/documents/, '/docs') }) },
  { path: /^\/documents\/actionable$/, redirect: (_route: RouteLocation) => ({ path: '/docs/f/tasks' }) },
  { path: /^\/documents\/daily$/, redirect: (_route: RouteLocation) => ({ path: '/notepad' }) },
  { path: /^\/documents\/discarded$/, redirect: (_route: RouteLocation) => ({ path: '/docs/f/discarded' }) },
  { path: /^\/documents\/export$/, redirect: (_route: RouteLocation) => ({ path: '/docs/export' }) },
  { path: /^\/documents\/import$/, redirect: (_route: RouteLocation) => ({ path: '/docs/import' }) },
  { path: /^\/documents\/new$/, redirect: (_route: RouteLocation) => ({ path: '/docs/new' }) },
  { path: /^\/documents\/recent$/, redirect: (_route: RouteLocation) => ({ path: '/docs' }) },
  { path: /^\/documents\/tasks$/, redirect: (_route: RouteLocation) => ({ path: '/docs/f/tasks' }) },
  { path: /^\/documents\/untagged$/, redirect: (_route: RouteLocation) => ({ path: '/docs/f/untagged' }) },
  { path: /^\/graph$/, redirect: (_route: RouteLocation) => ({ path: '/force-graph' }) },
  { path: /^\/shared\/[\w\-]+$/, redirect: (route: RouteLocation) => ({ path: route.path.replace(/^\/shared/, '/public') }) },
  { path: /^\/tags\/[\w\-\/]+$/, redirect: (route: RouteLocation) => ({ path: route.path.replace(/^\/tags/, '/docs/t') }) },
]

export default defineNuxtRouteMiddleware((to, _from) => {
  // Track the pageview if applicable.
  if (to.meta.track) {
    if (isClient) {
      window?.fathom?.trackPageview()
    }
  }

  // Handle legacy redirects.
  const legacyRoute = legacyRoutes.find((legacyRoute) => {
    return legacyRoute.path.test(to.path)
  })

  if (legacyRoute) {
    return navigateTo(legacyRoute.redirect(to))
  }
})
