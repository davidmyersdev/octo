import { r as re, a as autocompletion, c as closeBrackets } from "./Editor.af4fef3b.js";
import "./index.65602d5f.js";
import "./account.36f48ae2.js";
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
//# sourceMappingURL=autocomplete.0c233232.e69df8c2.js.map
