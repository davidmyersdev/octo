import { u as useStore } from "./vuex.esm-bundler-99de9736.js";
import { D as Doc } from "./doc-018f7423.js";
import { D as Debouncer } from "./debouncer-2293cf40.js";
import { E as Editor } from "./Editor-ed41721e.js";
import { u as useFiles } from "./useFiles-7bacb5ca.js";
import { e as defineComponent, f as computed, r as ref, a7 as watchEffect, o as openBlock, k as createBlock, v as unref } from "./_plugin-vue_export-helper-ea9be126.js";
import "./index.browser-0a05c6e5.js";
import "./runtime-dom.esm-bundler-eaea4b0e.js";
import "./client-2de13258.js";
import "./preload-helper-5f15640e.js";
import "./index-73136136.js";
import "./index-a4bbc573.js";
import "./index-f4eaee3d.js";
import "./index-9e94dbc0.js";
import "./index-2b3125df.js";
import "./index-08d7a392.js";
import "./index-02f56940.js";
import "./index-b680242d.js";
import "./index-9d34c1ff.js";
import "./index-7d350bb1.js";
import "./overlayscrollbars.esm-084eb65b.js";
import "./index-90ebcfae-3aa38dd7.js";
import "./index.esm2017-1fab45ee.js";
import "./_commonjsHelpers-dd024a83.js";
import "./invert-f9d6c8a5.js";
import "./darken-fdc59d89.js";
import "./luminance-d8ea28d2.js";
import "./pinia-1b7dc050.js";
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
//# sourceMappingURL=_file_-3af462ad.js.map
