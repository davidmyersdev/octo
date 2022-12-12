import { _ as _registerComponent, C as Component, r as registerVersion, h as getModularInstance, b as _getProvider, e as getApp, S as SDK_VERSION, a as createMockUserToken, F as FirebaseError } from "./index-90ebcfae-3aa38dd7.js";
const DEFAULT_HOST = "firebasestorage.googleapis.com";
const CONFIG_STORAGE_BUCKET_KEY = "storageBucket";
const DEFAULT_MAX_OPERATION_RETRY_TIME = 2 * 60 * 1e3;
const DEFAULT_MAX_UPLOAD_RETRY_TIME = 10 * 60 * 1e3;
class StorageError extends FirebaseError {
  constructor(code, message) {
    super(prependCode(code), `Firebase Storage: ${message} (${prependCode(code)})`);
    this.customData = { serverResponse: null };
    this._baseMessage = this.message;
    Object.setPrototypeOf(this, StorageError.prototype);
  }
  _codeEquals(code) {
    return prependCode(code) === this.code;
  }
  get serverResponse() {
    return this.customData.serverResponse;
  }
  set serverResponse(serverResponse) {
    this.customData.serverResponse = serverResponse;
    if (this.customData.serverResponse) {
      this.message = `${this._baseMessage}
${this.customData.serverResponse}`;
    } else {
      this.message = this._baseMessage;
    }
  }
}
function prependCode(code) {
  return "storage/" + code;
}
function unknown() {
  const message = "An unknown error occurred, please check the error payload for server response.";
  return new StorageError("unknown", message);
}
function quotaExceeded(bucket) {
  return new StorageError("quota-exceeded", "Quota for bucket '" + bucket + "' exceeded, please view quota on https://firebase.google.com/pricing/.");
}
function unauthenticated() {
  const message = "User is not authenticated, please authenticate using Firebase Authentication and try again.";
  return new StorageError("unauthenticated", message);
}
function unauthorizedApp() {
  return new StorageError("unauthorized-app", "This app does not have permission to access Firebase Storage on this project.");
}
function unauthorized(path) {
  return new StorageError("unauthorized", "User does not have permission to access '" + path + "'.");
}
function retryLimitExceeded() {
  return new StorageError("retry-limit-exceeded", "Max retry time for operation exceeded, please try again.");
}
function canceled() {
  return new StorageError("canceled", "User canceled the upload/download.");
}
function invalidUrl(url) {
  return new StorageError("invalid-url", "Invalid URL '" + url + "'.");
}
function invalidDefaultBucket(bucket) {
  return new StorageError("invalid-default-bucket", "Invalid default bucket '" + bucket + "'.");
}
function noDefaultBucket() {
  return new StorageError("no-default-bucket", "No default bucket found. Did you set the '" + CONFIG_STORAGE_BUCKET_KEY + "' property when initializing the app?");
}
function cannotSliceBlob() {
  return new StorageError("cannot-slice-blob", "Cannot slice blob for upload. Please retry the upload.");
}
function invalidArgument(message) {
  return new StorageError("invalid-argument", message);
}
function appDeleted() {
  return new StorageError("app-deleted", "The Firebase app was deleted.");
}
function invalidRootOperation(name2) {
  return new StorageError("invalid-root-operation", "The operation '" + name2 + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");
}
function invalidFormat(format, message) {
  return new StorageError("invalid-format", "String does not match format '" + format + "': " + message);
}
function internalError(message) {
  throw new StorageError("internal-error", "Internal error: " + message);
}
class Location {
  constructor(bucket, path) {
    this.bucket = bucket;
    this.path_ = path;
  }
  get path() {
    return this.path_;
  }
  get isRoot() {
    return this.path.length === 0;
  }
  fullServerUrl() {
    const encode = encodeURIComponent;
    return "/b/" + encode(this.bucket) + "/o/" + encode(this.path);
  }
  bucketOnlyServerUrl() {
    const encode = encodeURIComponent;
    return "/b/" + encode(this.bucket) + "/o";
  }
  static makeFromBucketSpec(bucketString, host) {
    let bucketLocation;
    try {
      bucketLocation = Location.makeFromUrl(bucketString, host);
    } catch (e) {
      return new Location(bucketString, "");
    }
    if (bucketLocation.path === "") {
      return bucketLocation;
    } else {
      throw invalidDefaultBucket(bucketString);
    }
  }
  static makeFromUrl(url, host) {
    let location = null;
    const bucketDomain = "([A-Za-z0-9.\\-_]+)";
    function gsModify(loc) {
      if (loc.path.charAt(loc.path.length - 1) === "/") {
        loc.path_ = loc.path_.slice(0, -1);
      }
    }
    const gsPath = "(/(.*))?$";
    const gsRegex = new RegExp("^gs://" + bucketDomain + gsPath, "i");
    const gsIndices = { bucket: 1, path: 3 };
    function httpModify(loc) {
      loc.path_ = decodeURIComponent(loc.path);
    }
    const version2 = "v[A-Za-z0-9_]+";
    const firebaseStorageHost = host.replace(/[.]/g, "\\.");
    const firebaseStoragePath = "(/([^?#]*).*)?$";
    const firebaseStorageRegExp = new RegExp(`^https?://${firebaseStorageHost}/${version2}/b/${bucketDomain}/o${firebaseStoragePath}`, "i");
    const firebaseStorageIndices = { bucket: 1, path: 3 };
    const cloudStorageHost = host === DEFAULT_HOST ? "(?:storage.googleapis.com|storage.cloud.google.com)" : host;
    const cloudStoragePath = "([^?#]*)";
    const cloudStorageRegExp = new RegExp(`^https?://${cloudStorageHost}/${bucketDomain}/${cloudStoragePath}`, "i");
    const cloudStorageIndices = { bucket: 1, path: 2 };
    const groups = [
      { regex: gsRegex, indices: gsIndices, postModify: gsModify },
      {
        regex: firebaseStorageRegExp,
        indices: firebaseStorageIndices,
        postModify: httpModify
      },
      {
        regex: cloudStorageRegExp,
        indices: cloudStorageIndices,
        postModify: httpModify
      }
    ];
    for (let i = 0; i < groups.length; i++) {
      const group = groups[i];
      const captures = group.regex.exec(url);
      if (captures) {
        const bucketValue = captures[group.indices.bucket];
        let pathValue = captures[group.indices.path];
        if (!pathValue) {
          pathValue = "";
        }
        location = new Location(bucketValue, pathValue);
        group.postModify(location);
        break;
      }
    }
    if (location == null) {
      throw invalidUrl(url);
    }
    return location;
  }
}
class FailRequest {
  constructor(error) {
    this.promise_ = Promise.reject(error);
  }
  getPromise() {
    return this.promise_;
  }
  cancel(_appDelete = false) {
  }
}
function start(f, callback, timeout) {
  let waitSeconds = 1;
  let retryTimeoutId = null;
  let globalTimeoutId = null;
  let hitTimeout = false;
  let cancelState = 0;
  function canceled2() {
    return cancelState === 2;
  }
  let triggeredCallback = false;
  function triggerCallback(...args) {
    if (!triggeredCallback) {
      triggeredCallback = true;
      callback.apply(null, args);
    }
  }
  function callWithDelay(millis) {
    retryTimeoutId = setTimeout(() => {
      retryTimeoutId = null;
      f(handler, canceled2());
    }, millis);
  }
  function clearGlobalTimeout() {
    if (globalTimeoutId) {
      clearTimeout(globalTimeoutId);
    }
  }
  function handler(success, ...args) {
    if (triggeredCallback) {
      clearGlobalTimeout();
      return;
    }
    if (success) {
      clearGlobalTimeout();
      triggerCallback.call(null, success, ...args);
      return;
    }
    const mustStop = canceled2() || hitTimeout;
    if (mustStop) {
      clearGlobalTimeout();
      triggerCallback.call(null, success, ...args);
      return;
    }
    if (waitSeconds < 64) {
      waitSeconds *= 2;
    }
    let waitMillis;
    if (cancelState === 1) {
      cancelState = 2;
      waitMillis = 0;
    } else {
      waitMillis = (waitSeconds + Math.random()) * 1e3;
    }
    callWithDelay(waitMillis);
  }
  let stopped = false;
  function stop2(wasTimeout) {
    if (stopped) {
      return;
    }
    stopped = true;
    clearGlobalTimeout();
    if (triggeredCallback) {
      return;
    }
    if (retryTimeoutId !== null) {
      if (!wasTimeout) {
        cancelState = 2;
      }
      clearTimeout(retryTimeoutId);
      callWithDelay(0);
    } else {
      if (!wasTimeout) {
        cancelState = 1;
      }
    }
  }
  callWithDelay(0);
  globalTimeoutId = setTimeout(() => {
    hitTimeout = true;
    stop2(true);
  }, timeout);
  return stop2;
}
function stop(id) {
  id(false);
}
function isJustDef(p) {
  return p !== void 0;
}
function isNonArrayObject(p) {
  return typeof p === "object" && !Array.isArray(p);
}
function isString(p) {
  return typeof p === "string" || p instanceof String;
}
function isNativeBlob(p) {
  return isNativeBlobDefined() && p instanceof Blob;
}
function isNativeBlobDefined() {
  return typeof Blob !== "undefined";
}
function validateNumber(argument, minValue, maxValue, value) {
  if (value < minValue) {
    throw invalidArgument(`Invalid value for '${argument}'. Expected ${minValue} or greater.`);
  }
  if (value > maxValue) {
    throw invalidArgument(`Invalid value for '${argument}'. Expected ${maxValue} or less.`);
  }
}
function makeUrl(urlPart, host, protocol) {
  let origin = host;
  if (protocol == null) {
    origin = `https://${host}`;
  }
  return `${protocol}://${origin}/v0${urlPart}`;
}
function makeQueryString(params) {
  const encode = encodeURIComponent;
  let queryPart = "?";
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const nextPart = encode(key) + "=" + encode(params[key]);
      queryPart = queryPart + nextPart + "&";
    }
  }
  queryPart = queryPart.slice(0, -1);
  return queryPart;
}
var ErrorCode;
(function(ErrorCode2) {
  ErrorCode2[ErrorCode2["NO_ERROR"] = 0] = "NO_ERROR";
  ErrorCode2[ErrorCode2["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
  ErrorCode2[ErrorCode2["ABORT"] = 2] = "ABORT";
})(ErrorCode || (ErrorCode = {}));
class NetworkRequest {
  constructor(url_, method_, headers_, body_, successCodes_, additionalRetryCodes_, callback_, errorCallback_, timeout_, progressCallback_, connectionFactory_) {
    this.url_ = url_;
    this.method_ = method_;
    this.headers_ = headers_;
    this.body_ = body_;
    this.successCodes_ = successCodes_;
    this.additionalRetryCodes_ = additionalRetryCodes_;
    this.callback_ = callback_;
    this.errorCallback_ = errorCallback_;
    this.timeout_ = timeout_;
    this.progressCallback_ = progressCallback_;
    this.connectionFactory_ = connectionFactory_;
    this.pendingConnection_ = null;
    this.backoffId_ = null;
    this.canceled_ = false;
    this.appDelete_ = false;
    this.promise_ = new Promise((resolve, reject) => {
      this.resolve_ = resolve;
      this.reject_ = reject;
      this.start_();
    });
  }
  start_() {
    const doTheRequest = (backoffCallback, canceled2) => {
      if (canceled2) {
        backoffCallback(false, new RequestEndStatus(false, null, true));
        return;
      }
      const connection = this.connectionFactory_();
      this.pendingConnection_ = connection;
      const progressListener = (progressEvent) => {
        const loaded = progressEvent.loaded;
        const total = progressEvent.lengthComputable ? progressEvent.total : -1;
        if (this.progressCallback_ !== null) {
          this.progressCallback_(loaded, total);
        }
      };
      if (this.progressCallback_ !== null) {
        connection.addUploadProgressListener(progressListener);
      }
      connection.send(this.url_, this.method_, this.body_, this.headers_).then(() => {
        if (this.progressCallback_ !== null) {
          connection.removeUploadProgressListener(progressListener);
        }
        this.pendingConnection_ = null;
        const hitServer = connection.getErrorCode() === ErrorCode.NO_ERROR;
        const status = connection.getStatus();
        if (!hitServer || this.isRetryStatusCode_(status)) {
          const wasCanceled = connection.getErrorCode() === ErrorCode.ABORT;
          backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
          return;
        }
        const successCode = this.successCodes_.indexOf(status) !== -1;
        backoffCallback(true, new RequestEndStatus(successCode, connection));
      });
    };
    const backoffDone = (requestWentThrough, status) => {
      const resolve = this.resolve_;
      const reject = this.reject_;
      const connection = status.connection;
      if (status.wasSuccessCode) {
        try {
          const result = this.callback_(connection, connection.getResponse());
          if (isJustDef(result)) {
            resolve(result);
          } else {
            resolve();
          }
        } catch (e) {
          reject(e);
        }
      } else {
        if (connection !== null) {
          const err = unknown();
          err.serverResponse = connection.getErrorText();
          if (this.errorCallback_) {
            reject(this.errorCallback_(connection, err));
          } else {
            reject(err);
          }
        } else {
          if (status.canceled) {
            const err = this.appDelete_ ? appDeleted() : canceled();
            reject(err);
          } else {
            const err = retryLimitExceeded();
            reject(err);
          }
        }
      }
    };
    if (this.canceled_) {
      backoffDone(false, new RequestEndStatus(false, null, true));
    } else {
      this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
    }
  }
  getPromise() {
    return this.promise_;
  }
  cancel(appDelete) {
    this.canceled_ = true;
    this.appDelete_ = appDelete || false;
    if (this.backoffId_ !== null) {
      stop(this.backoffId_);
    }
    if (this.pendingConnection_ !== null) {
      this.pendingConnection_.abort();
    }
  }
  isRetryStatusCode_(status) {
    const isFiveHundredCode = status >= 500 && status < 600;
    const extraRetryCodes = [
      408,
      429
    ];
    const isExtraRetryCode = extraRetryCodes.indexOf(status) !== -1;
    const isRequestSpecificRetryCode = this.additionalRetryCodes_.indexOf(status) !== -1;
    return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
  }
}
class RequestEndStatus {
  constructor(wasSuccessCode, connection, canceled2) {
    this.wasSuccessCode = wasSuccessCode;
    this.connection = connection;
    this.canceled = !!canceled2;
  }
}
function addAuthHeader_(headers, authToken) {
  if (authToken !== null && authToken.length > 0) {
    headers["Authorization"] = "Firebase " + authToken;
  }
}
function addVersionHeader_(headers, firebaseVersion) {
  headers["X-Firebase-Storage-Version"] = "webjs/" + (firebaseVersion !== null && firebaseVersion !== void 0 ? firebaseVersion : "AppManager");
}
function addGmpidHeader_(headers, appId) {
  if (appId) {
    headers["X-Firebase-GMPID"] = appId;
  }
}
function addAppCheckHeader_(headers, appCheckToken) {
  if (appCheckToken !== null) {
    headers["X-Firebase-AppCheck"] = appCheckToken;
  }
}
function makeRequest(requestInfo, appId, authToken, appCheckToken, requestFactory, firebaseVersion) {
  const queryPart = makeQueryString(requestInfo.urlParams);
  const url = requestInfo.url + queryPart;
  const headers = Object.assign({}, requestInfo.headers);
  addGmpidHeader_(headers, appId);
  addAuthHeader_(headers, authToken);
  addVersionHeader_(headers, firebaseVersion);
  addAppCheckHeader_(headers, appCheckToken);
  return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, requestFactory);
}
function getBlobBuilder() {
  if (typeof BlobBuilder !== "undefined") {
    return BlobBuilder;
  } else if (typeof WebKitBlobBuilder !== "undefined") {
    return WebKitBlobBuilder;
  } else {
    return void 0;
  }
}
function getBlob$1(...args) {
  const BlobBuilder2 = getBlobBuilder();
  if (BlobBuilder2 !== void 0) {
    const bb = new BlobBuilder2();
    for (let i = 0; i < args.length; i++) {
      bb.append(args[i]);
    }
    return bb.getBlob();
  } else {
    if (isNativeBlobDefined()) {
      return new Blob(args);
    } else {
      throw new StorageError("unsupported-environment", "This browser doesn't seem to support creating Blobs");
    }
  }
}
function sliceBlob(blob, start2, end) {
  if (blob.webkitSlice) {
    return blob.webkitSlice(start2, end);
  } else if (blob.mozSlice) {
    return blob.mozSlice(start2, end);
  } else if (blob.slice) {
    return blob.slice(start2, end);
  }
  return null;
}
function decodeBase64(encoded) {
  return atob(encoded);
}
const StringFormat = {
  RAW: "raw",
  BASE64: "base64",
  BASE64URL: "base64url",
  DATA_URL: "data_url"
};
class StringData {
  constructor(data, contentType) {
    this.data = data;
    this.contentType = contentType || null;
  }
}
function dataFromString(format, stringData) {
  switch (format) {
    case StringFormat.RAW:
      return new StringData(utf8Bytes_(stringData));
    case StringFormat.BASE64:
    case StringFormat.BASE64URL:
      return new StringData(base64Bytes_(format, stringData));
    case StringFormat.DATA_URL:
      return new StringData(dataURLBytes_(stringData), dataURLContentType_(stringData));
  }
  throw unknown();
}
function utf8Bytes_(value) {
  const b = [];
  for (let i = 0; i < value.length; i++) {
    let c = value.charCodeAt(i);
    if (c <= 127) {
      b.push(c);
    } else {
      if (c <= 2047) {
        b.push(192 | c >> 6, 128 | c & 63);
      } else {
        if ((c & 64512) === 55296) {
          const valid = i < value.length - 1 && (value.charCodeAt(i + 1) & 64512) === 56320;
          if (!valid) {
            b.push(239, 191, 189);
          } else {
            const hi = c;
            const lo = value.charCodeAt(++i);
            c = 65536 | (hi & 1023) << 10 | lo & 1023;
            b.push(240 | c >> 18, 128 | c >> 12 & 63, 128 | c >> 6 & 63, 128 | c & 63);
          }
        } else {
          if ((c & 64512) === 56320) {
            b.push(239, 191, 189);
          } else {
            b.push(224 | c >> 12, 128 | c >> 6 & 63, 128 | c & 63);
          }
        }
      }
    }
  }
  return new Uint8Array(b);
}
function percentEncodedBytes_(value) {
  let decoded;
  try {
    decoded = decodeURIComponent(value);
  } catch (e) {
    throw invalidFormat(StringFormat.DATA_URL, "Malformed data URL.");
  }
  return utf8Bytes_(decoded);
}
function base64Bytes_(format, value) {
  switch (format) {
    case StringFormat.BASE64: {
      const hasMinus = value.indexOf("-") !== -1;
      const hasUnder = value.indexOf("_") !== -1;
      if (hasMinus || hasUnder) {
        const invalidChar = hasMinus ? "-" : "_";
        throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64url encoded?");
      }
      break;
    }
    case StringFormat.BASE64URL: {
      const hasPlus = value.indexOf("+") !== -1;
      const hasSlash = value.indexOf("/") !== -1;
      if (hasPlus || hasSlash) {
        const invalidChar = hasPlus ? "+" : "/";
        throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
      }
      value = value.replace(/-/g, "+").replace(/_/g, "/");
      break;
    }
  }
  let bytes;
  try {
    bytes = decodeBase64(value);
  } catch (e) {
    throw invalidFormat(format, "Invalid character found");
  }
  const array = new Uint8Array(bytes.length);
  for (let i = 0; i < bytes.length; i++) {
    array[i] = bytes.charCodeAt(i);
  }
  return array;
}
class DataURLParts {
  constructor(dataURL) {
    this.base64 = false;
    this.contentType = null;
    const matches = dataURL.match(/^data:([^,]+)?,/);
    if (matches === null) {
      throw invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
    }
    const middle = matches[1] || null;
    if (middle != null) {
      this.base64 = endsWith(middle, ";base64");
      this.contentType = this.base64 ? middle.substring(0, middle.length - ";base64".length) : middle;
    }
    this.rest = dataURL.substring(dataURL.indexOf(",") + 1);
  }
}
function dataURLBytes_(dataUrl) {
  const parts = new DataURLParts(dataUrl);
  if (parts.base64) {
    return base64Bytes_(StringFormat.BASE64, parts.rest);
  } else {
    return percentEncodedBytes_(parts.rest);
  }
}
function dataURLContentType_(dataUrl) {
  const parts = new DataURLParts(dataUrl);
  return parts.contentType;
}
function endsWith(s, end) {
  const longEnough = s.length >= end.length;
  if (!longEnough) {
    return false;
  }
  return s.substring(s.length - end.length) === end;
}
class FbsBlob {
  constructor(data, elideCopy) {
    let size = 0;
    let blobType = "";
    if (isNativeBlob(data)) {
      this.data_ = data;
      size = data.size;
      blobType = data.type;
    } else if (data instanceof ArrayBuffer) {
      if (elideCopy) {
        this.data_ = new Uint8Array(data);
      } else {
        this.data_ = new Uint8Array(data.byteLength);
        this.data_.set(new Uint8Array(data));
      }
      size = this.data_.length;
    } else if (data instanceof Uint8Array) {
      if (elideCopy) {
        this.data_ = data;
      } else {
        this.data_ = new Uint8Array(data.length);
        this.data_.set(data);
      }
      size = data.length;
    }
    this.size_ = size;
    this.type_ = blobType;
  }
  size() {
    return this.size_;
  }
  type() {
    return this.type_;
  }
  slice(startByte, endByte) {
    if (isNativeBlob(this.data_)) {
      const realBlob = this.data_;
      const sliced = sliceBlob(realBlob, startByte, endByte);
      if (sliced === null) {
        return null;
      }
      return new FbsBlob(sliced);
    } else {
      const slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
      return new FbsBlob(slice, true);
    }
  }
  static getBlob(...args) {
    if (isNativeBlobDefined()) {
      const blobby = args.map((val) => {
        if (val instanceof FbsBlob) {
          return val.data_;
        } else {
          return val;
        }
      });
      return new FbsBlob(getBlob$1.apply(null, blobby));
    } else {
      const uint8Arrays = args.map((val) => {
        if (isString(val)) {
          return dataFromString(StringFormat.RAW, val).data;
        } else {
          return val.data_;
        }
      });
      let finalLength = 0;
      uint8Arrays.forEach((array) => {
        finalLength += array.byteLength;
      });
      const merged = new Uint8Array(finalLength);
      let index = 0;
      uint8Arrays.forEach((array) => {
        for (let i = 0; i < array.length; i++) {
          merged[index++] = array[i];
        }
      });
      return new FbsBlob(merged, true);
    }
  }
  uploadData() {
    return this.data_;
  }
}
function jsonObjectOrNull(s) {
  let obj;
  try {
    obj = JSON.parse(s);
  } catch (e) {
    return null;
  }
  if (isNonArrayObject(obj)) {
    return obj;
  } else {
    return null;
  }
}
function parent(path) {
  if (path.length === 0) {
    return null;
  }
  const index = path.lastIndexOf("/");
  if (index === -1) {
    return "";
  }
  const newPath = path.slice(0, index);
  return newPath;
}
function child(path, childPath) {
  const canonicalChildPath = childPath.split("/").filter((component) => component.length > 0).join("/");
  if (path.length === 0) {
    return canonicalChildPath;
  } else {
    return path + "/" + canonicalChildPath;
  }
}
function lastComponent(path) {
  const index = path.lastIndexOf("/", path.length - 2);
  if (index === -1) {
    return path;
  } else {
    return path.slice(index + 1);
  }
}
function noXform_(metadata, value) {
  return value;
}
class Mapping {
  constructor(server, local, writable, xform) {
    this.server = server;
    this.local = local || server;
    this.writable = !!writable;
    this.xform = xform || noXform_;
  }
}
let mappings_ = null;
function xformPath(fullPath) {
  if (!isString(fullPath) || fullPath.length < 2) {
    return fullPath;
  } else {
    return lastComponent(fullPath);
  }
}
function getMappings() {
  if (mappings_) {
    return mappings_;
  }
  const mappings = [];
  mappings.push(new Mapping("bucket"));
  mappings.push(new Mapping("generation"));
  mappings.push(new Mapping("metageneration"));
  mappings.push(new Mapping("name", "fullPath", true));
  function mappingsXformPath(_metadata, fullPath) {
    return xformPath(fullPath);
  }
  const nameMapping = new Mapping("name");
  nameMapping.xform = mappingsXformPath;
  mappings.push(nameMapping);
  function xformSize(_metadata, size) {
    if (size !== void 0) {
      return Number(size);
    } else {
      return size;
    }
  }
  const sizeMapping = new Mapping("size");
  sizeMapping.xform = xformSize;
  mappings.push(sizeMapping);
  mappings.push(new Mapping("timeCreated"));
  mappings.push(new Mapping("updated"));
  mappings.push(new Mapping("md5Hash", null, true));
  mappings.push(new Mapping("cacheControl", null, true));
  mappings.push(new Mapping("contentDisposition", null, true));
  mappings.push(new Mapping("contentEncoding", null, true));
  mappings.push(new Mapping("contentLanguage", null, true));
  mappings.push(new Mapping("contentType", null, true));
  mappings.push(new Mapping("metadata", "customMetadata", true));
  mappings_ = mappings;
  return mappings_;
}
function addRef(metadata, service) {
  function generateRef() {
    const bucket = metadata["bucket"];
    const path = metadata["fullPath"];
    const loc = new Location(bucket, path);
    return service._makeStorageReference(loc);
  }
  Object.defineProperty(metadata, "ref", { get: generateRef });
}
function fromResource(service, resource, mappings) {
  const metadata = {};
  metadata["type"] = "file";
  const len = mappings.length;
  for (let i = 0; i < len; i++) {
    const mapping = mappings[i];
    metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
  }
  addRef(metadata, service);
  return metadata;
}
function fromResourceString(service, resourceString, mappings) {
  const obj = jsonObjectOrNull(resourceString);
  if (obj === null) {
    return null;
  }
  const resource = obj;
  return fromResource(service, resource, mappings);
}
function toResourceString(metadata, mappings) {
  const resource = {};
  const len = mappings.length;
  for (let i = 0; i < len; i++) {
    const mapping = mappings[i];
    if (mapping.writable) {
      resource[mapping.server] = metadata[mapping.local];
    }
  }
  return JSON.stringify(resource);
}
class RequestInfo {
  constructor(url, method, handler, timeout) {
    this.url = url;
    this.method = method;
    this.handler = handler;
    this.timeout = timeout;
    this.urlParams = {};
    this.headers = {};
    this.body = null;
    this.errorHandler = null;
    this.progressCallback = null;
    this.successCodes = [200];
    this.additionalRetryCodes = [];
  }
}
function handlerCheck(cndn) {
  if (!cndn) {
    throw unknown();
  }
}
function metadataHandler(service, mappings) {
  function handler(xhr, text) {
    const metadata = fromResourceString(service, text, mappings);
    handlerCheck(metadata !== null);
    return metadata;
  }
  return handler;
}
function sharedErrorHandler(location) {
  function errorHandler(xhr, err) {
    let newErr;
    if (xhr.getStatus() === 401) {
      if (xhr.getErrorText().includes("Firebase App Check token is invalid")) {
        newErr = unauthorizedApp();
      } else {
        newErr = unauthenticated();
      }
    } else {
      if (xhr.getStatus() === 402) {
        newErr = quotaExceeded(location.bucket);
      } else {
        if (xhr.getStatus() === 403) {
          newErr = unauthorized(location.path);
        } else {
          newErr = err;
        }
      }
    }
    newErr.serverResponse = err.serverResponse;
    return newErr;
  }
  return errorHandler;
}
function determineContentType_(metadata, blob) {
  return metadata && metadata["contentType"] || blob && blob.type() || "application/octet-stream";
}
function metadataForUpload_(location, blob, metadata) {
  const metadataClone = Object.assign({}, metadata);
  metadataClone["fullPath"] = location.path;
  metadataClone["size"] = blob.size();
  if (!metadataClone["contentType"]) {
    metadataClone["contentType"] = determineContentType_(null, blob);
  }
  return metadataClone;
}
function multipartUpload(service, location, mappings, blob, metadata) {
  const urlPart = location.bucketOnlyServerUrl();
  const headers = {
    "X-Goog-Upload-Protocol": "multipart"
  };
  function genBoundary() {
    let str = "";
    for (let i = 0; i < 2; i++) {
      str = str + Math.random().toString().slice(2);
    }
    return str;
  }
  const boundary = genBoundary();
  headers["Content-Type"] = "multipart/related; boundary=" + boundary;
  const metadata_ = metadataForUpload_(location, blob, metadata);
  const metadataString = toResourceString(metadata_, mappings);
  const preBlobPart = "--" + boundary + "\r\nContent-Type: application/json; charset=utf-8\r\n\r\n" + metadataString + "\r\n--" + boundary + "\r\nContent-Type: " + metadata_["contentType"] + "\r\n\r\n";
  const postBlobPart = "\r\n--" + boundary + "--";
  const body = FbsBlob.getBlob(preBlobPart, blob, postBlobPart);
  if (body === null) {
    throw cannotSliceBlob();
  }
  const urlParams = { name: metadata_["fullPath"] };
  const url = makeUrl(urlPart, service.host, service._protocol);
  const method = "POST";
  const timeout = service.maxUploadRetryTime;
  const requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
  requestInfo.urlParams = urlParams;
  requestInfo.headers = headers;
  requestInfo.body = body.uploadData();
  requestInfo.errorHandler = sharedErrorHandler(location);
  return requestInfo;
}
class XhrConnection {
  constructor() {
    this.sent_ = false;
    this.xhr_ = new XMLHttpRequest();
    this.initXhr();
    this.errorCode_ = ErrorCode.NO_ERROR;
    this.sendPromise_ = new Promise((resolve) => {
      this.xhr_.addEventListener("abort", () => {
        this.errorCode_ = ErrorCode.ABORT;
        resolve();
      });
      this.xhr_.addEventListener("error", () => {
        this.errorCode_ = ErrorCode.NETWORK_ERROR;
        resolve();
      });
      this.xhr_.addEventListener("load", () => {
        resolve();
      });
    });
  }
  send(url, method, body, headers) {
    if (this.sent_) {
      throw internalError("cannot .send() more than once");
    }
    this.sent_ = true;
    this.xhr_.open(method, url, true);
    if (headers !== void 0) {
      for (const key in headers) {
        if (headers.hasOwnProperty(key)) {
          this.xhr_.setRequestHeader(key, headers[key].toString());
        }
      }
    }
    if (body !== void 0) {
      this.xhr_.send(body);
    } else {
      this.xhr_.send();
    }
    return this.sendPromise_;
  }
  getErrorCode() {
    if (!this.sent_) {
      throw internalError("cannot .getErrorCode() before sending");
    }
    return this.errorCode_;
  }
  getStatus() {
    if (!this.sent_) {
      throw internalError("cannot .getStatus() before sending");
    }
    try {
      return this.xhr_.status;
    } catch (e) {
      return -1;
    }
  }
  getResponse() {
    if (!this.sent_) {
      throw internalError("cannot .getResponse() before sending");
    }
    return this.xhr_.response;
  }
  getErrorText() {
    if (!this.sent_) {
      throw internalError("cannot .getErrorText() before sending");
    }
    return this.xhr_.statusText;
  }
  abort() {
    this.xhr_.abort();
  }
  getResponseHeader(header) {
    return this.xhr_.getResponseHeader(header);
  }
  addUploadProgressListener(listener) {
    if (this.xhr_.upload != null) {
      this.xhr_.upload.addEventListener("progress", listener);
    }
  }
  removeUploadProgressListener(listener) {
    if (this.xhr_.upload != null) {
      this.xhr_.upload.removeEventListener("progress", listener);
    }
  }
}
class XhrTextConnection extends XhrConnection {
  initXhr() {
    this.xhr_.responseType = "text";
  }
}
function newTextConnection() {
  return new XhrTextConnection();
}
class Reference {
  constructor(_service, location) {
    this._service = _service;
    if (location instanceof Location) {
      this._location = location;
    } else {
      this._location = Location.makeFromUrl(location, _service.host);
    }
  }
  toString() {
    return "gs://" + this._location.bucket + "/" + this._location.path;
  }
  _newRef(service, location) {
    return new Reference(service, location);
  }
  get root() {
    const location = new Location(this._location.bucket, "");
    return this._newRef(this._service, location);
  }
  get bucket() {
    return this._location.bucket;
  }
  get fullPath() {
    return this._location.path;
  }
  get name() {
    return lastComponent(this._location.path);
  }
  get storage() {
    return this._service;
  }
  get parent() {
    const newPath = parent(this._location.path);
    if (newPath === null) {
      return null;
    }
    const location = new Location(this._location.bucket, newPath);
    return new Reference(this._service, location);
  }
  _throwIfRoot(name2) {
    if (this._location.path === "") {
      throw invalidRootOperation(name2);
    }
  }
}
function uploadBytes$1(ref2, data, metadata) {
  ref2._throwIfRoot("uploadBytes");
  const requestInfo = multipartUpload(ref2.storage, ref2._location, getMappings(), new FbsBlob(data, true), metadata);
  return ref2.storage.makeRequestWithTokens(requestInfo, newTextConnection).then((finalMetadata) => {
    return {
      metadata: finalMetadata,
      ref: ref2
    };
  });
}
function _getChild$1(ref2, childPath) {
  const newPath = child(ref2._location.path, childPath);
  const location = new Location(ref2._location.bucket, newPath);
  return new Reference(ref2.storage, location);
}
function isUrl(path) {
  return /^[A-Za-z]+:\/\//.test(path);
}
function refFromURL(service, url) {
  return new Reference(service, url);
}
function refFromPath(ref2, path) {
  if (ref2 instanceof FirebaseStorageImpl) {
    const service = ref2;
    if (service._bucket == null) {
      throw noDefaultBucket();
    }
    const reference = new Reference(service, service._bucket);
    if (path != null) {
      return refFromPath(reference, path);
    } else {
      return reference;
    }
  } else {
    if (path !== void 0) {
      return _getChild$1(ref2, path);
    } else {
      return ref2;
    }
  }
}
function ref$1(serviceOrRef, pathOrUrl) {
  if (pathOrUrl && isUrl(pathOrUrl)) {
    if (serviceOrRef instanceof FirebaseStorageImpl) {
      return refFromURL(serviceOrRef, pathOrUrl);
    } else {
      throw invalidArgument("To use ref(service, url), the first argument must be a Storage instance.");
    }
  } else {
    return refFromPath(serviceOrRef, pathOrUrl);
  }
}
function extractBucket(host, config) {
  const bucketString = config === null || config === void 0 ? void 0 : config[CONFIG_STORAGE_BUCKET_KEY];
  if (bucketString == null) {
    return null;
  }
  return Location.makeFromBucketSpec(bucketString, host);
}
function connectStorageEmulator$1(storage, host, port, options = {}) {
  storage.host = `${host}:${port}`;
  storage._protocol = "http";
  const { mockUserToken } = options;
  if (mockUserToken) {
    storage._overrideAuthToken = typeof mockUserToken === "string" ? mockUserToken : createMockUserToken(mockUserToken, storage.app.options.projectId);
  }
}
class FirebaseStorageImpl {
  constructor(app, _authProvider, _appCheckProvider, _url, _firebaseVersion) {
    this.app = app;
    this._authProvider = _authProvider;
    this._appCheckProvider = _appCheckProvider;
    this._url = _url;
    this._firebaseVersion = _firebaseVersion;
    this._bucket = null;
    this._host = DEFAULT_HOST;
    this._protocol = "https";
    this._appId = null;
    this._deleted = false;
    this._maxOperationRetryTime = DEFAULT_MAX_OPERATION_RETRY_TIME;
    this._maxUploadRetryTime = DEFAULT_MAX_UPLOAD_RETRY_TIME;
    this._requests = /* @__PURE__ */ new Set();
    if (_url != null) {
      this._bucket = Location.makeFromBucketSpec(_url, this._host);
    } else {
      this._bucket = extractBucket(this._host, this.app.options);
    }
  }
  get host() {
    return this._host;
  }
  set host(host) {
    this._host = host;
    if (this._url != null) {
      this._bucket = Location.makeFromBucketSpec(this._url, host);
    } else {
      this._bucket = extractBucket(host, this.app.options);
    }
  }
  get maxUploadRetryTime() {
    return this._maxUploadRetryTime;
  }
  set maxUploadRetryTime(time) {
    validateNumber(
      "time",
      0,
      Number.POSITIVE_INFINITY,
      time
    );
    this._maxUploadRetryTime = time;
  }
  get maxOperationRetryTime() {
    return this._maxOperationRetryTime;
  }
  set maxOperationRetryTime(time) {
    validateNumber(
      "time",
      0,
      Number.POSITIVE_INFINITY,
      time
    );
    this._maxOperationRetryTime = time;
  }
  async _getAuthToken() {
    if (this._overrideAuthToken) {
      return this._overrideAuthToken;
    }
    const auth = this._authProvider.getImmediate({ optional: true });
    if (auth) {
      const tokenData = await auth.getToken();
      if (tokenData !== null) {
        return tokenData.accessToken;
      }
    }
    return null;
  }
  async _getAppCheckToken() {
    const appCheck = this._appCheckProvider.getImmediate({ optional: true });
    if (appCheck) {
      const result = await appCheck.getToken();
      return result.token;
    }
    return null;
  }
  _delete() {
    if (!this._deleted) {
      this._deleted = true;
      this._requests.forEach((request) => request.cancel());
      this._requests.clear();
    }
    return Promise.resolve();
  }
  _makeStorageReference(loc) {
    return new Reference(this, loc);
  }
  _makeRequest(requestInfo, requestFactory, authToken, appCheckToken) {
    if (!this._deleted) {
      const request = makeRequest(requestInfo, this._appId, authToken, appCheckToken, requestFactory, this._firebaseVersion);
      this._requests.add(request);
      request.getPromise().then(() => this._requests.delete(request), () => this._requests.delete(request));
      return request;
    } else {
      return new FailRequest(appDeleted());
    }
  }
  async makeRequestWithTokens(requestInfo, requestFactory) {
    const [authToken, appCheckToken] = await Promise.all([
      this._getAuthToken(),
      this._getAppCheckToken()
    ]);
    return this._makeRequest(requestInfo, requestFactory, authToken, appCheckToken).getPromise();
  }
}
const name = "@firebase/storage";
const version = "0.9.9";
const STORAGE_TYPE = "storage";
function uploadBytes(ref2, data, metadata) {
  ref2 = getModularInstance(ref2);
  return uploadBytes$1(ref2, data, metadata);
}
function ref(serviceOrRef, pathOrUrl) {
  serviceOrRef = getModularInstance(serviceOrRef);
  return ref$1(serviceOrRef, pathOrUrl);
}
function getStorage(app = getApp(), bucketUrl) {
  app = getModularInstance(app);
  const storageProvider = _getProvider(app, STORAGE_TYPE);
  const storageInstance = storageProvider.getImmediate({
    identifier: bucketUrl
  });
  return storageInstance;
}
function connectStorageEmulator(storage, host, port, options = {}) {
  connectStorageEmulator$1(storage, host, port, options);
}
function factory(container, { instanceIdentifier: url }) {
  const app = container.getProvider("app").getImmediate();
  const authProvider = container.getProvider("auth-internal");
  const appCheckProvider = container.getProvider("app-check-internal");
  return new FirebaseStorageImpl(app, authProvider, appCheckProvider, url, SDK_VERSION);
}
function registerStorage() {
  _registerComponent(new Component(STORAGE_TYPE, factory, "PUBLIC").setMultipleInstances(true));
  registerVersion(name, version, "");
  registerVersion(name, version, "esm2017");
}
registerStorage();
export {
  connectStorageEmulator as c,
  getStorage as g,
  ref as r,
  uploadBytes as u
};
//# sourceMappingURL=index.esm2017-1fab45ee.js.map
