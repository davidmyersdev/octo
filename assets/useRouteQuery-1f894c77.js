import { b as useRoute, u as useRouter } from "./vue-router-bb5abae0.js";
import { r as ref, C as watch, m as onBeforeUnmount } from "./_plugin-vue_export-helper-ea9be126.js";
const useRouteQuery = () => {
  const route = useRoute();
  const router = useRouter();
  const query = ref(route.query.q);
  const stopWatching = watch(query, (value) => {
    const resolved = router.resolve({
      ...route,
      query: {
        ...route.query,
        q: value
      }
    });
    window.history.replaceState(window.history.state, "", resolved.fullPath);
  });
  onBeforeUnmount(() => {
    stopWatching();
  });
  return {
    query
  };
};
export {
  useRouteQuery as u
};
//# sourceMappingURL=useRouteQuery-1f894c77.js.map
