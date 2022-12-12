import { _ as __vitePreload } from "./preload-helper-5f15640e.js";
import { a as RangeSetBuilder, T as Transaction, b as SelectionRange, E as EditorSelection, c as EditorState, C as Compartment } from "./index-73136136.js";
import { markdown, markdownLanguage } from "./index-a4bbc573.js";
import { L as LanguageDescription, b as LanguageSupport, S as StreamLanguage, a as syntaxTree, s as syntaxHighlighting, H as HighlightStyle, t as tags } from "./index-9e94dbc0.js";
import { D as Decoration, V as ViewPlugin, k as keymap, E as EditorView } from "./index-f4eaee3d.js";
import { i as indentMore, a as indentLess, h as history, d as defaultKeymap, b as historyKeymap } from "./index-7d350bb1.js";
const sharedConfig = {};
function setHydrateContext(context) {
  sharedConfig.context = context;
}
function nextHydrateContext() {
  return {
    ...sharedConfig.context,
    id: `${sharedConfig.context.id}${sharedConfig.context.count++}-`,
    count: 0
  };
}
const equalFn = (a, b) => a === b;
const $TRACK = Symbol("solid-track");
const signalOptions = {
  equals: equalFn
};
let runEffects = runQueue;
const STALE = 1;
const PENDING = 2;
const UNOWNED = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var Owner = null;
let Transition = null;
let Listener = null;
let Updates = null;
let Effects = null;
let ExecCount = 0;
function createRoot(fn, detachedOwner) {
  const listener = Listener, owner = Owner, unowned = fn.length === 0, root = unowned && true ? UNOWNED : {
    owned: null,
    cleanups: null,
    context: null,
    owner: detachedOwner || owner
  }, updateFn = unowned ? fn : () => fn(() => untrack(() => cleanNode(root)));
  Owner = root;
  Listener = null;
  try {
    return runUpdates(updateFn, true);
  } finally {
    Listener = listener;
    Owner = owner;
  }
}
function createSignal(value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const s = {
    value,
    observers: null,
    observerSlots: null,
    comparator: options.equals || void 0
  };
  const setter = (value2) => {
    if (typeof value2 === "function") {
      value2 = value2(s.value);
    }
    return writeSignal(s, value2);
  };
  return [readSignal.bind(s), setter];
}
function createRenderEffect(fn, value, options) {
  const c = createComputation(fn, value, false, STALE);
  updateComputation(c);
}
function createEffect(fn, value, options) {
  runEffects = runUserEffects;
  const c = createComputation(fn, value, false, STALE);
  c.user = true;
  Effects ? Effects.push(c) : updateComputation(c);
}
function createMemo(fn, value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const c = createComputation(fn, value, true, 0);
  c.observers = null;
  c.observerSlots = null;
  c.comparator = options.equals || void 0;
  updateComputation(c);
  return readSignal.bind(c);
}
function untrack(fn) {
  const listener = Listener;
  Listener = null;
  try {
    return fn();
  } finally {
    Listener = listener;
  }
}
function onMount(fn) {
  createEffect(() => untrack(fn));
}
function onCleanup(fn) {
  if (Owner === null)
    ;
  else if (Owner.cleanups === null)
    Owner.cleanups = [fn];
  else
    Owner.cleanups.push(fn);
  return fn;
}
function createContext(defaultValue, options) {
  const id = Symbol("context");
  return {
    id,
    Provider: createProvider(id),
    defaultValue
  };
}
function useContext(context) {
  let ctx;
  return (ctx = lookup(Owner, context.id)) !== void 0 ? ctx : context.defaultValue;
}
function children(fn) {
  const children2 = createMemo(fn);
  const memo = createMemo(() => resolveChildren(children2()));
  memo.toArray = () => {
    const c = memo();
    return Array.isArray(c) ? c : c != null ? [c] : [];
  };
  return memo;
}
function readSignal() {
  const runningTransition = Transition;
  if (this.sources && (this.state || runningTransition)) {
    if (this.state === STALE || runningTransition)
      updateComputation(this);
    else {
      const updates = Updates;
      Updates = null;
      runUpdates(() => lookUpstream(this), false);
      Updates = updates;
    }
  }
  if (Listener) {
    const sSlot = this.observers ? this.observers.length : 0;
    if (!Listener.sources) {
      Listener.sources = [this];
      Listener.sourceSlots = [sSlot];
    } else {
      Listener.sources.push(this);
      Listener.sourceSlots.push(sSlot);
    }
    if (!this.observers) {
      this.observers = [Listener];
      this.observerSlots = [Listener.sources.length - 1];
    } else {
      this.observers.push(Listener);
      this.observerSlots.push(Listener.sources.length - 1);
    }
  }
  return this.value;
}
function writeSignal(node, value, isComp) {
  let current = node.value;
  if (!node.comparator || !node.comparator(current, value)) {
    node.value = value;
    if (node.observers && node.observers.length) {
      runUpdates(() => {
        for (let i = 0; i < node.observers.length; i += 1) {
          const o = node.observers[i];
          const TransitionRunning = Transition && Transition.running;
          if (TransitionRunning && Transition.disposed.has(o))
            ;
          if (TransitionRunning && !o.tState || !TransitionRunning && !o.state) {
            if (o.pure)
              Updates.push(o);
            else
              Effects.push(o);
            if (o.observers)
              markDownstream(o);
          }
          if (TransitionRunning)
            ;
          else
            o.state = STALE;
        }
        if (Updates.length > 1e6) {
          Updates = [];
          if (false)
            ;
          throw new Error();
        }
      }, false);
    }
  }
  return value;
}
function updateComputation(node) {
  if (!node.fn)
    return;
  cleanNode(node);
  const owner = Owner, listener = Listener, time = ExecCount;
  Listener = Owner = node;
  runComputation(node, node.value, time);
  Listener = listener;
  Owner = owner;
}
function runComputation(node, value, time) {
  let nextValue;
  try {
    nextValue = node.fn(value);
  } catch (err) {
    if (node.pure)
      node.state = STALE;
    handleError(err);
  }
  if (!node.updatedAt || node.updatedAt <= time) {
    if (node.updatedAt != null && "observers" in node) {
      writeSignal(node, nextValue);
    } else
      node.value = nextValue;
    node.updatedAt = time;
  }
}
function createComputation(fn, init, pure, state = STALE, options) {
  const c = {
    fn,
    state,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: init,
    owner: Owner,
    context: null,
    pure
  };
  if (Owner === null)
    ;
  else if (Owner !== UNOWNED) {
    {
      if (!Owner.owned)
        Owner.owned = [c];
      else
        Owner.owned.push(c);
    }
  }
  return c;
}
function runTop(node) {
  const runningTransition = Transition;
  if (node.state === 0 || runningTransition)
    return;
  if (node.state === PENDING || runningTransition)
    return lookUpstream(node);
  if (node.suspense && untrack(node.suspense.inFallback))
    return node.suspense.effects.push(node);
  const ancestors = [node];
  while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)) {
    if (node.state || runningTransition)
      ancestors.push(node);
  }
  for (let i = ancestors.length - 1; i >= 0; i--) {
    node = ancestors[i];
    if (node.state === STALE || runningTransition) {
      updateComputation(node);
    } else if (node.state === PENDING || runningTransition) {
      const updates = Updates;
      Updates = null;
      runUpdates(() => lookUpstream(node, ancestors[0]), false);
      Updates = updates;
    }
  }
}
function runUpdates(fn, init) {
  if (Updates)
    return fn();
  let wait = false;
  if (!init)
    Updates = [];
  if (Effects)
    wait = true;
  else
    Effects = [];
  ExecCount++;
  try {
    const res = fn();
    completeUpdates(wait);
    return res;
  } catch (err) {
    if (!Updates)
      Effects = null;
    handleError(err);
  }
}
function completeUpdates(wait) {
  if (Updates) {
    runQueue(Updates);
    Updates = null;
  }
  if (wait)
    return;
  const e = Effects;
  Effects = null;
  if (e.length)
    runUpdates(() => runEffects(e), false);
}
function runQueue(queue) {
  for (let i = 0; i < queue.length; i++)
    runTop(queue[i]);
}
function runUserEffects(queue) {
  let i, userLength = 0;
  for (i = 0; i < queue.length; i++) {
    const e = queue[i];
    if (!e.user)
      runTop(e);
    else
      queue[userLength++] = e;
  }
  if (sharedConfig.context)
    setHydrateContext();
  for (i = 0; i < userLength; i++)
    runTop(queue[i]);
}
function lookUpstream(node, ignore) {
  const runningTransition = Transition;
  node.state = 0;
  for (let i = 0; i < node.sources.length; i += 1) {
    const source = node.sources[i];
    if (source.sources) {
      if (source.state === STALE || runningTransition) {
        if (source !== ignore)
          runTop(source);
      } else if (source.state === PENDING || runningTransition)
        lookUpstream(source, ignore);
    }
  }
}
function markDownstream(node) {
  const runningTransition = Transition;
  for (let i = 0; i < node.observers.length; i += 1) {
    const o = node.observers[i];
    if (!o.state || runningTransition) {
      o.state = PENDING;
      if (o.pure)
        Updates.push(o);
      else
        Effects.push(o);
      o.observers && markDownstream(o);
    }
  }
}
function cleanNode(node) {
  let i;
  if (node.sources) {
    while (node.sources.length) {
      const source = node.sources.pop(), index = node.sourceSlots.pop(), obs = source.observers;
      if (obs && obs.length) {
        const n = obs.pop(), s = source.observerSlots.pop();
        if (index < obs.length) {
          n.sourceSlots[s] = index;
          obs[index] = n;
          source.observerSlots[index] = s;
        }
      }
    }
  }
  if (node.owned) {
    for (i = 0; i < node.owned.length; i++)
      cleanNode(node.owned[i]);
    node.owned = null;
  }
  if (node.cleanups) {
    for (i = 0; i < node.cleanups.length; i++)
      node.cleanups[i]();
    node.cleanups = null;
  }
  node.state = 0;
  node.context = null;
}
function castError(err) {
  if (err instanceof Error || typeof err === "string")
    return err;
  return new Error("Unknown error");
}
function handleError(err) {
  err = castError(err);
  throw err;
}
function lookup(owner, key) {
  return owner ? owner.context && owner.context[key] !== void 0 ? owner.context[key] : lookup(owner.owner, key) : void 0;
}
function resolveChildren(children2) {
  if (typeof children2 === "function" && !children2.length)
    return resolveChildren(children2());
  if (Array.isArray(children2)) {
    const results = [];
    for (let i = 0; i < children2.length; i++) {
      const result = resolveChildren(children2[i]);
      Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
    }
    return results;
  }
  return children2;
}
function createProvider(id, options) {
  return function provider(props) {
    let res;
    createRenderEffect(() => res = untrack(() => {
      Owner.context = {
        [id]: props.value
      };
      return children(() => props.children);
    }), void 0);
    return res;
  };
}
const FALLBACK = Symbol("fallback");
function dispose(d) {
  for (let i = 0; i < d.length; i++)
    d[i]();
}
function mapArray(list, mapFn, options = {}) {
  let items = [], mapped = [], disposers = [], len = 0, indexes = mapFn.length > 1 ? [] : null;
  onCleanup(() => dispose(disposers));
  return () => {
    let newItems = list() || [], i, j;
    newItems[$TRACK];
    return untrack(() => {
      let newLen = newItems.length, newIndices, newIndicesNext, temp, tempdisposers, tempIndexes, start, end, newEnd, item;
      if (newLen === 0) {
        if (len !== 0) {
          dispose(disposers);
          disposers = [];
          items = [];
          mapped = [];
          len = 0;
          indexes && (indexes = []);
        }
        if (options.fallback) {
          items = [FALLBACK];
          mapped[0] = createRoot((disposer) => {
            disposers[0] = disposer;
            return options.fallback();
          });
          len = 1;
        }
      } else if (len === 0) {
        mapped = new Array(newLen);
        for (j = 0; j < newLen; j++) {
          items[j] = newItems[j];
          mapped[j] = createRoot(mapper);
        }
        len = newLen;
      } else {
        temp = new Array(newLen);
        tempdisposers = new Array(newLen);
        indexes && (tempIndexes = new Array(newLen));
        for (start = 0, end = Math.min(len, newLen); start < end && items[start] === newItems[start]; start++)
          ;
        for (end = len - 1, newEnd = newLen - 1; end >= start && newEnd >= start && items[end] === newItems[newEnd]; end--, newEnd--) {
          temp[newEnd] = mapped[end];
          tempdisposers[newEnd] = disposers[end];
          indexes && (tempIndexes[newEnd] = indexes[end]);
        }
        newIndices = /* @__PURE__ */ new Map();
        newIndicesNext = new Array(newEnd + 1);
        for (j = newEnd; j >= start; j--) {
          item = newItems[j];
          i = newIndices.get(item);
          newIndicesNext[j] = i === void 0 ? -1 : i;
          newIndices.set(item, j);
        }
        for (i = start; i <= end; i++) {
          item = items[i];
          j = newIndices.get(item);
          if (j !== void 0 && j !== -1) {
            temp[j] = mapped[i];
            tempdisposers[j] = disposers[i];
            indexes && (tempIndexes[j] = indexes[i]);
            j = newIndicesNext[j];
            newIndices.set(item, j);
          } else
            disposers[i]();
        }
        for (j = start; j < newLen; j++) {
          if (j in temp) {
            mapped[j] = temp[j];
            disposers[j] = tempdisposers[j];
            if (indexes) {
              indexes[j] = tempIndexes[j];
              indexes[j](j);
            }
          } else
            mapped[j] = createRoot(mapper);
        }
        mapped = mapped.slice(0, len = newLen);
        items = newItems.slice(0);
      }
      return mapped;
    });
    function mapper(disposer) {
      disposers[j] = disposer;
      if (indexes) {
        const [s, set] = createSignal(j);
        indexes[j] = set;
        return mapFn(newItems[j], s);
      }
      return mapFn(newItems[j]);
    }
  };
}
let hydrationEnabled = false;
function enableHydration() {
  hydrationEnabled = true;
}
function createComponent(Comp, props) {
  if (hydrationEnabled) {
    if (sharedConfig.context) {
      const c = sharedConfig.context;
      setHydrateContext(nextHydrateContext());
      const r = untrack(() => Comp(props || {}));
      setHydrateContext(c);
      return r;
    }
  }
  return untrack(() => Comp(props || {}));
}
function For(props) {
  const fallback = "fallback" in props && {
    fallback: () => props.fallback
  };
  return createMemo(mapArray(() => props.each, props.children, fallback ? fallback : void 0));
}
function Show(props) {
  let strictEqual = false;
  const keyed = props.keyed;
  const condition = createMemo(() => props.when, void 0, {
    equals: (a, b) => strictEqual ? a === b : !a === !b
  });
  return createMemo(() => {
    const c = condition();
    if (c) {
      const child = props.children;
      const fn = typeof child === "function" && child.length > 0;
      strictEqual = keyed || fn;
      return fn ? untrack(() => child(c)) : child;
    }
    return props.fallback;
  });
}
const booleans = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"];
const Properties = /* @__PURE__ */ new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...booleans]);
const ChildProperties = /* @__PURE__ */ new Set(["innerHTML", "textContent", "innerText", "children"]);
const Aliases = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
});
const PropAliases = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  class: "className",
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly"
});
const DelegatedEvents = /* @__PURE__ */ new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]);
const SVGNamespace = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function reconcileArrays(parentNode, a, b) {
  let bLength = b.length, aEnd = a.length, bEnd = bLength, aStart = 0, bStart = 0, after = a[aEnd - 1].nextSibling, map = null;
  while (aStart < aEnd || bStart < bEnd) {
    if (a[aStart] === b[bStart]) {
      aStart++;
      bStart++;
      continue;
    }
    while (a[aEnd - 1] === b[bEnd - 1]) {
      aEnd--;
      bEnd--;
    }
    if (aEnd === aStart) {
      const node = bEnd < bLength ? bStart ? b[bStart - 1].nextSibling : b[bEnd - bStart] : after;
      while (bStart < bEnd)
        parentNode.insertBefore(b[bStart++], node);
    } else if (bEnd === bStart) {
      while (aStart < aEnd) {
        if (!map || !map.has(a[aStart]))
          a[aStart].remove();
        aStart++;
      }
    } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
      const node = a[--aEnd].nextSibling;
      parentNode.insertBefore(b[bStart++], a[aStart++].nextSibling);
      parentNode.insertBefore(b[--bEnd], node);
      a[aEnd] = b[bEnd];
    } else {
      if (!map) {
        map = /* @__PURE__ */ new Map();
        let i = bStart;
        while (i < bEnd)
          map.set(b[i], i++);
      }
      const index = map.get(a[aStart]);
      if (index != null) {
        if (bStart < index && index < bEnd) {
          let i = aStart, sequence = 1, t;
          while (++i < aEnd && i < bEnd) {
            if ((t = map.get(a[i])) == null || t !== index + sequence)
              break;
            sequence++;
          }
          if (sequence > index - bStart) {
            const node = a[aStart];
            while (bStart < index)
              parentNode.insertBefore(b[bStart++], node);
          } else
            parentNode.replaceChild(b[bStart++], a[aStart++]);
        } else
          aStart++;
      } else
        a[aStart++].remove();
    }
  }
}
const $$EVENTS = "_$DX_DELEGATE";
function render(code, element, init, options = {}) {
  let disposer;
  createRoot((dispose2) => {
    disposer = dispose2;
    element === document ? code() : insert(element, code(), element.firstChild ? null : void 0, init);
  }, options.owner);
  return () => {
    disposer();
    element.textContent = "";
  };
}
function template(html, check, isSVG) {
  const t = document.createElement("template");
  t.innerHTML = html;
  let node = t.content.firstChild;
  if (isSVG)
    node = node.firstChild;
  return node;
}
function delegateEvents(eventNames, document2 = window.document) {
  const e = document2[$$EVENTS] || (document2[$$EVENTS] = /* @__PURE__ */ new Set());
  for (let i = 0, l = eventNames.length; i < l; i++) {
    const name = eventNames[i];
    if (!e.has(name)) {
      e.add(name);
      document2.addEventListener(name, eventHandler);
    }
  }
}
function setAttribute(node, name, value) {
  if (value == null)
    node.removeAttribute(name);
  else
    node.setAttribute(name, value);
}
function setAttributeNS(node, namespace, name, value) {
  if (value == null)
    node.removeAttributeNS(namespace, name);
  else
    node.setAttributeNS(namespace, name, value);
}
function className(node, value) {
  if (value == null)
    node.removeAttribute("class");
  else
    node.className = value;
}
function addEventListener(node, name, handler, delegate) {
  if (delegate) {
    if (Array.isArray(handler)) {
      node[`$$${name}`] = handler[0];
      node[`$$${name}Data`] = handler[1];
    } else
      node[`$$${name}`] = handler;
  } else if (Array.isArray(handler)) {
    const handlerFn = handler[0];
    node.addEventListener(name, handler[0] = (e) => handlerFn.call(node, handler[1], e));
  } else
    node.addEventListener(name, handler);
}
function classList(node, value, prev = {}) {
  const classKeys = Object.keys(value || {}), prevKeys = Object.keys(prev);
  let i, len;
  for (i = 0, len = prevKeys.length; i < len; i++) {
    const key = prevKeys[i];
    if (!key || key === "undefined" || value[key])
      continue;
    toggleClassKey(node, key, false);
    delete prev[key];
  }
  for (i = 0, len = classKeys.length; i < len; i++) {
    const key = classKeys[i], classValue = !!value[key];
    if (!key || key === "undefined" || prev[key] === classValue || !classValue)
      continue;
    toggleClassKey(node, key, true);
    prev[key] = classValue;
  }
  return prev;
}
function style(node, value, prev) {
  if (!value)
    return prev ? setAttribute(node, "style") : value;
  const nodeStyle = node.style;
  if (typeof value === "string")
    return nodeStyle.cssText = value;
  typeof prev === "string" && (nodeStyle.cssText = prev = void 0);
  prev || (prev = {});
  value || (value = {});
  let v, s;
  for (s in prev) {
    value[s] == null && nodeStyle.removeProperty(s);
    delete prev[s];
  }
  for (s in value) {
    v = value[s];
    if (v !== prev[s]) {
      nodeStyle.setProperty(s, v);
      prev[s] = v;
    }
  }
  return prev;
}
function spread(node, props = {}, isSVG, skipChildren) {
  const prevProps = {};
  if (!skipChildren) {
    createRenderEffect(() => prevProps.children = insertExpression(node, props.children, prevProps.children));
  }
  createRenderEffect(() => props.ref && props.ref(node));
  createRenderEffect(() => assign(node, props, isSVG, true, prevProps, true));
  return prevProps;
}
function insert(parent, accessor, marker, initial) {
  if (marker !== void 0 && !initial)
    initial = [];
  if (typeof accessor !== "function")
    return insertExpression(parent, accessor, initial, marker);
  createRenderEffect((current) => insertExpression(parent, accessor(), current, marker), initial);
}
function assign(node, props, isSVG, skipChildren, prevProps = {}, skipRef = false) {
  props || (props = {});
  for (const prop in prevProps) {
    if (!(prop in props)) {
      if (prop === "children")
        continue;
      prevProps[prop] = assignProp(node, prop, null, prevProps[prop], isSVG, skipRef);
    }
  }
  for (const prop in props) {
    if (prop === "children") {
      if (!skipChildren)
        insertExpression(node, props.children);
      continue;
    }
    const value = props[prop];
    prevProps[prop] = assignProp(node, prop, value, prevProps[prop], isSVG, skipRef);
  }
}
function hydrate$1(code, element, options = {}) {
  sharedConfig.completed = globalThis._$HY.completed;
  sharedConfig.events = globalThis._$HY.events;
  sharedConfig.load = globalThis._$HY.load;
  sharedConfig.gather = (root) => gatherHydratable(element, root);
  sharedConfig.registry = /* @__PURE__ */ new Map();
  sharedConfig.context = {
    id: options.renderId || "",
    count: 0
  };
  gatherHydratable(element, options.renderId);
  const dispose2 = render(code, element, [...element.childNodes], options);
  sharedConfig.context = null;
  return dispose2;
}
function getNextElement(template2) {
  let node, key;
  if (!sharedConfig.context || !(node = sharedConfig.registry.get(key = getHydrationKey()))) {
    return template2.cloneNode(true);
  }
  if (sharedConfig.completed)
    sharedConfig.completed.add(node);
  sharedConfig.registry.delete(key);
  return node;
}
function getNextMarker(start) {
  let end = start, count = 0, current = [];
  if (sharedConfig.context) {
    while (end) {
      if (end.nodeType === 8) {
        const v = end.nodeValue;
        if (v === "#")
          count++;
        else if (v === "/") {
          if (count === 0)
            return [end, current];
          count--;
        }
      }
      current.push(end);
      end = end.nextSibling;
    }
  }
  return [end, current];
}
function runHydrationEvents() {
  if (sharedConfig.events && !sharedConfig.events.queued) {
    queueMicrotask(() => {
      const {
        completed,
        events
      } = sharedConfig;
      events.queued = false;
      while (events.length) {
        const [el, e] = events[0];
        if (!completed.has(el))
          return;
        eventHandler(e);
        events.shift();
      }
    });
    sharedConfig.events.queued = true;
  }
}
function toPropertyName(name) {
  return name.toLowerCase().replace(/-([a-z])/g, (_2, w2) => w2.toUpperCase());
}
function toggleClassKey(node, key, value) {
  const classNames = key.trim().split(/\s+/);
  for (let i = 0, nameLen = classNames.length; i < nameLen; i++)
    node.classList.toggle(classNames[i], value);
}
function assignProp(node, prop, value, prev, isSVG, skipRef) {
  let isCE, isProp, isChildProp;
  if (prop === "style")
    return style(node, value, prev);
  if (prop === "classList")
    return classList(node, value, prev);
  if (value === prev)
    return prev;
  if (prop === "ref") {
    if (!skipRef)
      value(node);
  } else if (prop.slice(0, 3) === "on:") {
    const e = prop.slice(3);
    prev && node.removeEventListener(e, prev);
    value && node.addEventListener(e, value);
  } else if (prop.slice(0, 10) === "oncapture:") {
    const e = prop.slice(10);
    prev && node.removeEventListener(e, prev, true);
    value && node.addEventListener(e, value, true);
  } else if (prop.slice(0, 2) === "on") {
    const name = prop.slice(2).toLowerCase();
    const delegate = DelegatedEvents.has(name);
    if (!delegate && prev) {
      const h2 = Array.isArray(prev) ? prev[0] : prev;
      node.removeEventListener(name, h2);
    }
    if (delegate || value) {
      addEventListener(node, name, value, delegate);
      delegate && delegateEvents([name]);
    }
  } else if ((isChildProp = ChildProperties.has(prop)) || !isSVG && (PropAliases[prop] || (isProp = Properties.has(prop))) || (isCE = node.nodeName.includes("-"))) {
    if (prop === "class" || prop === "className")
      className(node, value);
    else if (isCE && !isProp && !isChildProp)
      node[toPropertyName(prop)] = value;
    else
      node[PropAliases[prop] || prop] = value;
  } else {
    const ns = isSVG && prop.indexOf(":") > -1 && SVGNamespace[prop.split(":")[0]];
    if (ns)
      setAttributeNS(node, ns, prop, value);
    else
      setAttribute(node, Aliases[prop] || prop, value);
  }
  return value;
}
function eventHandler(e) {
  const key = `$$${e.type}`;
  let node = e.composedPath && e.composedPath()[0] || e.target;
  if (e.target !== node) {
    Object.defineProperty(e, "target", {
      configurable: true,
      value: node
    });
  }
  Object.defineProperty(e, "currentTarget", {
    configurable: true,
    get() {
      return node || document;
    }
  });
  if (sharedConfig.registry && !sharedConfig.done) {
    sharedConfig.done = true;
    document.querySelectorAll("[id^=pl-]").forEach((elem) => elem.remove());
  }
  while (node !== null) {
    const handler = node[key];
    if (handler && !node.disabled) {
      const data = node[`${key}Data`];
      data !== void 0 ? handler.call(node, data, e) : handler.call(node, e);
      if (e.cancelBubble)
        return;
    }
    node = node.host && node.host !== node && node.host instanceof Node ? node.host : node.parentNode;
  }
}
function insertExpression(parent, value, current, marker, unwrapArray) {
  if (sharedConfig.context && !current)
    current = [...parent.childNodes];
  while (typeof current === "function")
    current = current();
  if (value === current)
    return current;
  const t = typeof value, multi = marker !== void 0;
  parent = multi && current[0] && current[0].parentNode || parent;
  if (t === "string" || t === "number") {
    if (sharedConfig.context)
      return current;
    if (t === "number")
      value = value.toString();
    if (multi) {
      let node = current[0];
      if (node && node.nodeType === 3) {
        node.data = value;
      } else
        node = document.createTextNode(value);
      current = cleanChildren(parent, current, marker, node);
    } else {
      if (current !== "" && typeof current === "string") {
        current = parent.firstChild.data = value;
      } else
        current = parent.textContent = value;
    }
  } else if (value == null || t === "boolean") {
    if (sharedConfig.context)
      return current;
    current = cleanChildren(parent, current, marker);
  } else if (t === "function") {
    createRenderEffect(() => {
      let v = value();
      while (typeof v === "function")
        v = v();
      current = insertExpression(parent, v, current, marker);
    });
    return () => current;
  } else if (Array.isArray(value)) {
    const array = [];
    const currentArray = current && Array.isArray(current);
    if (normalizeIncomingArray(array, value, current, unwrapArray)) {
      createRenderEffect(() => current = insertExpression(parent, array, current, marker, true));
      return () => current;
    }
    if (sharedConfig.context) {
      if (!array.length)
        return current;
      for (let i = 0; i < array.length; i++) {
        if (array[i].parentNode)
          return current = array;
      }
    }
    if (array.length === 0) {
      current = cleanChildren(parent, current, marker);
      if (multi)
        return current;
    } else if (currentArray) {
      if (current.length === 0) {
        appendNodes(parent, array, marker);
      } else
        reconcileArrays(parent, current, array);
    } else {
      current && cleanChildren(parent);
      appendNodes(parent, array);
    }
    current = array;
  } else if (value instanceof Node) {
    if (sharedConfig.context && value.parentNode)
      return current = multi ? [value] : value;
    if (Array.isArray(current)) {
      if (multi)
        return current = cleanChildren(parent, current, marker, value);
      cleanChildren(parent, current, null, value);
    } else if (current == null || current === "" || !parent.firstChild) {
      parent.appendChild(value);
    } else
      parent.replaceChild(value, parent.firstChild);
    current = value;
  } else
    ;
  return current;
}
function normalizeIncomingArray(normalized, array, current, unwrap) {
  let dynamic = false;
  for (let i = 0, len = array.length; i < len; i++) {
    let item = array[i], prev = current && current[i];
    if (item instanceof Node) {
      normalized.push(item);
    } else if (item == null || item === true || item === false)
      ;
    else if (Array.isArray(item)) {
      dynamic = normalizeIncomingArray(normalized, item, prev) || dynamic;
    } else if (typeof item === "function") {
      if (unwrap) {
        while (typeof item === "function")
          item = item();
        dynamic = normalizeIncomingArray(normalized, Array.isArray(item) ? item : [item], Array.isArray(prev) ? prev : [prev]) || dynamic;
      } else {
        normalized.push(item);
        dynamic = true;
      }
    } else {
      const value = String(item);
      if (prev && prev.nodeType === 3 && prev.data === value) {
        normalized.push(prev);
      } else
        normalized.push(document.createTextNode(value));
    }
  }
  return dynamic;
}
function appendNodes(parent, array, marker = null) {
  for (let i = 0, len = array.length; i < len; i++)
    parent.insertBefore(array[i], marker);
}
function cleanChildren(parent, current, marker, replacement) {
  if (marker === void 0)
    return parent.textContent = "";
  const node = replacement || document.createTextNode("");
  if (current.length) {
    let inserted = false;
    for (let i = current.length - 1; i >= 0; i--) {
      const el = current[i];
      if (node !== el) {
        const isParent = el.parentNode === parent;
        if (!inserted && !i)
          isParent ? parent.replaceChild(node, el) : parent.insertBefore(node, marker);
        else
          isParent && el.remove();
      } else
        inserted = true;
    }
  } else
    parent.insertBefore(node, marker);
  return [node];
}
function gatherHydratable(element, root) {
  const templates = element.querySelectorAll(`*[data-hk]`);
  for (let i = 0; i < templates.length; i++) {
    const node = templates[i];
    const key = node.getAttribute("data-hk");
    if ((!root || key.startsWith(root)) && !sharedConfig.registry.has(key))
      sharedConfig.registry.set(key, node);
  }
}
function getHydrationKey() {
  const hydrate2 = sharedConfig.context;
  return `${hydrate2.id}${hydrate2.count++}`;
}
const hydrate = (...args) => {
  enableHydration();
  return hydrate$1(...args);
};
function legacy(parser) {
  return new LanguageSupport(StreamLanguage.define(parser));
}
function sql(dialectName) {
  return __vitePreload(() => import("./index-0ad9c5ab.js"), true ? ["assets/index-0ad9c5ab.js","assets/index-9e94dbc0.js","assets/index-73136136.js","assets/index-f4eaee3d.js","assets/index-08d7a392.js","assets/index-9d34c1ff.js"] : void 0).then((m) => m.sql({ dialect: m[dialectName] }));
}
const languages = [
  /* @__PURE__ */ LanguageDescription.of({
    name: "C",
    extensions: ["c", "h", "ino"],
    load() {
      return __vitePreload(() => import("./index-8fa9bed1.js"), true ? ["assets/index-8fa9bed1.js","assets/index-08d7a392.js","assets/index-9e94dbc0.js","assets/index-73136136.js","assets/index-f4eaee3d.js"] : void 0).then((m) => m.cpp());
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "C++",
    alias: ["cpp"],
    extensions: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"],
    load() {
      return __vitePreload(() => import("./index-8fa9bed1.js"), true ? ["assets/index-8fa9bed1.js","assets/index-08d7a392.js","assets/index-9e94dbc0.js","assets/index-73136136.js","assets/index-f4eaee3d.js"] : void 0).then((m) => m.cpp());
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "CQL",
    alias: ["cassandra"],
    extensions: ["cql"],
    load() {
      return sql("Cassandra");
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "CSS",
    extensions: ["css"],
    load() {
      return __vitePreload(() => import("./index-02f56940.js"), true ? ["assets/index-02f56940.js","assets/index-08d7a392.js","assets/index-9e94dbc0.js","assets/index-73136136.js","assets/index-f4eaee3d.js"] : void 0).then((m) => m.css());
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "HTML",
    alias: ["xhtml"],
    extensions: ["html", "htm", "handlebars", "hbs"],
    load() {
      return __vitePreload(() => import("./index-2b3125df.js"), true ? ["assets/index-2b3125df.js","assets/index-08d7a392.js","assets/index-9e94dbc0.js","assets/index-73136136.js","assets/index-f4eaee3d.js","assets/index-02f56940.js","assets/index-b680242d.js","assets/index-9d34c1ff.js"] : void 0).then((m) => m.html());
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Java",
    extensions: ["java"],
    load() {
      return __vitePreload(() => import("./index-1047b5f6.js"), true ? ["assets/index-1047b5f6.js","assets/index-08d7a392.js","assets/index-9e94dbc0.js","assets/index-73136136.js","assets/index-f4eaee3d.js"] : void 0).then((m) => m.java());
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "JavaScript",
    alias: ["ecmascript", "js", "node"],
    extensions: ["js", "mjs", "cjs"],
    load() {
      return __vitePreload(() => import("./index-b680242d.js"), true ? ["assets/index-b680242d.js","assets/index-08d7a392.js","assets/index-9e94dbc0.js","assets/index-73136136.js","assets/index-f4eaee3d.js","assets/index-9d34c1ff.js"] : void 0).then((m) => m.javascript());
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "JSON",
    alias: ["json5"],
    extensions: ["json", "map"],
    load() {
      return __vitePreload(() => import("./index-6f86136e.js"), true ? ["assets/index-6f86136e.js","assets/index-08d7a392.js","assets/index-9e94dbc0.js","assets/index-73136136.js","assets/index-f4eaee3d.js"] : void 0).then((m) => m.json());
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "JSX",
    extensions: ["jsx"],
    load() {
      return __vitePreload(() => import("./index-b680242d.js"), true ? ["assets/index-b680242d.js","assets/index-08d7a392.js","assets/index-9e94dbc0.js","assets/index-73136136.js","assets/index-f4eaee3d.js","assets/index-9d34c1ff.js"] : void 0).then((m) => m.javascript({ jsx: true }));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "MariaDB SQL",
    load() {
      return sql("MariaSQL");
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Markdown",
    extensions: ["md", "markdown", "mkd"],
    load() {
      return __vitePreload(() => import("./index-a4bbc573.js"), true ? ["assets/index-a4bbc573.js","assets/index-73136136.js","assets/index-f4eaee3d.js","assets/index-9e94dbc0.js","assets/index-2b3125df.js","assets/index-08d7a392.js","assets/index-02f56940.js","assets/index-b680242d.js","assets/index-9d34c1ff.js"] : void 0).then((m) => m.markdown());
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "MS SQL",
    load() {
      return sql("MSSQL");
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "MySQL",
    load() {
      return sql("MySQL");
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "PHP",
    extensions: ["php", "php3", "php4", "php5", "php7", "phtml"],
    load() {
      return __vitePreload(() => import("./index-5dd22dba.js"), true ? ["assets/index-5dd22dba.js","assets/index-08d7a392.js","assets/index-9e94dbc0.js","assets/index-73136136.js","assets/index-f4eaee3d.js","assets/index-2b3125df.js","assets/index-02f56940.js","assets/index-b680242d.js","assets/index-9d34c1ff.js"] : void 0).then((m) => m.php());
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "PLSQL",
    extensions: ["pls"],
    load() {
      return sql("PLSQL");
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "PostgreSQL",
    load() {
      return sql("PostgreSQL");
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Python",
    extensions: ["BUILD", "bzl", "py", "pyw"],
    filename: /^(BUCK|BUILD)$/,
    load() {
      return __vitePreload(() => import("./index-ecc5f801.js"), true ? ["assets/index-ecc5f801.js","assets/index-08d7a392.js","assets/index-9e94dbc0.js","assets/index-73136136.js","assets/index-f4eaee3d.js"] : void 0).then((m) => m.python());
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Rust",
    extensions: ["rs"],
    load() {
      return __vitePreload(() => import("./index-ed439bce.js"), true ? ["assets/index-ed439bce.js","assets/index-08d7a392.js","assets/index-9e94dbc0.js","assets/index-73136136.js","assets/index-f4eaee3d.js"] : void 0).then((m) => m.rust());
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "SQL",
    extensions: ["sql"],
    load() {
      return sql("StandardSQL");
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "SQLite",
    load() {
      return sql("SQLite");
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "TSX",
    extensions: ["tsx"],
    load() {
      return __vitePreload(() => import("./index-b680242d.js"), true ? ["assets/index-b680242d.js","assets/index-08d7a392.js","assets/index-9e94dbc0.js","assets/index-73136136.js","assets/index-f4eaee3d.js","assets/index-9d34c1ff.js"] : void 0).then((m) => m.javascript({ jsx: true, typescript: true }));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "TypeScript",
    alias: ["ts"],
    extensions: ["ts"],
    load() {
      return __vitePreload(() => import("./index-b680242d.js"), true ? ["assets/index-b680242d.js","assets/index-08d7a392.js","assets/index-9e94dbc0.js","assets/index-73136136.js","assets/index-f4eaee3d.js","assets/index-9d34c1ff.js"] : void 0).then((m) => m.javascript({ typescript: true }));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "WebAssembly",
    extensions: ["wat", "wast"],
    load() {
      return __vitePreload(() => import("./index-e3892453.js"), true ? ["assets/index-e3892453.js","assets/index-9e94dbc0.js","assets/index-73136136.js","assets/index-f4eaee3d.js","assets/index-08d7a392.js"] : void 0).then((m) => m.wast());
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "XML",
    alias: ["rss", "wsdl", "xsd"],
    extensions: ["xml", "xsl", "xsd", "svg"],
    load() {
      return __vitePreload(() => import("./index-e0cb18f7.js"), true ? ["assets/index-e0cb18f7.js","assets/index-08d7a392.js","assets/index-9e94dbc0.js","assets/index-73136136.js","assets/index-f4eaee3d.js"] : void 0).then((m) => m.xml());
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "APL",
    extensions: ["dyalog", "apl"],
    load() {
      return __vitePreload(() => import("./apl-3cb328ac.js"), true ? [] : void 0).then((m) => legacy(m.apl));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "PGP",
    alias: ["asciiarmor"],
    extensions: ["asc", "pgp", "sig"],
    load() {
      return __vitePreload(() => import("./asciiarmor-407be8bc.js"), true ? [] : void 0).then((m) => legacy(m.asciiArmor));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "ASN.1",
    extensions: ["asn", "asn1"],
    load() {
      return __vitePreload(() => import("./asn1-7bdd5c77.js"), true ? [] : void 0).then((m) => legacy(m.asn1({})));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Asterisk",
    filename: /^extensions\.conf$/i,
    load() {
      return __vitePreload(() => import("./asterisk-f4ca4fb7.js"), true ? [] : void 0).then((m) => legacy(m.asterisk));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Brainfuck",
    extensions: ["b", "bf"],
    load() {
      return __vitePreload(() => import("./brainfuck-10a7e5b6.js"), true ? [] : void 0).then((m) => legacy(m.brainfuck));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Cobol",
    extensions: ["cob", "cpy"],
    load() {
      return __vitePreload(() => import("./cobol-36f97c08.js"), true ? [] : void 0).then((m) => legacy(m.cobol));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "C#",
    alias: ["csharp", "cs"],
    extensions: ["cs"],
    load() {
      return __vitePreload(() => import("./clike-dafd557d.js"), true ? [] : void 0).then((m) => legacy(m.csharp));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Clojure",
    extensions: ["clj", "cljc", "cljx"],
    load() {
      return __vitePreload(() => import("./clojure-81322c54.js"), true ? [] : void 0).then((m) => legacy(m.clojure));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "ClojureScript",
    extensions: ["cljs"],
    load() {
      return __vitePreload(() => import("./clojure-81322c54.js"), true ? [] : void 0).then((m) => legacy(m.clojure));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Closure Stylesheets (GSS)",
    extensions: ["gss"],
    load() {
      return __vitePreload(() => import("./css-fdb129cf.js"), true ? [] : void 0).then((m) => legacy(m.gss));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "CMake",
    extensions: ["cmake", "cmake.in"],
    filename: /^CMakeLists\.txt$/,
    load() {
      return __vitePreload(() => import("./cmake-9e205782.js"), true ? [] : void 0).then((m) => legacy(m.cmake));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "CoffeeScript",
    alias: ["coffee", "coffee-script"],
    extensions: ["coffee"],
    load() {
      return __vitePreload(() => import("./coffeescript-22e0856e.js"), true ? [] : void 0).then((m) => legacy(m.coffeeScript));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Common Lisp",
    alias: ["lisp"],
    extensions: ["cl", "lisp", "el"],
    load() {
      return __vitePreload(() => import("./commonlisp-f1c60345.js"), true ? [] : void 0).then((m) => legacy(m.commonLisp));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Cypher",
    extensions: ["cyp", "cypher"],
    load() {
      return __vitePreload(() => import("./cypher-0f5a99e3.js"), true ? [] : void 0).then((m) => legacy(m.cypher));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Cython",
    extensions: ["pyx", "pxd", "pxi"],
    load() {
      return __vitePreload(() => import("./python-487468d2.js"), true ? [] : void 0).then((m) => legacy(m.cython));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Crystal",
    extensions: ["cr"],
    load() {
      return __vitePreload(() => import("./crystal-ae022883.js"), true ? [] : void 0).then((m) => legacy(m.crystal));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "D",
    extensions: ["d"],
    load() {
      return __vitePreload(() => import("./d-f340bd50.js"), true ? [] : void 0).then((m) => legacy(m.d));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Dart",
    extensions: ["dart"],
    load() {
      return __vitePreload(() => import("./clike-dafd557d.js"), true ? [] : void 0).then((m) => legacy(m.dart));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "diff",
    extensions: ["diff", "patch"],
    load() {
      return __vitePreload(() => import("./diff-0dc5c268.js"), true ? [] : void 0).then((m) => legacy(m.diff));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Dockerfile",
    filename: /^Dockerfile$/,
    load() {
      return __vitePreload(() => import("./dockerfile-47b5a2d9.js"), true ? ["assets/dockerfile-47b5a2d9.js","assets/simple-mode-d85693a0.js"] : void 0).then((m) => legacy(m.dockerFile));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "DTD",
    extensions: ["dtd"],
    load() {
      return __vitePreload(() => import("./dtd-3382af3d.js"), true ? [] : void 0).then((m) => legacy(m.dtd));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Dylan",
    extensions: ["dylan", "dyl", "intr"],
    load() {
      return __vitePreload(() => import("./dylan-86c0f8f8.js"), true ? [] : void 0).then((m) => legacy(m.dylan));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "EBNF",
    load() {
      return __vitePreload(() => import("./ebnf-e0be449c.js"), true ? [] : void 0).then((m) => legacy(m.ebnf));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "ECL",
    extensions: ["ecl"],
    load() {
      return __vitePreload(() => import("./ecl-bbb57072.js"), true ? [] : void 0).then((m) => legacy(m.ecl));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "edn",
    extensions: ["edn"],
    load() {
      return __vitePreload(() => import("./clojure-81322c54.js"), true ? [] : void 0).then((m) => legacy(m.clojure));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Eiffel",
    extensions: ["e"],
    load() {
      return __vitePreload(() => import("./eiffel-8031bbeb.js"), true ? [] : void 0).then((m) => legacy(m.eiffel));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Elm",
    extensions: ["elm"],
    load() {
      return __vitePreload(() => import("./elm-40e1816d.js"), true ? [] : void 0).then((m) => legacy(m.elm));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Erlang",
    extensions: ["erl"],
    load() {
      return __vitePreload(() => import("./erlang-010a04d2.js"), true ? [] : void 0).then((m) => legacy(m.erlang));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Esper",
    load() {
      return __vitePreload(() => import("./sql-2a617f8f.js"), true ? [] : void 0).then((m) => legacy(m.esper));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Factor",
    extensions: ["factor"],
    load() {
      return __vitePreload(() => import("./factor-3c94cc40.js"), true ? ["assets/factor-3c94cc40.js","assets/simple-mode-d85693a0.js"] : void 0).then((m) => legacy(m.factor));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "FCL",
    load() {
      return __vitePreload(() => import("./fcl-6025aacf.js"), true ? [] : void 0).then((m) => legacy(m.fcl));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Forth",
    extensions: ["forth", "fth", "4th"],
    load() {
      return __vitePreload(() => import("./forth-22ed4d55.js"), true ? [] : void 0).then((m) => legacy(m.forth));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Fortran",
    extensions: ["f", "for", "f77", "f90", "f95"],
    load() {
      return __vitePreload(() => import("./fortran-8283d393.js"), true ? [] : void 0).then((m) => legacy(m.fortran));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "F#",
    alias: ["fsharp"],
    extensions: ["fs"],
    load() {
      return __vitePreload(() => import("./mllike-d8783c14.js"), true ? [] : void 0).then((m) => legacy(m.fSharp));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Gas",
    extensions: ["s"],
    load() {
      return __vitePreload(() => import("./gas-c06ef0b5.js"), true ? [] : void 0).then((m) => legacy(m.gas));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Gherkin",
    extensions: ["feature"],
    load() {
      return __vitePreload(() => import("./gherkin-57b7bbda.js"), true ? [] : void 0).then((m) => legacy(m.gherkin));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Go",
    extensions: ["go"],
    load() {
      return __vitePreload(() => import("./go-3ff3000c.js"), true ? [] : void 0).then((m) => legacy(m.go));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Groovy",
    extensions: ["groovy", "gradle"],
    filename: /^Jenkinsfile$/,
    load() {
      return __vitePreload(() => import("./groovy-1ffcee50.js"), true ? [] : void 0).then((m) => legacy(m.groovy));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Haskell",
    extensions: ["hs"],
    load() {
      return __vitePreload(() => import("./haskell-34ab4a17.js"), true ? [] : void 0).then((m) => legacy(m.haskell));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Haxe",
    extensions: ["hx"],
    load() {
      return __vitePreload(() => import("./haxe-f941adf4.js"), true ? [] : void 0).then((m) => legacy(m.haxe));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "HXML",
    extensions: ["hxml"],
    load() {
      return __vitePreload(() => import("./haxe-f941adf4.js"), true ? [] : void 0).then((m) => legacy(m.hxml));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "HTTP",
    load() {
      return __vitePreload(() => import("./http-d824cce3.js"), true ? [] : void 0).then((m) => legacy(m.http));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "IDL",
    extensions: ["pro"],
    load() {
      return __vitePreload(() => import("./idl-cad6bb72.js"), true ? [] : void 0).then((m) => legacy(m.idl));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "JSON-LD",
    alias: ["jsonld"],
    extensions: ["jsonld"],
    load() {
      return __vitePreload(() => import("./javascript-fd18be0e.js"), true ? [] : void 0).then((m) => legacy(m.jsonld));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Jinja2",
    extensions: ["j2", "jinja", "jinja2"],
    load() {
      return __vitePreload(() => import("./jinja2-ae08fe31.js"), true ? [] : void 0).then((m) => legacy(m.jinja2));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Julia",
    extensions: ["jl"],
    load() {
      return __vitePreload(() => import("./julia-5ef111bb.js"), true ? [] : void 0).then((m) => legacy(m.julia));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Kotlin",
    extensions: ["kt"],
    load() {
      return __vitePreload(() => import("./clike-dafd557d.js"), true ? [] : void 0).then((m) => legacy(m.kotlin));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "LESS",
    extensions: ["less"],
    load() {
      return __vitePreload(() => import("./css-fdb129cf.js"), true ? [] : void 0).then((m) => legacy(m.less));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "LiveScript",
    alias: ["ls"],
    extensions: ["ls"],
    load() {
      return __vitePreload(() => import("./livescript-786915bc.js"), true ? [] : void 0).then((m) => legacy(m.liveScript));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Lua",
    extensions: ["lua"],
    load() {
      return __vitePreload(() => import("./lua-9352e5bf.js"), true ? [] : void 0).then((m) => legacy(m.lua));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "mIRC",
    extensions: ["mrc"],
    load() {
      return __vitePreload(() => import("./mirc-ef563ca3.js"), true ? [] : void 0).then((m) => legacy(m.mirc));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Mathematica",
    extensions: ["m", "nb", "wl", "wls"],
    load() {
      return __vitePreload(() => import("./mathematica-b5a46e0a.js"), true ? [] : void 0).then((m) => legacy(m.mathematica));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Modelica",
    extensions: ["mo"],
    load() {
      return __vitePreload(() => import("./modelica-07e1cb15.js"), true ? [] : void 0).then((m) => legacy(m.modelica));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "MUMPS",
    extensions: ["mps"],
    load() {
      return __vitePreload(() => import("./mumps-1681e5cd.js"), true ? [] : void 0).then((m) => legacy(m.mumps));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Mbox",
    extensions: ["mbox"],
    load() {
      return __vitePreload(() => import("./mbox-b8d1f9dd.js"), true ? [] : void 0).then((m) => legacy(m.mbox));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Nginx",
    filename: /nginx.*\.conf$/i,
    load() {
      return __vitePreload(() => import("./nginx-0e4f9b7d.js"), true ? [] : void 0).then((m) => legacy(m.nginx));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "NSIS",
    extensions: ["nsh", "nsi"],
    load() {
      return __vitePreload(() => import("./nsis-8f4ad78e.js"), true ? ["assets/nsis-8f4ad78e.js","assets/simple-mode-d85693a0.js"] : void 0).then((m) => legacy(m.nsis));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "NTriples",
    extensions: ["nt", "nq"],
    load() {
      return __vitePreload(() => import("./ntriples-86b864fb.js"), true ? [] : void 0).then((m) => legacy(m.ntriples));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Objective-C",
    alias: ["objective-c", "objc"],
    extensions: ["m"],
    load() {
      return __vitePreload(() => import("./clike-dafd557d.js"), true ? [] : void 0).then((m) => legacy(m.objectiveC));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Objective-C++",
    alias: ["objective-c++", "objc++"],
    extensions: ["mm"],
    load() {
      return __vitePreload(() => import("./clike-dafd557d.js"), true ? [] : void 0).then((m) => legacy(m.objectiveCpp));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "OCaml",
    extensions: ["ml", "mli", "mll", "mly"],
    load() {
      return __vitePreload(() => import("./mllike-d8783c14.js"), true ? [] : void 0).then((m) => legacy(m.oCaml));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Octave",
    extensions: ["m"],
    load() {
      return __vitePreload(() => import("./octave-77550907.js"), true ? [] : void 0).then((m) => legacy(m.octave));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Oz",
    extensions: ["oz"],
    load() {
      return __vitePreload(() => import("./oz-48f301ca.js"), true ? [] : void 0).then((m) => legacy(m.oz));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Pascal",
    extensions: ["p", "pas"],
    load() {
      return __vitePreload(() => import("./pascal-7a27ac5a.js"), true ? [] : void 0).then((m) => legacy(m.pascal));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Perl",
    extensions: ["pl", "pm"],
    load() {
      return __vitePreload(() => import("./perl-8b1184b7.js"), true ? [] : void 0).then((m) => legacy(m.perl));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Pig",
    extensions: ["pig"],
    load() {
      return __vitePreload(() => import("./pig-83241e3c.js"), true ? [] : void 0).then((m) => legacy(m.pig));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "PowerShell",
    extensions: ["ps1", "psd1", "psm1"],
    load() {
      return __vitePreload(() => import("./powershell-a0a35c11.js"), true ? [] : void 0).then((m) => legacy(m.powerShell));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Properties files",
    alias: ["ini", "properties"],
    extensions: ["properties", "ini", "in"],
    load() {
      return __vitePreload(() => import("./properties-18d257b8.js"), true ? [] : void 0).then((m) => legacy(m.properties));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "ProtoBuf",
    extensions: ["proto"],
    load() {
      return __vitePreload(() => import("./protobuf-8dbe6fdc.js"), true ? [] : void 0).then((m) => legacy(m.protobuf));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Puppet",
    extensions: ["pp"],
    load() {
      return __vitePreload(() => import("./puppet-69a1dac1.js"), true ? [] : void 0).then((m) => legacy(m.puppet));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Q",
    extensions: ["q"],
    load() {
      return __vitePreload(() => import("./q-417ed85f.js"), true ? [] : void 0).then((m) => legacy(m.q));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "R",
    alias: ["rscript"],
    extensions: ["r", "R"],
    load() {
      return __vitePreload(() => import("./r-663284fc.js"), true ? [] : void 0).then((m) => legacy(m.r));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "RPM Changes",
    load() {
      return __vitePreload(() => import("./rpm-92bc972e.js"), true ? [] : void 0).then((m) => legacy(m.rpmChanges));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "RPM Spec",
    extensions: ["spec"],
    load() {
      return __vitePreload(() => import("./rpm-92bc972e.js"), true ? [] : void 0).then((m) => legacy(m.rpmSpec));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Ruby",
    alias: ["jruby", "macruby", "rake", "rb", "rbx"],
    extensions: ["rb"],
    load() {
      return __vitePreload(() => import("./ruby-748d56f4.js"), true ? [] : void 0).then((m) => legacy(m.ruby));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "SAS",
    extensions: ["sas"],
    load() {
      return __vitePreload(() => import("./sas-c7a63092.js"), true ? [] : void 0).then((m) => legacy(m.sas));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Sass",
    extensions: ["sass"],
    load() {
      return __vitePreload(() => import("./sass-2879fc1a.js"), true ? ["assets/sass-2879fc1a.js","assets/css-fdb129cf.js"] : void 0).then((m) => legacy(m.sass));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Scala",
    extensions: ["scala"],
    load() {
      return __vitePreload(() => import("./clike-dafd557d.js"), true ? [] : void 0).then((m) => legacy(m.scala));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Scheme",
    extensions: ["scm", "ss"],
    load() {
      return __vitePreload(() => import("./scheme-18c68b24.js"), true ? [] : void 0).then((m) => legacy(m.scheme));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "SCSS",
    extensions: ["scss"],
    load() {
      return __vitePreload(() => import("./css-fdb129cf.js"), true ? [] : void 0).then((m) => legacy(m.sCSS));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Shell",
    alias: ["bash", "sh", "zsh"],
    extensions: ["sh", "ksh", "bash"],
    filename: /^PKGBUILD$/,
    load() {
      return __vitePreload(() => import("./shell-8d038f9e.js"), true ? [] : void 0).then((m) => legacy(m.shell));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Sieve",
    extensions: ["siv", "sieve"],
    load() {
      return __vitePreload(() => import("./sieve-7eccb0a0.js"), true ? [] : void 0).then((m) => legacy(m.sieve));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Smalltalk",
    extensions: ["st"],
    load() {
      return __vitePreload(() => import("./smalltalk-de2f31cf.js"), true ? [] : void 0).then((m) => legacy(m.smalltalk));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Solr",
    load() {
      return __vitePreload(() => import("./solr-9a12943b.js"), true ? [] : void 0).then((m) => legacy(m.solr));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "SML",
    extensions: ["sml", "sig", "fun", "smackspec"],
    load() {
      return __vitePreload(() => import("./mllike-d8783c14.js"), true ? [] : void 0).then((m) => legacy(m.sml));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "SPARQL",
    alias: ["sparul"],
    extensions: ["rq", "sparql"],
    load() {
      return __vitePreload(() => import("./sparql-167707c4.js"), true ? [] : void 0).then((m) => legacy(m.sparql));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Spreadsheet",
    alias: ["excel", "formula"],
    load() {
      return __vitePreload(() => import("./spreadsheet-175e1574.js"), true ? [] : void 0).then((m) => legacy(m.spreadsheet));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Squirrel",
    extensions: ["nut"],
    load() {
      return __vitePreload(() => import("./clike-dafd557d.js"), true ? [] : void 0).then((m) => legacy(m.squirrel));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Stylus",
    extensions: ["styl"],
    load() {
      return __vitePreload(() => import("./stylus-338b2057.js"), true ? [] : void 0).then((m) => legacy(m.stylus));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Swift",
    extensions: ["swift"],
    load() {
      return __vitePreload(() => import("./swift-63c945b3.js"), true ? [] : void 0).then((m) => legacy(m.swift));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "sTeX",
    load() {
      return __vitePreload(() => import("./stex-4d582884.js"), true ? [] : void 0).then((m) => legacy(m.stex));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "LaTeX",
    alias: ["tex"],
    extensions: ["text", "ltx", "tex"],
    load() {
      return __vitePreload(() => import("./stex-4d582884.js"), true ? [] : void 0).then((m) => legacy(m.stex));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "SystemVerilog",
    extensions: ["v", "sv", "svh"],
    load() {
      return __vitePreload(() => import("./verilog-fa511a84.js"), true ? [] : void 0).then((m) => legacy(m.verilog));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Tcl",
    extensions: ["tcl"],
    load() {
      return __vitePreload(() => import("./tcl-7233b909.js"), true ? [] : void 0).then((m) => legacy(m.tcl));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Textile",
    extensions: ["textile"],
    load() {
      return __vitePreload(() => import("./textile-03e05df0.js"), true ? [] : void 0).then((m) => legacy(m.textile));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "TiddlyWiki",
    load() {
      return __vitePreload(() => import("./tiddlywiki-d2edbbfa.js"), true ? [] : void 0).then((m) => legacy(m.tiddlyWiki));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Tiki wiki",
    load() {
      return __vitePreload(() => import("./tiki-45ef1338.js"), true ? [] : void 0).then((m) => legacy(m.tiki));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "TOML",
    extensions: ["toml"],
    load() {
      return __vitePreload(() => import("./toml-5960b4ad.js"), true ? [] : void 0).then((m) => legacy(m.toml));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Troff",
    extensions: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    load() {
      return __vitePreload(() => import("./troff-4ecb8a58.js"), true ? [] : void 0).then((m) => legacy(m.troff));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "TTCN",
    extensions: ["ttcn", "ttcn3", "ttcnpp"],
    load() {
      return __vitePreload(() => import("./ttcn-c131d7bb.js"), true ? [] : void 0).then((m) => legacy(m.ttcn));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "TTCN_CFG",
    extensions: ["cfg"],
    load() {
      return __vitePreload(() => import("./ttcn-cfg-c089e651.js"), true ? [] : void 0).then((m) => legacy(m.ttcnCfg));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Turtle",
    extensions: ["ttl"],
    load() {
      return __vitePreload(() => import("./turtle-580ebf3e.js"), true ? [] : void 0).then((m) => legacy(m.turtle));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Web IDL",
    extensions: ["webidl"],
    load() {
      return __vitePreload(() => import("./webidl-9c9c3564.js"), true ? [] : void 0).then((m) => legacy(m.webIDL));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "VB.NET",
    extensions: ["vb"],
    load() {
      return __vitePreload(() => import("./vb-94b66268.js"), true ? [] : void 0).then((m) => legacy(m.vb));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "VBScript",
    extensions: ["vbs"],
    load() {
      return __vitePreload(() => import("./vbscript-5658ca0e.js"), true ? [] : void 0).then((m) => legacy(m.vbScript));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Velocity",
    extensions: ["vtl"],
    load() {
      return __vitePreload(() => import("./velocity-0265a9c5.js"), true ? [] : void 0).then((m) => legacy(m.velocity));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Verilog",
    extensions: ["v"],
    load() {
      return __vitePreload(() => import("./verilog-fa511a84.js"), true ? [] : void 0).then((m) => legacy(m.verilog));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "VHDL",
    extensions: ["vhd", "vhdl"],
    load() {
      return __vitePreload(() => import("./vhdl-9a2c950e.js"), true ? [] : void 0).then((m) => legacy(m.vhdl));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "XQuery",
    extensions: ["xy", "xquery"],
    load() {
      return __vitePreload(() => import("./xquery-67a251f9.js"), true ? [] : void 0).then((m) => legacy(m.xQuery));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Yacas",
    extensions: ["ys"],
    load() {
      return __vitePreload(() => import("./yacas-0b33cef8.js"), true ? [] : void 0).then((m) => legacy(m.yacas));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "YAML",
    alias: ["yml"],
    extensions: ["yaml", "yml"],
    load() {
      return __vitePreload(() => import("./yaml-55f98ce7.js"), true ? [] : void 0).then((m) => legacy(m.yaml));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Z80",
    extensions: ["z80"],
    load() {
      return __vitePreload(() => import("./z80-98a52984.js"), true ? [] : void 0).then((m) => legacy(m.z80));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "MscGen",
    extensions: ["mscgen", "mscin", "msc"],
    load() {
      return __vitePreload(() => import("./mscgen-e572024b.js"), true ? [] : void 0).then((m) => legacy(m.mscgen));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "Xù",
    extensions: ["xu"],
    load() {
      return __vitePreload(() => import("./mscgen-e572024b.js"), true ? [] : void 0).then((m) => legacy(m.xu));
    }
  }),
  /* @__PURE__ */ LanguageDescription.of({
    name: "MsGenny",
    extensions: ["msgenny"],
    load() {
      return __vitePreload(() => import("./mscgen-e572024b.js"), true ? [] : void 0).then((m) => legacy(m.msgenny));
    }
  })
];
const wn = "data-ink-mde-ssr-hydration-marker", Cn = `[${wn}]`, Ln = () => ({}), z = {
  array: "[object Array]",
  object: "[object Object]",
  string: "[object String]",
  undefined: "[object Undefined]",
  window: "[object Window]"
}, Sn = (e) => {
  if (Object.prototype.toString.call(e) === z.object)
    return `[object ${e.constructor.name}]`;
}, T = (e, n) => Sn(e) === n, Mn = (e, n) => {
  const t = /* @__PURE__ */ new WeakMap(), o = (r, i) => t.get(r) || (T(r, z.object) && t.set(r, true), T(i, z.undefined)) ? r : T(r, z.array) && T(i, z.array) ? [...i] : T(r, z.object) && T(i, z.object) ? Object.keys(r).reduce((l, a) => (Object.hasOwnProperty.call(i, a) ? l[a] = o(r[a], i[a]) : l[a] = r[a], l), {}) : i;
  return o(e, n);
}, W = (e, n) => Mn(e, n);
var V = /* @__PURE__ */ ((e) => (e.Auto = "auto", e.Dark = "dark", e.Light = "light", e))(V || {}), h = /* @__PURE__ */ ((e) => (e.Bold = "bold", e.Code = "code", e.CodeBlock = "code_block", e.Heading = "heading", e.Image = "image", e.Italic = "italic", e.Link = "link", e.List = "list", e.OrderedList = "ordered_list", e.Quote = "quote", e.TaskList = "task_list", e))(h || {}), re = /* @__PURE__ */ ((e) => (e.Completion = "completion", e.Default = "default", e.Grammar = "grammar", e))(re || {}), ie = /* @__PURE__ */ ((e) => (e.End = "end", e.Start = "start", e))(ie || {});
const ye = () => document.createElement("div"), Se = () => window.matchMedia("(prefers-color-scheme: dark)").matches, Hn = (e) => e === V.Dark ? true : e === V.Light ? false : Se(), te = (e) => {
  const n = [
    { suffix: "border-radius", default: "0.25rem" },
    { suffix: "color", default: "currentColor" },
    { suffix: "flex-direction", default: "column" },
    { suffix: "font-family", default: "inherit" },
    { suffix: "block-background-color", default: "#121212", light: "#f5f5f5" },
    { suffix: "block-background-color-on-hover", default: "#0f0f0f", light: "#e0e0e0" },
    { suffix: "block-max-height", default: "20rem" },
    { suffix: "block-padding", default: "0.5rem" },
    { suffix: "code-background-color", default: "var(--ink-internal-block-background-color)" },
    { suffix: "code-color", default: "inherit" },
    { suffix: "code-font-family", default: "'Monaco', Courier, monospace" },
    { suffix: "editor-font-size", default: "1em" },
    { suffix: "editor-line-height", default: "2em" },
    { suffix: "editor-padding", default: "0.5rem" },
    { suffix: "inline-padding", default: "0.125rem" },
    { suffix: "modal-position", default: "fixed" },
    { suffix: "syntax-atom-color", default: "#d19a66" },
    { suffix: "syntax-comment-color", default: "#abb2bf" },
    { suffix: "syntax-comment-font-style", default: "italic" },
    { suffix: "syntax-emphasis-color", default: "inherit" },
    { suffix: "syntax-emphasis-font-style", default: "italic" },
    { suffix: "syntax-hashtag-background-color", default: "#222", light: "#eee" },
    { suffix: "syntax-hashtag-color", default: "inherit" },
    { suffix: "syntax-heading-color", default: "inherit" },
    { suffix: "syntax-heading-font-weight", default: "600" },
    { suffix: "syntax-heading1-color", default: "var(--ink-internal-syntax-heading-color, inherit)" },
    { suffix: "syntax-heading1-font-size", default: "1.6em" },
    { suffix: "syntax-heading1-font-weight", default: "600" },
    { suffix: "syntax-heading2-color", default: "var(--ink-internal-syntax-heading-color, inherit)" },
    { suffix: "syntax-heading2-font-size", default: "1.5em" },
    { suffix: "syntax-heading2-font-weight", default: "600" },
    { suffix: "syntax-heading3-color", default: "var(--ink-internal-syntax-heading-color, inherit)" },
    { suffix: "syntax-heading3-font-size", default: "1.4em" },
    { suffix: "syntax-heading3-font-weight", default: "600" },
    { suffix: "syntax-heading4-color", default: "var(--ink-internal-syntax-heading-color, inherit)" },
    { suffix: "syntax-heading4-font-size", default: "1.3em" },
    { suffix: "syntax-heading4-font-weight", default: "600" },
    { suffix: "syntax-heading5-color", default: "var(--ink-internal-syntax-heading-color, inherit)" },
    { suffix: "syntax-heading5-font-size", default: "1.2em" },
    { suffix: "syntax-heading5-font-weight", default: "600" },
    { suffix: "syntax-heading6-color", default: "var(--ink-internal-syntax-heading-color, inherit)" },
    { suffix: "syntax-heading6-font-size", default: "1.1em" },
    { suffix: "syntax-heading6-font-weight", default: "600" },
    { suffix: "syntax-highlight-background-color", default: "#555555" },
    { suffix: "syntax-keyword-color", default: "#c678dd" },
    { suffix: "syntax-link-color", default: "inherit" },
    { suffix: "syntax-meta-color", default: "#abb2bf" },
    { suffix: "syntax-monospace-color", default: "var(--ink-internal-code-color)" },
    { suffix: "syntax-monospace-font-family", default: "var(--ink-internal-code-font-family)" },
    { suffix: "syntax-name-color", default: "#d19a66" },
    { suffix: "syntax-name-label-color", default: "#abb2bf" },
    { suffix: "syntax-name-property-color", default: "#96c0d8" },
    { suffix: "syntax-name-property-definition-color", default: "#e06c75" },
    { suffix: "syntax-name-variable-color", default: "#e06c75" },
    { suffix: "syntax-name-variable-definition-color", default: "#e5c07b" },
    { suffix: "syntax-name-variable-local-color", default: "#d19a66" },
    { suffix: "syntax-name-variable-special-color", default: "inherit" },
    { suffix: "syntax-number-color", default: "#d19a66" },
    { suffix: "syntax-operator-color", default: "#96c0d8" },
    { suffix: "syntax-processing-instruction-color", default: "#444444", light: "#bbbbbb" },
    { suffix: "syntax-punctuation-color", default: "#abb2bf" },
    { suffix: "syntax-strikethrough-color", default: "inherit" },
    { suffix: "syntax-strikethrough-text-decoration", default: "line-through" },
    { suffix: "syntax-string-color", default: "#98c379" },
    { suffix: "syntax-string-special-color", default: "inherit" },
    { suffix: "syntax-strong-color", default: "inherit" },
    { suffix: "syntax-strong-font-weight", default: "600" },
    { suffix: "syntax-url-color", default: "#aaaaaa", light: "#666666" }
  ], t = !Hn(e.options.interface.appearance);
  return n.map((o) => {
    const r = t && o.light ? o.light : o.default;
    return `--ink-internal-${o.suffix}: var(--ink-${o.suffix}, ${r});`;
  });
}, An = (e) => [
  EditorView.theme({}, { dark: e })
], zn = (e) => e.extensions.map((n) => n.initialValue(e)), ue = (e) => Promise.all(
  e.extensions.map((n) => n.reconfigure(e.options))
), Bn = (e) => {
  const n = new Compartment();
  return {
    compartment: n,
    initialValue: (t) => n.of(e(t.options)),
    reconfigure: (t) => n.reconfigure(e(t))
  };
}, En = (e) => {
  const n = new Compartment();
  return {
    compartment: n,
    initialValue: (t) => n.of([]),
    reconfigure: (t) => e(t, n)
  };
}, jn = () => [
  ...Tn.map((e) => Bn(e)),
  ...Vn.map((e) => En(e))
], Tn = [
  (e) => e.plugins.reduce((t, o) => (o.type === re.Default && t.push(o.value), t), []),
  (e) => {
    const n = e.plugins.reduce((t, o) => (o.type === re.Grammar && t.push(o.value), t), []);
    return markdown({
      base: markdownLanguage,
      codeLanguages: languages,
      extensions: n
    });
  },
  (e) => {
    const n = e.interface.appearance === V.Dark, t = e.interface.appearance === V.Auto;
    return An(n || t && Se());
  }
], Vn = [
  async (e, n) => {
    if (e.interface.autocomplete) {
      const { autocomplete: t } = await __vitePreload(() => import("./autocomplete.a9b833c4-dd7830ef.js"), true ? ["assets/autocomplete.a9b833c4-dd7830ef.js","assets/index-9d34c1ff.js","assets/index-73136136.js","assets/index-f4eaee3d.js","assets/index-9e94dbc0.js","assets/preload-helper-5f15640e.js","assets/index-a4bbc573.js","assets/index-2b3125df.js","assets/index-08d7a392.js","assets/index-02f56940.js","assets/index-b680242d.js","assets/index-7d350bb1.js"] : void 0);
      return n.reconfigure(t(e));
    }
    return n.reconfigure([]);
  },
  async (e, n) => {
    if (e.interface.images) {
      const { images: t } = await __vitePreload(() => import("./images.0bde9a43-743b7270.js"), true ? ["assets/images.0bde9a43-743b7270.js","assets/index-9e94dbc0.js","assets/index-73136136.js","assets/index-f4eaee3d.js"] : void 0);
      return n.reconfigure(t());
    }
    return n.reconfigure([]);
  },
  async (e, n) => {
    if (e.interface.lists) {
      const { lists: t } = await __vitePreload(() => import("./lists.b465ff74-8447110e.js"), true ? ["assets/lists.b465ff74-8447110e.js","assets/index-9e94dbc0.js","assets/index-73136136.js","assets/index-f4eaee3d.js"] : void 0);
      return n.reconfigure(t());
    }
    return n.reconfigure([]);
  },
  async (e, n) => {
    if (e.interface.readonly) {
      const { readonly: t } = await __vitePreload(() => import("./readonly.90b28a57-51c231b9.js"), true ? ["assets/readonly.90b28a57-51c231b9.js","assets/index-73136136.js"] : void 0);
      return n.reconfigure(t());
    }
    return n.reconfigure([]);
  },
  async (e, n) => {
    if (e.interface.spellcheck) {
      const { spellcheck: t } = await __vitePreload(() => import("./spellcheck.7e0765c7-79e53350.js"), true ? ["assets/spellcheck.7e0765c7-79e53350.js","assets/index-f4eaee3d.js","assets/index-73136136.js"] : void 0);
      return n.reconfigure(t());
    }
    return n.reconfigure([]);
  },
  async (e, n) => {
    if (e.vim) {
      const { vim: t } = await __vitePreload(() => import("./vim.e0ec79d3-79394410.js"), true ? ["assets/vim.e0ec79d3-79394410.js","assets/index-73136136.js","assets/index-9e94dbc0.js","assets/index-f4eaee3d.js","assets/index-7d350bb1.js"] : void 0);
      return n.reconfigure(t());
    }
    return n.reconfigure([]);
  }
], ae = () => {
  const e = {
    doc: "",
    files: {
      clipboard: false,
      dragAndDrop: false,
      handler: () => {
      },
      injectMarkup: true,
      types: ["image/*"]
    },
    hooks: {
      afterUpdate: () => {
      },
      beforeUpdate: () => {
      }
    },
    interface: {
      appearance: V.Auto,
      attribution: true,
      autocomplete: false,
      images: false,
      lists: false,
      readonly: false,
      spellcheck: true,
      toolbar: false
    },
    plugins: [],
    readability: false,
    selections: [],
    toolbar: {
      bold: true,
      code: true,
      codeBlock: true,
      heading: true,
      image: true,
      italic: true,
      link: true,
      list: true,
      orderedList: true,
      quote: true,
      taskList: true,
      upload: false
    },
    vim: false
  };
  return {
    doc: "",
    editor: {},
    extensions: jn(),
    options: e,
    root: ye(),
    target: ye()
  };
}, On = (e) => W(ae(), e), fe = (e, n = {}) => {
  const [t, o] = createSignal(On({ ...n, doc: e.doc || "", options: e }));
  return [t, o];
}, Rn = ([e]) => {
  const { editor: n } = e();
  n.destroy();
}, le = ([e]) => {
  const { editor: n } = e();
  n.hasFocus || n.focus();
}, w = (e) => ({ ...{
  block: false,
  line: false,
  multiline: false,
  nodes: [],
  prefix: "",
  prefixStates: [],
  suffix: ""
}, ...e }), Nn = {
  [h.Bold]: w({
    nodes: ["StrongEmphasis"],
    prefix: "**",
    suffix: "**"
  }),
  [h.Code]: w({
    nodes: ["InlineCode"],
    prefix: "`",
    suffix: "`"
  }),
  [h.CodeBlock]: w({
    block: true,
    nodes: ["FencedCode"],
    prefix: "```\n",
    suffix: "\n```"
  }),
  [h.Heading]: w({
    multiline: true,
    nodes: ["ATXHeading1", "ATXHeading2", "ATXHeading3", "ATXHeading4", "ATXHeading5", "ATXHeading6"],
    prefix: "# ",
    prefixStates: ["# ", "## ", "### ", "#### ", "##### ", "###### ", ""]
  }),
  [h.Image]: w({
    nodes: ["Image"],
    prefix: "![](",
    suffix: ")"
  }),
  [h.Italic]: w({
    nodes: ["Emphasis"],
    prefix: "*",
    suffix: "*"
  }),
  [h.Link]: w({
    nodes: ["Link"],
    prefix: "[](",
    suffix: ")"
  }),
  [h.OrderedList]: w({
    line: true,
    multiline: true,
    nodes: ["OrderedList"],
    prefix: "1. "
  }),
  [h.Quote]: w({
    line: true,
    multiline: true,
    nodes: ["Blockquote"],
    prefix: "> "
  }),
  [h.TaskList]: w({
    line: true,
    multiline: true,
    nodes: ["BulletList"],
    prefix: "- [ ] "
  }),
  [h.List]: w({
    line: true,
    multiline: true,
    nodes: ["BulletList"],
    prefix: "- "
  })
}, Me = ([e, n], t) => {
  const { editor: o } = e(), r = o.lineBlockAt(t.start), i = o.lineBlockAt(t.end);
  return { start: r.from, end: i.to };
}, In = ([e, n], t) => {
  const { editor: o } = e();
  let r = t.start;
  const i = [];
  for (; r <= t.end; ) {
    const l = o.lineBlockAt(r), a = Math.max(r, l.from), s = Math.min(r, l.to);
    i.push({ start: a, end: s }), r = l.to + 1;
  }
  return i;
}, qn = ([e, n], t) => {
  var _a, _b;
  const { editor: o } = e(), r = ((_a = o.state.wordAt(t.start)) == null ? void 0 : _a.from) || t.start, i = ((_b = o.state.wordAt(t.end)) == null ? void 0 : _b.to) || t.end;
  return { start: r, end: i };
}, Pn = ([e, n], t) => t || Z([e, n]).pop() || { start: 0, end: 0 }, De = ([e, n], t) => {
  const { editor: o } = e();
  return o.state.sliceDoc(t.start, t.end);
}, me = ([e, n], t, o) => Wn(e(), o).find(({ type: i }) => t.nodes.includes(i.name)), Wn = ({ editor: { state: e } }, n) => {
  const t = [];
  return syntaxTree(e).iterate({
    from: n.start,
    to: n.end,
    enter: ({ type: o, from: r, to: i }) => {
      t.push({ type: o, from: r, to: i });
    }
  }), t;
}, ge = ([e, n], t, o) => {
  const r = De([e, n], o), i = t.prefix.length, l = t.suffix.length * -1 || r.length, a = r.slice(i, l);
  O([e, n], a, o);
}, Fn = ([e, n], t, o) => {
  const r = Me([e, n], o), i = me([e, n], t, r);
  if (i) {
    const l = i.from, a = i.to;
    ge([e, n], t, { start: l, end: a });
  } else {
    const l = t.prefix, a = t.suffix;
    G([e, n], { before: l, after: a, selection: r });
  }
}, Un = ([e, n], t, o) => {
  In([e, n], o).forEach((i) => {
    He([e, n], t, i);
  });
}, He = ([e, n], t, o) => {
  const r = Me([e, n], o), i = me([e, n], t, r), l = t.prefixStates.length > 0;
  if (i && l)
    t.prefixStates.find((a, s) => {
      const u = i.from, k = i.to, y = De([e, n], { start: u, end: k }), $ = y.startsWith(a);
      return $ && O([e, n], y.replace(new RegExp(`^${a}`), t.prefixStates[s + 1]), { start: u, end: k }), $;
    });
  else if (i) {
    const a = i.from, s = i.to;
    ge([e, n], t, { start: a, end: s });
  } else {
    const a = t.prefix, s = t.suffix;
    G([e, n], { before: a, after: s, selection: r });
  }
}, Xn = ([e, n], t, o) => {
  const r = me([e, n], t, o);
  if (r) {
    const i = r.from, l = r.to;
    ge([e, n], t, { start: i, end: l });
  } else {
    const { start: i, end: l } = qn([e, n], o), a = Array.isArray(t.prefix) ? t.prefix[0] : t.prefix, s = t.suffix;
    G([e, n], { before: a, after: s, selection: { start: i, end: l } });
  }
}, Ae = ([e, n], t, { selection: o } = {}) => {
  const r = Nn[t], i = Pn([e, n], o);
  r.block ? Fn([e, n], r, i) : r.multiline ? Un([e, n], r, i) : r.line ? He([e, n], r, i) : Xn([e, n], r, i);
}, Kn = ([e]) => {
  const { editor: n } = e();
  return n.state.sliceDoc();
}, ze = (e) => {
  const n = e.map((t) => SelectionRange.fromJSON({ anchor: t.start, head: t.end }));
  return EditorSelection.create(n);
}, Qn = (e) => e.ranges.map((t) => ({
  end: t.anchor < t.head ? t.head : t.anchor,
  start: t.head < t.anchor ? t.head : t.anchor
})), Z = ([e]) => {
  const { editor: n } = e();
  return Qn(n.state.selection);
}, O = ([e, n], t, o, r = false) => {
  const { editor: i } = e();
  let l = o == null ? void 0 : o.start, a = (o == null ? void 0 : o.end) || (o == null ? void 0 : o.start);
  if (typeof l > "u") {
    const u = Z([e, n]).pop();
    l = u.start, a = u.end;
  }
  const s = { changes: { from: l, to: a, insert: t } };
  if (r) {
    const u = l === a ? l + t.length : l, k = l + t.length;
    Object.assign(s, { selection: { anchor: u, head: k } });
  }
  i.dispatch(
    i.state.update(s)
  );
}, Yn = [
  "Blockquote"
], Zn = Decoration.line({ attributes: { class: "cm-blockquote" } }), Gn = Decoration.line({ attributes: { class: "cm-blockquote-open" } }), Jn = Decoration.line({ attributes: { class: "cm-blockquote-close" } }), et = ViewPlugin.define((e) => ({
  update: () => nt(e)
}), { decorations: (e) => e.update() }), nt = (e) => {
  const n = new RangeSetBuilder(), t = syntaxTree(e.state);
  for (const o of e.visibleRanges)
    for (let r = o.from; r < o.to; ) {
      const i = e.state.doc.lineAt(r);
      t.iterate({
        enter({ type: l, from: a, to: s }) {
          if (l.name !== "Document" && Yn.includes(l.name)) {
            n.add(i.from, i.from, Zn);
            const u = e.state.doc.lineAt(a), k = e.state.doc.lineAt(s);
            return u.number === i.number && n.add(i.from, i.from, Gn), k.number === i.number && n.add(i.from, i.from, Jn), false;
          }
        },
        from: i.from,
        to: i.to
      }), r = i.to + 1;
    }
  return n.finish();
}, tt = () => [
  et
], ot = [
  "CodeBlock",
  "FencedCode",
  "HTMLBlock",
  "CommentBlock"
], R = {
  "data-enable-grammarly": "false",
  "data-gramm": "false",
  "data-grammarly-skip": "true",
  spellcheck: "false"
}, rt = Decoration.line({ attributes: { ...R, class: "cm-codeblock" } }), it = Decoration.line({ attributes: { ...R, class: "cm-codeblock-open" } }), at = Decoration.line({ attributes: { ...R, class: "cm-codeblock-close" } }), lt = Decoration.mark({ attributes: { ...R, class: "cm-code" } }), st = Decoration.mark({ attributes: { ...R, class: "cm-code cm-code-open" } }), ct = Decoration.mark({ attributes: { ...R, class: "cm-code cm-code-close" } }), dt = ViewPlugin.define((e) => ({
  update: () => ut(e)
}), { decorations: (e) => e.update() }), ut = (e) => {
  const n = new RangeSetBuilder(), t = syntaxTree(e.state);
  for (const o of e.visibleRanges)
    for (let r = o.from; r < o.to; ) {
      const i = e.state.doc.lineAt(r);
      let l;
      t.iterate({
        enter({ type: a, from: s, to: u }) {
          if (a.name !== "Document")
            if (ot.includes(a.name)) {
              n.add(i.from, i.from, rt);
              const k = e.state.doc.lineAt(s), y = e.state.doc.lineAt(u);
              return k.number === i.number && n.add(i.from, i.from, it), y.number === i.number && n.add(i.from, i.from, at), false;
            } else
              a.name === "InlineCode" ? l = { from: s, to: u, innerFrom: s, innerTo: u } : a.name === "CodeMark" && (s === l.from ? (l.innerFrom = u, n.add(s, u, st)) : u === l.to && (l.innerTo = s, n.add(l.innerFrom, l.innerTo, lt), n.add(s, u, ct)));
        },
        from: i.from,
        to: i.to
      }), r = i.to + 1;
    }
  return n.finish();
}, ft = () => [
  dt
], mt = () => [
  EditorView.editorAttributes.of({
    class: "ink-mde-container"
  }),
  EditorView.contentAttributes.of({
    class: "ink-mde-editor-content"
  })
], gt = () => [
  ...mt()
], pt = [
  {
    key: "Tab",
    run: ({ state: e, dispatch: n }) => e.selection.ranges.some((t) => !t.empty) ? indentMore({ state: e, dispatch: n }) : (n(
      e.update(e.replaceSelection("  "), {
        scrollIntoView: true,
        annotations: Transaction.userEvent.of("input")
      })
    ), true),
    shift: indentLess
  }
], ht = () => keymap.of([
  ...pt,
  ...defaultKeymap,
  ...historyKeymap
]), kt = () => EditorView.lineWrapping, bt = () => [
  syntaxHighlighting(
    HighlightStyle.define([
      {
        tag: tags.atom,
        color: "var(--ink-internal-syntax-atom-color)"
      },
      {
        tag: tags.meta,
        color: "var(--ink-internal-syntax-meta-color)"
      },
      {
        tag: tags.emphasis,
        color: "var(--ink-internal-syntax-emphasis-color)",
        fontStyle: "var(--ink-internal-syntax-emphasis-font-style)"
      },
      {
        tag: tags.strong,
        color: "var(--ink-internal-syntax-strong-color)",
        fontWeight: "var(--ink-internal-syntax-strong-font-weight)"
      },
      {
        tag: tags.strikethrough,
        color: "var(--ink-internal-syntax-strikethrough-color)",
        textDecoration: "var(--ink-internal-syntax-strikethrough-text-decoration)"
      },
      {
        tag: tags.comment,
        color: "var(--ink-internal-syntax-comment-color)",
        fontStyle: "var(--ink-internal-syntax-comment-font-style)"
      },
      {
        tag: tags.monospace,
        color: "var(--ink-internal-syntax-code-color)",
        fontFamily: "var(--ink-internal-syntax-code-font-family)"
      },
      {
        tag: tags.name,
        color: "var(--ink-internal-syntax-name-color)"
      },
      {
        tag: tags.labelName,
        color: "var(--ink-internal-syntax-name-label-color)"
      },
      {
        tag: tags.propertyName,
        color: "var(--ink-internal-syntax-name-property-color)"
      },
      {
        tag: tags.definition(tags.propertyName),
        color: "var(--ink-internal-syntax-name-property-definition-color)"
      },
      {
        tag: tags.variableName,
        color: "var(--ink-internal-syntax-name-variable-color)"
      },
      {
        tag: tags.definition(tags.variableName),
        color: "var(--ink-internal-syntax-name-variable-definition-color)"
      },
      {
        tag: tags.local(tags.variableName),
        color: "var(--ink-internal-syntax-name-variable-local-color)"
      },
      {
        tag: tags.special(tags.variableName),
        color: "var(--ink-internal-syntax-name-variable-special-color)"
      },
      {
        tag: tags.heading,
        color: "var(--ink-internal-syntax-heading-color)",
        fontWeight: "var(--ink-internal-syntax-heading-font-weight)"
      },
      {
        tag: tags.heading1,
        color: "var(--ink-internal-syntax-heading1-color)",
        fontSize: "var(--ink-internal-syntax-heading1-font-size)",
        fontWeight: "var(--ink-internal-syntax-heading1-font-weight)"
      },
      {
        tag: tags.heading2,
        color: "var(--ink-internal-syntax-heading2-color)",
        fontSize: "var(--ink-internal-syntax-heading2-font-size)",
        fontWeight: "var(--ink-internal-syntax-heading2-font-weight)"
      },
      {
        tag: tags.heading3,
        color: "var(--ink-internal-syntax-heading3-color)",
        fontSize: "var(--ink-internal-syntax-heading3-font-size)",
        fontWeight: "var(--ink-internal-syntax-heading3-font-weight)"
      },
      {
        tag: tags.heading4,
        color: "var(--ink-internal-syntax-heading4-color)",
        fontSize: "var(--ink-internal-syntax-heading4-font-size)",
        fontWeight: "var(--ink-internal-syntax-heading4-font-weight)"
      },
      {
        tag: tags.heading5,
        color: "var(--ink-internal-syntax-heading5-color)",
        fontSize: "var(--ink-internal-syntax-heading5-font-size)",
        fontWeight: "var(--ink-internal-syntax-heading5-font-weight)"
      },
      {
        tag: tags.heading6,
        color: "var(--ink-internal-syntax-heading6-color)",
        fontSize: "var(--ink-internal-syntax-heading6-font-size)",
        fontWeight: "var(--ink-internal-syntax-heading6-font-weight)"
      },
      {
        tag: tags.keyword,
        color: "var(--ink-internal-syntax-keyword-color)"
      },
      {
        tag: tags.number,
        color: "var(--ink-internal-syntax-number-color)"
      },
      {
        tag: tags.operator,
        color: "var(--ink-internal-syntax-operator-color)"
      },
      {
        tag: tags.punctuation,
        color: "var(--ink-internal-syntax-punctuation-color)"
      },
      {
        tag: tags.link,
        color: "var(--ink-internal-syntax-link-color)"
      },
      {
        tag: tags.url,
        color: "var(--ink-internal-syntax-url-color)"
      },
      {
        tag: tags.string,
        color: "var(--ink-internal-syntax-string-color)"
      },
      {
        tag: tags.special(tags.string),
        color: "var(--ink-internal-syntax-string-special-color)"
      },
      {
        tag: tags.processingInstruction,
        color: "var(--ink-internal-syntax-processing-instruction-color)"
      }
    ])
  )
], xt = (e) => {
  if (e.length > 0)
    return ze(e);
}, Be = (e) => EditorState.create({
  doc: e.options.doc,
  selection: xt(e.options.selections),
  extensions: [
    tt(),
    ft(),
    history(),
    gt(),
    ht(),
    kt(),
    bt(),
    ...zn(e)
  ]
}), vt = ([e, n], t) => {
  n(W(e(), { options: { doc: t } })), e().editor.setState(Be(e()));
}, yt = ([e]) => e().options, $t = async ([e, n], t) => {
  const o = n(W(e(), { options: t })), r = await ue(o);
  o.editor.dispatch({ effects: r });
}, Ee = (e, n = {}) => {
  if (n.selections)
    return je(e, n.selections);
  if (n.selection)
    return se(e, n.selection);
  if (n.at)
    return _t(e, n.at);
}, _t = (e, n) => {
  const [t] = e;
  if (n === ie.Start)
    return se(e, { start: 0, end: 0 });
  if (n === ie.End) {
    const o = t().editor.state.doc.length;
    return se(e, { start: o, end: o });
  }
}, je = ([e], n) => {
  const { editor: t } = e();
  t.dispatch(
    t.state.update({
      selection: ze(n)
    })
  );
}, se = (e, n) => je(e, [n]), wt = ([e], n) => {
  const { editor: t } = e();
  t.dispatch(
    t.state.update({
      changes: {
        from: 0,
        to: t.state.doc.length,
        insert: n
      }
    })
  );
}, G = ([e, n], { after: t, before: o, selection: r }) => {
  const { editor: i } = e(), l = r || Z([e, n]).pop() || { start: 0, end: 0 }, a = i.state.sliceDoc(l.start, l.end);
  O([e, n], `${o}${a}${t}`, l), Ee([e, n], { selections: [{ start: l.start + o.length, end: l.end + o.length }] });
}, Te = (e) => ({
  destroy: Rn.bind(void 0, e),
  focus: le.bind(void 0, e),
  format: Ae.bind(void 0, e),
  getDoc: Kn.bind(void 0, e),
  insert: O.bind(void 0, e),
  load: vt.bind(void 0, e),
  options: yt.bind(void 0, e),
  reconfigure: $t.bind(void 0, e),
  select: Ee.bind(void 0, e),
  selections: Z.bind(void 0, e),
  update: wt.bind(void 0, e),
  wrap: G.bind(void 0, e)
}), Ct = `.ink-drop-zone{align-items:center;background-color:#00000080;color:var(--ink-internal-color);display:flex;inset:0;justify-content:center;position:var(--ink-internal-modal-position);z-index:100}.ink-drop-zone:not(.visible){display:none}.ink-drop-zone-modal{background-color:var(--ink-internal-block-background-color);border-radius:var(--ink-internal-border-radius);box-sizing:border-box;height:100%;max-height:20rem;max-width:40rem;padding:1rem;position:relative;width:100%}.ink-drop-zone-hide{cursor:pointer;height:1.75rem;position:absolute;right:.25rem;top:.25rem;width:1.75rem}.ink-drop-zone-hide svg{background-color:var(--ink-internal-block-background-color)}.ink-drop-zone-droppable-area{align-items:center;border:.2rem dashed var(--ink-internal-color);border-radius:.125rem;box-sizing:border-box;display:flex;flex-direction:column;font-size:1.25em;gap:1rem;height:100%;justify-content:center;padding:1rem;text-align:center}.ink-drop-zone-file-preview{align-items:center;display:flex;flex-wrap:wrap;gap:.5rem;max-width:25.5rem}.ink-drop-zone-file-preview-image{border:.125rem solid #222;border-radius:.125rem;box-sizing:border-box;height:6rem;object-fit:cover;padding:.5rem;width:6rem}
`, Lt = /* @__PURE__ */ template("<span>uploading files...</span>"), St = /* @__PURE__ */ template('<div class="ink-drop-zone"><style></style><div class="ink-drop-zone-modal"><div class="ink-drop-zone-droppable-area"><div class="ink-drop-zone-file-preview"></div><!#><!/></div><div class="ink-drop-zone-hide"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div></div></div>'), Mt = /* @__PURE__ */ template('<img class="ink-drop-zone-file-preview-image">'), Dt = /* @__PURE__ */ template("<span>drop files here</span>"), Ht = () => {
  const [e, n] = createSignal(0), [t, o] = createSignal([]), [r, i] = createSignal(false), [l, a] = createSignal(false), [s, u] = N(), k = () => {
    a(false);
  }, y = (p) => {
    if (s().options.files.dragAndDrop) {
      p.preventDefault(), p.stopPropagation();
      const v = p.dataTransfer;
      (v == null ? void 0 : v.files) ? F(v.files) : (n(0), a(false), o([]));
    }
  }, $ = (p) => {
    s().options.files.dragAndDrop && (p.preventDefault(), n(e() + 1), a(true));
  }, C = (p) => {
    s().options.files.dragAndDrop && (p.preventDefault(), n(e() - 1), e() === 0 && a(false));
  }, M = (p) => {
    s().options.files.dragAndDrop && (p.preventDefault(), a(true));
  }, H = (p) => {
    s().options.files.dragAndDrop && (p.preventDefault(), n(0), a(false));
  }, E = (p) => {
    if (s().options.files.clipboard) {
      p.preventDefault();
      const v = p.clipboardData;
      (v == null ? void 0 : v.files) && v.files.length > 0 && F(v.files);
    }
  }, F = (p) => {
    Array.from(p).forEach((v) => {
      o([...t(), v]);
    }), i(true), a(true), Promise.resolve(s().options.files.handler(p)).then((v) => {
      if (s().options.files.injectMarkup && v) {
        const L = `![](${v})`;
        O([s, u], L);
      }
    }).finally(() => {
      n(0), i(false), a(false), o([]);
    });
  };
  return onMount(() => {
    document.addEventListener("dragenter", $), document.addEventListener("dragleave", C), document.addEventListener("dragover", M), document.addEventListener("drop", H), s().root.addEventListener("paste", E);
  }), onCleanup(() => {
    document.removeEventListener("dragenter", $), document.removeEventListener("dragleave", C), document.removeEventListener("dragover", M), document.removeEventListener("drop", H), s().root.removeEventListener("paste", E);
  }), (() => {
    const p = getNextElement(St), v = p.firstChild, L = v.nextSibling, j = L.firstChild, I = j.firstChild, J = I.nextSibling, [ee, U] = getNextMarker(J.nextSibling), ne = j.nextSibling;
    return v.textContent = Ct, j.addEventListener("drop", y), insert(I, createComponent(For, {
      get each() {
        return t().slice(0, 8);
      },
      children: (X) => (() => {
        const q = getNextElement(Mt);
        return createRenderEffect((A) => {
          const D = X.name, K = URL.createObjectURL(X);
          return D !== A._v$ && setAttribute(q, "alt", A._v$ = D), K !== A._v$2 && setAttribute(q, "src", A._v$2 = K), A;
        }, {
          _v$: void 0,
          _v$2: void 0
        }), q;
      })()
    })), insert(j, createComponent(Show, {
      get when() {
        return r();
      },
      get fallback() {
        return getNextElement(Dt);
      },
      get children() {
        return getNextElement(Lt);
      }
    }), ee, U), ne.$$click = k, createRenderEffect(() => p.classList.toggle("visible", !!l())), runHydrationEvents(), p;
  })();
};
delegateEvents(["click"]);
const At = ([e, n]) => {
  const t = new EditorView({
    dispatch: (o) => {
      const { options: r } = e(), i = o.newDoc.toString();
      r.hooks.beforeUpdate(i), t.update([o]), o.docChanged && (n({ ...e(), doc: i }), r.hooks.afterUpdate(i));
    },
    state: Be(e())
  });
  return t;
}, zt = () => {
  const [e, n] = N(), t = At([e, n]);
  return n(W(e(), {
    editor: t
  })), ue(e()).then((o) => {
    t.dispatch({
      effects: o
    });
  }), t.dom;
}, Bt = /* @__PURE__ */ template('<button class="ink-button" type="button"></button>'), _ = (e) => (() => {
  const n = getNextElement(Bt);
  return n.$$click = (t) => e.onclick(t), insert(n, () => e.children), runHydrationEvents(), n;
})();
delegateEvents(["click"]);
const Et = `.ink-mde .ink-mde-toolbar{background-color:var(--ink-internal-block-background-color);color:inherit;display:flex;flex-shrink:0;overflow-x:auto;padding:.25rem}.ink-mde .ink-mde-toolbar .ink-mde-container{display:flex;gap:2rem}.ink-mde .ink-mde-toolbar-group{display:flex}.ink-mde .ink-mde-toolbar .ink-button{align-items:center;background:none;border:none;border-radius:var(--ink-internal-border-radius);color:inherit;cursor:pointer;display:flex;height:2.25rem;justify-content:center;padding:.4rem;width:2.25rem}.ink-mde .ink-mde-toolbar .ink-button:hover{background-color:var(--ink-internal-block-background-color-on-hover)}.ink-mde .ink-mde-toolbar .ink-button>*{align-items:center;display:flex;height:100%}
`, jt = /* @__PURE__ */ template('<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-miterlimit="5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4V10M6 16V10M6 10H14M14 10V4M14 10V16"></path></svg>'), Tt = /* @__PURE__ */ template('<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="5" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 10H10.5C12.1569 10 13.5 11.3431 13.5 13C13.5 14.6569 12.1569 16 10.5 16H6.5V4H9.5C11.1569 4 12.5 5.34315 12.5 7C12.5 8.65686 11.1569 10 9.5 10"></path></svg>'), Vt = /* @__PURE__ */ template('<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-miterlimit="5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4L9 16M13 4H9M7 16H11"></path></svg>'), Ot = /* @__PURE__ */ template('<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-miterlimit="5" stroke-linecap="round" stroke-linejoin="round"><path d="M2.00257 16H17.9955M2.00055 4H18M7 10H18.0659M2 8.5V11.4999C2.4 11.5 2.5 11.5 2.5 11.5V11V10.5M4 8.5V11.4999H4.5V11V10.5"></path></svg>'), Rt = /* @__PURE__ */ template('<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-miterlimit="5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 4L7 16"></path><path d="M5 7L2 10L5 13"></path><path d="M15 7L18 10L15 13"></path></svg>'), Nt = /* @__PURE__ */ template('<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-miterlimit="5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4L8 6"></path></svg>'), It = /* @__PURE__ */ template('<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-miterlimit="5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16H17.8294"></path><path d="M2 16H4"></path><path d="M7 10H17.8294"></path><path d="M2 10H4"></path><path d="M7 4H17.8294"></path><path d="M2 4H4"></path></svg>'), qt = /* @__PURE__ */ template('<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-miterlimit="5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16H18"></path><path d="M2 17.0242C2.48314 17.7569 3.94052 17.6154 3.99486 16.7919C4.05315 15.9169 3.1975 16.0044 2.99496 16.0044M2.0023 14.9758C2.48544 14.2431 3.94282 14.3846 3.99716 15.2081C4.05545 16.0831 3.1998 16.0002 2.99726 16.0002"></path><path d="M7 10H18"></path><path d="M2.00501 11.5H4M2.00193 8.97562C2.48449 8.24319 3.9401 8.38467 3.99437 9.20777C4.05259 10.0825 2.04342 10.5788 2 11.4996"></path><path d="M7 4H18"></path><path d="M2 5.5H4M2.99713 5.49952V2.5L2.215 2.93501"></path></svg>'), Pt = /* @__PURE__ */ template('<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-miterlimit="5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16H17.8294"></path><path d="M5 15L3 17L2 16"></path><path d="M7 10H17.8294"></path><path d="M5 9L3 11L2 10"></path><path d="M7 4H17.8294"></path><path d="M5 3L3 5L2 4"></path></svg>'), Wt = /* @__PURE__ */ template('<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-miterlimit="5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.12127 10.881C10.02 11.78 11.5237 11.7349 12.4771 10.7813L15.2546 8.00302C16.2079 7.04937 16.253 5.54521 15.3542 4.6462C14.4555 3.74719 12.9512 3.79174 11.9979 4.74539L10.3437 6.40007M10.8787 9.11903C9.97997 8.22002 8.47626 8.26509 7.52288 9.21874L4.74545 11.997C3.79208 12.9506 3.74701 14.4548 4.64577 15.3538C5.54452 16.2528 7.04876 16.2083 8.00213 15.2546L9.65633 13.5999"></path></svg>'), Ft = /* @__PURE__ */ template('<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-miterlimit="5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="16" height="12" rx="1"></rect><path d="M7.42659 7.67597L13.7751 13.8831M2.00208 12.9778L7.42844 7.67175"></path><path d="M11.9119 12.0599L14.484 9.54443L17.9973 12.9785"></path><path d="M10.9989 7.95832C11.551 7.95832 11.9986 7.52072 11.9986 6.98092C11.9986 6.44113 11.551 6.00354 10.9989 6.00354C10.4468 6.00354 9.99921 6.44113 9.99921 6.98092C9.99921 7.52072 10.4468 7.95832 10.9989 7.95832Z"></path></svg>'), Ut = /* @__PURE__ */ template('<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-miterlimit="5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V4M10 4L13 7M10 4L7 7"></path><path d="M2 13V15C2 15.5523 2.44772 16 3 16H17C17.5523 16 18 15.5523 18 15V13"></path></svg>'), Xt = /* @__PURE__ */ template('<input type="file">'), Kt = /* @__PURE__ */ template('<div class="ink-mde-toolbar"><style></style><div class="ink-mde-container"><div class="ink-mde-toolbar-group"><!#><!/><!#><!/><!#><!/></div><div class="ink-mde-toolbar-group"><!#><!/><!#><!/><!#><!/></div><div class="ink-mde-toolbar-group"><!#><!/><!#><!/><!#><!/></div><div class="ink-mde-toolbar-group"><!#><!/><!#><!/><!#><!/></div></div></div>'), Qt = () => {
  const [e, n] = N(), [t, o] = createSignal(), r = (a) => {
    Ae([e, n], a), le([e, n]);
  }, i = (a) => {
    const s = a.target;
    (s == null ? void 0 : s.files) && Promise.resolve(e().options.files.handler(s.files)).then((u) => {
      const k = `![](${u})`;
      O([e, n], k), le([e, n]);
    });
  }, l = () => {
    var _a;
    (_a = t()) == null ? void 0 : _a.click();
  };
  return (() => {
    const a = getNextElement(Kt), s = a.firstChild, u = s.nextSibling, k = u.firstChild, y = k.firstChild, [$, C] = getNextMarker(y.nextSibling), M = $.nextSibling, [H, E] = getNextMarker(M.nextSibling), F = H.nextSibling, [p, v] = getNextMarker(F.nextSibling), L = k.nextSibling, j = L.firstChild, [I, J] = getNextMarker(j.nextSibling), ee = I.nextSibling, [U, ne] = getNextMarker(ee.nextSibling), X = U.nextSibling, [q, A] = getNextMarker(X.nextSibling), D = L.nextSibling, K = D.firstChild, [he, Ne] = getNextMarker(K.nextSibling), Ie = he.nextSibling, [ke, qe] = getNextMarker(Ie.nextSibling), Pe = ke.nextSibling, [We, Fe] = getNextMarker(Pe.nextSibling), Q = D.nextSibling, Ue = Q.firstChild, [be, Xe] = getNextMarker(Ue.nextSibling), Ke = be.nextSibling, [xe, Qe] = getNextMarker(Ke.nextSibling), Ye = xe.nextSibling, [Ze, Ge] = getNextMarker(Ye.nextSibling);
    return s.textContent = Et, insert(k, createComponent(Show, {
      get when() {
        return e().options.toolbar.heading;
      },
      get children() {
        return createComponent(_, {
          onclick: () => r(h.Heading),
          get children() {
            return getNextElement(jt);
          }
        });
      }
    }), $, C), insert(k, createComponent(Show, {
      get when() {
        return e().options.toolbar.bold;
      },
      get children() {
        return createComponent(_, {
          onclick: () => r(h.Bold),
          get children() {
            return getNextElement(Tt);
          }
        });
      }
    }), H, E), insert(k, createComponent(Show, {
      get when() {
        return e().options.toolbar.italic;
      },
      get children() {
        return createComponent(_, {
          onclick: () => r(h.Italic),
          get children() {
            return getNextElement(Vt);
          }
        });
      }
    }), p, v), insert(L, createComponent(Show, {
      get when() {
        return e().options.toolbar.quote;
      },
      get children() {
        return createComponent(_, {
          onclick: () => r(h.Quote),
          get children() {
            return getNextElement(Ot);
          }
        });
      }
    }), I, J), insert(L, createComponent(Show, {
      get when() {
        return e().options.toolbar.codeBlock;
      },
      get children() {
        return createComponent(_, {
          onclick: () => r(h.CodeBlock),
          get children() {
            return getNextElement(Rt);
          }
        });
      }
    }), U, ne), insert(L, createComponent(Show, {
      get when() {
        return e().options.toolbar.code;
      },
      get children() {
        return createComponent(_, {
          onclick: () => r(h.Code),
          get children() {
            return getNextElement(Nt);
          }
        });
      }
    }), q, A), insert(D, createComponent(Show, {
      get when() {
        return e().options.toolbar.list;
      },
      get children() {
        return createComponent(_, {
          onclick: () => r(h.List),
          get children() {
            return getNextElement(It);
          }
        });
      }
    }), he, Ne), insert(D, createComponent(Show, {
      get when() {
        return e().options.toolbar.orderedList;
      },
      get children() {
        return createComponent(_, {
          onclick: () => r(h.OrderedList),
          get children() {
            return getNextElement(qt);
          }
        });
      }
    }), ke, qe), insert(D, createComponent(Show, {
      get when() {
        return e().options.toolbar.taskList;
      },
      get children() {
        return createComponent(_, {
          onclick: () => r(h.TaskList),
          get children() {
            return getNextElement(Pt);
          }
        });
      }
    }), We, Fe), insert(Q, createComponent(Show, {
      get when() {
        return e().options.toolbar.link;
      },
      get children() {
        return createComponent(_, {
          onclick: () => r(h.Link),
          get children() {
            return getNextElement(Wt);
          }
        });
      }
    }), be, Xe), insert(Q, createComponent(Show, {
      get when() {
        return e().options.toolbar.image;
      },
      get children() {
        return createComponent(_, {
          onclick: () => r(h.Image),
          get children() {
            return getNextElement(Ft);
          }
        });
      }
    }), xe, Qe), insert(Q, createComponent(Show, {
      get when() {
        return e().options.toolbar.upload;
      },
      get children() {
        return createComponent(_, {
          onclick: l,
          get children() {
            return [getNextElement(Ut), (() => {
              const Y = getNextElement(Xt);
              return o(Y), Y.addEventListener("change", i), Y.style.setProperty("display", "none"), Y;
            })()];
          }
        });
      }
    }), Ze, Ge), a;
  })();
}, pe = 225, Yt = (e, n = pe) => {
  const t = Jt(e, n), o = eo(e), r = Gt(e), i = Zt(e);
  return [t, o, r, i].join(" | ");
}, Zt = (e) => `${no(e)} chars`, Gt = (e) => `${to(e)} lines`, Jt = (e, n = pe) => {
  const t = oo(e, n), o = Math.floor(t), r = Math.floor(t % 1 * 60);
  return o === 0 ? `${r}s read` : `${o}m ${r}s to read`;
}, eo = (e) => `${Ve(e)} words`, no = (e) => e.length, to = (e) => e.split(/\n/).length, oo = (e, n = pe) => Ve(e) / n, Ve = (e) => {
  const n = e.replace(/[']/g, "").replace(/[^\w\d]+/g, " ").trim();
  return n ? n.split(/\s+/).length : 0;
}, ro = /* @__PURE__ */ template('<div class="ink-mde-readability"><span></span></div>'), io = /* @__PURE__ */ template("<span>&nbsp;|</span>"), ao = /* @__PURE__ */ template('<div class="ink-mde-attribution"><span>&nbsp;powered by <a class="ink-mde-attribution-link" href="https://github.com/voracious/ink-mde" rel="noopener noreferrer" target="_blank">ink-mde</a></span></div>'), lo = /* @__PURE__ */ template('<div class="ink-mde-details"><div class="ink-mde-container"><div class="ink-mde-details-content"><!#><!/><!#><!/><!#><!/></div></div></div>'), so = () => {
  const [e] = N();
  return (() => {
    const n = getNextElement(lo), t = n.firstChild, o = t.firstChild, r = o.firstChild, [i, l] = getNextMarker(r.nextSibling), a = i.nextSibling, [s, u] = getNextMarker(a.nextSibling), k = s.nextSibling, [y, $] = getNextMarker(k.nextSibling);
    return insert(o, createComponent(Show, {
      get when() {
        return e().options.readability;
      },
      get children() {
        const C = getNextElement(ro), M = C.firstChild;
        return insert(M, () => Yt(e().doc)), C;
      }
    }), i, l), insert(o, createComponent(Show, {
      get when() {
        return createMemo(() => !!e().options.readability, true)() && e().options.interface.attribution;
      },
      get children() {
        return getNextElement(io);
      }
    }), s, u), insert(o, createComponent(Show, {
      get when() {
        return e().options.interface.attribution;
      },
      get children() {
        return getNextElement(ao);
      }
    }), y, $), n;
  })();
}, co = `.ink-mde{border:2px solid var(--ink-internal-block-background-color);border-radius:var(--ink-internal-border-radius);color:var(--ink-internal-color, inherit);display:flex;flex-direction:var(--ink-internal-flex-direction, column)}.ink-mde .cm-tooltip{background-color:var(--ink-internal-block-background-color);border-radius:var(--ink-internal-border-radius);font-family:inherit;padding:.25rem}.ink-mde .cm-tooltip.cm-tooltip-autocomplete ul{font-family:inherit}.ink-mde .cm-tooltip.cm-tooltip-autocomplete ul li.ink-tooltip-option{border-radius:var(--ink-internal-border-radius);padding:.25rem}.ink-mde .cm-tooltip.cm-tooltip-autocomplete ul li.ink-tooltip-option[aria-selected]{background-color:#96969640}.ink-mde .cm-completionLabel{font-family:inherit}.ink-mde,.ink-mde *{box-sizing:border-box}.ink-mde,.ink-mde .ink-mde-editor{display:flex;flex-direction:column;flex-grow:1;flex-shrink:1;min-height:0}.ink-mde .ink-mde-editor{overflow:auto;padding:.5rem}.ink-mde .ink-mde-toolbar,.ink-mde .ink-mde-details{display:flex;flex-grow:0;flex-shrink:0}.ink-mde .ink-mde-details{background-color:var(--ink-internal-block-background-color);display:flex;padding:.5rem}.ink-mde .ink-mde-details-content{color:inherit;display:flex;filter:brightness(.75);flex-wrap:wrap;font-size:.75em;justify-content:flex-end}.ink-mde .ink-mde-attribution{display:flex;justify-content:flex-end}.ink-mde .ink-mde-attribution-link{color:currentColor;font-weight:600;text-decoration:none}.ink-mde .ink-mde-container{margin-left:auto;margin-right:auto;width:100%}.ink-mde .ink-mde-task-toggle{cursor:pointer;height:1rem;line-height:2em;margin:0 .25rem 0 0;position:relative;top:-1px;vertical-align:middle;width:1rem}.ink-mde .cm-editor{display:flex;flex-direction:column;position:relative}.ink-mde .cm-scroller{align-items:flex-start;display:flex;font-family:var(--ink-internal-font-family);font-size:var(--ink-internal-editor-font-size);line-height:var(--ink-internal-editor-line-height);overflow-x:auto;position:relative}.ink-mde .cm-content{display:block;flex-grow:2;flex-shrink:0;margin:0;outline:none;padding:0;white-space:pre;word-wrap:normal}.ink-mde .cm-lineWrapping{flex-shrink:1;overflow-wrap:anywhere;white-space:break-spaces;word-break:break-word}.ink-mde .cm-line{font-family:var(--ink-internal-font-family);padding:0}.ink-mde .cm-line.cm-blockquote{background-color:var(--ink-internal-block-background-color);border-left:.25rem solid currentColor;padding:0 var(--ink-internal-block-padding)}.ink-mde .cm-line.cm-blockquote.cm-blockquote-open{border-top-left-radius:var(--ink-internal-border-radius);border-top-right-radius:var(--ink-internal-border-radius);padding-top:var(--ink-internal-block-padding)}.ink-mde .cm-line.cm-blockquote.cm-blockquote-close{border-bottom-left-radius:var(--ink-internal-border-radius);border-bottom-right-radius:var(--ink-internal-border-radius);padding-bottom:var(--ink-internal-block-padding)}.ink-mde .cm-line.cm-codeblock{background-color:var(--ink-internal-block-background-color);font-family:var(--ink-internal-code-font-family);padding:0 var(--ink-internal-block-padding)}.ink-mde .cm-line.cm-codeblock.cm-codeblock-open{border-radius:var(--ink-internal-border-radius) var(--ink-internal-border-radius) 0 0;padding-top:var(--ink-internal-block-padding)}.ink-mde .cm-line.cm-codeblock.cm-codeblock-close{border-radius:0 0 var(--ink-internal-border-radius) var(--ink-internal-border-radius);padding-bottom:var(--ink-internal-block-padding)}.ink-mde .cm-line .cm-code{background-color:var(--ink-internal-block-background-color);font-family:var(--ink-internal-code-font-family);padding:var(--ink-internal-inline-padding) 0}.ink-mde .cm-line .cm-code.cm-code-open{border-radius:var(--ink-internal-border-radius) 0 0 var(--ink-internal-border-radius);padding-left:var(--ink-internal-inline-padding)}.ink-mde .cm-line .cm-code.cm-code-close{border-radius:0 var(--ink-internal-border-radius) var(--ink-internal-border-radius) 0;padding-right:var(--ink-internal-inline-padding)}.ink-mde .cm-image-backdrop{background-color:var(--ink-internal-block-background-color)}
`, uo = /* @__PURE__ */ template("<style> </style>"), fo = () => {
  const [e] = N(), [n, t] = createSignal(te(e()));
  return createEffect(() => {
    t(te(e()));
  }), onMount(() => {
    const o = window.matchMedia("(prefers-color-scheme: dark)"), r = (i) => {
      const {
        editor: l,
        root: a
      } = e();
      a.isConnected ? ue(e()).then((s) => {
        l.dispatch({
          effects: s
        }), t(te(e()));
      }) : o.removeEventListener("change", r);
    };
    o.addEventListener("change", r);
  }), (() => {
    const o = getNextElement(uo), r = o.firstChild;
    return createRenderEffect(() => r.data = `.ink {
  ${n().join(`
  `)}
}
${co}`), o;
  })();
}, mo = /* @__PURE__ */ template('<div class="ink ink-mde"><!#><!/><!#><!/><!#><!/><div class="ink-mde-editor"></div><!#><!/></div>'), go = () => {
  const [e, n] = N(), t = (o) => {
    n(W(e(), {
      root: o
    }));
  };
  return (() => {
    const o = getNextElement(mo), r = o.firstChild, [i, l] = getNextMarker(r.nextSibling), a = i.nextSibling, [s, u] = getNextMarker(a.nextSibling), k = s.nextSibling, [y, $] = getNextMarker(k.nextSibling), C = y.nextSibling, M = C.nextSibling, [H, E] = getNextMarker(M.nextSibling);
    return t(o), spread(o, Ln, false, true), insert(o, createComponent(fo, {}), i, l), insert(o, createComponent(Show, {
      get when() {
        return e().options.files.clipboard || e().options.files.dragAndDrop;
      },
      get children() {
        return createComponent(Ht, {});
      }
    }), s, u), insert(o, createComponent(Show, {
      get when() {
        return e().options.interface.toolbar;
      },
      get children() {
        return createComponent(Qt, {});
      }
    }), y, $), insert(C, createComponent(zt, {})), insert(o, createComponent(Show, {
      get when() {
        return e().options.readability || e().options.interface.attribution;
      },
      get children() {
        return createComponent(so, {
          store: [e, n]
        });
      }
    }), H, E), runHydrationEvents(), o;
  })();
}, Oe = createContext([() => ae(), (e) => typeof e == "function" ? e(ae()) : e]), po = (e) => createComponent(Oe.Provider, {
  get value() {
    return e.store;
  },
  get children() {
    return e.children;
  }
}), N = () => useContext(Oe), Re = (e) => createComponent(po, {
  get store() {
    return e.store;
  },
  get children() {
    return createComponent(go, {
      get store() {
        return e.store;
      }
    });
  }
}), ho = (e, n = {}) => {
  const t = fe(n);
  return bo(), hydrate(() => createComponent(Re, {
    store: t
  }), e), Te(t);
}, Do = (e, n = {}) => e.querySelector(Cn) ? ho(e, n) : ko(e, n), ko = (e, n = {}) => {
  const t = fe(n);
  return render(() => createComponent(Re, {
    store: t
  }), e), Te(t);
}, Ho = (e = {}) => (fe(e), ""), bo = () => {
  let e, n;
  e = window._$HY || (window._$HY = {
    events: [],
    completed: /* @__PURE__ */ new WeakSet(),
    r: {}
  }), n = (t) => t && t.hasAttribute && (t.hasAttribute("data-hk") ? t : n(t.host && t.host instanceof Node ? t.host : t.parentNode)), ["click", "input"].forEach((t) => document.addEventListener(t, (o) => {
    let r = o.composedPath && o.composedPath()[0] || o.target, i = n(r);
    i && !e.completed.has(i) && e.events.push([i, o]);
  })), e.init = (t, o) => {
    e.r[t] = [new Promise((r, i) => o = r), o];
  }, e.set = (t, o, r) => {
    (r = e.r[t]) && r[1](o), e.r[t] = [o];
  }, e.unset = (t) => {
    delete e.r[t];
  }, e.load = (t, o) => {
    if (o = e.r[t])
      return o[0];
  };
};
export {
  Do as D,
  Ho as H,
  re as r
};
//# sourceMappingURL=client-2de13258.js.map
