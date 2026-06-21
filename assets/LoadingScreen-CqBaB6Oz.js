import { r as D, j as k } from "./index-BAmnnPZt.js";
import {
  R as $r,
  M as sr,
  I as Vr,
  S as cr,
  D as Tr,
  a as yr,
  Q as Er,
  V as be,
  O as zt,
  P as er,
  b as ct,
  T as lt,
  c as je,
  d as Kr,
  e as qr,
  f as Rr,
  H as Ce,
  F as Ge,
  g as ut,
  L as Pe,
  h as bt,
  i as Qr,
  u as ye,
  W as lr,
  j as Jr,
  k as Mt,
  C as $e,
  l as Ar,
  m as Cr,
  U as Zt,
  n as en,
  o as tn,
  p as nr,
  q as ht,
  r as rn,
  s as nn,
  t as an,
  B as on,
  v as sn,
  w as ar,
  x as cn,
  y as ln,
  z as _r,
  A as un,
  E as Ht,
  N as hn,
  G as Gt,
  J as dn,
  K as pn,
  X as mn,
  Y as fn,
  Z as gn,
  _ as vn,
  $ as br,
  a0 as wn,
  a1 as Sr,
} from "./react-three-fiber.esm-E-x426cn.js";
function St() {
  return (
    (St = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            for (var t in o) ({}).hasOwnProperty.call(o, t) && (i[t] = o[t]);
          }
          return i;
        }),
    St.apply(null, arguments)
  );
}
const Lr = parseInt($r.replace(/\D+/g, ""));
var De = Uint8Array,
  Ve = Uint16Array,
  or = Uint32Array,
  Or = new De([
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
    5, 5, 5, 0, 0, 0, 0,
  ]),
  Fr = new De([
    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
    11, 11, 12, 12, 13, 13, 0, 0,
  ]),
  yn = new De([
    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
  ]),
  Dr = function (i, r) {
    for (var o = new Ve(31), t = 0; t < 31; ++t) o[t] = r += 1 << i[t - 1];
    for (var l = new or(o[30]), t = 1; t < 30; ++t)
      for (var c = o[t]; c < o[t + 1]; ++c) l[c] = ((c - o[t]) << 5) | t;
    return [o, l];
  },
  Pr = Dr(Or, 2),
  Nr = Pr[0],
  En = Pr[1];
((Nr[28] = 258), (En[258] = 28));
var _n = Dr(Fr, 0),
  bn = _n[0],
  ir = new Ve(32768);
for (var pe = 0; pe < 32768; ++pe) {
  var Xe = ((pe & 43690) >>> 1) | ((pe & 21845) << 1);
  ((Xe = ((Xe & 52428) >>> 2) | ((Xe & 13107) << 2)),
    (Xe = ((Xe & 61680) >>> 4) | ((Xe & 3855) << 4)),
    (ir[pe] = (((Xe & 65280) >>> 8) | ((Xe & 255) << 8)) >>> 1));
}
var _t = function (i, r, o) {
    for (var t = i.length, l = 0, c = new Ve(r); l < t; ++l) ++c[i[l] - 1];
    var h = new Ve(r);
    for (l = 0; l < r; ++l) h[l] = (h[l - 1] + c[l - 1]) << 1;
    var m;
    if (o) {
      m = new Ve(1 << r);
      var f = 15 - r;
      for (l = 0; l < t; ++l)
        if (i[l])
          for (
            var g = (l << 4) | i[l],
              I = r - i[l],
              A = h[i[l] - 1]++ << I,
              R = A | ((1 << I) - 1);
            A <= R;
            ++A
          )
            m[ir[A] >>> f] = g;
    } else
      for (m = new Ve(t), l = 0; l < t; ++l)
        i[l] && (m[l] = ir[h[i[l] - 1]++] >>> (15 - i[l]));
    return m;
  },
  It = new De(288);
for (var pe = 0; pe < 144; ++pe) It[pe] = 8;
for (var pe = 144; pe < 256; ++pe) It[pe] = 9;
for (var pe = 256; pe < 280; ++pe) It[pe] = 7;
for (var pe = 280; pe < 288; ++pe) It[pe] = 8;
var Ur = new De(32);
for (var pe = 0; pe < 32; ++pe) Ur[pe] = 5;
var Sn = _t(It, 9, 1),
  xn = _t(Ur, 5, 1),
  tr = function (i) {
    for (var r = i[0], o = 1; o < i.length; ++o) i[o] > r && (r = i[o]);
    return r;
  },
  ze = function (i, r, o) {
    var t = (r / 8) | 0;
    return ((i[t] | (i[t + 1] << 8)) >> (r & 7)) & o;
  },
  rr = function (i, r) {
    var o = (r / 8) | 0;
    return (i[o] | (i[o + 1] << 8) | (i[o + 2] << 16)) >> (r & 7);
  },
  Mn = function (i) {
    return ((i / 8) | 0) + (i & 7 && 1);
  },
  In = function (i, r, o) {
    (o == null || o > i.length) && (o = i.length);
    var t = new (i instanceof Ve ? Ve : i instanceof or ? or : De)(o - r);
    return (t.set(i.subarray(r, o)), t);
  },
  Tn = function (i, r, o) {
    var t = i.length;
    if (!t || (o && !o.l && t < 5)) return r || new De(0);
    var l = !r || o,
      c = !o || o.i;
    (o || (o = {}), r || (r = new De(t * 3)));
    var h = function (ne) {
        var Ne = r.length;
        if (ne > Ne) {
          var Ue = new De(Math.max(Ne * 2, ne));
          (Ue.set(r), (r = Ue));
        }
      },
      m = o.f || 0,
      f = o.p || 0,
      g = o.b || 0,
      I = o.l,
      A = o.d,
      R = o.m,
      j = o.n,
      Z = t * 8;
    do {
      if (!I) {
        o.f = m = ze(i, f, 1);
        var J = ze(i, f + 1, 3);
        if (((f += 3), J))
          if (J == 1) ((I = Sn), (A = xn), (R = 9), (j = 5));
          else if (J == 2) {
            var le = ze(i, f, 31) + 257,
              ee = ze(i, f + 10, 15) + 4,
              P = le + ze(i, f + 5, 31) + 1;
            f += 14;
            for (var C = new De(P), te = new De(19), E = 0; E < ee; ++E)
              te[yn[E]] = ze(i, f + E * 3, 7);
            f += ee * 3;
            for (
              var T = tr(te), O = (1 << T) - 1, V = _t(te, T, 1), E = 0;
              E < P;
            ) {
              var $ = V[ze(i, f, O)];
              f += $ & 15;
              var N = $ >>> 4;
              if (N < 16) C[E++] = N;
              else {
                var Y = 0,
                  z = 0;
                for (
                  N == 16
                    ? ((z = 3 + ze(i, f, 3)), (f += 2), (Y = C[E - 1]))
                    : N == 17
                      ? ((z = 3 + ze(i, f, 7)), (f += 3))
                      : N == 18 && ((z = 11 + ze(i, f, 127)), (f += 7));
                  z--;
                )
                  C[E++] = Y;
              }
            }
            var oe = C.subarray(0, le),
              G = C.subarray(le);
            ((R = tr(oe)), (j = tr(G)), (I = _t(oe, R, 1)), (A = _t(G, j, 1)));
          } else throw "invalid block type";
        else {
          var N = Mn(f) + 4,
            q = i[N - 4] | (i[N - 3] << 8),
            Q = N + q;
          if (Q > t) {
            if (c) throw "unexpected EOF";
            break;
          }
          (l && h(g + q),
            r.set(i.subarray(N, Q), g),
            (o.b = g += q),
            (o.p = f = Q * 8));
          continue;
        }
        if (f > Z) {
          if (c) throw "unexpected EOF";
          break;
        }
      }
      l && h(g + 131072);
      for (var Ie = (1 << R) - 1, Te = (1 << j) - 1, Se = f; ; Se = f) {
        var Y = I[rr(i, f) & Ie],
          re = Y >>> 4;
        if (((f += Y & 15), f > Z)) {
          if (c) throw "unexpected EOF";
          break;
        }
        if (!Y) throw "invalid length/literal";
        if (re < 256) r[g++] = re;
        else if (re == 256) {
          ((Se = f), (I = null));
          break;
        } else {
          var Le = re - 254;
          if (re > 264) {
            var E = re - 257,
              ie = Or[E];
            ((Le = ze(i, f, (1 << ie) - 1) + Nr[E]), (f += ie));
          }
          var ge = A[rr(i, f) & Te],
            Re = ge >>> 4;
          if (!ge) throw "invalid distance";
          f += ge & 15;
          var G = bn[Re];
          if (Re > 3) {
            var ie = Fr[Re];
            ((G += rr(i, f) & ((1 << ie) - 1)), (f += ie));
          }
          if (f > Z) {
            if (c) throw "unexpected EOF";
            break;
          }
          l && h(g + 131072);
          for (var Ke = g + Le; g < Ke; g += 4)
            ((r[g] = r[g - G]),
              (r[g + 1] = r[g + 1 - G]),
              (r[g + 2] = r[g + 2 - G]),
              (r[g + 3] = r[g + 3 - G]));
          g = Ke;
        }
      }
      ((o.l = I),
        (o.p = Se),
        (o.b = g),
        I && ((m = 1), (o.m = R), (o.d = A), (o.n = j)));
    } while (!m);
    return g == r.length ? r : In(r, 0, g);
  },
  Rn = new De(0),
  An = function (i) {
    if ((i[0] & 15) != 8 || i[0] >>> 4 > 7 || ((i[0] << 8) | i[1]) % 31)
      throw "invalid zlib data";
    if (i[1] & 32) throw "invalid zlib data: preset dictionaries not supported";
  };
function kt(i, r) {
  return Tn((An(i), i.subarray(2, -4)), r);
}
var Cn = typeof TextDecoder < "u" && new TextDecoder(),
  Ln = 0;
