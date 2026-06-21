import { r as l, j as e, m as a, A as j } from "./index-BAmnnPZt.js";
import { u as b } from "./use-in-view-BmhCMVrp.js";
import { c as r } from "./createLucideIcon-DUsiWVv4.js";
const f = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
  y = r("chevron-left", f);
const T = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  w = r("chevron-right", T);
const N = [
    [
      "path",
      {
        d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "rib7q0",
      },
    ],
    [
      "path",
      {
        d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "1ymkrd",
      },
    ],
  ],
  k = r("quote", N);
const C = [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ],
  u = r("star", C),
  c = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Bride",
      image: "./client-1.jpg",
      rating: 5,
      text: "Absolutely incredible work! Our wedding video captured every emotion and moment perfectly. The attention to detail and cinematic quality exceeded all our expectations. We cry every time we watch it.",
      project: "Wedding Film",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director, TechCorp",
      image: "./client-2.jpg",
      rating: 5,
      text: "Working with this team was a game-changer for our brand. The commercial they produced increased our engagement by 300%. Professional, creative, and always on time.",
      project: "Commercial Production",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Music Artist",
      image: "./client-3.jpg",
      rating: 5,
      text: "The music video they created for my latest single was beyond what I imagined. The visual storytelling perfectly matched the song&apos;s emotion. True artists!",
      project: "Music Video",
    },
  ];
