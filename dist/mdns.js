var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/tslib/tslib.es6.mjs
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __addDisposableResource: () => __addDisposableResource,
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldIn: () => __classPrivateFieldIn,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __disposeResources: () => __disposeResources,
  __esDecorate: () => __esDecorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __propKey: () => __propKey,
  __read: () => __read,
  __rest: () => __rest,
  __rewriteRelativeImportExtension: () => __rewriteRelativeImportExtension,
  __runInitializers: () => __runInitializers,
  __setFunctionName: () => __setFunctionName,
  __spread: () => __spread,
  __spreadArray: () => __spreadArray,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values,
  default: () => tslib_es6_default
});
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function awaitReturn(f) {
    return function(v) {
      return Promise.resolve(v).then(f, reject);
    };
  }
  function verb(n, f) {
    if (g[n]) {
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
      if (f) i[n] = f(i[n]);
    }
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
            fail(e);
            return next();
          });
        } else s |= 1;
      } catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
    return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
      return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
  }
  return path;
}
var extendStatics, __assign, __createBinding, __setModuleDefault, ownKeys, _SuppressedError, tslib_es6_default;
var init_tslib_es6 = __esm({
  "node_modules/tslib/tslib.es6.mjs"() {
    extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    __createBinding = Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    __setModuleDefault = Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    };
    ownKeys = function(o) {
      ownKeys = Object.getOwnPropertyNames || function(o2) {
        var ar = [];
        for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
        return ar;
      };
      return ownKeys(o);
    };
    _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    tslib_es6_default = {
      __extends,
      __assign,
      __rest,
      __decorate,
      __param,
      __esDecorate,
      __runInitializers,
      __propKey,
      __setFunctionName,
      __metadata,
      __awaiter,
      __generator,
      __createBinding,
      __exportStar,
      __values,
      __read,
      __spread,
      __spreadArrays,
      __spreadArray,
      __await,
      __asyncGenerator,
      __asyncDelegator,
      __asyncValues,
      __makeTemplateObject,
      __importStar,
      __importDefault,
      __classPrivateFieldGet,
      __classPrivateFieldSet,
      __classPrivateFieldIn,
      __addDisposableResource,
      __disposeResources,
      __rewriteRelativeImportExtension
    };
  }
});

// node_modules/source-map/lib/base64.js
var require_base64 = __commonJS({
  "node_modules/source-map/lib/base64.js"(exports2) {
    var intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    exports2.encode = function(number) {
      if (0 <= number && number < intToCharMap.length) {
        return intToCharMap[number];
      }
      throw new TypeError("Must be between 0 and 63: " + number);
    };
    exports2.decode = function(charCode) {
      var bigA = 65;
      var bigZ = 90;
      var littleA = 97;
      var littleZ = 122;
      var zero = 48;
      var nine = 57;
      var plus = 43;
      var slash = 47;
      var littleOffset = 26;
      var numberOffset = 52;
      if (bigA <= charCode && charCode <= bigZ) {
        return charCode - bigA;
      }
      if (littleA <= charCode && charCode <= littleZ) {
        return charCode - littleA + littleOffset;
      }
      if (zero <= charCode && charCode <= nine) {
        return charCode - zero + numberOffset;
      }
      if (charCode == plus) {
        return 62;
      }
      if (charCode == slash) {
        return 63;
      }
      return -1;
    };
  }
});

// node_modules/source-map/lib/base64-vlq.js
var require_base64_vlq = __commonJS({
  "node_modules/source-map/lib/base64-vlq.js"(exports2) {
    var base64 = require_base64();
    var VLQ_BASE_SHIFT = 5;
    var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
    var VLQ_BASE_MASK = VLQ_BASE - 1;
    var VLQ_CONTINUATION_BIT = VLQ_BASE;
    function toVLQSigned(aValue) {
      return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
    }
    function fromVLQSigned(aValue) {
      var isNegative = (aValue & 1) === 1;
      var shifted = aValue >> 1;
      return isNegative ? -shifted : shifted;
    }
    exports2.encode = function base64VLQ_encode(aValue) {
      var encoded = "";
      var digit;
      var vlq = toVLQSigned(aValue);
      do {
        digit = vlq & VLQ_BASE_MASK;
        vlq >>>= VLQ_BASE_SHIFT;
        if (vlq > 0) {
          digit |= VLQ_CONTINUATION_BIT;
        }
        encoded += base64.encode(digit);
      } while (vlq > 0);
      return encoded;
    };
    exports2.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
      var strLen = aStr.length;
      var result = 0;
      var shift = 0;
      var continuation, digit;
      do {
        if (aIndex >= strLen) {
          throw new Error("Expected more digits in base 64 VLQ value.");
        }
        digit = base64.decode(aStr.charCodeAt(aIndex++));
        if (digit === -1) {
          throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
        }
        continuation = !!(digit & VLQ_CONTINUATION_BIT);
        digit &= VLQ_BASE_MASK;
        result = result + (digit << shift);
        shift += VLQ_BASE_SHIFT;
      } while (continuation);
      aOutParam.value = fromVLQSigned(result);
      aOutParam.rest = aIndex;
    };
  }
});

// node_modules/source-map/lib/util.js
var require_util = __commonJS({
  "node_modules/source-map/lib/util.js"(exports2) {
    function getArg(aArgs, aName, aDefaultValue) {
      if (aName in aArgs) {
        return aArgs[aName];
      } else if (arguments.length === 3) {
        return aDefaultValue;
      } else {
        throw new Error('"' + aName + '" is a required argument.');
      }
    }
    exports2.getArg = getArg;
    var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
    var dataUrlRegexp = /^data:.+\,.+$/;
    function urlParse(aUrl) {
      var match = aUrl.match(urlRegexp);
      if (!match) {
        return null;
      }
      return {
        scheme: match[1],
        auth: match[2],
        host: match[3],
        port: match[4],
        path: match[5]
      };
    }
    exports2.urlParse = urlParse;
    function urlGenerate(aParsedUrl) {
      var url = "";
      if (aParsedUrl.scheme) {
        url += aParsedUrl.scheme + ":";
      }
      url += "//";
      if (aParsedUrl.auth) {
        url += aParsedUrl.auth + "@";
      }
      if (aParsedUrl.host) {
        url += aParsedUrl.host;
      }
      if (aParsedUrl.port) {
        url += ":" + aParsedUrl.port;
      }
      if (aParsedUrl.path) {
        url += aParsedUrl.path;
      }
      return url;
    }
    exports2.urlGenerate = urlGenerate;
    function normalize(aPath) {
      var path = aPath;
      var url = urlParse(aPath);
      if (url) {
        if (!url.path) {
          return aPath;
        }
        path = url.path;
      }
      var isAbsolute = exports2.isAbsolute(path);
      var parts = path.split(/\/+/);
      for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
        part = parts[i];
        if (part === ".") {
          parts.splice(i, 1);
        } else if (part === "..") {
          up++;
        } else if (up > 0) {
          if (part === "") {
            parts.splice(i + 1, up);
            up = 0;
          } else {
            parts.splice(i, 2);
            up--;
          }
        }
      }
      path = parts.join("/");
      if (path === "") {
        path = isAbsolute ? "/" : ".";
      }
      if (url) {
        url.path = path;
        return urlGenerate(url);
      }
      return path;
    }
    exports2.normalize = normalize;
    function join(aRoot, aPath) {
      if (aRoot === "") {
        aRoot = ".";
      }
      if (aPath === "") {
        aPath = ".";
      }
      var aPathUrl = urlParse(aPath);
      var aRootUrl = urlParse(aRoot);
      if (aRootUrl) {
        aRoot = aRootUrl.path || "/";
      }
      if (aPathUrl && !aPathUrl.scheme) {
        if (aRootUrl) {
          aPathUrl.scheme = aRootUrl.scheme;
        }
        return urlGenerate(aPathUrl);
      }
      if (aPathUrl || aPath.match(dataUrlRegexp)) {
        return aPath;
      }
      if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
        aRootUrl.host = aPath;
        return urlGenerate(aRootUrl);
      }
      var joined = aPath.charAt(0) === "/" ? aPath : normalize(aRoot.replace(/\/+$/, "") + "/" + aPath);
      if (aRootUrl) {
        aRootUrl.path = joined;
        return urlGenerate(aRootUrl);
      }
      return joined;
    }
    exports2.join = join;
    exports2.isAbsolute = function(aPath) {
      return aPath.charAt(0) === "/" || urlRegexp.test(aPath);
    };
    function relative(aRoot, aPath) {
      if (aRoot === "") {
        aRoot = ".";
      }
      aRoot = aRoot.replace(/\/$/, "");
      var level = 0;
      while (aPath.indexOf(aRoot + "/") !== 0) {
        var index = aRoot.lastIndexOf("/");
        if (index < 0) {
          return aPath;
        }
        aRoot = aRoot.slice(0, index);
        if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
          return aPath;
        }
        ++level;
      }
      return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
    }
    exports2.relative = relative;
    var supportsNullProto = (function() {
      var obj = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in obj);
    })();
    function identity(s) {
      return s;
    }
    function toSetString(aStr) {
      if (isProtoString(aStr)) {
        return "$" + aStr;
      }
      return aStr;
    }
    exports2.toSetString = supportsNullProto ? identity : toSetString;
    function fromSetString(aStr) {
      if (isProtoString(aStr)) {
        return aStr.slice(1);
      }
      return aStr;
    }
    exports2.fromSetString = supportsNullProto ? identity : fromSetString;
    function isProtoString(s) {
      if (!s) {
        return false;
      }
      var length = s.length;
      if (length < 9) {
        return false;
      }
      if (s.charCodeAt(length - 1) !== 95 || s.charCodeAt(length - 2) !== 95 || s.charCodeAt(length - 3) !== 111 || s.charCodeAt(length - 4) !== 116 || s.charCodeAt(length - 5) !== 111 || s.charCodeAt(length - 6) !== 114 || s.charCodeAt(length - 7) !== 112 || s.charCodeAt(length - 8) !== 95 || s.charCodeAt(length - 9) !== 95) {
        return false;
      }
      for (var i = length - 10; i >= 0; i--) {
        if (s.charCodeAt(i) !== 36) {
          return false;
        }
      }
      return true;
    }
    function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
      var cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0 || onlyCompareOriginal) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports2.compareByOriginalPositions = compareByOriginalPositions;
    function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
      var cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0 || onlyCompareGenerated) {
        return cmp;
      }
      cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports2.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
    function strcmp(aStr1, aStr2) {
      if (aStr1 === aStr2) {
        return 0;
      }
      if (aStr1 === null) {
        return 1;
      }
      if (aStr2 === null) {
        return -1;
      }
      if (aStr1 > aStr2) {
        return 1;
      }
      return -1;
    }
    function compareByGeneratedPositionsInflated(mappingA, mappingB) {
      var cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports2.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
    function parseSourceMapInput(str) {
      return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ""));
    }
    exports2.parseSourceMapInput = parseSourceMapInput;
    function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
      sourceURL = sourceURL || "";
      if (sourceRoot) {
        if (sourceRoot[sourceRoot.length - 1] !== "/" && sourceURL[0] !== "/") {
          sourceRoot += "/";
        }
        sourceURL = sourceRoot + sourceURL;
      }
      if (sourceMapURL) {
        var parsed = urlParse(sourceMapURL);
        if (!parsed) {
          throw new Error("sourceMapURL could not be parsed");
        }
        if (parsed.path) {
          var index = parsed.path.lastIndexOf("/");
          if (index >= 0) {
            parsed.path = parsed.path.substring(0, index + 1);
          }
        }
        sourceURL = join(urlGenerate(parsed), sourceURL);
      }
      return normalize(sourceURL);
    }
    exports2.computeSourceURL = computeSourceURL;
  }
});

// node_modules/source-map/lib/array-set.js
var require_array_set = __commonJS({
  "node_modules/source-map/lib/array-set.js"(exports2) {
    var util = require_util();
    var has = Object.prototype.hasOwnProperty;
    var hasNativeMap = typeof Map !== "undefined";
    function ArraySet() {
      this._array = [];
      this._set = hasNativeMap ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
    }
    ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
      var set = new ArraySet();
      for (var i = 0, len = aArray.length; i < len; i++) {
        set.add(aArray[i], aAllowDuplicates);
      }
      return set;
    };
    ArraySet.prototype.size = function ArraySet_size() {
      return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
    };
    ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
      var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
      var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
      var idx = this._array.length;
      if (!isDuplicate || aAllowDuplicates) {
        this._array.push(aStr);
      }
      if (!isDuplicate) {
        if (hasNativeMap) {
          this._set.set(aStr, idx);
        } else {
          this._set[sStr] = idx;
        }
      }
    };
    ArraySet.prototype.has = function ArraySet_has(aStr) {
      if (hasNativeMap) {
        return this._set.has(aStr);
      } else {
        var sStr = util.toSetString(aStr);
        return has.call(this._set, sStr);
      }
    };
    ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
      if (hasNativeMap) {
        var idx = this._set.get(aStr);
        if (idx >= 0) {
          return idx;
        }
      } else {
        var sStr = util.toSetString(aStr);
        if (has.call(this._set, sStr)) {
          return this._set[sStr];
        }
      }
      throw new Error('"' + aStr + '" is not in the set.');
    };
    ArraySet.prototype.at = function ArraySet_at(aIdx) {
      if (aIdx >= 0 && aIdx < this._array.length) {
        return this._array[aIdx];
      }
      throw new Error("No element indexed by " + aIdx);
    };
    ArraySet.prototype.toArray = function ArraySet_toArray() {
      return this._array.slice();
    };
    exports2.ArraySet = ArraySet;
  }
});

// node_modules/source-map/lib/mapping-list.js
var require_mapping_list = __commonJS({
  "node_modules/source-map/lib/mapping-list.js"(exports2) {
    var util = require_util();
    function generatedPositionAfter(mappingA, mappingB) {
      var lineA = mappingA.generatedLine;
      var lineB = mappingB.generatedLine;
      var columnA = mappingA.generatedColumn;
      var columnB = mappingB.generatedColumn;
      return lineB > lineA || lineB == lineA && columnB >= columnA || util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
    }
    function MappingList() {
      this._array = [];
      this._sorted = true;
      this._last = { generatedLine: -1, generatedColumn: 0 };
    }
    MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
      this._array.forEach(aCallback, aThisArg);
    };
    MappingList.prototype.add = function MappingList_add(aMapping) {
      if (generatedPositionAfter(this._last, aMapping)) {
        this._last = aMapping;
        this._array.push(aMapping);
      } else {
        this._sorted = false;
        this._array.push(aMapping);
      }
    };
    MappingList.prototype.toArray = function MappingList_toArray() {
      if (!this._sorted) {
        this._array.sort(util.compareByGeneratedPositionsInflated);
        this._sorted = true;
      }
      return this._array;
    };
    exports2.MappingList = MappingList;
  }
});

