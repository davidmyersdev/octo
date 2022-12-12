const properties = {
  token: function(stream, state) {
    var sol = stream.sol() || state.afterSection;
    var eol = stream.eol();
    state.afterSection = false;
    if (sol) {
      if (state.nextMultiline) {
        state.inMultiline = true;
        state.nextMultiline = false;
      } else {
        state.position = "def";
      }
    }
    if (eol && !state.nextMultiline) {
      state.inMultiline = false;
      state.position = "def";
    }
    if (sol) {
      while (stream.eatSpace()) {
      }
    }
    var ch = stream.next();
    if (sol && (ch === "#" || ch === "!" || ch === ";")) {
      state.position = "comment";
      stream.skipToEnd();
      return "comment";
    } else if (sol && ch === "[") {
      state.afterSection = true;
      stream.skipTo("]");
      stream.eat("]");
      return "header";
    } else if (ch === "=" || ch === ":") {
      state.position = "quote";
      return null;
    } else if (ch === "\\" && state.position === "quote") {
      if (stream.eol()) {
        state.nextMultiline = true;
      }
    }
    return state.position;
  },
  startState: function() {
    return {
      position: "def",
      nextMultiline: false,
      inMultiline: false,
      afterSection: false
    };
  }
};
export {
  properties
};
//# sourceMappingURL=properties-18d257b8.js.map
