import { i as computed, t as useStore } from "./index.fc474e50.js";
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
//# sourceMappingURL=account.8a10d9d6.js.map
