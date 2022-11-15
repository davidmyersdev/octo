import { ae as __vitePreload } from "./index.36c6bdda.js";
const id = "mindmap";
const detector = (txt) => {
  return txt.match(/^\s*mindmap/) !== null;
};
const loader = async () => {
  const { diagram } = await __vitePreload(() => import("./diagram-definition.e1071f13.7dd1681b.js"), true ? ["assets/diagram-definition.e1071f13.7dd1681b.js","assets/transform.11eec644.js","assets/Editor.5b58e607.js","assets/index.36c6bdda.js","assets/index.c5b01107.css","assets/account.1d085f45.js","assets/Editor.34a9cd98.css"] : void 0);
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
//# sourceMappingURL=mermaid-mindmap.core.0feee259.js.map
