import { _ as _sfc_main$1 } from "./Tag.vue_vue_type_script_setup_true_lang.6a35c8a8.js";
import { r as resolveComponent, o as openBlock, d as createBlock, w as withCtx, b as createVNode, e as createTextVNode, t as toDisplayString } from "./index.36c6bdda.js";
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
//# sourceMappingURL=TagLink.7bcde89d.js.map
