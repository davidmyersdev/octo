import { r as re, a as autocompletion, c as closeBrackets } from "./Editor.67d5f3f9.js";
import "./index.634b652b.js";
import "./account.c2944b35.js";
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
//# sourceMappingURL=autocomplete.6ed7c757.ac0be40b.js.map
