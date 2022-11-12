function forEach(arr, f) {
  for (var i = 0; i < arr.length; i++)
    f(arr[i], i);
}
function some(arr, f) {
  for (var i = 0; i < arr.length; i++)
    if (f(arr[i], i))
      return true;
  return false;
}
var words = {
  unnamedDefinition: ["interface"],
  namedDefinition: [
    "module",
    "library",
    "macro",
    "C-struct",
    "C-union",
    "C-function",
    "C-callable-wrapper"
  ],
  typeParameterizedDefinition: ["class", "C-subtype", "C-mapped-subtype"],
  otherParameterizedDefinition: [
    "method",
    "function",
    "C-variable",
    "C-address"
  ],
  constantSimpleDefinition: ["constant"],
  variableSimpleDefinition: ["variable"],
  otherSimpleDefinition: [
    "generic",
    "domain",
    "C-pointer-type",
    "table"
  ],
  statement: [
    "if",
    "block",
    "begin",
    "method",
    "case",
    "for",
    "select",
    "when",
    "unless",
    "until",
    "while",
    "iterate",
    "profiling",
    "dynamic-bind"
  ],
  separator: [
    "finally",
    "exception",
    "cleanup",
    "else",
    "elseif",
    "afterwards"
  ],
  other: [
    "above",
    "below",
    "by",
    "from",
    "handler",
    "in",
    "instance",
    "let",
    "local",
    "otherwise",
    "slot",
    "subclass",
    "then",
    "to",
    "keyed-by",
    "virtual"
  ],
  signalingCalls: [
    "signal",
    "error",
    "cerror",
    "break",
    "check-type",
    "abort"
  ]
};
words["otherDefinition"] = words["unnamedDefinition"].concat(words["namedDefinition"]).concat(words["otherParameterizedDefinition"]);
words["definition"] = words["typeParameterizedDefinition"].concat(words["otherDefinition"]);
words["parameterizedDefinition"] = words["typeParameterizedDefinition"].concat(words["otherParameterizedDefinition"]);
words["simpleDefinition"] = words["constantSimpleDefinition"].concat(words["variableSimpleDefinition"]).concat(words["otherSimpleDefinition"]);
words["keyword"] = words["statement"].concat(words["separator"]).concat(words["other"]);
var symbolPattern = "[-_a-zA-Z?!*@<>$%]+";
var symbol = new RegExp("^" + symbolPattern);
var patterns = {
  symbolKeyword: symbolPattern + ":",
  symbolClass: "<" + symbolPattern + ">",
  symbolGlobal: "\\*" + symbolPattern + "\\*",
  symbolConstant: "\\$" + symbolPattern
};
var patternStyles = {
  symbolKeyword: "atom",
  symbolClass: "tag",
  symbolGlobal: "variableName.standard",
  symbolConstant: "variableName.constant"
};
for (var patternName in patterns)
  if (patterns.hasOwnProperty(patternName))
    patterns[patternName] = new RegExp("^" + patterns[patternName]);
