import { s as simpleMode } from "./simple-mode.2be04451.js";
var from = "from";
var fromRegex = new RegExp("^(\\s*)\\b(" + from + ")\\b", "i");
var shells = ["run", "cmd", "entrypoint", "shell"];
var shellsAsArrayRegex = new RegExp("^(\\s*)(" + shells.join("|") + ")(\\s+\\[)", "i");
var expose = "expose";
var exposeRegex = new RegExp("^(\\s*)(" + expose + ")(\\s+)", "i");
var others = [
  "arg",
  "from",
  "maintainer",
  "label",
  "env",
  "add",
  "copy",
  "volume",
  "user",
  "workdir",
  "onbuild",
  "stopsignal",
  "healthcheck",
  "shell"
];
var instructions = [from, expose].concat(shells).concat(others), instructionRegex = "(" + instructions.join("|") + ")", instructionOnlyLine = new RegExp("^(\\s*)" + instructionRegex + "(\\s*)(#.*)?$", "i"), instructionWithArguments = new RegExp("^(\\s*)" + instructionRegex + "(\\s+)", "i");
const dockerFile = simpleMode({
  start: [
    {
      regex: /^\s*#.*$/,
      sol: true,
      token: "comment"
    },
    {
      regex: fromRegex,
      token: [null, "keyword"],
      sol: true,
      next: "from"
    },
    {
      regex: instructionOnlyLine,
      token: [null, "keyword", null, "error"],
      sol: true
    },
    {
      regex: shellsAsArrayRegex,
      token: [null, "keyword", null],
      sol: true,
      next: "array"
    },
    {
      regex: exposeRegex,
      token: [null, "keyword", null],
      sol: true,
      next: "expose"
    },
    {
      regex: instructionWithArguments,
      token: [null, "keyword", null],
      sol: true,
      next: "arguments"
    },
    {
      regex: /./,
      token: null
    }
  ],
  from: [
    {
      regex: /\s*$/,
      token: null,
      next: "start"
    },
    {
      regex: /(\s*)(#.*)$/,
      token: [null, "error"],
      next: "start"
    },
    {
      regex: /(\s*\S+\s+)(as)/i,
      token: [null, "keyword"],
      next: "start"
    },
    {
      token: null,
      next: "start"
    }
  ],
  single: [
    {
      regex: /(?:[^\\']|\\.)/,
      token: "string"
    },
    {
      regex: /'/,
      token: "string",
      pop: true
    }
  ],
  double: [
    {
      regex: /(?:[^\\"]|\\.)/,
      token: "string"
    },
    {
      regex: /"/,
      token: "string",
      pop: true
    }
  ],
  array: [
    {
      regex: /\]/,
      token: null,
      next: "start"
    },
    {
      regex: /"(?:[^\\"]|\\.)*"?/,
      token: "string"
    }
  ],
  expose: [
    {
      regex: /\d+$/,
      token: "number",
      next: "start"
    },
    {
      regex: /[^\d]+$/,
      token: null,
      next: "start"
    },
    {
      regex: /\d+/,
      token: "number"
    },
    {
      regex: /[^\d]+/,
      token: null
    },
    {
      token: null,
      next: "start"
    }
  ],
  arguments: [
    {
      regex: /^\s*#.*$/,
      sol: true,
      token: "comment"
    },
    {
      regex: /"(?:[^\\"]|\\.)*"?$/,
      token: "string",
      next: "start"
    },
    {
      regex: /"/,
      token: "string",
      push: "double"
    },
    {
      regex: /'(?:[^\\']|\\.)*'?$/,
      token: "string",
      next: "start"
    },
    {
      regex: /'/,
      token: "string",
      push: "single"
    },
    {
      regex: /[^#"']+[\\`]$/,
      token: null
    },
    {
      regex: /[^#"']+$/,
      token: null,
      next: "start"
    },
    {
      regex: /[^#"']+/,
      token: null
    },
    {
      token: null,
      next: "start"
    }
  ],
  languageData: {
    commentTokens: { line: "#" }
  }
});
export {
  dockerFile
};
//# sourceMappingURL=dockerfile.8e9483a8.js.map
