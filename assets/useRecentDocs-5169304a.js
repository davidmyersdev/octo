import { d as defineStore } from "./pinia.esm-browser-4714cee3.js";
const useRecentDocs = defineStore("recentDocs", {
  state: () => ({
    ids: []
  }),
  actions: {
    add(addId) {
      if (!this.ids.includes(addId)) {
        this.ids.push(addId);
      }
    },
    remove(removeId) {
      this.ids = this.ids.filter((id) => id !== removeId);
    }
  },
  caching: false
});
export {
  useRecentDocs as u
};
//# sourceMappingURL=useRecentDocs-5169304a.js.map
