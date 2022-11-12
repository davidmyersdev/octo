import { a1 as defineStore } from "./index.99a5f7ec.js";
const useFiles = defineStore("files", {
  state: () => ({
    files: []
  }),
  actions: {
    add(file) {
      this.files.push(file);
    }
  },
  caching: false
});
export {
  useFiles as u
};
//# sourceMappingURL=files.bd1a5d97.js.map
