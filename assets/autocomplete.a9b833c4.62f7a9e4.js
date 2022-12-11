import { r as re, a as autocompletion, c as closeBrackets } from "./Editor.d12c4a4b.js";
import "./index.fc474e50.js";
import "./account.8a10d9d6.js";
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
//# sourceMappingURL=autocomplete.a9b833c4.62f7a9e4.js.map