try {
  (Cn.decode(Rn, { stream: !0 }), (Ln = 1));
} catch {}
const On = (i) => i && i.isCubeTexture;
class Fn extends sr {
  constructor(r, o) {
    var t, l;
    const c = On(r),
      m =
        ((l = c
          ? (t = r.image[0]) == null
            ? void 0
            : t.width
          : r.image.width) != null
          ? l
          : 1024) / 4,
      f = Math.floor(Math.log2(m)),
      g = Math.pow(2, f),
      I = 3 * Math.max(g, 112),
      A = 4 * g,
      R = [
        c ? "#define ENVMAP_TYPE_CUBE" : "",
        `#define CUBEUV_TEXEL_WIDTH ${1 / I}`,
        `#define CUBEUV_TEXEL_HEIGHT ${1 / A}`,
        `#define CUBEUV_MAX_MIP ${f}.0`,
      ],
      j = `
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `,
      Z =
        R.join(`
`) +
        `
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <${Lr >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
        }
        `,
      J = {
        map: { value: r },
        height: { value: o?.height || 15 },
        radius: { value: o?.radius || 100 },
      },
      N = new Vr(1, 16),
      q = new cr({ uniforms: J, fragmentShader: Z, vertexShader: j, side: Tr });
    super(N, q);
  }
  set radius(r) {
    this.material.uniforms.radius.value = r;
  }
  get radius() {
    return this.material.uniforms.radius.value;
  }
  set height(r) {
    this.material.uniforms.height.value = r;
  }
  get height() {
    return this.material.uniforms.height.value;
  }
}
var Dn = Object.defineProperty,
  Pn = (i, r, o) =>
    r in i
      ? Dn(i, r, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (i[r] = o),
  Nn = (i, r, o) => (Pn(i, r + "", o), o);
class Un {
  constructor() {
    Nn(this, "_listeners");
  }
  addEventListener(r, o) {
    this._listeners === void 0 && (this._listeners = {});
    const t = this._listeners;
    (t[r] === void 0 && (t[r] = []), t[r].indexOf(o) === -1 && t[r].push(o));
  }
  hasEventListener(r, o) {
    if (this._listeners === void 0) return !1;
    const t = this._listeners;
    return t[r] !== void 0 && t[r].indexOf(o) !== -1;
  }
  removeEventListener(r, o) {
    if (this._listeners === void 0) return;
    const l = this._listeners[r];
    if (l !== void 0) {
      const c = l.indexOf(o);
      c !== -1 && l.splice(c, 1);
    }
  }
  dispatchEvent(r) {
    if (this._listeners === void 0) return;
    const t = this._listeners[r.type];
    if (t !== void 0) {
      r.target = this;
      const l = t.slice(0);
      for (let c = 0, h = l.length; c < h; c++) l[c].call(this, r);
      r.target = null;
    }
  }
}
var kn = Object.defineProperty,
  Bn = (i, r, o) =>
    r in i
      ? kn(i, r, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (i[r] = o),
  B = (i, r, o) => (Bn(i, typeof r != "symbol" ? r + "" : r, o), o);
const Bt = new Kr(),
  xr = new qr(),
  jn = Math.cos(70 * (Math.PI / 180)),
  Mr = (i, r) => ((i % r) + r) % r;
let zn = class extends Un {
  constructor(r, o) {
    (super(),
      B(this, "object"),
      B(this, "domElement"),
      B(this, "enabled", !0),
      B(this, "target", new be()),
      B(this, "minDistance", 0),
      B(this, "maxDistance", 1 / 0),
      B(this, "minZoom", 0),
      B(this, "maxZoom", 1 / 0),
      B(this, "minPolarAngle", 0),
      B(this, "maxPolarAngle", Math.PI),
      B(this, "minAzimuthAngle", -1 / 0),
      B(this, "maxAzimuthAngle", 1 / 0),
      B(this, "enableDamping", !1),
      B(this, "dampingFactor", 0.05),
      B(this, "enableZoom", !0),
      B(this, "zoomSpeed", 1),
      B(this, "enableRotate", !0),
      B(this, "rotateSpeed", 1),
      B(this, "enablePan", !0),
      B(this, "panSpeed", 1),
      B(this, "screenSpacePanning", !0),
      B(this, "keyPanSpeed", 7),
      B(this, "zoomToCursor", !1),
      B(this, "autoRotate", !1),
      B(this, "autoRotateSpeed", 2),
      B(this, "reverseOrbit", !1),
      B(this, "reverseHorizontalOrbit", !1),
      B(this, "reverseVerticalOrbit", !1),
      B(this, "keys", {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown",
      }),
      B(this, "mouseButtons", {
        LEFT: ct.ROTATE,
        MIDDLE: ct.DOLLY,
        RIGHT: ct.PAN,
      }),
      B(this, "touches", { ONE: lt.ROTATE, TWO: lt.DOLLY_PAN }),
      B(this, "target0"),
      B(this, "position0"),
      B(this, "zoom0"),
      B(this, "_domElementKeyEvents", null),
      B(this, "getPolarAngle"),
      B(this, "getAzimuthalAngle"),
      B(this, "setPolarAngle"),
      B(this, "setAzimuthalAngle"),
      B(this, "getDistance"),
      B(this, "getZoomScale"),
      B(this, "listenToKeyEvents"),
      B(this, "stopListenToKeyEvents"),
      B(this, "saveState"),
      B(this, "reset"),
      B(this, "update"),
      B(this, "connect"),
      B(this, "dispose"),
      B(this, "dollyIn"),
      B(this, "dollyOut"),
      B(this, "getScale"),
      B(this, "setScale"),
      (this.object = r),
      (this.domElement = o),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this.getPolarAngle = () => I.phi),
      (this.getAzimuthalAngle = () => I.theta),
      (this.setPolarAngle = (s) => {
        let w = Mr(s, 2 * Math.PI),
          L = I.phi;
        (L < 0 && (L += 2 * Math.PI), w < 0 && (w += 2 * Math.PI));
        let K = Math.abs(w - L);
        (2 * Math.PI - K < K &&
          (w < L ? (w += 2 * Math.PI) : (L += 2 * Math.PI)),
          (A.phi = w - L),
          t.update());
      }),
      (this.setAzimuthalAngle = (s) => {
        let w = Mr(s, 2 * Math.PI),
          L = I.theta;
        (L < 0 && (L += 2 * Math.PI), w < 0 && (w += 2 * Math.PI));
        let K = Math.abs(w - L);
        (2 * Math.PI - K < K &&
          (w < L ? (w += 2 * Math.PI) : (L += 2 * Math.PI)),
          (A.theta = w - L),
          t.update());
      }),
      (this.getDistance = () => t.object.position.distanceTo(t.target)),
      (this.listenToKeyEvents = (s) => {
        (s.addEventListener("keydown", at), (this._domElementKeyEvents = s));
      }),
      (this.stopListenToKeyEvents = () => {
        (this._domElementKeyEvents.removeEventListener("keydown", at),
          (this._domElementKeyEvents = null));
      }),
      (this.saveState = () => {
        (t.target0.copy(t.target),
          t.position0.copy(t.object.position),
          (t.zoom0 = t.object.zoom));
      }),
      (this.reset = () => {
        (t.target.copy(t.target0),
          t.object.position.copy(t.position0),
          (t.object.zoom = t.zoom0),
          t.object.updateProjectionMatrix(),
          t.dispatchEvent(l),
          t.update(),
          (f = m.NONE));
      }),
      (this.update = (() => {
        const s = new be(),
          w = new be(0, 1, 0),
          L = new Er().setFromUnitVectors(r.up, w),
          K = L.clone().invert(),
          _ = new be(),
          xe = new Er(),
          He = 2 * Math.PI;
        return function () {
          const Nt = t.object.position;
          (L.setFromUnitVectors(r.up, w),
            K.copy(L).invert(),
            s.copy(Nt).sub(t.target),
            s.applyQuaternion(L),
            I.setFromVector3(s),
            t.autoRotate && f === m.NONE && z($()),
            t.enableDamping
              ? ((I.theta += A.theta * t.dampingFactor),
                (I.phi += A.phi * t.dampingFactor))
              : ((I.theta += A.theta), (I.phi += A.phi)));
          let ke = t.minAzimuthAngle,
            Be = t.maxAzimuthAngle;
          (isFinite(ke) &&
            isFinite(Be) &&
            (ke < -Math.PI ? (ke += He) : ke > Math.PI && (ke -= He),
            Be < -Math.PI ? (Be += He) : Be > Math.PI && (Be -= He),
            ke <= Be
              ? (I.theta = Math.max(ke, Math.min(Be, I.theta)))
              : (I.theta =
                  I.theta > (ke + Be) / 2
                    ? Math.max(ke, I.theta)
                    : Math.min(Be, I.theta))),
            (I.phi = Math.max(
              t.minPolarAngle,
              Math.min(t.maxPolarAngle, I.phi),
            )),
            I.makeSafe(),
            t.enableDamping === !0
              ? t.target.addScaledVector(j, t.dampingFactor)
              : t.target.add(j),
            (t.zoomToCursor && T) || t.object.isOrthographicCamera
              ? (I.radius = ge(I.radius))
              : (I.radius = ge(I.radius * R)),
            s.setFromSpherical(I),
            s.applyQuaternion(K),
            Nt.copy(t.target).add(s),
            t.object.matrixAutoUpdate || t.object.updateMatrix(),
            t.object.lookAt(t.target),
            t.enableDamping === !0
              ? ((A.theta *= 1 - t.dampingFactor),
                (A.phi *= 1 - t.dampingFactor),
                j.multiplyScalar(1 - t.dampingFactor))
              : (A.set(0, 0, 0), j.set(0, 0, 0)));
          let Je = !1;
          if (t.zoomToCursor && T) {
            let et = null;
            if (t.object instanceof er && t.object.isPerspectiveCamera) {
              const tt = s.length();
              et = ge(tt * R);
              const st = tt - et;
              (t.object.position.addScaledVector(te, st),
                t.object.updateMatrixWorld());
            } else if (t.object.isOrthographicCamera) {
              const tt = new be(E.x, E.y, 0);
              (tt.unproject(t.object),
                (t.object.zoom = Math.max(
                  t.minZoom,
                  Math.min(t.maxZoom, t.object.zoom / R),
                )),
                t.object.updateProjectionMatrix(),
                (Je = !0));
              const st = new be(E.x, E.y, 0);
              (st.unproject(t.object),
                t.object.position.sub(st).add(tt),
                t.object.updateMatrixWorld(),
                (et = s.length()));
            } else
              (console.warn(
                "WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.",
              ),
                (t.zoomToCursor = !1));
            et !== null &&
              (t.screenSpacePanning
                ? t.target
                    .set(0, 0, -1)
                    .transformDirection(t.object.matrix)
                    .multiplyScalar(et)
                    .add(t.object.position)
                : (Bt.origin.copy(t.object.position),
                  Bt.direction
                    .set(0, 0, -1)
                    .transformDirection(t.object.matrix),
                  Math.abs(t.object.up.dot(Bt.direction)) < jn
                    ? r.lookAt(t.target)
                    : (xr.setFromNormalAndCoplanarPoint(t.object.up, t.target),
                      Bt.intersectPlane(xr, t.target))));
          } else
            t.object instanceof zt &&
              t.object.isOrthographicCamera &&
              ((Je = R !== 1),
              Je &&
                ((t.object.zoom = Math.max(
                  t.minZoom,
                  Math.min(t.maxZoom, t.object.zoom / R),
                )),
                t.object.updateProjectionMatrix()));
          return (
            (R = 1),
            (T = !1),
            Je ||
            _.distanceToSquared(t.object.position) > g ||
            8 * (1 - xe.dot(t.object.quaternion)) > g
              ? (t.dispatchEvent(l),
                _.copy(t.object.position),
                xe.copy(t.object.quaternion),
                (Je = !1),
                !0)
              : !1
          );
        };
      })()),
      (this.connect = (s) => {
        ((t.domElement = s),
          (t.domElement.style.touchAction = "none"),
          t.domElement.addEventListener("contextmenu", Pt),
          t.domElement.addEventListener("pointerdown", Ft),
          t.domElement.addEventListener("pointercancel", qe),
          t.domElement.addEventListener("wheel", Dt));
      }),
      (this.dispose = () => {
        var s, w, L, K, _, xe;
        (t.domElement && (t.domElement.style.touchAction = "auto"),
          (s = t.domElement) == null ||
            s.removeEventListener("contextmenu", Pt),
          (w = t.domElement) == null ||
            w.removeEventListener("pointerdown", Ft),
          (L = t.domElement) == null ||
            L.removeEventListener("pointercancel", qe),
          (K = t.domElement) == null || K.removeEventListener("wheel", Dt),
          (_ = t.domElement) == null ||
            _.ownerDocument.removeEventListener("pointermove", nt),
          (xe = t.domElement) == null ||
            xe.ownerDocument.removeEventListener("pointerup", qe),
          t._domElementKeyEvents !== null &&
            t._domElementKeyEvents.removeEventListener("keydown", at));
      }));
    const t = this,
      l = { type: "change" },
      c = { type: "start" },
      h = { type: "end" },
      m = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6,
      };
    let f = m.NONE;
    const g = 1e-6,
      I = new yr(),
      A = new yr();
    let R = 1;
    const j = new be(),
      Z = new je(),
      J = new je(),
      N = new je(),
      q = new je(),
      Q = new je(),
      le = new je(),
      ee = new je(),
      P = new je(),
      C = new je(),
      te = new be(),
      E = new je();
    let T = !1;
    const O = [],
      V = {};
    function $() {
      return ((2 * Math.PI) / 60 / 60) * t.autoRotateSpeed;
    }
    function Y() {
      return Math.pow(0.95, t.zoomSpeed);
    }
    function z(s) {
      t.reverseOrbit || t.reverseHorizontalOrbit
        ? (A.theta += s)
        : (A.theta -= s);
    }
    function oe(s) {
      t.reverseOrbit || t.reverseVerticalOrbit ? (A.phi += s) : (A.phi -= s);
    }
    const G = (() => {
        const s = new be();
        return function (L, K) {
          (s.setFromMatrixColumn(K, 0), s.multiplyScalar(-L), j.add(s));
        };
      })(),
      Ie = (() => {
        const s = new be();
        return function (L, K) {
          (t.screenSpacePanning === !0
            ? s.setFromMatrixColumn(K, 1)
            : (s.setFromMatrixColumn(K, 0), s.crossVectors(t.object.up, s)),
            s.multiplyScalar(L),
            j.add(s));
        };
      })(),
      Te = (() => {
        const s = new be();
        return function (L, K) {
          const _ = t.domElement;
          if (_ && t.object instanceof er && t.object.isPerspectiveCamera) {
            const xe = t.object.position;
            s.copy(xe).sub(t.target);
            let He = s.length();
            ((He *= Math.tan(((t.object.fov / 2) * Math.PI) / 180)),
              G((2 * L * He) / _.clientHeight, t.object.matrix),
              Ie((2 * K * He) / _.clientHeight, t.object.matrix));
          } else
            _ && t.object instanceof zt && t.object.isOrthographicCamera
              ? (G(
                  (L * (t.object.right - t.object.left)) /
                    t.object.zoom /
                    _.clientWidth,
                  t.object.matrix,
                ),
                Ie(
                  (K * (t.object.top - t.object.bottom)) /
                    t.object.zoom /
                    _.clientHeight,
                  t.object.matrix,
                ))
              : (console.warn(
                  "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.",
                ),
                (t.enablePan = !1));
        };
      })();
    function Se(s) {
      (t.object instanceof er && t.object.isPerspectiveCamera) ||
      (t.object instanceof zt && t.object.isOrthographicCamera)
        ? (R = s)
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.",
          ),
          (t.enableZoom = !1));
    }
    function re(s) {
      Se(R / s);
    }
    function Le(s) {
      Se(R * s);
    }
    function ie(s) {
      if (!t.zoomToCursor || !t.domElement) return;
      T = !0;
      const w = t.domElement.getBoundingClientRect(),
        L = s.clientX - w.left,
        K = s.clientY - w.top,
        _ = w.width,
        xe = w.height;
      ((E.x = (L / _) * 2 - 1),
        (E.y = -(K / xe) * 2 + 1),
        te
          .set(E.x, E.y, 1)
          .unproject(t.object)
          .sub(t.object.position)
          .normalize());
    }
    function ge(s) {
      return Math.max(t.minDistance, Math.min(t.maxDistance, s));
    }
    function Re(s) {
      Z.set(s.clientX, s.clientY);
    }
    function Ke(s) {
      (ie(s), ee.set(s.clientX, s.clientY));
    }
    function ne(s) {
      q.set(s.clientX, s.clientY);
    }
    function Ne(s) {
      (J.set(s.clientX, s.clientY),
        N.subVectors(J, Z).multiplyScalar(t.rotateSpeed));
      const w = t.domElement;
      (w &&
        (z((2 * Math.PI * N.x) / w.clientHeight),
        oe((2 * Math.PI * N.y) / w.clientHeight)),
        Z.copy(J),
        t.update());
    }
    function Ue(s) {
      (P.set(s.clientX, s.clientY),
        C.subVectors(P, ee),
        C.y > 0 ? re(Y()) : C.y < 0 && Le(Y()),
        ee.copy(P),
        t.update());
    }
    function Wt(s) {
      (Q.set(s.clientX, s.clientY),
        le.subVectors(Q, q).multiplyScalar(t.panSpeed),
        Te(le.x, le.y),
        q.copy(Q),
        t.update());
    }
    function Xt(s) {
      (ie(s), s.deltaY < 0 ? Le(Y()) : s.deltaY > 0 && re(Y()), t.update());
    }
    function Tt(s) {
      let w = !1;
      switch (s.code) {
        case t.keys.UP:
          (Te(0, t.keyPanSpeed), (w = !0));
          break;
        case t.keys.BOTTOM:
          (Te(0, -t.keyPanSpeed), (w = !0));
          break;
        case t.keys.LEFT:
          (Te(t.keyPanSpeed, 0), (w = !0));
          break;
        case t.keys.RIGHT:
          (Te(-t.keyPanSpeed, 0), (w = !0));
          break;
      }
      w && (s.preventDefault(), t.update());
    }
    function Rt() {
      if (O.length == 1) Z.set(O[0].pageX, O[0].pageY);
      else {
        const s = 0.5 * (O[0].pageX + O[1].pageX),
          w = 0.5 * (O[0].pageY + O[1].pageY);
        Z.set(s, w);
      }
    }
    function pt() {
      if (O.length == 1) q.set(O[0].pageX, O[0].pageY);
      else {
        const s = 0.5 * (O[0].pageX + O[1].pageX),
          w = 0.5 * (O[0].pageY + O[1].pageY);
        q.set(s, w);
      }
    }
    function mt() {
      const s = O[0].pageX - O[1].pageX,
        w = O[0].pageY - O[1].pageY,
        L = Math.sqrt(s * s + w * w);
      ee.set(0, L);
    }
    function At() {
      (t.enableZoom && mt(), t.enablePan && pt());
    }
    function $t() {
      (t.enableZoom && mt(), t.enableRotate && Rt());
    }
    function Ct(s) {
      if (O.length == 1) J.set(s.pageX, s.pageY);
      else {
        const L = it(s),
          K = 0.5 * (s.pageX + L.x),
          _ = 0.5 * (s.pageY + L.y);
        J.set(K, _);
      }
      N.subVectors(J, Z).multiplyScalar(t.rotateSpeed);
      const w = t.domElement;
      (w &&
        (z((2 * Math.PI * N.x) / w.clientHeight),
        oe((2 * Math.PI * N.y) / w.clientHeight)),
        Z.copy(J));
    }
    function Lt(s) {
      if (O.length == 1) Q.set(s.pageX, s.pageY);
      else {
        const w = it(s),
          L = 0.5 * (s.pageX + w.x),
          K = 0.5 * (s.pageY + w.y);
        Q.set(L, K);
      }
      (le.subVectors(Q, q).multiplyScalar(t.panSpeed),
        Te(le.x, le.y),
        q.copy(Q));
    }
    function Ot(s) {
      const w = it(s),
        L = s.pageX - w.x,
        K = s.pageY - w.y,
        _ = Math.sqrt(L * L + K * K);
      (P.set(0, _),
        C.set(0, Math.pow(P.y / ee.y, t.zoomSpeed)),
        re(C.y),
        ee.copy(P));
    }
    function Vt(s) {
      (t.enableZoom && Ot(s), t.enablePan && Lt(s));
    }
    function Kt(s) {
      (t.enableZoom && Ot(s), t.enableRotate && Ct(s));
    }
    function Ft(s) {
      var w, L;
      t.enabled !== !1 &&
        (O.length === 0 &&
          ((w = t.domElement) == null ||
            w.ownerDocument.addEventListener("pointermove", nt),
          (L = t.domElement) == null ||
            L.ownerDocument.addEventListener("pointerup", qe)),
        Jt(s),
        s.pointerType === "touch" ? ot(s) : ft(s));
    }
    function nt(s) {
      t.enabled !== !1 && (s.pointerType === "touch" ? Qt(s) : qt(s));
    }
    function qe(s) {
      var w, L, K;
      (Qe(s),
        O.length === 0 &&
          ((w = t.domElement) == null || w.releasePointerCapture(s.pointerId),
          (L = t.domElement) == null ||
            L.ownerDocument.removeEventListener("pointermove", nt),
          (K = t.domElement) == null ||
            K.ownerDocument.removeEventListener("pointerup", qe)),
        t.dispatchEvent(h),
        (f = m.NONE));
    }
    function ft(s) {
      let w;
      switch (s.button) {
        case 0:
          w = t.mouseButtons.LEFT;
          break;
        case 1:
          w = t.mouseButtons.MIDDLE;
          break;
        case 2:
          w = t.mouseButtons.RIGHT;
          break;
        default:
          w = -1;
      }
      switch (w) {
        case ct.DOLLY:
          if (t.enableZoom === !1) return;
          (Ke(s), (f = m.DOLLY));
          break;
        case ct.ROTATE:
          if (s.ctrlKey || s.metaKey || s.shiftKey) {
            if (t.enablePan === !1) return;
            (ne(s), (f = m.PAN));
          } else {
            if (t.enableRotate === !1) return;
            (Re(s), (f = m.ROTATE));
          }
          break;
        case ct.PAN:
          if (s.ctrlKey || s.metaKey || s.shiftKey) {
            if (t.enableRotate === !1) return;
            (Re(s), (f = m.ROTATE));
          } else {
            if (t.enablePan === !1) return;
            (ne(s), (f = m.PAN));
          }
          break;
        default:
          f = m.NONE;
      }
      f !== m.NONE && t.dispatchEvent(c);
    }
    function qt(s) {
      if (t.enabled !== !1)
        switch (f) {
          case m.ROTATE:
            if (t.enableRotate === !1) return;
            Ne(s);
            break;
          case m.DOLLY:
            if (t.enableZoom === !1) return;
            Ue(s);
            break;
          case m.PAN:
            if (t.enablePan === !1) return;
            Wt(s);
            break;
        }
    }
    function Dt(s) {
      t.enabled === !1 ||
        t.enableZoom === !1 ||
        (f !== m.NONE && f !== m.ROTATE) ||
        (s.preventDefault(), t.dispatchEvent(c), Xt(s), t.dispatchEvent(h));
    }
    function at(s) {
      t.enabled === !1 || t.enablePan === !1 || Tt(s);
    }
    function ot(s) {
      switch ((Ee(s), O.length)) {
        case 1:
          switch (t.touches.ONE) {
            case lt.ROTATE:
              if (t.enableRotate === !1) return;
              (Rt(), (f = m.TOUCH_ROTATE));
              break;
            case lt.PAN:
              if (t.enablePan === !1) return;
              (pt(), (f = m.TOUCH_PAN));
              break;
            default:
              f = m.NONE;
          }
          break;
        case 2:
          switch (t.touches.TWO) {
            case lt.DOLLY_PAN:
              if (t.enableZoom === !1 && t.enablePan === !1) return;
              (At(), (f = m.TOUCH_DOLLY_PAN));
              break;
            case lt.DOLLY_ROTATE:
              if (t.enableZoom === !1 && t.enableRotate === !1) return;
              ($t(), (f = m.TOUCH_DOLLY_ROTATE));
              break;
            default:
              f = m.NONE;
          }
          break;
        default:
          f = m.NONE;
      }
      f !== m.NONE && t.dispatchEvent(c);
    }
    function Qt(s) {
      switch ((Ee(s), f)) {
        case m.TOUCH_ROTATE:
          if (t.enableRotate === !1) return;
          (Ct(s), t.update());
          break;
        case m.TOUCH_PAN:
          if (t.enablePan === !1) return;
          (Lt(s), t.update());
          break;
        case m.TOUCH_DOLLY_PAN:
          if (t.enableZoom === !1 && t.enablePan === !1) return;
          (Vt(s), t.update());
          break;
        case m.TOUCH_DOLLY_ROTATE:
          if (t.enableZoom === !1 && t.enableRotate === !1) return;
          (Kt(s), t.update());
          break;
        default:
          f = m.NONE;
      }
    }
    function Pt(s) {
      t.enabled !== !1 && s.preventDefault();
    }
    function Jt(s) {
      O.push(s);
    }
    function Qe(s) {
      delete V[s.pointerId];
      for (let w = 0; w < O.length; w++)
        if (O[w].pointerId == s.pointerId) {
          O.splice(w, 1);
          return;
        }
    }
    function Ee(s) {
      let w = V[s.pointerId];
      (w === void 0 && ((w = new je()), (V[s.pointerId] = w)),
        w.set(s.pageX, s.pageY));
    }
    function it(s) {
      const w = s.pointerId === O[0].pointerId ? O[1] : O[0];
      return V[w.pointerId];
    }
    ((this.dollyIn = (s = Y()) => {
      (Le(s), t.update());
    }),
      (this.dollyOut = (s = Y()) => {
        (re(s), t.update());
      }),
      (this.getScale = () => R),
      (this.setScale = (s) => {
        (Se(s), t.update());
      }),
      (this.getZoomScale = () => Y()),
      o !== void 0 && this.connect(o),
      this.update());
  }
};
class Hn extends Rr {
  constructor(r) {
    (super(r), (this.type = Ce));
  }
  parse(r) {
    const h = function (E, T) {
        switch (E) {
          case 1:
            throw new Error("THREE.RGBELoader: Read Error: " + (T || ""));
          case 2:
            throw new Error("THREE.RGBELoader: Write Error: " + (T || ""));
          case 3:
            throw new Error("THREE.RGBELoader: Bad File Format: " + (T || ""));
          default:
          case 4:
            throw new Error("THREE.RGBELoader: Memory Error: " + (T || ""));
        }
      },
      A = function (E, T, O) {
        T = T || 1024;
        let $ = E.pos,
          Y = -1,
          z = 0,
          oe = "",
          G = String.fromCharCode.apply(
            null,
            new Uint16Array(E.subarray($, $ + 128)),
          );
        for (
          ;
          0 >
            (Y = G.indexOf(`
`)) &&
          z < T &&
          $ < E.byteLength;
        )
          ((oe += G),
            (z += G.length),
            ($ += 128),
            (G += String.fromCharCode.apply(
              null,
              new Uint16Array(E.subarray($, $ + 128)),
            )));
        return -1 < Y ? ((E.pos += z + Y + 1), oe + G.slice(0, Y)) : !1;
      },
      R = function (E) {
        const T = /^#\?(\S+)/,
          O = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,
          V = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,
          $ = /^\s*FORMAT=(\S+)\s*$/,
          Y = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,
          z = {
            valid: 0,
            string: "",
            comments: "",
            programtype: "RGBE",
            format: "",
            gamma: 1,
            exposure: 1,
            width: 0,
            height: 0,
          };
        let oe, G;
        for (
          (E.pos >= E.byteLength || !(oe = A(E))) && h(1, "no header found"),
            (G = oe.match(T)) || h(3, "bad initial token"),
            z.valid |= 1,
            z.programtype = G[1],
            z.string +=
              oe +
              `
`;
          (oe = A(E)), oe !== !1;
        ) {
          if (
            ((z.string +=
              oe +
              `
`),
            oe.charAt(0) === "#")
          ) {
            z.comments +=
              oe +
              `
`;
            continue;
          }
          if (
            ((G = oe.match(O)) && (z.gamma = parseFloat(G[1])),
            (G = oe.match(V)) && (z.exposure = parseFloat(G[1])),
            (G = oe.match($)) && ((z.valid |= 2), (z.format = G[1])),
            (G = oe.match(Y)) &&
              ((z.valid |= 4),
              (z.height = parseInt(G[1], 10)),
              (z.width = parseInt(G[2], 10))),
            z.valid & 2 && z.valid & 4)
          )
            break;
        }
        return (
          z.valid & 2 || h(3, "missing format specifier"),
          z.valid & 4 || h(3, "missing image size specifier"),
          z
        );
      },
      j = function (E, T, O) {
        const V = T;
        if (V < 8 || V > 32767 || E[0] !== 2 || E[1] !== 2 || E[2] & 128)
          return new Uint8Array(E);
        V !== ((E[2] << 8) | E[3]) && h(3, "wrong scanline width");
        const $ = new Uint8Array(4 * T * O);
        $.length || h(4, "unable to allocate buffer space");
        let Y = 0,
          z = 0;
        const oe = 4 * V,
          G = new Uint8Array(4),
          Ie = new Uint8Array(oe);
        let Te = O;
        for (; Te > 0 && z < E.byteLength; ) {
          (z + 4 > E.byteLength && h(1),
            (G[0] = E[z++]),
            (G[1] = E[z++]),
            (G[2] = E[z++]),
            (G[3] = E[z++]),
            (G[0] != 2 || G[1] != 2 || ((G[2] << 8) | G[3]) != V) &&
              h(3, "bad rgbe scanline format"));
          let Se = 0,
            re;
          for (; Se < oe && z < E.byteLength; ) {
            re = E[z++];
            const ie = re > 128;
            if (
              (ie && (re -= 128),
              (re === 0 || Se + re > oe) && h(3, "bad scanline data"),
              ie)
            ) {
              const ge = E[z++];
              for (let Re = 0; Re < re; Re++) Ie[Se++] = ge;
            } else (Ie.set(E.subarray(z, z + re), Se), (Se += re), (z += re));
          }
          const Le = V;
          for (let ie = 0; ie < Le; ie++) {
            let ge = 0;
            (($[Y] = Ie[ie + ge]),
              (ge += V),
              ($[Y + 1] = Ie[ie + ge]),
              (ge += V),
              ($[Y + 2] = Ie[ie + ge]),
              (ge += V),
              ($[Y + 3] = Ie[ie + ge]),
              (Y += 4));
          }
          Te--;
        }
        return $;
      },
      Z = function (E, T, O, V) {
        const $ = E[T + 3],
          Y = Math.pow(2, $ - 128) / 255;
        ((O[V + 0] = E[T + 0] * Y),
          (O[V + 1] = E[T + 1] * Y),
          (O[V + 2] = E[T + 2] * Y),
          (O[V + 3] = 1));
      },
      J = function (E, T, O, V) {
        const $ = E[T + 3],
          Y = Math.pow(2, $ - 128) / 255;
        ((O[V + 0] = ut.toHalfFloat(Math.min(E[T + 0] * Y, 65504))),
          (O[V + 1] = ut.toHalfFloat(Math.min(E[T + 1] * Y, 65504))),
          (O[V + 2] = ut.toHalfFloat(Math.min(E[T + 2] * Y, 65504))),
          (O[V + 3] = ut.toHalfFloat(1)));
      },
      N = new Uint8Array(r);
    N.pos = 0;
    const q = R(N),
      Q = q.width,
      le = q.height,
      ee = j(N.subarray(N.pos), Q, le);
    let P, C, te;
    switch (this.type) {
      case Ge:
        te = ee.length / 4;
        const E = new Float32Array(te * 4);
        for (let O = 0; O < te; O++) Z(ee, O * 4, E, O * 4);
        ((P = E), (C = Ge));
        break;
      case Ce:
        te = ee.length / 4;
        const T = new Uint16Array(te * 4);
        for (let O = 0; O < te; O++) J(ee, O * 4, T, O * 4);
        ((P = T), (C = Ce));
        break;
      default:
        throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
    }
    return {
      width: Q,
      height: le,
      data: P,
      header: q.string,
      gamma: q.gamma,
      exposure: q.exposure,
      type: C,
    };
  }
  setDataType(r) {
    return ((this.type = r), this);
  }
  load(r, o, t, l) {
    function c(h, m) {
      switch (h.type) {
        case Ge:
        case Ce:
          ("colorSpace" in h
            ? (h.colorSpace = "srgb-linear")
            : (h.encoding = 3e3),
            (h.minFilter = Pe),
            (h.magFilter = Pe),
            (h.generateMipmaps = !1),
            (h.flipY = !0));
          break;
      }
      o && o(h, m);
    }
    return super.load(r, c, t, l);
  }
}
const yt = Lr >= 152;
class Zn extends Rr {
  constructor(r) {
    (super(r), (this.type = Ce));
  }
  parse(r) {
    const T = Math.pow(2.7182818, 2.2);
    function O(e, n) {
      for (var a = 0, u = 0; u < 65536; ++u)
        (u == 0 || e[u >> 3] & (1 << (u & 7))) && (n[a++] = u);
      for (var d = a - 1; a < 65536; ) n[a++] = 0;
      return d;
    }
    function V(e) {
      for (var n = 0; n < 16384; n++)
        ((e[n] = {}), (e[n].len = 0), (e[n].lit = 0), (e[n].p = null));
    }
    const $ = { l: 0, c: 0, lc: 0 };
    function Y(e, n, a, u, d) {
      for (; a < e; ) ((n = (n << 8) | it(u, d)), (a += 8));
      ((a -= e), ($.l = (n >> a) & ((1 << e) - 1)), ($.c = n), ($.lc = a));
    }
    const z = new Array(59);
    function oe(e) {
      for (var n = 0; n <= 58; ++n) z[n] = 0;
      for (var n = 0; n < 65537; ++n) z[e[n]] += 1;
      for (var a = 0, n = 58; n > 0; --n) {
        var u = (a + z[n]) >> 1;
        ((z[n] = a), (a = u));
      }
      for (var n = 0; n < 65537; ++n) {
        var d = e[n];
        d > 0 && (e[n] = d | (z[d]++ << 6));
      }
    }
    function G(e, n, a, u, d, p, y) {
      for (var v = a, x = 0, S = 0; d <= p; d++) {
        if (v.value - a.value > u) return !1;
        Y(6, x, S, e, v);
        var M = $.l;
        if (((x = $.c), (S = $.lc), (y[d] = M), M == 63)) {
          if (v.value - a.value > u)
            throw "Something wrong with hufUnpackEncTable";
          Y(8, x, S, e, v);
          var b = $.l + 6;
          if (((x = $.c), (S = $.lc), d + b > p + 1))
            throw "Something wrong with hufUnpackEncTable";
          for (; b--; ) y[d++] = 0;
          d--;
        } else if (M >= 59) {
          var b = M - 59 + 2;
          if (d + b > p + 1) throw "Something wrong with hufUnpackEncTable";
          for (; b--; ) y[d++] = 0;
          d--;
        }
      }
      oe(y);
    }
    function Ie(e) {
      return e & 63;
    }
    function Te(e) {
      return e >> 6;
    }
    function Se(e, n, a, u) {
      for (; n <= a; n++) {
        var d = Te(e[n]),
          p = Ie(e[n]);
        if (d >> p) throw "Invalid table entry";
        if (p > 14) {
          var y = u[d >> (p - 14)];
          if (y.len) throw "Invalid table entry";
          if ((y.lit++, y.p)) {
            var v = y.p;
            y.p = new Array(y.lit);
            for (var x = 0; x < y.lit - 1; ++x) y.p[x] = v[x];
          } else y.p = new Array(1);
          y.p[y.lit - 1] = n;
        } else if (p)
          for (var S = 0, x = 1 << (14 - p); x > 0; x--) {
            var y = u[(d << (14 - p)) + S];
            if (y.len || y.p) throw "Invalid table entry";
            ((y.len = p), (y.lit = n), S++);
          }
      }
      return !0;
    }
    const re = { c: 0, lc: 0 };
    function Le(e, n, a, u) {
      ((e = (e << 8) | it(a, u)), (n += 8), (re.c = e), (re.lc = n));
    }
    const ie = { c: 0, lc: 0 };
    function ge(e, n, a, u, d, p, y, v, x, S) {
      if (e == n) {
        (u < 8 && (Le(a, u, d, y), (a = re.c), (u = re.lc)), (u -= 8));
        var M = a >> u,
          M = new Uint8Array([M])[0];
        if (x.value + M > S) return !1;
        for (var b = v[x.value - 1]; M-- > 0; ) v[x.value++] = b;
      } else if (x.value < S) v[x.value++] = e;
      else return !1;
      ((ie.c = a), (ie.lc = u));
    }
    function Re(e) {
      return e & 65535;
    }
    function Ke(e) {
      var n = Re(e);
      return n > 32767 ? n - 65536 : n;
    }
    const ne = { a: 0, b: 0 };
    function Ne(e, n) {
      var a = Ke(e),
        u = Ke(n),
        d = u,
        p = a + (d & 1) + (d >> 1),
        y = p,
        v = p - d;
      ((ne.a = y), (ne.b = v));
    }
    function Ue(e, n) {
      var a = Re(e),
        u = Re(n),
        d = (a - (u >> 1)) & 65535,
        p = (u + d - 32768) & 65535;
      ((ne.a = p), (ne.b = d));
    }
    function Wt(e, n, a, u, d, p, y) {
      for (var v = y < 16384, x = a > d ? d : a, S = 1, M; S <= x; ) S <<= 1;
      for (S >>= 1, M = S, S >>= 1; S >= 1; ) {
        for (
          var b = 0,
            fe = b + p * (d - M),
            F = p * S,
            U = p * M,
            H = u * S,
            W = u * M,
            se,
            ue,
            ve,
            Me;
          b <= fe;
          b += U
        ) {
          for (var he = b, Ze = b + u * (a - M); he <= Ze; he += W) {
            var de = he + H,
              we = he + F,
              Ye = we + H;
            v
              ? (Ne(e[he + n], e[we + n]),
                (se = ne.a),
                (ve = ne.b),
                Ne(e[de + n], e[Ye + n]),
                (ue = ne.a),
                (Me = ne.b),
                Ne(se, ue),
                (e[he + n] = ne.a),
                (e[de + n] = ne.b),
                Ne(ve, Me),
                (e[we + n] = ne.a),
                (e[Ye + n] = ne.b))
              : (Ue(e[he + n], e[we + n]),
                (se = ne.a),
                (ve = ne.b),
                Ue(e[de + n], e[Ye + n]),
                (ue = ne.a),
                (Me = ne.b),
                Ue(se, ue),
                (e[he + n] = ne.a),
                (e[de + n] = ne.b),
                Ue(ve, Me),
                (e[we + n] = ne.a),
                (e[Ye + n] = ne.b));
          }
          if (a & S) {
            var we = he + F;
            (v ? Ne(e[he + n], e[we + n]) : Ue(e[he + n], e[we + n]),
              (se = ne.a),
              (e[we + n] = ne.b),
              (e[he + n] = se));
          }
        }
        if (d & S)
          for (var he = b, Ze = b + u * (a - M); he <= Ze; he += W) {
            var de = he + H;
            (v ? Ne(e[he + n], e[de + n]) : Ue(e[he + n], e[de + n]),
              (se = ne.a),
              (e[de + n] = ne.b),
              (e[he + n] = se));
          }
        ((M = S), (S >>= 1));
      }
      return b;
    }
    function Xt(e, n, a, u, d, p, y, v, x, S) {
      for (
        var M = 0, b = 0, fe = v, F = Math.trunc(d.value + (p + 7) / 8);
        d.value < F;
      )
        for (Le(M, b, a, d), M = re.c, b = re.lc; b >= 14; ) {
          var U = (M >> (b - 14)) & 16383,
            H = n[U];
          if (H.len)
            ((b -= H.len),
              ge(H.lit, y, M, b, a, u, d, x, S, fe),
              (M = ie.c),
              (b = ie.lc));
          else {
            if (!H.p) throw "hufDecode issues";
            var W;
            for (W = 0; W < H.lit; W++) {
              for (var se = Ie(e[H.p[W]]); b < se && d.value < F; )
                (Le(M, b, a, d), (M = re.c), (b = re.lc));
              if (
                b >= se &&
                Te(e[H.p[W]]) == ((M >> (b - se)) & ((1 << se) - 1))
              ) {
                ((b -= se),
                  ge(H.p[W], y, M, b, a, u, d, x, S, fe),
                  (M = ie.c),
                  (b = ie.lc));
                break;
              }
            }
            if (W == H.lit) throw "hufDecode issues";
          }
        }
      var ue = (8 - p) & 7;
      for (M >>= ue, b -= ue; b > 0; ) {
        var H = n[(M << (14 - b)) & 16383];
        if (H.len)
          ((b -= H.len),
            ge(H.lit, y, M, b, a, u, d, x, S, fe),
            (M = ie.c),
            (b = ie.lc));
        else throw "hufDecode issues";
      }
      return !0;
    }
    function Tt(e, n, a, u, d, p) {
      var y = { value: 0 },
        v = a.value,
        x = Ee(n, a),
        S = Ee(n, a);
      a.value += 4;
      var M = Ee(n, a);
      if (((a.value += 4), x < 0 || x >= 65537 || S < 0 || S >= 65537))
        throw "Something wrong with HUF_ENCSIZE";
      var b = new Array(65537),
        fe = new Array(16384);
      V(fe);
      var F = u - (a.value - v);
      if ((G(e, n, a, F, x, S, b), M > 8 * (u - (a.value - v))))
        throw "Something wrong with hufUncompress";
      (Se(b, x, S, fe), Xt(b, fe, e, n, a, M, S, p, d, y));
    }
    function Rt(e, n, a) {
      for (var u = 0; u < a; ++u) n[u] = e[n[u]];
    }
    function pt(e) {
      for (var n = 1; n < e.length; n++) {
        var a = e[n - 1] + e[n] - 128;
        e[n] = a;
      }
    }
    function mt(e, n) {
      for (
        var a = 0, u = Math.floor((e.length + 1) / 2), d = 0, p = e.length - 1;
        !(d > p || ((n[d++] = e[a++]), d > p));
      )
        n[d++] = e[u++];
    }
    function At(e) {
      for (
        var n = e.byteLength, a = new Array(), u = 0, d = new DataView(e);
        n > 0;
      ) {
        var p = d.getInt8(u++);
        if (p < 0) {
          var y = -p;
          n -= y + 1;
          for (var v = 0; v < y; v++) a.push(d.getUint8(u++));
        } else {
          var y = p;
          n -= 2;
          for (var x = d.getUint8(u++), v = 0; v < y + 1; v++) a.push(x);
        }
      }
      return a;
    }
    function $t(e, n, a, u, d, p) {
      var de = new DataView(p.buffer),
        y = a[e.idx[0]].width,
        v = a[e.idx[0]].height,
        x = 3,
        S = Math.floor(y / 8),
        M = Math.ceil(y / 8),
        b = Math.ceil(v / 8),
        fe = y - (M - 1) * 8,
        F = v - (b - 1) * 8,
        U = { value: 0 },
        H = new Array(x),
        W = new Array(x),
        se = new Array(x),
        ue = new Array(x),
        ve = new Array(x);
      for (let ce = 0; ce < x; ++ce)
        ((ve[ce] = n[e.idx[ce]]),
          (H[ce] = ce < 1 ? 0 : H[ce - 1] + M * b),
          (W[ce] = new Float32Array(64)),
          (se[ce] = new Uint16Array(64)),
          (ue[ce] = new Uint16Array(M * 64)));
      for (let ce = 0; ce < b; ++ce) {
        var Me = 8;
        ce == b - 1 && (Me = F);
        var he = 8;
        for (let me = 0; me < M; ++me) {
          me == M - 1 && (he = fe);
          for (let ae = 0; ae < x; ++ae)
            (se[ae].fill(0),
              (se[ae][0] = d[H[ae]++]),
              Ct(U, u, se[ae]),
              Lt(se[ae], W[ae]),
              Ot(W[ae]));
          Vt(W);
          for (let ae = 0; ae < x; ++ae) Kt(W[ae], ue[ae], me * 64);
        }
        let _e = 0;
        for (let me = 0; me < x; ++me) {
          const ae = a[e.idx[me]].type;
          for (let Fe = 8 * ce; Fe < 8 * ce + Me; ++Fe) {
            _e = ve[me][Fe];
            for (let rt = 0; rt < S; ++rt) {
              const Ae = rt * 64 + (Fe & 7) * 8;
              (de.setUint16(_e + 0 * ae, ue[me][Ae + 0], !0),
                de.setUint16(_e + 2 * ae, ue[me][Ae + 1], !0),
                de.setUint16(_e + 4 * ae, ue[me][Ae + 2], !0),
                de.setUint16(_e + 6 * ae, ue[me][Ae + 3], !0),
                de.setUint16(_e + 8 * ae, ue[me][Ae + 4], !0),
                de.setUint16(_e + 10 * ae, ue[me][Ae + 5], !0),
                de.setUint16(_e + 12 * ae, ue[me][Ae + 6], !0),
                de.setUint16(_e + 14 * ae, ue[me][Ae + 7], !0),
                (_e += 16 * ae));
            }
          }
          if (S != M)
            for (let Fe = 8 * ce; Fe < 8 * ce + Me; ++Fe) {
              const rt = ve[me][Fe] + 8 * S * 2 * ae,
                Ae = S * 64 + (Fe & 7) * 8;
              for (let We = 0; We < he; ++We)
                de.setUint16(rt + We * 2 * ae, ue[me][Ae + We], !0);
            }
        }
      }
      for (
        var Ze = new Uint16Array(y), de = new DataView(p.buffer), we = 0;
        we < x;
        ++we
      ) {
        a[e.idx[we]].decoded = !0;
        var Ye = a[e.idx[we]].type;
        if (a[we].type == 2)
          for (var wt = 0; wt < v; ++wt) {
            const ce = ve[we][wt];
            for (var Oe = 0; Oe < y; ++Oe)
              Ze[Oe] = de.getUint16(ce + Oe * 2 * Ye, !0);
            for (var Oe = 0; Oe < y; ++Oe)
              de.setFloat32(ce + Oe * 2 * Ye, _(Ze[Oe]), !0);
          }
      }
    }
    function Ct(e, n, a) {
      for (var u, d = 1; d < 64; )
        ((u = n[e.value]),
          u == 65280
            ? (d = 64)
            : u >> 8 == 255
              ? (d += u & 255)
              : ((a[d] = u), d++),
          e.value++);
    }
    function Lt(e, n) {
      ((n[0] = _(e[0])),
        (n[1] = _(e[1])),
        (n[2] = _(e[5])),
        (n[3] = _(e[6])),
        (n[4] = _(e[14])),
        (n[5] = _(e[15])),
        (n[6] = _(e[27])),
        (n[7] = _(e[28])),
        (n[8] = _(e[2])),
        (n[9] = _(e[4])),
        (n[10] = _(e[7])),
        (n[11] = _(e[13])),
        (n[12] = _(e[16])),
        (n[13] = _(e[26])),
        (n[14] = _(e[29])),
        (n[15] = _(e[42])),
        (n[16] = _(e[3])),
        (n[17] = _(e[8])),
        (n[18] = _(e[12])),
        (n[19] = _(e[17])),
        (n[20] = _(e[25])),
        (n[21] = _(e[30])),
        (n[22] = _(e[41])),
        (n[23] = _(e[43])),
        (n[24] = _(e[9])),
        (n[25] = _(e[11])),
        (n[26] = _(e[18])),
        (n[27] = _(e[24])),
        (n[28] = _(e[31])),
        (n[29] = _(e[40])),
        (n[30] = _(e[44])),
        (n[31] = _(e[53])),
        (n[32] = _(e[10])),
        (n[33] = _(e[19])),
        (n[34] = _(e[23])),
        (n[35] = _(e[32])),
        (n[36] = _(e[39])),
        (n[37] = _(e[45])),
        (n[38] = _(e[52])),
        (n[39] = _(e[54])),
        (n[40] = _(e[20])),
        (n[41] = _(e[22])),
        (n[42] = _(e[33])),
        (n[43] = _(e[38])),
        (n[44] = _(e[46])),
        (n[45] = _(e[51])),
        (n[46] = _(e[55])),
        (n[47] = _(e[60])),
        (n[48] = _(e[21])),
        (n[49] = _(e[34])),
        (n[50] = _(e[37])),
        (n[51] = _(e[47])),
        (n[52] = _(e[50])),
        (n[53] = _(e[56])),
        (n[54] = _(e[59])),
        (n[55] = _(e[61])),
        (n[56] = _(e[35])),
        (n[57] = _(e[36])),
        (n[58] = _(e[48])),
        (n[59] = _(e[49])),
        (n[60] = _(e[57])),
        (n[61] = _(e[58])),
        (n[62] = _(e[62])),
        (n[63] = _(e[63])));
    }
    function Ot(e) {
      const n = 0.5 * Math.cos(0.7853975),
        a = 0.5 * Math.cos(3.14159 / 16),
        u = 0.5 * Math.cos(3.14159 / 8),
        d = 0.5 * Math.cos((3 * 3.14159) / 16),
        p = 0.5 * Math.cos((5 * 3.14159) / 16),
        y = 0.5 * Math.cos((3 * 3.14159) / 8),
        v = 0.5 * Math.cos((7 * 3.14159) / 16);
      for (
        var x = new Array(4),
          S = new Array(4),
          M = new Array(4),
          b = new Array(4),
          fe = 0;
        fe < 8;
        ++fe
      ) {
        var F = fe * 8;
        ((x[0] = u * e[F + 2]),
          (x[1] = y * e[F + 2]),
          (x[2] = u * e[F + 6]),
          (x[3] = y * e[F + 6]),
          (S[0] = a * e[F + 1] + d * e[F + 3] + p * e[F + 5] + v * e[F + 7]),
          (S[1] = d * e[F + 1] - v * e[F + 3] - a * e[F + 5] - p * e[F + 7]),
          (S[2] = p * e[F + 1] - a * e[F + 3] + v * e[F + 5] + d * e[F + 7]),
          (S[3] = v * e[F + 1] - p * e[F + 3] + d * e[F + 5] - a * e[F + 7]),
          (M[0] = n * (e[F + 0] + e[F + 4])),
          (M[3] = n * (e[F + 0] - e[F + 4])),
          (M[1] = x[0] + x[3]),
          (M[2] = x[1] - x[2]),
          (b[0] = M[0] + M[1]),
          (b[1] = M[3] + M[2]),
          (b[2] = M[3] - M[2]),
          (b[3] = M[0] - M[1]),
          (e[F + 0] = b[0] + S[0]),
          (e[F + 1] = b[1] + S[1]),
          (e[F + 2] = b[2] + S[2]),
          (e[F + 3] = b[3] + S[3]),
          (e[F + 4] = b[3] - S[3]),
          (e[F + 5] = b[2] - S[2]),
          (e[F + 6] = b[1] - S[1]),
          (e[F + 7] = b[0] - S[0]));
      }
      for (var U = 0; U < 8; ++U)
        ((x[0] = u * e[16 + U]),
          (x[1] = y * e[16 + U]),
          (x[2] = u * e[48 + U]),
          (x[3] = y * e[48 + U]),
          (S[0] = a * e[8 + U] + d * e[24 + U] + p * e[40 + U] + v * e[56 + U]),
          (S[1] = d * e[8 + U] - v * e[24 + U] - a * e[40 + U] - p * e[56 + U]),
          (S[2] = p * e[8 + U] - a * e[24 + U] + v * e[40 + U] + d * e[56 + U]),
          (S[3] = v * e[8 + U] - p * e[24 + U] + d * e[40 + U] - a * e[56 + U]),
          (M[0] = n * (e[U] + e[32 + U])),
          (M[3] = n * (e[U] - e[32 + U])),
          (M[1] = x[0] + x[3]),
          (M[2] = x[1] - x[2]),
          (b[0] = M[0] + M[1]),
          (b[1] = M[3] + M[2]),
          (b[2] = M[3] - M[2]),
          (b[3] = M[0] - M[1]),
          (e[0 + U] = b[0] + S[0]),
          (e[8 + U] = b[1] + S[1]),
          (e[16 + U] = b[2] + S[2]),
          (e[24 + U] = b[3] + S[3]),
          (e[32 + U] = b[3] - S[3]),
          (e[40 + U] = b[2] - S[2]),
          (e[48 + U] = b[1] - S[1]),
          (e[56 + U] = b[0] - S[0]));
    }
    function Vt(e) {
      for (var n = 0; n < 64; ++n) {
        var a = e[0][n],
          u = e[1][n],
          d = e[2][n];
        ((e[0][n] = a + 1.5747 * d),
          (e[1][n] = a - 0.1873 * u - 0.4682 * d),
          (e[2][n] = a + 1.8556 * u));
      }
    }
    function Kt(e, n, a) {
      for (var u = 0; u < 64; ++u) n[a + u] = ut.toHalfFloat(Ft(e[u]));
    }
    function Ft(e) {
      return e <= 1
        ? Math.sign(e) * Math.pow(Math.abs(e), 2.2)
        : Math.sign(e) * Math.pow(T, Math.abs(e) - 1);
    }
    function nt(e) {
      return new DataView(e.array.buffer, e.offset.value, e.size);
    }
    function qe(e) {
      var n = e.viewer.buffer.slice(e.offset.value, e.offset.value + e.size),
        a = new Uint8Array(At(n)),
        u = new Uint8Array(a.length);
      return (pt(a), mt(a, u), new DataView(u.buffer));
    }
    function ft(e) {
      var n = e.array.slice(e.offset.value, e.offset.value + e.size),
        a = kt(n),
        u = new Uint8Array(a.length);
      return (pt(a), mt(a, u), new DataView(u.buffer));
    }
    function qt(e) {
      for (
        var n = e.viewer,
          a = { value: e.offset.value },
          u = new Uint16Array(
            e.width * e.scanlineBlockSize * (e.channels * e.type),
          ),
          d = new Uint8Array(8192),
          p = 0,
          y = new Array(e.channels),
          v = 0;
        v < e.channels;
        v++
      )
        ((y[v] = {}),
          (y[v].start = p),
          (y[v].end = y[v].start),
          (y[v].nx = e.width),
          (y[v].ny = e.lines),
          (y[v].size = e.type),
          (p += y[v].nx * y[v].ny * y[v].size));
      var x = xe(n, a),
        S = xe(n, a);
      if (S >= 8192)
        throw "Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";
      if (x <= S) for (var v = 0; v < S - x + 1; v++) d[v + x] = s(n, a);
      var M = new Uint16Array(65536),
        b = O(d, M),
        fe = Ee(n, a);
      Tt(e.array, n, a, fe, u, p);
      for (var v = 0; v < e.channels; ++v)
        for (var F = y[v], U = 0; U < y[v].size; ++U)
          Wt(u, F.start + U, F.nx, F.size, F.ny, F.nx * F.size, b);
      Rt(M, u, p);
      for (
        var H = 0, W = new Uint8Array(u.buffer.byteLength), se = 0;
        se < e.lines;
        se++
      )
        for (var ue = 0; ue < e.channels; ue++) {
          var F = y[ue],
            ve = F.nx * F.size,
            Me = new Uint8Array(u.buffer, F.end * 2, ve * 2);
          (W.set(Me, H), (H += ve * 2), (F.end += ve));
        }
      return new DataView(W.buffer);
    }
    function Dt(e) {
      var n = e.array.slice(e.offset.value, e.offset.value + e.size),
        a = kt(n);
      const u = e.lines * e.channels * e.width,
        d = e.type == 1 ? new Uint16Array(u) : new Uint32Array(u);
      let p = 0,
        y = 0;
      const v = new Array(4);
      for (let x = 0; x < e.lines; x++)
        for (let S = 0; S < e.channels; S++) {
          let M = 0;
          switch (e.type) {
            case 1:
              ((v[0] = p), (v[1] = v[0] + e.width), (p = v[1] + e.width));
              for (let b = 0; b < e.width; ++b) {
                const fe = (a[v[0]++] << 8) | a[v[1]++];
                ((M += fe), (d[y] = M), y++);
              }
              break;
            case 2:
              ((v[0] = p),
                (v[1] = v[0] + e.width),
                (v[2] = v[1] + e.width),
                (p = v[2] + e.width));
              for (let b = 0; b < e.width; ++b) {
                const fe =
                  (a[v[0]++] << 24) | (a[v[1]++] << 16) | (a[v[2]++] << 8);
                ((M += fe), (d[y] = M), y++);
              }
              break;
          }
        }
      return new DataView(d.buffer);
    }
    function at(e) {
      var n = e.viewer,
        a = { value: e.offset.value },
        u = new Uint8Array(e.width * e.lines * (e.channels * e.type * 2)),
        d = {
          version: w(n, a),
          unknownUncompressedSize: w(n, a),
          unknownCompressedSize: w(n, a),
          acCompressedSize: w(n, a),
          dcCompressedSize: w(n, a),
          rleCompressedSize: w(n, a),
          rleUncompressedSize: w(n, a),
          rleRawSize: w(n, a),
          totalAcUncompressedCount: w(n, a),
          totalDcUncompressedCount: w(n, a),
          acCompression: w(n, a),
        };
      if (d.version < 2)
        throw (
          "EXRLoader.parse: " +
          vt.compression +
          " version " +
          d.version +
          " is unsupported"
        );
      for (var p = new Array(), y = xe(n, a) - 2; y > 0; ) {
        var v = ot(n.buffer, a),
          x = s(n, a),
          S = (x >> 2) & 3,
          M = (x >> 4) - 1,
          b = new Int8Array([M])[0],
          fe = s(n, a);
        (p.push({ name: v, index: b, type: fe, compression: S }),
          (y -= v.length + 3));
      }
      for (
        var F = vt.channels, U = new Array(e.channels), H = 0;
        H < e.channels;
        ++H
      ) {
        var W = (U[H] = {}),
          se = F[H];
        ((W.name = se.name),
          (W.compression = 0),
          (W.decoded = !1),
          (W.type = se.pixelType),
          (W.pLinear = se.pLinear),
          (W.width = e.width),
          (W.height = e.lines));
      }
      for (var ue = { idx: new Array(3) }, ve = 0; ve < e.channels; ++ve)
        for (var W = U[ve], H = 0; H < p.length; ++H) {
          var Me = p[H];
          W.name == Me.name &&
            ((W.compression = Me.compression),
            Me.index >= 0 && (ue.idx[Me.index] = ve),
            (W.offset = ve));
        }
      if (d.acCompressedSize > 0)
        switch (d.acCompression) {
          case 0:
            var de = new Uint16Array(d.totalAcUncompressedCount);
            Tt(
              e.array,
              n,
              a,
              d.acCompressedSize,
              de,
              d.totalAcUncompressedCount,
            );
            break;
          case 1:
            var he = e.array.slice(
                a.value,
                a.value + d.totalAcUncompressedCount,
              ),
              Ze = kt(he),
              de = new Uint16Array(Ze.buffer);
            a.value += d.totalAcUncompressedCount;
            break;
        }
      if (d.dcCompressedSize > 0) {
        var we = { array: e.array, offset: a, size: d.dcCompressedSize },
          Ye = new Uint16Array(ft(we).buffer);
        a.value += d.dcCompressedSize;
      }
      if (d.rleRawSize > 0) {
        var he = e.array.slice(a.value, a.value + d.rleCompressedSize),
          Ze = kt(he),
          wt = At(Ze.buffer);
        a.value += d.rleCompressedSize;
      }
      for (var Oe = 0, ce = new Array(U.length), H = 0; H < ce.length; ++H)
        ce[H] = new Array();
      for (var _e = 0; _e < e.lines; ++_e)
        for (var me = 0; me < U.length; ++me)
          (ce[me].push(Oe), (Oe += U[me].width * e.type * 2));
      $t(ue, ce, U, de, Ye, u);
      for (var H = 0; H < U.length; ++H) {
        var W = U[H];
        if (!W.decoded)
          switch (W.compression) {
            case 2:
              for (var ae = 0, Fe = 0, _e = 0; _e < e.lines; ++_e) {
                for (var rt = ce[H][ae], Ae = 0; Ae < W.width; ++Ae) {
                  for (var We = 0; We < 2 * W.type; ++We)
                    u[rt++] = wt[Fe + We * W.width * W.height];
                  Fe++;
                }
                ae++;
              }
              break;
            default:
              throw "EXRLoader.parse: unsupported channel compression";
          }
      }
      return new DataView(u.buffer);
    }
    function ot(e, n) {
      for (var a = new Uint8Array(e), u = 0; a[n.value + u] != 0; ) u += 1;
      var d = new TextDecoder().decode(a.slice(n.value, n.value + u));
      return ((n.value = n.value + u + 1), d);
    }
    function Qt(e, n, a) {
      var u = new TextDecoder().decode(
        new Uint8Array(e).slice(n.value, n.value + a),
      );
      return ((n.value = n.value + a), u);
    }
    function Pt(e, n) {
      var a = Qe(e, n),
        u = Ee(e, n);
      return [a, u];
    }
    function Jt(e, n) {
      var a = Ee(e, n),
        u = Ee(e, n);
      return [a, u];
    }
    function Qe(e, n) {
      var a = e.getInt32(n.value, !0);
      return ((n.value = n.value + 4), a);
    }
    function Ee(e, n) {
      var a = e.getUint32(n.value, !0);
      return ((n.value = n.value + 4), a);
    }
    function it(e, n) {
      var a = e[n.value];
      return ((n.value = n.value + 1), a);
    }
    function s(e, n) {
      var a = e.getUint8(n.value);
      return ((n.value = n.value + 1), a);
    }
    const w = function (e, n) {
      let a;
      return (
        "getBigInt64" in DataView.prototype
          ? (a = Number(e.getBigInt64(n.value, !0)))
          : (a =
              e.getUint32(n.value + 4, !0) +
              Number(e.getUint32(n.value, !0) << 32)),
        (n.value += 8),
        a
      );
    };
    function L(e, n) {
      var a = e.getFloat32(n.value, !0);
      return ((n.value += 4), a);
    }
    function K(e, n) {
      return ut.toHalfFloat(L(e, n));
    }
    function _(e) {
      var n = (e & 31744) >> 10,
        a = e & 1023;
      return (
        (e >> 15 ? -1 : 1) *
        (n
          ? n === 31
            ? a
              ? NaN
              : 1 / 0
            : Math.pow(2, n - 15) * (1 + a / 1024)
          : 6103515625e-14 * (a / 1024))
      );
    }
    function xe(e, n) {
      var a = e.getUint16(n.value, !0);
      return ((n.value += 2), a);
    }
    function He(e, n) {
      return _(xe(e, n));
    }
    function vr(e, n, a, u) {
      for (var d = a.value, p = []; a.value < d + u - 1; ) {
        var y = ot(n, a),
          v = Qe(e, a),
          x = s(e, a);
        a.value += 3;
        var S = Qe(e, a),
          M = Qe(e, a);
        p.push({
          name: y,
          pixelType: v,
          pLinear: x,
          xSampling: S,
          ySampling: M,
        });
      }
      return ((a.value += 1), p);
    }
    function Nt(e, n) {
      var a = L(e, n),
        u = L(e, n),
        d = L(e, n),
        p = L(e, n),
        y = L(e, n),
        v = L(e, n),
        x = L(e, n),
        S = L(e, n);
      return {
        redX: a,
        redY: u,
        greenX: d,
        greenY: p,
        blueX: y,
        blueY: v,
        whiteX: x,
        whiteY: S,
      };
    }
    function ke(e, n) {
      var a = [
          "NO_COMPRESSION",
          "RLE_COMPRESSION",
          "ZIPS_COMPRESSION",
          "ZIP_COMPRESSION",
          "PIZ_COMPRESSION",
          "PXR24_COMPRESSION",
          "B44_COMPRESSION",
          "B44A_COMPRESSION",
          "DWAA_COMPRESSION",
          "DWAB_COMPRESSION",
        ],
        u = s(e, n);
      return a[u];
    }
    function Be(e, n) {
      var a = Ee(e, n),
        u = Ee(e, n),
        d = Ee(e, n),
        p = Ee(e, n);
      return { xMin: a, yMin: u, xMax: d, yMax: p };
    }
    function Je(e, n) {
      var a = ["INCREASING_Y"],
        u = s(e, n);
      return a[u];
    }
    function et(e, n) {
      var a = L(e, n),
        u = L(e, n);
      return [a, u];
    }
    function tt(e, n) {
      var a = L(e, n),
        u = L(e, n),
        d = L(e, n);
      return [a, u, d];
    }
    function st(e, n, a, u, d) {
      if (u === "string" || u === "stringvector" || u === "iccProfile")
        return Qt(n, a, d);
      if (u === "chlist") return vr(e, n, a, d);
      if (u === "chromaticities") return Nt(e, a);
      if (u === "compression") return ke(e, a);
      if (u === "box2i") return Be(e, a);
      if (u === "lineOrder") return Je(e, a);
      if (u === "float") return L(e, a);
      if (u === "v2f") return et(e, a);
      if (u === "v3f") return tt(e, a);
      if (u === "int") return Qe(e, a);
      if (u === "rational") return Pt(e, a);
      if (u === "timecode") return Jt(e, a);
      if (u === "preview") return ((a.value += d), "skipped");
      a.value += d;
    }
    function Gr(e, n, a) {
      const u = {};
      if (e.getUint32(0, !0) != 20000630)
        throw "THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";
      u.version = e.getUint8(4);
      const d = e.getUint8(5);
      ((u.spec = {
        singleTile: !!(d & 2),
        longName: !!(d & 4),
        deepFormat: !!(d & 8),
        multiPart: !!(d & 16),
      }),
        (a.value = 8));
      for (var p = !0; p; ) {
        var y = ot(n, a);
        if (y == 0) p = !1;
        else {
          var v = ot(n, a),
            x = Ee(e, a),
            S = st(e, n, a, v, x);
          S === void 0
            ? console.warn(
                `EXRLoader.parse: skipped unknown header attribute type '${v}'.`,
              )
            : (u[y] = S);
        }
      }
      if ((d & -5) != 0)
        throw (
          console.error("EXRHeader:", u),
          "THREE.EXRLoader: provided file is currently unsupported."
        );
      return u;
    }
    function Yr(e, n, a, u, d) {
      const p = {
        size: 0,
        viewer: n,
        array: a,
        offset: u,
        width: e.dataWindow.xMax - e.dataWindow.xMin + 1,
        height: e.dataWindow.yMax - e.dataWindow.yMin + 1,
        channels: e.channels.length,
        bytesPerLine: null,
        lines: null,
        inputSize: null,
        type: e.channels[0].pixelType,
        uncompress: null,
        getter: null,
        format: null,
        [yt ? "colorSpace" : "encoding"]: null,
      };
      switch (e.compression) {
        case "NO_COMPRESSION":
          ((p.lines = 1), (p.uncompress = nt));
          break;
        case "RLE_COMPRESSION":
          ((p.lines = 1), (p.uncompress = qe));
          break;
        case "ZIPS_COMPRESSION":
          ((p.lines = 1), (p.uncompress = ft));
          break;
        case "ZIP_COMPRESSION":
          ((p.lines = 16), (p.uncompress = ft));
          break;
        case "PIZ_COMPRESSION":
          ((p.lines = 32), (p.uncompress = qt));
          break;
        case "PXR24_COMPRESSION":
          ((p.lines = 16), (p.uncompress = Dt));
          break;
        case "DWAA_COMPRESSION":
          ((p.lines = 32), (p.uncompress = at));
          break;
        case "DWAB_COMPRESSION":
          ((p.lines = 256), (p.uncompress = at));
          break;
        default:
          throw "EXRLoader.parse: " + e.compression + " is unsupported";
      }
      if (((p.scanlineBlockSize = p.lines), p.type == 1))
        switch (d) {
          case Ge:
            ((p.getter = He), (p.inputSize = 2));
            break;
          case Ce:
            ((p.getter = xe), (p.inputSize = 2));
            break;
        }
      else if (p.type == 2)
        switch (d) {
          case Ge:
            ((p.getter = L), (p.inputSize = 4));
            break;
          case Ce:
            ((p.getter = K), (p.inputSize = 4));
        }
      else
        throw (
          "EXRLoader.parse: unsupported pixelType " +
          p.type +
          " for " +
          e.compression +
          "."
        );
      p.blockCount = (e.dataWindow.yMax + 1) / p.scanlineBlockSize;
      for (var y = 0; y < p.blockCount; y++) w(n, u);
      p.outputChannels = p.channels == 3 ? 4 : p.channels;
      const v = p.width * p.height * p.outputChannels;
      switch (d) {
        case Ge:
          ((p.byteArray = new Float32Array(v)),
            p.channels < p.outputChannels && p.byteArray.fill(1, 0, v));
          break;
        case Ce:
          ((p.byteArray = new Uint16Array(v)),
            p.channels < p.outputChannels && p.byteArray.fill(15360, 0, v));
          break;
        default:
          console.error("THREE.EXRLoader: unsupported type: ", d);
          break;
      }
      return (
        (p.bytesPerLine = p.width * p.inputSize * p.channels),
        p.outputChannels == 4 ? (p.format = bt) : (p.format = Qr),
        yt ? (p.colorSpace = "srgb-linear") : (p.encoding = 3e3),
        p
      );
    }
    const Ut = new DataView(r),
      Wr = new Uint8Array(r),
      gt = { value: 0 },
      vt = Gr(Ut, r, gt),
      X = Yr(vt, Ut, Wr, gt, this.type),
      wr = { value: 0 },
      Xr = { R: 0, G: 1, B: 2, A: 3, Y: 0 };
    for (let e = 0; e < X.height / X.scanlineBlockSize; e++) {
      const n = Ee(Ut, gt);
      ((X.size = Ee(Ut, gt)),
        (X.lines =
          n + X.scanlineBlockSize > X.height
            ? X.height - n
            : X.scanlineBlockSize));
      const u = X.size < X.lines * X.bytesPerLine ? X.uncompress(X) : nt(X);
      gt.value += X.size;
      for (let d = 0; d < X.scanlineBlockSize; d++) {
        const p = d + e * X.scanlineBlockSize;
        if (p >= X.height) break;
        for (let y = 0; y < X.channels; y++) {
          const v = Xr[vt.channels[y].name];
          for (let x = 0; x < X.width; x++) {
            wr.value =
              (d * (X.channels * X.width) + y * X.width + x) * X.inputSize;
            const S =
              (X.height - 1 - p) * (X.width * X.outputChannels) +
              x * X.outputChannels +
              v;
            X.byteArray[S] = X.getter(u, wr);
          }
        }
      }
    }
    return {
      header: vt,
      width: X.width,
      height: X.height,
      data: X.byteArray,
      format: X.format,
      [yt ? "colorSpace" : "encoding"]: X[yt ? "colorSpace" : "encoding"],
      type: this.type,
    };
  }
  setDataType(r) {
    return ((this.type = r), this);
  }
  load(r, o, t, l) {
    function c(h, m) {
      (yt ? (h.colorSpace = m.colorSpace) : (h.encoding = m.encoding),
        (h.minFilter = Pe),
        (h.magFilter = Pe),
        (h.generateMipmaps = !1),
        (h.flipY = !1),
        o && o(h, m));
    }
    return super.load(r, c, t, l);
  }
}
function Gn(i, r, o) {
  const t = ye((j) => j.size),
    l = ye((j) => j.viewport),
    c = typeof i == "number" ? i : t.width * l.dpr,
    h = t.height * l.dpr,
    m = (typeof i == "number" ? o : i) || {},
    { samples: f = 0, depth: g, ...I } = m,
    A = g ?? m.depthBuffer,
    R = D.useMemo(() => {
      const j = new lr(c, h, { minFilter: Pe, magFilter: Pe, type: Ce, ...I });
      return (A && (j.depthTexture = new Jr(c, h, Ge)), (j.samples = f), j);
    }, []);
  return (
    D.useLayoutEffect(() => {
      (R.setSize(c, h), f && (R.samples = f));
    }, [f, R, c, h]),
    D.useEffect(() => () => R.dispose(), []),
    R
  );
}
const Yn = (i) => typeof i == "function",
  Wn = D.forwardRef(
    (
      {
        envMap: i,
        resolution: r = 256,
        frames: o = 1 / 0,
        makeDefault: t,
        children: l,
        ...c
      },
      h,
    ) => {
      const m = ye(({ set: N }) => N),
        f = ye(({ camera: N }) => N),
        g = ye(({ size: N }) => N),
        I = D.useRef(null);
      D.useImperativeHandle(h, () => I.current, []);
      const A = D.useRef(null),
        R = Gn(r);
      (D.useLayoutEffect(() => {
        c.manual || (I.current.aspect = g.width / g.height);
      }, [g, c]),
        D.useLayoutEffect(() => {
          I.current.updateProjectionMatrix();
        }));
      let j = 0,
        Z = null;
      const J = Yn(l);
      return (
        Mt((N) => {
          J &&
            (o === 1 / 0 || j < o) &&
            ((A.current.visible = !1),
            N.gl.setRenderTarget(R),
            (Z = N.scene.background),
            i && (N.scene.background = i),
            N.gl.render(N.scene, I.current),
            (N.scene.background = Z),
            N.gl.setRenderTarget(null),
            (A.current.visible = !0),
            j++);
        }),
        D.useLayoutEffect(() => {
          if (t) {
            const N = f;
            return (
              m(() => ({ camera: I.current })),
              () => m(() => ({ camera: N }))
            );
          }
        }, [I, t, m]),
        D.createElement(
          D.Fragment,
          null,
          D.createElement("perspectiveCamera", St({ ref: I }, c), !J && l),
          D.createElement("group", { ref: A }, J && l(R.texture)),
        )
      );
    },
  ),
  Xn = D.forwardRef(
    (
      {
        makeDefault: i,
        camera: r,
        regress: o,
        domElement: t,
        enableDamping: l = !0,
        keyEvents: c = !1,
        onChange: h,
        onStart: m,
        onEnd: f,
        ...g
      },
      I,
    ) => {
      const A = ye((C) => C.invalidate),
        R = ye((C) => C.camera),
        j = ye((C) => C.gl),
        Z = ye((C) => C.events),
        J = ye((C) => C.setEvents),
        N = ye((C) => C.set),
        q = ye((C) => C.get),
        Q = ye((C) => C.performance),
        le = r || R,
        ee = t || Z.connected || j.domElement,
        P = D.useMemo(() => new zn(le), [le]);
      return (
        Mt(() => {
          P.enabled && P.update();
        }, -1),
        D.useEffect(
          () => (
            c && P.connect(c === !0 ? ee : c),
            P.connect(ee),
            () => {
              P.dispose();
            }
          ),
          [c, ee, o, P, A],
        ),
        D.useEffect(() => {
          const C = (T) => {
              (A(), o && Q.regress(), h && h(T));
            },
            te = (T) => {
              m && m(T);
            },
            E = (T) => {
              f && f(T);
            };
          return (
            P.addEventListener("change", C),
            P.addEventListener("start", te),
            P.addEventListener("end", E),
            () => {
              (P.removeEventListener("start", te),
                P.removeEventListener("end", E),
                P.removeEventListener("change", C));
            }
          );
        }, [h, m, f, P, A, J]),
        D.useEffect(() => {
          if (i) {
            const C = q().controls;
            return (N({ controls: P }), () => N({ controls: C }));
          }
        }, [i, P]),
        D.createElement(
          "primitive",
          St({ ref: I, object: P, enableDamping: l }, g),
        )
      );
    },
  ),
  kr = (i, r, o) => {
    let t;
    switch (i) {
      case ar:
        t = new Uint8ClampedArray(r * o * 4);
        break;
      case Ce:
        t = new Uint16Array(r * o * 4);
        break;
      case sn:
        t = new Uint32Array(r * o * 4);
        break;
      case on:
        t = new Int8Array(r * o * 4);
        break;
      case an:
        t = new Int16Array(r * o * 4);
        break;
      case nn:
        t = new Int32Array(r * o * 4);
        break;
      case Ge:
        t = new Float32Array(r * o * 4);
        break;
      default:
        throw new Error("Unsupported data type");
    }
    return t;
  };