// node_modules/source-map/lib/source-map-generator.js
var require_source_map_generator = __commonJS({
  "node_modules/source-map/lib/source-map-generator.js"(exports2) {
    var base64VLQ = require_base64_vlq();
    var util = require_util();
    var ArraySet = require_array_set().ArraySet;
    var MappingList = require_mapping_list().MappingList;
    function SourceMapGenerator(aArgs) {
      if (!aArgs) {
        aArgs = {};
      }
      this._file = util.getArg(aArgs, "file", null);
      this._sourceRoot = util.getArg(aArgs, "sourceRoot", null);
      this._skipValidation = util.getArg(aArgs, "skipValidation", false);
      this._sources = new ArraySet();
      this._names = new ArraySet();
      this._mappings = new MappingList();
      this._sourcesContents = null;
    }
    SourceMapGenerator.prototype._version = 3;
    SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
      var sourceRoot = aSourceMapConsumer.sourceRoot;
      var generator = new SourceMapGenerator({
        file: aSourceMapConsumer.file,
        sourceRoot
      });
      aSourceMapConsumer.eachMapping(function(mapping) {
        var newMapping = {
          generated: {
            line: mapping.generatedLine,
            column: mapping.generatedColumn
          }
        };
        if (mapping.source != null) {
          newMapping.source = mapping.source;
          if (sourceRoot != null) {
            newMapping.source = util.relative(sourceRoot, newMapping.source);
          }
          newMapping.original = {
            line: mapping.originalLine,
            column: mapping.originalColumn
          };
          if (mapping.name != null) {
            newMapping.name = mapping.name;
          }
        }
        generator.addMapping(newMapping);
      });
      aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var sourceRelative = sourceFile;
        if (sourceRoot !== null) {
          sourceRelative = util.relative(sourceRoot, sourceFile);
        }
        if (!generator._sources.has(sourceRelative)) {
          generator._sources.add(sourceRelative);
        }
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
          generator.setSourceContent(sourceFile, content);
        }
      });
      return generator;
    };
    SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
      var generated = util.getArg(aArgs, "generated");
      var original = util.getArg(aArgs, "original", null);
      var source = util.getArg(aArgs, "source", null);
      var name = util.getArg(aArgs, "name", null);
      if (!this._skipValidation) {
        this._validateMapping(generated, original, source, name);
      }
      if (source != null) {
        source = String(source);
        if (!this._sources.has(source)) {
          this._sources.add(source);
        }
      }
      if (name != null) {
        name = String(name);
        if (!this._names.has(name)) {
          this._names.add(name);
        }
      }
      this._mappings.add({
        generatedLine: generated.line,
        generatedColumn: generated.column,
        originalLine: original != null && original.line,
        originalColumn: original != null && original.column,
        source,
        name
      });
    };
    SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
      var source = aSourceFile;
      if (this._sourceRoot != null) {
        source = util.relative(this._sourceRoot, source);
      }
      if (aSourceContent != null) {
        if (!this._sourcesContents) {
          this._sourcesContents = /* @__PURE__ */ Object.create(null);
        }
        this._sourcesContents[util.toSetString(source)] = aSourceContent;
      } else if (this._sourcesContents) {
        delete this._sourcesContents[util.toSetString(source)];
        if (Object.keys(this._sourcesContents).length === 0) {
          this._sourcesContents = null;
        }
      }
    };
    SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
      var sourceFile = aSourceFile;
      if (aSourceFile == null) {
        if (aSourceMapConsumer.file == null) {
          throw new Error(
            `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
          );
        }
        sourceFile = aSourceMapConsumer.file;
      }
      var sourceRoot = this._sourceRoot;
      if (sourceRoot != null) {
        sourceFile = util.relative(sourceRoot, sourceFile);
      }
      var newSources = new ArraySet();
      var newNames = new ArraySet();
      this._mappings.unsortedForEach(function(mapping) {
        if (mapping.source === sourceFile && mapping.originalLine != null) {
          var original = aSourceMapConsumer.originalPositionFor({
            line: mapping.originalLine,
            column: mapping.originalColumn
          });
          if (original.source != null) {
            mapping.source = original.source;
            if (aSourceMapPath != null) {
              mapping.source = util.join(aSourceMapPath, mapping.source);
            }
            if (sourceRoot != null) {
              mapping.source = util.relative(sourceRoot, mapping.source);
            }
            mapping.originalLine = original.line;
            mapping.originalColumn = original.column;
            if (original.name != null) {
              mapping.name = original.name;
            }
          }
        }
        var source = mapping.source;
        if (source != null && !newSources.has(source)) {
          newSources.add(source);
        }
        var name = mapping.name;
        if (name != null && !newNames.has(name)) {
          newNames.add(name);
        }
      }, this);
      this._sources = newSources;
      this._names = newNames;
      aSourceMapConsumer.sources.forEach(function(sourceFile2) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile2);
        if (content != null) {
          if (aSourceMapPath != null) {
            sourceFile2 = util.join(aSourceMapPath, sourceFile2);
          }
          if (sourceRoot != null) {
            sourceFile2 = util.relative(sourceRoot, sourceFile2);
          }
          this.setSourceContent(sourceFile2, content);
        }
      }, this);
    };
    SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
      if (aOriginal && typeof aOriginal.line !== "number" && typeof aOriginal.column !== "number") {
        throw new Error(
          "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
        );
      }
      if (aGenerated && "line" in aGenerated && "column" in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
        return;
      } else if (aGenerated && "line" in aGenerated && "column" in aGenerated && aOriginal && "line" in aOriginal && "column" in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
        return;
      } else {
        throw new Error("Invalid mapping: " + JSON.stringify({
          generated: aGenerated,
          source: aSource,
          original: aOriginal,
          name: aName
        }));
      }
    };
    SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
      var previousGeneratedColumn = 0;
      var previousGeneratedLine = 1;
      var previousOriginalColumn = 0;
      var previousOriginalLine = 0;
      var previousName = 0;
      var previousSource = 0;
      var result = "";
      var next;
      var mapping;
      var nameIdx;
      var sourceIdx;
      var mappings = this._mappings.toArray();
      for (var i = 0, len = mappings.length; i < len; i++) {
        mapping = mappings[i];
        next = "";
        if (mapping.generatedLine !== previousGeneratedLine) {
          previousGeneratedColumn = 0;
          while (mapping.generatedLine !== previousGeneratedLine) {
            next += ";";
            previousGeneratedLine++;
          }
        } else {
          if (i > 0) {
            if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
              continue;
            }
            next += ",";
          }
        }
        next += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
        previousGeneratedColumn = mapping.generatedColumn;
        if (mapping.source != null) {
          sourceIdx = this._sources.indexOf(mapping.source);
          next += base64VLQ.encode(sourceIdx - previousSource);
          previousSource = sourceIdx;
          next += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
          previousOriginalLine = mapping.originalLine - 1;
          next += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
          previousOriginalColumn = mapping.originalColumn;
          if (mapping.name != null) {
            nameIdx = this._names.indexOf(mapping.name);
            next += base64VLQ.encode(nameIdx - previousName);
            previousName = nameIdx;
          }
        }
        result += next;
      }
      return result;
    };
    SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
      return aSources.map(function(source) {
        if (!this._sourcesContents) {
          return null;
        }
        if (aSourceRoot != null) {
          source = util.relative(aSourceRoot, source);
        }
        var key = util.toSetString(source);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
      }, this);
    };
    SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
      var map = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings()
      };
      if (this._file != null) {
        map.file = this._file;
      }
      if (this._sourceRoot != null) {
        map.sourceRoot = this._sourceRoot;
      }
      if (this._sourcesContents) {
        map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
      }
      return map;
    };
    SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
      return JSON.stringify(this.toJSON());
    };
    exports2.SourceMapGenerator = SourceMapGenerator;
  }
});

// node_modules/source-map/lib/binary-search.js
var require_binary_search = __commonJS({
  "node_modules/source-map/lib/binary-search.js"(exports2) {
    exports2.GREATEST_LOWER_BOUND = 1;
    exports2.LEAST_UPPER_BOUND = 2;
    function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
      var mid = Math.floor((aHigh - aLow) / 2) + aLow;
      var cmp = aCompare(aNeedle, aHaystack[mid], true);
      if (cmp === 0) {
        return mid;
      } else if (cmp > 0) {
        if (aHigh - mid > 1) {
          return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
        }
        if (aBias == exports2.LEAST_UPPER_BOUND) {
          return aHigh < aHaystack.length ? aHigh : -1;
        } else {
          return mid;
        }
      } else {
        if (mid - aLow > 1) {
          return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
        }
        if (aBias == exports2.LEAST_UPPER_BOUND) {
          return mid;
        } else {
          return aLow < 0 ? -1 : aLow;
        }
      }
    }
    exports2.search = function search(aNeedle, aHaystack, aCompare, aBias) {
      if (aHaystack.length === 0) {
        return -1;
      }
      var index = recursiveSearch(
        -1,
        aHaystack.length,
        aNeedle,
        aHaystack,
        aCompare,
        aBias || exports2.GREATEST_LOWER_BOUND
      );
      if (index < 0) {
        return -1;
      }
      while (index - 1 >= 0) {
        if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
          break;
        }
        --index;
      }
      return index;
    };
  }
});

// node_modules/source-map/lib/quick-sort.js
var require_quick_sort = __commonJS({
  "node_modules/source-map/lib/quick-sort.js"(exports2) {
    function swap(ary, x, y) {
      var temp = ary[x];
      ary[x] = ary[y];
      ary[y] = temp;
    }
    function randomIntInRange(low, high) {
      return Math.round(low + Math.random() * (high - low));
    }
    function doQuickSort(ary, comparator, p, r) {
      if (p < r) {
        var pivotIndex = randomIntInRange(p, r);
        var i = p - 1;
        swap(ary, pivotIndex, r);
        var pivot = ary[r];
        for (var j = p; j < r; j++) {
          if (comparator(ary[j], pivot) <= 0) {
            i += 1;
            swap(ary, i, j);
          }
        }
        swap(ary, i + 1, j);
        var q = i + 1;
        doQuickSort(ary, comparator, p, q - 1);
        doQuickSort(ary, comparator, q + 1, r);
      }
    }
    exports2.quickSort = function(ary, comparator) {
      doQuickSort(ary, comparator, 0, ary.length - 1);
    };
  }
});

// node_modules/source-map/lib/source-map-consumer.js
var require_source_map_consumer = __commonJS({
  "node_modules/source-map/lib/source-map-consumer.js"(exports2) {
    var util = require_util();
    var binarySearch = require_binary_search();
    var ArraySet = require_array_set().ArraySet;
    var base64VLQ = require_base64_vlq();
    var quickSort = require_quick_sort().quickSort;
    function SourceMapConsumer(aSourceMap, aSourceMapURL) {
      var sourceMap = aSourceMap;
      if (typeof aSourceMap === "string") {
        sourceMap = util.parseSourceMapInput(aSourceMap);
      }
      return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
    }
    SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
      return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
    };
    SourceMapConsumer.prototype._version = 3;
    SourceMapConsumer.prototype.__generatedMappings = null;
    Object.defineProperty(SourceMapConsumer.prototype, "_generatedMappings", {
      configurable: true,
      enumerable: true,
      get: function() {
        if (!this.__generatedMappings) {
          this._parseMappings(this._mappings, this.sourceRoot);
        }
        return this.__generatedMappings;
      }
    });
    SourceMapConsumer.prototype.__originalMappings = null;
    Object.defineProperty(SourceMapConsumer.prototype, "_originalMappings", {
      configurable: true,
      enumerable: true,
      get: function() {
        if (!this.__originalMappings) {
          this._parseMappings(this._mappings, this.sourceRoot);
        }
        return this.__originalMappings;
      }
    });
    SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
      var c = aStr.charAt(index);
      return c === ";" || c === ",";
    };
    SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      throw new Error("Subclasses must implement _parseMappings");
    };
    SourceMapConsumer.GENERATED_ORDER = 1;
    SourceMapConsumer.ORIGINAL_ORDER = 2;
    SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
    SourceMapConsumer.LEAST_UPPER_BOUND = 2;
    SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
      var context = aContext || null;
      var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
      var mappings;
      switch (order) {
        case SourceMapConsumer.GENERATED_ORDER:
          mappings = this._generatedMappings;
          break;
        case SourceMapConsumer.ORIGINAL_ORDER:
          mappings = this._originalMappings;
          break;
        default:
          throw new Error("Unknown order of iteration.");
      }
      var sourceRoot = this.sourceRoot;
      mappings.map(function(mapping) {
        var source = mapping.source === null ? null : this._sources.at(mapping.source);
        source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
        return {
          source,
          generatedLine: mapping.generatedLine,
          generatedColumn: mapping.generatedColumn,
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: mapping.name === null ? null : this._names.at(mapping.name)
        };
      }, this).forEach(aCallback, context);
    };
    SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
      var line = util.getArg(aArgs, "line");
      var needle = {
        source: util.getArg(aArgs, "source"),
        originalLine: line,
        originalColumn: util.getArg(aArgs, "column", 0)
      };
      needle.source = this._findSourceIndex(needle.source);
      if (needle.source < 0) {
        return [];
      }
      var mappings = [];
      var index = this._findMapping(
        needle,
        this._originalMappings,
        "originalLine",
        "originalColumn",
        util.compareByOriginalPositions,
        binarySearch.LEAST_UPPER_BOUND
      );
      if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (aArgs.column === void 0) {
          var originalLine = mapping.originalLine;
          while (mapping && mapping.originalLine === originalLine) {
            mappings.push({
              line: util.getArg(mapping, "generatedLine", null),
              column: util.getArg(mapping, "generatedColumn", null),
              lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
            });
            mapping = this._originalMappings[++index];
          }
        } else {
          var originalColumn = mapping.originalColumn;
          while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
            mappings.push({
              line: util.getArg(mapping, "generatedLine", null),
              column: util.getArg(mapping, "generatedColumn", null),
              lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
            });
            mapping = this._originalMappings[++index];
          }
        }
      }
      return mappings;
    };
    exports2.SourceMapConsumer = SourceMapConsumer;
    function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
      var sourceMap = aSourceMap;
      if (typeof aSourceMap === "string") {
        sourceMap = util.parseSourceMapInput(aSourceMap);
      }
      var version = util.getArg(sourceMap, "version");
      var sources = util.getArg(sourceMap, "sources");
      var names = util.getArg(sourceMap, "names", []);
      var sourceRoot = util.getArg(sourceMap, "sourceRoot", null);
      var sourcesContent = util.getArg(sourceMap, "sourcesContent", null);
      var mappings = util.getArg(sourceMap, "mappings");
      var file = util.getArg(sourceMap, "file", null);
      if (version != this._version) {
        throw new Error("Unsupported version: " + version);
      }
      if (sourceRoot) {
        sourceRoot = util.normalize(sourceRoot);
      }
      sources = sources.map(String).map(util.normalize).map(function(source) {
        return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
      });
      this._names = ArraySet.fromArray(names.map(String), true);
      this._sources = ArraySet.fromArray(sources, true);
      this._absoluteSources = this._sources.toArray().map(function(s) {
        return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
      });
      this.sourceRoot = sourceRoot;
      this.sourcesContent = sourcesContent;
      this._mappings = mappings;
      this._sourceMapURL = aSourceMapURL;
      this.file = file;
    }
    BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
    BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
    BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
      var relativeSource = aSource;
      if (this.sourceRoot != null) {
        relativeSource = util.relative(this.sourceRoot, relativeSource);
      }
      if (this._sources.has(relativeSource)) {
        return this._sources.indexOf(relativeSource);
      }
      var i;
      for (i = 0; i < this._absoluteSources.length; ++i) {
        if (this._absoluteSources[i] == aSource) {
          return i;
        }
      }
      return -1;
    };
    BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
      var smc = Object.create(BasicSourceMapConsumer.prototype);
      var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
      var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
      smc.sourceRoot = aSourceMap._sourceRoot;
      smc.sourcesContent = aSourceMap._generateSourcesContent(
        smc._sources.toArray(),
        smc.sourceRoot
      );
      smc.file = aSourceMap._file;
      smc._sourceMapURL = aSourceMapURL;
      smc._absoluteSources = smc._sources.toArray().map(function(s) {
        return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
      });
      var generatedMappings = aSourceMap._mappings.toArray().slice();
      var destGeneratedMappings = smc.__generatedMappings = [];
      var destOriginalMappings = smc.__originalMappings = [];
      for (var i = 0, length = generatedMappings.length; i < length; i++) {
        var srcMapping = generatedMappings[i];
        var destMapping = new Mapping();
        destMapping.generatedLine = srcMapping.generatedLine;
        destMapping.generatedColumn = srcMapping.generatedColumn;
        if (srcMapping.source) {
          destMapping.source = sources.indexOf(srcMapping.source);
          destMapping.originalLine = srcMapping.originalLine;
          destMapping.originalColumn = srcMapping.originalColumn;
          if (srcMapping.name) {
            destMapping.name = names.indexOf(srcMapping.name);
          }
          destOriginalMappings.push(destMapping);
        }
        destGeneratedMappings.push(destMapping);
      }
      quickSort(smc.__originalMappings, util.compareByOriginalPositions);
      return smc;
    };
    BasicSourceMapConsumer.prototype._version = 3;
    Object.defineProperty(BasicSourceMapConsumer.prototype, "sources", {
      get: function() {
        return this._absoluteSources.slice();
      }
    });
    function Mapping() {
      this.generatedLine = 0;
      this.generatedColumn = 0;
      this.source = null;
      this.originalLine = null;
      this.originalColumn = null;
      this.name = null;
    }
    BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      var generatedLine = 1;
      var previousGeneratedColumn = 0;
      var previousOriginalLine = 0;
      var previousOriginalColumn = 0;
      var previousSource = 0;
      var previousName = 0;
      var length = aStr.length;
      var index = 0;
      var cachedSegments = {};
      var temp = {};
      var originalMappings = [];
      var generatedMappings = [];
      var mapping, str, segment, end, value;
      while (index < length) {
        if (aStr.charAt(index) === ";") {
          generatedLine++;
          index++;
          previousGeneratedColumn = 0;
        } else if (aStr.charAt(index) === ",") {
          index++;
        } else {
          mapping = new Mapping();
          mapping.generatedLine = generatedLine;
          for (end = index; end < length; end++) {
            if (this._charIsMappingSeparator(aStr, end)) {
              break;
            }
          }
          str = aStr.slice(index, end);
          segment = cachedSegments[str];
          if (segment) {
            index += str.length;
          } else {
            segment = [];
            while (index < end) {
              base64VLQ.decode(aStr, index, temp);
              value = temp.value;
              index = temp.rest;
              segment.push(value);
            }
            if (segment.length === 2) {
              throw new Error("Found a source, but no line and column");
            }
            if (segment.length === 3) {
              throw new Error("Found a source and line, but no column");
            }
            cachedSegments[str] = segment;
          }
          mapping.generatedColumn = previousGeneratedColumn + segment[0];
          previousGeneratedColumn = mapping.generatedColumn;
          if (segment.length > 1) {
            mapping.source = previousSource + segment[1];
            previousSource += segment[1];
            mapping.originalLine = previousOriginalLine + segment[2];
            previousOriginalLine = mapping.originalLine;
            mapping.originalLine += 1;
            mapping.originalColumn = previousOriginalColumn + segment[3];
            previousOriginalColumn = mapping.originalColumn;
            if (segment.length > 4) {
              mapping.name = previousName + segment[4];
              previousName += segment[4];
            }
          }
          generatedMappings.push(mapping);
          if (typeof mapping.originalLine === "number") {
            originalMappings.push(mapping);
          }
        }
      }
      quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
      this.__generatedMappings = generatedMappings;
      quickSort(originalMappings, util.compareByOriginalPositions);
      this.__originalMappings = originalMappings;
    };
    BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
      if (aNeedle[aLineName] <= 0) {
        throw new TypeError("Line must be greater than or equal to 1, got " + aNeedle[aLineName]);
      }
      if (aNeedle[aColumnName] < 0) {
        throw new TypeError("Column must be greater than or equal to 0, got " + aNeedle[aColumnName]);
      }
      return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
    };
    BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
      for (var index = 0; index < this._generatedMappings.length; ++index) {
        var mapping = this._generatedMappings[index];
        if (index + 1 < this._generatedMappings.length) {
          var nextMapping = this._generatedMappings[index + 1];
          if (mapping.generatedLine === nextMapping.generatedLine) {
            mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
            continue;
          }
        }
        mapping.lastGeneratedColumn = Infinity;
      }
    };
    BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
      var needle = {
        generatedLine: util.getArg(aArgs, "line"),
        generatedColumn: util.getArg(aArgs, "column")
      };
      var index = this._findMapping(
        needle,
        this._generatedMappings,
        "generatedLine",
        "generatedColumn",
        util.compareByGeneratedPositionsDeflated,
        util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND)
      );
      if (index >= 0) {
        var mapping = this._generatedMappings[index];
        if (mapping.generatedLine === needle.generatedLine) {
          var source = util.getArg(mapping, "source", null);
          if (source !== null) {
            source = this._sources.at(source);
            source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
          }
          var name = util.getArg(mapping, "name", null);
          if (name !== null) {
            name = this._names.at(name);
          }
          return {
            source,
            line: util.getArg(mapping, "originalLine", null),
            column: util.getArg(mapping, "originalColumn", null),
            name
          };
        }
      }
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    };
    BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
      if (!this.sourcesContent) {
        return false;
      }
      return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
        return sc == null;
      });
    };
    BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
      if (!this.sourcesContent) {
        return null;
      }
      var index = this._findSourceIndex(aSource);
      if (index >= 0) {
        return this.sourcesContent[index];
      }
      var relativeSource = aSource;
      if (this.sourceRoot != null) {
        relativeSource = util.relative(this.sourceRoot, relativeSource);
      }
      var url;
      if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
        var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
        if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
          return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
        }
        if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) {
          return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
        }
      }
      if (nullOnMissing) {
        return null;
      } else {
        throw new Error('"' + relativeSource + '" is not in the SourceMap.');
      }
    };
    BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
      var source = util.getArg(aArgs, "source");
      source = this._findSourceIndex(source);
      if (source < 0) {
        return {
          line: null,
          column: null,
          lastColumn: null
        };
      }
      var needle = {
        source,
        originalLine: util.getArg(aArgs, "line"),
        originalColumn: util.getArg(aArgs, "column")
      };
      var index = this._findMapping(
        needle,
        this._originalMappings,
        "originalLine",
        "originalColumn",
        util.compareByOriginalPositions,
        util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND)
      );
      if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (mapping.source === needle.source) {
          return {
            line: util.getArg(mapping, "generatedLine", null),
            column: util.getArg(mapping, "generatedColumn", null),
            lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
          };
        }
      }
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    };
    exports2.BasicSourceMapConsumer = BasicSourceMapConsumer;
    function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
      var sourceMap = aSourceMap;
      if (typeof aSourceMap === "string") {
        sourceMap = util.parseSourceMapInput(aSourceMap);
      }
      var version = util.getArg(sourceMap, "version");
      var sections = util.getArg(sourceMap, "sections");
      if (version != this._version) {
        throw new Error("Unsupported version: " + version);
      }
      this._sources = new ArraySet();
      this._names = new ArraySet();
      var lastOffset = {
        line: -1,
        column: 0
      };
      this._sections = sections.map(function(s) {
        if (s.url) {
          throw new Error("Support for url field in sections not implemented.");
        }
        var offset = util.getArg(s, "offset");
        var offsetLine = util.getArg(offset, "line");
        var offsetColumn = util.getArg(offset, "column");
        if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
          throw new Error("Section offsets must be ordered and non-overlapping.");
        }
        lastOffset = offset;
        return {
          generatedOffset: {
            // The offset fields are 0-based, but we use 1-based indices when
            // encoding/decoding from VLQ.
            generatedLine: offsetLine + 1,
            generatedColumn: offsetColumn + 1
          },
          consumer: new SourceMapConsumer(util.getArg(s, "map"), aSourceMapURL)
        };
      });
    }
    IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
    IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
    IndexedSourceMapConsumer.prototype._version = 3;
    Object.defineProperty(IndexedSourceMapConsumer.prototype, "sources", {
      get: function() {
        var sources = [];
        for (var i = 0; i < this._sections.length; i++) {
          for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
            sources.push(this._sections[i].consumer.sources[j]);
          }
        }
        return sources;
      }
    });
    IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
      var needle = {
        generatedLine: util.getArg(aArgs, "line"),
        generatedColumn: util.getArg(aArgs, "column")
      };
      var sectionIndex = binarySearch.search(
        needle,
        this._sections,
        function(needle2, section2) {
          var cmp = needle2.generatedLine - section2.generatedOffset.generatedLine;
          if (cmp) {
            return cmp;
          }
          return needle2.generatedColumn - section2.generatedOffset.generatedColumn;
        }
      );
      var section = this._sections[sectionIndex];
      if (!section) {
        return {
          source: null,
          line: null,
          column: null,
          name: null
        };
      }
      return section.consumer.originalPositionFor({
        line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
        column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
        bias: aArgs.bias
      });
    };
    IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
      return this._sections.every(function(s) {
        return s.consumer.hasContentsOfAllSources();
      });
    };
    IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];
        var content = section.consumer.sourceContentFor(aSource, true);
        if (content) {
          return content;
        }
      }
      if (nullOnMissing) {
        return null;
      } else {
        throw new Error('"' + aSource + '" is not in the SourceMap.');
      }
    };
    IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];
        if (section.consumer._findSourceIndex(util.getArg(aArgs, "source")) === -1) {
          continue;
        }
        var generatedPosition = section.consumer.generatedPositionFor(aArgs);
        if (generatedPosition) {
          var ret = {
            line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
            column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
          };
          return ret;
        }
      }
      return {
        line: null,
        column: null
      };
    };
    IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      this.__generatedMappings = [];
      this.__originalMappings = [];
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];
        var sectionMappings = section.consumer._generatedMappings;
        for (var j = 0; j < sectionMappings.length; j++) {
          var mapping = sectionMappings[j];
          var source = section.consumer._sources.at(mapping.source);
          source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
          this._sources.add(source);
          source = this._sources.indexOf(source);
          var name = null;
          if (mapping.name) {
            name = section.consumer._names.at(mapping.name);
            this._names.add(name);
            name = this._names.indexOf(name);
          }
          var adjustedMapping = {
            source,
            generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
            generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
            originalLine: mapping.originalLine,
            originalColumn: mapping.originalColumn,
            name
          };
          this.__generatedMappings.push(adjustedMapping);
          if (typeof adjustedMapping.originalLine === "number") {
            this.__originalMappings.push(adjustedMapping);
          }
        }
      }
      quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
      quickSort(this.__originalMappings, util.compareByOriginalPositions);
    };
    exports2.IndexedSourceMapConsumer = IndexedSourceMapConsumer;
  }
});

// node_modules/source-map/lib/source-node.js
var require_source_node = __commonJS({
  "node_modules/source-map/lib/source-node.js"(exports2) {
    var SourceMapGenerator = require_source_map_generator().SourceMapGenerator;
    var util = require_util();
    var REGEX_NEWLINE = /(\r?\n)/;
    var NEWLINE_CODE = 10;
    var isSourceNode = "$$$isSourceNode$$$";
    function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
      this.children = [];
      this.sourceContents = {};
      this.line = aLine == null ? null : aLine;
      this.column = aColumn == null ? null : aColumn;
      this.source = aSource == null ? null : aSource;
      this.name = aName == null ? null : aName;
      this[isSourceNode] = true;
      if (aChunks != null) this.add(aChunks);
    }
    SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
      var node = new SourceNode();
      var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
      var remainingLinesIndex = 0;
      var shiftNextLine = function() {
        var lineContents = getNextLine();
        var newLine = getNextLine() || "";
        return lineContents + newLine;
        function getNextLine() {
          return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : void 0;
        }
      };
      var lastGeneratedLine = 1, lastGeneratedColumn = 0;
      var lastMapping = null;
      aSourceMapConsumer.eachMapping(function(mapping) {
        if (lastMapping !== null) {
          if (lastGeneratedLine < mapping.generatedLine) {
            addMappingWithCode(lastMapping, shiftNextLine());
            lastGeneratedLine++;
            lastGeneratedColumn = 0;
          } else {
            var nextLine = remainingLines[remainingLinesIndex] || "";
            var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
            remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
            lastGeneratedColumn = mapping.generatedColumn;
            addMappingWithCode(lastMapping, code);
            lastMapping = mapping;
            return;
          }
        }
        while (lastGeneratedLine < mapping.generatedLine) {
          node.add(shiftNextLine());
          lastGeneratedLine++;
        }
        if (lastGeneratedColumn < mapping.generatedColumn) {
          var nextLine = remainingLines[remainingLinesIndex] || "";
          node.add(nextLine.substr(0, mapping.generatedColumn));
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
        }
        lastMapping = mapping;
      }, this);
      if (remainingLinesIndex < remainingLines.length) {
        if (lastMapping) {
          addMappingWithCode(lastMapping, shiftNextLine());
        }
        node.add(remainingLines.splice(remainingLinesIndex).join(""));
      }
      aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
          if (aRelativePath != null) {
            sourceFile = util.join(aRelativePath, sourceFile);
          }
          node.setSourceContent(sourceFile, content);
        }
      });
      return node;
      function addMappingWithCode(mapping, code) {
        if (mapping === null || mapping.source === void 0) {
          node.add(code);
        } else {
          var source = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
          node.add(new SourceNode(
            mapping.originalLine,
            mapping.originalColumn,
            source,
            code,
            mapping.name
          ));
        }
      }
    };
    SourceNode.prototype.add = function SourceNode_add(aChunk) {
      if (Array.isArray(aChunk)) {
        aChunk.forEach(function(chunk) {
          this.add(chunk);
        }, this);
      } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
        if (aChunk) {
          this.children.push(aChunk);
        }
      } else {
        throw new TypeError(
          "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
        );
      }
      return this;
    };
    SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
      if (Array.isArray(aChunk)) {
        for (var i = aChunk.length - 1; i >= 0; i--) {
          this.prepend(aChunk[i]);
        }
      } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
        this.children.unshift(aChunk);
      } else {
        throw new TypeError(
          "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
        );
      }
      return this;
    };
    SourceNode.prototype.walk = function SourceNode_walk(aFn) {
      var chunk;
      for (var i = 0, len = this.children.length; i < len; i++) {
        chunk = this.children[i];
        if (chunk[isSourceNode]) {
          chunk.walk(aFn);
        } else {
          if (chunk !== "") {
            aFn(chunk, {
              source: this.source,
              line: this.line,
              column: this.column,
              name: this.name
            });
          }
        }
      }
    };
    SourceNode.prototype.join = function SourceNode_join(aSep) {
      var newChildren;
      var i;
      var len = this.children.length;
      if (len > 0) {
        newChildren = [];
        for (i = 0; i < len - 1; i++) {
          newChildren.push(this.children[i]);
          newChildren.push(aSep);
        }
        newChildren.push(this.children[i]);
        this.children = newChildren;
      }
      return this;
    };
    SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
      var lastChild = this.children[this.children.length - 1];
      if (lastChild[isSourceNode]) {
        lastChild.replaceRight(aPattern, aReplacement);
      } else if (typeof lastChild === "string") {
        this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
      } else {
        this.children.push("".replace(aPattern, aReplacement));
      }
      return this;
    };
    SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
      this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
    };
    SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
      for (var i = 0, len = this.children.length; i < len; i++) {
        if (this.children[i][isSourceNode]) {
          this.children[i].walkSourceContents(aFn);
        }
      }
      var sources = Object.keys(this.sourceContents);
      for (var i = 0, len = sources.length; i < len; i++) {
        aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
      }
    };
    SourceNode.prototype.toString = function SourceNode_toString() {
      var str = "";
      this.walk(function(chunk) {
        str += chunk;
      });
      return str;
    };
    SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
      var generated = {
        code: "",
        line: 1,
        column: 0
      };
      var map = new SourceMapGenerator(aArgs);
      var sourceMappingActive = false;
      var lastOriginalSource = null;
      var lastOriginalLine = null;
      var lastOriginalColumn = null;
      var lastOriginalName = null;
      this.walk(function(chunk, original) {
        generated.code += chunk;
        if (original.source !== null && original.line !== null && original.column !== null) {
          if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) {
            map.addMapping({
              source: original.source,
              original: {
                line: original.line,
                column: original.column
              },
              generated: {
                line: generated.line,
                column: generated.column
              },
              name: original.name
            });
          }
          lastOriginalSource = original.source;
          lastOriginalLine = original.line;
          lastOriginalColumn = original.column;
          lastOriginalName = original.name;
          sourceMappingActive = true;
        } else if (sourceMappingActive) {
          map.addMapping({
            generated: {
              line: generated.line,
              column: generated.column
            }
          });
          lastOriginalSource = null;
          sourceMappingActive = false;
        }
        for (var idx = 0, length = chunk.length; idx < length; idx++) {
          if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
            generated.line++;
            generated.column = 0;
            if (idx + 1 === length) {
              lastOriginalSource = null;
              sourceMappingActive = false;
            } else if (sourceMappingActive) {
              map.addMapping({
                source: original.source,
                original: {
                  line: original.line,
                  column: original.column
                },
                generated: {
                  line: generated.line,
                  column: generated.column
                },
                name: original.name
              });
            }
          } else {
            generated.column++;
          }
        }
      });
      this.walkSourceContents(function(sourceFile, sourceContent) {
        map.setSourceContent(sourceFile, sourceContent);
      });
      return { code: generated.code, map };
    };
    exports2.SourceNode = SourceNode;
  }
});

// node_modules/source-map/source-map.js
var require_source_map = __commonJS({
  "node_modules/source-map/source-map.js"(exports2) {
    exports2.SourceMapGenerator = require_source_map_generator().SourceMapGenerator;
    exports2.SourceMapConsumer = require_source_map_consumer().SourceMapConsumer;
    exports2.SourceNode = require_source_node().SourceNode;
  }
});

// node_modules/buffer-from/index.js
var require_buffer_from = __commonJS({
  "node_modules/buffer-from/index.js"(exports2, module2) {
    var toString = Object.prototype.toString;
    var isModern = typeof Buffer !== "undefined" && typeof Buffer.alloc === "function" && typeof Buffer.allocUnsafe === "function" && typeof Buffer.from === "function";
    function isArrayBuffer(input) {
      return toString.call(input).slice(8, -1) === "ArrayBuffer";
    }
    function fromArrayBuffer(obj, byteOffset, length) {
      byteOffset >>>= 0;
      var maxLength = obj.byteLength - byteOffset;
      if (maxLength < 0) {
        throw new RangeError("'offset' is out of bounds");
      }
      if (length === void 0) {
        length = maxLength;
      } else {
        length >>>= 0;
        if (length > maxLength) {
          throw new RangeError("'length' is out of bounds");
        }
      }
      return isModern ? Buffer.from(obj.slice(byteOffset, byteOffset + length)) : new Buffer(new Uint8Array(obj.slice(byteOffset, byteOffset + length)));
    }
    function fromString(string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer.isEncoding(encoding)) {
        throw new TypeError('"encoding" must be a valid string encoding');
      }
      return isModern ? Buffer.from(string, encoding) : new Buffer(string, encoding);
    }
    function bufferFrom(value, encodingOrOffset, length) {
      if (typeof value === "number") {
        throw new TypeError('"value" argument must not be a number');
      }
      if (isArrayBuffer(value)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      return isModern ? Buffer.from(value) : new Buffer(value);
    }
    module2.exports = bufferFrom;
  }
});

// node_modules/source-map-support/source-map-support.js
var require_source_map_support = __commonJS({
  "node_modules/source-map-support/source-map-support.js"(exports2, module2) {
    var SourceMapConsumer = require_source_map().SourceMapConsumer;
    var path = require("path");
    var fs;
    try {
      fs = require("fs");
      if (!fs.existsSync || !fs.readFileSync) {
        fs = null;
      }
    } catch (err) {
    }
    var bufferFrom = require_buffer_from();
    function dynamicRequire(mod, request) {
      return mod.require(request);
    }
    var errorFormatterInstalled = false;
    var uncaughtShimInstalled = false;
    var emptyCacheBetweenOperations = false;
    var environment = "auto";
    var fileContentsCache = {};
    var sourceMapCache = {};
    var reSourceMap = /^data:application\/json[^,]+base64,/;
    var retrieveFileHandlers = [];
    var retrieveMapHandlers = [];
    function isInBrowser() {
      if (environment === "browser")
        return true;
      if (environment === "node")
        return false;
      return typeof window !== "undefined" && typeof XMLHttpRequest === "function" && !(window.require && window.module && window.process && window.process.type === "renderer");
    }
    function hasGlobalProcessEventEmitter() {
      return typeof process === "object" && process !== null && typeof process.on === "function";
    }
    function globalProcessVersion() {
      if (typeof process === "object" && process !== null) {
        return process.version;
      } else {
        return "";
      }
    }
    function globalProcessStderr() {
      if (typeof process === "object" && process !== null) {
        return process.stderr;
      }
    }
    function globalProcessExit(code) {
      if (typeof process === "object" && process !== null && typeof process.exit === "function") {
        return process.exit(code);
      }
    }
    function handlerExec(list) {
      return function(arg) {
        for (var i = 0; i < list.length; i++) {
          var ret = list[i](arg);
          if (ret) {
            return ret;
          }
        }
        return null;
      };
    }
    var retrieveFile = handlerExec(retrieveFileHandlers);
    retrieveFileHandlers.push(function(path2) {
      path2 = path2.trim();
      if (/^file:/.test(path2)) {
        path2 = path2.replace(/file:\/\/\/(\w:)?/, function(protocol, drive) {
          return drive ? "" : (
            // file:///C:/dir/file -> C:/dir/file
            "/"
          );
        });
      }
      if (path2 in fileContentsCache) {
        return fileContentsCache[path2];
      }
      var contents = "";
      try {
        if (!fs) {
          var xhr = new XMLHttpRequest();
          xhr.open(
            "GET",
            path2,
            /** async */
            false
          );
          xhr.send(null);
          if (xhr.readyState === 4 && xhr.status === 200) {
            contents = xhr.responseText;
          }
        } else if (fs.existsSync(path2)) {
          contents = fs.readFileSync(path2, "utf8");
        }
      } catch (er) {
      }
      return fileContentsCache[path2] = contents;
    });
    function supportRelativeURL(file, url) {
      if (!file) return url;
      var dir = path.dirname(file);
      var match = /^\w+:\/\/[^\/]*/.exec(dir);
      var protocol = match ? match[0] : "";
      var startPath = dir.slice(protocol.length);
      if (protocol && /^\/\w\:/.test(startPath)) {
        protocol += "/";
        return protocol + path.resolve(dir.slice(protocol.length), url).replace(/\\/g, "/");
      }
      return protocol + path.resolve(dir.slice(protocol.length), url);
    }
    function retrieveSourceMapURL(source) {
      var fileData;
      if (isInBrowser()) {
        try {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", source, false);
          xhr.send(null);
          fileData = xhr.readyState === 4 ? xhr.responseText : null;
          var sourceMapHeader = xhr.getResponseHeader("SourceMap") || xhr.getResponseHeader("X-SourceMap");
          if (sourceMapHeader) {
            return sourceMapHeader;
          }
        } catch (e) {
        }
      }
      fileData = retrieveFile(source);
      var re = /(?:\/\/[@#][\s]*sourceMappingURL=([^\s'"]+)[\s]*$)|(?:\/\*[@#][\s]*sourceMappingURL=([^\s*'"]+)[\s]*(?:\*\/)[\s]*$)/mg;
      var lastMatch, match;
      while (match = re.exec(fileData)) lastMatch = match;
      if (!lastMatch) return null;
      return lastMatch[1];
    }
    var retrieveSourceMap = handlerExec(retrieveMapHandlers);
    retrieveMapHandlers.push(function(source) {
      var sourceMappingURL = retrieveSourceMapURL(source);
      if (!sourceMappingURL) return null;
      var sourceMapData;
      if (reSourceMap.test(sourceMappingURL)) {
        var rawData = sourceMappingURL.slice(sourceMappingURL.indexOf(",") + 1);
        sourceMapData = bufferFrom(rawData, "base64").toString();
        sourceMappingURL = source;
      } else {
        sourceMappingURL = supportRelativeURL(source, sourceMappingURL);
        sourceMapData = retrieveFile(sourceMappingURL);
      }
      if (!sourceMapData) {
        return null;
      }
      return {
        url: sourceMappingURL,
        map: sourceMapData
      };
    });
    function mapSourcePosition(position) {
      var sourceMap = sourceMapCache[position.source];
      if (!sourceMap) {
        var urlAndMap = retrieveSourceMap(position.source);
        if (urlAndMap) {
          sourceMap = sourceMapCache[position.source] = {
            url: urlAndMap.url,
            map: new SourceMapConsumer(urlAndMap.map)
          };
          if (sourceMap.map.sourcesContent) {
            sourceMap.map.sources.forEach(function(source, i) {
              var contents = sourceMap.map.sourcesContent[i];
              if (contents) {
                var url = supportRelativeURL(sourceMap.url, source);
                fileContentsCache[url] = contents;
              }
            });
          }
        } else {
          sourceMap = sourceMapCache[position.source] = {
            url: null,
            map: null
          };
        }
      }
      if (sourceMap && sourceMap.map && typeof sourceMap.map.originalPositionFor === "function") {
        var originalPosition = sourceMap.map.originalPositionFor(position);
        if (originalPosition.source !== null) {
          originalPosition.source = supportRelativeURL(
            sourceMap.url,
            originalPosition.source
          );
          return originalPosition;
        }
      }
      return position;
    }
    function mapEvalOrigin(origin) {
      var match = /^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(origin);
      if (match) {
        var position = mapSourcePosition({
          source: match[2],
          line: +match[3],
          column: match[4] - 1
        });
        return "eval at " + match[1] + " (" + position.source + ":" + position.line + ":" + (position.column + 1) + ")";
      }
      match = /^eval at ([^(]+) \((.+)\)$/.exec(origin);
      if (match) {
        return "eval at " + match[1] + " (" + mapEvalOrigin(match[2]) + ")";
      }
      return origin;
    }
    function CallSiteToString() {
      var fileName;
      var fileLocation = "";
      if (this.isNative()) {
        fileLocation = "native";
      } else {
        fileName = this.getScriptNameOrSourceURL();
        if (!fileName && this.isEval()) {
          fileLocation = this.getEvalOrigin();
          fileLocation += ", ";
        }
        if (fileName) {
          fileLocation += fileName;
        } else {
          fileLocation += "<anonymous>";
        }
        var lineNumber = this.getLineNumber();
        if (lineNumber != null) {
          fileLocation += ":" + lineNumber;
          var columnNumber = this.getColumnNumber();
          if (columnNumber) {
            fileLocation += ":" + columnNumber;
          }
        }
      }
      var line = "";
      var functionName = this.getFunctionName();
      var addSuffix = true;
      var isConstructor = this.isConstructor();
      var isMethodCall = !(this.isToplevel() || isConstructor);
      if (isMethodCall) {
        var typeName = this.getTypeName();
        if (typeName === "[object Object]") {
          typeName = "null";
        }
        var methodName = this.getMethodName();
        if (functionName) {
          if (typeName && functionName.indexOf(typeName) != 0) {
            line += typeName + ".";
          }
          line += functionName;
          if (methodName && functionName.indexOf("." + methodName) != functionName.length - methodName.length - 1) {
            line += " [as " + methodName + "]";
          }
        } else {
          line += typeName + "." + (methodName || "<anonymous>");
        }
      } else if (isConstructor) {
        line += "new " + (functionName || "<anonymous>");
      } else if (functionName) {
        line += functionName;
      } else {
        line += fileLocation;
        addSuffix = false;
      }
      if (addSuffix) {
        line += " (" + fileLocation + ")";
      }
      return line;
    }
    function cloneCallSite(frame) {
      var object = {};
      Object.getOwnPropertyNames(Object.getPrototypeOf(frame)).forEach(function(name) {
        object[name] = /^(?:is|get)/.test(name) ? function() {
          return frame[name].call(frame);
        } : frame[name];
      });
      object.toString = CallSiteToString;
      return object;
    }
    function wrapCallSite(frame, state) {
      if (state === void 0) {
        state = { nextPosition: null, curPosition: null };
      }
      if (frame.isNative()) {
        state.curPosition = null;
        return frame;
      }
      var source = frame.getFileName() || frame.getScriptNameOrSourceURL();
      if (source) {
        var line = frame.getLineNumber();
        var column = frame.getColumnNumber() - 1;
        var noHeader = /^v(10\.1[6-9]|10\.[2-9][0-9]|10\.[0-9]{3,}|1[2-9]\d*|[2-9]\d|\d{3,}|11\.11)/;
        var headerLength = noHeader.test(globalProcessVersion()) ? 0 : 62;
        if (line === 1 && column > headerLength && !isInBrowser() && !frame.isEval()) {
          column -= headerLength;
        }
        var position = mapSourcePosition({
          source,
          line,
          column
        });
        state.curPosition = position;
        frame = cloneCallSite(frame);
        var originalFunctionName = frame.getFunctionName;
        frame.getFunctionName = function() {
          if (state.nextPosition == null) {
            return originalFunctionName();
          }
          return state.nextPosition.name || originalFunctionName();
        };
        frame.getFileName = function() {
          return position.source;
        };
        frame.getLineNumber = function() {
          return position.line;
        };
        frame.getColumnNumber = function() {
          return position.column + 1;
        };
        frame.getScriptNameOrSourceURL = function() {
          return position.source;
        };
        return frame;
      }
      var origin = frame.isEval() && frame.getEvalOrigin();
      if (origin) {
        origin = mapEvalOrigin(origin);
        frame = cloneCallSite(frame);
        frame.getEvalOrigin = function() {
          return origin;
        };
        return frame;
      }
      return frame;
    }
    function prepareStackTrace(error, stack) {
      if (emptyCacheBetweenOperations) {
        fileContentsCache = {};
        sourceMapCache = {};
      }
      var name = error.name || "Error";
      var message = error.message || "";
      var errorString = name + ": " + message;
      var state = { nextPosition: null, curPosition: null };
      var processedStack = [];
      for (var i = stack.length - 1; i >= 0; i--) {
        processedStack.push("\n    at " + wrapCallSite(stack[i], state));
        state.nextPosition = state.curPosition;
      }
      state.curPosition = state.nextPosition = null;
      return errorString + processedStack.reverse().join("");
    }
    function getErrorSource(error) {
      var match = /\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(error.stack);
      if (match) {
        var source = match[1];
        var line = +match[2];
        var column = +match[3];
        var contents = fileContentsCache[source];
        if (!contents && fs && fs.existsSync(source)) {
          try {
            contents = fs.readFileSync(source, "utf8");
          } catch (er) {
            contents = "";
          }
        }
        if (contents) {
          var code = contents.split(/(?:\r\n|\r|\n)/)[line - 1];
          if (code) {
            return source + ":" + line + "\n" + code + "\n" + new Array(column).join(" ") + "^";
          }
        }
      }
      return null;
    }
    function printErrorAndExit(error) {
      var source = getErrorSource(error);
      var stderr = globalProcessStderr();
      if (stderr && stderr._handle && stderr._handle.setBlocking) {
        stderr._handle.setBlocking(true);
      }
      if (source) {
        console.error();
        console.error(source);
      }
      console.error(error.stack);
      globalProcessExit(1);
    }
    function shimEmitUncaughtException() {
      var origEmit = process.emit;
      process.emit = function(type) {
        if (type === "uncaughtException") {
          var hasStack = arguments[1] && arguments[1].stack;
          var hasListeners = this.listeners(type).length > 0;
          if (hasStack && !hasListeners) {
            return printErrorAndExit(arguments[1]);
          }
        }
        return origEmit.apply(this, arguments);
      };
    }
    var originalRetrieveFileHandlers = retrieveFileHandlers.slice(0);
    var originalRetrieveMapHandlers = retrieveMapHandlers.slice(0);
    exports2.wrapCallSite = wrapCallSite;
    exports2.getErrorSource = getErrorSource;
    exports2.mapSourcePosition = mapSourcePosition;
    exports2.retrieveSourceMap = retrieveSourceMap;
    exports2.install = function(options) {
      options = options || {};
      if (options.environment) {
        environment = options.environment;
        if (["node", "browser", "auto"].indexOf(environment) === -1) {
          throw new Error("environment " + environment + " was unknown. Available options are {auto, browser, node}");
        }
      }
      if (options.retrieveFile) {
        if (options.overrideRetrieveFile) {
          retrieveFileHandlers.length = 0;
        }
        retrieveFileHandlers.unshift(options.retrieveFile);
      }
      if (options.retrieveSourceMap) {
        if (options.overrideRetrieveSourceMap) {
          retrieveMapHandlers.length = 0;
        }
        retrieveMapHandlers.unshift(options.retrieveSourceMap);
      }
      if (options.hookRequire && !isInBrowser()) {
        var Module = dynamicRequire(module2, "module");
        var $compile = Module.prototype._compile;
        if (!$compile.__sourceMapSupport) {
          Module.prototype._compile = function(content, filename) {
            fileContentsCache[filename] = content;
            sourceMapCache[filename] = void 0;
            return $compile.call(this, content, filename);
          };
          Module.prototype._compile.__sourceMapSupport = true;
        }
      }
      if (!emptyCacheBetweenOperations) {
        emptyCacheBetweenOperations = "emptyCacheBetweenOperations" in options ? options.emptyCacheBetweenOperations : false;
      }
      if (!errorFormatterInstalled) {
        errorFormatterInstalled = true;
        Error.prepareStackTrace = prepareStackTrace;
      }
      if (!uncaughtShimInstalled) {
        var installHandler = "handleUncaughtExceptions" in options ? options.handleUncaughtExceptions : true;
        try {
          var worker_threads = dynamicRequire(module2, "worker_threads");
          if (worker_threads.isMainThread === false) {
            installHandler = false;
          }
        } catch (e) {
        }
        if (installHandler && hasGlobalProcessEventEmitter()) {
          uncaughtShimInstalled = true;
          shimEmitUncaughtException();
        }
      }
    };
    exports2.resetRetrieveHandlers = function() {
      retrieveFileHandlers.length = 0;
      retrieveMapHandlers.length = 0;
      retrieveFileHandlers = originalRetrieveFileHandlers.slice(0);
      retrieveMapHandlers = originalRetrieveMapHandlers.slice(0);
      retrieveSourceMap = handlerExec(retrieveMapHandlers);
      retrieveFile = handlerExec(retrieveFileHandlers);
    };
  }
});

// node_modules/source-map-support/register.js
var require_register = __commonJS({
  "node_modules/source-map-support/register.js"() {
    require_source_map_support().install();
  }
});

// node_modules/@homebridge/ciao/lib/util/captured-debug-env.js
var require_captured_debug_env = __commonJS({
  "node_modules/@homebridge/ciao/lib/util/captured-debug-env.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.capturedDebugEnv = void 0;
    exports2.capturedDebugEnv = process.env.DEBUG;
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports2, module2) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module2.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// node_modules/debug/src/common.js
var require_common = __commonJS({
  "node_modules/debug/src/common.js"(exports2, module2) {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
          if (!debug.enabled) {
            return;
          }
          const self = debug;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self, args);
          const logFn = self.log || createDebug.log;
          logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }
        return debug;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === "string" ? namespaces : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
        for (const ns of split) {
          if (ns[0] === "-") {
            createDebug.skips.push(ns.slice(1));
          } else {
            createDebug.names.push(ns);
          }
        }
      }
      function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while (searchIndex < search.length) {
          if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) {
            if (template[templateIndex] === "*") {
              starIndex = templateIndex;
              matchIndex = searchIndex;
              templateIndex++;
            } else {
              searchIndex++;
              templateIndex++;
            }
          } else if (starIndex !== -1) {
            templateIndex = starIndex + 1;
            matchIndex++;
            searchIndex = matchIndex;
          } else {
            return false;
          }
        }
        while (templateIndex < template.length && template[templateIndex] === "*") {
          templateIndex++;
        }
        return templateIndex === template.length;
      }
      function disable() {
        const namespaces = [
          ...createDebug.names,
          ...createDebug.skips.map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        for (const skip of createDebug.skips) {
          if (matchesTemplate(name, skip)) {
            return false;
          }
        }
        for (const ns of createDebug.names) {
          if (matchesTemplate(name, ns)) {
            return true;
          }
        }
        return false;
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module2.exports = setup;
  }
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/debug/src/browser.js"(exports2, module2) {
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.storage = localstorage();
    exports2.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports2.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      let m;
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports2.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports2.storage.setItem("debug", namespaces);
        } else {
          exports2.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports2.storage.getItem("debug") || exports2.storage.getItem("DEBUG");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module2.exports = require_common()(exports2);
    var { formatters } = module2.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// node_modules/debug/src/node.js
var require_node = __commonJS({
  "node_modules/debug/src/node.js"(exports2, module2) {
    var tty = require("tty");
    var util = require("util");
    exports2.init = init;
    exports2.log = log;
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.destroy = util.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
    exports2.colors = [6, 2, 3, 4, 5, 1];
    try {
      const supportsColor = require("supports-color");
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports2.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ];
      }
    } catch (error) {
    }
    exports2.inspectOpts = Object.keys(process.env).filter((key) => {
      return /^debug_/i.test(key);
    }).reduce((obj, key) => {
      const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
        return k.toUpperCase();
      });
      let val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === "null") {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
      return obj;
    }, {});
    function useColors() {
      return "colors" in exports2.inspectOpts ? Boolean(exports2.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }
    function formatArgs(args) {
      const { namespace: name, useColors: useColors2 } = this;
      if (useColors2) {
        const c = this.color;
        const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} \x1B[0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module2.exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = getDate() + name + " " + args[0];
      }
    }
    function getDate() {
      if (exports2.inspectOpts.hideDate) {
        return "";
      }
      return (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    function log(...args) {
      return process.stderr.write(util.formatWithOptions(exports2.inspectOpts, ...args) + "\n");
    }
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function init(debug) {
      debug.inspectOpts = {};
      const keys = Object.keys(exports2.inspectOpts);
      for (let i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports2.inspectOpts[keys[i]];
      }
    }
    module2.exports = require_common()(exports2);
    var { formatters } = module2.exports;
    formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
    };
    formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
  }
});

// node_modules/debug/src/index.js
var require_src = __commonJS({
  "node_modules/debug/src/index.js"(exports2, module2) {
    if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
      module2.exports = require_browser();
    } else {
      module2.exports = require_node();
    }
  }
});

// node_modules/@homebridge/ciao/lib/util/prerelease-debug.js
var require_prerelease_debug = __commonJS({
  "node_modules/@homebridge/ciao/lib/util/prerelease-debug.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.prereleaseDebugNamespaces = prereleaseDebugNamespaces;
    function prereleaseDebugNamespaces(version, debugEnv, conformanceTesting) {
      if (!version.includes("beta") && !conformanceTesting) {
        return null;
      }
      if (debugEnv === void 0) {
        return "ciao:*";
      }
      if (debugEnv === "") {
        return null;
      }
      if (debugEnv.includes("ciao")) {
        return null;
      }
      return `${debugEnv},ciao:*`;
    }
  }
});

// node_modules/@homebridge/ciao/package.json
var require_package = __commonJS({
  "node_modules/@homebridge/ciao/package.json"(exports2, module2) {
    module2.exports = {
      name: "@homebridge/ciao",
      version: "1.3.12",
      description: "ciao is a RFC 6763 compliant dns-sd library, advertising on multicast dns (RFC 6762) implemented in plain Typescript/JavaScript",
      main: "lib/index.js",
      types: "lib/index.d.ts",
      maintainers: [
        "Andreas Bauer <mail@anderl-bauer.de>"
      ],
      author: "Andreas Bauer <mail@anderl-bauer.de>",
      homepage: "https://github.com/homebridge/ciao",
      license: "MIT",
      scripts: {
        clean: "rimraf lib && rimraf coverage",
        lint: "eslint 'src/**/*.{js,ts,json}'",
        "lint-docs": "typedoc --emit none",
        build: "npm run clean && tsc",
        test: "jest",
        "test-coverage": "jest --coverage",
        docs: "typedoc",
        prepublishOnly: "npm run build",
        postpublish: "npm run clean",
        preversion: "npm run lint",
        version: "npm run docs && git add docs"
      },
      bin: {
        "ciao-bcs": "lib/bonjour-conformance-testing.js"
      },
      keywords: [
        "ciao",
        "rfc-6762",
        "rfc-6763",
        "multicast-dns",
        "dns-sd",
        "bonjour",
        "zeroconf",
        "zero-configuration",
        "mdns",
        "mdns-sd",
        "service-discovery"
      ],
      repository: {
        type: "git",
        url: "git+https://github.com/homebridge/ciao.git"
      },
      bugs: {
        url: "https://github.com/homebridge/ciao/issues"
      },
      files: [
        "lib",
        "types",
        "README.md",
        "LICENSE",
        "package.json",
        "package-lock.json"
      ],
      dependencies: {
        debug: "^4.4.3",
        "fast-deep-equal": "^3.1.3",
        "source-map-support": "^0.5.21",
        tslib: "^2.8.1"
      },
      devDependencies: {
        "@eslint/eslintrc": "^3.3.6",
        "@eslint/js": "^10.0.1",
        "@types/debug": "^4.1.13",
        "@types/jest": "^30.0.0",
        "@types/node": "^26.2.0",
        "@types/source-map-support": "^0.5.10",
        "@typescript-eslint/eslint-plugin": "^8.67.0",
        "@typescript-eslint/parser": "^8.67.0",
        eslint: "^10.8.1",
        jest: "^30.4.2",
        rimraf: "^6.1.3",
        "ts-jest": "^29.4.12",
        "ts-node": "^10.9.2",
        typedoc: "^0.28.20",
        typescript: "^6.0.3"
      },
      allowScripts: {
        "unrs-resolver@1.12.2": true,
        "fsevents@2.3.3": true
      }
    };
  }
});

// node_modules/@homebridge/ciao/lib/util/dns-equal.js
var require_dns_equal = __commonJS({
  "node_modules/@homebridge/ciao/lib/util/dns-equal.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.dnsLowerCase = dnsLowerCase;
    var asciiPattern = /[A-Z]/g;
    function dnsLowerCase(value) {
      return value.replace(asciiPattern, (s) => s.toLowerCase());
    }
  }
});

// node_modules/@homebridge/ciao/lib/coder/dns-string-utils.js
var require_dns_string_utils = __commonJS({
  "node_modules/@homebridge/ciao/lib/coder/dns-string-utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.dnsTypeToString = dnsTypeToString;
    function dnsTypeToString(type) {
      switch (type) {
        case 1:
          return "A";
        case 5:
          return "CNAME";
        case 12:
          return "PTR";
        case 16:
          return "TXT";
        case 28:
          return "AAAA";
        case 33:
          return "SRV";
        case 41:
          return "OPT";
        case 47:
          return "NSEC";
        case 255:
          return "ANY";
      }
      return "UNSUPPORTED_" + type;
    }
  }
});

// node_modules/@homebridge/ciao/lib/coder/DNSLabelCoder.js
var require_DNSLabelCoder = __commonJS({
  "node_modules/@homebridge/ciao/lib/coder/DNSLabelCoder.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NonCompressionLabelCoder = exports2.DNSLabelCoder = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var assert_1 = tslib_1.__importDefault(require("assert"));
    var DNSLabelCoder = class _DNSLabelCoder {
      constructor(legacyUnicastEncoding) {
        this.trackedLengths = [];
        this.writtenNames = [];
        this.legacyUnicastEncoding = legacyUnicastEncoding || false;
      }
      initBuf(buffer) {
        this.buffer = buffer;
      }
      initRRLocation(recordOffset, rDataOffset, rDataLength) {
        this.startOfRR = recordOffset;
        this.startOfRData = rDataOffset;
        this.rDataLength = rDataLength;
      }
      clearRRLocation() {
        this.startOfRR = void 0;
        this.startOfRData = void 0;
        this.rDataLength = void 0;
      }
      getUncompressedNameLength(name) {
        if (name === ".") {
          return 1;
        }
        (0, assert_1.default)(name.endsWith("."), "Supplied illegal name which doesn't end with the root label!");
        let length = 0;
        const labels = name.split(".");
        for (let i = 0; i < labels.length; i++) {
          const label = labels[i];
          if (!label && i < labels.length - 1) {
            assert_1.default.fail("Label " + i + " in name '" + name + "' was empty");
          }
          length += _DNSLabelCoder.getLabelLength(label);
        }
        return length;
      }
      getNameLength(name) {
        if (_DNSLabelCoder.DISABLE_COMPRESSION) {
          return this.getUncompressedNameLength(name);
        }
        if (name === ".") {
          return 1;
        }
        (0, assert_1.default)(name.endsWith("."), "Supplied illegal name which doesn't end with the root label!");
        const labelLengths = name.split(".").map((label) => _DNSLabelCoder.getLabelLength(label));
        const nameLength = {
          name,
          length: 0,
          // total length needed for encoding (with compression enabled)
          labelLengths
        };
        let candidateSharingLongestSuffix = void 0;
        let longestSuffixLength = 0;
        for (let i = 0; i < this.trackedLengths.length; i++) {
          const element = this.trackedLengths[i];
          const suffixLength = _DNSLabelCoder.computeLabelSuffixLength(element.name, name);
          if (suffixLength > longestSuffixLength) {
            candidateSharingLongestSuffix = element;
            longestSuffixLength = suffixLength;
          }
        }
        let length = 0;
        if (candidateSharingLongestSuffix) {
          const pointingFromIndex = labelLengths.length - 1 - longestSuffixLength;
          for (let i = 0; i < pointingFromIndex; i++) {
            length += labelLengths[i];
          }
          length += 2;
        } else {
          for (let i = 0; i < labelLengths.length; i++) {
            length += labelLengths[i];
          }
        }
        nameLength.length = length;
        this.trackedLengths.push(nameLength);
        return nameLength.length;
      }
      encodeUncompressedName(name, offset) {
        if (!this.buffer) {
          assert_1.default.fail("Illegal state. Buffer not initialized!");
        }
        return _DNSLabelCoder.encodeUncompressedName(name, this.buffer, offset);
      }
      static encodeUncompressedName(name, buffer, offset) {
        (0, assert_1.default)(name.endsWith("."), "Name does not end with the root label");
        const oldOffset = offset;
        const labels = name === "." ? [""] : name.split(".");
        for (let i = 0; i < labels.length; i++) {
          const label = labels[i];
          if (label === "") {
            (0, assert_1.default)(i === labels.length - 1, "Encountered root label being not at the end of the domain name");
            buffer.writeUInt8(0, offset++);
            break;
          }
          const length = buffer.write(label, offset + 1);
          buffer.writeUInt8(length, offset);
          offset += length + 1;
        }
        return offset - oldOffset;
      }
      encodeName(name, offset) {
        if (_DNSLabelCoder.DISABLE_COMPRESSION) {
          return this.encodeUncompressedName(name, offset);
        }
        if (!this.buffer) {
          assert_1.default.fail("Illegal state. Buffer not initialized!");
        }
        if (name === ".") {
          this.buffer.writeUInt8(0, offset);
          return 1;
        }
        const oldOffset = offset;
        const labels = name.split(".");
        const writtenName = {
          name,
          writtenLabels: new Array(labels.length).fill(-1)
          // init with "-1" meaning unknown location
        };
        let candidateSharingLongestSuffix = void 0;
        let longestSuffixLength = 0;
        for (let i = 0; i < this.writtenNames.length; i++) {
          const element = this.writtenNames[i];
          const suffixLength = _DNSLabelCoder.computeLabelSuffixLength(element.name, name);
          if (suffixLength > longestSuffixLength) {
            candidateSharingLongestSuffix = element;
            longestSuffixLength = suffixLength;
          }
        }
        if (candidateSharingLongestSuffix) {
          const pointingFromIndex = labels.length - 1 - longestSuffixLength;
          const pointingToIndex = candidateSharingLongestSuffix.writtenLabels.length - 1 - longestSuffixLength;
          for (let i = 0; i < pointingFromIndex; i++) {
            writtenName.writtenLabels[i] = offset;
            offset += _DNSLabelCoder.writeLabel(labels[i], this.buffer, offset);
          }
          const pointerDestination = candidateSharingLongestSuffix.writtenLabels[pointingToIndex];
          (0, assert_1.default)(pointerDestination !== -1, "Label which was pointed at wasn't yet written to the buffer!");
          (0, assert_1.default)(pointerDestination <= _DNSLabelCoder.NOT_POINTER_MASK, "Pointer exceeds to length of a maximum of 14 bits");
          (0, assert_1.default)(pointerDestination < offset, "Pointer can only point to a prior location");
          const pointer = _DNSLabelCoder.POINTER_MASK | pointerDestination;
          this.buffer.writeUInt16BE(pointer, offset);
          offset += 2;
        } else {
          for (let i = 0; i < labels.length; i++) {
            writtenName.writtenLabels[i] = offset;
            offset += _DNSLabelCoder.writeLabel(labels[i], this.buffer, offset);
          }
        }
        this.writtenNames.push(writtenName);
        return offset - oldOffset;
      }
      decodeName(offset, resolvePointers = true) {
        if (!this.buffer) {
          assert_1.default.fail("Illegal state. Buffer not initialized!");
        }
        const oldOffset = offset;
        let name = "";
        for (; ; ) {
          const length = this.buffer.readUInt8(offset++);
          if (length === 0) {
            name += ".";
            break;
          }
          const labelTypePattern = length & _DNSLabelCoder.POINTER_MASK_ONE_BYTE;
          if (labelTypePattern) {
            if (labelTypePattern === _DNSLabelCoder.POINTER_MASK_ONE_BYTE) {
              const pointer = this.buffer.readUInt16BE(offset - 1) & _DNSLabelCoder.NOT_POINTER_MASK;
              offset++;
              if (!resolvePointers) {
                name += name ? ".~" : "~";
                break;
              }
              (0, assert_1.default)(pointer < oldOffset, "Pointer at " + (offset - 2) + " MUST point to a prior location!");
              name += (name ? "." : "") + this.decodeName(pointer).data;
              break;
            } else if (labelTypePattern === _DNSLabelCoder.LOCAL_COMPRESSION_ONE_BYTE) {
              let localPointer = this.buffer.readUInt16BE(offset - 1) & _DNSLabelCoder.NOT_POINTER_MASK;
              offset++;
              if (!resolvePointers) {
                name += name ? ".~" : "~";
                break;
              }
              if (localPointer >= 0 && localPointer < 255) {
                (0, assert_1.default)(this.startOfRR !== void 0, "Cannot decompress locally compressed name as record is not initialized!");
                localPointer += this.startOfRR;
                (0, assert_1.default)(localPointer < oldOffset, "LocalPointer <255 at " + (offset - 2) + " MUST point to a prior location!");
                name += (name ? "." : "") + this.decodeName(localPointer).data;
              } else if (localPointer >= 256) {
                (0, assert_1.default)(this.startOfRData !== void 0 && this.rDataLength !== void 0, "Cannot decompress locally compressed name as record is not initialized!");
                localPointer -= 256;
                localPointer += this.startOfRData;
                (0, assert_1.default)(localPointer < oldOffset, "LocalPointer >=256 at " + (offset - 2) + " MUST point to a prior location!");
                name += (name ? "." : "") + this.decodeName(localPointer).data;
              } else {
                assert_1.default.fail("Encountered unknown pointer range " + localPointer);
              }
              break;
            } else if (labelTypePattern === _DNSLabelCoder.EXTENDED_LABEL_TYPE_ONE_BYTE) {
              const extendedLabelType = length & _DNSLabelCoder.NOT_POINTER_MASK_ONE_BYTE;
              assert_1.default.fail("Received extended label type " + extendedLabelType + " at " + (offset - 1));
            } else {
              assert_1.default.fail("Encountered unknown pointer type: " + Buffer.from([labelTypePattern >> 6]).toString("hex") + " (with original byte " + Buffer.from([length]).toString("hex") + ")");
            }
          }
          const label = this.buffer.toString("utf-8", offset, offset + length);
          offset += length;
          name += (name ? "." : "") + label;
        }
        return {
          data: name,
          readBytes: offset - oldOffset
        };
      }
      static getLabelLength(label) {
        if (!label) {
          return 1;
        } else {
          const byteLength = Buffer.byteLength(label);
          (0, assert_1.default)(byteLength <= 63, "Label cannot be longer than 63 bytes (" + label + ")");
          return 1 + byteLength;
        }
      }
      static writeLabel(label, buffer, offset) {
        if (!label) {
          buffer.writeUInt8(0, offset);
          return 1;
        } else {
          const length = buffer.write(label, offset + 1);
          buffer.writeUInt8(length, offset);
          return length + 1;
        }
      }
      static computeLabelSuffixLength(a, b) {
        (0, assert_1.default)(a.length !== 0 && b.length !== 0, "Encountered empty name when comparing suffixes!");
        const lastAIndex = a.length - 1;
        const lastBIndex = b.length - 1;
        let equalLabels = 0;
        let exitByBreak = false;
        for (let i = 1; i <= lastAIndex && i <= lastBIndex; i++) {
          const aChar = a.charAt(lastAIndex - i);
          const bChar = b.charAt(lastBIndex - i);
          (0, assert_1.default)(!!aChar && !!bChar, "Seemingly encountered out of bounds trying to calculate suffixes");
          if (aChar !== bChar) {
            exitByBreak = true;
            break;
          } else if (aChar === ".") {
            equalLabels++;
          }
        }
        if (!exitByBreak) {
          const comparedCharacters = Math.min(lastAIndex, lastBIndex);
          const lastLongerIndex = Math.max(lastAIndex, lastBIndex);
          const boundaryIndex = lastLongerIndex - comparedCharacters - 1;
          const longer = lastAIndex >= lastBIndex ? a : b;
          if (boundaryIndex < 0 || longer.charAt(boundaryIndex) === ".") {
            equalLabels++;
          }
        }
        return equalLabels;
      }
    };
    exports2.DNSLabelCoder = DNSLabelCoder;
    DNSLabelCoder.DISABLE_COMPRESSION = false;
    DNSLabelCoder.POINTER_MASK = 49152;
    DNSLabelCoder.POINTER_MASK_ONE_BYTE = 192;
    DNSLabelCoder.LOCAL_COMPRESSION_ONE_BYTE = 128;
    DNSLabelCoder.EXTENDED_LABEL_TYPE_ONE_BYTE = 64;
    DNSLabelCoder.NOT_POINTER_MASK = 16383;
    DNSLabelCoder.NOT_POINTER_MASK_ONE_BYTE = 63;
    var NonCompressionLabelCoder = class extends DNSLabelCoder {
      getNameLength(name) {
        return this.getUncompressedNameLength(name);
      }
      encodeName(name, offset) {
        return this.encodeUncompressedName(name, offset);
      }
    };
    exports2.NonCompressionLabelCoder = NonCompressionLabelCoder;
    NonCompressionLabelCoder.INSTANCE = new NonCompressionLabelCoder();
  }
});

// node_modules/@homebridge/ciao/lib/coder/ResourceRecord.js
var require_ResourceRecord = __commonJS({
  "node_modules/@homebridge/ciao/lib/coder/ResourceRecord.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ResourceRecord = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var assert_1 = tslib_1.__importDefault(require("assert"));
    var debug_1 = tslib_1.__importDefault(require_src());
    var dns_equal_1 = require_dns_equal();
    var dns_string_utils_1 = require_dns_string_utils();
    var DNSLabelCoder_1 = require_DNSLabelCoder();
    var debug = (0, debug_1.default)("ciao:decoder");
    var ResourceRecord = class _ResourceRecord {
      constructor(name, type, ttl = _ResourceRecord.RR_DEFAULT_TTL, flushFlag = false, clazz = 1) {
        this.flushFlag = false;
        if (typeof name === "string") {
          if (!name.endsWith(".")) {
            name = name + ".";
          }
          this.name = name;
          this.type = type;
          this.class = clazz;
          this.ttl = ttl;
          this.flushFlag = flushFlag;
        } else {
          this.name = name.name;
          this.type = name.type;
          this.class = name.class;
          this.ttl = name.ttl;
          this.flushFlag = name.flushFlag;
        }
      }
      getLowerCasedName() {
        return this.lowerCasedName || (this.lowerCasedName = (0, dns_equal_1.dnsLowerCase)(this.name));
      }
      getEncodingLength(coder) {
        return coder.getNameLength(this.name) + 10 + this.getRDataEncodingLength(coder);
      }
      encode(coder, buffer, offset) {
        const oldOffset = offset;
        const nameLength = coder.encodeName(this.name, offset);
        offset += nameLength;
        buffer.writeUInt16BE(this.type, offset);
        offset += 2;
        let rClass = this.class;
        if (this.flushFlag) {
          rClass |= _ResourceRecord.FLUSH_MASK;
        }
        buffer.writeUInt16BE(rClass, offset);
        offset += 2;
        buffer.writeUInt32BE(this.ttl, offset);
        offset += 4;
        const dataLength = this.encodeRData(coder, buffer, offset + 2);
        buffer.writeUInt16BE(dataLength, offset);
        offset += 2 + dataLength;
        return offset - oldOffset;
      }
      getRawData() {
        const coder = DNSLabelCoder_1.NonCompressionLabelCoder.INSTANCE;
        const length = this.getRDataEncodingLength(coder);
        const buffer = Buffer.allocUnsafe(length);
        coder.initBuf(buffer);
        const writtenBytes = this.encodeRData(coder, buffer, 0);
        (0, assert_1.default)(writtenBytes === buffer.length, "Didn't completely write to the buffer! (" + writtenBytes + "!=" + buffer.length + ")");
        coder.initBuf();
        return buffer;
      }
      static clone(records) {
        return records.map((record) => record.clone());
      }
      getRecordRepresentation() {
        return {
          name: this.name,
          type: this.type,
          class: this.class,
          ttl: this.ttl,
          flushFlag: this.flushFlag
        };
      }
      /**
       * Returns if this and the supplied record are the same (ignoring ttl and flush flag)
       * @param record
       */
      aboutEqual(record) {
        return this.type === record.type && this.name === record.name && this.class === record.class && this.dataEquals(record);
      }
      representsSameData(record) {
        return this.type === record.type && this.name === record.name && this.class === record.class;
      }
      asString() {
        return `RR ${this.name} ${this.type} ${this.class} ${this.dataAsString()}`;
      }
      static decode(context, coder, buffer, offset) {
        const oldOffset = offset;
        const decodedHeader = this.decodeRecordHeader(coder, buffer, offset);
        offset += decodedHeader.readBytes;
        const header = decodedHeader.data;
        const rrDecoder = this.typeToRecordDecoder.get(header.type);
        if (!rrDecoder) {
          return { readBytes: offset + header.rDataLength - oldOffset };
        }
        coder.initRRLocation(oldOffset, offset, header.rDataLength);
        const rdata = buffer.subarray(0, offset + header.rDataLength);
        let decodedRecord;
        try {
          decodedRecord = rrDecoder(coder, header, rdata, offset);
        } catch (error) {
          debug(`Received malformed rdata section for ${(0, dns_string_utils_1.dnsTypeToString)(header.type)} ${header.name} ${header.ttl} from ${context.address}:${context.port} with data '${rdata.subarray(offset).toString("hex")}': ${error.stack}`);
          return { readBytes: offset + header.rDataLength - oldOffset };
        }
        offset += decodedRecord.readBytes;
        coder.clearRRLocation();
        return {
          data: decodedRecord.data,
          readBytes: offset - oldOffset
        };
      }
      static decodeRecordHeader(coder, buffer, offset) {
        const oldOffset = offset;
        const decodedName = coder.decodeName(offset);
        offset += decodedName.readBytes;
        const type = buffer.readUInt16BE(offset);
        offset += 2;
        const rClass = buffer.readUInt16BE(offset);
        offset += 2;
        let clazz;
        let flushFlag = false;
        if (type !== 41) {
          clazz = rClass & this.NOT_FLUSH_MASK;
          flushFlag = !!(rClass & this.FLUSH_MASK);
        } else {
          clazz = rClass;
        }
        const ttl = buffer.readUInt32BE(offset);
        offset += 4;
        const rDataLength = buffer.readUInt16BE(offset);
        offset += 2;
        const rHeader = {
          name: decodedName.data,
          type,
          class: clazz,
          ttl,
          flushFlag,
          rDataLength
        };
        return {
          data: rHeader,
          readBytes: offset - oldOffset
        };
      }
    };
    exports2.ResourceRecord = ResourceRecord;
    ResourceRecord.typeToRecordDecoder = /* @__PURE__ */ new Map();
    ResourceRecord.FLUSH_MASK = 32768;
    ResourceRecord.NOT_FLUSH_MASK = 32767;
    ResourceRecord.RR_DEFAULT_TTL_SHORT = 120;
    ResourceRecord.RR_DEFAULT_TTL = 4500;
  }
});

// node_modules/@homebridge/ciao/lib/util/v4mapped.js
var require_v4mapped = __commonJS({
  "node_modules/@homebridge/ciao/lib/util/v4mapped.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isIPv4Mapped = isIPv4Mapped;
    exports2.getIPFromV4Mapped = getIPFromV4Mapped;
    function isIPv4Mapped(address) {
      var _a;
      if (!/^::ffff:(\d{1,3}\.){3}\d{1,3}$/i.test(address)) {
        return false;
      }
      const parts = (_a = address.split(/::ffff:/i)[1]) === null || _a === void 0 ? void 0 : _a.split(".").map(Number);
      return (parts === null || parts === void 0 ? void 0 : parts.length) === 4 && parts.every((part) => part >= 0 && part <= 255);
    }
    function getIPFromV4Mapped(address) {
      var _a;
      return (_a = address.split(/^::ffff:/i)[1]) !== null && _a !== void 0 ? _a : null;
    }
  }
});

// node_modules/@homebridge/ciao/lib/util/domain-formatter.js
var require_domain_formatter = __commonJS({
  "node_modules/@homebridge/ciao/lib/util/domain-formatter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.parseFQDN = parseFQDN;
    exports2.stringify = stringify;
    exports2.formatHostname = formatHostname;
    exports2.removeTLD = removeTLD;
    exports2.formatMappedIPv4Address = formatMappedIPv4Address;
    exports2.enlargeIPv6 = enlargeIPv6;
    exports2.shortenIPv6 = shortenIPv6;
    exports2.formatReverseAddressPTRName = formatReverseAddressPTRName;
    exports2.ipAddressFromReversAddressName = ipAddressFromReversAddressName;
    exports2.getNetAddress = getNetAddress;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var assert_1 = tslib_1.__importDefault(require("assert"));
    var net_1 = tslib_1.__importDefault(require("net"));
    var v4mapped_1 = require_v4mapped();
    function isProtocol(part) {
      return part === "_tcp" || part === "_udp";
    }
    function isSub(part) {
      return part === "_sub";
    }
    function removePrefixedUnderscore(part) {
      return part.startsWith("_") ? part.slice(1) : part;
    }
    function isSubTypePTRParts(parts) {
      return "subtype" in parts;
    }
    function parseFQDN(fqdn) {
      const parts = fqdn.split(".");
      (0, assert_1.default)(parts.length >= 3, "Received illegal fqdn: " + fqdn);
      let i = parts.length - 1;
      let domain = "";
      while (!isProtocol(parts[i])) {
        domain = removePrefixedUnderscore(parts[i]) + (domain ? "." + domain : "");
        i--;
      }
      (0, assert_1.default)(i >= 1, "Failed to parse illegal fqdn: " + fqdn);
      const protocol = removePrefixedUnderscore(parts[i--]);
      const type = removePrefixedUnderscore(parts[i--]);
      if (i < 0) {
        return {
          domain,
          protocol,
          type
        };
      } else if (isSub(parts[i])) {
        i--;
        (0, assert_1.default)(i === 0, "Received illegal formatted sub type fqdn: " + fqdn);
        const subtype = removePrefixedUnderscore(parts[i]);
        return {
          domain,
          protocol,
          type,
          subtype
        };
      } else {
        const name = removePrefixedUnderscore(parts.slice(0, i + 1).join("."));
        return {
          domain,
          protocol,
          type,
          name
        };
      }
    }
    function stringify(parts) {
      (0, assert_1.default)(parts.type, "type cannot be undefined");
      (0, assert_1.default)(parts.type.length <= 15, "type must not be longer than 15 characters");
      let prefix;
      if (isSubTypePTRParts(parts)) {
        prefix = `_${parts.subtype}._sub.`;
      } else {
        prefix = parts.name ? `${parts.name}.` : "";
      }
      return `${prefix}_${parts.type}._${parts.protocol || "tcp"}.${parts.domain || "local"}.`;
    }
    function formatHostname(hostname, domain = "local") {
      (0, assert_1.default)(!hostname.endsWith("."), "hostname must not end with the root label!");
      const tld = "." + domain;
      return (!hostname.endsWith(tld) ? hostname + tld : hostname) + ".";
    }
    function removeTLD(hostname) {
      if (hostname.endsWith(".")) {
        hostname = hostname.substring(0, hostname.length - 1);
      }
      const lastDot = hostname.lastIndexOf(".");
      return hostname.slice(0, lastDot);
    }
    function formatMappedIPv4Address(address) {
      (0, assert_1.default)(net_1.default.isIPv4(address), "Illegal argument. Must be an IPv4 address!");
      const hexParts = address.split(".").map((part) => parseInt(part).toString(16).padStart(2, "0"));
      const ipv6Part = `::ffff:${hexParts.join("")}`;
      return ipv6Part.replace(/(.{4})(.{4})$/, "$1:$2");
    }
    function enlargeIPv6(address) {
      (0, assert_1.default)(net_1.default.isIPv6(address), "Illegal argument. Must be ipv6 address!");
      const parts = address.split("::");
      const head = parts[0] ? parts[0].split(":") : [];
      const tail = parts[1] ? parts[1].split(":") : [];
      const fill = new Array(8 - head.length - tail.length).fill("0000");
      return [...head, ...fill, ...tail].map((hextet) => hextet.padStart(4, "0")).join(":");
    }
    function shortenIPv6(address) {
      if (typeof address === "string") {
        address = address.split(":");
      }
      for (let i = 0; i < address.length; i++) {
        const part = address[i];
        let j = 0;
        for (; j < Math.min(3, part.length - 1); j++) {
          if (part.charAt(j) !== "0") {
            break;
          }
        }
        address[i] = part.slice(j);
      }
      let longestBlockOfZerosIndex = -1;
      let longestBlockOfZerosLength = 0;
      for (let i = 0; i < address.length; i++) {
        if (address[i] !== "0") {
          continue;
        }
        let zerosCount = 1;
        let j = i + 1;
        for (; j < address.length; j++) {
          if (address[j] === "0") {
            zerosCount++;
          } else {
            break;
          }
        }
        if (zerosCount > longestBlockOfZerosLength) {
          longestBlockOfZerosIndex = i;
          longestBlockOfZerosLength = zerosCount;
        }
        i = j;
      }
      if (longestBlockOfZerosIndex !== -1) {
        const startOrEnd = longestBlockOfZerosIndex === 0 || longestBlockOfZerosIndex + longestBlockOfZerosLength === 8;
        address[longestBlockOfZerosIndex] = startOrEnd ? ":" : "";
        if (longestBlockOfZerosLength > 1) {
          address.splice(longestBlockOfZerosIndex + 1, longestBlockOfZerosLength - 1);
        }
      }
      const result = address.join(":");
      if (result === ":") {
        return "::";
      }
      return result;
    }
    function formatReverseAddressPTRName(address) {
      if (net_1.default.isIPv4(address)) {
        const split = address.split(".").reverse();
        return split.join(".") + ".in-addr.arpa";
      }
      if (!net_1.default.isIPv6(address)) {
        throw new Error("Supplied illegal ip address format: " + address);
      }
      if ((0, v4mapped_1.isIPv4Mapped)(address)) {
        return (0, v4mapped_1.getIPFromV4Mapped)(address).split(".").reverse().join(".") + ".in-addr.arpa";
      }
      address = enlargeIPv6(address).toUpperCase();
      const nibbleSplit = address.replace(/:/g, "").split("").reverse();
      (0, assert_1.default)(nibbleSplit.length === 32, "Encountered invalid ipv6 address length! " + nibbleSplit.length);
      return nibbleSplit.join(".") + ".ip6.arpa";
    }
    function ipAddressFromReversAddressName(name) {
      name = name.toLowerCase();
      if (name.endsWith(".in-addr.arpa")) {
        const split = name.replace(".in-addr.arpa", "").split(".").reverse();
        return split.join(".");
      } else if (name.endsWith(".ip6.arpa")) {
        const split = name.replace(".ip6.arpa", "").split(".").reverse();
        (0, assert_1.default)(split.length === 32, "Encountered illegal length for .ip6.arpa split!");
        const parts = [];
        for (let i = 0; i < split.length; i += 4) {
          parts.push(split.slice(i, i + 4).join(""));
        }
        return shortenIPv6(parts.join(":"));
      } else {
        throw new Error("Supplied unknown reverse address name format: " + name);
      }
    }
    function getNetAddress(address, netmask) {
      (0, assert_1.default)(net_1.default.isIP(address) === net_1.default.isIP(netmask), "IP address version must match. Netmask cannot have a version different from the address!");
      if (net_1.default.isIPv4(address)) {
        const addressParts = address.split(".");
        const netmaskParts = netmask.split(".");
        const netAddressParts = new Array(4);
        for (let i = 0; i < addressParts.length; i++) {
          const addressNum = parseInt(addressParts[i]);
          const netmaskNum = parseInt(netmaskParts[i]);
          netAddressParts[i] = (addressNum & netmaskNum).toString();
        }
        return netAddressParts.join(".");
      } else if (net_1.default.isIPv6(address)) {
        const addressParts = enlargeIPv6(address).split(":");
        const netmaskParts = enlargeIPv6(netmask).split(":");
        const netAddressParts = new Array(8);
        for (let i = 0; i < addressParts.length; i++) {
          const addressNum = parseInt(addressParts[i], 16);
          const netmaskNum = parseInt(netmaskParts[i], 16);
          netAddressParts[i] = (addressNum & netmaskNum).toString(16);
        }
        return shortenIPv6(enlargeIPv6(netAddressParts.join(":")));
      } else {
        throw new Error("Illegal argument. Address is not an ip address!");
      }
    }
  }
});

// node_modules/@homebridge/ciao/lib/coder/records/AAAARecord.js
var require_AAAARecord = __commonJS({
  "node_modules/@homebridge/ciao/lib/coder/records/AAAARecord.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AAAARecord = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var assert_1 = tslib_1.__importDefault(require("assert"));
    var net_1 = tslib_1.__importDefault(require("net"));
    var domain_formatter_1 = require_domain_formatter();
    var ResourceRecord_1 = require_ResourceRecord();
    var AAAARecord = class _AAAARecord extends ResourceRecord_1.ResourceRecord {
      constructor(name, ipAddress, flushFlag, ttl) {
        if (typeof name === "string") {
          super(name, 28, ttl || _AAAARecord.DEFAULT_TTL, flushFlag);
        } else {
          (0, assert_1.default)(
            name.type === 28
            /* RType.AAAA */
          );
          super(name);
        }
        (0, assert_1.default)(net_1.default.isIPv6(ipAddress), "IP address is not in v6 format!");
        this.ipAddress = ipAddress;
      }
      getRDataEncodingLength() {
        return 16;
      }
      encodeRData(coder, buffer, offset) {
        const oldOffset = offset;
        const address = (0, domain_formatter_1.enlargeIPv6)(this.ipAddress);
        const hextets = address.split(":");
        (0, assert_1.default)(hextets.length === 8, "invalid IP address");
        for (const hextet of hextets) {
          const number = parseInt(hextet, 16);
          buffer.writeUInt16BE(number, offset);
          offset += 2;
        }
        return offset - oldOffset;
      }
      static decodeData(coder, header, buffer, offset) {
        const oldOffset = offset;
        const ipBytes = new Array(8);
        for (let i = 0; i < 8; i++) {
          const number = buffer.readUInt16BE(offset);
          offset += 2;
          ipBytes[i] = number.toString(16);
        }
        const ipAddress = (0, domain_formatter_1.shortenIPv6)(ipBytes.join(":"));
        return {
          data: new _AAAARecord(header, ipAddress),
          readBytes: offset - oldOffset
        };
      }
      clone() {
        return new _AAAARecord(this.getRecordRepresentation(), this.ipAddress);
      }
      dataAsString() {
        return this.ipAddress;
      }
      dataEquals(record) {
        return this.ipAddress === record.ipAddress;
      }
    };
    exports2.AAAARecord = AAAARecord;
    AAAARecord.DEFAULT_TTL = AAAARecord.RR_DEFAULT_TTL_SHORT;
  }
});

// node_modules/@homebridge/ciao/lib/coder/records/ARecord.js
var require_ARecord = __commonJS({
  "node_modules/@homebridge/ciao/lib/coder/records/ARecord.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ARecord = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var assert_1 = tslib_1.__importDefault(require("assert"));
    var net_1 = tslib_1.__importDefault(require("net"));
    var ResourceRecord_1 = require_ResourceRecord();
    var ARecord = class _ARecord extends ResourceRecord_1.ResourceRecord {
      constructor(name, ipAddress, flushFlag, ttl) {
        if (typeof name === "string") {
          super(name, 1, ttl || _ARecord.DEFAULT_TTL, flushFlag);
        } else {
          (0, assert_1.default)(
            name.type === 1
            /* RType.A */
          );
          super(name);
        }
        (0, assert_1.default)(net_1.default.isIPv4(ipAddress), "IP address is not in IPv4 format!");
        this.ipAddress = ipAddress;
      }
      getRDataEncodingLength() {
        return 4;
      }
      encodeRData(coder, buffer, offset) {
        const oldOffset = offset;
        const bytes = this.ipAddress.split(".");
        (0, assert_1.default)(bytes.length === 4, "invalid ip address");
        for (const byte of bytes) {
          const number = parseInt(byte, 10);
          buffer.writeUInt8(number, offset++);
        }
        return offset - oldOffset;
      }
      static decodeData(coder, header, buffer, offset) {
        const oldOffset = offset;
        const ipBytes = new Array(4);
        for (let i = 0; i < 4; i++) {
          const byte = buffer.readUInt8(offset++);
          ipBytes[i] = byte.toString(10);
        }
        const ipAddress = ipBytes.join(".");
        return {
          data: new _ARecord(header, ipAddress),
          readBytes: offset - oldOffset
        };
      }
      clone() {
        return new _ARecord(this.getRecordRepresentation(), this.ipAddress);
      }
      dataAsString() {
        return this.ipAddress;
      }
      dataEquals(record) {
        return this.ipAddress === record.ipAddress;
      }
    };
    exports2.ARecord = ARecord;
    ARecord.DEFAULT_TTL = ARecord.RR_DEFAULT_TTL_SHORT;
  }
});

// node_modules/@homebridge/ciao/lib/coder/records/CNAMERecord.js
var require_CNAMERecord = __commonJS({
  "node_modules/@homebridge/ciao/lib/coder/records/CNAMERecord.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CNAMERecord = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var assert_1 = tslib_1.__importDefault(require("assert"));
    var dns_equal_1 = require_dns_equal();
    var ResourceRecord_1 = require_ResourceRecord();
    var CNAMERecord = class _CNAMERecord extends ResourceRecord_1.ResourceRecord {
      constructor(name, cname, flushFlag, ttl) {
        if (typeof name === "string") {
          super(name, 5, ttl, flushFlag);
        } else {
          (0, assert_1.default)(
            name.type === 5
            /* RType.CNAME */
          );
          super(name);
        }
        if (!cname.endsWith(".")) {
          cname += ".";
        }
        this.cname = cname;
      }
      getLowerCasedCName() {
        return this.lowerCasedCName || (this.lowerCasedCName = (0, dns_equal_1.dnsLowerCase)(this.cname));
      }
      getRDataEncodingLength(coder) {
        return coder.getNameLength(this.cname);
      }
      encodeRData(coder, buffer, offset) {
        const oldOffset = offset;
        const cnameLength = coder.encodeName(this.cname, offset);
        offset += cnameLength;
        return offset - oldOffset;
      }
      static decodeData(coder, header, buffer, offset) {
        const oldOffset = offset;
        const decodedName = coder.decodeName(offset);
        offset += decodedName.readBytes;
        return {
          data: new _CNAMERecord(header, decodedName.data),
          readBytes: offset - oldOffset
        };
      }
      clone() {
        return new _CNAMERecord(this.getRecordRepresentation(), this.cname);
      }
      dataAsString() {
        return this.cname;
      }
      dataEquals(record) {
        return this.getLowerCasedCName() === record.getLowerCasedCName();
      }
    };
    exports2.CNAMERecord = CNAMERecord;
    CNAMERecord.DEFAULT_TTL = ResourceRecord_1.ResourceRecord.RR_DEFAULT_TTL;
  }
});

// node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "node_modules/fast-deep-equal/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function equal(a, b) {
      if (a === b) return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i])) return false;
          return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal(a[key], b[key])) return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// node_modules/@homebridge/ciao/lib/coder/records/NSECRecord.js
var require_NSECRecord = __commonJS({
  "node_modules/@homebridge/ciao/lib/coder/records/NSECRecord.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NSECRecord = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var assert_1 = tslib_1.__importDefault(require("assert"));
    var fast_deep_equal_1 = tslib_1.__importDefault(require_fast_deep_equal());
    var dns_equal_1 = require_dns_equal();
    var ResourceRecord_1 = require_ResourceRecord();
    var NSECRecord = class _NSECRecord extends ResourceRecord_1.ResourceRecord {
      constructor(name, nextDomainName, rrtypes, ttl, flushFlag) {
        if (typeof name === "string") {
          super(name, 47, ttl || _NSECRecord.RR_DEFAULT_TTL_SHORT, flushFlag);
        } else {
          (0, assert_1.default)(
            name.type === 47
            /* RType.NSEC */
          );
          super(name);
        }
        if (!nextDomainName.endsWith(".")) {
          nextDomainName += ".";
        }
        this.nextDomainName = nextDomainName;
        this.rrTypeWindows = _NSECRecord.rrTypesToWindowMap(rrtypes);
      }
      getLowerCasedNextDomainName() {
        return this.lowerCasedNextDomainName || (this.lowerCasedNextDomainName = (0, dns_equal_1.dnsLowerCase)(this.nextDomainName));
      }
      getRRTypesBitMapEncodingLength() {
        let rrTypesBitMapLength = 0;
        for (const window2 of this.rrTypeWindows) {
          (0, assert_1.default)(window2.rrtypes.length > 0, "types array for windowId " + window2.windowId + " cannot be empty!");
          rrTypesBitMapLength += 2 + window2.bitMapSize;
        }
        return rrTypesBitMapLength;
      }
      getRDataEncodingLength(coder) {
        return coder.getUncompressedNameLength(this.nextDomainName) + this.getRRTypesBitMapEncodingLength();
      }
      encodeRData(coder, buffer, offset) {
        const oldOffset = offset;
        const length = coder.encodeUncompressedName(this.nextDomainName, offset);
        offset += length;
        for (const window2 of this.rrTypeWindows) {
          buffer.writeUInt8(window2.windowId, offset++);
          buffer.writeUInt8(window2.bitMapSize, offset++);
          const bitmap = Buffer.alloc(window2.bitMapSize);
          for (const type of window2.rrtypes) {
            const byteNum = (type & 255) >> 3;
            let mask = bitmap.readUInt8(byteNum);
            mask |= 1 << 7 - (type & 7);
            bitmap.writeUInt8(mask, byteNum);
          }
          bitmap.copy(buffer, offset);
          offset += bitmap.length;
        }
        return offset - oldOffset;
      }
      static decodeData(coder, header, buffer, offset) {
        const oldOffset = offset;
        const decodedNextDomainName = coder.decodeName(offset, false);
        offset += decodedNextDomainName.readBytes;
        const rrTypes = [];
        while (offset < buffer.length) {
          const windowId = buffer.readUInt8(offset++);
          const bitMapLength = buffer.readUInt8(offset++);
          const upperRType = windowId << 8;
          for (let block = 0; block < bitMapLength; block++) {
            const byte = buffer.readUInt8(offset++);
            for (let bit = 0; bit < 8; bit++) {
              if (byte & 1 << 7 - bit) {
                const rType = upperRType | block << 3 | bit;
                rrTypes.push(rType);
              }
            }
          }
        }
        return {
          data: new _NSECRecord(header, decodedNextDomainName.data, rrTypes),
          readBytes: offset - oldOffset
        };
      }
      clone() {
        return new _NSECRecord(this.getRecordRepresentation(), this.nextDomainName, _NSECRecord.windowsToRRTypes(this.rrTypeWindows));
      }
      dataAsString() {
        return `${this.nextDomainName} [${_NSECRecord.windowsToRRTypes(this.rrTypeWindows).map((rtype) => "" + rtype).join(",")}]`;
      }
      dataEquals(record) {
        return this.getLowerCasedNextDomainName() === record.getLowerCasedNextDomainName() && (0, fast_deep_equal_1.default)(this.rrTypeWindows, record.rrTypeWindows);
      }
      static rrTypesToWindowMap(rrtypes) {
        const rrTypeWindows = [];
        for (const rrtype of rrtypes) {
          const windowId = rrtype >> 8;
          let window2 = void 0;
          for (const window0 of rrTypeWindows) {
            if (window0.windowId === windowId) {
              window2 = window0;
              break;
            }
          }
          if (!window2) {
            window2 = {
              windowId,
              bitMapSize: ((rrtype & 255) >> 3) + 1,
              rrtypes: [rrtype]
            };
            rrTypeWindows.push(window2);
          } else {
            window2.rrtypes.push(rrtype);
            const bitMapSize = ((rrtype & 255) >> 3) + 1;
            if (bitMapSize > window2.bitMapSize) {
              window2.bitMapSize = bitMapSize;
            }
          }
        }
        rrTypeWindows.sort((a, b) => a.windowId - b.windowId);
        rrTypeWindows.forEach((window2) => window2.rrtypes.sort((a, b) => a - b));
        return rrTypeWindows;
      }
      static windowsToRRTypes(windows) {
        const rrtypes = [];
        for (const window2 of windows) {
          rrtypes.push(...window2.rrtypes);
        }
        return rrtypes;
      }
    };
    exports2.NSECRecord = NSECRecord;
  }
});

// node_modules/@homebridge/ciao/lib/coder/records/OPTRecord.js
var require_OPTRecord = __commonJS({
  "node_modules/@homebridge/ciao/lib/coder/records/OPTRecord.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.OPTRecord = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var assert_1 = tslib_1.__importDefault(require("assert"));
    var fast_deep_equal_1 = tslib_1.__importDefault(require_fast_deep_equal());
    var ResourceRecord_1 = require_ResourceRecord();
    var OPTRecord = class _OPTRecord extends ResourceRecord_1.ResourceRecord {
      constructor(udpPayloadSize, options, extendedRCode, flags, ednsVersion, ttl) {
        if (typeof udpPayloadSize === "number") {
          super(".", 41, ttl, false, udpPayloadSize);
          this.udpPayloadSize = udpPayloadSize;
        } else {
          (0, assert_1.default)(
            udpPayloadSize.type === 41
            /* RType.OPT */
          );
          super(udpPayloadSize);
          this.udpPayloadSize = udpPayloadSize.class;
        }
        this.extendedRCode = extendedRCode || 0;
        this.ednsVersion = ednsVersion || _OPTRecord.EDNS_VERSION;
        this.flags = {
          dnsSecOK: (flags === null || flags === void 0 ? void 0 : flags.dnsSecOK) || false,
          zero: (flags === null || flags === void 0 ? void 0 : flags.zero) || 0,
          ...flags
        };
        this.options = options || [];
      }
      getRDataEncodingLength() {
        let length = 0;
        for (const option of this.options) {
          length += 2 + 2 + option.data.length;
        }
        return length;
      }
      encodeRData(coder, buffer, offset) {
        const oldOffset = offset;
        const classOffset = offset - 8;
        const ttlOffset = offset - 6;
        buffer.writeUInt16BE(this.udpPayloadSize, classOffset);
        buffer.writeUInt8(this.extendedRCode, ttlOffset);
        buffer.writeUInt8(this.ednsVersion, ttlOffset + 1);
        let flags = this.flags.zero || 0;
        if (this.flags.dnsSecOK) {
          flags |= _OPTRecord.DNS_SEC_OK_MASK;
        }
        buffer.writeUInt16BE(flags, ttlOffset + 2);
        for (const option of this.options) {
          buffer.writeUInt16BE(option.code, offset);
          offset += 2;
          buffer.writeUInt16BE(option.data.length, offset);
          offset += 2;
          option.data.copy(buffer, offset);
          offset += option.data.length;
        }
        return offset - oldOffset;
      }
      static decodeData(coder, header, buffer, offset) {
        const oldOffset = offset;
        const classOffset = offset - 8;
        const ttlOffset = offset - 6;
        const udpPayloadSize = buffer.readUInt16BE(classOffset);
        const extendedRCode = buffer.readUInt8(ttlOffset);
        const ednsVersion = buffer.readUInt8(ttlOffset + 1);
        const flagsField = buffer.readUInt16BE(ttlOffset + 2);
        const flags = {
          dnsSecOK: !!(flagsField & _OPTRecord.DNS_SEC_OK_MASK),
          zero: flagsField & _OPTRecord.NOT_DNS_SEC_OK_MASK
        };
        const options = [];
        while (offset < buffer.length) {
          const code = buffer.readUInt16BE(offset);
          offset += 2;
          const length = buffer.readUInt16BE(offset);
          offset += 2;
          const data = buffer.subarray(offset, offset + length);
          offset += length;
          options.push({
            code,
            data
          });
        }
        header.class = udpPayloadSize;
        header.ttl = 4500;
        return {
          data: new _OPTRecord(header, options, extendedRCode, flags, ednsVersion),
          readBytes: offset - oldOffset
        };
      }
      clone() {
        return new _OPTRecord(this.getRecordRepresentation(), this.options, this.extendedRCode, this.flags, this.ednsVersion);
      }
      dataAsString() {
        return `${this.udpPayloadSize} ${this.extendedRCode} ${this.ednsVersion} ${JSON.stringify(this.flags)} [${this.options.map((opt) => `${opt.code} ${opt.data.toString("base64")}`).join(",")}]`;
      }
      dataEquals(record) {
        return this.udpPayloadSize === record.udpPayloadSize && this.extendedRCode === record.extendedRCode && this.ednsVersion === record.ednsVersion && _OPTRecord.optionsEquality(this.options, record.options) && (0, fast_deep_equal_1.default)(this.flags, record.flags);
      }
      static optionsEquality(a, b) {
        if (a.length !== b.length) {
          return false;
        }
        for (let i = 0; i < a.length; i++) {
          if (a[i].code !== b[i].code) {
            return false;
          } else if (Buffer.compare(a[i].data, b[i].data) !== 0) {
            return false;
          }
        }
        return true;
      }
    };
    exports2.OPTRecord = OPTRecord;
    OPTRecord.EDNS_VERSION = 0;
    OPTRecord.DNS_SEC_OK_MASK = 32768;
    OPTRecord.NOT_DNS_SEC_OK_MASK = 32767;
  }
});

// node_modules/@homebridge/ciao/lib/coder/records/PTRRecord.js
var require_PTRRecord = __commonJS({
  "node_modules/@homebridge/ciao/lib/coder/records/PTRRecord.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PTRRecord = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var assert_1 = tslib_1.__importDefault(require("assert"));
    var dns_equal_1 = require_dns_equal();
    var ResourceRecord_1 = require_ResourceRecord();
    var PTRRecord = class _PTRRecord extends ResourceRecord_1.ResourceRecord {
      constructor(name, ptrName, flushFlag, ttl) {
        if (typeof name === "string") {
          super(name, 12, ttl, flushFlag);
        } else {
          (0, assert_1.default)(
            name.type === 12
            /* RType.PTR */
          );
          super(name);
        }
        if (!ptrName.endsWith(".")) {
          ptrName += ".";
        }
        this.ptrName = ptrName;
      }
      getLowerCasedPTRName() {
        return this.lowerCasedPtrName || (this.lowerCasedPtrName = (0, dns_equal_1.dnsLowerCase)(this.ptrName));
      }
      getRDataEncodingLength(coder) {
        return coder.getNameLength(this.ptrName);
      }
      encodeRData(coder, buffer, offset) {
        const oldOffset = offset;
        const ptrNameLength = coder.encodeName(this.ptrName, offset);
        offset += ptrNameLength;
        return offset - oldOffset;
      }
      static decodeData(coder, header, buffer, offset) {
        const oldOffset = offset;
        const decodedName = coder.decodeName(offset);
        offset += decodedName.readBytes;
        return {
          data: new _PTRRecord(header, decodedName.data),
          readBytes: offset - oldOffset
        };
      }
      clone() {
        return new _PTRRecord(this.getRecordRepresentation(), this.ptrName);
      }
      dataAsString() {
        return this.ptrName;
      }
      dataEquals(record) {
        return this.getLowerCasedPTRName() === record.getLowerCasedPTRName();
      }
    };
    exports2.PTRRecord = PTRRecord;
    PTRRecord.DEFAULT_TTL = ResourceRecord_1.ResourceRecord.RR_DEFAULT_TTL;
  }
});

// node_modules/@homebridge/ciao/lib/coder/records/SRVRecord.js
var require_SRVRecord = __commonJS({
  "node_modules/@homebridge/ciao/lib/coder/records/SRVRecord.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SRVRecord = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var assert_1 = tslib_1.__importDefault(require("assert"));
    var dns_equal_1 = require_dns_equal();
    var ResourceRecord_1 = require_ResourceRecord();
    var SRVRecord = class _SRVRecord extends ResourceRecord_1.ResourceRecord {
      constructor(name, hostname, port, flushFlag, ttl) {
        if (typeof name === "string") {
          super(name, 33, ttl || _SRVRecord.RR_DEFAULT_TTL_SHORT, flushFlag);
        } else {
          (0, assert_1.default)(
            name.type === 33
            /* RType.SRV */
          );
          super(name);
        }
        if (!hostname.endsWith(".")) {
          this.hostname = hostname + ".";
        } else {
          this.hostname = hostname;
        }
        this.port = port;
        this.priority = 0;
        this.weight = 0;
      }
      getLowerCasedHostname() {
        return this.lowerCasedHostname || (this.lowerCasedHostname = (0, dns_equal_1.dnsLowerCase)(this.hostname));
      }
      getRDataEncodingLength(coder) {
        return 6 + (coder.legacyUnicastEncoding ? coder.getUncompressedNameLength(this.hostname) : coder.getNameLength(this.hostname));
      }
      encodeRData(coder, buffer, offset) {
        const oldOffset = offset;
        buffer.writeUInt16BE(this.priority, offset);
        offset += 2;
        buffer.writeUInt16BE(this.weight, offset);
        offset += 2;
        buffer.writeUInt16BE(this.port, offset);
        offset += 2;
        const hostnameLength = coder.legacyUnicastEncoding ? coder.encodeUncompressedName(this.hostname, offset) : coder.encodeName(this.hostname, offset);
        offset += hostnameLength;
        return offset - oldOffset;
      }
      static decodeData(coder, header, buffer, offset) {
        const oldOffset = offset;
        offset += 2;
        offset += 2;
        const port = buffer.readUInt16BE(offset);
        offset += 2;
        const decodedHostname = coder.decodeName(offset);
        offset += decodedHostname.readBytes;
        return {
          data: new _SRVRecord(header, decodedHostname.data, port),
          readBytes: offset - oldOffset
        };
      }
      clone() {
        return new _SRVRecord(this.getRecordRepresentation(), this.hostname, this.port);
      }
      dataAsString() {
        return `${this.hostname} ${this.port} ${this.priority} ${this.weight}`;
      }
      dataEquals(record) {
        return this.getLowerCasedHostname() === record.getLowerCasedHostname() && this.port === record.port && this.weight === record.weight && this.priority === record.priority;
      }
    };
    exports2.SRVRecord = SRVRecord;
    SRVRecord.DEFAULT_TTL = 120;
  }
});

// node_modules/@homebridge/ciao/lib/coder/records/TXTRecord.js
var require_TXTRecord = __commonJS({
  "node_modules/@homebridge/ciao/lib/coder/records/TXTRecord.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TXTRecord = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var assert_1 = tslib_1.__importDefault(require("assert"));
    var ResourceRecord_1 = require_ResourceRecord();
    var TXTRecord = class _TXTRecord extends ResourceRecord_1.ResourceRecord {
      constructor(name, txt, flushFlag, ttl) {
        if (typeof name === "string") {
          super(name, 16, ttl, flushFlag);
        } else {
          (0, assert_1.default)(
            name.type === 16
            /* RType.TXT */
          );
          super(name);
        }
        this.txt = txt.length === 0 ? [Buffer.from([])] : txt;
      }
      getRDataEncodingLength() {
        let length = 0;
        for (const buffer of this.txt) {
          length += 1 + buffer.length;
          (0, assert_1.default)(buffer.length <= 255, "One txt character-string can only have a length of 255 chars");
        }
        return length;
      }
      encodeRData(coder, buffer, offset) {
        const oldOffset = offset;
        for (const txt of this.txt) {
          buffer.writeUInt8(txt.length, offset++);
          txt.copy(buffer, offset);
          offset += txt.length;
        }
        return offset - oldOffset;
      }
      clone() {
        return new _TXTRecord(this.getRecordRepresentation(), this.txt);
      }
      dataAsString() {
        return `[${this.txt.map((line) => `${line.toString("base64")}`).join(",")}]`;
      }
      dataEquals(record) {
        if (this.txt.length !== record.txt.length) {
          return false;
        }
        for (let i = 0; i < this.txt.length; i++) {
          if (Buffer.compare(this.txt[i], record.txt[i]) !== 0) {
            return false;
          }
        }
        return true;
      }
      static decodeData(coder, header, buffer, offset) {
        const oldOffset = offset;
        const txtData = [];
        while (offset < buffer.length) {
          const length = buffer.readUInt8(offset++);
          txtData.push(buffer.subarray(offset, offset + length));
          offset += length;
        }
        return {
          data: new _TXTRecord(header, txtData),
          readBytes: offset - oldOffset
        };
      }
    };
    exports2.TXTRecord = TXTRecord;
    TXTRecord.DEFAULT_TTL = ResourceRecord_1.ResourceRecord.RR_DEFAULT_TTL;
  }
});

// node_modules/@homebridge/ciao/lib/coder/records/index.js
var require_records = __commonJS({
  "node_modules/@homebridge/ciao/lib/coder/records/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var ResourceRecord_1 = require_ResourceRecord();
    var AAAARecord_1 = require_AAAARecord();
    var ARecord_1 = require_ARecord();
    var CNAMERecord_1 = require_CNAMERecord();
    var NSECRecord_1 = require_NSECRecord();
    var OPTRecord_1 = require_OPTRecord();
    var PTRRecord_1 = require_PTRRecord();
    var SRVRecord_1 = require_SRVRecord();
    var TXTRecord_1 = require_TXTRecord();
    ResourceRecord_1.ResourceRecord.typeToRecordDecoder.set(28, AAAARecord_1.AAAARecord.decodeData);
    ResourceRecord_1.ResourceRecord.typeToRecordDecoder.set(1, ARecord_1.ARecord.decodeData);
    ResourceRecord_1.ResourceRecord.typeToRecordDecoder.set(5, CNAMERecord_1.CNAMERecord.decodeData);
    ResourceRecord_1.ResourceRecord.typeToRecordDecoder.set(47, NSECRecord_1.NSECRecord.decodeData);
    ResourceRecord_1.ResourceRecord.typeToRecordDecoder.set(12, PTRRecord_1.PTRRecord.decodeData);
    ResourceRecord_1.ResourceRecord.typeToRecordDecoder.set(33, SRVRecord_1.SRVRecord.decodeData);
    ResourceRecord_1.ResourceRecord.typeToRecordDecoder.set(41, OPTRecord_1.OPTRecord.decodeData);
    ResourceRecord_1.ResourceRecord.typeToRecordDecoder.set(16, TXTRecord_1.TXTRecord.decodeData);
  }
});

// node_modules/@homebridge/ciao/lib/NetworkManager.js
var require_NetworkManager = __commonJS({
  "node_modules/@homebridge/ciao/lib/NetworkManager.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NetworkManager = exports2.NetworkManagerEvent = exports2.WifiState = exports2.IPFamily = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var assert_1 = tslib_1.__importDefault(require("assert"));
    var child_process_1 = tslib_1.__importDefault(require("child_process"));
    var debug_1 = tslib_1.__importDefault(require_src());
    var events_1 = require("events");
    var fast_deep_equal_1 = tslib_1.__importDefault(require_fast_deep_equal());
    var net_1 = tslib_1.__importDefault(require("net"));
    var os_1 = tslib_1.__importDefault(require("os"));
    var domain_formatter_1 = require_domain_formatter();
    var debug = (0, debug_1.default)("ciao:NetworkManager");
    var IPFamily;
    (function(IPFamily2) {
      IPFamily2["IPv4"] = "IPv4";
      IPFamily2["IPv6"] = "IPv6";
    })(IPFamily || (exports2.IPFamily = IPFamily = {}));
    var WifiState;
    (function(WifiState2) {
      WifiState2[WifiState2["UNDEFINED"] = 0] = "UNDEFINED";
      WifiState2[WifiState2["NOT_A_WIFI_INTERFACE"] = 1] = "NOT_A_WIFI_INTERFACE";
      WifiState2[WifiState2["NOT_ASSOCIATED"] = 2] = "NOT_ASSOCIATED";
      WifiState2[WifiState2["CONNECTED"] = 3] = "CONNECTED";
    })(WifiState || (exports2.WifiState = WifiState = {}));
    var NetworkManagerEvent;
    (function(NetworkManagerEvent2) {
      NetworkManagerEvent2["NETWORK_UPDATE"] = "network-update";
    })(NetworkManagerEvent || (exports2.NetworkManagerEvent = NetworkManagerEvent = {}));
    var NetworkManager = class _NetworkManager extends events_1.EventEmitter {
      constructor(options) {
        super();
        this.currentInterfaces = /* @__PURE__ */ new Map();
        this.loopbackInterfaces = /* @__PURE__ */ new Map();
        this.setMaxListeners(100);
        if (options && options.interface) {
          let interfaces;
          if (typeof options.interface === "string") {
            interfaces = [options.interface];
          } else if (Array.isArray(options.interface)) {
            interfaces = options.interface;
          } else {
            throw new Error("Found invalid type for 'interfaces' NetworkManager option!");
          }
          const restrictedInterfaces = [];
          for (const iface of interfaces) {
            if (net_1.default.isIP(iface)) {
              const interfaceName = _NetworkManager.resolveInterface(iface);
              if (interfaceName) {
                restrictedInterfaces.push(interfaceName);
              } else {
                console.log("CIAO: Interface was specified as ip (%s), though couldn't find a matching interface for the given address.", options.interface);
              }
            } else {
              restrictedInterfaces.push(iface);
            }
          }
          if (restrictedInterfaces.length === 0) {
            console.log("CIAO: 'restrictedInterfaces' array was empty. Going to fallback to bind on all available interfaces.");
          } else {
            this.restrictedInterfaces = restrictedInterfaces;
          }
        }
        this.excludeIpv6 = !!(options && options.excludeIpv6);
        this.excludeIpv6Only = this.excludeIpv6 || !!(options && options.excludeIpv6Only);
        if (options) {
          debug("Created NetworkManager with options: %s", JSON.stringify(options));
        }
        this.initPromise = new Promise((resolve) => {
          this.getCurrentNetworkInterfaces().then((map) => {
            this.currentInterfaces = map;
            const otherInterfaces = Object.keys(os_1.default.networkInterfaces());
            const interfaceNames = [];
            for (const name of this.currentInterfaces.keys()) {
              interfaceNames.push(name);
              const index = otherInterfaces.indexOf(name);
              if (index !== -1) {
                otherInterfaces.splice(index, 1);
              }
            }
            debug("Initial networks [%s] ignoring [%s]", interfaceNames.join(", "), otherInterfaces.join(", "));
            this.initPromise = void 0;
            resolve();
            this.scheduleNextJob();
          });
        });
      }
      async waitForInit() {
        if (this.initPromise) {
          await this.initPromise;
        }
      }
      shutdown() {
        if (this.currentTimer) {
          clearTimeout(this.currentTimer);
          this.currentTimer = void 0;
        }
        this.removeAllListeners();
      }
      getInterfaceMap() {
        if (this.initPromise) {
          assert_1.default.fail("Not yet initialized!");
        }
        return this.currentInterfaces;
      }
      getInterface(name) {
        if (this.initPromise) {
          assert_1.default.fail("Not yet initialized!");
        }
        return this.currentInterfaces.get(name);
      }
      isLoopbackNetaddressV4(netaddress) {
        for (const networkInterface of this.loopbackInterfaces.values()) {
          if (networkInterface.ipv4Netaddress === netaddress) {
            return true;
          }
        }
        return false;
      }
      scheduleNextJob() {
        this.currentTimer = setTimeout(this.checkForNewInterfaces.bind(this), _NetworkManager.POLLING_TIME);
        this.currentTimer.unref();
      }
      async checkForNewInterfaces() {
        const latestInterfaces = await this.getCurrentNetworkInterfaces();
        if (!this.currentTimer) {
          return;
        }
        let added = void 0;
        let removed = void 0;
        let changes = void 0;
        for (const [name, networkInterface] of latestInterfaces) {
          const currentInterface = this.currentInterfaces.get(name);
          if (currentInterface) {
            if (!(0, fast_deep_equal_1.default)(currentInterface, networkInterface)) {
              const change = {
                name
              };
              if (currentInterface.ipv4 !== networkInterface.ipv4) {
                if (currentInterface.ipv4) {
                  change.outdatedIpv4 = currentInterface.ipv4;
                }
                if (networkInterface.ipv4) {
                  change.updatedIpv4 = networkInterface.ipv4;
                }
              }
              if (currentInterface.ipv6 !== networkInterface.ipv6) {
                if (currentInterface.ipv6) {
                  change.outdatedIpv6 = currentInterface.ipv6;
                }
                if (networkInterface.ipv6) {
                  change.updatedIpv6 = networkInterface.ipv6;
                }
              }
              if (currentInterface.globallyRoutableIpv6 !== networkInterface.globallyRoutableIpv6) {
                if (currentInterface.globallyRoutableIpv6) {
                  change.outdatedGloballyRoutableIpv6 = currentInterface.globallyRoutableIpv6;
                }
                if (networkInterface.globallyRoutableIpv6) {
                  change.updatedGloballyRoutableIpv6 = networkInterface.globallyRoutableIpv6;
                }
              }
              if (currentInterface.uniqueLocalIpv6 !== networkInterface.uniqueLocalIpv6) {
                if (currentInterface.uniqueLocalIpv6) {
                  change.outdatedUniqueLocalIpv6 = currentInterface.uniqueLocalIpv6;
                }
                if (networkInterface.uniqueLocalIpv6) {
                  change.updatedUniqueLocalIpv6 = networkInterface.uniqueLocalIpv6;
                }
              }
              this.currentInterfaces.set(name, networkInterface);
              if (networkInterface.loopback) {
                this.loopbackInterfaces.set(name, networkInterface);
              }
              (changes !== null && changes !== void 0 ? changes : changes = []).push(change);
            }
          } else {
            this.currentInterfaces.set(name, networkInterface);
            if (networkInterface.loopback) {
              this.loopbackInterfaces.set(name, networkInterface);
            }
            (added !== null && added !== void 0 ? added : added = []).push(networkInterface);
          }
        }
        if (this.currentInterfaces.size !== latestInterfaces.size) {
          for (const [name, networkInterface] of this.currentInterfaces) {
            if (!latestInterfaces.has(name)) {
              this.currentInterfaces.delete(name);
              this.loopbackInterfaces.delete(name);
              (removed !== null && removed !== void 0 ? removed : removed = []).push(networkInterface);
            }
          }
        }
        if (added || removed || changes) {
          const addedString = added ? added.map((iface) => iface.name).join(",") : "";
          const removedString = removed ? removed.map((iface) => iface.name).join(",") : "";
          const changesString = changes ? changes.map((iface) => {
            let string = `{ name: ${iface.name} `;
            if (iface.outdatedIpv4 || iface.updatedIpv4) {
              string += `, ${iface.outdatedIpv4} -> ${iface.updatedIpv4} `;
            }
            if (iface.outdatedIpv6 || iface.updatedIpv6) {
              string += `, ${iface.outdatedIpv6} -> ${iface.updatedIpv6} `;
            }
            if (iface.outdatedGloballyRoutableIpv6 || iface.updatedGloballyRoutableIpv6) {
              string += `, ${iface.outdatedGloballyRoutableIpv6} -> ${iface.updatedGloballyRoutableIpv6} `;
            }
            if (iface.outdatedUniqueLocalIpv6 || iface.updatedUniqueLocalIpv6) {
              string += `, ${iface.outdatedUniqueLocalIpv6} -> ${iface.updatedUniqueLocalIpv6} `;
            }
            return string + "}";
          }).join(",") : "";
          debug("Detected network changes: added: [%s], removed: [%s], changes: [%s]!", addedString, removedString, changesString);
          this.emit("network-update", {
            added,
            removed,
            changes
          });
        }
        this.scheduleNextJob();
      }
      async getCurrentNetworkInterfaces() {
        let names;
        if (this.restrictedInterfaces) {
          names = this.restrictedInterfaces;
          const loopback = _NetworkManager.getLoopbackInterface();
          if (!names.includes(loopback)) {
            names.push(loopback);
          }
        } else {
          try {
            names = await _NetworkManager.getNetworkInterfaceNames();
          } catch (error) {
            debug(`WARNING Detecting network interfaces for platform '${os_1.default.platform()}' failed. Trying to assume network interfaces! (${error.message})`);
            names = _NetworkManager.assumeNetworkInterfaceNames();
          }
        }
        const interfaces = /* @__PURE__ */ new Map();
        const networkInterfaces = os_1.default.networkInterfaces();
        for (const name of names) {
          const infos = networkInterfaces[name];
          if (!infos) {
            continue;
          }
          let ipv4Info = void 0;
          let ipv6Info = void 0;
          let routableIpv6Info = void 0;
          let uniqueLocalIpv6Info = void 0;
          let internal = false;
          for (const info of infos) {
            if (info.internal) {
              internal = true;
            }
            if ((info.family === "IPv4" || info.family === 4) && !ipv4Info) {
              ipv4Info = info;
            } else if (info.family === "IPv6" || info.family === 6) {
              if (this.excludeIpv6) {
                continue;
              }
              if (info.scopeid && !ipv6Info) {
                ipv6Info = info;
              } else if (info.scopeid === 0) {
                if (info.address.startsWith("fc") || info.address.startsWith("fd")) {
                  if (!uniqueLocalIpv6Info) {
                    uniqueLocalIpv6Info = info;
                  }
                } else if (!routableIpv6Info) {
                  routableIpv6Info = info;
                }
              }
            }
            if (ipv4Info && ipv6Info && routableIpv6Info && uniqueLocalIpv6Info) {
              break;
            }
          }
          if (!ipv4Info && !ipv6Info) {
            debug("Skipping interface '%s': no usable IPv4 or IPv6 address", name);
            continue;
          }
          if (this.excludeIpv6Only && !ipv4Info) {
            continue;
          }
          const networkInterface = {
            name,
            loopback: internal,
            mac: (ipv4Info === null || ipv4Info === void 0 ? void 0 : ipv4Info.mac) || (ipv6Info === null || ipv6Info === void 0 ? void 0 : ipv6Info.mac)
          };
          if (ipv4Info) {
            networkInterface.ipv4 = ipv4Info.address;
            networkInterface.ip4Netmask = ipv4Info.netmask;
            networkInterface.ipv4Netaddress = (0, domain_formatter_1.getNetAddress)(ipv4Info.address, ipv4Info.netmask);
          }
          if (ipv6Info) {
            networkInterface.ipv6 = ipv6Info.address;
            networkInterface.ipv6Netmask = ipv6Info.netmask;
          }
          if (routableIpv6Info) {
            networkInterface.globallyRoutableIpv6 = routableIpv6Info.address;
            networkInterface.globallyRoutableIpv6Netmask = routableIpv6Info.netmask;
          }
          if (uniqueLocalIpv6Info) {
            networkInterface.uniqueLocalIpv6 = uniqueLocalIpv6Info.address;
            networkInterface.uniqueLocalIpv6Netmask = uniqueLocalIpv6Info.netmask;
          }
          interfaces.set(name, networkInterface);
        }
        return interfaces;
      }
      static resolveInterface(address) {
        let interfaceName;
        outer: for (const [name, infoArray] of Object.entries(os_1.default.networkInterfaces())) {
          for (const info of infoArray !== null && infoArray !== void 0 ? infoArray : []) {
            if (info.address === address) {
              interfaceName = name;
              break outer;
            }
          }
        }
        return interfaceName;
      }
      static async getNetworkInterfaceNames() {
        let promise;
        switch (os_1.default.platform()) {
          case "win32":
            promise = _NetworkManager.getWindowsNetworkInterfaces();
            break;
          case "linux": {
            promise = _NetworkManager.getLinuxNetworkInterfaces();
            break;
          }
          case "darwin":
            promise = _NetworkManager.getDarwinNetworkInterfaces();
            break;
          case "freebsd": {
            promise = _NetworkManager.getFreeBSDNetworkInterfaces();
            break;
          }
          case "openbsd":
          case "sunos": {
            promise = _NetworkManager.getOpenBSD_SUNOS_NetworkInterfaces();
            break;
          }
          default:
            debug("Found unsupported platform %s", os_1.default.platform());
            return Promise.reject(new Error("unsupported platform!"));
        }
        let names;
        try {
          names = await promise;
        } catch (error) {
          if (error.message !== _NetworkManager.NOTHING_FOUND_MESSAGE) {
            throw error;
          }
          names = [];
        }
        const loopback = _NetworkManager.getLoopbackInterface();
        if (!names.includes(loopback)) {
          names.unshift(loopback);
        }
        return promise;
      }
      static assumeNetworkInterfaceNames() {
        const names = [];
        Object.entries(os_1.default.networkInterfaces()).forEach(([name, infos]) => {
          for (const info of infos !== null && infos !== void 0 ? infos : []) {
            if (info.internal || (info.family === "IPv4" || info.family === 4) || (info.family === "IPv6" || info.family === 6) && info.scopeid === 0) {
              if (!names.includes(name)) {
                names.push(name);
              }
              break;
            }
          }
        });
        return names;
      }
      static getLoopbackInterface() {
        for (const [name, infos] of Object.entries(os_1.default.networkInterfaces())) {
          for (const info of infos !== null && infos !== void 0 ? infos : []) {
            if (info.internal) {
              return name;
            }
          }
        }
        throw new Error("Could not detect loopback interface!");
      }
      static getWindowsNetworkInterfaces() {
        return new Promise((resolve, reject) => {
          child_process_1.default.exec('arp -a | findstr /C:"---"', { windowsHide: true }, (error, stdout) => {
            if (error) {
              reject(error);
              return;
            }
            const lines = stdout.split(os_1.default.EOL);
            const addresses = [];
            for (let i = 0; i < lines.length - 1; i++) {
              const line = lines[i].trim().split(" ");
              if (line[line.length - 3]) {
                addresses.push(line[line.length - 3]);
              } else {
                debug(`WINDOWS: Failed to read interface name from line ${i}: '${lines[i]}'`);
              }
            }
            const names = [];
            for (const address of addresses) {
              const name = _NetworkManager.resolveInterface(address);
              if (name) {
                if (!names.includes(name)) {
                  names.push(name);
                }
              } else {
                debug(`WINDOWS: Couldn't resolve to an interface name from '${address}'`);
              }
            }
            if (names.length) {
              resolve(names);
            } else {
              reject(new Error(_NetworkManager.NOTHING_FOUND_MESSAGE));
            }
          });
        });
      }
      static getDarwinNetworkInterfaces() {
        return new Promise((resolve, reject) => {
          child_process_1.default.exec("arp -a -n -l", { windowsHide: true }, async (error, stdout) => {
            if (error) {
              reject(error);
              return;
            }
            const lines = stdout.split(os_1.default.EOL);
            const names = [];
            for (let i = 1; i < lines.length - 1; i++) {
              const interfaceName = lines[i].trim().split(_NetworkManager.SPACE_PATTERN)[4];
              if (!interfaceName) {
                debug(`DARWIN: Failed to read interface name from line ${i}: '${lines[i]}'`);
                continue;
              }
              if (!names.includes(interfaceName)) {
                names.push(interfaceName);
              }
            }
            const promises = [];
            for (const name of names) {
              const promise = _NetworkManager.getDarwinWifiNetworkState(name).then((state) => {
                if (state !== 1 && state !== 3) {
                  const index = names.indexOf(name);
                  if (index !== -1) {
                    names.splice(index, 1);
                  }
                }
              });
              promises.push(promise);
            }
            await Promise.all(promises);
            if (names.length) {
              resolve(names);
            } else {
              reject(new Error(_NetworkManager.NOTHING_FOUND_MESSAGE));
            }
          });
        });
      }
      static getLinuxNetworkInterfaces() {
        return new Promise((resolve, reject) => {
          child_process_1.default.exec("ip -o link show", { windowsHide: true }, (error, stdout) => {
            if (error) {
              if (error.message.includes("ip: not found")) {
                debug("LINUX: ip was not found on the system. Falling back to assuming network interfaces!");
                resolve(_NetworkManager.assumeNetworkInterfaceNames());
                return;
              }
              reject(error);
              return;
            }
            const lines = stdout.split(os_1.default.EOL);
            const names = [];
            for (let i = 0; i < lines.length - 1; i++) {
              const parts = lines[i].trim().split(_NetworkManager.SPACE_PATTERN);
              if (parts.length < 3 || !parts[1] || !parts[2]) {
                debug(`LINUX: Failed to parse interface from line ${i}: '${lines[i]}'`);
                continue;
              }
              const interfaceName = parts[1].replace(/:$/, "");
              if (!interfaceName) {
                debug(`LINUX: Failed to read interface name from line ${i}: '${lines[i]}'`);
                continue;
              }
              if (parts[2].includes("LOOPBACK")) {
                continue;
              }
              if (!names.includes(interfaceName)) {
                names.push(interfaceName);
              }
            }
            if (names.length) {
              resolve(names);
            } else {
              reject(new Error(_NetworkManager.NOTHING_FOUND_MESSAGE));
            }
          });
        });
      }
      static getFreeBSDNetworkInterfaces() {
        return new Promise((resolve, reject) => {
          child_process_1.default.exec("arp -a -n", { windowsHide: true }, (error, stdout) => {
            if (error) {
              reject(error);
              return;
            }
            const lines = stdout.split(os_1.default.EOL);
            const names = [];
            for (let i = 0; i < lines.length - 1; i++) {
              const interfaceName = lines[i].trim().split(_NetworkManager.SPACE_PATTERN)[5];
              if (!interfaceName) {
                debug(`FreeBSD: Failed to read interface name from line ${i}: '${lines[i]}'`);
                continue;
              }
              if (!names.includes(interfaceName)) {
                names.push(interfaceName);
              }
            }
            if (names.length) {
              resolve(names);
            } else {
              reject(new Error(_NetworkManager.NOTHING_FOUND_MESSAGE));
            }
          });
        });
      }
      static getOpenBSD_SUNOS_NetworkInterfaces() {
        return new Promise((resolve, reject) => {
          child_process_1.default.exec("arp -a -n", { windowsHide: true }, (error, stdout) => {
            if (error) {
              reject(error);
              return;
            }
            const interfaceArrayOffset = os_1.default.platform() === "sunos" ? 0 : 2;
            const lines = stdout.split(os_1.default.EOL);
            const names = [];
            for (let i = 1; i < lines.length - 1; i++) {
              const interfaceName = lines[i].trim().split(_NetworkManager.SPACE_PATTERN)[interfaceArrayOffset];
              if (!interfaceName) {
                debug(`${os_1.default.platform()}: Failed to read interface name from line ${i}: '${lines[i]}'`);
                continue;
              }
              if (!names.includes(interfaceName)) {
                names.push(interfaceName);
              }
            }
            if (names.length) {
              resolve(names);
            } else {
              reject(new Error(_NetworkManager.NOTHING_FOUND_MESSAGE));
            }
          });
        });
      }
      static getDarwinWifiNetworkState(name) {
        return new Promise((resolve) => {
          child_process_1.default.exec("networksetup -getairportnetwork " + name, { windowsHide: true }, (error, stdout) => {
            if (error) {
              if (stdout.includes("not a Wi-Fi interface")) {
                resolve(
                  1
                  /* WifiState.NOT_A_WIFI_INTERFACE */
                );
                return;
              }
              console.log(`CIAO WARN: While checking networksetup for ${name} encountered an error (${error.message}) with output: ${stdout.replace(os_1.default.EOL, "; ")}`);
              resolve(
                0
                /* WifiState.UNDEFINED */
              );
              return;
            }
            let wifiState = 0;
            if (stdout.includes("not a Wi-Fi interface")) {
              wifiState = 1;
            } else if (stdout.includes("Current Wi-Fi Network")) {
              wifiState = 3;
            } else if (stdout.includes("not associated")) {
              wifiState = 2;
            } else if (stdout.includes("All Wi-Fi network services are disabled")) {
              wifiState = 1;
            } else {
              console.log(`CIAO WARN: While checking networksetup for ${name} encountered an unknown output: ${stdout.replace(os_1.default.EOL, "; ")}`);
            }
            resolve(wifiState);
          });
        });
      }
    };
    exports2.NetworkManager = NetworkManager;
    NetworkManager.SPACE_PATTERN = /\s+/g;
    NetworkManager.NOTHING_FOUND_MESSAGE = "no interfaces found";
    NetworkManager.POLLING_TIME = 15 * 1e3;
  }
});

