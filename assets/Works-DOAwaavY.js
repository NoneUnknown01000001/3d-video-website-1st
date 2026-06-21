import { r as c, j as e, m as t, A as h } from "./index-BAmnnPZt.js";
import { u as v } from "./use-in-view-BmhCMVrp.js";
import { P as m } from "./play-D7UAc74Y.js";
import { c as r } from "./createLucideIcon-DUsiWVv4.js";
import { X as j } from "./x-DBVKxTPC.js";
const f = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
    ],
    ["path", { d: "M3 10h18", key: "8toen8" }],
  ],
  W = r("calendar", f);
const b = [
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  p = r("clock", b);
const N = [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp",
      },
    ],
  ],
  w = r("external-link", N);
const C = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ],
  M = r("user", C),
  u = [
    {
      id: 1,
      title: "Eternal Love - Wedding Film",
      category: "Wedding",
      image: "/project-wedding.jpg",
      videoUrl: "#",
      duration: "5:32",
      date: "Dec 2024",
      client: "Sarah & Michael",
      description:
        "A beautiful destination wedding captured in the mountains with stunning golden hour shots.",
    },
    {
      id: 2,
      title: "Luxury Watch Commercial",
      category: "Commercial",
      image: "/project-commercial.jpg",
      videoUrl: "#",
      duration: "0:45",
      date: "Nov 2024",
      client: "Chronos Watches",
      description:
        "High-end product commercial featuring cinematic lighting and macro shots.",
    },
    {
      id: 3,
      title: "Summer Vibes - Music Video",
      category: "Music",
      image: "/project-music.jpg",
      videoUrl: "#",
      duration: "3:45",
      date: "Oct 2024",
      client: "The Sunset Band",
      description:
        "Energetic music video with dynamic camera movements and vibrant color grading.",
    },
    {
      id: 4,
      title: "Voices of the Valley",
      category: "Documentary",
      image: "/project-documentary.jpg",
      videoUrl: "#",
      duration: "15:20",
      date: "Sep 2024",
      client: "Documentary Channel",
      description:
        "An intimate documentary exploring the lives of artisans in rural communities.",
    },
    {
      id: 5,
      title: "Tech Summit 2024",
      category: "Corporate",
      image: "/project-corporate.jpg",
      videoUrl: "#",
      duration: "2:15",
      date: "Aug 2024",
      client: "TechCorp Inc.",
      description:
        "Event coverage of the annual tech summit with keynote presentations.",
    },
    {
      id: 6,
      title: "Golden Hour Collection",
      category: "Fashion",
      image: "/project-fashion.jpg",
      videoUrl: "#",
      duration: "1:30",
      date: "Jul 2024",
      client: "Luxe Fashion",
      description:
        "Fashion lookbook video with elegant movement and artistic composition.",
    },
  ],
  P = [
    "All",
    "Wedding",
    "Commercial",
    "Music",
    "Documentary",
    "Corporate",
    "Fashion",
  ];