let jt;
const $n = (i, r, o, t) => {
  if (jt !== void 0) return jt;
  const l = new lr(1, 1, t);
  r.setRenderTarget(l);
  const c = new sr(new Cr(), new rn({ color: 16777215 }));
  (r.render(c, o), r.setRenderTarget(null));
  const h = kr(i, l.width, l.height);
  return (
    r.readRenderTargetPixels(l, 0, 0, l.width, l.height, h),
    l.dispose(),
    c.geometry.dispose(),
    c.material.dispose(),
    (jt = h[0] !== 0),
    jt
  );
};
class ur {
  _renderer;
  _rendererIsDisposable = !1;
  _material;
  _scene;
  _camera;
  _quad;
  _renderTarget;
  _width;
  _height;
  _type;
  _colorSpace;
  _supportsReadPixels = !0;
  constructor(r) {
    ((this._width = r.width),
      (this._height = r.height),
      (this._type = r.type),
      (this._colorSpace = r.colorSpace));
    const o = {
      format: bt,
      depthBuffer: !1,
      stencilBuffer: !1,
      type: this._type,
      colorSpace: this._colorSpace,
      anisotropy:
        r.renderTargetOptions?.anisotropy !== void 0
          ? r.renderTargetOptions?.anisotropy
          : 1,
      generateMipmaps:
        r.renderTargetOptions?.generateMipmaps !== void 0
          ? r.renderTargetOptions?.generateMipmaps
          : !1,
      magFilter:
        r.renderTargetOptions?.magFilter !== void 0
          ? r.renderTargetOptions?.magFilter
          : Pe,
      minFilter:
        r.renderTargetOptions?.minFilter !== void 0
          ? r.renderTargetOptions?.minFilter
          : Pe,
      samples:
        r.renderTargetOptions?.samples !== void 0
          ? r.renderTargetOptions?.samples
          : void 0,
      wrapS:
        r.renderTargetOptions?.wrapS !== void 0
          ? r.renderTargetOptions?.wrapS
          : $e,
      wrapT:
        r.renderTargetOptions?.wrapT !== void 0
          ? r.renderTargetOptions?.wrapT
          : $e,
    };
    if (
      ((this._material = r.material),
      r.renderer
        ? (this._renderer = r.renderer)
        : ((this._renderer = ur.instantiateRenderer()),
          (this._rendererIsDisposable = !0)),
      (this._scene = new Ar()),
      (this._camera = new zt()),
      this._camera.position.set(0, 0, 10),
      (this._camera.left = -0.5),
      (this._camera.right = 0.5),
      (this._camera.top = 0.5),
      (this._camera.bottom = -0.5),
      this._camera.updateProjectionMatrix(),
      !$n(this._type, this._renderer, this._camera, o))
    ) {
      let t;
      (this._type === Ce &&
        (t = this._renderer.extensions.has("EXT_color_buffer_float")
          ? Ge
          : void 0),
        t !== void 0
          ? (console.warn(
              `This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${Ge}`,
            ),
            (this._type = t))
          : ((this._supportsReadPixels = !1),
            console.warn(
              "This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown",
            )));
    }
    ((this._quad = new sr(new Cr(), this._material)),
      this._quad.geometry.computeBoundingBox(),
      this._scene.add(this._quad),
      (this._renderTarget = new lr(this.width, this.height, o)),
      (this._renderTarget.texture.mapping =
        r.renderTargetOptions?.mapping !== void 0
          ? r.renderTargetOptions?.mapping
          : Zt));
  }
  static instantiateRenderer() {
    const r = new en();
    return (r.setSize(128, 128), r);
  }
  render = () => {
    this._renderer.setRenderTarget(this._renderTarget);
    try {
      this._renderer.render(this._scene, this._camera);
    } catch (r) {
      throw (this._renderer.setRenderTarget(null), r);
    }
    this._renderer.setRenderTarget(null);
  };
  toArray() {
    if (!this._supportsReadPixels)
      throw new Error("Can't read pixels in this browser");
    const r = kr(this._type, this._width, this._height);
    return (
      this._renderer.readRenderTargetPixels(
        this._renderTarget,
        0,
        0,
        this._width,
        this._height,
        r,
      ),
      r
    );
  }
  toDataTexture(r) {
    const o = new tn(
      this.toArray(),
      this.width,
      this.height,
      bt,
      this._type,
      r?.mapping || Zt,
      r?.wrapS || $e,
      r?.wrapT || $e,
      r?.magFilter || Pe,
      r?.minFilter || Pe,
      r?.anisotropy || 1,
      nr,
    );
    return (
      (o.generateMipmaps =
        r?.generateMipmaps !== void 0 ? r?.generateMipmaps : !1),
      o
    );
  }
  disposeOnDemandRenderer() {
    (this._renderer.setRenderTarget(null),
      this._rendererIsDisposable &&
        (this._renderer.dispose(), this._renderer.forceContextLoss()));
  }
  dispose(r) {
    (this.disposeOnDemandRenderer(),
      r && this.renderTarget.dispose(),
      this.material instanceof cr &&
        Object.values(this.material.uniforms).forEach((o) => {
          o.value instanceof ht && o.value.dispose();
        }),
      Object.values(this.material).forEach((o) => {
        o instanceof ht && o.dispose();
      }),
      this.material.dispose(),
      this._quad.geometry.dispose());
  }
  get width() {
    return this._width;
  }
  set width(r) {
    ((this._width = r), this._renderTarget.setSize(this._width, this._height));
  }
  get height() {
    return this._height;
  }
  set height(r) {
    ((this._height = r), this._renderTarget.setSize(this._width, this._height));
  }
  get renderer() {
    return this._renderer;
  }
  get renderTarget() {
    return this._renderTarget;
  }
  set renderTarget(r) {
    ((this._renderTarget = r),
      (this._width = r.width),
      (this._height = r.height));
  }
  get material() {
    return this._material;
  }
  get type() {
    return this._type;
  }
  get colorSpace() {
    return this._colorSpace;
  }
}
class Br extends Error {}
class jr extends Error {}
const Et = (i, r, o) => {
    const t = new RegExp(`${r}="([^"]*)"`, "i").exec(i);
    if (t) return t[1];
    const l = new RegExp(`<${r}[^>]*>([\\s\\S]*?)</${r}>`, "i").exec(i);
    if (l) {
      const c = l[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);
      return c && c.length === 3
        ? c.map((h) => h.replace(/<\/?rdf:li>/g, ""))
        : l[1].trim();
    }
    if (o !== void 0) return o;
    throw new Error(`Can't find ${r} in gainmap metadata`);
  },
  Vn = (i) => {
    let r;
    typeof TextDecoder < "u"
      ? (r = new TextDecoder().decode(i))
      : (r = i.toString());
    let o = r.indexOf("<x:xmpmeta");
    for (; o !== -1; ) {
      const t = r.indexOf("x:xmpmeta>", o),
        l = r.slice(o, t + 10);
      try {
        const c = Et(l, "hdrgm:GainMapMin", "0"),
          h = Et(l, "hdrgm:GainMapMax"),
          m = Et(l, "hdrgm:Gamma", "1"),
          f = Et(l, "hdrgm:OffsetSDR", "0.015625"),
          g = Et(l, "hdrgm:OffsetHDR", "0.015625"),
          I = /hdrgm:HDRCapacityMin="([^"]*)"/.exec(l),
          A = I ? I[1] : "0",
          R = /hdrgm:HDRCapacityMax="([^"]*)"/.exec(l);
        if (!R) throw new Error("Incomplete gainmap metadata");
        const j = R[1];
        return {
          gainMapMin: Array.isArray(c)
            ? c.map((Z) => parseFloat(Z))
            : [parseFloat(c), parseFloat(c), parseFloat(c)],
          gainMapMax: Array.isArray(h)
            ? h.map((Z) => parseFloat(Z))
            : [parseFloat(h), parseFloat(h), parseFloat(h)],
          gamma: Array.isArray(m)
            ? m.map((Z) => parseFloat(Z))
            : [parseFloat(m), parseFloat(m), parseFloat(m)],
          offsetSdr: Array.isArray(f)
            ? f.map((Z) => parseFloat(Z))
            : [parseFloat(f), parseFloat(f), parseFloat(f)],
          offsetHdr: Array.isArray(g)
            ? g.map((Z) => parseFloat(Z))
            : [parseFloat(g), parseFloat(g), parseFloat(g)],
          hdrCapacityMin: parseFloat(A),
          hdrCapacityMax: parseFloat(j),
        };
      } catch {}
      o = r.indexOf("<x:xmpmeta", t);
    }
  };
