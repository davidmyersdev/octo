import Vue from 'vue'
import Router from 'vue-router'

// views
import Daily from '/src/views/Daily.vue'
import Dashboard from '/src/views/Dashboard.vue'
import Documents from '/src/views/Documents.vue'
import EditorView from '/src/views/Editor.vue'
import ExampleView from '/src/views/Example.vue'
import Home from '/src/views/Home.vue'

// components
import Context from '/src/components/Context.vue'
import Exporter from '/src/components/Exporter.vue'
import Graph from '/src/components/Graph.vue'
import Importer from '/src/components/Importer.vue'
import QuickAction from '/src/components/QuickAction.vue'
import TagList from '/src/components/TagList.vue'
import TheLeftSidebar from '/src/components/TheLeftSidebar.vue'
import TheRightSidebar from '/src/components/TheRightSidebar.vue'
import TheSettings from '/src/components/TheSettings.vue'
import Account from '/src/components/Account.vue'
import Privacy from '/src/components/Privacy.vue'
import Terms from '/src/components/Terms.vue'

import store from '/src/store.js'

import {
  SET_DOCUMENT,
  SET_SHOW_WELCOME,
} from '/src/store/actions.js'

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
    },
    {
      path: '/',
      name: 'editor',
      component: Dashboard,
      children: [
        // editor views
        {
          path: '',
          redirect: { name: 'home' },
        },
        {
          path: 'account',
          name: 'account',
          component: Account,
        },
        {
          path: 'example',
          name: 'example',
          component: ExampleView,
          props: { url: '/example.md' },
        },
        {
          path: 'documents',
          name: 'documents',
          component: Documents,
        },
        {
          path: 'documents/new',
          name: 'dashboard',
          component: EditorView,
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
          component: Exporter,
        },
        {
          path: 'documents/import',
          name: 'import',
          component: Importer,
        },
        // document filters
        {
          path: 'documents/actionable',
          name: 'actionable',
          component: Documents,
          props: {
            actionable: true,
          },
        },
        {
          path: 'documents/discarded',
          name: 'discarded',
          component: Documents,
          props: {
            discarded: true,
          },
        },
        {
          path: 'documents/recent',
          name: 'recent',
          component: Documents,
          props: {
            recent: true,
          },
        },
        {
          path: 'documents/untagged',
          name: 'untagged',
          component: Documents,
          props: {
            untagged: true,
          },
        },
        // daily
        {
          path: 'documents/daily',
          name: 'daily',
          component: Daily,
          props: true,
        },
        // show meta for a document
        {
          path: 'documents/:id/meta',
          name: 'document-meta',
          component: TheRightSidebar,
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
          component: EditorView,
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
          component: QuickAction,
        },
        // menu
        {
          path: 'menu',
          name: 'menu',
          component: TheLeftSidebar,
        },
        // open (and load) a shared document
        {
          path: 'shared/:id',
          name: 'shared',
          component: EditorView,
          props: {
            default: true,
            readonly: true,
          },
        },
        // context switcher
        {
          path: 'context',
          name: 'context',
          component: Context,
        },
        // tags
        {
          path: 'tags/:tag',
          name: 'tag',
          component: Documents,
          props: true,
        },
        {
          path: 'tags',
          name: 'tags',
          component: TagList,
          props: true,
        },
        // settings
        {
          path: 'settings',
          name: 'settings',
          component: TheSettings,
        },
        // graph view
        {
          path: 'graph',
          name: 'graph',
          component: Graph,
        },
        // privacy & terms
        {
          path: 'privacy-policy',
          name: 'privacy_policy',
          component: Privacy,
        },
        {
          path: 'terms-and-conditions',
          name: 'terms_and_conditions',
          component: Terms,
        },
      ],
    },
  ],
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
