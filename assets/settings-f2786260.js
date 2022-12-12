var isMergeableObject = function isMergeableObject2(value) {
  return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
  return !!value && typeof value === "object";
}
function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function(element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}
function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge;
  }
  var customMerge = options.customMerge(key);
  return typeof customMerge === "function" ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
    return target.propertyIsEnumerable(symbol);
  }) : [];
}
function getKeys(target) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
  try {
    return property in object;
  } catch (_) {
    return false;
  }
}
function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
}
function mergeObject(target, source, options) {
  var destination = {};
  if (options.isMergeableObject(target)) {
    getKeys(target).forEach(function(key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }
  getKeys(source).forEach(function(key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }
    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  });
  return destination;
}
function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject;
  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}
deepmerge.all = function deepmergeAll(array, options) {
  if (!Array.isArray(array)) {
    throw new Error("first argument should be an array");
  }
  return array.reduce(function(prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};
var deepmerge_1 = deepmerge;
var cjs = deepmerge_1;
const LOAD_SETTINGS = "LOAD_SETTINGS";
const SET_CRYPTO_ENABLED = "SET_CRYPTO_ENABLED";
const SET_CRYPTO_KEYS = "SET_CRYPTO_KEYS";
const SET_EDITOR_IMAGES_ENABLED = "SET_EDITOR_IMAGES_ENABLED";
const SET_EDITOR_IMAGES_SHOW_CAPTIONS = "SET_EDITOR_IMAGES_SHOW_CAPTIONS";
const SET_EDITOR_KEY_MAP = "SET_EDITOR_KEY_MAP";
const SET_EDITOR_LIGATURES = "SET_EDITOR_LIGATURES";
const SET_EDITOR_LISTS_ENABLED = "SET_EDITOR_LISTS_ENABLED";
const SET_EDITOR_READABILITY_ENABLED = "SET_EDITOR_READABILITY_ENABLED";
const SET_EDITOR_READABILITY_MAX_WIDTH = "SET_EDITOR_READABILITY_MAX_WIDTH";
const SET_EDITOR_READABILITY_WORDS_PER_MINUTE = "SET_EDITOR_READABILITY_WORDS_PER_MINUTE";
const SET_EDITOR_SPELLCHECK = "SET_EDITOR_SPELLCHECK";
const SET_EDITOR_TAB_SIZE = "SET_EDITOR_TAB_SIZE";
const SET_EDITOR_TOOLBAR = "SET_EDITOR_TOOLBAR";
const SET_EXPERIMENTAL = "SET_EXPERIMENTAL";
const SET_THEME = "SET_THEME";
const SETTINGS_LOADED = "SETTINGS_LOADED";
const settingsModule = {
  state: () => ({
    crypto: {
      enabled: false,
      privateKey: null,
      publicKey: null
    },
    editor: {
      images: {
        enabled: true,
        showCaptions: true
      },
      keyMap: "default",
      ligatures: true,
      lists: {
        enabled: true
      },
      readability: {
        enabled: true,
        maxWidthInChars: 100,
        wordsPerMinute: 225
      },
      spellcheck: true,
      tabSize: 2,
      toolbar: true
    },
    experimental: false,
    loaded: false,
    theme: "auto"
  }),
  getters: {},
  mutations: {
    [LOAD_SETTINGS](state, settings) {
      Object.assign(state, cjs(state, settings));
    },
    [SET_CRYPTO_ENABLED](state, enabled) {
      state.crypto.enabled = enabled;
    },
    [SET_CRYPTO_KEYS](state, keys) {
      if (keys.privateKey) {
        state.crypto.privateKey = keys.privateKey;
      }
      if (keys.publicKey) {
        state.crypto.publicKey = keys.publicKey;
      }
    },
    [SET_EDITOR_IMAGES_ENABLED](state, isEnabled) {
      state.editor.images.enabled = isEnabled;
    },
    [SET_EDITOR_IMAGES_SHOW_CAPTIONS](state, showCaptions) {
      state.editor.images.showCaptions = showCaptions;
    },
    [SET_EDITOR_KEY_MAP](state, keyMap) {
      state.editor.keyMap = keyMap;
    },
    [SET_EDITOR_LIGATURES](state, isEnabled) {
      state.editor.ligatures = isEnabled;
    },
    [SET_EDITOR_LISTS_ENABLED](state, isEnabled) {
      state.editor.lists.enabled = isEnabled;
    },
    [SET_EDITOR_READABILITY_ENABLED](state, isEnabled) {
      state.editor.readability.enabled = isEnabled;
    },
    [SET_EDITOR_READABILITY_MAX_WIDTH](state, maxWidthInChars) {
      state.editor.readability.maxWidthInChars = maxWidthInChars;
    },
    [SET_EDITOR_READABILITY_WORDS_PER_MINUTE](state, wordsPerMinute) {
      state.editor.readability.wordsPerMinute = wordsPerMinute;
    },
    [SET_EDITOR_SPELLCHECK](state, spellcheck) {
      state.editor.spellcheck = spellcheck;
    },
    [SET_EDITOR_TAB_SIZE](state, tabSize) {
      state.editor.tabSize = tabSize;
    },
    [SET_EDITOR_TOOLBAR](state, isEnabled) {
      state.editor.toolbar = isEnabled;
    },
    [SET_EXPERIMENTAL](state, isEnabled) {
      state.experimental = isEnabled;
    },
    [SET_THEME](state, theme) {
      state.theme = theme;
    },
    [SETTINGS_LOADED](state) {
      state.loaded = true;
    }
  },
  actions: {
    async [LOAD_SETTINGS](context, settings) {
      context.commit(LOAD_SETTINGS, settings);
    },
    async [SET_CRYPTO_ENABLED](context, enabled) {
      context.commit(SET_CRYPTO_ENABLED, enabled);
    },
    async [SET_CRYPTO_KEYS](context, keys) {
      context.commit(SET_CRYPTO_KEYS, keys);
    },
    async [SET_EDITOR_IMAGES_ENABLED](context, isEnabled) {
      context.commit(SET_EDITOR_IMAGES_ENABLED, isEnabled);
    },
    async [SET_EDITOR_IMAGES_SHOW_CAPTIONS](context, showCaptions) {
      context.commit(SET_EDITOR_IMAGES_SHOW_CAPTIONS, showCaptions);
    },
    async [SET_EDITOR_KEY_MAP](context, keyMap) {
      context.commit(SET_EDITOR_KEY_MAP, keyMap);
    },
    async [SET_EDITOR_TAB_SIZE](context, tabSize) {
      context.commit(SET_EDITOR_TAB_SIZE, tabSize);
    },
    async [SET_THEME](context, theme) {
      context.commit(SET_THEME, theme);
    },
    async [SETTINGS_LOADED](context) {
      context.commit(SETTINGS_LOADED);
    }
  }
};
export {
  LOAD_SETTINGS as L,
  SETTINGS_LOADED as S,
  SET_THEME as a,
  SET_EXPERIMENTAL as b,
  SET_EDITOR_TOOLBAR as c,
  SET_EDITOR_TAB_SIZE as d,
  SET_EDITOR_SPELLCHECK as e,
  SET_EDITOR_READABILITY_WORDS_PER_MINUTE as f,
  SET_EDITOR_READABILITY_ENABLED as g,
  SET_EDITOR_LISTS_ENABLED as h,
  SET_EDITOR_LIGATURES as i,
  SET_EDITOR_KEY_MAP as j,
  SET_EDITOR_IMAGES_SHOW_CAPTIONS as k,
  SET_EDITOR_IMAGES_ENABLED as l,
  SET_CRYPTO_KEYS as m,
  SET_CRYPTO_ENABLED as n,
  SET_EDITOR_READABILITY_MAX_WIDTH as o,
  settingsModule as s
};
//# sourceMappingURL=settings-f2786260.js.map
