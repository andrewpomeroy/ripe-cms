(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from2, except, desc) => {
    if (from2 && typeof from2 === "object" || typeof from2 === "function") {
      for (let key of __getOwnPropNames(from2))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // node_modules/react-is/cjs/react-is.development.js
  var require_react_is_development = __commonJS({
    "node_modules/react-is/cjs/react-is.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var hasSymbol = typeof Symbol === "function" && Symbol.for;
          var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
          var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
          var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
          var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
          var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
          var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
          var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
          var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
          var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
          var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
          var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
          var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
          var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
          var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
          var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
          var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
          var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
          var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
          function isValidElementType(type) {
            return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
          }
          function typeOf(object) {
            if (typeof object === "object" && object !== null) {
              var $$typeof = object.$$typeof;
              switch ($$typeof) {
                case REACT_ELEMENT_TYPE:
                  var type = object.type;
                  switch (type) {
                    case REACT_ASYNC_MODE_TYPE:
                    case REACT_CONCURRENT_MODE_TYPE:
                    case REACT_FRAGMENT_TYPE:
                    case REACT_PROFILER_TYPE:
                    case REACT_STRICT_MODE_TYPE:
                    case REACT_SUSPENSE_TYPE:
                      return type;
                    default:
                      var $$typeofType = type && type.$$typeof;
                      switch ($$typeofType) {
                        case REACT_CONTEXT_TYPE:
                        case REACT_FORWARD_REF_TYPE:
                        case REACT_LAZY_TYPE:
                        case REACT_MEMO_TYPE:
                        case REACT_PROVIDER_TYPE:
                          return $$typeofType;
                        default:
                          return $$typeof;
                      }
                  }
                case REACT_PORTAL_TYPE:
                  return $$typeof;
              }
            }
            return void 0;
          }
          var AsyncMode = REACT_ASYNC_MODE_TYPE;
          var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
          var ContextConsumer = REACT_CONTEXT_TYPE;
          var ContextProvider = REACT_PROVIDER_TYPE;
          var Element = REACT_ELEMENT_TYPE;
          var ForwardRef = REACT_FORWARD_REF_TYPE;
          var Fragment = REACT_FRAGMENT_TYPE;
          var Lazy = REACT_LAZY_TYPE;
          var Memo = REACT_MEMO_TYPE;
          var Portal = REACT_PORTAL_TYPE;
          var Profiler = REACT_PROFILER_TYPE;
          var StrictMode = REACT_STRICT_MODE_TYPE;
          var Suspense = REACT_SUSPENSE_TYPE;
          var hasWarnedAboutDeprecatedIsAsyncMode = false;
          function isAsyncMode(object) {
            {
              if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                hasWarnedAboutDeprecatedIsAsyncMode = true;
                console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
              }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
          }
          function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
          }
          function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
          }
          function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
          }
          function isElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
          }
          function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
          }
          function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
          }
          function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
          }
          function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
          }
          function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
          }
          function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
          }
          function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
          }
          exports.AsyncMode = AsyncMode;
          exports.ConcurrentMode = ConcurrentMode;
          exports.ContextConsumer = ContextConsumer;
          exports.ContextProvider = ContextProvider;
          exports.Element = Element;
          exports.ForwardRef = ForwardRef;
          exports.Fragment = Fragment;
          exports.Lazy = Lazy;
          exports.Memo = Memo;
          exports.Portal = Portal;
          exports.Profiler = Profiler;
          exports.StrictMode = StrictMode;
          exports.Suspense = Suspense;
          exports.isAsyncMode = isAsyncMode;
          exports.isConcurrentMode = isConcurrentMode;
          exports.isContextConsumer = isContextConsumer;
          exports.isContextProvider = isContextProvider;
          exports.isElement = isElement;
          exports.isForwardRef = isForwardRef;
          exports.isFragment = isFragment;
          exports.isLazy = isLazy;
          exports.isMemo = isMemo;
          exports.isPortal = isPortal;
          exports.isProfiler = isProfiler;
          exports.isStrictMode = isStrictMode;
          exports.isSuspense = isSuspense;
          exports.isValidElementType = isValidElementType;
          exports.typeOf = typeOf;
        })();
      }
    }
  });

  // node_modules/react-is/index.js
  var require_react_is = __commonJS({
    "node_modules/react-is/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_is_development();
      }
    }
  });

  // node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
  var require_hoist_non_react_statics_cjs = __commonJS({
    "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
      "use strict";
      var reactIs = require_react_is();
      var REACT_STATICS = {
        childContextTypes: true,
        contextType: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        getDerivedStateFromError: true,
        getDerivedStateFromProps: true,
        mixins: true,
        propTypes: true,
        type: true
      };
      var KNOWN_STATICS = {
        name: true,
        length: true,
        prototype: true,
        caller: true,
        callee: true,
        arguments: true,
        arity: true
      };
      var FORWARD_REF_STATICS = {
        "$$typeof": true,
        render: true,
        defaultProps: true,
        displayName: true,
        propTypes: true
      };
      var MEMO_STATICS = {
        "$$typeof": true,
        compare: true,
        defaultProps: true,
        displayName: true,
        propTypes: true,
        type: true
      };
      var TYPE_STATICS = {};
      TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
      TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
      function getStatics(component) {
        if (reactIs.isMemo(component)) {
          return MEMO_STATICS;
        }
        return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
      }
      var defineProperty = Object.defineProperty;
      var getOwnPropertyNames = Object.getOwnPropertyNames;
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var getPrototypeOf = Object.getPrototypeOf;
      var objectPrototype = Object.prototype;
      function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
        if (typeof sourceComponent !== "string") {
          if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
              hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
          }
          var keys = getOwnPropertyNames(sourceComponent);
          if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
          }
          var targetStatics = getStatics(targetComponent);
          var sourceStatics = getStatics(sourceComponent);
          for (var i3 = 0; i3 < keys.length; ++i3) {
            var key = keys[i3];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
              var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
              try {
                defineProperty(targetComponent, key, descriptor);
              } catch (e3) {
              }
            }
          }
        }
        return targetComponent;
      }
      module.exports = hoistNonReactStatics;
    }
  });

  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var o;
  var r;
  var f;
  var e = {};
  var c = [];
  var s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function a(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function h(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function v(l3, u3, i3) {
    var t3, o3, r3, f3 = {};
    for (r3 in u3)
      r3 == "key" ? t3 = u3[r3] : r3 == "ref" ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), typeof l3 == "function" && l3.defaultProps != null)
      for (r3 in l3.defaultProps)
        f3[r3] === void 0 && (f3[r3] = l3.defaultProps[r3]);
    return y(l3, f3, t3, o3, null);
  }
  function y(n2, i3, t3, o3, r3) {
    var f3 = { type: n2, props: i3, key: t3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r3 == null ? ++u : r3 };
    return l.vnode != null && l.vnode(f3), f3;
  }
  function d(n2) {
    return n2.children;
  }
  function _(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function k(n2, l3) {
    if (l3 == null)
      return n2.__ ? k(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if ((u3 = n2.__k[l3]) != null && u3.__e != null)
        return u3.__e;
    return typeof n2.type == "function" ? k(n2) : null;
  }
  function b(n2) {
    var l3, u3;
    if ((n2 = n2.__) != null && n2.__c != null) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if ((u3 = n2.__k[l3]) != null && u3.__e != null) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return b(n2);
    }
  }
  function m(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(g);
  }
  function g() {
    for (var n2; g.__r = t.length; )
      n2 = t.sort(function(n3, l3) {
        return n3.__v.__b - l3.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l3, u3, i3, t3, o3, r3;
        n3.__d && (o3 = (t3 = (l3 = n3).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = a({}, t3)).__v = t3.__v + 1, j(r3, t3, i3, l3.__n, r3.ownerSVGElement !== void 0, t3.__h != null ? [o3] : null, u3, o3 == null ? k(t3) : o3, t3.__h), z(u3, t3), t3.__e != o3 && b(t3)));
      });
  }
  function w(n2, l3, u3, i3, t3, o3, r3, f3, s3, a3) {
    var h3, v3, p3, _3, b3, m3, g3, w3 = i3 && i3.__k || c, A4 = w3.length;
    for (u3.__k = [], h3 = 0; h3 < l3.length; h3++)
      if ((_3 = u3.__k[h3] = (_3 = l3[h3]) == null || typeof _3 == "boolean" ? null : typeof _3 == "string" || typeof _3 == "number" || typeof _3 == "bigint" ? y(null, _3, null, null, _3) : Array.isArray(_3) ? y(d, { children: _3 }, null, null, null) : _3.__b > 0 ? y(_3.type, _3.props, _3.key, null, _3.__v) : _3) != null) {
        if (_3.__ = u3, _3.__b = u3.__b + 1, (p3 = w3[h3]) === null || p3 && _3.key == p3.key && _3.type === p3.type)
          w3[h3] = void 0;
        else
          for (v3 = 0; v3 < A4; v3++) {
            if ((p3 = w3[v3]) && _3.key == p3.key && _3.type === p3.type) {
              w3[v3] = void 0;
              break;
            }
            p3 = null;
          }
        j(n2, _3, p3 = p3 || e, t3, o3, r3, f3, s3, a3), b3 = _3.__e, (v3 = _3.ref) && p3.ref != v3 && (g3 || (g3 = []), p3.ref && g3.push(p3.ref, null, _3), g3.push(v3, _3.__c || b3, _3)), b3 != null ? (m3 == null && (m3 = b3), typeof _3.type == "function" && _3.__k != null && _3.__k === p3.__k ? _3.__d = s3 = x(_3, s3, n2) : s3 = P(n2, _3, p3, w3, b3, s3), a3 || u3.type !== "option" ? typeof u3.type == "function" && (u3.__d = s3) : n2.value = "") : s3 && p3.__e == s3 && s3.parentNode != n2 && (s3 = k(p3));
      }
    for (u3.__e = m3, h3 = A4; h3--; )
      w3[h3] != null && (typeof u3.type == "function" && w3[h3].__e != null && w3[h3].__e == u3.__d && (u3.__d = k(i3, h3 + 1)), N(w3[h3], w3[h3]));
    if (g3)
      for (h3 = 0; h3 < g3.length; h3++)
        M(g3[h3], g3[++h3], g3[++h3]);
  }
  function x(n2, l3, u3) {
    var i3, t3;
    for (i3 = 0; i3 < n2.__k.length; i3++)
      (t3 = n2.__k[i3]) && (t3.__ = n2, l3 = typeof t3.type == "function" ? x(t3, l3, u3) : P(u3, t3, t3, n2.__k, t3.__e, l3));
    return l3;
  }
  function A(n2, l3) {
    return l3 = l3 || [], n2 == null || typeof n2 == "boolean" || (Array.isArray(n2) ? n2.some(function(n3) {
      A(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function P(n2, l3, u3, i3, t3, o3) {
    var r3, f3, e3;
    if (l3.__d !== void 0)
      r3 = l3.__d, l3.__d = void 0;
    else if (u3 == null || t3 != o3 || t3.parentNode == null)
      n:
        if (o3 == null || o3.parentNode !== n2)
          n2.appendChild(t3), r3 = null;
        else {
          for (f3 = o3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 2)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, o3), r3 = o3;
        }
    return r3 !== void 0 ? r3 : t3.nextSibling;
  }
  function C(n2, l3, u3, i3, t3) {
    var o3;
    for (o3 in u3)
      o3 === "children" || o3 === "key" || o3 in l3 || H(n2, o3, null, u3[o3], i3);
    for (o3 in l3)
      t3 && typeof l3[o3] != "function" || o3 === "children" || o3 === "key" || o3 === "value" || o3 === "checked" || u3[o3] === l3[o3] || H(n2, o3, l3[o3], u3[o3], i3);
  }
  function $(n2, l3, u3) {
    l3[0] === "-" ? n2.setProperty(l3, u3) : n2[l3] = u3 == null ? "" : typeof u3 != "number" || s.test(l3) ? u3 : u3 + "px";
  }
  function H(n2, l3, u3, i3, t3) {
    var o3;
    n:
      if (l3 === "style")
        if (typeof u3 == "string")
          n2.style.cssText = u3;
        else {
          if (typeof i3 == "string" && (n2.style.cssText = i3 = ""), i3)
            for (l3 in i3)
              u3 && l3 in u3 || $(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              i3 && u3[l3] === i3[l3] || $(n2.style, l3, u3[l3]);
        }
      else if (l3[0] === "o" && l3[1] === "n")
        o3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? i3 || n2.addEventListener(l3, o3 ? T : I, o3) : n2.removeEventListener(l3, o3 ? T : I, o3);
      else if (l3 !== "dangerouslySetInnerHTML") {
        if (t3)
          l3 = l3.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if (l3 !== "href" && l3 !== "list" && l3 !== "form" && l3 !== "tabIndex" && l3 !== "download" && l3 in n2)
          try {
            n2[l3] = u3 == null ? "" : u3;
            break n;
          } catch (n3) {
          }
        typeof u3 == "function" || (u3 != null && (u3 !== false || l3[0] === "a" && l3[1] === "r") ? n2.setAttribute(l3, u3) : n2.removeAttribute(l3));
      }
  }
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u3, i3, t3, o3, r3, f3, e3, c3) {
    var s3, h3, v3, y3, p3, k3, b3, m3, g3, x4, A4, P3 = u3.type;
    if (u3.constructor !== void 0)
      return null;
    i3.__h != null && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (s3 = l.__b) && s3(u3);
    try {
      n:
        if (typeof P3 == "function") {
          if (m3 = u3.props, g3 = (s3 = P3.contextType) && t3[s3.__c], x4 = s3 ? g3 ? g3.props.value : s3.__ : t3, i3.__c ? b3 = (h3 = u3.__c = i3.__c).__ = h3.__E : ("prototype" in P3 && P3.prototype.render ? u3.__c = h3 = new P3(m3, x4) : (u3.__c = h3 = new _(m3, x4), h3.constructor = P3, h3.render = O), g3 && g3.sub(h3), h3.props = m3, h3.state || (h3.state = {}), h3.context = x4, h3.__n = t3, v3 = h3.__d = true, h3.__h = []), h3.__s == null && (h3.__s = h3.state), P3.getDerivedStateFromProps != null && (h3.__s == h3.state && (h3.__s = a({}, h3.__s)), a(h3.__s, P3.getDerivedStateFromProps(m3, h3.__s))), y3 = h3.props, p3 = h3.state, v3)
            P3.getDerivedStateFromProps == null && h3.componentWillMount != null && h3.componentWillMount(), h3.componentDidMount != null && h3.__h.push(h3.componentDidMount);
          else {
            if (P3.getDerivedStateFromProps == null && m3 !== y3 && h3.componentWillReceiveProps != null && h3.componentWillReceiveProps(m3, x4), !h3.__e && h3.shouldComponentUpdate != null && h3.shouldComponentUpdate(m3, h3.__s, x4) === false || u3.__v === i3.__v) {
              h3.props = m3, h3.state = h3.__s, u3.__v !== i3.__v && (h3.__d = false), h3.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), h3.__h.length && f3.push(h3);
              break n;
            }
            h3.componentWillUpdate != null && h3.componentWillUpdate(m3, h3.__s, x4), h3.componentDidUpdate != null && h3.__h.push(function() {
              h3.componentDidUpdate(y3, p3, k3);
            });
          }
          h3.context = x4, h3.props = m3, h3.state = h3.__s, (s3 = l.__r) && s3(u3), h3.__d = false, h3.__v = u3, h3.__P = n2, s3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s, h3.getChildContext != null && (t3 = a(a({}, t3), h3.getChildContext())), v3 || h3.getSnapshotBeforeUpdate == null || (k3 = h3.getSnapshotBeforeUpdate(y3, p3)), A4 = s3 != null && s3.type === d && s3.key == null ? s3.props.children : s3, w(n2, Array.isArray(A4) ? A4 : [A4], u3, i3, t3, o3, r3, f3, e3, c3), h3.base = u3.__e, u3.__h = null, h3.__h.length && f3.push(h3), b3 && (h3.__E = h3.__ = null), h3.__e = false;
        } else
          r3 == null && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, o3, r3, f3, c3);
      (s3 = l.diffed) && s3(u3);
    } catch (n3) {
      u3.__v = null, (c3 || r3 != null) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n3, u3, i3);
    }
  }
  function z(n2, u3) {
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function L(l3, u3, i3, t3, o3, r3, f3, c3) {
    var s3, a3, v3, y3 = i3.props, p3 = u3.props, d3 = u3.type, _3 = 0;
    if (d3 === "svg" && (o3 = true), r3 != null) {
      for (; _3 < r3.length; _3++)
        if ((s3 = r3[_3]) && (s3 === l3 || (d3 ? s3.localName == d3 : s3.nodeType == 3))) {
          l3 = s3, r3[_3] = null;
          break;
        }
    }
    if (l3 == null) {
      if (d3 === null)
        return document.createTextNode(p3);
      l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p3.is && p3), r3 = null, c3 = false;
    }
    if (d3 === null)
      y3 === p3 || c3 && l3.data === p3 || (l3.data = p3);
    else {
      if (r3 = r3 && n.call(l3.childNodes), a3 = (y3 = i3.props || e).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c3) {
        if (r3 != null)
          for (y3 = {}, _3 = 0; _3 < l3.attributes.length; _3++)
            y3[l3.attributes[_3].name] = l3.attributes[_3].value;
        (v3 || a3) && (v3 && (a3 && v3.__html == a3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
      }
      if (C(l3, p3, y3, o3, c3), v3)
        u3.__k = [];
      else if (_3 = u3.props.children, w(l3, Array.isArray(_3) ? _3 : [_3], u3, i3, t3, o3 && d3 !== "foreignObject", r3, f3, r3 ? r3[0] : i3.__k && k(i3, 0), c3), r3 != null)
        for (_3 = r3.length; _3--; )
          r3[_3] != null && h(r3[_3]);
      c3 || ("value" in p3 && (_3 = p3.value) !== void 0 && (_3 !== l3.value || d3 === "progress" && !_3) && H(l3, "value", _3, y3.value, false), "checked" in p3 && (_3 = p3.checked) !== void 0 && _3 !== l3.checked && H(l3, "checked", _3, y3.checked, false));
    }
    return l3;
  }
  function M(n2, u3, i3) {
    try {
      typeof n2 == "function" ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function N(n2, u3, i3) {
    var t3, o3;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || M(t3, null, u3)), (t3 = n2.__c) != null) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t3.base = t3.__P = null;
    }
    if (t3 = n2.__k)
      for (o3 = 0; o3 < t3.length; o3++)
        t3[o3] && N(t3[o3], u3, typeof n2.type != "function");
    i3 || n2.__e == null || h(n2.__e), n2.__e = n2.__d = void 0;
  }
  function O(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function S(u3, i3, t3) {
    var o3, r3, f3;
    l.__ && l.__(u3, i3), r3 = (o3 = typeof t3 == "function") ? null : t3 && t3.__k || i3.__k, f3 = [], j(i3, u3 = (!o3 && t3 || i3).__k = v(d, null, [u3]), r3 || e, e, i3.ownerSVGElement !== void 0, !o3 && t3 ? [t3] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, f3, !o3 && t3 ? t3 : r3 ? r3.__e : i3.firstChild, o3), z(f3, u3);
  }
  function D(n2, l3) {
    var u3 = { __c: l3 = "__cC" + f++, __: n2, Consumer: function(n3, l4) {
      return n3.children(l4);
    }, Provider: function(n3) {
      var u4, i3;
      return this.getChildContext || (u4 = [], (i3 = {})[l3] = this, this.getChildContext = function() {
        return i3;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && u4.some(m);
      }, this.sub = function(n4) {
        u4.push(n4);
        var l4 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u4.splice(u4.indexOf(n4), 1), l4 && l4.call(n4);
        };
      }), n3.children;
    } };
    return u3.Provider.__ = u3.Consumer.contextType = u3;
  }
  n = c.slice, l = { __e: function(n2, l3) {
    for (var u3, i3, t3; l3 = l3.__; )
      if ((u3 = l3.__c) && !u3.__)
        try {
          if ((i3 = u3.constructor) && i3.getDerivedStateFromError != null && (u3.setState(i3.getDerivedStateFromError(n2)), t3 = u3.__d), u3.componentDidCatch != null && (u3.componentDidCatch(n2), t3 = u3.__d), t3)
            return u3.__E = u3;
        } catch (l4) {
          n2 = l4;
        }
    throw n2;
  } }, u = 0, i = function(n2) {
    return n2 != null && n2.constructor === void 0;
  }, _.prototype.setState = function(n2, l3) {
    var u3;
    u3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), typeof n2 == "function" && (n2 = n2(a({}, u3), this.props)), n2 && a(u3, n2), n2 != null && this.__v && (l3 && this.__h.push(l3), m(this));
  }, _.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
  }, _.prototype.render = d, t = [], o = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;

  // node_modules/@portabletext/toolkit/dist/portable-text-toolkit.mjs
  var __defProp2 = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a3, b3) => {
    for (var prop in b3 || (b3 = {}))
      if (__hasOwnProp2.call(b3, prop))
        __defNormalProp(a3, prop, b3[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b3)) {
        if (__propIsEnum.call(b3, prop))
          __defNormalProp(a3, prop, b3[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b3) => __defProps(a3, __getOwnPropDescs(b3));
  function isPortableTextSpan(node2) {
    return node2._type === "span" && "text" in node2 && typeof node2.text === "string" && (typeof node2.marks === "undefined" || Array.isArray(node2.marks) && node2.marks.every((mark) => typeof mark === "string"));
  }
  function isPortableTextBlock(node2) {
    return typeof node2._type === "string" && node2._type[0] !== "@" && (!("markDefs" in node2) || Array.isArray(node2.markDefs) && node2.markDefs.every((def) => typeof def._key === "string")) && "children" in node2 && Array.isArray(node2.children) && node2.children.every((child) => typeof child === "object" && "_type" in child);
  }
  function isPortableTextListItemBlock(block) {
    return isPortableTextBlock(block) && "listItem" in block && typeof block.listItem === "string" && (typeof block.level === "undefined" || typeof block.level === "number");
  }
  function isPortableTextToolkitList(block) {
    return block._type === "@list";
  }
  function isPortableTextToolkitSpan(span) {
    return span._type === "@span";
  }
  function isPortableTextToolkitTextNode(node2) {
    return node2._type === "@text";
  }
  var knownDecorators = ["strong", "em", "code", "underline", "strike-through"];
  function sortMarksByOccurences(span, index, blockChildren) {
    if (!isPortableTextSpan(span) || !span.marks) {
      return [];
    }
    if (!span.marks.length) {
      return [];
    }
    const marks = span.marks.slice();
    const occurences = {};
    marks.forEach((mark) => {
      occurences[mark] = 1;
      for (let siblingIndex = index + 1; siblingIndex < blockChildren.length; siblingIndex++) {
        const sibling = blockChildren[siblingIndex];
        if (sibling && isPortableTextSpan(sibling) && Array.isArray(sibling.marks) && sibling.marks.indexOf(mark) !== -1) {
          occurences[mark]++;
        } else {
          break;
        }
      }
    });
    return marks.sort((markA, markB) => sortMarks(occurences, markA, markB));
  }
  function sortMarks(occurences, markA, markB) {
    const aOccurences = occurences[markA];
    const bOccurences = occurences[markB];
    if (aOccurences !== bOccurences) {
      return bOccurences - aOccurences;
    }
    const aKnownPos = knownDecorators.indexOf(markA);
    const bKnownPos = knownDecorators.indexOf(markB);
    if (aKnownPos !== bKnownPos) {
      return aKnownPos - bKnownPos;
    }
    return markA.localeCompare(markB);
  }
  function buildMarksTree(block) {
    var _a;
    const { children, markDefs = [] } = block;
    if (!children || !children.length) {
      return [];
    }
    const sortedMarks = children.map(sortMarksByOccurences);
    const rootNode = {
      _type: "@span",
      children: [],
      markType: "<unknown>"
    };
    let nodeStack = [rootNode];
    for (let i3 = 0; i3 < children.length; i3++) {
      const span = children[i3];
      if (!span) {
        continue;
      }
      const marksNeeded = sortedMarks[i3] || [];
      let pos = 1;
      if (nodeStack.length > 1) {
        for (pos; pos < nodeStack.length; pos++) {
          const mark = ((_a = nodeStack[pos]) == null ? void 0 : _a.markKey) || "";
          const index = marksNeeded.indexOf(mark);
          if (index === -1) {
            break;
          }
          marksNeeded.splice(index, 1);
        }
      }
      nodeStack = nodeStack.slice(0, pos);
      let currentNode = nodeStack[nodeStack.length - 1];
      if (!currentNode) {
        continue;
      }
      for (const markKey of marksNeeded) {
        const markDef = markDefs.find((def) => def._key === markKey);
        const markType = markDef ? markDef._type : markKey;
        const node2 = {
          _type: "@span",
          _key: span._key,
          children: [],
          markDef,
          markType,
          markKey
        };
        currentNode.children.push(node2);
        nodeStack.push(node2);
        currentNode = node2;
      }
      if (isPortableTextSpan(span)) {
        const lines = span.text.split("\n");
        for (let line2 = lines.length; line2-- > 1; ) {
          lines.splice(line2, 0, "\n");
        }
        currentNode.children = currentNode.children.concat(lines.map((text) => ({ _type: "@text", text })));
      } else {
        currentNode.children = currentNode.children.concat(span);
      }
    }
    return rootNode.children;
  }
  function nestLists(blocks, mode) {
    const tree = [];
    let currentList;
    for (let i3 = 0; i3 < blocks.length; i3++) {
      const block = blocks[i3];
      if (!block) {
        continue;
      }
      if (!isPortableTextListItemBlock(block)) {
        tree.push(block);
        currentList = void 0;
        continue;
      }
      if (!currentList) {
        currentList = listFromBlock(block, i3, mode);
        tree.push(currentList);
        continue;
      }
      if (blockMatchesList(block, currentList)) {
        currentList.children.push(block);
        continue;
      }
      if ((block.level || 1) > currentList.level) {
        const newList = listFromBlock(block, i3, mode);
        if (mode === "html") {
          const lastListItem = currentList.children[currentList.children.length - 1];
          const newLastChild = __spreadProps(__spreadValues({}, lastListItem), {
            children: [...lastListItem.children, newList]
          });
          currentList.children[currentList.children.length - 1] = newLastChild;
        } else {
          currentList.children.push(newList);
        }
        currentList = newList;
        continue;
      }
      if ((block.level || 1) < currentList.level) {
        const matchingBranch = tree[tree.length - 1];
        const match2 = matchingBranch && findListMatching(matchingBranch, block);
        if (match2) {
          currentList = match2;
          currentList.children.push(block);
          continue;
        }
        currentList = listFromBlock(block, i3, mode);
        tree.push(currentList);
        continue;
      }
      if (block.listItem !== currentList.listItem) {
        const matchingBranch = tree[tree.length - 1];
        const match2 = matchingBranch && findListMatching(matchingBranch, { level: block.level || 1 });
        if (match2 && match2.listItem === block.listItem) {
          currentList = match2;
          currentList.children.push(block);
          continue;
        } else {
          currentList = listFromBlock(block, i3, mode);
          tree.push(currentList);
          continue;
        }
      }
      console.warn("Unknown state encountered for block", block);
      tree.push(block);
    }
    return tree;
  }
  function blockMatchesList(block, list) {
    return (block.level || 1) === list.level && block.listItem === list.listItem;
  }
  function listFromBlock(block, index, mode) {
    return {
      _type: "@list",
      _key: `${block._key || `${index}`}-parent`,
      mode,
      level: block.level || 1,
      listItem: block.listItem,
      children: [block]
    };
  }
  function findListMatching(rootNode, matching) {
    const level = matching.level || 1;
    const style = matching.listItem || "normal";
    const filterOnType = typeof matching.listItem === "string";
    if (isPortableTextToolkitList(rootNode) && (rootNode.level || 1) === level && filterOnType && (rootNode.listItem || "normal") === style) {
      return rootNode;
    }
    if (!("children" in rootNode)) {
      return void 0;
    }
    const node2 = rootNode.children[rootNode.children.length - 1];
    return node2 && !isPortableTextSpan(node2) ? findListMatching(node2, matching) : void 0;
  }
  function spanToPlainText(span) {
    let text = "";
    span.children.forEach((current) => {
      if (isPortableTextToolkitTextNode(current)) {
        text += current.text;
      } else if (isPortableTextToolkitSpan(current)) {
        text += spanToPlainText(current);
      }
    });
    return text;
  }

  // node_modules/@portabletext/to-html/dist/to-html.mjs
  var __defProp3 = Object.defineProperty;
  var __defProps2 = Object.defineProperties;
  var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
  var __hasOwnProp3 = Object.prototype.hasOwnProperty;
  var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues2 = (a3, b3) => {
    for (var prop in b3 || (b3 = {}))
      if (__hasOwnProp3.call(b3, prop))
        __defNormalProp2(a3, prop, b3[prop]);
    if (__getOwnPropSymbols2)
      for (var prop of __getOwnPropSymbols2(b3)) {
        if (__propIsEnum2.call(b3, prop))
          __defNormalProp2(a3, prop, b3[prop]);
      }
    return a3;
  };
  var __spreadProps2 = (a3, b3) => __defProps2(a3, __getOwnPropDescs2(b3));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp3.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols2)
      for (var prop of __getOwnPropSymbols2(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum2.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var allowedProtocols = ["http", "https", "mailto", "tel"];
  var charMap = {
    "&": "amp",
    "<": "lt",
    ">": "gt",
    '"': "quot",
    "'": "#x27"
  };
  function escapeHTML(str) {
    return str.replace(/[&<>"']/g, (s3) => `&${charMap[s3]};`);
  }
  function uriLooksSafe(uri) {
    const url2 = (uri || "").trim();
    const first = url2.charAt(0);
    if (first === "#" || first === "/") {
      return true;
    }
    const colonIndex = url2.indexOf(":");
    if (colonIndex === -1) {
      return true;
    }
    const proto = url2.slice(0, colonIndex).toLowerCase();
    if (allowedProtocols.indexOf(proto) !== -1) {
      return true;
    }
    const queryIndex = url2.indexOf("?");
    if (queryIndex !== -1 && colonIndex > queryIndex) {
      return true;
    }
    const hashIndex = url2.indexOf("#");
    if (hashIndex !== -1 && colonIndex > hashIndex) {
      return true;
    }
    return false;
  }
  var link = ({ children, value }) => {
    const href = (value == null ? void 0 : value.href) || "";
    const looksSafe = uriLooksSafe(href);
    return looksSafe ? `<a href="${escapeHTML(href)}">${children}</a>` : children;
  };
  var defaultMarks = {
    em: ({ children }) => `<em>${children}</em>`,
    strong: ({ children }) => `<strong>${children}</strong>`,
    code: ({ children }) => `<code>${children}</code>`,
    underline: ({ children }) => `<span style="text-decoration:underline">${children}</span>`,
    "strike-through": ({ children }) => `<del>${children}</del>`,
    link
  };
  var defaultLists = {
    number: ({ children }) => `<ol>${children}</ol>`,
    bullet: ({ children }) => `<ul>${children}</ul>`
  };
  var DefaultListItem = ({ children }) => `<li>${children}</li>`;
  var getTemplate = (type, prop) => `Unknown ${type}, specify a component for it in the \`components.${prop}\` option`;
  var unknownTypeWarning = (typeName) => getTemplate(`block type "${typeName}"`, "types");
  var unknownMarkWarning = (markType) => getTemplate(`mark type "${markType}"`, "marks");
  var unknownBlockStyleWarning = (blockStyle) => getTemplate(`block style "${blockStyle}"`, "block");
  var unknownListStyleWarning = (listStyle) => getTemplate(`list style "${listStyle}"`, "list");
  var unknownListItemStyleWarning = (listStyle) => getTemplate(`list item style "${listStyle}"`, "listItem");
  function printWarning(message) {
    console.warn(message);
  }
  var DefaultUnknownType = ({
    value,
    isInline
  }) => {
    const warning = unknownTypeWarning(value._type);
    return isInline ? `<span style="display:hidden">${warning}</span>` : `<div style="display:hidden">${warning}</div>`;
  };
  var DefaultUnknownMark = ({
    markType,
    children
  }) => {
    return `<span class="unknown__pt__mark__${markType}">${children}</span>`;
  };
  var DefaultUnknownBlockStyle = ({
    children
  }) => {
    return `<p>${children}</p>`;
  };
  var DefaultUnknownList = ({ children }) => {
    return `<ul>${children}</ul>`;
  };
  var DefaultUnknownListItem = ({
    children
  }) => {
    return `<li>${children}</li>`;
  };
  var DefaultHardBreak = () => "<br/>";
  var defaultPortableTextBlockStyles = {
    normal: ({ children }) => `<p>${children}</p>`,
    blockquote: ({ children }) => `<blockquote>${children}</blockquote>`,
    h1: ({ children }) => `<h1>${children}</h1>`,
    h2: ({ children }) => `<h2>${children}</h2>`,
    h3: ({ children }) => `<h3>${children}</h3>`,
    h4: ({ children }) => `<h4>${children}</h4>`,
    h5: ({ children }) => `<h5>${children}</h5>`,
    h6: ({ children }) => `<h6>${children}</h6>`
  };
  var defaultComponents = {
    types: {},
    block: defaultPortableTextBlockStyles,
    marks: defaultMarks,
    list: defaultLists,
    listItem: DefaultListItem,
    hardBreak: DefaultHardBreak,
    unknownType: DefaultUnknownType,
    unknownMark: DefaultUnknownMark,
    unknownList: DefaultUnknownList,
    unknownListItem: DefaultUnknownListItem,
    unknownBlockStyle: DefaultUnknownBlockStyle
  };
  function mergeComponents(parent, overrides) {
    const _a = overrides, { block, list, listItem, marks, types } = _a, rest = __objRest(_a, ["block", "list", "listItem", "marks", "types"]);
    return __spreadValues2(__spreadProps2(__spreadValues2({}, parent), {
      block: mergeDeeply(parent, overrides, "block"),
      list: mergeDeeply(parent, overrides, "list"),
      listItem: mergeDeeply(parent, overrides, "listItem"),
      marks: mergeDeeply(parent, overrides, "marks"),
      types: mergeDeeply(parent, overrides, "types")
    }), rest);
  }
  function mergeDeeply(parent, overrides, key) {
    const override = overrides[key];
    const parentVal = parent[key];
    if (typeof override === "function") {
      return override;
    }
    if (override && typeof parentVal === "function") {
      return override;
    }
    if (override) {
      return __spreadValues2(__spreadValues2({}, parentVal), override);
    }
    return parentVal;
  }
  function toHTML(value, options = {}) {
    const {
      components: componentOverrides,
      onMissingComponent: missingComponentHandler = printWarning
    } = options;
    const handleMissingComponent = missingComponentHandler || noop;
    const blocks = Array.isArray(value) ? value : [value];
    const nested = nestLists(blocks, "html");
    const components = componentOverrides ? mergeComponents(defaultComponents, componentOverrides) : defaultComponents;
    const renderNode = getNodeRenderer(components, handleMissingComponent);
    const rendered = nested.map((node2, index) => renderNode({ node: node2, index, isInline: false, renderNode }));
    return rendered.join("");
  }
  var getNodeRenderer = (components, handleMissingComponent) => {
    function renderNode(options) {
      const { node: node2, index, isInline } = options;
      if (isPortableTextToolkitList(node2)) {
        return renderList(node2, index);
      }
      if (isPortableTextListItemBlock(node2)) {
        return renderListItem(node2, index);
      }
      if (isPortableTextToolkitSpan(node2)) {
        return renderSpan(node2);
      }
      if (isPortableTextBlock(node2)) {
        return renderBlock(node2, index, isInline);
      }
      if (isPortableTextToolkitTextNode(node2)) {
        return renderText(node2);
      }
      return renderCustomBlock(node2, index, isInline);
    }
    function renderListItem(node2, index) {
      const tree = serializeBlock({ node: node2, index, isInline: false, renderNode });
      const renderer = components.listItem;
      const handler = typeof renderer === "function" ? renderer : renderer[node2.listItem];
      const itemHandler = handler || components.unknownListItem;
      if (itemHandler === components.unknownListItem) {
        const style = node2.listItem || "bullet";
        handleMissingComponent(unknownListItemStyleWarning(style), {
          type: style,
          nodeType: "listItemStyle"
        });
      }
      let children = tree.children;
      if (node2.style && node2.style !== "normal") {
        const _a = node2, { listItem } = _a, blockNode = __objRest(_a, ["listItem"]);
        children = renderNode({ node: blockNode, index, isInline: false, renderNode });
      }
      return itemHandler({ value: node2, index, isInline: false, renderNode, children });
    }
    function renderList(node2, index) {
      const children = node2.children.map((child, childIndex) => renderNode({
        node: child._key ? child : __spreadProps2(__spreadValues2({}, child), { _key: `li-${index}-${childIndex}` }),
        index,
        isInline: false,
        renderNode
      }));
      const component = components.list;
      const handler = typeof component === "function" ? component : component[node2.listItem];
      const list = handler || components.unknownList;
      if (list === components.unknownList) {
        const style = node2.listItem || "bullet";
        handleMissingComponent(unknownListStyleWarning(style), { nodeType: "listStyle", type: style });
      }
      return list({ value: node2, index, isInline: false, renderNode, children: children.join("") });
    }
    function renderSpan(node2) {
      const { markDef, markType, markKey } = node2;
      const span = components.marks[markType] || components.unknownMark;
      const children = node2.children.map((child, childIndex) => renderNode({ node: child, index: childIndex, isInline: true, renderNode }));
      if (span === components.unknownMark) {
        handleMissingComponent(unknownMarkWarning(markType), { nodeType: "mark", type: markType });
      }
      return span({
        text: spanToPlainText(node2),
        value: markDef,
        markType,
        markKey,
        renderNode,
        children: children.join("")
      });
    }
    function renderBlock(node2, index, isInline) {
      const _a = serializeBlock({ node: node2, index, isInline, renderNode }), { _key } = _a, props = __objRest(_a, ["_key"]);
      const style = props.node.style || "normal";
      const handler = typeof components.block === "function" ? components.block : components.block[style];
      const block = handler || components.unknownBlockStyle;
      if (block === components.unknownBlockStyle) {
        handleMissingComponent(unknownBlockStyleWarning(style), {
          nodeType: "blockStyle",
          type: style
        });
      }
      return block(__spreadProps2(__spreadValues2({}, props), { value: props.node, renderNode }));
    }
    function renderText(node2) {
      if (node2.text === "\n") {
        const hardBreak = components.hardBreak;
        return hardBreak ? hardBreak() : "\n";
      }
      return escapeHTML(node2.text);
    }
    function renderCustomBlock(value, index, isInline) {
      const node2 = components.types[value._type];
      if (!node2) {
        handleMissingComponent(unknownTypeWarning(value._type), {
          nodeType: "block",
          type: value._type
        });
      }
      const component = node2 || components.unknownType;
      return component({
        value,
        isInline,
        index,
        renderNode
      });
    }
    return renderNode;
  };
  function serializeBlock(options) {
    const { node: node2, index, isInline, renderNode } = options;
    const tree = buildMarksTree(node2);
    const children = tree.map((child, i3) => renderNode({ node: child, isInline: true, index: i3, renderNode }));
    return {
      _key: node2._key || `block-${index}`,
      children: children.join(""),
      index,
      isInline,
      node: node2
    };
  }
  function noop() {
  }

  // node_modules/@babel/runtime/helpers/esm/extends.js
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i3 = 1; i3 < arguments.length; i3++) {
        var source = arguments[i3];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var u2;
  var r2;
  var o2 = 0;
  var i2 = [];
  var c2 = l.__b;
  var f2 = l.__r;
  var e2 = l.diffed;
  var a2 = l.__c;
  var v2 = l.unmount;
  function m2(t3, r3) {
    l.__h && l.__h(u2, t3, o2 || r3), o2 = 0;
    var i3 = u2.__H || (u2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({}), i3.__[t3];
  }
  function h2(r3, o3) {
    var i3 = m2(t2++, 4);
    !l.__s && k2(i3.__H, o3) && (i3.__ = r3, i3.__H = o3, u2.__h.push(i3));
  }
  function s2(n2) {
    return o2 = 5, d2(function() {
      return { current: n2 };
    }, []);
  }
  function d2(n2, u3) {
    var r3 = m2(t2++, 7);
    return k2(r3.__H, u3) && (r3.__ = n2(), r3.__H = u3, r3.__h = n2), r3.__;
  }
  function F(n2) {
    var r3 = u2.context[n2.__c], o3 = m2(t2++, 9);
    return o3.c = n2, r3 ? (o3.__ == null && (o3.__ = true, r3.sub(u2)), r3.props.value) : n2.__;
  }
  function x2() {
    i2.forEach(function(t3) {
      if (t3.__P)
        try {
          t3.__H.__h.forEach(g2), t3.__H.__h.forEach(j2), t3.__H.__h = [];
        } catch (u3) {
          t3.__H.__h = [], l.__e(u3, t3.__v);
        }
    }), i2 = [];
  }
  l.__b = function(n2) {
    u2 = null, c2 && c2(n2);
  }, l.__r = function(n2) {
    f2 && f2(n2), t2 = 0;
    var r3 = (u2 = n2.__c).__H;
    r3 && (r3.__h.forEach(g2), r3.__h.forEach(j2), r3.__h = []);
  }, l.diffed = function(t3) {
    e2 && e2(t3);
    var o3 = t3.__c;
    o3 && o3.__H && o3.__H.__h.length && (i2.push(o3) !== 1 && r2 === l.requestAnimationFrame || ((r2 = l.requestAnimationFrame) || function(n2) {
      var t4, u3 = function() {
        clearTimeout(r3), b2 && cancelAnimationFrame(t4), setTimeout(n2);
      }, r3 = setTimeout(u3, 100);
      b2 && (t4 = requestAnimationFrame(u3));
    })(x2)), u2 = void 0;
  }, l.__c = function(t3, u3) {
    u3.some(function(t4) {
      try {
        t4.__h.forEach(g2), t4.__h = t4.__h.filter(function(n2) {
          return !n2.__ || j2(n2);
        });
      } catch (r3) {
        u3.some(function(n2) {
          n2.__h && (n2.__h = []);
        }), u3 = [], l.__e(r3, t4.__v);
      }
    }), a2 && a2(t3, u3);
  }, l.unmount = function(t3) {
    v2 && v2(t3);
    var u3 = t3.__c;
    if (u3 && u3.__H)
      try {
        u3.__H.__.forEach(g2);
      } catch (t4) {
        l.__e(t4, u3.__v);
      }
  };
  var b2 = typeof requestAnimationFrame == "function";
  function g2(n2) {
    var t3 = u2;
    typeof n2.__c == "function" && n2.__c(), u2 = t3;
  }
  function j2(n2) {
    var t3 = u2;
    n2.__c = n2.__(), u2 = t3;
  }
  function k2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, u3) {
      return t4 !== n2[u3];
    });
  }

  // node_modules/preact/compat/dist/compat.module.js
  function S2(n2, t3) {
    for (var e3 in t3)
      n2[e3] = t3[e3];
    return n2;
  }
  function C2(n2, t3) {
    for (var e3 in n2)
      if (e3 !== "__source" && !(e3 in t3))
        return true;
    for (var r3 in t3)
      if (r3 !== "__source" && n2[r3] !== t3[r3])
        return true;
    return false;
  }
  function E(n2) {
    this.props = n2;
  }
  (E.prototype = new _()).isPureReactComponent = true, E.prototype.shouldComponentUpdate = function(n2, t3) {
    return C2(this.props, n2) || C2(this.state, t3);
  };
  var w2 = l.__b;
  l.__b = function(n2) {
    n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), w2 && w2(n2);
  };
  var R = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  function x3(n2) {
    function t3(t4, e3) {
      var r3 = S2({}, t4);
      return delete r3.ref, n2(r3, (e3 = t4.ref || e3) && (typeof e3 != "object" || "current" in e3) ? e3 : null);
    }
    return t3.$$typeof = R, t3.render = t3, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t3;
  }
  var A3 = l.__e;
  l.__e = function(n2, t3, e3) {
    if (n2.then) {
      for (var r3, u3 = t3; u3 = u3.__; )
        if ((r3 = u3.__c) && r3.__c)
          return t3.__e == null && (t3.__e = e3.__e, t3.__k = e3.__k), r3.__c(n2, t3);
    }
    A3(n2, t3, e3);
  };
  var O2 = l.unmount;
  function L2() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function U(n2) {
    var t3 = n2.__.__c;
    return t3 && t3.__e && t3.__e(n2);
  }
  function M2() {
    this.u = null, this.o = null;
  }
  l.unmount = function(n2) {
    var t3 = n2.__c;
    t3 && t3.__R && t3.__R(), t3 && n2.__h === true && (n2.type = null), O2 && O2(n2);
  }, (L2.prototype = new _()).__c = function(n2, t3) {
    var e3 = t3.__c, r3 = this;
    r3.t == null && (r3.t = []), r3.t.push(e3);
    var u3 = U(r3.__v), o3 = false, i3 = function() {
      o3 || (o3 = true, e3.__R = null, u3 ? u3(l3) : l3());
    };
    e3.__R = i3;
    var l3 = function() {
      if (!--r3.__u) {
        if (r3.state.__e) {
          var n3 = r3.state.__e;
          r3.__v.__k[0] = function n4(t5, e4, r4) {
            return t5 && (t5.__v = null, t5.__k = t5.__k && t5.__k.map(function(t6) {
              return n4(t6, e4, r4);
            }), t5.__c && t5.__c.__P === e4 && (t5.__e && r4.insertBefore(t5.__e, t5.__d), t5.__c.__e = true, t5.__c.__P = r4)), t5;
          }(n3, n3.__c.__P, n3.__c.__O);
        }
        var t4;
        for (r3.setState({ __e: r3.__b = null }); t4 = r3.t.pop(); )
          t4.forceUpdate();
      }
    }, f3 = t3.__h === true;
    r3.__u++ || f3 || r3.setState({ __e: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
  }, L2.prototype.componentWillUnmount = function() {
    this.t = [];
  }, L2.prototype.render = function(n2, t3) {
    if (this.__b) {
      if (this.__v.__k) {
        var e3 = document.createElement("div"), r3 = this.__v.__k[0].__c;
        this.__v.__k[0] = function n3(t4, e4, r4) {
          return t4 && (t4.__c && t4.__c.__H && (t4.__c.__H.__.forEach(function(n4) {
            typeof n4.__c == "function" && n4.__c();
          }), t4.__c.__H = null), (t4 = S2({}, t4)).__c != null && (t4.__c.__P === r4 && (t4.__c.__P = e4), t4.__c = null), t4.__k = t4.__k && t4.__k.map(function(t5) {
            return n3(t5, e4, r4);
          })), t4;
        }(this.__b, e3, r3.__O = r3.__P);
      }
      this.__b = null;
    }
    var u3 = t3.__e && v(d, null, n2.fallback);
    return u3 && (u3.__h = null), [v(d, null, t3.__e ? null : n2.children), u3];
  };
  var T3 = function(n2, t3, e3) {
    if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && (n2.props.revealOrder[0] !== "t" || !n2.o.size))
      for (e3 = n2.u; e3; ) {
        for (; e3.length > 3; )
          e3.pop()();
        if (e3[1] < e3[0])
          break;
        n2.u = e3 = e3[2];
      }
  };
  (M2.prototype = new _()).__e = function(n2) {
    var t3 = this, e3 = U(t3.__v), r3 = t3.o.get(n2);
    return r3[0]++, function(u3) {
      var o3 = function() {
        t3.props.revealOrder ? (r3.push(u3), T3(t3, n2, r3)) : u3();
      };
      e3 ? e3(o3) : o3();
    };
  }, M2.prototype.render = function(n2) {
    this.u = null, this.o = /* @__PURE__ */ new Map();
    var t3 = A(n2.children);
    n2.revealOrder && n2.revealOrder[0] === "b" && t3.reverse();
    for (var e3 = t3.length; e3--; )
      this.o.set(t3[e3], this.u = [1, 0, this.u]);
    return n2.children;
  }, M2.prototype.componentDidUpdate = M2.prototype.componentDidMount = function() {
    var n2 = this;
    this.o.forEach(function(t3, e3) {
      T3(n2, e3, t3);
    });
  };
  var j3 = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103;
  var P2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var V = function(n2) {
    return (typeof Symbol != "undefined" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(n2);
  };
  _.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(n2) {
    Object.defineProperty(_.prototype, n2, { configurable: true, get: function() {
      return this["UNSAFE_" + n2];
    }, set: function(t3) {
      Object.defineProperty(this, n2, { configurable: true, writable: true, value: t3 });
    } });
  });
  var H2 = l.event;
  function Z() {
  }
  function Y() {
    return this.cancelBubble;
  }
  function $2() {
    return this.defaultPrevented;
  }
  l.event = function(n2) {
    return H2 && (n2 = H2(n2)), n2.persist = Z, n2.isPropagationStopped = Y, n2.isDefaultPrevented = $2, n2.nativeEvent = n2;
  };
  var q2;
  var G = { configurable: true, get: function() {
    return this.class;
  } };
  var J = l.vnode;
  l.vnode = function(n2) {
    var t3 = n2.type, e3 = n2.props, r3 = e3;
    if (typeof t3 == "string") {
      for (var u3 in r3 = {}, e3) {
        var o3 = e3[u3];
        u3 === "value" && "defaultValue" in e3 && o3 == null || (u3 === "defaultValue" && "value" in e3 && e3.value == null ? u3 = "value" : u3 === "download" && o3 === true ? o3 = "" : /ondoubleclick/i.test(u3) ? u3 = "ondblclick" : /^onchange(textarea|input)/i.test(u3 + t3) && !V(e3.type) ? u3 = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(u3) ? u3 = u3.toLowerCase() : P2.test(u3) ? u3 = u3.replace(/[A-Z0-9]/, "-$&").toLowerCase() : o3 === null && (o3 = void 0), r3[u3] = o3);
      }
      t3 == "select" && r3.multiple && Array.isArray(r3.value) && (r3.value = A(e3.children).forEach(function(n3) {
        n3.props.selected = r3.value.indexOf(n3.props.value) != -1;
      })), t3 == "select" && r3.defaultValue != null && (r3.value = A(e3.children).forEach(function(n3) {
        n3.props.selected = r3.multiple ? r3.defaultValue.indexOf(n3.props.value) != -1 : r3.defaultValue == n3.props.value;
      })), n2.props = r3;
    }
    t3 && e3.class != e3.className && (G.enumerable = "className" in e3, e3.className != null && (r3.class = e3.className), Object.defineProperty(r3, "className", G)), n2.$$typeof = j3, J && J(n2);
  };
  var K = l.__r;
  l.__r = function(n2) {
    K && K(n2), q2 = n2.__c;
  };

  // node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js
  function memoize(fn) {
    var cache = /* @__PURE__ */ Object.create(null);
    return function(arg) {
      if (cache[arg] === void 0)
        cache[arg] = fn(arg);
      return cache[arg];
    };
  }
  var emotion_memoize_browser_esm_default = memoize;

  // node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.browser.esm.js
  var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
  var isPropValid = /* @__PURE__ */ emotion_memoize_browser_esm_default(function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
  });
  var emotion_is_prop_valid_browser_esm_default = isPropValid;

  // node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js
  function sheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    }
    for (var i3 = 0; i3 < document.styleSheets.length; i3++) {
      if (document.styleSheets[i3].ownerNode === tag) {
        return document.styleSheets[i3];
      }
    }
  }
  function createStyleElement(options) {
    var tag = document.createElement("style");
    tag.setAttribute("data-emotion", options.key);
    if (options.nonce !== void 0) {
      tag.setAttribute("nonce", options.nonce);
    }
    tag.appendChild(document.createTextNode(""));
    tag.setAttribute("data-s", "");
    return tag;
  }
  var StyleSheet = /* @__PURE__ */ function() {
    function StyleSheet2(options) {
      var _this = this;
      this._insertTag = function(tag) {
        var before;
        if (_this.tags.length === 0) {
          if (_this.insertionPoint) {
            before = _this.insertionPoint.nextSibling;
          } else if (_this.prepend) {
            before = _this.container.firstChild;
          } else {
            before = _this.before;
          }
        } else {
          before = _this.tags[_this.tags.length - 1].nextSibling;
        }
        _this.container.insertBefore(tag, before);
        _this.tags.push(tag);
      };
      this.isSpeedy = options.speedy === void 0 ? false : options.speedy;
      this.tags = [];
      this.ctr = 0;
      this.nonce = options.nonce;
      this.key = options.key;
      this.container = options.container;
      this.prepend = options.prepend;
      this.insertionPoint = options.insertionPoint;
      this.before = null;
    }
    var _proto = StyleSheet2.prototype;
    _proto.hydrate = function hydrate(nodes) {
      nodes.forEach(this._insertTag);
    };
    _proto.insert = function insert(rule) {
      if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
        this._insertTag(createStyleElement(this));
      }
      var tag = this.tags[this.tags.length - 1];
      if (true) {
        var isImportRule3 = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
        if (isImportRule3 && this._alreadyInsertedOrderInsensitiveRule) {
          console.error("You're attempting to insert the following rule:\n" + rule + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.");
        }
        this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule3;
      }
      if (this.isSpeedy) {
        var sheet = sheetForTag(tag);
        try {
          sheet.insertRule(rule, sheet.cssRules.length);
        } catch (e3) {
          if (!/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear){/.test(rule)) {
            console.error('There was a problem inserting the following rule: "' + rule + '"', e3);
          }
        }
      } else {
        tag.appendChild(document.createTextNode(rule));
      }
      this.ctr++;
    };
    _proto.flush = function flush() {
      this.tags.forEach(function(tag) {
        return tag.parentNode && tag.parentNode.removeChild(tag);
      });
      this.tags = [];
      this.ctr = 0;
      if (true) {
        this._alreadyInsertedOrderInsensitiveRule = false;
      }
    };
    return StyleSheet2;
  }();

  // node_modules/stylis/src/Enum.js
  var MS = "-ms-";
  var MOZ = "-moz-";
  var WEBKIT = "-webkit-";
  var COMMENT = "comm";
  var RULESET = "rule";
  var DECLARATION = "decl";
  var IMPORT = "@import";
  var KEYFRAMES = "@keyframes";

  // node_modules/stylis/src/Utility.js
  var abs = Math.abs;
  var from = String.fromCharCode;
  var assign = Object.assign;
  function hash(value, length2) {
    return (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3);
  }
  function trim(value) {
    return value.trim();
  }
  function match(value, pattern) {
    return (value = pattern.exec(value)) ? value[0] : value;
  }
  function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
  }
  function indexof(value, search) {
    return value.indexOf(search);
  }
  function charat(value, index) {
    return value.charCodeAt(index) | 0;
  }
  function substr(value, begin, end) {
    return value.slice(begin, end);
  }
  function strlen(value) {
    return value.length;
  }
  function sizeof(value) {
    return value.length;
  }
  function append(value, array) {
    return array.push(value), value;
  }
  function combine(array, callback) {
    return array.map(callback).join("");
  }

  // node_modules/stylis/src/Tokenizer.js
  var line = 1;
  var column = 1;
  var length = 0;
  var position = 0;
  var character = 0;
  var characters = "";
  function node(value, root, parent, type, props, children, length2) {
    return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
  }
  function copy(root, props) {
    return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
  }
  function char() {
    return character;
  }
  function prev() {
    character = position > 0 ? charat(characters, --position) : 0;
    if (column--, character === 10)
      column = 1, line--;
    return character;
  }
  function next() {
    character = position < length ? charat(characters, position++) : 0;
    if (column++, character === 10)
      column = 1, line++;
    return character;
  }
  function peek() {
    return charat(characters, position);
  }
  function caret() {
    return position;
  }
  function slice(begin, end) {
    return substr(characters, begin, end);
  }
  function token(type) {
    switch (type) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function alloc(value) {
    return line = column = 1, length = strlen(characters = value), position = 0, [];
  }
  function dealloc(value) {
    return characters = "", value;
  }
  function delimit(type) {
    return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
  }
  function whitespace(type) {
    while (character = peek())
      if (character < 33)
        next();
      else
        break;
    return token(type) > 2 || token(character) > 3 ? "" : " ";
  }
  function escaping(index, count) {
    while (--count && next())
      if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
        break;
    return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
  }
  function delimiter(type) {
    while (next())
      switch (character) {
        case type:
          return position;
        case 34:
        case 39:
          if (type !== 34 && type !== 39)
            delimiter(character);
          break;
        case 40:
          if (type === 41)
            delimiter(type);
          break;
        case 92:
          next();
          break;
      }
    return position;
  }
  function commenter(type, index) {
    while (next())
      if (type + character === 47 + 10)
        break;
      else if (type + character === 42 + 42 && peek() === 47)
        break;
    return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
  }
  function identifier(index) {
    while (!token(peek()))
      next();
    return slice(index, position);
  }

  // node_modules/stylis/src/Parser.js
  function compile(value) {
    return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
  }
  function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index = 0;
    var offset = 0;
    var length2 = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character2 = 0;
    var type = "";
    var props = rules;
    var children = rulesets;
    var reference = rule;
    var characters2 = type;
    while (scanning)
      switch (previous = character2, character2 = next()) {
        case 40:
          if (previous != 108 && characters2.charCodeAt(length2 - 1) == 58) {
            if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
              ampersand = -1;
            break;
          }
        case 34:
        case 39:
        case 91:
          characters2 += delimit(character2);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          characters2 += whitespace(previous);
          break;
        case 92:
          characters2 += escaping(caret() - 1, 7);
          continue;
        case 47:
          switch (peek()) {
            case 42:
            case 47:
              append(comment(commenter(next(), caret()), root, parent), declarations);
              break;
            default:
              characters2 += "/";
          }
          break;
        case 123 * variable:
          points[index++] = strlen(characters2) * ampersand;
        case 125 * variable:
        case 59:
        case 0:
          switch (character2) {
            case 0:
            case 125:
              scanning = 0;
            case 59 + offset:
              if (property > 0 && strlen(characters2) - length2)
                append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
              break;
            case 59:
              characters2 += ";";
            default:
              append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2), rulesets);
              if (character2 === 123)
                if (offset === 0)
                  parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
                else
                  switch (atrule) {
                    case 100:
                    case 109:
                    case 115:
                      parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                      break;
                    default:
                      parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                  }
          }
          index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
          break;
        case 58:
          length2 = 1 + strlen(characters2), property = previous;
        default:
          if (variable < 1) {
            if (character2 == 123)
              --variable;
            else if (character2 == 125 && variable++ == 0 && prev() == 125)
              continue;
          }
          switch (characters2 += from(character2), character2 * variable) {
            case 38:
              ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
              break;
            case 44:
              points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
              break;
            case 64:
              if (peek() === 45)
                characters2 += delimit(next());
              atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
              break;
            case 45:
              if (previous === 45 && strlen(characters2) == 2)
                variable = 0;
          }
      }
    return rulesets;
  }
  function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2) {
    var post = offset - 1;
    var rule = offset === 0 ? rules : [""];
    var size = sizeof(rule);
    for (var i3 = 0, j4 = 0, k3 = 0; i3 < index; ++i3)
      for (var x4 = 0, y3 = substr(value, post + 1, post = abs(j4 = points[i3])), z2 = value; x4 < size; ++x4)
        if (z2 = trim(j4 > 0 ? rule[x4] + " " + y3 : replace(y3, /&\f/g, rule[x4])))
          props[k3++] = z2;
    return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
  }
  function comment(value, root, parent) {
    return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
  }
  function declaration(value, root, parent, length2) {
    return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
  }

  // node_modules/stylis/src/Prefixer.js
  function prefix(value, length2) {
    switch (hash(value, length2)) {
      case 5103:
        return WEBKIT + "print-" + value + value;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return WEBKIT + value + value;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return WEBKIT + value + MOZ + value + MS + value + value;
      case 6828:
      case 4268:
        return WEBKIT + value + MS + value + value;
      case 6165:
        return WEBKIT + value + MS + "flex-" + value + value;
      case 5187:
        return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
      case 5443:
        return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
      case 4675:
        return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
      case 5548:
        return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
      case 5292:
        return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
      case 6060:
        return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
      case 4554:
        return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
      case 6187:
        return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
      case 5495:
      case 3959:
        return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
      case 4968:
        return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (strlen(value) - 1 - length2 > 6)
          switch (charat(value, length2 + 1)) {
            case 109:
              if (charat(value, length2 + 4) !== 45)
                break;
            case 102:
              return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
            case 115:
              return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
          }
        break;
      case 4949:
        if (charat(value, length2 + 1) !== 115)
          break;
      case 6444:
        switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
          case 107:
            return replace(value, ":", ":" + WEBKIT) + value;
          case 101:
            return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
        }
        break;
      case 5936:
        switch (charat(value, length2 + 11)) {
          case 114:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
          case 108:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
          case 45:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
        }
        return WEBKIT + value + MS + value + value;
    }
    return value;
  }

  // node_modules/stylis/src/Serializer.js
  function serialize(children, callback) {
    var output = "";
    var length2 = sizeof(children);
    for (var i3 = 0; i3 < length2; i3++)
      output += callback(children[i3], i3, children, callback) || "";
    return output;
  }
  function stringify(element, index, children, callback) {
    switch (element.type) {
      case IMPORT:
      case DECLARATION:
        return element.return = element.return || element.value;
      case COMMENT:
        return "";
      case KEYFRAMES:
        return element.return = element.value + "{" + serialize(element.children, callback) + "}";
      case RULESET:
        element.value = element.props.join(",");
    }
    return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
  }

  // node_modules/stylis/src/Middleware.js
  function middleware(collection) {
    var length2 = sizeof(collection);
    return function(element, index, children, callback) {
      var output = "";
      for (var i3 = 0; i3 < length2; i3++)
        output += collection[i3](element, index, children, callback) || "";
      return output;
    };
  }
  function prefixer(element, index, children, callback) {
    if (element.length > -1) {
      if (!element.return)
        switch (element.type) {
          case DECLARATION:
            element.return = prefix(element.value, element.length);
            break;
          case KEYFRAMES:
            return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
          case RULESET:
            if (element.length)
              return combine(element.props, function(value) {
                switch (match(value, /(::plac\w+|:read-\w+)/)) {
                  case ":read-only":
                  case ":read-write":
                    return serialize([copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] })], callback);
                  case "::placeholder":
                    return serialize([
                      copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }),
                      copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }),
                      copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] })
                    ], callback);
                }
                return "";
              });
        }
    }
  }

  // node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
  var last = function last2(arr) {
    return arr.length ? arr[arr.length - 1] : null;
  };
  var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
    var previous = 0;
    var character2 = 0;
    while (true) {
      previous = character2;
      character2 = peek();
      if (previous === 38 && character2 === 12) {
        points[index] = 1;
      }
      if (token(character2)) {
        break;
      }
      next();
    }
    return slice(begin, position);
  };
  var toRules = function toRules2(parsed, points) {
    var index = -1;
    var character2 = 44;
    do {
      switch (token(character2)) {
        case 0:
          if (character2 === 38 && peek() === 12) {
            points[index] = 1;
          }
          parsed[index] += identifierWithPointTracking(position - 1, points, index);
          break;
        case 2:
          parsed[index] += delimit(character2);
          break;
        case 4:
          if (character2 === 44) {
            parsed[++index] = peek() === 58 ? "&\f" : "";
            points[index] = parsed[index].length;
            break;
          }
        default:
          parsed[index] += from(character2);
      }
    } while (character2 = next());
    return parsed;
  };
  var getRules = function getRules2(value, points) {
    return dealloc(toRules(alloc(value), points));
  };
  var fixedElements = /* @__PURE__ */ new WeakMap();
  var compat = function compat2(element) {
    if (element.type !== "rule" || !element.parent || element.length < 1) {
      return;
    }
    var value = element.value, parent = element.parent;
    var isImplicitRule = element.column === parent.column && element.line === parent.line;
    while (parent.type !== "rule") {
      parent = parent.parent;
      if (!parent)
        return;
    }
    if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
      return;
    }
    if (isImplicitRule) {
      return;
    }
    fixedElements.set(element, true);
    var points = [];
    var rules = getRules(value, points);
    var parentRules = parent.props;
    for (var i3 = 0, k3 = 0; i3 < rules.length; i3++) {
      for (var j4 = 0; j4 < parentRules.length; j4++, k3++) {
        element.props[k3] = points[i3] ? rules[i3].replace(/&\f/g, parentRules[j4]) : parentRules[j4] + " " + rules[i3];
      }
    }
  };
  var removeLabel = function removeLabel2(element) {
    if (element.type === "decl") {
      var value = element.value;
      if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
        element["return"] = "";
        element.value = "";
      }
    }
  };
  var ignoreFlag = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason";
  var isIgnoringComment = function isIgnoringComment2(element) {
    return !!element && element.type === "comm" && element.children.indexOf(ignoreFlag) > -1;
  };
  var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm2(cache) {
    return function(element, index, children) {
      if (element.type !== "rule")
        return;
      var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
      if (unsafePseudoClasses && cache.compat !== true) {
        var prevElement = index > 0 ? children[index - 1] : null;
        if (prevElement && isIgnoringComment(last(prevElement.children))) {
          return;
        }
        unsafePseudoClasses.forEach(function(unsafePseudoClass) {
          console.error('The pseudo class "' + unsafePseudoClass + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + unsafePseudoClass.split("-child")[0] + '-of-type".');
        });
      }
    };
  };
  var isImportRule = function isImportRule2(element) {
    return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
  };
  var isPrependedWithRegularRules = function isPrependedWithRegularRules2(index, children) {
    for (var i3 = index - 1; i3 >= 0; i3--) {
      if (!isImportRule(children[i3])) {
        return true;
      }
    }
    return false;
  };
  var nullifyElement = function nullifyElement2(element) {
    element.type = "";
    element.value = "";
    element["return"] = "";
    element.children = "";
    element.props = "";
  };
  var incorrectImportAlarm = function incorrectImportAlarm2(element, index, children) {
    if (!isImportRule(element)) {
      return;
    }
    if (element.parent) {
      console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
      nullifyElement(element);
    } else if (isPrependedWithRegularRules(index, children)) {
      console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
      nullifyElement(element);
    }
  };
  var defaultStylisPlugins = [prefixer];
  var createCache = function createCache2(options) {
    var key = options.key;
    if (!key) {
      throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.");
    }
    if (key === "css") {
      var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(ssrStyles, function(node2) {
        var dataEmotionAttribute = node2.getAttribute("data-emotion");
        if (dataEmotionAttribute.indexOf(" ") === -1) {
          return;
        }
        document.head.appendChild(node2);
        node2.setAttribute("data-s", "");
      });
    }
    var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
    if (true) {
      if (/[^a-z-]/.test(key)) {
        throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + key + '" was passed');
      }
    }
    var inserted = {};
    var container;
    var nodesToHydrate = [];
    {
      container = options.container || document.head;
      Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + key + ' "]'), function(node2) {
        var attrib = node2.getAttribute("data-emotion").split(" ");
        for (var i3 = 1; i3 < attrib.length; i3++) {
          inserted[attrib[i3]] = true;
        }
        nodesToHydrate.push(node2);
      });
    }
    var _insert;
    var omnipresentPlugins = [compat, removeLabel];
    if (true) {
      omnipresentPlugins.push(createUnsafeSelectorsAlarm({
        get compat() {
          return cache.compat;
        }
      }), incorrectImportAlarm);
    }
    {
      var currentSheet;
      var finalizingPlugins = [stringify, true ? function(element) {
        if (!element.root) {
          if (element["return"]) {
            currentSheet.insert(element["return"]);
          } else if (element.value && element.type !== COMMENT) {
            currentSheet.insert(element.value + "{}");
          }
        }
      } : rulesheet(function(rule) {
        currentSheet.insert(rule);
      })];
      var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
      var stylis = function stylis2(styles) {
        return serialize(compile(styles), serializer);
      };
      _insert = function insert(selector, serialized, sheet, shouldCache) {
        currentSheet = sheet;
        if (serialized.map !== void 0) {
          currentSheet = {
            insert: function insert2(rule) {
              sheet.insert(rule + serialized.map);
            }
          };
        }
        stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
        if (shouldCache) {
          cache.inserted[serialized.name] = true;
        }
      };
    }
    var cache = {
      key,
      sheet: new StyleSheet({
        key,
        container,
        nonce: options.nonce,
        speedy: options.speedy,
        prepend: options.prepend,
        insertionPoint: options.insertionPoint
      }),
      nonce: options.nonce,
      inserted,
      registered: {},
      insert: _insert
    };
    cache.sheet.hydrate(nodesToHydrate);
    return cache;
  };
  var emotion_cache_browser_esm_default = createCache;

  // node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
  var isBrowser = true;
  function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = "";
    classNames.split(" ").forEach(function(className) {
      if (registered[className] !== void 0) {
        registeredStyles.push(registered[className] + ";");
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }
  var registerStyles = function registerStyles2(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;
    if ((isStringTag === false || isBrowser === false) && cache.registered[className] === void 0) {
      cache.registered[className] = serialized.styles;
    }
  };
  var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
    registerStyles(cache, serialized, isStringTag);
    var className = cache.key + "-" + serialized.name;
    if (cache.inserted[serialized.name] === void 0) {
      var current = serialized;
      do {
        var maybeStyles = cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
        current = current.next;
      } while (current !== void 0);
    }
  };

  // node_modules/@emotion/hash/dist/hash.browser.esm.js
  function murmur2(str) {
    var h3 = 0;
    var k3, i3 = 0, len = str.length;
    for (; len >= 4; ++i3, len -= 4) {
      k3 = str.charCodeAt(i3) & 255 | (str.charCodeAt(++i3) & 255) << 8 | (str.charCodeAt(++i3) & 255) << 16 | (str.charCodeAt(++i3) & 255) << 24;
      k3 = (k3 & 65535) * 1540483477 + ((k3 >>> 16) * 59797 << 16);
      k3 ^= k3 >>> 24;
      h3 = (k3 & 65535) * 1540483477 + ((k3 >>> 16) * 59797 << 16) ^ (h3 & 65535) * 1540483477 + ((h3 >>> 16) * 59797 << 16);
    }
    switch (len) {
      case 3:
        h3 ^= (str.charCodeAt(i3 + 2) & 255) << 16;
      case 2:
        h3 ^= (str.charCodeAt(i3 + 1) & 255) << 8;
      case 1:
        h3 ^= str.charCodeAt(i3) & 255;
        h3 = (h3 & 65535) * 1540483477 + ((h3 >>> 16) * 59797 << 16);
    }
    h3 ^= h3 >>> 13;
    h3 = (h3 & 65535) * 1540483477 + ((h3 >>> 16) * 59797 << 16);
    return ((h3 ^ h3 >>> 15) >>> 0).toString(36);
  }
  var hash_browser_esm_default = murmur2;

  // node_modules/@emotion/unitless/dist/unitless.browser.esm.js
  var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };
  var unitless_browser_esm_default = unitlessKeys;

  // node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js
  var ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
  var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
  var hyphenateRegex = /[A-Z]|^ms/g;
  var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
  var isCustomProperty = function isCustomProperty2(property) {
    return property.charCodeAt(1) === 45;
  };
  var isProcessableValue = function isProcessableValue2(value) {
    return value != null && typeof value !== "boolean";
  };
  var processStyleName = /* @__PURE__ */ emotion_memoize_browser_esm_default(function(styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
  });
  var processStyleValue = function processStyleValue2(key, value) {
    switch (key) {
      case "animation":
      case "animationName": {
        if (typeof value === "string") {
          return value.replace(animationRegex, function(match2, p1, p22) {
            cursor = {
              name: p1,
              styles: p22,
              next: cursor
            };
            return p1;
          });
        }
      }
    }
    if (unitless_browser_esm_default[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
      return value + "px";
    }
    return value;
  };
  if (true) {
    contentValuePattern = /(var|attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    contentValues = ["normal", "none", "initial", "inherit", "unset"];
    oldProcessStyleValue = processStyleValue;
    msPattern = /^-ms-/;
    hyphenPattern = /-(.)/g;
    hyphenatedCache = {};
    processStyleValue = function processStyleValue3(key, value) {
      if (key === "content") {
        if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
          throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
        }
      }
      var processed = oldProcessStyleValue(key, value);
      if (processed !== "" && !isCustomProperty(key) && key.indexOf("-") !== -1 && hyphenatedCache[key] === void 0) {
        hyphenatedCache[key] = true;
        console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, "ms-").replace(hyphenPattern, function(str, _char) {
          return _char.toUpperCase();
        }) + "?");
      }
      return processed;
    };
  }
  var contentValuePattern;
  var contentValues;
  var oldProcessStyleValue;
  var msPattern;
  var hyphenPattern;
  var hyphenatedCache;
  function handleInterpolation(mergedProps, registered, interpolation) {
    if (interpolation == null) {
      return "";
    }
    if (interpolation.__emotion_styles !== void 0) {
      if (interpolation.toString() === "NO_COMPONENT_SELECTOR") {
        throw new Error("Component selectors can only be used in conjunction with @emotion/babel-plugin.");
      }
      return interpolation;
    }
    switch (typeof interpolation) {
      case "boolean": {
        return "";
      }
      case "object": {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }
        if (interpolation.styles !== void 0) {
          var next2 = interpolation.next;
          if (next2 !== void 0) {
            while (next2 !== void 0) {
              cursor = {
                name: next2.name,
                styles: next2.styles,
                next: cursor
              };
              next2 = next2.next;
            }
          }
          var styles = interpolation.styles + ";";
          if (interpolation.map !== void 0) {
            styles += interpolation.map;
          }
          return styles;
        }
        return createStringFromObject(mergedProps, registered, interpolation);
      }
      case "function": {
        if (mergedProps !== void 0) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (true) {
          console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
        }
        break;
      }
      case "string":
        if (true) {
          var matched = [];
          var replaced = interpolation.replace(animationRegex, function(match2, p1, p22) {
            var fakeVarName = "animation" + matched.length;
            matched.push("const " + fakeVarName + " = keyframes`" + p22.replace(/^@keyframes animation-\w+/, "") + "`");
            return "${" + fakeVarName + "}";
          });
          if (matched.length) {
            console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, ["`" + replaced + "`"]).join("\n") + "\n\nYou should wrap it with `css` like this:\n\n" + ("css`" + replaced + "`"));
          }
        }
        break;
    }
    if (registered == null) {
      return interpolation;
    }
    var cached = registered[interpolation];
    return cached !== void 0 ? cached : interpolation;
  }
  function createStringFromObject(mergedProps, registered, obj) {
    var string = "";
    if (Array.isArray(obj)) {
      for (var i3 = 0; i3 < obj.length; i3++) {
        string += handleInterpolation(mergedProps, registered, obj[i3]) + ";";
      }
    } else {
      for (var _key in obj) {
        var value = obj[_key];
        if (typeof value !== "object") {
          if (registered != null && registered[value] !== void 0) {
            string += _key + "{" + registered[value] + "}";
          } else if (isProcessableValue(value)) {
            string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
          }
        } else {
          if (_key === "NO_COMPONENT_SELECTOR" && true) {
            throw new Error("Component selectors can only be used in conjunction with @emotion/babel-plugin.");
          }
          if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
            for (var _i = 0; _i < value.length; _i++) {
              if (isProcessableValue(value[_i])) {
                string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
              }
            }
          } else {
            var interpolated = handleInterpolation(mergedProps, registered, value);
            switch (_key) {
              case "animation":
              case "animationName": {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }
              default: {
                if (_key === "undefined") {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }
                string += _key + "{" + interpolated + "}";
              }
            }
          }
        }
      }
    }
    return string;
  }
  var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
  var sourceMapPattern;
  if (true) {
    sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
  }
  var cursor;
  var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
      return args[0];
    }
    var stringMode = true;
    var styles = "";
    cursor = void 0;
    var strings = args[0];
    if (strings == null || strings.raw === void 0) {
      stringMode = false;
      styles += handleInterpolation(mergedProps, registered, strings);
    } else {
      if (strings[0] === void 0) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }
      styles += strings[0];
    }
    for (var i3 = 1; i3 < args.length; i3++) {
      styles += handleInterpolation(mergedProps, registered, args[i3]);
      if (stringMode) {
        if (strings[i3] === void 0) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }
        styles += strings[i3];
      }
    }
    var sourceMap;
    if (true) {
      styles = styles.replace(sourceMapPattern, function(match3) {
        sourceMap = match3;
        return "";
      });
    }
    labelPattern.lastIndex = 0;
    var identifierName = "";
    var match2;
    while ((match2 = labelPattern.exec(styles)) !== null) {
      identifierName += "-" + match2[1];
    }
    var name = hash_browser_esm_default(styles) + identifierName;
    if (true) {
      return {
        name,
        styles,
        map: sourceMap,
        next: cursor,
        toString: function toString() {
          return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
        }
      };
    }
    return {
      name,
      styles,
      next: cursor
    };
  };

  // node_modules/@emotion/react/dist/emotion-element-cbed451f.browser.esm.js
  var hasOwnProperty = {}.hasOwnProperty;
  var EmotionCacheContext = /* @__PURE__ */ D(typeof HTMLElement !== "undefined" ? /* @__PURE__ */ emotion_cache_browser_esm_default({
    key: "css"
  }) : null);
  if (true) {
    EmotionCacheContext.displayName = "EmotionCacheContext";
  }
  var CacheProvider = EmotionCacheContext.Provider;
  var withEmotionCache = function withEmotionCache2(func) {
    return /* @__PURE__ */ x3(function(props, ref) {
      var cache = F(EmotionCacheContext);
      return func(props, cache, ref);
    });
  };
  var ThemeContext = /* @__PURE__ */ D({});
  if (true) {
    ThemeContext.displayName = "EmotionThemeContext";
  }
  var useInsertionEffect2 = void 0 ? void 0 : function useInsertionEffect3(create) {
    create();
  };
  function useInsertionEffectMaybe(create) {
    useInsertionEffect2(create);
  }
  var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
  var labelPropName = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__";
  var Insertion = function Insertion2(_ref) {
    var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
    registerStyles(cache, serialized, isStringTag);
    var rules = useInsertionEffectMaybe(function() {
      return insertStyles(cache, serialized, isStringTag);
    });
    return null;
  };
  var Emotion = /* @__PURE__ */ withEmotionCache(function(props, cache, ref) {
    var cssProp = props.css;
    if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) {
      cssProp = cache.registered[cssProp];
    }
    var WrappedComponent = props[typePropName];
    var registeredStyles = [cssProp];
    var className = "";
    if (typeof props.className === "string") {
      className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
    } else if (props.className != null) {
      className = props.className + " ";
    }
    var serialized = serializeStyles(registeredStyles, void 0, F(ThemeContext));
    if (serialized.name.indexOf("-") === -1) {
      var labelFromStack = props[labelPropName];
      if (labelFromStack) {
        serialized = serializeStyles([serialized, "label:" + labelFromStack + ";"]);
      }
    }
    className += cache.key + "-" + serialized.name;
    var newProps = {};
    for (var key in props) {
      if (hasOwnProperty.call(props, key) && key !== "css" && key !== typePropName && key !== labelPropName) {
        newProps[key] = props[key];
      }
    }
    newProps.ref = ref;
    newProps.className = className;
    return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v(Insertion, {
      cache,
      serialized,
      isStringTag: typeof WrappedComponent === "string"
    }), /* @__PURE__ */ v(WrappedComponent, newProps));
  });
  if (true) {
    Emotion.displayName = "EmotionCssPropInternal";
  }

  // node_modules/@emotion/react/dist/emotion-react.browser.esm.js
  var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
  var pkg = {
    name: "@emotion/react",
    version: "11.9.0",
    main: "dist/emotion-react.cjs.js",
    module: "dist/emotion-react.esm.js",
    browser: {
      "./dist/emotion-react.cjs.js": "./dist/emotion-react.browser.cjs.js",
      "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
    },
    types: "types/index.d.ts",
    files: [
      "src",
      "dist",
      "jsx-runtime",
      "jsx-dev-runtime",
      "_isolated-hnrs",
      "types/*.d.ts",
      "macro.js",
      "macro.d.ts",
      "macro.js.flow"
    ],
    sideEffects: false,
    author: "Emotion Contributors",
    license: "MIT",
    scripts: {
      "test:typescript": "dtslint types"
    },
    dependencies: {
      "@babel/runtime": "^7.13.10",
      "@emotion/babel-plugin": "^11.7.1",
      "@emotion/cache": "^11.7.1",
      "@emotion/serialize": "^1.0.3",
      "@emotion/utils": "^1.1.0",
      "@emotion/weak-memoize": "^0.2.5",
      "hoist-non-react-statics": "^3.3.1"
    },
    peerDependencies: {
      "@babel/core": "^7.0.0",
      react: ">=16.8.0"
    },
    peerDependenciesMeta: {
      "@babel/core": {
        optional: true
      },
      "@types/react": {
        optional: true
      }
    },
    devDependencies: {
      "@babel/core": "^7.13.10",
      "@emotion/css": "11.9.0",
      "@emotion/css-prettifier": "1.0.1",
      "@emotion/server": "11.4.0",
      "@emotion/styled": "11.8.1",
      "@types/react": "^16.9.11",
      dtslint: "^4.2.1",
      "html-tag-names": "^1.1.2",
      react: "16.14.0",
      "svg-tag-names": "^1.1.1",
      typescript: "^4.5.5"
    },
    repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
    publishConfig: {
      access: "public"
    },
    "umd:main": "dist/emotion-react.umd.min.js",
    preconstruct: {
      entrypoints: [
        "./index.js",
        "./jsx-runtime.js",
        "./jsx-dev-runtime.js",
        "./_isolated-hnrs.js"
      ],
      umdName: "emotionReact"
    }
  };
  var useInsertionEffect5 = void 0 ? void 0 : h2;
  var warnedAboutCssPropForGlobal = false;
  var Global = /* @__PURE__ */ withEmotionCache(function(props, cache) {
    if (!warnedAboutCssPropForGlobal && (props.className || props.css)) {
      console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
      warnedAboutCssPropForGlobal = true;
    }
    var styles = props.styles;
    var serialized = serializeStyles([styles], void 0, F(ThemeContext));
    var sheetRef = s2();
    useInsertionEffect5(function() {
      var key = cache.key + "-global";
      var sheet = new cache.sheet.constructor({
        key,
        nonce: cache.sheet.nonce,
        container: cache.sheet.container,
        speedy: cache.sheet.isSpeedy
      });
      var rehydrating = false;
      var node2 = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
      if (cache.sheet.tags.length) {
        sheet.before = cache.sheet.tags[0];
      }
      if (node2 !== null) {
        rehydrating = true;
        node2.setAttribute("data-emotion", key);
        sheet.hydrate([node2]);
      }
      sheetRef.current = [sheet, rehydrating];
      return function() {
        sheet.flush();
      };
    }, [cache]);
    useInsertionEffect5(function() {
      var sheetRefCurrent = sheetRef.current;
      var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
      if (rehydrating) {
        sheetRefCurrent[1] = false;
        return;
      }
      if (serialized.next !== void 0) {
        insertStyles(cache, serialized.next, true);
      }
      if (sheet.tags.length) {
        var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
        sheet.before = element;
        sheet.flush();
      }
      cache.insert("", serialized, sheet, false);
    }, [cache, serialized.name]);
    return null;
  });
  if (true) {
    Global.displayName = "EmotionGlobal";
  }
  var classnames = function classnames2(args) {
    var len = args.length;
    var i3 = 0;
    var cls = "";
    for (; i3 < len; i3++) {
      var arg = args[i3];
      if (arg == null)
        continue;
      var toAdd = void 0;
      switch (typeof arg) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(arg)) {
            toAdd = classnames2(arg);
          } else {
            if (arg.styles !== void 0 && arg.name !== void 0) {
              console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.");
            }
            toAdd = "";
            for (var k3 in arg) {
              if (arg[k3] && k3) {
                toAdd && (toAdd += " ");
                toAdd += k3;
              }
            }
          }
          break;
        }
        default: {
          toAdd = arg;
        }
      }
      if (toAdd) {
        cls && (cls += " ");
        cls += toAdd;
      }
    }
    return cls;
  };
  function merge(registered, css, className) {
    var registeredStyles = [];
    var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
    if (registeredStyles.length < 2) {
      return className;
    }
    return rawClassName + css(registeredStyles);
  }
  var Insertion3 = function Insertion4(_ref) {
    var cache = _ref.cache, serializedArr = _ref.serializedArr;
    var rules = useInsertionEffectMaybe(function() {
      for (var i3 = 0; i3 < serializedArr.length; i3++) {
        var res = insertStyles(cache, serializedArr[i3], false);
      }
    });
    return null;
  };
  var ClassNames = /* @__PURE__ */ withEmotionCache(function(props, cache) {
    var hasRendered = false;
    var serializedArr = [];
    var css = function css2() {
      if (hasRendered && true) {
        throw new Error("css can only be used during render");
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var serialized = serializeStyles(args, cache.registered);
      serializedArr.push(serialized);
      registerStyles(cache, serialized, false);
      return cache.key + "-" + serialized.name;
    };
    var cx = function cx2() {
      if (hasRendered && true) {
        throw new Error("cx can only be used during render");
      }
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return merge(cache.registered, css, classnames(args));
    };
    var content = {
      css,
      cx,
      theme: F(ThemeContext)
    };
    var ele = props.children(content);
    hasRendered = true;
    return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v(Insertion3, {
      cache,
      serializedArr
    }), ele);
  });
  if (true) {
    ClassNames.displayName = "EmotionClassNames";
  }
  if (true) {
    isBrowser2 = true;
    isJest = typeof jest !== "undefined";
    if (isBrowser2 && !isJest) {
      globalContext = typeof globalThis !== "undefined" ? globalThis : isBrowser2 ? window : global;
      globalKey = "__EMOTION_REACT_" + pkg.version.split(".")[0] + "__";
      if (globalContext[globalKey]) {
        console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.");
      }
      globalContext[globalKey] = true;
    }
  }
  var isBrowser2;
  var isJest;
  var globalContext;
  var globalKey;

  // node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js
  var testOmitPropsOnStringTag = emotion_is_prop_valid_browser_esm_default;
  var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
    return key !== "theme";
  };
  var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
    return typeof tag === "string" && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
  };
  var composeShouldForwardProps = function composeShouldForwardProps2(tag, options, isReal) {
    var shouldForwardProp;
    if (options) {
      var optionsShouldForwardProp = options.shouldForwardProp;
      shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
        return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
      } : optionsShouldForwardProp;
    }
    if (typeof shouldForwardProp !== "function" && isReal) {
      shouldForwardProp = tag.__emotion_forwardProp;
    }
    return shouldForwardProp;
  };
  var useInsertionEffect7 = void 0 ? void 0 : function useInsertionEffect8(create) {
    create();
  };
  function useInsertionEffectMaybe2(create) {
    useInsertionEffect7(create);
  }
  var ILLEGAL_ESCAPE_SEQUENCE_ERROR2 = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
  var Insertion5 = function Insertion6(_ref) {
    var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
    registerStyles(cache, serialized, isStringTag);
    var rules = useInsertionEffectMaybe2(function() {
      return insertStyles(cache, serialized, isStringTag);
    });
    return null;
  };
  var createStyled = function createStyled2(tag, options) {
    if (true) {
      if (tag === void 0) {
        throw new Error("You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.");
      }
    }
    var isReal = tag.__emotion_real === tag;
    var baseTag = isReal && tag.__emotion_base || tag;
    var identifierName;
    var targetClassName;
    if (options !== void 0) {
      identifierName = options.label;
      targetClassName = options.target;
    }
    var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
    var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
    var shouldUseAs = !defaultShouldForwardProp("as");
    return function() {
      var args = arguments;
      var styles = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
      if (identifierName !== void 0) {
        styles.push("label:" + identifierName + ";");
      }
      if (args[0] == null || args[0].raw === void 0) {
        styles.push.apply(styles, args);
      } else {
        if (args[0][0] === void 0) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR2);
        }
        styles.push(args[0][0]);
        var len = args.length;
        var i3 = 1;
        for (; i3 < len; i3++) {
          if (args[0][i3] === void 0) {
            console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR2);
          }
          styles.push(args[i3], args[0][i3]);
        }
      }
      var Styled = withEmotionCache(function(props, cache, ref) {
        var FinalTag = shouldUseAs && props.as || baseTag;
        var className = "";
        var classInterpolations = [];
        var mergedProps = props;
        if (props.theme == null) {
          mergedProps = {};
          for (var key in props) {
            mergedProps[key] = props[key];
          }
          mergedProps.theme = F(ThemeContext);
        }
        if (typeof props.className === "string") {
          className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
        } else if (props.className != null) {
          className = props.className + " ";
        }
        var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
        className += cache.key + "-" + serialized.name;
        if (targetClassName !== void 0) {
          className += " " + targetClassName;
        }
        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
        var newProps = {};
        for (var _key in props) {
          if (shouldUseAs && _key === "as")
            continue;
          if (finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }
        newProps.className = className;
        newProps.ref = ref;
        return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v(Insertion5, {
          cache,
          serialized,
          isStringTag: typeof FinalTag === "string"
        }), /* @__PURE__ */ v(FinalTag, newProps));
      });
      Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
      Styled.defaultProps = tag.defaultProps;
      Styled.__emotion_real = Styled;
      Styled.__emotion_base = baseTag;
      Styled.__emotion_styles = styles;
      Styled.__emotion_forwardProp = shouldForwardProp;
      Object.defineProperty(Styled, "toString", {
        value: function value() {
          if (targetClassName === void 0 && true) {
            return "NO_COMPONENT_SELECTOR";
          }
          return "." + targetClassName;
        }
      });
      Styled.withComponent = function(nextTag, nextOptions) {
        return createStyled2(nextTag, _extends({}, options, nextOptions, {
          shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
        })).apply(void 0, styles);
      };
      return Styled;
    };
  };
  var emotion_styled_base_browser_esm_default = createStyled;

  // node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js
  var tags = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan"
  ];
  var newStyled = emotion_styled_base_browser_esm_default.bind();
  tags.forEach(function(tagName) {
    newStyled[tagName] = newStyled(tagName);
  });
  var emotion_styled_browser_esm_default = newStyled;

  // src/RenderComponents.jsx
  var menuPaddingY = "40px";
  var menuPaddingX = "28px";
  var menuMarginY = "40px";
  var menuMarginX = "40px";
  var menuHeaderPaddingY = "12px";
  var sectionMarginY = "20px";
  var menuColumnBreakpoint = "700px";
  var halfMarginBreakpoint = "1350px";
  var atHalfMarginSize = (styles) => `@media (max-width: ${halfMarginBreakpoint}) { ${styles} }`;
  var MenuContainer = emotion_styled_browser_esm_default.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
  var Menus = emotion_styled_browser_esm_default.ul`
  max-width: 100%;
  flex: 0 0 auto;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1150px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
  padding-left: calc(${menuPaddingX} / 2);
  padding-right: calc(${menuPaddingX} / 2);
  ${atHalfMarginSize(`
    margin-left: calc(${menuPaddingX} / 4);
    margin-right: calc(${menuPaddingX} / 4);
  `)}
  margin-bottom: -${menuMarginY};
  justify-content: center;
`;
  var menuMaxWidth = 1e3;
  var singleColumnMenuMaxWidth = 660;
  var MenuWrapper = emotion_styled_browser_esm_default.li`
  flex: ${(props) => props.isSingleColumn ? singleColumnMenuMaxWidth / menuMaxWidth : 1} 1;
  width: 100%;
  min-width: 400px;
  max-width: ${(props) => props.isSingleColumn ? singleColumnMenuMaxWidth : menuMaxWidth}px;
  margin-left: ${menuPaddingX};
  margin-right: ${menuPaddingX};
  ${atHalfMarginSize(`
    margin-left: calc(${menuPaddingX} / 2);
    margin-right: calc(${menuPaddingX} / 2);
  `)}
  margin-bottom: ${menuMarginY};
`;
  var MenuBackgroundWrapper = emotion_styled_browser_esm_default.div`
  background-color: #fefaf4;
  // Prevent collapsing borders & retain background color
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
`;
  var Menu = emotion_styled_browser_esm_default.div`
  padding-bottom: ${menuHeaderPaddingY};
  padding-left: 40px;
  padding-right: 40px;
  ${atHalfMarginSize(`
    padding-left: 20px;
    padding-right: 20px;
  `)}
  margin: ${menuMarginY} ${menuMarginX};
  border-radius: 5px;
  border: 30px solid;
  border-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAYAAAA/mZ5CAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LjljY2M0ZGU5MywgMjAyMi8wMy8xNC0xNDowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NDc4NTNlYi00MTc3LTRmNDctYjhjOS1jODA5YTFjZDQwYzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkE5NTE5MjFCMzAxMTFFQ0I3QUFBOENFOUU2RjFBRjUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkE5NTE5MjBCMzAxMTFFQ0I3QUFBOENFOUU2RjFBRjUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjMgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NDc4NTNlYi00MTc3LTRmNDctYjhjOS1jODA5YTFjZDQwYzUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTQ3ODUzZWItNDE3Ny00ZjQ3LWI4YzktYzgwOWExY2Q0MGM1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+LtSQwQAADj1JREFUeNrsnd1x4kgXQGVq3pcMPm0EgyMwrprnGTsCQwTYEXgcge0IwBHA7vNWWY7AOIJhMmAj8KdrX1jRXP0AUiPEOVWUy4CE1N1H93ZLap28v78Hm3Dy/Vs3/tPVf7/Gr3b8etH/o/g1ff/7n3lwYMT71dH9aif2C9aRun3Tv1Fc19MDrGup206iHZ8l9ivQ/Yo2WmcRkVSeq/jVK7jeSfz6K96YUc0LNIz/3MavC8TZSSyp77u4vmc1r29pvz+0vosg7fepiFSZImlDGybM3RQp2P6mdns6It1vcGCA4g3vpm4ZiQYCacfhlquItB2nHihaGT9+Hf/5tYNEgW74c7yu+xoV6oXuFxKVj5TpLy3jutS3tL3nHSQK1IFf6kTxiBQvMMxpaHLEmWrEmWu+GeZsrFh9uc+jlYb2YYGjTzJfhlUW/ce8A2x/n6m9Zh3jnO2c6Wuq+xRqW85K80fxfvVzRcqRSArmMa2DqangQJe3NkYGIk5rKFGk+zVZfv/kBGUMku1FI88go7HuTaZ4215VCisILNrxLGXZTqIdF5LpxCmYtMaWmyMaR4NhSqfONNpDjvxsia05/VofDpHyRXLK9z6l4Z777iNnBIOJtuN5wfVkjRGsHCSWIulCr0Yk2brhZ4h5mTz6ewjxr0bamVmoiFRcpJyDpxx8T32l9Bolx2VGxxQx57pfM3ewYVimRB+F/rnh1vI+Bx+uDYnkPMHlIZ7vqq1gcVlKmWr2kiTUOvDFfdkppjrgLt9OBolWIifsGv2ZfgkFPDI2ItRo5SMaDYwj5CVNvzIutYyTDLQufPSDQyMYjEpox33tCiTpqjvLiDSwLC5xH280FK4UrodKtQY97ohE1UYmKWPj6N3z8PMDI/26KXH9/bTfXIh0YVg8LblwH523O9ovq5IrNxrV/WqLhsg0MqLSVcXRKDQGOx7LPGiqE277+XCnpaHJPWr/VcG+PhjvdSuu07WCpZl74zGnLsqmW7DN7YrrRlscalk7WMWImh4Z3Cj3tcIjlFWwEe3bG1HBOimLr0Yff15BO7bc+BAp9NjYIs9HKSs0QzPLurPHdhy2PO/svx5/yz36IZF/pp5T+X21taB1RJXKSB1ljkgAdRdptsfwC3CIuI7MWlbfoU73kwDUiRQ3pi0dXXFz2R8UGYCJ64ZcYzhd9JHcsfGeh6sOAA4tGokTPeftyaKPJDwZyw0pOoBcJ56WIumNV5HbodL7MACIRp8uuIMMy2m7ksPf1pWtPWQCJEq943bpzFIkvdPvJkWmZ/pMcIx9Imn7KRLdJKdeWDkhG38gV8uOjIUkpMl0RMPFjUwADRaoo1EobTq6kbry3zJbTsc109fLhtt45mzYLLAHOsrA52+BjdyDlMxkoi3ajM/fOgvyp5UrNh1XQqafwed0vgDwidxd/dP0JWfKYknj7gMuG4LjJtI+UeodBJtMoi/3pnPpEBwTcrL1cedJ9A2hFlPVSqT6X7D5fMpu/mndNVsWPn8LbNxpDBZ967r+lnz/t7aTaJM7bE82fT7SLhj9LtnY80P/LUitg2enW5Daxzik37LgfiQARAJAJABEAgBEAkAkAEQCQCQAQCQARAJAJABEAoDjFcl9Xg6T6PtnnlMniHQAdJ3/32jX3nnLqRNEqjP6dGv3cZ4R7do7bpm3fTzNHpHKY+3p1kXucoRy0TLfx9PsEamEaHQd8BDmOmE9zf4akeot0WKyFrfD+0B73hsPRlS6b9r8iK2GSfRsHRGreLo1FE7v5ikZwXOTZGo1RCJJFV6NAYapz/v2IVUmqQN34hmpq9empHlfDlgeqQiZHkwmOAmNr8ziF5Od1IdzPdiFRponAxB38WtyqNnDxrMIaQPuBOvTHxWhrGmE3fVYEl1mTegHe0u/x0H2NG5RsN20xmVMWbyYsm26qdBFJ4gUYXq6sXXPayOViH5RfTOJcVD/k7NTPciPirSlvCmL25o6HUIeKzt75z4lAGrdr73dIqvZBw/atuYbi6TTFI8PYEcX6eEDUeggo9O1kZbV9UB9mXZiP+2xLpLGDQuseNM+SBiUM42wyCPXcUX0gxrVf5KD99ctpSpjyuIi/f5+3OZGuSLlSCSN9lEb8GyLwvoZMI0wVCNiKVMW65MpZT2DjPGANZm+GOncMCUC9LleDZqOBgiRZJTwwY2Q8uTKWdKHlpOvjo11y5dPkQiOUKqPth/Ydw6M1ZlVkYLPa9Tc/FBOkJ3TiYcjlmmu3Y+J81E7SFzX2UrkhT0rnaMoAT77RcbgRU/dWUakQUqHikgEECwvvrUCyyApkvtIy4g+EYDZZ3K9+HCnpeP37qjEE8UGYOK6EYpDEpGssfIJ5QVgYrnxIZIbjab0jQAy+0ru1TShdWMfEgFks+aIiHTmvPdCOQFk4jpyxpTFACWASACIBIBIAIgEAIgEgEgAiASASACASACIBIBIAIgEAIgEgEgAiASASACASACIBIBIAIgEAIgEgEgAiASASACASACIBIBIAIBIAIgEgEgAiAQAiASASACIBIBIAIBIAIgEgEgAiAQAiASASACIBIBIAIBIAIgEgEgAiAQAiASASACIBIBIAIBIAIgEgEgAgEgAiASASACIBACIBIBIAIgEgEgAgEgAiASASACIBACIBIBIAIcl0tx57yvFApCJ68hcRHpz3mxTTgCZuI68WRGpSzkBZNK1IlLkfuvk+7cLygpgnRQ3otb73/9Mjag0oMgATFw35uLQYtRu4oau2DxSPIDVaNQ10roPdxYi3RnL3ccLMvAA8CmRuHBvfHS3FCkOTbP4z8j5Qid+DSlCgA+G6kSSkbqzckL2xugrXcQmPhOZ4JgjkTggLrh9I3UmWBEpNks+6BvrkpzwNV5Zj2KFI5NI2vxrYJ8S6qszH3xJfhJ/MIkX7hspXSjvxZ/dxn8f41eko30ATZOno+IMtN0HKRKtDNCdvL+/p5lYpH9kDZ1nETobN9d1bIos96ZCR1R/IxpwVxuwXH6zTVei4yw301dR2kYfKE2i0dr2WyIldmyYYWVdmGuUfEiGWjiM/kf851qP/nXvh89UIvPAnSrSAe7oh1Dxjv6kiR6ERD8PqV3lHagzRXKEknTvqmD42yeSKp4TnWodhZ4PpB09BZ9D3LltqZBIKWlfEGx+geuZs8xMN3ZTvup62hlh+JIBkVp25McZ3QVpsFGwfkdCEa6c9cp6XjZcx0fatk2/eyuRdgznt8kNjzf6fIf19TQ96KTIdEpkqlUkek2RaKpp+WiH9T87B+k7n2n+Qd8hKwUfv06DxImxBKEe/aAepEWiG6nDXSSqA4241TyuhAeJPoFxb1V8pLqmDe89Gl0b3YC5ZgwPTdjHxszZoP0hK0285RKnvad0t8ZH503qwzZq8hOtGDfNWwzhw364DtYHhW6aNhDUuFmENFWYOW9f0Z73hlv2s6akc40WSXHvrwp16BX8pnUdY4Dhron72lSRJsZ7XZq2d7oF6waRapreLU7sJWG+Pv+4ZR419bxek2dadc9qh7Rr74Q5dYJIAIBIAIgEgEgAiAQAiASASACIBIBIAIBIAIgEgEgAR8JGswidfP8WBv9NK7vN/T1hUM6UxXX7LbDZdRrhffyWtJHFdNizUkXKmfYKoKkUniYsb8pieSbMfcAtCHDcSGS6cZ9AUUikWCKZQL9HGQIskXkU+4VEKjg3s4S8KH79u+GGlDVlcd1+C2zKmEbY52/9oW0mr+2vzS3/xfjiOGVFOz8+RacsXmncVU0r6/O3ILUOzpzG/VJhfZf2WzlPYVnMX74yh2LLWcF9YE9YIZ2tP2XDmEsbmo60cZXwz2D9IeVCV11ZF0mfMGFNpCgPV+ojEBypUNInsvpF14mnsqxEpGGKRCOKFI5cqFGKTMMVkfQ8Ueh8aYJEACsyucPfobqzjEg/jIGFPsUHsJqhBetPPPlwp6UjFBfu4AJ9IoD1PpMx+HAhDklEsoa6Hyk2ABPLjY6I1HXenG1ysR7AkUUlccP1o2vdRoFEANmsOSIinTnvcasBQDauI2cikjuowGMiAbJxHZmLSG/Om2GFG3DmMY10DxDcS+WfTk6dVJlunVX4W64jb60CO1/lBvz2GH7beocveEDLuu2x2/DbY0DoWH2kyGhwnQoK1noM4tSjSEKXJu6NbsE6qaq+wwrbsXuAiFrvf/8TGd8fVLCj1jqjqkpVT55NPewXFKvvacUn+ffWjsWhRWo3cj7rlZkG6bp6ztsTD1dPuDfydZJX7EJlaV3XSH8qvalS29JkD+14tEjt0nZyWOJ+WuvycfXEyNoWvSwKqpGonVLfIw8//7iHdvy0FEnTOzc0dnXehl0Ldmjky1FKSlnFUerB6ISOafKVMTb6wg8+rt3cZztOjtpZV3v3dtmIjAlUbjxW7F2wPuwqhTsmMpUbiaRMjcY21zrwxY3Hdrx0ZmXyk3gBuUP2PmVERG7ymxb84VDDoNUfufM9d4Lm7M/GRzPdrwgVdi7fYWAPOZ/7Ll+dr+M2ZUCiX/RaUh2hGwb2KSGZnuvBFCnHvkWe+1fa/F46D96PrOXTpjPyULi9jHw50lx3wu0jG/WFpL6vgvTTCnu7w9p3OzbntSs4p91aLprX8d+XRAVlSkZfkekFXUzkioF2kH/ifu/TFPhsx1kTRPY0zSujH7ESBmuQhowDrimsCjkIXdYlXc7ormyzXzdpB4dWxgiILHAa7HbSVJb9sy4SJUZ20qZZgt0YaX1HNarvB63vXdvxaVaELTqJvoTxgebE7QLmSu75VPdOvA6KLPYrxIOtmGl9P9b9hlDNRq42bMePRQbZNnqsS0Iq67o5KcRp0ZG9Ghayu19nOGLy0tD63qkd/1+AAQBmOM6WCd3lVwAAAABJRU5ErkJggg==");
  border-image-slice: 70;
`;
  var MenuHeader = emotion_styled_browser_esm_default.div`
  padding-top: ${menuHeaderPaddingY};
  // margin-bottom: ${menuPaddingY};
`;
  var MenuTitle = emotion_styled_browser_esm_default.h3`
  text-align: center;
  font-size: 38px;
  line-height: 1.2;
  margin: 0 0 .125em;
`;
  var MenuSubtitle = emotion_styled_browser_esm_default.div`
  & p {
    margin: 0;
    text-align: center;
    font-size: 20px;
    font-style: italic;
  }
`;
  var columnMarginX = "28px";
  var MenuColumns = emotion_styled_browser_esm_default.ul`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: ${menuColumnBreakpoint}) {
    flex-direction: column;
  }
  margin-left: -${columnMarginX};
  margin-right: -${columnMarginX};
  // ${atHalfMarginSize(`
  //   margin-left: calc(-${columnMarginX} / 2);
  //   margin-right: calc(-${columnMarginX} / 2);
  // `)}
  margin-bottom: -${sectionMarginY};
