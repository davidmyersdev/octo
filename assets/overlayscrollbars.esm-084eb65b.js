function each(t2, n2) {
  if (isArrayLike(t2)) {
    for (let o2 = 0; o2 < t2.length; o2++) {
      if (false === n2(t2[o2], o2, t2)) {
        break;
      }
    }
  } else if (t2) {
    each(Object.keys(t2), (o2) => n2(t2[o2], o2, t2));
  }
  return t2;
}
function style(t2, n2) {
  const o2 = isString(n2);
  const s2 = isArray(n2) || o2;
  if (s2) {
    let s3 = o2 ? "" : {};
    if (t2) {
      const e2 = window.getComputedStyle(t2, null);
      s3 = o2 ? getCSSVal(t2, e2, n2) : n2.reduce((n3, o3) => {
        n3[o3] = getCSSVal(t2, e2, o3);
        return n3;
      }, s3);
    }
    return s3;
  }
  t2 && each(keys(n2), (o3) => setCSSVal(t2, o3, n2[o3]));
}
const createCache = (t2, n2) => {
  const { o: o2, u: s2, _: e2 } = t2;
  let c2 = o2;
  let r2;
  const cacheUpdateContextual = (t3, n3) => {
    const o3 = c2;
    const i2 = t3;
    const l2 = n3 || (s2 ? !s2(o3, i2) : o3 !== i2);
    if (l2 || e2) {
      c2 = i2;
      r2 = o3;
    }
    return [c2, l2, r2];
  };
  const cacheUpdateIsolated = (t3) => cacheUpdateContextual(n2(c2, r2), t3);
  const getCurrentCache = (t3) => [c2, !!t3, r2];
  return [n2 ? cacheUpdateIsolated : cacheUpdateContextual, getCurrentCache];
};
const isClient = () => "undefined" !== typeof window;
const t = isClient() && Node.ELEMENT_NODE;
const { toString: n, hasOwnProperty: o } = Object.prototype;
const isUndefined = (t2) => void 0 === t2;
const isNull = (t2) => null === t2;
const type = (t2) => isUndefined(t2) || isNull(t2) ? `${t2}` : n.call(t2).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
const isNumber = (t2) => "number" === typeof t2;
const isString = (t2) => "string" === typeof t2;
const isBoolean = (t2) => "boolean" === typeof t2;
const isFunction = (t2) => "function" === typeof t2;
const isArray = (t2) => Array.isArray(t2);
const isObject = (t2) => "object" === typeof t2 && !isArray(t2) && !isNull(t2);
const isArrayLike = (t2) => {
  const n2 = !!t2 && t2.length;
  const o2 = isNumber(n2) && n2 > -1 && n2 % 1 == 0;
  return isArray(t2) || !isFunction(t2) && o2 ? n2 > 0 && isObject(t2) ? n2 - 1 in t2 : true : false;
};
const isPlainObject = (t2) => {
  if (!t2 || !isObject(t2) || "object" !== type(t2)) {
    return false;
  }
  let n2;
  const s2 = "constructor";
  const e2 = t2[s2];
  const c2 = e2 && e2.prototype;
  const r2 = o.call(t2, s2);
  const i2 = c2 && o.call(c2, "isPrototypeOf");
  if (e2 && !r2 && !i2) {
    return false;
  }
  for (n2 in t2) {
  }
  return isUndefined(n2) || o.call(t2, n2);
};
const isHTMLElement = (n2) => {
  const o2 = HTMLElement;
  return n2 ? o2 ? n2 instanceof o2 : n2.nodeType === t : false;
};
const isElement = (n2) => {
  const o2 = Element;
  return n2 ? o2 ? n2 instanceof o2 : n2.nodeType === t : false;
};
const indexOf = (t2, n2, o2) => t2.indexOf(n2, o2);
const push = (t2, n2, o2) => {
  !o2 && !isString(n2) && isArrayLike(n2) ? Array.prototype.push.apply(t2, n2) : t2.push(n2);
  return t2;
};
const from = (t2) => {
  const n2 = Array.from;
  const o2 = [];
  if (n2 && t2) {
    return n2(t2);
  }
  if (t2 instanceof Set) {
    t2.forEach((t3) => {
      push(o2, t3);
    });
  } else {
    each(t2, (t3) => {
      push(o2, t3);
    });
  }
  return o2;
};
const isEmptyArray = (t2) => !!t2 && 0 === t2.length;
const runEachAndClear = (t2, n2, o2) => {
  const runFn = (t3) => t3 && t3.apply(void 0, n2 || []);
  each(t2, runFn);
  !o2 && (t2.length = 0);
};
const hasOwnProperty = (t2, n2) => Object.prototype.hasOwnProperty.call(t2, n2);
const keys = (t2) => t2 ? Object.keys(t2) : [];
const assignDeep = (t2, n2, o2, s2, e2, c2, r2) => {
  const i2 = [n2, o2, s2, e2, c2, r2];
  if (("object" !== typeof t2 || isNull(t2)) && !isFunction(t2)) {
    t2 = {};
  }
  each(i2, (n3) => {
    each(keys(n3), (o3) => {
      const s3 = n3[o3];
      if (t2 === s3) {
        return true;
      }
      const e3 = isArray(s3);
      if (s3 && (isPlainObject(s3) || e3)) {
        const n4 = t2[o3];
        let c3 = n4;
        if (e3 && !isArray(n4)) {
          c3 = [];
        } else if (!e3 && !isPlainObject(n4)) {
          c3 = {};
        }
        t2[o3] = assignDeep(c3, s3);
      } else {
        t2[o3] = s3;
      }
    });
  });
  return t2;
};
const isEmptyObject = (t2) => {
  for (const n2 in t2) {
    return false;
  }
  return true;
};
const getSetProp = (t2, n2, o2, s2) => {
  if (isUndefined(s2)) {
    return o2 ? o2[t2] : n2;
  }
  o2 && (isString(s2) || isNumber(s2)) && (o2[t2] = s2);
};
const attr = (t2, n2, o2) => {
  if (isUndefined(o2)) {
    return t2 ? t2.getAttribute(n2) : null;
  }
  t2 && t2.setAttribute(n2, o2);
};
const attrClass = (t2, n2, o2, s2) => {
  if (o2) {
    const e2 = attr(t2, n2) || "";
    const c2 = new Set(e2.split(" "));
    c2[s2 ? "add" : "delete"](o2);
    attr(t2, n2, from(c2).join(" ").trim());
  }
};
const hasAttrClass = (t2, n2, o2) => {
  const s2 = attr(t2, n2) || "";
  const e2 = new Set(s2.split(" "));
  return e2.has(o2);
};
const removeAttr = (t2, n2) => {
  t2 && t2.removeAttribute(n2);
};
const scrollLeft = (t2, n2) => getSetProp("scrollLeft", 0, t2, n2);
const scrollTop = (t2, n2) => getSetProp("scrollTop", 0, t2, n2);
const s = isClient() && Element.prototype;
const find = (t2, n2) => {
  const o2 = [];
  const s2 = n2 ? isElement(n2) ? n2 : null : document;
  return s2 ? push(o2, s2.querySelectorAll(t2)) : o2;
};
const findFirst = (t2, n2) => {
  const o2 = n2 ? isElement(n2) ? n2 : null : document;
  return o2 ? o2.querySelector(t2) : null;
};
const is = (t2, n2) => {
  if (isElement(t2)) {
    const o2 = s.matches || s.msMatchesSelector;
    return o2.call(t2, n2);
  }
  return false;
};
const contents = (t2) => t2 ? from(t2.childNodes) : [];
const parent = (t2) => t2 ? t2.parentElement : null;
const closest = (t2, n2) => {
  if (isElement(t2)) {
    const o2 = s.closest;
    if (o2) {
      return o2.call(t2, n2);
    }
    do {
      if (is(t2, n2)) {
        return t2;
      }
      t2 = parent(t2);
    } while (t2);
  }
  return null;
};
const liesBetween = (t2, n2, o2) => {
  const s2 = t2 && closest(t2, n2);
  const e2 = t2 && findFirst(o2, s2);
  const c2 = closest(e2, n2) === s2;
  return s2 && e2 ? s2 === t2 || e2 === t2 || c2 && closest(closest(t2, o2), n2) !== s2 : false;
};
const before = (t2, n2, o2) => {
  if (o2 && t2) {
    let s2 = n2;
    let e2;
    if (isArrayLike(o2)) {
      e2 = document.createDocumentFragment();
      each(o2, (t3) => {
        if (t3 === s2) {
          s2 = t3.previousSibling;
        }
        e2.appendChild(t3);
      });
    } else {
      e2 = o2;
    }
    if (n2) {
      if (!s2) {
        s2 = t2.firstChild;
      } else if (s2 !== n2) {
        s2 = s2.nextSibling;
      }
    }
    t2.insertBefore(e2, s2 || null);
  }
};
const appendChildren = (t2, n2) => {
  before(t2, null, n2);
};
const insertBefore = (t2, n2) => {
  before(parent(t2), t2, n2);
};
const insertAfter = (t2, n2) => {
  before(parent(t2), t2 && t2.nextSibling, n2);
};
const removeElements = (t2) => {
  if (isArrayLike(t2)) {
    each(from(t2), (t3) => removeElements(t3));
  } else if (t2) {
    const n2 = parent(t2);
    if (n2) {
      n2.removeChild(t2);
    }
  }
};
const createDiv = (t2) => {
  const n2 = document.createElement("div");
  if (t2) {
    attr(n2, "class", t2);
  }
  return n2;
};
const createDOM = (t2) => {
  const n2 = createDiv();
  n2.innerHTML = t2.trim();
  return each(contents(n2), (t3) => removeElements(t3));
};
const firstLetterToUpper = (t2) => t2.charAt(0).toUpperCase() + t2.slice(1);
const getDummyStyle = () => createDiv().style;
const e = ["-webkit-", "-moz-", "-o-", "-ms-"];
const c = ["WebKit", "Moz", "O", "MS", "webkit", "moz", "o", "ms"];
const r = {};
const i = {};
const cssProperty = (t2) => {
  let n2 = i[t2];
  if (hasOwnProperty(i, t2)) {
    return n2;
  }
  const o2 = firstLetterToUpper(t2);
  const s2 = getDummyStyle();
  each(e, (e2) => {
    const c2 = e2.replace(/-/g, "");
    const r2 = [t2, e2 + t2, c2 + o2, firstLetterToUpper(c2) + o2];
    return !(n2 = r2.find((t3) => void 0 !== s2[t3]));
  });
  return i[t2] = n2 || "";
};
const jsAPI = (t2) => {
  if (isClient()) {
    let n2 = r[t2] || window[t2];
    if (hasOwnProperty(r, t2)) {
      return n2;
    }
    each(c, (o2) => {
      n2 = n2 || window[o2 + firstLetterToUpper(t2)];
      return !n2;
    });
    r[t2] = n2;
    return n2;
  }
};
const l = jsAPI("MutationObserver");
const a = jsAPI("IntersectionObserver");
const u = jsAPI("ResizeObserver");
const d = jsAPI("cancelAnimationFrame");
const f = jsAPI("requestAnimationFrame");
const _ = isClient() && window.setTimeout;
const h = isClient() && window.clearTimeout;
const equal = (t2, n2, o2, s2) => {
  if (t2 && n2) {
    let e2 = true;
    each(o2, (o3) => {
      const c2 = s2 ? s2(t2[o3]) : t2[o3];
      const r2 = s2 ? s2(n2[o3]) : n2[o3];
      if (c2 !== r2) {
        e2 = false;
      }
    });
    return e2;
  }
  return false;
};
const equalWH = (t2, n2) => equal(t2, n2, ["w", "h"]);
const equalXY = (t2, n2) => equal(t2, n2, ["x", "y"]);
const equalTRBL = (t2, n2) => equal(t2, n2, ["t", "r", "b", "l"]);
const equalBCRWH = (t2, n2, o2) => equal(t2, n2, ["width", "height"], o2 && ((t3) => Math.round(t3)));
const noop = () => {
};
const selfClearTimeout = (t2) => {
  let n2;
  const o2 = t2 ? _ : f;
  const s2 = t2 ? h : d;
  return [(e2) => {
    s2(n2);
    n2 = o2(e2, isFunction(t2) ? t2() : t2);
  }, () => s2(n2)];
};
const debounce = (t2, n2) => {
  let o2;
  let s2;
  let e2;
  let c2 = noop;
  const { g: r2, v: i2, p: l2 } = n2 || {};
  const a2 = function invokeFunctionToDebounce(n3) {
    c2();
    h(o2);
    o2 = s2 = void 0;
    c2 = noop;
    t2.apply(this, n3);
  };
  const mergeParms = (t3) => l2 && s2 ? l2(s2, t3) : t3;
  const flush = () => {
    if (c2 !== noop) {
      a2(mergeParms(e2) || e2);
    }
  };
  const u2 = function debouncedFn() {
    const t3 = from(arguments);
    const n3 = isFunction(r2) ? r2() : r2;
    const l3 = isNumber(n3) && n3 >= 0;
    if (l3) {
      const r3 = isFunction(i2) ? i2() : i2;
      const l4 = isNumber(r3) && r3 >= 0;
      const u3 = n3 > 0 ? _ : f;
      const g = n3 > 0 ? h : d;
      const v2 = mergeParms(t3);
      const w2 = v2 || t3;
      const p2 = a2.bind(0, w2);
      c2();
      const b2 = u3(p2, n3);
      c2 = () => g(b2);
      if (l4 && !o2) {
        o2 = _(flush, r3);
      }
      s2 = e2 = w2;
    } else {
      a2(t3);
    }
  };
  u2.m = flush;
  return u2;
};
const v = /[^\x20\t\r\n\f]+/g;
const classListAction = (t2, n2, o2) => {
  const s2 = t2 && t2.classList;
  let e2;
  let c2 = 0;
  let r2 = false;
  if (s2 && n2 && isString(n2)) {
    const t3 = n2.match(v) || [];
    r2 = t3.length > 0;
    while (e2 = t3[c2++]) {
      r2 = !!o2(s2, e2) && r2;
    }
  }
  return r2;
};
const hasClass = (t2, n2) => classListAction(t2, n2, (t3, n3) => t3.contains(n3));
const removeClass = (t2, n2) => {
  classListAction(t2, n2, (t3, n3) => t3.remove(n3));
};
const addClass = (t2, n2) => {
  classListAction(t2, n2, (t3, n3) => t3.add(n3));
  return removeClass.bind(0, t2, n2);
};
const w = {
  opacity: 1,
  zindex: 1
};
const parseToZeroOrNumber = (t2, n2) => {
  const o2 = n2 ? parseFloat(t2) : parseInt(t2, 10);
  return o2 === o2 ? o2 : 0;
};
const adaptCSSVal = (t2, n2) => !w[t2.toLowerCase()] && isNumber(n2) ? `${n2}px` : n2;
const getCSSVal = (t2, n2, o2) => null != n2 ? n2[o2] || n2.getPropertyValue(o2) : t2.style[o2];
const setCSSVal = (t2, n2, o2) => {
  try {
    const { style: s2 } = t2;
    if (!isUndefined(s2[n2])) {
      s2[n2] = adaptCSSVal(n2, o2);
    } else {
      s2.setProperty(n2, o2);
    }
  } catch (s2) {
  }
};
const directionIsRTL = (t2) => "rtl" === style(t2, "direction");
const topRightBottomLeft = (t2, n2, o2) => {
  const s2 = n2 ? `${n2}-` : "";
  const e2 = o2 ? `-${o2}` : "";
  const c2 = `${s2}top${e2}`;
  const r2 = `${s2}right${e2}`;
  const i2 = `${s2}bottom${e2}`;
  const l2 = `${s2}left${e2}`;
  const a2 = style(t2, [c2, r2, i2, l2]);
  return {
    t: parseToZeroOrNumber(a2[c2], true),
    r: parseToZeroOrNumber(a2[r2], true),
    b: parseToZeroOrNumber(a2[i2], true),
    l: parseToZeroOrNumber(a2[l2], true)
  };
};
const { round: p } = Math;
const b = {
  w: 0,
  h: 0
};
const offsetSize = (t2) => t2 ? {
  w: t2.offsetWidth,
  h: t2.offsetHeight
} : b;
const clientSize = (t2) => t2 ? {
  w: t2.clientWidth,
  h: t2.clientHeight
} : b;
const scrollSize = (t2) => t2 ? {
  w: t2.scrollWidth,
  h: t2.scrollHeight
} : b;
const fractionalSize = (t2) => {
  const n2 = parseFloat(style(t2, "height")) || 0;
  const o2 = parseFloat(style(t2, "width")) || 0;
  return {
    w: o2 - p(o2),
    h: n2 - p(n2)
  };
};
const getBoundingClientRect = (t2) => t2.getBoundingClientRect();
let m;
const supportPassiveEvents = () => {
  if (isUndefined(m)) {
    m = false;
    try {
      window.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get() {
          m = true;
        }
      }));
    } catch (t2) {
    }
  }
  return m;
};
const splitEventNames = (t2) => t2.split(" ");
const off = (t2, n2, o2, s2) => {
  each(splitEventNames(n2), (n3) => {
    t2.removeEventListener(n3, o2, s2);
  });
};
const on = (t2, n2, o2, s2) => {
  var e2;
  const c2 = supportPassiveEvents();
  const r2 = null != (e2 = c2 && s2 && s2.S) ? e2 : c2;
  const i2 = s2 && s2.$ || false;
  const l2 = s2 && s2.C || false;
  const a2 = [];
  const u2 = c2 ? {
    passive: r2,
    capture: i2
  } : i2;
  each(splitEventNames(n2), (n3) => {
    const s3 = l2 ? (e3) => {
      t2.removeEventListener(n3, s3, i2);
      o2 && o2(e3);
    } : o2;
    push(a2, off.bind(null, t2, n3, s3, i2));
    t2.addEventListener(n3, s3, u2);
  });
  return runEachAndClear.bind(0, a2);
};
const stopPropagation = (t2) => t2.stopPropagation();
const preventDefault = (t2) => t2.preventDefault();
const y = {
  x: 0,
  y: 0
};
const absoluteCoordinates = (t2) => {
  const n2 = t2 ? getBoundingClientRect(t2) : 0;
  return n2 ? {
    x: n2.left + window.pageYOffset,
    y: n2.top + window.pageXOffset
  } : y;
};
const manageListener = (t2, n2) => {
  each(isArray(n2) ? n2 : [n2], t2);
};
const createEventListenerHub = (t2) => {
  const n2 = /* @__PURE__ */ new Map();
  const removeEvent = (t3, o2) => {
    if (t3) {
      const s2 = n2.get(t3);
      manageListener((t4) => {
        if (s2) {
          s2[t4 ? "delete" : "clear"](t4);
        }
      }, o2);
    } else {
      n2.forEach((t4) => {
        t4.clear();
      });
      n2.clear();
    }
  };
  const addEvent = (t3, o2) => {
    if (isString(t3)) {
      const s3 = n2.get(t3) || /* @__PURE__ */ new Set();
      n2.set(t3, s3);
      manageListener((t4) => {
        isFunction(t4) && s3.add(t4);
      }, o2);
      return removeEvent.bind(0, t3, o2);
    }
    if (isBoolean(o2) && o2) {
      removeEvent();
    }
    const s2 = keys(t3);
    const e2 = [];
    each(s2, (n3) => {
      const o3 = t3[n3];
      o3 && push(e2, addEvent(n3, o3));
    });
    return runEachAndClear.bind(0, e2);
  };
  const triggerEvent = (t3, o2) => {
    const s2 = n2.get(t3);
    each(from(s2), (t4) => {
      if (o2 && !isEmptyArray(o2)) {
        t4.apply(0, o2);
      } else {
        t4();
      }
    });
  };
  addEvent(t2 || {});
  return [addEvent, removeEvent, triggerEvent];
};
const opsStringify = (t2) => JSON.stringify(t2, (t3, n2) => {
  if (isFunction(n2)) {
    throw new Error();
  }
  return n2;
});
const S = {
  paddingAbsolute: false,
  showNativeOverlaidScrollbars: false,
  update: {
    elementEvents: [["img", "load"]],
    debounce: [0, 33],
    attributes: null,
    ignoreMutation: null
  },
  overflow: {
    x: "scroll",
    y: "scroll"
  },
  scrollbars: {
    theme: "os-theme-dark",
    visibility: "auto",
    autoHide: "never",
    autoHideDelay: 1300,
    dragScroll: true,
    clickScroll: false,
    pointers: ["mouse", "touch", "pen"]
  }
};
const getOptionsDiff = (t2, n2) => {
  const o2 = {};
  const s2 = keys(n2).concat(keys(t2));
  each(s2, (s3) => {
    const e2 = t2[s3];
    const c2 = n2[s3];
    if (isObject(e2) && isObject(c2)) {
      assignDeep(o2[s3] = {}, getOptionsDiff(e2, c2));
      if (isEmptyObject(o2[s3])) {
        delete o2[s3];
      }
    } else if (hasOwnProperty(n2, s3) && c2 !== e2) {
      let t3 = true;
      if (isArray(e2) || isArray(c2)) {
        try {
          if (opsStringify(e2) === opsStringify(c2)) {
            t3 = false;
          }
        } catch (r2) {
        }
      }
      if (t3) {
        o2[s3] = c2;
      }
    }
  });
  return o2;
};
const x = "os-environment";
const $ = `${x}-flexbox-glue`;
const C = `${$}-max`;
const O = "data-overlayscrollbars";
const z = "data-overlayscrollbars-initialize";
const T = `${O}-overflow-x`;
const E = `${O}-overflow-y`;
const I = "overflowVisible";
const A = "scrollbarHidden";
const L = "updating";
const H = "os-padding";
const M = "os-viewport";
const P = `${M}-arrange`;
const D = "os-content";
const R = `${M}-scrollbar-hidden`;
const k = `os-overflow-visible`;
const B = "os-size-observer";
const V = `${B}-appear`;
const Y = `${B}-listener`;
const F = "os-trinsic-observer";
const G = "os-theme-none";
const X = "os-scrollbar";
const U = `${X}-rtl`;
const W = `${X}-horizontal`;
const Z = `${X}-vertical`;
const J = `${X}-track`;
const K = `${X}-handle`;
const Q = `${X}-visible`;
const tt = `${X}-cornerless`;
const nt = `${X}-transitionless`;
const ot = `${X}-interaction`;
const st = `${X}-unusable`;
const et = `${X}-auto-hidden`;
const ct = `${X}-wheel`;
const rt = `${J}-interactive`;
const it = `${K}-interactive`;
const lt = {};
const getPlugins = () => lt;
const addPlugin = (t2) => {
  const n2 = [];
  each(isArray(t2) ? t2 : [t2], (t3) => {
    const o2 = keys(t3);
    each(o2, (o3) => {
      push(n2, lt[o3] = t3[o3]);
    });
  });
  return n2;
};
const vt = "__osOptionsValidationPlugin";
const bt = "__osSizeObserverPlugin";
const $t = "__osScrollbarsHidingPlugin";
const Ot = "__osClickScrollPlugin";
let Tt;
const getNativeScrollbarSize = (t2, n2, o2, s2) => {
  appendChildren(t2, n2);
  const e2 = clientSize(n2);
  const c2 = offsetSize(n2);
  const r2 = fractionalSize(o2);
  s2 && removeElements(n2);
  return {
    x: c2.h - e2.h + r2.h,
    y: c2.w - e2.w + r2.w
  };
};
const getNativeScrollbarsHiding = (t2) => {
  let n2 = false;
  const o2 = addClass(t2, R);
  try {
    n2 = "none" === style(t2, cssProperty("scrollbar-width")) || "none" === window.getComputedStyle(t2, "::-webkit-scrollbar").getPropertyValue("display");
  } catch (s2) {
  }
  o2();
  return n2;
};
const getRtlScrollBehavior = (t2, n2) => {
  const o2 = "hidden";
  style(t2, {
    overflowX: o2,
    overflowY: o2,
    direction: "rtl"
  });
  scrollLeft(t2, 0);
  const s2 = absoluteCoordinates(t2);
  const e2 = absoluteCoordinates(n2);
  scrollLeft(t2, -999);
  const c2 = absoluteCoordinates(n2);
  return {
    i: s2.x === e2.x,
    n: e2.x !== c2.x
  };
};
const getFlexboxGlue = (t2, n2) => {
  const o2 = addClass(t2, $);
  const s2 = getBoundingClientRect(t2);
  const e2 = getBoundingClientRect(n2);
  const c2 = equalBCRWH(e2, s2, true);
  const r2 = addClass(t2, C);
  const i2 = getBoundingClientRect(t2);
  const l2 = getBoundingClientRect(n2);
  const a2 = equalBCRWH(l2, i2, true);
  o2();
  r2();
  return c2 && a2;
};
const createEnvironment = () => {
  const { body: t2 } = document;
  const n2 = createDOM(`<div class="${x}"><div></div></div>`);
  const o2 = n2[0];
  const s2 = o2.firstChild;
  const [e2, , c2] = createEventListenerHub();
  const [r2, i2] = createCache({
    o: getNativeScrollbarSize(t2, o2, s2),
    u: equalXY
  }, getNativeScrollbarSize.bind(0, t2, o2, s2, true));
  const [l2] = i2();
  const a2 = getNativeScrollbarsHiding(o2);
  const u2 = {
    x: 0 === l2.x,
    y: 0 === l2.y
  };
  const d2 = {
    elements: {
      host: null,
      padding: !a2,
      viewport: (t3) => a2 && t3 === t3.ownerDocument.body && t3,
      content: false
    },
    scrollbars: {
      slot: true
    },
    cancel: {
      nativeScrollbarsOverlaid: false,
      body: null
    }
  };
  const f2 = assignDeep({}, S);
  const _2 = assignDeep.bind(0, {}, f2);
  const h2 = assignDeep.bind(0, {}, d2);
  const g = {
    k: l2,
    A: u2,
    I: a2,
    L: "-1" === style(o2, "zIndex"),
    B: getRtlScrollBehavior(o2, s2),
    V: getFlexboxGlue(o2, s2),
    Y: e2.bind(0, "z"),
    j: e2.bind(0, "r"),
    N: h2,
    q: (t3) => assignDeep(d2, t3) && h2(),
    F: _2,
    G: (t3) => assignDeep(f2, t3) && _2(),
    X: assignDeep({}, d2),
    U: assignDeep({}, f2)
  };
  const v2 = window.addEventListener;
  const w2 = debounce((t3) => c2(t3 ? "z" : "r"), {
    g: 33,
    v: 99
  });
  removeAttr(o2, "style");
  removeElements(o2);
  v2("resize", w2.bind(0, false));
  if (!a2 && (!u2.x || !u2.y)) {
    let t3;
    v2("resize", () => {
      const n3 = getPlugins()[$t];
      t3 = t3 || n3 && n3.R();
      t3 && t3(g, r2, w2.bind(0, true));
    });
  }
  return g;
};
const getEnvironment = () => {
  if (!Tt) {
    Tt = createEnvironment();
  }
  return Tt;
};
const resolveInitialization = (t2, n2) => isFunction(n2) ? n2.apply(0, t2) : n2;
const staticInitializationElement = (t2, n2, o2, s2) => {
  const e2 = isUndefined(s2) ? o2 : s2;
  const c2 = resolveInitialization(t2, e2);
  return c2 || n2.apply(0, t2);
};
const dynamicInitializationElement = (t2, n2, o2, s2) => {
  const e2 = isUndefined(s2) ? o2 : s2;
  const c2 = resolveInitialization(t2, e2);
  return !!c2 && (isHTMLElement(c2) ? c2 : n2.apply(0, t2));
};
const cancelInitialization = (t2, n2, o2) => {
  const { nativeScrollbarsOverlaid: s2, body: e2 } = o2 || {};
  const { A: c2, I: r2 } = getEnvironment();
  const { nativeScrollbarsOverlaid: i2, body: l2 } = n2;
  const a2 = null != s2 ? s2 : i2;
  const u2 = isUndefined(e2) ? l2 : e2;
  const d2 = (c2.x || c2.y) && a2;
  const f2 = t2 && (isNull(u2) ? !r2 : u2);
  return !!d2 || !!f2;
};
const Et = /* @__PURE__ */ new WeakMap();
const addInstance = (t2, n2) => {
  Et.set(t2, n2);
};
const removeInstance = (t2) => {
  Et.delete(t2);
};
const getInstance = (t2) => Et.get(t2);
const getPropByPath = (t2, n2) => t2 ? n2.split(".").reduce((t3, n3) => t3 && hasOwnProperty(t3, n3) ? t3[n3] : void 0, t2) : void 0;
const createOptionCheck = (t2, n2, o2) => (s2) => [getPropByPath(t2, s2), o2 || void 0 !== getPropByPath(n2, s2)];
const createState = (t2) => {
  let n2 = t2;
  return [() => n2, (t3) => {
    n2 = assignDeep({}, n2, t3);
  }];
};
const It = "tabindex";
const At = createDiv.bind(0, "");
const unwrap = (t2) => {
  appendChildren(parent(t2), contents(t2));
  removeElements(t2);
};
const createStructureSetupElements = (t2) => {
  const n2 = getEnvironment();
  const { N: o2, I: s2 } = n2;
  const e2 = getPlugins()[$t];
  const c2 = e2 && e2.T;
  const { elements: r2 } = o2();
  const { host: i2, padding: l2, viewport: a2, content: u2 } = r2;
  const d2 = isHTMLElement(t2);
  const f2 = d2 ? {} : t2;
  const { elements: _2 } = f2;
  const { host: h2, padding: g, viewport: v2, content: w2 } = _2 || {};
  const p2 = d2 ? t2 : f2.target;
  const b2 = is(p2, "textarea");
  const m2 = p2.ownerDocument;
  const y2 = m2.documentElement;
  const S2 = p2 === m2.body;
  const x2 = m2.defaultView;
  const $2 = staticInitializationElement.bind(0, [p2]);
  const C2 = dynamicInitializationElement.bind(0, [p2]);
  const I2 = resolveInitialization.bind(0, [p2]);
  const A2 = $2.bind(0, At, a2);
  const L2 = C2.bind(0, At, u2);
  const P2 = A2(v2);
  const k2 = P2 === p2;
  const B2 = k2 && S2;
  const V2 = !k2 && L2(w2);
  const Y2 = !k2 && isHTMLElement(P2) && P2 === V2;
  const j = Y2 && !!I2(u2);
  const N = j ? A2() : P2;
  const q = j ? V2 : L2();
  const F2 = Y2 ? N : P2;
  const G2 = B2 ? y2 : F2;
  const X2 = b2 ? $2(At, i2, h2) : p2;
  const U2 = B2 ? G2 : X2;
  const W2 = Y2 ? q : V2;
  const Z2 = m2.activeElement;
  const J2 = !k2 && x2.top === x2 && Z2 === p2;
  const K2 = {
    W: p2,
    Z: U2,
    J: G2,
    K: !k2 && C2(At, l2, g),
    tt: W2,
    nt: !k2 && !s2 && c2 && c2(n2),
    ot: B2 ? y2 : G2,
    st: B2 ? m2 : G2,
    et: x2,
    ct: m2,
    rt: b2,
    it: S2,
    lt: d2,
    ut: k2,
    dt: Y2,
    ft: (t3, n3) => k2 ? hasAttrClass(G2, O, n3) : hasClass(G2, t3),
    _t: (t3, n3, o3) => k2 ? attrClass(G2, O, n3, o3) : (o3 ? addClass : removeClass)(G2, t3)
  };
  const Q2 = keys(K2).reduce((t3, n3) => {
    const o3 = K2[n3];
    return push(t3, o3 && !parent(o3) ? o3 : false);
  }, []);
  const elementIsGenerated = (t3) => t3 ? indexOf(Q2, t3) > -1 : null;
  const { W: tt2, Z: nt2, K: ot2, J: st2, tt: et2, nt: ct2 } = K2;
  const rt2 = [() => {
    removeAttr(nt2, O);
    removeAttr(nt2, z);
    removeAttr(tt2, z);
    if (S2) {
      removeAttr(y2, O);
      removeAttr(y2, z);
    }
  }];
  const it2 = b2 && elementIsGenerated(nt2);
  let lt2 = b2 ? tt2 : contents([et2, st2, ot2, nt2, tt2].find((t3) => false === elementIsGenerated(t3)));
  const at = B2 ? tt2 : et2 || st2;
  const appendElements = () => {
    attr(nt2, O, k2 ? "viewport" : "host");
    const t3 = addClass(ot2, H);
    const n3 = addClass(st2, !k2 && M);
    const o3 = addClass(et2, D);
    const e3 = S2 && !k2 ? addClass(parent(p2), R) : noop;
    if (it2) {
      insertAfter(tt2, nt2);
      push(rt2, () => {
        insertAfter(nt2, tt2);
        removeElements(nt2);
      });
    }
    appendChildren(at, lt2);
    appendChildren(nt2, ot2);
    appendChildren(ot2 || nt2, !k2 && st2);
    appendChildren(st2, et2);
    push(rt2, () => {
      e3();
      removeAttr(st2, T);
      removeAttr(st2, E);
      if (elementIsGenerated(et2)) {
        unwrap(et2);
      }
      if (elementIsGenerated(st2)) {
        unwrap(st2);
      }
      if (elementIsGenerated(ot2)) {
        unwrap(ot2);
      }
      t3();
      n3();
      o3();
    });
    if (s2 && !k2) {
      push(rt2, removeClass.bind(0, st2, R));
    }
    if (ct2) {
      insertBefore(st2, ct2);
      push(rt2, removeElements.bind(0, ct2));
    }
    if (J2) {
      const t4 = attr(st2, It);
      attr(st2, It, "-1");
      st2.focus();
      const revertViewportTabIndex = () => t4 ? attr(st2, It, t4) : removeAttr(st2, It);
      const n4 = on(m2, "pointerdown keydown", () => {
        revertViewportTabIndex();
        n4();
      });
      push(rt2, [revertViewportTabIndex, n4]);
    } else if (Z2 && Z2.focus) {
      Z2.focus();
    }
    lt2 = 0;
  };
  return [K2, appendElements, runEachAndClear.bind(0, rt2)];
};
const createTrinsicUpdateSegment = (t2, n2) => {
  const { tt: o2 } = t2;
  const [s2] = n2;
  return (t3) => {
    const { V: n3 } = getEnvironment();
    const { ht: e2 } = s2();
    const { gt: c2 } = t3;
    const r2 = (o2 || !n3) && c2;
    if (r2) {
      style(o2, {
        height: e2 ? "" : "100%"
      });
    }
    return {
      vt: r2,
      wt: r2
    };
  };
};
const createPaddingUpdateSegment = (t2, n2) => {
  const [o2, s2] = n2;
  const { Z: e2, K: c2, J: r2, ut: i2 } = t2;
  const [l2, a2] = createCache({
    u: equalTRBL,
    o: topRightBottomLeft()
  }, topRightBottomLeft.bind(0, e2, "padding", ""));
  return (t3, n3, e3) => {
    let [u2, d2] = a2(e3);
    const { I: f2, V: _2 } = getEnvironment();
    const { bt: h2 } = o2();
    const { vt: g, wt: v2, yt: w2 } = t3;
    const [p2, b2] = n3("paddingAbsolute");
    const m2 = !_2 && v2;
    if (g || d2 || m2) {
      [u2, d2] = l2(e3);
    }
    const y2 = !i2 && (b2 || w2 || d2);
    if (y2) {
      const t4 = !p2 || !c2 && !f2;
      const n4 = u2.r + u2.l;
      const o3 = u2.t + u2.b;
      const e4 = {
        marginRight: t4 && !h2 ? -n4 : 0,
        marginBottom: t4 ? -o3 : 0,
        marginLeft: t4 && h2 ? -n4 : 0,
        top: t4 ? -u2.t : 0,
        right: t4 ? h2 ? -u2.r : "auto" : 0,
        left: t4 ? h2 ? "auto" : -u2.l : 0,
        width: t4 ? `calc(100% + ${n4}px)` : ""
      };
      const i3 = {
        paddingTop: t4 ? u2.t : 0,
        paddingRight: t4 ? u2.r : 0,
        paddingBottom: t4 ? u2.b : 0,
        paddingLeft: t4 ? u2.l : 0
      };
      style(c2 || r2, e4);
      style(r2, i3);
      s2({
        K: u2,
        St: !t4,
        M: c2 ? i3 : assignDeep({}, e4, i3)
      });
    }
    return {
      xt: y2
    };
  };
};
const { max: Lt } = Math;
const Ht = Lt.bind(0, 0);
const Mt = "visible";
const Pt = "hidden";
const Dt = 42;
const Rt = {
  u: equalWH,
  o: {
    w: 0,
    h: 0
  }
};
const kt = {
  u: equalXY,
  o: {
    x: Pt,
    y: Pt
  }
};
const getOverflowAmount = (t2, n2) => {
  const o2 = window.devicePixelRatio % 1 !== 0 ? 1 : 0;
  const s2 = {
    w: Ht(t2.w - n2.w),
    h: Ht(t2.h - n2.h)
  };
  return {
    w: s2.w > o2 ? s2.w : 0,
    h: s2.h > o2 ? s2.h : 0
  };
};
const conditionalClass = (t2, n2, o2) => o2 ? addClass(t2, n2) : removeClass(t2, n2);
const overflowIsVisible = (t2) => 0 === t2.indexOf(Mt);
const createOverflowUpdateSegment = (t2, n2) => {
  const [o2, s2] = n2;
  const { Z: e2, K: c2, J: r2, nt: i2, ut: l2, _t: a2, it: u2, et: d2 } = t2;
  const { k: f2, V: _2, I: h2, A: g } = getEnvironment();
  const v2 = getPlugins()[$t];
  const w2 = !l2 && !h2 && (g.x || g.y);
  const p2 = u2 && l2;
  const [b2, m2] = createCache(Rt, fractionalSize.bind(0, r2));
  const [y2, S2] = createCache(Rt, scrollSize.bind(0, r2));
  const [x2, $2] = createCache(Rt);
  const [C2, z2] = createCache(Rt);
  const [L2] = createCache(kt);
  const fixFlexboxGlue = (t3, n3) => {
    style(r2, {
      height: ""
    });
    if (n3) {
      const { St: n4, K: s3 } = o2();
      const { $t: c3, P: i3 } = t3;
      const l3 = fractionalSize(e2);
      const a3 = clientSize(e2);
      const u3 = "content-box" === style(r2, "boxSizing");
      const d3 = n4 || u3 ? s3.b + s3.t : 0;
      const f3 = !(g.x && u3);
      style(r2, {
        height: a3.h + l3.h + (c3.x && f3 ? i3.x : 0) - d3
      });
    }
  };
  const getViewportOverflowState = (t3, n3) => {
    const o3 = !h2 && !t3 ? Dt : 0;
    const getStatePerAxis = (t4, s4, e4) => {
      const c4 = style(r2, t4);
      const i4 = n3 ? n3[t4] : c4;
      const l4 = "scroll" === i4;
      const a4 = s4 ? o3 : e4;
      const u4 = l4 && !h2 ? a4 : 0;
      const d4 = s4 && !!o3;
      return [c4, l4, u4, d4];
    };
    const [s3, e3, c3, i3] = getStatePerAxis("overflowX", g.x, f2.x);
    const [l3, a3, u3, d3] = getStatePerAxis("overflowY", g.y, f2.y);
    return {
      Ct: {
        x: s3,
        y: l3
      },
      $t: {
        x: e3,
        y: a3
      },
      P: {
        x: c3,
        y: u3
      },
      D: {
        x: i3,
        y: d3
      }
    };
  };
  const setViewportOverflowState = (t3, n3, o3, s3) => {
    const setAxisOverflowStyle = (t4, n4) => {
      const o4 = overflowIsVisible(t4);
      const s4 = n4 && o4 && t4.replace(`${Mt}-`, "") || "";
      return [n4 && !o4 ? t4 : "", overflowIsVisible(s4) ? "hidden" : s4];
    };
    const [e3, c3] = setAxisOverflowStyle(o3.x, n3.x);
    const [r3, i3] = setAxisOverflowStyle(o3.y, n3.y);
    s3.overflowX = c3 && r3 ? c3 : e3;
    s3.overflowY = i3 && e3 ? i3 : r3;
    return getViewportOverflowState(t3, s3);
  };
  const hideNativeScrollbars = (t3, n3, s3, e3) => {
    const { P: c3, D: r3 } = t3;
    const { x: i3, y: l3 } = r3;
    const { x: a3, y: u3 } = c3;
    const { M: d3 } = o2();
    const f3 = n3 ? "marginLeft" : "marginRight";
    const _3 = n3 ? "paddingLeft" : "paddingRight";
    const h3 = d3[f3];
    const g2 = d3.marginBottom;
    const v3 = d3[_3];
    const w3 = d3.paddingBottom;
    e3.width = `calc(100% + ${u3 + -1 * h3}px)`;
    e3[f3] = -u3 + h3;
    e3.marginBottom = -a3 + g2;
    if (s3) {
      e3[_3] = v3 + (l3 ? u3 : 0);
      e3.paddingBottom = w3 + (i3 ? a3 : 0);
    }
  };
  const [H2, M2] = v2 ? v2.H(w2, _2, r2, i2, o2, getViewportOverflowState, hideNativeScrollbars) : [() => w2, () => [noop]];
  return (t3, n3, i3) => {
    const { vt: u3, Ot: f3, wt: v3, xt: w3, gt: P2, yt: D2 } = t3;
    const { ht: B2, bt: V2 } = o2();
    const [Y2, j] = n3("showNativeOverlaidScrollbars");
    const [N, q] = n3("overflow");
    const F2 = Y2 && g.x && g.y;
    const G2 = !l2 && !_2 && (u3 || v3 || f3 || j || P2);
    const X2 = overflowIsVisible(N.x);
    const U2 = overflowIsVisible(N.y);
    const W2 = X2 || U2;
    let Z2 = m2(i3);
    let J2 = S2(i3);
    let K2 = $2(i3);
    let Q2 = z2(i3);
    let tt2;
    if (j && h2) {
      a2(R, A, !F2);
    }
    if (G2) {
      tt2 = getViewportOverflowState(F2);
      fixFlexboxGlue(tt2, B2);
    }
    if (u3 || w3 || v3 || D2 || j) {
      if (W2) {
        a2(k, I, false);
      }
      const [t4, n4] = M2(F2, V2, tt2);
      const [o3, s3] = Z2 = b2(i3);
      const [e3, c3] = J2 = y2(i3);
      const l3 = clientSize(r2);
      let u4 = e3;
      let f4 = l3;
      t4();
      if ((c3 || s3 || j) && n4 && !F2 && H2(n4, e3, o3, V2)) {
        f4 = clientSize(r2);
        u4 = scrollSize(r2);
      }
      const _3 = {
        w: Ht(Lt(e3.w, u4.w) + o3.w),
        h: Ht(Lt(e3.h, u4.h) + o3.h)
      };
      const h3 = {
        w: Ht((p2 ? d2.innerWidth : f4.w + Ht(l3.w - e3.w)) + o3.w),
        h: Ht((p2 ? d2.innerHeight + o3.h : f4.h + Ht(l3.h - e3.h)) + o3.h)
      };
      Q2 = C2(h3);
      K2 = x2(getOverflowAmount(_3, h3), i3);
    }
    const [nt2, ot2] = Q2;
    const [st2, et2] = K2;
    const [ct2, rt2] = J2;
    const [it2, lt2] = Z2;
    const at = {
      x: st2.w > 0,
      y: st2.h > 0
    };
    const ut = X2 && U2 && (at.x || at.y) || X2 && at.x && !at.y || U2 && at.y && !at.x;
    if (w3 || D2 || lt2 || rt2 || ot2 || et2 || q || j || G2) {
      const t4 = {
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        width: "",
        overflowY: "",
        overflowX: ""
      };
      const n4 = setViewportOverflowState(F2, at, N, t4);
      const o3 = H2(n4, ct2, it2, V2);
      if (!l2) {
        hideNativeScrollbars(n4, V2, o3, t4);
      }
      if (G2) {
        fixFlexboxGlue(n4, B2);
      }
      if (l2) {
        attr(e2, T, t4.overflowX);
        attr(e2, E, t4.overflowY);
      } else {
        style(r2, t4);
      }
    }
    attrClass(e2, O, I, ut);
    conditionalClass(c2, k, ut);
    !l2 && conditionalClass(r2, k, W2);
    const [dt, ft] = L2(getViewportOverflowState(F2).Ct);
    s2({
      Ct: dt,
      zt: {
        x: nt2.w,
        y: nt2.h
      },
      Tt: {
        x: st2.w,
        y: st2.h
      },
      Et: at
    });
    return {
      It: ft,
      At: ot2,
      Lt: et2
    };
  };
};
const prepareUpdateHints = (t2, n2, o2) => {
  const s2 = {};
  const e2 = n2 || {};
  const c2 = keys(t2).concat(keys(e2));
  each(c2, (n3) => {
    const c3 = t2[n3];
    const r2 = e2[n3];
    s2[n3] = !!(o2 || c3 || r2);
  });
  return s2;
};
const createStructureSetupUpdate = (t2, n2) => {
  const { W: o2, J: s2, _t: e2, ut: c2 } = t2;
  const { I: r2, A: i2, V: l2 } = getEnvironment();
  const a2 = !r2 && (i2.x || i2.y);
  const u2 = [createTrinsicUpdateSegment(t2, n2), createPaddingUpdateSegment(t2, n2), createOverflowUpdateSegment(t2, n2)];
  return (t3, n3, r3) => {
    const i3 = prepareUpdateHints(assignDeep({
      vt: false,
      xt: false,
      yt: false,
      gt: false,
      At: false,
      Lt: false,
      It: false,
      Ot: false,
      wt: false
    }, n3), {}, r3);
    const d2 = a2 || !l2;
    const f2 = d2 && scrollLeft(s2);
    const _2 = d2 && scrollTop(s2);
    e2("", L, true);
    let h2 = i3;
    each(u2, (n4) => {
      h2 = prepareUpdateHints(h2, n4(h2, t3, !!r3) || {}, r3);
    });
    scrollLeft(s2, f2);
    scrollTop(s2, _2);
    e2("", L);
    if (!c2) {
      scrollLeft(o2, 0);
      scrollTop(o2, 0);
    }
    return h2;
  };
};
const createEventContentChange = (t2, n2, o2) => {
  let s2;
  let e2 = false;
  const destroy = () => {
    e2 = true;
  };
  const updateElements = (c2) => {
    if (o2) {
      const r2 = o2.reduce((n3, o3) => {
        if (o3) {
          const [s3, e3] = o3;
          const r3 = e3 && s3 && (c2 ? c2(s3) : find(s3, t2));
          if (r3 && r3.length && e3 && isString(e3)) {
            push(n3, [r3, e3.trim()], true);
          }
        }
        return n3;
      }, []);
      each(r2, (o3) => each(o3[0], (c3) => {
        const r3 = o3[1];
        const i2 = s2.get(c3) || [];
        const l2 = t2.contains(c3);
        if (l2) {
          const t3 = on(c3, r3, (o4) => {
            if (e2) {
              t3();
              s2.delete(c3);
            } else {
              n2(o4);
            }
          });
          s2.set(c3, push(i2, t3));
        } else {
          runEachAndClear(i2);
          s2.delete(c3);
        }
      }));
    }
  };
  if (o2) {
    s2 = /* @__PURE__ */ new WeakMap();
    updateElements();
  }
  return [destroy, updateElements];
};
const createDOMObserver = (t2, n2, o2, s2) => {
  let e2 = false;
  const { Ht: c2, Mt: r2, Pt: i2, Dt: a2, Rt: u2, kt: d2 } = s2 || {};
  const f2 = debounce(() => {
    if (e2) {
      o2(true);
    }
  }, {
    g: 33,
    v: 99
  });
  const [_2, h2] = createEventContentChange(t2, f2, i2);
  const g = c2 || [];
  const v2 = r2 || [];
  const w2 = g.concat(v2);
  const observerCallback = (e3, c3) => {
    const r3 = u2 || noop;
    const i3 = d2 || noop;
    const l2 = /* @__PURE__ */ new Set();
    const f3 = /* @__PURE__ */ new Set();
    let _3 = false;
    let g2 = false;
    each(e3, (o3) => {
      const { attributeName: e4, target: c4, type: u3, oldValue: d3, addedNodes: h3, removedNodes: w3 } = o3;
      const p3 = "attributes" === u3;
      const b2 = "childList" === u3;
      const m2 = t2 === c4;
      const y2 = p3 && isString(e4) ? attr(c4, e4) : 0;
      const S2 = 0 !== y2 && d3 !== y2;
      const x2 = indexOf(v2, e4) > -1 && S2;
      if (n2 && (b2 || !m2)) {
        const n3 = !p3;
        const u4 = p3 && S2;
        const f4 = u4 && a2 && is(c4, a2);
        const _4 = f4 ? !r3(c4, e4, d3, y2) : n3 || u4;
        const v3 = _4 && !i3(o3, !!f4, t2, s2);
        each(h3, (t3) => l2.add(t3));
        each(w3, (t3) => l2.add(t3));
        g2 = g2 || v3;
      }
      if (!n2 && m2 && S2 && !r3(c4, e4, d3, y2)) {
        f3.add(e4);
        _3 = _3 || x2;
      }
    });
    if (l2.size > 0) {
      h2((t3) => from(l2).reduce((n3, o3) => {
        push(n3, find(t3, o3));
        return is(o3, t3) ? push(n3, o3) : n3;
      }, []));
    }
    if (n2) {
      !c3 && g2 && o2(false);
      return [false];
    }
    if (f3.size > 0 || _3) {
      const t3 = [from(f3), _3];
      !c3 && o2.apply(0, t3);
      return t3;
    }
  };
  const p2 = new l((t3) => observerCallback(t3));
  p2.observe(t2, {
    attributes: true,
    attributeOldValue: true,
    attributeFilter: w2,
    subtree: n2,
    childList: n2,
    characterData: n2
  });
  e2 = true;
  return [() => {
    if (e2) {
      _2();
      p2.disconnect();
      e2 = false;
    }
  }, () => {
    if (e2) {
      f2.m();
      const t3 = p2.takeRecords();
      return !isEmptyArray(t3) && observerCallback(t3, true);
    }
  }];
};
const Bt = 3333333;
const domRectHasDimensions = (t2) => t2 && (t2.height || t2.width);
const createSizeObserver = (t2, n2, o2) => {
  const { Bt: s2 = false, Vt: e2 = false } = o2 || {};
  const c2 = getPlugins()[bt];
  const { B: r2 } = getEnvironment();
  const i2 = createDOM(`<div class="${B}"><div class="${Y}"></div></div>`);
  const l2 = i2[0];
  const a2 = l2.firstChild;
  const d2 = directionIsRTL.bind(0, t2);
  const [f2] = createCache({
    o: void 0,
    _: true,
    u: (t3, n3) => !(!t3 || !domRectHasDimensions(t3) && domRectHasDimensions(n3))
  });
  const onSizeChangedCallbackProxy = (t3) => {
    const o3 = isArray(t3) && t3.length > 0 && isObject(t3[0]);
    const e3 = !o3 && isBoolean(t3[0]);
    let c3 = false;
    let i3 = false;
    let a3 = true;
    if (o3) {
      const [n3, , o4] = f2(t3.pop().contentRect);
      const s3 = domRectHasDimensions(n3);
      const e4 = domRectHasDimensions(o4);
      c3 = !o4 || !s3;
      i3 = !e4 && s3;
      a3 = !c3;
    } else if (e3) {
      [, a3] = t3;
    } else {
      i3 = true === t3;
    }
    if (s2 && a3) {
      const n3 = e3 ? t3[0] : directionIsRTL(l2);
      scrollLeft(l2, n3 ? r2.n ? -Bt : r2.i ? 0 : Bt : Bt);
      scrollTop(l2, Bt);
    }
    if (!c3) {
      n2({
        vt: !e3,
        Yt: e3 ? t3 : void 0,
        Vt: !!i3
      });
    }
  };
  const _2 = [];
  let h2 = e2 ? onSizeChangedCallbackProxy : false;
  return [() => {
    runEachAndClear(_2);
    removeElements(l2);
  }, () => {
    if (u) {
      const t3 = new u(onSizeChangedCallbackProxy);
      t3.observe(a2);
      push(_2, () => {
        t3.disconnect();
      });
    } else if (c2) {
      const [t3, n3] = c2.O(a2, onSizeChangedCallbackProxy, e2);
      h2 = t3;
      push(_2, n3);
    }
    if (s2) {
      const [t3] = createCache({
        o: !d2()
      }, d2);
      push(_2, on(l2, "scroll", (n3) => {
        const o3 = t3();
        const [s3, e3] = o3;
        if (e3) {
          removeClass(a2, "ltr rtl");
          if (s3) {
            addClass(a2, "rtl");
          } else {
            addClass(a2, "ltr");
          }
          onSizeChangedCallbackProxy(o3);
        }
        stopPropagation(n3);
      }));
    }
    if (h2) {
      addClass(l2, V);
      push(_2, on(l2, "animationstart", h2, {
        C: !!u
      }));
    }
    if (u || c2) {
      appendChildren(t2, l2);
    }
  }];
};
const isHeightIntrinsic = (t2) => 0 === t2.h || t2.isIntersecting || t2.intersectionRatio > 0;
const createTrinsicObserver = (t2, n2) => {
  let o2;
  const s2 = createDiv(F);
  const e2 = [];
  const [c2] = createCache({
    o: false
  });
  const triggerOnTrinsicChangedCallback = (t3, o3) => {
    if (t3) {
      const s3 = c2(isHeightIntrinsic(t3));
      const [, e3] = s3;
      if (e3) {
        !o3 && n2(s3);
        return [s3];
      }
    }
  };
  const intersectionObserverCallback = (t3, n3) => {
    if (t3 && t3.length > 0) {
      return triggerOnTrinsicChangedCallback(t3.pop(), n3);
    }
  };
  return [() => {
    runEachAndClear(e2);
    removeElements(s2);
  }, () => {
    if (a) {
      o2 = new a((t3) => intersectionObserverCallback(t3), {
        root: t2
      });
      o2.observe(s2);
      push(e2, () => {
        o2.disconnect();
      });
    } else {
      const onSizeChanged = () => {
        const t4 = offsetSize(s2);
        triggerOnTrinsicChangedCallback(t4);
      };
      const [t3, n3] = createSizeObserver(s2, onSizeChanged);
      push(e2, t3);
      n3();
      onSizeChanged();
    }
    appendChildren(t2, s2);
  }, () => {
    if (o2) {
      return intersectionObserverCallback(o2.takeRecords(), true);
    }
  }];
};
const Vt = `[${O}]`;
const Yt = `.${M}`;
const jt = ["tabindex"];
const Nt = ["wrap", "cols", "rows"];
const qt = ["id", "class", "style", "open"];
const createStructureSetupObservers = (t2, n2, o2) => {
  let s2;
  let e2;
  let c2;
  const { Z: r2, J: i2, tt: l2, rt: a2, ut: d2, ft: f2, _t: _2 } = t2;
  const { V: h2 } = getEnvironment();
  const [g] = createCache({
    u: equalWH,
    o: {
      w: 0,
      h: 0
    }
  }, () => {
    const t3 = f2(k, I);
    const n3 = f2(P, "");
    const o3 = n3 && scrollLeft(i2);
    const s3 = n3 && scrollTop(i2);
    _2(k, I);
    _2(P, "");
    _2("", L, true);
    const e3 = scrollSize(l2);
    const c3 = scrollSize(i2);
    const r3 = fractionalSize(i2);
    _2(k, I, t3);
    _2(P, "", n3);
    _2("", L);
    scrollLeft(i2, o3);
    scrollTop(i2, s3);
    return {
      w: c3.w + e3.w + r3.w,
      h: c3.h + e3.h + r3.h
    };
  });
  const v2 = a2 ? Nt : qt.concat(Nt);
  const w2 = debounce(o2, {
    g: () => s2,
    v: () => e2,
    p(t3, n3) {
      const [o3] = t3;
      const [s3] = n3;
      return [keys(o3).concat(keys(s3)).reduce((t4, n4) => {
        t4[n4] = o3[n4] || s3[n4];
        return t4;
      }, {})];
    }
  });
  const updateViewportAttrsFromHost = (t3) => {
    each(t3 || jt, (t4) => {
      if (indexOf(jt, t4) > -1) {
        const n3 = attr(r2, t4);
        if (isString(n3)) {
          attr(i2, t4, n3);
        } else {
          removeAttr(i2, t4);
        }
      }
    });
  };
  const onTrinsicChanged = (t3, s3) => {
    const [e3, c3] = t3;
    const r3 = {
      gt: c3
    };
    n2({
      ht: e3
    });
    !s3 && o2(r3);
    return r3;
  };
  const onSizeChanged = ({ vt: t3, Yt: s3, Vt: e3 }) => {
    const c3 = !t3 || e3 ? o2 : w2;
    let r3 = false;
    if (s3) {
      const [t4, o3] = s3;
      r3 = o3;
      n2({
        bt: t4
      });
    }
    c3({
      vt: t3,
      yt: r3
    });
  };
  const onContentMutation = (t3, n3) => {
    const [, s3] = g();
    const e3 = {
      wt: s3
    };
    const c3 = t3 ? o2 : w2;
    if (s3) {
      !n3 && c3(e3);
    }
    return e3;
  };
  const onHostMutation = (t3, n3, o3) => {
    const s3 = {
      Ot: n3
    };
    if (n3) {
      !o3 && w2(s3);
    } else if (!d2) {
      updateViewportAttrsFromHost(t3);
    }
    return s3;
  };
  const [p2, b2, m2] = l2 || !h2 ? createTrinsicObserver(r2, onTrinsicChanged) : [noop, noop, noop];
  const [y2, S2] = !d2 ? createSizeObserver(r2, onSizeChanged, {
    Vt: true,
    Bt: true
  }) : [noop, noop];
  const [x2, $2] = createDOMObserver(r2, false, onHostMutation, {
    Mt: qt,
    Ht: qt.concat(jt)
  });
  const C2 = d2 && u && new u(onSizeChanged.bind(0, {
    vt: true
  }));
  C2 && C2.observe(r2);
  updateViewportAttrsFromHost();
  return [() => {
    p2();
    y2();
    c2 && c2[0]();
    C2 && C2.disconnect();
    x2();
  }, () => {
    S2();
    b2();
  }, () => {
    const t3 = {};
    const n3 = $2();
    const o3 = m2();
    const s3 = c2 && c2[1]();
    if (n3) {
      assignDeep(t3, onHostMutation.apply(0, push(n3, true)));
    }
    if (o3) {
      assignDeep(t3, onTrinsicChanged.apply(0, push(o3, true)));
    }
    if (s3) {
      assignDeep(t3, onContentMutation.apply(0, push(s3, true)));
    }
    return t3;
  }, (t3) => {
    const [n3] = t3("update.ignoreMutation");
    const [o3, r3] = t3("update.attributes");
    const [a3, u2] = t3("update.elementEvents");
    const [f3, _3] = t3("update.debounce");
    const h3 = u2 || r3;
    const ignoreMutationFromOptions = (t4) => isFunction(n3) && n3(t4);
    if (h3) {
      if (c2) {
        c2[1]();
        c2[0]();
      }
      c2 = createDOMObserver(l2 || i2, true, onContentMutation, {
        Ht: v2.concat(o3 || []),
        Pt: a3,
        Dt: Vt,
        kt: (t4, n4) => {
          const { target: o4, attributeName: s3 } = t4;
          const e3 = !n4 && s3 && !d2 ? liesBetween(o4, Vt, Yt) : false;
          return e3 || !!closest(o4, `.${X}`) || !!ignoreMutationFromOptions(t4);
        }
      });
    }
    if (_3) {
      w2.m();
      if (isArray(f3)) {
        const t4 = f3[0];
        const n4 = f3[1];
        s2 = isNumber(t4) && t4;
        e2 = isNumber(n4) && n4;
      } else if (isNumber(f3)) {
        s2 = f3;
        e2 = false;
      } else {
        s2 = false;
        e2 = false;
      }
    }
  }];
};
const Ft = {
  x: 0,
  y: 0
};
const Gt = {
  K: {
    t: 0,
    r: 0,
    b: 0,
    l: 0
  },
  St: false,
  M: {
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0
  },
  zt: Ft,
  Tt: Ft,
  Ct: {
    x: "hidden",
    y: "hidden"
  },
  Et: {
    x: false,
    y: false
  },
  ht: false,
  bt: false
};
const createStructureSetup = (t2, n2) => {
  const o2 = createOptionCheck(n2, {});
  const s2 = createState(Gt);
  const [e2, c2, r2] = createEventListenerHub();
  const [i2, l2] = s2;
  const [a2, u2, d2] = createStructureSetupElements(t2);
  const f2 = createStructureSetupUpdate(a2, s2);
  const triggerUpdateEvent = (t3, n3, o3) => {
    const s3 = keys(t3).some((n4) => t3[n4]);
    const e3 = s3 || !isEmptyObject(n3) || o3;
    if (e3) {
      r2("u", [t3, n3, o3]);
    }
    return e3;
  };
  const [_2, h2, g, v2] = createStructureSetupObservers(a2, l2, (t3) => triggerUpdateEvent(f2(o2, t3), {}, false));
  const w2 = i2.bind(0);
  w2.jt = (t3) => e2("u", t3);
  w2.Nt = () => {
    const { W: t3, J: n3 } = a2;
    const o3 = scrollLeft(t3);
    const s3 = scrollTop(t3);
    h2();
    u2();
    scrollLeft(n3, o3);
    scrollTop(n3, s3);
  };
  w2.qt = a2;
  return [(t3, o3) => {
    const s3 = createOptionCheck(n2, t3, o3);
    v2(s3);
    return triggerUpdateEvent(f2(s3, g(), o3), t3, !!o3);
  }, w2, () => {
    c2();
    _2();
    d2();
  }];
};
const { round: Xt } = Math;
const getScale = (t2) => {
  const { width: n2, height: o2 } = getBoundingClientRect(t2);
  const { w: s2, h: e2 } = offsetSize(t2);
  return {
    x: Xt(n2) / s2 || 1,
    y: Xt(o2) / e2 || 1
  };
};
const continuePointerDown = (t2, n2, o2) => {
  const s2 = n2.scrollbars;
  const { button: e2, isPrimary: c2, pointerType: r2 } = t2;
  const { pointers: i2 } = s2;
  return 0 === e2 && c2 && s2[o2 ? "dragScroll" : "clickScroll"] && (i2 || []).includes(r2);
};
const createRootClickStopPropagationEvents = (t2, n2) => on(t2, "mousedown", on.bind(0, n2, "click", stopPropagation, {
  C: true,
  $: true
}), {
  $: true
});
const createInteractiveScrollEvents = (t2, n2, o2, s2, e2, c2) => {
  const { B: r2 } = getEnvironment();
  const { Ft: i2, Gt: l2, Xt: a2 } = o2;
  const u2 = `scroll${c2 ? "Left" : "Top"}`;
  const d2 = `client${c2 ? "X" : "Y"}`;
  const f2 = c2 ? "width" : "height";
  const _2 = c2 ? "left" : "top";
  const h2 = c2 ? "w" : "h";
  const g = c2 ? "x" : "y";
  const createRelativeHandleMove = (t3, n3) => (o3) => {
    const { Tt: d3 } = e2();
    const f3 = offsetSize(l2)[h2] - offsetSize(i2)[h2];
    const _3 = n3 * o3 / f3;
    const v2 = _3 * d3[g];
    const w2 = directionIsRTL(a2);
    const p2 = w2 && c2 ? r2.n || r2.i ? 1 : -1 : 1;
    s2[u2] = t3 + v2 * p2;
  };
  return on(l2, "pointerdown", (o3) => {
    const e3 = closest(o3.target, `.${K}`) === i2;
    if (continuePointerDown(o3, t2, e3)) {
      const t3 = !e3 && o3.shiftKey;
      const getHandleRect = () => getBoundingClientRect(i2);
      const getTrackRect = () => getBoundingClientRect(l2);
      const getHandleOffset = (t4, n3) => (t4 || getHandleRect())[_2] - (n3 || getTrackRect())[_2];
      const c3 = createRelativeHandleMove(s2[u2] || 0, 1 / getScale(s2)[g]);
      const r3 = o3[d2];
      const a3 = getHandleRect();
      const h3 = getTrackRect();
      const v2 = a3[f2];
      const w2 = getHandleOffset(a3, h3) + v2 / 2;
      const p2 = r3 - h3[_2];
      const b2 = e3 ? 0 : p2 - w2;
      const m2 = [on(n2, "selectstart", (t4) => preventDefault(t4), {
        S: false
      }), on(l2, "pointermove", (n3) => {
        const o4 = n3[d2] - r3;
        if (e3 || t3) {
          c3(b2 + o4);
        }
      })];
      if (t3) {
        c3(b2);
      } else if (!e3) {
        const t4 = getPlugins()[Ot];
        if (t4) {
          push(m2, t4.O(c3, getHandleOffset, b2, v2, p2));
        }
      }
      on(l2, "pointerup", (t4) => {
        runEachAndClear(m2);
        l2.releasePointerCapture(t4.pointerId);
      }, {
        C: true
      });
      l2.setPointerCapture(o3.pointerId);
    }
  });
};
const createScrollbarsSetupEvents = (t2, n2) => (o2, s2, e2, c2, r2, i2) => {
  const { Xt: l2 } = o2;
  const [a2, u2] = selfClearTimeout(333);
  const d2 = !!r2.scrollBy;
  let f2 = true;
  return runEachAndClear.bind(0, [on(l2, "pointerenter", () => {
    s2(ot, true);
  }), on(l2, "pointerleave pointercancel", () => {
    s2(ot);
  }), on(l2, "wheel", (t3) => {
    const { deltaX: n3, deltaY: o3, deltaMode: e3 } = t3;
    if (d2 && f2 && 0 === e3 && parent(l2) === c2) {
      r2.scrollBy({
        left: n3,
        top: o3,
        behavior: "smooth"
      });
    }
    f2 = false;
    s2(ct, true);
    a2(() => {
      f2 = true;
      s2(ct);
    });
    preventDefault(t3);
  }, {
    S: false,
    $: true
  }), createRootClickStopPropagationEvents(l2, e2), createInteractiveScrollEvents(t2, e2, o2, r2, n2, i2), u2]);
};
const { min: Ut, max: Wt, abs: Zt, round: Jt } = Math;
const getScrollbarHandleLengthRatio = (t2, n2, o2, s2) => {
  if (s2) {
    const t3 = o2 ? "x" : "y";
    const { Tt: n3, zt: e3 } = s2;
    const c3 = e3[t3];
    const r3 = n3[t3];
    return Wt(0, Ut(1, c3 / (c3 + r3)));
  }
  const e2 = o2 ? "w" : "h";
  const c2 = offsetSize(t2)[e2];
  const r2 = offsetSize(n2)[e2];
  return Wt(0, Ut(1, c2 / r2));
};
const getScrollbarHandleOffsetRatio = (t2, n2, o2, s2, e2, c2) => {
  const { B: r2 } = getEnvironment();
  const i2 = c2 ? "x" : "y";
  const l2 = c2 ? "Left" : "Top";
  const { Tt: a2 } = s2;
  const u2 = Jt(a2[i2]);
  const d2 = Zt(o2[`scroll${l2}`]);
  const f2 = c2 && e2;
  const _2 = r2.i ? d2 : u2 - d2;
  const h2 = f2 ? _2 : d2;
  const g = Ut(1, h2 / u2);
  const v2 = getScrollbarHandleLengthRatio(t2, n2, c2);
  return 1 / v2 * (1 - v2) * g;
};
const createScrollbarsSetupElements = (t2, n2, o2) => {
  const { N: s2 } = getEnvironment();
  const { scrollbars: e2 } = s2();
  const { slot: c2 } = e2;
  const { ct: r2, W: i2, Z: l2, J: a2, lt: u2, ot: d2, it: f2, ut: h2 } = n2;
  const { scrollbars: g } = u2 ? {} : t2;
  const { slot: v2 } = g || {};
  const w2 = dynamicInitializationElement([i2, l2, a2], () => h2 && f2 ? i2 : l2, c2, v2);
  const scrollbarStructureAddRemoveClass = (t3, n3, o3) => {
    const s3 = o3 ? addClass : removeClass;
    each(t3, (t4) => {
      s3(t4.Xt, n3);
    });
  };
  const scrollbarsHandleStyle = (t3, n3) => {
    each(t3, (t4) => {
      const [o3, s3] = n3(t4);
      style(o3, s3);
    });
  };
  const scrollbarStructureRefreshHandleLength = (t3, n3, o3) => {
    scrollbarsHandleStyle(t3, (t4) => {
      const { Ft: s3, Gt: e3 } = t4;
      return [s3, {
        [o3 ? "width" : "height"]: `${(100 * getScrollbarHandleLengthRatio(s3, e3, o3, n3)).toFixed(3)}%`
      }];
    });
  };
  const scrollbarStructureRefreshHandleOffset = (t3, n3, o3) => {
    const s3 = o3 ? "X" : "Y";
    scrollbarsHandleStyle(t3, (t4) => {
      const { Ft: e3, Gt: c3, Xt: r3 } = t4;
      const i3 = getScrollbarHandleOffsetRatio(e3, c3, d2, n3, directionIsRTL(r3), o3);
      const l3 = i3 === i3;
      return [e3, {
        transform: l3 ? `translate${s3}(${(100 * i3).toFixed(3)}%)` : ""
      }];
    });
  };
  const p2 = [];
  const b2 = [];
  const m2 = [];
  const scrollbarsAddRemoveClass = (t3, n3, o3) => {
    const s3 = isBoolean(o3);
    const e3 = s3 ? o3 : true;
    const c3 = s3 ? !o3 : true;
    e3 && scrollbarStructureAddRemoveClass(b2, t3, n3);
    c3 && scrollbarStructureAddRemoveClass(m2, t3, n3);
  };
  const refreshScrollbarsHandleLength = (t3) => {
    scrollbarStructureRefreshHandleLength(b2, t3, true);
    scrollbarStructureRefreshHandleLength(m2, t3);
  };
  const refreshScrollbarsHandleOffset = (t3) => {
    scrollbarStructureRefreshHandleOffset(b2, t3, true);
    scrollbarStructureRefreshHandleOffset(m2, t3);
  };
  const generateScrollbarDOM = (t3) => {
    const n3 = t3 ? W : Z;
    const s3 = t3 ? b2 : m2;
    const e3 = isEmptyArray(s3) ? nt : "";
    const c3 = createDiv(`${X} ${n3} ${e3}`);
    const i3 = createDiv(J);
    const a3 = createDiv(K);
    const u3 = {
      Xt: c3,
      Gt: i3,
      Ft: a3
    };
    appendChildren(c3, i3);
    appendChildren(i3, a3);
    push(s3, u3);
    push(p2, [removeElements.bind(0, c3), o2(u3, scrollbarsAddRemoveClass, r2, l2, d2, t3)]);
    return u3;
  };
  const y2 = generateScrollbarDOM.bind(0, true);
  const S2 = generateScrollbarDOM.bind(0, false);
  const appendElements = () => {
    appendChildren(w2, b2[0].Xt);
    appendChildren(w2, m2[0].Xt);
    _(() => {
      scrollbarsAddRemoveClass(nt);
    }, 300);
  };
  y2();
  S2();
  return [{
    Ut: refreshScrollbarsHandleLength,
    Wt: refreshScrollbarsHandleOffset,
    Zt: scrollbarsAddRemoveClass,
    Jt: {
      Kt: b2,
      Qt: y2,
      tn: scrollbarsHandleStyle.bind(0, b2)
    },
    nn: {
      Kt: m2,
      Qt: S2,
      tn: scrollbarsHandleStyle.bind(0, m2)
    }
  }, appendElements, runEachAndClear.bind(0, p2)];
};
const createScrollbarsSetup = (t2, n2, o2, s2) => {
  let e2;
  let c2;
  let r2;
  let i2;
  let l2;
  let a2 = 0;
  const u2 = createState({});
  const [d2] = u2;
  const [f2, _2] = selfClearTimeout();
  const [h2, g] = selfClearTimeout();
  const [v2, w2] = selfClearTimeout(100);
  const [p2, b2] = selfClearTimeout(100);
  const [m2, y2] = selfClearTimeout(() => a2);
  const [S2, x2, $2] = createScrollbarsSetupElements(t2, o2.qt, createScrollbarsSetupEvents(n2, o2));
  const { Z: C2, J: O2, ot: z2, st: T2, ut: E2, it: I2 } = o2.qt;
  const { Jt: A2, nn: L2, Zt: H2, Ut: M2, Wt: P2 } = S2;
  const { tn: D2 } = A2;
  const { tn: R2 } = L2;
  const styleScrollbarPosition = (t3) => {
    const { Xt: n3 } = t3;
    const o3 = E2 && !I2 && parent(n3) === O2 && n3;
    return [o3, {
      transform: o3 ? `translate(${scrollLeft(z2)}px, ${scrollTop(z2)}px)` : ""
    }];
  };
  const manageScrollbarsAutoHide = (t3, n3) => {
    y2();
    if (t3) {
      H2(et);
    } else {
      const hide = () => H2(et, true);
      if (a2 > 0 && !n3) {
        m2(hide);
      } else {
        hide();
      }
    }
  };
  const onHostMouseEnter = () => {
    i2 = c2;
    i2 && manageScrollbarsAutoHide(true);
  };
  const k2 = [w2, y2, b2, g, _2, $2, on(C2, "pointerover", onHostMouseEnter, {
    C: true
  }), on(C2, "pointerenter", onHostMouseEnter), on(C2, "pointerleave", () => {
    i2 = false;
    c2 && manageScrollbarsAutoHide(false);
  }), on(C2, "pointermove", () => {
    e2 && f2(() => {
      w2();
      manageScrollbarsAutoHide(true);
      p2(() => {
        e2 && manageScrollbarsAutoHide(false);
      });
    });
  }), on(T2, "scroll", (t3) => {
    h2(() => {
      P2(o2());
      r2 && manageScrollbarsAutoHide(true);
      v2(() => {
        r2 && !i2 && manageScrollbarsAutoHide(false);
      });
    });
    s2(t3);
    E2 && D2(styleScrollbarPosition);
    E2 && R2(styleScrollbarPosition);
  })];
  const B2 = d2.bind(0);
  B2.qt = S2;
  B2.Nt = x2;
  return [(t3, s3, i3) => {
    const { At: u3, Lt: d3, It: f3, yt: _3 } = i3;
    const { A: h3 } = getEnvironment();
    const g2 = createOptionCheck(n2, t3, s3);
    const v3 = o2();
    const { Tt: w3, Ct: p3, bt: b3 } = v3;
    const [m3, y3] = g2("showNativeOverlaidScrollbars");
    const [S3, x3] = g2("scrollbars.theme");
    const [$3, C3] = g2("scrollbars.visibility");
    const [O3, z3] = g2("scrollbars.autoHide");
    const [T3] = g2("scrollbars.autoHideDelay");
    const [E3, A3] = g2("scrollbars.dragScroll");
    const [L3, D3] = g2("scrollbars.clickScroll");
    const R3 = u3 || d3 || _3;
    const k3 = f3 || C3;
    const B3 = m3 && h3.x && h3.y;
    const setScrollbarVisibility = (t4, n3) => {
      const o3 = "visible" === $3 || "auto" === $3 && "scroll" === t4;
      H2(Q, o3, n3);
      return o3;
    };
    a2 = T3;
    if (y3) {
      H2(G, B3);
    }
    if (x3) {
      H2(l2);
      H2(S3, true);
      l2 = S3;
    }
    if (z3) {
      e2 = "move" === O3;
      c2 = "leave" === O3;
      r2 = "never" !== O3;
      manageScrollbarsAutoHide(!r2, true);
    }
    if (A3) {
      H2(it, E3);
    }
    if (D3) {
      H2(rt, L3);
    }
    if (k3) {
      const t4 = setScrollbarVisibility(p3.x, true);
      const n3 = setScrollbarVisibility(p3.y, false);
      const o3 = t4 && n3;
      H2(tt, !o3);
    }
    if (R3) {
      M2(v3);
      P2(v3);
      H2(st, !w3.x, true);
      H2(st, !w3.y, false);
      H2(U, b3 && !I2);
    }
  }, B2, runEachAndClear.bind(0, k2)];
};
const invokePluginInstance = (t2, n2, o2) => {
  if (isFunction(t2)) {
    t2(n2 || void 0, o2 || void 0);
  }
};
const OverlayScrollbars = (t2, n2, o2) => {
  const { F: s2, N: e2, Y: c2, j: r2 } = getEnvironment();
  const i2 = getPlugins();
  const l2 = isHTMLElement(t2);
  const a2 = l2 ? t2 : t2.target;
  const u2 = getInstance(a2);
  if (n2 && !u2) {
    let u3 = false;
    const validateOptions = (t3) => {
      const n3 = getPlugins()[vt];
      const o3 = n3 && n3.O;
      return o3 ? o3(t3, true) : t3;
    };
    const d2 = assignDeep({}, s2(), validateOptions(n2));
    const [f2, _2, h2] = createEventListenerHub(o2);
    const [g, v2, w2] = createStructureSetup(t2, d2);
    const [p2, b2, m2] = createScrollbarsSetup(t2, d2, v2, (t3) => h2("scroll", [$2, t3]));
    const update = (t3, n3) => g(t3, !!n3);
    const y2 = update.bind(0, {}, true);
    const S2 = c2(y2);
    const x2 = r2(y2);
    const destroy = (t3) => {
      removeInstance(a2);
      S2();
      x2();
      m2();
      w2();
      u3 = true;
      h2("destroyed", [$2, !!t3]);
      _2();
    };
    const $2 = {
      options(t3, n3) {
        if (t3) {
          const o3 = n3 ? s2() : {};
          const e3 = getOptionsDiff(d2, assignDeep(o3, validateOptions(t3)));
          if (!isEmptyObject(e3)) {
            assignDeep(d2, e3);
            update(e3);
          }
        }
        return assignDeep({}, d2);
      },
      on: f2,
      off: (t3, n3) => {
        t3 && n3 && _2(t3, n3);
      },
      state() {
        const { zt: t3, Tt: n3, Ct: o3, Et: s3, K: e3, St: c3, bt: r3 } = v2();
        return assignDeep({}, {
          overflowEdge: t3,
          overflowAmount: n3,
          overflowStyle: o3,
          hasOverflow: s3,
          padding: e3,
          paddingAbsolute: c3,
          directionRTL: r3,
          destroyed: u3
        });
      },
      elements() {
        const { W: t3, Z: n3, K: o3, J: s3, tt: e3, ot: c3, st: r3 } = v2.qt;
        const { Jt: i3, nn: l3 } = b2.qt;
        const translateScrollbarStructure = (t4) => {
          const { Ft: n4, Gt: o4, Xt: s4 } = t4;
          return {
            scrollbar: s4,
            track: o4,
            handle: n4
          };
        };
        const translateScrollbarsSetupElement = (t4) => {
          const { Kt: n4, Qt: o4 } = t4;
          const s4 = translateScrollbarStructure(n4[0]);
          return assignDeep({}, s4, {
            clone: () => {
              const t5 = translateScrollbarStructure(o4());
              p2({}, true, {});
              return t5;
            }
          });
        };
        return assignDeep({}, {
          target: t3,
          host: n3,
          padding: o3 || s3,
          viewport: s3,
          content: e3 || s3,
          scrollOffsetElement: c3,
          scrollEventElement: r3,
          scrollbarHorizontal: translateScrollbarsSetupElement(i3),
          scrollbarVertical: translateScrollbarsSetupElement(l3)
        });
      },
      update: (t3) => update({}, t3),
      destroy: destroy.bind(0)
    };
    v2.jt((t3, n3, o3) => {
      p2(n3, o3, t3);
    });
    addInstance(a2, $2);
    each(keys(i2), (t3) => invokePluginInstance(i2[t3], 0, $2));
    if (cancelInitialization(v2.qt.it, e2().cancel, !l2 && t2.cancel)) {
      destroy(true);
      return $2;
    }
    v2.Nt();
    b2.Nt();
    h2("initialized", [$2]);
    v2.jt((t3, n3, o3) => {
      const { vt: s3, yt: e3, gt: c3, At: r3, Lt: i3, It: l3, wt: a3, Ot: u4 } = t3;
      h2("updated", [$2, {
        updateHints: {
          sizeChanged: s3,
          directionChanged: e3,
          heightIntrinsicChanged: c3,
          overflowEdgeChanged: r3,
          overflowAmountChanged: i3,
          overflowStyleChanged: l3,
          contentMutation: a3,
          hostMutation: u4
        },
        changedOptions: n3,
        force: o3
      }]);
    });
    $2.update(true);
    return $2;
  }
  return u2;
};
OverlayScrollbars.plugin = (t2) => {
  each(addPlugin(t2), (t3) => invokePluginInstance(t3, OverlayScrollbars));
};
OverlayScrollbars.valid = (t2) => {
  const n2 = t2 && t2.elements;
  const o2 = isFunction(n2) && n2();
  return isPlainObject(o2) && !!getInstance(o2.target);
};
OverlayScrollbars.env = () => {
  const { k: t2, A: n2, I: o2, B: s2, V: e2, L: c2, X: r2, U: i2, N: l2, q: a2, F: u2, G: d2 } = getEnvironment();
  return assignDeep({}, {
    scrollbarsSize: t2,
    scrollbarsOverlaid: n2,
    scrollbarsHiding: o2,
    rtlScrollBehavior: s2,
    flexboxGlue: e2,
    cssCustomProperties: c2,
    staticDefaultInitialization: r2,
    staticDefaultOptions: i2,
    getDefaultInitialization: l2,
    setDefaultInitialization: a2,
    getDefaultOptions: u2,
    setDefaultOptions: d2
  });
};
export {
  OverlayScrollbars as O
};
//# sourceMappingURL=overlayscrollbars.esm-084eb65b.js.map
