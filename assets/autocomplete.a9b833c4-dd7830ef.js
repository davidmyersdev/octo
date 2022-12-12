import { a as autocompletion, b as closeBrackets } from "./index-9d34c1ff.js";
import { r as re } from "./client-2de13258.js";
import "./index-9e94dbc0.js";
import "./index-73136136.js";
import "./index-f4eaee3d.js";
import "./preload-helper-5f15640e.js";
import "./index-a4bbc573.js";
import "./index-2b3125df.js";
import "./index-08d7a392.js";
import "./index-02f56940.js";
import "./index-b680242d.js";
import "./index-7d350bb1.js";
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
//# sourceMappingURL=autocomplete.a9b833c4-dd7830ef.js.map
