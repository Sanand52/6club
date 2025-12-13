import { v as we, a as Ge, L as je } from "./page-home-67e89e9a.js";
import {
  X as O,
  r as d,
  K as Q,
  G as oe,
  F as V,
  a2 as A,
  a3 as ae,
  Z as C,
  a6 as F,
  a7 as z,
  Y as b,
  _ as e,
  a0 as n,
  D as a,
  aa as E,
  ao as ce,
  a8 as B,
  k as M,
  w as re,
  z as Xe,
  ae as se,
  $ as Z,
  a1 as X,
  al as Y,
  a9 as D,
  x as J,
  af as de,
  ag as pe,
  C as ye,
  J as he,
  aA as Ye,
  aT as Fe,
  I as Pe,
  ad as Ke,
} from "./modules-aa8ffe67.js";
import {
  g as G,
  _ as W,
  k as ge,
  u as ee,
  G as Ze,
  b9 as Je,
  A as ne,
  ba as Qe,
  bb as xe,
  bc as Re,
  bd as et,
  a as Ve,
  D as Ee,
  be as Be,
  bf as Ne,
  bg as tt,
  bh as st,
  aV as ot,
} from "./page-activity-6d456111.js";
const at = { class: "popups" },
  nt = { class: "popup-content" },
  lt = { class: "tit" },
  rt = { class: "con" },
  it = { class: "info" },
  ut = { class: "txt" },
  ct = { class: "txt" },
  dt = { class: "box" },
  pt = ["placeholder"],
  vt = { class: "lab" },
  mt = { class: "popup-foot" },
  _t = O({
    __name: "index",
    props: { showPopup: { type: Boolean, default: d(!1) } },
    emits: ["update:showPopup", "onConfirm", "onBack"],
    setup(p, { emit: $ }) {
      const c = p,
        t = Q(),
        { t: i } = oe(),
        s = V({
          get() {
            return c.showPopup || !1;
          },
          set(y) {
            $("update:showPopup", y);
          },
        }),
        o = d(""),
        h = () => {
          if (!o.value) return M(i("googleKey"));
          $("onConfirm", o.value.toString());
        },
        l = () => {
          (o.value = ""), $("onBack");
        };
      function v() {
        t.push({ name: "CustomerService" });
      }
      return (y, u) => {
        const w = A("van-icon"),
          S = A("van-popup"),
          r = ae("throttle-click"),
          g = ae("lazy");
        return (
          b(),
          C("div", at, [
            F(
              S,
              {
                show: s.value,
                "onUpdate:show": u[1] || (u[1] = (f) => (s.value = f)),
                position: "center",
                round: "",
                class: "popup",
                "close-on-click-overlay": !1,
              },
              {
                default: z(() => [
                  e("div", nt, [
                    e("div", lt, n(a(i)("googleVerification")), 1),
                    e("div", rt, [
                      e("div", it, [
                        e("p", ut, n(a(i)("googleTip5")), 1),
                        e("p", ct, n(a(i)("googleTip6")), 1),
                      ]),
                      e("div", dt, [
                        E(
                          e(
                            "input",
                            {
                              class: "input",
                              type: "text",
                              "onUpdate:modelValue":
                                u[0] || (u[0] = (f) => (o.value = f)),
                              maxlength: "6",
                              oninput: "value=value.replace(/\\D/g,'')",
                              placeholder: a(i)("PgoogleVerification"),
                            },
                            null,
                            8,
                            pt,
                          ),
                          [[ce, o.value]],
                        ),
                        e("p", vt, [
                          F(w, { class: "icon", name: "warning-o" }),
                          B(n(a(i)("PVerificationCode")) + " ", 1),
                          e(
                            "span",
                            { onClick: v },
                            n(a(i)("contactServicer")),
                            1,
                          ),
                        ]),
                      ]),
                      e("div", mt, [
                        E((b(), C("div", null, [B(n(a(i)("confirm")), 1)])), [
                          [r, { handler: h, wait: 1e3 }],
                        ]),
                        e(
                          "div",
                          { onClick: l },
                          n(a(i)("withdrawDialogDesc6")),
                          1,
                        ),
                      ]),
                    ]),
                    E(e("img", { class: "close", onClick: l }, null, 512), [
                      [g, a(G)("main", "close")],
                    ]),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["show"],
            ),
          ])
        );
      };
    },
  });
const Ue = W(_t, [["__scopeId", "data-v-1c0b173a"]]),
  K = (p) => (de("data-v-54c02c28"), (p = p()), pe(), p),
  ht = ["src"],
  gt = ["src"],
  ft = { key: 1, class: "captcha_message" },
  wt = { class: "captcha_message__icon" },
  yt = {
    key: 0,
    height: "28",
    viewBox: "0 0 28 28",
    width: "28",
    xmlns: "http://www.w3.org/2000/svg",
  },
  bt = K(() =>
    e(
      "g",
      {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "#fff",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "1.5",
      },
      [
        e("path", {
          d: "M22.776 4.073A13.2 13.2 0 0 0 14 .75C6.682.75.75 6.682.75 14S6.682 27.25 14 27.25 27.25 21.318 27.25 14c0-.284-.009-.566-.027-.845",
        }),
        e("path", { d: "M7 12.5l7 7 13-13" }),
      ],
      -1,
    ),
  ),
  kt = [bt],
  $t = {
    key: 1,
    height: "28",
    viewBox: "0 0 28 28",
    width: "28",
    xmlns: "http://www.w3.org/2000/svg",
  },
  St = K(() =>
    e(
      "g",
      {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "#fff",
        "stroke-width": "1.5",
      },
      [
        e("circle", { cx: "14", cy: "14", r: "13.25" }),
        e("path", {
          d: "M8.75 8.75l10.5 10.5M19.25 8.75l-10.5 10.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1,
    ),
  ),
  Ct = [St],
  It = { class: "captcha_message__text" },
  Tt = { key: 2, class: "captcha_message loadding" },
  Ft = K(() =>
    e(
      "div",
      { class: "captcha_message__icon captcha_message__icon--loadding" },
      null,
      -1,
    ),
  ),
  Pt = K(() => e("div", { class: "captcha_message__text" }, "加载中...", -1)),
  xt = [Ft, Pt],
  Rt = { key: 3, class: "captcha_message" },
  Vt = K(() =>
    e(
      "div",
      { class: "captcha_message__icon captcha_message__icon--loadding" },
      null,
      -1,
    ),
  ),
  Et = K(() => e("div", { class: "captcha_message__text" }, null, -1)),
  Bt = [Vt, Et],
  Nt = K(() =>
    e(
      "path",
      {
        d: "M500.864 545.728a47.744 47.744 0 0 0 6.72-48.896 24.704 24.704 0 0 0-4.48-8.384L240.256 193.088a34.24 34.24 0 0 0-28.608-17.408 34.24 34.24 0 0 0-25.856 12.864 46.592 46.592 0 0 0 0 59.52l238.08 264.512-238.08 264.512a46.592 46.592 0 0 0-1.088 59.52 32 32 0 0 0 50.56 0l265.6-290.88z",
        "p-id": "820",
      },
      null,
      -1,
    ),
  ),
  Ut = K(() =>
    e(
      "path",
      {
        d: "M523.84 248.064l236.992 264.512-238.08 264.512a46.592 46.592 0 0 0 0 59.52 32 32 0 0 0 50.56 0l265.6-292.608a47.744 47.744 0 0 0 6.72-48.832 24.704 24.704 0 0 0-4.48-8.448L578.304 191.36a34.24 34.24 0 0 0-55.552-2.816 46.592 46.592 0 0 0 1.088 59.52z",
        "p-id": "821",
      },
      null,
      -1,
    ),
  ),
  Dt = [Nt, Ut],
  Mt = { key: 0, class: "captcha__actions" },
  Lt = ["fill"],
  Ht = K(() =>
    e(
      "path",
      {
        d: "M10,4 C12.0559549,4 13.9131832,5.04358655 15.0015086,6.68322231 L15,5.5 C15,5.22385763 15.2238576,5 15.5,5 C15.7761424,5 16,5.22385763 16,5.5 L16,8.5 C16,8.77614237 15.7761424,9 15.5,9 L12.5,9 C12.2238576,9 12,8.77614237 12,8.5 C12,8.22385763 12.2238576,8 12.5,8 L14.5842317,8.00000341 C13.7999308,6.20218044 12.0143541,5 10,5 C7.23857625,5 5,7.23857625 5,10 C5,12.7614237 7.23857625,15 10,15 C11.749756,15 13.3431487,14.0944653 14.2500463,12.6352662 C14.3958113,12.4007302 14.7041063,12.328767 14.9386423,12.4745321 C15.1731784,12.6202971 15.2451415,12.9285921 15.0993765,13.1631281 C14.0118542,14.9129524 12.0990688,16 10,16 C6.6862915,16 4,13.3137085 4,10 C4,6.6862915 6.6862915,4 10,4 Z",
        "fill-rule": "nonzero",
      },
      null,
      -1,
    ),
  ),
  Ot = [Ht],
  Wt = O({
    __name: "SlideCaptcha",
    props: {
      width: { type: Number, default: 340 },
      height: { type: Number, default: 212 },
      barHeight: { type: Number, default: 40 },
      handlerIconWidth: { type: Number, default: 16 },
      handlerIconHeigth: { type: Number, default: 16 },
      background: { type: String, default: "#eee" },
      circle: { type: Boolean, default: !1 },
      radius: { type: String, default: "4px" },
      text: { type: String, default: "按住滑块拖动" },
      progressBarBg: { type: String, default: "#76c61d" },
      successTip: { type: String, default: "验证通过，超过80%用户" },
      failTip: {
        type: String,
        default: "验证未通过，拖动滑块将悬浮图像正确合并",
      },
      showRefresh: { type: Boolean, default: !1 },
      refreshColor: { type: String, default: "#505050" },
    },
    emits: ["finish", "refresh"],
    setup(p, { expose: $, emit: c }) {
      const t = p,
        i = d(!1),
        s = d(!1),
        o = d(0),
        h = d(0),
        l = d(!1),
        v = d(!1),
        y = d(!1),
        u = d([]),
        w = d(void 0),
        S = d(!1),
        r = d(!1),
        g = d(!1),
        f = d(""),
        L = d(""),
        x = d(!1),
        k = V(() => ({
          width: t.width + "px",
          height: t.height + "px",
          position: "relative",
          overflow: "hidden",
        })),
        P = V(() => ({ width: t.width + "px" })),
        R = V(() => ({
          width: t.width + "px",
          height: t.barHeight + "px",
          lineHeight: t.barHeight + "px",
          background: t.background,
          borderRadius: t.circle ? t.barHeight / 2 + "px" : t.radius,
        })),
        q = V(() => ({
          background: t.progressBarBg,
          height: t.barHeight + "px",
          borderRadius: t.circle
            ? t.barHeight / 2 + "px 0 0 " + t.barHeight / 2 + "px"
            : t.radius,
        })),
        te = V(() => ({ height: t.barHeight + "px", width: t.width + "px" })),
        _ = V(() => ({
          width: t.barHeight + "px",
          height: t.barHeight - 2 + "px",
        })),
        T = V(() => ({
          width: t.handlerIconWidth + "px",
          height: t.handlerIconHeigth + "px",
        })),
        ie = V(() => t.refreshColor),
        H = V(() => ({ color: t.refreshColor })),
        m = d(),
        I = d(),
        ue = d(),
        N = d(),
        ve = d();
      re(() => {});
      const Me = () => {
          (i.value = !0),
            J(() => {
              Ce(), ze();
            }),
            (g.value = !0);
        },
        Le = (U, j) => {
          (g.value = !1), (f.value = U), (L.value = j);
        },
        He = () => {
          r.value = !0;
        },
        Oe = (U) => {
          (U.value = U), (r.value = !1), (S.value = !0);
        },
        Ce = () => {
          (o.value = 0),
            (h.value = 0),
            (u.value = []),
            (s.value = !1),
            (y.value = !1),
            (g.value = !1),
            (r.value = !1),
            (S.value = !1),
            (x.value = !1),
            I && (I.value.style.width = 0),
            N && (N.value.style.left = 0),
            ve && (ve.value.style.left = 0);
        },
        Ie = () => {
          window.removeEventListener("touchmove", me),
            window.removeEventListener("touchend", _e),
            window.removeEventListener("mousemove", me),
            window.removeEventListener("mouseup", _e);
        },
        Te = (U) => {
          !x.value &&
            f.value &&
            L.value &&
            !y.value &&
            (window.addEventListener("touchmove", me),
            window.addEventListener("touchend", _e),
            window.addEventListener("mousemove", me),
            window.addEventListener("mouseup", _e),
            (s.value = !0),
            (w.value = new Date()),
            (o.value = U.pageX || U.touches[0].pageX),
            (h.value = U.pageY || U.touches[0].pageY));
        },
        me = (U) => {
          if (s.value && !x.value && f.value && L.value && !y.value) {
            const j = (U.pageX || U.touches[0].pageX) - o.value,
              fe = (U.pageY || U.touches[0].pageY) - h.value;
            (ve.value.style.left = j + "px"),
              (I.value.style.width = j + t.barHeight / 2 + "px"),
              (N.value.style.left = j + "px"),
              u.value.push({
                x: Math.round(j),
                y: Math.round(fe),
                t: new Date().getTime() - w.value.getTime(),
              });
          }
        },
        _e = () => {
          s.value &&
            !x.value &&
            f.value &&
            L.value &&
            !y.value &&
            ((s.value = !1),
            (y.value = !0),
            Ie(),
            c("finish", {
              backgroundImageWidth: ue.value.offsetWidth,
              backgroundImageHeight: ue.value.offsetHeight,
              sliderImageWidth: N.value.offsetWidth,
              sliderImageHeight: N.value.offsetHeight,
              startTime: w.value,
              endTime: new Date(),
              tracks: u.value,
            }));
        },
        We = (U) => {
          i.value = U;
        },
        ze = () => {
          m.value.style.setProperty("--textColor", "#333"),
            m.value.style.setProperty(
              "--width",
              Math.floor(t.width / 2) + "px",
            ),
            m.value.style.setProperty(
              "--pwidth",
              -Math.floor(t.width / 2) + "px",
            );
        },
        qe = () => {
          Ce(), c("refresh");
        };
      return (
        $({
          startRequestVerify: He,
          endRequestVerify: Oe,
          startRequestGenerate: Me,
          endRequestGenerate: Le,
          setShowHiden: We,
        }),
        Xe(() => {
          Ie();
        }),
        (U, j) => {
          const fe = A("van-popup");
          return (
            b(),
            se(
              fe,
              {
                show: i.value,
                "onUpdate:show": j[0] || (j[0] = (Ae) => (i.value = Ae)),
                teleport: "body",
              },
              {
                default: z(() => [
                  e(
                    "div",
                    { class: "captcha", style: Z(P.value) },
                    [
                      e(
                        "div",
                        { class: "captcha__main", style: Z(k.value) },
                        [
                          f.value
                            ? (b(),
                              C(
                                "img",
                                {
                                  key: 0,
                                  ref_key: "backgroundRef",
                                  ref: ue,
                                  alt: "background",
                                  class: "captcha_background",
                                  src: f.value,
                                },
                                null,
                                8,
                                ht,
                              ))
                            : X("", !0),
                          E(
                            e(
                              "img",
                              {
                                ref_key: "sliderRef",
                                ref: N,
                                alt: "slider",
                                class: D([
                                  "captcha_slider",
                                  { goFirst: l.value, goKeep: v.value },
                                ]),
                                src: L.value,
                              },
                              null,
                              10,
                              gt,
                            ),
                            [[Y, L.value]],
                          ),
                          S.value
                            ? (b(),
                              C("div", ft, [
                                e("div", wt, [
                                  x.value
                                    ? (b(), C("svg", yt, kt))
                                    : (b(), C("svg", $t, Ct)),
                                ]),
                                e(
                                  "div",
                                  It,
                                  n(x.value ? p.successTip : p.failTip),
                                  1,
                                ),
                              ]))
                            : X("", !0),
                          g.value ? (b(), C("div", Tt, xt)) : X("", !0),
                          r.value ? (b(), C("div", Rt, Bt)) : X("", !0),
                        ],
                        4,
                      ),
                      e(
                        "div",
                        {
                          ref_key: "dragVerifyRef",
                          ref: m,
                          class: "captcha__bar",
                          style: Z(R.value),
                        },
                        [
                          e(
                            "div",
                            {
                              ref_key: "progressBarRef",
                              ref: I,
                              class: D([
                                "captcha_progress_bar",
                                { goFirst2: l.value },
                              ]),
                              style: Z(q.value),
                            },
                            null,
                            6,
                          ),
                          e(
                            "div",
                            {
                              class: "captcha_progress_bar__text",
                              style: Z(te.value),
                            },
                            n(p.text),
                            5,
                          ),
                          e(
                            "div",
                            {
                              ref_key: "handlerRef",
                              ref: ve,
                              class: D([
                                "captcha_handler",
                                { goFirst: l.value },
                              ]),
                              style: Z(_.value),
                              onMousedown: Te,
                              onTouchstart: Te,
                            },
                            [
                              (b(),
                              C(
                                "svg",
                                {
                                  "p-id": "819",
                                  style: Z(T.value),
                                  version: "1.1",
                                  viewBox: "0 0 1024 1024",
                                  xmlns: "http://www.w3.org/2000/svg",
                                },
                                Dt,
                                4,
                              )),
                            ],
                            38,
                          ),
                        ],
                        4,
                      ),
                      p.showRefresh
                        ? (b(),
                          C("div", Mt, [
                            e(
                              "a",
                              {
                                class: "captcha__action",
                                style: Z(H.value),
                                onClick: qe,
                              },
                              [
                                (b(),
                                C(
                                  "svg",
                                  {
                                    fill: ie.value,
                                    height: "20px",
                                    version: "1.1",
                                    viewBox: "0 0 20 20",
                                    width: "20px",
                                    xmlns: "http://www.w3.org/2000/svg",
                                  },
                                  Ot,
                                  8,
                                  Lt,
                                )),
                              ],
                              4,
                            ),
                          ]))
                        : X("", !0),
                    ],
                    4,
                  ),
                ]),
                _: 1,
              },
              8,
              ["show"],
            )
          );
        }
      );
    },
  });
const De = W(Wt, [["__scopeId", "data-v-54c02c28"]]),
  zt = { class: "verifyInput__container" },
  qt = { class: "verifyInput__container-label" },
  At = { class: "verifyInput__container-label__icon" },
  Gt = { key: 0 },
  jt = { key: 1 },
  Xt = { class: "verifyInput__container-input" },
  Yt = ["placeholder"],
  Kt = { key: 0 },
  Zt = { key: 1 },
  Jt = { class: "verifyInput__container-tip" },
  Qt = O({
    __name: "VerifyInput",
    props: {
      value: {},
      typeP: {},
      isShowVerifyT: { type: Boolean },
      placeholder: { default: ge.global.t("registerTip1") },
      sendFunc: {},
      number: {},
      numberType: { default: "" },
      showVerify: { type: Boolean, default: !0 },
      email: {},
      loginType: {},
    },
    emits: ["update:value"],
    setup(p, { emit: $ }) {
      const c = p,
        { t } = oe(),
        i = ee(),
        o = Ze().getUserInfo,
        h = Q(),
        l = V({
          get() {
            return c.value || "";
          },
          set(r) {
            $("update:value", r);
          },
        }),
        v = d(!0);
      async function y() {
        var g;
        if ((v.value && (v.value = !1), i.countDown > 0)) return;
        if (
          h.currentRoute.value.name === "rpwd" ||
          h.currentRoute.value.name === "register" ||
          (h.currentRoute.value.name === "SettingC-UpdatePhone" &&
            !c.isShowVerifyT)
        ) {
          if (!((g = c.number) != null && g.trim()))
            return M({ message: t("telUndetected"), wordBreak: "break-word" });
          const f = (c.number.trim() + c.numberType.trim()).length;
          if (f < 10 || f > 14)
            return M({ message: t("wrongTel"), wordBreak: "break-word" });
        } else if (
          !localStorage.getItem("numberType") &&
          localStorage.getItem("number")
        )
          return M({ message: t("telUndetected"), wordBreak: "break-word" });
        !c.sendFunc || (await c.sendFunc()) === -1 || i.sendCode();
      }
      const u = V(() => {
          var r;
          return c.number
            ? c.numberType + c.number
            : ((r = o == null ? void 0 : o.verifyMethods) == null
                ? void 0
                : r.mobile) ||
                localStorage.getItem("numberType") +
                  localStorage.getItem("number");
        }),
        w = (r) => {
          const g = r.target;
          (g.value = g.value.replace(/\s+/g, "")),
            (g.value = g.value.replace(/[^\d]/g, ""));
        };
      function S() {
        h.push({ name: "CustomerService" });
      }
      return (r, g) => {
        const f = A("van-icon"),
          L = ae("lazy");
        return E(
          (b(),
          C(
            "div",
            zt,
            [
              E(
                e(
                  "div",
                  qt,
                  [
                    E(e("img", At, null, 512), [[L, a(G)("login", "verify")]]),
                    r.typeP === "updatePhone" || r.typeP === "lock"
                      ? (b(),
                        C(
                          "span",
                          Gt,
                          n(r.$t("sendVerifyCodeTo")) + " " + n(a(Je)(u.value)),
                          1,
                        ))
                      : (b(), C("span", jt, n(r.$t("verifyCode")), 1)),
                  ],
                  512,
                ),
                [[Y, !(r.isShowVerifyT === !1 && r.typeP === "updatePhone")]],
              ),
              e("div", Xt, [
                E(
                  e(
                    "input",
                    {
                      type: "text",
                      "onUpdate:modelValue":
                        g[0] || (g[0] = (x) => (l.value = x)),
                      placeholder: r.$t("phEnterVerificationCode"),
                      maxlength: "6",
                      onInput: w,
                    },
                    null,
                    40,
                    Yt,
                  ),
                  [[ce, l.value]],
                ),
                e(
                  "button",
                  { onClick: y, class: D({ inActive: a(i).countDown > 0 }) },
                  [
                    a(i).countDown === 0
                      ? (b(), C("span", Kt, n(r.$t("send")), 1))
                      : (b(), C("span", Zt, n(a(i).countDown) + "S ", 1)),
                  ],
                  2,
                ),
              ]),
              E(
                e(
                  "div",
                  Jt,
                  [
                    F(f, { name: "warning-o" }),
                    e("span", null, n(r.$t("codeUnreceived")) + "?", 1),
                    e(
                      "span",
                      { onClick: g[1] || (g[1] = (x) => S()) },
                      n(r.$t("contactServicer")),
                      1,
                    ),
                  ],
                  512,
                ),
                [[Y, !v.value]],
              ),
            ],
            512,
          )),
          [[Y, r.showVerify]],
        );
      };
    },
  });
const es = W(Qt, [["__scopeId", "data-v-7f8a9c9a"]]),
  ts = { class: "passwordInput__container" },
  ss = { class: "passwordInput__container-label" },
  os = { class: "passwordInput__container-label__icon" },
  as = { class: "passwordInput__container-input" },
  ns = ["type", "placeholder", "maxlength", "value"],
  ls = ["src"],
  rs = O({
    __name: "PasswordInput",
    props: { value: {}, maxlength: { default: 15 }, label: {} },
    emits: ["update:value"],
    setup(p, { emit: $ }) {
      const c = p,
        t = ge.global.t,
        i = d(),
        s = d(""),
        o = d(!1);
      ye(
        s,
        (k) => {
          $("update:value", k);
        },
        { flush: "post" },
      );
      const h = (k) => {
          if (o.value) return;
          let P = y();
          const R = k.target;
          R.value = R.value.replace(/\s+/g, "");
          const q = /[\u4e00-\u9fa5]/g;
          (R.value = R.value.replace(q, "")), u(P, R.value), w(R.value), S(P);
        },
        l = d(!1),
        v = V(() => G("login", `${l.value ? "eyeVisible" : "eyeInvisible"}`)),
        y = () => {
          var k = { start: 0, end: 0 };
          return (
            (k.start = i.value.selectionStart),
            (k.end = i.value.selectionEnd),
            k
          );
        },
        u = (k, P) => {
          if (P.length > 1 && !P.includes("•")) {
            s.value = P;
            return;
          }
          let R = P.split("•").join("");
          if (R) {
            let q = s.value.length - (P.length - k.end);
            s.value = s.value.slice(0, k.end - R.length) + R + s.value.slice(q);
          } else
            s.value =
              s.value.slice(0, k.end) +
              s.value.slice(k.end + s.value.length - P.length);
        },
        w = (k) => {
          if (l.value) return;
          if (!k) {
            i.value.value = "";
            return;
          }
          let P = "";
          for (let R = 0; R < k.length; R++) P += "•";
          i.value.value = P;
        },
        S = (k) => {
          i.value.setSelectionRange(k.start, k.end);
        },
        r = () => {
          o.value = !0;
        },
        g = (k) => {
          o.value && ((o.value = !1), h(k));
        },
        f = () => {
          (l.value = !l.value),
            l.value ? (i.value.value = s.value) : w(s.value);
        };
      re(() => {
        (s.value = c.value || ""), w(s.value);
      });
      const L = localStorage.getItem("language"),
        x = V(() => {
          let k,
            P = c.label;
          switch (L) {
            case "vi":
              switch (P) {
                case "Đặt mật khẩu":
                  k = t("setLoginPSW");
                  break;
                case "Xác nhận mật khẩu":
                  k = t("enterPswConfirmation");
                  break;
                default:
                  k = t("phEnter") + P;
                  break;
              }
              break;
            default:
              k = P;
          }
          return k;
        });
      return (k, P) => {
        const R = ae("lazy");
        return (
          b(),
          C("div", ts, [
            e("div", ss, [
              E(e("img", os, null, 512), [[R, a(G)("login", "password")]]),
              e("span", null, n(k.label), 1),
            ]),
            e("div", as, [
              e(
                "input",
                {
                  type: l.value ? "text" : "password",
                  placeholder: x.value,
                  maxlength: k.maxlength,
                  onInput: h,
                  onCompositionstart: r,
                  onCompositionend: g,
                  ref_key: "inputPwd",
                  ref: i,
                  value: k.value,
                  autocomplete: "new-password",
                },
                null,
                40,
                ns,
              ),
              e("img", { src: v.value, class: "eye", onClick: f }, null, 8, ls),
            ]),
          ])
        );
      };
    },
  });
const le = W(rs, [["__scopeId", "data-v-b59c95a7"]]),
  be = (p) => (de("data-v-8e79a8ed"), (p = p()), pe(), p),
  is = { class: "RpwdPopup" },
  us = { class: "RpwdPopup-head" },
  cs = { class: "RpwdPopup-topTip" },
  ds = be(() => e("br", null, null, -1)),
  ps = { class: "RpwdPopup-tip" },
  vs = be(() => e("div", { class: "tipbg" }, null, -1)),
  ms = { class: "RpwdPopup-errorTip" },
  _s = { key: 0 },
  hs = ["src"],
  gs = { class: "errorTip" },
  fs = be(() => e("br", null, null, -1)),
  ws = { class: "RpwdPopup-foot" },
  ys = O({
    __name: "RpwdPopup",
    props: {
      show: { type: Boolean, default: !1 },
      gamePresentation: { type: String, default: "" },
      phoneNumber: { type: String, default: "" },
      phoneNumberType: { type: String, default: "" },
      passwordErrorMaxNum: { default: 10 },
    },
    emits: ["update:show"],
    setup(p, { emit: $ }) {
      const c = p,
        { t } = oe(),
        i = Q(),
        s = d(!1),
        o = ee(),
        h = d(!1),
        l = d({ smsvcode: "", password: "", rePassword: "" }),
        v = V({
          get() {
            return c.show || !1;
          },
          set(S) {
            S || $("update:show", !1);
          },
        }),
        y = async () => {
          if (!c.phoneNumber) return;
          (await ne(
            Qe({
              phone: c.phoneNumberType + c.phoneNumber,
              codeType: xe.resetPassword,
            }),
          ))
            ? he(t("sendSuccess"))
            : setTimeout(() => {
                o.setCountDown(0);
              }, 500);
        },
        u = async () => {
          if (!l.value.smsvcode.trim())
            return M({ message: t("registerTip1"), wordBreak: "break-word" });
          if (l.value.smsvcode.trim().length != 6)
            return M({
              message: t("verifyCode6Digits"),
              wordBreak: "break-word",
            });
          if (!l.value.password.trim())
            return M({ message: t("registerTip2"), wordBreak: "break-word" });
          if (!we.passReg3.test(l.value.password)) {
            s.value = !0;
            return;
          }
          if (!l.value.rePassword.trim())
            return M({ message: t("registerTip3"), wordBreak: "break-word" });
          if (l.value.password !== l.value.rePassword) {
            h.value = !0;
            return;
          } else h.value = !1;
          const { password: S, smsvcode: r } = l.value;
          let g = {
            username: c.phoneNumberType + c.phoneNumber,
            password: S,
            type: "mobile",
            smsvcode: r,
          };
          (await ne(Re(g))) &&
            (he(t("rpdsucceed")), localStorage.clear(), $("update:show", !1));
        },
        w = () => {
          i.push({ name: "CustomerService" });
        };
      return (S, r) => {
        const g = A("van-popup");
        return (
          b(),
          se(
            g,
            {
              show: v.value,
              "onUpdate:show": r[4] || (r[4] = (f) => (v.value = f)),
              "close-on-click-overlay": !1,
              position: "bottom",
              round: "",
            },
            {
              default: z(() => [
                e("div", is, [
                  e("div", us, n(a(t)("idlockTitle")), 1),
                  e("div", cs, [
                    B(n(a(t)("idlockTip1", [p.passwordErrorMaxNum])), 1),
                    ds,
                    B(n(a(t)("idlockTip3")), 1),
                  ]),
                  F(
                    es,
                    {
                      value: l.value.smsvcode,
                      "onUpdate:value":
                        r[0] || (r[0] = (f) => (l.value.smsvcode = f)),
                      number: p.phoneNumber,
                      sendFunc: y,
                      numberType: p.phoneNumberType,
                      "type-p": "lock",
                    },
                    null,
                    8,
                    ["value", "number", "numberType"],
                  ),
                  F(
                    le,
                    {
                      value: l.value.password,
                      "onUpdate:value":
                        r[1] || (r[1] = (f) => (l.value.password = f)),
                      label: a(t)("newPSWRest"),
                    },
                    null,
                    8,
                    ["value", "label"],
                  ),
                  E(
                    e(
                      "div",
                      ps,
                      [vs, e("span", null, n(a(t)("pswRule")), 1)],
                      512,
                    ),
                    [[Y, s.value]],
                  ),
                  F(
                    le,
                    {
                      value: l.value.rePassword,
                      "onUpdate:value":
                        r[2] || (r[2] = (f) => (l.value.rePassword = f)),
                      label: a(t)("newPSWconfirm"),
                    },
                    null,
                    8,
                    ["value", "label"],
                  ),
                  e("div", ms, [
                    h.value
                      ? (b(), C("span", _s, n(a(t)("unmatchedInput")), 1))
                      : X("", !0),
                  ]),
                  e(
                    "div",
                    { class: "gotuserver van-hairline--surround", onClick: w },
                    [
                      e(
                        "img",
                        { src: a(G)("login", "iconservr-r") },
                        null,
                        8,
                        hs,
                      ),
                      B(n(a(t)("contactServicer")), 1),
                    ],
                  ),
                  e("div", gs, [
                    B(n(a(t)("wrongTel")), 1),
                    fs,
                    B(n(a(t)("rpwdPopupTip")), 1),
                  ]),
                  e("div", ws, [
                    e(
                      "button",
                      {
                        class: "dialogBtn",
                        onClick: r[3] || (r[3] = (f) => $("update:show", !1)),
                      },
                      n(a(t)("cancel")),
                      1,
                    ),
                    e(
                      "button",
                      { class: "dialogBtn", onClick: u },
                      n(a(t)("confirm")),
                      1,
                    ),
                  ]),
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
const bs = W(ys, [["__scopeId", "data-v-8e79a8ed"]]),
  ks = { class: "phoneInput__container" },
  $s = { class: "phoneInput__container-label" },
  Ss = ["src"],
  Cs = { class: "phoneInput__container-input" },
  Is = ["placeholder"],
  Ts = O({
    __name: "PhoneInput",
    props: {
      type: {},
      showValidate: { type: Boolean },
      typeP: {},
      numberType: {},
      number: {},
    },
    emits: ["update:show-validate", "changeT", "changeN"],
    setup(p, { expose: $, emit: c }) {
      const t = p,
        i = d(),
        s = V({
          get() {
            return t.number;
          },
          set(u) {
            c("changeN", u.replace(/[^0-9]/g, ""));
          },
        });
      function o(u) {
        u.target.value.length < 6 && c("update:show-validate", !0);
      }
      function h(u) {
        const w = u.target,
          S = /[\u4e00-\u9fa5]/g;
        (w.value = w.value.replace(S, "")),
          w.value.length > 0 && c("update:show-validate", !1);
      }
      const l = (u) => {
        c("changeT", u);
      };
      Ye(i, () => {
        i.value.close();
      }),
        re(() => {});
      const v = d();
      function y() {
        J(() => {
          v.value.focus();
        });
      }
      return (
        $({ getFocus: y }),
        (u, w) => {
          const S = ae("only-num");
          return (
            b(),
            C("div", ks, [
              e("div", $s, [
                e(
                  "img",
                  {
                    src: a(G)("login", "cellphone"),
                    class: "phoneInput__container-label__icon",
                  },
                  null,
                  8,
                  Ss,
                ),
                e("span", null, n(u.$t("phone")), 1),
              ]),
              e("div", Cs, [
                F(
                  et,
                  {
                    typeValue: t.numberType,
                    ref_key: "dropDown",
                    ref: i,
                    onChangeT: l,
                  },
                  null,
                  8,
                  ["typeValue"],
                ),
                E(
                  e(
                    "input",
                    {
                      type: "text",
                      name: "userNumber",
                      "onUpdate:modelValue":
                        w[0] || (w[0] = (r) => (s.value = r)),
                      placeholder: u.$t("plsEnterTel"),
                      onBlur: o,
                      onInput: h,
                      ref_key: "number",
                      ref: v,
                    },
                    null,
                    40,
                    Is,
                  ),
                  [[S], [ce, s.value]],
                ),
              ]),
            ])
          );
        }
      );
    },
  });
const Fs = W(Ts, [["__scopeId", "data-v-bef9bff8"]]),
  ke = (p) => (de("data-v-bba3a451"), (p = p()), pe(), p),
  Ps = { class: "signIn__container" },
  xs = { class: "signIn__container-button" },
  Rs = { class: "signIn_footer" },
  Vs = ke(() => e("div", { class: "forgetbg" }, null, -1)),
  Es = { class: "font24" },
  Bs = ke(() => e("div", { class: "custombg" }, null, -1)),
  Ns = { class: "font24" },
  Us = { class: "idlockTip" },
  Ds = ke(() => e("br", null, null, -1)),
  Ms = O({
    __name: "SignIn",
    setup(p, { expose: $ }) {
      const c = Q(),
        { t } = oe(),
        i = d("login"),
        { setLoading: s } = Ve(),
        o = ee(),
        h = d(!1),
        l = d(!1),
        v = d(10),
        y = d();
      let u = !1;
      async function w() {
        if (!u) {
          if (
            ((u = !0),
            Be() && (await new Promise((m) => setTimeout(m, 1e3))),
            (u = !1),
            !o.userForm.number || o.userForm.number.toString().trim() === "")
          ) {
            l.value = !0;
            return;
          }
          if (
            !o.userForm.password ||
            o.userForm.password.toString().trim() === ""
          )
            return M({ message: t("registerTip2"), wordBreak: "break-word" });
          (o.userForm.numberType = o.getUserForm.numberType.replace("+", "")),
            o.userForm.remember && o.userForm.password.toString().trim() !== ""
              ? localStorage.setItem("remember", o.userForm.password)
              : localStorage.setItem("remember", ""),
            o.isOpenCaptcha
              ? te()
              : (s(!0),
                await o
                  .signIn(o.userForm)
                  .then((m) => {
                    o.userForm.vCode = "";
                  })
                  .catch((m) => {
                    var I;
                    m.code === 1 &&
                      (v.value =
                        ((I = m.data) == null
                          ? void 0
                          : I.passwordErrorMaxNum) || 10),
                      m.msgCode === 33
                        ? J(() => (T.value = !0))
                        : _(m.msgCode || 0);
                  })
                  .finally(() => {
                    x.value.setShowHiden(!1), s(!1);
                  }));
        }
      }
      const S = () => {
        c.push({ name: "register" });
      };
      function r() {
        c.push({ name: "rpwd" }), o.setCurrentView("ResetPassword");
      }
      function g() {
        c.push({ name: "CustomerService" });
      }
      const f = (m) => {
          o.getUserForm.numberType = m;
        },
        L = (m) => {
          o.getUserForm.number = m;
        },
        x = d(),
        k = d(""),
        P = () => {
          (h.value = !1), c.push({ name: "CustomerService" });
        };
      Fe(window, "keydown", (m) => {
        m.key == "Enter" && w();
      }),
        re(async () => {
          var I;
          const m = o.getUserForm;
          localStorage.getItem("remember") != null &&
          ((I = localStorage.getItem("remember")) == null
            ? void 0
            : I.toString().trim()) != ""
            ? (m.password = localStorage.getItem("remember"))
            : (m.password = ""),
            o.setUserForm({ ...m });
        });
      let R = ye(
        () => o.userForm.number,
        (m) => {
          o.setCountDown(0);
        },
        { flush: "post" },
      );
      const q = async (m) => {
          J(async () => {
            x.value.startRequestVerify(),
              s(!0),
              o
                .signIn(
                  Object.assign(o.userForm, { captchaId: k.value, track: m }),
                )
                .then((I) => {})
                .catch((I) => {
                  _(I.msgCode || 0);
                })
                .finally(() => {
                  x.value.setShowHiden(!1), s(!1);
                });
          });
        },
        te = () => {
          J(async () => {
            x.value.startRequestGenerate();
            const m = await ne(Ne());
            m
              ? ((k.value = m.data.captchaId),
                x.value.endRequestGenerate(
                  m.data.backgroundImage,
                  m.data.sliderImage,
                ))
              : x.value.endRequestGenerate(null, null);
          });
        },
        _ = (m) => {
          m == 122 && (h.value = !0);
        };
      Pe(() => {
        R(), o.getUserForm.remember || (o.getUserForm.password = "");
      });
      const T = d(!1),
        ie = (m) => {
          (o.userForm.vCode = m), w();
        },
        H = () => {
          (T.value = !1), (o.userForm.vCode = "");
        };
      return (
        $({ showPhoneValidate: l }),
        (m, I) => {
          const ue = A("van-checkbox");
          return (
            b(),
            C("div", Ps, [
              F(
                Fs,
                {
                  "show-validate": l.value,
                  "onUpdate:showValidate":
                    I[0] || (I[0] = (N) => (l.value = N)),
                  ref_key: "phone",
                  ref: y,
                  type: i.value,
                  "number-type": a(o).getUserForm.numberType,
                  number: a(o).userForm.number,
                  onChangeT: f,
                  onChangeN: L,
                },
                null,
                8,
                ["show-validate", "type", "number-type", "number"],
              ),
              F(
                le,
                {
                  value: a(o).userForm.password,
                  "onUpdate:value":
                    I[1] || (I[1] = (N) => (a(o).userForm.password = N)),
                  label: m.$t("password"),
                  maxlength: 32,
                },
                null,
                8,
                ["value", "label"],
              ),
              e("div", null, [
                F(
                  ue,
                  {
                    modelValue: a(o).userForm.rememberpwd,
                    "onUpdate:modelValue":
                      I[2] || (I[2] = (N) => (a(o).userForm.rememberpwd = N)),
                    "checked-color": "#2b3270",
                  },
                  { default: z(() => [B(n(m.$t("rememberPSW")), 1)]), _: 1 },
                  8,
                  ["modelValue"],
                ),
              ]),
              e("div", xs, [
                e(
                  "button",
                  {
                    class: D([a(o).userForm.number != "" ? "active" : ""]),
                    onClick: w,
                  },
                  n(m.$t("login")),
                  3,
                ),
                e(
                  "button",
                  { class: "register", onClick: S },
                  n(m.$t("register")),
                  1,
                ),
              ]),
              e("div", Rs, [
                a(o).isOpenForgetPasswordSMSState ||
                a(o).isOpenForgetPasswordEmailState
                  ? (b(),
                    C("div", { key: 0, class: "forgetcon", onClick: r }, [
                      Vs,
                      e("div", Es, n(m.$t("forgetPSW")), 1),
                    ]))
                  : X("", !0),
                e("div", { class: "customcon", onClick: g }, [
                  Bs,
                  e("div", Ns, n(m.$t("customerServiceTitle")), 1),
                ]),
              ]),
              F(
                De,
                {
                  ref_key: "captchaRef",
                  ref: x,
                  "refresh-color": "#FFFFFF",
                  "show-refresh": !0,
                  text: a(t)("slideCaptchaText"),
                  onFinish: q,
                  onRefresh: te,
                },
                null,
                8,
                ["text"],
              ),
              a(o).isOpenForgetPasswordSMSState && h.value
                ? (b(),
                  se(
                    bs,
                    {
                      key: 0,
                      show: h.value,
                      "onUpdate:show": I[3] || (I[3] = (N) => (h.value = N)),
                      phoneNumber: a(o).getUserForm.number,
                      phoneNumberType: a(o).getUserForm.numberType,
                      passwordErrorMaxNum: v.value,
                    },
                    null,
                    8,
                    [
                      "show",
                      "phoneNumber",
                      "phoneNumberType",
                      "passwordErrorMaxNum",
                    ],
                  ))
                : (b(),
                  se(
                    Ee,
                    {
                      key: 1,
                      show: h.value,
                      "onUpdate:show": I[5] || (I[5] = (N) => (h.value = N)),
                      "show-cancel-btn": !0,
                      title: m.$t("idlockTitle"),
                    },
                    {
                      content: z(() => [
                        e("div", Us, [
                          B(n(m.$t("idlockTip1", [v.value])) + " ", 1),
                          Ds,
                          B(n(m.$t("idlockTip2")), 1),
                        ]),
                      ]),
                      footer: z(() => [
                        e(
                          "button",
                          {
                            class: "dialogBtn",
                            onClick: I[4] || (I[4] = (N) => (h.value = !1)),
                          },
                          n(m.$t("cancel")),
                          1,
                        ),
                        e(
                          "button",
                          { class: "dialogBtn", onClick: P },
                          n(m.$t("contactServicer")),
                          1,
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["show", "title"],
                  )),
              F(
                Ue,
                { showPopup: T.value, onOnConfirm: ie, onOnBack: H },
                null,
                8,
                ["showPopup"],
              ),
            ])
          );
        }
      );
    },
  });
const Ls = W(Ms, [["__scopeId", "data-v-bba3a451"]]),
  Hs = { class: "verifyInput__container" },
  Os = { class: "verifyInput__container-label" },
  Ws = { class: "verifyInput__container-label__icon" },
  zs = { key: 0 },
  qs = { key: 1 },
  As = { class: "verifyInput__container-input" },
  Gs = ["placeholder"],
  js = { key: 0 },
  Xs = { key: 1 },
  Ys = { class: "verifyInput__container-tip" },
  Ks = O({
    __name: "VerifyEmailInput",
    props: {
      value: {},
      typeP: {},
      isShowVerifyT: { type: Boolean },
      placeholder: { default: ge.global.t("registerTip6") },
      sendFunc: {},
      number: {},
      numberType: {},
      showVerify: { type: Boolean, default: !0 },
      email: { default: "" },
      loginType: {},
    },
    emits: ["update:value"],
    setup(p, { emit: $ }) {
      const c = p;
      oe();
      const t = ee(),
        i = Q(),
        s = V({
          get() {
            return c.value || "";
          },
          set(u) {
            $("update:value", u);
          },
        }),
        o = d(!0);
      async function h() {
        o.value && (o.value = !1),
          !(t.countEmailDown > 0) &&
            (t.sendEmailCode(), c.sendFunc && c.sendFunc());
      }
      const l = V(() => localStorage.getItem("email") || c.email),
        v = (u) => {
          const w = u.target;
          (w.value = w.value.replace(/\s+/g, "")),
            (w.value = w.value.replace(/[^\d]/g, ""));
        };
      function y() {
        i.push({ name: "CustomerService" });
      }
      return (u, w) => {
        const S = A("van-icon"),
          r = ae("lazy");
        return E(
          (b(),
          C(
            "div",
            Hs,
            [
              E(
                e(
                  "div",
                  Os,
                  [
                    E(e("img", Ws, null, 512), [[r, a(G)("login", "verify")]]),
                    u.typeP === "updateEmail" || u.typeP === "lock"
                      ? (b(),
                        C(
                          "span",
                          zs,
                          n(u.$t("sendVerifyCodeTo")) + " " + n(a(tt)(l.value)),
                          1,
                        ))
                      : (b(), C("span", qs, n(u.$t("verifyCode")), 1)),
                  ],
                  512,
                ),
                [[Y, !(u.isShowVerifyT === !1 && u.typeP === "updateEmail")]],
              ),
              e("div", As, [
                E(
                  e(
                    "input",
                    {
                      type: "text",
                      "onUpdate:modelValue":
                        w[0] || (w[0] = (g) => (s.value = g)),
                      placeholder: u.$t("phEnterVerificationCode"),
                      maxlength: "6",
                      onInput: v,
                    },
                    null,
                    40,
                    Gs,
                  ),
                  [[ce, s.value]],
                ),
                e(
                  "button",
                  {
                    onClick: h,
                    class: D({ inActive: a(t).countEmailDown > 0 }),
                  },
                  [
                    a(t).countEmailDown === 0
                      ? (b(), C("span", js, n(u.$t("send")), 1))
                      : (b(), C("span", Xs, n(a(t).countEmailDown) + "S ", 1)),
                  ],
                  2,
                ),
              ]),
              E(
                e(
                  "div",
                  Ys,
                  [
                    F(S, { name: "warning-o" }),
                    e("span", null, n(u.$t("codeUnreceived")) + "?", 1),
                    e(
                      "span",
                      { onClick: w[1] || (w[1] = (g) => y()) },
                      n(u.$t("contactServicer")),
                      1,
                    ),
                  ],
                  512,
                ),
                [[Y, !o.value]],
              ),
            ],
            512,
          )),
          [[Y, u.showVerify]],
        );
      };
    },
  });
const Zs = W(Ks, [["__scopeId", "data-v-dc6be5d6"]]),
  $e = (p) => (de("data-v-17c29f89"), (p = p()), pe(), p),
  Js = { class: "RpwdPopup" },
  Qs = { class: "RpwdPopup-head" },
  eo = { class: "RpwdPopup-topTip" },
  to = $e(() => e("br", null, null, -1)),
  so = { class: "RpwdPopup-tip" },
  oo = $e(() => e("div", { class: "tipbg" }, null, -1)),
  ao = { class: "RpwdPopup-errorTip" },
  no = { key: 0 },
  lo = ["src"],
  ro = { class: "errorTip" },
  io = $e(() => e("br", null, null, -1)),
  uo = { class: "RpwdPopup-foot" },
  co = O({
    __name: "EmailRpwdPopup",
    props: {
      show: { type: Boolean, default: !1 },
      gamePresentation: { type: String, default: "" },
      email: { type: String, default: "" },
      passwordErrorMaxNum: { default: 10 },
    },
    emits: ["update:show"],
    setup(p, { emit: $ }) {
      const c = p,
        { t } = oe(),
        i = Q(),
        s = d(!1),
        o = ee(),
        h = d(!1),
        l = d({ smsvcode: "", password: "", rePassword: "" }),
        v = V({
          get() {
            return c.show || !1;
          },
          set(S) {
            S || $("update:show", !1);
          },
        }),
        y = async () => {
          if (!c.email) return;
          (await ne(st({ email: c.email, emailType: xe.resetPassword })))
            ? he(t("sendSuccess"))
            : setTimeout(() => {
                o.setCountEmailDown(0);
              }, 500);
        },
        u = async () => {
          if (!l.value.smsvcode.trim())
            return M({ message: t("registerTip6"), wordBreak: "break-word" });
          if (l.value.smsvcode.trim().length != 6)
            return M({
              message: t("verifyCode6Digits"),
              wordBreak: "break-word",
            });
          if (!l.value.password.trim())
            return M({ message: t("registerTip2"), wordBreak: "break-word" });
          if (!we.passReg3.test(l.value.password)) {
            s.value = !0;
            return;
          }
          if (!l.value.rePassword.trim())
            return M({ message: t("registerTip3"), wordBreak: "break-word" });
          if (l.value.password !== l.value.rePassword) {
            h.value = !0;
            return;
          } else h.value = !1;
          const { password: S, smsvcode: r } = l.value;
          let g = {
            username: c.email,
            type: "email",
            password: S,
            smsvcode: r,
          };
          (await ne(Re(g))) &&
            (he(t("rpdsucceed")), localStorage.clear(), $("update:show", !1));
        },
        w = () => {
          i.push({ name: "CustomerService" });
        };
      return (S, r) => {
        const g = A("van-popup");
        return (
          b(),
          se(
            g,
            {
              show: v.value,
              "onUpdate:show": r[4] || (r[4] = (f) => (v.value = f)),
              "close-on-click-overlay": !1,
              position: "bottom",
              round: "",
            },
            {
              default: z(() => [
                e("div", Js, [
                  e("div", Qs, n(a(t)("idlockTitle")), 1),
                  e("div", eo, [
                    B(n(a(t)("idlockTip1", [p.passwordErrorMaxNum])), 1),
                    to,
                    B(n(a(t)("idlockTip3")), 1),
                  ]),
                  F(
                    Zs,
                    {
                      value: l.value.smsvcode,
                      "onUpdate:value":
                        r[0] || (r[0] = (f) => (l.value.smsvcode = f)),
                      sendFunc: y,
                      email: p.email,
                      "type-p": "lock",
                    },
                    null,
                    8,
                    ["value", "email"],
                  ),
                  F(
                    le,
                    {
                      value: l.value.password,
                      "onUpdate:value":
                        r[1] || (r[1] = (f) => (l.value.password = f)),
                      label: a(t)("newPSWRest"),
                    },
                    null,
                    8,
                    ["value", "label"],
                  ),
                  E(
                    e(
                      "div",
                      so,
                      [oo, e("span", null, n(a(t)("pswRule")), 1)],
                      512,
                    ),
                    [[Y, s.value]],
                  ),
                  F(
                    le,
                    {
                      value: l.value.rePassword,
                      "onUpdate:value":
                        r[2] || (r[2] = (f) => (l.value.rePassword = f)),
                      label: a(t)("newPSWconfirm"),
                    },
                    null,
                    8,
                    ["value", "label"],
                  ),
                  e("div", ao, [
                    h.value
                      ? (b(), C("span", no, n(a(t)("unmatchedInput")), 1))
                      : X("", !0),
                  ]),
                  e("div", { class: "gotuserver", onClick: w }, [
                    e(
                      "img",
                      { src: a(G)("login", "iconservr-r") },
                      null,
                      8,
                      lo,
                    ),
                    B(n(a(t)("contactServicer")), 1),
                  ]),
                  e("div", ro, [
                    B(n(a(t)("wrongemail")), 1),
                    io,
                    B(n(a(t)("rpwdEmailPopupTip")), 1),
                  ]),
                  e("div", uo, [
                    e(
                      "button",
                      {
                        class: "dialogBtn",
                        onClick: r[3] || (r[3] = (f) => $("update:show", !1)),
                      },
                      n(a(t)("cancel")),
                      1,
                    ),
                    e(
                      "button",
                      { class: "dialogBtn", onClick: u },
                      n(a(t)("confirm")),
                      1,
                    ),
                  ]),
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
const po = W(co, [["__scopeId", "data-v-17c29f89"]]),
  vo = { class: "emailcontainer" },
  mo = { class: "emailinput__container" },
  _o = { class: "emailinput__container-label" },
  ho = ["src"],
  go = { class: "emailinput__container-input" },
  fo = ["placeholder"],
  wo = O({
    __name: "EmailInput",
    props: { type: {}, email: {} },
    emits: ["update:show-validate", "changeN"],
    setup(p, { expose: $, emit: c }) {
      const t = p,
        i = ee(),
        s = V({
          get() {
            return t.email;
          },
          set(v) {
            c("changeN", v);
          },
        });
      function o(v) {
        const y = v.target,
          u = /[\u4e00-\u9fa5]/g;
        (y.value = y.value.replace(u, "")),
          y.value.length > 0 && c("update:show-validate", !1);
      }
      const h = d();
      function l() {
        J(() => {
          h.value.focus();
        });
      }
      return (
        $({ getFocus: l }),
        (v, y) => (
          b(),
          C("div", vo, [
            e("div", mo, [
              e("div", _o, [
                e(
                  "img",
                  {
                    src: a(G)("login/newlogin", "emailnumber"),
                    class: "emailinput__container-label__icon",
                  },
                  null,
                  8,
                  ho,
                ),
                e(
                  "span",
                  null,
                  n(
                    a(i).isOpenExternalAccount
                      ? `${v.$t("otherlogin")} ${v.$t("login")}`
                      : v.$t("email"),
                  ),
                  1,
                ),
              ]),
              e("div", go, [
                E(
                  e(
                    "input",
                    {
                      type: "text",
                      name: "userEmail",
                      maxlength: "250",
                      "onUpdate:modelValue":
                        y[0] || (y[0] = (u) => (s.value = u)),
                      placeholder: v.$t("inputemail"),
                      onInput: o,
                      ref_key: "email",
                      ref: h,
                    },
                    null,
                    40,
                    fo,
                  ),
                  [[ce, s.value]],
                ),
              ]),
            ]),
          ])
        )
      );
    },
  });
const yo = W(wo, [["__scopeId", "data-v-26ed8ca7"]]),
  Se = (p) => (de("data-v-93300cf3"), (p = p()), pe(), p),
  bo = { class: "signIn__container" },
  ko = { class: "signIn__container-button" },
  $o = { class: "signIn_footer" },
  So = Se(() => e("div", { class: "forgetbg" }, null, -1)),
  Co = { class: "font24" },
  Io = Se(() => e("div", { class: "custombg" }, null, -1)),
  To = { class: "font24" },
  Fo = { class: "idlockTip" },
  Po = Se(() => e("br", null, null, -1)),
  xo = ["src"],
  Ro = O({
    __name: "EmailSignIn",
    setup(p) {
      const $ = Q(),
        { t: c } = oe(),
        t = d(10),
        { setLoading: i } = Ve(),
        s = ee(),
        o = d(!1),
        h = d(!1),
        l = d(),
        v = d("login");
      async function y() {
        if (
          (Be() && (await new Promise((_) => setTimeout(_, 500))),
          !(!s.userForm.email || s.userForm.email.toString().trim() === ""))
        ) {
          if (!s.isOpenExternalAccount && !we.email1.test(s.userForm.email))
            return M({ message: c(Ge.email), wordBreak: "break-word" });
          if (
            !s.userForm.password ||
            s.userForm.password.toString().trim() === ""
          )
            return M({ message: c("registerTip2"), wordBreak: "break-word" });
          s.userForm.remember && s.userForm.password.toString().trim() !== ""
            ? localStorage.setItem("remember", s.userForm.password)
            : localStorage.setItem("remember", ""),
            s.isOpenCaptcha
              ? q()
              : (i(!0),
                await s
                  .signIn(s.userForm)
                  .then((_) => {})
                  .catch((_) => {
                    var T;
                    _.code === 1 &&
                      (t.value =
                        ((T = _.data) == null
                          ? void 0
                          : T.passwordErrorMaxNum) || 10),
                      _.msgCode === 33 ? (h.value = !0) : te(_.msgCode || 0);
                  })
                  .finally(() => {
                    g.value.setShowHiden(!1), i(!1);
                  }));
        }
      }
      const u = () => {
        $.push({ name: "register" });
      };
      function w() {
        $.push({ name: "rpwd" }), s.setCurrentView("ResetPassword");
      }
      function S() {
        $.push({ name: "CustomerService" });
      }
      const r = (_) => {
          s.getUserForm.email = _;
        },
        g = d(),
        f = d(""),
        L = () => {
          (o.value = !1), $.push({ name: "CustomerService" });
        };
      Fe(window, "keydown", (_) => {
        _.key == "Enter" && y();
      });
      const x = (_) => {
          (s.userForm.vCode = _), y();
        },
        k = () => {
          (h.value = !1), (s.userForm.vCode = "");
        };
      re(async () => {
        var T;
        const _ = s.getUserForm;
        localStorage.getItem("remember") != null &&
        ((T = localStorage.getItem("remember")) == null
          ? void 0
          : T.toString().trim()) != ""
          ? (_.password = localStorage.getItem("remember"))
          : (_.password = ""),
          s.setUserForm({ ..._ });
      });
      let P = ye(
        () => s.userForm.number,
        (_) => {
          s.setCountDown(0);
        },
        { flush: "post" },
      );
      const R = async (_) => {
          J(async () => {
            g.value.startRequestVerify(),
              i(!0),
              s
                .signIn(
                  Object.assign(s.userForm, { captchaId: f.value, track: _ }),
                )
                .then((T) => {
                  s.userForm.vCode = "";
                })
                .catch((T) => {
                  te(T.msgCode || 0);
                })
                .finally(() => {
                  g.value.setShowHiden(!1), i(!1);
                });
          });
        },
        q = () => {
          J(async () => {
            g.value.startRequestGenerate();
            const _ = await ne(Ne());
            _
              ? ((f.value = _.data.captchaId),
                g.value.endRequestGenerate(
                  _.data.backgroundImage,
                  _.data.sliderImage,
                ))
              : g.value.endRequestGenerate(null, null);
          });
        },
        te = (_) => {
          _ == 122 && (o.value = !0);
        };
      return (
        Pe(() => {
          P(), s.getUserForm.remember || (s.getUserForm.password = "");
        }),
        (_, T) => {
          const ie = A("van-checkbox");
          return (
            b(),
            C("div", bo, [
              F(
                yo,
                {
                  ref_key: "email",
                  ref: l,
                  type: v.value,
                  email: a(s).userForm.email,
                  onChangeN: r,
                },
                null,
                8,
                ["type", "email"],
              ),
              F(
                le,
                {
                  value: a(s).userForm.password,
                  "onUpdate:value":
                    T[0] || (T[0] = (H) => (a(s).userForm.password = H)),
                  label: _.$t("password"),
                  maxlength: 32,
                },
                null,
                8,
                ["value", "label"],
              ),
              e("div", null, [
                F(
                  ie,
                  {
                    modelValue: a(s).userForm.rememberpwd,
                    "onUpdate:modelValue":
                      T[1] || (T[1] = (H) => (a(s).userForm.rememberpwd = H)),
                    "checked-color": "#2b3270",
                  },
                  { default: z(() => [B(n(_.$t("rememberPSW")), 1)]), _: 1 },
                  8,
                  ["modelValue"],
                ),
              ]),
              e("div", ko, [
                e(
                  "button",
                  {
                    class: D([a(s).userForm.email != "" ? "active" : ""]),
                    onClick: y,
                  },
                  n(_.$t("login")),
                  3,
                ),
                e(
                  "button",
                  { class: "register", onClick: u },
                  n(_.$t("register")),
                  1,
                ),
              ]),
              e("div", $o, [
                a(s).isOpenForgetPasswordSMSState ||
                a(s).isOpenForgetPasswordEmailState
                  ? (b(),
                    C("div", { key: 0, class: "forgetcon", onClick: w }, [
                      So,
                      e("div", Co, n(_.$t("forgetPSW")), 1),
                    ]))
                  : X("", !0),
                e("div", { class: "customcon", onClick: S }, [
                  Io,
                  e("div", To, n(_.$t("customerServiceTitle")), 1),
                ]),
              ]),
              F(
                De,
                {
                  ref_key: "captchaRef",
                  ref: g,
                  "refresh-color": "#FFFFFF",
                  "show-refresh": !0,
                  text: a(c)("slideCaptchaText"),
                  onFinish: R,
                  onRefresh: q,
                },
                null,
                8,
                ["text"],
              ),
              a(s).isOpenForgetPasswordEmailState && o.value
                ? (b(),
                  se(
                    po,
                    {
                      key: 0,
                      show: o.value,
                      "onUpdate:show": T[2] || (T[2] = (H) => (o.value = H)),
                      email: a(s).getUserForm.email,
                      passwordErrorMaxNum: t.value,
                    },
                    null,
                    8,
                    ["show", "email", "passwordErrorMaxNum"],
                  ))
                : (b(),
                  se(
                    Ee,
                    {
                      key: 1,
                      show: o.value,
                      "onUpdate:show": T[4] || (T[4] = (H) => (o.value = H)),
                      "show-cancel-btn": !0,
                      title: _.$t("idlockTitle"),
                    },
                    {
                      content: z(() => [
                        e("div", Fo, [
                          B(n(_.$t("idlockTip1", [t.value])) + " ", 1),
                          Po,
                          B(n(_.$t("idlockTip2")), 1),
                        ]),
                      ]),
                      footer: z(() => [
                        e(
                          "button",
                          {
                            class: "dialogBtn",
                            onClick: T[3] || (T[3] = (H) => (o.value = !1)),
                          },
                          n(_.$t("cancel")),
                          1,
                        ),
                        e("button", { class: "dialogBtn", onClick: L }, [
                          e(
                            "img",
                            { src: a(G)("login", "iconservr") },
                            null,
                            8,
                            xo,
                          ),
                          B(" " + n(_.$t("contactServicer")), 1),
                        ]),
                      ]),
                      _: 1,
                    },
                    8,
                    ["show", "title"],
                  )),
              F(
                Ue,
                { showPopup: h.value, onOnConfirm: x, onOnBack: k },
                null,
                8,
                ["showPopup"],
              ),
            ])
          );
        }
      );
    },
  });
const Vo = W(Ro, [["__scopeId", "data-v-93300cf3"]]),
  Eo = { class: "login__container-heading" },
  Bo = { class: "login__container-heading__title" },
  No = { class: "login__container-heading__subTitle" },
  Uo = { class: "login_container-tab" },
  Do = { class: "login__container-form" },
  Mo = O({
    __name: "index",
    setup(p) {
      const { t: $ } = ge.global,
        c = Q(),
        t = ee();
      t.getRegisterState();
      const i = d("mobile"),
        s = d(void 0);
      t.userForm.logintype = i.value;
      const { openAll: o } = ot();
      function h() {
        c.replace("/");
      }
      const l = (v) => {
        (i.value = v),
          (t.userForm.logintype = v),
          (t.userForm.password = ""),
          t.remember(!0);
      };
      return (
        Ke((v, y, u) => {
          u(), v.name === "home" && o();
        }),
        re(() => {
          t.remember(!0), t.getIp();
        }),
        (v, y) => {
          const u = A("NavBar");
          return (
            b(),
            C(
              "div",
              {
                class: "login__container",
                ref_key: "loginContainerRef",
                ref: s,
              },
              [
                F(
                  u,
                  { onClickLeft: h, leftArrow: !0, headLogo: !0 },
                  { right: z(() => [F(je)]), _: 1 },
                ),
                e("div", Eo, [
                  e("h1", Bo, n(a($)("login")), 1),
                  e("div", No, [
                    e("div", null, n(v.$t("pleaseloginphoneoremail")), 1),
                    e("div", null, n(v.$t("forgetyourpassword")), 1),
                  ]),
                ]),
                e("div", Uo, [
                  e(
                    "div",
                    {
                      class: D(["tab", [i.value == "mobile" ? "active" : ""]]),
                      onClick: y[0] || (y[0] = (w) => l("mobile")),
                    },
                    [
                      e(
                        "div",
                        {
                          class: D([
                            "phonebg",
                            [i.value == "mobile" ? "phoneactive" : ""],
                          ]),
                        },
                        null,
                        2,
                      ),
                      e(
                        "div",
                        {
                          class: D([
                            "font30",
                            [i.value == "mobile" ? "phonefont30active" : ""],
                          ]),
                        },
                        n(v.$t("mobilelogin")),
                        3,
                      ),
                    ],
                    2,
                  ),
                  e(
                    "div",
                    {
                      class: D(["tab", [i.value == "email" ? "active" : ""]]),
                      onClick: y[1] || (y[1] = (w) => l("email")),
                    },
                    [
                      e(
                        "div",
                        {
                          class: D([
                            "emialbg",
                            [
                              i.value == "email" ? "emailactive" : "",
                              a(t).isOpenExternalAccount && "other",
                            ],
                          ]),
                        },
                        null,
                        2,
                      ),
                      e(
                        "div",
                        {
                          class: D([
                            "font30",
                            [i.value == "email" ? "emailfont30active" : ""],
                          ]),
                        },
                        n(
                          a(t).isOpenExternalAccount
                            ? v.$t("otherlogin")
                            : v.$t("emaillogin"),
                        ),
                        3,
                      ),
                    ],
                    2,
                  ),
                ]),
                e("div", Do, [
                  e(
                    "div",
                    {
                      class: D([
                        "tab-content",
                        [i.value == "mobile" ? "activecontent" : ""],
                      ]),
                    },
                    [F(Ls, { ref: "signIn" }, null, 512)],
                    2,
                  ),
                  e(
                    "div",
                    {
                      class: D([
                        "tab-content",
                        [i.value == "email" ? "activecontent" : ""],
                      ]),
                    },
                    [F(Vo, { ref: "signIn" }, null, 512)],
                    2,
                  ),
                ]),
              ],
              512,
            )
          );
        }
      );
    },
  });
const Lo = W(Mo, [["__scopeId", "data-v-6af826a4"]]),
  zo = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Lo },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
export {
  yo as E,
  le as P,
  De as S,
  es as V,
  Ue as a,
  Zs as b,
  Fs as c,
  zo as i,
};
