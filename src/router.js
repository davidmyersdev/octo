import Vue from 'vue'
import Router from 'vue-router'

// landing page
import Home from '/src/views/Home.vue'

import store from '/src/store.js'

import {
  SET_DOCUMENT,
  SET_SHOW_WELCOME,
} from '/src/store/actions.js'

import { setTitle } from '/src/common/title.js'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/index.html',
      redirect: { name: 'dashboard' },
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      beforeEnter(to, from, next) {
        if (store.state.showWelcome) {
          localStorage.setItem('octo/welcome/v1', 'done')
          store.dispatch(SET_SHOW_WELCOME, false)
        }

        next()
      },
    },
    {
      path: '/',
      name: 'editor',
      component: () => import('/src/views/Dashboard.vue'),
      children: [
        // editor views
        {
          path: '',
          redirect: { name: 'home' },
        },
        {
          path: 'account',
          name: 'account',
          meta: { customTitle: "Account" },
          component: () => import('/src/components/Account.vue'),
        },
        {
          path: 'example',
          name: 'example',
          meta: { customTitle: "Example" },
          component: () => import('/src/views/Example.vue'),
          props: { url: '/example.md' },
        },
        {
          path: 'documents',
          name: 'documents',
          component: () => import('/src/views/Documents.vue'),
        },
        {
          path: 'documents/new',
          name: 'dashboard',
          component: () => import('/src/views/Editor.vue'),
          props: true,
          beforeEnter(to, from, next) {
            store.dispatch(SET_DOCUMENT, { id: null })

            if (store.state.showWelcome) {
              localStorage.setItem('octo/welcome/v1', 'done')
              store.dispatch(SET_SHOW_WELCOME, false)

              next({ name: 'home' })
            } else {
              next()
            }
          },
        },
        {
          path: 'documents/export',
          name: 'export',
          meta: { customTitle: "Export" },
          component: () => import('/src/components/Exporter.vue'),
        },
        {
          path: 'documents/import',
          name: 'import',
          meta: { customTitle: "Import" },
          component: () => import('/src/components/Importer.vue'),
        },
        // document filters
        {
          path: 'documents/actionable',
          name: 'actionable',
          meta: { customTitle: "Actionable" },
          component: () => import('/src/views/Documents.vue'),
          props: {
            actionable: true,
          },
        },
        {
          path: 'documents/discarded',
          name: 'discarded',
          meta: { customTitle: "Discarded" },
          component: () => import('/src/views/Documents.vue'),
          props: {
            discarded: true,
          },
        },
        {
          path: 'documents/recent',
          name: 'recent',
          meta: { customTitle: "Recent" },
          component: () => import('/src/views/Documents.vue'),
          props: {
            recent: true,
          },
        },
        {
          path: 'documents/untagged',
          name: 'untagged',
          meta: { customTitle: "Untagged" },
          component: () => import('/src/views/Documents.vue'),
          props: {
            untagged: true,
          },
        },
        // daily
        {
          path: 'documents/daily',
          name: 'daily',
          meta: { customTitle: "Daily" },
          component: () => import('/src/views/Daily.vue'),
          props: true,
        },
        // show meta for a document
        {
          path: 'documents/:id/meta',
          name: 'document-meta',
          component: () => import('/src/components/TheRightSidebar.vue'),
          props: true,
          beforeEnter(to, from, next) {
            store.dispatch(SET_DOCUMENT, { id: to.params.id })
            next()
          },
        },
        // show a specific document
        {
          path: 'documents/:id',
          name: 'document',
          component: () => import('/src/views/Editor.vue'),
          props: true,
          beforeEnter(to, from, next) {
            store.dispatch(SET_DOCUMENT, { id: to.params.id })
            next()
          },
        },
        // quick action
        {
          path: 'quick-action',
          name: 'quick-action',

          meta: { customTitle: "Context" },
          component: () => import('/src/components/QuickAction.vue'),
        },
        // menu
        {
          path: 'menu',
          name: 'menu',
          component: () => import('/src/components/TheLeftSidebar.vue'),
        },
        // open (and load) a shared document
        {
          path: 'shared/:id',
          name: 'shared',
          component: () => import('/src/views/Editor.vue'),
          props: {
            default: true,
            readonly: true,
          },
        },
        // context switcher
        {
          path: 'context',
          name: 'context',
          meta: { customTitle: "Context" },
          component: () => import('/src/components/Context.vue'),
        },
        // tags
        {
          path: 'tags/:tag',
          name: 'tag',
          component: () => import('/src/views/Documents.vue'),
          props: true,
        },
        {
          path: 'tags',
          name: 'tags',
          meta: { customTitle: "Tags" },
          component: () => import('/src/components/TagList.vue'),
          props: true,
        },
        // settings
        {
          path: 'settings',
          name: 'settings',
          meta: { customTitle: "Settings" },
          component: () => import('/src/components/TheSettings.vue'),
        },
        // graph view
        {
          path: 'graph',
          name: 'graph',
          meta: { customTitle: "Graph" },
          component: () => import('/src/components/Graph.vue'),
        },
        // privacy & terms
        {
          path: 'privacy-policy',
          name: 'privacy_policy',
          meta: { customTitle: "Privacy Policy" },
          component: () => import('/src/components/Privacy.vue'),
        },
        {
          path: 'terms-and-conditions',
          name: 'terms_and_conditions',
          meta: { customTitle: "Terms and Conditions" },
          component: () => import('/src/components/Terms.vue'),
        },
      ],
    },
  ],
})

router.beforeEach((to, _from, next) => {
  setTitle(to.meta.customTitle)

  next()
})

export const open = (route) => {
  router.push(route).catch((error) => {
    // avoid redundant navigation errors
    if (error.name !== 'NavigationDuplicated') {
      throw error
    }
  })
}

export default router
