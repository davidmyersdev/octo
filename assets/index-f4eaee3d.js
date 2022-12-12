import { d as RangeValue, R as RangeSet, M as MapMode, E as EditorSelection, c as EditorState, T as Transaction, P as Prec, e as StateEffect, F as Facet, f as ChangeSet, g as findColumn, h as Text, i as findClusterBreak, j as CharCategory, k as codePointAt, l as codePointSize } from "./index-73136136.js";
const C = "ͼ";
const COUNT = typeof Symbol == "undefined" ? "__" + C : Symbol.for(C);
const SET = typeof Symbol == "undefined" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet");
const top = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : {};
class StyleModule {
  constructor(spec, options) {
    this.rules = [];
    let { finish } = options || {};
    function splitSelector(selector) {
      return /^@/.test(selector) ? [selector] : selector.split(/,\s*/);
    }
    function render(selectors, spec2, target, isKeyframes) {
      let local = [], isAt = /^@(\w+)\b/.exec(selectors[0]), keyframes = isAt && isAt[1] == "keyframes";
      if (isAt && spec2 == null)
        return target.push(selectors[0] + ";");
      for (let prop in spec2) {
        let value = spec2[prop];
        if (/&/.test(prop)) {
          render(
            prop.split(/,\s*/).map((part) => selectors.map((sel) => part.replace(/&/, sel))).reduce((a, b) => a.concat(b)),
            value,
            target
          );
        } else if (value && typeof value == "object") {
          if (!isAt)
            throw new RangeError("The value of a property (" + prop + ") should be a primitive value.");
          render(splitSelector(prop), value, local, keyframes);
        } else if (value != null) {
          local.push(prop.replace(/_.*/, "").replace(/[A-Z]/g, (l) => "-" + l.toLowerCase()) + ": " + value + ";");
        }
      }
      if (local.length || keyframes) {
        target.push((finish && !isAt && !isKeyframes ? selectors.map(finish) : selectors).join(", ") + " {" + local.join(" ") + "}");
      }
    }
    for (let prop in spec)
      render(splitSelector(prop), spec[prop], this.rules);
  }
  getRules() {
    return this.rules.join("\n");
  }
  static newName() {
    let id = top[COUNT] || 1;
    top[COUNT] = id + 1;
    return C + id.toString(36);
  }
  static mount(root, modules) {
    (root[SET] || new StyleSet(root)).mount(Array.isArray(modules) ? modules : [modules]);
  }
}
let adoptedSet = null;
class StyleSet {
  constructor(root) {
    if (!root.head && root.adoptedStyleSheets && typeof CSSStyleSheet != "undefined") {
      if (adoptedSet) {
        root.adoptedStyleSheets = [adoptedSet.sheet].concat(root.adoptedStyleSheets);
        return root[SET] = adoptedSet;
      }
      this.sheet = new CSSStyleSheet();
      root.adoptedStyleSheets = [this.sheet].concat(root.adoptedStyleSheets);
      adoptedSet = this;
    } else {
      this.styleTag = (root.ownerDocument || root).createElement("style");
      let target = root.head || root;
      target.insertBefore(this.styleTag, target.firstChild);
    }
    this.modules = [];
    root[SET] = this;
  }
  mount(modules) {
    let sheet = this.sheet;
    let pos = 0, j = 0;
    for (let i = 0; i < modules.length; i++) {
      let mod = modules[i], index = this.modules.indexOf(mod);
      if (index < j && index > -1) {
        this.modules.splice(index, 1);
        j--;
        index = -1;
      }
      if (index == -1) {
        this.modules.splice(j++, 0, mod);
        if (sheet)
          for (let k = 0; k < mod.rules.length; k++)
            sheet.insertRule(mod.rules[k], pos++);
      } else {
        while (j < index)
          pos += this.modules[j++].rules.length;
        pos += mod.rules.length;
        j++;
      }
    }
    if (!sheet) {
      let text = "";
      for (let i = 0; i < this.modules.length; i++)
        text += this.modules[i].getRules() + "\n";
      this.styleTag.textContent = text;
    }
  }
}
var base = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'",
  229: "q"
};
var shift = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"',
  229: "Q"
};
var chrome$1 = typeof navigator != "undefined" && /Chrome\/(\d+)/.exec(navigator.userAgent);
var safari$1 = typeof navigator != "undefined" && /Apple Computer/.test(navigator.vendor);
var gecko$1 = typeof navigator != "undefined" && /Gecko\/\d+/.test(navigator.userAgent);
var mac = typeof navigator != "undefined" && /Mac/.test(navigator.platform);
var ie$1 = typeof navigator != "undefined" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
var brokenModifierNames = chrome$1 && (mac || +chrome$1[1] < 57) || gecko$1 && mac;
for (var i = 0; i < 10; i++)
  base[48 + i] = base[96 + i] = String(i);
for (var i = 1; i <= 24; i++)
  base[i + 111] = "F" + i;
for (var i = 65; i <= 90; i++) {
  base[i] = String.fromCharCode(i + 32);
  shift[i] = String.fromCharCode(i);
}
for (var code in base)
  if (!shift.hasOwnProperty(code))
    shift[code] = base[code];
