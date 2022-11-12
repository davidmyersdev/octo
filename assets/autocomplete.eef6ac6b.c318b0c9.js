import { r as re, a as autocompletion, c as closeBrackets } from "./Editor.47c56eaf.js";
import "./index.99a5f7ec.js";
import "./account.81044ebe.js";
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
//# sourceMappingURL=autocomplete.eef6ac6b.c318b0c9.js.map