// node_modules/@homebridge/ciao/lib/CiaoService.js
var require_CiaoService = __commonJS({
  "node_modules/@homebridge/ciao/lib/CiaoService.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CiaoService = exports2.InternalServiceEvent = exports2.ServiceEvent = exports2.ServiceState = exports2.ServiceType = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var assert_1 = tslib_1.__importDefault(require("assert"));
    var debug_1 = tslib_1.__importDefault(require_src());
    var events_1 = require("events");
    var net_1 = tslib_1.__importDefault(require("net"));
    var AAAARecord_1 = require_AAAARecord();
    var ARecord_1 = require_ARecord();
    var NSECRecord_1 = require_NSECRecord();
    var PTRRecord_1 = require_PTRRecord();
    var SRVRecord_1 = require_SRVRecord();
    var TXTRecord_1 = require_TXTRecord();
    var ResourceRecord_1 = require_ResourceRecord();
    var index_1 = require_lib();
    var NetworkManager_1 = require_NetworkManager();
    var dns_equal_1 = require_dns_equal();
    var domainFormatter = tslib_1.__importStar(require_domain_formatter());
    var domain_formatter_1 = require_domain_formatter();
    var debug = (0, debug_1.default)("ciao:CiaoService");
    var numberedServiceNamePattern = /^(.*) \((\d+)\)$/;
    var numberedHostnamePattern = /^(.*)-\((\d+)\)(\.\w{2,}.)$/;
    var ServiceType;
    (function(ServiceType2) {
      ServiceType2["AIRDROP"] = "airdrop";
      ServiceType2["AIRPLAY"] = "airplay";
      ServiceType2["AIRPORT"] = "airport";
      ServiceType2["COMPANION_LINK"] = "companion-link";
      ServiceType2["DACP"] = "dacp";
      ServiceType2["HAP"] = "hap";
      ServiceType2["HOMEKIT"] = "homekit";
      ServiceType2["HTTP"] = "http";
      ServiceType2["HTTP_ALT"] = "http_alt";
      ServiceType2["IPP"] = "ipp";
      ServiceType2["IPPS"] = "ipps";
      ServiceType2["RAOP"] = "raop";
      ServiceType2["scanner"] = "scanner";
      ServiceType2["TOUCH_ABLE"] = "touch-able";
      ServiceType2["DNS_SD"] = "dns-sd";
      ServiceType2["PRINTER"] = "printer";
    })(ServiceType || (exports2.ServiceType = ServiceType = {}));
    var ServiceState;
    (function(ServiceState2) {
      ServiceState2["UNANNOUNCED"] = "unannounced";
      ServiceState2["PROBING"] = "probing";
      ServiceState2["PROBED"] = "probed";
      ServiceState2["ANNOUNCING"] = "announcing";
      ServiceState2["ANNOUNCED"] = "announced";
    })(ServiceState || (exports2.ServiceState = ServiceState = {}));
    var ServiceEvent;
    (function(ServiceEvent2) {
      ServiceEvent2["NAME_CHANGED"] = "name-change";
      ServiceEvent2["HOSTNAME_CHANGED"] = "hostname-change";
    })(ServiceEvent || (exports2.ServiceEvent = ServiceEvent = {}));
    var InternalServiceEvent;
    (function(InternalServiceEvent2) {
      InternalServiceEvent2["PUBLISH"] = "publish";
      InternalServiceEvent2["UNPUBLISH"] = "unpublish";
      InternalServiceEvent2["REPUBLISH"] = "republish";
      InternalServiceEvent2["RECORD_UPDATE"] = "records-update";
      InternalServiceEvent2["RECORD_UPDATE_ON_INTERFACE"] = "records-update-interface";
    })(InternalServiceEvent || (exports2.InternalServiceEvent = InternalServiceEvent = {}));
    var CiaoService = class _CiaoService extends events_1.EventEmitter {
      /**
       * Constructs a new service. Please use {@link Responder.createService} to create new service.
       * When calling the constructor a callee must listen to certain events in order to provide
       * correct functionality.
       * @private used by the Responder instance to create a new service
       */
      constructor(networkManager, options) {
        super();
        this.serviceState = "unannounced";
        this.destroyed = false;
        (0, assert_1.default)(networkManager, "networkManager is required");
        (0, assert_1.default)(options, "parameters options is required");
        (0, assert_1.default)(options.name, "service options parameter 'name' is required");
        (0, assert_1.default)(options.type, "service options parameter 'type' is required");
        (0, assert_1.default)(options.type.length <= 15, "service options parameter 'type' must not be longer than 15 characters");
        this.networkManager = networkManager;
        this.name = options.name;
        this.type = options.type;
        this.subTypes = options.subtypes;
        this.protocol = options.protocol || "tcp";
        this.serviceDomain = options.domain || "local";
        this.fqdn = this.formatFQDN();
        this.loweredFqdn = (0, dns_equal_1.dnsLowerCase)(this.fqdn);
        this.typePTR = domainFormatter.stringify({
          type: this.type,
          protocol: this.protocol,
          domain: this.serviceDomain
        });
        this.loweredTypePTR = (0, dns_equal_1.dnsLowerCase)(this.typePTR);
        if (this.subTypes) {
          this.subTypePTRs = this.subTypes.map((subtype) => domainFormatter.stringify({
            subtype,
            type: this.type,
            protocol: this.protocol,
            domain: this.serviceDomain
          })).map(dns_equal_1.dnsLowerCase);
        }
        this.hostname = domainFormatter.formatHostname(options.hostname || this.name, this.serviceDomain).replace(/ /g, "-");
        this.loweredHostname = (0, dns_equal_1.dnsLowerCase)(this.hostname);
        this.port = options.port;
        if (options.restrictedAddresses) {
          (0, assert_1.default)(options.restrictedAddresses.length, "The service property 'restrictedAddresses' cannot be an empty array!");
          this.restrictedAddresses = /* @__PURE__ */ new Map();
          for (const entry of options.restrictedAddresses) {
            if (net_1.default.isIP(entry)) {
              if (entry === "0.0.0.0" || entry === "::") {
                throw new Error(`[${this.fqdn}] Unspecified ip address (${entry}) cannot be used to restrict on to!`);
              }
              const interfaceName = NetworkManager_1.NetworkManager.resolveInterface(entry);
              if (!interfaceName) {
                throw new Error(`[${this.fqdn}] Could not restrict service to address ${entry} as we could not resolve it to an interface name!`);
              }
              const current = this.restrictedAddresses.get(interfaceName);
              if (current) {
                if (current.length && !current.includes(entry)) {
                  current.push(entry);
                }
              } else {
                this.restrictedAddresses.set(interfaceName, [entry]);
              }
            } else {
              this.restrictedAddresses.set(entry, []);
            }
          }
        }
        this.disableIpv6 = options.disabledIpv6;
        this.txt = options.txt ? _CiaoService.txtBuffersFromRecord(options.txt) : [];
        this.incrementName(true);
      }
      /**
       * This method start the advertising process of the service:
       *  - The service name (and hostname) will be probed unique on all interfaces (as defined in RFC 6762 8.1).
       *  - Once probed unique the service will be announced (as defined in RFC 6762 8.3).
       *
       *  The returned promise resolves once the last announcement packet was successfully sent on all network interfaces.
       *  The promise might be rejected caused by one of the following reasons:
       *    - A probe query could not be sent successfully
       *    - Prober could not find a unique service name while trying for a minute (timeout)
       *    - One of the announcement packets could not be sent successfully
       */
      advertise() {
        (0, assert_1.default)(!this.destroyed, "Cannot publish destroyed service!");
        (0, assert_1.default)(this.port, "Service port must be defined before advertising the service on the network!");
        if (this.listeners(
          "name-change"
          /* ServiceEvent.NAME_CHANGED */
        ).length === 0) {
          debug("[%s] WARN: No listeners found for a potential name change on the 'name-change' event!", this.name);
        }
        return new Promise((resolve, reject) => {
          this.emit("publish", (error) => error ? reject(error) : resolve());
        });
      }
      /**
       * This method will remove the advertisement for the service on all connected network interfaces.
       * If the service is still in the Probing state, probing will simply be cancelled.
       *
       * @returns Promise will resolve once the last goodbye packet was sent out
       */
      end() {
        (0, assert_1.default)(!this.destroyed, "Cannot end destroyed service!");
        if (this.serviceState === "unannounced") {
          return Promise.resolve();
        }
        return new Promise((resolve, reject) => {
          this.emit("unpublish", (error) => error ? reject(error) : resolve());
        });
      }
      /**
       * This method must be called if you want to free the memory used by this service.
       * The service instance is not usable anymore after this call.
       *
       * If the service is still announced, the service will first be removed
       * from the network by calling {@link end}.
       *
       * @returns
       */
      async destroy() {
        const endPromise = this.end();
        this.destroyed = true;
        try {
          await endPromise;
        } catch (error) {
          this.destroyed = false;
          throw error;
        }
        this.removeAllListeners();
      }
      /**
       * Internal lifecycle query used by {@link Responder} to avoid directly reading private state.
       * @private
       */
      isDestroyed() {
        return this.destroyed;
      }
      /**
       * @returns The fully qualified domain name of the service, used to identify the service.
       */
      getFQDN() {
        return this.fqdn;
      }
      /**
       * @returns The service type pointer.
       */
      getTypePTR() {
        return this.typePTR;
      }
      /**
       * @returns Array of subtype pointers (undefined if no subtypes are specified).
       */
      getLowerCasedSubtypePTRs() {
        return this.subTypePTRs;
      }
      /**
       * @returns The current hostname of the service.
       */
      getHostname() {
        return this.hostname;
      }
      /**
       * @returns The port the service is advertising for.
       * {@code -1} is returned when the port is not yet set.
       */
      getPort() {
        return this.port || -1;
      }
      /**
       * @returns The current TXT of the service represented as Buffer array.
       * @private There is not need for this to be public API
       */
      getTXT() {
        return this.txt;
      }
      /**
       * @private used for internal comparison {@link dnsLowerCase}
       */
      getLowerCasedFQDN() {
        return this.loweredFqdn;
      }
      /**
       * @private used for internal comparison {@link dnsLowerCase}
       */
      getLowerCasedTypePTR() {
        return this.loweredTypePTR;
      }
      /**
       * @private used for internal comparison {@link dnsLowerCase}
       */
      getLowerCasedHostname() {
        return this.loweredHostname;
      }
      /**
       * Sets or updates the txt of the service.
       *
       * @param {ServiceTxt} txt - The updated txt record.
       * @param {boolean} silent - If set to true no announcement is sent for the updated record.
       */
      updateTxt(txt, silent = false) {
        (0, assert_1.default)(!this.destroyed, "Cannot update destroyed service!");
        (0, assert_1.default)(txt, "txt cannot be undefined");
        this.txt = _CiaoService.txtBuffersFromRecord(txt);
        debug("[%s] Updating txt record%s...", this.name, silent ? " silently" : "");
        if (this.serviceState === "announcing") {
          this.rebuildServiceRecords();
          if (silent) {
            return;
          }
          if (this.currentAnnouncer.hasSentLastAnnouncement()) {
            this.currentAnnouncer.awaitAnnouncement().then(() => {
              this.queueTxtUpdate();
            });
          }
        } else if (this.serviceState === "announced") {
          this.rebuildServiceRecords();
          if (silent) {
            return;
          }
          this.queueTxtUpdate();
        }
      }
      queueTxtUpdate() {
        if (this.txtTimer) {
          return;
        } else {
          this.txtTimer = setTimeout(() => {
            this.txtTimer = void 0;
            if (this.serviceState !== "announced") {
              return;
            }
            this.emit("records-update", {
              answers: [this.txtRecord()],
              additionals: [this.serviceNSECRecord()]
            });
          }, 50);
          this.txtTimer.unref();
        }
      }
      /**
       * Sets or updates the port of the service.
       * A new port number can only be set when the service is still UNANNOUNCED.
       * Otherwise, an assertion error will be thrown.
       *
       * @param {number} port - The new port number.
       */
      updatePort(port) {
        (0, assert_1.default)(this.serviceState === "unannounced", "Port number cannot be changed when service is already advertised!");
        this.port = port;
      }
      /**
       * This method updates the name of the service.
       * @param name - The new service name.
       * @private Currently not public API and only used for bonjour conformance testing.
       */
      updateName(name) {
        if (this.serviceState === "unannounced") {
          this.name = name;
          this.fqdn = this.formatFQDN();
          this.loweredFqdn = (0, dns_equal_1.dnsLowerCase)(this.fqdn);
          return Promise.resolve();
        } else {
          return this.end().then(() => {
            this.name = name;
            this.fqdn = this.formatFQDN();
            this.loweredFqdn = (0, dns_equal_1.dnsLowerCase)(this.fqdn);
            return this.advertise();
          });
        }
      }
      static txtBuffersFromRecord(txt) {
        const result = [];
        Object.entries(txt).forEach(([key, value]) => {
          const entry = key + "=" + value;
          result.push(Buffer.from(entry));
        });
        return result;
      }
      /**
       * @param networkUpdate
       * @private
       */
      handleNetworkInterfaceUpdate(networkUpdate) {
        (0, assert_1.default)(!this.destroyed, "Cannot update network of destroyed service!");
        if (this.serviceState !== "announced") {
          if (this.serviceState === "announcing") {
            this.rebuildServiceRecords();
            if (this.currentAnnouncer.hasSentLastAnnouncement()) {
              this.currentAnnouncer.awaitAnnouncement().then(() => {
                this.handleNetworkInterfaceUpdate(networkUpdate);
              });
            }
          }
          return;
        }
        this.rebuildServiceRecords();
        if (networkUpdate.added || networkUpdate.changes) {
          this.emit("republish", (error) => {
            if (error) {
              console.log("FATAL Error occurred trying to re-announce service " + this.fqdn + "! We can't recover from this!");
              console.log(error.stack);
              process.exit(1);
            }
          });
        }
      }
      /**
       * This method is called by the Prober when encountering a conflict on the network.
       * It advises the service to change its name, like incrementing a number appended to the name.
       * So "My Service" will become "My Service (2)", and "My Service (2)" would become "My Service (3)"
       * @private must only be called by the {@link Prober}
       */
      incrementName(nameCheckOnly) {
        if (this.serviceState !== "unannounced") {
          throw new Error("Service name can only be incremented when in state UNANNOUNCED!");
        }
        const oldName = this.name;
        const oldHostname = this.hostname;
        let nameBase;
        let nameNumber;
        let hostnameBase;
        let hostnameTLD;
        let hostnameNumber;
        const nameMatcher = this.name.match(numberedServiceNamePattern);
        if (nameMatcher) {
          nameBase = nameMatcher[1];
          nameNumber = parseInt(nameMatcher[2]);
          (0, assert_1.default)(nameNumber, `Failed to extract name number from ${this.name}. Resulted in ${nameNumber}`);
        } else {
          nameBase = this.name;
          nameNumber = 1;
        }
        const hostnameMatcher = this.hostname.match(numberedHostnamePattern);
        if (hostnameMatcher) {
          hostnameBase = hostnameMatcher[1];
          hostnameTLD = hostnameMatcher[3];
          hostnameNumber = parseInt(hostnameMatcher[2]);
          (0, assert_1.default)(hostnameNumber, `Failed to extract hostname number from ${this.hostname}. Resulted in ${hostnameNumber}`);
        } else {
          const lastDot = this.hostname.substring(0, this.hostname.length - 1).lastIndexOf(".");
          hostnameBase = this.hostname.slice(0, lastDot);
          hostnameTLD = this.hostname.slice(lastDot);
          hostnameNumber = 1;
        }
        if (!nameCheckOnly) {
          nameNumber++;
          hostnameNumber++;
        }
        const newNumber = Math.max(nameNumber, hostnameNumber);
        this.name = newNumber === 1 ? nameBase : `${nameBase} (${newNumber})`;
        this.hostname = newNumber === 1 ? `${hostnameBase}${hostnameTLD}` : `${hostnameBase}-(${newNumber})${hostnameTLD}`;
        this.loweredHostname = (0, dns_equal_1.dnsLowerCase)(this.hostname);
        this.fqdn = this.formatFQDN();
        this.loweredFqdn = (0, dns_equal_1.dnsLowerCase)(this.fqdn);
        if (this.name !== oldName || this.hostname !== oldHostname) {
          debug("[%s] Service changed name '%s' -> '%s', '%s' -> '%s'", this.name, oldName, this.name, oldHostname, this.hostname);
        }
        if (!nameCheckOnly) {
          this.rebuildServiceRecords();
        }
      }
      /**
       * @private called by the Prober once finished with probing to signal a (or more)
       *   name change(s) happened {@see incrementName}.
       */
      informAboutNameUpdates() {
        const nameCalled = this.emit("name-change", this.name);
        const hostnameCalled = this.emit("hostname-change", domainFormatter.removeTLD(this.hostname));
        if (!nameCalled && !hostnameCalled) {
          console.warn(`CIAO: [${this.name}] Service changed name but nobody was listening on the 'name-change' event!`);
        }
      }
      formatFQDN() {
        if (this.serviceState !== "unannounced") {
          throw new Error("Name can't be changed after service was already announced!");
        }
        const fqdn = domainFormatter.stringify({
          name: this.name,
          type: this.type,
          protocol: this.protocol,
          domain: this.serviceDomain
        });
        (0, assert_1.default)(fqdn.length <= 255, "A fully qualified domain name cannot be longer than 255 characters");
        return fqdn;
      }
      /**
       * @private called once the service data/state is updated and the records should be updated with the new data
       */
      rebuildServiceRecords() {
        (0, assert_1.default)(this.port, "port must be set before building records");
        debug("[%s] Rebuilding service records...", this.name);
        const aRecordMap = {};
        const aaaaRecordMap = {};
        const aaaaRoutableRecordMap = {};
        const aaaaUniqueLocalRecordMap = {};
        const reverseAddressMap = {};
        let subtypePTRs = void 0;
        for (const [name, networkInterface] of this.networkManager.getInterfaceMap()) {
          if (!this.advertisesOnInterface(name, true)) {
            continue;
          }
          let restrictedAddresses = this.restrictedAddresses ? this.restrictedAddresses.get(name) : void 0;
          if (restrictedAddresses && restrictedAddresses.length === 0) {
            restrictedAddresses = void 0;
          }
          if (networkInterface.ipv4 && (!restrictedAddresses || restrictedAddresses.includes(networkInterface.ipv4))) {
            aRecordMap[name] = new ARecord_1.ARecord(this.hostname, networkInterface.ipv4, true);
            reverseAddressMap[networkInterface.ipv4] = new PTRRecord_1.PTRRecord((0, domain_formatter_1.formatReverseAddressPTRName)(networkInterface.ipv4), this.hostname);
          }
          if (networkInterface.ipv6 && !this.disableIpv6 && (!restrictedAddresses || restrictedAddresses.includes(networkInterface.ipv6))) {
            aaaaRecordMap[name] = new AAAARecord_1.AAAARecord(this.hostname, networkInterface.ipv6, true);
            reverseAddressMap[networkInterface.ipv6] = new PTRRecord_1.PTRRecord((0, domain_formatter_1.formatReverseAddressPTRName)(networkInterface.ipv6), this.hostname);
          }
          if (networkInterface.globallyRoutableIpv6 && !this.disableIpv6 && (!restrictedAddresses || restrictedAddresses.includes(networkInterface.globallyRoutableIpv6))) {
            aaaaRoutableRecordMap[name] = new AAAARecord_1.AAAARecord(this.hostname, networkInterface.globallyRoutableIpv6, true);
            reverseAddressMap[networkInterface.globallyRoutableIpv6] = new PTRRecord_1.PTRRecord((0, domain_formatter_1.formatReverseAddressPTRName)(networkInterface.globallyRoutableIpv6), this.hostname);
          }
          if (networkInterface.uniqueLocalIpv6 && !this.disableIpv6 && (!restrictedAddresses || restrictedAddresses.includes(networkInterface.uniqueLocalIpv6))) {
            aaaaUniqueLocalRecordMap[name] = new AAAARecord_1.AAAARecord(this.hostname, networkInterface.uniqueLocalIpv6, true);
            reverseAddressMap[networkInterface.uniqueLocalIpv6] = new PTRRecord_1.PTRRecord((0, domain_formatter_1.formatReverseAddressPTRName)(networkInterface.uniqueLocalIpv6), this.hostname);
          }
        }
        if (this.subTypePTRs) {
          subtypePTRs = [];
          for (const ptr of this.subTypePTRs) {
            subtypePTRs.push(new PTRRecord_1.PTRRecord(ptr, this.fqdn));
          }
        }
        this.serviceRecords = {
          ptr: new PTRRecord_1.PTRRecord(this.typePTR, this.fqdn),
          subtypePTRs,
          // possibly undefined
          metaQueryPtr: new PTRRecord_1.PTRRecord(index_1.Responder.SERVICE_TYPE_ENUMERATION_NAME, this.typePTR),
          srv: new SRVRecord_1.SRVRecord(this.fqdn, this.hostname, this.port, true),
          txt: new TXTRecord_1.TXTRecord(this.fqdn, this.txt, true),
          serviceNSEC: new NSECRecord_1.NSECRecord(this.fqdn, this.fqdn, [
            16,
            33
            /* RType.SRV */
          ], 4500, true),
          // 4500 ttl of src and txt
          a: aRecordMap,
          aaaa: aaaaRecordMap,
          aaaaR: aaaaRoutableRecordMap,
          aaaaULA: aaaaUniqueLocalRecordMap,
          reverseAddressPTRs: reverseAddressMap,
          addressNSEC: new NSECRecord_1.NSECRecord(this.hostname, this.hostname, [
            1,
            28
            /* RType.AAAA */
          ], 120, true)
          // 120 TTL of A and AAAA records
        };
      }
      /**
       * Returns if the given service is advertising on the provided network interface.
       *
       * @param name - The desired interface name.
       * @param skipAddressCheck - If true it is not checked if the service actually has
       *   an address record for the given interface.
       * @private returns if the service should be advertised on the given service
       */
      advertisesOnInterface(name, skipAddressCheck) {
        var _a, _b, _c, _d;
        return !this.restrictedAddresses || this.restrictedAddresses.has(name) && (skipAddressCheck || // must have at least one address record on the given interface
        !!((_a = this.serviceRecords) === null || _a === void 0 ? void 0 : _a.a[name]) || !!((_b = this.serviceRecords) === null || _b === void 0 ? void 0 : _b.aaaa[name]) || !!((_c = this.serviceRecords) === null || _c === void 0 ? void 0 : _c.aaaaR[name]) || !!((_d = this.serviceRecords) === null || _d === void 0 ? void 0 : _d.aaaaULA[name]));
      }
      /**
       * @private used to get a copy of the main PTR record
       */
      ptrRecord() {
        return this.serviceRecords.ptr.clone();
      }
      /**
       * @private used to get a copy of the array of subtype PTR records
       */
      subtypePtrRecords() {
        return this.serviceRecords.subtypePTRs ? ResourceRecord_1.ResourceRecord.clone(this.serviceRecords.subtypePTRs) : [];
      }
      /**
       * @private used to get a copy of the meta-query PTR record
       */
      metaQueryPtrRecord() {
        return this.serviceRecords.metaQueryPtr.clone();
      }
      /**
       * @private used to get a copy of the SRV record
       */
      srvRecord() {
        return this.serviceRecords.srv.clone();
      }
      /**
       * @private used to get a copy of the TXT record
       */
      txtRecord() {
        return this.serviceRecords.txt.clone();
      }
      /**
       * @private used to get a copy of the A record
       */
      aRecord(name) {
        const record = this.serviceRecords.a[name];
        return record ? record.clone() : void 0;
      }
      /**
       * @private used to get a copy of the AAAA record for the link-local ipv6 address
       */
      aaaaRecord(name) {
        const record = this.serviceRecords.aaaa[name];
        return record ? record.clone() : void 0;
      }
      /**
       * @private used to get a copy of the AAAA record for the routable ipv6 address
       */
      aaaaRoutableRecord(name) {
        const record = this.serviceRecords.aaaaR[name];
        return record ? record.clone() : void 0;
      }
      /**
       * @private used to get a copy of the AAAA for the unique local ipv6 address
       */
      aaaaUniqueLocalRecord(name) {
        const record = this.serviceRecords.aaaaULA[name];
        return record ? record.clone() : void 0;
      }
      /**
       * @private used to get a copy of the A and AAAA records
       */
      allAddressRecords() {
        const records = [];
        Object.values(this.serviceRecords.a).forEach((record) => {
          records.push(record.clone());
        });
        Object.values(this.serviceRecords.aaaa).forEach((record) => {
          records.push(record.clone());
        });
        Object.values(this.serviceRecords.aaaaR).forEach((record) => {
          records.push(record.clone());
        });
        Object.values(this.serviceRecords.aaaaULA).forEach((record) => {
          records.push(record.clone());
        });
        return records;
      }
      /**
       * @private used to get a copy of the address NSEC record
       */
      addressNSECRecord() {
        return this.serviceRecords.addressNSEC.clone();
      }
      /**
       * @private user to get a copy of the service NSEC record
       */
      serviceNSECRecord(shortenTTL = false) {
        const record = this.serviceRecords.serviceNSEC.clone();
        if (shortenTTL) {
          record.ttl = 120;
        }
        return record;
      }
      /**
       * @param address - The IP address to check.
       * @private used to check if given address is exposed by this service
       */
      hasAddress(address) {
        return !!this.serviceRecords.reverseAddressPTRs[address];
      }
    };
    exports2.CiaoService = CiaoService;
  }
});