class Kn {
  options;
  constructor(r) {
    this.options = {
      debug: r && r.debug !== void 0 ? r.debug : !1,
      extractFII: r && r.extractFII !== void 0 ? r.extractFII : !0,
      extractNonFII: r && r.extractNonFII !== void 0 ? r.extractNonFII : !0,
    };
  }
  extract(r) {
    return new Promise((o, t) => {
      const l = this.options.debug,
        c = new DataView(r.buffer);
      if (c.getUint16(0) !== 65496) {
        t(new Error("Not a valid jpeg"));
        return;
      }
      const h = c.byteLength;
      let m = 2,
        f = 0,
        g;
      for (; m < h; ) {
        if (++f > 250) {
          t(new Error(`Found no marker after ${f} loops 😵`));
          return;
        }
        if (c.getUint8(m) !== 255) {
          t(
            new Error(
              `Not a valid marker at offset 0x${m.toString(16)}, found: 0x${c.getUint8(m).toString(16)}`,
            ),
          );
          return;
        }
        if (
          ((g = c.getUint8(m + 1)),
          l && console.log(`Marker: ${g.toString(16)}`),
          g === 226)
        ) {
          l && console.log("Found APP2 marker (0xffe2)");
          const I = m + 4;
          if (c.getUint32(I) === 1297106432) {
            const A = I + 4;
            let R;
            if (c.getUint16(A) === 18761) R = !1;
            else if (c.getUint16(A) === 19789) R = !0;
            else {
              t(new Error("No valid endianness marker found in TIFF header"));
              return;
            }
            if (c.getUint16(A + 2, !R) !== 42) {
              t(new Error("Not valid TIFF data! (no 0x002A marker)"));
              return;
            }
            const j = c.getUint32(A + 4, !R);
            if (j < 8) {
              t(new Error("Not valid TIFF data! (First offset less than 8)"));
              return;
            }
            const Z = A + j,
              J = c.getUint16(Z, !R),
              N = Z + 2;
            let q = 0;
            for (let P = N; P < N + 12 * J; P += 12)
              c.getUint16(P, !R) === 45057 && (q = c.getUint32(P + 8, !R));
            const le = Z + 2 + J * 12 + 4,
              ee = [];
            for (let P = le; P < le + q * 16; P += 16) {
              const C = {
                MPType: c.getUint32(P, !R),
                size: c.getUint32(P + 4, !R),
                dataOffset: c.getUint32(P + 8, !R),
                dependantImages: c.getUint32(P + 12, !R),
                start: -1,
                end: -1,
                isFII: !1,
              };
              (C.dataOffset
                ? ((C.start = A + C.dataOffset), (C.isFII = !1))
                : ((C.start = 0), (C.isFII = !0)),
                (C.end = C.start + C.size),
                ee.push(C));
            }
            if (this.options.extractNonFII && ee.length) {
              const P = new Blob([c]),
                C = [];
              for (const te of ee) {
                if (te.isFII && !this.options.extractFII) continue;
                const E = P.slice(te.start, te.end + 1, "image/jpeg");
                C.push(E);
              }
              o(C);
            }
          }
        }
        m += 2 + c.getUint16(m + 2);
      }
    });
  }
}
const qn = async (i) => {
    const r = Vn(i);
    if (!r) throw new jr("Gain map XMP metadata not found");
    const t = await new Kn({ extractFII: !0, extractNonFII: !0 }).extract(i);
    if (t.length !== 2) throw new Br("Gain map recovery image not found");
    return {
      sdr: new Uint8Array(await t[0].arrayBuffer()),
      gainMap: new Uint8Array(await t[1].arrayBuffer()),
      metadata: r,
    };
  },
  Ir = (i) =>
    new Promise((r, o) => {
      const t = document.createElement("img");
      ((t.onload = () => {
        r(t);
      }),
        (t.onerror = (l) => {
          o(l);
        }),
        (t.src = URL.createObjectURL(i)));
    });