`;
  var MenuColumn = emotion_styled_browser_esm_default.li`
  flex: 1;
  margin-left: ${columnMarginX};
  margin-right: ${columnMarginX};
  // ${atHalfMarginSize(`
  //   margin-left: calc(${columnMarginX} / 2);
  //   margin-right: calc(${columnMarginX} / 2);
  // `)}
  margin-bottom: ${sectionMarginY};
`;
  var MenuSections = emotion_styled_browser_esm_default.ul``;
  var MenuSection = emotion_styled_browser_esm_default.li`
  &:not(:last-child) {
    margin-bottom: ${sectionMarginY};
  }
`;
  var MenuSectionHeading = emotion_styled_browser_esm_default.h4`
  font-size: 18px;
  font-weight: bold;
  padding-bottom: .05em;
  margin: 0 0 ${sectionMarginY};
  border-bottom: 2px solid;
`;
  var MenuSectionSeparator = emotion_styled_browser_esm_default.hr`
  border-top: 0;
  border-bottom: 2px solid;
  margin: 0 auto;
  margin-bottom: ${sectionMarginY};
  max-width: 66%;
`;
  var MenuItems = emotion_styled_browser_esm_default.ul``;
  var MenuItem = emotion_styled_browser_esm_default.li`
  &:not(:last-child) {
    padding-bottom: 24px;
  }
