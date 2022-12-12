try {
  self["workbox:window:6.5.3"] && _();
} catch (n2) {
}
function n(n2, t2) {
  return new Promise(function(r2) {
    var e2 = new MessageChannel();
    e2.port1.onmessage = function(n3) {
      r2(n3.data);
    }, n2.postMessage(t2, [e2.port2]);
  });
}
function t(n2, t2) {
  for (var r2 = 0; r2 < t2.length; r2++) {
    var e2 = t2[r2];
    e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(n2, e2.key, e2);
  }
}
function r(n2, t2) {
  (null == t2 || t2 > n2.length) && (t2 = n2.length);
  for (var r2 = 0, e2 = new Array(t2); r2 < t2; r2++)
    e2[r2] = n2[r2];
  return e2;
}
function e(n2, t2) {
  var e2;
  if ("undefined" == typeof Symbol || null == n2[Symbol.iterator]) {
    if (Array.isArray(n2) || (e2 = function(n3, t3) {
      if (n3) {
        if ("string" == typeof n3)
          return r(n3, t3);
        var e3 = Object.prototype.toString.call(n3).slice(8, -1);
        return "Object" === e3 && n3.constructor && (e3 = n3.constructor.name), "Map" === e3 || "Set" === e3 ? Array.from(n3) : "Arguments" === e3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e3) ? r(n3, t3) : void 0;
      }
    }(n2)) || t2 && n2 && "number" == typeof n2.length) {
      e2 && (n2 = e2);
      var i2 = 0;
      return function() {
        return i2 >= n2.length ? { done: true } : { done: false, value: n2[i2++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  return (e2 = n2[Symbol.iterator]()).next.bind(e2);
}
try {
  self["workbox:core:6.5.3"] && _();
} catch (n2) {
}
var i = function() {
  var n2 = this;
  this.promise = new Promise(function(t2, r2) {
    n2.resolve = t2, n2.reject = r2;
  });
};
function o(n2, t2) {
  var r2 = location.href;
  return new URL(n2, r2).href === new URL(t2, r2).href;
}
var u = function(n2, t2) {
  this.type = n2, Object.assign(this, t2);
};
function a(n2, t2, r2) {
  return r2 ? t2 ? t2(n2) : n2 : (n2 && n2.then || (n2 = Promise.resolve(n2)), t2 ? n2.then(t2) : n2);
}
function c() {
}
var f = { type: "SKIP_WAITING" };
function s(n2, t2) {
  if (!t2)
    return n2 && n2.then ? n2.then(c) : Promise.resolve();
}
var v = function(r2) {
  var e2, c2;
  function v2(n2, t2) {
    var e3, c3;
    return void 0 === t2 && (t2 = {}), (e3 = r2.call(this) || this).nn = {}, e3.tn = 0, e3.rn = new i(), e3.en = new i(), e3.on = new i(), e3.un = 0, e3.an = /* @__PURE__ */ new Set(), e3.cn = function() {
      var n3 = e3.fn, t3 = n3.installing;
      e3.tn > 0 || !o(t3.scriptURL, e3.sn.toString()) || performance.now() > e3.un + 6e4 ? (e3.vn = t3, n3.removeEventListener("updatefound", e3.cn)) : (e3.hn = t3, e3.an.add(t3), e3.rn.resolve(t3)), ++e3.tn, t3.addEventListener("statechange", e3.ln);
    }, e3.ln = function(n3) {
      var t3 = e3.fn, r3 = n3.target, i2 = r3.state, o2 = r3 === e3.vn, a2 = { sw: r3, isExternal: o2, originalEvent: n3 };
      !o2 && e3.mn && (a2.isUpdate = true), e3.dispatchEvent(new u(i2, a2)), "installed" === i2 ? e3.wn = self.setTimeout(function() {
        "installed" === i2 && t3.waiting === r3 && e3.dispatchEvent(new u("waiting", a2));
      }, 200) : "activating" === i2 && (clearTimeout(e3.wn), o2 || e3.en.resolve(r3));
    }, e3.dn = function(n3) {
      var t3 = e3.hn, r3 = t3 !== navigator.serviceWorker.controller;
      e3.dispatchEvent(new u("controlling", { isExternal: r3, originalEvent: n3, sw: t3, isUpdate: e3.mn })), r3 || e3.on.resolve(t3);
    }, e3.gn = (c3 = function(n3) {
      var t3 = n3.data, r3 = n3.ports, i2 = n3.source;
      return a(e3.getSW(), function() {
        e3.an.has(i2) && e3.dispatchEvent(new u("message", { data: t3, originalEvent: n3, ports: r3, sw: i2 }));
      });
    }, function() {
      for (var n3 = [], t3 = 0; t3 < arguments.length; t3++)
        n3[t3] = arguments[t3];
      try {
        return Promise.resolve(c3.apply(this, n3));
      } catch (n4) {
        return Promise.reject(n4);
      }
    }), e3.sn = n2, e3.nn = t2, navigator.serviceWorker.addEventListener("message", e3.gn), e3;
  }
  c2 = r2, (e2 = v2).prototype = Object.create(c2.prototype), e2.prototype.constructor = e2, e2.__proto__ = c2;
  var h, l, w = v2.prototype;
  return w.register = function(n2) {
    var t2 = (void 0 === n2 ? {} : n2).immediate, r3 = void 0 !== t2 && t2;
    try {
      var e3 = this;
      return function(n3, t3) {
        var r4 = n3();
        if (r4 && r4.then)
          return r4.then(t3);
        return t3(r4);
      }(function() {
        if (!r3 && "complete" !== document.readyState)
          return s(new Promise(function(n3) {
            return window.addEventListener("load", n3);
          }));
      }, function() {
        return e3.mn = Boolean(navigator.serviceWorker.controller), e3.yn = e3.pn(), a(e3.bn(), function(n3) {
          e3.fn = n3, e3.yn && (e3.hn = e3.yn, e3.en.resolve(e3.yn), e3.on.resolve(e3.yn), e3.yn.addEventListener("statechange", e3.ln, { once: true }));
          var t3 = e3.fn.waiting;
          return t3 && o(t3.scriptURL, e3.sn.toString()) && (e3.hn = t3, Promise.resolve().then(function() {
            e3.dispatchEvent(new u("waiting", { sw: t3, wasWaitingBeforeRegister: true }));
          }).then(function() {
          })), e3.hn && (e3.rn.resolve(e3.hn), e3.an.add(e3.hn)), e3.fn.addEventListener("updatefound", e3.cn), navigator.serviceWorker.addEventListener("controllerchange", e3.dn), e3.fn;
        });
      });
    } catch (n3) {
      return Promise.reject(n3);
    }
  }, w.update = function() {
    try {
      return this.fn ? s(this.fn.update()) : void 0;
    } catch (n2) {
      return Promise.reject(n2);
    }
  }, w.getSW = function() {
    return void 0 !== this.hn ? Promise.resolve(this.hn) : this.rn.promise;
  }, w.messageSW = function(t2) {
    try {
      return a(this.getSW(), function(r3) {
        return n(r3, t2);
      });
    } catch (n2) {
      return Promise.reject(n2);
    }
  }, w.messageSkipWaiting = function() {
    this.fn && this.fn.waiting && n(this.fn.waiting, f);
  }, w.pn = function() {
    var n2 = navigator.serviceWorker.controller;
    return n2 && o(n2.scriptURL, this.sn.toString()) ? n2 : void 0;
  }, w.bn = function() {
    try {
      var n2 = this;
      return function(n3, t2) {
        try {
          var r3 = n3();
        } catch (n4) {
          return t2(n4);
        }
        if (r3 && r3.then)
          return r3.then(void 0, t2);
        return r3;
      }(function() {
        return a(navigator.serviceWorker.register(n2.sn, n2.nn), function(t2) {
          return n2.un = performance.now(), t2;
        });
      }, function(n3) {
        throw n3;
      });
    } catch (n3) {
      return Promise.reject(n3);
    }
  }, h = v2, (l = [{ key: "active", get: function() {
    return this.en.promise;
  } }, { key: "controlling", get: function() {
    return this.on.promise;
  } }]) && t(h.prototype, l), v2;
}(function() {
  function n2() {
    this.Pn = /* @__PURE__ */ new Map();
  }
  var t2 = n2.prototype;
  return t2.addEventListener = function(n3, t3) {
    this.Sn(n3).add(t3);
  }, t2.removeEventListener = function(n3, t3) {
    this.Sn(n3).delete(t3);
  }, t2.dispatchEvent = function(n3) {
    n3.target = this;
    for (var t3, r2 = e(this.Sn(n3.type)); !(t3 = r2()).done; ) {
      (0, t3.value)(n3);
    }
  }, t2.Sn = function(n3) {
    return this.Pn.has(n3) || this.Pn.set(n3, /* @__PURE__ */ new Set()), this.Pn.get(n3);
  }, n2;
}());
export {
  v as Workbox,
  u as WorkboxEvent,
  n as messageSW
};
//# sourceMappingURL=workbox-window.prod.es5-6a9d82f3.js.map