patterns["keyword"] = [/^with(?:out)?-[-_a-zA-Z?!*@<>$%]+/];
var styles = {};
styles["keyword"] = "keyword";
styles["definition"] = "def";
styles["simpleDefinition"] = "def";
styles["signalingCalls"] = "builtin";
var wordLookup = {};
var styleLookup = {};
forEach([
  "keyword",
  "definition",
  "simpleDefinition",
  "signalingCalls"
], function(type) {
  forEach(words[type], function(word) {
    wordLookup[word] = type;
    styleLookup[word] = styles[type];
  });
});
function chain(stream, state, f) {
  state.tokenize = f;
  return f(stream, state);
}
function tokenBase(stream, state) {
  var ch = stream.peek();
  if (ch == "'" || ch == '"') {
    stream.next();
    return chain(stream, state, tokenString(ch, "string"));
  } else if (ch == "/") {
    stream.next();
    if (stream.eat("*")) {
      return chain(stream, state, tokenComment);
    } else if (stream.eat("/")) {
      stream.skipToEnd();
      return "comment";
    }
    stream.backUp(1);
  } else if (/[+\-\d\.]/.test(ch)) {
    if (stream.match(/^[+-]?[0-9]*\.[0-9]*([esdx][+-]?[0-9]+)?/i) || stream.match(/^[+-]?[0-9]+([esdx][+-]?[0-9]+)/i) || stream.match(/^[+-]?\d+/)) {
      return "number";
    }
  } else if (ch == "#") {
    stream.next();
    ch = stream.peek();
    if (ch == '"') {
      stream.next();
      return chain(stream, state, tokenString('"', "string"));
    } else if (ch == "b") {
      stream.next();
      stream.eatWhile(/[01]/);
      return "number";
    } else if (ch == "x") {
      stream.next();
      stream.eatWhile(/[\da-f]/i);
      return "number";
    } else if (ch == "o") {
      stream.next();
      stream.eatWhile(/[0-7]/);
      return "number";
    } else if (ch == "#") {
      stream.next();
      return "punctuation";
    } else if (ch == "[" || ch == "(") {
      stream.next();
      return "bracket";
    } else if (stream.match(/f|t|all-keys|include|key|next|rest/i)) {
      return "atom";
    } else {
      stream.eatWhile(/[-a-zA-Z]/);
      return "error";
    }
  } else if (ch == "~") {
    stream.next();
    ch = stream.peek();
    if (ch == "=") {
      stream.next();
      ch = stream.peek();
      if (ch == "=") {
        stream.next();
        return "operator";
      }
      return "operator";
    }
    return "operator";
  } else if (ch == ":") {
    stream.next();
    ch = stream.peek();
    if (ch == "=") {
      stream.next();
      return "operator";
    } else if (ch == ":") {
      stream.next();
      return "punctuation";
    }
  } else if ("[](){}".indexOf(ch) != -1) {
    stream.next();
    return "bracket";
  } else if (".,".indexOf(ch) != -1) {
    stream.next();
    return "punctuation";
  } else if (stream.match("end")) {
    return "keyword";
  }
  for (var name in patterns) {
    if (patterns.hasOwnProperty(name)) {
      var pattern = patterns[name];
      if (pattern instanceof Array && some(pattern, function(p) {
        return stream.match(p);
      }) || stream.match(pattern))
        return patternStyles[name];
    }
  }
  if (/[+\-*\/^=<>&|]/.test(ch)) {
    stream.next();
    return "operator";
  }
  if (stream.match("define")) {
    return "def";
  } else {
    stream.eatWhile(/[\w\-]/);
    if (wordLookup.hasOwnProperty(stream.current())) {
      return styleLookup[stream.current()];
    } else if (stream.current().match(symbol)) {
      return "variable";
    } else {
      stream.next();
      return "variableName.standard";
    }
  }
}
function tokenComment(stream, state) {
  var maybeEnd = false, maybeNested = false, nestedCount = 0, ch;
  while (ch = stream.next()) {
    if (ch == "/" && maybeEnd) {
      if (nestedCount > 0) {
        nestedCount--;
      } else {
        state.tokenize = tokenBase;
        break;
      }
    } else if (ch == "*" && maybeNested) {
      nestedCount++;
    }
    maybeEnd = ch == "*";
    maybeNested = ch == "/";
  }
  return "comment";
}
function tokenString(quote, style) {
  return function(stream, state) {
    var escaped = false, next, end = false;
    while ((next = stream.next()) != null) {
      if (next == quote && !escaped) {
        end = true;
        break;
      }
      escaped = !escaped && next == "\\";
    }
    if (end || !escaped) {
      state.tokenize = tokenBase;
    }
    return style;
  };
}
const dylan = {
  startState: function() {
    return {
      tokenize: tokenBase,
      currentIndent: 0
    };
  },
  token: function(stream, state) {
    if (stream.eatSpace())
      return null;
    var style = state.tokenize(stream, state);
    return style;
  },
  languageData: {
    commentTokens: { block: { open: "/*", close: "*/" } }
  }
};
export {
  dylan
};
//# sourceMappingURL=dylan.38e2f639.js.map
