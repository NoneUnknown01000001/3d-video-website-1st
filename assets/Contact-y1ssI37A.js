import { r, j as e, m as a } from "./index-BAmnnPZt.js";
import { u as g } from "./use-in-view-BmhCMVrp.js";
import { c as s } from "./createLucideIcon-DUsiWVv4.js";
const b = [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ],
  f = s("circle-check-big", b);
const y = [
    [
      "rect",
      {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        key: "2e1cvw",
      },
    ],
    [
      "path",
      { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
    ],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
  ],
  j = s("instagram", y);
const C = [
    [
      "path",
      {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        key: "c2jq9f",
      },
    ],
    ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
    ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
  ],
  v = s("linkedin", C);
const k = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  N = s("loader-circle", k);
const w = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  _ = s("mail", w);
const M = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  S = s("map-pin", M);
const z = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  I = s("phone", z);
const L = [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3",
      },
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
  ],
  T = s("send", L);
const A = [
    [
      "path",
      {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        key: "pff0z6",
      },
    ],
  ],
  $ = s("twitter", A);
const q = [
    [
      "path",
      {
        d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
        key: "1q2vi4",
      },
    ],
    ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }],
  ],
  F = s("youtube", q),
  P = [
    {
      icon: _,
      label: "Email",
      value: "hello@videaste.com",
      href: "mailto:hello@videaste.com",
    },
    {
      icon: I,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    { icon: S, label: "Location", value: "Los Angeles, California", href: "#" },
  ],
  D = [
    { icon: j, href: "#", label: "Instagram" },
    { icon: F, href: "#", label: "YouTube" },
    { icon: v, href: "#", label: "LinkedIn" },
    { icon: $, href: "#", label: "Twitter" },
  ];
function H() {
  const d = r.useRef(null),
    c = g(d, { once: !0, margin: "-100px" }),
    [h, x] = r.useState(!1),
    [l, m] = r.useState(!1),
    [n, p] = r.useState({ name: "", email: "", subject: "", message: "" }),
    u = async (t) => {
      (t.preventDefault(),
        x(!0),
        await new Promise((o) => setTimeout(o, 2e3)),
        x(!1),
        m(!0),
        p({ name: "", email: "", subject: "", message: "" }),
        setTimeout(() => m(!1), 5e3));
    },
    i = (t) => {
      p((o) => ({ ...o, [t.target.name]: t.target.value }));
    };
  return e.jsxs("section", {
    "code-path": "src/sections/Contact.tsx:79:5",
    id: "contact",
    ref: d,
    className: "relative py-24 md:py-32 overflow-hidden",
    children: [
      e.jsx("div", {
        "code-path": "src/sections/Contact.tsx:85:7",
        className: "absolute inset-0 bg-dark-950",
      }),
      e.jsx("div", {
        "code-path": "src/sections/Contact.tsx:86:7",
        className:
          "absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[200px]",
      }),
      e.jsx("div", {
        "code-path": "src/sections/Contact.tsx:88:7",
        className: "section-padding relative z-10",
        children: e.jsxs("div", {
          "code-path": "src/sections/Contact.tsx:89:9",
          className: "max-w-7xl mx-auto",
          children: [
            e.jsxs(a.div, {
              "code-path": "src/sections/Contact.tsx:91:11",
              initial: { opacity: 0, y: 30 },
              animate: c ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.8 },
              className: "text-center mb-16",
              children: [
                e.jsx(a.span, {
                  "code-path": "src/sections/Contact.tsx:97:13",
                  initial: { opacity: 0, scale: 0.9 },
                  animate: c ? { opacity: 1, scale: 1 } : {},
                  transition: { duration: 0.6 },
                  className:
                    "inline-block px-4 py-2 rounded-full glass-gold text-gold-400 text-sm font-medium mb-4",
                  children: "Get In Touch",
                }),
                e.jsxs("h2", {
                  "code-path": "src/sections/Contact.tsx:105:13",
                  className: "heading-lg text-white mb-6",
                  children: [
                    "Let's Create Something ",
                    e.jsx("span", {
                      "code-path": "src/sections/Contact.tsx:106:43",
                      className: "text-gradient-gold",
                      children: "Amazing Together",
                    }),
                  ],
                }),
                e.jsx("p", {
                  "code-path": "src/sections/Contact.tsx:108:13",
                  className: "body-lg max-w-3xl mx-auto",
                  children:
                    "Have a project in mind? I'd love to hear about it. Send me a message and let's bring your vision to life.",
                }),
              ],
            }),
            e.jsxs("div", {
              "code-path": "src/sections/Contact.tsx:114:11",
              className: "grid lg:grid-cols-[1fr,1.5fr] gap-12",
              children: [
                e.jsxs(a.div, {
                  "code-path": "src/sections/Contact.tsx:116:13",
                  initial: { opacity: 0, x: -30 },
                  animate: c ? { opacity: 1, x: 0 } : {},
                  transition: { duration: 0.8, delay: 0.2 },
                  children: [
                    e.jsx("div", {
                      "code-path": "src/sections/Contact.tsx:121:15",
                      className: "space-y-6 mb-10",
                      children: P.map((t, o) =>
                        e.jsxs(
                          a.a,
                          {
                            "code-path": "src/sections/Contact.tsx:123:19",
                            href: t.href,
                            initial: { opacity: 0, x: -20 },
                            animate: c ? { opacity: 1, x: 0 } : {},
                            transition: { duration: 0.5, delay: 0.3 + o * 0.1 },
                            className:
                              "flex items-center gap-4 p-4 rounded-xl bg-dark-900/50 border border-dark-800 hover:border-gold-500/50 transition-all duration-300 group",
                            children: [
                              e.jsx("div", {
                                "code-path": "src/sections/Contact.tsx:131:21",
                                className:
                                  "w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors",
                                children: e.jsx(t.icon, {
                                  "code-path":
                                    "src/sections/Contact.tsx:132:23",
                                  className: "w-5 h-5 text-gold-400",
                                }),
                              }),
                              e.jsxs("div", {
                                "code-path": "src/sections/Contact.tsx:134:21",
                                children: [
                                  e.jsx("div", {
                                    "code-path":
                                      "src/sections/Contact.tsx:135:23",
                                    className: "text-dark-400 text-sm",
                                    children: t.label,
                                  }),
                                  e.jsx("div", {
                                    "code-path":
                                      "src/sections/Contact.tsx:136:23",
                                    className: "text-white font-medium",
                                    children: t.value,
                                  }),
                                ],
                              }),
                            ],
                          },
                          t.label,
                        ),
                      ),
                    }),
                    e.jsxs("div", {
                      "code-path": "src/sections/Contact.tsx:143:15",
                      children: [
                        e.jsx("h3", {
                          "code-path": "src/sections/Contact.tsx:144:17",
                          className: "text-white font-semibold mb-4",
                          children: "Follow Me",
                        }),
                        e.jsx("div", {
                          "code-path": "src/sections/Contact.tsx:145:17",
                          className: "flex gap-3",
                          children: D.map((t, o) =>
                            e.jsx(
                              a.a,
                              {
                                "code-path": "src/sections/Contact.tsx:147:21",
                                href: t.href,
                                initial: { opacity: 0, scale: 0.8 },
                                animate: c ? { opacity: 1, scale: 1 } : {},
                                transition: {
                                  duration: 0.5,
                                  delay: 0.5 + o * 0.1,
                                },
                                whileHover: { scale: 1.1, y: -4 },
                                whileTap: { scale: 0.9 },
                                className:
                                  "w-12 h-12 rounded-xl bg-dark-800 flex items-center justify-center hover:bg-gold-500/20 hover:text-gold-400 transition-all duration-300",
                                "aria-label": t.label,
                                children: e.jsx(t.icon, {
                                  "code-path":
                                    "src/sections/Contact.tsx:158:23",
                                  className: "w-5 h-5",
                                }),
                              },
                              t.label,
                            ),
                          ),
                        }),
                      ],
                    }),
                    e.jsxs(a.div, {
                      "code-path": "src/sections/Contact.tsx:165:15",
                      initial: { opacity: 0, y: 20 },
                      animate: c ? { opacity: 1, y: 0 } : {},
                      transition: { duration: 0.6, delay: 0.7 },
                      className: "mt-10 p-6 rounded-2xl glass-gold",
                      children: [
                        e.jsxs("div", {
                          "code-path": "src/sections/Contact.tsx:171:17",
                          className: "flex items-center gap-3 mb-3",
                          children: [
                            e.jsx("div", {
                              "code-path": "src/sections/Contact.tsx:172:19",
                              className:
                                "w-3 h-3 rounded-full bg-green-500 animate-pulse",
                            }),
                            e.jsx("span", {
                              "code-path": "src/sections/Contact.tsx:173:19",
                              className: "text-gold-400 font-medium",
                              children: "Available for Projects",
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          "code-path": "src/sections/Contact.tsx:175:17",
                          className: "text-dark-300 text-sm",
                          children:
                            "Currently accepting new projects for Q1 2025. Book your slot now!",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx(a.div, {
                  "code-path": "src/sections/Contact.tsx:182:13",
                  initial: { opacity: 0, x: 30 },
                  animate: c ? { opacity: 1, x: 0 } : {},
                  transition: { duration: 0.8, delay: 0.3 },
                  children: e.jsxs("form", {
                    "code-path": "src/sections/Contact.tsx:187:15",
                    onSubmit: u,
                    className: "space-y-6",
                    children: [
                      e.jsxs("div", {
                        "code-path": "src/sections/Contact.tsx:188:17",
                        className: "grid sm:grid-cols-2 gap-6",
                        children: [
                          e.jsxs("div", {
                            "code-path": "src/sections/Contact.tsx:189:19",
                            children: [
                              e.jsx("label", {
                                "code-path": "src/sections/Contact.tsx:190:21",
                                className: "block text-white font-medium mb-2",
                                children: "Your Name",
                              }),
                              e.jsx("input", {
                                "code-path": "src/sections/Contact.tsx:193:21",
                                type: "text",
                                name: "name",
                                value: n.name,
                                onChange: i,
                                required: !0,
                                className:
                                  "w-full px-4 py-3 rounded-xl bg-dark-900 border border-dark-800 text-white placeholder-dark-500 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all",
                                placeholder: "John Doe",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            "code-path": "src/sections/Contact.tsx:203:19",
                            children: [
                              e.jsx("label", {
                                "code-path": "src/sections/Contact.tsx:204:21",
                                className: "block text-white font-medium mb-2",
                                children: "Email Address",
                              }),
                              e.jsx("input", {
                                "code-path": "src/sections/Contact.tsx:207:21",
                                type: "email",
                                name: "email",
                                value: n.email,
                                onChange: i,
                                required: !0,
                                className:
                                  "w-full px-4 py-3 rounded-xl bg-dark-900 border border-dark-800 text-white placeholder-dark-500 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all",
                                placeholder: "john@example.com",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        "code-path": "src/sections/Contact.tsx:219:17",
                        children: [
                          e.jsx("label", {
                            "code-path": "src/sections/Contact.tsx:220:19",
                            className: "block text-white font-medium mb-2",
                            children: "Project Type",
                          }),
                          e.jsxs("select", {
                            "code-path": "src/sections/Contact.tsx:223:19",
                            name: "subject",
                            value: n.subject,
                            onChange: i,
                            required: !0,
                            className:
                              "w-full px-4 py-3 rounded-xl bg-dark-900 border border-dark-800 text-white focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all appearance-none cursor-pointer",
                            children: [
                              e.jsx("option", {
                                "code-path": "src/sections/Contact.tsx:230:21",
                                value: "",
                                className: "bg-dark-900",
                                children: "Select a service",
                              }),
                              e.jsx("option", {
                                "code-path": "src/sections/Contact.tsx:231:21",
                                value: "wedding",
                                className: "bg-dark-900",
                                children: "Wedding Film",
                              }),
                              e.jsx("option", {
                                "code-path": "src/sections/Contact.tsx:232:21",
                                value: "commercial",
                                className: "bg-dark-900",
                                children: "Commercial",
                              }),
                              e.jsx("option", {
                                "code-path": "src/sections/Contact.tsx:233:21",
                                value: "music",
                                className: "bg-dark-900",
                                children: "Music Video",
                              }),
                              e.jsx("option", {
                                "code-path": "src/sections/Contact.tsx:234:21",
                                value: "documentary",
                                className: "bg-dark-900",
                                children: "Documentary",
                              }),
                              e.jsx("option", {
                                "code-path": "src/sections/Contact.tsx:235:21",
                                value: "corporate",
                                className: "bg-dark-900",
                                children: "Corporate Video",
                              }),
                              e.jsx("option", {
                                "code-path": "src/sections/Contact.tsx:236:21",
                                value: "fashion",
                                className: "bg-dark-900",
                                children: "Fashion & Lifestyle",
                              }),
                              e.jsx("option", {
                                "code-path": "src/sections/Contact.tsx:237:21",
                                value: "other",
                                className: "bg-dark-900",
                                children: "Other",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        "code-path": "src/sections/Contact.tsx:241:17",
                        children: [
                          e.jsx("label", {
                            "code-path": "src/sections/Contact.tsx:242:19",
                            className: "block text-white font-medium mb-2",
                            children: "Your Message",
                          }),
                          e.jsx("textarea", {
                            "code-path": "src/sections/Contact.tsx:245:19",
                            name: "message",
                            value: n.message,
                            onChange: i,
                            required: !0,
                            rows: 5,
                            className:
                              "w-full px-4 py-3 rounded-xl bg-dark-900 border border-dark-800 text-white placeholder-dark-500 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all resize-none",
                            placeholder: "Tell me about your project...",
                          }),
                        ],
                      }),
                      e.jsx(a.button, {
                        "code-path": "src/sections/Contact.tsx:256:17",
                        type: "submit",
                        disabled: h || l,
                        whileHover: { scale: 1.02 },
                        whileTap: { scale: 0.98 },
                        className: `w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${l ? "bg-green-500 text-white" : "bg-gradient-gold text-dark-950 hover:shadow-glow-lg"}`,
                        children: h
                          ? e.jsxs(e.Fragment, {
                              children: [
                                e.jsx(N, {
                                  "code-path":
                                    "src/sections/Contact.tsx:269:23",
                                  className: "w-5 h-5 animate-spin",
                                }),
                                "Sending...",
                              ],
                            })
                          : l
                            ? e.jsxs(e.Fragment, {
                                children: [
                                  e.jsx(f, {
                                    "code-path":
                                      "src/sections/Contact.tsx:274:23",
                                    className: "w-5 h-5",
                                  }),
                                  "Message Sent!",
                                ],
                              })
                            : e.jsxs(e.Fragment, {
                                children: [
                                  e.jsx(T, {
                                    "code-path":
                                      "src/sections/Contact.tsx:279:23",
                                    className: "w-5 h-5",
                                  }),
                                  "Send Message",
                                ],
                              }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { H as default };
