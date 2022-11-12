var reserve = "><+-.,[]".split("");
const brainfuck = {
  startState: function() {
    return {
      commentLine: false,
      left: 0,
      right: 0,
      commentLoop: false
    };
  },
  token: function(stream, state) {
    if (stream.eatSpace())
      return null;
    if (stream.sol()) {
      state.commentLine = false;
    }
    var ch = stream.next().toString();
    if (reserve.indexOf(ch) !== -1) {
      if (state.commentLine === true) {
        if (stream.eol()) {
          state.commentLine = false;
        }
        return "comment";
      }
      if (ch === "]" || ch === "[") {
        if (ch === "[") {
          state.left++;
        } else {
          state.right++;
        }
        return "bracket";
      } else if (ch === "+" || ch === "-") {
        return "keyword";
      } else if (ch === "<" || ch === ">") {
        return "atom";
      } else if (ch === "." || ch === ",") {
        return "def";
      }
    } else {
      state.commentLine = true;
      if (stream.eol()) {
        state.commentLine = false;
      }
      return "comment";
    }
    if (stream.eol()) {
      state.commentLine = false;
    }
  }
};
export {
  brainfuck
};
//# sourceMappingURL=brainfuck.e6564070.js.map
