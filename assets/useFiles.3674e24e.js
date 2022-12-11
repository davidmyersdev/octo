import { a8 as defineStore } from "./index.fc474e50.js";
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
//# sourceMappingURL=useFiles.3674e24e.js.map
