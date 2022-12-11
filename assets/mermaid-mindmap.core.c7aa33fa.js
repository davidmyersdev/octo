import { aJ as __vitePreload } from "./index.cce5ef5a.js";
const id = "mindmap";
const detector = (txt) => {
  return txt.match(/^\s*mindmap/) !== null;
};
const loader = async () => {
  const { diagram } = await __vitePreload(() => import("./diagram-definition.e1071f13.73c193b1.js"), true ? ["assets/diagram-definition.e1071f13.73c193b1.js","assets/transform.11eec644.js","assets/Editor.5fe21e51.js","assets/index.cce5ef5a.js","assets/index.8de4170e.css","assets/account.9b7625d0.js","assets/Editor.2adede1c.css"] : void 0);
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
//# sourceMappingURL=mermaid-mindmap.core.c7aa33fa.js.map
