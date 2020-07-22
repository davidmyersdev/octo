import Vue from 'vue';
import Router from 'vue-router';

// views
import Dashboard from './views/Dashboard.vue';

// components
import Context from './components/Context.vue';
import NoteList from './components/NoteList.vue';
import TagList from './components/TagList.vue';
import Editor from './components/Editor.vue';


Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: Dashboard,
      children: [
        // editor views
        {
          path: '/',
          name: 'dashboard',
          component: Editor,
        },
        {
          path: '/documents/:documentId',
          name: 'document',
          component: Editor,
        },
        // document filters
        {
          path: '/actionable',
          name: 'actionable',
          component: NoteList,
          props: {
            actionable: true,
          },
        },
        {
          path: '/discarded',
          name: 'discarded',
          component: NoteList,
          props: {
            discarded: true,
          },
        },
        {
          path: '/recent',
          name: 'recent',
          component: NoteList,
          props: {
            recent: true,
          },
        },
        {
          path: '/untagged',
          name: 'untagged',
          component: NoteList,
          props: {
            untagged: true,
          },
        },
        // context switcher
        {
          path: '/context',
          name: 'context',
          component: Context,
        },
        // tags
        {
          path: '/tags/:tag',
          name: 'tag',
          component: NoteList,
          props: true,
        },
        {
          path: '/tags',
          name: 'tags',
          component: TagList,
          props: true,
        },
      ],
    },
  ],
});

export default router;
