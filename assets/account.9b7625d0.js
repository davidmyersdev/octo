import { i as computed, t as useStore } from "./index.cce5ef5a.js";
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
//# sourceMappingURL=account.9b7625d0.js.map