// node_modules/@homebridge/ciao/lib/coder/Question.js
var require_Question = __commonJS({
  "node_modules/@homebridge/ciao/lib/coder/Question.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Question = void 0;
    var dns_equal_1 = require_dns_equal();
    var Question = class _Question {
      constructor(name, type, unicastResponseFlag = false, clazz = 1) {
        this.unicastResponseFlag = false;
        if (!name.endsWith(".")) {
          name += ".";
        }
        this.name = name;
        this.type = type;
        this.class = clazz;
        this.unicastResponseFlag = unicastResponseFlag;
      }
      getLowerCasedName() {
        return this.lowerCasedName || (this.lowerCasedName = (0, dns_equal_1.dnsLowerCase)(this.name));
      }
      getEncodingLength(coder) {
        return coder.getNameLength(this.name) + 4;
      }
      encode(coder, buffer, offset) {
        const oldOffset = offset;
        const nameLength = coder.encodeName(this.name, offset);
        offset += nameLength;
        buffer.writeUInt16BE(this.type, offset);
        offset += 2;
        let qClass = this.class;
        if (this.unicastResponseFlag) {
          qClass |= _Question.QU_MASK;
        }
        buffer.writeUInt16BE(qClass, offset);
        offset += 2;
        return offset - oldOffset;
      }
      clone() {
        return new _Question(this.name, this.type, this.unicastResponseFlag, this.class);
      }
      asString() {
        return `Q ${this.name} ${this.type} ${this.class}`;
      }
      static decode(context, coder, buffer, offset) {
        const oldOffset = offset;
        const decodedName = coder.decodeName(offset);
        offset += decodedName.readBytes;
        const type = buffer.readUInt16BE(offset);
        offset += 2;
        const qClass = buffer.readUInt16BE(offset);
        offset += 2;
        const clazz = qClass & this.NOT_QU_MASK;
        const quFlag = !!(qClass & this.QU_MASK);
        const question = new _Question(decodedName.data, type, quFlag, clazz);
        return {
          data: question,
          readBytes: offset - oldOffset
        };
      }
    };
    exports2.Question = Question;
    Question.QU_MASK = 32768;
    Question.NOT_QU_MASK = 32767;
  }
});

