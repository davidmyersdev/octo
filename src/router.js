import Vue from 'vue';
import Router from 'vue-router';

// views
import Dashboard from './views/Dashboard.vue';

// components
import Context from './components/Context.vue';
import DocumentList from './components/DocumentList.vue';
import TheEditor from './components/TheEditor.vue';
import TheSettings from './components/TheSettings.vue';
import TagList from './components/TagList.vue';


Vue.use(Router);

const router = new Router({
  routes: [
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
          path: 'documents',
          name: 'documents',
          component: DocumentList,
        },
        {
          path: 'documents/new',
          name: 'dashboard',
          component: TheEditor,
          props: true,
        },
        // document filters
        {
          path: 'documents/actionable',
          name: 'actionable',
          component: DocumentList,
          props: {
            actionable: true,
          },
        },
        {
          path: 'documents/discarded',
          name: 'discarded',
          component: DocumentList,
          props: {
            discarded: true,
          },
        },
        {
          path: 'documents/recent',
          name: 'recent',
          component: DocumentList,
          props: {
            recent: true,
          },
        },
        {
          path: 'documents/untagged',
          name: 'untagged',
          component: DocumentList,
          props: {
            untagged: true,
          },
        },
        // show a specific document
        {
          path: 'documents/:documentId',
          name: 'document',
          component: TheEditor,
          props: true,
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
          component: DocumentList,
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
      ],
    },
  ],
});

export default router;
