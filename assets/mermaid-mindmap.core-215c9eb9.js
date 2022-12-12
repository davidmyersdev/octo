import { _ as __vitePreload } from "./preload-helper-5f15640e.js";
const id = "mindmap";
const detector = (txt) => {
  return txt.match(/^\s*mindmap/) !== null;
};
const loader = async () => {
  const { diagram } = await __vitePreload(() => import("./diagram-definition.e1071f13-9c6cc299.js"), true ? ["assets/diagram-definition.e1071f13-9c6cc299.js","assets/transform-92e5ec77.js","assets/luminance-d8ea28d2.js","assets/darken-fdc59d89.js"] : void 0);
  return { id, diagram };
};
const plugin = {
  id,
  detector,
  loader
};
export {
  plugin as default
};
//# sourceMappingURL=mermaid-mindmap.core-215c9eb9.js.map
