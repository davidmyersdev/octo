import { u as useStore } from "./vuex.esm-bundler-99de9736.js";
import { f as computed } from "./_plugin-vue_export-helper-ea9be126.js";
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
//# sourceMappingURL=account-a08c9355.js.map
