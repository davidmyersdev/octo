import { aJ as __vitePreload } from "./index.fc474e50.js";
const id = "mindmap";
const detector = (txt) => {
  return txt.match(/^\s*mindmap/) !== null;
};
const loader = async () => {
  const { diagram } = await __vitePreload(() => import("./diagram-definition.e1071f13.9c861a7f.js"), true ? ["assets/diagram-definition.e1071f13.9c861a7f.js","assets/transform.11eec644.js","assets/Editor.d12c4a4b.js","assets/index.fc474e50.js","assets/index.8de4170e.css","assets/account.8a10d9d6.js","assets/Editor.2adede1c.css"] : void 0);
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
//# sourceMappingURL=mermaid-mindmap.core.2fcb1b92.js.map
