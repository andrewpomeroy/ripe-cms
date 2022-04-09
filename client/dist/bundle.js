(() => {
  // node_modules/.pnpm/preact@10.5.14/node_modules/preact/dist/preact.module.js
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
  function a(n2, l2) {
    for (var u2 in l2)
      n2[u2] = l2[u2];
    return n2;
  }
  function h(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
  }
  function v(l2, u2, i2) {
    var t2, o2, r2, f2 = {};
    for (r2 in u2)
      r2 == "key" ? t2 = u2[r2] : r2 == "ref" ? o2 = u2[r2] : f2[r2] = u2[r2];
    if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i2), typeof l2 == "function" && l2.defaultProps != null)
      for (r2 in l2.defaultProps)
        f2[r2] === void 0 && (f2[r2] = l2.defaultProps[r2]);
    return y(l2, f2, t2, o2, null);
  }
  function y(n2, i2, t2, o2, r2) {
    var f2 = { type: n2, props: i2, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r2 == null ? ++u : r2 };
    return l.vnode != null && l.vnode(f2), f2;
  }
  function d(n2) {
    return n2.children;
  }
  function _(n2, l2) {
    this.props = n2, this.context = l2;
  }
  function k(n2, l2) {
    if (l2 == null)
      return n2.__ ? k(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u2; l2 < n2.__k.length; l2++)
      if ((u2 = n2.__k[l2]) != null && u2.__e != null)
        return u2.__e;
    return typeof n2.type == "function" ? k(n2) : null;
  }
  function b(n2) {
    var l2, u2;
    if ((n2 = n2.__) != null && n2.__c != null) {
      for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
        if ((u2 = n2.__k[l2]) != null && u2.__e != null) {
          n2.__e = n2.__c.base = u2.__e;
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
      n2 = t.sort(function(n3, l2) {
        return n3.__v.__b - l2.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l2, u2, i2, t2, o2, r2;
        n3.__d && (o2 = (t2 = (l2 = n3).__v).__e, (r2 = l2.__P) && (u2 = [], (i2 = a({}, t2)).__v = t2.__v + 1, j(r2, t2, i2, l2.__n, r2.ownerSVGElement !== void 0, t2.__h != null ? [o2] : null, u2, o2 == null ? k(t2) : o2, t2.__h), z(u2, t2), t2.__e != o2 && b(t2)));
      });
  }
  function w(n2, l2, u2, i2, t2, o2, r2, f2, s2, a2) {
    var h2, v2, p, _2, b2, m2, g2, w2 = i2 && i2.__k || c, A = w2.length;
    for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
      if ((_2 = u2.__k[h2] = (_2 = l2[h2]) == null || typeof _2 == "boolean" ? null : typeof _2 == "string" || typeof _2 == "number" || typeof _2 == "bigint" ? y(null, _2, null, null, _2) : Array.isArray(_2) ? y(d, { children: _2 }, null, null, null) : _2.__b > 0 ? y(_2.type, _2.props, _2.key, null, _2.__v) : _2) != null) {
        if (_2.__ = u2, _2.__b = u2.__b + 1, (p = w2[h2]) === null || p && _2.key == p.key && _2.type === p.type)
          w2[h2] = void 0;
        else
          for (v2 = 0; v2 < A; v2++) {
            if ((p = w2[v2]) && _2.key == p.key && _2.type === p.type) {
              w2[v2] = void 0;
              break;
            }
            p = null;
          }
        j(n2, _2, p = p || e, t2, o2, r2, f2, s2, a2), b2 = _2.__e, (v2 = _2.ref) && p.ref != v2 && (g2 || (g2 = []), p.ref && g2.push(p.ref, null, _2), g2.push(v2, _2.__c || b2, _2)), b2 != null ? (m2 == null && (m2 = b2), typeof _2.type == "function" && _2.__k != null && _2.__k === p.__k ? _2.__d = s2 = x(_2, s2, n2) : s2 = P(n2, _2, p, w2, b2, s2), a2 || u2.type !== "option" ? typeof u2.type == "function" && (u2.__d = s2) : n2.value = "") : s2 && p.__e == s2 && s2.parentNode != n2 && (s2 = k(p));
      }
    for (u2.__e = m2, h2 = A; h2--; )
      w2[h2] != null && (typeof u2.type == "function" && w2[h2].__e != null && w2[h2].__e == u2.__d && (u2.__d = k(i2, h2 + 1)), N(w2[h2], w2[h2]));
    if (g2)
      for (h2 = 0; h2 < g2.length; h2++)
        M(g2[h2], g2[++h2], g2[++h2]);
  }
  function x(n2, l2, u2) {
    var i2, t2;
    for (i2 = 0; i2 < n2.__k.length; i2++)
      (t2 = n2.__k[i2]) && (t2.__ = n2, l2 = typeof t2.type == "function" ? x(t2, l2, u2) : P(u2, t2, t2, n2.__k, t2.__e, l2));
    return l2;
  }
  function P(n2, l2, u2, i2, t2, o2) {
    var r2, f2, e2;
    if (l2.__d !== void 0)
      r2 = l2.__d, l2.__d = void 0;
    else if (u2 == null || t2 != o2 || t2.parentNode == null)
      n:
        if (o2 == null || o2.parentNode !== n2)
          n2.appendChild(t2), r2 = null;
        else {
          for (f2 = o2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)
            if (f2 == t2)
              break n;
          n2.insertBefore(t2, o2), r2 = o2;
        }
    return r2 !== void 0 ? r2 : t2.nextSibling;
  }
  function C(n2, l2, u2, i2, t2) {
    var o2;
    for (o2 in u2)
      o2 === "children" || o2 === "key" || o2 in l2 || H(n2, o2, null, u2[o2], i2);
    for (o2 in l2)
      t2 && typeof l2[o2] != "function" || o2 === "children" || o2 === "key" || o2 === "value" || o2 === "checked" || u2[o2] === l2[o2] || H(n2, o2, l2[o2], u2[o2], i2);
  }
  function $(n2, l2, u2) {
    l2[0] === "-" ? n2.setProperty(l2, u2) : n2[l2] = u2 == null ? "" : typeof u2 != "number" || s.test(l2) ? u2 : u2 + "px";
  }
  function H(n2, l2, u2, i2, t2) {
    var o2;
    n:
      if (l2 === "style")
        if (typeof u2 == "string")
          n2.style.cssText = u2;
        else {
          if (typeof i2 == "string" && (n2.style.cssText = i2 = ""), i2)
            for (l2 in i2)
              u2 && l2 in u2 || $(n2.style, l2, "");
          if (u2)
            for (l2 in u2)
              i2 && u2[l2] === i2[l2] || $(n2.style, l2, u2[l2]);
        }
      else if (l2[0] === "o" && l2[1] === "n")
        o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? i2 || n2.addEventListener(l2, o2 ? T : I, o2) : n2.removeEventListener(l2, o2 ? T : I, o2);
      else if (l2 !== "dangerouslySetInnerHTML") {
        if (t2)
          l2 = l2.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if (l2 !== "href" && l2 !== "list" && l2 !== "form" && l2 !== "tabIndex" && l2 !== "download" && l2 in n2)
          try {
            n2[l2] = u2 == null ? "" : u2;
            break n;
          } catch (n3) {
          }
        typeof u2 == "function" || (u2 != null && (u2 !== false || l2[0] === "a" && l2[1] === "r") ? n2.setAttribute(l2, u2) : n2.removeAttribute(l2));
      }
  }
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u2, i2, t2, o2, r2, f2, e2, c2) {
    var s2, h2, v2, y2, p, k2, b2, m2, g2, x2, A, P2 = u2.type;
    if (u2.constructor !== void 0)
      return null;
    i2.__h != null && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r2 = [e2]), (s2 = l.__b) && s2(u2);
    try {
      n:
        if (typeof P2 == "function") {
          if (m2 = u2.props, g2 = (s2 = P2.contextType) && t2[s2.__c], x2 = s2 ? g2 ? g2.props.value : s2.__ : t2, i2.__c ? b2 = (h2 = u2.__c = i2.__c).__ = h2.__E : ("prototype" in P2 && P2.prototype.render ? u2.__c = h2 = new P2(m2, x2) : (u2.__c = h2 = new _(m2, x2), h2.constructor = P2, h2.render = O), g2 && g2.sub(h2), h2.props = m2, h2.state || (h2.state = {}), h2.context = x2, h2.__n = t2, v2 = h2.__d = true, h2.__h = []), h2.__s == null && (h2.__s = h2.state), P2.getDerivedStateFromProps != null && (h2.__s == h2.state && (h2.__s = a({}, h2.__s)), a(h2.__s, P2.getDerivedStateFromProps(m2, h2.__s))), y2 = h2.props, p = h2.state, v2)
            P2.getDerivedStateFromProps == null && h2.componentWillMount != null && h2.componentWillMount(), h2.componentDidMount != null && h2.__h.push(h2.componentDidMount);
          else {
            if (P2.getDerivedStateFromProps == null && m2 !== y2 && h2.componentWillReceiveProps != null && h2.componentWillReceiveProps(m2, x2), !h2.__e && h2.shouldComponentUpdate != null && h2.shouldComponentUpdate(m2, h2.__s, x2) === false || u2.__v === i2.__v) {
              h2.props = m2, h2.state = h2.__s, u2.__v !== i2.__v && (h2.__d = false), h2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
                n3 && (n3.__ = u2);
              }), h2.__h.length && f2.push(h2);
              break n;
            }
            h2.componentWillUpdate != null && h2.componentWillUpdate(m2, h2.__s, x2), h2.componentDidUpdate != null && h2.__h.push(function() {
              h2.componentDidUpdate(y2, p, k2);
            });
          }
          h2.context = x2, h2.props = m2, h2.state = h2.__s, (s2 = l.__r) && s2(u2), h2.__d = false, h2.__v = u2, h2.__P = n2, s2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s, h2.getChildContext != null && (t2 = a(a({}, t2), h2.getChildContext())), v2 || h2.getSnapshotBeforeUpdate == null || (k2 = h2.getSnapshotBeforeUpdate(y2, p)), A = s2 != null && s2.type === d && s2.key == null ? s2.props.children : s2, w(n2, Array.isArray(A) ? A : [A], u2, i2, t2, o2, r2, f2, e2, c2), h2.base = u2.__e, u2.__h = null, h2.__h.length && f2.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
        } else
          r2 == null && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = L(i2.__e, u2, i2, t2, o2, r2, f2, c2);
      (s2 = l.diffed) && s2(u2);
    } catch (n3) {
      u2.__v = null, (c2 || r2 != null) && (u2.__e = e2, u2.__h = !!c2, r2[r2.indexOf(e2)] = null), l.__e(n3, u2, i2);
    }
  }
  function z(n2, u2) {
    l.__c && l.__c(u2, n2), n2.some(function(u3) {
      try {
        n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
          n3.call(u3);
        });
      } catch (n3) {
        l.__e(n3, u3.__v);
      }
    });
  }
  function L(l2, u2, i2, t2, o2, r2, f2, c2) {
    var s2, a2, v2, y2 = i2.props, p = u2.props, d2 = u2.type, _2 = 0;
    if (d2 === "svg" && (o2 = true), r2 != null) {
      for (; _2 < r2.length; _2++)
        if ((s2 = r2[_2]) && (s2 === l2 || (d2 ? s2.localName == d2 : s2.nodeType == 3))) {
          l2 = s2, r2[_2] = null;
          break;
        }
    }
    if (l2 == null) {
      if (d2 === null)
        return document.createTextNode(p);
      l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p.is && p), r2 = null, c2 = false;
    }
    if (d2 === null)
      y2 === p || c2 && l2.data === p || (l2.data = p);
    else {
      if (r2 = r2 && n.call(l2.childNodes), a2 = (y2 = i2.props || e).dangerouslySetInnerHTML, v2 = p.dangerouslySetInnerHTML, !c2) {
        if (r2 != null)
          for (y2 = {}, _2 = 0; _2 < l2.attributes.length; _2++)
            y2[l2.attributes[_2].name] = l2.attributes[_2].value;
        (v2 || a2) && (v2 && (a2 && v2.__html == a2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
      }
      if (C(l2, p, y2, o2, c2), v2)
        u2.__k = [];
      else if (_2 = u2.props.children, w(l2, Array.isArray(_2) ? _2 : [_2], u2, i2, t2, o2 && d2 !== "foreignObject", r2, f2, r2 ? r2[0] : i2.__k && k(i2, 0), c2), r2 != null)
        for (_2 = r2.length; _2--; )
          r2[_2] != null && h(r2[_2]);
      c2 || ("value" in p && (_2 = p.value) !== void 0 && (_2 !== l2.value || d2 === "progress" && !_2) && H(l2, "value", _2, y2.value, false), "checked" in p && (_2 = p.checked) !== void 0 && _2 !== l2.checked && H(l2, "checked", _2, y2.checked, false));
    }
    return l2;
  }
  function M(n2, u2, i2) {
    try {
      typeof n2 == "function" ? n2(u2) : n2.current = u2;
    } catch (n3) {
      l.__e(n3, i2);
    }
  }
  function N(n2, u2, i2) {
    var t2, o2;
    if (l.unmount && l.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M(t2, null, u2)), (t2 = n2.__c) != null) {
      if (t2.componentWillUnmount)
        try {
          t2.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u2);
        }
      t2.base = t2.__P = null;
    }
    if (t2 = n2.__k)
      for (o2 = 0; o2 < t2.length; o2++)
        t2[o2] && N(t2[o2], u2, typeof n2.type != "function");
    i2 || n2.__e == null || h(n2.__e), n2.__e = n2.__d = void 0;
  }
  function O(n2, l2, u2) {
    return this.constructor(n2, u2);
  }
  function S(u2, i2, t2) {
    var o2, r2, f2;
    l.__ && l.__(u2, i2), r2 = (o2 = typeof t2 == "function") ? null : t2 && t2.__k || i2.__k, f2 = [], j(i2, u2 = (!o2 && t2 || i2).__k = v(d, null, [u2]), r2 || e, e, i2.ownerSVGElement !== void 0, !o2 && t2 ? [t2] : r2 ? null : i2.firstChild ? n.call(i2.childNodes) : null, f2, !o2 && t2 ? t2 : r2 ? r2.__e : i2.firstChild, o2), z(f2, u2);
  }
  n = c.slice, l = { __e: function(n2, l2) {
    for (var u2, i2, t2; l2 = l2.__; )
      if ((u2 = l2.__c) && !u2.__)
        try {
          if ((i2 = u2.constructor) && i2.getDerivedStateFromError != null && (u2.setState(i2.getDerivedStateFromError(n2)), t2 = u2.__d), u2.componentDidCatch != null && (u2.componentDidCatch(n2), t2 = u2.__d), t2)
            return u2.__E = u2;
        } catch (l3) {
          n2 = l3;
        }
    throw n2;
  } }, u = 0, i = function(n2) {
    return n2 != null && n2.constructor === void 0;
  }, _.prototype.setState = function(n2, l2) {
    var u2;
    u2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), typeof n2 == "function" && (n2 = n2(a({}, u2), this.props)), n2 && a(u2, n2), n2 != null && this.__v && (l2 && this.__h.push(l2), m(this));
  }, _.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
  }, _.prototype.render = d, t = [], o = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;

  // node_modules/.pnpm/@portabletext+toolkit@1.0.5/node_modules/@portabletext/toolkit/dist/portable-text-toolkit.mjs
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a2, prop, b2[prop]);
      }
    return a2;
  };
  var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
  function isPortableTextSpan(node) {
    return node._type === "span" && "text" in node && typeof node.text === "string" && (typeof node.marks === "undefined" || Array.isArray(node.marks) && node.marks.every((mark) => typeof mark === "string"));
  }
  function isPortableTextBlock(node) {
    return typeof node._type === "string" && node._type[0] !== "@" && (!("markDefs" in node) || Array.isArray(node.markDefs) && node.markDefs.every((def) => typeof def._key === "string")) && "children" in node && Array.isArray(node.children) && node.children.every((child) => typeof child === "object" && "_type" in child);
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
  function isPortableTextToolkitTextNode(node) {
    return node._type === "@text";
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
    for (let i2 = 0; i2 < children.length; i2++) {
      const span = children[i2];
      if (!span) {
        continue;
      }
      const marksNeeded = sortedMarks[i2] || [];
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
        const node = {
          _type: "@span",
          _key: span._key,
          children: [],
          markDef,
          markType,
          markKey
        };
        currentNode.children.push(node);
        nodeStack.push(node);
        currentNode = node;
      }
      if (isPortableTextSpan(span)) {
        const lines = span.text.split("\n");
        for (let line = lines.length; line-- > 1; ) {
          lines.splice(line, 0, "\n");
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
    for (let i2 = 0; i2 < blocks.length; i2++) {
      const block = blocks[i2];
      if (!block) {
        continue;
      }
      if (!isPortableTextListItemBlock(block)) {
        tree.push(block);
        currentList = void 0;
        continue;
      }
      if (!currentList) {
        currentList = listFromBlock(block, i2, mode);
        tree.push(currentList);
        continue;
      }
      if (blockMatchesList(block, currentList)) {
        currentList.children.push(block);
        continue;
      }
      if ((block.level || 1) > currentList.level) {
        const newList = listFromBlock(block, i2, mode);
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
        const match = matchingBranch && findListMatching(matchingBranch, block);
        if (match) {
          currentList = match;
          currentList.children.push(block);
          continue;
        }
        currentList = listFromBlock(block, i2, mode);
        tree.push(currentList);
        continue;
      }
      if (block.listItem !== currentList.listItem) {
        const matchingBranch = tree[tree.length - 1];
        const match = matchingBranch && findListMatching(matchingBranch, { level: block.level || 1 });
        if (match && match.listItem === block.listItem) {
          currentList = match;
          currentList.children.push(block);
          continue;
        } else {
          currentList = listFromBlock(block, i2, mode);
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
    const node = rootNode.children[rootNode.children.length - 1];
    return node && !isPortableTextSpan(node) ? findListMatching(node, matching) : void 0;
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

  // node_modules/.pnpm/@portabletext+to-html@1.0.3/node_modules/@portabletext/to-html/dist/to-html.mjs
  var __defProp2 = Object.defineProperty;
  var __defProps2 = Object.defineProperties;
  var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues2 = (a2, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp2.call(b2, prop))
        __defNormalProp2(a2, prop, b2[prop]);
    if (__getOwnPropSymbols2)
      for (var prop of __getOwnPropSymbols2(b2)) {
        if (__propIsEnum2.call(b2, prop))
          __defNormalProp2(a2, prop, b2[prop]);
      }
    return a2;
  };
  var __spreadProps2 = (a2, b2) => __defProps2(a2, __getOwnPropDescs2(b2));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0)
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
    return str.replace(/[&<>"']/g, (s2) => `&${charMap[s2]};`);
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
    const rendered = nested.map((node, index) => renderNode({ node, index, isInline: false, renderNode }));
    return rendered.join("");
  }
  var getNodeRenderer = (components, handleMissingComponent) => {
    function renderNode(options) {
      const { node, index, isInline } = options;
      if (isPortableTextToolkitList(node)) {
        return renderList(node, index);
      }
      if (isPortableTextListItemBlock(node)) {
        return renderListItem(node, index);
      }
      if (isPortableTextToolkitSpan(node)) {
        return renderSpan(node);
      }
      if (isPortableTextBlock(node)) {
        return renderBlock(node, index, isInline);
      }
      if (isPortableTextToolkitTextNode(node)) {
        return renderText(node);
      }
      return renderCustomBlock(node, index, isInline);
    }
    function renderListItem(node, index) {
      const tree = serializeBlock({ node, index, isInline: false, renderNode });
      const renderer = components.listItem;
      const handler = typeof renderer === "function" ? renderer : renderer[node.listItem];
      const itemHandler = handler || components.unknownListItem;
      if (itemHandler === components.unknownListItem) {
        const style = node.listItem || "bullet";
        handleMissingComponent(unknownListItemStyleWarning(style), {
          type: style,
          nodeType: "listItemStyle"
        });
      }
      let children = tree.children;
      if (node.style && node.style !== "normal") {
        const _a = node, { listItem } = _a, blockNode = __objRest(_a, ["listItem"]);
        children = renderNode({ node: blockNode, index, isInline: false, renderNode });
      }
      return itemHandler({ value: node, index, isInline: false, renderNode, children });
    }
    function renderList(node, index) {
      const children = node.children.map((child, childIndex) => renderNode({
        node: child._key ? child : __spreadProps2(__spreadValues2({}, child), { _key: `li-${index}-${childIndex}` }),
        index,
        isInline: false,
        renderNode
      }));
      const component = components.list;
      const handler = typeof component === "function" ? component : component[node.listItem];
      const list = handler || components.unknownList;
      if (list === components.unknownList) {
        const style = node.listItem || "bullet";
        handleMissingComponent(unknownListStyleWarning(style), { nodeType: "listStyle", type: style });
      }
      return list({ value: node, index, isInline: false, renderNode, children: children.join("") });
    }
    function renderSpan(node) {
      const { markDef, markType, markKey } = node;
      const span = components.marks[markType] || components.unknownMark;
      const children = node.children.map((child, childIndex) => renderNode({ node: child, index: childIndex, isInline: true, renderNode }));
      if (span === components.unknownMark) {
        handleMissingComponent(unknownMarkWarning(markType), { nodeType: "mark", type: markType });
      }
      return span({
        text: spanToPlainText(node),
        value: markDef,
        markType,
        markKey,
        renderNode,
        children: children.join("")
      });
    }
    function renderBlock(node, index, isInline) {
      const _a = serializeBlock({ node, index, isInline, renderNode }), { _key } = _a, props = __objRest(_a, ["_key"]);
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
    function renderText(node) {
      if (node.text === "\n") {
        const hardBreak = components.hardBreak;
        return hardBreak ? hardBreak() : "\n";
      }
      return escapeHTML(node.text);
    }
    function renderCustomBlock(value, index, isInline) {
      const node = components.types[value._type];
      if (!node) {
        handleMissingComponent(unknownTypeWarning(value._type), {
          nodeType: "block",
          type: value._type
        });
      }
      const component = node || components.unknownType;
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
    const { node, index, isInline, renderNode } = options;
    const tree = buildMarksTree(node);
    const children = tree.map((child, i2) => renderNode({ node: child, isInline: true, index: i2, renderNode }));
    return {
      _key: node._key || `block-${index}`,
      children: children.join(""),
      index,
      isInline,
      node
    };
  }
  function noop() {
  }

  // src/Renderer.jsx
  var Renderer = ({ data }) => {
    let html;
    if (data) {
      const formatted = JSON.stringify(data, null, 2);
      const blocks = data.result[0].columns[0].content[0].menuSectionItems[0].description;
      html = toHTML(blocks);
    }
    if (html)
      return /* @__PURE__ */ v("div", {
        dangerouslySetInnerHTML: {
          __html: html
        }
      });
  };

  // src/App.jsx
  var url = "https://omde8c75.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'menu'%5D%7B%0A%20%20columns%5B%5D%20%7B%0A%20%20%20%20content%5B%5D%20%7B%0A%20%20%20%20%20%20menuSectionHeading%2C%0A%20%20%20%20%20%20menuSectionItems%5B%5D%20%7B%0A%20%20%20%20%20%20%20%20name%2C%0A%20%20%20%20%20%20%20%20price%2C%0A%20%20%20%20%20%20%20%20description%5B%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%20%0A%7D";
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
      } catch (e2) {
        console.error(e2);
      }
    };
    runQuery = async () => {
      let _data;
      try {
        _data = await this.fetchContent();
        this.setState({ data: _data });
      } catch (e2) {
        console.error(e2);
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
  } catch (e2) {
    appId = ripe_menu_app_id_default;
  }
  S(/* @__PURE__ */ v(App, null), document.querySelector(`#${appId}`));
})();