function I() {
  const x = l.useRef(null),
    o = b(x, { once: !0, margin: "-100px" }),
    [n, d] = l.useState(0),
    [h, m] = l.useState(0),
    p = () => {
      (m(1), d((s) => (s + 1) % c.length));
    },
    g = () => {
      (m(-1), d((s) => (s - 1 + c.length) % c.length));
    };
  l.useEffect(() => {
    const s = setInterval(p, 6e3);
    return () => clearInterval(s);
  }, []);
  const i = c[n],
    v = {
      enter: (s) => ({
        x: s > 0 ? 300 : -300,
        opacity: 0,
        rotateY: s > 0 ? 45 : -45,
      }),
      center: { x: 0, opacity: 1, rotateY: 0 },
      exit: (s) => ({
        x: s < 0 ? 300 : -300,
        opacity: 0,
        rotateY: s < 0 ? 45 : -45,
      }),
    };
  return e.jsxs("section", {
    "code-path": "src/sections/Testimonials.tsx:78:5",
    id: "testimonials",
    ref: x,
    className: "relative py-24 md:py-32 overflow-hidden",
    children: [
      e.jsx("div", {
        "code-path": "src/sections/Testimonials.tsx:84:7",
        className:
          "absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/30 to-dark-950",
      }),
      e.jsx("div", {
        "code-path": "src/sections/Testimonials.tsx:85:7",
        className:
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[200px]",
      }),
      e.jsx("div", {
        "code-path": "src/sections/Testimonials.tsx:87:7",
        className: "section-padding relative z-10",
        children: e.jsxs("div", {
          "code-path": "src/sections/Testimonials.tsx:88:9",
          className: "max-w-6xl mx-auto",
          children: [
            e.jsxs(a.div, {
              "code-path": "src/sections/Testimonials.tsx:90:11",
              initial: { opacity: 0, y: 30 },
              animate: o ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.8 },
              className: "text-center mb-16",
              children: [
                e.jsx(a.span, {
                  "code-path": "src/sections/Testimonials.tsx:96:13",
                  initial: { opacity: 0, scale: 0.9 },
                  animate: o ? { opacity: 1, scale: 1 } : {},
                  transition: { duration: 0.6 },
                  className:
                    "inline-block px-4 py-2 rounded-full glass-gold text-gold-400 text-sm font-medium mb-4",
                  children: "Testimonials",
                }),
                e.jsxs("h2", {
                  "code-path": "src/sections/Testimonials.tsx:104:13",
                  className: "heading-lg text-white mb-6",
                  children: [
                    "What Clients ",
                    e.jsx("span", {
                      "code-path": "src/sections/Testimonials.tsx:105:28",
                      className: "text-gradient-gold",
                      children: "Say About Me",
                    }),
                  ],
                }),
                e.jsx("p", {
                  "code-path": "src/sections/Testimonials.tsx:107:13",
                  className: "body-lg max-w-3xl mx-auto",
                  children:
                    "Don't just take my word for it. Here's what my clients have to say about working together.",
                }),
              ],
            }),
            e.jsxs(a.div, {
              "code-path": "src/sections/Testimonials.tsx:114:11",
              initial: { opacity: 0, y: 30 },
              animate: o ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.8, delay: 0.2 },
              className: "relative perspective-1000",
              children: [
                e.jsx("div", {
                  "code-path": "src/sections/Testimonials.tsx:120:13",
                  className:
                    "relative min-h-[400px] flex items-center justify-center",
                  children: e.jsx(j, {
                    "code-path": "src/sections/Testimonials.tsx:121:15",
                    mode: "wait",
                    custom: h,
                    children: e.jsx(
                      a.div,
                      {
                        "code-path": "src/sections/Testimonials.tsx:122:17",
                        custom: h,
                        variants: v,
                        initial: "enter",
                        animate: "center",
                        exit: "exit",
                        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                        className: "w-full max-w-4xl preserve-3d",
                        children: e.jsxs("div", {
                          "code-path": "src/sections/Testimonials.tsx:135:19",
                          className:
                            "relative bg-dark-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-dark-800",
                          children: [
                            e.jsx("div", {
                              "code-path":
                                "src/sections/Testimonials.tsx:137:21",
                              className:
                                "absolute -top-6 left-8 w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-glow",
                              children: e.jsx(k, {
                                "code-path":
                                  "src/sections/Testimonials.tsx:138:23",
                                className: "w-6 h-6 text-dark-950",
                              }),
                            }),
                            e.jsxs("div", {
                              "code-path":
                                "src/sections/Testimonials.tsx:141:21",
                              className:
                                "grid md:grid-cols-[auto,1fr] gap-8 items-start",
                              children: [
                                e.jsx("div", {
                                  "code-path":
                                    "src/sections/Testimonials.tsx:143:23",
                                  className: "flex flex-col items-center",
                                  children: e.jsxs("div", {
                                    "code-path":
                                      "src/sections/Testimonials.tsx:144:25",
                                    className: "relative",
                                    children: [
                                      e.jsx("div", {
                                        "code-path":
                                          "src/sections/Testimonials.tsx:145:27",
                                        className:
                                          "w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-gold-500/30",
                                        children: e.jsx("img", {
                                          "code-path":
                                            "src/sections/Testimonials.tsx:146:29",
                                          src: i.image,
                                          alt: i.name,
                                          className:
                                            "w-full h-full object-cover",
                                        }),
                                      }),
                                      e.jsx("div", {
                                        "code-path":
                                          "src/sections/Testimonials.tsx:152:27",
                                        className:
                                          "absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center",
                                        children: e.jsx(u, {
                                          "code-path":
                                            "src/sections/Testimonials.tsx:153:29",
                                          className: "w-4 h-4 text-dark-950",
                                          fill: "currentColor",
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                e.jsxs("div", {
                                  "code-path":
                                    "src/sections/Testimonials.tsx:159:23",
                                  children: [
                                    e.jsx("div", {
                                      "code-path":
                                        "src/sections/Testimonials.tsx:161:25",
                                      className: "flex gap-1 mb-4",
                                      children: Array.from({
                                        length: i.rating,
                                      }).map((s, t) =>
                                        e.jsx(
                                          u,
                                          {
                                            "code-path":
                                              "src/sections/Testimonials.tsx:163:29",
                                            className: "w-5 h-5 text-gold-400",
                                            fill: "currentColor",
                                          },
                                          t,
                                        ),
                                      ),
                                    }),
                                    e.jsxs("blockquote", {
                                      "code-path":
                                        "src/sections/Testimonials.tsx:168:25",
                                      className:
                                        "text-lg md:text-xl text-white leading-relaxed mb-6",
                                      children: ["“", i.text, "”"],
                                    }),
                                    e.jsxs("div", {
                                      "code-path":
                                        "src/sections/Testimonials.tsx:173:25",
                                      className:
                                        "flex flex-wrap items-center gap-4",
                                      children: [
                                        e.jsxs("div", {
                                          "code-path":
                                            "src/sections/Testimonials.tsx:174:27",
                                          children: [
                                            e.jsx("div", {
                                              "code-path":
                                                "src/sections/Testimonials.tsx:175:29",
                                              className:
                                                "text-white font-semibold",
                                              children: i.name,
                                            }),
                                            e.jsx("div", {
                                              "code-path":
                                                "src/sections/Testimonials.tsx:178:29",
                                              className:
                                                "text-dark-400 text-sm",
                                              children: i.role,
                                            }),
                                          ],
                                        }),
                                        e.jsx("div", {
                                          "code-path":
                                            "src/sections/Testimonials.tsx:182:27",
                                          className:
                                            "hidden md:block w-px h-8 bg-dark-700",
                                        }),
                                        e.jsx("div", {
                                          "code-path":
                                            "src/sections/Testimonials.tsx:183:27",
                                          className:
                                            "px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 text-sm",
                                          children: i.project,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      n,
                    ),
                  }),
                }),
                e.jsxs("div", {
                  "code-path": "src/sections/Testimonials.tsx:195:13",
                  className: "flex items-center justify-center gap-4 mt-8",
                  children: [
                    e.jsx(a.button, {
                      "code-path": "src/sections/Testimonials.tsx:196:15",
                      onClick: g,
                      whileHover: { scale: 1.1 },
                      whileTap: { scale: 0.9 },
                      className:
                        "w-12 h-12 rounded-full bg-dark-800 flex items-center justify-center hover:bg-gold-500/20 hover:text-gold-400 transition-colors",
                      children: e.jsx(y, {
                        "code-path": "src/sections/Testimonials.tsx:202:17",
                        className: "w-6 h-6",
                      }),
                    }),
                    e.jsx("div", {
                      "code-path": "src/sections/Testimonials.tsx:206:15",
                      className: "flex gap-2",
                      children: c.map((s, t) =>
                        e.jsx(
                          "button",
                          {
                            "code-path": "src/sections/Testimonials.tsx:208:19",
                            onClick: () => {
                              (m(t > n ? 1 : -1), d(t));
                            },
                            className: `w-3 h-3 rounded-full transition-all duration-300 ${t === n ? "bg-gold-500 w-8" : "bg-dark-700 hover:bg-dark-600"}`,
                          },
                          t,
                        ),
                      ),
                    }),
                    e.jsx(a.button, {
                      "code-path": "src/sections/Testimonials.tsx:223:15",
                      onClick: p,
                      whileHover: { scale: 1.1 },
                      whileTap: { scale: 0.9 },
                      className:
                        "w-12 h-12 rounded-full bg-dark-800 flex items-center justify-center hover:bg-gold-500/20 hover:text-gold-400 transition-colors",
                      children: e.jsx(w, {
                        "code-path": "src/sections/Testimonials.tsx:229:17",
                        className: "w-6 h-6",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsx(a.div, {
              "code-path": "src/sections/Testimonials.tsx:235:11",
              initial: { opacity: 0, y: 30 },
              animate: o ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.8, delay: 0.4 },
              className: "mt-20 grid grid-cols-2 md:grid-cols-4 gap-6",
              children: [
                { value: "500+", label: "Happy Clients" },
                { value: "98%", label: "Satisfaction Rate" },
                { value: "50+", label: "Awards Won" },
                { value: "4.9", label: "Average Rating" },
              ].map((s, t) =>
                e.jsxs(
                  a.div,
                  {
                    "code-path": "src/sections/Testimonials.tsx:247:15",
                    initial: { opacity: 0, scale: 0.9 },
                    animate: o ? { opacity: 1, scale: 1 } : {},
                    transition: { duration: 0.5, delay: 0.5 + t * 0.1 },
                    className:
                      "text-center p-6 rounded-2xl bg-dark-900/50 border border-dark-800",
                    children: [
                      e.jsx("div", {
                        "code-path": "src/sections/Testimonials.tsx:254:17",
                        className:
                          "text-3xl md:text-4xl font-bold text-gradient-gold mb-2",
                        children: s.value,
                      }),
                      e.jsx("div", {
                        "code-path": "src/sections/Testimonials.tsx:257:17",
                        className: "text-dark-400 text-sm",
                        children: s.label,
                      }),
                    ],
                  },
                  s.label,
                ),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
export { I as default };
