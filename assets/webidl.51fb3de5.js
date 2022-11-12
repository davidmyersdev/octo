function wordRegexp(words) {
  return new RegExp("^((" + words.join(")|(") + "))\\b");
}
var builtinArray = [
  "Clamp",
  "Constructor",
  "EnforceRange",
  "Exposed",
  "ImplicitThis",
  "Global",
  "PrimaryGlobal",
  "LegacyArrayClass",
  "LegacyUnenumerableNamedProperties",
  "LenientThis",
  "NamedConstructor",
  "NewObject",
  "NoInterfaceObject",
  "OverrideBuiltins",
  "PutForwards",
  "Replaceable",
  "SameObject",
  "TreatNonObjectAsNull",
  "TreatNullAs",
  "EmptyString",
  "Unforgeable",
  "Unscopeable"
];
var builtins = wordRegexp(builtinArray);
var typeArray = [
  "unsigned",
  "short",
  "long",
  "unrestricted",
  "float",
  "double",
  "boolean",
  "byte",
  "octet",
  "Promise",
  "ArrayBuffer",
  "DataView",
  "Int8Array",
  "Int16Array",
  "Int32Array",
  "Uint8Array",
  "Uint16Array",
  "Uint32Array",
  "Uint8ClampedArray",
  "Float32Array",
  "Float64Array",
  "ByteString",
  "DOMString",
  "USVString",
  "sequence",
  "object",
  "RegExp",
  "Error",
  "DOMException",
  "FrozenArray",
  "any",
  "void"
];
var types = wordRegexp(typeArray);
var keywordArray = [
  "attribute",
  "callback",
  "const",
  "deleter",
  "dictionary",
  "enum",
  "getter",
  "implements",
  "inherit",
  "interface",
  "iterable",
  "legacycaller",
  "maplike",
  "partial",
  "required",
  "serializer",
  "setlike",
  "setter",
  "static",
  "stringifier",
  "typedef",
  "optional",
  "readonly",
  "or"
];
var keywords = wordRegexp(keywordArray);
var atomArray = [
  "true",
  "false",
  "Infinity",
  "NaN",
  "null"
];
var atoms = wordRegexp(atomArray);
var startDefArray = ["callback", "dictionary", "enum", "interface"];
var startDefs = wordRegexp(startDefArray);
var endDefArray = ["typedef"];
var endDefs = wordRegexp(endDefArray);
var singleOperators = /^[:<=>?]/;
var integers = /^-?([1-9][0-9]*|0[Xx][0-9A-Fa-f]+|0[0-7]*)/;
var floats = /^-?(([0-9]+\.[0-9]*|[0-9]*\.[0-9]+)([Ee][+-]?[0-9]+)?|[0-9]+[Ee][+-]?[0-9]+)/;
var identifiers = /^_?[A-Za-z][0-9A-Z_a-z-]*/;
var identifiersEnd = /^_?[A-Za-z][0-9A-Z_a-z-]*(?=\s*;)/;
var strings = /^"[^"]*"/;
var multilineComments = /^\/\*.*?\*\//;
var multilineCommentsStart = /^\/\*.*/;
var multilineCommentsEnd = /^.*?\*\//;
function readToken(stream, state) {
  if (stream.eatSpace())
    return null;
  if (state.inComment) {
    if (stream.match(multilineCommentsEnd)) {
      state.inComment = false;
      return "comment";
    }
    stream.skipToEnd();
    return "comment";
  }
  if (stream.match("//")) {
    stream.skipToEnd();
    return "comment";
  }
  if (stream.match(multilineComments))
    return "comment";
  if (stream.match(multilineCommentsStart)) {
    state.inComment = true;
    return "comment";
  }
  if (stream.match(/^-?[0-9\.]/, false)) {
    if (stream.match(integers) || stream.match(floats))
      return "number";
  }
  if (stream.match(strings))
    return "string";
  if (state.startDef && stream.match(identifiers))
    return "def";
  if (state.endDef && stream.match(identifiersEnd)) {
    state.endDef = false;
    return "def";
  }
  if (stream.match(keywords))
    return "keyword";
  if (stream.match(types)) {
    var lastToken = state.lastToken;
    var nextToken = (stream.match(/^\s*(.+?)\b/, false) || [])[1];
    if (lastToken === ":" || lastToken === "implements" || nextToken === "implements" || nextToken === "=") {
      return "builtin";
    } else {
      return "type";
    }
  }
  if (stream.match(builtins))
    return "builtin";
  if (stream.match(atoms))
    return "atom";
  if (stream.match(identifiers))
    return "variable";
  if (stream.match(singleOperators))
    return "operator";
  stream.next();
  return null;
}
const webIDL = {
  startState: function() {
    return {
      inComment: false,
      lastToken: "",
      startDef: false,
      endDef: false
    };
  },
  token: function(stream, state) {
    var style = readToken(stream, state);
    if (style) {
      var cur = stream.current();
      state.lastToken = cur;
      if (style === "keyword") {
        state.startDef = startDefs.test(cur);
        state.endDef = state.endDef || endDefs.test(cur);
      } else {
        state.startDef = false;
      }
    }
    return style;
  },
  languageData: {
    autocomplete: builtinArray.concat(typeArray).concat(keywordArray).concat(atomArray)
  }
};
export {
  webIDL
};
//# sourceMappingURL=webidl.51fb3de5.js.map
