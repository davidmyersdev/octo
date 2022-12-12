import { u as useStore } from "./vuex.esm-bundler-4cb42885.js";
import { q as computed } from "./runtime-core.esm-bundler-9a0ba37c.js";
const subscription = computed(() => {
  return useStore().state.auth.subscription;
});
const user = computed(() => {
  return useStore().state.auth.user;
});
export {
  subscription as s,
  user as u
};
//# sourceMappingURL=account-d76573e6.js.map
