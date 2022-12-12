import { _ as _sfc_main$1 } from "./Tag.vue_vue_type_script_setup_true_lang-7d59ccc4.js";
import { r as resolveComponent, o as openBlock, c as createBlock, a3 as withCtx, f as createVNode, a4 as createTextVNode, a7 as toDisplayString } from "./runtime-core.esm-bundler-9a0ba37c.js";
const _sfc_main = {
  __name: "TagLink",
  props: ["tag"],
  setup(__props) {
    const { tag } = __props;
    const route = { path: `/docs/t/${tag}` };
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createBlock(_component_router_link, {
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
//# sourceMappingURL=TagLink-223948b7.js.map
