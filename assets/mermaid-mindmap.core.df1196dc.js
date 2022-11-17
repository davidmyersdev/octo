import { ae as __vitePreload } from "./index.634b652b.js";
const id = "mindmap";
const detector = (txt) => {
  return txt.match(/^\s*mindmap/) !== null;
};
const loader = async () => {
  const { diagram } = await __vitePreload(() => import("./diagram-definition.e1071f13.7448e6b2.js"), true ? ["assets/diagram-definition.e1071f13.7448e6b2.js","assets/transform.11eec644.js","assets/Editor.67d5f3f9.js","assets/index.634b652b.js","assets/index.12181df7.css","assets/account.c2944b35.js","assets/Editor.34a9cd98.css"] : void 0);
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
//# sourceMappingURL=mermaid-mindmap.core.df1196dc.js.map