// node_modules/@homebridge/ciao/lib/coder/DNSPacket.js
var require_DNSPacket = __commonJS({
  "node_modules/@homebridge/ciao/lib/coder/DNSPacket.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DNSPacket = exports2.PacketType = exports2.QClass = exports2.RClass = exports2.QType = exports2.RType = exports2.RCode = exports2.OpCode = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var assert_1 = tslib_1.__importDefault(require("assert"));
    var fast_deep_equal_1 = tslib_1.__importDefault(require_fast_deep_equal());
    var dns_string_utils_1 = require_dns_string_utils();
    var DNSLabelCoder_1 = require_DNSLabelCoder();
    var Question_1 = require_Question();
    require_records();
    var ResourceRecord_1 = require_ResourceRecord();
    var OpCode;
    (function(OpCode2) {
      OpCode2[OpCode2["QUERY"] = 0] = "QUERY";
    })(OpCode || (exports2.OpCode = OpCode = {}));
    var RCode;
    (function(RCode2) {
      RCode2[RCode2["NoError"] = 0] = "NoError";
    })(RCode || (exports2.RCode = RCode = {}));
    var RType;
    (function(RType2) {
      RType2[RType2["A"] = 1] = "A";
      RType2[RType2["CNAME"] = 5] = "CNAME";
      RType2[RType2["PTR"] = 12] = "PTR";
      RType2[RType2["TXT"] = 16] = "TXT";
      RType2[RType2["AAAA"] = 28] = "AAAA";
      RType2[RType2["SRV"] = 33] = "SRV";
      RType2[RType2["OPT"] = 41] = "OPT";
      RType2[RType2["NSEC"] = 47] = "NSEC";
    })(RType || (exports2.RType = RType = {}));
    var QType;
    (function(QType2) {
      QType2[QType2["A"] = 1] = "A";
      QType2[QType2["CNAME"] = 5] = "CNAME";
      QType2[QType2["PTR"] = 12] = "PTR";
      QType2[QType2["TXT"] = 16] = "TXT";
      QType2[QType2["AAAA"] = 28] = "AAAA";
      QType2[QType2["SRV"] = 33] = "SRV";
      QType2[QType2["NSEC"] = 47] = "NSEC";
      QType2[QType2["ANY"] = 255] = "ANY";
    })(QType || (exports2.QType = QType = {}));
    var RClass;
    (function(RClass2) {
      RClass2[RClass2["IN"] = 1] = "IN";
    })(RClass || (exports2.RClass = RClass = {}));
    var QClass;
    (function(QClass2) {
      QClass2[QClass2["IN"] = 1] = "IN";
      QClass2[QClass2["ANY"] = 255] = "ANY";
    })(QClass || (exports2.QClass = QClass = {}));
    var PacketType;
    (function(PacketType2) {
      PacketType2[PacketType2["QUERY"] = 0] = "QUERY";
      PacketType2[PacketType2["RESPONSE"] = 1] = "RESPONSE";
    })(PacketType || (exports2.PacketType = PacketType = {}));
    function isQuery(query) {
      return "answers" in query;
    }
    function isProbeQuery(query) {
      return "authorities" in query;
    }
    var DNSPacket = class _DNSPacket {
      constructor(definition) {
        this.questions = /* @__PURE__ */ new Map();
        this.answers = /* @__PURE__ */ new Map();
        this.authorities = /* @__PURE__ */ new Map();
        this.additionals = /* @__PURE__ */ new Map();
        this.estimatedEncodingLength = 0;
        this.lastCalculatedLength = 0;
        this.lengthDirty = true;
        this.id = definition.id || 0;
        this.legacyUnicastEncoding = definition.legacyUnicast || false;
        this.type = definition.type;
        this.opcode = definition.opcode || 0;
        this.flags = definition.flags || {};
        this.rcode = definition.rCode || 0;
        if (this.type === 1) {
          this.flags.authoritativeAnswer = true;
        }
        if (definition.questions) {
          this.addQuestions(...definition.questions);
        }
        if (definition.answers) {
          this.addAnswers(...definition.answers);
        }
        if (definition.authorities) {
          this.addAuthorities(...definition.authorities);
        }
        if (definition.additionals) {
          this.addAdditionals(...definition.additionals);
        }
      }
      static createDNSQueryPacket(definition, udpPayloadSize = this.UDP_PAYLOAD_SIZE_IPV4) {
        const packets = this.createDNSQueryPackets(definition, udpPayloadSize);
        (0, assert_1.default)(packets.length === 1, "Cannot user short method createDNSQueryPacket when query packets are more than one: is " + packets.length);
        return packets[0];
      }
      static createDNSQueryPackets(definition, udpPayloadSize = this.UDP_PAYLOAD_SIZE_IPV4) {
        const packets = [];
        const packet = new _DNSPacket({
          type: 0,
          questions: definition.questions,
          additionals: isQuery(definition) ? definition.additionals : void 0
          // OPT record is included in additionals section
        });
        packets.push(packet);
        if (packet.getEstimatedEncodingLength() > udpPayloadSize) {
          const compressedLength = packet.getEncodingLength();
          if (compressedLength > udpPayloadSize) {
            assert_1.default.fail("Cannot send query where already the query section is exceeding the udpPayloadSize (" + compressedLength + ">" + udpPayloadSize + ")!");
          }
        }
        if (isQuery(definition) && definition.answers) {
          let currentPacket = packet;
          let i = 0;
          const answers = definition.answers.concat([]);
          answers.sort((a, b) => {
            return a.getEncodingLength(DNSLabelCoder_1.NonCompressionLabelCoder.INSTANCE) - b.getEncodingLength(DNSLabelCoder_1.NonCompressionLabelCoder.INSTANCE);
          });
          while (i < answers.length) {
            for (; i < answers.length; i++) {
              const answer = answers[i];
              const estimatedSize = answer.getEncodingLength(DNSLabelCoder_1.NonCompressionLabelCoder.INSTANCE);
              if (currentPacket.getEstimatedEncodingLength() + estimatedSize <= udpPayloadSize) {
                currentPacket.addAnswers(answer);
              } else if (currentPacket.getEncodingLength() + estimatedSize <= udpPayloadSize) {
                currentPacket.addAnswers(answer);
              } else if (currentPacket.questions.size === 0 && currentPacket.answers.size === 0) {
                currentPacket.addAnswers(answer);
                i++;
                break;
              } else {
                break;
              }
            }
            if (i < answers.length) {
              currentPacket.flags.truncation = true;
              currentPacket = new _DNSPacket({
                type: 0
                /* PacketType.QUERY */
              });
              packets.push(currentPacket);
            }
          }
        } else if (isProbeQuery(definition) && definition.authorities) {
          packet.addAuthorities(...definition.authorities);
          const compressedLength = packet.getEncodingLength();
          if (compressedLength > udpPayloadSize) {
            assert_1.default.fail(`Probe query packet exceeds the mtu size (${compressedLength}>${udpPayloadSize}). Can't split probe queries at the moment!`);
          }
        }
        return packets;
      }
      static createDNSResponsePacketsFromRRSet(definition, udpPayloadSize = this.UDP_PAYLOAD_SIZE_IPV4) {
        const packet = new _DNSPacket({
          id: definition.id,
          legacyUnicast: definition.legacyUnicast,
          type: 1,
          flags: { authoritativeAnswer: true },
          // RFC 6763 18.4 AA is always set for responses in mdns
          // possible questions sent back to an unicast querier (unicast dns contain only one question, so no size problem here)
          questions: definition.questions,
          answers: definition.answers,
          additionals: definition.additionals
        });
        if (packet.getEncodingLength() > udpPayloadSize) {
          assert_1.default.fail("Couldn't construct a dns response packet from a rr set which fits in an udp payload sized packet!");
        }
        return packet;
      }
      canBeCombinedWith(packet, udpPayloadSize = _DNSPacket.UDP_PAYLOAD_SIZE_IPV4) {
        return this.id === packet.id && this.type === packet.type && this.opcode === packet.opcode && (0, fast_deep_equal_1.default)(this.flags, packet.flags) && this.rcode === packet.rcode && this.getEncodingLength() + packet.getEncodingLength() <= udpPayloadSize;
      }
      combineWith(packet) {
        this.setLegacyUnicastEncoding(this.legacyUnicastEncoding || packet.legacyUnicastEncoding);
        this.addRecords(this.questions, packet.questions.values());
        this.addRecords(this.answers, packet.answers.values(), this.additionals);
        this.addRecords(this.authorities, packet.authorities.values());
        this.addRecords(this.additionals, packet.additionals.values());
      }
      addQuestions(...questions) {
        return this.addRecords(this.questions, questions);
      }
      addAnswers(...answers) {
        return this.addRecords(this.answers, answers, this.additionals);
      }
      addAuthorities(...authorities) {
        return this.addRecords(this.authorities, authorities);
      }
      addAdditionals(...additionals) {
        return this.addRecords(this.additionals, additionals);
      }
      addRecords(recordList, added, removeFromWhenAdded) {
        let addedAny = false;
        for (const record of added) {
          if (recordList.has(record.asString())) {
            continue;
          }
          if (this.estimatedEncodingLength) {
            this.estimatedEncodingLength += record.getEncodingLength(DNSLabelCoder_1.NonCompressionLabelCoder.INSTANCE);
          }
          recordList.set(record.asString(), record);
          addedAny = true;
          this.lengthDirty = true;
          if (removeFromWhenAdded) {
            removeFromWhenAdded.delete(record.asString());
          }
        }
        return addedAny;
      }
      setLegacyUnicastEncoding(legacyUnicastEncoding) {
        if (this.legacyUnicastEncoding !== legacyUnicastEncoding) {
          this.lengthDirty = true;
        }
        this.legacyUnicastEncoding = legacyUnicastEncoding;
      }
      legacyUnicastEncodingEnabled() {
        return this.legacyUnicastEncoding;
      }
      getEstimatedEncodingLength() {
        if (this.estimatedEncodingLength) {
          return this.estimatedEncodingLength;
        }
        const labelCoder = DNSLabelCoder_1.NonCompressionLabelCoder.INSTANCE;
        let length = _DNSPacket.DNS_PACKET_HEADER_SIZE;
        for (const record of this.questions.values()) {
          length += record.getEncodingLength(labelCoder);
        }
        for (const record of this.answers.values()) {
          length += record.getEncodingLength(labelCoder);
        }
        for (const record of this.authorities.values()) {
          length += record.getEncodingLength(labelCoder);
        }
        for (const record of this.additionals.values()) {
          length += record.getEncodingLength(labelCoder);
        }
        this.estimatedEncodingLength = length;
        return length;
      }
      getEncodingLength(coder) {
        if (!this.lengthDirty) {
          return this.lastCalculatedLength;
        }
        const labelCoder = coder || new DNSLabelCoder_1.DNSLabelCoder(this.legacyUnicastEncoding);
        let length = _DNSPacket.DNS_PACKET_HEADER_SIZE;
        for (const record of this.questions.values()) {
          length += record.getEncodingLength(labelCoder);
        }
        for (const record of this.answers.values()) {
          length += record.getEncodingLength(labelCoder);
        }
        for (const record of this.authorities.values()) {
          length += record.getEncodingLength(labelCoder);
        }
        for (const record of this.additionals.values()) {
          length += record.getEncodingLength(labelCoder);
        }
        this.lengthDirty = false;
        this.lastCalculatedLength = length;
        this.estimatedEncodingLength = length;
        return length;
      }
      encode() {
        const labelCoder = new DNSLabelCoder_1.DNSLabelCoder(this.legacyUnicastEncoding);
        const length = this.getEncodingLength(labelCoder);
        const buffer = Buffer.allocUnsafe(length);
        labelCoder.initBuf(buffer);
        let offset = 0;
        buffer.writeUInt16BE(this.id, offset);
        offset += 2;
        let flags = this.type << 15 | this.opcode << 11 | this.rcode;
        if (this.flags.authoritativeAnswer) {
          flags |= _DNSPacket.AUTHORITATIVE_ANSWER_MASK;
        }
        if (this.flags.truncation) {
          flags |= _DNSPacket.TRUNCATION_MASK;
        }
        if (this.flags.recursionDesired) {
          flags |= _DNSPacket.RECURSION_DESIRED_MASK;
        }
        if (this.flags.recursionAvailable) {
          flags |= _DNSPacket.RECURSION_AVAILABLE_MASK;
        }
        if (this.flags.zero) {
          flags |= _DNSPacket.ZERO_HEADER_MASK;
        }
        if (this.flags.authenticData) {
          flags |= _DNSPacket.AUTHENTIC_DATA_MASK;
        }
        if (this.flags.checkingDisabled) {
          flags |= _DNSPacket.CHECKING_DISABLED_MASK;
        }
        buffer.writeUInt16BE(flags, offset);
        offset += 2;
        buffer.writeUInt16BE(this.questions.size, offset);
        offset += 2;
        buffer.writeUInt16BE(this.answers.size, offset);
        offset += 2;
        buffer.writeUInt16BE(this.authorities.size, offset);
        offset += 2;
        buffer.writeUInt16BE(this.additionals.size, offset);
        offset += 2;
        for (const question of this.questions.values()) {
          const length2 = question.encode(labelCoder, buffer, offset);
          offset += length2;
        }
        for (const record of this.answers.values()) {
          const length2 = record.encode(labelCoder, buffer, offset);
          offset += length2;
        }
        for (const record of this.authorities.values()) {
          const length2 = record.encode(labelCoder, buffer, offset);
          offset += length2;
        }
        for (const record of this.additionals.values()) {
          const length2 = record.encode(labelCoder, buffer, offset);
          offset += length2;
        }
        (0, assert_1.default)(offset === buffer.length, "Bytes written didn't match the buffer size!");
        return buffer;
      }
      static decode(context, buffer, offset = 0) {
        const labelCoder = new DNSLabelCoder_1.DNSLabelCoder();
        labelCoder.initBuf(buffer);
        const id = buffer.readUInt16BE(offset);
        offset += 2;
        const flags = buffer.readUInt16BE(offset);
        offset += 2;
        const questionLength = buffer.readUInt16BE(offset);
        offset += 2;
        const answerLength = buffer.readUInt16BE(offset);
        offset += 2;
        const authoritiesLength = buffer.readUInt16BE(offset);
        offset += 2;
        const additionalsLength = buffer.readUInt16BE(offset);
        offset += 2;
        const questions = [];
        const answers = [];
        const authorities = [];
        const additionals = [];
        offset += _DNSPacket.decodeList(context, labelCoder, buffer, offset, questionLength, Question_1.Question.decode.bind(Question_1.Question), questions);
        offset += _DNSPacket.decodeList(context, labelCoder, buffer, offset, answerLength, ResourceRecord_1.ResourceRecord.decode.bind(ResourceRecord_1.ResourceRecord), answers);
        offset += _DNSPacket.decodeList(context, labelCoder, buffer, offset, authoritiesLength, ResourceRecord_1.ResourceRecord.decode.bind(ResourceRecord_1.ResourceRecord), authorities);
        offset += _DNSPacket.decodeList(context, labelCoder, buffer, offset, additionalsLength, ResourceRecord_1.ResourceRecord.decode.bind(ResourceRecord_1.ResourceRecord), additionals);
        (0, assert_1.default)(offset === buffer.length, "Didn't read the full buffer (offset=" + offset + ", length=" + buffer.length + ")");
        const qr = flags >> 15;
        const opcode = flags >> 11 & 15;
        const rCode = flags & 15;
        const packetFlags = {};
        if (flags & this.AUTHORITATIVE_ANSWER_MASK) {
          packetFlags.authoritativeAnswer = true;
        }
        if (flags & this.TRUNCATION_MASK) {
          packetFlags.truncation = true;
        }
        if (flags & this.RECURSION_DESIRED_MASK) {
          packetFlags.recursionDesired = true;
        }
        if (flags & this.RECURSION_AVAILABLE_MASK) {
          packetFlags.recursionAvailable = true;
        }
        if (flags & this.ZERO_HEADER_MASK) {
          packetFlags.zero = true;
        }
        if (flags & this.AUTHENTIC_DATA_MASK) {
          packetFlags.authenticData = true;
        }
        if (flags & this.CHECKING_DISABLED_MASK) {
          packetFlags.checkingDisabled = true;
        }
        return new _DNSPacket({
          id,
          type: qr,
          opcode,
          rCode,
          flags: packetFlags,
          questions,
          answers,
          authorities,
          additionals
        });
      }
      static decodeList(context, coder, buffer, offset, length, decoder, destination) {
        const oldOffset = offset;
        for (let i = 0; i < length; i++) {
          const decoded = decoder(context, coder, buffer, offset);
          offset += decoded.readBytes;
          if (decoded.data) {
            destination.push(decoded.data);
          }
        }
        return offset - oldOffset;
      }
      asLoggingString(udpPayloadSize) {
        let answerString = "";
        let additionalsString = "";
        for (const record of this.answers.values()) {
          if (answerString) {
            answerString += ",";
          }
          answerString += (0, dns_string_utils_1.dnsTypeToString)(record.type);
        }
        for (const record of this.additionals.values()) {
          if (additionalsString) {
            additionalsString += ",";
          }
          additionalsString += (0, dns_string_utils_1.dnsTypeToString)(record.type);
        }
        const optionsStrings = [];
        if (this.legacyUnicastEncodingEnabled()) {
          optionsStrings.push("U");
        }
        if (udpPayloadSize) {
          optionsStrings.push("UPS: " + udpPayloadSize);
        }
        const optionsString = optionsStrings.length !== 0 ? ` (${optionsStrings})` : "";
        return `[${answerString}] answers and [${additionalsString}] additionals with size ${this.getEncodingLength()}B${optionsString}`;
      }
    };
    exports2.DNSPacket = DNSPacket;
    DNSPacket.UDP_PAYLOAD_SIZE_IPV4 = process.env.CIAO_UPS ? parseInt(process.env.CIAO_UPS) : 1440;
    DNSPacket.UDP_PAYLOAD_SIZE_IPV6 = process.env.CIAO_UPS ? parseInt(process.env.CIAO_UPS) : 1440;
    DNSPacket.AUTHORITATIVE_ANSWER_MASK = 1024;
    DNSPacket.TRUNCATION_MASK = 512;
    DNSPacket.RECURSION_DESIRED_MASK = 256;
    DNSPacket.RECURSION_AVAILABLE_MASK = 128;
    DNSPacket.ZERO_HEADER_MASK = 64;
    DNSPacket.AUTHENTIC_DATA_MASK = 32;
    DNSPacket.CHECKING_DISABLED_MASK = 16;
    DNSPacket.DNS_PACKET_HEADER_SIZE = 12;
  }
});

