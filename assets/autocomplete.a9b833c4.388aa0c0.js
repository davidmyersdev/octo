import { r as re, a as autocompletion, c as closeBrackets } from "./Editor.5fe21e51.js";
import "./index.cce5ef5a.js";
import "./account.9b7625d0.js";
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
//# sourceMappingURL=autocomplete.a9b833c4.388aa0c0.js.map
