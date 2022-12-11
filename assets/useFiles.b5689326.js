import { a8 as defineStore } from "./index.cce5ef5a.js";
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
//# sourceMappingURL=useFiles.b5689326.js.map
