import { e as StateEffect, d as EditorState, C as CharCategory, f as findClusterBreak, g as codePointAt, h as fromCodePoint, i as codePointSize, j as showPanel, k as StringStream, l as cursorCharLeft, m as insertNewlineAndIndent, n as indentSelection, o as deleteCharBackward, p as deleteCharForward, q as matchBrackets, P as Prec, b as EditorView, V as ViewPlugin, D as Decoration, t as RangeSetBuilder, S as StateField, u as undo, v as redo, w as EditorSelection, x as foldCode, y as indentMore, z as indentLess, A as cursorLineBoundaryBackward, B as cursorLineBoundaryForward, F as cursorCharBackward, G as indentUnit, H as ensureSyntaxTree, M as MapMode, I as Direction } from "./Editor.67d5f3f9.js";
import "./index.634b652b.js";
import "./account.c2944b35.js";
const basicNormalize = typeof String.prototype.normalize == "function" ? (x) => x.normalize("NFKD") : (x) => x;
class SearchCursor {
  constructor(text, query, from = 0, to = text.length, normalize, test) {
    this.test = test;
    this.value = { from: 0, to: 0 };
    this.done = false;
    this.matches = [];
    this.buffer = "";
    this.bufferPos = 0;
    this.iter = text.iterRange(from, to);
    this.bufferStart = from;
    this.normalize = normalize ? (x) => normalize(basicNormalize(x)) : basicNormalize;
    this.query = this.normalize(query);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      this.bufferStart += this.buffer.length;
      this.iter.next();
      if (this.iter.done)
        return -1;
      this.bufferPos = 0;
      this.buffer = this.iter.value;
    }
    return codePointAt(this.buffer, this.bufferPos);
  }
  next() {
    while (this.matches.length)
      this.matches.pop();
    return this.nextOverlapping();
  }
  nextOverlapping() {
    for (; ; ) {
      let next = this.peek();
      if (next < 0) {
        this.done = true;
        return this;
      }
      let str = fromCodePoint(next), start = this.bufferStart + this.bufferPos;
      this.bufferPos += codePointSize(next);
      let norm = this.normalize(str);
      for (let i = 0, pos = start; ; i++) {
        let code = norm.charCodeAt(i);
        let match = this.match(code, pos);
        if (match) {
          this.value = match;
          return this;
        }
        if (i == norm.length - 1)
          break;
        if (pos == start && i < str.length && str.charCodeAt(i) == code)
          pos++;
      }
    }
  }
  match(code, pos) {
    let match = null;
    for (let i = 0; i < this.matches.length; i += 2) {
      let index = this.matches[i], keep = false;
      if (this.query.charCodeAt(index) == code) {
        if (index == this.query.length - 1) {
          match = { from: this.matches[i + 1], to: pos + 1 };
        } else {
          this.matches[i]++;
          keep = true;
        }
      }
      if (!keep) {
        this.matches.splice(i, 2);
        i -= 2;
      }
    }
    if (this.query.charCodeAt(0) == code) {
      if (this.query.length == 1)
        match = { from: pos, to: pos + 1 };
      else
        this.matches.push(1, pos);
    }
    if (match && this.test && !this.test(match.from, match.to, this.buffer, this.bufferPos))
      match = null;
    return match;
  }
}
if (typeof Symbol != "undefined")
  SearchCursor.prototype[Symbol.iterator] = function() {
    return this;
  };
