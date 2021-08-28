import { authInstance } from '@/firebase';

import {
  SET_USER,
  SIGN_OUT,
} from '@/store/actions';

export default {
  state: () => ({
    isEvaluated: false,
    user: null,
  }),
  getters: {

  },
  mutations: {
    [SET_USER] (state, payload) {
      state.user = payload.user;

      // set auth as evaluated
      state.isEvaluated = true;
    },
  },
  actions: {
    async [SET_USER] (context, payload) {
      context.commit(SET_USER, payload);
    },
    async [SIGN_OUT] (context, payload) {
      authInstance.signOut();

      // clear user
      return context.dispatch(SET_USER, { user: null });
    },
  },
};
