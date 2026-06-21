import {
  f as p,
  c as N,
  i as R,
  s as Y,
  a as $,
  p as ee,
  v as te,
  b as se,
  d as re,
  e as ne,
  n as X,
  g as oe,
  h as ie,
  u as j,
  r as x,
  k as U,
  l as L,
  o as v,
  M as ce,
  q as k,
  j as o,
  m as h,
} from "./index-BAmnnPZt.js";
import {
  a0 as ae,
  k as q,
  a1 as le,
} from "./react-three-fiber.esm-E-x426cn.js";
import { A as de, C as ue, F as fe } from "./film-CE3Pt3C0.js";
import { P as he } from "./play-D7UAc74Y.js";
import { A as xe } from "./arrow-right-CcCdBzaC.js";
import "./createLucideIcon-DUsiWVv4.js";
function K(e, t) {
  let s;
  const r = () => {
    const { currentTime: n } = t,
      c = (n === null ? 0 : n.value) / 100;
    (s !== c && e(c), (s = c));
  };
  return (p.preUpdate(r, !0), () => N(r));
}
function me(...e) {
  const t = !Array.isArray(e[0]),
    s = t ? 0 : -1,
    r = e[0 + s],
    n = e[1 + s],
    i = e[2 + s],
    c = e[3 + s],
    a = R(n, i, c);
  return t ? a(r) : a;
}
function E(e) {
  return typeof window > "u" ? !1 : e ? Y() : $();
}
const pe = 50,
  T = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  ge = () => ({ time: 0, x: T(), y: T() }),
  ye = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function M(e, t, s, r) {
  const n = s[t],
    { length: i, position: c } = ye[t],
    a = n.current,
    d = s.time;
  ((n.current = Math.abs(e[`scroll${c}`])),
    (n.scrollLength = e[`scroll${i}`] - e[`client${i}`]),
    (n.offset.length = 0),
    (n.offset[0] = 0),
    (n.offset[1] = n.scrollLength),
    (n.progress = ee(0, n.scrollLength, n.current)));
  const l = r - d;
  n.velocity = l > pe ? 0 : te(n.current - a, l);
}
function ve(e, t, s) {
  (M(e, "x", t, s), M(e, "y", t, s), (t.time = s));
}
function He(e, t) {
  const s = { x: 0, y: 0 };
  let r = e;
  for (; r && r !== t; )
    if (se(r))
      ((s.x += r.offsetLeft), (s.y += r.offsetTop), (r = r.offsetParent));
    else if (r.tagName === "svg") {
      const n = r.getBoundingClientRect();
      r = r.parentElement;
      const i = r.getBoundingClientRect();
      ((s.x += n.left - i.left), (s.y += n.top - i.top));
    } else if (r instanceof SVGGraphicsElement) {
      const { x: n, y: i } = r.getBBox();
      ((s.x += n), (s.y += i));
      let c = null,
        a = r.parentNode;
      for (; !c; ) (a.tagName === "svg" && (c = a), (a = r.parentNode));
      r = c;
    } else break;
  return s;
}
const S = { start: 0, center: 0.5, end: 1 };
function W(e, t, s = 0) {
  let r = 0;
  if ((e in S && (e = S[e]), typeof e == "string")) {
    const n = parseFloat(e);
    e.endsWith("px")
      ? (r = n)
      : e.endsWith("%")
        ? (e = n / 100)
        : e.endsWith("vw")
          ? (r = (n / 100) * document.documentElement.clientWidth)
          : e.endsWith("vh")
            ? (r = (n / 100) * document.documentElement.clientHeight)
            : (e = n);
  }
  return (typeof e == "number" && (r = t * e), s + r);
}
const je = [0, 0];
function we(e, t, s, r) {
  let n = Array.isArray(e) ? e : je,
    i = 0,
    c = 0;
  return (
    typeof e == "number"
      ? (n = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (n = e.split(" ")) : (n = [e, S[e] ? e : "0"])),
    (i = W(n[0], s, r)),
    (c = W(n[1], t)),
    i - c
  );
}
const H = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  be = { x: 0, y: 0 };
function Ne(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function Ee(e, t, s) {
  const { offset: r = H.All } = s,
    { target: n = e, axis: i = "y" } = s,
    c = i === "y" ? "height" : "width",
    a = n !== e ? He(n, e) : be,
    d = n === e ? { width: e.scrollWidth, height: e.scrollHeight } : Ne(n),
    l = { width: e.clientWidth, height: e.clientHeight };
  t[i].offset.length = 0;
  let u = !t[i].interpolate;
  const g = r.length;
  for (let f = 0; f < g; f++) {
    const y = we(r[f], l[c], d[c], a[i]);
    (!u && y !== t[i].interpolatorOffsets[f] && (u = !0), (t[i].offset[f] = y));
  }
  (u &&
    ((t[i].interpolate = R(t[i].offset, re(r), { clamp: !1 })),
    (t[i].interpolatorOffsets = [...t[i].offset])),
    (t[i].progress = ne(0, 1, t[i].interpolate(t[i].current))));
}
function ke(e, t = e, s) {
  if (((s.x.targetOffset = 0), (s.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e; )
      ((s.x.targetOffset += r.offsetLeft),
        (s.y.targetOffset += r.offsetTop),
        (r = r.offsetParent));
  }
  ((s.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (s.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (s.x.containerLength = e.clientWidth),
    (s.y.containerLength = e.clientHeight));
}
function Ae(e, t, s, r = {}) {
  return {
    measure: (n) => {
      (ke(e, r.target, s), ve(e, s, n), (r.offset || r.target) && Ee(e, s, r));
    },
    notify: () => t(s),
  };
}
const m = new WeakMap(),
  F = new WeakMap(),
  A = new WeakMap(),
  I = new WeakMap(),
  w = new WeakMap(),
  B = (e) => (e === document.scrollingElement ? window : e);
function J(
  e,
  {
    container: t = document.scrollingElement,
    trackContentSize: s = !1,
    ...r
  } = {},
) {
  if (!t) return X;
  let n = A.get(t);
  n || ((n = new Set()), A.set(t, n));
  const i = ge(),
    c = Ae(t, e, i, r);
  if ((n.add(c), !m.has(t))) {
    const d = () => {
        for (const f of n) f.measure(ie.timestamp);
        p.preUpdate(l);
      },
      l = () => {
        for (const f of n) f.notify();
      },
      u = () => p.read(d);
    m.set(t, u);
    const g = B(t);
    (window.addEventListener("resize", u),
      t !== document.documentElement && F.set(t, oe(t, u)),
      g.addEventListener("scroll", u),
      u());
  }
  if (s && !w.has(t)) {
    const d = m.get(t),
      l = { width: t.scrollWidth, height: t.scrollHeight };
    I.set(t, l);
    const u = () => {
        const f = t.scrollWidth,
          y = t.scrollHeight;
        (l.width !== f || l.height !== y) &&
          (d(), (l.width = f), (l.height = y));
      },
      g = p.read(u, !0);
    w.set(t, g);
  }
  const a = m.get(t);
  return (
    p.read(a, !1, !0),
    () => {
      N(a);
      const d = A.get(t);
      if (!d || (d.delete(c), d.size)) return;
      const l = m.get(t);
      (m.delete(t),
        l &&
          (B(t).removeEventListener("scroll", l),
          F.get(t)?.(),
          window.removeEventListener("resize", l)));
      const u = w.get(t);
      (u && (N(u), w.delete(t)), I.delete(t));
    }
  );
}
const Se = [
    [H.Enter, "entry"],
    [H.Exit, "exit"],
    [H.Any, "cover"],
    [H.All, "contain"],
  ],
  z = { start: 0, end: 1 };
function Ce(e) {
  const t = e.trim().split(/\s+/);
  if (t.length !== 2) return;
  const s = z[t[0]],
    r = z[t[1]];
  if (!(s === void 0 || r === void 0)) return [s, r];
}
function Pe(e) {
  if (e.length !== 2) return;
  const t = [];
  for (const s of e)
    if (Array.isArray(s)) t.push(s);
    else if (typeof s == "string") {
      const r = Ce(s);
      if (!r) return;
      t.push(r);
    } else return;
  return t;
}
function Le(e, t) {
  const s = Pe(e);
  if (!s) return !1;
  for (let r = 0; r < 2; r++) {
    const n = s[r],
      i = t[r];
    if (n[0] !== i[0] || n[1] !== i[1]) return !1;
  }
  return !0;
}
function P(e) {
  if (!e) return { rangeStart: "contain 0%", rangeEnd: "contain 100%" };
  for (const [t, s] of Se)
    if (Le(e, t)) return { rangeStart: `${s} 0%`, rangeEnd: `${s} 100%` };
}
const D = new Map();
function V(e) {
  const t = { value: 0 },
    s = J((r) => {
      t.value = r[e.axis].progress * 100;
    }, e);
  return { currentTime: t, cancel: s };
}
function Q({ source: e, container: t, ...s }) {
  const { axis: r } = s;
  e && (t = e);
  let n = D.get(t);
  n || ((n = new Map()), D.set(t, n));
  const i = s.target ?? "self";
  let c = n.get(i);
  c || ((c = {}), n.set(i, c));
  const a = r + (s.offset ?? []).join(",");
  return (
    c[a] ||
      (s.target && E(s.target)
        ? P(s.offset)
          ? (c[a] = new ViewTimeline({ subject: s.target, axis: r }))
          : (c[a] = V({ container: t, ...s }))
        : E()
          ? (c[a] = new ScrollTimeline({ source: t, axis: r }))
          : (c[a] = V({ container: t, ...s }))),
    c[a]
  );
}
function Te(e, t) {
  const s = Q(t),
    r = t.target ? P(t.offset) : void 0,
    n = t.target ? E(t.target) && !!r : E();
  return e.attachTimeline({
    timeline: n ? s : void 0,
    ...(r && n && { rangeStart: r.rangeStart, rangeEnd: r.rangeEnd }),
    observe: (i) => (
      i.pause(),
      K((c) => {
        i.time = i.iterationDuration * c;
      }, s)
    ),
  });
}
function Me(e) {
  return e.length === 2;
}
function We(e, t) {
  return Me(e)
    ? J((s) => {
        e(s[t.axis].progress, s);
      }, t)
    : K(e, Q(t));
}
function _(
  e,
  { axis: t = "y", container: s = document.scrollingElement, ...r } = {},
) {
  if (!s) return X;
  const n = { axis: t, container: s, ...r };
  return typeof e == "function" ? We(e, n) : Te(e, n);
}
const Fe = () => ({
    scrollX: v(0),
    scrollY: v(0),
    scrollXProgress: v(0),
    scrollYProgress: v(0),
  }),
  b = (e) => (e ? !e.current : !1);
function O(e, t, s, r) {
  return {
    factory: (n) =>
      _(n, {
        ...t,
        axis: e,
        container: s?.current || void 0,
        target: r?.current || void 0,
      }),
    times: [0, 1],
    keyframes: [0, 1],
    ease: (n) => n,
    duration: 1,
  };
}
function Ie(e, t) {
  return typeof window > "u" ? !1 : e ? Y() && !!P(t) : $();
}
function Be({ container: e, target: t, ...s } = {}) {
  const r = j(Fe);
  Ie(t, s.offset) &&
    ((r.scrollXProgress.accelerate = O("x", s, e, t)),
    (r.scrollYProgress.accelerate = O("y", s, e, t)));
  const n = x.useRef(null),
    i = x.useRef(!1),
    c = x.useCallback(
      () => (
        (n.current = _(
          (a, { x: d, y: l }) => {
            (r.scrollX.set(d.current),
              r.scrollXProgress.set(d.progress),
              r.scrollY.set(l.current),
              r.scrollYProgress.set(l.progress));
          },
          {
            ...s,
            container: e?.current || void 0,
            target: t?.current || void 0,
          },
        )),
        () => {
          n.current?.();
        }
      ),
      [e, t, JSON.stringify(s.offset)],
    );
  return (
    U(() => {
      if (((i.current = !1), b(e) || b(t))) {
        i.current = !0;
        return;
      } else return c();
    }, [c]),
    x.useEffect(() => {
      if (i.current) return (L(!b(e)), L(!b(t)), c());
    }, [c]),
    r
  );
}
function ze(e) {
  const t = j(() => v(e)),
    { isStatic: s } = x.useContext(ce);
  if (s) {
    const [, r] = x.useState(e);
    x.useEffect(() => t.on("change", r), []);
  }
  return t;
}
function Z(e, t) {
  const s = ze(t()),
    r = () => s.set(t());
  return (
    r(),
    U(() => {
      const n = () => p.preRender(r, !1, !0),
        i = e.map((c) => c.on("change", n));
      return () => {
        (i.forEach((c) => c()), N(r));
      };
    }),
    s
  );
}
function De(e) {
  ((k.current = []), e());
  const t = Z(k.current, e);
  return ((k.current = void 0), t);
}
function C(e, t, s, r) {
  if (typeof e == "function") return De(e);
  if (s !== void 0 && !Array.isArray(s) && typeof t != "function")
    return Ve(e, t, s, r);
  const c = typeof t == "function" ? t : me(t, s, r),
    a = Array.isArray(e) ? G(e, c) : G([e], ([l]) => c(l)),
    d = Array.isArray(e) ? void 0 : e.accelerate;
  return (
    d &&
      !d.isTransformed &&
      typeof t != "function" &&
      Array.isArray(s) &&
      r?.clamp !== !1 &&
      (a.accelerate = { ...d, times: t, keyframes: s, isTransformed: !0 }),
    a
  );
}
function G(e, t) {
  const s = j(() => []);
  return Z(e, () => {
    s.length = 0;
    const r = e.length;
    for (let n = 0; n < r; n++) s[n] = e[n].get();
    return t(s);
  });
}
function Ve(e, t, s, r) {
  const n = j(() => Object.keys(s)),
    i = j(() => ({}));
  for (const c of n) i[c] = C(e, t, s[c], r);
  return i;
}
function Oe() {
  const e = x.useRef(null);
  return (
    q((t) => {
      e.current &&
        ((e.current.rotation.x = Math.sin(t.clock.elapsedTime * 0.2) * 0.1),
        (e.current.rotation.y = t.clock.elapsedTime * 0.1));
    }),
    o.jsxs("group", {
      "code-path": "src/sections/Hero.tsx:19:5",
      ref: e,
      children: [
        o.jsxs("mesh", {
          "code-path": "src/sections/Hero.tsx:21:7",
          position: [3, 1, -2],
          rotation: [Math.PI / 4, 0, 0],
          children: [
            o.jsx("torusGeometry", {
              "code-path": "src/sections/Hero.tsx:22:9",
              args: [0.8, 0.02, 16, 100],
            }),
            o.jsx("meshStandardMaterial", {
              "code-path": "src/sections/Hero.tsx:23:9",
              color: "#F59E0B",
              metalness: 1,
              roughness: 0.1,
              emissive: "#F59E0B",
              emissiveIntensity: 0.5,
              transparent: !0,
              opacity: 0.6,
            }),
          ],
        }),
        o.jsxs("mesh", {
          "code-path": "src/sections/Hero.tsx:35:7",
          position: [-3, -1, -1],
          rotation: [0, Math.PI / 4, 0],
          children: [
            o.jsx("torusGeometry", {
              "code-path": "src/sections/Hero.tsx:36:9",
              args: [0.6, 0.015, 16, 100],
            }),
            o.jsx("meshStandardMaterial", {
              "code-path": "src/sections/Hero.tsx:37:9",
              color: "#FCD34D",
              metalness: 1,
              roughness: 0.1,
              emissive: "#FCD34D",
              emissiveIntensity: 0.4,
              transparent: !0,
              opacity: 0.5,
            }),
          ],
        }),
        o.jsxs("mesh", {
          "code-path": "src/sections/Hero.tsx:49:7",
          position: [2, -2, -3],
          rotation: [Math.PI / 6, Math.PI / 3, 0],
          children: [
            o.jsx("torusGeometry", {
              "code-path": "src/sections/Hero.tsx:50:9",
              args: [1, 0.025, 16, 100],
            }),
            o.jsx("meshStandardMaterial", {
              "code-path": "src/sections/Hero.tsx:51:9",
              color: "#D97706",
              metalness: 1,
              roughness: 0.1,
              emissive: "#D97706",
              emissiveIntensity: 0.3,
              transparent: !0,
              opacity: 0.4,
            }),
          ],
        }),
        o.jsxs("mesh", {
          "code-path": "src/sections/Hero.tsx:63:7",
          position: [-2, 2, -2],
          children: [
            o.jsx("boxGeometry", {
              "code-path": "src/sections/Hero.tsx:64:9",
              args: [0.3, 0.3, 0.3],
            }),
            o.jsx("meshStandardMaterial", {
              "code-path": "src/sections/Hero.tsx:65:9",
              color: "#F59E0B",
              metalness: 0.8,
              roughness: 0.2,
              emissive: "#F59E0B",
              emissiveIntensity: 0.3,
              transparent: !0,
              opacity: 0.7,
            }),
          ],
        }),
        o.jsxs("mesh", {
          "code-path": "src/sections/Hero.tsx:76:7",
          position: [3, -1, -1],
          children: [
            o.jsx("octahedronGeometry", {
              "code-path": "src/sections/Hero.tsx:77:9",
              args: [0.2],
            }),
            o.jsx("meshStandardMaterial", {
              "code-path": "src/sections/Hero.tsx:78:9",
              color: "#FCD34D",
              metalness: 0.9,
              roughness: 0.1,
              emissive: "#FCD34D",
              emissiveIntensity: 0.4,
              transparent: !0,
              opacity: 0.6,
            }),
          ],
        }),
      ],
    })
  );
}
function Ge() {
  const e = x.useRef(null),
    t = 200,
    s = new Float32Array(t * 3);
  for (let n = 0; n < t; n++)
    ((s[n * 3] = (Math.random() - 0.5) * 20),
      (s[n * 3 + 1] = (Math.random() - 0.5) * 20),
      (s[n * 3 + 2] = (Math.random() - 0.5) * 10));
  q((n) => {
    e.current && (e.current.rotation.y = n.clock.elapsedTime * 0.02);
  });
  const r = new le(s, 3);
  return o.jsxs("points", {
    "code-path": "src/sections/Hero.tsx:114:5",
    ref: e,
    children: [
      o.jsx("bufferGeometry", {
        "code-path": "src/sections/Hero.tsx:115:7",
        children: o.jsx("primitive", {
          "code-path": "src/sections/Hero.tsx:116:9",
          attach: "attributes-position",
          object: r,
        }),
      }),
      o.jsx("pointsMaterial", {
        "code-path": "src/sections/Hero.tsx:118:7",
        size: 0.03,
        color: "#F59E0B",
        transparent: !0,
        opacity: 0.6,
        sizeAttenuation: !0,
      }),
    ],
  });
}
function Re() {
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx("ambientLight", {
        "code-path": "src/sections/Hero.tsx:133:7",
        intensity: 0.3,
      }),
      o.jsx("directionalLight", {
        "code-path": "src/sections/Hero.tsx:134:7",
        position: [5, 5, 5],
        intensity: 0.8,
      }),
      o.jsx("pointLight", {
        "code-path": "src/sections/Hero.tsx:135:7",
        position: [0, 0, 5],
        color: "#F59E0B",
        intensity: 1,
      }),
      o.jsx(Oe, { "code-path": "src/sections/Hero.tsx:136:7" }),
      o.jsx(Ge, { "code-path": "src/sections/Hero.tsx:137:7" }),
    ],
  });
}
function Je() {
  const e = x.useRef(null),
    { scrollYProgress: t } = Be({
      target: e,
      offset: ["start start", "end start"],
    }),
    s = C(t, [0, 1], ["0%", "30%"]),
    r = C(t, [0, 0.5], [1, 0]),
    n = (i) => {
      const c = document.querySelector(i);
      c && c.scrollIntoView({ behavior: "smooth" });
    };
  return o.jsxs("section", {
    "code-path": "src/sections/Hero.tsx:160:5",
    id: "home",
    ref: e,
    className: "relative min-h-screen flex items-center overflow-hidden",
    children: [
      o.jsx("div", {
        "code-path": "src/sections/Hero.tsx:166:7",
        className: "absolute inset-0 z-0",
        children: o.jsx(ae, {
          "code-path": "src/sections/Hero.tsx:167:9",
          camera: { position: [0, 0, 8], fov: 60 },
          children: o.jsx(Re, { "code-path": "src/sections/Hero.tsx:168:11" }),
        }),
      }),
      o.jsx("div", {
        "code-path": "src/sections/Hero.tsx:173:7",
        className:
          "absolute inset-0 bg-gradient-to-b from-dark-950/50 via-dark-950/70 to-dark-950 z-10",
      }),
      o.jsx("div", {
        "code-path": "src/sections/Hero.tsx:176:7",
        className:
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/10 rounded-full blur-[150px] z-10",
      }),
      o.jsx(h.div, {
        "code-path": "src/sections/Hero.tsx:179:7",
        style: { y: s, opacity: r },
        className: "relative z-20 w-full section-padding py-32",
        children: o.jsx("div", {
          "code-path": "src/sections/Hero.tsx:183:9",
          className: "max-w-7xl mx-auto",
          children: o.jsxs("div", {
            "code-path": "src/sections/Hero.tsx:184:11",
            className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
            children: [
              o.jsxs("div", {
                "code-path": "src/sections/Hero.tsx:186:13",
                className: "order-2 lg:order-1",
                children: [
                  o.jsxs(h.div, {
                    "code-path": "src/sections/Hero.tsx:188:15",
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, delay: 0.2 },
                    className:
                      "inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-6",
                    children: [
                      o.jsx(de, {
                        "code-path": "src/sections/Hero.tsx:194:17",
                        className: "w-4 h-4 text-gold-400",
                      }),
                      o.jsx("span", {
                        "code-path": "src/sections/Hero.tsx:195:17",
                        className: "text-sm font-medium text-gold-400",
                        children: "Award Winning Videographer",
                      }),
                    ],
                  }),
                  o.jsxs(h.h1, {
                    "code-path": "src/sections/Hero.tsx:201:15",
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.8, delay: 0.3 },
                    className: "heading-xl text-white mb-6",
                    children: [
                      "Capturing Moments,",
                      o.jsx("br", {
                        "code-path": "src/sections/Hero.tsx:208:17",
                      }),
                      o.jsx("span", {
                        "code-path": "src/sections/Hero.tsx:209:17",
                        className: "text-gradient-gold",
                        children: "Creating Stories",
                      }),
                    ],
                  }),
                  o.jsx(h.p, {
                    "code-path": "src/sections/Hero.tsx:213:15",
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.8, delay: 0.4 },
                    className: "body-lg mb-8 max-w-xl",
                    children:
                      "Professional videography services that transform your vision into cinematic reality. From weddings to commercial projects, we bring your stories to life with stunning visuals.",
                  }),
                  o.jsx(h.div, {
                    "code-path": "src/sections/Hero.tsx:225:15",
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.8, delay: 0.5 },
                    className: "flex flex-wrap gap-8 mb-10",
                    children: [
                      { value: "10+", label: "Years Experience" },
                      { value: "500+", label: "Projects Done" },
                      { value: "50+", label: "Awards Won" },
                    ].map((i, c) =>
                      o.jsxs(
                        "div",
                        {
                          "code-path": "src/sections/Hero.tsx:236:19",
                          className: "text-center",
                          children: [
                            o.jsx("div", {
                              "code-path": "src/sections/Hero.tsx:237:21",
                              className:
                                "text-3xl md:text-4xl font-bold text-gradient-gold",
                              children: i.value,
                            }),
                            o.jsx("div", {
                              "code-path": "src/sections/Hero.tsx:240:21",
                              className: "text-sm text-dark-400 mt-1",
                              children: i.label,
                            }),
                          ],
                        },
                        c,
                      ),
                    ),
                  }),
                  o.jsxs(h.div, {
                    "code-path": "src/sections/Hero.tsx:246:15",
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.8, delay: 0.6 },
                    className: "flex flex-wrap gap-4",
                    children: [
                      o.jsxs(h.button, {
                        "code-path": "src/sections/Hero.tsx:252:17",
                        onClick: () => n("#works"),
                        className: "btn-primary flex items-center gap-2",
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        children: [
                          o.jsx(he, {
                            "code-path": "src/sections/Hero.tsx:258:19",
                            className: "w-5 h-5",
                          }),
                          "View My Work",
                        ],
                      }),
                      o.jsxs(h.button, {
                        "code-path": "src/sections/Hero.tsx:261:17",
                        onClick: () => n("#contact"),
                        className: "btn-outline flex items-center gap-2",
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        children: [
                          "Get In Touch",
                          o.jsx(xe, {
                            "code-path": "src/sections/Hero.tsx:268:19",
                            className: "w-5 h-5",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              o.jsx(h.div, {
                "code-path": "src/sections/Hero.tsx:274:13",
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 1, delay: 0.4 },
                className: "order-1 lg:order-2 relative",
                children: o.jsxs("div", {
                  "code-path": "src/sections/Hero.tsx:280:15",
                  className:
                    "relative aspect-[3/4] max-w-md mx-auto lg:max-w-none",
                  children: [
                    o.jsx("div", {
                      "code-path": "src/sections/Hero.tsx:282:17",
                      className:
                        "absolute inset-0 bg-gradient-gold opacity-20 blur-[80px] rounded-full",
                    }),
                    o.jsx(h.div, {
                      "code-path": "src/sections/Hero.tsx:285:17",
                      animate: { y: [0, -15, 0] },
                      transition: {
                        duration: 6,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                      },
                      className: "relative z-10",
                      children: o.jsxs("div", {
                        "code-path": "src/sections/Hero.tsx:290:19",
                        className:
                          "relative rounded-3xl overflow-hidden border-2 border-gold-500/30 shadow-glow-lg",
                        children: [
                          o.jsx("img", {
                            "code-path": "src/sections/Hero.tsx:291:21",
                            src: "/hero-videographer.jpg",
                            alt: "Professional Videographer",
                            className: "w-full h-auto object-cover",
                          }),
                          o.jsx("div", {
                            "code-path": "src/sections/Hero.tsx:298:21",
                            className:
                              "absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent",
                          }),
                          o.jsx(h.div, {
                            "code-path": "src/sections/Hero.tsx:301:21",
                            initial: { opacity: 0, x: -20 },
                            animate: { opacity: 1, x: 0 },
                            transition: { delay: 1, duration: 0.6 },
                            className:
                              "absolute bottom-6 left-6 glass rounded-xl p-4",
                            children: o.jsxs("div", {
                              "code-path": "src/sections/Hero.tsx:307:23",
                              className: "flex items-center gap-3",
                              children: [
                                o.jsx("div", {
                                  "code-path": "src/sections/Hero.tsx:308:25",
                                  className:
                                    "w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center",
                                  children: o.jsx(ue, {
                                    "code-path": "src/sections/Hero.tsx:309:27",
                                    className: "w-6 h-6 text-dark-950",
                                  }),
                                }),
                                o.jsxs("div", {
                                  "code-path": "src/sections/Hero.tsx:311:25",
                                  children: [
                                    o.jsx("div", {
                                      "code-path":
                                        "src/sections/Hero.tsx:312:27",
                                      className: "text-white font-semibold",
                                      children: "4K Quality",
                                    }),
                                    o.jsx("div", {
                                      "code-path":
                                        "src/sections/Hero.tsx:313:27",
                                      className: "text-dark-400 text-sm",
                                      children: "Cinematic Footage",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          o.jsx(h.div, {
                            "code-path": "src/sections/Hero.tsx:319:21",
                            initial: { opacity: 0, x: 20 },
                            animate: { opacity: 1, x: 0 },
                            transition: { delay: 1.2, duration: 0.6 },
                            className:
                              "absolute top-6 right-6 glass rounded-xl p-4",
                            children: o.jsxs("div", {
                              "code-path": "src/sections/Hero.tsx:325:23",
                              className: "flex items-center gap-3",
                              children: [
                                o.jsx("div", {
                                  "code-path": "src/sections/Hero.tsx:326:25",
                                  className:
                                    "w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center",
                                  children: o.jsx(fe, {
                                    "code-path": "src/sections/Hero.tsx:327:27",
                                    className: "w-6 h-6 text-gold-400",
                                  }),
                                }),
                                o.jsxs("div", {
                                  "code-path": "src/sections/Hero.tsx:329:25",
                                  children: [
                                    o.jsx("div", {
                                      "code-path":
                                        "src/sections/Hero.tsx:330:27",
                                      className: "text-white font-semibold",
                                      children: "Pro Gear",
                                    }),
                                    o.jsx("div", {
                                      "code-path":
                                        "src/sections/Hero.tsx:331:27",
                                      className: "text-dark-400 text-sm",
                                      children: "Latest Equipment",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    o.jsx("div", {
                      "code-path": "src/sections/Hero.tsx:339:17",
                      className:
                        "absolute -top-4 -right-4 w-24 h-24 border-2 border-gold-500/30 rounded-full",
                    }),
                    o.jsx("div", {
                      "code-path": "src/sections/Hero.tsx:340:17",
                      className:
                        "absolute -bottom-4 -left-4 w-16 h-16 border-2 border-gold-500/20 rounded-full",
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
      o.jsx("div", {
        "code-path": "src/sections/Hero.tsx:348:7",
        className:
          "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent z-20",
      }),
    ],
  });
}
export { Je as default };
