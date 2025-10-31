import * as $ from "react";
import C, { useRef as Nr, useEffect as Tr, useState as Ye, useId as Or, useMemo as ze, createContext as Be, useContext as Ue, useCallback as q } from "react";
import _ from "clsx";
import { createPortal as qe } from "react-dom";
var de = { exports: {} }, H = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function Pr() {
  if (Ve) return H;
  Ve = 1;
  var r = C, a = Symbol.for("react.element"), o = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, m = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(s, l, u) {
    var d, y = {}, p = null, h = null;
    u !== void 0 && (p = "" + u), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (h = l.ref);
    for (d in l) g.call(l, d) && !b.hasOwnProperty(d) && (y[d] = l[d]);
    if (s && s.defaultProps) for (d in l = s.defaultProps, l) y[d] === void 0 && (y[d] = l[d]);
    return { $$typeof: a, type: s, key: p, ref: h, props: y, _owner: m.current };
  }
  return H.Fragment = o, H.jsx = c, H.jsxs = c, H;
}
var X = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function Ar() {
  return Le || (Le = 1, process.env.NODE_ENV !== "production" && function() {
    var r = C, a = Symbol.for("react.element"), o = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), f = Symbol.iterator, v = "@@iterator";
    function S(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = f && e[f] || e[v];
      return typeof t == "function" ? t : null;
    }
    var N = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(e) {
      {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), x = 1; x < t; x++)
          i[x - 1] = arguments[x];
        z("error", e, i);
      }
    }
    function z(e, t, i) {
      {
        var x = N.ReactDebugCurrentFrame, E = x.getStackAddendum();
        E !== "" && (t += "%s", i = i.concat([E]));
        var k = i.map(function(j) {
          return String(j);
        });
        k.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, k);
      }
    }
    var M = !1, R = !1, F = !1, V = !1, K = !1, fe;
    fe = Symbol.for("react.module.reference");
    function er(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === b || K || e === m || e === u || e === d || V || e === h || M || R || F || typeof e == "object" && e !== null && (e.$$typeof === p || e.$$typeof === y || e.$$typeof === c || e.$$typeof === s || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === fe || e.getModuleId !== void 0));
    }
    function rr(e, t, i) {
      var x = e.displayName;
      if (x)
        return x;
      var E = t.displayName || t.name || "";
      return E !== "" ? i + "(" + E + ")" : i;
    }
    function ge(e) {
      return e.displayName || "Context";
    }
    function L(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case o:
          return "Portal";
        case b:
          return "Profiler";
        case m:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            var t = e;
            return ge(t) + ".Consumer";
          case c:
            var i = e;
            return ge(i._context) + ".Provider";
          case l:
            return rr(e, e.render, "ForwardRef");
          case y:
            var x = e.displayName || null;
            return x !== null ? x : L(e.type) || "Memo";
          case p: {
            var E = e, k = E._payload, j = E._init;
            try {
              return L(j(k));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, G = 0, be, me, pe, he, ve, xe, ye;
    function we() {
    }
    we.__reactDisabledLog = !0;
    function tr() {
      {
        if (G === 0) {
          be = console.log, me = console.info, pe = console.warn, he = console.error, ve = console.group, xe = console.groupCollapsed, ye = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: we,
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
        G++;
      }
    }
    function nr() {
      {
        if (G--, G === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, e, {
              value: be
            }),
            info: W({}, e, {
              value: me
            }),
            warn: W({}, e, {
              value: pe
            }),
            error: W({}, e, {
              value: he
            }),
            group: W({}, e, {
              value: ve
            }),
            groupCollapsed: W({}, e, {
              value: xe
            }),
            groupEnd: W({}, e, {
              value: ye
            })
          });
        }
        G < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = N.ReactCurrentDispatcher, ae;
    function Q(e, t, i) {
      {
        if (ae === void 0)
          try {
            throw Error();
          } catch (E) {
            var x = E.stack.trim().match(/\n( *(at )?)/);
            ae = x && x[1] || "";
          }
        return `
` + ae + e;
      }
    }
    var oe = !1, ee;
    {
      var ar = typeof WeakMap == "function" ? WeakMap : Map;
      ee = new ar();
    }
    function je(e, t) {
      if (!e || oe)
        return "";
      {
        var i = ee.get(e);
        if (i !== void 0)
          return i;
      }
      var x;
      oe = !0;
      var E = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var k;
      k = ne.current, ne.current = null, tr();
      try {
        if (t) {
          var j = function() {
            throw Error();
          };
          if (Object.defineProperty(j.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(j, []);
            } catch (D) {
              x = D;
            }
            Reflect.construct(e, [], j);
          } else {
            try {
              j.call();
            } catch (D) {
              x = D;
            }
            e.call(j.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (D) {
            x = D;
          }
          e();
        }
      } catch (D) {
        if (D && x && typeof D.stack == "string") {
          for (var w = D.stack.split(`
`), A = x.stack.split(`
`), T = w.length - 1, P = A.length - 1; T >= 1 && P >= 0 && w[T] !== A[P]; )
            P--;
          for (; T >= 1 && P >= 0; T--, P--)
            if (w[T] !== A[P]) {
              if (T !== 1 || P !== 1)
                do
                  if (T--, P--, P < 0 || w[T] !== A[P]) {
                    var I = `
` + w[T].replace(" at new ", " at ");
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && ee.set(e, I), I;
                  }
                while (T >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        oe = !1, ne.current = k, nr(), Error.prepareStackTrace = E;
      }
      var U = e ? e.displayName || e.name : "", Y = U ? Q(U) : "";
      return typeof e == "function" && ee.set(e, Y), Y;
    }
    function or(e, t, i) {
      return je(e, !1);
    }
    function sr(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function re(e, t, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return je(e, sr(e));
      if (typeof e == "string")
        return Q(e);
      switch (e) {
        case u:
          return Q("Suspense");
        case d:
          return Q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return or(e.render);
          case y:
            return re(e.type, t, i);
          case p: {
            var x = e, E = x._payload, k = x._init;
            try {
              return re(k(E), t, i);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, Re = {}, Ee = N.ReactDebugCurrentFrame;
    function te(e) {
      if (e) {
        var t = e._owner, i = re(e.type, e._source, t ? t.type : null);
        Ee.setExtraStackFrame(i);
      } else
        Ee.setExtraStackFrame(null);
    }
    function ir(e, t, i, x, E) {
      {
        var k = Function.call.bind(J);
        for (var j in e)
          if (k(e, j)) {
            var w = void 0;
            try {
              if (typeof e[j] != "function") {
                var A = Error((x || "React class") + ": " + i + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw A.name = "Invariant Violation", A;
              }
              w = e[j](t, j, x, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              w = T;
            }
            w && !(w instanceof Error) && (te(E), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", x || "React class", i, j, typeof w), te(null)), w instanceof Error && !(w.message in Re) && (Re[w.message] = !0, te(E), O("Failed %s type: %s", i, w.message), te(null));
          }
      }
    }
    var lr = Array.isArray;
    function se(e) {
      return lr(e);
    }
    function cr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, i = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function ur(e) {
      try {
        return Ce(e), !1;
      } catch {
        return !0;
      }
    }
    function Ce(e) {
      return "" + e;
    }
    function ke(e) {
      if (ur(e))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", cr(e)), Ce(e);
    }
    var _e = N.ReactCurrentOwner, dr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, Ne;
    function fr(e) {
      if (J.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function gr(e) {
      if (J.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function br(e, t) {
      typeof e.ref == "string" && _e.current;
    }
    function mr(e, t) {
      {
        var i = function() {
          Se || (Se = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function pr(e, t) {
      {
        var i = function() {
          Ne || (Ne = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var hr = function(e, t, i, x, E, k, j) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: i,
        props: j,
        // Record the component responsible for creating this element.
        _owner: k
      };
      return w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(w, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function vr(e, t, i, x, E) {
      {
        var k, j = {}, w = null, A = null;
        i !== void 0 && (ke(i), w = "" + i), gr(t) && (ke(t.key), w = "" + t.key), fr(t) && (A = t.ref, br(t, E));
        for (k in t)
          J.call(t, k) && !dr.hasOwnProperty(k) && (j[k] = t[k]);
        if (e && e.defaultProps) {
          var T = e.defaultProps;
          for (k in T)
            j[k] === void 0 && (j[k] = T[k]);
        }
        if (w || A) {
          var P = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          w && mr(j, P), A && pr(j, P);
        }
        return hr(e, w, A, E, x, _e.current, j);
      }
    }
    var ie = N.ReactCurrentOwner, Te = N.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var t = e._owner, i = re(e.type, e._source, t ? t.type : null);
        Te.setExtraStackFrame(i);
      } else
        Te.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Oe() {
      {
        if (ie.current) {
          var e = L(ie.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function xr(e) {
      return "";
    }
    var Pe = {};
    function yr(e) {
      {
        var t = Oe();
        if (!t) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (t = `

Check the top-level render call using <` + i + ">.");
        }
        return t;
      }
    }
    function Ae(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = yr(t);
        if (Pe[i])
          return;
        Pe[i] = !0;
        var x = "";
        e && e._owner && e._owner !== ie.current && (x = " It was passed a child from " + L(e._owner.type) + "."), B(e), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, x), B(null);
      }
    }
    function Fe(e, t) {
      {
        if (typeof e != "object")
          return;
        if (se(e))
          for (var i = 0; i < e.length; i++) {
            var x = e[i];
            ce(x) && Ae(x, t);
          }
        else if (ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var E = S(e);
          if (typeof E == "function" && E !== e.entries)
            for (var k = E.call(e), j; !(j = k.next()).done; )
              ce(j.value) && Ae(j.value, t);
        }
      }
    }
    function wr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var i;
        if (typeof t == "function")
          i = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === y))
          i = t.propTypes;
        else
          return;
        if (i) {
          var x = L(t);
          ir(i, e.props, "prop", x, e);
        } else if (t.PropTypes !== void 0 && !le) {
          le = !0;
          var E = L(t);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function jr(e) {
      {
        for (var t = Object.keys(e.props), i = 0; i < t.length; i++) {
          var x = t[i];
          if (x !== "children" && x !== "key") {
            B(e), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", x), B(null);
            break;
          }
        }
        e.ref !== null && (B(e), O("Invalid attribute `ref` supplied to `React.Fragment`."), B(null));
      }
    }
    var De = {};
    function Ie(e, t, i, x, E, k) {
      {
        var j = er(e);
        if (!j) {
          var w = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var A = xr();
          A ? w += A : w += Oe();
          var T;
          e === null ? T = "null" : se(e) ? T = "array" : e !== void 0 && e.$$typeof === a ? (T = "<" + (L(e.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : T = typeof e, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, w);
        }
        var P = vr(e, t, i, E, k);
        if (P == null)
          return P;
        if (j) {
          var I = t.children;
          if (I !== void 0)
            if (x)
              if (se(I)) {
                for (var U = 0; U < I.length; U++)
                  Fe(I[U], e);
                Object.freeze && Object.freeze(I);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(I, e);
        }
        if (J.call(t, "key")) {
          var Y = L(e), D = Object.keys(t).filter(function(Sr) {
            return Sr !== "key";
          }), ue = D.length > 0 ? "{key: someKey, " + D.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!De[Y + ue]) {
            var _r = D.length > 0 ? "{" + D.join(": ..., ") + ": ...}" : "{}";
            O(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ue, Y, _r, Y), De[Y + ue] = !0;
          }
        }
        return e === g ? jr(P) : wr(P), P;
      }
    }
    function Rr(e, t, i) {
      return Ie(e, t, i, !0);
    }
    function Er(e, t, i) {
      return Ie(e, t, i, !1);
    }
    var Cr = Er, kr = Rr;
    X.Fragment = g, X.jsx = Cr, X.jsxs = kr;
  }()), X;
}
process.env.NODE_ENV === "production" ? de.exports = Pr() : de.exports = Ar();
var n = de.exports;
const Fr = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-900 ",
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400 active:text-white",
  outline: "border border-gray-300 text-gray-900 bg-transparent active:bg-gray-200",
  ghost: "bg-transparent text-gray-900 hover:bg-gray-100  active:bg-gray-200"
}, Dr = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg"
}, Ke = C.forwardRef(
  ({ variant: r = "primary", size: a = "md", className: o, loading: g = !1, disabled: m, children: b, ...c }, s) => /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: s,
      type: "button",
      className: _(
        "rounded-md inline-flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-offset-2",
        Fr[r],
        Dr[a],
        m && "opacity-50 cursor-not-allowed",
        g && "opacity-90 cursor-not-allowed animate-pulse",
        o
      ),
      ...c,
      children: /* @__PURE__ */ n.jsx("span", { children: b })
    }
  )
);
Ke.displayName = "Button";
const Ir = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-3 text-base",
  lg: "h-12 px-4 text-lg"
}, Ge = C.forwardRef((r, a) => {
  const {
    label: o,
    helperText: g,
    error: m = !1,
    inputSize: b = "md",
    className: c,
    containerClassName: s,
    id: l,
    disabled: u,
    required: d,
    ...y
  } = r, p = l || C.useId(), h = !!m, f = g || typeof m == "string" && m ? `${p}-help` : void 0;
  return /* @__PURE__ */ n.jsxs("div", { className: _("w-full", s), children: [
    o && /* @__PURE__ */ n.jsxs("label", { htmlFor: p, className: "mb-1 block text-sm font-medium text-gray-700", children: [
      o,
      d && /* @__PURE__ */ n.jsx("span", { className: "ml-0.5 text-red-600", children: "*" })
    ] }),
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: _(
          "relative rounded-md",
          u ? "opacity-60 cursor-not-allowed" : "opacity-100"
        ),
        children: /* @__PURE__ */ n.jsx(
          "input",
          {
            id: p,
            ref: a,
            "aria-invalid": h || void 0,
            "aria-describedby": f,
            disabled: u,
            required: d,
            className: _(
              "block w-full rounded-md border transition placeholder:text-gray-400",
              "focus:outline-none focus:ring-2 focus:ring-offset-0",
              Ir[b],
              h ? "border-red-500 focus:ring-red-500/30 focus:border-red-500" : "border-gray-300 focus:ring-indigo-500/30 focus:border-indigo-600",
              c
            ),
            ...y
          }
        )
      }
    ),
    (g || h) && /* @__PURE__ */ n.jsx(
      "p",
      {
        id: f,
        className: _(
          "mt-1 text-xs",
          h ? "text-red-600" : "text-gray-500"
        ),
        children: h && typeof m == "string" ? m : g
      }
    )
  ] });
});
Ge.displayName = "Input";
const Vr = C.forwardRef(
  (r, a) => {
    const {
      label: o,
      className: g,
      containerClassName: m,
      indeterminate: b = !1,
      checked: c,
      onChange: s,
      disabled: l,
      ...u
    } = r, d = Nr(null), y = b && !c;
    return Tr(() => {
      d.current && (d.current.indeterminate = !!b);
    }, [b, c]), /* @__PURE__ */ n.jsxs(
      "label",
      {
        className: _(
          "inline-flex items-center gap-2 select-none",
          l && "opacity-60 cursor-not-allowed",
          m
        ),
        children: [
          /* @__PURE__ */ n.jsxs("span", { className: "relative inline-flex items-center justify-center h-5 w-5", children: [
            /* @__PURE__ */ n.jsx(
              "input",
              {
                ref: d,
                type: "checkbox",
                className: _(
                  "appearance-none h-5 w-5 rounded border",
                  "focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-600",
                  (c || y) && "bg-indigo-600 border-indigo-600",
                  g
                ),
                disabled: l,
                checked: c,
                onChange: (p) => s == null ? void 0 : s(p.target.checked, p),
                ...u
              }
            ),
            c && !y && /* @__PURE__ */ n.jsx(
              "svg",
              {
                className: "pointer-events-none absolute h-3.5 w-3.5 text-white",
                viewBox: "0 0 20 20",
                fill: "none",
                children: /* @__PURE__ */ n.jsx(
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
            y && /* @__PURE__ */ n.jsx("span", { className: "pointer-events-none absolute h-0.5 w-2 bg-white rounded-sm" })
          ] }),
          o && /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-800", children: o })
        ]
      }
    );
  }
), Je = Be(null), Lr = ({
  name: r,
  value: a,
  defaultValue: o,
  onChange: g,
  children: m,
  className: b,
  label: c
}) => {
  const [s, l] = Ye(o), u = Or(), d = r ?? u, y = a !== void 0, p = y ? a : s, h = (v) => {
    y || l(v), g == null || g(v);
  }, f = ze(
    () => ({ name: d, value: p, setValue: h }),
    [d, p]
  );
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      role: "radiogroup",
      "aria-label": c,
      className: _("flex flex-col gap-2", b),
      children: /* @__PURE__ */ n.jsx(Je.Provider, { value: f, children: m })
    }
  );
};
function $r() {
  const r = Ue(Je);
  if (!r) throw new Error("Radio must be used with RadioGroup");
  return r;
}
const Mr = C.forwardRef((r, a) => {
  const { value: o, label: g, disabled: m, className: b, ...c } = r, s = $r(), l = s.value === o;
  return /* @__PURE__ */ n.jsxs("label", { className: _("inline-flex items-center gap-2 select-none", m && "opacity-60 cursor-not-allowed"), children: [
    /* @__PURE__ */ n.jsxs("span", { className: "relative inline-flex items-center justify-center h-5 w-5", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          ref: a,
          type: "radio",
          name: s.name,
          value: o,
          checked: l,
          onChange: () => s.setValue(o),
          disabled: m,
          className: _(
            "appearance-none h-5 w-5 rounded-full border border-gray-300 bg-white",
            "focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-600",
            "checked:border-indigo-600",
            b
          ),
          ...c
        }
      ),
      l && /* @__PURE__ */ n.jsx("span", { className: "pointer-events-none absolute h-2.5 w-2.5 rounded-full bg-indigo-600" })
    ] }),
    g && /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-800", children: g })
  ] });
}), Wr = "inline-flex items-center font-medium select-none", Yr = {
  sm: "text-xs px-2 py-0.5 gap-1",
  md: "text-sm px-2.5 py-1 gap-1.5"
}, zr = {
  md: "rounded-md",
  full: "rounded-full"
}, Br = {
  neutral: { solid: "bg-gray-200 text-gray-900", soft: "bg-gray-100 text-gray-800" },
  primary: { solid: "bg-indigo-600 text-white", soft: "bg-indigo-100 text-indigo-800" },
  success: { solid: "bg-emerald-600 text-white", soft: "bg-emerald-100 text-emerald-800" },
  warning: { solid: "bg-amber-500 text-black", soft: "bg-amber-100 text-amber-800" },
  danger: { solid: "bg-rose-600 text-white", soft: "bg-rose-100 text-rose-800" }
}, He = C.forwardRef((r, a) => {
  const {
    variant: o = "neutral",
    size: g = "sm",
    rounded: m = "md",
    soft: b = !1,
    dot: c = !1,
    className: s,
    children: l,
    ...u
  } = r, d = Br[o][b ? "soft" : "solid"];
  return /* @__PURE__ */ n.jsxs(
    "span",
    {
      ref: a,
      className: _(Wr, Yr[g], zr[m], d, s),
      ...u,
      children: [
        c && /* @__PURE__ */ n.jsx("span", { className: "inline-block h-1.5 w-1.5 rounded-full bg-current", "aria-hidden": "true" }),
        l
      ]
    }
  );
}), it = ({ children: r, className: a }) => /* @__PURE__ */ n.jsx("div", { className: _("grid md:grid-cols-2 gap-6", a), children: r }), lt = ({
  title: r,
  children: a
}) => /* @__PURE__ */ n.jsxs("div", { children: [
  /* @__PURE__ */ n.jsx("p", { className: "text-sm text-gray-600 mb-2", children: r }),
  /* @__PURE__ */ n.jsx("div", { className: "space-y-4", children: a })
] }), Ur = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg"
}, $e = {
  none: "rounded-none",
  md: "rounded-lg",
  full: "rounded-full"
}, qr = {
  none: "hidden",
  online: "bg-emerald-500",
  offline: "bg-gray-400",
  busy: "bg-rose-500",
  away: "bg-amber-400"
};
function Kr(r) {
  return r ? r.trim().split(/\s+/).slice(0, 2).map((o) => {
    var g;
    return ((g = o[0]) == null ? void 0 : g.toUpperCase()) ?? "";
  }).join("") : "";
}
const Gr = C.forwardRef(
  (r, a) => {
    const {
      src: o,
      alt: g,
      name: m,
      size: b = "md",
      rounded: c = "full",
      status: s = "none",
      withShadow: l = !1,
      showFallback: u = !1,
      srcSet: d,
      sizes: y,
      className: p,
      ...h
    } = r, [f, v] = C.useState(!1), S = !!o && !f && !u, N = Kr(m);
    return /* @__PURE__ */ n.jsxs(
      "div",
      {
        ref: a,
        className: _(
          "relative inline-flex shrink-0 items-center justify-center select-none bg-blue-100 text-gray-600",
          Ur[b],
          $e[c],
          l && "shadow-md shadow-gray-500",
          p
        ),
        "aria-label": g ?? m ?? "avatar",
        ...h,
        children: [
          S && /* @__PURE__ */ n.jsx(
            "img",
            {
              src: o,
              alt: g ?? m ?? "avatar",
              srcSet: d,
              sizes: y,
              className: _("h-full w-full object-cover", $e[c]),
              onError: () => v(!0)
            }
          ),
          !S && N && /* @__PURE__ */ n.jsx("span", { className: "font-medium tracking-wide", children: N }),
          !S && !N && /* @__PURE__ */ n.jsx(
            "span",
            {
              className: "text-gray-400",
              "aria-hidden": "true",
              role: "img",
              title: "User",
              children: /* @__PURE__ */ n.jsxs(
                "svg",
                {
                  width: "22",
                  height: "22",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  className: "opacity-80",
                  children: [
                    /* @__PURE__ */ n.jsx(
                      "path",
                      {
                        d: "M12 12c2.761 0 5-2.462 5-5.5S14.761 1 12 1 7 3.462 7 6.5 9.239 12 12 12z",
                        fill: "currentColor",
                        opacity: "0.6"
                      }
                    ),
                    /* @__PURE__ */ n.jsx(
                      "path",
                      {
                        d: "M4 21.2C4 17.76 7.582 15 12 15s8 2.76 8 6.2V23H4v-1.8z",
                        fill: "currentColor",
                        opacity: "0.35"
                      }
                    )
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ n.jsx(
            "span",
            {
              className: _(
                "absolute bottom-0 right-0 h-3 w-3 rounded-full ring-2 ring-white",
                qr[s]
              ),
              "aria-hidden": s === "none" ? "true" : "false",
              title: s !== "none" ? s : void 0
            }
          )
        ]
      }
    );
  }
);
Gr.displayName = "Avatar";
function ct(r, a) {
  const [o, g] = $.useState(r), [m, b] = $.useState({}), c = $.useCallback(
    (p, h) => {
      g((f) => ({ ...f, [p]: h }));
    },
    []
  ), s = $.useCallback(
    (p) => o[p],
    [o]
  ), l = $.useCallback(
    (p) => (h) => c(p, h),
    [c]
  ), u = $.useCallback(() => {
    const p = {};
    if (!a) return p;
    for (const h of Object.keys(a)) {
      const f = o[h], v = a[h];
      if (v) {
        if (v.required) {
          const S = typeof v.required == "string" ? v.required : "Це поле обовʼязкове";
          if (f == null || typeof f == "string" && f.trim() === "" || Array.isArray(f) && f.length === 0 || // 🔧 ключевая правка — убрали "&& r.required === true"
          typeof f == "boolean" && f === !1) {
            p[h] = S;
            continue;
          }
        }
        if (typeof v.minLen == "number" && typeof f == "string" && f.trim().length < v.minLen) {
          p[h] = `Мінімум ${v.minLen} символів`;
          continue;
        }
        if (v.email && typeof f == "string") {
          const S = typeof v.email == "string" ? v.email : "Некоректний email";
          if (!/\S+@\S+\.\S+/.test(f)) {
            p[h] = S;
            continue;
          }
        }
      }
    }
    return p;
  }, [a, o]), d = $.useCallback(
    (p) => (h) => {
      h == null || h.preventDefault();
      const f = u();
      b(f), Object.values(f).some(Boolean) || p(o);
    },
    [u, o]
  ), y = $.useCallback((p) => {
    g((h) => ({ ...h, ...p ?? {} })), b({});
  }, []);
  return {
    values: o,
    errors: m,
    setValue: c,
    getValue: s,
    handleChange: l,
    handleSubmit: d,
    reset: y
  };
}
function ut(r) {
  const { form: a, onSubmit: o, className: g, children: m } = r;
  return /* @__PURE__ */ n.jsx(
    "form",
    {
      onSubmit: o ? a.handleSubmit(o) : void 0,
      className: g,
      children: m
    }
  );
}
const Me = (r) => {
  var M;
  const {
    options: a,
    searchable: o = !0,
    placeholder: g = "Select…",
    disabled: m,
    className: b,
    multiple: c,
    value: s
  } = r, [l, u] = C.useState(!1), [d, y] = C.useState(""), p = C.useRef(null), h = C.useRef(null);
  function f() {
    y("");
  }
  C.useEffect(() => {
    function R(F) {
      p.current && (p.current.contains(F.target) || (u(!1), console.log("close"), f()));
    }
    return document.addEventListener("mousedown", R), () => document.removeEventListener("mousedown", R);
  }, []);
  const v = d.trim().toLowerCase(), S = v ? a.filter((R) => R.label.toLowerCase().includes(v)) : a;
  let N = /* @__PURE__ */ n.jsx("span", { className: "text-gray-400", children: g });
  if (c) {
    const R = s.map((F) => {
      var V;
      return ((V = a.find((K) => K.value === F)) == null ? void 0 : V.label) || F;
    });
    N = R.length > 0 ? /* @__PURE__ */ n.jsx("span", { className: "flex flex-wrap gap-1", children: R.map((F, V) => /* @__PURE__ */ n.jsx(
      "span",
      {
        className: "text-xs bg-gray-100 border border-gray-300 rounded px-1.5 py-0.5",
        children: F
      },
      V
    )) }) : /* @__PURE__ */ n.jsx("span", { className: "text-gray-400", children: g });
  } else {
    const R = (M = a.find((F) => F.value === s)) == null ? void 0 : M.label;
    R && (N = /* @__PURE__ */ n.jsx("span", { children: R }));
  }
  function O(R) {
    return c ? s.includes(R) : s === R;
  }
  function z(R) {
    if (c) {
      const V = s.includes(R.value) ? s.filter((K) => K !== R.value) : [...r.value, R.value];
      r.onChange(V);
    } else
      r.onChange(R.value), u(!1);
  }
  return /* @__PURE__ */ n.jsxs("div", { ref: p, className: _("relative", b), children: [
    /* @__PURE__ */ n.jsx(
      "button",
      {
        type: "button",
        disabled: m,
        onClick: () => u((R) => !R),
        className: _(
          "w-full h-10 px-3 rounded-md border transition text-left",
          "border-gray-300 bg-white hover:border-gray-400",
          "focus:outline-none focus:ring-2 focus:ring-indigo-500/30",
          m && "opacity-60 cursor-not-allowed"
        ),
        "aria-expanded": l,
        children: N
      }
    ),
    l && /* @__PURE__ */ n.jsxs("div", { className: "absolute z-20 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg", children: [
      o && /* @__PURE__ */ n.jsx("div", { className: "p-2 border-b", children: /* @__PURE__ */ n.jsx(
        "input",
        {
          ref: h,
          value: d,
          onChange: (R) => y(R.target.value),
          placeholder: "Пошук…",
          className: "w-full h-9 px-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30",
          autoFocus: !0
        }
      ) }),
      /* @__PURE__ */ n.jsx("ul", { className: "max-h-56 overflow-auto py-1", children: S.length === 0 ? /* @__PURE__ */ n.jsx("li", { className: "px-3 py-2 text-sm text-gray-500", children: `"${d}" not found` }) : S.map((R) => {
        const F = O(R.value);
        return console.log(s), /* @__PURE__ */ n.jsxs(
          "li",
          {
            role: "option",
            "aria-selected": F,
            className: _(
              "px-3 py-2 text-sm cursor-pointer flex items-center justify-between",
              "hover:bg-indigo-50"
            ),
            onClick: () => z(R),
            children: [
              /* @__PURE__ */ n.jsx("span", { children: R.label }),
              F && /* @__PURE__ */ n.jsx(He, { variant: "success", rounded: "full", children: "Selected" })
            ]
          },
          R.value
        );
      }) }),
      r.multiple && /* @__PURE__ */ n.jsxs("div", { className: "p-2 border-t flex items-center gap-2 justify-end", children: [
        /* @__PURE__ */ n.jsx(
          "button",
          {
            type: "button",
            className: "text-xs px-2 py-1 rounded border border-gray-300 hover:bg-gray-100",
            onClick: () => {
              r.onChange([]), f();
            },
            children: "Очистити"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "button",
          {
            type: "button",
            className: "text-xs px-2 py-1 rounded border border-indigo-600 text-indigo-700 hover:bg-indigo-50",
            onClick: () => u(!1),
            children: "Готово"
          }
        )
      ] })
    ] })
  ] });
}, Z = ({ label: r, error: a, children: o }) => /* @__PURE__ */ n.jsxs("div", { className: "flex flex-col gap-1 relative", children: [
  r && /* @__PURE__ */ n.jsx("label", { className: "text-sm font-medium", children: r }),
  o,
  a && /* @__PURE__ */ n.jsx("div", { className: "pt-1 absolute bottom-[-20px] right-0 border-red-800", children: /* @__PURE__ */ n.jsx(He, { variant: "danger", children: a }) })
] });
function dt(r) {
  const { form: a, name: o, label: g, type: m = "text", placeholder: b, className: c } = r, s = a.getValue(o), l = a.errors[o];
  return /* @__PURE__ */ n.jsx(Z, { label: g, error: l, children: /* @__PURE__ */ n.jsx(
    Ge,
    {
      value: String(s ?? ""),
      type: m,
      placeholder: b,
      className: _(c, l && "border-red-600"),
      onChange: (u) => {
        var d;
        return a.handleChange(o)(((d = u == null ? void 0 : u.target) == null ? void 0 : d.value) ?? u);
      }
    }
  ) });
}
function ft(r) {
  const { form: a, name: o, label: g, className: m } = r, b = !!a.getValue(o), c = a.errors[o];
  return /* @__PURE__ */ n.jsx(Z, { error: c, children: /* @__PURE__ */ n.jsx(
    Vr,
    {
      checked: b,
      onChange: (s) => {
        var l;
        return a.handleChange(o)(((l = s == null ? void 0 : s.target) == null ? void 0 : l.checked) ?? !!s);
      },
      containerClassName: m,
      label: g,
      className: _(m, c && "border-red-600")
    }
  ) });
}
function gt(r) {
  const { form: a, name: o, label: g, placeholder: m, options: b, className: c, multiple: s = !1 } = r, l = a.getValue(o), u = a.errors[o];
  if (s) {
    const d = Array.isArray(l) ? l : l != null && l !== "" ? [String(l)] : [], y = (p) => {
      a.setValue(o, p);
    };
    return /* @__PURE__ */ n.jsx(Z, { label: g, error: u, children: /* @__PURE__ */ n.jsx(
      Me,
      {
        multiple: !0,
        options: b,
        value: d,
        onChange: y,
        placeholder: m,
        className: c
      }
    ) });
  } else {
    const d = l == null || l === "" ? null : String(l), y = (p) => {
      a.setValue(o, p);
    };
    return /* @__PURE__ */ n.jsx(Z, { label: g, error: u, children: /* @__PURE__ */ n.jsx(
      Me,
      {
        options: b,
        value: d,
        onChange: y,
        placeholder: m,
        className: c
      }
    ) });
  }
}
function bt(r) {
  const { form: a, name: o, label: g, options: m, className: b } = r, c = a.getValue(o) ?? "", s = a.errors[o];
  return /* @__PURE__ */ n.jsx(Z, { label: g, error: s, children: /* @__PURE__ */ n.jsx(
    Lr,
    {
      value: c,
      onChange: (l) => a.setValue(o, l),
      className: b,
      children: m.map((l) => /* @__PURE__ */ n.jsx(Mr, { value: l.value, label: l.label }, l.value))
    }
  ) });
}
const Jr = {
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4"
}, Hr = ({ position: r, children: a }) => /* @__PURE__ */ n.jsx(
  "div",
  {
    className: `fixed z-50 flex flex-col gap-2 ${Jr[r]} items-${r.endsWith("left") ? "start" : "end"}`,
    "aria-live": "polite",
    role: "status",
    children: a
  }
), Xr = {
  success: "bg-green-200 text-green-900 border-green-200",
  error: "bg-red-200 text-rose-900 border-rose-200",
  info: "bg-blue-200 text-blue-900 border-blue-200",
  warning: "bg-yellow-200 text-yellow-900 border-yellow-200"
}, Zr = ({ item: r, onClose: a }) => /* @__PURE__ */ n.jsxs(
  "div",
  {
    className: _("min-w-[240px] max-w-[360px] border shadow-sm rounded-xl p-3 flex items-center gap-3", Xr[r.type], r.className && r.className),
    role: r.type === "error" ? "alert" : "status",
    children: [
      /* @__PURE__ */ n.jsx("div", { className: "flex-1 text-sm", children: r.message }),
      /* @__PURE__ */ n.jsx(
        Ke,
        {
          onClick: a,
          variant: "ghost",
          "aria-label": "Close notification",
          size: "sm",
          children: "×"
        }
      )
    ]
  }
), Xe = Be(null), mt = () => {
  const r = Ue(Xe);
  if (!r) throw new Error("use <ToastProvider/>");
  const a = q(
    (b, c) => r.show({
      type: "success",
      message: b,
      duration: c,
      className: ""
    }),
    [r]
  ), o = q(
    (b, c, s) => r.show({ type: "error", message: b, duration: c, className: s }),
    [r]
  ), g = q(
    (b, c, s) => r.show({ type: "info", message: b, duration: c, className: s }),
    [r]
  ), m = q(
    (b, c, s) => r.show({ type: "warning", message: b, duration: c, className: s }),
    [r]
  );
  return { ...r, success: a, error: o, info: g, warning: m };
}, pt = ({
  children: r,
  position: a = "top-right",
  max: o = 3,
  duration: g = 3e3
}) => {
  const [m, b] = Ye([]), c = q((u) => {
    b((d) => {
      const y = d.find((p) => p.id === u);
      return y != null && y.timer && window.clearTimeout(y.timer), d.filter((p) => p.id !== u);
    });
  }, []), s = q(
    (u) => {
      const d = u.id ?? u.id ?? Math.random().toString(36).slice(2), y = {
        id: d,
        type: u.type ?? "info",
        message: u.message,
        duration: u.duration ?? g,
        createdAt: Date.now(),
        className: u.className ?? ""
      };
      b((h) => {
        const f = [...h, y].sort((v, S) => v.createdAt - S.createdAt);
        for (; f.length > o; ) {
          const v = f.shift();
          v != null && v.timer && window.clearTimeout(v.timer);
        }
        return f;
      });
      const p = window.setTimeout(() => {
        b((h) => h.filter((f) => f.id !== d));
      }, y.duration);
      return b((h) => h.map((f) => f.id === d ? { ...f, timer: p } : f)), d;
    },
    [g, o]
  );
  C.useEffect(
    () => () => {
      b((u) => (u.forEach((d) => d.timer && window.clearTimeout(d.timer)), []));
    },
    []
  );
  const l = ze(() => ({ show: s, remove: c }), [s, c]);
  return /* @__PURE__ */ n.jsxs(Xe.Provider, { value: l, children: [
    r,
    qe(
      /* @__PURE__ */ n.jsx(Hr, { position: a, children: m.map((u) => /* @__PURE__ */ n.jsx(Zr, { item: u, onClose: () => c(u.id) }, u.id)) }),
      document.body
    )
  ] });
}, Ze = C.createContext(null), Qe = () => {
  const r = C.useContext(Ze);
  if (!r) throw new Error("use <Tabs.Root>");
  return r;
}, Qr = ({ defaultValue: r, className: a, children: o }) => {
  const [g, m] = C.useState(r), b = C.useRef(/* @__PURE__ */ new Map()), c = C.useRef([]), s = (u, d) => {
    c.current.includes(u) || c.current.push(u), b.current.set(u, d);
  }, l = (u) => {
    const d = b.current.get(u);
    return d || null;
  };
  return /* @__PURE__ */ n.jsx(Ze.Provider, { value: {
    value: g,
    setValue: m,
    register: s,
    tabs: c.current,
    getRef: l
  }, children: /* @__PURE__ */ n.jsx("div", { className: a, children: o }) });
}, et = ({ className: r, children: a }) => /* @__PURE__ */ n.jsx(
  "div",
  {
    role: "tablist",
    "aria-orientation": "horizontal",
    className: _("inline-flex gap-1 rounded-xl bg-gray-100 p-1", r),
    children: a
  }
), rt = ({ value: r, disabled: a, className: o, children: g }) => {
  const { value: m, setValue: b, register: c, tabs: s, getRef: l } = Qe(), u = m === r, d = C.useRef(null);
  C.useEffect(() => {
    a || c(r, d.current);
  }, [a, c, r]);
  const y = (h) => {
    var f;
    b(h), (f = l(h)) == null || f.focus();
  }, p = (h) => {
    if (console.log(h), console.log(r), a) return;
    const f = h.key;
    if (f !== "ArrowLeft" && f !== "ArrowRight" && f !== "Home" && f !== "End")
      return;
    h.preventDefault();
    const v = s.indexOf(r);
    if (v === -1 || s.length === 0) return;
    let S = v;
    f === "ArrowLeft" && (S = (v - 1 + s.length) % s.length), f === "ArrowRight" && (S = (v + 1) % s.length);
    const N = s[S];
    N && y(N);
  };
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      role: "tab",
      ref: d,
      id: `tab-${r}`,
      "aria-selected": u,
      "aria-controls": `panel-${r}`,
      disabled: a,
      onClick: () => !a && b(r),
      className: _(
        "px-3 py-2 rounded-lg text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
        u ? "bg-white shadow text-gray-900" : "text-gray-600 hover:bg-white/60",
        a && "opacity-50 cursor-not-allowed",
        o
      ),
      onKeyDown: p,
      children: g
    }
  );
}, tt = ({ value: r, className: a, children: o }) => {
  const { value: g } = Qe(), m = g === r;
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      role: "tabpanel",
      id: `panel-${r}`,
      "aria-labelledby": `tab-${r}`,
      hidden: !m,
      className: _("mt-3 rounded-xl btabs btabs-gray-200 p-4", a),
      children: m && o
    }
  );
}, ht = {
  Root: Qr,
  List: et,
  Trigger: rt,
  Content: tt
}, We = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(","), nt = {
  base: {
    backdrop: "bg-black/40",
    panel: "bg-white text-gray-900"
  },
  glass: {
    backdrop: "bg-black/30 backdrop-blur-md",
    panel: "bg-white/30 backdrop-blur-xl border border-white/40 text-gray-900 shadow-2xl"
  },
  dark: {
    backdrop: "bg-gray-900/70",
    panel: "bg-gray-900 text-white border border-gray-700 shadow-2xl"
  },
  gray: {
    backdrop: "bg-gray-900/50",
    panel: "bg-gray-50 text-gray-900 border border-gray-200 shadow-lg"
  },
  red: {
    backdrop: "bg-red-900/60",
    panel: "bg-red-50 text-red-900 border border-red-200 shadow-lg"
  },
  orange: {
    backdrop: "bg-orange-900/60",
    panel: "bg-orange-50 text-orange-900 border border-orange-200 shadow-lg"
  },
  amber: {
    backdrop: "bg-amber-900/60",
    panel: "bg-amber-50 text-amber-900 border border-amber-200 shadow-lg"
  },
  yellow: {
    backdrop: "bg-yellow-900/60",
    panel: "bg-yellow-50 text-yellow-900 border border-yellow-200 shadow-lg"
  },
  green: {
    backdrop: "bg-green-900/60",
    panel: "bg-green-50 text-green-900 border border-green-200 shadow-lg"
  },
  blue: {
    backdrop: "bg-blue-900/60",
    panel: "bg-blue-50 text-blue-900 border border-blue-200 shadow-lg"
  },
  violet: {
    backdrop: "bg-violet-900/60",
    panel: "bg-violet-50 text-violet-900 border border-violet-200 shadow-lg"
  }
}, vt = ({
  open: r,
  onClose: a,
  title: o,
  closeOnBackdrop: g = !0,
  children: m,
  blur: b = !0,
  style: c = "base"
}) => {
  const s = C.useRef(null), l = C.useRef(null), u = C.useRef(null);
  C.useEffect(() => {
    if (r) {
      u.current = document.activeElement;
      const f = setTimeout(() => {
        const v = l.current;
        if (!v) return;
        const S = v.querySelectorAll(We);
        S.length > 0 ? S[0].focus() : (v.tabIndex = -1, v.focus());
      }, 0);
      return () => clearTimeout(f);
    }
  }, [r]);
  const d = C.useCallback(() => {
    const f = u.current;
    f && typeof f.focus == "function" && f.focus(), u.current = null;
  }, []);
  C.useEffect(() => {
    if (!r) return;
    const f = (v) => {
      if (v.key === "Escape") {
        a();
        return;
      }
      if (v.key === "Tab") {
        const S = l.current;
        if (!S) return;
        const N = Array.from(S.querySelectorAll(We)).filter((R) => !R.hasAttribute("disabled"));
        if (N.length === 0) {
          v.preventDefault();
          return;
        }
        const O = N[0], z = N[N.length - 1], M = document.activeElement;
        !v.shiftKey && M === z ? (v.preventDefault(), O.focus()) : v.shiftKey && M === O && (v.preventDefault(), z.focus());
      }
    };
    return document.addEventListener("keydown", f, !0), () => document.removeEventListener("keydown", f, !0);
  }, [r, a]);
  const y = (f) => {
    g && f.target === f.currentTarget && a();
  };
  if (C.useEffect(() => {
    r || d();
  }, [r, d]), !r) return null;
  const { backdrop: p, panel: h } = nt[c];
  return qe(
    /* @__PURE__ */ n.jsx(
      "div",
      {
        ref: s,
        onClick: y,
        className: _(
          "fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-200",
          b && "backdrop-blur-[5px]",
          p
        ),
        children: /* @__PURE__ */ n.jsxs(
          "div",
          {
            ref: l,
            role: "dialog",
            "aria-modal": "true",
            className: _(
              "w-full max-w-lg rounded-2xl outline-none focus:outline-none transition-transform duration-200",
              h
            ),
            children: [
              o && /* @__PURE__ */ n.jsx("div", { className: "px-5 py-4 border-b border-gray-200/50", children: /* @__PURE__ */ n.jsx("h2", { className: "text-lg font-semibold", children: o }) }),
              /* @__PURE__ */ n.jsx("div", { className: "px-5 py-4", children: m })
            ]
          }
        )
      }
    ),
    document.body
  );
};
export {
  Gr as Avatar,
  He as Badge,
  Ke as Button,
  lt as Card,
  Vr as Checkbox,
  ft as CheckboxField,
  ut as Form,
  Ge as Input,
  dt as InputField,
  vt as Modal,
  Mr as Radio,
  Lr as RadioGroup,
  bt as RadioGroupField,
  Me as Select,
  gt as SelectField,
  ht as Tabs,
  pt as ToastProvider,
  it as VariantGrid,
  ct as useForm,
  mt as useToast
};