`;
  var MenuItemName = emotion_styled_browser_esm_default.h5`
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
  padding-bottom: 4px;
`;
  var MenuItemPrice = emotion_styled_browser_esm_default.div`
  float: right;
  font-size: 16px;
  line-height: 18px;
  padding-left: 10px;
  padding-top: ${(props) => props.hasTitle ? "2px" : 0};
`;
  var MenuItemDescription = emotion_styled_browser_esm_default.div`
  p {
    font-size: 15px;
    margin-bottom: 0;
    line-height: 1.25;
  }
`;

  // src/MenuHeaderUnderline.jsx
  var menuUnderlinePaddingTop = "12px";
  var menuUnderlinePaddingBottom = "20px";
  function MenuHeaderUnderline({ width, endFillerWidth }) {
    return /* @__PURE__ */ v(UnderlineWrapper, {
      width
    }, /* @__PURE__ */ v(UnderlineEndCap, null), /* @__PURE__ */ v(UnderlineOutsideFiller, {
      width: endFillerWidth
    }), /* @__PURE__ */ v(UnderlineMiddleBreak, null), /* @__PURE__ */ v(UnderlineFiller, null), /* @__PURE__ */ v(UnderlineMiddle, null), /* @__PURE__ */ v(UnderlineFiller, null), /* @__PURE__ */ v(UnderlineMiddleBreak, null), /* @__PURE__ */ v(UnderlineOutsideFiller, {
      width: endFillerWidth
    }), /* @__PURE__ */ v(UnderlineEndCap, null));
  }
  var height = "31px";
  var UnderlineWrapper = emotion_styled_browser_esm_default.div`
  margin-top: ${menuUnderlinePaddingTop};
  margin-bottom: ${menuUnderlinePaddingBottom};
  margin-left: auto;
  margin-right: auto;
  max-width: ${(props) => props.width};
  display: flex;
