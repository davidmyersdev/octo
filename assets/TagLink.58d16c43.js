import { _ as _sfc_main$1 } from "./Tag.vue_vue_type_script_setup_true_lang.6becfc87.js";
import { r as resolveComponent, o as openBlock, d as createBlock, w as withCtx, b as createVNode, e as createTextVNode, t as toDisplayString } from "./index.7eca4c79.js";
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
//# sourceMappingURL=TagLink.58d16c43.js.map
