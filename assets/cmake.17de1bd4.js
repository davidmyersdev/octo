var variable_regex = /({)?[a-zA-Z0-9_]+(})?/;
function tokenString(stream, state) {
  var current, prev, found_var = false;
  while (!stream.eol() && (current = stream.next()) != state.pending) {
    if (current === "$" && prev != "\\" && state.pending == '"') {
      found_var = true;
      break;
    }
    prev = current;
  }
  if (found_var) {
    stream.backUp(1);
  }
  if (current == state.pending) {
    state.continueString = false;
  } else {
    state.continueString = true;
  }
  return "string";
}
function tokenize(stream, state) {
  var ch = stream.next();
  if (ch === "$") {
    if (stream.match(variable_regex)) {
      return "variableName.special";
    }
    return "variable";
  }
  if (state.continueString) {
    stream.backUp(1);
    return tokenString(stream, state);
  }
  if (stream.match(/(\s+)?\w+\(/) || stream.match(/(\s+)?\w+\ \(/)) {
    stream.backUp(1);
    return "def";
  }
  if (ch == "#") {
    stream.skipToEnd();
    return "comment";
  }
  if (ch == "'" || ch == '"') {
    state.pending = ch;
    return tokenString(stream, state);
  }
  if (ch == "(" || ch == ")") {
    return "bracket";
  }
  if (ch.match(/[0-9]/)) {
    return "number";
  }
  stream.eatWhile(/[\w-]/);
  return null;
}
const cmake = {
  startState: function() {
    var state = {};
    state.inDefinition = false;
    state.inInclude = false;
    state.continueString = false;
    state.pending = false;
    return state;
  },
  token: function(stream, state) {
    if (stream.eatSpace())
      return null;
    return tokenize(stream, state);
  }
};
export {
  cmake
};
//# sourceMappingURL=cmake.17de1bd4.js.map