`;
  var UnderlineMiddle = emotion_styled_browser_esm_default.div`
  flex: 0 0 auto;
  height: ${height};
  width: ${height};
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABHCAYAAABPjLqRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LjljY2M0ZGU5MywgMjAyMi8wMy8xNC0xNDowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjMgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkE5NTE5MjRCMzAxMTFFQ0I3QUFBOENFOUU2RjFBRjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkE5NTE5MjVCMzAxMTFFQ0I3QUFBOENFOUU2RjFBRjUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2QTk1MTkyMkIzMDExMUVDQjdBQUE4Q0U5RTZGMUFGNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2QTk1MTkyM0IzMDExMUVDQjdBQUE4Q0U5RTZGMUFGNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrMUK+0AAAUaSURBVHja7Jw/c9MwFMAVsjDmG5Bm6RjzCZpely69CxsbychE+QRtR6bQCbYknyDhWFi4OBtMOBvXJekGW0a2omfJF2PL9tNfy8C7U3O1E0n+6en5vSfZLXJxdk0ICcnHzyH5L3m5OBvQv1CetOg/D/zwnpYlLbcUXOSwMx36N+AdAjnhn2v+CYMY0T7tHfYJ+vOKliEtneRwGlZaZrS8ttpBNmJJhzCSDGRoeeAmtIxEp4tgJZo2pp1bWhi1SUqTZAVg3RiHdnEGgzZNa1JWHnEoIoEfLWglI4MdAvv4TQMU4b9d8bpM9WsUX2sxKGAUtlJT4kWR+nENm2l2aFpSP8guVUC6qVIkM9qvsQFQ08L6CZknWtwS2JEJN7jmgBWD2qc6FJVM22QgO0aBFYOKuM0O/7RZYiO3KJgq8sCKQS15h3bIerp8IIdGgJWDOhXd3FoKF4kHVlwHQHqrqA2XHJo6MAVQIO3CCu+2H8hxryuYkkN6/J6ejxRBAez3yjbmbvslbj+vYUHcX+i3BVDlsHSAmdDK8n5FSsA0QFXDUgFmG5QqME1QOFgywFyBkgVmAFS5gZedXiymcwcKpzUzHmNqg5KHhXMu3YLCOZfaoPDTEDcl6wNVPiWNgFKDhQPmFhQemDKoJJD+l0QrL9ZWtA9VdgvnuLq3WzjH1RgsvIF3Cwxv4JWBtQ2BGvMMQlALsHI/6g0t5yaAtY2AAmOuG0vaAXUap1l0YklpWFjP3DUwrGeuGktKwYLc1nHvnZRn7gqYbAhTBey4t6bf+aUGi2UoF4L5Xu1H2QamGuuVAYPrPO59pd/5gQ93DmtmI22H00ZgbSIors67C9dOW6lVkj4n3DUawpgEZih7gHQ1drzeTRrWA6JqvTVEMylqc6AOdVauFcqGOwDoqdZiK8uNi6BMUeuSNkCxfrFrY9eISNEUaxZc3Nzoyq+KhtkClW9nQMrXTmNYq9RU2/BOhNb2OcgAcwUq6y6xZcCA2/FO8d3QTRxXDawOUJXTsC4pjzOJb6DqhSWXwagdlHo+y5TgU9S1g6ofFg6YF6CwfpYLWZecm/sAyg/Nqg47zmtJUXsHC58KHvoArO0hKADyidSVovbOZlU7nHqx5F+jWfhUcD05fW9gyaeCvQLW9haUh8DaXoPyDFjbAShIdyy0PfNyYBt6/nuzA2mWG9qSfNpWJxUsCr6hniPbnr5t12FiFBQIcyvCzNHkAaWGahbb5L/NHN0Rls/fG9BYeAaomzlzhH4IwTPNuhIcGxuZKqyOMbLNRsDKrvqafVqW1bWsaLMBsNgdMGurbi20NM/ZLtZ2ozQryN2tTD/kybRrSfLPSwZNgyW6A9qSqKJt72GdCO6CtmRX0XbjUjT3Da3bCazsaPctXkNf4M03ClZ2tLsWYWXr3jRdswLudduIPQNX9tEWrBDhpNpwfIva9hgWi88iB6HIVc6NaGhsOM/ZFrMvrrgU2Kt5U2PDmeDOdMU3+OqCSl7Rkr0LzpoJi2UGbgRnVlrA2G9XgjM3tpN/dtPK7LUCg8x0eUzLc3r8p3TunG2YFb0zBjIaL5vqlKblmeB2Dhc7jbdoYrIE8B22nVMEasfbsC5uNrMdpk6nxC9bcodyl3I2+9w9KHJqYdqduno5mrudfyzNvDCYQolijbLoKtQH6wDt2oDPBcb82nXX3e91uNvC839zPiVltWzGtWlJapC6N+B2uE064XZpIAhdYJqtY5tW8w7A3wIMALld74HKjK9lAAAAAElFTkSuQmCC");
  background-repeat: no-repeat;
  background-size: ${height} ${height};
  `;
  var UnderlineFiller = emotion_styled_browser_esm_default.div`
  flex: 1;
  height: ${height};
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABHCAYAAADGFC34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LjljY2M0ZGU5MywgMjAyMi8wMy8xNC0xNDowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjMgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTI4NUM4NDlCMzcwMTFFQ0I3QUFBOENFOUU2RjFBRjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTI4NUM4NEFCMzcwMTFFQ0I3QUFBOENFOUU2RjFBRjUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2QTk1MTkyNkIzMDExMUVDQjdBQUE4Q0U5RTZGMUFGNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMjg1Qzg0OEIzNzAxMUVDQjdBQUE4Q0U5RTZGMUFGNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlzGhHcAAAA1SURBVHjaYmDwdd7PxMDA4AAiGMAEM4O6EiMD/YCvcwPI3nqEC0DEAYb///8zoIoNSQIgwADy6weF3iH7fQAAAABJRU5ErkJggg==");
  background-repeat: repeat-x;
  background-size: ${height} ${height};
