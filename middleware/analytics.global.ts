import { isClient } from '#helpers/environment'

const staticPaths = [
  '/',
  '/account',
  '/docs',
  '/docs/export',
  '/docs/import',
  '/force-graph',
  '/home',
  '/menu',
  '/notepad',
  '/privacy-policy',
  '/quick-action',
  '/settings',
  '/tags',
  '/terms-and-conditions',
  '/workspaces',
]

export default defineNuxtRouteMiddleware((to, _from) => {
  // Handle all static paths.
  if (staticPaths.includes(to.path)) {
    if (isClient) {
      window?.fathom?.trackPageview()
    }
  }
})
