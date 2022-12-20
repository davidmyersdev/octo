import { d as defineStore } from "./pinia-1b7dc050.js";
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
//# sourceMappingURL=useRecentDocs-b417f68b.js.map