function _() {
  const d = c.useRef(null),
    a = v(d, { once: !0, margin: "-100px" }),
    [n, g] = c.useState("All"),
    [o, l] = c.useState(null),
    [i, x] = c.useState(null),
    k = n === "All" ? u : u.filter((s) => s.category === n);
  return e.jsxs("section", {
    "code-path": "src/sections/Works.tsx:88:5",
    id: "works",
    ref: d,
    className: "relative py-24 md:py-32 overflow-hidden",
    children: [
      e.jsx("div", {
        "code-path": "src/sections/Works.tsx:94:7",
        className: "absolute inset-0 bg-dark-950",
      }),
      e.jsx("div", {
        "code-path": "src/sections/Works.tsx:95:7",
        className:
          "absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[200px]",
      }),
      e.jsx("div", {
        "code-path": "src/sections/Works.tsx:97:7",
        className: "section-padding relative z-10",
        children: e.jsxs("div", {
          "code-path": "src/sections/Works.tsx:98:9",
          className: "max-w-7xl mx-auto",
          children: [
            e.jsxs(t.div, {
              "code-path": "src/sections/Works.tsx:100:11",
              initial: { opacity: 0, y: 30 },
              animate: a ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.8 },
              className: "text-center mb-12",
              children: [
                e.jsx(t.span, {
                  "code-path": "src/sections/Works.tsx:106:13",
                  initial: { opacity: 0, scale: 0.9 },
                  animate: a ? { opacity: 1, scale: 1 } : {},
                  transition: { duration: 0.6 },
                  className:
                    "inline-block px-4 py-2 rounded-full glass-gold text-gold-400 text-sm font-medium mb-4",
                  children: "Portfolio",
                }),
                e.jsxs("h2", {
                  "code-path": "src/sections/Works.tsx:114:13",
                  className: "heading-lg text-white mb-6",
                  children: [
                    "Featured ",
                    e.jsx("span", {
                      "code-path": "src/sections/Works.tsx:115:24",
                      className: "text-gradient-gold",
                      children: "Projects",
                    }),
                  ],
                }),
                e.jsx("p", {
                  "code-path": "src/sections/Works.tsx:117:13",
                  className: "body-lg max-w-3xl mx-auto",
                  children:
                    "Explore my latest work across various genres and styles. Each project is crafted with passion and attention to detail.",
                }),
              ],
            }),
            e.jsx(t.div, {
              "code-path": "src/sections/Works.tsx:124:11",
              initial: { opacity: 0, y: 20 },
              animate: a ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.6, delay: 0.2 },
              className: "flex flex-wrap justify-center gap-3 mb-12",
              children: P.map((s) =>
                e.jsx(
                  t.button,
                  {
                    "code-path": "src/sections/Works.tsx:131:15",
                    onClick: () => g(s),
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    className: `px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${n === s ? "bg-gradient-gold text-dark-950 shadow-glow" : "bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white"}`,
                    children: s,
                  },
                  s,
                ),
              ),
            }),
            e.jsx(t.div, {
              "code-path": "src/sections/Works.tsx:148:11",
              layout: !0,
              className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
              children: e.jsx(h, {
                "code-path": "src/sections/Works.tsx:152:13",
                mode: "popLayout",
                children: k.map((s, y) =>
                  e.jsx(
                    t.div,
                    {
                      "code-path": "src/sections/Works.tsx:154:17",
                      layout: !0,
                      initial: { opacity: 0, scale: 0.9 },
                      animate: { opacity: 1, scale: 1 },
                      exit: { opacity: 0, scale: 0.9 },
                      transition: { duration: 0.5, delay: y * 0.1 },
                      onMouseEnter: () => x(s.id),
                      onMouseLeave: () => x(null),
                      onClick: () => l(s),
                      className: "group cursor-pointer",
                      children: e.jsxs("div", {
                        "code-path": "src/sections/Works.tsx:166:19",
                        className:
                          "relative aspect-video rounded-2xl overflow-hidden bg-dark-900 border border-dark-800 hover:border-gold-500/50 transition-all duration-500",
                        children: [
                          e.jsx("img", {
                            "code-path": "src/sections/Works.tsx:168:21",
                            src: s.image,
                            alt: s.title,
                            className:
                              "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                          }),
                          e.jsx("div", {
                            "code-path": "src/sections/Works.tsx:175:21",
                            className:
                              "absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500",
                          }),
                          e.jsx(t.div, {
                            "code-path": "src/sections/Works.tsx:178:21",
                            initial: { opacity: 0, scale: 0.8 },
                            animate: {
                              opacity: i === s.id ? 1 : 0,
                              scale: i === s.id ? 1 : 0.8,
                            },
                            className:
                              "absolute inset-0 flex items-center justify-center",
                            children: e.jsx("div", {
                              "code-path": "src/sections/Works.tsx:186:23",
                              className:
                                "w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center shadow-glow-lg",
                              children: e.jsx(m, {
                                "code-path": "src/sections/Works.tsx:187:25",
                                className: "w-7 h-7 text-dark-950 ml-1",
                                fill: "currentColor",
                              }),
                            }),
                          }),
                          e.jsxs("div", {
                            "code-path": "src/sections/Works.tsx:192:21",
                            className: "absolute bottom-0 left-0 right-0 p-5",
                            children: [
                              e.jsxs(t.div, {
                                "code-path": "src/sections/Works.tsx:193:23",
                                initial: { y: 10, opacity: 0 },
                                animate: {
                                  y: i === s.id ? 0 : 10,
                                  opacity: i === s.id ? 1 : 0,
                                },
                                transition: { duration: 0.3 },
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                  e.jsx("span", {
                                    "code-path":
                                      "src/sections/Works.tsx:202:25",
                                    className:
                                      "px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-medium",
                                    children: s.category,
                                  }),
                                  e.jsxs("span", {
                                    "code-path":
                                      "src/sections/Works.tsx:205:25",
                                    className:
                                      "flex items-center gap-1 text-dark-400 text-xs",
                                    children: [
                                      e.jsx(p, {
                                        "code-path":
                                          "src/sections/Works.tsx:206:27",
                                        className: "w-3 h-3",
                                      }),
                                      s.duration,
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx("h3", {
                                "code-path": "src/sections/Works.tsx:210:23",
                                className:
                                  "text-lg font-semibold text-white group-hover:text-gold-400 transition-colors",
                                children: s.title,
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            "code-path": "src/sections/Works.tsx:216:21",
                            className:
                              "absolute inset-0 border-2 border-gold-500/0 group-hover:border-gold-500/30 rounded-2xl transition-all duration-500",
                          }),
                        ],
                      }),
                    },
                    s.id,
                  ),
                ),
              }),
            }),
            e.jsx(t.div, {
              "code-path": "src/sections/Works.tsx:224:11",
              initial: { opacity: 0, y: 20 },
              animate: a ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.6, delay: 0.8 },
              className: "mt-12 text-center",
              children: e.jsxs(t.button, {
                "code-path": "src/sections/Works.tsx:230:13",
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                className: "btn-outline inline-flex items-center gap-2",
                children: [
                  "View All Projects",
                  e.jsx(w, {
                    "code-path": "src/sections/Works.tsx:236:15",
                    className: "w-5 h-5",
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      e.jsx(h, {
        "code-path": "src/sections/Works.tsx:243:7",
        children:
          o &&
          e.jsxs(t.div, {
            "code-path": "src/sections/Works.tsx:245:11",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            className:
              "fixed inset-0 z-50 flex items-center justify-center p-4",
            onClick: () => l(null),
            children: [
              e.jsx("div", {
                "code-path": "src/sections/Works.tsx:252:13",
                className: "absolute inset-0 bg-dark-950/95 backdrop-blur-xl",
              }),
              e.jsxs(t.div, {
                "code-path": "src/sections/Works.tsx:253:13",
                initial: { opacity: 0, scale: 0.9, y: 50 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.9, y: 50 },
                onClick: (s) => s.stopPropagation(),
                className:
                  "relative w-full max-w-4xl bg-dark-900 rounded-3xl overflow-hidden border border-dark-800",
                children: [
                  e.jsx("button", {
                    "code-path": "src/sections/Works.tsx:261:15",
                    onClick: () => l(null),
                    className:
                      "absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center hover:bg-dark-700 transition-colors",
                    children: e.jsx(j, {
                      "code-path": "src/sections/Works.tsx:265:17",
                      className: "w-5 h-5 text-white",
                    }),
                  }),
                  e.jsxs("div", {
                    "code-path": "src/sections/Works.tsx:269:15",
                    className: "relative aspect-video",
                    children: [
                      e.jsx("img", {
                        "code-path": "src/sections/Works.tsx:270:17",
                        src: o.image,
                        alt: o.title,
                        className: "w-full h-full object-cover",
                      }),
                      e.jsx("div", {
                        "code-path": "src/sections/Works.tsx:275:17",
                        className:
                          "absolute inset-0 bg-dark-950/40 flex items-center justify-center",
                        children: e.jsx(t.button, {
                          "code-path": "src/sections/Works.tsx:276:19",
                          whileHover: { scale: 1.1 },
                          whileTap: { scale: 0.9 },
                          className:
                            "w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center shadow-glow-lg",
                          children: e.jsx(m, {
                            "code-path": "src/sections/Works.tsx:281:21",
                            className: "w-8 h-8 text-dark-950 ml-1",
                            fill: "currentColor",
                          }),
                        }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    "code-path": "src/sections/Works.tsx:287:15",
                    className: "p-8",
                    children: [
                      e.jsxs("div", {
                        "code-path": "src/sections/Works.tsx:288:17",
                        className: "flex flex-wrap items-center gap-3 mb-4",
                        children: [
                          e.jsx("span", {
                            "code-path": "src/sections/Works.tsx:289:19",
                            className:
                              "px-4 py-1 rounded-full bg-gold-500/20 text-gold-400 text-sm font-medium",
                            children: o.category,
                          }),
                          e.jsxs("span", {
                            "code-path": "src/sections/Works.tsx:292:19",
                            className:
                              "flex items-center gap-1 text-dark-400 text-sm",
                            children: [
                              e.jsx(p, {
                                "code-path": "src/sections/Works.tsx:293:21",
                                className: "w-4 h-4",
                              }),
                              o.duration,
                            ],
                          }),
                          e.jsxs("span", {
                            "code-path": "src/sections/Works.tsx:296:19",
                            className:
                              "flex items-center gap-1 text-dark-400 text-sm",
                            children: [
                              e.jsx(W, {
                                "code-path": "src/sections/Works.tsx:297:21",
                                className: "w-4 h-4",
                              }),
                              o.date,
                            ],
                          }),
                        ],
                      }),
                      e.jsx("h3", {
                        "code-path": "src/sections/Works.tsx:302:17",
                        className:
                          "text-2xl md:text-3xl font-bold text-white mb-4",
                        children: o.title,
                      }),
                      e.jsx("p", {
                        "code-path": "src/sections/Works.tsx:306:17",
                        className: "text-dark-400 mb-6",
                        children: o.description,
                      }),
                      e.jsxs("div", {
                        "code-path": "src/sections/Works.tsx:310:17",
                        className: "flex items-center gap-2 text-sm",
                        children: [
                          e.jsx(M, {
                            "code-path": "src/sections/Works.tsx:311:19",
                            className: "w-4 h-4 text-gold-400",
                          }),
                          e.jsx("span", {
                            "code-path": "src/sections/Works.tsx:312:19",
                            className: "text-dark-300",
                            children: "Client:",
                          }),
                          e.jsx("span", {
                            "code-path": "src/sections/Works.tsx:313:19",
                            className: "text-white",
                            children: o.client,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
      }),
    ],
  });
}
export { _ as default };
