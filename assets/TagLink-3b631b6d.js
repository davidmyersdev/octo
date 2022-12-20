import { _ as __unplugin_components_0 } from "./CoreLink-6737d303.js";
import { _ as _sfc_main$1 } from "./Tag.vue_vue_type_script_setup_true_lang-65429ac4.js";
import { o as openBlock, k as createBlock, w as withCtx, h as createVNode, j as createTextVNode, t as toDisplayString } from "./_plugin-vue_export-helper-ea9be126.js";
const _sfc_main = {
  __name: "TagLink",
  props: ["tag"],
  setup(__props) {
    const { tag } = __props;
    const route = { path: `/docs/t/${tag}` };
    return (_ctx, _cache) => {
      const _component_CoreLink = __unplugin_components_0;
      return openBlock(), createBlock(_component_CoreLink, {
        to: route,
        class: "flex items-center"
      }, {
        default: withCtx(() => [
          createVNode(_sfc_main$1, null, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(__props.tag), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as _
};
//# sourceMappingURL=TagLink-3b631b6d.js.map
