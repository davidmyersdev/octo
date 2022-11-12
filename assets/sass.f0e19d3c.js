import { keywords as keywords$1 } from "./css.3c26eb64.js";
const propertyKeywords = new Set(keywords$1.properties);
const colorKeywords = new Set(keywords$1.colors);
const valueKeywords = new Set(keywords$1.values);
const fontProperties = new Set(keywords$1.fonts);
function tokenRegexp(words) {
  return new RegExp("^" + words.join("|"));
}
let keywords = ["true", "false", "null", "auto"];
let keywordsRegexp = new RegExp("^" + keywords.join("|"));
let operators = [
  "\\(",
  "\\)",
  "=",
  ">",
  "<",
  "==",
  ">=",
  "<=",
  "\\+",
  "-",
  "\\!=",
  "/",
  "\\*",
  "%",
  "and",
  "or",
  "not",
  ";",
  "\\{",
  "\\}",
  ":"
];
let opRegexp = tokenRegexp(operators);
let pseudoElementsRegexp = /^::?[a-zA-Z_][\w\-]*/;
let word;
function isEndLine(stream) {
  return !stream.peek() || stream.match(/\s+$/, false);
}
function urlTokens(stream, state) {
  let ch = stream.peek();
  if (ch === ")") {
    stream.next();
    state.tokenizer = tokenBase;
    return "operator";
  } else if (ch === "(") {
    stream.next();
    stream.eatSpace();
    return "operator";
  } else if (ch === "'" || ch === '"') {
    state.tokenizer = buildStringTokenizer(stream.next());
    return "string";
  } else {
    state.tokenizer = buildStringTokenizer(")", false);
    return "string";
  }
}
function comment(indentation, multiLine) {
  return function(stream, state) {
    if (stream.sol() && stream.indentation() <= indentation) {
      state.tokenizer = tokenBase;
      return tokenBase(stream, state);
    }
    if (multiLine && stream.skipTo("*/")) {
      stream.next();
      stream.next();
      state.tokenizer = tokenBase;
    } else {
      stream.skipToEnd();
    }
    return "comment";
  };
}
function buildStringTokenizer(quote, greedy) {
  if (greedy == null) {
    greedy = true;
  }
  function stringTokenizer(stream, state) {
    let nextChar = stream.next();
    let peekChar = stream.peek();
    let previousChar = stream.string.charAt(stream.pos - 2);
    let endingString = nextChar !== "\\" && peekChar === quote || nextChar === quote && previousChar !== "\\";
    if (endingString) {
      if (nextChar !== quote && greedy) {
        stream.next();
      }
      if (isEndLine(stream)) {
        state.cursorHalf = 0;
      }
      state.tokenizer = tokenBase;
      return "string";
    } else if (nextChar === "#" && peekChar === "{") {
      state.tokenizer = buildInterpolationTokenizer(stringTokenizer);
      stream.next();
      return "operator";
    } else {
      return "string";
    }
  }
  return stringTokenizer;
}
function buildInterpolationTokenizer(currentTokenizer) {
  return function(stream, state) {
    if (stream.peek() === "}") {
      stream.next();
      state.tokenizer = currentTokenizer;
      return "operator";
    } else {
      return tokenBase(stream, state);
    }
  };
}
function indent(state, stream) {
  if (state.indentCount == 0) {
    state.indentCount++;
    let lastScopeOffset = state.scopes[0].offset;
    let currentOffset = lastScopeOffset + stream.indentUnit;
    state.scopes.unshift({ offset: currentOffset });
  }
}
function dedent(state) {
  if (state.scopes.length == 1)
    return;
  state.scopes.shift();
}
function tokenBase(stream, state) {
  let ch = stream.peek();
  if (stream.match("/*")) {
    state.tokenizer = comment(stream.indentation(), true);
    return state.tokenizer(stream, state);
  }
  if (stream.match("//")) {
    state.tokenizer = comment(stream.indentation(), false);
    return state.tokenizer(stream, state);
  }
  if (stream.match("#{")) {
    state.tokenizer = buildInterpolationTokenizer(tokenBase);
    return "operator";
  }
  if (ch === '"' || ch === "'") {
    stream.next();
    state.tokenizer = buildStringTokenizer(ch);
    return "string";
  }
  if (!state.cursorHalf) {
    if (ch === "-") {
      if (stream.match(/^-\w+-/)) {
        return "meta";
      }
    }
    if (ch === ".") {
      stream.next();
      if (stream.match(/^[\w-]+/)) {
        indent(state, stream);
        return "qualifier";
      } else if (stream.peek() === "#") {
        indent(state, stream);
        return "tag";
      }
    }
    if (ch === "#") {
      stream.next();
      if (stream.match(/^[\w-]+/)) {
        indent(state, stream);
        return "builtin";
      }
      if (stream.peek() === "#") {
        indent(state, stream);
        return "tag";
      }
    }
    if (ch === "$") {
      stream.next();
      stream.eatWhile(/[\w-]/);
      return "variable-2";
    }
    if (stream.match(/^-?[0-9\.]+/))
      return "number";
    if (stream.match(/^(px|em|in)\b/))
      return "unit";
    if (stream.match(keywordsRegexp))
      return "keyword";
    if (stream.match(/^url/) && stream.peek() === "(") {
      state.tokenizer = urlTokens;
      return "atom";
    }
    if (ch === "=") {
      if (stream.match(/^=[\w-]+/)) {
        indent(state, stream);
        return "meta";
      }
    }
    if (ch === "+") {
      if (stream.match(/^\+[\w-]+/)) {
        return "meta";
      }
    }
    if (ch === "@") {
      if (stream.match("@extend")) {
        if (!stream.match(/\s*[\w]/))
          dedent(state);
      }
    }
    if (stream.match(/^@(else if|if|media|else|for|each|while|mixin|function)/)) {
      indent(state, stream);
      return "def";
    }
    if (ch === "@") {
      stream.next();
      stream.eatWhile(/[\w-]/);
      return "def";
    }
    if (stream.eatWhile(/[\w-]/)) {
      if (stream.match(/ *: *[\w-\+\$#!\("']/, false)) {
        word = stream.current().toLowerCase();
        let prop = state.prevProp + "-" + word;
        if (propertyKeywords.has(prop)) {
          return "property";
        } else if (propertyKeywords.has(word)) {
          state.prevProp = word;
          return "property";
        } else if (fontProperties.has(word)) {
          return "property";
        }
        return "tag";
      } else if (stream.match(/ *:/, false)) {
        indent(state, stream);
        state.cursorHalf = 1;
        state.prevProp = stream.current().toLowerCase();
        return "property";
      } else if (stream.match(/ *,/, false)) {
        return "tag";
      } else {
        indent(state, stream);
        return "tag";
      }
    }
    if (ch === ":") {
      if (stream.match(pseudoElementsRegexp)) {
        return "type";
      }
      stream.next();
      state.cursorHalf = 1;
      return "operator";
    }
  } else {
    if (ch === "#") {
      stream.next();
      if (stream.match(/[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/)) {
        if (isEndLine(stream)) {
          state.cursorHalf = 0;
        }
        return "number";
      }
    }
    if (stream.match(/^-?[0-9\.]+/)) {
      if (isEndLine(stream)) {
        state.cursorHalf = 0;
      }
      return "number";
    }
    if (stream.match(/^(px|em|in)\b/)) {
      if (isEndLine(stream)) {
        state.cursorHalf = 0;
      }
      return "unit";
    }
    if (stream.match(keywordsRegexp)) {
      if (isEndLine(stream)) {
        state.cursorHalf = 0;
      }
      return "keyword";
    }
    if (stream.match(/^url/) && stream.peek() === "(") {
      state.tokenizer = urlTokens;
      if (isEndLine(stream)) {
        state.cursorHalf = 0;
      }
      return "atom";
    }
    if (ch === "$") {
      stream.next();
      stream.eatWhile(/[\w-]/);
      if (isEndLine(stream)) {
        state.cursorHalf = 0;
      }
      return "variable-2";
    }
    if (ch === "!") {
      stream.next();
      state.cursorHalf = 0;
      return stream.match(/^[\w]+/) ? "keyword" : "operator";
    }
    if (stream.match(opRegexp)) {
      if (isEndLine(stream)) {
        state.cursorHalf = 0;
      }
      return "operator";
    }
    if (stream.eatWhile(/[\w-]/)) {
      if (isEndLine(stream)) {
        state.cursorHalf = 0;
      }
      word = stream.current().toLowerCase();
      if (valueKeywords.has(word)) {
        return "atom";
      } else if (colorKeywords.has(word)) {
        return "keyword";
      } else if (propertyKeywords.has(word)) {
        state.prevProp = stream.current().toLowerCase();
        return "property";
      } else {
        return "tag";
      }
    }
    if (isEndLine(stream)) {
      state.cursorHalf = 0;
      return null;
    }
  }
  if (stream.match(opRegexp))
    return "operator";
  stream.next();
  return null;
}
function tokenLexer(stream, state) {
  if (stream.sol())
    state.indentCount = 0;
  let style = state.tokenizer(stream, state);
  let current = stream.current();
  if (current === "@return" || current === "}") {
    dedent(state);
  }
  if (style !== null) {
    let startOfToken = stream.pos - current.length;
    let withCurrentIndent = startOfToken + stream.indentUnit * state.indentCount;
    let newScopes = [];
    for (let i = 0; i < state.scopes.length; i++) {
      let scope = state.scopes[i];
      if (scope.offset <= withCurrentIndent)
        newScopes.push(scope);
    }
    state.scopes = newScopes;
  }
  return style;
}
const sass = {
  startState: function() {
    return {
      tokenizer: tokenBase,
      scopes: [{ offset: 0, type: "sass" }],
      indentCount: 0,
      cursorHalf: 0,
      definedVars: [],
      definedMixins: []
    };
  },
  token: function(stream, state) {
    let style = tokenLexer(stream, state);
    state.lastToken = { style, content: stream.current() };
    return style;
  },
  indent: function(state) {
    return state.scopes[0].offset;
  },
  languageData: {
    commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
    autocomplete: keywords$1.all
  }
};
export {
  sass
};
//# sourceMappingURL=sass.f0e19d3c.js.map
