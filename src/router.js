import Vue from 'vue'
import Router from 'vue-router'

// views
import Daily from './views/Daily'
import Dashboard from './views/Dashboard'
import Documents from './views/Documents'
import Editor from './views/Editor'

// components
import Context from './components/Context'
import Exporter from './components/Exporter'
import Graph from './components/Graph'
import Importer from './components/Importer'
import QuickAction from './components/QuickAction'
import TagList from './components/TagList'
import TheLeftSidebar from './components/TheLeftSidebar'
import TheRightSidebar from './components/TheRightSidebar'
import TheSettings from './components/TheSettings'
import Account from './components/Account'
import Privacy from './components/Privacy'
import Terms from './components/Terms'

import store from '@/store'

import Doc from '@/models/doc'

import {
  ADD_DOCUMENT,
  SET_DOCUMENT,
  SET_SHOW_WELCOME,
} from '@/store/actions'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/index.html',
      redirect: { name: 'dashboard' },
    },
    {
      path: '/',
      name: 'editor',
      component: Dashboard,
      children: [
        // editor views
        {
          path: '',
          redirect: { name: 'dashboard' },
        },
        {
          path: 'account',
          name: 'account',
          component: Account,
        },
        {
          path: 'documents',
          name: 'documents',
          component: Documents,
        },
        {
          path: 'documents/new',
          name: 'dashboard',
          component: Editor,
          props: true,
          beforeEnter(to, from, next) {
            store.dispatch(SET_DOCUMENT, { id: null })

            if (store.state.showWelcome) {
              fetch('/welcome.md')
                .then((response) => response.text())
                .then((text) => {
                  const doc = new Doc({ text })

                  store.dispatch(SET_SHOW_WELCOME, false)
                  store.dispatch(ADD_DOCUMENT, doc)

                  localStorage.setItem('octo/welcome/v1', 'done')

                  next({ name: 'document', params: { id: doc.id } })
                })
                .catch((error) => {
                  // suppress errors for now
                  next()
                })
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
          component: Editor,
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
          component: Editor,
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