// node_modules/@homebridge/ciao/lib/util/errors.js
var require_errors = __commonJS({
  "node_modules/@homebridge/ciao/lib/util/errors.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InterfaceNotFoundError = exports2.ERR_INTERFACE_NOT_FOUND = void 0;
    exports2.ERR_INTERFACE_NOT_FOUND = "ERR_INTERFACE_NOT_FOUND";
    var InterfaceNotFoundError = class extends Error {
      constructor(message) {
        super(message);
        this.name = "ERR_INTERFACE_NOT_FOUND";
      }
    };
    exports2.InterfaceNotFoundError = InterfaceNotFoundError;
  }
});

// node_modules/@homebridge/ciao/lib/util/promise-utils.js
var require_promise_utils = __commonJS({
  "node_modules/@homebridge/ciao/lib/util/promise-utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PromiseTimeout = PromiseTimeout;
    function PromiseTimeout(timeout) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(), timeout);
      });
    }
  }
});

// node_modules/@homebridge/ciao/lib/MDNSServer.js
var require_MDNSServer = __commonJS({
  "node_modules/@homebridge/ciao/lib/MDNSServer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MDNSServer = void 0;
    exports2.SendResultFailedRatio = SendResultFailedRatio;
    exports2.SendResultFormatError = SendResultFormatError;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var assert_1 = tslib_1.__importDefault(require("assert"));
    var crypto_1 = require("crypto");
    var debug_1 = tslib_1.__importDefault(require_src());
    var dgram_1 = tslib_1.__importDefault(require("dgram"));
    var DNSPacket_1 = require_DNSPacket();
    var NetworkManager_1 = require_NetworkManager();
    var domain_formatter_1 = require_domain_formatter();
    var errors_1 = require_errors();
    var promise_utils_1 = require_promise_utils();
    var debug = (0, debug_1.default)("ciao:MDNSServer");
    function SendResultFailedRatio(results) {
      if (results.length === 0) {
        return 0;
      }
      let failedCount = 0;
      for (const result of results) {
        if (result.status !== "fulfilled") {
          failedCount++;
        }
      }
      return failedCount / results.length;
    }
    function SendResultFormatError(results, prefix, includeStack = false) {
      let failedCount = 0;
      for (const result of results) {
        if (result.status !== "fulfilled") {
          failedCount++;
        }
      }
      if (!prefix) {
        prefix = "Failed to send packets";
      }
      if (failedCount < results.length) {
        prefix += ` (${failedCount}/${results.length}):`;
      } else {
        prefix += ":";
      }
      if (includeStack) {
        let string = "=============================\n" + prefix;
        for (const result of results) {
          if (result.status === "rejected") {
            string += "\n--------------------\nFailed to send packet on interface " + result.interface + ": " + result.reason.stack;
          } else if (result.status === "timeout") {
            string += "\n--------------------\nSending packet on interface " + result.interface + " timed out!";
          }
        }
        string += "\n=============================";
        return string;
      } else {
        let string = prefix;
        for (const result of results) {
          if (result.status === "rejected") {
            string += "\n- Failed to send packet on interface " + result.interface + ": " + result.reason.message;
          } else if (result.status === "timeout") {
            string += "\n- Sending packet on interface " + result.interface + " timed out!";
          }
        }
        return string;
      }
    }
    var MDNSServer = class _MDNSServer {
      constructor(handler, options) {
        this.sockets = /* @__PURE__ */ new Map();
        this.sentPackets = /* @__PURE__ */ new Map();
        this.suppressUnicastResponseFlag = false;
        this.bound = false;
        this.closed = false;
        this.advertiseFamilies = [];
        (0, assert_1.default)(handler, "handler cannot be undefined");
        this.handler = handler;
        this.networkManager = new NetworkManager_1.NetworkManager({
          interface: options && options.interface,
          excludeIpv6: options && options.disableIpv6,
          excludeIpv6Only: options && options.excludeIpv6Only
        });
        if (!(options && options.advertiseIpv4 === false)) {
          this.advertiseFamilies.push(
            "IPv4"
            /* IPFamily.IPv4 */
          );
        }
        if (options && options.advertiseIpv6) {
          this.advertiseFamilies.push(
            "IPv6"
            /* IPFamily.IPv6 */
          );
        }
        this.networkManager.on("network-update", this.handleUpdatedNetworkInterfaces.bind(this));
      }
      getNetworkManager() {
        return this.networkManager;
      }
      getBoundInterfaceNames() {
        return this.sockets.keys();
      }
      async bind() {
        if (this.closed) {
          throw new Error("Cannot rebind closed server!");
        }
        this.suppressUnicastResponseFlag = true;
        await this.networkManager.waitForInit();
        const promises = [];
        for (const [name, networkInterface] of this.networkManager.getInterfaceMap()) {
          this.advertiseFamilies.forEach((family) => {
            const socket = this.createDgramSocket(name, true, family === "IPv6" ? "udp6" : "udp4");
            const promise = this.bindSocket(socket, networkInterface, family).catch((reason) => {
              console.log("Could not bind detected network interface: " + reason.stack);
            });
            promises.push(promise);
          });
        }
        return Promise.all(promises).then(() => {
          this.bound = true;
        });
      }
      shutdown() {
        this.networkManager.shutdown();
        for (const socket of this.sockets.values()) {
          socket.close();
        }
        if (this.sentPacketsCleanupTimer !== void 0) {
          clearTimeout(this.sentPacketsCleanupTimer);
          this.sentPacketsCleanupTimer = void 0;
        }
        this.bound = false;
        this.closed = true;
        this.sockets.clear();
        this.sentPackets.clear();
      }
      sendQueryBroadcast(query, service) {
        const packets = DNSPacket_1.DNSPacket.createDNSQueryPackets(query);
        if (packets.length > 1) {
          debug("Query broadcast is split into %d packets!", packets.length);
        }
        const promises = [];
        for (const packet of packets) {
          promises.push(this.sendOnAllNetworksForService(packet, service));
        }
        return Promise.all(promises).then((values) => {
          const results = [];
          for (const value of values) {
            results.push(...value);
          }
          return results;
        });
      }
      sendResponseBroadcast(response, service) {
        const packet = DNSPacket_1.DNSPacket.createDNSResponsePacketsFromRRSet(response);
        return this.sendOnAllNetworksForService(packet, service);
      }
      sendResponse(response, endpointOrInterface, callback) {
        if (this.closed) {
          if (callback) {
            callback();
          }
          return;
        }
        this.send(response, endpointOrInterface).then((result) => {
          if (result.status === "rejected") {
            if (callback) {
              callback(new Error("Encountered socket error on " + result.interface + ": " + result.reason.message));
            } else {
              _MDNSServer.logSocketError(result.interface, result.reason);
            }
          } else if (callback) {
            callback();
          }
        });
      }
      sendOnAllNetworksForService(packet, service) {
        if (this.closed) {
          return Promise.resolve([]);
        }
        this.checkUnicastResponseFlag(packet);
        const message = packet.encode();
        this.assertBeforeSend(
          message,
          "IPv4"
          /* IPFamily.IPv4 */
        );
        const promises = [];
        for (const [name, socket] of this.sockets) {
          if (!service.advertisesOnInterface(name)) {
            continue;
          }
          const isIPv6 = name.endsWith("/6");
          const promise = new Promise((resolve) => {
            socket.send(message, _MDNSServer.MDNS_PORT, isIPv6 ? _MDNSServer.MULTICAST_IPV6 : _MDNSServer.MULTICAST_IPV4, (error) => {
              if (error) {
                if (!_MDNSServer.isSilencedSocketError(error)) {
                  resolve({
                    status: "rejected",
                    interface: name,
                    reason: error
                  });
                  return;
                }
              } else {
                this.maintainSentPacketsInterface(name, message);
              }
              resolve({
                status: "fulfilled",
                interface: name
              });
            });
          });
          promises.push(Promise.race([
            promise,
            (0, promise_utils_1.PromiseTimeout)(_MDNSServer.SEND_TIMEOUT).then(() => ({
              status: "timeout",
              interface: name
            }))
          ]));
        }
        return Promise.all(promises);
      }
      send(packet, endpointOrInterface) {
        if (this.closed) {
          const name2 = typeof endpointOrInterface === "string" ? endpointOrInterface : endpointOrInterface.interface;
          return Promise.resolve({ status: "rejected", interface: name2, reason: new Error("Server is closed") });
        }
        this.checkUnicastResponseFlag(packet);
        const message = packet.encode();
        let address;
        let port;
        let name;
        let isIPv6;
        if (typeof endpointOrInterface === "string") {
          isIPv6 = endpointOrInterface.endsWith("/6");
          address = isIPv6 ? _MDNSServer.MULTICAST_IPV6 : _MDNSServer.MULTICAST_IPV4;
          port = _MDNSServer.MDNS_PORT;
          name = endpointOrInterface;
        } else {
          isIPv6 = endpointOrInterface.interface.endsWith("/6");
          address = endpointOrInterface.address;
          port = endpointOrInterface.port;
          name = endpointOrInterface.interface;
        }
        this.assertBeforeSend(
          message,
          isIPv6 ? "IPv6" : "IPv4"
          /* IPFamily.IPv4 */
        );
        const socket = this.sockets.get(name);
        if (!socket) {
          throw new errors_1.InterfaceNotFoundError(`Could not find socket for given network interface '${name}'`);
        }
        return new Promise((resolve) => {
          socket.send(message, port, address, (error) => {
            if (error) {
              if (!_MDNSServer.isSilencedSocketError(error)) {
                resolve({
                  status: "rejected",
                  interface: name,
                  reason: error
                });
                return;
              }
            } else {
              this.maintainSentPacketsInterface(name, message);
            }
            resolve({
              status: "fulfilled",
              interface: name
            });
          });
        });
      }
      checkUnicastResponseFlag(packet) {
        if (this.suppressUnicastResponseFlag && packet.type === 0) {
          packet.questions.forEach((record) => record.unicastResponseFlag = false);
        }
      }
      assertBeforeSend(message, family) {
        (0, assert_1.default)(this.bound, "Cannot send packets before server is not bound!");
        const ipHeaderSize = family === "IPv4" ? _MDNSServer.DEFAULT_IP4_HEADER : _MDNSServer.DEFAULT_IP6_HEADER;
        (0, assert_1.default)(ipHeaderSize + _MDNSServer.UDP_HEADER + message.length <= 9e3, "DNS cannot exceed the size of 9000 bytes even with IP Fragmentation!");
      }
      maintainSentPacketsInterface(name, packet) {
        const hash = _MDNSServer.hashPacket(packet);
        let packets = this.sentPackets.get(name);
        if (!packets) {
          packets = /* @__PURE__ */ new Map();
          this.sentPackets.set(name, packets);
        }
        const timestamps = packets.get(hash);
        if (timestamps) {
          timestamps.push(Date.now());
        } else {
          packets.set(hash, [Date.now()]);
        }
        this.scheduleSentPacketsCleanup();
      }
      checkIfPacketWasPreviouslySentFromUs(name, packet) {
        const packets = this.sentPackets.get(name);
        if (!packets) {
          return false;
        }
        const hash = _MDNSServer.hashPacket(packet);
        const timestamps = packets.get(hash);
        if (timestamps && timestamps.length > 0) {
          timestamps.shift();
          if (timestamps.length === 0) {
            packets.delete(hash);
          }
          return true;
        }
        return false;
      }
      /**
       * Schedules a one-shot cleanup pass that prunes {@link sentPackets} entries older than
       * {@link SENT_PACKETS_TTL}. Reschedules itself while entries remain. Does nothing if a
       * pass is already scheduled or the server is closed.
       *
       * Opportunistic pruning on receive would not suffice: on setups where some packets
       * never loop back (RFC 6762 doesn't guarantee loopback delivery over UDP), the map
       * would otherwise grow without bound on quiet or outbound-heavy interfaces.
       */
      scheduleSentPacketsCleanup() {
        var _a, _b;
        if (this.sentPacketsCleanupTimer !== void 0 || this.closed) {
          return;
        }
        this.sentPacketsCleanupTimer = setTimeout(() => {
          this.sentPacketsCleanupTimer = void 0;
          const cutoff = Date.now() - _MDNSServer.SENT_PACKETS_TTL;
          let remaining = 0;
          for (const packets of this.sentPackets.values()) {
            for (const [hash, timestamps] of packets) {
              while (timestamps.length > 0 && timestamps[0] <= cutoff) {
                timestamps.shift();
              }
              if (timestamps.length === 0) {
                packets.delete(hash);
              } else {
                remaining += timestamps.length;
              }
            }
          }
          if (remaining > 0) {
            this.scheduleSentPacketsCleanup();
          }
        }, _MDNSServer.SENT_PACKETS_TTL);
        (_b = (_a = this.sentPacketsCleanupTimer).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
      static hashPacket(packet) {
        return (0, crypto_1.createHash)("md5").update(packet).digest("base64");
      }
      createDgramSocket(name, reuseAddr = false, type = "udp4") {
        const socket = dgram_1.default.createSocket({
          type,
          reuseAddr
        });
        socket.on("message", (data, rinfo) => this.handleMessage(
          name,
          data,
          rinfo,
          type === "udp6" ? "IPv6" : "IPv4"
          /* IPFamily.IPv4 */
        ));
        socket.on("error", (error) => {
          if (!_MDNSServer.isSilencedSocketError(error)) {
            _MDNSServer.logSocketError(name, error);
          }
        });
        return socket;
      }
      bindSocket(socket, networkInterface, family) {
        return new Promise((resolve, reject) => {
          const errorHandler = (error) => reject(new Error("Failed to bind on interface " + networkInterface.name + ": " + error.message));
          const isIPv6 = family === "IPv6";
          socket.once("error", errorHandler);
          socket.on("close", () => {
            this.sockets.delete(networkInterface.name + (isIPv6 ? "/6" : ""));
          });
          socket.bind(_MDNSServer.MDNS_PORT, () => {
            socket.setRecvBufferSize(800 * 1024);
            socket.removeListener("error", errorHandler);
            const multicastAddress = isIPv6 ? _MDNSServer.MULTICAST_IPV6 : _MDNSServer.MULTICAST_IPV4;
            const interfaceAddress = isIPv6 ? networkInterface.ipv6 : networkInterface.ipv4;
            if (!interfaceAddress) {
              debug("Warning: no " + (isIPv6 ? "IPv6" : "IPv4") + " address available on " + networkInterface.name);
              try {
                socket.close();
              } catch (error) {
              }
              resolve();
              return;
            }
            try {
              socket.addMembership(multicastAddress, interfaceAddress);
              socket.setMulticastInterface(isIPv6 ? interfaceAddress + "%" + networkInterface.name : interfaceAddress);
              socket.setMulticastTTL(_MDNSServer.MDNS_TTL);
              socket.setTTL(_MDNSServer.MDNS_TTL);
              socket.setMulticastLoopback(true);
              this.sockets.set(isIPv6 ? networkInterface.name + "/6" : networkInterface.name, socket);
              resolve();
            } catch (error) {
              try {
                socket.close();
              } catch (error2) {
                debug("Error while closing socket which failed to bind. Error may be expected: " + error2.message);
              }
              reject(new Error("Error binding socket on " + networkInterface.name + ": " + error.stack));
            }
          });
        });
      }
      handleMessage(name, buffer, rinfo, family) {
        if (!this.bound) {
          return;
        }
        const networkInterface = this.networkManager.getInterface(name);
        if (!networkInterface) {
          debug("Received packet on non existing network interface: %s!", name);
          return;
        }
        if (this.checkIfPacketWasPreviouslySentFromUs(networkInterface.name, buffer)) {
          return;
        }
        const isIPv6 = family === "IPv6";
        if (isIPv6) {
          if (networkInterface.loopback !== rinfo.address.includes("%lo")) {
            debug("Received packet on a %s interface (%s) which is coming from a %s interface (%s)", networkInterface.loopback ? "loopback" : "non-loopback", name, rinfo.address.includes("%lo") ? "loopback" : "non-loopback", rinfo.address);
          }
        } else {
          const ip4Netaddress = (0, domain_formatter_1.getNetAddress)(rinfo.address, networkInterface.ip4Netmask);
          if (networkInterface.loopback) {
            if (ip4Netaddress !== networkInterface.ipv4Netaddress) {
              return;
            }
          } else if (this.networkManager.isLoopbackNetaddressV4(ip4Netaddress)) {
            debug("Received packet on interface '%s' which is not coming from the same subnet: %o", name, { address: rinfo.address, netaddress: ip4Netaddress, interface: networkInterface.ipv4 });
            return;
          }
        }
        let packet;
        try {
          packet = DNSPacket_1.DNSPacket.decode(rinfo, buffer);
        } catch (error) {
          debug("Received a malformed packet from %o on interface %s. This might or might not be a problem. Here is the received packet for debugging purposes '%s'. Packet decoding failed with %s", rinfo, name, buffer.toString("base64"), error.stack);
          return;
        }
        if (packet.opcode !== 0) {
          return;
        }
        if (packet.rcode !== 0) {
          return;
        }
        const endpoint = {
          address: rinfo.address,
          port: rinfo.port,
          interface: name + (isIPv6 ? "/6" : "")
        };
        if (packet.type === 0) {
          try {
            this.handler.handleQuery(packet, endpoint);
          } catch (error) {
            console.warn("Error occurred handling incoming (on " + name + ") dns query packet: " + error.stack);
          }
        } else if (packet.type === 1) {
          if (rinfo.port !== _MDNSServer.MDNS_PORT) {
            return;
          }
          try {
            this.handler.handleResponse(packet, endpoint);
          } catch (error) {
            console.warn("Error occurred handling incoming (on " + name + ") dns response packet: " + error.stack);
          }
        }
      }
      static isSilencedSocketError(error) {
        const silenced = error.message.includes("EADDRNOTAVAIL") || error.message.includes("EHOSTDOWN") || error.message.includes("ENETUNREACH") || error.message.includes("EHOSTUNREACH") || error.message.includes("EPERM") || error.message.includes("EINVAL");
        if (silenced) {
          debug("Silenced and ignored error (This is/should not be a problem, this message is only for informational purposes): " + error.message);
        }
        return silenced;
      }
      static logSocketError(name, error) {
        console.warn(`Encountered MDNS socket error on socket '${name}' : ${error.stack}`);
        return;
      }
      handleUpdatedNetworkInterfaces(networkUpdate) {
        if (networkUpdate.removed) {
          for (const networkInterface of networkUpdate.removed) {
            let socket = this.sockets.get(networkInterface.name);
            this.sockets.delete(networkInterface.name);
            this.sentPackets.delete(networkInterface.name);
            if (socket) {
              socket.close();
            }
            socket = this.sockets.get(networkInterface.name + "/6");
            this.sockets.delete(networkInterface.name + "/6");
            this.sentPackets.delete(networkInterface.name + "/6");
            if (socket) {
              socket.close();
            }
          }
        }
        if (networkUpdate.changes) {
          for (const change of networkUpdate.changes) {
            let socket = this.sockets.get(change.name);
            if (!change.outdatedIpv4 && change.updatedIpv4) {
              debug("IPv4 address appeared on changed interface %s (was undefined, now %s). Adding membership.", change.name, change.updatedIpv4);
              if (socket) {
                try {
                  socket.addMembership(_MDNSServer.MULTICAST_IPV4, change.updatedIpv4);
                  socket.setMulticastInterface(change.updatedIpv4);
                } catch (error) {
                  debug("Error adding membership for newly appeared IPv4 on %s: %s", change.name, error.message);
                }
              }
            } else if (change.outdatedIpv4 && !change.updatedIpv4) {
              debug("IPv4 address disappeared on changed interface %s (was %s, now undefined). Dropping membership.", change.name, change.outdatedIpv4);
              if (socket) {
                try {
                  socket.dropMembership(_MDNSServer.MULTICAST_IPV4, change.outdatedIpv4);
                } catch (error) {
                  debug("Error dropping membership for disappeared IPv4 on %s: %s", change.name, error.message);
                }
              }
            } else if (socket && change.outdatedIpv4 && change.updatedIpv4) {
              try {
                socket.dropMembership(_MDNSServer.MULTICAST_IPV4, change.outdatedIpv4);
              } catch (error) {
                debug("Thrown unexpected error when dropping outdated address membership: " + error.message);
              }
              try {
                socket.addMembership(_MDNSServer.MULTICAST_IPV4, change.updatedIpv4);
              } catch (error) {
                debug("Thrown unexpected error when adding new address membership: " + error.message);
              }
              socket.setMulticastInterface(change.updatedIpv4);
            }
            socket = this.sockets.get(change.name + "/6");
            if (socket && change.outdatedIpv6 && change.updatedIpv6) {
              try {
                socket.dropMembership(_MDNSServer.MULTICAST_IPV6, change.outdatedIpv6);
              } catch (error) {
                debug("Thrown unexpected error when dropping outdated address membership: " + error.message);
              }
              try {
                socket.addMembership(_MDNSServer.MULTICAST_IPV6, change.updatedIpv6);
              } catch (error) {
                debug("Thrown unexpected error when adding new address membership: " + error.message);
              }
            }
          }
        }
        if (networkUpdate.added) {
          for (const networkInterface of networkUpdate.added) {
            this.advertiseFamilies.forEach((family) => {
              const socket = this.createDgramSocket(networkInterface.name, true, family === "IPv6" ? "udp6" : "udp4");
              this.bindSocket(socket, networkInterface, family).catch((reason) => {
                console.log("Could not bind detected network interface: " + reason.stack);
              });
            });
          }
        }
      }
    };
    exports2.MDNSServer = MDNSServer;
    MDNSServer.DEFAULT_IP4_HEADER = 20;
    MDNSServer.DEFAULT_IP6_HEADER = 40;
    MDNSServer.UDP_HEADER = 8;
    MDNSServer.MDNS_PORT = 5353;
    MDNSServer.MDNS_TTL = 255;
    MDNSServer.MULTICAST_IPV4 = "224.0.0.251";
    MDNSServer.MULTICAST_IPV6 = "FF02::FB";
    MDNSServer.SEND_TIMEOUT = 200;
    MDNSServer.SENT_PACKETS_TTL = 5e3;
  }
});

// node_modules/@homebridge/ciao/lib/responder/Announcer.js
var require_Announcer = __commonJS({
  "node_modules/@homebridge/ciao/lib/responder/Announcer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Announcer = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var assert_1 = tslib_1.__importDefault(require("assert"));
    var debug_1 = tslib_1.__importDefault(require_src());
    var DNSPacket_1 = require_DNSPacket();
    var MDNSServer_1 = require_MDNSServer();
    var promise_utils_1 = require_promise_utils();
    var debug = (0, debug_1.default)("ciao:Announcer");
    var Announcer = class _Announcer {
      constructor(server, service, options) {
        this.repetitions = 1;
        this.announceIntervalIncreaseFactor = 2;
        this.goodbye = false;
        this.sentAnnouncements = 0;
        this.sentLastAnnouncement = false;
        this.nextInterval = 1e3;
        this.nextAnnouncementTime = 0;
        (0, assert_1.default)(server, "server must be defined");
        (0, assert_1.default)(service, "service must be defined");
        this.server = server;
        this.service = service;
        if (options) {
          if (options.repetitions !== void 0) {
            this.repetitions = options.repetitions;
          }
          if (options.goodbye) {
            this.goodbye = true;
          }
        }
        (0, assert_1.default)(this.repetitions > 0 && this.repetitions <= 8, "repetitions must in [1;8]");
      }
      announce() {
        debug("[%s] Sending %s for service", this.service.getFQDN(), this.goodbye ? "goodbye" : "announcement");
        if (!this.goodbye) {
          this.service.rebuildServiceRecords();
        }
        return this.promise = new Promise((resolve, reject) => {
          this.promiseResolve = resolve;
          this.promiseReject = reject;
          this.timer = setTimeout(this.sendAnnouncement.bind(this), 0);
          this.timer.unref();
          this.nextAnnouncementTime = Date.now();
        });
      }
      async cancel() {
        debug("[%s] Canceling %s", this.service.getFQDN(), this.goodbye ? "goodbye" : "announcement");
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = void 0;
        }
        this.promiseReject(_Announcer.CANCEL_REASON);
        return this.awaitAnnouncement().catch((reason) => {
          if (reason !== _Announcer.CANCEL_REASON) {
            return Promise.reject(reason);
          }
        });
      }
      hasSentLastAnnouncement() {
        return this.sentLastAnnouncement;
      }
      async awaitAnnouncement() {
        await this.promise;
      }
      isSendingGoodbye() {
        return this.goodbye;
      }
      sendAnnouncement() {
        debug("[%s] Sending %s number %d", this.service.getFQDN(), this.goodbye ? "goodbye" : "announcement", this.sentAnnouncements + 1);
        const records = [
          this.service.ptrRecord(),
          ...this.service.subtypePtrRecords(),
          this.service.srvRecord(),
          this.service.txtRecord()
          // A and AAAA records are added below when sending. Which records get added depends on the network the announcement happens for
        ];
        if (this.goodbye) {
          for (const record of records) {
            record.ttl = 0;
          }
        } else {
          records.push(this.service.metaQueryPtrRecord());
        }
        if (this.sentAnnouncements + 1 >= this.repetitions) {
          this.sentLastAnnouncement = true;
        }
        _Announcer.sendResponseAddingAddressRecords(this.server, this.service, records, this.goodbye).then((results) => {
          const failRatio = (0, MDNSServer_1.SendResultFailedRatio)(results);
          if (failRatio === 1) {
            debug((0, MDNSServer_1.SendResultFormatError)(results, `[${this.service.getFQDN()}] Failed to send ${this.goodbye ? "goodbye" : "announcement"} requests`));
            this.promiseReject(new Error(`${this.goodbye ? "Goodbye" : "Announcement"} failed as of socket errors!`));
            return;
          }
          if (failRatio > 0) {
            debug((0, MDNSServer_1.SendResultFormatError)(results, `Some of the ${this.goodbye ? "goodbye" : "announcement"} requests for '${this.service.getFQDN()}' encountered an error`));
          }
          if (this.service.serviceState !== "announcing") {
            debug("[%s] Service is no longer in announcing state. Stopping. (Received %s)", this.service.getFQDN(), this.service.serviceState);
            return;
          }
          this.sentAnnouncements++;
          if (this.sentAnnouncements >= this.repetitions) {
            this.promiseResolve();
          } else {
            this.timer = setTimeout(this.sendAnnouncement.bind(this), this.nextInterval);
            this.timer.unref();
            this.nextAnnouncementTime = Date.now() + this.nextInterval;
            this.nextInterval *= this.announceIntervalIncreaseFactor;
          }
        });
      }
      static sendResponseAddingAddressRecords(server, service, records, goodbye) {
        const promises = [];
        for (const name of server.getBoundInterfaceNames()) {
          if (!service.advertisesOnInterface(name)) {
            continue;
          }
          const answer = records.concat([]);
          const aRecord = service.aRecord(name);
          const aaaaRecord = service.aaaaRecord(name);
          const aaaaRoutableRecord = service.aaaaRoutableRecord(name);
          const aaaaUniqueLocalRecord = service.aaaaUniqueLocalRecord(name);
          const nsecRecord = service.addressNSECRecord();
          const serviceNsecRecord = service.serviceNSECRecord();
          if (aRecord) {
            if (goodbye) {
              aRecord.ttl = 0;
            }
            answer.push(aRecord);
          }
          if (aaaaRecord) {
            if (goodbye) {
              aaaaRecord.ttl = 0;
            }
            answer.push(aaaaRecord);
          }
          if (aaaaRoutableRecord) {
            if (goodbye) {
              aaaaRoutableRecord.ttl = 0;
            }
            answer.push(aaaaRoutableRecord);
          }
          if (aaaaUniqueLocalRecord) {
            if (goodbye) {
              aaaaUniqueLocalRecord.ttl = 0;
            }
            answer.push(aaaaUniqueLocalRecord);
          }
          if (goodbye) {
            nsecRecord.ttl = 0;
            serviceNsecRecord.ttl = 0;
          }
          const additionals = [];
          additionals.push(nsecRecord, serviceNsecRecord);
          const packet = DNSPacket_1.DNSPacket.createDNSResponsePacketsFromRRSet({
            answers: answer,
            additionals
          });
          let sendPromise;
          try {
            sendPromise = server.send(packet, name);
          } catch (error) {
            sendPromise = Promise.resolve({
              status: "rejected",
              interface: name,
              reason: error instanceof Error ? error : new Error(String(error))
            });
          }
          promises.push(Promise.race([
            sendPromise,
            (0, promise_utils_1.PromiseTimeout)(MDNSServer_1.MDNSServer.SEND_TIMEOUT).then(() => ({
              status: "timeout",
              interface: name
            }))
          ]));
        }
        return Promise.all(promises);
      }
    };
    exports2.Announcer = Announcer;
    Announcer.CANCEL_REASON = "CIAO ANNOUNCEMENT CANCELLED";
  }
});

