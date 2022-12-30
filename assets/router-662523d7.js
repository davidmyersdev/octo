import { _ as __vitePreload } from "./preload-helper-5f15640e.js";
import { c as createRouter, a as createWebHistory, u as useRouter } from "./vue-router-bb5abae0.js";
import { c as createStore } from "./vuex.esm-bundler-99de9736.js";
import { g as getAuth } from "./index-90ebcfae-24d515d8.js";
import { S as SIGN_OUT, D as DISCARD_DOCUMENT, a as DOCUMENTS_LOADED, E as EDIT_DOCUMENT, L as LOAD_DOCUMENT, M as MERGE_DOCUMENT, R as RESTORE_DOCUMENT, b as RESTRICT_DOCUMENT, c as SET_DOCUMENT, d as SHARE_DOCUMENT, T as TOUCH_DOCUMENT, e as DUPLICATE_DOCUMENT, f as LOAD_DOCUMENTS, g as MERGE_DOCUMENTS, h as SYNC, A as ADD_DOCUMENT, i as SET_ONLINE, j as ACTIVATE_CONTEXT, k as DEACTIVATE_CONTEXT, l as SET_CONTEXT_TAGS, m as SET_EDITOR, n as SET_MOD_KEY, o as SET_OFFLINE, p as SET_RIGHT_SIDEBAR_VISIBILITY, q as SET_SHOW_WELCOME, B as BLUR_EDITOR, F as FOCUS_EDITOR } from "./actions-7ca2be11.js";
import { L as LOAD_CONTEXTS, R as REMOVE_CONTEXT, A as ADD_CONTEXT, c as contextsModule } from "./contexts-e80363e8.js";
import { D as Doc, u as unpack, p as pack } from "./doc-018f7423.js";
import { u as useRecentDocs } from "./useRecentDocs-b417f68b.js";
import { s as setTitle } from "./title-23c0a2fd.js";
import { S as SETTINGS_LOADED, L as LOAD_SETTINGS, a as SET_THEME, b as SET_EXPERIMENTAL, c as SET_EDITOR_TOOLBAR, d as SET_EDITOR_TAB_SIZE, e as SET_EDITOR_SPELLCHECK, f as SET_EDITOR_READABILITY_WORDS_PER_MINUTE, g as SET_EDITOR_READABILITY_ENABLED, h as SET_EDITOR_LISTS_ENABLED, i as SET_EDITOR_LIGATURES, j as SET_EDITOR_KEY_MAP, k as SET_EDITOR_IMAGES_SHOW_CAPTIONS, l as SET_EDITOR_IMAGES_ENABLED, m as SET_CRYPTO_KEYS, n as SET_CRYPTO_ENABLED, s as settingsModule } from "./settings-f2786260.js";
import { u as useHooks } from "./useHooks-93920b51.js";
import { f as fetchDocs, a as addDoc, u as updateDoc } from "./firestore-017beded.js";
import { c as commonjsGlobal } from "./_commonjsHelpers-dd024a83.js";
import { c as commonjsRequire } from "./_commonjs-dynamic-modules-58f2b0ec.js";
import { D as Debouncer } from "./debouncer-2293cf40.js";
const SET_SUBSCRIPTION = "SET_SUBSCRIPTION";
const SET_USER = "SET_USER";
const authModule = {
  state: () => ({
    isEvaluated: false,
    subscription: {
      pro: false
    },
    user: null
  }),
  mutations: {
    [SET_SUBSCRIPTION](state, subscription) {
      state.subscription = subscription;
    },
    [SET_USER](state, user) {
      state.user = user;
      state.isEvaluated = true;
    }
  },
  actions: {
    async [SET_USER](context, payload) {
      context.commit(SET_USER, payload);
    },
    async [SIGN_OUT](context, payload) {
      getAuth().signOut();
      return context.dispatch(SET_USER, { user: null });
    }
  }
};
const findDoc$1 = (state, id) => {
  return state.all.filter((doc) => !doc.encrypted).find((doc) => doc.id === id);
};
const documentsModule = {
  state: () => ({
    all: [],
    currentId: null,
    loaded: false
  }),
  getters: {
    allKept(_state, getters) {
      return getters.sorted.filter((doc) => doc.discardedAt === null);
    },
    daily(_state, getters) {
      return getters.sortedByCreated.find((doc) => doc.daily);
    },
    currentDoc(state, getters) {
      return getters.decrypted.find((doc) => doc.id === state.currentId);
    },
    decrypted(state) {
      return state.all.filter((doc) => !doc.encrypted);
    },
    discarded(_state, getters) {
      return getters.sorted.filter((doc) => doc.discardedAt !== null);
    },
    filtered(state, getters, globalState) {
      if (globalState.context.active) {
        return getters.sorted.filter((doc) => {
          return globalState.context.tags.some((t) => doc.tags.includes(t));
        });
      }
      return getters.sorted;
    },
    kept(_state, getters) {
      return getters.filtered.filter((doc) => doc.discardedAt === null);
    },
    sorted(_state, getters) {
      return getters.decrypted.sort((a, b) => {
        return b.updatedAt - a.updatedAt;
      });
    },
    sortedByCreated(_state, getters) {
      return getters.decrypted.sort((a, b) => {
        return b.createdAt - a.createdAt;
      });
    },
    tasks(_state, getters, _globalState, _globalGetters) {
      return getters.kept.filter((doc) => doc.tasks.length > 0);
    },
    untagged(_state, getters) {
      return getters.allKept.filter((doc) => doc.tags.length == 0);
    },
    withTag(_state, getters) {
      return (tag) => {
        return getters.kept.filter((doc) => !!doc.tags.find((t) => t === tag));
      };
    }
  },
  mutations: {
    [DISCARD_DOCUMENT](state, { id }) {
      findDoc$1(state, id).discard();
    },
    [DOCUMENTS_LOADED](state) {
      state.loaded = true;
    },
    [EDIT_DOCUMENT](state, doc) {
      const found = findDoc$1(state, doc.id);
      if (found) {
        found.update({ text: doc.text });
      } else {
        state.all.push(doc);
      }
    },
    [LOAD_DOCUMENT](state, doc) {
      state.all.push(doc);
    },
    [MERGE_DOCUMENT](state, doc) {
      findDoc$1(state, doc.id).merge(doc);
    },
    [RESTORE_DOCUMENT](state, { id }) {
      findDoc$1(state, id).restore();
    },
    [RESTRICT_DOCUMENT](state, { id }) {
      findDoc$1(state, id).restrict();
    },
    [SET_DOCUMENT](state, { id }) {
      state.currentId = id;
      if (id) {
        const recentDocs = useRecentDocs();
        recentDocs.add(id);
      }
    },
    [SHARE_DOCUMENT](state, { id }) {
      findDoc$1(state, id).share();
    },
    [TOUCH_DOCUMENT](state, { id }) {
      findDoc$1(state, id).touch();
    }
  },
  actions: {
    async [DISCARD_DOCUMENT](context, doc) {
      context.commit(DISCARD_DOCUMENT, doc);
    },
    async [DOCUMENTS_LOADED](context) {
      context.commit(DOCUMENTS_LOADED);
    },
    async [DUPLICATE_DOCUMENT](context, { id }) {
      const newDoc = findDoc$1(context.state, id).duplicate();
      context.commit(EDIT_DOCUMENT, newDoc);
      return newDoc.id;
    },
    async [EDIT_DOCUMENT](context, doc) {
      context.commit(EDIT_DOCUMENT, doc);
    },
    async [LOAD_DOCUMENT](context, doc) {
      context.commit(LOAD_DOCUMENT, doc);
    },
    async [LOAD_DOCUMENTS](context, docs) {
      return Promise.all(
        docs.map((doc) => context.dispatch(LOAD_DOCUMENT, doc))
      );
    },
    async [MERGE_DOCUMENT](context, doc) {
      context.commit(MERGE_DOCUMENT, doc);
    },
    async [MERGE_DOCUMENTS](context, docs) {
      const originalDocs = docs.map((doc) => findDoc$1(context.state, doc.id));
      const newDoc = new Doc({
        text: originalDocs.map((doc) => doc.text).join("\n\n")
      });
      context.commit(EDIT_DOCUMENT, newDoc);
      return originalDocs.map((doc) => context.dispatch(DISCARD_DOCUMENT, doc));
    },
    async [RESTORE_DOCUMENT](context, doc) {
      context.commit(RESTORE_DOCUMENT, doc);
    },
    async [RESTRICT_DOCUMENT](context, doc) {
      context.commit(RESTRICT_DOCUMENT, doc);
    },
    async [SET_DOCUMENT](context, { id }) {
      context.commit(SET_DOCUMENT, { id });
    },
    async [SHARE_DOCUMENT](context, doc) {
      context.commit(SHARE_DOCUMENT, doc);
    },
    async [TOUCH_DOCUMENT](context, doc) {
      context.commit(TOUCH_DOCUMENT, doc);
    }
  }
};
var mousetrap = { exports: {} };
(function(module) {
  (function(window2, document2, undefined$1) {
    if (!window2) {
      return;
    }
    var _MAP = {
      8: "backspace",
      9: "tab",
      13: "enter",
      16: "shift",
      17: "ctrl",
      18: "alt",
      20: "capslock",
      27: "esc",
      32: "space",
      33: "pageup",
      34: "pagedown",
      35: "end",
      36: "home",
      37: "left",
      38: "up",
      39: "right",
      40: "down",
      45: "ins",
      46: "del",
      91: "meta",
      93: "meta",
      224: "meta"
    };
    var _KEYCODE_MAP = {
      106: "*",
      107: "+",
      109: "-",
      110: ".",
      111: "/",
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
      222: "'"
    };
    var _SHIFT_MAP = {
      "~": "`",
      "!": "1",
      "@": "2",
      "#": "3",
      "$": "4",
      "%": "5",
      "^": "6",
      "&": "7",
      "*": "8",
      "(": "9",
      ")": "0",
      "_": "-",
      "+": "=",
      ":": ";",
      '"': "'",
      "<": ",",
      ">": ".",
      "?": "/",
      "|": "\\"
    };
    var _SPECIAL_ALIASES = {
      "option": "alt",
      "command": "meta",
      "return": "enter",
      "escape": "esc",
      "plus": "+",
      "mod": /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
    };
    var _REVERSE_MAP;
    for (var i = 1; i < 20; ++i) {
      _MAP[111 + i] = "f" + i;
    }
    for (i = 0; i <= 9; ++i) {
      _MAP[i + 96] = i.toString();
    }
    function _addEvent(object, type, callback) {
      if (object.addEventListener) {
        object.addEventListener(type, callback, false);
        return;
      }
      object.attachEvent("on" + type, callback);
    }
    function _characterFromEvent(e) {
      if (e.type == "keypress") {
        var character = String.fromCharCode(e.which);
        if (!e.shiftKey) {
          character = character.toLowerCase();
        }
        return character;
      }
      if (_MAP[e.which]) {
        return _MAP[e.which];
      }
      if (_KEYCODE_MAP[e.which]) {
        return _KEYCODE_MAP[e.which];
      }
      return String.fromCharCode(e.which).toLowerCase();
    }
    function _modifiersMatch(modifiers1, modifiers2) {
      return modifiers1.sort().join(",") === modifiers2.sort().join(",");
    }
    function _eventModifiers(e) {
      var modifiers = [];
      if (e.shiftKey) {
        modifiers.push("shift");
      }
      if (e.altKey) {
        modifiers.push("alt");
      }
      if (e.ctrlKey) {
        modifiers.push("ctrl");
      }
      if (e.metaKey) {
        modifiers.push("meta");
      }
      return modifiers;
    }
    function _preventDefault(e) {
      if (e.preventDefault) {
        e.preventDefault();
        return;
      }
      e.returnValue = false;
    }
    function _stopPropagation(e) {
      if (e.stopPropagation) {
        e.stopPropagation();
        return;
      }
      e.cancelBubble = true;
    }
    function _isModifier(key) {
      return key == "shift" || key == "ctrl" || key == "alt" || key == "meta";
    }
    function _getReverseMap() {
      if (!_REVERSE_MAP) {
        _REVERSE_MAP = {};
        for (var key in _MAP) {
          if (key > 95 && key < 112) {
            continue;
          }
          if (_MAP.hasOwnProperty(key)) {
            _REVERSE_MAP[_MAP[key]] = key;
          }
        }
      }
      return _REVERSE_MAP;
    }
    function _pickBestAction(key, modifiers, action) {
      if (!action) {
        action = _getReverseMap()[key] ? "keydown" : "keypress";
      }
      if (action == "keypress" && modifiers.length) {
        action = "keydown";
      }
      return action;
    }
    function _keysFromString(combination) {
      if (combination === "+") {
        return ["+"];
      }
      combination = combination.replace(/\+{2}/g, "+plus");
      return combination.split("+");
    }
    function _getKeyInfo(combination, action) {
      var keys;
      var key;
      var i2;
      var modifiers = [];
      keys = _keysFromString(combination);
      for (i2 = 0; i2 < keys.length; ++i2) {
        key = keys[i2];
        if (_SPECIAL_ALIASES[key]) {
          key = _SPECIAL_ALIASES[key];
        }
        if (action && action != "keypress" && _SHIFT_MAP[key]) {
          key = _SHIFT_MAP[key];
          modifiers.push("shift");
        }
        if (_isModifier(key)) {
          modifiers.push(key);
        }
      }
      action = _pickBestAction(key, modifiers, action);
      return {
        key,
        modifiers,
        action
      };
    }
    function _belongsTo(element, ancestor) {
      if (element === null || element === document2) {
        return false;
      }
      if (element === ancestor) {
        return true;
      }
      return _belongsTo(element.parentNode, ancestor);
    }
    function Mousetrap2(targetElement) {
      var self2 = this;
      targetElement = targetElement || document2;
      if (!(self2 instanceof Mousetrap2)) {
        return new Mousetrap2(targetElement);
      }
      self2.target = targetElement;
      self2._callbacks = {};
      self2._directMap = {};
      var _sequenceLevels = {};
      var _resetTimer;
      var _ignoreNextKeyup = false;
      var _ignoreNextKeypress = false;
      var _nextExpectedAction = false;
      function _resetSequences(doNotReset) {
        doNotReset = doNotReset || {};
        var activeSequences = false, key;
        for (key in _sequenceLevels) {
          if (doNotReset[key]) {
            activeSequences = true;
            continue;
          }
          _sequenceLevels[key] = 0;
        }
        if (!activeSequences) {
          _nextExpectedAction = false;
        }
      }
      function _getMatches(character, modifiers, e, sequenceName, combination, level) {
        var i2;
        var callback;
        var matches = [];
        var action = e.type;
        if (!self2._callbacks[character]) {
          return [];
        }
        if (action == "keyup" && _isModifier(character)) {
          modifiers = [character];
        }
        for (i2 = 0; i2 < self2._callbacks[character].length; ++i2) {
          callback = self2._callbacks[character][i2];
          if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
            continue;
          }
          if (action != callback.action) {
            continue;
          }
          if (action == "keypress" && !e.metaKey && !e.ctrlKey || _modifiersMatch(modifiers, callback.modifiers)) {
            var deleteCombo = !sequenceName && callback.combo == combination;
            var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
            if (deleteCombo || deleteSequence) {
              self2._callbacks[character].splice(i2, 1);
            }
            matches.push(callback);
          }
        }
        return matches;
      }
      function _fireCallback(callback, e, combo, sequence) {
        if (self2.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
          return;
        }
        if (callback(e, combo) === false) {
          _preventDefault(e);
          _stopPropagation(e);
        }
      }
      self2._handleKey = function(character, modifiers, e) {
        var callbacks = _getMatches(character, modifiers, e);
        var i2;
        var doNotReset = {};
        var maxLevel = 0;
        var processedSequenceCallback = false;
        for (i2 = 0; i2 < callbacks.length; ++i2) {
          if (callbacks[i2].seq) {
            maxLevel = Math.max(maxLevel, callbacks[i2].level);
          }
        }
        for (i2 = 0; i2 < callbacks.length; ++i2) {
          if (callbacks[i2].seq) {
            if (callbacks[i2].level != maxLevel) {
              continue;
            }
            processedSequenceCallback = true;
            doNotReset[callbacks[i2].seq] = 1;
            _fireCallback(callbacks[i2].callback, e, callbacks[i2].combo, callbacks[i2].seq);
            continue;
          }
          if (!processedSequenceCallback) {
            _fireCallback(callbacks[i2].callback, e, callbacks[i2].combo);
          }
        }
        var ignoreThisKeypress = e.type == "keypress" && _ignoreNextKeypress;
        if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
          _resetSequences(doNotReset);
        }
        _ignoreNextKeypress = processedSequenceCallback && e.type == "keydown";
      };
      function _handleKeyEvent(e) {
        if (typeof e.which !== "number") {
          e.which = e.keyCode;
        }
        var character = _characterFromEvent(e);
        if (!character) {
          return;
        }
        if (e.type == "keyup" && _ignoreNextKeyup === character) {
          _ignoreNextKeyup = false;
          return;
        }
        self2.handleKey(character, _eventModifiers(e), e);
      }
      function _resetSequenceTimer() {
        clearTimeout(_resetTimer);
        _resetTimer = setTimeout(_resetSequences, 1e3);
      }
      function _bindSequence(combo, keys, callback, action) {
        _sequenceLevels[combo] = 0;
        function _increaseSequence(nextAction) {
          return function() {
            _nextExpectedAction = nextAction;
            ++_sequenceLevels[combo];
            _resetSequenceTimer();
          };
        }
        function _callbackAndReset(e) {
          _fireCallback(callback, e, combo);
          if (action !== "keyup") {
            _ignoreNextKeyup = _characterFromEvent(e);
          }
          setTimeout(_resetSequences, 10);
        }
        for (var i2 = 0; i2 < keys.length; ++i2) {
          var isFinal = i2 + 1 === keys.length;
          var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i2 + 1]).action);
          _bindSingle(keys[i2], wrappedCallback, action, combo, i2);
        }
      }
      function _bindSingle(combination, callback, action, sequenceName, level) {
        self2._directMap[combination + ":" + action] = callback;
        combination = combination.replace(/\s+/g, " ");
        var sequence = combination.split(" ");
        var info;
        if (sequence.length > 1) {
          _bindSequence(combination, sequence, callback, action);
          return;
        }
        info = _getKeyInfo(combination, action);
        self2._callbacks[info.key] = self2._callbacks[info.key] || [];
        _getMatches(info.key, info.modifiers, { type: info.action }, sequenceName, combination, level);
        self2._callbacks[info.key][sequenceName ? "unshift" : "push"]({
          callback,
          modifiers: info.modifiers,
          action: info.action,
          seq: sequenceName,
          level,
          combo: combination
        });
      }
      self2._bindMultiple = function(combinations, callback, action) {
        for (var i2 = 0; i2 < combinations.length; ++i2) {
          _bindSingle(combinations[i2], callback, action);
        }
      };
      _addEvent(targetElement, "keypress", _handleKeyEvent);
      _addEvent(targetElement, "keydown", _handleKeyEvent);
      _addEvent(targetElement, "keyup", _handleKeyEvent);
    }
    Mousetrap2.prototype.bind = function(keys, callback, action) {
      var self2 = this;
      keys = keys instanceof Array ? keys : [keys];
      self2._bindMultiple.call(self2, keys, callback, action);
      return self2;
    };
    Mousetrap2.prototype.unbind = function(keys, action) {
      var self2 = this;
      return self2.bind.call(self2, keys, function() {
      }, action);
    };
    Mousetrap2.prototype.trigger = function(keys, action) {
      var self2 = this;
      if (self2._directMap[keys + ":" + action]) {
        self2._directMap[keys + ":" + action]({}, keys);
      }
      return self2;
    };
    Mousetrap2.prototype.reset = function() {
      var self2 = this;
      self2._callbacks = {};
      self2._directMap = {};
      return self2;
    };
    Mousetrap2.prototype.stopCallback = function(e, element) {
      var self2 = this;
      if ((" " + element.className + " ").indexOf(" mousetrap ") > -1) {
        return false;
      }
      if (_belongsTo(element, self2.target)) {
        return false;
      }
      if ("composedPath" in e && typeof e.composedPath === "function") {
        var initialEventTarget = e.composedPath()[0];
        if (initialEventTarget !== e.target) {
          element = initialEventTarget;
        }
      }
      return element.tagName == "INPUT" || element.tagName == "SELECT" || element.tagName == "TEXTAREA" || element.isContentEditable;
    };
    Mousetrap2.prototype.handleKey = function() {
      var self2 = this;
      return self2._handleKey.apply(self2, arguments);
    };
    Mousetrap2.addKeycodes = function(object) {
      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          _MAP[key] = object[key];
        }
      }
      _REVERSE_MAP = null;
    };
    Mousetrap2.init = function() {
      var documentMousetrap = Mousetrap2(document2);
      for (var method in documentMousetrap) {
        if (method.charAt(0) !== "_") {
          Mousetrap2[method] = function(method2) {
            return function() {
              return documentMousetrap[method2].apply(documentMousetrap, arguments);
            };
          }(method);
        }
      }
    };
    Mousetrap2.init();
    window2.Mousetrap = Mousetrap2;
    if (module.exports) {
      module.exports = Mousetrap2;
    }
    if (typeof undefined$1 === "function" && undefined$1.amd) {
      undefined$1(function() {
        return Mousetrap2;
      });
    }
  })(typeof window !== "undefined" ? window : null, typeof window !== "undefined" ? document : null);
})(mousetrap);
const Mousetrap$1 = mousetrap.exports;
(function(a) {
  var c = {}, d = a.prototype.stopCallback;
  a.prototype.stopCallback = function(e, b, a2, f) {
    return this.paused ? true : c[a2] || c[f] ? false : d.call(this, e, b, a2);
  };
  a.prototype.bindGlobal = function(a2, b, d2) {
    this.bind(a2, b, d2);
    if (a2 instanceof Array)
      for (b = 0; b < a2.length; b++)
        c[a2[b]] = true;
    else
      c[a2] = true;
  };
  a.init();
})(Mousetrap);
const bind = ({ keybinding, callback }) => {
  Mousetrap$1.bind(keybinding, (e, _sequence) => {
    e.preventDefault();
    callback();
  });
};
const bindGlobal = (keybinding, callback) => {
  Mousetrap$1.bindGlobal(keybinding, (e, _sequence) => {
    e.preventDefault();
    callback();
  });
};
const unbind = ({ keybinding }) => {
  Mousetrap$1.unbind(keybinding);
};
const DISABLE_LISTENER = "DISABLE_LISTENER";
const DISABLE_LISTENERS = "DISABLE_LISTENERS";
const ENABLE_LISTENER = "ENABLE_LISTENER";
const ENABLE_LISTENERS = "ENABLE_LISTENERS";
const KEYBINDINGS_LOADED = "KEYBINDINGS_LOADED";
const LOAD_KEYBINDINGS = "LOAD_KEYBINDINGS";
const TOGGLE_LISTENERS = "TOGGLE_LISTENERS";
const goTo = (path) => {
  open({ path });
};
const makeCallback = (callback, context) => {
  return () => {
    callback();
    context.dispatch(DISABLE_LISTENERS);
  };
};
const makeListener = (keybinding, callback, context) => {
  return { keybinding, callback: makeCallback(callback, context) };
};
const makeListeners = (context) => {
  return [
    makeListener("a", () => goTo("/account"), context),
    makeListener("c", () => goTo("/contexts"), context),
    makeListener("d", () => goTo("/docs/f/discarded"), context),
    makeListener("e", () => goTo("/force-graph"), context),
    makeListener("n", () => goTo("/docs/new"), context),
    makeListener("p", () => goTo("/notepad"), context),
    makeListener("r", () => goTo("/docs"), context),
    makeListener("s", () => goTo("/settings"), context),
    makeListener("t", () => goTo("/docs/f/tasks"), context),
    makeListener("u", () => goTo("/docs/f/untagged"), context)
  ];
};
const keybindingsModule = {
  state: () => ({
    activeElement: null,
    listeners: [],
    listening: false,
    loaded: false
  }),
  getters: {},
  mutations: {
    [DISABLE_LISTENER](state, listener) {
      state.listeners = state.listeners.filter((l) => l !== listener);
    },
    [DISABLE_LISTENERS](state) {
      state.listening = false;
    },
    [ENABLE_LISTENER](state, listener) {
      state.listeners.push(listener);
    },
    [ENABLE_LISTENERS](state) {
      state.listening = true;
    },
    [KEYBINDINGS_LOADED](state) {
      state.loaded = true;
    }
  },
  actions: {
    async [LOAD_KEYBINDINGS](context) {
      bindGlobal("esc", () => context.dispatch(DISABLE_LISTENERS));
      bindGlobal("mod+k", () => context.dispatch(TOGGLE_LISTENERS));
      bindGlobal("mod+s", () => context.dispatch(DISABLE_LISTENERS));
      bindGlobal("mod+shift+f", () => {
        context.dispatch(DISABLE_LISTENERS);
        goTo("/docs");
      });
      window.addEventListener("click", () => context.dispatch(DISABLE_LISTENERS));
      context.commit(KEYBINDINGS_LOADED);
    },
    async [DISABLE_LISTENER](context, listener) {
      unbind(listener);
      context.commit(DISABLE_LISTENER, listener);
    },
    async [DISABLE_LISTENERS](context) {
      await Promise.all(
        context.state.listeners.map((listener) => {
          context.dispatch(DISABLE_LISTENER, listener);
        })
      );
      if (context.state.activeElement) {
        context.state.activeElement.focus();
        context.state.activeElement = null;
      }
      context.commit(DISABLE_LISTENERS);
    },
    async [ENABLE_LISTENER](context, listener) {
      bind(listener);
      context.commit(ENABLE_LISTENER, listener);
    },
    async [ENABLE_LISTENERS](context) {
      context.state.activeElement = document.activeElement;
      context.state.activeElement.blur();
      await Promise.all(
        makeListeners(context).map((listener) => {
          context.dispatch(ENABLE_LISTENER, listener);
        })
      );
      context.commit(ENABLE_LISTENERS);
    },
    async [TOGGLE_LISTENERS](context, settings) {
      if (context.state.listening) {
        return context.dispatch(DISABLE_LISTENERS);
      } else {
        return context.dispatch(ENABLE_LISTENERS);
      }
    }
  }
};
const OBJECT_STRINGS = {
  Array: "[object Array]",
  Boolean: "[object Boolean]",
  Date: "[object Date]",
  Number: "[object Number]",
  Object: "[object Object]",
  String: "[object String]"
};
const compare = (object, string) => {
  return Object.prototype.toString.call(object) === string;
};
const isArray = (object) => {
  return compare(object, OBJECT_STRINGS.Array);
};
const isDate = (object) => {
  return compare(object, OBJECT_STRINGS.Date);
};
const isObject = (object) => {
  return compare(object, OBJECT_STRINGS.Object);
};
const unwrap = (object) => {
  if (isArray(object)) {
    return unwrapArray(object);
  }
  if (isDate(object)) {
    return unwrapDate(object);
  }
  if (isObject(object)) {
    return unwrapObject(object);
  }
  return object;
};
const unwrapArray = (object) => {
  return object.map((item) => {
    return unwrap(item);
  });
};
const unwrapDate = (object) => {
  return new Date(object);
};
const unwrapObject = (object) => {
  return Object.keys(object).reduce((unwrapped, key) => {
    return {
      ...unwrapped,
      [key]: unwrap(object[key])
    };
  }, {});
};
const PULL_DOCUMENT = "PULL_DOCUMENT";
const PULL_DOCUMENTS = "PULL_DOCUMENTS";
const PUSH_DOCUMENT = "PUSH_DOCUMENT";
const PUSH_DOCUMENTS = "PUSH_DOCUMENTS";
const findDoc = (state, id) => {
  return state.documents.all.find((doc) => doc.id === id);
};
const syncModule = {
  state: () => ({}),
  getters: {
    lastSyncedAt(_state, _getters, globalState) {
      return new Date(Math.max(0, ...globalState.documents.all.map((doc) => doc.syncedAt)));
    }
  },
  actions: {
    async [PULL_DOCUMENT](context, doc) {
      const found = findDoc(context.rootState, doc.id);
      if (found) {
        if (found.updatedAt < doc.updatedAt) {
          return context.dispatch(MERGE_DOCUMENT, doc);
        } else if (found.updatedAt > doc.updatedAt)
          ;
        else {
          if (!found.syncedAt || found.syncedAt < doc.syncedAt) {
            return context.dispatch(MERGE_DOCUMENT, doc);
          }
        }
      } else {
        return context.dispatch("EDIT_DOCUMENT", doc);
      }
    },
    async [PULL_DOCUMENTS](context) {
      const docs = await fetchDocs({
        ownerId: context.rootState.auth.user.uid,
        syncedAfter: context.getters.lastSyncedAt
      });
      return Promise.all(
        docs.map(async (docRef) => {
          const serverDoc = docRef.data();
          const packed = {
            ...serverDoc,
            id: serverDoc.id || serverDoc.clientId,
            firebaseId: docRef.id,
            textKey: serverDoc.textKey || serverDoc.dataKey,
            createdAt: serverDoc.createdAt ? serverDoc.createdAt.toDate() : null,
            discardedAt: serverDoc.discardedAt ? serverDoc.discardedAt.toDate() : null,
            updatedAt: serverDoc.updatedAt ? serverDoc.updatedAt.toDate() : null,
            touchedAt: serverDoc.touchedAt ? serverDoc.touchedAt.toDate() : null,
            syncedAt: serverDoc.syncedAt.toDate()
          };
          const doc = await unpack(packed, {
            privateKey: context.rootState.settings.crypto.privateKey
          });
          return context.dispatch(PULL_DOCUMENT, doc);
        })
      );
    },
    async [PUSH_DOCUMENT](context, doc) {
      const packed = unwrap(await pack(doc, {
        preferEncryption: context.rootState.settings.crypto.enabled,
        publicKey: context.rootState.settings.crypto.publicKey
      }));
      if (!packed.syncedAt) {
        return addDoc({
          doc: packed,
          ownerId: context.rootState.auth.user.uid
        });
      } else if (packed.updatedAt > packed.syncedAt || packed.touchedAt > packed.syncedAt) {
        return updateDoc({
          doc: packed,
          docId: packed.firebaseId
        });
      }
    },
    async [PUSH_DOCUMENTS](context) {
      await Promise.all(
        context.rootState.documents.all.map((doc) => context.dispatch(PUSH_DOCUMENT, doc))
      );
    },
    async [SYNC](context) {
      const { emit } = useHooks();
      await context.dispatch(PULL_DOCUMENTS);
      await context.dispatch(PUSH_DOCUMENTS);
      await context.dispatch(PULL_DOCUMENTS);
      emit("docs_synced");
    }
  }
};
var localforage$1 = { exports: {} };
(function(module, exports) {
  (function(f) {
    {
      module.exports = f();
    }
  })(function() {
    return function e(t, n, r) {
      function s(o2, u) {
        if (!n[o2]) {
          if (!t[o2]) {
            var a = typeof commonjsRequire == "function" && commonjsRequire;
            if (!u && a)
              return a(o2, true);
            if (i)
              return i(o2, true);
            var f = new Error("Cannot find module '" + o2 + "'");
            throw f.code = "MODULE_NOT_FOUND", f;
          }
          var l = n[o2] = { exports: {} };
          t[o2][0].call(l.exports, function(e2) {
            var n2 = t[o2][1][e2];
            return s(n2 ? n2 : e2);
          }, l, l.exports, e, t, n, r);
        }
        return n[o2].exports;
      }
      var i = typeof commonjsRequire == "function" && commonjsRequire;
      for (var o = 0; o < r.length; o++)
        s(r[o]);
      return s;
    }({ 1: [function(_dereq_, module2, exports2) {
      (function(global) {
        var Mutation = global.MutationObserver || global.WebKitMutationObserver;
        var scheduleDrain;
        {
          if (Mutation) {
            var called = 0;
            var observer = new Mutation(nextTick);
            var element = global.document.createTextNode("");
            observer.observe(element, {
              characterData: true
            });
            scheduleDrain = function() {
              element.data = called = ++called % 2;
            };
          } else if (!global.setImmediate && typeof global.MessageChannel !== "undefined") {
            var channel = new global.MessageChannel();
            channel.port1.onmessage = nextTick;
            scheduleDrain = function() {
              channel.port2.postMessage(0);
            };
          } else if ("document" in global && "onreadystatechange" in global.document.createElement("script")) {
            scheduleDrain = function() {
              var scriptEl = global.document.createElement("script");
              scriptEl.onreadystatechange = function() {
                nextTick();
                scriptEl.onreadystatechange = null;
                scriptEl.parentNode.removeChild(scriptEl);
                scriptEl = null;
              };
              global.document.documentElement.appendChild(scriptEl);
            };
          } else {
            scheduleDrain = function() {
              setTimeout(nextTick, 0);
            };
          }
        }
        var draining;
        var queue = [];
        function nextTick() {
          draining = true;
          var i, oldQueue;
          var len = queue.length;
          while (len) {
            oldQueue = queue;
            queue = [];
            i = -1;
            while (++i < len) {
              oldQueue[i]();
            }
            len = queue.length;
          }
          draining = false;
        }
        module2.exports = immediate;
        function immediate(task) {
          if (queue.push(task) === 1 && !draining) {
            scheduleDrain();
          }
        }
      }).call(this, typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {}], 2: [function(_dereq_, module2, exports2) {
      var immediate = _dereq_(1);
      function INTERNAL() {
      }
      var handlers = {};
      var REJECTED = ["REJECTED"];
      var FULFILLED = ["FULFILLED"];
      var PENDING = ["PENDING"];
      module2.exports = Promise2;
      function Promise2(resolver) {
        if (typeof resolver !== "function") {
          throw new TypeError("resolver must be a function");
        }
        this.state = PENDING;
        this.queue = [];
        this.outcome = void 0;
        if (resolver !== INTERNAL) {
          safelyResolveThenable(this, resolver);
        }
      }
      Promise2.prototype["catch"] = function(onRejected) {
        return this.then(null, onRejected);
      };
      Promise2.prototype.then = function(onFulfilled, onRejected) {
        if (typeof onFulfilled !== "function" && this.state === FULFILLED || typeof onRejected !== "function" && this.state === REJECTED) {
          return this;
        }
        var promise = new this.constructor(INTERNAL);
        if (this.state !== PENDING) {
          var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
          unwrap2(promise, resolver, this.outcome);
        } else {
          this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
        }
        return promise;
      };
      function QueueItem(promise, onFulfilled, onRejected) {
        this.promise = promise;
        if (typeof onFulfilled === "function") {
          this.onFulfilled = onFulfilled;
          this.callFulfilled = this.otherCallFulfilled;
        }
        if (typeof onRejected === "function") {
          this.onRejected = onRejected;
          this.callRejected = this.otherCallRejected;
        }
      }
      QueueItem.prototype.callFulfilled = function(value) {
        handlers.resolve(this.promise, value);
      };
      QueueItem.prototype.otherCallFulfilled = function(value) {
        unwrap2(this.promise, this.onFulfilled, value);
      };
      QueueItem.prototype.callRejected = function(value) {
        handlers.reject(this.promise, value);
      };
      QueueItem.prototype.otherCallRejected = function(value) {
        unwrap2(this.promise, this.onRejected, value);
      };
      function unwrap2(promise, func, value) {
        immediate(function() {
          var returnValue;
          try {
            returnValue = func(value);
          } catch (e) {
            return handlers.reject(promise, e);
          }
          if (returnValue === promise) {
            handlers.reject(promise, new TypeError("Cannot resolve promise with itself"));
          } else {
            handlers.resolve(promise, returnValue);
          }
        });
      }
      handlers.resolve = function(self2, value) {
        var result = tryCatch(getThen, value);
        if (result.status === "error") {
          return handlers.reject(self2, result.value);
        }
        var thenable = result.value;
        if (thenable) {
          safelyResolveThenable(self2, thenable);
        } else {
          self2.state = FULFILLED;
          self2.outcome = value;
          var i = -1;
          var len = self2.queue.length;
          while (++i < len) {
            self2.queue[i].callFulfilled(value);
          }
        }
        return self2;
      };
      handlers.reject = function(self2, error) {
        self2.state = REJECTED;
        self2.outcome = error;
        var i = -1;
        var len = self2.queue.length;
        while (++i < len) {
          self2.queue[i].callRejected(error);
        }
        return self2;
      };
      function getThen(obj) {
        var then = obj && obj.then;
        if (obj && (typeof obj === "object" || typeof obj === "function") && typeof then === "function") {
          return function appyThen() {
            then.apply(obj, arguments);
          };
        }
      }
      function safelyResolveThenable(self2, thenable) {
        var called = false;
        function onError(value) {
          if (called) {
            return;
          }
          called = true;
          handlers.reject(self2, value);
        }
        function onSuccess(value) {
          if (called) {
            return;
          }
          called = true;
          handlers.resolve(self2, value);
        }
        function tryToUnwrap() {
          thenable(onSuccess, onError);
        }
        var result = tryCatch(tryToUnwrap);
        if (result.status === "error") {
          onError(result.value);
        }
      }
      function tryCatch(func, value) {
        var out = {};
        try {
          out.value = func(value);
          out.status = "success";
        } catch (e) {
          out.status = "error";
          out.value = e;
        }
        return out;
      }
      Promise2.resolve = resolve;
      function resolve(value) {
        if (value instanceof this) {
          return value;
        }
        return handlers.resolve(new this(INTERNAL), value);
      }
      Promise2.reject = reject;
      function reject(reason) {
        var promise = new this(INTERNAL);
        return handlers.reject(promise, reason);
      }
      Promise2.all = all;
      function all(iterable) {
        var self2 = this;
        if (Object.prototype.toString.call(iterable) !== "[object Array]") {
          return this.reject(new TypeError("must be an array"));
        }
        var len = iterable.length;
        var called = false;
        if (!len) {
          return this.resolve([]);
        }
        var values = new Array(len);
        var resolved = 0;
        var i = -1;
        var promise = new this(INTERNAL);
        while (++i < len) {
          allResolver(iterable[i], i);
        }
        return promise;
        function allResolver(value, i2) {
          self2.resolve(value).then(resolveFromAll, function(error) {
            if (!called) {
              called = true;
              handlers.reject(promise, error);
            }
          });
          function resolveFromAll(outValue) {
            values[i2] = outValue;
            if (++resolved === len && !called) {
              called = true;
              handlers.resolve(promise, values);
            }
          }
        }
      }
      Promise2.race = race;
      function race(iterable) {
        var self2 = this;
        if (Object.prototype.toString.call(iterable) !== "[object Array]") {
          return this.reject(new TypeError("must be an array"));
        }
        var len = iterable.length;
        var called = false;
        if (!len) {
          return this.resolve([]);
        }
        var i = -1;
        var promise = new this(INTERNAL);
        while (++i < len) {
          resolver(iterable[i]);
        }
        return promise;
        function resolver(value) {
          self2.resolve(value).then(function(response) {
            if (!called) {
              called = true;
              handlers.resolve(promise, response);
            }
          }, function(error) {
            if (!called) {
              called = true;
              handlers.reject(promise, error);
            }
          });
        }
      }
    }, { "1": 1 }], 3: [function(_dereq_, module2, exports2) {
      (function(global) {
        if (typeof global.Promise !== "function") {
          global.Promise = _dereq_(2);
        }
      }).call(this, typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, { "2": 2 }], 4: [function(_dereq_, module2, exports2) {
      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function getIDB() {
        try {
          if (typeof indexedDB !== "undefined") {
            return indexedDB;
          }
          if (typeof webkitIndexedDB !== "undefined") {
            return webkitIndexedDB;
          }
          if (typeof mozIndexedDB !== "undefined") {
            return mozIndexedDB;
          }
          if (typeof OIndexedDB !== "undefined") {
            return OIndexedDB;
          }
          if (typeof msIndexedDB !== "undefined") {
            return msIndexedDB;
          }
        } catch (e) {
          return;
        }
      }
      var idb = getIDB();
      function isIndexedDBValid() {
        try {
          if (!idb || !idb.open) {
            return false;
          }
          var isSafari = typeof openDatabase !== "undefined" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);
          var hasFetch = typeof fetch === "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!isSafari || hasFetch) && typeof indexedDB !== "undefined" && typeof IDBKeyRange !== "undefined";
        } catch (e) {
          return false;
        }
      }
      function createBlob(parts, properties) {
        parts = parts || [];
        properties = properties || {};
        try {
          return new Blob(parts, properties);
        } catch (e) {
          if (e.name !== "TypeError") {
            throw e;
          }
          var Builder = typeof BlobBuilder !== "undefined" ? BlobBuilder : typeof MSBlobBuilder !== "undefined" ? MSBlobBuilder : typeof MozBlobBuilder !== "undefined" ? MozBlobBuilder : WebKitBlobBuilder;
          var builder = new Builder();
          for (var i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
          }
          return builder.getBlob(properties.type);
        }
      }
      if (typeof Promise === "undefined") {
        _dereq_(3);
      }
      var Promise$1 = Promise;
      function executeCallback(promise, callback) {
        if (callback) {
          promise.then(function(result) {
            callback(null, result);
          }, function(error) {
            callback(error);
          });
        }
      }
      function executeTwoCallbacks(promise, callback, errorCallback) {
        if (typeof callback === "function") {
          promise.then(callback);
        }
        if (typeof errorCallback === "function") {
          promise["catch"](errorCallback);
        }
      }
      function normalizeKey(key2) {
        if (typeof key2 !== "string") {
          console.warn(key2 + " used as a key, but it is not a string.");
          key2 = String(key2);
        }
        return key2;
      }
      function getCallback() {
        if (arguments.length && typeof arguments[arguments.length - 1] === "function") {
          return arguments[arguments.length - 1];
        }
      }
      var DETECT_BLOB_SUPPORT_STORE = "local-forage-detect-blob-support";
      var supportsBlobs = void 0;
      var dbContexts = {};
      var toString = Object.prototype.toString;
      var READ_ONLY = "readonly";
      var READ_WRITE = "readwrite";
      function _binStringToArrayBuffer(bin) {
        var length2 = bin.length;
        var buf = new ArrayBuffer(length2);
        var arr = new Uint8Array(buf);
        for (var i = 0; i < length2; i++) {
          arr[i] = bin.charCodeAt(i);
        }
        return buf;
      }
      function _checkBlobSupportWithoutCaching(idb2) {
        return new Promise$1(function(resolve) {
          var txn = idb2.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
          var blob = createBlob([""]);
          txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, "key");
          txn.onabort = function(e) {
            e.preventDefault();
            e.stopPropagation();
            resolve(false);
          };
          txn.oncomplete = function() {
            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
            var matchedEdge = navigator.userAgent.match(/Edge\//);
            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
          };
        })["catch"](function() {
          return false;
        });
      }
      function _checkBlobSupport(idb2) {
        if (typeof supportsBlobs === "boolean") {
          return Promise$1.resolve(supportsBlobs);
        }
        return _checkBlobSupportWithoutCaching(idb2).then(function(value) {
          supportsBlobs = value;
          return supportsBlobs;
        });
      }
      function _deferReadiness(dbInfo) {
        var dbContext = dbContexts[dbInfo.name];
        var deferredOperation = {};
        deferredOperation.promise = new Promise$1(function(resolve, reject) {
          deferredOperation.resolve = resolve;
          deferredOperation.reject = reject;
        });
        dbContext.deferredOperations.push(deferredOperation);
        if (!dbContext.dbReady) {
          dbContext.dbReady = deferredOperation.promise;
        } else {
          dbContext.dbReady = dbContext.dbReady.then(function() {
            return deferredOperation.promise;
          });
        }
      }
      function _advanceReadiness(dbInfo) {
        var dbContext = dbContexts[dbInfo.name];
        var deferredOperation = dbContext.deferredOperations.pop();
        if (deferredOperation) {
          deferredOperation.resolve();
          return deferredOperation.promise;
        }
      }
      function _rejectReadiness(dbInfo, err) {
        var dbContext = dbContexts[dbInfo.name];
        var deferredOperation = dbContext.deferredOperations.pop();
        if (deferredOperation) {
          deferredOperation.reject(err);
          return deferredOperation.promise;
        }
      }
      function _getConnection(dbInfo, upgradeNeeded) {
        return new Promise$1(function(resolve, reject) {
          dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();
          if (dbInfo.db) {
            if (upgradeNeeded) {
              _deferReadiness(dbInfo);
              dbInfo.db.close();
            } else {
              return resolve(dbInfo.db);
            }
          }
          var dbArgs = [dbInfo.name];
          if (upgradeNeeded) {
            dbArgs.push(dbInfo.version);
          }
          var openreq = idb.open.apply(idb, dbArgs);
          if (upgradeNeeded) {
            openreq.onupgradeneeded = function(e) {
              var db = openreq.result;
              try {
                db.createObjectStore(dbInfo.storeName);
                if (e.oldVersion <= 1) {
                  db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                }
              } catch (ex) {
                if (ex.name === "ConstraintError") {
                  console.warn('The database "' + dbInfo.name + '" has been upgraded from version ' + e.oldVersion + " to version " + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                } else {
                  throw ex;
                }
              }
            };
          }
          openreq.onerror = function(e) {
            e.preventDefault();
            reject(openreq.error);
          };
          openreq.onsuccess = function() {
            var db = openreq.result;
            db.onversionchange = function(e) {
              e.target.close();
            };
            resolve(db);
            _advanceReadiness(dbInfo);
          };
        });
      }
      function _getOriginalConnection(dbInfo) {
        return _getConnection(dbInfo, false);
      }
      function _getUpgradedConnection(dbInfo) {
        return _getConnection(dbInfo, true);
      }
      function _isUpgradeNeeded(dbInfo, defaultVersion) {
        if (!dbInfo.db) {
          return true;
        }
        var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
        var isDowngrade = dbInfo.version < dbInfo.db.version;
        var isUpgrade = dbInfo.version > dbInfo.db.version;
        if (isDowngrade) {
          if (dbInfo.version !== defaultVersion) {
            console.warn('The database "' + dbInfo.name + `" can't be downgraded from version ` + dbInfo.db.version + " to version " + dbInfo.version + ".");
          }
          dbInfo.version = dbInfo.db.version;
        }
        if (isUpgrade || isNewStore) {
          if (isNewStore) {
            var incVersion = dbInfo.db.version + 1;
            if (incVersion > dbInfo.version) {
              dbInfo.version = incVersion;
            }
          }
          return true;
        }
        return false;
      }
      function _encodeBlob(blob) {
        return new Promise$1(function(resolve, reject) {
          var reader = new FileReader();
          reader.onerror = reject;
          reader.onloadend = function(e) {
            var base64 = btoa(e.target.result || "");
            resolve({
              __local_forage_encoded_blob: true,
              data: base64,
              type: blob.type
            });
          };
          reader.readAsBinaryString(blob);
        });
      }
      function _decodeBlob(encodedBlob) {
        var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
        return createBlob([arrayBuff], { type: encodedBlob.type });
      }
      function _isEncodedBlob(value) {
        return value && value.__local_forage_encoded_blob;
      }
      function _fullyReady(callback) {
        var self2 = this;
        var promise = self2._initReady().then(function() {
          var dbContext = dbContexts[self2._dbInfo.name];
          if (dbContext && dbContext.dbReady) {
            return dbContext.dbReady;
          }
        });
        executeTwoCallbacks(promise, callback, callback);
        return promise;
      }
      function _tryReconnect(dbInfo) {
        _deferReadiness(dbInfo);
        var dbContext = dbContexts[dbInfo.name];
        var forages = dbContext.forages;
        for (var i = 0; i < forages.length; i++) {
          var forage = forages[i];
          if (forage._dbInfo.db) {
            forage._dbInfo.db.close();
            forage._dbInfo.db = null;
          }
        }
        dbInfo.db = null;
        return _getOriginalConnection(dbInfo).then(function(db) {
          dbInfo.db = db;
          if (_isUpgradeNeeded(dbInfo)) {
            return _getUpgradedConnection(dbInfo);
          }
          return db;
        }).then(function(db) {
          dbInfo.db = dbContext.db = db;
          for (var i2 = 0; i2 < forages.length; i2++) {
            forages[i2]._dbInfo.db = db;
          }
        })["catch"](function(err) {
          _rejectReadiness(dbInfo, err);
          throw err;
        });
      }
      function createTransaction(dbInfo, mode, callback, retries) {
        if (retries === void 0) {
          retries = 1;
        }
        try {
          var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
          callback(null, tx);
        } catch (err) {
          if (retries > 0 && (!dbInfo.db || err.name === "InvalidStateError" || err.name === "NotFoundError")) {
            return Promise$1.resolve().then(function() {
              if (!dbInfo.db || err.name === "NotFoundError" && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                if (dbInfo.db) {
                  dbInfo.version = dbInfo.db.version + 1;
                }
                return _getUpgradedConnection(dbInfo);
              }
            }).then(function() {
              return _tryReconnect(dbInfo).then(function() {
                createTransaction(dbInfo, mode, callback, retries - 1);
              });
            })["catch"](callback);
          }
          callback(err);
        }
      }
      function createDbContext() {
        return {
          forages: [],
          db: null,
          dbReady: null,
          deferredOperations: []
        };
      }
      function _initStorage(options) {
        var self2 = this;
        var dbInfo = {
          db: null
        };
        if (options) {
          for (var i in options) {
            dbInfo[i] = options[i];
          }
        }
        var dbContext = dbContexts[dbInfo.name];
        if (!dbContext) {
          dbContext = createDbContext();
          dbContexts[dbInfo.name] = dbContext;
        }
        dbContext.forages.push(self2);
        if (!self2._initReady) {
          self2._initReady = self2.ready;
          self2.ready = _fullyReady;
        }
        var initPromises = [];
        function ignoreErrors() {
          return Promise$1.resolve();
        }
        for (var j = 0; j < dbContext.forages.length; j++) {
          var forage = dbContext.forages[j];
          if (forage !== self2) {
            initPromises.push(forage._initReady()["catch"](ignoreErrors));
          }
        }
        var forages = dbContext.forages.slice(0);
        return Promise$1.all(initPromises).then(function() {
          dbInfo.db = dbContext.db;
          return _getOriginalConnection(dbInfo);
        }).then(function(db) {
          dbInfo.db = db;
          if (_isUpgradeNeeded(dbInfo, self2._defaultConfig.version)) {
            return _getUpgradedConnection(dbInfo);
          }
          return db;
        }).then(function(db) {
          dbInfo.db = dbContext.db = db;
          self2._dbInfo = dbInfo;
          for (var k = 0; k < forages.length; k++) {
            var forage2 = forages[k];
            if (forage2 !== self2) {
              forage2._dbInfo.db = dbInfo.db;
              forage2._dbInfo.version = dbInfo.version;
            }
          }
        });
      }
      function getItem(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store2 = transaction.objectStore(self2._dbInfo.storeName);
                var req = store2.get(key2);
                req.onsuccess = function() {
                  var value = req.result;
                  if (value === void 0) {
                    value = null;
                  }
                  if (_isEncodedBlob(value)) {
                    value = _decodeBlob(value);
                  }
                  resolve(value);
                };
                req.onerror = function() {
                  reject(req.error);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function iterate(iterator, callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store2 = transaction.objectStore(self2._dbInfo.storeName);
                var req = store2.openCursor();
                var iterationNumber = 1;
                req.onsuccess = function() {
                  var cursor = req.result;
                  if (cursor) {
                    var value = cursor.value;
                    if (_isEncodedBlob(value)) {
                      value = _decodeBlob(value);
                    }
                    var result = iterator(value, cursor.key, iterationNumber++);
                    if (result !== void 0) {
                      resolve(result);
                    } else {
                      cursor["continue"]();
                    }
                  } else {
                    resolve();
                  }
                };
                req.onerror = function() {
                  reject(req.error);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function setItem(key2, value, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          var dbInfo;
          self2.ready().then(function() {
            dbInfo = self2._dbInfo;
            if (toString.call(value) === "[object Blob]") {
              return _checkBlobSupport(dbInfo.db).then(function(blobSupport) {
                if (blobSupport) {
                  return value;
                }
                return _encodeBlob(value);
              });
            }
            return value;
          }).then(function(value2) {
            createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store2 = transaction.objectStore(self2._dbInfo.storeName);
                if (value2 === null) {
                  value2 = void 0;
                }
                var req = store2.put(value2, key2);
                transaction.oncomplete = function() {
                  if (value2 === void 0) {
                    value2 = null;
                  }
                  resolve(value2);
                };
                transaction.onabort = transaction.onerror = function() {
                  var err2 = req.error ? req.error : req.transaction.error;
                  reject(err2);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function removeItem(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store2 = transaction.objectStore(self2._dbInfo.storeName);
                var req = store2["delete"](key2);
                transaction.oncomplete = function() {
                  resolve();
                };
                transaction.onerror = function() {
                  reject(req.error);
                };
                transaction.onabort = function() {
                  var err2 = req.error ? req.error : req.transaction.error;
                  reject(err2);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function clear(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store2 = transaction.objectStore(self2._dbInfo.storeName);
                var req = store2.clear();
                transaction.oncomplete = function() {
                  resolve();
                };
                transaction.onabort = transaction.onerror = function() {
                  var err2 = req.error ? req.error : req.transaction.error;
                  reject(err2);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function length(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store2 = transaction.objectStore(self2._dbInfo.storeName);
                var req = store2.count();
                req.onsuccess = function() {
                  resolve(req.result);
                };
                req.onerror = function() {
                  reject(req.error);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function key(n, callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          if (n < 0) {
            resolve(null);
            return;
          }
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store2 = transaction.objectStore(self2._dbInfo.storeName);
                var advanced = false;
                var req = store2.openKeyCursor();
                req.onsuccess = function() {
                  var cursor = req.result;
                  if (!cursor) {
                    resolve(null);
                    return;
                  }
                  if (n === 0) {
                    resolve(cursor.key);
                  } else {
                    if (!advanced) {
                      advanced = true;
                      cursor.advance(n);
                    } else {
                      resolve(cursor.key);
                    }
                  }
                };
                req.onerror = function() {
                  reject(req.error);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function keys(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store2 = transaction.objectStore(self2._dbInfo.storeName);
                var req = store2.openKeyCursor();
                var keys2 = [];
                req.onsuccess = function() {
                  var cursor = req.result;
                  if (!cursor) {
                    resolve(keys2);
                    return;
                  }
                  keys2.push(cursor.key);
                  cursor["continue"]();
                };
                req.onerror = function() {
                  reject(req.error);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function dropInstance(options, callback) {
        callback = getCallback.apply(this, arguments);
        var currentConfig = this.config();
        options = typeof options !== "function" && options || {};
        if (!options.name) {
          options.name = options.name || currentConfig.name;
          options.storeName = options.storeName || currentConfig.storeName;
        }
        var self2 = this;
        var promise;
        if (!options.name) {
          promise = Promise$1.reject("Invalid arguments");
        } else {
          var isCurrentDb = options.name === currentConfig.name && self2._dbInfo.db;
          var dbPromise = isCurrentDb ? Promise$1.resolve(self2._dbInfo.db) : _getOriginalConnection(options).then(function(db) {
            var dbContext = dbContexts[options.name];
            var forages = dbContext.forages;
            dbContext.db = db;
            for (var i = 0; i < forages.length; i++) {
              forages[i]._dbInfo.db = db;
            }
            return db;
          });
          if (!options.storeName) {
            promise = dbPromise.then(function(db) {
              _deferReadiness(options);
              var dbContext = dbContexts[options.name];
              var forages = dbContext.forages;
              db.close();
              for (var i = 0; i < forages.length; i++) {
                var forage = forages[i];
                forage._dbInfo.db = null;
              }
              var dropDBPromise = new Promise$1(function(resolve, reject) {
                var req = idb.deleteDatabase(options.name);
                req.onerror = function() {
                  var db2 = req.result;
                  if (db2) {
                    db2.close();
                  }
                  reject(req.error);
                };
                req.onblocked = function() {
                  console.warn('dropInstance blocked for database "' + options.name + '" until all open connections are closed');
                };
                req.onsuccess = function() {
                  var db2 = req.result;
                  if (db2) {
                    db2.close();
                  }
                  resolve(db2);
                };
              });
              return dropDBPromise.then(function(db2) {
                dbContext.db = db2;
                for (var i2 = 0; i2 < forages.length; i2++) {
                  var _forage = forages[i2];
                  _advanceReadiness(_forage._dbInfo);
                }
              })["catch"](function(err) {
                (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function() {
                });
                throw err;
              });
            });
          } else {
            promise = dbPromise.then(function(db) {
              if (!db.objectStoreNames.contains(options.storeName)) {
                return;
              }
              var newVersion = db.version + 1;
              _deferReadiness(options);
              var dbContext = dbContexts[options.name];
              var forages = dbContext.forages;
              db.close();
              for (var i = 0; i < forages.length; i++) {
                var forage = forages[i];
                forage._dbInfo.db = null;
                forage._dbInfo.version = newVersion;
              }
              var dropObjectPromise = new Promise$1(function(resolve, reject) {
                var req = idb.open(options.name, newVersion);
                req.onerror = function(err) {
                  var db2 = req.result;
                  db2.close();
                  reject(err);
                };
                req.onupgradeneeded = function() {
                  var db2 = req.result;
                  db2.deleteObjectStore(options.storeName);
                };
                req.onsuccess = function() {
                  var db2 = req.result;
                  db2.close();
                  resolve(db2);
                };
              });
              return dropObjectPromise.then(function(db2) {
                dbContext.db = db2;
                for (var j = 0; j < forages.length; j++) {
                  var _forage2 = forages[j];
                  _forage2._dbInfo.db = db2;
                  _advanceReadiness(_forage2._dbInfo);
                }
              })["catch"](function(err) {
                (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function() {
                });
                throw err;
              });
            });
          }
        }
        executeCallback(promise, callback);
        return promise;
      }
      var asyncStorage = {
        _driver: "asyncStorage",
        _initStorage,
        _support: isIndexedDBValid(),
        iterate,
        getItem,
        setItem,
        removeItem,
        clear,
        length,
        key,
        keys,
        dropInstance
      };
      function isWebSQLValid() {
        return typeof openDatabase === "function";
      }
      var BASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      var BLOB_TYPE_PREFIX = "~~local_forage_type~";
      var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;
      var SERIALIZED_MARKER = "__lfsc__:";
      var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;
      var TYPE_ARRAYBUFFER = "arbf";
      var TYPE_BLOB = "blob";
      var TYPE_INT8ARRAY = "si08";
      var TYPE_UINT8ARRAY = "ui08";
      var TYPE_UINT8CLAMPEDARRAY = "uic8";
      var TYPE_INT16ARRAY = "si16";
      var TYPE_INT32ARRAY = "si32";
      var TYPE_UINT16ARRAY = "ur16";
      var TYPE_UINT32ARRAY = "ui32";
      var TYPE_FLOAT32ARRAY = "fl32";
      var TYPE_FLOAT64ARRAY = "fl64";
      var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;
      var toString$1 = Object.prototype.toString;
      function stringToBuffer(serializedString) {
        var bufferLength = serializedString.length * 0.75;
        var len = serializedString.length;
        var i;
        var p = 0;
        var encoded1, encoded2, encoded3, encoded4;
        if (serializedString[serializedString.length - 1] === "=") {
          bufferLength--;
          if (serializedString[serializedString.length - 2] === "=") {
            bufferLength--;
          }
        }
        var buffer = new ArrayBuffer(bufferLength);
        var bytes = new Uint8Array(buffer);
        for (i = 0; i < len; i += 4) {
          encoded1 = BASE_CHARS.indexOf(serializedString[i]);
          encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
          encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
          encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);
          bytes[p++] = encoded1 << 2 | encoded2 >> 4;
          bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
          bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
        }
        return buffer;
      }
      function bufferToString(buffer) {
        var bytes = new Uint8Array(buffer);
        var base64String = "";
        var i;
        for (i = 0; i < bytes.length; i += 3) {
          base64String += BASE_CHARS[bytes[i] >> 2];
          base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
          base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
          base64String += BASE_CHARS[bytes[i + 2] & 63];
        }
        if (bytes.length % 3 === 2) {
          base64String = base64String.substring(0, base64String.length - 1) + "=";
        } else if (bytes.length % 3 === 1) {
          base64String = base64String.substring(0, base64String.length - 2) + "==";
        }
        return base64String;
      }
      function serialize(value, callback) {
        var valueType = "";
        if (value) {
          valueType = toString$1.call(value);
        }
        if (value && (valueType === "[object ArrayBuffer]" || value.buffer && toString$1.call(value.buffer) === "[object ArrayBuffer]")) {
          var buffer;
          var marker = SERIALIZED_MARKER;
          if (value instanceof ArrayBuffer) {
            buffer = value;
            marker += TYPE_ARRAYBUFFER;
          } else {
            buffer = value.buffer;
            if (valueType === "[object Int8Array]") {
              marker += TYPE_INT8ARRAY;
            } else if (valueType === "[object Uint8Array]") {
              marker += TYPE_UINT8ARRAY;
            } else if (valueType === "[object Uint8ClampedArray]") {
              marker += TYPE_UINT8CLAMPEDARRAY;
            } else if (valueType === "[object Int16Array]") {
              marker += TYPE_INT16ARRAY;
            } else if (valueType === "[object Uint16Array]") {
              marker += TYPE_UINT16ARRAY;
            } else if (valueType === "[object Int32Array]") {
              marker += TYPE_INT32ARRAY;
            } else if (valueType === "[object Uint32Array]") {
              marker += TYPE_UINT32ARRAY;
            } else if (valueType === "[object Float32Array]") {
              marker += TYPE_FLOAT32ARRAY;
            } else if (valueType === "[object Float64Array]") {
              marker += TYPE_FLOAT64ARRAY;
            } else {
              callback(new Error("Failed to get type for BinaryArray"));
            }
          }
          callback(marker + bufferToString(buffer));
        } else if (valueType === "[object Blob]") {
          var fileReader = new FileReader();
          fileReader.onload = function() {
            var str = BLOB_TYPE_PREFIX + value.type + "~" + bufferToString(this.result);
            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
          };
          fileReader.readAsArrayBuffer(value);
        } else {
          try {
            callback(JSON.stringify(value));
          } catch (e) {
            console.error("Couldn't convert value into a JSON string: ", value);
            callback(null, e);
          }
        }
      }
      function deserialize(value) {
        if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
          return JSON.parse(value);
        }
        var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
        var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);
        var blobType;
        if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
          var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
          blobType = matcher[1];
          serializedString = serializedString.substring(matcher[0].length);
        }
        var buffer = stringToBuffer(serializedString);
        switch (type) {
          case TYPE_ARRAYBUFFER:
            return buffer;
          case TYPE_BLOB:
            return createBlob([buffer], { type: blobType });
          case TYPE_INT8ARRAY:
            return new Int8Array(buffer);
          case TYPE_UINT8ARRAY:
            return new Uint8Array(buffer);
          case TYPE_UINT8CLAMPEDARRAY:
            return new Uint8ClampedArray(buffer);
          case TYPE_INT16ARRAY:
            return new Int16Array(buffer);
          case TYPE_UINT16ARRAY:
            return new Uint16Array(buffer);
          case TYPE_INT32ARRAY:
            return new Int32Array(buffer);
          case TYPE_UINT32ARRAY:
            return new Uint32Array(buffer);
          case TYPE_FLOAT32ARRAY:
            return new Float32Array(buffer);
          case TYPE_FLOAT64ARRAY:
            return new Float64Array(buffer);
          default:
            throw new Error("Unkown type: " + type);
        }
      }
      var localforageSerializer = {
        serialize,
        deserialize,
        stringToBuffer,
        bufferToString
      };
      function createDbTable(t, dbInfo, callback, errorCallback) {
        t.executeSql("CREATE TABLE IF NOT EXISTS " + dbInfo.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], callback, errorCallback);
      }
      function _initStorage$1(options) {
        var self2 = this;
        var dbInfo = {
          db: null
        };
        if (options) {
          for (var i in options) {
            dbInfo[i] = typeof options[i] !== "string" ? options[i].toString() : options[i];
          }
        }
        var dbInfoPromise = new Promise$1(function(resolve, reject) {
          try {
            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
          } catch (e) {
            return reject(e);
          }
          dbInfo.db.transaction(function(t) {
            createDbTable(t, dbInfo, function() {
              self2._dbInfo = dbInfo;
              resolve();
            }, function(t2, error) {
              reject(error);
            });
          }, reject);
        });
        dbInfo.serializer = localforageSerializer;
        return dbInfoPromise;
      }
      function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
        t.executeSql(sqlStatement, args, callback, function(t2, error) {
          if (error.code === error.SYNTAX_ERR) {
            t2.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [dbInfo.storeName], function(t3, results) {
              if (!results.rows.length) {
                createDbTable(t3, dbInfo, function() {
                  t3.executeSql(sqlStatement, args, callback, errorCallback);
                }, errorCallback);
              } else {
                errorCallback(t3, error);
              }
            }, errorCallback);
          } else {
            errorCallback(t2, error);
          }
        }, errorCallback);
      }
      function getItem$1(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t) {
              tryExecuteSql(t, dbInfo, "SELECT * FROM " + dbInfo.storeName + " WHERE key = ? LIMIT 1", [key2], function(t2, results) {
                var result = results.rows.length ? results.rows.item(0).value : null;
                if (result) {
                  result = dbInfo.serializer.deserialize(result);
                }
                resolve(result);
              }, function(t2, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function iterate$1(iterator, callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t) {
              tryExecuteSql(t, dbInfo, "SELECT * FROM " + dbInfo.storeName, [], function(t2, results) {
                var rows = results.rows;
                var length2 = rows.length;
                for (var i = 0; i < length2; i++) {
                  var item = rows.item(i);
                  var result = item.value;
                  if (result) {
                    result = dbInfo.serializer.deserialize(result);
                  }
                  result = iterator(result, item.key, i + 1);
                  if (result !== void 0) {
                    resolve(result);
                    return;
                  }
                }
                resolve();
              }, function(t2, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function _setItem(key2, value, callback, retriesLeft) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            if (value === void 0) {
              value = null;
            }
            var originalValue = value;
            var dbInfo = self2._dbInfo;
            dbInfo.serializer.serialize(value, function(value2, error) {
              if (error) {
                reject(error);
              } else {
                dbInfo.db.transaction(function(t) {
                  tryExecuteSql(t, dbInfo, "INSERT OR REPLACE INTO " + dbInfo.storeName + " (key, value) VALUES (?, ?)", [key2, value2], function() {
                    resolve(originalValue);
                  }, function(t2, error2) {
                    reject(error2);
                  });
                }, function(sqlError) {
                  if (sqlError.code === sqlError.QUOTA_ERR) {
                    if (retriesLeft > 0) {
                      resolve(_setItem.apply(self2, [key2, originalValue, callback, retriesLeft - 1]));
                      return;
                    }
                    reject(sqlError);
                  }
                });
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function setItem$1(key2, value, callback) {
        return _setItem.apply(this, [key2, value, callback, 1]);
      }
      function removeItem$1(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t) {
              tryExecuteSql(t, dbInfo, "DELETE FROM " + dbInfo.storeName + " WHERE key = ?", [key2], function() {
                resolve();
              }, function(t2, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function clear$1(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t) {
              tryExecuteSql(t, dbInfo, "DELETE FROM " + dbInfo.storeName, [], function() {
                resolve();
              }, function(t2, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function length$1(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t) {
              tryExecuteSql(t, dbInfo, "SELECT COUNT(key) as c FROM " + dbInfo.storeName, [], function(t2, results) {
                var result = results.rows.item(0).c;
                resolve(result);
              }, function(t2, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function key$1(n, callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t) {
              tryExecuteSql(t, dbInfo, "SELECT key FROM " + dbInfo.storeName + " WHERE id = ? LIMIT 1", [n + 1], function(t2, results) {
                var result = results.rows.length ? results.rows.item(0).key : null;
                resolve(result);
              }, function(t2, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function keys$1(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t) {
              tryExecuteSql(t, dbInfo, "SELECT key FROM " + dbInfo.storeName, [], function(t2, results) {
                var keys2 = [];
                for (var i = 0; i < results.rows.length; i++) {
                  keys2.push(results.rows.item(i).key);
                }
                resolve(keys2);
              }, function(t2, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function getAllStoreNames(db) {
        return new Promise$1(function(resolve, reject) {
          db.transaction(function(t) {
            t.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(t2, results) {
              var storeNames = [];
              for (var i = 0; i < results.rows.length; i++) {
                storeNames.push(results.rows.item(i).name);
              }
              resolve({
                db,
                storeNames
              });
            }, function(t2, error) {
              reject(error);
            });
          }, function(sqlError) {
            reject(sqlError);
          });
        });
      }
      function dropInstance$1(options, callback) {
        callback = getCallback.apply(this, arguments);
        var currentConfig = this.config();
        options = typeof options !== "function" && options || {};
        if (!options.name) {
          options.name = options.name || currentConfig.name;
          options.storeName = options.storeName || currentConfig.storeName;
        }
        var self2 = this;
        var promise;
        if (!options.name) {
          promise = Promise$1.reject("Invalid arguments");
        } else {
          promise = new Promise$1(function(resolve) {
            var db;
            if (options.name === currentConfig.name) {
              db = self2._dbInfo.db;
            } else {
              db = openDatabase(options.name, "", "", 0);
            }
            if (!options.storeName) {
              resolve(getAllStoreNames(db));
            } else {
              resolve({
                db,
                storeNames: [options.storeName]
              });
            }
          }).then(function(operationInfo) {
            return new Promise$1(function(resolve, reject) {
              operationInfo.db.transaction(function(t) {
                function dropTable(storeName) {
                  return new Promise$1(function(resolve2, reject2) {
                    t.executeSql("DROP TABLE IF EXISTS " + storeName, [], function() {
                      resolve2();
                    }, function(t2, error) {
                      reject2(error);
                    });
                  });
                }
                var operations = [];
                for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                  operations.push(dropTable(operationInfo.storeNames[i]));
                }
                Promise$1.all(operations).then(function() {
                  resolve();
                })["catch"](function(e) {
                  reject(e);
                });
              }, function(sqlError) {
                reject(sqlError);
              });
            });
          });
        }
        executeCallback(promise, callback);
        return promise;
      }
      var webSQLStorage = {
        _driver: "webSQLStorage",
        _initStorage: _initStorage$1,
        _support: isWebSQLValid(),
        iterate: iterate$1,
        getItem: getItem$1,
        setItem: setItem$1,
        removeItem: removeItem$1,
        clear: clear$1,
        length: length$1,
        key: key$1,
        keys: keys$1,
        dropInstance: dropInstance$1
      };
      function isLocalStorageValid() {
        try {
          return typeof localStorage !== "undefined" && "setItem" in localStorage && !!localStorage.setItem;
        } catch (e) {
          return false;
        }
      }
      function _getKeyPrefix(options, defaultConfig) {
        var keyPrefix = options.name + "/";
        if (options.storeName !== defaultConfig.storeName) {
          keyPrefix += options.storeName + "/";
        }
        return keyPrefix;
      }
      function checkIfLocalStorageThrows() {
        var localStorageTestKey = "_localforage_support_test";
        try {
          localStorage.setItem(localStorageTestKey, true);
          localStorage.removeItem(localStorageTestKey);
          return false;
        } catch (e) {
          return true;
        }
      }
      function _isLocalStorageUsable() {
        return !checkIfLocalStorageThrows() || localStorage.length > 0;
      }
      function _initStorage$2(options) {
        var self2 = this;
        var dbInfo = {};
        if (options) {
          for (var i in options) {
            dbInfo[i] = options[i];
          }
        }
        dbInfo.keyPrefix = _getKeyPrefix(options, self2._defaultConfig);
        if (!_isLocalStorageUsable()) {
          return Promise$1.reject();
        }
        self2._dbInfo = dbInfo;
        dbInfo.serializer = localforageSerializer;
        return Promise$1.resolve();
      }
      function clear$2(callback) {
        var self2 = this;
        var promise = self2.ready().then(function() {
          var keyPrefix = self2._dbInfo.keyPrefix;
          for (var i = localStorage.length - 1; i >= 0; i--) {
            var key2 = localStorage.key(i);
            if (key2.indexOf(keyPrefix) === 0) {
              localStorage.removeItem(key2);
            }
          }
        });
        executeCallback(promise, callback);
        return promise;
      }
      function getItem$2(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = self2.ready().then(function() {
          var dbInfo = self2._dbInfo;
          var result = localStorage.getItem(dbInfo.keyPrefix + key2);
          if (result) {
            result = dbInfo.serializer.deserialize(result);
          }
          return result;
        });
        executeCallback(promise, callback);
        return promise;
      }
      function iterate$2(iterator, callback) {
        var self2 = this;
        var promise = self2.ready().then(function() {
          var dbInfo = self2._dbInfo;
          var keyPrefix = dbInfo.keyPrefix;
          var keyPrefixLength = keyPrefix.length;
          var length2 = localStorage.length;
          var iterationNumber = 1;
          for (var i = 0; i < length2; i++) {
            var key2 = localStorage.key(i);
            if (key2.indexOf(keyPrefix) !== 0) {
              continue;
            }
            var value = localStorage.getItem(key2);
            if (value) {
              value = dbInfo.serializer.deserialize(value);
            }
            value = iterator(value, key2.substring(keyPrefixLength), iterationNumber++);
            if (value !== void 0) {
              return value;
            }
          }
        });
        executeCallback(promise, callback);
        return promise;
      }
      function key$2(n, callback) {
        var self2 = this;
        var promise = self2.ready().then(function() {
          var dbInfo = self2._dbInfo;
          var result;
          try {
            result = localStorage.key(n);
          } catch (error) {
            result = null;
          }
          if (result) {
            result = result.substring(dbInfo.keyPrefix.length);
          }
          return result;
        });
        executeCallback(promise, callback);
        return promise;
      }
      function keys$2(callback) {
        var self2 = this;
        var promise = self2.ready().then(function() {
          var dbInfo = self2._dbInfo;
          var length2 = localStorage.length;
          var keys2 = [];
          for (var i = 0; i < length2; i++) {
            var itemKey = localStorage.key(i);
            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
              keys2.push(itemKey.substring(dbInfo.keyPrefix.length));
            }
          }
          return keys2;
        });
        executeCallback(promise, callback);
        return promise;
      }
      function length$2(callback) {
        var self2 = this;
        var promise = self2.keys().then(function(keys2) {
          return keys2.length;
        });
        executeCallback(promise, callback);
        return promise;
      }
      function removeItem$2(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = self2.ready().then(function() {
          var dbInfo = self2._dbInfo;
          localStorage.removeItem(dbInfo.keyPrefix + key2);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function setItem$2(key2, value, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = self2.ready().then(function() {
          if (value === void 0) {
            value = null;
          }
          var originalValue = value;
          return new Promise$1(function(resolve, reject) {
            var dbInfo = self2._dbInfo;
            dbInfo.serializer.serialize(value, function(value2, error) {
              if (error) {
                reject(error);
              } else {
                try {
                  localStorage.setItem(dbInfo.keyPrefix + key2, value2);
                  resolve(originalValue);
                } catch (e) {
                  if (e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED") {
                    reject(e);
                  }
                  reject(e);
                }
              }
            });
          });
        });
        executeCallback(promise, callback);
        return promise;
      }
      function dropInstance$2(options, callback) {
        callback = getCallback.apply(this, arguments);
        options = typeof options !== "function" && options || {};
        if (!options.name) {
          var currentConfig = this.config();
          options.name = options.name || currentConfig.name;
          options.storeName = options.storeName || currentConfig.storeName;
        }
        var self2 = this;
        var promise;
        if (!options.name) {
          promise = Promise$1.reject("Invalid arguments");
        } else {
          promise = new Promise$1(function(resolve) {
            if (!options.storeName) {
              resolve(options.name + "/");
            } else {
              resolve(_getKeyPrefix(options, self2._defaultConfig));
            }
          }).then(function(keyPrefix) {
            for (var i = localStorage.length - 1; i >= 0; i--) {
              var key2 = localStorage.key(i);
              if (key2.indexOf(keyPrefix) === 0) {
                localStorage.removeItem(key2);
              }
            }
          });
        }
        executeCallback(promise, callback);
        return promise;
      }
      var localStorageWrapper = {
        _driver: "localStorageWrapper",
        _initStorage: _initStorage$2,
        _support: isLocalStorageValid(),
        iterate: iterate$2,
        getItem: getItem$2,
        setItem: setItem$2,
        removeItem: removeItem$2,
        clear: clear$2,
        length: length$2,
        key: key$2,
        keys: keys$2,
        dropInstance: dropInstance$2
      };
      var sameValue = function sameValue2(x, y) {
        return x === y || typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y);
      };
      var includes = function includes2(array, searchElement) {
        var len = array.length;
        var i = 0;
        while (i < len) {
          if (sameValue(array[i], searchElement)) {
            return true;
          }
          i++;
        }
        return false;
      };
      var isArray2 = Array.isArray || function(arg) {
        return Object.prototype.toString.call(arg) === "[object Array]";
      };
      var DefinedDrivers = {};
      var DriverSupport = {};
      var DefaultDrivers = {
        INDEXEDDB: asyncStorage,
        WEBSQL: webSQLStorage,
        LOCALSTORAGE: localStorageWrapper
      };
      var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];
      var OptionalDriverMethods = ["dropInstance"];
      var LibraryMethods = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(OptionalDriverMethods);
      var DefaultConfig = {
        description: "",
        driver: DefaultDriverOrder.slice(),
        name: "localforage",
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function callWhenReady(localForageInstance, libraryMethod) {
        localForageInstance[libraryMethod] = function() {
          var _args = arguments;
          return localForageInstance.ready().then(function() {
            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
          });
        };
      }
      function extend() {
        for (var i = 1; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            for (var _key in arg) {
              if (arg.hasOwnProperty(_key)) {
                if (isArray2(arg[_key])) {
                  arguments[0][_key] = arg[_key].slice();
                } else {
                  arguments[0][_key] = arg[_key];
                }
              }
            }
          }
        }
        return arguments[0];
      }
      var LocalForage = function() {
        function LocalForage2(options) {
          _classCallCheck(this, LocalForage2);
          for (var driverTypeKey in DefaultDrivers) {
            if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
              var driver = DefaultDrivers[driverTypeKey];
              var driverName = driver._driver;
              this[driverTypeKey] = driverName;
              if (!DefinedDrivers[driverName]) {
                this.defineDriver(driver);
              }
            }
          }
          this._defaultConfig = extend({}, DefaultConfig);
          this._config = extend({}, this._defaultConfig, options);
          this._driverSet = null;
          this._initDriver = null;
          this._ready = false;
          this._dbInfo = null;
          this._wrapLibraryMethodsWithReady();
          this.setDriver(this._config.driver)["catch"](function() {
          });
        }
        LocalForage2.prototype.config = function config(options) {
          if ((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object") {
            if (this._ready) {
              return new Error("Can't call config() after localforage has been used.");
            }
            for (var i in options) {
              if (i === "storeName") {
                options[i] = options[i].replace(/\W/g, "_");
              }
              if (i === "version" && typeof options[i] !== "number") {
                return new Error("Database version must be a number.");
              }
              this._config[i] = options[i];
            }
            if ("driver" in options && options.driver) {
              return this.setDriver(this._config.driver);
            }
            return true;
          } else if (typeof options === "string") {
            return this._config[options];
          } else {
            return this._config;
          }
        };
        LocalForage2.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
          var promise = new Promise$1(function(resolve, reject) {
            try {
              var driverName = driverObject._driver;
              var complianceError = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!driverObject._driver) {
                reject(complianceError);
                return;
              }
              var driverMethods = LibraryMethods.concat("_initStorage");
              for (var i = 0, len = driverMethods.length; i < len; i++) {
                var driverMethodName = driverMethods[i];
                var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== "function") {
                  reject(complianceError);
                  return;
                }
              }
              var configureMissingMethods = function configureMissingMethods2() {
                var methodNotImplementedFactory = function methodNotImplementedFactory2(methodName) {
                  return function() {
                    var error = new Error("Method " + methodName + " is not implemented by the current driver");
                    var promise2 = Promise$1.reject(error);
                    executeCallback(promise2, arguments[arguments.length - 1]);
                    return promise2;
                  };
                };
                for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                  var optionalDriverMethod = OptionalDriverMethods[_i];
                  if (!driverObject[optionalDriverMethod]) {
                    driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                  }
                }
              };
              configureMissingMethods();
              var setDriverSupport = function setDriverSupport2(support) {
                if (DefinedDrivers[driverName]) {
                  console.info("Redefining LocalForage driver: " + driverName);
                }
                DefinedDrivers[driverName] = driverObject;
                DriverSupport[driverName] = support;
                resolve();
              };
              if ("_support" in driverObject) {
                if (driverObject._support && typeof driverObject._support === "function") {
                  driverObject._support().then(setDriverSupport, reject);
                } else {
                  setDriverSupport(!!driverObject._support);
                }
              } else {
                setDriverSupport(true);
              }
            } catch (e) {
              reject(e);
            }
          });
          executeTwoCallbacks(promise, callback, errorCallback);
          return promise;
        };
        LocalForage2.prototype.driver = function driver() {
          return this._driver || null;
        };
        LocalForage2.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
          var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error("Driver not found."));
          executeTwoCallbacks(getDriverPromise, callback, errorCallback);
          return getDriverPromise;
        };
        LocalForage2.prototype.getSerializer = function getSerializer(callback) {
          var serializerPromise = Promise$1.resolve(localforageSerializer);
          executeTwoCallbacks(serializerPromise, callback);
          return serializerPromise;
        };
        LocalForage2.prototype.ready = function ready(callback) {
          var self2 = this;
          var promise = self2._driverSet.then(function() {
            if (self2._ready === null) {
              self2._ready = self2._initDriver();
            }
            return self2._ready;
          });
          executeTwoCallbacks(promise, callback, callback);
          return promise;
        };
        LocalForage2.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
          var self2 = this;
          if (!isArray2(drivers)) {
            drivers = [drivers];
          }
          var supportedDrivers = this._getSupportedDrivers(drivers);
          function setDriverToConfig() {
            self2._config.driver = self2.driver();
          }
          function extendSelfWithDriver(driver) {
            self2._extend(driver);
            setDriverToConfig();
            self2._ready = self2._initStorage(self2._config);
            return self2._ready;
          }
          function initDriver(supportedDrivers2) {
            return function() {
              var currentDriverIndex = 0;
              function driverPromiseLoop() {
                while (currentDriverIndex < supportedDrivers2.length) {
                  var driverName = supportedDrivers2[currentDriverIndex];
                  currentDriverIndex++;
                  self2._dbInfo = null;
                  self2._ready = null;
                  return self2.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                }
                setDriverToConfig();
                var error = new Error("No available storage method found.");
                self2._driverSet = Promise$1.reject(error);
                return self2._driverSet;
              }
              return driverPromiseLoop();
            };
          }
          var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function() {
            return Promise$1.resolve();
          }) : Promise$1.resolve();
          this._driverSet = oldDriverSetDone.then(function() {
            var driverName = supportedDrivers[0];
            self2._dbInfo = null;
            self2._ready = null;
            return self2.getDriver(driverName).then(function(driver) {
              self2._driver = driver._driver;
              setDriverToConfig();
              self2._wrapLibraryMethodsWithReady();
              self2._initDriver = initDriver(supportedDrivers);
            });
          })["catch"](function() {
            setDriverToConfig();
            var error = new Error("No available storage method found.");
            self2._driverSet = Promise$1.reject(error);
            return self2._driverSet;
          });
          executeTwoCallbacks(this._driverSet, callback, errorCallback);
          return this._driverSet;
        };
        LocalForage2.prototype.supports = function supports(driverName) {
          return !!DriverSupport[driverName];
        };
        LocalForage2.prototype._extend = function _extend(libraryMethodsAndProperties) {
          extend(this, libraryMethodsAndProperties);
        };
        LocalForage2.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
          var supportedDrivers = [];
          for (var i = 0, len = drivers.length; i < len; i++) {
            var driverName = drivers[i];
            if (this.supports(driverName)) {
              supportedDrivers.push(driverName);
            }
          }
          return supportedDrivers;
        };
        LocalForage2.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
          for (var i = 0, len = LibraryMethods.length; i < len; i++) {
            callWhenReady(this, LibraryMethods[i]);
          }
        };
        LocalForage2.prototype.createInstance = function createInstance(options) {
          return new LocalForage2(options);
        };
        return LocalForage2;
      }();
      var localforage_js = new LocalForage();
      module2.exports = localforage_js;
    }, { "3": 3 }] }, {}, [4])(4);
  });
})(localforage$1);
const localforage = localforage$1.exports;
const cache$2 = localforage.createInstance({
  name: "contexts"
});
const debouncer$3 = new Debouncer(800);
const find$1 = (state, id) => {
  return state.contexts.all.find((context) => context.id === id);
};
const contextsCachingPlugin = (store2) => {
  store2.subscribe(({ type, payload }, state) => {
    switch (type) {
      case ADD_CONTEXT:
        const found = find$1(state, payload.id);
        if (found) {
          debouncer$3.debounce(found.id, async () => {
            cache$2.setItem(found.id, unwrap(found));
          });
        }
        break;
      case REMOVE_CONTEXT:
        cache$2.removeItem(payload.id);
        break;
      case SETTINGS_LOADED:
        cache$2.keys().then((ids) => Promise.all(ids.map((id) => cache$2.getItem(id)))).then((contexts) => store2.dispatch(LOAD_CONTEXTS, contexts));
        break;
    }
  });
};
const cache$1 = localforage.createInstance({
  name: "firebase/documents"
});
const debouncer$2 = new Debouncer(800);
const find = (state, id) => {
  return state.documents.all.find((doc) => doc.id === id);
};
const documentsCachingPlugin = (store2) => {
  store2.subscribe(({ type, payload }, state) => {
    switch (type) {
      case ADD_DOCUMENT:
      case DISCARD_DOCUMENT:
      case EDIT_DOCUMENT:
      case MERGE_DOCUMENT:
      case RESTORE_DOCUMENT:
      case RESTRICT_DOCUMENT:
      case SHARE_DOCUMENT:
      case TOUCH_DOCUMENT:
        const found = find(state, payload.id);
        if (found) {
          debouncer$2.debounce(found.id, async () => {
            const doc = await pack(found, {
              preferEncryption: state.settings.crypto.enabled,
              publicKey: state.settings.crypto.publicKey
            });
            cache$1.setItem(found.id, doc);
          });
        }
        break;
      case SETTINGS_LOADED:
        cache$1.keys().then((ids) => Promise.all(ids.map((id) => cache$1.getItem(id)))).then((docs) => {
          return Promise.all(
            docs.map((doc) => {
              const packed = Object.assign({}, doc, { id: doc.id || doc.clientId, textKey: doc.textKey || doc.dataKey });
              return unpack(packed, { privateKey: state.settings.crypto.privateKey });
            })
          );
        }).then((docs) => store2.dispatch(LOAD_DOCUMENTS, docs)).then(() => store2.dispatch(DOCUMENTS_LOADED));
        break;
    }
  });
};
const keybindingsPlugin = (store2) => {
  store2.subscribe(({ type, _payload }, state) => {
    switch (type) {
      case SETTINGS_LOADED:
        store2.dispatch(LOAD_KEYBINDINGS);
        break;
    }
  });
};
const CACHE_KEY = "main";
const cache = localforage.createInstance({
  name: "settings"
});
const debouncer$1 = new Debouncer(20);
const settingsCachingPlugin = (store2) => {
  cache.getItem(CACHE_KEY).then((settings) => {
    if (settings) {
      store2.dispatch(LOAD_SETTINGS, settings).then(() => {
        store2.dispatch(SETTINGS_LOADED);
      });
    } else {
      store2.dispatch(SETTINGS_LOADED);
    }
  });
  store2.subscribe(({ type, _payload }, state) => {
    switch (type) {
      case SET_CRYPTO_ENABLED:
      case SET_CRYPTO_KEYS:
      case SET_EDITOR_IMAGES_ENABLED:
      case SET_EDITOR_IMAGES_SHOW_CAPTIONS:
      case SET_EDITOR_KEY_MAP:
      case SET_EDITOR_LIGATURES:
      case SET_EDITOR_LISTS_ENABLED:
      case SET_EDITOR_READABILITY_ENABLED:
      case SET_EDITOR_READABILITY_WORDS_PER_MINUTE:
      case SET_EDITOR_SPELLCHECK:
      case SET_EDITOR_TAB_SIZE:
      case SET_EDITOR_TOOLBAR:
      case SET_EXPERIMENTAL:
      case SET_THEME:
        debouncer$1.debounce(CACHE_KEY, () => {
          cache.setItem(CACHE_KEY, unwrap(state.settings));
        });
        break;
    }
  });
};
const debouncer = new Debouncer(1500);
const syncPlugin = (store2) => {
  store2.subscribe(async ({ type, payload }, state) => {
    switch (type) {
      case ADD_DOCUMENT:
      case DISCARD_DOCUMENT:
      case DOCUMENTS_LOADED:
      case EDIT_DOCUMENT:
      case RESTORE_DOCUMENT:
      case RESTRICT_DOCUMENT:
      case SET_ONLINE:
      case SET_USER:
      case SHARE_DOCUMENT:
      case TOUCH_DOCUMENT:
        if (store2.state.online && store2.state.auth.user) {
          debouncer.debounce("sync", () => {
            store2.dispatch(SYNC);
          });
        }
        break;
    }
  });
};
const SET_STRIPE_MODAL_VISIBILITY = "SET_STRIPE_MODAL_VISIBILITY";
const store = createStore({
  state() {
    return {
      context: {
        active: false,
        editing: false,
        tags: []
      },
      editor: null,
      modKey: "⌃",
      online: true,
      showLeftSidebar: true,
      showRightSidebar: true,
      showStripeModal: false,
      showWelcome: false
    };
  },
  getters: {
    allTags(state, getters) {
      return Array.from(
        getters.allKept.reduce((set, doc) => {
          for (let tag of doc.tags) {
            set.add(tag);
          }
          return set;
        }, /* @__PURE__ */ new Set())
      ).sort();
    },
    contextTags(state) {
      return state.context.tags.sort();
    },
    tags(state, getters) {
      return Array.from(
        getters.kept.reduce((set, doc) => {
          for (let tag of doc.tags) {
            set.add(tag);
          }
          return set;
        }, /* @__PURE__ */ new Set())
      ).sort();
    }
  },
  mutations: {
    [ACTIVATE_CONTEXT](state, payload) {
      state.context.active = true;
    },
    [DEACTIVATE_CONTEXT](state, payload) {
      state.context.active = false;
      state.context.tags = [];
    },
    [SET_CONTEXT_TAGS](state, payload) {
      state.context.tags = payload.context.tags;
    },
    [SET_EDITOR](state, payload) {
      state.editor = payload.editor;
    },
    [SET_MOD_KEY](state, payload) {
      state.modKey = payload;
    },
    [SET_OFFLINE](state) {
      state.online = false;
    },
    [SET_ONLINE](state) {
      state.online = true;
    },
    [SET_RIGHT_SIDEBAR_VISIBILITY](state, isVisible) {
      state.showRightSidebar = isVisible;
    },
    [SET_STRIPE_MODAL_VISIBILITY](state, isVisible) {
      state.showStripeModal = isVisible;
    },
    [SET_SHOW_WELCOME](state, shouldShowWelcome) {
      if (!shouldShowWelcome) {
        window.localStorage.setItem("octo/welcome/v1", "done");
      }
      state.showWelcome = shouldShowWelcome;
    }
  },
  actions: {
    async [ACTIVATE_CONTEXT](context) {
      context.commit(ACTIVATE_CONTEXT);
    },
    async [BLUR_EDITOR](context) {
      if (context.state.editor) {
        context.state.editor.getInputField().blur();
      }
    },
    async [DEACTIVATE_CONTEXT](context) {
      context.commit(DEACTIVATE_CONTEXT);
    },
    async [FOCUS_EDITOR](context) {
      if (context.state.editor) {
        context.state.editor.focus();
      }
    },
    async [SET_CONTEXT_TAGS](context, payload) {
      context.commit(SET_CONTEXT_TAGS, payload);
      if (payload.context.tags.length > 0) {
        if (!context.state.context.active) {
          return context.dispatch(ACTIVATE_CONTEXT);
        }
      } else {
        if (context.state.context.active) {
          return context.dispatch(DEACTIVATE_CONTEXT);
        }
      }
    },
    async [SET_EDITOR](context, payload) {
      context.commit(SET_EDITOR, payload);
    },
    async [SET_MOD_KEY](context, payload) {
      context.commit(SET_MOD_KEY, payload);
    },
    async [SET_OFFLINE](context) {
      context.commit(SET_OFFLINE);
    },
    async [SET_ONLINE](context) {
      context.commit(SET_ONLINE);
    },
    async [SET_RIGHT_SIDEBAR_VISIBILITY](context, isVisible) {
      context.commit(SET_RIGHT_SIDEBAR_VISIBILITY, isVisible);
    },
    async [SET_SHOW_WELCOME](context, shouldShowWelcome) {
      context.commit(SET_SHOW_WELCOME, shouldShowWelcome);
    },
    async [SET_STRIPE_MODAL_VISIBILITY](context, isVisible) {
      context.commit(SET_STRIPE_MODAL_VISIBILITY, isVisible);
      if (isVisible) {
        setTimeout(() => {
          if (context.state.showStripeModal) {
            context.commit(SET_STRIPE_MODAL_VISIBILITY, false);
          }
        }, 15e3);
      }
    }
  },
  modules: {
    auth: authModule,
    contexts: contextsModule,
    documents: documentsModule,
    keybindings: keybindingsModule,
    settings: settingsModule,
    sync: syncModule
  },
  plugins: [
    contextsCachingPlugin,
    documentsCachingPlugin,
    keybindingsPlugin,
    settingsCachingPlugin,
    syncPlugin
  ]
});
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      name: "home",
      meta: { track: true },
      component: () => __vitePreload(() => import("./home-bb10a0ca.js"), true ? ["assets/home-bb10a0ca.js","assets/AuthTiers-b39f6e03.js","assets/Modal-7704844a.js","assets/CoreScrollable-4b186a41.js","assets/overlayscrollbars.esm-084eb65b.js","assets/_plugin-vue_export-helper-ea9be126.js","assets/runtime-dom.esm-bundler-eaea4b0e.js","assets/CoreButton-765ee119.js","assets/vue-router-bb5abae0.js","assets/index-7e236154.js","assets/index-90ebcfae-24d515d8.js","assets/vuex.esm-bundler-99de9736.js","assets/useRecentDocs-b417f68b.js","assets/pinia-1b7dc050.js","assets/firestore-017beded.js","assets/CoreLink-6737d303.js","assets/useIsNuxt-03feeb69.js","assets/TheLogo-3b3b0e0c.js","assets/global-6817a2cb.js","assets/home-47732402.css"] : void 0)
    },
    {
      path: "/",
      component: () => __vitePreload(() => import("./page-2fc3c3a7.js"), true ? ["assets/page-2fc3c3a7.js","assets/CoreScrollable-4b186a41.js","assets/overlayscrollbars.esm-084eb65b.js","assets/_plugin-vue_export-helper-ea9be126.js","assets/AppPage-2649d5f1.js","assets/useIsNuxt-03feeb69.js"] : void 0),
      children: [
        {
          path: "/",
          name: "root",
          meta: { track: true },
          beforeEnter(to, from, next) {
            if (store.state.showWelcome) {
              store.commit(SET_SHOW_WELCOME, false);
              next({ path: "/home" });
            } else {
              next({ path: "/docs/new" });
            }
          }
        },
        {
          path: "/_routes",
          component: () => __vitePreload(() => import("./_routes-1af8cb66.js"), true ? ["assets/_routes-1af8cb66.js","assets/vue-router-bb5abae0.js","assets/_plugin-vue_export-helper-ea9be126.js","assets/CoreLink-6737d303.js","assets/useIsNuxt-03feeb69.js"] : void 0)
        },
        {
          path: "/account",
          meta: { title: "My Account", track: true },
          component: () => __vitePreload(() => import("./account-ce21b6ab.js"), true ? ["assets/account-ce21b6ab.js","assets/index-90ebcfae-24d515d8.js","assets/AuthTiers-b39f6e03.js","assets/Modal-7704844a.js","assets/CoreScrollable-4b186a41.js","assets/overlayscrollbars.esm-084eb65b.js","assets/_plugin-vue_export-helper-ea9be126.js","assets/runtime-dom.esm-bundler-eaea4b0e.js","assets/CoreButton-765ee119.js","assets/vue-router-bb5abae0.js","assets/index-7e236154.js","assets/vuex.esm-bundler-99de9736.js","assets/useRecentDocs-b417f68b.js","assets/pinia-1b7dc050.js","assets/firestore-017beded.js"] : void 0)
        },
        {
          path: "/docs",
          meta: { title: "My Docs", track: true },
          component: () => __vitePreload(() => import("./index-7e03e5a9.js"), true ? ["assets/index-7e03e5a9.js","assets/DocList-a6308372.js","assets/CoreDivider-0e2c45f2.js","assets/_plugin-vue_export-helper-ea9be126.js","assets/moment-f63e338d.js","assets/actions-7ca2be11.js","assets/runtime-dom.esm-bundler-eaea4b0e.js","assets/Tag.vue_vue_type_script_setup_true_lang-65429ac4.js","assets/TheLogo-3b3b0e0c.js","assets/useRouteQuery-1f894c77.js","assets/vue-router-bb5abae0.js","assets/preload-helper-5f15640e.js","assets/vuex.esm-bundler-99de9736.js","assets/index-90ebcfae-24d515d8.js","assets/contexts-e80363e8.js","assets/doc-018f7423.js","assets/index.browser-0a05c6e5.js","assets/useRecentDocs-b417f68b.js","assets/pinia-1b7dc050.js","assets/title-23c0a2fd.js","assets/settings-f2786260.js","assets/useHooks-93920b51.js","assets/firestore-017beded.js","assets/_commonjsHelpers-dd024a83.js","assets/_commonjs-dynamic-modules-58f2b0ec.js","assets/debouncer-2293cf40.js"] : void 0)
        },
        {
          path: "/docs/f/:filter",
          meta: { title: "My Docs" },
          component: () => __vitePreload(() => import("./_filter_-a355e839.js"), true ? ["assets/_filter_-a355e839.js","assets/DocList-a6308372.js","assets/CoreDivider-0e2c45f2.js","assets/_plugin-vue_export-helper-ea9be126.js","assets/moment-f63e338d.js","assets/actions-7ca2be11.js","assets/runtime-dom.esm-bundler-eaea4b0e.js","assets/Tag.vue_vue_type_script_setup_true_lang-65429ac4.js","assets/TheLogo-3b3b0e0c.js","assets/vue-router-bb5abae0.js","assets/useRouteQuery-1f894c77.js","assets/preload-helper-5f15640e.js","assets/vuex.esm-bundler-99de9736.js","assets/index-90ebcfae-24d515d8.js","assets/contexts-e80363e8.js","assets/doc-018f7423.js","assets/index.browser-0a05c6e5.js","assets/useRecentDocs-b417f68b.js","assets/pinia-1b7dc050.js","assets/title-23c0a2fd.js","assets/settings-f2786260.js","assets/useHooks-93920b51.js","assets/firestore-017beded.js","assets/_commonjsHelpers-dd024a83.js","assets/_commonjs-dynamic-modules-58f2b0ec.js","assets/debouncer-2293cf40.js"] : void 0),
          props: true
        },
        {
          path: "/docs/t/:tag(.*)",
          meta: { title: "My Docs" },
          component: () => __vitePreload(() => import("./_...tag_-c3babad8.js"), true ? ["assets/_...tag_-c3babad8.js","assets/DocList-a6308372.js","assets/CoreDivider-0e2c45f2.js","assets/_plugin-vue_export-helper-ea9be126.js","assets/moment-f63e338d.js","assets/actions-7ca2be11.js","assets/runtime-dom.esm-bundler-eaea4b0e.js","assets/Tag.vue_vue_type_script_setup_true_lang-65429ac4.js","assets/TheLogo-3b3b0e0c.js","assets/vue-router-bb5abae0.js","assets/useRouteQuery-1f894c77.js","assets/preload-helper-5f15640e.js","assets/vuex.esm-bundler-99de9736.js","assets/index-90ebcfae-24d515d8.js","assets/contexts-e80363e8.js","assets/doc-018f7423.js","assets/index.browser-0a05c6e5.js","assets/useRecentDocs-b417f68b.js","assets/pinia-1b7dc050.js","assets/title-23c0a2fd.js","assets/settings-f2786260.js","assets/useHooks-93920b51.js","assets/firestore-017beded.js","assets/_commonjsHelpers-dd024a83.js","assets/_commonjs-dynamic-modules-58f2b0ec.js","assets/debouncer-2293cf40.js"] : void 0),
          props: true
        },
        {
          path: "/docs/:docId/meta",
          name: "docs-doc-meta",
          component: () => __vitePreload(() => import("./meta-4e95db4d.js"), true ? ["assets/meta-4e95db4d.js","assets/CoreScrollable-4b186a41.js","assets/overlayscrollbars.esm-084eb65b.js","assets/_plugin-vue_export-helper-ea9be126.js","assets/CoreLink-6737d303.js","assets/useIsNuxt-03feeb69.js","assets/TagLink-3b631b6d.js","assets/Tag.vue_vue_type_script_setup_true_lang-65429ac4.js","assets/TheLogo-3b3b0e0c.js","assets/runtime-dom.esm-bundler-eaea4b0e.js","assets/moment-f63e338d.js","assets/doc-018f7423.js","assets/index.browser-0a05c6e5.js","assets/actions-7ca2be11.js","assets/preload-helper-5f15640e.js","assets/vue-router-bb5abae0.js","assets/vuex.esm-bundler-99de9736.js","assets/index-90ebcfae-24d515d8.js","assets/contexts-e80363e8.js","assets/useRecentDocs-b417f68b.js","assets/pinia-1b7dc050.js","assets/title-23c0a2fd.js","assets/settings-f2786260.js","assets/useHooks-93920b51.js","assets/firestore-017beded.js","assets/_commonjsHelpers-dd024a83.js","assets/_commonjs-dynamic-modules-58f2b0ec.js","assets/debouncer-2293cf40.js"] : void 0),
          props: true
        },
        {
          path: "/docs/export",
          meta: { title: "Export Docs", track: true },
          component: () => __vitePreload(() => import("./export-6092550a.js"), true ? ["assets/export-6092550a.js","assets/_commonjsHelpers-dd024a83.js","assets/_commonjs-dynamic-modules-58f2b0ec.js","assets/runtime-dom.esm-bundler-eaea4b0e.js","assets/_plugin-vue_export-helper-ea9be126.js"] : void 0)
        },
        {
          path: "/docs/import",
          meta: { title: "Import Docs", track: true },
          component: () => __vitePreload(() => import("./import-54fb1be8.js"), true ? ["assets/import-54fb1be8.js","assets/doc-018f7423.js","assets/index.browser-0a05c6e5.js","assets/_commonjs-dynamic-modules-58f2b0ec.js","assets/_plugin-vue_export-helper-ea9be126.js"] : void 0)
        },
        {
          path: "/quick-action",
          meta: { title: "Quick Action", track: true },
          component: () => __vitePreload(() => import("./quick-action-35d48a48.js"), true ? ["assets/quick-action-35d48a48.js","assets/_plugin-vue_export-helper-ea9be126.js"] : void 0)
        },
        {
          path: "/menu",
          meta: { track: true },
          component: () => __vitePreload(() => import("./menu-7e63b94b.js").then((n) => n.m), true ? ["assets/menu-7e63b94b.js","assets/CoreScrollable-4b186a41.js","assets/overlayscrollbars.esm-084eb65b.js","assets/_plugin-vue_export-helper-ea9be126.js","assets/TagLink-3b631b6d.js","assets/CoreLink-6737d303.js","assets/useIsNuxt-03feeb69.js","assets/Tag.vue_vue_type_script_setup_true_lang-65429ac4.js","assets/TheLogo-3b3b0e0c.js","assets/CoreDivider-0e2c45f2.js","assets/index.browser-0a05c6e5.js","assets/CoreButton-765ee119.js","assets/useFiles-7bacb5ca.js","assets/pinia-1b7dc050.js","assets/global-6817a2cb.js","assets/actions-7ca2be11.js","assets/TrashIcon-8a1e2fdd.js"] : void 0)
        },
        {
          path: "/workspaces",
          meta: { title: "Workspaces", track: true },
          component: () => __vitePreload(() => import("./workspaces-6de298e2.js"), true ? ["assets/workspaces-6de298e2.js","assets/CoreScrollable-4b186a41.js","assets/overlayscrollbars.esm-084eb65b.js","assets/_plugin-vue_export-helper-ea9be126.js","assets/CoreButton-765ee119.js","assets/Tag.vue_vue_type_script_setup_true_lang-65429ac4.js","assets/TheLogo-3b3b0e0c.js","assets/index.browser-0a05c6e5.js","assets/actions-7ca2be11.js","assets/contexts-e80363e8.js","assets/runtime-dom.esm-bundler-eaea4b0e.js","assets/TrashIcon-8a1e2fdd.js","assets/workspaces-118b605f.css"] : void 0)
        },
        {
          path: "/tags",
          meta: { title: "Tags", track: true },
          component: () => __vitePreload(() => import("./tags-8037765c.js"), true ? ["assets/tags-8037765c.js","assets/TagLink-3b631b6d.js","assets/CoreLink-6737d303.js","assets/useIsNuxt-03feeb69.js","assets/_plugin-vue_export-helper-ea9be126.js","assets/Tag.vue_vue_type_script_setup_true_lang-65429ac4.js","assets/TheLogo-3b3b0e0c.js","assets/tags-fd4d4d28.css"] : void 0),
          props: true
        },
        {
          path: "/settings",
          meta: { title: "App Settings", track: true },
          component: () => __vitePreload(() => import("./settings-411b18d8.js"), true ? ["assets/settings-411b18d8.js","assets/Extendable-dea60239.js","assets/_plugin-vue_export-helper-ea9be126.js","assets/runtime-dom.esm-bundler-eaea4b0e.js","assets/CoreLink-6737d303.js","assets/useIsNuxt-03feeb69.js","assets/account-a08c9355.js","assets/vuex.esm-bundler-99de9736.js","assets/settings-f2786260.js","assets/doc-018f7423.js","assets/index.browser-0a05c6e5.js","assets/actions-7ca2be11.js","assets/export-6092550a.js","assets/_commonjsHelpers-dd024a83.js","assets/_commonjs-dynamic-modules-58f2b0ec.js","assets/import-54fb1be8.js"] : void 0)
        },
        {
          path: "/privacy-policy",
          meta: { title: "Privacy Policy", track: true },
          component: () => __vitePreload(() => import("./privacy-policy-ba794887.js"), true ? ["assets/privacy-policy-ba794887.js","assets/_plugin-vue_export-helper-ea9be126.js"] : void 0)
        },
        {
          path: "/terms-and-conditions",
          meta: { title: "Terms & Conditions", track: true },
          component: () => __vitePreload(() => import("./terms-and-conditions-5c924a50.js"), true ? ["assets/terms-and-conditions-5c924a50.js","assets/_plugin-vue_export-helper-ea9be126.js"] : void 0)
        }
      ]
    },
    {
      path: "/docs/new",
      name: "docs-new",
      meta: { track: true },
      component: () => __vitePreload(() => import("./_docId_-2acbddc8.js"), true ? ["assets/_docId_-2acbddc8.js","assets/Editor-c8a5fc1e.js","assets/runtime-dom.esm-bundler-eaea4b0e.js","assets/_plugin-vue_export-helper-ea9be126.js","assets/client-2de13258.js","assets/preload-helper-5f15640e.js","assets/index-73136136.js","assets/index-a4bbc573.js","assets/index-f4eaee3d.js","assets/index-9e94dbc0.js","assets/index-2b3125df.js","assets/index-08d7a392.js","assets/index-02f56940.js","assets/index-b680242d.js","assets/index-9d34c1ff.js","assets/index-7d350bb1.js","assets/overlayscrollbars.esm-084eb65b.js","assets/index-90ebcfae-24d515d8.js","assets/index.esm2017-e69b4276.js","assets/_commonjsHelpers-dd024a83.js","assets/index.browser-0a05c6e5.js","assets/doc-018f7423.js","assets/invert-f9d6c8a5.js","assets/darken-fdc59d89.js","assets/luminance-d8ea28d2.js","assets/Editor-19b19ff8.css","assets/vuex.esm-bundler-99de9736.js","assets/title-23c0a2fd.js","assets/actions-7ca2be11.js"] : void 0),
      props: true,
      beforeEnter(to, from, next) {
        if (store.state.showWelcome) {
          store.commit(SET_SHOW_WELCOME, false);
          next({ path: "/home" });
        } else {
          next();
        }
      }
    },
    {
      path: "/docs/:docId",
      name: "docs-doc",
      component: () => __vitePreload(() => import("./_docId_-2acbddc8.js"), true ? ["assets/_docId_-2acbddc8.js","assets/Editor-c8a5fc1e.js","assets/runtime-dom.esm-bundler-eaea4b0e.js","assets/_plugin-vue_export-helper-ea9be126.js","assets/client-2de13258.js","assets/preload-helper-5f15640e.js","assets/index-73136136.js","assets/index-a4bbc573.js","assets/index-f4eaee3d.js","assets/index-9e94dbc0.js","assets/index-2b3125df.js","assets/index-08d7a392.js","assets/index-02f56940.js","assets/index-b680242d.js","assets/index-9d34c1ff.js","assets/index-7d350bb1.js","assets/overlayscrollbars.esm-084eb65b.js","assets/index-90ebcfae-24d515d8.js","assets/index.esm2017-e69b4276.js","assets/_commonjsHelpers-dd024a83.js","assets/index.browser-0a05c6e5.js","assets/doc-018f7423.js","assets/invert-f9d6c8a5.js","assets/darken-fdc59d89.js","assets/luminance-d8ea28d2.js","assets/Editor-19b19ff8.css","assets/vuex.esm-bundler-99de9736.js","assets/title-23c0a2fd.js","assets/actions-7ca2be11.js"] : void 0),
      props({ params }) {
        if (typeof (params == null ? void 0 : params.props) === "string") {
          return {
            ...params,
            ...JSON.parse(params.props)
          };
        }
        return params;
      }
    },
    {
      path: "/notepad",
      meta: { title: "Notepad", track: true },
      component: () => __vitePreload(() => import("./notepad-99191b12.js"), true ? ["assets/notepad-99191b12.js","assets/preload-helper-5f15640e.js","assets/moment-f63e338d.js","assets/_docId_-2acbddc8.js","assets/Editor-c8a5fc1e.js","assets/runtime-dom.esm-bundler-eaea4b0e.js","assets/_plugin-vue_export-helper-ea9be126.js","assets/client-2de13258.js","assets/index-73136136.js","assets/index-a4bbc573.js","assets/index-f4eaee3d.js","assets/index-9e94dbc0.js","assets/index-2b3125df.js","assets/index-08d7a392.js","assets/index-02f56940.js","assets/index-b680242d.js","assets/index-9d34c1ff.js","assets/index-7d350bb1.js","assets/overlayscrollbars.esm-084eb65b.js","assets/index-90ebcfae-24d515d8.js","assets/index.esm2017-e69b4276.js","assets/_commonjsHelpers-dd024a83.js","assets/index.browser-0a05c6e5.js","assets/doc-018f7423.js","assets/invert-f9d6c8a5.js","assets/darken-fdc59d89.js","assets/luminance-d8ea28d2.js","assets/Editor-19b19ff8.css","assets/vuex.esm-bundler-99de9736.js","assets/title-23c0a2fd.js","assets/actions-7ca2be11.js"] : void 0),
      props: true
    },
    {
      path: "/public/:docId",
      name: "public-doc",
      component: () => __vitePreload(() => import("./_docId_-9a1e5121.js"), true ? ["assets/_docId_-9a1e5121.js","assets/Editor-c8a5fc1e.js","assets/runtime-dom.esm-bundler-eaea4b0e.js","assets/_plugin-vue_export-helper-ea9be126.js","assets/client-2de13258.js","assets/preload-helper-5f15640e.js","assets/index-73136136.js","assets/index-a4bbc573.js","assets/index-f4eaee3d.js","assets/index-9e94dbc0.js","assets/index-2b3125df.js","assets/index-08d7a392.js","assets/index-02f56940.js","assets/index-b680242d.js","assets/index-9d34c1ff.js","assets/index-7d350bb1.js","assets/overlayscrollbars.esm-084eb65b.js","assets/index-90ebcfae-24d515d8.js","assets/index.esm2017-e69b4276.js","assets/_commonjsHelpers-dd024a83.js","assets/index.browser-0a05c6e5.js","assets/doc-018f7423.js","assets/invert-f9d6c8a5.js","assets/darken-fdc59d89.js","assets/luminance-d8ea28d2.js","assets/Editor-19b19ff8.css","assets/useHooks-93920b51.js","assets/title-23c0a2fd.js","assets/firestore-017beded.js"] : void 0),
      props: { ro: true }
    },
    {
      path: "/force-graph",
      meta: { title: "Force Graph", track: true },
      component: () => __vitePreload(() => import("./force-graph-e7f5fa1f.js"), true ? ["assets/force-graph-e7f5fa1f.js","assets/DocList-a6308372.js","assets/CoreDivider-0e2c45f2.js","assets/_plugin-vue_export-helper-ea9be126.js","assets/moment-f63e338d.js","assets/actions-7ca2be11.js","assets/runtime-dom.esm-bundler-eaea4b0e.js","assets/Tag.vue_vue_type_script_setup_true_lang-65429ac4.js","assets/TheLogo-3b3b0e0c.js","assets/transform-92e5ec77.js","assets/_commonjsHelpers-dd024a83.js","assets/ordinal-af0bbe35.js","assets/preload-helper-5f15640e.js","assets/vue-router-bb5abae0.js","assets/vuex.esm-bundler-99de9736.js","assets/index-90ebcfae-24d515d8.js","assets/contexts-e80363e8.js","assets/doc-018f7423.js","assets/index.browser-0a05c6e5.js","assets/useRecentDocs-b417f68b.js","assets/pinia-1b7dc050.js","assets/title-23c0a2fd.js","assets/settings-f2786260.js","assets/useHooks-93920b51.js","assets/firestore-017beded.js","assets/_commonjs-dynamic-modules-58f2b0ec.js","assets/debouncer-2293cf40.js","assets/force-graph-fe9bf3f4.css"] : void 0),
      props: true
    },
    {
      path: "/example",
      meta: { title: "Example", track: true },
      component: () => __vitePreload(() => import("./example-9853f2ea.js"), true ? ["assets/example-9853f2ea.js","assets/Editor-c8a5fc1e.js","assets/runtime-dom.esm-bundler-eaea4b0e.js","assets/_plugin-vue_export-helper-ea9be126.js","assets/client-2de13258.js","assets/preload-helper-5f15640e.js","assets/index-73136136.js","assets/index-a4bbc573.js","assets/index-f4eaee3d.js","assets/index-9e94dbc0.js","assets/index-2b3125df.js","assets/index-08d7a392.js","assets/index-02f56940.js","assets/index-b680242d.js","assets/index-9d34c1ff.js","assets/index-7d350bb1.js","assets/overlayscrollbars.esm-084eb65b.js","assets/index-90ebcfae-24d515d8.js","assets/index.esm2017-e69b4276.js","assets/_commonjsHelpers-dd024a83.js","assets/index.browser-0a05c6e5.js","assets/doc-018f7423.js","assets/invert-f9d6c8a5.js","assets/darken-fdc59d89.js","assets/luminance-d8ea28d2.js","assets/Editor-19b19ff8.css"] : void 0),
      props: { url: "/example.md" }
    },
    {
      path: "/file-editor/:file",
      meta: { title: "File Editor" },
      component: () => __vitePreload(() => import("./_file_-73fb63f2.js"), true ? ["assets/_file_-73fb63f2.js","assets/vuex.esm-bundler-99de9736.js","assets/_plugin-vue_export-helper-ea9be126.js","assets/doc-018f7423.js","assets/index.browser-0a05c6e5.js","assets/debouncer-2293cf40.js","assets/Editor-c8a5fc1e.js","assets/runtime-dom.esm-bundler-eaea4b0e.js","assets/client-2de13258.js","assets/preload-helper-5f15640e.js","assets/index-73136136.js","assets/index-a4bbc573.js","assets/index-f4eaee3d.js","assets/index-9e94dbc0.js","assets/index-2b3125df.js","assets/index-08d7a392.js","assets/index-02f56940.js","assets/index-b680242d.js","assets/index-9d34c1ff.js","assets/index-7d350bb1.js","assets/overlayscrollbars.esm-084eb65b.js","assets/index-90ebcfae-24d515d8.js","assets/index.esm2017-e69b4276.js","assets/_commonjsHelpers-dd024a83.js","assets/invert-f9d6c8a5.js","assets/darken-fdc59d89.js","assets/luminance-d8ea28d2.js","assets/Editor-19b19ff8.css","assets/useFiles-7bacb5ca.js","assets/pinia-1b7dc050.js"] : void 0),
      props: true
    },
    {
      path: "/documents",
      redirect: { path: "/docs" }
    },
    {
      path: "/documents/new",
      redirect: { path: "/docs/new" }
    },
    {
      path: "/documents/export",
      redirect: { path: "/docs/export" }
    },
    {
      path: "/documents/import",
      redirect: { path: "/docs/import" }
    },
    {
      path: "/documents/recent",
      redirect: { path: "/docs" }
    },
    {
      path: "/documents/actionable",
      redirect: { path: "/docs/f/tasks" }
    },
    {
      path: "/documents/discarded",
      redirect: { path: "/docs/f/discarded" }
    },
    {
      path: "/documents/tasks",
      redirect: { path: "/docs/f/tasks" }
    },
    {
      path: "/documents/untagged",
      redirect: { path: "/docs/f/untagged" }
    },
    {
      path: "/documents/daily",
      redirect: { path: "/notepad" }
    },
    {
      path: "/documents/:id",
      redirect: (route) => ({ path: `/docs/${route.params.id}` })
    },
    {
      path: "/documents/:id/meta",
      redirect: (route) => ({ path: `/docs/${route.params.id}/meta` })
    },
    {
      path: "/shared/:id",
      redirect: (route) => ({ path: `/public/${route.params.id}` })
    },
    {
      path: "/context",
      redirect: { path: "/workspaces" }
    },
    {
      path: "/contexts",
      redirect: { path: "/workspaces" }
    },
    {
      path: "/tags/:tag",
      redirect: (route) => ({ path: `/docs/t/${route.params.tag}` })
    },
    {
      path: "/graph",
      redirect: { path: "/force-graph" }
    }
  ]
});
router.beforeEach((to) => {
  var _a;
  if (to.meta.title)
    setTitle(to.meta.title);
  if (to.meta.track)
    (_a = window.fathom) == null ? void 0 : _a.trackPageview();
  if (to.name === "docs-doc")
    store.dispatch(SET_DOCUMENT, { id: to.params.docId });
  if (to.name === "docs-new")
    store.dispatch(SET_DOCUMENT, { id: null });
  return true;
});
const open = (to) => {
  var _a;
  const localRouter = useRouter() || router;
  if ((_a = to.params) == null ? void 0 : _a.props) {
    to.params.props = JSON.stringify(to.params.props);
  }
  localRouter.push(to);
};
export {
  bindGlobal as b,
  localforage as l,
  open as o,
  router as r,
  store as s,
  unwrap as u
};
//# sourceMappingURL=router-662523d7.js.map
