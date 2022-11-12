import { l as computed, D as useStore } from "./index.99a5f7ec.js";
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
//# sourceMappingURL=account.81044ebe.js.map
