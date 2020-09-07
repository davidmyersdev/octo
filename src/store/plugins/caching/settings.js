import localforage from 'localforage';

import {
  LOAD_SETTINGS,
  SET_EDITOR_TAB_SIZE,
} from '@/store/modules/settings';

const CACHE_KEY = 'main';
const cache = localforage.createInstance({
  name: 'settings',
});

export default (store) => {
  cache.getItem(CACHE_KEY).then((settings) => {
    if (settings) {
      store.dispatch(LOAD_SETTINGS, settings);
    }
  });

  store.subscribe(({ type, _payload }, state) => {
    switch (type) {
      case SET_EDITOR_TAB_SIZE:
        cache.setItem(CACHE_KEY, state.settings);

        break;
      default:
        break;
    }
  });
};
