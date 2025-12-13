import { F as q, Z as a, _ as e, as as Zo, Y as n, r as k, G as _e, K as ue, X as V, a2 as U, a4 as N, a5 as D, a9 as M, D as c, a0 as t, a6 as L, a7 as A, B as it, a3 as Te, aa as te, a8 as E, a1 as B, U as Xo, at as ba, w as he, z as xs, ac as $t, $ as Ze, C as Ve, x as lt, V as Jo, I as jt, ae as Z, al as He, au as $a, y as kt, av as Yo, aw as Qo, ao as bn, aj as ft, ak as Nt, ax as Ca, M as Cn, ay as el, af as ye, ag as fe, E as ze, m as Ke, az as tl, aA as sl, ab as ka, k as Ee, J as kn, ar as Ct, am as Dt, aB as zs, aC as ut, aD as ns, aE as nl, aF as al, aG as Ta, aH as ol, aI as ll, aJ as wa, aK as il, aL as cl, aM as ul, T as La, aN as rl, aO as dl, aP as _l, aQ as vl, aR as pl, aS as ml, ap as Ia, aq as Sa, P as oa } from "./modules-aa8ffe67.js";
import {
   G as rt,
   S as je,
   l as la,
   h as gl,
   g as pe,
   s as hl,
   i as yl,
   j as fl,
   k as Bs,
   _ as H,
   m as Ue,
   A as de,
   n as bl,
   a as Jt,
   o as Gs,
   L as Ga,
   p as $l,
   q as Cl,
   r as kl,
   t as $n,
   v as Rt,
   w as Tl,
   x as Gt,
   y as xt,
   z as xa,
   B as Ba,
   C as Be,
   E as Tn,
   F as wl,
   H as Ll,
   I as Il,
   J as Sl,
   K as Gl,
   M as xl,
   O as Bl,
   P as Nl,
   Q as Rl,
   D as Mt,
   R as Zt,
   T as gt,
   U as Ut,
   V as ct,
   W as Ml,
   X as Na,
   Y as Ra,
   Z as wn,
   $ as Dl,
   a0 as Ma,
   a1 as Al,
   a2 as Pl,
   a3 as Ol,
   a4 as Da,
   a5 as Aa,
   a6 as Ln,
   a7 as In,
   a8 as Vl,
   a9 as hs,
   aa as Ns,
   ab as Wl,
   ac as Pa,
   ad as Oa,
   ae as Hl,
   af as Sn,
   ag as zl,
   ah as El,
   ai as Fl,
   aj as Va,
   ak as jl,
   al as Wa,
   am as Ul,
   an as ql,
   ao as Ha,
   ap as za,
   aq as Kl,
   ar as Zl,
   as as Xl,
   at as Jl,
   au as Yl,
   av as Vs,
   aw as It,
   ax as St,
   ay as ia,
   az as ca,
   aA as Ql,
   aB as Ea,
   aC as Fa,
   aD as ei,
   aE as ti,
   aF as si,
   aG as ja,
   aH as ni,
   aI as ai,
   aJ as oi,
   aK as Ua,
   aL as li,
   aM as ii,
   aN as ci,
   aO as ui,
   u as ri,
   aP as Es,
   aQ as di,
   aR as qa,
   aS as Gn,
   aT as _i,
   aU as vi,
   aV as fs,
   aW as pi,
   aX as mi,
   aY as gi,
   aZ as bs,
   a_ as hi,
   a$ as yi,
   b0 as fi,
   b1 as Ka,
   b2 as bi,
   b3 as Za,
   b4 as $i,
   b5 as Ci,
   b6 as ki,
   b7 as Ti,
   b8 as wi,
} from "./page-activity-6d456111.js";
const Li = ["xlink:href"],
   Ii = {
      __name: "svgIcons",
      props: { name: { type: String, required: !0 }, color: { type: String, default: "" } },
      setup(l) {
         const s = l,
            o = q(() => `#icon-${s.name}`),
            u = q(() => (s.name ? `svg-icon icon-${s.name}` : "svg-icon"));
         return (v, p) => (n(), a("svg", Zo({ class: u.value }, v.$attrs, { style: { color: l.color } }), [e("use", { "xlink:href": o.value }, null, 8, Li)], 16));
      },
   },
   ua = k(!1);
function Xa() {
   const { locale: l } = _e(),
      s = rt(),
      o = ue();
   async function u(i, _) {
      hl(i), (l.value = i), s.updateLanguage(i), await yl(i), fl(Bs.global.t), localStorage.setItem("needUpd", "1"), _ === 1 ? v() : (ua.value = !1);
   }
   const v = () => {
         o.back();
      },
      p = q(() => {
         let i = 0;
         const _ = je().getLanguage,
            r = [];
         if (_) {
            const g = _ == null ? void 0 : _.replace("th", "tha").split("|");
            g == null ||
               g.forEach(m => {
                  la.forEach($ => {
                     (m.toLowerCase().indexOf($.key.toLowerCase()) !== -1 || $.key.toLowerCase().indexOf(m.toLowerCase()) !== -1) && (r.push($), i++);
                  });
               });
         }
         return s.getLanguage || s.updateLanguage(gl()), i == 0 ? la : r;
      });
   return { onClick: u, languagesList: p, getIcons: pe, locale: l, goBack: v, getLangName: i => p.value.find(r => r.key === i).key.toLocaleUpperCase(), show: ua };
}
const Si = ["onClick"],
   Gi = { class: "item-title" },
   xi = ["src"],
   Bi = { key: 0 },
   Ni = { key: 1 },
   Ri = V({
      __name: "index",
      props: { type: { type: Number, default: 1 } },
      setup(l) {
         const { onClick: s, getIcons: o, languagesList: u, locale: v } = Xa();
         return (p, d) => {
            const i = U("van-radio"),
               _ = U("van-radio-group");
            return (
               n(),
               a(
                  "div",
                  { class: M(l.type === 2 ? "list info" : "list") },
                  [
                     (n(!0),
                     a(
                        N,
                        null,
                        D(c(u), (r, g) => (n(), a("div", { class: M(["item ar-1px-b", r.key == c(v) ? "checked" : ""]), key: g, onClick: m => c(s)(r.key, l.type) }, [e("div", Gi, [e("img", { src: c(o)("languages", r.key) }, null, 8, xi), l.type === 2 ? (n(), a("span", Bi, t(r.key.toLocaleUpperCase()), 1)) : (n(), a("span", Ni, t(r.name), 1))]), L(_, { modelValue: c(v), "onUpdate:modelValue": d[0] || (d[0] = m => (it(v) ? (v.value = m) : null)) }, { default: A(() => [L(i, { "checked-color": "#F74747", name: r.key }, null, 8, ["name"])]), _: 2 }, 1032, ["modelValue"])], 10, Si))),
                        128,
                     )),
                  ],
                  2,
               )
            );
         };
      },
   });
const Mi = H(Ri, [["__scopeId", "data-v-21118f41"]]),
   Di = { class: "img" },
   Ai = V({
      __name: "LangPopup",
      setup(l) {
         const { getLangName: s, getIcons: o, locale: u, show: v } = Xa(),
            p = je(),
            d = q(() => p.getLoginChangeLanguage == "1");
         return (i, _) => {
            const r = U("van-popup"),
               g = Te("lazy");
            return n(), a("div", null, [d.value ? (n(), a("div", { key: 0, class: "right", onClick: _[0] || (_[0] = m => (v.value = !0)) }, [e("div", Di, [te(e("img", null, null, 512), [[g, c(o)("languages", c(u))]])]), E(" " + t(c(s)(c(u))), 1)])) : B("", !0), L(r, { show: c(v), "onUpdate:show": _[1] || (_[1] = m => (it(v) ? (v.value = m) : null)), class: "popup", position: "bottom", teleport: "body" }, { default: A(() => [L(Mi, { type: 2 })]), _: 1 }, 8, ["show"])]);
         };
      },
   });
const Pi = H(Ai, [["__scopeId", "data-v-8800aff6"]]),
   Oi = {
      moneyup: /^(?!0+$)(?!0*\.0*$)\d{1,11}(\.\d{1,2})?$/,
      redNum: /^([1-9]\d{0,2}|1000)$/,
      requiredNum: /^.{0,20}$/,
      passReg2: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,30}$/,
      passReg3: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/,
      outmoneypwd: /^\d{6}$/,
      name: /^[^~`!@#$%^&*+-/=/_()|<\{\}\[\],.:'"//\?\\/>》《]{1,30}$/,
      tuiName: /^[a-zA-Z\s\u4e00-\u9fa50-9][a-zA-Z0-9\s\u4e00-\u9fa5]{1,23}$/,
      yaoma: /^[A-Za-z0-9|A-Za-z|0-9]{6}$/,
      httpCheck: /^((ht|f)tps?):\/\/([\w-]+(\.[\w-]+)*\/?)+(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?$/,
      password: /^[A-Za-z0-9~`!@#$%^&*()_+-='",;.?/|]{6,12}$/,
      account: /^(?![a-zA-Z]+$)[a-zA-Z0-9|0-9]{7,11}$/,
      email: /^[0-9A-Za-zd]+([-_.][0-9A-Za-zd]+)*@([0-9A-Za-zd]+[-.]{0,1})[A-Za-zd]{1,5}$/,
      email1: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      length1: /^.{6,30}$/,
      phone: /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
      phone1: /^(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
      moneys2: /^(-?)\d{1,9}(\.\d{1,2})?$/,
      moneys21: /^\d{1,4}(\.\d{1,2})?$/,
      ip: /^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/,
      int: /^[1-9]\d*$/,
      verifyname: /[^a-zA-Z\s+$]/g,
      inputrule: /^[0-9,|]+$/,
   },
   Vi = { moneyup: "validateDesc1", redNum: "validateDesc2", requiredNum: "validateDesc3", passReg2: "pswRequirements", outmoneypwd: "validateDesc5", name: "validateDesc6", tuiName: "validateDesc7", endSpace: "validateDesc8", yaoma: "validateDesc9", httpCheck: "validateDesc10", password: "validateDesc11", account: "validateDesc13", email: "validateDesc14", length1: "validateDesc15", phone: "validateDesc16", moneys2: "validateDesc17", moneys21: "validateDesc18", ip: "validateDesc19", int: "validateDesc20", verifyname: "validateDesc21", inputtip: "validateDesc22" },
   Wi = { class: "gamesList__container" },
   Hi = { class: "gamesList__container-title" },
   zi = V({
      __name: "GameList",
      props: { gameData: {}, title: {}, gameType: {} },
      setup(l) {
         return (s, o) => (n(), a("div", Wi, [e("div", Hi, t(s.title), 1)]));
      },
   });
const Ei = H(zi, [["__scopeId", "data-v-0866f8a5"]]),
   Ja = Symbol();
var Ya = (l, s) => {
   const o = l.__vccOpts || l;
   for (const [u, v] of s) o[u] = v;
   return o;
};
const Fi = V({
      name: "FunTabItem",
      props: { title: String, name: [String, Number], badge: [String, Number] },
      setup(l) {
         const s = Xo(Ja),
            o = k(),
            u = q(() => ((s == null ? void 0 : s.activeValue.value) === l.name ? { color: s == null ? void 0 : s.activeColor.value } : {})),
            v = () => {
               s == null || s.setActiveValue(l.name);
            },
            p = { name: ba(l, "name"), el: o };
         return (
            he(() => {
               var d;
               (d = s.addItem) == null || d.call(s, p);
            }),
            xs(() => {
               var d;
               (d = s.removeItem) == null || d.call(s, p);
            }),
            { el: o, style: u, handleClick: v }
         );
      },
   }),
   ji = { class: "fun-tab-item__wrap" },
   Ui = { class: "fun-tab-item__label" },
   qi = { key: 0, class: "fun-tab-item__badge" };
function Ki(l, s, o, u, v, p) {
   return n(), a("div", { ref: "el", style: Ze(l.style), class: "fun-tab-item", onClick: s[0] || (s[0] = (...d) => l.handleClick && l.handleClick(...d)) }, [e("div", ji, [$t(l.$slots, "icon"), e("div", Ui, [$t(l.$slots, "default", {}, () => [E(t(l.title), 1)])]), l.badge ? (n(), a("div", qi, t(l.badge), 1)) : B("v-if", !0)])], 4);
}
var Qa = Ya(Fi, [
   ["render", Ki],
   ["__file", "/Users/scoutyin/Documents/ScoutYin/fun-tab/src/tab-item.vue"],
]);
const _n = window;
function Zi() {
   let l = 0;
   const s = ["webkit", "moz"];
   for (let o = 0; o < s.length && !window.requestAnimationFrame; ++o) (window.requestAnimationFrame = _n[s[o] + "RequestAnimationFrame"]), (window.cancelAnimationFrame = _n[s[o] + "CancelAnimationFrame"] || _n[s[o] + "CancelRequestAnimationFrame"]);
   window.requestAnimationFrame ||
      (window.requestAnimationFrame = function (o) {
         const u = Date.now(),
            v = u - l,
            p = Math.max(0, 16.7 - v),
            d = window.setTimeout(function () {
               o(v);
            }, p);
         return (l = u + p), d;
      }),
      window.cancelAnimationFrame ||
         (window.cancelAnimationFrame = function (o) {
            clearTimeout(o);
         });
}
const Xi = V({
      name: "FunTabs",
      props: {
         modelValue: { type: [String, Number], default: "" },
         lineWidth: { type: [Number, String], default: 30 },
         lineHeight: { type: Number, default: 3 },
         activeColor: { type: String, default: "#1677ff" },
         additionalX: { type: Number, default: 50 },
         reBoundExponent: {
            type: Number,
            default: 10,
            validator(l) {
               return l > 0;
            },
         },
         inertialDuration: {
            type: Number,
            default: 1e3,
            validator(l) {
               return l > 0;
            },
         },
         reBoundingDuration: { type: Number, default: 360 },
      },
      emits: ["update:modelValue", "change"],
      setup(l, { emit: s, expose: o }) {
         let u = null;
         const v = [],
            p = k(),
            d = k(),
            i = k(l.modelValue),
            _ = k(0),
            r = k(0),
            g = k(0),
            m = k(0),
            $ = k(0),
            y = k(!1),
            C = k(!1),
            f = k(0),
            b = k(0),
            T = k(0),
            h = k(0),
            w = k(0),
            I = k(0),
            x = k(16.7),
            S = k(0),
            G = k(0),
            R = k(0),
            O = k(0.001),
            P = k(0.001);
         let W = document.querySelector("html").attributes.lang.value;
         const J = q(() => {
               const ee = C.value && !y.value ? l.reBoundingDuration : 0;
               return { transitionTimingFunction: C.value ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.1, 0.57, 0.1, 1)", transitionDuration: `${ee}ms`, transform: `translate3d(${f.value}px, 0px, 0px)` };
            }),
            le = q(() => ({ transition: "all 300ms", width: `${r.value}px`, height: `${l.lineHeight}px`, transform: `translate3d(${_.value}px, 0, 0)`, backgroundColor: l.activeColor })),
            ie = q(() => (W !== "ar" ? h.value <= b.value : h.value >= b.value));
         Ve(
            () => l.modelValue,
            ee => {
               (i.value = ee), ne();
            },
         );
         const ne = () => {
               u ||
                  (u = new Promise(ee => {
                     lt(() => {
                        Se(), ee(), (u = null);
                     });
                  }));
            },
            z = ee => {
               (i.value = ee), s("update:modelValue", ee), s("change", ee);
            },
            X = ee => {
               v.push(ee), ne();
            },
            ce = ee => {
               const ae = v.findIndex(Ge => Ge.name === ee.name);
               ae !== -1 && (v.splice(ae, 1), ne());
            },
            Ne = { activeValue: i, activeColor: ba(l, "activeColor"), addItem: X, removeItem: ce, setActiveValue: z };
         Jo(Ja, Ne);
         const Se = () => {
               var ee, ae;
               (g.value = ((ee = p.value) == null ? void 0 : ee.offsetWidth) || 0), (m.value = ((ae = d.value) == null ? void 0 : ae.offsetWidth) - g.value), xe(), we();
            },
            ge = () => ((C.value = !1), W === "ar" ? (f.value > m.value ? ((C.value = !0), (f.value = m.value)) : f.value < 0 && ((C.value = !0), (f.value = 0))) : f.value > 0 ? ((C.value = !0), (f.value = 0)) : f.value < -m.value && ((C.value = !0), (f.value = -m.value)), C.value),
            Je = () => {
               ie.value ? ((f.value <= 0 && f.value + m.value > 0) || f.value > 0 ? (f.value += h.value - T.value) : f.value + m.value <= 0 && (f.value += (l.additionalX * (h.value - T.value)) / (g.value + Math.abs(f.value + m.value)))) : f.value >= 0 ? (W === "ar" ? (f.value += (l.additionalX * (h.value - T.value)) / 50) : (f.value += (l.additionalX * (h.value - T.value)) / (g.value + f.value))) : ((f.value <= 0 && f.value + m.value >= 0) || f.value + m.value <= 0) && (f.value += h.value - T.value), (T.value = h.value);
            },
            Qe = () => {
               if (((G.value = Date.now()), (x.value = G.value - S.value), ie.value ? (f.value <= -m.value ? ((P.value *= (l.reBoundExponent + Math.abs(f.value + m.value)) / l.reBoundExponent), ($.value = Math.min($.value - P.value, 0))) : ($.value = Math.min($.value - P.value * x.value, 0))) : f.value >= 0 ? ((P.value *= (l.reBoundExponent + f.value) / l.reBoundExponent), ($.value = Math.max($.value - P.value, 0))) : ($.value = Math.max($.value - P.value * x.value, 0)), (f.value += ($.value * x.value) / 2), Math.abs($.value) <= O.value)) {
                  ge();
                  return;
               }
               (S.value = G.value), (R.value = requestAnimationFrame(Qe));
            },
            et = () => {
               if (!v.length) return;
               const ee = v.find(ae => ae.name.value === i.value);
               return ee && ee.el.value;
            },
            we = () => {
               const ee = et();
               if (!ee) return;
               const ae = ee.offsetWidth,
                  Ge = W === "ar" ? -ee.offsetLeft : ee.offsetLeft,
                  { lineWidth: Re } = l;
               Re === "auto" ? (r.value = ae) : Re < 1 ? (r.value = ae * Re) : (r.value = Re), (_.value = Ge + (ae - r.value) / 2);
            },
            xe = () => {
               const ee = et();
               if (!ee) return;
               const ae = ee.offsetLeft,
                  Ge = (g.value - ee.offsetWidth) / 2;
               let Re = 0;
               const dt = Math.abs(f.value);
               if (W === "ar") {
                  if (dt === 0) {
                     (C.value = !0), (f.value = 0);
                     return;
                  }
                  f.value <= dt + Ge ? (Re = Ge - (f.value - ae)) : (Re = dt - Ge);
                  let qe = Re + f.value;
                  qe < 0 && (qe = -m.value), qe > m.value && (qe = 0), (C.value = !0);
               } else {
                  ae <= dt + Ge ? (Re = Ge - (ae + f.value)) : (Re = -(ae - dt - Ge));
                  let qe = Re + f.value;
                  qe > 0 && (qe = 0), qe < -m.value && (qe = -m.value), (C.value = !0), (f.value = qe);
               }
            },
            Le = ee => {
               ee.stopPropagation(), cancelAnimationFrame(R.value), (T.value = ee.touches[0].clientX);
            },
            Ie = ee => {
               m.value <= 0 || (ee.preventDefault(), ee.stopPropagation(), (y.value = !0), (w.value = I.value), (b.value = T.value), (h.value = ee.touches[0].clientX), Je(), (I.value = ee.timeStamp));
            },
            re = ee => {
               if (((y.value = !1), ge())) cancelAnimationFrame(R.value);
               else {
                  let ae = ee.timeStamp - I.value,
                     Ge = I.value - w.value;
                  if (((Ge = Ge > 0 ? Ge : 8), ae > 100)) return;
                  ($.value = (T.value - b.value) / Ge), (P.value = $.value / l.inertialDuration), (S.value = Date.now()), (R.value = requestAnimationFrame(Qe));
               }
            },
            se = () => {
               const ee = p.value;
               ee.addEventListener("touchstart", Le, !1), ee.addEventListener("touchmove", Ie, !1), ee.addEventListener("touchend", re, !1);
            },
            Q = () => {
               const ee = p.value;
               ee.removeEventListener("touchstart", Le), ee.removeEventListener("touchmove", Ie), ee.removeEventListener("touchend", re);
            };
         return (
            he(() => {
               Zi(), se(), ne();
            }),
            jt(() => {
               Q();
            }),
            o({ resize: Se }),
            { viewAreaRef: p, listRef: d, activeValue: i, lineOffset: _, activeLineWidth: r, viewAreaWidth: g, offsetX: m, speed: $, touching: y, reBounding: C, translateX: f, startX: b, lastX: T, currentX: h, startMoveTime: w, endMoveTime: I, frameTime: x, frameStartTime: S, frameEndTime: G, inertiaFrame: R, zeroSpeed: O, acceleration: P, listStyle: J, activeBarStyle: le, isMoveLeft: ie }
         );
      },
   }),
   Ji = { ref: "viewAreaRef", class: "fun-tabs" };
function Yi(l, s, o, u, v, p) {
   return n(), a("div", Ji, [e("div", { ref: "listRef", style: Ze(l.listStyle), class: "fun-tabs__tab-list" }, [$t(l.$slots, "default"), e("div", { style: Ze(l.activeBarStyle), class: "fun-tabs__active-line" }, null, 4)], 4)], 512);
}
var eo = Ya(Xi, [
   ["render", Yi],
   ["__file", "/Users/scoutyin/Documents/ScoutYin/fun-tab/src/tabs.vue"],
]);
const Xt = V({
      __name: "NavBar",
      props: { list: {}, tabClassName: {}, active: { default: 0 }, tabItemClassName: {} },
      emits: ["update:active", "onClickTab"],
      setup(l, { expose: s, emit: o }) {
         const u = l,
            v = k(),
            p = k(0),
            d = (i, _) => {
               o("update:active", p.value), o("onClickTab", { item: i, index: _ });
            };
         return (
            Ve(
               () => u.active,
               i => {
                  p.value = i;
               },
            ),
            s({ funtabRef: v }),
            (i, _) => (
               n(),
               Z(
                  c(eo),
                  { modelValue: p.value, "onUpdate:modelValue": _[0] || (_[0] = r => (p.value = r)), class: M(i.tabClassName), lineWidth: "0", ref_key: "funtabRef", ref: v },
                  {
                     default: A(() => [
                        (n(!0),
                        a(
                           N,
                           null,
                           D(i.list, (r, g) => te((n(), Z(c(Qa), { name: g, key: g, class: M([i.tabItemClassName, { activeClassName: i.active === g }]), onClick: m => d(r, g) }, { default: A(() => [$t(i.$slots, "default", { item: r, index: g })]), _: 2 }, 1032, ["name", "class", "onClick"])), [[He, r.isShow !== void 0 ? r.isShow : !0]])),
                           128,
                        )),
                     ]),
                     _: 3,
                  },
                  8,
                  ["modelValue", "class"],
               )
            )
         );
      },
   }),
   Qi = { class: "allGames__container" },
   ra = 92 + 140,
   da = 16 + 28,
   ec = V({
      __name: "index",
      setup(l) {
         const { homeState: s, getGameType: o } = Ue(),
            u = k(0),
            v = k(null),
            p = k(),
            d = ue(),
            { t: i } = _e(),
            _ = k([]),
            r = k({});
         function g() {
            d.go(-1);
         }
         const m = k(null),
            { direction: $ } = $a(v, {
               onSwipeStart: () => {
                  clearInterval(m.value), y();
               },
               onSwipe: y,
               onSwipeEnd: () => {
                  y();
                  let T = 0;
                  m.value = setInterval(() => {
                     T++, T > 10 && clearInterval(m.value), y();
                  }, 100);
               },
            });
         function y() {
            const T = document.getElementById(`gamesList-${u.value}`);
            if (T) {
               const { top: h, bottom: w } = T.getBoundingClientRect();
               w - ra - da < 0 ? $.value === "UP" && (u.value = u.value + 1) : h - ra - da > 0 && $.value === "DOWN" && (u.value = u.value - 1);
            }
         }
         const C = q(() => _.value[u.value]);
         he(() => {
            f();
         }),
            kt(() => {
               f();
            });
         const f = async () => {
            !s.gameTypeList.length && (await o()),
               s.gameTypeList.forEach(h => {
                  h.categoryCode === "BigAward" || h.state !== 1 || _.value.push({ isShow: h.state === 1, title: i("code" + h.typeNameCode), img: h.categoryImg, key: h.categoryCode.toLocaleLowerCase() });
               }),
               (r.value = JSON.parse(sessionStorage.getItem("gameData")));
            const T = d.currentRoute.value.query.type || "";
            u.value = _.value.findIndex(h => h.key + "" === T) || 0;
         };
         function b() {}
         return (T, h) => {
            const w = U("NavBar"),
               I = Te("lazy");
            return n(), a("div", Qi, [L(w, { title: T.$t("all"), "left-arrow": "", onClickLeft: g }, null, 8, ["title"]), L(Xt, { list: _.value, active: u.value, "onUpdate:active": h[0] || (h[0] = x => (u.value = x)), tabClassName: "tabs", onOnClickTab: b, activeClassName: "tab_active", ref_key: "tabRefs", ref: p, tabItemClassName: "funtab_item" }, { default: A(({ item: x, index: S }) => [x.isShow ? (n(), a("div", { key: 0, class: M(["tab_item", { tab_active: S === u.value }]) }, [te(e("img", null, null, 512), [[I, x.img]]), e("span", null, t(x.title), 1)], 2)) : B("", !0)]), _: 1 }, 8, ["list", "active"]), e("div", { class: "allGames__container-list", ref_key: "allGamesContainer", ref: v }, [_.value.length > 0 ? (n(), Z(Ei, { key: 0, gameType: C.value.key, title: C.value.title, gameData: r.value[C.value.key] }, null, 8, ["gameType", "title", "gameData"])) : B("", !0)], 512)]);
         };
      },
   });
const tc = H(ec, [["__scopeId", "data-v-649211bb"]]),
   dV = Object.freeze(Object.defineProperty({ __proto__: null, default: tc }, Symbol.toStringTag, { value: "Module" })),
   sc = { class: "lotteryGamesList__container" },
   nc = { alt: "" },
   ac = { class: "lotteryGamesList__container-item__time" },
   oc = V({
      __name: "index",
      props: { gamesList: { type: Object, default: () => {} } },
      setup(l) {
         const s = ue();
         function o() {
            s.push({ name: "AllLotteryGames-VietnamLottery" });
         }
         return (u, v) => {
            const p = Te("lazy");
            return n(), a("div", sc, [e("div", { class: "lotteryGamesList__container-item", onClick: o }, [te(e("img", nc, null, 512), [[p, c(pe)("home/AllLotteryGames", "cover")]]), e("span", ac, t(l.gamesList.title), 1)])]);
         };
      },
   });
const lc = H(oc, [["__scopeId", "data-v-0f6e6783"]]),
   ic = { class: "lotteryGames__container" },
   vn = 46 + 90 + 35 + 16,
   _a = 16 + 28,
   cc = V({
      __name: "index",
      setup(l) {
         const { t: s } = _e(),
            o = ue(),
            u = k(0),
            v = k(0),
            p = k(null),
            d = [
               { title: s("all"), value: "all" },
               { title: "Win Go", value: "winGo" },
               { title: s("Lotre4d"), value: "4DLottery" },
               { title: "Lottery", value: "lottery" },
               { title: "Xổ số", value: "lotteryVi" },
               { title: "Xổ số", value: "lotteryVi" },
            ],
            i = [
               { title: s("all"), value: "all" },
               { title: s("minites1"), value: "60" },
               { title: s("minites3"), value: "180" },
               { title: s("minites5"), value: "300" },
               { title: s("minites10"), value: "600" },
               { title: s("minitesLong"), value: "long" },
            ];
         function _() {
            o.go(-1);
         }
         function r(C) {
            return C === u.value ? u.value : -1;
         }
         const { direction: g } = $a(p, {
            onSwipeStart: () => {
               m();
            },
            onSwipe: m,
            onSwipeEnd: () => {
               m();
            },
         });
         function m() {
            const C = document.getElementById(`gamesList-${u.value}`);
            if (C) {
               const { top: f, bottom: b } = C.getBoundingClientRect();
               b - vn - _a < 0 ? g.value === "UP" && (u.value = u.value + 1) : f - vn - _a > 0 && g.value === "DOWN" && (u.value = u.value - 1);
            }
         }
         function $() {
            y();
         }
         function y() {
            const C = document.getElementById(`gamesList-${u.value}`);
            C && p.value.scrollTo({ top: C.offsetTop - vn, behavior: "smooth" });
         }
         return (C, f) => {
            const b = U("NavBar"),
               T = U("van-tab"),
               h = U("van-tabs");
            return (
               n(),
               a("div", ic, [
                  L(b, { "left-arrow": "", title: C.$t("lottery"), onClickLeft: _ }, null, 8, ["title"]),
                  L(
                     h,
                     { class: "lotteryGames__container-tabBar mgt10", active: u.value, "onUpdate:active": f[0] || (f[0] = w => (u.value = w)), onClickTab: $, type: "card", color: "transparent", background: "transparent" },
                     {
                        default: A(() => [
                           (n(),
                           a(
                              N,
                              null,
                              D(d, (w, I) => L(T, { name: I, key: I, title: w.title }, null, 8, ["name", "title"])),
                              64,
                           )),
                        ]),
                        _: 1,
                     },
                     8,
                     ["active"],
                  ),
                  L(
                     h,
                     { class: "lotteryGames__container-timeTab", active: v.value, "onUpdate:active": f[1] || (f[1] = w => (v.value = w)), color: "#ff7172", background: "#fff" },
                     {
                        default: A(() => [
                           (n(),
                           a(
                              N,
                              null,
                              D(i, (w, I) => L(T, { name: I, key: I, title: w.title }, null, 8, ["name", "title"])),
                              64,
                           )),
                        ]),
                        _: 1,
                     },
                     8,
                     ["active"],
                  ),
                  e(
                     "div",
                     { class: "lotteryGames__container-list", ref_key: "allGamesContainer", ref: p },
                     [
                        (n(),
                        a(
                           N,
                           null,
                           D(i, (w, I) => L(lc, { "games-list": w, active: r(I), key: I, id: `gamesList-${I}` }, null, 8, ["games-list", "active", "id"])),
                           64,
                        )),
                     ],
                     512,
                  ),
               ])
            );
         };
      },
   });
const uc = H(cc, [["__scopeId", "data-v-f1d3bb63"]]),
   _V = Object.freeze(Object.defineProperty({ __proto__: null, default: uc }, Symbol.toStringTag, { value: "Module" })),
   rc = { class: "onlineGames__container" },
   dc = ["placeholder"],
   _c = { class: "onlineGames__container-list" },
   vc = ["onClick"],
   pc = { key: 1 },
   mc = { class: "onlineGames__container-list miniGames" },
   gc = ["onClick"],
   hc = V({
      __name: "index",
      setup(l) {
         const { onItemClick: s } = Ue(),
            o = k(),
            u = k(0),
            v = k([]),
            p = k(0);
         Ve(u, T => {
            const h = g.value[T];
            (m.value = []), (p.value = 0), b(h.slotsTypeID);
         });
         const d = k(!1);
         Ve(d, T => {
            T
               ? setTimeout(() => {
                    _.value.focus();
                 }, 0)
               : (i.value = "");
         });
         const i = k("");
         Yo(
            i,
            T => {
               const h = g.value[u.value];
               b(h.slotsTypeID, T);
            },
            { debounce: 300 },
         );
         const _ = k(null),
            r = k(""),
            g = k([]),
            m = k([]),
            $ = ue(),
            y = Qo(m, T => (d.value ? T.gameNameEn.toLowerCase().includes(i.value.toLowerCase()) : T.customGameType === p.value));
         function C(T) {
            return T ? T.split(/(?=[A-Z])/).join(" ") : "";
         }
         function f() {
            $.go(-1);
         }
         async function b(T, h = "") {
            const w = await de(bl({ type: T, gameNameEn: h }));
            if (w) {
               if (((m.value = w.data.gameLists || []), (v.value = w.data.gameCustomTypeLists || []), !v.value.length)) return;
               p.value = v.value[0].customGameType;
            }
         }
         return (
            he(() => {
               (r.value = sessionStorage.getItem("gameType") || ""), (g.value = sessionStorage.getItem("slotGamesList") ? JSON.parse(sessionStorage.getItem("slotGamesList")) : null);
               const T = JSON.parse(sessionStorage.getItem("clickedItem"));
               T && (u.value = g.value.findIndex(w => w.slotsTypeID === T.slotsTypeID)), o.value && o.value.scrollTo(u.value);
               const h = g.value[u.value];
               b(h.slotsTypeID);
            }),
            (T, h) => {
               var R, O;
               const w = U("NavBar"),
                  I = U("NoticeBar"),
                  x = U("van-tab"),
                  S = U("van-tabs"),
                  G = Te("lazy");
               return (
                  n(),
                  a("div", rc, [
                     L(w, { "left-arrow": "", onClickLeft: f }, { center: A(() => [e("span", { class: M({ active: d.value }) }, t(T.currentTitle), 3)]), _: 1 }),
                     L(I, { class: "all_game_notice" }),
                     te(e("input", { type: "text", placeholder: T.$t("searchGame"), class: M({ active: d.value }), "onUpdate:modelValue": h[0] || (h[0] = P => (i.value = P)), ref_key: "searchBarRef", ref: _ }, null, 10, dc), [[bn, i.value]]),
                     ((R = r.value) == null ? void 0 : R.key) !== "fish" && ((O = r.value) == null ? void 0 : O.key) !== "flash"
                        ? (n(),
                          Z(
                             S,
                             { key: 0, class: "onlineGames__container-tabBar", active: u.value, "onUpdate:active": h[2] || (h[2] = P => (u.value = P)), type: "card", color: "transparent", background: "transparent", ref_key: "tabsRef", ref: o, "swipe-threshold": 3 },
                             {
                                default: A(() => [
                                   (n(!0),
                                   a(
                                      N,
                                      null,
                                      D(g.value, (P, W) => (n(), Z(x, { key: W }, { title: A(() => [e("span", null, t(P.slotsName), 1)]), _: 2 }, 1024))),
                                      128,
                                   )),
                                   !d.value || v.value.length === 0
                                      ? (n(),
                                        Z(
                                           c(eo),
                                           { key: 0, modelValue: p.value, "onUpdate:modelValue": h[1] || (h[1] = P => (p.value = P)), lineWidth: 0 },
                                           {
                                              default: A(() => [
                                                 (n(!0),
                                                 a(
                                                    N,
                                                    null,
                                                    D(v.value, (P, W) => (n(), Z(c(Qa), { name: W, key: W, class: M([{ activeClassName: p.value === P.customGameType }]), onClick: J => (p.value = P.customGameType) }, { default: A(() => [e("span", null, t(P.customGameTypeName), 1)]), _: 2 }, 1032, ["name", "class", "onClick"]))),
                                                    128,
                                                 )),
                                              ]),
                                              _: 1,
                                           },
                                           8,
                                           ["modelValue"],
                                        ))
                                      : B("", !0),
                                   e("div", _c, [
                                      (n(!0),
                                      a(
                                         N,
                                         null,
                                         D(c(y), (P, W) => (n(), a("div", { class: "onlineGames__container-list__item", key: W, onClick: J => c(s)(P) }, [te(e("img", null, null, 512), [[G, P.img]]), e("span", null, t(C(P.gameNameEn)), 1)], 8, vc))),
                                         128,
                                      )),
                                   ]),
                                ]),
                                _: 1,
                             },
                             8,
                             ["active"],
                          ))
                        : (n(),
                          a("div", pc, [
                             e("div", mc, [
                                (n(!0),
                                a(
                                   N,
                                   null,
                                   D(g.value, (P, W) => (n(), a("div", { class: "onlineGames__container-list__item", key: W, onClick: J => c(s)(P) }, [E(t(P) + " ", 1), te(e("img", null, null, 512), [[G, P.img]]), e("span", null, t(P.gameNameEn), 1)], 8, gc))),
                                   128,
                                )),
                             ]),
                          ])),
                  ])
               );
            }
         );
      },
   });
const yc = H(hc, [["__scopeId", "data-v-b8fbcef7"]]),
   vV = Object.freeze(Object.defineProperty({ __proto__: null, default: yc }, Symbol.toStringTag, { value: "Module" })),
   fc = { class: "sysMessage__container" },
   bc = { class: "sysMessage__container-msgWrapper__item-title" },
   $c = { class: "sysMessage__container-msgWrapper__item-time" },
   Cc = { class: "sysMessage__container-msgWrapper__item-content" },
   kc = V({
      __name: "index",
      setup(l) {
         const { t: s } = _e(),
            { setLoading: o } = Jt(),
            u = k(),
            v = rt(),
            p = ue(),
            d = k(!1),
            i = k([]),
            _ = Gs(),
            r = k({ pageSize: 25 }),
            g = {
               readAllIcon: Nt(() => Rt(() => import("./messageReadAll-9c7a2da8.js"), ["assets/js/messageReadAll-9c7a2da8.js", "assets/js/page-activity-6d456111.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/native/index-3d731397.js", "assets/js/en-53bf8069.js", "assets/js/rus-ecb14220.js", "assets/js/vi-60d1c3eb.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-38f5b166.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-dbcb2394.js", "assets/js/ar-78aaffbf.js", "assets/css/page-activity-9da3f4e3.css"])),
               messageIconRed: Nt(() => Rt(() => import("./messageIconRed-23213430.js"), ["assets/js/messageIconRed-23213430.js", "assets/js/page-activity-6d456111.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/native/index-3d731397.js", "assets/js/en-53bf8069.js", "assets/js/rus-ecb14220.js", "assets/js/vi-60d1c3eb.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-38f5b166.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-dbcb2394.js", "assets/js/ar-78aaffbf.js", "assets/css/page-activity-9da3f4e3.css"])),
               messageIconIsRead: Nt(() => Rt(() => import("./messageIconIsRead-f090aed2.js"), ["assets/js/messageIconIsRead-f090aed2.js", "assets/js/page-activity-6d456111.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/native/index-3d731397.js", "assets/js/en-53bf8069.js", "assets/js/rus-ecb14220.js", "assets/js/vi-60d1c3eb.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-38f5b166.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-dbcb2394.js", "assets/js/ar-78aaffbf.js", "assets/css/page-activity-9da3f4e3.css"])),
               messageGarbage: Nt(() => Rt(() => import("./messageGarbage-8635d487.js"), ["assets/js/messageGarbage-8635d487.js", "assets/js/page-activity-6d456111.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/native/index-3d731397.js", "assets/js/en-53bf8069.js", "assets/js/rus-ecb14220.js", "assets/js/vi-60d1c3eb.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-38f5b166.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-dbcb2394.js", "assets/js/ar-78aaffbf.js", "assets/css/page-activity-9da3f4e3.css"])),
            };
         function m() {
            p.back();
         }
         async function $() {
            const f = Gs();
            await $l({ state: 1 })
               .then(b => {
                  b && f.setReadState(!0);
               })
               .catch(b => {});
         }
         function y(f) {
            Ca({ title: s("warning"), message: s("warningTxt1") }).then(async () => {
               if (await de($n({ messageID: f.messageID, state: 2 }))) {
                  let T = i.value;
                  i.value = T.filter(h => h.messageID !== f.messageID);
               }
            });
         }
         const C = v.getUserInfo;
         return (
            he(async () => {
               o(!0), await $(), o(!1), u.value.resetRefresh(), (C.unRead = 0), v.setUserInfo({ ...C }), _.setReadState(!0);
            }),
            (f, b) => {
               const T = U("NavBar");
               return (
                  n(),
                  a("div", fc, [
                     L(T, { title: c(s)("notifications"), "left-arrow": "", onClickLeft: m }, null, 8, ["title"]),
                     L(
                        Ga,
                        { ref_key: "msgWrapperRef", ref: u, list: i.value, "onUpdate:list": b[0] || (b[0] = h => (i.value = h)), "page-query": r.value, "onUpdate:pageQuery": b[1] || (b[1] = h => (r.value = h)), api: c(kl), distance: 100, isAutoLoad: d.value },
                        {
                           content: A(() => [
                              (n(!0),
                              a(
                                 N,
                                 null,
                                 D(
                                    i.value,
                                    h => (
                                       n(),
                                       a("div", { class: "sysMessage__container-msgWrapper__item", key: h.messageID }, [
                                          e("div", bc, [
                                             (n(), Z(ft(h.state === 0 ? g.messageIconRed : g.messageIconIsRead))),
                                             e("span", null, t(c(Cl)(h.title, 20)), 1),
                                             (n(),
                                             Z(
                                                ft(g.messageGarbage),
                                                {
                                                   onClick: w => {
                                                      w.stopPropagation(), y(h);
                                                   },
                                                },
                                                null,
                                                8,
                                                ["onClick"],
                                             )),
                                          ]),
                                          e("div", $c, t(h.addTime), 1),
                                          e("div", Cc, t(h.messages), 1),
                                       ])
                                    ),
                                 ),
                                 128,
                              )),
                           ]),
                           _: 1,
                        },
                        8,
                        ["list", "page-query", "api", "isAutoLoad"],
                     ),
                  ])
               );
            }
         );
      },
   });
const Tc = H(kc, [["__scopeId", "data-v-f9e66ad4"]]),
   pV = Object.freeze(Object.defineProperty({ __proto__: null, default: Tc }, Symbol.toStringTag, { value: "Module" })),
   wc = "/assets/png/close-32ada670.png",
   Lc = l => (ye("data-v-21a65021"), (l = l()), fe(), l),
   Ic = { class: "game-iframe" },
   Sc = ["src"],
   Gc = Lc(() => e("img", { src: wc, alt: "" }, null, -1)),
   xc = [Gc],
   Bc = V({
      __name: "index",
      setup(l) {
         const s = Cn(),
            o = k(null),
            u = k(!1),
            {
               x: v,
               y: p,
               style: d,
            } = el(o, {
               initialValue: { x: 30, y: 30 },
               preventDefault: !0,
               onMove: () => {
                  u.value = !0;
               },
               onEnd: () => {
                  setTimeout(() => (u.value = !1));
               },
            }),
            i = q(() => {
               const g = s.query.url;
               if (!g) return "";
               const m = Tl(g || "");
               return m.startsWith("https:") ? m : `data:text/html;charset=utf-8,${encodeURIComponent(m)}`;
            }),
            _ = ue(),
            r = () => {
               u.value || _.push({ name: "home" });
            };
         return (g, m) => (n(), a("div", Ic, [i.value ? (n(), a("iframe", { key: 0, src: i.value }, null, 8, Sc)) : B("", !0), e("div", { class: "close", ref_key: "el", ref: o, style: Ze(c(d)), onClick: r }, xc, 4)]));
      },
   });
const Nc = H(Bc, [["__scopeId", "data-v-21a65021"]]),
   mV = Object.freeze(Object.defineProperty({ __proto__: null, default: Nc }, Symbol.toStringTag, { value: "Module" })),
   Rc = [
      { typeID: 13, typeName: "Trx Win Go<br />1Min", tabName: "Trx 1Min", intervalM: 1, scope: "1000|10000|100000|1000000", sort: 1 },
      { typeID: 14, typeName: "Trx Win Go<br />3Min", tabName: "Trx 3Min", intervalM: 3, scope: "1000|10000|100000|1000000", sort: 2 },
      { typeID: 15, typeName: "Trx Win Go<br />5Min", tabName: "Trx 5Min", intervalM: 5, scope: "1000|10000|100000|1000000", sort: 3 },
      { typeID: 16, typeName: "Trx Win Go<br />10Min", tabName: "Trx 10Min", intervalM: 10, scope: "1000|10000|100000|1000000", sort: 4 },
   ],
   Mc = [
      { typeID: 5, typeName: "5D Lotre<br />1Min", tabName: "5D 1Min", intervalM: 1, scope: "1000|10000|100000|1000000", sort: 4 },
      { typeID: 6, typeName: "5D Lotre<br />3Min", tabName: "5D 3Min", intervalM: 3, scope: "1000|10000|100000|1000000", sort: 3 },
      { typeID: 7, typeName: "5D Lotre<br />5Min", tabName: "5D 5Min", intervalM: 5, scope: "1000|10000|100000|1000000", sort: 2 },
      { typeID: 8, typeName: "5D Lotre<br />10Min", tabName: "5D 10Min", intervalM: 10, scope: "1000|10000|100000|1000000", sort: 1 },
   ],
   Dc = [
      { typeID: 9, typeName: "K3 Lotre<br />1Min", tabName: "K3 1Min", intervalM: 1, scope: "1000|10000|100000|1000000", sort: 1 },
      { typeID: 10, typeName: "K3 Lotre<br />3Min", tabName: "K3 3Min", intervalM: 3, scope: "1000|10000|100000|1000000", sort: 2 },
      { typeID: 11, typeName: "K3 Lotre<br />5Min", tabName: "K3 5Min", intervalM: 5, scope: "1000|10000|100000|1000000", sort: 3 },
      { typeID: 12, typeName: "K3 Lotre<br />10Min", tabName: "K3 10Min", intervalM: 10, scope: "1000|10000|100000|1000000", sort: 4 },
   ],
   Ac = [
      { typeID: 1, typeName: "Win Go<br />1Min", tabName: "WinGo 1Min", intervalM: 1, scope: "1000|10000|100000|1000000", sort: 4 },
      { typeID: 2, typeName: "Win Go<br />3Min", tabName: "WinGo 3Min", intervalM: 3, scope: "1000|10000|100000|1000000", sort: 3 },
      { typeID: 3, typeName: "Win Go<br />5Min", tabName: "WinGo 5Min", intervalM: 5, scope: "1000|10000|100000|1000000", sort: 2 },
      { typeID: 4, typeName: "Win Go<br />10Min", tabName: "WinGo 10Min", intervalM: 10, scope: "1000|10000|100000|1000000", sort: 1 },
   ],
   Pc = l => Gt(xt.GetMyBingo18HistoryBetting, l),
   Oc = () => Gt(xt.GetBinguoGameConfig),
   Vc = () => Gt(xt.GetBingo18OddsList),
   Wc = () => Gt(xt.GetGameBingo18Issue),
   Hc = () => Gt(xt.GetBingo18LastGameResult),
   zc = l => Gt(xt.GetBingo18BetAmount, l),
   Ec = l => Gt(xt.Bingo18Betting, l),
   to = () => Gt(xt.GetBingo18Last50Result),
   Fc = () => Gt(xt.GetTrendstatistics),
   jc = () => Gt(xt.GetLotteryRankList),
   Uc = () => Gt(xt.GetLotteryResult7Day),
   qc = l => Gt(xt.GetUserRankList, { uid: l }),
   mt = ze({ currentTabIndex: 0, resultSumTrend: [], smallAndBigTrend: void 0, threeSameTrend: [], twoSameTrend: [], isTrend: !1, trendList: [], last50List: [], userRank: 0, last7Day: [] }),
   { t: gs } = Bs.global,
   Ws = k([{ title: gs("time"), key: "issueEndTime", isLockColumn: !0, isSlot: !0, width: "50px", cusTdClass: "column_time" }]),
   as = () => {
      const l = { 1: { player: gs("xosoTxt60"), Big: { class: "big" }, Small: { class: "small" }, Drawn: { class: "sum" } }, 2: { player: gs("same"), class: "small" }, 3: { player: gs("sameNum") }, 4: { player: gs("numbersMatch") } },
         s = q(() => {
            let $ = [],
               y = [];
            for (let C = 0; C < mt.last50List.length; C++) y.length < 5 || ($.push(y), (y = [])), y.push(mt.last50List[C].resultSum), C === mt.last50List.length - 1 && $.push(y);
            return $;
         }),
         o = q(() => {
            let $ = mt.last50List.map(C => C.resultSum),
               y = g($).slice(0, 10).reverse();
            return (
               y.forEach(C => {
                  if (C.length < 5) {
                     let f = 5 - C.length;
                     for (let b = 0; b < f; b++) C.push("");
                  }
               }),
               y
            );
         }),
         u = q(() =>
            mt.last50List.map($ => {
               const y = $.result.split(""),
                  C = {};
               for (let f = 1; f <= 6; f++) C["num" + f] = y.filter(b => b === f.toString()).length;
               return { issueNo: $.issueNo, sum: $.resultSum, ...C };
            }),
         ),
         v = async () => {
            const $ = await de(Uc());
            if ($ != null && $.data) {
               Ws.value = [{ title: gs("time"), key: "issueEndTime", isLockColumn: !0, isSlot: !0, width: "50px", cusTdClass: "column_time" }];
               let y = $.data.reverse();
               [...new Set($.data.map(T => T.startDate))]
                  .slice(0, 7)
                  .reverse()
                  .forEach((T, h) => {
                     Ws.value.push({ key: "time_index_" + h, title: T, isSlot: !0 });
                  });
               let f = p(y, "issueEndTime"),
                  b = [];
               Object.entries(f).forEach(([T, h]) => {
                  let w = {};
                  h.forEach((I, x) => {
                     var G;
                     let S = (G = Ws.value.find(R => R.title === I.startDate)) == null ? void 0 : G.key;
                     w[`${S}`] = I;
                  }),
                     b.push({ issueEndTime: T, ...w });
               }),
                  (mt.last7Day = b.sort((T, h) => {
                     const w = T.issueEndTime.split(":"),
                        I = h.issueEndTime.split(":"),
                        x = parseInt(w[0]),
                        S = parseInt(w[1]),
                        G = parseInt(I[0]),
                        R = parseInt(I[1]);
                     return x === G ? S - R : x - G;
                  }));
            }
         };
      function p($, y) {
         const C = {};
         return (
            $.forEach(f => {
               const b = f[y];
               C[b] || (C[b] = []), C[b].push(f);
            }),
            C
         );
      }
      const d = async () => {
            const $ = await de(jc());
            $ != null && $.data && (mt.trendList = $.data);
            const C = rt().getUserInfo,
               f = await de(qc(C.userId));
            f != null && f.data && (f.data < 100 && (mt.isTrend = !0), (mt.userRank = f.data));
         },
         i = async () => {
            const $ = await de(to());
            $ != null && $.data && (mt.last50List = $.data);
         },
         _ = async () => {
            const $ = await de(Fc());
            $ && ((mt.resultSumTrend = $.data.resultSumTrend), (mt.smallAndBigTrend = $.data.smallAndBigTrend), (mt.threeSameTrend = $.data.threeSameTrend), (mt.twoSameTrend = $.data.twoSameTrend));
         },
         r = ($, y) => {
            let C = "",
               f = "";
            return $ === 1 ? (Number(y) ? (C = m(Number(y))) : (C = l[1][y].class), (f = l[1].player)) : $ === 2 ? ((C = l[2].class), (f = l[2].player)) : $ === 3 ? (Number(y) < 5 ? (C = "small") : Number(y) === 5 ? (C = "sum") : (C = "big"), (f = l[3].player)) : $ === 4 && (y.includes("*") ? (C = "big") : /[123]/.test(y) ? (C = "small") : (C = "big"), (f = l[4].player)), { className: C, playerName: f };
         };
      function g($) {
         const y = [],
            C = [];
         let f = "";
         const b = h => (h < 10 ? "small" : h > 11 ? "big" : "sum"),
            T = (h, w) => {
               let I = 0;
               if (h !== w[w.length - 1]) return 0;
               for (let x = w.length - 1; x >= 0; x--)
                  if (h === w[x]) I += 1;
                  else return I;
               return I;
            };
         for (let h = 0; h < $.length; h++) {
            const w = $[h],
               I = b(w);
            if (y.length === 0 || I !== f) {
               y.push([w]), (f = I), C.push(f);
               continue;
            }
            if (y[y.length - 1].length < 5) y[y.length - 1].push(w);
            else {
               let x = T(I, C),
                  S = y[y.length - x].length;
               S === 5 ? (y.splice(y.length - x, 0, [w]), C.push(I)) : (S > 5, y[y.length - x].unshift(w));
            }
            f = I;
         }
         return y;
      }
      const m = $ => (Number($) < 10 ? "small" : Number($) > 11 ? "big" : "sum");
      return { store: mt, last50Result: s, last50Record: o, last50RecordResult: u, columnOptions: Ws, filterStyle: m, filterGameType: r, getTrendstatistics: _, getLotteryRankList: d, getLotteryResult7Day: v, getBingo18Last50Result: i };
   },
   Kc = { class: "ar-searchbar__selector" },
   Zc = { key: 0, class: "noSelect" },
   Xc = { key: 1, class: "ar-searchbar__selector-default" },
   Jc = V({
      __name: "Calendar",
      emits: ["confirm"],
      setup(l, { expose: s, emit: o }) {
         const { minDate: u, maxDate: v } = xa(),
            p = k(""),
            d = k(""),
            i = k(!1),
            _ = m => `${m.getFullYear()}-${m.getMonth() + 1}-${m.getDate()}`,
            r = async m => {
               i.value = !1;
               const [$, y] = m;
               (p.value = _($)), (d.value = _(y)), o("confirm");
            };
         function g() {
            i.value = !0;
         }
         return (
            s({ startDateValue: p, endDateValue: d }),
            (m, $) => {
               const y = U("van-icon"),
                  C = U("van-calendar");
               return n(), a(N, null, [e("div", Kc, [e("div", { onClick: g }, [p.value === "" || d.value === "" ? (n(), a("span", Zc, t(m.$t("datePick")), 1)) : (n(), a("span", Xc, t(p.value) + "/" + t(d.value), 1)), L(y, { name: "arrow-down" })])]), L(C, { show: i.value, "onUpdate:show": $[0] || ($[0] = f => (i.value = f)), type: "range", onConfirm: r, "min-date": c(u), "max-date": c(v), teleport: "body" }, null, 8, ["show", "min-date", "max-date"])], 64);
            }
         );
      },
   }),
   Yc = l => (ye("data-v-eebcfced"), (l = l()), fe(), l),
   Qc = { class: "x-4d-head" },
   eu = { class: "menu" },
   tu = ["onClick"],
   su = { class: "lottery" },
   nu = { class: "item" },
   au = Yc(() => e("div", { class: "box" }, [e("div")], -1)),
   ou = [au],
   lu = { class: "mask" },
   iu = ["onClick"],
   cu = { class: "img" },
   uu = V({
      __name: "lotterylist",
      props: { modelValue: { type: Boolean, default: !1 }, timeIndex: { default: 0 }, timeVal: { default: Ke().format("YYYY-MM-DD") }, lotteryList: {}, lotteryTab: {}, timeWeek: { type: Function, default: () => "" } },
      emits: ["onLotteryTab", "onTime", "update:modelValue"],
      setup(l, { emit: s }) {
         const u = tl(l, "modelValue", s),
            v = (g, m) => {
               s("onLotteryTab", g, m);
            },
            p = (g, m) => {
               s("onTime", g, m);
            },
            d = () => {
               u.value = !0;
            },
            i = () => {
               u.value = !1;
            },
            _ = () => {
               u.value ? i() : d();
            },
            r = k(null);
         return (
            sl(r, g => {
               u.value = !1;
            }),
            (g, m) => {
               var C;
               const $ = U("van-skeleton"),
                  y = Te("lazy");
               return (
                  n(),
                  a("div", Qc, [
                     e(
                        "div",
                        { class: "time", ref_key: "target", ref: r },
                        [
                           e("div", { class: "box", onClick: _ }, t(g.timeVal.replace(/-/g, "/")) + " " + t(g.timeWeek(g.timeVal)), 1),
                           te(
                              e(
                                 "div",
                                 eu,
                                 [
                                    e("h3", { onClick: i }, t(g.$t("Drawdate")), 1),
                                    e("ul", null, [
                                       (n(!0),
                                       a(
                                          N,
                                          null,
                                          D(g.lotteryTab, (f, b) => (n(), a("li", { class: M([g.timeVal == f.date ? "active" : ""]), key: b, onClick: T => p(f, b) }, t(f.date.replace(/-/g, "/")) + " " + t(g.timeWeek(f.date)), 11, tu))),
                                          128,
                                       )),
                                    ]),
                                 ],
                                 512,
                              ),
                              [[He, c(u)]],
                           ),
                        ],
                        512,
                     ),
                     e("div", su, [
                        L(
                           $,
                           { loading: !((C = g.lotteryTab[g.timeIndex]) != null && C.games), class: "flex" },
                           {
                              template: A(() => [
                                 (n(),
                                 a(
                                    N,
                                    null,
                                    D(10, () => e("div", nu, ou)),
                                    64,
                                 )),
                              ]),
                              default: A(() => {
                                 var f;
                                 return [
                                    te(e("div", lu, null, 512), [[He, c(u)]]),
                                    (n(!0),
                                    a(
                                       N,
                                       null,
                                       D((f = g.lotteryTab[g.timeIndex]) == null ? void 0 : f.games, (b, T) => (n(), a("div", { class: "item", key: T, onClick: h => v(b, T) }, [e("div", { class: M(["box", [g.lotteryList.includes(b.type) ? "active" : ""]]) }, [te(e("img", cu, null, 512), [[y, b.typeImg]])], 2)], 8, iu))),
                                       128,
                                    )),
                                 ];
                              }),
                              _: 1,
                           },
                           8,
                           ["loading"],
                        ),
                     ]),
                  ])
               );
            }
         );
      },
   });
const ru = H(uu, [["__scopeId", "data-v-eebcfced"]]),
   du = { class: "betType" },
   _u = { class: "title" },
   vu = { class: "betType-list" },
   pu = { class: "item action" },
   mu = ["onClick"],
   gu = V({
      __name: "bettype",
      props: { betType: {}, betTypeList: {} },
      emits: ["onBetType"],
      setup(l, { emit: s }) {
         const o = u => {
            s("onBetType", u);
         };
         return (u, v) => {
            const p = U("van-skeleton");
            return (
               n(),
               a("div", du, [
                  e("h4", _u, t(u.$t("xosoTxt78")), 1),
                  e("ul", vu, [
                     L(
                        p,
                        { loading: !u.betTypeList, class: "flex" },
                        {
                           template: A(() => [
                              (n(),
                              a(
                                 N,
                                 null,
                                 D(7, () => e("li", pu)),
                                 64,
                              )),
                           ]),
                           default: A(() => [
                              (n(!0),
                              a(
                                 N,
                                 null,
                                 D(u.betTypeList, (d, i) => (n(), a("li", { class: M([u.betType.includes(d) ? "item action" : "item"]), onClick: _ => o(d), key: i }, t(u.$t("d4gameType" + d)), 11, mu))),
                                 128,
                              )),
                           ]),
                           _: 1,
                        },
                        8,
                        ["loading"],
                     ),
                  ]),
               ])
            );
         };
      },
   });
const hu = H(gu, [["__scopeId", "data-v-f8d59e19"]]),
   yu = { class: "howPay" },
   fu = { class: "title" },
   bu = { class: "howPay-list" },
   $u = { class: "item" },
   Cu = { key: 0, class: "icon" },
   ku = V({
      __name: "betpay",
      props: { rollNum: { default: 1 }, banBetPay: { default: 0 }, betPayId: { default: 1 }, duplex: { type: Boolean, default: !1 }, betPayList: {} },
      emits: ["onBetpay"],
      setup(l, { emit: s }) {
         const o = l,
            u = d => (d.includes(5) ? d.slice(0, -1) : d),
            v = d => {
               let i = !1,
                  _ = ((d === 2 || d === 3) && o.banBetPay === 1) || o.rollNum > 0,
                  r = o.duplex ? (d === 2 || d === 3 || d === 4) && o.banBetPay === 1 : d === 2 && (d === 2 || d === 3) && o.banBetPay === 1;
               return (_ || r) && (i = !0), i;
            },
            p = d => {
               s("onBetpay", d);
            };
         return (d, i) => {
            const _ = U("van-icon"),
               r = U("van-button"),
               g = U("van-skeleton");
            return (
               n(),
               a("div", yu, [
                  e("h4", fu, t(d.$t("gamePlay")), 1),
                  e("ul", bu, [
                     L(
                        g,
                        { loading: !u(d.betPayList), class: "flex" },
                        {
                           template: A(() => [
                              (n(),
                              a(
                                 N,
                                 null,
                                 D(4, () => e("li", $u)),
                                 64,
                              )),
                           ]),
                           default: A(() => [
                              (n(!0),
                              a(
                                 N,
                                 null,
                                 D(u(d.betPayList), (m, $) => (n(), Z(r, { plain: "", disabled: v(m), class: M([m == d.betPayId ? "item action" : "item"]), onClick: y => p(m), key: $ }, { default: A(() => [E(t(d.$t("d4gamePay" + m)) + " ", 1), m == d.betPayId ? (n(), a("i", Cu, [L(_, { name: "success" })])) : B("", !0)]), _: 2 }, 1032, ["disabled", "class", "onClick"]))),
                                 128,
                              )),
                           ]),
                           _: 1,
                        },
                        8,
                        ["loading"],
                     ),
                  ]),
               ])
            );
         };
      },
   });
const Tu = H(ku, [["__scopeId", "data-v-5de03e73"]]),
   wu = { class: "betAmount" },
   Lu = { class: "title" },
   Iu = { class: "betAmount-list" },
   Su = ["onClick"],
   Gu = V({
      __name: "betamount",
      props: { count: { default: 10 }, list: {} },
      emits: ["onAmount"],
      setup(l, { emit: s }) {
         const o = u => {
            s("onAmount", u);
         };
         return (u, v) => (
            n(),
            a("div", wu, [
               e("h4", Lu, t(u.$t("betAmounts")), 1),
               e("ul", Iu, [
                  (n(!0),
                  a(
                     N,
                     null,
                     D(u.list, (p, d) => (n(), a("li", { class: M([p == u.count ? "item active" : "item"]), onClick: i => o(p), key: d }, t(p), 11, Su))),
                     128,
                  )),
               ]),
            ])
         );
      },
   });
const xu = H(Gu, [["__scopeId", "data-v-e54159f6"]]),
   Bu = l => (ye("data-v-018f548a"), (l = l()), fe(), l),
   Nu = { class: "select" },
   Ru = { class: "tab" },
   Mu = ["onClick"],
   Du = Bu(() => e("span", null, "ALL", -1)),
   Au = { class: "numList" },
   Pu = ["onClick"],
   Ou = V({
      __name: "duplexbet",
      props: { tabList: {}, allActive: {}, numList: {} },
      emits: ["allAddnum", "addNumber"],
      setup(l, { emit: s }) {
         const o = v => {
               s("allAddnum", v);
            },
            u = (v, p) => {
               s("addNumber", v, p);
            };
         return (v, p) => (
            n(),
            a("div", Nu, [
               e("ul", Ru, [
                  (n(!0),
                  a(
                     N,
                     null,
                     D(v.tabList, (d, i) => (n(), a("li", { onClick: _ => o(d.type), class: M(v.allActive.includes(d.type) ? "active" : ""), key: i }, [E(t(d.name) + " ", 1), Du], 10, Mu))),
                     128,
                  )),
               ]),
               e("div", Au, [
                  (n(!0),
                  a(
                     N,
                     null,
                     D(
                        v.numList,
                        (d, i) => (
                           n(),
                           a("ul", { class: "", key: i }, [
                              (n(),
                              a(
                                 N,
                                 null,
                                 D(10, (_, r) => e("li", { class: M([d != null && d.list.includes(r) ? "action" : ""]), key: _, onClick: g => u(i, r) }, t(r), 11, Pu)),
                                 64,
                              )),
                           ])
                        ),
                     ),
                     128,
                  )),
               ]),
            ])
         );
      },
   });
const Vu = H(Ou, [["__scopeId", "data-v-018f548a"]]),
   Wu = { class: "foot" },
   Hu = { class: "item" },
   zu = { class: "item" },
   Eu = V({
      __name: "navfoot",
      props: { betQuantity: { type: Number, default: 0 }, totalAmount: { type: Number, default: 0 } },
      emits: ["onBet"],
      setup(l, { emit: s }) {
         const o = l,
            u = () => {
               o.totalAmount > 0 && s("onBet");
            };
         return (v, p) => (n(), a("div", Wu, [e("div", Hu, [e("p", null, t(v.$t("quantity")), 1), e("span", null, t(l.betQuantity), 1)]), e("div", zu, [e("p", null, t(v.$t("betAmounts")), 1), e("span", null, t(c(Ba)(l.totalAmount)), 1)]), e("div", { class: M(["item bet", [l.totalAmount > 0 ? "active" : ""]]), onClick: u }, t(v.$t("betting")), 3)]));
      },
   });
const Fu = H(Eu, [["__scopeId", "data-v-72be302f"]]),
   ju = { class: "x-bet" },
   Uu = { class: "x-bet-sub" },
   qu = { class: "x-bet-lottery" },
   Ku = { class: "x-bet-title" },
   Zu = { class: "box" },
   Xu = { class: "img" },
   Ju = { class: "x-bet-type" },
   Yu = { class: "x-bet-title" },
   Qu = { class: "box" },
   er = { class: "x-bet-multiple" },
   tr = { class: "tit" },
   sr = { class: "box" },
   nr = { class: "multiple-list" },
   ar = { class: "box" },
   or = ["onClick"],
   lr = { class: "x-bet-list" },
   ir = { class: "item" },
   cr = { class: "lab" },
   ur = { class: "number" },
   rr = { class: "item" },
   dr = { class: "lab" },
   _r = { class: "balance" },
   vr = { class: "item" },
   pr = { class: "lab" },
   mr = { class: "amount" },
   gr = { key: 0, class: "x-bet-wallet" },
   hr = { class: "tip" },
   yr = ["src"],
   fr = { class: "x-bet-agree" },
   br = { class: "agree" },
   $r = { class: "x-bet-foot" },
   Cr = V({
      __name: "betpopup",
      props: { betShow: { type: Boolean, default: !1 }, betQuantity: { default: 0 }, timeIndex: { default: 0 }, totalAmount: { default: 0 }, balance: { default: 0 }, lotteryList: {}, betType: {}, countVal: {}, multipleList: {}, checked: { type: Boolean, default: !1 }, preSaleRule: { type: Boolean, default: !1 }, lotteryTab: {} },
      emits: ["getClear", "onStepper", "changeStep", "onMltiple", "checkboxChange", "onCancel", "update:checked", "update:betShow", "update:countVal", "update:preSaleRule", "onBet"],
      setup(l, { emit: s }) {
         const o = l,
            u = ue(),
            v = b => {
               s("getClear", b);
            },
            p = b => {
               s("onStepper", b);
            },
            d = b => {
               s("changeStep", b);
            },
            i = b => {
               s("onMltiple", b);
            },
            _ = b => {
               s("checkboxChange", b);
            },
            r = () => {
               s("onCancel");
            },
            g = () => {
               s("onBet");
            },
            m = b => {
               const { lotteryTab: T, timeIndex: h } = o;
               let w = T[h].games.find(I => I.type == b);
               return w == null ? void 0 : w.typeImg;
            },
            { checked: $, betShow: y, countVal: C, preSaleRule: f } = ka(o, s);
         return (b, T) => {
            const h = U("van-icon"),
               w = U("van-field"),
               I = U("van-checkbox"),
               x = U("van-popup"),
               S = Te("lazy");
            return (
               n(),
               Z(
                  x,
                  { show: c(y), "onUpdate:show": T[7] || (T[7] = G => (it(y) ? (y.value = G) : null)), position: "bottom", "close-on-click-overlay": !1, style: { borderRadius: "15px 15px 0 0" } },
                  {
                     default: A(() => [
                        e("div", ju, [
                           e("div", Uu, [E(t(b.$t("betting")) + " ", 1), e("div", { class: "clear", onClick: T[0] || (T[0] = G => v(1)) }, [L(h, { class: "icon", name: "delete-o" }), E(t(b.$t("Clear")), 1)])]),
                           e("div", qu, [
                              e("h5", Ku, t(b.$t("ColorSpecies")), 1),
                              e("ul", Zu, [
                                 (n(!0),
                                 a(
                                    N,
                                    null,
                                    D(b.lotteryList, (G, R) => (n(), a("li", { class: "item", key: R }, [te(e("img", Xu, null, 512), [[S, m(G)]])]))),
                                    128,
                                 )),
                              ]),
                           ]),
                           e("div", Ju, [
                              e("h5", Yu, t(b.$t("xosoTxt78")), 1),
                              e("ul", Qu, [
                                 (n(!0),
                                 a(
                                    N,
                                    null,
                                    D(b.betType, (G, R) => (n(), a("li", { class: "item", key: R }, t(b.$t("d4gameType" + G)), 1))),
                                    128,
                                 )),
                              ]),
                           ]),
                           $t(b.$slots, "default", {}, void 0, !0),
                           e("div", er, [e("div", tr, t(b.$t("multiple")), 1), e("div", sr, [e("div", { class: "li minus", onClick: T[1] || (T[1] = G => p(1)) }, [L(h, { name: "minus" })]), L(w, { class: "digit", modelValue: c(C), "onUpdate:modelValue": T[2] || (T[2] = G => (it(C) ? (C.value = G) : null)), type: "digit", maxlength: 5, onInput: d }, null, 8, ["modelValue"]), e("div", { class: "li plus", onClick: T[3] || (T[3] = G => p(2)) }, [L(h, { name: "plus" })])])]),
                           e("div", nr, [
                              e("div", ar, [
                                 (n(!0),
                                 a(
                                    N,
                                    null,
                                    D(b.multipleList, (G, R) => (n(), a("div", { key: R, class: M(c(C) == G ? "active item" : "item"), onClick: O => i(G) }, " X" + t(G), 11, or))),
                                    128,
                                 )),
                              ]),
                           ]),
                           e("div", lr, [e("div", ir, [e("div", cr, t(b.$t("quantity")), 1), e("div", ur, t(b.betQuantity) + t(b.$t("note")), 1)]), e("div", rr, [e("div", dr, t(b.$t("walletBalance")), 1), e("div", _r, t(c(Be)(b.balance)), 1)]), e("div", vr, [e("div", pr, t(b.$t("betAmounts")), 1), e("div", mr, t(c(Ba)(b.totalAmount)), 1)])]),
                           b.totalAmount > b.balance ? (n(), a("div", gr, [e("div", hr, [e("img", { src: c(pe)("home/AllLotteryGames/NewVietnam", "tip") }, null, 8, yr), E(t(b.$t("insufficientWallet")), 1)]), e("div", { class: "txt", onClick: T[4] || (T[4] = G => c(u).push({ name: "Recharge" })) }, t(b.$t("torecharge")) + " >>", 1)])) : B("", !0),
                           e("div", fr, [L(I, { modelValue: c($), "onUpdate:modelValue": T[5] || (T[5] = G => (it($) ? ($.value = G) : null)), "checked-color": "#FF7172", onChange: _ }, { default: A(() => [e("div", br, t(b.$t("agree")), 1)]), _: 1 }, 8, ["modelValue"]), e("span", { class: "txt", onClick: T[6] || (T[6] = G => (f.value = !0)) }, t(b.$t("presaleRules")), 1)]),
                        ]),
                        e("div", $r, [e("div", { class: "cancel", onClick: r }, t(b.$t("cancel")), 1), e("div", { class: "bet", onClick: g }, t(b.$t("betting")), 1)]),
                     ]),
                     _: 3,
                  },
                  8,
                  ["show"],
               )
            );
         };
      },
   });
const kr = H(Cr, [["__scopeId", "data-v-3bcf4120"]]),
   Tr = { class: "x-bet" },
   wr = { key: 0, class: "x-bet-box" },
   Lr = { class: "item" },
   Ir = { class: "pay" },
   Sr = { class: "txt" },
   Gr = { class: "item" },
   xr = { class: "num" },
   Br = { class: "txt" },
   Nr = { key: 1, class: "x-bet-pay" },
   Rr = { class: "x-bet-title" },
   Mr = { class: "name" },
   Dr = { key: 2, class: "x-bet-dupleList" },
   Ar = { class: "digits" },
   Pr = { class: "sub" },
   Or = { class: "list" },
   Vr = { class: "item" },
   Wr = V({
      __name: "betcontent",
      props: { tabId: { default: 0 }, betPay: { default: 0 }, num: {}, dupleList: {}, tabList: {} },
      setup(l) {
         return (s, o) => (
            n(),
            a("div", Tr, [
               s.tabId === 1 ? (n(), a("div", wr, [e("div", Lr, [e("span", Ir, t(s.$t("d4gamePay" + s.betPay)), 1), e("p", Sr, t(s.$t("gamePlay")), 1)]), e("div", Gr, [e("span", xr, t(s.num), 1), e("p", Br, t(s.$t("bettingnumber")), 1)])])) : B("", !0),
               s.tabId === 2 ? (n(), a("div", Nr, [e("h5", Rr, t(s.$t("gamePlay")), 1), e("div", Mr, t(s.$t("d4gamePay" + s.betPay)), 1)])) : B("", !0),
               s.tabId === 2
                  ? (n(),
                    a("div", Dr, [
                       (n(!0),
                       a(
                          N,
                          null,
                          D(
                             s.dupleList,
                             (u, v) => (
                                n(),
                                a("div", { class: "box", key: v }, [
                                   e("div", Ar, [
                                      e("div", Pr, t(s.tabList[v].name), 1),
                                      e("div", Or, [
                                         (n(!0),
                                         a(
                                            N,
                                            null,
                                            D(u.list, (p, d) => (n(), a("div", { class: "num", key: d }, [e("div", Vr, t(p), 1)]))),
                                            128,
                                         )),
                                      ]),
                                   ]),
                                ])
                             ),
                          ),
                          128,
                       )),
                    ]))
                  : B("", !0),
            ])
         );
      },
   });
const Hr = H(Wr, [["__scopeId", "data-v-57b6cde4"]]),
   va = k(!1),
   pn = k(!1),
   pa = k(0),
   Hs = k(),
   ma = k();
function $s() {
   const l = ze({ timeVal: Ke().format("YYYY-MM-DD"), timeIndex: 0, lotteryList: [], lotteryTab: [], tabId: 1, rollNum: 0, betQuantity: 0, betAmount: 0, totalAmount: 0, betType: [], betTypeList: [], betPay: 1, betPayList: [], dupleList: [{ list: [] }, { list: [] }, { list: [] }, { list: [] }], allActive: [], banbetpay: 0, multipleList: [1, 5, 10, 20, 50, 100], betAmountList: [10, 50, 100, 500, 1e3, 5e3], duplex: !1, balance: 0, stopTime: null }),
      { t: s } = _e(),
      { setLoading: o } = Jt(),
      u = k(""),
      v = k(1),
      p = k(!0),
      d = k(!1),
      i = k(!1),
      _ = k([{}]),
      r = k(),
      g = k(),
      m = [
         { name: s("xosoTxt90"), type: 0 },
         { name: s("xosoTxt89"), type: 1 },
         { name: s("xosoTxt88"), type: 2 },
         { name: s("xosoTxt87"), type: 3 },
      ],
      $ = q(() => l.timeVal),
      y = q(() => l.timeIndex),
      C = q(() => l.lotteryList),
      f = q(() => l.lotteryTab),
      b = q(() => l.tabId),
      T = q(() => l.rollNum),
      h = q(() => l.betType),
      w = q(() => l.betTypeList),
      I = q(() => l.betPay),
      x = q(() => l.betPayList),
      S = q(() => l.betAmount),
      G = q(() => l.totalAmount),
      R = q(() => l.betQuantity),
      O = q(() => l.banbetpay),
      P = q(() => l.dupleList),
      W = q(() => l.allActive),
      J = q(() => l.multipleList),
      le = q(() => l.betAmountList),
      ie = q(() => l.duplex),
      ne = q(() => l.balance),
      z = K => {
         const oe = [s("Sunday"), s("Monday"), s("Tuesday"), s("Wednesday"), s("Thursday"), s("Friday"), s("Saturday")],
            Ce = new Date(K);
         return oe[Ce.getDay()];
      },
      X = (K, oe) => {
         (l.timeIndex = oe), (l.timeVal = K.date), Se(1), (va.value = !1);
      },
      ce = (K, oe) => {
         if (l.lotteryList.includes(K.type)) {
            let Ce = l.lotteryList.indexOf(K.type);
            l.lotteryList.splice(Ce, 1);
         } else l.lotteryList.push(K.type);
         se(l.betType.length, l.betAmount, l.betPay);
      },
      Ne = K => {
         (l.tabId = K), Se(0);
      },
      Se = K => {
         (u.value = ""), (l.betPay = 1), (l.rollNum = 0), (l.betType.length = 0), (l.betAmount = l.betAmountList[0]), l.dupleList.forEach(oe => (oe.list = [])), (l.allActive.length = 0), (v.value = 1), ge(), (i.value = !1), K == 1 && (l.lotteryList.length = 0);
      },
      ge = () => {
         (l.totalAmount = 0), (l.betQuantity = 0), (l.banbetpay = 0);
      },
      Je = () => {
         if (l.rollNum >= 2 || u.value.length >= 4) return Ee(s("EnterTip"));
         (l.betPay = 5), (u.value += "R"), (l.rollNum = xe(u.value.split(""))), se(l.betType.length, l.betAmount, l.betPay);
      },
      Qe = K => {
         (u.value = K.target.value), u.value == "" && (l.betPay = 1), u.value.length !== 4 ? ge() : we(K.target.value) ? (se(l.betType.length, l.betAmount, l.betPay), (l.banbetpay = ae(u.value)), l.banbetpay === 1 && (l.betPay = 1)) : ((u.value = ""), (l.betPay = 1), Ee(s("FormatTip1"))), (l.rollNum = xe(u.value.split("")));
      },
      et = K => {
         if (K.target.value == "" || K.target.value.length !== 4) return;
         we(K.target.value) || ((u.value = ""), (l.betPay = 1), Ee(s("FormatTip1")));
      },
      we = K => /^[0-9]{4}|\R[0-9]{3}|[0-9]{1}\R[0-9]{2}|[0-9]{2}\R[0-9]{1}|\R[0-9]{2}\R|[0-9]{2}\R{2}|\R{2}[0-9]{2}|[0-9]{3}\R|[0-9]\R{2}[0-9]|[0-9]\R[0-9]\R|\R[0-9]\R[0-9]$/.test(K),
      xe = K => {
         let oe = K.indexOf("R"),
            Ce = 0;
         for (; oe !== -1; ) Ce++, (oe = K.indexOf("R", oe + 1));
         return Ce;
      },
      Le = K => {
         const { betType: oe, betAmount: Ce, betPay: Me } = l;
         if (oe.includes(K)) {
            let We = oe.indexOf(K);
            oe.splice(We, 1);
         } else oe.push(K);
         se(oe.length, Ce, Me);
      },
      Ie = K => {
         (l.betPay = K), se(l.betType.length, l.betAmount, K);
      },
      re = K => {
         (l.betAmount = K), se(l.betType.length, K, l.betPay);
      },
      se = (K, oe, Ce) => {
         let { tabId: Me, dupleList: We, lotteryList: Oe } = l;
         if (Me === 1) {
            if (u.value.length !== 4) return !1;
            Q(K, oe, u.value, Ce);
         } else if (qe(We)) (l.betQuantity = $e(We) * Oe.length * l.betType.length), (l.totalAmount = l.betQuantity * oe * Oe.length * v.value);
         else {
            const ot = We.map(Fe => Fe.list[0]).join("");
            if (ot.length !== 4) return;
            (l.banbetpay = ae(ot)), Q(K, oe, ot, Ce);
         }
      },
      Q = (K, oe, Ce, Me) => {
         let { rollNum: We, lotteryList: Oe } = l,
            ot = K * oe * Oe.length * v.value,
            Fe = K * Oe.length,
            st = 0,
            pt = 0;
         if (Me === 1 || Me === 2) (st = ot), (pt = Fe);
         else if (Me === 3) {
            const Et = ae(Ce);
            (st = ot * Et), (pt = Fe * Et);
         } else if (Me === 4) {
            const Et = ee(Ce);
            (st = ot * (Et ? 1 : 2)), (pt = Fe * (Et ? 1 : 2));
         } else Me === 5 && ((st = ot * (We > 0 ? (We == 1 ? 10 : 10 * 10) : 0)), (pt = Fe * (We > 0 ? (We == 1 ? 10 : 10 * 10) : 0)));
         (l.totalAmount = st), (l.betQuantity = pt);
      },
      ee = K => K === K.split("").reverse().join("");
   function ae(K) {
      function oe(Fe) {
         return Fe <= 1 ? 1 : Fe * oe(Fe - 1);
      }
      let Ce = K.split("").map(Number),
         Me = [...new Set(Ce)],
         We = oe(Ce.length),
         Oe = 1;
      for (const Fe of Me) {
         const st = Ce.filter(pt => pt === Fe).length;
         Oe *= oe(st);
      }
      return We / Oe;
   }
   const Ge = K => {
         const { dupleList: oe, allActive: Ce, betType: Me, betAmount: We } = l;
         if (((oe[K].list = []), Ce.includes(K))) {
            let Oe = Ce.indexOf(K);
            Ce.splice(Oe, 1);
         } else {
            Ce.push(K);
            for (let Oe = 0; Oe < 10; Oe++) oe[K].list.push(Oe);
         }
         dt(), se(Me.length, We);
      },
      Re = (K, oe) => {
         const { dupleList: Ce, allActive: Me, betType: We, betAmount: Oe, betPay: ot } = l,
            Fe = Ce[K].list;
         if (Fe.includes(oe)) {
            let st = Fe.indexOf(oe);
            Fe.splice(st, 1);
         } else Fe.push(oe);
         if (Fe.length === 10) Me.push(K);
         else if (Me.includes(K)) {
            let st = Me.indexOf(K);
            Me.splice(st, 1);
         }
         if ((dt(), $e(Ce) > 0)) {
            if ((se(We.length, Oe, ot), $e(Ce) === 1)) {
               const st = Ce.map(pt => pt.list[0]).join("");
               l.banbetpay = ae(st);
            }
            l.banbetpay === 1 && (l.betPay = 1);
         } else qe(Ce) ? (l.banbetpay = qe(Ce) ? 1 : 0) : ge();
      },
      dt = () => {
         const { dupleList: K } = l;
         (l.duplex = qe(K)), (l.banbetpay = qe(K) ? 1 : 0), qe(K) && (l.betPay = 1);
      };
   function qe(K) {
      for (let oe = 0; oe < K.length; oe++) {
         const Ce = K[oe].list;
         if (Array.isArray(Ce) && Ce.length > 1) return !0;
      }
      return !1;
   }
   function $e(K) {
      let oe = 1;
      return (
         K.forEach((Ce, Me) => {
            oe *= Ce.list.length;
         }),
         oe
      );
   }
   const Ht = () => {
         i.value = !0;
      },
      At = K => {
         const { betType: oe, betAmount: Ce, betPay: Me } = l;
         switch (K) {
            case 1:
               v.value > 1 && v.value--;
               break;
            case 2:
               v.value++;
               break;
         }
         se(oe.length, Ce, Me);
      },
      Tt = K => {
         const { betType: oe, betAmount: Ce, betPay: Me } = l;
         (v.value = K.target.value), se(oe.length, Ce, Me);
      },
      De = K => {
         const { betType: oe, betAmount: Ce, betPay: Me } = l;
         (v.value = K), se(oe.length, Ce, Me);
      },
      ls = K => {
         p.value = K;
      },
      wt = () => {
         const { lotteryList: K, lotteryTab: oe, timeIndex: Ce, tabId: Me, betPay: We, betType: Oe, betQuantity: ot, betAmount: Fe, dupleList: st, totalAmount: pt, balance: Et } = l;
         if (pt > Et) return Ee(s("wfDesc3"));
         if (ot / K.length > 7e3) return Ee(s("d4BetTip", [7e3]));
         if (!p.value) return Ee(s("agreePresaleRules"));
         let bt = {};
         (bt.type = K), (bt.gameType = We);
         let Kt = "";
         Me === 1 ? (Kt = u.value) : (Kt = st.map(Ft => Ft.list.sort((Ot, rs) => Ot - rs).join(",")).join("|")),
            (bt.betContent = Kt),
            (bt.betType = Oe),
            (bt.betMethod = Me),
            (bt.betNumber = ot),
            (bt.multiple = Number(v.value)),
            (bt.amount = Fe),
            (bt.issueNumber = K.map(Ft => {
               const Ot = oe[Ce].games.find(rs => rs.type === Ft);
               return Ot == null ? void 0 : Ot.issueNumber;
            })),
            (i.value = !1),
            Ss(bt),
            is();
      },
      is = () => {
         setTimeout(() => {
            pn.value = !1;
         }, 1500);
      },
      Lt = async () => {
         const K = await de(Tn());
         K != null && K.data && (l.balance = (K == null ? void 0 : K.data.amount) || 0);
      },
      an = async () => {
         const K = await de(wl());
         K != null && K.data && ((l.multipleList = (K == null ? void 0 : K.data.betMultiplier) || []), (l.betAmountList = (K == null ? void 0 : K.data.betAmount) || []), (l.betTypeList = (K == null ? void 0 : K.data.betType) || []), (l.betPayList = (K == null ? void 0 : K.data.gameType) || []), (l.betAmount = (K == null ? void 0 : K.data.betAmount[0]) || 0));
      },
      at = async () => {
         o(!0);
         const K = await de(Ll());
         K != null && K.data && ((l.timeVal = K.data[l.timeIndex].date), (l.lotteryTab = (K == null ? void 0 : K.data) || []), Os(K.serviceNowTime)), o(!1);
      },
      Os = K => {
         const { lotteryTab: oe, timeIndex: Ce } = l,
            We = oe[Ce].games.map(st => st.stopTime).map(st => new Date(st)),
            Oe = new Date(Math.min(...We)),
            ot = Ke(Oe).format("YYYY-MM-DD HH:mm:ss"),
            Fe = Ke(ot).diff(Ke(K));
         tt(Fe / 1e3);
      },
      tt = K => {
         l.stopTime = setInterval(() => {
            K > 0 ? K-- : (Se(1), clearInterval(l.stopTime), at());
         }, 1e3);
      },
      Ss = async K => {
         const oe = await de(Il(K));
         (oe == null ? void 0 : oe.code) === 0 ? ((pn.value = !0), Lt(), pa.value === 1 && Pt({ pageSize: 10, pageNo: 1, type: 0, date: Ke(new Date()).format("YYYY-MM-DD") + " 00:00:00" }), is()) : at(), Se(1);
      },
      zt = async () => {
         o(!0), (_.value.length = 0);
         const K = await de(Sl());
         K != null &&
            K.data &&
            (K == null ||
               K.data.forEach(oe => {
                  let Ce = [],
                     Me = [],
                     We = [];
                  oe.items.forEach(Oe => {
                     Oe.playId.split("_").length == 1 ? We.push({ ...Oe, code: Oe.playId }) : (Oe.playId.split("_")[0] == "1" && Ce.push({ ...Oe, code: Oe.playId.split("_")[1] }), Oe.playId.split("_")[0] == "2" && Me.push({ ...Oe, code: Oe.playId.split("_")[1] }));
                  }),
                     _.value.push({
                        playTypeId: oe.playTypeId,
                        playTypeTitle: oe.playTypeTitle,
                        lists: [
                           { type: 1, list: Ce },
                           { type: 2, list: Me },
                           { type: 3, list: We },
                        ],
                     });
               })),
            o(!1);
      },
      cs = async () => {
         if (Hs.value) return;
         o(!0);
         const K = await de(Gl());
         K != null && K.data && ((Hs.value = K.data.map(oe => ((oe.typeName = s(`d4LType${oe.typeId}`)), oe))), Hs.value.unshift({ typeId: 0, typeName: s("all") })), o(!1);
      },
      Pt = async K => {
         o(!0);
         const oe = await de(xl(K));
         oe != null && oe.data && (ma.value = (oe == null ? void 0 : oe.data) || {}), o(!1);
      },
      us = async () => {
         o(!0);
         const K = await de(Bl());
         K != null && K.data && (r.value = (K == null ? void 0 : K.data) || []), o(!1);
      },
      qt = async K => {
         o(!0);
         const oe = await de(Nl(K));
         oe && (g.value = (oe == null ? void 0 : oe.data) || {}), o(!1);
      },
      Qt = async K => {
         const oe = await de(Rl(K));
         return new Promise(async (Ce, Me) => {
            oe ? Ce(oe) : Me(oe);
         });
      };
   return (
      jt(() => {
         clearInterval(l.stopTime);
      }),
      { tabList: m, getTimeWeek: z, onTime: X, lotterTab: ce, onTab: Ne, getClear: Se, onRoll: Je, getInput: Qe, getBlur: et, onBetType: Le, onBetpay: Ie, onAmount: re, onClickBet: Ht, addNumber: Re, allAddnum: Ge, onStepper: At, changeStep: Tt, onMltiple: De, checkboxChange: ls, onBet: wt, getWinsUserAmount: Lt, getGameConfig: an, getGameIssue: at, getOddsList: zt, getTypeList: cs, getMy4DHistory: Pt, get4DResult: us, gameResultByType: qt, gameCancelOrder: Qt, gameListIndex: pa, timeVal: $, lotteryTab: f, timeIndex: y, lotteryList: C, timeShow: va, betShow: i, tabId: b, rollNum: T, banbetpay: O, num: u, betType: h, betTypeList: w, betPay: I, betPayList: x, count: S, totalAmount: G, betQuantity: R, allActive: W, dupleList: P, countVal: v, checked: p, preSaleRule: d, multipleList: J, betAmountList: le, duplex: ie, balance: ne, promptShow: pn, oddsList: _, typeList: Hs, myHistory: ma, newGameResult: r, gameResultByTypeO: g }
   );
}
const zr = { key: 0, class: "resultBox" },
   Er = { class: "r123" },
   Fr = { class: "r" },
   jr = { class: "num" },
   Ur = { class: "r" },
   qr = { class: "num" },
   Kr = { class: "r" },
   Zr = { class: "num" },
   Xr = { class: "title" },
   Jr = { class: "rOther" },
   Yr = { class: "title" },
   Qr = { class: "rOther" },
   ed = V({
      __name: "showResult",
      props: { data: {} },
      setup(l) {
         return (s, o) => {
            var u, v, p, d, i;
            return s.data
               ? (n(),
                 a("div", zr, [
                    e("div", Er, [
                       e("div", Fr, [
                          e("div", jr, [
                             (n(!0),
                             a(
                                N,
                                null,
                                D((u = s.data) == null ? void 0 : u.firstPrize.split(""), (_, r) => (n(), a("span", { key: r }, t(_), 1))),
                                128,
                             )),
                          ]),
                          e("p", null, t(s.$t("d4gameType3")), 1),
                       ]),
                       e("div", Ur, [
                          e("div", qr, [
                             (n(!0),
                             a(
                                N,
                                null,
                                D((v = s.data) == null ? void 0 : v.secondPrize.split(""), (_, r) => (n(), a("span", { key: r }, t(_), 1))),
                                128,
                             )),
                          ]),
                          e("p", null, t(s.$t("d4gameType4")), 1),
                       ]),
                       e("div", Kr, [
                          e("div", Zr, [
                             (n(!0),
                             a(
                                N,
                                null,
                                D((p = s.data) == null ? void 0 : p.thirdPrize.split(""), (_, r) => (n(), a("span", { key: r }, t(_), 1))),
                                128,
                             )),
                          ]),
                          e("p", null, t(s.$t("d4gameType5")), 1),
                       ]),
                    ]),
                    e("div", Xr, t(s.$t("d4gameType6")), 1),
                    e("div", Jr, [
                       (n(!0),
                       a(
                          N,
                          null,
                          D((d = s.data) == null ? void 0 : d.specialPrize.split(","), (_, r) => (n(), a("span", { key: r }, t(_), 1))),
                          128,
                       )),
                    ]),
                    e("div", Yr, t(s.$t("d4gameType7")), 1),
                    e("div", Qr, [
                       (n(!0),
                       a(
                          N,
                          null,
                          D((i = s.data) == null ? void 0 : i.consolationPrize.split(","), (_, r) => (n(), a("span", { key: r }, t(_), 1))),
                          128,
                       )),
                    ]),
                 ]))
               : B("", !0);
         };
      },
   });
const xn = H(ed, [["__scopeId", "data-v-e89da5ba"]]),
   Wt = l => (ye("data-v-ac8b6809"), (l = l()), fe(), l),
   td = { key: 0, class: "gameBox" },
   sd = { class: "items" },
   nd = ["onClick"],
   ad = { class: "left" },
   od = { class: "time" },
   ld = { class: "right" },
   id = { key: 0, class: "info" },
   cd = { class: "order" },
   ud = ["onClick"],
   rd = { class: "copy" },
   dd = Wt(() => e("div", { class: "line" }, null, -1)),
   _d = ["onClick"],
   vd = { class: "copy" },
   pd = Wt(() => e("div", { class: "line" }, null, -1)),
   md = { class: "li" },
   gd = Wt(() => e("div", { class: "line" }, null, -1)),
   hd = { class: "li" },
   yd = Wt(() => e("div", { class: "line" }, null, -1)),
   fd = { class: "li" },
   bd = Wt(() => e("div", { class: "line" }, null, -1)),
   $d = { class: "li" },
   Cd = Wt(() => e("div", { class: "line" }, null, -1)),
   kd = { class: "li" },
   Td = Wt(() => e("div", { class: "line" }, null, -1)),
   wd = { class: "li" },
   Ld = { class: "type" },
   Id = Wt(() => e("div", { class: "line1" }, [e("p")], -1)),
   Sd = { class: "order" },
   Gd = { class: "li" },
   xd = { class: "numTit" },
   Bd = { class: "num type" },
   Nd = { class: "li" },
   Rd = { class: "numTit" },
   Md = { class: "num select" },
   Dd = { class: "n" },
   Ad = { class: "li" },
   Pd = Wt(() => e("div", { class: "line" }, null, -1)),
   Od = { class: "li" },
   Vd = { key: 1 },
   Wd = Wt(() => e("div", { class: "line" }, null, -1)),
   Hd = { class: "li" },
   zd = { class: "reTitle" },
   Ed = ["onClick"],
   Fd = { class: "foot" },
   jd = { class: "page" },
   Ud = V({
      __name: "showGame",
      props: { pageQuery: {} },
      emits: ["update:pageQuery"],
      setup(l, { emit: s }) {
         const o = l,
            { pageQuery: u } = ka(o, s),
            { gameCancelOrder: v, myHistory: p, tabList: d, getMy4DHistory: i } = $s(),
            { t: _ } = _e(),
            r = k(!1),
            g = k(""),
            m = k(-1);
         function $(h) {
            switch (h) {
               case 1:
                  return _("bettingResultState1");
               case 2:
                  return _("bettingResultState3");
               case 3:
                  return _("hasWon");
               case 4:
                  return _("xosoTxt74");
               case 5:
                  return _("xosoTxt75");
               case 6:
                  return _("xosoTxt76");
               default:
                  return h;
            }
         }
         const y = () => {
               u.value.pageNo--, (m.value = -1), i(u.value);
            },
            C = () => {
               u.value.pageNo++, (m.value = -1), i(u.value);
            },
            f = h => {
               m.value === h ? (m.value = -1) : (m.value = h);
            };
         function b(h) {
            (r.value = !0), (g.value = h);
         }
         function T() {
            (r.value = !1),
               v({ orderNumber: g.value })
                  .then(h => {
                     h && (kn(_("xosoTxt96")), i(u.value));
                  })
                  .catch(h => {});
         }
         return (h, w) => {
            var x, S, G;
            const I = U("van-icon");
            return (
               n(),
               a(
                  N,
                  null,
                  [
                     ((x = c(p)) == null ? void 0 : x.list.length) > 0
                        ? (n(),
                          a("div", td, [
                             e("div", sd, [
                                (n(!0),
                                a(
                                   N,
                                   null,
                                   D(
                                      c(p).list,
                                      (R, O) => (
                                         n(),
                                         a(
                                            "div",
                                            { class: M(["itemBox", { active: m.value === O }]) },
                                            [
                                               e("div", { class: "item", onClick: P => f(O) }, [e("div", ad, [e("div", { class: M(["name", { bold: m.value === O }]) }, t(h.$t(`d4LType${R.type}`)), 3), e("div", od, t(R.createTime), 1)]), e("div", ld, [e("div", { class: M(["state", `state${R.state}`]) }, t($(R.state)), 3), [2, 3].includes(R.state) ? (n(), a("div", { key: 0, class: M(["amount", R.state == 3 ? "green" : "red"]) }, t(R.profitAmount), 3)) : B("", !0)])], 8, nd),
                                               m.value === O
                                                  ? (n(),
                                                    a("div", id, [
                                                       e("div", cd, [
                                                          e("div", { class: "li", onClick: P => c(Zt)(R.orderNumber) }, [e("span", null, t(h.$t("orderNo")), 1), e("h6", rd, t(R.orderNumber), 1)], 8, ud),
                                                          dd,
                                                          e("div", { class: "li", onClick: P => c(Zt)(R.issueNumber) }, [e("span", null, t(h.$t("betNumber")), 1), e("h6", vd, t(R.issueNumber), 1)], 8, _d),
                                                          pd,
                                                          e("div", md, [e("span", null, t(h.$t("ColorSpecies")), 1), e("h6", null, t(h.$t(`d4LType${R.type}`)), 1)]),
                                                          gd,
                                                          e("div", hd, [e("span", null, t(h.$t("gamePlay")), 1), e("h6", null, t(h.$t(`d4gamePay${R.gameType}`)), 1)]),
                                                          yd,
                                                          e("div", fd, [e("span", null, t(h.$t("betAmounts")), 1), e("h6", null, t(c(Be)(R.amount)), 1)]),
                                                          bd,
                                                          e("div", $d, [e("span", null, t(h.$t("xosoTxt79")), 1), e("h6", null, t(R.betNumber) + " " + t(h.$t("note")), 1)]),
                                                          Cd,
                                                          e("div", kd, [e("span", null, t(h.$t("multiple")), 1), e("h6", null, t(R.multiple), 1)]),
                                                          Td,
                                                          e("div", wd, [e("span", null, t(h.$t("xosoTxt78")), 1)]),
                                                          e("div", Ld, [
                                                             (n(!0),
                                                             a(
                                                                N,
                                                                null,
                                                                D(R.betType.split(","), P => (n(), a("span", null, t(h.$t(`d4gameType${P}`)), 1))),
                                                                256,
                                                             )),
                                                          ]),
                                                          Id,
                                                       ]),
                                                       e("div", Sd, [
                                                          R.betMethod == 1 ? (n(), a(N, { key: 0 }, [e("div", Gd, [e("span", xd, t(h.$t("bettingnumber")) + " (" + t(h.$t("EnterBet")) + ") ", 1)]), e("div", Bd, [e("span", null, t(R.betContent), 1)])], 64)) : B("", !0),
                                                          R.betMethod == 2
                                                             ? (n(),
                                                               a(
                                                                  N,
                                                                  { key: 1 },
                                                                  [
                                                                     e("div", Nd, [e("span", Rd, t(h.$t("bettingnumber")) + " (" + t(h.$t("SelectBet")) + ")", 1)]),
                                                                     e("div", Md, [
                                                                        (n(!0),
                                                                        a(
                                                                           N,
                                                                           null,
                                                                           D(
                                                                              R.betContent.split("|"),
                                                                              (P, W) => (
                                                                                 n(),
                                                                                 a("div", { key: W }, [
                                                                                    e("h6", null, t(c(d)[W].name), 1),
                                                                                    e("div", Dd, [
                                                                                       (n(!0),
                                                                                       a(
                                                                                          N,
                                                                                          null,
                                                                                          D(P.split(","), (J, le) => (n(), a("span", { key: le }, t(J), 1))),
                                                                                          128,
                                                                                       )),
                                                                                    ]),
                                                                                 ])
                                                                              ),
                                                                           ),
                                                                           128,
                                                                        )),
                                                                     ]),
                                                                  ],
                                                                  64,
                                                               ))
                                                             : B("", !0),
                                                          e("div", Ad, [e("span", null, t(h.$t("statusMay")), 1), e("h6", { class: M(["stateInfo", `state${R.state}`]) }, t($(R.state)), 3)]),
                                                          Pd,
                                                          e("div", Od, [e("span", null, t(h.$t("winOrLose")), 1), [2, 3].includes(R.state) ? (n(), a("h6", { key: 0, class: M(["amountInfo", R.state == 3 ? "green" : "red"]) }, t(R.profitAmount), 3)) : (n(), a("h6", Vd, "--"))]),
                                                          Wd,
                                                          e("div", Hd, [e("span", null, t(h.$t("createTime")), 1), e("h6", null, t(R.createTime), 1)]),
                                                       ]),
                                                       [2, 3].includes(R.state) ? (n(), a(N, { key: 0 }, [e("div", zd, t(h.$t("betResult")), 1), L(xn, { data: R }, null, 8, ["data"])], 64)) : B("", !0),
                                                       R.state == 1 ? (n(), a("div", { key: 1, class: "btn", onClick: P => b(R.orderNumber) }, t(h.$t("xosoTxt82")), 9, Ed)) : B("", !0),
                                                    ]))
                                                  : B("", !0),
                                            ],
                                            2,
                                         )
                                      ),
                                   ),
                                   256,
                                )),
                             ]),
                             e("div", Fd, [e("div", { class: M(["previous", { disabled: c(p).pageNo <= 1 }]), onClick: y }, [L(I, { name: "arrow-left", size: "20" })], 2), e("div", jd, t(c(p).pageNo) + "/" + t((S = c(p)) == null ? void 0 : S.totalPage), 1), e("div", { class: M(["next", { disabled: c(p).pageNo >= ((G = c(p)) == null ? void 0 : G.totalPage) }]), onClick: C }, [L(I, { name: "arrow", size: "20" })], 2)]),
                          ]))
                        : (n(), Z(gt, { key: 1 })),
                     L(Mt, { show: r.value, "onUpdate:show": w[0] || (w[0] = R => (r.value = R)), title: h.$t("xosoTxt99"), onConfirm: w[1] || (w[1] = R => T()) }, null, 8, ["show", "title"]),
                  ],
                  64,
               )
            );
         };
      },
   });
const so = H(Ud, [["__scopeId", "data-v-ac8b6809"]]),
   qd = { class: "gamelist" },
   Kd = { class: "tab" },
   Zd = { class: "con" },
   Xd = { class: "head" },
   Jd = ["src"],
   Yd = V({
      __name: "gameList",
      setup(l) {
         const s = ue(),
            { gameListIndex: o, newGameResult: u, get4DResult: v, getMy4DHistory: p } = $s();
         function d(g) {
            (o.value = g), r();
         }
         function i() {
            o.value == 0 ? s.push({ name: "AllLotteryGames-4DLotteryResults" }) : o.value == 1 && s.push({ name: "AllLotteryGames-4DmyGame" });
         }
         const _ = ze({ type: 0, date: Ke(new Date()).format("YYYY-MM-DD 00:00:00"), pageSize: 10, pageNo: 1 });
         function r() {
            o.value == 0 ? v() : p(_);
         }
         return (
            he(() => {
               r();
            }),
            (g, m) => {
               var $;
               return (
                  n(),
                  a("div", qd, [
                     e("div", Kd, [e("div", { class: M({ active: c(o) == 0 }), onClick: m[0] || (m[0] = y => d(0)) }, t(g.$t("d4Tip1")), 3), e("div", { class: M({ active: c(o) == 1 }), onClick: m[1] || (m[1] = y => d(1)) }, t(g.$t("myGame")), 3)]),
                     e("div", Zd, [
                        e("div", { class: "more", onClick: i }, t(g.$t("more")), 1),
                        c(o) == 0
                           ? (n(),
                             a(
                                N,
                                { key: 0 },
                                [
                                   (n(!0),
                                   a(
                                      N,
                                      null,
                                      D(c(u), y => (n(), a("div", { class: "items", key: y.issueNumber }, [e("div", Xd, [e("img", { src: y.typeImg, alt: "" }, null, 8, Jd), e("h1", null, t(g.$t(`d4LType${y.type}`)), 1), e("p", null, t(y.openDate) + " " + t(g.$t(`${c(Ke)(y.openDate).format("dddd")}`)), 1)]), L(xn, { data: y }, null, 8, ["data"])]))),
                                      128,
                                   )),
                                   (($ = c(u)) == null ? void 0 : $.length) == 0 ? (n(), Z(gt, { key: 0 })) : B("", !0),
                                ],
                                64,
                             ))
                           : B("", !0),
                        c(o) == 1 ? (n(), Z(so, { key: 1, pageQuery: _, "onUpdate:pageQuery": m[2] || (m[2] = y => (_ = y)) }, null, 8, ["pageQuery"])) : B("", !0),
                     ]),
                  ])
               );
            }
         );
      },
   });
const Qd = H(Yd, [["__scopeId", "data-v-362722a9"]]),
   e1 = { class: "x-4d" },
   t1 = { class: "x-4d-more" },
   s1 = ["src"],
   n1 = ["src"],
   a1 = { class: "x-4d-body" },
   o1 = { class: "x-4d-tab" },
   l1 = { class: "x-4d-content" },
   i1 = { key: 0, class: "enter" },
   c1 = ["placeholder"],
   u1 = ["placeholder"],
   r1 = { class: "box" },
   d1 = ["src"],
   _1 = { class: "PreSale" },
   v1 = { class: "head" },
   p1 = { class: "body" },
   m1 = { class: "foot" },
   g1 = V({
      __name: "index",
      setup(l) {
         const { t: s } = _e(),
            o = ue(),
            { getTimeWeek: u, onTime: v, lotterTab: p, onTab: d, getClear: i, onRoll: _, getInput: r, getBlur: g, onBetType: m, onBetpay: $, onAmount: y, onClickBet: C, addNumber: f, allAddnum: b, onStepper: T, changeStep: h, onMltiple: w, checkboxChange: I, onBet: x, getWinsUserAmount: S, getGameConfig: G, getGameIssue: R, tabList: O, timeVal: P, lotteryTab: W, timeIndex: J, lotteryList: le, timeShow: ie, betShow: ne, tabId: z, num: X, rollNum: ce, banbetpay: Ne, betType: Se, betTypeList: ge, betPay: Je, betPayList: Qe, count: et, totalAmount: we, betQuantity: xe, dupleList: Le, allActive: Ie, countVal: re, checked: se, preSaleRule: Q, multipleList: ee, betAmountList: ae, duplex: Ge, balance: Re, promptShow: dt } = $s();
         return (
            he(() => {
               S(), G(), R();
            }),
            (qe, $e) => {
               const Ht = U("NavBar"),
                  At = U("van-button"),
                  Tt = U("van-popup");
               return (
                  n(),
                  a("div", e1, [
                     L(Ht, { "left-arrow": "", onClickLeft: $e[2] || ($e[2] = De => c(o).go(-1)), "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)", title: "4D" }, { right: A(() => [e("div", t1, [e("img", { class: "img", src: c(pe)("home/AllLotteryGames/4D", "howpay"), alt: "", onClick: $e[0] || ($e[0] = () => c(o).push({ name: "AllLotteryGames-4DPlay" })) }, null, 8, s1), e("img", { class: "img", src: c(pe)("home/AllLotteryGames/4D", "odds"), alt: "", onClick: $e[1] || ($e[1] = () => c(o).push({ name: "AllLotteryGames-4DOdds" })) }, null, 8, n1)])]), _: 1 }),
                     L(ru, { onOnTime: c(v), "lottery-tab": c(W), "time-index": c(J), onOnLotteryTab: c(p), "time-week": c(u), "lottery-list": c(le), modelValue: c(ie), "onUpdate:modelValue": $e[3] || ($e[3] = De => (it(ie) ? (ie.value = De) : null)), "time-val": c(P) }, null, 8, ["onOnTime", "lottery-tab", "time-index", "onOnLotteryTab", "time-week", "lottery-list", "modelValue", "time-val"]),
                     e("div", a1, [
                        e("div", o1, [e("div", { onClick: $e[4] || ($e[4] = De => c(d)(1)), class: M([c(z) == 1 ? "active" : ""]) }, t(c(s)("EnterBet")), 3), e("div", { onClick: $e[5] || ($e[5] = De => c(d)(2)), class: M([c(z) == 2 ? "active" : ""]) }, t(c(s)("SelectBet")), 3)]),
                        e("div", l1, [
                           c(z) === 1
                              ? (n(),
                                a("div", i1, [
                                   c(Je) != 5 ? te((n(), a("input", { key: 0, class: M(c(X).length > 0 ? "input fz24" : "input"), oninput: "value=value.replace(/\\D/g,'')", "onUpdate:modelValue": $e[6] || ($e[6] = De => (it(X) ? (X.value = De) : null)), type: "text", placeholder: c(s)("PenterNumber"), maxlength: "4", onInput: $e[7] || ($e[7] = (...De) => c(r) && c(r)(...De)), onBlur: $e[8] || ($e[8] = (...De) => c(g) && c(g)(...De)) }, null, 42, c1)), [[bn, c(X)]]) : te((n(), a("input", { key: 1, class: M(c(X).length > 0 ? "input fz24" : "input"), oninput: "value=value.replace(/[^A-Z0-9]/g,'').toUpperCase()", "onUpdate:modelValue": $e[9] || ($e[9] = De => (it(X) ? (X.value = De) : null)), type: "text", placeholder: c(s)("PenterNumber"), maxlength: "4", onInput: $e[10] || ($e[10] = (...De) => c(r) && c(r)(...De)), onBlur: $e[11] || ($e[11] = (...De) => c(g) && c(g)(...De)) }, null, 42, u1)), [[bn, c(X)]]),
                                   te(L(At, { class: "btn", onClick: c(_) }, { default: A(() => [E("ROll")]), _: 1 }, 8, ["onClick"]), [[He, c(Qe).includes(5)]]),
                                ]))
                              : B("", !0),
                           L(hu, { class: "mb30", "bet-type": c(Se), "bet-type-list": c(ge), onOnBetType: c(m) }, null, 8, ["bet-type", "bet-type-list", "onOnBetType"]),
                           c(z) === 2 ? (n(), Z(Vu, { key: 1, "tab-list": c(O), "all-active": c(Ie), "num-list": c(Le), onAddNumber: c(f), onAllAddnum: c(b) }, null, 8, ["tab-list", "all-active", "num-list", "onAddNumber", "onAllAddnum"])) : B("", !0),
                           L(Tu, { class: "mb30", "roll-num": c(ce), "ban-bet-pay": c(Ne), "bet-pay-list": c(Qe), "bet-pay-id": c(Je), duplex: c(Ge), onOnBetpay: c($) }, null, 8, ["roll-num", "ban-bet-pay", "bet-pay-list", "bet-pay-id", "duplex", "onOnBetpay"]),
                           L(xu, { count: c(et), list: c(ae), onOnAmount: c(y) }, null, 8, ["count", "list", "onOnAmount"]),
                        ]),
                     ]),
                     L(Qd),
                     L(Fu, { "total-amount": c(we), "bet-quantity": c(xe), onOnBet: c(C) }, null, 8, ["total-amount", "bet-quantity", "onOnBet"]),
                     L(kr, { betShow: c(ne), "onUpdate:betShow": $e[12] || ($e[12] = De => (it(ne) ? (ne.value = De) : null)), "bet-quantity": c(xe), "lottery-tab": c(W), "time-index": c(J), "total-amount": c(we), balance: c(Re), "lottery-list": c(le), "bet-type": c(Se), "multiple-list": c(ee), "count-val": c(re), "onUpdate:countVal": $e[13] || ($e[13] = De => (it(re) ? (re.value = De) : null)), checked: c(se), "onUpdate:checked": $e[14] || ($e[14] = De => (it(se) ? (se.value = De) : null)), "pre-sale-rule": c(Q), "onUpdate:preSaleRule": $e[15] || ($e[15] = De => (it(Q) ? (Q.value = De) : null)), onCheckboxChange: c(I), onOnCancel: $e[16] || ($e[16] = De => (ne.value = !1)), onGetClear: c(i), onOnStepper: c(T), onOnMltiple: c(w), onChangeStep: c(h), onOnBet: c(x) }, { default: A(() => [L(Hr, { num: c(X), "tab-id": c(z), "bet-pay": c(Je), "duple-list": c(Le), "tab-list": c(O) }, null, 8, ["num", "tab-id", "bet-pay", "duple-list", "tab-list"])]), _: 1 }, 8, [
                        "betShow",
                        "bet-quantity",
                        "lottery-tab",
                        "time-index",
                        "total-amount",
                        "balance",
                        "lottery-list",
                        "bet-type",
                        "multiple-list",
                        "count-val",
                        "checked",
                        "pre-sale-rule",
                        "onCheckboxChange",
                        "onGetClear",
                        "onOnStepper",
                        "onOnMltiple",
                        "onChangeStep",
                        "onOnBet",
                     ]),
                     L(Tt, { show: c(dt), "onUpdate:show": $e[17] || ($e[17] = De => (it(dt) ? (dt.value = De) : null)), position: "center", class: "x-4d-prompt", style: { borderRadius: "10px", width: "8rem", height: "80px" } }, { default: A(() => [e("div", r1, [e("img", { src: c(pe)("home/AllLotteryGames/4D", "success") }, null, 8, d1), E(" " + t(qe.$t("code402")), 1)])]), _: 1 }, 8, ["show"]),
                     L(Tt, { show: c(Q), "onUpdate:show": $e[19] || ($e[19] = De => (it(Q) ? (Q.value = De) : null)), class: "PreSaleRule", "close-on-click-overlay": !1, round: "" }, { default: A(() => [e("div", _1, [e("div", v1, t(c(s)("presaleRules")), 1), e("div", p1, t(qe.$t("betPopTXT")), 1), e("div", m1, [e("div", { class: "btn", onClick: $e[18] || ($e[18] = De => (Q.value = !1)) }, t(c(s)("iKonw")), 1)])])]), _: 1 }, 8, ["show"]),
                  ])
               );
            }
         );
      },
   });
const h1 = H(g1, [["__scopeId", "data-v-b229277c"]]),
   gV = Object.freeze(Object.defineProperty({ __proto__: null, default: h1 }, Symbol.toStringTag, { value: "Module" })),
   y1 = { class: "LR" },
   f1 = { class: "lotterys" },
   b1 = ["onClick"],
   $1 = { alt: "" },
   C1 = { class: "date" },
   k1 = { class: "dateBox" },
   T1 = { class: "result" },
   w1 = V({
      __name: "index",
      setup(l) {
         const { typeList: s, getTypeList: o, gameResultByType: u, gameResultByTypeO: v } = $s();
         o();
         const { t: p } = _e(),
            d = ue(),
            i = k(0),
            _ = q(() => (s.value ? s.value.slice(1) : [])),
            { minDate: r, maxDate: g } = xa(0),
            m = Ke(g).startOf("day"),
            $ = k(!1),
            y = ze({ type: 0, date: m.format("YYYY-MM-DD") });
         Ve(
            () => _,
            () => {
               _.value.length > 0 && ((y.type = _.value[0].typeId), u(y));
            },
            { deep: !0, immediate: !0 },
         );
         const C = q(() => Ke(y.date).format("YYYY-MM-DD") + " " + p(`${Ke(y.date).format("dddd")}`)),
            f = T => {
               ($.value = !1), (y.date = Ke(T).format("YYYY-MM-DD")), u(y);
            };
         function b(T, h) {
            (i.value = h), (y.type = T.typeId), u(y);
         }
         return (T, h) => {
            const w = U("NavBar"),
               I = U("ArSelect"),
               x = U("van-calendar"),
               S = Te("lazy");
            return (
               n(),
               a("div", y1, [
                  L(w, { "left-arrow": "", onClickLeft: h[0] || (h[0] = () => c(d).back()), title: T.$t("d4Tip2") }, null, 8, ["title"]),
                  e("div", f1, [
                     (n(!0),
                     a(
                        N,
                        null,
                        D(_.value, (G, R) => (n(), a("div", { class: M(["lottery", { active: i.value === R }]), onClick: O => b(G, R), key: R }, [te(e("img", $1, null, 512), [[S, G.typeImg]])], 10, b1))),
                        128,
                     )),
                  ]),
                  e("div", C1, [e("div", k1, [L(I, { onClickSelect: h[1] || (h[1] = G => ($.value = !0)), selectName: C.value }, null, 8, ["selectName"])])]),
                  e("div", T1, [e("h1", null, t(T.$t("betResult")), 1), JSON.stringify(c(v)) !== "{}" ? (n(), Z(xn, { key: 0, data: c(v) }, null, 8, ["data"])) : (n(), Z(gt, { key: 1 }))]),
                  L(x, { show: $.value, "onUpdate:show": h[2] || (h[2] = G => ($.value = G)), onCancel: h[3] || (h[3] = () => ($.value = !1)), onConfirm: f, "min-date": c(r), "max-date": c(g) }, null, 8, ["show", "min-date", "max-date"]),
               ])
            );
         };
      },
   });
const L1 = H(w1, [["__scopeId", "data-v-c9e6bdf5"]]),
   hV = Object.freeze(Object.defineProperty({ __proto__: null, default: L1 }, Symbol.toStringTag, { value: "Module" })),
   Cs = l => (ye("data-v-00bbdd75"), (l = l()), fe(), l),
   I1 = { class: "oddsBox" },
   S1 = { class: "title" },
   G1 = { class: "tabHead" },
   x1 = { class: "tabCon1" },
   B1 = { class: "item" },
   N1 = Cs(() => e("div", null, null, -1)),
   R1 = Cs(() => e("div", null, null, -1)),
   M1 = [N1, R1],
   D1 = { class: "tabHead h2" },
   A1 = { class: "tabCon2" },
   P1 = { class: "tabHead h2" },
   O1 = { key: 0 },
   V1 = { key: 1 },
   W1 = { key: 2 },
   H1 = Cs(() => e("br", null, null, -1)),
   z1 = Cs(() => e("br", null, null, -1)),
   E1 = Cs(() => e("br", null, null, -1)),
   F1 = Cs(() => e("br", null, null, -1)),
   j1 = { class: "tabCon1 c2" },
   U1 = V({
      __name: "index",
      setup(l) {
         const { t: s } = _e(),
            o = ue(),
            { getOddsList: u, oddsList: v } = $s();
         return (
            he(() => {
               u();
            }),
            (p, d) => {
               const i = U("NavBar");
               return (
                  n(),
                  a("div", I1, [
                     L(i, { "left-arrow": "", title: c(s)("odds"), onClickLeft: d[0] || (d[0] = () => c(o).back()) }, null, 8, ["title"]),
                     (n(!0),
                     a(
                        N,
                        null,
                        D(c(v), _ => {
                           var r, g, m, $, y;
                           return (
                              n(),
                              a("div", { class: "items", key: _.playTypeId }, [
                                 e("div", S1, t(c(s)(`d4gamePay${_.playTypeId}`)), 1),
                                 _.playTypeId != 2
                                    ? (n(),
                                      a(
                                         N,
                                         { key: 0 },
                                         [
                                            e("div", G1, [e("span", null, t(c(s)("d4gameType1")), 1), e("span", null, t(c(s)("d4gameType2")), 1)]),
                                            e("div", x1, [
                                               (n(!0),
                                               a(
                                                  N,
                                                  null,
                                                  D(
                                                     (r = _.lists) == null ? void 0 : r.filter(C => [1, 2].includes(C.type)),
                                                     C => (
                                                        n(),
                                                        a("div", { key: C.type }, [
                                                           (n(!0),
                                                           a(
                                                              N,
                                                              null,
                                                              D(C.list, f => (n(), a("div", { class: "item", key: f.playId }, [e("div", null, t(c(s)(`d4gameType${f.code}`)), 1), e("div", null, t(f.odds > 0 ? f.odds : f.oddsDefault), 1)]))),
                                                              128,
                                                           )),
                                                           C.list.length < 5
                                                              ? (n(),
                                                                a(
                                                                   N,
                                                                   { key: 0 },
                                                                   D(2, f => e("div", B1, M1)),
                                                                   64,
                                                                ))
                                                              : B("", !0),
                                                        ])
                                                     ),
                                                  ),
                                                  128,
                                               )),
                                            ]),
                                            e("div", D1, [
                                               (n(!0),
                                               a(
                                                  N,
                                                  null,
                                                  D((m = (g = _.lists) == null ? void 0 : g.filter(C => [3].includes(C.type))[0]) == null ? void 0 : m.list, C => (n(), a("span", { key: C.playId }, t(c(s)(`d4gameType${C.playId}`)), 1))),
                                                  128,
                                               )),
                                            ]),
                                            e("div", A1, [
                                               (n(!0),
                                               a(
                                                  N,
                                                  null,
                                                  D((y = ($ = _.lists) == null ? void 0 : $.filter(C => [3].includes(C.type))[0]) == null ? void 0 : y.list, C => (n(), a("div", { key: C.playId }, t(C.odds > 0 ? C.odds : C.oddsDefault), 1))),
                                                  128,
                                               )),
                                            ]),
                                         ],
                                         64,
                                      ))
                                    : (n(!0),
                                      a(
                                         N,
                                         { key: 1 },
                                         D(
                                            _.lists,
                                            C => (
                                               n(),
                                               a(
                                                  N,
                                                  null,
                                                  [
                                                     e("div", P1, [C.type == 1 ? (n(), a("span", O1, t(c(s)("d4gameType1")), 1)) : B("", !0), C.type == 2 ? (n(), a("span", V1, t(c(s)("d4gameType2")), 1)) : B("", !0), C.type == 3 ? (n(), a("span", W1, t(c(s)("d4Tip3")), 1)) : B("", !0), e("span", null, [E(t(c(s)("d4Tip4")), 1), H1, E("24")]), e("span", null, [E(t(c(s)("d4Tip4")), 1), z1, E("12")]), e("span", null, [E(t(c(s)("d4Tip4")), 1), E1, E("6")]), e("span", null, [E(t(c(s)("d4Tip4")), 1), F1, E("4")])]),
                                                     e("div", j1, [
                                                        (n(!0),
                                                        a(
                                                           N,
                                                           null,
                                                           D(C.list, f => (n(), a("div", { class: "itemR item", key: f.playId }, [e("div", null, t(c(s)(`d4gameType${f.code}`)), 1), e("div", null, t(f.odds24 > 0 ? f.odds24 : f.oddsDefault24), 1), e("div", null, t(f.odds12 > 0 ? f.odds12 : f.oddsDefault12), 1), e("div", null, t(f.odds6 > 0 ? f.odds6 : f.oddsDefault6), 1), e("div", null, t(f.odds4 > 0 ? f.odds4 : f.oddsDefault4), 1)]))),
                                                           128,
                                                        )),
                                                     ]),
                                                  ],
                                                  64,
                                               )
                                            ),
                                         ),
                                         256,
                                      )),
                              ])
                           );
                        }),
                        128,
                     )),
                  ])
               );
            }
         );
      },
   });
const q1 = H(U1, [["__scopeId", "data-v-00bbdd75"]]),
   yV = Object.freeze(Object.defineProperty({ __proto__: null, default: q1 }, Symbol.toStringTag, { value: "Module" })),
   K1 = { class: "playBox" },
   Z1 = { class: "con" },
   X1 = { class: "tip" },
   J1 = { class: "tip" },
   Y1 = ["innerHTML"],
   Q1 = { class: "txt" },
   e_ = { key: 0, class: "num" },
   t_ = ["innerHTML"],
   s_ = V({
      __name: "index",
      setup(l) {
         const { t: s } = _e(),
            o = ue(),
            u = k(0),
            v = k([
               { title: s("d4gamePay1"), tip1: s("Play4DTip2"), tip2: s("Play4DTip4"), txt: { tip1: "[1234]", tip2: "", tip3: [], tip4: s("Play4DTip1", ["1234"]) } },
               { title: s("d4gamePay5"), tip1: s("Play4DTip5"), tip2: s("Play4DTip6"), txt: { tip1: "[123R]", tip2: s("Play4DTip10", [10]), tip3: ["1230", "1231", "1232", "1233", "1234", "1235", "1236", "1237", "1238", "1239"], tip4: s("Play4DTip1", ["1234"]) } },
               { title: s("d4gamePay2"), tip1: s("Play4DTip7"), tip2: s("Play4DTip8"), txt: { tip1: "[1122]", tip2: s("Play4DTip11"), tip3: ["1122", "1212", "1221", "2112", "2121", "2211"], tip4: s("Play4DTip1", ["1212"]) } },
               { title: s("d4gamePay3"), tip1: s("Play4DTip9"), tip2: s("Play4DTip8"), txt: { tip1: "[1122]", tip2: s("Play4DTip10", [6]), tip3: ["1122", "1212", "1221", "2112", "2121", "2211"], tip4: s("Play4DTip1", ["1212"]) } },
               { title: s("d4gamePay4"), tip1: s("Play4DTip3"), tip2: s("Play4DTip4"), txt: { tip1: "[1234]", tip2: s("Play4DTip10", [2]), tip3: ["1234", "4321"], tip4: s("Play4DTip1", ["1234"]) } },
            ]);
         return (p, d) => {
            const i = U("NavBar"),
               _ = U("van-icon"),
               r = U("van-tab"),
               g = U("van-tabs");
            return (
               n(),
               a("div", K1, [
                  L(i, { "left-arrow": "", title: c(s)("lotteryManual"), onClickLeft: d[0] || (d[0] = () => c(o).back()) }, null, 8, ["title"]),
                  L(
                     g,
                     { active: u.value, "onUpdate:active": d[1] || (d[1] = m => (u.value = m)), type: "card", "swipe-threshold": 3 },
                     {
                        default: A(() => [
                           (n(!0),
                           a(
                              N,
                              null,
                              D(
                                 v.value,
                                 (m, $) => (
                                    n(),
                                    Z(
                                       r,
                                       { title: m.title, key: $ },
                                       {
                                          default: A(() => [
                                             e("div", Z1, [
                                                e("h1", null, [L(_, { name: "play", class: "icon", size: "20" }), E(t(c(s)("betting")), 1)]),
                                                e("div", X1, t(m.tip1), 1),
                                                e("h1", null, [L(_, { name: "play", class: "icon", size: "20" }), E(t(c(s)("winningconditions")), 1)]),
                                                e("div", J1, [e("span", { innerHTML: m.tip2 }, null, 8, Y1)]),
                                                e("div", Q1, [
                                                   e("div", null, t(c(s)("example")), 1),
                                                   e("div", null, t(c(s)("betting")) + ":   " + t(m.txt.tip1), 1),
                                                   e("div", null, t(m.txt.tip2), 1),
                                                   m.txt.tip3.length > 0
                                                      ? (n(),
                                                        a("div", e_, [
                                                           (n(!0),
                                                           a(
                                                              N,
                                                              null,
                                                              D(m.txt.tip3, (y, C) => (n(), a("span", { key: C }, t(y), 1))),
                                                              128,
                                                           )),
                                                        ]))
                                                      : B("", !0),
                                                   e("div", null, [E(t(c(s)("result")) + ":   ", 1), e("span", { innerHTML: m.txt.tip4 }, null, 8, t_)]),
                                                ]),
                                             ]),
                                          ]),
                                          _: 2,
                                       },
                                       1032,
                                       ["title"],
                                    )
                                 ),
                              ),
                              128,
                           )),
                        ]),
                        _: 1,
                     },
                     8,
                     ["active"],
                  ),
               ])
            );
         };
      },
   });
const n_ = H(s_, [["__scopeId", "data-v-77bd6413"]]),
   fV = Object.freeze(Object.defineProperty({ __proto__: null, default: n_ }, Symbol.toStringTag, { value: "Module" })),
   a_ = { class: "MG" },
   o_ = V({
      __name: "index",
      setup(l) {
         const { getTypeList: s, typeList: o, getMy4DHistory: u } = $s();
         s();
         const { t: v } = _e(),
            p = ue(),
            d = k(!1),
            i = k(v("all")),
            _ = ze({ type: 0, date: "", pageSize: 20, pageNo: 1 });
         u(_);
         const r = async ({ selectedOptions: g }) => {
            (d.value = !1), (_.type = g[0].typeId), (_.pageNo = 1), (i.value = g[0].typeName), u(_);
         };
         return (g, m) => {
            const $ = U("NavBar"),
               y = U("ArSelect"),
               C = U("van-picker"),
               f = U("van-popup");
            return n(), a("div", a_, [L($, { "left-arrow": "", onClickLeft: m[0] || (m[0] = () => c(p).back()), title: g.$t("xosoTxt73") }, null, 8, ["title"]), L(y, { onClickSelect: m[1] || (m[1] = b => (d.value = !0)), selectName: i.value }, null, 8, ["selectName"]), L(so, { pageQuery: _, "onUpdate:pageQuery": m[2] || (m[2] = b => (_ = b)) }, null, 8, ["pageQuery"]), L(f, { show: d.value, "onUpdate:show": m[4] || (m[4] = b => (d.value = b)), round: "", position: "bottom" }, { default: A(() => [L(C, { "columns-field-names": { text: "typeName", value: "typeId" }, columns: c(o), onCancel: m[3] || (m[3] = b => (d.value = !1)), onConfirm: r }, null, 8, ["columns"])]), _: 1 }, 8, ["show"])]);
         };
      },
   });
const l_ = H(o_, [["__scopeId", "data-v-59bf1373"]]),
   bV = Object.freeze(Object.defineProperty({ __proto__: null, default: l_ }, Symbol.toStringTag, { value: "Module" })),
   i_ = { class: "Wallet__C" },
   c_ = { class: "Wallet__C-balance" },
   u_ = { class: "Wallet__C-balance-l1" },
   r_ = { class: "Wallet__C-balance-l2" },
   d_ = { class: "Wallet__C-balance-l3" },
   __ = V({
      __name: "Wallet",
      setup(l, { expose: s }) {
         const { t: o } = _e(),
            u = k(0),
            v = async (i = !0) => {
               const _ = await de(Tn());
               _ && ((u.value = (_ == null ? void 0 : _.data.amount) || 0), i && Ct(o("refreshSuccess")));
            },
            p = ue(),
            d = i => {
               p.push({ name: i });
            };
         return (
            he(() => {
               v(!1);
            }),
            s({ getWinsUserAmount: v }),
            (i, _) => {
               const r = Te("throttle-click");
               return n(), a("div", i_, [e("div", c_, [e("div", u_, [te((n(), a("div", null, [E(t(c(Be)(u.value)), 1)])), [[r, { handler: v, wait: 2e3 }]])]), e("div", r_, [e("div", null, t(i.$t("walletBalance")), 1)]), e("div", d_, [e("div", { onClick: _[0] || (_[0] = g => d("Withdraw")) }, t(i.$t("withdraw")), 1), e("div", { onClick: _[1] || (_[1] = g => d("Recharge")) }, t(i.$t("recharge")), 1)])])]);
            }
         );
      },
   });
const Fs = H(__, [["__scopeId", "data-v-0ba2cf96"]]),
   v_ = { class: "GameList__C" },
   p_ = ["onClick"],
   m_ = ["innerHTML"],
   g_ = V({
      __name: "GameList",
      props: { gameList: { default: { type: Array, default: () => [] } }, currentGameIndex: { default: { type: Number, default: 0 } } },
      setup(l) {
         const s = l;
         return (o, u) => (
            n(),
            a("div", v_, [
               (n(!0),
               a(
                  N,
                  null,
                  D(s.gameList, (v, p) => (n(), a("div", { key: p, class: M(["GameList__C-item", { active: o.currentGameIndex == p }]), onClick: d => o.$emit("changeGame", p) }, [e("div", { innerHTML: v.typeName }, null, 8, m_)], 10, p_))),
                  128,
               )),
            ])
         );
      },
   });
const js = H(g_, [["__scopeId", "data-v-b108ab4b"]]),
   h_ = { class: "TimeLeft__C-PreSale" },
   y_ = { class: "TimeLeft__C-PreSale-head" },
   f_ = { class: "TimeLeft__C-PreSale-body" },
   b_ = ["innerHTML"],
   $_ = { class: "TimeLeft__C-PreSale-foot" },
   C_ = V({
      __name: "rule",
      props: { howPlayShow: { type: Boolean, default: !1 }, gamePresentation: { type: String, default: "" } },
      emits: ["close"],
      setup(l, { emit: s }) {
         const o = l,
            u = q({
               get() {
                  return o.howPlayShow || !1;
               },
               set(v) {
                  v || s("close");
               },
            });
         return (v, p) => {
            const d = U("van-popup");
            return n(), Z(d, { show: u.value, "onUpdate:show": p[1] || (p[1] = i => (u.value = i)), "close-on-click-overlay": !1, round: "" }, { default: A(() => [e("div", h_, [e("div", y_, t(v.$t("winTrxIndicate")), 1), e("div", f_, [e("div", { innerHTML: l.gamePresentation }, null, 8, b_)]), e("div", $_, [e("div", { class: "TimeLeft__C-PreSale-foot-btn", onClick: p[0] || (p[0] = i => s("close")) }, t(v.$t("winTrxClose")), 1)])])]), _: 1 }, 8, ["show"]);
         };
      },
   });
const Us = H(C_, [["__scopeId", "data-v-4ea7215b"]]),
   k_ = l => (ye("data-v-50bb39bb"), (l = l()), fe(), l),
   T_ = { class: "FDTL__C" },
   w_ = { class: "FDTL__C-l1" },
   L_ = { class: "left" },
   I_ = { class: "FDTL__C-l2" },
   S_ = { class: "FDTL__C-time" },
   G_ = k_(() => e("div", { notime: "" }, ":", -1)),
   x_ = { class: "FDTL__C-l3" },
   B_ = { class: "box" },
   N_ = ["num"],
   R_ = Dt(
      '<div class="slot-num" data-v-50bb39bb>1</div><div class="slot-num" data-v-50bb39bb>2</div><div class="slot-num" data-v-50bb39bb>0</div><div class="slot-num" data-v-50bb39bb>1</div><div class="slot-num" data-v-50bb39bb>2</div><div class="slot-num" data-v-50bb39bb>3</div><div class="slot-num" data-v-50bb39bb>4</div><div class="slot-num" data-v-50bb39bb>5</div><div class="slot-num" data-v-50bb39bb>6</div><div class="slot-num" data-v-50bb39bb>7</div><div class="slot-num" data-v-50bb39bb>8</div><div class="slot-num" data-v-50bb39bb>9</div><div class="slot-num" data-v-50bb39bb>0</div><div class="slot-num" data-v-50bb39bb>1</div><div class="slot-num" data-v-50bb39bb>2</div><div class="slot-num" data-v-50bb39bb>3</div><div class="slot-num" data-v-50bb39bb>4</div><div class="slot-num" data-v-50bb39bb>5</div><div class="slot-num" data-v-50bb39bb>6</div><div class="slot-num" data-v-50bb39bb>7</div><div class="slot-num" data-v-50bb39bb>8</div><div class="slot-num" data-v-50bb39bb>9</div><div class="slot-num" data-v-50bb39bb>0</div><div class="slot-num" data-v-50bb39bb>1</div><div class="slot-num" data-v-50bb39bb>2</div><div class="slot-num" data-v-50bb39bb>3</div><div class="slot-num" data-v-50bb39bb>4</div><div class="slot-num" data-v-50bb39bb>5</div><div class="slot-num" data-v-50bb39bb>6</div><div class="slot-num" data-v-50bb39bb>7</div><div class="slot-num" data-v-50bb39bb>8</div><div class="slot-num" data-v-50bb39bb>9</div>',
      32,
   ),
   M_ = ["num"],
   D_ = V({
      __name: "TimeLeft",
      props: { premium: {}, currentInfo: {}, currentGame: {} },
      setup(l, { expose: s }) {
         const o = l,
            u = k(0),
            v = k([{ arr: [] }, { arr: [] }, { arr: [] }, { arr: [] }, { arr: [] }]);
         Ve(
            () => o.premium,
            g => {
               g && (v.value = p(g));
            },
         );
         const p = g => {
               let m = [];
               for (let y = 0; y < g.length; y++) {
                  let C = g[y];
                  var $ = [];
                  switch (C) {
                     case 9:
                        $.push(C - 8, C - 9, C);
                        break;
                     case 0:
                        $.push(C + 8, C + 9, C);
                        break;
                     default:
                        $.push(C - 2, C - 1, C);
                  }
                  m.push({ arr: $ });
               }
               return m;
            },
            d = () => {
               (u.value = 1),
                  setTimeout(() => {
                     u.value = 0;
                  }, 3e3);
            },
            i = k(!1),
            _ = Ut(),
            r = () => {
               (i.value = !0), _.get5DRule(o.currentGame.typeID);
            };
         return (
            s({ animationShow: d }),
            (g, m) => (
               n(),
               a(
                  N,
                  null,
                  [
                     e("div", T_, [
                        e("div", w_, [e("div", L_, [e("div", null, t(g.$t("betIssue")), 1), e("div", { class: "FDTL__C-rule", onClick: r }, t(g.$t("winTrxIndicate")), 1)]), e("div", null, t(g.$t("k3TimeLeftToBuy")), 1)]),
                        e("div", I_, [e("div", null, t(o.currentInfo.gameNo), 1), e("div", S_, [e("div", null, t(g.currentInfo.time1), 1), e("div", null, t(g.currentInfo.time2), 1), G_, e("div", null, t(g.currentInfo.time3), 1), e("div", null, t(g.currentInfo.time4), 1)])]),
                        e("div", x_, [
                           e("div", B_, [
                              (n(!0),
                              a(
                                 N,
                                 null,
                                 D(
                                    v.value,
                                    ($, y) => (
                                       n(),
                                       a("div", { key: y, class: "slot-column" }, [
                                          e(
                                             "div",
                                             { class: M(["slot-transform", "transform" + y, u.value == 1 && "slot-scroll"]) },
                                             [
                                                (n(!0),
                                                a(
                                                   N,
                                                   null,
                                                   D($.arr, (C, f) => (n(), a("div", { class: "slot-num", num: $, key: "2" + f }, t(C), 9, N_))),
                                                   128,
                                                )),
                                                R_,
                                                (n(!0),
                                                a(
                                                   N,
                                                   null,
                                                   D($.arr, (C, f) => (n(), a("div", { class: "slot-num", num: $, key: "2" + f }, t(C), 9, M_))),
                                                   128,
                                                )),
                                             ],
                                             2,
                                          ),
                                       ])
                                    ),
                                 ),
                                 128,
                              )),
                           ]),
                        ]),
                     ]),
                     L(Us, { howPlayShow: i.value, gamePresentation: g.currentGame.gamePresentation, onClose: m[0] || (m[0] = $ => (i.value = !1)) }, null, 8, ["howPlayShow", "gamePresentation"]),
                  ],
                  64,
               )
            )
         );
      },
   });
const A_ = H(D_, [["__scopeId", "data-v-50bb39bb"]]),
   P_ = { class: "FDB__C-nav" },
   O_ = ["onClick"],
   V_ = { class: "FDB__C-H" },
   W_ = ["onClick"],
   H_ = { class: "FDB__C-Num" },
   z_ = ["txt", "onClick"],
   E_ = { class: "round" },
   F_ = { class: "rate" },
   j_ = V({
      __name: "BetCom",
      props: { betTypeNameMap: {}, betType: {}, BettingH: {}, onTabID: {}, numberChack: {}, OddsList: {} },
      emits: ["changeType", "onTab", "numberTab"],
      setup(l, { emit: s }) {
         return (o, u) => (
            n(),
            a(
               N,
               null,
               [
                  e("div", P_, [
                     (n(!0),
                     a(
                        N,
                        null,
                        D(o.betTypeNameMap, (v, p) => (n(), a("div", { key: p, class: M({ active: o.betType == p }), onClick: d => s("changeType", p) }, t(v), 11, O_))),
                        128,
                     )),
                  ]),
                  e("div", V_, [
                     (n(!0),
                     a(
                        N,
                        null,
                        D(o.BettingH, (v, p) => (n(), a("div", { key: p, class: M({ active: o.onTabID == v.id }), onClick: d => s("onTab", v.id) }, [e("span", null, t(v.name), 1), e("span", null, t(v.rate), 1)], 10, W_))),
                        128,
                     )),
                  ]),
                  e("div", H_, [
                     o.betType != 5
                        ? (n(),
                          a(
                             N,
                             { key: 0 },
                             D(10, (v, p) => e("div", { key: p, txt: p, class: M({ active: o.numberChack[p] }), onClick: d => s("numberTab", p) }, [e("div", E_, t(p), 1), e("div", F_, t(o.OddsList[0].playRate ? o.OddsList[0].playRate : o.OddsList[0].playRate_Original), 1)], 10, z_)),
                             64,
                          ))
                        : B("", !0),
                  ]),
               ],
               64,
            )
         );
      },
   });
const ga = H(j_, [["__scopeId", "data-v-abf7a97e"]]),
   U_ = l => (ye("data-v-b2b7679a"), (l = l()), fe(), l),
   q_ = { class: "Betting__Popup-body" },
   K_ = { class: "Betting__Popup-body-line" },
   Z_ = { class: "Betting__Popup-body-line-list" },
   X_ = ["onClick"],
   J_ = { class: "Betting__Popup-body-line" },
   Y_ = { class: "Betting__Popup-body-line-btnL" },
   Q_ = { class: "Betting__Popup-body-line" },
   ev = U_(() => e("div", null, null, -1)),
   tv = { class: "Betting__Popup-body-line-list" },
   sv = ["onClick"],
   nv = { class: "Betting__Popup-body-line" },
   av = { class: "Betting__Popup-foot" },
   ov = { class: "Betting__Popup-foot-s bgcolor" },
   lv = { class: "Betting__Popup-PreSale" },
   iv = { class: "Betting__Popup-PreSale-head" },
   cv = { class: "Betting__Popup-PreSale-body" },
   uv = { class: "Betting__Popup-PreSale-foot" },
   rv = V({
      __name: "BettingPopup",
      props: { currentInfo: {}, currentGame: {}, bettingPopupShow: {}, betTypeList: {}, selectInfo: {} },
      emits: ["update:bettingPopupShow", "update:selectInfo", "clearBetting", "computedCoin", "submitBetting"],
      setup(l, { emit: s }) {
         const o = l,
            { t: u } = _e(),
            v = k(!1),
            p = k(!0),
            d = q(() => o.currentGame.betMultiple.split("|"));
         Ve(
            () => d,
            () => {
               o.selectInfo.count = d.value[0];
            },
            { deep: !0, immediate: !0 },
         );
         let i = q({
            get() {
               return o.bettingPopupShow || !1;
            },
            set(C) {
               s("update:bettingPopupShow", C);
            },
         });
         const _ = C => {
               switch (C) {
                  case 1:
                     o.selectInfo.count > 1 && o.selectInfo.count--;
                     break;
                  case 2:
                     o.selectInfo.count++;
                     break;
               }
               s("computedCoin");
            },
            r = C => {
               C > 0 && (o.selectInfo.count = Math.floor(C)), s("computedCoin");
            },
            g = C => {
               (o.selectInfo.count = C), s("computedCoin");
            },
            m = C => {
               (o.selectInfo.coin = C), s("computedCoin");
            },
            $ = () => {
               (v.value = !1), (p.value = !0);
            },
            y = async () => {
               if (!p.value) {
                  Ct(u("agreePresaleRules"));
                  return;
               }
               s("submitBetting");
            };
         return (C, f) => {
            const b = U("van-field"),
               T = U("van-popup"),
               h = Te("throttle-click");
            return (
               n(),
               a(
                  N,
                  null,
                  [
                     L(
                        T,
                        { show: c(i), "onUpdate:show": f[6] || (f[6] = w => (it(i) ? (i.value = w) : (i = w))), position: "bottom", style: { "box-shadow": "0px -18px 40px rgba(37, 37, 60, 0.26)" }, round: !0, "close-on-click-overlay": !1 },
                        {
                           default: A(() => [
                              e("div", q_, [
                                 $t(C.$slots, "default", {}, void 0, !0),
                                 e("div", K_, [
                                    E(t(c(u)("amount")) + " ", 1),
                                    e("div", Z_, [
                                       (n(!0),
                                       a(
                                          N,
                                          null,
                                          D(C.betTypeList, (w, I) => (n(), a("div", { key: I, class: M(["Betting__Popup-body-line-item", { bgcolor: o.selectInfo.coin == w }]), onClick: x => m(w) }, t(w), 11, X_))),
                                          128,
                                       )),
                                    ]),
                                 ]),
                                 e("div", J_, [E(t(c(u)("numbers")) + " ", 1), e("div", Y_, [e("div", { class: M(["Betting__Popup-btn", { bgcolor: o.selectInfo.count > 0 }]), onClick: f[0] || (f[0] = w => _(1)) }, "-", 2), L(b, { class: "Betting__Popup-input", modelValue: o.selectInfo.count, "onUpdate:modelValue": f[1] || (f[1] = w => (o.selectInfo.count = w)), modelModifiers: { number: !0 }, type: "digit", maxlength: 4, onInput: r }, null, 8, ["modelValue"]), e("div", { class: "Betting__Popup-btn bgcolor", onClick: f[2] || (f[2] = w => _(2)) }, "+")])]),
                                 e("div", Q_, [
                                    ev,
                                    e("div", tv, [
                                       (n(!0),
                                       a(
                                          N,
                                          null,
                                          D(d.value, (w, I) => (n(), a("div", { key: I, class: M(["Betting__Popup-body-line-item", { bgcolor: o.selectInfo.count == w }]), onClick: x => g(w) }, " X" + t(w), 11, sv))),
                                          128,
                                       )),
                                    ]),
                                 ]),
                                 e("div", nv, [e("span", { class: M(["Betting__Popup-agree", { active: p.value }]), onClick: f[3] || (f[3] = w => (p.value = !p.value)) }, t(c(u)("agree")), 3), e("span", { onClick: f[4] || (f[4] = w => (v.value = !0)), class: "Betting__Popup-preSaleShow" }, t(c(u)("presaleRules")), 1)]),
                              ]),
                              e("div", av, [e("div", { class: "Betting__Popup-foot-c", onClick: f[5] || (f[5] = w => s("clearBetting")) }, t(c(u)("cancel")), 1), te((n(), a("div", ov, [E(t(c(u)("totalAmount")) + t(c(Be)(o.selectInfo.allCoin || 0)), 1)])), [[h, { handler: y, wait: 2e3 }]])]),
                           ]),
                           _: 3,
                        },
                        8,
                        ["show"],
                     ),
                     L(T, { show: v.value, "onUpdate:show": f[7] || (f[7] = w => (v.value = w)), "close-on-click-overlay": !1, round: "" }, { default: A(() => [e("div", lv, [e("div", iv, t(c(u)("presaleRules")), 1), e("div", cv, t(C.$t("betPopTXT")), 1), e("div", uv, [e("div", { class: "Betting__Popup-PreSale-foot-btn", onClick: $ }, t(c(u)("iKonw")), 1)])])]), _: 1 }, 8, ["show"]),
                  ],
                  64,
               )
            );
         };
      },
   });
const dv = H(rv, [["__scopeId", "data-v-b2b7679a"]]),
   _v = { class: "FDB__C" },
   vv = { class: "FDB__C-mark" },
   pv = V({
      __name: "Betting",
      props: { currentInfo: { type: Object, default: () => ({}) }, ProhibitBuyTime: { type: Number, default: 5 }, currentGame: { type: Object, default: () => ({}) } },
      emits: ["betting", "changeBettingP"],
      setup(l, { expose: s, emit: o }) {
         const u = l,
            { t: v } = _e();
         k();
         const p = k(!1);
         Ve(
            () => p.value,
            O => {
               O && (y.value.coin = f.value[0]);
            },
         );
         const d = k(0),
            i = k(["A", "B", "C", "D", "E", "SUM"]),
            _ = k([
               { playID: 1, playType: 1, playBet: "0-9", playResult: "0-9", playRate: 9, playRate_Original: 9 },
               { playID: 2, playType: 2, playBet: "H", playResult: "H", playRate: 2, playRate_Original: 2 },
               { playID: 3, playType: 2, playBet: "L", playResult: "L", playRate: 2, playRate_Original: 2 },
               { playID: 4, playType: 3, playBet: "O", playResult: "O", playRate: 2, playRate_Original: 2 },
               { playID: 5, playType: 3, playBet: "E", playResult: "E", playRate: 2, playRate_Original: 2 },
            ]),
            r = k(0),
            g = k([]),
            m = k([!1, !1, !1, !1, !1, !1, !1, !1]),
            $ = q(() => [
               { id: 1, name: v("k3Big"), rate: _.value[1].playRate || _.value[1].playRate_Original },
               { id: 2, name: v("k3Small"), rate: _.value[2].playRate || _.value[2].playRate_Original },
               { id: 3, name: v("k3Odd"), rate: _.value[3].playRate || _.value[3].playRate_Original },
               { id: 4, name: v("k3Even"), rate: _.value[4].playRate || _.value[4].playRate_Original },
            ]),
            y = k({ coin: 0, count: 1, allCoin: 0, gametype: 0, typeid: 1, issuenumber: "2020", selecttype: "" }),
            C = q(() => (u.currentInfo.passTime < u.ProhibitBuyTime && S(), u.currentInfo.passTime < u.ProhibitBuyTime)),
            f = q(() => (u.currentGame.scope ? u.currentGame.scope.split("|").map(O => Number(O)) : [])),
            b = O => {
               (d.value = O), O == 5 && x();
            },
            T = async () => {
               const [O, P] = await ct(Ml());
               P && (_.value = P);
            },
            h = O => {
               x(), r.value == O ? ((r.value = 0), (p.value = !0)) : ((r.value = O), (p.value = !0)), I();
            },
            w = O => {
               if (((r.value = 0), m.value[O])) {
                  m.value[O] = !1;
                  const P = g.value.indexOf(O);
                  P > -1 && g.value.splice(P, 1), (p.value = !0);
               } else g.value.push(O), (m.value[O] = !0), (p.value = !0);
               I();
            },
            I = () => {
               lt(() => {
                  g.value.length > 0 ? (y.value.allCoin = y.value.coin * y.value.count * g.value.length) : r.value ? (y.value.allCoin = y.value.coin * y.value.count) : (y.value.allCoin = 0);
               });
            },
            x = () => {
               g.value = [];
               for (let O = 0; m.value.length > O; O++) m.value[O] = !1;
               I();
            },
            S = () => {
               var O;
               (y.value.count = ((O = u.currentGame.betMultiple) == null ? void 0 : O.split("|")[0]) || 1), (p.value = !1), G();
            },
            G = () => {
               (g.value = []), (m.value = [!1, !1, !1, !1, !1, !1, !1, !1]), (r.value = 0);
            },
            R = async () => {
               if (y.value.count == 0) return Ee(v("bteNoCount"));
               let O;
               if (g.value.length > 0) O = g.value.join("|");
               else
                  switch (r.value) {
                     case 1:
                        O = "H";
                        break;
                     case 2:
                        O = "L";
                        break;
                     case 3:
                        O = "O";
                        break;
                     case 4:
                        O = "E";
                        break;
                  }
               if (!O) return Ee("请下注");
               const P = { issuenumber: u.currentInfo.gameNo, typeId: u.currentGame.typeID, amount: y.value.coin, betCount: Number(y.value.count), gameType: d.value + 1, selectType: O },
                  W = await de(Na(P));
               (W == null ? void 0 : W.code) === 0 && (Ct(v("code" + (W == null ? void 0 : W.msgCode))), (p.value = !1), G(), o("betting", u.currentInfo.gameNo));
            };
         return (
            he(() => {
               T();
            }),
            s({ bettingPopupShow: p }),
            (O, P) => (
               n(),
               a("div", _v, [
                  te(e("div", vv, [e("div", null, t(u.currentInfo.time3 || "0"), 1), e("div", null, t(u.currentInfo.time4 || "0"), 1)], 512), [[He, C.value]]),
                  L(ga, { betTypeNameMap: i.value, betType: d.value, BettingH: $.value, onTabID: r.value, OddsList: _.value, numberChack: m.value, onChangeType: b, onNumberTab: w, onOnTab: h }, null, 8, ["betTypeNameMap", "betType", "BettingH", "onTabID", "OddsList", "numberChack"]),
                  L(dv, { currentInfo: l.currentInfo, currentGame: l.currentGame, bettingPopupShow: p.value, betTypeList: f.value, selectInfo: y.value, onComputedCoin: I, onClearBetting: S, onSubmitBetting: R }, { default: A(() => [L(ga, { betTypeNameMap: i.value, betType: d.value, BettingH: $.value, onTabID: r.value, OddsList: _.value, numberChack: m.value, onChangeType: b, onNumberTab: w, onOnTab: h }, null, 8, ["betTypeNameMap", "betType", "BettingH", "onTabID", "OddsList", "numberChack"])]), _: 1 }, 8, ["currentInfo", "currentGame", "bettingPopupShow", "betTypeList", "selectInfo"]),
               ])
            )
         );
      },
   });
const mv = H(pv, [["__scopeId", "data-v-14299517"]]),
   gv = { class: "RecordNav__C" },
   hv = ["onClick"],
   yv = V({
      __name: "RecordNav",
      props: { record: { type: String, default: "GameRecord" } },
      setup(l) {
         const s = l,
            { t: o } = _e(),
            u = k([
               { name: o("gameRecords"), componentName: "GameRecord" },
               { name: o("chartTrends"), componentName: "Trend" },
               { name: o("myGameRecords"), componentName: "MyGameRecord" },
            ]);
         return (v, p) => (
            n(),
            a("div", gv, [
               (n(!0),
               a(
                  N,
                  null,
                  D(u.value, (d, i) => (n(), a("div", { key: i, onClick: _ => v.$emit("changeC", d.componentName), class: M({ active: s.record == d.componentName }) }, t(d.name), 11, hv))),
                  128,
               )),
            ])
         );
      },
   });
const qs = H(yv, [["__scopeId", "data-v-8e336dcd"]]),
   fv = { class: "GameRecord__C" },
   bv = { class: "GameRecord__C-head" },
   $v = { class: "GameRecord__C-body" },
   Cv = { class: "numList" },
   kv = { class: "numItem" },
   Tv = { class: "redNumItem" },
   wv = { key: 1, class: "GameRecord__C-body-empty" },
   Lv = { key: 0, class: "GameRecord__C-foot" },
   Iv = { class: "GameRecord__C-foot-page" },
   Sv = V({
      __name: "GameRecord",
      props: { typeid: {} },
      setup(l, { expose: s }) {
         const o = l,
            u = k([]),
            v = k(4),
            p = k(10),
            d = k(1),
            i = () => {
               d.value--, r();
            },
            _ = () => {
               d.value++, r();
            },
            r = async (g = !1) => {
               if (o.typeid == null) return;
               g && (d.value = 1);
               const m = await de(Ra({ pageSize: p.value, pageNo: d.value, typeId: o.typeid }));
               (u.value = (m == null ? void 0 : m.data.list) || []), (v.value = (m == null ? void 0 : m.data.totalPage) || 0);
            };
         return (
            s({ getData: r }),
            kt(() => {
               r();
            }),
            (g, m) => {
               const $ = U("van-col"),
                  y = U("van-row"),
                  C = U("van-icon");
               return (
                  n(),
                  a("div", fv, [
                     e("div", bv, [L(y, null, { default: A(() => [L($, { span: "8" }, { default: A(() => [E(t(g.$t("FDNumber")), 1)]), _: 1 }), L($, { span: "12" }, { default: A(() => [E(t(g.$t("FDResult")), 1)]), _: 1 }), L($, { span: "4" }, { default: A(() => [E(t(g.$t("FDTotal")), 1)]), _: 1 })]), _: 1 })]),
                     e("div", $v, [
                        u.value.length
                           ? (n(!0),
                             a(
                                N,
                                { key: 0 },
                                D(
                                   u.value,
                                   (f, b) => (
                                      n(),
                                      Z(
                                         y,
                                         { key: b },
                                         {
                                            default: A(() => [
                                               L($, { span: "8" }, { default: A(() => [E(t(f.issueNumber), 1)]), _: 2 }, 1024),
                                               L(
                                                  $,
                                                  { span: "12" },
                                                  {
                                                     default: A(() => [
                                                        e("div", Cv, [
                                                           (n(!0),
                                                           a(
                                                              N,
                                                              null,
                                                              D([...f.premium], (T, h) => (n(), a("div", kv, t(T), 1))),
                                                              256,
                                                           )),
                                                        ]),
                                                     ]),
                                                     _: 2,
                                                  },
                                                  1024,
                                               ),
                                               L($, { span: "4" }, { default: A(() => [e("span", Tv, t(f.sumCount), 1)]), _: 2 }, 1024),
                                            ]),
                                            _: 2,
                                         },
                                         1024,
                                      )
                                   ),
                                ),
                                128,
                             ))
                           : (n(), a("div", wv, [L(gt)])),
                     ]),
                     u.value.length ? (n(), a("div", Lv, [e("div", { class: M(["GameRecord__C-foot-previous", { disabled: d.value <= 1 }]), onClick: i }, [L(C, { name: "arrow-left", class: "GameRecord__C-icon", size: "20" })], 2), e("div", Iv, t(d.value) + "/" + t(v.value), 1), e("div", { class: M(["GameRecord__C-foot-next", { disabled: d.value >= v.value }]), onClick: _ }, [L(C, { name: "arrow", class: "GameRecord__C-icon", size: "20" })], 2)])) : B("", !0),
                  ])
               );
            }
         );
      },
   });
const Gv = H(Sv, [["__scopeId", "data-v-509a680b"]]),
   xv = { class: "noticeBar__container" },
   Bv = { class: "noticeBar__container-body" },
   Nv = { key: 0, class: "noticeBar__container-body-text" },
   Rv = V({
      __name: "index",
      props: { color: { default: "red" } },
      setup(l) {
         const s = l;
         zs(r => ({ "04aba014": u.value }));
         const o = { btn: { blue: "linear-gradient(272.37deg,#477bff 1.68%,#2b97ff 95.19%)", red: "linear-gradient(360deg, #f54545 20.19%, #fe6868 100%)" }, svg: { blue: "#477bff", red: "#f54545" } },
            u = q(() => o.btn[s.color]);
         q(() => o.svg[s.color]);
         const v = ue(),
            p = rt(),
            d = k(null),
            i = k(p.messageList),
            _ = async () => {
               const r = await de(wn({ pageNo: 1, pageSize: 5 }));
               if (r) {
                  if ((p.setMessage(r.data.list), (i.value = r.data.list), !i.value.length)) return;
                  d.value && clearInterval(d.value),
                     (d.value = setInterval(() => {
                        i.value.push(i.value.shift());
                     }, 7e3));
               }
            };
         return (
            he(() => {
               i.value ||
                  setTimeout(() => {
                     _();
                  }, 1e3);
            }),
            (r, g) => {
               var m;
               return n(), a("div", xv, [(n(), Z(ft(r.speakerIcon), { class: "notice_svg" })), e("div", Bv, [i.value && i.value[0] && i.value[0].siteMessage ? (n(), a("div", Nv, t((m = i.value[0]) == null ? void 0 : m.siteMessage), 1)) : B("", !0)]), e("button", { onClick: g[0] || (g[0] = $ => c(v).push({ name: "Notification" })) }, t(r.$t("more")), 1)]);
            }
         );
      },
   });
const Yt = H(Rv, [["__scopeId", "data-v-b3a5ca79"]]),
   Mv = { class: "Trend__C" },
   Dv = { class: "Trend__C-body1" },
   Av = { class: "Trend__C-nav" },
   Pv = ["onClick"],
   Ov = { class: "Trend__C-body1-line" },
   Vv = { key: 0, class: "Trend__C-body1-line" },
   Wv = { class: "Trend__C-body1-line-num" },
   Hv = { key: 1, class: "Trend__C-body1-line" },
   zv = { class: "Trend__C-body1-line-num" },
   Ev = { key: 2, class: "Trend__C-body1-line" },
   Fv = { class: "Trend__C-body1-line-num" },
   jv = { key: 3, class: "Trend__C-body1-line" },
   Uv = { class: "Trend__C-body1-line-num" },
   qv = { class: "Trend__C-head" },
   Kv = { class: "Trend__C-body2" },
   Zv = ["IssueNumber", "Number", "Colour", "rowId"],
   Xv = { class: "Trend__C-body2-IssueNumber" },
   Jv = { class: "Trend__C-body2-Num" },
   Yv = ["id"],
   Qv = { key: 1, class: "Trend__C-body2-empty" },
   e2 = { key: 0, class: "Trend__C-foot" },
   t2 = { class: "Trend__C-foot-page" },
   s2 = V({
      __name: "Trend",
      props: { typeid: {} },
      setup(l, { expose: s }) {
         const o = l,
            u = k([]),
            v = k([]),
            p = k(),
            d = k(),
            i = k(),
            _ = k(),
            r = k(),
            g = k(["A", "B", "C", "D", "E"]),
            m = k(0),
            $ = k(1),
            y = k(4);
         function C() {
            lt(() => {
               for (let x = 0; x < v.value.length; x++) v.value[x + 1] && b(v.value[x], v.value[x + 1]);
            });
         }
         const f = x => {
            (m.value = x), w(!0);
         };
         function b(x, S) {
            let G = parseInt(x.number),
               R = parseInt(S.number);
            var O = document.getElementById("myCanvas" + x.rowId);
            if (O && O.getContext) {
               var P = O.getContext("2d");
               P.clearRect(0, 0, O.width, O.height), P.beginPath(), P.moveTo(G == 0 ? 14 : G * 27 + 14, 0), P.lineTo(R == 0 ? 14 : R * 27 + 14, O.height), (P.strokeStyle = "#A4EBF3"), P.stroke(), P.closePath();
            }
         }
         const T = () => {
               $.value--, I();
            },
            h = () => {
               $.value++, I();
            },
            w = async (x = !1) => {
               if (o.typeid == null) return;
               I(), x && ($.value = 1);
               const S = await de(Dl({ typeId: o.typeid, typeNumber: m.value + 1 }));
               if (S) {
                  const G = Object.keys(S.data[0]).filter(R => R.startsWith("number_"));
                  u.value = S.data
                     .filter(R => R.type_Number == m.value + 1)
                     .map(R => {
                        const O = { list: [], type: 0 };
                        return (
                           (O.type = R.type),
                           (O.list = []),
                           G.forEach(P => {
                              O.list.push(R[P]);
                           }),
                           O
                        );
                     });
               }
               (p.value = u.value.find(G => G.type == 1)), (d.value = u.value.find(G => G.type == 2)), (i.value = u.value.find(G => G.type == 3)), (_.value = u.value.find(G => G.type == 4)), (r.value = u.value.find(G => G.type == 5));
            },
            I = async (x = !1) => {
               if (o.typeid == null) return;
               x && ($.value = 1);
               const S = await de(Ra({ pageSize: 10, pageNo: $.value, typeId: o.typeid }));
               S && (v.value = S.data.list.map((G, R) => ((G.rowId = R), (G.number = G.premium[m.value]), G)) || []), (y.value = (S == null ? void 0 : S.data.totalPage) || 0), C();
            };
         return (
            s({ getData: w }),
            kt(() => {
               w();
            }),
            (x, S) => {
               const G = U("van-col"),
                  R = U("van-row"),
                  O = U("van-icon");
               return (
                  n(),
                  a("div", Mv, [
                     e("div", Dv, [
                        e("div", Av, [
                           (n(!0),
                           a(
                              N,
                              null,
                              D(g.value, (P, W) => (n(), a("div", { key: W, class: M({ active: m.value == W }), onClick: J => f(W) }, t(P), 11, Pv))),
                              128,
                           )),
                        ]),
                        e("div", Ov, t(x.$t("trendDesc1")), 1),
                        d.value
                           ? (n(),
                             a("div", Vv, [
                                e("div", null, t(x.$t("trendDesc3")), 1),
                                e("div", Wv, [
                                   (n(!0),
                                   a(
                                      N,
                                      null,
                                      D(d.value.list, (P, W) => (n(), a("div", { key: "2" + W }, t(P), 1))),
                                      128,
                                   )),
                                ]),
                             ]))
                           : B("", !0),
                        _.value
                           ? (n(),
                             a("div", Hv, [
                                e("div", null, t(x.$t("trendDesc4")), 1),
                                e("div", zv, [
                                   (n(!0),
                                   a(
                                      N,
                                      null,
                                      D(_.value.list, (P, W) => (n(), a("div", { key: "4" + W }, t(P), 1))),
                                      128,
                                   )),
                                ]),
                             ]))
                           : B("", !0),
                        p.value
                           ? (n(),
                             a("div", Ev, [
                                e("div", null, t(x.$t("trendDesc5")), 1),
                                e("div", Fv, [
                                   (n(!0),
                                   a(
                                      N,
                                      null,
                                      D(p.value.list, (P, W) => (n(), a("div", { key: "5" + W }, t(P), 1))),
                                      128,
                                   )),
                                ]),
                             ]))
                           : B("", !0),
                        i.value
                           ? (n(),
                             a("div", jv, [
                                e("div", null, t(x.$t("trendDesc6")), 1),
                                e("div", Uv, [
                                   (n(!0),
                                   a(
                                      N,
                                      null,
                                      D(i.value.list, (P, W) => (n(), a("div", { key: "3" + W }, t(P), 1))),
                                      128,
                                   )),
                                ]),
                             ]))
                           : B("", !0),
                     ]),
                     e("div", qv, [L(R, null, { default: A(() => [L(G, { span: "8" }, { default: A(() => [E(t(x.$t("betIssue")), 1)]), _: 1 }), L(G, { span: "16" }, { default: A(() => [E(t(x.$t("number")), 1)]), _: 1 })]), _: 1 })]),
                     e("div", Kv, [
                        v.value.length
                           ? (n(!0),
                             a(
                                N,
                                { key: 0 },
                                D(
                                   v.value,
                                   (P, W) => (
                                      n(),
                                      a(
                                         "div",
                                         { key: W, IssueNumber: P.issueNumber, Number: P.number, Colour: P.colour, rowId: P.rowId },
                                         [
                                            L(
                                               R,
                                               null,
                                               {
                                                  default: A(() => [
                                                     L(G, { span: "8" }, { default: A(() => [e("div", Xv, t(P.issueNumber), 1)]), _: 2 }, 1024),
                                                     L(
                                                        G,
                                                        { span: "16" },
                                                        {
                                                           default: A(() => [
                                                              e("div", Jv, [
                                                                 e("canvas", { canvas: "", id: "myCanvas" + P.rowId, ref_for: !0, ref: "canvas", class: "line-canvas" }, null, 8, Yv),
                                                                 (n(),
                                                                 a(
                                                                    N,
                                                                    null,
                                                                    D(10, J => e("div", { class: M(["Trend__C-body2-Num-item", { action: Number(P.number) == J - 1 }]), key: J }, t(J - 1), 3)),
                                                                    64,
                                                                 )),
                                                                 e("div", { class: M(["Trend__C-body2-Num-BS", { isB: Number(P.number) > 4 }]) }, t(Number(P.number) > 4 ? "H" : "L"), 3),
                                                                 e("div", { class: M(["Trend__C-body2-Num-OE", { isE: Number(P.number) % 2 }]) }, t(Number(P.number) % 2 ? "O" : "E"), 3),
                                                              ]),
                                                           ]),
                                                           _: 2,
                                                        },
                                                        1024,
                                                     ),
                                                  ]),
                                                  _: 2,
                                               },
                                               1024,
                                            ),
                                         ],
                                         8,
                                         Zv,
                                      )
                                   ),
                                ),
                                128,
                             ))
                           : (n(), a("div", Qv, [L(gt)])),
                     ]),
                     v.value.length ? (n(), a("div", e2, [e("div", { class: M(["Trend__C-foot-previous", { disabled: $.value <= 1 }]), onClick: T }, [L(O, { name: "arrow-left", class: "Trend__C-icon", size: "20" })], 2), e("div", t2, t($.value) + "/" + t(y.value), 1), e("div", { class: M(["Trend__C-foot-next", { disabled: $.value >= y.value }]), onClick: h }, [L(O, { name: "arrow", class: "Trend__C-icon", size: "20" })], 2)])) : B("", !0),
                  ])
               );
            }
         );
      },
   });
const n2 = H(s2, [["__scopeId", "data-v-c53b15fb"]]),
   a2 = { class: "MyGameRecordList__C" },
   o2 = ["onClick"],
   l2 = { class: "MyGameRecordList__C-item-m" },
   i2 = { class: "MyGameRecordList__C-item-m-top" },
   c2 = { class: "MyGameRecordList__C-item-m-bottom" },
   u2 = { key: 0, class: "MyGameRecordList__C-detail" },
   r2 = { class: "MyGameRecordList__C-detail-text" },
   d2 = { key: 0, class: "MyGameRecordList__C-detail-line" },
   _2 = ["onClick"],
   v2 = ["src"],
   p2 = { class: "MyGameRecordList__C-detail-line" },
   m2 = { class: "MyGameRecordList__C-detail-line" },
   g2 = { class: "MyGameRecordList__C-detail-line" },
   h2 = { class: "MyGameRecordList__C-detail-line" },
   y2 = { class: "red" },
   f2 = { class: "MyGameRecordList__C-detail-line" },
   b2 = { class: "MyGameRecordList__C-detail-line" },
   $2 = { key: 0, class: "numList" },
   C2 = { key: 1 },
   k2 = { class: "MyGameRecordList__C-detail-line" },
   T2 = { class: "line1" },
   w2 = { class: "MyGameRecordList__C-detail-line" },
   L2 = { key: 1 },
   I2 = { class: "MyGameRecordList__C-detail-line" },
   S2 = { key: 1 },
   G2 = { class: "MyGameRecordList__C-detail-line" },
   x2 = V({
      __name: "MayrecordList",
      props: { mayrecord: {} },
      setup(l) {
         const { t: s } = _e(),
            o = k(-1),
            u = i => ["", "A", "B", "C", "D", "E"][i],
            v = i => {
               switch (i) {
                  case "L":
                     return s("k3Small");
                  case "O":
                     return s("k3Odd");
                  case "E":
                     return s("k3Even");
                  case "H":
                     return s("k3Big");
                  default:
                     return i;
               }
            },
            p = i => {
               o.value == i ? (o.value = -1) : (o.value = i);
            },
            d = i => {
               switch (i) {
                  case "E":
                     return "Even";
                  case "O":
                     return "Odd";
                  case "H":
                     return "Big";
                  case "L":
                     return "Small";
                  default:
                     return i;
               }
            };
         return (i, _) => (
            n(),
            a("div", a2, [
               (n(!0),
               a(
                  N,
                  null,
                  D(
                     i.mayrecord,
                     (r, g) => (
                        n(),
                        a(
                           N,
                           { key: g },
                           [
                              e("div", { class: "MyGameRecordList__C-item", onClick: ut(m => p(g), ["stop", "prevent"]) }, [e("div", { class: M(["MyGameRecordList__C-item-l", ["MyGameRecordList__C-item-l-" + r.selectType]]) }, t(d(r.selectType)), 3), e("div", l2, [e("div", i2, t(r.issueNumber), 1), e("div", c2, t(r.addTime), 1)]), r.profitAmount ? (n(), a("div", { key: 0, class: M(["MyGameRecordList__C-item-r", { success: r.state }]) }, [r.profitAmount ? (n(), a("div", { key: 0, class: M({ success: r.state }) }, t(r.state ? i.$t("success") : i.$t("fail")), 3)) : B("", !0), e("span", null, t(`${r.state ? "+" : "-"}${c(Be)(r.profitAmount)}`), 1)], 2)) : B("", !0)], 8, o2),
                              g == o.value
                                 ? (n(),
                                   a("div", u2, [
                                      e("div", r2, t(i.$t("detailMay")), 1),
                                      r.orderNumber ? (n(), a("div", d2, [E(t(i.$t("orderNoMay")) + " ", 1), e("div", { onClick: m => c(Zt)(r.orderNumber) }, [E(t(r.orderNumber) + " ", 1), e("img", { src: c(pe)("home/AllLotteryGames/WinGo", "copy") }, null, 8, v2)], 8, _2)])) : B("", !0),
                                      e("div", p2, [E(t(i.$t("issueMay")) + " ", 1), e("div", null, t(r.issueNumber), 1)]),
                                      e("div", m2, [E(t(i.$t("amountMay")) + " ", 1), e("div", null, t(c(Be)(r.amount)), 1)]),
                                      e("div", g2, [E(t(i.$t("numMay")) + " ", 1), e("div", null, t(r.betCount), 1)]),
                                      e("div", h2, [E(t(i.$t("afterTaxAmount")) + " ", 1), e("div", y2, t(c(Be)(r.realAmount)), 1)]),
                                      e("div", f2, [E(t(i.$t("tax")) + " ", 1), e("div", null, t(c(Be)(r.fee)), 1)]),
                                      e("div", b2, [
                                         E(t(i.$t("resultMay")) + " ", 1),
                                         r.premium
                                            ? (n(),
                                              a("div", $2, [
                                                 (n(!0),
                                                 a(
                                                    N,
                                                    null,
                                                    D(r.premium, (m, $) => (n(), a("div", { key: $ }, t(m), 1))),
                                                    128,
                                                 )),
                                              ]))
                                            : (n(), a("div", C2, "--")),
                                      ]),
                                      e("div", k2, [
                                         E(t(i.$t("selectMay")) + " ", 1),
                                         e("div", T2, [
                                            e("div", null, t(u(r.gameType)), 1),
                                            (n(!0),
                                            a(
                                               N,
                                               null,
                                               D(r.selectType.split("|"), (m, $) => (n(), a("div", { class: "num", key: $ }, t(v(m)), 1))),
                                               128,
                                            )),
                                         ]),
                                      ]),
                                      e("div", w2, [E(t(i.$t("statusMay")) + " ", 1), r.state != 2 ? (n(), a("div", { key: 0, class: M([r.state ? "green" : "red"]) }, t(r.state ? i.$t("success") : i.$t("fail")), 3)) : (n(), a("div", L2, t(i.$t("unsettled")), 1))]),
                                      e("div", I2, [E(t(i.$t("winOrLose")) + " ", 1), r.state != 2 ? (n(), a("div", { key: 0, class: M([r.state ? "green" : "red"]) }, t(`${r.state ? "+" : "-"} ${c(Be)(r.profitAmount)}`), 3)) : (n(), a("div", S2, "--"))]),
                                      e("div", G2, [E(t(i.$t("createTime")) + " ", 1), e("div", null, t(r.addTime), 1)]),
                                   ]))
                                 : B("", !0),
                           ],
                           64,
                        )
                     ),
                  ),
                  128,
               )),
            ])
         );
      },
   });
const no = H(x2, [["__scopeId", "data-v-b4b99df8"]]),
   B2 = { class: "MyGameRecord__C" },
   N2 = { key: 0, class: "MyGameRecord__C-head" },
   R2 = { class: "MyGameRecord__C-body" },
   M2 = { key: 1, class: "MyGameRecord__C-body-empty" },
   D2 = { key: 1, class: "MyGameRecord__C-foot" },
   A2 = { class: "MyGameRecord__C-foot-page" },
   P2 = V({
      __name: "MyGameRecord",
      props: { typeid: {}, goPathName: {}, hasHead: { type: Boolean, default: !0 } },
      setup(l, { expose: s }) {
         const o = l,
            u = ue(),
            v = k(4),
            p = k(20),
            d = k(1),
            i = k([]),
            _ = $ => {
               u.push({ name: $ });
            },
            r = () => {
               d.value--, m();
            },
            g = () => {
               d.value++, m();
            },
            m = async ($ = !1) => {
               if (o.typeid == null) return;
               $ && (d.value = 1);
               const y = await de(Ma({ pageSize: p.value, pageNo: d.value, typeId: o.typeid }));
               (i.value = (y == null ? void 0 : y.data.list) || []), (v.value = (y == null ? void 0 : y.data.totalPage) || 0);
            };
         return (
            s({ getData: m }),
            kt(() => {
               m();
            }),
            ($, y) => {
               const C = U("van-icon");
               return n(), a("div", B2, [$.hasHead ? (n(), a("div", N2, [e("div", { class: "MyGameRecord__C-head-moreB", onClick: y[0] || (y[0] = f => _($.goPathName)) }, t($.$t("more")), 1)])) : B("", !0), e("div", R2, [i.value.length ? (n(), Z(no, { key: 0, mayrecord: i.value }, null, 8, ["mayrecord"])) : (n(), a("div", M2, [L(gt)]))]), i.value.length ? (n(), a("div", D2, [e("div", { class: M(["MyGameRecord__C-foot-previous", { disabled: d.value <= 1 }]), onClick: r }, [L(C, { name: "arrow-left", class: "MyGameRecord__C-icon", size: "20" })], 2), e("div", A2, t(d.value) + "/" + t(v.value), 1), e("div", { class: M(["MyGameRecord__C-foot-next", { disabled: d.value >= v.value }]), onClick: g }, [L(C, { name: "arrow", class: "MyGameRecord__C-icon", size: "20" })], 2)])) : B("", !0)]);
            }
         );
      },
   });
const ao = H(P2, [["__scopeId", "data-v-223ff8ce"]]),
   O2 = l => (ye("data-v-d11db93f"), (l = l()), fe(), l),
   V2 = { class: "FDP__C" },
   W2 = { class: "FDP__C-text" },
   H2 = { class: "FDP__C-list" },
   z2 = { class: "num" },
   E2 = { class: "letter" },
   F2 = O2(() => e("div", { class: "FDP__C-symbol" }, "=", -1)),
   j2 = { class: "FDP__C-sum" },
   U2 = V({
      __name: "premium",
      props: { sumCount: { type: Number, default: 0 }, premium: { type: String, default: "00000" } },
      setup(l) {
         const s = l,
            o = q(() => [...s.premium]),
            u = k(["A", "B", "C", "D", "E"]);
         return (v, p) => (
            n(),
            a("div", V2, [
               e("div", W2, t(v.$t("betResult")), 1),
               e("div", H2, [
                  (n(!0),
                  a(
                     N,
                     null,
                     D(o.value, (d, i) => (n(), a("div", { key: i }, [e("div", z2, t(d), 1), e("div", E2, t(u.value[i]), 1)]))),
                     128,
                  )),
               ]),
               F2,
               e("div", j2, t(l.sumCount), 1),
            ])
         );
      },
   });
const q2 = H(U2, [["__scopeId", "data-v-d11db93f"]]),
   K2 = l => (ye("data-v-e2a7b350"), (l = l()), fe(), l),
   Z2 = { key: 1, class: "WinningTip__C-body-l1" },
   X2 = { class: "WinningTip__C-body-l2" },
   J2 = { class: "line1" },
   Y2 = { class: "title" },
   Q2 = { class: "num" },
   ep = K2(() => e("div", { class: "title sum" }, "SUM", -1)),
   tp = { class: "num" },
   sp = { class: "WinningTip__C-body-l3" },
   np = { key: 0, class: "isLose" },
   ap = { class: "head" },
   op = { class: "bonus" },
   lp = { class: "gameDetail" },
   ip = { class: "WinningTip__C-body-l4" },
   cp = ["onClick"],
   up = V({
      __name: "WinningTips",
      setup(l, { expose: s }) {
         const o = q(() => (p.value[0] ? p.value[0].state == 0 : !1)),
            u = q(() => p.value[0] || {}),
            v = k(!1),
            p = k([]),
            d = k(["A", "B", "C", "D", "E", "SUM"]);
         let i = k();
         const _ = () => {
               clearTimeout(i.value),
                  p.value.shift(),
                  v.value &&
                     p.value.length &&
                     (i.value = setTimeout(() => {
                        _();
                     }, 1e3 * 3));
            },
            r = () => {
               (v.value = !v.value),
                  v.value
                     ? (i.value = setTimeout(() => {
                          _();
                       }, 1e3 * 3))
                     : clearTimeout(i.value);
            },
            g = $ => {
               ($.list = $.premium.split("")),
                  ($.sum = $.sumCount),
                  p.value.push($),
                  v.value &&
                     (i.value = setTimeout(() => {
                        _();
                     }, 1e3 * 3));
            },
            m = () => {
               p.value = [];
            };
         return (
            s({ showMark: g }),
            ($, y) =>
               te(
                  (n(),
                  a(
                     "div",
                     { class: "WinningTip__C", onClick: _ },
                     [
                        e(
                           "div",
                           { class: M(["WinningTip__C-body", { isL: o.value }]) },
                           [
                              o.value ? (n(), a("div", { key: 0, class: M(["WinningTip__C-body-l1", { isL: o.value }]) }, t($.$t("k3WarningTip1")), 3)) : (n(), a("div", Z2, t($.$t("k3WarningTip2")), 1)),
                              e("div", X2, [
                                 E(t($.$t("betResult")) + " ", 1),
                                 e("div", J2, [
                                    (n(!0),
                                    a(
                                       N,
                                       null,
                                       D(u.value.list, (C, f) => (n(), a("div", { key: f }, [e("div", Y2, t(d.value[f]), 1), e("div", Q2, t(C), 1)]))),
                                       128,
                                    )),
                                    e("div", null, [ep, e("div", tp, t(u.value.sum), 1)]),
                                 ]),
                              ]),
                              e("div", sp, [o.value ? (n(), a("div", np, t($.$t("k3WarningTip3")), 1)) : (n(), a(N, { key: 1 }, [e("div", ap, t($.$t("k3WarningTip4")), 1), e("div", op, t(c(Be)(Number(u.value.winAmount))), 1)], 64)), e("div", lp, t($.$t("k3WarningTip5")) + t(u.value.typeName) + " " + t(u.value.issueNumber), 1)]),
                              e("div", ip, [e("div", { class: M(["acitveBtn", { active: v.value }]), onClick: ut(r, ["stop"]) }, null, 10, cp), E(" " + t($.$t("autoShutOff3s")), 1)]),
                              e("div", { class: "closeBtn", onClick: m }),
                           ],
                           2,
                        ),
                     ],
                     512,
                  )),
                  [[He, p.value.length]],
               )
         );
      },
   });
const rp = H(up, [["__scopeId", "data-v-e2a7b350"]]),
   dp = V({
      __name: "ChangLong",
      setup(l) {
         const s = ue(),
            o = () => {
               s.push({ name: "AllLotteryGames-ChangLong" });
            };
         return (u, v) => (n(), a("div", { class: "changlongEnter", onClick: o }));
      },
   });
const os = H(dp, [["__scopeId", "data-v-8a2fbe28"]]),
   _p = "/assets/mp3/di1-0f3d86cb.mp3",
   vp = "/assets/mp3/di2-ad9aa8fb.mp3",
   pp = ["muted"],
   mp = e("source", { src: _p, type: "audio/mpeg" }, null, -1),
   gp = [mp],
   hp = ["muted"],
   yp = e("source", { src: vp, type: "audio/mpeg" }, null, -1),
   fp = [yp],
   Ks = V({
      __name: "audio",
      setup(l) {
         const s = k(!1);
         Ve(
            () => rt().visibility,
            u => {
               u === 0
                  ? (s.value = !0)
                  : setTimeout(() => {
                       s.value = !1;
                    }, 500);
            },
         );
         const o = () => {
            (s.value = !0),
               lt(() => {
                  const u = document.getElementById("voice1"),
                     v = document.getElementById("voice2");
                  u.play(), v.play(), u.pause(), v.pause(), (s.value = !1), document.removeEventListener("touchstart", o);
               });
         };
         return (
            he(() => {
               document.addEventListener("touchstart", o);
            }),
            (u, v) => (n(), a(N, null, [e("audio", { id: "voice1", muted: s.value }, gp, 8, pp), e("audio", { id: "voice2", muted: s.value }, fp, 8, hp)], 64))
         );
      },
   }),
   bp = l => (ye("data-v-f1b3a9ec"), (l = l()), fe(), l),
   $p = { class: "FD__C" },
   Cp = bp(() => e("div", { class: "arrow-left" }, null, -1)),
   kp = { class: "FD__C-head-more" },
   Tp = V({
      __name: "index",
      setup(l) {
         var Ie, re;
         const s = { GameRecord: Gv, Trend: n2, MyGameRecord: ao },
            o = k(),
            u = k(),
            v = k(),
            p = k(),
            d = k(!1),
            i = k("GameRecord"),
            _ = ue(),
            r = Ut(),
            g = r.get5D,
            m = { 5: 0, 6: 1, 7: 2, 8: 3 },
            $ = k((Ie = _.currentRoute.value.query) != null && Ie.typeId ? m[(re = _.currentRoute.value.query) == null ? void 0 : re.typeId] : null),
            y = k(localStorage.getItem("volumeShow") || "1"),
            C = k(!1),
            f = k(null),
            b = k({ gameNo: "loading", currentTime: "", beginTime: "", passTime: 180, time1: 0, time2: 0, time3: 0, time4: 0 }),
            T = k(5),
            h = k(""),
            w = k(!1),
            I = k(null),
            x = k("00000"),
            S = k(0),
            G = q(() => g[$.value] || {}),
            R = je(),
            O = q(() => R.getIsShowLotteryDragon);
         he(() => {
            le();
         }),
            jt(() => {
               clearInterval(f.value),
                  Qe.value.forEach(se => {
                     clearInterval(se);
                  }),
                  xe.value && clearTimeout(xe.value);
            }),
            Ve(
               () => rt().visibility,
               se => {
                  se === 0 ? clearInterval(f.value) : (le(), ne($.value));
               },
            );
         const P = () => {
               sessionStorage.setItem("clickedGameType", "lottery"), _.push({ path: "/" });
            },
            W = () => {
               y.value == "1" ? (y.value = "2") : (y.value = "1"), localStorage.setItem("volumeShow", y.value);
            },
            J = se => {
               _.push({ name: se });
            },
            le = () => {
               I.value == null && ne($.value);
            },
            ie = async (se, Q = !1) => {
               const [ee, ae] = await ct(Pl({ typeId: se }));
               (x.value = ae.premium), (S.value = ae.sumCount), Q && p.value.animationShow();
            },
            ne = se => {
               r.get5DData(),
                  ($.value = se),
                  (I.value = g[se].typeID),
                  z(I.value),
                  lt(() => {
                     o.value.getData(I.value);
                  });
            },
            z = async (se, Q = !1) => {
               ie(se, Q);
               const [ee, ae] = await ct(Al({ typeId: se }));
               (b.value.gameNo = ae.issueNumber), (b.value.currentTime = ae.serviceTime.replace(/-/g, "/")), (b.value.beginTime = ae.startTime.replace(/-/g, "/")), X();
            },
            X = () => {
               if (!g.length) return;
               var se = new Date(b.value.currentTime).getTime(),
                  Q = new Date(b.value.beginTime).getTime();
               let ee = (se - Q) / 1e3,
                  ae = g[$.value];
               if ((ee > ae.intervalM * 60 && (ee = ae.intervalM * 60), (b.value.passTime = ae.intervalM * 60 - ee), b.value.passTime < 0)) {
                  (h.value = "An error occurred, please contact customer service。The game time is " + ae.intervalM + " minutes,start time is " + b.value.beginTime + ",current time is" + b.value.currentTime + "!"), (C.value = !0);
                  return;
               }
               ce();
            },
            ce = () => {
               clearInterval(f.value),
                  Ne(!1),
                  (f.value = setInterval(function () {
                     Ne();
                  }, 1e3));
            },
            Ne = (se = !0) => {
               if ((b.value.passTime <= T.value && (w.value = !1), y.value == "1" && (b.value.passTime <= T.value && b.value.passTime > 1 ? Se(1) : b.value.passTime == 1 && Se(2)), b.value.passTime > 0)) {
                  let Q = b.value.passTime;
                  (b.value.time2 = Math.floor(Q / 60)), (b.value.time3 = Math.floor((Q % 60) / 10)), (b.value.time4 = Math.floor(Q % 10)), b.value.passTime--;
               } else clearInterval(f.value), se && ge();
            },
            Se = (se = 1) => {
               const Q = document.getElementById(`voice${se}`);
               Q && ((Q.currentTime = 0), Q.play());
            },
            ge = () => {
               z(I.value, !0), v.value.getWinsUserAmount(!1), o.value.getData(!0);
            },
            Je = k({}),
            Qe = k([]),
            et = se => {
               if ((v.value.getWinsUserAmount(!1), o.value.getData(), Je.value[se])) return;
               Je.value[se] = !0;
               const { time1: Q, time2: ee, time3: ae, time4: Ge } = b.value,
                  Re = (Q * 10 * 60 + ee * 60 + ae * 10 + Ge) * 1e3;
               Qe.value[G.value.intervalM] = setTimeout(() => {
                  Le(se);
               }, Re);
            },
            we = se => {
               d.value = se;
            },
            xe = k(null),
            Le = async se => {
               const [Q, ee] = await ct(Ol({ issueNumber: se }));
               if (ee.data)
                  if (ee.data.state != 2) u.value.showMark(ee.data), delete Je.value[se];
                  else {
                     xe.value = setTimeout(() => {
                        Le(se);
                     }, 2e3);
                     return;
                  }
            };
         return (se, Q) => {
            const ee = U("NavBar");
            return (
               n(),
               a("div", $p, [
                  L(ee, { "left-arrow": "", onClickLeft: P, "background-color": "linear-gradient(90deg, #8deef5 0%, #259aa3 100%)", headLogo: !0 }, { left: A(() => [Cp]), right: A(() => [e("div", kp, [e("div", { onClick: Q[0] || (Q[0] = ae => J("CustomerService")) }), e("div", { class: M({ disableVoice: y.value == "2" }), onClick: W }, null, 2)])]), _: 1 }),
                  L(Fs, { ref_key: "WallteRef", ref: v }, null, 512),
                  L(Yt, { key: "5d" }),
                  L(js, { gameList: c(g), currentGameIndex: $.value, onChangeGame: ne }, null, 8, ["gameList", "currentGameIndex"]),
                  L(q2, { premium: x.value, sumCount: S.value }, null, 8, ["premium", "sumCount"]),
                  L(A_, { ref_key: "tiemLeftRef", ref: p, currentInfo: b.value, premium: x.value, currentGame: G.value }, null, 8, ["currentInfo", "premium", "currentGame"]),
                  L(mv, { currentInfo: b.value, currentGame: G.value, VoiceType: y.value, typeid: I.value, onBetting: et, onChangeBettingP: we }, null, 8, ["currentInfo", "currentGame", "VoiceType", "typeid"]),
                  L(qs, { record: i.value, onChangeC: Q[1] || (Q[1] = ae => (i.value = ae)) }, null, 8, ["record"]),
                  (n(), Z(ns, null, [(n(), Z(ft(s[i.value]), { ref_key: "RecordComponent", ref: o, typeid: I.value, EmerdApi: c(Da), goPathName: "AllLotteryGames-BettingRecord5D" }, null, 8, ["typeid", "EmerdApi"]))], 1024)),
                  L(Mt, { show: C.value, onConfirm: Q[2] || (Q[2] = ae => J("/login")) }, { content: A(() => [e("div", null, t(h.value), 1)]), _: 1 }, 8, ["show"]),
                  L(rp, { ref_key: "WinningTipsRef", ref: u }, null, 512),
                  O.value ? (n(), Z(os, { key: 0 })) : B("", !0),
                  L(Ks),
               ])
            );
         };
      },
   });
const wp = H(Tp, [["__scopeId", "data-v-f1b3a9ec"]]),
   $V = Object.freeze(Object.defineProperty({ __proto__: null, default: wp }, Symbol.toStringTag, { value: "Module" })),
   Lp = { class: "BettingRecord5D__C" },
   Ip = { class: "BettingRecord5D__C-nav" },
   Sp = { class: "BettingRecord5D__C-list" },
   Gp = { key: 0, class: "BettingRecord5D__C-foot" },
   xp = { class: "BettingRecord5D__C-foot-page" },
   Bp = V({
      __name: "index",
      setup(l) {
         const s = ue(),
            o = k(Mc),
            u = k([]),
            v = k(0),
            p = k(1),
            d = k(4),
            i = C => {
               (_.value = C.name), (p.value = 1), r();
            },
            _ = k(0),
            r = async () => {
               const C = await de(Ma({ pageSize: 20, pageNo: p.value, typeId: _.value }));
               (u.value = (C == null ? void 0 : C.data.list) || []), (d.value = (C == null ? void 0 : C.data.totalPage) || 0);
            },
            g = () => {
               (_.value = o.value[0].typeID), r();
            };
         function m() {
            s.go(-1);
         }
         const $ = () => {
               p.value--, r();
            },
            y = () => {
               p.value++, r();
            };
         return (
            he(() => {
               g();
            }),
            (C, f) => {
               const b = U("van-tab"),
                  T = U("van-tabs"),
                  h = U("van-icon");
               return (
                  n(),
                  a("div", Lp, [
                     e("div", { class: "BettingRecord5D__C-head" }, [e("div", { class: "BettingRecord5D__C-head-bcak", onClick: m }), E(" 5D Lotre ")]),
                     e("div", Ip, [
                        L(
                           T,
                           { active: v.value, "onUpdate:active": f[0] || (f[0] = w => (v.value = w)), onClickTab: i },
                           {
                              default: A(() => [
                                 (n(!0),
                                 a(
                                    N,
                                    null,
                                    D(o.value, (w, I) => (n(), Z(b, { key: I, title: w.tabName, name: w.typeID }, null, 8, ["title", "name"]))),
                                    128,
                                 )),
                              ]),
                              _: 1,
                           },
                           8,
                           ["active"],
                        ),
                     ]),
                     e("div", Sp, [L(no, { mayrecord: u.value }, null, 8, ["mayrecord"])]),
                     u.value.length ? (n(), a("div", Gp, [e("div", { class: M(["BettingRecord5D__C-foot-previous", { disabled: p.value <= 1 }]), onClick: $ }, [L(h, { name: "arrow-left", class: "BettingRecord5D__C-icon", size: "20" })], 2), e("div", xp, t(p.value) + "/" + t(d.value), 1), e("div", { class: M(["BettingRecord5D__C-foot-next", { disabled: p.value >= d.value }]), onClick: y }, [L(h, { name: "arrow", class: "BettingRecord5D__C-icon", size: "20" })], 2)])) : B("", !0),
                  ])
               );
            }
         );
      },
   });
const Np = H(Bp, [["__scopeId", "data-v-2d33cdfb"]]),
   CV = Object.freeze(Object.defineProperty({ __proto__: null, default: Np }, Symbol.toStringTag, { value: "Module" })),
   Rp = { class: "MyGameRecordList__C" },
   Mp = ["onClick"],
   Dp = { class: "MyGameRecordList__C-item-m" },
   Ap = { class: "MyGameRecordList__C-item-m-top" },
   Pp = { class: "MyGameRecordList__C-item-m-bottom" },
   Op = { key: 0, class: "MyGameRecordList__C-detail" },
   Vp = { class: "MyGameRecordList__C-detail-text" },
   Wp = { key: 0, class: "MyGameRecordList__C-detail-line" },
   Hp = ["onClick"],
   zp = ["src"],
   Ep = { class: "MyGameRecordList__C-detail-line" },
   Fp = { class: "MyGameRecordList__C-detail-line" },
   jp = { class: "MyGameRecordList__C-detail-line" },
   Up = { class: "MyGameRecordList__C-detail-line" },
   qp = { class: "red" },
   Kp = { class: "MyGameRecordList__C-detail-line" },
   Zp = { class: "MyGameRecordList__C-detail-line" },
   Xp = { key: 0, class: "numList" },
   Jp = { key: 1 },
   Yp = { class: "MyGameRecordList__C-detail-line noLine" },
   Qp = { key: 0, class: "line1" },
   em = { key: 1, class: "line1" },
   tm = { class: "" },
   sm = { class: "" },
   nm = { key: 2, class: "line1" },
   am = { class: "" },
   om = { key: 1, class: "btn actionBtn" },
   lm = { key: 3, class: "line1" },
   im = { class: "" },
   cm = { key: 1, class: "actionBtn" },
   um = { class: "" },
   rm = { class: "MyGameRecordList__C-detail-line" },
   dm = { key: 1 },
   _m = { class: "MyGameRecordList__C-detail-line" },
   vm = { key: 1 },
   pm = { class: "MyGameRecordList__C-detail-line" },
   mm = V({
      __name: "MayrecordList",
      props: { mayrecord: {} },
      setup(l) {
         const { t: s } = _e(),
            o = k(-1),
            u = i => {
               switch (i) {
                  case "H":
                     return s("k3Big");
                  case "L":
                     return s("k3Small");
                  case "O":
                     return s("k3Odd");
                  case "E":
                     return s("k3Even");
                  default:
                     return i;
               }
            },
            v = i => {
               o.value == i ? (o.value = -1) : (o.value = i);
            },
            p = i => {
               var _, r;
               if (i.gameType == "3") {
                  if (i.selectType == "|AAA|") return "3=";
                  if (i.oneList.length) return i.oneList[0];
               }
               if (i.gameType == "4") return i.selectType == "|ABC|" ? "3≠" : i.threeList.length ? `${i.threeList.join("")}` : `${i.oneList.join("")}`;
               if ((_ = i.towList) != null && _.length) return i.towList[0];
               if ((r = i.oneList) != null && r.length)
                  switch (i.oneList[0]) {
                     case "H":
                        return "Big";
                     case "L":
                        return "Small";
                     case "O":
                        return "Odd";
                     case "E":
                        return "Even";
                     default:
                        return i.oneList[0];
                  }
            },
            d = i => {
               var _, r;
               if ((_ = i.towList) != null && _.length) return "num";
               if ((r = i.oneList) != null && r.length) return i.oneList[0].length > 2 ? "num" : i.oneList[0];
            };
         return (i, _) => (
            n(),
            a("div", Rp, [
               (n(!0),
               a(
                  N,
                  null,
                  D(
                     i.mayrecord,
                     (r, g) => (
                        n(),
                        a(
                           N,
                           { key: g },
                           [
                              e("div", { class: "MyGameRecordList__C-item", onClick: ut(m => v(g), ["stop", "prevent"]) }, [e("div", { class: M(["MyGameRecordList__C-item-l", ["MyGameRecordList__C-item-l-" + d(r)]]) }, t(p(r)), 3), e("div", Dp, [e("div", Ap, t(r.issueNumber), 1), e("div", Pp, t(r.addTime), 1)]), r.profitAmount ? (n(), a("div", { key: 0, class: M(["MyGameRecordList__C-item-r", { success: r.state }]) }, [r.profitAmount ? (n(), a("div", { key: 0, class: M({ success: r.state }) }, t(r.state ? i.$t("success") : i.$t("fail")), 3)) : B("", !0), e("span", null, t(`${r.state ? "+" : "-"}${c(Be)(r.profitAmount)}`), 1)], 2)) : B("", !0)], 8, Mp),
                              g == o.value
                                 ? (n(),
                                   a("div", Op, [
                                      e("div", Vp, t(i.$t("detailMay")), 1),
                                      r.orderNumber ? (n(), a("div", Wp, [E(t(i.$t("orderNoMay")) + " ", 1), e("div", { onClick: m => c(Zt)(r.orderNumber) }, [E(t(r.orderNumber) + " ", 1), e("img", { src: c(pe)("home/AllLotteryGames/WinGo", "copy") }, null, 8, zp)], 8, Hp)])) : B("", !0),
                                      e("div", Ep, [E(t(i.$t("issueMay")) + " ", 1), e("div", null, t(r.issueNumber), 1)]),
                                      e("div", Fp, [E(t(i.$t("amountMay")) + " ", 1), e("div", null, t(c(Be)(r.amount)), 1)]),
                                      e("div", jp, [E(t(i.$t("numMay")) + " ", 1), e("div", null, t(r.betCount), 1)]),
                                      e("div", Up, [E(t(i.$t("afterTaxAmount")) + " ", 1), e("div", qp, t(c(Be)(r.realAmount)), 1)]),
                                      e("div", Kp, [E(t(i.$t("tax")) + " ", 1), e("div", null, t(c(Be)(r.fee)), 1)]),
                                      e("div", Zp, [
                                         E(t(i.$t("resultMay")) + " ", 1),
                                         r.premium
                                            ? (n(),
                                              a("div", Xp, [
                                                 (n(!0),
                                                 a(
                                                    N,
                                                    null,
                                                    D(r.premium, (m, $) => (n(), a("div", { key: $, class: M(["n" + m]) }, null, 2))),
                                                    128,
                                                 )),
                                              ]))
                                            : (n(), a("div", Jp, "--")),
                                      ]),
                                      e("div", Yp, [
                                         E(t(i.$t("selectMay")) + " ", 1),
                                         r.gameType == 1
                                            ? (n(),
                                              a("div", Qp, [
                                                 r.oneList.length > 0
                                                    ? (n(),
                                                      a(
                                                         N,
                                                         { key: 0 },
                                                         [
                                                            e("span", null, t(i.$t("k3RecordDesc1")), 1),
                                                            (n(!0),
                                                            a(
                                                               N,
                                                               null,
                                                               D(r.oneList, (m, $) => (n(), a("span", { key: $ + "1", class: "btn" }, t(u(m)), 1))),
                                                               128,
                                                            )),
                                                         ],
                                                         64,
                                                      ))
                                                    : B("", !0),
                                              ]))
                                            : B("", !0),
                                         r.gameType == 2
                                            ? (n(),
                                              a("div", em, [
                                                 r.oneList.length > 0
                                                    ? (n(),
                                                      a(
                                                         N,
                                                         { key: 0 },
                                                         [
                                                            e("span", tm, t(i.$t("k3RecordDesc2")), 1),
                                                            (n(!0),
                                                            a(
                                                               N,
                                                               null,
                                                               D(r.oneList, (m, $) => (n(), a("span", { class: "btn actionViolet", key: $ + "1" }, t(m), 1))),
                                                               128,
                                                            )),
                                                         ],
                                                         64,
                                                      ))
                                                    : B("", !0),
                                                 r.towList.length > 0
                                                    ? (n(),
                                                      a(
                                                         N,
                                                         { key: 1 },
                                                         [
                                                            e("span", sm, t(i.$t("k3RecordDesc3")), 1),
                                                            (n(!0),
                                                            a(
                                                               N,
                                                               null,
                                                               D(r.towList, (m, $) => (n(), a("span", { class: "btn actionRedGreen", key: $ + "1" }, t(m), 1))),
                                                               128,
                                                            )),
                                                         ],
                                                         64,
                                                      ))
                                                    : B("", !0),
                                              ]))
                                            : B("", !0),
                                         r.gameType == 3
                                            ? (n(),
                                              a("div", nm, [
                                                 r.oneList.length > 0
                                                    ? (n(),
                                                      a(
                                                         N,
                                                         { key: 0 },
                                                         [
                                                            e("span", am, t(i.$t("k3RecordDesc4")), 1),
                                                            (n(!0),
                                                            a(
                                                               N,
                                                               null,
                                                               D(r.oneList, (m, $) => (n(), a("span", { class: "btn actionViolet", key: $ + "1" }, t(m), 1))),
                                                               128,
                                                            )),
                                                         ],
                                                         64,
                                                      ))
                                                    : B("", !0),
                                                 r.towList ? (n(), a("div", om, t(i.$t("k3RecordDesc5")), 1)) : B("", !0),
                                              ]))
                                            : B("", !0),
                                         r.gameType == 4
                                            ? (n(),
                                              a("div", lm, [
                                                 r.oneList.length > 0
                                                    ? (n(),
                                                      a(
                                                         N,
                                                         { key: 0 },
                                                         [
                                                            e("span", im, t(i.$t("k3RecordDesc6")), 1),
                                                            (n(!0),
                                                            a(
                                                               N,
                                                               null,
                                                               D(r.oneList, (m, $) => (n(), a("span", { class: "actionViolet", key: $ + "1" }, t(m), 1))),
                                                               128,
                                                            )),
                                                         ],
                                                         64,
                                                      ))
                                                    : B("", !0),
                                                 r.towList ? (n(), a("div", cm, t(i.$t("k3RecordDesc7")), 1)) : B("", !0),
                                                 r.threeList.length > 0
                                                    ? (n(),
                                                      a(
                                                         N,
                                                         { key: 2 },
                                                         [
                                                            e("span", um, t(i.$t("k3RecordDesc8")), 1),
                                                            (n(!0),
                                                            a(
                                                               N,
                                                               null,
                                                               D(r.threeList, (m, $) => (n(), a("span", { class: "actionViolet", key: $ + "1" }, t(m), 1))),
                                                               128,
                                                            )),
                                                         ],
                                                         64,
                                                      ))
                                                    : B("", !0),
                                              ]))
                                            : B("", !0),
                                      ]),
                                      e("div", rm, [E(t(i.$t("statusMay")) + " ", 1), r.state != 2 ? (n(), a("div", { key: 0, class: M([r.state ? "green" : "red"]) }, t(r.state ? i.$t("success") : i.$t("fail")), 3)) : (n(), a("div", dm, t(i.$t("k3RecordDesc9")), 1))]),
                                      e("div", _m, [E(t(i.$t("winOrLose")) + " ", 1), r.state != 2 ? (n(), a("div", { key: 0, class: M([r.state ? "green" : "red"]) }, t(`${r.state ? "+" : "-"} ${c(Be)(r.profitAmount)}`), 3)) : (n(), a("div", vm, "--"))]),
                                      e("div", pm, [E(t(i.$t("createTime")) + " ", 1), e("div", null, t(r.addTime), 1)]),
                                   ]))
                                 : B("", !0),
                           ],
                           64,
                        )
                     ),
                  ),
                  128,
               )),
            ])
         );
      },
   });
const oo = H(mm, [["__scopeId", "data-v-96fa888a"]]),
   gm = { class: "BettingRecordK3__C" },
   hm = { class: "BettingRecordK3__C-nav" },
   ym = { class: "BettingRecordK3__C-list" },
   fm = { key: 0, class: "BettingRecordK3__C-foot" },
   bm = { class: "BettingRecordK3__C-foot-page" },
   $m = V({
      __name: "index",
      setup(l) {
         const s = ue(),
            o = k(Dc),
            u = k([]),
            v = k(0),
            p = k(1),
            d = k(4),
            i = f => {
               (_.value = f.name), (p.value = 1), r();
            },
            _ = k(0),
            r = async () => {
               const f = await de(Aa({ pageSize: 20, pageNo: p.value, typeId: _.value })),
                  b = (f == null ? void 0 : f.data.list) || [];
               for (let T = 0; b.length > T; T++) {
                  let h = b[T].gameType.split(","),
                     w = b[T].selectType.split(",");
                  for (let I = 0; h.length > I; I++)
                     if (h[I] == "1" || h[I] == "2" || h[I] == "3") (b[T].gameType = "1"), (b[T].oneList = w);
                     else if (h[I] == "5" || h[I] == "6") {
                        let x = [],
                           S = [],
                           G = [];
                        for (let R = 0; w.length > R; R++) {
                           if (w[R] == "|11|" || w[R] == "|22|" || w[R] == "|33|" || w[R] == "|44|" || w[R] == "|55|" || w[R] == "|66|") {
                              let O = w[R].split("|");
                              O.pop(), O.shift(), x.push(O.join());
                           }
                           if (w[R] == ":11:" || w[R] == ":22:" || w[R] == ":33:" || w[R] == ":44:" || w[R] == ":55:" || w[R] == ":66:") {
                              let O = w[R].split(":");
                              O.pop(), O.shift(), S.push(O.join());
                           }
                           if (w[R] == ":1:" || w[R] == ":2:" || w[R] == ":3:" || w[R] == ":4:" || w[R] == ":5:" || w[R] == ":6:") {
                              let O = w[R].split(":");
                              O.pop(), O.shift(), G.push(O.join());
                           }
                        }
                        (b[T].gameType = "2"), (b[T].oneList = x), (b[T].towList = !!g(S, G));
                     } else if (h[I] == "7" || h[I] == "8") {
                        let x = [],
                           S = !1;
                        for (let G = 0; w.length > G; G++) {
                           if (w[G] == "|111|" || w[G] == "|222|" || w[G] == "|333|" || w[G] == "|444|" || w[G] == "|555|" || w[G] == "|666|") {
                              let R = w[G].split("|");
                              R.pop(), R.shift(), x.push(R.join());
                           }
                           w[G] == "|AAA|" && (S = !0), (b[T].oneList = x), (b[T].towList = S), (b[T].gameType = "3");
                        }
                     } else if (h[I] == "9" || h[I] == "10" || h[I] == "4") {
                        let x = [],
                           S = !1,
                           G = [];
                        for (let R = 0; w.length > R; R++) {
                           if (w[R] == "|1|" || w[R] == "|2|" || w[R] == "|3|" || w[R] == "|4|" || w[R] == "|5|" || w[R] == "|6|") {
                              let O = w[R].split("|");
                              O.pop(), O.shift(), x.push(O.join());
                           }
                           if ((w[R] == "|ABC|" && (S = !0), w[R] == ".1." || w[R] == ".2." || w[R] == ".3." || w[R] == ".4." || w[R] == ".5." || w[R] == ".6.")) {
                              let O = w[R].split(".");
                              O.pop(), O.shift(), G.push(O.join());
                           }
                        }
                        (b[T].oneList = x), (b[T].towList = S), (b[T].threeList = G), (b[T].gameType = "4");
                     }
               }
               (u.value = b || []), (d.value = (f == null ? void 0 : f.data.totalPage) || 0);
            },
            g = (f, b) => {
               let T = [];
               for (var h = 0; f.length > h; h++) {
                  let I = f[h],
                     x = [];
                  for (var w = 0; b.length > w; w++) x.push(b[w]);
                  if (x.length > 0) {
                     let S = x.sort().join(",");
                     T.push(I + "|" + S);
                  }
               }
               return T.sort();
            },
            m = () => {
               (_.value = o.value[0].typeID), r();
            };
         function $() {
            s.go(-1);
         }
         const y = () => {
               p.value--, r();
            },
            C = () => {
               p.value++, r();
            };
         return (
            he(() => {
               m();
            }),
            (f, b) => {
               const T = U("van-tab"),
                  h = U("van-tabs"),
                  w = U("van-icon");
               return (
                  n(),
                  a("div", gm, [
                     e("div", { class: "BettingRecordK3__C-head" }, [e("div", { class: "BettingRecordK3__C-head-bcak", onClick: $ }), E(" K3 Lotre ")]),
                     e("div", hm, [
                        L(
                           h,
                           { active: v.value, "onUpdate:active": b[0] || (b[0] = I => (v.value = I)), onClickTab: i },
                           {
                              default: A(() => [
                                 (n(!0),
                                 a(
                                    N,
                                    null,
                                    D(o.value, (I, x) => (n(), Z(T, { key: x, title: I.tabName, name: I.typeID }, null, 8, ["title", "name"]))),
                                    128,
                                 )),
                              ]),
                              _: 1,
                           },
                           8,
                           ["active"],
                        ),
                     ]),
                     e("div", ym, [L(oo, { mayrecord: u.value }, null, 8, ["mayrecord"])]),
                     u.value.length ? (n(), a("div", fm, [e("div", { class: M(["BettingRecordK3__C-foot-previous", { disabled: p.value <= 1 }]), onClick: y }, [L(w, { name: "arrow-left", class: "BettingRecordK3__C-icon", size: "20" })], 2), e("div", bm, t(p.value) + "/" + t(d.value), 1), e("div", { class: M(["BettingRecordK3__C-foot-next", { disabled: p.value >= d.value }]), onClick: C }, [L(w, { name: "arrow", class: "BettingRecordK3__C-icon", size: "20" })], 2)])) : B("", !0),
                  ])
               );
            }
         );
      },
   });
const Cm = H($m, [["__scopeId", "data-v-aae89525"]]),
   kV = Object.freeze(Object.defineProperty({ __proto__: null, default: Cm }, Symbol.toStringTag, { value: "Module" })),
   km = { class: "MyGameRecordList__C" },
   Tm = ["onClick"],
   wm = { class: "MyGameRecordList__C-item-m" },
   Lm = { class: "MyGameRecordList__C-item-m-top" },
   Im = { class: "MyGameRecordList__C-item-m-bottom" },
   Sm = { key: 0, class: "MyGameRecordList__C-detail" },
   Gm = { class: "MyGameRecordList__C-detail-text" },
   xm = { key: 0, class: "MyGameRecordList__C-detail-line" },
   Bm = ["onClick"],
   Nm = ["src"],
   Rm = { class: "MyGameRecordList__C-detail-line" },
   Mm = { class: "MyGameRecordList__C-detail-line" },
   Dm = { class: "MyGameRecordList__C-detail-line" },
   Am = { class: "MyGameRecordList__C-detail-line" },
   Pm = { class: "red" },
   Om = { class: "MyGameRecordList__C-detail-line" },
   Vm = { class: "MyGameRecordList__C-detail-line" },
   Wm = { key: 0 },
   Hm = { class: "MyGameRecordList__C-inlineB" },
   zm = { key: 0, class: "MyGameRecordList__C-inlineB purpleColor" },
   Em = { key: 1 },
   Fm = { class: "MyGameRecordList__C-detail-line" },
   jm = { class: "MyGameRecordList__C-detail-line" },
   Um = { key: 1 },
   qm = { class: "MyGameRecordList__C-detail-line" },
   Km = { key: 1 },
   Zm = { class: "MyGameRecordList__C-detail-line" },
   Xm = V({
      __name: "MayrecordList",
      props: { mayrecord: {} },
      setup(l) {
         const { t: s } = _e(),
            o = k(-1),
            u = _ => {
               switch (_) {
                  case "big":
                     return "big";
                  case "green":
                  case "red":
                  case "violet":
                     return "";
                  default:
                     return _;
               }
            },
            v = _ => {
               switch (_ % 2) {
                  case 1:
                     return s("greenColor");
                  default:
                     return s("redColor");
               }
            },
            p = _ => {
               switch (_ % 2) {
                  case 1:
                     return "greenColor";
                  default:
                     return "redColor";
               }
            },
            d = _ => {
               switch (_) {
                  case "small":
                     return s("small");
                  case "big":
                     return s("big");
                  case "green":
                     return s("green");
                  case "violet":
                     return s("purpleColor");
                  case "red":
                     return s("redColor");
                  default:
                     return _;
               }
            },
            i = _ => {
               o.value == _ ? (o.value = -1) : (o.value = _);
            };
         return (_, r) => (
            n(),
            a("div", km, [
               (n(!0),
               a(
                  N,
                  null,
                  D(
                     _.mayrecord,
                     (g, m) => (
                        n(),
                        a(
                           N,
                           { key: m },
                           [
                              e("div", { class: "MyGameRecordList__C-item", onClick: ut($ => i(m), ["stop", "prevent"]) }, [e("div", { class: M(["MyGameRecordList__C-item-l", ["MyGameRecordList__C-item-l-" + g.selectType]]) }, t(u(g.selectType)), 3), e("div", wm, [e("div", Lm, t(g.issueNumber), 1), e("div", Im, t(g.addTime), 1)]), g.profitAmount ? (n(), a("div", { key: 0, class: M(["MyGameRecordList__C-item-r", { success: g.state }]) }, [g.profitAmount ? (n(), a("div", { key: 0, class: M({ success: g.state }) }, t(g.state ? _.$t("success") : _.$t("fail")), 3)) : B("", !0), e("span", null, t(`${g.state ? "+" : "-"}${c(Be)(g.profitAmount)}`), 1)], 2)) : B("", !0)], 8, Tm),
                              m == o.value
                                 ? (n(),
                                   a("div", Sm, [
                                      e("div", Gm, t(_.$t("detailMay")), 1),
                                      g.orderNumber ? (n(), a("div", xm, [E(t(_.$t("orderNoMay")) + " ", 1), e("div", { onClick: $ => c(Zt)(g.orderNumber) }, [E(t(g.orderNumber) + " ", 1), e("img", { src: c(pe)("home/AllLotteryGames/WinGo", "copy") }, null, 8, Nm)], 8, Bm)])) : B("", !0),
                                      e("div", Rm, [E(t(_.$t("issueMay")) + " ", 1), e("div", null, t(g.issueNumber), 1)]),
                                      e("div", Mm, [E(t(_.$t("amountMay")) + " ", 1), e("div", null, t(c(Be)(g.amount)), 1)]),
                                      e("div", Dm, [E(t(_.$t("numMay")) + " ", 1), e("div", null, t(g.betCount), 1)]),
                                      e("div", Am, [E(t(_.$t("afterTaxAmount")) + " ", 1), e("div", Pm, t(c(Be)(g.realAmount)), 1)]),
                                      e("div", Om, [E(t(_.$t("tax")) + " ", 1), e("div", null, t(c(Be)(g.fee)), 1)]),
                                      e("div", Vm, [E(t(_.$t("resultMay")) + " ", 1), g.number ? (n(), a("div", Wm, [e("div", Hm, t(g.number), 1), e("div", { class: M(["MyGameRecordList__C-inlineB", [p(Number(g.number))]]) }, t(v(Number(g.number))), 3), g.number == 0 || g.number == 5 ? (n(), a("div", zm, t(_.$t("purpleColor")), 1)) : B("", !0), e("div", { class: M(["MyGameRecordList__C-inlineB", [Number(g.number) > 4 ? "big" : "small"]]) }, t(Number(g.number) > 4 ? _.$t("big") : _.$t("small")), 3)])) : (n(), a("div", Em, "--"))]),
                                      e("div", Fm, [E(t(_.$t("selectMay")) + " ", 1), e("div", null, t(d(g.selectType)), 1)]),
                                      e("div", jm, [E(t(_.$t("statusMay")) + " ", 1), g.state != 2 ? (n(), a("div", { key: 0, class: M([g.state ? "green" : "red"]) }, t(g.state ? _.$t("success") : _.$t("fail")), 3)) : (n(), a("div", Um, t(_.$t("k3RecordDesc9")), 1))]),
                                      e("div", qm, [E(t(_.$t("winOrLose")) + " ", 1), g.state != 2 ? (n(), a("div", { key: 0, class: M([g.state ? "green" : "red"]) }, t(`${g.state ? "+" : "-"} ${c(Be)(g.profitAmount)}`), 3)) : (n(), a("div", Km, "--"))]),
                                      e("div", Zm, [E(t(_.$t("createTime")) + " ", 1), e("div", null, t(g.addTime), 1)]),
                                   ]))
                                 : B("", !0),
                           ],
                           64,
                        )
                     ),
                  ),
                  128,
               )),
            ])
         );
      },
   });
const Bn = H(Xm, [["__scopeId", "data-v-373b3197"]]),
   Jm = { class: "BettingRecordWin__C" },
   Ym = { class: "BettingRecordWin__C-nav" },
   Qm = { class: "BettingRecordWin__C-list" },
   e0 = { key: 0, class: "BettingRecordWin__C-foot" },
   t0 = { class: "BettingRecordWin__C-foot-page" },
   s0 = V({
      __name: "index",
      setup(l) {
         const s = ue(),
            o = k(Ac),
            u = k([]),
            v = k(0),
            p = k(1),
            d = k(4),
            i = C => {
               (_.value = C.name), (p.value = 1), r();
            },
            _ = k(0),
            r = async () => {
               const [C, f] = await ct(Ln({ pageSize: 20, pageNo: p.value, typeId: _.value }));
               (u.value = f.list || []), (d.value = f.totalPage);
            },
            g = () => {
               (_.value = o.value[0].typeID), r();
            };
         function m() {
            s.go(-1);
         }
         const $ = () => {
               p.value--, r();
            },
            y = () => {
               p.value++, r();
            };
         return (
            he(() => {
               g();
            }),
            (C, f) => {
               const b = U("van-tab"),
                  T = U("van-tabs"),
                  h = U("van-icon");
               return (
                  n(),
                  a("div", Jm, [
                     e("div", { class: "BettingRecordWin__C-head" }, [e("div", { class: "BettingRecordWin__C-head-bcak", onClick: m }), E(" Win Go ")]),
                     e("div", Ym, [
                        L(
                           T,
                           { active: v.value, "onUpdate:active": f[0] || (f[0] = w => (v.value = w)), onClickTab: i },
                           {
                              default: A(() => [
                                 (n(!0),
                                 a(
                                    N,
                                    null,
                                    D(o.value, (w, I) => (n(), Z(b, { key: I, title: w.tabName, name: w.typeID }, null, 8, ["title", "name"]))),
                                    128,
                                 )),
                              ]),
                              _: 1,
                           },
                           8,
                           ["active"],
                        ),
                     ]),
                     e("div", Qm, [L(Bn, { mayrecord: u.value }, null, 8, ["mayrecord"])]),
                     u.value.length ? (n(), a("div", e0, [e("div", { class: M(["BettingRecordWin__C-foot-previous", { disabled: p.value <= 1 }]), onClick: $ }, [L(h, { name: "arrow-left", class: "BettingRecordWin__C-icon", size: "20" })], 2), e("div", t0, t(p.value) + "/" + t(d.value), 1), e("div", { class: M(["BettingRecordWin__C-foot-next", { disabled: p.value >= d.value }]), onClick: y }, [L(h, { name: "arrow", class: "BettingRecordWin__C-icon", size: "20" })], 2)])) : B("", !0),
                  ])
               );
            }
         );
      },
   });
const n0 = H(s0, [["__scopeId", "data-v-694d5d64"]]),
   TV = Object.freeze(Object.defineProperty({ __proto__: null, default: n0 }, Symbol.toStringTag, { value: "Module" })),
   a0 = { class: "BettingRecordWinTrx__C" },
   o0 = { class: "BettingRecordWinTrx__C-nav" },
   l0 = { class: "BettingRecordWinTrx__C-list" },
   i0 = { key: 0, class: "BettingRecordWinTrx__C-foot" },
   c0 = { class: "BettingRecordWinTrx__C-foot-page" },
   u0 = V({
      __name: "index",
      setup(l) {
         const s = ue(),
            o = k(Rc),
            u = k([]),
            v = k(0),
            p = k(1),
            d = k(0),
            i = k(4),
            _ = C => {
               (d.value = C.name), (p.value = 1), r();
            },
            r = async () => {
               const [C, f] = await ct(In({ pageSize: 20, pageNo: p.value, typeId: d.value }));
               (u.value = f.list || []), (i.value = f.totalPage);
            },
            g = async () => {
               (d.value = o.value[0].typeID), r();
            };
         function m() {
            s.go(-1);
         }
         const $ = () => {
               p.value--, r();
            },
            y = () => {
               p.value++, r();
            };
         return (
            he(() => {
               g();
            }),
            (C, f) => {
               const b = U("van-tab"),
                  T = U("van-tabs"),
                  h = U("van-icon");
               return (
                  n(),
                  a("div", a0, [
                     e("div", { class: "BettingRecordWinTrx__C-head" }, [e("div", { class: "BettingRecordWinTrx__C-head-bcak", onClick: m }), E(" Trx Win Go ")]),
                     e("div", o0, [
                        L(
                           T,
                           { active: v.value, "onUpdate:active": f[0] || (f[0] = w => (v.value = w)), onClickTab: _ },
                           {
                              default: A(() => [
                                 (n(!0),
                                 a(
                                    N,
                                    null,
                                    D(o.value, (w, I) => (n(), Z(b, { key: I, title: w.tabName, name: w.typeID }, null, 8, ["title", "name"]))),
                                    128,
                                 )),
                              ]),
                              _: 1,
                           },
                           8,
                           ["active"],
                        ),
                     ]),
                     e("div", l0, [L(Bn, { mayrecord: u.value }, null, 8, ["mayrecord"])]),
                     u.value.length ? (n(), a("div", i0, [e("div", { class: M(["BettingRecordWinTrx__C-foot-previous", { disabled: p.value <= 1 }]), onClick: $ }, [L(h, { name: "arrow-left", class: "BettingRecordWinTrx__C-icon", size: "20" })], 2), e("div", c0, t(p.value) + "/" + t(i.value), 1), e("div", { class: M(["BettingRecordWinTrx__C-foot-next", { disabled: p.value >= i.value }]), onClick: y }, [L(h, { name: "arrow", class: "BettingRecordWinTrx__C-icon", size: "20" })], 2)])) : B("", !0),
                  ])
               );
            }
         );
      },
   });
const r0 = H(u0, [["__scopeId", "data-v-ec27afda"]]),
   wV = Object.freeze(Object.defineProperty({ __proto__: null, default: r0 }, Symbol.toStringTag, { value: "Module" })),
   ve = k({ odds: 1.5, money_list: [100, 1e3, 200, 5e3, 1e4], bet_money: 0, binguoType: 1, currentNumber: "20230610858776", award_result: "246", bet_item: "", trend_result: ["6", "7", "8", "9", "10", "12", "13", "14", "15", "16", "17", "18", "5"], trend_result2: ["123", "245", "532", "666"], currentMoneyIndex: 0, bet_number: "", beishu: 1, beishuList: [1, 5, 10, 20, 50, 100], currentBeishuIndex: 0, currentBetType: void 0, currentPlayId: 0, currentSelectType: "", currentOdds: "", drawIssnum: "" }),
   _s = k(),
   mn = k(!1),
   vs = k(!1),
   ha = k(!0),
   ya = k(!1),
   d0 = k(!1),
   gn = k("00:00"),
   _0 = k(!1),
   hn = k(!0),
   { t: yn } = Bs.global,
   ps = k([]),
   es = k([
      { value: yn("small"), type: 1, range: "3-9", beishu: "2.0", bet_amount: 0, key: "Small", groupId: 1, playId: 0, hot: !1 },
      { value: yn("binguoHe"), type: 2, range: "10-11", beishu: "3.0", bet_amount: 0, key: "Drawn", groupId: 1, playId: 0, hot: !1 },
      { value: yn("k3Big"), type: 3, range: "12-18", beishu: "5.0", bet_amount: 0, key: "Big", groupId: 1, playId: 0, hot: !1 },
   ]),
   ms = k(
      Array.from({ length: 16 }, (l, s) => {
         const o = s + 3;
         return { value: o, type: o < 10 ? 1 : o > 11 ? 3 : 2, beishu: "2.0", bet_amount: 0, hot: !1, groupId: 1, playId: 0 };
      }),
   ),
   Bt = k({ third: { amount1: 0, amount2: 0 }, two: 0, one: { amount1: 0, amount2: 0, amount3: 0 } }),
   Vt = k([
      { value: "1", amount1: 0, amount2: 0, amount3: 0, hot1: !1, hot2: !1, hot3: !1 },
      { value: "2", amount1: 0, amount2: 0, amount3: 0, hot1: !1, hot2: !1, hot3: !1 },
      { value: "3", amount1: 0, amount2: 0, amount3: 0, hot1: !1, hot2: !1, hot3: !1 },
      { value: "4", amount1: 0, amount2: 0, amount3: 0, hot1: !1, hot2: !1, hot3: !1 },
      { value: "5", amount1: 0, amount2: 0, amount3: 0, hot1: !1, hot2: !1, hot3: !1 },
      { value: "6", amount1: 0, amount2: 0, amount3: 0, hot1: !1, hot2: !1, hot3: !1 },
      { value: "*", amount1: 0, amount2: 0, amount3: 0, hot1: !1, hot2: !1, hot3: !1 },
   ]),
   Zs = () => {
      const { t: l } = _e(),
         s = k(),
         o = q(() => [pe("home/AllLotteryGames/binguo", "dice_" + ve.value.award_result.toString()[0]), pe("home/AllLotteryGames/binguo", "dice_" + ve.value.award_result.toString()[1]), pe("home/AllLotteryGames/binguo", "dice_" + ve.value.award_result.toString()[2])]),
         u = q(() => (ve.value.currentBetType === 1 ? "small" : ve.value.currentBetType === 2 ? "and" : "big")),
         v = async () => {
            const S = await de(Oc());
            S != null && S.data && ((ve.value.money_list = S.data.betAmount), (ve.value.beishuList = S.data.betMultiplier), (ve.value.bet_money = S.data.betAmount[0]));
         },
         p = async () => {
            const S = await de(Vc());
            if (S != null && S.data) {
               ps.value = S == null ? void 0 : S.data;
               let G = S == null ? void 0 : S.data;
               G.filter(P => P.groupId === 1).forEach(P => {
                  Number(P.betType)
                     ? ms.value.forEach(W => {
                          P.betType === W.value + "" && ((W.beishu = P.odds), (W.playId = P.playId));
                       })
                     : es.value.forEach(W => {
                          W.key === P.betType && ((W.beishu = P.odds), (W.playId = P.playId));
                       });
               }),
                  G.filter(P => P.groupId !== 1).forEach(P => {
                     P.groupId === 4 && (P.betType === "1" ? (Bt.value.third.amount1 = P.odds) : (Bt.value.third.amount2 = P.odds)), P.groupId === 3 && (Bt.value.two = P.odds), P.groupId === 2 && (P.betType === "1" ? (Bt.value.one.amount1 = P.odds) : P.betType === "2" ? (Bt.value.one.amount2 = P.odds) : (Bt.value.one.amount3 = P.odds));
                  });
            }
         },
         d = async () => {
            const S = await de(zc({ issueNumber: ve.value.currentNumber }));
            S != null &&
               S.data &&
               (S.data.forEach(G => {
                  switch (
                     (es.value.forEach(R => {
                        G.playId === R.playId && (R.bet_amount = G.amount);
                     }),
                     ms.value.forEach(R => {
                        G.playId === R.playId && (R.bet_amount = G.amount);
                     }),
                     G.playId)
                  ) {
                     case 28:
                        Vt.value[Number(G.selectType[0]) - 1].amount1 = G.amount;
                        break;
                     case 29:
                        Vt.value[6].amount1 = G.amount;
                        break;
                     case 27:
                        Vt.value[Number(G.selectType[0]) - 1].amount2 = G.amount;
                        break;
                     case 24:
                        Vt.value[Number(G.selectType[0]) - 1].amount3 = G.amount;
                        break;
                  }
               }),
               await i(0),
               lt(() => {
                  S.data
                     .sort((O, P) => P.amount - O.amount)
                     .slice(0, 3)
                     .forEach(O => {
                        let P = es.value.findIndex(J => O.playId === J.playId);
                        P > -1 && (es.value[P].hot = !0);
                        let W = ms.value.findIndex(J => O.playId === J.playId);
                        switch ((W > -1 && (ms.value[W].hot = !0), O.playId)) {
                           case 28:
                              Vt.value[Number(O.selectType[0]) - 1].hot1 = !0;
                              break;
                           case 29:
                              Vt.value[6].hot1 = !0;
                              break;
                           case 27:
                              Vt.value[Number(O.selectType[0]) - 1].hot2 = !0;
                              break;
                           case 24:
                              Vt.value[Number(O.selectType[0]) - 1].hot3 = !0;
                              break;
                        }
                     });
               }));
         },
         i = async S => {
            Vt.value.forEach(G => {
               (G.hot1 = !1), (G.hot2 = !1), (G.hot3 = !1), S === 1 && ((G.amount1 = 0), (G.amount2 = 0), (G.amount3 = 0));
            }),
               es.value.forEach(G => {
                  S === 1 && (G.bet_amount = 0), (G.hot = !1);
               }),
               ms.value.forEach(G => {
                  S === 1 && (G.bet_amount = 0), (G.hot = !1);
               });
         },
         _ = async () => {
            const S = await de(Wc());
            S &&
               (S.data
                  ? S.data.startTime &&
                    S.data.endTime &&
                    ((ve.value.currentNumber = S == null ? void 0 : S.data.issueNumber),
                    b(S.data.serviceTime, S.data.endTime, async () => {
                       (gn.value = "10:00"),
                          await _(),
                          clearInterval(s.value),
                          setTimeout(() => {
                             r();
                          }, 60 * 1e3),
                          i(1);
                    }))
                  : (hn.value = !1),
               await d());
         },
         r = async () => {
            let S = 1;
            s.value = setInterval(async () => {
               S === 10 ? clearInterval(s.value) : (await g(), await m(), S++);
            }, 1e4);
         },
         g = async () => {
            const S = await de(Hc());
            S && ((ve.value.award_result = S == null ? void 0 : S.data.result), (ve.value.drawIssnum = S == null ? void 0 : S.data.issueNo));
         },
         m = async () => {
            const S = await de(to());
            S &&
               ((ve.value.trend_result =
                  S == null
                     ? void 0
                     : S.data
                          .map(G => G.resultSum + "")
                          .slice(0, 13)
                          .reverse()),
               (ve.value.trend_result2 =
                  S == null
                     ? void 0
                     : S.data
                          .map(G => G.result + "")
                          .slice(0, 4)
                          .reverse()));
         },
         $ = S => {
            (vs.value = !0), (ve.value.bet_number = S.value + ""), (ve.value.currentBetType = S.type), (ve.value.currentPlayId = S.playId), (ve.value.currentOdds = S.beishu + "");
         },
         y = (S, G) => {
            var R, O, P, W;
            G === 1
               ? ((ve.value.bet_number = S), (ve.value.currentBetType = G), (ve.value.currentPlayId = (R = ps.value.find(J => J.betType === "1" && J.groupId === 2)) == null ? void 0 : R.playId), (ve.value.currentOdds = Bt.value.one.amount1 + ""))
               : G === 2
                 ? ((ve.value.bet_number = S + "," + S), S.includes("6") ? (ve.value.currentBetType = 3) : S.includes("5") ? (ve.value.currentBetType = 2) : (ve.value.currentBetType = 1), (ve.value.currentOdds = Bt.value.two + ""), (ve.value.currentPlayId = (O = ps.value.find(J => J.betType === "2" && J.groupId === 3)) == null ? void 0 : O.playId))
                 : G === 3 && ((ve.value.bet_number = S + "," + S + "," + S), /[123]/.test(S) ? (ve.value.currentBetType = 1) : (ve.value.currentBetType = 3), S.includes("*") ? ((ve.value.currentOdds = Bt.value.third.amount2 + ""), (ve.value.currentPlayId = (P = ps.value.find(J => J.betType === "2" && J.groupId === 4)) == null ? void 0 : P.playId)) : ((ve.value.currentOdds = Bt.value.third.amount1 + ""), (ve.value.currentPlayId = (W = ps.value.find(J => J.betType === "1" && J.groupId === 4)) == null ? void 0 : W.playId))),
               (vs.value = !0);
         },
         C = async () => {
            var P;
            if (!hn.value) {
               (vs.value = !1), (ya.value = !0);
               return;
            }
            if (!ha.value) return;
            let S = ps.value.find(W => W.playId === ve.value.currentPlayId),
               G = "";
            (S == null ? void 0 : S.groupId) === 2 || (S == null ? void 0 : S.groupId) === 3 ? (G = ve.value.bet_number.split(",")[0]) : (S == null ? void 0 : S.groupId) === 4 ? (G = ve.value.bet_number.includes("*") ? "***" : ve.value.bet_number.split(",").join("")) : (G = Number(ve.value.bet_number) ? ve.value.bet_number : (P = es.value.find(W => W.value === ve.value.bet_number)) == null ? void 0 : P.key);
            let R = { issueNumber: ve.value.currentNumber, amount: ve.value.bet_money * ve.value.beishu, figure: Number(ve.value.beishu), gameType: (S == null ? void 0 : S.groupId) + "", selectType: G, playId: ve.value.currentPlayId };
            (await de(Ec(R))).data && (kn(l("code402")), (vs.value = !1), d());
         },
         f = (S, G) => {
            let R = new Date(S.replace(/-/g, "/"));
            return new Date(G.replace(/-/g, "/")).getTime() - R.getTime();
         },
         b = (S, G, R) => {
            clearInterval(_s.value), (_s.value = void 0);
            let O = f(S, G);
            if (O <= 1e3) throw new Error("时间不正确");
            _s.value = setInterval(() => {
               if (((O -= 1e3), O <= 1e3)) {
                  clearInterval(_s.value), R();
                  return;
               }
               gn.value = Vl(O, "mm:ss");
            }, 1e3);
         },
         T = () => (mn.value = !mn.value),
         h = S => {
            S === "add" ? (ve.value.beishu = Number(ve.value.beishu) + 1) : (ve.value.beishu = Number(ve.value.beishu) - 1);
         },
         w = () => {
            (vs.value = !1), (ve.value.currentBeishuIndex = 0), (ve.value.currentMoneyIndex = 0);
         },
         I = () => hs.back(),
         x = S => (S >= 1e6 ? (S / 1e6).toFixed(1).replace(/\.0$/, "") + "M" : S >= 1e3 ? (S / 1e3).toFixed(1).replace(/\.0$/, "") + "K" : S + "");
      return (
         Ve(
            () => ve.value.currentMoneyIndex,
            S => {
               ve.value.bet_money = Number(ve.value.money_list[S]);
            },
            { immediate: !0 },
         ),
         Ve(
            () => ve.value.bet_number,
            () => {
               (ve.value.currentMoneyIndex = 0), (ve.value.currentBeishuIndex = 0);
            },
            { immediate: !0 },
         ),
         Ve(
            () => ve.value.currentBeishuIndex,
            S => {
               ve.value.beishu = Number(ve.value.beishuList[S]);
            },
            { immediate: !0 },
         ),
         jt(() => {
            clearInterval(_s.value);
         }),
         { store: ve, timer: _s, isShowBetMoney: mn, filterNumberSize: u, handleToggleShwoMoney: T, handleBet: $, goBack: I, handleStep: h, handleCancel: w, isSell: hn, handleAlike: y, getBinguoConfig: v, getBinguoOddsList: p, getGameBingo18Issue: _, countdownTimeFun: b, getBingo18LastGameResult: g, getBingo18BetAmount: d, handleBetSubmit: C, getBingo18Last50Result: m, formatNum: x, checkRule: ha, resultImgList: o, betSizeList: es, betNumberList: ms, betSheetVisible: vs, overVisble: ya, alikeList: Vt, timeText: gn, oddObject: Bt, playerRuleVisble: d0, betPopTXT: _0 }
      );
   },
   lo = l => (ye("data-v-e262e724"), (l = l()), fe(), l),
   v0 = { class: "binguo_info" },
   p0 = { class: "binguo_award" },
   m0 = { key: 0, class: "main" },
   g0 = { class: "current_award" },
   h0 = { class: "tit" },
   y0 = { class: "current_number" },
   f0 = { class: "award_time" },
   b0 = { class: "award_result" },
   $0 = { class: "tit" },
   C0 = { class: "award_type" },
   k0 = { key: 1, class: "over_tip" },
   T0 = { class: "trend" },
   w0 = { key: 0, class: "trend_result1" },
   L0 = { class: "text" },
   I0 = { class: "result_list" },
   S0 = lo(() => e("span", { class: "tag animation_tag" }, "-", -1)),
   G0 = { key: 1, class: "trend_result2" },
   x0 = { class: "result_list2" },
   B0 = { class: "result_list2" },
   N0 = { class: "animation_tag" },
   R0 = lo(() => e("div", { id: "time" }, null, -1)),
   M0 = V({
      __name: "BinguoInfo",
      setup(l) {
         const { store: s, resultImgList: o, isSell: u, timeText: v, getGameBingo18Issue: p, getBingo18LastGameResult: d, getBingo18Last50Result: i } = Zs(),
            _ = ue();
         function r(m) {
            let $ = 0;
            return (
               s.value.binguoType === 1
                  ? ($ = Number(m))
                  : (($ = 0),
                    m.split("").forEach(y => {
                       $ += Number(y);
                    })),
               $ < 10 ? "small" : $ === 11 || $ === 10 ? "sum" : "big"
            );
         }
         const g = () => {
            _.push({ path: "/home/AllLotteryGames/BinguoCount" });
         };
         return (
            p(),
            d(),
            i(),
            (m, $) => {
               const y = U("van-icon");
               return (
                  n(),
                  a(
                     N,
                     null,
                     [
                        e("div", v0, [
                           e("div", p0, [c(u) ? (n(), a("div", m0, [e("div", g0, [e("div", h0, t(m.$t("currentIssNumber")), 1), e("div", y0, t(c(s).currentNumber), 1)]), e("div", f0, t(c(v)), 1), e("div", b0, [e("div", $0, t(c(s).drawIssnum), 1), e("div", C0, [e("div", { style: Ze({ backgroundImage: `url(${c(o)[0]}) ` }) }, null, 4), c(s).binguoType !== 2 ? (n(), Z(y, { key: 0, name: c(pe)("home/AllLotteryGames/binguo", "add") }, null, 8, ["name"])) : B("", !0), e("div", { style: Ze({ backgroundImage: `url(${c(o)[1]}) ` }) }, null, 4), c(s).binguoType !== 2 ? (n(), Z(y, { key: 1, name: c(pe)("home/AllLotteryGames/binguo", "add") }, null, 8, ["name"])) : B("", !0), e("div", { style: Ze({ backgroundImage: `url(${c(o)[2]})` }) }, null, 4)])])])) : (n(), a("div", k0, t(m.$t("playerEnd")), 1))]),
                           e("div", T0, [
                              c(s).binguoType === 1
                                 ? (n(),
                                   a("div", w0, [
                                      e("div", L0, t(m.$t("result")), 1),
                                      e("div", I0, [
                                         (n(!0),
                                         a(
                                            N,
                                            null,
                                            D(c(s).trend_result, C => (n(), a("span", { class: M(["tag", `${r(C)}_tag`]) }, t(C), 3))),
                                            256,
                                         )),
                                         S0,
                                      ]),
                                   ]))
                                 : (n(),
                                   a("div", G0, [
                                      (n(!0),
                                      a(
                                         N,
                                         null,
                                         D(
                                            c(s).trend_result2,
                                            C => (
                                               n(),
                                               a("div", x0, [
                                                  (n(!0),
                                                  a(
                                                     N,
                                                     null,
                                                     D(C, f => (n(), a("span", { class: M(`${r(C)}_tag`) }, t(f), 3))),
                                                     256,
                                                  )),
                                               ])
                                            ),
                                         ),
                                         256,
                                      )),
                                      e("div", B0, [
                                         (n(),
                                         a(
                                            N,
                                            null,
                                            D(3, () => e("span", N0)),
                                            64,
                                         )),
                                      ]),
                                   ])),
                              e("div", { class: "trend_img", onClick: $[0] || ($[0] = C => g()) }),
                           ]),
                        ]),
                        R0,
                     ],
                     64,
                  )
               );
            }
         );
      },
   });
const D0 = H(M0, [["__scopeId", "data-v-e262e724"]]),
   A0 = l => (ye("data-v-82a127c4"), (l = l()), fe(), l),
   P0 = { class: "main_desk" },
   O0 = { key: 0, class: "rule_tip" },
   V0 = { class: "bet_size" },
   W0 = ["onClick"],
   H0 = { class: "head" },
   z0 = { class: "range" },
   E0 = { key: 0, class: "hot" },
   F0 = ["onClick"],
   j0 = { key: 1, class: "alike_box" },
   U0 = { class: "rule_tip" },
   q0 = { class: "alike" },
   K0 = ["onClick"],
   Z0 = { class: "amount" },
   X0 = { class: "third_list" },
   J0 = { class: "ball" },
   Y0 = { class: "ball2" },
   Q0 = { key: 0, class: "ball_hot2" },
   e5 = { class: "rule_tip" },
   t5 = { class: "alike two_alike" },
   s5 = ["onClick"],
   n5 = { class: "amount" },
   a5 = { class: "third_list" },
   o5 = { class: "ball" },
   l5 = { class: "ball2" },
   i5 = { key: 0, class: "ball_hot2" },
   c5 = { class: "rule_tip" },
   u5 = { class: "alike one_alike" },
   r5 = ["onClick"],
   d5 = { class: "amount" },
   _5 = A0(() => e("div", { class: "ball_hot" }, null, -1)),
   v5 = { class: "third_list" },
   p5 = { class: "ball" },
   m5 = { class: "ball2" },
   g5 = { key: 0, class: "ball_hot2" },
   h5 = { class: "rule_tip_header" },
   y5 = ["src"],
   f5 = { class: "rule_tip_dialog" },
   b5 = { class: "rule_tip_tit" },
   $5 = { class: "rule_tip_text" },
   C5 = V({
      __name: "BinguoMainDesk",
      setup(l) {
         const { t: s } = _e(),
            { betSizeList: o, betNumberList: u, isShowBetMoney: v, handleBet: p, store: d, alikeList: i, handleAlike: _, oddObject: r, formatNum: g } = Zs(),
            m = { sum: { dice: "1,3,6", tip1: s("result"), tip2: s("binguoRuleTipText1") }, third: { dice: "6,6,6", tip1: s("numbersMatch"), tip2: s("binguoRuleTipText2") }, two: { dice: "6,6", tip1: s("sameNum"), tip2: s("binguoRuleTipText3") }, one: { dice: "1,2,3,5,4,6", tip1: s("same"), tip2: s("binguoRuleTipText4") } },
            $ = k(!1),
            y = k(),
            C = () => {
               const f = document.querySelectorAll(".rule_tip");
               for (let b = 0; b < f.length; b++)
                  f[b].addEventListener("click", () => {
                     ($.value = !0), b === 0 && (y.value = m.sum), b === 1 && (y.value = m.third), b === 2 && (y.value = m.two), b === 3 && (y.value = m.one);
                  });
            };
         return (
            Ve(
               () => d.value.binguoType,
               f => {
                  f === 2 &&
                     lt(() => {
                        C();
                     });
               },
               { deep: !0, immediate: !0 },
            ),
            (f, b) => (
               n(),
               a("div", P0, [
                  c(d).binguoType === 2 ? (n(), a("div", O0, t(f.$t("xosoTxt60")), 1)) : B("", !0),
                  e("div", V0, [
                     (n(!0),
                     a(
                        N,
                        null,
                        D(c(o), T => (n(), a("div", { class: "size_item", onClick: ut(h => c(p)(T), ["stop"]) }, [e("div", H0, [e("span", null, t(c(v) && T.bet_amount ? c(g)(T.bet_amount) : ""), 1), e("span", null, t(T.beishu + "x" || ""), 1)]), e("div", { class: M(`value value_${T.type}`) }, t(T.value), 3), e("div", z0, t(T.range), 1), T.hot && c(v) ? (n(), a("div", E0)) : B("", !0)], 8, W0))),
                        256,
                     )),
                  ]),
                  e(
                     "div",
                     { class: M(["bet_number", { betAll: c(d).binguoType === 2 }]) },
                     [
                        (n(!0),
                        a(
                           N,
                           null,
                           D(c(u), T => (n(), a("div", { key: T.value, class: "item", onClick: h => c(p)(T) }, [e("div", null, t(c(v) && T.bet_amount ? c(g)(T.bet_amount) : ""), 1), e("div", null, t(T.value), 1), e("div", null, t(T.beishu) + "X", 1), T.hot && c(v) ? (n(), a("div", { key: 0, class: M(["hot", { hot2: c(d).binguoType === 2 }]) }, null, 2)) : B("", !0)], 8, F0))),
                           128,
                        )),
                     ],
                     2,
                  ),
                  c(d).binguoType === 2
                     ? (n(),
                       a("div", j0, [
                          e("div", U0, t(f.$t("trendTXT4")) + " " + t(f.$t("odds")) + t(c(r).third.amount1) + "x " + t(f.$t("k3bet3Desc4")) + " " + t(f.$t("odds")) + t(c(r).third.amount2) + "x ", 1),
                          e("div", q0, [
                             (n(!0),
                             a(
                                N,
                                null,
                                D(
                                   c(i),
                                   T => (
                                      n(),
                                      a(
                                         "div",
                                         { class: "alike_item", onClick: h => c(_)(T.value, 3) },
                                         [
                                            e("div", Z0, t(c(v) && T.amount1 ? c(g)(T.amount1) : ""), 1),
                                            e("div", X0, [
                                               (n(),
                                               a(
                                                  N,
                                                  null,
                                                  D(3, () => e("div", J0, [e("span", Y0, t(T.value), 1), T.hot1 ? (n(), a("span", Q0)) : B("", !0)])),
                                                  64,
                                               )),
                                            ]),
                                         ],
                                         8,
                                         K0,
                                      )
                                   ),
                                ),
                                256,
                             )),
                          ]),
                          e("div", e5, t(f.$t("trendTXT3") + f.$t("odds")) + " " + t(c(r).two) + "x", 1),
                          e("div", t5, [
                             (n(!0),
                             a(
                                N,
                                null,
                                D(
                                   c(i).slice(0, 6),
                                   T => (
                                      n(),
                                      a(
                                         "div",
                                         { class: "alike_item", onClick: h => c(_)(T.value, 2) },
                                         [
                                            e("div", n5, t(c(v) && T.amount2 ? c(g)(T.amount2) : ""), 1),
                                            e("div", a5, [
                                               (n(),
                                               a(
                                                  N,
                                                  null,
                                                  D(2, () => e("div", o5, [e("span", l5, t(T.value), 1), T.hot2 ? (n(), a("span", i5)) : B("", !0)])),
                                                  64,
                                               )),
                                            ]),
                                         ],
                                         8,
                                         s5,
                                      )
                                   ),
                                ),
                                256,
                             )),
                          ]),
                          e("div", c5, t(f.$t("binguoRuleTip1")) + t(c(r).one.amount1) + "x " + t(f.$t("binguoRuleTip2")) + t(c(r).one.amount2) + "x " + t(f.$t("binguoRuleTip3")) + " " + t(c(r).one.amount3) + "x ", 1),
                          e("div", u5, [
                             (n(!0),
                             a(
                                N,
                                null,
                                D(c(i).slice(0, 6), T => (n(), a("div", { class: "alike_item", onClick: h => c(_)(T.value, 1) }, [e("div", d5, t(c(v) && T.amount3 ? c(g)(T.amount3) : ""), 1), _5, e("div", v5, [e("span", p5, [e("span", m5, t(T.value), 1), T.hot3 ? (n(), a("span", g5)) : B("", !0)])])], 8, r5))),
                                256,
                             )),
                          ]),
                       ]))
                     : B("", !0),
                  L(
                     Mt,
                     { show: $.value, "onUpdate:show": b[0] || (b[0] = T => ($.value = T)), showCloseIcon: !0, clickOutSide: !0, "show-cancel-btn": !1, showFooter: !1, isShowHeader: !1 },
                     {
                        title: A(() => {
                           var T;
                           return [
                              e("div", h5, [
                                 (n(!0),
                                 a(
                                    N,
                                    null,
                                    D((T = y.value) == null ? void 0 : T.dice.split(","), h => (n(), a("img", { src: c(pe)("home/AllLotteryGames/binguo", `rule_dice_${h}`), alt: "" }, null, 8, y5))),
                                    256,
                                 )),
                              ]),
                           ];
                        }),
                        content: A(() => {
                           var T, h;
                           return [e("div", f5, [e("div", b5, t((T = y.value) == null ? void 0 : T.tip1), 1), e("div", $5, t((h = y.value) == null ? void 0 : h.tip2), 1)])];
                        }),
                        footer: A(() => []),
                        _: 1,
                     },
                     8,
                     ["show"],
                  ),
               ])
            )
         );
      },
   });
const k5 = H(C5, [["__scopeId", "data-v-82a127c4"]]),
   T5 = { class: "bet_content" },
   w5 = { class: "bet_tit" },
   L5 = { class: "bet_cnt" },
   I5 = { class: "bet_item" },
   S5 = { class: "bet_item_tit" },
   G5 = { class: "bet_money_list" },
   x5 = ["onClick"],
   B5 = { class: "bet_item" },
   N5 = { class: "bet_item_tit" },
   R5 = { class: "bet_step" },
   M5 = { class: "bet_money_list bet_beishu" },
   D5 = ["onClick"],
   A5 = { class: "bet_info" },
   P5 = { class: "tit" },
   O5 = { class: "pl", style: { color: "#fff" } },
   V5 = { class: "bet_info" },
   W5 = { class: "tit" },
   H5 = { class: "pl", style: { color: "#cee98c" } },
   z5 = { class: "bet_info" },
   E5 = { class: "tit" },
   F5 = { class: "pl", style: { color: "#f9bc36" } },
   j5 = { key: 0, class: "recharge_tip" },
   U5 = { class: "apply" },
   q5 = { class: "bet_btn_group" },
   K5 = V({
      __name: "BinguoBetSheet",
      setup(l) {
         const { betSheetVisible: s, store: o, betPopTXT: u, filterNumberSize: v, handleStep: p, checkRule: d, handleCancel: i, handleBetSubmit: _ } = Zs(),
            g = rt().getUserInfo,
            m = ue(),
            $ = () => {
               m.push("/wallet/recharge");
            };
         return (y, C) => {
            const f = U("van-field"),
               b = U("van-icon"),
               T = U("van-checkbox"),
               h = U("van-action-sheet");
            return (
               n(),
               Z(
                  h,
                  { show: c(s), "onUpdate:show": C[8] || (C[8] = w => (it(s) ? (s.value = w) : null)), closeable: !1 },
                  {
                     default: A(() => [
                        e("div", T5, [
                           e("div", w5, t(y.$t("betting")), 1),
                           e("div", L5, [
                              (n(!0),
                              a(
                                 N,
                                 null,
                                 D(c(o).bet_number.split(","), w => (n(), a("span", { class: M(`${c(v)}`) }, t(w), 3))),
                                 256,
                              )),
                           ]),
                           e("div", I5, [
                              e("div", S5, t(y.$t("amount")), 1),
                              e("div", G5, [
                                 (n(!0),
                                 a(
                                    N,
                                    null,
                                    D(c(o).money_list, (w, I) => (n(), a("div", { class: M(["money_item", { monyActive: c(o).currentMoneyIndex === I }]), onClick: x => (c(o).currentMoneyIndex = I) }, t(w), 11, x5))),
                                    256,
                                 )),
                              ]),
                           ]),
                           e("div", B5, [
                              e("div", N5, [
                                 e("span", null, t(y.$t("multiple")), 1),
                                 e("div", R5, [
                                    e("span", { onClick: C[0] || (C[0] = w => c(p)("sub")) }, "-"),
                                    L(
                                       f,
                                       {
                                          modelValue: c(o).beishu,
                                          "onUpdate:modelValue": C[1] || (C[1] = w => (c(o).beishu = w)),
                                          "input-align": "center",
                                          onInput:
                                             C[2] ||
                                             (C[2] = w => {
                                                if (9999 < Number(w.target.value)) {
                                                   c(o).beishu = 9999;
                                                   return;
                                                }
                                                if (Number(w.target.value) < 1) {
                                                   c(o).beishu = 0;
                                                   return;
                                                }
                                                c(o).beishu = Number(w.target.value);
                                             }),
                                          type: "digit",
                                          class: "bet_beishu_input",
                                       },
                                       null,
                                       8,
                                       ["modelValue"],
                                    ),
                                    e("span", { onClick: C[3] || (C[3] = w => c(p)("add")) }, "+"),
                                 ]),
                              ]),
                              e("div", M5, [
                                 (n(!0),
                                 a(
                                    N,
                                    null,
                                    D(c(o).beishuList, (w, I) => (n(), a("div", { class: M(["money_item", { monyActive: c(o).currentBeishuIndex === I }]), onClick: x => (c(o).currentBeishuIndex = I) }, " X" + t(w), 11, D5))),
                                    256,
                                 )),
                              ]),
                           ]),
                           e("div", A5, [e("div", P5, t(y.$t("odds")), 1), e("div", O5, t(c(o).currentOdds), 1)]),
                           e("div", V5, [e("div", W5, t(y.$t("walletBalance")), 1), e("div", H5, t(c(g).amount), 1)]),
                           e("div", z5, [e("div", E5, t(y.$t("betAmounts")), 1), e("div", F5, t(c(o).bet_money * c(o).beishu), 1)]),
                           c(g).amount < c(o).bet_money * c(o).beishu ? (n(), a("div", j5, [e("div", null, [L(b, { name: "warning-o", size: "18" }), E(" " + t(y.$t("walletTip")), 1)]), e("span", { onClick: $ }, t(y.$t("goRecharge")) + " >>", 1)])) : B("", !0),
                           L(
                              T,
                              { modelValue: c(d), "onUpdate:modelValue": C[5] || (C[5] = w => (it(d) ? (d.value = w) : null)), "checked-color": "#CEE98C", "label-disabled": "", "icon-size": "24px" },
                              {
                                 default: A(() => [
                                    e("span", U5, t(y.$t("agree")), 1),
                                    e(
                                       "span",
                                       {
                                          class: "rule",
                                          onClick:
                                             C[4] ||
                                             (C[4] = () => {
                                                (s.value = !1), (u.value = !0);
                                             }),
                                       },
                                       t(y.$t("presaleRules")),
                                       1,
                                    ),
                                 ]),
                                 _: 1,
                              },
                              8,
                              ["modelValue"],
                           ),
                           e("div", q5, [e("div", { class: "cancel_btn", onClick: C[6] || (C[6] = (...w) => c(i) && c(i)(...w)) }, t(y.$t("cancel")), 1), e("div", { class: M(["bet_btn", { inconformity: c(g).amount < c(o).bet_money * c(o).beishu || !c(d) || c(o).bet_money * c(o).beishu === 0 }]), onClick: C[7] || (C[7] = (...w) => c(_) && c(_)(...w)) }, t(y.$t("betting")), 3)]),
                        ]),
                     ]),
                     _: 1,
                  },
                  8,
                  ["show"],
               )
            );
         };
      },
   });
const Z5 = H(K5, [["__scopeId", "data-v-06bf5414"]]);
const X5 = {},
   Nn = l => (ye("data-v-7866711d"), (l = l()), fe(), l),
   J5 = { class: "container" },
   Y5 = { class: "first-paragraph" },
   Q5 = { class: "first-statement" },
   e3 = { class: "paragraph-two" },
   t3 = { class: "paragraph-two-statement" },
   s3 = { class: "paragraph-three" },
   n3 = { class: "paragraph-three-statement" },
   a3 = { class: "svg-container" },
   o3 = Dt(
      '<div class="first-vector" data-v-7866711d><svg xmlns="http://www.w3.org/2000/svg" width="132" height="14" viewBox="0 0 132 14" fill="none" data-v-7866711d><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.99997C-2.41411e-08 6.72383 0.223857 6.49997 0.499999 6.49997L119.5 6.49996C119.776 6.49996 120 6.72382 120 6.99996C120 7.27611 119.776 7.49996 119.5 7.49996L0.5 7.49997C0.223858 7.49997 2.41411e-08 7.27612 0 6.99997Z" fill="url(#paint0_linear_22_2052)" data-v-7866711d></path><path d="M119.515 8.41418C118.734 7.63313 118.734 6.3668 119.515 5.58575L123.757 1.34311C124.538 0.562062 125.805 0.562062 126.586 1.34311L130.828 5.58575C131.609 6.3668 131.609 7.63313 130.828 8.41418L126.586 12.6568C125.805 13.4379 124.538 13.4379 123.757 12.6568L119.515 8.41418Z" fill="url(#paint1_linear_22_2052)" data-v-7866711d></path><defs data-v-7866711d><linearGradient id="paint0_linear_22_2052" x1="126" y1="7.00003" x2="-4.8188e-08" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-7866711d><stop stop-color="#5DBA47" data-v-7866711d></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-7866711d></stop></linearGradient><linearGradient id="paint1_linear_22_2052" x1="126" y1="7.00003" x2="-4.8188e-08" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-7866711d><stop stop-color="#5DBA47" data-v-7866711d></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-7866711d></stop></linearGradient></defs></svg></div>',
      1,
   ),
   l3 = { class: "vector-heading" },
   i3 = Dt(
      '<div class="vector-two" data-v-7866711d><svg xmlns="http://www.w3.org/2000/svg" width="132" height="14" viewBox="0 0 132 14" fill="none" data-v-7866711d><path fill-rule="evenodd" clip-rule="evenodd" d="M132 6.99997C132 6.72383 131.776 6.49997 131.5 6.49997L12.5 6.49996C12.2239 6.49996 12 6.72382 12 6.99996C12 7.27611 12.2239 7.49996 12.5 7.49996L131.5 7.49997C131.776 7.49997 132 7.27612 132 6.99997Z" fill="url(#paint0_linear_22_2053)" data-v-7866711d></path><path d="M12.4853 8.41418C13.2664 7.63313 13.2664 6.3668 12.4853 5.58575L8.24268 1.34311C7.46163 0.562062 6.1953 0.562062 5.41425 1.34311L1.17162 5.58575C0.390564 6.3668 0.390564 7.63313 1.17162 8.41418L5.41425 12.6568C6.1953 13.4379 7.46163 13.4379 8.24268 12.6568L12.4853 8.41418Z" fill="url(#paint1_linear_22_2053)" data-v-7866711d></path><defs data-v-7866711d><linearGradient id="paint0_linear_22_2053" x1="6.00001" y1="7.00003" x2="132" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-7866711d><stop stop-color="#5DBA47" data-v-7866711d></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-7866711d></stop></linearGradient><linearGradient id="paint1_linear_22_2053" x1="6.00001" y1="7.00003" x2="132" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-7866711d><stop stop-color="#5DBA47" data-v-7866711d></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-7866711d></stop></linearGradient></defs></svg></div>',
      1,
   ),
   c3 = { class: "details-container-one" },
   u3 = { class: "details-container-items" },
   r3 = { class: "first-heading" },
   d3 = { class: "fontBold" },
   _3 = { class: "paragraph-inside-container" },
   v3 = { class: "paragraph-title" },
   p3 = { class: "paragraph-inside-container" },
   m3 = { class: "paragraph-title" },
   g3 = { class: "paragraph-inside-container" },
   h3 = { class: "paragraph-title" },
   y3 = { class: "paragraph-inside-container" },
   f3 = { class: "paragraph-title" },
   b3 = { class: "details-container-one" },
   $3 = { class: "details-container-items" },
   C3 = { class: "first-heading" },
   k3 = Nn(() => e("span", { class: "fontBold" }, "1,2,3,4,5,6", -1)),
   T3 = { class: "paragraph-inside-container" },
   w3 = { class: "paragraph-title" },
   L3 = { class: "details-container-one" },
   I3 = { class: "details-container-items" },
   S3 = { class: "first-heading" },
   G3 = Nn(() => e("span", { class: "fontBold" }, "11,22...66", -1)),
   x3 = { class: "paragraph-inside-container" },
   B3 = { class: "paragraph-title" },
   N3 = { class: "details-container-one" },
   R3 = { class: "details-container-items" },
   M3 = { class: "first-heading" },
   D3 = Nn(() => e("span", { class: "fontBold" }, "111,222...666,***", -1)),
   A3 = { class: "paragraph-inside-container" },
   P3 = { class: "paragraph-title" },
   O3 = { class: "paragraph-inside-container" },
   V3 = { class: "paragraph-title" };
function W3(l, s) {
   return (
      n(),
      a("div", J5, [
         e("div", Y5, [e("p", Q5, t(l.$t("binguoRuleText1")), 1)]),
         e("div", e3, [e("p", t3, t(l.$t("binguoRuleText2")), 1)]),
         e("div", s3, [e("p", n3, t(l.$t("binguoRuleText3")), 1)]),
         e("div", a3, [o3, e("div", l3, t(l.$t("gamePlay")), 1), i3]),
         e("div", c3, [e("div", u3, t(l.$t("xosoTxt60")), 1), e("div", r3, [E(t(l.$t("binguoRuleText4")) + " ", 1), e("span", d3, t(l.$t("binguoRuleText5")), 1), E(t(l.$t("binguoRuleText6")), 1)]), e("div", _3, [e("div", v3, [e("span", null, t(l.$t("binguoRuleText7")) + ":", 1), E(t(l.$t("binguoRuleText8")), 1)])]), e("div", p3, [e("div", m3, [e("span", null, t(l.$t("binguoRuleText9")) + ":", 1), E(t(l.$t("binguoRuleText10")), 1)])]), e("div", g3, [e("div", h3, [e("span", null, t(l.$t("binguoRuleText17")) + ":", 1), E(t(l.$t("binguoRuleText18")), 1)])]), e("div", y3, [e("div", f3, [e("span", null, t(l.$t("binguoRuleText11")) + ",", 1), E(t(l.$t("binguoRuleText12")), 1)])])]),
         e("div", b3, [e("div", $3, t(l.$t("same")), 1), e("div", C3, [E(t(l.$t("binguoRuleText4")) + " ", 1), k3]), e("div", T3, [e("div", w3, t(l.$t("binguoRuleText13")), 1)])]),
         e("div", L3, [e("div", I3, t(l.$t("sameNum")), 1), e("div", S3, [E(t(l.$t("binguoRuleText4")), 1), G3]), e("div", x3, [e("div", B3, t(l.$t("binguoRuleText14")), 1)])]),
         e("div", N3, [e("div", R3, t(l.$t("numbersMatch")), 1), e("div", M3, [E(t(l.$t("binguoRuleText4")), 1), D3]), e("div", A3, [e("div", P3, t(l.$t("binguoRuleText15")), 1)]), e("div", O3, [e("div", V3, t(l.$t("binguoRuleText16")), 1)])]),
      ])
   );
}
const H3 = H(X5, [
      ["render", W3],
      ["__scopeId", "data-v-7866711d"],
   ]),
   z3 = l => (ye("data-v-a5941237"), (l = l()), fe(), l),
   E3 = { class: "binguo_container" },
   F3 = z3(() => e("span", { class: "nav_title" }, "BINGO18", -1)),
   j3 = { class: "nav_right" },
   U3 = { class: "binguo_btn_group" },
   q3 = ["src"],
   K3 = { class: "over_dialog_tip" },
   Z3 = { class: "playerRule" },
   X3 = { class: "playerRule" },
   J3 = { style: { color: "#fff" } },
   Y3 = V({
      __name: "index",
      setup(l) {
         const { goBack: s, betPopTXT: o, isShowBetMoney: u, handleToggleShwoMoney: v, store: p, overVisble: d, getBinguoConfig: i, getBinguoOddsList: _, playerRuleVisble: r } = Zs(),
            g = ue(),
            m = () => {
               g.push({ path: "/home/AllLotteryGames/BinguoRecord" });
            };
         return (
            he(() => {
               i(), _();
            }),
            ($, y) => {
               const C = U("van-icon"),
                  f = U("NavBar");
               return (
                  n(),
                  a("div", E3, [
                     L(f, { "left-arrow": "", onClickLeft: c(s), backgroundColor: "#0a4529" }, { left: A(() => [L(C, { name: "arrow-left", size: 24 }), F3]), right: A(() => [e("div", j3, [e("div", { onClick: y[0] || (y[0] = ut(() => (r.value = !0), ["stop"])), class: "binguo_explain" }), e("div", { class: M(["binguo_money", c(u) ? "binguo_money_look" : "binguo_money_hidden"]), onClick: y[1] || (y[1] = ut(() => c(v)(), ["stop"])) }, null, 2), e("div", { onClick: y[2] || (y[2] = ut(() => m(), ["stop"])), class: "binguo_count1" })])]), _: 1 }, 8, ["onClickLeft"]),
                     e("div", U3, [e("div", { class: M(["btn_1", { active_btn: c(p).binguoType === 1 }]), onClick: y[3] || (y[3] = b => (c(p).binguoType = 1)) }, t($.$t("binguoDesk1")), 3), e("div", { class: M(["btn_2", { active_btn: c(p).binguoType === 2 }]), onClick: y[4] || (y[4] = b => (c(p).binguoType = 2)) }, t($.$t("binguoDesk2")), 3)]),
                     L(D0),
                     L(k5),
                     L(Z5),
                     L(Mt, { show: c(d), onConfirm: y[5] || (y[5] = b => (d.value = !1)), "show-cancel-btn": !1, confirmText: $.$t("confirm") }, { header: A(() => [e("img", { src: c(pe)("home/AllLotteryGames/binguo", "binguo_tip"), alt: "", class: "binguo_tip" }, null, 8, q3)]), content: A(() => [e("div", K3, t($.$t("over_dialog_tip")), 1)]), _: 1 }, 8, ["show", "confirmText"]),
                     L(Mt, { class: "rule_dialog", show: c(r), onConfirm: y[6] || (y[6] = b => (r.value = !1)), "show-cancel-btn": !1, isShowHeader: !1, confirmText: $.$t("iKonw") }, { title: A(() => [e("div", null, t($.$t("binguo_playerRule")), 1)]), content: A(() => [e("div", Z3, [L(H3)])]), _: 1 }, 8, ["show", "confirmText"]),
                     L(Mt, { class: "rule_dialog", show: c(o), onConfirm: y[7] || (y[7] = b => (o.value = !1)), "show-cancel-btn": !1, isShowHeader: !1, confirmText: $.$t("iKonw") }, { title: A(() => [e("div", null, t($.$t("presaleRules")), 1)]), content: A(() => [e("div", X3, [e("div", J3, t($.$t("betPopTXT")), 1)])]), _: 1 }, 8, ["show", "confirmText"]),
                  ])
               );
            }
         );
      },
   });
const Q3 = H(Y3, [["__scopeId", "data-v-a5941237"]]),
   LV = Object.freeze(Object.defineProperty({ __proto__: null, default: Q3 }, Symbol.toStringTag, { value: "Module" })),
   eg = { class: "binguo_count_tab" },
   tg = ["onClick"],
   sg = V({
      __name: "BinguoTab",
      setup(l) {
         const { store: s } = as(),
            { t: o } = _e(),
            u = [
               { lable: o("betting"), value: 1 },
               { lable: o("detail"), value: 2 },
               { lable: o("thisWeek"), value: 3 },
               { lable: o("binguoLeaderboard"), value: 4 },
            ];
         return (v, p) => (
            n(),
            a("div", eg, [
               (n(),
               a(
                  N,
                  null,
                  D(u, (d, i) => e("div", { class: M(["item", { active: c(s).currentTabIndex === i }]), key: d.value, onClick: _ => (c(s).currentTabIndex = i) }, t(d.lable), 11, tg)),
                  64,
               )),
            ])
         );
      },
   });
const ng = H(sg, [["__scopeId", "data-v-0f91ea76"]]),
   ag = l => (ye("data-v-3c432d2e"), (l = l()), fe(), l),
   og = { class: "t-table_border" },
   lg = { class: "t-table_th_round" },
   ig = { class: "tab_header" },
   cg = { key: 0, class: "tab_default_cell" },
   ug = { class: "tab_default_cell" },
   rg = { key: 0 },
   dg = { key: 0 },
   _g = ["colspan"],
   vg = ag(() => e("div", { style: { color: "hsl(0 1% 84% / 1)", "font-size": "14px", padding: "6px", "text-align": "center" } }, "暂无数据", -1)),
   pg = V({
      __name: "index",
      props: { dataSource: {}, columnOptions: {}, headerClass: {}, bodyClass: {}, isLockHeader: { type: Boolean }, border: { type: Boolean, default: !0 }, scroll: { type: Boolean, default: !0 }, borderColor: { default: "#0B462A" }, hBgColor: { default: "linear-gradient(180deg, #0A603E 0%, #168055 100%)" }, hColor: { default: "#F9BC36" }, align: { default: "center" }, rowHeight: { default: "auto" }, rowBgColor: { default: "#09613E" }, tabWidth: { default: "100%" }, tabHeight: { default: "600px" } },
      setup(l) {
         const s = l;
         zs(r => ({ "2c57611b": r.tabWidth, "44c5c872": r.tabHeight, "21703af7": c(d), "50c4015b": c(v), "5ef0b364": c(u), "5d21bf76": r.hColor, "254d5300": c(p) }));
         const o = k([]),
            { rowBgColor: u, align: v, hBgColor: p, rowHeight: d } = s,
            i = () => {
               o.value = JSON.parse(JSON.stringify(s.dataSource));
            },
            _ = () => {
               s.columnOptions.forEach((r, g) => {
                  if (r.isLockColumn) {
                     let m = document.querySelector(`.th_${r.key}_${g}`),
                        $ = document.querySelectorAll(`.td_${r.key}`);
                     (m.style.position = "sticky"),
                        (m.style.top = "-2px"),
                        (m.style.left = "0"),
                        (m.style.zIndex = "11"),
                        $.forEach(y => {
                           (y.style.position = "sticky"), (y.style.left = "0"), (y.style.zIndex = "10");
                        });
                  }
               });
            };
         return (
            he(() => {
               _();
            }),
            Ve(
               () => s.dataSource,
               (r, g) => {
                  r !== g && (i(), _());
               },
               { deep: !0 },
            ),
            (r, g) => (
               n(),
               a(
                  "div",
                  { class: "cuTable", style: Ze({ ...(r.scroll && { overflowX: "auto" }), ...(!r.scroll && { overflow: "hidden" }) }) },
                  [
                     e("div", og, [
                        e("table", lg, [
                           e("tr", ig, [
                              (n(!0),
                              a(
                                 N,
                                 null,
                                 D(r.columnOptions, (m, $) => (n(), a("th", { style: Ze({ width: m.width || 100 / r.columnOptions.length + "%" }), key: $ + "p", class: M(`th_${m.key}_${$} default_header_cell ${r.border ? "" : "noBorder"}`) }, [m.isSlotHeader ? $t(r.$slots, m.key + "_head", { key: 1, item: m }, void 0, !0) : (n(), a("div", cg, t(m.title), 1))], 6))),
                                 128,
                              )),
                           ]),
                           (n(!0),
                           a(
                              N,
                              null,
                              D(r.dataSource, (m, $) =>
                                 te(
                                    (n(),
                                    a("tr", { class: "tab_body", key: $ + "p1" }, [
                                       (n(!0),
                                       a(
                                          N,
                                          null,
                                          D(r.columnOptions, (y, C) => (n(), a("td", { key: C + "p2", class: M(`td_${y.key} default_cell ${y.cusTdClass || ""} ${r.border ? "" : "noBorder"}`), style: Ze({ width: y.width }) }, [e("div", ug, [y.isSlot ? B("", !0) : (n(), a("span", rg, t(m[y.key]), 1)), $t(r.$slots, y.key, { item: m }, void 0, !0)])], 6))),
                                          128,
                                       )),
                                    ])),
                                    [[He, r.dataSource && r.dataSource.length > 0]],
                                 ),
                              ),
                              128,
                           )),
                           r.dataSource.length === 0 ? (n(), a("tr", dg, [e("td", { colspan: r.columnOptions.length }, [$t(r.$slots, "empty", {}, () => [vg], !0)], 8, _g)])) : B("", !0),
                        ]),
                     ]),
                  ],
                  4,
               )
            )
         );
      },
   });
const ts = H(pg, [["__scopeId", "data-v-3c432d2e"]]),
   mg = { class: "binguo_bet_count" },
   gg = { class: "bingtip_count_title" },
   hg = { class: "lately" },
   yg = { class: "average_column" },
   fg = { class: "noaverage_column" },
   bg = { class: "average_column" },
   $g = { class: "noaverage_column" },
   Cg = { class: "progress_box" },
   kg = { class: "progress" },
   Tg = { class: "tit" },
   wg = { class: "progress" },
   Lg = { class: "tit" },
   Ig = { class: "progress" },
   Sg = { class: "tit" },
   Gg = { class: "bingtip_count_title" },
   xg = { class: "alike_column" },
   Bg = { class: "big" },
   Ng = { class: "bingtip_count_title two_title" },
   Rg = { class: "alike_column" },
   Mg = { class: "big" },
   Dg = V({
      __name: "BinguoBetCount",
      setup(l) {
         const { store: s, filterStyle: o } = as(),
            { t: u } = _e(),
            v = q(() => {
               var _, r, g, m;
               return (_ = s.smallAndBigTrend) != null && _.bigCount ? ((r = s.smallAndBigTrend) == null ? void 0 : r.bigCount) + ((g = s.smallAndBigTrend) == null ? void 0 : g.smallCount) + ((m = s.smallAndBigTrend) == null ? void 0 : m.equalCount) : 0;
            }),
            p = k([
               { title: u("xosoTxt60"), key: "number", isSlot: !0, cusTdClass: "sum_column" },
               { title: u("binguoAvgCount"), key: "avgCount", isSlot: !0 },
               { title: u("binguoNotOpenCount"), key: "notOpenCount", isSlot: !0 },
            ]),
            d = k([
               { title: u("numbersMatch"), key: "number", isSlot: !0, cusTdClass: "sum_column" },
               { title: u("binguoOpenCount"), key: "openCount", isSlot: !1 },
               { title: u("binguoAvgCount"), key: "avgCount", isSlot: !1 },
               { title: u("binguoNotOpenCount"), key: "notOpenCount", isSlot: !1 },
            ]),
            i = q(() => {
               let _ = Ns(d.value);
               return (_[0].title = u("sameNum")), _;
            });
         return (_, r) => {
            var m, $, y, C, f, b;
            const g = U("van-progress");
            return (
               n(),
               a("div", mg, [
                  e("div", gg, t(_.$t("binguoLastIssue")), 1),
                  e("div", hg, [L(ts, { "column-options": p.value, "data-source": c(s).resultSumTrend.slice(0, 8), rowHeight: "40px", tabWidth: "49.6%", tabHeight: "100%", border: !1 }, { number: A(({ item: T }) => [e("div", { class: M(`sum_column ${c(o)(T.number)}`) }, t(T.number), 3)]), avgCount: A(({ item: T }) => [e("div", yg, t(T.avgCount), 1)]), notOpenCount: A(({ item: T }) => [e("div", fg, t(T.notOpenCount), 1)]), _: 1 }, 8, ["column-options", "data-source"]), L(ts, { "column-options": p.value, "data-source": c(s).resultSumTrend.slice(8, 16), rowHeight: "40px", tabWidth: "49.6%", tabHeight: "100%", border: !1 }, { number: A(({ item: T }) => [e("div", { class: M(`sum_column ${c(o)(T.number)}`) }, t(T.number), 3)]), avgCount: A(({ item: T }) => [e("div", bg, t(T.avgCount), 1)]), notOpenCount: A(({ item: T }) => [e("div", $g, t(T.notOpenCount), 1)]), _: 1 }, 8, ["column-options", "data-source"])]),
                  e("div", Cg, [
                     e("div", kg, [e("div", Tg, [e("span", null, t(_.$t("small")), 1), e("div", null, [E(t(_.$t("binguoAppeared")), 1), e("span", null, t((m = c(s).smallAndBigTrend) == null ? void 0 : m.smallCount), 1)])]), L(g, { percentage: ((($ = c(s).smallAndBigTrend) == null ? void 0 : $.smallCount) / v.value) * 100, "stroke-width": "10", "track-color": "#0A603E", color: "#5DBA47" }, null, 8, ["percentage"])]),
                     e("div", wg, [e("div", Lg, [e("span", null, t(_.$t("binguoHe")), 1), e("div", null, [E(t(_.$t("binguoAppeared")), 1), e("span", null, t((y = c(s).smallAndBigTrend) == null ? void 0 : y.equalCount), 1)])]), L(g, { percentage: (((C = c(s).smallAndBigTrend) == null ? void 0 : C.equalCount) / v.value) * 100, "stroke-width": "10", "track-color": "#0A603E", color: "#F9BC36" }, null, 8, ["percentage"])]),
                     e("div", Ig, [e("div", Sg, [e("span", null, t(_.$t("k3Big")), 1), e("div", null, [E(t(_.$t("binguoAppeared")), 1), e("span", null, t((f = c(s).smallAndBigTrend) == null ? void 0 : f.bigCount), 1)])]), L(g, { percentage: (((b = c(s).smallAndBigTrend) == null ? void 0 : b.bigCount) / v.value) * 100, "stroke-width": "10", "track-color": "#0A603E", color: "#5DBA47" }, null, 8, ["percentage"])]),
                  ]),
                  e("div", Gg, t(_.$t("binguoThirdAlike")), 1),
                  L(
                     ts,
                     { "column-options": d.value, "data-source": c(s).threeSameTrend, rowHeight: "40px", tabWidth: "100%", tabHeight: "100%", border: !1, class: "binguoCountTable" },
                     {
                        number: A(({ item: T }) => [
                           e("div", xg, [
                              (n(!0),
                              a(
                                 N,
                                 null,
                                 D((T.number + "").split(""), h => (n(), a("div", Bg, t(h), 1))),
                                 256,
                              )),
                           ]),
                        ]),
                        _: 1,
                     },
                     8,
                     ["column-options", "data-source"],
                  ),
                  e("div", Ng, t(_.$t("binguoTwoAlike")), 1),
                  L(
                     ts,
                     { "column-options": i.value, "data-source": c(s).twoSameTrend, rowHeight: "40px", tabWidth: "100%", tabHeight: "100%", border: !1, class: "binguoCountTable" },
                     {
                        number: A(({ item: T }) => [
                           e("div", Rg, [
                              (n(!0),
                              a(
                                 N,
                                 null,
                                 D((T.number + "").split(""), h => (n(), a("div", Mg, t(h), 1))),
                                 256,
                              )),
                           ]),
                        ]),
                        _: 1,
                     },
                     8,
                     ["column-options", "data-source"],
                  ),
               ])
            );
         };
      },
   });
const Ag = H(Dg, [["__scopeId", "data-v-0c2d4a4c"]]),
   ks = l => (ye("data-v-bd813363"), (l = l()), fe(), l),
   Pg = { class: "binguo_detail" },
   Og = { class: "bingtip_count_title" },
   Vg = { class: "result1" },
   Wg = { class: "column_list" },
   Hg = { class: "bingtip_count_title" },
   zg = { class: "record_list" },
   Eg = { class: "record_item" },
   Fg = { class: "item" },
   jg = { key: 1 },
   Ug = { class: "bingtip_count_title" },
   qg = { class: "issueNo_head" },
   Kg = { class: "issue_text" },
   Zg = { class: "issue_number" },
   Xg = ks(() => e("div", { class: "ball" }, "1", -1)),
   Jg = ks(() => e("div", { class: "ball" }, "2", -1)),
   Yg = ks(() => e("div", { class: "ball" }, "3", -1)),
   Qg = ks(() => e("div", { class: "ball" }, "4", -1)),
   e6 = ks(() => e("div", { class: "ball" }, "5", -1)),
   t6 = ks(() => e("div", { class: "ball" }, "6", -1)),
   s6 = { class: "issueNo_column" },
   n6 = V({
      __name: "BinguoDetail",
      setup(l) {
         const { t: s } = _e(),
            o = k([
               { title: s("betNumber"), key: "issueNo", isSlotHeader: !0, isSlot: !0, width: "28%" },
               { title: "1", key: "num1", isSlotHeader: !0, isSlot: !0, width: "10%" },
               { title: "2", key: "num2", isSlotHeader: !0, isSlot: !0, width: "10%" },
               { title: "3", key: "num3", isSlotHeader: !0, isSlot: !0, width: "10%" },
               { title: "4", key: "num4", isSlotHeader: !0, isSlot: !0, width: "10%" },
               { title: "5", key: "num5", isSlotHeader: !0, isSlot: !0, width: "10%" },
               { title: "6", key: "num6", isSlotHeader: !0, isSlot: !0, width: "10%" },
               { title: s("gameRecordTotal"), key: "sum", isSlot: !0, width: "10%" },
            ]),
            { filterStyle: u, last50Result: v, last50Record: p, last50RecordResult: d } = as();
         return (i, _) => (
            n(),
            a("div", Pg, [
               e("div", Og, t(i.$t("binguoLast50")), 1),
               e("div", Vg, [
                  (n(!0),
                  a(
                     N,
                     null,
                     D(
                        c(v),
                        r => (
                           n(),
                           a("div", Wg, [
                              (n(!0),
                              a(
                                 N,
                                 null,
                                 D(r, g => (n(), a("div", { class: M(`item ${c(u)(g)}`) }, t(g), 3))),
                                 256,
                              )),
                           ])
                        ),
                     ),
                     256,
                  )),
               ]),
               e("div", Hg, t(i.$t("binguoLast50Record")), 1),
               e("div", zg, [
                  (n(!0),
                  a(
                     N,
                     null,
                     D(
                        c(p),
                        r => (
                           n(),
                           a("div", Eg, [
                              (n(!0),
                              a(
                                 N,
                                 null,
                                 D(r, g => (n(), a("div", Fg, [g ? (n(), a("div", { key: 0, class: M(`${c(u)(g)}`) }, t(g), 3)) : (n(), a("div", jg))]))),
                                 256,
                              )),
                           ])
                        ),
                     ),
                     256,
                  )),
               ]),
               e("div", Ug, t(i.$t("binguoRecordResult")), 1),
               L(
                  ts,
                  { "column-options": o.value, "data-source": c(d), rowHeight: "30px", tabWidth: "100%", hBgColor: "linear-gradient(180deg, #0A603E 0%, #168055 100%)", tabHeight: "100%", border: !0, hColor: "#FFF880" },
                  {
                     issueNo_head: A(() => [e("div", qg, [e("span", Kg, t(i.$t("betNumber")), 1), e("span", Zg, t(i.$t("binguoNumber")), 1)])]),
                     num1_head: A(() => [Xg]),
                     num2_head: A(() => [Jg]),
                     num3_head: A(() => [Yg]),
                     num4_head: A(() => [Qg]),
                     num5_head: A(() => [e6]),
                     num6_head: A(() => [t6]),
                     issueNo: A(({ item: r }) => [e("div", s6, t(r.issueNo), 1)]),
                     sum: A(({ item: r }) => [e("div", { class: M(`sum_column ${c(u)(r.sum)}`) }, t(r.sum), 3)]),
                     num1: A(({ item: r }) => [
                        e(
                           "div",
                           { class: M(`num_column num_column${r.num1}`) },
                           [
                              (n(!0),
                              a(
                                 N,
                                 null,
                                 D(r.num1, () => (n(), a("div"))),
                                 256,
                              )),
                           ],
                           2,
                        ),
                     ]),
                     num2: A(({ item: r }) => [
                        e(
                           "div",
                           { class: M(`num_column num_column${r.num2}`) },
                           [
                              (n(!0),
                              a(
                                 N,
                                 null,
                                 D(r.num2, () => (n(), a("div"))),
                                 256,
                              )),
                           ],
                           2,
                        ),
                     ]),
                     num3: A(({ item: r }) => [
                        e(
                           "div",
                           { class: M(`num_column num_column${r.num3}`) },
                           [
                              (n(!0),
                              a(
                                 N,
                                 null,
                                 D(r.num3, () => (n(), a("div"))),
                                 256,
                              )),
                           ],
                           2,
                        ),
                     ]),
                     num4: A(({ item: r }) => [
                        e(
                           "div",
                           { class: M(`num_column num_column${r.num4}`) },
                           [
                              (n(!0),
                              a(
                                 N,
                                 null,
                                 D(r.num4, () => (n(), a("div"))),
                                 256,
                              )),
                           ],
                           2,
                        ),
                     ]),
                     num5: A(({ item: r }) => [
                        e(
                           "div",
                           { class: M(`num_column num_column${r.num5}`) },
                           [
                              (n(!0),
                              a(
                                 N,
                                 null,
                                 D(r.num5, () => (n(), a("div"))),
                                 256,
                              )),
                           ],
                           2,
                        ),
                     ]),
                     num6: A(({ item: r }) => [
                        e(
                           "div",
                           { class: M(`num_column num_column${r.num6}`) },
                           [
                              (n(!0),
                              a(
                                 N,
                                 null,
                                 D(r.num6, () => (n(), a("div"))),
                                 256,
                              )),
                           ],
                           2,
                        ),
                     ]),
                     _: 1,
                  },
                  8,
                  ["column-options", "data-source"],
               ),
            ])
         );
      },
   });
const a6 = H(n6, [["__scopeId", "data-v-bd813363"]]),
   Rn = l => (ye("data-v-16b9290a"), (l = l()), fe(), l),
   o6 = { class: "trend_container" },
   l6 = { class: "trend_header" },
   i6 = { class: "trend_header_title" },
   c6 = Rn(() => e("span", null, "7", -1)),
   u6 = Rn(() => e("br", null, null, -1)),
   r6 = Rn(() => e("span", null, "100", -1)),
   d6 = ["src"],
   _6 = ["src"],
   v6 = { class: "trend_table" },
   p6 = { class: "trend_tip" },
   m6 = { class: "tip_text" },
   g6 = { key: 0 },
   h6 = { key: 0 },
   y6 = { class: "custom_column" },
   f6 = { class: "custom_column winmount_column" },
   b6 = V({
      __name: "BinguoTrend",
      setup(l) {
         const { store: s } = as(),
            { t: o } = _e(),
            u = k([
               { title: "Top", key: "rankID", isSlot: !0, width: "20%", cusTdClass: "rankID_column" },
               { title: o("account"), key: "userName", width: "38%", isSlot: !0 },
               { title: o("winningAmount"), width: "42%", key: "winAmount", isSlot: !0 },
            ]),
            v = ue(),
            p = () => {
               s.isTrend || v.back();
            };
         return (d, i) => (
            n(),
            a("div", o6, [
               e("div", l6, [e("div", i6, [E(t(d.$t("binguoLately")), 1), c6, E(t(d.$t("days")), 1), u6, E(" " + t(d.$t("binguoQian")), 1), r6, E(t(d.$t("binguoMin") + d.$t("binguoPaimin")), 1)]), e("img", { src: c(pe)("home/AllLotteryGames/binguo", "trend1"), class: "trend1", alt: "" }, null, 8, d6), e("img", { src: c(pe)("home/AllLotteryGames/binguo", "trend2"), class: "trend2", alt: "" }, null, 8, _6)]),
               e("div", v6, [e("div", p6, [e("div", m6, [E(t(c(s).isTrend ? d.$t("binguoMyLead") : d.$t("binguoNotBoard")) + " ", 1), c(s).isTrend ? B("", !0) : (n(), a("br", g6)), E(" " + t(c(s).isTrend ? "" : d.$t("binguoGoPlay")), 1)]), e("div", { class: "trend_go", onClick: p }, [E(t(c(s).isTrend ? c(s).userRank : "GO") + " ", 1), c(s).isTrend ? (n(), a("span", h6, t(d.$t("binguoMin")), 1)) : B("", !0)])]), L(ts, { "column-options": u.value, "data-source": c(s).trendList, rowHeight: "50px", tabWidth: "100%", hBgColor: "linear-gradient(180deg, #13AB62 0%, #0F6946 100%)", tabHeight: "100%", border: !1, hColor: "#FFF880" }, { rankID: A(({ item: _ }) => [e("div", { class: M(["rankID_column", `${_.rankID < 4 ? "top_" + _.rankID : "rank_text"}`]) }, t(_.rankID > 3 ? _.rankID : ""), 3)]), userName: A(({ item: _ }) => [e("div", y6, t(_.userName), 1)]), winAmount: A(({ item: _ }) => [e("div", f6, t(c(Be)(_.winAmount)), 1)]), _: 1 }, 8, ["column-options", "data-source"])]),
            ])
         );
      },
   });
const $6 = H(b6, [["__scopeId", "data-v-16b9290a"]]),
   C6 = { class: "last7Day_container" },
   k6 = { class: "bingtip_count_title" },
   T6 = { class: "column_time" },
   w6 = { key: 0, class: "result" },
   L6 = { class: "quan" },
   I6 = { key: 0, class: "result" },
   S6 = { class: "quan" },
   G6 = { key: 0, class: "result" },
   x6 = { class: "quan" },
   B6 = { key: 0, class: "result" },
   N6 = { class: "quan" },
   R6 = { key: 0, class: "result" },
   M6 = { class: "quan" },
   D6 = { key: 0, class: "result" },
   A6 = { class: "quan" },
   P6 = { key: 0, class: "result" },
   O6 = { class: "quan" },
   V6 = V({
      __name: "BinguoLast7Day",
      setup(l) {
         const { store: s, columnOptions: o, filterStyle: u } = as();
         return (v, p) => (
            n(),
            a("div", C6, [
               e("div", k6, t(v.$t("binguoLast7Result")), 1),
               L(
                  ts,
                  { "column-options": c(o), "data-source": c(s).last7Day, rowHeight: "40px", "tab-height": "1200px" },
                  {
                     issueEndTime: A(({ item: d }) => [e("div", T6, t(d.issueEndTime), 1)]),
                     time_index_0: A(({ item: d }) => {
                        var i, _, r;
                        return [
                           d.time_index_0
                              ? (n(),
                                a("div", w6, [
                                   e("div", L6, [
                                      (n(!0),
                                      a(
                                         N,
                                         null,
                                         D((i = d.time_index_0) == null ? void 0 : i.result.split(""), g => (n(), a("div", null, t(g), 1))),
                                         256,
                                      )),
                                   ]),
                                   e("div", { class: M(["result_sum", c(u)((_ = d.time_index_0) == null ? void 0 : _.resultSum)]) }, t((r = d.time_index_0) == null ? void 0 : r.resultSum), 3),
                                ]))
                              : B("", !0),
                        ];
                     }),
                     time_index_1: A(({ item: d }) => {
                        var i, _, r;
                        return [
                           d.time_index_1
                              ? (n(),
                                a("div", I6, [
                                   e("div", S6, [
                                      (n(!0),
                                      a(
                                         N,
                                         null,
                                         D((i = d.time_index_1) == null ? void 0 : i.result.split(""), g => (n(), a("div", null, t(g), 1))),
                                         256,
                                      )),
                                   ]),
                                   e("div", { class: M(["result_sum", c(u)((_ = d.time_index_1) == null ? void 0 : _.resultSum)]) }, t((r = d.time_index_1) == null ? void 0 : r.resultSum), 3),
                                ]))
                              : B("", !0),
                        ];
                     }),
                     time_index_2: A(({ item: d }) => {
                        var i, _, r;
                        return [
                           d.time_index_2
                              ? (n(),
                                a("div", G6, [
                                   e("div", x6, [
                                      (n(!0),
                                      a(
                                         N,
                                         null,
                                         D((i = d.time_index_2) == null ? void 0 : i.result.split(""), g => (n(), a("div", null, t(g), 1))),
                                         256,
                                      )),
                                   ]),
                                   e("div", { class: M(["result_sum", c(u)((_ = d.time_index_2) == null ? void 0 : _.resultSum)]) }, t((r = d.time_index_2) == null ? void 0 : r.resultSum), 3),
                                ]))
                              : B("", !0),
                        ];
                     }),
                     time_index_3: A(({ item: d }) => {
                        var i, _, r;
                        return [
                           d.time_index_3
                              ? (n(),
                                a("div", B6, [
                                   e("div", N6, [
                                      (n(!0),
                                      a(
                                         N,
                                         null,
                                         D((i = d.time_index_3) == null ? void 0 : i.result.split(""), g => (n(), a("div", null, t(g), 1))),
                                         256,
                                      )),
                                   ]),
                                   e("div", { class: M(["result_sum", c(u)((_ = d.time_index_3) == null ? void 0 : _.resultSum)]) }, t((r = d.time_index_3) == null ? void 0 : r.resultSum), 3),
                                ]))
                              : B("", !0),
                        ];
                     }),
                     time_index_4: A(({ item: d }) => {
                        var i, _, r;
                        return [
                           d.time_index_4
                              ? (n(),
                                a("div", R6, [
                                   e("div", M6, [
                                      (n(!0),
                                      a(
                                         N,
                                         null,
                                         D((i = d.time_index_4) == null ? void 0 : i.result.split(""), g => (n(), a("div", null, t(g), 1))),
                                         256,
                                      )),
                                   ]),
                                   e("div", { class: M(["result_sum", c(u)((_ = d.time_index_4) == null ? void 0 : _.resultSum)]) }, t((r = d.time_index_4) == null ? void 0 : r.resultSum), 3),
                                ]))
                              : B("", !0),
                        ];
                     }),
                     time_index_5: A(({ item: d }) => {
                        var i, _, r;
                        return [
                           d.time_index_5
                              ? (n(),
                                a("div", D6, [
                                   e("div", A6, [
                                      (n(!0),
                                      a(
                                         N,
                                         null,
                                         D((i = d.time_index_5) == null ? void 0 : i.result.split(""), g => (n(), a("div", null, t(g), 1))),
                                         256,
                                      )),
                                   ]),
                                   e("div", { class: M(["result_sum", c(u)((_ = d.time_index_5) == null ? void 0 : _.resultSum)]) }, t((r = d.time_index_5) == null ? void 0 : r.resultSum), 3),
                                ]))
                              : B("", !0),
                        ];
                     }),
                     time_index_6: A(({ item: d }) => {
                        var i, _, r;
                        return [
                           d.time_index_6
                              ? (n(),
                                a("div", P6, [
                                   e("div", O6, [
                                      (n(!0),
                                      a(
                                         N,
                                         null,
                                         D((i = d.time_index_6) == null ? void 0 : i.result.split(""), g => (n(), a("div", null, t(g), 1))),
                                         256,
                                      )),
                                   ]),
                                   e("div", { class: M(["result_sum", c(u)((_ = d.time_index_6) == null ? void 0 : _.resultSum)]) }, t((r = d.time_index_6) == null ? void 0 : r.resultSum), 3),
                                ]))
                              : B("", !0),
                        ];
                     }),
                     _: 1,
                  },
                  8,
                  ["column-options", "data-source"],
               ),
            ])
         );
      },
   });
const W6 = H(V6, [["__scopeId", "data-v-5e5628ad"]]),
   H6 = { class: "binguo_count" },
   z6 = V({
      __name: "index",
      setup(l) {
         const { store: s, getTrendstatistics: o, getLotteryRankList: u, getLotteryResult7Day: v, getBingo18Last50Result: p } = as(),
            d = ue(),
            i = () => {
               d.back();
            };
         return (
            Ve(
               () => s.currentTabIndex,
               _ => {
                  switch (_) {
                     case 0:
                        o();
                        break;
                     case 1:
                        p();
                        break;
                     case 2:
                        v();
                        break;
                     case 3:
                        u();
                        break;
                  }
               },
               { immediate: !0 },
            ),
            (_, r) => {
               const g = U("NavBar");
               return n(), a("div", H6, [L(g, { "left-arrow": "", onClickLeft: i, backgroundColor: "#0a4529", title: `${_.$t("binguoCount")}` }, null, 8, ["title"]), L(ng), c(s).currentTabIndex === 0 ? (n(), Z(Ag, { key: 0 })) : B("", !0), c(s).currentTabIndex === 1 ? (n(), Z(a6, { key: 1 })) : B("", !0), c(s).currentTabIndex === 2 ? (n(), Z(W6, { key: 2 })) : B("", !0), c(s).currentTabIndex === 3 ? (n(), Z($6, { key: 3 })) : B("", !0)]);
            }
         );
      },
   });
const IV = Object.freeze(Object.defineProperty({ __proto__: null, default: z6 }, Symbol.toStringTag, { value: "Module" })),
   Xs = l => (ye("data-v-1f6155ee"), (l = l()), fe(), l),
   E6 = { class: "body-container" },
   F6 = { class: "MyGameRecordList__C" },
   j6 = ["onClick"],
   U6 = { class: "MyGameRecordList__C_left" },
   q6 = { class: "MyGameRecordList__C-item-m" },
   K6 = { class: "MyGameRecordList__C-item-m-top" },
   Z6 = { class: "MyGameRecordList__C-item-m-bottom" },
   X6 = { key: 0 },
   J6 = { key: 0, class: "MyGameRecordList__C-detail" },
   Y6 = { class: "detail_title" },
   Q6 = { class: "detail_item" },
   e4 = { class: "item_title" },
   t4 = { class: "item_result" },
   s4 = ["onClick"],
   n4 = Xs(() => e("path", { d: "M6.5 6.2158V3.90625C6.5 3.1296 7.1296 2.5 7.90625 2.5H20.0938C20.8704 2.5 21.5 3.1296 21.5 3.90625V16.0938C21.5 16.8704 20.8704 17.5 20.0938 17.5H17.7582", stroke: "#87C7AF", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, null, -1)),
   a4 = Xs(() => e("path", { d: "M16.0938 6.5H3.90625C3.1296 6.5 2.5 7.1296 2.5 7.90625V20.0938C2.5 20.8704 3.1296 21.5 3.90625 21.5H16.0938C16.8704 21.5 17.5 20.8704 17.5 20.0938V7.90625C17.5 7.1296 16.8704 6.5 16.0938 6.5Z", fill: "#87C7AF", stroke: "#87C7AF", "stroke-width": "2", "stroke-linejoin": "round" }, null, -1)),
   o4 = [n4, a4],
   l4 = { class: "detail_item" },
   i4 = { class: "item_title" },
   c4 = { class: "item_result" },
   u4 = ["onClick"],
   r4 = Xs(() => e("path", { d: "M6.5 6.2158V3.90625C6.5 3.1296 7.1296 2.5 7.90625 2.5H20.0938C20.8704 2.5 21.5 3.1296 21.5 3.90625V16.0938C21.5 16.8704 20.8704 17.5 20.0938 17.5H17.7582", stroke: "#87C7AF", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, null, -1)),
   d4 = Xs(() => e("path", { d: "M16.0938 6.5H3.90625C3.1296 6.5 2.5 7.1296 2.5 7.90625V20.0938C2.5 20.8704 3.1296 21.5 3.90625 21.5H16.0938C16.8704 21.5 17.5 20.8704 17.5 20.0938V7.90625C17.5 7.1296 16.8704 6.5 16.0938 6.5Z", fill: "#87C7AF", stroke: "#87C7AF", "stroke-width": "2", "stroke-linejoin": "round" }, null, -1)),
   _4 = [r4, d4],
   v4 = { class: "detail_item" },
   p4 = { class: "item_title" },
   m4 = { class: "item_result" },
   g4 = { class: "detail_item" },
   h4 = { class: "item_title" },
   y4 = { class: "item_result" },
   f4 = { class: "detail_item" },
   b4 = { class: "item_title" },
   $4 = { class: "item_result" },
   C4 = { class: "detail_item" },
   k4 = { class: "item_title" },
   T4 = { class: "item_result" },
   w4 = { class: "detail_item" },
   L4 = { class: "item_title" },
   I4 = { class: "item_result" },
   S4 = { class: "detail_item" },
   G4 = { class: "item_title" },
   x4 = { class: "item_result" },
   B4 = { class: "draw_result" },
   N4 = { class: "detail_item" },
   R4 = { class: "item_title" },
   M4 = { key: 1, class: "item_result" },
   D4 = { class: "detail_item" },
   A4 = { class: "item_title" },
   P4 = { class: "detail_item" },
   O4 = { class: "item_title" },
   V4 = { class: "item_result" },
   W4 = { class: "detail_item" },
   H4 = { class: "item_title" },
   z4 = { class: "item_result" },
   E4 = V({
      __name: "RecordList",
      props: { mayrecord: {} },
      setup(l) {
         const { t: s } = _e(),
            { filterGameType: o } = as(),
            u = k(-1),
            v = i => {
               u.value == i ? (u.value = -1) : (u.value = i);
            },
            p = (i, _) => {
               if (_ == 1)
                  switch (i) {
                     case 0:
                        return s("bettingResultState3");
                     case 1:
                        return s("hasWon");
                     case 2:
                        return s("bettingResultState1");
                     case 3:
                        return s("xosoTxt76");
                     default:
                        return "";
                  }
               else
                  switch (i) {
                     case 0:
                        return "fail";
                     case 1:
                        return "success";
                     case 2:
                        return "wait";
                     case 3:
                        return "ing";
                     default:
                        return "ing";
                  }
            },
            d = i => {
               switch (i) {
                  case "Big":
                     return s("big");
                  case "Drawn":
                     return s("binguoHe");
                  case "Small":
                     return s("small");
                  default:
                     return i;
               }
            };
         return (i, _) => (
            n(),
            a("div", E6, [
               e("div", F6, [
                  (n(!0),
                  a(
                     N,
                     null,
                     D(
                        i.mayrecord,
                        (r, g) => (
                           n(),
                           a(
                              N,
                              { key: g },
                              [
                                 e("div", { class: "MyGameRecordList__C-item", onClick: m => v(g) }, [e("div", { class: M(["MyGameRecordList__C-item-l", c(o)(Number(r.gameType), r.selectType).className]) }, t(d(r.selectType)), 3), e("div", U6, [e("div", q6, [e("div", K6, t(r.issueNumber), 1), e("div", Z6, t(r.addTime), 1)]), e("div", { class: M(["MyGameRecordList__C-item-r", p(r.state, 2)]) }, [e("div", { class: M(p(r.state, 2)) }, t(p(r.state, 1)), 3), r.premium ? (n(), a("span", X6, t(c(Be)(r.profitAmount)), 1)) : B("", !0)], 2)])], 8, j6),
                                 g == u.value
                                    ? (n(),
                                      a("div", J6, [
                                         e("div", Y6, t(i.$t("details")), 1),
                                         e("div", Q6, [e("div", e4, t(i.$t("orderNoMay")), 1), e("div", t4, [E(t(r.orderNumber) + " ", 1), (n(), a("svg", { onClick: m => c(Zt)(r.orderNumber), xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" }, o4, 8, s4))])]),
                                         e("div", l4, [e("div", i4, t(i.$t("issueMay")), 1), e("div", c4, [E(t(r.issueNumber) + " ", 1), (n(), a("svg", { onClick: m => c(Zt)(r.issueNumber), xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" }, _4, 8, u4))])]),
                                         e("div", v4, [e("div", p4, t(i.$t("gamePlay")), 1), e("div", m4, t(c(o)(Number(r.gameType), r.selectType).playerName), 1)]),
                                         e("div", g4, [e("div", h4, t(i.$t("amountMay")), 1), e("div", y4, t(r.amount), 1)]),
                                         e("div", f4, [e("div", b4, t(i.$t("multiple")), 1), e("div", $4, t(r.figure), 1)]),
                                         e("div", C4, [e("div", k4, t(i.$t("afterTaxAmount")), 1), e("div", T4, t(r.realAmount), 1)]),
                                         e("div", w4, [e("div", L4, t(i.$t("tax")), 1), e("div", I4, t(r.serviceCharge || "-"), 1)]),
                                         e("div", S4, [
                                            e("div", G4, t(i.$t("winTips3")), 1),
                                            e("div", x4, [
                                               e("div", { class: M(["draw_num", `${r.sumCount ? c(o)(Number(r.gameType), r.selectType).className : ""}`]) }, t(r.sumCount || "-"), 3),
                                               r.premium
                                                  ? (n(!0),
                                                    a(
                                                       N,
                                                       { key: 0 },
                                                       D(r.premium.split(""), m => (n(), a("div", B4, t(m), 1))),
                                                       256,
                                                    ))
                                                  : B("", !0),
                                            ]),
                                         ]),
                                         e("div", N4, [
                                            e("div", R4, t(i.$t("betting")), 1),
                                            r.gameType === "2" || r.gameType === "1"
                                               ? (n(), a("div", { key: 0, class: M(["item_result item_bet", `${c(o)(Number(r.gameType), r.selectType).className}`]) }, t(r.selectType), 3))
                                               : (n(),
                                                 a("div", M4, [
                                                    (n(!0),
                                                    a(
                                                       N,
                                                       null,
                                                       D(r.selectType.split(""), m => (n(), a("div", { class: M(["item_result item_bet item_alike", `${c(o)(Number(r.gameType), r.selectType).className}`]) }, t(m), 3))),
                                                       256,
                                                    )),
                                                 ])),
                                         ]),
                                         e("div", D4, [e("div", A4, t(i.$t("statusMay")), 1), e("div", { class: M(["item_result", p(r.state, 2)]) }, t(p(r.state, 1)), 3)]),
                                         e("div", P4, [e("div", O4, t(i.$t("winOrLose")), 1), e("div", V4, t(r.profitAmount ? c(Be)(r.profitAmount) : "-"), 1)]),
                                         e("div", W4, [e("div", H4, t(i.$t("createTime")), 1), e("div", z4, t(r.addTime), 1)]),
                                      ]))
                                    : B("", !0),
                              ],
                              64,
                           )
                        ),
                     ),
                     128,
                  )),
               ]),
            ])
         );
      },
   });
const F4 = H(E4, [["__scopeId", "data-v-1f6155ee"]]),
   j4 = { class: "record-container" },
   U4 = { class: "WinTrx__C-head-more" },
   q4 = V({
      __name: "index",
      setup(l) {
         const s = ue(),
            o = () => {
               s.back();
            },
            u = k([]),
            v = k({ pageSize: 20 }),
            p = () => {},
            d = () => {},
            i = k("");
         return (_, r) => {
            const g = U("NavBar");
            return n(), a("div", j4, [L(g, { "left-arrow": "", onClickLeft: o, "background-color": "#0a4529", title: _.$t("xosoTxt73") }, { right: A(() => [e("div", U4, [e("div", { onClick: r[0] || (r[0] = m => p()) }), e("div", { class: M({ disableVoice: i.value == "2" }), onClick: d }, null, 2)])]), _: 1 }, 8, ["title"]), L(Ga, { list: u.value, "onUpdate:list": r[1] || (r[1] = m => (u.value = m)), pageQuery: v.value, "onUpdate:pageQuery": r[2] || (r[2] = m => (v.value = m)), api: c(Pc), distance: 100, ref: "listRef", isAutoLoad: !0 }, { content: A(() => [L(F4, { mayrecord: u.value }, null, 8, ["mayrecord"])]), _: 1 }, 8, ["list", "pageQuery", "api"])]);
         };
      },
   });
const K4 = H(q4, [["__scopeId", "data-v-121431cd"]]),
   SV = Object.freeze(Object.defineProperty({ __proto__: null, default: K4 }, Symbol.toStringTag, { value: "Module" })),
   Z4 = l => (ye("data-v-ab9322e8"), (l = l()), fe(), l),
   X4 = { class: "Betting__Popup" },
   J4 = { class: "Betting__Popup-head" },
   Y4 = { class: "Betting__Popup-head-title" },
   Q4 = { class: "Betting__Popup-head-selectName" },
   eh = { class: "Betting__Popup-body" },
   th = { class: "Betting__Popup-body-line" },
   sh = { class: "Betting__Popup-body-line-list" },
   nh = ["onClick"],
   ah = { class: "Betting__Popup-body-line" },
   oh = { class: "Betting__Popup-body-line-btnL" },
   lh = { class: "Betting__Popup-body-line" },
   ih = Z4(() => e("div", null, null, -1)),
   ch = { class: "Betting__Popup-body-line-list" },
   uh = ["onClick"],
   rh = { class: "Betting__Popup-body-line" },
   dh = { class: "Betting__Popup-foot" },
   _h = { class: "Betting__Popup-foot-s bgcolor" },
   vh = { class: "Betting__Popup-PreSale" },
   ph = { class: "Betting__Popup-PreSale-head" },
   mh = { class: "Betting__Popup-PreSale-body" },
   gh = { class: "Betting__Popup-PreSale-foot" },
   hh = V({
      __name: "BettingPopup",
      props: { selectInfo: { type: Object, default: () => ({}) }, bettingPopupShow: { type: Boolean, default: k(!1) }, actionItem: { type: Object, default: () => ({}) } },
      emits: ["update:bettingPopupShow", "update:selectInfo", "clearBetting", "submitBetting"],
      setup(l, { emit: s }) {
         const o = l,
            { t: u } = _e(),
            v = k(!1),
            p = k(!0),
            d = q(() => o.actionItem.scopeList || []),
            i = k([1, 5, 10, 20, 50, 100]),
            _ = q({
               get() {
                  return o.bettingPopupShow || !1;
               },
               set(b) {
                  s("update:bettingPopupShow", b);
               },
            }),
            r = b => {
               switch (b) {
                  case 1:
                     o.selectInfo.count > 1 && (o.selectInfo.count--, f());
                     break;
                  case 2:
                     o.selectInfo.count++, f();
                     break;
               }
            },
            g = b => {
               b > 0 && ((o.selectInfo.count = parseInt(b)), f());
            },
            m = b => {
               (o.selectInfo.count = b), f();
            },
            $ = b => {
               (o.selectInfo.coin = b), f();
            },
            y = () => {
               (v.value = !1), (p.value = !0);
            },
            C = () => {
               p.value ? s("submitBetting") : Ct(u("agreePresaleRules"));
            },
            f = () => {
               o.selectInfo.allCoin = o.selectInfo.coin * o.selectInfo.count;
            };
         return (b, T) => {
            const h = U("van-field"),
               w = U("van-popup"),
               I = Te("throttle-click");
            return (
               n(),
               a(
                  N,
                  null,
                  [
                     L(
                        w,
                        { show: _.value, "onUpdate:show": T[6] || (T[6] = x => (_.value = x)), position: "bottom", round: !0, "close-on-click-overlay": !1 },
                        {
                           default: A(() => [
                              e("div", X4, [
                                 e("div", J4, [e("div", Y4, t(l.actionItem.lotteryName), 1), e("div", Q4, [e("span", null, t(c(u)("choose")), 1), e("span", null, t(l.selectInfo.selectCon), 1)])]),
                                 e("div", eh, [
                                    e("div", th, [
                                       E(t(c(u)("amount")) + " ", 1),
                                       e("div", sh, [
                                          (n(!0),
                                          a(
                                             N,
                                             null,
                                             D(d.value, (x, S) => (n(), a("div", { key: S, class: M(["Betting__Popup-body-line-item", { bgcolor: l.selectInfo.coin == x }]), onClick: G => $(x) }, t(x), 11, nh))),
                                             128,
                                          )),
                                       ]),
                                    ]),
                                    e("div", ah, [E(t(c(u)("numbers")) + " ", 1), e("div", oh, [e("div", { class: M(["Betting__Popup-btn", { bgcolor: l.selectInfo.count > 0 }]), onClick: T[0] || (T[0] = x => r(1)) }, "-", 2), L(h, { class: "Betting__Popup-input", modelValue: l.selectInfo.count, "onUpdate:modelValue": T[1] || (T[1] = x => (l.selectInfo.count = x)), type: "digit", maxlength: 4, onInput: g }, null, 8, ["modelValue"]), e("div", { class: "Betting__Popup-btn bgcolor", onClick: T[2] || (T[2] = x => r(2)) }, "+")])]),
                                    e("div", lh, [
                                       ih,
                                       e("div", ch, [
                                          (n(!0),
                                          a(
                                             N,
                                             null,
                                             D(i.value, (x, S) => (n(), a("div", { key: S, class: M(["Betting__Popup-body-line-item", { bgcolor: l.selectInfo.count == x }]), onClick: G => m(x) }, " X" + t(x), 11, uh))),
                                             128,
                                          )),
                                       ]),
                                    ]),
                                    e("div", rh, [e("span", { class: M(["Betting__Popup-agree", { active: p.value }]), onClick: T[3] || (T[3] = x => (p.value = !p.value)) }, t(c(u)("agree")), 3), e("span", { onClick: T[4] || (T[4] = x => (v.value = !0)), class: "Betting__Popup-preSaleShow" }, t(c(u)("presaleRules")), 1)]),
                                 ]),
                                 e("div", dh, [e("div", { class: "Betting__Popup-foot-c", onClick: T[5] || (T[5] = x => s("clearBetting")) }, t(c(u)("cancel")), 1), te((n(), a("div", _h, [E(t(c(u)("totalAmount")) + " " + t(c(Be)(l.selectInfo.count * l.selectInfo.coin || 0)), 1)])), [[I, { handler: C, wait: 2e3 }]])]),
                              ]),
                           ]),
                           _: 1,
                        },
                        8,
                        ["show"],
                     ),
                     L(w, { show: v.value, "onUpdate:show": T[7] || (T[7] = x => (v.value = x)), "close-on-click-overlay": !1, round: "" }, { default: A(() => [e("div", vh, [e("div", ph, t(c(u)("presaleRules")), 1), e("div", mh, t(b.$t("betPopTXT")), 1), e("div", gh, [e("div", { class: "Betting__Popup-PreSale-foot-btn", onClick: y }, t(c(u)("iKonw")), 1)])])]), _: 1 }, 8, ["show"]),
                  ],
                  64,
               )
            );
         };
      },
   });
const yh = H(hh, [["__scopeId", "data-v-ab9322e8"]]),
   fh = { class: "changLong__C" },
   bh = { class: "changLong__C-bet" },
   $h = { class: "changLong__C-bet-l" },
   Ch = { class: "num" },
   kh = { class: "time" },
   Th = { class: "other" },
   wh = { class: "remark" },
   Lh = { class: "issue" },
   Ih = ["onClick"],
   Sh = ["onClick"],
   Gh = ["onClick"],
   xh = ["onClick"],
   Bh = ["onClick"],
   Nh = ["onClick"],
   Rh = ["onClick"],
   Mh = ["onClick"],
   Dh = ["onClick"],
   Ah = ["onClick"],
   Ph = ["onClick"],
   fa = 5,
   Oh = V({
      __name: "Bet",
      setup(l) {
         const s = Bs.global.t,
            o = k(!1),
            u = k({}),
            v = k({ coin: 0, count: 1, allCoin: 0, gametype: 0, typeid: 1, issuenumber: "2020", selecttype: 1, selectCon: "" }),
            p = nl([]);
         let d = null;
         const i = (h, w, I, x, S) => {
               if (((p.value[w].action = I), (u.value = h), (v.value.selectCon = x), (v.value.coin = h.scopeList[0]), (v.value.typeid = h.type), (v.value.gametype = h.bettingGameType), h.type > 4)) S == "big" ? (v.value.selecttype = "H") : S == "small" ? (v.value.selecttype = "L") : (v.value.selecttype = S);
               else {
                  const G = { red: 10, green: 11, violet: 12, big: 13, small: 14 };
                  v.value.selecttype = G[S];
               }
               (v.value.issuenumber = h.issueNumber), (o.value = !0);
            },
            _ = k(!1),
            r = async () => {
               if ((d && clearInterval(d), _.value)) return;
               _.value = !0;
               const h = await de(Wl({ gameType: -1 }));
               if (((_.value = !1), !h)) return;
               const w = h.data.serviceTime;
               (p.value = h.data.list.map(I => {
                  let x = new Date(w).getTime(),
                     S = new Date(I.startTime).getTime(),
                     G = (x - S) / 1e3;
                  return G > I.intervalM * 60 && (G = I.intervalM * 60), (I.scopeList = I.scope.split("|").map(R => Number(R))), (I.passTime = Math.floor(I.intervalM * 60 - G)), (I.time1 = 0), (I.time2 = Math.floor(I.passTime / 60)), (I.time3 = Math.floor((I.passTime % 60) / 10)), (I.time4 = Math.floor(I.passTime % 10)), I;
               })),
                  (d = setInterval(function () {
                     g();
                  }, 1e3));
            },
            g = () => {
               const h = p.value.length;
               let w = !1;
               for (let I = 0; I < h; I++) {
                  let x = p.value[I];
                  if ((x.passTime < fa && x.issueNumber == u.value.issueNumber && m(), x.passTime > 0)) (x.time2 = Math.floor(x.passTime / 60)), (x.time3 = Math.floor((x.passTime % 60) / 10)), (x.time4 = Math.floor(x.passTime % 10)), x.passTime--;
                  else {
                     (w = !1), clearInterval(d), r();
                     break;
                  }
                  w = x.time3 + x.time4 == 0;
               }
               al(p), w && (clearInterval(d), r());
            },
            m = () => {
               o.value = !1;
               let h = p.value.findIndex(w => JSON.stringify(w) == JSON.stringify(u.value));
               h != -1 && (p.value[h].action = 0), (v.value.coin = u.value.scopeList ? u.value.scopeList[0] : 0), (v.value.count = 1), (u.value = {});
            },
            $ = () => {
               const { typeid: h = 0 } = v.value;
               h && (h < 5 ? C() : h < 9 ? b() : f());
            },
            y = h => (h < 5 ? "winGo" : h < 9 ? "Fd" : "k3"),
            C = async () => {
               const h = await de(Pa({ typeId: v.value.typeid, issuenumber: v.value.issuenumber, amount: v.value.coin, betCount: Number(v.value.count), gameType: v.value.gametype, selectType: v.value.selecttype }));
               (h == null ? void 0 : h.code) === 0 && (Ct(s("code" + h.msgCode)), m());
            },
            f = async () => {
               let { coin: h, count: w, issuenumber: I, gametype: x, selecttype: S, typeid: G } = v.value;
               const R = await de(Oa({ amount: h, betCount: Number(w), gameType: x.toString(), selectType: S, typeId: G, issuenumber: I }));
               (R == null ? void 0 : R.code) === 0 && (Ct(s("code" + R.msgCode)), m());
            },
            b = async () => {
               let { coin: h, count: w, issuenumber: I, gametype: x, selecttype: S, typeid: G } = v.value;
               const R = { issuenumber: I, typeId: G, amount: h, betCount: Number(w), gameType: x, selectType: S },
                  O = await de(Na(R));
               (O == null ? void 0 : O.code) === 0 && (Ct(s("code" + O.msgCode)), m());
            },
            T = h => (h == "H" ? "B" : h.trim() == "L" ? "S" : h);
         return (
            he(() => {
               r();
            }),
            jt(() => {
               clearInterval(d);
            }),
            Ve(
               () => rt().visibility,
               h => {
                  r();
               },
            ),
            (h, w) => (
               n(),
               a(
                  N,
                  null,
                  [
                     e("div", fh, [
                        (n(!0),
                        a(
                           N,
                           null,
                           D(
                              p.value,
                              (I, x) => (
                                 n(),
                                 a("div", bh, [
                                    e("div", $h, [e("div", { class: M(["titel", [y(I.type)]]) }, t(I.lotteryName), 3), e("div", Ch, [E(t(I.issueNumber) + " ", 1), e("span", kh, t(`${I.time1}${I.time2}:${I.time3}${I.time4}`), 1)]), e("div", Th, [e("div", wh, t(I.remark), 1), e("div", { class: M(["gameResult", "bg-" + I.gameResult]) }, t(T(I.gameResult)), 3), e("div", Lh, t(I.issue) + t(h.$t("betIssues")), 1)])]),
                                    e(
                                       "div",
                                       { class: M(["changLong__C-bet-r", { disable: I.passTime < fa }]) },
                                       [
                                          I.gameType == 0 ? (n(), a(N, { key: 0 }, [e("div", { class: M({ active: I.action == 1 }), onClick: S => i(I, x, 1, h.$t("betBig"), "big") }, t(h.$t("betBig")), 11, Ih), e("div", { class: M({ active: I.action == 2 }), onClick: S => i(I, x, 2, h.$t("betSmall"), "small") }, t(h.$t("betSmall")), 11, Sh)], 64)) : B("", !0),
                                          I.gameType == 1 ? (n(), a(N, { key: 1 }, [e("div", { class: M({ active: I.action == 1 }), onClick: S => i(I, x, 1, h.$t("betRed"), "red") }, t(h.$t("betRed")), 11, Gh), e("div", { class: M({ active: I.action == 2 }), onClick: S => i(I, x, 2, h.$t("betGreen"), "green") }, t(h.$t("betGreen")), 11, xh), e("div", { class: M({ active: I.action == 3 }), onClick: S => i(I, x, 3, h.$t("betPurple"), "violet") }, t(h.$t("betPurple")), 11, Bh)], 64)) : B("", !0),
                                          I.gameType == 2 ? (n(), a(N, { key: 2 }, [e("div", { class: M({ active: I.action == 1 }), onClick: S => i(I, x, 1, h.$t("betOdd"), "O") }, t(h.$t("betOdd")), 11, Nh), e("div", { class: M({ active: I.action == 2 }), onClick: S => i(I, x, 2, h.$t("betEven"), "E") }, t(h.$t("betEven")), 11, Rh)], 64)) : B("", !0),
                                          I.gameType == 3 ? (n(), a(N, { key: 3 }, [e("div", { class: M({ active: I.action == 1 }), onClick: S => i(I, x, 1, h.$t("betWithSingle"), "O") }, t(h.$t("betWithSingle")), 11, Mh), e("div", { class: M({ active: I.action == 2 }), onClick: S => i(I, x, 2, h.$t("betWithDouble"), "E") }, t(h.$t("betWithDouble")), 11, Dh)], 64)) : B("", !0),
                                          I.gameType == 4 ? (n(), a(N, { key: 4 }, [e("div", { class: M({ active: I.action == 1 }), onClick: S => i(I, x, 1, h.$t("betWithBig"), "H") }, t(h.$t("betWithBig")), 11, Ah), e("div", { class: M({ active: I.action == 2 }), onClick: S => i(I, x, 2, h.$t("betWithSmall"), "L") }, t(h.$t("betWithSmall")), 11, Ph)], 64)) : B("", !0),
                                       ],
                                       2,
                                    ),
                                 ])
                              ),
                           ),
                           256,
                        )),
                     ]),
                     L(yh, { bettingPopupShow: o.value, selectInfo: v.value, actionItem: u.value, onClearBetting: m, onSubmitBetting: $ }, null, 8, ["bettingPopupShow", "selectInfo", "actionItem"]),
                  ],
                  64,
               )
            )
         );
      },
   });
const Vh = H(Oh, [["__scopeId", "data-v-703a929a"]]),
   Wh = { class: "MyGameRecord__C" },
   Hh = { key: 0, class: "MyGameRecord__C-head" },
   zh = { class: "MyGameRecord__C-body" },
   Eh = { key: 1, class: "MyGameRecord__C-body-empty" },
   Fh = { key: 1, class: "MyGameRecord__C-foot" },
   jh = { class: "MyGameRecord__C-foot-page" },
   Uh = V({
      __name: "MyGameRecord",
      props: { typeid: {}, ApiFun: {}, goPathName: {}, hasHead: { type: Boolean, default: !0 } },
      setup(l, { expose: s }) {
         const o = l,
            u = ue(),
            v = k(4),
            p = k(20),
            d = k(1),
            i = k([]),
            _ = $ => {
               u.push({ name: $ });
            },
            r = () => {
               d.value--, m();
            },
            g = () => {
               d.value++, m();
            },
            m = async ($ = !1) => {
               if (o.typeid == null) return;
               $ && (d.value = 1);
               const [y, C] = await ct(o.ApiFun({ pageSize: p.value, pageNo: d.value, typeId: o.typeid }));
               C && ((i.value = (C == null ? void 0 : C.list) || []), (v.value = (C == null ? void 0 : C.totalPage) || 0));
            };
         return (
            s({ getData: m }),
            kt(() => {
               m();
            }),
            ($, y) => {
               const C = U("van-icon");
               return n(), a("div", Wh, [$.hasHead ? (n(), a("div", Hh, [e("div", { class: "MyGameRecord__C-head-moreB", onClick: y[0] || (y[0] = f => _($.goPathName)) }, t($.$t("more")), 1)])) : B("", !0), e("div", zh, [i.value.length ? (n(), Z(Bn, { key: 0, mayrecord: i.value }, null, 8, ["mayrecord"])) : (n(), a("div", Eh, [L(gt)]))]), i.value.length ? (n(), a("div", Fh, [e("div", { class: M(["MyGameRecord__C-foot-previous", { disabled: d.value <= 1 }]), onClick: r }, [L(C, { name: "arrow-left", class: "MyGameRecord__C-icon", size: "20" })], 2), e("div", jh, t(d.value) + "/" + t(v.value), 1), e("div", { class: M(["MyGameRecord__C-foot-next", { disabled: d.value >= v.value }]), onClick: g }, [L(C, { name: "arrow", class: "MyGameRecord__C-icon", size: "20" })], 2)])) : B("", !0)]);
            }
         );
      },
   });
const Mn = H(Uh, [["__scopeId", "data-v-3c1f9720"]]),
   qh = { class: "MyGameRecord__C" },
   Kh = { key: 0, class: "MyGameRecord__C-head" },
   Zh = { class: "MyGameRecord__C-body" },
   Xh = { key: 1, class: "MyGameRecord__C-body-empty" },
   Jh = { key: 1, class: "MyGameRecord__C-foot" },
   Yh = { class: "MyGameRecord__C-foot-page" },
   Qh = V({
      __name: "MyGameRecord",
      props: { typeid: {}, goPathName: {}, hasHead: { type: Boolean, default: !0 } },
      setup(l, { expose: s }) {
         const o = l,
            u = ue(),
            v = k(4),
            p = k(20),
            d = k(1),
            i = k([]),
            _ = y => {
               u.push({ name: y });
            },
            r = () => {
               d.value--, m();
            },
            g = () => {
               d.value++, m();
            },
            m = async (y = !1) => {
               if (o.typeid == null) return;
               y && (d.value = 1);
               const C = await de(Aa({ pageSize: p.value, pageNo: d.value, typeId: o.typeid })),
                  f = (C == null ? void 0 : C.data.list) || [];
               for (let b = 0; f.length > b; b++) {
                  let T = f[b].gameType.split(","),
                     h = f[b].selectType.split(",");
                  for (let w = 0; T.length > w; w++)
                     if (T[w] == "1" || T[w] == "2" || T[w] == "3") (f[b].gameType = "1"), (f[b].oneList = h);
                     else if (T[w] == "5" || T[w] == "6") {
                        let I = [],
                           x = [],
                           S = [];
                        for (let G = 0; h.length > G; G++) {
                           if (h[G] == "|11|" || h[G] == "|22|" || h[G] == "|33|" || h[G] == "|44|" || h[G] == "|55|" || h[G] == "|66|") {
                              let R = h[G].split("|");
                              R.pop(), R.shift(), I.push(R.join());
                           }
                           if (h[G] == ":11:" || h[G] == ":22:" || h[G] == ":33:" || h[G] == ":44:" || h[G] == ":55:" || h[G] == ":66:") {
                              let R = h[G].split(":");
                              R.pop(), R.shift(), x.push(R.join());
                           }
                           if (h[G] == ":1:" || h[G] == ":2:" || h[G] == ":3:" || h[G] == ":4:" || h[G] == ":5:" || h[G] == ":6:") {
                              let R = h[G].split(":");
                              R.pop(), R.shift(), S.push(R.join());
                           }
                        }
                        (f[b].gameType = "2"), (f[b].oneList = I), (f[b].towList = $(x, S));
                     } else if (T[w] == "7" || T[w] == "8") {
                        let I = [],
                           x = !1;
                        for (let S = 0; h.length > S; S++) {
                           if (h[S] == "|111|" || h[S] == "|222|" || h[S] == "|333|" || h[S] == "|444|" || h[S] == "|555|" || h[S] == "|666|") {
                              let G = h[S].split("|");
                              G.pop(), G.shift(), I.push(G.join());
                           }
                           h[S] == "|AAA|" && (x = !0), (f[b].oneList = I), (f[b].towList = x), (f[b].gameType = "3");
                        }
                     } else if (T[w] == "9" || T[w] == "10" || T[w] == "4") {
                        let I = [],
                           x = !1,
                           S = [];
                        for (let G = 0; h.length > G; G++) {
                           if (h[G] == "|1|" || h[G] == "|2|" || h[G] == "|3|" || h[G] == "|4|" || h[G] == "|5|" || h[G] == "|6|") {
                              let R = h[G].split("|");
                              R.pop(), R.shift(), I.push(R.join());
                           }
                           if ((h[G] == "|ABC|" && (x = !0), h[G] == ".1." || h[G] == ".2." || h[G] == ".3." || h[G] == ".4." || h[G] == ".5." || h[G] == ".6.")) {
                              let R = h[G].split(".");
                              R.pop(), R.shift(), S.push(R.join());
                           }
                        }
                        (f[b].oneList = I), (f[b].towList = x), (f[b].threeList = S), (f[b].gameType = "4");
                     }
               }
               (i.value = f || []), (v.value = (C == null ? void 0 : C.data.totalPage) || 0);
            },
            $ = (y, C) => {
               let f = [];
               for (var b = 0; y.length > b; b++) {
                  let h = y[b],
                     w = [];
                  for (var T = 0; C.length > T; T++) w.push(C[T]);
                  if (w.length > 0) {
                     let I = w.sort().join(",");
                     f.push(h + "|" + I);
                  }
               }
               return f.sort();
            };
         return (
            s({ getData: m }),
            kt(() => {
               m();
            }),
            (y, C) => {
               const f = U("van-icon");
               return n(), a("div", qh, [y.hasHead ? (n(), a("div", Kh, [e("div", { class: "MyGameRecord__C-head-moreB", onClick: C[0] || (C[0] = b => _(y.goPathName)) }, t(y.$t("more")), 1)])) : B("", !0), e("div", Zh, [i.value.length ? (n(), Z(oo, { key: 0, mayrecord: i.value }, null, 8, ["mayrecord"])) : (n(), a("div", Xh, [L(gt)]))]), i.value.length ? (n(), a("div", Jh, [e("div", { class: M(["MyGameRecord__C-foot-previous", { disabled: d.value <= 1 }]), onClick: r }, [L(f, { name: "arrow-left", class: "MyGameRecord__C-icon", size: "20" })], 2), e("div", Yh, t(d.value) + "/" + t(v.value), 1), e("div", { class: M(["MyGameRecord__C-foot-next", { disabled: d.value >= v.value }]), onClick: g }, [L(f, { name: "arrow", class: "MyGameRecord__C-icon", size: "20" })], 2)])) : B("", !0)]);
            }
         );
      },
   });
const io = H(Qh, [["__scopeId", "data-v-7a9eb376"]]),
   ey = { class: "BetRecord__C" },
   ty = V({
      __name: "BetRecord",
      setup(l) {
         const s = { Win: Mn, FD: ao, K3: io },
            o = k(),
            u = k(0),
            v = k(0),
            p = k([
               { name: "WinGo", com: "Win" },
               { name: "5D Lotre", com: "FD" },
               { name: "K3Lotre", com: "K3" },
            ]),
            d = k(["1min", "3min", "5min", "10min"]),
            i = k(1),
            _ = () => {
               (i.value = u.value * 4 + v.value + 1),
                  lt(() => {
                     o.value && o.value.getData();
                  });
            };
         return (
            he(() => {
               _();
            }),
            (r, g) => {
               const m = U("van-tab"),
                  $ = U("van-tabs");
               return (
                  n(),
                  a("div", ey, [
                     L(
                        $,
                        { class: "BetRecord__C-gameTab", active: u.value, "onUpdate:active": g[1] || (g[1] = y => (u.value = y)), onClick: _ },
                        {
                           default: A(() => [
                              (n(!0),
                              a(
                                 N,
                                 null,
                                 D(
                                    p.value,
                                    (y, C) => (
                                       n(),
                                       Z(
                                          m,
                                          { key: C, title: y.name },
                                          {
                                             default: A(() => [
                                                L(
                                                   $,
                                                   { class: "BetRecord__C-timeTab", active: v.value, "onUpdate:active": g[0] || (g[0] = f => (v.value = f)) },
                                                   {
                                                      default: A(() => [
                                                         (n(!0),
                                                         a(
                                                            N,
                                                            null,
                                                            D(d.value, (f, b) => (n(), Z(m, { key: b, title: f }, null, 8, ["title"]))),
                                                            128,
                                                         )),
                                                      ]),
                                                      _: 2,
                                                   },
                                                   1032,
                                                   ["active"],
                                                ),
                                             ]),
                                             _: 2,
                                          },
                                          1032,
                                          ["title"],
                                       )
                                    ),
                                 ),
                                 128,
                              )),
                           ]),
                           _: 1,
                        },
                        8,
                        ["active"],
                     ),
                     (n(), Z(ft(s[p.value[u.value].com]), { ref_key: "RecRef", ref: o, typeid: i.value, "has-head": !1, ApiFun: c(Ln), "go-path-name": "0" }, null, 8, ["typeid", "ApiFun"])),
                  ])
               );
            }
         );
      },
   });
const sy = H(ty, [["__scopeId", "data-v-7de531bd"]]),
   ny = { class: "changLong__C" },
   ay = V({
      __name: "index",
      setup(l) {
         const s = ue(),
            o = k(0);
         function u() {
            s.go(-1);
         }
         return (
            he(() => {}),
            (v, p) => {
               const d = U("NavBar"),
                  i = U("van-tab"),
                  _ = U("van-tabs");
               return n(), a("div", ny, [L(d, { "left-arrow": "", title: v.$t("loongAssistant"), "background-color": "linear-gradient(90deg, #8deef5 0%, #259aa3 100%)", onClickLeft: u }, null, 8, ["title"]), L(_, { class: "changLong__C-tab", active: o.value, "onUpdate:active": p[0] || (p[0] = r => (o.value = r)) }, { default: A(() => [L(i, { title: v.$t("latestLoong") }, null, 8, ["title"]), L(i, { title: v.$t("myBet") }, null, 8, ["title"])]), _: 1 }, 8, ["active"]), o.value == 0 ? (n(), Z(Vh, { key: 0 })) : (n(), Z(sy, { key: 1 }))]);
            }
         );
      },
   });
const oy = H(ay, [["__scopeId", "data-v-14329263"]]),
   GV = Object.freeze(Object.defineProperty({ __proto__: null, default: oy }, Symbol.toStringTag, { value: "Module" })),
   ly = l => (ye("data-v-72d1481f"), (l = l()), fe(), l),
   iy = { class: "K3TL__C" },
   cy = { class: "K3TL__C-l1" },
   uy = { class: "left" },
   ry = { class: "K3TL__C-l2" },
   dy = { class: "K3TL__C-time" },
   _y = ly(() => e("div", { notime: "" }, ":", -1)),
   vy = { class: "K3TL__C-l3" },
   py = { class: "box" },
   my = V({
      __name: "TimeLeft",
      props: { currentInfo: { type: Object, default: () => ({ gameNo: "loading", currentTime: "", beginTime: "", passTime: 180, time1: 0, time2: 0, time3: 0, time4: 0 }) }, premium: { type: String, default: "666" }, currentGame: { type: Object, default: () => ({}) } },
      setup(l) {
         const s = l,
            o = q(() => [...s.premium]),
            u = k(!1),
            v = Ut(),
            p = () => {
               (u.value = !0), v.getK3Rule(s.currentGame.typeID);
            };
         return (d, i) => (
            n(),
            a(
               N,
               null,
               [
                  e("div", iy, [
                     e("div", cy, [e("div", uy, [e("div", null, t(d.$t("k3Number")), 1), e("div", { class: "K3TL__C-rule", onClick: p }, t(d.$t("winTrxIndicate")), 1)]), e("div", null, t(d.$t("k3TimeLeftToBuy")), 1)]),
                     e("div", ry, [e("div", null, t(s.currentInfo.gameNo), 1), e("div", dy, [e("div", null, t(l.currentInfo.time1), 1), e("div", null, t(l.currentInfo.time2), 1), _y, e("div", null, t(l.currentInfo.time3), 1), e("div", null, t(l.currentInfo.time4), 1)])]),
                     e("div", vy, [
                        e("div", py, [
                           (n(!0),
                           a(
                              N,
                              null,
                              D(o.value, (_, r) => (n(), a("div", { key: r, class: M(["num" + _]) }, null, 2))),
                              128,
                           )),
                        ]),
                     ]),
                  ]),
                  L(Us, { howPlayShow: u.value, gamePresentation: l.currentGame.gamePresentation, onClose: i[0] || (i[0] = _ => (u.value = !1)) }, null, 8, ["howPlayShow", "gamePresentation"]),
               ],
               64,
            )
         );
      },
   });
const gy = H(my, [["__scopeId", "data-v-72d1481f"]]),
   hy = { class: "K3B__C-bettingList" },
   yy = ["onClick"],
   fy = { key: 1, class: "" },
   by = { key: 2, class: "K3B__C-odds-rate" },
   $y = { key: 3, class: "K3B__C-odds-rate" },
   Cy = { key: 4, class: "K3B__C-odds-rate" },
   ky = V({
      __name: "Betting1",
      props: { OddsList: {}, betnumList: {} },
      emits: ["showP", "upAll"],
      setup(l, { expose: s, emit: o }) {
         const u = l,
            { t: v } = _e(),
            p = k([
               { num: 3, odds: 191.16, chack: !1 },
               { num: 4, odds: 63.72, chack: !1 },
               { num: 5, odds: 31.86, chack: !1 },
               { num: 6, odds: 19.11, chack: !1 },
               { num: 7, odds: 12.74, chack: !1 },
               { num: 8, odds: 9.1, chack: !1 },
               { num: 9, odds: 7.64, chack: !1 },
               { num: 10, odds: 7.08, chack: !1 },
               { num: 11, odds: 7.08, chack: !1 },
               { num: 12, odds: 7.64, chack: !1 },
               { num: 13, odds: 9.1, chack: !1 },
               { num: 14, odds: 12.74, chack: !1 },
               { num: 15, odds: 19.11, chack: !1 },
               { num: 16, odds: 31.86, chack: !1 },
               { num: 17, odds: 63.72, chack: !1 },
               { num: 18, odds: 191.16, chack: !1 },
               { num: "A", odds: 2, chack: !1 },
               { num: "B", odds: 2, chack: !1 },
               { num: "C", odds: 2, chack: !1 },
               { num: "D", odds: 2, chack: !1 },
            ]),
            d = $ => {
               switch ($) {
                  case "A":
                     return v("k3Big");
                  case "B":
                     return v("k3Small");
                  case "C":
                     return v("k3Odd");
                  case "D":
                     return v("k3Even");
                  default:
                     return $;
               }
            },
            i = ($, y) => {
               y < 16 ? (p.value[y].chack ? g($, y) : (u.betnumList.push($.num), (p.value[y].chack = !0))) : _($, y), u.betnumList.length > 0 ? o("showP", !0) : o("showP", !1), o("upAll");
            },
            _ = ($, y) => {
               switch (y) {
                  case 16:
                     r($, y, 17);
                     break;
                  case 17:
                     r($, y, 16);
                     break;
                  case 18:
                     r($, y, 19);
                     break;
                  case 19:
                     r($, y, 18);
                     break;
               }
            },
            r = ($, y, C) => {
               p.value[C].chack && g(p.value[C], C), p.value[y].chack ? g($, y) : (u.betnumList.push($.num), (p.value[y].chack = !0));
            },
            g = ($, y) => {
               p.value[y].chack = !1;
               let C = u.betnumList.indexOf($.num);
               C > -1 && u.betnumList.splice(C, 1);
            };
         return (
            s({
               clearList: () => {
                  p.value = p.value.map($ => (($.chack = !1), $));
               },
            }),
            ($, y) => (
               n(),
               a("div", hy, [
                  (n(!0),
                  a(
                     N,
                     null,
                     D(p.value, (C, f) => (n(), a("div", { class: M("num num" + C.num), key: f, onClick: b => i(C, f) }, [f < 16 ? (n(), a("div", { key: 0, class: M(f % 2 == 0 ? "ball rball" : "ball gball") }, [e("div", { class: M("K3B__C-odds-bet num" + C.num) }, t(d(C.num)), 3)], 2)) : (n(), a("div", fy, t(d(C.num)), 1)), f < 16 ? (n(), a("div", by, t(u.OddsList[f] && (u.OddsList[f].playRate || u.OddsList[f].playRate_Original)) + "X ", 1)) : f < 18 ? (n(), a("div", $y, t(u.OddsList[16] && (u.OddsList[16].playRate || u.OddsList[16].playRate_Original)) + "X ", 1)) : (n(), a("div", Cy, t(u.OddsList[17] && (u.OddsList[17].playRate || u.OddsList[17].playRate_Original)) + "X ", 1))], 10, yy))),
                     128,
                  )),
               ])
            )
         );
      },
   });
const Ty = H(ky, [["__scopeId", "data-v-01cf71e0"]]),
   wy = { class: "K3B__C-betting2" },
   Ly = { class: "K3B__C-betting2-tip1" },
   Iy = { key: 0 },
   Sy = { class: "K3B__C-betting2-line1 mb30" },
   Gy = ["onClick"],
   xy = { class: "K3B__C-betting2-tip1" },
   By = { key: 0 },
   Ny = { class: "K3B__C-betting2-line2" },
   Ry = ["onClick"],
   My = { class: "" },
   Dy = { class: "K3B__C-betting2-line3" },
   Ay = ["onClick"],
   Py = { class: "" },
   Oy = V({
      __name: "Betting2",
      props: { OddsList: {}, numList: {}, betnumList: {}, numTow: {}, numOne: {}, numChack: { type: Boolean } },
      emits: ["showP", "upAll", "selectNum", "onQuestion"],
      setup(l, { emit: s }) {
         const o = l,
            u = (d, i, _) => {
               let r = d.num,
                  g = d.num + "" + d.num;
               if (_ == 1)
                  if (o.numList[i].chackOne) {
                     o.numList[i].chackOne = !1;
                     let m = o.numTow.indexOf(g);
                     m > -1 && o.numTow.splice(m, 1);
                  } else {
                     (o.numList[i].chackOne = !0), (o.numList[i].chackTow = !1);
                     let m = o.numOne.indexOf(r);
                     m > -1 && o.numOne.splice(m, 1), o.numTow.push(g);
                  }
               else if (o.numList[i].chackTow) {
                  o.numList[i].chackTow = !1;
                  let m = o.numOne.indexOf(r);
                  m > -1 && o.numOne.splice(m, 1);
               } else {
                  (o.numList[i].chackTow = !0), (o.numList[i].chackOne = !1);
                  let m = o.numTow.indexOf(g);
                  m > -1 && o.numTow.splice(m, 1), o.numOne.push(r);
               }
               s("selectNum"), (o.numTow.length > 0 && o.numOne.length > 0) || o.betnumList.length > 0 ? s("showP", !0) : s("showP", !1);
            },
            v = (d, i) => {
               let _ = d.num + "" + d.num;
               if (o.numList[i].chack) {
                  o.numList[i].chack = !1;
                  let r = o.betnumList.indexOf(_);
                  r > -1 && o.betnumList.splice(r, 1);
               } else o.betnumList.push(_), o.betnumList.sort(), (o.numList[i].chack = !0);
               o.numChack || o.betnumList.length > 0 || (o.numTow.length > 0 && o.numOne.length > 0) ? s("showP", !0) : s("showP", !1);
            },
            p = (d, i) => {
               s("onQuestion", d, i);
            };
         return (
            he(() => {}),
            (d, i) => {
               const _ = U("van-icon");
               return (
                  n(),
                  a("div", wy, [
                     e("div", Ly, [E(t(d.$t("k3bet2Desc1")), 1), d.OddsList[20] ? (n(), a("span", Iy, "(" + t(d.OddsList[20].playRate ? d.OddsList[20].playRate : d.OddsList[20].playRate_Original) + ")", 1)) : B("", !0), L(_, { onClick: i[0] || (i[0] = r => p(d.$t("k3bet2Desc2"), [5, 5])), class: "icon", color: "#FA574A", size: "16", name: "question" })]),
                     e("div", Sy, [
                        (n(!0),
                        a(
                           N,
                           null,
                           D(d.numList, (r, g) => (n(), a("div", { class: M({ active: r.chack }), key: g, onClick: m => v(r, g) }, [e("div", null, t(r.num) + t(r.num), 1)], 10, Gy))),
                           128,
                        )),
                     ]),
                     e("div", xy, [E(t(d.$t("k3bet2Desc3")), 1), d.OddsList[19] ? (n(), a("span", By, "(" + t(d.OddsList[19].playRate ? d.OddsList[19].playRate : d.OddsList[19].playRate_Original) + ")", 1)) : B("", !0), L(_, { onClick: i[1] || (i[1] = r => p(d.$t("k3bet2Desc4"), [6, 1, 6])), class: "icon", color: "#FA574A", size: "16", name: "question" })]),
                     e("div", Ny, [
                        (n(!0),
                        a(
                           N,
                           null,
                           D(d.numList, (r, g) => (n(), a("div", { class: M({ active: r.chackOne }), key: g, onClick: m => u(r, g, 1) }, [e("div", My, t(r.num) + t(r.num), 1)], 10, Ry))),
                           128,
                        )),
                     ]),
                     e("div", Dy, [
                        (n(!0),
                        a(
                           N,
                           null,
                           D(d.numList, (r, g) => (n(), a("div", { class: M({ active: r.chackTow }), key: g, onClick: m => u(r, g, 2) }, [e("div", Py, t(r.num), 1)], 10, Ay))),
                           128,
                        )),
                     ]),
                  ])
               );
            }
         );
      },
   });
const Vy = H(Oy, [["__scopeId", "data-v-279c5cea"]]),
   Wy = { class: "K3B__C-betting3" },
   Hy = { class: "K3B__C-betting3-tip1" },
   zy = { key: 0 },
   Ey = { class: "K3B__C-betting3-line1 mb30" },
   Fy = ["onClick"],
   jy = { class: "K3B__C-betting3-tip1" },
   Uy = { key: 0 },
   qy = V({
      __name: "Betting3",
      props: { OddsList: {}, numList: {}, betnumList: {}, numChack: {}, numTow: {}, numOne: {} },
      emits: ["showP", "upAll", "selectNum", "cNumChack", "onQuestion"],
      setup(l, { emit: s }) {
         const o = l,
            u = (d, i) => {
               let _ = d.num + "" + d.num + d.num;
               if (o.numList[i].chack) {
                  o.numList[i].chack = !1;
                  let r = o.betnumList.indexOf(_);
                  r > -1 && o.betnumList.splice(r, 1);
               } else o.betnumList.push(_), o.betnumList.sort(), (o.numList[i].chack = !0);
               o.numChack || o.betnumList.length > 0 || (o.numTow.length > 0 && o.numOne.length > 0) ? s("showP", !0) : s("showP", !1);
            },
            v = () => {
               s("cNumChack"),
                  lt(() => {
                     o.numChack || o.betnumList.length > 0 || o.numTow.length > 1 || o.numOne.length > 2 ? s("showP", !0) : s("showP", !1);
                  });
            },
            p = (d, i) => {
               s("onQuestion", d, i);
            };
         return (
            he(() => {}),
            (d, i) => {
               const _ = U("van-icon");
               return (
                  n(),
                  a("div", Wy, [
                     e("div", Hy, [E(t(d.$t("k3bet3Desc1")) + " ", 1), d.OddsList[21] ? (n(), a("span", zy, "(" + t(d.OddsList[21].playRate ? d.OddsList[21].playRate : d.OddsList[21].playRate_Original) + ")", 1)) : B("", !0), L(_, { onClick: i[0] || (i[0] = r => p(d.$t("k3bet3Desc2"), [6, 6, 6])), class: "icon", color: "#FA574A", size: "16", name: "question" })]),
                     e("div", Ey, [
                        (n(!0),
                        a(
                           N,
                           null,
                           D(d.numList, (r, g) => (n(), a("div", { class: M({ active: r.chack }), key: g, onClick: m => u(r, g) }, [e("div", null, t(r.num) + t(r.num) + t(r.num), 1)], 10, Fy))),
                           128,
                        )),
                     ]),
                     e("div", jy, [E(t(d.$t("k3bet3Desc3")) + " ", 1), d.OddsList[22] ? (n(), a("span", Uy, "(" + t(d.OddsList[22].playRate ? d.OddsList[22].playRate : d.OddsList[22].playRate_Original) + ")", 1)) : B("", !0), L(_, { onClick: i[1] || (i[1] = r => p(d.$t("k3bet3Desc5"), [7, 7, 7])), class: "icon", color: "#FA574A", size: "16", name: "question" })]),
                     e("div", { class: M(["K3B__C-betting3-btn", { active: o.numChack }]), onClick: v }, t(d.$t("k3bet3Desc4")), 3),
                  ])
               );
            }
         );
      },
   });
const Ky = H(qy, [["__scopeId", "data-v-ef8ad3e9"]]),
   Zy = { class: "K3B__C-betting4" },
   Xy = { class: "K3B__C-betting4-tip1" },
   Jy = { key: 0 },
   Yy = { class: "K3B__C-betting4-line1 mb30" },
   Qy = ["onClick"],
   ef = { class: "K3B__C-betting4-tip1" },
   tf = { key: 0 },
   sf = { class: "K3B__C-betting4-tip1" },
   nf = { key: 0 },
   af = { class: "K3B__C-betting4-line1" },
   of = ["onClick"],
   lf = V({
      __name: "Betting4",
      props: { OddsList: {}, numList: {}, numTow: {}, numOne: {}, numChack: {}, betnumList: {} },
      emits: ["showP", "upAll", "selectNum", "cNumChack", "onQuestion"],
      setup(l, { emit: s }) {
         const o = l,
            u = (d, i, _) => {
               if (_ == 1)
                  if (o.numList[i].chackOne) {
                     o.numList[i].chackOne = !1;
                     var r = o.numOne.indexOf(d.num);
                     r > -1 && o.numOne.splice(r, 1);
                  } else (o.numList[i].chackOne = !0), o.numOne.push(d.num), o.numOne.sort();
               else if (o.numList[i].chackTow) {
                  o.numList[i].chackTow = !1;
                  var i = o.numTow.indexOf(d.num);
                  i > -1 && o.numTow.splice(i, 1);
               } else (o.numList[i].chackTow = !0), o.numTow.push(d.num), o.numTow.sort();
               o.numChack || o.numTow.length > 1 || o.numOne.length > 2 ? s("showP", !0) : s("showP", !1);
            },
            v = (d, i) => {
               s("onQuestion", d, i);
            },
            p = () => {
               s("cNumChack"),
                  lt(() => {
                     o.numChack || o.betnumList.length > 0 || o.numTow.length > 1 || o.numOne.length > 2 ? s("showP", !0) : s("showP", !1);
                  });
            };
         return (
            he(() => {}),
            (d, i) => {
               const _ = U("van-icon");
               return (
                  n(),
                  a("div", Zy, [
                     e("div", Xy, [E(t(d.$t("k3bet4Desc1")) + " ", 1), d.OddsList[23] ? (n(), a("span", Jy, "(" + t(d.OddsList[23].playRate ? d.OddsList[23].playRate : d.OddsList[23].playRate_Original) + ")", 1)) : B("", !0), L(_, { onClick: i[0] || (i[0] = r => v(d.$t("k3bet4Desc2"), [1, 2, 4])), class: "icon", color: "#FA574A", size: "16", name: "question" })]),
                     e("div", Yy, [
                        (n(!0),
                        a(
                           N,
                           null,
                           D(d.numList, (r, g) => (n(), a("div", { class: M({ active: r.chackOne }), key: g, onClick: m => u(r, g, 1) }, [e("div", null, t(r.num), 1)], 10, Qy))),
                           128,
                        )),
                     ]),
                     e("div", ef, [E(t(d.$t("k3bet4Desc3")) + " ", 1), d.OddsList[24] ? (n(), a("span", tf, "(" + t(d.OddsList[24].playRate ? d.OddsList[24].playRate : d.OddsList[24].playRate_Original) + ")", 1)) : B("", !0), L(_, { onClick: i[1] || (i[1] = r => v(d.$t("k3bet4Desc4"), [1, 2, 3])), class: "icon", color: "#FA574A", size: "16", name: "question" })]),
                     e("div", { class: M(["K3B__C-betting4-btn", { active: d.numChack }]), onClick: p }, t(d.$t("betPopDesc7")), 3),
                     e("div", sf, [E(t(d.$t("k3bet4Desc5")) + " ", 1), d.OddsList[18] ? (n(), a("span", nf, "(" + t(d.OddsList[18].playRate ? d.OddsList[18].playRate : d.OddsList[18].playRate_Original) + ")", 1)) : B("", !0), L(_, { onClick: i[2] || (i[2] = r => v(d.$t("k3bet4Desc6"), [1, 2])), class: "icon", color: "#FA574A", size: "16", name: "question" })]),
                     e("div", af, [
                        (n(!0),
                        a(
                           N,
                           null,
                           D(d.numList, (r, g) => (n(), a("div", { class: M({ active: r.chackTow }), key: g, onClick: m => u(r, g, 2) }, [e("div", null, t(r.num), 1)], 10, of))),
                           128,
                        )),
                     ]),
                  ])
               );
            }
         );
      },
   });
const cf = H(lf, [["__scopeId", "data-v-f4e1a453"]]),
   uf = l => (ye("data-v-fb6cae46"), (l = l()), fe(), l),
   rf = { class: "Betting__Popup-body" },
   df = { key: 0, class: "Betting__Popup-type1" },
   _f = { class: "title" },
   vf = { class: "list" },
   pf = { key: 0, class: "Betting__Popup-type2" },
   mf = { class: "title" },
   gf = { class: "list" },
   hf = { key: 1, class: "Betting__Popup-type2" },
   yf = { class: "title" },
   ff = { class: "list" },
   bf = ["innerHTML"],
   $f = { key: 0, class: "Betting__Popup-type2" },
   Cf = { class: "title" },
   kf = { class: "list" },
   Tf = { key: 1, class: "title" },
   wf = { key: 2, class: "Betting__Popup-type2-r" },
   Lf = { key: 0, class: "Betting__Popup-type2" },
   If = { class: "title" },
   Sf = { class: "list" },
   Gf = { key: 1, class: "title" },
   xf = { key: 2, class: "Betting__Popup-type2-r" },
   Bf = { key: 3, class: "Betting__Popup-type2" },
   Nf = { class: "title" },
   Rf = { class: "list" },
   Mf = { class: "Betting__Popup-body-line" },
   Df = { class: "Betting__Popup-body-line-list" },
   Af = ["onClick"],
   Pf = { class: "Betting__Popup-body-line" },
   Of = { class: "Betting__Popup-body-line-btnL" },
   Vf = { class: "Betting__Popup-body-line" },
   Wf = uf(() => e("div", null, null, -1)),
   Hf = { class: "Betting__Popup-body-line-list" },
   zf = ["onClick"],
   Ef = { class: "Betting__Popup-body-line" },
   Ff = { class: "Betting__Popup-foot" },
   jf = { class: "Betting__Popup-foot-s bgcolor" },
   Uf = { class: "Betting__Popup-PreSale" },
   qf = { class: "Betting__Popup-PreSale-head" },
   Kf = { class: "Betting__Popup-PreSale-body" },
   Zf = { class: "Betting__Popup-PreSale-foot" },
   Xf = V({
      __name: "BettingPopup",
      props: { currentInfo: {}, currentGame: {}, bettingPopupShow: {}, betTypeList: {}, betnumList: {}, numTow: {}, numOne: {}, actNav: {}, numTowList: {}, numChack: {} },
      emits: ["update:bettingPopupShow", "update:selectInfo", "clearBetting", "submitBetting"],
      setup(l, { expose: s, emit: o }) {
         const u = l,
            { t: v } = _e(),
            p = k(!1),
            d = k(!0),
            i = q(() => u.currentGame.betMultiple.split("|"));
         Ve(
            () => u.bettingPopupShow,
            () => {
               (_.value.coin = Number(u.betTypeList[0])), (_.value.count = i.value[0]);
            },
         );
         const _ = k({ coin: 0, count: i.value[0], allCoin: 0, gametype: 0, typeid: 1, issuenumber: "", selecttype: "1" });
         Ve(
            () => i,
            () => {
               _.value.count = i.value[0];
            },
            { deep: !0, immediate: !0 },
         );
         let r = q({
            get() {
               return T(), u.bettingPopupShow || !1;
            },
            set(S) {
               o("update:bettingPopupShow", S);
            },
         });
         const g = S => {
               switch (S) {
                  case 1:
                     _.value.count > 1 && (_.value.count--, T());
                     break;
                  case 2:
                     _.value.count++, T();
                     break;
               }
            },
            m = S => {
               S > 0 && ((_.value.count = parseInt(S)), T());
            },
            $ = S => {
               (_.value.count = S), T();
            },
            y = S => {
               (_.value.coin = S), T();
            },
            C = () => {
               (p.value = !1), (d.value = !0);
            },
            f = async () => {
               if (!d.value) {
                  Ct(v("agreePresaleRules"));
                  return;
               }
               let { coin: S, count: G, selecttype: R } = _.value;
               if (G == 0) return Ee(v("bteNoCount"));
               let O = null,
                  P = u.betnumList;
               if (u.actNav === 0 && u.betnumList.length) {
                  (O = b(u.betnumList)), P.sort();
                  for (let J = 0; P.length > J; J++) P[J] == "A" && (P[J] = "H"), P[J] == "B" && (P[J] = "L"), P[J] == "C" && (P[J] = "O"), P[J] == "D" && (P[J] = "E");
                  R = P.join(",");
               } else if (u.actNav == 1) {
                  let J = [],
                     le = "",
                     ie = "";
                  if (P.length > 0) {
                     let ne = [];
                     for (let z = 0; P.length > z; z++) {
                        let X = "|" + P[z] + "|";
                        ne.push(X);
                     }
                     (ie = ne.join(",")), J.push(6);
                  }
                  if (u.numTowList.length > 0) {
                     let ne = [],
                        z = [];
                     for (let X = 0; u.numOne.length > X; X++) {
                        let ce = ":" + u.numOne[X] + ":";
                        ne.push(ce), (ne = ne.sort());
                     }
                     for (let X = 0; u.numTow.length > X; X++) {
                        let ce = ":" + u.numTow[X] + ":";
                        z.push(ce), (z = z.sort());
                     }
                     (le = z.join(",") + "," + ne.join(",")), J.push(5);
                  }
                  (J = J.sort((ne, z) => ne - z)), (O = J.join(",")), le && (R = le), ie && (R = ie), le && ie && (R = le + "," + ie);
               } else if (u.actNav == 2) {
                  let J = [],
                     le = "",
                     ie = "";
                  if (P.length > 0) {
                     let ne = [];
                     for (let z = 0; P.length > z; z++) {
                        let X = "|" + P[z] + "|";
                        ne.push(X), (ne = ne.sort());
                     }
                     (le = ne.join(",")), J.push(7);
                  }
                  u.numChack && ((ie = "|AAA|"), J.push(8)), (J = J.sort((ne, z) => ne - z)), (O = J.join(",")), le && (R = le), ie && (R = ie), le && ie && (R = le + "," + ie);
               } else if (u.actNav == 3) {
                  let J = [],
                     le = "",
                     ie = "",
                     ne = "";
                  if (u.numOne.length > 2) {
                     let z = [];
                     for (let X = 0; u.numOne.length > X; X++) {
                        let ce = "|" + u.numOne[X] + "|";
                        z.push(ce), (z = z.sort());
                     }
                     (le = z.join(",")), J.push(9);
                  }
                  if ((u.numChack && ((ie = "|ABC|"), J.push(10)), u.numTow.length > 1)) {
                     let z = [];
                     for (let X = 0; u.numTow.length > X; X++) {
                        let ce = "." + u.numTow[X] + ".";
                        z.push(ce), (z = z.sort());
                     }
                     (ne = z.join(",")), J.push(4);
                  }
                  (J = J.sort((z, X) => z - X)), (O = J.join(",")), ne && (R = ne), le && (R = le), ie && (R = ie), le && ie && (R = le + "," + ie), ne && le && (R = ne + "," + le), ne && ie && (R = ne + "," + ie), ne && le && ie && (R = ne + "," + le + "," + ie);
               }
               const W = await de(Oa({ amount: S, betCount: Number(G), gameType: O, selectType: R, typeId: u.currentGame.typeID, issuenumber: u.currentInfo.gameNo }));
               (W == null ? void 0 : W.code) === 0 ? (Ct(v("code" + (W == null ? void 0 : W.msgCode))), o("submitBetting", u.currentInfo.gameNo)) : o("clearBetting");
            },
            b = S => {
               let G = [];
               for (let R = 0; S.length > R; R++) {
                  if (S[R] == "3" || S[R] == "4" || S[R] == "5" || S[R] == "6" || S[R] == "7" || S[R] == "8" || S[R] == "9" || S[R] == "10" || S[R] == "11" || S[R] == "12" || S[R] == "13" || S[R] == "14" || S[R] == "15" || S[R] == "16" || S[R] == "17" || S[R] == "18") {
                     G.push(1);
                     continue;
                  }
                  if (S[R] == "A" || S[R] == "B") {
                     G.push(2);
                     continue;
                  }
                  if (S[R] == "C" || S[R] == "D") {
                     G.push(3);
                     continue;
                  }
               }
               return (
                  (G = G.sort(function (R, O) {
                     return R - O;
                  })),
                  [...new Set(G)].join(",")
               );
            },
            T = () => {
               const S = u.betnumList.length + h() + (u.numChack ? 1 : 0) + w(u.numOne, 3) + w(u.numTow);
               _.value.allCoin = _.value.coin * _.value.count * S;
            },
            h = () => {
               const S = u.numTowList.length;
               return S && u.numTowList[0].split("|")[1].split(",").length * S;
            },
            w = (S, G = 2) => {
               if (u.actNav != 3) return 0;
               function R(P) {
                  let W = 1;
                  for (let J = 2; J <= P; J++) W *= J;
                  return W;
               }
               const O = S.length;
               return O < G ? 0 : R(O) / (R(G) * R(O - G));
            },
            I = S => {
               switch (S) {
                  case "A":
                     return v("betBig");
                  case "B":
                     return v("betSmall");
                  case "C":
                     return v("betOdd");
                  case "D":
                     return v("betEven");
                  default:
                     return S;
               }
            },
            x = S => {
               let G = S.split("|"),
                  R = "";
               return (
                  G.forEach(O => {
                     R += `<div>${O}</div>`;
                  }),
                  R
               );
            };
         return (
            s({ setAllCoin: T }),
            (S, G) => {
               const R = U("van-field"),
                  O = U("van-popup"),
                  P = Te("throttle-click");
               return (
                  n(),
                  a(
                     N,
                     null,
                     [
                        L(
                           O,
                           { show: c(r), "onUpdate:show": G[6] || (G[6] = W => (it(r) ? (r.value = W) : (r = W))), position: "bottom", style: { "box-shadow": "0px -18px 40px rgba(37, 37, 60, 0.26)" }, round: !0, overlay: !1, "close-on-click-overlay": !1, "lock-scroll": !1 },
                           {
                              default: A(() => [
                                 e("div", rf, [
                                    S.actNav === 0 && S.betnumList.length
                                       ? (n(),
                                         a("div", df, [
                                            e("p", _f, t(S.$t("betPopDesc1")), 1),
                                            e("div", vf, [
                                               (n(!0),
                                               a(
                                                  N,
                                                  null,
                                                  D(S.betnumList, (W, J) => (n(), a("div", { class: M(W % 2 === 0 ? "green" : "red num" + W), key: J }, t(I(W)), 3))),
                                                  128,
                                               )),
                                            ]),
                                         ]))
                                       : B("", !0),
                                    S.actNav === 1
                                       ? (n(),
                                         a(
                                            N,
                                            { key: 1 },
                                            [
                                               S.betnumList.length
                                                  ? (n(),
                                                    a("div", pf, [
                                                       e("p", mf, t(S.$t("betPopDesc2")), 1),
                                                       e("div", gf, [
                                                          (n(!0),
                                                          a(
                                                             N,
                                                             null,
                                                             D(S.betnumList, (W, J) => (n(), a("div", { key: J, class: "Betting__Popup-type2-d" }, t(I(W)), 1))),
                                                             128,
                                                          )),
                                                       ]),
                                                    ]))
                                                  : B("", !0),
                                               S.numTowList.length
                                                  ? (n(),
                                                    a("div", hf, [
                                                       e("p", yf, t(S.$t("betPopDesc3")), 1),
                                                       e("div", ff, [
                                                          (n(!0),
                                                          a(
                                                             N,
                                                             null,
                                                             D(S.numTowList, (W, J) => (n(), a("div", { key: J, class: "Betting__Popup-type2-o", innerHTML: x(W) }, null, 8, bf))),
                                                             128,
                                                          )),
                                                       ]),
                                                    ]))
                                                  : B("", !0),
                                            ],
                                            64,
                                         ))
                                       : B("", !0),
                                    S.actNav === 2
                                       ? (n(),
                                         a(
                                            N,
                                            { key: 2 },
                                            [
                                               S.betnumList.length
                                                  ? (n(),
                                                    a("div", $f, [
                                                       e("p", Cf, t(S.$t("betPopDesc4")), 1),
                                                       e("div", kf, [
                                                          (n(!0),
                                                          a(
                                                             N,
                                                             null,
                                                             D(S.betnumList, (W, J) => (n(), a("div", { key: J, class: "Betting__Popup-type2-d" }, t(I(W)), 1))),
                                                             128,
                                                          )),
                                                       ]),
                                                    ]))
                                                  : B("", !0),
                                               S.numChack ? (n(), a("p", Tf, t(S.$t("betPopDesc5")), 1)) : B("", !0),
                                               S.numChack ? (n(), a("div", wf, t(S.$t("k3bet3Desc4")), 1)) : B("", !0),
                                            ],
                                            64,
                                         ))
                                       : B("", !0),
                                    S.actNav === 3
                                       ? (n(),
                                         a(
                                            N,
                                            { key: 3 },
                                            [
                                               S.numOne.length > 2
                                                  ? (n(),
                                                    a("div", Lf, [
                                                       e("p", If, t(S.$t("betPopDesc6")), 1),
                                                       e("div", Sf, [
                                                          (n(!0),
                                                          a(
                                                             N,
                                                             null,
                                                             D(S.numOne, (W, J) => (n(), a("div", { key: J, class: "Betting__Popup-type2-d" }, t(I(W)), 1))),
                                                             128,
                                                          )),
                                                       ]),
                                                    ]))
                                                  : B("", !0),
                                               S.numChack ? (n(), a("p", Gf, t(S.$t("betPopDesc7")), 1)) : B("", !0),
                                               S.numChack ? (n(), a("div", xf, t(S.$t("betPopDesc7")), 1)) : B("", !0),
                                               S.numTow.length > 1
                                                  ? (n(),
                                                    a("div", Bf, [
                                                       e("p", Nf, t(S.$t("betPopDesc8")), 1),
                                                       e("div", Rf, [
                                                          (n(!0),
                                                          a(
                                                             N,
                                                             null,
                                                             D(S.numTow, (W, J) => (n(), a("div", { key: J, class: "Betting__Popup-type2-d" }, t(I(W)), 1))),
                                                             128,
                                                          )),
                                                       ]),
                                                    ]))
                                                  : B("", !0),
                                            ],
                                            64,
                                         ))
                                       : B("", !0),
                                    e("div", Mf, [
                                       E(t(c(v)("amount")) + " ", 1),
                                       e("div", Df, [
                                          (n(!0),
                                          a(
                                             N,
                                             null,
                                             D(S.betTypeList, (W, J) => (n(), a("div", { key: J, class: M(["Betting__Popup-body-line-item", { bgcolor: _.value.coin == W }]), onClick: le => y(W) }, t(W), 11, Af))),
                                             128,
                                          )),
                                       ]),
                                    ]),
                                    e("div", Pf, [E(t(c(v)("numbers")) + " ", 1), e("div", Of, [e("div", { class: M(["Betting__Popup-btn", { bgcolor: _.value.count > 0 }]), onClick: G[0] || (G[0] = W => g(1)) }, "-", 2), L(R, { class: "Betting__Popup-input", modelValue: _.value.count, "onUpdate:modelValue": G[1] || (G[1] = W => (_.value.count = W)), type: "digit", maxlength: 4, onInput: m }, null, 8, ["modelValue"]), e("div", { class: "Betting__Popup-btn bgcolor", onClick: G[2] || (G[2] = W => g(2)) }, "+")])]),
                                    e("div", Vf, [
                                       Wf,
                                       e("div", Hf, [
                                          (n(!0),
                                          a(
                                             N,
                                             null,
                                             D(i.value, (W, J) => (n(), a("div", { key: J, class: M(["Betting__Popup-body-line-item", { bgcolor: _.value.count == W }]), onClick: le => $(W) }, " X" + t(W), 11, zf))),
                                             128,
                                          )),
                                       ]),
                                    ]),
                                    e("div", Ef, [e("span", { class: M(["Betting__Popup-agree", { active: d.value }]), onClick: G[3] || (G[3] = W => (d.value = !d.value)) }, t(c(v)("agree")), 3), e("span", { onClick: G[4] || (G[4] = W => (p.value = !0)), class: "Betting__Popup-preSaleShow" }, t(c(v)("presaleRules")), 1)]),
                                 ]),
                                 e("div", Ff, [e("div", { class: "Betting__Popup-foot-c", onClick: G[5] || (G[5] = W => o("clearBetting")) }, t(c(v)("cancel")), 1), te((n(), a("div", jf, [E(t(c(v)("totalAmount")) + " " + t(c(Be)(_.value.allCoin || 0)), 1)])), [[P, { handler: f, wait: 2e3 }]])]),
                              ]),
                              _: 1,
                           },
                           8,
                           ["show"],
                        ),
                        L(O, { show: p.value, "onUpdate:show": G[7] || (G[7] = W => (p.value = W)), "close-on-click-overlay": !1, round: "" }, { default: A(() => [e("div", Uf, [e("div", qf, t(c(v)("presaleRules")), 1), e("div", Kf, t(S.$t("betPopTXT")), 1), e("div", Zf, [e("div", { class: "Betting__Popup-PreSale-foot-btn", onClick: C }, t(c(v)("iKonw")), 1)])])]), _: 1 }, 8, ["show"]),
                     ],
                     64,
                  )
               );
            }
         );
      },
   });
const Jf = H(Xf, [["__scopeId", "data-v-fb6cae46"]]),
   Yf = { class: "K3B__C" },
   Qf = { class: "K3B__C-mark" },
   e8 = { class: "K3B__C-nav" },
   t8 = ["onClick"],
   s8 = { class: "qpopup-box" },
   n8 = { class: "qpopup-box-list" },
   a8 = { class: "qpopup-box-txt" },
   o8 = V({
      __name: "Betting",
      props: { currentInfo: { type: Object, default: () => ({}) }, ProhibitBuyTime: { type: Number, default: 5 }, currentGame: { type: Object, default: () => ({}) } },
      emits: ["betting", "changeBettingP"],
      setup(l, { expose: s, emit: o }) {
         const u = l,
            { t: v } = _e(),
            p = { bt1: Ty, bt2: Vy, bt3: Ky, bt4: cf },
            d = k(),
            i = k(),
            _ = k([]),
            r = k(0),
            g = k([
               { name: v("totalBet"), comp: "bt1" },
               { name: v("sameNum"), comp: "bt2" },
               { name: v("numbersMatch"), comp: "bt3" },
               { name: v("numbersUnmatch"), comp: "bt4" },
            ]),
            m = k([
               { num: 1, chack: !1, chackOne: !1, chackTow: !1 },
               { num: 2, chack: !1, chackOne: !1, chackTow: !1 },
               { num: 3, chack: !1, chackOne: !1, chackTow: !1 },
               { num: 4, chack: !1, chackOne: !1, chackTow: !1 },
               { num: 5, chack: !1, chackOne: !1, chackTow: !1 },
               { num: 6, chack: !1, chackOne: !1, chackTow: !1 },
            ]),
            $ = k([]),
            y = k([]),
            C = k([]),
            f = k(!1),
            b = k([]),
            T = k(!1),
            h = q(() => (u.currentInfo.passTime < u.ProhibitBuyTime && I(), u.currentInfo.passTime < u.ProhibitBuyTime)),
            w = q(() => (u.currentGame.scope ? u.currentGame.scope.split("|").map(ne => Number(ne)) : [])),
            I = () => {
               (T.value = !1), x();
            },
            x = () => {
               i.value.clearList && i.value.clearList(),
                  ($.value = []),
                  (y.value = []),
                  (C.value = []),
                  (f.value = !1),
                  (b.value = []),
                  (m.value = [
                     { num: 1, chack: !1, chackOne: !1, chackTow: !1 },
                     { num: 2, chack: !1, chackOne: !1, chackTow: !1 },
                     { num: 3, chack: !1, chackOne: !1, chackTow: !1 },
                     { num: 4, chack: !1, chackOne: !1, chackTow: !1 },
                     { num: 5, chack: !1, chackOne: !1, chackTow: !1 },
                     { num: 6, chack: !1, chackOne: !1, chackTow: !1 },
                  ]);
            },
            S = async () => {
               const ne = await de(Hl());
               _.value = (ne == null ? void 0 : ne.data) || [];
            },
            G = () => {
               d.value.setAllCoin();
            },
            R = ne => {
               (r.value = ne), (T.value = !1), x();
            },
            O = () => {
               let ne = [];
               for (let z = 0; y.value.length > z; z++) {
                  let X = y.value[z],
                     ce = [];
                  for (let Ne = 0; C.value.length > Ne; Ne++) ce.push(C.value[Ne]);
                  if (ce.length > 0) {
                     let Ne = ce.sort().join(",");
                     ne.push(X + "|" + Ne);
                  }
               }
               b.value = ne.sort();
            },
            P = async ne => {
               o("betting", ne), (T.value = !1), x();
            },
            W = k(!1),
            J = k([]),
            le = k(""),
            ie = (ne, z) => {
               (le.value = ne), (J.value = z), (W.value = !0);
            };
         return (
            he(() => {
               S();
            }),
            s({ bettingPopupShow: T }),
            (ne, z) => {
               const X = U("van-popup");
               return (
                  n(),
                  a("div", Yf, [
                     te(e("div", Qf, [e("div", null, t(u.currentInfo.time3 || "0"), 1), e("div", null, t(u.currentInfo.time4 || "0"), 1)], 512), [[He, h.value]]),
                     e("div", e8, [
                        (n(!0),
                        a(
                           N,
                           null,
                           D(g.value, (ce, Ne) => (n(), a("div", { key: Ne, class: M({ active: r.value == Ne }), onClick: Se => R(Ne) }, t(ce.name), 11, t8))),
                           128,
                        )),
                     ]),
                     (n(), Z(ft(p[g.value[r.value].comp]), { ref_key: "BetRef", ref: i, OddsList: _.value, numList: m.value, numTow: y.value, numOne: C.value, numChack: f.value, betnumList: $.value, onSelectNum: O, onShowP: z[0] || (z[0] = ce => (T.value = ce)), onUpAll: G, onCNumChack: z[1] || (z[1] = ce => (f.value = !f.value)), onOnQuestion: ie }, null, 40, ["OddsList", "numList", "numTow", "numOne", "numChack", "betnumList"])),
                     L(Jf, { ref_key: "betPopupRef", ref: d, currentInfo: u.currentInfo, bettingPopupShow: T.value, numTow: y.value, numOne: C.value, betTypeList: w.value, numTowList: b.value, currentGame: l.currentGame, actNav: r.value, betnumList: $.value, numChack: f.value, onClearBetting: I, onSubmitBetting: P }, null, 8, ["currentInfo", "bettingPopupShow", "numTow", "numOne", "betTypeList", "numTowList", "currentGame", "actNav", "betnumList", "numChack"]),
                     L(
                        X,
                        { class: "qpopup", show: W.value, "onUpdate:show": z[2] || (z[2] = ce => (W.value = ce)), "close-on-click-overlay": !1, closeable: "", "close-icon": "close", "close-icon-position": "bottom-left", round: "" },
                        {
                           default: A(() => [
                              e("div", s8, [
                                 e("div", n8, [
                                    (n(!0),
                                    a(
                                       N,
                                       null,
                                       D(J.value, (ce, Ne) => (n(), a("div", { class: M("num num" + ce), key: Ne }, null, 2))),
                                       128,
                                    )),
                                 ]),
                                 e("div", a8, t(le.value), 1),
                              ]),
                           ]),
                           _: 1,
                        },
                        8,
                        ["show"],
                     ),
                  ])
               );
            }
         );
      },
   });
const l8 = H(o8, [["__scopeId", "data-v-67c1f5a3"]]),
   i8 = { class: "GameRecord__C" },
   c8 = { class: "GameRecord__C-head" },
   u8 = { class: "GameRecord__C-body" },
   r8 = { class: "GameRecord__C-body-premium" },
   d8 = { key: 1, class: "GameRecord__C-body-empty" },
   _8 = { key: 0, class: "GameRecord__C-foot" },
   v8 = { class: "GameRecord__C-foot-page" },
   p8 = V({
      __name: "GameRecord",
      props: { typeid: {} },
      setup(l, { expose: s }) {
         const o = l,
            u = k([]),
            v = k(4),
            p = k(10),
            d = k(1),
            i = () => {
               d.value--, r();
            },
            _ = () => {
               d.value++, r();
            },
            r = async (g = !1) => {
               if (o.typeid == null) return;
               g && (d.value = 1);
               const [m, $] = await ct(Sn({ pageSize: p.value, pageNo: d.value, typeId: o.typeid }));
               (u.value = $.list || []), (v.value = $.totalPage);
            };
         return (
            s({ getData: r }),
            kt(() => {
               r();
            }),
            (g, m) => {
               const $ = U("van-col"),
                  y = U("van-row"),
                  C = U("van-icon");
               return (
                  n(),
                  a("div", i8, [
                     e("div", c8, [L(y, null, { default: A(() => [L($, { span: "10" }, { default: A(() => [E(t(g.$t("gameRecordNum")), 1)]), _: 1 }), L($, { span: "4" }, { default: A(() => [E(t(g.$t("gameRecordTotal")), 1)]), _: 1 }), L($, { span: "10" }, { default: A(() => [E(t(g.$t("gameRecordResult")), 1)]), _: 1 })]), _: 1 })]),
                     e("div", u8, [
                        u.value.length
                           ? (n(!0),
                             a(
                                N,
                                { key: 0 },
                                D(
                                   u.value,
                                   (f, b) => (
                                      n(),
                                      Z(
                                         y,
                                         { key: b },
                                         {
                                            default: A(() => [
                                               L($, { span: "8" }, { default: A(() => [E(t(f.issueNumber), 1)]), _: 2 }, 1024),
                                               L($, { span: "1" }, { default: A(() => [e("span", null, t(f.sumCount), 1)]), _: 2 }, 1024),
                                               L($, { span: "4" }, { default: A(() => [e("span", null, t(f.sumCount > 10 ? g.$t("big") : g.$t("small")), 1)]), _: 2 }, 1024),
                                               L($, { span: "4" }, { default: A(() => [e("span", null, t(f.sumCount % 2 ? g.$t("k3Odd") : g.$t("k3Even")), 1)]), _: 2 }, 1024),
                                               L(
                                                  $,
                                                  { span: "6" },
                                                  {
                                                     default: A(() => [
                                                        e("div", r8, [
                                                           (n(!0),
                                                           a(
                                                              N,
                                                              null,
                                                              D(f.premium, (T, h) => (n(), a("div", { key: h, class: M("n" + T) }, null, 2))),
                                                              128,
                                                           )),
                                                        ]),
                                                     ]),
                                                     _: 2,
                                                  },
                                                  1024,
                                               ),
                                            ]),
                                            _: 2,
                                         },
                                         1024,
                                      )
                                   ),
                                ),
                                128,
                             ))
                           : (n(), a("div", d8, [L(gt)])),
                     ]),
                     u.value.length ? (n(), a("div", _8, [e("div", { class: M(["GameRecord__C-foot-previous", { disabled: d.value <= 1 }]), onClick: i }, [L(C, { name: "arrow-left", class: "GameRecord__C-icon", size: "20" })], 2), e("div", v8, t(d.value) + "/" + t(v.value), 1), e("div", { class: M(["GameRecord__C-foot-next", { disabled: d.value >= v.value }]), onClick: _ }, [L(C, { name: "arrow", class: "GameRecord__C-icon", size: "20" })], 2)])) : B("", !0),
                  ])
               );
            }
         );
      },
   });
const m8 = H(p8, [["__scopeId", "data-v-d091a632"]]),
   g8 = { class: "Trend__C" },
   h8 = { class: "Trend__C-head" },
   y8 = { class: "Trend__C-body" },
   f8 = { class: "Trend__C-body-premium" },
   b8 = { class: "Trend__C-body-gameText" },
   $8 = { key: 1, class: "Trend__C-body-empty" },
   C8 = { key: 0, class: "Trend__C-foot" },
   k8 = { class: "Trend__C-foot-page" },
   T8 = V({
      __name: "Trend",
      props: { typeid: {} },
      setup(l, { expose: s }) {
         const o = l,
            { t: u } = _e(),
            v = k([]),
            p = k(4),
            d = k(10),
            i = k(1),
            _ = () => {
               i.value--, g();
            },
            r = () => {
               i.value++, g();
            },
            g = async (y = !1) => {
               if (o.typeid == null) return;
               y && (i.value = 1);
               const [C, f] = await ct(Sn({ pageSize: d.value, pageNo: i.value, typeId: o.typeid }));
               (v.value =
                  f.list.map(b => {
                     let T = [0, 0, 0, 0, 0, 0],
                        h = b.premium.split("").map(Number),
                        w = b.premium.split("").map(Number);
                     for (let I = 0; T.length > I; I++) T[h[I] - 1] = h[I];
                     return (b.Premiums = T), (b.AllEqual = $(w)), b;
                  }) || []),
                  (p.value = f.totalPage);
            },
            m = k([u("trendTXT1"), u("trendTXT2"), u("trendTXT3"), u("trendTXT4")]),
            $ = y => {
               let C = [0, 0, 0, 0, 0, 0],
                  f = y.sort(),
                  b = 2;
               for (let T = 0; T < f.length - 1; T++) f[T] == f[T + 1] && (C[f[T] - 1] = b++);
               return C;
            };
         return (
            s({ getData: g }),
            kt(() => {
               g();
            }),
            (y, C) => {
               const f = U("van-col"),
                  b = U("van-row"),
                  T = U("van-icon");
               return (
                  n(),
                  a("div", g8, [
                     e("div", h8, [L(b, null, { default: A(() => [L(f, { span: "8" }, { default: A(() => [E(t(y.$t("trendNumber")), 1)]), _: 1 }), L(f, { span: "6" }, { default: A(() => [E(t(y.$t("trendResult")), 1)]), _: 1 }), L(f, { span: "10" }, { default: A(() => [E(t(y.$t("trendNum")), 1)]), _: 1 })]), _: 1 })]),
                     e("div", y8, [
                        v.value.length
                           ? (n(!0),
                             a(
                                N,
                                { key: 0 },
                                D(
                                   v.value,
                                   (h, w) => (
                                      n(),
                                      Z(
                                         b,
                                         { key: w },
                                         {
                                            default: A(() => [
                                               L(f, { span: "8" }, { default: A(() => [E(t(h.issueNumber), 1)]), _: 2 }, 1024),
                                               L(
                                                  f,
                                                  { span: "6" },
                                                  {
                                                     default: A(() => [
                                                        e("div", f8, [
                                                           (n(!0),
                                                           a(
                                                              N,
                                                              null,
                                                              D(h.premium, (I, x) => (n(), a("div", { key: x, class: M("n" + I) }, null, 2))),
                                                              128,
                                                           )),
                                                        ]),
                                                     ]),
                                                     _: 2,
                                                  },
                                                  1024,
                                               ),
                                               L(f, { span: "10" }, { default: A(() => [e("div", b8, [e("span", null, t(m.value[h.gameType]), 1)])]), _: 2 }, 1024),
                                            ]),
                                            _: 2,
                                         },
                                         1024,
                                      )
                                   ),
                                ),
                                128,
                             ))
                           : (n(), a("div", $8, [L(gt)])),
                     ]),
                     v.value.length ? (n(), a("div", C8, [e("div", { class: M(["Trend__C-foot-previous", { disabled: i.value <= 1 }]), onClick: _ }, [L(T, { name: "arrow-left", class: "Trend__C-icon", size: "20" })], 2), e("div", k8, t(i.value) + "/" + t(p.value), 1), e("div", { class: M(["Trend__C-foot-next", { disabled: i.value >= p.value }]), onClick: r }, [L(T, { name: "arrow", class: "Trend__C-icon", size: "20" })], 2)])) : B("", !0),
                  ])
               );
            }
         );
      },
   });
const w8 = H(T8, [["__scopeId", "data-v-d7e5d21b"]]),
   L8 = { key: 1, class: "WinningTip__C-body-l1" },
   I8 = { class: "WinningTip__C-body-l2" },
   S8 = { class: "line1" },
   G8 = { class: "line2" },
   x8 = { class: "yuan" },
   B8 = { class: "WinningTip__C-body-l3" },
   N8 = { key: 0, class: "isLose" },
   R8 = { class: "head" },
   M8 = { class: "bonus" },
   D8 = { class: "gameDetail" },
   A8 = { class: "WinningTip__C-body-l4" },
   P8 = ["onClick"],
   O8 = V({
      __name: "WinningTips",
      setup(l, { expose: s }) {
         const o = q(() => (p.value[0] ? p.value[0].state == 0 : !1)),
            u = q(() => p.value[0] || {}),
            v = k(!1),
            p = k([]);
         let d = k();
         const i = () => {
               clearTimeout(d.value),
                  p.value.shift(),
                  v.value &&
                     p.value.length &&
                     (d.value = setTimeout(() => {
                        i();
                     }, 1e3 * 3));
            },
            _ = () => {
               (v.value = !v.value),
                  v.value
                     ? (d.value = setTimeout(() => {
                          i();
                       }, 1e3 * 3))
                     : clearTimeout(d.value);
            },
            r = m => {
               (m.list = m.premium.split("")),
                  (m.sum = Number(m.list[0]) + Number(m.list[1]) + Number(m.list[2])),
                  p.value.push(m),
                  v.value &&
                     (d.value = setTimeout(() => {
                        i();
                     }, 1e3 * 3));
            },
            g = () => {
               p.value = [];
            };
         return (
            s({ showMark: r }),
            (m, $) =>
               te(
                  (n(),
                  a(
                     "div",
                     { class: "WinningTip__C", onClick: i },
                     [
                        e(
                           "div",
                           { class: M(["WinningTip__C-body", { isL: o.value }]) },
                           [
                              o.value ? (n(), a("div", { key: 0, class: M(["WinningTip__C-body-l1", { isL: o.value }]) }, t(m.$t("k3WarningTip1")), 3)) : (n(), a("div", L8, t(m.$t("k3WarningTip2")), 1)),
                              e("div", I8, [
                                 e("div", S8, [
                                    (n(!0),
                                    a(
                                       N,
                                       null,
                                       D(u.value.list, (y, C) => (n(), a("div", { class: M(["n" + y]) }, null, 2))),
                                       256,
                                    )),
                                 ]),
                                 e("div", G8, [e("div", null, t(u.value.premium), 1), e("div", x8, t(u.value.sum > 10 ? m.$t("big") : m.$t("small")), 1), e("div", null, t(u.value.sum % 2 ? m.$t("k3Odd") : m.$t("k3Even")), 1)]),
                              ]),
                              e("div", B8, [o.value ? (n(), a("div", N8, t(m.$t("k3WarningTip3")), 1)) : (n(), a(N, { key: 1 }, [e("div", R8, t(m.$t("k3WarningTip4")), 1), e("div", M8, t(c(Be)(Number(u.value.winAmount))), 1)], 64)), e("div", D8, t(m.$t("k3WarningTip5")) + t(u.value.typeName) + " " + t(u.value.issueNumber), 1)]),
                              e("div", A8, [e("div", { class: M(["acitveBtn", { active: v.value }]), onClick: ut(_, ["stop"]) }, null, 10, P8), E(" " + t(m.$t("autoShutOff3s")), 1)]),
                              e("div", { class: "closeBtn", onClick: g }),
                           ],
                           2,
                        ),
                     ],
                     512,
                  )),
                  [[He, p.value.length]],
               )
         );
      },
   });
const V8 = H(O8, [["__scopeId", "data-v-01e7b6bf"]]),
   W8 = l => (ye("data-v-644e12f7"), (l = l()), fe(), l),
   H8 = { class: "K3__C" },
   z8 = W8(() => e("div", { class: "arrow-left" }, null, -1)),
   E8 = { class: "K3__C-head-more" },
   F8 = V({
      __name: "index",
      setup(l) {
         var se, Q;
         const s = { GameRecord: m8, Trend: w8, MyGameRecord: io },
            o = k(),
            u = k(),
            v = k(),
            p = k(!1),
            d = k("GameRecord"),
            i = ue(),
            _ = Ut(),
            r = _.getK3,
            g = { 9: 0, 10: 1, 11: 2, 12: 3 },
            m = k((se = i.currentRoute.value.query) != null && se.typeId ? g[(Q = i.currentRoute.value.query) == null ? void 0 : Q.typeId] : 0),
            $ = k(localStorage.getItem("volumeShow") || "1"),
            y = k(!1),
            C = k([]),
            f = k(null),
            b = k({ gameNo: "loading", currentTime: "", beginTime: "", passTime: 180, time1: 0, time2: 0, time3: 0, time4: 0 }),
            T = k("666"),
            h = k(5),
            w = k(""),
            I = k(!1),
            x = k(null),
            S = q(() => r[m.value] || {}),
            G = je(),
            R = q(() => G.getIsShowLotteryDragon);
         he(() => {
            J();
         }),
            jt(() => {
               clearInterval(f.value),
                  clearInterval(ge.value),
                  we.value.forEach(ee => {
                     clearInterval(ee);
                  }),
                  Ie.value && clearTimeout(Ie.value);
            }),
            Ve(
               () => rt().visibility,
               ee => {
                  ee === 0 ? clearInterval(f.value) : (J(), ie(m.value));
               },
            );
         const O = () => {
               sessionStorage.setItem("clickedGameType", "lottery"), i.push({ path: "/" });
            },
            P = () => {
               $.value == "1" ? ($.value = "2") : ($.value = "1"), localStorage.setItem("volumeShow", $.value);
            },
            W = ee => {
               i.push({ name: ee });
            },
            J = () => {
               x.value == null && ie(m.value);
            },
            le = async (ee, ae = !1) => {
               const Ge = await de(El({ typeId: ee }));
               Ge && ((T.value = Ge.data.premium), ae && Qe(T.value));
            },
            ie = ee => {
               _.getK3Data(),
                  (m.value = ee),
                  (x.value = r[ee].typeID),
                  ne(x.value),
                  lt(() => {
                     o.value.getData(x.value);
                  });
            },
            ne = async (ee, ae = !1) => {
               le(ee, ae);
               const [Ge, Re] = await ct(zl({ typeId: ee }));
               (b.value.gameNo = Re.issueNumber), (b.value.currentTime = Re.serviceTime.replace(/-/g, "/")), (b.value.beginTime = Re.startTime.replace(/-/g, "/")), z();
            },
            z = () => {
               if (!r.length) return;
               var ee = new Date(b.value.currentTime).getTime(),
                  ae = new Date(b.value.beginTime).getTime();
               let Ge = (ee - ae) / 1e3,
                  Re = r[m.value];
               if ((Ge > Re.intervalM * 60 && (Ge = Re.intervalM * 60), (b.value.passTime = Re.intervalM * 60 - Ge), b.value.passTime < 0)) {
                  (w.value = "An error occurred, please contact customer service。The game time is " + Re.intervalM + " minutes,start time is " + b.value.beginTime + ",current time is" + b.value.currentTime + "!"), (y.value = !0);
                  return;
               }
               X();
            },
            X = () => {
               clearInterval(f.value),
                  ce(!1),
                  (f.value = setInterval(function () {
                     ce();
                  }, 1e3));
            },
            ce = (ee = !0) => {
               if ((b.value.passTime <= h.value && (I.value = !1), $.value == "1" && (b.value.passTime <= h.value && b.value.passTime > 1 ? Ne(1) : b.value.passTime == 1 && Ne(2)), b.value.passTime > 0)) {
                  let ae = b.value.passTime;
                  (b.value.time2 = Math.floor(ae / 60)), (b.value.time3 = Math.floor((ae % 60) / 10)), (b.value.time4 = Math.floor(ae % 10)), b.value.passTime--;
               } else clearInterval(f.value), ee && Se();
            },
            Ne = (ee = 1) => {
               const ae = document.getElementById(`voice${ee}`);
               ae && ae.play();
            },
            Se = () => {
               ne(x.value, !0), v.value.getWinsUserAmount(!1), o.value.getData(!0);
            },
            ge = k(null),
            Je = (ee, ae) => {
               if (ee >= 0 && ae > 0 && ae >= ee) {
                  let Ge = ae - ee + 1;
                  return Math.floor(Math.random() * Ge + ee);
               } else return 0;
            },
            Qe = ee => {
               ge.value ||
                  (ge.value = setInterval(function () {
                     for (var ae = [], Ge = 0; 3 > Ge; Ge++) ae.push(Je(1, 6));
                     T.value = ae.join("");
                  }, 50)),
                  setTimeout(function () {
                     clearInterval(ge.value), (T.value = ee), (ge.value = null);
                  }, 2e3);
            },
            et = k({}),
            we = k([]),
            xe = ee => {
               if ((v.value.getWinsUserAmount(!1), o.value.getData(), et.value[ee])) return;
               et.value[ee] = !0;
               const { time1: ae, time2: Ge, time3: Re, time4: dt } = b.value,
                  qe = (ae * 10 * 60 + Ge * 60 + Re * 10 + dt) * 1e3;
               we.value[S.value.intervalM] = setTimeout(() => {
                  re(ee);
               }, qe);
            },
            Le = ee => {
               p.value = ee;
            },
            Ie = k(null),
            re = async ee => {
               const ae = await de(Fl({ issueNumber: ee }));
               if (ae) {
                  if (!(ae.data.state != 2)) {
                     Ie.value = setTimeout(() => {
                        re(ee);
                     }, 2e3);
                     return;
                  }
                  u.value.showMark(ae.data), delete et.value[ee];
               }
            };
         return (ee, ae) => {
            const Ge = U("NavBar");
            return (
               n(),
               a("div", H8, [
                  L(Ge, { "left-arrow": "", onClickLeft: O, "background-color": "linear-gradient(90deg, #8deef5 0%, #259aa3 100%)", headLogo: !0 }, { left: A(() => [z8]), right: A(() => [e("div", E8, [e("div", { onClick: ae[0] || (ae[0] = Re => W("CustomerService")) }), e("div", { class: M({ disableVoice: $.value == "2" }), onClick: P }, null, 2)])]), _: 1 }),
                  L(Fs, { ref_key: "WallteRef", ref: v }, null, 512),
                  L(Yt, { siteMsg: C.value, key: "k3" }, null, 8, ["siteMsg"]),
                  L(js, { gameList: c(r), currentGameIndex: m.value, onChangeGame: ie }, null, 8, ["gameList", "currentGameIndex"]),
                  L(gy, { currentInfo: b.value, premium: T.value, currentGame: S.value }, null, 8, ["currentInfo", "premium", "currentGame"]),
                  L(l8, { currentInfo: b.value, currentGame: S.value, VoiceType: $.value, typeid: x.value, onBetting: xe, onChangeBettingP: Le }, null, 8, ["currentInfo", "currentGame", "VoiceType", "typeid"]),
                  L(qs, { record: d.value, onChangeC: ae[1] || (ae[1] = Re => (d.value = Re)) }, null, 8, ["record"]),
                  (n(), Z(ns, null, [(n(), Z(ft(s[d.value]), { ref_key: "RecordComponent", ref: o, typeid: x.value, ApiFun: c(In), listApi: c(Sn), EmerdApi: c(Va), goPathName: "AllLotteryGames-BettingRecordK3" }, null, 8, ["typeid", "ApiFun", "listApi", "EmerdApi"]))], 1024)),
                  L(Mt, { show: y.value, onConfirm: ae[2] || (ae[2] = Re => W("/login")) }, { content: A(() => [e("div", null, t(w.value), 1)]), _: 1 }, 8, ["show"]),
                  L(V8, { ref_key: "WinningTipsRef", ref: u }, null, 512),
                  R.value ? (n(), Z(os, { key: 0 })) : B("", !0),
                  L(Ks),
               ])
            );
         };
      },
   });
const j8 = H(F8, [["__scopeId", "data-v-644e12f7"]]),
   xV = Object.freeze(Object.defineProperty({ __proto__: null, default: j8 }, Symbol.toStringTag, { value: "Module" })),
   Js = l => (ye("data-v-1b8e1d2a"), (l = l()), fe(), l),
   U8 = { class: "TimeLeft__C" },
   q8 = { class: "box" },
   K8 = { class: "tit" },
   Z8 = { class: "citycon" },
   X8 = Js(() => e("div", { class: "citybg" }, null, -1)),
   J8 = { class: "font30" },
   Y8 = { class: "playmethod" },
   Q8 = { key: 0, class: "odds" },
   e7 = Js(() => e("div", { class: "line" }, "|", -1)),
   t7 = { class: "odd" },
   s7 = { key: 1, class: "color8" },
   n7 = { class: "bettingcut" },
   a7 = { class: "font22" },
   o7 = { class: "info" },
   l7 = Js(() => e("div", { class: "illustratebg" }, null, -1)),
   i7 = { class: "font24" },
   c7 = { class: "issue" },
   u7 = Js(() => e("div", { class: "issuebg" }, null, -1)),
   r7 = { class: "font26" },
   d7 = { class: "closure" },
   _7 = { class: "closuretime" },
   v7 = { class: "closurtimes" },
   p7 = V({
      __name: "TimeLeft",
      props: { defaultcityname: { type: String, default: "" }, defaultplayname: { type: String, default: "" }, defaultexpiredate: { type: String, default: "" }, issue: { type: String, default: "" }, time: { type: String, default: "" }, odds: { type: Number, default: 0 }, colorId: { type: Number, default: 0 }, areId: { type: Number, default: 0 } },
      setup(l) {
         const s = l,
            o = ue(),
            u = () => {
               o.push({ name: "AllLotteryGames-Play", query: { id: s.areId, gVSs: 1 } });
            };
         return (v, p) => (
            n(),
            a("div", U8, [
               e("div", q8, [
                  e("div", K8, [e("div", Z8, [X8, e("div", J8, t(l.defaultcityname), 1)]), e("div", Y8, t(v.$t("code" + l.defaultplayname)), 1), l.colorId != 8 ? (n(), a("div", Q8, [e("div", null, t(v.$t("odds")), 1), e7, e("div", t7, "1:" + t(l.odds), 1)])) : B("", !0), l.colorId == 8 ? (n(), a("div", s7)) : B("", !0), e("div", n7, [e("div", a7, t(v.$t("xosoTxt91")), 1), e("div", null, t(l.defaultexpiredate), 1)])]),
                  e("div", o7, [
                     e("div", { class: "playillustrate", onClick: u }, [l7, e("div", i7, t(v.$t("lotteryManual")), 1)]),
                     e("div", c7, [u7, e("div", r7, t(l.issue), 1)]),
                     e("div", d7, [
                        e("div", _7, t(v.$t("xosoTxt92")), 1),
                        e("div", v7, [
                           (n(!0),
                           a(
                              N,
                              null,
                              D(l.time.split(""), (d, i) => (n(), a("div", { class: M(d == ":" ? "red" : "redsqure"), key: i }, t(d), 3))),
                              128,
                           )),
                        ]),
                     ]),
                  ]),
               ]),
            ])
         );
      },
   });
const m7 = H(p7, [["__scopeId", "data-v-1b8e1d2a"]]),
   Dn = l => (ye("data-v-659a7f39"), (l = l()), fe(), l),
   g7 = { class: "TimeLeft__C" },
   h7 = { class: "box" },
   y7 = { class: "tit" },
   f7 = { class: "citycon" },
   b7 = Dn(() => e("div", { class: "citybg" }, null, -1)),
   $7 = { class: "font30" },
   C7 = { key: 0, class: "playmethod" },
   k7 = { class: "odd" },
   T7 = { class: "odds" },
   w7 = { class: "result" },
   L7 = { class: "info" },
   I7 = Dn(() => e("div", { class: "illustratebg" }, null, -1)),
   S7 = { class: "font24" },
   G7 = { class: "issue" },
   x7 = Dn(() => e("div", { class: "issuebg" }, null, -1)),
   B7 = { class: "font26" },
   N7 = { key: 0, class: "closure isShowPreparing" },
   R7 = { key: 1, class: "closure" },
   M7 = { class: "closuretime" },
   D7 = { class: "closurtimes" },
   A7 = V({
      __name: "TimeLeftF",
      props: { defaultcityname: { type: String, default: "" }, defaultplayname: { type: String, default: "" }, issue: { type: String, default: "" }, time: { type: String, default: "" }, odds: { type: Number, default: 0 }, colorId: { type: Number, default: 0 }, areId: { type: Number, default: 0 }, resultList: { type: Object, default: {} }, isShowPreparing: { type: Boolean, defauft: !1 } },
      setup(l) {
         const s = l,
            o = ue(),
            u = q(() => {
               var d, i;
               let p = (d = s.resultList) != null && d.openingResult ? ((i = s.resultList) == null ? void 0 : i.openingResult.find(_ => _.resultType == 0).result) : "";
               return Array.isArray(p) && (p = p[0]), p;
            }),
            v = () => {
               o.push({ name: "AllLotteryGames-Play", query: { id: s.areId, gVSs: 2 } });
            };
         return (p, d) => {
            var i;
            return (
               n(),
               a("div", g7, [
                  e("div", h7, [
                     e("div", y7, [
                        e("div", f7, [b7, e("div", $7, t(l.defaultcityname), 1)]),
                        l.colorId != 8 ? (n(), a("div", C7, [e("div", null, "(" + t(p.$t("code" + l.defaultplayname)) + ")", 1), e("div", k7, "1:" + t(l.odds), 1)])) : B("", !0),
                        e("div", T7, [
                           e("div", null, t(p.$t("betResult")), 1),
                           e("div", null, t((i = l.resultList) == null ? void 0 : i.issueNumber), 1),
                           e("div", w7, [
                              (n(!0),
                              a(
                                 N,
                                 null,
                                 D(u.value.split(""), (_, r) => (n(), a("span", { key: r }, t(_), 1))),
                                 128,
                              )),
                           ]),
                        ]),
                     ]),
                     e("div", L7, [
                        e("div", { class: "playillustrate", onClick: v }, [I7, e("div", S7, t(p.$t("lotteryManual")), 1)]),
                        e("div", G7, [x7, e("div", B7, t(l.issue), 1)]),
                        l.isShowPreparing ? (n(), a("div", N7, t(p.$t("preparing")), 1)) : B("", !0),
                        l.isShowPreparing
                           ? B("", !0)
                           : (n(),
                             a("div", R7, [
                                e("div", M7, t(p.$t("xosoTxt91")), 1),
                                e("div", D7, [
                                   (n(!0),
                                   a(
                                      N,
                                      null,
                                      D(l.time.split(""), (_, r) => (n(), a("div", { class: M(_ == ":" ? "red" : "redsqure"), key: r }, t(_), 3))),
                                      128,
                                   )),
                                ]),
                             ])),
                     ]),
                  ]),
               ])
            );
         };
      },
   });
const P7 = H(A7, [["__scopeId", "data-v-659a7f39"]]),
   O7 = { class: "ColorsContainer" },
   V7 = V({
      __name: "ColorsAndPlay",
      props: { gameCategoryList: { type: Array, default: () => [] }, colortab: { type: Number, default: 0 }, playtab: { type: Number, default: 0 } },
      emits: ["colorupdate", "update"],
      setup(l, { emit: s }) {
         const o = l,
            u = k(o.colortab),
            v = k(o.playtab),
            p = q(() => {
               var _;
               return ((_ = o.gameCategoryList[u.value]) == null ? void 0 : _.gamePlayList) || [];
            });
         function d(_) {
            s("colorupdate", _.item.categoryId, _.index);
         }
         function i({ item: _, index: r }) {
            s("update", _.playId, r, _.playNameCode, _.betType);
         }
         return (
            Ve(
               () => o.playtab,
               () => {
                  v.value = o.playtab;
               },
            ),
            Ve(
               () => o.colortab,
               () => {
                  u.value = o.colortab;
               },
            ),
            (_, r) => (n(), a("div", O7, [L(Xt, { list: l.gameCategoryList, active: u.value, "onUpdate:active": r[0] || (r[0] = g => (u.value = g)), tabClassName: "ColorsMethod", onOnClickTab: d }, { default: A(({ item: g, index: m }) => [e("div", { class: M(["coloritem", { active: m === u.value }]) }, t(_.$t("code" + g.categoryNameCode)), 3)]), _: 1 }, 8, ["list", "active"]), L(Xt, { list: p.value, active: v.value, "onUpdate:active": r[1] || (r[1] = g => (v.value = g)), tabClassName: "PlayMethod", onOnClickTab: i }, { default: A(({ item: g, index: m }) => [e("div", { class: M(["playitem", { active: m === v.value }]) }, t(_.$t("code" + g.playNameCode)), 3)]), _: 1 }, 8, ["list", "active"])]))
         );
      },
   });
const Ys = l => (ye("data-v-85de3eb0"), (l = l()), fe(), l),
   W7 = { class: "NumberSelectContainer" },
   H7 = { class: "NumberSelectContainer-mark" },
   z7 = { class: "NumberTabContent" },
   E7 = { key: 0, class: "selectcontainer" },
   F7 = { class: "selectbutton" },
   j7 = { class: "selectcontent" },
   U7 = { class: "selectheader" },
   q7 = { class: "selectball" },
   K7 = ["onClick"],
   Z7 = { key: 1, class: "selectcontainer" },
   X7 = { class: "selectbutton" },
   J7 = { class: "selectcontent" },
   Y7 = { class: "selectheader" },
   Q7 = { class: "selectball" },
   eb = ["onClick"],
   tb = { key: 2, class: "selectcontainer" },
   sb = { class: "selectbutton" },
   nb = { class: "selectcontent" },
   ab = { class: "selectheader" },
   ob = { class: "selectball" },
   lb = ["onClick"],
   ib = { key: 3, class: "selectcontainer" },
   cb = { class: "selectbutton" },
   ub = { class: "selectcontent" },
   rb = { class: "selectheader" },
   db = { class: "selectball" },
   _b = ["onClick"],
   vb = { class: "quickcontainer" },
   pb = { key: 0, class: "intervalcontainer" },
   mb = ["onClick"],
   gb = { key: 1, class: "randomcontainer" },
   hb = { class: "randomheader" },
   yb = Ys(() => e("div", { class: "redline" }, null, -1)),
   fb = { class: "font30" },
   bb = { class: "randombutton" },
   $b = ["onClick"],
   Cb = { key: 2, class: "specialcontainer" },
   kb = { class: "specialheader" },
   Tb = Ys(() => e("div", { class: "redline" }, null, -1)),
   wb = { class: "font30" },
   Lb = { class: "specialbutton" },
   Ib = { class: "Ntit" },
   Sb = Ys(() => e("br", null, null, -1)),
   Gb = Ys(() => e("br", null, null, -1)),
   xb = { class: "list" },
   Bb = ["onClick"],
   Nb = V({
      __name: "NumberSelect",
      props: { methodList: { type: String, default: "" }, activeTab: { type: Number, default: 0 }, randomList: { type: Array, default: () => {} }, randomtype: { type: Number, default: 0 }, specialtype: { type: Number, default: 0 }, isthreenumber: { type: Number, default: 0 }, speciaSelectNo: { type: String, default: "" }, isShowMark: { type: Boolean, default: !1 }, hundred: { type: String, default: "" }, betconfig: { type: String, default: "" }, groupTab: { type: Number, default: 30 }, thousandnumList: { type: Array, default: [] }, hundrednumList: { type: Array, default: [] }, tennumList: { type: Array, default: [] }, indicualnumList: { type: Array, default: [] }, quicknumList: { type: Array, default: [] }, intervalnumber: { type: Array, default: [] }, intervalTab: { type: Number, default: 0 } },
      emits: ["tabupdate", "selectgroup", "selectspecial", "betNum", "betQuickNum", "getselect", "getquick", "selectinterval"],
      setup(l, { expose: s, emit: o }) {
         const u = l,
            { t: v } = _e(),
            p = [
               { name: v("selectNo"), value: 1 },
               { name: v("xosoTxt81"), value: 3 },
               { name: v("xosoTxt80"), value: 2 },
            ],
            d = q(() =>
               p.filter(w => {
                  var I;
                  return (I = u.methodList) == null ? void 0 : I.includes(w.value + "");
               }),
            ),
            i = k(0),
            _ = k(""),
            r = k(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]),
            g = ({ item: w }) => {
               o("tabupdate", w.value);
            },
            m = (w, I, x) => {
               o("selectgroup", w, I, x);
            },
            $ = (w, I) => {
               o("betNum", w, I);
            },
            y = (w, I, x) => {
               o("betQuickNum", w, I, x);
            },
            C = (w, I, x, S) => {
               o("getselect", w, I, x, S);
            },
            f = (w, I) => {
               o("getquick", w, I);
            },
            b = (w, I) => {
               o("selectinterval", w, I);
            },
            T = w => {
               w.target.value != "" && o("inputblur", w.target.value);
            },
            h = () => {
               _.value = "";
            };
         return (
            Ve(
               () => u.activeTab,
               async () => {
                  await lt();
                  const w = d.value.findIndex(I => I.value == u.activeTab);
                  w !== -1 && (i.value = w);
               },
            ),
            s({ cleardata: h }),
            (w, I) => {
               var S, G, R, O;
               const x = U("van-field");
               return (
                  n(),
                  a("div", W7, [
                     te(e("div", H7, [e("div", null, t(c(v)("nomorebet")), 1)], 512), [[He, l.isShowMark]]),
                     d.value.length > 0 ? (n(), Z(Xt, { key: 0, list: d.value, active: i.value, "onUpdate:active": I[0] || (I[0] = P => (i.value = P)), tabClassName: "NumberTab", onOnClickTab: g }, { default: A(({ item: P, index: W }) => [e("div", { class: M(["tabitem", { active: P.value === l.activeTab }]) }, t(P.name), 3)]), _: 1 }, 8, ["list", "active"])) : B("", !0),
                     e("div", z7, [
                        te(
                           e(
                              "div",
                              null,
                              [
                                 (S = l.betconfig) != null && S.includes("4")
                                    ? (n(),
                                      a("div", E7, [
                                         e("div", F7, [e("div", { class: "selectall", onClick: I[1] || (I[1] = P => C("Thousand", 0, 9, "all")) }, t(c(v)("all")), 1), e("div", { class: "selectbig", onClick: I[2] || (I[2] = P => C("Thousand", 0, 9, "big")) }, t(c(v)("big")), 1), e("div", { class: "selectsmall", onClick: I[3] || (I[3] = P => C("Thousand", 0, 9, "small")) }, t(c(v)("small")), 1), e("div", { class: "selectodd", onClick: I[4] || (I[4] = P => C("Thousand", 0, 9, "odd")) }, t(c(v)("xosoTxt71")), 1), e("div", { class: "selecteven", onClick: I[5] || (I[5] = P => C("Thousand", 0, 9, "even")) }, t(c(v)("xosoTxt70")), 1)]),
                                         e("div", j7, [
                                            e("div", U7, t(c(v)("xosoTxt87")), 1),
                                            e("div", q7, [
                                               (n(!0),
                                               a(
                                                  N,
                                                  null,
                                                  D(r.value, (P, W) => (n(), a("div", { key: W, onClick: J => $("Thousand", P) }, [e("div", { class: M(l.thousandnumList.includes(P) ? "ball action " : "ball") }, t(P), 3)], 8, K7))),
                                                  128,
                                               )),
                                            ]),
                                         ]),
                                      ]))
                                    : B("", !0),
                                 (G = l.betconfig) != null && G.includes("3")
                                    ? (n(),
                                      a("div", Z7, [
                                         e("div", X7, [e("div", { class: "selectall", onClick: I[6] || (I[6] = P => C("hundred", 0, 9, "all")) }, t(c(v)("all")), 1), e("div", { class: "selectbig", onClick: I[7] || (I[7] = P => C("hundred", 0, 9, "big")) }, t(c(v)("big")), 1), e("div", { class: "selectsmall", onClick: I[8] || (I[8] = P => C("hundred", 0, 9, "small")) }, t(c(v)("small")), 1), e("div", { class: "selectodd", onClick: I[9] || (I[9] = P => C("hundred", 0, 9, "odd")) }, t(c(v)("xosoTxt71")), 1), e("div", { class: "selecteven", onClick: I[10] || (I[10] = P => C("hundred", 0, 9, "even")) }, t(c(v)("xosoTxt70")), 1)]),
                                         e("div", J7, [
                                            e("div", Y7, t(c(v)("xosoTxt88")), 1),
                                            e("div", Q7, [
                                               (n(!0),
                                               a(
                                                  N,
                                                  null,
                                                  D(r.value, (P, W) => (n(), a("div", { key: W, onClick: J => $("Hundred", P) }, [e("div", { class: M(l.hundrednumList.includes(P) ? "action ball" : "ball") }, t(P), 3)], 8, eb))),
                                                  128,
                                               )),
                                            ]),
                                         ]),
                                      ]))
                                    : B("", !0),
                                 (R = l.betconfig) != null && R.includes("2")
                                    ? (n(),
                                      a("div", tb, [
                                         e("div", sb, [e("div", { class: "selectall", onClick: I[11] || (I[11] = P => C("ten", 0, 9, "all")) }, t(c(v)("all")), 1), e("div", { class: "selectbig", onClick: I[12] || (I[12] = P => C("ten", 0, 9, "big")) }, t(c(v)("big")), 1), e("div", { class: "selectsmall", onClick: I[13] || (I[13] = P => C("ten", 0, 9, "small")) }, t(c(v)("small")), 1), e("div", { class: "selectodd", onClick: I[14] || (I[14] = P => C("ten", 0, 9, "odd")) }, t(c(v)("xosoTxt71")), 1), e("div", { class: "selecteven", onClick: I[15] || (I[15] = P => C("ten", 0, 9, "even")) }, t(c(v)("xosoTxt70")), 1)]),
                                         e("div", nb, [
                                            e("div", ab, t(c(v)("xosoTxt89")), 1),
                                            e("div", ob, [
                                               (n(!0),
                                               a(
                                                  N,
                                                  null,
                                                  D(r.value, (P, W) => (n(), a("div", { key: W, onClick: J => $("ten", P) }, [e("div", { class: M(l.tennumList.includes(P) ? "action ball" : "ball") }, t(P), 3)], 8, lb))),
                                                  128,
                                               )),
                                            ]),
                                         ]),
                                      ]))
                                    : B("", !0),
                                 (O = l.betconfig) != null && O.includes("1")
                                    ? (n(),
                                      a("div", ib, [
                                         e("div", cb, [e("div", { class: "selectall", onClick: I[16] || (I[16] = P => C("Indivual", 0, 9, "all")) }, t(c(v)("all")), 1), e("div", { class: "selectbig", onClick: I[17] || (I[17] = P => C("Indivual", 0, 9, "big")) }, t(c(v)("big")), 1), e("div", { class: "selectsmall", onClick: I[18] || (I[18] = P => C("Indivual", 0, 9, "small")) }, t(c(v)("small")), 1), e("div", { class: "selectodd", onClick: I[19] || (I[19] = P => C("Indivual", 0, 9, "odd")) }, t(c(v)("xosoTxt71")), 1), e("div", { class: "selecteven", onClick: I[20] || (I[20] = P => C("Indivual", 0, 9, "even")) }, t(c(v)("xosoTxt70")), 1)]),
                                         e("div", ub, [
                                            e("div", rb, t(c(v)("xosoTxt90")), 1),
                                            e("div", db, [
                                               (n(!0),
                                               a(
                                                  N,
                                                  null,
                                                  D(r.value, (P, W) => (n(), a("div", { key: W, onClick: J => $("Indivual", P) }, [e("div", { class: M(l.indicualnumList.includes(P) ? "ball action" : "ball") }, t(P), 3)], 8, _b))),
                                                  128,
                                               )),
                                            ]),
                                         ]),
                                      ]))
                                    : B("", !0),
                              ],
                              512,
                           ),
                           [[He, l.activeTab === 1]],
                        ),
                        te(e("div", null, [L(x, { class: "custom-field", modelValue: _.value, "onUpdate:modelValue": I[21] || (I[21] = P => (_.value = P)), rows: "4", autosize: "", type: "textarea", placeholder: c(v)("xosoTxt86"), onInput: T }, null, 8, ["modelValue", "placeholder"])], 512), [[He, l.activeTab === 2]]),
                        te(
                           e(
                              "div",
                              null,
                              [
                                 e("div", vb, [
                                    l.isthreenumber === 1
                                       ? (n(),
                                         a("div", pb, [
                                            (n(!0),
                                            a(
                                               N,
                                               null,
                                               D(l.intervalnumber, (P, W) => (n(), a("div", { class: M(["intervalitem", [l.intervalTab === W ? "active" : ""]]), key: W, onClick: J => b(P, W) }, t(P), 11, mb))),
                                               128,
                                            )),
                                         ]))
                                       : B("", !0),
                                    l.randomtype === 1
                                       ? (n(),
                                         a("div", gb, [
                                            e("div", hb, [yb, e("div", fb, t(c(v)("xosoTxt83")), 1)]),
                                            e("div", bb, [
                                               (n(!0),
                                               a(
                                                  N,
                                                  null,
                                                  D(l.randomList, (P, W) => (n(), a("div", { class: M([l.groupTab === W ? "active" : ""]), key: W, onClick: J => m(P, W, l.isthreenumber) }, t(P) + t(c(v)("xosoTxt84")), 11, $b))),
                                                  128,
                                               )),
                                            ]),
                                         ]))
                                       : B("", !0),
                                    l.specialtype === 1
                                       ? (n(),
                                         a("div", Cb, [
                                            e("div", kb, [Tb, e("div", wb, t(c(v)("xosoTxt97")), 1)]),
                                            e("div", Lb, [l.speciaSelectNo.includes("1") ? (n(), a("div", { key: 0, class: "specialsame", onClick: I[22] || (I[22] = P => f(l.isthreenumber, "same")) }, t(c(v)("xosoTxt85")), 1)) : B("", !0), l.speciaSelectNo.includes("4") ? (n(), a("div", { key: 1, class: "specialbig", onClick: I[23] || (I[23] = P => f(l.isthreenumber, "big")) }, t(c(v)("big")), 1)) : B("", !0), l.speciaSelectNo.includes("5") ? (n(), a("div", { key: 2, class: "specialsmall", onClick: I[24] || (I[24] = P => f(l.isthreenumber, "small")) }, t(c(v)("small")), 1)) : B("", !0), l.speciaSelectNo.includes("2") ? (n(), a("div", { key: 3, class: "specialodd", onClick: I[25] || (I[25] = P => f(l.isthreenumber, "odd")) }, t(c(v)("xosoTxt71")), 1)) : B("", !0), l.speciaSelectNo.includes("3") ? (n(), a("div", { key: 4, class: "specialeven", onClick: I[26] || (I[26] = P => f(l.isthreenumber, "even")) }, t(c(v)("xosoTxt70")), 1)) : B("", !0)]),
                                         ]))
                                       : B("", !0),
                                    l.activeTab === 3
                                       ? (n(),
                                         a(
                                            N,
                                            { key: 3 },
                                            D(10, (P, W) =>
                                               e("div", { class: "numbercontainer", key: P }, [
                                                  e("div", Ib, [e("div", null, [E(t(l.hundred) + t(W) + "0", 1), Sb, E("/"), Gb, E(t(l.hundred) + t(W) + "9", 1)])]),
                                                  e("div", xb, [
                                                     (n(),
                                                     a(
                                                        N,
                                                        null,
                                                        D(10, (J, le) => e("div", { class: "item", key: J }, [e("div", { onClick: ie => y(l.hundred, W, le) }, [e("div", { class: M(l.quicknumList.includes(l.hundred + "" + W + le) ? "number action" : "number") }, t(l.hundred) + t(W) + t(le), 3)], 8, Bb)])),
                                                        64,
                                                     )),
                                                  ]),
                                               ]),
                                            ),
                                            64,
                                         ))
                                       : B("", !0),
                                 ]),
                              ],
                              512,
                           ),
                           [[He, l.activeTab === 3]],
                        ),
                     ]),
                  ])
               );
            }
         );
      },
   });
const Rb = H(Nb, [["__scopeId", "data-v-85de3eb0"]]),
   Mb = { class: "TasteContainer" },
   Db = { class: "TasteHeader" },
   Ab = { class: "NumberSelect" },
   Pb = { class: "NumberSelectCon" },
   Ob = ["onClick"],
   Vb = V({
      __name: "TasteSelect",
      props: { funplaylist: { type: Array, default: [] }, numbercon: { type: String, default: "1000" } },
      emits: ["selectvalue"],
      setup(l, { emit: s }) {
         const o = (u, v) => {
            s("selectvalue", u, v);
         };
         return (u, v) => (
            n(),
            a("div", Mb, [
               e("div", Db, t(u.$t("xosoTxt60")), 1),
               e("div", Ab, [
                  e("div", Pb, [
                     (n(!0),
                     a(
                        N,
                        null,
                        D(l.funplaylist, (p, d) => (n(), a("div", { class: M(["NumberCon", { action: p.oddTypeName === l.numbercon, more: d == 18 }]), key: d, onClick: i => o(p, d) }, [e("div", { class: M(["number", { active: p.oddTypeName === l.numbercon }]) }, t(u.$t("code" + p.oddTypeNameCode)), 3), e("div", { class: M(["odds", { active: p.oddTypeName === l.numbercon }]) }, t(p.oddsOrAmount), 3)], 10, Ob))),
                        128,
                     )),
                  ]),
               ]),
            ])
         );
      },
   });
const Wb = H(Vb, [["__scopeId", "data-v-efbb40ba"]]),
   Hb = { class: "Footer__C" },
   zb = { class: "nav c-row c-row-between" },
   Eb = { class: "c-row left c-row c-row-middle-center" },
   Fb = { class: "item" },
   jb = { class: "txt" },
   Ub = { class: "num" },
   qb = { class: "item" },
   Kb = { class: "txt" },
   Zb = { class: "num" },
   Xb = { class: "" },
   Jb = V({
      __name: "Footer",
      props: { betNumber: { default: { type: Number, default: 0 } }, betSum: { default: { type: Number, default: 0 } } },
      emits: ["playBet"],
      setup(l, { emit: s }) {
         const o = () => {
            s("playBet");
         };
         return (u, v) => (n(), a("div", Hb, [e("div", zb, [e("div", Eb, [e("div", Fb, [e("p", jb, t(u.$t("quantity")), 1), e("span", Ub, t(u.betNumber || 0), 1)]), e("div", qb, [e("p", Kb, t(u.$t("betAmount")), 1), e("span", Zb, t(c(Be)(u.betSum || 0)), 1)])]), e("div", { class: M(["c-row c-row-middle-center", [u.betSum > 0 ? "bet-btn" : "disabled-btn"]]), onClick: v[0] || (v[0] = p => o()) }, [e("span", Xb, t(u.$t("betting")), 1)], 2)])]));
      },
   });
const Yb = H(Jb, [["__scopeId", "data-v-afe1106e"]]),
   Qb = { class: "RecordNav__C" },
   e9 = ["onClick"],
   t9 = V({
      __name: "RecordNav",
      props: { record: { type: String, default: "GameRecord" } },
      setup(l) {
         const s = l,
            { t: o } = _e(),
            u = k([
               { name: o("gameRecords"), componentName: "GameRecord" },
               { name: o("myGame"), componentName: "MyGameRecord" },
            ]);
         return (v, p) => (
            n(),
            a("div", Qb, [
               (n(!0),
               a(
                  N,
                  null,
                  D(u.value, (d, i) => (n(), a("div", { key: i, onClick: _ => v.$emit("changeC", d.componentName), class: M({ active: s.record == d.componentName }) }, t(d.name), 11, e9))),
                  128,
               )),
            ])
         );
      },
   });
const s9 = H(t9, [["__scopeId", "data-v-884042b3"]]),
   n9 = { class: "GameRecord__C" },
   a9 = { class: "GameRecord__C-head" },
   o9 = { class: "GameRecord__C-body" },
   l9 = { class: "c-tc goItem" },
   i9 = { class: "c-row" },
   c9 = { class: "c-row c-row-middle-center" },
   u9 = { class: "c-row c-row-middle-center time" },
   r9 = { key: 0 },
   d9 = { key: 1 },
   _9 = { key: 0, class: "details" },
   v9 = { key: 0, class: "detailLi" },
   p9 = { class: "prize-tit" },
   m9 = { key: 0 },
   g9 = { class: "prize-box c-row c-flex-warp" },
   h9 = { class: "prize-box-item action" },
   y9 = { key: 1, class: "GameRecord__C-body-empty" },
   f9 = { key: 0, class: "GameRecord__C-foot" },
   b9 = { class: "GameRecord__C-foot-page" },
   $9 = V({
      __name: "GameRecord",
      props: { areId: {}, cityCode: {}, gVSs: {} },
      setup(l, { expose: s }) {
         const o = l,
            { t: u } = _e(),
            v = k([]),
            p = k(4),
            d = k(10),
            i = k(1),
            _ = k(-1),
            r = async (b = !1, T) => {
               var h, w, I;
               if ((T == null ? void 0 : T.list.length) > 0) (v.value = Ta(T == null ? void 0 : T.list) || []), (p.value = T == null ? void 0 : T.totalPage), (i.value = T == null ? void 0 : T.pageNo);
               else {
                  if (o.cityCode === "") return;
                  let x;
                  o.gVSs == "1" ? (x = await de(jl({ pageSize: d.value, pageNo: i.value, areId: o == null ? void 0 : o.areId, cityCode: o == null ? void 0 : o.cityCode }))) : o.gVSs == "2" && (x = await de(Wa({ pageSize: d.value, pageNo: i.value, areId: o.areId, typeId: Number(o.cityCode) }))), (v.value = ((h = x.data) == null ? void 0 : h.list) || []), (p.value = (w = x.data) == null ? void 0 : w.totalPage), (i.value = (I = x.data) == null ? void 0 : I.pageNo);
               }
            },
            g = b => {
               for (var T = [], h = 0; h < b.length; h++) {
                  var w = T.findIndex(function (I) {
                     return I.resultType === b[h].resultType;
                  });
                  w !== -1 ? T[w].result.push(b[h].result) : T.push({ resultType: b[h].resultType, result: [b[h].result] });
               }
               return T;
            };
         function m(b) {
            return b.join("-");
         }
         function $(b) {
            switch (b) {
               case 0:
                  return u("GrandPrize");
               case 1:
                  return u("firstprize");
               case 2:
                  return u("secondprize");
               case 3:
                  return u("thirdprize");
               case 4:
                  return u("fourprize");
               case 5:
                  return u("fiveprize");
               case 6:
                  return u("sixprize");
               case 7:
                  return u("sevenprize");
               case 8:
                  return u("eightprize");
            }
         }
         const y = () => {
               i.value--, r();
            },
            C = b => {
               _.value == b ? (_.value = -1) : (_.value = b);
            },
            f = () => {
               i.value++, r();
            };
         return (
            s({ getData: r }),
            kt(() => {
               _.value = -1;
            }),
            (b, T) => {
               var x, S;
               const h = U("van-col"),
                  w = U("van-row"),
                  I = U("van-icon");
               return (
                  n(),
                  a("div", n9, [
                     e("div", a9, [L(w, null, { default: A(() => [L(h, { span: "8" }, { default: A(() => [E(t(b.$t("betSerial")), 1)]), _: 1 }), L(h, { span: "10" }, { default: A(() => [E(t(b.$t("result")), 1)]), _: 1 }), L(h, { span: "6" }, { default: A(() => [E(t(b.$t("time")), 1)]), _: 1 })]), _: 1 })]),
                     e("div", o9, [
                        (x = v.value) != null && x.length
                           ? (n(!0),
                             a(
                                N,
                                { key: 0 },
                                D(
                                   v.value,
                                   (G, R) => (
                                      n(),
                                      Z(
                                         w,
                                         { key: R, onClick: O => C(R) },
                                         {
                                            default: A(() => [
                                               L(h, { span: "8" }, { default: A(() => [e("div", l9, t(G.issueNumber), 1)]), _: 2 }, 1024),
                                               L(
                                                  h,
                                                  { span: "10", class: "c-row c-row-middle-center" },
                                                  {
                                                     default: A(() => [
                                                        e("div", i9, [
                                                           e("div", c9, [
                                                              G.openingResult
                                                                 ? (n(!0),
                                                                   a(
                                                                      N,
                                                                      { key: 0 },
                                                                      D(G.openingResult[0].result, (O, P) => (n(), a("div", { class: "li circle-black c-row c-row-middle-center c-tc", key: P }, [e("div", null, t(O), 1)]))),
                                                                      128,
                                                                   ))
                                                                 : B("", !0),
                                                           ]),
                                                        ]),
                                                     ]),
                                                     _: 2,
                                                  },
                                                  1024,
                                               ),
                                               L(h, { span: "6" }, { default: A(() => [e("div", u9, [b.gVSs == "1" ? (n(), a("div", r9, t(G.openingTime.substr(0, 10)), 1)) : (n(), a("div", d9, t(G.openingTime), 1))])]), _: 2 }, 1024),
                                               R == _.value
                                                  ? (n(),
                                                    a("div", _9, [
                                                       G.openingResult
                                                          ? (n(),
                                                            a("div", v9, [
                                                               (n(!0),
                                                               a(
                                                                  N,
                                                                  null,
                                                                  D(g(G.openingResult), (O, P) => (n(), a("div", { class: M([`selectItem${O.resultType}`, "prize"]), key: P }, [e("div", p9, t($(O.resultType)), 1), [0, 1, 2].includes(O.resultType) ? (n(), a("div", m9, "|")) : B("", !0), e("div", g9, [e("span", h9, t(m(O.result)), 1)])], 2))),
                                                                  128,
                                                               )),
                                                            ]))
                                                          : B("", !0),
                                                    ]))
                                                  : B("", !0),
                                            ]),
                                            _: 2,
                                         },
                                         1032,
                                         ["onClick"],
                                      )
                                   ),
                                ),
                                128,
                             ))
                           : (n(), a("div", y9, [L(gt)])),
                     ]),
                     (S = v.value) != null && S.length ? (n(), a("div", f9, [e("div", { class: M(["GameRecord__C-foot-previous", { disabled: i.value <= 1 }]), onClick: y }, [L(I, { name: "arrow-left", class: "GameRecord__C-icon", size: "20" })], 2), e("div", b9, t(i.value) + "/" + t(p.value), 1), e("div", { class: M(["GameRecord__C-foot-next", { disabled: i.value >= p.value }]), onClick: f }, [L(I, { name: "arrow", class: "GameRecord__C-icon", size: "20" })], 2)])) : B("", !0),
                  ])
               );
            }
         );
      },
   });
const C9 = H($9, [["__scopeId", "data-v-b5a08846"]]),
   k9 = l => (ye("data-v-494675dd"), (l = l()), fe(), l),
   T9 = { class: "MyGameRecordList__C" },
   w9 = ["onClick"],
   L9 = { class: "box" },
   I9 = { class: "time" },
   S9 = { key: 0, class: "state state0" },
   G9 = { key: 1, class: "state state3" },
   x9 = { key: 2, class: "state state4" },
   B9 = { key: 3, class: "state state2" },
   N9 = { key: 4, class: "state state5" },
   R9 = { key: 5, class: "state state1" },
   M9 = { key: 0, class: "info" },
   D9 = { class: "order" },
   A9 = { key: 0, class: "li" },
   P9 = { class: "lab" },
   O9 = ["onClick"],
   V9 = ["src"],
   W9 = { key: 1, class: "li" },
   H9 = { class: "lab" },
   z9 = { class: "sub" },
   E9 = { class: "li" },
   F9 = { class: "lab" },
   j9 = { key: 0, class: "sub" },
   U9 = { key: 1, class: "sub" },
   q9 = { key: 2, class: "li" },
   K9 = { class: "lab" },
   Z9 = { class: "sub" },
   X9 = { class: "li" },
   J9 = { class: "lab" },
   Y9 = { class: "sub" },
   Q9 = { class: "li" },
   e$ = { class: "lab" },
   t$ = { class: "sub" },
   s$ = { class: "li" },
   n$ = { class: "lab" },
   a$ = { class: "sub" },
   o$ = { class: "li" },
   l$ = { class: "lab" },
   i$ = { class: "sub" },
   c$ = { class: "li" },
   u$ = { class: "lab" },
   r$ = { class: "sub" },
   d$ = k9(() => e("div", { class: "line" }, [e("p")], -1)),
   _$ = { class: "bet" },
   v$ = { class: "li betNum" },
   p$ = { class: "lab" },
   m$ = { key: 0, class: "txt" },
   g$ = { key: 1, class: "txt" },
   h$ = { key: 2, class: "txt" },
   y$ = { key: 3, class: "betList select" },
   f$ = { key: 4, class: "betList select" },
   b$ = { class: "li" },
   $$ = { class: "lab" },
   C$ = { key: 0, class: "state state0" },
   k$ = { key: 1, class: "state state3" },
   T$ = { key: 2, class: "state state4" },
   w$ = { key: 3, class: "state state2" },
   L$ = { key: 4, class: "state state5" },
   I$ = { key: 5, class: "state state1" },
   S$ = { class: "li" },
   G$ = { class: "lab" },
   x$ = { key: 0, class: "sub success" },
   B$ = { key: 1, class: "sub fail" },
   N$ = { key: 2, class: "sub" },
   R$ = { key: 0, class: "li" },
   M$ = { class: "lab" },
   D$ = { class: "sub" },
   A$ = { key: 1, class: "li" },
   P$ = { class: "lab" },
   O$ = { class: "sub" },
   V$ = { key: 0 },
   W$ = ["onClick"],
   H$ = { key: 1, class: "result" },
   z$ = { key: 0, class: "txt" },
   E$ = { key: 1, class: "txt" },
   F$ = { key: 2, class: "txt" },
   j$ = { key: 3, class: "txt" },
   U$ = { key: 4, class: "txt" },
   q$ = { key: 5, class: "txt" },
   K$ = { key: 6, class: "txt" },
   Z$ = { key: 7, class: "txt" },
   X$ = { key: 8, class: "txt" },
   J$ = { class: "num" },
   Y$ = V({
      __name: "MyRecordList",
      props: { mayrecord: {}, gVSs: {} },
      emits: ["click-cance"],
      setup(l, { emit: s }) {
         const { t: o } = _e(),
            u = k(-1),
            v = b => {
               u.value === b ? (u.value = -1) : (u.value = b);
            },
            p = k(!1),
            d = k(""),
            i = async () => {
               (await de(ql({ orderId: d.value }))) && ((p.value = !1), kn(o("xosoTxt96")), s("click-cance"));
            },
            _ = b => {
               (d.value = b), (p.value = !0);
            },
            r = Ul(i, 1e3),
            g = b => {
               for (var T = [], h = 0; h < b.length; h++) {
                  var w = T.findIndex(function (I) {
                     return I.resultType === b[h].resultType;
                  });
                  w !== -1 ? T[w].result.push("-" + b[h].result) : T.push({ resultType: b[h].resultType, result: [b[h].result] });
               }
               return T;
            },
            m = b => {
               const T = $(b);
               return y(T);
            },
            $ = b => {
               let T = [];
               if (b.includes(",")) {
                  let h = b.split(","),
                     w = {};
                  for (let I = 0; h.length > I; I++) (w = h[I].split("|")), T.push(w);
                  return T;
               }
               return b;
            },
            y = b => {
               let T = b[0],
                  h = b[1],
                  w = [];
               for (let x = 0; T.length > x; x++) for (let S = 0; h.length > S; S++) w.push(T[x] + h[S]);
               let I = b.slice(2);
               return I.length > 0 ? y([w, ...I]) : w;
            },
            C = b => {
               if (b != null) {
                  let T = b.split(",");
                  if (T.length > 0) return T;
               }
               return [];
            },
            f = b => {
               const T = { 大: o("big"), 小: o("small"), 单: o("odd"), 双: o("xosoTxt70") };
               return T[b] ? T[b].replace(/\|/g, ",") : b.replace(/\|/g, ",");
            };
         return (
            he(() => {}),
            (b, T) => (
               n(),
               a("div", T9, [
                  (n(!0),
                  a(
                     N,
                     null,
                     D(
                        b.mayrecord,
                        (h, w) => (
                           n(),
                           a(
                              "div",
                              { class: M(u.value === w ? "item active" : "item"), key: h, onClick: I => v(w) },
                              [
                                 e("div", L9, [e("div", null, [e("h4", null, t(c(o)("code" + h.bettingParentTypeNameCode)), 1), e("span", I9, t(h.createTime), 1)]), h.status === 1 ? (n(), a("div", S9, [e("p", null, t(c(o)("bettingResultState1")), 1)])) : B("", !0), h.status === 3 ? (n(), a("div", G9, [e("p", null, t(c(o)("hasWon")), 1), e("span", null, "+" + t(h.winningAmount), 1)])) : B("", !0), h.status === 2 ? (n(), a("div", x9, [e("p", null, t(c(o)("bettingResultState3")), 1), e("span", null, "-" + t(h.realBettingAmount), 1)])) : B("", !0), h.status === 4 ? (n(), a("div", B9, [e("p", null, t(c(o)("xosoTxt74")), 1)])) : B("", !0), h.status === 5 ? (n(), a("div", N9, [e("p", null, t(c(o)("xosoTxt75")), 1)])) : B("", !0), h.status === 6 ? (n(), a("div", R9, [e("p", null, t(c(o)("xosoTxt76")), 1)])) : B("", !0)]),
                                 u.value === w
                                    ? (n(),
                                      a("div", M9, [
                                         e("div", D9, [
                                            h.orderNo ? (n(), a("div", A9, [e("div", P9, t(c(o)("orderNo")), 1), e("div", { class: "sub", onClick: ut(I => c(Zt)(h.orderNo), ["stop"]) }, [E(t(h.orderNo) + " ", 1), e("img", { src: c(pe)("home/AllLotteryGames/WinGo", "copy") }, null, 8, V9)], 8, O9)])) : B("", !0),
                                            h.issueNo ? (n(), a("div", W9, [e("div", H9, t(c(o)("betIssue")), 1), e("div", z9, t(h.issueNo), 1)])) : B("", !0),
                                            e("div", E9, [e("div", F9, t(c(o)("area")), 1), b.gVSs == "1" ? (n(), a("div", j9, t(c(o)("code" + h.areNameCode)), 1)) : b.gVSs == "2" ? (n(), a("div", U9, t(c(o)("code" + h.typeCode)), 1)) : B("", !0)]),
                                            b.gVSs == "1" ? (n(), a("div", q9, [e("div", K9, t(c(o)("xosoTxt77")), 1), e("div", Z9, t(c(o)("code" + h.nameCode)), 1)])) : B("", !0),
                                            e("div", X9, [e("div", J9, t(c(o)("gamePlay")), 1), e("div", Y9, t(c(o)("code" + h.bettingParentTypeNameCode)), 1)]),
                                            e("div", Q9, [e("div", e$, t(c(o)("xosoTxt78")), 1), e("div", t$, t(c(o)("code" + h.bettingTypeNameCode)), 1)]),
                                            e("div", s$, [e("div", n$, t(c(o)("amountMay")), 1), e("div", a$, t(h.amount), 1)]),
                                            e("div", o$, [e("div", l$, t(c(o)("multiple")), 1), e("div", i$, t(h.bettingMultiple), 1)]),
                                            e("div", c$, [e("div", u$, t(c(o)("xosoTxt79")), 1), e("div", r$, t(h.totalBetting) + " " + t(c(o)("note")), 1)]),
                                         ]),
                                         d$,
                                         e("div", _$, [
                                            e("div", v$, [
                                               e("div", p$, [
                                                  E(t(c(o)("bettingnumber")), 1),
                                                  h.bettingFormat === 1 ? (n(), a("span", m$, "(" + t(c(o)("selectNo")) + ")", 1)) : B("", !0),
                                                  h.bettingFormat === 2 ? (n(), a("span", g$, "(" + t(c(o)("xosoTxt80")) + ")", 1)) : B("", !0),
                                                  h.bettingFormat === 3 ? (n(), a("span", h$, "(" + t(c(o)("xosoTxt81")) + ")", 1)) : B("", !0),
                                                  h.bettingFormat == 1
                                                     ? (n(),
                                                       a("div", y$, [
                                                          (n(!0),
                                                          a(
                                                             N,
                                                             null,
                                                             D(m(h.bettingContent), (I, x) => (n(), a("span", { class: M({ active: C(h.winningNum).includes(I) }), key: x }, t(I), 3))),
                                                             128,
                                                          )),
                                                       ]))
                                                     : (n(),
                                                       a("div", f$, [
                                                          (n(!0),
                                                          a(
                                                             N,
                                                             null,
                                                             D(h.bettingContent.split(","), (I, x) => (n(), a("span", { class: M({ active: C(h.winningNum).includes(I) }), key: x }, t(f(I)), 3))),
                                                             128,
                                                          )),
                                                       ])),
                                               ]),
                                            ]),
                                            e("div", b$, [e("div", $$, t(c(o)("statusMay")), 1), h.status === 1 ? (n(), a("div", C$, [e("p", null, t(c(o)("bettingResultState1")), 1)])) : B("", !0), h.status === 3 ? (n(), a("div", k$, [e("p", null, t(c(o)("hasWon")), 1)])) : B("", !0), h.status === 2 ? (n(), a("div", T$, [e("p", null, t(c(o)("bettingResultState3")), 1)])) : B("", !0), h.status === 4 ? (n(), a("div", w$, [e("p", null, t(c(o)("xosoTxt74")), 1)])) : B("", !0), h.status === 5 ? (n(), a("div", L$, [e("p", null, t(c(o)("xosoTxt75")), 1)])) : B("", !0), h.status === 6 ? (n(), a("div", I$, [e("p", null, t(c(o)("xosoTxt76")), 1)])) : B("", !0)]),
                                            e("div", S$, [e("div", G$, t(c(o)("winOrLose")), 1), h.status === 3 ? (n(), a("div", x$, "+" + t(h.winningAmount), 1)) : h.status === 2 ? (n(), a("div", B$, "-" + t(h.realBettingAmount), 1)) : (n(), a("div", N$, "---"))]),
                                            h.createTime ? (n(), a("div", R$, [e("div", M$, t(c(o)("createTime")), 1), e("div", D$, t(h.createTime), 1)])) : B("", !0),
                                            h.openingTime ? (n(), a("div", A$, [e("div", P$, t(c(o)("winTrxTime")), 1), e("div", O$, t(h.openingTime), 1)])) : B("", !0),
                                         ]),
                                         h.issueNoStatus === 1 && h.status === 1 && b.gVSs == "1" ? (n(), a("div", V$, [e("div", { class: "btn", onClick: ut(I => _(h.id), ["stop"]) }, t(c(o)("xosoTxt82")), 9, W$)])) : B("", !0),
                                         h.openingResult
                                            ? (n(),
                                              a("div", H$, [
                                                 (n(!0),
                                                 a(
                                                    N,
                                                    null,
                                                    D(
                                                       g(h.openingResult),
                                                       (I, x) => (
                                                          n(),
                                                          a(
                                                             "div",
                                                             { class: M(x < 3 ? "result-item jusb" : "result-item"), key: x },
                                                             [
                                                                I.resultType == 0 ? (n(), a("div", z$, t(c(o)("GrandPrize")), 1)) : B("", !0),
                                                                I.resultType == 1 ? (n(), a("div", E$, t(c(o)("firstprize")), 1)) : B("", !0),
                                                                I.resultType == 2 ? (n(), a("div", F$, t(c(o)("secondprize")), 1)) : B("", !0),
                                                                I.resultType == 3 ? (n(), a("div", j$, t(c(o)("thirdprize")), 1)) : B("", !0),
                                                                I.resultType == 4 ? (n(), a("div", U$, t(c(o)("fourprize")), 1)) : B("", !0),
                                                                I.resultType == 5 ? (n(), a("div", q$, t(c(o)("fiveprize")), 1)) : B("", !0),
                                                                I.resultType == 6 ? (n(), a("div", K$, t(c(o)("sixprize")), 1)) : B("", !0),
                                                                I.resultType == 7 ? (n(), a("div", Z$, t(c(o)("sevenprize")), 1)) : B("", !0),
                                                                I.resultType == 8 ? (n(), a("div", X$, t(c(o)("eightprize")), 1)) : B("", !0),
                                                                e("div", J$, [
                                                                   (n(!0),
                                                                   a(
                                                                      N,
                                                                      null,
                                                                      D(I.result, (S, G) => (n(), a("span", { key: G }, t(S), 1))),
                                                                      128,
                                                                   )),
                                                                ]),
                                                             ],
                                                             2,
                                                          )
                                                       ),
                                                    ),
                                                    128,
                                                 )),
                                              ]))
                                            : B("", !0),
                                      ]))
                                    : B("", !0),
                              ],
                              10,
                              w9,
                           )
                        ),
                     ),
                     128,
                  )),
                  L(Mt, { show: p.value, "onUpdate:show": T[0] || (T[0] = h => (p.value = h)), title: c(o)("xosoTxt99"), onConfirm: c(r) }, null, 8, ["show", "title", "onConfirm"]),
               ])
            )
         );
      },
   });
const Q$ = H(Y$, [["__scopeId", "data-v-494675dd"]]),
   eC = { class: "MyGameRecord__C" },
   tC = { class: "MyGameRecord__C-body" },
   sC = { key: 0, class: "MyGameRecord__C-head" },
   nC = { key: 2, class: "MyGameRecord__C-body-empty" },
   aC = { key: 0, class: "MyGameRecord__C-foot" },
   oC = { class: "MyGameRecord__C-foot-page" },
   lC = V({
      __name: "MyGameRecord",
      props: { parmas: {}, ApiFun: {}, cityCode: {}, hasHead: { type: Boolean, default: !0 }, gVSs: {}, areId: {} },
      setup(l, { expose: s }) {
         const o = l,
            u = ue(),
            v = k(0),
            p = k(10),
            d = k(1),
            i = k([]),
            _ = async () => {
               var T, h, w;
               const f = r(o.parmas);
               (o == null ? void 0 : o.gVSs) == "2" && (o != null && o.areId && (f.areId = o == null ? void 0 : o.areId), o != null && o.cityCode && (f.typeId = Number(o == null ? void 0 : o.cityCode)));
               const b = await de(o.ApiFun({ pageSize: p.value, pageNo: d.value, ...f }));
               b && ((i.value = ((T = b.data) == null ? void 0 : T.list) || []), (v.value = ((h = b.data) == null ? void 0 : h.totalPage) || 0), (d.value = (w = b.data) == null ? void 0 : w.pageNo));
            };
         function r(f) {
            const b = {};
            for (const T in f) f[T] !== "" && (b[T] = f[T]);
            return b;
         }
         const g = () => {
               _();
            },
            m = q(() => (o.gVSs == "1" ? "AllLotteryGames-XoSoRecord" : o.gVSs == "2" ? "AllLotteryGames-XoSoRecordF" : "")),
            $ = f => {
               u.push({ name: f, query: { areId: o.areId, typeId: o.cityCode } });
            },
            y = () => {
               d.value--, _();
            },
            C = () => {
               d.value++, _();
            };
         return (
            s({ getData: _ }),
            kt(() => {
               _();
            }),
            (f, b) => {
               var h, w;
               const T = U("van-icon");
               return n(), a("div", eC, [e("div", tC, [f.hasHead ? (n(), a("div", sC, [e("div", { class: "MyGameRecord__C-head-moreB", onClick: b[0] || (b[0] = I => $(m.value || "")) }, t(f.$t("more")), 1)])) : B("", !0), (h = i.value) != null && h.length ? (n(), Z(Q$, { key: 1, mayrecord: i.value, onClickCance: g, gVSs: f.gVSs }, null, 8, ["mayrecord", "gVSs"])) : (n(), a("div", nC, [L(gt)]))]), (w = i.value) != null && w.length ? (n(), a("div", aC, [e("div", { class: M(["MyGameRecord__C-foot-previous", { disabled: d.value <= 1 }]), onClick: y }, [L(T, { name: "arrow-left", class: "MyGameRecord__C-icon", size: "20" })], 2), e("div", oC, t(d.value) + "/" + t(v.value), 1), e("div", { class: M(["MyGameRecord__C-foot-next", { disabled: d.value >= v.value }]), onClick: C }, [L(T, { name: "arrow", class: "MyGameRecord__C-icon", size: "20" })], 2)])) : B("", !0)]);
            }
         );
      },
   });
const An = H(lC, [["__scopeId", "data-v-a9fa5d22"]]),
   iC = { key: 0, class: "WinningTip__C-body-l1 isL" },
   cC = { key: 1, class: "WinningTip__C-body-l1" },
   uC = { key: 2, class: "notwinning" },
   rC = { key: 3, class: "WinningTip__C-body-l2" },
   dC = { key: 4, class: "WinningTip__C-body-l5" },
   _C = { class: "WinningTip__C-body-l5-content" },
   vC = { class: "balltext" },
   pC = { class: "WinningTip__C-body-l3" },
   mC = { key: 0, class: "isLose" },
   gC = { class: "head" },
   hC = { class: "bonus" },
   yC = { class: "gameDetail" },
   fC = { class: "gameDetail" },
   bC = { class: "WinningTip__C-body-l4" },
   $C = ["onClick"],
   CC = V({
      __name: "WinningTips",
      setup(l, { expose: s }) {
         const o = q(() => (p.value[0] ? p.value[0].winningAmount == 0 : !1)),
            u = q(() => p.value[0] || {}),
            v = k(!1),
            p = k([]);
         let d = k();
         const i = () => {
            clearTimeout(d.value),
               p.value.shift(),
               v.value &&
                  p.value.length &&
                  (d.value = setTimeout(() => {
                     i();
                  }, 1e3 * 3));
         };
         Ve(
            () => p.value.length,
            m => {
               m ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "");
            },
         );
         const _ = () => {
               (v.value = !v.value),
                  v.value
                     ? (d.value = setTimeout(() => {
                          i();
                       }, 1e3 * 3))
                     : clearTimeout(d.value);
            },
            r = m => {
               p.value.push(m),
                  v.value &&
                     (d.value = setTimeout(() => {
                        i();
                     }, 1e3 * 3));
            },
            g = () => {
               p.value = [];
            };
         return (
            s({ showMark: r }),
            (m, $) =>
               te(
                  (n(),
                  a(
                     "div",
                     { class: "WinningTip__C", onClick: i },
                     [
                        e(
                           "div",
                           { class: M(["WinningTip__C-body", { isL: o.value }]) },
                           [
                              o.value ? (n(), a("div", iC, t(m.$t("k3WarningTip1")), 1)) : B("", !0),
                              o.value ? B("", !0) : (n(), a("div", cC, t(m.$t("k3WarningTip2")), 1)),
                              o.value ? (n(), a("div", uC)) : B("", !0),
                              o.value ? B("", !0) : (n(), a("div", rC, t(m.$t("code" + u.value.bettingParentTypeNameCode)) + "/" + t(m.$t("code" + u.value.bettingTypeNameCode)), 1)),
                              o.value
                                 ? B("", !0)
                                 : (n(),
                                   a("div", dC, [
                                      e("div", _C, [
                                         (n(!0),
                                         a(
                                            N,
                                            null,
                                            D(u.value.openingResult, (y, C) => (n(), a("div", { class: "ball", key: C }, [e("div", vC, t(y), 1)]))),
                                            128,
                                         )),
                                      ]),
                                   ])),
                              e("div", pC, [o.value ? (n(), a("div", mC, t(m.$t("winTips4")), 1)) : B("", !0), o.value ? B("", !0) : (n(), a(N, { key: 1 }, [e("div", gC, t(m.$t("winTips5")), 1), e("div", hC, t(c(Be)(u.value.winningAmount)), 1)], 64)), e("div", yC, t(m.$t(`code${u.value.typeCode}`)), 1), e("div", fC, t(m.$t("winTips6")) + t(u.value.issueNo), 1)]),
                              e("div", bC, [e("div", { class: M(["acitveBtn", { active: v.value }]), onClick: ut(_, ["stop"]) }, null, 10, $C), E(" " + t(m.$t("autoShutOff3s")), 1)]),
                              e("div", { class: "closeBtn", onClick: g }),
                           ],
                           2,
                        ),
                     ],
                     512,
                  )),
                  [[He, p.value.length]],
               )
         );
      },
   });
const kC = H(CC, [["__scopeId", "data-v-7e1ad106"]]),
   Pn = l => (ye("data-v-273cca7e"), (l = l()), fe(), l),
   TC = { class: "NewVietnam__C" },
   wC = Pn(() => e("div", { class: "bottombg" }, null, -1)),
   LC = { class: "box p-l-10 p-r-10 p-t-10 p-b-10" },
   IC = ["src"],
   SC = { class: "title c-tc" },
   GC = { key: 0, class: "titlebets c-tc border60" },
   xC = { class: "box" },
   BC = { class: "c-row" },
   NC = { key: 2, class: M("c-row c-flex-warp compound") },
   RC = { key: 0, class: "item" },
   MC = { class: "title" },
   DC = { class: "numcontainer" },
   AC = { key: 1, class: "item" },
   PC = { class: "title" },
   OC = { class: "numcontainer" },
   VC = { key: 2, class: "item" },
   WC = { class: "title" },
   HC = { class: "numcontainer" },
   zC = { key: 3, class: "item" },
   EC = { class: "title" },
   FC = { class: "numcontainer" },
   jC = { key: 4, class: "item" },
   UC = { class: "numcontainer" },
   qC = { class: "popup-info" },
   KC = { class: "popup-info-item c-row c-row-between" },
   ZC = { class: "tit" },
   XC = { class: "c-row c-row-between stepper-box" },
   JC = { class: "popup-info-item c-row c-flew-end" },
   YC = { class: "c-row multiple-box" },
   QC = ["onClick"],
   ek = { class: "c-row c-row-between c-row-middle quantity" },
   tk = { class: "c-row c-row-middle-center" },
   sk = Pn(() => e("span", { class: "line" }, "|", -1)),
   nk = { class: "num" },
   ak = { class: "c-row c-row-middle-center" },
   ok = Pn(() => e("span", { class: "line" }, "|", -1)),
   lk = { class: "num" },
   ik = { class: "wallet c-row c-row-between c-row-middle" },
   ck = { class: "txt c-row" },
   uk = { class: "num c-row c-row-middle" },
   rk = { class: "balance c-row c-row-middle" },
   dk = { class: "txt" },
   _k = { class: "num yellow" },
   vk = { key: 0, class: "wallet c-row c-row-between c-row-middle" },
   pk = { class: "txt c-row bg7172" },
   mk = ["src"],
   gk = { class: "popup-info-item c-row c-row-middle" },
   hk = { class: "agree p-r-15" },
   yk = { class: "popup-btn c-row c-row-between" },
   fk = { class: "left" },
   bk = { class: "right" },
   $k = { class: "" },
   Ck = { class: "areList" },
   kk = ["src"],
   Tk = { class: "itemsC" },
   wk = ["onClick"],
   Lk = { class: "PreSale" },
   Ik = { class: "head" },
   Sk = { class: "body" },
   Gk = { class: "foot" },
   xk = ["src"],
   Bk = ["src"],
   Nk = { class: "font36" },
   Rk = { class: "tipMsg" },
   Mk = V({
      __name: "index",
      setup(l) {
         var Zn, Xn;
         const s = ue(),
            o = Cn(),
            { t: u } = _e(),
            v = k(!1),
            p = q(() => {
               var F, j;
               return m.value ? ((F = m.value) == null ? void 0 : F.type) : (j = o.query) == null ? void 0 : j.type;
            }),
            d = k(s.currentRoute.value.query.nameCode),
            i = k(Number((Zn = o.query) == null ? void 0 : Zn.areId) || 1),
            _ = q(() => (d.value ? u("code" + d.value) : "")),
            r = k((Xn = o.query) == null ? void 0 : Xn.code),
            g = k(),
            m = k(),
            $ = ze({ bettingParentType: "", areId: "", startDate: "", endDate: "" }),
            y = new Date(),
            C = `${Ke(y).format("YYYY-MM-DD")} 00:00:00`,
            f = `${Ke(y).format("YYYY-MM-DD")} 23:59:59`;
         ($.startDate = C), ($.endDate = f);
         const b = k(!1),
            T = k([]),
            h = k([]),
            w = k({}),
            I = k(0),
            x = k(1),
            S = k(0),
            G = k(1),
            R = k(1),
            O = k(""),
            P = k(""),
            W = k("00:00:00"),
            J = k(1.995),
            le = k(1),
            ie = k([]),
            ne = k(0),
            z = k(""),
            X = k(1),
            ce = k(""),
            Ne = k([]),
            Se = k(0),
            ge = k(0),
            Je = k(0),
            Qe = k(0),
            et = k(""),
            we = k(),
            xe = k(1e3),
            Le = k([]),
            Ie = k([]),
            re = k([]),
            se = k([]),
            Q = k([]),
            ee = k([]),
            ae = k("1000"),
            Ge = k(1),
            Re = k(!1),
            dt = q(() => !(zt.value > cs.value || at.value <= 0)),
            qe = k(["000/099", "100/199", "200/299", "300/399", "400/499", "500/599", "600/699", "700/799", "800/899", "900/999"]),
            $e = k("000/099"),
            Ht = k(0),
            At = k(!1),
            Tt = k(1),
            De = k(1),
            ls = k(0),
            wt = k(0),
            is = k(0),
            Lt = k("GameRecord"),
            an = { GameRecord: C9, MyGameRecord: An },
            at = k(1),
            Os = k(),
            tt = k(!1),
            Ss = k(!0),
            zt = k(0),
            cs = k(0),
            Pt = k(0),
            us = k(!1),
            qt = k(),
            Qt = k(!1),
            K = k(""),
            oe = k(""),
            Ce = q(() => {
               if (p.value == "1") return Ea;
               if (p.value == "2") return Fa;
            }),
            Me = F => {
               const j = String(Math.floor((We.value % 3600) / 60)).padStart(2, "0"),
                  Y = String(We.value % 60).padStart(2, "0");
               return `${j}:${Y}`;
            },
            We = k(),
            Oe = k(null),
            ot = k("00:00"),
            Fe = k(!1),
            st = () => {
               Oe.value = setInterval(() => {
                  We.value <= 0
                     ? ((ot.value = "00:00"),
                       setTimeout(() => {
                          Fe.value = !0;
                       }, 500),
                       clearInterval(Oe.value),
                       Kt(),
                       setTimeout(() => {
                          ds(!0);
                       }, 5e3))
                     : ((Fe.value = !1), (ot.value = Me(We.value)), We.value--);
               }, 1e3);
            },
            pt = k(null),
            Et = (F, j) => {
               clearInterval(Pt.value),
                  (Re.value = !1),
                  (Pt.value = (j - F) / 1e3),
                  (pt.value = setInterval(() => {
                     if (Pt.value <= 0) clearInterval(pt.value), (W.value = "00:00:00"), (Re.value = !0);
                     else {
                        const Y = String(Math.floor(Pt.value / 3600)).padStart(2, "0"),
                           me = String(Math.floor((Pt.value % 3600) / 60)).padStart(2, "0"),
                           ke = String(Pt.value % 60).padStart(2, "0");
                        (W.value = Y + ":" + me + ":" + ke), Pt.value--;
                     }
                  }, 1e3));
            };
         function bt() {
            m.value ||
               (Ct({ message: u("xosoTip5"), wordBreak: "break-word" }),
               setTimeout(function () {
                  Kn("AllLotteryGames-XoSo");
               }, 2e3));
         }
         const Kt = async () => {
            let F;
            if (p.value == "1") {
               const ke = Ke(o.query.day).format("YYYY-MM-DD HH:mm:ss");
               F = await de(Ha({ dateTime: ke }));
            } else p.value == "2" && (F = await de(za({ are: i.value, typeId: Number(r.value) })));
            F.data.length == 0 && bt();
            let j = F.data.find(ke => ke.day == o.query.day);
            P.value = j.day;
            let Y = j.areInfos.find(ke => (ke == null ? void 0 : ke.areId) == i.value);
            const me = Y == null ? void 0 : Y.serverTime;
            if (((m.value = Y.areIssueNos.find(ke => ke.code == r.value)), m.value || bt(), p.value == "1")) {
               const ke = Y == null ? void 0 : Y.closingTime;
               clearInterval(pt.value), Et(new Date(me.replace(/-/g, "/")).getTime(), new Date(ke.replace(/-/g, "/")).getTime());
            } else p.value == "2" && ((We.value = (new Date(m.value.endTime.replace(/-/g, "/")).getTime() - new Date(me.replace(/-/g, "/")).getTime()) / 1e3), clearInterval(Oe.value), st());
         };
         let Ft = null;
         const Ot = k(""),
            rs = k(),
            ds = async (F = !1) => {
               var me, ke, Ye, nt, ht, yt, be, Ae;
               if (v.value || p.value != "2") return;
               let j,
                  Y = !0;
               if (Lt.value === "GameRecord") {
                  if (((j = await de(Wa({ pageSize: 10, pageNo: 1, areId: i.value, typeId: Number(r.value) }))), j)) {
                     if ((((ke = (me = j.data) == null ? void 0 : me.list) == null ? void 0 : ke.length) > 0 && (Ot.value.trim().length == 0 || Ot.value != ((nt = (Ye = j.data) == null ? void 0 : Ye.list[0]) == null ? void 0 : nt.issueNumber)) && ((Y = !1), (Ot.value = (yt = (ht = j.data) == null ? void 0 : ht.list[0]) == null ? void 0 : yt.issueNumber)), Y == !0 && F)) {
                        clearTimeout(Ft),
                           (Ft = setTimeout(() => {
                              ds(!0);
                           }, 1e3));
                        return;
                     }
                     (w.value = (be = j.data) == null ? void 0 : be.list[0]),
                        (rs.value = j.data),
                        lt(() => {
                           qt.value.getData(!1, rs.value);
                        });
                  }
               } else if (Lt.value === "MyGameRecord" && ((j = await de(Kl({ areId: i.value, typeId: Number(r.value) }))), j && j.data && j.data.openingResult && j.data.openingResult.length > 0 && ((Y = !1), (Ot.value = (Ae = j.data) == null ? void 0 : Ae.issueNumber), (w.value = j.data)), Y == !0 && F)) {
                  clearTimeout(Ft),
                     (Ft = setTimeout(() => {
                        ds(!0);
                     }, 1e3));
                  return;
               }
            };
         function yo() {
            let F = JSON.parse(sessionStorage.getItem("xosoList") || ""),
               j = [];
            for (let Y = 0; Y < F.areInfos.length; Y++) j.push({ text: u("code" + F.areInfos[Y].areNameCode), value: F.areInfos[Y].areId, disabled: !0, info: F.areInfos[Y].areIssueNos });
            T.value = j;
         }
         function fo(F, j) {
            var Y;
            if (r.value == F.code) {
               At.value = !1;
               return;
            }
            rn(),
               (i.value = j),
               (d.value = F.nameCode),
               (r.value = F.code),
               (I.value = 0),
               (S.value = 0),
               (x.value = h.value.length > 0 ? ((Y = h == null ? void 0 : h.value[0]) == null ? void 0 : Y.categoryId) : 1),
               (At.value = !1),
               bo(F, j),
               (m.value = F),
               F.type == "2" && ((Re.value = !1), ds()),
               Kt(),
               Hn(),
               lt(() => {
                  Lt.value === "MyGameRecord" && qt.value.getData(!0);
               });
         }
         function bo(F, j) {
            const Y = ll("hash");
            (Y.code = F == null ? void 0 : F.code), (Y.nameCode = F == null ? void 0 : F.nameCode), (Y.type = F == null ? void 0 : F.type), (Y.areId = j);
         }
         const Hn = async () => {
               var j, Y, me, ke, Ye, nt, ht, yt;
               zn(), _t();
               let F;
               p.value == "1" ? (F = await de(Zl({ areaId: i.value }))) : p.value == "2" && (F = await de(Xl({ areaId: i.value, typeId: Number(r.value) }))), F && ((h.value = (Y = (j = F.data) == null ? void 0 : j.areaConfigList[0]) == null ? void 0 : Y.gameCategoryList), localStorage.setItem("gameCategoryList", JSON.stringify((me = F.data.areaConfigList[0]) == null ? void 0 : me.gameCategoryList)), (O.value = (Ye = (ke = h == null ? void 0 : h.value[0]) == null ? void 0 : ke.gamePlayList[0]) == null ? void 0 : Ye.playNameCode), (G.value = (ht = (nt = h == null ? void 0 : h.value[0]) == null ? void 0 : nt.gamePlayList[0]) == null ? void 0 : ht.playId), (x.value = (yt = h == null ? void 0 : h.value[0]) == null ? void 0 : yt.categoryId), on());
            },
            $o = (F, j) => {
               _t(), (I.value = j), (x.value = F), (S.value = 0), (G.value = h == null ? void 0 : h.value[j].gamePlayList[0].playId), (R.value = h.value[j].gamePlayList[0].betType), (O.value = h.value[j].gamePlayList[0].playNameCode), (Ht.value = 0), on();
            },
            Co = (F, j, Y, me) => {
               (S.value = j), (G.value = F), (O.value = Y), (R.value = Number(me)), (Ht.value = 0), on(), _t();
            },
            on = async () => {
               var j, Y, me, ke, Ye, nt, ht, yt, be, Ae, vt, Pe, dn, Jn, Yn, Qn, ea, ta, sa, na, aa;
               zn();
               let F;
               p.value == "1" ? (F = await de(Jl({ areaId: i.value, categoryId: x.value, playId: G.value }))) : p.value == "2" && (F = await de(Yl({ areaId: i.value, categoryId: x.value, playId: G.value }))),
                  (z.value = (j = F.data) == null ? void 0 : j.betMethod),
                  (ce.value = (Y = F.data) == null ? void 0 : Y.betScopeConfig),
                  (Se.value = (me = F.data) == null ? void 0 : me.isThreeNumber),
                  (ge.value = (ke = F.data) == null ? void 0 : ke.betNumber),
                  (et.value = (Ye = F.data) == null ? void 0 : Ye.fastSpeciaSelectNo),
                  (Je.value = (nt = F.data) == null ? void 0 : nt.fastRandomType),
                  (Qe.value = (ht = F.data) == null ? void 0 : ht.fastSpeciaType),
                  (is.value = (yt = F.data) == null ? void 0 : yt.playOddInfo.defaultOdds),
                  (J.value = (be = F.data) == null ? void 0 : be.playOddInfo.oddsOrAmount),
                  (ls.value = (Ae = F.data) == null ? void 0 : Ae.playOddInfo.bettingAmount),
                  (Ne.value = (Pe = (vt = F.data) == null ? void 0 : vt.fastRandomSelecNo) == null ? void 0 : Pe.split(",").map(Number)),
                  (ie.value = (Jn = (dn = F.data) == null ? void 0 : dn.playOddInfo.bettingMultiple) == null ? void 0 : Jn.split(",").map(Number)),
                  (at.value = (Qn = (Yn = F.data) == null ? void 0 : Yn.playOddInfo.bettingMultiple) == null ? void 0 : Qn.split(",")[0]),
                  (De.value = (ea = F.data) == null ? void 0 : ea.perBetNumber),
                  x.value == 8 && (ee.value = (ta = F.data) == null ? void 0 : ta.funPlayOddList),
                  ko((sa = F.data) == null ? void 0 : sa.betMethod),
                  wo((na = F.data) == null ? void 0 : na.betNumber),
                  Lo((aa = F.data) == null ? void 0 : aa.isThreeNumber);
            },
            ko = F => {
               F != null && F.includes("1") ? (X.value = 1) : x.value === 4 || x.value === 8 ? X.value == 1 : (X.value = 3);
            },
            To = (F, j) => {
               (ae.value = F.oddTypeName), (Ge.value = F.oddsOrAmount), (Q.value = [ae.value]), Xe(3, ge.value);
            },
            wo = F => {
               F == 10 ? (Tt.value = 1) : F == 8 ? (Tt.value = 2) : F == 4 ? (Tt.value = 3) : F == 3 ? (Tt.value = 4) : F == 2 ? (Tt.value = 5) : (Tt.value = 0);
            },
            Lo = F => {
               F == 1 && (we.value = $e.value.split("/")[0][0].toString());
            },
            zn = () => {
               (X.value = 1), (J.value = 0), (ls.value = 0), (ie.value = []), (z.value = ""), (ce.value = ""), (Ne.value = []), (Se.value = 0), (ge.value = 0), (et.value = ""), (Je.value = 0), (Qe.value = 0), (xe.value = 1e3), (we.value = "");
            },
            _t = () => {
               (Le.value = []),
                  (Ie.value = []),
                  (re.value = []),
                  (se.value = []),
                  (Q.value = []),
                  (le.value = 0),
                  (ae.value = "1000"),
                  (zt.value = 0),
                  (wt.value = 0),
                  (at.value = 1),
                  (oe.value = ""),
                  (xe.value = 1e3),
                  lt(() => {
                     g.value && g.value.cleardata();
                  });
            },
            Io = F => {
               oe.value = F;
               let Y = F.split(",").flatMap(me => me.split("|"));
               (Q.value = Y.map(String)), Xe(X.value, ge.value);
            },
            So = (F, j, Y, me) => {
               F == "Thousand" ? (me == "all" ? (Le.value = Vs(j, Y)) : me == "big" ? (Le.value = It(j, Y, "big", 0)) : me == "small" ? (Le.value = It(j, Y, "small", 0)) : me == "odd" ? (Le.value = St(j, Y, "odd", 0)) : (Le.value = St(j, Y, "even", 0))) : F == "hundred" ? (me == "all" ? (Ie.value = Vs(j, Y)) : me == "big" ? (Ie.value = It(j, Y, "big", 0)) : me == "small" ? (Ie.value = It(j, Y, "small", 0)) : me == "odd" ? (Ie.value = St(j, Y, "odd", 0)) : (Ie.value = St(j, Y, "even", 0))) : F == "ten" ? (me == "all" ? (re.value = Vs(j, Y)) : me == "big" ? (re.value = It(j, Y, "big", 0)) : me == "small" ? (re.value = It(j, Y, "small", 0)) : me == "odd" ? (re.value = St(j, Y, "odd", 0)) : (re.value = St(j, Y, "even", 0))) : me == "all" ? (se.value = Vs(j, Y)) : me == "big" ? (se.value = It(j, Y, "big", 0)) : me == "small" ? (se.value = It(j, Y, "small", 0)) : me == "odd" ? (se.value = St(j, Y, "odd", 0)) : (se.value = St(j, Y, "even", 0)), Xe(X.value, ge.value);
            },
            Go = (F, j) => {
               if (F == 0) j == "even" ? (_t(), (Q.value = St(0, 99, "even", 2)), Xe(X.value, ge.value)) : j == "big" ? (_t(), (Q.value = It(0, 99, "big", 2)), Xe(X.value, ge.value)) : j == "small" ? (_t(), (Q.value = It(0, 99, "small", 2)), Xe(X.value, ge.value)) : j == "odd" ? (_t(), (Q.value = St(0, 99, "odd", 2)), Xe(X.value, ge.value)) : (_t(), (Q.value = ia(0, 99, 2)), Xe(X.value, ge.value));
               else {
                  let Y = Number($e.value.split("/")[0]),
                     me = Number($e.value.split("/")[1]);
                  j == "even" ? (_t(), (Q.value = St(Y, me, "even", 3)), Xe(X.value, ge.value)) : j == "big" ? (_t(), (Q.value = It(Y, me, "big", 3)), Xe(X.value, ge.value)) : j == "small" ? (_t(), (Q.value = It(Y, me, "small", 3)), Xe(X.value, ge.value)) : j == "odd" ? (_t(), (Q.value = St(Y, me, "odd", 3)), Xe(X.value, ge.value)) : (_t(), (Q.value = ia(Y, me, 3)), Xe(X.value, ge.value));
               }
            },
            xo = (F, j, Y) => {
               if (F == "") {
                  let me = j + "" + Y;
                  Q.value.includes(me)
                     ? (Q.value = Q.value.filter(function (ke) {
                          return ke != me;
                       }))
                     : Q.value.push(me);
               } else {
                  let me = F + "" + j + Y;
                  Q.value.includes(me)
                     ? (Q.value = Q.value.filter(function (ke) {
                          return ke != me;
                       }))
                     : Q.value.push(me);
               }
               Xe(X.value, ge.value);
            },
            Bo = (F, j) => {
               F == "Thousand"
                  ? Le.value.includes(j)
                     ? (Le.value = Le.value.filter(function (Y) {
                          return Y != j;
                       }))
                     : Le.value.push(j)
                  : F == "Hundred"
                    ? Ie.value.includes(j)
                       ? (Ie.value = Ie.value.filter(function (Y) {
                            return Y != j;
                         }))
                       : Ie.value.push(j)
                    : F == "ten"
                      ? re.value.includes(j)
                         ? (re.value = re.value.filter(function (Y) {
                              return Y != j;
                           }))
                         : re.value.push(j)
                      : se.value.includes(j)
                        ? (se.value = se.value.filter(function (Y) {
                             return Y != j;
                          }))
                        : se.value.push(j),
                  Xe(X.value, ge.value);
            },
            No = (F, j) => {
               (Ht.value = j), ($e.value = F), (xe.value = 1e3), (we.value = $e.value.split("/")[0][0].toString()), _t();
            },
            Ro = (F, j, Y) => {
               if (((xe.value = j), Y == 0)) (Q.value = ca(Number(F) * ge.value, 0, 99, Y)), Xe(X.value, ge.value);
               else {
                  let me = Number($e.value.split("/")[0]),
                     ke = Number($e.value.split("/")[1]);
                  (Q.value = ca(Number(F), me, ke, Y)), Xe(X.value, ge.value);
               }
            },
            Mo = F => {
               (X.value = F), _t();
            },
            Do = () => {
               (tt.value = !1), _t();
            },
            Ao = F => {},
            Po = () => {
               (us.value = !1), (Ss.value = !0);
            },
            Oo = () => {
               (tt.value = !1), (at.value = 1), Xe(X.value, ge.value);
            },
            En = () => {
               const F = h.value[I.value].gamePlayList[S.value].availableBetNumber,
                  j = h.value[I.value].gamePlayList[S.value].eachIssueBetMaxWinningAmount;
               return wt.value > F ? Ee(u("xosoTip1", [F])) : zt.value > j ? Ee(u("xosoTip2", [j])) : !0;
            },
            Vo = async () => {
               var j, Y, me, ke;
               if (En() === !0) {
                  if (wt.value > 5e3) return Ee(u("xosoTxt94"));
                  if (X.value == 1) (j = ce.value) != null && j.includes("4") ? (se.value.length > 0 && re.value.length > 0 && Ie.value.length > 0 && Le.value.length > 0 ? (tt.value = !0) : Ee(u("xosoTxt95"))) : (Y = ce.value) != null && Y.includes("3") ? (se.value.length > 0 && re.value.length > 0 && Ie.value.length > 0 ? (tt.value = !0) : Ee(u("xosoTxt95"))) : (me = ce.value) != null && me.includes("2") ? ((se.value.length > 0 && re.value.length > 0 && x.value != 4) || (re.value.length > 0 && x.value == 4) ? (tt.value = !0) : Ee(u("xosoTxt95"))) : (ke = ce.value) != null && ke.includes("1") ? (se.value.length > 0 ? (tt.value = !0) : Ee(u("xosoTxt95"))) : Q.value.length > 0 && x.value == 8 ? (tt.value = !0) : Ee(u("xosoTxt95"));
                  else if (X.value == 3) Fn(ge.value, Q.value);
                  else if (X.value == 2) {
                     if (!Oi.inputrule.test(oe.value)) return Ee({ message: u(Vi.inputtip), wordBreak: "break-word" });
                     for (let Ye = 0; Ye < Q.value.length; Ye++) if (Q.value[Ye].toString().length != De.value) return Ee(u("xosoTxt95"));
                     if (Ql(Q.value)) return Ee(u("xosoTxt98"));
                     Fn(ge.value, Q.value);
                  } else x.value == 8 && Q.value.length === 1 ? (tt.value = !0) : Ee(u("xosoTxt95"));
                  Xe(X.value, ge.value);
               }
            },
            Fn = (F, j) => {
               F == 1 ? (j.length > 0 ? (tt.value = !0) : Ee(u("xosoTxt95"))) : F == 2 ? (j.length % 2 == 0 ? (tt.value = !0) : Ee(u("xosoTxt95"))) : F == 3 ? (j.length % 3 == 0 ? (tt.value = !0) : Ee(u("xosoTxt95"))) : F == 4 ? (j.length % 4 == 0 ? (tt.value = !0) : Ee(u("xosoTxt95"))) : F == 8 ? (j.length % 8 == 0 ? (tt.value = !0) : Ee(u("xosoTxt95"))) : F == 10 && (j.length % 10 == 0 ? (tt.value = !0) : Ee(u("xosoTxt95")));
            },
            ln = k(null),
            Wo = async () => {
               ln.value && clearTimeout(ln.value),
                  (ln.value = setTimeout(async () => {
                     var nt, ht, yt;
                     if (Fe.value) return Ct({ message: u("xosoTip6"), wordBreak: "break-word" });
                     if (!dt.value || En() !== !0) return;
                     let j = [],
                        Y = "";
                     if (
                        (X.value == 1
                           ? ce.value.toString().includes("4")
                              ? (Y = Le.value.join("|") + "," + Ie.value.join("|") + "," + re.value.join("|") + "," + se.value.join("|"))
                              : ce.value.toString().includes("3")
                                ? (Y = Ie.value.join("|") + "," + re.value.join("|") + "," + se.value.join("|"))
                                : ce.value.toString().includes("2")
                                  ? x.value == 4
                                     ? (Y = re.value.join(","))
                                     : (Y = re.value.join("|") + "," + se.value.join("|"))
                                  : x.value == 4
                                    ? ((Y = se.value.join(",")), (X.value = 3))
                                    : x.value == 8 && (Y = Q.value[0])
                           : [2, 3].includes(X.value)
                             ? ge.value == 1
                                ? (Y = Q.value.join(","))
                                : ge.value == 2
                                  ? (Y = Q.value.reduce((Ae, vt, Pe) => (Pe % 2 === 0 && Ae.push(vt + "|" + Q.value[Pe + 1]), Ae), []).join(","))
                                  : ge.value == 3
                                    ? (Y = Q.value.reduce((Ae, vt, Pe) => (Pe % 3 === 0 && Ae.push(vt + "|" + Q.value[Pe + 1] + "|" + Q.value[Pe + 2]), Ae), []).join(","))
                                    : ge.value == 4
                                      ? (Y = Q.value.reduce((Ae, vt, Pe) => (Pe % 4 === 0 && Ae.push(vt + "|" + Q.value[Pe + 1] + "|" + Q.value[Pe + 2] + "|" + Q.value[Pe + 3]), Ae), []).join(","))
                                      : ge.value == 8
                                        ? (Y = Q.value.reduce((Ae, vt, Pe) => (Pe % 8 === 0 && Ae.push(vt + "|" + Q.value[Pe + 1] + "|" + Q.value[Pe + 2] + "|" + Q.value[Pe + 3] + "|" + Q.value[Pe + 4] + "|" + Q.value[Pe + 5] + "|" + Q.value[Pe + 6] + "|" + Q.value[Pe + 7]), Ae), []).join(","))
                                        : (Y = Q.value.reduce((Ae, vt, Pe) => (Pe % 10 === 0 && Ae.push(vt + "|" + Q.value[Pe + 1] + "|" + Q.value[Pe + 2] + "|" + Q.value[Pe + 3] + "|" + Q.value[Pe + 4] + "|" + Q.value[Pe + 5] + "|" + Q.value[Pe + 6] + "|" + Q.value[Pe + 7] + "|" + Q.value[Pe + 8] + "|" + Q.value[Pe + 9]), Ae), []).join(","))
                             : x.value === 8 && ge.value == 1 && ((Y = Q.value[0]), (wt.value = ge.value)),
                        [4, 8].includes(x.value) && (X.value = 3),
                        Y.replace(",", "").trim().length == 0 || wt.value == 0)
                     )
                        return;
                     j.push({ bettingParentType: x.value, bettingType: R.value, bettingFormat: X.value, bettingContent: Y, totalBetting: wt.value, initialAmount: ls.value, bettingMultiple: at.value, defaultOdds: is.value });
                     let [me, ke] = [null, null],
                        Ye = Ta((nt = m.value) == null ? void 0 : nt.issueNo);
                     if ((p.value == "1" ? ([me, ke] = await ct(ei({ areId: i.value, issueNo: (ht = m.value) == null ? void 0 : ht.issueNo, xosoBettingData: j }))) : p.value == "2" && ([me, ke] = await ct(ti({ areId: i.value, typeId: Number(r.value), issueNo: (yt = m.value) == null ? void 0 : yt.issueNo, xosoBettingData: j }))), ke)) {
                        x.value === 4 && (X.value = 1), (tt.value = !1);
                        const be = jn(ke == null ? void 0 : ke.msgCode, ke == null ? void 0 : ke.msg);
                        (K.value = be),
                           (Ht.value = 0),
                           _t(),
                           un(),
                           Lt.value === "MyGameRecord" && qt.value.getData(),
                           setTimeout(
                              () => {
                                 Un(Ye);
                              },
                              Number(We.value * 1e3) + 5e3,
                           );
                     } else {
                        tt.value = !1;
                        const be = jn(ke == null ? void 0 : ke.msgCode, ke == null ? void 0 : ke.msg);
                        K.value = be;
                     }
                  }, 500));
            },
            Ho = () => {
               setTimeout(() => {
                  Qt.value && (Qt.value = !1);
               }, 1500);
            },
            jn = (F, j) => {
               let Y = "";
               switch (F) {
                  case 345:
                     (Y = u("xosoTip2", [j])), (b.value = !0);
                     break;
                  case 346:
                     (Y = u("xosoTip3")), (b.value = !0);
                     break;
                  case 347:
                     (Y = u("xosoTip3")), (b.value = !0);
                     break;
                  case 348:
                     (Y = u("xosoTip1", [j])), (b.value = !0);
                     break;
                  case 349:
                     (Y = u("xosoTip4")), (b.value = !0);
                     break;
                  default:
                     (Y = "code" + F), (Qt.value = !0), Ho();
                     break;
               }
               return Y;
            },
            zo = () => {
               b.value = !1;
            };
         let cn = null;
         async function Un(F) {
            if (v.value || p.value != "2") return;
            const j = await de(si({ issueNo: F }));
            if (j) {
               if (j.data.status == 1) {
                  clearTimeout(cn),
                     (cn = setTimeout(() => {
                        Un(F);
                     }, 1e3));
                  return;
               }
               Os.value.showMark(j.data), Lt.value === "MyGameRecord" && qt.value.getData();
            }
         }
         const Eo = F => {
               F <= 0 || (F >= 5e4 ? (at.value = 5e4) : (at.value = F)), Xe(X.value, ge.value);
            },
            Fo = (F, j) => {
               (ne.value = j), (at.value = F), Xe(X.value, ge.value);
            },
            qn = F => {
               switch (F) {
                  case 1:
                     at.value > 1 && (at.value--, Xe(X.value, ge.value));
                     break;
                  case 2:
                     at.value++, Xe(X.value, ge.value);
                     break;
               }
            },
            Xe = (F, j) => {
               j != 0 && ((wt.value = jo(F, j)), (zt.value = wt.value * ls.value * at.value * is.value), x.value === 8 ? (le.value = Ge.value) : (le.value = J.value));
            },
            jo = (F, j) => {
               let Y = 0;
               if (F == 1) {
                  let me = Le.value.length,
                     ke = Ie.value.length,
                     Ye = re.value.length,
                     nt = se.value.length;
                  return ce.value.toString().includes("4") ? (Y = me * ke * Ye * nt) : ce.value.toString().includes("3") ? (Y = ke * Ye * nt) : ce.value.toString().includes("2") ? (x.value === 4 ? (Y = Ye) : (Y = Ye * nt)) : ce.value.toString().includes("1") ? (Y = nt) : x.value === 8 && (Y = 1), Y;
               } else {
                  if (F == 3) return (Y = Math.floor(Q.value.length / j)), Y;
                  if (F == 2) return Q.value.length == 1 && Q.value[0] == "1" ? (Y = 0) : (Y = Math.floor(Q.value.length / j)), Y;
               }
               return Y;
            },
            Uo = () => {
               s.go(-1);
            },
            Kn = F => {
               var j;
               s.push({ name: F, query: { id: (j = o.query) == null ? void 0 : j.id } });
            },
            un = async () => {
               const F = await de(Tn());
               F && (cs.value = (F == null ? void 0 : F.data.amount) || 0);
            };
         function qo(F) {
            (Lt.value = F),
               Lt.value == "GameRecord" &&
                  lt(() => {
                     qt.value.getData();
                  });
         }
         yo(), Kt(), p.value == "2" && ds(), Hn(), un();
         function rn() {
            clearInterval(pt.value), clearInterval(Oe.value), clearTimeout(Ft), clearTimeout(cn);
         }
         xs(() => {
            (v.value = !0), rn();
         });
         const Ko = ol();
         return (
            Ve(Ko, (F, j) => {
               F === "visible" && j === "hidden" ? (Kt(), p.value == "2" && ds(), un()) : rn();
            }),
            (F, j) => {
               var ht, yt;
               const Y = U("NavBar"),
                  me = U("van-field"),
                  ke = U("van-checkbox"),
                  Ye = U("van-button"),
                  nt = U("van-popup");
               return (
                  n(),
                  a(
                     N,
                     null,
                     [
                        e("div", TC, [
                           L(Y, { "left-arrow": "", onClickLeft: Uo, "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)" }, { center: A(() => [e("div", { class: "centercity", onClick: j[0] || (j[0] = be => (At.value = !0)) }, [E(t(_.value) + " ", 1), wC])]), _: 1 }),
                           L(V7, { gameCategoryList: h.value, colortab: I.value, playtab: S.value, onColorupdate: $o, onUpdate: Co }, null, 8, ["gameCategoryList", "colortab", "playtab"]),
                           p.value == "1" ? (n(), Z(m7, { key: 0, defaultcityname: _.value, defaultplayname: O.value, defaultexpiredate: P.value, colorId: x.value, issue: (ht = m.value) == null ? void 0 : ht.issueNo, time: W.value, odds: J.value, areId: i.value }, null, 8, ["defaultcityname", "defaultplayname", "defaultexpiredate", "colorId", "issue", "time", "odds", "areId"])) : p.value == "2" ? (n(), Z(P7, { key: 1, defaultcityname: _.value, defaultplayname: O.value, colorId: x.value, issue: (yt = m.value) == null ? void 0 : yt.issueNo, time: ot.value, odds: J.value, areId: i.value, resultList: w.value, isShowPreparing: Fe.value }, null, 8, ["defaultcityname", "defaultplayname", "colorId", "issue", "time", "odds", "areId", "resultList", "isShowPreparing"])) : B("", !0),
                           x.value === 8
                              ? (n(), Z(Wb, { key: 2, funplaylist: ee.value, numbercon: ae.value, onSelectvalue: To }, null, 8, ["funplaylist", "numbercon"]))
                              : (n(), Z(Rb, { key: 3, ref_key: "numberselectRef", ref: g, methodList: z.value, activeTab: X.value, randomList: Ne.value, randomtype: Je.value, specialtype: Qe.value, isthreenumber: Se.value, speciaSelectNo: et.value, isShowMark: Re.value, betconfig: ce.value, hundred: we.value, groupTab: xe.value, thousandnumList: Le.value, hundrednumList: Ie.value, tennumList: re.value, indicualnumList: se.value, quicknumList: Q.value, intervalnumber: qe.value, intervalTab: Ht.value, onTabupdate: Mo, onSelectgroup: Ro, onSelectinterval: No, onBetNum: Bo, onBetQuickNum: xo, onGetselect: So, onGetquick: Go, onInputblur: Io }, null, 8, ["methodList", "activeTab", "randomList", "randomtype", "specialtype", "isthreenumber", "speciaSelectNo", "isShowMark", "betconfig", "hundred", "groupTab", "thousandnumList", "hundrednumList", "tennumList", "indicualnumList", "quicknumList", "intervalnumber", "intervalTab"])),
                           L(s9, { record: Lt.value, onChangeC: qo }, null, 8, ["record"]),
                           (n(), Z(ns, null, [(n(), Z(ft(an[Lt.value]), { ref_key: "RecordComponent", ref: qt, ApiFun: Ce.value, areId: i.value, cityCode: r.value, parmas: $, gVSs: p.value }, null, 8, ["ApiFun", "areId", "cityCode", "parmas", "gVSs"]))], 1024)),
                           L(Yb, { betNumber: wt.value, betSum: zt.value, onPlayBet: Vo }, null, 8, ["betNumber", "betSum"]),
                           L(kC, { ref_key: "WinningTipsRef", ref: Os }, null, 512),
                        ]),
                        L(
                           nt,
                           { show: tt.value, "onUpdate:show": j[8] || (j[8] = be => (tt.value = be)), "close-on-click-overlay": !1, class: "popup", position: "bottom" },
                           {
                              default: A(() => [
                                 e("div", LC, [
                                    e("div", { class: "close", onClick: Do }, [e("img", { class: "img", src: c(pe)("home/AllLotteryGames/NewVietnam", "close") }, null, 8, IC)]),
                                    e("div", SC, t(F.$t("bettingnumber")), 1),
                                    x.value === 6 || (i.value === 2 && x.value === 1 && G.value === 4) || (i.value === 3 && x.value === 1 && G.value === 4) || (i.value === 1 && x.value === 1 && G.value === 5) ? (n(), a("div", GC, t(F.$t("xosoTxt93")), 1)) : B("", !0),
                                    X.value == 2 || X.value == 3
                                       ? (n(),
                                         a(
                                            "div",
                                            { key: 1, class: M("c-row c-flex-warp compound" + X.value) },
                                            [
                                               e(
                                                  "div",
                                                  { class: M("c-row item item" + Tt.value + "-" + De.value) },
                                                  [
                                                     e("div", xC, [
                                                        e("div", BC, [
                                                           (n(!0),
                                                           a(
                                                              N,
                                                              null,
                                                              D(Q.value, (be, Ae) => (n(), a("div", { class: "num c-row c-row-middle-center", key: Ae }, t(be), 1))),
                                                              128,
                                                           )),
                                                        ]),
                                                     ]),
                                                  ],
                                                  2,
                                               ),
                                            ],
                                            2,
                                         ))
                                       : B("", !0),
                                    X.value == 1
                                       ? (n(),
                                         a("div", NC, [
                                            Le.value.length > 0
                                               ? (n(),
                                                 a("div", RC, [
                                                    e("div", MC, t(F.$t("xosoTxt87")), 1),
                                                    e("div", DC, [
                                                       (n(!0),
                                                       a(
                                                          N,
                                                          null,
                                                          D(Le.value, (be, Ae) => (n(), a("div", { class: "num", key: Ae }, t(be), 1))),
                                                          128,
                                                       )),
                                                    ]),
                                                 ]))
                                               : B("", !0),
                                            Ie.value.length > 0
                                               ? (n(),
                                                 a("div", AC, [
                                                    e("div", PC, t(F.$t("xosoTxt88")), 1),
                                                    e("div", OC, [
                                                       (n(!0),
                                                       a(
                                                          N,
                                                          null,
                                                          D(Ie.value, (be, Ae) => (n(), a("div", { class: "num", key: Ae }, t(be), 1))),
                                                          128,
                                                       )),
                                                    ]),
                                                 ]))
                                               : B("", !0),
                                            re.value.length > 0
                                               ? (n(),
                                                 a("div", VC, [
                                                    e("div", WC, t(F.$t("xosoTxt89")), 1),
                                                    e("div", HC, [
                                                       (n(!0),
                                                       a(
                                                          N,
                                                          null,
                                                          D(re.value, (be, Ae) => (n(), a("div", { class: "num", key: Ae }, t(be), 1))),
                                                          128,
                                                       )),
                                                    ]),
                                                 ]))
                                               : B("", !0),
                                            se.value.length > 0
                                               ? (n(),
                                                 a("div", zC, [
                                                    e("div", EC, t(F.$t("xosoTxt90")), 1),
                                                    e("div", FC, [
                                                       (n(!0),
                                                       a(
                                                          N,
                                                          null,
                                                          D(se.value, (be, Ae) => (n(), a("div", { class: "num", key: Ae }, t(be), 1))),
                                                          128,
                                                       )),
                                                    ]),
                                                 ]))
                                               : B("", !0),
                                            Q.value.length > 0
                                               ? (n(),
                                                 a("div", jC, [
                                                    e("div", UC, [
                                                       (n(!0),
                                                       a(
                                                          N,
                                                          null,
                                                          D(Q.value, (be, Ae) => (n(), a("div", { class: "num", key: Ae }, t(be), 1))),
                                                          128,
                                                       )),
                                                    ]),
                                                 ]))
                                               : B("", !0),
                                         ]))
                                       : B("", !0),
                                    e("div", qC, [
                                       e("div", KC, [e("div", ZC, t(F.$t("multiple")), 1), e("div", XC, [e("div", { class: "li minus", onClick: j[1] || (j[1] = be => qn(1)) }, "-"), L(me, { class: "digit-box", modelValue: at.value, "onUpdate:modelValue": j[2] || (j[2] = be => (at.value = be)), type: "digit", maxlength: 5, onInput: j[3] || (j[3] = be => Eo(at.value)) }, null, 8, ["modelValue"]), e("div", { class: "li plus c-row c-row-middle-center", onClick: j[4] || (j[4] = be => qn(2)) }, "+")])]),
                                       e("div", JC, [
                                          e("div", YC, [
                                             (n(!0),
                                             a(
                                                N,
                                                null,
                                                D(ie.value, (be, Ae) => (n(), a("div", { class: M(at.value == be ? "action li" : "li"), onClick: vt => Fo(be, Ae) }, " X" + t(be), 11, QC))),
                                                256,
                                             )),
                                          ]),
                                       ]),
                                       e("div", ek, [e("div", tk, [E(t(F.$t("quantity")) + " ", 1), sk, e("span", nk, t(wt.value || 0) + t(F.$t("note")), 1)]), e("div", ak, [E(t(F.$t("odds")), 1), ok, E(), e("span", lk, t(le.value), 1)])]),
                                       e("div", ik, [e("div", ck, [E(t(F.$t("walletBalance")) + " ", 1), e("span", uk, t(c(Be)(cs.value)), 1)])]),
                                       e("div", rk, [e("div", dk, [E(t(F.$t("betAmounts")), 1), e("span", _k, t(c(Be)(zt.value)), 1)])]),
                                       zt.value > cs.value ? (n(), a("div", vk, [e("div", pk, [e("img", { src: c(pe)("home/AllLotteryGames/NewVietnam", "tip") }, null, 8, mk), E(t(F.$t("insufficientWallet")), 1)]), e("div", { class: "txt bg333", onClick: j[5] || (j[5] = be => Kn("Recharge")) }, t(F.$t("torecharge")) + " >>", 1)])) : B("", !0),
                                       e("div", gk, [L(ke, { modelValue: Ss.value, "onUpdate:modelValue": j[6] || (j[6] = be => (Ss.value = be)), shape: "square", "checked-color": "#F4453E", onChange: Ao }, { default: A(() => [e("div", hk, t(F.$t("agree")), 1)]), _: 1 }, 8, ["modelValue"]), e("span", { class: "txt", onClick: j[7] || (j[7] = be => (us.value = !0)) }, t(F.$t("presaleRules")), 1)]),
                                    ]),
                                 ]),
                                 e("div", yk, [e("div", fk, [L(Ye, { class: "btn", block: "", onClick: Oo }, { default: A(() => [e("span", null, t(F.$t("cancel")), 1)]), _: 1 })]), e("div", bk, [L(Ye, { class: M(["btn", { noActive: !dt.value }]), block: "", onClick: Wo }, { default: A(() => [e("span", $k, t(F.$t("betting")), 1)]), _: 1 }, 8, ["class"])])]),
                              ]),
                              _: 1,
                           },
                           8,
                           ["show"],
                        ),
                        L(
                           nt,
                           { class: "areBox", show: At.value, "onUpdate:show": j[10] || (j[10] = be => (At.value = be)), round: "", position: "bottom", style: { overflow: "initial" } },
                           {
                              default: A(() => [
                                 e("div", Ck, [
                                    e("img", { class: "close", src: c(pe)("common", "close"), alt: "", onClick: j[9] || (j[9] = () => (At.value = !1)) }, null, 8, kk),
                                    (n(!0),
                                    a(
                                       N,
                                       null,
                                       D(
                                          T.value,
                                          (be, Ae) => (
                                             n(),
                                             a("div", { class: "items", key: Ae }, [
                                                e("h1", null, t(be.text), 1),
                                                e("div", Tk, [
                                                   (n(!0),
                                                   a(
                                                      N,
                                                      null,
                                                      D(be.info, (vt, Pe) => (n(), a("div", { key: Pe, class: M({ isActive: r.value == vt.code }), onClick: dn => fo(vt, be.value) }, t(F.$t("code" + vt.nameCode)), 11, wk))),
                                                      128,
                                                   )),
                                                ]),
                                             ])
                                          ),
                                       ),
                                       128,
                                    )),
                                 ]),
                              ]),
                              _: 1,
                           },
                           8,
                           ["show"],
                        ),
                        L(nt, { show: us.value, "onUpdate:show": j[11] || (j[11] = be => (us.value = be)), class: "PreSaleRule", "close-on-click-overlay": !1, round: "" }, { default: A(() => [e("div", Lk, [e("div", Ik, t(c(u)("presaleRules")), 1), e("div", Sk, t(F.$t("betPopTXT")), 1), e("div", Gk, [e("div", { class: "btn", onClick: Po }, t(c(u)("iKonw")), 1)])])]), _: 1 }, 8, ["show"]),
                        L(nt, { show: Qt.value, "onUpdate:show": j[12] || (j[12] = be => (Qt.value = be)), class: "Tips", "close-on-click-overlay": !0 }, { default: A(() => [e("div", null, [K.value == "code402" ? (n(), a("img", { key: 0, src: c(pe)("home/AllLotteryGames/NewVietnam", "success") }, null, 8, xk)) : (n(), a("img", { key: 1, src: c(pe)("home/AllLotteryGames/NewVietnam", "fail") }, null, 8, Bk)), e("div", Nk, t(F.$t(K.value)), 1)])]), _: 1 }, 8, ["show"]),
                        L(Mt, { show: b.value, "onUpdate:show": j[13] || (j[13] = be => (b.value = be)), onConfirm: zo, confirmText: c(u)("confirm"), showCancelBtn: !1 }, { content: A(() => [e("div", Rk, t(K.value ? F.$t(K.value) : ""), 1)]), _: 1 }, 8, ["show", "confirmText"]),
                     ],
                     64,
                  )
               );
            }
         );
      },
   });
const Dk = H(Mk, [["__scopeId", "data-v-273cca7e"]]),
   BV = Object.freeze(Object.defineProperty({ __proto__: null, default: Dk }, Symbol.toStringTag, { value: "Module" })),
   Ak = { class: "Play__C" },
   Pk = { class: "title" },
   Ok = ["src"],
   Vk = { class: "info" },
   Wk = ["src"],
   Hk = { class: "sub" },
   zk = { class: "text" },
   Ek = { class: "info_text" },
   Fk = { class: "forexample" },
   jk = { key: 0, class: "betting" },
   Uk = { class: "result" },
   qk = { key: 0, class: "info_item" },
   Kk = ["src"],
   Zk = { class: "sub" },
   Xk = { class: "text" },
   Jk = { key: 1, class: "info_text" },
   Yk = { class: "forexample" },
   Qk = { class: "result" },
   eT = V({
      __name: "NorthPlay",
      setup(l) {
         const { t: s } = _e(),
            o = k(0),
            u = ze([
               {
                  title: s("xosoTab1"),
                  subList: [
                     {
                        sub: s("xosoSub1"),
                        num: "［45］",
                        resultTip: s("xosoTxt3", ["27"]),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt1") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt2", ["27", "2"]) },
                        ],
                     },
                     {
                        sub: s("xosoSub2"),
                        num: "［45］",
                        resultTip: s("xosoTxt5"),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt1") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt4") },
                        ],
                     },
                     {
                        sub: s("xosoSub3"),
                        num: "［45］",
                        resultTip: s("xosoTxt6", ["27"]),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt1") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt2", ["27", "2"]) },
                        ],
                     },
                     {
                        sub: s("xosoSub4"),
                        num: "［456］",
                        resultTip: s("xosoTxt9", ["23"]),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt8") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt2", ["23", "3"]) },
                        ],
                     },
                     {
                        sub: s("xosoSub5"),
                        num: "［4567］",
                        resultTip: s("xosoTxt11", ["20"]),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt10") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt2", ["20", "4"]) },
                        ],
                     },
                  ],
               },
               {
                  title: s("xosoTab2"),
                  subList: [
                     {
                        sub: s("xosoSub6"),
                        num: "［45/55］",
                        resultTip: s("xosoTxt14", ["27"]),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt12", ["2"]) },
                           { bet: s("winningconditions"), betTip: s("xosoTxt13", ["27", "2", "2"]) },
                        ],
                     },
                     {
                        sub: s("xosoSub7"),
                        num: "［45/55/65］",
                        resultTip: s("xosoTxt15", ["27"]),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt12", ["3"]) },
                           { bet: s("winningconditions"), betTip: s("xosoTxt13", ["27", "3", "2"]) },
                        ],
                     },
                     {
                        sub: s("xosoSub8"),
                        num: "［45/55/65/75］",
                        resultTip: s("xosoTxt16", ["27"]),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt12", ["4"]) },
                           { bet: s("winningconditions"), betTip: s("xosoTxt13", ["27", "4", "2"]) },
                        ],
                     },
                  ],
               },
               {
                  title: s("xosoTab3"),
                  subList: [
                     {
                        sub: s("xosoSub9"),
                        num: "［45］",
                        resultTip: s("xosoTxt19"),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt1") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt17") },
                        ],
                     },
                     {
                        sub: s("xosoSub18"),
                        num: "［45］",
                        resultTip: s("xosoTxt23"),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt1") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt21") },
                        ],
                     },
                     {
                        sub: s("xosoSub11"),
                        num: "［45］",
                        resultTip: s("xosoTxt27"),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt1") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt25") },
                        ],
                     },
                     {
                        sub: s("xosoSub12"),
                        num: "［45］",
                        resultTip: s("xosoTxt35"),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt1") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt34") },
                        ],
                     },
                     {
                        sub: s("xosoSub13"),
                        num: "［45］",
                        resultTip: s("xosoTxt37"),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt1") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt36") },
                        ],
                     },
                  ],
               },
               {
                  title: s("xosoTab4"),
                  subList: [
                     {
                        sub: s("xosoSub17"),
                        num: "［4］",
                        resultTip: s("xosoTxt31"),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt29") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt30") },
                        ],
                     },
                     {
                        sub: s("xosoTxt100"),
                        num: "［4］",
                        resultTip: s("xosoTxt33"),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt101") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt102") },
                        ],
                     },
                  ],
               },
               {
                  title: s("xosoTab5"),
                  subList: [
                     {
                        sub: s("xosoSub19"),
                        num: "［456］",
                        resultTip: s("xosoTxt41"),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt38") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt39") },
                        ],
                     },
                     {
                        sub: s("xosoSub20"),
                        num: "［456］",
                        resultTip: s("xosoTxt45"),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt43") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt44") },
                        ],
                     },
                     {
                        sub: s("xosoSub21"),
                        num: "［456］",
                        resultTip: s("xosoTxt49"),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt43") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt47") },
                        ],
                     },
                     {
                        sub: s("xosoSub22"),
                        num: "［456］",
                        resultTip: s("xosoTxt55"),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt43") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt54") },
                        ],
                     },
                  ],
               },
               {
                  title: s("xosoTab6"),
                  subList: [
                     {
                        sub: s("xosoSub25"),
                        num: "［4567］",
                        resultTip: s("xosoTxt53"),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt51") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt52") },
                        ],
                     },
                  ],
               },
               {
                  title: s("xosoTab7"),
                  subList: [
                     {
                        sub: s("xosoSub26"),
                        num: "［45/55/66/77］",
                        resultTip: s("xosoTxt57", ["27"]),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt12", ["4"]) },
                           { bet: s("winningconditions"), betTip: s("xosoTxt56", ["27"]) },
                        ],
                     },
                     {
                        sub: s("xosoSub27"),
                        num: "［45/55/66/77/88/99/11/22］",
                        resultTip: s("xosoTxt58", ["27"]),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt12", ["8"]) },
                           { bet: s("winningconditions"), betTip: s("xosoTxt56", ["27"]) },
                        ],
                     },
                     {
                        sub: s("xosoSub28"),
                        num: "［45/55/66/77/88/99/11/22/33/44］",
                        resultTip: s("xosoTxt59", ["27"]),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt12", ["10"]) },
                           { bet: s("winningconditions"), betTip: s("xosoTxt56", ["27"]) },
                        ],
                     },
                  ],
               },
               {
                  title: s("xosoTab8"),
                  subList: [
                     {
                        sub: s("xosoTxt60"),
                        num: "",
                        resultTip: s("xosoTxt66"),
                        txtList: [
                           { bet: s("xosoTxt60"), betTip: s("xosoTxt61") },
                           { bet: s("big"), betTip: s("xosoTxt62") },
                           { bet: s("small"), betTip: s("xosoTxt63") },
                           { bet: s("xosoTxt69"), betTip: s("xosoTxt64") },
                           { bet: s("xosoTxt70"), betTip: s("xosoTxt65") },
                        ],
                     },
                  ],
               },
            ]);
         return (v, p) => {
            const d = U("van-tab"),
               i = U("van-tabs");
            return (
               n(),
               a("div", Ak, [
                  L(
                     i,
                     { active: o.value, "onUpdate:active": p[0] || (p[0] = _ => (o.value = _)), type: "card" },
                     {
                        default: A(() => [
                           (n(!0),
                           a(
                              N,
                              null,
                              D(
                                 u,
                                 (_, r) => (
                                    n(),
                                    Z(
                                       d,
                                       { title: _.title, key: r },
                                       {
                                          default: A(() => [
                                             (n(!0),
                                             a(
                                                N,
                                                null,
                                                D(
                                                   _.subList,
                                                   (g, m) => (
                                                      n(),
                                                      a("div", { class: "Play__C-Cotent", key: m }, [
                                                         e("div", Pk, [e("img", { src: c(pe)("home/AllLotteryGames/NewVietnam", "Star") }, null, 8, Ok), e("span", null, t(g.sub), 1)]),
                                                         e("div", Vk, [
                                                            (n(!0),
                                                            a(
                                                               N,
                                                               null,
                                                               D(g.txtList, ($, y) => (n(), a("div", { class: "info_item", key: y }, [e("img", { src: c(pe)("home/AllLotteryGames/NewVietnam", "Triangle") }, null, 8, Wk), e("span", Hk, t($.bet), 1), e("div", zk, t($.betTip), 1)]))),
                                                               128,
                                                            )),
                                                            e("div", Ek, [e("div", Fk, t(c(s)("forexample")), 1), g.num ? (n(), a("div", jk, t(c(s)("betting")) + "：" + t(g.num), 1)) : B("", !0), e("div", Uk, t(c(s)("result")) + "：" + t(g.resultTip), 1)]),
                                                            o.value === 7 ? (n(), a("div", qk, [e("img", { src: c(pe)("home/AllLotteryGames/NewVietnam", "Triangle") }, null, 8, Kk), e("span", Zk, t(c(s)("xosoTxt71")), 1), e("div", Xk, t(c(s)("xosoTxt67")), 1)])) : B("", !0),
                                                            o.value === 7 ? (n(), a("div", Jk, [e("div", Yk, t(c(s)("forexample")), 1), e("div", Qk, t(c(s)("result")) + "： " + t(c(s)("xosoTxt68")), 1)])) : B("", !0),
                                                         ]),
                                                      ])
                                                   ),
                                                ),
                                                128,
                                             )),
                                          ]),
                                          _: 2,
                                       },
                                       1032,
                                       ["title"],
                                    )
                                 ),
                              ),
                              128,
                           )),
                        ]),
                        _: 1,
                     },
                     8,
                     ["active"],
                  ),
               ])
            );
         };
      },
   });
const tT = H(eT, [["__scopeId", "data-v-63497a14"]]),
   Rs = l => (ye("data-v-7adceac4"), (l = l()), fe(), l),
   sT = { class: "NorthRule__C" },
   nT = { class: "NorthRule__C-title" },
   aT = { class: "NorthRule__C-tips" },
   oT = Rs(() => e("div", { class: "borderTopStyle" }, [e("span"), e("span")], -1)),
   lT = { class: "title" },
   iT = { class: "text" },
   cT = { class: "table" },
   uT = { class: "table-row header-time" },
   rT = { class: "table-time-1" },
   dT = Rs(() => e("div", { class: "table-time-1" }, "18:15", -1)),
   _T = { class: "table-row header-week" },
   vT = { class: "table-week-1" },
   pT = { class: "table-week-1" },
   mT = { class: "table-cell-1" },
   gT = { class: "table-cell-1" },
   hT = Rs(() => e("div", { class: "borderTopStyle" }, [e("span"), e("span")], -1)),
   yT = { class: "title" },
   fT = { class: "text" },
   bT = { key: 0, class: "text" },
   $T = { key: 1, class: "text" },
   CT = { class: "NorthRule__C-Rule" },
   kT = { class: "NorthRule__C-Struct" },
   TT = Rs(() => e("span", { class: "left" }, null, -1)),
   wT = Rs(() => e("span", { class: "right" }, null, -1)),
   LT = { class: "table-rule" },
   IT = { class: "table-header" },
   ST = { class: "table-header-cell" },
   GT = { class: "table-header-cell" },
   xT = { class: "table-header-cell" },
   BT = { class: "table-cell" },
   NT = { class: "table-cell" },
   RT = { class: "table-cell" },
   MT = { class: "table-rule" },
   DT = { class: "table-header" },
   AT = { class: "table-header-cell" },
   PT = { key: 0, class: "table-box-title" },
   OT = V({
      __name: "NorthRule",
      setup(l) {
         const { t: s } = _e(),
            o = ze([
               { title: "01", sub: s("resultsVielottery") },
               { title: "02", sub: s("systemresult") },
               { title: "03", sub: s("lotterytime") },
            ]),
            u = ze([
               { title: "04", sub: s("oddsmiscalculated") },
               { title: "05", sub: s("oddsbettingprincipal") },
               { title: "06", sub: s("oddsfluctuate") },
               { title: "07", sub: s("oncebetgenerated") },
               { title: "08", sub: s("anyreasonCauses") },
               { title: "09", sub: s("platformcancel"), sub1: s("drawdelayedtoolong"), sub2: s("resultsofthelotterybeenleaked") },
            ]),
            v = ze([
               { week: s("Monday"), addressList: s("Hanoi") },
               { week: s("Tuesday"), addressList: s("quangNinh") },
               { week: s("Wednesday"), addressList: s("bacninh") },
               { week: s("Thursday"), addressList: s("Hanoi") },
               { week: s("Friday"), addressList: s("haiphong") },
               { week: s("Saturday"), addressList: s("nanning") },
               { week: s("Sunday"), addressList: s("taiping") },
            ]),
            p = ze([
               { title: s("GrandPrize"), quantity: 1, number: s("fivedigits"), drawsNumber: ["29818"] },
               { title: s("FirstPrize"), quantity: 1, number: s("fivedigits"), drawsNumber: ["69388"] },
               { title: s("SecondPrize"), quantity: 2, number: s("fivedigits"), drawsNumber: ["66992", "95797"] },
               { title: s("ThirdPrize"), quantity: 6, number: s("fivedigits"), drawsNumber: ["99095", "32620", "51685", "12345", "69548", "69874"] },
               { title: s("FourPrize"), quantity: 4, number: s("fourdigits"), drawsNumber: ["6545", "5257", "7896", "3682"] },
               { title: s("FivePrize"), quantity: 6, number: s("fourdigits"), drawsNumber: ["4567", "8533", "7632", "7632", "6673", "7855"] },
               { title: s("SixPrize"), quantity: 3, number: s("fourdigits"), drawsNumber: ["567", "642", "934"] },
               { title: s("SevenPrize"), quantity: 4, number: s("seconddigits"), drawsNumber: ["48", "64", "32", "51"] },
               { title: s("intotal"), quantity: s("lotteryawards"), number: "" },
            ]);
         return (d, i) => (
            n(),
            a("div", sT, [
               e("div", nT, t(c(s)("northVieLotteryGameRules")), 1),
               e("div", aT, t(c(s)("precautions")), 1),
               (n(!0),
               a(
                  N,
                  null,
                  D(o, (_, r) => (n(), a("div", { class: "NorthRule__C-Content", key: r }, [oT, e("div", lT, t(_.title), 1), e("div", iT, t(_.sub), 1)]))),
                  128,
               )),
               e("div", cT, [
                  e("div", uT, [e("div", rT, t(c(s)("winTrxTime")), 1), dT]),
                  e("div", _T, [e("div", vT, t(c(s)("weeks")), 1), e("div", pT, t(c(s)("northLotteryCities")), 1)]),
                  (n(!0),
                  a(
                     N,
                     null,
                     D(v, (_, r) => (n(), a("div", { class: "table-row", key: r }, [e("div", mT, t(_.week), 1), e("div", gT, t(_.addressList), 1)]))),
                     128,
                  )),
               ]),
               (n(!0),
               a(
                  N,
                  null,
                  D(u, (_, r) => (n(), a("div", { class: "NorthRule__C-Content", key: r }, [hT, e("div", yT, t(_.title), 1), e("div", fT, t(_.sub), 1), _.sub1 ? (n(), a("div", bT, t(_.sub1), 1)) : B("", !0), _.sub2 ? (n(), a("div", $T, t(_.sub2), 1)) : B("", !0)]))),
                  128,
               )),
               e("div", CT, t(c(s)("northernLotteryGameRules")), 1),
               e("div", kT, [TT, E(t(c(s)("colorstructure")), 1), wT]),
               e("div", LT, [
                  e("div", IT, [e("div", ST, t(c(s)("Lottery")), 1), e("div", GT, t(c(s)("numberofPrizes")), 1), e("div", xT, t(c(s)("Number")), 1)]),
                  (n(!0),
                  a(
                     N,
                     null,
                     D(p, (_, r) => (n(), a("div", { class: "table-row", key: r }, [e("div", BT, t(_.title), 1), e("div", NT, t(_.quantity), 1), e("div", RT, t(_.number), 1)]))),
                     128,
                  )),
               ]),
               e("div", MT, [
                  e("div", DT, [e("div", AT, t(c(s)("sorthlotteryresult")), 1)]),
                  (n(!0),
                  a(
                     N,
                     null,
                     D(
                        p,
                        (_, r) => (
                           n(),
                           a(
                              "div",
                              { class: M(r == 8 ? "table-box none" : "table-box"), key: r },
                              [
                                 r != 8 ? (n(), a("div", PT, t(_.title), 1)) : B("", !0),
                                 (n(!0),
                                 a(
                                    N,
                                    null,
                                    D(_.drawsNumber, (g, m) => (n(), a("div", { class: "table-box-number", key: m }, t(g), 1))),
                                    128,
                                 )),
                              ],
                              2,
                           )
                        ),
                     ),
                     128,
                  )),
               ]),
            ])
         );
      },
   });
const VT = H(OT, [["__scopeId", "data-v-7adceac4"]]),
   WT = { class: "Play__C" },
   HT = { class: "title" },
   zT = ["src"],
   ET = { class: "info" },
   FT = ["src"],
   jT = { class: "sub" },
   UT = { class: "text" },
   qT = { class: "info_text" },
   KT = { class: "forexample" },
   ZT = { key: 0, class: "betting" },
   XT = { class: "result" },
   JT = { key: 0, class: "info_item" },
   YT = ["src"],
   QT = { class: "sub" },
   ew = { class: "text" },
   tw = { key: 1, class: "info_text" },
   sw = { class: "forexample" },
   nw = { class: "result" },
   aw = V({
      __name: "SorthPlay",
      setup(l) {
         const { t: s } = _e(),
            o = k(0),
            u = ze([
               {
                  title: s("xosoTab1"),
                  subList: [
                     {
                        sub: s("xosoSub1"),
                        num: "［45］",
                        resultTip: s("xosoTxt3", ["18"]),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt1") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt2", ["18", "2"]) },
                        ],
                     },
                     {
                        sub: s("xosoSub3"),
                        num: "［45］",
                        resultTip: s("xosoTxt6", ["18"]),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt1") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt2", ["18", "2"]) },
                        ],
                     },
                     {
                        sub: s("xosoSub4"),
                        num: "［456］",
                        resultTip: s("xosoTxt9", ["17"]),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt8") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt2", ["17", "3"]) },
                        ],
                     },
                     {
                        sub: s("xosoSub5"),
                        num: "［4567］",
                        resultTip: s("xosoTxt11", ["16"]),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt10") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt2", ["16", "4"]) },
                        ],
                     },
                  ],
               },
               {
                  title: s("xosoTab2"),
                  subList: [
                     {
                        sub: s("xosoSub6"),
                        num: "［45/55］",
                        resultTip: s("xosoTxt14", ["18"]),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt12", ["2"]) },
                           { bet: s("winningconditions"), betTip: s("xosoTxt13", ["18", "2", "2"]) },
                        ],
                     },
                     {
                        sub: s("xosoSub7"),
                        num: "［45/55/65］",
                        resultTip: s("xosoTxt15", ["18"]),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt12", ["3"]) },
                           { bet: s("winningconditions"), betTip: s("xosoTxt13", ["18", "3", "2"]) },
                        ],
                     },
                     {
                        sub: s("xosoSub8"),
                        num: "［45/55/65/75］",
                        resultTip: s("xosoTxt16", ["18"]),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt12", ["4"]) },
                           { bet: s("winningconditions"), betTip: s("xosoTxt13", ["18", "4", "2"]) },
                        ],
                     },
                  ],
               },
               {
                  title: s("xosoTab3"),
                  subList: [
                     {
                        sub: s("xosoSub14"),
                        num: "［45］",
                        resultTip: s("xosoTxt20"),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt1") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt18") },
                        ],
                     },
                     {
                        sub: s("xosoSub15"),
                        num: "［45］",
                        resultTip: s("xosoTxt24"),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt1") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt22") },
                        ],
                     },
                     {
                        sub: s("xosoSub16"),
                        num: "［45］",
                        resultTip: s("xosoTxt28"),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt1") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt26") },
                        ],
                     },
                  ],
               },
               {
                  title: s("xosoTab4"),
                  subList: [
                     {
                        sub: s("xosoSub17"),
                        num: "［4］",
                        resultTip: s("xosoTxt31"),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt29") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt30") },
                        ],
                     },
                     {
                        sub: s("xosoTxt100"),
                        num: "［4］",
                        resultTip: s("xosoTxt33"),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt101") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt102") },
                        ],
                     },
                  ],
               },
               {
                  title: s("xosoTab5"),
                  subList: [
                     {
                        sub: s("xosoSub23"),
                        num: "［456］",
                        resultTip: s("xosoTxt42"),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt38") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt40") },
                        ],
                     },
                     {
                        sub: s("xosoSub20"),
                        num: "［456］",
                        resultTip: s("xosoTxt45"),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt43") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt44") },
                        ],
                     },
                     {
                        sub: s("xosoSub24"),
                        num: "［456］",
                        resultTip: s("xosoTxt50"),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt43") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt48") },
                        ],
                     },
                  ],
               },
               {
                  title: s("xosoTab6"),
                  subList: [
                     {
                        sub: s("xosoSub25"),
                        num: "［4567］",
                        resultTip: s("xosoTxt53"),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt51") },
                           { bet: s("winningconditions"), betTip: s("xosoTxt52") },
                        ],
                     },
                  ],
               },
               {
                  title: s("xosoTab7"),
                  subList: [
                     {
                        sub: s("xosoSub26"),
                        num: "［45/55/66/77］",
                        resultTip: s("xosoTxt57", ["18"]),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt12", ["4"]) },
                           { bet: s("winningconditions"), betTip: s("xosoTxt56", ["18"]) },
                        ],
                     },
                     {
                        sub: s("xosoSub27"),
                        num: "［45/55/66/77/88/99/11/22］",
                        resultTip: s("xosoTxt58", ["18"]),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt12", ["8"]) },
                           { bet: s("winningconditions"), betTip: s("xosoTxt56", ["18"]) },
                        ],
                     },
                     {
                        sub: s("xosoSub28"),
                        num: "［45/55/66/77/88/99/11/22/33/44］",
                        resultTip: s("xosoTxt59", ["18"]),
                        txtList: [
                           { bet: s("betting"), betTip: s("xosoTxt12", ["10"]) },
                           { bet: s("winningconditions"), betTip: s("xosoTxt56", ["18"]) },
                        ],
                     },
                  ],
               },
               {
                  title: s("xosoTab8"),
                  subList: [
                     {
                        sub: s("xosoTxt60"),
                        num: "",
                        resultTip: s("xosoTxt66"),
                        txtList: [
                           { bet: s("xosoTxt60"), betTip: s("xosoTxt61") },
                           { bet: s("big"), betTip: s("xosoTxt62") },
                           { bet: s("small"), betTip: s("xosoTxt63") },
                           { bet: s("xosoTxt69"), betTip: s("xosoTxt64") },
                           { bet: s("xosoTxt70"), betTip: s("xosoTxt65") },
                        ],
                     },
                  ],
               },
            ]);
         return (v, p) => {
            const d = U("van-tab"),
               i = U("van-tabs");
            return (
               n(),
               a("div", WT, [
                  L(
                     i,
                     { active: o.value, "onUpdate:active": p[0] || (p[0] = _ => (o.value = _)), type: "card" },
                     {
                        default: A(() => [
                           (n(!0),
                           a(
                              N,
                              null,
                              D(
                                 u,
                                 (_, r) => (
                                    n(),
                                    Z(
                                       d,
                                       { title: _.title, key: r },
                                       {
                                          default: A(() => [
                                             (n(!0),
                                             a(
                                                N,
                                                null,
                                                D(
                                                   _.subList,
                                                   (g, m) => (
                                                      n(),
                                                      a("div", { class: "Play__C-Cotent", key: m }, [
                                                         e("div", HT, [e("img", { src: c(pe)("home/AllLotteryGames/NewVietnam", "Star") }, null, 8, zT), e("span", null, t(g.sub), 1)]),
                                                         e("div", ET, [
                                                            (n(!0),
                                                            a(
                                                               N,
                                                               null,
                                                               D(g.txtList, ($, y) => (n(), a("div", { class: "info_item", key: y }, [e("img", { src: c(pe)("home/AllLotteryGames/NewVietnam", "Triangle") }, null, 8, FT), e("span", jT, t($.bet), 1), e("div", UT, t($.betTip), 1)]))),
                                                               128,
                                                            )),
                                                            e("div", qT, [e("div", KT, t(c(s)("forexample")), 1), g.num ? (n(), a("div", ZT, t(c(s)("betting")) + "：" + t(g.num), 1)) : B("", !0), e("div", XT, t(c(s)("result")) + "：" + t(g.resultTip), 1)]),
                                                            o.value === 7 ? (n(), a("div", JT, [e("img", { src: c(pe)("home/AllLotteryGames/NewVietnam", "Triangle") }, null, 8, YT), e("span", QT, t(c(s)("xosoTxt71")), 1), e("div", ew, t(c(s)("xosoTxt67")), 1)])) : B("", !0),
                                                            o.value === 7 ? (n(), a("div", tw, [e("div", sw, t(c(s)("forexample")), 1), e("div", nw, t(c(s)("result")) + "： " + t(c(s)("xosoTxt68")), 1)])) : B("", !0),
                                                         ]),
                                                      ])
                                                   ),
                                                ),
                                                128,
                                             )),
                                          ]),
                                          _: 2,
                                       },
                                       1032,
                                       ["title"],
                                    )
                                 ),
                              ),
                              128,
                           )),
                        ]),
                        _: 1,
                     },
                     8,
                     ["active"],
                  ),
               ])
            );
         };
      },
   });
const ow = H(aw, [["__scopeId", "data-v-072a5753"]]),
   Ts = l => (ye("data-v-925361c7"), (l = l()), fe(), l),
   lw = { class: "NorthRule__C" },
   iw = { class: "NorthRule__C-title" },
   cw = { class: "NorthRule__C-tips" },
   uw = Ts(() => e("div", { class: "borderTopStyle" }, [e("span"), e("span")], -1)),
   rw = { class: "title" },
   dw = { class: "text" },
   _w = { class: "table" },
   vw = { class: "table-row header-time" },
   pw = { class: "table-time-1" },
   mw = Ts(() => e("div", { class: "table-time-1" }, "16:20(GMT+7)", -1)),
   gw = Ts(() => e("div", { class: "table-time-1" }, "17:15(GMT+7)", -1)),
   hw = { class: "table-row header-week" },
   yw = { class: "table-week-1" },
   fw = { class: "table-week-1" },
   bw = { class: "table-week-1" },
   $w = { class: "table-cell-1" },
   Cw = { class: "table-cell-2" },
   kw = Ts(() => e("div", { class: "borderTopStyle" }, [e("span"), e("span")], -1)),
   Tw = { class: "title" },
   ww = { class: "text" },
   Lw = { key: 0, class: "text" },
   Iw = { key: 1, class: "text" },
   Sw = { class: "NorthRule__C-Rule" },
   Gw = { class: "NorthRule__C-Struct" },
   xw = Ts(() => e("span", { class: "left" }, null, -1)),
   Bw = Ts(() => e("span", { class: "right" }, null, -1)),
   Nw = { class: "table-rule" },
   Rw = { class: "table-header" },
   Mw = { class: "table-header-cell" },
   Dw = { class: "table-header-cell" },
   Aw = { class: "table-header-cell" },
   Pw = { class: "table-cell" },
   Ow = { class: "table-cell" },
   Vw = { class: "table-cell" },
   Ww = { class: "table-rule" },
   Hw = { class: "table-header" },
   zw = { class: "table-header-cell" },
   Ew = { key: 0, class: "table-box-title" },
   Fw = V({
      __name: "SorthRule",
      setup(l) {
         const { t: s } = _e(),
            o = ze([
               { title: "01", sub: s("resultsVielottery") },
               { title: "02", sub: s("systemresult") },
               { title: "03", sub: s("lotterytime1") },
            ]),
            u = ze([
               { title: "04", sub: s("oddsmiscalculated") },
               { title: "05", sub: s("oddsbettingprincipal") },
               { title: "06", sub: s("oddsfluctuate") },
               { title: "07", sub: s("oncebetgenerated") },
               { title: "08", sub: s("anyreasonCauses") },
               { title: "09", sub: s("platformcancel"), sub1: s("drawdelayedtoolong"), sub2: s("resultsofthelotterybeenleaked") },
            ]),
            v = ze([
               { week: s("Monday"), addressList: [s("hochiminhcity"), s("sametower"), s("camua"), s("fuan"), s("hue")] },
               { week: s("Tuesday"), addressList: [s("BenTre"), s("VungTau"), s("BacLieu"), s("Guangnan"), s("Dole")] },
               { week: s("Wednesday"), addressList: [s("DongNai"), s("CanTho"), s("Shuozhuang"), s("danang"), s("Qinghe")] },
               { week: s("Thursday"), addressList: [s("Xining"), s("Anjiang"), s("smooth"), s("putdown"), s("QuangBinh"), s("Koji")] },
               { week: s("Friday"), addressList: [s("VinhLong"), s("BinhDuong"), s("ChaRong"), s("Carai"), s("NinhThun")] },
               { week: s("Saturday"), addressList: [s("hochiminhcity"), s("LongAn"), s("Pingfu"), s("Houjiang"), s("danang"), s("Generalized"), s("Denon")] },
               { week: s("Sunday"), addressList: [s("Qianjiang"), s("jianjiang"), s("DaLat"), s("Qinghe"), s("KonTum")] },
            ]),
            p = ze([
               { title: s("GrandPrize"), quantity: 1, number: s("onedigits"), drawsNumber: ["575333"] },
               { title: s("FirstPrize"), quantity: 1, number: s("onedigits"), drawsNumber: ["34521"] },
               { title: s("SecondPrize"), quantity: 1, number: s("onedigits"), drawsNumber: ["34675"] },
               { title: s("ThirdPrize"), quantity: 2, number: s("seconddigits"), drawsNumber: ["34575", "45732"] },
               { title: s("FourPrize"), quantity: 7, number: s("sevendigits"), drawsNumber: ["43211", "23545", "78023", "46954", "32463", "23478", "34522"] },
               { title: s("FivePrize"), quantity: 1, number: s("onedigits"), drawsNumber: ["6425"] },
               { title: s("SixPrize"), quantity: 3, number: s("threedigits"), drawsNumber: ["66992", "95797", "4356"] },
               { title: s("SevenPrize"), quantity: 1, number: s("onedigits"), drawsNumber: ["69388"] },
               { title: s("EightPrize"), quantity: 1, number: s("onedigits"), drawsNumber: ["12"] },
               { title: s("intotal"), quantity: s("eightlotteryawards"), number: "" },
            ]),
            d = i => i.slice().reverse();
         return (i, _) => (
            n(),
            a("div", lw, [
               e("div", iw, t(c(s)("sorthVieLotteryGameRules")), 1),
               e("div", cw, t(c(s)("precautions")), 1),
               (n(!0),
               a(
                  N,
                  null,
                  D(o, (r, g) => (n(), a("div", { class: "NorthRule__C-Content", key: g }, [uw, e("div", rw, t(r.title), 1), e("div", dw, t(r.sub), 1)]))),
                  128,
               )),
               e("div", _w, [
                  e("div", vw, [e("div", pw, t(c(s)("winTrxTime")), 1), mw, gw]),
                  e("div", hw, [e("div", yw, t(c(s)("weeks")), 1), e("div", fw, t(c(s)("sorthLotteryCities")), 1), e("div", bw, t(c(s)("middleLotteryCities")), 1)]),
                  (n(!0),
                  a(
                     N,
                     null,
                     D(
                        v,
                        (r, g) => (
                           n(),
                           a("div", { class: "table-row", key: g }, [
                              e("div", $w, t(r.week), 1),
                              e("div", Cw, [
                                 (n(!0),
                                 a(
                                    N,
                                    null,
                                    D(r.addressList, (m, $) => (n(), a("div", { class: "table-column-1", key: $ }, t(m), 1))),
                                    128,
                                 )),
                              ]),
                           ])
                        ),
                     ),
                     128,
                  )),
               ]),
               (n(!0),
               a(
                  N,
                  null,
                  D(u, (r, g) => (n(), a("div", { class: "NorthRule__C-Content", key: g }, [kw, e("div", Tw, t(r.title), 1), e("div", ww, t(r.sub), 1), r.sub1 ? (n(), a("div", Lw, t(r.sub1), 1)) : B("", !0), r.sub2 ? (n(), a("div", Iw, t(r.sub2), 1)) : B("", !0)]))),
                  128,
               )),
               e("div", Sw, t(c(s)("sorthernLotteryGameRules")), 1),
               e("div", Gw, [xw, E(t(c(s)("colorstructure")), 1), Bw]),
               e("div", Nw, [
                  e("div", Rw, [e("div", Mw, t(c(s)("Lottery")), 1), e("div", Dw, t(c(s)("numberofPrizes")), 1), e("div", Aw, t(c(s)("Number")), 1)]),
                  (n(!0),
                  a(
                     N,
                     null,
                     D(p, (r, g) => (n(), a("div", { class: "table-row", key: g }, [e("div", Pw, t(r.title), 1), e("div", Ow, t(r.quantity), 1), e("div", Vw, t(r.number), 1)]))),
                     128,
                  )),
               ]),
               e("div", Ww, [
                  e("div", Hw, [e("div", zw, t(c(s)("sorthlotteryresult")), 1)]),
                  (n(!0),
                  a(
                     N,
                     null,
                     D(
                        d(p),
                        (r, g) => (
                           n(),
                           a(
                              "div",
                              { class: M(g == 0 ? "table-box none" : "table-box"), key: g },
                              [
                                 g != 0 ? (n(), a("div", Ew, t(r.title), 1)) : B("", !0),
                                 (n(!0),
                                 a(
                                    N,
                                    null,
                                    D(r.drawsNumber, (m, $) => (n(), a("div", { class: "table-box-number", key: $ }, t(m), 1))),
                                    128,
                                 )),
                              ],
                              2,
                           )
                        ),
                     ),
                     128,
                  )),
               ]),
            ])
         );
      },
   });
const jw = H(Fw, [["__scopeId", "data-v-925361c7"]]),
   Uw = { class: "vietnamPlay__C" },
   qw = { key: 0, class: "play" },
   Kw = { key: 1, class: "play" },
   Zw = { key: 0, class: "northrule" },
   Xw = { key: 1, class: "sorthrule" },
   Jw = V({
      __name: "index",
      setup(l) {
         var d, i;
         const s = ue(),
            o = k(0),
            u = s.currentRoute.value.query.id,
            v = ((i = (d = s.currentRoute.value.query) == null ? void 0 : d.gVSs) == null ? void 0 : i.toString()) || "",
            p = () => {
               s.go(-1);
            };
         return (_, r) => {
            const g = U("NavBar"),
               m = U("van-tab"),
               $ = U("van-tabs");
            return n(), a("div", Uw, [L(g, { "left-arrow": "", title: _.$t("lotteryManual"), onClickLeft: p, "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)" }, null, 8, ["title"]), L($, { active: o.value, "onUpdate:active": r[0] || (r[0] = y => (o.value = y)), type: "card", class: M({ dis: c(v) == "2" }) }, { default: A(() => [L(m, { title: _.$t("gamePlay") }, { default: A(() => [c(u) == "1" ? (n(), a("div", qw, [L(tT)])) : (n(), a("div", Kw, [L(ow)]))]), _: 1 }, 8, ["title"]), c(v) != "2" ? (n(), Z(m, { key: 0, title: _.$t("rule") }, { default: A(() => [c(u) == "1" ? (n(), a("div", Zw, [L(VT)])) : (n(), a("div", Xw, [L(jw)]))]), _: 1 }, 8, ["title"])) : B("", !0)]), _: 1 }, 8, ["active", "class"])]);
         };
      },
   });
const Yw = H(Jw, [["__scopeId", "data-v-2b77a79f"]]),
   NV = Object.freeze(Object.defineProperty({ __proto__: null, default: Yw }, Symbol.toStringTag, { value: "Module" })),
   Qw = l => (ye("data-v-55cb6917"), (l = l()), fe(), l),
   eL = { class: "TimeLeft__C" },
   tL = { class: "TimeLeft__C-name" },
   sL = { class: "TimeLeft__C-num" },
   nL = { class: "TimeLeft__C-id" },
   aL = { class: "TimeLeft__C-text" },
   oL = { class: "TimeLeft__C-time" },
   lL = Qw(() => e("div", null, ":", -1)),
   iL = V({
      __name: "TimeLeft",
      props: { currentInfo: { type: Object, default: () => ({ gameNo: "loading", currentTime: "", beginTime: "", passTime: 180, time1: 0, time2: 0, time3: 0, time4: 0 }) }, winNum: { type: Array, default: [0, 0, 0, 0, 0] }, gameName: { type: String, default: "" }, currentGame: { type: Object, default: () => ({}) } },
      setup(l) {
         const s = l,
            o = k(!1),
            u = Ut(),
            v = () => {
               (o.value = !0), u.getWinGoRule(s.currentGame.typeID);
            };
         return (p, d) => (
            n(),
            a(
               N,
               null,
               [
                  e("div", eL, [
                     e("div", { class: "TimeLeft__C-rule", onClick: v }, t(p.$t("winTrxIndicate")), 1),
                     e("div", tL, t(s.gameName.replace("<br />", " ")), 1),
                     e("div", sL, [
                        (n(!0),
                        a(
                           N,
                           null,
                           D(l.winNum, (i, _) => (n(), a("div", { key: _, class: M(["n" + i]) }, null, 2))),
                           128,
                        )),
                     ]),
                     e("div", nL, t(s.currentInfo.gameNo), 1),
                     e("div", aL, t(p.$t("timeLeftToBuy")), 1),
                     e("div", oL, [e("div", null, t(l.currentInfo.time1), 1), e("div", null, t(l.currentInfo.time2), 1), lL, e("div", null, t(l.currentInfo.time3), 1), e("div", null, t(l.currentInfo.time4), 1)]),
                  ]),
                  L(Us, { howPlayShow: o.value, gamePresentation: l.currentGame.gamePresentation, onClose: d[0] || (d[0] = i => (o.value = !1)) }, null, 8, ["howPlayShow", "gamePresentation"]),
               ],
               64,
            )
         );
      },
   });
const cL = H(iL, [["__scopeId", "data-v-55cb6917"]]),
   uL = l => (ye("data-v-e49b49d6"), (l = l()), fe(), l),
   rL = { class: "Betting__Popup-head" },
   dL = { class: "Betting__Popup-head-title" },
   _L = { class: "Betting__Popup-head-selectName" },
   vL = { class: "Betting__Popup-body" },
   pL = { class: "Betting__Popup-body-line" },
   mL = { class: "Betting__Popup-body-line-list" },
   gL = ["onClick"],
   hL = { class: "Betting__Popup-body-line" },
   yL = { class: "Betting__Popup-body-line-btnL" },
   fL = { class: "Betting__Popup-body-line" },
   bL = uL(() => e("div", null, null, -1)),
   $L = { class: "Betting__Popup-body-line-list" },
   CL = ["onClick"],
   kL = { class: "Betting__Popup-body-line" },
   TL = { class: "Betting__Popup-foot" },
   wL = { class: "Betting__Popup-foot-s bgcolor" },
   LL = { class: "Betting__Popup-PreSale" },
   IL = { class: "Betting__Popup-PreSale-head" },
   SL = { class: "Betting__Popup-PreSale-body" },
   GL = { class: "Betting__Popup-PreSale-foot" },
   xL = V({
      __name: "BettingPopup",
      props: { currentGame: { type: Object, default: () => ({}) }, selectInfo: { type: Object, default: () => ({}) }, bettingPopupShow: { type: Boolean, default: k(!1) }, betTypeList: { type: Array, default: [] }, multipleList: { type: Array, default: () => [1, 5, 10, 20, 50, 100] } },
      emits: ["update:bettingPopupShow", "update:selectInfo", "clearBetting", "submitBetting"],
      setup(l, { emit: s }) {
         const o = l,
            { t: u } = _e(),
            v = k(!1),
            p = k(!0),
            d = q({
               get() {
                  return o.bettingPopupShow || !1;
               },
               set(b) {
                  s("update:bettingPopupShow", b);
               },
            }),
            i = q(() => {
               switch (o.selectInfo.selecttype) {
                  case 13:
                     return u("big");
                  case 14:
                     return u("small");
                  case 10:
                     return u("redColor");
                  case 11:
                     return u("greenColor");
                  case 12:
                     return u("purpleColor");
                  default:
                     return o.selectInfo.selecttype;
               }
            }),
            _ = q(() => o.currentGame.typeName),
            r = b => {
               switch (b) {
                  case 1:
                     o.selectInfo.count > 1 && (o.selectInfo.count--, f());
                     break;
                  case 2:
                     o.selectInfo.count++, f();
                     break;
               }
            },
            g = b => {
               b > 0 && ((o.selectInfo.count = parseInt(b)), f());
            },
            m = b => {
               (o.selectInfo.count = b), f();
            },
            $ = b => {
               (o.selectInfo.coin = b), f();
            },
            y = () => {
               (v.value = !1), (p.value = !0);
            },
            C = () => {
               if (o.selectInfo.count == 0) return Ee(u("bteNoCount"));
               p.value ? s("submitBetting") : Ct(u("agreePresaleRules"));
            },
            f = () => {
               o.selectInfo.allCoin = o.selectInfo.coin * o.selectInfo.count;
            };
         return (b, T) => {
            const h = U("van-field"),
               w = U("van-popup"),
               I = Te("throttle-click");
            return (
               n(),
               a(
                  N,
                  null,
                  [
                     L(
                        w,
                        { show: d.value, "onUpdate:show": T[6] || (T[6] = x => (d.value = x)), position: "bottom", round: !0, "close-on-click-overlay": !1 },
                        {
                           default: A(() => [
                              e(
                                 "div",
                                 { class: M([`Betting__Popup-${l.selectInfo.selecttype}`]) },
                                 [
                                    e("div", rL, [e("div", dL, t(_.value.replace("<br />", " ")), 1), e("div", _L, [e("span", null, t(c(u)("choose")), 1), e("span", null, t(i.value), 1)])]),
                                    e("div", vL, [
                                       e("div", pL, [
                                          E(t(c(u)("amount")) + " ", 1),
                                          e("div", mL, [
                                             (n(!0),
                                             a(
                                                N,
                                                null,
                                                D(l.betTypeList, (x, S) => (n(), a("div", { key: S, class: M(["Betting__Popup-body-line-item", { bgcolor: l.selectInfo.coin == x }]), onClick: G => $(x) }, t(x), 11, gL))),
                                                128,
                                             )),
                                          ]),
                                       ]),
                                       e("div", hL, [E(t(c(u)("numbers")) + " ", 1), e("div", yL, [e("div", { class: M(["Betting__Popup-btn", { bgcolor: l.selectInfo.count > 0 }]), onClick: T[0] || (T[0] = x => r(1)) }, "-", 2), L(h, { class: "Betting__Popup-input", modelValue: l.selectInfo.count, "onUpdate:modelValue": T[1] || (T[1] = x => (l.selectInfo.count = x)), modelModifiers: { number: !0 }, type: "digit", maxlength: 4, onInput: g }, null, 8, ["modelValue"]), e("div", { class: "Betting__Popup-btn bgcolor", onClick: T[2] || (T[2] = x => r(2)) }, "+")])]),
                                       e("div", fL, [
                                          bL,
                                          e("div", $L, [
                                             (n(!0),
                                             a(
                                                N,
                                                null,
                                                D(l.multipleList, (x, S) => (n(), a("div", { key: S, class: M(["Betting__Popup-body-line-item", { bgcolor: l.selectInfo.count == x }]), onClick: G => m(x) }, " X" + t(x), 11, CL))),
                                                128,
                                             )),
                                          ]),
                                       ]),
                                       e("div", kL, [e("span", { class: M(["Betting__Popup-agree", { active: p.value }]), onClick: T[3] || (T[3] = x => (p.value = !p.value)) }, t(c(u)("agree")), 3), e("span", { onClick: T[4] || (T[4] = x => (v.value = !0)), class: "Betting__Popup-preSaleShow" }, t(c(u)("presaleRules")), 1)]),
                                    ]),
                                    e("div", TL, [e("div", { class: "Betting__Popup-foot-c", onClick: T[5] || (T[5] = x => s("clearBetting")) }, t(c(u)("cancel")), 1), te((n(), a("div", wL, [E(t(c(u)("totalAmount")) + " " + t(c(Be)(l.selectInfo.count * l.selectInfo.coin || 0)), 1)])), [[I, { handler: C, wait: 2e3 }]])]),
                                 ],
                                 2,
                              ),
                           ]),
                           _: 1,
                        },
                        8,
                        ["show"],
                     ),
                     L(w, { show: v.value, "onUpdate:show": T[7] || (T[7] = x => (v.value = x)), "close-on-click-overlay": !1, round: "" }, { default: A(() => [e("div", LL, [e("div", IL, t(c(u)("presaleRules")), 1), e("div", SL, t(b.$t("betPopTXT")), 1), e("div", GL, [e("div", { class: "Betting__Popup-PreSale-foot-btn", onClick: y }, t(c(u)("iKonw")), 1)])])]), _: 1 }, 8, ["show"]),
                  ],
                  64,
               )
            );
         };
      },
   });
const BL = H(xL, [["__scopeId", "data-v-e49b49d6"]]),
   NL = { class: "Betting__C" },
   RL = { class: "Betting__C-mark" },
   ML = { class: "Betting__C-head" },
   DL = { class: "Betting__C-numC" },
   AL = ["onClick"],
   PL = { class: "Betting__C-multiple" },
   OL = ["onClick"],
   VL = { class: "Betting__C-foot" },
   WL = V({
      __name: "Betting",
      props: { currentInfo: { type: Object, default: () => ({}) }, ProhibitBuyTime: { type: Number, default: 5 }, currentGame: { type: Object, default: () => ({}) }, bettingApiFun: { type: Function, required: !0 } },
      emits: ["betting", "changeBettingP"],
      setup(l, { expose: s, emit: o }) {
         const u = l,
            v = Bs.global.t,
            p = q(() => u.currentGame.betMultiple.split("|")),
            d = k(!1),
            i = k(""),
            _ = k({ coin: 0, count: p.value[0], allCoin: 0, gametype: 0, typeid: 1, issuenumber: "2020", selecttype: 1 });
         Ve(
            () => p,
            () => {
               _.value.count = p.value[0];
            },
            { deep: !0, immediate: !0 },
         );
         const r = k(null),
            g = k(0),
            m = k(!1),
            $ = q(() => (u.currentInfo.passTime < u.ProhibitBuyTime && w(), u.currentInfo.passTime < u.ProhibitBuyTime)),
            y = q(() => u.currentGame.typeID),
            C = q(() => (u.currentGame.scope ? u.currentGame.scope.split("|").map(x => Number(x)) : [])),
            f = x => {
               (_.value.count = x), b();
            },
            b = () => {
               _.value.allCoin = _.value.coin * _.value.count;
            },
            T = (x, S, G) => {
               (_.value.gametype = G), (_.value.selecttype = x), (_.value.issuenumber = u.currentInfo.gameNo), (_.value.typeid = y.value), (_.value.coin = C.value[0]), (i.value = x), (d.value = !0);
            },
            h = () => {
               m.value ||
                  ((m.value = !0),
                  r.value ||
                     (r.value = setInterval(function () {
                        g.value = Math.floor(Math.random() * 11);
                     }, 50)),
                  setTimeout(function () {
                     g.value > 9 && (g.value = 9), clearInterval(r.value), (m.value = !1), (r.value = null), T(g.value, "color" + g.value, 1);
                  }, 5e3));
            },
            w = () => {
               d.value && ((d.value = !1), (_.value.coin = C.value[0]), (_.value.count = p.value[0]), b(), o("changeBettingP", d.value));
            },
            I = async () => {
               const x = await de(u.bettingApiFun({ typeId: _.value.typeid, issuenumber: _.value.issuenumber, amount: _.value.coin, betCount: Number(_.value.count), gameType: _.value.gametype, selectType: _.value.selecttype }));
               (x == null ? void 0 : x.code) === 0 && (Ct(v("code" + x.msgCode)), o("betting", _.value.issuenumber), w());
            };
         return (
            s({ bettingPopupShow: d }),
            (x, S) => (
               n(),
               a("div", NL, [
                  te(e("div", RL, [e("div", null, t(u.currentInfo.time3 || "0"), 1), e("div", null, t(u.currentInfo.time4 || "0"), 1)], 512), [[He, $.value]]),
                  e("div", ML, [e("div", { class: "Betting__C-head-g", onClick: S[0] || (S[0] = G => T(11, "#5CBA47", 0)) }, t(x.$t("greenColor")), 1), e("div", { class: "Betting__C-head-p", onClick: S[1] || (S[1] = G => T(12, "#9831E9", 0)) }, t(x.$t("purpleColor")), 1), e("div", { class: "Betting__C-head-r", onClick: S[2] || (S[2] = G => T(10, "#FB4E4E", 0)) }, t(x.$t("redColor")), 1)]),
                  e("div", DL, [
                     (n(),
                     a(
                        N,
                        null,
                        D(10, (G, R) => e("div", { key: R, class: M([g.value == G ? "active" : "", "Betting__C-numC-item" + R]), onClick: O => T(R, "color" + R, 1) }, null, 10, AL)),
                        64,
                     )),
                  ]),
                  e("div", PL, [
                     e("div", { class: "Betting__C-multiple-l", onClick: h }, t(x.$t("randomBet")), 1),
                     (n(!0),
                     a(
                        N,
                        null,
                        D(p.value, (G, R) => (n(), a("div", { key: R, class: M(["Betting__C-multiple-r", { active: _.value.count == G }]), onClick: O => f(G) }, " X" + t(G), 11, OL))),
                        128,
                     )),
                  ]),
                  e("div", VL, [e("div", { class: "Betting__C-foot-b", onClick: S[3] || (S[3] = G => T(13, "#ffc511", 2)) }, t(x.$t("big")), 1), e("div", { class: "Betting__C-foot-s", onClick: S[4] || (S[4] = G => T(14, "#5CBA47", 2)) }, t(x.$t("small")), 1)]),
                  L(BL, { currentGame: l.currentGame, selectInfo: _.value, bettingPopupShow: d.value, betTypeList: C.value, multipleList: p.value, onClearBetting: w, onSubmitBetting: I }, null, 8, ["currentGame", "selectInfo", "bettingPopupShow", "betTypeList", "multipleList"]),
               ])
            )
         );
      },
   });
const co = H(WL, [["__scopeId", "data-v-4431c0ec"]]),
   Qs = l => (ye("data-v-c52f94a7"), (l = l()), fe(), l),
   HL = { class: "GameRecord__C" },
   zL = { class: "GameRecord__C-head" },
   EL = { class: "GameRecord__C-body" },
   FL = { key: 0 },
   jL = { key: 1 },
   UL = { class: "GameRecord__C-origin" },
   qL = Qs(() => e("div", { class: "GameRecord__C-origin-I red" }, null, -1)),
   KL = Qs(() => e("div", { class: "GameRecord__C-origin-I violet" }, null, -1)),
   ZL = { key: 1, class: "GameRecord__C-origin-I green" },
   XL = { key: 2, class: "GameRecord__C-origin-I red" },
   JL = Qs(() => e("div", { class: "GameRecord__C-origin-I green" }, null, -1)),
   YL = Qs(() => e("div", { class: "GameRecord__C-origin-I violet" }, null, -1)),
   QL = { key: 1, class: "GameRecord__C-body-empty" },
   eI = { key: 0, class: "GameRecord__C-foot" },
   tI = { class: "GameRecord__C-foot-page" },
   sI = V({
      __name: "GameRecord",
      props: { typeid: {} },
      emits: ["changefive"],
      setup(l, { expose: s, emit: o }) {
         const u = l,
            v = k([]),
            p = k(4),
            d = k(10),
            i = k(1),
            _ = () => {
               i.value--, g();
            },
            r = () => {
               i.value++, g();
            },
            g = async (y = !1) => {
               if (u.typeid == null) return;
               y && (i.value = 1);
               const [C, f] = await ct(ja({ pageSize: d.value, pageNo: i.value, typeId: u.typeid }));
               (v.value = f.list || []),
                  (p.value = f.totalPage),
                  y &&
                     o(
                        "changefive",
                        f.list.slice(0, 5).map(b => b.number),
                     );
            },
            m = y => parseInt(y, 10) % 2 !== 0,
            $ = y => {
               let C = "";
               switch ((m(y) ? (C = "greenColor") : (C = "defaultColor"), y)) {
                  case "0":
                     C = "mixedColor0";
                     break;
                  case "5":
                     C = "mixedColor5";
                     break;
               }
               return C;
            };
         return (
            s({ getData: g }),
            kt(() => {
               g();
            }),
            (y, C) => {
               const f = U("van-col"),
                  b = U("van-row"),
                  T = U("van-icon");
               return (
                  n(),
                  a("div", HL, [
                     e("div", zL, [L(b, null, { default: A(() => [L(f, { span: "8" }, { default: A(() => [E(t(y.$t("betSerial")), 1)]), _: 1 }), L(f, { span: "5" }, { default: A(() => [E(t(y.$t("num")), 1)]), _: 1 }), L(f, { span: "5" }, { default: A(() => [E(t(y.$t("bigOrSmall")), 1)]), _: 1 }), L(f, { span: "6" }, { default: A(() => [E(t(y.$t("color")), 1)]), _: 1 })]), _: 1 })]),
                     e("div", EL, [
                        v.value.length
                           ? (n(!0),
                             a(
                                N,
                                { key: 0 },
                                D(v.value, (h, w) => (n(), Z(b, { key: w }, { default: A(() => [L(f, { span: "8" }, { default: A(() => [E(t(h.issueNumber), 1)]), _: 2 }, 1024), L(f, { span: "5", class: "numcenter" }, { default: A(() => [e("div", { class: M(["GameRecord__C-body-num", $(h.number)]) }, t(h.number), 3)]), _: 2 }, 1024), L(f, { span: "5" }, { default: A(() => [Number(h.number) > 4 ? (n(), a("span", FL, t(y.$t("big")), 1)) : (n(), a("span", jL, t(y.$t("small")), 1))]), _: 2 }, 1024), L(f, { span: "6" }, { default: A(() => [e("div", UL, [h.number == "0" ? (n(), a(N, { key: 0 }, [qL, KL], 64)) : B("", !0), h.number == "1" || h.number == "3" || h.number == "7" || h.number == "9" ? (n(), a("div", ZL)) : B("", !0), h.number == "2" || h.number == "4" || h.number == "6" || h.number == "8" ? (n(), a("div", XL)) : B("", !0), h.number == "5" ? (n(), a(N, { key: 3 }, [JL, YL], 64)) : B("", !0)])]), _: 2 }, 1024)]), _: 2 }, 1024))),
                                128,
                             ))
                           : (n(), a("div", QL, [L(gt)])),
                     ]),
                     v.value.length ? (n(), a("div", eI, [e("div", { class: M(["GameRecord__C-foot-previous", { disabled: i.value <= 1 }]), onClick: _ }, [L(T, { name: "arrow-left", class: "GameRecord__C-icon", size: "20" })], 2), e("div", tI, t(i.value) + "/" + t(p.value), 1), e("div", { class: M(["GameRecord__C-foot-next", { disabled: i.value >= p.value }]), onClick: r }, [L(T, { name: "arrow", class: "GameRecord__C-icon", size: "20" })], 2)])) : B("", !0),
                  ])
               );
            }
         );
      },
   });
const nI = H(sI, [["__scopeId", "data-v-c52f94a7"]]),
   aI = { class: "Trend__C" },
   oI = { class: "Trend__C-head" },
   lI = { class: "Trend__C-body1" },
   iI = { class: "Trend__C-body1-line" },
   cI = { class: "Trend__C-body1-line lottery" },
   uI = { key: 0, class: "Trend__C-body1-line-num" },
   rI = { key: 0, class: "Trend__C-body1-line" },
   dI = { class: "Trend__C-body1-line-num" },
   _I = { key: 1, class: "Trend__C-body1-line" },
   vI = { class: "Trend__C-body1-line-num" },
   pI = { key: 2, class: "Trend__C-body1-line" },
   mI = { class: "Trend__C-body1-line-num" },
   gI = { key: 3, class: "Trend__C-body1-line" },
   hI = { class: "Trend__C-body1-line-num" },
   yI = { class: "Trend__C-body2" },
   fI = ["IssueNumber", "Number", "Colour", "rowId"],
   bI = { class: "Trend__C-body2-IssueNumber" },
   $I = { class: "Trend__C-body2-Num" },
   CI = ["id"],
   kI = { key: 1, class: "Trend__C-body2-empty" },
   TI = { key: 0, class: "Trend__C-foot" },
   wI = { class: "Trend__C-foot-page" },
   LI = V({
      __name: "Trend",
      props: { typeid: {}, listApi: {}, EmerdApi: {} },
      emits: ["changefive"],
      setup(l, { expose: s, emit: o }) {
         const u = l,
            v = k([]),
            p = k([]),
            d = k(),
            i = k(),
            _ = k(),
            r = k(),
            g = k(),
            m = k(1),
            $ = k(4);
         function y() {
            lt(() => {
               for (let w = 0; w < p.value.length; w++) p.value[w + 1] && C(p.value[w], p.value[w + 1]);
            });
         }
         function C(w, I) {
            let x = parseInt(w.number),
               S = parseInt(I.number);
            var G = document.getElementById("myCanvas" + w.rowId);
            if (G && G.getContext) {
               var R = G.getContext("2d");
               R.clearRect(0, 0, G.width, G.height), R.beginPath(), R.moveTo(x == 0 ? 15 : x * 29 + 15, 0), R.lineTo(S == 0 ? 15 : S * 29 + 15, G.height), (R.strokeStyle = "#A4EBF3"), R.stroke(), R.closePath();
            }
         }
         const f = () => {
               m.value--, h();
            },
            b = () => {
               m.value++, h();
            },
            T = async (w = !1) => {
               if (u.typeid == null) return;
               w && ((m.value = 1), h(w));
               const [I, x] = await ct(u.EmerdApi({ typeId: u.typeid }));
               if (x.length) {
                  const S = Object.keys(x[0]).filter(G => G.startsWith("number_"));
                  v.value = x.map(G => {
                     const R = { list: [] };
                     return (
                        (R.type = G.type),
                        (R.list = []),
                        S.forEach(O => {
                           R.list.push(G[O]);
                        }),
                        R
                     );
                  });
               }
               (d.value = v.value[0]), (i.value = v.value[1]), (_.value = v.value[2]), (r.value = v.value[3]), (g.value = v.value[4]);
            },
            h = async (w = !1) => {
               var S;
               if (u.typeid == null) return;
               w && (m.value = 1);
               const [I, x] = await ct(u.listApi({ pageSize: 10, pageNo: m.value, typeId: u.typeid }));
               if ((x.list ? (p.value = x.list.map((G, R) => ((G.rowId = R), G)) || []) : x.data.gameslist && (p.value = x.data.gameslist.map((G, R) => ((G.rowId = R), G)) || []), ($.value = x.totalPage), w)) {
                  const G = ((S = x.data) == null ? void 0 : S.gameslist) || x.list || [];
                  o(
                     "changefive",
                     G.slice(0, 5).map(R => R.number),
                  );
               }
               y();
            };
         return (
            s({ getData: T }),
            kt(() => {
               T(), h();
            }),
            (w, I) => {
               const x = U("van-col"),
                  S = U("van-row"),
                  G = U("van-icon");
               return (
                  n(),
                  a("div", aI, [
                     e("div", oI, [L(S, null, { default: A(() => [L(x, { span: "8" }, { default: A(() => [E(t(w.$t("betIssue")), 1)]), _: 1 }), L(x, { span: "16" }, { default: A(() => [E(t(w.$t("number")), 1)]), _: 1 })]), _: 1 })]),
                     e("div", lI, [
                        e("div", iI, t(w.$t("trendDesc1")), 1),
                        e("div", cI, [
                           e("div", null, t(w.$t("trendDesc2")), 1),
                           d.value
                              ? (n(),
                                a("div", uI, [
                                   (n(),
                                   a(
                                      N,
                                      null,
                                      D(10, R => e("div", { key: R }, t(R - 1), 1)),
                                      64,
                                   )),
                                ]))
                              : B("", !0),
                        ]),
                        r.value && r.value.type == 2
                           ? (n(),
                             a("div", rI, [
                                e("div", null, t(w.$t("trendDesc3")), 1),
                                e("div", dI, [
                                   (n(!0),
                                   a(
                                      N,
                                      null,
                                      D(r.value.list, (R, O) => (n(), a("div", { key: "4" + O }, t(R), 1))),
                                      128,
                                   )),
                                ]),
                             ]))
                           : B("", !0),
                        i.value && i.value.type == 4
                           ? (n(),
                             a("div", _I, [
                                e("div", null, t(w.$t("trendDesc4")), 1),
                                e("div", vI, [
                                   (n(!0),
                                   a(
                                      N,
                                      null,
                                      D(i.value.list, (R, O) => (n(), a("div", { key: "2" + O }, t(R), 1))),
                                      128,
                                   )),
                                ]),
                             ]))
                           : B("", !0),
                        g.value && g.value.type == 1
                           ? (n(),
                             a("div", pI, [
                                e("div", null, t(w.$t("trendDesc5")), 1),
                                e("div", mI, [
                                   (n(!0),
                                   a(
                                      N,
                                      null,
                                      D(g.value.list, (R, O) => (n(), a("div", { key: "5" + O }, t(R), 1))),
                                      128,
                                   )),
                                ]),
                             ]))
                           : B("", !0),
                        _.value && _.value.type == 3
                           ? (n(),
                             a("div", gI, [
                                e("div", null, t(w.$t("trendDesc6")), 1),
                                e("div", hI, [
                                   (n(!0),
                                   a(
                                      N,
                                      null,
                                      D(_.value.list, (R, O) => (n(), a("div", { key: "3" + O }, t(R), 1))),
                                      128,
                                   )),
                                ]),
                             ]))
                           : B("", !0),
                     ]),
                     e("div", yI, [
                        p.value.length
                           ? (n(!0),
                             a(
                                N,
                                { key: 0 },
                                D(
                                   p.value,
                                   (R, O) => (
                                      n(),
                                      a(
                                         "div",
                                         { key: O, IssueNumber: R.issueNumber, Number: R.number, Colour: R.colour, rowId: R.rowId },
                                         [
                                            L(
                                               S,
                                               null,
                                               {
                                                  default: A(() => [
                                                     L(x, { span: "8" }, { default: A(() => [e("div", bI, t(R.issueNumber), 1)]), _: 2 }, 1024),
                                                     L(
                                                        x,
                                                        { span: "16" },
                                                        {
                                                           default: A(() => [
                                                              e("div", $I, [
                                                                 e("canvas", { canvas: "", id: "myCanvas" + R.rowId, ref_for: !0, ref: "canvas", class: "line-canvas" }, null, 8, CI),
                                                                 (n(),
                                                                 a(
                                                                    N,
                                                                    null,
                                                                    D(10, P => e("div", { class: M(["Trend__C-body2-Num-item", Number(R.number) == P - 1 ? "action" + (P - 1) : ""]), key: P }, t(P - 1), 3)),
                                                                    64,
                                                                 )),
                                                                 e("div", { class: M(["Trend__C-body2-Num-BS", { isB: Number(R.number) > 4 }]) }, t(Number(R.number) > 4 ? "B" : "S"), 3),
                                                              ]),
                                                           ]),
                                                           _: 2,
                                                        },
                                                        1024,
                                                     ),
                                                  ]),
                                                  _: 2,
                                               },
                                               1024,
                                            ),
                                         ],
                                         8,
                                         fI,
                                      )
                                   ),
                                ),
                                128,
                             ))
                           : (n(), a("div", kI, [L(gt)])),
                     ]),
                     p.value.length ? (n(), a("div", TI, [e("div", { class: M(["Trend__C-foot-previous", { disabled: m.value <= 1 }]), onClick: f }, [L(G, { name: "arrow-left", class: "Trend__C-icon", size: "20" })], 2), e("div", wI, t(m.value) + "/" + t($.value), 1), e("div", { class: M(["Trend__C-foot-next", { disabled: m.value >= $.value }]), onClick: b }, [L(G, { name: "arrow", class: "Trend__C-icon", size: "20" })], 2)])) : B("", !0),
                  ])
               );
            }
         );
      },
   });
const uo = H(LI, [["__scopeId", "data-v-54016b1c"]]),
   II = { key: 1, class: "WinningTip__C-body-l1" },
   SI = { class: "WinningNum" },
   GI = { class: "WinningTip__C-body-l3" },
   xI = { key: 0, class: "isLose" },
   BI = { class: "head" },
   NI = { class: "bonus" },
   RI = { class: "gameDetail" },
   MI = { class: "WinningTip__C-body-l4" },
   DI = ["onClick"],
   AI = V({
      __name: "WinningTips",
      setup(l, { expose: s }) {
         const { t: o } = _e(),
            u = q(() => (d.value[0] ? d.value[0].state == 0 : !1)),
            v = q(() => d.value[0] || {}),
            p = k(!1),
            d = k([]),
            i = k({ red: o("winColor1"), green: o("winColor2"), "red,violet": o("winColor3"), "green,violet": o("winColor4"), violet: o("winColor5") });
         let _ = k();
         const r = () => {
            clearTimeout(_.value),
               d.value.shift(),
               p.value &&
                  d.value.length &&
                  (_.value = setTimeout(() => {
                     r();
                  }, 1e3 * 3));
         };
         Ve(
            () => d.value.length,
            y => {
               y ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "");
            },
         );
         const g = () => {
               (p.value = !p.value),
                  p.value
                     ? (_.value = setTimeout(() => {
                          r();
                       }, 1e3 * 3))
                     : clearTimeout(_.value);
            },
            m = y => {
               d.value.push(...y),
                  p.value &&
                     (_.value = setTimeout(() => {
                        r();
                     }, 1e3 * 3));
            },
            $ = () => {
               d.value = [];
            };
         return (
            s({ showMark: m }),
            (y, C) =>
               te(
                  (n(),
                  a(
                     "div",
                     { class: "WinningTip__C", onClick: r },
                     [
                        e(
                           "div",
                           { class: M(["WinningTip__C-body", { isL: u.value }]) },
                           [u.value ? (n(), a("div", { key: 0, class: M(["WinningTip__C-body-l1", { isL: u.value }]) }, t(y.$t("k3WarningTip1")), 3)) : (n(), a("div", II, t(y.$t("k3WarningTip2")), 1)), e("div", { class: M(["WinningTip__C-body-l2", [`type${v.value.number}`]]) }, [E(t(y.$t("winTips3")) + " ", 1), e("div", null, t(i.value[v.value.colour]), 1), e("div", SI, t(v.value.number), 1), e("div", null, t(v.value.number > 4 ? y.$t("big") : y.$t("small")), 1)], 2), e("div", GI, [u.value ? (n(), a("div", xI, t(y.$t("winTips4")), 1)) : (n(), a(N, { key: 1 }, [e("div", BI, t(y.$t("winTips5")), 1), e("div", NI, t(c(Be)(Number(v.value.winAmount))), 1)], 64)), e("div", RI, t(y.$t("winTips6")) + t(v.value.typeName) + " " + t(v.value.issueNumber), 1)]), e("div", MI, [e("div", { class: M(["acitveBtn", { active: p.value }]), onClick: ut(g, ["stop"]) }, null, 10, DI), E(" " + t(y.$t("autoShutOff3s")), 1)]), e("div", { class: "closeBtn", onClick: $ })],
                           2,
                        ),
                     ],
                     512,
                  )),
                  [[He, d.value.length]],
               )
         );
      },
   });
const ro = H(AI, [["__scopeId", "data-v-646d4ebc"]]),
   PI = l => (ye("data-v-40958d9a"), (l = l()), fe(), l),
   OI = { class: "WinGo__C" },
   VI = PI(() => e("div", { class: "arrow-left" }, null, -1)),
   WI = { class: "WinGo__C-head-more" },
   HI = V({
      __name: "index",
      setup(l) {
         var Le, Ie;
         const s = { GameRecord: nI, Trend: uo, MyGameRecord: Mn },
            o = k(),
            u = k(),
            v = k(),
            p = k(!1),
            d = k("GameRecord"),
            i = ue(),
            _ = Ut();
         _.getWinGoData();
         const r = _.getWingo,
            g = { 1: 0, 2: 1, 3: 2, 4: 3 },
            m = k((Le = i.currentRoute.value.query) != null && Le.typeId ? g[(Ie = i.currentRoute.value.query) == null ? void 0 : Ie.typeId] : 0),
            $ = k(localStorage.getItem("volumeShow") || "1"),
            y = k(!1),
            C = k(null),
            f = k({ gameNo: "loading", currentTime: "", beginTime: "", passTime: 180, time1: 0, time2: 0, time3: 0, time4: 0 }),
            b = k(5),
            T = k(""),
            h = k(!1),
            w = k(null),
            I = q(() => r[m.value] || {}),
            x = k([0, 0, 0, 0, 0]),
            S = je(),
            G = q(() => S.getIsShowLotteryDragon);
         he(() => {
            W();
         }),
            jt(() => {
               clearInterval(C.value),
                  ge.value.forEach(re => {
                     clearInterval(re);
                  }),
                  we.value && clearTimeout(we.value);
            }),
            Ve(
               () => rt().visibility,
               re => {
                  re === 0 ? clearInterval(C.value) : (W(), J(m.value));
               },
            );
         const R = () => {
               sessionStorage.setItem("clickedGameType", "lottery"), i.push({ path: "/" });
            },
            O = () => {
               $.value == "1" ? ($.value = "2") : ($.value = "1"), localStorage.setItem("volumeShow", $.value);
            },
            P = re => {
               i.push({ name: re });
            },
            W = () => {
               w.value == null && J(m.value);
            },
            J = re => {
               _.getWinGoData(),
                  (m.value = re),
                  (w.value = r[re].typeID),
                  le(w.value),
                  lt(() => {
                     o.value.getData(w.value);
                  });
            },
            le = async re => {
               d.value == "MyGameRecord" && ie(re);
               const [se, Q] = await ct(ni({ typeId: re }));
               (f.value.gameNo = Q.issueNumber), (f.value.currentTime = Q.serviceTime.replace(/-/g, "/")), (f.value.beginTime = Q.startTime.replace(/-/g, "/")), ne();
            },
            ie = async re => {
               const se = await de(ai({ typeId: re }));
               se && (x.value = se.data.number.split(","));
            },
            ne = () => {
               const re = new Date(f.value.currentTime).getTime(),
                  se = new Date(f.value.beginTime).getTime();
               let Q = (re - se) / 1e3,
                  ee = r[m.value];
               if ((Q > ee.intervalM * 60 && (Q = ee.intervalM * 60), (f.value.passTime = ee.intervalM * 60 - Q), f.value.passTime < 0)) {
                  (T.value = "An error occurred, please contact customer service。The game time is " + ee.intervalM + " minutes,start time is " + f.value.beginTime + ",current time is" + f.value.currentTime + "!"), (y.value = !0);
                  return;
               }
               z();
            },
            z = () => {
               clearInterval(C.value),
                  X(!1),
                  (C.value = setInterval(function () {
                     X();
                  }, 1e3));
            },
            X = (re = !0) => {
               if ((f.value.passTime <= b.value && (h.value = !1), $.value == "1" && (f.value.passTime <= b.value && f.value.passTime > 1 ? ce(1) : f.value.passTime == 1 && ce(2)), f.value.passTime > 0)) {
                  let se = f.value.passTime;
                  (f.value.time2 = Math.floor(se / 60)), (f.value.time3 = Math.floor((se % 60) / 10)), (f.value.time4 = Math.floor(se % 10)), f.value.passTime--;
               } else clearInterval(C.value), re && Ne();
            },
            ce = (re = 1) => {
               const se = document.getElementById(`voice${re}`);
               se && se.play();
            },
            Ne = () => {
               le(w.value || 0), v.value.getWinsUserAmount(!1), o.value.getData(!0);
            },
            Se = k({}),
            ge = k([]),
            Je = re => {
               if ((v.value.getWinsUserAmount(!1), o.value.getData(), Se.value[re])) return;
               Se.value[re] = !0;
               const { time1: se, time2: Q, time3: ee, time4: ae } = f.value,
                  Ge = (se * 10 * 60 + Q * 60 + ee * 10 + ae) * 1e3 + Math.floor(Math.random() * 2e3) + 1e3;
               ge.value[I.value.intervalM] = setTimeout(() => {
                  xe(re);
               }, Ge);
            },
            Qe = re => {
               p.value = re;
            },
            et = re => {
               x.value = re;
            },
            we = k(null),
            xe = async re => {
               const [se, Q] = await ct(oi({ issueNumber: [re] }));
               if (Q) {
                  const ee = Q.filter(ae => ae.state != 2);
                  if (!ee.length) return;
                  u.value.showMark(ee), delete Se.value[re];
               }
            };
         return (re, se) => {
            const Q = U("NavBar");
            return (
               n(),
               a("div", OI, [
                  L(Q, { "left-arrow": "", onClickLeft: R, "background-color": "linear-gradient(90deg, #8deef5 0%, #259aa3 100%)", headLogo: !0 }, { left: A(() => [VI]), right: A(() => [e("div", WI, [e("div", { onClick: se[0] || (se[0] = ee => P("CustomerService")) }), e("div", { class: M({ disableVoice: $.value == "2" }), onClick: O }, null, 2)])]), _: 1 }),
                  L(Fs, { ref_key: "WallteRef", ref: v }, null, 512),
                  L(Yt, { key: "wingo" }),
                  L(js, { gameList: c(r), currentGameIndex: m.value, onChangeGame: J }, null, 8, ["gameList", "currentGameIndex"]),
                  L(cL, { currentInfo: f.value, winNum: x.value, gameName: I.value.typeName, currentGame: I.value }, null, 8, ["currentInfo", "winNum", "gameName", "currentGame"]),
                  L(co, { currentInfo: f.value, currentGame: I.value, VoiceType: $.value, typeid: w.value, onBetting: Je, onChangeBettingP: Qe, "betting-api-fun": c(Pa) }, null, 8, ["currentInfo", "currentGame", "VoiceType", "typeid", "betting-api-fun"]),
                  L(qs, { record: d.value, onChangeC: se[1] || (se[1] = ee => (d.value = ee)) }, null, 8, ["record"]),
                  (n(), Z(ns, null, [(n(), Z(ft(s[d.value]), { ref_key: "RecordComponent", ref: o, typeid: w.value, ApiFun: c(Ln), listApi: c(ja), EmerdApi: c(Da), goPathName: "AllLotteryGames-BettingRecordWin", onChangefive: et }, null, 40, ["typeid", "ApiFun", "listApi", "EmerdApi"]))], 1024)),
                  L(Mt, { show: y.value, onConfirm: se[2] || (se[2] = ee => P("/login")) }, { content: A(() => [e("div", null, t(T.value), 1)]), _: 1 }, 8, ["show"]),
                  L(ro, { ref_key: "WinningTipsRef", ref: u }, null, 512),
                  G.value ? (n(), Z(os, { key: 0 })) : B("", !0),
                  L(Ks),
               ])
            );
         };
      },
   });
const zI = H(HI, [["__scopeId", "data-v-40958d9a"]]),
   RV = Object.freeze(Object.defineProperty({ __proto__: null, default: zI }, Symbol.toStringTag, { value: "Module" })),
   EI = l => (ye("data-v-04b8bdc8"), (l = l()), fe(), l),
   FI = { class: "TimeLeft__C" },
   jI = { class: "TimeLeft__C-l1" },
   UI = { class: "TimeLeft__C-l1-l" },
   qI = { class: "TimeLeft__C-l1-no" },
   KI = { class: "TimeLeft__C-l2" },
   ZI = { class: "TimeLeft__C-time" },
   XI = EI(() => e("div", { notime: "" }, ":", -1)),
   JI = { class: "TimeLeft__C-l3" },
   YI = V({
      __name: "TimeLeft",
      props: { currentInfo: { type: Object, default: () => ({ gameNo: "loading", currentTime: "", beginTime: "", passTime: 180, time1: 0, time2: 0, time3: 0, time4: 0 }) }, settled: { type: Object, default: () => ({}) }, gameName: { type: String, default: "" }, currentGame: { type: Object, default: () => ({}) } },
      setup(l) {
         const s = l,
            o = k(!1),
            u = ue(),
            v = q(() => {
               const { blockID: r } = s.settled;
               if (!r) return [0, 0, 0, 0, 0];
               let g = r.substring(r.length - 5).toUpperCase();
               return /\d/.test(g) ? [...g] : [...r.substring(r.length - 5, r.length - 10).toUpperCase()];
            }),
            p = q(() => {
               var r;
               return (r = s.settled) == null ? void 0 : r.number;
            }),
            d = () => {
               let r = "https://tronscan.org";
               u.push({ name: "AllLotteryGames-WinTrxIframe", query: { url: r } });
            },
            i = Ut(),
            _ = () => {
               (o.value = !0), i.getTrxRule(s.currentGame.typeID);
            };
         return (r, g) => (
            n(),
            a("div", FI, [
               e("div", jI, [e("div", UI, [e("div", qI, t(r.$t("winTrxNum")), 1), e("div", { class: "TimeLeft__C-l1-tip", onClick: _ }, t(r.$t("winTrxIndicate")), 1)]), e("div", { class: "TimeLeft__C-l1-r", onClick: d }, t(r.$t("winTrxPub")), 1)]),
               e("div", KI, [e("div", null, t(s.currentInfo.gameNo), 1), e("div", ZI, [e("span", null, t(r.$t("winTrxTime")), 1), e("div", null, t(l.currentInfo.time1), 1), e("div", null, t(l.currentInfo.time2), 1), XI, e("div", null, t(l.currentInfo.time3), 1), e("div", null, t(l.currentInfo.time4), 1)])]),
               e("div", JI, [
                  (n(!0),
                  a(
                     N,
                     null,
                     D(v.value, (m, $) => (n(), a(N, { key: $ }, [p.value == m ? (n(), a("p", { key: 0, class: M(["num" + m, p.value == m && "prize" + m]) }, null, 2)) : (n(), a("div", { key: 1, class: M(["num" + m, p.value == m && "prize" + m]) }, null, 2))], 64))),
                     128,
                  )),
               ]),
               L(Us, { howPlayShow: o.value, gamePresentation: l.currentGame.gamePresentation, onClose: g[0] || (g[0] = m => (o.value = !1)) }, null, 8, ["howPlayShow", "gamePresentation"]),
            ])
         );
      },
   });
const QI = H(YI, [["__scopeId", "data-v-04b8bdc8"]]),
   eS = { class: "GameRecord__C" },
   tS = { class: "GameRecord__C-head" },
   sS = { class: "GameRecord__C-body" },
   nS = { class: "Binquire" },
   aS = { class: "numberC" },
   oS = { key: 1, class: "GameRecord__C-body-empty" },
   lS = { key: 0, class: "GameRecord__C-foot" },
   iS = { class: "GameRecord__C-foot-page" },
   cS = V({
      __name: "GameRecord",
      props: { typeid: {} },
      setup(l, { expose: s }) {
         const o = l,
            u = k([]),
            v = k(4),
            p = k(10),
            d = k(1),
            i = ue(),
            _ = () => {
               d.value--, g();
            },
            r = () => {
               d.value++, g();
            },
            g = async ($ = !1) => {
               if (o.typeid == null) return;
               $ && (d.value = 1);
               const [y, C] = await ct(Ua({ pageSize: p.value, pageNo: d.value, typeId: o.typeid }));
               if (!C) return;
               let f = C == null ? void 0 : C.data.date.serviceTime;
               (u.value = C.data.gameslist.map(b => {
                  if (b.blockID) {
                     var T = b.blockID.length,
                        h = b.blockID.substring(T - 4, T);
                     b.blockName = "**" + h;
                  }
                  if (b.issueNumber) {
                     var w = b.issueNumber.substring(0, 3),
                        I = b.issueNumber.length,
                        x = b.issueNumber.substring(I - 4, I);
                     b.issue = w + "**" + x;
                  }
                  if (b.blockTime) {
                     let S = f.split(" "),
                        G = b.blockTime.split(" ");
                     (b.day = S[0].substring(8, 10) == G[0].substring(8, 10)), (b.time = G[1]);
                  }
                  return b;
               })),
                  (v.value = C.totalPage);
            },
            m = $ => {
               let y = `https://tronscan.org/#/block/${$}`;
               i.push({ name: "AllLotteryGames-WinTrxIframe", query: { url: y } });
            };
         return (
            s({ getData: g }),
            kt(() => {
               g();
            }),
            ($, y) => {
               const C = U("van-col"),
                  f = U("van-row"),
                  b = U("van-icon");
               return (
                  n(),
                  a("div", eS, [
                     e("div", tS, [L(f, null, { default: A(() => [L(C, { span: "6" }, { default: A(() => [E(t($.$t("betSerial")), 1)]), _: 1 }), L(C, { span: "4" }, { default: A(() => [E(t($.$t("winTrxDesc1")), 1)]), _: 1 }), L(C, { span: "5" }, { default: A(() => [E(t($.$t("winTrxDesc2")), 1)]), _: 1 }), L(C, { span: "4" }, { default: A(() => [E(t($.$t("winTrxDesc3")), 1)]), _: 1 }), L(C, { span: "5" }, { default: A(() => [E(t($.$t("winTrxDesc4")), 1)]), _: 1 })]), _: 1 })]),
                     e("div", sS, [
                        u.value.length
                           ? (n(!0),
                             a(
                                N,
                                { key: 0 },
                                D(u.value, (T, h) => (n(), Z(f, { key: h }, { default: A(() => [L(C, { span: "6" }, { default: A(() => [E(t(T.issue), 1)]), _: 2 }, 1024), L(C, { span: "4", onClick: w => m(T.blockNumber) }, { default: A(() => [E(t(T.blockNumber) + " ", 1), te(e("div", nS, null, 512), [[He, T.day]])]), _: 2 }, 1032, ["onClick"]), L(C, { span: "5" }, { default: A(() => [E(t(T.time), 1)]), _: 2 }, 1024), L(C, { span: "4" }, { default: A(() => [E(t(T.blockName), 1)]), _: 2 }, 1024), L(C, { span: "5" }, { default: A(() => [e("div", aS, [e("div", { class: M(["number", ["num" + T.number]]) }, t(T.number), 3), e("div", { class: M([Number(T.number) > 4 ? "big" : "small"]) }, t(Number(T.number) > 4 ? "B" : "S"), 3)])]), _: 2 }, 1024)]), _: 2 }, 1024))),
                                128,
                             ))
                           : (n(), a("div", oS, [L(gt)])),
                     ]),
                     u.value.length ? (n(), a("div", lS, [e("div", { class: M(["GameRecord__C-foot-previous", { disabled: d.value <= 1 }]), onClick: _ }, [L(b, { name: "arrow-left", class: "GameRecord__C-icon", size: "20" })], 2), e("div", iS, t(d.value) + "/" + t(v.value), 1), e("div", { class: M(["GameRecord__C-foot-next", { disabled: d.value >= v.value }]), onClick: r }, [L(b, { name: "arrow", class: "GameRecord__C-icon", size: "20" })], 2)])) : B("", !0),
                  ])
               );
            }
         );
      },
   });
const uS = H(cS, [["__scopeId", "data-v-a9b34bec"]]),
   rS = l => (ye("data-v-3f742540"), (l = l()), fe(), l),
   dS = { class: "WinTrx__C" },
   _S = rS(() => e("div", { class: "arrow-left" }, null, -1)),
   vS = { class: "WinTrx__C-head-more" },
   pS = V({
      __name: "index",
      setup(l) {
         var Qe, et;
         const s = { GameRecord: uS, Trend: uo, MyGameRecord: Mn },
            o = k(),
            u = k(),
            v = k(),
            p = k(!1),
            d = k("GameRecord"),
            i = ue(),
            _ = Ut(),
            r = _.getTrx,
            g = { 13: 0, 14: 1, 15: 2, 16: 3 },
            m = k((Qe = i.currentRoute.value.query) != null && Qe.typeId ? g[(et = i.currentRoute.value.query) == null ? void 0 : et.typeId] : 0),
            $ = k(localStorage.getItem("volumeShow") || "1"),
            y = k(!1),
            C = k(null),
            f = k(),
            b = k({ gameNo: "loading", currentTime: "", beginTime: "", passTime: 180, time1: 0, time2: 0, time3: 0, time4: 0 }),
            T = k(10),
            h = k(""),
            w = k(!1),
            I = k(null),
            x = q(() => r[m.value] || {});
         he(() => {
            O();
         }),
            jt(() => {
               clearInterval(C.value),
                  ce.value.forEach(we => {
                     clearInterval(we);
                  }),
                  ge.value && clearTimeout(ge.value);
            }),
            Ve(
               () => rt().visibility,
               we => {
                  we === 0 ? clearInterval(C.value) : (O(), P(m.value));
               },
            );
         const S = () => {
               sessionStorage.setItem("clickedGameType", "lottery"), i.push({ path: "/" });
            },
            G = () => {
               $.value == "1" ? ($.value = "2") : ($.value = "1"), localStorage.setItem("volumeShow", $.value);
            },
            R = we => {
               i.push({ name: we });
            },
            O = () => {
               I.value == null && P(m.value);
            },
            P = we => {
               _.getTrxData(),
                  (m.value = we),
                  (I.value = r[we].typeID),
                  W(I.value),
                  lt(() => {
                     o.value.getData(I.value);
                  });
            },
            W = async we => {
               const [xe, Le] = await ct(li({ typeId: we }));
               (b.value.gameNo = Le.predraw.issueNumber), (b.value.currentTime = Le.predraw.serviceTime.replace(/-/g, "/")), (b.value.beginTime = Le.predraw.startTime.replace(/-/g, "/")), (f.value = Le.settled), J();
            },
            J = () => {
               if (!r.length) return;
               var we = new Date(b.value.currentTime).getTime(),
                  xe = new Date(b.value.beginTime).getTime();
               let Le = (we - xe) / 1e3,
                  Ie = r[m.value];
               if ((Le > Ie.intervalM * 60 && (Le = Ie.intervalM * 60), (b.value.passTime = Ie.intervalM * 60 - Le), b.value.passTime < 0)) {
                  (h.value = "An error occurred, please contact customer service。The game time is " + Ie.intervalM + " minutes,start time is " + b.value.beginTime + ",current time is" + b.value.currentTime + "!"), (y.value = !0);
                  return;
               }
               le();
            },
            le = () => {
               clearInterval(C.value),
                  ie(!1),
                  (C.value = setInterval(function () {
                     ie();
                  }, 1e3));
            },
            ie = (we = !0) => {
               if ((b.value.passTime <= T.value && (w.value = !1), $.value == "1" && (b.value.passTime <= T.value && b.value.passTime > 1 ? ne(1) : b.value.passTime == 1 && ne(2)), b.value.passTime > 0)) {
                  let xe = b.value.passTime;
                  (b.value.time2 = Math.floor(xe / 60)), (b.value.time3 = Math.floor((xe % 60) / 10)), (b.value.time4 = Math.floor(xe % 10)), b.value.passTime--;
               } else clearInterval(C.value), we && z();
            },
            ne = (we = 1) => {
               const xe = document.getElementById(`voice${we}`);
               xe && xe.play();
            },
            z = () => {
               W(I.value), v.value.getWinsUserAmount(!1), o.value.getData(!0);
            },
            X = k({}),
            ce = k([]),
            Ne = we => {
               if ((v.value.getWinsUserAmount(!1), o.value.getData(), X.value[we])) return;
               X.value[we] = !0;
               const { time1: xe, time2: Le, time3: Ie, time4: re } = b.value,
                  se = (xe * 10 * 60 + Le * 60 + Ie * 10 + re) * 1e3;
               ce.value[x.value.intervalM] = setTimeout(() => {
                  Je(we);
               }, se);
            },
            Se = we => {
               p.value = we;
            },
            ge = k(null),
            Je = async we => {
               const xe = await de(ii({ issueNumber: [we] }));
               if (xe) {
                  const Le = xe.data.filter(Ie => Ie.state != 2);
                  if (!Le.length) {
                     ge.value = setTimeout(() => {
                        Je(we);
                     }, 2e3);
                     return;
                  }
                  u.value.showMark(Le), delete X.value[we];
               }
            };
         return (we, xe) => {
            const Le = U("NavBar");
            return (
               n(),
               a("div", dS, [
                  L(Le, { "left-arrow": "", onClickLeft: S, "background-color": "linear-gradient(90deg, #8deef5 0%, #259aa3 100%)", headLogo: !0 }, { left: A(() => [_S]), right: A(() => [e("div", vS, [e("div", { onClick: xe[0] || (xe[0] = Ie => R("CustomerService")) }), e("div", { class: M({ disableVoice: $.value == "2" }), onClick: G }, null, 2)])]), _: 1 }),
                  L(Fs, { ref_key: "WallteRef", ref: v }, null, 512),
                  L(Yt, { key: "winx" }),
                  L(js, { gameList: c(r), currentGameIndex: m.value, onChangeGame: P }, null, 8, ["gameList", "currentGameIndex"]),
                  L(QI, { currentInfo: b.value, gameName: x.value.typeName, currentGame: x.value, settled: f.value }, null, 8, ["currentInfo", "gameName", "currentGame", "settled"]),
                  L(co, { currentInfo: b.value, ProhibitBuyTime: T.value, currentGame: x.value, VoiceType: $.value, typeid: I.value, onBetting: Ne, onChangeBettingP: Se, "betting-api-fun": c(ci) }, null, 8, ["currentInfo", "ProhibitBuyTime", "currentGame", "VoiceType", "typeid", "betting-api-fun"]),
                  L(qs, { record: d.value, onChangeC: xe[1] || (xe[1] = Ie => (d.value = Ie)) }, null, 8, ["record"]),
                  (n(), Z(ns, null, [(n(), Z(ft(s[d.value]), { ref_key: "RecordComponent", ref: o, typeid: I.value, ApiFun: c(In), listApi: c(Ua), EmerdApi: c(Va), goPathName: "AllLotteryGames-BettingRecordWinTrx" }, null, 8, ["typeid", "ApiFun", "listApi", "EmerdApi"]))], 1024)),
                  L(Mt, { show: y.value, onConfirm: xe[2] || (xe[2] = Ie => R("/login")) }, { content: A(() => [e("div", null, t(h.value), 1)]), _: 1 }, 8, ["show"]),
                  L(ro, { ref_key: "WinningTipsRef", ref: u }, null, 512),
                  L(Ks),
               ])
            );
         };
      },
   });
const mS = H(pS, [["__scopeId", "data-v-3f742540"]]),
   MV = Object.freeze(Object.defineProperty({ __proto__: null, default: mS }, Symbol.toStringTag, { value: "Module" })),
   gS = { class: "WinTrxIfram__C" },
   hS = ["src"],
   yS = V({
      __name: "index",
      setup(l) {
         const s = ue(),
            o = q(() => String(s.currentRoute.value.query.url)),
            u = () => {
               s.go(-1);
            };
         return (v, p) => {
            const d = U("NavBar");
            return n(), a("div", gS, [L(d, { "left-arrow": "", onClickLeft: u, backgroundColor: "linear-gradient(90deg, #A4EBF3 0%, rgb(217, 179, 140) 100%)", title: "TRX" }), e("iframe", { class: "iframe", sandbox: "allow-same-origin allow-popups allow-scripts", frameborder: "0", marginwidth: "0", marginheight: "0", vspace: "0", hspace: "0", allowtransparency: "true", allowfullscreen: !0, ref: "iframe", src: o.value }, null, 8, hS)]);
         };
      },
   });
const fS = H(yS, [["__scopeId", "data-v-1931b3f4"]]),
   DV = Object.freeze(Object.defineProperty({ __proto__: null, default: fS }, Symbol.toStringTag, { value: "Module" })),
   bS = { class: "Xoso" },
   $S = { style: { "background-color": "#f7f8ff" } },
   CS = { key: 1, class: "Xoso-page" },
   kS = { class: "title" },
   TS = { class: "list" },
   wS = ["onClick"],
   LS = { key: 0 },
   IS = ["src"],
   SS = { key: 1, class: "info" },
   GS = { class: "issue" },
   xS = ["src"],
   BS = { class: "time" },
   NS = V({
      __name: "index",
      setup(l) {
         const { t: s } = _e(),
            o = ue();
         let u = o.currentRoute.value.query.id;
         const v = q(() => (u == "5" ? "XOSO" : u == "6" ? s("fXosoTitle") : "XOSO")),
            { setLoading: p } = Jt(),
            d = () => {
               o.go(-1);
            },
            i = (y, C, f, b) => {
               (C.day = f), (C.id = u), (C.areId = b), o.push({ name: y, query: C });
            },
            _ = k(null),
            r = k(0),
            g = y => {
               sessionStorage.setItem("xosoList", JSON.stringify(m.value[y.index]));
            },
            m = k([]);
         return (
            (async () => {
               p(!0);
               let y;
               u == "5" ? (y = await de(Ha())) : u == "6" && (y = await de(za())), y && ((m.value = y.data), sessionStorage.setItem("xosoList", JSON.stringify(y.data[0]))), p(!1);
            })(),
            (y, C) => {
               const f = U("NavBar"),
                  b = U("van-sticky");
               return (
                  n(),
                  a("div", bS, [
                     L(f, { "left-arrow": "", onClickLeft: d, "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)", title: v.value }, null, 8, ["title"]),
                     c(u) == "5" ? (n(), Z(b, { key: 0, "offset-top": 46, container: _.value, class: "bet-container-sticky" }, { default: A(() => [e("div", $S, [L(Xt, { list: m.value, active: r.value, "onUpdate:active": C[0] || (C[0] = T => (r.value = T)), tabClassName: "tabs", onOnClickTab: g, activeClassName: "tab_active", ref: "tabRefs", tabItemClassName: "funtab_item" }, { default: A(({ item: T, index: h }) => [e("div", { class: M(["tab_item", { tab_active: h === r.value }]) }, [e("span", null, t(y.$t(T.week)), 1), e("p", null, t(T.day), 1)], 2)]), _: 1 }, 8, ["list", "active"])])]), _: 1 }, 8, ["container"])) : B("", !0),
                     m.value[r.value]
                        ? (n(),
                          a("div", CS, [
                             (n(!0),
                             a(
                                N,
                                null,
                                D(
                                   m.value[r.value].areInfos,
                                   (T, h) => (
                                      n(),
                                      a("div", { class: "Xoso-page-box", key: h }, [
                                         e("div", kS, t(y.$t("code" + T.areNameCode)), 1),
                                         e("div", TS, [
                                            (n(!0),
                                            a(
                                               N,
                                               null,
                                               D(
                                                  T.areIssueNos,
                                                  (w, I) => (
                                                     n(),
                                                     a(
                                                        "div",
                                                        { class: "item", key: I, onClick: x => i("AllLotteryGames-NewVietnam", w, m.value[r.value].day, T.areId) },
                                                        [
                                                           w.status == 1 || w.status == 2 || w.status == 3 ? (n(), a("h4", LS, [E(t(y.$t("code" + w.nameCode)) + " ", 1), e("img", { class: "img", src: c(pe)("home/AllLotteryGames/NewVietnam", "xosoCity"), alt: "" }, null, 8, IS)])) : B("", !0),
                                                           w.status == 1 || w.status == 2 || w.status == 3
                                                              ? (n(),
                                                                a("div", SS, [
                                                                   e("div", GS, [e("img", { class: "img", src: c(pe)("home/AllLotteryGames/NewVietnam", "ticketstar"), alt: "" }, null, 8, xS), E(t(w.issueNo), 1)]),
                                                                   e("p", null, t(y.$t("xosoTxt72")), 1),
                                                                   e("div", BS, [
                                                                      (n(!0),
                                                                      a(
                                                                         N,
                                                                         null,
                                                                         D(m.value[r.value].day.split("-"), (x, S) => (n(), a("div", { key: S }, t(x), 1))),
                                                                         128,
                                                                      )),
                                                                   ]),
                                                                ]))
                                                              : B("", !0),
                                                        ],
                                                        8,
                                                        wS,
                                                     )
                                                  ),
                                               ),
                                               128,
                                            )),
                                         ]),
                                      ])
                                   ),
                                ),
                                128,
                             )),
                          ]))
                        : B("", !0),
                  ])
               );
            }
         );
      },
   });
const RS = H(NS, [["__scopeId", "data-v-9cb870dc"]]),
   AV = Object.freeze(Object.defineProperty({ __proto__: null, default: RS }, Symbol.toStringTag, { value: "Module" })),
   MS = { class: "TeamReport__C" },
   DS = { class: "TeamReport__C-head" },
   AS = { class: "TeamReport__C-head-fixed" },
   PS = { class: "TeamReport__C-head-line1" },
   OS = { key: 0, class: "default" },
   VS = { key: 1, class: "default" },
   WS = { class: "TeamReport__C-head-line2" },
   HS = { key: 0, class: "default" },
   zS = { key: 1, class: "default" },
   ES = { class: "TeamReport__C-list" },
   FS = V({
      __name: "index",
      setup(l) {
         const { t: s } = _e(),
            o = ue(),
            u = Cn(),
            v = () => {
               o.go(-1);
            },
            p = k([]),
            d = k([]),
            i = { text: "nameCode", value: "value" },
            _ = k(),
            r = k(!1),
            g = k(!1),
            m = ze({ bettingParentType: "", areId: "", startDate: "", endDate: "" }),
            $ = k(),
            y = k(),
            C = ({ selectedOptions: I }) => {
               (m.bettingParentType = Number(I[0].value)), (y.value = I[0].nameCode), $.value.getData(), (r.value = !1);
            },
            f = k(),
            b = ({ selectedOptions: I }) => {
               (m.areId = Number(I[0].value)), (f.value = I[0].nameCode), $.value.getData(), (g.value = !1);
            };
         async function T() {
            let I = _.value.endDateValue !== "" ? `${_.value.endDateValue} 23:59:59` : "";
            (m.startDate = `${Ke(_.value.startDateValue).format("YYYY-MM-DD")} 23:59:59`), (m.endDate = `${Ke(I).format("YYYY-MM-DD")} 23:59:59`), $.value.getData();
         }
         const h = async () => {
               const I = Number(u.query.areId) | 0,
                  x = await de(ui({ areId: I }));
               (d.value = w(x.data.categorys)), d.value.unshift({ value: "", nameCode: s("all") }), (p.value = w(x.data.ares)), p.value.unshift({ value: "", nameCode: s("all") });
            },
            w = I =>
               I.map(S => {
                  let G = { value: "", nameCode: "" };
                  return (G.value = S.value), (G.nameCode = s("code" + S.nameCode)), G;
               });
         return (
            h(),
            (I, x) => {
               const S = U("NavBar"),
                  G = U("van-icon"),
                  R = U("van-picker"),
                  O = U("van-popup");
               return (
                  n(),
                  a("div", MS, [
                     L(S, { "left-arrow": "", onClickLeft: v, "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)", title: I.$t("xosoTxt73") }, null, 8, ["title"]),
                     e("div", DS, [e("div", AS, [e("div", PS, [e("div", { onClick: x[0] || (x[0] = P => (g.value = !0)) }, [f.value ? (n(), a("span", OS, t(f.value), 1)) : (n(), a("span", VS, t(c(s)("all")), 1)), L(G, { name: "arrow-down" })])]), e("div", WS, [e("div", { onClick: x[1] || (x[1] = P => (r.value = !0)) }, [y.value ? (n(), a("span", HS, t(y.value), 1)) : (n(), a("span", zS, t(c(s)("all")), 1)), L(G, { name: "arrow-down" })]), e("div", null, [L(Jc, { ref_key: "calendar", ref: _, onConfirm: T }, null, 512)])])])]),
                     e("div", ES, [(n(), Z(ns, null, [L(An, { ref_key: "RecordComponent", ref: $, parmas: m, ApiFun: c(Ea), hasHead: !1, gVSs: "1" }, null, 8, ["parmas", "ApiFun"])], 1024))]),
                     L(O, { show: r.value, "onUpdate:show": x[3] || (x[3] = P => (r.value = P)), round: "", position: "bottom" }, { default: A(() => [L(R, { "columns-field-names": i, columns: d.value, onCancel: x[2] || (x[2] = P => (r.value = !1)), onConfirm: C }, null, 8, ["columns"])]), _: 1 }, 8, ["show"]),
                     L(O, { show: g.value, "onUpdate:show": x[5] || (x[5] = P => (g.value = P)), round: "", position: "bottom" }, { default: A(() => [L(R, { "columns-field-names": i, columns: p.value, onCancel: x[4] || (x[4] = P => (g.value = !1)), onConfirm: b }, null, 8, ["columns"])]), _: 1 }, 8, ["show"]),
                  ])
               );
            }
         );
      },
   });
const jS = H(FS, [["__scopeId", "data-v-b99be5fe"]]),
   PV = Object.freeze(Object.defineProperty({ __proto__: null, default: jS }, Symbol.toStringTag, { value: "Module" })),
   US = { class: "TeamReport__C" },
   qS = { style: { "background-color": "#f7f8ff" } },
   KS = { class: "TeamReport__C-list" },
   ZS = V({
      __name: "index",
      setup(l) {
         const s = ue(),
            o = () => {
               s.go(-1);
            },
            u = k(0),
            v = k([]),
            p = k();
         let d = s.currentRoute.value.query.areId,
            i = s.currentRoute.value.query.typeId;
         const _ = ze({ bettingParentType: "", startDate: "", endDate: "", areId: "", typeId: "" }),
            r = m => {
               (_.areId = m.item.areId), (_.typeId = m.item.typeId), p.value.getData();
            };
         async function g() {
            let m = JSON.parse(sessionStorage.getItem("xosoList") || ""),
               $ = [];
            for (let y = 0; y < m.areInfos.length; y++) for (let C = 0; C < m.areInfos[y].areIssueNos.length; C++) m.areInfos[y].areIssueNos[C].type == 2 && $.push({ areId: m.areInfos[y].areId, typeId: m.areInfos[y].areIssueNos[C].code, nameCode: m.areInfos[y].areIssueNos[C].nameCode });
            (v.value = $), v.value.length > 0 && (u.value = v.value.findIndex(y => y.areId == d && y.typeId == i));
         }
         return (
            g(),
            (m, $) => {
               const y = U("NavBar"),
                  C = U("van-sticky");
               return n(), a("div", US, [L(y, { "left-arrow": "", onClickLeft: o, "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)", title: m.$t("fXosoTitle") }, null, 8, ["title"]), L(C, { "offset-top": 46, class: "bet-container-sticky" }, { default: A(() => [e("div", qS, [L(Xt, { list: v.value, active: u.value, "onUpdate:active": $[0] || ($[0] = f => (u.value = f)), tabClassName: "tabs", activeClassName: "tab_active", ref: "tabRefs", tabItemClassName: "funtab_item", onOnClickTab: r }, { default: A(({ item: f, index: b }) => [e("div", { class: M(["tab_item", { tab_active: b === u.value }]) }, [e("p", null, t(m.$t(`code${f.nameCode}`)), 1)], 2)]), _: 1 }, 8, ["list", "active"])])]), _: 1 }), e("div", KS, [(n(), Z(ns, null, [L(An, { ref_key: "RecordComponent", ref: p, parmas: _, ApiFun: c(Fa), hasHead: !1, gVSs: "2" }, null, 8, ["parmas", "ApiFun"])], 1024))])]);
            }
         );
      },
   });
const XS = H(ZS, [["__scopeId", "data-v-50e7dbfa"]]),
   OV = Object.freeze(Object.defineProperty({ __proto__: null, default: XS }, Symbol.toStringTag, { value: "Module" })),
   JS = { class: "messageDetail__container content" },
   YS = { class: "messageDetail__container-wrapper" },
   QS = { class: "messageDetail__container-title" },
   eG = { class: "messageDetail__container-content" },
   tG = V({
      __name: "index",
      setup(l) {
         const { t: s } = _e(),
            o = ri(),
            u = ue(),
            v = k({}),
            p = Nt(() => Rt(() => import("./messageIconNoDot-dc6dd26c.js"), ["assets/js/messageIconNoDot-dc6dd26c.js", "assets/js/page-activity-6d456111.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/native/index-3d731397.js", "assets/js/en-53bf8069.js", "assets/js/rus-ecb14220.js", "assets/js/vi-60d1c3eb.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-38f5b166.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-dbcb2394.js", "assets/js/ar-78aaffbf.js", "assets/css/page-activity-9da3f4e3.css"])),
            d = Nt(() => Rt(() => import("./messageGarbage-8635d487.js"), ["assets/js/messageGarbage-8635d487.js", "assets/js/page-activity-6d456111.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/native/index-3d731397.js", "assets/js/en-53bf8069.js", "assets/js/rus-ecb14220.js", "assets/js/vi-60d1c3eb.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-38f5b166.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-dbcb2394.js", "assets/js/ar-78aaffbf.js", "assets/css/page-activity-9da3f4e3.css"]));
         function i() {
            u.back();
         }
         function _() {
            Ca({ title: s("warning"), message: s("warningTxt1") }).then(() => {
               $n({ messageID: v.value.messageID, state: 2 }), u.back();
            });
         }
         return (
            he(async () => {
               (v.value = o.getMessagesDetail), v.value.state !== 1 && (await $n({ messageID: v.value.messageID, state: 1 }), o.setMessageDetail({ ...v.value, state: 1 }));
            }),
            (r, g) => {
               const m = U("NavBar");
               return n(), a("div", JS, [L(m, { "left-arrow": "", onClickLeft: i, title: c(s)("notificationDetails") }, null, 8, ["title"]), e("div", YS, [e("div", QS, [e("div", null, [e("div", null, [(n(), Z(ft(c(p)))), e("span", null, t(v.value.title), 1)]), e("span", null, t(v.value.addTime), 1)]), (n(), Z(ft(c(d)), { onClick: _ }))]), e("div", eG, t(v.value.messages), 1)])]);
            }
         );
      },
   });
const sG = H(tG, [["__scopeId", "data-v-16397174"]]),
   VV = Object.freeze(Object.defineProperty({ __proto__: null, default: sG }, Symbol.toStringTag, { value: "Module" })),
   nG = { class: "dialog__container", role: "dialog", tabindex: "0" },
   aG = { class: "dialog__container-img" },
   oG = { alt: "" },
   lG = { class: "dialog__container-title" },
   iG = { class: "dialog__container-content" },
   cG = { class: "dialog__container-footer" },
   uG = V({
      __name: "HomeDialog",
      props: { show: { type: Boolean, default: !1 }, title: { type: String, default: "" }, confirmText: { type: String, default: "comfirm" }, showCancelBtn: { type: Boolean, default: !0 }, cancelText: { type: String, default: "cancel" }, clickOutSide: { type: Boolean, default: !1 }, pathname: { type: String, default: "main/Laundry" }, picname: { type: String, default: "superjackpotHome" } },
      emits: ["update:show", "confirm"],
      setup(l, { emit: s }) {
         const o = l,
            { t: u } = _e();
         Ve(
            () => o.show,
            d => {
               d ? window.addEventListener("touchmove", p, { passive: !1 }) : window.removeEventListener("touchmove", p);
            },
         );
         function v(d) {
            o.clickOutSide && s("update:show", !1);
         }
         const p = d => {
            o.show && d.preventDefault();
         };
         return (d, i) => {
            const _ = Te("lazy");
            return (
               n(),
               a(
                  "div",
                  { class: M(["dialog", { active: l.show, inactive: !l.show }]) },
                  [
                     e("div", nG, [
                        e("div", aG, [$t(d.$slots, "header", {}, () => [te(e("img", oG, null, 512), [[_, c(pe)(l.pathname, l.picname)]])], !0)]),
                        e("div", lG, [$t(d.$slots, "title", {}, () => [e("h1", null, t(c(u)(l.title)), 1)], !0)]),
                        e("div", iG, [$t(d.$slots, "content", {}, void 0, !0)]),
                        e("div", cG, [
                           $t(
                              d.$slots,
                              "footer",
                              {},
                              () => [
                                 l.showCancelBtn
                                    ? (n(),
                                      a(
                                         "button",
                                         {
                                            key: 0,
                                            onClick:
                                               i[0] ||
                                               (i[0] = () => {
                                                  s("update:show", !1);
                                               }),
                                         },
                                         t(d.$t(l.cancelText)),
                                         1,
                                      ))
                                    : B("", !0),
                                 e(
                                    "button",
                                    {
                                       onClick:
                                          i[1] ||
                                          (i[1] = () => {
                                             s("confirm");
                                          }),
                                    },
                                    t(d.$t(l.confirmText)),
                                    1,
                                 ),
                              ],
                              !0,
                           ),
                        ]),
                     ]),
                     e("div", { class: "dialog__outside", onClick: v }),
                  ],
                  2,
               )
            );
         };
      },
   });
const ws = H(uG, [["__scopeId", "data-v-874c44db"]]),
   On = l => (ye("data-v-2ff9e8bb"), (l = l()), fe(), l),
   rG = { class: "luckyWinners__container" },
   dG = { class: "title" },
   _G = On(() => e("div", { class: "driver" }, null, -1)),
   vG = { class: "info_item" },
   pG = On(() => e("div", { class: "item_bg" }, null, -1)),
   mG = ["data-img"],
   gG = { class: "nick_name" },
   hG = On(() => e("div", { class: "fenge" }, null, -1)),
   yG = { class: "amount" },
   fG = { class: "tip" },
   bG = V({
      __name: "index",
      setup(l) {
         const { homeState: s, getWinInfoDetail: o } = Ue(),
            u = k(null);
         return (
            he(async () => {
               await o(),
                  wa(wrapperRef.value),
                  s.winInfoList.length > 0 &&
                     (u.value = setInterval(async () => {
                        s.winInfoList.unshift(s.winInfoList.pop());
                     }, 3e3));
            }),
            xs(() => {
               clearInterval(u.value);
            }),
            (v, p) => {
               const d = U("SwipeItem"),
                  i = U("Swipe"),
                  _ = Te("lazy");
               return (
                  n(),
                  a("div", rG, [
                     e("div", dG, t(v.$t("winningDetal")), 1),
                     _G,
                     L(
                        i,
                        { class: "my-swipe", ref: "swipeRef", autoplay: "3000", "show-indicators": !1 },
                        {
                           default: A(() => [
                              (n(!0),
                              a(
                                 N,
                                 null,
                                 D(
                                    v.allList,
                                    (r, g) => (
                                       n(),
                                       Z(
                                          d,
                                          { key: g },
                                          {
                                             default: A(() => [
                                                (n(!0),
                                                a(
                                                   N,
                                                   null,
                                                   D(r, m => (n(), a("div", vG, [pG, te(e("img", { class: "avatar_img", "data-img": c(pe)("home", "avatar") }, null, 8, mG), [[_, r.userPhoto]]), e("div", gG, t(c(Es)(m.nickName)), 1), hG, e("div", yG, t(c(Be)(m.amount || 0)), 1), e("div", fG, t(v.$t("winningAmount")), 1)]))),
                                                   256,
                                                )),
                                             ]),
                                             _: 2,
                                          },
                                          1024,
                                       )
                                    ),
                                 ),
                                 128,
                              )),
                           ]),
                           _: 1,
                        },
                        512,
                     ),
                  ])
               );
            }
         );
      },
   });
const en = H(bG, [["__scopeId", "data-v-2ff9e8bb"]]),
   $G = l => (ye("data-v-730f8d27"), (l = l()), fe(), l),
   CG = { class: "dailyProfitRank" },
   kG = { class: "title" },
   TG = $G(() => e("div", { class: "driver" }, null, -1)),
   wG = { class: "rank_list" },
   LG = { class: "left" },
   IG = ["data-img"],
   SG = ["data-img"],
   GG = { class: "info" },
   xG = { class: "tit" },
   BG = { class: "amount" },
   NG = V({
      __name: "index",
      setup(l) {
         _e();
         const { homeState: s } = Ue();
         return (
            Ve(
               () => s.rankList,
               o => {
                  getTopThree.value.splice(0, o.length, ...o.sort((u, v) => v.price - u.price).slice(0, 3)), theRest.value.splice(0, o.length, ...o.sort((u, v) => v.price - u.price).slice(3, 10));
               },
            ),
            (o, u) => {
               const v = Te("lazy");
               return (
                  n(),
                  a("div", CG, [
                     e("div", kG, t(o.$t("earningsRankingToday")), 1),
                     TG,
                     e("div", wG, [
                        (n(!0),
                        a(
                           N,
                           null,
                           D(c(s).rankList, (p, d) => (n(), a("div", { class: "daily_item", key: p.nickName }, [e("div", LG, [e("div", { class: M(["avatar_img", d < 3 ? `avatar_img${d + 1}` : ""]) }, [p.userPhoto.length > 2 ? te((n(), a("img", { key: 0, "data-img": c(pe)("home", "avatar") }, null, 8, IG)), [[v, p.userPhoto]]) : te((n(), a("img", { key: 1, "data-img": c(pe)("home", "avatar") }, null, 8, SG)), [[v, c(pe)("main/Avatar", p.userPhoto)]])], 2), e("div", GG, [e("div", xG, t(c(Es)(p.nickName)), 1), e("div", { class: M(["ranking", d < 3 ? `ranking${d + 1}` : ""]) }, "NO." + t(d + 1), 3)])]), e("div", BG, t(c(Be)(p.price)), 1)]))),
                           128,
                        )),
                     ]),
                  ])
               );
            }
         );
      },
   });
const tn = H(NG, [["__scopeId", "data-v-730f8d27"]]),
   RG = { class: "game_menu" },
   MG = { class: "menu_box1" },
   DG = { alt: "" },
   AG = { alt: "" },
   PG = { alt: "" },
   OG = { class: "menu_box2" },
   VG = { alt: "" },
   WG = { alt: "" },
   HG = { alt: "" },
   zG = { class: "menu_box3" },
   EG = { alt: "" },
   FG = { alt: "" },
   jG = V({
      __name: "gameMenu",
      props: { allGameList: { type: Array, default: () => [] } },
      emits: ["clickMenu"],
      setup(l, { expose: s, emit: o }) {
         const u = l,
            v = q(() => {
               let d = {};
               return (
                  (u.allGameList || []).forEach((_, r) => {
                     d[_.gameType] = Object.assign(_, r);
                  }),
                  d
               );
            }),
            p = d => {
               const i = v.value[d];
               o("clickMenu", { type: d, gameMenu: i, index: i.index });
            };
         return (
            s({ handleClickMenu: p }),
            (d, i) => {
               var r, g, m, $, y, C, f, b;
               const _ = Te("lazy");
               return (
                  n(),
                  a("div", RG, [
                     e("div", MG, [e("div", { onClick: i[0] || (i[0] = T => p("lottery")) }, [te(e("img", DG, null, 512), [[_, (r = v.value.lottery) == null ? void 0 : r.img]]), e("span", null, t(d.$t("lottery")), 1)]), e("div", { onClick: i[1] || (i[1] = T => p("flash")) }, [te(e("img", AG, null, 512), [[_, (g = v.value.flash) == null ? void 0 : g.img]]), e("span", null, t(d.$t("miniGame")), 1)]), e("div", { onClick: i[2] || (i[2] = T => p("slot")) }, [te(e("img", PG, null, 512), [[_, (m = v.value.slot) == null ? void 0 : m.img]]), e("span", null, t(d.$t("electronic")), 1)])]),
                     e("div", OG, [e("div", { onClick: i[3] || (i[3] = T => p("sport")) }, [te(e("img", VG, null, 512), [[_, ($ = v.value.sport) == null ? void 0 : $.img]]), e("span", null, t(d.$t("sport")), 1)]), e("div", { onClick: i[4] || (i[4] = T => p("popular")), class: "live_menu" }, [te(e("img", WG, null, 512), [[_, (y = v.value.popular) == null ? void 0 : y.img]]), e("span", null, t(d.$t("hot")), 1)]), e("div", { onClick: i[5] || (i[5] = T => p("video")) }, [te(e("img", HG, null, 512), [[_, (C = v.value.video) == null ? void 0 : C.img]]), e("span", null, t(d.$t("live")), 1)])]),
                     e("div", zG, [e("div", { onClick: i[6] || (i[6] = T => p("chess")) }, [te(e("img", EG, null, 512), [[_, (f = v.value.chess) == null ? void 0 : f.img]]), e("span", null, t(d.$t("chess")), 1)]), e("div", { onClick: i[7] || (i[7] = T => p("fish")) }, [te(e("img", FG, null, 512), [[_, (b = v.value.fish) == null ? void 0 : b.img]]), e("span", null, t(d.$t("fishing")), 1)])]),
                  ])
               );
            }
         );
      },
   });
const UG = H(jG, [["__scopeId", "data-v-a06e490c"]]),
   qG = { key: 0, class: "title" },
   KG = { class: "list" },
   ZG = ["onClick"],
   XG = { class: "item" },
   JG = ["src", "data-img"],
   YG = { key: 0, class: "win-odds" },
   QG = V({
      __name: "HotGameItem",
      props: { gameList: {}, isAll: { type: Boolean } },
      emits: ["onItemClick"],
      setup(l, { emit: s }) {
         const o = Nt(() => Rt(() => import("./noticeBarHot-9a6bdcf1.js"), ["assets/js/noticeBarHot-9a6bdcf1.js", "assets/js/page-activity-6d456111.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/native/index-3d731397.js", "assets/js/en-53bf8069.js", "assets/js/rus-ecb14220.js", "assets/js/vi-60d1c3eb.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-38f5b166.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-dbcb2394.js", "assets/js/ar-78aaffbf.js", "assets/css/page-activity-9da3f4e3.css"])),
            u = je(),
            v = p => {
               s("onItemClick", p);
            };
         return (p, d) => (
            n(),
            a(
               "div",
               { class: M(["hot_container", { hot_all: p.isAll }]) },
               [
                  p.gameList.length > 0
                     ? (n(),
                       a(
                          "div",
                          { key: 0, class: M(["popular", { pupularAll: p.isAll }]) },
                          [
                             p.isAll ? B("", !0) : (n(), a("div", qG, [L(c(o), { class: "hotGames" }), e("span", null, t(p.$t("hot")), 1)])),
                             e("div", KG, [
                                (n(!0),
                                a(
                                   N,
                                   null,
                                   D(p.gameList, i => (n(), a("div", { key: i.vendorId, onClick: _ => v(i) }, [e("div", XG, [e("img", { src: i.imgUrl, alt: "", "data-img": c(pe)("images", "avatar") }, null, 8, JG)]), c(u).isShowHotGameWinOdds ? (n(), a("div", YG, [e("span", null, t(p.$t("winOdds")), 1), e("span", null, t(i.winOdds) + "%", 1), e("div", { class: "win-p", style: Ze({ width: `${Math.min(i.winOdds, 100)}%` }) }, null, 4)])) : B("", !0)], 8, ZG))),
                                   128,
                                )),
                             ]),
                          ],
                          2,
                       ))
                     : B("", !0),
               ],
               2,
            )
         );
      },
   });
const ex = H(QG, [["__scopeId", "data-v-ddb18141"]]),
   tx = ["onClick"],
   sx = V({
      __name: "OnlineGamesItem",
      props: { gameData: {}, isAll: { type: Boolean }, gameType: {} },
      emits: ["onItemClick"],
      setup(l, { emit: s }) {
         const o = l,
            u = q(() => (o.isAll ? o.gameData.gameList : o.gameData.gameList.length > 8 ? o.gameData.gameList.slice(0, 8) : o.gameData.gameList)),
            v = p => {
               s("onItemClick", p);
            };
         return (
            he(() => {}),
            (p, d) => {
               const i = Te("lazy");
               return (
                  n(),
                  a(
                     "div",
                     { class: M(["minGame_container", { all_game: p.isAll }]) },
                     [
                        (n(!0),
                        a(
                           N,
                           null,
                           D(u.value, _ => (n(), a("div", { class: "onlineGamesItem", key: _.gameID, onClick: r => v(_) }, [te((n(), a("img", { class: M(p.gameType === "fish" ? "fish_img" : "min_game_img"), key: _.gameID }, null, 2)), [[i, _.img]])], 8, tx))),
                           128,
                        )),
                     ],
                     2,
                  )
               );
            }
         );
      },
   });
const nx = H(sx, [["__scopeId", "data-v-b4c2775a"]]),
   ax = { class: "lottery_container" },
   ox = { class: "lottery_container-tab" },
   lx = { class: "lottery_container-tab-wrap" },
   ix = ["onClick"],
   cx = { class: "lottery_container-list" },
   ux = ["onClick"],
   rx = { class: "lotterySlotItem_img" },
   dx = V({
      __name: "LotterySlotItem",
      props: { gameData: {}, isAll: { type: Boolean } },
      setup(l) {
         const s = l,
            { t: o } = _e(),
            u = ue(),
            v = q(() => s.gameData.gameList.filter(C => C.state === 1)),
            p = q(() => v.value.map(C => C.categoryCode));
         function d(C) {
            return C.reduce((f, b) => (Array.isArray(b) ? f.concat(d(b)) : f.concat(b)), []);
         }
         const i = C => {
               if (C) {
                  let f = C;
                  switch (f) {
                     case "Trx Win Go":
                        f = "Trx Win";
                        break;
                     case "FXOSO":
                        f = o("FXOSO");
                     default:
                        f = f;
                  }
                  return f;
               }
               return "";
            },
            _ = q(() => {
               const C = {};
               return (
                  s.gameData.gameList.forEach(f => {
                     C[f.categoryCode] = f.categoryImg;
                  }),
                  C
               );
            }),
            r = k("all");
         let g = ze({
            all: [],
            "4D": [{ categoryCode: "4D", title: "4D", path: "4D" }],
            Bingo18: [{ categoryCode: "Bingo18", title: "Bingo18", path: "Binguo" }],
            XOSO: [{ categoryCode: "XOSO", title: "XOSO", path: "XoSo" }],
            FXOSO: [{ categoryCode: "FXOSO", title: "FXOSO", path: "XoSo" }],
            "Win Go": [
               { typeId: 1, categoryCode: "Win Go", title: "Win Go 1Min", path: "WinGo" },
               { typeId: 2, categoryCode: "Win Go", title: "Win Go 3Min", path: "WinGo" },
               { typeId: 3, categoryCode: "Win Go", title: "Win Go 5Min", path: "WinGo" },
               { typeId: 4, categoryCode: "Win Go", title: "Win Go 10Min", path: "WinGo" },
            ],
            "5D": [
               { typeId: 5, categoryCode: "5D", title: "5D 1Min", path: "5D" },
               { typeId: 6, categoryCode: "5D", title: "5D 3Min", path: "5D" },
               { typeId: 7, categoryCode: "5D", title: "5D 5Min", path: "5D" },
               { typeId: 8, categoryCode: "5D", title: "5D 10Min", path: "5D" },
            ],
            K3: [
               { typeId: 9, categoryCode: "K3", title: "K3 1Min", path: "K3" },
               { typeId: 10, categoryCode: "K3", title: "K3 3Min", path: "K3" },
               { typeId: 11, categoryCode: "K3", title: "K3 5Min", path: "K3" },
               { typeId: 12, categoryCode: "K3", title: "K3 10Min", path: "K3" },
            ],
            "Trx Win Go": [
               { typeId: 13, categoryCode: "Trx Win Go", title: "Trx Win Go 1Min", path: "WinTrx" },
               { typeId: 14, categoryCode: "Trx Win Go", title: "Trx Win Go 3Min", path: "WinTrx" },
               { typeId: 15, categoryCode: "Trx Win Go", title: "Trx Win Go 5Min", path: "WinTrx" },
               { typeId: 16, categoryCode: "Trx Win Go", title: "Trx Win Go 10Min", path: "WinTrx" },
            ],
         });
         const m = q(() => g[r.value] || []),
            $ = [
               { value: 1, path: "WinGo" },
               { value: 3, path: "5D" },
               { value: 2, path: "K3" },
               { value: 4, path: "WinTrx" },
               { value: 5, path: "XoSo" },
               { value: 6, path: "XoSo" },
               { value: 7, path: "Binguo" },
               { value: 8, path: "4D" },
            ],
            y = C => {
               var b;
               let f = (b = $.find(T => T.path === C.path)) == null ? void 0 : b.value;
               C.categoryCode == "FXOSO" && (f = 6), u.push({ name: "AllLotteryGames-" + C.path, query: { typeId: C.typeId || "", id: f } });
            };
         return (
            he(() => {
               const C = d(Object.values(g));
               g.all = C.filter(f => p.value.includes(f.categoryCode));
            }),
            (C, f) => {
               const b = Te("lazy");
               return (
                  n(),
                  a("div", ax, [
                     e("div", ox, [
                        e("ul", lx, [
                           e("li", { class: M({ active: r.value === "all" }), onClick: f[0] || (f[0] = T => (r.value = "all")) }, t(C.$t("all")), 3),
                           (n(!0),
                           a(
                              N,
                              null,
                              D(v.value, T => (n(), a("li", { onClick: h => (r.value = T.categoryCode), class: M({ active: T.categoryCode === r.value }) }, t(i(T.categoryCode)), 11, ix))),
                              256,
                           )),
                        ]),
                     ]),
                     e("div", cx, [
                        (n(!0),
                        a(
                           N,
                           null,
                           D(m.value, T => (n(), a("div", { class: "lotterySlotItem", key: T.id, onClick: h => y(T) }, [e("div", rx, [te(e("img", null, null, 512), [[b, _.value[T.categoryCode]]])]), e("span", null, t(T.title), 1)], 8, ux))),
                           128,
                        )),
                     ]),
                  ])
               );
            }
         );
      },
   });
const _x = H(dx, [["__scopeId", "data-v-a2c8d18e"]]),
   vx = { class: "lotterySlotItem__container" },
   px = { class: "game_img" },
   mx = { class: "game_text" },
   gx = V({
      __name: "OtherGameItem",
      props: { info: {}, title: {} },
      setup(l) {
         return (
            _e(),
            (s, o) => {
               const u = Te("lazy");
               return n(), a("div", vx, [te(e("img", px, null, 512), [[u, s.info.vendorImg]]), e("span", mx, t(s.title), 1)]);
            }
         );
      },
   });
const hx = H(gx, [["__scopeId", "data-v-a9e483f8"]]),
   yx = ["onClick"],
   fx = { class: "gameImg" },
   bx = V({
      __name: "ElectronicItem",
      props: { gameData: { type: Object, default: () => ({}) }, isAll: { type: Boolean, default: !1 } },
      emits: ["onItemClick"],
      setup(l, { emit: s }) {
         const o = l,
            u = q(() => {
               var p;
               return o.isAll ? o.gameData.gameList : (p = o.gameData) == null ? void 0 : p.gameList.slice(0, 6);
            }),
            v = p => {
               s("onItemClick", p, "slot");
            };
         return (
            he(() => {}),
            (p, d) => {
               const i = Te("lazy");
               return (
                  n(),
                  a(
                     "div",
                     { class: M(["onlineGamesItem__container", { allGame: l.isAll }]) },
                     [
                        (n(!0),
                        a(
                           N,
                           null,
                           D(u.value, _ => (n(), a("div", { key: _.slotsTypeID, class: "item", onClick: r => v(_) }, [te(e("img", fx, null, 512), [[i, _.vendorImg]])], 8, yx))),
                           128,
                        )),
                     ],
                     2,
                  )
               );
            }
         );
      },
   });
const $x = H(bx, [["__scopeId", "data-v-2854e1dd"]]),
   Cx = { alt: "" },
   kx = V({
      __name: "ElectronicWinRate",
      setup(l) {
         const s = je(),
            o = q(() => s.winRate.electronicWinRateImgUrl || ""),
            u = q(() => !!(s.winRate.isShowElectronicWinRateExternalLink && o.value)),
            v = () => {
               s.winRate.electronicWinRateExternalLink && window.open(s.winRate.electronicWinRateExternalLink);
            };
         return (p, d) => {
            const i = Te("lazy");
            return u.value ? (n(), a("div", { key: 0, class: "WinRate", onClick: v }, [te(e("img", Cx, null, 512), [[i, o.value]])])) : B("", !0);
         };
      },
   });
const Tx = H(kx, [["__scopeId", "data-v-f9d57657"]]),
   wx = ["src"],
   Lx = V({
      __name: "GameListGrid",
      props: { currentGame: { type: Object, default: () => {} }, isAll: { type: Boolean, default: !1 } },
      setup(l) {
         const s = l,
            { onItemClick: o, homeState: u } = Ue(),
            v = q(() => u.allGameList),
            p = ue(),
            d = q(() => (s.currentGame.gameType === "popular" ? 1 : ["sport", "chess", "video"].includes(s.currentGame.gameType) ? 2 : s.currentGame.gameType === "lottery" ? 3 : s.currentGame.gameType === "slot" ? 4 : s.currentGame.gameType === "flash" || s.currentGame.gameType === "fish" ? 5 : -1)),
            i = () => {
               sessionStorage.setItem("slotGamesList", JSON.stringify(s.currentGame.gameList)), sessionStorage.setItem("gameType", JSON.stringify(s.currentGame)), sessionStorage.setItem("clickedItem", JSON.stringify(s.currentGame.gameList[0])), p.push({ name: "AllGames", query: { type: s.currentGame.gameType } });
            },
            _ = async (r, g) => {
               ["chess", "slot"].includes(g) ? (sessionStorage.setItem("slotGamesList", JSON.stringify(v.value[s.currentGame.gameType])), sessionStorage.setItem("gameType", JSON.stringify(s.currentGame.gameType)), sessionStorage.setItem("clickedItem", JSON.stringify(r)), p.push({ name: "AllOnlineGames" })) : o(r);
            };
         return (
            he(() => {}),
            (r, g) => (
               n(),
               a(
                  "div",
                  { class: M(["gameListGrid__container", { all_container: l.isAll }]) },
                  [
                     d.value === 1 ? (n(), Z(ex, { key: 0, gameList: l.currentGame.gameList, onOnItemClick: c(o), isAll: l.isAll }, null, 8, ["gameList", "onOnItemClick", "isAll"])) : B("", !0),
                     d.value === 2
                        ? (n(),
                          a(
                             "div",
                             { key: 1, class: M(["otherGame", { all_other: l.isAll }]) },
                             [
                                (n(!0),
                                a(
                                   N,
                                   null,
                                   D(l.currentGame.gameList, (m, $) => (n(), Z(hx, { key: $, info: m, title: l.currentGame.title, onClick: y => _(m, l.currentGame.gameType) }, null, 8, ["info", "title", "onClick"]))),
                                   128,
                                )),
                             ],
                             2,
                          ))
                        : B("", !0),
                     d.value === 4 ? (n(), Z(Tx, { key: 2 })) : B("", !0),
                     d.value === 4 ? (n(), Z($x, { key: 3, gameData: l.currentGame, isAll: l.isAll, onOnItemClick: _ }, null, 8, ["gameData", "isAll"])) : B("", !0),
                     d.value === 3 ? (n(), Z(_x, { key: 4, gameData: l.currentGame, isAll: l.isAll }, null, 8, ["gameData", "isAll"])) : B("", !0),
                     d.value === 5 ? (n(), Z(nx, { key: 5, gameType: l.currentGame.gameType, gameData: l.currentGame, isAll: l.isAll, onOnItemClick: c(o) }, null, 8, ["gameType", "gameData", "isAll", "onOnItemClick"])) : B("", !0),
                     l.isAll ? B("", !0) : (n(), a("button", { key: 6, onClick: i, class: "look_all" }, [e("img", { src: c(pe)("home", "all"), alt: "" }, null, 8, wx), E(" " + t(r.$t("viewAll")), 1)])),
                  ],
                  2,
               )
            )
         );
      },
   });
const Ix = H(Lx, [["__scopeId", "data-v-15292533"]]),
   Sx = { class: "gamesList__container", id: "gameList" },
   Gx = { key: 0, class: "gamesList__container-title" },
   xx = V({
      __name: "GameList",
      props: { gameData: {} },
      setup(l) {
         return (s, o) => (n(), a("div", Sx, [s.gameData.gameList.length > 0 && s.gameData.isShow ? (n(), a("div", Gx, t(s.gameData.title), 1)) : B("", !0), s.gameData.isShow ? (n(), Z(Ix, { key: 1, currentGame: s.gameData, isAll: !0 }, null, 8, ["currentGame"])) : B("", !0)]));
      },
   });
const Bx = H(xx, [["__scopeId", "data-v-d29d1b39"]]),
   Nx = V({
      __name: "index",
      setup(l) {
         const { getGameType: s, homeState: o, getAllGame: u } = Ue(),
            { t: v } = _e(),
            p = ze({ allGameList: [], currentGame: void 0 }),
            d = r => {
               const g = document.querySelector("#gameList"),
                  m = (g == null ? void 0 : g.offsetTop) || 0;
               sessionStorage.setItem("clickMenu", r.type), (p.currentGame = r.gameMenu), window.scrollTo({ top: m - 100, behavior: "smooth" });
            },
            i = async () => {
               await s(), (p.allGameList = o.gameTypeList.filter(r => r.categoryCode !== "BigAward").map(r => ({ isAll: !1, img: r.categoryImg, isShow: r.state === 1, gameList: [], gameType: r.categoryCode.toLocaleLowerCase(), title: v("code" + r.typeNameCode) })));
            },
            _ = async () => {
               await i(), await u();
               const r = o.allGameList;
               p.allGameList = p.allGameList.map(m => (m.gameType === "popular" ? (m.gameList = [...r[m.gameType].platformList, ...r[m.gameType].clicksTopList]) : (m.gameList = r[m.gameType]), m.gameList || (m.isShow = !1), m));
               let g = sessionStorage.getItem("clickMenu") || "";
               if (g) p.currentGame = p.allGameList.find(m => m.gameType === g);
               else {
                  let m = p.allGameList.find($ => $.gameType === "lottery");
                  m || (m = p.allGameList[0]), (p.currentGame = m);
               }
               sessionStorage.setItem("allGameList", JSON.stringify(p.allGameList));
            };
         return (
            he(() => {
               _();
            }),
            (r, g) => (n(), a(N, null, [L(UG, { "all-game-list": p.allGameList, onClickMenu: d }, null, 8, ["all-game-list"]), p.currentGame ? (n(), Z(Bx, { key: 0, gameData: p.currentGame }, null, 8, ["gameData"])) : B("", !0)], 64))
         );
      },
   }),
   Rx = ["onClick"],
   Mx = V({
      __name: "index",
      setup(l) {
         const { getBannerApi: s, getBanner: o } = Ue(),
            u = [ul],
            v = i => {},
            p = i => {},
            d = i => {
               i && (window.location.href = i);
            };
         return (
            he(async () => {
               await s();
            }),
            (i, _) => {
               const r = Te("lazy");
               return (
                  n(),
                  Z(
                     c(cl),
                     { class: "my-swipe", "slides-per-view": 1, "space-between": 20, onSwiper: v, onSlideChange: p, autoplay: { delay: 5e3, disableOnInteraction: !1 }, modules: u, loop: !0 },
                     {
                        default: A(() => [
                           (n(!0),
                           a(
                              N,
                              null,
                              D(c(o), (g, m) => (n(), Z(c(il), { key: m }, { default: A(() => [te(e("img", { onClick: $ => d(g.url) }, null, 8, Rx), [[r, g.bannerUrl]])]), _: 2 }, 1024))),
                              128,
                           )),
                        ]),
                        _: 1,
                     },
                  )
               );
            }
         );
      },
   });
const Ls = H(Mx, [["__scopeId", "data-v-4d9ccfbe"]]),
   Ms = V({
      __name: "Turntable",
      setup(l) {
         const s = ue(),
            o = k(),
            u = je();
         function v() {
            u.getBigTurntableLink && window.open(u.getBigTurntableLink);
         }
         return (p, d) => (n(), a(N, null, [c(u).getOpenTurntable ? (n(), a("div", { key: 0, class: M(["turntable-lottery", { "lottery-bottom": c(u).getBigTurntableLink }]), onClick: d[0] || (d[0] = i => c(s).push({ name: "Turntable" })) }, null, 2)) : B("", !0), c(u).getBigTurntableLink ? (n(), a("div", { key: 1, class: "turntable", onClick: v, ref_key: "turntableId", ref: o }, null, 512)) : B("", !0)], 64));
      },
   });
const Dx = l => (ye("data-v-2934444e"), (l = l()), fe(), l),
   Ax = Dx(() => e("svg", { class: "line", width: "1", height: "60", viewBox: "0 0 1 60", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, [e("line", { x1: "0.5", x2: "0.5", y2: "60", stroke: "white" })], -1)),
   Px = ["src"],
   Ox = { class: "text" },
   Vx = 1.1,
   Wx = V({
      __name: "DownloadPWA",
      setup(l) {
         const s = La("show-pwa-download", !0);
         let o = null;
         const { t: u } = _e(),
            v = je(),
            p = ze({ canIUse: !1, download: null });
         window.addEventListener(
            "beforeinstallprompt",
            r => {
               r.preventDefault(), (o = r), (p.canIUse = !0);
            },
            { once: !0 },
         ),
            (p.download = function () {
               o.prompt().then(r => {
                  r.outcome === "accepted" && (p.canIUse = !1);
               });
            });
         let d = di();
         (d = d == null ? void 0 : d.toLowerCase()), /[\u4e00-\u9fa5]+/.test(d) && (d = "vxth");
         const i = document.querySelector("link[rel='manifest']");
         i == null || i.setAttribute("href", "/manifest/manifest." + d + ".json?version=" + Vx);
         async function _() {
            if (s.value)
               if (p.canIUse) p.download && p.download();
               else {
                  const r = await de(qa());
                  if (!r) return;
                  Gn(_i ? r.data.androidUrl : r.data.iosUrl);
               }
         }
         return (r, g) => {
            const m = U("van-icon");
            return n(), a("div", { class: "btn", onClick: _ }, [Ax, L(m, { class: "close", name: "close", color: "rgb(255,255,255)", onClick: g[0] || (g[0] = $ => (s.value = !1)) }), e("img", { class: "icon", src: c(v).getWebIco }, null, 8, Px), e("div", Ox, t(p.canIUse ? c(u)("addToDesktop") : c(u)("downloadAPP")), 1)]);
         };
      },
   });
const Is = H(Wx, [["__scopeId", "data-v-2934444e"]]),
   Ds = l => (ye("data-v-7c7e292d"), (l = l()), fe(), l),
   Hx = { class: "content" },
   zx = { class: "logo" },
   Ex = ["src"],
   Fx = { class: "languages" },
   jx = { class: "languages-text" },
   Ux = { class: "content__right" },
   qx = Ds(() => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: "60", height: "60", viewBox: "0 0 60 60", fill: "none" }, [e("g", { "clip-path": "url(#clip0_243_123505)" }, [e("circle", { cx: "30", cy: "30", r: "28.5", stroke: "#3F3F3F", "stroke-width": "3" }), e("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M29.9999 36.25L16.25 22.5543H25.4166V10H34.5833V22.5543H43.75L29.9999 36.25Z", fill: "#3F3F3F", stroke: "#3F3F3F", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }), e("path", { d: "M50 41H10", stroke: "#3F3F3F", "stroke-width": "3", "stroke-linecap": "round" }), e("path", { d: "M41.25 48.5H18.75", stroke: "#3F3F3F", "stroke-width": "3", "stroke-linecap": "round" })]), e("defs", null, [e("clipPath", { id: "clip0_243_123505" }, [e("rect", { width: "60", height: "60", fill: "white" })])])], -1)),
   Kx = Ds(() =>
      e(
         "svg",
         { xmlns: "http://www.w3.org/2000/svg", width: "60", height: "60", viewBox: "0 0 60 60", fill: "none" },
         [
            e("path", {
               d: "M54.3525 27.2813C54.1013 13.8694 43.7044 3.03564 30.9375 3.03564H29.0625C16.2956 3.03564 5.89875 13.8694 5.6475 27.2794C3.405 28.5788 1.875 30.9769 1.875 33.75V37.5C1.875 41.6363 5.23875 45 9.375 45C13.5113 45 16.875 41.6363 16.875 37.5V33.75C16.8721 31.7748 16.0906 29.8803 14.6998 28.4777C13.3091 27.075 11.4214 26.2773 9.44625 26.2575C10.1794 15.3919 18.6863 6.78564 29.0625 6.78564H30.9375C41.3156 6.78564 49.8206 15.3919 50.5537 26.2575C48.5786 26.2773 46.6909 27.075 45.3002 28.4777C43.9094 29.8803 43.1279 31.7748 43.125 33.75V37.5C43.125 40.8863 45.3938 43.7213 48.48 44.6494C45.6947 48.3157 41.7173 50.8953 37.2337 51.9431C36.9242 51.0148 36.3309 50.2072 35.5376 49.6343C34.7443 49.0613 33.7911 48.752 32.8125 48.75C31.5693 48.75 30.377 49.2439 29.4979 50.123C28.6189 51.002 28.125 52.1943 28.125 53.4375C28.125 54.6807 28.6189 55.873 29.4979 56.7521C30.377 57.6312 31.5693 58.125 32.8125 58.125C33.611 58.124 34.3959 57.9181 35.0922 57.5271C35.7884 57.1362 36.3728 56.5732 36.7894 55.8919C40.1684 55.3008 43.3778 53.9795 46.1935 52.0202C49.0093 50.061 51.3637 47.511 53.0925 44.5481C56.0137 43.5244 58.125 40.7681 58.125 37.5V33.75C58.125 30.9769 56.595 28.5788 54.3525 27.2813ZM13.125 33.75V37.5C13.125 39.5681 11.4431 41.25 9.375 41.25C7.30687 41.25 5.625 39.5681 5.625 37.5V33.75C5.625 31.6819 7.30687 30 9.375 30C11.4431 30 13.125 31.6819 13.125 33.75ZM54.375 37.5C54.375 39.51 52.7812 41.1431 50.7938 41.2331L50.6475 41.1638C50.6344 41.1938 50.6138 41.2181 50.6006 41.2463C49.6109 41.2398 48.6639 40.8424 47.966 40.1407C47.2681 39.4389 46.876 38.4897 46.875 37.5V33.75C46.875 31.6819 48.5569 30 50.625 30C52.6931 30 54.375 31.6819 54.375 33.75V37.5Z",
               fill: "#3F3F3F",
            }),
         ],
         -1,
      ),
   ),
   Zx = { key: 0, class: "balance" },
   Xx = Ds(() => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: "40", height: "40", viewBox: "0 0 40 40", fill: "none" }, [e("path", { d: "M20 19.8182C15.0509 19.8182 11.04 15.8292 11.04 10.9071C11.04 5.98507 15.0509 2 20 2C24.9491 2 28.96 5.98903 28.96 10.9071C28.96 15.8252 24.9491 19.8182 20 19.8182Z", fill: "#292929" }), e("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M20.3788 27.0402C20.1757 27.2624 19.8243 27.2624 19.6212 27.0402L14.3176 21.2395C8.47124 22.1545 4 27.1864 4 33.2567C4 35.3241 5.68552 37 7.76471 37H32.2353C34.3145 37 36 35.3241 36 33.2567C36 27.1864 31.5288 22.1545 25.6824 21.2395L20.3788 27.0402Z", fill: "#292929" })], -1)),
   Jx = Ds(() =>
      e(
         "svg",
         { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 32 32", fill: "none" },
         [
            e("path", {
               d: "M4.31322 9.3733C4.56545 9.37359 4.81243 9.44542 5.02548 9.58046C5.23852 9.71549 5.4089 9.90818 5.51681 10.1362C5.62473 10.3642 5.66577 10.6181 5.63516 10.8684C5.60455 11.1188 5.50355 11.3554 5.34388 11.5506L5.34922 11.552C4.55792 12.7353 4.09671 14.1084 4.01317 15.5294C3.92963 16.9505 4.22679 18.3682 4.87399 19.6361C5.52119 20.904 6.49499 21.9762 7.69489 22.7422C8.8948 23.5081 10.2773 23.94 11.6999 23.9933L11.9999 24L18.6665 23.9986V21.4946C18.6664 21.3766 18.6924 21.2601 18.7425 21.1533L18.8012 21.0506C18.919 20.8742 19.102 20.7518 19.3101 20.7103C19.5181 20.6688 19.7341 20.7116 19.9106 20.8293L25.6666 24.6666C25.776 24.7397 25.8657 24.8387 25.9278 24.9547C25.9899 25.0708 26.0223 25.2004 26.0223 25.332C26.0223 25.4636 25.9899 25.5931 25.9278 25.7092C25.8657 25.8253 25.776 25.9242 25.6666 25.9973L19.9092 29.8373C19.7887 29.9177 19.6485 29.9639 19.5038 29.9709C19.359 29.9779 19.2151 29.9454 19.0873 29.8769C18.9596 29.8085 18.8529 29.7066 18.7785 29.5822C18.7042 29.4578 18.665 29.3156 18.6652 29.1706V26.664L11.9999 26.6666C10.055 26.6668 8.14709 26.1352 6.4825 25.1294C4.8179 24.1236 3.45999 22.6818 2.55562 20.9599C1.65126 19.2381 1.23486 17.3018 1.35147 15.3604C1.46808 13.419 2.11325 11.5465 3.21722 9.9453C3.34 9.76831 3.50384 9.6237 3.69471 9.52385C3.88558 9.42401 4.0978 9.37189 4.31322 9.37197V9.3733ZM13.1985 2.38397C13.2863 2.51541 13.3332 2.66991 13.3332 2.82797V5.3333H19.9999C21.9298 5.33301 23.8236 5.85631 25.4796 6.84745C27.1355 7.83859 28.4915 9.26042 29.4031 10.9614C30.3148 12.6625 30.7478 14.579 30.6561 16.5067C30.5644 18.4344 29.9515 20.3011 28.8826 21.908L28.8559 21.948C28.8314 21.9847 28.8065 22.0211 28.7812 22.0573C28.5306 22.3506 28.1612 22.5373 27.7479 22.5373C27.4891 22.5373 27.2358 22.462 27.0191 22.3206C26.8023 22.1791 26.6314 21.9776 26.5272 21.7407C26.423 21.5037 26.3901 21.2416 26.4323 20.9863C26.4746 20.7309 26.5902 20.4934 26.7652 20.3026L26.7519 20.292C27.5073 19.1038 27.9358 17.7372 27.994 16.3304C28.0522 14.9236 27.738 13.5263 27.0833 12.2798C26.4286 11.0333 25.4565 9.98161 24.2652 9.23107C23.0739 8.48053 21.7056 8.0577 20.2985 8.0053L19.9999 7.99997L13.3332 7.99863V10.5053C13.3334 10.6502 13.2943 10.7925 13.2199 10.9169C13.1456 11.0413 13.0388 11.1432 12.9111 11.2116C12.7834 11.2801 12.6394 11.3125 12.4947 11.3056C12.3499 11.2986 12.2098 11.2524 12.0892 11.172L6.33322 7.33063C6.22376 7.25755 6.13403 7.1586 6.07197 7.04254C6.0099 6.92648 5.97744 6.79691 5.97744 6.6653C5.97744 6.53369 6.0099 6.40411 6.07197 6.28806C6.13403 6.172 6.22376 6.07304 6.33322 5.99997L12.0905 2.15997C12.178 2.10174 12.2761 2.06131 12.3792 2.04099C12.4822 2.02066 12.5883 2.02085 12.6913 2.04152C12.7944 2.0622 12.8923 2.10297 12.9795 2.16149C13.0668 2.22002 13.1417 2.29517 13.1999 2.38263L13.1985 2.38397Z",
               fill: "#775B3E",
            }),
         ],
         -1,
      ),
   ),
   Yx = [Jx],
   Qx = Ds(() => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" }, [e("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M14 41H34C40 41 44 38 44 31V17C44 10 40 7 34 7H14C8 7 4 10 4 17V31C4 38 8 41 14 41ZM19.3181 24.164C20.6181 25.224 22.3181 25.744 23.9981 25.744C25.6781 25.744 27.3781 25.224 28.6581 24.164L34.9181 19.164C35.5781 18.664 35.6781 17.704 35.1581 17.064C34.6581 16.404 33.6981 16.304 33.0581 16.824L26.7981 21.824C25.2781 23.044 22.6981 23.044 21.1781 21.824L14.9181 16.824C14.6062 16.5974 14.2189 16.5 13.8369 16.5521C13.4549 16.6042 13.1078 16.8017 12.8679 17.1035C12.628 17.4053 12.5139 17.788 12.5493 18.1719C12.5848 18.5558 12.767 18.9112 13.0581 19.164L19.3181 24.164Z", fill: "#292929" })], -1)),
   eB = [Qx],
   tB = { class: "promptHeader" },
   sB = ["innerHTML"],
   nB = { class: "Laundry-Con" },
   aB = { class: "Laundry-Con_tip" },
   oB = { class: "Landty-Con-tips" },
   lB = V({
      __name: "blackGoldHome",
      setup(l) {
         const { t: s } = _e(),
            o = ue(),
            u = vi(),
            { setLoading: v } = Jt(),
            p = q(() => je().getProjectName),
            { closeLaundry: d, closePrompt: i, store: _, promptContent: r } = fs();
         function g() {
            o.push({ name: "CustomerService" });
         }
         const { onDown: m, isAppDownload: $, isAppDownloadIcon: y, showChanglong: C, projectIcon: f, getMessagesData: b, showPWA: T } = Ue(),
            h = q(() => ({}).VITE_SITE || "Game");
         v(!1);
         const w = () => {
            d(), o.push({ name: "SuperJackpot" });
         };
         async function I() {
            u.resetData(!1, !0);
         }
         const x = rt();
         return (
            he(() => {
               b(), v(!1);
            }),
            (S, G) => {
               const R = U("NavBar"),
                  O = U("van-dialog");
               return (
                  n(),
                  a("div", Hx, [
                     L(R, null, { left: A(() => [e("div", zx, [e("img", { src: c(f), alt: "" }, null, 8, Ex)]), e("div", Fx, [L(Pi), e("span", jx, "Welcome to " + t(p.value) + " " + t(h.value), 1)])]), right: A(() => [e("div", Ux, [c($) ? (n(), a("div", { key: 0, class: "btn", onClick: G[0] || (G[0] = (...P) => c(m) && c(m)(...P)) }, [qx, e("span", null, t(c(s)("downloadAPP")), 1)])) : B("", !0), e("div", { class: "btn", onClick: g }, [Kx, e("span", null, t(c(s)("customerServiceTitle")), 1)])])]), _: 1 }),
                     L(Ls),
                     L(Yt, { key: "home" }),
                     c(x).token ? (n(), a("div", Zx, [Xx, e("span", null, t(c(x).getUserInfo.nickName) + "-", 1), e("span", null, t(c(Be)(c(u).getAmount)), 1), e("span", { onClick: I, class: "balance-refresh" }, Yx), e("span", { class: "balance-msg", onClick: G[1] || (G[1] = P => c(o).push({ name: "Messages" })) }, eB)])) : B("", !0),
                     L(Nx),
                     L(en),
                     L(tn),
                     c(C) ? (n(), Z(os, { key: 1 })) : B("", !0),
                     c(T) && c(y) ? (n(), Z(Is, { key: 2 })) : B("", !0),
                     L(Ms),
                     L(O, { show: c(_).prompt, "onUpdate:show": G[2] || (G[2] = P => (c(_).prompt = P)), "confirm-button-text": c(s)("confirm"), onConfirm: c(i) }, { default: A(() => [e("div", tB, t(c(s)("prompt")), 1), e("div", { class: "promptContent", innerHTML: c(r) }, null, 8, sB)]), _: 1 }, 8, ["show", "confirm-button-text", "onConfirm"]),
                     L(ws, { show: c(_).laundry, "onUpdate:show": G[3] || (G[3] = P => (c(_).laundry = P)), onConfirm: w, "show-cancel-btn": !1, confirmText: "OK", title: c(s)("congratulations") }, { content: A(() => [e("div", nB, [e("div", aB, t(c(s)("getSuper")), 1), e("div", oB, t(c(s)("getRewards")), 1)])]), _: 1 }, 8, ["show", "title"]),
                  ])
               );
            }
         );
      },
   });
const iB = H(lB, [["__scopeId", "data-v-7c7e292d"]]),
   WV = Object.freeze(Object.defineProperty({ __proto__: null, default: iB }, Symbol.toStringTag, { value: "Module" }));
const cB = {},
   uB = { class: "point point-flicker" };
function rB(l, s) {
   return n(), a("div", uB);
}
const As = H(cB, [
      ["render", rB],
      ["__scopeId", "data-v-342e7da2"],
   ]),
   dB = { key: 0, class: "platform" },
   _B = { class: "title" },
   vB = { class: "list" },
   pB = ["onClick"],
   mB = ["src", "data-img"],
   gB = { class: "title" },
   hB = { key: 0, class: "title" },
   yB = { class: "list" },
   fB = ["onClick"],
   bB = { class: "item" },
   $B = ["src", "data-img"],
   CB = { key: 0, class: "win-odds" },
   kB = V({
      __name: "HotGameItem",
      props: { platformList: {}, clicksTopList: {}, isAll: { type: Boolean } },
      emits: ["onItemClick"],
      setup(l, { emit: s }) {
         const o = Nt(() => Rt(() => import("./noticeBarHot-9a6bdcf1.js"), ["assets/js/noticeBarHot-9a6bdcf1.js", "assets/js/page-activity-6d456111.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/native/index-3d731397.js", "assets/js/en-53bf8069.js", "assets/js/rus-ecb14220.js", "assets/js/vi-60d1c3eb.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-38f5b166.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-dbcb2394.js", "assets/js/ar-78aaffbf.js", "assets/css/page-activity-9da3f4e3.css"])),
            u = je(),
            v = p => {
               s("onItemClick", p);
            };
         return (p, d) => (
            n(),
            a(
               "div",
               { class: M(["hot_container", { hot_all: p.isAll }]) },
               [
                  p.platformList.length > 0
                     ? (n(),
                       a("div", dB, [
                          e("div", _B, [e("span", null, t(p.$t("platRecom")), 1)]),
                          e("div", vB, [
                             (n(!0),
                             a(
                                N,
                                null,
                                D(p.platformList, i => (n(), a("div", { class: "item", key: i.vendorId, onClick: _ => v(i) }, [e("img", { src: i.imgUrl, alt: "", "data-img": c(pe)("images", "avatar") }, null, 8, mB)], 8, pB))),
                                128,
                             )),
                          ]),
                       ]))
                     : B("", !0),
                  e("div", gB, t(p.$t("hot")), 1),
                  p.platformList.length > 0
                     ? (n(),
                       a(
                          "div",
                          { key: 1, class: M(["popular", { pupularAll: p.isAll }]) },
                          [
                             p.isAll ? B("", !0) : (n(), a("div", hB, [L(c(o), { class: "hotGames" }), e("span", null, t(p.$t("hot")), 1)])),
                             e("div", yB, [
                                (n(!0),
                                a(
                                   N,
                                   null,
                                   D(p.clicksTopList, i => (n(), a("div", { key: i.vendorId, onClick: _ => v(i) }, [e("div", bB, [e("img", { src: i.imgUrl, alt: "", "data-img": c(pe)("images", "avatar") }, null, 8, $B)]), c(u).isShowHotGameWinOdds ? (n(), a("div", CB, [e("span", null, t(p.$t("winOdds")), 1), e("span", null, t(i.winOdds) + "%", 1), e("div", { class: "win-p", style: Ze({ width: `${Math.min(i.winOdds, 100)}%` }) }, null, 4)])) : B("", !0)], 8, fB))),
                                   128,
                                )),
                             ]),
                          ],
                          2,
                       ))
                     : B("", !0),
               ],
               2,
            )
         );
      },
   });
const TB = H(kB, [["__scopeId", "data-v-91449650"]]),
   wB = ["onClick"],
   LB = V({
      __name: "OnlineGamesItem",
      props: { gameData: {}, isAll: { type: Boolean } },
      emits: ["onItemClick"],
      setup(l, { emit: s }) {
         const o = l,
            u = q(() => (o.isAll ? o.gameData.gameList : o.gameData.gameList.length > 8 ? o.gameData.gameList.slice(0, 8) : o.gameData.gameList)),
            v = p => {
               s("onItemClick", p);
            };
         return (
            he(() => {}),
            (p, d) => {
               const i = Te("lazy");
               return (
                  n(),
                  a(
                     "div",
                     { class: M(["minGame_container", { all_game: p.isAll }]) },
                     [
                        (n(!0),
                        a(
                           N,
                           null,
                           D(u.value, _ => (n(), a("div", { class: "onlineGamesItem", key: _.gameID, onClick: r => v(_) }, [te((n(), a("img", { class: M(p.gameData.gameType === "fish" ? "fish_img" : "min_game_img"), key: _.gameID }, null, 2)), [[i, _.img]])], 8, wB))),
                           128,
                        )),
                     ],
                     2,
                  )
               );
            }
         );
      },
   });
const IB = H(LB, [["__scopeId", "data-v-4049075e"]]),
   SB = ["onClick"],
   GB = V({
      __name: "LotterySlotItem",
      props: { gameData: {}, isAll: { type: Boolean } },
      setup(l) {
         const { t: s } = _e(),
            o = ue(),
            u = i => {
               if (i) {
                  let _ = i;
                  switch (_) {
                     case "Trx Win Go":
                        _ = "Trx Win";
                        break;
                     case "FXOSO":
                        _ = s("FXOSO");
                     default:
                        _ = _;
                  }
                  return _;
               }
               return "";
            },
            v = i => {
               if (i) {
                  let _ = [];
                  switch (i) {
                     case "Win Go":
                     case "Trx Win Go":
                        _ = [s("lotteryHintStr1"), s("lotteryHintStr2")];
                        break;
                     case "5D":
                     case "K3":
                        _ = [s("lotteryHintStr3"), s("lotteryHintStr4")];
                        break;
                     case "XOSO":
                     case "FXOSO":
                        _ = [s("lotteryHintStr5"), s("lotteryHintStr6")];
                        break;
                     case "Bingo18":
                        _ = [s("lotteryHintStr5"), s("lotteryHintStr6")];
                        break;
                     case "4D":
                        _ = [s("lotteryHintStr7"), s("lotteryHintStr6")];
                        break;
                     default:
                        _ = [];
                  }
                  return _;
               }
               return "";
            },
            p = [
               { value: 1, path: "WinGo" },
               { value: 3, path: "5D" },
               { value: 2, path: "K3" },
               { value: 4, path: "WinTrx" },
               { value: 5, path: "XoSo" },
               { value: 6, path: "XoSo" },
               { value: 7, path: "Binguo" },
               { value: 8, path: "4D" },
            ],
            d = i => {
               o.push({ name: "AllLotteryGames-" + p[p.findIndex(_ => _.value === i.id)].path, query: { id: i.id } });
            };
         return (i, _) => {
            const r = Te("lazy");
            return (
               n(),
               a(
                  "div",
                  { class: M(["lottery_container", { all_lottery: i.isAll }]) },
                  [
                     (n(!0),
                     a(
                        N,
                        null,
                        D(i.gameData.gameList, g => (n(), a("div", { class: "lotterySlotItem", key: g.id, onClick: m => d(g) }, [te(e("img", null, null, 512), [[r, g.categoryImg]]), e("span", null, t(u(g.categoryCode)), 1), e("h4", null, [e("div", null, t(v(g.categoryCode)[0]), 1), e("div", null, t(v(g.categoryCode)[1]), 1)])], 8, SB))),
                        128,
                     )),
                  ],
                  2,
               )
            );
         };
      },
   });
const xB = H(GB, [["__scopeId", "data-v-0b7101a3"]]),
   BB = { class: "lotterySlotItem__container" },
   NB = { class: "title" },
   RB = { class: "tit" },
   MB = { class: "desc" },
   DB = { class: "game_img" },
   AB = V({
      __name: "OtherGameItem",
      props: { info: {}, isAll: { type: Boolean }, gameType: {} },
      setup(l) {
         const s = l,
            { t: o } = _e(),
            u = { sport: o("sport"), video: o("live"), chess: o("chess") },
            v = q(() => (s.info.slotsName.indexOf("_") === -1 ? s.info.slotsName.toUpperCase() : s.info.slotsName.split("_")[0].toUpperCase()));
         return (p, d) => {
            const i = Te("lazy");
            return n(), a("div", BB, [e("div", NB, [p.info.slotsTypeID ? (n(), Z(Ii, { key: 0, name: v.value }, null, 8, ["name"])) : B("", !0), e("div", RB, t(u[p.gameType]), 1), e("div", MB, t(c(pi)(c(mi).gameAllName, p.info.slotsTypeID)), 1)]), te(e("img", DB, null, 512), [[i, p.info.vendorImg || p.info.categoryImg]])]);
         };
      },
   });
const PB = H(AB, [["__scopeId", "data-v-d6231fba"]]),
   OB = ["onClick"],
   VB = { class: "gameImg" },
   WB = V({
      __name: "ElectronicItem",
      props: { gameData: { type: Object, default: () => ({}) }, isAll: { type: Boolean, default: !1 } },
      emits: ["onItemClick"],
      setup(l, { emit: s }) {
         const o = l,
            u = q(() => (o.isAll ? o.gameData.gameList : o.gameData.gameList.slice(0, 6))),
            v = p => {
               s("onItemClick", p, o.gameData.gameType);
            };
         return (
            he(() => {}),
            (p, d) => {
               const i = Te("lazy");
               return (
                  n(),
                  a(
                     "div",
                     { class: M(["onlineGamesItem__container", { allGame: l.isAll }]) },
                     [
                        (n(!0),
                        a(
                           N,
                           null,
                           D(u.value, _ => (n(), a("div", { key: _.slotsTypeID, class: "item", onClick: r => v(_) }, [te(e("img", VB, null, 512), [[i, _.vendorImg]])], 8, OB))),
                           128,
                        )),
                     ],
                     2,
                  )
               );
            }
         );
      },
   });
const HB = H(WB, [["__scopeId", "data-v-69fb0765"]]),
   zB = { alt: "" },
   EB = V({
      __name: "ElectronicWinRate",
      setup(l) {
         const s = je(),
            o = q(() => s.winRate.electronicWinRateImgUrl || ""),
            u = q(() => !!(s.winRate.isShowElectronicWinRateExternalLink && o.value)),
            v = () => {
               s.winRate.electronicWinRateExternalLink && window.open(s.winRate.electronicWinRateExternalLink);
            };
         return (p, d) => {
            const i = Te("lazy");
            return u.value ? (n(), a("div", { key: 0, class: "WinRate", onClick: v }, [te(e("img", zB, null, 512), [[i, o.value]])])) : B("", !0);
         };
      },
   });
const FB = H(EB, [["__scopeId", "data-v-bd3f10ed"]]),
   jB = ["src"],
   UB = V({
      __name: "GameListGrid",
      props: { currentGame: { type: Object, default: () => {} }, isAll: { type: Boolean, default: !1 } },
      setup(l) {
         const s = l,
            o = ue(),
            { onItemClick: u, homeState: v } = Ue(),
            p = q(() => v.allGameList),
            d = q(() => (s.currentGame.gameType === "popular" ? 1 : ["sport", "chess", "video"].includes(s.currentGame.gameType) ? 2 : s.currentGame.gameType === "lottery" ? 3 : s.currentGame.gameType === "slot" ? 4 : s.currentGame.gameType === "flash" || s.currentGame.gameType === "fish" ? 5 : -1)),
            i = () => {
               sessionStorage.setItem("slotGamesList", JSON.stringify(s.currentGame.gameList)), sessionStorage.setItem("gameType", JSON.stringify(s.currentGame)), sessionStorage.setItem("clickedItem", JSON.stringify(s.currentGame.gameList[0])), o.push({ name: "AllGames", query: { type: s.currentGame.gameType } });
            },
            _ = q(() => (s.currentGame.gameList.length < 1 ? [] : s.currentGame.gameList[1].length > 9 && !s.isAll ? s.currentGame.gameList[1].slice(0, 9) : s.currentGame.gameList[1])),
            r = async (g, m) => {
               ["chess", "slot"].includes(m) ? (sessionStorage.setItem("slotGamesList", JSON.stringify(p.value[s.currentGame.gameType])), sessionStorage.setItem("gameType", JSON.stringify(s.currentGame.gameType)), sessionStorage.setItem("clickedItem", JSON.stringify(g)), o.push({ name: "AllOnlineGames" })) : u(g);
            };
         return (
            he(() => {}),
            (g, m) => (
               n(),
               a(
                  "div",
                  { class: M(["gameListGrid__container", { all_container: l.isAll }]) },
                  [
                     d.value === 1 ? (n(), Z(TB, { key: 0, platformList: l.currentGame.gameList[0], clicksTopList: _.value, onOnItemClick: c(u), isAll: l.isAll }, null, 8, ["platformList", "clicksTopList", "onOnItemClick", "isAll"])) : B("", !0),
                     d.value === 2
                        ? (n(),
                          a(
                             "div",
                             { key: 1, class: M(["otherGame", { all_other: l.isAll }]) },
                             [
                                (n(!0),
                                a(
                                   N,
                                   null,
                                   D(l.currentGame.gameList, ($, y) => (n(), Z(PB, { key: y, info: $, gameType: l.currentGame.gameType, isAll: l.isAll, onClick: C => r($, l.currentGame.gameType) }, null, 8, ["info", "gameType", "isAll", "onClick"]))),
                                   128,
                                )),
                             ],
                             2,
                          ))
                        : B("", !0),
                     d.value === 4 ? (n(), Z(FB, { key: 2 })) : B("", !0),
                     d.value === 4 ? (n(), Z(HB, { key: 3, gameData: l.currentGame, isAll: l.isAll, onOnItemClick: r }, null, 8, ["gameData", "isAll"])) : B("", !0),
                     d.value === 3 ? (n(), Z(xB, { key: 4, gameData: l.currentGame, isAll: l.isAll }, null, 8, ["gameData", "isAll"])) : B("", !0),
                     d.value === 5 ? (n(), Z(IB, { key: 5, gameData: l.currentGame, isAll: l.isAll, onOnItemClick: c(u) }, null, 8, ["gameData", "isAll", "onOnItemClick"])) : B("", !0),
                     l.isAll ? B("", !0) : (n(), a("button", { key: 6, onClick: i, class: "look_all" }, [e("img", { src: c(pe)("home", "all"), alt: "" }, null, 8, jB), E(" " + t(g.$t("viewAll")), 1)])),
                  ],
                  2,
               )
            )
         );
      },
   });
const qB = H(UB, [["__scopeId", "data-v-0806a219"]]),
   KB = { class: "gamesList__container" },
   ZB = { key: 0, class: "gamesList__container-title" },
   XB = V({
      __name: "GameList",
      props: { gameData: {} },
      setup(l) {
         return (s, o) => (n(), a("div", KB, [s.gameData.gameList.length > 0 && s.gameData.isShow && s.gameData.gameType !== "popular" ? (n(), a("div", ZB, t(s.gameData.title), 1)) : B("", !0), s.gameData.isShow ? (n(), Z(qB, { key: 1, currentGame: s.gameData, isAll: !0 }, null, 8, ["currentGame"])) : B("", !0)]));
      },
   });
const JB = H(XB, [["__scopeId", "data-v-afc6f00c"]]),
   YB = { class: "game_menu" },
   QB = { class: "menu_box1" },
   eN = { alt: "" },
   tN = { alt: "" },
   sN = { alt: "" },
   nN = { class: "menu_box2" },
   aN = { alt: "" },
   oN = { alt: "" },
   lN = { alt: "" },
   iN = { class: "menu_box3" },
   cN = { alt: "" },
   uN = { alt: "" },
   rN = V({
      __name: "index",
      props: { allGameList: {} },
      emits: ["clickMenu"],
      setup(l, { expose: s, emit: o }) {
         const u = l,
            v = q(() => {
               let d = {};
               return (
                  (u.allGameList || []).forEach(_ => {
                     d[_.gameType] = _;
                  }),
                  d
               );
            }),
            p = d => {
               o("clickMenu", { type: d, gameMenu: v.value[d] });
            };
         return (
            s({ handleClickMenu: p }),
            (d, i) => {
               var r, g, m, $, y, C, f, b;
               const _ = Te("lazy");
               return (
                  n(),
                  a("div", YB, [
                     e("div", QB, [e("div", { onClick: i[0] || (i[0] = T => p("popular")) }, [te(e("img", eN, null, 512), [[_, (r = v.value.popular) == null ? void 0 : r.img]]), e("span", null, t(d.$t("hot")), 1)]), e("div", { onClick: i[1] || (i[1] = T => p("lottery")) }, [te(e("img", tN, null, 512), [[_, (g = v.value.lottery) == null ? void 0 : g.img]]), e("span", null, t(d.$t("lottery")), 1)]), e("div", { onClick: i[2] || (i[2] = T => p("slot")) }, [te(e("img", sN, null, 512), [[_, (m = v.value.slot) == null ? void 0 : m.img]]), e("span", null, t(d.$t("electronic")), 1)])]),
                     e("div", nN, [e("div", { onClick: i[3] || (i[3] = T => p("sport")) }, [te(e("img", aN, null, 512), [[_, ($ = v.value.sport) == null ? void 0 : $.img]]), e("span", null, t(d.$t("sport")), 1)]), e("div", { onClick: i[4] || (i[4] = T => p("video")), class: "live_menu" }, [te(e("img", oN, null, 512), [[_, (y = v.value.video) == null ? void 0 : y.img]]), e("span", null, t(d.$t("live")), 1)]), e("div", { onClick: i[5] || (i[5] = T => p("chess")) }, [te(e("img", lN, null, 512), [[_, (C = v.value.chess) == null ? void 0 : C.img]]), e("span", null, t(d.$t("chess")), 1)])]),
                     e("div", iN, [e("div", { onClick: i[6] || (i[6] = T => p("fish")) }, [te(e("img", cN, null, 512), [[_, (f = v.value.fish) == null ? void 0 : f.img]]), e("span", null, t(d.$t("fishing")), 1)]), e("div", { onClick: i[7] || (i[7] = T => p("flash")) }, [te(e("img", uN, null, 512), [[_, (b = v.value.flash) == null ? void 0 : b.img]]), e("span", null, t(d.$t("miniGame")), 1)])]),
                  ])
               );
            }
         );
      },
   });
const dN = H(rN, [["__scopeId", "data-v-8233a8f0"]]),
   _N = { class: "content" },
   vN = ["src"],
   pN = { class: "content__right" },
   mN = { class: "promptHeader" },
   gN = ["innerHTML"],
   hN = { class: "Laundry-Con" },
   yN = { class: "Laundry-Con_tip" },
   fN = { class: "Landty-Con-tips" },
   bN = V({
      __name: "blueHome",
      setup(l) {
         const { t: s } = _e(),
            o = ue(),
            { setLoading: u } = Jt(),
            { closeLaundry: v, closePrompt: p, store: d, promptContent: i } = fs();
         u(!0);
         const _ = k(""),
            r = k(),
            g = ze([]),
            m = Nt(() => Rt(() => import("./messageIcon-648b7258.js"), ["assets/js/messageIcon-648b7258.js", "assets/js/page-activity-6d456111.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/native/index-3d731397.js", "assets/js/en-53bf8069.js", "assets/js/rus-ecb14220.js", "assets/js/vi-60d1c3eb.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-38f5b166.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-dbcb2394.js", "assets/js/ar-78aaffbf.js", "assets/css/page-activity-9da3f4e3.css"])),
            $ = k();
         function y() {
            o.push({ name: "Messages" });
         }
         const { onDown: C, isAppDownload: f, isAppDownloadIcon: b, showChanglong: T, projectIcon: h, isRead: w, getMessagesData: I, showPWA: x, getGameType: S, homeState: G, getAllGame: R } = Ue(),
            O = () => {
               v(), o.push({ name: "SuperJackpot" });
            },
            P = ie => {
               let ne = document.getElementById("banner"),
                  z = document.getElementById("noticeBar"),
                  X = ne == null ? void 0 : ne.offsetHeight,
                  ce = z == null ? void 0 : z.offsetHeight;
               W(X + ce + 20), sessionStorage.setItem("clickMenu", ie.type), ($.value = g.find(Ne => Ne.gameType === ie.type));
            };
         function W(ie) {
            window.scrollTo({ top: ie, behavior: "smooth" });
         }
         const J = async () => {
               await le(), await R();
               const ie = Ns(G.allGameList);
               g.forEach(z => {
                  z.gameType !== "bigaward" && (z.gameType === "popular" ? (z.gameList = [ie[z.gameType].platformList, ie[z.gameType].clicksTopList]) : (z.gameList = ie[z.gameType]), z.gameList.length < 1 && (z.isShow = !1));
               });
               let ne = sessionStorage.getItem("clickMenu") || "";
               ne ? ((_.value = ne), ($.value = g.find(z => z.gameType === ne))) : ((_.value = g[0].gameType), ($.value = g[0])), sessionStorage.setItem("allGameList", JSON.stringify(g));
            },
            le = async () => {
               await S(),
                  G.gameTypeList.forEach(ie => {
                     ie.categoryCode !== "BigAward" && g.push({ isAll: !1, img: ie.categoryImg, isShow: ie.state === 1, gameList: [], gameType: ie.categoryCode.toLocaleLowerCase(), title: s("code" + ie.typeNameCode) });
                  });
            };
         return (
            J(),
            I(),
            he(() => {
               u(!1);
            }),
            (ie, ne) => {
               const z = U("svg-icon"),
                  X = U("NavBar"),
                  ce = U("van-dialog");
               return (
                  n(),
                  a("div", _N, [
                     L(X, null, { left: A(() => [e("img", { src: c(h), alt: "" }, null, 8, vN)]), right: A(() => [e("div", pN, [e("div", { class: "message", onClick: y }, [(n(), Z(ft(c(m)))), te(L(As, { class: "point" }, null, 512), [[He, !c(w)]])]), c(f) ? (n(), Z(z, { key: 0, onClick: ut(c(C), ["stop"]), name: "down", color: "#fff", class: "down" }, null, 8, ["onClick"])) : B("", !0)])]), _: 1 }),
                     L(Ls),
                     L(Yt, { key: "home", color: "blue" }),
                     L(dN, { onClickMenu: P, ref_key: "gameMenuRef", ref: r, allGameList: g }, null, 8, ["allGameList"]),
                     $.value ? (n(), Z(JB, { key: 0, gameData: $.value }, null, 8, ["gameData"])) : B("", !0),
                     L(en),
                     L(tn),
                     c(T) ? (n(), Z(os, { key: 1 })) : B("", !0),
                     c(x) && c(b) ? (n(), Z(Is, { key: 2 })) : B("", !0),
                     L(Ms),
                     L(ce, { show: c(d).prompt, "onUpdate:show": ne[0] || (ne[0] = Ne => (c(d).prompt = Ne)), "confirm-button-text": c(s)("confirm"), onConfirm: c(p) }, { default: A(() => [e("div", mN, t(c(s)("prompt")), 1), e("div", { class: "promptContent", innerHTML: c(i) }, null, 8, gN)]), _: 1 }, 8, ["show", "confirm-button-text", "onConfirm"]),
                     L(ws, { show: c(d).laundry, "onUpdate:show": ne[1] || (ne[1] = Ne => (c(d).laundry = Ne)), onConfirm: O, "show-cancel-btn": !1, confirmText: "OK", title: c(s)("congratulations") }, { content: A(() => [e("div", hN, [e("div", yN, t(c(s)("getSuper")), 1), e("div", fN, t(c(s)("getRewards")), 1)])]), _: 1 }, 8, ["show", "title"]),
                  ])
               );
            }
         );
      },
   });
const $N = H(bN, [["__scopeId", "data-v-9d56470e"]]),
   HV = Object.freeze(Object.defineProperty({ __proto__: null, default: $N }, Symbol.toStringTag, { value: "Module" })),
   CN = { class: "settingPanel__container" },
   kN = { class: "settingPanel__container-items" },
   TN = ["onClick"],
   wN = { class: "settingPanel__container-items__title" },
   LN = ["src"],
   IN = { class: "settingPanel__container-items-right" },
   SN = V({
      __name: "index",
      props: { type: { type: String, default: "default" } },
      setup(l) {
         const s = l,
            { t: o } = _e(),
            u = ue(),
            v = rt(),
            p = je(),
            d = q(() => v.userInfo),
            i = q(() => p.getIsCanAppDownload),
            _ = q(() =>
               s.type !== "default"
                  ? [{ icon: "languageIcon", title: o("switchLanguages"), link: "Language", isopen: "1" }, { icon: "notificationCenter", title: o("noti"), link: "Notification", isopen: "1" }, { icon: "serviceCenter", title: o("wholeTimeService"), link: "CustomerService", isopen: "1" }, { icon: "guide", title: o("guide"), link: "Guide", isopen: "1" }, { icon: "about", title: o("about"), link: "About", isopen: "1" }, i.value && { icon: "down", title: o("downloadAPP"), link: "", isopen: 1 }].filter(Boolean)
                  : [
                       { icon: "notifyIcon", title: o("notifications"), link: "Messages", isopen: "1" },
                       { icon: "inviteIcon", title: o("invitationBonus"), link: "InvitationBonus", isopen: d.value.isTaskState, haspermission: 15 },
                       { icon: "giftIcon", title: o("giftExchange"), link: "RedeemGift", isopen: "1" },
                       { icon: "cps", title: o("cpsTip6"), link: "MyCps", isopen: d.value.isOpenChampion },
                       { icon: "orderIcon", title: o("productOrder"), link: "PointMall-MyOrders", isopen: d.value.isOpenPointMall },
                       { icon: "laundryIcon", title: o("laundryAmount"), link: "Laundry", isopen: d.value.isOpenWashCode },
                       { icon: "mylottery", title: o("MyLottery"), link: "PointMall-MyLottery", isopen: d.value.isOpenPointMall },
                       { icon: "statsIcon", title: o("gameStatistics"), link: "GameStats", isopen: "1", haspermission: 17 },
                       { icon: "superIcon", title: o("superjackpot"), link: "SuperJackpot", isopen: d.value.isOpenJackpotReward },
                       { icon: "languageIcon", title: o("switchLanguages"), link: "Language", isopen: "1" },
                    ],
            );
         async function r() {
            const m = await de(qa());
            if (m) {
               let $ = navigator.userAgent.toLowerCase(),
                  y = "";
               $.indexOf("windows") != -1 || $.indexOf("android") != -1 ? (y = m.data.androidUrl) : $.indexOf("iphone") != -1 || $.indexOf("mac") != -1 || $.indexOf("ipad") != -1 ? (y = m.data.iosUrl) : (y = m.data.androidUrl), Gn(y);
            }
         }
         async function g(m) {
            if (m.icon === "down") return r();
            u.push({ name: m.link });
         }
         return (m, $) => {
            const y = U("van-icon"),
               C = Te("haspermission");
            return (
               n(),
               a("div", CN, [
                  e("div", kN, [
                     (n(!0),
                     a(
                        N,
                        null,
                        D(_.value, f => {
                           var b, T;
                           return te((n(), a("div", { key: f.title, onClick: h => g(f), class: "settingPanel__container-items__item ar-1px-b" }, [e("div", wN, [e("img", { src: c(pe)("main", `${f.icon}`) }, null, 8, LN), e("span", null, t(f.title), 1)]), e("div", IN, [te(e("h5", null, t((b = d.value) == null ? void 0 : b.unRead), 513), [[He, f.icon === "notifyIcon" && ((T = d.value) == null ? void 0 : T.unRead) > 0]]), te(e("span", null, t(c(v).getLanguageName), 513), [[He, f.icon === "languageIcon"]]), L(y, { name: "arrow", color: "hsl(0 0% 62% / 1)" })])], 8, TN)), [
                              [He, f.isopen == "1"],
                              [C, f.haspermission],
                           ]);
                        }),
                        128,
                     )),
                  ]),
               ])
            );
         };
      },
   });
const GN = H(SN, [["__scopeId", "data-v-8de4bcb0"]]),
   Vn = l => (ye("data-v-af62fe0b"), (l = l()), fe(), l),
   xN = { class: "terms" },
   BN = { class: "terms-logo" },
   NN = { class: "terms-logo-left" },
   RN = ["src"],
   MN = Dt(
      '<span class="terms-logo-service" data-v-af62fe0b><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-af62fe0b><circle cx="35" cy="35" r="33" stroke="url(#paint0_linear_84_6311)" stroke-width="4" data-v-af62fe0b></circle><path d="M25.3809 33.7041V36.8906H12.7109V33.7041H25.3809ZM20.7852 28.6895V42.1465H17.3193V28.6895H20.7852ZM36.3496 25.4775V44H32.6934V29.6924L28.3008 31.0889V28.207L35.9561 25.4775H36.3496ZM54.8213 38.9346C54.8213 40.0941 54.5505 41.0716 54.0088 41.8672C53.4671 42.6543 52.7223 43.251 51.7744 43.6572C50.835 44.055 49.7686 44.2539 48.5752 44.2539C47.3818 44.2539 46.3112 44.055 45.3633 43.6572C44.4154 43.251 43.6663 42.6543 43.1162 41.8672C42.5661 41.0716 42.291 40.0941 42.291 38.9346C42.291 38.1559 42.4476 37.4535 42.7607 36.8271C43.0739 36.1924 43.5098 35.6507 44.0684 35.2021C44.6354 34.7451 45.2998 34.3981 46.0615 34.1611C46.8232 33.9157 47.6527 33.793 48.5498 33.793C49.7516 33.793 50.8265 34.0046 51.7744 34.4277C52.7223 34.8509 53.4671 35.4476 54.0088 36.2178C54.5505 36.988 54.8213 37.8936 54.8213 38.9346ZM51.1396 38.6934C51.1396 38.1263 51.0296 37.6396 50.8096 37.2334C50.598 36.8187 50.2975 36.5013 49.9082 36.2812C49.5189 36.0612 49.0661 35.9512 48.5498 35.9512C48.0335 35.9512 47.5807 36.0612 47.1914 36.2812C46.8021 36.5013 46.4974 36.8187 46.2773 37.2334C46.0658 37.6396 45.96 38.1263 45.96 38.6934C45.96 39.252 46.0658 39.7344 46.2773 40.1406C46.4974 40.5469 46.8021 40.86 47.1914 41.0801C47.5892 41.2917 48.0505 41.3975 48.5752 41.3975C49.0999 41.3975 49.5527 41.2917 49.9336 41.0801C50.3229 40.86 50.6191 40.5469 50.8223 40.1406C51.0339 39.7344 51.1396 39.252 51.1396 38.6934ZM54.4277 30.416C54.4277 31.3555 54.1781 32.1891 53.6787 32.917C53.1794 33.6364 52.4854 34.1992 51.5967 34.6055C50.7165 35.0117 49.7093 35.2148 48.5752 35.2148C47.4326 35.2148 46.417 35.0117 45.5283 34.6055C44.6396 34.1992 43.9456 33.6364 43.4463 32.917C42.9469 32.1891 42.6973 31.3555 42.6973 30.416C42.6973 29.2988 42.9469 28.3594 43.4463 27.5977C43.9541 26.8275 44.6481 26.2435 45.5283 25.8457C46.417 25.4479 47.4242 25.249 48.5498 25.249C49.6924 25.249 50.7038 25.4479 51.584 25.8457C52.4727 26.2435 53.1667 26.8275 53.666 27.5977C54.1738 28.3594 54.4277 29.2988 54.4277 30.416ZM50.7715 30.5811C50.7715 30.0817 50.6826 29.6501 50.5049 29.2861C50.3271 28.9137 50.0732 28.626 49.7432 28.4229C49.4215 28.2197 49.0238 28.1182 48.5498 28.1182C48.0928 28.1182 47.6992 28.2155 47.3691 28.4102C47.0475 28.6048 46.7979 28.8883 46.6201 29.2607C46.4508 29.6247 46.3662 30.0648 46.3662 30.5811C46.3662 31.0804 46.4508 31.5205 46.6201 31.9014C46.7979 32.2738 47.0518 32.5658 47.3818 32.7773C47.7119 32.9889 48.1097 33.0947 48.5752 33.0947C49.0407 33.0947 49.4342 32.9889 49.7559 32.7773C50.0859 32.5658 50.3356 32.2738 50.5049 31.9014C50.6826 31.5205 50.7715 31.0804 50.7715 30.5811Z" fill="url(#paint1_linear_84_6311)" data-v-af62fe0b></path><defs data-v-af62fe0b><linearGradient id="paint0_linear_84_6311" x1="35" y1="0" x2="35" y2="70" gradientUnits="userSpaceOnUse" data-v-af62fe0b><stop stop-color="#FA2221" data-v-af62fe0b></stop><stop offset="1" stop-color="#FA5121" data-v-af62fe0b></stop></linearGradient><linearGradient id="paint1_linear_84_6311" x1="34.5" y1="20" x2="34.5" y2="50" gradientUnits="userSpaceOnUse" data-v-af62fe0b><stop stop-color="#FA2221" data-v-af62fe0b></stop><stop offset="1" stop-color="#FA5121" data-v-af62fe0b></stop></linearGradient></defs></svg></span>',
      1,
   ),
   DN = ["onClick"],
   AN = { alt: "" },
   PN = { class: "terms-icons" },
   ON = Dt(
      '<path d="M0 10C0 4.47715 4.47715 0 10 0H200C205.523 0 210 4.47715 210 10V70C210 75.5229 205.523 80 200 80H10C4.47715 80 0 75.5229 0 70V10Z" fill="#F6F6F6" data-v-af62fe0b></path><path d="M94.4333 42.2315C94.4755 42.7398 94.527 43.235 94.5773 43.7186C94.8659 46.4927 95.115 48.8876 93.3547 51.2112C88.1097 57.7135 81.1033 59.6642 74.6691 59.6642C63.8062 59.6642 55 50.9306 55 40.1572C55 29.3838 63.8062 20.6502 74.6691 20.6502C80.1533 20.6502 85.5259 23.5619 89.0931 27.1526C88.1097 28.453 86.4706 30.0786 85.7784 31.0327C83.1327 27.8679 79.1382 25.8521 74.6691 25.8521C66.7029 25.8521 60.2451 32.2567 60.2451 40.1572C60.2451 48.0577 66.7029 54.4624 74.6691 54.4624C79.1482 54.4624 85.0555 53.0479 89.0931 48.6103C90.868 46.6596 90.6807 46.1078 90.7322 45.3591C92.3672 44.038 93.1977 42.9202 94.4333 42.2315Z" fill="url(#paint0_linear_84_6465)" data-v-af62fe0b></path><path fill-rule="evenodd" clip-rule="evenodd" d="M109.418 59.6642C120.281 59.6642 129.087 50.9306 129.087 40.1572C129.087 29.3838 120.281 20.6502 109.418 20.6502C98.5549 20.6502 89.7487 29.3838 89.7487 40.1572C89.7487 50.9306 98.5549 59.6642 109.418 59.6642ZM109.418 54.4624C117.384 54.4624 123.842 48.0577 123.842 40.1572C123.842 32.2567 117.384 25.8521 109.418 25.8521C101.452 25.8521 94.9938 32.2567 94.9938 40.1572C94.9938 48.0577 101.452 54.4624 109.418 54.4624Z" fill="url(#paint1_linear_84_6465)" data-v-af62fe0b></path><path fill-rule="evenodd" clip-rule="evenodd" d="M148.756 51.2112C157.446 51.2112 164.491 44.2243 164.491 35.6056C164.491 26.9869 157.446 20 148.756 20C140.066 20 133.021 26.9869 133.021 35.6056C133.021 44.2243 140.066 51.2112 148.756 51.2112ZM148.756 46.0093C154.55 46.0093 159.246 41.3514 159.246 35.6056C159.246 29.8598 154.55 25.2019 148.756 25.2019C142.962 25.2019 138.266 29.8598 138.266 35.6056C138.266 41.3514 142.962 46.0093 148.756 46.0093Z" fill="url(#paint2_linear_84_6465)" data-v-af62fe0b></path><path d="M109.418 42.433C104.173 42.433 100.02 42.9749 98.5998 43.4084C98.9277 44.7089 100.567 48.6103 100.567 48.6103C100.567 48.6103 115.59 45.496 123.842 51.8614C135.643 60.9647 145.478 60.3145 149.412 59.6642C153.346 59.014 158.918 57.0633 162.197 50.8861C165.475 44.7089 164.491 35.6056 164.491 35.6056H162.197L157.607 47.96C157.935 49.5856 153.214 53.9422 146.134 54.4624C137.282 55.1126 132.742 51.0323 127.448 47.6349C121.875 44.0586 115.974 42.433 109.418 42.433Z" fill="url(#paint3_linear_84_6465)" data-v-af62fe0b></path><defs data-v-af62fe0b><linearGradient id="paint0_linear_84_6465" x1="109.815" y1="20" x2="109.815" y2="60" gradientUnits="userSpaceOnUse" data-v-af62fe0b><stop stop-color="#FFC908" data-v-af62fe0b></stop><stop offset="1" stop-color="#F57A1F" data-v-af62fe0b></stop></linearGradient><linearGradient id="paint1_linear_84_6465" x1="109.815" y1="20" x2="109.815" y2="60" gradientUnits="userSpaceOnUse" data-v-af62fe0b><stop stop-color="#FFC908" data-v-af62fe0b></stop><stop offset="1" stop-color="#F57A1F" data-v-af62fe0b></stop></linearGradient><linearGradient id="paint2_linear_84_6465" x1="109.815" y1="20" x2="109.815" y2="60" gradientUnits="userSpaceOnUse" data-v-af62fe0b><stop stop-color="#FFC908" data-v-af62fe0b></stop><stop offset="1" stop-color="#F57A1F" data-v-af62fe0b></stop></linearGradient><linearGradient id="paint3_linear_84_6465" x1="109.815" y1="20" x2="109.815" y2="60" gradientUnits="userSpaceOnUse" data-v-af62fe0b><stop stop-color="#FFC908" data-v-af62fe0b></stop><stop offset="1" stop-color="#F57A1F" data-v-af62fe0b></stop></linearGradient></defs>',
      6,
   ),
   VN = [ON],
   WN = Dt(
      '<path d="M0 10C0 4.47715 4.47715 0 10 0H200C205.523 0 210 4.47715 210 10V70C210 75.5229 205.523 80 200 80H10C4.47715 80 0 75.5229 0 70V10Z" fill="#F6F6F6" data-v-af62fe0b></path><path fill-rule="evenodd" clip-rule="evenodd" d="M105 47C115.493 47 124 38.4934 124 28C124 17.5066 115.493 9 105 9C94.5066 9 86 17.5066 86 28C86 29.9874 86.3051 31.9034 86.8711 33.704C86.8777 33.6928 86.8845 33.6819 86.8915 33.6713C89.1199 30.9738 92.9341 25.5392 94.2804 23.1158C96.0397 19.9491 97.7989 16.196 98.5026 14.6713C98.7372 14.2022 99.4878 12.9824 100.614 13.2638C101.679 13.5302 101.673 15.0059 101.67 15.9278C101.67 15.98 101.669 16.0304 101.669 16.0787C101.669 17.4079 101.628 19.0014 101.583 20.7098C101.403 27.5937 101.173 36.344 103.429 37.1898C104.902 37.7424 109.761 29.0971 111.872 22.4119C111.891 22.354 111.91 22.2961 111.929 22.2384C112.257 21.2437 112.568 20.301 113.632 20.301C114.544 20.301 114.671 21.2235 114.872 22.6953C114.92 23.0413 114.972 23.4175 115.038 23.8193C115.062 23.9613 115.087 24.1177 115.115 24.2865C115.493 26.6278 116.26 31.3739 118.557 33.6712C119.801 34.9151 119.964 36.1341 117.15 34.023C116.68 33.6712 115.038 32.2637 114.335 29.4489C113.631 26.6341 113.069 26.9858 112.929 27.6897C112.577 29.4489 107.651 40.3565 103.78 40.3565C98.244 40.3565 98.6229 31.2148 98.8059 26.7988C98.8322 26.1631 98.8545 25.6254 98.8545 25.2269C98.8545 22.0602 97.0952 25.2269 96.0397 27.338C95.9066 27.6041 95.7245 27.9804 95.5041 28.4357C94.0796 31.3783 91.057 37.6226 89.3523 38.7803C92.7798 43.7459 98.5099 47 105 47Z" fill="url(#paint0_linear_84_6488)" data-v-af62fe0b></path><path d="M33.1136 51.5455H35.6364L41.5682 66.0341H41.7727L47.7045 51.5455H50.2273V69H48.25V55.7386H48.0795L42.625 69H40.7159L35.2614 55.7386H35.0909V69H33.1136V51.5455ZM54.1925 69V55.9091H56.2038V69H54.1925ZM55.2152 53.7273C54.8232 53.7273 54.4851 53.5938 54.201 53.3267C53.9226 53.0597 53.7834 52.7386 53.7834 52.3636C53.7834 51.9886 53.9226 51.6676 54.201 51.4006C54.4851 51.1335 54.8232 51 55.2152 51C55.6072 51 55.9425 51.1335 56.2209 51.4006C56.505 51.6676 56.647 51.9886 56.647 52.3636C56.647 52.7386 56.505 53.0597 56.2209 53.3267C55.9425 53.5938 55.6072 53.7273 55.2152 53.7273ZM65.206 69.2727C63.9787 69.2727 62.9219 68.983 62.0355 68.4034C61.1491 67.8239 60.4673 67.0256 59.9901 66.0085C59.5128 64.9915 59.2741 63.8295 59.2741 62.5227C59.2741 61.1932 59.5185 60.0199 60.0071 59.0028C60.5014 57.9801 61.1889 57.1818 62.0696 56.608C62.956 56.0284 63.9901 55.7386 65.1719 55.7386C66.0923 55.7386 66.9219 55.9091 67.6605 56.25C68.3991 56.5909 69.0043 57.0682 69.4759 57.6818C69.9474 58.2955 70.2401 59.0114 70.3537 59.8295H68.3423C68.1889 59.233 67.848 58.7045 67.3196 58.2443C66.7969 57.7784 66.0923 57.5455 65.206 57.5455C64.4219 57.5455 63.7344 57.75 63.1435 58.1591C62.5582 58.5625 62.1009 59.1335 61.7713 59.8722C61.4474 60.6051 61.2855 61.4659 61.2855 62.4545C61.2855 63.4659 61.4446 64.3466 61.7628 65.0966C62.0866 65.8466 62.5412 66.429 63.1264 66.8438C63.7173 67.2585 64.4105 67.4659 65.206 67.4659C65.7287 67.4659 66.2031 67.375 66.6293 67.1932C67.0554 67.0114 67.4162 66.75 67.7116 66.4091C68.0071 66.0682 68.2173 65.6591 68.3423 65.1818H70.3537C70.2401 65.9545 69.9588 66.6506 69.5099 67.2699C69.0668 67.8835 68.4787 68.3722 67.7457 68.7358C67.0185 69.0938 66.1719 69.2727 65.206 69.2727ZM73.294 69V55.9091H75.2372V57.8864H75.3736C75.6122 57.2386 76.044 56.7131 76.669 56.3097C77.294 55.9062 77.9986 55.7045 78.7827 55.7045C78.9304 55.7045 79.1151 55.7074 79.3366 55.7131C79.5582 55.7187 79.7259 55.7273 79.8395 55.7386V57.7841C79.7713 57.767 79.6151 57.7415 79.3707 57.7074C79.1321 57.6676 78.8793 57.6477 78.6122 57.6477C77.9759 57.6477 77.4077 57.7812 76.9077 58.0483C76.4134 58.3097 76.0213 58.6733 75.7315 59.1392C75.4474 59.5994 75.3054 60.125 75.3054 60.7159V69H73.294ZM87.1435 69.2727C85.9616 69.2727 84.9247 68.9915 84.0327 68.429C83.1463 67.8665 82.4531 67.0795 81.9531 66.0682C81.4588 65.0568 81.2116 63.875 81.2116 62.5227C81.2116 61.1591 81.4588 59.9687 81.9531 58.9517C82.4531 57.9347 83.1463 57.1449 84.0327 56.5824C84.9247 56.0199 85.9616 55.7386 87.1435 55.7386C88.3253 55.7386 89.3594 56.0199 90.2457 56.5824C91.1378 57.1449 91.831 57.9347 92.3253 58.9517C92.8253 59.9687 93.0753 61.1591 93.0753 62.5227C93.0753 63.875 92.8253 65.0568 92.3253 66.0682C91.831 67.0795 91.1378 67.8665 90.2457 68.429C89.3594 68.9915 88.3253 69.2727 87.1435 69.2727ZM87.1435 67.4659C88.0412 67.4659 88.7798 67.2358 89.3594 66.7756C89.9389 66.3153 90.3679 65.7102 90.6463 64.9602C90.9247 64.2102 91.0639 63.3977 91.0639 62.5227C91.0639 61.6477 90.9247 60.8324 90.6463 60.0767C90.3679 59.321 89.9389 58.7102 89.3594 58.2443C88.7798 57.7784 88.0412 57.5455 87.1435 57.5455C86.2457 57.5455 85.5071 57.7784 84.9276 58.2443C84.348 58.7102 83.919 59.321 83.6406 60.0767C83.3622 60.8324 83.223 61.6477 83.223 62.5227C83.223 63.3977 83.3622 64.2102 83.6406 64.9602C83.919 65.7102 84.348 66.3153 84.9276 66.7756C85.5071 67.2358 86.2457 67.4659 87.1435 67.4659ZM101.43 74.1818C100.458 74.1818 99.6229 74.0568 98.924 73.8068C98.2251 73.5625 97.6428 73.2386 97.1768 72.8352C96.7166 72.4375 96.3501 72.0114 96.0774 71.5568L97.6797 70.4318C97.8615 70.6705 98.0916 70.9432 98.37 71.25C98.6484 71.5625 99.0291 71.8324 99.5121 72.0597C100.001 72.2926 100.64 72.4091 101.43 72.4091C102.487 72.4091 103.359 72.1534 104.046 71.642C104.734 71.1307 105.077 70.3295 105.077 69.2386V66.5795H104.907C104.759 66.8182 104.549 67.1136 104.276 67.4659C104.009 67.8125 103.623 68.1222 103.117 68.3949C102.617 68.6619 101.941 68.7955 101.089 68.7955C100.032 68.7955 99.0831 68.5455 98.2422 68.0455C97.407 67.5455 96.745 66.8182 96.2564 65.8636C95.7734 64.9091 95.532 63.75 95.532 62.3864C95.532 61.0455 95.7678 59.8778 96.2393 58.8835C96.7109 57.8835 97.3672 57.1108 98.2081 56.5653C99.049 56.0142 100.021 55.7386 101.123 55.7386C101.975 55.7386 102.651 55.8807 103.151 56.1648C103.657 56.4432 104.043 56.7614 104.31 57.1193C104.583 57.4716 104.793 57.7614 104.941 57.9886H105.146V55.9091H107.089V69.375C107.089 70.5 106.833 71.4148 106.322 72.1193C105.816 72.8295 105.134 73.3494 104.276 73.679C103.424 74.0142 102.475 74.1818 101.43 74.1818ZM101.362 66.9886C102.168 66.9886 102.85 66.804 103.407 66.4347C103.964 66.0653 104.387 65.5341 104.677 64.8409C104.967 64.1477 105.112 63.3182 105.112 62.3523C105.112 61.4091 104.969 60.5767 104.685 59.8551C104.401 59.1335 103.981 58.5682 103.424 58.1591C102.867 57.75 102.18 57.5455 101.362 57.5455C100.509 57.5455 99.799 57.7614 99.2308 58.1932C98.6683 58.625 98.245 59.2045 97.9609 59.9318C97.6825 60.6591 97.5433 61.4659 97.5433 62.3523C97.5433 63.2614 97.6854 64.0653 97.9695 64.7642C98.2592 65.4574 98.6854 66.0028 99.2479 66.4006C99.8161 66.7926 100.521 66.9886 101.362 66.9886ZM114.623 69.3068C113.793 69.3068 113.04 69.1506 112.364 68.8381C111.688 68.5199 111.151 68.0625 110.754 67.4659C110.356 66.8636 110.157 66.1364 110.157 65.2841C110.157 64.5341 110.305 63.9261 110.6 63.4602C110.896 62.9886 111.29 62.6193 111.785 62.3523C112.279 62.0852 112.825 61.8864 113.421 61.7557C114.023 61.6193 114.629 61.5114 115.237 61.4318C116.032 61.3295 116.677 61.2528 117.171 61.2017C117.671 61.1449 118.035 61.0511 118.262 60.9205C118.495 60.7898 118.612 60.5625 118.612 60.2386V60.1705C118.612 59.3295 118.381 58.6761 117.921 58.2102C117.467 57.7443 116.776 57.5114 115.85 57.5114C114.89 57.5114 114.137 57.7216 113.592 58.142C113.046 58.5625 112.663 59.0114 112.441 59.4886L110.532 58.8068C110.873 58.0114 111.327 57.392 111.896 56.9489C112.469 56.5 113.094 56.1875 113.771 56.0114C114.452 55.8295 115.123 55.7386 115.782 55.7386C116.202 55.7386 116.685 55.7898 117.231 55.892C117.782 55.9886 118.313 56.1903 118.825 56.4972C119.342 56.804 119.771 57.267 120.112 57.8864C120.452 58.5057 120.623 59.3352 120.623 60.375V69H118.612V67.2273H118.509C118.373 67.5114 118.146 67.8153 117.827 68.1392C117.509 68.4631 117.086 68.7386 116.558 68.9659C116.029 69.1932 115.384 69.3068 114.623 69.3068ZM114.93 67.5C115.725 67.5 116.396 67.3438 116.941 67.0312C117.492 66.7188 117.907 66.3153 118.185 65.821C118.469 65.3267 118.612 64.8068 118.612 64.2614V62.4205C118.526 62.5227 118.339 62.6165 118.049 62.7017C117.765 62.7812 117.435 62.8523 117.06 62.9148C116.691 62.9716 116.33 63.0227 115.978 63.0682C115.631 63.108 115.35 63.142 115.134 63.1705C114.612 63.2386 114.123 63.3494 113.668 63.5028C113.219 63.6506 112.856 63.875 112.577 64.1761C112.305 64.4716 112.168 64.875 112.168 65.3864C112.168 66.0852 112.427 66.6136 112.944 66.9716C113.467 67.3239 114.129 67.5 114.93 67.5ZM124.294 69V55.9091H126.237V57.9545H126.408C126.68 57.2557 127.121 56.7131 127.729 56.3267C128.337 55.9347 129.067 55.7386 129.919 55.7386C130.783 55.7386 131.501 55.9347 132.075 56.3267C132.655 56.7131 133.107 57.2557 133.43 57.9545H133.567C133.902 57.2784 134.405 56.7415 135.075 56.3438C135.746 55.9403 136.55 55.7386 137.487 55.7386C138.658 55.7386 139.615 56.1051 140.359 56.8381C141.104 57.5653 141.476 58.6989 141.476 60.2386V69H139.464V60.2386C139.464 59.2727 139.2 58.5824 138.672 58.1676C138.143 57.7528 137.521 57.5455 136.805 57.5455C135.885 57.5455 135.172 57.8239 134.666 58.3807C134.161 58.9318 133.908 59.6307 133.908 60.4773V69H131.862V60.0341C131.862 59.2898 131.621 58.6903 131.138 58.2358C130.655 57.7756 130.033 57.5455 129.271 57.5455C128.749 57.5455 128.26 57.6847 127.805 57.9631C127.357 58.2415 126.993 58.6278 126.714 59.1222C126.442 59.6108 126.305 60.1761 126.305 60.8182V69H124.294ZM145.153 69V55.9091H147.165V69H145.153ZM146.176 53.7273C145.784 53.7273 145.446 53.5938 145.162 53.3267C144.884 53.0597 144.744 52.7386 144.744 52.3636C144.744 51.9886 144.884 51.6676 145.162 51.4006C145.446 51.1335 145.784 51 146.176 51C146.568 51 146.903 51.1335 147.182 51.4006C147.466 51.6676 147.608 51.9886 147.608 52.3636C147.608 52.7386 147.466 53.0597 147.182 53.3267C146.903 53.5938 146.568 53.7273 146.176 53.7273ZM152.86 61.125V69H150.849V55.9091H152.792V57.9545H152.962C153.269 57.2898 153.735 56.7557 154.36 56.3523C154.985 55.9432 155.792 55.7386 156.781 55.7386C157.667 55.7386 158.442 55.9205 159.107 56.2841C159.772 56.642 160.289 57.1875 160.658 57.9205C161.028 58.6477 161.212 59.5682 161.212 60.6818V69H159.201V60.8182C159.201 59.7898 158.934 58.9886 158.4 58.4148C157.866 57.8352 157.133 57.5455 156.201 57.5455C155.559 57.5455 154.985 57.6847 154.479 57.9631C153.979 58.2415 153.585 58.6477 153.295 59.1818C153.005 59.7159 152.86 60.3636 152.86 61.125ZM170.172 74.1818C169.2 74.1818 168.365 74.0568 167.666 73.8068C166.967 73.5625 166.385 73.2386 165.919 72.8352C165.459 72.4375 165.092 72.0114 164.82 71.5568L166.422 70.4318C166.604 70.6705 166.834 70.9432 167.112 71.25C167.391 71.5625 167.771 71.8324 168.254 72.0597C168.743 72.2926 169.382 72.4091 170.172 72.4091C171.229 72.4091 172.101 72.1534 172.788 71.642C173.476 71.1307 173.82 70.3295 173.82 69.2386V66.5795H173.649C173.501 66.8182 173.291 67.1136 173.018 67.4659C172.751 67.8125 172.365 68.1222 171.859 68.3949C171.359 68.6619 170.683 68.7955 169.831 68.7955C168.774 68.7955 167.825 68.5455 166.984 68.0455C166.149 67.5455 165.487 66.8182 164.999 65.8636C164.516 64.9091 164.274 63.75 164.274 62.3864C164.274 61.0455 164.51 59.8778 164.982 58.8835C165.453 57.8835 166.109 57.1108 166.95 56.5653C167.791 56.0142 168.763 55.7386 169.865 55.7386C170.717 55.7386 171.393 55.8807 171.893 56.1648C172.399 56.4432 172.786 56.7614 173.053 57.1193C173.325 57.4716 173.536 57.7614 173.683 57.9886H173.888V55.9091H175.831V69.375C175.831 70.5 175.575 71.4148 175.064 72.1193C174.558 72.8295 173.876 73.3494 173.018 73.679C172.166 74.0142 171.217 74.1818 170.172 74.1818ZM170.104 66.9886C170.911 66.9886 171.592 66.804 172.149 66.4347C172.706 66.0653 173.129 65.5341 173.419 64.8409C173.709 64.1477 173.854 63.3182 173.854 62.3523C173.854 61.4091 173.712 60.5767 173.428 59.8551C173.143 59.1335 172.723 58.5682 172.166 58.1591C171.609 57.75 170.922 57.5455 170.104 57.5455C169.251 57.5455 168.541 57.7614 167.973 58.1932C167.411 58.625 166.987 59.2045 166.703 59.9318C166.425 60.6591 166.286 61.4659 166.286 62.3523C166.286 63.2614 166.428 64.0653 166.712 64.7642C167.001 65.4574 167.428 66.0028 167.99 66.4006C168.558 66.7926 169.263 66.9886 170.104 66.9886Z" fill="url(#paint1_linear_84_6488)" data-v-af62fe0b></path><defs data-v-af62fe0b><linearGradient id="paint0_linear_84_6488" x1="113.5" y1="9" x2="103.5" y2="47" gradientUnits="userSpaceOnUse" data-v-af62fe0b><stop stop-color="#31B7E3" data-v-af62fe0b></stop><stop offset="1" stop-color="#22E124" data-v-af62fe0b></stop></linearGradient><linearGradient id="paint1_linear_84_6488" x1="33.9913" y1="60.7059" x2="174.581" y2="60.7059" gradientUnits="userSpaceOnUse" data-v-af62fe0b><stop stop-color="#31BAD9" data-v-af62fe0b></stop><stop offset="1" stop-color="#23E128" data-v-af62fe0b></stop></linearGradient></defs>',
      4,
   ),
   HN = [WN],
   zN = Dt(
      '<path d="M0 10C0 4.47715 4.47715 0 10 0H200C205.523 0 210 4.47715 210 10V70C210 75.5229 205.523 80 200 80H10C4.47715 80 0 75.5229 0 70V10Z" fill="#F6F6F6" data-v-af62fe0b></path><path d="M93.3413 15H78.4997L83.5947 22.1899L76.5052 51.1817C76.2837 51.8775 75.4873 54.2432 73.1835 56.2842C70.8797 58.3252 67.2025 57.2893 65.6518 56.5161C64.5434 58.1397 61 63.2422 61 63.2422C61 63.2422 66.8737 66.6818 74.734 63.938C79.3849 62.3145 83.1507 56.5161 84.0376 52.5733L93.3413 15Z" fill="url(#paint0_linear_84_6498)" data-v-af62fe0b></path><path fill-rule="evenodd" clip-rule="evenodd" d="M94.005 15.2319L139.194 15C142.295 15 148.719 18.0151 148.719 24.9732C148.719 30.3076 145.84 33.5547 144.289 34.4824L144.299 34.494C144.969 35.2733 146.504 37.0591 146.504 42.1362C146.504 48.3985 139.637 54.1968 132.77 54.1968H90.4607L98.6568 22.4219L94.005 15.2319ZM106.188 22.1899L99.9859 46.543L100.038 46.5475C102.71 46.7808 107.768 47.2223 112.169 44.6875C116.6 42.1362 121.03 35.874 120.808 29.6118C120.587 23.3496 115.713 22.1899 112.834 22.1899H106.188ZM135.733 38.1934H125.903C125.017 41.9042 121.916 45.3832 120.365 46.7748C123.335 46.7748 128.257 46.6593 131.155 46.5913L131.156 46.5913C132.364 46.563 133.22 46.5429 133.435 46.5429C135.207 46.543 139.43 45.1514 139.194 41.4404C139.017 38.6572 136.979 38.1935 135.733 38.1934ZM127.675 30.7715H136.619C138.087 30.7715 141.188 29.6118 141.188 26.3648C141.188 23.1177 139.263 22.1899 137.2 22.19C136.848 22.1901 135.237 22.19 133.191 22.19C130.997 22.19 128.303 22.1899 126.125 22.1899C127.011 23.8135 127.897 27.5244 127.675 30.7715Z" fill="url(#paint1_linear_84_6498)" data-v-af62fe0b></path><defs data-v-af62fe0b><linearGradient id="paint0_linear_84_6498" x1="144.5" y1="30.5" x2="83" y2="36.5" gradientUnits="userSpaceOnUse" data-v-af62fe0b><stop stop-color="#FF2E3B" data-v-af62fe0b></stop><stop offset="1" stop-color="#FFD200" data-v-af62fe0b></stop></linearGradient><linearGradient id="paint1_linear_84_6498" x1="144.5" y1="30.5" x2="83" y2="36.5" gradientUnits="userSpaceOnUse" data-v-af62fe0b><stop stop-color="#FF2E3B" data-v-af62fe0b></stop><stop offset="1" stop-color="#FFD200" data-v-af62fe0b></stop></linearGradient></defs>',
      4,
   ),
   EN = [zN],
   FN = Dt(
      '<path d="M0 10C0 4.47715 4.47715 0 10 0H200C205.523 0 210 4.47715 210 10V70C210 75.5229 205.523 80 200 80H10C4.47715 80 0 75.5229 0 70V10Z" fill="#F6F6F6" data-v-af62fe0b></path><path d="M48.1543 27.6648H66.1561V31.7176H52.8361V37.6336H61.707V41.6864H52.8361V48.296H66.5668V52.3488H48.1543V27.6648Z" fill="black" data-v-af62fe0b></path><path d="M66.1562 34.8047H70.9476L75.1366 47.0311L79.0245 34.8047H83.6653L77.2311 52.3487H72.9326L66.1562 34.8047Z" fill="black" data-v-af62fe0b></path><path d="M83.8154 43.6177C83.8154 38.2593 87.5527 34.4785 92.9053 34.4785C98.2169 34.4785 101.968 38.2729 101.968 43.6177C101.968 48.8945 98.1484 52.6889 92.7958 52.6889C87.4842 52.6889 83.8154 48.9625 83.8154 43.6177ZM97.2586 43.7265V43.5769C97.2586 40.2313 95.6159 38.2185 92.919 38.2185C90.1811 38.2185 88.5383 40.2313 88.5383 43.5769V43.7265C88.5383 47.0041 90.14 48.9353 92.8369 48.9353C95.5748 48.9353 97.2586 46.9905 97.2586 43.7265Z" fill="black" data-v-af62fe0b></path><path d="M104.966 27.3247H109.648V52.3487H104.966V27.3247Z" fill="black" data-v-af62fe0b></path><path d="M113.193 45.3175V34.8047H117.834V45.0591C117.834 47.3983 118.957 48.7719 121.051 48.7719C123.488 48.7719 124.501 46.7319 124.501 43.7127V34.8047H129.142V52.3487H124.501V49.8599C123.57 51.6823 121.955 52.6887 119.669 52.6887C115.671 52.6887 113.193 49.8599 113.193 45.3175Z" fill="black" data-v-af62fe0b></path><path d="M134.262 47.6976V38.5176H131.757V34.8048H134.262V31.4864L138.793 28.9568V34.7912H142.27V38.504H138.752V47.2352C138.752 48.092 139.163 48.4592 140.025 48.5H142.079V52.3352H138.492C135.083 52.1584 134.344 50.608 134.262 47.6976Z" fill="black" data-v-af62fe0b></path><path d="M145.269 27.7327H150.101V32.2343H145.269V27.7327ZM145.337 34.8047H150.019V52.3487H145.337V34.8047Z" fill="black" data-v-af62fe0b></path><path d="M153.017 43.6175C153.017 38.2591 156.754 34.4783 162.107 34.4783C167.418 34.4783 171.169 38.2727 171.169 43.6175C171.169 48.8943 167.35 52.6887 161.997 52.6887C156.685 52.6887 153.017 48.9623 153.017 43.6175ZM166.446 43.7263V43.5767C166.446 40.2311 164.803 38.2183 162.107 38.2183C159.369 38.2183 157.726 40.2311 157.726 43.5767V43.7263C157.726 47.0039 159.327 48.9351 162.024 48.9351C164.762 48.9351 166.446 46.9903 166.446 43.7263Z" fill="black" data-v-af62fe0b></path><path d="M174.126 34.8046H178.767V37.6606C179.698 35.6206 181.423 34.4238 183.928 34.4238C187.788 34.4238 190.061 36.9942 190.061 41.8222V52.3486H185.42V42.0942C185.42 39.6462 184.489 38.3814 182.312 38.3814C180.108 38.3814 178.753 40.163 178.753 43.4406V52.3622H174.112L174.126 34.8046Z" fill="black" data-v-af62fe0b></path><path d="M37.2297 29.9358C32.9997 24.4006 25.3198 22.8366 18.9404 26.223C21.4319 31.7854 23.2937 38.327 35.5733 38.7078C37.0107 38.7486 38.5987 38.7078 40.3373 38.5718C40.0909 35.0766 38.9409 32.1798 37.2297 29.9358Z" fill="black" data-v-af62fe0b></path><path d="M34.971 41.3191C27.5786 41.6863 24.1151 44.3519 21.9521 47.6567C20.679 49.6015 19.8576 51.7503 18.9404 53.7767C27.8934 58.5231 39.4611 53.5183 40.3373 41.4143C38.3523 41.2647 36.559 41.2375 34.971 41.3191Z" fill="black" data-v-af62fe0b></path>',
      12,
   ),
   jN = [FN],
   UN = Dt(
      '<path d="M0 10C0 4.47715 4.47715 0 10 0H200C205.523 0 210 4.47715 210 10V70C210 75.5229 205.523 80 200 80H10C4.47715 80 0 75.5229 0 70V10Z" fill="#F6F6F6" data-v-af62fe0b></path><g filter="url(#filter0_d_84_6495)" data-v-af62fe0b><path d="M72.0619 51.9586V27.022C72.0619 26.3785 71.4242 26.2176 70.8505 26.2176C70.1774 26.2176 68.8313 26.2176 68.8313 25.011C68.8314 23.4022 69.639 23.4022 70.0428 23.4022H84.5805C84.9843 23.4022 85.3882 23.8044 85.3881 25.011C85.3881 25.8154 84.5805 26.2176 84.1767 26.2176C82.9652 26.2176 82.9652 27.022 82.9652 27.022V49.5454C82.9652 51.9586 81.3499 53.5674 78.9269 55.1762C75.8621 57.2112 72.1965 57.1872 70.4466 56.785V53.5674C70.4466 53.5674 72.0619 52.763 72.0619 51.9586Z" fill="url(#paint0_linear_84_6495)" data-v-af62fe0b></path><path d="M61.1587 53.1652C62.774 55.5784 66.8122 56.785 68.4275 56.785V53.9696C66.9468 54.1037 66.5501 53.2522 66.8122 53.1652C70.4466 51.9586 70.8504 49.1432 70.4466 47.5344C70.1528 46.3638 68.0238 42.3057 63.5817 43.9145C59.4941 45.3949 59.2318 50.2864 61.1587 53.1652Z" fill="url(#paint1_linear_84_6495)" data-v-af62fe0b></path><path d="M87.8111 24.6088C87.8111 23.7203 88.5343 23 89.4264 23H103.156C104.048 23 104.772 23.7203 104.772 24.6088V24.8211C104.772 25.4305 104.426 25.9876 103.879 26.2601L102.349 27.022V52.763L103.667 53.2007C104.327 53.4197 104.772 54.0345 104.772 54.727V55.1762C104.772 56.0647 104.048 56.785 103.156 56.785H89.4264C88.5343 56.785 87.8111 56.0647 87.8111 55.1762V54.727C87.8111 54.0345 88.256 53.4197 88.9156 53.2007L90.234 52.763V27.022L88.704 26.2601C88.1567 25.9876 87.8111 25.4305 87.8111 24.8211V24.6088Z" fill="url(#paint2_linear_84_6495)" data-v-af62fe0b></path><path d="M133.039 24.6088C133.039 23.7203 133.763 23 134.655 23H148.385C149.277 23 150 23.7203 150 24.6088V24.8211C150 25.4305 149.654 25.9876 149.107 26.2601L147.577 27.022V52.763L148.896 53.2007C149.555 53.4197 150 54.0345 150 54.727V55.1762C150 56.0647 149.277 56.785 148.385 56.785H134.655C133.763 56.785 133.039 56.0647 133.039 55.1762V54.727C133.039 54.0345 133.484 53.4197 134.144 53.2007L135.462 52.763V27.022L133.932 26.2601C133.385 25.9876 133.039 25.4305 133.039 24.8211V24.6088Z" fill="url(#paint3_linear_84_6495)" data-v-af62fe0b></path><path d="M107.195 24.6088C107.195 23.7203 107.918 23 108.81 23H122.54C123.432 23 124.155 23.7203 124.155 24.6088V24.8211C124.155 25.4305 123.81 25.9876 123.262 26.2601L121.732 27.022V56.785H108.81C107.918 56.785 107.195 56.0647 107.195 55.1762V54.727C107.195 54.0345 107.64 53.4197 108.299 53.2007L109.618 52.763V27.022L108.088 26.2601C107.54 25.9876 107.195 25.4305 107.195 24.8211V24.6088Z" fill="url(#paint4_linear_84_6495)" data-v-af62fe0b></path><path d="M126.982 49.9476C128.3 48.1094 129.102 46.0997 129.5 44.9261C129.7 44.3369 130.247 43.9145 130.871 43.9145C131.623 43.9145 132.232 44.5213 132.232 45.2697V56.785H122.54V53.5674C122.54 53.5674 124.963 52.763 126.982 49.9476Z" fill="url(#paint5_linear_84_6495)" data-v-af62fe0b></path><path d="M102.126 26.5745L101.849 26.7125V27.022V52.763V53.1238L102.191 53.2375L103.51 53.6752C103.966 53.8267 104.272 54.251 104.272 54.727V55.1762C104.272 55.7867 103.774 56.285 103.156 56.285H89.4264C88.8085 56.285 88.3111 55.7867 88.3111 55.1762V54.727C88.3111 54.251 88.617 53.8267 89.0731 53.6752L90.3916 53.2375L90.734 53.1238V52.763V27.022V26.7125L90.4569 26.5745L88.9269 25.8125C88.5487 25.6242 88.3111 25.24 88.3111 24.8211V24.6088C88.3111 23.9983 88.8085 23.5 89.4264 23.5H103.156C103.774 23.5 104.272 23.9983 104.272 24.6088V24.8211C104.272 25.24 104.034 25.6242 103.656 25.8125L102.126 26.5745ZM147.354 26.5745L147.077 26.7125V27.022V52.763V53.1238L147.42 53.2375L148.738 53.6752C149.194 53.8267 149.5 54.251 149.5 54.727V55.1762C149.5 55.7867 149.003 56.285 148.385 56.285H134.655C134.037 56.285 133.539 55.7867 133.539 55.1762V54.727C133.539 54.251 133.845 53.8267 134.301 53.6752L135.62 53.2375L135.962 53.1238V52.763V27.022V26.7125L135.685 26.5745L134.155 25.8125C133.777 25.6242 133.539 25.24 133.539 24.8211V24.6088C133.539 23.9983 134.037 23.5 134.655 23.5H148.385C149.003 23.5 149.5 23.9983 149.5 24.6088V24.8211C149.5 25.24 149.262 25.6242 148.884 25.8125L147.354 26.5745ZM121.509 26.5745L121.232 26.7125V27.022V56.285H108.81C108.192 56.285 107.695 55.7867 107.695 55.1762V54.727C107.695 54.251 108.001 53.8267 108.457 53.6752L109.775 53.2375L110.118 53.1238V52.763V27.022V26.7125L109.84 26.5745L108.31 25.8125C107.932 25.6242 107.695 25.24 107.695 24.8211V24.6088C107.695 23.9983 108.192 23.5 108.81 23.5H122.54C123.158 23.5 123.655 23.9983 123.655 24.6088V24.8211C123.655 25.24 123.418 25.6242 123.039 25.8125L121.509 26.5745ZM72.5619 51.9586V27.022C72.5619 26.7746 72.4993 26.547 72.3723 26.352C72.2472 26.1599 72.0773 26.0264 71.9027 25.9353C71.5665 25.7598 71.1687 25.7176 70.8505 25.7176C70.498 25.7176 70.0823 25.7127 69.7573 25.5961C69.6038 25.5411 69.5035 25.4718 69.4415 25.3949C69.3851 25.3249 69.3313 25.2133 69.3313 25.011C69.3314 24.2762 69.5162 24.0589 69.5972 23.9943C69.6966 23.9152 69.8269 23.9022 70.0428 23.9022H84.5805C84.5809 23.9022 84.5814 23.9022 84.5819 23.9022C84.5934 23.9018 84.64 23.9001 84.7075 24.0122C84.7925 24.1534 84.8882 24.4516 84.8881 25.011C84.8881 25.2265 84.7854 25.3949 84.6222 25.5249C84.4433 25.6675 84.2475 25.7176 84.1767 25.7176C83.4497 25.7176 82.9827 25.9664 82.7172 26.3191C82.593 26.484 82.5306 26.6492 82.4991 26.7746C82.4833 26.8376 82.4749 26.8921 82.4704 26.934C82.4682 26.955 82.4668 26.9732 82.4661 26.9879L82.4654 27.0076L82.4652 27.0155L82.4652 27.0189L82.4652 27.0205L82.4652 27.0213C82.4652 27.0217 82.4652 27.022 82.8911 27.022H82.4652V49.5454C82.4652 51.6831 81.0578 53.1611 78.6504 54.7597C75.9403 56.5592 72.719 56.6707 70.9466 56.3741V53.8635C70.9478 53.8629 70.949 53.8622 70.9502 53.8615C71.1124 53.7673 71.3316 53.631 71.5535 53.4652C71.7725 53.3016 72.0111 53.0968 72.1993 52.8624C72.382 52.6351 72.5619 52.3244 72.5619 51.9586ZM66.6486 54.0364C66.9385 54.2749 67.3659 54.4461 67.9275 54.4783V56.2516C67.1707 56.1618 66.0892 55.8897 64.9894 55.4202C63.6151 54.8336 62.3041 53.9775 61.5742 52.8871C60.683 51.5556 60.2951 49.7462 60.606 48.1087C60.9133 46.4906 61.8958 45.0569 63.7519 44.3847C65.7857 43.6481 67.2423 44.2064 68.2451 45.0625C69.2816 45.9473 69.8371 47.1597 69.9617 47.6561C70.1398 48.3659 70.1396 49.3501 69.6926 50.2849C69.2528 51.2048 68.3576 52.1253 66.6546 52.6907C66.4719 52.7513 66.3372 52.8895 66.2754 53.0601C66.2196 53.2144 66.2333 53.3629 66.262 53.4727C66.3194 53.693 66.4675 53.8874 66.6486 54.0364ZM127.388 50.239C128.747 48.3445 129.568 46.2833 129.974 45.0866C130.11 44.6847 130.477 44.4145 130.871 44.4145C131.348 44.4145 131.732 44.7993 131.732 45.2697V56.285H123.04V53.9056C123.077 53.8893 123.117 53.8713 123.16 53.8517C123.437 53.7236 123.824 53.5241 124.275 53.2336C125.176 52.6524 126.336 51.706 127.388 50.239Z" stroke="url(#paint6_linear_84_6495)" data-v-af62fe0b></path></g><defs data-v-af62fe0b><filter id="filter0_d_84_6495" x="60" y="23" width="90" height="35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-af62fe0b><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-af62fe0b></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-af62fe0b></feColorMatrix><feOffset dy="1" data-v-af62fe0b></feOffset><feComposite in2="hardAlpha" operator="out" data-v-af62fe0b></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.482353 0 0 0 0 0.239216 0 0 0 0 0 0 0 0 1 0" data-v-af62fe0b></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_84_6495" data-v-af62fe0b></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_84_6495" result="shape" data-v-af62fe0b></feBlend></filter><linearGradient id="paint0_linear_84_6495" x1="105" y1="23" x2="105" y2="57" gradientUnits="userSpaceOnUse" data-v-af62fe0b><stop stop-color="#FFE03A" data-v-af62fe0b></stop><stop offset="0.43817" stop-color="white" data-v-af62fe0b></stop><stop offset="0.511377" stop-color="#FBB21D" data-v-af62fe0b></stop><stop offset="1" stop-color="#DB9506" data-v-af62fe0b></stop></linearGradient><linearGradient id="paint1_linear_84_6495" x1="105" y1="23" x2="105" y2="57" gradientUnits="userSpaceOnUse" data-v-af62fe0b><stop stop-color="#FFE03A" data-v-af62fe0b></stop><stop offset="0.43817" stop-color="white" data-v-af62fe0b></stop><stop offset="0.511377" stop-color="#FBB21D" data-v-af62fe0b></stop><stop offset="1" stop-color="#DB9506" data-v-af62fe0b></stop></linearGradient><linearGradient id="paint2_linear_84_6495" x1="105" y1="23" x2="105" y2="57" gradientUnits="userSpaceOnUse" data-v-af62fe0b><stop stop-color="#FFE03A" data-v-af62fe0b></stop><stop offset="0.43817" stop-color="white" data-v-af62fe0b></stop><stop offset="0.511377" stop-color="#FBB21D" data-v-af62fe0b></stop><stop offset="1" stop-color="#DB9506" data-v-af62fe0b></stop></linearGradient><linearGradient id="paint3_linear_84_6495" x1="105" y1="23" x2="105" y2="57" gradientUnits="userSpaceOnUse" data-v-af62fe0b><stop stop-color="#FFE03A" data-v-af62fe0b></stop><stop offset="0.43817" stop-color="white" data-v-af62fe0b></stop><stop offset="0.511377" stop-color="#FBB21D" data-v-af62fe0b></stop><stop offset="1" stop-color="#DB9506" data-v-af62fe0b></stop></linearGradient><linearGradient id="paint4_linear_84_6495" x1="105" y1="23" x2="105" y2="57" gradientUnits="userSpaceOnUse" data-v-af62fe0b><stop stop-color="#FFE03A" data-v-af62fe0b></stop><stop offset="0.43817" stop-color="white" data-v-af62fe0b></stop><stop offset="0.511377" stop-color="#FBB21D" data-v-af62fe0b></stop><stop offset="1" stop-color="#DB9506" data-v-af62fe0b></stop></linearGradient><linearGradient id="paint5_linear_84_6495" x1="105" y1="23" x2="105" y2="57" gradientUnits="userSpaceOnUse" data-v-af62fe0b><stop stop-color="#FFE03A" data-v-af62fe0b></stop><stop offset="0.43817" stop-color="white" data-v-af62fe0b></stop><stop offset="0.511377" stop-color="#FBB21D" data-v-af62fe0b></stop><stop offset="1" stop-color="#DB9506" data-v-af62fe0b></stop></linearGradient><linearGradient id="paint6_linear_84_6495" x1="105" y1="23" x2="105" y2="57" gradientUnits="userSpaceOnUse" data-v-af62fe0b><stop stop-color="#FFFF7D" data-v-af62fe0b></stop><stop offset="1" stop-color="#FFC500" data-v-af62fe0b></stop></linearGradient></defs>',
      3,
   ),
   qN = [UN],
   KN = Dt(
      '<path d="M0 10C0 4.47715 4.47715 0 10 0H200C205.523 0 210 4.47715 210 10V70C210 75.5229 205.523 80 200 80H10C4.47715 80 0 75.5229 0 70V10Z" fill="#F6F6F6" data-v-af62fe0b></path><path d="M103.77 20.9054C104.064 19.3362 104.388 17.7716 104.638 16.1958C104.769 15.372 105.052 15.0024 105.994 15.0048C119.678 15.0379 133.363 15.0445 147.047 14.9998C148.332 14.9955 148.365 15.5404 148.194 16.4954C146.6 25.439 145.02 34.3853 143.433 43.3302C142.616 47.9394 141.731 52.5384 141.016 57.1635C140.825 58.3926 140.398 58.6458 139.244 58.6409C128.595 58.5968 117.945 58.614 107.295 58.6173C106.69 58.6177 106.084 58.6518 105.478 58.6704C102.916 59.5425 100.303 59.0963 97.7026 58.9697C97.4013 58.8726 97.155 58.7055 97.0105 58.4141C96.8318 56.4694 97.4713 54.627 97.752 52.7399C97.986 51.166 98.2675 49.5988 98.5121 48.0259C99.9477 40.1278 101.306 32.2161 102.707 24.312C102.915 23.1402 102.881 21.8723 103.77 20.9054Z" fill="#0091C3" data-v-af62fe0b></path><path d="M103.77 20.9054C102.219 30.0018 100.721 39.1075 98.9046 48.1565C98.1326 47.8363 98.0202 47.061 97.764 46.4186C95.3124 40.2696 92.7706 34.1565 90.4274 27.9645C90.3104 27.6549 90.1692 27.3539 90.0618 27.0417C89.6875 25.9548 89.2357 26.0864 88.6325 26.8925C80.9302 37.1836 73.1949 47.4501 65.5016 57.7482C65.4303 57.8433 65.4164 57.947 65.485 58.1814C66.6435 58.191 67.8451 58.1887 69.0481 58.1728C69.9371 58.1608 70.4283 57.5771 70.8997 56.948C72.7851 54.4314 74.7024 51.9377 76.5451 49.3899C77.2936 48.3554 78.1776 47.885 79.4691 47.9006C83.4415 47.9487 87.4153 47.957 91.3874 47.8983C92.8886 47.8761 93.7677 48.4707 94.2271 49.8702C94.916 51.9678 95.7881 53.9981 96.6396 56.0331C96.9429 56.7577 97.0009 57.5095 97.1567 58.252C97.2714 58.3916 97.3858 58.5311 97.5005 58.6707C99.8374 60.0168 101.737 61.9244 103.817 63.5987C104.078 63.8082 104.206 64.1238 104.167 64.4788C90.1516 64.4944 76.1357 64.4934 62.1205 64.5494C60.6504 64.5554 61.0008 63.7094 61.1347 62.9421C62.3462 55.9986 63.5764 49.0585 64.8075 42.1186C65.9809 35.504 67.2001 28.8973 68.3036 22.271C68.4962 21.1145 68.9357 20.8768 69.9977 20.8802C81.2554 20.9136 92.5127 20.9034 103.77 20.9054Z" fill="#EA5902" data-v-af62fe0b></path><path d="M104.168 64.4781C102.492 62.821 100.596 61.4272 98.7669 59.9521C98.3025 59.5775 97.921 59.1002 97.501 58.6699C100.16 58.6699 102.819 58.6699 105.478 58.6703C105.018 60.6011 105.224 62.6818 104.168 64.4781Z" fill="#C50110" data-v-af62fe0b></path><path d="M131.304 42.7613C128.148 42.7613 125.306 42.7613 122.225 42.7613C122.498 41.1891 122.775 39.7651 122.983 38.3311C123.073 37.7043 123.457 37.69 123.918 37.69C128.225 37.6913 132.532 37.7215 136.838 37.6698C138.044 37.6552 137.653 38.3689 137.601 38.9612C137.056 45.2348 132.82 48.6487 127.779 51.268C124.039 53.2118 119.979 53.6643 115.881 52.4706C108.888 50.4344 105.323 43.5535 107.178 35.8493C109.323 26.9369 118.32 20.4237 127.442 21.1801C132.57 21.6054 137.117 25.2344 138.558 30.017C138.858 31.0141 138.923 31.7393 137.515 31.5073C137.246 31.4629 136.962 31.4761 136.689 31.505C134.696 31.7141 133.278 31.3227 131.921 29.4041C129.669 26.2182 126.137 25.6318 122.406 26.4281C116.944 27.5932 112.557 32.3476 111.846 37.8402C111.145 43.2565 115.172 47.9281 120.647 48.0079C124.963 48.0709 128.316 46.1497 131.304 42.7613Z" fill="#FEFEFE" data-v-af62fe0b></path><path d="M97.1575 58.2513C95.9944 55.4059 94.7818 52.5791 93.6962 49.7045C93.3296 48.7339 92.894 48.3531 91.8174 48.3703C87.6222 48.4386 83.424 48.4422 79.2292 48.368C78.1433 48.3488 77.5227 48.7432 76.9224 49.5726C75.0144 52.2095 72.9941 54.7662 71.1143 57.4226C70.4636 58.3422 69.7718 58.7144 68.6633 58.6368C67.3457 58.5444 66.0165 58.615 64.3213 58.615C72.7856 47.3338 81.0951 36.2584 89.617 24.8997C92.773 32.8014 95.8392 40.4785 98.9054 48.1558C98.507 51.5532 97.8636 54.9077 97.1575 58.2513Z" fill="#FEFEFE" data-v-af62fe0b></path><path d="M91.1297 43.3157C87.923 43.3157 84.9142 43.3157 81.6299 43.3157C83.747 40.4892 85.7376 37.8314 87.8584 35.0002C88.9811 37.8536 90.0375 40.5389 91.1297 43.3157Z" fill="#EA5902" data-v-af62fe0b></path>',
      7,
   ),
   ZN = [KN],
   XN = { class: "terms-rule" },
   JN = Vn(() => e("svg", { width: "11", height: "11", viewBox: "0 0 11 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, [e("rect", { x: "5.65625", width: "8", height: "8", rx: "1", transform: "rotate(45 5.65625 0)", fill: "#FF7172" })], -1)),
   YN = { class: "terms-rule" },
   QN = Vn(() => e("svg", { width: "11", height: "11", viewBox: "0 0 11 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, [e("rect", { x: "5.65625", width: "8", height: "8", rx: "1", transform: "rotate(45 5.65625 0)", fill: "#FF7172" })], -1)),
   eR = { class: "terms-rule" },
   tR = Vn(() => e("svg", { width: "11", height: "11", viewBox: "0 0 11 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, [e("rect", { x: "5.65625", width: "8", height: "8", rx: "1", transform: "rotate(45 5.65625 0)", fill: "#FF7172" })], -1)),
   sR = { class: "terms-tips" },
   nR = { class: "terms-tips" },
   aR = V({
      __name: "index",
      setup(l) {
         const { t: s } = _e(),
            o = ue(),
            u = je();
         let v = k([]);
         function p(_) {
            o.push({ name: "CustomerService-ServiceCollection", state: { itemId: _ } });
         }
         const d = async () => {
               const _ = await de(gi());
               _ && (v.value = _.data || []);
            },
            i = _ => {
               o.push({ name: "AllOnlineGames", query: { game: "slot", vendorCode: _ } });
            };
         return (
            he(() => {
               d();
            }),
            (_, r) => {
               const g = Te("lazy");
               return (
                  n(),
                  a("div", xN, [
                     e("div", BN, [
                        e("div", NN, [e("img", { src: c(u).getProjectLogo, alt: "" }, null, 8, RN)]),
                        MN,
                        (n(!0),
                        a(
                           N,
                           null,
                           D(c(v), (m, $) => (n(), a("span", { class: "terms-logo-service", key: $, onClick: y => p(m.typeID) }, [te(e("img", AN, null, 512), [[g, c(pe)("main", `CStype${m.typeID}`)]])], 8, DN))),
                           128,
                        )),
                     ]),
                     e("div", PN, [
                        (n(), a("svg", { onClick: r[0] || (r[0] = m => i("CQ9")), xmlns: "http://www.w3.org/2000/svg", width: "210", height: "80", viewBox: "0 0 210 80", fill: "none" }, VN)),
                        (n(), a("svg", { onClick: r[1] || (r[1] = m => i("MG")), width: "210", height: "80", viewBox: "0 0 210 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, HN)),
                        (n(), a("svg", { onClick: r[2] || (r[2] = m => i("JDB")), xmlns: "http://www.w3.org/2000/svg", width: "210", height: "80", viewBox: "0 0 210 80", fill: "none" }, EN)),
                        (n(), a("svg", { onClick: r[3] || (r[3] = m => i("EVO_Electronic")), width: "210", height: "80", viewBox: "0 0 210 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, jN)),
                        (n(), a("svg", { onClick: r[4] || (r[4] = m => i("JILI")), xmlns: "http://www.w3.org/2000/svg", width: "210", height: "80", viewBox: "0 0 210 80", fill: "none" }, qN)),
                        (n(), a("svg", { onClick: r[5] || (r[5] = m => i("AG_Electronic")), xmlns: "http://www.w3.org/2000/svg", width: "210", height: "80", viewBox: "0 0 210 80", fill: "none" }, ZN)),
                     ]),
                     e("p", XN, [JN, e("span", null, t(c(s)("damanRule").replace("Daman", c(u).getProjectName)), 1)]),
                     e("p", YN, [QN, e("span", null, t(c(s)("damanRule2").replace("Daman", c(u).getProjectName)), 1)]),
                     e("p", eR, [tR, e("span", null, t(c(s)("damanRule3").replace("Daman", c(u).getProjectName)), 1)]),
                     e("p", sR, t(c(s)("damanWarn").replace("Daman", c(u).getProjectName)), 1),
                     e("p", nR, t(c(s)("damanWarn2").replace("Daman", c(u).getProjectName)), 1),
                  ])
               );
            }
         );
      },
   });
const oR = H(aR, [["__scopeId", "data-v-af62fe0b"]]),
   lR = { "aria-hidden": "true" },
   iR = ["href", "fill"],
   cR = V({
      __name: "index",
      props: { prefix: { type: String, default: "cms-icon" }, name: { type: String, required: !0 }, color: { type: String, default: "" }, size: { type: String, default: "24px" } },
      setup(l) {
         const s = l,
            o = q(() => `#${s.prefix}-${s.name}`);
         return (u, v) => (n(), a("span", { class: "cms-icon", style: Ze({ fontSize: l.size }) }, [(n(), a("svg", lR, [e("use", { href: o.value, fill: l.color }, null, 8, iR)]))], 4));
      },
   });
const sn = H(cR, [["__scopeId", "data-v-0ea08bd2"]]),
   uR = l => (ye("data-v-154f7bd7"), (l = l()), fe(), l),
   rR = { class: "daman-title-left" },
   dR = uR(() => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" }, [e("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.5064 19.541C7.99993 19.9904 7.2002 19.6308 7.2002 18.9537C7.2002 18.7288 7.29666 18.5147 7.46512 18.3657L14.6731 11.9896C14.7178 11.95 14.7181 11.8804 14.6738 11.8404L7.45763 5.33217C7.29374 5.18437 7.2002 4.97403 7.2002 4.75334C7.2002 4.078 8.00051 3.72221 8.50188 4.17465L15.8798 10.8325L16.2562 11.1964C16.6628 11.5895 16.6628 12.2412 16.2562 12.6343L15.8798 12.9982L8.5064 19.541Z", fill: "hsl(0 1% 84% / 1)666" })], -1)),
   _R = V({
      __name: "Title",
      props: { icon: { type: Boolean, default: !1 }, btn: { type: Boolean, default: !1 }, count: { type: [String, Number], default: "" }, title: { type: String, default: "" } },
      emits: ["change"],
      setup(l, { emit: s }) {
         return (o, u) => (n(), a("div", { class: M(["daman-title", { "daman-line": l.icon }]) }, [e("div", rR, [te(L(sn, { name: "hot" }, null, 512), [[He, !l.icon]]), e("span", null, t(l.title), 1)]), te(e("div", { class: "btn-all", onClick: u[0] || (u[0] = v => s("change")) }, [e("p", null, t(o.$t("all")), 1), e("span", null, t(l.count), 1), dR], 512), [[He, l.btn]])], 2));
      },
   });
const ss = H(_R, [["__scopeId", "data-v-154f7bd7"]]),
   vR = ["onClick"],
   pR = { class: "gameImg" },
   mR = { key: 0, class: "game-type" },
   gR = { key: 1, class: "game-odd" },
   hR = V({
      __name: "Game",
      props: { platformList: { type: Array, default: [] }, isAll: { type: Boolean, default: !1 }, enterGame: { type: Boolean, default: !1 }, odd: { type: Boolean, default: !1 }, title: { type: String, default: "" }, code: { type: String, default: "" } },
      setup(l) {
         const s = l,
            { onGame: o, goGame: u } = bs();
         return (v, p) => {
            const d = Te("lazy");
            return (
               n(),
               a(
                  "div",
                  { class: M(["daman__container", { allGame: l.isAll }]) },
                  [
                     (n(!0),
                     a(
                        N,
                        null,
                        D(l.platformList, i => (n(), a("div", { key: `${i.slotsTypeID || i.vendorId}-${i.gameID}`, class: "item", onClick: _ => (l.enterGame ? c(u)(i) : c(o)(Object.assign({}, i, { key: s.code }))) }, [te(e("img", pR, null, 512), [[d, i.vendorImg || i.img || i.imgUrl]]), l.title ? (n(), a("div", mR, t(l.title), 1)) : B("", !0), l.odd ? (n(), a("div", gR, [e("span", null, t(v.$t("winOdds")), 1), e("span", null, t(i.winOdds) + "%", 1), e("div", { class: "win-p", style: Ze({ width: `${Math.min(i.winOdds, 100)}%` }) }, null, 4)])) : B("", !0)], 8, vR))),
                        128,
                     )),
                  ],
                  2,
               )
            );
         };
      },
   });
const ys = H(hR, [["__scopeId", "data-v-1d88d15f"]]),
   yR = l => (ye("data-v-fe5a0fb2"), (l = l()), fe(), l),
   fR = { class: "video" },
   bR = ["onClick"],
   $R = yR(() =>
      e(
         "svg",
         { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
         [
            e("path", {
               "fill-rule": "evenodd",
               "clip-rule": "evenodd",
               d: "M21.1309 8.86956C21.1309 7.28475 22.4156 6 24.0004 6C25.5852 6 26.87 7.28474 26.87 8.86956V9.82607H28.8124C38.3048 9.82607 45.9999 17.1078 45.9999 26.0904C45.9999 34.255 39.6423 41.0145 31.3562 42.1778C30.3848 42.3142 29.5046 41.5102 29.3905 40.5359C29.0926 37.9913 26.82 36.0658 24.1145 36.0658C21.409 36.0658 19.1364 37.9913 18.8385 40.5359C18.696 41.5143 17.8438 42.3327 16.863 42.2072C8.47001 41.1335 2 34.3269 2 26.0904C2 17.1078 9.69507 9.82607 19.1874 9.82607H21.1309V8.86956ZM18.144 19.5136C17.9414 19.4328 17.7242 19.3913 17.5049 19.3913C17.0619 19.3913 16.6361 19.5606 16.3229 19.862C16.0097 20.1633 15.8337 20.5721 15.8337 20.9983V23.5235H13.2351C12.7922 23.5235 12.3675 23.6929 12.0544 23.9943C11.7412 24.2956 11.5653 24.7043 11.5653 25.1305C11.5653 25.5567 11.7412 25.9654 12.0544 26.2668C12.3675 26.5681 12.7922 26.7375 13.2351 26.7375H15.8359V29.2627C15.836 29.6889 16.012 30.0976 16.3252 30.3989C16.6384 30.7002 17.0631 30.8695 17.506 30.8695C17.9489 30.8695 18.3736 30.7002 18.6868 30.3989C19 30.0976 19.176 29.6889 19.176 29.2627V26.7375H21.7724C22.2153 26.7375 22.64 26.5681 22.9531 26.2668C23.2663 25.9654 23.4422 25.5567 23.4422 25.1305C23.4422 24.7043 23.2663 24.2956 22.9531 23.9943C22.64 23.6929 22.2153 23.5235 21.7724 23.5235H19.1749V20.9983C19.1749 20.7873 19.1317 20.5783 19.0478 20.3833C18.9639 20.1883 18.8409 20.0112 18.6858 19.862C18.5307 19.7127 18.3466 19.5944 18.144 19.5136ZM34.0326 19.862C33.7194 19.5606 33.2946 19.3913 32.8517 19.3913C32.6324 19.3913 32.4152 19.4328 32.2126 19.5136C32.01 19.5944 31.8259 19.7127 31.6708 19.862C31.5157 20.0112 31.3927 20.1883 31.3088 20.3833C31.2249 20.5783 31.1817 20.7873 31.1817 20.9983V21.9164C31.1817 22.3426 31.3577 22.7513 31.6709 23.0526C31.9841 23.354 32.4088 23.5232 32.8517 23.5232C33.2946 23.5232 33.7193 23.354 34.0325 23.0526C34.3457 22.7513 34.5217 22.3426 34.5218 21.9164V20.9983C34.5218 20.5721 34.3458 20.1633 34.0326 19.862ZM34.0326 27.2082C33.7194 26.9068 33.2946 26.7375 32.8517 26.7375C32.4088 26.7375 31.984 26.9068 31.6708 27.2082C31.3576 27.5096 31.1817 27.9184 31.1817 28.3446V29.2627C31.1817 29.6889 31.3577 30.0976 31.6709 30.3989C31.9841 30.7002 32.4088 30.8695 32.8517 30.8695C33.2946 30.8695 33.7193 30.7002 34.0325 30.3989C34.3457 30.0976 34.5217 29.6889 34.5218 29.2627V28.3446C34.5218 27.9184 34.3458 27.5096 34.0326 27.2082Z",
               fill: "#F95959",
            }),
         ],
         -1,
      ),
   ),
   CR = V({
      __name: "Video",
      props: { title: { type: String, default: "" } },
      setup(l) {
         const s = ue(),
            { getVideonChildGame: o, videoList: u, allGame: v } = bs();
         he(async () => {
            await o();
         });
         const p = async d => {
            var _;
            const i = { slotsName: d.vendorCode, slotsTypeID: (_ = d.childList[0]) == null ? void 0 : _.vendorId };
            sessionStorage.setItem("slotGamesList", JSON.stringify(v.value.video)), sessionStorage.setItem("clickedItem", JSON.stringify(i)), sessionStorage.setItem("gameType", JSON.stringify("video")), await s.push({ name: "AllOnlineGames" });
         };
         return (d, i) => (
            n(!0),
            a(
               N,
               null,
               D(c(u), _ => (n(), a("div", fR, [L(ss, { icon: !0, title: _.vendorCode }, null, 8, ["title"]), L(ys, { "enter-game": !0, "is-all": !0, "platform-list": _.childList.slice(0, 6) }, null, 8, ["platform-list"]), e("div", { class: "video-btn", onClick: r => p(_) }, [$R, e("span", null, t(d.$t("allGame")), 1)], 8, bR)]))),
               256,
            )
         );
      },
   });
const kR = H(CR, [["__scopeId", "data-v-fe5a0fb2"]]),
   TR = "/assets/png/dragon-9eecda27.png",
   wR = l => (ye("data-v-1db28470"), (l = l()), fe(), l),
   LR = wR(() => e("img", { class: "daman-dragon-image", src: TR, alt: "" }, null, -1)),
   IR = { class: "daman-dragon-right" },
   SR = { class: "daman-dragon-btn" },
   GR = V({
      __name: "Dragon",
      setup(l) {
         const { t: s } = _e(),
            o = je(),
            u = q(() => o.getIsShowLotteryDragon),
            v = ue(),
            p = () => {
               v.push({ name: "AllLotteryGames-ChangLong" });
            };
         return (d, i) => (u.value ? (n(), a("div", { key: 0, class: "daman-dragon", onClick: p }, [LR, e("div", IR, [e("h3", null, "Win Go " + t(d.$t("loongAssistant")), 1), e("p", null, t(c(s)("dragonTips")), 1), e("div", SR, t(c(s)("dragonEntry")), 1)])])) : B("", !0));
      },
   });
const _o = H(GR, [["__scopeId", "data-v-1db28470"]]),
   xR = l => (ye("data-v-5e46c66d"), (l = l()), fe(), l),
   BR = { class: "daman-lottery" },
   NR = ["onClick"],
   RR = { alt: "" },
   MR = { class: "daman-btn" },
   DR = xR(() => e("span", null, "GO", -1)),
   AR = V({
      __name: "Lottery",
      props: { platformList: { type: Array, default: [] }, type: { type: String, default: "line" } },
      setup(l) {
         const { gameType: s, currentGame: o, onItemLottery: u } = bs();
         return (v, p) => {
            const d = Te("lazy");
            return (
               n(),
               a(
                  N,
                  null,
                  [
                     e("div", BR, [
                        (n(!0),
                        a(
                           N,
                           null,
                           D(l.platformList, i => (n(), a("div", { key: i.categoryCode, class: "daman_img", onClick: _ => c(u)(i) }, [e("h3", null, t(i.categoryCode), 1), te(e("img", RR, null, 512), [[d, i.categoryImg]]), e("div", MR, [DR, E(), L(sn, { name: "arrow-right", size: "16px" })])], 8, NR))),
                           128,
                        )),
                     ]),
                     L(_o),
                  ],
                  64,
               )
            );
         };
      },
   });
const PR = H(AR, [["__scopeId", "data-v-5e46c66d"]]),
   nn = l => (ye("data-v-f6201a89"), (l = l()), fe(), l),
   OR = { class: "daman-lottery-list" },
   VR = { key: 2, class: "daman-hot" },
   WR = ["onClick"],
   HR = { class: "icon" },
   zR = { xmlns: "http://www.w3.org/2000/svg", width: "160", height: "57", viewBox: "0 0 160 57", fill: "none" },
   ER = nn(() => e("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M52 5H4C1.79086 5 0 6.79086 0 9V53C0 55.2091 1.79086 57 4 57H156C158.209 57 160 55.2091 160 53V9C160 6.79086 158.209 5 156 5H108V8C108 9.65685 106.657 11 105 11C103.343 11 102 9.65685 102 8V5H58V8C58 9.65685 56.6569 11 55 11C53.3431 11 52 9.65685 52 8V5Z", fill: "white" }, null, -1)),
   FR = ["fill"],
   jR = ["fill"],
   UR = ["fill"],
   qR = nn(() => e("path", { d: "M80 26V46", stroke: "#E8E8E8", "stroke-linecap": "round" }, null, -1)),
   KR = ["onClick"],
   ZR = { class: "daman-item-left" },
   XR = { alt: "" },
   JR = { class: "daman-item-right" },
   YR = { class: "top" },
   QR = { class: "daman-btn" },
   eM = nn(() => e("span", null, "GO", -1)),
   tM = { class: "pool" },
   sM = nn(() => e("span", { class: "line" }, null, -1)),
   nM = { class: "num" },
   aM = { key: 0, class: "tips" },
   fn = 1e3,
   oM = V({
      __name: "LotteryList",
      props: { platformList: { type: Array, default: [] }, type: { type: String, default: "line" } },
      setup(l) {
         const s = 60 * fn,
            o = 60 * s,
            u = 24 * o;
         Ke.extend(rl), Ke.extend(dl);
         function v(w) {
            const I = Math.floor(w / u),
               x = Math.floor((w % u) / o),
               S = Math.floor((w % o) / s),
               G = Math.floor((w % s) / fn),
               R = Math.floor(w % fn);
            return { total: w, days: I, hours: x, minutes: S, seconds: G, milliseconds: R };
         }
         const { t: p } = _e(),
            d = je(),
            i = q(() => d.getIsShowLotteryDragon),
            _ = ze({ hot: [], loading: !1 }),
            r = q(() =>
               _.hot.map(w => {
                  const I = (g[w.typeId] || {}).tabName || "";
                  return Object.assign({ tabName: I, current: v(w.expireSeconds * 1e3) }, w);
               }),
            ),
            g = Ut(),
            m = { 0: "#2AC1FA", 1: "#FFC56D", 2: "#FF6DC5" },
            { gameType: $, currentGame: y, onItemLottery: C, lotteryRoutes: f } = bs();
         let b = [];
         const T = () => {
               b.forEach(w => {
                  w && w();
               }),
                  (b = []);
            },
            h = async () => {
               if (!_.loading) {
                  _.loading = !0;
                  try {
                     const { data: w = [], result: I } = await hi();
                     if (!I) return;
                     const x = w || [];
                     (_.hot = x.map(G => Object.assign(G, { expireSeconds: 0 })).sort((G, R) => R.typeId - G.typeId)), b.length && T();
                     const S = Ke.tz(Date.now(), "IST").format("YYYY-MM-DD HH:mm:ss");
                     _.hot.forEach(G => {
                        const R = Ke(G.endTime).unix() - Ke(G.startTime).unix(),
                           O = Ke(G.serverTime || S).unix() - Ke(G.startTime).unix();
                        G.expireSeconds = R - O;
                        const {
                           pause: P,
                           resume: W,
                           isActive: J,
                        } = _l(() => {
                           if (G.expireSeconds == 1) {
                              W(), (G.expireSeconds = R);
                              return;
                           }
                           G.expireSeconds -= 1;
                        }, 1e3);
                        b.push(P);
                     });
                  } finally {
                     _.loading = !1;
                  }
               }
            };
         return (
            he(async () => {
               await h();
            }),
            jt(() => {
               T();
            }),
            (w, I) => {
               const x = Te("lazy");
               return (
                  n(),
                  a("div", OR, [
                     i.value ? (n(), Z(ss, { key: 0, icon: !0, title: w.$t("lottery") }, null, 8, ["title"])) : B("", !0),
                     L(_o),
                     r.value.length ? (n(), Z(ss, { key: 1, title: `${c(p)("hot")} ${c(p)("lottery")}` }, null, 8, ["title"])) : B("", !0),
                     r.value.length
                        ? (n(),
                          a("div", VR, [
                             (n(!0),
                             a(
                                N,
                                null,
                                D(
                                   r.value,
                                   (S, G) => (
                                      n(),
                                      a(
                                         "div",
                                         { class: "daman-hot-item", onClick: R => c(C)(S) },
                                         [e("h3", null, t(S.tabName), 1), e("p", null, t(c(p)("countdownLottery")), 1), e("div", HR, [(n(), a("svg", zR, [ER, e("path", { d: "M52 5H4C1.79086 5 0 6.79086 0 9V14H160V9C160 6.79086 158.209 5 156 5H108V8C108 9.65685 106.657 11 105 11C103.343 11 102 9.65685 102 8V5H58V8C58 9.65685 56.6569 11 55 11C53.3431 11 52 9.65685 52 8V5Z", fill: m[G] }, null, 8, FR), e("path", { d: "M53 2C53 0.89543 53.8954 0 55 0C56.1046 0 57 0.895431 57 2V8C57 9.10457 56.1046 10 55 10C53.8954 10 53 9.10457 53 8V2Z", fill: m[G] }, null, 8, jR), e("path", { d: "M103 2C103 0.89543 103.895 0 105 0C106.105 0 107 0.895431 107 2V8C107 9.10457 106.105 10 105 10C103.895 10 103 9.10457 103 8V2Z", fill: m[G] }, null, 8, UR), qR])), e("p", { style: Ze({ color: m[G] }) }, [e("span", null, t(S.current.minutes > 9 ? "" : "0") + t(S.current.minutes), 1), e("span", null, t(S.current.seconds > 9 ? "" : "0") + t(S.current.seconds), 1)], 4)])],
                                         8,
                                         WR,
                                      )
                                   ),
                                ),
                                256,
                             )),
                          ]))
                        : B("", !0),
                     L(ss, { icon: !0, title: w.$t("lottery") }, null, 8, ["title"]),
                     (n(!0),
                     a(
                        N,
                        null,
                        D(l.platformList, S => {
                           var G, R;
                           return n(), a("div", { key: S.categoryCode, class: "daman-item", onClick: O => c(C)(S) }, [e("div", ZR, [e("h3", null, t(S.categoryCode), 1), te(e("img", XR, null, 512), [[x, S.categoryImg]])]), e("div", JR, [e("div", YR, [e("h3", null, t(S.categoryCode), 1), e("div", QR, [eM, E(), L(sn, { name: "arrow-right", size: "16px" })])]), e("div", tM, [e("span", null, t(c(p)("topPrize")), 1), sM, e("span", nM, t(c(Be)(S.fiveDAmount || S.k3Amount || S.trxWingoAmount || S.wingoAmount || 0)), 1)]), c(f).get(S.id) && (G = c(f).get(S.id)) != null && G.rule ? (n(), a("p", aM, t(c(p)(((R = c(f).get(S.id)) == null ? void 0 : R.rule) || "")), 1)) : B("", !0)])], 8, KR);
                        }),
                        128,
                     )),
                  ])
               );
            }
         );
      },
   });
const lM = H(oM, [["__scopeId", "data-v-f6201a89"]]),
   iM = ["onClick"],
   cM = { class: "gameImg" },
   uM = { key: 0, class: "game-type" },
   rM = { key: 1, class: "game-odd" },
   dM = V({
      __name: "GameHome",
      props: { platformList: { type: Array, default: [] }, isAll: { type: Boolean, default: !1 }, enterGame: { type: Boolean, default: !1 }, odd: { type: Boolean, default: !1 }, title: { type: String, default: "" }, code: { type: String, default: "" } },
      setup(l) {
         const s = l,
            { onGame: o, goGame: u } = bs();
         return (v, p) => {
            const d = Te("lazy");
            return (
               n(),
               a(
                  "div",
                  { class: M(["daman__container", { allGame: l.isAll }]) },
                  [
                     (n(!0),
                     a(
                        N,
                        null,
                        D(l.platformList, i => (n(), a("div", { key: `${i.slotsTypeID || i.vendorId}-${i.gameID}`, class: "item", onClick: _ => (l.enterGame ? c(u)(i) : c(o)(Object.assign({}, i, { key: s.code }))) }, [te(e("img", cM, null, 512), [[d, i.vendorImg || i.img || i.imgUrl]]), l.title ? (n(), a("div", uM, t(l.title), 1)) : B("", !0), l.odd ? (n(), a("div", rM, [e("span", null, t(v.$t("winOdds")), 1), e("span", null, t(i.winOdds) + "%", 1), e("div", { class: "win-p", style: Ze({ width: `${Math.min(i.winOdds, 100)}%` }) }, null, 4)])) : B("", !0)], 8, iM))),
                        128,
                     )),
                  ],
                  2,
               )
            );
         };
      },
   });
const _M = H(dM, [["__scopeId", "data-v-c32b0a59"]]),
   vM = { alt: "" },
   pM = V({
      __name: "ElectronicWinRate",
      setup(l) {
         const s = je(),
            o = q(() => s.winRate.electronicWinRateImgUrl || ""),
            u = q(() => !!(s.winRate.isShowElectronicWinRateExternalLink && o.value)),
            v = () => {
               s.winRate.electronicWinRateExternalLink && window.open(s.winRate.electronicWinRateExternalLink);
            };
         return (p, d) => {
            const i = Te("lazy");
            return u.value ? (n(), a("div", { key: 0, class: "WinRate", onClick: v }, [te(e("img", vM, null, 512), [[i, o.value]])])) : B("", !0);
         };
      },
   });
const mM = H(pM, [["__scopeId", "data-v-6b08a525"]]),
   gM = l => (ye("data-v-147ef759"), (l = l()), fe(), l),
   hM = { class: "electron" },
   yM = ["onClick"],
   fM = gM(() =>
      e(
         "svg",
         { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
         [
            e("path", {
               "fill-rule": "evenodd",
               "clip-rule": "evenodd",
               d: "M21.1309 8.86956C21.1309 7.28475 22.4156 6 24.0004 6C25.5852 6 26.87 7.28474 26.87 8.86956V9.82607H28.8124C38.3048 9.82607 45.9999 17.1078 45.9999 26.0904C45.9999 34.255 39.6423 41.0145 31.3562 42.1778C30.3848 42.3142 29.5046 41.5102 29.3905 40.5359C29.0926 37.9913 26.82 36.0658 24.1145 36.0658C21.409 36.0658 19.1364 37.9913 18.8385 40.5359C18.696 41.5143 17.8438 42.3327 16.863 42.2072C8.47001 41.1335 2 34.3269 2 26.0904C2 17.1078 9.69507 9.82607 19.1874 9.82607H21.1309V8.86956ZM18.144 19.5136C17.9414 19.4328 17.7242 19.3913 17.5049 19.3913C17.0619 19.3913 16.6361 19.5606 16.3229 19.862C16.0097 20.1633 15.8337 20.5721 15.8337 20.9983V23.5235H13.2351C12.7922 23.5235 12.3675 23.6929 12.0544 23.9943C11.7412 24.2956 11.5653 24.7043 11.5653 25.1305C11.5653 25.5567 11.7412 25.9654 12.0544 26.2668C12.3675 26.5681 12.7922 26.7375 13.2351 26.7375H15.8359V29.2627C15.836 29.6889 16.012 30.0976 16.3252 30.3989C16.6384 30.7002 17.0631 30.8695 17.506 30.8695C17.9489 30.8695 18.3736 30.7002 18.6868 30.3989C19 30.0976 19.176 29.6889 19.176 29.2627V26.7375H21.7724C22.2153 26.7375 22.64 26.5681 22.9531 26.2668C23.2663 25.9654 23.4422 25.5567 23.4422 25.1305C23.4422 24.7043 23.2663 24.2956 22.9531 23.9943C22.64 23.6929 22.2153 23.5235 21.7724 23.5235H19.1749V20.9983C19.1749 20.7873 19.1317 20.5783 19.0478 20.3833C18.9639 20.1883 18.8409 20.0112 18.6858 19.862C18.5307 19.7127 18.3466 19.5944 18.144 19.5136ZM34.0326 19.862C33.7194 19.5606 33.2946 19.3913 32.8517 19.3913C32.6324 19.3913 32.4152 19.4328 32.2126 19.5136C32.01 19.5944 31.8259 19.7127 31.6708 19.862C31.5157 20.0112 31.3927 20.1883 31.3088 20.3833C31.2249 20.5783 31.1817 20.7873 31.1817 20.9983V21.9164C31.1817 22.3426 31.3577 22.7513 31.6709 23.0526C31.9841 23.354 32.4088 23.5232 32.8517 23.5232C33.2946 23.5232 33.7193 23.354 34.0325 23.0526C34.3457 22.7513 34.5217 22.3426 34.5218 21.9164V20.9983C34.5218 20.5721 34.3458 20.1633 34.0326 19.862ZM34.0326 27.2082C33.7194 26.9068 33.2946 26.7375 32.8517 26.7375C32.4088 26.7375 31.984 26.9068 31.6708 27.2082C31.3576 27.5096 31.1817 27.9184 31.1817 28.3446V29.2627C31.1817 29.6889 31.3577 30.0976 31.6709 30.3989C31.9841 30.7002 32.4088 30.8695 32.8517 30.8695C33.2946 30.8695 33.7193 30.7002 34.0325 30.3989C34.3457 30.0976 34.5217 29.6889 34.5218 29.2627V28.3446C34.5218 27.9184 34.3458 27.5096 34.0326 27.2082Z",
               fill: "#F95959",
            }),
         ],
         -1,
      ),
   ),
   bM = V({
      __name: "Electron",
      props: { title: { type: String, default: "" } },
      setup(l) {
         const s = ue(),
            { getElectronChildGame: o, electronList: u, allGame: v } = bs();
         he(async () => {
            await o();
         });
         const p = async d => {
            var _;
            const i = { slotsName: d.vendorCode, slotsTypeID: (_ = d.childList[0]) == null ? void 0 : _.vendorId };
            sessionStorage.setItem("slotGamesList", JSON.stringify(v.value.slot)), sessionStorage.setItem("clickedItem", JSON.stringify(i)), sessionStorage.setItem("gameType", JSON.stringify("slot")), await s.push({ name: "AllOnlineGames" });
         };
         return (d, i) => (
            n(),
            a(
               N,
               null,
               [
                  L(mM),
                  (n(!0),
                  a(
                     N,
                     null,
                     D(c(u), _ => (n(), a("div", hM, [L(ss, { icon: !0, title: _.vendorCode }, null, 8, ["title"]), L(ys, { "enter-game": !0, "is-all": !0, "platform-list": _.childList.slice(0, 6) }, null, 8, ["platform-list"]), e("div", { class: "electron-btn", onClick: r => p(_) }, [fM, e("span", null, t(d.$t("allGame")), 1)], 8, yM)]))),
                     256,
                  )),
               ],
               64,
            )
         );
      },
   });
const $M = H(bM, [["__scopeId", "data-v-147ef759"]]),
   CM = { class: "gameScenes-daman" },
   kM = { class: "row space" },
   TM = ["onClick"],
   wM = { class: "game_image", alt: "" },
   LM = { class: "game_bg", alt: "" },
   IM = { class: "game_text" },
   SM = { class: "row wrap" },
   GM = ["onClick"],
   xM = { class: "game_image", alt: "" },
   BM = { class: "game_bg", alt: "" },
   NM = { class: "game_text" },
   RM = { key: 0, class: "game-list" },
   MM = { key: 1, class: "game-list" },
   DM = 10,
   AM = V({
      __name: "index",
      setup(l) {
         const s = je(),
            { t: o } = _e(),
            u = ue(),
            v = (W = []) => (W.length < 6 ? W : W.slice(0, 6)),
            p = [
               { key: "lottery", name: o("lottery") },
               { key: "flash", name: o("miniGame") },
               { key: "popular", name: o("hot"), state: 1 },
               { key: "platformList", name: o("platRecom"), state: 1 },
               { key: "slot", name: o("electronic") },
               { key: "sport", name: o("sport") },
               { key: "video", name: o("live") },
               { key: "fish", name: o("fishing") },
               { key: "chess", name: o("chess") },
            ],
            { gameList: d, setActive: i, active: _, useProvid: r, getGameList: g, gameType: m, currentList: $, allGame: y, currentGame: C, current: f, platformList: b } = yi(),
            T = q(() => d.value.slice(0, 2)),
            h = q(() => d.value.slice(2, d.value.length)),
            w = q(() =>
               p
                  .filter(W => W.key !== "popular")
                  .map(W => {
                     var le, ie, ne;
                     if (W.key === "popular") {
                        const z = ((le = y.value) == null ? void 0 : le[W.key]) || [],
                           X = z[1] || [];
                        return Object.assign(W, { list: v(z[1]), count: X.length, name: o("code9302Popular") });
                     }
                     if (W.key === "platformList") return Object.assign({}, W, { list: v(b.value), count: b.value.length, key: "popular" });
                     if (W.key === "video") {
                        const z = ((ie = y.value) == null ? void 0 : ie.clicksVideoTopList) || [],
                           X = z[1] || [];
                        return Object.assign({ list: v(z), count: X.length }, W);
                     }
                     const J = ((ne = y.value) == null ? void 0 : ne[W.key]) || [];
                     return Object.assign({ list: v(J), count: J.length }, W);
                  }),
            ),
            I = k(),
            x = k(),
            S = k(),
            G = async W => {
               var ne;
               if ((i(d.value.findIndex(z => z.key === W)), !x.value)) return;
               const J = x.value.offsetTop || 0,
                  le = ((ne = S.value) == null ? void 0 : ne.clientHeight) || 0;
               let ie = J - (le === 0 ? 70 : le);
               window.scrollTo({ top: ie, behavior: "smooth" });
            },
            R = W => {
               u.push({ name: "AllGames", query: { type: W } });
            },
            O = ze({ fixed: !1 });
         vl(window, {
            onScroll() {
               const W = ml(I);
               O.fixed = DM > W.top;
            },
            throttle: 100,
         });
         const P = () => {
            if (!x.value || !S.value) return;
            const W = x.value.offsetTop || 0,
               J = S.value.clientHeight;
            let le = W - J;
            window.scrollTo({ top: le - 10, behavior: "smooth" });
         };
         return (
            he(() => g(!0)),
            r(),
            (W, J) => {
               var ie, ne;
               const le = Te("lazy");
               return (
                  n(),
                  a("div", CM, [
                     e(
                        "div",
                        { class: "game-menu", ref_key: "root", ref: I },
                        [
                           e("div", kM, [
                              (n(!0),
                              a(
                                 N,
                                 null,
                                 D(T.value, z => (n(), a("div", { class: "row-item", onClick: X => G(z.key) }, [te(e("img", wM, null, 512), [[le, z.img]]), te(e("img", LM, null, 512), [[le, z.image]]), e("div", IM, t(z.title), 1)], 8, TM))),
                                 256,
                              )),
                           ]),
                           e("div", SM, [
                              (n(!0),
                              a(
                                 N,
                                 null,
                                 D(h.value, z => (n(), a("div", { class: M(["row-item row-small", [`game_${z.key}`]]), onClick: X => G(z.key) }, [te(e("img", xM, null, 512), [[le, z.img]]), te(e("img", BM, null, 512), [[le, z.image]]), e("div", NM, t(z.title), 1)], 10, GM))),
                                 256,
                              )),
                           ]),
                        ],
                        512,
                     ),
                     L(pl, { name: "van-fade" }, { default: A(() => [O.fixed ? (n(), a("div", { key: 0, class: "game-sticky", ref_key: "sticky", ref: S }, [L(Xt, { list: c(d), active: c(_), "onUpdate:active": J[0] || (J[0] = z => (it(_) ? (_.value = z) : null)), tabClassName: "tabs", activeClassName: "tab_active", ref: "tabRefs", tabItemClassName: "funtab_item", onOnClickTab: P }, { default: A(({ item: z, index: X }) => [e("div", { class: M(["tab_item", { tab_active: X === c(_) }]) }, [te(e("img", null, null, 512), [[le, z.img]]), e("span", null, t(z.title), 1)], 2)]), _: 1 }, 8, ["list", "active"])], 512)) : B("", !0)]), _: 1 }),
                     e(
                        "div",
                        { class: "game-content", ref_key: "content", ref: x },
                        [
                           ["popular"].includes(c(C))
                              ? (n(),
                                a("div", RM, [
                                   (n(!0),
                                   a(
                                      N,
                                      null,
                                      D(
                                         w.value,
                                         z => (
                                            n(),
                                            a("div", { class: "", key: z.key }, [
                                               L(ss, { btn: !0, count: z.count, onChange: X => R(z.key), title: z.name, icon: !["popular"].includes(z.key) }, null, 8, ["count", "onChange", "title", "icon"]),
                                               ["popular"].includes(z.key) ? (n(), Z(ys, { key: 0, odd: c(s).isShowHotGameWinOdds, "is-all": !0, "platform-list": z.list }, null, 8, ["odd", "platform-list"])) : B("", !0),
                                               ["lottery"].includes(z.key) ? (n(), Z(PR, { key: 1, "platform-list": z.list }, null, 8, ["platform-list"])) : B("", !0),
                                               ["flash", "fish", "video"].includes(z.key) ? (n(), Z(ys, { key: 2, title: ["sport", "chess"].includes(z.key) ? z.name : "", "is-all": !0, "platform-list": z.list, code: z.key, "enter-game": ["video"].includes(z.key) }, null, 8, ["title", "platform-list", "code", "enter-game"])) : B("", !0),
                                               ["sport", "slot", "chess"].includes(z.key) ? (n(), Z(_M, { key: 3, title: ["sport", "chess"].includes(z.key) ? z.name : "", "is-all": !0, "platform-list": z.list, code: z.key, "enter-game": ["video"].includes(z.key) }, null, 8, ["title", "platform-list", "code", "enter-game"])) : B("", !0),
                                            ])
                                         ),
                                      ),
                                      128,
                                   )),
                                ]))
                              : (n(), a("div", MM, [["slot", "lottery", "video"].includes(c(C)) ? B("", !0) : (n(), Z(ss, { key: 0, icon: !0, title: (ie = c(f)) == null ? void 0 : ie.title }, null, 8, ["title"])), c(m) === 3 ? (n(), Z(lM, { key: 1, "platform-list": c($) }, null, 8, ["platform-list"])) : B("", !0), ["slot"].includes(c(C)) ? (n(), Z($M, { key: 2 })) : B("", !0), ["video"].includes(c(C)) ? (n(), Z(kR, { key: 3 })) : B("", !0), ["fish"].includes(c(C)) ? (n(), Z(ys, { key: 4, "enter-game": !0, "is-all": !0, "platform-list": c($) }, null, 8, ["platform-list"])) : B("", !0), ["flash", "sport", "chess"].includes(c(C)) ? (n(), Z(ys, { key: 5, title: ["sport", "chess"].includes(c(C)) ? ((ne = c(f)) == null ? void 0 : ne.title) : "", "is-all": !0, "platform-list": c($) }, null, 8, ["title", "platform-list"])) : B("", !0)])),
                        ],
                        512,
                     ),
                  ])
               );
            }
         );
      },
   });
const PM = H(AM, [["__scopeId", "data-v-5e0ab83c"]]),
   OM = { class: "notice-domain" },
   VM = { class: "notice-domain-body" },
   WM = { key: 0, class: "notice-domain-body-text" },
   HM = Dt('<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-25614c07><path d="M16.8 27.2H9.59999V40.4C9.59999 42.3883 11.2117 44 13.2 44C15.1883 44 16.8 42.3883 16.8 40.4V27.2Z" fill="#F95959" data-v-25614c07></path><path opacity="0.6" d="M19 12H9C7.3431 12 6 13.3431 6 15V25C6 26.6569 7.3431 28 9 28H20" fill="#F95959" data-v-25614c07></path><path opacity="0.6" d="M34 14H36C39.3137 14 42 16.6863 42 20C42 23.3137 39.3137 26 36 26H34" fill="#F95959" data-v-25614c07></path><path d="M33.7946 34C33.9081 34 34 33.9079 34 33.7943V6.20579C34 6.09214 33.9081 6 33.7946 6H30.3765C22.6575 6 16.4 12.2681 16.4 20C16.4 27.7319 22.6575 34 30.3765 34H33.7946Z" fill="#F95959" data-v-25614c07></path><circle cx="41" cy="7" r="6.5" fill="#FA5B5B" stroke="white" data-v-25614c07></circle></svg>', 1),
   zM = V({
      __name: "index",
      setup(l) {
         const { getNotice: s, noticeList: o, goNotice: u } = fi();
         return (
            he(() => s()),
            (v, p) => {
               var d;
               return n(), a("div", OM, [L(sn, { name: "voice", color: "#F84948" }), e("div", VM, [c(o) && c(o)[0] && c(o)[0].siteMessage ? (n(), a("div", WM, t((d = c(o)[0]) == null ? void 0 : d.siteMessage), 1)) : B("", !0)]), e("button", { onClick: p[0] || (p[0] = (...i) => c(u) && c(u)(...i)) }, [HM, L(As)])]);
            }
         );
      },
   });
const EM = H(zM, [["__scopeId", "data-v-25614c07"]]),
   FM = { class: "content-daman content" },
   jM = ["src"],
   UM = { key: 0, class: "content-daman__right" },
   qM = { key: 1, class: "content-daman__right" },
   KM = e("div", { class: "message_icon" }, null, -1),
   ZM = { class: "promptHeader" },
   XM = ["innerHTML"],
   JM = { class: "Laundry-Con" },
   YM = { class: "Laundry-Con_tip" },
   QM = { class: "Landty-Con-tips" },
   eD = V({
      __name: "damanHome",
      setup(l) {
         const { closeLaundry: s, closePrompt: o, store: u, promptContent: v } = fs(),
            { t: p } = _e(),
            d = ue(),
            i = rt(),
            { setLoading: _ } = Jt(),
            r = je();
         Nt(() => Rt(() => import("./messageIcon-648b7258.js"), ["assets/js/messageIcon-648b7258.js", "assets/js/page-activity-6d456111.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/native/index-3d731397.js", "assets/js/en-53bf8069.js", "assets/js/rus-ecb14220.js", "assets/js/vi-60d1c3eb.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-38f5b166.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-dbcb2394.js", "assets/js/ar-78aaffbf.js", "assets/css/page-activity-9da3f4e3.css"]));
         const g = La("show-pwa-download", !0);
         function m() {
            d.push({ name: "Messages" });
         }
         const $ = q(() => r.getIsShowAppDownloadIcon);
         _(!1);
         const y = () => {
            s(), d.push({ name: "SuperJackpot" });
         };
         k(!1);
         const C = k(!0);
         async function f() {
            const T = Gs();
            (C.value = !(i.getUserInfo.unRead > 0)), T.setReadState(C.value);
         }
         const b = q(() => r.getProjectLogo);
         return (
            he(() => {
               f(), _(!1);
            }),
            (T, h) => {
               const w = U("NavBar"),
                  I = U("van-dialog");
               return (
                  n(),
                  a("div", FM, [
                     L(w, null, { left: A(() => [e("img", { src: b.value, alt: "" }, null, 8, jM)]), right: A(() => [c(i).getToken ? (n(), a("div", qM, [e("div", { class: "message", onClick: m }, [KM, te(L(As, { class: "point" }, null, 512), [[He, !C.value]])])])) : (n(), a("div", UM, [e("div", { class: "nav-btn login-btn", onClick: h[0] || (h[0] = x => c(d).push({ name: "login" })) }, t(c(p)("login")), 1), e("div", { class: "nav-btn register-btn", onClick: h[1] || (h[1] = x => c(d).push({ name: "register" })) }, t(c(p)("register")), 1)]))]), _: 1 }),
                     L(Ls),
                     L(EM),
                     L(PM),
                     L(en),
                     L(tn),
                     L(oR),
                     L(GN, { type: "daman" }),
                     c(g) && $.value ? (n(), Z(Is, { key: 0 })) : B("", !0),
                     L(I, { "class-name": "prompt-dialog", show: c(u).prompt, "onUpdate:show": h[2] || (h[2] = x => (c(u).prompt = x)), onConfirm: c(o), "confirm-button-text": c(p)("confirm") }, { default: A(() => [e("div", ZM, t(c(p)("prompt")), 1), e("div", { class: "promptContent", innerHTML: c(v) }, null, 8, XM)]), _: 1 }, 8, ["show", "onConfirm", "confirm-button-text"]),
                     L(ws, { show: c(u).laundry, "onUpdate:show": h[3] || (h[3] = x => (c(u).laundry = x)), onConfirm: y, "show-cancel-btn": !1, confirmText: "OK", title: c(p)("congratulations") }, { content: A(() => [e("div", JM, [e("div", YM, t(c(p)("getSuper")), 1), e("div", QM, t(c(p)("getRewards")), 1)])]), _: 1 }, 8, ["show", "title"]),
                  ])
               );
            }
         );
      },
   });
const zV = Object.freeze(Object.defineProperty({ __proto__: null, default: eD }, Symbol.toStringTag, { value: "Module" })),
   tD = { key: 0, alt: "" },
   sD = V({
      __name: "index",
      props: { tabList: {}, visibileAll: { type: Boolean, default: !0 }, currentMenu: {}, isShowIcon: { type: Boolean, default: !0 }, isBg: { type: Boolean, default: !0 } },
      emits: ["tabChange", "update:currentMenu"],
      setup(l, { expose: s, emit: o }) {
         const u = l,
            v = k(),
            p = g => (g.img.includes("http") ? g.img : pe("electronic", g.img, "png")),
            d = k(0),
            i = q(() => {
               let g = Ns(u.tabList);
               return g.length === 1 ? [] : g;
            }),
            _ = g => {
               let { item: m, index: $ } = g;
               o("tabChange", { item: m, index: $ }), o("update:currentMenu", d.value);
            },
            r = q(() => u.tabList[d.value]);
         return (
            Ve(
               () => u.currentMenu,
               g => {
                  d.value = g;
               },
               { immediate: !0 },
            ),
            s({ currentTab: d, currentMenu: r, tabRef: v }),
            (g, m) => {
               const $ = Te("lazy");
               return n(), Z(Xt, { list: i.value, active: d.value, "onUpdate:active": m[0] || (m[0] = y => (d.value = y)), tabClassName: "tabs", onOnClickTab: _, activeClassName: "tab_active", ref: "tabRefs", tabItemClassName: "funtab_item" }, { default: A(({ item: y, index: C }) => [e("div", { class: M(["tab_item", { tab_active: C === d.value, allGame: !g.isShowIcon }]) }, [g.isShowIcon ? te((n(), a("img", tD, null, 512)), [[$, p(y)]]) : B("", !0), e("span", null, t(y.title), 1)], 2)]), _: 1 }, 8, ["list", "active"]);
            }
         );
      },
   });
const nD = H(sD, [["__scopeId", "data-v-a6e25d2d"]]),
   aD = l => (ye("data-v-61e835e3"), (l = l()), fe(), l),
   oD = { key: 1 },
   lD = { key: 2, class: "win-odds" },
   iD = ["onClick"],
   cD = { key: 0, class: "big_prize" },
   uD = { class: "info" },
   rD = { class: "text" },
   dD = { class: "title" },
   _D = { class: "award" },
   vD = aD(() => e("div", null, null, -1)),
   pD = { class: "multiple" },
   mD = V({
      __name: "index",
      props: { type: {}, gameItem: {}, gameType: {}, isWidth: { type: Boolean, default: !1 }, isElec: { type: Boolean, default: !1 } },
      setup(l) {
         const s = l;
         zs(y => ({ "13347fbe": i.value }));
         const { t: o } = _e(),
            { homeState: u, onItemClick: v } = Ue(),
            p = je(),
            d = { sport: o("sport"), video: o("live"), chess: o("chess") },
            i = q(() => {
               let y = Ka() === 0;
               return s.isWidth ? (y ? 248 / 2 : 218 / 2) + "px" : "100%";
            }),
            _ = q(() => {
               let y = s.gameItem;
               return y.imgUrl || y.img || y.vendorImg || y.categoryImg;
            }),
            r = q(() => (s.gameType === "lottery" ? `url(${s.gameItem.categoryImg})` : `url(${s.gameItem.vendorImg})`)),
            g = y => {
               var f, b;
               if (!rt().token) {
                  hs.push({ name: "login" });
                  return;
               }
               if (s.type === "1")
                  if (!["slot"].includes(s.gameType)) v(y);
                  else {
                     if (s.isElec) {
                        v(y);
                        return;
                     }
                     sessionStorage.setItem("slotGamesList", JSON.stringify((f = u.allGameList) == null ? void 0 : f.slot)), sessionStorage.setItem("gameType", JSON.stringify("slot")), sessionStorage.setItem("clickedItem", JSON.stringify(s.gameItem)), hs.push({ name: "AllOnlineGames" });
                  }
               else if ((s.gameType === "lottery" && m(), (s.gameType === "video" || s.gameType === "sport") && v(y), s.gameType === "chess")) {
                  if (s.isElec) {
                     v(y);
                     return;
                  }
                  sessionStorage.setItem("slotGamesList", JSON.stringify((b = u.allGameList) == null ? void 0 : b.chess)), sessionStorage.setItem("gameType", JSON.stringify("chess")), sessionStorage.setItem("clickedItem", JSON.stringify(s.gameItem)), hs.push({ name: "AllOnlineGames" });
               }
            },
            m = () => {
               hs.push({ name: "AllLotteryGames-" + $(s.gameItem.categoryCode, !0) });
            },
            $ = (y, C) => {
               if (y) {
                  let f = y;
                  switch (y) {
                     case "5D":
                        if (C) return "5D";
                        f = f.toLocaleUpperCase() + "";
                        break;
                     case "K3":
                        if (C) return "K3";
                        break;
                     case "Trx Win Go":
                        if (C) return "WinTrx";
                        f = "Trx Hash";
                        break;
                     case "XOSO":
                        if (C) return "XoSo";
                        f = "XoSo";
                        break;
                     default:
                        if (C) return "WinGo";
                        f = f;
                  }
                  return f;
               }
               return "";
            };
         return (y, C) => {
            const f = Te("lazy");
            return ["1", "2"].includes(y.type) && y.gameType !== "bigaward"
               ? (n(), a("div", { key: 0, class: M(["gameItem1", { elec: y.gameType === "slot" }]), onClick: C[0] || (C[0] = ut(b => g(y.gameItem), ["stop"])) }, [y.gameType === "slot" ? (n(), a("div", { key: 0, class: "slot_bg", style: Ze({ backgroundImage: `url(${_.value})` }) }, null, 4)) : te((n(), a("img", oD, null, 512)), [[f, _.value]]), ["clicksTopList", "platformList"].includes(y.gameType) && c(p).isShowHotGameWinOdds ? (n(), a("div", lD, [e("span", null, t(y.$t("winOdds")), 1), e("span", null, t(y.gameItem.winOdds) + "%", 1), e("div", { class: "win-p", style: Ze({ width: `${Math.min(y.gameItem.winOdds, 100)}%` }) }, null, 4)])) : B("", !0)], 2))
               : (n(), a("div", { key: 1, class: "gameImte2", onClick: ut(g, ["stop"]) }, [y.gameType === "bigaward" ? (n(), a("div", cD, [e("div", { class: "bg", style: Ze({ backgroundImage: `url(${y.gameItem.imgUrl})` }) }, null, 4), e("div", uD, [e("div", rD, [e("div", dD, t(y.gameItem.gameName), 1), e("div", _D, t(c(Be)(y.gameItem.bonusAmount)), 1), vD]), e("div", pD, t(y.gameItem.multiple) + "X", 1)])])) : (n(), a("div", { key: 1, class: "other_style", style: Ze({ backgroundImage: r.value }) }, [e("div", null, t(d[y.gameType]), 1)], 4))], 8, iD));
         };
      },
   });
const gD = H(mD, [["__scopeId", "data-v-61e835e3"]]),
   vo = l => (ye("data-v-118f6f1f"), (l = l()), fe(), l),
   hD = { class: "aloneGame" },
   yD = { class: "header" },
   fD = { key: 0, class: "title" },
   bD = ["src"],
   $D = vo(() => e("span", { class: "all" }, "ALL", -1)),
   CD = { class: "len" },
   kD = { key: 1, class: "right_btn" },
   TD = { key: 0, class: "flash_desc" },
   wD = { key: 1, class: "flash_desc awar_desc" },
   LD = vo(() => e("br", null, null, -1)),
   ID = { class: "amount" },
   SD = V({
      __name: "index",
      props: { title: {}, isAll: { type: Boolean, default: !1 }, gameType: {}, gameList: {}, isShowMore: { type: Boolean, default: !1 }, currentMenuType: {}, isShowBtn: { type: Boolean, default: !1 }, isShowTitle: { type: Boolean, default: !0 } },
      emits: ["goAll"],
      setup(l, { emit: s }) {
         const o = l;
         zs(w => ({ "1bbe53d8": w.swipeHeight }));
         const { homeState: u } = Ue(),
            { t: v } = _e(),
            p = bi(),
            d = ue(),
            i = k(),
            _ = je();
         q(() => u.allGameList);
         const r = (w, I) => {
               switch (o.gameType) {
                  case "lottery":
                     return w.name + "" + I;
                  case "all":
                  case "clicksTopList":
                  case "platformList":
                  case "fish":
                  case "flash":
                     return w.vendorId + "" + I;
                  default:
                     return w.slotsTypeID + "" + I;
               }
            },
            g = q(() => _.getJackportMaxReswadAmount),
            m = q(() => {
               const w = o.gameType;
               return w === "flash" || w === "slot" || w === "fish" || w === "clicksTopList" || w === "platformList" ? "1" : "2";
            }),
            $ = (w, I) => {
               const x = [];
               for (let S = 0; S < Math.ceil(w.length / I); S++) {
                  const G = S * I,
                     R = G + I;
                  x.push(w.slice(G, R));
               }
               return x;
            },
            y = q(() => {
               if (o.isAll) return $(o.gameList, o.gameList.length);
               if (o.currentMenuType === 0 && (o.gameType === "clicksTopList" || o.gameType === "platformList")) {
                  let w = o.gameList;
                  return w.length > 6 ? $(w, 6) : $(o.gameList, w.length);
               } else if (o.currentMenuType === 0 && o.gameType === "slot") return $(o.gameList, o.gameList.length);
               return o.currentMenuType === 0 && o.gameType === "bigaward" ? $(o.gameList.slice(0, 6), 6) : $(o.gameList, 3);
            }),
            C = w => {
               var I, x;
               w === "left" ? (I = i.value) == null || I.prev() : (x = i.value) == null || x.next();
            },
            f = () => {
               d.push({ path: "/main/SuperJackpot" });
            },
            b = k(0),
            T = w => {
               b.value = w;
            },
            h = () => {
               if ((p.emit("changeKeepAliveKey"), o.gameType === "clicksTopList" || o.gameType === "platformList")) {
                  s("goAll", "popular");
                  return;
               }
               s("goAll", o.gameType);
            };
         return (w, I) => {
            const x = U("van-icon");
            return (
               n(),
               a("div", hD, [
                  e("div", yD, [w.isShowTitle ? (n(), a("div", fD, [e("img", { src: c(pe)("electronic", w.gameType), alt: "", class: "icons" }, null, 8, bD), E(" " + t(w.title) + " ", 1), w.gameType !== "bigaward" ? (n(), a("div", { key: 0, onClick: h }, [$D, e("span", CD, t(w.gameList.length), 1)])) : B("", !0)])) : B("", !0), w.isShowBtn ? (n(), a("div", kD, [L(x, { name: "arrow-left", class: M({ active: b.value == 0 }), onClick: I[0] || (I[0] = S => C("left")) }, null, 8, ["class"]), L(x, { name: "arrow", class: M({ active: b.value === y.value.length - 1 }), onClick: I[1] || (I[1] = S => C("right")) }, null, 8, ["class"])])) : B("", !0)]),
                  w.gameType === "flash" ? (n(), a("div", TD, t(w.$t("flashDesc", [c(_).getProjectName])), 1)) : B("", !0),
                  w.gameType === "bigaward" ? (n(), a("div", wD, [E(t(w.$t("awarDesc1")), 1), LD, E(" " + t(w.$t("awarDesc2")) + " ", 1), e("span", ID, t(c(Be)(g.value)), 1)])) : B("", !0),
                  L(
                     c(Sa),
                     { class: "my-swipe", ref_key: "swipeRef", ref: i, autoplay: w.gameType !== "flash" ? "-" : 3e3, onChange: T, "lazy-render": !1, "show-indicators": !1 },
                     {
                        default: A(() => [
                           (n(!0),
                           a(
                              N,
                              null,
                              D(
                                 y.value,
                                 (S, G) => (
                                    n(),
                                    Z(
                                       c(Ia),
                                       { key: w.gameType + G, class: M({ isShowAll: w.isAll, gys: w.gameType === "slot" && w.isAll && w.currentMenuType === 0 }) },
                                       {
                                          default: A(() => [
                                             (n(!0),
                                             a(
                                                N,
                                                null,
                                                D(S, (R, O) => (n(), Z(gD, { class: "item_two", "game-type": w.gameType, "game-item": R, key: r(R, O), type: m.value, "is-width": w.isAll }, null, 8, ["game-type", "game-item", "type", "is-width"]))),
                                                128,
                                             )),
                                          ]),
                                          _: 2,
                                       },
                                       1032,
                                       ["class"],
                                    )
                                 ),
                              ),
                              128,
                           )),
                        ]),
                        _: 1,
                     },
                     8,
                     ["autoplay"],
                  ),
                  w.isShowMore && w.gameList.length > 9 ? (n(), a("div", { key: 2, class: "look_all", onClick: h }, t(c(v)("viewAll")), 1)) : B("", !0),
                  w.gameType === "bigaward" ? (n(), a("div", { key: 3, class: "look_all look_awar", onClick: f }, t(w.$t("lookBigAward")), 1)) : B("", !0),
                  w.gameType === "lottery" ? (n(), a("div", { key: 4, class: "ChangLong", onClick: I[2] || (I[2] = S => c(d).push({ name: "AllLotteryGames-ChangLong" })) })) : B("", !0),
               ])
            );
         };
      },
   });
const GD = H(SD, [["__scopeId", "data-v-118f6f1f"]]),
   po = l => (ye("data-v-813608ce"), (l = l()), fe(), l),
   xD = { class: "winning" },
   BD = { class: "title" },
   ND = { class: "wrapper" },
   RD = { class: "avatar" },
   MD = po(() => e("div", { class: "avatar_outbg" }, null, -1)),
   DD = ["data-img"],
   AD = po(() => e("div", { class: "level" }, "V1", -1)),
   PD = { class: "info" },
   OD = { class: "name" },
   VD = { class: "winning_icon", alt: "" },
   WD = { class: "winning" },
   HD = V({
      __name: "index",
      setup(l) {
         const { homeState: s, getWinInfoDetail: o, getWinInfo: u } = Ue(),
            v = k(null),
            p = k(null),
            d = i => {
               if (i.length >= 7) return i.substring(0, 3) + "***" + i.substring(i.length - 3, i.length);
               {
                  const _ = "***",
                     r = 7 - i.length,
                     g = "*".repeat(r);
                  return i.substring(0, Math.ceil((7 - r) / 2)) + _ + g + i.substring(Math.ceil((7 - r) / 2));
               }
            };
         return (
            he(async () => {
               await o(),
                  wa(v.value),
                  s.winInfoList.length > 0 &&
                     (p.value = setInterval(async () => {
                        s.winInfoList.unshift(s.winInfoList.pop());
                     }, 3e3));
            }),
            xs(() => {
               clearInterval(p.value);
            }),
            (i, _) => {
               const r = Te("lazy");
               return (
                  n(),
                  a("div", xD, [
                     e("div", BD, t(i.$t("winningDetal")), 1),
                     e("div", ND, [
                        e(
                           "div",
                           { ref_key: "wrapperRef", ref: v },
                           [
                              (n(!0),
                              a(
                                 N,
                                 null,
                                 D(c(u).slice(0, 6), g => (n(), a("div", { class: "win_item", key: g }, [e("div", RD, [MD, te(e("img", { "data-img": c(pe)("home", "avatar") }, null, 8, DD), [[r, c(pe)("main/Avatar", g.userPhoto) || c(pe)("home", "avatar")]]), AD]), e("div", PD, [e("div", OD, t(d(g == null ? void 0 : g.nickName)), 1)]), te(e("img", VD, null, 512), [[r, g.imgUrl]]), e("div", WD, [e("div", null, t(c(Be)(g.amount || 0)), 1), e("div", null, t(i.$t("winningAmount")), 1)])]))),
                                 128,
                              )),
                           ],
                           512,
                        ),
                     ]),
                  ])
               );
            }
         );
      },
   });
const zD = H(HD, [["__scopeId", "data-v-813608ce"]]),
   ED = { class: "profit" },
   FD = { class: "title" },
   jD = { class: "profit__list" },
   UD = ["data-img"],
   qD = { class: "profit__list-item__info" },
   KD = { class: "rank" },
   ZD = { class: "name" },
   XD = { class: "rank_num" },
   JD = ["src"],
   YD = { class: "price" },
   QD = V({
      __name: "index",
      setup(l) {
         const { homeState: s } = Ue(),
            o = u => {
               if (u.length >= 7) return u.substring(0, 3) + "***" + u.substring(u.length - 3, u.length);
               {
                  const v = "***",
                     p = 7 - u.length,
                     d = "*".repeat(p);
                  return u.substring(0, Math.ceil((7 - p) / 2)) + v + d + u.substring(Math.ceil((7 - p) / 2));
               }
            };
         return (u, v) => {
            const p = Te("lazy");
            return (
               n(),
               a("div", ED, [
                  e("div", FD, t(u.$t("earningsRankingToday")), 1),
                  e("div", jD, [
                     (n(!0),
                     a(
                        N,
                        null,
                        D(c(s).rankList, (d, i) => (n(), a("div", { key: i, class: "profit__list-item" }, [te(e("img", { class: "usePhoto", "data-img": c(pe)("home", "avatar") }, null, 8, UD), [[p, d.userPhoto]]), e("div", qD, [e("div", KD, [e("div", ZD, t(o(d.nickName)), 1), e("div", XD, [i < 3 ? (n(), a("img", { key: 0, class: "rank_img", src: c(pe)("electronic", "no" + (i + 1)), alt: "" }, null, 8, JD)) : B("", !0), e("span", { class: M(`no${i + 1}`) }, "NO" + t(i + 1), 3)])]), e("div", YD, t(c(Be)(d.price)), 1)])]))),
                        128,
                     )),
                  ]),
               ])
            );
         };
      },
   });
const eA = H(QD, [["__scopeId", "data-v-acdf9659"]]),
   mo = l => (ye("data-v-ff861a27"), (l = l()), fe(), l),
   tA = { class: "instructions" },
   sA = { class: "instructions_img" },
   nA = ["src"],
   aA = ["src"],
   oA = { class: "desc" },
   lA = mo(() => e("br", null, null, -1)),
   iA = mo(() => e("br", null, null, -1)),
   cA = V({
      __name: "index",
      setup(l) {
         const s = je(),
            o = q(() => s.getHeadLogo);
         return (u, v) => (n(), a("div", tA, [e("div", sA, [e("img", { src: c(pe)("home", "u18"), alt: "", class: "u18" }, null, 8, nA), e("img", { src: o.value, class: "logo" }, null, 8, aA)]), e("div", oA, [E(t(u.$t("instructions", [c(s).getProjectName])), 1), lA, E(" " + t(u.$t("instructions2")) + " ", 1), iA, E(" " + t(u.$t("instructions3", [c(s).getProjectName])), 1)])]));
      },
   });
const uA = H(cA, [["__scopeId", "data-v-ff861a27"]]),
   rA = { alt: "" },
   dA = V({
      __name: "ElectronicWinRate",
      setup(l) {
         const s = je(),
            o = q(() => s.winRate.electronicWinRateImgUrl || ""),
            u = q(() => !!(s.winRate.isShowElectronicWinRateExternalLink && o.value)),
            v = () => {
               s.winRate.electronicWinRateExternalLink && window.open(s.winRate.electronicWinRateExternalLink);
            };
         return (p, d) => {
            const i = Te("lazy");
            return u.value ? (n(), a("div", { key: 0, class: "WinRate", onClick: v }, [te(e("img", rA, null, 512), [[i, o.value]])])) : B("", !0);
         };
      },
   });
const go = H(dA, [["__scopeId", "data-v-f138810a"]]),
   _A = { class: "slot_list" },
   vA = { class: "slot_title" },
   pA = ["src"],
   mA = { class: "slot_img_box" },
   gA = ["onClick"],
   hA = ["onClick"],
   yA = V({
      __name: "index",
      setup(l) {
         const { start: s, end: o, flag: u } = Za(),
            v = ue(),
            { t: p } = _e(),
            { getSlotList: d, homeState: i } = Ue(),
            _ = m => (m.indexOf("_") === -1 ? m : m.split("_")[0]),
            r = m => {
               const $ = i.allGameList.slot.find(y => y.slotsName === m.vendorCode);
               sessionStorage.setItem("slotGamesList", JSON.stringify(i.allGameList.slot)), sessionStorage.setItem("gameType", JSON.stringify("slot")), sessionStorage.setItem("clickedItem", JSON.stringify($)), v.push({ name: "AllOnlineGames" });
            };
         function g(m) {
            oa({ title: p("tips"), message: p("tipsPlayGame"), cancelButtonText: p("cancel"), showCancelButton: !0 }).then(async () => {
               var y;
               s(() => {
                  oa({ title: "", message: p("gameLoadTimeOut") }).then(() => {
                     v.push({ path: "/" });
                  });
               });
               const $ = await de($i({ vendorCode: Number(m.vendorId), gameCode: m.gameID, phonetype: Ka() }));
               if ($ && !u.value) {
                  if ((!u.value && o(!0), ["5"].includes(`${m.vendorId}`))) return v.push({ name: "game", query: { url: Ci((y = $ == null ? void 0 : $.data) == null ? void 0 : y.url) } });
                  ki() ? Ti("game", { ...($ == null ? void 0 : $.data), gameName: m.gameNameEn }) : Gn($ == null ? void 0 : $.data, 1);
               } else {
                  !u.value && o(!0);
                  return;
               }
               !u.value && o();
            });
         }
         return (
            d(),
            (m, $) => {
               const y = Te("lazy");
               return (
                  n(),
                  a("div", _A, [
                     L(go),
                     (n(!0),
                     a(
                        N,
                        null,
                        D(
                           c(i).slotsGame,
                           C => (
                              n(),
                              a("div", { class: "slot_item", key: C.vendorCode }, [
                                 e("div", vA, [e("img", { src: c(pe)("home/slots", C.vendorCode), alt: "" }, null, 8, pA), E(" " + t(_(C.vendorCode)) + t(m.$t("electric")), 1)]),
                                 e("div", mA, [
                                    (n(!0),
                                    a(
                                       N,
                                       null,
                                       D(C.childList.slice(0, 6), f => te((n(), a("img", { key: f.gameID + C.vendorCode, onClick: b => g(f) }, null, 8, gA)), [[y, f.img]])),
                                       128,
                                    )),
                                 ]),
                                 e("div", { class: "all_slot", onClick: () => r(C) }, t(m.$t("allGame")), 9, hA),
                              ])
                           ),
                        ),
                        128,
                     )),
                  ])
               );
            }
         );
      },
   });
const fA = H(yA, [["__scopeId", "data-v-c3e174df"]]),
   bA = { class: "video_list" },
   $A = { class: "video_title" },
   CA = ["src"],
   kA = { class: "video_img_box" },
   TA = ["onClick"],
   wA = ["onClick"],
   LA = V({
      __name: "index",
      setup(l) {
         Za();
         const s = k([]),
            o = ue();
         _e();
         const { onItemClick: u, getAllGame: v, homeState: p } = Ue(),
            d = async () => {
               const r = await de(wi());
               r && (s.value = r.data);
            },
            i = r => (r.indexOf("_") === -1 ? r : r.split("_")[0]),
            _ = r => {
               const g = p.allGameList.video.find(m => m.slotsName === r.vendorCode);
               sessionStorage.setItem("slotGamesList", JSON.stringify(p.allGameList.video)), sessionStorage.setItem("gameType", JSON.stringify("video")), sessionStorage.setItem("clickedItem", JSON.stringify(g)), o.push({ name: "AllOnlineGames", query: { gameType: "video", currentId: r.childList[0].vendorId } });
            };
         return (
            d(),
            (r, g) => {
               const m = Te("lazy");
               return (
                  n(),
                  a("div", bA, [
                     (n(!0),
                     a(
                        N,
                        null,
                        D(
                           s.value,
                           $ => (
                              n(),
                              a("div", { class: "video_item", key: $.vendorCode }, [
                                 e("div", $A, [e("img", { src: c(pe)("home/slots", $.vendorCode), alt: "" }, null, 8, CA), e("span", null, t(i($.vendorCode)) + t(r.$t("code9306")), 1)]),
                                 e("div", kA, [
                                    (n(!0),
                                    a(
                                       N,
                                       null,
                                       D($.childList.slice(0, 6), y => te((n(), a("img", { key: y.gameID + $.vendorCode, onClick: C => c(u)(y) }, null, 8, TA)), [[m, y.img]])),
                                       128,
                                    )),
                                 ]),
                                 e("div", { class: "all_slot", onClick: () => _($) }, t(r.$t("allGame")), 9, wA),
                              ])
                           ),
                        ),
                        128,
                     )),
                  ])
               );
            }
         );
      },
   });
const IA = H(LA, [["__scopeId", "data-v-c1301701"]]),
   SA = l => (ye("data-v-6ec0f2e1"), (l = l()), fe(), l),
   GA = { id: "home" },
   xA = ["src"],
   BA = { class: "content__right" },
   NA = { class: "content" },
   RA = SA(() => e("div", { id: "game_content" }, null, -1)),
   MA = { class: "TimeLeft__C-PreSale" },
   DA = { class: "TimeLeft__C-PreSale-head" },
   AA = { class: "TimeLeft__C-PreSale-body" },
   PA = ["innerHTML"],
   OA = { class: "TimeLeft__C-PreSale-foot" },
   VA = { class: "Laundry-Con" },
   WA = { class: "Laundry-Con_tip" },
   HA = { class: "Laundry-Con_tips" },
   zA = V({
      __name: "electronic",
      setup(l) {
         const { onDown: s, isAppDownload: o, isAppDownloadIcon: u, getMessagesData: v, showPWA: p, homeState: d, getAllGame: i, getGameType: _, projectIcon: r } = Ue(),
            { t: g } = _e(),
            { closeLaundry: m, closePrompt: $, store: y, promptContent: C } = fs(),
            f = ue(),
            b = k([]),
            T = k(),
            h = ze([]),
            w = k(0),
            I = z => w.value === 0 && z.gameType !== "slot" && z.gameType !== "bigaward",
            x = z => ((z === "popular" && w.value === 0) || (z === "slot" && w.value === 0) ? !0 : w.value !== 0),
            S = () => {
               m(), f.push({ name: "SuperJackpot" });
            },
            G = q(() => {
               let z = h.findIndex(X => X.gameType === le[w.value].type);
               return z < 0 ? -1 : z;
            }),
            R = z => {
               var X;
               return z.gameType === "bigaward" && G.value === -1 ? z.isShow : (w.value === 0 || ((X = h[G.value]) == null ? void 0 : X.gameType) === z.gameType) && z.gameList.length > 0;
            },
            O = z => {
               let { item: X } = z;
               sessionStorage.setItem("currentMenu", X.type);
            };
         function P() {
            f.push({ name: "CustomerService" });
         }
         const W = async () => {
               await ie();
               let z = sessionStorage.getItem("currentMenu");
               (w.value = z ? le.findIndex(ce => ce.type === z) : 0), await i();
               const X = Ns(d.allGameList);
               h.forEach(ce => {
                  ce.gameType === "clicksTopList" ? (ce.gameList = X.popular.clicksTopList) : ce.gameType === "platformList" ? (ce.gameList = X.popular.platformList) : ce.gameType === "bigaward" ? (ce.gameList = X.awardRecordList || []) : ce.gameType === "video" ? (ce.gameList = X.popular.clicksVideoTopList || []) : (ce.gameList = X[ce.gameType]), ce.gameList || (ce.isShow = !1);
               }),
                  sessionStorage.setItem("allGameList", JSON.stringify(h)),
                  sessionStorage.setItem("gameData", JSON.stringify(d.allGameList));
            },
            J = z => {
               f.push({ name: "AllGames", query: { type: z } });
            },
            le = ze([{ title: g("all"), type: "all", img: "all", isShow: !0 }]),
            ie = async () => {
               await _(),
                  d.gameTypeList.forEach(z => {
                     le.push({ title: g("code" + z.typeNameCode + z.categoryCode), type: z.categoryCode.toLocaleLowerCase(), isShow: z.state === 1 && z.categoryCode.toLocaleLowerCase() !== "popular" && z.categoryCode.toLocaleLowerCase() !== "bigaward", img: z.categoryImg }), h.push({ isAll: !1, img: z.categoryImg, isShow: z.state === 1, gameList: [], gameType: z.categoryCode.toLocaleLowerCase() === "popular" ? "clicksTopList" : z.categoryCode.toLocaleLowerCase(), title: g("code" + z.typeNameCode), showTitle: g("code" + z.typeNameCode + z.categoryCode) }), z.categoryCode.toLocaleLowerCase() === "popular" && h.push({ isAll: !1, img: z.categoryImg, isShow: !0, gameList: [], gameType: "platformList", title: g("characteristical"), showTitle: g("characteristical") });
                  });
            };
         return (
            (async () => {
               await W(), await v();
            })(),
            he(async () => {
               const z = await de(wn({ pageNo: 1, pageSize: 5 }));
               z && (b.value = z.data.list);
            }),
            (z, X) => {
               const ce = U("NavBar"),
                  Ne = U("van-popup");
               return (
                  n(),
                  a("div", GA, [
                     L(ce, null, { left: A(() => [e("img", { style: { height: "40px" }, src: c(r), alt: "" }, null, 8, xA)]), right: A(() => [e("div", BA, [c(o) ? (n(), a("div", { key: 0, class: "homeIcon down", onClick: X[0] || (X[0] = (...Se) => c(s) && c(s)(...Se)) })) : B("", !0), e("div", { class: "homeIcon customerIcon", onClick: P })])]), _: 1 }),
                     e("div", NA, [
                        L(Ls),
                        L(Yt, { key: "home", isHome: !0 }),
                        L(nD, { onTabChange: O, ref_key: "tabsRef", ref: T, "tab-list": le, "current-menu": w.value, "onUpdate:currentMenu": X[1] || (X[1] = Se => (w.value = Se)) }, null, 8, ["tab-list", "current-menu"]),
                        te(L(fA, { key: "slots" }, null, 512), [[He, le[w.value].type === "slot"]]),
                        te(L(IA, { key: "video" }, null, 512), [[He, le[w.value].type === "video"]]),
                        RA,
                        te(
                           e(
                              "div",
                              null,
                              [
                                 (n(!0),
                                 a(
                                    N,
                                    null,
                                    D(h, Se => (n(), a("div", { key: Se.gameType + w.value }, [te((n(), Z(GD, { onGoAll: J, title: Se.showTitle, "game-type": Se.gameType, "game-list": Se.gameList, key: Se.gameType, "is-all": x(Se.gameType), "is-show-more": w.value !== 0, currentMenuType: w.value, isShowBtn: I(Se) }, null, 8, ["title", "game-type", "game-list", "is-all", "is-show-more", "currentMenuType", "isShowBtn"])), [[He, R(Se)]])]))),
                                    128,
                                 )),
                              ],
                              512,
                           ),
                           [[He, !["slot", "video"].includes(le[w.value].type)]],
                        ),
                        L(zD),
                        L(eA),
                        L(uA),
                        c(p) && c(u) ? (n(), Z(Is, { key: 0 })) : B("", !0),
                        L(Ms),
                        L(Ne, { show: c(y).prompt, "onUpdate:show": X[3] || (X[3] = Se => (c(y).prompt = Se)), round: "", "confirm-button-text": z.$t("confirm") }, { default: A(() => [e("div", MA, [e("div", DA, t(z.$t("prompt")), 1), e("div", AA, [e("div", { innerHTML: c(C) }, null, 8, PA)]), e("div", OA, [e("div", { class: "TimeLeft__C-PreSale-foot-btn", onClick: X[2] || (X[2] = Se => c($)()) }, t(z.$t("winTrxClose")), 1)])])]), _: 1 }, 8, ["show", "confirm-button-text"]),
                        L(ws, { show: c(y).laundry, "onUpdate:show": X[4] || (X[4] = Se => (c(y).laundry = Se)), onConfirm: S, "show-cancel-btn": !1, confirmText: "OK", title: z.$t("congratulations") }, { content: A(() => [e("div", VA, [e("div", WA, t(z.$t("getSuper")), 1), e("div", HA, t(z.$t("getRewards")), 1)])]), _: 1 }, 8, ["show", "title"]),
                     ]),
                  ])
               );
            }
         );
      },
   });
const EA = H(zA, [["__scopeId", "data-v-6ec0f2e1"]]),
   EV = Object.freeze(Object.defineProperty({ __proto__: null, default: EA }, Symbol.toStringTag, { value: "Module" })),
   FA = { class: "hot_container" },
   jA = { class: "hot_container-item" },
   UA = ["onClick"],
   qA = { key: 0, class: "win-odds" },
   KA = V({
      __name: "HotGameItem",
      props: { gameList: {}, gameType: {} },
      emits: ["onItemClick"],
      setup(l, { emit: s }) {
         const o = je();
         return (u, v) => {
            const p = Te("lazy");
            return (
               n(),
               a("div", FA, [
                  (n(!0),
                  a(
                     N,
                     null,
                     D(u.gameList, d => (n(), a("div", jA, [te(e("img", { onClick: i => u.handleSelect(d) }, null, 8, UA), [[p, d.imgUrl || d.img]]), ["popular"].includes(u.gameType) && c(o).isShowHotGameWinOdds ? (n(), a("div", qA, [e("span", null, t(u.$t("winOdds")), 1), e("span", null, t(d.winOdds) + "%", 1), e("div", { class: "win-p", style: Ze({ width: `${Math.min(d.winOdds, 100)}%` }) }, null, 4)])) : B("", !0)]))),
                     256,
                  )),
               ])
            );
         };
      },
   });
const ZA = H(KA, [["__scopeId", "data-v-98e861cc"]]),
   XA = ["onClick"],
   JA = V({
      __name: "OnlineGamesItem",
      props: { gameData: {}, isAll: { type: Boolean }, gameType: {} },
      emits: ["onItemClick"],
      setup(l, { emit: s }) {
         const o = l,
            u = q(() => (o.isAll ? o.gameData : o.gameData.length > 8 ? o.gameData.slice(0, 8) : o.gameData)),
            v = p => {
               s("onItemClick", p);
            };
         return (
            he(() => {}),
            (p, d) => {
               const i = Te("lazy");
               return (
                  n(),
                  a(
                     "div",
                     { class: M(["minGame_container", { all_game: p.isAll }]) },
                     [
                        (n(!0),
                        a(
                           N,
                           null,
                           D(u.value, _ => (n(), a("div", { class: "onlineGamesItem", key: _.gameID, onClick: r => v(_) }, [te((n(), a("img", { class: M(p.gameType === "fish" ? "fish_img" : "min_game_img"), key: _.gameID }, null, 2)), [[i, _.img]])], 8, XA))),
                           128,
                        )),
                     ],
                     2,
                  )
               );
            }
         );
      },
   });
const YA = H(JA, [["__scopeId", "data-v-44db017d"]]),
   QA = { class: "lottery_container" },
   eP = ["onClick"],
   tP = ["src"],
   sP = V({
      __name: "LotterySlotItem",
      props: { currentLottery: {} },
      setup(l) {
         const s = ue();
         function o(d) {
            return d.reduce((i, _) => (Array.isArray(_) ? i.concat(o(_)) : i.concat(_)), []);
         }
         let u = ze({
            All: [],
            XOSO: [],
            "Win Go": [
               { typeId: 1, class: "wingo", title: "Win Go 1Min", path: "WinGo" },
               { typeId: 2, class: "wingo", title: "Win Go 3Min", path: "WinGo" },
               { typeId: 3, class: "wingo", title: "Win Go 5Min", path: "WinGo" },
               { typeId: 4, class: "wingo", title: "Win Go 10Min", path: "WinGo" },
            ],
            "5D": [
               { typeId: 5, class: "d5", title: "5D 1Min", path: "5D" },
               { typeId: 6, class: "d5", title: "5D 3Min", path: "5D" },
               { typeId: 7, class: "d5", title: "5D 5Min", path: "5D" },
               { typeId: 8, class: "d5", title: "5D 10Min", path: "5D" },
            ],
            K3: [
               { typeId: 9, class: "k3", title: "K3 1Min", path: "K3" },
               { typeId: 10, class: "k3", title: "K3 3Min", path: "K3" },
               { typeId: 11, class: "k3", title: "K3 5Min", path: "K3" },
               { typeId: 12, class: "k3", title: "K3 10Min", path: "K3" },
            ],
            "Trx Win Go": [
               { typeId: 13, class: "trx", title: "Trx Win Go 1Min", path: "WinTrx" },
               { typeId: 14, class: "trx", title: "Trx Win Go 3Min", path: "WinTrx" },
               { typeId: 15, class: "trx", title: "Trx Win Go 5Min", path: "WinTrx" },
               { typeId: 16, class: "trx", title: "Trx Win Go 10Min", path: "WinTrx" },
            ],
         });
         const v = o(Object.values(u));
         u.All = v;
         const p = d => {
            s.push({ name: "AllLotteryGames-" + d.path, query: { typeId: d.typeId, id: d.id } });
         };
         return (d, i) => (
            n(),
            a("div", QA, [
               (n(!0),
               a(
                  N,
                  null,
                  D(c(u)[d.currentLottery], _ => (n(), a("div", { class: M(["lotterySlotItem", _.class]), key: _.typeId, onClick: r => p(_) }, [e("img", { src: c(pe)("home/lottery", `${_.class}${_.typeId}`), alt: "" }, null, 8, tP), e("div", null, t(_.title), 1)], 10, eP))),
                  128,
               )),
            ])
         );
      },
   });
const nP = H(sP, [["__scopeId", "data-v-d1a409d2"]]),
   aP = { class: "other_box" },
   oP = ["onClick"],
   lP = V({
      __name: "OtherGameItem",
      props: { gameType: {}, gameList: {} },
      emits: ["onItemClick"],
      setup(l, { emit: s }) {
         const o = l,
            u = v => {
               s("onItemClick", { item: v, key: o.gameType });
            };
         return (v, p) => {
            const d = Te("lazy");
            return (
               n(),
               a("div", aP, [
                  (n(!0),
                  a(
                     N,
                     null,
                     D(v.gameList, i => (n(), a("div", { class: "other_item", key: i.slotsTypeID }, [te(e("img", { onClick: _ => u(i) }, null, 8, oP), [[d, i.vendorImg]])]))),
                     128,
                  )),
               ])
            );
         };
      },
   });
const iP = H(lP, [["__scopeId", "data-v-01acf214"]]),
   cP = ["onClick"],
   uP = { class: "gameImg" },
   rP = V({
      __name: "ElectronicItem",
      props: { gameData: { type: Array, default: [] }, isAll: { type: Boolean, default: !1 } },
      emits: ["handleOpenGame"],
      setup(l, { emit: s }) {
         const o = l,
            u = q(() => (o.isAll ? o.gameData : o.gameData.slice(0, 6))),
            v = p => {
               s("handleOpenGame", p, "slot");
            };
         return (
            he(() => {}),
            (p, d) => {
               const i = Te("lazy");
               return (
                  n(),
                  a(
                     "div",
                     { class: M(["onlineGamesItem__container", { allGame: l.isAll }]) },
                     [
                        (n(!0),
                        a(
                           N,
                           null,
                           D(u.value, _ => (n(), a("div", { key: _.slotsTypeID, class: "item", onClick: r => v(_) }, [te(e("img", uP, null, 512), [[i, _.vendorImg]])], 8, cP))),
                           128,
                        )),
                     ],
                     2,
                  )
               );
            }
         );
      },
   });
const dP = H(rP, [["__scopeId", "data-v-eb86ecaa"]]),
   Ps = l => (ye("data-v-49b14c4b"), (l = l()), fe(), l),
   _P = Ps(() => e("div", { class: "skeleton_hot" }, [e("div", { class: "hot_tit" }), e("div", { class: "hot_list" }, [e("div"), e("div"), e("div"), e("div"), e("div"), e("div")]), e("div", { class: "hot_tit" }), e("div", { class: "hot_list" }, [e("div"), e("div"), e("div"), e("div"), e("div"), e("div"), e("div"), e("div"), e("div")])], -1)),
   vP = Ps(() => e("div", { class: "skeleton_other" }, [e("div"), e("div"), e("div"), e("div")], -1)),
   pP = { class: "otherGame" },
   mP = Ps(() => e("div", { class: "skeleton_slot" }, [e("div"), e("div"), e("div"), e("div"), e("div"), e("div")], -1)),
   gP = Ps(() => e("div", { class: "skeleton_other" }, [e("div"), e("div"), e("div"), e("div")], -1)),
   hP = Ps(() => e("div", { class: "skeleton_flash" }, [e("div"), e("div"), e("div"), e("div"), e("div"), e("div"), e("div"), e("div")], -1)),
   yP = ["src"],
   fP = V({
      __name: "GameListGrid",
      props: { currentGame: { type: String, default: "" }, isAll: { type: Boolean, default: !1 } },
      setup(l) {
         const s = l,
            o = ue(),
            u = k(!0),
            { onItemClick: v, getAllGame: p, homeState: d } = Ue(),
            i = q(() => d.allGameList),
            _ = q(() => (s.currentGame === "popular" ? 1 : ["sport", "chess", "video"].includes(s.currentGame) ? 2 : s.currentGame === "lottery" ? 3 : s.currentGame === "slot" ? 4 : s.currentGame === "flash" || s.currentGame === "fish" ? 5 : -1)),
            r = async () => {
               var f, b;
               await p();
               let C = i.value;
               (C.popular = [(f = i.value) == null ? void 0 : f.popular.platformList, (b = i.value) == null ? void 0 : b.popular.clicksTopList]), sessionStorage.setItem("gameData", JSON.stringify(C)), (u.value = !1);
            },
            g = () => {
               o.push({ name: "AllGames", query: { type: s.currentGame } });
            },
            m = q(() => (i.value[s.currentGame].length < 1 ? [] : i.value[s.currentGame][0])),
            $ = q(() => (i.value[s.currentGame].length < 1 ? [] : i.value[s.currentGame][1].length > 9 && !s.isAll ? i.value[s.currentGame][1].slice(0, 9) : i.value[s.currentGame][1])),
            y = async (C, f) => {
               ["chess", "slot"].includes(f) ? (sessionStorage.setItem("slotGamesList", JSON.stringify(i.value[s.currentGame])), sessionStorage.setItem("gameType", JSON.stringify(s.currentGame)), sessionStorage.setItem("clickedItem", JSON.stringify(C)), o.push({ name: "AllOnlineGames" })) : v(C);
            };
         return (
            r(),
            (C, f) => {
               const b = U("van-skeleton");
               return (
                  n(),
                  a(
                     "div",
                     { class: M(["gameListGrid__container", { all_container: l.isAll }]) },
                     [
                        l.currentGame === "popular" ? (n(), Z(b, { key: 0, loading: u.value }, { template: A(() => [_P]), default: A(() => [L(ZA, { platformList: m.value, clicksTopList: $.value, onOnItemClick: c(v), isAll: l.isAll }, null, 8, ["platformList", "clicksTopList", "onOnItemClick", "isAll"])]), _: 1 }, 8, ["loading"])) : B("", !0),
                        _.value === 2
                           ? (n(),
                             Z(
                                b,
                                { key: 1, loading: u.value },
                                {
                                   template: A(() => [vP]),
                                   default: A(() => [
                                      e("div", pP, [
                                         (n(!0),
                                         a(
                                            N,
                                            null,
                                            D(i.value[l.currentGame], (T, h) => (n(), Z(iP, { key: h, info: T, gameType: l.currentGame, isAll: l.isAll, onClick: w => y(T, l.currentGame) }, null, 8, ["info", "gameType", "isAll", "onClick"]))),
                                            128,
                                         )),
                                      ]),
                                   ]),
                                   _: 1,
                                },
                                8,
                                ["loading"],
                             ))
                           : B("", !0),
                        _.value === 4 ? (n(), Z(b, { key: 2, loading: u.value }, { template: A(() => [mP]), default: A(() => [l.isAll ? B("", !0) : (n(), Z(go, { key: 0 })), L(dP, { gameData: i.value[l.currentGame], isAll: l.isAll, onHandleOpenGame: y }, null, 8, ["gameData", "isAll"])]), _: 1 }, 8, ["loading"])) : B("", !0),
                        _.value === 3 ? (n(), Z(b, { key: 3, loading: u.value }, { template: A(() => [gP]), default: A(() => [L(nP, { gameData: i.value[l.currentGame], isAll: l.isAll }, null, 8, ["gameData", "isAll"])]), _: 1 }, 8, ["loading"])) : B("", !0),
                        _.value === 5 ? (n(), Z(b, { key: 4, loading: u.value }, { template: A(() => [hP]), default: A(() => [L(YA, { gameData: i.value[l.currentGame], gameType: l.currentGame, isAll: l.isAll, onOnItemClick: c(v) }, null, 8, ["gameData", "gameType", "isAll", "onOnItemClick"])]), _: 1 }, 8, ["loading"])) : B("", !0),
                        l.isAll ? B("", !0) : (n(), a("button", { key: 5, onClick: g, class: "look_all" }, [e("img", { src: c(pe)("home", "all"), alt: "" }, null, 8, yP), E(" " + t(C.$t("viewAll")), 1)])),
                     ],
                     2,
                  )
               );
            }
         );
      },
   });
const bP = H(fP, [["__scopeId", "data-v-49b14c4b"]]),
   $P = l => (ye("data-v-cb37f029"), (l = l()), fe(), l),
   CP = { class: "gameList" },
   kP = $P(() => e("div", { class: "slidebar_ske" }, [e("div"), e("div"), e("div"), e("div"), e("div"), e("div"), e("div"), e("div"), e("div")], -1)),
   TP = V({
      __name: "index",
      setup(l) {
         const { t: s } = _e(),
            o = k(0),
            u = k(!1),
            v = ze([]),
            p = q(() => {
               var m, $;
               return (m = v[o.value]) != null && m.key ? (($ = v[o.value]) == null ? void 0 : $.key) : "";
            }),
            { getGameType: d, homeState: i } = Ue(),
            _ = async () => {
               await d(),
                  i.gameTypeList.length > 0 &&
                     (i.gameTypeList.forEach(m => {
                        m.state === 1 && v.push({ isShow: m.state === 1, title: s("code" + m.typeNameCode), img: m.categoryImg, key: m.categoryCode.toLocaleLowerCase() });
                     }),
                     sessionStorage.setItem("gameMenu", JSON.stringify(v)));
            },
            r = m => {
               sessionStorage.setItem("clickedGameType", v[m].key);
            };
         return (
            (async () => {
               (u.value = !0), await _();
               const m = sessionStorage.getItem("clickedGameType");
               if (m !== null) {
                  const $ = v.findIndex(y => y.key === m);
                  $ >= 0 &&
                     ((o.value = $),
                     lt(() => {
                        r($);
                        const y = document.getElementById("gameType-" + m);
                        setTimeout(() => {
                           y && y.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
                        }, 0);
                     }));
               }
               u.value = !1;
            })(),
            (m, $) => {
               const y = U("van-sidebar-item"),
                  C = U("van-sidebar"),
                  f = U("van-skeleton");
               return (
                  n(),
                  a("div", CP, [
                     L(
                        f,
                        { loading: u.value },
                        {
                           template: A(() => [kP]),
                           default: A(() => [
                              L(
                                 C,
                                 { modelValue: o.value, "onUpdate:modelValue": $[0] || ($[0] = b => (o.value = b)), class: "mySideBar", onChange: r },
                                 {
                                    default: A(() => [
                                       (n(!0),
                                       a(
                                          N,
                                          null,
                                          D(v, (b, T) => (n(), Z(y, { key: T, id: "gameType-" + b.key }, { title: A(() => [b.isShow ? (n(), a("div", { key: 0, class: M({ whiteColor: T === o.value }) }, [e("div", { style: Ze({ backgroundImage: `url(${b.img})` }) }, null, 4), E(" " + t(b.title), 1)], 2)) : B("", !0)]), _: 2 }, 1032, ["id"]))),
                                          128,
                                       )),
                                    ]),
                                    _: 1,
                                 },
                                 8,
                                 ["modelValue"],
                              ),
                           ]),
                           _: 1,
                        },
                        8,
                        ["loading"],
                     ),
                     te(L(bP, { currentGame: p.value, ref: "gameListGridRef" }, null, 8, ["currentGame"]), [[He, v[o.value]]]),
                  ])
               );
            }
         );
      },
   });
const wP = H(TP, [["__scopeId", "data-v-cb37f029"]]),
   LP = { id: "home", class: "content" },
   IP = ["src"],
   SP = { class: "content__right" },
   GP = { class: "promptHeader" },
   xP = ["innerHTML"],
   BP = { class: "Laundry-Con" },
   NP = { class: "Laundry-Con_tip" },
   RP = { class: "Landty-Con-tips" },
   MP = V({
      __name: "redHome",
      setup(l) {
         const { t: s } = _e(),
            o = ue(),
            { setLoading: u } = Jt(),
            { onDown: v, isAppDownload: p, isAppDownloadIcon: d, showChanglong: i, projectIcon: _, isRead: r, getMessagesData: g, showPWA: m } = Ue(),
            { closeLaundry: $, closePrompt: y, store: C, promptContent: f } = fs(),
            b = Nt(() => Rt(() => import("./messageIcon-648b7258.js"), ["assets/js/messageIcon-648b7258.js", "assets/js/page-activity-6d456111.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/native/index-3d731397.js", "assets/js/en-53bf8069.js", "assets/js/rus-ecb14220.js", "assets/js/vi-60d1c3eb.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-38f5b166.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-dbcb2394.js", "assets/js/ar-78aaffbf.js", "assets/css/page-activity-9da3f4e3.css"]));
         function T() {
            o.push({ name: "Messages" });
         }
         u(!1);
         const h = () => {
               $(), o.push({ name: "SuperJackpot" });
            },
            w = k();
         return (
            he(() => {
               g(), u(!1);
            }),
            (I, x) => {
               const S = U("svg-icon"),
                  G = U("NavBar"),
                  R = U("van-dialog");
               return (
                  n(),
                  a("div", LP, [
                     L(G, null, { left: A(() => [e("img", { src: c(_), alt: "" }, null, 8, IP)]), right: A(() => [e("div", SP, [e("div", { class: "message", onClick: T }, [(n(), Z(ft(c(b)))), te(L(As, { class: "point" }, null, 512), [[He, !c(r)]])]), c(p) ? (n(), Z(S, { key: 0, onClick: ut(c(v), ["stop"]), name: "down", color: "#FB5755", class: "down" }, null, 8, ["onClick"])) : B("", !0)])]), _: 1 }),
                     L(Ls),
                     L(Yt, { key: "home", color: "red" }),
                     L(wP, { ref_key: "gameListRef", ref: w }, null, 512),
                     L(en),
                     L(tn),
                     c(i) ? (n(), Z(os, { key: 0 })) : B("", !0),
                     c(m) && c(d) ? (n(), Z(Is, { key: 1 })) : B("", !0),
                     L(Ms),
                     L(R, { show: c(C).prompt, "onUpdate:show": x[0] || (x[0] = O => (c(C).prompt = O)), "confirm-button-text": c(s)("confirm"), onConfirm: c(y) }, { default: A(() => [e("div", GP, t(c(s)("prompt")), 1), e("div", { class: "promptContent", innerHTML: c(f) }, null, 8, xP)]), _: 1 }, 8, ["show", "confirm-button-text", "onConfirm"]),
                     L(ws, { show: c(C).laundry, "onUpdate:show": x[1] || (x[1] = O => (c(C).laundry = O)), onConfirm: h, "show-cancel-btn": !1, confirmText: "OK", title: c(s)("congratulations") }, { content: A(() => [e("div", BP, [e("div", NP, t(c(s)("getSuper")), 1), e("div", RP, t(c(s)("getRewards")), 1)])]), _: 1 }, 8, ["show", "title"]),
                  ])
               );
            }
         );
      },
   });
const DP = H(MP, [["__scopeId", "data-v-d59d9e77"]]),
   FV = Object.freeze(Object.defineProperty({ __proto__: null, default: DP }, Symbol.toStringTag, { value: "Module" })),
   AP = l => (ye("data-v-599f0670"), (l = l()), fe(), l),
   PP = { class: "dailyProfitRank" },
   OP = { class: "title" },
   VP = AP(() => e("div", { class: "driver" }, null, -1)),
   WP = { class: "rank_list" },
   HP = { class: "left" },
   zP = ["data-img"],
   EP = ["data-img"],
   FP = { class: "info" },
   jP = { class: "tit" },
   UP = { class: "amount" },
   qP = V({
      __name: "index",
      setup(l) {
         const { homeState: s } = Ue(),
            o = q(() => s.rankList);
         return (u, v) => {
            const p = Te("lazy");
            return (
               n(),
               a("div", PP, [
                  e("div", OP, t(u.$t("earningsRankingToday")), 1),
                  VP,
                  e("div", WP, [
                     (n(!0),
                     a(
                        N,
                        null,
                        D(o.value, (d, i) => (n(), a("div", { class: "daily_item", key: d.nickName }, [e("div", HP, [e("div", { class: M(["avatar_img", i < 3 ? `avatar_img${i + 1}` : ""]) }, [d.userPhoto.length > 2 ? te((n(), a("img", { key: 0, "data-img": c(pe)("home", "avatar") }, null, 8, zP)), [[p, d.userPhoto]]) : te((n(), a("img", { key: 1, "data-img": c(pe)("home", "avatar") }, null, 8, EP)), [[p, c(pe)("main/Avatar", d.userPhoto)]])], 2), e("div", FP, [e("div", jP, t(c(Es)(d.nickName)), 1), e("div", { class: M(["ranking", i < 3 ? `ranking${i + 1}` : ""]) }, "NO." + t(i + 1), 3)])]), e("div", UP, t(c(Be)(d.price)), 1)]))),
                        128,
                     )),
                  ]),
               ])
            );
         };
      },
   });
const KP = H(qP, [["__scopeId", "data-v-599f0670"]]),
   Wn = l => (ye("data-v-5182d135"), (l = l()), fe(), l),
   ZP = { class: "luckyWinners__container" },
   XP = { class: "title" },
   JP = Wn(() => e("div", { class: "driver" }, null, -1)),
   YP = { class: "info_item" },
   QP = Wn(() => e("div", { class: "item_bg" }, null, -1)),
   eO = ["data-img"],
   tO = { class: "nick_name" },
   sO = Wn(() => e("div", { class: "fenge" }, null, -1)),
   nO = { class: "amount" },
   aO = { class: "tip" },
   oO = V({
      __name: "index",
      setup(l) {
         const { getWinInfoDetail: s, homeState: o } = Ue(),
            u = k(null);
         function v(i, _) {
            const r = [];
            for (let g = 0; g < i.length; g += _) r.push(i.slice(g, g + _));
            return r;
         }
         const p = k([]);
         async function d() {
            await s(), (p.value = v(o.winInfoList || [], 3));
         }
         return (
            he(async () => {
               await d();
            }),
            xs(() => {
               clearInterval(u.value);
            }),
            (i, _) => {
               const r = Te("lazy");
               return (
                  n(),
                  a("div", ZP, [
                     e("div", XP, t(i.$t("winningDetal")), 1),
                     JP,
                     L(
                        c(Sa),
                        { class: "my-swipe", ref: "swipeRef", autoplay: "3000", "show-indicators": !1 },
                        {
                           default: A(() => [
                              (n(!0),
                              a(
                                 N,
                                 null,
                                 D(
                                    p.value,
                                    (g, m) => (
                                       n(),
                                       Z(
                                          c(Ia),
                                          { key: m },
                                          {
                                             default: A(() => [
                                                (n(!0),
                                                a(
                                                   N,
                                                   null,
                                                   D(g, $ => (n(), a("div", YP, [QP, te(e("img", { class: "avatar_img", "data-img": c(pe)("home", "avatar") }, null, 8, eO), [[r, g.userPhoto]]), e("div", tO, t(c(Es)($.nickName)), 1), sO, e("div", nO, t(c(Be)($.amount || 0)), 1), e("div", aO, t(i.$t("winningAmount")), 1)]))),
                                                   256,
                                                )),
                                             ]),
                                             _: 2,
                                          },
                                          1024,
                                       )
                                    ),
                                 ),
                                 128,
                              )),
                           ]),
                           _: 1,
                        },
                        512,
                     ),
                  ])
               );
            }
         );
      },
   });
const lO = H(oO, [["__scopeId", "data-v-5182d135"]]),
   iO = { class: "noticeBar__container", id: "noticeBar" },
   cO = { class: "noticeBar__container-body" },
   uO = { key: 0, class: "noticeBar__container-body-text" },
   rO = V({
      __name: "index",
      setup(l) {
         const s = ue(),
            o = rt(),
            u = k(null),
            v = k(o.messageList),
            p = async () => {
               const d = await de(wn({ pageNo: 1, pageSize: 5 }));
               if (d) {
                  if ((o.setMessage(d.data.list), (v.value = d.data.list), !v.value.length)) return;
                  u.value && clearInterval(u.value),
                     (u.value = setInterval(() => {
                        v.value.push(v.value.shift());
                     }, 7e3));
               }
            };
         return (
            he(() => {
               v.value ||
                  setTimeout(() => {
                     p();
                  }, 1e3);
            }),
            (d, i) => {
               var _;
               return n(), a("div", iO, [e("div", cO, [v.value && v.value[0] && v.value[0].siteMessage ? (n(), a("div", uO, t((_ = v.value[0]) == null ? void 0 : _.siteMessage), 1)) : B("", !0)]), e("button", { onClick: i[0] || (i[0] = r => c(s).push({ name: "Notification" })) }, t(d.$t("more")), 1)]);
            }
         );
      },
   });
const dO = H(rO, [["__scopeId", "data-v-f4625e1a"]]),
   _O = { class: "game_menu" },
   vO = { class: "slidebar_ske" },
   pO = { class: "game_menu_list" },
   mO = ["onClick"],
   gO = V({
      __name: "index",
      setup(l) {
         const s = rt(),
            o = Gs(),
            { t: u } = _e(),
            v = k([]),
            p = k(!1),
            d = q(() => o.currentMenu),
            i = q(() => !s.getToken),
            { getGameType: _, homeState: r } = Ue(),
            g = async () => {
               (p.value = !0),
                  await _(),
                  r.gameTypeList.forEach(y => {
                     y.categoryCode === "BigAward" || y.state !== 1 || v.value.push({ isShow: y.state === 1, title: u("code" + y.typeNameCode), img: y.categoryImg, key: y.categoryCode.toLocaleLowerCase() });
                  }),
                  sessionStorage.setItem("gameMenu", JSON.stringify(v.value)),
                  (p.value = !1);
            },
            m = y => {
               let C = i.value ? 0 : 100;
               $(400 - C), sessionStorage.setItem("clickedGameType", y.key), o.setCurrentMenu(y.key), o.setCurrentTitle(y.title);
            };
         function $(y) {
            window.scrollTo({ top: y, behavior: "smooth" });
         }
         return (
            he(async () => {
               var C;
               await g();
               let y = sessionStorage.getItem("clickedGameType");
               y ? (o.setCurrentMenu(y), o.setCurrentTitle((C = v.value.find(f => f.key === y)) == null ? void 0 : C.title)) : d.value || (o.setCurrentMenu(v.value[0].key), o.setCurrentTitle(v.value[0].title), (p.value = !1));
            }),
            (y, C) => {
               const f = U("van-skeleton");
               return (
                  n(),
                  a("div", _O, [
                     L(
                        f,
                        { loading: p.value },
                        {
                           template: A(() => [
                              e("div", vO, [
                                 (n(),
                                 a(
                                    N,
                                    null,
                                    D(8, () => e("div")),
                                    64,
                                 )),
                              ]),
                           ]),
                           default: A(() => [
                              e("div", pO, [
                                 (n(!0),
                                 a(
                                    N,
                                    null,
                                    D(v.value, b => (n(), a("div", { class: M(["gamen_item", { active: d.value === b.key }]), style: Ze({ backgroundImage: `url(${b.img})` }), onClick: T => m(b) }, [e("span", null, t(b.title), 1)], 14, mO))),
                                    256,
                                 )),
                              ]),
                           ]),
                           _: 1,
                        },
                        8,
                        ["loading"],
                     ),
                  ])
               );
            }
         );
      },
   });
const hO = H(gO, [["__scopeId", "data-v-7a43ac05"]]),
   yO = { class: "other_box" },
   fO = ["onClick"],
   bO = V({
      __name: "OtherGameItem",
      props: { gameType: {}, gameList: {} },
      emits: ["onItemClick"],
      setup(l, { emit: s }) {
         const o = l,
            u = v => {
               s("onItemClick", v, o.gameType);
            };
         return (v, p) => {
            const d = Te("lazy");
            return (
               n(),
               a("div", yO, [
                  (n(!0),
                  a(
                     N,
                     null,
                     D(v.gameList, i => (n(), a("div", { class: "other_item", key: i.slotsTypeID }, [te(e("img", { onClick: _ => u(i) }, null, 8, fO), [[d, i.vendorImg]])]))),
                     128,
                  )),
               ])
            );
         };
      },
   });
const $O = H(bO, [["__scopeId", "data-v-13ee214f"]]),
   CO = { class: "hot_container" },
   kO = { class: "hot_container-item" },
   TO = ["onClick"],
   wO = { key: 0, class: "win-odds" },
   LO = V({
      __name: "HotGameItem",
      props: { gameList: {}, gameType: {} },
      emits: ["onItemClick"],
      setup(l, { emit: s }) {
         const o = je(),
            u = v => {
               s("onItemClick", v);
            };
         return (v, p) => {
            const d = Te("lazy");
            return (
               n(),
               a("div", CO, [
                  (n(!0),
                  a(
                     N,
                     null,
                     D(v.gameList, i => (n(), a("div", kO, [te(e("img", { onClick: _ => u(i) }, null, 8, TO), [[d, i.imgUrl || i.img]]), ["popular"].includes(v.gameType) && c(o).isShowHotGameWinOdds ? (n(), a("div", wO, [e("span", null, t(v.$t("winOdds")), 1), e("span", null, t(i.winOdds) + "%", 1), e("div", { class: "win-p", style: Ze({ width: `${Math.min(i.winOdds, 100)}%` }) }, null, 4)])) : B("", !0)]))),
                     256,
                  )),
               ])
            );
         };
      },
   });
const IO = H(LO, [["__scopeId", "data-v-75425b54"]]),
   SO = { class: "lottery_container" },
   GO = ["onClick"],
   xO = ["src"],
   BO = V({
      __name: "LotterySlotItem",
      props: { currentLottery: {} },
      setup(l) {
         const s = ue();
         function o(d) {
            return d.reduce((i, _) => (Array.isArray(_) ? i.concat(o(_)) : i.concat(_)), []);
         }
         let u = ze({
            All: [],
            XOSO: [],
            "Win Go": [
               { typeId: 1, class: "wingo", title: "Win Go 1Min", path: "WinGo" },
               { typeId: 2, class: "wingo", title: "Win Go 3Min", path: "WinGo" },
               { typeId: 3, class: "wingo", title: "Win Go 5Min", path: "WinGo" },
               { typeId: 4, class: "wingo", title: "Win Go 10Min", path: "WinGo" },
            ],
            "5D": [
               { typeId: 5, class: "d5", title: "5D 1Min", path: "5D" },
               { typeId: 6, class: "d5", title: "5D 3Min", path: "5D" },
               { typeId: 7, class: "d5", title: "5D 5Min", path: "5D" },
               { typeId: 8, class: "d5", title: "5D 10Min", path: "5D" },
            ],
            K3: [
               { typeId: 9, class: "k3", title: "K3 1Min", path: "K3" },
               { typeId: 10, class: "k3", title: "K3 3Min", path: "K3" },
               { typeId: 11, class: "k3", title: "K3 5Min", path: "K3" },
               { typeId: 12, class: "k3", title: "K3 10Min", path: "K3" },
            ],
            "Trx Win Go": [
               { typeId: 13, class: "trx", title: "Trx Win Go 1Min", path: "WinTrx" },
               { typeId: 14, class: "trx", title: "Trx Win Go 3Min", path: "WinTrx" },
               { typeId: 15, class: "trx", title: "Trx Win Go 5Min", path: "WinTrx" },
               { typeId: 16, class: "trx", title: "Trx Win Go 10Min", path: "WinTrx" },
            ],
         });
         const v = o(Object.values(u));
         u.All = v;
         const p = d => {
            s.push({ name: "AllLotteryGames-" + d.path, query: { typeId: d.typeId, id: d.id } });
         };
         return (d, i) => (
            n(),
            a("div", SO, [
               (n(!0),
               a(
                  N,
                  null,
                  D(c(u)[d.currentLottery], _ => (n(), a("div", { class: M(["lotterySlotItem", _.class]), key: _.typeId, onClick: r => p(_) }, [e("img", { src: c(pe)("home/lottery", `${_.class}${_.typeId}`), alt: "" }, null, 8, xO), e("div", null, t(_.title), 1)], 10, GO))),
                  128,
               )),
            ])
         );
      },
   });
const NO = H(BO, [["__scopeId", "data-v-aa0964dd"]]),
   RO = { alt: "" },
   MO = V({
      __name: "ElectronicWinRate",
      setup(l) {
         const s = je(),
            o = q(() => s.winRate.electronicWinRateImgUrl || ""),
            u = q(() => !!(s.winRate.isShowElectronicWinRateExternalLink && o.value)),
            v = () => {
               s.winRate.electronicWinRateExternalLink && window.open(s.winRate.electronicWinRateExternalLink);
            };
         return (p, d) => {
            const i = Te("lazy");
            return u.value ? (n(), a("div", { key: 0, class: "WinRate", onClick: v }, [te(e("img", RO, null, 512), [[i, o.value]])])) : B("", !0);
         };
      },
   });
const DO = H(MO, [["__scopeId", "data-v-ba84584e"]]),
   ho = l => (ye("data-v-9960823f"), (l = l()), fe(), l),
   AO = { class: "game_container" },
   PO = ho(() => e("div", { class: "slidebar_title" }, [e("div")], -1)),
   OO = { class: "game_title" },
   VO = ho(() => e("div", { class: "driver" }, null, -1)),
   WO = { class: "slidebar_other" },
   HO = { class: "slidebar_hot" },
   zO = { class: "slidebar_lottery" },
   EO = V({
      __name: "index",
      setup(l) {
         const s = Gs(),
            o = k(!1),
            u = q(() => s.getCurrentTitle),
            v = q(() => s.getCurrentMenu),
            p = ze({}),
            d = k(0),
            { getAllGame: i, homeState: _, onItemClick: r } = Ue(),
            g = q(() => _.allGameList),
            m = q(() => (["popular", "flash", "fish"].includes(v.value) ? 1 : ["sport", "chess", "video", "slot"].includes(v.value) ? 2 : v.value === "lottery" ? 3 : -1)),
            $ = async () => {
               (o.value = !0), await i();
               const C = Ns(_.allGameList);
               for (const [f, b] of Object.entries(C)) {
                  let T = f.toLocaleLowerCase();
                  T === "popular" ? (p[T] = [...C[T].platformList, ...C[T].clicksTopList]) : (p[T] = b);
               }
               p.lottery.unshift({ categoryCode: "All" }), sessionStorage.setItem("gameData", JSON.stringify(p)), (o.value = !1);
            },
            y = async (C, f) => {
               ["chess", "slot"].includes(f) ? (sessionStorage.setItem("slotGamesList", JSON.stringify(g.value[v.value])), sessionStorage.setItem("gameType", JSON.stringify(v.value)), sessionStorage.setItem("clickedItem", JSON.stringify(C)), hs.push({ name: "AllOnlineGames" })) : r(C);
            };
         return (
            $(),
            (C, f) => {
               const b = U("van-skeleton"),
                  T = U("van-tab"),
                  h = U("van-tabs");
               return (
                  n(),
                  a("div", AO, [
                     L(b, { loading: o.value }, { template: A(() => [PO]), default: A(() => [e("div", OO, t(u.value), 1)]), _: 1 }, 8, ["loading"]),
                     m.value === 3
                        ? (n(),
                          Z(
                             h,
                             { key: 0, "swipe-threshold": 4, class: "lottery_tabbar", active: d.value, "onUpdate:active": f[0] || (f[0] = w => (d.value = w)), type: "card", background: "transparent", ref: "tabsRef" },
                             {
                                default: A(() => [
                                   (n(!0),
                                   a(
                                      N,
                                      null,
                                      D(p.lottery, (w, I) => (n(), Z(T, { key: I }, { title: A(() => [e("span", null, t(w.categoryCode), 1)]), _: 2 }, 1024))),
                                      128,
                                   )),
                                ]),
                                _: 1,
                             },
                             8,
                             ["active"],
                          ))
                        : B("", !0),
                     VO,
                     m.value === 2
                        ? (n(),
                          Z(
                             b,
                             { key: 1, loading: o.value },
                             {
                                template: A(() => [
                                   e("div", WO, [
                                      (n(),
                                      a(
                                         N,
                                         null,
                                         D(4, () => e("div")),
                                         64,
                                      )),
                                   ]),
                                ]),
                                default: A(() => [["slot"].includes(v.value) ? (n(), Z(DO, { key: 0 })) : B("", !0), L($O, { gameList: p[v.value], "game-type": v.value, onOnItemClick: y }, null, 8, ["gameList", "game-type"])]),
                                _: 1,
                             },
                             8,
                             ["loading"],
                          ))
                        : B("", !0),
                     m.value === 1
                        ? (n(),
                          Z(
                             b,
                             { key: 2, loading: o.value },
                             {
                                template: A(() => [
                                   e("div", HO, [
                                      (n(),
                                      a(
                                         N,
                                         null,
                                         D(9, () => e("div")),
                                         64,
                                      )),
                                   ]),
                                ]),
                                default: A(() => [L(IO, { gameList: p[v.value], "game-type": v.value, onOnItemClick: c(r) }, null, 8, ["gameList", "game-type", "onOnItemClick"])]),
                                _: 1,
                             },
                             8,
                             ["loading"],
                          ))
                        : B("", !0),
                     m.value === 3
                        ? (n(),
                          Z(
                             b,
                             { key: 3, loading: o.value },
                             {
                                template: A(() => [
                                   e("div", zO, [
                                      (n(),
                                      a(
                                         N,
                                         null,
                                         D(6, () => e("div")),
                                         64,
                                      )),
                                   ]),
                                ]),
                                default: A(() => [L(NO, { "current-lottery": p[v.value][d.value].categoryCode, onOnItemClick: c(r) }, null, 8, ["current-lottery", "onOnItemClick"])]),
                                _: 1,
                             },
                             8,
                             ["loading"],
                          ))
                        : B("", !0),
                  ])
               );
            }
         );
      },
   });
const FO = H(EO, [["__scopeId", "data-v-9960823f"]]),
   jO = { class: "login_tip" },
   UO = { class: "tip" },
   qO = { class: "btn_box" },
   KO = V({
      __name: "index",
      setup(l) {
         const s = ue(),
            o = je(),
            u = () => {
               s.push("/login");
            },
            v = () => {
               s.push("/register");
            };
         return (p, d) => (n(), a("div", jO, [e("div", UO, [e("div", null, t(p.$t("homeLoginTxt1", [c(o).getProjectName])), 1), e("div", null, t(p.$t("homeLoginTxt2")), 1)]), e("div", qO, [e("div", { class: "login", onClick: u }, t(p.$t("login")), 1), e("div", { class: "register", onClick: v }, t(p.$t("register")), 1)])]));
      },
   });
const ZO = H(KO, [["__scopeId", "data-v-9e2d0518"]]),
   XO = l => (ye("data-v-17e11782"), (l = l()), fe(), l),
   JO = { class: "content" },
   YO = ["src"],
   QO = { class: "content__right" },
   eV = XO(() => e("div", { class: "message_icon" }, null, -1)),
   tV = { class: "box1" },
   sV = { class: "promptHeader" },
   nV = ["innerHTML"],
   aV = { class: "Laundry-Con" },
   oV = { class: "Laundry-Con_tip" },
   lV = { class: "Landty-Con-tips" },
   iV = V({
      __name: "whiteGoldHome",
      setup(l) {
         const { onDown: s, isAppDownload: o, isAppDownloadIcon: u, showChanglong: v, projectIcon: p, isRead: d, getMessagesData: i, showPWA: _ } = Ue(),
            r = rt(),
            { t: g } = _e(),
            m = ue(),
            { setLoading: $ } = Jt(),
            { closeLaundry: y, closePrompt: C, store: f, promptContent: b } = fs();
         function T() {
            m.push({ name: "Messages" });
         }
         const h = q(() => !r.getToken);
         $(!1);
         const w = () => {
            y(), m.push({ name: "SuperJackpot" });
         };
         return (
            he(() => {
               i(), $(!1);
            }),
            (I, x) => {
               const S = U("svg-icon"),
                  G = U("NavBar"),
                  R = U("van-dialog");
               return (
                  n(),
                  a("div", JO, [
                     L(G, { backgroundColor: "#fff" }, { left: A(() => [e("img", { src: c(p), alt: "" }, null, 8, YO)]), right: A(() => [e("div", QO, [e("div", { class: "message", onClick: T }, [eV, te(L(As, { class: "point" }, null, 512), [[He, !c(d)]])]), c(o) ? (n(), Z(S, { key: 0, onClick: ut(c(s), ["stop"]), name: "down", class: "down" }, null, 8, ["onClick"])) : B("", !0)])]), _: 1 }),
                     h.value ? (n(), Z(ZO, { key: 0 })) : B("", !0),
                     L(Ls),
                     L(dO, { key: "home" }),
                     L(hO),
                     e("div", tV, [L(FO), L(lO), L(KP)]),
                     c(v) ? (n(), Z(os, { key: 1 })) : B("", !0),
                     c(_) && c(u) ? (n(), Z(Is, { key: 2 })) : B("", !0),
                     L(Ms),
                     L(R, { show: c(f).prompt, "onUpdate:show": x[0] || (x[0] = O => (c(f).prompt = O)), "confirm-button-text": c(g)("confirm"), onConfirm: c(C) }, { default: A(() => [e("div", sV, t(c(g)("prompt")), 1), e("div", { class: "promptContent", innerHTML: c(b) }, null, 8, nV)]), _: 1 }, 8, ["show", "confirm-button-text", "onConfirm"]),
                     L(ws, { show: c(f).laundry, "onUpdate:show": x[1] || (x[1] = O => (c(f).laundry = O)), onConfirm: w, "show-cancel-btn": !1, confirmText: "OK", title: c(g)("congratulations") }, { content: A(() => [e("div", aV, [e("div", oV, t(c(g)("getSuper")), 1), e("div", lV, t(c(g)("getRewards")), 1)])]), _: 1 }, 8, ["show", "title"]),
                  ])
               );
            }
         );
      },
   });
const cV = H(iV, [["__scopeId", "data-v-17e11782"]]),
   jV = Object.freeze(Object.defineProperty({ __proto__: null, default: cV }, Symbol.toStringTag, { value: "Module" }));
export { xV as A, BV as B, NV as C, ws as D, RV as E, Mc as F, MV as G, DV as H, AV as I, PV as J, Dc as K, Pi as L, OV as M, VV as N, WV as O, HV as P, zV as Q, EV as R, FV as S, jV as T, Jc as _, Vi as a, Rc as b, Mi as c, Ii as d, _V as e, vV as f, pV as g, mV as h, dV as i, gV as j, hV as k, yV as l, fV as m, bV as n, $V as o, CV as p, kV as q, TV as r, wV as s, LV as t, as as u, Oi as v, Ac as w, IV as x, SV as y, GV as z };