class Qn extends cn {
  _renderer;
  _renderTargetOptions;
  _internalLoadingManager;
  _config;
  constructor(r, o) {
    (super(o),
      (this._config = r),
      r.renderer && (this._renderer = r.renderer),
      (this._internalLoadingManager = new ln()));
  }
  setRenderer(r) {
    return ((this._renderer = r), this);
  }
  setRenderTargetOptions(r) {
    return ((this._renderTargetOptions = r), this);
  }
  prepareQuadRenderer() {
    this._renderer ||
      console.warn(
        "WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.",
      );
    const r = this._config.createMaterial({
      gainMapMax: [1, 1, 1],
      gainMapMin: [0, 0, 0],
      gamma: [1, 1, 1],
      offsetHdr: [1, 1, 1],
      offsetSdr: [1, 1, 1],
      hdrCapacityMax: 1,
      hdrCapacityMin: 0,
      maxDisplayBoost: 1,
      gainMap: new ht(),
      sdr: new ht(),
    });
    return this._config.createQuadRenderer({
      width: 16,
      height: 16,
      type: Ce,
      colorSpace: nr,
      material: r,
      renderer: this._renderer,
      renderTargetOptions: this._renderTargetOptions,
    });
  }
  async processImages(r, o, t) {
    const l = o ? new Blob([o], { type: "image/jpeg" }) : void 0,
      c = new Blob([r], { type: "image/jpeg" });
    let h,
      m,
      f = !1;
    if (typeof createImageBitmap > "u") {
      const g = await Promise.all([l ? Ir(l) : Promise.resolve(void 0), Ir(c)]);
      ((m = g[0]), (h = g[1]), (f = t === "flipY"));
    } else {
      const g = await Promise.all([
        l
          ? createImageBitmap(l, { imageOrientation: t || "flipY" })
          : Promise.resolve(void 0),
        createImageBitmap(c, { imageOrientation: t || "flipY" }),
      ]);
      ((m = g[0]), (h = g[1]));
    }
    return { sdrImage: h, gainMapImage: m, needsFlip: f };
  }
  createTextures(r, o, t) {
    const l = new ht(
      o || new ImageData(2, 2),
      Zt,
      $e,
      $e,
      Pe,
      _r,
      bt,
      ar,
      1,
      nr,
    );
    ((l.flipY = t), (l.needsUpdate = !0));
    const c = new ht(r, Zt, $e, $e, Pe, _r, bt, ar, 1, un);
    return ((c.flipY = t), (c.needsUpdate = !0), { gainMap: l, sdr: c });
  }
  updateQuadRenderer(r, o, t, l, c) {
    ((r.width = o.width),
      (r.height = o.height),
      (r.material.gainMap = t),
      (r.material.sdr = l),
      (r.material.gainMapMin = c.gainMapMin),
      (r.material.gainMapMax = c.gainMapMax),
      (r.material.offsetHdr = c.offsetHdr),
      (r.material.offsetSdr = c.offsetSdr),
      (r.material.gamma = c.gamma),
      (r.material.hdrCapacityMin = c.hdrCapacityMin),
      (r.material.hdrCapacityMax = c.hdrCapacityMax),
      (r.material.maxDisplayBoost = Math.pow(2, c.hdrCapacityMax)),
      (r.material.needsUpdate = !0));
  }
}
const Jn = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
  ea = `
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`;
class ta extends cr {
  _maxDisplayBoost;
  _hdrCapacityMin;
  _hdrCapacityMax;
  constructor({
    gamma: r,
    offsetHdr: o,
    offsetSdr: t,
    gainMapMin: l,
    gainMapMax: c,
    maxDisplayBoost: h,
    hdrCapacityMin: m,
    hdrCapacityMax: f,
    sdr: g,
    gainMap: I,
  }) {
    (super({
      name: "GainMapDecoderMaterial",
      vertexShader: Jn,
      fragmentShader: ea,
      uniforms: {
        sdr: { value: g },
        gainMap: { value: I },
        gamma: { value: new be(1 / r[0], 1 / r[1], 1 / r[2]) },
        offsetHdr: { value: new be().fromArray(o) },
        offsetSdr: { value: new be().fromArray(t) },
        gainMapMin: { value: new be().fromArray(l) },
        gainMapMax: { value: new be().fromArray(c) },
        weightFactor: { value: (Math.log2(h) - m) / (f - m) },
      },
      blending: hn,
      depthTest: !1,
      depthWrite: !1,
    }),
      (this._maxDisplayBoost = h),
      (this._hdrCapacityMin = m),
      (this._hdrCapacityMax = f),
      (this.needsUpdate = !0),
      (this.uniformsNeedUpdate = !0));
  }
  get sdr() {
    return this.uniforms.sdr.value;
  }
  set sdr(r) {
    this.uniforms.sdr.value = r;
  }
  get gainMap() {
    return this.uniforms.gainMap.value;
  }
  set gainMap(r) {
    this.uniforms.gainMap.value = r;
  }
  get offsetHdr() {
    return this.uniforms.offsetHdr.value.toArray();
  }
  set offsetHdr(r) {
    this.uniforms.offsetHdr.value.fromArray(r);
  }
  get offsetSdr() {
    return this.uniforms.offsetSdr.value.toArray();
  }
  set offsetSdr(r) {
    this.uniforms.offsetSdr.value.fromArray(r);
  }
  get gainMapMin() {
    return this.uniforms.gainMapMin.value.toArray();
  }
  set gainMapMin(r) {
    this.uniforms.gainMapMin.value.fromArray(r);
  }
  get gainMapMax() {
    return this.uniforms.gainMapMax.value.toArray();
  }
  set gainMapMax(r) {
    this.uniforms.gainMapMax.value.fromArray(r);
  }
  get gamma() {
    const r = this.uniforms.gamma.value;
    return [1 / r.x, 1 / r.y, 1 / r.z];
  }
  set gamma(r) {
    const o = this.uniforms.gamma.value;
    ((o.x = 1 / r[0]), (o.y = 1 / r[1]), (o.z = 1 / r[2]));
  }
  get hdrCapacityMin() {
    return this._hdrCapacityMin;
  }
  set hdrCapacityMin(r) {
    ((this._hdrCapacityMin = r), this.calculateWeight());
  }
  get hdrCapacityMax() {
    return this._hdrCapacityMax;
  }
  set hdrCapacityMax(r) {
    ((this._hdrCapacityMax = r), this.calculateWeight());
  }
  get maxDisplayBoost() {
    return this._maxDisplayBoost;
  }
  set maxDisplayBoost(r) {
    ((this._maxDisplayBoost = Math.max(1, Math.min(65504, r))),
      this.calculateWeight());
  }
  calculateWeight() {
    const r =
      (Math.log2(this._maxDisplayBoost) - this._hdrCapacityMin) /
      (this._hdrCapacityMax - this._hdrCapacityMin);
    this.uniforms.weightFactor.value = Math.max(0, Math.min(1, r));
  }
}
class zr extends Qn {
  constructor(r, o) {
    super(
      {
        renderer: r,
        createMaterial: (t) => new ta(t),
        createQuadRenderer: (t) => new ur(t),
      },
      o,
    );
  }
  async render(r, o, t, l) {
    const {
        sdrImage: c,
        gainMapImage: h,
        needsFlip: m,
      } = await this.processImages(t, l, "flipY"),
      { gainMap: f, sdr: g } = this.createTextures(c, h, m);
    (this.updateQuadRenderer(r, c, f, g, o), r.render());
  }
}
class ra extends zr {
  load([r, o, t], l, c, h) {
    const m = this.prepareQuadRenderer();
    let f, g, I;
    const A = async () => {
      if (f && g && I) {
        try {
          await this.render(m, I, f, g);
        } catch (T) {
          (this.manager.itemError(r),
            this.manager.itemError(o),
            this.manager.itemError(t),
            typeof h == "function" && h(T),
            m.disposeOnDemandRenderer());
          return;
        }
        (typeof l == "function" && l(m),
          this.manager.itemEnd(r),
          this.manager.itemEnd(o),
          this.manager.itemEnd(t),
          m.disposeOnDemandRenderer());
      }
    };
    let R = !0,
      j = 0,
      Z = 0,
      J = !0,
      N = 0,
      q = 0,
      Q = !0,
      le = 0,
      ee = 0;
    const P = () => {
      if (typeof c == "function") {
        const T = j + N + le,
          O = Z + q + ee,
          V = R && J && Q;
        c(
          new ProgressEvent("progress", {
            lengthComputable: V,
            loaded: O,
            total: T,
          }),
        );
      }
    };
    (this.manager.itemStart(r),
      this.manager.itemStart(o),
      this.manager.itemStart(t));
    const C = new Ht(this._internalLoadingManager);
    (C.setResponseType("arraybuffer"),
      C.setRequestHeader(this.requestHeader),
      C.setPath(this.path),
      C.setWithCredentials(this.withCredentials),
      C.load(
        r,
        async (T) => {
          if (typeof T == "string") throw new Error("Invalid sdr buffer");
          ((f = T), await A());
        },
        (T) => {
          ((R = T.lengthComputable), (Z = T.loaded), (j = T.total), P());
        },
        (T) => {
          (this.manager.itemError(r), typeof h == "function" && h(T));
        },
      ));
    const te = new Ht(this._internalLoadingManager);
    (te.setResponseType("arraybuffer"),
      te.setRequestHeader(this.requestHeader),
      te.setPath(this.path),
      te.setWithCredentials(this.withCredentials),
      te.load(
        o,
        async (T) => {
          if (typeof T == "string") throw new Error("Invalid gainmap buffer");
          ((g = T), await A());
        },
        (T) => {
          ((J = T.lengthComputable), (q = T.loaded), (N = T.total), P());
        },
        (T) => {
          (this.manager.itemError(o), typeof h == "function" && h(T));
        },
      ));
    const E = new Ht(this._internalLoadingManager);
    return (
      E.setRequestHeader(this.requestHeader),
      E.setPath(this.path),
      E.setWithCredentials(this.withCredentials),
      E.load(
        t,
        async (T) => {
          if (typeof T != "string") throw new Error("Invalid metadata string");
          ((I = JSON.parse(T)), await A());
        },
        (T) => {
          ((Q = T.lengthComputable), (ee = T.loaded), (le = T.total), P());
        },
        (T) => {
          (this.manager.itemError(t), typeof h == "function" && h(T));
        },
      ),
      m
    );
  }
}
class na extends zr {
  load(r, o, t, l) {
    const c = this.prepareQuadRenderer(),
      h = new Ht(this._internalLoadingManager);
    return (
      h.setResponseType("arraybuffer"),
      h.setRequestHeader(this.requestHeader),
      h.setPath(this.path),
      h.setWithCredentials(this.withCredentials),
      this.manager.itemStart(r),
      h.load(
        r,
        async (m) => {
          if (typeof m == "string")
            throw new Error(
              "Invalid buffer, received [string], was expecting [ArrayBuffer]",
            );
          const f = new Uint8Array(m);
          let g, I, A;
          try {
            const R = await qn(f);
            ((g = R.sdr), (I = R.gainMap), (A = R.metadata));
          } catch (R) {
            if (R instanceof jr || R instanceof Br)
              (console.warn(
                `Failure to reconstruct an HDR image from ${r}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`,
              ),
                (A = {
                  gainMapMin: [0, 0, 0],
                  gainMapMax: [1, 1, 1],
                  gamma: [1, 1, 1],
                  hdrCapacityMin: 0,
                  hdrCapacityMax: 1,
                  offsetHdr: [0, 0, 0],
                  offsetSdr: [0, 0, 0],
                }),
                (g = f));
            else throw R;
          }
          try {
            await this.render(c, A, g.buffer, I?.buffer);
          } catch (R) {
            (this.manager.itemError(r),
              typeof l == "function" && l(R),
              c.disposeOnDemandRenderer());
            return;
          }
          (typeof o == "function" && o(c),
            this.manager.itemEnd(r),
            c.disposeOnDemandRenderer());
        },
        t,
        (m) => {
          (this.manager.itemError(r), typeof l == "function" && l(m));
        },
      ),
      c
    );
  }
}
const xt = {
    apartment: "lebombo_1k.hdr",
    city: "potsdamer_platz_1k.hdr",
    dawn: "kiara_1_dawn_1k.hdr",
    forest: "forest_slope_1k.hdr",
    lobby: "st_fagans_interior_1k.hdr",
    night: "dikhololo_night_1k.hdr",
    park: "rooitou_park_1k.hdr",
    studio: "studio_small_03_1k.hdr",
    sunset: "venice_sunset_1k.hdr",
    warehouse: "empty_warehouse_01_1k.hdr",
  },
  Hr =
    "https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/",
  dt = (i) => Array.isArray(i),
  hr = ["/px.png", "/nx.png", "/py.png", "/ny.png", "/pz.png", "/nz.png"];
