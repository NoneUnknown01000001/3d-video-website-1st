import { r as l, j as e, m as t, A as h } from "./index-BAmnnPZt.js";
import { u as m } from "./use-in-view-BmhCMVrp.js";
import { H as x } from "./heart-muwe7rDN.js";
import { c as i } from "./createLucideIcon-DUsiWVv4.js";
import { A as d } from "./arrow-right-CcCdBzaC.js";
const v = [
    ["path", { d: "M10 12h4", key: "a56b0p" }],
    ["path", { d: "M10 8h4", key: "1sr2af" }],
    ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
    [
      "path",
      {
        d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
        key: "secmi2",
      },
    ],
    ["path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" }],
  ],
  u = i("building-2", v);
const g = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  y = i("check", g);
const f = [
    [
      "path",
      {
        d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",
        key: "1tn4o7",
      },
    ],
    ["path", { d: "m6.2 5.3 3.1 3.9", key: "iuk76l" }],
    ["path", { d: "m12.4 3.4 3.1 4", key: "6hsd6n" }],
    ["path", { d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z", key: "ltgou9" }],
  ],
  j = i("clapperboard", f);
const b = [
    [
      "path",
      {
        d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
        key: "q8bfy3",
      },
    ],
    [
      "path",
      {
        d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",
        key: "1853fq",
      },
    ],
    ["path", { d: "M8 6v8", key: "15ugcq" }],
  ],
  S = i("megaphone", b);
const N = [
    ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
    ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
    ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
  ],
  k = i("music", N);
const w = [
    [
      "path",
      {
        d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
        key: "1v9wt8",
      },
    ],
  ],
  M = i("plane", w),
  C = [
    {
      icon: x,
      title: "Wedding Films",
      description:
        "Capture the magic of your special day with cinematic wedding videography that tells your unique love story.",
      features: [
        "Full Day Coverage",
        "Highlight Reel",
        "Drone Footage",
        "Same-Day Edit",
      ],
      price: "From $2,500",
      image: "/project-wedding.jpg",
    },
    {
      icon: u,
      title: "Corporate Videos",
      description:
        "Professional business videos that elevate your brand and communicate your message effectively.",
      features: [
        "Brand Stories",
        "Product Demos",
        "Training Videos",
        "Event Coverage",
      ],
      price: "From $1,800",
      image: "/project-corporate.jpg",
    },
    {
      icon: k,
      title: "Music Videos",
      description:
        "Creative and visually stunning music videos that bring your artistic vision to life.",
      features: [
        "Concept Development",
        "Location Scouting",
        "4K Production",
        "Post-Production",
      ],
      price: "From $3,500",
      image: "/project-music.jpg",
    },
    {
      icon: M,
      title: "Travel Documentary",
      description:
        "Immersive travel films that capture the essence of destinations and cultures.",
      features: [
        "Adventure Filming",
        "Cultural Stories",
        "Aerial Shots",
        "Narration",
      ],
      price: "From $4,000",
      image: "/project-travel.jpg",
    },
    {
      icon: j,
      title: "Commercial Production",
      description:
        "High-impact commercial videos that drive engagement and conversions for your business.",
      features: [
        "Script Writing",
        "Storyboarding",
        "Professional Cast",
        "Multi-Platform",
      ],
      price: "From $5,000",
      image: "/project-commercial.jpg",
    },
    {
      icon: S,
      title: "Fashion & Lifestyle",
      description:
        "Stylish and trendy videos that showcase fashion, beauty, and lifestyle brands.",
      features: [
        "Lookbook Videos",
        "Behind Scenes",
        "Model Direction",
        "Social Media",
      ],
      price: "From $2,200",
      image: "/project-fashion.jpg",
    },
  ];
function A() {
  const o = l.useRef(null),
    c = m(o, { once: !0, margin: "-100px" }),
    [p, r] = l.useState(null);
  return e.jsxs("section", {
    "code-path": "src/sections/Services.tsx:71:5",
    id: "services",
    ref: o,
    className: "relative py-24 md:py-32 overflow-hidden",
    children: [
      e.jsx("div", {
        "code-path": "src/sections/Services.tsx:77:7",
        className:
          "absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950",
      }),
      e.jsx("div", {
        "code-path": "src/sections/Services.tsx:78:7",
        className:
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[200px]",
      }),
      e.jsx("div", {
        "code-path": "src/sections/Services.tsx:80:7",
        className: "section-padding relative z-10",
        children: e.jsxs("div", {
          "code-path": "src/sections/Services.tsx:81:9",
          className: "max-w-7xl mx-auto",
          children: [
            e.jsxs(t.div, {
              "code-path": "src/sections/Services.tsx:83:11",
              initial: { opacity: 0, y: 30 },
              animate: c ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.8 },
              className: "text-center mb-16 md:mb-20",
              children: [
                e.jsx(t.span, {
                  "code-path": "src/sections/Services.tsx:89:13",
                  initial: { opacity: 0, scale: 0.9 },
                  animate: c ? { opacity: 1, scale: 1 } : {},
                  transition: { duration: 0.6 },
                  className:
                    "inline-block px-4 py-2 rounded-full glass-gold text-gold-400 text-sm font-medium mb-4",
                  children: "Services",
                }),
                e.jsxs("h2", {
                  "code-path": "src/sections/Services.tsx:97:13",
                  className: "heading-lg text-white mb-6",
                  children: [
                    "Professional ",
                    e.jsx("span", {
                      "code-path": "src/sections/Services.tsx:98:28",
                      className: "text-gradient-gold",
                      children: "Videography Services",
                    }),
                  ],
                }),
                e.jsx("p", {
                  "code-path": "src/sections/Services.tsx:100:13",
                  className: "body-lg max-w-3xl mx-auto",
                  children:
                    "From concept to final cut, I offer comprehensive videography services tailored to your unique needs and vision.",
                }),
              ],
            }),
            e.jsx("div", {
              "code-path": "src/sections/Services.tsx:107:11",
              className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
              children: C.map((s, a) =>
                e.jsx(
                  t.div,
                  {
                    "code-path": "src/sections/Services.tsx:109:15",
                    initial: { opacity: 0, y: 30 },
                    animate: c ? { opacity: 1, y: 0 } : {},
                    transition: { duration: 0.6, delay: a * 0.1 },
                    onMouseEnter: () => r(a),
                    onMouseLeave: () => r(null),
                    className: "group relative",
                    children: e.jsxs("div", {
                      "code-path": "src/sections/Services.tsx:118:17",
                      className:
                        "relative h-full rounded-2xl overflow-hidden bg-dark-900 border border-dark-800 hover:border-gold-500/50 transition-all duration-500",
                      children: [
                        e.jsxs("div", {
                          "code-path": "src/sections/Services.tsx:120:19",
                          className: "absolute inset-0",
                          children: [
                            e.jsx("img", {
                              "code-path": "src/sections/Services.tsx:121:21",
                              src: s.image,
                              alt: s.title,
                              className:
                                "w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500",
                            }),
                            e.jsx("div", {
                              "code-path": "src/sections/Services.tsx:126:21",
                              className:
                                "absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/90 to-dark-950/70",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          "code-path": "src/sections/Services.tsx:130:19",
                          className: "relative p-6 flex flex-col h-full",
                          children: [
                            e.jsx("div", {
                              "code-path": "src/sections/Services.tsx:132:21",
                              className:
                                "w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 shadow-glow",
                              children: e.jsx(s.icon, {
                                "code-path": "src/sections/Services.tsx:133:23",
                                className: "w-7 h-7 text-dark-950",
                              }),
                            }),
                            e.jsxs("div", {
                              "code-path": "src/sections/Services.tsx:137:21",
                              className:
                                "flex items-start justify-between mb-3",
                              children: [
                                e.jsx("h3", {
                                  "code-path":
                                    "src/sections/Services.tsx:138:23",
                                  className: "text-xl font-bold text-white",
                                  children: s.title,
                                }),
                                e.jsx("span", {
                                  "code-path":
                                    "src/sections/Services.tsx:141:23",
                                  className:
                                    "text-gold-400 font-semibold text-sm",
                                  children: s.price,
                                }),
                              ],
                            }),
                            e.jsx("p", {
                              "code-path": "src/sections/Services.tsx:147:21",
                              className: "text-dark-400 text-sm mb-4 flex-grow",
                              children: s.description,
                            }),
                            e.jsx("div", {
                              "code-path": "src/sections/Services.tsx:152:21",
                              className: "space-y-2 mb-6",
                              children: s.features.map((n) =>
                                e.jsxs(
                                  "div",
                                  {
                                    "code-path":
                                      "src/sections/Services.tsx:154:25",
                                    className: "flex items-center gap-2",
                                    children: [
                                      e.jsx(y, {
                                        "code-path":
                                          "src/sections/Services.tsx:155:27",
                                        className:
                                          "w-4 h-4 text-gold-400 flex-shrink-0",
                                      }),
                                      e.jsx("span", {
                                        "code-path":
                                          "src/sections/Services.tsx:156:27",
                                        className: "text-dark-300 text-sm",
                                        children: n,
                                      }),
                                    ],
                                  },
                                  n,
                                ),
                              ),
                            }),
                            e.jsxs(t.button, {
                              "code-path": "src/sections/Services.tsx:162:21",
                              whileHover: { scale: 1.02 },
                              whileTap: { scale: 0.98 },
                              className:
                                "w-full py-3 rounded-xl bg-dark-800 hover:bg-gold-500/20 border border-dark-700 hover:border-gold-500/50 text-white hover:text-gold-400 transition-all duration-300 flex items-center justify-center gap-2 group/btn",
                              children: [
                                "Learn More",
                                e.jsx(d, {
                                  "code-path":
                                    "src/sections/Services.tsx:168:23",
                                  className:
                                    "w-4 h-4 group-hover/btn:translate-x-1 transition-transform",
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsx(h, {
                          "code-path": "src/sections/Services.tsx:173:19",
                          children:
                            p === a &&
                            e.jsx(t.div, {
                              "code-path": "src/sections/Services.tsx:175:23",
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              className: "absolute inset-0 pointer-events-none",
                              children: e.jsx("div", {
                                "code-path": "src/sections/Services.tsx:181:25",
                                className:
                                  "absolute inset-0 bg-gradient-to-t from-gold-500/10 to-transparent",
                              }),
                            }),
                        }),
                      ],
                    }),
                  },
                  s.title,
                ),
              ),
            }),
            e.jsxs(t.div, {
              "code-path": "src/sections/Services.tsx:191:11",
              initial: { opacity: 0, y: 30 },
              animate: c ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.8, delay: 0.6 },
              className: "mt-16 text-center",
              children: [
                e.jsx("p", {
                  "code-path": "src/sections/Services.tsx:197:13",
                  className: "text-dark-400 mb-6",
                  children:
                    "Need a custom package? Let's discuss your project requirements.",
                }),
                e.jsxs(t.a, {
                  "code-path": "src/sections/Services.tsx:200:13",
                  href: "#contact",
                  onClick: (s) => {
                    (s.preventDefault(),
                      document
                        .querySelector("#contact")
                        ?.scrollIntoView({ behavior: "smooth" }));
                  },
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  className: "btn-primary inline-flex items-center gap-2",
                  children: [
                    "Get Custom Quote",
                    e.jsx(d, {
                      "code-path": "src/sections/Services.tsx:211:15",
                      className: "w-5 h-5",
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
export { A as default };
