import { r as c, j as e, R as ve } from "./jsx-runtime-BfF-YriY.js";
import {
  H,
  F as k,
  I as K,
  G as Z,
  d as we,
  i as ye,
  a as E,
  C as se,
  b as Ne,
  D as de,
  A as Ce,
  c as he,
  e as $e,
  f as G,
  g as Se,
  T as Te,
  h as ke,
} from "./hStackFull-CFb3YDvE.js";
import { B as Be, W as U } from "./wrap-SIAqqN24.js";
import { N as Ie, o as Le, h as Me } from "./components-BL27QBWM.js";
import { F as C } from "./flex-COvQVarW.js";
import { V as L } from "./vStackFull-BVjnb3Lo.js";
import {
  d as Ee,
  t as Pe,
  a as Re,
  b as Oe,
  C as O,
  c as ze,
  e as Ae,
  f as Fe,
  g as He,
  h as De,
  i as Ve,
  j as We,
  k as Ge,
  l as Ue,
  m as Ke,
  n as Ze,
  o as Ye,
  p as oe,
  q as qe,
  r as _e,
  s as Je,
  u as Qe,
  v as Xe,
  w as et,
  x as tt,
  y as st,
  z as rt,
  A as lt,
  B as ot,
  D as nt,
  E as at,
  F as it,
  G as ct,
} from "./custonNavLink-CcJZnLvH.js";
import { B as N } from "./box-BdT0KxCu.js";
import { B as dt, a as ht, b as xt } from "./index-ztp-Fbuh.js";
import { V as I } from "./vStack-xcuHHABo.js";
import { I as _ } from "./image-DzzBi0M2.js";
import {
  u as xe,
  f as mt,
  b as ut,
  P as ft,
  L as gt,
  m as V,
  a as y,
  T as J,
} from "./transition-DVSgZb6N.js";
function me() {
  const s = c.useRef(!1);
  return (
    xe(
      () => (
        (s.current = !0),
        () => {
          s.current = !1;
        }
      ),
      []
    ),
    s
  );
}
function pt() {
  const s = me(),
    [r, o] = c.useState(0),
    n = c.useCallback(() => {
      s.current && o(r + 1);
    }, [r]);
  return [c.useCallback(() => mt.postRender(n), [n]), r];
}
class bt extends c.Component {
  getSnapshotBeforeUpdate(r) {
    const o = this.props.childRef.current;
    if (o && r.isPresent && !this.props.isPresent) {
      const n = this.props.sizeRef.current;
      (n.height = o.offsetHeight || 0),
        (n.width = o.offsetWidth || 0),
        (n.top = o.offsetTop),
        (n.left = o.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function jt({ children: s, isPresent: r }) {
  const o = c.useId(),
    n = c.useRef(null),
    t = c.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    c.useInsertionEffect(() => {
      const { width: l, height: h, top: i, left: d } = t.current;
      if (r || !n.current || !l || !h) return;
      n.current.dataset.motionPopId = o;
      const x = document.createElement("style");
      return (
        document.head.appendChild(x),
        x.sheet &&
          x.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${h}px !important;
            top: ${i}px !important;
            left: ${d}px !important;
          }
        `),
        () => {
          document.head.removeChild(x);
        }
      );
    }, [r]),
    c.createElement(
      bt,
      { isPresent: r, childRef: n, sizeRef: t },
      c.cloneElement(s, { ref: n })
    )
  );
}
const X = ({
  children: s,
  initial: r,
  isPresent: o,
  onExitComplete: n,
  custom: t,
  presenceAffectsLayout: l,
  mode: h,
}) => {
  const i = ut(vt),
    d = c.useId(),
    x = c.useMemo(
      () => ({
        id: d,
        initial: r,
        isPresent: o,
        custom: t,
        onExitComplete: (m) => {
          i.set(m, !0);
          for (const a of i.values()) if (!a) return;
          n && n();
        },
        register: (m) => (i.set(m, !1), () => i.delete(m)),
      }),
      l ? void 0 : [o]
    );
  return (
    c.useMemo(() => {
      i.forEach((m, a) => i.set(a, !1));
    }, [o]),
    c.useEffect(() => {
      !o && !i.size && n && n();
    }, [o]),
    h === "popLayout" && (s = c.createElement(jt, { isPresent: o }, s)),
    c.createElement(ft.Provider, { value: x }, s)
  );
};
function vt() {
  return new Map();
}
function wt(s) {
  return c.useEffect(() => () => s(), []);
}
const W = (s) => s.key || "";
function yt(s, r) {
  s.forEach((o) => {
    const n = W(o);
    r.set(n, o);
  });
}
function Nt(s) {
  const r = [];
  return (
    c.Children.forEach(s, (o) => {
      c.isValidElement(o) && r.push(o);
    }),
    r
  );
}
const re = ({
  children: s,
  custom: r,
  initial: o = !0,
  onExitComplete: n,
  exitBeforeEnter: t,
  presenceAffectsLayout: l = !0,
  mode: h = "sync",
}) => {
  const i = c.useContext(gt).forceRender || pt()[0],
    d = me(),
    x = Nt(s);
  let m = x;
  const a = c.useRef(new Map()).current,
    f = c.useRef(m),
    g = c.useRef(new Map()).current,
    u = c.useRef(!0);
  if (
    (xe(() => {
      (u.current = !1), yt(x, g), (f.current = m);
    }),
    wt(() => {
      (u.current = !0), g.clear(), a.clear();
    }),
    u.current)
  )
    return c.createElement(
      c.Fragment,
      null,
      m.map((j) =>
        c.createElement(
          X,
          {
            key: W(j),
            isPresent: !0,
            initial: o ? void 0 : !1,
            presenceAffectsLayout: l,
            mode: h,
          },
          j
        )
      )
    );
  m = [...m];
  const b = f.current.map(W),
    $ = x.map(W),
    S = b.length;
  for (let j = 0; j < S; j++) {
    const T = b[j];
    $.indexOf(T) === -1 && !a.has(T) && a.set(T, void 0);
  }
  return (
    h === "wait" && a.size && (m = []),
    a.forEach((j, T) => {
      if ($.indexOf(T) !== -1) return;
      const M = g.get(T);
      if (!M) return;
      const P = b.indexOf(T);
      let p = j;
      if (!p) {
        const D = () => {
          a.delete(T);
          const F = Array.from(g.keys()).filter((R) => !$.includes(R));
          if (
            (F.forEach((R) => g.delete(R)),
            (f.current = x.filter((R) => {
              const le = W(R);
              return le === T || F.includes(le);
            })),
            !a.size)
          ) {
            if (d.current === !1) return;
            i(), n && n();
          }
        };
        (p = c.createElement(
          X,
          {
            key: W(M),
            isPresent: !1,
            onExitComplete: D,
            custom: r,
            presenceAffectsLayout: l,
            mode: h,
          },
          M
        )),
          a.set(T, p);
      }
      m.splice(P, 0, p);
    }),
    (m = m.map((j) => {
      const T = j.key;
      return a.has(T)
        ? j
        : c.createElement(
            X,
            { key: W(j), isPresent: !0, presenceAffectsLayout: l, mode: h },
            j
          );
    })),
    c.createElement(
      c.Fragment,
      null,
      a.size ? m : m.map((j) => c.cloneElement(j))
    )
  );
};
function w({
  className: s,
  buttonText: r = "",
  padding: o = "px-[1vh] py-[0px]",
  onClick: n,
  iconLeft: t,
  iconRight: l,
  ref: h,
  htmlType: i = "button",
  iconStyle: d,
  isLoading: x,
  isDisabled: m,
  type: a = "normal",
  width: f = "w-fit",
  height: g,
  to: u,
}) {
  const b =
      a === "normal"
        ? "normalButtonStyles"
        : a === "smallNormal"
        ? "smallButtonStyles"
        : a === "negative"
        ? "negativeButtonStyles"
        : a === "smallNegative"
        ? "smallNegativeButtonStyles"
        : a === "unstyled"
        ? "unstyledButtonStyles"
        : "smallUnstyledButtonStyles",
    $ =
      g ||
      (a === "normal"
        ? "h-[3.5vh]"
        : a === "smallNormal"
        ? "h-[2.6vh]"
        : a === "negative"
        ? "h-[3.5vh]"
        : a === "smallNegative"
        ? "h-[2.6vh]"
        : a === "unstyled"
        ? "h-[3.5vh]"
        : "h-[2.6vh]"),
    S =
      a === "normal"
        ? "text-[2.3vh]"
        : a === "smallNormal"
        ? "text-[1.7vh]"
        : a === "negative"
        ? "text-[2.3vh]"
        : a === "smallNegative"
        ? "text-[1.7vh]"
        : a === "unstyled"
        ? "text-[2.3vh]"
        : "text-[1.7vh]";
  function j() {
    const T = `${b} ${f} ${$} ${s} ${o} relative ${
      m ? "opacity-40 cursor-not-allowed" : ""
    }`;
    return e.jsx("button", {
      onClick: m ? void 0 : n,
      disabled: m,
      type: i,
      ref: h,
      children: e.jsxs(H, {
        className: T,
        children: [
          x &&
            r !== "" &&
            a !== "unstyled" &&
            a !== "smallUnstyled" &&
            e.jsx(k, {
              className:
                "absolute top-0 left-0 h-full justify-center items-center z-10",
              children: e.jsx(Be, {
                dotCount: 3,
                color: "white",
                dotSize: 7,
                speed: "3s",
              }),
            }),
          t && e.jsx(K, { icon: t, iconClassName: `${S} ${d}` }),
          r,
          l && e.jsx(K, { icon: l, iconClassName: `${S} ${d}` }),
        ],
      }),
    });
  }
  return e.jsx(e.Fragment, {
    children: u ? e.jsx(Ie, { to: u, children: e.jsx(j, {}) }) : e.jsx(j, {}),
  });
}
const Ct = [
  "border-100-sm",
  "border-100-md",
  "border-100-lg",
  "border-100-xl",
  "border-190-sm",
  "border-190-md",
  "border-190-lg",
  "border-190-xl",
  "border-180-sm",
  "border-180-md",
  "border-180-lg",
  "border-180-xl",
  "border-170-sm",
  "border-170-md",
  "border-170-lg",
  "border-170-xl",
  "border-160-sm",
  "border-160-md",
  "border-160-lg",
  "border-160-xl",
  "border-150-sm",
  "border-150-md",
  "border-150-lg",
  "border-150-xl",
  "border-200-sm",
  "border-200-md",
  "border-200-lg",
  "border-200-xl",
  "border-290-sm",
  "border-290-md",
  "border-290-lg",
  "border-290-xl",
  "border-280-sm",
  "border-280-md",
  "border-280-lg",
  "border-280-xl",
  "border-270-sm",
  "border-270-md",
  "border-270-lg",
  "border-270-xl",
  "border-260-sm",
  "border-260-md",
  "border-260-lg",
  "border-260-xl",
  "border-250-sm",
  "border-250-md",
  "border-250-lg",
  "border-250-xl",
  "border-300-sm",
  "border-300-md",
  "border-300-lg",
  "border-300-xl",
  "border-390-sm",
  "border-390-md",
  "border-390-lg",
  "border-390-xl",
  "border-380-sm",
  "border-380-md",
  "border-380-lg",
  "border-380-xl",
  "border-370-sm",
  "border-370-md",
  "border-370-lg",
  "border-370-xl",
  "border-360-sm",
  "border-360-md",
  "border-360-lg",
  "border-360-xl",
  "border-350-sm",
  "border-350-md",
  "border-350-lg",
  "border-350-xl",
  "border-400-sm",
  "border-400-md",
  "border-400-lg",
  "border-400-xl",
  "border-490-sm",
  "border-490-md",
  "border-490-lg",
  "border-490-xl",
  "border-480-sm",
  "border-480-md",
  "border-480-lg",
  "border-480-xl",
  "border-470-sm",
  "border-470-md",
  "border-470-lg",
  "border-470-xl",
  "border-460-sm",
  "border-460-md",
  "border-460-lg",
  "border-460-xl",
  "border-450-sm",
  "border-450-md",
  "border-450-lg",
  "border-450-xl",
  "border-500-sm",
  "border-500-md",
  "border-500-lg",
  "border-500-xl",
  "border-590-sm",
  "border-590-md",
  "border-590-lg",
  "border-590-xl",
  "border-580-sm",
  "border-580-md",
  "border-580-lg",
  "border-580-xl",
  "border-570-sm",
  "border-570-md",
  "border-570-lg",
  "border-570-xl",
  "border-560-sm",
  "border-560-md",
  "border-560-lg",
  "border-560-xl",
  "border-550-sm",
  "border-550-md",
  "border-550-lg",
  "border-550-xl",
  "border-600-sm",
  "border-600-md",
  "border-600-lg",
  "border-600-xl",
  "border-690-sm",
  "border-690-md",
  "border-690-lg",
  "border-690-xl",
  "border-680-sm",
  "border-680-md",
  "border-680-lg",
  "border-680-xl",
  "border-670-sm",
  "border-670-md",
  "border-670-lg",
  "border-670-xl",
  "border-660-sm",
  "border-660-md",
  "border-660-lg",
  "border-660-xl",
  "border-650-sm",
  "border-650-md",
  "border-650-lg",
  "border-650-xl",
  "border-700-sm",
  "border-700-md",
  "border-700-lg",
  "border-700-xl",
  "border-790-sm",
  "border-790-md",
  "border-790-lg",
  "border-790-xl",
  "border-780-sm",
  "border-780-md",
  "border-780-lg",
  "border-780-xl",
  "border-770-sm",
  "border-770-md",
  "border-770-lg",
  "border-770-xl",
  "border-760-sm",
  "border-760-md",
  "border-760-lg",
  "border-760-xl",
  "border-750-sm",
  "border-750-md",
  "border-750-lg",
  "border-750-xl",
  "border-800-sm",
  "border-800-md",
  "border-800-lg",
  "border-800-xl",
  "border-890-sm",
  "border-890-md",
  "border-890-lg",
  "border-890-xl",
  "border-880-sm",
  "border-880-md",
  "border-880-lg",
  "border-880-xl",
  "border-870-sm",
  "border-870-md",
  "border-870-lg",
  "border-870-xl",
  "border-860-sm",
  "border-860-md",
  "border-860-lg",
  "border-860-xl",
  "border-850-sm",
  "border-850-md",
  "border-850-lg",
  "border-850-xl",
  "border-900-sm",
  "border-900-md",
  "border-900-lg",
  "border-900-xl",
  "border-990-sm",
  "border-990-md",
  "border-990-lg",
  "border-990-xl",
  "border-980-sm",
  "border-980-md",
  "border-980-lg",
  "border-980-xl",
  "border-970-sm",
  "border-970-md",
  "border-970-lg",
  "border-970-xl",
  "border-960-sm",
  "border-960-md",
  "border-960-lg",
  "border-960-xl",
  "border-950-sm",
  "border-950-md",
  "border-950-lg",
  "border-950-xl",
];
function ne({
  startIndex: s = 0,
  endIndex: r = 10,
  textColor: o = "text-col-100",
}) {
  const n = Ct.slice(s, r + 1);
  return e.jsx(e.Fragment, {
    children: n.map((t) =>
      e.jsx(je, { className: `${t} ${o}`, text: `className='${t}'` }, t)
    ),
  });
}
function z({ value: s }) {
  const r = s.split(" "),
    o = r[0].replace("bg-col-", "bg-"),
    n = r[1].replace("bg-", "");
  return `${o}-${n}`;
}
function A(s) {
  return Z({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8.456 14.494a.75.75 0 0 1 1.068.17 3.08 3.08 0 0 0 .572.492A3.381 3.381 0 0 0 12 15.72c.855 0 1.487-.283 1.904-.562a3.081 3.081 0 0 0 .572-.492l.021-.026a.75.75 0 0 1 1.197.905l-.027.034c-.013.016-.03.038-.052.063-.044.05-.105.119-.184.198a4.569 4.569 0 0 1-.695.566A4.88 4.88 0 0 1 12 17.22a4.88 4.88 0 0 1-2.736-.814 4.57 4.57 0 0 1-.695-.566 3.253 3.253 0 0 1-.236-.261c-.259-.332-.223-.824.123-1.084Z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M9 10.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM16.25 12a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
        },
        child: [],
      },
    ],
  })(s);
}
function $t(s) {
  return Z({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "none" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M9.17154 16.8182L7.75732 18.2324L12 22.475L16.2426 18.2324L14.8284 16.8182L12 19.6466L9.17154 16.8182Z",
          fill: "currentColor",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M14.8284 7.182L16.2426 5.76779L12 1.52515L7.75733 5.76779L9.17155 7.182L12 4.35357L14.8284 7.182Z",
          fill: "currentColor",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 9.00018C13.6569 9.00018 15 10.3433 15 12.0002C15 13.657 13.6569 15.0002 12 15.0002C10.3431 15.0002 9 13.657 9 12.0002C9 10.3433 10.3431 9.00018 12 9.00018ZM12 11.0002C12.5523 11.0002 13 11.4479 13 12.0002C13 12.5525 12.5523 13.0002 12 13.0002C11.4477 13.0002 11 12.5525 11 12.0002C11 11.4479 11.4477 11.0002 12 11.0002Z",
          fill: "currentColor",
        },
        child: [],
      },
    ],
  })(s);
}
function St(s) {
  return Z({
    tag: "svg",
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z",
        },
        child: [],
      },
    ],
  })(s);
}
function Tt(s) {
  return Z({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z",
        },
        child: [],
      },
    ],
  })(s);
}
function kt(s) {
  return Z({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
        },
        child: [],
      },
    ],
  })(s);
}
function Bt(s) {
  return Z({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
        },
        child: [],
      },
    ],
  })(s);
}
function B({
  text: s,
  layout: r = "text-md-normal",
  noOfLines: o = 1,
  shadow: n = "boldTextGlow",
  className: t,
  isCursive: l = !0,
  color: h = "text-col-900",
}) {
  const i = {};
  o &&
    ((i.overflow = "hidden"),
    (i.textOverflow = "ellipsis"),
    (i.display = "-webkit-box"),
    (i.WebkitLineClamp = o),
    (i.WebkitBoxOrient = "vertical"));
  const d = l ? `font-cursive ${r} ${h} ${n} ${t}` : `${r} ${h} ${n} ${t}`;
  return e.jsx("h1", { className: `${r} ${n} ${d}`, style: i, children: s });
}
const It = {
  xs: "w-full h-1/3 md:w-64 md:h-1/2",
  sm: "w-full h-1/2 md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/3 xl:w-[28vw] xl:h-[28vh]",
  md: "w-full h-1/2 md:w-1/3 md:h-45vh",
  lg: "w-full h-2/3 md:w-1/2 md:h-2/3",
  xl: "w-full h-5/6 md:w-2/3 md:h-2/3",
  full: "w-full h-full",
};
function Lt({
  isAlertOpen: s,
  onClose: r,
  onConfirmClick: o,
  cancelRef: n,
  title: t,
  body: l,
  confirmButtonText: h,
  cancelButtonText: i,
  flexDirection: d = "flex-col",
  size: x,
  bodyWidth: m = "w-[30vh]",
  bodyTextSize: a = "text-[3vh]",
  bodyClassName: f = "",
  alertDimensions: g,
  className: u,
  alertImage: b,
  imageClassName: $ = "w-75% h-auto sm:w-60%",
}) {
  const S = x ? It[x] || void 0 : "";
  if (!s) return null;
  const j = { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    T = {
      hidden: { y: "-100vh", opacity: 0 },
      visible: { y: "0", opacity: 1, transition: { delay: 0.5 } },
    },
    M = { exit: { y: "-100vh", opacity: 0, transition: { duration: 0.5 } } };
  return e.jsx(V.div, {
    className:
      "fixed inset-0 overflow-hidden defaultOverlayBlur defaultOverlayColor flex justify-center items-center rounded-none",
    variants: j,
    initial: "hidden",
    animate: "visible",
    exit: "hidden",
    style: { zIndex: 1e3 },
    children: e.jsx(V.div, {
      className: `bg-radial4 shadowNarrowNormal ${S} ${g} ${u}`,
      variants: { ...T, ...M },
      initial: "hidden",
      animate: "visible",
      exit: "exit",
      children: e.jsxs(I, {
        className: "w-full h-full justify-between ",
        children: [
          e.jsx(H, {
            className:
              "w-full items-center bg-col-990 rounded-b-none p-[1vh] gap-2 md:gap-[1vw]",
            children: e.jsx(B, {
              color: "text-col-400",
              shadow: "textFog",
              text: t,
              layout: "text-insane-normal",
            }),
          }),
          e.jsx(H, {
            className: "w-full h-full justify-between text-col-900 ",
            gap: "gap-[0px]",
            children: e.jsxs(L, {
              className: "h-full justify-center p-[1vh] items-center",
              children: [
                e.jsxs(C, {
                  className: `w-full h-full justify-center items-center flex-grow-1 gap-[1vh] ${m} ${d} ${f} `,
                  children: [
                    b &&
                      e.jsx(N, {
                        className: $,
                        children: e.jsx(_, {
                          src: b,
                          alt: "alert image",
                          className: "w-full h-full",
                        }),
                      }),
                    e.jsx(y, {
                      className: `${a} lightTextShadow`,
                      children: l,
                    }),
                  ],
                }),
                e.jsxs(H, {
                  className: "justify-end gap-[2vw] p-[1vh]",
                  children: [
                    e.jsx(w, { ref: n, onClick: r, buttonText: i }),
                    e.jsx(w, { onClick: o, type: "negative", buttonText: h }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
const Mt = ({
  name: s,
  rounded: r = "rounded-full",
  src: o = "/images/icons/profileIcon.png",
  size: n,
}) => {
  const t = (h) =>
      h
        .split(" ")
        .map((i) => i[0])
        .join(""),
    l = {
      xxs: "h-[2.5vh] w-[2.5vh]",
      xs: "h-[3.5vh] w-[3.5vh]",
      sm: "h-[3.75vh] w-[3.75vh]",
      md: "h-[4vh] w-[4vh]",
      lg: "h-[5vh] w-[5vh]",
      xl: "h-[6.5vh] w-[6.5vh]",
      xxl: "h-[7vh] w-[7vh]",
    };
  return e.jsx("div", {
    className: `${r} overflow-hidden flex-shrink-0 ${
      l[n || "sm"]
    } border-[1.5px] border-solid border-col-400 shadowNarrowNormal flex items-center justify-center text-col-400 bg-col-900`,
    children: o
      ? e.jsx(_, {
          src: o || "/fallbackAvatar.png",
          alt: s || "",
          fallbackImage: we,
          rounded: r,
        })
      : e.jsx("span", {
          className: "text-col-100",
          children: s ? t(s) : "N/A",
        }),
  });
};
function Et({
  image: s,
  containerClassName: r = "",
  imageClassName: o = "",
  alt: n = "",
  style: t = {},
  w: l = "w-full",
  h = "h-full",
  objectFit: i = "cover",
  objectPosition: d = "object-center",
  innerContainerStyles: x = "",
  shadow: m = "shadowNarrowNormal",
  showOverlay: a = !0,
  bgOverlayColor: f = "bg-col-920",
  bgOverlayGradient: g = "bg-darkenvioletGrad",
  overlayBlur: u = "backdrop-blur-[2px]",
  overlayStyles: b,
  children: $,
  rounded: S,
  p: j = "p-[1vh]",
}) {
  return e.jsxs(N, {
    className: `relative ${l} ${h} ${m} ${r} ${S}`,
    style: t,
    children: [
      e.jsx(_, {
        src: s || ye,
        alt: n,
        className: `${i} ${d} w-full h-full ${S} ${o}`,
      }),
      a &&
        e.jsx(C, {
          className: `absolute top-0 left-0 w-full h-full ${u} ${S} ${f} ${g} ${j} ${b} `,
          children: e.jsx(C, { className: `w-full h-full ${x}`, children: $ }),
        }),
    ],
  });
}
function Pt({
  className: s = "",
  style: r,
  rounded: o = "md",
  label: n,
  bgColor: t = "bg-col-300",
  textColor: l = "text-col-900 lightTextShadow",
  ...h
}) {
  const d = `shadowNarrowNormal px-[1vh] py-[0.1vh] text-xs-tight font-semibold ${o}  ${t} ${l} ${s}`;
  return e.jsx("div", {
    className: d,
    style: r,
    ...h,
    children: e.jsx(y, { children: n == null ? void 0 : n.toUpperCase() }),
  });
}
function ee({
  label: s,
  isDisabled: r = !1,
  isChecked: o = !1,
  onChange: n,
  checkboxSize: t = "text-[3vh]",
  textSize: l = "text-[1.7vh]",
  textColor: h = "text-col-900",
  bgColor: i = "transparent",
  checkedBg: d = "bg-col-950 insetShadowMd hover:insetShadowLg",
  checkedColor: x = "text-col-100",
  hoveredBg: m = `hover:cursor-pointer ${
    o ? "checkedBg" : "hover:bg-transparent"
  } transition duration-300 ease-in-out`,
  hoveredColor: a = "hover:text-col-900 transition-300",
  disabledBg: f = "bg-col-850 hover:bg-col-860 transition-300",
  disabledColor: g = "text-col-160 hover:text-col-180",
  p: u = "pl-[0.5vh] pr-[0.2vh] py-[0px]",
  className: b = "",
  containerWidth: $ = "w-full",
  onDisabledClick: S,
}) {
  const [j, T] = c.useState(o),
    [M, P] = c.useState(!1),
    p = () => {
      r || (T(!j), n && n());
    };
  let D = i,
    F = h,
    R = "";
  return (
    r
      ? ((D = f), (F = g), (R = "shadow-inset"))
      : j
      ? ((D = d), (F = x), (R = "shadowNarrowNormal"))
      : M && ((D = m), (F = a)),
    e.jsxs(H, {
      className: `items-center  gap-[0.5vh] ${u} ${D} ${F} ${R} ${$} ${b}`,
      onMouseEnter: () => !r && P(!0),
      onMouseLeave: () => !r && P(!1),
      onClick: r ? S : p,
      children: [
        e.jsx(N, { className: t, children: j ? e.jsx(kt, {}) : e.jsx(Bt, {}) }),
        e.jsx(y, { className: l, children: s }),
      ],
    })
  );
}
const Rt = ({ children: s }) => {
    const r = c.useRef(null);
    return (
      c.useEffect(() => {
        if (typeof document < "u") {
          const o = document.createElement("div");
          r.current = o;
          const n = document.getElementById("modal-root") || document.body;
          return (
            n.appendChild(o),
            () => {
              r.current && n.removeChild(r.current);
            }
          );
        }
      }, []),
      typeof document > "u" || !r.current ? null : Le.createPortal(s, r.current)
    );
  },
  ue = Rt,
  Ot = (s) => {
    c.useEffect(() => {
      const r = (o) => {
        o.key === "Escape" && s();
      };
      return (
        window.addEventListener("keydown", r),
        () => window.removeEventListener("keydown", r)
      );
    }, [s]);
  },
  Y = Ot;
function Q({
  onClose: s,
  className: r,
  iconClassName: o = "text-[2.5vh]",
  type: n = "smallNormal",
}) {
  return e.jsx(E, {
    label: "close",
    icon: se,
    type: n,
    onClick: (t) => {
      t.preventDefault(), t.stopPropagation(), s();
    },
    containerClassName: `z-10 ${r}`,
    tooltipPlacement: "left",
    iconClassName: o,
  });
}
function fe({ onClose: s, className: r, type: o }) {
  return e.jsx(w, {
    onClick: (n) => {
      n.preventDefault(), n.stopPropagation(), s();
    },
    type: o,
    className: `${r}`,
    buttonText: "Close",
  });
}
function zt({
  showTopButton: s,
  showBottomButton: r,
  drawerBg: o,
  setDrawerOpen: n,
  children: t,
}) {
  const l = r ? "pb-[6vh]" : "pb-0";
  return e.jsxs(C, {
    className: "w-full h-full relative",
    children: [
      s &&
        e.jsx(N, {
          className: "absolute top-[1vh] right-[1vh]",
          children: e.jsx(Q, { onClose: () => n(!1) }),
        }),
      r &&
        e.jsx(C, {
          className:
            "w-full h-[6vh] bg-darkGrayBack rounded-t-none border-t-2 border-col-850 justify-center fixed bottom-0 left-0 items-center",
          children: e.jsx(fe, { onClose: () => n(!1) }),
        }),
      e.jsx(C, { className: `w-full h-full ${l} ${o}`, children: t }),
    ],
  });
}
function At({
  className: s = "",
  buttonType: r,
  slideDirection: o = "right",
  style: n = {},
  children: t,
  icon: l,
  label: h,
  showBottomButton: i = !0,
  showTopButton: d = !0,
  drawerWidth: x = "w-[400px] ultraHD:w-[800px]",
  drawerBg: m = "bg-col-700",
  drawerHeight: a = "h-full",
  overlayBlur: f = "defaultOverlayBlur",
  overlayColor: g = "defaultOverlay",
  buttonTooltipPlacement: u = "bottomRight",
  ...b
}) {
  const [$, S] = c.useState(!1),
    j = {
      open: (M) => {
        const p = {
          transition: { type: "spring", stiffness: 300, damping: 30 },
          x: 0,
          y: 0,
        };
        switch (M) {
          case "top-right":
          case "top-left":
          case "top-center":
            return { ...p, y: 0 };
          case "bottom-right":
          case "bottom-left":
          case "bottom-center":
            return { ...p, y: 0 };
          case "left":
            return { ...p, x: 0 };
          case "right":
            return { ...p, x: 0 };
          default:
            return { ...p, x: 0 };
        }
      },
      closed: (M) => {
        const P = { type: "spring", stiffness: 300, damping: 30 };
        switch (M) {
          case "top-right":
          case "top-left":
          case "top-center":
            return { x: void 0, y: "-100%", transition: P };
          case "bottom-right":
          case "bottom-left":
          case "bottom-center":
            return { x: void 0, y: "100%", transition: P };
          case "left":
            return { x: "-100%", y: void 0, transition: P };
          case "right":
            return { x: "100%", y: void 0, transition: P };
          default:
            return { x: "100%", y: void 0, transition: P };
        }
      },
    },
    T = (M) => {
      switch (M) {
        case "top-right":
          return "top-0 right-0";
        case "top-left":
          return "top-0 left-0";
        case "top-center":
          return "top-0 left-1/2 -translate-x-1/2";
        case "bottom-right":
          return "bottom-0 right-0";
        case "bottom-left":
          return "bottom-0 left-0";
        case "bottom-center":
          return "bottom-0 left-1/2 -translate-x-1/2";
        case "left":
          return "left-0 top-0 -translate-y-1/2";
        case "right":
          return "right-0 top-0 -translate-y-1/2";
        default:
          return "top-0 right-0";
      }
    };
  return (
    Y(() => S(!1)),
    e.jsxs(e.Fragment, {
      children: [
        l &&
          e.jsx(E, {
            icon: l,
            label: h,
            onClick: () => S(!0),
            type: r,
            tooltipPlacement: u,
          }),
        e.jsx(ue, {
          children: e.jsx(re, {
            children:
              $ &&
              e.jsxs(e.Fragment, {
                children: [
                  e.jsx(V.div, {
                    className: `fixed inset-0 ${g} ${f} z-40`,
                    onClick: () => S(!1),
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                  }),
                  e.jsx(V.div, {
                    className: `fixed ${T(
                      o
                    )} shadowNarrowNormal z-50 ${a} ${s} ${x}`,
                    style: n,
                    variants: j,
                    transition: { type: "spring", stiffness: 300, damping: 30 },
                    custom: o,
                    initial: "closed",
                    animate: "open",
                    exit: "closed",
                    ...b,
                    children: e.jsx(zt, {
                      showTopButton: d,
                      showBottomButton: i,
                      setDrawerOpen: S,
                      drawerBg: m,
                      children: t,
                    }),
                  }),
                ],
              }),
          }),
        }),
      ],
    })
  );
}
const ge = ve.forwardRef(
  (
    { className: s = "", style: r, defaultValue: o, autoFocus: n = !1, ...t },
    l
  ) =>
    e.jsx(e.Fragment, {
      children: e.jsx("input", {
        defaultValue: o,
        autoFocus: n,
        ref: l,
        className: `inputStyles ${s}`,
        style: r,
        ...t,
      }),
    })
);
ge.displayName = "Input";
const q = ge,
  Ft = ({ selectedDate: s, onSelect: r }) => {
    const o = new Date(s.getFullYear(), s.getMonth(), 1).getDay(),
      n = new Date(s.getFullYear(), s.getMonth() + 1, 0).getDate(),
      t = new Date();
    t.setHours(0, 0, 0, 0);
    const h = ["S", "M", "T", "W", "T", "F", "S"].map((i, d) =>
      e.jsx(
        "div",
        {
          className:
            "p-[0.1vh] text-center font-semibold text-col-300 w-[3vh] h-[2.5vh] flex-shrink-0 flex justify-center items-center",
          children: i,
        },
        d
      )
    );
    for (let i = 0; i < o; i++)
      h.push(
        e.jsx(
          "div",
          { className: "p-2 border border-transparent" },
          `empty-${i}`
        )
      );
    for (let i = 1; i <= n; i++) {
      const d = new Date(s.getFullYear(), s.getMonth(), i),
        x = d < t;
      h.push(
        e.jsx(C, {
          className:
            "w-[2.3vh] md:w-[3vh] md:h-[2.5vh] flex-shrink-0 flex justify-center items-center",
          children: e.jsx(
            "button",
            {
              disabled: x,
              className: `py-[0.1vh] px-[0.4vh] w-full h-full text-center flex justify-center  ${
                x
                  ? "text-col-140 hover:bg-transparent cursor-not-allowed"
                  : "hover:bg-col-200 hover:text-col-900 hover:shadowNarrowNormal"
              }`,
              onClick: () => !x && r(d),
              children: i,
            },
            i
          ),
        })
      );
    }
    return e.jsx("div", {
      className:
        "w-[24vh] grid grid-cols-7 gap-y-[0.7vh] gap-x-[1.5vh] px-[1.5vh] justify-center items-center textShadow",
      children: h,
    });
  };
function Ht({ isEditDate: s, setIsEditDate: r, setIsEditTime: o, dueDate: n }) {
  const [t, l] = c.useState(n),
    h = (f) => {
      l(f), r(!1);
    },
    i = () => {
      l(new Date(t.getFullYear(), t.getMonth() + 1, 1));
    },
    d = () => {
      l(new Date(t.getFullYear(), t.getMonth() - 1, 1));
    },
    x = t.toLocaleString("default", { month: "long", year: "numeric" }),
    m = () => {
      l(new Date()), r(!1);
    };
  Y(() => r(!1));
  const a = s ? "z-20" : "z-0";
  return e.jsxs("div", {
    className: "relative",
    children: [
      e.jsxs(N, {
        className: "relative",
        children: [
          e.jsx(K, {
            icon: Ne,
            containerClassName:
              "absolute top-[0.8vh] right-[1.1vh] text-col-900 hover:cursor-pointer",
            iconClassName: "text-[2.3vh]",
            onClick: () => {
              r(!s), o(!1);
            },
          }),
          e.jsx("input", {
            type: "text",
            readOnly: !0,
            value: t.toISOString().substring(0, 10),
            className:
              "form-input w-[18vh] lg:w-[25vh] font-semibold inputStyles cursor-pointer",
            onClick: () => {
              r(!s), o(!1);
            },
          }),
        ],
      }),
      s &&
        e.jsx(J, {
          children: e.jsxs(I, {
            className: `${de} left-0 ${a}`,
            children: [
              e.jsxs(k, {
                className: "justify-between mb-[0.5vh] items-center",
                children: [
                  e.jsx(E, { type: "smallNormal", icon: Ce, onClick: d }),
                  e.jsx(y, { className: `${he}`, children: x }),
                  e.jsx(E, { type: "smallNormal", icon: $e, onClick: i }),
                ],
              }),
              e.jsx(Ft, { selectedDate: t, onSelect: h }),
              e.jsxs(G, {
                className: "justify-between",
                children: [
                  e.jsx(w, {
                    type: "unstyled",
                    onClick: m,
                    className:
                      "text-[1.6vh] leading-[1.6vh] h-[2.5vh] px-[0.5vh] bg-col-700 hover:bg-col-600 flex items-center shadowNarrowNormal textShadowtransition-400",
                    buttonText: "Today",
                  }),
                  e.jsx(w, {
                    type: "smallNormal",
                    onClick: () => r(!1),
                    iconLeft: se,
                    buttonText: "Close",
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
const ae = ({ items: s, onSelect: r, selectedItem: o, label: n }) =>
    e.jsxs(I, {
      className: "w-35%",
      gap: "gap-[0.5vh]",
      children: [
        e.jsx(y, { className: `${he}`, children: n }),
        e.jsx(L, {
          className:
            "overflow-auto h-[23vh] max-h-[25vh] py-[1vh] items-start insetShadowMd bg-100-diagonal3op75",
          gap: "gap-[0.7vh]",
          children: s.map((t) =>
            e.jsx(
              "button",
              {
                onClick: () => r(t),
                className: ` px-[0.4vh] ${
                  t === o
                    ? "bg-col-200 text-col-900 transition-300"
                    : "hover:bg-col-200 hover:text-col-900"
                }`,
                children: String(t < 10 ? `0${t}` : t),
              },
              t
            )
          ),
        }),
      ],
    }),
  Dt = ({
    selectedTime: s,
    onSelectTime: r,
    isEditTime: o,
    setIsEditDate: n,
    setIsEditTime: t,
  }) => {
    const [l, h] = c.useState(s.getHours()),
      [i, d] = c.useState(s.getMinutes()),
      [x, m] = c.useState(s.getHours() >= 12),
      a = o ? "z-20" : "";
    c.useEffect(() => {
      const g = new Date(s);
      g.setHours(x ? l + 12 : l, i), r(g);
    }, [l, i, x, r, s]);
    const f = () => m(!x);
    return (
      Y(() => t(!1)),
      e.jsxs("div", {
        className: "relative",
        children: [
          e.jsxs(N, {
            className: "relative",
            children: [
              e.jsx(K, {
                icon: Se,
                containerClassName:
                  "absolute top-[0.8vh] right-[1.1vh] text-col-900 hover:cursor-pointer",
                onClick: () => {
                  t(!o), n(!1);
                },
              }),
              e.jsx("input", {
                type: "text",
                readOnly: !0,
                value: `${l % 12 === 0 ? 12 : l % 12}:${i < 10 ? `0${i}` : i} ${
                  x ? "PM" : "AM"
                }`,
                className:
                  "form-input inputStyles font-semibold w-[18vh] lg:w-[25vh] cursor-pointer",
                onClick: () => {
                  t(!o), n(!1);
                },
              }),
            ],
          }),
          o &&
            e.jsx(J, {
              children: e.jsx(I, {
                className: `${de} right-0 ${a}`,
                children: e.jsxs(G, {
                  className: "justify-evenly items-stretch",
                  children: [
                    e.jsx(ae, {
                      label: "hour",
                      items: Array.from({ length: 12 }, (g, u) => u + 1),
                      onSelect: h,
                      selectedItem: l % 12 === 0 ? 12 : l % 12,
                    }),
                    e.jsx(ae, {
                      label: "min",
                      items: Array.from({ length: 60 }, (g, u) => u),
                      onSelect: d,
                      selectedItem: i,
                    }),
                    e.jsxs(I, {
                      className:
                        "w-20% pt-[4.5vh] pl-[1vh] h-[27vh] justify-between items-end",
                      children: [
                        e.jsxs(I, {
                          className: "pr-[1.5vh]",
                          children: [
                            e.jsx("button", {
                              onClick: f,
                              className: `w-full px-[0.7vh] ${
                                x
                                  ? "bg-transparent text-col-100 hover:bg-col-200 hover:text-col-900 transition-300"
                                  : "bg-col-200 text-col-900 hover:bg-col-200 hover:text-col-900"
                              }`,
                              children: "am",
                            }),
                            e.jsx("button", {
                              onClick: f,
                              className: `w-full px-[0.5vh] ${
                                x
                                  ? "bg-col-200 text-col-900 hover:bg-col-200 hover:text-col-900"
                                  : "bg-transparent text-col-100 hover:bg-col-200 hover:text-col-900 transition-300"
                              }`,
                              children: "pm",
                            }),
                          ],
                        }),
                        e.jsx(Q, { type: "smallNormal", onClose: () => t(!1) }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
        ],
      })
    );
  },
  Vt = Dt;
function Wt({ dueDate: s, containerHeight: r }) {
  const [o, n] = c.useState(!1),
    [t, l] = c.useState(!1),
    h = r || (o || t ? "min-h-[38vh]" : "");
  return e.jsxs(G, {
    className: `justify-evenly ${h}`,
    children: [
      e.jsx(Ht, {
        isEditDate: o,
        setIsEditDate: n,
        setIsEditTime: l,
        dueDate: s || new Date(),
      }),
      e.jsx(Vt, {
        selectedTime: new Date(),
        onSelectTime: () => {},
        setIsEditDate: n,
        isEditTime: t,
        setIsEditTime: l,
      }),
    ],
  });
}
function pe({
  defaultValue: s = "",
  min: r = 3,
  max: o,
  autoFocus: n = !1,
  isRequired: t = !1,
  name: l = "",
  id: h = "",
  placeholder: i = "",
}) {
  const [d, x] = c.useState(s),
    m = d.length < r || d.length > o,
    a = (u) => {
      const b = u.target.value;
      x(b);
    },
    f = d.length < r,
    g = d.length > o;
  return e.jsxs(I, {
    className: "w-full flex flex-col space-y-0",
    gap: "gap-[0.5vh]",
    children: [
      e.jsx(q, {
        autoFocus: n,
        value: d,
        type: "text",
        name: l,
        id: h,
        onChange: a,
        placeholder: i,
        required: t,
      }),
      e.jsxs("div", {
        className:
          "flex space-x-1 w-full pl-[0.5vh] text-xs-tight lightTextShadow font-semibold",
        children: [
          e.jsxs("span", { children: [d.length, " / ", o, " chars -"] }),
          e.jsxs("div", {
            children: [
              m &&
                g &&
                e.jsx(e.Fragment, {
                  children: e.jsx("span", {
                    className: "text-red-700",
                    children: "input is too long",
                  }),
                }),
              m && f && e.jsxs("span", { children: [" min ", r, " chars."] }),
              !m && e.jsx("span", { children: "validated input" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function ie({
  labelColor: s,
  labelSize: r = "normal",
  labelIsCursive: o = !0,
  labelClassName: n,
  autoFocus: t = !1,
  validationMin: l,
  validationMax: h,
  isRequired: i,
  label: d,
  style: x,
  className: m,
  isValidated: a,
  name: f,
  placeholder: g,
  value: u,
  defaultValue: b,
  labelShadow: $,
  type: S,
  onChange: j,
}) {
  return e.jsxs(I, {
    className: ` leading-1rem w-full ${m}`,
    align: "start",
    style: x,
    gap: "gap-[0.5vh]",
    children: [
      r === "small"
        ? e.jsx(B, {
            isCursive: o,
            color: s,
            className: `${n}`,
            layout: "text-md-tighter",
            shadow: $,
            text: d,
          })
        : e.jsx(e.Fragment, {
            children: e.jsx(B, {
              isCursive: o,
              color: s,
              className: ` ${n}`,
              shadow: $,
              layout: "text-md-tighter md:text-lg-tighter",
              text: d,
            }),
          }),
      a && h
        ? e.jsx(pe, {
            autoFocus: t,
            isRequired: i,
            min: l,
            max: h,
            name: f,
            placeholder: g,
            defaultValue: b,
            onChange: j,
          })
        : e.jsx(q, {
            autoFocus: t,
            required: i,
            name: f,
            placeholder: g,
            value: u,
            defaultValue: b,
            type: S,
            onChange: j,
          }),
    ],
  });
}
function Gt({
  children: s,
  setModalOpen: r,
  showTopClose: o = !0,
  showBottomClose: n = !0,
  footerClassName: t = "bg-col-600",
}) {
  const l = n ? "pb-[5vh]" : "pb-0";
  return e.jsxs(C, {
    className: "w-full h-full relative ",
    children: [
      o &&
        e.jsx(N, {
          className: "absolute top-[1vh] right-[1vh]",
          children: e.jsx(Q, { onClose: () => r(!1) }),
        }),
      e.jsxs(C, {
        className: `w-full h-full justify-between ${l}`,
        children: [
          e.jsx(C, {
            className: "h-full w-full flex-1 ",
            children: e.jsx(N, {
              className: "w-full h-full rounded-b-none",
              children: e.jsx(N, {
                className: "w-full h-full",
                children: e.jsx(C, { className: "w-full h-full", children: s }),
              }),
            }),
          }),
          n &&
            e.jsx(C, {
              className: `w-full h-[5vh] justify-center rounded-t-none absolute bottom-0 left-0 ${t}`,
              children: e.jsx(fe, { onClose: () => r(!1) }),
            }),
        ],
      }),
    ],
  });
}
function Ut({
  className: s = "",
  style: r = {},
  icon: o,
  label: n,
  children: t,
  overlayBlur: l = "defaultOverlayBlur",
  overlayColor: h = "defaultOverlay",
  modalSize: i = "w-full h-full lg:w-94% lg:h-94%",
  showTopClose: d = !0,
  showBottomClose: x = !0,
  footerClassName: m,
  buttonText: a,
  iconLeft: f,
  iconRight: g,
}) {
  const [u, b] = c.useState(!1),
    $ = {
      open: {
        scale: 1,
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 30 },
      },
      closed: {
        scale: 0,
        opacity: 0,
        transition: { type: "spring", stiffness: 300, damping: 30 },
      },
    };
  return (
    Y(() => b(!1)),
    e.jsxs(e.Fragment, {
      children: [
        " ",
        a && f
          ? e.jsx(w, { buttonText: a, onClick: () => b(!0), iconLeft: o })
          : a && g
          ? e.jsx(w, { buttonText: a, onClick: () => b(!0), iconRight: o })
          : a
          ? e.jsx(w, { buttonText: a, onClick: () => b(!0) })
          : null,
        o && e.jsx(E, { icon: o, label: n, onClick: () => b(!0) }),
        e.jsx(ue, {
          children: e.jsx(re, {
            children:
              u &&
              e.jsxs(e.Fragment, {
                children: [
                  e.jsx(V.div, {
                    className: `fixed inset-0 w-screen h-screen ${h} ${l}`,
                    onClick: () => b(!1),
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    style: { maxHeight: "100svh", zIndex: 60 },
                  }),
                  e.jsx(V.div, {
                    className: `fixed inset-0 m-auto z-50 rounded-none ${i} ${s}`,
                    style: { ...r, maxHeight: "100svh", zIndex: 100 },
                    variants: $,
                    initial: "closed",
                    animate: "open",
                    exit: "closed",
                    children: e.jsx(Gt, {
                      setModalOpen: b,
                      showBottomClose: x,
                      showTopClose: d,
                      footerClassName: m,
                      children: t,
                    }),
                  }),
                ],
              }),
          }),
        }),
      ],
    })
  );
}
function Kt({ name: s = "password", id: r = "password", confirm: o = !1 }) {
  const [n, t] = c.useState(!1),
    l = () => t(!n);
  return e.jsxs(I, {
    gap: "gap-0",
    align: "start",
    className: "w-full",
    children: [
      o
        ? e.jsx(B, {
            layout: "text-md-normal md:text-xl-normal",
            text: "Confirm Password",
            className: "text-xl-tighter text-stroke-6-900 lightTextShadow",
          })
        : e.jsx(B, {
            layout: "text-md-normal md:text-xl-normal",
            text: "Password",
            className: "text-xl-tighter text-stroke-6-900 lightTextShadow",
          }),
      e.jsxs(H, {
        className: "w-full relative",
        gap: "gap-0",
        children: [
          e.jsx(N, {
            className: "relative w-full",
            children: e.jsx(q, {
              type: n ? "text" : "password",
              placeholder: "password",
              id: r,
              name: o ? "confirmPassword" : s,
              required: !0,
            }),
          }),
          e.jsx(N, {
            className: "absolute right-[1vh] top-[0.2vh]",
            children: e.jsx(E, {
              type: "unstyled",
              iconClassName: "text-[2.5vh]",
              label: "show/hide",
              icon: n ? St : Tt,
              onClick: l,
            }),
          }),
        ],
      }),
    ],
  });
}
const Zt = {
  top: "bottom-full mb-2 left-1/2 transform -translate-x-1/2",
  topLeft: "bottom-full mb-2 left-0",
  topRight: "bottom-full mb-2 right-0",
  bottom: "top-full mt-2 left-1/2 transform -translate-x-1/2",
  bottomLeft: "top-full mt-2 left-0",
  bottomRight: "top-full mt-2 right-0",
  left: "right-full mr-2 top-1/2 transform -translate-y-1/2",
  right: "left-full ml-2 top-1/2 transform -translate-y-1/2",
  center: "fixed inset-0 flex justify-center items-center",
};
function Yt({
  trigger: s,
  content: r,
  w: o = "w-fit max-w-[375px] sm:max-w-[500px]",
  h: n = "h-fit",
  placement: t = "topRight",
  heading: l,
}) {
  const [h, i] = c.useState(!1),
    d = c.useRef(null),
    x = t === "center",
    m = {
      hidden: { scale: 0, opacity: 0, transition: { duration: 0.5 } },
      visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    },
    a = () => {
      i(!h);
    };
  c.useEffect(() => {
    const g = (u) => {
      d.current && !d.current.contains(u.target) && i(!1);
    };
    return (
      document.addEventListener("mousedown", g),
      () => {
        document.removeEventListener("mousedown", g);
      }
    );
  }, [d]),
    c.useEffect(() => {
      const g = (u) => {
        u.key === "Escape" && i(!1);
      };
      return (
        document.addEventListener("keydown", g),
        () => {
          document.removeEventListener("keydown", g);
        }
      );
    }, []);
  const f = (g) => {
    (g.key === "Enter" || g.key === " ") && a();
  };
  return e.jsxs("div", {
    className: `relative inline-block ${x ? "w-full h-full" : ""}`,
    ref: d,
    children: [
      e.jsx("div", {
        role: "button",
        tabIndex: 0,
        onClick: a,
        onKeyDown: f,
        children: s,
      }),
      e.jsx(re, {
        children:
          h &&
          e.jsx(V.div, {
            initial: "hidden",
            animate: "visible",
            exit: "hidden",
            variants: m,
            className: `absolute z-10 shadowNarrowLoose ${o} ${n} min-w-[300px] ${Zt[t]}`,
            children: e.jsx(C, {
              className:
                "w-full h-full shadow3DMd relative bg-col-300 bg-darkenGrad",
              children: e.jsxs(I, {
                className:
                  "w-full h-full justify-start items-center shadowNarrowNormal gap-[0px]",
                children: [
                  e.jsxs(H, {
                    className:
                      " w-full justify-between rounded-b-none bg-col-700 p-[0.7vh] pl-[1vh] border-b-[0.1vh] border-col-125",
                    children: [
                      " ",
                      e.jsx(B, {
                        layout: "text-lg-tight",
                        color: "text-col-100",
                        shadow: "textShadow",
                        noOfLines: 1,
                        text: l || "",
                      }),
                      e.jsx(N, {
                        className: "absolute top-[0.5vh] right-[1vh]",
                        children: e.jsx(Q, { onClose: () => i(!1) }),
                      }),
                    ],
                  }),
                  e.jsx(C, {
                    className: "w-full p-[1vh] max-h-[45vh] overflow-y-auto",
                    children: r,
                  }),
                ],
              }),
            }),
          }),
      }),
    ],
  });
}
function qt() {
  return new URLSearchParams(Me().search).get("from");
}
function _t({
  options: s,
  setExternalSelection: r,
  heading: o,
  selectedOption: n,
  selectedOnTop: t = !0,
  bg: l = "bg-col-500",
  border: h,
  showClose: i = !0,
}) {
  const [d, x] = c.useState(n || void 0);
  function m(u) {
    x(u), r && r(u);
  }
  const a = d ? [d, ...s.filter((u) => u !== d)] : s,
    f = t ? a : s,
    g = ({ option: u }) =>
      u === d
        ? "bg-col-200 font-[600] text-stroke-3-900 text-col-900 lightTextShadow hover:bg-col-400 hover:text-col-900"
        : "bg-col-950 text-col-100 font-[400] hover:bg-col-600 hover:text-col-900 transition-500";
  return e.jsx(k, {
    className: `${l} ${h}`,
    children: e.jsxs(L, {
      className: o ? "px-[2vh] p-[1vh]" : "p-[0.5vh]",
      children: [
        o &&
          e.jsx(k, {
            className: "h-fit",
            children: e.jsx(B, {
              text: o,
              layout: "text-xxl-looser",
              shadow: "textShadow",
              color: "text-col-100",
            }),
          }),
        e.jsx(k, {
          className:
            "h-full max-h-full overflow-y-auto justify-center insetOverlay border-980-md",
          children: e.jsx(L, {
            className: "h-fit px-[2vh] py-[1vh]",
            gap: "gap-[0.5vh]",
            children: f.map((u) =>
              e.jsxs(
                k,
                {
                  className: `${g({
                    option: u,
                  })} justify-between shadowNarrowLoose items-center px-[1vh]`,
                  onClick: () => m(u),
                  children: [
                    e.jsxs(y, {
                      className: "text-md-looser",
                      children: [u, " "],
                    }),
                    u === d &&
                      e.jsx(y, {
                        className:
                          "text-[1.3vh] leading-[1.5vh] text-col-100 textShadow px-[1vh] bg-col-700 metallicEdgesSm h-fit",
                        children: "current",
                      }),
                  ],
                },
                u
              )
            ),
          }),
        }),
        i &&
          e.jsx(k, {
            className: "justify-center items-center",
            children: e.jsx(w, {
              to: String(qt()),
              buttonText: "Save & Close",
              type: "smallNormal",
            }),
          }),
      ],
    }),
  });
}
function be({
  className: s = "",
  resize: r = "resize-none",
  style: o,
  defaultValue: n,
  textAreaHeight: t = "h-[9.5vh]",
  textAreaWidth: l = "w-full",
  autoFocus: h = !1,
  ...i
}) {
  return e.jsx("textarea", {
    defaultValue: n,
    autoFocus: h,
    className: `w-full ${r} ${t} ${l} textareaStyles ${s} `,
    style: o,
    ...i,
  });
}
function Jt({
  label: s,
  className: r,
  style: o,
  name: n,
  placeholder: t,
  value: l,
  defaultValue: h,
  textAreaWidth: i,
  textAreaHeight: d,
  textAreaClassName: x,
  labelClassName: m,
  autoFocus: a,
  labelColor: f,
  labelSize: g = "normal",
  labelIsCursive: u = !0,
  onChange: b,
}) {
  return e.jsxs(I, {
    className: `w-full ${r}`,
    align: "start",
    style: o,
    gap: "gap-[0.5vh]",
    children: [
      g === "small"
        ? e.jsx(B, {
            isCursive: u,
            color: f,
            className: `${m}`,
            layout: "text-md-tighter",
            text: s,
          })
        : e.jsx(e.Fragment, {
            children: e.jsx(B, {
              isCursive: u,
              color: f,
              className: ` ${m}`,
              layout: "text-md-tighter md:text-lg-tighter",
              text: s,
            }),
          }),
      e.jsx(be, {
        autoFocus: a,
        textAreaHeight: d,
        name: n,
        placeholder: t,
        value: l,
        defaultValue: h,
        onChange: b,
        className: `${i} ${d} ${x}`,
      }),
    ],
  });
}
const Qt = () => {
    const [s, r] = c.useState(!1);
    return {
      isToastVisible: s,
      showToast: () => {
        r(!0);
      },
      hideToast: () => {
        r(!1);
      },
    };
  },
  Xt = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, transition: { duration: 0.5 } },
  };
function es({
  noOfLines: s = 4,
  message: r,
  isVisible: o,
  duration: n = 4e3,
  onClose: t,
  position: l = "center-center",
  toastSize: h = "w-fit h-fit",
  containerClassName: i = "",
  bg: d = "bg-100-linear6op75 shadowBroadNormal",
  contentClassName: x = "justify-center items-center p-[4vh]",
  textClassName: m = "text-col-100 text-lg-normal ",
}) {
  const [a, f] = c.useState(o);
  c.useEffect(() => {
    let b;
    return (
      o &&
        (b = window.setTimeout(() => {
          f(!1);
        }, n)),
      () => clearTimeout(b)
    );
  }, [o, n]),
    c.useEffect(() => {
      a || t();
    }, [a, t]);
  const u =
    {
      "top-left": "top-10 left-10",
      "top-right": "top-10 right-10",
      "bottom-left": "bottom-10 left-10",
      "bottom-right": "bottom-10 right-10",
      "center-right": "top-1/2 right-10 transform -translate-y-1/2",
      "center-bottom": "bottom-10 left-1/2 transform -translate-x-1/2",
      "center-left": "top-1/2 left-10 transform -translate-y-1/2",
      "center-top": "top-20 left-1/2 transform -translate-x-1/2",
      "center-center":
        "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    }[l] || "bottom-5 right-5";
  return e.jsx(V.div, {
    className: `fixed ${u} z-20 ${d} ${h} ${i}`,
    initial: "hidden",
    animate: "visible",
    exit: "hidden",
    variants: Xt,
    children: e.jsx(C, {
      className: `w-full h-full ${x}`,
      children: e.jsx(y, { noOfLines: s, className: `${m}`, children: r }),
    }),
  });
}
function ts({ transitionType: s, isOpen: r, closeTransition: o }) {
  return (
    Y(() => o()),
    console.log("IsOpen: ", r),
    e.jsx(e.Fragment, {
      children:
        r &&
        e.jsxs(k, {
          className:
            "w-full h-full justify-center items-center bg-linear4op75 defaultOverlayBlur absolute top-0 left-0 z-20",
          onClick: () => o(),
          children: [
            e.jsx(J, {
              type: s,
              duration: 0.6,
              delay: 0.3,
              children: e.jsx(I, {
                className:
                  "p-[3vh] bg-600-linear6op75 text-col-100 shadowWideLooser",
                children: e.jsxs(y, {
                  className: "text-xl-looser",
                  children: ['transition type = "', s, '"'],
                }),
              }),
            }),
            e.jsx(k, {
              className:
                "fixed bottom-0 left-0 h-[6vh] justify-center items-center",
              children: e.jsx(w, { buttonText: "close", onClick: () => o() }),
            }),
          ],
        }),
    })
  );
}
function ss({
  tag: s,
  color: r = "text-col-900",
  onClick: o,
  index: n,
  className: t = "",
}) {
  return e.jsx(C, {
    className: `pl-[0.3vh] w-fit h-fit shadowNarrowNormal ${t}  bg-col-300`,
    children: e.jsxs(H, {
      className:
        "w-full h-fit justify-between items-center gap-[0.1vh] py-[0px]",
      children: [
        e.jsx(y, {
          className: `text-md-tighter lowercase ${r} lightTextShadow font-semibold`,
          children: s,
        }),
        o &&
          e.jsx(E, {
            type: "unstyled",
            containerClassName: "p-[0px] h-fit w-fit",
            iconClassName: "text-[2.2vh] p-[0px]",
            icon: se,
            label: "remove",
            tooltipPlacement: "left",
            onClick: typeof n < "u" ? () => o(n) : void 0,
          }),
      ],
    }),
  });
}
function rs({
  onTagsChange: s,
  tags: r,
  wrapHeight: o = "h-full max-h-[15vh]",
}) {
  const [n, t] = c.useState(""),
    [l, h] = c.useState(r);
  c.useEffect(() => {
    h(r);
  }, [r]);
  const i = (a) => {
      t(a.target.value);
    },
    d = (a) => {
      if (a.key === "Enter" && (a.preventDefault(), n.trim())) {
        if (!l.includes(n)) {
          const f = [n, ...l];
          h(f), s(f);
        }
        t("");
      }
    },
    x = () => {
      if (n.trim()) {
        if (!l.includes(n)) {
          const a = [n, ...l];
          h(a), s(a);
        }
        t("");
      }
    },
    m = (a) => {
      const f = l.filter((g, u) => u !== a);
      h(f), s(f);
    };
  return e.jsx(I, {
    className: "w-full",
    children: e.jsxs(I, {
      className: "w-full h-full text-gray-100 gap-[1vh]",
      align: "start",
      children: [
        e.jsxs(H, {
          className: "w-full items-center",
          children: [
            e.jsx(q, {
              value: n,
              placeholder: "Add tags",
              onKeyDown: d,
              onChange: i,
            }),
            e.jsx(w, {
              width: "w-fit",
              onClick: x,
              buttonText: "Add",
              type: "smallNormal",
            }),
          ],
        }),
        e.jsx(C, {
          className: `w-full overflow-y-auto overflow-x-hidden insetShadowMd inputStyles ${o}`,
          children: e.jsxs(U, {
            className:
              "w-full h-full gap-x-[1vh] gap-y-[1vh] justify-start p-[1vh]",
            children: [
              l.length === 0 &&
                e.jsx(C, {
                  className: "text-sm h-fit w-fit textShadow",
                  children: e.jsx(B, { text: "There are currently no tags." }),
                }),
              l.map((a, f) =>
                e.jsx(
                  ss,
                  { tag: a, onClick: m, index: f, bgColor: "bg-col-200" },
                  f
                )
              ),
            ],
          }),
        }),
      ],
    }),
  });
}
function ce({
  dimensions: s = "w-[50vh] h-[50vh]",
  imageMargin: r = "mt-[40vh]",
  showIcon: o = !0,
  children: n,
  bgImage: t = "bg-[url(/images/rain.jpg)]",
  bgPosition: l = "bg-center",
  bgFit: h = "bg-cover",
  bgAttachment: i = "bg-fixed",
  title: d,
  tagline: x,
  scrollBackground: m = "bg-100-linear6op75",
  imageOnly: a = !1,
  overlayImage: f,
  overlayImagePositioning: g = "",
  overlayImageDimensions: u = "",
  overlayImageClassName: b,
}) {
  return e.jsx(e.Fragment, {
    children: e.jsxs(C, {
      className: "relative",
      children: [
        f && e.jsx(_, { alt: f, src: f, className: `absolute ${g} ${u} ${b}` }),
        e.jsx(N, {
          className: `${s} border-970-md overflow-y-scroll ${i} ${t} ${h} ${l} bg-no-repeat shadowWideLoose 
        `,
          children:
            !a &&
            e.jsx(N, {
              className: r,
              children: e.jsxs(L, {
                className: `${m} text-col-100 shadow3DSm`,
                align: "items-start",
                children: [
                  e.jsx(L, {
                    children:
                      d &&
                      e.jsxs(G, {
                        className:
                          "justify-between items-center rounded-none p-[1vh] bg-col-960",
                        children: [
                          e.jsx(N, {
                            className: "text-xl-tight font-cursive textShadow",
                            children: d,
                          }),
                          o &&
                            e.jsx(K, { icon: $t, iconClassName: "text-[3vh]" }),
                        ],
                      }),
                  }),
                  e.jsxs(L, {
                    className: "px-[1vh] pb-[1vh]",
                    children: [
                      x &&
                        e.jsx(k, {
                          className: "italic text-lg textShadow",
                          children: x,
                        }),
                      n && n,
                    ],
                  }),
                ],
              }),
            }),
        }),
      ],
    }),
  });
}
function te({
  title: s,
  children: r,
  titleStyles:
    o = "bg-100-linear6op75 hover:bg-100-linear6op50 transition-400 text-col-100 textShadow",
  contentStyles: n = "bg-col-990 text-col-100 textShadow",
}) {
  var x;
  const [t, l] = c.useState(!1),
    [h, i] = c.useState("0px"),
    d = c.useRef(null);
  return (
    c.useEffect(() => {
      t && d.current ? i(`${d.current.scrollHeight}px`) : i("0px");
    }, [t, (x = d.current) == null ? void 0 : x.scrollHeight]),
    e.jsxs(L, {
      className: "overflow-hidden rounded-none",
      gap: "gap-[0px]",
      align: "items-start",
      children: [
        e.jsx("button", {
          className: `w-full text-left px-[1.5vh] py-[1vh] ${o} transition-300 rounded-none`,
          onClick: () => l(!t),
          children: e.jsxs(G, {
            className: "rounded-none justify-between",
            children: [
              e.jsx(y, { className: "text-md-tight", children: s }),
              e.jsx(K, { icon: t ? dt : ht, iconClassName: "text-[3vh]" }),
            ],
          }),
        }),
        e.jsx("div", {
          ref: d,
          style: { maxHeight: h },
          className: `transition-500 rounded-none ${
            t ? "overflow-visible" : "overflow-hidden"
          } w-full`,
          children: e.jsx("div", {
            className: `px-[2vh] py-[1vh] w-full ${n} rounded-none`,
            children: r,
          }),
        }),
      ],
    })
  );
}
function ls() {
  const s = () => {
      console.log("confirmed"), t(!1);
    },
    [r, o] = c.useState("optionSix"),
    [n, t] = c.useState(!1),
    l = c.useRef(null),
    h = () => {
      t(!0);
    },
    { isToastVisible: i, showToast: d, hideToast: x } = Qt(),
    m = () => {
      t(!1);
    };
  function a({
    children: p,
    className: D,
    bg: F = "bg-100-diagonal2op25 ",
    headerText: R,
  }) {
    return e.jsxs(I, {
      gap: "gap-[0px]",
      className: `h-fit ${F} shadowNarrowLoose max-w-[90vw] ${D}`,
      children: [
        R &&
          e.jsx(k, {
            className: "px-[1vh] py-[0.5vh] bg-100-linear6op75 rounded-b-none",
            children: e.jsx(y, {
              className: "font-semibold text-col-100 textShadow",
              children: R,
            }),
          }),
        e.jsx(k, { className: "px-[1vh] py-[0.5vh] ", children: p }),
      ],
    });
  }
  const [f, g] = c.useState([]),
    [u, b] = c.useState("center-center"),
    [$, S] = c.useState(!1),
    [j, T] = c.useState("fade"),
    M = (p) => {
      T(p), S(!0), console.log($, p);
    },
    P = (p) => {
      g(p);
    };
  return e.jsxs(C, {
    className: "w-full justify-around items-center",
    children: [
      e.jsxs(U, {
        className: "w-full items-center justify-around gap-[3vh]",
        children: [
          e.jsx(w, {
            buttonText: "Main Nav Demo",
            to: "/design/main-nav-demo",
          }),
          e.jsx(w, { buttonText: "Alert", onClick: h }),
          e.jsx(w, {
            to: "/design/animate-on-scroll",
            buttonText: "Animate on Scroll Duration",
          }),
          e.jsx(w, {
            to: "/design/animate-on-scroll-spring",
            buttonText: "Animation on Snap Scroll Spring",
          }),
          " ",
          e.jsx(w, {
            to: "/design/infinite-scroll-demo",
            buttonText: "Infinite Scroll",
          }),
          e.jsx(w, {
            to: "/design/masonry-grid-demo",
            buttonText: "Masonry Grid",
          }),
          e.jsx(Yt, {
            trigger: e.jsx(w, { buttonText: "Popover" }),
            content: e.jsx(C, { children: "I am the content" }),
            heading: "Popover Heading",
          }),
          e.jsx(Ut, {
            buttonText: "Modal",
            children: e.jsx(k, {
              className:
                "h-full bg-col-700 justify-center items-center rounded-b-none",
              children: e.jsx(y, {
                className: "text-mega-normal text-col-100 textShadow",
                children: "This is a lovely Modal!",
              }),
            }),
          }),
          e.jsx(a, {
            headerText: "Avatar",
            children: e.jsx(Mt, {
              src: "/images/fallbackAvatar.png",
              size: "xxl",
            }),
          }),
          e.jsx(Et, {
            w: "w-[15vh]",
            image: "/images/fallbackAvatar.png",
            containerClassName: "shadowNarrowTight",
            children: e.jsx(y, {
              className: "font-bold text-col-100 textFog",
              children: "Background Image",
            }),
          }),
          e.jsx(Pt, { label: "Badge" }),
          e.jsx(a, {
            children: e.jsxs(I, {
              children: [
                e.jsx(ee, { label: "Checkbox" }),
                e.jsx(ee, { label: "Disabled", isDisabled: !0 }),
                e.jsx(ee, { label: "Checked", isChecked: !0 }),
              ],
            }),
          }),
          e.jsx(a, {
            headerText: "Date Time Picker",
            children: e.jsx(Wt, { containerHeight: "h-[38vh]" }),
          }),
          e.jsx(a, {
            headerText: "Drawer",
            children: e.jsx(L, {
              children: Ee.map((p) =>
                e.jsxs(
                  G,
                  {
                    className: "justify-between",
                    children: [
                      e.jsx(y, { children: p }),
                      e.jsx(At, {
                        icon: xt,
                        buttonType: "smallNormal",
                        slideDirection: p,
                        children: e.jsx(k, {
                          className: "h-full justify-center items-center",
                          children: e.jsx(y, {
                            className: "text-xxl-loose text-col-100 textShadow",
                            children: p,
                          }),
                        }),
                      }),
                    ],
                  },
                  p
                )
              ),
            }),
          }),
          e.jsxs(I, {
            gap: "gap-[2vh]",
            children: [
              " ",
              e.jsx(a, {
                headerText: "Input",
                children: e.jsx(N, {
                  className: "w-[25vh]",
                  children: e.jsx(q, {}),
                }),
              }),
              e.jsx(a, {
                headerText: "TextArea",
                children: e.jsx(N, {
                  className: "w-[25vh]",
                  children: e.jsx(be, {}),
                }),
              }),
            ],
          }),
          e.jsxs(I, {
            gap: "gap-[2vh]",
            children: [
              " ",
              e.jsx(a, {
                headerText: "InputVStack",
                children: e.jsx(N, {
                  className: "w-[25vh]",
                  children: e.jsx(ie, { label: "Input Label" }),
                }),
              }),
              e.jsx(a, {
                headerText: "TextAreaVStack",
                children: e.jsx(N, {
                  className: "w-[25vh]",
                  children: e.jsx(Jt, { label: "Text Area Label" }),
                }),
              }),
            ],
          }),
          e.jsxs(I, {
            gap: "gap-[2vh]",
            children: [
              e.jsx(a, {
                headerText: "Password Input",
                className: "w-[40vh]",
                children: e.jsx(Kt, {}),
              }),
              e.jsx(a, {
                headerText: "Validated Input",
                className: "w-[30vh]",
                children: e.jsx(k, {
                  className: "justify-center",
                  children: e.jsx(pe, { max: 10 }),
                }),
              }),
            ],
          }),
          e.jsx(a, {
            headerText: "Tags Input",
            className: "w-[30vh]",
            children: e.jsx(k, {
              className: "justify-center",
              children: e.jsx(rs, { tags: f, onTagsChange: P }),
            }),
          }),
          e.jsx(a, {
            headerText: "Select Menu",
            className: "w-[30vh]",
            children: e.jsxs(L, {
              children: [
                e.jsxs(G, {
                  children: [
                    e.jsx(y, { className: "font-bold", children: "Selected:" }),
                    e.jsx(y, { children: r }),
                  ],
                }),
                e.jsx(k, {
                  className: "justify-center h-[30vh]",
                  children: e.jsx(_t, {
                    setExternalSelection: o,
                    selectedOption: r,
                    selectedOnTop: !1,
                    showClose: !1,
                    options: [
                      "option one",
                      "optionTwo",
                      "optionThree",
                      "optionFour",
                      "optionFive",
                      "optionSix",
                      "optionSeven",
                      "optionEight",
                      "optionNine",
                      "optionTen",
                    ],
                  }),
                }),
              ],
            }),
          }),
          e.jsx(a, {
            headerText: "Toast",
            className: "w-[30vh]",
            children: e.jsx(k, {
              className: "justify-center",
              children: e.jsx(I, {
                children: Pe.map((p) =>
                  e.jsx(
                    w,
                    {
                      width: "w-[23vh]",
                      type: "smallNormal",
                      buttonText: p,
                      onClick: () => {
                        b(p), d();
                      },
                    },
                    p
                  )
                ),
              }),
            }),
          }),
          e.jsx(a, {
            headerText: "Tooltip",
            className: "",
            children: e.jsx(k, {
              className: "justify-center",
              children: e.jsx(U, {
                className:
                  "w-full justify-around gap-[3vh] p-[2vh] lg:w-[60vw] xxl:w-[50vw]",
                children: Re.map((p) =>
                  e.jsx(
                    Te,
                    {
                      placement: p,
                      label: p,
                      bg: "bg-col-800",
                      children: e.jsx(C, {
                        className:
                          "justify-center bg-300-diagonal1op25 w-[23vh] shadowNarrowNormal",
                        children: e.jsx(y, {
                          className: "text-lg-tight",
                          children: p,
                        }),
                      }),
                    },
                    p
                  )
                ),
              }),
            }),
          }),
          e.jsx(a, {
            headerText: "Transition",
            className: "",
            children: e.jsx(k, {
              className: "justify-center",
              children: e.jsx(U, {
                className:
                  "w-full justify-around gap-[1.5vh] p-[2vh] lg:w-[60vw] xxl:w-[50vw]",
                children: Oe.map((p) =>
                  e.jsx(
                    w,
                    { buttonText: p, type: "smallNormal", onClick: () => M(p) },
                    p
                  )
                ),
              }),
            }),
          }),
          e.jsx(a, {
            headerText: "Parallax with Image",
            children: e.jsx(ce, { imageOnly: !0 }),
          }),
          e.jsx(a, {
            headerText: "Parallax with Text",
            children: e.jsx(ce, {
              title: "The Melody of Raindrops",
              tagline: "Unveiling the Serenade of the Skies",
              children: e.jsxs(L, {
                children: [
                  e.jsx("p", {
                    children:
                      "In the heart of nature's symphony, raindrops compose a timeless melody, a soothing serenade that whispers to the soul. This ethereal music, born from the heavens, dances upon rooftops and windows, creating a rhythm that resonates with the heartbeat of the earth. Each drop, a note; together, they orchestrate the symphony of the rain, a sound so pure it cleanses the air and rejuvenates life.",
                  }),
                  e.jsx("p", {
                    children:
                      "Amidst the cascade of silver threads, the world transforms. Streets glisten under the embrace of the rain, and the air fills with the fresh scent of petrichor, the earth's perfume released upon receiving the sky's affection. Trees and flowers bask in the nourishing touch, their leaves shimmering with droplets that catch the faint light, turning every view into a masterpiece of sparkling jewels.",
                  }),
                  e.jsx("p", {
                    children:
                      "But beyond its beauty and melody, rain symbolizes renewal and growth. It teaches us the art of letting go, washing away the remnants of yesterday, and nurturing the seeds of tomorrow. In its presence, we find moments of reflection, an invitation to pause and revel in the simple joys of life. The rain, with its gentle persistence, reminds us of nature's cycles, the ebb and flow of life, and the preciousness of every drop in the vast ocean of existence.",
                  }),
                ],
              }),
            }),
          }),
          e.jsx(a, {
            headerText: "Accordion",
            children: e.jsxs(I, {
              gap: "gap-[0px]",
              className: "w-[40vh] h-[40vh]",
              children: [
                e.jsx(te, {
                  title: "Accordion Element One",
                  children: e.jsx("p", {
                    children: "This is the epic content of element one.",
                  }),
                }),
                e.jsx(te, {
                  title: "Accordion Element Two ",
                  children: e.jsx(ie, {
                    label: "This accordion has an input field",
                    labelIsCursive: !1,
                    labelColor: "text-col-100",
                    labelShadow: "textShadow",
                    labelSize: "small",
                  }),
                }),
                e.jsx(te, {
                  title: "Accordion Element Three",
                  children: e.jsx(y, {
                    className: "text-lg-tight",
                    children: "😄🦄",
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
      i &&
        e.jsx(es, {
          message: `I am so toasty - ${u}`,
          isVisible: i,
          duration: 5e3,
          onClose: x,
          position: u,
        }),
      n &&
        e.jsx(Lt, {
          isAlertOpen: n,
          title: "You sure?",
          body: "Please confirm this important thing?",
          confirmButtonText: "Yes!",
          cancelButtonText: "Cancel",
          alertDimensions: "h-50% w-90% md:w-[60vh]",
          bodyClassName: "justify-evenly py-[2vh]",
          onClose: m,
          cancelRef: l,
          onConfirmClick: () => s(),
          bodyTextSize: "text-[2.5vh]",
        }),
      $ &&
        e.jsx(ts, {
          isOpen: $,
          closeTransition: () => S(!1),
          transitionType: j,
        }),
    ],
  });
}
function je({ className: s, text: r }) {
  return e.jsx(C, { className: `px-[1vh] py-[0.5vh] ${s}`, children: r });
}
function v({ bg: s = "bg-col-700", children: r }) {
  return e.jsx(U, {
    className: `${s} px-[1vh] py-[2vh] shadowNarrowNormal gap-y-[2vh] gap-x-[3vh] w-full justify-around`,
    children: r,
  });
}
function ps() {
  function s({ bg: t, children: l, w: h = "w-[16vh]" }) {
    const i =
        t.startsWith("bg-col-9") ||
        t.startsWith("bg-col-800") ||
        t.startsWith("bg-col-700") ||
        t.startsWith("bg-col-600") ||
        t.startsWith("bg-col-5"),
      d =
        t.startsWith("bg-col-1") ||
        t.startsWith("bg-col-2") ||
        t.startsWith("bg-col-3") ||
        t.startsWith("bg-col-4"),
      x = i
        ? "text-col-100  text-stroke-4-900 textShadow"
        : d
        ? "text-col-900  text-stroke-4-900 lightTextShadow"
        : "text-col-100 textShadow";
    return e.jsx(C, {
      className: `h-[5vh] ${h} font-bold ${t} shadowNarrowNormal ${x} justify-center items-center`,
      children: e.jsx(y, { children: l }),
    });
  }
  function r({ id: t, heading: l }) {
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx("div", {
          id: t,
          className: "h-[5.5vh] xl:h-[3.5vh] text-transparent",
          children: "This",
        }),
        e.jsx(C, {
          className: "w-full justify-center pt-[2vh] pb-[1vh]",
          children: e.jsx(B, {
            color: "text-white text-stroke-9-100",
            shadow: "textFog",
            text: l,
            layout: "text-insane-loose",
            className: "px-[2vh]",
          }),
        }),
      ],
    });
  }
  const o = "textGlow",
    n = "text-shadow";
  return e.jsx(J, {
    className: "w-full h-full justify-center overflow-y-auto",
    children: e.jsxs(k, {
      className: "h-full overflow-y-auto justify-center",
      children: [
        e.jsx(k, {
          className:
            "fixed top-0 left-0 p-[1vh] bg-col-200 z-10 shadowWideLooser",
          children: e.jsxs(U, {
            className: "w-full gap-x-[5vh] gap-y-[1vh] justify-around",
            children: [
              e.jsx(E, { icon: ke, type: "smallNormal", to: "/" }),
              e.jsx(O, {
                to: "#colorscheme",
                linkText: "Colors",
                activeStyles: o,
                inactiveStyles: n,
                useHash: !0,
              }),
              e.jsx(O, {
                to: "#rgb",
                linkText: "RBG",
                activeStyles: o,
                inactiveStyles: n,
                useHash: !0,
              }),
              e.jsx(O, {
                to: "#gradients",
                linkText: "Gradients",
                activeStyles: o,
                inactiveStyles: n,
                useHash: !0,
              }),
              e.jsx(O, {
                to: "#complexbackgrounds",
                linkText: "Complex Backgrounds",
                activeStyles: o,
                inactiveStyles: n,
                useHash: !0,
              }),
              e.jsx(O, {
                to: "#buttons",
                linkText: "Buttons",
                activeStyles: o,
                inactiveStyles: n,
                useHash: !0,
              }),
              e.jsx(O, {
                to: "#transitions",
                linkText: "Transitions",
                activeStyles: o,
                inactiveStyles: n,
                useHash: !0,
              }),
              e.jsx(O, {
                to: "#shadow",
                linkText: "Shadows",
                activeStyles: o,
                inactiveStyles: n,
                useHash: !0,
              }),
              e.jsx(O, {
                to: "#borders",
                linkText: "Borders",
                activeStyles: o,
                inactiveStyles: n,
                useHash: !0,
              }),
              e.jsx(O, {
                to: "#text",
                linkText: "Text",
                activeStyles: o,
                inactiveStyles: n,
                useHash: !0,
              }),
              e.jsx(O, {
                to: "#components",
                linkText: "Components",
                activeStyles: o,
                inactiveStyles: n,
                useHash: !0,
              }),
            ],
          }),
        }),
        e.jsxs(L, {
          className: "h-fit px-[2vh] pt-[5.5vh] xl:pt-[3.5vh] pb-[2vh]",
          gap: "gap-[2vh]",
          children: [
            e.jsxs(L, {
              gap: "gap-[1vh]",
              children: [
                e.jsx(r, { id: "colorscheme", heading: "Color Scheme" }),
                e.jsx(v, {
                  bg: "bg-white",
                  children: ze.map((t, l) =>
                    e.jsxs(s, { bg: t, children: [" ", t] }, l)
                  ),
                }),
                e.jsx(v, {
                  children: Ae.map((t, l) =>
                    e.jsxs(s, { bg: t, children: [" ", t] }, l)
                  ),
                }),
                e.jsx(v, {
                  children: Fe.map((t, l) =>
                    e.jsxs(s, { bg: t, children: [" ", t] }, l)
                  ),
                }),
                e.jsx(v, {
                  children: He.map((t, l) =>
                    e.jsxs(s, { bg: t, children: [" ", t] }, l)
                  ),
                }),
                e.jsx(v, {
                  children: De.map((t, l) =>
                    e.jsxs(s, { bg: t, children: [" ", t] }, l)
                  ),
                }),
                e.jsx(v, {
                  children: Ve.map((t, l) =>
                    e.jsxs(s, { bg: t, children: [" ", t] }, l)
                  ),
                }),
                e.jsx(v, {
                  children: We.map((t, l) =>
                    e.jsxs(s, { bg: t, children: [" ", t] }, l)
                  ),
                }),
                e.jsx(v, {
                  bg: "bg-col-500",
                  children: Ge.map((t, l) =>
                    e.jsxs(s, { bg: t, children: [" ", t] }, l)
                  ),
                }),
                e.jsx(v, {
                  bg: "bg-col-500",
                  children: Ue.map((t, l) =>
                    e.jsxs(s, { bg: t, children: [" ", t] }, l)
                  ),
                }),
                e.jsx(v, {
                  bg: "bg-col-500",
                  children: Ke.map((t, l) =>
                    e.jsxs(s, { bg: t, children: [" ", t] }, l)
                  ),
                }),
                e.jsx(r, { id: "rgb", heading: "RBG Equivalents" }),
                e.jsx(v, {
                  bg: "bg-white",
                  children: Ze.map((t, l) =>
                    e.jsxs(
                      s,
                      { bg: t.code, w: "w-[30vh]", children: [" ", t.rgb] },
                      l
                    )
                  ),
                }),
              ],
            }),
            e.jsxs(L, {
              className: "h-fit",
              gap: "gap-[2vh]",
              children: [
                e.jsx(r, { id: "gradients", heading: "Gradients & Opacities" }),
                e.jsx(v, {
                  bg: "bg-white",
                  children: Ye.map((t, l) =>
                    e.jsxs(s, { bg: t, w: "w-[24vh]", children: [" ", t] }, l)
                  ),
                }),
              ],
            }),
            e.jsxs(L, {
              className: "h-fit",
              gap: "gap-[2vh]",
              children: [
                e.jsx(r, {
                  id: "complexbackgrounds",
                  heading: "Complex Backgrounds",
                }),
                e.jsx(B, {
                  isCursive: !1,
                  color: "text-col-100",
                  shadow: "textShadow",
                  layout: "text-lg-normal",
                  text: "col-100 gradient combinations",
                }),
                e.jsx(v, {
                  children: Object.values(oe).map((t, l) =>
                    e.jsxs(
                      s,
                      {
                        bg: t,
                        w: "w-[24vh]",
                        children: [" ", e.jsx(z, { value: t })],
                      },
                      l
                    )
                  ),
                }),
                e.jsx(B, {
                  isCursive: !1,
                  color: "text-col-100",
                  shadow: "textShadow",
                  layout: "text-lg-normal",
                  text: "col-100 gradient combinations",
                }),
                e.jsx(v, {
                  children: Object.values(qe).map((t, l) =>
                    e.jsxs(
                      s,
                      {
                        bg: t,
                        w: "w-[24vh]",
                        children: [" ", e.jsx(z, { value: t })],
                      },
                      l
                    )
                  ),
                }),
                e.jsx(B, {
                  isCursive: !1,
                  color: "text-col-100",
                  shadow: "textShadow",
                  layout: "text-lg-normal",
                  text: "col-200 gradient combinations",
                }),
                e.jsx(v, {
                  children: Object.values(_e).map((t, l) =>
                    e.jsxs(
                      s,
                      {
                        bg: t,
                        w: "w-[24vh]",
                        children: [" ", e.jsx(z, { value: t })],
                      },
                      l
                    )
                  ),
                }),
                e.jsx(B, {
                  isCursive: !1,
                  color: "text-col-100",
                  shadow: "textShadow",
                  layout: "text-lg-normal",
                  text: "col-300 gradient combinations",
                }),
                e.jsx(v, {
                  children: Object.values(oe).map((t, l) =>
                    e.jsx(
                      s,
                      {
                        bg: t,
                        w: "w-[24vh]",
                        children: e.jsx(z, { value: t }),
                      },
                      l
                    )
                  ),
                }),
                e.jsx(B, {
                  isCursive: !1,
                  color: "text-col-100",
                  shadow: "textShadow",
                  layout: "text-lg-normal",
                  text: "col-400 gradient combinations",
                }),
                e.jsx(v, {
                  children: Object.values(Je).map((t, l) =>
                    e.jsx(
                      s,
                      {
                        bg: t,
                        w: "w-[24vh]",
                        children: e.jsx(z, { value: t }),
                      },
                      l
                    )
                  ),
                }),
                e.jsx(B, {
                  isCursive: !1,
                  color: "text-col-100",
                  shadow: "textShadow",
                  layout: "text-lg-normal",
                  text: "col-500 gradient combinations",
                }),
                e.jsx(v, {
                  children: Object.values(Qe).map((t, l) =>
                    e.jsx(
                      s,
                      {
                        bg: t,
                        w: "w-[24vh]",
                        children: e.jsx(z, { value: t }),
                      },
                      l
                    )
                  ),
                }),
                e.jsx(B, {
                  isCursive: !1,
                  color: "text-col-100",
                  shadow: "textShadow",
                  layout: "text-lg-normal",
                  text: "col-600 gradient combinations",
                }),
                e.jsx(v, {
                  children: Object.values(Xe).map((t, l) =>
                    e.jsx(
                      s,
                      {
                        bg: t,
                        w: "w-[24vh]",
                        children: e.jsx(z, { value: t }),
                      },
                      l
                    )
                  ),
                }),
                e.jsx(B, {
                  isCursive: !1,
                  color: "text-col-100",
                  shadow: "textShadow",
                  layout: "text-lg-normal",
                  text: "col-700 gradient combinations",
                }),
                e.jsx(v, {
                  bg: "bg-col-500",
                  children: Object.values(et).map((t, l) =>
                    e.jsx(
                      s,
                      {
                        bg: t,
                        w: "w-[24vh]",
                        children: e.jsx(z, { value: t }),
                      },
                      l
                    )
                  ),
                }),
                e.jsx(B, {
                  isCursive: !1,
                  color: "text-col-100",
                  shadow: "textShadow",
                  layout: "text-lg-normal",
                  text: "col-800 gradient combinations",
                }),
                e.jsx(v, {
                  children: Object.values(tt).map((t, l) =>
                    e.jsx(
                      s,
                      {
                        bg: t,
                        w: "w-[24vh]",
                        children: e.jsx(z, { value: t }),
                      },
                      l
                    )
                  ),
                }),
                e.jsx(B, {
                  isCursive: !1,
                  color: "text-col-100",
                  shadow: "textShadow",
                  layout: "text-lg-normal",
                  text: "col-900 gradient combinations",
                }),
                e.jsx(v, {
                  children: Object.values(st).map((t, l) =>
                    e.jsx(
                      s,
                      {
                        bg: t,
                        w: "w-[24vh]",
                        children: e.jsx(z, { value: t }),
                      },
                      l
                    )
                  ),
                }),
              ],
            }),
            e.jsxs(L, {
              className: "w-90% pb-[3vh]",
              children: [
                e.jsx(r, { id: "buttons", heading: "Buttons" }),
                e.jsxs(v, {
                  bg: "bg-col-200",
                  children: [
                    e.jsx(w, { buttonText: "Normal" }),
                    " ",
                    e.jsx(w, {
                      type: "smallNormal",
                      buttonText: "NormalButton",
                    }),
                    e.jsx(w, { type: "negative", buttonText: "Negative" }),
                    e.jsx(w, {
                      type: "smallNegative",
                      buttonText: "Negative Small",
                    }),
                    e.jsx(w, { type: "unstyled", buttonText: "Unstyled" }),
                    e.jsx(w, {
                      type: "smallUnstyled",
                      buttonText: "Unstyled Small",
                    }),
                    e.jsx(w, { buttonText: "Normal Icon Left", iconLeft: A }),
                    e.jsx(w, {
                      buttonText: "Small Icon Right",
                      iconRight: A,
                      type: "smallNormal",
                    }),
                    e.jsx(w, {
                      buttonText: "Negative Icon Left",
                      type: "negative",
                      iconLeft: A,
                    }),
                    e.jsx(w, {
                      buttonText: "Small Negative Icon Right",
                      type: "smallNegative",
                      iconRight: A,
                    }),
                    e.jsx(E, { icon: A }),
                    " ",
                    e.jsx(E, { type: "smallNormal", icon: A }),
                    e.jsx(E, { type: "negative", icon: A }),
                    e.jsx(E, { type: "smallNegative", icon: A }),
                    e.jsx(E, { type: "unstyled", icon: A }),
                    e.jsx(E, { type: "smallUnstyled", icon: A }),
                  ],
                }),
              ],
            }),
            e.jsxs(L, {
              children: [
                e.jsx(r, { id: "transitions", heading: "Transitions" }),
                e.jsx(v, {
                  children: rt.map((t) =>
                    e.jsx(
                      je,
                      {
                        className: `transition-300 bg-col-200 hover:bg-col-900
              hover:text-col-100 shadowNarrowNormal`,
                        text: `className='${t}'`,
                      },
                      t
                    )
                  ),
                }),
                e.jsx(r, { id: "shadow", heading: "Shadows" }),
                e.jsxs(L, {
                  children: [
                    " ",
                    e.jsx(v, {
                      bg: "bg-col-100",
                      children: lt.map((t) =>
                        e.jsx(
                          N,
                          {
                            className: t,
                            children: e.jsx(y, {
                              className: "p-[1vh]",
                              children: t,
                            }),
                          },
                          t
                        )
                      ),
                    }),
                    e.jsx(v, {
                      bg: "bg-col-800",
                      children: ot.map((t) =>
                        e.jsx(
                          N,
                          {
                            className: t,
                            children: e.jsx(y, {
                              className: "text-col-100 p-[1vh]",
                              children: t,
                            }),
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
                e.jsx(r, { id: "borders", heading: "Borders" }),
                e.jsx(v, {
                  children: e.jsx(ne, { startIndex: 0, endIndex: 95 }),
                }),
                e.jsx(v, {
                  bg: "bg-col-200",
                  children: e.jsx(ne, {
                    startIndex: 96,
                    endIndex: 215,
                    textColor: "text-col-900",
                  }),
                }),
                e.jsx(r, { id: "text", heading: "Text" }),
                e.jsx(v, {
                  children: nt.map((t, l) =>
                    e.jsx(
                      N,
                      {
                        className:
                          "bg-col-500 h-fit text-col-100 shadowNarrowNormal px-[1vh]",
                        children: e.jsx(y, { className: `${t} `, children: t }),
                      },
                      l
                    )
                  ),
                }),
                e.jsx(r, { id: "", heading: "Text Shadow" }),
                e.jsx(v, {
                  children: at.map((t, l) =>
                    e.jsx(
                      N,
                      {
                        className:
                          t === "textFog"
                            ? "text-col-100 bg-col-200 shadowNarrowNormal p-[1vh]"
                            : "text-col-900 bg-col-200 shadowNarrowNormal p-[1vh]",
                        children: e.jsx(y, { className: `${t} `, children: t }),
                      },
                      l
                    )
                  ),
                }),
                e.jsx(r, { id: "", heading: "Text Stroke" }),
                e.jsx(v, {
                  children: it.map((t, l) =>
                    e.jsx(
                      N,
                      {
                        className: "font-bold",
                        children: e.jsx(y, {
                          className: `${t} text-xxl-normal text-col-700`,
                          children: t,
                        }),
                      },
                      l
                    )
                  ),
                }),
                e.jsx(v, {
                  bg: "bg-col-300",
                  children: ct.map((t, l) =>
                    e.jsx(
                      N,
                      {
                        className: "font-bold",
                        children: e.jsx(y, {
                          className: `${t} text-xxl-normal text-col-300`,
                          children: t,
                        }),
                      },
                      l
                    )
                  ),
                }),
                e.jsx(r, { id: "components", heading: "Components" }),
                e.jsx(v, { bg: "bg-col-600", children: e.jsx(ls, {}) }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
export { ps as default };