const empty = { from: -1, to: -1, match: /* @__PURE__ */ /.*/.exec("") };
const baseFlags = "gm" + (/x/.unicode == null ? "" : "u");
class RegExpCursor {
  constructor(text, query, options, from = 0, to = text.length) {
    this.text = text;
    this.to = to;
    this.curLine = "";
    this.done = false;
    this.value = empty;
    if (/\\[sWDnr]|\n|\r|\[\^/.test(query))
      return new MultilineRegExpCursor(text, query, options, from, to);
    this.re = new RegExp(query, baseFlags + ((options === null || options === void 0 ? void 0 : options.ignoreCase) ? "i" : ""));
    this.test = options === null || options === void 0 ? void 0 : options.test;
    this.iter = text.iter();
    let startLine = text.lineAt(from);
    this.curLineStart = startLine.from;
    this.matchPos = toCharEnd(text, from);
    this.getLine(this.curLineStart);
  }
  getLine(skip) {
    this.iter.next(skip);
    if (this.iter.lineBreak) {
      this.curLine = "";
    } else {
      this.curLine = this.iter.value;
      if (this.curLineStart + this.curLine.length > this.to)
        this.curLine = this.curLine.slice(0, this.to - this.curLineStart);
      this.iter.next();
    }
  }
  nextLine() {
    this.curLineStart = this.curLineStart + this.curLine.length + 1;
    if (this.curLineStart > this.to)
      this.curLine = "";
    else
      this.getLine(0);
  }
  next() {
    for (let off2 = this.matchPos - this.curLineStart; ; ) {
      this.re.lastIndex = off2;
      let match = this.matchPos <= this.to && this.re.exec(this.curLine);
      if (match) {
        let from = this.curLineStart + match.index, to = from + match[0].length;
        this.matchPos = toCharEnd(this.text, to + (from == to ? 1 : 0));
        if (from == this.curLineStart + this.curLine.length)
          this.nextLine();
        if ((from < to || from > this.value.to) && (!this.test || this.test(from, to, match))) {
          this.value = { from, to, match };
          return this;
        }
        off2 = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to) {
        this.nextLine();
        off2 = 0;
      } else {
        this.done = true;
        return this;
      }
    }
  }
}
const flattened = /* @__PURE__ */ new WeakMap();
class FlattenedDoc {
  constructor(from, text) {
    this.from = from;
    this.text = text;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(doc, from, to) {
    let cached = flattened.get(doc);
    if (!cached || cached.from >= to || cached.to <= from) {
      let flat = new FlattenedDoc(from, doc.sliceString(from, to));
      flattened.set(doc, flat);
      return flat;
    }
    if (cached.from == from && cached.to == to)
      return cached;
    let { text, from: cachedFrom } = cached;
    if (cachedFrom > from) {
      text = doc.sliceString(from, cachedFrom) + text;
      cachedFrom = from;
    }
    if (cached.to < to)
      text += doc.sliceString(cached.to, to);
    flattened.set(doc, new FlattenedDoc(cachedFrom, text));
    return new FlattenedDoc(from, text.slice(from - cachedFrom, to - cachedFrom));
  }
}
class MultilineRegExpCursor {
  constructor(text, query, options, from, to) {
    this.text = text;
    this.to = to;
    this.done = false;
    this.value = empty;
    this.matchPos = toCharEnd(text, from);
    this.re = new RegExp(query, baseFlags + ((options === null || options === void 0 ? void 0 : options.ignoreCase) ? "i" : ""));
    this.test = options === null || options === void 0 ? void 0 : options.test;
    this.flat = FlattenedDoc.get(text, from, this.chunkEnd(from + 5e3));
  }
  chunkEnd(pos) {
    return pos >= this.to ? this.to : this.text.lineAt(pos).to;
  }
  next() {
    for (; ; ) {
      let off2 = this.re.lastIndex = this.matchPos - this.flat.from;
      let match = this.re.exec(this.flat.text);
      if (match && !match[0] && match.index == off2) {
        this.re.lastIndex = off2 + 1;
        match = this.re.exec(this.flat.text);
      }
      if (match) {
        let from = this.flat.from + match.index, to = from + match[0].length;
        if ((this.flat.to >= this.to || match.index + match[0].length <= this.flat.text.length - 10) && (!this.test || this.test(from, to, match))) {
          this.value = { from, to, match };
          this.matchPos = toCharEnd(this.text, to + (from == to ? 1 : 0));
          return this;
        }
      }
      if (this.flat.to == this.to) {
        this.done = true;
        return this;
      }
      this.flat = FlattenedDoc.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
if (typeof Symbol != "undefined") {
  RegExpCursor.prototype[Symbol.iterator] = MultilineRegExpCursor.prototype[Symbol.iterator] = function() {
    return this;
  };
}
function validRegExp(source) {
  try {
    new RegExp(source, baseFlags);
    return true;
  } catch (_a) {
    return false;
  }
}
function toCharEnd(text, pos) {
  if (pos >= text.length)
    return pos;
  let line = text.lineAt(pos), next;
  while (pos < line.to && (next = line.text.charCodeAt(pos - line.from)) >= 56320 && next < 57344)
    pos++;
  return pos;
}
class SearchQuery {
  constructor(config) {
    this.search = config.search;
    this.caseSensitive = !!config.caseSensitive;
    this.literal = !!config.literal;
    this.regexp = !!config.regexp;
    this.replace = config.replace || "";
    this.valid = !!this.search && (!this.regexp || validRegExp(this.search));
    this.unquoted = this.unquote(this.search);
    this.wholeWord = !!config.wholeWord;
  }
  unquote(text) {
    return this.literal ? text : text.replace(/\\([nrt\\])/g, (_, ch) => ch == "n" ? "\n" : ch == "r" ? "\r" : ch == "t" ? "	" : "\\");
  }
  eq(other) {
    return this.search == other.search && this.replace == other.replace && this.caseSensitive == other.caseSensitive && this.regexp == other.regexp && this.wholeWord == other.wholeWord;
  }
  create() {
    return this.regexp ? new RegExpQuery(this) : new StringQuery(this);
  }
  getCursor(state, from = 0, to) {
    let st = state.doc ? state : EditorState.create({ doc: state });
    if (to == null)
      to = st.doc.length;
    return this.regexp ? regexpCursor(this, st, from, to) : stringCursor(this, st, from, to);
  }
}
class QueryType {
  constructor(spec) {
    this.spec = spec;
  }
}
function stringCursor(spec, state, from, to) {
  return new SearchCursor(state.doc, spec.unquoted, from, to, spec.caseSensitive ? void 0 : (x) => x.toLowerCase(), spec.wholeWord ? stringWordTest(state.doc, state.charCategorizer(state.selection.main.head)) : void 0);
}
function stringWordTest(doc, categorizer) {
  return (from, to, buf, bufPos) => {
    if (bufPos > from || bufPos + buf.length < to) {
      bufPos = Math.max(0, from - 2);
      buf = doc.sliceString(bufPos, Math.min(doc.length, to + 2));
    }
    return (categorizer(charBefore(buf, from - bufPos)) != CharCategory.Word || categorizer(charAfter(buf, from - bufPos)) != CharCategory.Word) && (categorizer(charAfter(buf, to - bufPos)) != CharCategory.Word || categorizer(charBefore(buf, to - bufPos)) != CharCategory.Word);
  };
}
class StringQuery extends QueryType {
  constructor(spec) {
    super(spec);
  }
  nextMatch(state, curFrom, curTo) {
    let cursor = stringCursor(this.spec, state, curTo, state.doc.length).nextOverlapping();
    if (cursor.done)
      cursor = stringCursor(this.spec, state, 0, curFrom).nextOverlapping();
    return cursor.done ? null : cursor.value;
  }
  prevMatchInRange(state, from, to) {
    for (let pos = to; ; ) {
      let start = Math.max(from, pos - 1e4 - this.spec.unquoted.length);
      let cursor = stringCursor(this.spec, state, start, pos), range = null;
      while (!cursor.nextOverlapping().done)
        range = cursor.value;
      if (range)
        return range;
      if (start == from)
        return null;
      pos -= 1e4;
    }
  }
  prevMatch(state, curFrom, curTo) {
    return this.prevMatchInRange(state, 0, curFrom) || this.prevMatchInRange(state, curTo, state.doc.length);
  }
  getReplacement(_result) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(state, limit) {
    let cursor = stringCursor(this.spec, state, 0, state.doc.length), ranges = [];
    while (!cursor.next().done) {
      if (ranges.length >= limit)
        return null;
      ranges.push(cursor.value);
    }
    return ranges;
  }
  highlight(state, from, to, add) {
    let cursor = stringCursor(this.spec, state, Math.max(0, from - this.spec.unquoted.length), Math.min(to + this.spec.unquoted.length, state.doc.length));
    while (!cursor.next().done)
      add(cursor.value.from, cursor.value.to);
  }
}
function regexpCursor(spec, state, from, to) {
  return new RegExpCursor(state.doc, spec.search, {
    ignoreCase: !spec.caseSensitive,
    test: spec.wholeWord ? regexpWordTest(state.charCategorizer(state.selection.main.head)) : void 0
  }, from, to);
}
function charBefore(str, index) {
  return str.slice(findClusterBreak(str, index, false), index);
}
function charAfter(str, index) {
  return str.slice(index, findClusterBreak(str, index));
}
function regexpWordTest(categorizer) {
  return (_from, _to, match) => !match[0].length || (categorizer(charBefore(match.input, match.index)) != CharCategory.Word || categorizer(charAfter(match.input, match.index)) != CharCategory.Word) && (categorizer(charAfter(match.input, match.index + match[0].length)) != CharCategory.Word || categorizer(charBefore(match.input, match.index + match[0].length)) != CharCategory.Word);
}
class RegExpQuery extends QueryType {
  nextMatch(state, curFrom, curTo) {
    let cursor = regexpCursor(this.spec, state, curTo, state.doc.length).next();
    if (cursor.done)
      cursor = regexpCursor(this.spec, state, 0, curFrom).next();
    return cursor.done ? null : cursor.value;
  }
  prevMatchInRange(state, from, to) {
    for (let size = 1; ; size++) {
      let start = Math.max(from, to - size * 1e4);
      let cursor = regexpCursor(this.spec, state, start, to), range = null;
      while (!cursor.next().done)
        range = cursor.value;
      if (range && (start == from || range.from > start + 10))
        return range;
      if (start == from)
        return null;
    }
  }
  prevMatch(state, curFrom, curTo) {
    return this.prevMatchInRange(state, 0, curFrom) || this.prevMatchInRange(state, curTo, state.doc.length);
  }
  getReplacement(result) {
    return this.spec.unquote(this.spec.replace.replace(/\$([$&\d+])/g, (m, i) => i == "$" ? "$" : i == "&" ? result.match[0] : i != "0" && +i < result.match.length ? result.match[i] : m));
  }
  matchAll(state, limit) {
    let cursor = regexpCursor(this.spec, state, 0, state.doc.length), ranges = [];
    while (!cursor.next().done) {
      if (ranges.length >= limit)
        return null;
      ranges.push(cursor.value);
    }
    return ranges;
  }
  highlight(state, from, to, add) {
    let cursor = regexpCursor(this.spec, state, Math.max(0, from - 250), Math.min(to + 250, state.doc.length));
    while (!cursor.next().done)
      add(cursor.value.from, cursor.value.to);
  }
}
const setSearchQuery = /* @__PURE__ */ StateEffect.define();
function initVim(CodeMirror2) {
  var Pos2 = CodeMirror2.Pos;
  function transformCursor(cm, range) {
    var vim2 = cm.state.vim;
    if (!vim2 || vim2.insertMode)
      return range.head;
    var head = vim2.sel.head;
    if (!head)
      return range.head;
    if (vim2.visualBlock) {
      if (range.head.line != head.line) {
        return;
      }
    }
    if (range.from() == range.anchor && !range.empty()) {
      if (range.head.line == head.line && range.head.ch != head.ch)
        return new Pos2(range.head.line, range.head.ch - 1);
    }
    return range.head;
  }
  var defaultKeymap = [
    { keys: "<Left>", type: "keyToKey", toKeys: "h" },
    { keys: "<Right>", type: "keyToKey", toKeys: "l" },
    { keys: "<Up>", type: "keyToKey", toKeys: "k" },
    { keys: "<Down>", type: "keyToKey", toKeys: "j" },
    { keys: "g<Up>", type: "keyToKey", toKeys: "gk" },
    { keys: "g<Down>", type: "keyToKey", toKeys: "gj" },
    { keys: "<Space>", type: "keyToKey", toKeys: "l" },
    { keys: "<BS>", type: "keyToKey", toKeys: "h", context: "normal" },
    { keys: "<Del>", type: "keyToKey", toKeys: "x", context: "normal" },
    { keys: "<C-Space>", type: "keyToKey", toKeys: "W" },
    { keys: "<C-BS>", type: "keyToKey", toKeys: "B", context: "normal" },
    { keys: "<S-Space>", type: "keyToKey", toKeys: "w" },
    { keys: "<S-BS>", type: "keyToKey", toKeys: "b", context: "normal" },
    { keys: "<C-n>", type: "keyToKey", toKeys: "j" },
    { keys: "<C-p>", type: "keyToKey", toKeys: "k" },
    { keys: "<C-[>", type: "keyToKey", toKeys: "<Esc>" },
    { keys: "<C-c>", type: "keyToKey", toKeys: "<Esc>" },
    { keys: "<C-[>", type: "keyToKey", toKeys: "<Esc>", context: "insert" },
    { keys: "<C-c>", type: "keyToKey", toKeys: "<Esc>", context: "insert" },
    { keys: "<C-Esc>", type: "keyToKey", toKeys: "<Esc>" },
    { keys: "<C-Esc>", type: "keyToKey", toKeys: "<Esc>", context: "insert" },
    { keys: "s", type: "keyToKey", toKeys: "cl", context: "normal" },
    { keys: "s", type: "keyToKey", toKeys: "c", context: "visual" },
    { keys: "S", type: "keyToKey", toKeys: "cc", context: "normal" },
    { keys: "S", type: "keyToKey", toKeys: "VdO", context: "visual" },
    { keys: "<Home>", type: "keyToKey", toKeys: "0" },
    { keys: "<End>", type: "keyToKey", toKeys: "$" },
    { keys: "<PageUp>", type: "keyToKey", toKeys: "<C-b>" },
    { keys: "<PageDown>", type: "keyToKey", toKeys: "<C-f>" },
    { keys: "<CR>", type: "keyToKey", toKeys: "j^", context: "normal" },
    { keys: "<Ins>", type: "keyToKey", toKeys: "i", context: "normal" },
    { keys: "<Ins>", type: "action", action: "toggleOverwrite", context: "insert" },
    { keys: "H", type: "motion", motion: "moveToTopLine", motionArgs: { linewise: true, toJumplist: true } },
    { keys: "M", type: "motion", motion: "moveToMiddleLine", motionArgs: { linewise: true, toJumplist: true } },
    { keys: "L", type: "motion", motion: "moveToBottomLine", motionArgs: { linewise: true, toJumplist: true } },
    { keys: "h", type: "motion", motion: "moveByCharacters", motionArgs: { forward: false } },
    { keys: "l", type: "motion", motion: "moveByCharacters", motionArgs: { forward: true } },
    { keys: "j", type: "motion", motion: "moveByLines", motionArgs: { forward: true, linewise: true } },
    { keys: "k", type: "motion", motion: "moveByLines", motionArgs: { forward: false, linewise: true } },
    { keys: "gj", type: "motion", motion: "moveByDisplayLines", motionArgs: { forward: true } },
    { keys: "gk", type: "motion", motion: "moveByDisplayLines", motionArgs: { forward: false } },
    { keys: "w", type: "motion", motion: "moveByWords", motionArgs: { forward: true, wordEnd: false } },
    { keys: "W", type: "motion", motion: "moveByWords", motionArgs: { forward: true, wordEnd: false, bigWord: true } },
    { keys: "e", type: "motion", motion: "moveByWords", motionArgs: { forward: true, wordEnd: true, inclusive: true } },
    { keys: "E", type: "motion", motion: "moveByWords", motionArgs: { forward: true, wordEnd: true, bigWord: true, inclusive: true } },
    { keys: "b", type: "motion", motion: "moveByWords", motionArgs: { forward: false, wordEnd: false } },
    { keys: "B", type: "motion", motion: "moveByWords", motionArgs: { forward: false, wordEnd: false, bigWord: true } },
    { keys: "ge", type: "motion", motion: "moveByWords", motionArgs: { forward: false, wordEnd: true, inclusive: true } },
    { keys: "gE", type: "motion", motion: "moveByWords", motionArgs: { forward: false, wordEnd: true, bigWord: true, inclusive: true } },
    { keys: "{", type: "motion", motion: "moveByParagraph", motionArgs: { forward: false, toJumplist: true } },
    { keys: "}", type: "motion", motion: "moveByParagraph", motionArgs: { forward: true, toJumplist: true } },
    { keys: "(", type: "motion", motion: "moveBySentence", motionArgs: { forward: false } },
    { keys: ")", type: "motion", motion: "moveBySentence", motionArgs: { forward: true } },
    { keys: "<C-f>", type: "motion", motion: "moveByPage", motionArgs: { forward: true } },
    { keys: "<C-b>", type: "motion", motion: "moveByPage", motionArgs: { forward: false } },
    { keys: "<C-d>", type: "motion", motion: "moveByScroll", motionArgs: { forward: true, explicitRepeat: true } },
    { keys: "<C-u>", type: "motion", motion: "moveByScroll", motionArgs: { forward: false, explicitRepeat: true } },
    { keys: "gg", type: "motion", motion: "moveToLineOrEdgeOfDocument", motionArgs: { forward: false, explicitRepeat: true, linewise: true, toJumplist: true } },
    { keys: "G", type: "motion", motion: "moveToLineOrEdgeOfDocument", motionArgs: { forward: true, explicitRepeat: true, linewise: true, toJumplist: true } },
    { keys: "g$", type: "motion", motion: "moveToEndOfDisplayLine" },
    { keys: "g^", type: "motion", motion: "moveToStartOfDisplayLine" },
    { keys: "g0", type: "motion", motion: "moveToStartOfDisplayLine" },
    { keys: "0", type: "motion", motion: "moveToStartOfLine" },
    { keys: "^", type: "motion", motion: "moveToFirstNonWhiteSpaceCharacter" },
    { keys: "+", type: "motion", motion: "moveByLines", motionArgs: { forward: true, toFirstChar: true } },
    { keys: "-", type: "motion", motion: "moveByLines", motionArgs: { forward: false, toFirstChar: true } },
    { keys: "_", type: "motion", motion: "moveByLines", motionArgs: { forward: true, toFirstChar: true, repeatOffset: -1 } },
    { keys: "$", type: "motion", motion: "moveToEol", motionArgs: { inclusive: true } },
    { keys: "%", type: "motion", motion: "moveToMatchedSymbol", motionArgs: { inclusive: true, toJumplist: true } },
    { keys: "f<character>", type: "motion", motion: "moveToCharacter", motionArgs: { forward: true, inclusive: true } },
    { keys: "F<character>", type: "motion", motion: "moveToCharacter", motionArgs: { forward: false } },
    { keys: "t<character>", type: "motion", motion: "moveTillCharacter", motionArgs: { forward: true, inclusive: true } },
    { keys: "T<character>", type: "motion", motion: "moveTillCharacter", motionArgs: { forward: false } },
    { keys: ";", type: "motion", motion: "repeatLastCharacterSearch", motionArgs: { forward: true } },
    { keys: ",", type: "motion", motion: "repeatLastCharacterSearch", motionArgs: { forward: false } },
    { keys: "'<character>", type: "motion", motion: "goToMark", motionArgs: { toJumplist: true, linewise: true } },
    { keys: "`<character>", type: "motion", motion: "goToMark", motionArgs: { toJumplist: true } },
    { keys: "]`", type: "motion", motion: "jumpToMark", motionArgs: { forward: true } },
    { keys: "[`", type: "motion", motion: "jumpToMark", motionArgs: { forward: false } },
    { keys: "]'", type: "motion", motion: "jumpToMark", motionArgs: { forward: true, linewise: true } },
    { keys: "['", type: "motion", motion: "jumpToMark", motionArgs: { forward: false, linewise: true } },
    { keys: "]p", type: "action", action: "paste", isEdit: true, actionArgs: { after: true, isEdit: true, matchIndent: true } },
    { keys: "[p", type: "action", action: "paste", isEdit: true, actionArgs: { after: false, isEdit: true, matchIndent: true } },
    { keys: "]<character>", type: "motion", motion: "moveToSymbol", motionArgs: { forward: true, toJumplist: true } },
    { keys: "[<character>", type: "motion", motion: "moveToSymbol", motionArgs: { forward: false, toJumplist: true } },
    { keys: "|", type: "motion", motion: "moveToColumn" },
    { keys: "o", type: "motion", motion: "moveToOtherHighlightedEnd", context: "visual" },
    { keys: "O", type: "motion", motion: "moveToOtherHighlightedEnd", motionArgs: { sameLine: true }, context: "visual" },
    { keys: "d", type: "operator", operator: "delete" },
    { keys: "y", type: "operator", operator: "yank" },
    { keys: "c", type: "operator", operator: "change" },
    { keys: "=", type: "operator", operator: "indentAuto" },
    { keys: ">", type: "operator", operator: "indent", operatorArgs: { indentRight: true } },
    { keys: "<", type: "operator", operator: "indent", operatorArgs: { indentRight: false } },
    { keys: "g~", type: "operator", operator: "changeCase" },
    { keys: "gu", type: "operator", operator: "changeCase", operatorArgs: { toLower: true }, isEdit: true },
    { keys: "gU", type: "operator", operator: "changeCase", operatorArgs: { toLower: false }, isEdit: true },
    { keys: "n", type: "motion", motion: "findNext", motionArgs: { forward: true, toJumplist: true } },
    { keys: "N", type: "motion", motion: "findNext", motionArgs: { forward: false, toJumplist: true } },
    { keys: "gn", type: "motion", motion: "findAndSelectNextInclusive", motionArgs: { forward: true } },
    { keys: "gN", type: "motion", motion: "findAndSelectNextInclusive", motionArgs: { forward: false } },
    { keys: "x", type: "operatorMotion", operator: "delete", motion: "moveByCharacters", motionArgs: { forward: true }, operatorMotionArgs: { visualLine: false } },
    { keys: "X", type: "operatorMotion", operator: "delete", motion: "moveByCharacters", motionArgs: { forward: false }, operatorMotionArgs: { visualLine: true } },
    { keys: "D", type: "operatorMotion", operator: "delete", motion: "moveToEol", motionArgs: { inclusive: true }, context: "normal" },
    { keys: "D", type: "operator", operator: "delete", operatorArgs: { linewise: true }, context: "visual" },
    { keys: "Y", type: "operatorMotion", operator: "yank", motion: "expandToLine", motionArgs: { linewise: true }, context: "normal" },
    { keys: "Y", type: "operator", operator: "yank", operatorArgs: { linewise: true }, context: "visual" },
    { keys: "C", type: "operatorMotion", operator: "change", motion: "moveToEol", motionArgs: { inclusive: true }, context: "normal" },
    { keys: "C", type: "operator", operator: "change", operatorArgs: { linewise: true }, context: "visual" },
    { keys: "~", type: "operatorMotion", operator: "changeCase", motion: "moveByCharacters", motionArgs: { forward: true }, operatorArgs: { shouldMoveCursor: true }, context: "normal" },
    { keys: "~", type: "operator", operator: "changeCase", context: "visual" },
    { keys: "<C-u>", type: "operatorMotion", operator: "delete", motion: "moveToStartOfLine", context: "insert" },
    { keys: "<C-w>", type: "operatorMotion", operator: "delete", motion: "moveByWords", motionArgs: { forward: false, wordEnd: false }, context: "insert" },
    { keys: "<C-w>", type: "idle", context: "normal" },
    { keys: "<C-i>", type: "action", action: "jumpListWalk", actionArgs: { forward: true } },
    { keys: "<C-o>", type: "action", action: "jumpListWalk", actionArgs: { forward: false } },
    { keys: "<C-e>", type: "action", action: "scroll", actionArgs: { forward: true, linewise: true } },
    { keys: "<C-y>", type: "action", action: "scroll", actionArgs: { forward: false, linewise: true } },
    { keys: "a", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { insertAt: "charAfter" }, context: "normal" },
    { keys: "A", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { insertAt: "eol" }, context: "normal" },
    { keys: "A", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { insertAt: "endOfSelectedArea" }, context: "visual" },
    { keys: "i", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { insertAt: "inplace" }, context: "normal" },
    { keys: "gi", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { insertAt: "lastEdit" }, context: "normal" },
    { keys: "I", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { insertAt: "firstNonBlank" }, context: "normal" },
    { keys: "gI", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { insertAt: "bol" }, context: "normal" },
    { keys: "I", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { insertAt: "startOfSelectedArea" }, context: "visual" },
    { keys: "o", type: "action", action: "newLineAndEnterInsertMode", isEdit: true, interlaceInsertRepeat: true, actionArgs: { after: true }, context: "normal" },
    { keys: "O", type: "action", action: "newLineAndEnterInsertMode", isEdit: true, interlaceInsertRepeat: true, actionArgs: { after: false }, context: "normal" },
    { keys: "v", type: "action", action: "toggleVisualMode" },
    { keys: "V", type: "action", action: "toggleVisualMode", actionArgs: { linewise: true } },
    { keys: "<C-v>", type: "action", action: "toggleVisualMode", actionArgs: { blockwise: true } },
    { keys: "<C-q>", type: "action", action: "toggleVisualMode", actionArgs: { blockwise: true } },
    { keys: "gv", type: "action", action: "reselectLastSelection" },
    { keys: "J", type: "action", action: "joinLines", isEdit: true },
    { keys: "gJ", type: "action", action: "joinLines", actionArgs: { keepSpaces: true }, isEdit: true },
    { keys: "p", type: "action", action: "paste", isEdit: true, actionArgs: { after: true, isEdit: true } },
    { keys: "P", type: "action", action: "paste", isEdit: true, actionArgs: { after: false, isEdit: true } },
    { keys: "r<character>", type: "action", action: "replace", isEdit: true },
    { keys: "@<character>", type: "action", action: "replayMacro" },
    { keys: "q<character>", type: "action", action: "enterMacroRecordMode" },
    { keys: "R", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { replace: true }, context: "normal" },
    { keys: "R", type: "operator", operator: "change", operatorArgs: { linewise: true, fullLine: true }, context: "visual", exitVisualBlock: true },
    { keys: "u", type: "action", action: "undo", context: "normal" },
    { keys: "u", type: "operator", operator: "changeCase", operatorArgs: { toLower: true }, context: "visual", isEdit: true },
    { keys: "U", type: "operator", operator: "changeCase", operatorArgs: { toLower: false }, context: "visual", isEdit: true },
    { keys: "<C-r>", type: "action", action: "redo" },
    { keys: "m<character>", type: "action", action: "setMark" },
    { keys: '"<character>', type: "action", action: "setRegister" },
    { keys: "zz", type: "action", action: "scrollToCursor", actionArgs: { position: "center" } },
    { keys: "z.", type: "action", action: "scrollToCursor", actionArgs: { position: "center" }, motion: "moveToFirstNonWhiteSpaceCharacter" },
    { keys: "zt", type: "action", action: "scrollToCursor", actionArgs: { position: "top" } },
    { keys: "z<CR>", type: "action", action: "scrollToCursor", actionArgs: { position: "top" }, motion: "moveToFirstNonWhiteSpaceCharacter" },
    { keys: "zb", type: "action", action: "scrollToCursor", actionArgs: { position: "bottom" } },
    { keys: "z-", type: "action", action: "scrollToCursor", actionArgs: { position: "bottom" }, motion: "moveToFirstNonWhiteSpaceCharacter" },
    { keys: ".", type: "action", action: "repeatLastEdit" },
    { keys: "<C-a>", type: "action", action: "incrementNumberToken", isEdit: true, actionArgs: { increase: true, backtrack: false } },
    { keys: "<C-x>", type: "action", action: "incrementNumberToken", isEdit: true, actionArgs: { increase: false, backtrack: false } },
    { keys: "<C-t>", type: "action", action: "indent", actionArgs: { indentRight: true }, context: "insert" },
    { keys: "<C-d>", type: "action", action: "indent", actionArgs: { indentRight: false }, context: "insert" },
    { keys: "a<character>", type: "motion", motion: "textObjectManipulation" },
    { keys: "i<character>", type: "motion", motion: "textObjectManipulation", motionArgs: { textObjectInner: true } },
    { keys: "/", type: "search", searchArgs: { forward: true, querySrc: "prompt", toJumplist: true } },
    { keys: "?", type: "search", searchArgs: { forward: false, querySrc: "prompt", toJumplist: true } },
    { keys: "*", type: "search", searchArgs: { forward: true, querySrc: "wordUnderCursor", wholeWordOnly: true, toJumplist: true } },
    { keys: "#", type: "search", searchArgs: { forward: false, querySrc: "wordUnderCursor", wholeWordOnly: true, toJumplist: true } },
    { keys: "g*", type: "search", searchArgs: { forward: true, querySrc: "wordUnderCursor", toJumplist: true } },
    { keys: "g#", type: "search", searchArgs: { forward: false, querySrc: "wordUnderCursor", toJumplist: true } },
    { keys: ":", type: "ex" }
  ];
  var defaultKeymapLength = defaultKeymap.length;
  var defaultExCommandMap = [
    { name: "colorscheme", shortName: "colo" },
    { name: "map" },
    { name: "imap", shortName: "im" },
    { name: "nmap", shortName: "nm" },
    { name: "vmap", shortName: "vm" },
    { name: "unmap" },
    { name: "write", shortName: "w" },
    { name: "undo", shortName: "u" },
    { name: "redo", shortName: "red" },
    { name: "set", shortName: "se" },
    { name: "setlocal", shortName: "setl" },
    { name: "setglobal", shortName: "setg" },
    { name: "sort", shortName: "sor" },
    { name: "substitute", shortName: "s", possiblyAsync: true },
    { name: "nohlsearch", shortName: "noh" },
    { name: "yank", shortName: "y" },
    { name: "delmarks", shortName: "delm" },
    { name: "registers", shortName: "reg", excludeFromCommandHistory: true },
    { name: "vglobal", shortName: "v" },
    { name: "global", shortName: "g" }
  ];
  function enterVimMode(cm) {
    cm.setOption("disableInput", true);
    cm.setOption("showCursorWhenSelecting", false);
    CodeMirror2.signal(cm, "vim-mode-change", { mode: "normal" });
    cm.on("cursorActivity", onCursorActivity);
    maybeInitVimState(cm);
    CodeMirror2.on(cm.getInputField(), "paste", getOnPasteFn(cm));
  }
  function leaveVimMode(cm) {
    cm.setOption("disableInput", false);
    cm.off("cursorActivity", onCursorActivity);
    CodeMirror2.off(cm.getInputField(), "paste", getOnPasteFn(cm));
    cm.state.vim = null;
    if (highlightTimeout)
      clearTimeout(highlightTimeout);
  }
  function detachVimMap(cm, next) {
    if (this == CodeMirror2.keyMap.vim) {
      cm.options.$customCursor = null;
      CodeMirror2.rmClass(cm.getWrapperElement(), "cm-fat-cursor");
    }
    if (!next || next.attach != attachVimMap)
      leaveVimMode(cm);
  }
  function attachVimMap(cm, prev) {
    if (this == CodeMirror2.keyMap.vim) {
      if (cm.curOp)
        cm.curOp.selectionChanged = true;
      cm.options.$customCursor = transformCursor;
      CodeMirror2.addClass(cm.getWrapperElement(), "cm-fat-cursor");
    }
    if (!prev || prev.attach != attachVimMap)
      enterVimMode(cm);
  }
  CodeMirror2.defineOption("vimMode", false, function(cm, val, prev) {
    if (val && cm.getOption("keyMap") != "vim")
      cm.setOption("keyMap", "vim");
    else if (!val && prev != CodeMirror2.Init && /^vim/.test(cm.getOption("keyMap")))
      cm.setOption("keyMap", "default");
  });
  function cmKey(key, cm) {
    if (!cm) {
      return void 0;
    }
    if (this[key]) {
      return this[key];
    }
    var vimKey2 = cmKeyToVimKey(key);
    if (!vimKey2) {
      return false;
    }
    var cmd = vimApi.findKey(cm, vimKey2);
    if (typeof cmd == "function") {
      CodeMirror2.signal(cm, "vim-keypress", vimKey2);
    }
    return cmd;
  }
  var modifiers = { Shift: "S", Ctrl: "C", Alt: "A", Cmd: "D", Mod: "A", CapsLock: "" };
  var specialKeys = { Enter: "CR", Backspace: "BS", Delete: "Del", Insert: "Ins" };
  function cmKeyToVimKey(key) {
    if (key.charAt(0) == "'") {
      return key.charAt(1);
    }
    var pieces = key.split(/-(?!$)/);
    var lastPiece = pieces[pieces.length - 1];
    if (pieces.length == 1 && pieces[0].length == 1) {
      return false;
    } else if (pieces.length == 2 && pieces[0] == "Shift" && lastPiece.length == 1) {
      return false;
    }
    var hasCharacter = false;
    for (var i = 0; i < pieces.length; i++) {
      var piece = pieces[i];
      if (piece in modifiers) {
        pieces[i] = modifiers[piece];
      } else {
        hasCharacter = true;
      }
      if (piece in specialKeys) {
        pieces[i] = specialKeys[piece];
      }
    }
    if (!hasCharacter) {
      return false;
    }
    if (isUpperCase(lastPiece)) {
      pieces[pieces.length - 1] = lastPiece.toLowerCase();
    }
    return "<" + pieces.join("-") + ">";
  }
  function getOnPasteFn(cm) {
    var vim2 = cm.state.vim;
    if (!vim2.onPasteFn) {
      vim2.onPasteFn = function() {
        if (!vim2.insertMode) {
          cm.setCursor(offsetCursor(cm.getCursor(), 0, 1));
          actions.enterInsertMode(cm, {}, vim2);
        }
      };
    }
    return vim2.onPasteFn;
  }
  var numberRegex = /[\d]/;
  var wordCharTest = [CodeMirror2.isWordChar, function(ch) {
    return ch && !CodeMirror2.isWordChar(ch) && !/\s/.test(ch);
  }], bigWordCharTest = [function(ch) {
    return /\S/.test(ch);
  }];
  function makeKeyRange(start, size) {
    var keys = [];
    for (var i = start; i < start + size; i++) {
      keys.push(String.fromCharCode(i));
    }
    return keys;
  }
  var upperCaseAlphabet = makeKeyRange(65, 26);
  var lowerCaseAlphabet = makeKeyRange(97, 26);
  var numbers = makeKeyRange(48, 10);
  var validMarks = [].concat(upperCaseAlphabet, lowerCaseAlphabet, numbers, ["<", ">"]);
  var validRegisters = [].concat(upperCaseAlphabet, lowerCaseAlphabet, numbers, ["-", '"', ".", ":", "_", "/", "+"]);
  var upperCaseChars;
  try {
    upperCaseChars = new RegExp("^[\\p{Lu}]$", "u");
  } catch (_) {
    upperCaseChars = /^[A-Z]$/;
  }
  function isLine(cm, line) {
    return line >= cm.firstLine() && line <= cm.lastLine();
  }
  function isLowerCase(k) {
    return /^[a-z]$/.test(k);
  }
  function isMatchableSymbol(k) {
    return "()[]{}".indexOf(k) != -1;
  }
  function isNumber(k) {
    return numberRegex.test(k);
  }
  function isUpperCase(k) {
    return upperCaseChars.test(k);
  }
  function isWhiteSpaceString(k) {
    return /^\s*$/.test(k);
  }
  function isEndOfSentenceSymbol(k) {
    return ".?!".indexOf(k) != -1;
  }
  function inArray(val, arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == val) {
        return true;
      }
    }
    return false;
  }
  var options = {};
  function defineOption(name, defaultValue, type, aliases, callback) {
    if (defaultValue === void 0 && !callback) {
      throw Error("defaultValue is required unless callback is provided");
    }
    if (!type) {
      type = "string";
    }
    options[name] = {
      type,
      defaultValue,
      callback
    };
    if (aliases) {
      for (var i = 0; i < aliases.length; i++) {
        options[aliases[i]] = options[name];
      }
    }
    if (defaultValue) {
      setOption(name, defaultValue);
    }
  }
  function setOption(name, value, cm, cfg) {
    var option = options[name];
    cfg = cfg || {};
    var scope = cfg.scope;
    if (!option) {
      return new Error("Unknown option: " + name);
    }
    if (option.type == "boolean") {
      if (value && value !== true) {
        return new Error("Invalid argument: " + name + "=" + value);
      } else if (value !== false) {
        value = true;
      }
    }
    if (option.callback) {
      if (scope !== "local") {
        option.callback(value, void 0);
      }
      if (scope !== "global" && cm) {
        option.callback(value, cm);
      }
    } else {
      if (scope !== "local") {
        option.value = option.type == "boolean" ? !!value : value;
      }
      if (scope !== "global" && cm) {
        cm.state.vim.options[name] = { value };
      }
    }
  }
  function getOption(name, cm, cfg) {
    var option = options[name];
    cfg = cfg || {};
    var scope = cfg.scope;
    if (!option) {
      return new Error("Unknown option: " + name);
    }
    if (option.callback) {
      var local = cm && option.callback(void 0, cm);
      if (scope !== "global" && local !== void 0) {
        return local;
      }
      if (scope !== "local") {
        return option.callback();
      }
      return;
    } else {
      var local = scope !== "global" && (cm && cm.state.vim.options[name]);
      return (local || scope !== "local" && option || {}).value;
    }
  }
  defineOption("filetype", void 0, "string", ["ft"], function(name, cm) {
    if (cm === void 0) {
      return;
    }
    if (name === void 0) {
      var mode = cm.getOption("mode");
      return mode == "null" ? "" : mode;
    } else {
      var mode = name == "" ? "null" : name;
      cm.setOption("mode", mode);
    }
  });
  var createCircularJumpList = function() {
    var size = 100;
    var pointer = -1;
    var head = 0;
    var tail = 0;
    var buffer = new Array(size);
    function add(cm, oldCur, newCur) {
      var current = pointer % size;
      var curMark = buffer[current];
      function useNextSlot(cursor) {
        var next = ++pointer % size;
        var trashMark = buffer[next];
        if (trashMark) {
          trashMark.clear();
        }
        buffer[next] = cm.setBookmark(cursor);
      }
      if (curMark) {
        var markPos = curMark.find();
        if (markPos && !cursorEqual(markPos, oldCur)) {
          useNextSlot(oldCur);
        }
      } else {
        useNextSlot(oldCur);
      }
      useNextSlot(newCur);
      head = pointer;
      tail = pointer - size + 1;
      if (tail < 0) {
        tail = 0;
      }
    }
    function move(cm, offset) {
      pointer += offset;
      if (pointer > head) {
        pointer = head;
      } else if (pointer < tail) {
        pointer = tail;
      }
      var mark = buffer[(size + pointer) % size];
      if (mark && !mark.find()) {
        var inc = offset > 0 ? 1 : -1;
        var newCur;
        var oldCur = cm.getCursor();
        do {
          pointer += inc;
          mark = buffer[(size + pointer) % size];
          if (mark && (newCur = mark.find()) && !cursorEqual(oldCur, newCur)) {
            break;
          }
        } while (pointer < head && pointer > tail);
      }
      return mark;
    }
    function find(cm, offset) {
      var oldPointer = pointer;
      var mark = move(cm, offset);
      pointer = oldPointer;
      return mark && mark.find();
    }
    return {
      cachedCursor: void 0,
      add,
      find,
      move
    };
  };
  var createInsertModeChanges = function(c) {
    if (c) {
      return {
        changes: c.changes,
        expectCursorActivityForChange: c.expectCursorActivityForChange
      };
    }
    return {
      changes: [],
      expectCursorActivityForChange: false
    };
  };
  function MacroModeState() {
    this.latestRegister = void 0;
    this.isPlaying = false;
    this.isRecording = false;
    this.replaySearchQueries = [];
    this.onRecordingDone = void 0;
    this.lastInsertModeChanges = createInsertModeChanges();
  }
  MacroModeState.prototype = {
    exitMacroRecordMode: function() {
      var macroModeState = vimGlobalState.macroModeState;
      if (macroModeState.onRecordingDone) {
        macroModeState.onRecordingDone();
      }
      macroModeState.onRecordingDone = void 0;
      macroModeState.isRecording = false;
    },
    enterMacroRecordMode: function(cm, registerName) {
      var register = vimGlobalState.registerController.getRegister(registerName);
      if (register) {
        register.clear();
        this.latestRegister = registerName;
        if (cm.openDialog) {
          var template = dom("span", { class: "cm-vim-message" }, "recording @" + registerName);
          this.onRecordingDone = cm.openDialog(template, null, { bottom: true });
        }
        this.isRecording = true;
      }
    }
  };
  function maybeInitVimState(cm) {
    if (!cm.state.vim) {
      cm.state.vim = {
        inputState: new InputState(),
        lastEditInputState: void 0,
        lastEditActionCommand: void 0,
        lastHPos: -1,
        lastHSPos: -1,
        lastMotion: null,
        marks: {},
        insertMode: false,
        insertModeRepeat: void 0,
        visualMode: false,
        visualLine: false,
        visualBlock: false,
        lastSelection: null,
        lastPastedText: null,
        sel: {},
        options: {}
      };
    }
    return cm.state.vim;
  }
  var vimGlobalState;
  function resetVimGlobalState() {
    vimGlobalState = {
      searchQuery: null,
      searchIsReversed: false,
      lastSubstituteReplacePart: void 0,
      jumpList: createCircularJumpList(),
      macroModeState: new MacroModeState(),
      lastCharacterSearch: { increment: 0, forward: true, selectedCharacter: "" },
      registerController: new RegisterController({}),
      searchHistoryController: new HistoryController(),
      exCommandHistoryController: new HistoryController()
    };
    for (var optionName in options) {
      var option = options[optionName];
      option.value = option.defaultValue;
    }
  }
  var lastInsertModeKeyTimer;
  var vimApi = {
    enterVimMode,
    leaveVimMode,
    buildKeyMap: function() {
    },
    getRegisterController: function() {
      return vimGlobalState.registerController;
    },
    resetVimGlobalState_: resetVimGlobalState,
    getVimGlobalState_: function() {
      return vimGlobalState;
    },
    maybeInitVimState_: maybeInitVimState,
    suppressErrorLogging: false,
    InsertModeKey,
    map: function(lhs, rhs, ctx) {
      exCommandDispatcher.map(lhs, rhs, ctx);
    },
    unmap: function(lhs, ctx) {
      return exCommandDispatcher.unmap(lhs, ctx);
    },
    noremap: function(lhs, rhs, ctx) {
      function toCtxArray(ctx2) {
        return ctx2 ? [ctx2] : ["normal", "insert", "visual"];
      }
      var ctxsToMap = toCtxArray(ctx);
      var actualLength = defaultKeymap.length, origLength = defaultKeymapLength;
      for (var i = actualLength - origLength; i < actualLength && ctxsToMap.length; i++) {
        var mapping = defaultKeymap[i];
        if (mapping.keys == rhs && (!ctx || !mapping.context || mapping.context === ctx) && mapping.type.substr(0, 2) !== "ex" && mapping.type.substr(0, 3) !== "key") {
          var newMapping = {};
          for (var key in mapping) {
            newMapping[key] = mapping[key];
          }
          newMapping.keys = lhs;
          if (ctx && !newMapping.context) {
            newMapping.context = ctx;
          }
          this._mapCommand(newMapping);
          var mappedCtxs = toCtxArray(mapping.context);
          ctxsToMap = ctxsToMap.filter(function(el) {
            return mappedCtxs.indexOf(el) === -1;
          });
        }
      }
    },
    mapclear: function(ctx) {
      var actualLength = defaultKeymap.length, origLength = defaultKeymapLength;
      var userKeymap = defaultKeymap.slice(0, actualLength - origLength);
      defaultKeymap = defaultKeymap.slice(actualLength - origLength);
      if (ctx) {
        for (var i = userKeymap.length - 1; i >= 0; i--) {
          var mapping = userKeymap[i];
          if (ctx !== mapping.context) {
            if (mapping.context) {
              this._mapCommand(mapping);
            } else {
              var contexts = ["normal", "insert", "visual"];
              for (var j in contexts) {
                if (contexts[j] !== ctx) {
                  var newMapping = {};
                  for (var key in mapping) {
                    newMapping[key] = mapping[key];
                  }
                  newMapping.context = contexts[j];
                  this._mapCommand(newMapping);
                }
              }
            }
          }
        }
      }
    },
    setOption,
    getOption,
    defineOption,
    defineEx: function(name, prefix, func) {
      if (!prefix) {
        prefix = name;
      } else if (name.indexOf(prefix) !== 0) {
        throw new Error('(Vim.defineEx) "' + prefix + '" is not a prefix of "' + name + '", command not registered');
      }
      exCommands[name] = func;
      exCommandDispatcher.commandMap_[prefix] = { name, shortName: prefix, type: "api" };
    },
    handleKey: function(cm, key, origin) {
      var command = this.findKey(cm, key, origin);
      if (typeof command === "function") {
        return command();
      }
    },
    multiSelectHandleKey,
    findKey: function(cm, key, origin) {
      var vim2 = maybeInitVimState(cm);
      function handleMacroRecording() {
        var macroModeState = vimGlobalState.macroModeState;
        if (macroModeState.isRecording) {
          if (key == "q") {
            macroModeState.exitMacroRecordMode();
            clearInputState(cm);
            return true;
          }
          if (origin != "mapping") {
            logKey(macroModeState, key);
          }
        }
      }
      function handleEsc() {
        if (key == "<Esc>") {
          if (vim2.visualMode) {
            exitVisualMode(cm);
          } else if (vim2.insertMode) {
            exitInsertMode(cm);
          } else {
            return;
          }
          clearInputState(cm);
          return true;
        }
      }
      function doKeyToKey(keys) {
        var match;
        while (keys) {
          match = /<\w+-.+?>|<\w+>|./.exec(keys);
          key = match[0];
          keys = keys.substring(match.index + key.length);
          vimApi.handleKey(cm, key, "mapping");
        }
      }
      function handleKeyInsertMode() {
        if (handleEsc()) {
          return true;
        }
        var keys = vim2.inputState.keyBuffer = vim2.inputState.keyBuffer + key;
        var keysAreChars = key.length == 1;
        var match = commandDispatcher.matchCommand(keys, defaultKeymap, vim2.inputState, "insert");
        while (keys.length > 1 && match.type != "full") {
          var keys = vim2.inputState.keyBuffer = keys.slice(1);
          var thisMatch = commandDispatcher.matchCommand(keys, defaultKeymap, vim2.inputState, "insert");
          if (thisMatch.type != "none") {
            match = thisMatch;
          }
        }
        if (match.type == "none") {
          clearInputState(cm);
          return false;
        } else if (match.type == "partial") {
          if (lastInsertModeKeyTimer) {
            window.clearTimeout(lastInsertModeKeyTimer);
          }
          lastInsertModeKeyTimer = window.setTimeout(
            function() {
              if (vim2.insertMode && vim2.inputState.keyBuffer) {
                clearInputState(cm);
              }
            },
            getOption("insertModeEscKeysTimeout")
          );
          return !keysAreChars;
        }
        if (lastInsertModeKeyTimer) {
          window.clearTimeout(lastInsertModeKeyTimer);
        }
        if (keysAreChars) {
          var selections = cm.listSelections();
          for (var i = 0; i < selections.length; i++) {
            var here = selections[i].head;
            cm.replaceRange("", offsetCursor(here, 0, -(keys.length - 1)), here, "+input");
          }
          vimGlobalState.macroModeState.lastInsertModeChanges.changes.pop();
        }
        clearInputState(cm);
        return match.command;
      }
      function handleKeyNonInsertMode() {
        if (handleMacroRecording() || handleEsc()) {
          return true;
        }
        var keys = vim2.inputState.keyBuffer = vim2.inputState.keyBuffer + key;
        if (/^[1-9]\d*$/.test(keys)) {
          return true;
        }
        var keysMatcher = /^(\d*)(.*)$/.exec(keys);
        if (!keysMatcher) {
          clearInputState(cm);
          return false;
        }
        var context = vim2.visualMode ? "visual" : "normal";
        var mainKey = keysMatcher[2] || keysMatcher[1];
        if (vim2.inputState.operatorShortcut && vim2.inputState.operatorShortcut.slice(-1) == mainKey) {
          mainKey = vim2.inputState.operatorShortcut;
        }
        var match = commandDispatcher.matchCommand(mainKey, defaultKeymap, vim2.inputState, context);
        if (match.type == "none") {
          clearInputState(cm);
          return false;
        } else if (match.type == "partial") {
          return true;
        } else if (match.type == "clear") {
          clearInputState(cm);
          return true;
        }
        vim2.inputState.keyBuffer = "";
        keysMatcher = /^(\d*)(.*)$/.exec(keys);
        if (keysMatcher[1] && keysMatcher[1] != "0") {
          vim2.inputState.pushRepeatDigit(keysMatcher[1]);
        }
        return match.command;
      }
      var command;
      if (vim2.insertMode) {
        command = handleKeyInsertMode();
      } else {
        command = handleKeyNonInsertMode();
      }
      if (command === false) {
        return !vim2.insertMode && key.length === 1 ? function() {
          return true;
        } : void 0;
      } else if (command === true) {
        return function() {
          return true;
        };
      } else {
        return function() {
          return cm.operation(function() {
            cm.curOp.isVimOp = true;
            try {
              if (command.type == "keyToKey") {
                doKeyToKey(command.toKeys);
              } else {
                commandDispatcher.processCommand(cm, vim2, command);
              }
            } catch (e) {
              cm.state.vim = void 0;
              maybeInitVimState(cm);
              {
                console["log"](e);
              }
              throw e;
            }
            return true;
          });
        };
      }
    },
    handleEx: function(cm, input) {
      exCommandDispatcher.processCommand(cm, input);
    },
    defineMotion,
    defineAction,
    defineOperator,
    mapCommand,
    _mapCommand,
    defineRegister,
    exitVisualMode,
    exitInsertMode
  };
  function InputState() {
    this.prefixRepeat = [];
    this.motionRepeat = [];
    this.operator = null;
    this.operatorArgs = null;
    this.motion = null;
    this.motionArgs = null;
    this.keyBuffer = [];
    this.registerName = null;
  }
  InputState.prototype.pushRepeatDigit = function(n) {
    if (!this.operator) {
      this.prefixRepeat = this.prefixRepeat.concat(n);
    } else {
      this.motionRepeat = this.motionRepeat.concat(n);
    }
  };
  InputState.prototype.getRepeat = function() {
    var repeat = 0;
    if (this.prefixRepeat.length > 0 || this.motionRepeat.length > 0) {
      repeat = 1;
      if (this.prefixRepeat.length > 0) {
        repeat *= parseInt(this.prefixRepeat.join(""), 10);
      }
      if (this.motionRepeat.length > 0) {
        repeat *= parseInt(this.motionRepeat.join(""), 10);
      }
    }
    return repeat;
  };
  function clearInputState(cm, reason) {
    cm.state.vim.inputState = new InputState();
    CodeMirror2.signal(cm, "vim-command-done", reason);
  }
  function Register(text, linewise, blockwise) {
    this.clear();
    this.keyBuffer = [text || ""];
    this.insertModeChanges = [];
    this.searchQueries = [];
    this.linewise = !!linewise;
    this.blockwise = !!blockwise;
  }
  Register.prototype = {
    setText: function(text, linewise, blockwise) {
      this.keyBuffer = [text || ""];
      this.linewise = !!linewise;
      this.blockwise = !!blockwise;
    },
    pushText: function(text, linewise) {
      if (linewise) {
        if (!this.linewise) {
          this.keyBuffer.push("\n");
        }
        this.linewise = true;
      }
      this.keyBuffer.push(text);
    },
    pushInsertModeChanges: function(changes) {
      this.insertModeChanges.push(createInsertModeChanges(changes));
    },
    pushSearchQuery: function(query) {
      this.searchQueries.push(query);
    },
    clear: function() {
      this.keyBuffer = [];
      this.insertModeChanges = [];
      this.searchQueries = [];
      this.linewise = false;
    },
    toString: function() {
      return this.keyBuffer.join("");
    }
  };
  function defineRegister(name, register) {
    var registers = vimGlobalState.registerController.registers;
    if (!name || name.length != 1) {
      throw Error("Register name must be 1 character");
    }
    if (registers[name]) {
      throw Error("Register already defined " + name);
    }
    registers[name] = register;
    validRegisters.push(name);
  }
  function RegisterController(registers) {
    this.registers = registers;
    this.unnamedRegister = registers['"'] = new Register();
    registers["."] = new Register();
    registers[":"] = new Register();
    registers["/"] = new Register();
    registers["+"] = new Register();
  }
  RegisterController.prototype = {
    pushText: function(registerName, operator, text, linewise, blockwise) {
      if (registerName === "_")
        return;
      if (linewise && text.charAt(text.length - 1) !== "\n") {
        text += "\n";
      }
      var register = this.isValidRegister(registerName) ? this.getRegister(registerName) : null;
      if (!register) {
        switch (operator) {
          case "yank":
            this.registers["0"] = new Register(text, linewise, blockwise);
            break;
          case "delete":
          case "change":
            if (text.indexOf("\n") == -1) {
              this.registers["-"] = new Register(text, linewise);
            } else {
              this.shiftNumericRegisters_();
              this.registers["1"] = new Register(text, linewise);
            }
            break;
        }
        this.unnamedRegister.setText(text, linewise, blockwise);
        return;
      }
      var append = isUpperCase(registerName);
      if (append) {
        register.pushText(text, linewise);
      } else {
        register.setText(text, linewise, blockwise);
      }
      if (registerName === "+") {
        navigator.clipboard.writeText(text);
      }
      this.unnamedRegister.setText(register.toString(), linewise);
    },
    getRegister: function(name) {
      if (!this.isValidRegister(name)) {
        return this.unnamedRegister;
      }
      name = name.toLowerCase();
      if (!this.registers[name]) {
        this.registers[name] = new Register();
      }
      return this.registers[name];
    },
    isValidRegister: function(name) {
      return name && inArray(name, validRegisters);
    },
    shiftNumericRegisters_: function() {
      for (var i = 9; i >= 2; i--) {
        this.registers[i] = this.getRegister("" + (i - 1));
      }
    }
  };
  function HistoryController() {
    this.historyBuffer = [];
    this.iterator = 0;
    this.initialPrefix = null;
  }
  HistoryController.prototype = {
    nextMatch: function(input, up) {
      var historyBuffer = this.historyBuffer;
      var dir = up ? -1 : 1;
      if (this.initialPrefix === null)
        this.initialPrefix = input;
      for (var i = this.iterator + dir; up ? i >= 0 : i < historyBuffer.length; i += dir) {
        var element = historyBuffer[i];
        for (var j = 0; j <= element.length; j++) {
          if (this.initialPrefix == element.substring(0, j)) {
            this.iterator = i;
            return element;
          }
        }
      }
      if (i >= historyBuffer.length) {
        this.iterator = historyBuffer.length;
        return this.initialPrefix;
      }
      if (i < 0)
        return input;
    },
    pushInput: function(input) {
      var index = this.historyBuffer.indexOf(input);
      if (index > -1)
        this.historyBuffer.splice(index, 1);
      if (input.length)
        this.historyBuffer.push(input);
    },
    reset: function() {
      this.initialPrefix = null;
      this.iterator = this.historyBuffer.length;
    }
  };
  var commandDispatcher = {
    matchCommand: function(keys, keyMap, inputState, context) {
      var matches = commandMatches(keys, keyMap, context, inputState);
      if (!matches.full && !matches.partial) {
        return { type: "none" };
      } else if (!matches.full && matches.partial) {
        return { type: "partial" };
      }
      var bestMatch;
      for (var i = 0; i < matches.full.length; i++) {
        var match = matches.full[i];
        if (!bestMatch) {
          bestMatch = match;
        }
      }
      if (bestMatch.keys.slice(-11) == "<character>") {
        var character = lastChar(keys);
        if (!character || character.length > 1)
          return { type: "clear" };
        inputState.selectedCharacter = character;
      }
      return { type: "full", command: bestMatch };
    },
    processCommand: function(cm, vim2, command) {
      vim2.inputState.repeatOverride = command.repeatOverride;
      switch (command.type) {
        case "motion":
          this.processMotion(cm, vim2, command);
          break;
        case "operator":
          this.processOperator(cm, vim2, command);
          break;
        case "operatorMotion":
          this.processOperatorMotion(cm, vim2, command);
          break;
        case "action":
          this.processAction(cm, vim2, command);
          break;
        case "search":
          this.processSearch(cm, vim2, command);
          break;
        case "ex":
        case "keyToEx":
          this.processEx(cm, vim2, command);
          break;
      }
    },
    processMotion: function(cm, vim2, command) {
      vim2.inputState.motion = command.motion;
      vim2.inputState.motionArgs = copyArgs(command.motionArgs);
      this.evalInput(cm, vim2);
    },
    processOperator: function(cm, vim2, command) {
      var inputState = vim2.inputState;
      if (inputState.operator) {
        if (inputState.operator == command.operator) {
          inputState.motion = "expandToLine";
          inputState.motionArgs = { linewise: true };
          this.evalInput(cm, vim2);
          return;
        } else {
          clearInputState(cm);
        }
      }
      inputState.operator = command.operator;
      inputState.operatorArgs = copyArgs(command.operatorArgs);
      if (command.keys.length > 1) {
        inputState.operatorShortcut = command.keys;
      }
      if (command.exitVisualBlock) {
        vim2.visualBlock = false;
        updateCmSelection(cm);
      }
      if (vim2.visualMode) {
        this.evalInput(cm, vim2);
      }
    },
    processOperatorMotion: function(cm, vim2, command) {
      var visualMode = vim2.visualMode;
      var operatorMotionArgs = copyArgs(command.operatorMotionArgs);
      if (operatorMotionArgs) {
        if (visualMode && operatorMotionArgs.visualLine) {
          vim2.visualLine = true;
        }
      }
      this.processOperator(cm, vim2, command);
      if (!visualMode) {
        this.processMotion(cm, vim2, command);
      }
    },
    processAction: function(cm, vim2, command) {
      var inputState = vim2.inputState;
      var repeat = inputState.getRepeat();
      var repeatIsExplicit = !!repeat;
      var actionArgs = copyArgs(command.actionArgs) || {};
      if (inputState.selectedCharacter) {
        actionArgs.selectedCharacter = inputState.selectedCharacter;
      }
      if (command.operator) {
        this.processOperator(cm, vim2, command);
      }
      if (command.motion) {
        this.processMotion(cm, vim2, command);
      }
      if (command.motion || command.operator) {
        this.evalInput(cm, vim2);
      }
      actionArgs.repeat = repeat || 1;
      actionArgs.repeatIsExplicit = repeatIsExplicit;
      actionArgs.registerName = inputState.registerName;
      clearInputState(cm);
      vim2.lastMotion = null;
      if (command.isEdit) {
        this.recordLastEdit(vim2, inputState, command);
      }
      actions[command.action](cm, actionArgs, vim2);
    },
    processSearch: function(cm, vim2, command) {
      if (!cm.getSearchCursor) {
        return;
      }
      var forward = command.searchArgs.forward;
      var wholeWordOnly = command.searchArgs.wholeWordOnly;
      getSearchState(cm).setReversed(!forward);
      var promptPrefix = forward ? "/" : "?";
      var originalQuery = getSearchState(cm).getQuery();
      var originalScrollPos = cm.getScrollInfo();
      function handleQuery(query2, ignoreCase, smartCase) {
        vimGlobalState.searchHistoryController.pushInput(query2);
        vimGlobalState.searchHistoryController.reset();
        try {
          updateSearchQuery(cm, query2, ignoreCase, smartCase);
        } catch (e) {
          showConfirm(cm, "Invalid regex: " + query2);
          clearInputState(cm);
          return;
        }
        commandDispatcher.processMotion(cm, vim2, {
          type: "motion",
          motion: "findNext",
          motionArgs: { forward: true, toJumplist: command.searchArgs.toJumplist }
        });
      }
      function onPromptClose(query2) {
        cm.scrollTo(originalScrollPos.left, originalScrollPos.top);
        handleQuery(query2, true, true);
        var macroModeState2 = vimGlobalState.macroModeState;
        if (macroModeState2.isRecording) {
          logSearchQuery(macroModeState2, query2);
        }
      }
      function onPromptKeyUp(e, query2, close) {
        var keyName = CodeMirror2.keyName(e), up, offset;
        if (keyName == "Up" || keyName == "Down") {
          up = keyName == "Up" ? true : false;
          offset = e.target ? e.target.selectionEnd : 0;
          query2 = vimGlobalState.searchHistoryController.nextMatch(query2, up) || "";
          close(query2);
          if (offset && e.target)
            e.target.selectionEnd = e.target.selectionStart = Math.min(offset, e.target.value.length);
        } else {
          if (keyName != "Left" && keyName != "Right" && keyName != "Ctrl" && keyName != "Alt" && keyName != "Shift")
            vimGlobalState.searchHistoryController.reset();
        }
        var parsedQuery;
        try {
          parsedQuery = updateSearchQuery(
            cm,
            query2,
            true,
            true
          );
        } catch (e2) {
        }
        if (parsedQuery) {
          cm.scrollIntoView(findNext(cm, !forward, parsedQuery), 30);
        } else {
          clearSearchHighlight(cm);
          cm.scrollTo(originalScrollPos.left, originalScrollPos.top);
        }
      }
      function onPromptKeyDown(e, query2, close) {
        var keyName = CodeMirror2.keyName(e);
        if (keyName == "Esc" || keyName == "Ctrl-C" || keyName == "Ctrl-[" || keyName == "Backspace" && query2 == "") {
          vimGlobalState.searchHistoryController.pushInput(query2);
          vimGlobalState.searchHistoryController.reset();
          updateSearchQuery(cm, originalQuery);
          clearSearchHighlight(cm);
          cm.scrollTo(originalScrollPos.left, originalScrollPos.top);
          CodeMirror2.e_stop(e);
          clearInputState(cm);
          close();
          cm.focus();
        } else if (keyName == "Up" || keyName == "Down") {
          CodeMirror2.e_stop(e);
        } else if (keyName == "Ctrl-U") {
          CodeMirror2.e_stop(e);
          close("");
        }
      }
      switch (command.searchArgs.querySrc) {
        case "prompt":
          var macroModeState = vimGlobalState.macroModeState;
          if (macroModeState.isPlaying) {
            var query = macroModeState.replaySearchQueries.shift();
            handleQuery(query, true, false);
          } else {
            showPrompt(cm, {
              onClose: onPromptClose,
              prefix: promptPrefix,
              desc: "(JavaScript regexp)",
              onKeyUp: onPromptKeyUp,
              onKeyDown: onPromptKeyDown
            });
          }
          break;
        case "wordUnderCursor":
          var word = expandWordUnderCursor(
            cm,
            false,
            true,
            false,
            true
          );
          var isKeyword = true;
          if (!word) {
            word = expandWordUnderCursor(
              cm,
              false,
              true,
              false,
              false
            );
            isKeyword = false;
          }
          if (!word) {
            return;
          }
          var query = cm.getLine(word.start.line).substring(
            word.start.ch,
            word.end.ch
          );
          if (isKeyword && wholeWordOnly) {
            query = "\\b" + query + "\\b";
          } else {
            query = escapeRegex(query);
          }
          vimGlobalState.jumpList.cachedCursor = cm.getCursor();
          cm.setCursor(word.start);
          handleQuery(query, true, false);
          break;
      }
    },
    processEx: function(cm, vim2, command) {
      function onPromptClose(input) {
        vimGlobalState.exCommandHistoryController.pushInput(input);
        vimGlobalState.exCommandHistoryController.reset();
        exCommandDispatcher.processCommand(cm, input);
        if (cm.state.vim)
          clearInputState(cm);
      }
      function onPromptKeyDown(e, input, close) {
        var keyName = CodeMirror2.keyName(e), up, offset;
        if (keyName == "Esc" || keyName == "Ctrl-C" || keyName == "Ctrl-[" || keyName == "Backspace" && input == "") {
          vimGlobalState.exCommandHistoryController.pushInput(input);
          vimGlobalState.exCommandHistoryController.reset();
          CodeMirror2.e_stop(e);
          clearInputState(cm);
          close();
          cm.focus();
        }
        if (keyName == "Up" || keyName == "Down") {
          CodeMirror2.e_stop(e);
          up = keyName == "Up" ? true : false;
          offset = e.target ? e.target.selectionEnd : 0;
          input = vimGlobalState.exCommandHistoryController.nextMatch(input, up) || "";
          close(input);
          if (offset && e.target)
            e.target.selectionEnd = e.target.selectionStart = Math.min(offset, e.target.value.length);
        } else if (keyName == "Ctrl-U") {
          CodeMirror2.e_stop(e);
          close("");
        } else {
          if (keyName != "Left" && keyName != "Right" && keyName != "Ctrl" && keyName != "Alt" && keyName != "Shift")
            vimGlobalState.exCommandHistoryController.reset();
        }
      }
      if (command.type == "keyToEx") {
        exCommandDispatcher.processCommand(cm, command.exArgs.input);
      } else {
        if (vim2.visualMode) {
          showPrompt(cm, {
            onClose: onPromptClose,
            prefix: ":",
            value: "'<,'>",
            onKeyDown: onPromptKeyDown,
            selectValueOnOpen: false
          });
        } else {
          showPrompt(cm, {
            onClose: onPromptClose,
            prefix: ":",
            onKeyDown: onPromptKeyDown
          });
        }
      }
    },
    evalInput: function(cm, vim2) {
      var inputState = vim2.inputState;
      var motion = inputState.motion;
      var motionArgs = inputState.motionArgs || {};
      var operator = inputState.operator;
      var operatorArgs = inputState.operatorArgs || {};
      var registerName = inputState.registerName;
      var sel = vim2.sel;
      var origHead = copyCursor(vim2.visualMode ? clipCursorToContent(cm, sel.head) : cm.getCursor("head"));
      var origAnchor = copyCursor(vim2.visualMode ? clipCursorToContent(cm, sel.anchor) : cm.getCursor("anchor"));
      var oldHead = copyCursor(origHead);
      var oldAnchor = copyCursor(origAnchor);
      var newHead, newAnchor;
      var repeat;
      if (operator) {
        this.recordLastEdit(vim2, inputState);
      }
      if (inputState.repeatOverride !== void 0) {
        repeat = inputState.repeatOverride;
      } else {
        repeat = inputState.getRepeat();
      }
      if (repeat > 0 && motionArgs.explicitRepeat) {
        motionArgs.repeatIsExplicit = true;
      } else if (motionArgs.noRepeat || !motionArgs.explicitRepeat && repeat === 0) {
        repeat = 1;
        motionArgs.repeatIsExplicit = false;
      }
      if (inputState.selectedCharacter) {
        motionArgs.selectedCharacter = operatorArgs.selectedCharacter = inputState.selectedCharacter;
      }
      motionArgs.repeat = repeat;
      clearInputState(cm);
      if (motion) {
        var motionResult = motions[motion](cm, origHead, motionArgs, vim2, inputState);
        vim2.lastMotion = motions[motion];
        if (!motionResult) {
          return;
        }
        if (motionArgs.toJumplist) {
          var jumpList = vimGlobalState.jumpList;
          var cachedCursor = jumpList.cachedCursor;
          if (cachedCursor) {
            recordJumpPosition(cm, cachedCursor, motionResult);
            delete jumpList.cachedCursor;
          } else {
            recordJumpPosition(cm, origHead, motionResult);
          }
        }
        if (motionResult instanceof Array) {
          newAnchor = motionResult[0];
          newHead = motionResult[1];
        } else {
          newHead = motionResult;
        }
        if (!newHead) {
          newHead = copyCursor(origHead);
        }
        if (vim2.visualMode) {
          if (!(vim2.visualBlock && newHead.ch === Infinity)) {
            newHead = clipCursorToContent(cm, newHead);
          }
          if (newAnchor) {
            newAnchor = clipCursorToContent(cm, newAnchor);
          }
          newAnchor = newAnchor || oldAnchor;
          sel.anchor = newAnchor;
          sel.head = newHead;
          updateCmSelection(cm);
          updateMark(
            cm,
            vim2,
            "<",
            cursorIsBefore(newAnchor, newHead) ? newAnchor : newHead
          );
          updateMark(
            cm,
            vim2,
            ">",
            cursorIsBefore(newAnchor, newHead) ? newHead : newAnchor
          );
        } else if (!operator) {
          newHead = clipCursorToContent(cm, newHead);
          cm.setCursor(newHead.line, newHead.ch);
        }
      }
      if (operator) {
        if (operatorArgs.lastSel) {
          newAnchor = oldAnchor;
          var lastSel = operatorArgs.lastSel;
          var lineOffset = Math.abs(lastSel.head.line - lastSel.anchor.line);
          var chOffset = Math.abs(lastSel.head.ch - lastSel.anchor.ch);
          if (lastSel.visualLine) {
            newHead = new Pos2(oldAnchor.line + lineOffset, oldAnchor.ch);
          } else if (lastSel.visualBlock) {
            newHead = new Pos2(oldAnchor.line + lineOffset, oldAnchor.ch + chOffset);
          } else if (lastSel.head.line == lastSel.anchor.line) {
            newHead = new Pos2(oldAnchor.line, oldAnchor.ch + chOffset);
          } else {
            newHead = new Pos2(oldAnchor.line + lineOffset, oldAnchor.ch);
          }
          vim2.visualMode = true;
          vim2.visualLine = lastSel.visualLine;
          vim2.visualBlock = lastSel.visualBlock;
          sel = vim2.sel = {
            anchor: newAnchor,
            head: newHead
          };
          updateCmSelection(cm);
        } else if (vim2.visualMode) {
          operatorArgs.lastSel = {
            anchor: copyCursor(sel.anchor),
            head: copyCursor(sel.head),
            visualBlock: vim2.visualBlock,
            visualLine: vim2.visualLine
          };
        }
        var curStart, curEnd, linewise, mode;
        var cmSel;
        if (vim2.visualMode) {
          curStart = cursorMin(sel.head, sel.anchor);
          curEnd = cursorMax(sel.head, sel.anchor);
          linewise = vim2.visualLine || operatorArgs.linewise;
          mode = vim2.visualBlock ? "block" : linewise ? "line" : "char";
          cmSel = makeCmSelection(cm, {
            anchor: curStart,
            head: curEnd
          }, mode);
          if (linewise) {
            var ranges = cmSel.ranges;
            if (mode == "block") {
              for (var i = 0; i < ranges.length; i++) {
                ranges[i].head.ch = lineLength(cm, ranges[i].head.line);
              }
            } else if (mode == "line") {
              ranges[0].head = new Pos2(ranges[0].head.line + 1, 0);
            }
          }
        } else {
          curStart = copyCursor(newAnchor || oldAnchor);
          curEnd = copyCursor(newHead || oldHead);
          if (cursorIsBefore(curEnd, curStart)) {
            var tmp = curStart;
            curStart = curEnd;
            curEnd = tmp;
          }
          linewise = motionArgs.linewise || operatorArgs.linewise;
          if (linewise) {
            expandSelectionToLine(cm, curStart, curEnd);
          } else if (motionArgs.forward) {
            clipToLine(cm, curStart, curEnd);
          }
          mode = "char";
          var exclusive = !motionArgs.inclusive || linewise;
          cmSel = makeCmSelection(cm, {
            anchor: curStart,
            head: curEnd
          }, mode, exclusive);
        }
        cm.setSelections(cmSel.ranges, cmSel.primary);
        vim2.lastMotion = null;
        operatorArgs.repeat = repeat;
        operatorArgs.registerName = registerName;
        operatorArgs.linewise = linewise;
        var operatorMoveTo = operators[operator](
          cm,
          operatorArgs,
          cmSel.ranges,
          oldAnchor,
          newHead
        );
        if (vim2.visualMode) {
          exitVisualMode(cm, operatorMoveTo != null);
        }
        if (operatorMoveTo) {
          cm.setCursor(operatorMoveTo);
        }
      }
    },
    recordLastEdit: function(vim2, inputState, actionCommand) {
      var macroModeState = vimGlobalState.macroModeState;
      if (macroModeState.isPlaying) {
        return;
      }
      vim2.lastEditInputState = inputState;
      vim2.lastEditActionCommand = actionCommand;
      macroModeState.lastInsertModeChanges.changes = [];
      macroModeState.lastInsertModeChanges.expectCursorActivityForChange = false;
      macroModeState.lastInsertModeChanges.visualBlock = vim2.visualBlock ? vim2.sel.head.line - vim2.sel.anchor.line : 0;
    }
  };
  var motions = {
    moveToTopLine: function(cm, _head, motionArgs) {
      var line = getUserVisibleLines(cm).top + motionArgs.repeat - 1;
      return new Pos2(line, findFirstNonWhiteSpaceCharacter(cm.getLine(line)));
    },
    moveToMiddleLine: function(cm) {
      var range = getUserVisibleLines(cm);
      var line = Math.floor((range.top + range.bottom) * 0.5);
      return new Pos2(line, findFirstNonWhiteSpaceCharacter(cm.getLine(line)));
    },
    moveToBottomLine: function(cm, _head, motionArgs) {
      var line = getUserVisibleLines(cm).bottom - motionArgs.repeat + 1;
      return new Pos2(line, findFirstNonWhiteSpaceCharacter(cm.getLine(line)));
    },
    expandToLine: function(_cm, head, motionArgs) {
      var cur = head;
      return new Pos2(cur.line + motionArgs.repeat - 1, Infinity);
    },
    findNext: function(cm, _head, motionArgs) {
      var state = getSearchState(cm);
      var query = state.getQuery();
      if (!query) {
        return;
      }
      var prev = !motionArgs.forward;
      prev = state.isReversed() ? !prev : prev;
      highlightSearchMatches(cm, query);
      return findNext(cm, prev, query, motionArgs.repeat);
    },
    findAndSelectNextInclusive: function(cm, _head, motionArgs, vim2, prevInputState) {
      var state = getSearchState(cm);
      var query = state.getQuery();
      if (!query) {
        return;
      }
      var prev = !motionArgs.forward;
      prev = state.isReversed() ? !prev : prev;
      var next = findNextFromAndToInclusive(cm, prev, query, motionArgs.repeat, vim2);
      if (!next) {
        return;
      }
      if (prevInputState.operator) {
        return next;
      }
      var from = next[0];
      var to = new Pos2(next[1].line, next[1].ch - 1);
      if (vim2.visualMode) {
        if (vim2.visualLine || vim2.visualBlock) {
          vim2.visualLine = false;
          vim2.visualBlock = false;
          CodeMirror2.signal(cm, "vim-mode-change", { mode: "visual", subMode: "" });
        }
        var anchor = vim2.sel.anchor;
        if (anchor) {
          if (state.isReversed()) {
            if (motionArgs.forward) {
              return [anchor, from];
            }
            return [anchor, to];
          } else {
            if (motionArgs.forward) {
              return [anchor, to];
            }
            return [anchor, from];
          }
        }
      } else {
        vim2.visualMode = true;
        vim2.visualLine = false;
        vim2.visualBlock = false;
        CodeMirror2.signal(cm, "vim-mode-change", { mode: "visual", subMode: "" });
      }
      return prev ? [to, from] : [from, to];
    },
    goToMark: function(cm, _head, motionArgs, vim2) {
      var pos = getMarkPos(cm, vim2, motionArgs.selectedCharacter);
      if (pos) {
        return motionArgs.linewise ? { line: pos.line, ch: findFirstNonWhiteSpaceCharacter(cm.getLine(pos.line)) } : pos;
      }
      return null;
    },
    moveToOtherHighlightedEnd: function(cm, _head, motionArgs, vim2) {
      if (vim2.visualBlock && motionArgs.sameLine) {
        var sel = vim2.sel;
        return [
          clipCursorToContent(cm, new Pos2(sel.anchor.line, sel.head.ch)),
          clipCursorToContent(cm, new Pos2(sel.head.line, sel.anchor.ch))
        ];
      } else {
        return [vim2.sel.head, vim2.sel.anchor];
      }
    },
    jumpToMark: function(cm, head, motionArgs, vim2) {
      var best = head;
      for (var i = 0; i < motionArgs.repeat; i++) {
        var cursor = best;
        for (var key in vim2.marks) {
          if (!isLowerCase(key)) {
            continue;
          }
          var mark = vim2.marks[key].find();
          var isWrongDirection = motionArgs.forward ? cursorIsBefore(mark, cursor) : cursorIsBefore(cursor, mark);
          if (isWrongDirection) {
            continue;
          }
          if (motionArgs.linewise && mark.line == cursor.line) {
            continue;
          }
          var equal = cursorEqual(cursor, best);
          var between = motionArgs.forward ? cursorIsBetween(cursor, mark, best) : cursorIsBetween(best, mark, cursor);
          if (equal || between) {
            best = mark;
          }
        }
      }
      if (motionArgs.linewise) {
        best = new Pos2(best.line, findFirstNonWhiteSpaceCharacter(cm.getLine(best.line)));
      }
      return best;
    },
    moveByCharacters: function(_cm, head, motionArgs) {
      var cur = head;
      var repeat = motionArgs.repeat;
      var ch = motionArgs.forward ? cur.ch + repeat : cur.ch - repeat;
      return new Pos2(cur.line, ch);
    },
    moveByLines: function(cm, head, motionArgs, vim2) {
      var cur = head;
      var endCh = cur.ch;
      switch (vim2.lastMotion) {
        case this.moveByLines:
        case this.moveByDisplayLines:
        case this.moveByScroll:
        case this.moveToColumn:
        case this.moveToEol:
          endCh = vim2.lastHPos;
          break;
        default:
          vim2.lastHPos = endCh;
      }
      var repeat = motionArgs.repeat + (motionArgs.repeatOffset || 0);
      var line = motionArgs.forward ? cur.line + repeat : cur.line - repeat;
      var first = cm.firstLine();
      var last = cm.lastLine();
      var posV = cm.findPosV(cur, motionArgs.forward ? repeat : -repeat, "line", vim2.lastHSPos);
      var hasMarkedText = motionArgs.forward ? posV.line > line : posV.line < line;
      if (hasMarkedText) {
        line = posV.line;
        endCh = posV.ch;
      }
      if (line < first && cur.line == first) {
        return this.moveToStartOfLine(cm, head, motionArgs, vim2);
      } else if (line > last && cur.line == last) {
        return moveToEol(cm, head, motionArgs, vim2, true);
      }
      if (motionArgs.toFirstChar) {
        endCh = findFirstNonWhiteSpaceCharacter(cm.getLine(line));
        vim2.lastHPos = endCh;
      }
      vim2.lastHSPos = cm.charCoords(new Pos2(line, endCh), "div").left;
      return new Pos2(line, endCh);
    },
    moveByDisplayLines: function(cm, head, motionArgs, vim2) {
      var cur = head;
      switch (vim2.lastMotion) {
        case this.moveByDisplayLines:
        case this.moveByScroll:
        case this.moveByLines:
        case this.moveToColumn:
        case this.moveToEol:
          break;
        default:
          vim2.lastHSPos = cm.charCoords(cur, "div").left;
      }
      var repeat = motionArgs.repeat;
      var res = cm.findPosV(cur, motionArgs.forward ? repeat : -repeat, "line", vim2.lastHSPos);
      if (res.hitSide) {
        if (motionArgs.forward) {
          var lastCharCoords = cm.charCoords(res, "div");
          var goalCoords = { top: lastCharCoords.top + 8, left: vim2.lastHSPos };
          var res = cm.coordsChar(goalCoords, "div");
        } else {
          var resCoords = cm.charCoords(new Pos2(cm.firstLine(), 0), "div");
          resCoords.left = vim2.lastHSPos;
          res = cm.coordsChar(resCoords, "div");
        }
      }
      vim2.lastHPos = res.ch;
      return res;
    },
    moveByPage: function(cm, head, motionArgs) {
      var curStart = head;
      var repeat = motionArgs.repeat;
      return cm.findPosV(curStart, motionArgs.forward ? repeat : -repeat, "page");
    },
    moveByParagraph: function(cm, head, motionArgs) {
      var dir = motionArgs.forward ? 1 : -1;
      return findParagraph(cm, head, motionArgs.repeat, dir);
    },
    moveBySentence: function(cm, head, motionArgs) {
      var dir = motionArgs.forward ? 1 : -1;
      return findSentence(cm, head, motionArgs.repeat, dir);
    },
    moveByScroll: function(cm, head, motionArgs, vim2) {
      var scrollbox = cm.getScrollInfo();
      var curEnd = null;
      var repeat = motionArgs.repeat;
      if (!repeat) {
        repeat = scrollbox.clientHeight / (2 * cm.defaultTextHeight());
      }
      var orig = cm.charCoords(head, "local");
      motionArgs.repeat = repeat;
      curEnd = motions.moveByDisplayLines(cm, head, motionArgs, vim2);
      if (!curEnd) {
        return null;
      }
      var dest = cm.charCoords(curEnd, "local");
      cm.scrollTo(null, scrollbox.top + dest.top - orig.top);
      return curEnd;
    },
    moveByWords: function(cm, head, motionArgs) {
      return moveToWord(
        cm,
        head,
        motionArgs.repeat,
        !!motionArgs.forward,
        !!motionArgs.wordEnd,
        !!motionArgs.bigWord
      );
    },
    moveTillCharacter: function(cm, _head, motionArgs) {
      var repeat = motionArgs.repeat;
      var curEnd = moveToCharacter(
        cm,
        repeat,
        motionArgs.forward,
        motionArgs.selectedCharacter
      );
      var increment = motionArgs.forward ? -1 : 1;
      recordLastCharacterSearch(increment, motionArgs);
      if (!curEnd)
        return null;
      curEnd.ch += increment;
      return curEnd;
    },
    moveToCharacter: function(cm, head, motionArgs) {
      var repeat = motionArgs.repeat;
      recordLastCharacterSearch(0, motionArgs);
      return moveToCharacter(
        cm,
        repeat,
        motionArgs.forward,
        motionArgs.selectedCharacter
      ) || head;
    },
    moveToSymbol: function(cm, head, motionArgs) {
      var repeat = motionArgs.repeat;
      return findSymbol(
        cm,
        repeat,
        motionArgs.forward,
        motionArgs.selectedCharacter
      ) || head;
    },
    moveToColumn: function(cm, head, motionArgs, vim2) {
      var repeat = motionArgs.repeat;
      vim2.lastHPos = repeat - 1;
      vim2.lastHSPos = cm.charCoords(head, "div").left;
      return moveToColumn(cm, repeat);
    },
    moveToEol: function(cm, head, motionArgs, vim2) {
      return moveToEol(cm, head, motionArgs, vim2, false);
    },
    moveToFirstNonWhiteSpaceCharacter: function(cm, head) {
      var cursor = head;
      return new Pos2(
        cursor.line,
        findFirstNonWhiteSpaceCharacter(cm.getLine(cursor.line))
      );
    },
    moveToMatchedSymbol: function(cm, head) {
      var cursor = head;
      var line = cursor.line;
      var ch = cursor.ch;
      var lineText = cm.getLine(line);
      var symbol;
      for (; ch < lineText.length; ch++) {
        symbol = lineText.charAt(ch);
        if (symbol && isMatchableSymbol(symbol)) {
          var style = cm.getTokenTypeAt(new Pos2(line, ch + 1));
          if (style !== "string" && style !== "comment") {
            break;
          }
        }
      }
      if (ch < lineText.length) {
        var re = ch === "<" || ch === ">" ? /[(){}[\]<>]/ : /[(){}[\]]/;
        var matched = cm.findMatchingBracket(new Pos2(line, ch), { bracketRegex: re });
        return matched.to;
      } else {
        return cursor;
      }
    },
    moveToStartOfLine: function(_cm, head) {
      return new Pos2(head.line, 0);
    },
    moveToLineOrEdgeOfDocument: function(cm, _head, motionArgs) {
      var lineNum = motionArgs.forward ? cm.lastLine() : cm.firstLine();
      if (motionArgs.repeatIsExplicit) {
        lineNum = motionArgs.repeat - cm.getOption("firstLineNumber");
      }
      return new Pos2(
        lineNum,
        findFirstNonWhiteSpaceCharacter(cm.getLine(lineNum))
      );
    },
    moveToStartOfDisplayLine: function(cm) {
      cm.execCommand("goLineLeft");
      return cm.getCursor();
    },
    moveToEndOfDisplayLine: function(cm) {
      cm.execCommand("goLineRight");
      var head = cm.getCursor();
      if (head.sticky == "before")
        head.ch--;
      return head;
    },
    textObjectManipulation: function(cm, head, motionArgs, vim2) {
      var mirroredPairs = {
        "(": ")",
        ")": "(",
        "{": "}",
        "}": "{",
        "[": "]",
        "]": "[",
        "<": ">",
        ">": "<"
      };
      var selfPaired = { "'": true, '"': true, "`": true };
      var character = motionArgs.selectedCharacter;
      if (character == "b") {
        character = "(";
      } else if (character == "B") {
        character = "{";
      }
      var inclusive = !motionArgs.textObjectInner;
      var tmp;
      if (mirroredPairs[character]) {
        tmp = selectCompanionObject(cm, head, character, inclusive);
      } else if (selfPaired[character]) {
        tmp = findBeginningAndEnd(cm, head, character, inclusive);
      } else if (character === "W") {
        tmp = expandWordUnderCursor(
          cm,
          inclusive,
          true,
          true
        );
      } else if (character === "w") {
        tmp = expandWordUnderCursor(
          cm,
          inclusive,
          true,
          false
        );
      } else if (character === "p") {
        tmp = findParagraph(cm, head, motionArgs.repeat, 0, inclusive);
        motionArgs.linewise = true;
        if (vim2.visualMode) {
          if (!vim2.visualLine) {
            vim2.visualLine = true;
          }
        } else {
          var operatorArgs = vim2.inputState.operatorArgs;
          if (operatorArgs) {
            operatorArgs.linewise = true;
          }
          tmp.end.line--;
        }
      } else if (character === "t") {
        tmp = expandTagUnderCursor(cm, head, inclusive);
      } else if (character === "s") {
        var content = cm.getLine(head.line);
        if (head.ch > 0 && isEndOfSentenceSymbol(content[head.ch])) {
          head.ch -= 1;
        }
        var end = getSentence(cm, head, motionArgs.repeat, 1, inclusive);
        var start = getSentence(cm, head, motionArgs.repeat, -1, inclusive);
        if (isWhiteSpaceString(cm.getLine(start.line)[start.ch]) && isWhiteSpaceString(cm.getLine(end.line)[end.ch - 1])) {
          start = { line: start.line, ch: start.ch + 1 };
        }
        tmp = { start, end };
      } else {
        return null;
      }
      if (!cm.state.vim.visualMode) {
        return [tmp.start, tmp.end];
      } else {
        return expandSelection(cm, tmp.start, tmp.end);
      }
    },
    repeatLastCharacterSearch: function(cm, head, motionArgs) {
      var lastSearch = vimGlobalState.lastCharacterSearch;
      var repeat = motionArgs.repeat;
      var forward = motionArgs.forward === lastSearch.forward;
      var increment = (lastSearch.increment ? 1 : 0) * (forward ? -1 : 1);
      cm.moveH(-increment, "char");
      motionArgs.inclusive = forward ? true : false;
      var curEnd = moveToCharacter(cm, repeat, forward, lastSearch.selectedCharacter);
      if (!curEnd) {
        cm.moveH(increment, "char");
        return head;
      }
      curEnd.ch += increment;
      return curEnd;
    }
  };
  function defineMotion(name, fn) {
    motions[name] = fn;
  }
  function fillArray(val, times) {
    var arr = [];
    for (var i = 0; i < times; i++) {
      arr.push(val);
    }
    return arr;
  }
  var operators = {
    change: function(cm, args, ranges) {
      var finalHead, text;
      var vim2 = cm.state.vim;
      var anchor = ranges[0].anchor, head = ranges[0].head;
      if (!vim2.visualMode) {
        text = cm.getRange(anchor, head);
        var lastState = vim2.lastEditInputState || {};
        if (lastState.motion == "moveByWords" && !isWhiteSpaceString(text)) {
          var match = /\s+$/.exec(text);
          if (match && lastState.motionArgs && lastState.motionArgs.forward) {
            head = offsetCursor(head, 0, -match[0].length);
            text = text.slice(0, -match[0].length);
          }
        }
        var prevLineEnd = new Pos2(anchor.line - 1, Number.MAX_VALUE);
        var wasLastLine = cm.firstLine() == cm.lastLine();
        if (head.line > cm.lastLine() && args.linewise && !wasLastLine) {
          cm.replaceRange("", prevLineEnd, head);
        } else {
          cm.replaceRange("", anchor, head);
        }
        if (args.linewise) {
          if (!wasLastLine) {
            cm.setCursor(prevLineEnd);
            CodeMirror2.commands.newlineAndIndent(cm);
          }
          anchor.ch = Number.MAX_VALUE;
        }
        finalHead = anchor;
      } else if (args.fullLine) {
        head.ch = Number.MAX_VALUE;
        head.line--;
        cm.setSelection(anchor, head);
        text = cm.getSelection();
        cm.replaceSelection("");
        finalHead = anchor;
      } else {
        text = cm.getSelection();
        var replacement = fillArray("", ranges.length);
        cm.replaceSelections(replacement);
        finalHead = cursorMin(ranges[0].head, ranges[0].anchor);
      }
      vimGlobalState.registerController.pushText(
        args.registerName,
        "change",
        text,
        args.linewise,
        ranges.length > 1
      );
      actions.enterInsertMode(cm, { head: finalHead }, cm.state.vim);
    },
    "delete": function(cm, args, ranges) {
      var finalHead, text;
      var vim2 = cm.state.vim;
      if (!vim2.visualBlock) {
        var anchor = ranges[0].anchor, head = ranges[0].head;
        if (args.linewise && head.line != cm.firstLine() && anchor.line == cm.lastLine() && anchor.line == head.line - 1) {
          if (anchor.line == cm.firstLine()) {
            anchor.ch = 0;
          } else {
            anchor = new Pos2(anchor.line - 1, lineLength(cm, anchor.line - 1));
          }
        }
        text = cm.getRange(anchor, head);
        cm.replaceRange("", anchor, head);
        finalHead = anchor;
        if (args.linewise) {
          finalHead = motions.moveToFirstNonWhiteSpaceCharacter(cm, anchor);
        }
      } else {
        text = cm.getSelection();
        var replacement = fillArray("", ranges.length);
        cm.replaceSelections(replacement);
        finalHead = cursorMin(ranges[0].head, ranges[0].anchor);
      }
      vimGlobalState.registerController.pushText(
        args.registerName,
        "delete",
        text,
        args.linewise,
        vim2.visualBlock
      );
      return clipCursorToContent(cm, finalHead);
    },
    indent: function(cm, args, ranges) {
      var vim2 = cm.state.vim;
      if (cm.indentMore) {
        var repeat = vim2.visualMode ? args.repeat : 1;
        for (var j = 0; j < repeat; j++) {
          if (args.indentRight)
            cm.indentMore();
          else
            cm.indentLess();
        }
      } else {
        var startLine = ranges[0].anchor.line;
        var endLine = vim2.visualBlock ? ranges[ranges.length - 1].anchor.line : ranges[0].head.line;
        var repeat = vim2.visualMode ? args.repeat : 1;
        if (args.linewise) {
          endLine--;
        }
        for (var i = startLine; i <= endLine; i++) {
          for (var j = 0; j < repeat; j++) {
            cm.indentLine(i, args.indentRight);
          }
        }
      }
      return motions.moveToFirstNonWhiteSpaceCharacter(cm, ranges[0].anchor);
    },
    indentAuto: function(cm, _args, ranges) {
      cm.execCommand("indentAuto");
      return motions.moveToFirstNonWhiteSpaceCharacter(cm, ranges[0].anchor);
    },
    changeCase: function(cm, args, ranges, oldAnchor, newHead) {
      var selections = cm.getSelections();
      var swapped = [];
      var toLower = args.toLower;
      for (var j = 0; j < selections.length; j++) {
        var toSwap = selections[j];
        var text = "";
        if (toLower === true) {
          text = toSwap.toLowerCase();
        } else if (toLower === false) {
          text = toSwap.toUpperCase();
        } else {
          for (var i = 0; i < toSwap.length; i++) {
            var character = toSwap.charAt(i);
            text += isUpperCase(character) ? character.toLowerCase() : character.toUpperCase();
          }
        }
        swapped.push(text);
      }
      cm.replaceSelections(swapped);
      if (args.shouldMoveCursor) {
        return newHead;
      } else if (!cm.state.vim.visualMode && args.linewise && ranges[0].anchor.line + 1 == ranges[0].head.line) {
        return motions.moveToFirstNonWhiteSpaceCharacter(cm, oldAnchor);
      } else if (args.linewise) {
        return oldAnchor;
      } else {
        return cursorMin(ranges[0].anchor, ranges[0].head);
      }
    },
    yank: function(cm, args, ranges, oldAnchor) {
      var vim2 = cm.state.vim;
      var text = cm.getSelection();
      var endPos = vim2.visualMode ? cursorMin(vim2.sel.anchor, vim2.sel.head, ranges[0].head, ranges[0].anchor) : oldAnchor;
      vimGlobalState.registerController.pushText(
        args.registerName,
        "yank",
        text,
        args.linewise,
        vim2.visualBlock
      );
      return endPos;
    }
  };
  function defineOperator(name, fn) {
    operators[name] = fn;
  }
  var actions = {
    jumpListWalk: function(cm, actionArgs, vim2) {
      if (vim2.visualMode) {
        return;
      }
      var repeat = actionArgs.repeat;
      var forward = actionArgs.forward;
      var jumpList = vimGlobalState.jumpList;
      var mark = jumpList.move(cm, forward ? repeat : -repeat);
      var markPos = mark ? mark.find() : void 0;
      markPos = markPos ? markPos : cm.getCursor();
      cm.setCursor(markPos);
    },
    scroll: function(cm, actionArgs, vim2) {
      if (vim2.visualMode) {
        return;
      }
      var repeat = actionArgs.repeat || 1;
      var lineHeight = cm.defaultTextHeight();
      var top = cm.getScrollInfo().top;
      var delta = lineHeight * repeat;
      var newPos = actionArgs.forward ? top + delta : top - delta;
      var cursor = copyCursor(cm.getCursor());
      var cursorCoords = cm.charCoords(cursor, "local");
      if (actionArgs.forward) {
        if (newPos > cursorCoords.top) {
          cursor.line += (newPos - cursorCoords.top) / lineHeight;
          cursor.line = Math.ceil(cursor.line);
          cm.setCursor(cursor);
          cursorCoords = cm.charCoords(cursor, "local");
          cm.scrollTo(null, cursorCoords.top);
        } else {
          cm.scrollTo(null, newPos);
        }
      } else {
        var newBottom = newPos + cm.getScrollInfo().clientHeight;
        if (newBottom < cursorCoords.bottom) {
          cursor.line -= (cursorCoords.bottom - newBottom) / lineHeight;
          cursor.line = Math.floor(cursor.line);
          cm.setCursor(cursor);
          cursorCoords = cm.charCoords(cursor, "local");
          cm.scrollTo(
            null,
            cursorCoords.bottom - cm.getScrollInfo().clientHeight
          );
        } else {
          cm.scrollTo(null, newPos);
        }
      }
    },
    scrollToCursor: function(cm, actionArgs) {
      var lineNum = cm.getCursor().line;
      var charCoords = cm.charCoords(new Pos2(lineNum, 0), "local");
      var height = cm.getScrollInfo().clientHeight;
      var y = charCoords.top;
      switch (actionArgs.position) {
        case "center":
          y = charCoords.bottom - height / 2;
          break;
        case "bottom":
          var lineLastCharPos = new Pos2(lineNum, cm.getLine(lineNum).length - 1);
          var lineLastCharCoords = cm.charCoords(lineLastCharPos, "local");
          var lineHeight = lineLastCharCoords.bottom - y;
          y = y - height + lineHeight;
          break;
      }
      cm.scrollTo(null, y);
    },
    replayMacro: function(cm, actionArgs, vim2) {
      var registerName = actionArgs.selectedCharacter;
      var repeat = actionArgs.repeat;
      var macroModeState = vimGlobalState.macroModeState;
      if (registerName == "@") {
        registerName = macroModeState.latestRegister;
      } else {
        macroModeState.latestRegister = registerName;
      }
      while (repeat--) {
        executeMacroRegister(cm, vim2, macroModeState, registerName);
      }
    },
    enterMacroRecordMode: function(cm, actionArgs) {
      var macroModeState = vimGlobalState.macroModeState;
      var registerName = actionArgs.selectedCharacter;
      if (vimGlobalState.registerController.isValidRegister(registerName)) {
        macroModeState.enterMacroRecordMode(cm, registerName);
      }
    },
    toggleOverwrite: function(cm) {
      if (!cm.state.overwrite) {
        cm.toggleOverwrite(true);
        cm.setOption("keyMap", "vim-replace");
        CodeMirror2.signal(cm, "vim-mode-change", { mode: "replace" });
      } else {
        cm.toggleOverwrite(false);
        cm.setOption("keyMap", "vim-insert");
        CodeMirror2.signal(cm, "vim-mode-change", { mode: "insert" });
      }
    },
    enterInsertMode: function(cm, actionArgs, vim2) {
      if (cm.getOption("readOnly")) {
        return;
      }
      vim2.insertMode = true;
      vim2.insertModeRepeat = actionArgs && actionArgs.repeat || 1;
      var insertAt = actionArgs ? actionArgs.insertAt : null;
      var sel = vim2.sel;
      var head = actionArgs.head || cm.getCursor("head");
      var height = cm.listSelections().length;
      if (insertAt == "eol") {
        head = new Pos2(head.line, lineLength(cm, head.line));
      } else if (insertAt == "bol") {
        head = new Pos2(head.line, 0);
      } else if (insertAt == "charAfter") {
        head = offsetCursor(head, 0, 1);
      } else if (insertAt == "firstNonBlank") {
        head = motions.moveToFirstNonWhiteSpaceCharacter(cm, head);
      } else if (insertAt == "startOfSelectedArea") {
        if (!vim2.visualMode)
          return;
        if (!vim2.visualBlock) {
          if (sel.head.line < sel.anchor.line) {
            head = sel.head;
          } else {
            head = new Pos2(sel.anchor.line, 0);
          }
        } else {
          head = new Pos2(
            Math.min(sel.head.line, sel.anchor.line),
            Math.min(sel.head.ch, sel.anchor.ch)
          );
          height = Math.abs(sel.head.line - sel.anchor.line) + 1;
        }
      } else if (insertAt == "endOfSelectedArea") {
        if (!vim2.visualMode)
          return;
        if (!vim2.visualBlock) {
          if (sel.head.line >= sel.anchor.line) {
            head = offsetCursor(sel.head, 0, 1);
          } else {
            head = new Pos2(sel.anchor.line, 0);
          }
        } else {
          head = new Pos2(
            Math.min(sel.head.line, sel.anchor.line),
            Math.max(sel.head.ch, sel.anchor.ch) + 1
          );
          height = Math.abs(sel.head.line - sel.anchor.line) + 1;
        }
      } else if (insertAt == "inplace") {
        if (vim2.visualMode) {
          return;
        }
      } else if (insertAt == "lastEdit") {
        head = getLastEditPos(cm) || head;
      }
      cm.setOption("disableInput", false);
      if (actionArgs && actionArgs.replace) {
        cm.toggleOverwrite(true);
        cm.setOption("keyMap", "vim-replace");
        CodeMirror2.signal(cm, "vim-mode-change", { mode: "replace" });
      } else {
        cm.toggleOverwrite(false);
        cm.setOption("keyMap", "vim-insert");
        CodeMirror2.signal(cm, "vim-mode-change", { mode: "insert" });
      }
      if (!vimGlobalState.macroModeState.isPlaying) {
        cm.on("change", onChange);
        CodeMirror2.on(cm.getInputField(), "keydown", onKeyEventTargetKeyDown);
      }
      if (vim2.visualMode) {
        exitVisualMode(cm);
      }
      selectForInsert(cm, head, height);
    },
    toggleVisualMode: function(cm, actionArgs, vim2) {
      var repeat = actionArgs.repeat;
      var anchor = cm.getCursor();
      var head;
      if (!vim2.visualMode) {
        vim2.visualMode = true;
        vim2.visualLine = !!actionArgs.linewise;
        vim2.visualBlock = !!actionArgs.blockwise;
        head = clipCursorToContent(
          cm,
          new Pos2(anchor.line, anchor.ch + repeat - 1)
        );
        vim2.sel = {
          anchor,
          head
        };
        CodeMirror2.signal(cm, "vim-mode-change", { mode: "visual", subMode: vim2.visualLine ? "linewise" : vim2.visualBlock ? "blockwise" : "" });
        updateCmSelection(cm);
        updateMark(cm, vim2, "<", cursorMin(anchor, head));
        updateMark(cm, vim2, ">", cursorMax(anchor, head));
      } else if (vim2.visualLine ^ actionArgs.linewise || vim2.visualBlock ^ actionArgs.blockwise) {
        vim2.visualLine = !!actionArgs.linewise;
        vim2.visualBlock = !!actionArgs.blockwise;
        CodeMirror2.signal(cm, "vim-mode-change", { mode: "visual", subMode: vim2.visualLine ? "linewise" : vim2.visualBlock ? "blockwise" : "" });
        updateCmSelection(cm);
      } else {
        exitVisualMode(cm);
      }
    },
    reselectLastSelection: function(cm, _actionArgs, vim2) {
      var lastSelection = vim2.lastSelection;
      if (vim2.visualMode) {
        updateLastSelection(cm, vim2);
      }
      if (lastSelection) {
        var anchor = lastSelection.anchorMark.find();
        var head = lastSelection.headMark.find();
        if (!anchor || !head) {
          return;
        }
        vim2.sel = {
          anchor,
          head
        };
        vim2.visualMode = true;
        vim2.visualLine = lastSelection.visualLine;
        vim2.visualBlock = lastSelection.visualBlock;
        updateCmSelection(cm);
        updateMark(cm, vim2, "<", cursorMin(anchor, head));
        updateMark(cm, vim2, ">", cursorMax(anchor, head));
        CodeMirror2.signal(cm, "vim-mode-change", {
          mode: "visual",
          subMode: vim2.visualLine ? "linewise" : vim2.visualBlock ? "blockwise" : ""
        });
      }
    },
    joinLines: function(cm, actionArgs, vim2) {
      var curStart, curEnd;
      if (vim2.visualMode) {
        curStart = cm.getCursor("anchor");
        curEnd = cm.getCursor("head");
        if (cursorIsBefore(curEnd, curStart)) {
          var tmp = curEnd;
          curEnd = curStart;
          curStart = tmp;
        }
        curEnd.ch = lineLength(cm, curEnd.line) - 1;
      } else {
        var repeat = Math.max(actionArgs.repeat, 2);
        curStart = cm.getCursor();
        curEnd = clipCursorToContent(cm, new Pos2(
          curStart.line + repeat - 1,
          Infinity
        ));
      }
      var finalCh = 0;
      for (var i = curStart.line; i < curEnd.line; i++) {
        finalCh = lineLength(cm, curStart.line);
        var tmp = new Pos2(
          curStart.line + 1,
          lineLength(cm, curStart.line + 1)
        );
        var text = cm.getRange(curStart, tmp);
        text = actionArgs.keepSpaces ? text.replace(/\n\r?/g, "") : text.replace(/\n\s*/g, " ");
        cm.replaceRange(text, curStart, tmp);
      }
      var curFinalPos = new Pos2(curStart.line, finalCh);
      if (vim2.visualMode) {
        exitVisualMode(cm, false);
      }
      cm.setCursor(curFinalPos);
    },
    newLineAndEnterInsertMode: function(cm, actionArgs, vim2) {
      vim2.insertMode = true;
      var insertAt = copyCursor(cm.getCursor());
      if (insertAt.line === cm.firstLine() && !actionArgs.after) {
        cm.replaceRange("\n", new Pos2(cm.firstLine(), 0));
        cm.setCursor(cm.firstLine(), 0);
      } else {
        insertAt.line = actionArgs.after ? insertAt.line : insertAt.line - 1;
        insertAt.ch = lineLength(cm, insertAt.line);
        cm.setCursor(insertAt);
        var newlineFn = CodeMirror2.commands.newlineAndIndentContinueComment || CodeMirror2.commands.newlineAndIndent;
        newlineFn(cm);
      }
      this.enterInsertMode(cm, { repeat: actionArgs.repeat }, vim2);
    },
    paste: function(cm, actionArgs, vim2) {
      var register = vimGlobalState.registerController.getRegister(
        actionArgs.registerName
      );
      if (actionArgs.registerName === "+") {
        navigator.clipboard.readText().then((value) => {
          this.continuePaste(cm, actionArgs, vim2, value, register);
        });
      } else {
        var text = register.toString();
        this.continuePaste(cm, actionArgs, vim2, text, register);
      }
    },
    continuePaste: function(cm, actionArgs, vim2, text, register) {
      var cur = copyCursor(cm.getCursor());
      if (!text) {
        return;
      }
      if (actionArgs.matchIndent) {
        var tabSize = cm.getOption("tabSize");
        var whitespaceLength = function(str) {
          var tabs = str.split("	").length - 1;
          var spaces = str.split(" ").length - 1;
          return tabs * tabSize + spaces * 1;
        };
        var currentLine = cm.getLine(cm.getCursor().line);
        var indent = whitespaceLength(currentLine.match(/^\s*/)[0]);
        var chompedText = text.replace(/\n$/, "");
        var wasChomped = text !== chompedText;
        var firstIndent = whitespaceLength(text.match(/^\s*/)[0]);
        var text = chompedText.replace(/^\s*/gm, function(wspace) {
          var newIndent = indent + (whitespaceLength(wspace) - firstIndent);
          if (newIndent < 0) {
            return "";
          } else if (cm.getOption("indentWithTabs")) {
            var quotient = Math.floor(newIndent / tabSize);
            return Array(quotient + 1).join("	");
          } else {
            return Array(newIndent + 1).join(" ");
          }
        });
        text += wasChomped ? "\n" : "";
      }
      if (actionArgs.repeat > 1) {
        var text = Array(actionArgs.repeat + 1).join(text);
      }
      var linewise = register.linewise;
      var blockwise = register.blockwise;
      if (blockwise) {
        text = text.split("\n");
        if (linewise) {
          text.pop();
        }
        for (var i = 0; i < text.length; i++) {
          text[i] = text[i] == "" ? " " : text[i];
        }
        cur.ch += actionArgs.after ? 1 : 0;
        cur.ch = Math.min(lineLength(cm, cur.line), cur.ch);
      } else if (linewise) {
        if (vim2.visualMode) {
          text = vim2.visualLine ? text.slice(0, -1) : "\n" + text.slice(0, text.length - 1) + "\n";
        } else if (actionArgs.after) {
          text = "\n" + text.slice(0, text.length - 1);
          cur.ch = lineLength(cm, cur.line);
        } else {
          cur.ch = 0;
        }
      } else {
        cur.ch += actionArgs.after ? 1 : 0;
      }
      var curPosFinal;
      var idx;
      if (vim2.visualMode) {
        vim2.lastPastedText = text;
        var lastSelectionCurEnd;
        var selectedArea = getSelectedAreaRange(cm, vim2);
        var selectionStart = selectedArea[0];
        var selectionEnd = selectedArea[1];
        var selectedText = cm.getSelection();
        var selections = cm.listSelections();
        var emptyStrings = new Array(selections.length).join("1").split("1");
        if (vim2.lastSelection) {
          lastSelectionCurEnd = vim2.lastSelection.headMark.find();
        }
        vimGlobalState.registerController.unnamedRegister.setText(selectedText);
        if (blockwise) {
          cm.replaceSelections(emptyStrings);
          selectionEnd = new Pos2(selectionStart.line + text.length - 1, selectionStart.ch);
          cm.setCursor(selectionStart);
          selectBlock(cm, selectionEnd);
          cm.replaceSelections(text);
          curPosFinal = selectionStart;
        } else if (vim2.visualBlock) {
          cm.replaceSelections(emptyStrings);
          cm.setCursor(selectionStart);
          cm.replaceRange(text, selectionStart, selectionStart);
          curPosFinal = selectionStart;
        } else {
          cm.replaceRange(text, selectionStart, selectionEnd);
          curPosFinal = cm.posFromIndex(cm.indexFromPos(selectionStart) + text.length - 1);
        }
        if (lastSelectionCurEnd) {
          vim2.lastSelection.headMark = cm.setBookmark(lastSelectionCurEnd);
        }
        if (linewise) {
          curPosFinal.ch = 0;
        }
      } else {
        if (blockwise) {
          cm.setCursor(cur);
          for (var i = 0; i < text.length; i++) {
            var line = cur.line + i;
            if (line > cm.lastLine()) {
              cm.replaceRange("\n", new Pos2(line, 0));
            }
            var lastCh = lineLength(cm, line);
            if (lastCh < cur.ch) {
              extendLineToColumn(cm, line, cur.ch);
            }
          }
          cm.setCursor(cur);
          selectBlock(cm, new Pos2(cur.line + text.length - 1, cur.ch));
          cm.replaceSelections(text);
          curPosFinal = cur;
        } else {
          cm.replaceRange(text, cur);
          if (linewise && actionArgs.after) {
            curPosFinal = new Pos2(
              cur.line + 1,
              findFirstNonWhiteSpaceCharacter(cm.getLine(cur.line + 1))
            );
          } else if (linewise && !actionArgs.after) {
            curPosFinal = new Pos2(
              cur.line,
              findFirstNonWhiteSpaceCharacter(cm.getLine(cur.line))
            );
          } else if (!linewise && actionArgs.after) {
            idx = cm.indexFromPos(cur);
            curPosFinal = cm.posFromIndex(idx + text.length - 1);
          } else {
            idx = cm.indexFromPos(cur);
            curPosFinal = cm.posFromIndex(idx + text.length);
          }
        }
      }
      if (vim2.visualMode) {
        exitVisualMode(cm, false);
      }
      cm.setCursor(curPosFinal);
    },
    undo: function(cm, actionArgs) {
      cm.operation(function() {
        repeatFn(cm, CodeMirror2.commands.undo, actionArgs.repeat)();
        cm.setCursor(cm.getCursor("anchor"));
      });
    },
    redo: function(cm, actionArgs) {
      repeatFn(cm, CodeMirror2.commands.redo, actionArgs.repeat)();
    },
    setRegister: function(_cm, actionArgs, vim2) {
      vim2.inputState.registerName = actionArgs.selectedCharacter;
    },
    setMark: function(cm, actionArgs, vim2) {
      var markName = actionArgs.selectedCharacter;
      updateMark(cm, vim2, markName, cm.getCursor());
    },
    replace: function(cm, actionArgs, vim2) {
      var replaceWith = actionArgs.selectedCharacter;
      var curStart = cm.getCursor();
      var replaceTo;
      var curEnd;
      var selections = cm.listSelections();
      if (vim2.visualMode) {
        curStart = cm.getCursor("start");
        curEnd = cm.getCursor("end");
      } else {
        var line = cm.getLine(curStart.line);
        replaceTo = curStart.ch + actionArgs.repeat;
        if (replaceTo > line.length) {
          replaceTo = line.length;
        }
        curEnd = new Pos2(curStart.line, replaceTo);
      }
      if (replaceWith == "\n") {
        if (!vim2.visualMode)
          cm.replaceRange("", curStart, curEnd);
        (CodeMirror2.commands.newlineAndIndentContinueComment || CodeMirror2.commands.newlineAndIndent)(cm);
      } else {
        var replaceWithStr = cm.getRange(curStart, curEnd);
        replaceWithStr = replaceWithStr.replace(/[^\n]/g, replaceWith);
        if (vim2.visualBlock) {
          var spaces = new Array(cm.getOption("tabSize") + 1).join(" ");
          replaceWithStr = cm.getSelection();
          replaceWithStr = replaceWithStr.replace(/\t/g, spaces).replace(/[^\n]/g, replaceWith).split("\n");
          cm.replaceSelections(replaceWithStr);
        } else {
          cm.replaceRange(replaceWithStr, curStart, curEnd);
        }
        if (vim2.visualMode) {
          curStart = cursorIsBefore(selections[0].anchor, selections[0].head) ? selections[0].anchor : selections[0].head;
          cm.setCursor(curStart);
          exitVisualMode(cm, false);
        } else {
          cm.setCursor(offsetCursor(curEnd, 0, -1));
        }
      }
    },
    incrementNumberToken: function(cm, actionArgs) {
      var cur = cm.getCursor();
      var lineStr = cm.getLine(cur.line);
      var re = /(-?)(?:(0x)([\da-f]+)|(0b|0|)(\d+))/gi;
      var match;
      var start;
      var end;
      var numberStr;
      while ((match = re.exec(lineStr)) !== null) {
        start = match.index;
        end = start + match[0].length;
        if (cur.ch < end)
          break;
      }
      if (!actionArgs.backtrack && end <= cur.ch)
        return;
      if (match) {
        var baseStr = match[2] || match[4];
        var digits = match[3] || match[5];
        var increment = actionArgs.increase ? 1 : -1;
        var base = { "0b": 2, "0": 8, "": 10, "0x": 16 }[baseStr.toLowerCase()];
        var number = parseInt(match[1] + digits, base) + increment * actionArgs.repeat;
        numberStr = number.toString(base);
        var zeroPadding = baseStr ? new Array(digits.length - numberStr.length + 1 + match[1].length).join("0") : "";
        if (numberStr.charAt(0) === "-") {
          numberStr = "-" + baseStr + zeroPadding + numberStr.substr(1);
        } else {
          numberStr = baseStr + zeroPadding + numberStr;
        }
        var from = new Pos2(cur.line, start);
        var to = new Pos2(cur.line, end);
        cm.replaceRange(numberStr, from, to);
      } else {
        return;
      }
      cm.setCursor(new Pos2(cur.line, start + numberStr.length - 1));
    },
    repeatLastEdit: function(cm, actionArgs, vim2) {
      var lastEditInputState = vim2.lastEditInputState;
      if (!lastEditInputState) {
        return;
      }
      var repeat = actionArgs.repeat;
      if (repeat && actionArgs.repeatIsExplicit) {
        vim2.lastEditInputState.repeatOverride = repeat;
      } else {
        repeat = vim2.lastEditInputState.repeatOverride || repeat;
      }
      repeatLastEdit(cm, vim2, repeat, false);
    },
    indent: function(cm, actionArgs) {
      cm.indentLine(cm.getCursor().line, actionArgs.indentRight);
    },
    exitInsertMode
  };
  function defineAction(name, fn) {
    actions[name] = fn;
  }
  function clipCursorToContent(cm, cur) {
    var vim2 = cm.state.vim;
    var includeLineBreak = vim2.insertMode || vim2.visualMode;
    var line = Math.min(Math.max(cm.firstLine(), cur.line), cm.lastLine());
    var maxCh = lineLength(cm, line) - 1 + !!includeLineBreak;
    var ch = Math.min(Math.max(0, cur.ch), maxCh);
    return new Pos2(line, ch);
  }
  function copyArgs(args) {
    var ret = {};
    for (var prop in args) {
      if (args.hasOwnProperty(prop)) {
        ret[prop] = args[prop];
      }
    }
    return ret;
  }
  function offsetCursor(cur, offsetLine, offsetCh) {
    if (typeof offsetLine === "object") {
      offsetCh = offsetLine.ch;
      offsetLine = offsetLine.line;
    }
    return new Pos2(cur.line + offsetLine, cur.ch + offsetCh);
  }
  function commandMatches(keys, keyMap, context, inputState) {
    var match, partial = [], full = [];
    for (var i = 0; i < keyMap.length; i++) {
      var command = keyMap[i];
      if (context == "insert" && command.context != "insert" || command.context && command.context != context || inputState.operator && command.type == "action" || !(match = commandMatch(keys, command.keys))) {
        continue;
      }
      if (match == "partial") {
        partial.push(command);
      }
      if (match == "full") {
        full.push(command);
      }
    }
    return {
      partial: partial.length && partial,
      full: full.length && full
    };
  }
  function commandMatch(pressed, mapped) {
    if (mapped.slice(-11) == "<character>") {
      var prefixLen = mapped.length - 11;
      var pressedPrefix = pressed.slice(0, prefixLen);
      var mappedPrefix = mapped.slice(0, prefixLen);
      return pressedPrefix == mappedPrefix && pressed.length > prefixLen ? "full" : mappedPrefix.indexOf(pressedPrefix) == 0 ? "partial" : false;
    } else {
      return pressed == mapped ? "full" : mapped.indexOf(pressed) == 0 ? "partial" : false;
    }
  }
  function lastChar(keys) {
    var match = /^.*(<[^>]+>)$/.exec(keys);
    var selectedCharacter = match ? match[1] : keys.slice(-1);
    if (selectedCharacter.length > 1) {
      switch (selectedCharacter) {
        case "<CR>":
          selectedCharacter = "\n";
          break;
        case "<Space>":
          selectedCharacter = " ";
          break;
        default:
          selectedCharacter = "";
          break;
      }
    }
    return selectedCharacter;
  }
  function repeatFn(cm, fn, repeat) {
    return function() {
      for (var i = 0; i < repeat; i++) {
        fn(cm);
      }
    };
  }
  function copyCursor(cur) {
    return new Pos2(cur.line, cur.ch);
  }
  function cursorEqual(cur1, cur2) {
    return cur1.ch == cur2.ch && cur1.line == cur2.line;
  }
  function cursorIsBefore(cur1, cur2) {
    if (cur1.line < cur2.line) {
      return true;
    }
    if (cur1.line == cur2.line && cur1.ch < cur2.ch) {
      return true;
    }
    return false;
  }
  function cursorMin(cur1, cur2) {
    if (arguments.length > 2) {
      cur2 = cursorMin.apply(void 0, Array.prototype.slice.call(arguments, 1));
    }
    return cursorIsBefore(cur1, cur2) ? cur1 : cur2;
  }
  function cursorMax(cur1, cur2) {
    if (arguments.length > 2) {
      cur2 = cursorMax.apply(void 0, Array.prototype.slice.call(arguments, 1));
    }
    return cursorIsBefore(cur1, cur2) ? cur2 : cur1;
  }
  function cursorIsBetween(cur1, cur2, cur3) {
    var cur1before2 = cursorIsBefore(cur1, cur2);
    var cur2before3 = cursorIsBefore(cur2, cur3);
    return cur1before2 && cur2before3;
  }
  function lineLength(cm, lineNum) {
    return cm.getLine(lineNum).length;
  }
  function trim(s) {
    if (s.trim) {
      return s.trim();
    }
    return s.replace(/^\s+|\s+$/g, "");
  }
  function escapeRegex(s) {
    return s.replace(/([.?*+$\[\]\/\\(){}|\-])/g, "\\$1");
  }
  function extendLineToColumn(cm, lineNum, column) {
    var endCh = lineLength(cm, lineNum);
    var spaces = new Array(column - endCh + 1).join(" ");
    cm.setCursor(new Pos2(lineNum, endCh));
    cm.replaceRange(spaces, cm.getCursor());
  }
  function selectBlock(cm, selectionEnd) {
    var selections = [], ranges = cm.listSelections();
    var head = copyCursor(cm.clipPos(selectionEnd));
    var isClipped = !cursorEqual(selectionEnd, head);
    var curHead = cm.getCursor("head");
    var primIndex = getIndex(ranges, curHead);
    var wasClipped = cursorEqual(ranges[primIndex].head, ranges[primIndex].anchor);
    var max = ranges.length - 1;
    var index = max - primIndex > primIndex ? max : 0;
    var base = ranges[index].anchor;
    var firstLine = Math.min(base.line, head.line);
    var lastLine = Math.max(base.line, head.line);
    var baseCh = base.ch, headCh = head.ch;
    var dir = ranges[index].head.ch - baseCh;
    var newDir = headCh - baseCh;
    if (dir > 0 && newDir <= 0) {
      baseCh++;
      if (!isClipped) {
        headCh--;
      }
    } else if (dir < 0 && newDir >= 0) {
      baseCh--;
      if (!wasClipped) {
        headCh++;
      }
    } else if (dir < 0 && newDir == -1) {
      baseCh--;
      headCh++;
    }
    for (var line = firstLine; line <= lastLine; line++) {
      var range = { anchor: new Pos2(line, baseCh), head: new Pos2(line, headCh) };
      selections.push(range);
    }
    cm.setSelections(selections);
    selectionEnd.ch = headCh;
    base.ch = baseCh;
    return base;
  }
  function selectForInsert(cm, head, height) {
    var sel = [];
    for (var i = 0; i < height; i++) {
      var lineHead = offsetCursor(head, i, 0);
      sel.push({ anchor: lineHead, head: lineHead });
    }
    cm.setSelections(sel, 0);
  }
  function getIndex(ranges, cursor, end) {
    for (var i = 0; i < ranges.length; i++) {
      var atAnchor = end != "head" && cursorEqual(ranges[i].anchor, cursor);
      var atHead = end != "anchor" && cursorEqual(ranges[i].head, cursor);
      if (atAnchor || atHead) {
        return i;
      }
    }
    return -1;
  }
  function getSelectedAreaRange(cm, vim2) {
    var lastSelection = vim2.lastSelection;
    var getCurrentSelectedAreaRange = function() {
      var selections = cm.listSelections();
      var start = selections[0];
      var end = selections[selections.length - 1];
      var selectionStart = cursorIsBefore(start.anchor, start.head) ? start.anchor : start.head;
      var selectionEnd = cursorIsBefore(end.anchor, end.head) ? end.head : end.anchor;
      return [selectionStart, selectionEnd];
    };
    var getLastSelectedAreaRange = function() {
      var selectionStart = cm.getCursor();
      var selectionEnd = cm.getCursor();
      var block = lastSelection.visualBlock;
      if (block) {
        var width = block.width;
        var height = block.height;
        selectionEnd = new Pos2(selectionStart.line + height, selectionStart.ch + width);
        var selections = [];
        for (var i = selectionStart.line; i < selectionEnd.line; i++) {
          var anchor = new Pos2(i, selectionStart.ch);
          var head = new Pos2(i, selectionEnd.ch);
          var range = { anchor, head };
          selections.push(range);
        }
        cm.setSelections(selections);
      } else {
        var start = lastSelection.anchorMark.find();
        var end = lastSelection.headMark.find();
        var line = end.line - start.line;
        var ch = end.ch - start.ch;
        selectionEnd = { line: selectionEnd.line + line, ch: line ? selectionEnd.ch : ch + selectionEnd.ch };
        if (lastSelection.visualLine) {
          selectionStart = new Pos2(selectionStart.line, 0);
          selectionEnd = new Pos2(selectionEnd.line, lineLength(cm, selectionEnd.line));
        }
        cm.setSelection(selectionStart, selectionEnd);
      }
      return [selectionStart, selectionEnd];
    };
    if (!vim2.visualMode) {
      return getLastSelectedAreaRange();
    } else {
      return getCurrentSelectedAreaRange();
    }
  }
  function updateLastSelection(cm, vim2) {
    var anchor = vim2.sel.anchor;
    var head = vim2.sel.head;
    if (vim2.lastPastedText) {
      head = cm.posFromIndex(cm.indexFromPos(anchor) + vim2.lastPastedText.length);
      vim2.lastPastedText = null;
    }
    vim2.lastSelection = {
      "anchorMark": cm.setBookmark(anchor),
      "headMark": cm.setBookmark(head),
      "anchor": copyCursor(anchor),
      "head": copyCursor(head),
      "visualMode": vim2.visualMode,
      "visualLine": vim2.visualLine,
      "visualBlock": vim2.visualBlock
    };
  }
  function expandSelection(cm, start, end) {
    var sel = cm.state.vim.sel;
    var head = sel.head;
    var anchor = sel.anchor;
    var tmp;
    if (cursorIsBefore(end, start)) {
      tmp = end;
      end = start;
      start = tmp;
    }
    if (cursorIsBefore(head, anchor)) {
      head = cursorMin(start, head);
      anchor = cursorMax(anchor, end);
    } else {
      anchor = cursorMin(start, anchor);
      head = cursorMax(head, end);
      head = offsetCursor(head, 0, -1);
      if (head.ch == -1 && head.line != cm.firstLine()) {
        head = new Pos2(head.line - 1, lineLength(cm, head.line - 1));
      }
    }
    return [anchor, head];
  }
  function updateCmSelection(cm, sel, mode) {
    var vim2 = cm.state.vim;
    sel = sel || vim2.sel;
    var mode = mode || vim2.visualLine ? "line" : vim2.visualBlock ? "block" : "char";
    var cmSel = makeCmSelection(cm, sel, mode);
    cm.setSelections(cmSel.ranges, cmSel.primary);
  }
  function makeCmSelection(cm, sel, mode, exclusive) {
    var head = copyCursor(sel.head);
    var anchor = copyCursor(sel.anchor);
    if (mode == "char") {
      var headOffset = !exclusive && !cursorIsBefore(sel.head, sel.anchor) ? 1 : 0;
      var anchorOffset = cursorIsBefore(sel.head, sel.anchor) ? 1 : 0;
      head = offsetCursor(sel.head, 0, headOffset);
      anchor = offsetCursor(sel.anchor, 0, anchorOffset);
      return {
        ranges: [{ anchor, head }],
        primary: 0
      };
    } else if (mode == "line") {
      if (!cursorIsBefore(sel.head, sel.anchor)) {
        anchor.ch = 0;
        var lastLine = cm.lastLine();
        if (head.line > lastLine) {
          head.line = lastLine;
        }
        head.ch = lineLength(cm, head.line);
      } else {
        head.ch = 0;
        anchor.ch = lineLength(cm, anchor.line);
      }
      return {
        ranges: [{ anchor, head }],
        primary: 0
      };
    } else if (mode == "block") {
      var top = Math.min(anchor.line, head.line), fromCh = anchor.ch, bottom = Math.max(anchor.line, head.line), toCh = head.ch;
      if (fromCh < toCh) {
        toCh += 1;
      } else {
        fromCh += 1;
      }
      var height = bottom - top + 1;
      var primary = head.line == top ? 0 : height - 1;
      var ranges = [];
      for (var i = 0; i < height; i++) {
        ranges.push({
          anchor: new Pos2(top + i, fromCh),
          head: new Pos2(top + i, toCh)
        });
      }
      return {
        ranges,
        primary
      };
    }
  }
  function getHead(cm) {
    var cur = cm.getCursor("head");
    if (cm.getSelection().length == 1) {
      cur = cursorMin(cur, cm.getCursor("anchor"));
    }
    return cur;
  }
  function exitVisualMode(cm, moveHead) {
    var vim2 = cm.state.vim;
    if (moveHead !== false) {
      cm.setCursor(clipCursorToContent(cm, vim2.sel.head));
    }
    updateLastSelection(cm, vim2);
    vim2.visualMode = false;
    vim2.visualLine = false;
    vim2.visualBlock = false;
    if (!vim2.insertMode)
      CodeMirror2.signal(cm, "vim-mode-change", { mode: "normal" });
  }
  function clipToLine(cm, curStart, curEnd) {
    var selection = cm.getRange(curStart, curEnd);
    if (/\n\s*$/.test(selection)) {
      var lines = selection.split("\n");
      lines.pop();
      var line;
      for (var line = lines.pop(); lines.length > 0 && line && isWhiteSpaceString(line); line = lines.pop()) {
        curEnd.line--;
        curEnd.ch = 0;
      }
      if (line) {
        curEnd.line--;
        curEnd.ch = lineLength(cm, curEnd.line);
      } else {
        curEnd.ch = 0;
      }
    }
  }
  function expandSelectionToLine(_cm, curStart, curEnd) {
    curStart.ch = 0;
    curEnd.ch = 0;
    curEnd.line++;
  }
  function findFirstNonWhiteSpaceCharacter(text) {
    if (!text) {
      return 0;
    }
    var firstNonWS = text.search(/\S/);
    return firstNonWS == -1 ? text.length : firstNonWS;
  }
  function expandWordUnderCursor(cm, inclusive, _forward, bigWord, noSymbol) {
    var cur = getHead(cm);
    var line = cm.getLine(cur.line);
    var idx = cur.ch;
    var test = noSymbol ? wordCharTest[0] : bigWordCharTest[0];
    while (!test(line.charAt(idx))) {
      idx++;
      if (idx >= line.length) {
        return null;
      }
    }
    if (bigWord) {
      test = bigWordCharTest[0];
    } else {
      test = wordCharTest[0];
      if (!test(line.charAt(idx))) {
        test = wordCharTest[1];
      }
    }
    var end = idx, start = idx;
    while (test(line.charAt(end)) && end < line.length) {
      end++;
    }
    while (test(line.charAt(start)) && start >= 0) {
      start--;
    }
    start++;
    if (inclusive) {
      var wordEnd = end;
      while (/\s/.test(line.charAt(end)) && end < line.length) {
        end++;
      }
      if (wordEnd == end) {
        var wordStart = start;
        while (/\s/.test(line.charAt(start - 1)) && start > 0) {
          start--;
        }
        if (!start) {
          start = wordStart;
        }
      }
    }
    return { start: new Pos2(cur.line, start), end: new Pos2(cur.line, end) };
  }
  function expandTagUnderCursor(cm, head, inclusive) {
    var cur = head;
    if (!CodeMirror2.findMatchingTag || !CodeMirror2.findEnclosingTag) {
      return { start: cur, end: cur };
    }
    var tags = CodeMirror2.findMatchingTag(cm, head) || CodeMirror2.findEnclosingTag(cm, head);
    if (!tags || !tags.open || !tags.close) {
      return { start: cur, end: cur };
    }
    if (inclusive) {
      return { start: tags.open.from, end: tags.close.to };
    }
    return { start: tags.open.to, end: tags.close.from };
  }
  function recordJumpPosition(cm, oldCur, newCur) {
    if (!cursorEqual(oldCur, newCur)) {
      vimGlobalState.jumpList.add(cm, oldCur, newCur);
    }
  }
  function recordLastCharacterSearch(increment, args) {
    vimGlobalState.lastCharacterSearch.increment = increment;
    vimGlobalState.lastCharacterSearch.forward = args.forward;
    vimGlobalState.lastCharacterSearch.selectedCharacter = args.selectedCharacter;
  }
  var symbolToMode = {
    "(": "bracket",
    ")": "bracket",
    "{": "bracket",
    "}": "bracket",
    "[": "section",
    "]": "section",
    "*": "comment",
    "/": "comment",
    "m": "method",
    "M": "method",
    "#": "preprocess"
  };
  var findSymbolModes = {
    bracket: {
      isComplete: function(state) {
        if (state.nextCh === state.symb) {
          state.depth++;
          if (state.depth >= 1)
            return true;
        } else if (state.nextCh === state.reverseSymb) {
          state.depth--;
        }
        return false;
      }
    },
    section: {
      init: function(state) {
        state.curMoveThrough = true;
        state.symb = (state.forward ? "]" : "[") === state.symb ? "{" : "}";
      },
      isComplete: function(state) {
        return state.index === 0 && state.nextCh === state.symb;
      }
    },
    comment: {
      isComplete: function(state) {
        var found = state.lastCh === "*" && state.nextCh === "/";
        state.lastCh = state.nextCh;
        return found;
      }
    },
    method: {
      init: function(state) {
        state.symb = state.symb === "m" ? "{" : "}";
        state.reverseSymb = state.symb === "{" ? "}" : "{";
      },
      isComplete: function(state) {
        if (state.nextCh === state.symb)
          return true;
        return false;
      }
    },
    preprocess: {
      init: function(state) {
        state.index = 0;
      },
      isComplete: function(state) {
        if (state.nextCh === "#") {
          var token = state.lineText.match(/^#(\w+)/)[1];
          if (token === "endif") {
            if (state.forward && state.depth === 0) {
              return true;
            }
            state.depth++;
          } else if (token === "if") {
            if (!state.forward && state.depth === 0) {
              return true;
            }
            state.depth--;
          }
          if (token === "else" && state.depth === 0)
            return true;
        }
        return false;
      }
    }
  };
  function findSymbol(cm, repeat, forward, symb) {
    var cur = copyCursor(cm.getCursor());
    var increment = forward ? 1 : -1;
    var endLine = forward ? cm.lineCount() : -1;
    var curCh = cur.ch;
    var line = cur.line;
    var lineText = cm.getLine(line);
    var state = {
      lineText,
      nextCh: lineText.charAt(curCh),
      lastCh: null,
      index: curCh,
      symb,
      reverseSymb: (forward ? { ")": "(", "}": "{" } : { "(": ")", "{": "}" })[symb],
      forward,
      depth: 0,
      curMoveThrough: false
    };
    var mode = symbolToMode[symb];
    if (!mode)
      return cur;
    var init = findSymbolModes[mode].init;
    var isComplete = findSymbolModes[mode].isComplete;
    if (init) {
      init(state);
    }
    while (line !== endLine && repeat) {
      state.index += increment;
      state.nextCh = state.lineText.charAt(state.index);
      if (!state.nextCh) {
        line += increment;
        state.lineText = cm.getLine(line) || "";
        if (increment > 0) {
          state.index = 0;
        } else {
          var lineLen = state.lineText.length;
          state.index = lineLen > 0 ? lineLen - 1 : 0;
        }
        state.nextCh = state.lineText.charAt(state.index);
      }
      if (isComplete(state)) {
        cur.line = line;
        cur.ch = state.index;
        repeat--;
      }
    }
    if (state.nextCh || state.curMoveThrough) {
      return new Pos2(line, state.index);
    }
    return cur;
  }
  function findWord(cm, cur, forward, bigWord, emptyLineIsWord) {
    var lineNum = cur.line;
    var pos = cur.ch;
    var line = cm.getLine(lineNum);
    var dir = forward ? 1 : -1;
    var charTests = bigWord ? bigWordCharTest : wordCharTest;
    if (emptyLineIsWord && line == "") {
      lineNum += dir;
      line = cm.getLine(lineNum);
      if (!isLine(cm, lineNum)) {
        return null;
      }
      pos = forward ? 0 : line.length;
    }
    while (true) {
      if (emptyLineIsWord && line == "") {
        return { from: 0, to: 0, line: lineNum };
      }
      var stop = dir > 0 ? line.length : -1;
      var wordStart = stop, wordEnd = stop;
      while (pos != stop) {
        var foundWord = false;
        for (var i = 0; i < charTests.length && !foundWord; ++i) {
          if (charTests[i](line.charAt(pos))) {
            wordStart = pos;
            while (pos != stop && charTests[i](line.charAt(pos))) {
              pos += dir;
            }
            wordEnd = pos;
            foundWord = wordStart != wordEnd;
            if (wordStart == cur.ch && lineNum == cur.line && wordEnd == wordStart + dir) {
              continue;
            } else {
              return {
                from: Math.min(wordStart, wordEnd + 1),
                to: Math.max(wordStart, wordEnd),
                line: lineNum
              };
            }
          }
        }
        if (!foundWord) {
          pos += dir;
        }
      }
      lineNum += dir;
      if (!isLine(cm, lineNum)) {
        return null;
      }
      line = cm.getLine(lineNum);
      pos = dir > 0 ? 0 : line.length;
    }
  }
  function moveToWord(cm, cur, repeat, forward, wordEnd, bigWord) {
    var curStart = copyCursor(cur);
    var words = [];
    if (forward && !wordEnd || !forward && wordEnd) {
      repeat++;
    }
    var emptyLineIsWord = !(forward && wordEnd);
    for (var i = 0; i < repeat; i++) {
      var word = findWord(cm, cur, forward, bigWord, emptyLineIsWord);
      if (!word) {
        var eodCh = lineLength(cm, cm.lastLine());
        words.push(forward ? { line: cm.lastLine(), from: eodCh, to: eodCh } : { line: 0, from: 0, to: 0 });
        break;
      }
      words.push(word);
      cur = new Pos2(word.line, forward ? word.to - 1 : word.from);
    }
    var shortCircuit = words.length != repeat;
    var firstWord = words[0];
    var lastWord = words.pop();
    if (forward && !wordEnd) {
      if (!shortCircuit && (firstWord.from != curStart.ch || firstWord.line != curStart.line)) {
        lastWord = words.pop();
      }
      return new Pos2(lastWord.line, lastWord.from);
    } else if (forward && wordEnd) {
      return new Pos2(lastWord.line, lastWord.to - 1);
    } else if (!forward && wordEnd) {
      if (!shortCircuit && (firstWord.to != curStart.ch || firstWord.line != curStart.line)) {
        lastWord = words.pop();
      }
      return new Pos2(lastWord.line, lastWord.to);
    } else {
      return new Pos2(lastWord.line, lastWord.from);
    }
  }
  function moveToEol(cm, head, motionArgs, vim2, keepHPos) {
    var cur = head;
    var retval = new Pos2(cur.line + motionArgs.repeat - 1, Infinity);
    var end = cm.clipPos(retval);
    end.ch--;
    if (!keepHPos) {
      vim2.lastHPos = Infinity;
      vim2.lastHSPos = cm.charCoords(end, "div").left;
    }
    return retval;
  }
  function moveToCharacter(cm, repeat, forward, character) {
    var cur = cm.getCursor();
    var start = cur.ch;
    var idx;
    for (var i = 0; i < repeat; i++) {
      var line = cm.getLine(cur.line);
      idx = charIdxInLine(start, line, character, forward, true);
      if (idx == -1) {
        return null;
      }
      start = idx;
    }
    return new Pos2(cm.getCursor().line, idx);
  }
  function moveToColumn(cm, repeat) {
    var line = cm.getCursor().line;
    return clipCursorToContent(cm, new Pos2(line, repeat - 1));
  }
  function updateMark(cm, vim2, markName, pos) {
    if (!inArray(markName, validMarks)) {
      return;
    }
    if (vim2.marks[markName]) {
      vim2.marks[markName].clear();
    }
    vim2.marks[markName] = cm.setBookmark(pos);
  }
  function charIdxInLine(start, line, character, forward, includeChar) {
    var idx;
    if (forward) {
      idx = line.indexOf(character, start + 1);
      if (idx != -1 && !includeChar) {
        idx -= 1;
      }
    } else {
      idx = line.lastIndexOf(character, start - 1);
      if (idx != -1 && !includeChar) {
        idx += 1;
      }
    }
    return idx;
  }
  function findParagraph(cm, head, repeat, dir, inclusive) {
    var line = head.line;
    var min = cm.firstLine();
    var max = cm.lastLine();
    var start, end, i = line;
    function isEmpty(i2) {
      return !cm.getLine(i2);
    }
    function isBoundary(i2, dir2, any) {
      if (any) {
        return isEmpty(i2) != isEmpty(i2 + dir2);
      }
      return !isEmpty(i2) && isEmpty(i2 + dir2);
    }
    if (dir) {
      while (min <= i && i <= max && repeat > 0) {
        if (isBoundary(i, dir)) {
          repeat--;
        }
        i += dir;
      }
      return new Pos2(i, 0);
    }
    var vim2 = cm.state.vim;
    if (vim2.visualLine && isBoundary(line, 1, true)) {
      var anchor = vim2.sel.anchor;
      if (isBoundary(anchor.line, -1, true)) {
        if (!inclusive || anchor.line != line) {
          line += 1;
        }
      }
    }
    var startState = isEmpty(line);
    for (i = line; i <= max && repeat; i++) {
      if (isBoundary(i, 1, true)) {
        if (!inclusive || isEmpty(i) != startState) {
          repeat--;
        }
      }
    }
    end = new Pos2(i, 0);
    if (i > max && !startState) {
      startState = true;
    } else {
      inclusive = false;
    }
    for (i = line; i > min; i--) {
      if (!inclusive || isEmpty(i) == startState || i == line) {
        if (isBoundary(i, -1, true)) {
          break;
        }
      }
    }
    start = new Pos2(i, 0);
    return { start, end };
  }
  function getSentence(cm, cur, repeat, dir, inclusive) {
    function nextChar(curr) {
      if (curr.pos + curr.dir < 0 || curr.pos + curr.dir >= curr.line.length) {
        curr.line = null;
      } else {
        curr.pos += curr.dir;
      }
    }
    function forward(cm2, ln, pos, dir2) {
      var line = cm2.getLine(ln);
      var curr = {
        line,
        ln,
        pos,
        dir: dir2
      };
      if (curr.line === "") {
        return { ln: curr.ln, pos: curr.pos };
      }
      var lastSentencePos = curr.pos;
      nextChar(curr);
      while (curr.line !== null) {
        lastSentencePos = curr.pos;
        if (isEndOfSentenceSymbol(curr.line[curr.pos])) {
          if (!inclusive) {
            return { ln: curr.ln, pos: curr.pos + 1 };
          } else {
            nextChar(curr);
            while (curr.line !== null) {
              if (isWhiteSpaceString(curr.line[curr.pos])) {
                lastSentencePos = curr.pos;
                nextChar(curr);
              } else {
                break;
              }
            }
            return { ln: curr.ln, pos: lastSentencePos + 1 };
          }
        }
        nextChar(curr);
      }
      return { ln: curr.ln, pos: lastSentencePos + 1 };
    }
    function reverse(cm2, ln, pos, dir2) {
      var line = cm2.getLine(ln);
      var curr = {
        line,
        ln,
        pos,
        dir: dir2
      };
      if (curr.line === "") {
        return { ln: curr.ln, pos: curr.pos };
      }
      var lastSentencePos = curr.pos;
      nextChar(curr);
      while (curr.line !== null) {
        if (!isWhiteSpaceString(curr.line[curr.pos]) && !isEndOfSentenceSymbol(curr.line[curr.pos])) {
          lastSentencePos = curr.pos;
        } else if (isEndOfSentenceSymbol(curr.line[curr.pos])) {
          if (!inclusive) {
            return { ln: curr.ln, pos: lastSentencePos };
          } else {
            if (isWhiteSpaceString(curr.line[curr.pos + 1])) {
              return { ln: curr.ln, pos: curr.pos + 1 };
            } else {
              return { ln: curr.ln, pos: lastSentencePos };
            }
          }
        }
        nextChar(curr);
      }
      curr.line = line;
      if (inclusive && isWhiteSpaceString(curr.line[curr.pos])) {
        return { ln: curr.ln, pos: curr.pos };
      } else {
        return { ln: curr.ln, pos: lastSentencePos };
      }
    }
    var curr_index = {
      ln: cur.line,
      pos: cur.ch
    };
    while (repeat > 0) {
      if (dir < 0) {
        curr_index = reverse(cm, curr_index.ln, curr_index.pos, dir);
      } else {
        curr_index = forward(cm, curr_index.ln, curr_index.pos, dir);
      }
      repeat--;
    }
    return new Pos2(curr_index.ln, curr_index.pos);
  }
  function findSentence(cm, cur, repeat, dir) {
    function nextChar(cm2, idx) {
      if (idx.pos + idx.dir < 0 || idx.pos + idx.dir >= idx.line.length) {
        idx.ln += idx.dir;
        if (!isLine(cm2, idx.ln)) {
          idx.line = null;
          idx.ln = null;
          idx.pos = null;
          return;
        }
        idx.line = cm2.getLine(idx.ln);
        idx.pos = idx.dir > 0 ? 0 : idx.line.length - 1;
      } else {
        idx.pos += idx.dir;
      }
    }
    function forward(cm2, ln, pos, dir2) {
      var line = cm2.getLine(ln);
      var stop = line === "";
      var curr = {
        line,
        ln,
        pos,
        dir: dir2
      };
      var last_valid = {
        ln: curr.ln,
        pos: curr.pos
      };
      var skip_empty_lines = curr.line === "";
      nextChar(cm2, curr);
      while (curr.line !== null) {
        last_valid.ln = curr.ln;
        last_valid.pos = curr.pos;
        if (curr.line === "" && !skip_empty_lines) {
          return { ln: curr.ln, pos: curr.pos };
        } else if (stop && curr.line !== "" && !isWhiteSpaceString(curr.line[curr.pos])) {
          return { ln: curr.ln, pos: curr.pos };
        } else if (isEndOfSentenceSymbol(curr.line[curr.pos]) && !stop && (curr.pos === curr.line.length - 1 || isWhiteSpaceString(curr.line[curr.pos + 1]))) {
          stop = true;
        }
        nextChar(cm2, curr);
      }
      var line = cm2.getLine(last_valid.ln);
      last_valid.pos = 0;
      for (var i = line.length - 1; i >= 0; --i) {
        if (!isWhiteSpaceString(line[i])) {
          last_valid.pos = i;
          break;
        }
      }
      return last_valid;
    }
    function reverse(cm2, ln, pos, dir2) {
      var line = cm2.getLine(ln);
      var curr = {
        line,
        ln,
        pos,
        dir: dir2
      };
      var last_valid = {
        ln: curr.ln,
        pos: null
      };
      var skip_empty_lines = curr.line === "";
      nextChar(cm2, curr);
      while (curr.line !== null) {
        if (curr.line === "" && !skip_empty_lines) {
          if (last_valid.pos !== null) {
            return last_valid;
          } else {
            return { ln: curr.ln, pos: curr.pos };
          }
        } else if (isEndOfSentenceSymbol(curr.line[curr.pos]) && last_valid.pos !== null && !(curr.ln === last_valid.ln && curr.pos + 1 === last_valid.pos)) {
          return last_valid;
        } else if (curr.line !== "" && !isWhiteSpaceString(curr.line[curr.pos])) {
          skip_empty_lines = false;
          last_valid = { ln: curr.ln, pos: curr.pos };
        }
        nextChar(cm2, curr);
      }
      var line = cm2.getLine(last_valid.ln);
      last_valid.pos = 0;
      for (var i = 0; i < line.length; ++i) {
        if (!isWhiteSpaceString(line[i])) {
          last_valid.pos = i;
          break;
        }
      }
      return last_valid;
    }
    var curr_index = {
      ln: cur.line,
      pos: cur.ch
    };
    while (repeat > 0) {
      if (dir < 0) {
        curr_index = reverse(cm, curr_index.ln, curr_index.pos, dir);
      } else {
        curr_index = forward(cm, curr_index.ln, curr_index.pos, dir);
      }
      repeat--;
    }
    return new Pos2(curr_index.ln, curr_index.pos);
  }
  function selectCompanionObject(cm, head, symb, inclusive) {
    var cur = head, start, end;
    var bracketRegexp = {
      "(": /[()]/,
      ")": /[()]/,
      "[": /[[\]]/,
      "]": /[[\]]/,
      "{": /[{}]/,
      "}": /[{}]/,
      "<": /[<>]/,
      ">": /[<>]/
    }[symb];
    var openSym = {
      "(": "(",
      ")": "(",
      "[": "[",
      "]": "[",
      "{": "{",
      "}": "{",
      "<": "<",
      ">": "<"
    }[symb];
    var curChar = cm.getLine(cur.line).charAt(cur.ch);
    var offset = curChar === openSym ? 1 : 0;
    start = cm.scanForBracket(new Pos2(cur.line, cur.ch + offset), -1, void 0, { "bracketRegex": bracketRegexp });
    end = cm.scanForBracket(new Pos2(cur.line, cur.ch + offset), 1, void 0, { "bracketRegex": bracketRegexp });
    if (!start || !end) {
      return { start: cur, end: cur };
    }
    start = start.pos;
    end = end.pos;
    if (start.line == end.line && start.ch > end.ch || start.line > end.line) {
      var tmp = start;
      start = end;
      end = tmp;
    }
    if (inclusive) {
      end.ch += 1;
    } else {
      start.ch += 1;
    }
    return { start, end };
  }
  function findBeginningAndEnd(cm, head, symb, inclusive) {
    var cur = copyCursor(head);
    var line = cm.getLine(cur.line);
    var chars = line.split("");
    var start, end, i, len;
    var firstIndex = chars.indexOf(symb);
    if (cur.ch < firstIndex) {
      cur.ch = firstIndex;
    } else if (firstIndex < cur.ch && chars[cur.ch] == symb) {
      end = cur.ch;
      --cur.ch;
    }
    if (chars[cur.ch] == symb && !end) {
      start = cur.ch + 1;
    } else {
      for (i = cur.ch; i > -1 && !start; i--) {
        if (chars[i] == symb) {
          start = i + 1;
        }
      }
    }
    if (start && !end) {
      for (i = start, len = chars.length; i < len && !end; i++) {
        if (chars[i] == symb) {
          end = i;
        }
      }
    }
    if (!start || !end) {
      return { start: cur, end: cur };
    }
    if (inclusive) {
      --start;
      ++end;
    }
    return {
      start: new Pos2(cur.line, start),
      end: new Pos2(cur.line, end)
    };
  }
  defineOption("pcre", true, "boolean");
  function SearchState() {
  }
  SearchState.prototype = {
    getQuery: function() {
      return vimGlobalState.query;
    },
    setQuery: function(query) {
      vimGlobalState.query = query;
    },
    getOverlay: function() {
      return this.searchOverlay;
    },
    setOverlay: function(overlay) {
      this.searchOverlay = overlay;
    },
    isReversed: function() {
      return vimGlobalState.isReversed;
    },
    setReversed: function(reversed) {
      vimGlobalState.isReversed = reversed;
    },
    getScrollbarAnnotate: function() {
      return this.annotate;
    },
    setScrollbarAnnotate: function(annotate) {
      this.annotate = annotate;
    }
  };
  function getSearchState(cm) {
    var vim2 = cm.state.vim;
    return vim2.searchState_ || (vim2.searchState_ = new SearchState());
  }
  function splitBySlash(argString) {
    return splitBySeparator(argString, "/");
  }
  function findUnescapedSlashes(argString) {
    return findUnescapedSeparators(argString, "/");
  }
  function splitBySeparator(argString, separator) {
    var slashes = findUnescapedSeparators(argString, separator) || [];
    if (!slashes.length)
      return [];
    var tokens = [];
    if (slashes[0] !== 0)
      return;
    for (var i = 0; i < slashes.length; i++) {
      if (typeof slashes[i] == "number")
        tokens.push(argString.substring(slashes[i] + 1, slashes[i + 1]));
    }
    return tokens;
  }
  function findUnescapedSeparators(str, separator) {
    if (!separator)
      separator = "/";
    var escapeNextChar = false;
    var slashes = [];
    for (var i = 0; i < str.length; i++) {
      var c = str.charAt(i);
      if (!escapeNextChar && c == separator) {
        slashes.push(i);
      }
      escapeNextChar = !escapeNextChar && c == "\\";
    }
    return slashes;
  }
  function translateRegex(str) {
    var specials = "|(){";
    var unescape = "}";
    var escapeNextChar = false;
    var out = [];
    for (var i = -1; i < str.length; i++) {
      var c = str.charAt(i) || "";
      var n = str.charAt(i + 1) || "";
      var specialComesNext = n && specials.indexOf(n) != -1;
      if (escapeNextChar) {
        if (c !== "\\" || !specialComesNext) {
          out.push(c);
        }
        escapeNextChar = false;
      } else {
        if (c === "\\") {
          escapeNextChar = true;
          if (n && unescape.indexOf(n) != -1) {
            specialComesNext = true;
          }
          if (!specialComesNext || n === "\\") {
            out.push(c);
          }
        } else {
          out.push(c);
          if (specialComesNext && n !== "\\") {
            out.push("\\");
          }
        }
      }
    }
    return out.join("");
  }
  var charUnescapes = { "\\n": "\n", "\\r": "\r", "\\t": "	" };
  function translateRegexReplace(str) {
    var escapeNextChar = false;
    var out = [];
    for (var i = -1; i < str.length; i++) {
      var c = str.charAt(i) || "";
      var n = str.charAt(i + 1) || "";
      if (charUnescapes[c + n]) {
        out.push(charUnescapes[c + n]);
        i++;
      } else if (escapeNextChar) {
        out.push(c);
        escapeNextChar = false;
      } else {
        if (c === "\\") {
          escapeNextChar = true;
          if (isNumber(n) || n === "$") {
            out.push("$");
          } else if (n !== "/" && n !== "\\") {
            out.push("\\");
          }
        } else {
          if (c === "$") {
            out.push("$");
          }
          out.push(c);
          if (n === "/") {
            out.push("\\");
          }
        }
      }
    }
    return out.join("");
  }
  var unescapes = { "\\/": "/", "\\\\": "\\", "\\n": "\n", "\\r": "\r", "\\t": "	", "\\&": "&" };
  function unescapeRegexReplace(str) {
    var stream = new CodeMirror2.StringStream(str);
    var output = [];
    while (!stream.eol()) {
      while (stream.peek() && stream.peek() != "\\") {
        output.push(stream.next());
      }
      var matched = false;
      for (var matcher in unescapes) {
        if (stream.match(matcher, true)) {
          matched = true;
          output.push(unescapes[matcher]);
          break;
        }
      }
      if (!matched) {
        output.push(stream.next());
      }
    }
    return output.join("");
  }
  function parseQuery(query, ignoreCase, smartCase) {
    var lastSearchRegister = vimGlobalState.registerController.getRegister("/");
    lastSearchRegister.setText(query);
    if (query instanceof RegExp) {
      return query;
    }
    var slashes = findUnescapedSlashes(query);
    var regexPart;
    var forceIgnoreCase;
    if (!slashes.length) {
      regexPart = query;
    } else {
      regexPart = query.substring(0, slashes[0]);
      var flagsPart = query.substring(slashes[0]);
      forceIgnoreCase = flagsPart.indexOf("i") != -1;
    }
    if (!regexPart) {
      return null;
    }
    if (!getOption("pcre")) {
      regexPart = translateRegex(regexPart);
    }
    if (smartCase) {
      ignoreCase = /^[^A-Z]*$/.test(regexPart);
    }
    var regexp = new RegExp(
      regexPart,
      ignoreCase || forceIgnoreCase ? "im" : "m"
    );
    return regexp;
  }
  function dom(n) {
    if (typeof n === "string")
      n = document.createElement(n);
    for (var a, i = 1; i < arguments.length; i++) {
      if (!(a = arguments[i]))
        continue;
      if (typeof a !== "object")
        a = document.createTextNode(a);
      if (a.nodeType)
        n.appendChild(a);
      else
        for (var key in a) {
          if (!Object.prototype.hasOwnProperty.call(a, key))
            continue;
          if (key[0] === "$")
            n.style[key.slice(1)] = a[key];
          else
            n.setAttribute(key, a[key]);
        }
    }
    return n;
  }
  function showConfirm(cm, template) {
    var pre = dom("div", { $color: "red", $whiteSpace: "pre", class: "cm-vim-message" }, template);
    if (cm.openNotification) {
      cm.openNotification(pre, { bottom: true, duration: 5e3 });
    } else {
      alert(pre.innerText);
    }
  }
  function makePrompt(prefix, desc) {
    return dom(
      document.createDocumentFragment(),
      dom(
        "span",
        { $fontFamily: "monospace", $whiteSpace: "pre" },
        prefix,
        dom("input", {
          type: "text",
          autocorrect: "off",
          autocapitalize: "off",
          spellcheck: "false"
        })
      ),
      desc && dom("span", { $color: "#888" }, desc)
    );
  }
  function showPrompt(cm, options2) {
    var template = makePrompt(options2.prefix, options2.desc);
    if (cm.openDialog) {
      cm.openDialog(template, options2.onClose, {
        onKeyDown: options2.onKeyDown,
        onKeyUp: options2.onKeyUp,
        bottom: true,
        selectValueOnOpen: false,
        value: options2.value
      });
    } else {
      var shortText = "";
      if (typeof options2.prefix != "string" && options2.prefix)
        shortText += options2.prefix.textContent;
      if (options2.desc)
        shortText += " " + options2.desc;
      options2.onClose(prompt(shortText, ""));
    }
  }
  function regexEqual(r1, r2) {
    if (r1 instanceof RegExp && r2 instanceof RegExp) {
      var props = ["global", "multiline", "ignoreCase", "source"];
      for (var i = 0; i < props.length; i++) {
        var prop = props[i];
        if (r1[prop] !== r2[prop]) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
  function updateSearchQuery(cm, rawQuery, ignoreCase, smartCase) {
    if (!rawQuery) {
      return;
    }
    var state = getSearchState(cm);
    var query = parseQuery(rawQuery, !!ignoreCase, !!smartCase);
    if (!query) {
      return;
    }
    highlightSearchMatches(cm, query);
    if (regexEqual(query, state.getQuery())) {
      return query;
    }
    state.setQuery(query);
    return query;
  }
  function searchOverlay(query) {
    if (query.source.charAt(0) == "^") {
      var matchSol = true;
    }
    return {
      token: function(stream) {
        if (matchSol && !stream.sol()) {
          stream.skipToEnd();
          return;
        }
        var match = stream.match(query, false);
        if (match) {
          if (match[0].length == 0) {
            stream.next();
            return "searching";
          }
          if (!stream.sol()) {
            stream.backUp(1);
            if (!query.exec(stream.next() + match[0])) {
              stream.next();
              return null;
            }
          }
          stream.match(query);
          return "searching";
        }
        while (!stream.eol()) {
          stream.next();
          if (stream.match(query, false))
            break;
        }
      },
      query
    };
  }
  var highlightTimeout = 0;
  function highlightSearchMatches(cm, query) {
    clearTimeout(highlightTimeout);
    highlightTimeout = setTimeout(function() {
      if (!cm.state.vim)
        return;
      var searchState = getSearchState(cm);
      var overlay = searchState.getOverlay();
      if (!overlay || query != overlay.query) {
        if (overlay) {
          cm.removeOverlay(overlay);
        }
        overlay = searchOverlay(query);
        cm.addOverlay(overlay);
        if (cm.showMatchesOnScrollbar) {
          if (searchState.getScrollbarAnnotate()) {
            searchState.getScrollbarAnnotate().clear();
          }
          searchState.setScrollbarAnnotate(cm.showMatchesOnScrollbar(query));
        }
        searchState.setOverlay(overlay);
      }
    }, 50);
  }
  function findNext(cm, prev, query, repeat) {
    if (repeat === void 0) {
      repeat = 1;
    }
    return cm.operation(function() {
      var pos = cm.getCursor();
      var cursor = cm.getSearchCursor(query, pos);
      for (var i = 0; i < repeat; i++) {
        var found = cursor.find(prev);
        if (i == 0 && found && cursorEqual(cursor.from(), pos)) {
          var lastEndPos = prev ? cursor.from() : cursor.to();
          found = cursor.find(prev);
          if (found && !found[0] && cursorEqual(cursor.from(), lastEndPos)) {
            if (cm.getLine(lastEndPos.line).length == lastEndPos.ch)
              found = cursor.find(prev);
          }
        }
        if (!found) {
          cursor = cm.getSearchCursor(
            query,
            prev ? new Pos2(cm.lastLine()) : new Pos2(cm.firstLine(), 0)
          );
          if (!cursor.find(prev)) {
            return;
          }
        }
      }
      return cursor.from();
    });
  }
  function findNextFromAndToInclusive(cm, prev, query, repeat, vim2) {
    if (repeat === void 0) {
      repeat = 1;
    }
    return cm.operation(function() {
      var pos = cm.getCursor();
      var cursor = cm.getSearchCursor(query, pos);
      var found = cursor.find(!prev);
      if (!vim2.visualMode && found && cursorEqual(cursor.from(), pos)) {
        cursor.find(!prev);
      }
      for (var i = 0; i < repeat; i++) {
        found = cursor.find(prev);
        if (!found) {
          cursor = cm.getSearchCursor(
            query,
            prev ? new Pos2(cm.lastLine()) : new Pos2(cm.firstLine(), 0)
          );
          if (!cursor.find(prev)) {
            return;
          }
        }
      }
      return [cursor.from(), cursor.to()];
    });
  }
  function clearSearchHighlight(cm) {
    var state = getSearchState(cm);
    cm.removeOverlay(getSearchState(cm).getOverlay());
    state.setOverlay(null);
    if (state.getScrollbarAnnotate()) {
      state.getScrollbarAnnotate().clear();
      state.setScrollbarAnnotate(null);
    }
  }
  function isInRange(pos, start, end) {
    if (typeof pos != "number") {
      pos = pos.line;
    }
    if (start instanceof Array) {
      return inArray(pos, start);
    } else {
      if (typeof end == "number") {
        return pos >= start && pos <= end;
      } else {
        return pos == start;
      }
    }
  }
  function getUserVisibleLines(cm) {
    var scrollInfo = cm.getScrollInfo();
    var occludeToleranceTop = 6;
    var occludeToleranceBottom = 10;
    var from = cm.coordsChar({ left: 0, top: occludeToleranceTop + scrollInfo.top }, "local");
    var bottomY = scrollInfo.clientHeight - occludeToleranceBottom + scrollInfo.top;
    var to = cm.coordsChar({ left: 0, top: bottomY }, "local");
    return { top: from.line, bottom: to.line };
  }
  function getMarkPos(cm, vim2, markName) {
    if (markName == "'" || markName == "`") {
      return vimGlobalState.jumpList.find(cm, -1) || new Pos2(0, 0);
    } else if (markName == ".") {
      return getLastEditPos(cm);
    }
    var mark = vim2.marks[markName];
    return mark && mark.find();
  }
  function getLastEditPos(cm) {
    var done = cm.doc.history.done;
    for (var i = done.length; i--; ) {
      if (done[i].changes) {
        return copyCursor(done[i].changes[0].to);
      }
    }
  }
  var ExCommandDispatcher = function() {
    this.buildCommandMap_();
  };
  ExCommandDispatcher.prototype = {
    processCommand: function(cm, input, opt_params) {
      var that = this;
      cm.operation(function() {
        cm.curOp.isVimOp = true;
        that._processCommand(cm, input, opt_params);
      });
    },
    _processCommand: function(cm, input, opt_params) {
      var vim2 = cm.state.vim;
      var commandHistoryRegister = vimGlobalState.registerController.getRegister(":");
      var previousCommand = commandHistoryRegister.toString();
      if (vim2.visualMode) {
        exitVisualMode(cm);
      }
      var inputStream = new CodeMirror2.StringStream(input);
      commandHistoryRegister.setText(input);
      var params = opt_params || {};
      params.input = input;
      try {
        this.parseInput_(cm, inputStream, params);
      } catch (e) {
        showConfirm(cm, e.toString());
        throw e;
      }
      var command;
      var commandName;
      if (!params.commandName) {
        if (params.line !== void 0) {
          commandName = "move";
        }
      } else {
        command = this.matchCommand_(params.commandName);
        if (command) {
          commandName = command.name;
          if (command.excludeFromCommandHistory) {
            commandHistoryRegister.setText(previousCommand);
          }
          this.parseCommandArgs_(inputStream, params, command);
          if (command.type == "exToKey") {
            for (var i = 0; i < command.toKeys.length; i++) {
              vimApi.handleKey(cm, command.toKeys[i], "mapping");
            }
            return;
          } else if (command.type == "exToEx") {
            this.processCommand(cm, command.toInput);
            return;
          }
        }
      }
      if (!commandName) {
        showConfirm(cm, 'Not an editor command ":' + input + '"');
        return;
      }
      try {
        exCommands[commandName](cm, params);
        if ((!command || !command.possiblyAsync) && params.callback) {
          params.callback();
        }
      } catch (e) {
        showConfirm(cm, e.toString());
        throw e;
      }
    },
    parseInput_: function(cm, inputStream, result) {
      inputStream.eatWhile(":");
      if (inputStream.eat("%")) {
        result.line = cm.firstLine();
        result.lineEnd = cm.lastLine();
      } else {
        result.line = this.parseLineSpec_(cm, inputStream);
        if (result.line !== void 0 && inputStream.eat(",")) {
          result.lineEnd = this.parseLineSpec_(cm, inputStream);
        }
      }
      var commandMatch2 = inputStream.match(/^(\w+|!!|@@|[!#&*<=>@~])/);
      if (commandMatch2) {
        result.commandName = commandMatch2[1];
      } else {
        result.commandName = inputStream.match(/.*/)[0];
      }
      return result;
    },
    parseLineSpec_: function(cm, inputStream) {
      var numberMatch = inputStream.match(/^(\d+)/);
      if (numberMatch) {
        return parseInt(numberMatch[1], 10) - 1;
      }
      switch (inputStream.next()) {
        case ".":
          return this.parseLineSpecOffset_(inputStream, cm.getCursor().line);
        case "$":
          return this.parseLineSpecOffset_(inputStream, cm.lastLine());
        case "'":
          var markName = inputStream.next();
          var markPos = getMarkPos(cm, cm.state.vim, markName);
          if (!markPos)
            throw new Error("Mark not set");
          return this.parseLineSpecOffset_(inputStream, markPos.line);
        case "-":
        case "+":
          inputStream.backUp(1);
          return this.parseLineSpecOffset_(inputStream, cm.getCursor().line);
        default:
          inputStream.backUp(1);
          return void 0;
      }
    },
    parseLineSpecOffset_: function(inputStream, line) {
      var offsetMatch = inputStream.match(/^([+-])?(\d+)/);
      if (offsetMatch) {
        var offset = parseInt(offsetMatch[2], 10);
        if (offsetMatch[1] == "-") {
          line -= offset;
        } else {
          line += offset;
        }
      }
      return line;
    },
    parseCommandArgs_: function(inputStream, params, command) {
      if (inputStream.eol()) {
        return;
      }
      params.argString = inputStream.match(/.*/)[0];
      var delim = command.argDelimiter || /\s+/;
      var args = trim(params.argString).split(delim);
      if (args.length && args[0]) {
        params.args = args;
      }
    },
    matchCommand_: function(commandName) {
      for (var i = commandName.length; i > 0; i--) {
        var prefix = commandName.substring(0, i);
        if (this.commandMap_[prefix]) {
          var command = this.commandMap_[prefix];
          if (command.name.indexOf(commandName) === 0) {
            return command;
          }
        }
      }
      return null;
    },
    buildCommandMap_: function() {
      this.commandMap_ = {};
      for (var i = 0; i < defaultExCommandMap.length; i++) {
        var command = defaultExCommandMap[i];
        var key = command.shortName || command.name;
        this.commandMap_[key] = command;
      }
    },
    map: function(lhs, rhs, ctx) {
      if (lhs != ":" && lhs.charAt(0) == ":") {
        if (ctx) {
          throw Error("Mode not supported for ex mappings");
        }
        var commandName = lhs.substring(1);
        if (rhs != ":" && rhs.charAt(0) == ":") {
          this.commandMap_[commandName] = {
            name: commandName,
            type: "exToEx",
            toInput: rhs.substring(1),
            user: true
          };
        } else {
          this.commandMap_[commandName] = {
            name: commandName,
            type: "exToKey",
            toKeys: rhs,
            user: true
          };
        }
      } else {
        if (rhs != ":" && rhs.charAt(0) == ":") {
          var mapping = {
            keys: lhs,
            type: "keyToEx",
            exArgs: { input: rhs.substring(1) }
          };
          if (ctx) {
            mapping.context = ctx;
          }
          defaultKeymap.unshift(mapping);
        } else {
          var mapping = {
            keys: lhs,
            type: "keyToKey",
            toKeys: rhs
          };
          if (ctx) {
            mapping.context = ctx;
          }
          defaultKeymap.unshift(mapping);
        }
      }
    },
    unmap: function(lhs, ctx) {
      if (lhs != ":" && lhs.charAt(0) == ":") {
        if (ctx) {
          throw Error("Mode not supported for ex mappings");
        }
        var commandName = lhs.substring(1);
        if (this.commandMap_[commandName] && this.commandMap_[commandName].user) {
          delete this.commandMap_[commandName];
          return true;
        }
      } else {
        var keys = lhs;
        for (var i = 0; i < defaultKeymap.length; i++) {
          if (keys == defaultKeymap[i].keys && defaultKeymap[i].context === ctx) {
            defaultKeymap.splice(i, 1);
            return true;
          }
        }
      }
    }
  };
  var exCommands = {
    colorscheme: function(cm, params) {
      if (!params.args || params.args.length < 1) {
        showConfirm(cm, cm.getOption("theme"));
        return;
      }
      cm.setOption("theme", params.args[0]);
    },
    map: function(cm, params, ctx) {
      var mapArgs = params.args;
      if (!mapArgs || mapArgs.length < 2) {
        if (cm) {
          showConfirm(cm, "Invalid mapping: " + params.input);
        }
        return;
      }
      exCommandDispatcher.map(mapArgs[0], mapArgs[1], ctx);
    },
    imap: function(cm, params) {
      this.map(cm, params, "insert");
    },
    nmap: function(cm, params) {
      this.map(cm, params, "normal");
    },
    vmap: function(cm, params) {
      this.map(cm, params, "visual");
    },
    unmap: function(cm, params, ctx) {
      var mapArgs = params.args;
      if (!mapArgs || mapArgs.length < 1 || !exCommandDispatcher.unmap(mapArgs[0], ctx)) {
        if (cm) {
          showConfirm(cm, "No such mapping: " + params.input);
        }
      }
    },
    move: function(cm, params) {
      commandDispatcher.processCommand(cm, cm.state.vim, {
        type: "motion",
        motion: "moveToLineOrEdgeOfDocument",
        motionArgs: {
          forward: false,
          explicitRepeat: true,
          linewise: true
        },
        repeatOverride: params.line + 1
      });
    },
    set: function(cm, params) {
      var setArgs = params.args;
      var setCfg = params.setCfg || {};
      if (!setArgs || setArgs.length < 1) {
        if (cm) {
          showConfirm(cm, "Invalid mapping: " + params.input);
        }
        return;
      }
      var expr = setArgs[0].split("=");
      var optionName = expr[0];
      var value = expr[1];
      var forceGet = false;
      if (optionName.charAt(optionName.length - 1) == "?") {
        if (value) {
          throw Error("Trailing characters: " + params.argString);
        }
        optionName = optionName.substring(0, optionName.length - 1);
        forceGet = true;
      }
      if (value === void 0 && optionName.substring(0, 2) == "no") {
        optionName = optionName.substring(2);
        value = false;
      }
      var optionIsBoolean = options[optionName] && options[optionName].type == "boolean";
      if (optionIsBoolean && value == void 0) {
        value = true;
      }
      if (!optionIsBoolean && value === void 0 || forceGet) {
        var oldValue = getOption(optionName, cm, setCfg);
        if (oldValue instanceof Error) {
          showConfirm(cm, oldValue.message);
        } else if (oldValue === true || oldValue === false) {
          showConfirm(cm, " " + (oldValue ? "" : "no") + optionName);
        } else {
          showConfirm(cm, "  " + optionName + "=" + oldValue);
        }
      } else {
        var setOptionReturn = setOption(optionName, value, cm, setCfg);
        if (setOptionReturn instanceof Error) {
          showConfirm(cm, setOptionReturn.message);
        }
      }
    },
    setlocal: function(cm, params) {
      params.setCfg = { scope: "local" };
      this.set(cm, params);
    },
    setglobal: function(cm, params) {
      params.setCfg = { scope: "global" };
      this.set(cm, params);
    },
    registers: function(cm, params) {
      var regArgs = params.args;
      var registers = vimGlobalState.registerController.registers;
      var regInfo = "----------Registers----------\n\n";
      if (!regArgs) {
        for (var registerName in registers) {
          var text = registers[registerName].toString();
          if (text.length) {
            regInfo += '"' + registerName + "    " + text + "\n";
          }
        }
      } else {
        var registerName;
        regArgs = regArgs.join("");
        for (var i = 0; i < regArgs.length; i++) {
          registerName = regArgs.charAt(i);
          if (!vimGlobalState.registerController.isValidRegister(registerName)) {
            continue;
          }
          var register = registers[registerName] || new Register();
          regInfo += '"' + registerName + "    " + register.toString() + "\n";
        }
      }
      showConfirm(cm, regInfo);
    },
    sort: function(cm, params) {
      var reverse, ignoreCase, unique, number, pattern;
      function parseArgs() {
        if (params.argString) {
          var args = new CodeMirror2.StringStream(params.argString);
          if (args.eat("!")) {
            reverse = true;
          }
          if (args.eol()) {
            return;
          }
          if (!args.eatSpace()) {
            return "Invalid arguments";
          }
          var opts = args.match(/([dinuox]+)?\s*(\/.+\/)?\s*/);
          if (!opts && !args.eol()) {
            return "Invalid arguments";
          }
          if (opts[1]) {
            ignoreCase = opts[1].indexOf("i") != -1;
            unique = opts[1].indexOf("u") != -1;
            var decimal = opts[1].indexOf("d") != -1 || opts[1].indexOf("n") != -1 && 1;
            var hex = opts[1].indexOf("x") != -1 && 1;
            var octal = opts[1].indexOf("o") != -1 && 1;
            if (decimal + hex + octal > 1) {
              return "Invalid arguments";
            }
            number = decimal && "decimal" || hex && "hex" || octal && "octal";
          }
          if (opts[2]) {
            pattern = new RegExp(opts[2].substr(1, opts[2].length - 2), ignoreCase ? "i" : "");
          }
        }
      }
      var err = parseArgs();
      if (err) {
        showConfirm(cm, err + ": " + params.argString);
        return;
      }
      var lineStart = params.line || cm.firstLine();
      var lineEnd = params.lineEnd || params.line || cm.lastLine();
      if (lineStart == lineEnd) {
        return;
      }
      var curStart = new Pos2(lineStart, 0);
      var curEnd = new Pos2(lineEnd, lineLength(cm, lineEnd));
      var text = cm.getRange(curStart, curEnd).split("\n");
      var numberRegex2 = pattern ? pattern : number == "decimal" ? /(-?)([\d]+)/ : number == "hex" ? /(-?)(?:0x)?([0-9a-f]+)/i : number == "octal" ? /([0-7]+)/ : null;
      var radix = number == "decimal" ? 10 : number == "hex" ? 16 : number == "octal" ? 8 : null;
      var numPart = [], textPart = [];
      if (number || pattern) {
        for (var i = 0; i < text.length; i++) {
          var matchPart = pattern ? text[i].match(pattern) : null;
          if (matchPart && matchPart[0] != "") {
            numPart.push(matchPart);
          } else if (!pattern && numberRegex2.exec(text[i])) {
            numPart.push(text[i]);
          } else {
            textPart.push(text[i]);
          }
        }
      } else {
        textPart = text;
      }
      function compareFn(a, b) {
        if (reverse) {
          var tmp;
          tmp = a;
          a = b;
          b = tmp;
        }
        if (ignoreCase) {
          a = a.toLowerCase();
          b = b.toLowerCase();
        }
        var anum = number && numberRegex2.exec(a);
        var bnum = number && numberRegex2.exec(b);
        if (!anum) {
          return a < b ? -1 : 1;
        }
        anum = parseInt((anum[1] + anum[2]).toLowerCase(), radix);
        bnum = parseInt((bnum[1] + bnum[2]).toLowerCase(), radix);
        return anum - bnum;
      }
      function comparePatternFn(a, b) {
        if (reverse) {
          var tmp;
          tmp = a;
          a = b;
          b = tmp;
        }
        if (ignoreCase) {
          a[0] = a[0].toLowerCase();
          b[0] = b[0].toLowerCase();
        }
        return a[0] < b[0] ? -1 : 1;
      }
      numPart.sort(pattern ? comparePatternFn : compareFn);
      if (pattern) {
        for (var i = 0; i < numPart.length; i++) {
          numPart[i] = numPart[i].input;
        }
      } else if (!number) {
        textPart.sort(compareFn);
      }
      text = !reverse ? textPart.concat(numPart) : numPart.concat(textPart);
      if (unique) {
        var textOld = text;
        var lastLine;
        text = [];
        for (var i = 0; i < textOld.length; i++) {
          if (textOld[i] != lastLine) {
            text.push(textOld[i]);
          }
          lastLine = textOld[i];
        }
      }
      cm.replaceRange(text.join("\n"), curStart, curEnd);
    },
    vglobal: function(cm, params) {
      this.global(cm, params);
    },
    global: function(cm, params) {
      var argString = params.argString;
      if (!argString) {
        showConfirm(cm, "Regular Expression missing from global");
        return;
      }
      var inverted = params.commandName[0] === "v";
      var lineStart = params.line !== void 0 ? params.line : cm.firstLine();
      var lineEnd = params.lineEnd || params.line || cm.lastLine();
      var tokens = splitBySlash(argString);
      var regexPart = argString, cmd;
      if (tokens.length) {
        regexPart = tokens[0];
        cmd = tokens.slice(1, tokens.length).join("/");
      }
      if (regexPart) {
        try {
          updateSearchQuery(
            cm,
            regexPart,
            true,
            true
          );
        } catch (e) {
          showConfirm(cm, "Invalid regex: " + regexPart);
          return;
        }
      }
      var query = getSearchState(cm).getQuery();
      var matchedLines = [];
      for (var i = lineStart; i <= lineEnd; i++) {
        var line = cm.getLineHandle(i);
        var matched = query.test(line.text);
        if (matched !== inverted) {
          matchedLines.push(cmd ? line : line.text);
        }
      }
      if (!cmd) {
        showConfirm(cm, matchedLines.join("\n"));
        return;
      }
      var index = 0;
      var nextCommand = function() {
        if (index < matchedLines.length) {
          var line2 = matchedLines[index++];
          var lineNum = cm.getLineNumber(line2);
          if (lineNum == null) {
            nextCommand();
            return;
          }
          var command = lineNum + 1 + cmd;
          exCommandDispatcher.processCommand(cm, command, {
            callback: nextCommand
          });
        }
      };
      nextCommand();
    },
    substitute: function(cm, params) {
      if (!cm.getSearchCursor) {
        throw new Error("Search feature not available. Requires searchcursor.js or any other getSearchCursor implementation.");
      }
      var argString = params.argString;
      var tokens = argString ? splitBySeparator(argString, argString[0]) : [];
      var regexPart, replacePart = "", trailing, flagsPart, count;
      var confirm = false;
      var global = false;
      if (tokens.length) {
        regexPart = tokens[0];
        if (getOption("pcre") && regexPart !== "") {
          regexPart = new RegExp(regexPart).source;
        }
        replacePart = tokens[1];
        if (replacePart !== void 0) {
          if (getOption("pcre")) {
            replacePart = unescapeRegexReplace(replacePart.replace(/([^\\])&/g, "$1$$&"));
          } else {
            replacePart = translateRegexReplace(replacePart);
          }
          vimGlobalState.lastSubstituteReplacePart = replacePart;
        }
        trailing = tokens[2] ? tokens[2].split(" ") : [];
      } else {
        if (argString && argString.length) {
          showConfirm(cm, "Substitutions should be of the form :s/pattern/replace/");
          return;
        }
      }
      if (trailing) {
        flagsPart = trailing[0];
        count = parseInt(trailing[1]);
        if (flagsPart) {
          if (flagsPart.indexOf("c") != -1) {
            confirm = true;
          }
          if (flagsPart.indexOf("g") != -1) {
            global = true;
          }
          if (getOption("pcre")) {
            regexPart = regexPart + "/" + flagsPart;
          } else {
            regexPart = regexPart.replace(/\//g, "\\/") + "/" + flagsPart;
          }
        }
      }
      if (regexPart) {
        try {
          updateSearchQuery(
            cm,
            regexPart,
            true,
            true
          );
        } catch (e) {
          showConfirm(cm, "Invalid regex: " + regexPart);
          return;
        }
      }
      replacePart = replacePart || vimGlobalState.lastSubstituteReplacePart;
      if (replacePart === void 0) {
        showConfirm(cm, "No previous substitute regular expression");
        return;
      }
      var state = getSearchState(cm);
      var query = state.getQuery();
      var lineStart = params.line !== void 0 ? params.line : cm.getCursor().line;
      var lineEnd = params.lineEnd || lineStart;
      if (lineStart == cm.firstLine() && lineEnd == cm.lastLine()) {
        lineEnd = Infinity;
      }
      if (count) {
        lineStart = lineEnd;
        lineEnd = lineStart + count - 1;
      }
      var startPos = clipCursorToContent(cm, new Pos2(lineStart, 0));
      var cursor = cm.getSearchCursor(query, startPos);
      doReplace(cm, confirm, global, lineStart, lineEnd, cursor, query, replacePart, params.callback);
    },
    redo: CodeMirror2.commands.redo,
    undo: CodeMirror2.commands.undo,
    write: function(cm) {
      if (CodeMirror2.commands.save) {
        CodeMirror2.commands.save(cm);
      } else if (cm.save) {
        cm.save();
      }
    },
    nohlsearch: function(cm) {
      clearSearchHighlight(cm);
    },
    yank: function(cm) {
      var cur = copyCursor(cm.getCursor());
      var line = cur.line;
      var lineText = cm.getLine(line);
      vimGlobalState.registerController.pushText(
        "0",
        "yank",
        lineText,
        true,
        true
      );
    },
    delmarks: function(cm, params) {
      if (!params.argString || !trim(params.argString)) {
        showConfirm(cm, "Argument required");
        return;
      }
      var state = cm.state.vim;
      var stream = new CodeMirror2.StringStream(trim(params.argString));
      while (!stream.eol()) {
        stream.eatSpace();
        var count = stream.pos;
        if (!stream.match(/[a-zA-Z]/, false)) {
          showConfirm(cm, "Invalid argument: " + params.argString.substring(count));
          return;
        }
        var sym = stream.next();
        if (stream.match("-", true)) {
          if (!stream.match(/[a-zA-Z]/, false)) {
            showConfirm(cm, "Invalid argument: " + params.argString.substring(count));
            return;
          }
          var startMark = sym;
          var finishMark = stream.next();
          if (isLowerCase(startMark) && isLowerCase(finishMark) || isUpperCase(startMark) && isUpperCase(finishMark)) {
            var start = startMark.charCodeAt(0);
            var finish = finishMark.charCodeAt(0);
            if (start >= finish) {
              showConfirm(cm, "Invalid argument: " + params.argString.substring(count));
              return;
            }
            for (var j = 0; j <= finish - start; j++) {
              var mark = String.fromCharCode(start + j);
              delete state.marks[mark];
            }
          } else {
            showConfirm(cm, "Invalid argument: " + startMark + "-");
            return;
          }
        } else {
          delete state.marks[sym];
        }
      }
    }
  };
  var exCommandDispatcher = new ExCommandDispatcher();
  function doReplace(cm, confirm, global, lineStart, lineEnd, searchCursor, query, replaceWith, callback) {
    cm.state.vim.exMode = true;
    var done = false;
    var lastPos, modifiedLineNumber, joined;
    function replaceAll() {
      cm.operation(function() {
        while (!done) {
          replace();
          next();
        }
        stop();
      });
    }
    function replace() {
      var text = cm.getRange(searchCursor.from(), searchCursor.to());
      var newText = text.replace(query, replaceWith);
      var unmodifiedLineNumber = searchCursor.to().line;
      searchCursor.replace(newText);
      modifiedLineNumber = searchCursor.to().line;
      lineEnd += modifiedLineNumber - unmodifiedLineNumber;
      joined = modifiedLineNumber < unmodifiedLineNumber;
    }
    function findNextValidMatch() {
      var lastMatchTo = lastPos && copyCursor(searchCursor.to());
      var match = searchCursor.findNext();
      if (match && !match[0] && lastMatchTo && cursorEqual(searchCursor.from(), lastMatchTo)) {
        match = searchCursor.findNext();
      }
      return match;
    }
    function next() {
      while (findNextValidMatch() && isInRange(searchCursor.from(), lineStart, lineEnd)) {
        if (!global && searchCursor.from().line == modifiedLineNumber && !joined) {
          continue;
        }
        cm.scrollIntoView(searchCursor.from(), 30);
        cm.setSelection(searchCursor.from(), searchCursor.to());
        lastPos = searchCursor.from();
        done = false;
        return;
      }
      done = true;
    }
    function stop(close) {
      if (close) {
        close();
      }
      cm.focus();
      if (lastPos) {
        cm.setCursor(lastPos);
        var vim2 = cm.state.vim;
        vim2.exMode = false;
        vim2.lastHPos = vim2.lastHSPos = lastPos.ch;
      }
      if (callback) {
        callback();
      }
    }
    function onPromptKeyDown(e, _value, close) {
      CodeMirror2.e_stop(e);
      var keyName = CodeMirror2.keyName(e);
      switch (keyName) {
        case "Y":
          replace();
          next();
          break;
        case "N":
          next();
          break;
        case "A":
          var savedCallback = callback;
          callback = void 0;
          cm.operation(replaceAll);
          callback = savedCallback;
          break;
        case "L":
          replace();
        case "Q":
        case "Esc":
        case "Ctrl-C":
        case "Ctrl-[":
          stop(close);
          break;
      }
      if (done) {
        stop(close);
      }
      return true;
    }
    next();
    if (done) {
      showConfirm(cm, "No matches for " + query.source);
      return;
    }
    if (!confirm) {
      replaceAll();
      if (callback) {
        callback();
      }
      return;
    }
    showPrompt(cm, {
      prefix: dom("span", "replace with ", dom("strong", replaceWith), " (y/n/a/q/l)"),
      onKeyDown: onPromptKeyDown
    });
  }
  CodeMirror2.keyMap.vim = {
    attach: attachVimMap,
    detach: detachVimMap,
    call: cmKey
  };
  function exitInsertMode(cm) {
    var vim2 = cm.state.vim;
    var macroModeState = vimGlobalState.macroModeState;
    var insertModeChangeRegister = vimGlobalState.registerController.getRegister(".");
    var isPlaying = macroModeState.isPlaying;
    var lastChange = macroModeState.lastInsertModeChanges;
    if (!isPlaying) {
      cm.off("change", onChange);
      CodeMirror2.off(cm.getInputField(), "keydown", onKeyEventTargetKeyDown);
    }
    if (!isPlaying && vim2.insertModeRepeat > 1) {
      repeatLastEdit(
        cm,
        vim2,
        vim2.insertModeRepeat - 1,
        true
      );
      vim2.lastEditInputState.repeatOverride = vim2.insertModeRepeat;
    }
    delete vim2.insertModeRepeat;
    vim2.insertMode = false;
    cm.setCursor(cm.getCursor().line, cm.getCursor().ch - 1);
    cm.setOption("keyMap", "vim");
    cm.setOption("disableInput", true);
    cm.toggleOverwrite(false);
    insertModeChangeRegister.setText(lastChange.changes.join(""));
    CodeMirror2.signal(cm, "vim-mode-change", { mode: "normal" });
    if (macroModeState.isRecording) {
      logInsertModeChange(macroModeState);
    }
  }
  function _mapCommand(command) {
    defaultKeymap.unshift(command);
  }
  function mapCommand(keys, type, name, args, extra) {
    var command = { keys, type };
    command[type] = name;
    command[type + "Args"] = args;
    for (var key in extra)
      command[key] = extra[key];
    _mapCommand(command);
  }
  defineOption("insertModeEscKeysTimeout", 200, "number");
  CodeMirror2.keyMap["vim-insert"] = {
    fallthrough: ["default"],
    attach: attachVimMap,
    detach: detachVimMap,
    call: cmKey
  };
  CodeMirror2.keyMap["vim-replace"] = {
    "Backspace": "goCharLeft",
    fallthrough: ["vim-insert"],
    attach: attachVimMap,
    detach: detachVimMap,
    call: cmKey
  };
  function executeMacroRegister(cm, vim2, macroModeState, registerName) {
    var register = vimGlobalState.registerController.getRegister(registerName);
    if (registerName == ":") {
      if (register.keyBuffer[0]) {
        exCommandDispatcher.processCommand(cm, register.keyBuffer[0]);
      }
      macroModeState.isPlaying = false;
      return;
    }
    var keyBuffer = register.keyBuffer;
    var imc = 0;
    macroModeState.isPlaying = true;
    macroModeState.replaySearchQueries = register.searchQueries.slice(0);
    for (var i = 0; i < keyBuffer.length; i++) {
      var text = keyBuffer[i];
      var match, key;
      while (text) {
        match = /<\w+-.+?>|<\w+>|./.exec(text);
        key = match[0];
        text = text.substring(match.index + key.length);
        vimApi.handleKey(cm, key, "macro");
        if (vim2.insertMode) {
          var changes = register.insertModeChanges[imc++].changes;
          vimGlobalState.macroModeState.lastInsertModeChanges.changes = changes;
          repeatInsertModeChanges(cm, changes, 1);
          exitInsertMode(cm);
        }
      }
    }
    macroModeState.isPlaying = false;
  }
  function logKey(macroModeState, key) {
    if (macroModeState.isPlaying) {
      return;
    }
    var registerName = macroModeState.latestRegister;
    var register = vimGlobalState.registerController.getRegister(registerName);
    if (register) {
      register.pushText(key);
    }
  }
  function logInsertModeChange(macroModeState) {
    if (macroModeState.isPlaying) {
      return;
    }
    var registerName = macroModeState.latestRegister;
    var register = vimGlobalState.registerController.getRegister(registerName);
    if (register && register.pushInsertModeChanges) {
      register.pushInsertModeChanges(macroModeState.lastInsertModeChanges);
    }
  }
  function logSearchQuery(macroModeState, query) {
    if (macroModeState.isPlaying) {
      return;
    }
    var registerName = macroModeState.latestRegister;
    var register = vimGlobalState.registerController.getRegister(registerName);
    if (register && register.pushSearchQuery) {
      register.pushSearchQuery(query);
    }
  }
  function onChange(cm, changeObj) {
    var macroModeState = vimGlobalState.macroModeState;
    var lastChange = macroModeState.lastInsertModeChanges;
    if (!macroModeState.isPlaying) {
      while (changeObj) {
        lastChange.expectCursorActivityForChange = true;
        if (lastChange.ignoreCount > 1) {
          lastChange.ignoreCount--;
        } else if (changeObj.origin == "+input" || changeObj.origin == "paste" || changeObj.origin === void 0) {
          var selectionCount = cm.listSelections().length;
          if (selectionCount > 1)
            lastChange.ignoreCount = selectionCount;
          var text = changeObj.text.join("\n");
          if (lastChange.maybeReset) {
            lastChange.changes = [];
            lastChange.maybeReset = false;
          }
          if (text) {
            if (cm.state.overwrite && !/\n/.test(text)) {
              lastChange.changes.push([text]);
            } else {
              lastChange.changes.push(text);
            }
          }
        }
        changeObj = changeObj.next;
      }
    }
  }
  function onCursorActivity(cm) {
    var vim2 = cm.state.vim;
    if (vim2.insertMode) {
      var macroModeState = vimGlobalState.macroModeState;
      if (macroModeState.isPlaying) {
        return;
      }
      var lastChange = macroModeState.lastInsertModeChanges;
      if (lastChange.expectCursorActivityForChange) {
        lastChange.expectCursorActivityForChange = false;
      } else {
        lastChange.maybeReset = true;
      }
    } else if (!cm.curOp.isVimOp) {
      handleExternalSelection(cm, vim2);
    }
  }
  function handleExternalSelection(cm, vim2) {
    var anchor = cm.getCursor("anchor");
    var head = cm.getCursor("head");
    if (vim2.visualMode && !cm.somethingSelected()) {
      exitVisualMode(cm, false);
    } else if (!vim2.visualMode && !vim2.insertMode && cm.somethingSelected()) {
      vim2.visualMode = true;
      vim2.visualLine = false;
      CodeMirror2.signal(cm, "vim-mode-change", { mode: "visual" });
    }
    if (vim2.visualMode) {
      var headOffset = !cursorIsBefore(head, anchor) ? -1 : 0;
      var anchorOffset = cursorIsBefore(head, anchor) ? -1 : 0;
      head = offsetCursor(head, 0, headOffset);
      anchor = offsetCursor(anchor, 0, anchorOffset);
      vim2.sel = {
        anchor,
        head
      };
      updateMark(cm, vim2, "<", cursorMin(head, anchor));
      updateMark(cm, vim2, ">", cursorMax(head, anchor));
    } else if (!vim2.insertMode) {
      vim2.lastHPos = cm.getCursor().ch;
    }
  }
  function InsertModeKey(keyName) {
    this.keyName = keyName;
  }
  function onKeyEventTargetKeyDown(e) {
    var macroModeState = vimGlobalState.macroModeState;
    var lastChange = macroModeState.lastInsertModeChanges;
    var keyName = CodeMirror2.keyName(e);
    if (!keyName) {
      return;
    }
    function onKeyFound() {
      if (lastChange.maybeReset) {
        lastChange.changes = [];
        lastChange.maybeReset = false;
      }
      lastChange.changes.push(new InsertModeKey(keyName));
      return true;
    }
    if (keyName.indexOf("Delete") != -1 || keyName.indexOf("Backspace") != -1) {
      CodeMirror2.lookupKey(keyName, "vim-insert", onKeyFound);
    }
  }
  function repeatLastEdit(cm, vim2, repeat, repeatForInsert) {
    var macroModeState = vimGlobalState.macroModeState;
    macroModeState.isPlaying = true;
    var isAction = !!vim2.lastEditActionCommand;
    var cachedInputState = vim2.inputState;
    function repeatCommand() {
      if (isAction) {
        commandDispatcher.processAction(cm, vim2, vim2.lastEditActionCommand);
      } else {
        commandDispatcher.evalInput(cm, vim2);
      }
    }
    function repeatInsert(repeat2) {
      if (macroModeState.lastInsertModeChanges.changes.length > 0) {
        repeat2 = !vim2.lastEditActionCommand ? 1 : repeat2;
        var changeObject = macroModeState.lastInsertModeChanges;
        repeatInsertModeChanges(cm, changeObject.changes, repeat2);
      }
    }
    vim2.inputState = vim2.lastEditInputState;
    if (isAction && vim2.lastEditActionCommand.interlaceInsertRepeat) {
      for (var i = 0; i < repeat; i++) {
        repeatCommand();
        repeatInsert(1);
      }
    } else {
      if (!repeatForInsert) {
        repeatCommand();
      }
      repeatInsert(repeat);
    }
    vim2.inputState = cachedInputState;
    if (vim2.insertMode && !repeatForInsert) {
      exitInsertMode(cm);
    }
    macroModeState.isPlaying = false;
  }
  function repeatInsertModeChanges(cm, changes, repeat) {
    function keyHandler(binding) {
      if (typeof binding == "string") {
        CodeMirror2.commands[binding](cm);
      } else {
        binding(cm);
      }
      return true;
    }
    var head = cm.getCursor("head");
    var visualBlock = vimGlobalState.macroModeState.lastInsertModeChanges.visualBlock;
    if (visualBlock) {
      selectForInsert(cm, head, visualBlock + 1);
      repeat = cm.listSelections().length;
      cm.setCursor(head);
    }
    for (var i = 0; i < repeat; i++) {
      if (visualBlock) {
        cm.setCursor(offsetCursor(head, i, 0));
      }
      for (var j = 0; j < changes.length; j++) {
        var change = changes[j];
        if (change instanceof InsertModeKey) {
          CodeMirror2.lookupKey(change.keyName, "vim-insert", keyHandler);
        } else if (typeof change == "string") {
          cm.replaceSelection(change);
        } else {
          var start = cm.getCursor();
          var end = offsetCursor(start, 0, change[0].length);
          cm.replaceRange(change[0], start, end);
          cm.setCursor(end);
        }
      }
    }
    if (visualBlock) {
      cm.setCursor(offsetCursor(head, 0, 1));
    }
  }
  function cloneVimState(state) {
    var n = new state.constructor();
    Object.keys(state).forEach(function(key) {
      var o = state[key];
      if (Array.isArray(o))
        o = o.slice();
      else if (o && typeof o == "object" && o.constructor != Object)
        o = cloneVimState(o);
      n[key] = o;
    });
    if (state.sel) {
      n.sel = {
        head: state.sel.head && copyCursor(state.sel.head),
        anchor: state.sel.anchor && copyCursor(state.sel.anchor)
      };
    }
    return n;
  }
  function multiSelectHandleKey(cm, key, origin) {
    var isHandled = false;
    var vim2 = vimApi.maybeInitVimState_(cm);
    var visualBlock = vim2.visualBlock || vim2.wasInVisualBlock;
    var wasMultiselect = cm.isInMultiSelectMode();
    if (vim2.wasInVisualBlock && !wasMultiselect) {
      vim2.wasInVisualBlock = false;
    } else if (wasMultiselect && vim2.visualBlock) {
      vim2.wasInVisualBlock = true;
    }
    if (key == "<Esc>" && !vim2.insertMode && !vim2.visualMode && wasMultiselect && vim2.status == "<Esc>") {
      clearInputState(cm);
    } else if (visualBlock || !wasMultiselect || cm.inVirtualSelectionMode) {
      isHandled = vimApi.handleKey(cm, key, origin);
    } else {
      var old = cloneVimState(vim2);
      cm.operation(function() {
        cm.curOp.isVimOp = true;
        cm.forEachSelection(function() {
          var head = cm.getCursor("head");
          var anchor = cm.getCursor("anchor");
          var headOffset = !cursorIsBefore(head, anchor) ? -1 : 0;
          var anchorOffset = cursorIsBefore(head, anchor) ? -1 : 0;
          head = offsetCursor(head, 0, headOffset);
          anchor = offsetCursor(anchor, 0, anchorOffset);
          cm.state.vim.sel.head = head;
          cm.state.vim.sel.anchor = anchor;
          isHandled = vimApi.handleKey(cm, key, origin);
          if (cm.virtualSelection) {
            cm.state.vim = cloneVimState(old);
          }
        });
        if (cm.curOp.cursorActivity && !isHandled)
          cm.curOp.cursorActivity = false;
        cm.state.vim = vim2;
      }, true);
    }
    if (isHandled && !vim2.visualMode && !vim2.insert && vim2.visualMode != cm.somethingSelected()) {
      handleExternalSelection(cm, vim2);
    }
    return isHandled;
  }
  resetVimGlobalState();
  return vimApi;
}
function indexFromPos(doc, pos) {
  var ch = pos.ch;
  var lineNumber = pos.line + 1;
  if (lineNumber < 1) {
    lineNumber = 1;
    ch = 0;
  }
  if (lineNumber > doc.lines) {
    lineNumber = doc.lines;
    ch = Number.MAX_VALUE;
  }
  var line = doc.line(lineNumber);
  return Math.min(line.from + Math.max(0, ch), line.to);
}
function posFromIndex(doc, offset) {
  let line = doc.lineAt(offset);
  return { line: line.number - 1, ch: offset - line.from };
}
class Pos {
  constructor(line, ch) {
    this.line = line;
    this.ch = ch;
  }
}
function on(emitter, type, f) {
  if (emitter.addEventListener) {
    emitter.addEventListener(type, f, false);
  } else {
    var map = emitter._handlers || (emitter._handlers = {});
    map[type] = (map[type] || []).concat(f);
  }
}
function off(emitter, type, f) {
  if (emitter.removeEventListener) {
    emitter.removeEventListener(type, f, false);
  } else {
    var map = emitter._handlers, arr = map && map[type];
    if (arr) {
      var index = arr.indexOf(f);
      if (index > -1) {
        map[type] = arr.slice(0, index).concat(arr.slice(index + 1));
      }
    }
  }
}
function signal(emitter, type, ...args) {
  var _a;
  var handlers = (_a = emitter._handlers) === null || _a === void 0 ? void 0 : _a[type];
  if (!handlers)
    return;
  for (var i = 0; i < handlers.length; ++i) {
    handlers[i](...args);
  }
}
function signalTo(handlers, ...args) {
  if (!handlers)
    return;
  for (var i = 0; i < handlers.length; ++i) {
    handlers[i](...args);
  }
}
var specialKey = {
  Return: "CR",
  Backspace: "BS",
  "Delete": "Del",
  Escape: "Esc",
  Insert: "Ins",
  ArrowLeft: "Left",
  ArrowRight: "Right",
  ArrowUp: "Up",
  ArrowDown: "Down",
  Enter: "CR",
  " ": "Space"
};
var ignoredKeys = { Shift: 1, Alt: 1, Command: 1, Control: 1, CapsLock: 1, AltGraph: 1 };
let wordChar;
try {
  wordChar = /* @__PURE__ */ new RegExp("[\\w\\p{Alphabetic}\\p{Number}_]", "u");
} catch (_) {
  wordChar = /[\w]/;
}
function dispatchChange(cm, transaction) {
  var view = cm.cm6;
  var type = "input.type.compose";
  if (cm.curOp) {
    if (!cm.curOp.lastChange)
      type = "input.type.compose.start";
  }
  if (transaction.annotations) {
    try {
      transaction.annotations.some(function(note) {
        if (note.value == "input")
          note.value = type;
      });
    } catch (e) {
      console.error(e);
    }
  } else {
    transaction.userEvent = type;
  }
  return view.dispatch(transaction);
}
function runHistoryCommand(cm, revert) {
  var _a;
  if (cm.curOp) {
    cm.curOp.$changeStart = void 0;
  }
  (revert ? undo : redo)(cm.cm6);
  let changeStartIndex = (_a = cm.curOp) === null || _a === void 0 ? void 0 : _a.$changeStart;
  if (changeStartIndex != null) {
    cm.cm6.dispatch({ selection: { anchor: changeStartIndex } });
  }
}
class CodeMirror {
  constructor(cm6) {
    this.state = {};
    this.marks = /* @__PURE__ */ Object.create(null);
    this.$mid = 0;
    this.options = {};
    this._handlers = {};
    this.doc = {
      history: {
        done: [
          {
            changes: [
              {
                cm: this,
                get to() {
                  return this.cm.posFromIndex(this.cm.$lastChangeEndOffset);
                }
              }
            ]
          }
        ]
      }
    };
    this.$lastChangeEndOffset = 0;
    this.virtualSelection = null;
    this.cm6 = cm6;
    this.onChange = this.onChange.bind(this);
    this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  openDialog(template, callback, options) {
    return openDialog(this, template, callback, options);
  }
  openNotification(template, options) {
    return openNotification(this, template, options);
  }
  on(type, f) {
    on(this, type, f);
  }
  off(type, f) {
    off(this, type, f);
  }
  signal(type, e, handlers) {
    signal(this, type, e, handlers);
  }
  indexFromPos(pos) {
    return indexFromPos(this.cm6.state.doc, pos);
  }
  posFromIndex(offset) {
    return posFromIndex(this.cm6.state.doc, offset);
  }
  foldCode(pos) {
    let view = this.cm6;
    let ranges = view.state.selection.ranges;
    let doc = this.cm6.state.doc;
    let index = indexFromPos(doc, pos);
    let tmpRanges = EditorSelection.create([EditorSelection.range(index, index)], 0).ranges;
    view.state.selection.ranges = tmpRanges;
    foldCode(view);
    view.state.selection.ranges = ranges;
  }
  firstLine() {
    return 0;
  }
  lastLine() {
    return this.cm6.state.doc.lines - 1;
  }
  lineCount() {
    return this.cm6.state.doc.lines;
  }
  setCursor(line, ch) {
    if (typeof line === "object") {
      ch = line.ch;
      line = line.line;
    }
    var offset = indexFromPos(this.cm6.state.doc, { line, ch });
    this.cm6.dispatch({ selection: { anchor: offset } }, { scrollIntoView: !this.curOp });
    if (this.curOp && !this.curOp.isVimOp)
      this.onBeforeEndOperation();
  }
  getCursor(p) {
    var sel = this.cm6.state.selection.main;
    var offset = p == "head" || !p ? sel.head : p == "anchor" ? sel.anchor : p == "start" ? sel.from : p == "end" ? sel.to : null;
    if (offset == null)
      throw new Error("Invalid cursor type");
    return this.posFromIndex(offset);
  }
  listSelections() {
    var doc = this.cm6.state.doc;
    return this.cm6.state.selection.ranges.map((r) => {
      return {
        anchor: posFromIndex(doc, r.anchor),
        head: posFromIndex(doc, r.head)
      };
    });
  }
  setSelections(p, primIndex) {
    var doc = this.cm6.state.doc;
    var ranges = p.map((x) => {
      return EditorSelection.range(indexFromPos(doc, x.anchor), indexFromPos(doc, x.head));
    });
    this.cm6.dispatch({
      selection: EditorSelection.create(ranges, primIndex)
    });
  }
  setSelection(anchor, head, options) {
    var doc = this.cm6.state.doc;
    var ranges = [EditorSelection.range(indexFromPos(doc, anchor), indexFromPos(doc, head))];
    this.cm6.dispatch({
      selection: EditorSelection.create(ranges, 0)
    });
    if (options && options.origin == "*mouse") {
      this.onBeforeEndOperation();
    }
  }
  getLine(row) {
    var doc = this.cm6.state.doc;
    if (row < 0 || row >= doc.lines)
      return "";
    return this.cm6.state.doc.line(row + 1).text;
  }
  getLineHandle(row) {
    return { text: this.getLine(row), row };
  }
  getLineNumber(handle) {
    return handle.row;
  }
  getRange(s, e) {
    var doc = this.cm6.state.doc;
    return this.cm6.state.sliceDoc(indexFromPos(doc, s), indexFromPos(doc, e));
  }
  replaceRange(text, s, e) {
    if (!e)
      e = s;
    var doc = this.cm6.state.doc;
    var from = indexFromPos(doc, s);
    var to = indexFromPos(doc, e);
    dispatchChange(this, { changes: { from, to, insert: text } });
  }
  replaceSelection(text) {
    dispatchChange(this, this.cm6.state.replaceSelection(text));
  }
  replaceSelections(replacements) {
    var ranges = this.cm6.state.selection.ranges;
    var changes = ranges.map((r, i) => {
      return { from: r.from, to: r.to, insert: replacements[i] || "" };
    });
    dispatchChange(this, { changes });
  }
  getSelection() {
    return this.getSelections().join("\n");
  }
  getSelections() {
    var cm = this.cm6;
    return cm.state.selection.ranges.map((r) => cm.state.sliceDoc(r.from, r.to));
  }
  somethingSelected() {
    return this.cm6.state.selection.ranges.some((r) => !r.empty);
  }
  getInputField() {
    return this.cm6.contentDOM;
  }
  clipPos(p) {
    var doc = this.cm6.state.doc;
    var ch = p.ch;
    var lineNumber = p.line + 1;
    if (lineNumber < 1) {
      lineNumber = 1;
      ch = 0;
    }
    if (lineNumber > doc.lines) {
      lineNumber = doc.lines;
      ch = Number.MAX_VALUE;
    }
    var line = doc.line(lineNumber);
    ch = Math.min(Math.max(0, ch), line.to - line.from);
    return new Pos(lineNumber - 1, ch);
  }
  getValue() {
    return this.cm6.state.doc.toString();
  }
  setValue(text) {
    var cm = this.cm6;
    return cm.dispatch({
      changes: { from: 0, to: cm.state.doc.length, insert: text },
      selection: EditorSelection.range(0, 0)
    });
  }
  focus() {
    return this.cm6.focus();
  }
  blur() {
    return this.cm6.contentDOM.blur();
  }
  defaultTextHeight() {
    return this.cm6.defaultLineHeight;
  }
  findMatchingBracket(pos) {
    var state = this.cm6.state;
    var offset = indexFromPos(state.doc, pos);
    var m = matchBrackets(state, offset + 1, -1);
    if (m && m.end) {
      return { to: posFromIndex(state.doc, m.end.from) };
    }
    m = matchBrackets(state, offset, 1);
    if (m && m.end) {
      return { to: posFromIndex(state.doc, m.end.from) };
    }
    return { to: void 0 };
  }
  scanForBracket(pos, dir, style, config) {
    return scanForBracket(this, pos, dir, style, config);
  }
  indentLine(line, more) {
    if (more)
      this.indentMore();
    else
      this.indentLess();
  }
  indentMore() {
    indentMore(this.cm6);
  }
  indentLess() {
    indentLess(this.cm6);
  }
  execCommand(name) {
    if (name == "indentAuto")
      CodeMirror.commands.indentAuto(this);
    else if (name == "goLineLeft")
      cursorLineBoundaryBackward(this.cm6);
    else if (name == "goLineRight") {
      cursorLineBoundaryForward(this.cm6);
      cursorCharBackward(this.cm6);
    } else
      console.log(name + " is not implemented");
  }
  setBookmark(cursor, options) {
    var assoc = (options === null || options === void 0 ? void 0 : options.insertLeft) ? 1 : -1;
    var offset = this.indexFromPos(cursor);
    var bm = new Marker(this, offset, assoc);
    return bm;
  }
  addOverlay({ query }) {
    let cm6Query = new SearchQuery({
      regexp: true,
      search: query.source,
      caseSensitive: !/i/.test(query.flags)
    });
    if (cm6Query.valid) {
      cm6Query.forVim = true;
      this.cm6Query = cm6Query;
      let effect = setSearchQuery.of(cm6Query);
      this.cm6.dispatch({ effects: effect });
      return cm6Query;
    }
  }
  removeOverlay(overlay) {
    if (!this.cm6Query)
      return;
    this.cm6Query.forVim = false;
    let effect = setSearchQuery.of(this.cm6Query);
    this.cm6.dispatch({ effects: effect });
  }
  getSearchCursor(query, pos) {
    var cm = this;
    var last = null;
    var lastCM5Result = null;
    if (pos.ch == void 0)
      pos.ch = Number.MAX_VALUE;
    var firstOffset = indexFromPos(cm.cm6.state.doc, pos);
    var source = query.source.replace(/(\\.|{(?:\d+(?:,\d*)?|,\d+)})|[{}]/g, function(a, b) {
      if (!b)
        return "\\" + a;
      return b;
    });
    function rCursor(doc, from = 0, to = doc.length) {
      return new RegExpCursor(doc, source, { ignoreCase: query.ignoreCase }, from, to);
    }
    function nextMatch(from) {
      var doc = cm.cm6.state.doc;
      if (from > doc.length)
        return null;
      let res = rCursor(doc, from).next();
      return res.done ? null : res.value;
    }
    var ChunkSize = 1e4;
    function prevMatchInRange(from, to) {
      var doc = cm.cm6.state.doc;
      for (let size = 1; ; size++) {
        let start = Math.max(from, to - size * ChunkSize);
        let cursor = rCursor(doc, start, to), range = null;
        while (!cursor.next().done)
          range = cursor.value;
        if (range && (start == from || range.from > start + 10))
          return range;
        if (start == from)
          return null;
      }
    }
    return {
      findNext: function() {
        return this.find(false);
      },
      findPrevious: function() {
        return this.find(true);
      },
      find: function(back) {
        var doc = cm.cm6.state.doc;
        if (back) {
          let endAt = last ? last.from == last.to ? last.to - 1 : last.from : firstOffset;
          last = prevMatchInRange(0, endAt);
        } else {
          let startFrom = last ? last.from == last.to ? last.to + 1 : last.to : firstOffset;
          last = nextMatch(startFrom);
        }
        lastCM5Result = last && {
          from: posFromIndex(doc, last.from),
          to: posFromIndex(doc, last.to),
          match: last.match
        };
        return last && last.match;
      },
      from: function() {
        return lastCM5Result === null || lastCM5Result === void 0 ? void 0 : lastCM5Result.from;
      },
      to: function() {
        return lastCM5Result === null || lastCM5Result === void 0 ? void 0 : lastCM5Result.to;
      },
      replace: function(text) {
        if (last) {
          dispatchChange(cm, {
            changes: { from: last.from, to: last.to, insert: text }
          });
          last.to = last.from + text.length;
          if (lastCM5Result) {
            lastCM5Result.to = posFromIndex(cm.cm6.state.doc, last.to);
          }
        }
      }
    };
  }
  findPosV(start, amount, unit, goalColumn) {
    let { cm6 } = this;
    const doc = cm6.state.doc;
    let pixels = unit == "page" ? cm6.dom.clientHeight : 0;
    const startOffset = indexFromPos(doc, start);
    let range = EditorSelection.range(startOffset, startOffset, goalColumn);
    let count = Math.round(Math.abs(amount));
    for (let i = 0; i < count; i++) {
      if (unit == "page") {
        range = cm6.moveVertically(range, amount > 0, pixels);
      } else if (unit == "line") {
        range = cm6.moveVertically(range, amount > 0);
      }
    }
    let pos = posFromIndex(doc, range.head);
    if (amount < 0 && range.head == 0 && goalColumn != 0 && start.line == 0 && start.ch != 0 || amount > 0 && range.head == doc.length && pos.ch != goalColumn && start.line == pos.line) {
      pos.hitSide = true;
    }
    return pos;
  }
  charCoords(pos, mode) {
    var rect = this.cm6.contentDOM.getBoundingClientRect();
    var offset = indexFromPos(this.cm6.state.doc, pos);
    var coords = this.cm6.coordsAtPos(offset);
    var d = -rect.top;
    return { left: ((coords === null || coords === void 0 ? void 0 : coords.left) || 0) - rect.left, top: ((coords === null || coords === void 0 ? void 0 : coords.top) || 0) + d, bottom: ((coords === null || coords === void 0 ? void 0 : coords.bottom) || 0) + d };
  }
  coordsChar(coords, mode) {
    var rect = this.cm6.contentDOM.getBoundingClientRect();
    var offset = this.cm6.posAtCoords({ x: coords.left + rect.left, y: coords.top + rect.top }) || 0;
    return posFromIndex(this.cm6.state.doc, offset);
  }
  getScrollInfo() {
    var scroller = this.cm6.scrollDOM;
    return {
      left: scroller.scrollLeft,
      top: scroller.scrollTop,
      height: scroller.scrollHeight,
      width: scroller.scrollWidth,
      clientHeight: scroller.clientHeight,
      clientWidth: scroller.clientWidth
    };
  }
  scrollTo(x, y) {
    if (x != null)
      this.cm6.scrollDOM.scrollLeft = x;
    if (y != null)
      this.cm6.scrollDOM.scrollTop = y;
  }
  scrollIntoView(pos, margin) {
    if (pos) {
      var offset = this.indexFromPos(pos);
      this.cm6.dispatch({
        effects: EditorView.scrollIntoView(offset)
      });
    } else {
      this.cm6.dispatch({ scrollIntoView: true, userEvent: "scroll" });
    }
  }
  getWrapperElement() {
    return this.cm6.dom;
  }
  getMode() {
    return { name: this.getOption("mode") };
  }
  setSize(w, h) {
    this.cm6.dom.style.width = w + 4 + "px";
    this.cm6.dom.style.height = h + "px";
    this.refresh();
  }
  refresh() {
    this.cm6.measure();
  }
  destroy() {
    this.removeOverlay();
  }
  onChange(update) {
    for (let i in this.marks) {
      let m = this.marks[i];
      m.update(update.changes);
    }
    if (this.virtualSelection) {
      this.virtualSelection.ranges = this.virtualSelection.ranges.map((range) => range.map(update.changes));
    }
    var curOp = this.curOp = this.curOp || {};
    update.changes.iterChanges((fromA, toA, fromB, toB, text) => {
      if (curOp.$changeStart == null || curOp.$changeStart > fromB)
        curOp.$changeStart = fromB;
      this.$lastChangeEndOffset = toB;
      var change = { text: text.toJSON() };
      if (!curOp.lastChange) {
        curOp.lastChange = curOp.change = change;
      } else {
        curOp.lastChange.next = curOp.lastChange = change;
      }
    }, true);
    if (!curOp.changeHandlers)
      curOp.changeHandlers = this._handlers["change"] && this._handlers["change"].slice();
  }
  onSelectionChange() {
    var curOp = this.curOp = this.curOp || {};
    if (!curOp.cursorActivityHandlers)
      curOp.cursorActivityHandlers = this._handlers["cursorActivity"] && this._handlers["cursorActivity"].slice();
    this.curOp.cursorActivity = true;
  }
  operation(fn) {
    if (!this.curOp)
      this.curOp = { $d: 0 };
    this.curOp.$d++;
    try {
      var result = fn();
    } finally {
      if (this.curOp) {
        this.curOp.$d--;
        if (!this.curOp.$d)
          this.onBeforeEndOperation();
      }
    }
    return result;
  }
  onBeforeEndOperation() {
    var op = this.curOp;
    var scrollIntoView = false;
    if (op) {
      if (op.change) {
        signalTo(op.changeHandlers, this, op.change);
      }
      if (op && op.cursorActivity) {
        signalTo(op.cursorActivityHandlers, this, null);
        if (op.isVimOp)
          scrollIntoView = true;
      }
      this.curOp = null;
    }
    if (scrollIntoView)
      this.scrollIntoView();
  }
  moveH(increment, unit) {
    if (unit == "char") {
      var cur = this.getCursor();
      this.setCursor(cur.line, cur.ch + increment);
    }
  }
  setOption(name, val) {
    switch (name) {
      case "keyMap":
        this.state.keyMap = val;
        break;
    }
  }
  getOption(name) {
    switch (name) {
      case "firstLineNumber":
        return 1;
      case "tabSize":
        return this.cm6.state.tabSize || 4;
      case "readonly":
        return this.cm6.state.readOnly;
      case "indentWithTabs":
        return this.cm6.state.facet(indentUnit) == "	";
      case "indentUnit":
        return this.cm6.state.facet(indentUnit).length || 2;
      case "keyMap":
        return this.state.keyMap || "vim";
    }
  }
  toggleOverwrite(on2) {
    this.state.overwrite = on2;
  }
  getTokenTypeAt(pos) {
    var _a;
    var offset = this.indexFromPos(pos);
    var tree = ensureSyntaxTree(this.cm6.state, offset);
    var node = tree === null || tree === void 0 ? void 0 : tree.resolve(offset);
    var type = ((_a = node === null || node === void 0 ? void 0 : node.type) === null || _a === void 0 ? void 0 : _a.name) || "";
    if (/comment/i.test(type))
      return "comment";
    if (/string/i.test(type))
      return "string";
    return "";
  }
  overWriteSelection(text) {
    var doc = this.cm6.state.doc;
    var sel = this.cm6.state.selection;
    var ranges = sel.ranges.map((x) => {
      if (x.empty) {
        var ch = x.to < doc.length ? doc.sliceString(x.from, x.to + 1) : "";
        if (ch && !/\n/.test(ch))
          return EditorSelection.range(x.from, x.to + 1);
      }
      return x;
    });
    this.cm6.dispatch({
      selection: EditorSelection.create(ranges, sel.mainIndex)
    });
    this.replaceSelection(text);
  }
  isInMultiSelectMode() {
    return this.cm6.state.selection.ranges.length > 1;
  }
  virtualSelectionMode() {
    return !!this.virtualSelection;
  }
  forEachSelection(command) {
    var selection = this.cm6.state.selection;
    this.virtualSelection = EditorSelection.create(selection.ranges, selection.mainIndex);
    for (var i = 0; i < this.virtualSelection.ranges.length; i++) {
      var range = this.virtualSelection.ranges[i];
      if (!range)
        continue;
      this.cm6.dispatch({ selection: EditorSelection.create([range]) });
      command();
      this.virtualSelection.ranges[i] = this.cm6.state.selection.ranges[0];
    }
    this.cm6.dispatch({ selection: this.virtualSelection });
    this.virtualSelection = null;
  }
}
CodeMirror.Pos = Pos;
CodeMirror.StringStream = StringStream;
CodeMirror.commands = {
  cursorCharLeft: function(cm) {
    cursorCharLeft(cm.cm6);
  },
  redo: function(cm) {
    runHistoryCommand(cm, false);
  },
  undo: function(cm) {
    runHistoryCommand(cm, true);
  },
  newlineAndIndent: function(cm) {
    insertNewlineAndIndent({
      state: cm.cm6.state,
      dispatch: (tr) => {
        return dispatchChange(cm, tr);
      }
    });
  },
  indentAuto: function(cm) {
    indentSelection(cm.cm6);
  }
};
CodeMirror.defineOption = function(name, val, setter) {
};
CodeMirror.isWordChar = function(ch) {
  return wordChar.test(ch);
};
CodeMirror.keys = {
  Backspace: function(cm) {
    deleteCharBackward(cm.cm6);
  },
  Delete: function(cm) {
    deleteCharForward(cm.cm6);
  }
};
CodeMirror.keyMap = {};
CodeMirror.addClass = function() {
};
CodeMirror.rmClass = function() {
};
CodeMirror.e_preventDefault = function(e) {
  e.preventDefault();
};
CodeMirror.e_stop = function(e) {
  var _a, _b;
  (_a = e === null || e === void 0 ? void 0 : e.stopPropagation) === null || _a === void 0 ? void 0 : _a.call(e);
  (_b = e === null || e === void 0 ? void 0 : e.preventDefault) === null || _b === void 0 ? void 0 : _b.call(e);
};
CodeMirror.keyName = function(e) {
  var key = e.key;
  if (ignoredKeys[key])
    return;
  if (key == "Escape")
    key = "Esc";
  if (key == " ")
    key = "Space";
  if (key.length > 1) {
    key = key.replace(/Numpad|Arrow/, "");
  }
  if (key.length == 1)
    key = key.toUpperCase();
  var name = "";
  if (e.ctrlKey) {
    name += "Ctrl-";
  }
  if (e.altKey) {
    name += "Alt-";
  }
  if ((name || key.length > 1) && e.shiftKey) {
    name += "Shift-";
  }
  name += key;
  return name;
};
CodeMirror.vimKey = function vimKey(e) {
  var key = e.key;
  if (ignoredKeys[key])
    return;
  if (key.length > 1 && key[0] == "n") {
    key = key.replace("Numpad", "");
  }
  key = specialKey[key] || key;
  var name = "";
  if (e.ctrlKey) {
    name += "C-";
  }
  if (e.altKey) {
    name += "A-";
  }
  if (e.metaKey) {
    name += "M-";
  }
  if ((name || key.length > 1) && e.shiftKey) {
    name += "S-";
  }
  name += key;
  if (name.length > 1) {
    name = "<" + name + ">";
  }
  return name;
};
CodeMirror.lookupKey = function lookupKey(key, map, handle) {
  var result = CodeMirror.keys[key];
  if (result)
    handle(result);
};
CodeMirror.on = on;
CodeMirror.off = off;
CodeMirror.signal = signal;
CodeMirror.findMatchingTag = findMatchingTag;
CodeMirror.findEnclosingTag = findEnclosingTag;
function dialogDiv(cm, template, bottom) {
  var dialog = document.createElement("div");
  dialog.appendChild(template);
  return dialog;
}
function closeNotification(cm, newVal) {
  if (cm.state.currentNotificationClose)
    cm.state.currentNotificationClose();
  cm.state.currentNotificationClose = newVal;
}
function openNotification(cm, template, options) {
  closeNotification(cm, close);
  var dialog = dialogDiv(cm, template, options && options.bottom);
  var closed = false;
  var doneTimer;
  var duration = options && typeof options.duration !== "undefined" ? options.duration : 5e3;
  function close() {
    if (closed)
      return;
    closed = true;
    clearTimeout(doneTimer);
    dialog.remove();
    hideDialog(cm, dialog);
  }
  dialog.onclick = function(e) {
    e.preventDefault();
    close();
  };
  showDialog(cm, dialog);
  if (duration)
    doneTimer = setTimeout(close, duration);
  return close;
}
function showDialog(cm, dialog) {
  var oldDialog = cm.state.dialog;
  cm.state.dialog = dialog;
  if (dialog && oldDialog !== dialog) {
    if (oldDialog && oldDialog.contains(document.activeElement))
      cm.focus();
    if (oldDialog && oldDialog.parentElement) {
      oldDialog.parentElement.replaceChild(dialog, oldDialog);
    } else if (oldDialog) {
      oldDialog.remove();
    }
    CodeMirror.signal(cm, "dialog");
  }
}
function hideDialog(cm, dialog) {
  if (cm.state.dialog == dialog) {
    cm.state.dialog = null;
    CodeMirror.signal(cm, "dialog");
  }
}
function openDialog(me, template, callback, options) {
  if (!options)
    options = {};
  closeNotification(me, void 0);
  var dialog = dialogDiv(me, template, options.bottom);
  var closed = false;
  showDialog(me, dialog);
  function close(newVal) {
    if (typeof newVal == "string") {
      inp.value = newVal;
    } else {
      if (closed)
        return;
      closed = true;
      hideDialog(me, dialog);
      if (!me.state.dialog)
        me.focus();
      if (options.onClose)
        options.onClose(dialog);
    }
  }
  var inp = dialog.getElementsByTagName("input")[0];
  if (inp) {
    if (options.value) {
      inp.value = options.value;
      if (options.selectValueOnOpen !== false)
        inp.select();
    }
    if (options.onInput)
      CodeMirror.on(inp, "input", function(e) {
        options.onInput(e, inp.value, close);
      });
    if (options.onKeyUp)
      CodeMirror.on(inp, "keyup", function(e) {
        options.onKeyUp(e, inp.value, close);
      });
    CodeMirror.on(inp, "keydown", function(e) {
      if (options && options.onKeyDown && options.onKeyDown(e, inp.value, close)) {
        return;
      }
      if (e.keyCode == 13)
        callback(inp.value);
      if (e.keyCode == 27 || options.closeOnEnter !== false && e.keyCode == 13) {
        inp.blur();
        CodeMirror.e_stop(e);
        close();
      }
    });
    if (options.closeOnBlur !== false)
      CodeMirror.on(inp, "blur", function() {
        setTimeout(function() {
          if (document.activeElement === inp)
            return;
          close();
        });
      });
    inp.focus();
  }
  return close;
}
var matching = { "(": ")>", ")": "(<", "[": "]>", "]": "[<", "{": "}>", "}": "{<", "<": ">>", ">": "<<" };
function bracketRegex(config) {
  return config && config.bracketRegex || /[(){}[\]]/;
}
function scanForBracket(cm, where, dir, style, config) {
  var maxScanLen = config && config.maxScanLineLength || 1e4;
  var maxScanLines = config && config.maxScanLines || 1e3;
  var stack = [];
  var re = bracketRegex(config);
  var lineEnd = dir > 0 ? Math.min(where.line + maxScanLines, cm.lastLine() + 1) : Math.max(cm.firstLine() - 1, where.line - maxScanLines);
  for (var lineNo = where.line; lineNo != lineEnd; lineNo += dir) {
    var line = cm.getLine(lineNo);
    if (!line)
      continue;
    var pos = dir > 0 ? 0 : line.length - 1, end = dir > 0 ? line.length : -1;
    if (line.length > maxScanLen)
      continue;
    if (lineNo == where.line)
      pos = where.ch - (dir < 0 ? 1 : 0);
    for (; pos != end; pos += dir) {
      var ch = line.charAt(pos);
      if (re.test(ch)) {
        var match = matching[ch];
        if (match && match.charAt(1) == ">" == dir > 0)
          stack.push(ch);
        else if (!stack.length)
          return { pos: new Pos(lineNo, pos), ch };
        else
          stack.pop();
      }
    }
  }
  return lineNo - dir == (dir > 0 ? cm.lastLine() : cm.firstLine()) ? false : null;
}
function findMatchingTag(cm, pos) {
  var state = cm.cm6.state;
  var offset = cm.indexFromPos(pos);
  var m = matchBrackets(state, offset + 1, -1, { brackets: "\n\n" });
  if (m) {
    if (!m.end || !m.start)
      return;
    return {
      open: convertRange(state.doc, m.end),
      close: convertRange(state.doc, m.start)
    };
  }
  m = matchBrackets(state, offset, 1, { brackets: "\n\n" });
  if (m) {
    if (!m.end || !m.start)
      return;
    return {
      open: convertRange(state.doc, m.start),
      close: convertRange(state.doc, m.end)
    };
  }
}
function convertRange(doc, cm6Range) {
  return {
    from: posFromIndex(doc, cm6Range.from),
    to: posFromIndex(doc, cm6Range.to)
  };
}
function findEnclosingTag(cm, pos) {
  var state = cm.cm6.state;
  var offset = cm.indexFromPos(pos);
  var text = state.sliceDoc(0, offset);
  var i = offset;
  while (i > 0) {
    var m = matchBrackets(state, i, 1, { brackets: "\n\n" });
    if (m && m.start && m.end) {
      return {
        open: convertRange(state.doc, m.start),
        close: convertRange(state.doc, m.end)
      };
    }
    i = text.lastIndexOf(">", i - 1);
  }
}
class Marker {
  constructor(cm, offset, assoc) {
    this.cm = cm;
    this.id = cm.$mid++;
    this.offset = offset;
    this.assoc = assoc;
    cm.marks[this.id] = this;
  }
  clear() {
    delete this.cm.marks[this.id];
  }
  find() {
    if (this.offset == null)
      return null;
    return this.cm.posFromIndex(this.offset);
  }
  update(change) {
    if (this.offset != null)
      this.offset = change.mapPos(this.offset, this.assoc, MapMode.TrackDel);
  }
}
class Piece {
  constructor(left, top, height, fontFamily, fontSize, fontWeight, color, className, letter, partial) {
    this.left = left;
    this.top = top;
    this.height = height;
    this.fontFamily = fontFamily;
    this.fontSize = fontSize;
    this.fontWeight = fontWeight;
    this.color = color;
    this.className = className;
    this.letter = letter;
    this.partial = partial;
  }
  draw() {
    let elt = document.createElement("div");
    elt.className = this.className;
    this.adjust(elt);
    return elt;
  }
  adjust(elt) {
    elt.style.left = this.left + "px";
    elt.style.top = this.top + "px";
    elt.style.height = this.height + "px";
    elt.style.lineHeight = this.height + "px";
    elt.style.fontFamily = this.fontFamily;
    elt.style.fontSize = this.fontSize;
    elt.style.fontWeight = this.fontWeight;
    elt.style.color = this.partial ? "transparent" : this.color;
    elt.className = this.className;
    elt.textContent = this.letter;
  }
  eq(p) {
    return this.left == p.left && this.top == p.top && this.height == p.height && this.fontFamily == p.fontFamily && this.fontSize == p.fontSize && this.fontWeight == p.fontWeight && this.color == p.color && this.className == p.className && this.letter == p.letter;
  }
}
class BlockCursorPlugin {
  constructor(view, cm) {
    this.view = view;
    this.rangePieces = [];
    this.cursors = [];
    this.cm = cm;
    this.measureReq = { read: this.readPos.bind(this), write: this.drawSel.bind(this) };
    this.cursorLayer = view.scrollDOM.appendChild(document.createElement("div"));
    this.cursorLayer.className = "cm-cursorLayer cm-vimCursorLayer";
    this.cursorLayer.setAttribute("aria-hidden", "true");
    view.requestMeasure(this.measureReq);
    this.setBlinkRate();
  }
  setBlinkRate() {
    this.cursorLayer.style.animationDuration = 1200 + "ms";
  }
  update(update) {
    if (update.selectionSet || update.geometryChanged || update.viewportChanged) {
      this.view.requestMeasure(this.measureReq);
      this.cursorLayer.style.animationName = this.cursorLayer.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink";
    }
  }
  scheduleRedraw() {
    this.view.requestMeasure(this.measureReq);
  }
  readPos() {
    let { state } = this.view;
    let cursors = [];
    for (let r of state.selection.ranges) {
      let prim = r == state.selection.main;
      let piece = measureCursor(this.cm, this.view, r, prim);
      if (piece)
        cursors.push(piece);
    }
    return { cursors };
  }
  drawSel({ cursors }) {
    if (cursors.length != this.cursors.length || cursors.some((c, i) => !c.eq(this.cursors[i]))) {
      let oldCursors = this.cursorLayer.children;
      if (oldCursors.length !== cursors.length) {
        this.cursorLayer.textContent = "";
        for (const c of cursors)
          this.cursorLayer.appendChild(c.draw());
      } else {
        cursors.forEach((c, idx) => c.adjust(oldCursors[idx]));
      }
      this.cursors = cursors;
    }
  }
  destroy() {
    this.cursorLayer.remove();
  }
}
const themeSpec = {
  ".cm-vimMode .cm-line": {
    "& ::selection": { backgroundColor: "transparent !important" },
    "&::selection": { backgroundColor: "transparent !important" },
    caretColor: "transparent !important"
  },
  ".cm-fat-cursor": {
    position: "absolute",
    background: "#ff9696",
    border: "none",
    whiteSpace: "pre"
  },
  "&:not(.cm-focused) .cm-fat-cursor": {
    background: "none",
    outline: "solid 1px #ff9696"
  }
};
const hideNativeSelection = /* @__PURE__ */ Prec.highest(/* @__PURE__ */ EditorView.theme(themeSpec));
function getBase(view) {
  let rect = view.scrollDOM.getBoundingClientRect();
  let left = view.textDirection == Direction.LTR ? rect.left : rect.right - view.scrollDOM.clientWidth;
  return { left: left - view.scrollDOM.scrollLeft, top: rect.top - view.scrollDOM.scrollTop };
}
function measureCursor(cm, view, cursor, primary) {
  let head = cursor.head;
  let fatCursor = false;
  let hCoeff = 1;
  let vim2 = cm.state.vim;
  if (vim2 && (!vim2.insertMode || cm.state.overwrite)) {
    fatCursor = true;
    if (vim2.visualBlock && !primary)
      return null;
    if (cursor.anchor < cursor.head)
      head--;
    if (cm.state.overwrite)
      hCoeff = 0.2;
    else if (vim2.status)
      hCoeff = 0.5;
  }
  if (fatCursor) {
    let pos = view.coordsAtPos(head, cursor.assoc || 1);
    if (!pos)
      return null;
    let base = getBase(view);
    let domAtPos = view.domAtPos(head);
    let node = domAtPos ? domAtPos.node : view.contentDOM;
    while (domAtPos && domAtPos.node instanceof HTMLElement) {
      node = domAtPos.node;
      domAtPos = { node: domAtPos.node.childNodes[domAtPos.offset], offset: 0 };
    }
    if (!(node instanceof HTMLElement)) {
      node = node.parentNode;
    }
    let style = getComputedStyle(node);
    let letter = head < view.state.doc.length && view.state.sliceDoc(head, head + 1);
    if (!letter || letter == "\n" || letter == "\r")
      letter = "\xA0";
    let h = pos.bottom - pos.top;
    return new Piece(pos.left - base.left, pos.top - base.top + h * (1 - hCoeff), h * hCoeff, style.fontFamily, style.fontSize, style.fontWeight, style.color, primary ? "cm-fat-cursor cm-cursor-primary" : "cm-fat-cursor cm-cursor-secondary", letter, hCoeff != 1);
  } else {
    return null;
  }
}
const Vim = /* @__PURE__ */ initVim(CodeMirror);
const HighlightMargin = 250;
const vimStyle = /* @__PURE__ */ EditorView.baseTheme({
  ".cm-vimMode .cm-cursorLayer:not(.cm-vimCursorLayer)": {
    display: "none"
  },
  ".cm-vim-panel": {
    padding: "0px 10px",
    fontFamily: "monospace",
    minHeight: "1.3em"
  },
  ".cm-vim-panel input": {
    border: "none",
    outline: "none",
    backgroundColor: "inherit"
  },
  "&light .cm-searchMatch": { backgroundColor: "#ffff0054" },
  "&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" }
});
const vimPlugin = /* @__PURE__ */ ViewPlugin.fromClass(class {
  constructor(view) {
    this.status = "";
    this.query = null;
    this.decorations = Decoration.none;
    this.view = view;
    const cm = this.cm = new CodeMirror(view);
    Vim.enterVimMode(this.cm);
    this.view.cm = this.cm;
    this.cm.state.vimPlugin = this;
    this.blockCursor = new BlockCursorPlugin(view, cm);
    this.updateClass();
    this.cm.on("vim-command-done", () => {
      if (cm.state.vim)
        cm.state.vim.status = "";
      this.blockCursor.scheduleRedraw();
      this.updateStatus();
    });
    this.cm.on("vim-mode-change", (e) => {
      cm.state.vim.mode = e.mode;
      if (e.subMode) {
        cm.state.vim.mode += " block";
      }
      cm.state.vim.status = "";
      this.blockCursor.scheduleRedraw();
      this.updateClass();
      this.updateStatus();
    });
    this.cm.on("dialog", () => {
      if (this.cm.state.statusbar) {
        this.updateStatus();
      } else {
        view.dispatch({
          effects: showVimPanel.of(!!this.cm.state.dialog)
        });
      }
    });
    this.dom = document.createElement("span");
    this.dom.style.cssText = "position: absolute; right: 10px; top: 1px";
  }
  update(update) {
    var _a;
    if ((update.viewportChanged || update.docChanged) && this.query) {
      this.highlight(this.query);
    }
    if (update.docChanged) {
      this.cm.onChange(update);
    }
    if (update.selectionSet) {
      this.cm.onSelectionChange();
    }
    if (update.viewportChanged)
      ;
    if (this.cm.curOp && !this.cm.curOp.isVimOp) {
      this.cm.onBeforeEndOperation();
    }
    if (update.transactions) {
      for (let tr of update.transactions)
        for (let effect of tr.effects) {
          if (effect.is(setSearchQuery)) {
            let forVim = (_a = effect.value) === null || _a === void 0 ? void 0 : _a.forVim;
            if (!forVim) {
              this.highlight(null);
            } else {
              let query = effect.value.create();
              this.highlight(query);
            }
          }
        }
    }
    this.blockCursor.update(update);
  }
  updateClass() {
    const state = this.cm.state;
    if (!state.vim || state.vim.insertMode && !state.overwrite)
      this.view.scrollDOM.classList.remove("cm-vimMode");
    else
      this.view.scrollDOM.classList.add("cm-vimMode");
  }
  updateStatus() {
    let dom = this.cm.state.statusbar;
    let vim2 = this.cm.state.vim;
    if (!dom || !vim2)
      return;
    let dialog = this.cm.state.dialog;
    if (dialog) {
      if (dialog.parentElement != dom) {
        dom.textContent = "";
        dom.appendChild(dialog);
      }
    } else {
      dom.textContent = `--${(vim2.mode || "normal").toUpperCase()}--`;
    }
    this.dom.textContent = vim2.status;
    dom.appendChild(this.dom);
  }
  destroy() {
    Vim.leaveVimMode(this.cm);
    this.updateClass();
    this.blockCursor.destroy();
    delete this.view.cm;
  }
  highlight(query) {
    this.query = query;
    if (!query)
      return this.decorations = Decoration.none;
    let { view } = this;
    let builder = new RangeSetBuilder();
    for (let i = 0, ranges = view.visibleRanges, l = ranges.length; i < l; i++) {
      let { from, to } = ranges[i];
      while (i < l - 1 && to > ranges[i + 1].from - 2 * HighlightMargin)
        to = ranges[++i].to;
      query.highlight(view.state, from, to, (from2, to2) => {
        builder.add(from2, to2, matchMark);
      });
    }
    return this.decorations = builder.finish();
  }
}, {
  eventHandlers: {
    keydown: function(e, view) {
      const key = CodeMirror.vimKey(e);
      const cm = this.cm;
      if (!key)
        return;
      let vim2 = cm.state.vim;
      if (!vim2)
        return;
      if (key == "<Esc>" && !vim2.insertMode && !vim2.visualMode && this.query) {
        const searchState = vim2.searchState_;
        if (searchState) {
          cm.removeOverlay(searchState.getOverlay());
          searchState.setOverlay(null);
        }
      }
      vim2.status = (vim2.status || "") + key;
      let result = Vim.multiSelectHandleKey(cm, key, "user");
      vim2 = cm.state.vim;
      if (!result && vim2.insertMode && cm.state.overwrite) {
        if (e.key && e.key.length == 1 && !/\n/.test(e.key)) {
          result = true;
          cm.overWriteSelection(e.key);
        } else if (e.key == "Backspace") {
          result = true;
          CodeMirror.commands.cursorCharLeft(cm);
        }
      }
      if (result) {
        CodeMirror.signal(this.cm, "vim-keypress", key);
        e.preventDefault();
        e.stopPropagation();
        this.blockCursor.scheduleRedraw();
      }
      this.updateStatus();
      return !!result;
    }
  },
  decorations: (v) => v.decorations
});
const matchMark = /* @__PURE__ */ Decoration.mark({ class: "cm-searchMatch" });
const showVimPanel = /* @__PURE__ */ StateEffect.define();
const vimPanelState = /* @__PURE__ */ StateField.define({
  create: () => false,
  update(value, tr) {
    for (let e of tr.effects)
      if (e.is(showVimPanel))
        value = e.value;
    return value;
  },
  provide: (f) => {
    return showPanel.from(f, (on2) => on2 ? createVimPanel : null);
  }
});
function createVimPanel(view) {
  let dom = document.createElement("div");
  dom.className = "cm-vim-panel";
  let cm = view.cm;
  if (cm.state.dialog) {
    dom.appendChild(cm.state.dialog);
  }
  return { top: false, dom };
}
function statusPanel(view) {
  let dom = document.createElement("div");
  dom.className = "cm-vim-panel";
  let cm = view.cm;
  cm.state.statusbar = dom;
  cm.state.vimPlugin.updateStatus();
  return { dom };
}
function vim(options = {}) {
  return [
    vimStyle,
    vimPlugin,
    hideNativeSelection,
    options.status ? showPanel.of(statusPanel) : vimPanelState
  ];
}
export {
  vim
};
//# sourceMappingURL=vim.e0ec79d3.911edfcf.js.map
