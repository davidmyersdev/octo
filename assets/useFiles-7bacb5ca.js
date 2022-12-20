import { d as defineStore } from "./pinia-1b7dc050.js";
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
//# sourceMappingURL=useFiles-7bacb5ca.js.map