function Yt({
  files: i = hr,
  path: r = "",
  preset: o = void 0,
  colorSpace: t = void 0,
  extensions: l,
} = {}) {
  o && (dr(o), (i = xt[o]), (r = Hr));
  const c = dt(i),
    { extension: h, isCubemap: m } = pr(i),
    f = mr(h);
  if (!f) throw new Error("useEnvironment: Unrecognized file extension: " + i);
  const g = ye((j) => j.gl);
  D.useLayoutEffect(() => {
    if (h !== "webp" && h !== "jpg" && h !== "jpeg") return;
    function j() {
      Gt.clear(f, c ? [i] : i);
    }
    g.domElement.addEventListener("webglcontextlost", j, { once: !0 });
  }, [i, g.domElement]);
  const I = Gt(f, c ? [i] : i, (j) => {
    ((h === "webp" || h === "jpg" || h === "jpeg") && j.setRenderer(g),
      j.setPath == null || j.setPath(r),
      l && l(j));
  });
  let A = c ? I[0] : I;
  if (h === "jpg" || h === "jpeg" || h === "webp") {
    var R;
    A = (R = A.renderTarget) == null ? void 0 : R.texture;
  }
  return (
    (A.mapping = m ? dn : pn),
    (A.colorSpace = t ?? (m ? "srgb" : "srgb-linear")),
    A
  );
}
const aa = { files: hr, path: "", preset: void 0, extensions: void 0 };
Yt.preload = (i) => {
  const r = { ...aa, ...i };
  let { files: o, path: t = "" } = r;
  const { preset: l, extensions: c } = r;
  l && (dr(l), (o = xt[l]), (t = Hr));
  const { extension: h } = pr(o);
  if (h === "webp" || h === "jpg" || h === "jpeg")
    throw new Error("useEnvironment: Preloading gainmaps is not supported");
  const m = mr(h);
  if (!m) throw new Error("useEnvironment: Unrecognized file extension: " + o);
  Gt.preload(m, dt(o) ? [o] : o, (f) => {
    (f.setPath == null || f.setPath(t), c && c(f));
  });
};
const oa = { files: hr, preset: void 0 };
Yt.clear = (i) => {
  const r = { ...oa, ...i };
  let { files: o } = r;
  const { preset: t } = r;
  t && (dr(t), (o = xt[t]));
  const { extension: l } = pr(o),
    c = mr(l);
  if (!c) throw new Error("useEnvironment: Unrecognized file extension: " + o);
  Gt.clear(c, dt(o) ? [o] : o);
};
function dr(i) {
  if (!(i in xt))
    throw new Error("Preset must be one of: " + Object.keys(xt).join(", "));
}
function pr(i) {
  var r;
  const o = dt(i) && i.length === 6,
    t = dt(i) && i.length === 3 && i.some((h) => h.endsWith("json")),
    l = dt(i) ? i[0] : i;
  return {
    extension: o
      ? "cube"
      : t
        ? "webp"
        : l.startsWith("data:application/exr")
          ? "exr"
          : l.startsWith("data:application/hdr")
            ? "hdr"
            : l.startsWith("data:image/jpeg")
              ? "jpg"
              : (r = l.split(".").pop()) == null ||
                  (r = r.split("?")) == null ||
                  (r = r.shift()) == null
                ? void 0
                : r.toLowerCase(),
    isCubemap: o,
    isGainmap: t,
  };
}
function mr(i) {
  return i === "cube"
    ? mn
    : i === "hdr"
      ? Hn
      : i === "exr"
        ? Zn
        : i === "jpg" || i === "jpeg"
          ? na
          : i === "webp"
            ? ra
            : null;
}
const ia = (i) => i.current && i.current.isScene,
  sa = (i) => (ia(i) ? i.current : i);
