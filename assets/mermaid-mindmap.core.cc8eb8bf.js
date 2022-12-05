import { aE as __vitePreload } from "./index.65602d5f.js";
const id = "mindmap";
const detector = (txt) => {
  return txt.match(/^\s*mindmap/) !== null;
};
const loader = async () => {
  const { diagram } = await __vitePreload(() => import("./diagram-definition.e1071f13.7cf11d8f.js"), true ? ["assets/diagram-definition.e1071f13.7cf11d8f.js","assets/transform.11eec644.js","assets/Editor.af4fef3b.js","assets/index.65602d5f.js","assets/index.0e1cdd67.css","assets/account.36f48ae2.js","assets/Editor.1b884963.css"] : void 0);
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
//# sourceMappingURL=mermaid-mindmap.core.cc8eb8bf.js.map