function keyName(event) {
  var ignoreKey = brokenModifierNames && (event.ctrlKey || event.altKey || event.metaKey) || (safari$1 || ie$1) && event.shiftKey && event.key && event.key.length == 1;
  var name = !ignoreKey && event.key || (event.shiftKey ? shift : base)[event.keyCode] || event.key || "Unidentified";
  if (name == "Esc")
    name = "Escape";
  if (name == "Del")
    name = "Delete";
  if (name == "Left")
    name = "ArrowLeft";
  if (name == "Up")
    name = "ArrowUp";
  if (name == "Right")
    name = "ArrowRight";
  if (name == "Down")
    name = "ArrowDown";
  return name;
}
function getSelection(root) {
  let target;
  if (root.nodeType == 11) {
    target = root.getSelection ? root : root.ownerDocument;
  } else {
    target = root;
  }
  return target.getSelection();
}
function contains(dom, node) {
  return node ? dom == node || dom.contains(node.nodeType != 1 ? node.parentNode : node) : false;
}
function deepActiveElement(doc2) {
  let elt = doc2.activeElement;
  while (elt && elt.shadowRoot)
    elt = elt.shadowRoot.activeElement;
  return elt;
}
function hasSelection(dom, selection) {
  if (!selection.anchorNode)
    return false;
  try {
    return contains(dom, selection.anchorNode);
  } catch (_) {
    return false;
  }
}
function clientRectsFor(dom) {
  if (dom.nodeType == 3)
    return textRange(dom, 0, dom.nodeValue.length).getClientRects();
  else if (dom.nodeType == 1)
    return dom.getClientRects();
  else
    return [];
}
function isEquivalentPosition(node, off, targetNode, targetOff) {
  return targetNode ? scanFor(node, off, targetNode, targetOff, -1) || scanFor(node, off, targetNode, targetOff, 1) : false;
}
function domIndex(node) {
  for (var index = 0; ; index++) {
    node = node.previousSibling;
    if (!node)
      return index;
  }
}
function scanFor(node, off, targetNode, targetOff, dir) {
  for (; ; ) {
    if (node == targetNode && off == targetOff)
      return true;
    if (off == (dir < 0 ? 0 : maxOffset(node))) {
      if (node.nodeName == "DIV")
        return false;
      let parent = node.parentNode;
      if (!parent || parent.nodeType != 1)
        return false;
      off = domIndex(node) + (dir < 0 ? 0 : 1);
      node = parent;
    } else if (node.nodeType == 1) {
      node = node.childNodes[off + (dir < 0 ? -1 : 0)];
      if (node.nodeType == 1 && node.contentEditable == "false")
        return false;
      off = dir < 0 ? maxOffset(node) : 0;
    } else {
      return false;
    }
  }
}
function maxOffset(node) {
  return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length;
}
const Rect0 = { left: 0, right: 0, top: 0, bottom: 0 };
function flattenRect(rect, left) {
  let x = left ? rect.left : rect.right;
  return { left: x, right: x, top: rect.top, bottom: rect.bottom };
}
function windowRect(win) {
  return {
    left: 0,
    right: win.innerWidth,
    top: 0,
    bottom: win.innerHeight
  };
}
function scrollRectIntoView(dom, rect, side, x, y, xMargin, yMargin, ltr) {
  let doc2 = dom.ownerDocument, win = doc2.defaultView || window;
  for (let cur = dom; cur; ) {
    if (cur.nodeType == 1) {
      let bounding, top2 = cur == doc2.body;
      if (top2) {
        bounding = windowRect(win);
      } else {
        if (cur.scrollHeight <= cur.clientHeight && cur.scrollWidth <= cur.clientWidth) {
          cur = cur.assignedSlot || cur.parentNode;
          continue;
        }
        let rect2 = cur.getBoundingClientRect();
        bounding = {
          left: rect2.left,
          right: rect2.left + cur.clientWidth,
          top: rect2.top,
          bottom: rect2.top + cur.clientHeight
        };
      }
      let moveX = 0, moveY = 0;
      if (y == "nearest") {
        if (rect.top < bounding.top) {
          moveY = -(bounding.top - rect.top + yMargin);
          if (side > 0 && rect.bottom > bounding.bottom + moveY)
            moveY = rect.bottom - bounding.bottom + moveY + yMargin;
        } else if (rect.bottom > bounding.bottom) {
          moveY = rect.bottom - bounding.bottom + yMargin;
          if (side < 0 && rect.top - moveY < bounding.top)
            moveY = -(bounding.top + moveY - rect.top + yMargin);
        }
      } else {
        let rectHeight = rect.bottom - rect.top, boundingHeight = bounding.bottom - bounding.top;
        let targetTop = y == "center" && rectHeight <= boundingHeight ? rect.top + rectHeight / 2 - boundingHeight / 2 : y == "start" || y == "center" && side < 0 ? rect.top - yMargin : rect.bottom - boundingHeight + yMargin;
        moveY = targetTop - bounding.top;
      }
      if (x == "nearest") {
        if (rect.left < bounding.left) {
          moveX = -(bounding.left - rect.left + xMargin);
          if (side > 0 && rect.right > bounding.right + moveX)
            moveX = rect.right - bounding.right + moveX + xMargin;
        } else if (rect.right > bounding.right) {
          moveX = rect.right - bounding.right + xMargin;
          if (side < 0 && rect.left < bounding.left + moveX)
            moveX = -(bounding.left + moveX - rect.left + xMargin);
        }
      } else {
        let targetLeft = x == "center" ? rect.left + (rect.right - rect.left) / 2 - (bounding.right - bounding.left) / 2 : x == "start" == ltr ? rect.left - xMargin : rect.right - (bounding.right - bounding.left) + xMargin;
        moveX = targetLeft - bounding.left;
      }
      if (moveX || moveY) {
        if (top2) {
          win.scrollBy(moveX, moveY);
        } else {
          let movedX = 0, movedY = 0;
          if (moveY) {
            let start = cur.scrollTop;
            cur.scrollTop += moveY;
            movedY = cur.scrollTop - start;
          }
          if (moveX) {
            let start = cur.scrollLeft;
            cur.scrollLeft += moveX;
            movedX = cur.scrollLeft - start;
          }
          rect = {
            left: rect.left - movedX,
            top: rect.top - movedY,
            right: rect.right - movedX,
            bottom: rect.bottom - movedY
          };
          if (movedX && Math.abs(movedX - moveX) < 1)
            x = "nearest";
          if (movedY && Math.abs(movedY - moveY) < 1)
            y = "nearest";
        }
      }
      if (top2)
        break;
      cur = cur.assignedSlot || cur.parentNode;
    } else if (cur.nodeType == 11) {
      cur = cur.host;
    } else {
      break;
    }
  }
}
class DOMSelectionState {
  constructor() {
    this.anchorNode = null;
    this.anchorOffset = 0;
    this.focusNode = null;
    this.focusOffset = 0;
  }
  eq(domSel) {
    return this.anchorNode == domSel.anchorNode && this.anchorOffset == domSel.anchorOffset && this.focusNode == domSel.focusNode && this.focusOffset == domSel.focusOffset;
  }
  setRange(range) {
    this.set(range.anchorNode, range.anchorOffset, range.focusNode, range.focusOffset);
  }
  set(anchorNode, anchorOffset, focusNode, focusOffset) {
    this.anchorNode = anchorNode;
    this.anchorOffset = anchorOffset;
    this.focusNode = focusNode;
    this.focusOffset = focusOffset;
  }
}
let preventScrollSupported = null;
function focusPreventScroll(dom) {
  if (dom.setActive)
    return dom.setActive();
  if (preventScrollSupported)
    return dom.focus(preventScrollSupported);
  let stack = [];
  for (let cur = dom; cur; cur = cur.parentNode) {
    stack.push(cur, cur.scrollTop, cur.scrollLeft);
    if (cur == cur.ownerDocument)
      break;
  }
  dom.focus(preventScrollSupported == null ? {
    get preventScroll() {
      preventScrollSupported = { preventScroll: true };
      return true;
    }
  } : void 0);
  if (!preventScrollSupported) {
    preventScrollSupported = false;
    for (let i = 0; i < stack.length; ) {
      let elt = stack[i++], top2 = stack[i++], left = stack[i++];
      if (elt.scrollTop != top2)
        elt.scrollTop = top2;
      if (elt.scrollLeft != left)
        elt.scrollLeft = left;
    }
  }
}
let scratchRange;
function textRange(node, from, to = from) {
  let range = scratchRange || (scratchRange = document.createRange());
  range.setEnd(node, to);
  range.setStart(node, from);
  return range;
}
function dispatchKey(elt, name, code) {
  let options = { key: name, code: name, keyCode: code, which: code, cancelable: true };
  let down = new KeyboardEvent("keydown", options);
  down.synthetic = true;
  elt.dispatchEvent(down);
  let up = new KeyboardEvent("keyup", options);
  up.synthetic = true;
  elt.dispatchEvent(up);
  return down.defaultPrevented || up.defaultPrevented;
}
function getRoot(node) {
  while (node) {
    if (node && (node.nodeType == 9 || node.nodeType == 11 && node.host))
      return node;
    node = node.assignedSlot || node.parentNode;
  }
  return null;
}
function clearAttributes(node) {
  while (node.attributes.length)
    node.removeAttributeNode(node.attributes[0]);
}
function atElementStart(doc2, selection) {
  let node = selection.focusNode, offset = selection.focusOffset;
  if (!node || selection.anchorNode != node || selection.anchorOffset != offset)
    return false;
  for (; ; ) {
    if (offset) {
      if (node.nodeType != 1)
        return false;
      let prev = node.childNodes[offset - 1];
      if (prev.contentEditable == "false")
        offset--;
      else {
        node = prev;
        offset = maxOffset(node);
      }
    } else if (node == doc2) {
      return true;
    } else {
      offset = domIndex(node);
      node = node.parentNode;
    }
  }
}
class DOMPos {
  constructor(node, offset, precise = true) {
    this.node = node;
    this.offset = offset;
    this.precise = precise;
  }
  static before(dom, precise) {
    return new DOMPos(dom.parentNode, domIndex(dom), precise);
  }
  static after(dom, precise) {
    return new DOMPos(dom.parentNode, domIndex(dom) + 1, precise);
  }
}
const noChildren = [];
class ContentView {
  constructor() {
    this.parent = null;
    this.dom = null;
    this.dirty = 2;
  }
  get editorView() {
    if (!this.parent)
      throw new Error("Accessing view in orphan content view");
    return this.parent.editorView;
  }
  get overrideDOMText() {
    return null;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(view) {
    let pos = this.posAtStart;
    for (let child of this.children) {
      if (child == view)
        return pos;
      pos += child.length + child.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(view) {
    return this.posBefore(view) + view.length;
  }
  coordsAt(_pos, _side) {
    return null;
  }
  sync(track) {
    if (this.dirty & 2) {
      let parent = this.dom;
      let prev = null, next;
      for (let child of this.children) {
        if (child.dirty) {
          if (!child.dom && (next = prev ? prev.nextSibling : parent.firstChild)) {
            let contentView = ContentView.get(next);
            if (!contentView || !contentView.parent && contentView.canReuseDOM(child))
              child.reuseDOM(next);
          }
          child.sync(track);
          child.dirty = 0;
        }
        next = prev ? prev.nextSibling : parent.firstChild;
        if (track && !track.written && track.node == parent && next != child.dom)
          track.written = true;
        if (child.dom.parentNode == parent) {
          while (next && next != child.dom)
            next = rm$1(next);
        } else {
          parent.insertBefore(child.dom, next);
        }
        prev = child.dom;
      }
      next = prev ? prev.nextSibling : parent.firstChild;
      if (next && track && track.node == parent)
        track.written = true;
      while (next)
        next = rm$1(next);
    } else if (this.dirty & 1) {
      for (let child of this.children)
        if (child.dirty) {
          child.sync(track);
          child.dirty = 0;
        }
    }
  }
  reuseDOM(_dom) {
  }
  localPosFromDOM(node, offset) {
    let after;
    if (node == this.dom) {
      after = this.dom.childNodes[offset];
    } else {
      let bias = maxOffset(node) == 0 ? 0 : offset == 0 ? -1 : 1;
      for (; ; ) {
        let parent = node.parentNode;
        if (parent == this.dom)
          break;
        if (bias == 0 && parent.firstChild != parent.lastChild) {
          if (node == parent.firstChild)
            bias = -1;
          else
            bias = 1;
        }
        node = parent;
      }
      if (bias < 0)
        after = node;
      else
        after = node.nextSibling;
    }
    if (after == this.dom.firstChild)
      return 0;
    while (after && !ContentView.get(after))
      after = after.nextSibling;
    if (!after)
      return this.length;
    for (let i = 0, pos = 0; ; i++) {
      let child = this.children[i];
      if (child.dom == after)
        return pos;
      pos += child.length + child.breakAfter;
    }
  }
  domBoundsAround(from, to, offset = 0) {
    let fromI = -1, fromStart = -1, toI = -1, toEnd = -1;
    for (let i = 0, pos = offset, prevEnd = offset; i < this.children.length; i++) {
      let child = this.children[i], end = pos + child.length;
      if (pos < from && end > to)
        return child.domBoundsAround(from, to, pos);
      if (end >= from && fromI == -1) {
        fromI = i;
        fromStart = pos;
      }
      if (pos > to && child.dom.parentNode == this.dom) {
        toI = i;
        toEnd = prevEnd;
        break;
      }
      prevEnd = end;
      pos = end + child.breakAfter;
    }
    return {
      from: fromStart,
      to: toEnd < 0 ? offset + this.length : toEnd,
      startDOM: (fromI ? this.children[fromI - 1].dom.nextSibling : null) || this.dom.firstChild,
      endDOM: toI < this.children.length && toI >= 0 ? this.children[toI].dom : null
    };
  }
  markDirty(andParent = false) {
    this.dirty |= 2;
    this.markParentsDirty(andParent);
  }
  markParentsDirty(childList) {
    for (let parent = this.parent; parent; parent = parent.parent) {
      if (childList)
        parent.dirty |= 2;
      if (parent.dirty & 1)
        return;
      parent.dirty |= 1;
      childList = false;
    }
  }
  setParent(parent) {
    if (this.parent != parent) {
      this.parent = parent;
      if (this.dirty)
        this.markParentsDirty(true);
    }
  }
  setDOM(dom) {
    if (this.dom)
      this.dom.cmView = null;
    this.dom = dom;
    dom.cmView = this;
  }
  get rootView() {
    for (let v = this; ; ) {
      let parent = v.parent;
      if (!parent)
        return v;
      v = parent;
    }
  }
  replaceChildren(from, to, children = noChildren) {
    this.markDirty();
    for (let i = from; i < to; i++) {
      let child = this.children[i];
      if (child.parent == this)
        child.destroy();
    }
    this.children.splice(from, to - from, ...children);
    for (let i = 0; i < children.length; i++)
      children[i].setParent(this);
  }
  ignoreMutation(_rec) {
    return false;
  }
  ignoreEvent(_event) {
    return false;
  }
  childCursor(pos = this.length) {
    return new ChildCursor(this.children, pos, this.children.length);
  }
  childPos(pos, bias = 1) {
    return this.childCursor().findPos(pos, bias);
  }
  toString() {
    let name = this.constructor.name.replace("View", "");
    return name + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (name == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
  }
  static get(node) {
    return node.cmView;
  }
  get isEditable() {
    return true;
  }
  merge(from, to, source, hasStart, openStart, openEnd) {
    return false;
  }
  become(other) {
    return false;
  }
  canReuseDOM(other) {
    return other.constructor == this.constructor;
  }
  getSide() {
    return 0;
  }
  destroy() {
    this.parent = null;
  }
}
ContentView.prototype.breakAfter = 0;
function rm$1(dom) {
  let next = dom.nextSibling;
  dom.parentNode.removeChild(dom);
  return next;
}
class ChildCursor {
  constructor(children, pos, i) {
    this.children = children;
    this.pos = pos;
    this.i = i;
    this.off = 0;
  }
  findPos(pos, bias = 1) {
    for (; ; ) {
      if (pos > this.pos || pos == this.pos && (bias > 0 || this.i == 0 || this.children[this.i - 1].breakAfter)) {
        this.off = pos - this.pos;
        return this;
      }
      let next = this.children[--this.i];
      this.pos -= next.length + next.breakAfter;
    }
  }
}
function replaceRange(parent, fromI, fromOff, toI, toOff, insert, breakAtStart, openStart, openEnd) {
  let { children } = parent;
  let before = children.length ? children[fromI] : null;
  let last = insert.length ? insert[insert.length - 1] : null;
  let breakAtEnd = last ? last.breakAfter : breakAtStart;
  if (fromI == toI && before && !breakAtStart && !breakAtEnd && insert.length < 2 && before.merge(fromOff, toOff, insert.length ? last : null, fromOff == 0, openStart, openEnd))
    return;
  if (toI < children.length) {
    let after = children[toI];
    if (after && toOff < after.length) {
      if (fromI == toI) {
        after = after.split(toOff);
        toOff = 0;
      }
      if (!breakAtEnd && last && after.merge(0, toOff, last, true, 0, openEnd)) {
        insert[insert.length - 1] = after;
      } else {
        if (toOff)
          after.merge(0, toOff, null, false, 0, openEnd);
        insert.push(after);
      }
    } else if (after === null || after === void 0 ? void 0 : after.breakAfter) {
      if (last)
        last.breakAfter = 1;
      else
        breakAtStart = 1;
    }
    toI++;
  }
  if (before) {
    before.breakAfter = breakAtStart;
    if (fromOff > 0) {
      if (!breakAtStart && insert.length && before.merge(fromOff, before.length, insert[0], false, openStart, 0)) {
        before.breakAfter = insert.shift().breakAfter;
      } else if (fromOff < before.length || before.children.length && before.children[before.children.length - 1].length == 0) {
        before.merge(fromOff, before.length, null, false, openStart, 0);
      }
      fromI++;
    }
  }
  while (fromI < toI && insert.length) {
    if (children[toI - 1].become(insert[insert.length - 1])) {
      toI--;
      insert.pop();
      openEnd = insert.length ? 0 : openStart;
    } else if (children[fromI].become(insert[0])) {
      fromI++;
      insert.shift();
      openStart = insert.length ? 0 : openEnd;
    } else {
      break;
    }
  }
  if (!insert.length && fromI && toI < children.length && !children[fromI - 1].breakAfter && children[toI].merge(0, 0, children[fromI - 1], false, openStart, openEnd))
    fromI--;
  if (fromI < toI || insert.length)
    parent.replaceChildren(fromI, toI, insert);
}
function mergeChildrenInto(parent, from, to, insert, openStart, openEnd) {
  let cur = parent.childCursor();
  let { i: toI, off: toOff } = cur.findPos(to, 1);
  let { i: fromI, off: fromOff } = cur.findPos(from, -1);
  let dLen = from - to;
  for (let view of insert)
    dLen += view.length;
  parent.length += dLen;
  replaceRange(parent, fromI, fromOff, toI, toOff, insert, 0, openStart, openEnd);
}
let nav = typeof navigator != "undefined" ? navigator : { userAgent: "", vendor: "", platform: "" };
let doc = typeof document != "undefined" ? document : { documentElement: { style: {} } };
const ie_edge = /* @__PURE__ */ /Edge\/(\d+)/.exec(nav.userAgent);
const ie_upto10 = /* @__PURE__ */ /MSIE \d/.test(nav.userAgent);
const ie_11up = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(nav.userAgent);
const ie = !!(ie_upto10 || ie_11up || ie_edge);
const gecko = !ie && /* @__PURE__ */ /gecko\/(\d+)/i.test(nav.userAgent);
const chrome = !ie && /* @__PURE__ */ /Chrome\/(\d+)/.exec(nav.userAgent);
const webkit = "webkitFontSmoothing" in doc.documentElement.style;
const safari = !ie && /* @__PURE__ */ /Apple Computer/.test(nav.vendor);
const ios = safari && (/* @__PURE__ */ /Mobile\/\w+/.test(nav.userAgent) || nav.maxTouchPoints > 2);
var browser = {
  mac: ios || /* @__PURE__ */ /Mac/.test(nav.platform),
  windows: /* @__PURE__ */ /Win/.test(nav.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(nav.platform),
  ie,
  ie_version: ie_upto10 ? doc.documentMode || 6 : ie_11up ? +ie_11up[1] : ie_edge ? +ie_edge[1] : 0,
  gecko,
  gecko_version: gecko ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(nav.userAgent) || [0, 0])[1] : 0,
  chrome: !!chrome,
  chrome_version: chrome ? +chrome[1] : 0,
  ios,
  android: /* @__PURE__ */ /Android\b/.test(nav.userAgent),
  webkit,
  safari,
  webkit_version: webkit ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0,
  tabSize: doc.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
const MaxJoinLen = 256;
class TextView extends ContentView {
  constructor(text) {
    super();
    this.text = text;
  }
  get length() {
    return this.text.length;
  }
  createDOM(textDOM) {
    this.setDOM(textDOM || document.createTextNode(this.text));
  }
  sync(track) {
    if (!this.dom)
      this.createDOM();
    if (this.dom.nodeValue != this.text) {
      if (track && track.node == this.dom)
        track.written = true;
      this.dom.nodeValue = this.text;
    }
  }
  reuseDOM(dom) {
    if (dom.nodeType == 3)
      this.createDOM(dom);
  }
  merge(from, to, source) {
    if (source && (!(source instanceof TextView) || this.length - (to - from) + source.length > MaxJoinLen))
      return false;
    this.text = this.text.slice(0, from) + (source ? source.text : "") + this.text.slice(to);
    this.markDirty();
    return true;
  }
  split(from) {
    let result = new TextView(this.text.slice(from));
    this.text = this.text.slice(0, from);
    this.markDirty();
    return result;
  }
  localPosFromDOM(node, offset) {
    return node == this.dom ? offset : offset ? this.text.length : 0;
  }
  domAtPos(pos) {
    return new DOMPos(this.dom, pos);
  }
  domBoundsAround(_from, _to, offset) {
    return { from: offset, to: offset + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(pos, side) {
    return textCoords(this.dom, pos, side);
  }
}
class MarkView extends ContentView {
  constructor(mark, children = [], length = 0) {
    super();
    this.mark = mark;
    this.children = children;
    this.length = length;
    for (let ch of children)
      ch.setParent(this);
  }
  setAttrs(dom) {
    clearAttributes(dom);
    if (this.mark.class)
      dom.className = this.mark.class;
    if (this.mark.attrs)
      for (let name in this.mark.attrs)
        dom.setAttribute(name, this.mark.attrs[name]);
    return dom;
  }
  reuseDOM(node) {
    if (node.nodeName == this.mark.tagName.toUpperCase()) {
      this.setDOM(node);
      this.dirty |= 4 | 2;
    }
  }
  sync(track) {
    if (!this.dom)
      this.setDOM(this.setAttrs(document.createElement(this.mark.tagName)));
    else if (this.dirty & 4)
      this.setAttrs(this.dom);
    super.sync(track);
  }
  merge(from, to, source, _hasStart, openStart, openEnd) {
    if (source && (!(source instanceof MarkView && source.mark.eq(this.mark)) || from && openStart <= 0 || to < this.length && openEnd <= 0))
      return false;
    mergeChildrenInto(this, from, to, source ? source.children : [], openStart - 1, openEnd - 1);
    this.markDirty();
    return true;
  }
  split(from) {
    let result = [], off = 0, detachFrom = -1, i = 0;
    for (let elt of this.children) {
      let end = off + elt.length;
      if (end > from)
        result.push(off < from ? elt.split(from - off) : elt);
      if (detachFrom < 0 && off >= from)
        detachFrom = i;
      off = end;
      i++;
    }
    let length = this.length - from;
    this.length = from;
    if (detachFrom > -1) {
      this.children.length = detachFrom;
      this.markDirty();
    }
    return new MarkView(this.mark, result, length);
  }
  domAtPos(pos) {
    return inlineDOMAtPos(this, pos);
  }
  coordsAt(pos, side) {
    return coordsInChildren(this, pos, side);
  }
}
function textCoords(text, pos, side) {
  let length = text.nodeValue.length;
  if (pos > length)
    pos = length;
  let from = pos, to = pos, flatten = 0;
  if (pos == 0 && side < 0 || pos == length && side >= 0) {
    if (!(browser.chrome || browser.gecko)) {
      if (pos) {
        from--;
        flatten = 1;
      } else if (to < length) {
        to++;
        flatten = -1;
      }
    }
  } else {
    if (side < 0)
      from--;
    else if (to < length)
      to++;
  }
  let rects = textRange(text, from, to).getClientRects();
  if (!rects.length)
    return Rect0;
  let rect = rects[(flatten ? flatten < 0 : side >= 0) ? 0 : rects.length - 1];
  if (browser.safari && !flatten && rect.width == 0)
    rect = Array.prototype.find.call(rects, (r) => r.width) || rect;
  return flatten ? flattenRect(rect, flatten < 0) : rect || null;
}
class WidgetView extends ContentView {
  constructor(widget, length, side) {
    super();
    this.widget = widget;
    this.length = length;
    this.side = side;
    this.prevWidget = null;
  }
  static create(widget, length, side) {
    return new (widget.customView || WidgetView)(widget, length, side);
  }
  split(from) {
    let result = WidgetView.create(this.widget, this.length - from, this.side);
    this.length -= from;
    return result;
  }
  sync() {
    if (!this.dom || !this.widget.updateDOM(this.dom)) {
      if (this.dom && this.prevWidget)
        this.prevWidget.destroy(this.dom);
      this.prevWidget = null;
      this.setDOM(this.widget.toDOM(this.editorView));
      this.dom.contentEditable = "false";
    }
  }
  getSide() {
    return this.side;
  }
  merge(from, to, source, hasStart, openStart, openEnd) {
    if (source && (!(source instanceof WidgetView) || !this.widget.compare(source.widget) || from > 0 && openStart <= 0 || to < this.length && openEnd <= 0))
      return false;
    this.length = from + (source ? source.length : 0) + (this.length - to);
    return true;
  }
  become(other) {
    if (other.length == this.length && other instanceof WidgetView && other.side == this.side) {
      if (this.widget.constructor == other.widget.constructor) {
        if (!this.widget.eq(other.widget))
          this.markDirty(true);
        if (this.dom && !this.prevWidget)
          this.prevWidget = this.widget;
        this.widget = other.widget;
        return true;
      }
    }
    return false;
  }
  ignoreMutation() {
    return true;
  }
  ignoreEvent(event) {
    return this.widget.ignoreEvent(event);
  }
  get overrideDOMText() {
    if (this.length == 0)
      return Text.empty;
    let top2 = this;
    while (top2.parent)
      top2 = top2.parent;
    let view = top2.editorView, text = view && view.state.doc, start = this.posAtStart;
    return text ? text.slice(start, start + this.length) : Text.empty;
  }
  domAtPos(pos) {
    return pos == 0 ? DOMPos.before(this.dom) : DOMPos.after(this.dom, pos == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(pos, side) {
    let rects = this.dom.getClientRects(), rect = null;
    if (!rects.length)
      return Rect0;
    for (let i = pos > 0 ? rects.length - 1 : 0; ; i += pos > 0 ? -1 : 1) {
      rect = rects[i];
      if (pos > 0 ? i == 0 : i == rects.length - 1 || rect.top < rect.bottom)
        break;
    }
    return this.length ? rect : flattenRect(rect, this.side > 0);
  }
  get isEditable() {
    return false;
  }
  destroy() {
    super.destroy();
    if (this.dom)
      this.widget.destroy(this.dom);
  }
}
class CompositionView extends WidgetView {
  domAtPos(pos) {
    let { topView, text } = this.widget;
    if (!topView)
      return new DOMPos(text, Math.min(pos, text.nodeValue.length));
    return scanCompositionTree(pos, 0, topView, text, (v, p) => v.domAtPos(p), (p) => new DOMPos(text, Math.min(p, text.nodeValue.length)));
  }
  sync() {
    this.setDOM(this.widget.toDOM());
  }
  localPosFromDOM(node, offset) {
    let { topView, text } = this.widget;
    if (!topView)
      return Math.min(offset, this.length);
    return posFromDOMInCompositionTree(node, offset, topView, text);
  }
  ignoreMutation() {
    return false;
  }
  get overrideDOMText() {
    return null;
  }
  coordsAt(pos, side) {
    let { topView, text } = this.widget;
    if (!topView)
      return textCoords(text, pos, side);
    return scanCompositionTree(pos, side, topView, text, (v, pos2, side2) => v.coordsAt(pos2, side2), (pos2, side2) => textCoords(text, pos2, side2));
  }
  destroy() {
    var _a;
    super.destroy();
    (_a = this.widget.topView) === null || _a === void 0 ? void 0 : _a.destroy();
  }
  get isEditable() {
    return true;
  }
  canReuseDOM() {
    return true;
  }
}
function scanCompositionTree(pos, side, view, text, enterView, fromText) {
  if (view instanceof MarkView) {
    for (let child = view.dom.firstChild; child; child = child.nextSibling) {
      let desc = ContentView.get(child);
      if (!desc)
        return fromText(pos, side);
      let hasComp = contains(child, text);
      let len = desc.length + (hasComp ? text.nodeValue.length : 0);
      if (pos < len || pos == len && desc.getSide() <= 0)
        return hasComp ? scanCompositionTree(pos, side, desc, text, enterView, fromText) : enterView(desc, pos, side);
      pos -= len;
    }
    return enterView(view, view.length, -1);
  } else if (view.dom == text) {
    return fromText(pos, side);
  } else {
    return enterView(view, pos, side);
  }
}
function posFromDOMInCompositionTree(node, offset, view, text) {
  if (view instanceof MarkView) {
    for (let child of view.children) {
      let pos = 0, hasComp = contains(child.dom, text);
      if (contains(child.dom, node))
        return pos + (hasComp ? posFromDOMInCompositionTree(node, offset, child, text) : child.localPosFromDOM(node, offset));
      pos += hasComp ? text.nodeValue.length : child.length;
    }
  } else if (view.dom == text) {
    return Math.min(offset, text.nodeValue.length);
  }
  return view.localPosFromDOM(node, offset);
}
class WidgetBufferView extends ContentView {
  constructor(side) {
    super();
    this.side = side;
  }
  get length() {
    return 0;
  }
  merge() {
    return false;
  }
  become(other) {
    return other instanceof WidgetBufferView && other.side == this.side;
  }
  split() {
    return new WidgetBufferView(this.side);
  }
  sync() {
    if (!this.dom) {
      let dom = document.createElement("img");
      dom.className = "cm-widgetBuffer";
      dom.setAttribute("aria-hidden", "true");
      this.setDOM(dom);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(pos) {
    return DOMPos.before(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(pos) {
    let imgRect = this.dom.getBoundingClientRect();
    let siblingRect = inlineSiblingRect(this, this.side > 0 ? -1 : 1);
    return siblingRect && siblingRect.top < imgRect.bottom && siblingRect.bottom > imgRect.top ? { left: imgRect.left, right: imgRect.right, top: siblingRect.top, bottom: siblingRect.bottom } : imgRect;
  }
  get overrideDOMText() {
    return Text.empty;
  }
}
TextView.prototype.children = WidgetView.prototype.children = WidgetBufferView.prototype.children = noChildren;
function inlineSiblingRect(view, side) {
  let parent = view.parent, index = parent ? parent.children.indexOf(view) : -1;
  while (parent && index >= 0) {
    if (side < 0 ? index > 0 : index < parent.children.length) {
      let next = parent.children[index + side];
      if (next instanceof TextView) {
        let nextRect = next.coordsAt(side < 0 ? next.length : 0, side);
        if (nextRect)
          return nextRect;
      }
      index += side;
    } else if (parent instanceof MarkView && parent.parent) {
      index = parent.parent.children.indexOf(parent) + (side < 0 ? 0 : 1);
      parent = parent.parent;
    } else {
      let last = parent.dom.lastChild;
      if (last && last.nodeName == "BR")
        return last.getClientRects()[0];
      break;
    }
  }
  return void 0;
}
function inlineDOMAtPos(parent, pos) {
  let dom = parent.dom, { children } = parent, i = 0;
  for (let off = 0; i < children.length; i++) {
    let child = children[i], end = off + child.length;
    if (end == off && child.getSide() <= 0)
      continue;
    if (pos > off && pos < end && child.dom.parentNode == dom)
      return child.domAtPos(pos - off);
    if (pos <= off)
      break;
    off = end;
  }
  for (let j = i; j > 0; j--) {
    let prev = children[j - 1];
    if (prev.dom.parentNode == dom)
      return prev.domAtPos(prev.length);
  }
  for (let j = i; j < children.length; j++) {
    let next = children[j];
    if (next.dom.parentNode == dom)
      return next.domAtPos(0);
  }
  return new DOMPos(dom, 0);
}
function joinInlineInto(parent, view, open) {
  let last, { children } = parent;
  if (open > 0 && view instanceof MarkView && children.length && (last = children[children.length - 1]) instanceof MarkView && last.mark.eq(view.mark)) {
    joinInlineInto(last, view.children[0], open - 1);
  } else {
    children.push(view);
    view.setParent(parent);
  }
  parent.length += view.length;
}
function coordsInChildren(view, pos, side) {
  let before = null, beforePos = -1, after = null, afterPos = -1;
  function scan(view2, pos2) {
    for (let i = 0, off = 0; i < view2.children.length && off <= pos2; i++) {
      let child = view2.children[i], end = off + child.length;
      if (end >= pos2) {
        if (child.children.length) {
          scan(child, pos2 - off);
        } else if (!after && (end > pos2 || off == end && child.getSide() > 0)) {
          after = child;
          afterPos = pos2 - off;
        } else if (off < pos2 || off == end && child.getSide() < 0) {
          before = child;
          beforePos = pos2 - off;
        }
      }
      off = end;
    }
  }
  scan(view, pos);
  let target = (side < 0 ? before : after) || before || after;
  if (target)
    return target.coordsAt(Math.max(0, target == before ? beforePos : afterPos), side);
  return fallbackRect(view);
}
function fallbackRect(view) {
  let last = view.dom.lastChild;
  if (!last)
    return view.dom.getBoundingClientRect();
  let rects = clientRectsFor(last);
  return rects[rects.length - 1] || null;
}
function combineAttrs(source, target) {
  for (let name in source) {
    if (name == "class" && target.class)
      target.class += " " + source.class;
    else if (name == "style" && target.style)
      target.style += ";" + source.style;
    else
      target[name] = source[name];
  }
  return target;
}
function attrsEq(a, b) {
  if (a == b)
    return true;
  if (!a || !b)
    return false;
  let keysA = Object.keys(a), keysB = Object.keys(b);
  if (keysA.length != keysB.length)
    return false;
  for (let key of keysA) {
    if (keysB.indexOf(key) == -1 || a[key] !== b[key])
      return false;
  }
  return true;
}
function updateAttrs(dom, prev, attrs) {
  let changed = null;
  if (prev) {
    for (let name in prev)
      if (!(attrs && name in attrs))
        dom.removeAttribute(changed = name);
  }
  if (attrs) {
    for (let name in attrs)
      if (!(prev && prev[name] == attrs[name]))
        dom.setAttribute(changed = name, attrs[name]);
  }
  return !!changed;
}
class WidgetType {
  eq(widget) {
    return false;
  }
  updateDOM(dom) {
    return false;
  }
  compare(other) {
    return this == other || this.constructor == other.constructor && this.eq(other);
  }
  get estimatedHeight() {
    return -1;
  }
  ignoreEvent(event) {
    return true;
  }
  get customView() {
    return null;
  }
  destroy(dom) {
  }
}
var BlockType = /* @__PURE__ */ function(BlockType2) {
  BlockType2[BlockType2["Text"] = 0] = "Text";
  BlockType2[BlockType2["WidgetBefore"] = 1] = "WidgetBefore";
  BlockType2[BlockType2["WidgetAfter"] = 2] = "WidgetAfter";
  BlockType2[BlockType2["WidgetRange"] = 3] = "WidgetRange";
  return BlockType2;
}(BlockType || (BlockType = {}));
class Decoration extends RangeValue {
  constructor(startSide, endSide, widget, spec) {
    super();
    this.startSide = startSide;
    this.endSide = endSide;
    this.widget = widget;
    this.spec = spec;
  }
  get heightRelevant() {
    return false;
  }
  static mark(spec) {
    return new MarkDecoration(spec);
  }
  static widget(spec) {
    let side = spec.side || 0, block = !!spec.block;
    side += block ? side > 0 ? 3e8 : -4e8 : side > 0 ? 1e8 : -1e8;
    return new PointDecoration(spec, side, side, block, spec.widget || null, false);
  }
  static replace(spec) {
    let block = !!spec.block, startSide, endSide;
    if (spec.isBlockGap) {
      startSide = -5e8;
      endSide = 4e8;
    } else {
      let { start, end } = getInclusive(spec, block);
      startSide = (start ? block ? -3e8 : -1 : 5e8) - 1;
      endSide = (end ? block ? 2e8 : 1 : -6e8) + 1;
    }
    return new PointDecoration(spec, startSide, endSide, block, spec.widget || null, true);
  }
  static line(spec) {
    return new LineDecoration(spec);
  }
  static set(of, sort = false) {
    return RangeSet.of(of, sort);
  }
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : false;
  }
}
Decoration.none = RangeSet.empty;
class MarkDecoration extends Decoration {
  constructor(spec) {
    let { start, end } = getInclusive(spec);
    super(start ? -1 : 5e8, end ? 1 : -6e8, null, spec);
    this.tagName = spec.tagName || "span";
    this.class = spec.class || "";
    this.attrs = spec.attributes || null;
  }
  eq(other) {
    return this == other || other instanceof MarkDecoration && this.tagName == other.tagName && this.class == other.class && attrsEq(this.attrs, other.attrs);
  }
  range(from, to = from) {
    if (from >= to)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(from, to);
  }
}
MarkDecoration.prototype.point = false;
class LineDecoration extends Decoration {
  constructor(spec) {
    super(-2e8, -2e8, null, spec);
  }
  eq(other) {
    return other instanceof LineDecoration && attrsEq(this.spec.attributes, other.spec.attributes);
  }
  range(from, to = from) {
    if (to != from)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(from, to);
  }
}
LineDecoration.prototype.mapMode = MapMode.TrackBefore;
LineDecoration.prototype.point = true;
class PointDecoration extends Decoration {
  constructor(spec, startSide, endSide, block, widget, isReplace) {
    super(startSide, endSide, widget, spec);
    this.block = block;
    this.isReplace = isReplace;
    this.mapMode = !block ? MapMode.TrackDel : startSide <= 0 ? MapMode.TrackBefore : MapMode.TrackAfter;
  }
  get type() {
    return this.startSide < this.endSide ? BlockType.WidgetRange : this.startSide <= 0 ? BlockType.WidgetBefore : BlockType.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && this.widget.estimatedHeight >= 5;
  }
  eq(other) {
    return other instanceof PointDecoration && widgetsEq(this.widget, other.widget) && this.block == other.block && this.startSide == other.startSide && this.endSide == other.endSide;
  }
  range(from, to = from) {
    if (this.isReplace && (from > to || from == to && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && to != from)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(from, to);
  }
}
PointDecoration.prototype.point = true;
function getInclusive(spec, block = false) {
  let { inclusiveStart: start, inclusiveEnd: end } = spec;
  if (start == null)
    start = spec.inclusive;
  if (end == null)
    end = spec.inclusive;
  return { start: start !== null && start !== void 0 ? start : block, end: end !== null && end !== void 0 ? end : block };
}
function widgetsEq(a, b) {
  return a == b || !!(a && b && a.compare(b));
}
function addRange(from, to, ranges, margin = 0) {
  let last = ranges.length - 1;
  if (last >= 0 && ranges[last] + margin >= from)
    ranges[last] = Math.max(ranges[last], to);
  else
    ranges.push(from, to);
}
class LineView extends ContentView {
  constructor() {
    super(...arguments);
    this.children = [];
    this.length = 0;
    this.prevAttrs = void 0;
    this.attrs = null;
    this.breakAfter = 0;
  }
  merge(from, to, source, hasStart, openStart, openEnd) {
    if (source) {
      if (!(source instanceof LineView))
        return false;
      if (!this.dom)
        source.transferDOM(this);
    }
    if (hasStart)
      this.setDeco(source ? source.attrs : null);
    mergeChildrenInto(this, from, to, source ? source.children : [], openStart, openEnd);
    return true;
  }
  split(at) {
    let end = new LineView();
    end.breakAfter = this.breakAfter;
    if (this.length == 0)
      return end;
    let { i, off } = this.childPos(at);
    if (off) {
      end.append(this.children[i].split(off), 0);
      this.children[i].merge(off, this.children[i].length, null, false, 0, 0);
      i++;
    }
    for (let j = i; j < this.children.length; j++)
      end.append(this.children[j], 0);
    while (i > 0 && this.children[i - 1].length == 0)
      this.children[--i].destroy();
    this.children.length = i;
    this.markDirty();
    this.length = at;
    return end;
  }
  transferDOM(other) {
    if (!this.dom)
      return;
    this.markDirty();
    other.setDOM(this.dom);
    other.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs;
    this.prevAttrs = void 0;
    this.dom = null;
  }
  setDeco(attrs) {
    if (!attrsEq(this.attrs, attrs)) {
      if (this.dom) {
        this.prevAttrs = this.attrs;
        this.markDirty();
      }
      this.attrs = attrs;
    }
  }
  append(child, openStart) {
    joinInlineInto(this, child, openStart);
  }
  addLineDeco(deco) {
    let attrs = deco.spec.attributes, cls = deco.spec.class;
    if (attrs)
      this.attrs = combineAttrs(attrs, this.attrs || {});
    if (cls)
      this.attrs = combineAttrs({ class: cls }, this.attrs || {});
  }
  domAtPos(pos) {
    return inlineDOMAtPos(this, pos);
  }
  reuseDOM(node) {
    if (node.nodeName == "DIV") {
      this.setDOM(node);
      this.dirty |= 4 | 2;
    }
  }
  sync(track) {
    var _a;
    if (!this.dom) {
      this.setDOM(document.createElement("div"));
      this.dom.className = "cm-line";
      this.prevAttrs = this.attrs ? null : void 0;
    } else if (this.dirty & 4) {
      clearAttributes(this.dom);
      this.dom.className = "cm-line";
      this.prevAttrs = this.attrs ? null : void 0;
    }
    if (this.prevAttrs !== void 0) {
      updateAttrs(this.dom, this.prevAttrs, this.attrs);
      this.dom.classList.add("cm-line");
      this.prevAttrs = void 0;
    }
    super.sync(track);
    let last = this.dom.lastChild;
    while (last && ContentView.get(last) instanceof MarkView)
      last = last.lastChild;
    if (!last || !this.length || last.nodeName != "BR" && ((_a = ContentView.get(last)) === null || _a === void 0 ? void 0 : _a.isEditable) == false && (!browser.ios || !this.children.some((ch) => ch instanceof TextView))) {
      let hack = document.createElement("BR");
      hack.cmIgnore = true;
      this.dom.appendChild(hack);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20)
      return null;
    let totalWidth = 0;
    for (let child of this.children) {
      if (!(child instanceof TextView) || /[^ -~]/.test(child.text))
        return null;
      let rects = clientRectsFor(child.dom);
      if (rects.length != 1)
        return null;
      totalWidth += rects[0].width;
    }
    return !totalWidth ? null : {
      lineHeight: this.dom.getBoundingClientRect().height,
      charWidth: totalWidth / this.length
    };
  }
  coordsAt(pos, side) {
    return coordsInChildren(this, pos, side);
  }
  become(_other) {
    return false;
  }
  get type() {
    return BlockType.Text;
  }
  static find(docView, pos) {
    for (let i = 0, off = 0; i < docView.children.length; i++) {
      let block = docView.children[i], end = off + block.length;
      if (end >= pos) {
        if (block instanceof LineView)
          return block;
        if (end > pos)
          break;
      }
      off = end + block.breakAfter;
    }
    return null;
  }
}
class BlockWidgetView extends ContentView {
  constructor(widget, length, type) {
    super();
    this.widget = widget;
    this.length = length;
    this.type = type;
    this.breakAfter = 0;
    this.prevWidget = null;
  }
  merge(from, to, source, _takeDeco, openStart, openEnd) {
    if (source && (!(source instanceof BlockWidgetView) || !this.widget.compare(source.widget) || from > 0 && openStart <= 0 || to < this.length && openEnd <= 0))
      return false;
    this.length = from + (source ? source.length : 0) + (this.length - to);
    return true;
  }
  domAtPos(pos) {
    return pos == 0 ? DOMPos.before(this.dom) : DOMPos.after(this.dom, pos == this.length);
  }
  split(at) {
    let len = this.length - at;
    this.length = at;
    let end = new BlockWidgetView(this.widget, len, this.type);
    end.breakAfter = this.breakAfter;
    return end;
  }
  get children() {
    return noChildren;
  }
  sync() {
    if (!this.dom || !this.widget.updateDOM(this.dom)) {
      if (this.dom && this.prevWidget)
        this.prevWidget.destroy(this.dom);
      this.prevWidget = null;
      this.setDOM(this.widget.toDOM(this.editorView));
      this.dom.contentEditable = "false";
    }
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : Text.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(other) {
    if (other instanceof BlockWidgetView && other.type == this.type && other.widget.constructor == this.widget.constructor) {
      if (!other.widget.eq(this.widget))
        this.markDirty(true);
      if (this.dom && !this.prevWidget)
        this.prevWidget = this.widget;
      this.widget = other.widget;
      this.length = other.length;
      this.breakAfter = other.breakAfter;
      return true;
    }
    return false;
  }
  ignoreMutation() {
    return true;
  }
  ignoreEvent(event) {
    return this.widget.ignoreEvent(event);
  }
  destroy() {
    super.destroy();
    if (this.dom)
      this.widget.destroy(this.dom);
  }
}
class ContentBuilder {
  constructor(doc2, pos, end, disallowBlockEffectsFor) {
    this.doc = doc2;
    this.pos = pos;
    this.end = end;
    this.disallowBlockEffectsFor = disallowBlockEffectsFor;
    this.content = [];
    this.curLine = null;
    this.breakAtStart = 0;
    this.pendingBuffer = 0;
    this.atCursorPos = true;
    this.openStart = -1;
    this.openEnd = -1;
    this.text = "";
    this.textOff = 0;
    this.cursor = doc2.iter();
    this.skip = pos;
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let last = this.content[this.content.length - 1];
    return !last.breakAfter && !(last instanceof BlockWidgetView && last.type == BlockType.WidgetBefore);
  }
  getLine() {
    if (!this.curLine) {
      this.content.push(this.curLine = new LineView());
      this.atCursorPos = true;
    }
    return this.curLine;
  }
  flushBuffer(active) {
    if (this.pendingBuffer) {
      this.curLine.append(wrapMarks(new WidgetBufferView(-1), active), active.length);
      this.pendingBuffer = 0;
    }
  }
  addBlockWidget(view) {
    this.flushBuffer([]);
    this.curLine = null;
    this.content.push(view);
  }
  finish(openEnd) {
    if (!openEnd)
      this.flushBuffer([]);
    else
      this.pendingBuffer = 0;
    if (!this.posCovered())
      this.getLine();
  }
  buildText(length, active, openStart) {
    while (length > 0) {
      if (this.textOff == this.text.length) {
        let { value, lineBreak, done } = this.cursor.next(this.skip);
        this.skip = 0;
        if (done)
          throw new Error("Ran out of text content when drawing inline views");
        if (lineBreak) {
          if (!this.posCovered())
            this.getLine();
          if (this.content.length)
            this.content[this.content.length - 1].breakAfter = 1;
          else
            this.breakAtStart = 1;
          this.flushBuffer([]);
          this.curLine = null;
          length--;
          continue;
        } else {
          this.text = value;
          this.textOff = 0;
        }
      }
      let take = Math.min(this.text.length - this.textOff, length, 512);
      this.flushBuffer(active.slice(active.length - openStart));
      this.getLine().append(wrapMarks(new TextView(this.text.slice(this.textOff, this.textOff + take)), active), openStart);
      this.atCursorPos = true;
      this.textOff += take;
      length -= take;
      openStart = 0;
    }
  }
  span(from, to, active, openStart) {
    this.buildText(to - from, active, openStart);
    this.pos = to;
    if (this.openStart < 0)
      this.openStart = openStart;
  }
  point(from, to, deco, active, openStart, index) {
    if (this.disallowBlockEffectsFor[index] && deco instanceof PointDecoration) {
      if (deco.block)
        throw new RangeError("Block decorations may not be specified via plugins");
      if (to > this.doc.lineAt(this.pos).to)
        throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let len = to - from;
    if (deco instanceof PointDecoration) {
      if (deco.block) {
        let { type } = deco;
        if (type == BlockType.WidgetAfter && !this.posCovered())
          this.getLine();
        this.addBlockWidget(new BlockWidgetView(deco.widget || new NullWidget("div"), len, type));
      } else {
        let view = WidgetView.create(deco.widget || new NullWidget("span"), len, len ? 0 : deco.startSide);
        let cursorBefore = this.atCursorPos && !view.isEditable && openStart <= active.length && (from < to || deco.startSide > 0);
        let cursorAfter = !view.isEditable && (from < to || deco.startSide <= 0);
        let line = this.getLine();
        if (this.pendingBuffer == 2 && !cursorBefore)
          this.pendingBuffer = 0;
        this.flushBuffer(active);
        if (cursorBefore) {
          line.append(wrapMarks(new WidgetBufferView(1), active), openStart);
          openStart = active.length + Math.max(0, openStart - active.length);
        }
        line.append(wrapMarks(view, active), openStart);
        this.atCursorPos = cursorAfter;
        this.pendingBuffer = !cursorAfter ? 0 : from < to ? 1 : 2;
      }
    } else if (this.doc.lineAt(this.pos).from == this.pos) {
      this.getLine().addLineDeco(deco);
    }
    if (len) {
      if (this.textOff + len <= this.text.length) {
        this.textOff += len;
      } else {
        this.skip += len - (this.text.length - this.textOff);
        this.text = "";
        this.textOff = 0;
      }
      this.pos = to;
    }
    if (this.openStart < 0)
      this.openStart = openStart;
  }
  static build(text, from, to, decorations2, dynamicDecorationMap) {
    let builder = new ContentBuilder(text, from, to, dynamicDecorationMap);
    builder.openEnd = RangeSet.spans(decorations2, from, to, builder);
    if (builder.openStart < 0)
      builder.openStart = builder.openEnd;
    builder.finish(builder.openEnd);
    return builder;
  }
}
function wrapMarks(view, active) {
  for (let mark of active)
    view = new MarkView(mark, [view], view.length);
  return view;
}
class NullWidget extends WidgetType {
  constructor(tag) {
    super();
    this.tag = tag;
  }
  eq(other) {
    return other.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(elt) {
    return elt.nodeName.toLowerCase() == this.tag;
  }
}
const clickAddsSelectionRange = /* @__PURE__ */ Facet.define();
const dragMovesSelection$1 = /* @__PURE__ */ Facet.define();
const mouseSelectionStyle = /* @__PURE__ */ Facet.define();
const exceptionSink = /* @__PURE__ */ Facet.define();
const updateListener = /* @__PURE__ */ Facet.define();
const inputHandler = /* @__PURE__ */ Facet.define();
const perLineTextDirection = /* @__PURE__ */ Facet.define({
  combine: (values) => values.some((x) => x)
});
const nativeSelectionHidden = /* @__PURE__ */ Facet.define({
  combine: (values) => values.some((x) => x)
});
class ScrollTarget {
  constructor(range, y = "nearest", x = "nearest", yMargin = 5, xMargin = 5) {
    this.range = range;
    this.y = y;
    this.x = x;
    this.yMargin = yMargin;
    this.xMargin = xMargin;
  }
  map(changes) {
    return changes.empty ? this : new ScrollTarget(this.range.map(changes), this.y, this.x, this.yMargin, this.xMargin);
  }
}
const scrollIntoView = /* @__PURE__ */ StateEffect.define({ map: (t, ch) => t.map(ch) });
function logException(state, exception, context) {
  let handler = state.facet(exceptionSink);
  if (handler.length)
    handler[0](exception);
  else if (window.onerror)
    window.onerror(String(exception), context, void 0, void 0, exception);
  else if (context)
    console.error(context + ":", exception);
  else
    console.error(exception);
}
const editable = /* @__PURE__ */ Facet.define({ combine: (values) => values.length ? values[0] : true });
let nextPluginID = 0;
const viewPlugin = /* @__PURE__ */ Facet.define();
class ViewPlugin {
  constructor(id, create, domEventHandlers, buildExtensions) {
    this.id = id;
    this.create = create;
    this.domEventHandlers = domEventHandlers;
    this.extension = buildExtensions(this);
  }
  static define(create, spec) {
    const { eventHandlers, provide, decorations: deco } = spec || {};
    return new ViewPlugin(nextPluginID++, create, eventHandlers, (plugin) => {
      let ext = [viewPlugin.of(plugin)];
      if (deco)
        ext.push(decorations.of((view) => {
          let pluginInst = view.plugin(plugin);
          return pluginInst ? deco(pluginInst) : Decoration.none;
        }));
      if (provide)
        ext.push(provide(plugin));
      return ext;
    });
  }
  static fromClass(cls, spec) {
    return ViewPlugin.define((view) => new cls(view), spec);
  }
}
class PluginInstance {
  constructor(spec) {
    this.spec = spec;
    this.mustUpdate = null;
    this.value = null;
  }
  update(view) {
    if (!this.value) {
      if (this.spec) {
        try {
          this.value = this.spec.create(view);
        } catch (e) {
          logException(view.state, e, "CodeMirror plugin crashed");
          this.deactivate();
        }
      }
    } else if (this.mustUpdate) {
      let update = this.mustUpdate;
      this.mustUpdate = null;
      if (this.value.update) {
        try {
          this.value.update(update);
        } catch (e) {
          logException(update.state, e, "CodeMirror plugin crashed");
          if (this.value.destroy)
            try {
              this.value.destroy();
            } catch (_) {
            }
          this.deactivate();
        }
      }
    }
    return this;
  }
  destroy(view) {
    var _a;
    if ((_a = this.value) === null || _a === void 0 ? void 0 : _a.destroy) {
      try {
        this.value.destroy();
      } catch (e) {
        logException(view.state, e, "CodeMirror plugin crashed");
      }
    }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const editorAttributes = /* @__PURE__ */ Facet.define();
const contentAttributes = /* @__PURE__ */ Facet.define();
const decorations = /* @__PURE__ */ Facet.define();
const atomicRanges = /* @__PURE__ */ Facet.define();
const scrollMargins = /* @__PURE__ */ Facet.define();
const styleModule = /* @__PURE__ */ Facet.define();
class ChangedRange {
  constructor(fromA, toA, fromB, toB) {
    this.fromA = fromA;
    this.toA = toA;
    this.fromB = fromB;
    this.toB = toB;
  }
  join(other) {
    return new ChangedRange(Math.min(this.fromA, other.fromA), Math.max(this.toA, other.toA), Math.min(this.fromB, other.fromB), Math.max(this.toB, other.toB));
  }
  addToSet(set) {
    let i = set.length, me = this;
    for (; i > 0; i--) {
      let range = set[i - 1];
      if (range.fromA > me.toA)
        continue;
      if (range.toA < me.fromA)
        break;
      me = me.join(range);
      set.splice(i - 1, 1);
    }
    set.splice(i, 0, me);
    return set;
  }
  static extendWithRanges(diff, ranges) {
    if (ranges.length == 0)
      return diff;
    let result = [];
    for (let dI = 0, rI = 0, posA = 0, posB = 0; ; dI++) {
      let next = dI == diff.length ? null : diff[dI], off = posA - posB;
      let end = next ? next.fromB : 1e9;
      while (rI < ranges.length && ranges[rI] < end) {
        let from = ranges[rI], to = ranges[rI + 1];
        let fromB = Math.max(posB, from), toB = Math.min(end, to);
        if (fromB <= toB)
          new ChangedRange(fromB + off, toB + off, fromB, toB).addToSet(result);
        if (to > end)
          break;
        else
          rI += 2;
      }
      if (!next)
        return result;
      new ChangedRange(next.fromA, next.toA, next.fromB, next.toB).addToSet(result);
      posA = next.toA;
      posB = next.toB;
    }
  }
}
class ViewUpdate {
  constructor(view, state, transactions) {
    this.view = view;
    this.state = state;
    this.transactions = transactions;
    this.flags = 0;
    this.startState = view.state;
    this.changes = ChangeSet.empty(this.startState.doc.length);
    for (let tr of transactions)
      this.changes = this.changes.compose(tr.changes);
    let changedRanges = [];
    this.changes.iterChangedRanges((fromA, toA, fromB, toB) => changedRanges.push(new ChangedRange(fromA, toA, fromB, toB)));
    this.changedRanges = changedRanges;
    let focus = view.hasFocus;
    if (focus != view.inputState.notifiedFocused) {
      view.inputState.notifiedFocused = focus;
      this.flags |= 1;
    }
  }
  static create(view, state, transactions) {
    return new ViewUpdate(view, state, transactions);
  }
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  get geometryChanged() {
    return this.docChanged || (this.flags & (8 | 2)) > 0;
  }
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get selectionSet() {
    return this.transactions.some((tr) => tr.selection);
  }
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
var Direction = /* @__PURE__ */ function(Direction2) {
  Direction2[Direction2["LTR"] = 0] = "LTR";
  Direction2[Direction2["RTL"] = 1] = "RTL";
  return Direction2;
}(Direction || (Direction = {}));
const LTR = Direction.LTR, RTL = Direction.RTL;
function dec(str) {
  let result = [];
  for (let i = 0; i < str.length; i++)
    result.push(1 << +str[i]);
  return result;
}
const LowTypes = /* @__PURE__ */ dec("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008");
const ArabicTypes = /* @__PURE__ */ dec("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333");
const Brackets = /* @__PURE__ */ Object.create(null), BracketStack = [];
for (let p of ["()", "[]", "{}"]) {
  let l = /* @__PURE__ */ p.charCodeAt(0), r = /* @__PURE__ */ p.charCodeAt(1);
  Brackets[l] = r;
  Brackets[r] = -l;
}
function charType(ch) {
  return ch <= 247 ? LowTypes[ch] : 1424 <= ch && ch <= 1524 ? 2 : 1536 <= ch && ch <= 1785 ? ArabicTypes[ch - 1536] : 1774 <= ch && ch <= 2220 ? 4 : 8192 <= ch && ch <= 8203 ? 256 : 64336 <= ch && ch <= 65023 ? 4 : ch == 8204 ? 256 : 1;
}
const BidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class BidiSpan {
  constructor(from, to, level) {
    this.from = from;
    this.to = to;
    this.level = level;
  }
  get dir() {
    return this.level % 2 ? RTL : LTR;
  }
  side(end, dir) {
    return this.dir == dir == end ? this.to : this.from;
  }
  static find(order, index, level, assoc) {
    let maybe = -1;
    for (let i = 0; i < order.length; i++) {
      let span = order[i];
      if (span.from <= index && span.to >= index) {
        if (span.level == level)
          return i;
        if (maybe < 0 || (assoc != 0 ? assoc < 0 ? span.from < index : span.to > index : order[maybe].level > span.level))
          maybe = i;
      }
    }
    if (maybe < 0)
      throw new RangeError("Index out of range");
    return maybe;
  }
}
const types = [];
function computeOrder(line, direction) {
  let len = line.length, outerType = direction == LTR ? 1 : 2, oppositeType = direction == LTR ? 2 : 1;
  if (!line || outerType == 1 && !BidiRE.test(line))
    return trivialOrder(len);
  for (let i = 0, prev = outerType, prevStrong = outerType; i < len; i++) {
    let type = charType(line.charCodeAt(i));
    if (type == 512)
      type = prev;
    else if (type == 8 && prevStrong == 4)
      type = 16;
    types[i] = type == 4 ? 2 : type;
    if (type & 7)
      prevStrong = type;
    prev = type;
  }
  for (let i = 0, prev = outerType, prevStrong = outerType; i < len; i++) {
    let type = types[i];
    if (type == 128) {
      if (i < len - 1 && prev == types[i + 1] && prev & 24)
        type = types[i] = prev;
      else
        types[i] = 256;
    } else if (type == 64) {
      let end = i + 1;
      while (end < len && types[end] == 64)
        end++;
      let replace = i && prev == 8 || end < len && types[end] == 8 ? prevStrong == 1 ? 1 : 8 : 256;
      for (let j = i; j < end; j++)
        types[j] = replace;
      i = end - 1;
    } else if (type == 8 && prevStrong == 1) {
      types[i] = 1;
    }
    prev = type;
    if (type & 7)
      prevStrong = type;
  }
  for (let i = 0, sI = 0, context = 0, ch, br, type; i < len; i++) {
    if (br = Brackets[ch = line.charCodeAt(i)]) {
      if (br < 0) {
        for (let sJ = sI - 3; sJ >= 0; sJ -= 3) {
          if (BracketStack[sJ + 1] == -br) {
            let flags = BracketStack[sJ + 2];
            let type2 = flags & 2 ? outerType : !(flags & 4) ? 0 : flags & 1 ? oppositeType : outerType;
            if (type2)
              types[i] = types[BracketStack[sJ]] = type2;
            sI = sJ;
            break;
          }
        }
      } else if (BracketStack.length == 189) {
        break;
      } else {
        BracketStack[sI++] = i;
        BracketStack[sI++] = ch;
        BracketStack[sI++] = context;
      }
    } else if ((type = types[i]) == 2 || type == 1) {
      let embed = type == outerType;
      context = embed ? 0 : 1;
      for (let sJ = sI - 3; sJ >= 0; sJ -= 3) {
        let cur = BracketStack[sJ + 2];
        if (cur & 2)
          break;
        if (embed) {
          BracketStack[sJ + 2] |= 2;
        } else {
          if (cur & 4)
            break;
          BracketStack[sJ + 2] |= 4;
        }
      }
    }
  }
  for (let i = 0; i < len; i++) {
    if (types[i] == 256) {
      let end = i + 1;
      while (end < len && types[end] == 256)
        end++;
      let beforeL = (i ? types[i - 1] : outerType) == 1;
      let afterL = (end < len ? types[end] : outerType) == 1;
      let replace = beforeL == afterL ? beforeL ? 1 : 2 : outerType;
      for (let j = i; j < end; j++)
        types[j] = replace;
      i = end - 1;
    }
  }
  let order = [];
  if (outerType == 1) {
    for (let i = 0; i < len; ) {
      let start = i, rtl = types[i++] != 1;
      while (i < len && rtl == (types[i] != 1))
        i++;
      if (rtl) {
        for (let j = i; j > start; ) {
          let end = j, l = types[--j] != 2;
          while (j > start && l == (types[j - 1] != 2))
            j--;
          order.push(new BidiSpan(j, end, l ? 2 : 1));
        }
      } else {
        order.push(new BidiSpan(start, i, 0));
      }
    }
  } else {
    for (let i = 0; i < len; ) {
      let start = i, rtl = types[i++] == 2;
      while (i < len && rtl == (types[i] == 2))
        i++;
      order.push(new BidiSpan(start, i, rtl ? 1 : 2));
    }
  }
  return order;
}
function trivialOrder(length) {
  return [new BidiSpan(0, length, 0)];
}
let movedOver = "";
function moveVisually(line, order, dir, start, forward) {
  var _a;
  let startIndex = start.head - line.from, spanI = -1;
  if (startIndex == 0) {
    if (!forward || !line.length)
      return null;
    if (order[0].level != dir) {
      startIndex = order[0].side(false, dir);
      spanI = 0;
    }
  } else if (startIndex == line.length) {
    if (forward)
      return null;
    let last = order[order.length - 1];
    if (last.level != dir) {
      startIndex = last.side(true, dir);
      spanI = order.length - 1;
    }
  }
  if (spanI < 0)
    spanI = BidiSpan.find(order, startIndex, (_a = start.bidiLevel) !== null && _a !== void 0 ? _a : -1, start.assoc);
  let span = order[spanI];
  if (startIndex == span.side(forward, dir)) {
    span = order[spanI += forward ? 1 : -1];
    startIndex = span.side(!forward, dir);
  }
  let indexForward = forward == (span.dir == dir);
  let nextIndex = findClusterBreak(line.text, startIndex, indexForward);
  movedOver = line.text.slice(Math.min(startIndex, nextIndex), Math.max(startIndex, nextIndex));
  if (nextIndex != span.side(forward, dir))
    return EditorSelection.cursor(nextIndex + line.from, indexForward ? -1 : 1, span.level);
  let nextSpan = spanI == (forward ? order.length - 1 : 0) ? null : order[spanI + (forward ? 1 : -1)];
  if (!nextSpan && span.level != dir)
    return EditorSelection.cursor(forward ? line.to : line.from, forward ? -1 : 1, dir);
  if (nextSpan && nextSpan.level < span.level)
    return EditorSelection.cursor(nextSpan.side(!forward, dir) + line.from, forward ? 1 : -1, nextSpan.level);
  return EditorSelection.cursor(nextIndex + line.from, forward ? -1 : 1, span.level);
}
const LineBreakPlaceholder = "￿";
class DOMReader {
  constructor(points, state) {
    this.points = points;
    this.text = "";
    this.lineSeparator = state.facet(EditorState.lineSeparator);
  }
  append(text) {
    this.text += text;
  }
  lineBreak() {
    this.text += LineBreakPlaceholder;
  }
  readRange(start, end) {
    if (!start)
      return this;
    let parent = start.parentNode;
    for (let cur = start; ; ) {
      this.findPointBefore(parent, cur);
      this.readNode(cur);
      let next = cur.nextSibling;
      if (next == end)
        break;
      let view = ContentView.get(cur), nextView = ContentView.get(next);
      if (view && nextView ? view.breakAfter : (view ? view.breakAfter : isBlockElement(cur)) || isBlockElement(next) && (cur.nodeName != "BR" || cur.cmIgnore))
        this.lineBreak();
      cur = next;
    }
    this.findPointBefore(parent, end);
    return this;
  }
  readTextNode(node) {
    let text = node.nodeValue;
    for (let point of this.points)
      if (point.node == node)
        point.pos = this.text.length + Math.min(point.offset, text.length);
    for (let off = 0, re = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let nextBreak = -1, breakSize = 1, m;
      if (this.lineSeparator) {
        nextBreak = text.indexOf(this.lineSeparator, off);
        breakSize = this.lineSeparator.length;
      } else if (m = re.exec(text)) {
        nextBreak = m.index;
        breakSize = m[0].length;
      }
      this.append(text.slice(off, nextBreak < 0 ? text.length : nextBreak));
      if (nextBreak < 0)
        break;
      this.lineBreak();
      if (breakSize > 1) {
        for (let point of this.points)
          if (point.node == node && point.pos > this.text.length)
            point.pos -= breakSize - 1;
      }
      off = nextBreak + breakSize;
    }
  }
  readNode(node) {
    if (node.cmIgnore)
      return;
    let view = ContentView.get(node);
    let fromView = view && view.overrideDOMText;
    if (fromView != null) {
      this.findPointInside(node, fromView.length);
      for (let i = fromView.iter(); !i.next().done; ) {
        if (i.lineBreak)
          this.lineBreak();
        else
          this.append(i.value);
      }
    } else if (node.nodeType == 3) {
      this.readTextNode(node);
    } else if (node.nodeName == "BR") {
      if (node.nextSibling)
        this.lineBreak();
    } else if (node.nodeType == 1) {
      this.readRange(node.firstChild, null);
    }
  }
  findPointBefore(node, next) {
    for (let point of this.points)
      if (point.node == node && node.childNodes[point.offset] == next)
        point.pos = this.text.length;
  }
  findPointInside(node, maxLen) {
    for (let point of this.points)
      if (node.nodeType == 3 ? point.node == node : node.contains(point.node))
        point.pos = this.text.length + Math.min(maxLen, point.offset);
  }
}
function isBlockElement(node) {
  return node.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(node.nodeName);
}
class DOMPoint {
  constructor(node, offset) {
    this.node = node;
    this.offset = offset;
    this.pos = -1;
  }
}
class DocView extends ContentView {
  constructor(view) {
    super();
    this.view = view;
    this.compositionDeco = Decoration.none;
    this.decorations = [];
    this.dynamicDecorationMap = [];
    this.minWidth = 0;
    this.minWidthFrom = 0;
    this.minWidthTo = 0;
    this.impreciseAnchor = null;
    this.impreciseHead = null;
    this.forceSelection = false;
    this.lastUpdate = Date.now();
    this.setDOM(view.contentDOM);
    this.children = [new LineView()];
    this.children[0].setParent(this);
    this.updateDeco();
    this.updateInner([new ChangedRange(0, 0, 0, view.state.doc.length)], 0);
  }
  get editorView() {
    return this.view;
  }
  get length() {
    return this.view.state.doc.length;
  }
  update(update) {
    let changedRanges = update.changedRanges;
    if (this.minWidth > 0 && changedRanges.length) {
      if (!changedRanges.every(({ fromA, toA }) => toA < this.minWidthFrom || fromA > this.minWidthTo)) {
        this.minWidth = this.minWidthFrom = this.minWidthTo = 0;
      } else {
        this.minWidthFrom = update.changes.mapPos(this.minWidthFrom, 1);
        this.minWidthTo = update.changes.mapPos(this.minWidthTo, 1);
      }
    }
    if (this.view.inputState.composing < 0)
      this.compositionDeco = Decoration.none;
    else if (update.transactions.length || this.dirty)
      this.compositionDeco = computeCompositionDeco(this.view, update.changes);
    if ((browser.ie || browser.chrome) && !this.compositionDeco.size && update && update.state.doc.lines != update.startState.doc.lines)
      this.forceSelection = true;
    let prevDeco = this.decorations, deco = this.updateDeco();
    let decoDiff = findChangedDeco(prevDeco, deco, update.changes);
    changedRanges = ChangedRange.extendWithRanges(changedRanges, decoDiff);
    if (this.dirty == 0 && changedRanges.length == 0) {
      return false;
    } else {
      this.updateInner(changedRanges, update.startState.doc.length);
      if (update.transactions.length)
        this.lastUpdate = Date.now();
      return true;
    }
  }
  updateInner(changes, oldLength) {
    this.view.viewState.mustMeasureContent = true;
    this.updateChildren(changes, oldLength);
    let { observer } = this.view;
    observer.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight + "px";
      this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let track = browser.chrome || browser.ios ? { node: observer.selectionRange.focusNode, written: false } : void 0;
      this.sync(track);
      this.dirty = 0;
      if (track && (track.written || observer.selectionRange.focusNode != track.node))
        this.forceSelection = true;
      this.dom.style.height = "";
    });
    let gaps = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length) {
      for (let child of this.children)
        if (child instanceof BlockWidgetView && child.widget instanceof BlockGapWidget)
          gaps.push(child.dom);
    }
    observer.updateGaps(gaps);
  }
  updateChildren(changes, oldLength) {
    let cursor = this.childCursor(oldLength);
    for (let i = changes.length - 1; ; i--) {
      let next = i >= 0 ? changes[i] : null;
      if (!next)
        break;
      let { fromA, toA, fromB, toB } = next;
      let { content, breakAtStart, openStart, openEnd } = ContentBuilder.build(this.view.state.doc, fromB, toB, this.decorations, this.dynamicDecorationMap);
      let { i: toI, off: toOff } = cursor.findPos(toA, 1);
      let { i: fromI, off: fromOff } = cursor.findPos(fromA, -1);
      replaceRange(this, fromI, fromOff, toI, toOff, content, breakAtStart, openStart, openEnd);
    }
  }
  updateSelection(mustRead = false, fromPointer = false) {
    if (mustRead || !this.view.observer.selectionRange.focusNode)
      this.view.observer.readSelectionRange();
    if (!(fromPointer || this.mayControlSelection()))
      return;
    let force = this.forceSelection;
    this.forceSelection = false;
    let main = this.view.state.selection.main;
    let anchor = this.domAtPos(main.anchor);
    let head = main.empty ? anchor : this.domAtPos(main.head);
    if (browser.gecko && main.empty && betweenUneditable(anchor)) {
      let dummy = document.createTextNode("");
      this.view.observer.ignore(() => anchor.node.insertBefore(dummy, anchor.node.childNodes[anchor.offset] || null));
      anchor = head = new DOMPos(dummy, 0);
      force = true;
    }
    let domSel = this.view.observer.selectionRange;
    if (force || !domSel.focusNode || !isEquivalentPosition(anchor.node, anchor.offset, domSel.anchorNode, domSel.anchorOffset) || !isEquivalentPosition(head.node, head.offset, domSel.focusNode, domSel.focusOffset)) {
      this.view.observer.ignore(() => {
        if (browser.android && browser.chrome && this.dom.contains(domSel.focusNode) && inUneditable(domSel.focusNode, this.dom)) {
          this.dom.blur();
          this.dom.focus({ preventScroll: true });
        }
        let rawSel = getSelection(this.view.root);
        if (!rawSel)
          ;
        else if (main.empty) {
          if (browser.gecko) {
            let nextTo = nextToUneditable(anchor.node, anchor.offset);
            if (nextTo && nextTo != (1 | 2)) {
              let text = nearbyTextNode(anchor.node, anchor.offset, nextTo == 1 ? 1 : -1);
              if (text)
                anchor = new DOMPos(text, nextTo == 1 ? 0 : text.nodeValue.length);
            }
          }
          rawSel.collapse(anchor.node, anchor.offset);
          if (main.bidiLevel != null && domSel.cursorBidiLevel != null)
            domSel.cursorBidiLevel = main.bidiLevel;
        } else if (rawSel.extend) {
          rawSel.collapse(anchor.node, anchor.offset);
          try {
            rawSel.extend(head.node, head.offset);
          } catch (_) {
          }
        } else {
          let range = document.createRange();
          if (main.anchor > main.head)
            [anchor, head] = [head, anchor];
          range.setEnd(head.node, head.offset);
          range.setStart(anchor.node, anchor.offset);
          rawSel.removeAllRanges();
          rawSel.addRange(range);
        }
      });
      this.view.observer.setSelectionRange(anchor, head);
    }
    this.impreciseAnchor = anchor.precise ? null : new DOMPos(domSel.anchorNode, domSel.anchorOffset);
    this.impreciseHead = head.precise ? null : new DOMPos(domSel.focusNode, domSel.focusOffset);
  }
  enforceCursorAssoc() {
    if (this.compositionDeco.size)
      return;
    let { view } = this, cursor = view.state.selection.main;
    let sel = getSelection(view.root);
    let { anchorNode, anchorOffset } = view.observer.selectionRange;
    if (!sel || !cursor.empty || !cursor.assoc || !sel.modify)
      return;
    let line = LineView.find(this, cursor.head);
    if (!line)
      return;
    let lineStart = line.posAtStart;
    if (cursor.head == lineStart || cursor.head == lineStart + line.length)
      return;
    let before = this.coordsAt(cursor.head, -1), after = this.coordsAt(cursor.head, 1);
    if (!before || !after || before.bottom > after.top)
      return;
    let dom = this.domAtPos(cursor.head + cursor.assoc);
    sel.collapse(dom.node, dom.offset);
    sel.modify("move", cursor.assoc < 0 ? "forward" : "backward", "lineboundary");
    view.observer.readSelectionRange();
    let newRange = view.observer.selectionRange;
    if (view.docView.posFromDOM(newRange.anchorNode, newRange.anchorOffset) != cursor.from)
      sel.collapse(anchorNode, anchorOffset);
  }
  mayControlSelection() {
    let active = this.view.root.activeElement;
    return active == this.dom || hasSelection(this.dom, this.view.observer.selectionRange) && !(active && this.dom.contains(active));
  }
  nearest(dom) {
    for (let cur = dom; cur; ) {
      let domView = ContentView.get(cur);
      if (domView && domView.rootView == this)
        return domView;
      cur = cur.parentNode;
    }
    return null;
  }
  posFromDOM(node, offset) {
    let view = this.nearest(node);
    if (!view)
      throw new RangeError("Trying to find position for a DOM position outside of the document");
    return view.localPosFromDOM(node, offset) + view.posAtStart;
  }
  domAtPos(pos) {
    let { i, off } = this.childCursor().findPos(pos, -1);
    for (; i < this.children.length - 1; ) {
      let child = this.children[i];
      if (off < child.length || child instanceof LineView)
        break;
      i++;
      off = 0;
    }
    return this.children[i].domAtPos(off);
  }
  coordsAt(pos, side) {
    for (let off = this.length, i = this.children.length - 1; ; i--) {
      let child = this.children[i], start = off - child.breakAfter - child.length;
      if (pos > start || pos == start && child.type != BlockType.WidgetBefore && child.type != BlockType.WidgetAfter && (!i || side == 2 || this.children[i - 1].breakAfter || this.children[i - 1].type == BlockType.WidgetBefore && side > -2))
        return child.coordsAt(pos - start, side);
      off = start;
    }
  }
  measureVisibleLineHeights(viewport) {
    let result = [], { from, to } = viewport;
    let contentWidth = this.view.contentDOM.clientWidth;
    let isWider = contentWidth > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1;
    let widest = -1, ltr = this.view.textDirection == Direction.LTR;
    for (let pos = 0, i = 0; i < this.children.length; i++) {
      let child = this.children[i], end = pos + child.length;
      if (end > to)
        break;
      if (pos >= from) {
        let childRect = child.dom.getBoundingClientRect();
        result.push(childRect.height);
        if (isWider) {
          let last = child.dom.lastChild;
          let rects = last ? clientRectsFor(last) : [];
          if (rects.length) {
            let rect = rects[rects.length - 1];
            let width = ltr ? rect.right - childRect.left : childRect.right - rect.left;
            if (width > widest) {
              widest = width;
              this.minWidth = contentWidth;
              this.minWidthFrom = pos;
              this.minWidthTo = end;
            }
          }
        }
      }
      pos = end + child.breakAfter;
    }
    return result;
  }
  textDirectionAt(pos) {
    let { i } = this.childPos(pos, 1);
    return getComputedStyle(this.children[i].dom).direction == "rtl" ? Direction.RTL : Direction.LTR;
  }
  measureTextSize() {
    for (let child of this.children) {
      if (child instanceof LineView) {
        let measure = child.measureTextSize();
        if (measure)
          return measure;
      }
    }
    let dummy = document.createElement("div"), lineHeight, charWidth;
    dummy.className = "cm-line";
    dummy.style.width = "99999px";
    dummy.textContent = "abc def ghi jkl mno pqr stu";
    this.view.observer.ignore(() => {
      this.dom.appendChild(dummy);
      let rect = clientRectsFor(dummy.firstChild)[0];
      lineHeight = dummy.getBoundingClientRect().height;
      charWidth = rect ? rect.width / 27 : 7;
      dummy.remove();
    });
    return { lineHeight, charWidth };
  }
  childCursor(pos = this.length) {
    let i = this.children.length;
    if (i)
      pos -= this.children[--i].length;
    return new ChildCursor(this.children, pos, i);
  }
  computeBlockGapDeco() {
    let deco = [], vs = this.view.viewState;
    for (let pos = 0, i = 0; ; i++) {
      let next = i == vs.viewports.length ? null : vs.viewports[i];
      let end = next ? next.from - 1 : this.length;
      if (end > pos) {
        let height = vs.lineBlockAt(end).bottom - vs.lineBlockAt(pos).top;
        deco.push(Decoration.replace({
          widget: new BlockGapWidget(height),
          block: true,
          inclusive: true,
          isBlockGap: true
        }).range(pos, end));
      }
      if (!next)
        break;
      pos = next.to + 1;
    }
    return Decoration.set(deco);
  }
  updateDeco() {
    let allDeco = this.view.state.facet(decorations).map((d, i) => {
      let dynamic = this.dynamicDecorationMap[i] = typeof d == "function";
      return dynamic ? d(this.view) : d;
    });
    for (let i = allDeco.length; i < allDeco.length + 3; i++)
      this.dynamicDecorationMap[i] = false;
    return this.decorations = [
      ...allDeco,
      this.compositionDeco,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ];
  }
  scrollIntoView(target) {
    let { range } = target;
    let rect = this.coordsAt(range.head, range.empty ? range.assoc : range.head > range.anchor ? -1 : 1), other;
    if (!rect)
      return;
    if (!range.empty && (other = this.coordsAt(range.anchor, range.anchor > range.head ? -1 : 1)))
      rect = {
        left: Math.min(rect.left, other.left),
        top: Math.min(rect.top, other.top),
        right: Math.max(rect.right, other.right),
        bottom: Math.max(rect.bottom, other.bottom)
      };
    let mLeft = 0, mRight = 0, mTop = 0, mBottom = 0;
    for (let margins of this.view.state.facet(scrollMargins).map((f) => f(this.view)))
      if (margins) {
        let { left, right, top: top2, bottom } = margins;
        if (left != null)
          mLeft = Math.max(mLeft, left);
        if (right != null)
          mRight = Math.max(mRight, right);
        if (top2 != null)
          mTop = Math.max(mTop, top2);
        if (bottom != null)
          mBottom = Math.max(mBottom, bottom);
      }
    let targetRect = {
      left: rect.left - mLeft,
      top: rect.top - mTop,
      right: rect.right + mRight,
      bottom: rect.bottom + mBottom
    };
    scrollRectIntoView(this.view.scrollDOM, targetRect, range.head < range.anchor ? -1 : 1, target.x, target.y, target.xMargin, target.yMargin, this.view.textDirection == Direction.LTR);
  }
}
function betweenUneditable(pos) {
  return pos.node.nodeType == 1 && pos.node.firstChild && (pos.offset == 0 || pos.node.childNodes[pos.offset - 1].contentEditable == "false") && (pos.offset == pos.node.childNodes.length || pos.node.childNodes[pos.offset].contentEditable == "false");
}
class BlockGapWidget extends WidgetType {
  constructor(height) {
    super();
    this.height = height;
  }
  toDOM() {
    let elt = document.createElement("div");
    this.updateDOM(elt);
    return elt;
  }
  eq(other) {
    return other.height == this.height;
  }
  updateDOM(elt) {
    elt.style.height = this.height + "px";
    return true;
  }
  get estimatedHeight() {
    return this.height;
  }
}
function compositionSurroundingNode(view) {
  let sel = view.observer.selectionRange;
  let textNode = sel.focusNode && nearbyTextNode(sel.focusNode, sel.focusOffset, 0);
  if (!textNode)
    return null;
  let cView = view.docView.nearest(textNode);
  if (!cView)
    return null;
  if (cView instanceof LineView) {
    let topNode = textNode;
    while (topNode.parentNode != cView.dom)
      topNode = topNode.parentNode;
    let prev = topNode.previousSibling;
    while (prev && !ContentView.get(prev))
      prev = prev.previousSibling;
    let pos = prev ? ContentView.get(prev).posAtEnd : cView.posAtStart;
    return { from: pos, to: pos, node: topNode, text: textNode };
  } else {
    for (; ; ) {
      let { parent } = cView;
      if (!parent)
        return null;
      if (parent instanceof LineView)
        break;
      cView = parent;
    }
    let from = cView.posAtStart;
    return { from, to: from + cView.length, node: cView.dom, text: textNode };
  }
}
function computeCompositionDeco(view, changes) {
  let surrounding = compositionSurroundingNode(view);
  if (!surrounding)
    return Decoration.none;
  let { from, to, node, text: textNode } = surrounding;
  let newFrom = changes.mapPos(from, 1), newTo = Math.max(newFrom, changes.mapPos(to, -1));
  let { state } = view, text = node.nodeType == 3 ? node.nodeValue : new DOMReader([], state).readRange(node.firstChild, null).text;
  if (newTo - newFrom < text.length) {
    if (state.doc.sliceString(newFrom, Math.min(state.doc.length, newFrom + text.length), LineBreakPlaceholder) == text)
      newTo = newFrom + text.length;
    else if (state.doc.sliceString(Math.max(0, newTo - text.length), newTo, LineBreakPlaceholder) == text)
      newFrom = newTo - text.length;
    else
      return Decoration.none;
  } else if (state.doc.sliceString(newFrom, newTo, LineBreakPlaceholder) != text) {
    return Decoration.none;
  }
  let topView = ContentView.get(node);
  if (topView instanceof CompositionView)
    topView = topView.widget.topView;
  else if (topView)
    topView.parent = null;
  return Decoration.set(Decoration.replace({ widget: new CompositionWidget(node, textNode, topView), inclusive: true }).range(newFrom, newTo));
}
class CompositionWidget extends WidgetType {
  constructor(top2, text, topView) {
    super();
    this.top = top2;
    this.text = text;
    this.topView = topView;
  }
  eq(other) {
    return this.top == other.top && this.text == other.text;
  }
  toDOM() {
    return this.top;
  }
  ignoreEvent() {
    return false;
  }
  get customView() {
    return CompositionView;
  }
}
function nearbyTextNode(node, offset, side) {
  for (; ; ) {
    if (node.nodeType == 3)
      return node;
    if (node.nodeType == 1 && offset > 0 && side <= 0) {
      node = node.childNodes[offset - 1];
      offset = maxOffset(node);
    } else if (node.nodeType == 1 && offset < node.childNodes.length && side >= 0) {
      node = node.childNodes[offset];
      offset = 0;
    } else {
      return null;
    }
  }
}
function nextToUneditable(node, offset) {
  if (node.nodeType != 1)
    return 0;
  return (offset && node.childNodes[offset - 1].contentEditable == "false" ? 1 : 0) | (offset < node.childNodes.length && node.childNodes[offset].contentEditable == "false" ? 2 : 0);
}
class DecorationComparator$1 {
  constructor() {
    this.changes = [];
  }
  compareRange(from, to) {
    addRange(from, to, this.changes);
  }
  comparePoint(from, to) {
    addRange(from, to, this.changes);
  }
}
function findChangedDeco(a, b, diff) {
  let comp = new DecorationComparator$1();
  RangeSet.compare(a, b, diff, comp);
  return comp.changes;
}
function inUneditable(node, inside2) {
  for (let cur = node; cur && cur != inside2; cur = cur.assignedSlot || cur.parentNode) {
    if (cur.nodeType == 1 && cur.contentEditable == "false") {
      return true;
    }
  }
  return false;
}
function groupAt(state, pos, bias = 1) {
  let categorize = state.charCategorizer(pos);
  let line = state.doc.lineAt(pos), linePos = pos - line.from;
  if (line.length == 0)
    return EditorSelection.cursor(pos);
  if (linePos == 0)
    bias = 1;
  else if (linePos == line.length)
    bias = -1;
  let from = linePos, to = linePos;
  if (bias < 0)
    from = findClusterBreak(line.text, linePos, false);
  else
    to = findClusterBreak(line.text, linePos);
  let cat = categorize(line.text.slice(from, to));
  while (from > 0) {
    let prev = findClusterBreak(line.text, from, false);
    if (categorize(line.text.slice(prev, from)) != cat)
      break;
    from = prev;
  }
  while (to < line.length) {
    let next = findClusterBreak(line.text, to);
    if (categorize(line.text.slice(to, next)) != cat)
      break;
    to = next;
  }
  return EditorSelection.range(from + line.from, to + line.from);
}
function getdx(x, rect) {
  return rect.left > x ? rect.left - x : Math.max(0, x - rect.right);
}
function getdy(y, rect) {
  return rect.top > y ? rect.top - y : Math.max(0, y - rect.bottom);
}
function yOverlap(a, b) {
  return a.top < b.bottom - 1 && a.bottom > b.top + 1;
}
function upTop(rect, top2) {
  return top2 < rect.top ? { top: top2, left: rect.left, right: rect.right, bottom: rect.bottom } : rect;
}
function upBot(rect, bottom) {
  return bottom > rect.bottom ? { top: rect.top, left: rect.left, right: rect.right, bottom } : rect;
}
function domPosAtCoords(parent, x, y) {
  let closest, closestRect, closestX, closestY, closestOverlap = false;
  let above, below, aboveRect, belowRect;
  for (let child = parent.firstChild; child; child = child.nextSibling) {
    let rects = clientRectsFor(child);
    for (let i = 0; i < rects.length; i++) {
      let rect = rects[i];
      if (closestRect && yOverlap(closestRect, rect))
        rect = upTop(upBot(rect, closestRect.bottom), closestRect.top);
      let dx = getdx(x, rect), dy = getdy(y, rect);
      if (dx == 0 && dy == 0)
        return child.nodeType == 3 ? domPosInText(child, x, y) : domPosAtCoords(child, x, y);
      if (!closest || closestY > dy || closestY == dy && closestX > dx) {
        closest = child;
        closestRect = rect;
        closestX = dx;
        closestY = dy;
        closestOverlap = !dx || (dx > 0 ? i < rects.length - 1 : i > 0);
      }
      if (dx == 0) {
        if (y > rect.bottom && (!aboveRect || aboveRect.bottom < rect.bottom)) {
          above = child;
          aboveRect = rect;
        } else if (y < rect.top && (!belowRect || belowRect.top > rect.top)) {
          below = child;
          belowRect = rect;
        }
      } else if (aboveRect && yOverlap(aboveRect, rect)) {
        aboveRect = upBot(aboveRect, rect.bottom);
      } else if (belowRect && yOverlap(belowRect, rect)) {
        belowRect = upTop(belowRect, rect.top);
      }
    }
  }
  if (aboveRect && aboveRect.bottom >= y) {
    closest = above;
    closestRect = aboveRect;
  } else if (belowRect && belowRect.top <= y) {
    closest = below;
    closestRect = belowRect;
  }
  if (!closest)
    return { node: parent, offset: 0 };
  let clipX = Math.max(closestRect.left, Math.min(closestRect.right, x));
  if (closest.nodeType == 3)
    return domPosInText(closest, clipX, y);
  if (closestOverlap && closest.contentEditable != "false")
    return domPosAtCoords(closest, clipX, y);
  let offset = Array.prototype.indexOf.call(parent.childNodes, closest) + (x >= (closestRect.left + closestRect.right) / 2 ? 1 : 0);
  return { node: parent, offset };
}
function domPosInText(node, x, y) {
  let len = node.nodeValue.length;
  let closestOffset = -1, closestDY = 1e9, generalSide = 0;
  for (let i = 0; i < len; i++) {
    let rects = textRange(node, i, i + 1).getClientRects();
    for (let j = 0; j < rects.length; j++) {
      let rect = rects[j];
      if (rect.top == rect.bottom)
        continue;
      if (!generalSide)
        generalSide = x - rect.left;
      let dy = (rect.top > y ? rect.top - y : y - rect.bottom) - 1;
      if (rect.left - 1 <= x && rect.right + 1 >= x && dy < closestDY) {
        let right = x >= (rect.left + rect.right) / 2, after = right;
        if (browser.chrome || browser.gecko) {
          let rectBefore = textRange(node, i).getBoundingClientRect();
          if (rectBefore.left == rect.right)
            after = !right;
        }
        if (dy <= 0)
          return { node, offset: i + (after ? 1 : 0) };
        closestOffset = i + (after ? 1 : 0);
        closestDY = dy;
      }
    }
  }
  return { node, offset: closestOffset > -1 ? closestOffset : generalSide > 0 ? node.nodeValue.length : 0 };
}
function posAtCoords(view, { x, y }, precise, bias = -1) {
  var _a;
  let content = view.contentDOM.getBoundingClientRect(), docTop = content.top + view.viewState.paddingTop;
  let block, { docHeight } = view.viewState;
  let yOffset = y - docTop;
  if (yOffset < 0)
    return 0;
  if (yOffset > docHeight)
    return view.state.doc.length;
  for (let halfLine = view.defaultLineHeight / 2, bounced = false; ; ) {
    block = view.elementAtHeight(yOffset);
    if (block.type == BlockType.Text)
      break;
    for (; ; ) {
      yOffset = bias > 0 ? block.bottom + halfLine : block.top - halfLine;
      if (yOffset >= 0 && yOffset <= docHeight)
        break;
      if (bounced)
        return precise ? null : 0;
      bounced = true;
      bias = -bias;
    }
  }
  y = docTop + yOffset;
  let lineStart = block.from;
  if (lineStart < view.viewport.from)
    return view.viewport.from == 0 ? 0 : precise ? null : posAtCoordsImprecise(view, content, block, x, y);
  if (lineStart > view.viewport.to)
    return view.viewport.to == view.state.doc.length ? view.state.doc.length : precise ? null : posAtCoordsImprecise(view, content, block, x, y);
  let doc2 = view.dom.ownerDocument;
  let root = view.root.elementFromPoint ? view.root : doc2;
  let element = root.elementFromPoint(x, y);
  if (element && !view.contentDOM.contains(element))
    element = null;
  if (!element) {
    x = Math.max(content.left + 1, Math.min(content.right - 1, x));
    element = root.elementFromPoint(x, y);
    if (element && !view.contentDOM.contains(element))
      element = null;
  }
  let node, offset = -1;
  if (element && ((_a = view.docView.nearest(element)) === null || _a === void 0 ? void 0 : _a.isEditable) != false) {
    if (doc2.caretPositionFromPoint) {
      let pos = doc2.caretPositionFromPoint(x, y);
      if (pos)
        ({ offsetNode: node, offset } = pos);
    } else if (doc2.caretRangeFromPoint) {
      let range = doc2.caretRangeFromPoint(x, y);
      if (range) {
        ({ startContainer: node, startOffset: offset } = range);
        if (!view.contentDOM.contains(node) || browser.safari && isSuspiciousSafariCaretResult(node, offset, x) || browser.chrome && isSuspiciousChromeCaretResult(node, offset, x))
          node = void 0;
      }
    }
  }
  if (!node || !view.docView.dom.contains(node)) {
    let line = LineView.find(view.docView, lineStart);
    if (!line)
      return yOffset > block.top + block.height / 2 ? block.to : block.from;
    ({ node, offset } = domPosAtCoords(line.dom, x, y));
  }
  return view.docView.posFromDOM(node, offset);
}
function posAtCoordsImprecise(view, contentRect, block, x, y) {
  let into = Math.round((x - contentRect.left) * view.defaultCharacterWidth);
  if (view.lineWrapping && block.height > view.defaultLineHeight * 1.5) {
    let line = Math.floor((y - block.top) / view.defaultLineHeight);
    into += line * view.viewState.heightOracle.lineLength;
  }
  let content = view.state.sliceDoc(block.from, block.to);
  return block.from + findColumn(content, into, view.state.tabSize);
}
function isSuspiciousSafariCaretResult(node, offset, x) {
  let len;
  if (node.nodeType != 3 || offset != (len = node.nodeValue.length))
    return false;
  for (let next = node.nextSibling; next; next = next.nextSibling)
    if (next.nodeType != 1 || next.nodeName != "BR")
      return false;
  return textRange(node, len - 1, len).getBoundingClientRect().left > x;
}
function isSuspiciousChromeCaretResult(node, offset, x) {
  if (offset != 0)
    return false;
  for (let cur = node; ; ) {
    let parent = cur.parentNode;
    if (!parent || parent.nodeType != 1 || parent.firstChild != cur)
      return false;
    if (parent.classList.contains("cm-line"))
      break;
    cur = parent;
  }
  let rect = node.nodeType == 1 ? node.getBoundingClientRect() : textRange(node, 0, Math.max(node.nodeValue.length, 1)).getBoundingClientRect();
  return x - rect.left > 5;
}
function moveToLineBoundary(view, start, forward, includeWrap) {
  let line = view.state.doc.lineAt(start.head);
  let coords = !includeWrap || !view.lineWrapping ? null : view.coordsAtPos(start.assoc < 0 && start.head > line.from ? start.head - 1 : start.head);
  if (coords) {
    let editorRect = view.dom.getBoundingClientRect();
    let direction = view.textDirectionAt(line.from);
    let pos = view.posAtCoords({
      x: forward == (direction == Direction.LTR) ? editorRect.right - 1 : editorRect.left + 1,
      y: (coords.top + coords.bottom) / 2
    });
    if (pos != null)
      return EditorSelection.cursor(pos, forward ? -1 : 1);
  }
  let lineView = LineView.find(view.docView, start.head);
  let end = lineView ? forward ? lineView.posAtEnd : lineView.posAtStart : forward ? line.to : line.from;
  return EditorSelection.cursor(end, forward ? -1 : 1);
}
function moveByChar(view, start, forward, by) {
  let line = view.state.doc.lineAt(start.head), spans = view.bidiSpans(line);
  let direction = view.textDirectionAt(line.from);
  for (let cur = start, check = null; ; ) {
    let next = moveVisually(line, spans, direction, cur, forward), char = movedOver;
    if (!next) {
      if (line.number == (forward ? view.state.doc.lines : 1))
        return cur;
      char = "\n";
      line = view.state.doc.line(line.number + (forward ? 1 : -1));
      spans = view.bidiSpans(line);
      next = EditorSelection.cursor(forward ? line.from : line.to);
    }
    if (!check) {
      if (!by)
        return next;
      check = by(char);
    } else if (!check(char)) {
      return cur;
    }
    cur = next;
  }
}
function byGroup(view, pos, start) {
  let categorize = view.state.charCategorizer(pos);
  let cat = categorize(start);
  return (next) => {
    let nextCat = categorize(next);
    if (cat == CharCategory.Space)
      cat = nextCat;
    return cat == nextCat;
  };
}
function moveVertically(view, start, forward, distance) {
  let startPos = start.head, dir = forward ? 1 : -1;
  if (startPos == (forward ? view.state.doc.length : 0))
    return EditorSelection.cursor(startPos, start.assoc);
  let goal = start.goalColumn, startY;
  let rect = view.contentDOM.getBoundingClientRect();
  let startCoords = view.coordsAtPos(startPos), docTop = view.documentTop;
  if (startCoords) {
    if (goal == null)
      goal = startCoords.left - rect.left;
    startY = dir < 0 ? startCoords.top : startCoords.bottom;
  } else {
    let line = view.viewState.lineBlockAt(startPos);
    if (goal == null)
      goal = Math.min(rect.right - rect.left, view.defaultCharacterWidth * (startPos - line.from));
    startY = (dir < 0 ? line.top : line.bottom) + docTop;
  }
  let resolvedGoal = rect.left + goal;
  let dist = distance !== null && distance !== void 0 ? distance : view.defaultLineHeight >> 1;
  for (let extra = 0; ; extra += 10) {
    let curY = startY + (dist + extra) * dir;
    let pos = posAtCoords(view, { x: resolvedGoal, y: curY }, false, dir);
    if (curY < rect.top || curY > rect.bottom || (dir < 0 ? pos < startPos : pos > startPos))
      return EditorSelection.cursor(pos, start.assoc, void 0, goal);
  }
}
function skipAtoms(view, oldPos, pos) {
  let atoms = view.state.facet(atomicRanges).map((f) => f(view));
  for (; ; ) {
    let moved = false;
    for (let set of atoms) {
      set.between(pos.from - 1, pos.from + 1, (from, to, value) => {
        if (pos.from > from && pos.from < to) {
          pos = oldPos.head > pos.from ? EditorSelection.cursor(from, 1) : EditorSelection.cursor(to, -1);
          moved = true;
        }
      });
    }
    if (!moved)
      return pos;
  }
}
class InputState {
  constructor(view) {
    this.lastKeyCode = 0;
    this.lastKeyTime = 0;
    this.lastTouchTime = 0;
    this.lastFocusTime = 0;
    this.lastScrollTop = 0;
    this.lastScrollLeft = 0;
    this.chromeScrollHack = -1;
    this.pendingIOSKey = void 0;
    this.lastSelectionOrigin = null;
    this.lastSelectionTime = 0;
    this.lastEscPress = 0;
    this.lastContextMenu = 0;
    this.scrollHandlers = [];
    this.registeredEvents = [];
    this.customHandlers = [];
    this.composing = -1;
    this.compositionFirstChange = null;
    this.compositionEndedAt = 0;
    this.mouseSelection = null;
    for (let type in handlers) {
      let handler = handlers[type];
      view.contentDOM.addEventListener(type, (event) => {
        if (!eventBelongsToEditor(view, event) || this.ignoreDuringComposition(event))
          return;
        if (type == "keydown" && this.keydown(view, event))
          return;
        if (this.mustFlushObserver(event))
          view.observer.forceFlush();
        if (this.runCustomHandlers(type, view, event))
          event.preventDefault();
        else
          handler(view, event);
      }, handlerOptions[type]);
      this.registeredEvents.push(type);
    }
    if (browser.chrome && browser.chrome_version == 102) {
      view.scrollDOM.addEventListener("wheel", () => {
        if (this.chromeScrollHack < 0)
          view.contentDOM.style.pointerEvents = "none";
        else
          window.clearTimeout(this.chromeScrollHack);
        this.chromeScrollHack = setTimeout(() => {
          this.chromeScrollHack = -1;
          view.contentDOM.style.pointerEvents = "";
        }, 100);
      }, { passive: true });
    }
    this.notifiedFocused = view.hasFocus;
    if (browser.safari)
      view.contentDOM.addEventListener("input", () => null);
  }
  setSelectionOrigin(origin) {
    this.lastSelectionOrigin = origin;
    this.lastSelectionTime = Date.now();
  }
  ensureHandlers(view, plugins) {
    var _a;
    let handlers2;
    this.customHandlers = [];
    for (let plugin of plugins)
      if (handlers2 = (_a = plugin.update(view).spec) === null || _a === void 0 ? void 0 : _a.domEventHandlers) {
        this.customHandlers.push({ plugin: plugin.value, handlers: handlers2 });
        for (let type in handlers2)
          if (this.registeredEvents.indexOf(type) < 0 && type != "scroll") {
            this.registeredEvents.push(type);
            view.contentDOM.addEventListener(type, (event) => {
              if (!eventBelongsToEditor(view, event))
                return;
              if (this.runCustomHandlers(type, view, event))
                event.preventDefault();
            });
          }
      }
  }
  runCustomHandlers(type, view, event) {
    for (let set of this.customHandlers) {
      let handler = set.handlers[type];
      if (handler) {
        try {
          if (handler.call(set.plugin, event, view) || event.defaultPrevented)
            return true;
        } catch (e) {
          logException(view.state, e);
        }
      }
    }
    return false;
  }
  runScrollHandlers(view, event) {
    this.lastScrollTop = view.scrollDOM.scrollTop;
    this.lastScrollLeft = view.scrollDOM.scrollLeft;
    for (let set of this.customHandlers) {
      let handler = set.handlers.scroll;
      if (handler) {
        try {
          handler.call(set.plugin, event, view);
        } catch (e) {
          logException(view.state, e);
        }
      }
    }
  }
  keydown(view, event) {
    this.lastKeyCode = event.keyCode;
    this.lastKeyTime = Date.now();
    if (event.keyCode == 9 && Date.now() < this.lastEscPress + 2e3)
      return true;
    if (browser.android && browser.chrome && !event.synthetic && (event.keyCode == 13 || event.keyCode == 8)) {
      view.observer.delayAndroidKey(event.key, event.keyCode);
      return true;
    }
    let pending;
    if (browser.ios && !event.synthetic && !event.altKey && !event.metaKey && ((pending = PendingKeys.find((key) => key.keyCode == event.keyCode)) && !event.ctrlKey || EmacsyPendingKeys.indexOf(event.key) > -1 && event.ctrlKey && !event.shiftKey)) {
      this.pendingIOSKey = pending || event;
      setTimeout(() => this.flushIOSKey(view), 250);
      return true;
    }
    return false;
  }
  flushIOSKey(view) {
    let key = this.pendingIOSKey;
    if (!key)
      return false;
    this.pendingIOSKey = void 0;
    return dispatchKey(view.contentDOM, key.key, key.keyCode);
  }
  ignoreDuringComposition(event) {
    if (!/^key/.test(event.type))
      return false;
    if (this.composing > 0)
      return true;
    if (browser.safari && !browser.ios && Date.now() - this.compositionEndedAt < 100) {
      this.compositionEndedAt = 0;
      return true;
    }
    return false;
  }
  mustFlushObserver(event) {
    return event.type == "keydown" && event.keyCode != 229;
  }
  startMouseSelection(mouseSelection) {
    if (this.mouseSelection)
      this.mouseSelection.destroy();
    this.mouseSelection = mouseSelection;
  }
  update(update) {
    if (this.mouseSelection)
      this.mouseSelection.update(update);
    if (update.transactions.length)
      this.lastKeyCode = this.lastSelectionTime = 0;
  }
  destroy() {
    if (this.mouseSelection)
      this.mouseSelection.destroy();
  }
}
const PendingKeys = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
];
const EmacsyPendingKeys = "dthko";
const modifierCodes = [16, 17, 18, 20, 91, 92, 224, 225];
class MouseSelection {
  constructor(view, startEvent, style, mustSelect) {
    this.view = view;
    this.style = style;
    this.mustSelect = mustSelect;
    this.lastEvent = startEvent;
    let doc2 = view.contentDOM.ownerDocument;
    doc2.addEventListener("mousemove", this.move = this.move.bind(this));
    doc2.addEventListener("mouseup", this.up = this.up.bind(this));
    this.extend = startEvent.shiftKey;
    this.multiple = view.state.facet(EditorState.allowMultipleSelections) && addsSelectionRange(view, startEvent);
    this.dragMove = dragMovesSelection(view, startEvent);
    this.dragging = isInPrimarySelection(view, startEvent) && getClickType(startEvent) == 1 ? null : false;
    if (this.dragging === false) {
      startEvent.preventDefault();
      this.select(startEvent);
    }
  }
  move(event) {
    if (event.buttons == 0)
      return this.destroy();
    if (this.dragging !== false)
      return;
    this.select(this.lastEvent = event);
  }
  up(event) {
    if (this.dragging == null)
      this.select(this.lastEvent);
    if (!this.dragging)
      event.preventDefault();
    this.destroy();
  }
  destroy() {
    let doc2 = this.view.contentDOM.ownerDocument;
    doc2.removeEventListener("mousemove", this.move);
    doc2.removeEventListener("mouseup", this.up);
    this.view.inputState.mouseSelection = null;
  }
  select(event) {
    let selection = this.style.get(event, this.extend, this.multiple);
    if (this.mustSelect || !selection.eq(this.view.state.selection) || selection.main.assoc != this.view.state.selection.main.assoc)
      this.view.dispatch({
        selection,
        userEvent: "select.pointer",
        scrollIntoView: true
      });
    this.mustSelect = false;
  }
  update(update) {
    if (update.docChanged && this.dragging)
      this.dragging = this.dragging.map(update.changes);
    if (this.style.update(update))
      setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function addsSelectionRange(view, event) {
  let facet = view.state.facet(clickAddsSelectionRange);
  return facet.length ? facet[0](event) : browser.mac ? event.metaKey : event.ctrlKey;
}
function dragMovesSelection(view, event) {
  let facet = view.state.facet(dragMovesSelection$1);
  return facet.length ? facet[0](event) : browser.mac ? !event.altKey : !event.ctrlKey;
}
function isInPrimarySelection(view, event) {
  let { main } = view.state.selection;
  if (main.empty)
    return false;
  let sel = getSelection(view.root);
  if (!sel || sel.rangeCount == 0)
    return true;
  let rects = sel.getRangeAt(0).getClientRects();
  for (let i = 0; i < rects.length; i++) {
    let rect = rects[i];
    if (rect.left <= event.clientX && rect.right >= event.clientX && rect.top <= event.clientY && rect.bottom >= event.clientY)
      return true;
  }
  return false;
}
function eventBelongsToEditor(view, event) {
  if (!event.bubbles)
    return true;
  if (event.defaultPrevented)
    return false;
  for (let node = event.target, cView; node != view.contentDOM; node = node.parentNode)
    if (!node || node.nodeType == 11 || (cView = ContentView.get(node)) && cView.ignoreEvent(event))
      return false;
  return true;
}
const handlers = /* @__PURE__ */ Object.create(null);
const handlerOptions = /* @__PURE__ */ Object.create(null);
const brokenClipboardAPI = browser.ie && browser.ie_version < 15 || browser.ios && browser.webkit_version < 604;
function capturePaste(view) {
  let parent = view.dom.parentNode;
  if (!parent)
    return;
  let target = parent.appendChild(document.createElement("textarea"));
  target.style.cssText = "position: fixed; left: -10000px; top: 10px";
  target.focus();
  setTimeout(() => {
    view.focus();
    target.remove();
    doPaste(view, target.value);
  }, 50);
}
function doPaste(view, input) {
  let { state } = view, changes, i = 1, text = state.toText(input);
  let byLine = text.lines == state.selection.ranges.length;
  let linewise = lastLinewiseCopy != null && state.selection.ranges.every((r) => r.empty) && lastLinewiseCopy == text.toString();
  if (linewise) {
    let lastLine = -1;
    changes = state.changeByRange((range) => {
      let line = state.doc.lineAt(range.from);
      if (line.from == lastLine)
        return { range };
      lastLine = line.from;
      let insert = state.toText((byLine ? text.line(i++).text : input) + state.lineBreak);
      return {
        changes: { from: line.from, insert },
        range: EditorSelection.cursor(range.from + insert.length)
      };
    });
  } else if (byLine) {
    changes = state.changeByRange((range) => {
      let line = text.line(i++);
      return {
        changes: { from: range.from, to: range.to, insert: line.text },
        range: EditorSelection.cursor(range.from + line.length)
      };
    });
  } else {
    changes = state.replaceSelection(text);
  }
  view.dispatch(changes, {
    userEvent: "input.paste",
    scrollIntoView: true
  });
}
handlers.keydown = (view, event) => {
  view.inputState.setSelectionOrigin("select");
  if (event.keyCode == 27)
    view.inputState.lastEscPress = Date.now();
  else if (modifierCodes.indexOf(event.keyCode) < 0)
    view.inputState.lastEscPress = 0;
};
handlers.touchstart = (view, e) => {
  view.inputState.lastTouchTime = Date.now();
  view.inputState.setSelectionOrigin("select.pointer");
};
handlers.touchmove = (view) => {
  view.inputState.setSelectionOrigin("select.pointer");
};
handlerOptions.touchstart = handlerOptions.touchmove = { passive: true };
handlers.mousedown = (view, event) => {
  view.observer.flush();
  if (view.inputState.lastTouchTime > Date.now() - 2e3)
    return;
  let style = null;
  for (let makeStyle of view.state.facet(mouseSelectionStyle)) {
    style = makeStyle(view, event);
    if (style)
      break;
  }
  if (!style && event.button == 0)
    style = basicMouseSelection(view, event);
  if (style) {
    let mustFocus = view.root.activeElement != view.contentDOM;
    if (mustFocus)
      view.observer.ignore(() => focusPreventScroll(view.contentDOM));
    view.inputState.startMouseSelection(new MouseSelection(view, event, style, mustFocus));
  }
};
function rangeForClick(view, pos, bias, type) {
  if (type == 1) {
    return EditorSelection.cursor(pos, bias);
  } else if (type == 2) {
    return groupAt(view.state, pos, bias);
  } else {
    let visual = LineView.find(view.docView, pos), line = view.state.doc.lineAt(visual ? visual.posAtEnd : pos);
    let from = visual ? visual.posAtStart : line.from, to = visual ? visual.posAtEnd : line.to;
    if (to < view.state.doc.length && to == line.to)
      to++;
    return EditorSelection.range(from, to);
  }
}
let insideY = (y, rect) => y >= rect.top && y <= rect.bottom;
let inside = (x, y, rect) => insideY(y, rect) && x >= rect.left && x <= rect.right;
function findPositionSide(view, pos, x, y) {
  let line = LineView.find(view.docView, pos);
  if (!line)
    return 1;
  let off = pos - line.posAtStart;
  if (off == 0)
    return 1;
  if (off == line.length)
    return -1;
  let before = line.coordsAt(off, -1);
  if (before && inside(x, y, before))
    return -1;
  let after = line.coordsAt(off, 1);
  if (after && inside(x, y, after))
    return 1;
  return before && insideY(y, before) ? -1 : 1;
}
function queryPos(view, event) {
  let pos = view.posAtCoords({ x: event.clientX, y: event.clientY }, false);
  return { pos, bias: findPositionSide(view, pos, event.clientX, event.clientY) };
}
const BadMouseDetail = browser.ie && browser.ie_version <= 11;
let lastMouseDown = null, lastMouseDownCount = 0, lastMouseDownTime = 0;
function getClickType(event) {
  if (!BadMouseDetail)
    return event.detail;
  let last = lastMouseDown, lastTime = lastMouseDownTime;
  lastMouseDown = event;
  lastMouseDownTime = Date.now();
  return lastMouseDownCount = !last || lastTime > Date.now() - 400 && Math.abs(last.clientX - event.clientX) < 2 && Math.abs(last.clientY - event.clientY) < 2 ? (lastMouseDownCount + 1) % 3 : 1;
}
function basicMouseSelection(view, event) {
  let start = queryPos(view, event), type = getClickType(event);
  let startSel = view.state.selection;
  let last = start, lastEvent = event;
  return {
    update(update) {
      if (update.docChanged) {
        start.pos = update.changes.mapPos(start.pos);
        startSel = startSel.map(update.changes);
        lastEvent = null;
      }
    },
    get(event2, extend, multiple) {
      let cur;
      if (lastEvent && event2.clientX == lastEvent.clientX && event2.clientY == lastEvent.clientY)
        cur = last;
      else {
        cur = last = queryPos(view, event2);
        lastEvent = event2;
      }
      let range = rangeForClick(view, cur.pos, cur.bias, type);
      if (start.pos != cur.pos && !extend) {
        let startRange = rangeForClick(view, start.pos, start.bias, type);
        let from = Math.min(startRange.from, range.from), to = Math.max(startRange.to, range.to);
        range = from < range.from ? EditorSelection.range(from, to) : EditorSelection.range(to, from);
      }
      if (extend)
        return startSel.replaceRange(startSel.main.extend(range.from, range.to));
      else if (multiple && startSel.ranges.length > 1 && startSel.ranges.some((r) => r.eq(range)))
        return removeRange(startSel, range);
      else if (multiple)
        return startSel.addRange(range);
      else
        return EditorSelection.create([range]);
    }
  };
}
function removeRange(sel, range) {
  for (let i = 0; ; i++) {
    if (sel.ranges[i].eq(range))
      return EditorSelection.create(sel.ranges.slice(0, i).concat(sel.ranges.slice(i + 1)), sel.mainIndex == i ? 0 : sel.mainIndex - (sel.mainIndex > i ? 1 : 0));
  }
}
handlers.dragstart = (view, event) => {
  let { selection: { main } } = view.state;
  let { mouseSelection } = view.inputState;
  if (mouseSelection)
    mouseSelection.dragging = main;
  if (event.dataTransfer) {
    event.dataTransfer.setData("Text", view.state.sliceDoc(main.from, main.to));
    event.dataTransfer.effectAllowed = "copyMove";
  }
};
function dropText(view, event, text, direct) {
  if (!text)
    return;
  let dropPos = view.posAtCoords({ x: event.clientX, y: event.clientY }, false);
  event.preventDefault();
  let { mouseSelection } = view.inputState;
  let del = direct && mouseSelection && mouseSelection.dragging && mouseSelection.dragMove ? { from: mouseSelection.dragging.from, to: mouseSelection.dragging.to } : null;
  let ins = { from: dropPos, insert: text };
  let changes = view.state.changes(del ? [del, ins] : ins);
  view.focus();
  view.dispatch({
    changes,
    selection: { anchor: changes.mapPos(dropPos, -1), head: changes.mapPos(dropPos, 1) },
    userEvent: del ? "move.drop" : "input.drop"
  });
}
handlers.drop = (view, event) => {
  if (!event.dataTransfer)
    return;
  if (view.state.readOnly)
    return event.preventDefault();
  let files = event.dataTransfer.files;
  if (files && files.length) {
    event.preventDefault();
    let text = Array(files.length), read = 0;
    let finishFile = () => {
      if (++read == files.length)
        dropText(view, event, text.filter((s) => s != null).join(view.state.lineBreak), false);
    };
    for (let i = 0; i < files.length; i++) {
      let reader = new FileReader();
      reader.onerror = finishFile;
      reader.onload = () => {
        if (!/[\x00-\x08\x0e-\x1f]{2}/.test(reader.result))
          text[i] = reader.result;
        finishFile();
      };
      reader.readAsText(files[i]);
    }
  } else {
    dropText(view, event, event.dataTransfer.getData("Text"), true);
  }
};
handlers.paste = (view, event) => {
  if (view.state.readOnly)
    return event.preventDefault();
  view.observer.flush();
  let data = brokenClipboardAPI ? null : event.clipboardData;
  if (data) {
    doPaste(view, data.getData("text/plain"));
    event.preventDefault();
  } else {
    capturePaste(view);
  }
};
function captureCopy(view, text) {
  let parent = view.dom.parentNode;
  if (!parent)
    return;
  let target = parent.appendChild(document.createElement("textarea"));
  target.style.cssText = "position: fixed; left: -10000px; top: 10px";
  target.value = text;
  target.focus();
  target.selectionEnd = text.length;
  target.selectionStart = 0;
  setTimeout(() => {
    target.remove();
    view.focus();
  }, 50);
}
function copiedRange(state) {
  let content = [], ranges = [], linewise = false;
  for (let range of state.selection.ranges)
    if (!range.empty) {
      content.push(state.sliceDoc(range.from, range.to));
      ranges.push(range);
    }
  if (!content.length) {
    let upto = -1;
    for (let { from } of state.selection.ranges) {
      let line = state.doc.lineAt(from);
      if (line.number > upto) {
        content.push(line.text);
        ranges.push({ from: line.from, to: Math.min(state.doc.length, line.to + 1) });
      }
      upto = line.number;
    }
    linewise = true;
  }
  return { text: content.join(state.lineBreak), ranges, linewise };
}
let lastLinewiseCopy = null;
handlers.copy = handlers.cut = (view, event) => {
  let { text, ranges, linewise } = copiedRange(view.state);
  if (!text && !linewise)
    return;
  lastLinewiseCopy = linewise ? text : null;
  let data = brokenClipboardAPI ? null : event.clipboardData;
  if (data) {
    event.preventDefault();
    data.clearData();
    data.setData("text/plain", text);
  } else {
    captureCopy(view, text);
  }
  if (event.type == "cut" && !view.state.readOnly)
    view.dispatch({
      changes: ranges,
      scrollIntoView: true,
      userEvent: "delete.cut"
    });
};
function updateForFocusChange(view) {
  setTimeout(() => {
    if (view.hasFocus != view.inputState.notifiedFocused)
      view.update([]);
  }, 10);
}
handlers.focus = (view) => {
  view.inputState.lastFocusTime = Date.now();
  if (!view.scrollDOM.scrollTop && (view.inputState.lastScrollTop || view.inputState.lastScrollLeft)) {
    view.scrollDOM.scrollTop = view.inputState.lastScrollTop;
    view.scrollDOM.scrollLeft = view.inputState.lastScrollLeft;
  }
  updateForFocusChange(view);
};
handlers.blur = (view) => {
  view.observer.clearSelectionRange();
  updateForFocusChange(view);
};
handlers.compositionstart = handlers.compositionupdate = (view) => {
  if (view.inputState.compositionFirstChange == null)
    view.inputState.compositionFirstChange = true;
  if (view.inputState.composing < 0) {
    view.inputState.composing = 0;
  }
};
handlers.compositionend = (view) => {
  view.inputState.composing = -1;
  view.inputState.compositionEndedAt = Date.now();
  view.inputState.compositionFirstChange = null;
  if (browser.chrome && browser.android)
    view.observer.flushSoon();
  setTimeout(() => {
    if (view.inputState.composing < 0 && view.docView.compositionDeco.size)
      view.update([]);
  }, 50);
};
handlers.contextmenu = (view) => {
  view.inputState.lastContextMenu = Date.now();
};
handlers.beforeinput = (view, event) => {
  var _a;
  let pending;
  if (browser.chrome && browser.android && (pending = PendingKeys.find((key) => key.inputType == event.inputType))) {
    view.observer.delayAndroidKey(pending.key, pending.keyCode);
    if (pending.key == "Backspace" || pending.key == "Delete") {
      let startViewHeight = ((_a = window.visualViewport) === null || _a === void 0 ? void 0 : _a.height) || 0;
      setTimeout(() => {
        var _a2;
        if ((((_a2 = window.visualViewport) === null || _a2 === void 0 ? void 0 : _a2.height) || 0) > startViewHeight + 10 && view.hasFocus) {
          view.contentDOM.blur();
          view.focus();
        }
      }, 100);
    }
  }
};
const wrappingWhiteSpace = ["pre-wrap", "normal", "pre-line", "break-spaces"];
class HeightOracle {
  constructor(lineWrapping) {
    this.lineWrapping = lineWrapping;
    this.doc = Text.empty;
    this.heightSamples = {};
    this.lineHeight = 14;
    this.charWidth = 7;
    this.lineLength = 30;
    this.heightChanged = false;
  }
  heightForGap(from, to) {
    let lines = this.doc.lineAt(to).number - this.doc.lineAt(from).number + 1;
    if (this.lineWrapping)
      lines += Math.ceil((to - from - lines * this.lineLength * 0.5) / this.lineLength);
    return this.lineHeight * lines;
  }
  heightForLine(length) {
    if (!this.lineWrapping)
      return this.lineHeight;
    let lines = 1 + Math.max(0, Math.ceil((length - this.lineLength) / (this.lineLength - 5)));
    return lines * this.lineHeight;
  }
  setDoc(doc2) {
    this.doc = doc2;
    return this;
  }
  mustRefreshForWrapping(whiteSpace) {
    return wrappingWhiteSpace.indexOf(whiteSpace) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(lineHeights) {
    let newHeight = false;
    for (let i = 0; i < lineHeights.length; i++) {
      let h = lineHeights[i];
      if (h < 0) {
        i++;
      } else if (!this.heightSamples[Math.floor(h * 10)]) {
        newHeight = true;
        this.heightSamples[Math.floor(h * 10)] = true;
      }
    }
    return newHeight;
  }
  refresh(whiteSpace, lineHeight, charWidth, lineLength, knownHeights) {
    let lineWrapping = wrappingWhiteSpace.indexOf(whiteSpace) > -1;
    let changed = Math.round(lineHeight) != Math.round(this.lineHeight) || this.lineWrapping != lineWrapping;
    this.lineWrapping = lineWrapping;
    this.lineHeight = lineHeight;
    this.charWidth = charWidth;
    this.lineLength = lineLength;
    if (changed) {
      this.heightSamples = {};
      for (let i = 0; i < knownHeights.length; i++) {
        let h = knownHeights[i];
        if (h < 0)
          i++;
        else
          this.heightSamples[Math.floor(h * 10)] = true;
      }
    }
    return changed;
  }
}
class MeasuredHeights {
  constructor(from, heights) {
    this.from = from;
    this.heights = heights;
    this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class BlockInfo {
  constructor(from, length, top2, height, type) {
    this.from = from;
    this.length = length;
    this.top = top2;
    this.height = height;
    this.type = type;
  }
  get to() {
    return this.from + this.length;
  }
  get bottom() {
    return this.top + this.height;
  }
  join(other) {
    let detail = (Array.isArray(this.type) ? this.type : [this]).concat(Array.isArray(other.type) ? other.type : [other]);
    return new BlockInfo(this.from, this.length + other.length, this.top, this.height + other.height, detail);
  }
}
var QueryType = /* @__PURE__ */ function(QueryType2) {
  QueryType2[QueryType2["ByPos"] = 0] = "ByPos";
  QueryType2[QueryType2["ByHeight"] = 1] = "ByHeight";
  QueryType2[QueryType2["ByPosNoHeight"] = 2] = "ByPosNoHeight";
  return QueryType2;
}(QueryType || (QueryType = {}));
const Epsilon = 1e-3;
class HeightMap {
  constructor(length, height, flags = 2) {
    this.length = length;
    this.height = height;
    this.flags = flags;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(value) {
    this.flags = (value ? 2 : 0) | this.flags & ~2;
  }
  setHeight(oracle, height) {
    if (this.height != height) {
      if (Math.abs(this.height - height) > Epsilon)
        oracle.heightChanged = true;
      this.height = height;
    }
  }
  replace(_from, _to, nodes) {
    return HeightMap.of(nodes);
  }
  decomposeLeft(_to, result) {
    result.push(this);
  }
  decomposeRight(_from, result) {
    result.push(this);
  }
  applyChanges(decorations2, oldDoc, oracle, changes) {
    let me = this;
    for (let i = changes.length - 1; i >= 0; i--) {
      let { fromA, toA, fromB, toB } = changes[i];
      let start = me.lineAt(fromA, QueryType.ByPosNoHeight, oldDoc, 0, 0);
      let end = start.to >= toA ? start : me.lineAt(toA, QueryType.ByPosNoHeight, oldDoc, 0, 0);
      toB += end.to - toA;
      toA = end.to;
      while (i > 0 && start.from <= changes[i - 1].toA) {
        fromA = changes[i - 1].fromA;
        fromB = changes[i - 1].fromB;
        i--;
        if (fromA < start.from)
          start = me.lineAt(fromA, QueryType.ByPosNoHeight, oldDoc, 0, 0);
      }
      fromB += start.from - fromA;
      fromA = start.from;
      let nodes = NodeBuilder.build(oracle, decorations2, fromB, toB);
      me = me.replace(fromA, toA, nodes);
    }
    return me.updateHeight(oracle, 0);
  }
  static empty() {
    return new HeightMapText(0, 0);
  }
  static of(nodes) {
    if (nodes.length == 1)
      return nodes[0];
    let i = 0, j = nodes.length, before = 0, after = 0;
    for (; ; ) {
      if (i == j) {
        if (before > after * 2) {
          let split = nodes[i - 1];
          if (split.break)
            nodes.splice(--i, 1, split.left, null, split.right);
          else
            nodes.splice(--i, 1, split.left, split.right);
          j += 1 + split.break;
          before -= split.size;
        } else if (after > before * 2) {
          let split = nodes[j];
          if (split.break)
            nodes.splice(j, 1, split.left, null, split.right);
          else
            nodes.splice(j, 1, split.left, split.right);
          j += 2 + split.break;
          after -= split.size;
        } else {
          break;
        }
      } else if (before < after) {
        let next = nodes[i++];
        if (next)
          before += next.size;
      } else {
        let next = nodes[--j];
        if (next)
          after += next.size;
      }
    }
    let brk = 0;
    if (nodes[i - 1] == null) {
      brk = 1;
      i--;
    } else if (nodes[i] == null) {
      brk = 1;
      j++;
    }
    return new HeightMapBranch(HeightMap.of(nodes.slice(0, i)), brk, HeightMap.of(nodes.slice(j)));
  }
}
HeightMap.prototype.size = 1;
class HeightMapBlock extends HeightMap {
  constructor(length, height, type) {
    super(length, height);
    this.type = type;
  }
  blockAt(_height, _doc, top2, offset) {
    return new BlockInfo(offset, this.length, top2, this.height, this.type);
  }
  lineAt(_value, _type, doc2, top2, offset) {
    return this.blockAt(0, doc2, top2, offset);
  }
  forEachLine(from, to, doc2, top2, offset, f) {
    if (from <= offset + this.length && to >= offset)
      f(this.blockAt(0, doc2, top2, offset));
  }
  updateHeight(oracle, offset = 0, _force = false, measured) {
    if (measured && measured.from <= offset && measured.more)
      this.setHeight(oracle, measured.heights[measured.index++]);
    this.outdated = false;
    return this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class HeightMapText extends HeightMapBlock {
  constructor(length, height) {
    super(length, height, BlockType.Text);
    this.collapsed = 0;
    this.widgetHeight = 0;
  }
  replace(_from, _to, nodes) {
    let node = nodes[0];
    if (nodes.length == 1 && (node instanceof HeightMapText || node instanceof HeightMapGap && node.flags & 4) && Math.abs(this.length - node.length) < 10) {
      if (node instanceof HeightMapGap)
        node = new HeightMapText(node.length, this.height);
      else
        node.height = this.height;
      if (!this.outdated)
        node.outdated = false;
      return node;
    } else {
      return HeightMap.of(nodes);
    }
  }
  updateHeight(oracle, offset = 0, force = false, measured) {
    if (measured && measured.from <= offset && measured.more)
      this.setHeight(oracle, measured.heights[measured.index++]);
    else if (force || this.outdated)
      this.setHeight(oracle, Math.max(this.widgetHeight, oracle.heightForLine(this.length - this.collapsed)));
    this.outdated = false;
    return this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class HeightMapGap extends HeightMap {
  constructor(length) {
    super(length, 0);
  }
  lines(doc2, offset) {
    let firstLine = doc2.lineAt(offset).number, lastLine = doc2.lineAt(offset + this.length).number;
    return { firstLine, lastLine, lineHeight: this.height / (lastLine - firstLine + 1) };
  }
  blockAt(height, doc2, top2, offset) {
    let { firstLine, lastLine, lineHeight } = this.lines(doc2, offset);
    let line = Math.max(0, Math.min(lastLine - firstLine, Math.floor((height - top2) / lineHeight)));
    let { from, length } = doc2.line(firstLine + line);
    return new BlockInfo(from, length, top2 + lineHeight * line, lineHeight, BlockType.Text);
  }
  lineAt(value, type, doc2, top2, offset) {
    if (type == QueryType.ByHeight)
      return this.blockAt(value, doc2, top2, offset);
    if (type == QueryType.ByPosNoHeight) {
      let { from: from2, to } = doc2.lineAt(value);
      return new BlockInfo(from2, to - from2, 0, 0, BlockType.Text);
    }
    let { firstLine, lineHeight } = this.lines(doc2, offset);
    let { from, length, number } = doc2.lineAt(value);
    return new BlockInfo(from, length, top2 + lineHeight * (number - firstLine), lineHeight, BlockType.Text);
  }
  forEachLine(from, to, doc2, top2, offset, f) {
    let { firstLine, lineHeight } = this.lines(doc2, offset);
    for (let pos = Math.max(from, offset), end = Math.min(offset + this.length, to); pos <= end; ) {
      let line = doc2.lineAt(pos);
      if (pos == from)
        top2 += lineHeight * (line.number - firstLine);
      f(new BlockInfo(line.from, line.length, top2, lineHeight, BlockType.Text));
      top2 += lineHeight;
      pos = line.to + 1;
    }
  }
  replace(from, to, nodes) {
    let after = this.length - to;
    if (after > 0) {
      let last = nodes[nodes.length - 1];
      if (last instanceof HeightMapGap)
        nodes[nodes.length - 1] = new HeightMapGap(last.length + after);
      else
        nodes.push(null, new HeightMapGap(after - 1));
    }
    if (from > 0) {
      let first = nodes[0];
      if (first instanceof HeightMapGap)
        nodes[0] = new HeightMapGap(from + first.length);
      else
        nodes.unshift(new HeightMapGap(from - 1), null);
    }
    return HeightMap.of(nodes);
  }
  decomposeLeft(to, result) {
    result.push(new HeightMapGap(to - 1), null);
  }
  decomposeRight(from, result) {
    result.push(null, new HeightMapGap(this.length - from - 1));
  }
  updateHeight(oracle, offset = 0, force = false, measured) {
    let end = offset + this.length;
    if (measured && measured.from <= offset + this.length && measured.more) {
      let nodes = [], pos = Math.max(offset, measured.from), singleHeight = -1;
      let wasChanged = oracle.heightChanged;
      if (measured.from > offset)
        nodes.push(new HeightMapGap(measured.from - offset - 1).updateHeight(oracle, offset));
      while (pos <= end && measured.more) {
        let len = oracle.doc.lineAt(pos).length;
        if (nodes.length)
          nodes.push(null);
        let height = measured.heights[measured.index++];
        if (singleHeight == -1)
          singleHeight = height;
        else if (Math.abs(height - singleHeight) >= Epsilon)
          singleHeight = -2;
        let line = new HeightMapText(len, height);
        line.outdated = false;
        nodes.push(line);
        pos += len + 1;
      }
      if (pos <= end)
        nodes.push(null, new HeightMapGap(end - pos).updateHeight(oracle, pos));
      let result = HeightMap.of(nodes);
      oracle.heightChanged = wasChanged || singleHeight < 0 || Math.abs(result.height - this.height) >= Epsilon || Math.abs(singleHeight - this.lines(oracle.doc, offset).lineHeight) >= Epsilon;
      return result;
    } else if (force || this.outdated) {
      this.setHeight(oracle, oracle.heightForGap(offset, offset + this.length));
      this.outdated = false;
    }
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class HeightMapBranch extends HeightMap {
  constructor(left, brk, right) {
    super(left.length + brk + right.length, left.height + right.height, brk | (left.outdated || right.outdated ? 2 : 0));
    this.left = left;
    this.right = right;
    this.size = left.size + right.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(height, doc2, top2, offset) {
    let mid = top2 + this.left.height;
    return height < mid ? this.left.blockAt(height, doc2, top2, offset) : this.right.blockAt(height, doc2, mid, offset + this.left.length + this.break);
  }
  lineAt(value, type, doc2, top2, offset) {
    let rightTop = top2 + this.left.height, rightOffset = offset + this.left.length + this.break;
    let left = type == QueryType.ByHeight ? value < rightTop : value < rightOffset;
    let base2 = left ? this.left.lineAt(value, type, doc2, top2, offset) : this.right.lineAt(value, type, doc2, rightTop, rightOffset);
    if (this.break || (left ? base2.to < rightOffset : base2.from > rightOffset))
      return base2;
    let subQuery = type == QueryType.ByPosNoHeight ? QueryType.ByPosNoHeight : QueryType.ByPos;
    if (left)
      return base2.join(this.right.lineAt(rightOffset, subQuery, doc2, rightTop, rightOffset));
    else
      return this.left.lineAt(rightOffset, subQuery, doc2, top2, offset).join(base2);
  }
  forEachLine(from, to, doc2, top2, offset, f) {
    let rightTop = top2 + this.left.height, rightOffset = offset + this.left.length + this.break;
    if (this.break) {
      if (from < rightOffset)
        this.left.forEachLine(from, to, doc2, top2, offset, f);
      if (to >= rightOffset)
        this.right.forEachLine(from, to, doc2, rightTop, rightOffset, f);
    } else {
      let mid = this.lineAt(rightOffset, QueryType.ByPos, doc2, top2, offset);
      if (from < mid.from)
        this.left.forEachLine(from, mid.from - 1, doc2, top2, offset, f);
      if (mid.to >= from && mid.from <= to)
        f(mid);
      if (to > mid.to)
        this.right.forEachLine(mid.to + 1, to, doc2, rightTop, rightOffset, f);
    }
  }
  replace(from, to, nodes) {
    let rightStart = this.left.length + this.break;
    if (to < rightStart)
      return this.balanced(this.left.replace(from, to, nodes), this.right);
    if (from > this.left.length)
      return this.balanced(this.left, this.right.replace(from - rightStart, to - rightStart, nodes));
    let result = [];
    if (from > 0)
      this.decomposeLeft(from, result);
    let left = result.length;
    for (let node of nodes)
      result.push(node);
    if (from > 0)
      mergeGaps(result, left - 1);
    if (to < this.length) {
      let right = result.length;
      this.decomposeRight(to, result);
      mergeGaps(result, right);
    }
    return HeightMap.of(result);
  }
  decomposeLeft(to, result) {
    let left = this.left.length;
    if (to <= left)
      return this.left.decomposeLeft(to, result);
    result.push(this.left);
    if (this.break) {
      left++;
      if (to >= left)
        result.push(null);
    }
    if (to > left)
      this.right.decomposeLeft(to - left, result);
  }
  decomposeRight(from, result) {
    let left = this.left.length, right = left + this.break;
    if (from >= right)
      return this.right.decomposeRight(from - right, result);
    if (from < left)
      this.left.decomposeRight(from, result);
    if (this.break && from < right)
      result.push(null);
    result.push(this.right);
  }
  balanced(left, right) {
    if (left.size > 2 * right.size || right.size > 2 * left.size)
      return HeightMap.of(this.break ? [left, null, right] : [left, right]);
    this.left = left;
    this.right = right;
    this.height = left.height + right.height;
    this.outdated = left.outdated || right.outdated;
    this.size = left.size + right.size;
    this.length = left.length + this.break + right.length;
    return this;
  }
  updateHeight(oracle, offset = 0, force = false, measured) {
    let { left, right } = this, rightStart = offset + left.length + this.break, rebalance = null;
    if (measured && measured.from <= offset + left.length && measured.more)
      rebalance = left = left.updateHeight(oracle, offset, force, measured);
    else
      left.updateHeight(oracle, offset, force);
    if (measured && measured.from <= rightStart + right.length && measured.more)
      rebalance = right = right.updateHeight(oracle, rightStart, force, measured);
    else
      right.updateHeight(oracle, rightStart, force);
    if (rebalance)
      return this.balanced(left, right);
    this.height = this.left.height + this.right.height;
    this.outdated = false;
    return this;
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function mergeGaps(nodes, around) {
  let before, after;
  if (nodes[around] == null && (before = nodes[around - 1]) instanceof HeightMapGap && (after = nodes[around + 1]) instanceof HeightMapGap)
    nodes.splice(around - 1, 3, new HeightMapGap(before.length + 1 + after.length));
}
const relevantWidgetHeight = 5;
class NodeBuilder {
  constructor(pos, oracle) {
    this.pos = pos;
    this.oracle = oracle;
    this.nodes = [];
    this.lineStart = -1;
    this.lineEnd = -1;
    this.covering = null;
    this.writtenTo = pos;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(_from, to) {
    if (this.lineStart > -1) {
      let end = Math.min(to, this.lineEnd), last = this.nodes[this.nodes.length - 1];
      if (last instanceof HeightMapText)
        last.length += end - this.pos;
      else if (end > this.pos || !this.isCovered)
        this.nodes.push(new HeightMapText(end - this.pos, -1));
      this.writtenTo = end;
      if (to > end) {
        this.nodes.push(null);
        this.writtenTo++;
        this.lineStart = -1;
      }
    }
    this.pos = to;
  }
  point(from, to, deco) {
    if (from < to || deco.heightRelevant) {
      let height = deco.widget ? deco.widget.estimatedHeight : 0;
      if (height < 0)
        height = this.oracle.lineHeight;
      let len = to - from;
      if (deco.block) {
        this.addBlock(new HeightMapBlock(len, height, deco.type));
      } else if (len || height >= relevantWidgetHeight) {
        this.addLineDeco(height, len);
      }
    } else if (to > from) {
      this.span(from, to);
    }
    if (this.lineEnd > -1 && this.lineEnd < this.pos)
      this.lineEnd = this.oracle.doc.lineAt(this.pos).to;
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from, to } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = from;
    this.lineEnd = to;
    if (this.writtenTo < from) {
      if (this.writtenTo < from - 1 || this.nodes[this.nodes.length - 1] == null)
        this.nodes.push(this.blankContent(this.writtenTo, from - 1));
      this.nodes.push(null);
    }
    if (this.pos > from)
      this.nodes.push(new HeightMapText(this.pos - from, -1));
    this.writtenTo = this.pos;
  }
  blankContent(from, to) {
    let gap = new HeightMapGap(to - from);
    if (this.oracle.doc.lineAt(from).to == to)
      gap.flags |= 4;
    return gap;
  }
  ensureLine() {
    this.enterLine();
    let last = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (last instanceof HeightMapText)
      return last;
    let line = new HeightMapText(0, -1);
    this.nodes.push(line);
    return line;
  }
  addBlock(block) {
    this.enterLine();
    if (block.type == BlockType.WidgetAfter && !this.isCovered)
      this.ensureLine();
    this.nodes.push(block);
    this.writtenTo = this.pos = this.pos + block.length;
    if (block.type != BlockType.WidgetBefore)
      this.covering = block;
  }
  addLineDeco(height, length) {
    let line = this.ensureLine();
    line.length += length;
    line.collapsed += length;
    line.widgetHeight = Math.max(line.widgetHeight, height);
    this.writtenTo = this.pos = this.pos + length;
  }
  finish(from) {
    let last = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    if (this.lineStart > -1 && !(last instanceof HeightMapText) && !this.isCovered)
      this.nodes.push(new HeightMapText(0, -1));
    else if (this.writtenTo < this.pos || last == null)
      this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let pos = from;
    for (let node of this.nodes) {
      if (node instanceof HeightMapText)
        node.updateHeight(this.oracle, pos);
      pos += node ? node.length : 1;
    }
    return this.nodes;
  }
  static build(oracle, decorations2, from, to) {
    let builder = new NodeBuilder(from, oracle);
    RangeSet.spans(decorations2, from, to, builder, 0);
    return builder.finish(from);
  }
}
function heightRelevantDecoChanges(a, b, diff) {
  let comp = new DecorationComparator();
  RangeSet.compare(a, b, diff, comp, 0);
  return comp.changes;
}
class DecorationComparator {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(from, to, a, b) {
    if (from < to || a && a.heightRelevant || b && b.heightRelevant)
      addRange(from, to, this.changes, 5);
  }
}
function visiblePixelRange(dom, paddingTop) {
  let rect = dom.getBoundingClientRect();
  let doc2 = dom.ownerDocument, win = doc2.defaultView || window;
  let left = Math.max(0, rect.left), right = Math.min(win.innerWidth, rect.right);
  let top2 = Math.max(0, rect.top), bottom = Math.min(win.innerHeight, rect.bottom);
  for (let parent = dom.parentNode; parent && parent != doc2.body; ) {
    if (parent.nodeType == 1) {
      let elt = parent;
      let style = window.getComputedStyle(elt);
      if ((elt.scrollHeight > elt.clientHeight || elt.scrollWidth > elt.clientWidth) && style.overflow != "visible") {
        let parentRect = elt.getBoundingClientRect();
        left = Math.max(left, parentRect.left);
        right = Math.min(right, parentRect.right);
        top2 = Math.max(top2, parentRect.top);
        bottom = parent == dom.parentNode ? parentRect.bottom : Math.min(bottom, parentRect.bottom);
      }
      parent = style.position == "absolute" || style.position == "fixed" ? elt.offsetParent : elt.parentNode;
    } else if (parent.nodeType == 11) {
      parent = parent.host;
    } else {
      break;
    }
  }
  return {
    left: left - rect.left,
    right: Math.max(left, right) - rect.left,
    top: top2 - (rect.top + paddingTop),
    bottom: Math.max(top2, bottom) - (rect.top + paddingTop)
  };
}
function fullPixelRange(dom, paddingTop) {
  let rect = dom.getBoundingClientRect();
  return {
    left: 0,
    right: rect.right - rect.left,
    top: paddingTop,
    bottom: rect.bottom - (rect.top + paddingTop)
  };
}
class LineGap {
  constructor(from, to, size) {
    this.from = from;
    this.to = to;
    this.size = size;
  }
  static same(a, b) {
    if (a.length != b.length)
      return false;
    for (let i = 0; i < a.length; i++) {
      let gA = a[i], gB = b[i];
      if (gA.from != gB.from || gA.to != gB.to || gA.size != gB.size)
        return false;
    }
    return true;
  }
  draw(wrapping) {
    return Decoration.replace({ widget: new LineGapWidget(this.size, wrapping) }).range(this.from, this.to);
  }
}
class LineGapWidget extends WidgetType {
  constructor(size, vertical) {
    super();
    this.size = size;
    this.vertical = vertical;
  }
  eq(other) {
    return other.size == this.size && other.vertical == this.vertical;
  }
  toDOM() {
    let elt = document.createElement("div");
    if (this.vertical) {
      elt.style.height = this.size + "px";
    } else {
      elt.style.width = this.size + "px";
      elt.style.height = "2px";
      elt.style.display = "inline-block";
    }
    return elt;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class ViewState {
  constructor(state) {
    this.state = state;
    this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 };
    this.inView = true;
    this.paddingTop = 0;
    this.paddingBottom = 0;
    this.contentDOMWidth = 0;
    this.contentDOMHeight = 0;
    this.editorHeight = 0;
    this.editorWidth = 0;
    this.scaler = IdScaler;
    this.scrollTarget = null;
    this.printing = false;
    this.mustMeasureContent = true;
    this.defaultTextDirection = Direction.LTR;
    this.visibleRanges = [];
    this.mustEnforceCursorAssoc = false;
    let guessWrapping = state.facet(contentAttributes).some((v) => typeof v != "function" && v.class == "cm-lineWrapping");
    this.heightOracle = new HeightOracle(guessWrapping);
    this.stateDeco = state.facet(decorations).filter((d) => typeof d != "function");
    this.heightMap = HeightMap.empty().applyChanges(this.stateDeco, Text.empty, this.heightOracle.setDoc(state.doc), [new ChangedRange(0, 0, 0, state.doc.length)]);
    this.viewport = this.getViewport(0, null);
    this.updateViewportLines();
    this.updateForViewport();
    this.lineGaps = this.ensureLineGaps([]);
    this.lineGapDeco = Decoration.set(this.lineGaps.map((gap) => gap.draw(false)));
    this.computeVisibleRanges();
  }
  updateForViewport() {
    let viewports = [this.viewport], { main } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let pos = i ? main.head : main.anchor;
      if (!viewports.some(({ from, to }) => pos >= from && pos <= to)) {
        let { from, to } = this.lineBlockAt(pos);
        viewports.push(new Viewport(from, to));
      }
    }
    this.viewports = viewports.sort((a, b) => a.from - b.from);
    this.scaler = this.heightMap.height <= 7e6 ? IdScaler : new BigScaler(this.heightOracle.doc, this.heightMap, this.viewports);
  }
  updateViewportLines() {
    this.viewportLines = [];
    this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.state.doc, 0, 0, (block) => {
      this.viewportLines.push(this.scaler.scale == 1 ? block : scaleBlock(block, this.scaler));
    });
  }
  update(update, scrollTarget = null) {
    this.state = update.state;
    let prevDeco = this.stateDeco;
    this.stateDeco = this.state.facet(decorations).filter((d) => typeof d != "function");
    let contentChanges = update.changedRanges;
    let heightChanges = ChangedRange.extendWithRanges(contentChanges, heightRelevantDecoChanges(prevDeco, this.stateDeco, update ? update.changes : ChangeSet.empty(this.state.doc.length)));
    let prevHeight = this.heightMap.height;
    this.heightMap = this.heightMap.applyChanges(this.stateDeco, update.startState.doc, this.heightOracle.setDoc(this.state.doc), heightChanges);
    if (this.heightMap.height != prevHeight)
      update.flags |= 2;
    let viewport = heightChanges.length ? this.mapViewport(this.viewport, update.changes) : this.viewport;
    if (scrollTarget && (scrollTarget.range.head < viewport.from || scrollTarget.range.head > viewport.to) || !this.viewportIsAppropriate(viewport))
      viewport = this.getViewport(0, scrollTarget);
    let updateLines = !update.changes.empty || update.flags & 2 || viewport.from != this.viewport.from || viewport.to != this.viewport.to;
    this.viewport = viewport;
    this.updateForViewport();
    if (updateLines)
      this.updateViewportLines();
    if (this.lineGaps.length || this.viewport.to - this.viewport.from > 2e3 << 1)
      this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, update.changes)));
    update.flags |= this.computeVisibleRanges();
    if (scrollTarget)
      this.scrollTarget = scrollTarget;
    if (!this.mustEnforceCursorAssoc && update.selectionSet && update.view.lineWrapping && update.state.selection.main.empty && update.state.selection.main.assoc && !update.state.facet(nativeSelectionHidden))
      this.mustEnforceCursorAssoc = true;
  }
  measure(view) {
    let dom = view.contentDOM, style = window.getComputedStyle(dom);
    let oracle = this.heightOracle;
    let whiteSpace = style.whiteSpace;
    this.defaultTextDirection = style.direction == "rtl" ? Direction.RTL : Direction.LTR;
    let refresh = this.heightOracle.mustRefreshForWrapping(whiteSpace);
    let measureContent = refresh || this.mustMeasureContent || this.contentDOMHeight != dom.clientHeight;
    this.contentDOMHeight = dom.clientHeight;
    this.mustMeasureContent = false;
    let result = 0, bias = 0;
    let paddingTop = parseInt(style.paddingTop) || 0, paddingBottom = parseInt(style.paddingBottom) || 0;
    if (this.paddingTop != paddingTop || this.paddingBottom != paddingBottom) {
      this.paddingTop = paddingTop;
      this.paddingBottom = paddingBottom;
      result |= 8 | 2;
    }
    if (this.editorWidth != view.scrollDOM.clientWidth) {
      if (oracle.lineWrapping)
        measureContent = true;
      this.editorWidth = view.scrollDOM.clientWidth;
      result |= 8;
    }
    let pixelViewport = (this.printing ? fullPixelRange : visiblePixelRange)(dom, this.paddingTop);
    let dTop = pixelViewport.top - this.pixelViewport.top, dBottom = pixelViewport.bottom - this.pixelViewport.bottom;
    this.pixelViewport = pixelViewport;
    let inView = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (inView != this.inView) {
      this.inView = inView;
      if (inView)
        measureContent = true;
    }
    if (!this.inView && !this.scrollTarget)
      return 0;
    let contentWidth = dom.clientWidth;
    if (this.contentDOMWidth != contentWidth || this.editorHeight != view.scrollDOM.clientHeight) {
      this.contentDOMWidth = contentWidth;
      this.editorHeight = view.scrollDOM.clientHeight;
      result |= 8;
    }
    if (measureContent) {
      let lineHeights = view.docView.measureVisibleLineHeights(this.viewport);
      if (oracle.mustRefreshForHeights(lineHeights))
        refresh = true;
      if (refresh || oracle.lineWrapping && Math.abs(contentWidth - this.contentDOMWidth) > oracle.charWidth) {
        let { lineHeight, charWidth } = view.docView.measureTextSize();
        refresh = lineHeight > 0 && oracle.refresh(whiteSpace, lineHeight, charWidth, contentWidth / charWidth, lineHeights);
        if (refresh) {
          view.docView.minWidth = 0;
          result |= 8;
        }
      }
      if (dTop > 0 && dBottom > 0)
        bias = Math.max(dTop, dBottom);
      else if (dTop < 0 && dBottom < 0)
        bias = Math.min(dTop, dBottom);
      oracle.heightChanged = false;
      for (let vp of this.viewports) {
        let heights = vp.from == this.viewport.from ? lineHeights : view.docView.measureVisibleLineHeights(vp);
        this.heightMap = (refresh ? HeightMap.empty().applyChanges(this.stateDeco, Text.empty, this.heightOracle, [new ChangedRange(0, 0, 0, view.state.doc.length)]) : this.heightMap).updateHeight(oracle, 0, refresh, new MeasuredHeights(vp.from, heights));
      }
      if (oracle.heightChanged)
        result |= 2;
    }
    let viewportChange = !this.viewportIsAppropriate(this.viewport, bias) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    if (viewportChange)
      this.viewport = this.getViewport(bias, this.scrollTarget);
    this.updateForViewport();
    if (result & 2 || viewportChange)
      this.updateViewportLines();
    if (this.lineGaps.length || this.viewport.to - this.viewport.from > 2e3 << 1)
      this.updateLineGaps(this.ensureLineGaps(refresh ? [] : this.lineGaps, view));
    result |= this.computeVisibleRanges();
    if (this.mustEnforceCursorAssoc) {
      this.mustEnforceCursorAssoc = false;
      view.docView.enforceCursorAssoc();
    }
    return result;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(bias, scrollTarget) {
    let marginTop = 0.5 - Math.max(-0.5, Math.min(0.5, bias / 1e3 / 2));
    let map = this.heightMap, doc2 = this.state.doc, { visibleTop, visibleBottom } = this;
    let viewport = new Viewport(map.lineAt(visibleTop - marginTop * 1e3, QueryType.ByHeight, doc2, 0, 0).from, map.lineAt(visibleBottom + (1 - marginTop) * 1e3, QueryType.ByHeight, doc2, 0, 0).to);
    if (scrollTarget) {
      let { head } = scrollTarget.range;
      if (head < viewport.from || head > viewport.to) {
        let viewHeight = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top);
        let block = map.lineAt(head, QueryType.ByPos, doc2, 0, 0), topPos;
        if (scrollTarget.y == "center")
          topPos = (block.top + block.bottom) / 2 - viewHeight / 2;
        else if (scrollTarget.y == "start" || scrollTarget.y == "nearest" && head < viewport.from)
          topPos = block.top;
        else
          topPos = block.bottom - viewHeight;
        viewport = new Viewport(map.lineAt(topPos - 1e3 / 2, QueryType.ByHeight, doc2, 0, 0).from, map.lineAt(topPos + viewHeight + 1e3 / 2, QueryType.ByHeight, doc2, 0, 0).to);
      }
    }
    return viewport;
  }
  mapViewport(viewport, changes) {
    let from = changes.mapPos(viewport.from, -1), to = changes.mapPos(viewport.to, 1);
    return new Viewport(this.heightMap.lineAt(from, QueryType.ByPos, this.state.doc, 0, 0).from, this.heightMap.lineAt(to, QueryType.ByPos, this.state.doc, 0, 0).to);
  }
  viewportIsAppropriate({ from, to }, bias = 0) {
    if (!this.inView)
      return true;
    let { top: top2 } = this.heightMap.lineAt(from, QueryType.ByPos, this.state.doc, 0, 0);
    let { bottom } = this.heightMap.lineAt(to, QueryType.ByPos, this.state.doc, 0, 0);
    let { visibleTop, visibleBottom } = this;
    return (from == 0 || top2 <= visibleTop - Math.max(10, Math.min(-bias, 250))) && (to == this.state.doc.length || bottom >= visibleBottom + Math.max(10, Math.min(bias, 250))) && (top2 > visibleTop - 2 * 1e3 && bottom < visibleBottom + 2 * 1e3);
  }
  mapLineGaps(gaps, changes) {
    if (!gaps.length || changes.empty)
      return gaps;
    let mapped = [];
    for (let gap of gaps)
      if (!changes.touchesRange(gap.from, gap.to))
        mapped.push(new LineGap(changes.mapPos(gap.from), changes.mapPos(gap.to), gap.size));
    return mapped;
  }
  ensureLineGaps(current, mayMeasure) {
    let wrapping = this.heightOracle.lineWrapping;
    let margin = wrapping ? 1e4 : 2e3, halfMargin = margin >> 1, doubleMargin = margin << 1;
    if (this.defaultTextDirection != Direction.LTR && !wrapping)
      return [];
    let gaps = [];
    let addGap = (from, to, line, structure) => {
      if (to - from < halfMargin)
        return;
      let sel = this.state.selection.main, avoid = [sel.from];
      if (!sel.empty)
        avoid.push(sel.to);
      for (let pos of avoid) {
        if (pos > from && pos < to) {
          addGap(from, pos - 10, line, structure);
          addGap(pos + 10, to, line, structure);
          return;
        }
      }
      let gap = find(current, (gap2) => gap2.from >= line.from && gap2.to <= line.to && Math.abs(gap2.from - from) < halfMargin && Math.abs(gap2.to - to) < halfMargin && !avoid.some((pos) => gap2.from < pos && gap2.to > pos));
      if (!gap) {
        if (to < line.to && mayMeasure && wrapping && mayMeasure.visibleRanges.some((r) => r.from <= to && r.to >= to)) {
          let lineStart = mayMeasure.moveToLineBoundary(EditorSelection.cursor(to), false, true).head;
          if (lineStart > from)
            to = lineStart;
        }
        gap = new LineGap(from, to, this.gapSize(line, from, to, structure));
      }
      gaps.push(gap);
    };
    for (let line of this.viewportLines) {
      if (line.length < doubleMargin)
        continue;
      let structure = lineStructure(line.from, line.to, this.stateDeco);
      if (structure.total < doubleMargin)
        continue;
      let target = this.scrollTarget ? this.scrollTarget.range.head : null;
      let viewFrom, viewTo;
      if (wrapping) {
        let marginHeight = margin / this.heightOracle.lineLength * this.heightOracle.lineHeight;
        let top2, bot;
        if (target != null) {
          let targetFrac = findFraction(structure, target);
          let spaceFrac = ((this.visibleBottom - this.visibleTop) / 2 + marginHeight) / line.height;
          top2 = targetFrac - spaceFrac;
          bot = targetFrac + spaceFrac;
        } else {
          top2 = (this.visibleTop - line.top - marginHeight) / line.height;
          bot = (this.visibleBottom - line.top + marginHeight) / line.height;
        }
        viewFrom = findPosition(structure, top2);
        viewTo = findPosition(structure, bot);
      } else {
        let totalWidth = structure.total * this.heightOracle.charWidth;
        let marginWidth = margin * this.heightOracle.charWidth;
        let left, right;
        if (target != null) {
          let targetFrac = findFraction(structure, target);
          let spaceFrac = ((this.pixelViewport.right - this.pixelViewport.left) / 2 + marginWidth) / totalWidth;
          left = targetFrac - spaceFrac;
          right = targetFrac + spaceFrac;
        } else {
          left = (this.pixelViewport.left - marginWidth) / totalWidth;
          right = (this.pixelViewport.right + marginWidth) / totalWidth;
        }
        viewFrom = findPosition(structure, left);
        viewTo = findPosition(structure, right);
      }
      if (viewFrom > line.from)
        addGap(line.from, viewFrom, line, structure);
      if (viewTo < line.to)
        addGap(viewTo, line.to, line, structure);
    }
    return gaps;
  }
  gapSize(line, from, to, structure) {
    let fraction = findFraction(structure, to) - findFraction(structure, from);
    if (this.heightOracle.lineWrapping) {
      return line.height * fraction;
    } else {
      return structure.total * this.heightOracle.charWidth * fraction;
    }
  }
  updateLineGaps(gaps) {
    if (!LineGap.same(gaps, this.lineGaps)) {
      this.lineGaps = gaps;
      this.lineGapDeco = Decoration.set(gaps.map((gap) => gap.draw(this.heightOracle.lineWrapping)));
    }
  }
  computeVisibleRanges() {
    let deco = this.stateDeco;
    if (this.lineGaps.length)
      deco = deco.concat(this.lineGapDeco);
    let ranges = [];
    RangeSet.spans(deco, this.viewport.from, this.viewport.to, {
      span(from, to) {
        ranges.push({ from, to });
      },
      point() {
      }
    }, 20);
    let changed = ranges.length != this.visibleRanges.length || this.visibleRanges.some((r, i) => r.from != ranges[i].from || r.to != ranges[i].to);
    this.visibleRanges = ranges;
    return changed ? 4 : 0;
  }
  lineBlockAt(pos) {
    return pos >= this.viewport.from && pos <= this.viewport.to && this.viewportLines.find((b) => b.from <= pos && b.to >= pos) || scaleBlock(this.heightMap.lineAt(pos, QueryType.ByPos, this.state.doc, 0, 0), this.scaler);
  }
  lineBlockAtHeight(height) {
    return scaleBlock(this.heightMap.lineAt(this.scaler.fromDOM(height), QueryType.ByHeight, this.state.doc, 0, 0), this.scaler);
  }
  elementAtHeight(height) {
    return scaleBlock(this.heightMap.blockAt(this.scaler.fromDOM(height), this.state.doc, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Viewport {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
}
function lineStructure(from, to, stateDeco) {
  let ranges = [], pos = from, total = 0;
  RangeSet.spans(stateDeco, from, to, {
    span() {
    },
    point(from2, to2) {
      if (from2 > pos) {
        ranges.push({ from: pos, to: from2 });
        total += from2 - pos;
      }
      pos = to2;
    }
  }, 20);
  if (pos < to) {
    ranges.push({ from: pos, to });
    total += to - pos;
  }
  return { total, ranges };
}
function findPosition({ total, ranges }, ratio) {
  if (ratio <= 0)
    return ranges[0].from;
  if (ratio >= 1)
    return ranges[ranges.length - 1].to;
  let dist = Math.floor(total * ratio);
  for (let i = 0; ; i++) {
    let { from, to } = ranges[i], size = to - from;
    if (dist <= size)
      return from + dist;
    dist -= size;
  }
}
function findFraction(structure, pos) {
  let counted = 0;
  for (let { from, to } of structure.ranges) {
    if (pos <= to) {
      counted += pos - from;
      break;
    }
    counted += to - from;
  }
  return counted / structure.total;
}
function find(array, f) {
  for (let val of array)
    if (f(val))
      return val;
  return void 0;
}
const IdScaler = {
  toDOM(n) {
    return n;
  },
  fromDOM(n) {
    return n;
  },
  scale: 1
};
class BigScaler {
  constructor(doc2, heightMap, viewports) {
    let vpHeight = 0, base2 = 0, domBase = 0;
    this.viewports = viewports.map(({ from, to }) => {
      let top2 = heightMap.lineAt(from, QueryType.ByPos, doc2, 0, 0).top;
      let bottom = heightMap.lineAt(to, QueryType.ByPos, doc2, 0, 0).bottom;
      vpHeight += bottom - top2;
      return { from, to, top: top2, bottom, domTop: 0, domBottom: 0 };
    });
    this.scale = (7e6 - vpHeight) / (heightMap.height - vpHeight);
    for (let obj of this.viewports) {
      obj.domTop = domBase + (obj.top - base2) * this.scale;
      domBase = obj.domBottom = obj.domTop + (obj.bottom - obj.top);
      base2 = obj.bottom;
    }
  }
  toDOM(n) {
    for (let i = 0, base2 = 0, domBase = 0; ; i++) {
      let vp = i < this.viewports.length ? this.viewports[i] : null;
      if (!vp || n < vp.top)
        return domBase + (n - base2) * this.scale;
      if (n <= vp.bottom)
        return vp.domTop + (n - vp.top);
      base2 = vp.bottom;
      domBase = vp.domBottom;
    }
  }
  fromDOM(n) {
    for (let i = 0, base2 = 0, domBase = 0; ; i++) {
      let vp = i < this.viewports.length ? this.viewports[i] : null;
      if (!vp || n < vp.domTop)
        return base2 + (n - domBase) / this.scale;
      if (n <= vp.domBottom)
        return vp.top + (n - vp.domTop);
      base2 = vp.bottom;
      domBase = vp.domBottom;
    }
  }
}
function scaleBlock(block, scaler) {
  if (scaler.scale == 1)
    return block;
  let bTop = scaler.toDOM(block.top), bBottom = scaler.toDOM(block.bottom);
  return new BlockInfo(block.from, block.length, bTop, bBottom - bTop, Array.isArray(block.type) ? block.type.map((b) => scaleBlock(b, scaler)) : block.type);
}
const theme = /* @__PURE__ */ Facet.define({ combine: (strs) => strs.join(" ") });
const darkTheme = /* @__PURE__ */ Facet.define({ combine: (values) => values.indexOf(true) > -1 });
const baseThemeID = /* @__PURE__ */ StyleModule.newName(), baseLightID = /* @__PURE__ */ StyleModule.newName(), baseDarkID = /* @__PURE__ */ StyleModule.newName();
const lightDarkIDs = { "&light": "." + baseLightID, "&dark": "." + baseDarkID };
function buildTheme(main, spec, scopes) {
  return new StyleModule(spec, {
    finish(sel) {
      return /&/.test(sel) ? sel.replace(/&\w*/, (m) => {
        if (m == "&")
          return main;
        if (!scopes || !scopes[m])
          throw new RangeError(`Unsupported selector: ${m}`);
        return scopes[m];
      }) : main + " " + sel;
    }
  });
}
const baseTheme$1 = /* @__PURE__ */ buildTheme("." + baseThemeID, {
  "&.cm-editor": {
    position: "relative !important",
    boxSizing: "border-box",
    "&.cm-focused": {
      outline: "1px dotted #212121"
    },
    display: "flex !important",
    flexDirection: "column"
  },
  ".cm-scroller": {
    display: "flex !important",
    alignItems: "flex-start !important",
    fontFamily: "monospace",
    lineHeight: 1.4,
    height: "100%",
    overflowX: "auto",
    position: "relative",
    zIndex: 0
  },
  ".cm-content": {
    margin: 0,
    flexGrow: 2,
    flexShrink: 0,
    minHeight: "100%",
    display: "block",
    whiteSpace: "pre",
    wordWrap: "normal",
    boxSizing: "border-box",
    padding: "4px 0",
    outline: "none",
    "&[contenteditable=true]": {
      WebkitUserModify: "read-write-plaintext-only"
    }
  },
  ".cm-lineWrapping": {
    whiteSpace_fallback: "pre-wrap",
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    overflowWrap: "anywhere",
    flexShrink: 1
  },
  "&light .cm-content": { caretColor: "black" },
  "&dark .cm-content": { caretColor: "white" },
  ".cm-line": {
    display: "block",
    padding: "0 2px 0 6px"
  },
  ".cm-layer": {
    contain: "size style",
    "& > *": {
      position: "absolute"
    }
  },
  "&light .cm-selectionBackground": {
    background: "#d9d9d9"
  },
  "&dark .cm-selectionBackground": {
    background: "#222"
  },
  "&light.cm-focused .cm-selectionBackground": {
    background: "#d7d4f0"
  },
  "&dark.cm-focused .cm-selectionBackground": {
    background: "#233"
  },
  ".cm-cursorLayer": {
    pointerEvents: "none"
  },
  "&.cm-focused .cm-cursorLayer": {
    animation: "steps(1) cm-blink 1.2s infinite"
  },
  "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  ".cm-cursor, .cm-dropCursor": {
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none"
  },
  ".cm-cursor": {
    display: "none"
  },
  "&dark .cm-cursor": {
    borderLeftColor: "#444"
  },
  "&.cm-focused .cm-cursor": {
    display: "block"
  },
  "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
  "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
  "&light .cm-specialChar": { color: "red" },
  "&dark .cm-specialChar": { color: "#f78" },
  ".cm-gutters": {
    flexShrink: 0,
    display: "flex",
    height: "100%",
    boxSizing: "border-box",
    left: 0,
    zIndex: 200
  },
  "&light .cm-gutters": {
    backgroundColor: "#f5f5f5",
    color: "#6c6c6c",
    borderRight: "1px solid #ddd"
  },
  "&dark .cm-gutters": {
    backgroundColor: "#333338",
    color: "#ccc"
  },
  ".cm-gutter": {
    display: "flex !important",
    flexDirection: "column",
    flexShrink: 0,
    boxSizing: "border-box",
    minHeight: "100%",
    overflow: "hidden"
  },
  ".cm-gutterElement": {
    boxSizing: "border-box"
  },
  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 3px 0 5px",
    minWidth: "20px",
    textAlign: "right",
    whiteSpace: "nowrap"
  },
  "&light .cm-activeLineGutter": {
    backgroundColor: "#e2f2ff"
  },
  "&dark .cm-activeLineGutter": {
    backgroundColor: "#222227"
  },
  ".cm-panels": {
    boxSizing: "border-box",
    position: "sticky",
    left: 0,
    right: 0
  },
  "&light .cm-panels": {
    backgroundColor: "#f5f5f5",
    color: "black"
  },
  "&light .cm-panels-top": {
    borderBottom: "1px solid #ddd"
  },
  "&light .cm-panels-bottom": {
    borderTop: "1px solid #ddd"
  },
  "&dark .cm-panels": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tab": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "bottom"
  },
  ".cm-widgetBuffer": {
    verticalAlign: "text-top",
    height: "1em",
    width: 0,
    display: "inline"
  },
  ".cm-placeholder": {
    color: "#888",
    display: "inline-block",
    verticalAlign: "top"
  },
  ".cm-button": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    padding: ".2em 1em",
    borderRadius: "1px"
  },
  "&light .cm-button": {
    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
    }
  },
  "&dark .cm-button": {
    backgroundImage: "linear-gradient(#393939, #111)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#111, #333)"
    }
  },
  ".cm-textfield": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    border: "1px solid silver",
    padding: ".2em .5em"
  },
  "&light .cm-textfield": {
    backgroundColor: "white"
  },
  "&dark .cm-textfield": {
    border: "1px solid #555",
    backgroundColor: "inherit"
  }
}, lightDarkIDs);
class DOMChange {
  constructor(view, start, end, typeOver) {
    this.typeOver = typeOver;
    this.bounds = null;
    this.text = "";
    let { impreciseHead: iHead, impreciseAnchor: iAnchor } = view.docView;
    if (view.state.readOnly && start > -1) {
      this.newSel = null;
    } else if (start > -1 && (this.bounds = view.docView.domBoundsAround(start, end, 0))) {
      let selPoints = iHead || iAnchor ? [] : selectionPoints(view);
      let reader = new DOMReader(selPoints, view.state);
      reader.readRange(this.bounds.startDOM, this.bounds.endDOM);
      this.text = reader.text;
      this.newSel = selectionFromPoints(selPoints, this.bounds.from);
    } else {
      let domSel = view.observer.selectionRange;
      let head = iHead && iHead.node == domSel.focusNode && iHead.offset == domSel.focusOffset || !contains(view.contentDOM, domSel.focusNode) ? view.state.selection.main.head : view.docView.posFromDOM(domSel.focusNode, domSel.focusOffset);
      let anchor = iAnchor && iAnchor.node == domSel.anchorNode && iAnchor.offset == domSel.anchorOffset || !contains(view.contentDOM, domSel.anchorNode) ? view.state.selection.main.anchor : view.docView.posFromDOM(domSel.anchorNode, domSel.anchorOffset);
      this.newSel = EditorSelection.single(anchor, head);
    }
  }
}
function applyDOMChange(view, domChange) {
  let change;
  let { newSel } = domChange, sel = view.state.selection.main;
  if (domChange.bounds) {
    let { from, to } = domChange.bounds;
    let preferredPos = sel.from, preferredSide = null;
    if (view.inputState.lastKeyCode === 8 && view.inputState.lastKeyTime > Date.now() - 100 || browser.android && domChange.text.length < to - from) {
      preferredPos = sel.to;
      preferredSide = "end";
    }
    let diff = findDiff(view.state.doc.sliceString(from, to, LineBreakPlaceholder), domChange.text, preferredPos - from, preferredSide);
    if (diff) {
      if (browser.chrome && view.inputState.lastKeyCode == 13 && diff.toB == diff.from + 2 && domChange.text.slice(diff.from, diff.toB) == LineBreakPlaceholder + LineBreakPlaceholder)
        diff.toB--;
      change = {
        from: from + diff.from,
        to: from + diff.toA,
        insert: Text.of(domChange.text.slice(diff.from, diff.toB).split(LineBreakPlaceholder))
      };
    }
  } else if (newSel && (!view.hasFocus || !view.state.facet(editable) || newSel.main.eq(sel))) {
    newSel = null;
  }
  if (!change && !newSel)
    return false;
  if (!change && domChange.typeOver && !sel.empty && newSel && newSel.main.empty) {
    change = { from: sel.from, to: sel.to, insert: view.state.doc.slice(sel.from, sel.to) };
  } else if (change && change.from >= sel.from && change.to <= sel.to && (change.from != sel.from || change.to != sel.to) && sel.to - sel.from - (change.to - change.from) <= 4) {
    change = {
      from: sel.from,
      to: sel.to,
      insert: view.state.doc.slice(sel.from, change.from).append(change.insert).append(view.state.doc.slice(change.to, sel.to))
    };
  } else if ((browser.mac || browser.android) && change && change.from == change.to && change.from == sel.head - 1 && /^\. ?$/.test(change.insert.toString())) {
    if (newSel && change.insert.length == 2)
      newSel = EditorSelection.single(newSel.main.anchor - 1, newSel.main.head - 1);
    change = { from: sel.from, to: sel.to, insert: Text.of([" "]) };
  } else if (browser.chrome && change && change.from == change.to && change.from == sel.head && change.insert.toString() == "\n " && view.lineWrapping) {
    if (newSel)
      newSel = EditorSelection.single(newSel.main.anchor - 1, newSel.main.head - 1);
    change = { from: sel.from, to: sel.to, insert: Text.of([" "]) };
  }
  if (change) {
    let startState = view.state;
    if (browser.ios && view.inputState.flushIOSKey(view))
      return true;
    if (browser.android && (change.from == sel.from && change.to == sel.to && change.insert.length == 1 && change.insert.lines == 2 && dispatchKey(view.contentDOM, "Enter", 13) || change.from == sel.from - 1 && change.to == sel.to && change.insert.length == 0 && dispatchKey(view.contentDOM, "Backspace", 8) || change.from == sel.from && change.to == sel.to + 1 && change.insert.length == 0 && dispatchKey(view.contentDOM, "Delete", 46)))
      return true;
    let text = change.insert.toString();
    if (view.state.facet(inputHandler).some((h) => h(view, change.from, change.to, text)))
      return true;
    if (view.inputState.composing >= 0)
      view.inputState.composing++;
    let tr;
    if (change.from >= sel.from && change.to <= sel.to && change.to - change.from >= (sel.to - sel.from) / 3 && (!newSel || newSel.main.empty && newSel.main.from == change.from + change.insert.length) && view.inputState.composing < 0) {
      let before = sel.from < change.from ? startState.sliceDoc(sel.from, change.from) : "";
      let after = sel.to > change.to ? startState.sliceDoc(change.to, sel.to) : "";
      tr = startState.replaceSelection(view.state.toText(before + change.insert.sliceString(0, void 0, view.state.lineBreak) + after));
    } else {
      let changes = startState.changes(change);
      let mainSel = newSel && !startState.selection.main.eq(newSel.main) && newSel.main.to <= changes.newLength ? newSel.main : void 0;
      if (startState.selection.ranges.length > 1 && view.inputState.composing >= 0 && change.to <= sel.to && change.to >= sel.to - 10) {
        let replaced = view.state.sliceDoc(change.from, change.to);
        let compositionRange = compositionSurroundingNode(view) || view.state.doc.lineAt(sel.head);
        let offset = sel.to - change.to, size = sel.to - sel.from;
        tr = startState.changeByRange((range) => {
          if (range.from == sel.from && range.to == sel.to)
            return { changes, range: mainSel || range.map(changes) };
          let to = range.to - offset, from = to - replaced.length;
          if (range.to - range.from != size || view.state.sliceDoc(from, to) != replaced || compositionRange && range.to >= compositionRange.from && range.from <= compositionRange.to)
            return { range };
          let rangeChanges = startState.changes({ from, to, insert: change.insert }), selOff = range.to - sel.to;
          return {
            changes: rangeChanges,
            range: !mainSel ? range.map(rangeChanges) : EditorSelection.range(Math.max(0, mainSel.anchor + selOff), Math.max(0, mainSel.head + selOff))
          };
        });
      } else {
        tr = {
          changes,
          selection: mainSel && startState.selection.replaceRange(mainSel)
        };
      }
    }
    let userEvent = "input.type";
    if (view.composing) {
      userEvent += ".compose";
      if (view.inputState.compositionFirstChange) {
        userEvent += ".start";
        view.inputState.compositionFirstChange = false;
      }
    }
    view.dispatch(tr, { scrollIntoView: true, userEvent });
    return true;
  } else if (newSel && !newSel.main.eq(sel)) {
    let scrollIntoView2 = false, userEvent = "select";
    if (view.inputState.lastSelectionTime > Date.now() - 50) {
      if (view.inputState.lastSelectionOrigin == "select")
        scrollIntoView2 = true;
      userEvent = view.inputState.lastSelectionOrigin;
    }
    view.dispatch({ selection: newSel, scrollIntoView: scrollIntoView2, userEvent });
    return true;
  } else {
    return false;
  }
}
function findDiff(a, b, preferredPos, preferredSide) {
  let minLen = Math.min(a.length, b.length);
  let from = 0;
  while (from < minLen && a.charCodeAt(from) == b.charCodeAt(from))
    from++;
  if (from == minLen && a.length == b.length)
    return null;
  let toA = a.length, toB = b.length;
  while (toA > 0 && toB > 0 && a.charCodeAt(toA - 1) == b.charCodeAt(toB - 1)) {
    toA--;
    toB--;
  }
  if (preferredSide == "end") {
    let adjust = Math.max(0, from - Math.min(toA, toB));
    preferredPos -= toA + adjust - from;
  }
  if (toA < from && a.length < b.length) {
    let move = preferredPos <= from && preferredPos >= toA ? from - preferredPos : 0;
    from -= move;
    toB = from + (toB - toA);
    toA = from;
  } else if (toB < from) {
    let move = preferredPos <= from && preferredPos >= toB ? from - preferredPos : 0;
    from -= move;
    toA = from + (toA - toB);
    toB = from;
  }
  return { from, toA, toB };
}
function selectionPoints(view) {
  let result = [];
  if (view.root.activeElement != view.contentDOM)
    return result;
  let { anchorNode, anchorOffset, focusNode, focusOffset } = view.observer.selectionRange;
  if (anchorNode) {
    result.push(new DOMPoint(anchorNode, anchorOffset));
    if (focusNode != anchorNode || focusOffset != anchorOffset)
      result.push(new DOMPoint(focusNode, focusOffset));
  }
  return result;
}
function selectionFromPoints(points, base2) {
  if (points.length == 0)
    return null;
  let anchor = points[0].pos, head = points.length == 2 ? points[1].pos : anchor;
  return anchor > -1 && head > -1 ? EditorSelection.single(anchor + base2, head + base2) : null;
}
const observeOptions = {
  childList: true,
  characterData: true,
  subtree: true,
  attributes: true,
  characterDataOldValue: true
};
const useCharData = browser.ie && browser.ie_version <= 11;
class DOMObserver {
  constructor(view) {
    this.view = view;
    this.active = false;
    this.selectionRange = new DOMSelectionState();
    this.selectionChanged = false;
    this.delayedFlush = -1;
    this.resizeTimeout = -1;
    this.queue = [];
    this.delayedAndroidKey = null;
    this.flushingAndroidKey = -1;
    this.lastChange = 0;
    this.scrollTargets = [];
    this.intersection = null;
    this.resize = null;
    this.intersecting = false;
    this.gapIntersection = null;
    this.gaps = [];
    this.parentCheck = -1;
    this.dom = view.contentDOM;
    this.observer = new MutationObserver((mutations) => {
      for (let mut of mutations)
        this.queue.push(mut);
      if ((browser.ie && browser.ie_version <= 11 || browser.ios && view.composing) && mutations.some((m) => m.type == "childList" && m.removedNodes.length || m.type == "characterData" && m.oldValue.length > m.target.nodeValue.length))
        this.flushSoon();
      else
        this.flush();
    });
    if (useCharData)
      this.onCharData = (event) => {
        this.queue.push({
          target: event.target,
          type: "characterData",
          oldValue: event.prevValue
        });
        this.flushSoon();
      };
    this.onSelectionChange = this.onSelectionChange.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onPrint = this.onPrint.bind(this);
    this.onScroll = this.onScroll.bind(this);
    if (typeof ResizeObserver == "function") {
      this.resize = new ResizeObserver(() => {
        var _a;
        if (((_a = this.view.docView) === null || _a === void 0 ? void 0 : _a.lastUpdate) < Date.now() - 75)
          this.onResize();
      });
      this.resize.observe(view.scrollDOM);
    }
    this.addWindowListeners(this.win = view.win);
    this.start();
    if (typeof IntersectionObserver == "function") {
      this.intersection = new IntersectionObserver((entries) => {
        if (this.parentCheck < 0)
          this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3);
        if (entries.length > 0 && entries[entries.length - 1].intersectionRatio > 0 != this.intersecting) {
          this.intersecting = !this.intersecting;
          if (this.intersecting != this.view.inView)
            this.onScrollChanged(document.createEvent("Event"));
        }
      }, {});
      this.intersection.observe(this.dom);
      this.gapIntersection = new IntersectionObserver((entries) => {
        if (entries.length > 0 && entries[entries.length - 1].intersectionRatio > 0)
          this.onScrollChanged(document.createEvent("Event"));
      }, {});
    }
    this.listenForScroll();
    this.readSelectionRange();
  }
  onScrollChanged(e) {
    this.view.inputState.runScrollHandlers(this.view, e);
    if (this.intersecting)
      this.view.measure();
  }
  onScroll(e) {
    if (this.intersecting)
      this.flush(false);
    this.onScrollChanged(e);
  }
  onResize() {
    if (this.resizeTimeout < 0)
      this.resizeTimeout = setTimeout(() => {
        this.resizeTimeout = -1;
        this.view.requestMeasure();
      }, 50);
  }
  onPrint() {
    this.view.viewState.printing = true;
    this.view.measure();
    setTimeout(() => {
      this.view.viewState.printing = false;
      this.view.requestMeasure();
    }, 500);
  }
  updateGaps(gaps) {
    if (this.gapIntersection && (gaps.length != this.gaps.length || this.gaps.some((g, i) => g != gaps[i]))) {
      this.gapIntersection.disconnect();
      for (let gap of gaps)
        this.gapIntersection.observe(gap);
      this.gaps = gaps;
    }
  }
  onSelectionChange(event) {
    let wasChanged = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view } = this, sel = this.selectionRange;
    if (view.state.facet(editable) ? view.root.activeElement != this.dom : !hasSelection(view.dom, sel))
      return;
    let context = sel.anchorNode && view.docView.nearest(sel.anchorNode);
    if (context && context.ignoreEvent(event)) {
      if (!wasChanged)
        this.selectionChanged = false;
      return;
    }
    if ((browser.ie && browser.ie_version <= 11 || browser.android && browser.chrome) && !view.state.selection.main.empty && sel.focusNode && isEquivalentPosition(sel.focusNode, sel.focusOffset, sel.anchorNode, sel.anchorOffset))
      this.flushSoon();
    else
      this.flush(false);
  }
  readSelectionRange() {
    let { view } = this;
    let range = browser.safari && view.root.nodeType == 11 && deepActiveElement(this.dom.ownerDocument) == this.dom && safariSelectionRangeHack(this.view) || getSelection(view.root);
    if (!range || this.selectionRange.eq(range))
      return false;
    let local = hasSelection(this.dom, range);
    if (local && !this.selectionChanged && view.inputState.lastFocusTime > Date.now() - 200 && view.inputState.lastTouchTime < Date.now() - 300 && atElementStart(this.dom, range)) {
      this.view.inputState.lastFocusTime = 0;
      view.docView.updateSelection();
      return false;
    }
    this.selectionRange.setRange(range);
    if (local)
      this.selectionChanged = true;
    return true;
  }
  setSelectionRange(anchor, head) {
    this.selectionRange.set(anchor.node, anchor.offset, head.node, head.offset);
    this.selectionChanged = false;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let i = 0, changed = null;
    for (let dom = this.dom; dom; ) {
      if (dom.nodeType == 1) {
        if (!changed && i < this.scrollTargets.length && this.scrollTargets[i] == dom)
          i++;
        else if (!changed)
          changed = this.scrollTargets.slice(0, i);
        if (changed)
          changed.push(dom);
        dom = dom.assignedSlot || dom.parentNode;
      } else if (dom.nodeType == 11) {
        dom = dom.host;
      } else {
        break;
      }
    }
    if (i < this.scrollTargets.length && !changed)
      changed = this.scrollTargets.slice(0, i);
    if (changed) {
      for (let dom of this.scrollTargets)
        dom.removeEventListener("scroll", this.onScroll);
      for (let dom of this.scrollTargets = changed)
        dom.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(f) {
    if (!this.active)
      return f();
    try {
      this.stop();
      return f();
    } finally {
      this.start();
      this.clear();
    }
  }
  start() {
    if (this.active)
      return;
    this.observer.observe(this.dom, observeOptions);
    if (useCharData)
      this.dom.addEventListener("DOMCharacterDataModified", this.onCharData);
    this.active = true;
  }
  stop() {
    if (!this.active)
      return;
    this.active = false;
    this.observer.disconnect();
    if (useCharData)
      this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData);
  }
  clear() {
    this.processRecords();
    this.queue.length = 0;
    this.selectionChanged = false;
  }
  delayAndroidKey(key, keyCode) {
    var _a;
    if (!this.delayedAndroidKey) {
      let flush = () => {
        let key2 = this.delayedAndroidKey;
        if (key2) {
          this.clearDelayedAndroidKey();
          if (!this.flush() && key2.force)
            dispatchKey(this.dom, key2.key, key2.keyCode);
        }
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(flush);
    }
    if (!this.delayedAndroidKey || key == "Enter")
      this.delayedAndroidKey = {
        key,
        keyCode,
        force: this.lastChange < Date.now() - 50 || !!((_a = this.delayedAndroidKey) === null || _a === void 0 ? void 0 : _a.force)
      };
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey);
    this.delayedAndroidKey = null;
    this.flushingAndroidKey = -1;
  }
  flushSoon() {
    if (this.delayedFlush < 0)
      this.delayedFlush = this.view.win.requestAnimationFrame(() => {
        this.delayedFlush = -1;
        this.flush();
      });
  }
  forceFlush() {
    if (this.delayedFlush >= 0) {
      this.view.win.cancelAnimationFrame(this.delayedFlush);
      this.delayedFlush = -1;
    }
    this.flush();
  }
  processRecords() {
    let records = this.queue;
    for (let mut of this.observer.takeRecords())
      records.push(mut);
    if (records.length)
      this.queue = [];
    let from = -1, to = -1, typeOver = false;
    for (let record of records) {
      let range = this.readMutation(record);
      if (!range)
        continue;
      if (range.typeOver)
        typeOver = true;
      if (from == -1) {
        ({ from, to } = range);
      } else {
        from = Math.min(range.from, from);
        to = Math.max(range.to, to);
      }
    }
    return { from, to, typeOver };
  }
  readChange() {
    let { from, to, typeOver } = this.processRecords();
    let newSel = this.selectionChanged && hasSelection(this.dom, this.selectionRange);
    if (from < 0 && !newSel)
      return null;
    if (from > -1)
      this.lastChange = Date.now();
    this.view.inputState.lastFocusTime = 0;
    this.selectionChanged = false;
    return new DOMChange(this.view, from, to, typeOver);
  }
  flush(readSelection = true) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return false;
    if (readSelection)
      this.readSelectionRange();
    let domChange = this.readChange();
    if (!domChange)
      return false;
    let startState = this.view.state;
    let handled = applyDOMChange(this.view, domChange);
    if (this.view.state == startState)
      this.view.update([]);
    return handled;
  }
  readMutation(rec) {
    let cView = this.view.docView.nearest(rec.target);
    if (!cView || cView.ignoreMutation(rec))
      return null;
    cView.markDirty(rec.type == "attributes");
    if (rec.type == "attributes")
      cView.dirty |= 4;
    if (rec.type == "childList") {
      let childBefore = findChild(cView, rec.previousSibling || rec.target.previousSibling, -1);
      let childAfter = findChild(cView, rec.nextSibling || rec.target.nextSibling, 1);
      return {
        from: childBefore ? cView.posAfter(childBefore) : cView.posAtStart,
        to: childAfter ? cView.posBefore(childAfter) : cView.posAtEnd,
        typeOver: false
      };
    } else if (rec.type == "characterData") {
      return { from: cView.posAtStart, to: cView.posAtEnd, typeOver: rec.target.nodeValue == rec.oldValue };
    } else {
      return null;
    }
  }
  setWindow(win) {
    if (win != this.win) {
      this.removeWindowListeners(this.win);
      this.win = win;
      this.addWindowListeners(this.win);
    }
  }
  addWindowListeners(win) {
    win.addEventListener("resize", this.onResize);
    win.addEventListener("beforeprint", this.onPrint);
    win.addEventListener("scroll", this.onScroll);
    win.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(win) {
    win.removeEventListener("scroll", this.onScroll);
    win.removeEventListener("resize", this.onResize);
    win.removeEventListener("beforeprint", this.onPrint);
    win.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  destroy() {
    var _a, _b, _c;
    this.stop();
    (_a = this.intersection) === null || _a === void 0 ? void 0 : _a.disconnect();
    (_b = this.gapIntersection) === null || _b === void 0 ? void 0 : _b.disconnect();
    (_c = this.resize) === null || _c === void 0 ? void 0 : _c.disconnect();
    for (let dom of this.scrollTargets)
      dom.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win);
    clearTimeout(this.parentCheck);
    clearTimeout(this.resizeTimeout);
    this.win.cancelAnimationFrame(this.delayedFlush);
    this.win.cancelAnimationFrame(this.flushingAndroidKey);
  }
}
function findChild(cView, dom, dir) {
  while (dom) {
    let curView = ContentView.get(dom);
    if (curView && curView.parent == cView)
      return curView;
    let parent = dom.parentNode;
    dom = parent != cView.dom ? parent : dir > 0 ? dom.nextSibling : dom.previousSibling;
  }
  return null;
}
function safariSelectionRangeHack(view) {
  let found = null;
  function read(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    found = event.getTargetRanges()[0];
  }
  view.contentDOM.addEventListener("beforeinput", read, true);
  view.dom.ownerDocument.execCommand("indent");
  view.contentDOM.removeEventListener("beforeinput", read, true);
  if (!found)
    return null;
  let anchorNode = found.startContainer, anchorOffset = found.startOffset;
  let focusNode = found.endContainer, focusOffset = found.endOffset;
  let curAnchor = view.docView.domAtPos(view.state.selection.main.anchor);
  if (isEquivalentPosition(curAnchor.node, curAnchor.offset, focusNode, focusOffset))
    [anchorNode, anchorOffset, focusNode, focusOffset] = [focusNode, focusOffset, anchorNode, anchorOffset];
  return { anchorNode, anchorOffset, focusNode, focusOffset };
}
class EditorView {
  constructor(config = {}) {
    this.plugins = [];
    this.pluginMap = /* @__PURE__ */ new Map();
    this.editorAttrs = {};
    this.contentAttrs = {};
    this.bidiCache = [];
    this.destroyed = false;
    this.updateState = 2;
    this.measureScheduled = -1;
    this.measureRequests = [];
    this.contentDOM = document.createElement("div");
    this.scrollDOM = document.createElement("div");
    this.scrollDOM.tabIndex = -1;
    this.scrollDOM.className = "cm-scroller";
    this.scrollDOM.appendChild(this.contentDOM);
    this.announceDOM = document.createElement("div");
    this.announceDOM.style.cssText = "position: absolute; top: -10000px";
    this.announceDOM.setAttribute("aria-live", "polite");
    this.dom = document.createElement("div");
    this.dom.appendChild(this.announceDOM);
    this.dom.appendChild(this.scrollDOM);
    this._dispatch = config.dispatch || ((tr) => this.update([tr]));
    this.dispatch = this.dispatch.bind(this);
    this._root = config.root || getRoot(config.parent) || document;
    this.viewState = new ViewState(config.state || EditorState.create(config));
    this.plugins = this.state.facet(viewPlugin).map((spec) => new PluginInstance(spec));
    for (let plugin of this.plugins)
      plugin.update(this);
    this.observer = new DOMObserver(this);
    this.inputState = new InputState(this);
    this.inputState.ensureHandlers(this, this.plugins);
    this.docView = new DocView(this);
    this.mountStyles();
    this.updateAttrs();
    this.updateState = 0;
    this.requestMeasure();
    if (config.parent)
      config.parent.appendChild(this.dom);
  }
  get state() {
    return this.viewState.state;
  }
  get viewport() {
    return this.viewState.viewport;
  }
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  get inView() {
    return this.viewState.inView;
  }
  get composing() {
    return this.inputState.composing > 0;
  }
  get compositionStarted() {
    return this.inputState.composing >= 0;
  }
  get root() {
    return this._root;
  }
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  dispatch(...input) {
    this._dispatch(input.length == 1 && input[0] instanceof Transaction ? input[0] : this.state.update(...input));
  }
  update(transactions) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let redrawn = false, attrsChanged = false, update;
    let state = this.state;
    for (let tr of transactions) {
      if (tr.startState != state)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      state = tr.state;
    }
    if (this.destroyed) {
      this.viewState.state = state;
      return;
    }
    let pendingKey = this.observer.delayedAndroidKey, domChange = null;
    if (pendingKey) {
      this.observer.clearDelayedAndroidKey();
      domChange = this.observer.readChange();
      if (domChange && !this.state.doc.eq(state.doc) || !this.state.selection.eq(state.selection))
        domChange = null;
    } else {
      this.observer.clear();
    }
    if (state.facet(EditorState.phrases) != this.state.facet(EditorState.phrases))
      return this.setState(state);
    update = ViewUpdate.create(this, state, transactions);
    let scrollTarget = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let tr of transactions) {
        if (scrollTarget)
          scrollTarget = scrollTarget.map(tr.changes);
        if (tr.scrollIntoView) {
          let { main } = tr.state.selection;
          scrollTarget = new ScrollTarget(main.empty ? main : EditorSelection.cursor(main.head, main.head > main.anchor ? -1 : 1));
        }
        for (let e of tr.effects)
          if (e.is(scrollIntoView))
            scrollTarget = e.value;
      }
      this.viewState.update(update, scrollTarget);
      this.bidiCache = CachedOrder.update(this.bidiCache, update.changes);
      if (!update.empty) {
        this.updatePlugins(update);
        this.inputState.update(update);
      }
      redrawn = this.docView.update(update);
      if (this.state.facet(styleModule) != this.styleModules)
        this.mountStyles();
      attrsChanged = this.updateAttrs();
      this.showAnnouncements(transactions);
      this.docView.updateSelection(redrawn, transactions.some((tr) => tr.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (update.startState.facet(theme) != update.state.facet(theme))
      this.viewState.mustMeasureContent = true;
    if (redrawn || attrsChanged || scrollTarget || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent)
      this.requestMeasure();
    if (!update.empty)
      for (let listener of this.state.facet(updateListener))
        listener(update);
    if (domChange) {
      if (!applyDOMChange(this, domChange) && pendingKey.force)
        dispatchKey(this.contentDOM, pendingKey.key, pendingKey.keyCode);
    }
  }
  setState(newState) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = newState;
      return;
    }
    this.updateState = 2;
    let hadFocus = this.hasFocus;
    try {
      for (let plugin of this.plugins)
        plugin.destroy(this);
      this.viewState = new ViewState(newState);
      this.plugins = newState.facet(viewPlugin).map((spec) => new PluginInstance(spec));
      this.pluginMap.clear();
      for (let plugin of this.plugins)
        plugin.update(this);
      this.docView = new DocView(this);
      this.inputState.ensureHandlers(this, this.plugins);
      this.mountStyles();
      this.updateAttrs();
      this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    if (hadFocus)
      this.focus();
    this.requestMeasure();
  }
  updatePlugins(update) {
    let prevSpecs = update.startState.facet(viewPlugin), specs = update.state.facet(viewPlugin);
    if (prevSpecs != specs) {
      let newPlugins = [];
      for (let spec of specs) {
        let found = prevSpecs.indexOf(spec);
        if (found < 0) {
          newPlugins.push(new PluginInstance(spec));
        } else {
          let plugin = this.plugins[found];
          plugin.mustUpdate = update;
          newPlugins.push(plugin);
        }
      }
      for (let plugin of this.plugins)
        if (plugin.mustUpdate != update)
          plugin.destroy(this);
      this.plugins = newPlugins;
      this.pluginMap.clear();
      this.inputState.ensureHandlers(this, this.plugins);
    } else {
      for (let p of this.plugins)
        p.mustUpdate = update;
    }
    for (let i = 0; i < this.plugins.length; i++)
      this.plugins[i].update(this);
  }
  measure(flush = true) {
    if (this.destroyed)
      return;
    if (this.measureScheduled > -1)
      cancelAnimationFrame(this.measureScheduled);
    this.measureScheduled = 0;
    if (flush)
      this.observer.forceFlush();
    let updated = null;
    let { scrollHeight, scrollTop, clientHeight } = this.scrollDOM;
    let refHeight = scrollTop > scrollHeight - clientHeight - 4 ? scrollHeight : scrollTop;
    try {
      for (let i = 0; ; i++) {
        this.updateState = 1;
        let oldViewport = this.viewport;
        let refBlock = this.viewState.lineBlockAtHeight(refHeight);
        let changed = this.viewState.measure(this);
        if (!changed && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (i > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let measuring = [];
        if (!(changed & 4))
          [this.measureRequests, measuring] = [measuring, this.measureRequests];
        let measured = measuring.map((m) => {
          try {
            return m.read(this);
          } catch (e) {
            logException(this.state, e);
            return BadMeasure;
          }
        });
        let update = ViewUpdate.create(this, this.state, []), redrawn = false, scrolled = false;
        update.flags |= changed;
        if (!updated)
          updated = update;
        else
          updated.flags |= changed;
        this.updateState = 2;
        if (!update.empty) {
          this.updatePlugins(update);
          this.inputState.update(update);
          this.updateAttrs();
          redrawn = this.docView.update(update);
        }
        for (let i2 = 0; i2 < measuring.length; i2++)
          if (measured[i2] != BadMeasure) {
            try {
              let m = measuring[i2];
              if (m.write)
                m.write(measured[i2], this);
            } catch (e) {
              logException(this.state, e);
            }
          }
        if (this.viewState.editorHeight) {
          if (this.viewState.scrollTarget) {
            this.docView.scrollIntoView(this.viewState.scrollTarget);
            this.viewState.scrollTarget = null;
            scrolled = true;
          } else {
            let diff = this.viewState.lineBlockAt(refBlock.from).top - refBlock.top;
            if (diff > 1 || diff < -1) {
              this.scrollDOM.scrollTop += diff;
              scrolled = true;
            }
          }
        }
        if (redrawn)
          this.docView.updateSelection(true);
        if (this.viewport.from == oldViewport.from && this.viewport.to == oldViewport.to && !scrolled && this.measureRequests.length == 0)
          break;
      }
    } finally {
      this.updateState = 0;
      this.measureScheduled = -1;
    }
    if (updated && !updated.empty)
      for (let listener of this.state.facet(updateListener))
        listener(updated);
  }
  get themeClasses() {
    return baseThemeID + " " + (this.state.facet(darkTheme) ? baseDarkID : baseLightID) + " " + this.state.facet(theme);
  }
  updateAttrs() {
    let editorAttrs = attrsFromFacet(this, editorAttributes, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    });
    let contentAttrs = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      translate: "no",
      contenteditable: !this.state.facet(editable) ? "false" : "true",
      class: "cm-content",
      style: `${browser.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    if (this.state.readOnly)
      contentAttrs["aria-readonly"] = "true";
    attrsFromFacet(this, contentAttributes, contentAttrs);
    let changed = this.observer.ignore(() => {
      let changedContent = updateAttrs(this.contentDOM, this.contentAttrs, contentAttrs);
      let changedEditor = updateAttrs(this.dom, this.editorAttrs, editorAttrs);
      return changedContent || changedEditor;
    });
    this.editorAttrs = editorAttrs;
    this.contentAttrs = contentAttrs;
    return changed;
  }
  showAnnouncements(trs) {
    let first = true;
    for (let tr of trs)
      for (let effect of tr.effects)
        if (effect.is(EditorView.announce)) {
          if (first)
            this.announceDOM.textContent = "";
          first = false;
          let div = this.announceDOM.appendChild(document.createElement("div"));
          div.textContent = effect.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(styleModule);
    StyleModule.mount(this.root, this.styleModules.concat(baseTheme$1).reverse());
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    if (this.updateState == 0 && this.measureScheduled > -1)
      this.measure(false);
  }
  requestMeasure(request) {
    if (this.measureScheduled < 0)
      this.measureScheduled = this.win.requestAnimationFrame(() => this.measure());
    if (request) {
      if (request.key != null)
        for (let i = 0; i < this.measureRequests.length; i++) {
          if (this.measureRequests[i].key === request.key) {
            this.measureRequests[i] = request;
            return;
          }
        }
      this.measureRequests.push(request);
    }
  }
  plugin(plugin) {
    let known = this.pluginMap.get(plugin);
    if (known === void 0 || known && known.spec != plugin)
      this.pluginMap.set(plugin, known = this.plugins.find((p) => p.spec == plugin) || null);
    return known && known.update(this).value;
  }
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  elementAtHeight(height) {
    this.readMeasured();
    return this.viewState.elementAtHeight(height);
  }
  lineBlockAtHeight(height) {
    this.readMeasured();
    return this.viewState.lineBlockAtHeight(height);
  }
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  lineBlockAt(pos) {
    return this.viewState.lineBlockAt(pos);
  }
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  moveByChar(start, forward, by) {
    return skipAtoms(this, start, moveByChar(this, start, forward, by));
  }
  moveByGroup(start, forward) {
    return skipAtoms(this, start, moveByChar(this, start, forward, (initial) => byGroup(this, start.head, initial)));
  }
  moveToLineBoundary(start, forward, includeWrap = true) {
    return moveToLineBoundary(this, start, forward, includeWrap);
  }
  moveVertically(start, forward, distance) {
    return skipAtoms(this, start, moveVertically(this, start, forward, distance));
  }
  domAtPos(pos) {
    return this.docView.domAtPos(pos);
  }
  posAtDOM(node, offset = 0) {
    return this.docView.posFromDOM(node, offset);
  }
  posAtCoords(coords, precise = true) {
    this.readMeasured();
    return posAtCoords(this, coords, precise);
  }
  coordsAtPos(pos, side = 1) {
    this.readMeasured();
    let rect = this.docView.coordsAt(pos, side);
    if (!rect || rect.left == rect.right)
      return rect;
    let line = this.state.doc.lineAt(pos), order = this.bidiSpans(line);
    let span = order[BidiSpan.find(order, pos - line.from, -1, side)];
    return flattenRect(rect, span.dir == Direction.LTR == side > 0);
  }
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  textDirectionAt(pos) {
    let perLine = this.state.facet(perLineTextDirection);
    if (!perLine || pos < this.viewport.from || pos > this.viewport.to)
      return this.textDirection;
    this.readMeasured();
    return this.docView.textDirectionAt(pos);
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(line) {
    if (line.length > MaxBidiLine)
      return trivialOrder(line.length);
    let dir = this.textDirectionAt(line.from);
    for (let entry of this.bidiCache)
      if (entry.from == line.from && entry.dir == dir)
        return entry.order;
    let order = computeOrder(line.text, dir);
    this.bidiCache.push(new CachedOrder(line.from, line.to, dir, order));
    return order;
  }
  get hasFocus() {
    var _a;
    return (this.dom.ownerDocument.hasFocus() || browser.safari && ((_a = this.inputState) === null || _a === void 0 ? void 0 : _a.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  focus() {
    this.observer.ignore(() => {
      focusPreventScroll(this.contentDOM);
      this.docView.updateSelection();
    });
  }
  setRoot(root) {
    if (this._root != root) {
      this._root = root;
      this.observer.setWindow((root.nodeType == 9 ? root : root.ownerDocument).defaultView || window);
      this.mountStyles();
    }
  }
  destroy() {
    for (let plugin of this.plugins)
      plugin.destroy(this);
    this.plugins = [];
    this.inputState.destroy();
    this.dom.remove();
    this.observer.destroy();
    if (this.measureScheduled > -1)
      cancelAnimationFrame(this.measureScheduled);
    this.destroyed = true;
  }
  static scrollIntoView(pos, options = {}) {
    return scrollIntoView.of(new ScrollTarget(typeof pos == "number" ? EditorSelection.cursor(pos) : pos, options.y, options.x, options.yMargin, options.xMargin));
  }
  static domEventHandlers(handlers2) {
    return ViewPlugin.define(() => ({}), { eventHandlers: handlers2 });
  }
  static theme(spec, options) {
    let prefix = StyleModule.newName();
    let result = [theme.of(prefix), styleModule.of(buildTheme(`.${prefix}`, spec))];
    if (options && options.dark)
      result.push(darkTheme.of(true));
    return result;
  }
  static baseTheme(spec) {
    return Prec.lowest(styleModule.of(buildTheme("." + baseThemeID, spec, lightDarkIDs)));
  }
  static findFromDOM(dom) {
    var _a;
    let content = dom.querySelector(".cm-content");
    let cView = content && ContentView.get(content) || ContentView.get(dom);
    return ((_a = cView === null || cView === void 0 ? void 0 : cView.rootView) === null || _a === void 0 ? void 0 : _a.view) || null;
  }
}
EditorView.styleModule = styleModule;
EditorView.inputHandler = inputHandler;
EditorView.perLineTextDirection = perLineTextDirection;
EditorView.exceptionSink = exceptionSink;
EditorView.updateListener = updateListener;
EditorView.editable = editable;
EditorView.mouseSelectionStyle = mouseSelectionStyle;
EditorView.dragMovesSelection = dragMovesSelection$1;
EditorView.clickAddsSelectionRange = clickAddsSelectionRange;
EditorView.decorations = decorations;
EditorView.atomicRanges = atomicRanges;
EditorView.scrollMargins = scrollMargins;
EditorView.darkTheme = darkTheme;
EditorView.contentAttributes = contentAttributes;
EditorView.editorAttributes = editorAttributes;
EditorView.lineWrapping = /* @__PURE__ */ EditorView.contentAttributes.of({ "class": "cm-lineWrapping" });
EditorView.announce = /* @__PURE__ */ StateEffect.define();
const MaxBidiLine = 4096;
const BadMeasure = {};
class CachedOrder {
  constructor(from, to, dir, order) {
    this.from = from;
    this.to = to;
    this.dir = dir;
    this.order = order;
  }
  static update(cache, changes) {
    if (changes.empty)
      return cache;
    let result = [], lastDir = cache.length ? cache[cache.length - 1].dir : Direction.LTR;
    for (let i = Math.max(0, cache.length - 10); i < cache.length; i++) {
      let entry = cache[i];
      if (entry.dir == lastDir && !changes.touchesRange(entry.from, entry.to))
        result.push(new CachedOrder(changes.mapPos(entry.from, 1), changes.mapPos(entry.to, -1), entry.dir, entry.order));
    }
    return result;
  }
}
function attrsFromFacet(view, facet, base2) {
  for (let sources = view.state.facet(facet), i = sources.length - 1; i >= 0; i--) {
    let source = sources[i], value = typeof source == "function" ? source(view) : source;
    if (value)
      combineAttrs(value, base2);
  }
  return base2;
}
const currentPlatform = browser.mac ? "mac" : browser.windows ? "win" : browser.linux ? "linux" : "key";
function normalizeKeyName(name, platform) {
  const parts = name.split(/-(?!$)/);
  let result = parts[parts.length - 1];
  if (result == "Space")
    result = " ";
  let alt, ctrl, shift2, meta;
  for (let i = 0; i < parts.length - 1; ++i) {
    const mod = parts[i];
    if (/^(cmd|meta|m)$/i.test(mod))
      meta = true;
    else if (/^a(lt)?$/i.test(mod))
      alt = true;
    else if (/^(c|ctrl|control)$/i.test(mod))
      ctrl = true;
    else if (/^s(hift)?$/i.test(mod))
      shift2 = true;
    else if (/^mod$/i.test(mod)) {
      if (platform == "mac")
        meta = true;
      else
        ctrl = true;
    } else
      throw new Error("Unrecognized modifier name: " + mod);
  }
  if (alt)
    result = "Alt-" + result;
  if (ctrl)
    result = "Ctrl-" + result;
  if (meta)
    result = "Meta-" + result;
  if (shift2)
    result = "Shift-" + result;
  return result;
}
function modifiers(name, event, shift2) {
  if (event.altKey)
    name = "Alt-" + name;
  if (event.ctrlKey)
    name = "Ctrl-" + name;
  if (event.metaKey)
    name = "Meta-" + name;
  if (shift2 !== false && event.shiftKey)
    name = "Shift-" + name;
  return name;
}
const handleKeyEvents = /* @__PURE__ */ Prec.default(/* @__PURE__ */ EditorView.domEventHandlers({
  keydown(event, view) {
    return runHandlers(getKeymap(view.state), event, view, "editor");
  }
}));
const keymap = /* @__PURE__ */ Facet.define({ enables: handleKeyEvents });
const Keymaps = /* @__PURE__ */ new WeakMap();
function getKeymap(state) {
  let bindings = state.facet(keymap);
  let map = Keymaps.get(bindings);
  if (!map)
    Keymaps.set(bindings, map = buildKeymap(bindings.reduce((a, b) => a.concat(b), [])));
  return map;
}
let storedPrefix = null;
const PrefixTimeout = 4e3;
function buildKeymap(bindings, platform = currentPlatform) {
  let bound = /* @__PURE__ */ Object.create(null);
  let isPrefix = /* @__PURE__ */ Object.create(null);
  let checkPrefix = (name, is) => {
    let current = isPrefix[name];
    if (current == null)
      isPrefix[name] = is;
    else if (current != is)
      throw new Error("Key binding " + name + " is used both as a regular binding and as a multi-stroke prefix");
  };
  let add = (scope, key, command, preventDefault) => {
    var _a, _b;
    let scopeObj = bound[scope] || (bound[scope] = /* @__PURE__ */ Object.create(null));
    let parts = key.split(/ (?!$)/).map((k) => normalizeKeyName(k, platform));
    for (let i = 1; i < parts.length; i++) {
      let prefix = parts.slice(0, i).join(" ");
      checkPrefix(prefix, true);
      if (!scopeObj[prefix])
        scopeObj[prefix] = {
          preventDefault: true,
          run: [(view) => {
            let ourObj = storedPrefix = { view, prefix, scope };
            setTimeout(() => {
              if (storedPrefix == ourObj)
                storedPrefix = null;
            }, PrefixTimeout);
            return true;
          }]
        };
    }
    let full = parts.join(" ");
    checkPrefix(full, false);
    let binding = scopeObj[full] || (scopeObj[full] = { preventDefault: false, run: ((_b = (_a = scopeObj._any) === null || _a === void 0 ? void 0 : _a.run) === null || _b === void 0 ? void 0 : _b.slice()) || [] });
    if (command)
      binding.run.push(command);
    if (preventDefault)
      binding.preventDefault = true;
  };
  for (let b of bindings) {
    let scopes = b.scope ? b.scope.split(" ") : ["editor"];
    if (b.any)
      for (let scope of scopes) {
        let scopeObj = bound[scope] || (bound[scope] = /* @__PURE__ */ Object.create(null));
        if (!scopeObj._any)
          scopeObj._any = { preventDefault: false, run: [] };
        for (let key in scopeObj)
          scopeObj[key].run.push(b.any);
      }
    let name = b[platform] || b.key;
    if (!name)
      continue;
    for (let scope of scopes) {
      add(scope, name, b.run, b.preventDefault);
      if (b.shift)
        add(scope, "Shift-" + name, b.shift, b.preventDefault);
    }
  }
  return bound;
}
function runHandlers(map, event, view, scope) {
  let name = keyName(event);
  let charCode = codePointAt(name, 0), isChar = codePointSize(charCode) == name.length && name != " ";
  let prefix = "", fallthrough = false;
  if (storedPrefix && storedPrefix.view == view && storedPrefix.scope == scope) {
    prefix = storedPrefix.prefix + " ";
    if (fallthrough = modifierCodes.indexOf(event.keyCode) < 0)
      storedPrefix = null;
  }
  let ran = /* @__PURE__ */ new Set();
  let runFor = (binding) => {
    if (binding) {
      for (let cmd of binding.run)
        if (!ran.has(cmd)) {
          ran.add(cmd);
          if (cmd(view, event))
            return true;
        }
      if (binding.preventDefault)
        fallthrough = true;
    }
    return false;
  };
  let scopeObj = map[scope], baseName, shiftName;
  if (scopeObj) {
    if (runFor(scopeObj[prefix + modifiers(name, event, !isChar)]))
      return true;
    if (isChar && (event.altKey || event.metaKey || event.ctrlKey) && (baseName = base[event.keyCode]) && baseName != name) {
      if (runFor(scopeObj[prefix + modifiers(baseName, event, true)]))
        return true;
      else if (event.shiftKey && (shiftName = shift[event.keyCode]) != name && shiftName != baseName && runFor(scopeObj[prefix + modifiers(shiftName, event, false)]))
        return true;
    } else if (isChar && event.shiftKey) {
      if (runFor(scopeObj[prefix + modifiers(name, event, true)]))
        return true;
    }
    if (runFor(scopeObj._any))
      return true;
  }
  return fallthrough;
}
const CanHidePrimary = !browser.ios;
const themeSpec = {
  ".cm-line": {
    "& ::selection": { backgroundColor: "transparent !important" },
    "&::selection": { backgroundColor: "transparent !important" }
  }
};
if (CanHidePrimary)
  themeSpec[".cm-line"].caretColor = "transparent !important";
const Outside = "-10000px";
class TooltipViewManager {
  constructor(view, facet, createTooltipView) {
    this.facet = facet;
    this.createTooltipView = createTooltipView;
    this.input = view.state.facet(facet);
    this.tooltips = this.input.filter((t) => t);
    this.tooltipViews = this.tooltips.map(createTooltipView);
  }
  update(update) {
    var _a;
    let input = update.state.facet(this.facet);
    let tooltips = input.filter((x) => x);
    if (input === this.input) {
      for (let t of this.tooltipViews)
        if (t.update)
          t.update(update);
      return false;
    }
    let tooltipViews = [];
    for (let i = 0; i < tooltips.length; i++) {
      let tip = tooltips[i], known = -1;
      if (!tip)
        continue;
      for (let i2 = 0; i2 < this.tooltips.length; i2++) {
        let other = this.tooltips[i2];
        if (other && other.create == tip.create)
          known = i2;
      }
      if (known < 0) {
        tooltipViews[i] = this.createTooltipView(tip);
      } else {
        let tooltipView = tooltipViews[i] = this.tooltipViews[known];
        if (tooltipView.update)
          tooltipView.update(update);
      }
    }
    for (let t of this.tooltipViews)
      if (tooltipViews.indexOf(t) < 0) {
        t.dom.remove();
        (_a = t.destroy) === null || _a === void 0 ? void 0 : _a.call(t);
      }
    this.input = input;
    this.tooltips = tooltips;
    this.tooltipViews = tooltipViews;
    return true;
  }
}
function windowSpace(view) {
  let { win } = view;
  return { top: 0, left: 0, bottom: win.innerHeight, right: win.innerWidth };
}
const tooltipConfig = /* @__PURE__ */ Facet.define({
  combine: (values) => {
    var _a, _b, _c;
    return {
      position: browser.ios ? "absolute" : ((_a = values.find((conf) => conf.position)) === null || _a === void 0 ? void 0 : _a.position) || "fixed",
      parent: ((_b = values.find((conf) => conf.parent)) === null || _b === void 0 ? void 0 : _b.parent) || null,
      tooltipSpace: ((_c = values.find((conf) => conf.tooltipSpace)) === null || _c === void 0 ? void 0 : _c.tooltipSpace) || windowSpace
    };
  }
});
const tooltipPlugin = /* @__PURE__ */ ViewPlugin.fromClass(class {
  constructor(view) {
    this.view = view;
    this.inView = true;
    this.lastTransaction = 0;
    this.measureTimeout = -1;
    let config = view.state.facet(tooltipConfig);
    this.position = config.position;
    this.parent = config.parent;
    this.classes = view.themeClasses;
    this.createContainer();
    this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this };
    this.manager = new TooltipViewManager(view, showTooltip, (t) => this.createTooltip(t));
    this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((entries) => {
      if (Date.now() > this.lastTransaction - 50 && entries.length > 0 && entries[entries.length - 1].intersectionRatio < 1)
        this.measureSoon();
    }, { threshold: [1] }) : null;
    this.observeIntersection();
    view.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this));
    this.maybeMeasure();
  }
  createContainer() {
    if (this.parent) {
      this.container = document.createElement("div");
      this.container.style.position = "relative";
      this.container.className = this.view.themeClasses;
      this.parent.appendChild(this.container);
    } else {
      this.container = this.view.dom;
    }
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let tooltip of this.manager.tooltipViews)
        this.intersectionObserver.observe(tooltip.dom);
    }
  }
  measureSoon() {
    if (this.measureTimeout < 0)
      this.measureTimeout = setTimeout(() => {
        this.measureTimeout = -1;
        this.maybeMeasure();
      }, 50);
  }
  update(update) {
    if (update.transactions.length)
      this.lastTransaction = Date.now();
    let updated = this.manager.update(update);
    if (updated)
      this.observeIntersection();
    let shouldMeasure = updated || update.geometryChanged;
    let newConfig = update.state.facet(tooltipConfig);
    if (newConfig.position != this.position) {
      this.position = newConfig.position;
      for (let t of this.manager.tooltipViews)
        t.dom.style.position = this.position;
      shouldMeasure = true;
    }
    if (newConfig.parent != this.parent) {
      if (this.parent)
        this.container.remove();
      this.parent = newConfig.parent;
      this.createContainer();
      for (let t of this.manager.tooltipViews)
        this.container.appendChild(t.dom);
      shouldMeasure = true;
    } else if (this.parent && this.view.themeClasses != this.classes) {
      this.classes = this.container.className = this.view.themeClasses;
    }
    if (shouldMeasure)
      this.maybeMeasure();
  }
  createTooltip(tooltip) {
    let tooltipView = tooltip.create(this.view);
    tooltipView.dom.classList.add("cm-tooltip");
    if (tooltip.arrow && !tooltipView.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let arrow = document.createElement("div");
      arrow.className = "cm-tooltip-arrow";
      tooltipView.dom.appendChild(arrow);
    }
    tooltipView.dom.style.position = this.position;
    tooltipView.dom.style.top = Outside;
    this.container.appendChild(tooltipView.dom);
    if (tooltipView.mount)
      tooltipView.mount(this.view);
    return tooltipView;
  }
  destroy() {
    var _a, _b;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let tooltipView of this.manager.tooltipViews) {
      tooltipView.dom.remove();
      (_a = tooltipView.destroy) === null || _a === void 0 ? void 0 : _a.call(tooltipView);
    }
    (_b = this.intersectionObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
    clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let editor = this.view.dom.getBoundingClientRect();
    return {
      editor,
      parent: this.parent ? this.container.getBoundingClientRect() : editor,
      pos: this.manager.tooltips.map((t, i) => {
        let tv = this.manager.tooltipViews[i];
        return tv.getCoords ? tv.getCoords(t.pos) : this.view.coordsAtPos(t.pos);
      }),
      size: this.manager.tooltipViews.map(({ dom }) => dom.getBoundingClientRect()),
      space: this.view.state.facet(tooltipConfig).tooltipSpace(this.view)
    };
  }
  writeMeasure(measured) {
    let { editor, space } = measured;
    let others = [];
    for (let i = 0; i < this.manager.tooltips.length; i++) {
      let tooltip = this.manager.tooltips[i], tView = this.manager.tooltipViews[i], { dom } = tView;
      let pos = measured.pos[i], size = measured.size[i];
      if (!pos || pos.bottom <= Math.max(editor.top, space.top) || pos.top >= Math.min(editor.bottom, space.bottom) || pos.right < Math.max(editor.left, space.left) - 0.1 || pos.left > Math.min(editor.right, space.right) + 0.1) {
        dom.style.top = Outside;
        continue;
      }
      let arrow = tooltip.arrow ? tView.dom.querySelector(".cm-tooltip-arrow") : null;
      let arrowHeight = arrow ? 7 : 0;
      let width = size.right - size.left, height = size.bottom - size.top;
      let offset = tView.offset || noOffset, ltr = this.view.textDirection == Direction.LTR;
      let left = size.width > space.right - space.left ? ltr ? space.left : space.right - size.width : ltr ? Math.min(pos.left - (arrow ? 14 : 0) + offset.x, space.right - width) : Math.max(space.left, pos.left - width + (arrow ? 14 : 0) - offset.x);
      let above = !!tooltip.above;
      if (!tooltip.strictSide && (above ? pos.top - (size.bottom - size.top) - offset.y < space.top : pos.bottom + (size.bottom - size.top) + offset.y > space.bottom) && above == space.bottom - pos.bottom > pos.top - space.top)
        above = !above;
      let spaceVert = (above ? pos.top - space.top : space.bottom - pos.bottom) - arrowHeight;
      if (spaceVert < height && tView.resize !== false) {
        if (spaceVert < this.view.defaultLineHeight) {
          dom.style.top = Outside;
          continue;
        }
        dom.style.height = (height = spaceVert) + "px";
      } else if (dom.style.height) {
        dom.style.height = "";
      }
      let top2 = above ? pos.top - height - arrowHeight - offset.y : pos.bottom + arrowHeight + offset.y;
      let right = left + width;
      if (tView.overlap !== true) {
        for (let r of others)
          if (r.left < right && r.right > left && r.top < top2 + height && r.bottom > top2)
            top2 = above ? r.top - height - 2 - arrowHeight : r.bottom + arrowHeight + 2;
      }
      if (this.position == "absolute") {
        dom.style.top = top2 - measured.parent.top + "px";
        dom.style.left = left - measured.parent.left + "px";
      } else {
        dom.style.top = top2 + "px";
        dom.style.left = left + "px";
      }
      if (arrow)
        arrow.style.left = `${pos.left + (ltr ? offset.x : -offset.x) - (left + 14 - 7)}px`;
      if (tView.overlap !== true)
        others.push({ left, top: top2, right, bottom: top2 + height });
      dom.classList.toggle("cm-tooltip-above", above);
      dom.classList.toggle("cm-tooltip-below", !above);
      if (tView.positioned)
        tView.positioned(measured.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length) {
      if (this.view.inView)
        this.view.requestMeasure(this.measureReq);
      if (this.inView != this.view.inView) {
        this.inView = this.view.inView;
        if (!this.inView)
          for (let tv of this.manager.tooltipViews)
            tv.dom.style.top = Outside;
      }
    }
  }
}, {
  eventHandlers: {
    scroll() {
      this.maybeMeasure();
    }
  }
});
const baseTheme = /* @__PURE__ */ EditorView.baseTheme({
  ".cm-tooltip": {
    zIndex: 100,
    boxSizing: "border-box"
  },
  "&light .cm-tooltip": {
    border: "1px solid #bbb",
    backgroundColor: "#f5f5f5"
  },
  "&light .cm-tooltip-section:not(:first-child)": {
    borderTop: "1px solid #bbb"
  },
  "&dark .cm-tooltip": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tooltip-arrow": {
    height: `${7}px`,
    width: `${7 * 2}px`,
    position: "absolute",
    zIndex: -1,
    overflow: "hidden",
    "&:before, &:after": {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderLeft: `${7}px solid transparent`,
      borderRight: `${7}px solid transparent`
    },
    ".cm-tooltip-above &": {
      bottom: `-${7}px`,
      "&:before": {
        borderTop: `${7}px solid #bbb`
      },
      "&:after": {
        borderTop: `${7}px solid #f5f5f5`,
        bottom: "1px"
      }
    },
    ".cm-tooltip-below &": {
      top: `-${7}px`,
      "&:before": {
        borderBottom: `${7}px solid #bbb`
      },
      "&:after": {
        borderBottom: `${7}px solid #f5f5f5`,
        top: "1px"
      }
    }
  },
  "&dark .cm-tooltip .cm-tooltip-arrow": {
    "&:before": {
      borderTopColor: "#333338",
      borderBottomColor: "#333338"
    },
    "&:after": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent"
    }
  }
});
const noOffset = { x: 0, y: 0 };
const showTooltip = /* @__PURE__ */ Facet.define({
  enables: [tooltipPlugin, baseTheme]
});
function getTooltip(view, tooltip) {
  let plugin = view.plugin(tooltipPlugin);
  if (!plugin)
    return null;
  let found = plugin.manager.tooltips.indexOf(tooltip);
  return found < 0 ? null : plugin.manager.tooltipViews[found];
}
const panelConfig = /* @__PURE__ */ Facet.define({
  combine(configs) {
    let topContainer, bottomContainer;
    for (let c of configs) {
      topContainer = topContainer || c.topContainer;
      bottomContainer = bottomContainer || c.bottomContainer;
    }
    return { topContainer, bottomContainer };
  }
});
const panelPlugin = /* @__PURE__ */ ViewPlugin.fromClass(class {
  constructor(view) {
    this.input = view.state.facet(showPanel);
    this.specs = this.input.filter((s) => s);
    this.panels = this.specs.map((spec) => spec(view));
    let conf = view.state.facet(panelConfig);
    this.top = new PanelGroup(view, true, conf.topContainer);
    this.bottom = new PanelGroup(view, false, conf.bottomContainer);
    this.top.sync(this.panels.filter((p) => p.top));
    this.bottom.sync(this.panels.filter((p) => !p.top));
    for (let p of this.panels) {
      p.dom.classList.add("cm-panel");
      if (p.mount)
        p.mount();
    }
  }
  update(update) {
    let conf = update.state.facet(panelConfig);
    if (this.top.container != conf.topContainer) {
      this.top.sync([]);
      this.top = new PanelGroup(update.view, true, conf.topContainer);
    }
    if (this.bottom.container != conf.bottomContainer) {
      this.bottom.sync([]);
      this.bottom = new PanelGroup(update.view, false, conf.bottomContainer);
    }
    this.top.syncClasses();
    this.bottom.syncClasses();
    let input = update.state.facet(showPanel);
    if (input != this.input) {
      let specs = input.filter((x) => x);
      let panels = [], top2 = [], bottom = [], mount = [];
      for (let spec of specs) {
        let known = this.specs.indexOf(spec), panel;
        if (known < 0) {
          panel = spec(update.view);
          mount.push(panel);
        } else {
          panel = this.panels[known];
          if (panel.update)
            panel.update(update);
        }
        panels.push(panel);
        (panel.top ? top2 : bottom).push(panel);
      }
      this.specs = specs;
      this.panels = panels;
      this.top.sync(top2);
      this.bottom.sync(bottom);
      for (let p of mount) {
        p.dom.classList.add("cm-panel");
        if (p.mount)
          p.mount();
      }
    } else {
      for (let p of this.panels)
        if (p.update)
          p.update(update);
    }
  }
  destroy() {
    this.top.sync([]);
    this.bottom.sync([]);
  }
}, {
  provide: (plugin) => EditorView.scrollMargins.of((view) => {
    let value = view.plugin(plugin);
    return value && { top: value.top.scrollMargin(), bottom: value.bottom.scrollMargin() };
  })
});
class PanelGroup {
  constructor(view, top2, container) {
    this.view = view;
    this.top = top2;
    this.container = container;
    this.dom = void 0;
    this.classes = "";
    this.panels = [];
    this.syncClasses();
  }
  sync(panels) {
    for (let p of this.panels)
      if (p.destroy && panels.indexOf(p) < 0)
        p.destroy();
    this.panels = panels;
    this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      if (this.dom) {
        this.dom.remove();
        this.dom = void 0;
      }
      return;
    }
    if (!this.dom) {
      this.dom = document.createElement("div");
      this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom";
      this.dom.style[this.top ? "top" : "bottom"] = "0";
      let parent = this.container || this.view.dom;
      parent.insertBefore(this.dom, this.top ? parent.firstChild : null);
    }
    let curDOM = this.dom.firstChild;
    for (let panel of this.panels) {
      if (panel.dom.parentNode == this.dom) {
        while (curDOM != panel.dom)
          curDOM = rm(curDOM);
        curDOM = curDOM.nextSibling;
      } else {
        this.dom.insertBefore(panel.dom, curDOM);
      }
    }
    while (curDOM)
      curDOM = rm(curDOM);
  }
  scrollMargin() {
    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
  }
  syncClasses() {
    if (!this.container || this.classes == this.view.themeClasses)
      return;
    for (let cls of this.classes.split(" "))
      if (cls)
        this.container.classList.remove(cls);
    for (let cls of (this.classes = this.view.themeClasses).split(" "))
      if (cls)
        this.container.classList.add(cls);
  }
}
function rm(node) {
  let next = node.nextSibling;
  node.remove();
  return next;
}
const showPanel = /* @__PURE__ */ Facet.define({
  enables: panelPlugin
});
class GutterMarker extends RangeValue {
  compare(other) {
    return this == other || this.constructor == other.constructor && this.eq(other);
  }
  eq(other) {
    return false;
  }
  destroy(dom) {
  }
}
GutterMarker.prototype.elementClass = "";
GutterMarker.prototype.toDOM = void 0;
GutterMarker.prototype.mapMode = MapMode.TrackBefore;
GutterMarker.prototype.startSide = GutterMarker.prototype.endSide = -1;
GutterMarker.prototype.point = true;
export {
  Decoration as D,
  EditorView as E,
  StyleModule as S,
  ViewPlugin as V,
  WidgetType as W,
  Direction as a,
  showPanel as b,
  getTooltip as g,
  keymap as k,
  logException as l,
  showTooltip as s
};
//# sourceMappingURL=index-f4eaee3d.js.map