`;
  var UnderlineMiddleBreak = emotion_styled_browser_esm_default.div`
  flex: 0 0 auto;
  height: ${height};
  width: 1px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABHCAYAAADGFC34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LjljY2M0ZGU5MywgMjAyMi8wMy8xNC0xNDowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjMgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTdDRTlBQzJCMzk1MTFFQ0I3QUFBOENFOUU2RjFBRjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTdDRTlBQzNCMzk1MTFFQ0I3QUFBOENFOUU2RjFBRjUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Rjg2MDJDQkIzOTIxMUVDQjdBQUE4Q0U5RTZGMUFGNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4Rjg2MDJDQ0IzOTIxMUVDQjdBQUE4Q0U5RTZGMUFGNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv0/HnQAAAAySURBVHjaYmDwdd7PxMDA4AAiGMAEM4O6EiMD/YCvswOaC0DEA4b///8zoIoNSQIgwACfowcm5qi96QAAAABJRU5ErkJggg==");
  background-size: 1px ${height};
`;
  var UnderlineOutsideFiller = emotion_styled_browser_esm_default.div`
  flex: 0 0 ${(props) => props.width};
  height: ${height};
  width: ${(props) => props.width}px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABHCAYAAADGFC34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LjljY2M0ZGU5MywgMjAyMi8wMy8xNC0xNDowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjMgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTdDRTlBQzZCMzk1MTFFQ0I3QUFBOENFOUU2RjFBRjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTdDRTlBQzdCMzk1MTFFQ0I3QUFBOENFOUU2RjFBRjUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFN0NFOUFDNEIzOTUxMUVDQjdBQUE4Q0U5RTZGMUFGNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFN0NFOUFDNUIzOTUxMUVDQjdBQUE4Q0U5RTZGMUFGNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuwaUEQAAAApSURBVHjaYmDwdd7PxMDA4AAiGMAEM4O6EiPD////GRBiowTZBECAAQC4fgVihMyf8QAAAABJRU5ErkJggg==");  background-repeat: repeat-x;
  background-size: 1px ${height};
