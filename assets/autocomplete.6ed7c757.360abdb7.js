import { r as re, a as autocompletion, c as closeBrackets } from "./Editor.5b58e607.js";
import "./index.36c6bdda.js";
import "./account.1d085f45.js";
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
//# sourceMappingURL=autocomplete.6ed7c757.360abdb7.js.map
