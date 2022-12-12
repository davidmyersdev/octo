import { u as useRoute, b as useRouter } from "./vue-router-944476c0.js";
import { g as ref, w as watch, a9 as onBeforeUnmount } from "./runtime-core.esm-bundler-9a0ba37c.js";
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
//# sourceMappingURL=useRouteQuery-ec2ea82c.js.map