`;
  var UnderlineEndCap = emotion_styled_browser_esm_default.div`
  flex: 0 0 auto;
  height: ${height};
  width: 1px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABHCAYAAADGFC34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LjljY2M0ZGU5MywgMjAyMi8wMy8xNC0xNDowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjMgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTlCQTM1RENCMzkyMTFFQ0I3QUFBOENFOUU2RjFBRjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEY4NjAyQzJCMzkyMTFFQ0I3QUFBOENFOUU2RjFBRjUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1OUJBMzVEQUIzOTIxMUVDQjdBQUE4Q0U5RTZGMUFGNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1OUJBMzVEQkIzOTIxMUVDQjdBQUE4Q0U5RTZGMUFGNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsbblBgAAAAoSURBVHjaYmDwde5nYmBgMAARDGCCmUFdiZHh////DAixUYJsAiDAAGEOBSIVeX1RAAAAAElFTkSuQmCC");
  background-size: 1px ${height};
`;

  // src/Renderer.jsx
  var Renderer = ({ data }) => {
    let menus;
    if (data) {
      menus = data.result;
    }
    const menuColumns = ["menuColumnLeft", "menuColumnRight"];
    if (menus)
      return /* @__PURE__ */ v(MenuContainer, null, /* @__PURE__ */ v(Menus, null, menus.map((menu) => {
        const isSingleColumn = menu.columns?.length === 1;
        return /* @__PURE__ */ v(MenuWrapper, {
          key: menu.title,
          isSingleColumn
        }, /* @__PURE__ */ v(MenuBackgroundWrapper, null, /* @__PURE__ */ v(Menu, {
          key: menu.title,
          isSingleColumn
        }, /* @__PURE__ */ v(MenuHeader, null, /* @__PURE__ */ v(MenuTitle, null, menu.title), menu.subtitle?.length && /* @__PURE__ */ v(MenuSubtitle, {
          dangerouslySetInnerHTML: {
            __html: toHTML(menu.subtitle)
          }
        })), /* @__PURE__ */ v(MenuHeaderUnderline, {
          width: "90%",
          endFillerWidth: "32px"
        }), /* @__PURE__ */ v(MenuColumns, null, menuColumns.filter((columnName) => menu[columnName]?.length).map((columnName) => {
          const column2 = menu[columnName];
          if (!column2)
            return;
          const isSingleColumn2 = menuColumns.filter((columnName2) => menu[columnName2]?.length).length === 1;
          return /* @__PURE__ */ v(MenuColumn, {
            isSingleColumn: isSingleColumn2
          }, column2.map((item) => {
            if (item._type === "menuSubHeading") {
              return /* @__PURE__ */ v("div", {
                key: item.key
              }, /* @__PURE__ */ v(MenuSectionHeading, {
                key: item.key,
                isSingleColumn: isSingleColumn2
              }, item.menuSubHeadingText), isSingleColumn2 && /* @__PURE__ */ v(MenuSectionSeparator, null));
            }
            if (item._type === "menuSeparator") {
              return /* @__PURE__ */ v(MenuSectionSeparator, {
                isSingleColumn: isSingleColumn2
              });
            }
            if (item._type === "menuItem") {
              return /* @__PURE__ */ v(MenuItem, {
                key: item.key,
                isSingleColumn: isSingleColumn2
              }, item.price && /* @__PURE__ */ v(MenuItemPrice, {
                hasTitle: item.name
              }, item.price), item.name && /* @__PURE__ */ v(MenuItemName, null, item.name), item.description && /* @__PURE__ */ v(MenuItemDescription, {
                dangerouslySetInnerHTML: {
                  __html: toHTML(item.description)
                }
              }));
            }
          }));
        })))));
      })));
    else
      return null;
  };

  // src/App.jsx
  var query = "*%5B_type%20%3D%3D%20'menu'%20%26%26%20!(_id%20in%20path('drafts.**'))%20%26%26%20(_id%20in%20%5B'daytimeMenu'%2C%20'eveningWeekendMenu'%5D)%5D%20%7B%0A%20%20_id%2C%0A%20%20title%2C%0A%20%20subtitle%5B%5D%2C%0A%20%20menuColumnLeft%5B%5D%20%7B%0A%20%20%20%20_key%2C%0A%20%20%20%20_type%2C%0A%20%20%20%20menuSubHeadingText%2C%0A%20%20%20%20name%2C%0A%20%20%20%20price%2C%0A%20%20%20%20description%5B%5D%0A%20%20%7D%2C%0A%20%20menuColumnRight%5B%5D%20%7B%0A%20%20%20%20_key%2C%0A%20%20%20%20_type%2C%0A%20%20%20%20menuSubHeadingText%2C%0A%20%20%20%20name%2C%0A%20%20%20%20price%2C%0A%20%20%20%20description%5B%5D%0A%20%20%7D%0A%7D";
  var url = `https://omde8c75.api.sanity.io/v2021-10-21/data/query/${isProd ? "production" : "dev"}?query=${query}`;
  var App = class extends _ {
    constructor(props) {
      super();
      this.state = {
        data: null
      };
    }
    fetchContent = async () => {
      try {
        const result = await fetch(url);
        const data = result.json();
        return data;
      } catch (e3) {
        console.error(e3);
      }
    };
    runQuery = async () => {
      let _data;
      try {
        _data = await this.fetchContent();
        this.setState({ data: _data });
      } catch (e3) {
        console.error(e3);
      }
    };
    componentDidMount() {
      this.runQuery();
    }
    render() {
      return /* @__PURE__ */ v(Renderer, {
        data: this.state.data
      });
    }
  };

  // src/main.tsx
  var ripe_menu_app_id_default = "ripe-menu-app";
  var appId;
  try {
    appId = ripe_menu_app_id;
  } catch (e3) {
    appId = ripe_menu_app_id_default;
  }
  console.log(`appId: ${appId}`);
  S(/* @__PURE__ */ v(App, null), document.querySelector(`#${appId}`));
})();
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
