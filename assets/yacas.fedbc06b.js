function words(str) {
  var obj = {}, words2 = str.split(" ");
  for (var i = 0; i < words2.length; ++i)
    obj[words2[i]] = true;
  return obj;
}
var bodiedOps = words("Assert BackQuote D Defun Deriv For ForEach FromFile FromString Function Integrate InverseTaylor Limit LocalSymbols Macro MacroRule MacroRulePattern NIntegrate Rule RulePattern Subst TD TExplicitSum TSum Taylor Taylor1 Taylor2 Taylor3 ToFile ToStdout ToString TraceRule Until While");
var pFloatForm = "(?:(?:\\.\\d+|\\d+\\.\\d*|\\d+)(?:[eE][+-]?\\d+)?)";
var pIdentifier = "(?:[a-zA-Z\\$'][a-zA-Z0-9\\$']*)";
var reFloatForm = new RegExp(pFloatForm);
var reIdentifier = new RegExp(pIdentifier);
var rePattern = new RegExp(pIdentifier + "?_" + pIdentifier);
var reFunctionLike = new RegExp(pIdentifier + "\\s*\\(");
function tokenBase(stream, state) {
  var ch;
  ch = stream.next();
  if (ch === '"') {
    state.tokenize = tokenString;
    return state.tokenize(stream, state);
  }
  if (ch === "/") {
    if (stream.eat("*")) {
      state.tokenize = tokenComment;
      return state.tokenize(stream, state);
    }
    if (stream.eat("/")) {
      stream.skipToEnd();
      return "comment";
    }
  }
  stream.backUp(1);
  var m = stream.match(/^(\w+)\s*\(/, false);
  if (m !== null && bodiedOps.hasOwnProperty(m[1]))
    state.scopes.push("bodied");
  var scope = currentScope(state);
  if (scope === "bodied" && ch === "[")
    state.scopes.pop();
  if (ch === "[" || ch === "{" || ch === "(")
    state.scopes.push(ch);
  scope = currentScope(state);
  if (scope === "[" && ch === "]" || scope === "{" && ch === "}" || scope === "(" && ch === ")")
    state.scopes.pop();
  if (ch === ";") {
    while (scope === "bodied") {
      state.scopes.pop();
      scope = currentScope(state);
    }
  }
  if (stream.match(/\d+ *#/, true, false)) {
    return "qualifier";
  }
  if (stream.match(reFloatForm, true, false)) {
    return "number";
  }
  if (stream.match(rePattern, true, false)) {
    return "variableName.special";
  }
  if (stream.match(/(?:\[|\]|{|}|\(|\))/, true, false)) {
    return "bracket";
  }
  if (stream.match(reFunctionLike, true, false)) {
    stream.backUp(1);
    return "variableName.function";
  }
  if (stream.match(reIdentifier, true, false)) {
    return "variable";
  }
  if (stream.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%|#)/, true, false)) {
    return "operator";
  }
  return "error";
}
function tokenString(stream, state) {
  var next, end = false, escaped = false;
  while ((next = stream.next()) != null) {
    if (next === '"' && !escaped) {
      end = true;
      break;
    }
    escaped = !escaped && next === "\\";
  }
  if (end && !escaped) {
    state.tokenize = tokenBase;
  }
  return "string";
}
function tokenComment(stream, state) {
  var prev, next;
  while ((next = stream.next()) != null) {
    if (prev === "*" && next === "/") {
      state.tokenize = tokenBase;
      break;
    }
    prev = next;
  }
  return "comment";
}
function currentScope(state) {
  var scope = null;
  if (state.scopes.length > 0)
    scope = state.scopes[state.scopes.length - 1];
  return scope;
}
const yacas = {
  startState: function() {
    return {
      tokenize: tokenBase,
      scopes: []
    };
  },
  token: function(stream, state) {
    if (stream.eatSpace())
      return null;
    return state.tokenize(stream, state);
  },
  indent: function(state, textAfter, cx) {
    if (state.tokenize !== tokenBase && state.tokenize !== null)
      return null;
    var delta = 0;
    if (textAfter === "]" || textAfter === "];" || textAfter === "}" || textAfter === "};" || textAfter === ");")
      delta = -1;
    return (state.scopes.length + delta) * cx.unit;
  },
  languageData: {
    electricInput: /[{}\[\]()\;]/,
    commentTokens: { line: "//", block: { open: "/*", close: "*/" } }
  }
};
export {
  yacas
};
//# sourceMappingURL=yacas.fedbc06b.js.map
