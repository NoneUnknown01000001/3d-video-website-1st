import { j as e, m as c } from "./index-BAmnnPZt.js";
import { V as i } from "./video-BWv97wGZ.js";
import { H as n } from "./heart-muwe7rDN.js";
import { c as l } from "./createLucideIcon-DUsiWVv4.js";
const d = [
    ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
    ["path", { d: "M12 19V5", key: "x0mq9r" }],
  ],
  h = l("arrow-up", d),
  r = {
    services: [
      { name: "Wedding Films", href: "#services" },
      { name: "Corporate Videos", href: "#services" },
      { name: "Music Videos", href: "#services" },
      { name: "Documentary", href: "#services" },
      { name: "Commercial", href: "#services" },
    ],
    company: [
      { name: "About Me", href: "#about" },
      { name: "Portfolio", href: "#works" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };
function v() {
  const a = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    o = (s) => {
      if (s.startsWith("#")) {
        const t = document.querySelector(s);
        t && t.scrollIntoView({ behavior: "smooth" });
      }
    };
  return e.jsx("footer", {
    "code-path": "src/sections/Footer.tsx:40:5",
    className: "relative bg-dark-950 border-t border-dark-800",
    children: e.jsx("div", {
      "code-path": "src/sections/Footer.tsx:42:7",
      className: "section-padding py-16",
      children: e.jsxs("div", {
        "code-path": "src/sections/Footer.tsx:43:9",
        className: "max-w-7xl mx-auto",
        children: [
          e.jsxs("div", {
            "code-path": "src/sections/Footer.tsx:44:11",
            className: "grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12",
            children: [
              e.jsxs("div", {
                "code-path": "src/sections/Footer.tsx:46:13",
                className: "lg:col-span-1",
                children: [
                  e.jsxs(c.a, {
                    "code-path": "src/sections/Footer.tsx:47:15",
                    href: "#home",
                    onClick: (s) => {
                      (s.preventDefault(), o("#home"));
                    },
                    className: "flex items-center gap-3 mb-6",
                    whileHover: { scale: 1.02 },
                    children: [
                      e.jsx("div", {
                        "code-path": "src/sections/Footer.tsx:53:17",
                        className:
                          "w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center",
                        children: e.jsx(i, {
                          "code-path": "src/sections/Footer.tsx:54:19",
                          className: "w-5 h-5 text-dark-950",
                        }),
                      }),
                      e.jsx("span", {
                        "code-path": "src/sections/Footer.tsx:56:17",
                        className: "text-xl font-bold text-gradient-gold",
                        children: "VIDEASTE",
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    "code-path": "src/sections/Footer.tsx:60:15",
                    className: "text-dark-400 text-sm leading-relaxed mb-6",
                    children:
                      "Professional videography services that transform your vision into cinematic reality. Let's create something amazing together.",
                  }),
                  e.jsxs("div", {
                    "code-path": "src/sections/Footer.tsx:64:15",
                    className: "flex items-center gap-2 text-sm text-dark-400",
                    children: [
                      e.jsx("span", {
                        "code-path": "src/sections/Footer.tsx:65:17",
                        children: "Made with",
                      }),
                      e.jsx(n, {
                        "code-path": "src/sections/Footer.tsx:66:17",
                        className: "w-4 h-4 text-red-500",
                        fill: "currentColor",
                      }),
                      e.jsx("span", {
                        "code-path": "src/sections/Footer.tsx:67:17",
                        children: "in Los Angeles",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                "code-path": "src/sections/Footer.tsx:72:13",
                children: [
                  e.jsx("h3", {
                    "code-path": "src/sections/Footer.tsx:73:15",
                    className: "text-white font-semibold mb-6",
                    children: "Services",
                  }),
                  e.jsx("ul", {
                    "code-path": "src/sections/Footer.tsx:74:15",
                    className: "space-y-3",
                    children: r.services.map((s) =>
                      e.jsx(
                        "li",
                        {
                          "code-path": "src/sections/Footer.tsx:76:19",
                          children: e.jsx("a", {
                            "code-path": "src/sections/Footer.tsx:77:21",
                            href: s.href,
                            onClick: (t) => {
                              (t.preventDefault(), o(s.href));
                            },
                            className:
                              "text-dark-400 hover:text-gold-400 transition-colors text-sm",
                            children: s.name,
                          }),
                        },
                        s.name,
                      ),
                    ),
                  }),
                ],
              }),
              e.jsxs("div", {
                "code-path": "src/sections/Footer.tsx:90:13",
                children: [
                  e.jsx("h3", {
                    "code-path": "src/sections/Footer.tsx:91:15",
                    className: "text-white font-semibold mb-6",
                    children: "Company",
                  }),
                  e.jsx("ul", {
                    "code-path": "src/sections/Footer.tsx:92:15",
                    className: "space-y-3",
                    children: r.company.map((s) =>
                      e.jsx(
                        "li",
                        {
                          "code-path": "src/sections/Footer.tsx:94:19",
                          children: e.jsx("a", {
                            "code-path": "src/sections/Footer.tsx:95:21",
                            href: s.href,
                            onClick: (t) => {
                              (t.preventDefault(), o(s.href));
                            },
                            className:
                              "text-dark-400 hover:text-gold-400 transition-colors text-sm",
                            children: s.name,
                          }),
                        },
                        s.name,
                      ),
                    ),
                  }),
                ],
              }),
              e.jsxs("div", {
                "code-path": "src/sections/Footer.tsx:108:13",
                children: [
                  e.jsx("h3", {
                    "code-path": "src/sections/Footer.tsx:109:15",
                    className: "text-white font-semibold mb-6",
                    children: "Legal",
                  }),
                  e.jsx("ul", {
                    "code-path": "src/sections/Footer.tsx:110:15",
                    className: "space-y-3",
                    children: r.legal.map((s) =>
                      e.jsx(
                        "li",
                        {
                          "code-path": "src/sections/Footer.tsx:112:19",
                          children: e.jsx("a", {
                            "code-path": "src/sections/Footer.tsx:113:21",
                            href: s.href,
                            className:
                              "text-dark-400 hover:text-gold-400 transition-colors text-sm",
                            children: s.name,
                          }),
                        },
                        s.name,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            "code-path": "src/sections/Footer.tsx:126:11",
            className:
              "pt-8 border-t border-dark-800 flex flex-col sm:flex-row items-center justify-between gap-4",
            children: [
              e.jsxs("p", {
                "code-path": "src/sections/Footer.tsx:127:13",
                className: "text-dark-500 text-sm",
                children: [
                  "© ",
                  new Date().getFullYear(),
                  " Videaste. All rights reserved.",
                ],
              }),
              e.jsx(c.button, {
                "code-path": "src/sections/Footer.tsx:132:13",
                onClick: a,
                whileHover: { scale: 1.1, y: -2 },
                whileTap: { scale: 0.9 },
                className:
                  "w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center hover:bg-gold-500/20 hover:text-gold-400 transition-all duration-300",
                "aria-label": "Back to top",
                children: e.jsx(h, {
                  "code-path": "src/sections/Footer.tsx:139:15",
                  className: "w-5 h-5",
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
export { v as default };
