import localforage from 'localforage';

import {
  LOAD_SETTINGS,
  SET_CRYPTO_ENABLED,
  SET_CRYPTO_KEYS,
  SET_EDITOR_TAB_SIZE,
  SETTINGS_LOADED,
} from '@/store/modules/settings';

const CACHE_KEY = 'main';
const cache = localforage.createInstance({
  name: 'settings',
});

export default (store) => {
  cache.getItem(CACHE_KEY).then((settings) => {
    if (settings) {
      store.dispatch(LOAD_SETTINGS, settings).then(() => {
        store.dispatch(SETTINGS_LOADED);
      });
    } else {
      store.dispatch(SETTINGS_LOADED);
    }
  });

  store.subscribe(({ type, _payload }, state) => {
    switch (type) {
      case SET_CRYPTO_ENABLED:
      case SET_CRYPTO_KEYS:
      case SET_EDITOR_TAB_SIZE:
        cache.setItem(CACHE_KEY, state.settings);

        break;
      default:
        break;
    }
  });
};
