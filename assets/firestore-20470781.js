import { _ as _registerComponent, r as registerVersion, C as Component, a as createMockUserToken, b as _getProvider, d as deepEqual, e as getApp, L as Logger, f as LogLevel, F as FirebaseError, h as getModularInstance, S as SDK_VERSION, j as isMobileCordova, k as isReactNative, l as isElectron, m as isIE, n as isUWP, o as isBrowserExtension } from "./index-90ebcfae-3aa38dd7.js";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var k$1, goog = goog || {}, l = commonjsGlobal || self;
function aa$1() {
}
function ba$1(a) {
  var b = typeof a;
  b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function p(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
function da(a) {
  return Object.prototype.hasOwnProperty.call(a, ea) && a[ea] || (a[ea] = ++fa);
}
var ea = "closure_uid_" + (1e9 * Math.random() >>> 0), fa = 0;
function ha(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ia(a, b, c) {
  if (!a)
    throw Error();
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, d);
      return a.apply(b, e);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function q(a, b, c) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? q = ha : q = ia;
  return q.apply(null, arguments);
}
function ja(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var d = c.slice();
    d.push.apply(d, arguments);
    return a.apply(this, d);
  };
}
function t(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.Z = b.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
  a.Vb = function(d, e, f) {
    for (var h = Array(arguments.length - 2), n = 2; n < arguments.length; n++)
      h[n - 2] = arguments[n];
    return b.prototype[e].apply(d, h);
  };
}
function v() {
  this.s = this.s;
  this.o = this.o;
}
var ka$1 = 0;
v.prototype.s = false;
v.prototype.na = function() {
  if (!this.s && (this.s = true, this.M(), 0 != ka$1)) {
    da(this);
  }
};
v.prototype.M = function() {
  if (this.o)
    for (; this.o.length; )
      this.o.shift()();
};
const ma$1 = Array.prototype.indexOf ? function(a, b) {
  return Array.prototype.indexOf.call(a, b, void 0);
} : function(a, b) {
  if ("string" === typeof a)
    return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
  for (let c = 0; c < a.length; c++)
    if (c in a && a[c] === b)
      return c;
  return -1;
}, na$1 = Array.prototype.forEach ? function(a, b, c) {
  Array.prototype.forEach.call(a, b, c);
} : function(a, b, c) {
  const d = a.length, e = "string" === typeof a ? a.split("") : a;
  for (let f = 0; f < d; f++)
    f in e && b.call(c, e[f], f, a);
};
function oa(a) {
  a: {
    var b = pa$1;
    const c = a.length, d = "string" === typeof a ? a.split("") : a;
    for (let e = 0; e < c; e++)
      if (e in d && b.call(void 0, d[e], e, a)) {
        b = e;
        break a;
      }
    b = -1;
  }
  return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
}
function qa(a) {
  return Array.prototype.concat.apply([], arguments);
}
function ra(a) {
  const b = a.length;
  if (0 < b) {
    const c = Array(b);
    for (let d = 0; d < b; d++)
      c[d] = a[d];
    return c;
  }
  return [];
}
function sa$1(a) {
  return /^[\s\xa0]*$/.test(a);
}
var ta = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
};
function w(a, b) {
  return -1 != a.indexOf(b);
}
function ua(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
var x$1;
a: {
  var va$1 = l.navigator;
  if (va$1) {
    var wa$1 = va$1.userAgent;
    if (wa$1) {
      x$1 = wa$1;
      break a;
    }
  }
  x$1 = "";
}
function xa(a, b, c) {
  for (const d in a)
    b.call(c, a[d], d, a);
}
function ya$1(a) {
  const b = {};
  for (const c in a)
    b[c] = a[c];
  return b;
}
var za = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Aa$1(a, b) {
  let c, d;
  for (let e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d)
      a[c] = d[c];
    for (let f = 0; f < za.length; f++)
      c = za[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
  }
}
function Ca(a) {
  Ca[" "](a);
  return a;
}
Ca[" "] = aa$1;
function Fa$1(a) {
  var b = Ga;
  return Object.prototype.hasOwnProperty.call(b, 9) ? b[9] : b[9] = a(9);
}
var Ha = w(x$1, "Opera"), y = w(x$1, "Trident") || w(x$1, "MSIE"), Ia$1 = w(x$1, "Edge"), Ja = Ia$1 || y, Ka = w(x$1, "Gecko") && !(w(x$1.toLowerCase(), "webkit") && !w(x$1, "Edge")) && !(w(x$1, "Trident") || w(x$1, "MSIE")) && !w(x$1, "Edge"), La$1 = w(x$1.toLowerCase(), "webkit") && !w(x$1, "Edge");
function Ma() {
  var a = l.document;
  return a ? a.documentMode : void 0;
}
var Na$1;
a: {
  var Oa = "", Pa$1 = function() {
    var a = x$1;
    if (Ka)
      return /rv:([^\);]+)(\)|;)/.exec(a);
    if (Ia$1)
      return /Edge\/([\d\.]+)/.exec(a);
    if (y)
      return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    if (La$1)
      return /WebKit\/(\S+)/.exec(a);
    if (Ha)
      return /(?:Version)[ \/]?(\S+)/.exec(a);
  }();
  Pa$1 && (Oa = Pa$1 ? Pa$1[1] : "");
  if (y) {
    var Qa = Ma();
    if (null != Qa && Qa > parseFloat(Oa)) {
      Na$1 = String(Qa);
      break a;
    }
  }
  Na$1 = Oa;
}
var Ga = {};
function Ra$1() {
  return Fa$1(function() {
    let a = 0;
    const b = ta(String(Na$1)).split("."), c = ta("9").split("."), d = Math.max(b.length, c.length);
    for (let h = 0; 0 == a && h < d; h++) {
      var e = b[h] || "", f = c[h] || "";
      do {
        e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
        if (0 == e[0].length && 0 == f[0].length)
          break;
        a = ua(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || ua(0 == e[2].length, 0 == f[2].length) || ua(e[2], f[2]);
        e = e[3];
        f = f[3];
      } while (0 == a);
    }
    return 0 <= a;
  });
}
var Sa;
if (l.document && y) {
  var Ta = Ma();
  Sa = Ta ? Ta : parseInt(Na$1, 10) || void 0;
} else
  Sa = void 0;
var Ua$1 = Sa;
var Va$1 = function() {
  if (!l.addEventListener || !Object.defineProperty)
    return false;
  var a = false, b = Object.defineProperty({}, "passive", { get: function() {
    a = true;
  } });
  try {
    l.addEventListener("test", aa$1, b), l.removeEventListener("test", aa$1, b);
  } catch (c) {
  }
  return a;
}();
function z$1(a, b) {
  this.type = a;
  this.g = this.target = b;
  this.defaultPrevented = false;
}
z$1.prototype.h = function() {
  this.defaultPrevented = true;
};
function A(a, b) {
  z$1.call(this, a ? a.type : "");
  this.relatedTarget = this.g = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
  this.key = "";
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
  this.state = null;
  this.pointerId = 0;
  this.pointerType = "";
  this.i = null;
  if (a) {
    var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.g = b;
    if (b = a.relatedTarget) {
      if (Ka) {
        a: {
          try {
            Ca(b.nodeName);
            var e = true;
            break a;
          } catch (f) {
          }
          e = false;
        }
        e || (b = null);
      }
    } else
      "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Wa[a.pointerType] || "";
    this.state = a.state;
    this.i = a;
    a.defaultPrevented && A.Z.h.call(this);
  }
}
t(A, z$1);
var Wa = { 2: "touch", 3: "pen", 4: "mouse" };
A.prototype.h = function() {
  A.Z.h.call(this);
  var a = this.i;
  a.preventDefault ? a.preventDefault() : a.returnValue = false;
};
var B$1 = "closure_listenable_" + (1e6 * Math.random() | 0);
var Xa = 0;
function Ya(a, b, c, d, e) {
  this.listener = a;
  this.proxy = null;
  this.src = b;
  this.type = c;
  this.capture = !!d;
  this.ia = e;
  this.key = ++Xa;
  this.ca = this.fa = false;
}
function Za$1(a) {
  a.ca = true;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.ia = null;
}
function $a$1(a) {
  this.src = a;
  this.g = {};
  this.h = 0;
}
$a$1.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.g[f];
  a || (a = this.g[f] = [], this.h++);
  var h = ab(a, b, d, e);
  -1 < h ? (b = a[h], c || (b.fa = false)) : (b = new Ya(b, this.src, f, !!d, e), b.fa = c, a.push(b));
  return b;
};
function bb(a, b) {
  var c = b.type;
  if (c in a.g) {
    var d = a.g[c], e = ma$1(d, b), f;
    (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f && (Za$1(b), 0 == a.g[c].length && (delete a.g[c], a.h--));
  }
}
function ab(a, b, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.ca && f.listener == b && f.capture == !!c && f.ia == d)
      return e;
  }
  return -1;
}
var cb = "closure_lm_" + (1e6 * Math.random() | 0), db = {};
function fb(a, b, c, d, e) {
  if (d && d.once)
    return gb(a, b, c, d, e);
  if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
      fb(a, b[f], c, d, e);
    return null;
  }
  c = hb(c);
  return a && a[B$1] ? a.N(b, c, p(d) ? !!d.capture : !!d, e) : ib(a, b, c, false, d, e);
}
function ib(a, b, c, d, e, f) {
  if (!b)
    throw Error("Invalid event type");
  var h = p(e) ? !!e.capture : !!e, n = jb(a);
  n || (a[cb] = n = new $a$1(a));
  c = n.add(b, c, d, h, f);
  if (c.proxy)
    return c;
  d = kb();
  c.proxy = d;
  d.src = a;
  d.listener = c;
  if (a.addEventListener)
    Va$1 || (e = h), void 0 === e && (e = false), a.addEventListener(b.toString(), d, e);
  else if (a.attachEvent)
    a.attachEvent(lb(b.toString()), d);
  else if (a.addListener && a.removeListener)
    a.addListener(d);
  else
    throw Error("addEventListener and attachEvent are unavailable.");
  return c;
}
function kb() {
  function a(c) {
    return b.call(a.src, a.listener, c);
  }
  var b = mb;
  return a;
}
function gb(a, b, c, d, e) {
  if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
      gb(a, b[f], c, d, e);
    return null;
  }
  c = hb(c);
  return a && a[B$1] ? a.O(b, c, p(d) ? !!d.capture : !!d, e) : ib(a, b, c, true, d, e);
}
function nb(a, b, c, d, e) {
  if (Array.isArray(b))
    for (var f = 0; f < b.length; f++)
      nb(a, b[f], c, d, e);
  else
    (d = p(d) ? !!d.capture : !!d, c = hb(c), a && a[B$1]) ? (a = a.i, b = String(b).toString(), b in a.g && (f = a.g[b], c = ab(f, c, d, e), -1 < c && (Za$1(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.g[b], a.h--)))) : a && (a = jb(a)) && (b = a.g[b.toString()], a = -1, b && (a = ab(b, c, d, e)), (c = -1 < a ? b[a] : null) && ob(c));
}
function ob(a) {
  if ("number" !== typeof a && a && !a.ca) {
    var b = a.src;
    if (b && b[B$1])
      bb(b.i, a);
    else {
      var c = a.type, d = a.proxy;
      b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(lb(c), d) : b.addListener && b.removeListener && b.removeListener(d);
      (c = jb(b)) ? (bb(c, a), 0 == c.h && (c.src = null, b[cb] = null)) : Za$1(a);
    }
  }
}
function lb(a) {
  return a in db ? db[a] : db[a] = "on" + a;
}
function mb(a, b) {
  if (a.ca)
    a = true;
  else {
    b = new A(b, this);
    var c = a.listener, d = a.ia || a.src;
    a.fa && ob(a);
    a = c.call(d, b);
  }
  return a;
}
function jb(a) {
  a = a[cb];
  return a instanceof $a$1 ? a : null;
}
var pb = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
function hb(a) {
  if ("function" === typeof a)
    return a;
  a[pb] || (a[pb] = function(b) {
    return a.handleEvent(b);
  });
  return a[pb];
}
function C$1() {
  v.call(this);
  this.i = new $a$1(this);
  this.P = this;
  this.I = null;
}
t(C$1, v);
C$1.prototype[B$1] = true;
C$1.prototype.removeEventListener = function(a, b, c, d) {
  nb(this, a, b, c, d);
};
function D$1(a, b) {
  var c, d = a.I;
  if (d)
    for (c = []; d; d = d.I)
      c.push(d);
  a = a.P;
  d = b.type || b;
  if ("string" === typeof b)
    b = new z$1(b, a);
  else if (b instanceof z$1)
    b.target = b.target || a;
  else {
    var e = b;
    b = new z$1(d, a);
    Aa$1(b, e);
  }
  e = true;
  if (c)
    for (var f = c.length - 1; 0 <= f; f--) {
      var h = b.g = c[f];
      e = qb(h, d, true, b) && e;
    }
  h = b.g = a;
  e = qb(h, d, true, b) && e;
  e = qb(h, d, false, b) && e;
  if (c)
    for (f = 0; f < c.length; f++)
      h = b.g = c[f], e = qb(h, d, false, b) && e;
}
C$1.prototype.M = function() {
  C$1.Z.M.call(this);
  if (this.i) {
    var a = this.i, c;
    for (c in a.g) {
      for (var d = a.g[c], e = 0; e < d.length; e++)
        Za$1(d[e]);
      delete a.g[c];
      a.h--;
    }
  }
  this.I = null;
};
C$1.prototype.N = function(a, b, c, d) {
  return this.i.add(String(a), b, false, c, d);
};
C$1.prototype.O = function(a, b, c, d) {
  return this.i.add(String(a), b, true, c, d);
};
function qb(a, b, c, d) {
  b = a.i.g[String(b)];
  if (!b)
    return true;
  b = b.concat();
  for (var e = true, f = 0; f < b.length; ++f) {
    var h = b[f];
    if (h && !h.ca && h.capture == c) {
      var n = h.listener, u = h.ia || h.src;
      h.fa && bb(a.i, h);
      e = false !== n.call(u, d) && e;
    }
  }
  return e && !d.defaultPrevented;
}
var rb = l.JSON.stringify;
function sb() {
  var a = tb;
  let b = null;
  a.g && (b = a.g, a.g = a.g.next, a.g || (a.h = null), b.next = null);
  return b;
}
class ub {
  constructor() {
    this.h = this.g = null;
  }
  add(a, b) {
    const c = vb.get();
    c.set(a, b);
    this.h ? this.h.next = c : this.g = c;
    this.h = c;
  }
}
var vb = new class {
  constructor(a, b) {
    this.i = a;
    this.j = b;
    this.h = 0;
    this.g = null;
  }
  get() {
    let a;
    0 < this.h ? (this.h--, a = this.g, this.g = a.next, a.next = null) : a = this.i();
    return a;
  }
}(() => new wb(), (a) => a.reset());
class wb {
  constructor() {
    this.next = this.g = this.h = null;
  }
  set(a, b) {
    this.h = a;
    this.g = b;
    this.next = null;
  }
  reset() {
    this.next = this.g = this.h = null;
  }
}
function yb(a) {
  l.setTimeout(() => {
    throw a;
  }, 0);
}
function zb(a, b) {
  Ab || Bb();
  Cb || (Ab(), Cb = true);
  tb.add(a, b);
}
var Ab;
function Bb() {
  var a = l.Promise.resolve(void 0);
  Ab = function() {
    a.then(Db);
  };
}
var Cb = false, tb = new ub();
function Db() {
  for (var a; a = sb(); ) {
    try {
      a.h.call(a.g);
    } catch (c) {
      yb(c);
    }
    var b = vb;
    b.j(a);
    100 > b.h && (b.h++, a.next = b.g, b.g = a);
  }
  Cb = false;
}
function Eb(a, b) {
  C$1.call(this);
  this.h = a || 1;
  this.g = b || l;
  this.j = q(this.kb, this);
  this.l = Date.now();
}
t(Eb, C$1);
k$1 = Eb.prototype;
k$1.da = false;
k$1.S = null;
k$1.kb = function() {
  if (this.da) {
    var a = Date.now() - this.l;
    0 < a && a < 0.8 * this.h ? this.S = this.g.setTimeout(this.j, this.h - a) : (this.S && (this.g.clearTimeout(this.S), this.S = null), D$1(this, "tick"), this.da && (Fb(this), this.start()));
  }
};
k$1.start = function() {
  this.da = true;
  this.S || (this.S = this.g.setTimeout(this.j, this.h), this.l = Date.now());
};
function Fb(a) {
  a.da = false;
  a.S && (a.g.clearTimeout(a.S), a.S = null);
}
k$1.M = function() {
  Eb.Z.M.call(this);
  Fb(this);
  delete this.g;
};
function Gb(a, b, c) {
  if ("function" === typeof a)
    c && (a = q(a, c));
  else if (a && "function" == typeof a.handleEvent)
    a = q(a.handleEvent, a);
  else
    throw Error("Invalid listener argument");
  return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0);
}
function Hb(a) {
  a.g = Gb(() => {
    a.g = null;
    a.i && (a.i = false, Hb(a));
  }, a.j);
  const b = a.h;
  a.h = null;
  a.m.apply(null, b);
}
class Ib extends v {
  constructor(a, b) {
    super();
    this.m = a;
    this.j = b;
    this.h = null;
    this.i = false;
    this.g = null;
  }
  l(a) {
    this.h = arguments;
    this.g ? this.i = true : Hb(this);
  }
  M() {
    super.M();
    this.g && (l.clearTimeout(this.g), this.g = null, this.i = false, this.h = null);
  }
}
function E(a) {
  v.call(this);
  this.h = a;
  this.g = {};
}
t(E, v);
var Jb = [];
function Kb(a, b, c, d) {
  Array.isArray(c) || (c && (Jb[0] = c.toString()), c = Jb);
  for (var e = 0; e < c.length; e++) {
    var f = fb(b, c[e], d || a.handleEvent, false, a.h || a);
    if (!f)
      break;
    a.g[f.key] = f;
  }
}
function Lb(a) {
  xa(a.g, function(b, c) {
    this.g.hasOwnProperty(c) && ob(b);
  }, a);
  a.g = {};
}
E.prototype.M = function() {
  E.Z.M.call(this);
  Lb(this);
};
E.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Mb() {
  this.g = true;
}
Mb.prototype.Aa = function() {
  this.g = false;
};
function Nb(a, b, c, d, e, f) {
  a.info(function() {
    if (a.g)
      if (f) {
        var h = "";
        for (var n = f.split("&"), u = 0; u < n.length; u++) {
          var m = n[u].split("=");
          if (1 < m.length) {
            var r = m[0];
            m = m[1];
            var G2 = r.split("_");
            h = 2 <= G2.length && "type" == G2[1] ? h + (r + "=" + m + "&") : h + (r + "=redacted&");
          }
        }
      } else
        h = null;
    else
      h = f;
    return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b + "\n" + c + "\n" + h;
  });
}
function Ob(a, b, c, d, e, f, h) {
  a.info(function() {
    return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b + "\n" + c + "\n" + f + " " + h;
  });
}
function F$1(a, b, c, d) {
  a.info(function() {
    return "XMLHTTP TEXT (" + b + "): " + Pb(a, c) + (d ? " " + d : "");
  });
}
function Qb(a, b) {
  a.info(function() {
    return "TIMEOUT: " + b;
  });
}
Mb.prototype.info = function() {
};
function Pb(a, b) {
  if (!a.g)
    return b;
  if (!b)
    return null;
  try {
    var c = JSON.parse(b);
    if (c) {
      for (a = 0; a < c.length; a++)
        if (Array.isArray(c[a])) {
          var d = c[a];
          if (!(2 > d.length)) {
            var e = d[1];
            if (Array.isArray(e) && !(1 > e.length)) {
              var f = e[0];
              if ("noop" != f && "stop" != f && "close" != f)
                for (var h = 1; h < e.length; h++)
                  e[h] = "";
            }
          }
        }
    }
    return rb(c);
  } catch (n) {
    return b;
  }
}
var H$1 = {}, Rb = null;
function Sb() {
  return Rb = Rb || new C$1();
}
H$1.Ma = "serverreachability";
function Tb(a) {
  z$1.call(this, H$1.Ma, a);
}
t(Tb, z$1);
function I(a) {
  const b = Sb();
  D$1(b, new Tb(b));
}
H$1.STAT_EVENT = "statevent";
function Ub(a, b) {
  z$1.call(this, H$1.STAT_EVENT, a);
  this.stat = b;
}
t(Ub, z$1);
function J$1(a) {
  const b = Sb();
  D$1(b, new Ub(b, a));
}
H$1.Na = "timingevent";
function Vb(a, b) {
  z$1.call(this, H$1.Na, a);
  this.size = b;
}
t(Vb, z$1);
function K$1(a, b) {
  if ("function" !== typeof a)
    throw Error("Fn must not be null and must be a function");
  return l.setTimeout(function() {
    a();
  }, b);
}
var Wb = { NO_ERROR: 0, lb: 1, yb: 2, xb: 3, sb: 4, wb: 5, zb: 6, Ja: 7, TIMEOUT: 8, Cb: 9 };
var Xb = { qb: "complete", Mb: "success", Ka: "error", Ja: "abort", Eb: "ready", Fb: "readystatechange", TIMEOUT: "timeout", Ab: "incrementaldata", Db: "progress", tb: "downloadprogress", Ub: "uploadprogress" };
function Yb() {
}
Yb.prototype.h = null;
function Zb(a) {
  return a.h || (a.h = a.i());
}
function $b() {
}
var L$1 = { OPEN: "a", pb: "b", Ka: "c", Bb: "d" };
function ac$1() {
  z$1.call(this, "d");
}
t(ac$1, z$1);
function bc$1() {
  z$1.call(this, "c");
}
t(bc$1, z$1);
var cc$1;
function dc$1() {
}
t(dc$1, Yb);
dc$1.prototype.g = function() {
  return new XMLHttpRequest();
};
dc$1.prototype.i = function() {
  return {};
};
cc$1 = new dc$1();
function M$1(a, b, c, d) {
  this.l = a;
  this.j = b;
  this.m = c;
  this.X = d || 1;
  this.V = new E(this);
  this.P = ec$1;
  a = Ja ? 125 : void 0;
  this.W = new Eb(a);
  this.H = null;
  this.i = false;
  this.s = this.A = this.v = this.K = this.F = this.Y = this.B = null;
  this.D = [];
  this.g = null;
  this.C = 0;
  this.o = this.u = null;
  this.N = -1;
  this.I = false;
  this.O = 0;
  this.L = null;
  this.aa = this.J = this.$ = this.U = false;
  this.h = new fc$1();
}
function fc$1() {
  this.i = null;
  this.g = "";
  this.h = false;
}
var ec$1 = 45e3, gc$1 = {}, hc$1 = {};
k$1 = M$1.prototype;
k$1.setTimeout = function(a) {
  this.P = a;
};
function ic$1(a, b, c) {
  a.K = 1;
  a.v = jc(N$1(b));
  a.s = c;
  a.U = true;
  kc(a, null);
}
function kc(a, b) {
  a.F = Date.now();
  lc$1(a);
  a.A = N$1(a.v);
  var c = a.A, d = a.X;
  Array.isArray(d) || (d = [String(d)]);
  mc(c.h, "t", d);
  a.C = 0;
  c = a.l.H;
  a.h = new fc$1();
  a.g = nc$1(a.l, c ? b : null, !a.s);
  0 < a.O && (a.L = new Ib(q(a.Ia, a, a.g), a.O));
  Kb(a.V, a.g, "readystatechange", a.gb);
  b = a.H ? ya$1(a.H) : {};
  a.s ? (a.u || (a.u = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.g.ea(a.A, a.u, a.s, b)) : (a.u = "GET", a.g.ea(a.A, a.u, null, b));
  I();
  Nb(a.j, a.u, a.A, a.m, a.X, a.s);
}
k$1.gb = function(a) {
  a = a.target;
  const b = this.L;
  b && 3 == O$1(a) ? b.l() : this.Ia(a);
};
k$1.Ia = function(a) {
  try {
    if (a == this.g)
      a: {
        const r = O$1(this.g);
        var b = this.g.Da();
        const G2 = this.g.ba();
        if (!(3 > r) && (3 != r || Ja || this.g && (this.h.h || this.g.ga() || oc$1(this.g)))) {
          this.I || 4 != r || 7 == b || (8 == b || 0 >= G2 ? I(3) : I(2));
          pc$1(this);
          var c = this.g.ba();
          this.N = c;
          b:
            if (qc$1(this)) {
              var d = oc$1(this.g);
              a = "";
              var e = d.length, f = 4 == O$1(this.g);
              if (!this.h.i) {
                if ("undefined" === typeof TextDecoder) {
                  P(this);
                  rc$1(this);
                  var h = "";
                  break b;
                }
                this.h.i = new l.TextDecoder();
              }
              for (b = 0; b < e; b++)
                this.h.h = true, a += this.h.i.decode(d[b], { stream: f && b == e - 1 });
              d.splice(
                0,
                e
              );
              this.h.g += a;
              this.C = 0;
              h = this.h.g;
            } else
              h = this.g.ga();
          this.i = 200 == c;
          Ob(this.j, this.u, this.A, this.m, this.X, r, c);
          if (this.i) {
            if (this.$ && !this.J) {
              b: {
                if (this.g) {
                  var n, u = this.g;
                  if ((n = u.g ? u.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !sa$1(n)) {
                    var m = n;
                    break b;
                  }
                }
                m = null;
              }
              if (c = m)
                F$1(this.j, this.m, c, "Initial handshake response via X-HTTP-Initial-Response"), this.J = true, sc$1(this, c);
              else {
                this.i = false;
                this.o = 3;
                J$1(12);
                P(this);
                rc$1(this);
                break a;
              }
            }
            this.U ? (tc(this, r, h), Ja && this.i && 3 == r && (Kb(this.V, this.W, "tick", this.fb), this.W.start())) : (F$1(this.j, this.m, h, null), sc$1(this, h));
            4 == r && P(this);
            this.i && !this.I && (4 == r ? uc$1(this.l, this) : (this.i = false, lc$1(this)));
          } else
            400 == c && 0 < h.indexOf("Unknown SID") ? (this.o = 3, J$1(12)) : (this.o = 0, J$1(13)), P(this), rc$1(this);
        }
      }
  } catch (r) {
  } finally {
  }
};
function qc$1(a) {
  return a.g ? "GET" == a.u && 2 != a.K && a.l.Ba : false;
}
function tc(a, b, c) {
  let d = true, e;
  for (; !a.I && a.C < c.length; )
    if (e = vc(a, c), e == hc$1) {
      4 == b && (a.o = 4, J$1(14), d = false);
      F$1(a.j, a.m, null, "[Incomplete Response]");
      break;
    } else if (e == gc$1) {
      a.o = 4;
      J$1(15);
      F$1(a.j, a.m, c, "[Invalid Chunk]");
      d = false;
      break;
    } else
      F$1(a.j, a.m, e, null), sc$1(a, e);
  qc$1(a) && e != hc$1 && e != gc$1 && (a.h.g = "", a.C = 0);
  4 != b || 0 != c.length || a.h.h || (a.o = 1, J$1(16), d = false);
  a.i = a.i && d;
  d ? 0 < c.length && !a.aa && (a.aa = true, b = a.l, b.g == a && b.$ && !b.L && (b.h.info("Great, no buffering proxy detected. Bytes received: " + c.length), wc$1(b), b.L = true, J$1(11))) : (F$1(
    a.j,
    a.m,
    c,
    "[Invalid Chunked Response]"
  ), P(a), rc$1(a));
}
k$1.fb = function() {
  if (this.g) {
    var a = O$1(this.g), b = this.g.ga();
    this.C < b.length && (pc$1(this), tc(this, a, b), this.i && 4 != a && lc$1(this));
  }
};
function vc(a, b) {
  var c = a.C, d = b.indexOf("\n", c);
  if (-1 == d)
    return hc$1;
  c = Number(b.substring(c, d));
  if (isNaN(c))
    return gc$1;
  d += 1;
  if (d + c > b.length)
    return hc$1;
  b = b.substr(d, c);
  a.C = d + c;
  return b;
}
k$1.cancel = function() {
  this.I = true;
  P(this);
};
function lc$1(a) {
  a.Y = Date.now() + a.P;
  xc(a, a.P);
}
function xc(a, b) {
  if (null != a.B)
    throw Error("WatchDog timer not null");
  a.B = K$1(q(a.eb, a), b);
}
function pc$1(a) {
  a.B && (l.clearTimeout(a.B), a.B = null);
}
k$1.eb = function() {
  this.B = null;
  const a = Date.now();
  0 <= a - this.Y ? (Qb(this.j, this.A), 2 != this.K && (I(), J$1(17)), P(this), this.o = 2, rc$1(this)) : xc(this, this.Y - a);
};
function rc$1(a) {
  0 == a.l.G || a.I || uc$1(a.l, a);
}
function P(a) {
  pc$1(a);
  var b = a.L;
  b && "function" == typeof b.na && b.na();
  a.L = null;
  Fb(a.W);
  Lb(a.V);
  a.g && (b = a.g, a.g = null, b.abort(), b.na());
}
function sc$1(a, b) {
  try {
    var c = a.l;
    if (0 != c.G && (c.g == a || yc$1(c.i, a))) {
      if (c.I = a.N, !a.J && yc$1(c.i, a) && 3 == c.G) {
        try {
          var d = c.Ca.g.parse(b);
        } catch (m) {
          d = null;
        }
        if (Array.isArray(d) && 3 == d.length) {
          var e = d;
          if (0 == e[0])
            a: {
              if (!c.u) {
                if (c.g)
                  if (c.g.F + 3e3 < a.F)
                    zc$1(c), Ac$1(c);
                  else
                    break a;
                Bc$1(c);
                J$1(18);
              }
            }
          else
            c.ta = e[1], 0 < c.ta - c.U && 37500 > e[2] && c.N && 0 == c.A && !c.v && (c.v = K$1(q(c.ab, c), 6e3));
          if (1 >= Cc(c.i) && c.ka) {
            try {
              c.ka();
            } catch (m) {
            }
            c.ka = void 0;
          }
        } else
          Q$1(c, 11);
      } else if ((a.J || c.g == a) && zc$1(c), !sa$1(b))
        for (e = c.Ca.g.parse(b), b = 0; b < e.length; b++) {
          let m = e[b];
          c.U = m[0];
          m = m[1];
          if (2 == c.G)
            if ("c" == m[0]) {
              c.J = m[1];
              c.la = m[2];
              const r = m[3];
              null != r && (c.ma = r, c.h.info("VER=" + c.ma));
              const G2 = m[4];
              null != G2 && (c.za = G2, c.h.info("SVER=" + c.za));
              const Da2 = m[5];
              null != Da2 && "number" === typeof Da2 && 0 < Da2 && (d = 1.5 * Da2, c.K = d, c.h.info("backChannelRequestTimeoutMs_=" + d));
              d = c;
              const ca = a.g;
              if (ca) {
                const Ea2 = ca.g ? ca.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                if (Ea2) {
                  var f = d.i;
                  !f.g && (w(Ea2, "spdy") || w(Ea2, "quic") || w(Ea2, "h2")) && (f.j = f.l, f.g = /* @__PURE__ */ new Set(), f.h && (Dc(f, f.h), f.h = null));
                }
                if (d.D) {
                  const xb = ca.g ? ca.g.getResponseHeader("X-HTTP-Session-Id") : null;
                  xb && (d.sa = xb, R(d.F, d.D, xb));
                }
              }
              c.G = 3;
              c.j && c.j.xa();
              c.$ && (c.O = Date.now() - a.F, c.h.info("Handshake RTT: " + c.O + "ms"));
              d = c;
              var h = a;
              d.oa = Ec$1(d, d.H ? d.la : null, d.W);
              if (h.J) {
                Fc$1(d.i, h);
                var n = h, u = d.K;
                u && n.setTimeout(u);
                n.B && (pc$1(n), lc$1(n));
                d.g = h;
              } else
                Gc$1(d);
              0 < c.l.length && Hc$1(c);
            } else
              "stop" != m[0] && "close" != m[0] || Q$1(c, 7);
          else
            3 == c.G && ("stop" == m[0] || "close" == m[0] ? "stop" == m[0] ? Q$1(c, 7) : Ic$1(c) : "noop" != m[0] && c.j && c.j.wa(m), c.A = 0);
        }
    }
    I(4);
  } catch (m) {
  }
}
function Jc$1(a) {
  if (a.R && "function" == typeof a.R)
    return a.R();
  if ("string" === typeof a)
    return a.split("");
  if (ba$1(a)) {
    for (var b = [], c = a.length, d = 0; d < c; d++)
      b.push(a[d]);
    return b;
  }
  b = [];
  c = 0;
  for (d in a)
    b[c++] = a[d];
  return b;
}
function Kc(a, b) {
  if (a.forEach && "function" == typeof a.forEach)
    a.forEach(b, void 0);
  else if (ba$1(a) || "string" === typeof a)
    na$1(a, b, void 0);
  else {
    if (a.T && "function" == typeof a.T)
      var c = a.T();
    else if (a.R && "function" == typeof a.R)
      c = void 0;
    else if (ba$1(a) || "string" === typeof a) {
      c = [];
      for (var d = a.length, e = 0; e < d; e++)
        c.push(e);
    } else
      for (e in c = [], d = 0, a)
        c[d++] = e;
    d = Jc$1(a);
    e = d.length;
    for (var f = 0; f < e; f++)
      b.call(void 0, d[f], c && c[f], a);
  }
}
function S(a, b) {
  this.h = {};
  this.g = [];
  this.i = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2)
      throw Error("Uneven number of arguments");
    for (var d = 0; d < c; d += 2)
      this.set(arguments[d], arguments[d + 1]);
  } else if (a)
    if (a instanceof S)
      for (c = a.T(), d = 0; d < c.length; d++)
        this.set(c[d], a.get(c[d]));
    else
      for (d in a)
        this.set(d, a[d]);
}
k$1 = S.prototype;
k$1.R = function() {
  Lc(this);
  for (var a = [], b = 0; b < this.g.length; b++)
    a.push(this.h[this.g[b]]);
  return a;
};
k$1.T = function() {
  Lc(this);
  return this.g.concat();
};
function Lc(a) {
  if (a.i != a.g.length) {
    for (var b = 0, c = 0; b < a.g.length; ) {
      var d = a.g[b];
      T(a.h, d) && (a.g[c++] = d);
      b++;
    }
    a.g.length = c;
  }
  if (a.i != a.g.length) {
    var e = {};
    for (c = b = 0; b < a.g.length; )
      d = a.g[b], T(e, d) || (a.g[c++] = d, e[d] = 1), b++;
    a.g.length = c;
  }
}
k$1.get = function(a, b) {
  return T(this.h, a) ? this.h[a] : b;
};
k$1.set = function(a, b) {
  T(this.h, a) || (this.i++, this.g.push(a));
  this.h[a] = b;
};
k$1.forEach = function(a, b) {
  for (var c = this.T(), d = 0; d < c.length; d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this);
  }
};
function T(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
var Mc$1 = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function Nc(a, b) {
  if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
      var d = a[c].indexOf("="), e = null;
      if (0 <= d) {
        var f = a[c].substring(0, d);
        e = a[c].substring(d + 1);
      } else
        f = a[c];
      b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
    }
  }
}
function U$1(a, b) {
  this.i = this.s = this.j = "";
  this.m = null;
  this.o = this.l = "";
  this.g = false;
  if (a instanceof U$1) {
    this.g = void 0 !== b ? b : a.g;
    Oc(this, a.j);
    this.s = a.s;
    Pc$1(this, a.i);
    Qc(this, a.m);
    this.l = a.l;
    b = a.h;
    var c = new Rc$1();
    c.i = b.i;
    b.g && (c.g = new S(b.g), c.h = b.h);
    Sc(this, c);
    this.o = a.o;
  } else
    a && (c = String(a).match(Mc$1)) ? (this.g = !!b, Oc(this, c[1] || "", true), this.s = Tc$1(c[2] || ""), Pc$1(this, c[3] || "", true), Qc(this, c[4]), this.l = Tc$1(c[5] || "", true), Sc(this, c[6] || "", true), this.o = Tc$1(c[7] || "")) : (this.g = !!b, this.h = new Rc$1(null, this.g));
}
U$1.prototype.toString = function() {
  var a = [], b = this.j;
  b && a.push(Uc(b, Vc, true), ":");
  var c = this.i;
  if (c || "file" == b)
    a.push("//"), (b = this.s) && a.push(Uc(b, Vc, true), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.m, null != c && a.push(":", String(c));
  if (c = this.l)
    this.i && "/" != c.charAt(0) && a.push("/"), a.push(Uc(c, "/" == c.charAt(0) ? Wc : Xc$1, true));
  (c = this.h.toString()) && a.push("?", c);
  (c = this.o) && a.push("#", Uc(c, Yc$1));
  return a.join("");
};
function N$1(a) {
  return new U$1(a);
}
function Oc(a, b, c) {
  a.j = c ? Tc$1(b, true) : b;
  a.j && (a.j = a.j.replace(/:$/, ""));
}
function Pc$1(a, b, c) {
  a.i = c ? Tc$1(b, true) : b;
}
function Qc(a, b) {
  if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b)
      throw Error("Bad port number " + b);
    a.m = b;
  } else
    a.m = null;
}
function Sc(a, b, c) {
  b instanceof Rc$1 ? (a.h = b, Zc(a.h, a.g)) : (c || (b = Uc(b, $c)), a.h = new Rc$1(b, a.g));
}
function R(a, b, c) {
  a.h.set(b, c);
}
function jc(a) {
  R(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36));
  return a;
}
function ad(a) {
  return a instanceof U$1 ? N$1(a) : new U$1(a, void 0);
}
function bd(a, b, c, d) {
  var e = new U$1(null, void 0);
  a && Oc(e, a);
  b && Pc$1(e, b);
  c && Qc(e, c);
  d && (e.l = d);
  return e;
}
function Tc$1(a, b) {
  return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
}
function Uc(a, b, c) {
  return "string" === typeof a ? (a = encodeURI(a).replace(b, cd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}
function cd(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}
var Vc = /[#\/\?@]/g, Xc$1 = /[#\?:]/g, Wc = /[#\?]/g, $c = /[#\?@]/g, Yc$1 = /#/g;
function Rc$1(a, b) {
  this.h = this.g = null;
  this.i = a || null;
  this.j = !!b;
}
function V(a) {
  a.g || (a.g = new S(), a.h = 0, a.i && Nc(a.i, function(b, c) {
    a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
  }));
}
k$1 = Rc$1.prototype;
k$1.add = function(a, b) {
  V(this);
  this.i = null;
  a = W$1(this, a);
  var c = this.g.get(a);
  c || this.g.set(a, c = []);
  c.push(b);
  this.h += 1;
  return this;
};
function dd(a, b) {
  V(a);
  b = W$1(a, b);
  T(a.g.h, b) && (a.i = null, a.h -= a.g.get(b).length, a = a.g, T(a.h, b) && (delete a.h[b], a.i--, a.g.length > 2 * a.i && Lc(a)));
}
function ed(a, b) {
  V(a);
  b = W$1(a, b);
  return T(a.g.h, b);
}
k$1.forEach = function(a, b) {
  V(this);
  this.g.forEach(function(c, d) {
    na$1(c, function(e) {
      a.call(b, e, d, this);
    }, this);
  }, this);
};
k$1.T = function() {
  V(this);
  for (var a = this.g.R(), b = this.g.T(), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++)
      c.push(b[d]);
  return c;
};
k$1.R = function(a) {
  V(this);
  var b = [];
  if ("string" === typeof a)
    ed(this, a) && (b = qa(b, this.g.get(W$1(this, a))));
  else {
    a = this.g.R();
    for (var c = 0; c < a.length; c++)
      b = qa(b, a[c]);
  }
  return b;
};
k$1.set = function(a, b) {
  V(this);
  this.i = null;
  a = W$1(this, a);
  ed(this, a) && (this.h -= this.g.get(a).length);
  this.g.set(a, [b]);
  this.h += 1;
  return this;
};
k$1.get = function(a, b) {
  if (!a)
    return b;
  a = this.R(a);
  return 0 < a.length ? String(a[0]) : b;
};
function mc(a, b, c) {
  dd(a, b);
  0 < c.length && (a.i = null, a.g.set(W$1(a, b), ra(c)), a.h += c.length);
}
k$1.toString = function() {
  if (this.i)
    return this.i;
  if (!this.g)
    return "";
  for (var a = [], b = this.g.T(), c = 0; c < b.length; c++) {
    var d = b[c], e = encodeURIComponent(String(d));
    d = this.R(d);
    for (var f = 0; f < d.length; f++) {
      var h = e;
      "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
      a.push(h);
    }
  }
  return this.i = a.join("&");
};
function W$1(a, b) {
  b = String(b);
  a.j && (b = b.toLowerCase());
  return b;
}
function Zc(a, b) {
  b && !a.j && (V(a), a.i = null, a.g.forEach(function(c, d) {
    var e = d.toLowerCase();
    d != e && (dd(this, d), mc(this, e, c));
  }, a));
  a.j = b;
}
var fd = class {
  constructor(a, b) {
    this.h = a;
    this.g = b;
  }
};
function gd(a) {
  this.l = a || hd;
  l.PerformanceNavigationTiming ? (a = l.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(l.g && l.g.Ea && l.g.Ea() && l.g.Ea().Zb);
  this.j = a ? this.l : 1;
  this.g = null;
  1 < this.j && (this.g = /* @__PURE__ */ new Set());
  this.h = null;
  this.i = [];
}
var hd = 10;
function id(a) {
  return a.h ? true : a.g ? a.g.size >= a.j : false;
}
function Cc(a) {
  return a.h ? 1 : a.g ? a.g.size : 0;
}
function yc$1(a, b) {
  return a.h ? a.h == b : a.g ? a.g.has(b) : false;
}
function Dc(a, b) {
  a.g ? a.g.add(b) : a.h = b;
}
function Fc$1(a, b) {
  a.h && a.h == b ? a.h = null : a.g && a.g.has(b) && a.g.delete(b);
}
gd.prototype.cancel = function() {
  this.i = jd(this);
  if (this.h)
    this.h.cancel(), this.h = null;
  else if (this.g && 0 !== this.g.size) {
    for (const a of this.g.values())
      a.cancel();
    this.g.clear();
  }
};
function jd(a) {
  if (null != a.h)
    return a.i.concat(a.h.D);
  if (null != a.g && 0 !== a.g.size) {
    let b = a.i;
    for (const c of a.g.values())
      b = b.concat(c.D);
    return b;
  }
  return ra(a.i);
}
function kd() {
}
kd.prototype.stringify = function(a) {
  return l.JSON.stringify(a, void 0);
};
kd.prototype.parse = function(a) {
  return l.JSON.parse(a, void 0);
};
function ld() {
  this.g = new kd();
}
function md(a, b, c) {
  const d = c || "";
  try {
    Kc(a, function(e, f) {
      let h = e;
      p(e) && (h = rb(e));
      b.push(d + f + "=" + encodeURIComponent(h));
    });
  } catch (e) {
    throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
  }
}
function nd(a, b) {
  const c = new Mb();
  if (l.Image) {
    const d = new Image();
    d.onload = ja(od, c, d, "TestLoadImage: loaded", true, b);
    d.onerror = ja(od, c, d, "TestLoadImage: error", false, b);
    d.onabort = ja(od, c, d, "TestLoadImage: abort", false, b);
    d.ontimeout = ja(od, c, d, "TestLoadImage: timeout", false, b);
    l.setTimeout(function() {
      if (d.ontimeout)
        d.ontimeout();
    }, 1e4);
    d.src = a;
  } else
    b(false);
}
function od(a, b, c, d, e) {
  try {
    b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d);
  } catch (f) {
  }
}
function pd(a) {
  this.l = a.$b || null;
  this.j = a.ib || false;
}
t(pd, Yb);
pd.prototype.g = function() {
  return new qd(this.l, this.j);
};
pd.prototype.i = function(a) {
  return function() {
    return a;
  };
}({});
function qd(a, b) {
  C$1.call(this);
  this.D = a;
  this.u = b;
  this.m = void 0;
  this.readyState = rd;
  this.status = 0;
  this.responseType = this.responseText = this.response = this.statusText = "";
  this.onreadystatechange = null;
  this.v = new Headers();
  this.h = null;
  this.C = "GET";
  this.B = "";
  this.g = false;
  this.A = this.j = this.l = null;
}
t(qd, C$1);
var rd = 0;
k$1 = qd.prototype;
k$1.open = function(a, b) {
  if (this.readyState != rd)
    throw this.abort(), Error("Error reopening a connection");
  this.C = a;
  this.B = b;
  this.readyState = 1;
  sd(this);
};
k$1.send = function(a) {
  if (1 != this.readyState)
    throw this.abort(), Error("need to call open() first. ");
  this.g = true;
  const b = { headers: this.v, method: this.C, credentials: this.m, cache: void 0 };
  a && (b.body = a);
  (this.D || l).fetch(new Request(this.B, b)).then(this.Va.bind(this), this.ha.bind(this));
};
k$1.abort = function() {
  this.response = this.responseText = "";
  this.v = new Headers();
  this.status = 0;
  this.j && this.j.cancel("Request was aborted.");
  1 <= this.readyState && this.g && 4 != this.readyState && (this.g = false, td(this));
  this.readyState = rd;
};
k$1.Va = function(a) {
  if (this.g && (this.l = a, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = a.headers, this.readyState = 2, sd(this)), this.g && (this.readyState = 3, sd(this), this.g)))
    if ("arraybuffer" === this.responseType)
      a.arrayBuffer().then(this.Ta.bind(this), this.ha.bind(this));
    else if ("undefined" !== typeof l.ReadableStream && "body" in a) {
      this.j = a.body.getReader();
      if (this.u) {
        if (this.responseType)
          throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
        this.response = [];
      } else
        this.response = this.responseText = "", this.A = new TextDecoder();
      ud(this);
    } else
      a.text().then(this.Ua.bind(this), this.ha.bind(this));
};
function ud(a) {
  a.j.read().then(a.Sa.bind(a)).catch(a.ha.bind(a));
}
k$1.Sa = function(a) {
  if (this.g) {
    if (this.u && a.value)
      this.response.push(a.value);
    else if (!this.u) {
      var b = a.value ? a.value : new Uint8Array(0);
      if (b = this.A.decode(b, { stream: !a.done }))
        this.response = this.responseText += b;
    }
    a.done ? td(this) : sd(this);
    3 == this.readyState && ud(this);
  }
};
k$1.Ua = function(a) {
  this.g && (this.response = this.responseText = a, td(this));
};
k$1.Ta = function(a) {
  this.g && (this.response = a, td(this));
};
k$1.ha = function() {
  this.g && td(this);
};
function td(a) {
  a.readyState = 4;
  a.l = null;
  a.j = null;
  a.A = null;
  sd(a);
}
k$1.setRequestHeader = function(a, b) {
  this.v.append(a, b);
};
k$1.getResponseHeader = function(a) {
  return this.h ? this.h.get(a.toLowerCase()) || "" : "";
};
k$1.getAllResponseHeaders = function() {
  if (!this.h)
    return "";
  const a = [], b = this.h.entries();
  for (var c = b.next(); !c.done; )
    c = c.value, a.push(c[0] + ": " + c[1]), c = b.next();
  return a.join("\r\n");
};
function sd(a) {
  a.onreadystatechange && a.onreadystatechange.call(a);
}
Object.defineProperty(qd.prototype, "withCredentials", { get: function() {
  return "include" === this.m;
}, set: function(a) {
  this.m = a ? "include" : "same-origin";
} });
var vd = l.JSON.parse;
function X$1(a) {
  C$1.call(this);
  this.headers = new S();
  this.u = a || null;
  this.h = false;
  this.C = this.g = null;
  this.H = "";
  this.m = 0;
  this.j = "";
  this.l = this.F = this.v = this.D = false;
  this.B = 0;
  this.A = null;
  this.J = wd;
  this.K = this.L = false;
}
t(X$1, C$1);
var wd = "", xd = /^https?$/i, yd = ["POST", "PUT"];
k$1 = X$1.prototype;
k$1.ea = function(a, b, c, d) {
  if (this.g)
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.H + "; newUri=" + a);
  b = b ? b.toUpperCase() : "GET";
  this.H = a;
  this.j = "";
  this.m = 0;
  this.D = false;
  this.h = true;
  this.g = this.u ? this.u.g() : cc$1.g();
  this.C = this.u ? Zb(this.u) : Zb(cc$1);
  this.g.onreadystatechange = q(this.Fa, this);
  try {
    this.F = true, this.g.open(b, String(a), true), this.F = false;
  } catch (f) {
    zd(this, f);
    return;
  }
  a = c || "";
  const e = new S(this.headers);
  d && Kc(d, function(f, h) {
    e.set(h, f);
  });
  d = oa(e.T());
  c = l.FormData && a instanceof l.FormData;
  !(0 <= ma$1(yd, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  e.forEach(function(f, h) {
    this.g.setRequestHeader(h, f);
  }, this);
  this.J && (this.g.responseType = this.J);
  "withCredentials" in this.g && this.g.withCredentials !== this.L && (this.g.withCredentials = this.L);
  try {
    Ad(this), 0 < this.B && ((this.K = Bd(this.g)) ? (this.g.timeout = this.B, this.g.ontimeout = q(this.pa, this)) : this.A = Gb(this.pa, this.B, this)), this.v = true, this.g.send(a), this.v = false;
  } catch (f) {
    zd(this, f);
  }
};
function Bd(a) {
  return y && Ra$1() && "number" === typeof a.timeout && void 0 !== a.ontimeout;
}
function pa$1(a) {
  return "content-type" == a.toLowerCase();
}
k$1.pa = function() {
  "undefined" != typeof goog && this.g && (this.j = "Timed out after " + this.B + "ms, aborting", this.m = 8, D$1(this, "timeout"), this.abort(8));
};
function zd(a, b) {
  a.h = false;
  a.g && (a.l = true, a.g.abort(), a.l = false);
  a.j = b;
  a.m = 5;
  Cd(a);
  Dd(a);
}
function Cd(a) {
  a.D || (a.D = true, D$1(a, "complete"), D$1(a, "error"));
}
k$1.abort = function(a) {
  this.g && this.h && (this.h = false, this.l = true, this.g.abort(), this.l = false, this.m = a || 7, D$1(this, "complete"), D$1(this, "abort"), Dd(this));
};
k$1.M = function() {
  this.g && (this.h && (this.h = false, this.l = true, this.g.abort(), this.l = false), Dd(this, true));
  X$1.Z.M.call(this);
};
k$1.Fa = function() {
  this.s || (this.F || this.v || this.l ? Ed(this) : this.cb());
};
k$1.cb = function() {
  Ed(this);
};
function Ed(a) {
  if (a.h && "undefined" != typeof goog && (!a.C[1] || 4 != O$1(a) || 2 != a.ba())) {
    if (a.v && 4 == O$1(a))
      Gb(a.Fa, 0, a);
    else if (D$1(a, "readystatechange"), 4 == O$1(a)) {
      a.h = false;
      try {
        const n = a.ba();
        a:
          switch (n) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var b = true;
              break a;
            default:
              b = false;
          }
        var c;
        if (!(c = b)) {
          var d;
          if (d = 0 === n) {
            var e = String(a.H).match(Mc$1)[1] || null;
            if (!e && l.self && l.self.location) {
              var f = l.self.location.protocol;
              e = f.substr(0, f.length - 1);
            }
            d = !xd.test(e ? e.toLowerCase() : "");
          }
          c = d;
        }
        if (c)
          D$1(a, "complete"), D$1(
            a,
            "success"
          );
        else {
          a.m = 6;
          try {
            var h = 2 < O$1(a) ? a.g.statusText : "";
          } catch (u) {
            h = "";
          }
          a.j = h + " [" + a.ba() + "]";
          Cd(a);
        }
      } finally {
        Dd(a);
      }
    }
  }
}
function Dd(a, b) {
  if (a.g) {
    Ad(a);
    const c = a.g, d = a.C[0] ? aa$1 : null;
    a.g = null;
    a.C = null;
    b || D$1(a, "ready");
    try {
      c.onreadystatechange = d;
    } catch (e) {
    }
  }
}
function Ad(a) {
  a.g && a.K && (a.g.ontimeout = null);
  a.A && (l.clearTimeout(a.A), a.A = null);
}
function O$1(a) {
  return a.g ? a.g.readyState : 0;
}
k$1.ba = function() {
  try {
    return 2 < O$1(this) ? this.g.status : -1;
  } catch (a) {
    return -1;
  }
};
k$1.ga = function() {
  try {
    return this.g ? this.g.responseText : "";
  } catch (a) {
    return "";
  }
};
k$1.Qa = function(a) {
  if (this.g) {
    var b = this.g.responseText;
    a && 0 == b.indexOf(a) && (b = b.substring(a.length));
    return vd(b);
  }
};
function oc$1(a) {
  try {
    if (!a.g)
      return null;
    if ("response" in a.g)
      return a.g.response;
    switch (a.J) {
      case wd:
      case "text":
        return a.g.responseText;
      case "arraybuffer":
        if ("mozResponseArrayBuffer" in a.g)
          return a.g.mozResponseArrayBuffer;
    }
    return null;
  } catch (b) {
    return null;
  }
}
k$1.Da = function() {
  return this.m;
};
k$1.La = function() {
  return "string" === typeof this.j ? this.j : String(this.j);
};
function Fd(a) {
  let b = "";
  xa(a, function(c, d) {
    b += d;
    b += ":";
    b += c;
    b += "\r\n";
  });
  return b;
}
function Gd(a, b, c) {
  a: {
    for (d in c) {
      var d = false;
      break a;
    }
    d = true;
  }
  d || (c = Fd(c), "string" === typeof a ? null != c && encodeURIComponent(String(c)) : R(a, b, c));
}
function Hd(a, b, c) {
  return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b;
}
function Id(a) {
  this.za = 0;
  this.l = [];
  this.h = new Mb();
  this.la = this.oa = this.F = this.W = this.g = this.sa = this.D = this.aa = this.o = this.P = this.s = null;
  this.Za = this.V = 0;
  this.Xa = Hd("failFast", false, a);
  this.N = this.v = this.u = this.m = this.j = null;
  this.X = true;
  this.I = this.ta = this.U = -1;
  this.Y = this.A = this.C = 0;
  this.Pa = Hd("baseRetryDelayMs", 5e3, a);
  this.$a = Hd("retryDelaySeedMs", 1e4, a);
  this.Ya = Hd("forwardChannelMaxRetries", 2, a);
  this.ra = Hd("forwardChannelRequestTimeoutMs", 2e4, a);
  this.qa = a && a.xmlHttpFactory || void 0;
  this.Ba = a && a.Yb || false;
  this.K = void 0;
  this.H = a && a.supportsCrossDomainXhr || false;
  this.J = "";
  this.i = new gd(a && a.concurrentRequestLimit);
  this.Ca = new ld();
  this.ja = a && a.fastHandshake || false;
  this.Ra = a && a.Wb || false;
  a && a.Aa && this.h.Aa();
  a && a.forceLongPolling && (this.X = false);
  this.$ = !this.ja && this.X && a && a.detectBufferingProxy || false;
  this.ka = void 0;
  this.O = 0;
  this.L = false;
  this.B = null;
  this.Wa = !a || false !== a.Xb;
}
k$1 = Id.prototype;
k$1.ma = 8;
k$1.G = 1;
function Ic$1(a) {
  Jd(a);
  if (3 == a.G) {
    var b = a.V++, c = N$1(a.F);
    R(c, "SID", a.J);
    R(c, "RID", b);
    R(c, "TYPE", "terminate");
    Kd(a, c);
    b = new M$1(a, a.h, b, void 0);
    b.K = 2;
    b.v = jc(N$1(c));
    c = false;
    l.navigator && l.navigator.sendBeacon && (c = l.navigator.sendBeacon(b.v.toString(), ""));
    !c && l.Image && (new Image().src = b.v, c = true);
    c || (b.g = nc$1(b.l, null), b.g.ea(b.v));
    b.F = Date.now();
    lc$1(b);
  }
  Ld(a);
}
k$1.hb = function(a) {
  try {
    this.h.info("Origin Trials invoked: " + a);
  } catch (b) {
  }
};
function Ac$1(a) {
  a.g && (wc$1(a), a.g.cancel(), a.g = null);
}
function Jd(a) {
  Ac$1(a);
  a.u && (l.clearTimeout(a.u), a.u = null);
  zc$1(a);
  a.i.cancel();
  a.m && ("number" === typeof a.m && l.clearTimeout(a.m), a.m = null);
}
function Md(a, b) {
  a.l.push(new fd(a.Za++, b));
  3 == a.G && Hc$1(a);
}
function Hc$1(a) {
  id(a.i) || a.m || (a.m = true, zb(a.Ha, a), a.C = 0);
}
function Nd(a, b) {
  if (Cc(a.i) >= a.i.j - (a.m ? 1 : 0))
    return false;
  if (a.m)
    return a.l = b.D.concat(a.l), true;
  if (1 == a.G || 2 == a.G || a.C >= (a.Xa ? 0 : a.Ya))
    return false;
  a.m = K$1(q(a.Ha, a, b), Od(a, a.C));
  a.C++;
  return true;
}
k$1.Ha = function(a) {
  if (this.m)
    if (this.m = null, 1 == this.G) {
      if (!a) {
        this.V = Math.floor(1e5 * Math.random());
        a = this.V++;
        const e = new M$1(this, this.h, a, void 0);
        let f = this.s;
        this.P && (f ? (f = ya$1(f), Aa$1(f, this.P)) : f = this.P);
        null === this.o && (e.H = f);
        if (this.ja)
          a: {
            var b = 0;
            for (var c = 0; c < this.l.length; c++) {
              b: {
                var d = this.l[c];
                if ("__data__" in d.g && (d = d.g.__data__, "string" === typeof d)) {
                  d = d.length;
                  break b;
                }
                d = void 0;
              }
              if (void 0 === d)
                break;
              b += d;
              if (4096 < b) {
                b = c;
                break a;
              }
              if (4096 === b || c === this.l.length - 1) {
                b = c + 1;
                break a;
              }
            }
            b = 1e3;
          }
        else
          b = 1e3;
        b = Pd(this, e, b);
        c = N$1(this.F);
        R(c, "RID", a);
        R(c, "CVER", 22);
        this.D && R(c, "X-HTTP-Session-Id", this.D);
        Kd(this, c);
        this.o && f && Gd(c, this.o, f);
        Dc(this.i, e);
        this.Ra && R(c, "TYPE", "init");
        this.ja ? (R(c, "$req", b), R(c, "SID", "null"), e.$ = true, ic$1(e, c, null)) : ic$1(e, c, b);
        this.G = 2;
      }
    } else
      3 == this.G && (a ? Qd(this, a) : 0 == this.l.length || id(this.i) || Qd(this));
};
function Qd(a, b) {
  var c;
  b ? c = b.m : c = a.V++;
  const d = N$1(a.F);
  R(d, "SID", a.J);
  R(d, "RID", c);
  R(d, "AID", a.U);
  Kd(a, d);
  a.o && a.s && Gd(d, a.o, a.s);
  c = new M$1(a, a.h, c, a.C + 1);
  null === a.o && (c.H = a.s);
  b && (a.l = b.D.concat(a.l));
  b = Pd(a, c, 1e3);
  c.setTimeout(Math.round(0.5 * a.ra) + Math.round(0.5 * a.ra * Math.random()));
  Dc(a.i, c);
  ic$1(c, d, b);
}
function Kd(a, b) {
  a.j && Kc({}, function(c, d) {
    R(b, d, c);
  });
}
function Pd(a, b, c) {
  c = Math.min(a.l.length, c);
  var d = a.j ? q(a.j.Oa, a.j, a) : null;
  a: {
    var e = a.l;
    let f = -1;
    for (; ; ) {
      const h = ["count=" + c];
      -1 == f ? 0 < c ? (f = e[0].h, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
      let n = true;
      for (let u = 0; u < c; u++) {
        let m = e[u].h;
        const r = e[u].g;
        m -= f;
        if (0 > m)
          f = Math.max(0, e[u].h - 100), n = false;
        else
          try {
            md(r, h, "req" + m + "_");
          } catch (G2) {
            d && d(r);
          }
      }
      if (n) {
        d = h.join("&");
        break a;
      }
    }
  }
  a = a.l.splice(0, c);
  b.D = a;
  return d;
}
function Gc$1(a) {
  a.g || a.u || (a.Y = 1, zb(a.Ga, a), a.A = 0);
}
function Bc$1(a) {
  if (a.g || a.u || 3 <= a.A)
    return false;
  a.Y++;
  a.u = K$1(q(a.Ga, a), Od(a, a.A));
  a.A++;
  return true;
}
k$1.Ga = function() {
  this.u = null;
  Rd(this);
  if (this.$ && !(this.L || null == this.g || 0 >= this.O)) {
    var a = 2 * this.O;
    this.h.info("BP detection timer enabled: " + a);
    this.B = K$1(q(this.bb, this), a);
  }
};
k$1.bb = function() {
  this.B && (this.B = null, this.h.info("BP detection timeout reached."), this.h.info("Buffering proxy detected and switch to long-polling!"), this.N = false, this.L = true, J$1(10), Ac$1(this), Rd(this));
};
function wc$1(a) {
  null != a.B && (l.clearTimeout(a.B), a.B = null);
}
function Rd(a) {
  a.g = new M$1(a, a.h, "rpc", a.Y);
  null === a.o && (a.g.H = a.s);
  a.g.O = 0;
  var b = N$1(a.oa);
  R(b, "RID", "rpc");
  R(b, "SID", a.J);
  R(b, "CI", a.N ? "0" : "1");
  R(b, "AID", a.U);
  Kd(a, b);
  R(b, "TYPE", "xmlhttp");
  a.o && a.s && Gd(b, a.o, a.s);
  a.K && a.g.setTimeout(a.K);
  var c = a.g;
  a = a.la;
  c.K = 1;
  c.v = jc(N$1(b));
  c.s = null;
  c.U = true;
  kc(c, a);
}
k$1.ab = function() {
  null != this.v && (this.v = null, Ac$1(this), Bc$1(this), J$1(19));
};
function zc$1(a) {
  null != a.v && (l.clearTimeout(a.v), a.v = null);
}
function uc$1(a, b) {
  var c = null;
  if (a.g == b) {
    zc$1(a);
    wc$1(a);
    a.g = null;
    var d = 2;
  } else if (yc$1(a.i, b))
    c = b.D, Fc$1(a.i, b), d = 1;
  else
    return;
  a.I = b.N;
  if (0 != a.G) {
    if (b.i)
      if (1 == d) {
        c = b.s ? b.s.length : 0;
        b = Date.now() - b.F;
        var e = a.C;
        d = Sb();
        D$1(d, new Vb(d, c));
        Hc$1(a);
      } else
        Gc$1(a);
    else if (e = b.o, 3 == e || 0 == e && 0 < a.I || !(1 == d && Nd(a, b) || 2 == d && Bc$1(a)))
      switch (c && 0 < c.length && (b = a.i, b.i = b.i.concat(c)), e) {
        case 1:
          Q$1(a, 5);
          break;
        case 4:
          Q$1(a, 10);
          break;
        case 3:
          Q$1(a, 6);
          break;
        default:
          Q$1(a, 2);
      }
  }
}
function Od(a, b) {
  let c = a.Pa + Math.floor(Math.random() * a.$a);
  a.j || (c *= 2);
  return c * b;
}
function Q$1(a, b) {
  a.h.info("Error code " + b);
  if (2 == b) {
    var c = null;
    a.j && (c = null);
    var d = q(a.jb, a);
    c || (c = new U$1("//www.google.com/images/cleardot.gif"), l.location && "http" == l.location.protocol || Oc(c, "https"), jc(c));
    nd(c.toString(), d);
  } else
    J$1(2);
  a.G = 0;
  a.j && a.j.va(b);
  Ld(a);
  Jd(a);
}
k$1.jb = function(a) {
  a ? (this.h.info("Successfully pinged google.com"), J$1(2)) : (this.h.info("Failed to ping google.com"), J$1(1));
};
function Ld(a) {
  a.G = 0;
  a.I = -1;
  if (a.j) {
    if (0 != jd(a.i).length || 0 != a.l.length)
      a.i.i.length = 0, ra(a.l), a.l.length = 0;
    a.j.ua();
  }
}
function Ec$1(a, b, c) {
  let d = ad(c);
  if ("" != d.i)
    b && Pc$1(d, b + "." + d.i), Qc(d, d.m);
  else {
    const e = l.location;
    d = bd(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
  }
  a.aa && xa(a.aa, function(e, f) {
    R(d, f, e);
  });
  b = a.D;
  c = a.sa;
  b && c && R(d, b, c);
  R(d, "VER", a.ma);
  Kd(a, d);
  return d;
}
function nc$1(a, b, c) {
  if (b && !a.H)
    throw Error("Can't create secondary domain capable XhrIo object.");
  b = c && a.Ba && !a.qa ? new X$1(new pd({ ib: true })) : new X$1(a.qa);
  b.L = a.H;
  return b;
}
function Sd() {
}
k$1 = Sd.prototype;
k$1.xa = function() {
};
k$1.wa = function() {
};
k$1.va = function() {
};
k$1.ua = function() {
};
k$1.Oa = function() {
};
function Td() {
  if (y && !(10 <= Number(Ua$1)))
    throw Error("Environmental error: no available transport.");
}
Td.prototype.g = function(a, b) {
  return new Y$1(a, b);
};
function Y$1(a, b) {
  C$1.call(this);
  this.g = new Id(b);
  this.l = a;
  this.h = b && b.messageUrlParams || null;
  a = b && b.messageHeaders || null;
  b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" });
  this.g.s = a;
  a = b && b.initMessageHeaders || null;
  b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = { "X-WebChannel-Content-Type": b.messageContentType });
  b && b.ya && (a ? a["X-WebChannel-Client-Profile"] = b.ya : a = { "X-WebChannel-Client-Profile": b.ya });
  this.g.P = a;
  (a = b && b.httpHeadersOverwriteParam) && !sa$1(a) && (this.g.o = a);
  this.A = b && b.supportsCrossDomainXhr || false;
  this.v = b && b.sendRawJson || false;
  (b = b && b.httpSessionIdParam) && !sa$1(b) && (this.g.D = b, a = this.h, null !== a && b in a && (a = this.h, b in a && delete a[b]));
  this.j = new Z$1(this);
}
t(Y$1, C$1);
Y$1.prototype.m = function() {
  this.g.j = this.j;
  this.A && (this.g.H = true);
  var a = this.g, b = this.l, c = this.h || void 0;
  a.Wa && (a.h.info("Origin Trials enabled."), zb(q(a.hb, a, b)));
  J$1(0);
  a.W = b;
  a.aa = c || {};
  a.N = a.X;
  a.F = Ec$1(a, null, a.W);
  Hc$1(a);
};
Y$1.prototype.close = function() {
  Ic$1(this.g);
};
Y$1.prototype.u = function(a) {
  if ("string" === typeof a) {
    var b = {};
    b.__data__ = a;
    Md(this.g, b);
  } else
    this.v ? (b = {}, b.__data__ = rb(a), Md(this.g, b)) : Md(this.g, a);
};
Y$1.prototype.M = function() {
  this.g.j = null;
  delete this.j;
  Ic$1(this.g);
  delete this.g;
  Y$1.Z.M.call(this);
};
function Ud(a) {
  ac$1.call(this);
  var b = a.__sm__;
  if (b) {
    a: {
      for (const c in b) {
        a = c;
        break a;
      }
      a = void 0;
    }
    if (this.i = a)
      a = this.i, b = null !== b && a in b ? b[a] : void 0;
    this.data = b;
  } else
    this.data = a;
}
t(Ud, ac$1);
function Vd() {
  bc$1.call(this);
  this.status = 1;
}
t(Vd, bc$1);
function Z$1(a) {
  this.g = a;
}
t(Z$1, Sd);
Z$1.prototype.xa = function() {
  D$1(this.g, "a");
};
Z$1.prototype.wa = function(a) {
  D$1(this.g, new Ud(a));
};
Z$1.prototype.va = function(a) {
  D$1(this.g, new Vd());
};
Z$1.prototype.ua = function() {
  D$1(this.g, "b");
};
Td.prototype.createWebChannel = Td.prototype.g;
Y$1.prototype.send = Y$1.prototype.u;
Y$1.prototype.open = Y$1.prototype.m;
Y$1.prototype.close = Y$1.prototype.close;
Wb.NO_ERROR = 0;
Wb.TIMEOUT = 8;
Wb.HTTP_ERROR = 6;
Xb.COMPLETE = "complete";
$b.EventType = L$1;
L$1.OPEN = "a";
L$1.CLOSE = "b";
L$1.ERROR = "c";
L$1.MESSAGE = "d";
C$1.prototype.listen = C$1.prototype.N;
X$1.prototype.listenOnce = X$1.prototype.O;
X$1.prototype.getLastError = X$1.prototype.La;
X$1.prototype.getLastErrorCode = X$1.prototype.Da;
X$1.prototype.getStatus = X$1.prototype.ba;
X$1.prototype.getResponseJson = X$1.prototype.Qa;
X$1.prototype.getResponseText = X$1.prototype.ga;
X$1.prototype.send = X$1.prototype.ea;
var createWebChannelTransport = function() {
  return new Td();
};
var getStatEventTarget = function() {
  return Sb();
};
var ErrorCode = Wb;
var EventType = Xb;
var Event = H$1;
var Stat = { rb: 0, ub: 1, vb: 2, Ob: 3, Tb: 4, Qb: 5, Rb: 6, Pb: 7, Nb: 8, Sb: 9, PROXY: 10, NOPROXY: 11, Lb: 12, Hb: 13, Ib: 14, Gb: 15, Jb: 16, Kb: 17, nb: 18, mb: 19, ob: 20 };
var FetchXmlHttpFactory = pd;
var WebChannel = $b;
var XhrIo = X$1;
const D = "@firebase/firestore";
class C {
  constructor(t2) {
    this.uid = t2;
  }
  isAuthenticated() {
    return null != this.uid;
  }
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(t2) {
    return t2.uid === this.uid;
  }
}
C.UNAUTHENTICATED = new C(null), C.GOOGLE_CREDENTIALS = new C("google-credentials-uid"), C.FIRST_PARTY = new C("first-party-uid"), C.MOCK_USER = new C("mock-user");
let x = "9.9.0";
const N = new Logger("@firebase/firestore");
function k() {
  return N.logLevel;
}
function O(t2) {
  N.setLogLevel(t2);
}
function M(t2, ...e) {
  if (N.logLevel <= LogLevel.DEBUG) {
    const n = e.map(B);
    N.debug(`Firestore (${x}): ${t2}`, ...n);
  }
}
function F(t2, ...e) {
  if (N.logLevel <= LogLevel.ERROR) {
    const n = e.map(B);
    N.error(`Firestore (${x}): ${t2}`, ...n);
  }
}
function $(t2, ...e) {
  if (N.logLevel <= LogLevel.WARN) {
    const n = e.map(B);
    N.warn(`Firestore (${x}): ${t2}`, ...n);
  }
}
function B(t2) {
  if ("string" == typeof t2)
    return t2;
  try {
    return e = t2, JSON.stringify(e);
  } catch (e2) {
    return t2;
  }
  var e;
}
function L(t2 = "Unexpected state") {
  const e = `FIRESTORE (${x}) INTERNAL ASSERTION FAILED: ` + t2;
  throw F(e), new Error(e);
}
function U(t2, e) {
  t2 || L();
}
function K(t2, e) {
  return t2;
}
const G = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss"
};
class Q extends FirebaseError {
  constructor(t2, e) {
    super(t2, e), this.code = t2, this.message = e, this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
  }
}
class j {
  constructor() {
    this.promise = new Promise((t2, e) => {
      this.resolve = t2, this.reject = e;
    });
  }
}
class W {
  constructor(t2, e) {
    this.user = e, this.type = "OAuth", this.headers = /* @__PURE__ */ new Map(), this.headers.set("Authorization", `Bearer ${t2}`);
  }
}
class z {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {
  }
  start(t2, e) {
    t2.enqueueRetryable(() => e(C.UNAUTHENTICATED));
  }
  shutdown() {
  }
}
class H {
  constructor(t2) {
    this.token = t2, this.changeListener = null;
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {
  }
  start(t2, e) {
    this.changeListener = e, t2.enqueueRetryable(() => e(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class J {
  constructor(t2) {
    this.t = t2, this.currentUser = C.UNAUTHENTICATED, this.i = 0, this.forceRefresh = false, this.auth = null;
  }
  start(t2, e) {
    let n = this.i;
    const s = (t3) => this.i !== n ? (n = this.i, e(t3)) : Promise.resolve();
    let i = new j();
    this.o = () => {
      this.i++, this.currentUser = this.u(), i.resolve(), i = new j(), t2.enqueueRetryable(() => s(this.currentUser));
    };
    const r = () => {
      const e2 = i;
      t2.enqueueRetryable(async () => {
        await e2.promise, await s(this.currentUser);
      });
    }, o = (t3) => {
      M("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = t3, this.auth.addAuthTokenListener(this.o), r();
    };
    this.t.onInit((t3) => o(t3)), setTimeout(() => {
      if (!this.auth) {
        const t3 = this.t.getImmediate({
          optional: true
        });
        t3 ? o(t3) : (M("FirebaseAuthCredentialsProvider", "Auth not yet detected"), i.resolve(), i = new j());
      }
    }, 0), r();
  }
  getToken() {
    const t2 = this.i, e = this.forceRefresh;
    return this.forceRefresh = false, this.auth ? this.auth.getToken(e).then((e2) => this.i !== t2 ? (M("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : e2 ? (U("string" == typeof e2.accessToken), new W(e2.accessToken, this.currentUser)) : null) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = true;
  }
  shutdown() {
    this.auth && this.auth.removeAuthTokenListener(this.o);
  }
  u() {
    const t2 = this.auth && this.auth.getUid();
    return U(null === t2 || "string" == typeof t2), new C(t2);
  }
}
class Y {
  constructor(t2, e, n) {
    this.type = "FirstParty", this.user = C.FIRST_PARTY, this.headers = /* @__PURE__ */ new Map(), this.headers.set("X-Goog-AuthUser", e);
    const s = t2.auth.getAuthHeaderValueForFirstParty([]);
    s && this.headers.set("Authorization", s), n && this.headers.set("X-Goog-Iam-Authorization-Token", n);
  }
}
class X {
  constructor(t2, e, n) {
    this.h = t2, this.l = e, this.m = n;
  }
  getToken() {
    return Promise.resolve(new Y(this.h, this.l, this.m));
  }
  start(t2, e) {
    t2.enqueueRetryable(() => e(C.FIRST_PARTY));
  }
  shutdown() {
  }
  invalidateToken() {
  }
}
class Z {
  constructor(t2) {
    this.value = t2, this.type = "AppCheck", this.headers = /* @__PURE__ */ new Map(), t2 && t2.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
}
class tt {
  constructor(t2) {
    this.g = t2, this.forceRefresh = false, this.appCheck = null, this.p = null;
  }
  start(t2, e) {
    const n = (t3) => {
      null != t3.error && M("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${t3.error.message}`);
      const n2 = t3.token !== this.p;
      return this.p = t3.token, M("FirebaseAppCheckTokenProvider", `Received ${n2 ? "new" : "existing"} token.`), n2 ? e(t3.token) : Promise.resolve();
    };
    this.o = (e2) => {
      t2.enqueueRetryable(() => n(e2));
    };
    const s = (t3) => {
      M("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = t3, this.appCheck.addTokenListener(this.o);
    };
    this.g.onInit((t3) => s(t3)), setTimeout(() => {
      if (!this.appCheck) {
        const t3 = this.g.getImmediate({
          optional: true
        });
        t3 ? s(t3) : M("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
      }
    }, 0);
  }
  getToken() {
    const t2 = this.forceRefresh;
    return this.forceRefresh = false, this.appCheck ? this.appCheck.getToken(t2).then((t3) => t3 ? (U("string" == typeof t3.token), this.p = t3.token, new Z(t3.token)) : null) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = true;
  }
  shutdown() {
    this.appCheck && this.appCheck.removeTokenListener(this.o);
  }
}
function nt(t2) {
  const e = "undefined" != typeof self && (self.crypto || self.msCrypto), n = new Uint8Array(t2);
  if (e && "function" == typeof e.getRandomValues)
    e.getRandomValues(n);
  else
    for (let e2 = 0; e2 < t2; e2++)
      n[e2] = Math.floor(256 * Math.random());
  return n;
}
class st {
  static I() {
    const t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t2.length) * t2.length;
    let n = "";
    for (; n.length < 20; ) {
      const s = nt(40);
      for (let i = 0; i < s.length; ++i)
        n.length < 20 && s[i] < e && (n += t2.charAt(s[i] % t2.length));
    }
    return n;
  }
}
function it(t2, e) {
  return t2 < e ? -1 : t2 > e ? 1 : 0;
}
function rt(t2, e, n) {
  return t2.length === e.length && t2.every((t3, s) => n(t3, e[s]));
}
class ut {
  constructor(t2, e) {
    if (this.seconds = t2, this.nanoseconds = e, e < 0)
      throw new Q(G.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
    if (e >= 1e9)
      throw new Q(G.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
    if (t2 < -62135596800)
      throw new Q(G.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t2);
    if (t2 >= 253402300800)
      throw new Q(G.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t2);
  }
  static now() {
    return ut.fromMillis(Date.now());
  }
  static fromDate(t2) {
    return ut.fromMillis(t2.getTime());
  }
  static fromMillis(t2) {
    const e = Math.floor(t2 / 1e3), n = Math.floor(1e6 * (t2 - 1e3 * e));
    return new ut(e, n);
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(t2) {
    return this.seconds === t2.seconds ? it(this.nanoseconds, t2.nanoseconds) : it(this.seconds, t2.seconds);
  }
  isEqual(t2) {
    return t2.seconds === this.seconds && t2.nanoseconds === this.nanoseconds;
  }
  toString() {
    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
  }
  toJSON() {
    return {
      seconds: this.seconds,
      nanoseconds: this.nanoseconds
    };
  }
  valueOf() {
    const t2 = this.seconds - -62135596800;
    return String(t2).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
  }
}
class ct {
  constructor(t2) {
    this.timestamp = t2;
  }
  static fromTimestamp(t2) {
    return new ct(t2);
  }
  static min() {
    return new ct(new ut(0, 0));
  }
  static max() {
    return new ct(new ut(253402300799, 999999999));
  }
  compareTo(t2) {
    return this.timestamp._compareTo(t2.timestamp);
  }
  isEqual(t2) {
    return this.timestamp.isEqual(t2.timestamp);
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
}
class at {
  constructor(t2, e, n) {
    void 0 === e ? e = 0 : e > t2.length && L(), void 0 === n ? n = t2.length - e : n > t2.length - e && L(), this.segments = t2, this.offset = e, this.len = n;
  }
  get length() {
    return this.len;
  }
  isEqual(t2) {
    return 0 === at.comparator(this, t2);
  }
  child(t2) {
    const e = this.segments.slice(this.offset, this.limit());
    return t2 instanceof at ? t2.forEach((t3) => {
      e.push(t3);
    }) : e.push(t2), this.construct(e);
  }
  limit() {
    return this.offset + this.length;
  }
  popFirst(t2) {
    return t2 = void 0 === t2 ? 1 : t2, this.construct(this.segments, this.offset + t2, this.length - t2);
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(t2) {
    return this.segments[this.offset + t2];
  }
  isEmpty() {
    return 0 === this.length;
  }
  isPrefixOf(t2) {
    if (t2.length < this.length)
      return false;
    for (let e = 0; e < this.length; e++)
      if (this.get(e) !== t2.get(e))
        return false;
    return true;
  }
  isImmediateParentOf(t2) {
    if (this.length + 1 !== t2.length)
      return false;
    for (let e = 0; e < this.length; e++)
      if (this.get(e) !== t2.get(e))
        return false;
    return true;
  }
  forEach(t2) {
    for (let e = this.offset, n = this.limit(); e < n; e++)
      t2(this.segments[e]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(t2, e) {
    const n = Math.min(t2.length, e.length);
    for (let s = 0; s < n; s++) {
      const n2 = t2.get(s), i = e.get(s);
      if (n2 < i)
        return -1;
      if (n2 > i)
        return 1;
    }
    return t2.length < e.length ? -1 : t2.length > e.length ? 1 : 0;
  }
}
class ht extends at {
  construct(t2, e, n) {
    return new ht(t2, e, n);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  static fromString(...t2) {
    const e = [];
    for (const n of t2) {
      if (n.indexOf("//") >= 0)
        throw new Q(G.INVALID_ARGUMENT, `Invalid segment (${n}). Paths must not contain // in them.`);
      e.push(...n.split("/").filter((t3) => t3.length > 0));
    }
    return new ht(e);
  }
  static emptyPath() {
    return new ht([]);
  }
}
const lt = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class ft extends at {
  construct(t2, e, n) {
    return new ft(t2, e, n);
  }
  static isValidIdentifier(t2) {
    return lt.test(t2);
  }
  canonicalString() {
    return this.toArray().map((t2) => (t2 = t2.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), ft.isValidIdentifier(t2) || (t2 = "`" + t2 + "`"), t2)).join(".");
  }
  toString() {
    return this.canonicalString();
  }
  isKeyField() {
    return 1 === this.length && "__name__" === this.get(0);
  }
  static keyField() {
    return new ft(["__name__"]);
  }
  static fromServerFormat(t2) {
    const e = [];
    let n = "", s = 0;
    const i = () => {
      if (0 === n.length)
        throw new Q(G.INVALID_ARGUMENT, `Invalid field path (${t2}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
      e.push(n), n = "";
    };
    let r = false;
    for (; s < t2.length; ) {
      const e2 = t2[s];
      if ("\\" === e2) {
        if (s + 1 === t2.length)
          throw new Q(G.INVALID_ARGUMENT, "Path has trailing escape character: " + t2);
        const e3 = t2[s + 1];
        if ("\\" !== e3 && "." !== e3 && "`" !== e3)
          throw new Q(G.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t2);
        n += e3, s += 2;
      } else
        "`" === e2 ? (r = !r, s++) : "." !== e2 || r ? (n += e2, s++) : (i(), s++);
    }
    if (i(), r)
      throw new Q(G.INVALID_ARGUMENT, "Unterminated ` in path: " + t2);
    return new ft(e);
  }
  static emptyPath() {
    return new ft([]);
  }
}
class dt {
  constructor(t2) {
    this.path = t2;
  }
  static fromPath(t2) {
    return new dt(ht.fromString(t2));
  }
  static fromName(t2) {
    return new dt(ht.fromString(t2).popFirst(5));
  }
  static empty() {
    return new dt(ht.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  hasCollectionId(t2) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === t2;
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(t2) {
    return null !== t2 && 0 === ht.comparator(this.path, t2.path);
  }
  toString() {
    return this.path.toString();
  }
  static comparator(t2, e) {
    return ht.comparator(t2.path, e.path);
  }
  static isDocumentKey(t2) {
    return t2.length % 2 == 0;
  }
  static fromSegments(t2) {
    return new dt(new ht(t2.slice()));
  }
}
function pt(t2, e) {
  const n = t2.toTimestamp().seconds, s = t2.toTimestamp().nanoseconds + 1, i = ct.fromTimestamp(1e9 === s ? new ut(n + 1, 0) : new ut(n, s));
  return new Tt(i, dt.empty(), e);
}
function It(t2) {
  return new Tt(t2.readTime, t2.key, -1);
}
class Tt {
  constructor(t2, e, n) {
    this.readTime = t2, this.documentKey = e, this.largestBatchId = n;
  }
  static min() {
    return new Tt(ct.min(), dt.empty(), -1);
  }
  static max() {
    return new Tt(ct.max(), dt.empty(), -1);
  }
}
function Et(t2, e) {
  let n = t2.readTime.compareTo(e.readTime);
  return 0 !== n ? n : (n = dt.comparator(t2.documentKey, e.documentKey), 0 !== n ? n : it(t2.largestBatchId, e.largestBatchId));
}
const At = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class Rt {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(t2) {
    this.onCommittedListeners.push(t2);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((t2) => t2());
  }
}
async function bt(t2) {
  if (t2.code !== G.FAILED_PRECONDITION || t2.message !== At)
    throw t2;
  M("LocalStore", "Unexpectedly lost primary lease");
}
class Pt {
  constructor(t2) {
    this.nextCallback = null, this.catchCallback = null, this.result = void 0, this.error = void 0, this.isDone = false, this.callbackAttached = false, t2((t3) => {
      this.isDone = true, this.result = t3, this.nextCallback && this.nextCallback(t3);
    }, (t3) => {
      this.isDone = true, this.error = t3, this.catchCallback && this.catchCallback(t3);
    });
  }
  catch(t2) {
    return this.next(void 0, t2);
  }
  next(t2, e) {
    return this.callbackAttached && L(), this.callbackAttached = true, this.isDone ? this.error ? this.wrapFailure(e, this.error) : this.wrapSuccess(t2, this.result) : new Pt((n, s) => {
      this.nextCallback = (e2) => {
        this.wrapSuccess(t2, e2).next(n, s);
      }, this.catchCallback = (t3) => {
        this.wrapFailure(e, t3).next(n, s);
      };
    });
  }
  toPromise() {
    return new Promise((t2, e) => {
      this.next(t2, e);
    });
  }
  wrapUserFunction(t2) {
    try {
      const e = t2();
      return e instanceof Pt ? e : Pt.resolve(e);
    } catch (t3) {
      return Pt.reject(t3);
    }
  }
  wrapSuccess(t2, e) {
    return t2 ? this.wrapUserFunction(() => t2(e)) : Pt.resolve(e);
  }
  wrapFailure(t2, e) {
    return t2 ? this.wrapUserFunction(() => t2(e)) : Pt.reject(e);
  }
  static resolve(t2) {
    return new Pt((e, n) => {
      e(t2);
    });
  }
  static reject(t2) {
    return new Pt((e, n) => {
      n(t2);
    });
  }
  static waitFor(t2) {
    return new Pt((e, n) => {
      let s = 0, i = 0, r = false;
      t2.forEach((t3) => {
        ++s, t3.next(() => {
          ++i, r && i === s && e();
        }, (t4) => n(t4));
      }), r = true, i === s && e();
    });
  }
  static or(t2) {
    let e = Pt.resolve(false);
    for (const n of t2)
      e = e.next((t3) => t3 ? Pt.resolve(t3) : n());
    return e;
  }
  static forEach(t2, e) {
    const n = [];
    return t2.forEach((t3, s) => {
      n.push(e.call(this, t3, s));
    }), this.waitFor(n);
  }
  static mapArray(t2, e) {
    return new Pt((n, s) => {
      const i = t2.length, r = new Array(i);
      let o = 0;
      for (let u = 0; u < i; u++) {
        const c = u;
        e(t2[c]).next((t3) => {
          r[c] = t3, ++o, o === i && n(r);
        }, (t3) => s(t3));
      }
    });
  }
  static doWhile(t2, e) {
    return new Pt((n, s) => {
      const i = () => {
        true === t2() ? e().next(() => {
          i();
        }, s) : n();
      };
      i();
    });
  }
}
function Ct(t2) {
  return "IndexedDbTransactionError" === t2.name;
}
class $t {
  constructor(t2, e) {
    this.previousValue = t2, e && (e.sequenceNumberHandler = (t3) => this.it(t3), this.rt = (t3) => e.writeSequenceNumber(t3));
  }
  it(t2) {
    return this.previousValue = Math.max(t2, this.previousValue), this.previousValue;
  }
  next() {
    const t2 = ++this.previousValue;
    return this.rt && this.rt(t2), t2;
  }
}
function Bt(t2) {
  let e = 0;
  for (const n in t2)
    Object.prototype.hasOwnProperty.call(t2, n) && e++;
  return e;
}
function Lt(t2, e) {
  for (const n in t2)
    Object.prototype.hasOwnProperty.call(t2, n) && e(n, t2[n]);
}
function Ut(t2) {
  for (const e in t2)
    if (Object.prototype.hasOwnProperty.call(t2, e))
      return false;
  return true;
}
$t.ot = -1;
class qt {
  constructor(t2, e) {
    this.comparator = t2, this.root = e || Gt.EMPTY;
  }
  insert(t2, e) {
    return new qt(this.comparator, this.root.insert(t2, e, this.comparator).copy(null, null, Gt.BLACK, null, null));
  }
  remove(t2) {
    return new qt(this.comparator, this.root.remove(t2, this.comparator).copy(null, null, Gt.BLACK, null, null));
  }
  get(t2) {
    let e = this.root;
    for (; !e.isEmpty(); ) {
      const n = this.comparator(t2, e.key);
      if (0 === n)
        return e.value;
      n < 0 ? e = e.left : n > 0 && (e = e.right);
    }
    return null;
  }
  indexOf(t2) {
    let e = 0, n = this.root;
    for (; !n.isEmpty(); ) {
      const s = this.comparator(t2, n.key);
      if (0 === s)
        return e + n.left.size;
      s < 0 ? n = n.left : (e += n.left.size + 1, n = n.right);
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  get size() {
    return this.root.size;
  }
  minKey() {
    return this.root.minKey();
  }
  maxKey() {
    return this.root.maxKey();
  }
  inorderTraversal(t2) {
    return this.root.inorderTraversal(t2);
  }
  forEach(t2) {
    this.inorderTraversal((e, n) => (t2(e, n), false));
  }
  toString() {
    const t2 = [];
    return this.inorderTraversal((e, n) => (t2.push(`${e}:${n}`), false)), `{${t2.join(", ")}}`;
  }
  reverseTraversal(t2) {
    return this.root.reverseTraversal(t2);
  }
  getIterator() {
    return new Kt(this.root, null, this.comparator, false);
  }
  getIteratorFrom(t2) {
    return new Kt(this.root, t2, this.comparator, false);
  }
  getReverseIterator() {
    return new Kt(this.root, null, this.comparator, true);
  }
  getReverseIteratorFrom(t2) {
    return new Kt(this.root, t2, this.comparator, true);
  }
}
class Kt {
  constructor(t2, e, n, s) {
    this.isReverse = s, this.nodeStack = [];
    let i = 1;
    for (; !t2.isEmpty(); )
      if (i = e ? n(t2.key, e) : 1, e && s && (i *= -1), i < 0)
        t2 = this.isReverse ? t2.left : t2.right;
      else {
        if (0 === i) {
          this.nodeStack.push(t2);
          break;
        }
        this.nodeStack.push(t2), t2 = this.isReverse ? t2.right : t2.left;
      }
  }
  getNext() {
    let t2 = this.nodeStack.pop();
    const e = {
      key: t2.key,
      value: t2.value
    };
    if (this.isReverse)
      for (t2 = t2.left; !t2.isEmpty(); )
        this.nodeStack.push(t2), t2 = t2.right;
    else
      for (t2 = t2.right; !t2.isEmpty(); )
        this.nodeStack.push(t2), t2 = t2.left;
    return e;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (0 === this.nodeStack.length)
      return null;
    const t2 = this.nodeStack[this.nodeStack.length - 1];
    return {
      key: t2.key,
      value: t2.value
    };
  }
}
class Gt {
  constructor(t2, e, n, s, i) {
    this.key = t2, this.value = e, this.color = null != n ? n : Gt.RED, this.left = null != s ? s : Gt.EMPTY, this.right = null != i ? i : Gt.EMPTY, this.size = this.left.size + 1 + this.right.size;
  }
  copy(t2, e, n, s, i) {
    return new Gt(null != t2 ? t2 : this.key, null != e ? e : this.value, null != n ? n : this.color, null != s ? s : this.left, null != i ? i : this.right);
  }
  isEmpty() {
    return false;
  }
  inorderTraversal(t2) {
    return this.left.inorderTraversal(t2) || t2(this.key, this.value) || this.right.inorderTraversal(t2);
  }
  reverseTraversal(t2) {
    return this.right.reverseTraversal(t2) || t2(this.key, this.value) || this.left.reverseTraversal(t2);
  }
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  minKey() {
    return this.min().key;
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  insert(t2, e, n) {
    let s = this;
    const i = n(t2, s.key);
    return s = i < 0 ? s.copy(null, null, null, s.left.insert(t2, e, n), null) : 0 === i ? s.copy(null, e, null, null, null) : s.copy(null, null, null, null, s.right.insert(t2, e, n)), s.fixUp();
  }
  removeMin() {
    if (this.left.isEmpty())
      return Gt.EMPTY;
    let t2 = this;
    return t2.left.isRed() || t2.left.left.isRed() || (t2 = t2.moveRedLeft()), t2 = t2.copy(null, null, null, t2.left.removeMin(), null), t2.fixUp();
  }
  remove(t2, e) {
    let n, s = this;
    if (e(t2, s.key) < 0)
      s.left.isEmpty() || s.left.isRed() || s.left.left.isRed() || (s = s.moveRedLeft()), s = s.copy(null, null, null, s.left.remove(t2, e), null);
    else {
      if (s.left.isRed() && (s = s.rotateRight()), s.right.isEmpty() || s.right.isRed() || s.right.left.isRed() || (s = s.moveRedRight()), 0 === e(t2, s.key)) {
        if (s.right.isEmpty())
          return Gt.EMPTY;
        n = s.right.min(), s = s.copy(n.key, n.value, null, null, s.right.removeMin());
      }
      s = s.copy(null, null, null, null, s.right.remove(t2, e));
    }
    return s.fixUp();
  }
  isRed() {
    return this.color;
  }
  fixUp() {
    let t2 = this;
    return t2.right.isRed() && !t2.left.isRed() && (t2 = t2.rotateLeft()), t2.left.isRed() && t2.left.left.isRed() && (t2 = t2.rotateRight()), t2.left.isRed() && t2.right.isRed() && (t2 = t2.colorFlip()), t2;
  }
  moveRedLeft() {
    let t2 = this.colorFlip();
    return t2.right.left.isRed() && (t2 = t2.copy(null, null, null, null, t2.right.rotateRight()), t2 = t2.rotateLeft(), t2 = t2.colorFlip()), t2;
  }
  moveRedRight() {
    let t2 = this.colorFlip();
    return t2.left.left.isRed() && (t2 = t2.rotateRight(), t2 = t2.colorFlip()), t2;
  }
  rotateLeft() {
    const t2 = this.copy(null, null, Gt.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, t2, null);
  }
  rotateRight() {
    const t2 = this.copy(null, null, Gt.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, t2);
  }
  colorFlip() {
    const t2 = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, t2, e);
  }
  checkMaxDepth() {
    const t2 = this.check();
    return Math.pow(2, t2) <= this.size + 1;
  }
  check() {
    if (this.isRed() && this.left.isRed())
      throw L();
    if (this.right.isRed())
      throw L();
    const t2 = this.left.check();
    if (t2 !== this.right.check())
      throw L();
    return t2 + (this.isRed() ? 0 : 1);
  }
}
Gt.EMPTY = null, Gt.RED = true, Gt.BLACK = false;
Gt.EMPTY = new class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw L();
  }
  get value() {
    throw L();
  }
  get color() {
    throw L();
  }
  get left() {
    throw L();
  }
  get right() {
    throw L();
  }
  copy(t2, e, n, s, i) {
    return this;
  }
  insert(t2, e, n) {
    return new Gt(t2, e);
  }
  remove(t2, e) {
    return this;
  }
  isEmpty() {
    return true;
  }
  inorderTraversal(t2) {
    return false;
  }
  reverseTraversal(t2) {
    return false;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return false;
  }
  checkMaxDepth() {
    return true;
  }
  check() {
    return 0;
  }
}();
class Qt {
  constructor(t2) {
    this.comparator = t2, this.data = new qt(this.comparator);
  }
  has(t2) {
    return null !== this.data.get(t2);
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(t2) {
    return this.data.indexOf(t2);
  }
  forEach(t2) {
    this.data.inorderTraversal((e, n) => (t2(e), false));
  }
  forEachInRange(t2, e) {
    const n = this.data.getIteratorFrom(t2[0]);
    for (; n.hasNext(); ) {
      const s = n.getNext();
      if (this.comparator(s.key, t2[1]) >= 0)
        return;
      e(s.key);
    }
  }
  forEachWhile(t2, e) {
    let n;
    for (n = void 0 !== e ? this.data.getIteratorFrom(e) : this.data.getIterator(); n.hasNext(); ) {
      if (!t2(n.getNext().key))
        return;
    }
  }
  firstAfterOrEqual(t2) {
    const e = this.data.getIteratorFrom(t2);
    return e.hasNext() ? e.getNext().key : null;
  }
  getIterator() {
    return new jt(this.data.getIterator());
  }
  getIteratorFrom(t2) {
    return new jt(this.data.getIteratorFrom(t2));
  }
  add(t2) {
    return this.copy(this.data.remove(t2).insert(t2, true));
  }
  delete(t2) {
    return this.has(t2) ? this.copy(this.data.remove(t2)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(t2) {
    let e = this;
    return e.size < t2.size && (e = t2, t2 = this), t2.forEach((t3) => {
      e = e.add(t3);
    }), e;
  }
  isEqual(t2) {
    if (!(t2 instanceof Qt))
      return false;
    if (this.size !== t2.size)
      return false;
    const e = this.data.getIterator(), n = t2.data.getIterator();
    for (; e.hasNext(); ) {
      const t3 = e.getNext().key, s = n.getNext().key;
      if (0 !== this.comparator(t3, s))
        return false;
    }
    return true;
  }
  toArray() {
    const t2 = [];
    return this.forEach((e) => {
      t2.push(e);
    }), t2;
  }
  toString() {
    const t2 = [];
    return this.forEach((e) => t2.push(e)), "SortedSet(" + t2.toString() + ")";
  }
  copy(t2) {
    const e = new Qt(this.comparator);
    return e.data = t2, e;
  }
}
class jt {
  constructor(t2) {
    this.iter = t2;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
}
class zt {
  constructor(t2) {
    this.fields = t2, t2.sort(ft.comparator);
  }
  static empty() {
    return new zt([]);
  }
  unionWith(t2) {
    let e = new Qt(ft.comparator);
    for (const t3 of this.fields)
      e = e.add(t3);
    for (const n of t2)
      e = e.add(n);
    return new zt(e.toArray());
  }
  covers(t2) {
    for (const e of this.fields)
      if (e.isPrefixOf(t2))
        return true;
    return false;
  }
  isEqual(t2) {
    return rt(this.fields, t2.fields, (t3, e) => t3.isEqual(e));
  }
}
class Jt {
  constructor(t2) {
    this.binaryString = t2;
  }
  static fromBase64String(t2) {
    const e = atob(t2);
    return new Jt(e);
  }
  static fromUint8Array(t2) {
    const e = function(t3) {
      let e2 = "";
      for (let n = 0; n < t3.length; ++n)
        e2 += String.fromCharCode(t3[n]);
      return e2;
    }(t2);
    return new Jt(e);
  }
  [Symbol.iterator]() {
    let t2 = 0;
    return {
      next: () => t2 < this.binaryString.length ? {
        value: this.binaryString.charCodeAt(t2++),
        done: false
      } : {
        value: void 0,
        done: true
      }
    };
  }
  toBase64() {
    return t2 = this.binaryString, btoa(t2);
    var t2;
  }
  toUint8Array() {
    return function(t2) {
      const e = new Uint8Array(t2.length);
      for (let n = 0; n < t2.length; n++)
        e[n] = t2.charCodeAt(n);
      return e;
    }(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(t2) {
    return it(this.binaryString, t2.binaryString);
  }
  isEqual(t2) {
    return this.binaryString === t2.binaryString;
  }
}
Jt.EMPTY_BYTE_STRING = new Jt("");
const Yt = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function Xt(t2) {
  if (U(!!t2), "string" == typeof t2) {
    let e = 0;
    const n = Yt.exec(t2);
    if (U(!!n), n[1]) {
      let t3 = n[1];
      t3 = (t3 + "000000000").substr(0, 9), e = Number(t3);
    }
    const s = new Date(t2);
    return {
      seconds: Math.floor(s.getTime() / 1e3),
      nanos: e
    };
  }
  return {
    seconds: Zt(t2.seconds),
    nanos: Zt(t2.nanos)
  };
}
function Zt(t2) {
  return "number" == typeof t2 ? t2 : "string" == typeof t2 ? Number(t2) : 0;
}
function te(t2) {
  return "string" == typeof t2 ? Jt.fromBase64String(t2) : Jt.fromUint8Array(t2);
}
function ee(t2) {
  var e, n;
  return "server_timestamp" === (null === (n = ((null === (e = null == t2 ? void 0 : t2.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}
function ne(t2) {
  const e = t2.mapValue.fields.__previous_value__;
  return ee(e) ? ne(e) : e;
}
function se(t2) {
  const e = Xt(t2.mapValue.fields.__local_write_time__.timestampValue);
  return new ut(e.seconds, e.nanos);
}
class ie {
  constructor(t2, e, n, s, i, r, o, u) {
    this.databaseId = t2, this.appId = e, this.persistenceKey = n, this.host = s, this.ssl = i, this.forceLongPolling = r, this.autoDetectLongPolling = o, this.useFetchStreams = u;
  }
}
class re {
  constructor(t2, e) {
    this.projectId = t2, this.database = e || "(default)";
  }
  static empty() {
    return new re("", "");
  }
  get isDefaultDatabase() {
    return "(default)" === this.database;
  }
  isEqual(t2) {
    return t2 instanceof re && t2.projectId === this.projectId && t2.database === this.database;
  }
}
function oe(t2) {
  return null == t2;
}
function ue(t2) {
  return 0 === t2 && 1 / t2 == -1 / 0;
}
function ce(t2) {
  return "number" == typeof t2 && Number.isInteger(t2) && !ue(t2) && t2 <= Number.MAX_SAFE_INTEGER && t2 >= Number.MIN_SAFE_INTEGER;
}
const ae = {
  mapValue: {
    fields: {
      __type__: {
        stringValue: "__max__"
      }
    }
  }
};
function le(t2) {
  return "nullValue" in t2 ? 0 : "booleanValue" in t2 ? 1 : "integerValue" in t2 || "doubleValue" in t2 ? 2 : "timestampValue" in t2 ? 3 : "stringValue" in t2 ? 5 : "bytesValue" in t2 ? 6 : "referenceValue" in t2 ? 7 : "geoPointValue" in t2 ? 8 : "arrayValue" in t2 ? 9 : "mapValue" in t2 ? ee(t2) ? 4 : be(t2) ? 9007199254740991 : 10 : L();
}
function fe(t2, e) {
  if (t2 === e)
    return true;
  const n = le(t2);
  if (n !== le(e))
    return false;
  switch (n) {
    case 0:
    case 9007199254740991:
      return true;
    case 1:
      return t2.booleanValue === e.booleanValue;
    case 4:
      return se(t2).isEqual(se(e));
    case 3:
      return function(t3, e2) {
        if ("string" == typeof t3.timestampValue && "string" == typeof e2.timestampValue && t3.timestampValue.length === e2.timestampValue.length)
          return t3.timestampValue === e2.timestampValue;
        const n2 = Xt(t3.timestampValue), s = Xt(e2.timestampValue);
        return n2.seconds === s.seconds && n2.nanos === s.nanos;
      }(t2, e);
    case 5:
      return t2.stringValue === e.stringValue;
    case 6:
      return function(t3, e2) {
        return te(t3.bytesValue).isEqual(te(e2.bytesValue));
      }(t2, e);
    case 7:
      return t2.referenceValue === e.referenceValue;
    case 8:
      return function(t3, e2) {
        return Zt(t3.geoPointValue.latitude) === Zt(e2.geoPointValue.latitude) && Zt(t3.geoPointValue.longitude) === Zt(e2.geoPointValue.longitude);
      }(t2, e);
    case 2:
      return function(t3, e2) {
        if ("integerValue" in t3 && "integerValue" in e2)
          return Zt(t3.integerValue) === Zt(e2.integerValue);
        if ("doubleValue" in t3 && "doubleValue" in e2) {
          const n2 = Zt(t3.doubleValue), s = Zt(e2.doubleValue);
          return n2 === s ? ue(n2) === ue(s) : isNaN(n2) && isNaN(s);
        }
        return false;
      }(t2, e);
    case 9:
      return rt(t2.arrayValue.values || [], e.arrayValue.values || [], fe);
    case 10:
      return function(t3, e2) {
        const n2 = t3.mapValue.fields || {}, s = e2.mapValue.fields || {};
        if (Bt(n2) !== Bt(s))
          return false;
        for (const t4 in n2)
          if (n2.hasOwnProperty(t4) && (void 0 === s[t4] || !fe(n2[t4], s[t4])))
            return false;
        return true;
      }(t2, e);
    default:
      return L();
  }
}
function de(t2, e) {
  return void 0 !== (t2.values || []).find((t3) => fe(t3, e));
}
function _e(t2, e) {
  if (t2 === e)
    return 0;
  const n = le(t2), s = le(e);
  if (n !== s)
    return it(n, s);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return it(t2.booleanValue, e.booleanValue);
    case 2:
      return function(t3, e2) {
        const n2 = Zt(t3.integerValue || t3.doubleValue), s2 = Zt(e2.integerValue || e2.doubleValue);
        return n2 < s2 ? -1 : n2 > s2 ? 1 : n2 === s2 ? 0 : isNaN(n2) ? isNaN(s2) ? 0 : -1 : 1;
      }(t2, e);
    case 3:
      return we(t2.timestampValue, e.timestampValue);
    case 4:
      return we(se(t2), se(e));
    case 5:
      return it(t2.stringValue, e.stringValue);
    case 6:
      return function(t3, e2) {
        const n2 = te(t3), s2 = te(e2);
        return n2.compareTo(s2);
      }(t2.bytesValue, e.bytesValue);
    case 7:
      return function(t3, e2) {
        const n2 = t3.split("/"), s2 = e2.split("/");
        for (let t4 = 0; t4 < n2.length && t4 < s2.length; t4++) {
          const e3 = it(n2[t4], s2[t4]);
          if (0 !== e3)
            return e3;
        }
        return it(n2.length, s2.length);
      }(t2.referenceValue, e.referenceValue);
    case 8:
      return function(t3, e2) {
        const n2 = it(Zt(t3.latitude), Zt(e2.latitude));
        if (0 !== n2)
          return n2;
        return it(Zt(t3.longitude), Zt(e2.longitude));
      }(t2.geoPointValue, e.geoPointValue);
    case 9:
      return function(t3, e2) {
        const n2 = t3.values || [], s2 = e2.values || [];
        for (let t4 = 0; t4 < n2.length && t4 < s2.length; ++t4) {
          const e3 = _e(n2[t4], s2[t4]);
          if (e3)
            return e3;
        }
        return it(n2.length, s2.length);
      }(t2.arrayValue, e.arrayValue);
    case 10:
      return function(t3, e2) {
        if (t3 === ae.mapValue && e2 === ae.mapValue)
          return 0;
        if (t3 === ae.mapValue)
          return 1;
        if (e2 === ae.mapValue)
          return -1;
        const n2 = t3.fields || {}, s2 = Object.keys(n2), i = e2.fields || {}, r = Object.keys(i);
        s2.sort(), r.sort();
        for (let t4 = 0; t4 < s2.length && t4 < r.length; ++t4) {
          const e3 = it(s2[t4], r[t4]);
          if (0 !== e3)
            return e3;
          const o = _e(n2[s2[t4]], i[r[t4]]);
          if (0 !== o)
            return o;
        }
        return it(s2.length, r.length);
      }(t2.mapValue, e.mapValue);
    default:
      throw L();
  }
}
function we(t2, e) {
  if ("string" == typeof t2 && "string" == typeof e && t2.length === e.length)
    return it(t2, e);
  const n = Xt(t2), s = Xt(e), i = it(n.seconds, s.seconds);
  return 0 !== i ? i : it(n.nanos, s.nanos);
}
function me(t2) {
  return ge(t2);
}
function ge(t2) {
  return "nullValue" in t2 ? "null" : "booleanValue" in t2 ? "" + t2.booleanValue : "integerValue" in t2 ? "" + t2.integerValue : "doubleValue" in t2 ? "" + t2.doubleValue : "timestampValue" in t2 ? function(t3) {
    const e2 = Xt(t3);
    return `time(${e2.seconds},${e2.nanos})`;
  }(t2.timestampValue) : "stringValue" in t2 ? t2.stringValue : "bytesValue" in t2 ? te(t2.bytesValue).toBase64() : "referenceValue" in t2 ? (n = t2.referenceValue, dt.fromName(n).toString()) : "geoPointValue" in t2 ? `geo(${(e = t2.geoPointValue).latitude},${e.longitude})` : "arrayValue" in t2 ? function(t3) {
    let e2 = "[", n2 = true;
    for (const s of t3.values || [])
      n2 ? n2 = false : e2 += ",", e2 += ge(s);
    return e2 + "]";
  }(t2.arrayValue) : "mapValue" in t2 ? function(t3) {
    const e2 = Object.keys(t3.fields || {}).sort();
    let n2 = "{", s = true;
    for (const i of e2)
      s ? s = false : n2 += ",", n2 += `${i}:${ge(t3.fields[i])}`;
    return n2 + "}";
  }(t2.mapValue) : L();
  var e, n;
}
function ye(t2, e) {
  return {
    referenceValue: `projects/${t2.projectId}/databases/${t2.database}/documents/${e.path.canonicalString()}`
  };
}
function pe(t2) {
  return !!t2 && "integerValue" in t2;
}
function Ie(t2) {
  return !!t2 && "arrayValue" in t2;
}
function Te(t2) {
  return !!t2 && "nullValue" in t2;
}
function Ee(t2) {
  return !!t2 && "doubleValue" in t2 && isNaN(Number(t2.doubleValue));
}
function Ae(t2) {
  return !!t2 && "mapValue" in t2;
}
function Re(t2) {
  if (t2.geoPointValue)
    return {
      geoPointValue: Object.assign({}, t2.geoPointValue)
    };
  if (t2.timestampValue && "object" == typeof t2.timestampValue)
    return {
      timestampValue: Object.assign({}, t2.timestampValue)
    };
  if (t2.mapValue) {
    const e = {
      mapValue: {
        fields: {}
      }
    };
    return Lt(t2.mapValue.fields, (t3, n) => e.mapValue.fields[t3] = Re(n)), e;
  }
  if (t2.arrayValue) {
    const e = {
      arrayValue: {
        values: []
      }
    };
    for (let n = 0; n < (t2.arrayValue.values || []).length; ++n)
      e.arrayValue.values[n] = Re(t2.arrayValue.values[n]);
    return e;
  }
  return Object.assign({}, t2);
}
function be(t2) {
  return "__max__" === (((t2.mapValue || {}).fields || {}).__type__ || {}).stringValue;
}
class De {
  constructor(t2) {
    this.value = t2;
  }
  static empty() {
    return new De({
      mapValue: {}
    });
  }
  field(t2) {
    if (t2.isEmpty())
      return this.value;
    {
      let e = this.value;
      for (let n = 0; n < t2.length - 1; ++n)
        if (e = (e.mapValue.fields || {})[t2.get(n)], !Ae(e))
          return null;
      return e = (e.mapValue.fields || {})[t2.lastSegment()], e || null;
    }
  }
  set(t2, e) {
    this.getFieldsMap(t2.popLast())[t2.lastSegment()] = Re(e);
  }
  setAll(t2) {
    let e = ft.emptyPath(), n = {}, s = [];
    t2.forEach((t3, i2) => {
      if (!e.isImmediateParentOf(i2)) {
        const t4 = this.getFieldsMap(e);
        this.applyChanges(t4, n, s), n = {}, s = [], e = i2.popLast();
      }
      t3 ? n[i2.lastSegment()] = Re(t3) : s.push(i2.lastSegment());
    });
    const i = this.getFieldsMap(e);
    this.applyChanges(i, n, s);
  }
  delete(t2) {
    const e = this.field(t2.popLast());
    Ae(e) && e.mapValue.fields && delete e.mapValue.fields[t2.lastSegment()];
  }
  isEqual(t2) {
    return fe(this.value, t2.value);
  }
  getFieldsMap(t2) {
    let e = this.value;
    e.mapValue.fields || (e.mapValue = {
      fields: {}
    });
    for (let n = 0; n < t2.length; ++n) {
      let s = e.mapValue.fields[t2.get(n)];
      Ae(s) && s.mapValue.fields || (s = {
        mapValue: {
          fields: {}
        }
      }, e.mapValue.fields[t2.get(n)] = s), e = s;
    }
    return e.mapValue.fields;
  }
  applyChanges(t2, e, n) {
    Lt(e, (e2, n2) => t2[e2] = n2);
    for (const e2 of n)
      delete t2[e2];
  }
  clone() {
    return new De(Re(this.value));
  }
}
function Ce(t2) {
  const e = [];
  return Lt(t2.fields, (t3, n) => {
    const s = new ft([t3]);
    if (Ae(n)) {
      const t4 = Ce(n.mapValue).fields;
      if (0 === t4.length)
        e.push(s);
      else
        for (const n2 of t4)
          e.push(s.child(n2));
    } else
      e.push(s);
  }), new zt(e);
}
class xe {
  constructor(t2, e, n, s, i, r) {
    this.key = t2, this.documentType = e, this.version = n, this.readTime = s, this.data = i, this.documentState = r;
  }
  static newInvalidDocument(t2) {
    return new xe(t2, 0, ct.min(), ct.min(), De.empty(), 0);
  }
  static newFoundDocument(t2, e, n) {
    return new xe(t2, 1, e, ct.min(), n, 0);
  }
  static newNoDocument(t2, e) {
    return new xe(t2, 2, e, ct.min(), De.empty(), 0);
  }
  static newUnknownDocument(t2, e) {
    return new xe(t2, 3, e, ct.min(), De.empty(), 2);
  }
  convertToFoundDocument(t2, e) {
    return this.version = t2, this.documentType = 1, this.data = e, this.documentState = 0, this;
  }
  convertToNoDocument(t2) {
    return this.version = t2, this.documentType = 2, this.data = De.empty(), this.documentState = 0, this;
  }
  convertToUnknownDocument(t2) {
    return this.version = t2, this.documentType = 3, this.data = De.empty(), this.documentState = 2, this;
  }
  setHasCommittedMutations() {
    return this.documentState = 2, this;
  }
  setHasLocalMutations() {
    return this.documentState = 1, this.version = ct.min(), this;
  }
  setReadTime(t2) {
    return this.readTime = t2, this;
  }
  get hasLocalMutations() {
    return 1 === this.documentState;
  }
  get hasCommittedMutations() {
    return 2 === this.documentState;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return 0 !== this.documentType;
  }
  isFoundDocument() {
    return 1 === this.documentType;
  }
  isNoDocument() {
    return 2 === this.documentType;
  }
  isUnknownDocument() {
    return 3 === this.documentType;
  }
  isEqual(t2) {
    return t2 instanceof xe && this.key.isEqual(t2.key) && this.version.isEqual(t2.version) && this.documentType === t2.documentType && this.documentState === t2.documentState && this.data.isEqual(t2.data);
  }
  mutableCopy() {
    return new xe(this.key, this.documentType, this.version, this.readTime, this.data.clone(), this.documentState);
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
  }
}
class Ne {
  constructor(t2, e = null, n = [], s = [], i = null, r = null, o = null) {
    this.path = t2, this.collectionGroup = e, this.orderBy = n, this.filters = s, this.limit = i, this.startAt = r, this.endAt = o, this.ut = null;
  }
}
function ke(t2, e = null, n = [], s = [], i = null, r = null, o = null) {
  return new Ne(t2, e, n, s, i, r, o);
}
function Oe(t2) {
  const e = K(t2);
  if (null === e.ut) {
    let t3 = e.path.canonicalString();
    null !== e.collectionGroup && (t3 += "|cg:" + e.collectionGroup), t3 += "|f:", t3 += e.filters.map((t4) => {
      return (e2 = t4).field.canonicalString() + e2.op.toString() + me(e2.value);
      var e2;
    }).join(","), t3 += "|ob:", t3 += e.orderBy.map((t4) => function(t5) {
      return t5.field.canonicalString() + t5.dir;
    }(t4)).join(","), oe(e.limit) || (t3 += "|l:", t3 += e.limit), e.startAt && (t3 += "|lb:", t3 += e.startAt.inclusive ? "b:" : "a:", t3 += e.startAt.position.map((t4) => me(t4)).join(",")), e.endAt && (t3 += "|ub:", t3 += e.endAt.inclusive ? "a:" : "b:", t3 += e.endAt.position.map((t4) => me(t4)).join(",")), e.ut = t3;
  }
  return e.ut;
}
function Me(t2) {
  let e = t2.path.canonicalString();
  return null !== t2.collectionGroup && (e += " collectionGroup=" + t2.collectionGroup), t2.filters.length > 0 && (e += `, filters: [${t2.filters.map((t3) => {
    return `${(e2 = t3).field.canonicalString()} ${e2.op} ${me(e2.value)}`;
    var e2;
  }).join(", ")}]`), oe(t2.limit) || (e += ", limit: " + t2.limit), t2.orderBy.length > 0 && (e += `, orderBy: [${t2.orderBy.map((t3) => function(t4) {
    return `${t4.field.canonicalString()} (${t4.dir})`;
  }(t3)).join(", ")}]`), t2.startAt && (e += ", startAt: ", e += t2.startAt.inclusive ? "b:" : "a:", e += t2.startAt.position.map((t3) => me(t3)).join(",")), t2.endAt && (e += ", endAt: ", e += t2.endAt.inclusive ? "a:" : "b:", e += t2.endAt.position.map((t3) => me(t3)).join(",")), `Target(${e})`;
}
function Fe(t2, e) {
  if (t2.limit !== e.limit)
    return false;
  if (t2.orderBy.length !== e.orderBy.length)
    return false;
  for (let n2 = 0; n2 < t2.orderBy.length; n2++)
    if (!Ze(t2.orderBy[n2], e.orderBy[n2]))
      return false;
  if (t2.filters.length !== e.filters.length)
    return false;
  for (let i = 0; i < t2.filters.length; i++)
    if (n = t2.filters[i], s = e.filters[i], n.op !== s.op || !n.field.isEqual(s.field) || !fe(n.value, s.value))
      return false;
  var n, s;
  return t2.collectionGroup === e.collectionGroup && (!!t2.path.isEqual(e.path) && (!!en(t2.startAt, e.startAt) && en(t2.endAt, e.endAt)));
}
function $e(t2) {
  return dt.isDocumentKey(t2.path) && null === t2.collectionGroup && 0 === t2.filters.length;
}
class qe extends class {
} {
  constructor(t2, e, n) {
    super(), this.field = t2, this.op = e, this.value = n;
  }
  static create(t2, e, n) {
    return t2.isKeyField() ? "in" === e || "not-in" === e ? this.ct(t2, e, n) : new Ke(t2, e, n) : "array-contains" === e ? new We(t2, n) : "in" === e ? new ze(t2, n) : "not-in" === e ? new He(t2, n) : "array-contains-any" === e ? new Je(t2, n) : new qe(t2, e, n);
  }
  static ct(t2, e, n) {
    return "in" === e ? new Ge(t2, n) : new Qe(t2, n);
  }
  matches(t2) {
    const e = t2.data.field(this.field);
    return "!=" === this.op ? null !== e && this.at(_e(e, this.value)) : null !== e && le(this.value) === le(e) && this.at(_e(e, this.value));
  }
  at(t2) {
    switch (this.op) {
      case "<":
        return t2 < 0;
      case "<=":
        return t2 <= 0;
      case "==":
        return 0 === t2;
      case "!=":
        return 0 !== t2;
      case ">":
        return t2 > 0;
      case ">=":
        return t2 >= 0;
      default:
        return L();
    }
  }
  ht() {
    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
  }
}
class Ke extends qe {
  constructor(t2, e, n) {
    super(t2, e, n), this.key = dt.fromName(n.referenceValue);
  }
  matches(t2) {
    const e = dt.comparator(t2.key, this.key);
    return this.at(e);
  }
}
class Ge extends qe {
  constructor(t2, e) {
    super(t2, "in", e), this.keys = je("in", e);
  }
  matches(t2) {
    return this.keys.some((e) => e.isEqual(t2.key));
  }
}
class Qe extends qe {
  constructor(t2, e) {
    super(t2, "not-in", e), this.keys = je("not-in", e);
  }
  matches(t2) {
    return !this.keys.some((e) => e.isEqual(t2.key));
  }
}
function je(t2, e) {
  var n;
  return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((t3) => dt.fromName(t3.referenceValue));
}
class We extends qe {
  constructor(t2, e) {
    super(t2, "array-contains", e);
  }
  matches(t2) {
    const e = t2.data.field(this.field);
    return Ie(e) && de(e.arrayValue, this.value);
  }
}
class ze extends qe {
  constructor(t2, e) {
    super(t2, "in", e);
  }
  matches(t2) {
    const e = t2.data.field(this.field);
    return null !== e && de(this.value.arrayValue, e);
  }
}
class He extends qe {
  constructor(t2, e) {
    super(t2, "not-in", e);
  }
  matches(t2) {
    if (de(this.value.arrayValue, {
      nullValue: "NULL_VALUE"
    }))
      return false;
    const e = t2.data.field(this.field);
    return null !== e && !de(this.value.arrayValue, e);
  }
}
class Je extends qe {
  constructor(t2, e) {
    super(t2, "array-contains-any", e);
  }
  matches(t2) {
    const e = t2.data.field(this.field);
    return !(!Ie(e) || !e.arrayValue.values) && e.arrayValue.values.some((t3) => de(this.value.arrayValue, t3));
  }
}
class Ye {
  constructor(t2, e) {
    this.position = t2, this.inclusive = e;
  }
}
class Xe {
  constructor(t2, e = "asc") {
    this.field = t2, this.dir = e;
  }
}
function Ze(t2, e) {
  return t2.dir === e.dir && t2.field.isEqual(e.field);
}
function tn(t2, e, n) {
  let s = 0;
  for (let i = 0; i < t2.position.length; i++) {
    const r = e[i], o = t2.position[i];
    if (r.field.isKeyField())
      s = dt.comparator(dt.fromName(o.referenceValue), n.key);
    else {
      s = _e(o, n.data.field(r.field));
    }
    if ("desc" === r.dir && (s *= -1), 0 !== s)
      break;
  }
  return s;
}
function en(t2, e) {
  if (null === t2)
    return null === e;
  if (null === e)
    return false;
  if (t2.inclusive !== e.inclusive || t2.position.length !== e.position.length)
    return false;
  for (let n = 0; n < t2.position.length; n++) {
    if (!fe(t2.position[n], e.position[n]))
      return false;
  }
  return true;
}
class nn {
  constructor(t2, e = null, n = [], s = [], i = null, r = "F", o = null, u = null) {
    this.path = t2, this.collectionGroup = e, this.explicitOrderBy = n, this.filters = s, this.limit = i, this.limitType = r, this.startAt = o, this.endAt = u, this.lt = null, this.ft = null, this.startAt, this.endAt;
  }
}
function sn(t2, e, n, s, i, r, o, u) {
  return new nn(t2, e, n, s, i, r, o, u);
}
function rn(t2) {
  return new nn(t2);
}
function on(t2) {
  return 0 === t2.filters.length && null === t2.limit && null == t2.startAt && null == t2.endAt && (0 === t2.explicitOrderBy.length || 1 === t2.explicitOrderBy.length && t2.explicitOrderBy[0].field.isKeyField());
}
function un(t2) {
  return t2.explicitOrderBy.length > 0 ? t2.explicitOrderBy[0].field : null;
}
function cn(t2) {
  for (const e of t2.filters)
    if (e.ht())
      return e.field;
  return null;
}
function an(t2) {
  return null !== t2.collectionGroup;
}
function hn(t2) {
  const e = K(t2);
  if (null === e.lt) {
    e.lt = [];
    const t3 = cn(e), n = un(e);
    if (null !== t3 && null === n)
      t3.isKeyField() || e.lt.push(new Xe(t3)), e.lt.push(new Xe(ft.keyField(), "asc"));
    else {
      let t4 = false;
      for (const n2 of e.explicitOrderBy)
        e.lt.push(n2), n2.field.isKeyField() && (t4 = true);
      if (!t4) {
        const t5 = e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc";
        e.lt.push(new Xe(ft.keyField(), t5));
      }
    }
  }
  return e.lt;
}
function ln(t2) {
  const e = K(t2);
  if (!e.ft)
    if ("F" === e.limitType)
      e.ft = ke(e.path, e.collectionGroup, hn(e), e.filters, e.limit, e.startAt, e.endAt);
    else {
      const t3 = [];
      for (const n2 of hn(e)) {
        const e2 = "desc" === n2.dir ? "asc" : "desc";
        t3.push(new Xe(n2.field, e2));
      }
      const n = e.endAt ? new Ye(e.endAt.position, e.endAt.inclusive) : null, s = e.startAt ? new Ye(e.startAt.position, e.startAt.inclusive) : null;
      e.ft = ke(e.path, e.collectionGroup, t3, e.filters, e.limit, n, s);
    }
  return e.ft;
}
function fn(t2, e, n) {
  return new nn(t2.path, t2.collectionGroup, t2.explicitOrderBy.slice(), t2.filters.slice(), e, n, t2.startAt, t2.endAt);
}
function dn(t2, e) {
  return Fe(ln(t2), ln(e)) && t2.limitType === e.limitType;
}
function _n(t2) {
  return `${Oe(ln(t2))}|lt:${t2.limitType}`;
}
function wn(t2) {
  return `Query(target=${Me(ln(t2))}; limitType=${t2.limitType})`;
}
function mn(t2, e) {
  return e.isFoundDocument() && function(t3, e2) {
    const n = e2.key.path;
    return null !== t3.collectionGroup ? e2.key.hasCollectionId(t3.collectionGroup) && t3.path.isPrefixOf(n) : dt.isDocumentKey(t3.path) ? t3.path.isEqual(n) : t3.path.isImmediateParentOf(n);
  }(t2, e) && function(t3, e2) {
    for (const n of t3.explicitOrderBy)
      if (!n.field.isKeyField() && null === e2.data.field(n.field))
        return false;
    return true;
  }(t2, e) && function(t3, e2) {
    for (const n of t3.filters)
      if (!n.matches(e2))
        return false;
    return true;
  }(t2, e) && function(t3, e2) {
    if (t3.startAt && !function(t4, e3, n) {
      const s = tn(t4, e3, n);
      return t4.inclusive ? s <= 0 : s < 0;
    }(t3.startAt, hn(t3), e2))
      return false;
    if (t3.endAt && !function(t4, e3, n) {
      const s = tn(t4, e3, n);
      return t4.inclusive ? s >= 0 : s > 0;
    }(t3.endAt, hn(t3), e2))
      return false;
    return true;
  }(t2, e);
}
function gn(t2) {
  return t2.collectionGroup || (t2.path.length % 2 == 1 ? t2.path.lastSegment() : t2.path.get(t2.path.length - 2));
}
function yn(t2) {
  return (e, n) => {
    let s = false;
    for (const i of hn(t2)) {
      const t3 = pn(i, e, n);
      if (0 !== t3)
        return t3;
      s = s || i.field.isKeyField();
    }
    return 0;
  };
}
function pn(t2, e, n) {
  const s = t2.field.isKeyField() ? dt.comparator(e.key, n.key) : function(t3, e2, n2) {
    const s2 = e2.data.field(t3), i = n2.data.field(t3);
    return null !== s2 && null !== i ? _e(s2, i) : L();
  }(t2.field, e, n);
  switch (t2.dir) {
    case "asc":
      return s;
    case "desc":
      return -1 * s;
    default:
      return L();
  }
}
function In(t2, e) {
  if (t2.dt) {
    if (isNaN(e))
      return {
        doubleValue: "NaN"
      };
    if (e === 1 / 0)
      return {
        doubleValue: "Infinity"
      };
    if (e === -1 / 0)
      return {
        doubleValue: "-Infinity"
      };
  }
  return {
    doubleValue: ue(e) ? "-0" : e
  };
}
function Tn(t2) {
  return {
    integerValue: "" + t2
  };
}
function En(t2, e) {
  return ce(e) ? Tn(e) : In(t2, e);
}
class An {
  constructor() {
    this._ = void 0;
  }
}
function Rn(t2, e, n) {
  return t2 instanceof vn ? function(t3, e2) {
    const n2 = {
      fields: {
        __type__: {
          stringValue: "server_timestamp"
        },
        __local_write_time__: {
          timestampValue: {
            seconds: t3.seconds,
            nanos: t3.nanoseconds
          }
        }
      }
    };
    return e2 && (n2.fields.__previous_value__ = e2), {
      mapValue: n2
    };
  }(n, e) : t2 instanceof Vn ? Sn(t2, e) : t2 instanceof Dn ? Cn(t2, e) : function(t3, e2) {
    const n2 = Pn(t3, e2), s = Nn(n2) + Nn(t3._t);
    return pe(n2) && pe(t3._t) ? Tn(s) : In(t3.wt, s);
  }(t2, e);
}
function bn(t2, e, n) {
  return t2 instanceof Vn ? Sn(t2, e) : t2 instanceof Dn ? Cn(t2, e) : n;
}
function Pn(t2, e) {
  return t2 instanceof xn ? pe(n = e) || function(t3) {
    return !!t3 && "doubleValue" in t3;
  }(n) ? e : {
    integerValue: 0
  } : null;
  var n;
}
class vn extends An {
}
class Vn extends An {
  constructor(t2) {
    super(), this.elements = t2;
  }
}
function Sn(t2, e) {
  const n = kn(e);
  for (const e2 of t2.elements)
    n.some((t3) => fe(t3, e2)) || n.push(e2);
  return {
    arrayValue: {
      values: n
    }
  };
}
class Dn extends An {
  constructor(t2) {
    super(), this.elements = t2;
  }
}
function Cn(t2, e) {
  let n = kn(e);
  for (const e2 of t2.elements)
    n = n.filter((t3) => !fe(t3, e2));
  return {
    arrayValue: {
      values: n
    }
  };
}
class xn extends An {
  constructor(t2, e) {
    super(), this.wt = t2, this._t = e;
  }
}
function Nn(t2) {
  return Zt(t2.integerValue || t2.doubleValue);
}
function kn(t2) {
  return Ie(t2) && t2.arrayValue.values ? t2.arrayValue.values.slice() : [];
}
class On {
  constructor(t2, e) {
    this.field = t2, this.transform = e;
  }
}
function Mn(t2, e) {
  return t2.field.isEqual(e.field) && function(t3, e2) {
    return t3 instanceof Vn && e2 instanceof Vn || t3 instanceof Dn && e2 instanceof Dn ? rt(t3.elements, e2.elements, fe) : t3 instanceof xn && e2 instanceof xn ? fe(t3._t, e2._t) : t3 instanceof vn && e2 instanceof vn;
  }(t2.transform, e.transform);
}
class Fn {
  constructor(t2, e) {
    this.version = t2, this.transformResults = e;
  }
}
class $n {
  constructor(t2, e) {
    this.updateTime = t2, this.exists = e;
  }
  static none() {
    return new $n();
  }
  static exists(t2) {
    return new $n(void 0, t2);
  }
  static updateTime(t2) {
    return new $n(t2);
  }
  get isNone() {
    return void 0 === this.updateTime && void 0 === this.exists;
  }
  isEqual(t2) {
    return this.exists === t2.exists && (this.updateTime ? !!t2.updateTime && this.updateTime.isEqual(t2.updateTime) : !t2.updateTime);
  }
}
function Bn(t2, e) {
  return void 0 !== t2.updateTime ? e.isFoundDocument() && e.version.isEqual(t2.updateTime) : void 0 === t2.exists || t2.exists === e.isFoundDocument();
}
class Ln {
}
function Un(t2, e) {
  if (!t2.hasLocalMutations || e && 0 === e.fields.length)
    return null;
  if (null === e)
    return t2.isNoDocument() ? new Yn(t2.key, $n.none()) : new jn(t2.key, t2.data, $n.none());
  {
    const n = t2.data, s = De.empty();
    let i = new Qt(ft.comparator);
    for (let t3 of e.fields)
      if (!i.has(t3)) {
        let e2 = n.field(t3);
        null === e2 && t3.length > 1 && (t3 = t3.popLast(), e2 = n.field(t3)), null === e2 ? s.delete(t3) : s.set(t3, e2), i = i.add(t3);
      }
    return new Wn(t2.key, s, new zt(i.toArray()), $n.none());
  }
}
function qn(t2, e, n) {
  t2 instanceof jn ? function(t3, e2, n2) {
    const s = t3.value.clone(), i = Hn(t3.fieldTransforms, e2, n2.transformResults);
    s.setAll(i), e2.convertToFoundDocument(n2.version, s).setHasCommittedMutations();
  }(t2, e, n) : t2 instanceof Wn ? function(t3, e2, n2) {
    if (!Bn(t3.precondition, e2))
      return void e2.convertToUnknownDocument(n2.version);
    const s = Hn(t3.fieldTransforms, e2, n2.transformResults), i = e2.data;
    i.setAll(zn(t3)), i.setAll(s), e2.convertToFoundDocument(n2.version, i).setHasCommittedMutations();
  }(t2, e, n) : function(t3, e2, n2) {
    e2.convertToNoDocument(n2.version).setHasCommittedMutations();
  }(0, e, n);
}
function Kn(t2, e, n, s) {
  return t2 instanceof jn ? function(t3, e2, n2, s2) {
    if (!Bn(t3.precondition, e2))
      return n2;
    const i = t3.value.clone(), r = Jn(t3.fieldTransforms, s2, e2);
    return i.setAll(r), e2.convertToFoundDocument(e2.version, i).setHasLocalMutations(), null;
  }(t2, e, n, s) : t2 instanceof Wn ? function(t3, e2, n2, s2) {
    if (!Bn(t3.precondition, e2))
      return n2;
    const i = Jn(t3.fieldTransforms, s2, e2), r = e2.data;
    if (r.setAll(zn(t3)), r.setAll(i), e2.convertToFoundDocument(e2.version, r).setHasLocalMutations(), null === n2)
      return null;
    return n2.unionWith(t3.fieldMask.fields).unionWith(t3.fieldTransforms.map((t4) => t4.field));
  }(t2, e, n, s) : function(t3, e2, n2) {
    if (Bn(t3.precondition, e2))
      return e2.convertToNoDocument(e2.version).setHasLocalMutations(), null;
    return n2;
  }(t2, e, n);
}
function Gn(t2, e) {
  let n = null;
  for (const s of t2.fieldTransforms) {
    const t3 = e.data.field(s.field), i = Pn(s.transform, t3 || null);
    null != i && (null === n && (n = De.empty()), n.set(s.field, i));
  }
  return n || null;
}
function Qn(t2, e) {
  return t2.type === e.type && (!!t2.key.isEqual(e.key) && (!!t2.precondition.isEqual(e.precondition) && (!!function(t3, e2) {
    return void 0 === t3 && void 0 === e2 || !(!t3 || !e2) && rt(t3, e2, (t4, e3) => Mn(t4, e3));
  }(t2.fieldTransforms, e.fieldTransforms) && (0 === t2.type ? t2.value.isEqual(e.value) : 1 !== t2.type || t2.data.isEqual(e.data) && t2.fieldMask.isEqual(e.fieldMask)))));
}
class jn extends Ln {
  constructor(t2, e, n, s = []) {
    super(), this.key = t2, this.value = e, this.precondition = n, this.fieldTransforms = s, this.type = 0;
  }
  getFieldMask() {
    return null;
  }
}
class Wn extends Ln {
  constructor(t2, e, n, s, i = []) {
    super(), this.key = t2, this.data = e, this.fieldMask = n, this.precondition = s, this.fieldTransforms = i, this.type = 1;
  }
  getFieldMask() {
    return this.fieldMask;
  }
}
function zn(t2) {
  const e = /* @__PURE__ */ new Map();
  return t2.fieldMask.fields.forEach((n) => {
    if (!n.isEmpty()) {
      const s = t2.data.field(n);
      e.set(n, s);
    }
  }), e;
}
function Hn(t2, e, n) {
  const s = /* @__PURE__ */ new Map();
  U(t2.length === n.length);
  for (let i = 0; i < n.length; i++) {
    const r = t2[i], o = r.transform, u = e.data.field(r.field);
    s.set(r.field, bn(o, u, n[i]));
  }
  return s;
}
function Jn(t2, e, n) {
  const s = /* @__PURE__ */ new Map();
  for (const i of t2) {
    const t3 = i.transform, r = n.data.field(i.field);
    s.set(i.field, Rn(t3, r, e));
  }
  return s;
}
class Yn extends Ln {
  constructor(t2, e) {
    super(), this.key = t2, this.precondition = e, this.type = 2, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
}
class Xn extends Ln {
  constructor(t2, e) {
    super(), this.key = t2, this.precondition = e, this.type = 3, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
}
class Zn {
  constructor(t2) {
    this.count = t2;
  }
}
var ts, es;
function ns(t2) {
  switch (t2) {
    default:
      return L();
    case G.CANCELLED:
    case G.UNKNOWN:
    case G.DEADLINE_EXCEEDED:
    case G.RESOURCE_EXHAUSTED:
    case G.INTERNAL:
    case G.UNAVAILABLE:
    case G.UNAUTHENTICATED:
      return false;
    case G.INVALID_ARGUMENT:
    case G.NOT_FOUND:
    case G.ALREADY_EXISTS:
    case G.PERMISSION_DENIED:
    case G.FAILED_PRECONDITION:
    case G.ABORTED:
    case G.OUT_OF_RANGE:
    case G.UNIMPLEMENTED:
    case G.DATA_LOSS:
      return true;
  }
}
function ss(t2) {
  if (void 0 === t2)
    return F("GRPC error has no .code"), G.UNKNOWN;
  switch (t2) {
    case ts.OK:
      return G.OK;
    case ts.CANCELLED:
      return G.CANCELLED;
    case ts.UNKNOWN:
      return G.UNKNOWN;
    case ts.DEADLINE_EXCEEDED:
      return G.DEADLINE_EXCEEDED;
    case ts.RESOURCE_EXHAUSTED:
      return G.RESOURCE_EXHAUSTED;
    case ts.INTERNAL:
      return G.INTERNAL;
    case ts.UNAVAILABLE:
      return G.UNAVAILABLE;
    case ts.UNAUTHENTICATED:
      return G.UNAUTHENTICATED;
    case ts.INVALID_ARGUMENT:
      return G.INVALID_ARGUMENT;
    case ts.NOT_FOUND:
      return G.NOT_FOUND;
    case ts.ALREADY_EXISTS:
      return G.ALREADY_EXISTS;
    case ts.PERMISSION_DENIED:
      return G.PERMISSION_DENIED;
    case ts.FAILED_PRECONDITION:
      return G.FAILED_PRECONDITION;
    case ts.ABORTED:
      return G.ABORTED;
    case ts.OUT_OF_RANGE:
      return G.OUT_OF_RANGE;
    case ts.UNIMPLEMENTED:
      return G.UNIMPLEMENTED;
    case ts.DATA_LOSS:
      return G.DATA_LOSS;
    default:
      return L();
  }
}
(es = ts || (ts = {}))[es.OK = 0] = "OK", es[es.CANCELLED = 1] = "CANCELLED", es[es.UNKNOWN = 2] = "UNKNOWN", es[es.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", es[es.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", es[es.NOT_FOUND = 5] = "NOT_FOUND", es[es.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", es[es.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", es[es.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", es[es.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", es[es.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", es[es.ABORTED = 10] = "ABORTED", es[es.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", es[es.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", es[es.INTERNAL = 13] = "INTERNAL", es[es.UNAVAILABLE = 14] = "UNAVAILABLE", es[es.DATA_LOSS = 15] = "DATA_LOSS";
class is {
  constructor(t2, e) {
    this.mapKeyFn = t2, this.equalsFn = e, this.inner = {}, this.innerSize = 0;
  }
  get(t2) {
    const e = this.mapKeyFn(t2), n = this.inner[e];
    if (void 0 !== n) {
      for (const [e2, s] of n)
        if (this.equalsFn(e2, t2))
          return s;
    }
  }
  has(t2) {
    return void 0 !== this.get(t2);
  }
  set(t2, e) {
    const n = this.mapKeyFn(t2), s = this.inner[n];
    if (void 0 === s)
      return this.inner[n] = [[t2, e]], void this.innerSize++;
    for (let n2 = 0; n2 < s.length; n2++)
      if (this.equalsFn(s[n2][0], t2))
        return void (s[n2] = [t2, e]);
    s.push([t2, e]), this.innerSize++;
  }
  delete(t2) {
    const e = this.mapKeyFn(t2), n = this.inner[e];
    if (void 0 === n)
      return false;
    for (let s = 0; s < n.length; s++)
      if (this.equalsFn(n[s][0], t2))
        return 1 === n.length ? delete this.inner[e] : n.splice(s, 1), this.innerSize--, true;
    return false;
  }
  forEach(t2) {
    Lt(this.inner, (e, n) => {
      for (const [e2, s] of n)
        t2(e2, s);
    });
  }
  isEmpty() {
    return Ut(this.inner);
  }
  size() {
    return this.innerSize;
  }
}
const rs = new qt(dt.comparator);
function os() {
  return rs;
}
const us = new qt(dt.comparator);
function cs(...t2) {
  let e = us;
  for (const n of t2)
    e = e.insert(n.key, n);
  return e;
}
function as(t2) {
  let e = us;
  return t2.forEach((t3, n) => e = e.insert(t3, n.overlayedDocument)), e;
}
function hs() {
  return fs();
}
function ls() {
  return fs();
}
function fs() {
  return new is((t2) => t2.toString(), (t2, e) => t2.isEqual(e));
}
const ds = new qt(dt.comparator);
const _s = new Qt(dt.comparator);
function ws(...t2) {
  let e = _s;
  for (const n of t2)
    e = e.add(n);
  return e;
}
const ms = new Qt(it);
function gs() {
  return ms;
}
class ys {
  constructor(t2, e, n, s, i) {
    this.snapshotVersion = t2, this.targetChanges = e, this.targetMismatches = n, this.documentUpdates = s, this.resolvedLimboDocuments = i;
  }
  static createSynthesizedRemoteEventForCurrentChange(t2, e) {
    const n = /* @__PURE__ */ new Map();
    return n.set(t2, ps.createSynthesizedTargetChangeForCurrentChange(t2, e)), new ys(ct.min(), n, gs(), os(), ws());
  }
}
class ps {
  constructor(t2, e, n, s, i) {
    this.resumeToken = t2, this.current = e, this.addedDocuments = n, this.modifiedDocuments = s, this.removedDocuments = i;
  }
  static createSynthesizedTargetChangeForCurrentChange(t2, e) {
    return new ps(Jt.EMPTY_BYTE_STRING, e, ws(), ws(), ws());
  }
}
class Is {
  constructor(t2, e, n, s) {
    this.gt = t2, this.removedTargetIds = e, this.key = n, this.yt = s;
  }
}
class Ts {
  constructor(t2, e) {
    this.targetId = t2, this.It = e;
  }
}
class Es {
  constructor(t2, e, n = Jt.EMPTY_BYTE_STRING, s = null) {
    this.state = t2, this.targetIds = e, this.resumeToken = n, this.cause = s;
  }
}
class As {
  constructor() {
    this.Tt = 0, this.Et = Ps(), this.At = Jt.EMPTY_BYTE_STRING, this.Rt = false, this.bt = true;
  }
  get current() {
    return this.Rt;
  }
  get resumeToken() {
    return this.At;
  }
  get Pt() {
    return 0 !== this.Tt;
  }
  get vt() {
    return this.bt;
  }
  Vt(t2) {
    t2.approximateByteSize() > 0 && (this.bt = true, this.At = t2);
  }
  St() {
    let t2 = ws(), e = ws(), n = ws();
    return this.Et.forEach((s, i) => {
      switch (i) {
        case 0:
          t2 = t2.add(s);
          break;
        case 2:
          e = e.add(s);
          break;
        case 1:
          n = n.add(s);
          break;
        default:
          L();
      }
    }), new ps(this.At, this.Rt, t2, e, n);
  }
  Dt() {
    this.bt = false, this.Et = Ps();
  }
  Ct(t2, e) {
    this.bt = true, this.Et = this.Et.insert(t2, e);
  }
  xt(t2) {
    this.bt = true, this.Et = this.Et.remove(t2);
  }
  Nt() {
    this.Tt += 1;
  }
  kt() {
    this.Tt -= 1;
  }
  Ot() {
    this.bt = true, this.Rt = true;
  }
}
class Rs {
  constructor(t2) {
    this.Mt = t2, this.Ft = /* @__PURE__ */ new Map(), this.$t = os(), this.Bt = bs(), this.Lt = new Qt(it);
  }
  Ut(t2) {
    for (const e of t2.gt)
      t2.yt && t2.yt.isFoundDocument() ? this.qt(e, t2.yt) : this.Kt(e, t2.key, t2.yt);
    for (const e of t2.removedTargetIds)
      this.Kt(e, t2.key, t2.yt);
  }
  Gt(t2) {
    this.forEachTarget(t2, (e) => {
      const n = this.Qt(e);
      switch (t2.state) {
        case 0:
          this.jt(e) && n.Vt(t2.resumeToken);
          break;
        case 1:
          n.kt(), n.Pt || n.Dt(), n.Vt(t2.resumeToken);
          break;
        case 2:
          n.kt(), n.Pt || this.removeTarget(e);
          break;
        case 3:
          this.jt(e) && (n.Ot(), n.Vt(t2.resumeToken));
          break;
        case 4:
          this.jt(e) && (this.Wt(e), n.Vt(t2.resumeToken));
          break;
        default:
          L();
      }
    });
  }
  forEachTarget(t2, e) {
    t2.targetIds.length > 0 ? t2.targetIds.forEach(e) : this.Ft.forEach((t3, n) => {
      this.jt(n) && e(n);
    });
  }
  zt(t2) {
    const e = t2.targetId, n = t2.It.count, s = this.Ht(e);
    if (s) {
      const t3 = s.target;
      if ($e(t3))
        if (0 === n) {
          const n2 = new dt(t3.path);
          this.Kt(e, n2, xe.newNoDocument(n2, ct.min()));
        } else
          U(1 === n);
      else {
        this.Jt(e) !== n && (this.Wt(e), this.Lt = this.Lt.add(e));
      }
    }
  }
  Yt(t2) {
    const e = /* @__PURE__ */ new Map();
    this.Ft.forEach((n2, s2) => {
      const i = this.Ht(s2);
      if (i) {
        if (n2.current && $e(i.target)) {
          const e2 = new dt(i.target.path);
          null !== this.$t.get(e2) || this.Xt(s2, e2) || this.Kt(s2, e2, xe.newNoDocument(e2, t2));
        }
        n2.vt && (e.set(s2, n2.St()), n2.Dt());
      }
    });
    let n = ws();
    this.Bt.forEach((t3, e2) => {
      let s2 = true;
      e2.forEachWhile((t4) => {
        const e3 = this.Ht(t4);
        return !e3 || 2 === e3.purpose || (s2 = false, false);
      }), s2 && (n = n.add(t3));
    }), this.$t.forEach((e2, n2) => n2.setReadTime(t2));
    const s = new ys(t2, e, this.Lt, this.$t, n);
    return this.$t = os(), this.Bt = bs(), this.Lt = new Qt(it), s;
  }
  qt(t2, e) {
    if (!this.jt(t2))
      return;
    const n = this.Xt(t2, e.key) ? 2 : 0;
    this.Qt(t2).Ct(e.key, n), this.$t = this.$t.insert(e.key, e), this.Bt = this.Bt.insert(e.key, this.Zt(e.key).add(t2));
  }
  Kt(t2, e, n) {
    if (!this.jt(t2))
      return;
    const s = this.Qt(t2);
    this.Xt(t2, e) ? s.Ct(e, 1) : s.xt(e), this.Bt = this.Bt.insert(e, this.Zt(e).delete(t2)), n && (this.$t = this.$t.insert(e, n));
  }
  removeTarget(t2) {
    this.Ft.delete(t2);
  }
  Jt(t2) {
    const e = this.Qt(t2).St();
    return this.Mt.getRemoteKeysForTarget(t2).size + e.addedDocuments.size - e.removedDocuments.size;
  }
  Nt(t2) {
    this.Qt(t2).Nt();
  }
  Qt(t2) {
    let e = this.Ft.get(t2);
    return e || (e = new As(), this.Ft.set(t2, e)), e;
  }
  Zt(t2) {
    let e = this.Bt.get(t2);
    return e || (e = new Qt(it), this.Bt = this.Bt.insert(t2, e)), e;
  }
  jt(t2) {
    const e = null !== this.Ht(t2);
    return e || M("WatchChangeAggregator", "Detected inactive target", t2), e;
  }
  Ht(t2) {
    const e = this.Ft.get(t2);
    return e && e.Pt ? null : this.Mt.te(t2);
  }
  Wt(t2) {
    this.Ft.set(t2, new As());
    this.Mt.getRemoteKeysForTarget(t2).forEach((e) => {
      this.Kt(t2, e, null);
    });
  }
  Xt(t2, e) {
    return this.Mt.getRemoteKeysForTarget(t2).has(e);
  }
}
function bs() {
  return new qt(dt.comparator);
}
function Ps() {
  return new qt(dt.comparator);
}
const vs = (() => {
  const t2 = {
    asc: "ASCENDING",
    desc: "DESCENDING"
  };
  return t2;
})(), Vs = (() => {
  const t2 = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY"
  };
  return t2;
})();
class Ss {
  constructor(t2, e) {
    this.databaseId = t2, this.dt = e;
  }
}
function Ds(t2, e) {
  if (t2.dt) {
    return `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`;
  }
  return {
    seconds: "" + e.seconds,
    nanos: e.nanoseconds
  };
}
function Cs(t2, e) {
  return t2.dt ? e.toBase64() : e.toUint8Array();
}
function xs(t2, e) {
  return Ds(t2, e.toTimestamp());
}
function Ns(t2) {
  return U(!!t2), ct.fromTimestamp(function(t3) {
    const e = Xt(t3);
    return new ut(e.seconds, e.nanos);
  }(t2));
}
function ks(t2, e) {
  return function(t3) {
    return new ht(["projects", t3.projectId, "databases", t3.database]);
  }(t2).child("documents").child(e).canonicalString();
}
function Os(t2) {
  const e = ht.fromString(t2);
  return U(ui(e)), e;
}
function Ms(t2, e) {
  return ks(t2.databaseId, e.path);
}
function Fs(t2, e) {
  const n = Os(e);
  if (n.get(1) !== t2.databaseId.projectId)
    throw new Q(G.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + t2.databaseId.projectId);
  if (n.get(3) !== t2.databaseId.database)
    throw new Q(G.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + t2.databaseId.database);
  return new dt(Us(n));
}
function $s(t2, e) {
  return ks(t2.databaseId, e);
}
function Bs(t2) {
  const e = Os(t2);
  return 4 === e.length ? ht.emptyPath() : Us(e);
}
function Ls(t2) {
  return new ht(["projects", t2.databaseId.projectId, "databases", t2.databaseId.database]).canonicalString();
}
function Us(t2) {
  return U(t2.length > 4 && "documents" === t2.get(4)), t2.popFirst(5);
}
function qs(t2, e, n) {
  return {
    name: Ms(t2, e),
    fields: n.value.mapValue.fields
  };
}
function Qs(t2, e) {
  let n;
  if ("targetChange" in e) {
    e.targetChange;
    const s = function(t3) {
      return "NO_CHANGE" === t3 ? 0 : "ADD" === t3 ? 1 : "REMOVE" === t3 ? 2 : "CURRENT" === t3 ? 3 : "RESET" === t3 ? 4 : L();
    }(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [], r = function(t3, e2) {
      return t3.dt ? (U(void 0 === e2 || "string" == typeof e2), Jt.fromBase64String(e2 || "")) : (U(void 0 === e2 || e2 instanceof Uint8Array), Jt.fromUint8Array(e2 || new Uint8Array()));
    }(t2, e.targetChange.resumeToken), o = e.targetChange.cause, u = o && function(t3) {
      const e2 = void 0 === t3.code ? G.UNKNOWN : ss(t3.code);
      return new Q(e2, t3.message || "");
    }(o);
    n = new Es(s, i, r, u || null);
  } else if ("documentChange" in e) {
    e.documentChange;
    const s = e.documentChange;
    s.document, s.document.name, s.document.updateTime;
    const i = Fs(t2, s.document.name), r = Ns(s.document.updateTime), o = new De({
      mapValue: {
        fields: s.document.fields
      }
    }), u = xe.newFoundDocument(i, r, o), c = s.targetIds || [], a = s.removedTargetIds || [];
    n = new Is(c, a, u.key, u);
  } else if ("documentDelete" in e) {
    e.documentDelete;
    const s = e.documentDelete;
    s.document;
    const i = Fs(t2, s.document), r = s.readTime ? Ns(s.readTime) : ct.min(), o = xe.newNoDocument(i, r), u = s.removedTargetIds || [];
    n = new Is([], u, o.key, o);
  } else if ("documentRemove" in e) {
    e.documentRemove;
    const s = e.documentRemove;
    s.document;
    const i = Fs(t2, s.document), r = s.removedTargetIds || [];
    n = new Is([], r, i, null);
  } else {
    if (!("filter" in e))
      return L();
    {
      e.filter;
      const t3 = e.filter;
      t3.targetId;
      const s = t3.count || 0, i = new Zn(s), r = t3.targetId;
      n = new Ts(r, i);
    }
  }
  return n;
}
function js(t2, e) {
  let n;
  if (e instanceof jn)
    n = {
      update: qs(t2, e.key, e.value)
    };
  else if (e instanceof Yn)
    n = {
      delete: Ms(t2, e.key)
    };
  else if (e instanceof Wn)
    n = {
      update: qs(t2, e.key, e.data),
      updateMask: oi(e.fieldMask)
    };
  else {
    if (!(e instanceof Xn))
      return L();
    n = {
      verify: Ms(t2, e.key)
    };
  }
  return e.fieldTransforms.length > 0 && (n.updateTransforms = e.fieldTransforms.map((t3) => function(t4, e2) {
    const n2 = e2.transform;
    if (n2 instanceof vn)
      return {
        fieldPath: e2.field.canonicalString(),
        setToServerValue: "REQUEST_TIME"
      };
    if (n2 instanceof Vn)
      return {
        fieldPath: e2.field.canonicalString(),
        appendMissingElements: {
          values: n2.elements
        }
      };
    if (n2 instanceof Dn)
      return {
        fieldPath: e2.field.canonicalString(),
        removeAllFromArray: {
          values: n2.elements
        }
      };
    if (n2 instanceof xn)
      return {
        fieldPath: e2.field.canonicalString(),
        increment: n2._t
      };
    throw L();
  }(0, t3))), e.precondition.isNone || (n.currentDocument = function(t3, e2) {
    return void 0 !== e2.updateTime ? {
      updateTime: xs(t3, e2.updateTime)
    } : void 0 !== e2.exists ? {
      exists: e2.exists
    } : L();
  }(t2, e.precondition)), n;
}
function zs(t2, e) {
  return t2 && t2.length > 0 ? (U(void 0 !== e), t2.map((t3) => function(t4, e2) {
    let n = t4.updateTime ? Ns(t4.updateTime) : Ns(e2);
    return n.isEqual(ct.min()) && (n = Ns(e2)), new Fn(n, t4.transformResults || []);
  }(t3, e))) : [];
}
function Hs(t2, e) {
  return {
    documents: [$s(t2, e.path)]
  };
}
function Js(t2, e) {
  const n = {
    structuredQuery: {}
  }, s = e.path;
  null !== e.collectionGroup ? (n.parent = $s(t2, s), n.structuredQuery.from = [{
    collectionId: e.collectionGroup,
    allDescendants: true
  }]) : (n.parent = $s(t2, s.popLast()), n.structuredQuery.from = [{
    collectionId: s.lastSegment()
  }]);
  const i = function(t3) {
    if (0 === t3.length)
      return;
    const e2 = t3.map((t4) => function(t5) {
      if ("==" === t5.op) {
        if (Ee(t5.value))
          return {
            unaryFilter: {
              field: ni(t5.field),
              op: "IS_NAN"
            }
          };
        if (Te(t5.value))
          return {
            unaryFilter: {
              field: ni(t5.field),
              op: "IS_NULL"
            }
          };
      } else if ("!=" === t5.op) {
        if (Ee(t5.value))
          return {
            unaryFilter: {
              field: ni(t5.field),
              op: "IS_NOT_NAN"
            }
          };
        if (Te(t5.value))
          return {
            unaryFilter: {
              field: ni(t5.field),
              op: "IS_NOT_NULL"
            }
          };
      }
      return {
        fieldFilter: {
          field: ni(t5.field),
          op: ei(t5.op),
          value: t5.value
        }
      };
    }(t4));
    if (1 === e2.length)
      return e2[0];
    return {
      compositeFilter: {
        op: "AND",
        filters: e2
      }
    };
  }(e.filters);
  i && (n.structuredQuery.where = i);
  const r = function(t3) {
    if (0 === t3.length)
      return;
    return t3.map((t4) => function(t5) {
      return {
        field: ni(t5.field),
        direction: ti(t5.dir)
      };
    }(t4));
  }(e.orderBy);
  r && (n.structuredQuery.orderBy = r);
  const o = function(t3, e2) {
    return t3.dt || oe(e2) ? e2 : {
      value: e2
    };
  }(t2, e.limit);
  var u;
  return null !== o && (n.structuredQuery.limit = o), e.startAt && (n.structuredQuery.startAt = {
    before: (u = e.startAt).inclusive,
    values: u.position
  }), e.endAt && (n.structuredQuery.endAt = function(t3) {
    return {
      before: !t3.inclusive,
      values: t3.position
    };
  }(e.endAt)), n;
}
function Ys(t2) {
  let e = Bs(t2.parent);
  const n = t2.structuredQuery, s = n.from ? n.from.length : 0;
  let i = null;
  if (s > 0) {
    U(1 === s);
    const t3 = n.from[0];
    t3.allDescendants ? i = t3.collectionId : e = e.child(t3.collectionId);
  }
  let r = [];
  n.where && (r = Zs(n.where));
  let o = [];
  n.orderBy && (o = n.orderBy.map((t3) => function(t4) {
    return new Xe(
      si(t4.field),
      function(t5) {
        switch (t5) {
          case "ASCENDING":
            return "asc";
          case "DESCENDING":
            return "desc";
          default:
            return;
        }
      }(t4.direction)
    );
  }(t3)));
  let u = null;
  n.limit && (u = function(t3) {
    let e2;
    return e2 = "object" == typeof t3 ? t3.value : t3, oe(e2) ? null : e2;
  }(n.limit));
  let c = null;
  n.startAt && (c = function(t3) {
    const e2 = !!t3.before, n2 = t3.values || [];
    return new Ye(n2, e2);
  }(n.startAt));
  let a = null;
  return n.endAt && (a = function(t3) {
    const e2 = !t3.before, n2 = t3.values || [];
    return new Ye(n2, e2);
  }(n.endAt)), sn(e, i, o, r, u, "F", c, a);
}
function Xs(t2, e) {
  const n = function(t3, e2) {
    switch (e2) {
      case 0:
        return null;
      case 1:
        return "existence-filter-mismatch";
      case 2:
        return "limbo-document";
      default:
        return L();
    }
  }(0, e.purpose);
  return null == n ? null : {
    "goog-listen-tags": n
  };
}
function Zs(t2) {
  return t2 ? void 0 !== t2.unaryFilter ? [ri(t2)] : void 0 !== t2.fieldFilter ? [ii(t2)] : void 0 !== t2.compositeFilter ? t2.compositeFilter.filters.map((t3) => Zs(t3)).reduce((t3, e) => t3.concat(e)) : L() : [];
}
function ti(t2) {
  return vs[t2];
}
function ei(t2) {
  return Vs[t2];
}
function ni(t2) {
  return {
    fieldPath: t2.canonicalString()
  };
}
function si(t2) {
  return ft.fromServerFormat(t2.fieldPath);
}
function ii(t2) {
  return qe.create(si(t2.fieldFilter.field), function(t3) {
    switch (t3) {
      case "EQUAL":
        return "==";
      case "NOT_EQUAL":
        return "!=";
      case "GREATER_THAN":
        return ">";
      case "GREATER_THAN_OR_EQUAL":
        return ">=";
      case "LESS_THAN":
        return "<";
      case "LESS_THAN_OR_EQUAL":
        return "<=";
      case "ARRAY_CONTAINS":
        return "array-contains";
      case "IN":
        return "in";
      case "NOT_IN":
        return "not-in";
      case "ARRAY_CONTAINS_ANY":
        return "array-contains-any";
      default:
        return L();
    }
  }(t2.fieldFilter.op), t2.fieldFilter.value);
}
function ri(t2) {
  switch (t2.unaryFilter.op) {
    case "IS_NAN":
      const e = si(t2.unaryFilter.field);
      return qe.create(e, "==", {
        doubleValue: NaN
      });
    case "IS_NULL":
      const n = si(t2.unaryFilter.field);
      return qe.create(n, "==", {
        nullValue: "NULL_VALUE"
      });
    case "IS_NOT_NAN":
      const s = si(t2.unaryFilter.field);
      return qe.create(s, "!=", {
        doubleValue: NaN
      });
    case "IS_NOT_NULL":
      const i = si(t2.unaryFilter.field);
      return qe.create(i, "!=", {
        nullValue: "NULL_VALUE"
      });
    default:
      return L();
  }
}
function oi(t2) {
  const e = [];
  return t2.fields.forEach((t3) => e.push(t3.canonicalString())), {
    fieldPaths: e
  };
}
function ui(t2) {
  return t2.length >= 4 && "projects" === t2.get(0) && "databases" === t2.get(2);
}
class Fi {
  constructor(t2, e, n, s) {
    this.batchId = t2, this.localWriteTime = e, this.baseMutations = n, this.mutations = s;
  }
  applyToRemoteDocument(t2, e) {
    const n = e.mutationResults;
    for (let e2 = 0; e2 < this.mutations.length; e2++) {
      const s = this.mutations[e2];
      if (s.key.isEqual(t2.key)) {
        qn(s, t2, n[e2]);
      }
    }
  }
  applyToLocalView(t2, e) {
    for (const n of this.baseMutations)
      n.key.isEqual(t2.key) && (e = Kn(n, t2, e, this.localWriteTime));
    for (const n of this.mutations)
      n.key.isEqual(t2.key) && (e = Kn(n, t2, e, this.localWriteTime));
    return e;
  }
  applyToLocalDocumentSet(t2, e) {
    const n = ls();
    return this.mutations.forEach((s) => {
      const i = t2.get(s.key), r = i.overlayedDocument;
      let o = this.applyToLocalView(r, i.mutatedFields);
      o = e.has(s.key) ? null : o;
      const u = Un(r, o);
      null !== u && n.set(s.key, u), r.isValidDocument() || r.convertToNoDocument(ct.min());
    }), n;
  }
  keys() {
    return this.mutations.reduce((t2, e) => t2.add(e.key), ws());
  }
  isEqual(t2) {
    return this.batchId === t2.batchId && rt(this.mutations, t2.mutations, (t3, e) => Qn(t3, e)) && rt(this.baseMutations, t2.baseMutations, (t3, e) => Qn(t3, e));
  }
}
class $i {
  constructor(t2, e, n, s) {
    this.batch = t2, this.commitVersion = e, this.mutationResults = n, this.docVersions = s;
  }
  static from(t2, e, n) {
    U(t2.mutations.length === n.length);
    let s = ds;
    const i = t2.mutations;
    for (let t3 = 0; t3 < i.length; t3++)
      s = s.insert(i[t3].key, n[t3].version);
    return new $i(t2, e, n, s);
  }
}
class Bi {
  constructor(t2, e) {
    this.largestBatchId = t2, this.mutation = e;
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(t2) {
    return null !== t2 && this.mutation === t2.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
}
class Li {
  constructor(t2, e, n, s, i = ct.min(), r = ct.min(), o = Jt.EMPTY_BYTE_STRING) {
    this.target = t2, this.targetId = e, this.purpose = n, this.sequenceNumber = s, this.snapshotVersion = i, this.lastLimboFreeSnapshotVersion = r, this.resumeToken = o;
  }
  withSequenceNumber(t2) {
    return new Li(this.target, this.targetId, this.purpose, t2, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken);
  }
  withResumeToken(t2, e) {
    return new Li(this.target, this.targetId, this.purpose, this.sequenceNumber, e, this.lastLimboFreeSnapshotVersion, t2);
  }
  withLastLimboFreeSnapshotVersion(t2) {
    return new Li(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, t2, this.resumeToken);
  }
}
class Ui {
  constructor(t2) {
    this.ne = t2;
  }
}
function Ji(t2) {
  const e = Ys({
    parent: t2.parent,
    structuredQuery: t2.structuredQuery
  });
  return "LAST" === t2.limitType ? fn(e, e.limit, "L") : e;
}
class mr {
  constructor() {
    this.ze = new gr();
  }
  addToCollectionParentIndex(t2, e) {
    return this.ze.add(e), Pt.resolve();
  }
  getCollectionParents(t2, e) {
    return Pt.resolve(this.ze.getEntries(e));
  }
  addFieldIndex(t2, e) {
    return Pt.resolve();
  }
  deleteFieldIndex(t2, e) {
    return Pt.resolve();
  }
  getDocumentsMatchingTarget(t2, e) {
    return Pt.resolve(null);
  }
  getIndexType(t2, e) {
    return Pt.resolve(0);
  }
  getFieldIndexes(t2, e) {
    return Pt.resolve([]);
  }
  getNextCollectionGroupToUpdate(t2) {
    return Pt.resolve(null);
  }
  getMinOffset(t2, e) {
    return Pt.resolve(Tt.min());
  }
  getMinOffsetFromCollectionGroup(t2, e) {
    return Pt.resolve(Tt.min());
  }
  updateCollectionGroup(t2, e, n) {
    return Pt.resolve();
  }
  updateIndexEntries(t2, e) {
    return Pt.resolve();
  }
}
class gr {
  constructor() {
    this.index = {};
  }
  add(t2) {
    const e = t2.lastSegment(), n = t2.popLast(), s = this.index[e] || new Qt(ht.comparator), i = !s.has(n);
    return this.index[e] = s.add(n), i;
  }
  has(t2) {
    const e = t2.lastSegment(), n = t2.popLast(), s = this.index[e];
    return s && s.has(n);
  }
  getEntries(t2) {
    return (this.index[t2] || new Qt(ht.comparator)).toArray();
  }
}
class kr {
  constructor(t2) {
    this.En = t2;
  }
  next() {
    return this.En += 2, this.En;
  }
  static An() {
    return new kr(0);
  }
  static Rn() {
    return new kr(-1);
  }
}
class Qr {
  constructor() {
    this.changes = new is((t2) => t2.toString(), (t2, e) => t2.isEqual(e)), this.changesApplied = false;
  }
  addEntry(t2) {
    this.assertNotApplied(), this.changes.set(t2.key, t2);
  }
  removeEntry(t2, e) {
    this.assertNotApplied(), this.changes.set(t2, xe.newInvalidDocument(t2).setReadTime(e));
  }
  getEntry(t2, e) {
    this.assertNotApplied();
    const n = this.changes.get(e);
    return void 0 !== n ? Pt.resolve(n) : this.getFromCache(t2, e);
  }
  getEntries(t2, e) {
    return this.getAllFromCache(t2, e);
  }
  apply(t2) {
    return this.assertNotApplied(), this.changesApplied = true, this.applyChanges(t2);
  }
  assertNotApplied() {
  }
}
class to {
  constructor(t2, e) {
    this.overlayedDocument = t2, this.mutatedFields = e;
  }
}
class eo {
  constructor(t2, e, n, s) {
    this.remoteDocumentCache = t2, this.mutationQueue = e, this.documentOverlayCache = n, this.indexManager = s;
  }
  getDocument(t2, e) {
    let n = null;
    return this.documentOverlayCache.getOverlay(t2, e).next((s) => (n = s, this.getBaseDocument(t2, e, n))).next((t3) => (null !== n && Kn(n.mutation, t3, zt.empty(), ut.now()), t3));
  }
  getDocuments(t2, e) {
    return this.remoteDocumentCache.getEntries(t2, e).next((e2) => this.getLocalViewOfDocuments(t2, e2, ws()).next(() => e2));
  }
  getLocalViewOfDocuments(t2, e, n = ws()) {
    const s = hs();
    return this.populateOverlays(t2, s, e).next(() => this.computeViews(t2, e, s, n).next((t3) => {
      let e2 = cs();
      return t3.forEach((t4, n2) => {
        e2 = e2.insert(t4, n2.overlayedDocument);
      }), e2;
    }));
  }
  getOverlayedDocuments(t2, e) {
    const n = hs();
    return this.populateOverlays(t2, n, e).next(() => this.computeViews(t2, e, n, ws()));
  }
  populateOverlays(t2, e, n) {
    const s = [];
    return n.forEach((t3) => {
      e.has(t3) || s.push(t3);
    }), this.documentOverlayCache.getOverlays(t2, s).next((t3) => {
      t3.forEach((t4, n2) => {
        e.set(t4, n2);
      });
    });
  }
  computeViews(t2, e, n, s) {
    let i = os();
    const r = fs(), o = fs();
    return e.forEach((t3, e2) => {
      const o2 = n.get(e2.key);
      s.has(e2.key) && (void 0 === o2 || o2.mutation instanceof Wn) ? i = i.insert(e2.key, e2) : void 0 !== o2 && (r.set(e2.key, o2.mutation.getFieldMask()), Kn(o2.mutation, e2, o2.mutation.getFieldMask(), ut.now()));
    }), this.recalculateAndSaveOverlays(t2, i).next((t3) => (t3.forEach((t4, e2) => r.set(t4, e2)), e.forEach((t4, e2) => {
      var n2;
      return o.set(t4, new to(e2, null !== (n2 = r.get(t4)) && void 0 !== n2 ? n2 : null));
    }), o));
  }
  recalculateAndSaveOverlays(t2, e) {
    const n = fs();
    let s = new qt((t3, e2) => t3 - e2), i = ws();
    return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t2, e).next((t3) => {
      for (const i2 of t3)
        i2.keys().forEach((t4) => {
          const r = e.get(t4);
          if (null === r)
            return;
          let o = n.get(t4) || zt.empty();
          o = i2.applyToLocalView(r, o), n.set(t4, o);
          const u = (s.get(i2.batchId) || ws()).add(t4);
          s = s.insert(i2.batchId, u);
        });
    }).next(() => {
      const r = [], o = s.getReverseIterator();
      for (; o.hasNext(); ) {
        const s2 = o.getNext(), u = s2.key, c = s2.value, a = ls();
        c.forEach((t3) => {
          if (!i.has(t3)) {
            const s3 = Un(e.get(t3), n.get(t3));
            null !== s3 && a.set(t3, s3), i = i.add(t3);
          }
        }), r.push(this.documentOverlayCache.saveOverlays(t2, u, a));
      }
      return Pt.waitFor(r);
    }).next(() => n);
  }
  recalculateAndSaveOverlaysForDocumentKeys(t2, e) {
    return this.remoteDocumentCache.getEntries(t2, e).next((e2) => this.recalculateAndSaveOverlays(t2, e2));
  }
  getDocumentsMatchingQuery(t2, e, n) {
    return function(t3) {
      return dt.isDocumentKey(t3.path) && null === t3.collectionGroup && 0 === t3.filters.length;
    }(e) ? this.getDocumentsMatchingDocumentQuery(t2, e.path) : an(e) ? this.getDocumentsMatchingCollectionGroupQuery(t2, e, n) : this.getDocumentsMatchingCollectionQuery(t2, e, n);
  }
  getNextDocuments(t2, e, n, s) {
    return this.remoteDocumentCache.getAllFromCollectionGroup(t2, e, n, s).next((i) => {
      const r = s - i.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(t2, e, n.largestBatchId, s - i.size) : Pt.resolve(hs());
      let o = -1, u = i;
      return r.next((e2) => Pt.forEach(e2, (e3, n2) => (o < n2.largestBatchId && (o = n2.largestBatchId), i.get(e3) ? Pt.resolve() : this.getBaseDocument(t2, e3, n2).next((t3) => {
        u = u.insert(e3, t3);
      }))).next(() => this.populateOverlays(t2, e2, i)).next(() => this.computeViews(t2, u, e2, ws())).next((t3) => ({
        batchId: o,
        changes: as(t3)
      })));
    });
  }
  getDocumentsMatchingDocumentQuery(t2, e) {
    return this.getDocument(t2, new dt(e)).next((t3) => {
      let e2 = cs();
      return t3.isFoundDocument() && (e2 = e2.insert(t3.key, t3)), e2;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(t2, e, n) {
    const s = e.collectionGroup;
    let i = cs();
    return this.indexManager.getCollectionParents(t2, s).next((r) => Pt.forEach(r, (r2) => {
      const o = function(t3, e2) {
        return new nn(
          e2,
          null,
          t3.explicitOrderBy.slice(),
          t3.filters.slice(),
          t3.limit,
          t3.limitType,
          t3.startAt,
          t3.endAt
        );
      }(e, r2.child(s));
      return this.getDocumentsMatchingCollectionQuery(t2, o, n).next((t3) => {
        t3.forEach((t4, e2) => {
          i = i.insert(t4, e2);
        });
      });
    }).next(() => i));
  }
  getDocumentsMatchingCollectionQuery(t2, e, n) {
    let s;
    return this.remoteDocumentCache.getAllFromCollection(t2, e.path, n).next((i) => (s = i, this.documentOverlayCache.getOverlaysForCollection(t2, e.path, n.largestBatchId))).next((t3) => {
      t3.forEach((t4, e2) => {
        const n3 = e2.getKey();
        null === s.get(n3) && (s = s.insert(n3, xe.newInvalidDocument(n3)));
      });
      let n2 = cs();
      return s.forEach((s2, i) => {
        const r = t3.get(s2);
        void 0 !== r && Kn(r.mutation, i, zt.empty(), ut.now()), mn(e, i) && (n2 = n2.insert(s2, i));
      }), n2;
    });
  }
  getBaseDocument(t2, e, n) {
    return null === n || 1 === n.mutation.type ? this.remoteDocumentCache.getEntry(t2, e) : Pt.resolve(xe.newInvalidDocument(e));
  }
}
class no {
  constructor(t2) {
    this.wt = t2, this.Jn = /* @__PURE__ */ new Map(), this.Yn = /* @__PURE__ */ new Map();
  }
  getBundleMetadata(t2, e) {
    return Pt.resolve(this.Jn.get(e));
  }
  saveBundleMetadata(t2, e) {
    var n;
    return this.Jn.set(e.id, {
      id: (n = e).id,
      version: n.version,
      createTime: Ns(n.createTime)
    }), Pt.resolve();
  }
  getNamedQuery(t2, e) {
    return Pt.resolve(this.Yn.get(e));
  }
  saveNamedQuery(t2, e) {
    return this.Yn.set(e.name, function(t3) {
      return {
        name: t3.name,
        query: Ji(t3.bundledQuery),
        readTime: Ns(t3.readTime)
      };
    }(e)), Pt.resolve();
  }
}
class so {
  constructor() {
    this.overlays = new qt(dt.comparator), this.Xn = /* @__PURE__ */ new Map();
  }
  getOverlay(t2, e) {
    return Pt.resolve(this.overlays.get(e));
  }
  getOverlays(t2, e) {
    const n = hs();
    return Pt.forEach(e, (e2) => this.getOverlay(t2, e2).next((t3) => {
      null !== t3 && n.set(e2, t3);
    })).next(() => n);
  }
  saveOverlays(t2, e, n) {
    return n.forEach((n2, s) => {
      this.ie(t2, e, s);
    }), Pt.resolve();
  }
  removeOverlaysForBatchId(t2, e, n) {
    const s = this.Xn.get(n);
    return void 0 !== s && (s.forEach((t3) => this.overlays = this.overlays.remove(t3)), this.Xn.delete(n)), Pt.resolve();
  }
  getOverlaysForCollection(t2, e, n) {
    const s = hs(), i = e.length + 1, r = new dt(e.child("")), o = this.overlays.getIteratorFrom(r);
    for (; o.hasNext(); ) {
      const t3 = o.getNext().value, r2 = t3.getKey();
      if (!e.isPrefixOf(r2.path))
        break;
      r2.path.length === i && (t3.largestBatchId > n && s.set(t3.getKey(), t3));
    }
    return Pt.resolve(s);
  }
  getOverlaysForCollectionGroup(t2, e, n, s) {
    let i = new qt((t3, e2) => t3 - e2);
    const r = this.overlays.getIterator();
    for (; r.hasNext(); ) {
      const t3 = r.getNext().value;
      if (t3.getKey().getCollectionGroup() === e && t3.largestBatchId > n) {
        let e2 = i.get(t3.largestBatchId);
        null === e2 && (e2 = hs(), i = i.insert(t3.largestBatchId, e2)), e2.set(t3.getKey(), t3);
      }
    }
    const o = hs(), u = i.getIterator();
    for (; u.hasNext(); ) {
      if (u.getNext().value.forEach((t3, e2) => o.set(t3, e2)), o.size() >= s)
        break;
    }
    return Pt.resolve(o);
  }
  ie(t2, e, n) {
    const s = this.overlays.get(n.key);
    if (null !== s) {
      const t3 = this.Xn.get(s.largestBatchId).delete(n.key);
      this.Xn.set(s.largestBatchId, t3);
    }
    this.overlays = this.overlays.insert(n.key, new Bi(e, n));
    let i = this.Xn.get(e);
    void 0 === i && (i = ws(), this.Xn.set(e, i)), this.Xn.set(e, i.add(n.key));
  }
}
class io {
  constructor() {
    this.Zn = new Qt(ro.ts), this.es = new Qt(ro.ns);
  }
  isEmpty() {
    return this.Zn.isEmpty();
  }
  addReference(t2, e) {
    const n = new ro(t2, e);
    this.Zn = this.Zn.add(n), this.es = this.es.add(n);
  }
  ss(t2, e) {
    t2.forEach((t3) => this.addReference(t3, e));
  }
  removeReference(t2, e) {
    this.rs(new ro(t2, e));
  }
  os(t2, e) {
    t2.forEach((t3) => this.removeReference(t3, e));
  }
  us(t2) {
    const e = new dt(new ht([])), n = new ro(e, t2), s = new ro(e, t2 + 1), i = [];
    return this.es.forEachInRange([n, s], (t3) => {
      this.rs(t3), i.push(t3.key);
    }), i;
  }
  cs() {
    this.Zn.forEach((t2) => this.rs(t2));
  }
  rs(t2) {
    this.Zn = this.Zn.delete(t2), this.es = this.es.delete(t2);
  }
  hs(t2) {
    const e = new dt(new ht([])), n = new ro(e, t2), s = new ro(e, t2 + 1);
    let i = ws();
    return this.es.forEachInRange([n, s], (t3) => {
      i = i.add(t3.key);
    }), i;
  }
  containsKey(t2) {
    const e = new ro(t2, 0), n = this.Zn.firstAfterOrEqual(e);
    return null !== n && t2.isEqual(n.key);
  }
}
class ro {
  constructor(t2, e) {
    this.key = t2, this.ls = e;
  }
  static ts(t2, e) {
    return dt.comparator(t2.key, e.key) || it(t2.ls, e.ls);
  }
  static ns(t2, e) {
    return it(t2.ls, e.ls) || dt.comparator(t2.key, e.key);
  }
}
class oo {
  constructor(t2, e) {
    this.indexManager = t2, this.referenceDelegate = e, this.mutationQueue = [], this.fs = 1, this.ds = new Qt(ro.ts);
  }
  checkEmpty(t2) {
    return Pt.resolve(0 === this.mutationQueue.length);
  }
  addMutationBatch(t2, e, n, s) {
    const i = this.fs;
    this.fs++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
    const r = new Fi(i, e, n, s);
    this.mutationQueue.push(r);
    for (const e2 of s)
      this.ds = this.ds.add(new ro(e2.key, i)), this.indexManager.addToCollectionParentIndex(t2, e2.key.path.popLast());
    return Pt.resolve(r);
  }
  lookupMutationBatch(t2, e) {
    return Pt.resolve(this._s(e));
  }
  getNextMutationBatchAfterBatchId(t2, e) {
    const n = e + 1, s = this.ws(n), i = s < 0 ? 0 : s;
    return Pt.resolve(this.mutationQueue.length > i ? this.mutationQueue[i] : null);
  }
  getHighestUnacknowledgedBatchId() {
    return Pt.resolve(0 === this.mutationQueue.length ? -1 : this.fs - 1);
  }
  getAllMutationBatches(t2) {
    return Pt.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(t2, e) {
    const n = new ro(e, 0), s = new ro(e, Number.POSITIVE_INFINITY), i = [];
    return this.ds.forEachInRange([n, s], (t3) => {
      const e2 = this._s(t3.ls);
      i.push(e2);
    }), Pt.resolve(i);
  }
  getAllMutationBatchesAffectingDocumentKeys(t2, e) {
    let n = new Qt(it);
    return e.forEach((t3) => {
      const e2 = new ro(t3, 0), s = new ro(t3, Number.POSITIVE_INFINITY);
      this.ds.forEachInRange([e2, s], (t4) => {
        n = n.add(t4.ls);
      });
    }), Pt.resolve(this.gs(n));
  }
  getAllMutationBatchesAffectingQuery(t2, e) {
    const n = e.path, s = n.length + 1;
    let i = n;
    dt.isDocumentKey(i) || (i = i.child(""));
    const r = new ro(new dt(i), 0);
    let o = new Qt(it);
    return this.ds.forEachWhile((t3) => {
      const e2 = t3.key.path;
      return !!n.isPrefixOf(e2) && (e2.length === s && (o = o.add(t3.ls)), true);
    }, r), Pt.resolve(this.gs(o));
  }
  gs(t2) {
    const e = [];
    return t2.forEach((t3) => {
      const n = this._s(t3);
      null !== n && e.push(n);
    }), e;
  }
  removeMutationBatch(t2, e) {
    U(0 === this.ys(e.batchId, "removed")), this.mutationQueue.shift();
    let n = this.ds;
    return Pt.forEach(e.mutations, (s) => {
      const i = new ro(s.key, e.batchId);
      return n = n.delete(i), this.referenceDelegate.markPotentiallyOrphaned(t2, s.key);
    }).next(() => {
      this.ds = n;
    });
  }
  In(t2) {
  }
  containsKey(t2, e) {
    const n = new ro(e, 0), s = this.ds.firstAfterOrEqual(n);
    return Pt.resolve(e.isEqual(s && s.key));
  }
  performConsistencyCheck(t2) {
    return this.mutationQueue.length, Pt.resolve();
  }
  ys(t2, e) {
    return this.ws(t2);
  }
  ws(t2) {
    if (0 === this.mutationQueue.length)
      return 0;
    return t2 - this.mutationQueue[0].batchId;
  }
  _s(t2) {
    const e = this.ws(t2);
    if (e < 0 || e >= this.mutationQueue.length)
      return null;
    return this.mutationQueue[e];
  }
}
class uo {
  constructor(t2) {
    this.ps = t2, this.docs = new qt(dt.comparator), this.size = 0;
  }
  setIndexManager(t2) {
    this.indexManager = t2;
  }
  addEntry(t2, e) {
    const n = e.key, s = this.docs.get(n), i = s ? s.size : 0, r = this.ps(e);
    return this.docs = this.docs.insert(n, {
      document: e.mutableCopy(),
      size: r
    }), this.size += r - i, this.indexManager.addToCollectionParentIndex(t2, n.path.popLast());
  }
  removeEntry(t2) {
    const e = this.docs.get(t2);
    e && (this.docs = this.docs.remove(t2), this.size -= e.size);
  }
  getEntry(t2, e) {
    const n = this.docs.get(e);
    return Pt.resolve(n ? n.document.mutableCopy() : xe.newInvalidDocument(e));
  }
  getEntries(t2, e) {
    let n = os();
    return e.forEach((t3) => {
      const e2 = this.docs.get(t3);
      n = n.insert(t3, e2 ? e2.document.mutableCopy() : xe.newInvalidDocument(t3));
    }), Pt.resolve(n);
  }
  getAllFromCollection(t2, e, n) {
    let s = os();
    const i = new dt(e.child("")), r = this.docs.getIteratorFrom(i);
    for (; r.hasNext(); ) {
      const { key: t3, value: { document: i2 } } = r.getNext();
      if (!e.isPrefixOf(t3.path))
        break;
      t3.path.length > e.length + 1 || (Et(It(i2), n) <= 0 || (s = s.insert(i2.key, i2.mutableCopy())));
    }
    return Pt.resolve(s);
  }
  getAllFromCollectionGroup(t2, e, n, s) {
    L();
  }
  Is(t2, e) {
    return Pt.forEach(this.docs, (t3) => e(t3));
  }
  newChangeBuffer(t2) {
    return new co(this);
  }
  getSize(t2) {
    return Pt.resolve(this.size);
  }
}
class co extends Qr {
  constructor(t2) {
    super(), this.zn = t2;
  }
  applyChanges(t2) {
    const e = [];
    return this.changes.forEach((n, s) => {
      s.isValidDocument() ? e.push(this.zn.addEntry(t2, s)) : this.zn.removeEntry(n);
    }), Pt.waitFor(e);
  }
  getFromCache(t2, e) {
    return this.zn.getEntry(t2, e);
  }
  getAllFromCache(t2, e) {
    return this.zn.getEntries(t2, e);
  }
}
class ao {
  constructor(t2) {
    this.persistence = t2, this.Ts = new is((t3) => Oe(t3), Fe), this.lastRemoteSnapshotVersion = ct.min(), this.highestTargetId = 0, this.Es = 0, this.As = new io(), this.targetCount = 0, this.Rs = kr.An();
  }
  forEachTarget(t2, e) {
    return this.Ts.forEach((t3, n) => e(n)), Pt.resolve();
  }
  getLastRemoteSnapshotVersion(t2) {
    return Pt.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(t2) {
    return Pt.resolve(this.Es);
  }
  allocateTargetId(t2) {
    return this.highestTargetId = this.Rs.next(), Pt.resolve(this.highestTargetId);
  }
  setTargetsMetadata(t2, e, n) {
    return n && (this.lastRemoteSnapshotVersion = n), e > this.Es && (this.Es = e), Pt.resolve();
  }
  vn(t2) {
    this.Ts.set(t2.target, t2);
    const e = t2.targetId;
    e > this.highestTargetId && (this.Rs = new kr(e), this.highestTargetId = e), t2.sequenceNumber > this.Es && (this.Es = t2.sequenceNumber);
  }
  addTargetData(t2, e) {
    return this.vn(e), this.targetCount += 1, Pt.resolve();
  }
  updateTargetData(t2, e) {
    return this.vn(e), Pt.resolve();
  }
  removeTargetData(t2, e) {
    return this.Ts.delete(e.target), this.As.us(e.targetId), this.targetCount -= 1, Pt.resolve();
  }
  removeTargets(t2, e, n) {
    let s = 0;
    const i = [];
    return this.Ts.forEach((r, o) => {
      o.sequenceNumber <= e && null === n.get(o.targetId) && (this.Ts.delete(r), i.push(this.removeMatchingKeysForTargetId(t2, o.targetId)), s++);
    }), Pt.waitFor(i).next(() => s);
  }
  getTargetCount(t2) {
    return Pt.resolve(this.targetCount);
  }
  getTargetData(t2, e) {
    const n = this.Ts.get(e) || null;
    return Pt.resolve(n);
  }
  addMatchingKeys(t2, e, n) {
    return this.As.ss(e, n), Pt.resolve();
  }
  removeMatchingKeys(t2, e, n) {
    this.As.os(e, n);
    const s = this.persistence.referenceDelegate, i = [];
    return s && e.forEach((e2) => {
      i.push(s.markPotentiallyOrphaned(t2, e2));
    }), Pt.waitFor(i);
  }
  removeMatchingKeysForTargetId(t2, e) {
    return this.As.us(e), Pt.resolve();
  }
  getMatchingKeysForTargetId(t2, e) {
    const n = this.As.hs(e);
    return Pt.resolve(n);
  }
  containsKey(t2, e) {
    return Pt.resolve(this.As.containsKey(e));
  }
}
class ho {
  constructor(t2, e) {
    this.bs = {}, this.overlays = {}, this.Ps = new $t(0), this.vs = false, this.vs = true, this.referenceDelegate = t2(this), this.Vs = new ao(this);
    this.indexManager = new mr(), this.remoteDocumentCache = function(t3) {
      return new uo(t3);
    }((t3) => this.referenceDelegate.Ss(t3)), this.wt = new Ui(e), this.Ds = new no(this.wt);
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return this.vs = false, Promise.resolve();
  }
  get started() {
    return this.vs;
  }
  setDatabaseDeletedListener() {
  }
  setNetworkEnabled() {
  }
  getIndexManager(t2) {
    return this.indexManager;
  }
  getDocumentOverlayCache(t2) {
    let e = this.overlays[t2.toKey()];
    return e || (e = new so(), this.overlays[t2.toKey()] = e), e;
  }
  getMutationQueue(t2, e) {
    let n = this.bs[t2.toKey()];
    return n || (n = new oo(e, this.referenceDelegate), this.bs[t2.toKey()] = n), n;
  }
  getTargetCache() {
    return this.Vs;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.Ds;
  }
  runTransaction(t2, e, n) {
    M("MemoryPersistence", "Starting transaction:", t2);
    const s = new lo(this.Ps.next());
    return this.referenceDelegate.Cs(), n(s).next((t3) => this.referenceDelegate.xs(s).next(() => t3)).toPromise().then((t3) => (s.raiseOnCommittedEvent(), t3));
  }
  Ns(t2, e) {
    return Pt.or(Object.values(this.bs).map((n) => () => n.containsKey(t2, e)));
  }
}
class lo extends Rt {
  constructor(t2) {
    super(), this.currentSequenceNumber = t2;
  }
}
class fo {
  constructor(t2) {
    this.persistence = t2, this.ks = new io(), this.Os = null;
  }
  static Ms(t2) {
    return new fo(t2);
  }
  get Fs() {
    if (this.Os)
      return this.Os;
    throw L();
  }
  addReference(t2, e, n) {
    return this.ks.addReference(n, e), this.Fs.delete(n.toString()), Pt.resolve();
  }
  removeReference(t2, e, n) {
    return this.ks.removeReference(n, e), this.Fs.add(n.toString()), Pt.resolve();
  }
  markPotentiallyOrphaned(t2, e) {
    return this.Fs.add(e.toString()), Pt.resolve();
  }
  removeTarget(t2, e) {
    this.ks.us(e.targetId).forEach((t3) => this.Fs.add(t3.toString()));
    const n = this.persistence.getTargetCache();
    return n.getMatchingKeysForTargetId(t2, e.targetId).next((t3) => {
      t3.forEach((t4) => this.Fs.add(t4.toString()));
    }).next(() => n.removeTargetData(t2, e));
  }
  Cs() {
    this.Os = /* @__PURE__ */ new Set();
  }
  xs(t2) {
    const e = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return Pt.forEach(this.Fs, (n) => {
      const s = dt.fromPath(n);
      return this.$s(t2, s).next((t3) => {
        t3 || e.removeEntry(s, ct.min());
      });
    }).next(() => (this.Os = null, e.apply(t2)));
  }
  updateLimboDocument(t2, e) {
    return this.$s(t2, e).next((t3) => {
      t3 ? this.Fs.delete(e.toString()) : this.Fs.add(e.toString());
    });
  }
  Ss(t2) {
    return 0;
  }
  $s(t2, e) {
    return Pt.or([() => Pt.resolve(this.ks.containsKey(e)), () => this.persistence.getTargetCache().containsKey(t2, e), () => this.persistence.Ns(t2, e)]);
  }
}
class To {
  constructor(t2, e, n, s) {
    this.targetId = t2, this.fromCache = e, this.Pi = n, this.vi = s;
  }
  static Vi(t2, e) {
    let n = ws(), s = ws();
    for (const t3 of e.docChanges)
      switch (t3.type) {
        case 0:
          n = n.add(t3.doc.key);
          break;
        case 1:
          s = s.add(t3.doc.key);
      }
    return new To(t2, e.fromCache, n, s);
  }
}
class Eo {
  constructor() {
    this.Si = false;
  }
  initialize(t2, e) {
    this.Di = t2, this.indexManager = e, this.Si = true;
  }
  getDocumentsMatchingQuery(t2, e, n, s) {
    return this.Ci(t2, e).next((i) => i || this.xi(t2, e, s, n)).next((n2) => n2 || this.Ni(t2, e));
  }
  Ci(t2, e) {
    return Pt.resolve(null);
  }
  xi(t2, e, n, s) {
    return on(e) || s.isEqual(ct.min()) ? this.Ni(t2, e) : this.Di.getDocuments(t2, n).next((i) => {
      const r = this.ki(e, i);
      return this.Oi(e, r, n, s) ? this.Ni(t2, e) : (k() <= LogLevel.DEBUG && M("QueryEngine", "Re-using previous result from %s to execute query: %s", s.toString(), wn(e)), this.Mi(t2, r, e, pt(s, -1)));
    });
  }
  ki(t2, e) {
    let n = new Qt(yn(t2));
    return e.forEach((e2, s) => {
      mn(t2, s) && (n = n.add(s));
    }), n;
  }
  Oi(t2, e, n, s) {
    if (null === t2.limit)
      return false;
    if (n.size !== e.size)
      return true;
    const i = "F" === t2.limitType ? e.last() : e.first();
    return !!i && (i.hasPendingWrites || i.version.compareTo(s) > 0);
  }
  Ni(t2, e) {
    return k() <= LogLevel.DEBUG && M("QueryEngine", "Using full collection scan to execute query:", wn(e)), this.Di.getDocumentsMatchingQuery(t2, e, Tt.min());
  }
  Mi(t2, e, n, s) {
    return this.Di.getDocumentsMatchingQuery(t2, n, s).next((t3) => (e.forEach((e2) => {
      t3 = t3.insert(e2.key, e2);
    }), t3));
  }
}
class Ao {
  constructor(t2, e, n, s) {
    this.persistence = t2, this.Fi = e, this.wt = s, this.$i = new qt(it), this.Bi = new is((t3) => Oe(t3), Fe), this.Li = /* @__PURE__ */ new Map(), this.Ui = t2.getRemoteDocumentCache(), this.Vs = t2.getTargetCache(), this.Ds = t2.getBundleCache(), this.qi(n);
  }
  qi(t2) {
    this.documentOverlayCache = this.persistence.getDocumentOverlayCache(t2), this.indexManager = this.persistence.getIndexManager(t2), this.mutationQueue = this.persistence.getMutationQueue(t2, this.indexManager), this.localDocuments = new eo(this.Ui, this.mutationQueue, this.documentOverlayCache, this.indexManager), this.Ui.setIndexManager(this.indexManager), this.Fi.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(t2) {
    return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (e) => t2.collect(e, this.$i));
  }
}
function Ro(t2, e, n, s) {
  return new Ao(t2, e, n, s);
}
async function bo(t2, e) {
  const n = K(t2);
  return await n.persistence.runTransaction("Handle user change", "readonly", (t3) => {
    let s;
    return n.mutationQueue.getAllMutationBatches(t3).next((i) => (s = i, n.qi(e), n.mutationQueue.getAllMutationBatches(t3))).next((e2) => {
      const i = [], r = [];
      let o = ws();
      for (const t4 of s) {
        i.push(t4.batchId);
        for (const e3 of t4.mutations)
          o = o.add(e3.key);
      }
      for (const t4 of e2) {
        r.push(t4.batchId);
        for (const e3 of t4.mutations)
          o = o.add(e3.key);
      }
      return n.localDocuments.getDocuments(t3, o).next((t4) => ({
        Ki: t4,
        removedBatchIds: i,
        addedBatchIds: r
      }));
    });
  });
}
function Po(t2, e) {
  const n = K(t2);
  return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (t3) => {
    const s = e.batch.keys(), i = n.Ui.newChangeBuffer({
      trackRemovals: true
    });
    return function(t4, e2, n2, s2) {
      const i2 = n2.batch, r = i2.keys();
      let o = Pt.resolve();
      return r.forEach((t5) => {
        o = o.next(() => s2.getEntry(e2, t5)).next((e3) => {
          const r2 = n2.docVersions.get(t5);
          U(null !== r2), e3.version.compareTo(r2) < 0 && (i2.applyToRemoteDocument(e3, n2), e3.isValidDocument() && (e3.setReadTime(n2.commitVersion), s2.addEntry(e3)));
        });
      }), o.next(() => t4.mutationQueue.removeMutationBatch(e2, i2));
    }(n, t3, e, i).next(() => i.apply(t3)).next(() => n.mutationQueue.performConsistencyCheck(t3)).next(() => n.documentOverlayCache.removeOverlaysForBatchId(t3, s, e.batch.batchId)).next(() => n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t3, function(t4) {
      let e2 = ws();
      for (let n2 = 0; n2 < t4.mutationResults.length; ++n2) {
        t4.mutationResults[n2].transformResults.length > 0 && (e2 = e2.add(t4.batch.mutations[n2].key));
      }
      return e2;
    }(e))).next(() => n.localDocuments.getDocuments(t3, s));
  });
}
function vo(t2) {
  const e = K(t2);
  return e.persistence.runTransaction("Get last remote snapshot version", "readonly", (t3) => e.Vs.getLastRemoteSnapshotVersion(t3));
}
function Vo(t2, e) {
  const n = K(t2), s = e.snapshotVersion;
  let i = n.$i;
  return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (t3) => {
    const r = n.Ui.newChangeBuffer({
      trackRemovals: true
    });
    i = n.$i;
    const o = [];
    e.targetChanges.forEach((r2, u2) => {
      const c2 = i.get(u2);
      if (!c2)
        return;
      o.push(n.Vs.removeMatchingKeys(t3, r2.removedDocuments, u2).next(() => n.Vs.addMatchingKeys(t3, r2.addedDocuments, u2)));
      let a = c2.withSequenceNumber(t3.currentSequenceNumber);
      e.targetMismatches.has(u2) ? a = a.withResumeToken(Jt.EMPTY_BYTE_STRING, ct.min()).withLastLimboFreeSnapshotVersion(ct.min()) : r2.resumeToken.approximateByteSize() > 0 && (a = a.withResumeToken(r2.resumeToken, s)), i = i.insert(u2, a), function(t4, e2, n2) {
        if (0 === t4.resumeToken.approximateByteSize())
          return true;
        if (e2.snapshotVersion.toMicroseconds() - t4.snapshotVersion.toMicroseconds() >= 3e8)
          return true;
        return n2.addedDocuments.size + n2.modifiedDocuments.size + n2.removedDocuments.size > 0;
      }(c2, a, r2) && o.push(n.Vs.updateTargetData(t3, a));
    });
    let u = os(), c = ws();
    if (e.documentUpdates.forEach((s2) => {
      e.resolvedLimboDocuments.has(s2) && o.push(n.persistence.referenceDelegate.updateLimboDocument(t3, s2));
    }), o.push(So(t3, r, e.documentUpdates).next((t4) => {
      u = t4.Gi, c = t4.Qi;
    })), !s.isEqual(ct.min())) {
      const e2 = n.Vs.getLastRemoteSnapshotVersion(t3).next((e3) => n.Vs.setTargetsMetadata(t3, t3.currentSequenceNumber, s));
      o.push(e2);
    }
    return Pt.waitFor(o).next(() => r.apply(t3)).next(() => n.localDocuments.getLocalViewOfDocuments(t3, u, c)).next(() => u);
  }).then((t3) => (n.$i = i, t3));
}
function So(t2, e, n) {
  let s = ws(), i = ws();
  return n.forEach((t3) => s = s.add(t3)), e.getEntries(t2, s).next((t3) => {
    let s2 = os();
    return n.forEach((n2, r) => {
      const o = t3.get(n2);
      r.isFoundDocument() !== o.isFoundDocument() && (i = i.add(n2)), r.isNoDocument() && r.version.isEqual(ct.min()) ? (e.removeEntry(n2, r.readTime), s2 = s2.insert(n2, r)) : !o.isValidDocument() || r.version.compareTo(o.version) > 0 || 0 === r.version.compareTo(o.version) && o.hasPendingWrites ? (e.addEntry(r), s2 = s2.insert(n2, r)) : M("LocalStore", "Ignoring outdated watch update for ", n2, ". Current version:", o.version, " Watch version:", r.version);
    }), {
      Gi: s2,
      Qi: i
    };
  });
}
function Do(t2, e) {
  const n = K(t2);
  return n.persistence.runTransaction("Get next mutation batch", "readonly", (t3) => (void 0 === e && (e = -1), n.mutationQueue.getNextMutationBatchAfterBatchId(t3, e)));
}
function Co(t2, e) {
  const n = K(t2);
  return n.persistence.runTransaction("Allocate target", "readwrite", (t3) => {
    let s;
    return n.Vs.getTargetData(t3, e).next((i) => i ? (s = i, Pt.resolve(s)) : n.Vs.allocateTargetId(t3).next((i2) => (s = new Li(e, i2, 0, t3.currentSequenceNumber), n.Vs.addTargetData(t3, s).next(() => s))));
  }).then((t3) => {
    const s = n.$i.get(t3.targetId);
    return (null === s || t3.snapshotVersion.compareTo(s.snapshotVersion) > 0) && (n.$i = n.$i.insert(t3.targetId, t3), n.Bi.set(e, t3.targetId)), t3;
  });
}
async function xo(t2, e, n) {
  const s = K(t2), i = s.$i.get(e), r = n ? "readwrite" : "readwrite-primary";
  try {
    n || await s.persistence.runTransaction("Release target", r, (t3) => s.persistence.referenceDelegate.removeTarget(t3, i));
  } catch (t3) {
    if (!Ct(t3))
      throw t3;
    M("LocalStore", `Failed to update sequence numbers for target ${e}: ${t3}`);
  }
  s.$i = s.$i.remove(e), s.Bi.delete(i.target);
}
function No(t2, e, n) {
  const s = K(t2);
  let i = ct.min(), r = ws();
  return s.persistence.runTransaction("Execute query", "readonly", (t3) => function(t4, e2, n2) {
    const s2 = K(t4), i2 = s2.Bi.get(n2);
    return void 0 !== i2 ? Pt.resolve(s2.$i.get(i2)) : s2.Vs.getTargetData(e2, n2);
  }(s, t3, ln(e)).next((e2) => {
    if (e2)
      return i = e2.lastLimboFreeSnapshotVersion, s.Vs.getMatchingKeysForTargetId(t3, e2.targetId).next((t4) => {
        r = t4;
      });
  }).next(() => s.Fi.getDocumentsMatchingQuery(t3, e, n ? i : ct.min(), n ? r : ws())).next((t4) => (Mo(s, gn(e), t4), {
    documents: t4,
    ji: r
  })));
}
function Mo(t2, e, n) {
  let s = ct.min();
  n.forEach((t3, e2) => {
    e2.readTime.compareTo(s) > 0 && (s = e2.readTime);
  }), t2.Li.set(e, s);
}
class jo {
  constructor() {
    this.activeTargetIds = gs();
  }
  Xi(t2) {
    this.activeTargetIds = this.activeTargetIds.add(t2);
  }
  Zi(t2) {
    this.activeTargetIds = this.activeTargetIds.delete(t2);
  }
  Yi() {
    const t2 = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now()
    };
    return JSON.stringify(t2);
  }
}
class zo {
  constructor() {
    this.Fr = new jo(), this.$r = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
  }
  addPendingMutation(t2) {
  }
  updateMutationState(t2, e, n) {
  }
  addLocalQueryTarget(t2) {
    return this.Fr.Xi(t2), this.$r[t2] || "not-current";
  }
  updateQueryState(t2, e, n) {
    this.$r[t2] = e;
  }
  removeLocalQueryTarget(t2) {
    this.Fr.Zi(t2);
  }
  isLocalQueryTarget(t2) {
    return this.Fr.activeTargetIds.has(t2);
  }
  clearQueryState(t2) {
    delete this.$r[t2];
  }
  getAllActiveQueryTargets() {
    return this.Fr.activeTargetIds;
  }
  isActiveQueryTarget(t2) {
    return this.Fr.activeTargetIds.has(t2);
  }
  start() {
    return this.Fr = new jo(), Promise.resolve();
  }
  handleUserChange(t2, e, n) {
  }
  setOnlineState(t2) {
  }
  shutdown() {
  }
  writeSequenceNumber(t2) {
  }
  notifyBundleLoaded(t2) {
  }
}
class Ho {
  Br(t2) {
  }
  shutdown() {
  }
}
class Jo {
  constructor() {
    this.Lr = () => this.Ur(), this.qr = () => this.Kr(), this.Gr = [], this.Qr();
  }
  Br(t2) {
    this.Gr.push(t2);
  }
  shutdown() {
    window.removeEventListener("online", this.Lr), window.removeEventListener("offline", this.qr);
  }
  Qr() {
    window.addEventListener("online", this.Lr), window.addEventListener("offline", this.qr);
  }
  Ur() {
    M("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (const t2 of this.Gr)
      t2(0);
  }
  Kr() {
    M("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (const t2 of this.Gr)
      t2(1);
  }
  static V() {
    return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
  }
}
const Yo = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery"
};
class Xo {
  constructor(t2) {
    this.jr = t2.jr, this.Wr = t2.Wr;
  }
  zr(t2) {
    this.Hr = t2;
  }
  Jr(t2) {
    this.Yr = t2;
  }
  onMessage(t2) {
    this.Xr = t2;
  }
  close() {
    this.Wr();
  }
  send(t2) {
    this.jr(t2);
  }
  Zr() {
    this.Hr();
  }
  eo(t2) {
    this.Yr(t2);
  }
  no(t2) {
    this.Xr(t2);
  }
}
class Zo extends class {
  constructor(t2) {
    this.databaseInfo = t2, this.databaseId = t2.databaseId;
    const e = t2.ssl ? "https" : "http";
    this.so = e + "://" + t2.host, this.io = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents";
  }
  ro(t2, e, n, s, i) {
    const r = this.oo(t2, e);
    M("RestConnection", "Sending: ", r, n);
    const o = {};
    return this.uo(o, s, i), this.co(t2, r, o, n).then((t3) => (M("RestConnection", "Received: ", t3), t3), (e2) => {
      throw $("RestConnection", `${t2} failed with error: `, e2, "url: ", r, "request:", n), e2;
    });
  }
  ao(t2, e, n, s, i, r) {
    return this.ro(t2, e, n, s, i);
  }
  uo(t2, e, n) {
    t2["X-Goog-Api-Client"] = "gl-js/ fire/" + x, t2["Content-Type"] = "text/plain", this.databaseInfo.appId && (t2["X-Firebase-GMPID"] = this.databaseInfo.appId), e && e.headers.forEach((e2, n2) => t2[n2] = e2), n && n.headers.forEach((e2, n2) => t2[n2] = e2);
  }
  oo(t2, e) {
    const n = Yo[t2];
    return `${this.so}/v1/${e}:${n}`;
  }
} {
  constructor(t2) {
    super(t2), this.forceLongPolling = t2.forceLongPolling, this.autoDetectLongPolling = t2.autoDetectLongPolling, this.useFetchStreams = t2.useFetchStreams;
  }
  co(t2, e, n, s) {
    return new Promise((i, r) => {
      const o = new XhrIo();
      o.listenOnce(EventType.COMPLETE, () => {
        try {
          switch (o.getLastErrorCode()) {
            case ErrorCode.NO_ERROR:
              const e2 = o.getResponseJson();
              M("Connection", "XHR received:", JSON.stringify(e2)), i(e2);
              break;
            case ErrorCode.TIMEOUT:
              M("Connection", 'RPC "' + t2 + '" timed out'), r(new Q(G.DEADLINE_EXCEEDED, "Request time out"));
              break;
            case ErrorCode.HTTP_ERROR:
              const n2 = o.getStatus();
              if (M("Connection", 'RPC "' + t2 + '" failed with status:', n2, "response text:", o.getResponseText()), n2 > 0) {
                const t3 = o.getResponseJson().error;
                if (t3 && t3.status && t3.message) {
                  const e3 = function(t4) {
                    const e4 = t4.toLowerCase().replace(/_/g, "-");
                    return Object.values(G).indexOf(e4) >= 0 ? e4 : G.UNKNOWN;
                  }(t3.status);
                  r(new Q(e3, t3.message));
                } else
                  r(new Q(G.UNKNOWN, "Server responded with status " + o.getStatus()));
              } else
                r(new Q(G.UNAVAILABLE, "Connection failed."));
              break;
            default:
              L();
          }
        } finally {
          M("Connection", 'RPC "' + t2 + '" completed.');
        }
      });
      const u = JSON.stringify(s);
      o.send(e, "POST", u, n, 15);
    });
  }
  ho(t2, e, n) {
    const s = [this.so, "/", "google.firestore.v1.Firestore", "/", t2, "/channel"], i = createWebChannelTransport(), r = getStatEventTarget(), o = {
      httpSessionIdParam: "gsessionid",
      initMessageHeaders: {},
      messageUrlParams: {
        database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
      },
      sendRawJson: true,
      supportsCrossDomainXhr: true,
      internalChannelParams: {
        forwardChannelRequestTimeoutMs: 6e5
      },
      forceLongPolling: this.forceLongPolling,
      detectBufferingProxy: this.autoDetectLongPolling
    };
    this.useFetchStreams && (o.xmlHttpFactory = new FetchXmlHttpFactory({})), this.uo(o.initMessageHeaders, e, n), isMobileCordova() || isReactNative() || isElectron() || isIE() || isUWP() || isBrowserExtension() || (o.httpHeadersOverwriteParam = "$httpHeaders");
    const u = s.join("");
    M("Connection", "Creating WebChannel: " + u, o);
    const c = i.createWebChannel(u, o);
    let a = false, h = false;
    const l2 = new Xo({
      jr: (t3) => {
        h ? M("Connection", "Not sending because WebChannel is closed:", t3) : (a || (M("Connection", "Opening WebChannel transport."), c.open(), a = true), M("Connection", "WebChannel sending:", t3), c.send(t3));
      },
      Wr: () => c.close()
    }), y2 = (t3, e2, n2) => {
      t3.listen(e2, (t4) => {
        try {
          n2(t4);
        } catch (t5) {
          setTimeout(() => {
            throw t5;
          }, 0);
        }
      });
    };
    return y2(c, WebChannel.EventType.OPEN, () => {
      h || M("Connection", "WebChannel transport opened.");
    }), y2(c, WebChannel.EventType.CLOSE, () => {
      h || (h = true, M("Connection", "WebChannel transport closed"), l2.eo());
    }), y2(c, WebChannel.EventType.ERROR, (t3) => {
      h || (h = true, $("Connection", "WebChannel transport errored:", t3), l2.eo(new Q(G.UNAVAILABLE, "The operation could not be completed")));
    }), y2(c, WebChannel.EventType.MESSAGE, (t3) => {
      var e2;
      if (!h) {
        const n2 = t3.data[0];
        U(!!n2);
        const s2 = n2, i2 = s2.error || (null === (e2 = s2[0]) || void 0 === e2 ? void 0 : e2.error);
        if (i2) {
          M("Connection", "WebChannel received error:", i2);
          const t4 = i2.status;
          let e3 = function(t5) {
            const e4 = ts[t5];
            if (void 0 !== e4)
              return ss(e4);
          }(t4), n3 = i2.message;
          void 0 === e3 && (e3 = G.INTERNAL, n3 = "Unknown error status: " + t4 + " with message " + i2.message), h = true, l2.eo(new Q(e3, n3)), c.close();
        } else
          M("Connection", "WebChannel received:", n2), l2.no(n2);
      }
    }), y2(r, Event.STAT_EVENT, (t3) => {
      t3.stat === Stat.PROXY ? M("Connection", "Detected buffering proxy") : t3.stat === Stat.NOPROXY && M("Connection", "Detected no buffering proxy");
    }), setTimeout(() => {
      l2.Zr();
    }, 0), l2;
  }
}
function eu() {
  return "undefined" != typeof document ? document : null;
}
function nu(t2) {
  return new Ss(t2, true);
}
class su {
  constructor(t2, e, n = 1e3, s = 1.5, i = 6e4) {
    this.js = t2, this.timerId = e, this.lo = n, this.fo = s, this._o = i, this.wo = 0, this.mo = null, this.yo = Date.now(), this.reset();
  }
  reset() {
    this.wo = 0;
  }
  po() {
    this.wo = this._o;
  }
  Io(t2) {
    this.cancel();
    const e = Math.floor(this.wo + this.To()), n = Math.max(0, Date.now() - this.yo), s = Math.max(0, e - n);
    s > 0 && M("ExponentialBackoff", `Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`), this.mo = this.js.enqueueAfterDelay(this.timerId, s, () => (this.yo = Date.now(), t2())), this.wo *= this.fo, this.wo < this.lo && (this.wo = this.lo), this.wo > this._o && (this.wo = this._o);
  }
  Eo() {
    null !== this.mo && (this.mo.skipDelay(), this.mo = null);
  }
  cancel() {
    null !== this.mo && (this.mo.cancel(), this.mo = null);
  }
  To() {
    return (Math.random() - 0.5) * this.wo;
  }
}
class iu {
  constructor(t2, e, n, s, i, r, o, u) {
    this.js = t2, this.Ao = n, this.Ro = s, this.bo = i, this.authCredentialsProvider = r, this.appCheckCredentialsProvider = o, this.listener = u, this.state = 0, this.Po = 0, this.vo = null, this.Vo = null, this.stream = null, this.So = new su(t2, e);
  }
  Do() {
    return 1 === this.state || 5 === this.state || this.Co();
  }
  Co() {
    return 2 === this.state || 3 === this.state;
  }
  start() {
    4 !== this.state ? this.auth() : this.xo();
  }
  async stop() {
    this.Do() && await this.close(0);
  }
  No() {
    this.state = 0, this.So.reset();
  }
  ko() {
    this.Co() && null === this.vo && (this.vo = this.js.enqueueAfterDelay(this.Ao, 6e4, () => this.Oo()));
  }
  Mo(t2) {
    this.Fo(), this.stream.send(t2);
  }
  async Oo() {
    if (this.Co())
      return this.close(0);
  }
  Fo() {
    this.vo && (this.vo.cancel(), this.vo = null);
  }
  $o() {
    this.Vo && (this.Vo.cancel(), this.Vo = null);
  }
  async close(t2, e) {
    this.Fo(), this.$o(), this.So.cancel(), this.Po++, 4 !== t2 ? this.So.reset() : e && e.code === G.RESOURCE_EXHAUSTED ? (F(e.toString()), F("Using maximum backoff delay to prevent overloading the backend."), this.So.po()) : e && e.code === G.UNAUTHENTICATED && 3 !== this.state && (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), null !== this.stream && (this.Bo(), this.stream.close(), this.stream = null), this.state = t2, await this.listener.Jr(e);
  }
  Bo() {
  }
  auth() {
    this.state = 1;
    const t2 = this.Lo(this.Po), e = this.Po;
    Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then(([t3, n]) => {
      this.Po === e && this.Uo(t3, n);
    }, (e2) => {
      t2(() => {
        const t3 = new Q(G.UNKNOWN, "Fetching auth token failed: " + e2.message);
        return this.qo(t3);
      });
    });
  }
  Uo(t2, e) {
    const n = this.Lo(this.Po);
    this.stream = this.Ko(t2, e), this.stream.zr(() => {
      n(() => (this.state = 2, this.Vo = this.js.enqueueAfterDelay(this.Ro, 1e4, () => (this.Co() && (this.state = 3), Promise.resolve())), this.listener.zr()));
    }), this.stream.Jr((t3) => {
      n(() => this.qo(t3));
    }), this.stream.onMessage((t3) => {
      n(() => this.onMessage(t3));
    });
  }
  xo() {
    this.state = 5, this.So.Io(async () => {
      this.state = 0, this.start();
    });
  }
  qo(t2) {
    return M("PersistentStream", `close with error: ${t2}`), this.stream = null, this.close(4, t2);
  }
  Lo(t2) {
    return (e) => {
      this.js.enqueueAndForget(() => this.Po === t2 ? e() : (M("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve()));
    };
  }
}
class ru extends iu {
  constructor(t2, e, n, s, i, r) {
    super(t2, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", e, n, s, r), this.wt = i;
  }
  Ko(t2, e) {
    return this.bo.ho("Listen", t2, e);
  }
  onMessage(t2) {
    this.So.reset();
    const e = Qs(this.wt, t2), n = function(t3) {
      if (!("targetChange" in t3))
        return ct.min();
      const e2 = t3.targetChange;
      return e2.targetIds && e2.targetIds.length ? ct.min() : e2.readTime ? Ns(e2.readTime) : ct.min();
    }(t2);
    return this.listener.Go(e, n);
  }
  Qo(t2) {
    const e = {};
    e.database = Ls(this.wt), e.addTarget = function(t3, e2) {
      let n2;
      const s = e2.target;
      return n2 = $e(s) ? {
        documents: Hs(t3, s)
      } : {
        query: Js(t3, s)
      }, n2.targetId = e2.targetId, e2.resumeToken.approximateByteSize() > 0 ? n2.resumeToken = Cs(t3, e2.resumeToken) : e2.snapshotVersion.compareTo(ct.min()) > 0 && (n2.readTime = Ds(t3, e2.snapshotVersion.toTimestamp())), n2;
    }(this.wt, t2);
    const n = Xs(this.wt, t2);
    n && (e.labels = n), this.Mo(e);
  }
  jo(t2) {
    const e = {};
    e.database = Ls(this.wt), e.removeTarget = t2, this.Mo(e);
  }
}
class ou extends iu {
  constructor(t2, e, n, s, i, r) {
    super(t2, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", e, n, s, r), this.wt = i, this.Wo = false;
  }
  get zo() {
    return this.Wo;
  }
  start() {
    this.Wo = false, this.lastStreamToken = void 0, super.start();
  }
  Bo() {
    this.Wo && this.Ho([]);
  }
  Ko(t2, e) {
    return this.bo.ho("Write", t2, e);
  }
  onMessage(t2) {
    if (U(!!t2.streamToken), this.lastStreamToken = t2.streamToken, this.Wo) {
      this.So.reset();
      const e = zs(t2.writeResults, t2.commitTime), n = Ns(t2.commitTime);
      return this.listener.Jo(n, e);
    }
    return U(!t2.writeResults || 0 === t2.writeResults.length), this.Wo = true, this.listener.Yo();
  }
  Xo() {
    const t2 = {};
    t2.database = Ls(this.wt), this.Mo(t2);
  }
  Ho(t2) {
    const e = {
      streamToken: this.lastStreamToken,
      writes: t2.map((t3) => js(this.wt, t3))
    };
    this.Mo(e);
  }
}
class uu extends class {
} {
  constructor(t2, e, n, s) {
    super(), this.authCredentials = t2, this.appCheckCredentials = e, this.bo = n, this.wt = s, this.Zo = false;
  }
  tu() {
    if (this.Zo)
      throw new Q(G.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  ro(t2, e, n) {
    return this.tu(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([s, i]) => this.bo.ro(t2, e, n, s, i)).catch((t3) => {
      throw "FirebaseError" === t3.name ? (t3.code === G.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), t3) : new Q(G.UNKNOWN, t3.toString());
    });
  }
  ao(t2, e, n, s) {
    return this.tu(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([i, r]) => this.bo.ao(t2, e, n, i, r, s)).catch((t3) => {
      throw "FirebaseError" === t3.name ? (t3.code === G.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), t3) : new Q(G.UNKNOWN, t3.toString());
    });
  }
  terminate() {
    this.Zo = true;
  }
}
class cu {
  constructor(t2, e) {
    this.asyncQueue = t2, this.onlineStateHandler = e, this.state = "Unknown", this.eu = 0, this.nu = null, this.su = true;
  }
  iu() {
    0 === this.eu && (this.ru("Unknown"), this.nu = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, () => (this.nu = null, this.ou("Backend didn't respond within 10 seconds."), this.ru("Offline"), Promise.resolve())));
  }
  uu(t2) {
    "Online" === this.state ? this.ru("Unknown") : (this.eu++, this.eu >= 1 && (this.cu(), this.ou(`Connection failed 1 times. Most recent error: ${t2.toString()}`), this.ru("Offline")));
  }
  set(t2) {
    this.cu(), this.eu = 0, "Online" === t2 && (this.su = false), this.ru(t2);
  }
  ru(t2) {
    t2 !== this.state && (this.state = t2, this.onlineStateHandler(t2));
  }
  ou(t2) {
    const e = `Could not reach Cloud Firestore backend. ${t2}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.su ? (F(e), this.su = false) : M("OnlineStateTracker", e);
  }
  cu() {
    null !== this.nu && (this.nu.cancel(), this.nu = null);
  }
}
class au {
  constructor(t2, e, n, s, i) {
    this.localStore = t2, this.datastore = e, this.asyncQueue = n, this.remoteSyncer = {}, this.au = [], this.hu = /* @__PURE__ */ new Map(), this.lu = /* @__PURE__ */ new Set(), this.fu = [], this.du = i, this.du.Br((t3) => {
      n.enqueueAndForget(async () => {
        yu(this) && (M("RemoteStore", "Restarting streams for network reachability change."), await async function(t4) {
          const e2 = K(t4);
          e2.lu.add(4), await lu(e2), e2._u.set("Unknown"), e2.lu.delete(4), await hu(e2);
        }(this));
      });
    }), this._u = new cu(n, s);
  }
}
async function hu(t2) {
  if (yu(t2))
    for (const e of t2.fu)
      await e(true);
}
async function lu(t2) {
  for (const e of t2.fu)
    await e(false);
}
function fu(t2, e) {
  const n = K(t2);
  n.hu.has(e.targetId) || (n.hu.set(e.targetId, e), gu(n) ? mu(n) : Mu(n).Co() && _u(n, e));
}
function du(t2, e) {
  const n = K(t2), s = Mu(n);
  n.hu.delete(e), s.Co() && wu(n, e), 0 === n.hu.size && (s.Co() ? s.ko() : yu(n) && n._u.set("Unknown"));
}
function _u(t2, e) {
  t2.wu.Nt(e.targetId), Mu(t2).Qo(e);
}
function wu(t2, e) {
  t2.wu.Nt(e), Mu(t2).jo(e);
}
function mu(t2) {
  t2.wu = new Rs({
    getRemoteKeysForTarget: (e) => t2.remoteSyncer.getRemoteKeysForTarget(e),
    te: (e) => t2.hu.get(e) || null
  }), Mu(t2).start(), t2._u.iu();
}
function gu(t2) {
  return yu(t2) && !Mu(t2).Do() && t2.hu.size > 0;
}
function yu(t2) {
  return 0 === K(t2).lu.size;
}
function pu(t2) {
  t2.wu = void 0;
}
async function Iu(t2) {
  t2.hu.forEach((e, n) => {
    _u(t2, e);
  });
}
async function Tu(t2, e) {
  pu(t2), gu(t2) ? (t2._u.uu(e), mu(t2)) : t2._u.set("Unknown");
}
async function Eu(t2, e, n) {
  if (t2._u.set("Online"), e instanceof Es && 2 === e.state && e.cause)
    try {
      await async function(t3, e2) {
        const n2 = e2.cause;
        for (const s of e2.targetIds)
          t3.hu.has(s) && (await t3.remoteSyncer.rejectListen(s, n2), t3.hu.delete(s), t3.wu.removeTarget(s));
      }(t2, e);
    } catch (n2) {
      M("RemoteStore", "Failed to remove targets %s: %s ", e.targetIds.join(","), n2), await Au(t2, n2);
    }
  else if (e instanceof Is ? t2.wu.Ut(e) : e instanceof Ts ? t2.wu.zt(e) : t2.wu.Gt(e), !n.isEqual(ct.min()))
    try {
      const e2 = await vo(t2.localStore);
      n.compareTo(e2) >= 0 && await function(t3, e3) {
        const n2 = t3.wu.Yt(e3);
        return n2.targetChanges.forEach((n3, s) => {
          if (n3.resumeToken.approximateByteSize() > 0) {
            const i = t3.hu.get(s);
            i && t3.hu.set(s, i.withResumeToken(n3.resumeToken, e3));
          }
        }), n2.targetMismatches.forEach((e4) => {
          const n3 = t3.hu.get(e4);
          if (!n3)
            return;
          t3.hu.set(e4, n3.withResumeToken(Jt.EMPTY_BYTE_STRING, n3.snapshotVersion)), wu(t3, e4);
          const s = new Li(n3.target, e4, 1, n3.sequenceNumber);
          _u(t3, s);
        }), t3.remoteSyncer.applyRemoteEvent(n2);
      }(t2, n);
    } catch (e2) {
      M("RemoteStore", "Failed to raise snapshot:", e2), await Au(t2, e2);
    }
}
async function Au(t2, e, n) {
  if (!Ct(e))
    throw e;
  t2.lu.add(1), await lu(t2), t2._u.set("Offline"), n || (n = () => vo(t2.localStore)), t2.asyncQueue.enqueueRetryable(async () => {
    M("RemoteStore", "Retrying IndexedDB access"), await n(), t2.lu.delete(1), await hu(t2);
  });
}
function Ru(t2, e) {
  return e().catch((n) => Au(t2, n, e));
}
async function bu(t2) {
  const e = K(t2), n = Fu(e);
  let s = e.au.length > 0 ? e.au[e.au.length - 1].batchId : -1;
  for (; Pu(e); )
    try {
      const t3 = await Do(e.localStore, s);
      if (null === t3) {
        0 === e.au.length && n.ko();
        break;
      }
      s = t3.batchId, vu(e, t3);
    } catch (t3) {
      await Au(e, t3);
    }
  Vu(e) && Su(e);
}
function Pu(t2) {
  return yu(t2) && t2.au.length < 10;
}
function vu(t2, e) {
  t2.au.push(e);
  const n = Fu(t2);
  n.Co() && n.zo && n.Ho(e.mutations);
}
function Vu(t2) {
  return yu(t2) && !Fu(t2).Do() && t2.au.length > 0;
}
function Su(t2) {
  Fu(t2).start();
}
async function Du(t2) {
  Fu(t2).Xo();
}
async function Cu(t2) {
  const e = Fu(t2);
  for (const n of t2.au)
    e.Ho(n.mutations);
}
async function xu(t2, e, n) {
  const s = t2.au.shift(), i = $i.from(s, e, n);
  await Ru(t2, () => t2.remoteSyncer.applySuccessfulWrite(i)), await bu(t2);
}
async function Nu(t2, e) {
  e && Fu(t2).zo && await async function(t3, e2) {
    if (n = e2.code, ns(n) && n !== G.ABORTED) {
      const n2 = t3.au.shift();
      Fu(t3).No(), await Ru(t3, () => t3.remoteSyncer.rejectFailedWrite(n2.batchId, e2)), await bu(t3);
    }
    var n;
  }(t2, e), Vu(t2) && Su(t2);
}
async function ku(t2, e) {
  const n = K(t2);
  n.asyncQueue.verifyOperationInProgress(), M("RemoteStore", "RemoteStore received new credentials");
  const s = yu(n);
  n.lu.add(3), await lu(n), s && n._u.set("Unknown"), await n.remoteSyncer.handleCredentialChange(e), n.lu.delete(3), await hu(n);
}
async function Ou(t2, e) {
  const n = K(t2);
  e ? (n.lu.delete(2), await hu(n)) : e || (n.lu.add(2), await lu(n), n._u.set("Unknown"));
}
function Mu(t2) {
  return t2.mu || (t2.mu = function(t3, e, n) {
    const s = K(t3);
    return s.tu(), new ru(e, s.bo, s.authCredentials, s.appCheckCredentials, s.wt, n);
  }(t2.datastore, t2.asyncQueue, {
    zr: Iu.bind(null, t2),
    Jr: Tu.bind(null, t2),
    Go: Eu.bind(null, t2)
  }), t2.fu.push(async (e) => {
    e ? (t2.mu.No(), gu(t2) ? mu(t2) : t2._u.set("Unknown")) : (await t2.mu.stop(), pu(t2));
  })), t2.mu;
}
function Fu(t2) {
  return t2.gu || (t2.gu = function(t3, e, n) {
    const s = K(t3);
    return s.tu(), new ou(e, s.bo, s.authCredentials, s.appCheckCredentials, s.wt, n);
  }(t2.datastore, t2.asyncQueue, {
    zr: Du.bind(null, t2),
    Jr: Nu.bind(null, t2),
    Yo: Cu.bind(null, t2),
    Jo: xu.bind(null, t2)
  }), t2.fu.push(async (e) => {
    e ? (t2.gu.No(), await bu(t2)) : (await t2.gu.stop(), t2.au.length > 0 && (M("RemoteStore", `Stopping write stream with ${t2.au.length} pending writes`), t2.au = []));
  })), t2.gu;
}
class $u {
  constructor(t2, e, n, s, i) {
    this.asyncQueue = t2, this.timerId = e, this.targetTimeMs = n, this.op = s, this.removalCallback = i, this.deferred = new j(), this.then = this.deferred.promise.then.bind(this.deferred.promise), this.deferred.promise.catch((t3) => {
    });
  }
  static createAndSchedule(t2, e, n, s, i) {
    const r = Date.now() + n, o = new $u(t2, e, r, s, i);
    return o.start(n), o;
  }
  start(t2) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t2);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(t2) {
    null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new Q(G.CANCELLED, "Operation cancelled" + (t2 ? ": " + t2 : ""))));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() => null !== this.timerHandle ? (this.clearTimeout(), this.op().then((t2) => this.deferred.resolve(t2))) : Promise.resolve());
  }
  clearTimeout() {
    null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
  }
}
function Bu(t2, e) {
  if (F("AsyncQueue", `${e}: ${t2}`), Ct(t2))
    return new Q(G.UNAVAILABLE, `${e}: ${t2}`);
  throw t2;
}
class Lu {
  constructor(t2) {
    this.comparator = t2 ? (e, n) => t2(e, n) || dt.comparator(e.key, n.key) : (t3, e) => dt.comparator(t3.key, e.key), this.keyedMap = cs(), this.sortedSet = new qt(this.comparator);
  }
  static emptySet(t2) {
    return new Lu(t2.comparator);
  }
  has(t2) {
    return null != this.keyedMap.get(t2);
  }
  get(t2) {
    return this.keyedMap.get(t2);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  indexOf(t2) {
    const e = this.keyedMap.get(t2);
    return e ? this.sortedSet.indexOf(e) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  forEach(t2) {
    this.sortedSet.inorderTraversal((e, n) => (t2(e), false));
  }
  add(t2) {
    const e = this.delete(t2.key);
    return e.copy(e.keyedMap.insert(t2.key, t2), e.sortedSet.insert(t2, null));
  }
  delete(t2) {
    const e = this.get(t2);
    return e ? this.copy(this.keyedMap.remove(t2), this.sortedSet.remove(e)) : this;
  }
  isEqual(t2) {
    if (!(t2 instanceof Lu))
      return false;
    if (this.size !== t2.size)
      return false;
    const e = this.sortedSet.getIterator(), n = t2.sortedSet.getIterator();
    for (; e.hasNext(); ) {
      const t3 = e.getNext().key, s = n.getNext().key;
      if (!t3.isEqual(s))
        return false;
    }
    return true;
  }
  toString() {
    const t2 = [];
    return this.forEach((e) => {
      t2.push(e.toString());
    }), 0 === t2.length ? "DocumentSet ()" : "DocumentSet (\n  " + t2.join("  \n") + "\n)";
  }
  copy(t2, e) {
    const n = new Lu();
    return n.comparator = this.comparator, n.keyedMap = t2, n.sortedSet = e, n;
  }
}
class Uu {
  constructor() {
    this.yu = new qt(dt.comparator);
  }
  track(t2) {
    const e = t2.doc.key, n = this.yu.get(e);
    n ? 0 !== t2.type && 3 === n.type ? this.yu = this.yu.insert(e, t2) : 3 === t2.type && 1 !== n.type ? this.yu = this.yu.insert(e, {
      type: n.type,
      doc: t2.doc
    }) : 2 === t2.type && 2 === n.type ? this.yu = this.yu.insert(e, {
      type: 2,
      doc: t2.doc
    }) : 2 === t2.type && 0 === n.type ? this.yu = this.yu.insert(e, {
      type: 0,
      doc: t2.doc
    }) : 1 === t2.type && 0 === n.type ? this.yu = this.yu.remove(e) : 1 === t2.type && 2 === n.type ? this.yu = this.yu.insert(e, {
      type: 1,
      doc: n.doc
    }) : 0 === t2.type && 1 === n.type ? this.yu = this.yu.insert(e, {
      type: 2,
      doc: t2.doc
    }) : L() : this.yu = this.yu.insert(e, t2);
  }
  pu() {
    const t2 = [];
    return this.yu.inorderTraversal((e, n) => {
      t2.push(n);
    }), t2;
  }
}
class qu {
  constructor(t2, e, n, s, i, r, o, u) {
    this.query = t2, this.docs = e, this.oldDocs = n, this.docChanges = s, this.mutatedKeys = i, this.fromCache = r, this.syncStateChanged = o, this.excludesMetadataChanges = u;
  }
  static fromInitialDocuments(t2, e, n, s) {
    const i = [];
    return e.forEach((t3) => {
      i.push({
        type: 0,
        doc: t3
      });
    }), new qu(
      t2,
      e,
      Lu.emptySet(e),
      i,
      n,
      s,
      true,
      false
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(t2) {
    if (!(this.fromCache === t2.fromCache && this.syncStateChanged === t2.syncStateChanged && this.mutatedKeys.isEqual(t2.mutatedKeys) && dn(this.query, t2.query) && this.docs.isEqual(t2.docs) && this.oldDocs.isEqual(t2.oldDocs)))
      return false;
    const e = this.docChanges, n = t2.docChanges;
    if (e.length !== n.length)
      return false;
    for (let t3 = 0; t3 < e.length; t3++)
      if (e[t3].type !== n[t3].type || !e[t3].doc.isEqual(n[t3].doc))
        return false;
    return true;
  }
}
class Ku {
  constructor() {
    this.Iu = void 0, this.listeners = [];
  }
}
class Gu {
  constructor() {
    this.queries = new is((t2) => _n(t2), dn), this.onlineState = "Unknown", this.Tu = /* @__PURE__ */ new Set();
  }
}
async function Qu(t2, e) {
  const n = K(t2), s = e.query;
  let i = false, r = n.queries.get(s);
  if (r || (i = true, r = new Ku()), i)
    try {
      r.Iu = await n.onListen(s);
    } catch (t3) {
      const n2 = Bu(t3, `Initialization of query '${wn(e.query)}' failed`);
      return void e.onError(n2);
    }
  if (n.queries.set(s, r), r.listeners.push(e), e.Eu(n.onlineState), r.Iu) {
    e.Au(r.Iu) && Hu(n);
  }
}
async function ju(t2, e) {
  const n = K(t2), s = e.query;
  let i = false;
  const r = n.queries.get(s);
  if (r) {
    const t3 = r.listeners.indexOf(e);
    t3 >= 0 && (r.listeners.splice(t3, 1), i = 0 === r.listeners.length);
  }
  if (i)
    return n.queries.delete(s), n.onUnlisten(s);
}
function Wu(t2, e) {
  const n = K(t2);
  let s = false;
  for (const t3 of e) {
    const e2 = t3.query, i = n.queries.get(e2);
    if (i) {
      for (const e3 of i.listeners)
        e3.Au(t3) && (s = true);
      i.Iu = t3;
    }
  }
  s && Hu(n);
}
function zu(t2, e, n) {
  const s = K(t2), i = s.queries.get(e);
  if (i)
    for (const t3 of i.listeners)
      t3.onError(n);
  s.queries.delete(e);
}
function Hu(t2) {
  t2.Tu.forEach((t3) => {
    t3.next();
  });
}
class Ju {
  constructor(t2, e, n) {
    this.query = t2, this.Ru = e, this.bu = false, this.Pu = null, this.onlineState = "Unknown", this.options = n || {};
  }
  Au(t2) {
    if (!this.options.includeMetadataChanges) {
      const e2 = [];
      for (const n of t2.docChanges)
        3 !== n.type && e2.push(n);
      t2 = new qu(
        t2.query,
        t2.docs,
        t2.oldDocs,
        e2,
        t2.mutatedKeys,
        t2.fromCache,
        t2.syncStateChanged,
        true
      );
    }
    let e = false;
    return this.bu ? this.vu(t2) && (this.Ru.next(t2), e = true) : this.Vu(t2, this.onlineState) && (this.Su(t2), e = true), this.Pu = t2, e;
  }
  onError(t2) {
    this.Ru.error(t2);
  }
  Eu(t2) {
    this.onlineState = t2;
    let e = false;
    return this.Pu && !this.bu && this.Vu(this.Pu, t2) && (this.Su(this.Pu), e = true), e;
  }
  Vu(t2, e) {
    if (!t2.fromCache)
      return true;
    const n = "Offline" !== e;
    return (!this.options.Du || !n) && (!t2.docs.isEmpty() || "Offline" === e);
  }
  vu(t2) {
    if (t2.docChanges.length > 0)
      return true;
    const e = this.Pu && this.Pu.hasPendingWrites !== t2.hasPendingWrites;
    return !(!t2.syncStateChanged && !e) && true === this.options.includeMetadataChanges;
  }
  Su(t2) {
    t2 = qu.fromInitialDocuments(t2.query, t2.docs, t2.mutatedKeys, t2.fromCache), this.bu = true, this.Ru.next(t2);
  }
}
class ec {
  constructor(t2) {
    this.key = t2;
  }
}
class nc {
  constructor(t2) {
    this.key = t2;
  }
}
class sc {
  constructor(t2, e) {
    this.query = t2, this.Fu = e, this.$u = null, this.current = false, this.Bu = ws(), this.mutatedKeys = ws(), this.Lu = yn(t2), this.Uu = new Lu(this.Lu);
  }
  get qu() {
    return this.Fu;
  }
  Ku(t2, e) {
    const n = e ? e.Gu : new Uu(), s = e ? e.Uu : this.Uu;
    let i = e ? e.mutatedKeys : this.mutatedKeys, r = s, o = false;
    const u = "F" === this.query.limitType && s.size === this.query.limit ? s.last() : null, c = "L" === this.query.limitType && s.size === this.query.limit ? s.first() : null;
    if (t2.inorderTraversal((t3, e2) => {
      const a = s.get(t3), h = mn(this.query, e2) ? e2 : null, l2 = !!a && this.mutatedKeys.has(a.key), f = !!h && (h.hasLocalMutations || this.mutatedKeys.has(h.key) && h.hasCommittedMutations);
      let d = false;
      if (a && h) {
        a.data.isEqual(h.data) ? l2 !== f && (n.track({
          type: 3,
          doc: h
        }), d = true) : this.Qu(a, h) || (n.track({
          type: 2,
          doc: h
        }), d = true, (u && this.Lu(h, u) > 0 || c && this.Lu(h, c) < 0) && (o = true));
      } else
        !a && h ? (n.track({
          type: 0,
          doc: h
        }), d = true) : a && !h && (n.track({
          type: 1,
          doc: a
        }), d = true, (u || c) && (o = true));
      d && (h ? (r = r.add(h), i = f ? i.add(t3) : i.delete(t3)) : (r = r.delete(t3), i = i.delete(t3)));
    }), null !== this.query.limit)
      for (; r.size > this.query.limit; ) {
        const t3 = "F" === this.query.limitType ? r.last() : r.first();
        r = r.delete(t3.key), i = i.delete(t3.key), n.track({
          type: 1,
          doc: t3
        });
      }
    return {
      Uu: r,
      Gu: n,
      Oi: o,
      mutatedKeys: i
    };
  }
  Qu(t2, e) {
    return t2.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations;
  }
  applyChanges(t2, e, n) {
    const s = this.Uu;
    this.Uu = t2.Uu, this.mutatedKeys = t2.mutatedKeys;
    const i = t2.Gu.pu();
    i.sort((t3, e2) => function(t4, e3) {
      const n2 = (t5) => {
        switch (t5) {
          case 0:
            return 1;
          case 2:
          case 3:
            return 2;
          case 1:
            return 0;
          default:
            return L();
        }
      };
      return n2(t4) - n2(e3);
    }(t3.type, e2.type) || this.Lu(t3.doc, e2.doc)), this.ju(n);
    const r = e ? this.Wu() : [], o = 0 === this.Bu.size && this.current ? 1 : 0, u = o !== this.$u;
    if (this.$u = o, 0 !== i.length || u) {
      return {
        snapshot: new qu(
          this.query,
          t2.Uu,
          s,
          i,
          t2.mutatedKeys,
          0 === o,
          u,
          false
        ),
        zu: r
      };
    }
    return {
      zu: r
    };
  }
  Eu(t2) {
    return this.current && "Offline" === t2 ? (this.current = false, this.applyChanges(
      {
        Uu: this.Uu,
        Gu: new Uu(),
        mutatedKeys: this.mutatedKeys,
        Oi: false
      },
      false
    )) : {
      zu: []
    };
  }
  Hu(t2) {
    return !this.Fu.has(t2) && (!!this.Uu.has(t2) && !this.Uu.get(t2).hasLocalMutations);
  }
  ju(t2) {
    t2 && (t2.addedDocuments.forEach((t3) => this.Fu = this.Fu.add(t3)), t2.modifiedDocuments.forEach((t3) => {
    }), t2.removedDocuments.forEach((t3) => this.Fu = this.Fu.delete(t3)), this.current = t2.current);
  }
  Wu() {
    if (!this.current)
      return [];
    const t2 = this.Bu;
    this.Bu = ws(), this.Uu.forEach((t3) => {
      this.Hu(t3.key) && (this.Bu = this.Bu.add(t3.key));
    });
    const e = [];
    return t2.forEach((t3) => {
      this.Bu.has(t3) || e.push(new nc(t3));
    }), this.Bu.forEach((n) => {
      t2.has(n) || e.push(new ec(n));
    }), e;
  }
  Ju(t2) {
    this.Fu = t2.ji, this.Bu = ws();
    const e = this.Ku(t2.documents);
    return this.applyChanges(e, true);
  }
  Yu() {
    return qu.fromInitialDocuments(this.query, this.Uu, this.mutatedKeys, 0 === this.$u);
  }
}
class ic {
  constructor(t2, e, n) {
    this.query = t2, this.targetId = e, this.view = n;
  }
}
class rc {
  constructor(t2) {
    this.key = t2, this.Xu = false;
  }
}
class oc {
  constructor(t2, e, n, s, i, r) {
    this.localStore = t2, this.remoteStore = e, this.eventManager = n, this.sharedClientState = s, this.currentUser = i, this.maxConcurrentLimboResolutions = r, this.Zu = {}, this.tc = new is((t3) => _n(t3), dn), this.ec = /* @__PURE__ */ new Map(), this.nc = /* @__PURE__ */ new Set(), this.sc = new qt(dt.comparator), this.ic = /* @__PURE__ */ new Map(), this.rc = new io(), this.oc = {}, this.uc = /* @__PURE__ */ new Map(), this.cc = kr.Rn(), this.onlineState = "Unknown", this.ac = void 0;
  }
  get isPrimaryClient() {
    return true === this.ac;
  }
}
async function uc(t2, e) {
  const n = Mc(t2);
  let s, i;
  const r = n.tc.get(e);
  if (r)
    s = r.targetId, n.sharedClientState.addLocalQueryTarget(s), i = r.view.Yu();
  else {
    const t3 = await Co(n.localStore, ln(e));
    n.isPrimaryClient && fu(n.remoteStore, t3);
    const r2 = n.sharedClientState.addLocalQueryTarget(t3.targetId);
    s = t3.targetId, i = await cc(n, e, s, "current" === r2);
  }
  return i;
}
async function cc(t2, e, n, s) {
  t2.hc = (e2, n2, s2) => async function(t3, e3, n3, s3) {
    let i2 = e3.view.Ku(n3);
    i2.Oi && (i2 = await No(
      t3.localStore,
      e3.query,
      false
    ).then(({ documents: t4 }) => e3.view.Ku(t4, i2)));
    const r2 = s3 && s3.targetChanges.get(e3.targetId), o2 = e3.view.applyChanges(
      i2,
      t3.isPrimaryClient,
      r2
    );
    return Tc(t3, e3.targetId, o2.zu), o2.snapshot;
  }(t2, e2, n2, s2);
  const i = await No(
    t2.localStore,
    e,
    true
  ), r = new sc(e, i.ji), o = r.Ku(i.documents), u = ps.createSynthesizedTargetChangeForCurrentChange(n, s && "Offline" !== t2.onlineState), c = r.applyChanges(
    o,
    t2.isPrimaryClient,
    u
  );
  Tc(t2, n, c.zu);
  const a = new ic(e, n, r);
  return t2.tc.set(e, a), t2.ec.has(n) ? t2.ec.get(n).push(e) : t2.ec.set(n, [e]), c.snapshot;
}
async function ac(t2, e) {
  const n = K(t2), s = n.tc.get(e), i = n.ec.get(s.targetId);
  if (i.length > 1)
    return n.ec.set(s.targetId, i.filter((t3) => !dn(t3, e))), void n.tc.delete(e);
  if (n.isPrimaryClient) {
    n.sharedClientState.removeLocalQueryTarget(s.targetId);
    n.sharedClientState.isActiveQueryTarget(s.targetId) || await xo(
      n.localStore,
      s.targetId,
      false
    ).then(() => {
      n.sharedClientState.clearQueryState(s.targetId), du(n.remoteStore, s.targetId), pc(n, s.targetId);
    }).catch(bt);
  } else
    pc(n, s.targetId), await xo(
      n.localStore,
      s.targetId,
      true
    );
}
async function hc(t2, e, n) {
  const s = Fc(t2);
  try {
    const t3 = await function(t4, e2) {
      const n2 = K(t4), s2 = ut.now(), i = e2.reduce((t5, e3) => t5.add(e3.key), ws());
      let r, o;
      return n2.persistence.runTransaction("Locally write mutations", "readwrite", (t5) => {
        let u = os(), c = ws();
        return n2.Ui.getEntries(t5, i).next((t6) => {
          u = t6, u.forEach((t7, e3) => {
            e3.isValidDocument() || (c = c.add(t7));
          });
        }).next(() => n2.localDocuments.getOverlayedDocuments(t5, u)).next((i2) => {
          r = i2;
          const o2 = [];
          for (const t6 of e2) {
            const e3 = Gn(t6, r.get(t6.key).overlayedDocument);
            null != e3 && o2.push(new Wn(t6.key, e3, Ce(e3.value.mapValue), $n.exists(true)));
          }
          return n2.mutationQueue.addMutationBatch(t5, s2, o2, e2);
        }).next((e3) => {
          o = e3;
          const s3 = e3.applyToLocalDocumentSet(r, c);
          return n2.documentOverlayCache.saveOverlays(t5, e3.batchId, s3);
        });
      }).then(() => ({
        batchId: o.batchId,
        changes: as(r)
      }));
    }(s.localStore, e);
    s.sharedClientState.addPendingMutation(t3.batchId), function(t4, e2, n2) {
      let s2 = t4.oc[t4.currentUser.toKey()];
      s2 || (s2 = new qt(it));
      s2 = s2.insert(e2, n2), t4.oc[t4.currentUser.toKey()] = s2;
    }(s, t3.batchId, n), await Rc(s, t3.changes), await bu(s.remoteStore);
  } catch (t3) {
    const e2 = Bu(t3, "Failed to persist write");
    n.reject(e2);
  }
}
async function lc(t2, e) {
  const n = K(t2);
  try {
    const t3 = await Vo(n.localStore, e);
    e.targetChanges.forEach((t4, e2) => {
      const s = n.ic.get(e2);
      s && (U(t4.addedDocuments.size + t4.modifiedDocuments.size + t4.removedDocuments.size <= 1), t4.addedDocuments.size > 0 ? s.Xu = true : t4.modifiedDocuments.size > 0 ? U(s.Xu) : t4.removedDocuments.size > 0 && (U(s.Xu), s.Xu = false));
    }), await Rc(n, t3, e);
  } catch (t3) {
    await bt(t3);
  }
}
function fc(t2, e, n) {
  const s = K(t2);
  if (s.isPrimaryClient && 0 === n || !s.isPrimaryClient && 1 === n) {
    const t3 = [];
    s.tc.forEach((n2, s2) => {
      const i = s2.view.Eu(e);
      i.snapshot && t3.push(i.snapshot);
    }), function(t4, e2) {
      const n2 = K(t4);
      n2.onlineState = e2;
      let s2 = false;
      n2.queries.forEach((t5, n3) => {
        for (const t6 of n3.listeners)
          t6.Eu(e2) && (s2 = true);
      }), s2 && Hu(n2);
    }(s.eventManager, e), t3.length && s.Zu.Go(t3), s.onlineState = e, s.isPrimaryClient && s.sharedClientState.setOnlineState(e);
  }
}
async function dc(t2, e, n) {
  const s = K(t2);
  s.sharedClientState.updateQueryState(e, "rejected", n);
  const i = s.ic.get(e), r = i && i.key;
  if (r) {
    let t3 = new qt(dt.comparator);
    t3 = t3.insert(r, xe.newNoDocument(r, ct.min()));
    const n2 = ws().add(r), i2 = new ys(
      ct.min(),
      /* @__PURE__ */ new Map(),
      new Qt(it),
      t3,
      n2
    );
    await lc(s, i2), s.sc = s.sc.remove(r), s.ic.delete(e), Ac(s);
  } else
    await xo(
      s.localStore,
      e,
      false
    ).then(() => pc(s, e, n)).catch(bt);
}
async function _c(t2, e) {
  const n = K(t2), s = e.batch.batchId;
  try {
    const t3 = await Po(n.localStore, e);
    yc(n, s, null), gc(n, s), n.sharedClientState.updateMutationState(s, "acknowledged"), await Rc(n, t3);
  } catch (t3) {
    await bt(t3);
  }
}
async function wc(t2, e, n) {
  const s = K(t2);
  try {
    const t3 = await function(t4, e2) {
      const n2 = K(t4);
      return n2.persistence.runTransaction("Reject batch", "readwrite-primary", (t5) => {
        let s2;
        return n2.mutationQueue.lookupMutationBatch(t5, e2).next((e3) => (U(null !== e3), s2 = e3.keys(), n2.mutationQueue.removeMutationBatch(t5, e3))).next(() => n2.mutationQueue.performConsistencyCheck(t5)).next(() => n2.documentOverlayCache.removeOverlaysForBatchId(t5, s2, e2)).next(() => n2.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t5, s2)).next(() => n2.localDocuments.getDocuments(t5, s2));
      });
    }(s.localStore, e);
    yc(s, e, n), gc(s, e), s.sharedClientState.updateMutationState(e, "rejected", n), await Rc(s, t3);
  } catch (n2) {
    await bt(n2);
  }
}
function gc(t2, e) {
  (t2.uc.get(e) || []).forEach((t3) => {
    t3.resolve();
  }), t2.uc.delete(e);
}
function yc(t2, e, n) {
  const s = K(t2);
  let i = s.oc[s.currentUser.toKey()];
  if (i) {
    const t3 = i.get(e);
    t3 && (n ? t3.reject(n) : t3.resolve(), i = i.remove(e)), s.oc[s.currentUser.toKey()] = i;
  }
}
function pc(t2, e, n = null) {
  t2.sharedClientState.removeLocalQueryTarget(e);
  for (const s of t2.ec.get(e))
    t2.tc.delete(s), n && t2.Zu.lc(s, n);
  if (t2.ec.delete(e), t2.isPrimaryClient) {
    t2.rc.us(e).forEach((e2) => {
      t2.rc.containsKey(e2) || Ic(t2, e2);
    });
  }
}
function Ic(t2, e) {
  t2.nc.delete(e.path.canonicalString());
  const n = t2.sc.get(e);
  null !== n && (du(t2.remoteStore, n), t2.sc = t2.sc.remove(e), t2.ic.delete(n), Ac(t2));
}
function Tc(t2, e, n) {
  for (const s of n)
    if (s instanceof ec)
      t2.rc.addReference(s.key, e), Ec(t2, s);
    else if (s instanceof nc) {
      M("SyncEngine", "Document no longer in limbo: " + s.key), t2.rc.removeReference(s.key, e);
      t2.rc.containsKey(s.key) || Ic(t2, s.key);
    } else
      L();
}
function Ec(t2, e) {
  const n = e.key, s = n.path.canonicalString();
  t2.sc.get(n) || t2.nc.has(s) || (M("SyncEngine", "New document in limbo: " + n), t2.nc.add(s), Ac(t2));
}
function Ac(t2) {
  for (; t2.nc.size > 0 && t2.sc.size < t2.maxConcurrentLimboResolutions; ) {
    const e = t2.nc.values().next().value;
    t2.nc.delete(e);
    const n = new dt(ht.fromString(e)), s = t2.cc.next();
    t2.ic.set(s, new rc(n)), t2.sc = t2.sc.insert(n, s), fu(t2.remoteStore, new Li(ln(rn(n.path)), s, 2, $t.ot));
  }
}
async function Rc(t2, e, n) {
  const s = K(t2), i = [], r = [], o = [];
  s.tc.isEmpty() || (s.tc.forEach((t3, u) => {
    o.push(s.hc(u, e, n).then((t4) => {
      if (t4) {
        s.isPrimaryClient && s.sharedClientState.updateQueryState(u.targetId, t4.fromCache ? "not-current" : "current"), i.push(t4);
        const e2 = To.Vi(u.targetId, t4);
        r.push(e2);
      }
    }));
  }), await Promise.all(o), s.Zu.Go(i), await async function(t3, e2) {
    const n2 = K(t3);
    try {
      await n2.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (t4) => Pt.forEach(e2, (e3) => Pt.forEach(e3.Pi, (s2) => n2.persistence.referenceDelegate.addReference(t4, e3.targetId, s2)).next(() => Pt.forEach(e3.vi, (s2) => n2.persistence.referenceDelegate.removeReference(t4, e3.targetId, s2)))));
    } catch (t4) {
      if (!Ct(t4))
        throw t4;
      M("LocalStore", "Failed to update sequence numbers: " + t4);
    }
    for (const t4 of e2) {
      const e3 = t4.targetId;
      if (!t4.fromCache) {
        const t5 = n2.$i.get(e3), s2 = t5.snapshotVersion, i2 = t5.withLastLimboFreeSnapshotVersion(s2);
        n2.$i = n2.$i.insert(e3, i2);
      }
    }
  }(s.localStore, r));
}
async function bc(t2, e) {
  const n = K(t2);
  if (!n.currentUser.isEqual(e)) {
    M("SyncEngine", "User change. New user:", e.toKey());
    const t3 = await bo(n.localStore, e);
    n.currentUser = e, function(t4, e2) {
      t4.uc.forEach((t5) => {
        t5.forEach((t6) => {
          t6.reject(new Q(G.CANCELLED, e2));
        });
      }), t4.uc.clear();
    }(n, "'waitForPendingWrites' promise is rejected due to a user change."), n.sharedClientState.handleUserChange(e, t3.removedBatchIds, t3.addedBatchIds), await Rc(n, t3.Ki);
  }
}
function Pc(t2, e) {
  const n = K(t2), s = n.ic.get(e);
  if (s && s.Xu)
    return ws().add(s.key);
  {
    let t3 = ws();
    const s2 = n.ec.get(e);
    if (!s2)
      return t3;
    for (const e2 of s2) {
      const s3 = n.tc.get(e2);
      t3 = t3.unionWith(s3.view.qu);
    }
    return t3;
  }
}
function Mc(t2) {
  const e = K(t2);
  return e.remoteStore.remoteSyncer.applyRemoteEvent = lc.bind(null, e), e.remoteStore.remoteSyncer.getRemoteKeysForTarget = Pc.bind(null, e), e.remoteStore.remoteSyncer.rejectListen = dc.bind(null, e), e.Zu.Go = Wu.bind(null, e.eventManager), e.Zu.lc = zu.bind(null, e.eventManager), e;
}
function Fc(t2) {
  const e = K(t2);
  return e.remoteStore.remoteSyncer.applySuccessfulWrite = _c.bind(null, e), e.remoteStore.remoteSyncer.rejectFailedWrite = wc.bind(null, e), e;
}
class Bc {
  constructor() {
    this.synchronizeTabs = false;
  }
  async initialize(t2) {
    this.wt = nu(t2.databaseInfo.databaseId), this.sharedClientState = this.dc(t2), this.persistence = this._c(t2), await this.persistence.start(), this.localStore = this.wc(t2), this.gcScheduler = this.mc(t2, this.localStore), this.indexBackfillerScheduler = this.gc(t2, this.localStore);
  }
  mc(t2, e) {
    return null;
  }
  gc(t2, e) {
    return null;
  }
  wc(t2) {
    return Ro(this.persistence, new Eo(), t2.initialUser, this.wt);
  }
  _c(t2) {
    return new ho(fo.Ms, this.wt);
  }
  dc(t2) {
    return new zo();
  }
  async terminate() {
    this.gcScheduler && this.gcScheduler.stop(), await this.sharedClientState.shutdown(), await this.persistence.shutdown();
  }
}
class qc {
  async initialize(t2, e) {
    this.localStore || (this.localStore = t2.localStore, this.sharedClientState = t2.sharedClientState, this.datastore = this.createDatastore(e), this.remoteStore = this.createRemoteStore(e), this.eventManager = this.createEventManager(e), this.syncEngine = this.createSyncEngine(
      e,
      !t2.synchronizeTabs
    ), this.sharedClientState.onlineStateHandler = (t3) => fc(this.syncEngine, t3, 1), this.remoteStore.remoteSyncer.handleCredentialChange = bc.bind(null, this.syncEngine), await Ou(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(t2) {
    return new Gu();
  }
  createDatastore(t2) {
    const e = nu(t2.databaseInfo.databaseId), n = (s = t2.databaseInfo, new Zo(s));
    var s;
    return function(t3, e2, n2, s2) {
      return new uu(t3, e2, n2, s2);
    }(t2.authCredentials, t2.appCheckCredentials, n, e);
  }
  createRemoteStore(t2) {
    return e = this.localStore, n = this.datastore, s = t2.asyncQueue, i = (t3) => fc(this.syncEngine, t3, 0), r = Jo.V() ? new Jo() : new Ho(), new au(e, n, s, i, r);
    var e, n, s, i, r;
  }
  createSyncEngine(t2, e) {
    return function(t3, e2, n, s, i, r, o) {
      const u = new oc(t3, e2, n, s, i, r);
      return o && (u.ac = true), u;
    }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, t2.initialUser, t2.maxConcurrentLimboResolutions, e);
  }
  terminate() {
    return async function(t2) {
      const e = K(t2);
      M("RemoteStore", "RemoteStore shutting down."), e.lu.add(5), await lu(e), e.du.shutdown(), e._u.set("Unknown");
    }(this.remoteStore);
  }
}
class Gc {
  constructor(t2) {
    this.observer = t2, this.muted = false;
  }
  next(t2) {
    this.observer.next && this.Ic(this.observer.next, t2);
  }
  error(t2) {
    this.observer.error ? this.Ic(this.observer.error, t2) : console.error("Uncaught Error in snapshot listener:", t2);
  }
  Tc() {
    this.muted = true;
  }
  Ic(t2, e) {
    this.muted || setTimeout(() => {
      this.muted || t2(e);
    }, 0);
  }
}
class zc {
  constructor(t2, e, n, s) {
    this.authCredentials = t2, this.appCheckCredentials = e, this.asyncQueue = n, this.databaseInfo = s, this.user = C.UNAUTHENTICATED, this.clientId = st.I(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this.authCredentials.start(n, async (t3) => {
      M("FirestoreClient", "Received user=", t3.uid), await this.authCredentialListener(t3), this.user = t3;
    }), this.appCheckCredentials.start(n, (t3) => (M("FirestoreClient", "Received new app check token=", t3), this.appCheckCredentialListener(t3, this.user)));
  }
  async getConfiguration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100
    };
  }
  setCredentialChangeListener(t2) {
    this.authCredentialListener = t2;
  }
  setAppCheckTokenChangeListener(t2) {
    this.appCheckCredentialListener = t2;
  }
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown)
      throw new Q(G.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const t2 = new j();
    return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
      try {
        this.onlineComponents && await this.onlineComponents.terminate(), this.offlineComponents && await this.offlineComponents.terminate(), this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), t2.resolve();
      } catch (e) {
        const n = Bu(e, "Failed to shutdown persistence");
        t2.reject(n);
      }
    }), t2.promise;
  }
}
async function Hc(t2, e) {
  t2.asyncQueue.verifyOperationInProgress(), M("FirestoreClient", "Initializing OfflineComponentProvider");
  const n = await t2.getConfiguration();
  await e.initialize(n);
  let s = n.initialUser;
  t2.setCredentialChangeListener(async (t3) => {
    s.isEqual(t3) || (await bo(e.localStore, t3), s = t3);
  }), e.persistence.setDatabaseDeletedListener(() => t2.terminate()), t2.offlineComponents = e;
}
async function Jc(t2, e) {
  t2.asyncQueue.verifyOperationInProgress();
  const n = await Yc(t2);
  M("FirestoreClient", "Initializing OnlineComponentProvider");
  const s = await t2.getConfiguration();
  await e.initialize(n, s), t2.setCredentialChangeListener((t3) => ku(e.remoteStore, t3)), t2.setAppCheckTokenChangeListener((t3, n2) => ku(e.remoteStore, n2)), t2.onlineComponents = e;
}
async function Yc(t2) {
  return t2.offlineComponents || (M("FirestoreClient", "Using default OfflineComponentProvider"), await Hc(t2, new Bc())), t2.offlineComponents;
}
async function Xc(t2) {
  return t2.onlineComponents || (M("FirestoreClient", "Using default OnlineComponentProvider"), await Jc(t2, new qc())), t2.onlineComponents;
}
function na(t2) {
  return Xc(t2).then((t3) => t3.syncEngine);
}
async function sa(t2) {
  const e = await Xc(t2), n = e.eventManager;
  return n.onListen = uc.bind(null, e.syncEngine), n.onUnlisten = ac.bind(null, e.syncEngine), n;
}
function aa(t2, e, n = {}) {
  const s = new j();
  return t2.asyncQueue.enqueueAndForget(async () => function(t3, e2, n2, s2, i) {
    const r = new Gc({
      next: (n3) => {
        e2.enqueueAndForget(() => ju(t3, o)), n3.fromCache && "server" === s2.source ? i.reject(new Q(G.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n3);
      },
      error: (t4) => i.reject(t4)
    }), o = new Ju(n2, r, {
      includeMetadataChanges: true,
      Du: true
    });
    return Qu(t3, o);
  }(await sa(t2), t2.asyncQueue, e, n, s)), s.promise;
}
const _a = /* @__PURE__ */ new Map();
function wa(t2, e, n) {
  if (!n)
    throw new Q(G.INVALID_ARGUMENT, `Function ${t2}() cannot be called with an empty ${e}.`);
}
function ma(t2, e, n, s) {
  if (true === e && true === s)
    throw new Q(G.INVALID_ARGUMENT, `${t2} and ${n} cannot be used together.`);
}
function ga(t2) {
  if (!dt.isDocumentKey(t2))
    throw new Q(G.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${t2} has ${t2.length}.`);
}
function ya(t2) {
  if (dt.isDocumentKey(t2))
    throw new Q(G.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${t2} has ${t2.length}.`);
}
function pa(t2) {
  if (void 0 === t2)
    return "undefined";
  if (null === t2)
    return "null";
  if ("string" == typeof t2)
    return t2.length > 20 && (t2 = `${t2.substring(0, 20)}...`), JSON.stringify(t2);
  if ("number" == typeof t2 || "boolean" == typeof t2)
    return "" + t2;
  if ("object" == typeof t2) {
    if (t2 instanceof Array)
      return "an array";
    {
      const e = function(t3) {
        if (t3.constructor)
          return t3.constructor.name;
        return null;
      }(t2);
      return e ? `a custom ${e} object` : "an object";
    }
  }
  return "function" == typeof t2 ? "a function" : L();
}
function Ia(t2, e) {
  if ("_delegate" in t2 && (t2 = t2._delegate), !(t2 instanceof e)) {
    if (e.name === t2.constructor.name)
      throw new Q(G.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
    {
      const n = pa(t2);
      throw new Q(G.INVALID_ARGUMENT, `Expected type '${e.name}', but it was: ${n}`);
    }
  }
  return t2;
}
class Ea {
  constructor(t2) {
    var e;
    if (void 0 === t2.host) {
      if (void 0 !== t2.ssl)
        throw new Q(G.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
      this.host = "firestore.googleapis.com", this.ssl = true;
    } else
      this.host = t2.host, this.ssl = null === (e = t2.ssl) || void 0 === e || e;
    if (this.credentials = t2.credentials, this.ignoreUndefinedProperties = !!t2.ignoreUndefinedProperties, void 0 === t2.cacheSizeBytes)
      this.cacheSizeBytes = 41943040;
    else {
      if (-1 !== t2.cacheSizeBytes && t2.cacheSizeBytes < 1048576)
        throw new Q(G.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
      this.cacheSizeBytes = t2.cacheSizeBytes;
    }
    this.experimentalForceLongPolling = !!t2.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t2.experimentalAutoDetectLongPolling, this.useFetchStreams = !!t2.useFetchStreams, ma("experimentalForceLongPolling", t2.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t2.experimentalAutoDetectLongPolling);
  }
  isEqual(t2) {
    return this.host === t2.host && this.ssl === t2.ssl && this.credentials === t2.credentials && this.cacheSizeBytes === t2.cacheSizeBytes && this.experimentalForceLongPolling === t2.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t2.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t2.ignoreUndefinedProperties && this.useFetchStreams === t2.useFetchStreams;
  }
}
class Aa {
  constructor(t2, e, n) {
    this._authCredentials = e, this._appCheckCredentials = n, this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new Ea({}), this._settingsFrozen = false, t2 instanceof re ? this._databaseId = t2 : (this._app = t2, this._databaseId = function(t3) {
      if (!Object.prototype.hasOwnProperty.apply(t3.options, ["projectId"]))
        throw new Q(G.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
      return new re(t3.options.projectId);
    }(t2));
  }
  get app() {
    if (!this._app)
      throw new Q(G.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return void 0 !== this._terminateTask;
  }
  _setSettings(t2) {
    if (this._settingsFrozen)
      throw new Q(G.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
    this._settings = new Ea(t2), void 0 !== t2.credentials && (this._authCredentials = function(t3) {
      if (!t3)
        return new z();
      switch (t3.type) {
        case "gapi":
          const e = t3.client;
          return U(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), new X(e, t3.sessionIndex || "0", t3.iamToken || null);
        case "provider":
          return t3.client;
        default:
          throw new Q(G.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
      }
    }(t2.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return this._settingsFrozen = true, this._settings;
  }
  _delete() {
    return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings
    };
  }
  _terminate() {
    return function(t2) {
      const e = _a.get(t2);
      e && (M("ComponentProvider", "Removing Datastore"), _a.delete(t2), e.terminate());
    }(this), Promise.resolve();
  }
}
function Ra(t2, e, n, s = {}) {
  var i;
  const r = (t2 = Ia(t2, Aa))._getSettings();
  if ("firestore.googleapis.com" !== r.host && r.host !== e && $("Host has been set in both settings() and useEmulator(), emulator host will be used"), t2._setSettings(Object.assign(Object.assign({}, r), {
    host: `${e}:${n}`,
    ssl: false
  })), s.mockUserToken) {
    let e2, n2;
    if ("string" == typeof s.mockUserToken)
      e2 = s.mockUserToken, n2 = C.MOCK_USER;
    else {
      e2 = createMockUserToken(s.mockUserToken, null === (i = t2._app) || void 0 === i ? void 0 : i.options.projectId);
      const r2 = s.mockUserToken.sub || s.mockUserToken.user_id;
      if (!r2)
        throw new Q(G.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
      n2 = new C(r2);
    }
    t2._authCredentials = new H(new W(e2, n2));
  }
}
class ba {
  constructor(t2, e, n) {
    this.converter = e, this._key = n, this.type = "document", this.firestore = t2;
  }
  get _path() {
    return this._key.path;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get path() {
    return this._key.path.canonicalString();
  }
  get parent() {
    return new va(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(t2) {
    return new ba(this.firestore, t2, this._key);
  }
}
class Pa {
  constructor(t2, e, n) {
    this.converter = e, this._query = n, this.type = "query", this.firestore = t2;
  }
  withConverter(t2) {
    return new Pa(this.firestore, t2, this._query);
  }
}
class va extends Pa {
  constructor(t2, e, n) {
    super(t2, e, rn(n)), this._path = n, this.type = "collection";
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const t2 = this._path.popLast();
    return t2.isEmpty() ? null : new ba(
      this.firestore,
      null,
      new dt(t2)
    );
  }
  withConverter(t2) {
    return new va(this.firestore, t2, this._path);
  }
}
function Va(t2, e, ...n) {
  if (t2 = getModularInstance(t2), wa("collection", "path", e), t2 instanceof Aa) {
    const s = ht.fromString(e, ...n);
    return ya(s), new va(t2, null, s);
  }
  {
    if (!(t2 instanceof ba || t2 instanceof va))
      throw new Q(G.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const s = t2._path.child(ht.fromString(e, ...n));
    return ya(s), new va(
      t2.firestore,
      null,
      s
    );
  }
}
function Da(t2, e, ...n) {
  if (t2 = getModularInstance(t2), 1 === arguments.length && (e = st.I()), wa("doc", "path", e), t2 instanceof Aa) {
    const s = ht.fromString(e, ...n);
    return ga(s), new ba(
      t2,
      null,
      new dt(s)
    );
  }
  {
    if (!(t2 instanceof ba || t2 instanceof va))
      throw new Q(G.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const s = t2._path.child(ht.fromString(e, ...n));
    return ga(s), new ba(t2.firestore, t2 instanceof va ? t2.converter : null, new dt(s));
  }
}
class Na {
  constructor() {
    this.Oc = Promise.resolve(), this.Mc = [], this.Fc = false, this.$c = [], this.Bc = null, this.Lc = false, this.Uc = false, this.qc = [], this.So = new su(this, "async_queue_retry"), this.Kc = () => {
      const t3 = eu();
      t3 && M("AsyncQueue", "Visibility state changed to " + t3.visibilityState), this.So.Eo();
    };
    const t2 = eu();
    t2 && "function" == typeof t2.addEventListener && t2.addEventListener("visibilitychange", this.Kc);
  }
  get isShuttingDown() {
    return this.Fc;
  }
  enqueueAndForget(t2) {
    this.enqueue(t2);
  }
  enqueueAndForgetEvenWhileRestricted(t2) {
    this.Gc(), this.Qc(t2);
  }
  enterRestrictedMode(t2) {
    if (!this.Fc) {
      this.Fc = true, this.Uc = t2 || false;
      const e = eu();
      e && "function" == typeof e.removeEventListener && e.removeEventListener("visibilitychange", this.Kc);
    }
  }
  enqueue(t2) {
    if (this.Gc(), this.Fc)
      return new Promise(() => {
      });
    const e = new j();
    return this.Qc(() => this.Fc && this.Uc ? Promise.resolve() : (t2().then(e.resolve, e.reject), e.promise)).then(() => e.promise);
  }
  enqueueRetryable(t2) {
    this.enqueueAndForget(() => (this.Mc.push(t2), this.jc()));
  }
  async jc() {
    if (0 !== this.Mc.length) {
      try {
        await this.Mc[0](), this.Mc.shift(), this.So.reset();
      } catch (t2) {
        if (!Ct(t2))
          throw t2;
        M("AsyncQueue", "Operation failed with retryable error: " + t2);
      }
      this.Mc.length > 0 && this.So.Io(() => this.jc());
    }
  }
  Qc(t2) {
    const e = this.Oc.then(() => (this.Lc = true, t2().catch((t3) => {
      this.Bc = t3, this.Lc = false;
      const e2 = function(t4) {
        let e3 = t4.message || "";
        t4.stack && (e3 = t4.stack.includes(t4.message) ? t4.stack : t4.message + "\n" + t4.stack);
        return e3;
      }(t3);
      throw F("INTERNAL UNHANDLED ERROR: ", e2), t3;
    }).then((t3) => (this.Lc = false, t3))));
    return this.Oc = e, e;
  }
  enqueueAfterDelay(t2, e, n) {
    this.Gc(), this.qc.indexOf(t2) > -1 && (e = 0);
    const s = $u.createAndSchedule(this, t2, e, n, (t3) => this.Wc(t3));
    return this.$c.push(s), s;
  }
  Gc() {
    this.Bc && L();
  }
  verifyOperationInProgress() {
  }
  async zc() {
    let t2;
    do {
      t2 = this.Oc, await t2;
    } while (t2 !== this.Oc);
  }
  Hc(t2) {
    for (const e of this.$c)
      if (e.timerId === t2)
        return true;
    return false;
  }
  Jc(t2) {
    return this.zc().then(() => {
      this.$c.sort((t3, e) => t3.targetTimeMs - e.targetTimeMs);
      for (const e of this.$c)
        if (e.skipDelay(), "all" !== t2 && e.timerId === t2)
          break;
      return this.zc();
    });
  }
  Yc(t2) {
    this.qc.push(t2);
  }
  Wc(t2) {
    const e = this.$c.indexOf(t2);
    this.$c.splice(e, 1);
  }
}
function ka(t2) {
  return function(t3, e) {
    if ("object" != typeof t3 || null === t3)
      return false;
    const n = t3;
    for (const t4 of e)
      if (t4 in n && "function" == typeof n[t4])
        return true;
    return false;
  }(t2, ["next", "error", "complete"]);
}
class Fa extends Aa {
  constructor(t2, e, n) {
    super(t2, e, n), this.type = "firestore", this._queue = new Na(), this._persistenceKey = "name" in t2 ? t2.name : "[DEFAULT]";
  }
  _terminate() {
    return this._firestoreClient || Ua(this), this._firestoreClient.terminate();
  }
}
function $a(t2, e) {
  const n = _getProvider(t2, "firestore");
  if (n.isInitialized()) {
    const t3 = n.getImmediate(), s = n.getOptions();
    if (deepEqual(s, e))
      return t3;
    throw new Q(G.FAILED_PRECONDITION, "initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.");
  }
  if (void 0 !== e.cacheSizeBytes && -1 !== e.cacheSizeBytes && e.cacheSizeBytes < 1048576)
    throw new Q(G.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
  return n.initialize({
    options: e
  });
}
function Ba(e = getApp()) {
  return _getProvider(e, "firestore").getImmediate();
}
function La(t2) {
  return t2._firestoreClient || Ua(t2), t2._firestoreClient.verifyNotTerminated(), t2._firestoreClient;
}
function Ua(t2) {
  var e;
  const n = t2._freezeSettings(), s = function(t3, e2, n2, s2) {
    return new ie(t3, e2, n2, s2.host, s2.ssl, s2.experimentalForceLongPolling, s2.experimentalAutoDetectLongPolling, s2.useFetchStreams);
  }(t2._databaseId, (null === (e = t2._app) || void 0 === e ? void 0 : e.options.appId) || "", t2._persistenceKey, n);
  t2._firestoreClient = new zc(t2._authCredentials, t2._appCheckCredentials, t2._queue, s);
}
class Za {
  constructor(...t2) {
    for (let e = 0; e < t2.length; ++e)
      if (0 === t2[e].length)
        throw new Q(G.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
    this._internalPath = new ft(t2);
  }
  isEqual(t2) {
    return this._internalPath.isEqual(t2._internalPath);
  }
}
class eh {
  constructor(t2) {
    this._byteString = t2;
  }
  static fromBase64String(t2) {
    try {
      return new eh(Jt.fromBase64String(t2));
    } catch (t3) {
      throw new Q(G.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + t3);
    }
  }
  static fromUint8Array(t2) {
    return new eh(Jt.fromUint8Array(t2));
  }
  toBase64() {
    return this._byteString.toBase64();
  }
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  isEqual(t2) {
    return this._byteString.isEqual(t2._byteString);
  }
}
class nh {
  constructor(t2) {
    this._methodName = t2;
  }
}
class sh {
  constructor(t2, e) {
    if (!isFinite(t2) || t2 < -90 || t2 > 90)
      throw new Q(G.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t2);
    if (!isFinite(e) || e < -180 || e > 180)
      throw new Q(G.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
    this._lat = t2, this._long = e;
  }
  get latitude() {
    return this._lat;
  }
  get longitude() {
    return this._long;
  }
  isEqual(t2) {
    return this._lat === t2._lat && this._long === t2._long;
  }
  toJSON() {
    return {
      latitude: this._lat,
      longitude: this._long
    };
  }
  _compareTo(t2) {
    return it(this._lat, t2._lat) || it(this._long, t2._long);
  }
}
const ih = /^__.*__$/;
class rh {
  constructor(t2, e, n) {
    this.data = t2, this.fieldMask = e, this.fieldTransforms = n;
  }
  toMutation(t2, e) {
    return null !== this.fieldMask ? new Wn(t2, this.data, this.fieldMask, e, this.fieldTransforms) : new jn(t2, this.data, e, this.fieldTransforms);
  }
}
class oh {
  constructor(t2, e, n) {
    this.data = t2, this.fieldMask = e, this.fieldTransforms = n;
  }
  toMutation(t2, e) {
    return new Wn(t2, this.data, this.fieldMask, e, this.fieldTransforms);
  }
}
function uh(t2) {
  switch (t2) {
    case 0:
    case 2:
    case 1:
      return true;
    case 3:
    case 4:
      return false;
    default:
      throw L();
  }
}
class ch {
  constructor(t2, e, n, s, i, r) {
    this.settings = t2, this.databaseId = e, this.wt = n, this.ignoreUndefinedProperties = s, void 0 === i && this.Xc(), this.fieldTransforms = i || [], this.fieldMask = r || [];
  }
  get path() {
    return this.settings.path;
  }
  get Zc() {
    return this.settings.Zc;
  }
  ta(t2) {
    return new ch(Object.assign(Object.assign({}, this.settings), t2), this.databaseId, this.wt, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
  }
  ea(t2) {
    var e;
    const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t2), s = this.ta({
      path: n,
      na: false
    });
    return s.sa(t2), s;
  }
  ia(t2) {
    var e;
    const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t2), s = this.ta({
      path: n,
      na: false
    });
    return s.Xc(), s;
  }
  ra(t2) {
    return this.ta({
      path: void 0,
      na: true
    });
  }
  oa(t2) {
    return Vh(t2, this.settings.methodName, this.settings.ua || false, this.path, this.settings.ca);
  }
  contains(t2) {
    return void 0 !== this.fieldMask.find((e) => t2.isPrefixOf(e)) || void 0 !== this.fieldTransforms.find((e) => t2.isPrefixOf(e.field));
  }
  Xc() {
    if (this.path)
      for (let t2 = 0; t2 < this.path.length; t2++)
        this.sa(this.path.get(t2));
  }
  sa(t2) {
    if (0 === t2.length)
      throw this.oa("Document fields must not be empty");
    if (uh(this.Zc) && ih.test(t2))
      throw this.oa('Document fields cannot begin and end with "__"');
  }
}
class ah {
  constructor(t2, e, n) {
    this.databaseId = t2, this.ignoreUndefinedProperties = e, this.wt = n || nu(t2);
  }
  aa(t2, e, n, s = false) {
    return new ch({
      Zc: t2,
      methodName: e,
      ca: n,
      path: ft.emptyPath(),
      na: false,
      ua: s
    }, this.databaseId, this.wt, this.ignoreUndefinedProperties);
  }
}
function hh(t2) {
  const e = t2._freezeSettings(), n = nu(t2._databaseId);
  return new ah(t2._databaseId, !!e.ignoreUndefinedProperties, n);
}
function lh(t2, e, n, s, i, r = {}) {
  const o = t2.aa(r.merge || r.mergeFields ? 2 : 0, e, n, i);
  Rh("Data must be an object, but it was:", o, s);
  const u = Eh(s, o);
  let c, a;
  if (r.merge)
    c = new zt(o.fieldMask), a = o.fieldTransforms;
  else if (r.mergeFields) {
    const t3 = [];
    for (const s2 of r.mergeFields) {
      const i2 = bh(e, s2, n);
      if (!o.contains(i2))
        throw new Q(G.INVALID_ARGUMENT, `Field '${i2}' is specified in your field mask but missing from your input data.`);
      Sh(t3, i2) || t3.push(i2);
    }
    c = new zt(t3), a = o.fieldTransforms.filter((t4) => c.covers(t4.field));
  } else
    c = null, a = o.fieldTransforms;
  return new rh(new De(u), c, a);
}
class fh extends nh {
  _toFieldTransform(t2) {
    if (2 !== t2.Zc)
      throw 1 === t2.Zc ? t2.oa(`${this._methodName}() can only appear at the top level of your update data`) : t2.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);
    return t2.fieldMask.push(t2.path), null;
  }
  isEqual(t2) {
    return t2 instanceof fh;
  }
}
class _h extends nh {
  _toFieldTransform(t2) {
    return new On(t2.path, new vn());
  }
  isEqual(t2) {
    return t2 instanceof _h;
  }
}
function yh(t2, e, n, s) {
  const i = t2.aa(1, e, n);
  Rh("Data must be an object, but it was:", i, s);
  const r = [], o = De.empty();
  Lt(s, (t3, s2) => {
    const u2 = vh(e, t3, n);
    s2 = getModularInstance(s2);
    const c = i.ia(u2);
    if (s2 instanceof fh)
      r.push(u2);
    else {
      const t4 = Th(s2, c);
      null != t4 && (r.push(u2), o.set(u2, t4));
    }
  });
  const u = new zt(r);
  return new oh(o, u, i.fieldTransforms);
}
function ph(t2, e, n, s, i, r) {
  const o = t2.aa(1, e, n), u = [bh(e, s, n)], c = [i];
  if (r.length % 2 != 0)
    throw new Q(G.INVALID_ARGUMENT, `Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);
  for (let t3 = 0; t3 < r.length; t3 += 2)
    u.push(bh(e, r[t3])), c.push(r[t3 + 1]);
  const a = [], h = De.empty();
  for (let t3 = u.length - 1; t3 >= 0; --t3)
    if (!Sh(a, u[t3])) {
      const e2 = u[t3];
      let n2 = c[t3];
      n2 = getModularInstance(n2);
      const s2 = o.ia(e2);
      if (n2 instanceof fh)
        a.push(e2);
      else {
        const t4 = Th(n2, s2);
        null != t4 && (a.push(e2), h.set(e2, t4));
      }
    }
  const l2 = new zt(a);
  return new oh(h, l2, o.fieldTransforms);
}
function Ih(t2, e, n, s = false) {
  return Th(n, t2.aa(s ? 4 : 3, e));
}
function Th(t2, e) {
  if (Ah(
    t2 = getModularInstance(t2)
  ))
    return Rh("Unsupported field value:", e, t2), Eh(t2, e);
  if (t2 instanceof nh)
    return function(t3, e2) {
      if (!uh(e2.Zc))
        throw e2.oa(`${t3._methodName}() can only be used with update() and set()`);
      if (!e2.path)
        throw e2.oa(`${t3._methodName}() is not currently supported inside arrays`);
      const n = t3._toFieldTransform(e2);
      n && e2.fieldTransforms.push(n);
    }(t2, e), null;
  if (void 0 === t2 && e.ignoreUndefinedProperties)
    return null;
  if (e.path && e.fieldMask.push(e.path), t2 instanceof Array) {
    if (e.settings.na && 4 !== e.Zc)
      throw e.oa("Nested arrays are not supported");
    return function(t3, e2) {
      const n = [];
      let s = 0;
      for (const i of t3) {
        let t4 = Th(i, e2.ra(s));
        null == t4 && (t4 = {
          nullValue: "NULL_VALUE"
        }), n.push(t4), s++;
      }
      return {
        arrayValue: {
          values: n
        }
      };
    }(t2, e);
  }
  return function(t3, e2) {
    if (null === (t3 = getModularInstance(t3)))
      return {
        nullValue: "NULL_VALUE"
      };
    if ("number" == typeof t3)
      return En(e2.wt, t3);
    if ("boolean" == typeof t3)
      return {
        booleanValue: t3
      };
    if ("string" == typeof t3)
      return {
        stringValue: t3
      };
    if (t3 instanceof Date) {
      const n = ut.fromDate(t3);
      return {
        timestampValue: Ds(e2.wt, n)
      };
    }
    if (t3 instanceof ut) {
      const n = new ut(t3.seconds, 1e3 * Math.floor(t3.nanoseconds / 1e3));
      return {
        timestampValue: Ds(e2.wt, n)
      };
    }
    if (t3 instanceof sh)
      return {
        geoPointValue: {
          latitude: t3.latitude,
          longitude: t3.longitude
        }
      };
    if (t3 instanceof eh)
      return {
        bytesValue: Cs(e2.wt, t3._byteString)
      };
    if (t3 instanceof ba) {
      const n = e2.databaseId, s = t3.firestore._databaseId;
      if (!s.isEqual(n))
        throw e2.oa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);
      return {
        referenceValue: ks(t3.firestore._databaseId || e2.databaseId, t3._key.path)
      };
    }
    throw e2.oa(`Unsupported field value: ${pa(t3)}`);
  }(t2, e);
}
function Eh(t2, e) {
  const n = {};
  return Ut(t2) ? e.path && e.path.length > 0 && e.fieldMask.push(e.path) : Lt(t2, (t3, s) => {
    const i = Th(s, e.ea(t3));
    null != i && (n[t3] = i);
  }), {
    mapValue: {
      fields: n
    }
  };
}
function Ah(t2) {
  return !("object" != typeof t2 || null === t2 || t2 instanceof Array || t2 instanceof Date || t2 instanceof ut || t2 instanceof sh || t2 instanceof eh || t2 instanceof ba || t2 instanceof nh);
}
function Rh(t2, e, n) {
  if (!Ah(n) || !function(t3) {
    return "object" == typeof t3 && null !== t3 && (Object.getPrototypeOf(t3) === Object.prototype || null === Object.getPrototypeOf(t3));
  }(n)) {
    const s = pa(n);
    throw "an object" === s ? e.oa(t2 + " a custom object") : e.oa(t2 + " " + s);
  }
}
function bh(t2, e, n) {
  if ((e = getModularInstance(e)) instanceof Za)
    return e._internalPath;
  if ("string" == typeof e)
    return vh(t2, e);
  throw Vh(
    "Field path arguments must be of type string or ",
    t2,
    false,
    void 0,
    n
  );
}
const Ph = new RegExp("[~\\*/\\[\\]]");
function vh(t2, e, n) {
  if (e.search(Ph) >= 0)
    throw Vh(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      t2,
      false,
      void 0,
      n
    );
  try {
    return new Za(...e.split("."))._internalPath;
  } catch (s) {
    throw Vh(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      t2,
      false,
      void 0,
      n
    );
  }
}
function Vh(t2, e, n, s, i) {
  const r = s && !s.isEmpty(), o = void 0 !== i;
  let u = `Function ${e}() called with invalid data`;
  n && (u += " (via `toFirestore()`)"), u += ". ";
  let c = "";
  return (r || o) && (c += " (found", r && (c += ` in field ${s}`), o && (c += ` in document ${i}`), c += ")"), new Q(G.INVALID_ARGUMENT, u + t2 + c);
}
function Sh(t2, e) {
  return t2.some((t3) => t3.isEqual(e));
}
class Dh {
  constructor(t2, e, n, s, i) {
    this._firestore = t2, this._userDataWriter = e, this._key = n, this._document = s, this._converter = i;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get ref() {
    return new ba(this._firestore, this._converter, this._key);
  }
  exists() {
    return null !== this._document;
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const t2 = new Ch(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          null
        );
        return this._converter.fromFirestore(t2);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  get(t2) {
    if (this._document) {
      const e = this._document.data.field(xh("DocumentSnapshot.get", t2));
      if (null !== e)
        return this._userDataWriter.convertValue(e);
    }
  }
}
class Ch extends Dh {
  data() {
    return super.data();
  }
}
function xh(t2, e) {
  return "string" == typeof e ? vh(t2, e) : e instanceof Za ? e._internalPath : e._delegate._internalPath;
}
class Nh {
  constructor(t2, e) {
    this.hasPendingWrites = t2, this.fromCache = e;
  }
  isEqual(t2) {
    return this.hasPendingWrites === t2.hasPendingWrites && this.fromCache === t2.fromCache;
  }
}
class kh extends Dh {
  constructor(t2, e, n, s, i, r) {
    super(t2, e, n, s, r), this._firestore = t2, this._firestoreImpl = t2, this.metadata = i;
  }
  exists() {
    return super.exists();
  }
  data(t2 = {}) {
    if (this._document) {
      if (this._converter) {
        const e = new Oh(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          null
        );
        return this._converter.fromFirestore(e, t2);
      }
      return this._userDataWriter.convertValue(this._document.data.value, t2.serverTimestamps);
    }
  }
  get(t2, e = {}) {
    if (this._document) {
      const n = this._document.data.field(xh("DocumentSnapshot.get", t2));
      if (null !== n)
        return this._userDataWriter.convertValue(n, e.serverTimestamps);
    }
  }
}
class Oh extends kh {
  data(t2 = {}) {
    return super.data(t2);
  }
}
class Mh {
  constructor(t2, e, n, s) {
    this._firestore = t2, this._userDataWriter = e, this._snapshot = s, this.metadata = new Nh(s.hasPendingWrites, s.fromCache), this.query = n;
  }
  get docs() {
    const t2 = [];
    return this.forEach((e) => t2.push(e)), t2;
  }
  get size() {
    return this._snapshot.docs.size;
  }
  get empty() {
    return 0 === this.size;
  }
  forEach(t2, e) {
    this._snapshot.docs.forEach((n) => {
      t2.call(e, new Oh(this._firestore, this._userDataWriter, n.key, n, new Nh(this._snapshot.mutatedKeys.has(n.key), this._snapshot.fromCache), this.query.converter));
    });
  }
  docChanges(t2 = {}) {
    const e = !!t2.includeMetadataChanges;
    if (e && this._snapshot.excludesMetadataChanges)
      throw new Q(G.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
    return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e || (this._cachedChanges = function(t3, e2) {
      if (t3._snapshot.oldDocs.isEmpty()) {
        let e3 = 0;
        return t3._snapshot.docChanges.map((n) => ({
          type: "added",
          doc: new Oh(t3._firestore, t3._userDataWriter, n.doc.key, n.doc, new Nh(t3._snapshot.mutatedKeys.has(n.doc.key), t3._snapshot.fromCache), t3.query.converter),
          oldIndex: -1,
          newIndex: e3++
        }));
      }
      {
        let n = t3._snapshot.oldDocs;
        return t3._snapshot.docChanges.filter((t4) => e2 || 3 !== t4.type).map((e3) => {
          const s = new Oh(t3._firestore, t3._userDataWriter, e3.doc.key, e3.doc, new Nh(t3._snapshot.mutatedKeys.has(e3.doc.key), t3._snapshot.fromCache), t3.query.converter);
          let i = -1, r = -1;
          return 0 !== e3.type && (i = n.indexOf(e3.doc.key), n = n.delete(e3.doc.key)), 1 !== e3.type && (n = n.add(e3.doc), r = n.indexOf(e3.doc.key)), {
            type: Fh(e3.type),
            doc: s,
            oldIndex: i,
            newIndex: r
          };
        });
      }
    }(this, e), this._cachedChangesIncludeMetadataChanges = e), this._cachedChanges;
  }
}
function Fh(t2) {
  switch (t2) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return L();
  }
}
function Bh(t2) {
  if ("L" === t2.limitType && 0 === t2.explicitOrderBy.length)
    throw new Q(G.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}
class Lh {
}
function Uh(t2, ...e) {
  for (const n of e)
    t2 = n._apply(t2);
  return t2;
}
class qh extends Lh {
  constructor(t2, e, n) {
    super(), this.fa = t2, this.da = e, this._a = n, this.type = "where";
  }
  _apply(t2) {
    const e = hh(t2.firestore), n = function(t3, e2, n2, s, i, r, o) {
      let u;
      if (i.isKeyField()) {
        if ("array-contains" === r || "array-contains-any" === r)
          throw new Q(G.INVALID_ARGUMENT, `Invalid Query. You can't perform '${r}' queries on documentId().`);
        if ("in" === r || "not-in" === r) {
          sl(o, r);
          const e3 = [];
          for (const n3 of o)
            e3.push(nl(s, t3, n3));
          u = {
            arrayValue: {
              values: e3
            }
          };
        } else
          u = nl(s, t3, o);
      } else
        "in" !== r && "not-in" !== r && "array-contains-any" !== r || sl(o, r), u = Ih(
          n2,
          e2,
          o,
          "in" === r || "not-in" === r
        );
      const c = qe.create(i, r, u);
      return function(t4, e3) {
        if (e3.ht()) {
          const n4 = cn(t4);
          if (null !== n4 && !n4.isEqual(e3.field))
            throw new Q(G.INVALID_ARGUMENT, `Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n4.toString()}' and '${e3.field.toString()}'`);
          const s2 = un(t4);
          null !== s2 && il(t4, e3.field, s2);
        }
        const n3 = function(t5, e4) {
          for (const n4 of t5.filters)
            if (e4.indexOf(n4.op) >= 0)
              return n4.op;
          return null;
        }(
          t4,
          function(t5) {
            switch (t5) {
              case "!=":
                return ["!=", "not-in"];
              case "array-contains":
                return ["array-contains", "array-contains-any", "not-in"];
              case "in":
                return ["array-contains-any", "in", "not-in"];
              case "array-contains-any":
                return ["array-contains", "array-contains-any", "in", "not-in"];
              case "not-in":
                return ["array-contains", "array-contains-any", "in", "not-in", "!="];
              default:
                return [];
            }
          }(e3.op)
        );
        if (null !== n3)
          throw n3 === e3.op ? new Q(G.INVALID_ARGUMENT, `Invalid query. You cannot use more than one '${e3.op.toString()}' filter.`) : new Q(G.INVALID_ARGUMENT, `Invalid query. You cannot use '${e3.op.toString()}' filters with '${n3.toString()}' filters.`);
      }(t3, c), c;
    }(t2._query, "where", e, t2.firestore._databaseId, this.fa, this.da, this._a);
    return new Pa(t2.firestore, t2.converter, function(t3, e2) {
      const n2 = t3.filters.concat([e2]);
      return new nn(t3.path, t3.collectionGroup, t3.explicitOrderBy.slice(), n2, t3.limit, t3.limitType, t3.startAt, t3.endAt);
    }(t2._query, n));
  }
}
function Kh(t2, e, n) {
  const s = e, i = xh("where", t2);
  return new qh(i, s, n);
}
function nl(t2, e, n) {
  if ("string" == typeof (n = getModularInstance(n))) {
    if ("" === n)
      throw new Q(G.INVALID_ARGUMENT, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
    if (!an(e) && -1 !== n.indexOf("/"))
      throw new Q(G.INVALID_ARGUMENT, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);
    const s = e.path.child(ht.fromString(n));
    if (!dt.isDocumentKey(s))
      throw new Q(G.INVALID_ARGUMENT, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);
    return ye(t2, new dt(s));
  }
  if (n instanceof ba)
    return ye(t2, n._key);
  throw new Q(G.INVALID_ARGUMENT, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pa(n)}.`);
}
function sl(t2, e) {
  if (!Array.isArray(t2) || 0 === t2.length)
    throw new Q(G.INVALID_ARGUMENT, `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);
  if (t2.length > 10)
    throw new Q(G.INVALID_ARGUMENT, `Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`);
}
function il(t2, e, n) {
  if (!n.isEqual(e))
    throw new Q(G.INVALID_ARGUMENT, `Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`);
}
class ol {
  convertValue(t2, e = "none") {
    switch (le(t2)) {
      case 0:
        return null;
      case 1:
        return t2.booleanValue;
      case 2:
        return Zt(t2.integerValue || t2.doubleValue);
      case 3:
        return this.convertTimestamp(t2.timestampValue);
      case 4:
        return this.convertServerTimestamp(t2, e);
      case 5:
        return t2.stringValue;
      case 6:
        return this.convertBytes(te(t2.bytesValue));
      case 7:
        return this.convertReference(t2.referenceValue);
      case 8:
        return this.convertGeoPoint(t2.geoPointValue);
      case 9:
        return this.convertArray(t2.arrayValue, e);
      case 10:
        return this.convertObject(t2.mapValue, e);
      default:
        throw L();
    }
  }
  convertObject(t2, e) {
    const n = {};
    return Lt(t2.fields, (t3, s) => {
      n[t3] = this.convertValue(s, e);
    }), n;
  }
  convertGeoPoint(t2) {
    return new sh(Zt(t2.latitude), Zt(t2.longitude));
  }
  convertArray(t2, e) {
    return (t2.values || []).map((t3) => this.convertValue(t3, e));
  }
  convertServerTimestamp(t2, e) {
    switch (e) {
      case "previous":
        const n = ne(t2);
        return null == n ? null : this.convertValue(n, e);
      case "estimate":
        return this.convertTimestamp(se(t2));
      default:
        return null;
    }
  }
  convertTimestamp(t2) {
    const e = Xt(t2);
    return new ut(e.seconds, e.nanos);
  }
  convertDocumentKey(t2, e) {
    const n = ht.fromString(t2);
    U(ui(n));
    const s = new re(n.get(1), n.get(3)), i = new dt(n.popFirst(5));
    return s.isEqual(e) || F(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`), i;
  }
}
function ul(t2, e, n) {
  let s;
  return s = t2 ? n && (n.merge || n.mergeFields) ? t2.toFirestore(e, n) : t2.toFirestore(e) : e, s;
}
class fl extends ol {
  constructor(t2) {
    super(), this.firestore = t2;
  }
  convertBytes(t2) {
    return new eh(t2);
  }
  convertReference(t2) {
    const e = this.convertDocumentKey(t2, this.firestore._databaseId);
    return new ba(this.firestore, null, e);
  }
}
function wl(t2) {
  t2 = Ia(t2, Pa);
  const e = Ia(t2.firestore, Fa), n = La(e), s = new fl(e);
  return Bh(t2._query), aa(n, t2._query).then((n2) => new Mh(e, s, t2, n2));
}
function pl(t2, e, n, ...s) {
  t2 = Ia(t2, ba);
  const i = Ia(t2.firestore, Fa), r = hh(i);
  let o;
  o = "string" == typeof (e = getModularInstance(e)) || e instanceof Za ? ph(r, "updateDoc", t2._key, e, n, s) : yh(r, "updateDoc", t2._key, e);
  return Rl(i, [o.toMutation(t2._key, $n.exists(true))]);
}
function Tl(t2, e) {
  const n = Ia(t2.firestore, Fa), s = Da(t2), i = ul(t2.converter, e);
  return Rl(n, [lh(hh(t2.firestore), "addDoc", s._key, i, null !== t2.converter, {}).toMutation(s._key, $n.exists(false))]).then(() => s);
}
function El(t2, ...e) {
  var n, s, i;
  t2 = getModularInstance(t2);
  let r = {
    includeMetadataChanges: false
  }, o = 0;
  "object" != typeof e[o] || ka(e[o]) || (r = e[o], o++);
  const u = {
    includeMetadataChanges: r.includeMetadataChanges
  };
  if (ka(e[o])) {
    const t3 = e[o];
    e[o] = null === (n = t3.next) || void 0 === n ? void 0 : n.bind(t3), e[o + 1] = null === (s = t3.error) || void 0 === s ? void 0 : s.bind(t3), e[o + 2] = null === (i = t3.complete) || void 0 === i ? void 0 : i.bind(t3);
  }
  let c, a, h;
  if (t2 instanceof ba)
    a = Ia(t2.firestore, Fa), h = rn(t2._key.path), c = {
      next: (n2) => {
        e[o] && e[o](bl(a, t2, n2));
      },
      error: e[o + 1],
      complete: e[o + 2]
    };
  else {
    const n2 = Ia(t2, Pa);
    a = Ia(n2.firestore, Fa), h = n2._query;
    const s2 = new fl(a);
    c = {
      next: (t3) => {
        e[o] && e[o](new Mh(a, s2, n2, t3));
      },
      error: e[o + 1],
      complete: e[o + 2]
    }, Bh(t2._query);
  }
  return function(t3, e2, n2, s2) {
    const i2 = new Gc(s2), r2 = new Ju(e2, i2, n2);
    return t3.asyncQueue.enqueueAndForget(async () => Qu(await sa(t3), r2)), () => {
      i2.Tc(), t3.asyncQueue.enqueueAndForget(async () => ju(await sa(t3), r2));
    };
  }(La(a), h, u, c);
}
function Rl(t2, e) {
  return function(t3, e2) {
    const n = new j();
    return t3.asyncQueue.enqueueAndForget(async () => hc(await na(t3), e2, n)), n.promise;
  }(La(t2), e);
}
function bl(t2, e, n) {
  const s = n.docs.get(e._key), i = new fl(t2);
  return new kh(t2, i, e._key, s, new Nh(n.hasPendingWrites, n.fromCache), e.converter);
}
function Sl() {
  return new _h("serverTimestamp");
}
!function(t2, e = true) {
  !function(t3) {
    x = t3;
  }(SDK_VERSION), _registerComponent(new Component("firestore", (t3, { options: n }) => {
    const s = t3.getProvider("app").getImmediate(), i = new Fa(s, new J(t3.getProvider("auth-internal")), new tt(t3.getProvider("app-check-internal")));
    return n = Object.assign({
      useFetchStreams: e
    }, n), i._setSettings(n), i;
  }, "PUBLIC")), registerVersion(D, "3.4.12", t2), registerVersion(D, "3.4.12", "esm2017");
}();
const addCheckout = async ({ userId }) => {
  const addRef = await Tl(
    Va(
      Da(
        Va(
          Ba(),
          "customers"
        ),
        userId
      ),
      "checkout_sessions"
    ),
    {
      cancel_url: window.location.href,
      price: "price_1JXGjVFSSDySG1smmI1f8krR",
      success_url: window.location.href
    }
  );
  return await new Promise((resolve, reject) => {
    El(addRef, (snapshot) => {
      var _a2;
      if ((_a2 = snapshot.data()) == null ? void 0 : _a2.url) {
        resolve(snapshot);
      }
    }, (error) => {
      reject(error);
    });
  });
};
const addDoc = async ({ doc, ownerId }) => {
  const addRef = await Tl(
    Va(
      Ba(),
      "documents"
    ),
    {
      ...doc,
      ownerId,
      syncedAt: Sl()
    }
  );
  return new Promise((resolve, reject) => {
    El(addRef, (fullRef) => {
      resolve(fullRef);
    }, (error) => {
      reject(error);
    });
  });
};
const fetchDocs = async ({ ownerId, syncedAfter }) => {
  const querySnapshot = await wl(
    Uh(
      Va(Ba(), "documents"),
      Kh("ownerId", "==", ownerId),
      Kh("syncedAt", ">", syncedAfter)
    )
  );
  return querySnapshot.docs;
};
const fetchSharedDoc = async ({ docId }) => {
  const querySnapshot = await wl(
    Uh(
      Va(
        Ba(),
        "documents"
      ),
      Kh("public", "==", true),
      Kh("id", "==", docId)
    )
  );
  return querySnapshot.docs[0];
};
const updateDoc = async ({ doc, docId }) => {
  return pl(
    Da(
      Va(
        Ba(),
        "documents"
      ),
      docId
    ),
    {
      ...doc,
      syncedAt: Sl()
    }
  );
};
export {
  $a as $,
  Ba as B,
  O,
  Ra as R,
  addDoc as a,
  addCheckout as b,
  fetchSharedDoc as c,
  fetchDocs as f,
  updateDoc as u
};
//# sourceMappingURL=firestore-20470781.js.map
