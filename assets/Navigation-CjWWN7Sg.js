import { r as i, j as e, m as a, A as g } from "./index-BAmnnPZt.js";
import { V as v } from "./video-BWv97wGZ.js";
import { X as f } from "./x-DBVKxTPC.js";
import { c as u } from "./createLucideIcon-DUsiWVv4.js";
const N = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  b = u("menu", N),
  d = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Works", href: "#works" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];
function C() {
  const [p, h] = i.useState(!1),
    [c, r] = i.useState(!1),
    [l, x] = i.useState("home");
  i.useEffect(() => {
    const t = () => {
      h(window.scrollY > 50);
      const o = d.map((s) => s.href.slice(1));
      for (const s of o.reverse()) {
        const m = document.getElementById(s);
        if (m && m.getBoundingClientRect().top <= 100) {
          x(s);
          break;
        }
      }
    };
    return (
      window.addEventListener("scroll", t, { passive: !0 }),
      () => window.removeEventListener("scroll", t)
    );
  }, []);
  const n = (t) => {
    const o = document.querySelector(t);
    (o && o.scrollIntoView({ behavior: "smooth" }), r(!1));
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(a.nav, {
        "code-path": "src/components/Navigation.tsx:51:7",
        initial: { y: -100 },
        animate: { y: 0 },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        className: `fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${p ? "bg-dark-950/80 backdrop-blur-xl border-b border-dark-800/50" : "bg-transparent"}`,
        children: e.jsx("div", {
          "code-path": "src/components/Navigation.tsx:61:9",
          className: "section-padding",
          children: e.jsxs("div", {
            "code-path": "src/components/Navigation.tsx:62:11",
            className: "flex items-center justify-between h-20",
            children: [
              e.jsxs(a.a, {
                "code-path": "src/components/Navigation.tsx:64:13",
                href: "#home",
                onClick: (t) => {
                  (t.preventDefault(), n("#home"));
                },
                className: "flex items-center gap-3 group",
                whileHover: { scale: 1.02 },
                whileTap: { scale: 0.98 },
                children: [
                  e.jsx("div", {
                    "code-path": "src/components/Navigation.tsx:71:15",
                    className:
                      "w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300",
                    children: e.jsx(v, {
                      "code-path": "src/components/Navigation.tsx:72:17",
                      className: "w-5 h-5 text-dark-950",
                    }),
                  }),
                  e.jsx("span", {
                    "code-path": "src/components/Navigation.tsx:74:15",
                    className: "text-xl font-bold text-gradient-gold",
                    children: "VIDEASTE",
                  }),
                ],
              }),
              e.jsx("div", {
                "code-path": "src/components/Navigation.tsx:80:13",
                className: "hidden lg:flex items-center gap-1",
                children: d.map((t) =>
                  e.jsxs(
                    a.a,
                    {
                      "code-path": "src/components/Navigation.tsx:82:17",
                      href: t.href,
                      onClick: (o) => {
                        (o.preventDefault(), n(t.href));
                      },
                      className: `relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${l === t.href.slice(1) ? "text-gold-400" : "text-dark-300 hover:text-gold-400"}`,
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      children: [
                        t.name,
                        l === t.href.slice(1) &&
                          e.jsx(a.div, {
                            "code-path": "src/components/Navigation.tsx:96:21",
                            layoutId: "activeNav",
                            className:
                              "absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-500",
                            transition: {
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            },
                          }),
                      ],
                    },
                    t.name,
                  ),
                ),
              }),
              e.jsx("div", {
                "code-path": "src/components/Navigation.tsx:107:13",
                className: "hidden lg:block",
                children: e.jsx(a.button, {
                  "code-path": "src/components/Navigation.tsx:108:15",
                  onClick: () => n("#contact"),
                  className: "btn-primary text-sm",
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  children: "Book Now",
                }),
              }),
              e.jsx(a.button, {
                "code-path": "src/components/Navigation.tsx:119:13",
                onClick: () => r(!c),
                className:
                  "lg:hidden w-10 h-10 rounded-xl bg-dark-800/50 flex items-center justify-center",
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                children: c
                  ? e.jsx(f, {
                      "code-path": "src/components/Navigation.tsx:126:17",
                      className: "w-5 h-5 text-gold-400",
                    })
                  : e.jsx(b, {
                      "code-path": "src/components/Navigation.tsx:128:17",
                      className: "w-5 h-5 text-dark-300",
                    }),
              }),
            ],
          }),
        }),
      }),
      e.jsx(g, {
        "code-path": "src/components/Navigation.tsx:136:7",
        children:
          c &&
          e.jsxs(a.div, {
            "code-path": "src/components/Navigation.tsx:138:11",
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
            transition: { duration: 0.3 },
            className: "fixed inset-0 z-30 lg:hidden",
            children: [
              e.jsx("div", {
                "code-path": "src/components/Navigation.tsx:145:13",
                className: "absolute inset-0 bg-dark-950/95 backdrop-blur-xl",
                onClick: () => r(!1),
              }),
              e.jsxs(a.div, {
                "code-path": "src/components/Navigation.tsx:149:13",
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.95 },
                transition: { duration: 0.3, delay: 0.1 },
                className:
                  "absolute top-24 left-4 right-4 bg-dark-900/90 backdrop-blur-xl rounded-2xl border border-dark-800/50 p-6",
                children: [
                  e.jsx("div", {
                    "code-path": "src/components/Navigation.tsx:156:15",
                    className: "flex flex-col gap-2",
                    children: d.map((t, o) =>
                      e.jsx(
                        a.a,
                        {
                          "code-path": "src/components/Navigation.tsx:158:19",
                          href: t.href,
                          onClick: (s) => {
                            (s.preventDefault(), n(t.href));
                          },
                          initial: { opacity: 0, x: -20 },
                          animate: { opacity: 1, x: 0 },
                          transition: { delay: o * 0.05 },
                          className: `px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${l === t.href.slice(1) ? "bg-gold-500/10 text-gold-400" : "text-dark-300 hover:bg-dark-800 hover:text-gold-400"}`,
                          children: t.name,
                        },
                        t.name,
                      ),
                    ),
                  }),
                  e.jsx(a.button, {
                    "code-path": "src/components/Navigation.tsx:175:15",
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.3 },
                    onClick: () => n("#contact"),
                    className: "w-full mt-4 btn-primary",
                    children: "Book Now",
                  }),
                ],
              }),
            ],
          }),
      }),
    ],
  });
}
export { C as default };
