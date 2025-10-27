import P, { useRef as dr, useEffect as vr, useState as pr, useId as gr, useMemo as mr, createContext as br, useContext as hr } from "react";
import S from "clsx";
var re = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function yr() {
  if (Ce) return L;
  Ce = 1;
  var x = P, p = Symbol.for("react.element"), y = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, g = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(d, s, E) {
    var u, v = {}, j = null, C = null;
    E !== void 0 && (j = "" + E), s.key !== void 0 && (j = "" + s.key), s.ref !== void 0 && (C = s.ref);
    for (u in s) f.call(s, u) && !m.hasOwnProperty(u) && (v[u] = s[u]);
    if (d && d.defaultProps) for (u in s = d.defaultProps, s) v[u] === void 0 && (v[u] = s[u]);
    return { $$typeof: p, type: d, key: j, ref: C, props: v, _owner: g.current };
  }
  return L.Fragment = y, L.jsx = R, L.jsxs = R, L;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function xr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var x = P, p = Symbol.for("react.element"), y = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), d = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), N = Symbol.iterator, M = "@@iterator";
    function ke(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = N && e[N] || e[M];
      return typeof r == "function" ? r : null;
    }
    var A = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Pe("error", e, t);
      }
    }
    function Pe(e, r, t) {
      {
        var n = A.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var l = t.map(function(o) {
          return String(o);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var Ne = !1, De = !1, Fe = !1, Ae = !1, Ie = !1, te;
    te = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === m || Ie || e === g || e === E || e === u || Ae || e === C || Ne || De || Fe || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === v || e.$$typeof === R || e.$$typeof === d || e.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case f:
          return "Fragment";
        case y:
          return "Portal";
        case m:
          return "Profiler";
        case g:
          return "StrictMode";
        case E:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var r = e;
            return ne(r) + ".Consumer";
          case R:
            var t = e;
            return ne(t._context) + ".Provider";
          case s:
            return We(e, e.render, "ForwardRef");
          case v:
            var n = e.displayName || null;
            return n !== null ? n : k(e.type) || "Memo";
          case j: {
            var i = e, l = i._payload, o = i._init;
            try {
              return k(o(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, W = 0, ae, oe, ie, se, le, ue, ce;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Ye() {
      {
        if (W === 0) {
          ae = console.log, oe = console.info, ie = console.warn, se = console.error, le = console.group, ue = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        W++;
      }
    }
    function Le() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: ae
            }),
            info: D({}, e, {
              value: oe
            }),
            warn: D({}, e, {
              value: ie
            }),
            error: D({}, e, {
              value: se
            }),
            group: D({}, e, {
              value: le
            }),
            groupCollapsed: D({}, e, {
              value: ue
            }),
            groupEnd: D({}, e, {
              value: ce
            })
          });
        }
        W < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = A.ReactCurrentDispatcher, G;
    function U(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            G = n && n[1] || "";
          }
        return `
` + G + e;
      }
    }
    var K = !1, B;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Ve();
    }
    function de(e, r) {
      if (!e || K)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      K = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = q.current, q.current = null, Ye();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (T) {
              n = T;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (T) {
              n = T;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            n = T;
          }
          e();
        }
      } catch (T) {
        if (T && n && typeof T.stack == "string") {
          for (var a = T.stack.split(`
`), w = n.stack.split(`
`), b = a.length - 1, h = w.length - 1; b >= 1 && h >= 0 && a[b] !== w[h]; )
            h--;
          for (; b >= 1 && h >= 0; b--, h--)
            if (a[b] !== w[h]) {
              if (b !== 1 || h !== 1)
                do
                  if (b--, h--, h < 0 || a[b] !== w[h]) {
                    var O = `
` + a[b].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, O), O;
                  }
                while (b >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        K = !1, q.current = l, Le(), Error.prepareStackTrace = i;
      }
      var $ = e ? e.displayName || e.name : "", F = $ ? U($) : "";
      return typeof e == "function" && B.set(e, F), F;
    }
    function Me(e, r, t) {
      return de(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function z(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Ue(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case E:
          return U("Suspense");
        case u:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return Me(e.render);
          case v:
            return z(e.type, r, t);
          case j: {
            var n = e, i = n._payload, l = n._init;
            try {
              return z(l(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, ve = {}, pe = A.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, i) {
      {
        var l = Function.call.bind(Y);
        for (var o in e)
          if (l(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var w = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              a = b;
            }
            a && !(a instanceof Error) && (J(i), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), J(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, J(i), _("Failed %s type: %s", t, a.message), J(null));
          }
      }
    }
    var ze = Array.isArray;
    function X(e) {
      return ze(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function me(e) {
      if (qe(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), ge(e);
    }
    var be = A.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, ye;
    function Ke(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      typeof e.ref == "string" && be.current;
    }
    function Ze(e, r) {
      {
        var t = function() {
          he || (he = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          ye || (ye = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, i, l, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: l
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, i) {
      {
        var l, o = {}, a = null, w = null;
        t !== void 0 && (me(t), a = "" + t), Xe(r) && (me(r.key), a = "" + r.key), Ke(r) && (w = r.ref, He(r, i));
        for (l in r)
          Y.call(r, l) && !Ge.hasOwnProperty(l) && (o[l] = r[l]);
        if (e && e.defaultProps) {
          var b = e.defaultProps;
          for (l in b)
            o[l] === void 0 && (o[l] = b[l]);
        }
        if (a || w) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(o, h), w && Qe(o, h);
        }
        return er(e, a, w, i, n, be.current, o);
      }
    }
    var H = A.ReactCurrentOwner, xe = A.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        xe.setExtraStackFrame(t);
      } else
        xe.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === p;
    }
    function Re() {
      {
        if (H.current) {
          var e = k(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var Ee = {};
    function nr(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== H.current && (n = " It was passed a child from " + k(e._owner.type) + "."), I(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), I(null);
      }
    }
    function we(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Q(n) && _e(n, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = ke(e);
          if (typeof i == "function" && i !== e.entries)
            for (var l = i.call(e), o; !(o = l.next()).done; )
              Q(o.value) && _e(o.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === v))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = k(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var i = k(r);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            I(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    var je = {};
    function Te(e, r, t, n, i, l) {
      {
        var o = $e(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = tr();
          w ? a += w : a += Re();
          var b;
          e === null ? b = "null" : X(e) ? b = "array" : e !== void 0 && e.$$typeof === p ? (b = "<" + (k(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, a);
        }
        var h = rr(e, r, t, i, l);
        if (h == null)
          return h;
        if (o) {
          var O = r.children;
          if (O !== void 0)
            if (n)
              if (X(O)) {
                for (var $ = 0; $ < O.length; $++)
                  we(O[$], e);
                Object.freeze && Object.freeze(O);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(O, e);
        }
        if (Y.call(r, "key")) {
          var F = k(e), T = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), ee = T.length > 0 ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!je[F + ee]) {
            var cr = T.length > 0 ? "{" + T.join(": ..., ") + ": ...}" : "{}";
            _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ee, F, cr, F), je[F + ee] = !0;
          }
        }
        return e === f ? or(h) : ar(h), h;
      }
    }
    function ir(e, r, t) {
      return Te(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Te(e, r, t, !1);
    }
    var lr = sr, ur = ir;
    V.Fragment = f, V.jsx = lr, V.jsxs = ur;
  }()), V;
}
process.env.NODE_ENV === "production" ? re.exports = yr() : re.exports = xr();
var c = re.exports;
const Rr = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700",
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  outline: "border border-gray-300 text-gray-900 bg-transparent",
  ghost: "bg-transparent text-gray-900 hover:bg-gray-100"
}, Er = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg"
}, _r = P.forwardRef(
  ({ variant: x = "primary", size: p = "md", className: y, loading: f = !1, disabled: g, children: m, ...R }, d) => /* @__PURE__ */ c.jsx(
    "button",
    {
      ref: d,
      type: "button",
      className: S(
        "rounded-md inline-flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        Rr[x],
        Er[p],
        g && "opacity-50 cursor-not-allowed",
        f && "opacity-90 cursor-not-allowed animate-pulse",
        y
      ),
      ...R,
      children: /* @__PURE__ */ c.jsx("span", { children: m })
    }
  )
);
_r.displayName = "Button";
const wr = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-3 text-base",
  lg: "h-12 px-4 text-lg"
}, jr = P.forwardRef((x, p) => {
  const {
    label: y,
    helperText: f,
    error: g = !1,
    inputSize: m = "md",
    className: R,
    containerClassName: d,
    id: s,
    disabled: E,
    required: u,
    ...v
  } = x, j = s || P.useId(), C = !!g, N = f || typeof g == "string" && g ? `${j}-help` : void 0;
  return /* @__PURE__ */ c.jsxs("div", { className: S("w-full", d), children: [
    y && /* @__PURE__ */ c.jsxs("label", { htmlFor: j, className: "mb-1 block text-sm font-medium text-gray-700", children: [
      y,
      u && /* @__PURE__ */ c.jsx("span", { className: "ml-0.5 text-red-600", children: "*" })
    ] }),
    /* @__PURE__ */ c.jsx(
      "div",
      {
        className: S(
          "relative rounded-md",
          E ? "opacity-60 cursor-not-allowed" : "opacity-100"
        ),
        children: /* @__PURE__ */ c.jsx(
          "input",
          {
            id: j,
            ref: p,
            "aria-invalid": C || void 0,
            "aria-describedby": N,
            disabled: E,
            required: u,
            className: S(
              "block w-full rounded-md border transition placeholder:text-gray-400",
              "focus:outline-none focus:ring-2 focus:ring-offset-0",
              wr[m],
              C ? "border-red-500 focus:ring-red-500/30 focus:border-red-500" : "border-gray-300 focus:ring-indigo-500/30 focus:border-indigo-600",
              R
            ),
            ...v
          }
        )
      }
    ),
    (f || C) && /* @__PURE__ */ c.jsx(
      "p",
      {
        id: N,
        className: S(
          "mt-1 text-xs",
          C ? "text-red-600" : "text-gray-500"
        ),
        children: C && typeof g == "string" ? g : f
      }
    )
  ] });
});
jr.displayName = "Input";
const Dr = P.forwardRef(
  (x, p) => {
    const {
      label: y,
      className: f,
      containerClassName: g,
      indeterminate: m = !1,
      checked: R,
      onChange: d,
      disabled: s,
      ...E
    } = x, u = dr(null);
    return vr(() => {
      console.log("indeterminate", m), u.current && (u.current.indeterminate = !!m);
    }, [m]), /* @__PURE__ */ c.jsxs(
      "label",
      {
        className: S(
          "inline-flex items-center gap-2 select-none",
          s && "opacity-60 cursor-not-allowed",
          g
        ),
        children: [
          /* @__PURE__ */ c.jsxs("span", { className: "relative inline-flex items-center justify-center h-5 w-5", children: [
            /* @__PURE__ */ c.jsx(
              "input",
              {
                ref: (v) => {
                  v && (u.current = v, typeof p == "function" ? p(v) : p && (p.current = v));
                },
                type: "checkbox",
                className: S(
                  "appearance-none h-5 w-5 rounded border",
                  "focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-600",
                  "checked:bg-indigo-600 checked:border-indigo-600",
                  m && "bg-indigo-600",
                  f
                ),
                disabled: s,
                checked: R,
                onChange: (v) => d == null ? void 0 : d(v.target.checked, v),
                ...E
              }
            ),
            R && !m && /* @__PURE__ */ c.jsx(
              "svg",
              {
                className: "pointer-events-none absolute h-3.5 w-3.5 text-white",
                viewBox: "0 0 20 20",
                fill: "none",
                children: /* @__PURE__ */ c.jsx(
                  "path",
                  {
                    d: "M6 10l2.5 2.5L14 7",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }
                )
              }
            ),
            m && /* @__PURE__ */ c.jsx("span", { className: "pointer-events-none absolute h-0.5 w-2 bg-white rounded-sm" })
          ] }),
          y && /* @__PURE__ */ c.jsx("span", { className: "text-sm text-gray-800", children: y })
        ]
      }
    );
  }
), Se = br(null), Fr = ({
  name: x,
  value: p,
  defaultValue: y,
  onChange: f,
  children: g,
  className: m,
  label: R
}) => {
  const [d, s] = pr(y), E = gr(), u = x ?? E, v = p !== void 0, j = v ? p : d, C = (M) => {
    v || s(M), f == null || f(M);
  }, N = mr(
    () => ({ name: u, value: j, setValue: C }),
    [u, j]
  );
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      role: "radiogroup",
      "aria-label": R,
      className: S("flex flex-col gap-2", m),
      children: /* @__PURE__ */ c.jsx(Se.Provider, { value: N, children: g })
    }
  );
};
function Tr() {
  const x = hr(Se);
  if (!x) throw new Error("Radio must be used with RadioGroup");
  return x;
}
const Ar = P.forwardRef((x, p) => {
  const { value: y, label: f, disabled: g, className: m, ...R } = x, d = Tr(), s = d.value === y;
  return /* @__PURE__ */ c.jsxs("label", { className: S("inline-flex items-center gap-2 select-none", g && "opacity-60 cursor-not-allowed"), children: [
    /* @__PURE__ */ c.jsxs("span", { className: "relative inline-flex items-center justify-center h-5 w-5", children: [
      /* @__PURE__ */ c.jsx(
        "input",
        {
          ref: p,
          type: "radio",
          name: d.name,
          value: y,
          checked: s,
          onChange: () => d.setValue(y),
          disabled: g,
          className: S(
            "appearance-none h-5 w-5 rounded-full border border-gray-300 bg-white",
            "focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-600",
            "checked:border-indigo-600",
            m
          ),
          ...R
        }
      ),
      s && /* @__PURE__ */ c.jsx("span", { className: "pointer-events-none absolute h-2.5 w-2.5 rounded-full bg-indigo-600" })
    ] }),
    f && /* @__PURE__ */ c.jsx("span", { className: "text-sm text-gray-800", children: f })
  ] });
}), Cr = "inline-flex items-center font-medium select-none", Or = {
  sm: "text-xs px-2 py-0.5 gap-1",
  md: "text-sm px-2.5 py-1 gap-1.5"
}, Sr = {
  md: "rounded-md",
  full: "rounded-full"
}, kr = {
  neutral: { solid: "bg-gray-200 text-gray-900", soft: "bg-gray-100 text-gray-800" },
  primary: { solid: "bg-indigo-600 text-white", soft: "bg-indigo-100 text-indigo-800" },
  success: { solid: "bg-emerald-600 text-white", soft: "bg-emerald-100 text-emerald-800" },
  warning: { solid: "bg-amber-500 text-black", soft: "bg-amber-100 text-amber-800" },
  danger: { solid: "bg-rose-600 text-white", soft: "bg-rose-100 text-rose-800" }
}, Ir = P.forwardRef((x, p) => {
  const {
    variant: y = "neutral",
    size: f = "sm",
    rounded: g = "md",
    soft: m = !1,
    dot: R = !1,
    className: d,
    children: s,
    ...E
  } = x, u = kr[y][m ? "soft" : "solid"];
  return /* @__PURE__ */ c.jsxs(
    "span",
    {
      ref: p,
      className: S(Cr, Or[f], Sr[g], u, d),
      ...E,
      children: [
        R && /* @__PURE__ */ c.jsx("span", { className: "inline-block h-1.5 w-1.5 rounded-full bg-current", "aria-hidden": "true" }),
        s
      ]
    }
  );
});
export {
  Ir as Badge,
  _r as Button,
  Dr as Checkbox,
  jr as Input,
  Ar as Radio,
  Fr as RadioGroup
};
