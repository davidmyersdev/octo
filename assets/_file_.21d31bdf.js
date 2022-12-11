import { C as defineComponent, t as useStore, i as computed, K as ref, ag as Doc, aW as watchEffect, o as openBlock, d as createBlock, J as unref, aX as Debouncer } from "./index.cce5ef5a.js";
import { E as Editor } from "./Editor.5fe21e51.js";
import { u as useFiles } from "./useFiles.b5689326.js";
import "./account.9b7625d0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[file]",
  props: { id: String },
  setup(__props) {
    const { id } = __props;
    const fileStore = useFiles();
    const store = useStore();
    const debouncer = new Debouncer(800);
    const appearance = computed(() => {
      if (store.state.settings.theme === "october") {
        return "dark";
      }
      return store.state.settings.theme;
    });
    const settings = computed(() => {
      return store.state.settings.editor;
    });
    const doc = ref(new Doc());
    const file = computed(() => fileStore.files.find((file2) => file2.id === id));
    watchEffect(async () => {
      if (file == null ? void 0 : file.value) {
        await file.value.handle.createWritable();
        const fileHandle = await file.value.handle.getFile();
        if (fileHandle) {
          doc.value.update({ text: await fileHandle.text() });
        }
      }
    });
    const input = async (text) => {
      debouncer.debounce(file.value.id, async () => {
        const writable = await file.value.handle.createWritable();
        writable.write(text);
        writable.close();
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Editor, {
        appearance: unref(appearance),
        settings: unref(settings),
        doc: doc.value,
        onInput: input
      }, null, 8, ["appearance", "settings", "doc"]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=_file_.21d31bdf.js.map
