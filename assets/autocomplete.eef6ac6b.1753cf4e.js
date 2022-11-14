import { r as re, a as autocompletion, c as closeBrackets } from "./Editor.baf8c720.js";
import "./index.7eca4c79.js";
import "./account.6cddefbd.js";
import "./transform.606510e9.js";
const v = (t) => {
  const p = t.plugins.flatMap((o) => o.type === re.Completion ? o.value : []);
  return [
    autocompletion({
      defaultKeymap: true,
      icons: false,
      override: p,
      optionClass: () => "ink-tooltip-option"
    }),
    closeBrackets()
  ];
};
export {
  v as autocomplete
};
//# sourceMappingURL=autocomplete.eef6ac6b.1753cf4e.js.map
