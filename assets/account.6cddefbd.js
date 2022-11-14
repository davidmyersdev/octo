import { l as computed, D as useStore } from "./index.7eca4c79.js";
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
//# sourceMappingURL=account.6cddefbd.js.map
