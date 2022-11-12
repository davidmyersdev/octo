var Identifier = "[a-zA-Z\\$][a-zA-Z0-9\\$]*";
var pBase = "(?:\\d+)";
var pFloat = "(?:\\.\\d+|\\d+\\.\\d*|\\d+)";
var pFloatBase = "(?:\\.\\w+|\\w+\\.\\w*|\\w+)";
var pPrecision = "(?:`(?:`?" + pFloat + ")?)";
var reBaseForm = new RegExp("(?:" + pBase + "(?:\\^\\^" + pFloatBase + pPrecision + "?(?:\\*\\^[+-]?\\d+)?))");
var reFloatForm = new RegExp("(?:" + pFloat + pPrecision + "?(?:\\*\\^[+-]?\\d+)?)");
var reIdInContext = new RegExp("(?:`?)(?:" + Identifier + ")(?:`(?:" + Identifier + "))*(?:`?)");
function tokenBase(stream, state) {
  var ch;
  ch = stream.next();
  if (ch === '"') {
    state.tokenize = tokenString;
    return state.tokenize(stream, state);
  }
  if (ch === "(") {
    if (stream.eat("*")) {
      state.commentLevel++;
      state.tokenize = tokenComment;
      return state.tokenize(stream, state);
    }
  }
  stream.backUp(1);
  if (stream.match(reBaseForm, true, false)) {
    return "number";
  }
  if (stream.match(reFloatForm, true, false)) {
    return "number";
  }
  if (stream.match(/(?:In|Out)\[[0-9]*\]/, true, false)) {
    return "atom";
  }
  if (stream.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::usage)/, true, false)) {
    return "meta";
  }
  if (stream.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::[a-zA-Z\$][a-zA-Z0-9\$]*):?/, true, false)) {
    return "string.special";
  }
  if (stream.match(/([a-zA-Z\$][a-zA-Z0-9\$]*\s*:)(?:(?:[a-zA-Z\$][a-zA-Z0-9\$]*)|(?:[^:=>~@\^\&\*\)\[\]'\?,\|])).*/, true, false)) {
    return "variableName.special";
  }
  if (stream.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+[a-zA-Z\$][a-zA-Z0-9\$]*/, true, false)) {
    return "variableName.special";
  }
  if (stream.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+/, true, false)) {
    return "variableName.special";
  }
  if (stream.match(/_+[a-zA-Z\$][a-zA-Z0-9\$]*/, true, false)) {
    return "variableName.special";
  }
  if (stream.match(/\\\[[a-zA-Z\$][a-zA-Z0-9\$]*\]/, true, false)) {
    return "character";
  }
  if (stream.match(/(?:\[|\]|{|}|\(|\))/, true, false)) {
    return "bracket";
  }
  if (stream.match(/(?:#[a-zA-Z\$][a-zA-Z0-9\$]*|#+[0-9]?)/, true, false)) {
    return "variableName.constant";
  }
  if (stream.match(reIdInContext, true, false)) {
    return "keyword";
  }
  if (stream.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%)/, true, false)) {
    return "operator";
  }
  stream.next();
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
  while (state.commentLevel > 0 && (next = stream.next()) != null) {
    if (prev === "(" && next === "*")
      state.commentLevel++;
    if (prev === "*" && next === ")")
      state.commentLevel--;
    prev = next;
  }
  if (state.commentLevel <= 0) {
    state.tokenize = tokenBase;
  }
  return "comment";
}
const mathematica = {
  startState: function() {
    return { tokenize: tokenBase, commentLevel: 0 };
  },
  token: function(stream, state) {
    if (stream.eatSpace())
      return null;
    return state.tokenize(stream, state);
  },
  languageData: {
    commentTokens: { block: { open: "(*", close: "*)" } }
  }
};
export {
  mathematica
};
//# sourceMappingURL=mathematica.2e640b53.js.map