// node_modules/@homebridge/ciao/lib/util/tiebreaking.js
var require_tiebreaking = __commonJS({
  "node_modules/@homebridge/ciao/lib/util/tiebreaking.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TiebreakingResult = void 0;
    exports2.rrComparator = rrComparator;
    exports2.runTiebreaking = runTiebreaking;
    function rrComparator(recordA, recordB) {
      if (recordA.class !== recordB.class) {
        return recordA.class - recordB.class;
      }
      if (recordA.type !== recordB.type) {
        return recordA.type - recordB.type;
      }
      const aData = recordA.getRawData();
      const bData = recordB.getRawData();
      const maxLength = Math.max(aData.length, bData.length);
      for (let i = 0; i < maxLength; i++) {
        if (i >= aData.length && i < bData.length) {
          return -1;
        } else if (i >= bData.length && i < aData.length) {
          return 1;
        }
        const aByte = aData.readUInt8(i);
        const bByte = bData.readUInt8(i);
        if (aByte !== bByte) {
          return aByte < bByte ? -1 : 1;
        }
      }
      return 0;
    }
    var TiebreakingResult;
    (function(TiebreakingResult2) {
      TiebreakingResult2[TiebreakingResult2["OPPONENT"] = -1] = "OPPONENT";
      TiebreakingResult2[TiebreakingResult2["TIE"] = 0] = "TIE";
      TiebreakingResult2[TiebreakingResult2["HOST"] = 1] = "HOST";
    })(TiebreakingResult || (exports2.TiebreakingResult = TiebreakingResult = {}));
    function runTiebreaking(host, opponent) {
      const maxLength = Math.max(host.length, opponent.length);
      for (let i = 0; i < maxLength; i++) {
        if (i >= host.length && i < opponent.length) {
          return -1;
        } else if (i >= opponent.length && i < host.length) {
          return 1;
        }
        const recordComparison = rrComparator(host[i], opponent[i]);
        if (recordComparison !== 0) {
          return recordComparison;
        }
      }
      return 0;
    }
  }
});

// node_modules/@homebridge/ciao/lib/responder/Prober.js
var require_Prober = __commonJS({
  "node_modules/@homebridge/ciao/lib/responder/Prober.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Prober = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var assert_1 = tslib_1.__importDefault(require("assert"));
    var debug_1 = tslib_1.__importDefault(require_src());
    var Question_1 = require_Question();
    var MDNSServer_1 = require_MDNSServer();
    var tiebreaking = tslib_1.__importStar(require_tiebreaking());
    var tiebreaking_1 = require_tiebreaking();
    var PROBE_INTERVAL = 250;
    var LIMITED_PROBE_INTERVAL = 1e3;
    var debug = (0, debug_1.default)("ciao:Prober");
    var Prober = class _Prober {
      constructor(responder, server, service) {
        this.records = [];
        this.currentInterval = PROBE_INTERVAL;
        this.serviceEncounteredNameChange = false;
        this.sentFirstProbeQuery = false;
        this.sentQueriesForCurrentTry = 0;
        this.sentQueries = 0;
        (0, assert_1.default)(responder, "responder must be defined");
        (0, assert_1.default)(server, "server must be defined");
        (0, assert_1.default)(service, "service must be defined");
        this.responder = responder;
        this.server = server;
        this.service = service;
      }
      getService() {
        return this.service;
      }
      /**
       * This method is called to start the actual probing process.
       * Once the service is considered unique on the network and can be announced the promise returns.
       * While probing multiple name changes can happen
       *
       * @returns a promise which returns when the service is considered unique on the network
       */
      probe() {
        debug("Starting to probe for '%s'...", this.service.getFQDN());
        return new Promise((resolve, reject) => {
          this.promiseResolve = resolve;
          this.promiseReject = reject;
          this.timer = setTimeout(this.sendProbeRequest.bind(this), Math.random() * PROBE_INTERVAL);
          this.timer.unref();
        });
      }
      cancel() {
        this.clear();
        this.promiseReject(_Prober.CANCEL_REASON);
      }
      clear() {
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = void 0;
        }
        this.sentFirstProbeQuery = false;
        this.sentQueriesForCurrentTry = 0;
      }
      /**
       * End the current ongoing probing requests. If
       * @param success
       */
      endProbing(success) {
        this.clear();
        if (success) {
          debug("Probing for '%s' finished successfully", this.service.getFQDN());
          this.promiseResolve();
          if (this.serviceEncounteredNameChange) {
            this.service.informAboutNameUpdates();
          }
        }
      }
      sendProbeRequest() {
        if (this.sentQueriesForCurrentTry === 0) {
          this.records = [
            this.service.srvRecord(),
            this.service.txtRecord(),
            this.service.ptrRecord(),
            ...this.service.subtypePtrRecords(),
            ...this.service.allAddressRecords()
            //...this.service.allReverseAddressMappings(),
          ].sort(tiebreaking_1.rrComparator);
          this.records.forEach((record) => record.flushFlag = false);
        }
        if (this.sentQueriesForCurrentTry >= 3) {
          this.endProbing(true);
          return;
        }
        if (this.sentQueries >= 15) {
          this.currentInterval = LIMITED_PROBE_INTERVAL;
        }
        debug("Sending prober query number %d for '%s'...", this.sentQueriesForCurrentTry + 1, this.service.getFQDN());
        (0, assert_1.default)(this.records.length > 0, "Tried sending probing request for zero record length!");
        const questions = [
          // probes SHOULD be sent with unicast response flag as of the RFC
          // MDNServer might overwrite the QU flag to false, as we can't use unicast if there is another responder on the machine
          new Question_1.Question(this.service.getFQDN(), 255, true),
          new Question_1.Question(this.service.getHostname(), 255, true)
        ];
        let broadcast;
        try {
          broadcast = this.server.sendQueryBroadcast({
            questions,
            // TODO certified homekit accessories only include the main service PTR record
            authorities: this.records
            // include records we want to announce in authorities to support Simultaneous Probe Tiebreaking (RFC 6762 8.2.)
          }, this.service);
        } catch (error) {
          debug(`Failed to build probe queries for '${this.service.getFQDN()}': ${error instanceof Error ? error.message : String(error)}`);
          this.endProbing(false);
          this.promiseReject(error instanceof Error ? error : new Error(String(error)));
          return;
        }
        broadcast.then((results) => {
          const failRatio = (0, MDNSServer_1.SendResultFailedRatio)(results);
          if (failRatio === 1) {
            debug((0, MDNSServer_1.SendResultFormatError)(results, `Failed to send probe queries for '${this.service.getFQDN()}'`));
            this.endProbing(false);
            this.promiseReject(new Error("Probing failed as of socket errors!"));
            return;
          }
          if (failRatio > 0) {
            debug((0, MDNSServer_1.SendResultFormatError)(results, `Some of the probe queries for '${this.service.getFQDN()}' encountered an error`));
          }
          if (this.service.serviceState !== "probing") {
            debug("Service '%s' is no longer in probing state. Stopping.", this.service.getFQDN());
            return;
          }
          this.sentFirstProbeQuery = true;
          this.sentQueriesForCurrentTry++;
          this.sentQueries++;
          this.timer = setTimeout(this.sendProbeRequest.bind(this), this.currentInterval);
          this.timer.unref();
          this.checkLocalConflicts();
        }).catch((error) => {
          var _a;
          console.error(`Probing for '${this.service.getFQDN()}' failed unexpectedly: ${(_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : error}`);
        });
      }
      checkLocalConflicts() {
        let containsAnswer = false;
        for (const service of this.responder.getAnnouncedServices()) {
          if (service.getLowerCasedFQDN() === this.service.getLowerCasedFQDN() || service.getLowerCasedHostname() === this.service.getLowerCasedHostname()) {
            containsAnswer = true;
            break;
          }
        }
        if (containsAnswer) {
          debug("Probing for '%s' failed as of local service. Doing a name change", this.service.getFQDN());
          this.handleNameChange();
        }
      }
      handleResponse(packet, endpoint) {
        if (!this.sentFirstProbeQuery || !this.service.advertisesOnInterface(endpoint.interface)) {
          return;
        }
        let containsAnswer = false;
        for (const record of packet.answers.values()) {
          if (record.getLowerCasedName() === this.service.getLowerCasedFQDN() || record.getLowerCasedName() === this.service.getLowerCasedHostname()) {
            containsAnswer = true;
            break;
          }
        }
        for (const record of packet.additionals.values()) {
          if (record.getLowerCasedName() === this.service.getLowerCasedFQDN() || record.getLowerCasedName() === this.service.getLowerCasedHostname()) {
            containsAnswer = true;
            break;
          }
        }
        if (containsAnswer) {
          debug("Probing for '%s' failed. Doing a name change", this.service.getFQDN());
          this.handleNameChange();
        }
      }
      handleNameChange() {
        this.endProbing(false);
        this.service.serviceState = "unannounced";
        this.service.incrementName();
        this.service.serviceState = "probing";
        this.serviceEncounteredNameChange = true;
        this.timer = setTimeout(this.sendProbeRequest.bind(this), 1e3);
        this.timer.unref();
      }
      handleQuery(packet, endpoint) {
        if (!this.sentFirstProbeQuery || !this.service.advertisesOnInterface(endpoint.interface)) {
          return;
        }
        let needsTiebreaking = false;
        for (const question of packet.questions.values()) {
          if (question.getLowerCasedName() === this.service.getLowerCasedFQDN() || question.getLowerCasedName() === this.service.getLowerCasedHostname()) {
            needsTiebreaking = true;
            break;
          }
        }
        if (needsTiebreaking) {
          this.doTiebreaking(packet);
        }
      }
      doTiebreaking(packet) {
        if (!this.sentFirstProbeQuery) {
          return;
        }
        let conflict = packet.authorities.size === 0;
        for (const record of packet.authorities.values()) {
          if (record.getLowerCasedName() === this.service.getLowerCasedFQDN() || record.getLowerCasedName() === this.service.getLowerCasedHostname()) {
            conflict = true;
            break;
          }
        }
        if (!conflict) {
          return;
        }
        const answers = this.records;
        const opponent = Array.from(packet.authorities.values()).sort(tiebreaking.rrComparator);
        const result = tiebreaking.runTiebreaking(answers, opponent);
        if (result === 1) {
          debug("'%s' won the tiebreak. We gonna ignore the other probing request!", this.service.getFQDN());
        } else if (result === -1) {
          debug("'%s' lost the tiebreak. We are waiting a second and try to probe again...", this.service.getFQDN());
          this.endProbing(false);
          this.timer = setTimeout(this.sendProbeRequest.bind(this), 1e3);
          this.timer.unref();
        } else {
        }
      }
    };
    exports2.Prober = Prober;
    Prober.CANCEL_REASON = "CIAO PROBING CANCELLED";
  }
});

// node_modules/@homebridge/ciao/lib/responder/QueryResponse.js
var require_QueryResponse = __commonJS({
  "node_modules/@homebridge/ciao/lib/responder/QueryResponse.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.QueryResponse = void 0;
    var DNSPacket_1 = require_DNSPacket();
    var QueryResponse = class {
      constructor(knownAnswers) {
        this.sharedAnswer = false;
        this.dnsPacket = new DNSPacket_1.DNSPacket({
          type: 1
          /* PacketType.RESPONSE */
        });
        this.knownAnswers = knownAnswers;
      }
      asPacket() {
        return this.dnsPacket;
      }
      asString(udpPayloadSize) {
        return this.dnsPacket.asLoggingString(udpPayloadSize);
      }
      containsSharedAnswer() {
        return this.sharedAnswer;
      }
      addAnswer(...records) {
        let addedAny = false;
        for (const record of records) {
          if (this.isKnownAnswer(record)) {
            continue;
          }
          const added = this.dnsPacket.addAnswers(record);
          if (added) {
            addedAny = true;
            if (!record.flushFlag) {
              this.sharedAnswer = true;
            }
          }
        }
        return addedAny;
      }
      addAdditional(...records) {
        let addedAny = false;
        for (const record of records) {
          if (this.isKnownAnswer(record)) {
            continue;
          }
          if (this.dnsPacket.answers.has(record.asString())) {
            continue;
          }
          const added = this.dnsPacket.addAdditionals(record);
          if (added) {
            addedAny = true;
          }
        }
        return addedAny;
      }
      markLegacyUnicastResponse(id, questions) {
        this.dnsPacket.id = id;
        if (questions) {
          this.dnsPacket.addQuestions(...questions);
        }
        this.dnsPacket.answers.forEach((answers) => {
          answers.flushFlag = false;
          answers.ttl = 10;
        });
        this.dnsPacket.additionals.forEach((answers) => {
          answers.flushFlag = false;
          answers.ttl = 10;
        });
        this.dnsPacket.setLegacyUnicastEncoding(true);
      }
      markTruncated() {
        this.dnsPacket.flags.truncation = true;
      }
      hasAnswers() {
        return this.dnsPacket.answers.size > 0;
      }
      isKnownAnswer(record) {
        if (!this.knownAnswers) {
          return false;
        }
        const knownAnswer = this.knownAnswers.get(record.asString());
        return knownAnswer !== void 0 && knownAnswer.ttl > record.ttl / 2;
      }
      static combineResponses(responses, udpPayloadSize) {
        for (let i = 0; i < responses.length - 1; i++) {
          const current = responses[i];
          const currentPacket = current.dnsPacket;
          const next = responses[i + 1];
          const nextPacket = next.dnsPacket;
          if (currentPacket.canBeCombinedWith(nextPacket, udpPayloadSize)) {
            currentPacket.combineWith(nextPacket);
            responses.splice(i + 1, 1);
            current.sharedAnswer = current.sharedAnswer || next.sharedAnswer;
            i--;
          }
        }
      }
    };
    exports2.QueryResponse = QueryResponse;
  }
});

// node_modules/@homebridge/ciao/lib/responder/QueuedResponse.js
var require_QueuedResponse = __commonJS({
  "node_modules/@homebridge/ciao/lib/responder/QueuedResponse.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.QueuedResponse = void 0;
    var QueuedResponse = class _QueuedResponse {
      constructor(packet, interfaceName) {
        this.timeOfCreation = Date.now();
        this.estimatedTimeToBeSent = 0;
        this.delay = -1;
        this.packet = packet;
        this.interfaceName = interfaceName;
      }
      getPacket() {
        return this.packet;
      }
      /**
       * This method returns the total delay of the represented dns response packet.
       * If this QueuedResponse consists of already combined packets
       * (meaning other packets already got delayed in order to be sent out with this packet),
       * the totalDelay will represent the maximum delay of any contained packet.
       *
       * @returns The total delay.
       */
      getTimeSinceCreation() {
        return Date.now() - this.timeOfCreation;
      }
      getTimeTillSent() {
        return Math.max(0, this.estimatedTimeToBeSent - Date.now());
      }
      calculateRandomDelay() {
        this.delay = Math.random() * 100 + 20;
        this.estimatedTimeToBeSent = Date.now() + this.delay;
      }
      scheduleResponse(callback) {
        this.timer = setTimeout(callback, this.delay);
        this.timer.unref();
      }
      delayWouldBeInTimelyManner(next) {
        const delay = next.estimatedTimeToBeSent - this.timeOfCreation;
        return delay <= _QueuedResponse.MAX_DELAY;
      }
      /**
       * Combines this queue response packet with the {@code next} queued response packet if those can be combined.
       * Packets can be combined if the udpPayloadSize allows for it AND if the current packet
       * won't be delayed more than 500 ms from its time of creation AND the packets get sent on the same interface.
       *
       * @param next - A queued response which is schedule AFTER the current queued response.
       * @returns {@code true} will be returned if the queued response was combined with the specified {@code next} response.
       */
      combineWithNextPacketIfPossible(next) {
        if (this.interfaceName !== next.interfaceName) {
          return false;
        }
        if (!next.packet.canBeCombinedWith(this.packet)) {
          return false;
        }
        next.packet.combineWith(this.packet);
        next.timeOfCreation = Math.min(this.timeOfCreation, next.timeOfCreation);
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = void 0;
        }
        this.delayed = true;
        return true;
      }
      cancel() {
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = void 0;
        }
      }
      combineWithUniqueResponseIfPossible(response, interfaceName) {
        if (this.interfaceName !== interfaceName) {
          return false;
        }
        if (!this.packet.canBeCombinedWith(response.asPacket())) {
          return false;
        }
        this.packet.combineWith(response.asPacket());
        return true;
      }
    };
    exports2.QueuedResponse = QueuedResponse;
    QueuedResponse.MAX_DELAY = 500;
  }
});

// node_modules/@homebridge/ciao/lib/responder/TruncatedQuery.js
var require_TruncatedQuery = __commonJS({
  "node_modules/@homebridge/ciao/lib/responder/TruncatedQuery.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TruncatedQuery = exports2.TruncatedQueryEvent = exports2.TruncatedQueryResult = void 0;
    var events_1 = require("events");
    var TruncatedQueryResult;
    (function(TruncatedQueryResult2) {
      TruncatedQueryResult2[TruncatedQueryResult2["ABORT"] = 1] = "ABORT";
      TruncatedQueryResult2[TruncatedQueryResult2["AGAIN_TRUNCATED"] = 2] = "AGAIN_TRUNCATED";
      TruncatedQueryResult2[TruncatedQueryResult2["FINISHED"] = 3] = "FINISHED";
    })(TruncatedQueryResult || (exports2.TruncatedQueryResult = TruncatedQueryResult = {}));
    var TruncatedQueryEvent;
    (function(TruncatedQueryEvent2) {
      TruncatedQueryEvent2["TIMEOUT"] = "timeout";
    })(TruncatedQueryEvent || (exports2.TruncatedQueryEvent = TruncatedQueryEvent = {}));
    var TruncatedQuery = class extends events_1.EventEmitter {
      constructor(packet) {
        super();
        this.arrivedPackets = 1;
        this.timeOfArrival = Date.now();
        this.packet = packet;
        this.timer = this.resetTimer();
      }
      getPacket() {
        return this.packet;
      }
      getArrivedPacketCount() {
        return this.arrivedPackets;
      }
      getTotalWaitTime() {
        return Date.now() - this.timeOfArrival;
      }
      appendDNSPacket(packet) {
        this.packet.combineWith(packet);
        this.arrivedPackets++;
        if (packet.flags.truncation) {
          const time = Date.now();
          if (time - this.timeOfArrival > 5 * 1e3) {
            return 1;
          }
          this.resetTimer();
          return 2;
        } else {
          clearTimeout(this.timer);
          this.removeAllListeners();
          return 3;
        }
      }
      resetTimer() {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(this.timeout.bind(this), 400 + Math.random() * 100);
        this.timer.unref();
        return this.timer;
      }
      timeout() {
        this.emit(
          "timeout"
          /* TruncatedQueryEvent.TIMEOUT */
        );
        this.removeAllListeners();
      }
    };
    exports2.TruncatedQuery = TruncatedQuery;
  }
});

// node_modules/@homebridge/ciao/lib/util/sorted-array.js
var require_sorted_array = __commonJS({
  "node_modules/@homebridge/ciao/lib/util/sorted-array.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.sortedInsert = sortedInsert;
    function sortedInsert(array, element, comparator) {
      let low = 0;
      let high = array.length - 1;
      let destination = -1;
      while (low < high) {
        const mid = Math.floor((low + high) / 2);
        const comparison = comparator(element, array[mid]);
        if (comparison === 0) {
          destination = mid + 1;
          break;
        }
        if (comparison < 0) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }
      if (array.length === 0) {
        destination = 0;
      } else if (destination < 0) {
        if (comparator(element, array[low]) > 0) {
          destination = low + 1;
        } else {
          destination = low;
        }
      }
      array.splice(destination, 0, element);
    }
  }
});