function fr(i, r, o, t, l = {}) {
  var c, h, m, f;
  l = {
    backgroundBlurriness: 0,
    backgroundIntensity: 1,
    backgroundRotation: [0, 0, 0],
    environmentIntensity: 1,
    environmentRotation: [0, 0, 0],
    ...l,
  };
  const g = sa(r || o),
    I = g.background,
    A = g.environment,
    R = {
      backgroundBlurriness: g.backgroundBlurriness,
      backgroundIntensity: g.backgroundIntensity,
      backgroundRotation:
        (c =
          (h = g.backgroundRotation) == null || h.clone == null
            ? void 0
            : h.clone()) !== null && c !== void 0
          ? c
          : [0, 0, 0],
      environmentIntensity: g.environmentIntensity,
      environmentRotation:
        (m =
          (f = g.environmentRotation) == null || f.clone == null
            ? void 0
            : f.clone()) !== null && m !== void 0
          ? m
          : [0, 0, 0],
    };
  return (
    i !== "only" && (g.environment = t),
    i && (g.background = t),
    br(g, l),
    () => {
      (i !== "only" && (g.environment = A), i && (g.background = I), br(g, R));
    }
  );
}
function gr({ scene: i, background: r = !1, map: o, ...t }) {
  const l = ye((c) => c.scene);
  return (
    D.useLayoutEffect(() => {
      if (o) return fr(r, i, l, o, t);
    }),
    null
  );
}
function Zr({
  background: i = !1,
  scene: r,
  blur: o,
  backgroundBlurriness: t,
  backgroundIntensity: l,
  backgroundRotation: c,
  environmentIntensity: h,
  environmentRotation: m,
  ...f
}) {
  const g = Yt(f),
    I = ye((A) => A.scene);
  return (
    D.useLayoutEffect(() =>
      fr(i, r, I, g, {
        backgroundBlurriness: o ?? t,
        backgroundIntensity: l,
        backgroundRotation: c,
        environmentIntensity: h,
        environmentRotation: m,
      }),
    ),
    D.useEffect(
      () => () => {
        g.dispose();
      },
      [g],
    ),
    null
  );
}
function ca({
  children: i,
  near: r = 0.1,
  far: o = 1e3,
  resolution: t = 256,
  frames: l = 1,
  map: c,
  background: h = !1,
  blur: m,
  backgroundBlurriness: f,
  backgroundIntensity: g,
  backgroundRotation: I,
  environmentIntensity: A,
  environmentRotation: R,
  scene: j,
  files: Z,
  path: J,
  preset: N = void 0,
  extensions: q,
}) {
  const Q = ye((E) => E.gl),
    le = ye((E) => E.scene),
    ee = D.useRef(null),
    [P] = D.useState(() => new Ar()),
    C = D.useMemo(() => {
      const E = new gn(t);
      return ((E.texture.type = Ce), E);
    }, [t]);
  (D.useEffect(
    () => () => {
      C.dispose();
    },
    [C],
  ),
    D.useLayoutEffect(() => {
      if (l === 1) {
        const E = Q.autoClear;
        ((Q.autoClear = !0), ee.current.update(Q, P), (Q.autoClear = E));
      }
      return fr(h, j, le, C.texture, {
        backgroundBlurriness: m ?? f,
        backgroundIntensity: g,
        backgroundRotation: I,
        environmentIntensity: A,
        environmentRotation: R,
      });
    }, [i, P, C.texture, j, le, h, l, Q]));
  let te = 1;
  return (
    Mt(() => {
      if (l === 1 / 0 || te < l) {
        const E = Q.autoClear;
        ((Q.autoClear = !0), ee.current.update(Q, P), (Q.autoClear = E), te++);
      }
    }),
    D.createElement(
      D.Fragment,
      null,
      vn(
        D.createElement(
          D.Fragment,
          null,
          i,
          D.createElement("cubeCamera", { ref: ee, args: [r, o, C] }),
          Z || N
            ? D.createElement(Zr, {
                background: !0,
                files: Z,
                preset: N,
                path: J,
                extensions: q,
              })
            : c
              ? D.createElement(gr, { background: !0, map: c, extensions: q })
              : null,
        ),
        P,
      ),
    )
  );
}
function la(i) {
  var r, o, t, l;
  const c = Yt(i),
    h = i.map || c;
  (D.useMemo(() => fn({ GroundProjectedEnvImpl: Fn }), []),
    D.useEffect(
      () => () => {
        c.dispose();
      },
      [c],
    ));
  const m = D.useMemo(() => [h], [h]),
    f = (r = i.ground) == null ? void 0 : r.height,
    g = (o = i.ground) == null ? void 0 : o.radius,
    I =
      (t = (l = i.ground) == null ? void 0 : l.scale) !== null && t !== void 0
        ? t
        : 1e3;
  return D.createElement(
    D.Fragment,
    null,
    D.createElement(gr, St({}, i, { map: h })),
    D.createElement("groundProjectedEnvImpl", {
      args: m,
      scale: I,
      height: f,
      radius: g,
    }),
  );
}
function ua(i) {
  return i.ground
    ? D.createElement(la, i)
    : i.map
      ? D.createElement(gr, i)
      : i.children
        ? D.createElement(ca, i)
        : D.createElement(Zr, i);
}
function ha({ progress: i }) {
  const r = D.useRef(null),
    o = D.useRef(null),
    t = D.useRef(null),
    l = D.useRef(null),
    c = D.useRef(null);
  return (
    Mt((h) => {
      (r.current &&
        ((r.current.rotation.y = h.clock.elapsedTime * 0.3),
        (r.current.rotation.x = Math.sin(h.clock.elapsedTime * 0.2) * 0.1)),
        t.current && (t.current.rotation.z = h.clock.elapsedTime * 0.5),
        l.current && (l.current.rotation.z = -h.clock.elapsedTime * 0.3),
        c.current && (c.current.rotation.z = h.clock.elapsedTime * 0.2));
    }),
    k.jsxs("group", {
      "code-path": "src/components/LoadingScreen.tsx:31:5",
      ref: r,
      children: [
        k.jsxs("mesh", {
          "code-path": "src/components/LoadingScreen.tsx:33:7",
          ref: o,
          position: [0, 0, 0],
          children: [
            k.jsx("cylinderGeometry", {
              "code-path": "src/components/LoadingScreen.tsx:34:9",
              args: [1.5, 1.5, 0.8, 64],
            }),
            k.jsx("meshStandardMaterial", {
              "code-path": "src/components/LoadingScreen.tsx:35:9",
              color: "#1a1a1a",
              metalness: 0.9,
              roughness: 0.2,
            }),
          ],
        }),
        k.jsxs("mesh", {
          "code-path": "src/components/LoadingScreen.tsx:43:7",
          position: [0, 0, 0.41],
          children: [
            k.jsx("circleGeometry", {
              "code-path": "src/components/LoadingScreen.tsx:44:9",
              args: [1.3, 64],
            }),
            k.jsx("meshPhysicalMaterial", {
              "code-path": "src/components/LoadingScreen.tsx:45:9",
              color: "#F59E0B",
              metalness: 0.1,
              roughness: 0.05,
              transmission: 0.9,
              thickness: 0.5,
              emissive: "#F59E0B",
              emissiveIntensity: 0.2,
            }),
          ],
        }),
        k.jsxs("mesh", {
          "code-path": "src/components/LoadingScreen.tsx:57:7",
          ref: t,
          position: [0, 0, 0.42],
          children: [
            k.jsx("torusGeometry", {
              "code-path": "src/components/LoadingScreen.tsx:58:9",
              args: [1.4, 0.05, 16, 100],
            }),
            k.jsx("meshStandardMaterial", {
              "code-path": "src/components/LoadingScreen.tsx:59:9",
              color: "#F59E0B",
              metalness: 1,
              roughness: 0.1,
              emissive: "#F59E0B",
              emissiveIntensity: 0.5,
            }),
          ],
        }),
        k.jsxs("mesh", {
          "code-path": "src/components/LoadingScreen.tsx:69:7",
          ref: l,
          position: [0, 0, 0.43],
          children: [
            k.jsx("torusGeometry", {
              "code-path": "src/components/LoadingScreen.tsx:70:9",
              args: [1.2, 0.03, 16, 100],
            }),
            k.jsx("meshStandardMaterial", {
              "code-path": "src/components/LoadingScreen.tsx:71:9",
              color: "#FCD34D",
              metalness: 1,
              roughness: 0.1,
              emissive: "#FCD34D",
              emissiveIntensity: 0.3,
            }),
          ],
        }),
        k.jsxs("mesh", {
          "code-path": "src/components/LoadingScreen.tsx:81:7",
          ref: c,
          position: [0, 0, 0.44],
          children: [
            k.jsx("torusGeometry", {
              "code-path": "src/components/LoadingScreen.tsx:82:9",
              args: [1, 0.02, 16, 100],
            }),
            k.jsx("meshStandardMaterial", {
              "code-path": "src/components/LoadingScreen.tsx:83:9",
              color: "#FFFFFF",
              metalness: 1,
              roughness: 0,
              emissive: "#FFFFFF",
              emissiveIntensity: 0.8,
            }),
          ],
        }),
        k.jsxs("mesh", {
          "code-path": "src/components/LoadingScreen.tsx:93:7",
          position: [0, 0, -0.41],
          children: [
            k.jsx("cylinderGeometry", {
              "code-path": "src/components/LoadingScreen.tsx:94:9",
              args: [1.6, 1.6, 0.3, 64],
            }),
            k.jsx("meshStandardMaterial", {
              "code-path": "src/components/LoadingScreen.tsx:95:9",
              color: "#0a0a0a",
              metalness: 0.8,
              roughness: 0.4,
            }),
          ],
        }),
        Array.from({ length: 24 }).map((h, m) =>
          k.jsxs(
            "mesh",
            {
              "code-path": "src/components/LoadingScreen.tsx:104:9",
              position: [
                Math.cos((m / 24) * Math.PI * 2) * 1.6,
                Math.sin((m / 24) * Math.PI * 2) * 1.6,
                -0.41,
              ],
              rotation: [0, 0, (m / 24) * Math.PI * 2],
              children: [
                k.jsx("boxGeometry", {
                  "code-path": "src/components/LoadingScreen.tsx:113:11",
                  args: [0.08, 0.02, 0.25],
                }),
                k.jsx("meshStandardMaterial", {
                  "code-path": "src/components/LoadingScreen.tsx:114:11",
                  color: "#2a2a2a",
                  metalness: 0.5,
                  roughness: 0.8,
                }),
              ],
            },
            m,
          ),
        ),
        k.jsxs("mesh", {
          "code-path": "src/components/LoadingScreen.tsx:119:7",
          position: [0, 0, 0.5],
          rotation: [0, 0, 0],
          children: [
            k.jsx("ringGeometry", {
              "code-path": "src/components/LoadingScreen.tsx:120:9",
              args: [1.7, 1.75, 64, 1, 0, (i / 100) * Math.PI * 2],
            }),
            k.jsx("meshStandardMaterial", {
              "code-path": "src/components/LoadingScreen.tsx:121:9",
              color: "#F59E0B",
              metalness: 1,
              roughness: 0.1,
              emissive: "#F59E0B",
              emissiveIntensity: 0.8,
              side: Tr,
            }),
          ],
        }),
        k.jsx("pointLight", {
          "code-path": "src/components/LoadingScreen.tsx:132:7",
          position: [0, 0, 2],
          color: "#F59E0B",
          intensity: 2,
          distance: 10,
        }),
        k.jsx("pointLight", {
          "code-path": "src/components/LoadingScreen.tsx:133:7",
          position: [2, 2, 1],
          color: "#FCD34D",
          intensity: 1,
          distance: 8,
        }),
        k.jsx("pointLight", {
          "code-path": "src/components/LoadingScreen.tsx:134:7",
          position: [-2, -2, 1],
          color: "#D97706",
          intensity: 1,
          distance: 8,
        }),
      ],
    })
  );
}
function da() {
  const i = D.useRef(null),
    r = 100,
    o = new Float32Array(r * 3),
    t = new Float32Array(r * 3);
  for (let h = 0; h < r; h++)
    ((o[h * 3] = (Math.random() - 0.5) * 15),
      (o[h * 3 + 1] = (Math.random() - 0.5) * 15),
      (o[h * 3 + 2] = (Math.random() - 0.5) * 10),
      (t[h * 3] = 0.96 + Math.random() * 0.04),
      (t[h * 3 + 1] = 0.62 + Math.random() * 0.38),
      (t[h * 3 + 2] = 0.04 + Math.random() * 0.07));
  Mt((h) => {
    i.current &&
      ((i.current.rotation.y = h.clock.elapsedTime * 0.05),
      (i.current.rotation.x = Math.sin(h.clock.elapsedTime * 0.03) * 0.1));
  });
  const l = new Sr(o, 3),
    c = new Sr(t, 3);
  return k.jsxs("points", {
    "code-path": "src/components/LoadingScreen.tsx:168:5",
    ref: i,
    children: [
      k.jsxs("bufferGeometry", {
        "code-path": "src/components/LoadingScreen.tsx:169:7",
        children: [
          k.jsx("primitive", {
            "code-path": "src/components/LoadingScreen.tsx:170:9",
            attach: "attributes-position",
            object: l,
          }),
          k.jsx("primitive", {
            "code-path": "src/components/LoadingScreen.tsx:171:9",
            attach: "attributes-color",
            object: c,
          }),
        ],
      }),
      k.jsx("pointsMaterial", {
        "code-path": "src/components/LoadingScreen.tsx:173:7",
        size: 0.05,
        vertexColors: !0,
        transparent: !0,
        opacity: 0.8,
        sizeAttenuation: !0,
      }),
    ],
  });
}
function ga({ onComplete: i }) {
  const [r, o] = D.useState(0),
    [t, l] = D.useState(!1);
  return (
    D.useEffect(() => {
      const c = setInterval(() => {
        o((h) =>
          h >= 100
            ? (clearInterval(c),
              setTimeout(() => {
                (l(!0), setTimeout(i, 800));
              }, 500),
              100)
            : h + Math.random() * 3 + 1,
        );
      }, 50);
      return () => clearInterval(c);
    }, [i]),
    k.jsxs("div", {
      "code-path": "src/components/LoadingScreen.tsx:208:5",
      className: `fixed inset-0 z-50 bg-dark-950 flex flex-col items-center justify-center transition-opacity duration-800 ${t ? "opacity-0 pointer-events-none" : "opacity-100"}`,
      children: [
        k.jsx("div", {
          "code-path": "src/components/LoadingScreen.tsx:212:7",
          className: "w-full h-[60vh] absolute top-0",
          children: k.jsxs(wn, {
            "code-path": "src/components/LoadingScreen.tsx:213:9",
            children: [
              k.jsx(Wn, {
                "code-path": "src/components/LoadingScreen.tsx:214:11",
                makeDefault: !0,
                position: [0, 0, 6],
              }),
              k.jsx(Xn, {
                "code-path": "src/components/LoadingScreen.tsx:215:11",
                enableZoom: !1,
                enablePan: !1,
                autoRotate: !0,
                autoRotateSpeed: 0.5,
              }),
              k.jsx("ambientLight", {
                "code-path": "src/components/LoadingScreen.tsx:216:11",
                intensity: 0.3,
              }),
              k.jsx("directionalLight", {
                "code-path": "src/components/LoadingScreen.tsx:217:11",
                position: [5, 5, 5],
                intensity: 1,
              }),
              k.jsx(ha, {
                "code-path": "src/components/LoadingScreen.tsx:218:11",
                progress: r,
              }),
              k.jsx(da, {
                "code-path": "src/components/LoadingScreen.tsx:219:11",
              }),
              k.jsx(ua, {
                "code-path": "src/components/LoadingScreen.tsx:220:11",
                preset: "city",
              }),
            ],
          }),
        }),
        k.jsxs("div", {
          "code-path": "src/components/LoadingScreen.tsx:225:7",
          className: "absolute bottom-[20vh] text-center",
          children: [
            k.jsx("h2", {
              "code-path": "src/components/LoadingScreen.tsx:226:9",
              className:
                "text-3xl md:text-4xl font-bold text-gradient-gold mb-4 tracking-wider",
              children: "VIDEASTE",
            }),
            k.jsx("p", {
              "code-path": "src/components/LoadingScreen.tsx:229:9",
              className:
                "text-dark-400 text-sm md:text-base mb-6 tracking-widest uppercase",
              children: "Loading Experience",
            }),
            k.jsx("div", {
              "code-path": "src/components/LoadingScreen.tsx:234:9",
              className:
                "w-64 md:w-80 h-1 bg-dark-800 rounded-full overflow-hidden",
              children: k.jsx("div", {
                "code-path": "src/components/LoadingScreen.tsx:235:11",
                className:
                  "h-full bg-gradient-gold transition-all duration-100 ease-out",
                style: { width: `${Math.min(r, 100)}%` },
              }),
            }),
            k.jsxs("p", {
              "code-path": "src/components/LoadingScreen.tsx:242:9",
              className: "text-gold-400 text-lg font-mono mt-3",
              children: [Math.min(Math.round(r), 100), "%"],
            }),
          ],
        }),
        k.jsxs("div", {
          "code-path": "src/components/LoadingScreen.tsx:248:7",
          className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2",
          children: [
            k.jsx("div", {
              "code-path": "src/components/LoadingScreen.tsx:249:9",
              className: "w-2 h-2 rounded-full bg-gold-500 loading-dot",
            }),
            k.jsx("div", {
              "code-path": "src/components/LoadingScreen.tsx:250:9",
              className: "w-2 h-2 rounded-full bg-gold-500 loading-dot",
            }),
            k.jsx("div", {
              "code-path": "src/components/LoadingScreen.tsx:251:9",
              className: "w-2 h-2 rounded-full bg-gold-500 loading-dot",
            }),
          ],
        }),
      ],
    })
  );
}
export { ga as default };
