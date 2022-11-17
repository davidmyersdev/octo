import { a1 as defineStore } from "./index.634b652b.js";
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
//# sourceMappingURL=files.bc7a92fe.js.map