// node_modules/@homebridge/ciao/lib/Responder.js
var require_Responder = __commonJS({
  "node_modules/@homebridge/ciao/lib/Responder.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Responder = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var assert_1 = tslib_1.__importDefault(require("assert"));
    var debug_1 = tslib_1.__importDefault(require_src());
    var CiaoService_1 = require_CiaoService();
    var DNSPacket_1 = require_DNSPacket();
    var Question_1 = require_Question();
    var AAAARecord_1 = require_AAAARecord();
    var ARecord_1 = require_ARecord();
    var PTRRecord_1 = require_PTRRecord();
    var SRVRecord_1 = require_SRVRecord();
    var TXTRecord_1 = require_TXTRecord();
    var MDNSServer_1 = require_MDNSServer();
    var Announcer_1 = require_Announcer();
    var Prober_1 = require_Prober();
    var QueryResponse_1 = require_QueryResponse();
    var QueuedResponse_1 = require_QueuedResponse();
    var TruncatedQuery_1 = require_TruncatedQuery();
    var errors_1 = require_errors();
    var promise_utils_1 = require_promise_utils();
    var sorted_array_1 = require_sorted_array();
    var debug = (0, debug_1.default)("ciao:Responder");
    var queuedResponseComparator = (a, b) => {
      return a.estimatedTimeToBeSent - b.estimatedTimeToBeSent;
    };
    var ConflictType;
    (function(ConflictType2) {
      ConflictType2[ConflictType2["NO_CONFLICT"] = 0] = "NO_CONFLICT";
      ConflictType2[ConflictType2["CONFLICTING_RDATA"] = 1] = "CONFLICTING_RDATA";
      ConflictType2[ConflictType2["CONFLICTING_TTL"] = 2] = "CONFLICTING_TTL";
    })(ConflictType || (ConflictType = {}));
    var Responder = class _Responder {
      /**
       * Refer to {@link getResponder} in the index file
       *
       * @private should not be used directly. Please use the getResponder method defined in index file.
       */
      static getResponder(options) {
        const optionsString = options ? JSON.stringify(options) : "";
        const responder = this.INSTANCES.get(optionsString);
        if (responder) {
          responder.refCount++;
          return responder;
        } else {
          const responder2 = new _Responder(options);
          this.INSTANCES.set(optionsString, responder2);
          responder2.optionsString = optionsString;
          return responder2;
        }
      }
      constructor(options) {
        this.refCount = 1;
        this.optionsString = "";
        this.bound = false;
        this.announcedServices = /* @__PURE__ */ new Map();
        this.servicePointer = /* @__PURE__ */ new Map();
        this.truncatedQueries = {};
        this.delayedMulticastResponses = [];
        this.server = new MDNSServer_1.MDNSServer(this, options);
        this.promiseChain = this.start();
        this.server.getNetworkManager().on("network-update", this.handleNetworkUpdate.bind(this));
        this.ignoreUnicastResponseFlag = options === null || options === void 0 ? void 0 : options.ignoreUnicastResponseFlag;
        if (options === null || options === void 0 ? void 0 : options.periodicBroadcasts) {
          this.broadcastInterval = setTimeout(this.handlePeriodicBroadcasts.bind(this), 3e4).unref();
        }
      }
      handlePeriodicBroadcasts() {
        this.broadcastInterval = void 0;
        debug("Sending periodic announcement on " + Array.from(this.server.getNetworkManager().getInterfaceMap().keys()).join(", "));
        const boundInterfaceNames = Array.from(this.server.getBoundInterfaceNames());
        for (const networkInterface of this.server.getNetworkManager().getInterfaceMap().values()) {
          const question = new Question_1.Question("_hap._tcp.local.", 12, false);
          let responses4 = [], responses6 = [];
          if (boundInterfaceNames.includes(networkInterface.name)) {
            responses4 = this.answerQuestion(question, {
              port: 5353,
              address: networkInterface.ipv4Netaddress,
              interface: networkInterface.name
            });
          }
          if (boundInterfaceNames.includes(networkInterface.name + "/6")) {
            responses6 = this.answerQuestion(question, {
              port: 5353,
              address: networkInterface.ipv6,
              interface: networkInterface.name + "/6"
            });
          }
          const responses = [...responses4, ...responses6];
          QueryResponse_1.QueryResponse.combineResponses(responses);
          for (const response of responses) {
            if (!response.hasAnswers()) {
              continue;
            }
            this.server.sendResponse(response.asPacket(), networkInterface.name);
          }
        }
        this.broadcastInterval = setTimeout(this.handlePeriodicBroadcasts.bind(this), Math.random() * 3e3 + 27e3).unref();
      }
      /**
       * Creates a new CiaoService instance and links it to this Responder instance.
       *
       * @param {ServiceOptions} options - Defines all information about the service which should be created.
       * @returns The newly created {@link CiaoService} instance can be used to advertise and manage the created service.
       */
      createService(options) {
        const service = new CiaoService_1.CiaoService(this.server.getNetworkManager(), options);
        service.on("publish", this.advertiseService.bind(this, service));
        service.on("unpublish", this.unpublishService.bind(this, service));
        service.on("republish", this.republishService.bind(this, service));
        service.on("records-update", this.handleServiceRecordUpdate.bind(this, service));
        service.on("records-update-interface", this.handleServiceRecordUpdateOnInterface.bind(this, service));
        return service;
      }
      /**
       * This method should be called when you want to unpublish all service exposed by this Responder.
       * This method SHOULD be called before the node application exists, so any host on the
       * network is informed of the shutdown of this machine.
       * Calling the shutdown method is mandatory for a clean termination (sending goodbye packets).
       *
       * The shutdown method must only be called ONCE.
       *
       * @returns The Promise resolves once all goodbye packets were sent
       * (or immediately if any other users have a reference to this Responder instance).
       */
      shutdown() {
        this.refCount--;
        if (this.refCount > 0) {
          return Promise.resolve();
        }
        if (this.currentProber) {
          this.currentProber.cancel();
        }
        if (this.broadcastInterval) {
          clearTimeout(this.broadcastInterval);
        }
        for (const response of this.delayedMulticastResponses) {
          response.cancel();
        }
        this.delayedMulticastResponses.splice(0);
        _Responder.INSTANCES.delete(this.optionsString);
        debug("Shutting down Responder...");
        const promises = [];
        for (const service of this.announcedServices.values()) {
          promises.push(this.unpublishService(service));
        }
        return Promise.all(promises).then(() => {
          this.server.shutdown();
          this.bound = false;
        });
      }
      getAnnouncedServices() {
        return this.announcedServices.values();
      }
      start() {
        if (this.bound) {
          throw new Error("Server is already bound!");
        }
        this.bound = true;
        return this.server.bind();
      }
      advertiseService(service, callback) {
        if (service.serviceState === "announced") {
          throw new Error("Can't publish a service that is already announced. Received " + service.serviceState + " for service " + service.getFQDN());
        } else if (service.serviceState === "probing") {
          return this.promiseChain.then(() => {
            if (service.currentAnnouncer) {
              return service.currentAnnouncer.awaitAnnouncement();
            }
          });
        } else if (service.serviceState === "announcing") {
          (0, assert_1.default)(service.currentAnnouncer, "Service is in state ANNOUNCING though has no linked announcer!");
          if (service.currentAnnouncer.isSendingGoodbye()) {
            return service.currentAnnouncer.awaitAnnouncement().then(() => this.advertiseService(service, callback));
          } else {
            return service.currentAnnouncer.cancel().then(() => this.advertiseService(service, callback));
          }
        }
        debug("[%s] Going to advertise service...", service.getFQDN());
        this.promiseChain = this.promiseChain.then(() => {
          if (service.isDestroyed()) {
            throw Prober_1.Prober.CANCEL_REASON;
          }
          service.rebuildServiceRecords();
          return this.probe(service);
        });
        return this.promiseChain.then(() => {
          if (service.isDestroyed()) {
            service.serviceState = "unannounced";
            callback();
            return;
          }
          this.announce(service).catch((reason) => {
            debug(`[${service.getFQDN()}] failed announcing with reason: ${reason}. Trying again in 2 seconds!`);
            return (0, promise_utils_1.PromiseTimeout)(2e3).then(() => this.advertiseService(service, () => {
            }));
          }).catch((error) => {
            var _a;
            console.error(`[${service.getFQDN()}] giving up advertising after retry: ${(_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : error}`);
          });
          callback();
        }, (reason) => {
          if (reason === Prober_1.Prober.CANCEL_REASON) {
            callback();
          } else {
            debug(`[${service.getFQDN()}] failed probing with reason: ${reason}. Trying again in 2 seconds!`);
            return (0, promise_utils_1.PromiseTimeout)(2e3).then(() => this.advertiseService(service, callback));
          }
        });
      }
      async republishService(service, callback, delayAnnounce = false) {
        if (service.serviceState !== "announced" && service.serviceState !== "announcing") {
          throw new Error("Can't unpublish a service which isn't announced yet. Received " + service.serviceState + " for service " + service.getFQDN());
        }
        debug("[%s] Readvertising service...", service.getFQDN());
        if (service.serviceState === "announcing") {
          (0, assert_1.default)(service.currentAnnouncer, "Service is in state ANNOUNCING though has no linked announcer!");
          const promise = service.currentAnnouncer.isSendingGoodbye() ? service.currentAnnouncer.awaitAnnouncement() : service.currentAnnouncer.cancel();
          return promise.then(() => this.advertiseService(service, callback));
        }
        this.clearService(service);
        service.serviceState = "unannounced";
        if (delayAnnounce) {
          return (0, promise_utils_1.PromiseTimeout)(1e3).then(() => this.advertiseService(service, callback));
        } else {
          return this.advertiseService(service, callback);
        }
      }
      unpublishService(service, callback) {
        if (service.serviceState === "unannounced") {
          throw new Error("Can't unpublish a service which isn't announced yet. Received " + service.serviceState + " for service " + service.getFQDN());
        }
        if (service.serviceState === "announced" || service.serviceState === "announcing") {
          if (service.serviceState === "announcing") {
            (0, assert_1.default)(service.currentAnnouncer, "Service is in state ANNOUNCING though has no linked announcer!");
            if (service.currentAnnouncer.isSendingGoodbye()) {
              return service.currentAnnouncer.awaitAnnouncement();
            }
            return service.currentAnnouncer.cancel().then(() => {
              service.serviceState = "announced";
              return this.unpublishService(service, callback);
            });
          }
          debug("[%s] Removing service from the network", service.getFQDN());
          this.clearService(service);
          service.serviceState = "unannounced";
          let promise = this.goodbye(service);
          if (callback) {
            promise = promise.then(() => callback(), (reason) => {
              console.log(`[${service.getFQDN()}] failed goodbye with reason: ${reason}.`);
              callback();
            });
          }
          return promise;
        } else if (service.serviceState === "probing") {
          debug("[%s] Canceling probing", service.getFQDN());
          if (this.currentProber && this.currentProber.getService() === service) {
            this.currentProber.cancel();
            this.currentProber = void 0;
          }
          service.serviceState = "unannounced";
        }
        if (typeof callback === "function") {
          callback();
        }
        return Promise.resolve();
      }
      clearService(service) {
        const serviceFQDN = service.getLowerCasedFQDN();
        const typePTR = service.getLowerCasedTypePTR();
        const subtypePTRs = service.getLowerCasedSubtypePTRs();
        this.removePTR(_Responder.SERVICE_TYPE_ENUMERATION_NAME, typePTR);
        this.removePTR(typePTR, serviceFQDN);
        if (subtypePTRs) {
          for (const ptr of subtypePTRs) {
            this.removePTR(ptr, serviceFQDN);
          }
        }
        this.announcedServices.delete(service.getLowerCasedFQDN());
      }
      addPTR(ptr, name) {
        const names = this.servicePointer.get(ptr);
        if (names) {
          if (!names.includes(name)) {
            names.push(name);
          }
        } else {
          this.servicePointer.set(ptr, [name]);
        }
      }
      removePTR(ptr, name) {
        const names = this.servicePointer.get(ptr);
        if (names) {
          const index = names.indexOf(name);
          if (index !== -1) {
            names.splice(index, 1);
          }
          if (names.length === 0) {
            this.servicePointer.delete(ptr);
          }
        }
      }
      probe(service) {
        if (service.serviceState !== "unannounced") {
          throw new Error("Can't probe for a service which is announced already. Received " + service.serviceState + " for service " + service.getFQDN());
        }
        service.serviceState = "probing";
        (0, assert_1.default)(this.currentProber === void 0, "Tried creating new Prober when there already was one active!");
        this.currentProber = new Prober_1.Prober(this, this.server, service);
        return this.currentProber.probe().then(() => {
          this.currentProber = void 0;
          service.serviceState = "probed";
        }, (reason) => {
          service.serviceState = "unannounced";
          this.currentProber = void 0;
          return Promise.reject(reason);
        });
      }
      announce(service) {
        if (service.serviceState !== "probed") {
          throw new Error("Cannot announce service which was not probed unique. Received " + service.serviceState + " for service " + service.getFQDN());
        }
        (0, assert_1.default)(service.currentAnnouncer === void 0, "Service " + service.getFQDN() + " is already announcing!");
        service.serviceState = "announcing";
        const announcer = new Announcer_1.Announcer(this.server, service, {
          repetitions: 3
        });
        service.currentAnnouncer = announcer;
        const serviceFQDN = service.getLowerCasedFQDN();
        const typePTR = service.getLowerCasedTypePTR();
        const subtypePTRs = service.getLowerCasedSubtypePTRs();
        this.addPTR(_Responder.SERVICE_TYPE_ENUMERATION_NAME, typePTR);
        this.addPTR(typePTR, serviceFQDN);
        if (subtypePTRs) {
          for (const ptr of subtypePTRs) {
            this.addPTR(ptr, serviceFQDN);
          }
        }
        this.announcedServices.set(serviceFQDN, service);
        return announcer.announce().then(() => {
          service.serviceState = "announced";
          service.currentAnnouncer = void 0;
        }, (reason) => {
          service.serviceState = "unannounced";
          service.currentAnnouncer = void 0;
          this.clearService(service);
          if (reason !== Announcer_1.Announcer.CANCEL_REASON) {
            return Promise.reject(reason);
          }
        });
      }
      handleServiceRecordUpdate(service, response, callback) {
        var _a;
        if (service.serviceState !== "announced") {
          throw new Error("Cannot update txt of service which is not announced yet. Received " + service.serviceState + " for service " + service.getFQDN());
        }
        debug("[%s] Updating %d record(s) for given service!", service.getFQDN(), response.answers.length + (((_a = response.additionals) === null || _a === void 0 ? void 0 : _a.length) || 0));
        this.server.sendResponseBroadcast(response, service).then((results) => {
          const failRatio = (0, MDNSServer_1.SendResultFailedRatio)(results);
          if (failRatio === 1) {
            console.log((0, MDNSServer_1.SendResultFormatError)(results, `Failed to send records update for '${service.getFQDN()}'`));
            if (callback) {
              callback(new Error("Updating records failed as of socket errors!"));
            }
            return;
          }
          if (failRatio > 0) {
            debug((0, MDNSServer_1.SendResultFormatError)(results, `Some of the record updates for '${service.getFQDN()}' failed`));
          }
          if (callback) {
            callback();
          }
        }, (reason) => {
          var _a2;
          console.log(`[${service.getFQDN()}] failed to broadcast records update: ${(_a2 = reason === null || reason === void 0 ? void 0 : reason.message) !== null && _a2 !== void 0 ? _a2 : reason}`);
          if (callback) {
            callback(reason instanceof Error ? reason : new Error(String(reason)));
          }
        });
      }
      handleServiceRecordUpdateOnInterface(service, name, records, callback) {
        if (service.serviceState !== "announced") {
          throw new Error("Cannot update txt of service which is not announced yet. Received " + service.serviceState + " for service " + service.getFQDN());
        }
        debug("[%s] Updating %d record(s) for given service on interface %s!", service.getFQDN(), records.length, name);
        const packet = DNSPacket_1.DNSPacket.createDNSResponsePacketsFromRRSet({ answers: records });
        this.server.sendResponse(packet, name, callback);
      }
      goodbye(service) {
        (0, assert_1.default)(service.currentAnnouncer === void 0, "Service " + service.getFQDN() + " is already announcing!");
        service.serviceState = "announcing";
        const announcer = new Announcer_1.Announcer(this.server, service, {
          repetitions: 1,
          goodbye: true
        });
        service.currentAnnouncer = announcer;
        return announcer.announce().then(() => {
          service.serviceState = "unannounced";
          service.currentAnnouncer = void 0;
        }, (reason) => {
          service.serviceState = "unannounced";
          service.currentAnnouncer = void 0;
          if (reason !== Announcer_1.Announcer.CANCEL_REASON) {
            return Promise.reject(reason);
          }
        });
      }
      handleNetworkUpdate(change) {
        for (const service of this.announcedServices.values()) {
          service.handleNetworkInterfaceUpdate(change);
        }
      }
      /**
       * @private method called by the MDNSServer when an incoming query needs to be handled
       */
      handleQuery(packet, endpoint) {
        const start = Date.now();
        const endpointId = endpoint.address + ":" + endpoint.port + ":" + endpoint.interface;
        const previousQuery = this.truncatedQueries[endpointId];
        if (previousQuery) {
          const truncatedQueryResult = previousQuery.appendDNSPacket(packet);
          switch (truncatedQueryResult) {
            case 1:
              delete this.truncatedQueries[endpointId];
              debug("[%s] Aborting to wait for more truncated queries. Waited a total of %d ms receiving %d queries", endpointId, previousQuery.getTotalWaitTime(), previousQuery.getArrivedPacketCount());
              return;
            case 2:
              debug("[%s] Received a query marked as truncated, waiting for more to arrive", endpointId);
              return;
            // wait for the next packet
            case 3:
              delete this.truncatedQueries[endpointId];
              packet = previousQuery.getPacket();
              debug("[%s] Last part of the truncated query arrived. Received %d packets taking a total of %d ms", endpointId, previousQuery.getArrivedPacketCount(), previousQuery.getTotalWaitTime());
              break;
          }
        } else if (packet.flags.truncation) {
          debug("Received truncated query from " + JSON.stringify(endpoint) + " waiting for more to come!");
          const truncatedQuery = new TruncatedQuery_1.TruncatedQuery(packet);
          this.truncatedQueries[endpointId] = truncatedQuery;
          truncatedQuery.on("timeout", () => {
            debug("[%s] Timeout passed since the last truncated query was received. Discarding %d packets received in %d ms.", endpointId, truncatedQuery.getArrivedPacketCount(), truncatedQuery.getTotalWaitTime());
            delete this.truncatedQueries[endpointId];
          });
          return;
        }
        const isUnicastQuerier = endpoint.port !== MDNSServer_1.MDNSServer.MDNS_PORT;
        const isProbeQuery = packet.authorities.size > 0;
        let udpPayloadSize = void 0;
        for (const record of packet.additionals.values()) {
          if (record.type === 41) {
            udpPayloadSize = record.udpPayloadSize;
            break;
          }
        }
        const multicastResponses = [];
        const unicastResponses = [];
        packet.questions.forEach((question) => {
          const responses = this.answerQuestion(question, endpoint, packet.answers);
          if (isUnicastQuerier || question.unicastResponseFlag && !this.ignoreUnicastResponseFlag) {
            unicastResponses.push(...responses);
          } else {
            multicastResponses.push(...responses);
          }
        });
        if (this.currentProber) {
          this.currentProber.handleQuery(packet, endpoint);
        }
        if (isUnicastQuerier) {
          for (let i = 0; i < unicastResponses.length; i++) {
            const response = unicastResponses[i];
            response.markLegacyUnicastResponse(packet.id, i === 0 ? Array.from(packet.questions.values()) : void 0);
          }
        }
        QueryResponse_1.QueryResponse.combineResponses(multicastResponses, udpPayloadSize);
        QueryResponse_1.QueryResponse.combineResponses(unicastResponses, udpPayloadSize);
        if (isUnicastQuerier && unicastResponses.length > 1) {
          unicastResponses.splice(1, unicastResponses.length - 1);
          unicastResponses[0].markTruncated();
        }
        for (const unicastResponse of unicastResponses) {
          if (!unicastResponse.hasAnswers()) {
            continue;
          }
          this.server.sendResponse(unicastResponse.asPacket(), endpoint);
          const time = Date.now() - start;
          debug("Sending response via unicast to %s (took %d ms): %s", JSON.stringify(endpoint), time, unicastResponse.asString(udpPayloadSize));
        }
        for (const multicastResponse of multicastResponses) {
          if (!multicastResponse.hasAnswers()) {
            continue;
          }
          if ((multicastResponse.containsSharedAnswer() || packet.questions.size > 1) && !isProbeQuery) {
            const time = Date.now() - start;
            this.enqueueDelayedMulticastResponse(multicastResponse.asPacket(), endpoint.interface, time);
          } else {
            let sentWithLaterPacket = false;
            for (let i = 0; i < this.delayedMulticastResponses.length; i++) {
              const delayedResponse = this.delayedMulticastResponses[i];
              if (delayedResponse.getTimeTillSent() > QueuedResponse_1.QueuedResponse.MAX_DELAY) {
                break;
              }
              if (delayedResponse.combineWithUniqueResponseIfPossible(multicastResponse, endpoint.interface)) {
                const time = Date.now() - start;
                sentWithLaterPacket = true;
                debug("Multicast response on interface %s containing unique records (took %d ms) was combined with response which is sent out later", endpoint.interface, time);
                break;
              }
            }
            if (!sentWithLaterPacket) {
              this.server.sendResponse(multicastResponse.asPacket(), endpoint.interface);
              const time = Date.now() - start;
              debug("Sending response via multicast on network %s (took %d ms): %s", endpoint.interface, time, multicastResponse.asString(udpPayloadSize));
            }
          }
        }
      }
      /**
       * @private method called by the MDNSServer when an incoming response needs to be handled
       */
      handleResponse(packet, endpoint) {
        if (this.currentProber) {
          this.currentProber.handleResponse(packet, endpoint);
        }
        for (const service of this.announcedServices.values()) {
          let conflictingRData = false;
          let ttlConflicts = 0;
          for (const record of packet.answers.values()) {
            const type = _Responder.checkRecordConflictType(service, record, endpoint);
            if (type === 1) {
              conflictingRData = true;
              break;
            } else if (type === 2) {
              ttlConflicts++;
            }
          }
          if (!conflictingRData) {
            for (const record of packet.additionals.values()) {
              const type = _Responder.checkRecordConflictType(service, record, endpoint);
              if (type === 1) {
                conflictingRData = true;
                break;
              } else if (type === 2) {
                ttlConflicts++;
              }
            }
          }
          if (conflictingRData) {
            this.republishService(service, (error) => {
              if (error) {
                console.log(`FATAL Error occurred trying to resolve conflict for service ${service.getFQDN()}! We can't recover from this!`);
                console.log(error.stack);
                process.exit(1);
              }
            }, true);
          } else if (ttlConflicts && !service.currentAnnouncer) {
            service.serviceState = "announcing";
            const announcer = new Announcer_1.Announcer(this.server, service, {
              repetitions: 1
              // we send exactly one packet to correct any ttl values in neighbouring caches
            });
            service.currentAnnouncer = announcer;
            announcer.announce().then(() => {
              service.currentAnnouncer = void 0;
              service.serviceState = "announced";
            }, (reason) => {
              service.currentAnnouncer = void 0;
              service.serviceState = "announced";
              if (reason === Announcer_1.Announcer.CANCEL_REASON) {
                return;
              }
              console.warn("When trying to resolve a ttl conflict on the network, we were unable to send our response packet: " + reason.message);
            });
          }
        }
      }
      static checkRecordConflictType(service, record, endpoint) {
        if (!service.advertisesOnInterface(endpoint.interface)) {
          return 0;
        }
        const recordName = record.getLowerCasedName();
        if (recordName === service.getLowerCasedFQDN()) {
          if (record.type === 33) {
            const srvRecord = record;
            if (srvRecord.getLowerCasedHostname() !== service.getLowerCasedHostname()) {
              debug("[%s] Noticed conflicting record on the network. SRV with hostname: %s", service.getFQDN(), srvRecord.hostname);
              return 1;
            } else if (srvRecord.port !== service.getPort()) {
              debug("[%s] Noticed conflicting record on the network. SRV with port: %s", service.getFQDN(), srvRecord.port);
              return 1;
            }
            if (srvRecord.ttl < SRVRecord_1.SRVRecord.DEFAULT_TTL / 2) {
              return 2;
            }
          } else if (record.type === 16) {
            const txtRecord = record;
            const txt = service.getTXT();
            if (txt.length !== txtRecord.txt.length) {
              debug("[%s] Noticed conflicting record on the network. TXT with differing data length", service.getFQDN());
              return 1;
            }
            for (let i = 0; i < txt.length; i++) {
              const buffer0 = txt[i];
              const buffer1 = txtRecord.txt[i];
              if (Buffer.compare(buffer0, buffer1) !== 0) {
                debug("[%s] Noticed conflicting record on the network. TXT with differing data.", service.getFQDN());
                return 1;
              }
            }
            if (txtRecord.ttl < TXTRecord_1.TXTRecord.DEFAULT_TTL / 2) {
              return 2;
            }
          }
        } else if (recordName === service.getLowerCasedHostname()) {
          if (record.type === 1) {
            const aRecord = record;
            if (!service.hasAddress(aRecord.ipAddress)) {
              debug("[%s] Noticed conflicting record on the network. A with ip address: %s", service.getFQDN(), aRecord.ipAddress);
              return 1;
            }
            if (aRecord.ttl < ARecord_1.ARecord.DEFAULT_TTL / 2) {
              return 2;
            }
          } else if (record.type === 28) {
            const aaaaRecord = record;
            if (!service.hasAddress(aaaaRecord.ipAddress)) {
              debug("[%s] Noticed conflicting record on the network. AAAA with ip address: %s", service.getFQDN(), aaaaRecord.ipAddress);
              return 1;
            }
            if (aaaaRecord.ttl < AAAARecord_1.AAAARecord.DEFAULT_TTL / 2) {
              return 2;
            }
          }
        } else if (record.type === 12) {
          const ptrRecord = record;
          if (recordName === service.getLowerCasedTypePTR()) {
            if (ptrRecord.getLowerCasedPTRName() === service.getLowerCasedFQDN() && ptrRecord.ttl < PTRRecord_1.PTRRecord.DEFAULT_TTL / 2) {
              return 2;
            }
          } else if (recordName === _Responder.SERVICE_TYPE_ENUMERATION_NAME) {
          } else {
            const subTypes = service.getLowerCasedSubtypePTRs();
            if (subTypes && subTypes.includes(recordName) && ptrRecord.getLowerCasedPTRName() === service.getLowerCasedFQDN() && ptrRecord.ttl < PTRRecord_1.PTRRecord.DEFAULT_TTL / 2) {
              return 2;
            }
          }
        }
        return 0;
      }
      enqueueDelayedMulticastResponse(packet, interfaceName, time) {
        const response = new QueuedResponse_1.QueuedResponse(packet, interfaceName);
        response.calculateRandomDelay();
        (0, sorted_array_1.sortedInsert)(this.delayedMulticastResponses, response, queuedResponseComparator);
        for (let i = 0; i < this.delayedMulticastResponses.length; i++) {
          const response0 = this.delayedMulticastResponses[i];
          for (let j = i + 1; j < this.delayedMulticastResponses.length; j++) {
            const response1 = this.delayedMulticastResponses[j];
            if (!response0.delayWouldBeInTimelyManner(response1)) {
              break;
            }
            if (response0.combineWithNextPacketIfPossible(response1)) {
              const index = this.delayedMulticastResponses.indexOf(response0);
              if (index !== -1) {
                this.delayedMulticastResponses.splice(index, 1);
              }
              i--;
              break;
            }
          }
        }
        if (!response.delayed) {
          response.scheduleResponse(() => {
            const index = this.delayedMulticastResponses.indexOf(response);
            if (index !== -1) {
              this.delayedMulticastResponses.splice(index, 1);
            }
            try {
              this.server.sendResponse(response.getPacket(), interfaceName);
              debug("Sending (delayed %dms) response via multicast on network interface %s (took %d ms): %s", Math.round(response.getTimeSinceCreation()), interfaceName, time, response.getPacket().asLoggingString());
            } catch (error) {
              if (error.name === errors_1.ERR_INTERFACE_NOT_FOUND) {
                debug("Multicast response (delayed %dms) was cancelled as the network interface %s is no longer available!", Math.round(response.getTimeSinceCreation()), interfaceName);
              } else {
                throw error;
              }
            }
          });
        }
      }
      answerQuestion(question, endpoint, knownAnswers) {
        if (question.class !== 1 && question.class !== 255) {
          return [];
        }
        const serviceResponses = [];
        let metaQueryResponse = void 0;
        if (question.type === 12 || question.type === 255 || question.type === 5) {
          const destinations = this.servicePointer.get(question.getLowerCasedName());
          if (destinations) {
            for (const data of destinations) {
              const service = this.announcedServices.get(data);
              if (service) {
                if (service.advertisesOnInterface(endpoint.interface)) {
                  const response = _Responder.answerServiceQuestion(service, question, endpoint, knownAnswers);
                  if (response.hasAnswers()) {
                    serviceResponses.push(response);
                  }
                }
              } else {
                if (!metaQueryResponse) {
                  metaQueryResponse = new QueryResponse_1.QueryResponse(knownAnswers);
                  serviceResponses.unshift(metaQueryResponse);
                }
                metaQueryResponse.addAnswer(new PTRRecord_1.PTRRecord(question.name, data));
              }
            }
            return serviceResponses;
          }
        }
        for (const service of this.announcedServices.values()) {
          if (!service.advertisesOnInterface(endpoint.interface)) {
            continue;
          }
          const response = _Responder.answerServiceQuestion(service, question, endpoint, knownAnswers);
          if (response.hasAnswers()) {
            serviceResponses.push(response);
          }
        }
        return serviceResponses;
      }
      static answerServiceQuestion(service, question, endpoint, knownAnswers) {
        const response = new QueryResponse_1.QueryResponse(knownAnswers);
        const loweredQuestionName = question.getLowerCasedName();
        const askingAny = question.type === 255 || question.type === 5;
        const addAnswer = response.addAnswer.bind(response);
        const addAdditional = response.addAdditional.bind(response);
        if (loweredQuestionName === service.getLowerCasedTypePTR()) {
          if (askingAny || question.type === 12) {
            const added = response.addAnswer(service.ptrRecord());
            if (added) {
              response.addAdditional(service.txtRecord(), service.srvRecord());
              this.addAddressRecords(service, endpoint, 1, addAdditional);
              this.addAddressRecords(service, endpoint, 28, addAdditional);
              response.addAdditional(service.serviceNSECRecord(), service.addressNSECRecord());
            }
          }
        } else if (loweredQuestionName === service.getLowerCasedFQDN()) {
          if (askingAny) {
            response.addAnswer(service.txtRecord());
            const addedSrv = response.addAnswer(service.srvRecord());
            if (addedSrv) {
              this.addAddressRecords(service, endpoint, 1, addAdditional);
              this.addAddressRecords(service, endpoint, 28, addAdditional);
              response.addAdditional(service.serviceNSECRecord(), service.addressNSECRecord());
            }
          } else if (question.type === 33) {
            const added = response.addAnswer(service.srvRecord());
            if (added) {
              this.addAddressRecords(service, endpoint, 1, addAdditional);
              this.addAddressRecords(service, endpoint, 28, addAdditional);
              response.addAdditional(service.serviceNSECRecord(true), service.addressNSECRecord());
            }
          } else if (question.type === 16) {
            response.addAnswer(service.txtRecord());
            response.addAdditional(service.serviceNSECRecord());
          }
        } else if (loweredQuestionName === service.getLowerCasedHostname() || loweredQuestionName + "local." === service.getLowerCasedHostname()) {
          if (askingAny) {
            this.addAddressRecords(service, endpoint, 1, addAnswer);
            this.addAddressRecords(service, endpoint, 28, addAnswer);
            response.addAdditional(service.addressNSECRecord());
          } else if (question.type === 1) {
            const added = this.addAddressRecords(service, endpoint, 1, addAnswer);
            if (added) {
              this.addAddressRecords(service, endpoint, 28, addAdditional);
            }
            response.addAdditional(service.addressNSECRecord());
          } else if (question.type === 28) {
            const added = this.addAddressRecords(service, endpoint, 28, addAnswer);
            if (added) {
              this.addAddressRecords(service, endpoint, 1, addAdditional);
            }
            response.addAdditional(service.addressNSECRecord());
          }
        } else if (service.getLowerCasedSubtypePTRs()) {
          if (askingAny || question.type === 12) {
            const dnsLowerSubTypes = service.getLowerCasedSubtypePTRs();
            const index = dnsLowerSubTypes.indexOf(loweredQuestionName);
            if (index !== -1) {
              const records = service.subtypePtrRecords();
              const record = records[index];
              (0, assert_1.default)(loweredQuestionName === record.name, "Question Name didn't match selected sub type ptr record!");
              const added = response.addAnswer(record);
              if (added) {
                response.addAdditional(service.txtRecord(), service.srvRecord());
                this.addAddressRecords(service, endpoint, 1, addAdditional);
                this.addAddressRecords(service, endpoint, 28, addAdditional);
                response.addAdditional(service.serviceNSECRecord(), service.addressNSECRecord());
              }
            }
          }
        }
        return response;
      }
      /**
       * This method is a helper method to reduce the complexity inside {@link answerServiceQuestion}.
       * The method calculates which A and AAAA records to be added for a given {@code endpoint} using
       * the records from the provided {@code service}.
       * It will add the records by calling the provided {@code dest} method.
       *
       * @param {CiaoService} service - service which records to be use
       * @param {EndpointInfo} endpoint - endpoint information providing the interface
       * @param {RType.A | RType.AAAA} type - defines the type of records to be added
       * @param {RecordAddMethod} dest - defines the destination which the records should be added
       * @returns true if any records got added
       */
      static addAddressRecords(service, endpoint, type, dest) {
        const endpointInterface = endpoint.interface.endsWith("/6") ? endpoint.interface.slice(0, -2) : endpoint.interface;
        if (type === 1) {
          const record = service.aRecord(endpointInterface);
          return record ? dest(record) : false;
        } else if (type === 28) {
          const record = service.aaaaRecord(endpointInterface);
          const routableRecord = service.aaaaRoutableRecord(endpointInterface);
          const ulaRecord = service.aaaaUniqueLocalRecord(endpointInterface);
          let addedAny = false;
          if (record) {
            addedAny = dest(record);
          }
          if (routableRecord) {
            const added = dest(routableRecord);
            addedAny = addedAny || added;
          }
          if (ulaRecord) {
            const added = dest(ulaRecord);
            addedAny = addedAny || added;
          }
          return addedAny;
        } else {
          assert_1.default.fail("Illegal argument!");
        }
      }
    };
    exports2.Responder = Responder;
    Responder.SERVICE_TYPE_ENUMERATION_NAME = "_services._dns-sd._udp.local.";
    Responder.INSTANCES = /* @__PURE__ */ new Map();
  }
});

// node_modules/@homebridge/ciao/lib/index.js
var require_lib = __commonJS({
  "node_modules/@homebridge/ciao/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Protocol = void 0;
    exports2.getResponder = getResponder2;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    require_register();
    var captured_debug_env_1 = require_captured_debug_env();
    var debug_1 = tslib_1.__importDefault(require_src());
    var prerelease_debug_1 = require_prerelease_debug();
    var version = require_package().version;
    var prereleaseNamespaces = (0, prerelease_debug_1.prereleaseDebugNamespaces)(version, captured_debug_env_1.capturedDebugEnv, !!process.env.BCT);
    if (prereleaseNamespaces) {
      debug_1.default.enable(prereleaseNamespaces);
    }
    require_records();
    var Responder_1 = require_Responder();
    tslib_1.__exportStar(require_CiaoService(), exports2);
    tslib_1.__exportStar(require_Responder(), exports2);
    function printInitInfo() {
      const debug = (0, debug_1.default)("ciao:init");
      debug("Loading ciao v" + version + "...");
    }
    printInitInfo();
    var Protocol;
    (function(Protocol2) {
      Protocol2["TCP"] = "tcp";
      Protocol2["UDP"] = "udp";
    })(Protocol || (exports2.Protocol = Protocol = {}));
    function getResponder2(options) {
      return Responder_1.Responder.getResponder(options);
    }
    exports2.default = {
      getResponder: getResponder2
    };
  }
});

// src/mdns.ts
var mdns_exports = {};
__export(mdns_exports, {
  getResponder: () => getResponder
});
module.exports = __toCommonJS(mdns_exports);
var import_ciao = __toESM(require_lib());
function getResponder(options, onError) {
  const responder = (0, import_ciao.getResponder)(options);
  const server = responder.server;
  const bind = server.bindSocket;
  server.bindSocket = function(socket, network, family) {
    if (family === "IPv6") {
      const addMembership = socket.addMembership;
      socket.addMembership = (group) => addMembership.call(socket, group, `::%${network.name}`);
    }
    return bind.call(this, socket, network, family).catch((error) => {
      onError(error);
      throw error;
    });
  };
  return responder;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getResponder
});
