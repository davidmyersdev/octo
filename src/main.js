import Vue from 'vue';
import VueMq from 'vue-mq'

import App from './App.vue';

import router from './router';
import store from './store';

// setup the service worker
import './registerServiceWorker';

import {
  CREATE_DOCUMENT,
  SET_OFFLINE,
  SET_ONLINE,
} from '@/store/actions';

Vue.use(VueMq, {
  breakpoints: {
    // breakpoints match as `screen_size <= value`
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: Infinity,
  },
});


new Vue({
  router,
  store,
  render: h => h(App),
  async created() {
    window.addEventListener('offline', () => {
      this.$store.dispatch(SET_OFFLINE);
    });

    window.addEventListener('online', () => {
      this.$store.dispatch(SET_ONLINE);
    });

    if (!navigator.onLine) {
      await this.$store.dispatch(SET_OFFLINE);
    }

    if (localStorage.getItem('octo/welcome/v1') === null) {
      fetch('./welcome.md')
        .then((response) => {
          return response.text();
        })
        .then((text) => {
          this.$store.dispatch(CREATE_DOCUMENT, {
            document: {
              text,
            },
          })
            .then((doc) => {
              this.$router.push({ name: 'document', params: { documentId: doc.clientId } });
            })
            .catch((error) => {
              // suppress errors for now
            });

          localStorage.setItem('octo/welcome/v1', 'done');
        })
        .catch((error) => {
          // suppress errors for now
        });
    }
  },
}).$mount('#app');
