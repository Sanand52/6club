import {
  g as x,
  _ as V,
  G as $e,
  a as ct,
  A as W,
  bi as Dt,
  bj as Nt,
  R as Je,
  aU as ut,
  b as Ot,
  aV as Rt,
  C as D,
  bk as Pt,
  b2 as _t,
  u as Ie,
  D as Ue,
  bl as Ft,
  bm as Gt,
  bn as ft,
  z as pt,
  L as Ze,
  bo as Ut,
  aW as Se,
  aX as ue,
  bp as Vt,
  bq as Et,
  br as zt,
  b6 as jt,
  b7 as Zt,
  aS as vt,
  bs as Ht,
  aY as qt,
  bt as Wt,
  bu as Xt,
  bv as Yt,
  S as He,
  bw as Kt,
  k as ht,
  bx as ze,
  V as mt,
  by as Qt,
  T as tt,
  bz as at,
  bA as gt,
  b9 as yt,
  bg as $t,
  ba as Ct,
  bb as Ae,
  bh as bt,
  bB as Jt,
  bC as ea,
  bD as ta,
  bE as aa,
  bF as na,
  bG as nt,
  bH as oa,
  bI as sa,
  Z as la,
  bJ as ia,
  bK as it,
  bL as ra,
  bM as da,
  bN as wt,
  bO as ca,
  bP as ua,
  bQ as _a,
  bR as je,
  bS as fa,
  v as pa,
  bT as va,
  bU as kt,
  bV as ha,
  bW as ma,
  bX as ga,
  bY as ya,
  bZ as $a,
  b_ as Ca,
  b$ as ba,
  c0 as wa,
  c1 as ka,
  c2 as Sa,
  c3 as xa,
  c4 as Ba,
  c5 as Aa,
  c6 as La,
  c7 as Ta,
  c8 as Ia,
  c9 as Ma,
  ca as Da,
  B as Ke,
  aP as Na,
  cb as Oa,
} from "./page-activity-6d456111.js";
import {
  X as E,
  G as oe,
  F as he,
  a2 as M,
  a3 as ee,
  Z as i,
  a6 as C,
  a7 as P,
  D as a,
  Y as o,
  _ as e,
  ac as Re,
  a0 as t,
  aa as A,
  af as ge,
  ag as ye,
  K as X,
  r as y,
  w as re,
  al as J,
  a9 as H,
  ao as Ve,
  a1 as Z,
  a4 as N,
  a5 as z,
  a8 as j,
  k as _e,
  T as Ra,
  ae as de,
  E as pe,
  C as qe,
  B as Pe,
  m as Ge,
  x as Pa,
  J as xe,
  ar as Fe,
  M as St,
  P as Fa,
  aU as Ga,
  ak as Ua,
  am as ot,
  aV as Va,
  ai as Ea,
} from "./modules-aa8ffe67.js";
import {
  u as za,
  w as rt,
  K as ja,
  F as Za,
  b as Ha,
  c as qa,
  D as xt,
  v as Ne,
  a as Oe,
} from "./page-home-67e89e9a.js";
import {
  V as et,
  a as Bt,
  E as Wa,
  b as Xa,
  P as Qe,
  c as Ya,
} from "./page-login-f45d2d32.js";
const At = (b) => (ge("data-v-ee1fb8c2"), (b = b()), ye(), b),
  Ka = { class: "info-dialog" },
  Qa = { class: "info-dialog-header" },
  Ja = At(() => e("span", { class: "info-dialog-header-left" }, null, -1)),
  en = At(() => e("span", { class: "info-dialog-header-right" }, null, -1)),
  tn = { class: "info-dialog-content" },
  an = { class: "info-dialog-footer" },
  nn = E({
    __name: "DiaLogOther",
    props: {
      show: { type: Boolean, default: !1 },
      title: { type: String, default: "" },
      confirmText: { type: String, default: "" },
      showCancelBtn: { type: Boolean, default: !1 },
      cancelText: { type: String, default: "" },
    },
    emits: ["update:show", "confirm", "cancel", "beforeClose"],
    setup(b, { emit: n }) {
      const f = b,
        { t: _ } = oe();
      _("confirm"), _("cancel");
      const h = he({
        get() {
          return f.show || !1;
        },
        set(u) {
          n("update:show", u);
        },
      });
      function s() {}
      return (u, l) => {
        const m = M("van-dialog"),
          g = ee("lazy");
        return (
          o(),
          i("div", Ka, [
            C(
              m,
              {
                show: h.value,
                "onUpdate:show": l[1] || (l[1] = (c) => (h.value = c)),
                onCancel:
                  l[2] ||
                  (l[2] = () => {
                    n("cancel");
                  }),
                onConfirm:
                  l[3] ||
                  (l[3] = () => {
                    n("confirm");
                  }),
                "cancel-button-text": b.cancelText || a(_)("cancel"),
                "confirm-button-text": b.confirmText || a(_)("confirm"),
                "show-cancel-button": b.showCancelBtn,
                "before-close": s,
              },
              {
                default: P(() => [
                  e("div", null, [
                    e("div", Qa, [
                      Ja,
                      Re(
                        u.$slots,
                        "header",
                        {},
                        () => [e("h5", null, t(b.title), 1)],
                        !0,
                      ),
                      en,
                    ]),
                    e("div", tn, [
                      Re(
                        u.$slots,
                        "content",
                        {},
                        () => [e("div", null, t(u.$t("contentsHere")), 1)],
                        !0,
                      ),
                    ]),
                    e("div", an, [
                      Re(
                        u.$slots,
                        "footer",
                        {},
                        () => [
                          A(
                            e(
                              "img",
                              {
                                onClick:
                                  l[0] ||
                                  (l[0] = () => {
                                    n("update:show", !1);
                                  }),
                              },
                              null,
                              512,
                            ),
                            [[g, a(x)("main", "close")]],
                          ),
                        ],
                        !0,
                      ),
                    ]),
                  ]),
                ]),
                _: 3,
              },
              8,
              [
                "show",
                "cancel-button-text",
                "confirm-button-text",
                "show-cancel-button",
              ],
            ),
          ])
        );
      };
    },
  });
const Lt = V(nn, [["__scopeId", "data-v-ee1fb8c2"]]),
  Le = (b) => (ge("data-v-1a6a6d29"), (b = b()), ye(), b),
  on = { class: "userInfo__container-content" },
  sn = { class: "userInfo__container-content-wrapper" },
  ln = ["src"],
  rn = { class: "userInfo__container-content__name" },
  dn = { class: "userInfo__container-content-nickname" },
  cn = ["src"],
  un = { class: "userInfo__container-content-uid" },
  _n = Le(() => e("span", null, "UID", -1)),
  fn = Le(() => e("span", null, "|", -1)),
  pn = ["src"],
  vn = { class: "userInfo__container-content-logintime" },
  hn = { class: "userInfo__container-content-logintime" },
  mn = Le(() => e("span", null, " ", -1)),
  gn = [mn],
  yn = { class: "userInfo__container-setting-center" },
  $n = { class: "userInfo__container-content__avatar" },
  Cn = ["data-img"],
  bn = { class: "userInfo__container-setting-center-content" },
  wn = Le(() => e("h5", null, "UID", -1)),
  kn = ["src"],
  Sn = { class: "info-dialog-content-title" },
  xn = ["placeholder"],
  Bn = { class: "info-dialog" },
  An = { class: "info-dialog-header" },
  Ln = Le(() => e("span", { class: "info-dialog-header-left" }, null, -1)),
  Tn = Le(() => e("span", { class: "info-dialog-header-right" }, null, -1)),
  In = Le(() =>
    e(
      "div",
      { class: "info-dialog-content" },
      [e("div", { class: "info-dialog-content-avatar-list" }, [e("div")])],
      -1,
    ),
  ),
  Mn = { class: "info-dialog-footer" },
  Dn = E({
    __name: "index",
    props: { userInfo: {} },
    setup(b) {
      const n = b,
        f = $e(),
        _ = f.getUserInfo,
        { setLoading: h } = ct(),
        s = X(),
        u = y(!1),
        l = y(!1),
        m = y(!1);
      function g(T) {
        u.value = T;
      }
      function c(T) {
        s.push({ name: "Avatar" });
      }
      re(() => {
        s.currentRoute.value.name === "SettingCenter"
          ? (m.value = !0)
          : ((m.value = !1), v());
      });
      const d = y(!1),
        r = y();
      async function v() {
        h(!0);
        const T = await W(Dt());
        T && (r.value = T.data), h(!1);
      }
      async function $() {
        if (n.userInfo.nickName.trim() === "")
          return (d.value = !0), (u.value = !0), !1;
        if (n.userInfo.nickName.trim().length > 12)
          return (d.value = !0), (u.value = !0), !1;
        (d.value = !1),
          (u.value = !1),
          (await W(Nt({ nikeName: n.userInfo.nickName }))) &&
            f.setUserInfo({ ...n.userInfo });
      }
      function S() {
        s.go(-1);
      }
      function B() {}
      const I = (T, w) => {
          T = x("images", "avatar1");
          let O = document.querySelector(`.${w}`);
          O.src = T;
        },
        F = y(x("main/Avatar", n.userInfo.userPhoto));
      return (T, w) => {
        var Y, K;
        const O = M("NavBar"),
          L = M("van-icon"),
          te = M("van-dialog"),
          ae = ee("lazy");
        return (
          o(),
          i(
            "div",
            {
              class: H([
                "userInfo__container",
                { "setting-page-container": m.value },
              ]),
            },
            [
              A(
                C(
                  O,
                  {
                    title: T.$t("settingCenter"),
                    placeholder: !1,
                    backgroundColor:
                      "linear-gradient(90deg, #2b3270 0%, #D9AD82 100%)",
                    "left-arrow": "",
                    onClickLeft: S,
                  },
                  null,
                  8,
                  ["title", "backgroundColor"],
                ),
                [[J, m.value]],
              ),
              A(
                e(
                  "div",
                  on,
                  [
                    e("div", sn, [
                      e(
                        "div",
                        {
                          class: "userInfo__container-content__avatar",
                          onClick: w[1] || (w[1] = (G) => c()),
                        },
                        [
                          e(
                            "img",
                            {
                              src: F.value,
                              class: "userAvatar",
                              onError:
                                w[0] ||
                                (w[0] = (G) => I(F.value, "userAvatar")),
                            },
                            null,
                            40,
                            ln,
                          ),
                        ],
                      ),
                      e("div", rn, [
                        e("div", dn, [
                          e(
                            "h3",
                            null,
                            t(
                              (Y = a(_).nickName) == null
                                ? void 0
                                : Y.toUpperCase(),
                            ),
                            1,
                          ),
                          e(
                            "div",
                            {
                              class: H([
                                "n" +
                                  ((K = r.value) == null ? void 0 : K.vipLevel),
                              ]),
                            },
                            null,
                            2,
                          ),
                          A(
                            e(
                              "img",
                              {
                                class: "editPencil",
                                onClick: w[2] || (w[2] = (G) => g(!0)),
                                src: a(x)("main", "editPencil"),
                              },
                              null,
                              8,
                              cn,
                            ),
                            [[J, m.value]],
                          ),
                        ]),
                        e("div", un, [
                          _n,
                          fn,
                          e("span", null, t(a(_).userId), 1),
                          e(
                            "img",
                            {
                              onClick:
                                w[3] ||
                                (w[3] = (G) => a(Je)(a(_).userId.toString())),
                              src: a(x)("main", "copy"),
                            },
                            null,
                            8,
                            pn,
                          ),
                        ]),
                        A(
                          e(
                            "div",
                            vn,
                            [
                              e(
                                "span",
                                null,
                                t(T.$t("lastLoginTime")) + " ",
                                1,
                              ),
                              A(e("span", null, t(a(_).userLoginDate), 513), [
                                [J, a(_).userLoginDate],
                              ]),
                            ],
                            512,
                          ),
                          [[J, !m.value]],
                        ),
                        A(e("div", hn, gn, 512), [[J, m.value]]),
                      ]),
                    ]),
                    A(
                      e(
                        "div",
                        {
                          class: "userInfo__container-content-right",
                          onClick: w[4] || (w[4] = (G) => c()),
                        },
                        [e("h5", null, t(T.$t("changeAvatar")), 1)],
                        512,
                      ),
                      [[J, m.value]],
                    ),
                  ],
                  512,
                ),
                [[J, !m.value]],
              ),
              A(
                e(
                  "div",
                  yn,
                  [
                    e(
                      "div",
                      {
                        class: "userInfo__container-setting-center-header",
                        onClick: w[6] || (w[6] = (G) => c()),
                      },
                      [
                        e("div", $n, [
                          A(
                            e(
                              "img",
                              { "data-img": a(x)("images", "avatar1") },
                              null,
                              8,
                              Cn,
                            ),
                            [[ae, F.value]],
                          ),
                        ]),
                        e(
                          "div",
                          {
                            class:
                              "userInfo__container-setting-center-header-edit",
                            onClick: w[5] || (w[5] = (G) => c()),
                          },
                          [
                            e("span", null, t(T.$t("changeAvatar")), 1),
                            C(L, { name: "arrow", color: "#888" }),
                          ],
                        ),
                      ],
                    ),
                    e(
                      "div",
                      {
                        class:
                          "userInfo__container-setting-center-content ar-1px-b",
                        onClick: w[9] || (w[9] = (G) => g(!0)),
                      },
                      [
                        e("h5", null, t(T.$t("nickName")), 1),
                        e("div", { onClick: w[8] || (w[8] = (G) => g(!0)) }, [
                          e("span", null, t(a(_).nickName), 1),
                          C(L, {
                            name: "arrow",
                            color: "#888",
                            onClick: w[7] || (w[7] = (G) => g(!0)),
                          }),
                        ]),
                      ],
                    ),
                    e("div", bn, [
                      wn,
                      e("div", null, [
                        e("span", null, t(a(_).userId), 1),
                        e(
                          "img",
                          {
                            onClick:
                              w[10] ||
                              (w[10] = (G) => a(Je)(a(_).userId.toString())),
                            src: a(x)("main", "copyIcon"),
                          },
                          null,
                          8,
                          kn,
                        ),
                      ]),
                    ]),
                  ],
                  512,
                ),
                [[J, m.value]],
              ),
              C(
                Lt,
                {
                  show: u.value,
                  "onUpdate:show": w[12] || (w[12] = (G) => (u.value = G)),
                  onConfirm: $,
                  title: T.$t("editNickname"),
                },
                {
                  content: P(() => [
                    e("div", Sn, [
                      A(e("img", null, null, 512), [
                        [ae, a(x)("main", "dialogNickname")],
                      ]),
                      e("span", null, t(T.$t("nickName")), 1),
                    ]),
                    A(
                      e(
                        "input",
                        {
                          type: "text",
                          "auto-complete": "new-password",
                          autocomplete: "off",
                          name: "username",
                          "onUpdate:modelValue":
                            w[11] || (w[11] = (G) => (a(_).nickName = G)),
                          placeholder: T.$t("tipEnterNickname"),
                        },
                        null,
                        8,
                        xn,
                      ),
                      [[Ve, a(_).nickName]],
                    ),
                    A(
                      e(
                        "h4",
                        null,
                        t(T.$t("tipDoNotEnterUnvalideNickname")),
                        513,
                      ),
                      [[J, d.value]],
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["show", "title"],
              ),
              e("div", Bn, [
                C(
                  te,
                  {
                    show: l.value,
                    "onUpdate:show": w[14] || (w[14] = (G) => (l.value = G)),
                    onConfirm: w[15] || (w[15] = (G) => void 0),
                  },
                  {
                    default: P(() => [
                      e("div", null, [
                        e("div", An, [
                          Ln,
                          e("h5", null, t(T.$t("changeAvatar")), 1),
                          Tn,
                        ]),
                        In,
                        e("div", Mn, [
                          A(
                            e(
                              "img",
                              { onClick: w[13] || (w[13] = (G) => c(!1)) },
                              null,
                              512,
                            ),
                            [[ae, a(x)("main", "close")]],
                          ),
                        ]),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ["show"],
                ),
              ]),
            ],
            2,
          )
        );
      };
    },
  });
const Tt = V(Dn, [["__scopeId", "data-v-1a6a6d29"]]),
  Nn = (b) => (ge("data-v-af1a6eff"), (b = b()), ye(), b),
  On = { class: "totalSavings__container" },
  Rn = { class: "totalSavings__container-header" },
  Pn = { class: "totalSavings__container-header-box ar-1px-b" },
  Fn = { class: "totalSavings__container-header__title" },
  Gn = { class: "totalSavings__container-header__subtitle" },
  Un = ["src"],
  Vn = { class: "totalSavings__container-content" },
  En = ["src"],
  zn = ["src"],
  jn = ["src"],
  Zn = ["src"],
  Hn = { alt: "" },
  qn = Nn(() => e("span", null, "VIP", -1)),
  Wn = E({
    __name: "index",
    props: { userInfo: {} },
    setup(b) {
      const n = X(),
        f = ut(),
        { t: _ } = oe(),
        { goWallet: h, isArWalletActive: s, goActive: u, getInfo: l } = Ot(),
        { store: m } = Rt(),
        g = (v) => {
          n.push({ name: v });
        },
        c = async () => {
          if (m.isARPay) await l();
          else return;
          s.value ? h("main") : u("main");
        },
        d = he(() => f.getAmount);
      async function r() {
        f.resetData(!1, !0);
      }
      return (v, $) => {
        const S = ee("throttle-click"),
          B = ee("lazy");
        return (
          o(),
          i("div", On, [
            e("div", Rn, [
              e("div", Pn, [
                e("div", Fn, [e("span", null, t(a(_)("totalBalance")), 1)]),
                e("p", Gn, [
                  e("span", null, t(a(D)(d.value)), 1),
                  A(e("img", { src: a(x)("main", "refresh") }, null, 8, Un), [
                    [S, { handler: r, wait: 500 }],
                  ]),
                ]),
              ]),
            ]),
            e("div", Vn, [
              a(m).isARPay
                ? (o(),
                  i(
                    "div",
                    {
                      key: 0,
                      onClick: c,
                      class: "totalSavings__container-content-item",
                    },
                    [
                      e("div", null, [
                        e(
                          "img",
                          { src: a(x)("main", "wallets"), alt: "" },
                          null,
                          8,
                          En,
                        ),
                        e("span", null, "AR" + t(a(_)("wallet")), 1),
                      ]),
                    ],
                  ))
                : (o(),
                  i(
                    "div",
                    {
                      key: 1,
                      onClick: $[0] || ($[0] = (I) => g("wallet")),
                      class: "totalSavings__container-content-item",
                    },
                    [
                      e("div", null, [
                        e(
                          "img",
                          { src: a(x)("main", "wallet"), alt: "" },
                          null,
                          8,
                          zn,
                        ),
                        e("span", null, t(a(_)("wallet")), 1),
                      ]),
                    ],
                  )),
              e(
                "div",
                {
                  onClick: $[1] || ($[1] = (I) => g("Recharge")),
                  class: "totalSavings__container-content-item",
                },
                [
                  e("div", null, [
                    e(
                      "img",
                      { src: a(x)("main", "rechargeIcon"), alt: "" },
                      null,
                      8,
                      jn,
                    ),
                    e("span", null, t(a(_)("recharge")), 1),
                  ]),
                ],
              ),
              e(
                "div",
                {
                  onClick: $[2] || ($[2] = (I) => g("Withdraw")),
                  class: "totalSavings__container-content-item",
                },
                [
                  e("div", null, [
                    e(
                      "img",
                      { src: a(x)("main", "widthdrawBlue"), alt: "" },
                      null,
                      8,
                      Zn,
                    ),
                    e("span", null, t(a(_)("withdraw")), 1),
                  ]),
                ],
              ),
              e(
                "div",
                {
                  onClick: $[3] || ($[3] = (I) => g("vip")),
                  class: "totalSavings__container-content-item",
                },
                [
                  e("div", null, [
                    A(e("img", Hn, null, 512), [[B, a(x)("main", "VipIcon")]]),
                    qn,
                  ]),
                ],
              ),
            ]),
          ])
        );
      };
    },
  });
const Xn = V(Wn, [["__scopeId", "data-v-af1a6eff"]]),
  Yn = { class: "financialServices__container" },
  Kn = { class: "financialServices__container-footer" },
  Qn = ["src"],
  Jn = { class: "financialServices__container-footer-des" },
  eo = ["src"],
  to = { class: "financialServices__container-footer-des" },
  ao = ["src"],
  no = { class: "financialServices__container-box" },
  oo = ["src"],
  so = { class: "financialServices__container-box-para" },
  lo = ["src"],
  io = { class: "financialServices__container-box-para" },
  ro = ["src"],
  co = { class: "financialServices__container-box-para" },
  uo = ["src"],
  _o = { class: "financialServices__container-box-para" },
  fo = E({
    __name: "index",
    props: { userInfo: {} },
    setup(b) {
      const n = _t(),
        _ = $e().getUserInfo,
        h = X(),
        s = y(0),
        u = y(0),
        l = y(0),
        m = y("0"),
        g = (d) => {
          d === "RechargeHistory" && n.emit("changeKeepAliveKey"),
            h.push({ name: d });
        };
      return (
        (() => {
          Pt().then((d) => {
            (m.value = d.state),
              (s.value = d.dayShareRate),
              (u.value = d.shareTime),
              (l.value = d.safeAmount);
          });
        })(),
        (d, r) => {
          const v = M("van-icon");
          return (
            o(),
            i("div", Yn, [
              e("div", Kn, [
                m.value == "1"
                  ? (o(),
                    i(
                      "div",
                      {
                        key: 0,
                        onClick: r[0] || (r[0] = ($) => g("StrongBox")),
                      },
                      [
                        e(
                          "img",
                          { src: a(x)("main", "vault"), alt: "" },
                          null,
                          8,
                          Qn,
                        ),
                        e("div", null, [
                          e("div", null, [
                            e("span", null, t(d.$t("vault")), 1),
                            e("div", Jn, [
                              e("h4", null, t(a(D)(l.value)), 1),
                              C(v, { name: "arrow" }),
                            ]),
                          ]),
                          e(
                            "span",
                            null,
                            t(d.$t("dailyRateReturn", [s.value, u.value])),
                            1,
                          ),
                        ]),
                      ],
                    ))
                  : Z("", !0),
                a(_).isOpenPointMall == 1
                  ? (o(),
                    i(
                      "div",
                      {
                        key: 1,
                        onClick: r[1] || (r[1] = ($) => g("PointMall")),
                      },
                      [
                        e(
                          "img",
                          { src: a(x)("main", "pointsSmallIncon"), alt: "" },
                          null,
                          8,
                          eo,
                        ),
                        e("div", null, [
                          e("div", null, [
                            e("span", null, t(d.$t("points")), 1),
                            e("div", to, [
                              e(
                                "img",
                                {
                                  src: a(x)("main", "pointsSmallIncon"),
                                  alt: "",
                                },
                                null,
                                8,
                                ao,
                              ),
                              e("h4", null, t(a(D)(a(_).integral, " ")), 1),
                              C(v, { name: "arrow" }),
                            ]),
                          ]),
                          e("span", null, t(d.$t("vaultdesc2")), 1),
                        ]),
                      ],
                    ))
                  : Z("", !0),
              ]),
              e("div", no, [
                e("div", { onClick: r[2] || (r[2] = ($) => g("BetRecords")) }, [
                  e("img", { src: a(x)("main", "betHistory") }, null, 8, oo),
                  e("div", so, [
                    e("h3", null, t(d.$t("bet")), 1),
                    e("span", null, t(d.$t("mybetRecords")), 1),
                  ]),
                ]),
                e(
                  "div",
                  { onClick: r[3] || (r[3] = ($) => g("TransAction")) },
                  [
                    e(
                      "img",
                      { src: a(x)("main", "tradeHistory") },
                      null,
                      8,
                      lo,
                    ),
                    e("div", io, [
                      e("h3", null, t(d.$t("trade")), 1),
                      e("span", null, t(d.$t("tradeRecords")), 1),
                    ]),
                  ],
                ),
                e(
                  "div",
                  { onClick: r[4] || (r[4] = ($) => g("RechargeHistory")) },
                  [
                    e(
                      "img",
                      { src: a(x)("main", "rechargeHistory") },
                      null,
                      8,
                      ro,
                    ),
                    e("div", co, [
                      e("h3", null, t(d.$t("recharge")), 1),
                      e("span", null, t(d.$t("myRchargeHistory")), 1),
                    ]),
                  ],
                ),
                e(
                  "div",
                  { onClick: r[5] || (r[5] = ($) => g("WithdrawHistory")) },
                  [
                    e(
                      "img",
                      { src: a(x)("main", "myWithdrawHistory") },
                      null,
                      8,
                      uo,
                    ),
                    e("div", _o, [
                      e("h3", null, t(d.$t("withdraw")), 1),
                      e("span", null, t(d.$t("myWithdrawHistory")), 1),
                    ]),
                  ],
                ),
              ]),
            ])
          );
        }
      );
    },
  });
const po = V(fo, [["__scopeId", "data-v-ef3a74b8"]]),
  vo = { class: "serviceCenter-wrap" },
  ho = { class: "serviceCenter__container" },
  mo = { class: "serviceCenter__container-items" },
  go = ["onClick"],
  yo = { class: "serviceCenter-wrap-header" },
  $o = E({
    __name: "index",
    setup(b) {
      const { t: n } = oe(),
        f = X(),
        _ = $e(),
        h = ut(),
        s = Ie(),
        u = [
          { icon: "settingCenter", title: n("setting"), link: "SettingCenter" },
          { icon: "withdrawHistory", title: n("feedback"), link: "Feedback" },
          {
            icon: "notificationCenter",
            title: n("noti"),
            link: "Notification",
          },
          {
            icon: "serviceCenter",
            title: n("wholeTimeService"),
            link: "CustomerService",
          },
          { icon: "guide", title: n("guide"), link: "Guide" },
          { icon: "about", title: n("about"), link: "About" },
        ],
        l = y(!1);
      function m(d) {
        f.push({ name: d });
      }
      function g() {
        l.value = !0;
      }
      function c() {
        Ft({})
          .then(async (d) => {
            (_.token = ""),
              (l.value = !1),
              h.setTimestampLast(0),
              (s.userForm.vCode = ""),
              s.loginout();
          })
          .catch((d) => {
            _e({ message: d.msg, wordBreak: "break-word" });
          })
          .finally(() => {
            localStorage.setItem("isToLogin", "1"),
              $e().setToken(""),
              f.push({ name: "login" });
          });
      }
      return (d, r) => {
        const v = ee("lazy");
        return (
          o(),
          i("div", vo, [
            e("div", ho, [
              e("h1", null, t(d.$t("serviceCenter")), 1),
              e("div", mo, [
                (o(),
                i(
                  N,
                  null,
                  z(u, ($) =>
                    e(
                      "div",
                      {
                        key: $.title,
                        onClick: (S) => m($.link),
                        class: "serviceCenter__container-items__item",
                      },
                      [
                        A(e("img", null, null, 512), [
                          [v, a(x)("main", `${$.icon}`)],
                        ]),
                        e("span", null, t($.title), 1),
                      ],
                      8,
                      go,
                    ),
                  ),
                  64,
                )),
              ]),
            ]),
            e("div", yo, [
              e("button", { onClick: g }, [
                A(e("img", null, null, 512), [[v, a(x)("main", "logout")]]),
                j(" " + t(d.$t("logout")), 1),
              ]),
            ]),
            C(
              Ue,
              {
                show: l.value,
                "onUpdate:show": r[0] || (r[0] = ($) => (l.value = $)),
                onConfirm: c,
                confirmText: a(n)("confirm"),
                cancelText: a(n)("cancel"),
                "show-cancel-btn": !0,
                title: d.$t("tipLogout1"),
              },
              null,
              8,
              ["show", "confirmText", "cancelText", "title"],
            ),
          ])
        );
      };
    },
  });
const Co = V($o, [["__scopeId", "data-v-4b3f95a3"]]),
  bo = { class: "settingPanel__container" },
  wo = { class: "settingPanel__container-items" },
  ko = ["onClick"],
  So = { class: "settingPanel__container-items__title" },
  xo = ["src"],
  Bo = { class: "settingPanel__container-items-right" },
  Ao = E({
    __name: "index",
    setup(b) {
      const { t: n } = oe(),
        f = X(),
        _ = $e(),
        h = he(() => _.userInfo);
      let s = Ra("permission", null);
      s && (s = JSON.parse(s.value));
      const u = he(() => h.value.isOpenChampion),
        l = y([
          {
            icon: "notifyIcon",
            title: n("notifications"),
            link: "Messages",
            isopen: "1",
          },
          {
            icon: "giftIcon",
            title: n("giftExchange"),
            link: "RedeemGift",
            isopen: "1",
          },
          { icon: "cps", title: n("cpsTip6"), link: "MyCps", isopen: u },
          {
            icon: "orderIcon",
            title: n("productOrder"),
            link: "PointMall-MyOrders",
            isopen: h.value.isOpenPointMall,
          },
          {
            icon: "mylottery",
            title: n("MyLottery"),
            link: "PointMall-MyLottery",
            isopen: h.value.isOpenPointMall,
          },
          {
            icon: "statsIcon",
            title: n("gameStatistics"),
            link: "GameStats",
            isopen: "1",
            haspermission: 17,
          },
          {
            icon: "languageIcon",
            title: n("switchLanguages"),
            link: "Language",
            isopen: "1",
          },
        ]);
      function m(g) {
        f.push({ name: g.link });
      }
      return (g, c) => {
        const d = M("van-icon"),
          r = ee("haspermission");
        return (
          o(),
          i("div", bo, [
            e("div", wo, [
              (o(!0),
              i(
                N,
                null,
                z(l.value, (v) => {
                  var $, S;
                  return A(
                    (o(),
                    i(
                      "div",
                      {
                        key: v.title,
                        onClick: (B) => m(v),
                        class: "settingPanel__container-items__item ar-1px-b",
                      },
                      [
                        e("div", So, [
                          e(
                            "img",
                            { src: a(x)("main", `${v.icon}`) },
                            null,
                            8,
                            xo,
                          ),
                          e("span", null, t(v.title), 1),
                        ]),
                        e("div", Bo, [
                          A(
                            e(
                              "h5",
                              null,
                              t(($ = h.value) == null ? void 0 : $.unRead),
                              513,
                            ),
                            [
                              [
                                J,
                                v.icon === "notifyIcon" &&
                                  ((S = h.value) == null ? void 0 : S.unRead) >
                                    0,
                              ],
                            ],
                          ),
                          A(e("span", null, t(a(_).getLanguageName), 513), [
                            [J, v.icon === "languageIcon"],
                          ]),
                          C(d, { name: "arrow", color: "#333333" }),
                        ]),
                      ],
                      8,
                      ko,
                    )),
                    [
                      [J, v.isopen == "1"],
                      [r, v.haspermission],
                    ],
                  );
                }),
                128,
              )),
            ]),
          ])
        );
      };
    },
  });
const Lo = V(Ao, [["__scopeId", "data-v-2f682a1b"]]),
  To = { class: "userinfo-content" },
  Io = E({
    __name: "index",
    setup(b) {
      const n = _t(),
        f = $e();
      Ie().getUserInfo({ signature: f.token });
      const h = f.getUserInfo;
      return (
        localStorage.getItem("needUpd") === "1" &&
          (localStorage.setItem("isReload", "1"),
          localStorage.setItem("needUpd", "2"),
          n.emit("keyChange")),
        (u, l) => (
          o(),
          i(
            N,
            null,
            [
              C(Tt, { userInfo: a(h) }, null, 8, ["userInfo"]),
              e("div", To, [
                C(Xn, { userInfo: a(h) }, null, 8, ["userInfo"]),
                C(po, { userInfo: a(h) }, null, 8, ["userInfo"]),
                C(Lo),
                C(Co),
              ]),
            ],
            64,
          )
        )
      );
    },
  });
const Mo = V(Io, [["__scopeId", "data-v-ffbf54ec"]]),
  k3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Mo },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Do = { class: "about-container" },
  No = { class: "about-container-header" },
  Oo = { class: "about-container-header-belly" },
  Ro = { alt: "" },
  Po = { class: "about-container-content" },
  Fo = { class: "about-container-content-item-title" },
  Go = { alt: "" },
  Uo = { class: "about-container-content-item-title" },
  Vo = { alt: "" },
  Eo = E({
    __name: "index",
    setup(b) {
      const n = X();
      function f(_) {
        n.push({ name: "About-AboutDetail", state: { paramValue: _ } });
      }
      return (_, h) => {
        const s = M("NavBar"),
          u = M("van-icon"),
          l = ee("lazy");
        return (
          o(),
          i("div", Do, [
            e("div", No, [
              C(
                s,
                {
                  title: `${_.$t("aboutTitle")}`,
                  backgroundColor:
                    "linear-gradient(90deg, #2b3270 0%, #D9AD82 100%)",
                  "left-arrow": "",
                  onClickLeft: h[0] || (h[0] = (m) => a(n).go(-1)),
                },
                null,
                8,
                ["title"],
              ),
              e("div", Oo, [
                A(e("img", Ro, null, 512), [[l, a(x)("main", "aboutBg")]]),
              ]),
            ]),
            e("div", Po, [
              e(
                "div",
                {
                  class: "about-container-content-item ar-1px-b",
                  onClick: h[1] || (h[1] = (m) => f("Protocols")),
                },
                [
                  e("div", Fo, [
                    A(e("img", Go, null, 512), [
                      [l, a(x)("main", "privacyIcon")],
                    ]),
                    e("span", null, t(_.$t("pravicyProtocal")), 1),
                  ]),
                  C(u, { name: "arrow", size: "18px", color: "#666" }),
                ],
              ),
              e(
                "div",
                {
                  class: "about-container-content-item ar-1px-b",
                  onClick: h[2] || (h[2] = (m) => f("Agreement")),
                },
                [
                  e("div", Uo, [
                    A(e("img", Vo, null, 512), [
                      [l, a(x)("main", "riskProtocal")],
                    ]),
                    e("span", null, t(_.$t("riskProtocal")), 1),
                  ]),
                  C(u, { name: "arrow", size: "18px", color: "#666" }),
                ],
              ),
            ]),
          ])
        );
      };
    },
  });
const zo = V(Eo, [["__scopeId", "data-v-acc780bb"]]),
  S3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: zo },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  jo = { class: "avatar-container" },
  Zo = { class: "avatar-container-content" },
  Ho = ["src"],
  dt = !0,
  qo = E({
    __name: "index",
    setup(b) {
      const { t: n } = oe(),
        f = $e(),
        _ = f.getUserInfo,
        h = X(),
        s = y(_.userPhoto);
      async function u(l) {
        if (((s.value = (l + 1).toString()), l < 0))
          return _e({ message: n("tipSelectPls") }), !1;
        (await W(Gt({ userPhoto: (l + 1).toString() }))) &&
          ((_.userPhoto = (l + 1).toString()),
          f.setUserInfo({ ..._ }),
          h.go(-1));
      }
      return (l, m) => {
        const g = M("NavBar"),
          c = M("van-checkbox"),
          d = M("van-grid-item"),
          r = M("van-grid");
        return (
          o(),
          i("div", jo, [
            C(
              g,
              {
                title: l.$t("changeAvatar"),
                "left-arrow": "",
                onClickLeft: m[0] || (m[0] = (v) => a(h).go(-1)),
              },
              null,
              8,
              ["title"],
            ),
            e("div", Zo, [
              C(
                r,
                { border: !1, "column-num": 3, gutter: 10 },
                {
                  default: P(() => [
                    (o(),
                    i(
                      N,
                      null,
                      z(20, (v, $) =>
                        C(
                          d,
                          { onClick: (S) => u($) },
                          {
                            default: P(() => [
                              e(
                                "img",
                                {
                                  class: H(
                                    s.value === ($ + 1).toString()
                                      ? "active"
                                      : "",
                                  ),
                                  src: a(x)("main/Avatar", `${$ + 1}`),
                                },
                                null,
                                10,
                                Ho,
                              ),
                              A(
                                e(
                                  "div",
                                  null,
                                  [
                                    C(c, {
                                      modelValue: dt,
                                      "onUpdate:modelValue":
                                        m[1] || (m[1] = (S) => (dt = S)),
                                      "checked-color": "#896646",
                                      "icon-size": "20px",
                                    }),
                                  ],
                                  512,
                                ),
                                [[J, s.value === ($ + 1).toString()]],
                              ),
                            ]),
                            _: 2,
                          },
                          1032,
                          ["onClick"],
                        ),
                      ),
                      64,
                    )),
                  ]),
                  _: 1,
                },
              ),
            ]),
          ])
        );
      };
    },
  });
const Wo = V(qo, [["__scopeId", "data-v-3c96d256"]]),
  x3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Wo },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Xo = { class: "list" },
  Yo = ["onClick"],
  Ko = { key: 0 },
  Qo = { class: "img" },
  Jo = { key: 1 },
  es = { class: "img" },
  ts = E({
    __name: "SelectList",
    props: {
      showPopup: { type: Boolean, default: y(!1) },
      list: { type: Array, default: () => [] },
      tabId: { type: Number, default: 0 },
      selectId: { type: Number, default: 0 },
    },
    emits: ["update:showPopup", "onClick", "onBack"],
    setup(b, { emit: n }) {
      const f = b,
        _ = he({
          get() {
            return f.showPopup || !1;
          },
          set(u) {
            n("update:showPopup", u);
          },
        }),
        h = (u, l) => {
          n("onClick", u, l);
        },
        s = () => {
          n("onBack");
        };
      return (u, l) => {
        const m = M("van-popup"),
          g = ee("lazy");
        return (
          o(),
          de(
            m,
            {
              show: _.value,
              "onUpdate:show": l[0] || (l[0] = (c) => (_.value = c)),
              round: "",
              position: "bottom",
              onClickOverlay: s,
            },
            {
              default: P(() => [
                e("div", Xo, [
                  (o(!0),
                  i(
                    N,
                    null,
                    z(
                      b.list,
                      (c, d) => (
                        o(),
                        i(
                          "div",
                          {
                            class: H(d == b.selectId ? "item active" : "item"),
                            key: d,
                            onClick: (r) => h(c, d),
                          },
                          [
                            b.tabId === 0
                              ? (o(),
                                i("div", Ko, [
                                  A(e("img", Qo, null, 512), [[g, c.img]]),
                                  j(t(c.key), 1),
                                ]))
                              : (o(),
                                i("div", Jo, [
                                  A(e("img", es, null, 512), [
                                    [
                                      g,
                                      a(x)(
                                        d == b.selectId
                                          ? "main/BetRecord/acitve"
                                          : "main/BetRecord",
                                        c.value,
                                      ),
                                    ],
                                  ]),
                                  j(" " + t(c.key), 1),
                                ])),
                          ],
                          10,
                          Yo,
                        )
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
          )
        );
      };
    },
  });
const as = V(ts, [["__scopeId", "data-v-e818a122"]]),
  ns = { class: "bet-container-lottery-card" },
  os = { class: "bet-container-lottery-card-header ar-1px-b" },
  ss = ["src"],
  ls = { key: 0 },
  is = { key: 1 },
  rs = { key: 0 },
  ds = ["src"],
  cs = { class: "bet" },
  us = { class: "li betNum" },
  _s = { class: "lab" },
  fs = { key: 0, class: "txt" },
  ps = { key: 1, class: "txt" },
  vs = { key: 2, class: "txt" },
  hs = { key: 3, class: "betList select" },
  ms = { key: 4, class: "betList select" },
  gs = { class: "bet-container-lottery-note-box" },
  ys = { class: "bet-container-lottery-note-box-para" },
  $s = { class: "bet-container-lottery-note-box-para" },
  Cs = { class: "last" },
  bs = { class: "bet-container-lottery-note-box-para" },
  ws = E({
    __name: "XoSoRecord",
    props: {
      listData: { default: { type: Array, default: () => [] } },
      typeValue: { default: { type: Number, default: 0 } },
    },
    setup(b) {
      const { t: n } = oe(),
        f = y({
          1: n("bettingResultState1"),
          2: n("bettingResultState3"),
          3: n("hasWon"),
          4: n("xosoTxt74"),
          5: n("xosoTxt75"),
          6: n("xosoTxt76"),
        }),
        _ = (c) => {
          let d = "";
          switch (c) {
            case 1:
              d = "WIN GO";
              break;
            case 13:
              d = "TRX Hash";
              break;
            case 5:
              d = "5D Lotre";
              break;
            case 9:
              d = "K3 Lotre";
              break;
            default:
              d = c.toString();
          }
          return d;
        },
        h = (c) => {
          if (c == "3") return "color40C592";
        };
      JSON.parse(localStorage.getItem("gameCategoryList"));
      const s = (c) => {
          const d = u(c);
          return l(d);
        },
        u = (c) => {
          let d = [];
          if (c.includes(",")) {
            let r = c.split(","),
              v = {};
            for (let $ = 0; r.length > $; $++) (v = r[$].split("|")), d.push(v);
            return d;
          }
          return c;
        },
        l = (c) => {
          let d = c[0],
            r = c[1],
            v = [];
          for (let S = 0; d.length > S; S++)
            for (let B = 0; r.length > B; B++) v.push(d[S] + r[B]);
          let $ = c.slice(2);
          return $.length > 0 ? l([v, ...$]) : v;
        },
        m = (c) => {
          if (c != null) {
            let d = c.split(",");
            if (d.length > 0) return d;
          }
          return [];
        },
        g = (c) => c.replace(/\|/g, ",");
      return (c, d) => (
        o(!0),
        i(
          N,
          null,
          z(
            c.listData,
            (r) => (
              o(),
              i(
                "div",
                { class: "bet-container-lottery-items", key: r.orderNumber },
                [
                  e("div", ns, [
                    e("div", os, [
                      e("h1", null, [
                        e("h2", null, t(_(c.typeValue)), 1),
                        e(
                          "span",
                          { class: H(h(r.status)) },
                          t(f.value[r.status]),
                          3,
                        ),
                      ]),
                      e("p", null, t(r.createTime), 1),
                    ]),
                    e(
                      "div",
                      {
                        class: H([
                          "bet-container-lottery-card-info",
                          `type${c.typeValue}`,
                        ]),
                      },
                      [
                        e(
                          "img",
                          {
                            src: a(x)("main", "zs"),
                            class: H(`type${c.typeValue}`),
                          },
                          null,
                          10,
                          ss,
                        ),
                        e("ul", null, [
                          e("li", null, [
                            e("h2", null, t(a(n)("type")), 1),
                            e(
                              "span",
                              null,
                              t(a(n)("code" + r.bettingTypeNameCode)),
                              1,
                            ),
                          ]),
                          e("li", null, [
                            e("h2", null, t(a(n)("betNumber")), 1),
                            e("span", null, t(r.issueNo), 1),
                          ]),
                          e("li", null, [
                            e("h2", null, t(a(n)("area")), 1),
                            c.typeValue == "XOSO"
                              ? (o(),
                                i(
                                  "span",
                                  ls,
                                  t(a(n)("code" + r.areNameCode)),
                                  1,
                                ))
                              : c.typeValue == "FXOSO"
                                ? (o(),
                                  i(
                                    "span",
                                    is,
                                    t(a(n)("code" + r.typeCode)),
                                    1,
                                  ))
                                : Z("", !0),
                          ]),
                          c.typeValue == "XOSO"
                            ? (o(),
                              i("li", rs, [
                                e("h2", null, t(a(n)("city")), 1),
                                e(
                                  "span",
                                  null,
                                  t(a(n)("code" + r.nameCode)),
                                  1,
                                ),
                              ]))
                            : Z("", !0),
                          e("li", null, [
                            e("h2", null, t(a(n)("orderNo")), 1),
                            e("span", null, t(r.orderNo), 1),
                          ]),
                          e("li", null, [
                            e("h2", null, t(a(n)("betAmount")), 1),
                            e("span", null, t(a(D)(r.amount)), 1),
                          ]),
                        ]),
                      ],
                      2,
                    ),
                  ]),
                  e("img", { src: a(x)("main", "moonBar") }, null, 8, ds),
                  e("div", cs, [
                    e("div", us, [
                      e("div", _s, [
                        j(t(a(n)("bettingnumber")), 1),
                        r.bettingFormat === 1
                          ? (o(),
                            i("span", fs, "(" + t(a(n)("selectNo")) + ")", 1))
                          : Z("", !0),
                        r.bettingFormat === 2
                          ? (o(),
                            i("span", ps, "(" + t(a(n)("xosoTxt80")) + ")", 1))
                          : Z("", !0),
                        r.bettingFormat === 3
                          ? (o(),
                            i("span", vs, "(" + t(a(n)("xosoTxt81")) + ")", 1))
                          : Z("", !0),
                        r.bettingFormat == 1
                          ? (o(),
                            i("div", hs, [
                              (o(!0),
                              i(
                                N,
                                null,
                                z(
                                  s(r.bettingContent),
                                  (v, $) => (
                                    o(),
                                    i(
                                      "span",
                                      {
                                        class: H({
                                          active: m(r.winningNum).includes(v),
                                        }),
                                        key: $,
                                      },
                                      t(v),
                                      3,
                                    )
                                  ),
                                ),
                                128,
                              )),
                            ]))
                          : (o(),
                            i("div", ms, [
                              (o(!0),
                              i(
                                N,
                                null,
                                z(
                                  r.bettingContent.split(","),
                                  (v, $) => (
                                    o(),
                                    i(
                                      "span",
                                      {
                                        class: H({
                                          active: m(r.winningNum).includes(v),
                                        }),
                                        key: $,
                                      },
                                      t(g(v)),
                                      3,
                                    )
                                  ),
                                ),
                                128,
                              )),
                            ])),
                      ]),
                    ]),
                  ]),
                  e("div", gs, [
                    e("div", null, [
                      e("div", ys, [
                        e("h3", null, t(a(D)(r.realBettingAmount)), 1),
                        e("span", null, t(a(n)("actualAmount")), 1),
                      ]),
                    ]),
                    e("div", null, [
                      e("div", $s, [
                        e("h3", null, t(a(D)(r.winningAmount)), 1),
                        e("span", null, t(a(n)("lotteryAmount")), 1),
                      ]),
                    ]),
                    e("div", Cs, [
                      e("div", bs, [
                        e(
                          "h4",
                          {
                            class: H(
                              r.winningAmount - r.amount > 0 && r.status !== 2
                                ? "h4_green"
                                : "h4_red",
                            ),
                          },
                          t(
                            r.status === 3 || r.status === 2
                              ? a(D)(r.winningAmount - r.amount)
                              : "-",
                          ),
                          3,
                        ),
                        e("span", null, t(a(n)("profitNloss")), 1),
                      ]),
                    ]),
                  ]),
                ],
              )
            ),
          ),
          128,
        )
      );
    },
  });
const ks = V(ws, [["__scopeId", "data-v-6f492001"]]),
  Ss = { class: "bet-container-lottery-card" },
  xs = { class: "bet-container-lottery-card-header ar-1px-b" },
  Bs = ["src"],
  As = { class: "type" },
  Ls = ["src"],
  Ts = { class: "bet" },
  Is = { class: "li betNum" },
  Ms = { class: "lab" },
  Ds = { key: 0, class: "txt" },
  Ns = { key: 1, class: "txt" },
  Os = { key: 2, class: "betList select" },
  Rs = { key: 3, class: "betList select" },
  Ps = { class: "num" },
  Fs = { class: "n" },
  Gs = { class: "bet-container-lottery-note-box" },
  Us = { class: "bet-container-lottery-note-box-para" },
  Vs = { class: "bet-container-lottery-note-box-para" },
  Es = { class: "last" },
  zs = { class: "bet-container-lottery-note-box-para" },
  js = E({
    __name: "D4Record",
    props: {
      listData: { default: { type: Array, default: () => [] } },
      typeValue: { default: { type: Number, default: 0 } },
    },
    setup(b) {
      const { t: n } = oe(),
        f = {
          1: n("bettingResultState1"),
          2: n("bettingResultState3"),
          3: n("hasWon"),
          4: n("xosoTxt74"),
          5: n("xosoTxt75"),
          6: n("xosoTxt76"),
        },
        _ = {
          0: n("xosoTxt90"),
          1: n("xosoTxt89"),
          2: n("xosoTxt88"),
          3: n("xosoTxt87"),
        },
        h = (s) => {
          if (s == "3") return "color40C592";
        };
      return (s, u) => (
        o(!0),
        i(
          N,
          null,
          z(
            s.listData,
            (l) => (
              o(),
              i(
                "div",
                { class: "bet-container-lottery-items", key: l.orderNumber },
                [
                  e("div", Ss, [
                    e("div", xs, [
                      e("h1", null, [
                        e("h2", null, t(s.typeValue), 1),
                        e("span", { class: H(h(l.state)) }, t(f[l.state]), 3),
                      ]),
                      e("p", null, t(l.createTime), 1),
                    ]),
                    e(
                      "div",
                      {
                        class: H([
                          "bet-container-lottery-card-info",
                          `type${s.typeValue}`,
                        ]),
                      },
                      [
                        e(
                          "img",
                          {
                            src: a(x)("main", "betInfoStep"),
                            class: H(`type${s.typeValue}`),
                          },
                          null,
                          10,
                          Bs,
                        ),
                        e("ul", null, [
                          e("li", null, [
                            e("h2", null, t(a(n)("betNumber")), 1),
                            e("span", null, t(l.issueNumber), 1),
                          ]),
                          e("li", null, [
                            e("h2", null, t(a(n)("orderNo")), 1),
                            e("span", null, t(l.orderNumber), 1),
                          ]),
                          e("li", null, [
                            e("h2", null, t(a(n)("ColorSpecies")), 1),
                            e("span", null, t(a(n)(`d4LType${l.type}`)), 1),
                          ]),
                          e("li", null, [
                            e("h2", null, t(a(n)("gamePlay")), 1),
                            e(
                              "span",
                              null,
                              t(a(n)("d4gamePay" + l.gameType)),
                              1,
                            ),
                          ]),
                          e("li", null, [
                            e("h2", null, t(a(n)("xosoTxt78")), 1),
                          ]),
                          e("div", As, [
                            (o(!0),
                            i(
                              N,
                              null,
                              z(
                                l.betType.split(","),
                                (m, g) => (
                                  o(),
                                  i(
                                    "span",
                                    { key: g },
                                    t(a(n)("d4gameType" + m)),
                                    1,
                                  )
                                ),
                              ),
                              128,
                            )),
                          ]),
                        ]),
                      ],
                      2,
                    ),
                  ]),
                  e("img", { src: a(x)("main", "moonBar") }, null, 8, Ls),
                  e("div", Ts, [
                    e("div", Is, [
                      e("div", Ms, [
                        j(t(a(n)("bettingnumber")), 1),
                        l.betMethod === 1
                          ? (o(),
                            i("span", Ds, "(" + t(a(n)("EnterBet")) + ")", 1))
                          : Z("", !0),
                        l.betMethod === 2
                          ? (o(),
                            i("span", Ns, "(" + t(a(n)("SelectBet")) + ")", 1))
                          : Z("", !0),
                        l.betMethod == 1
                          ? (o(),
                            i("div", Os, [e("span", null, t(l.betContent), 1)]))
                          : (o(),
                            i("div", Rs, [
                              e("div", Ps, [
                                (o(!0),
                                i(
                                  N,
                                  null,
                                  z(
                                    l.betContent.split("|"),
                                    (m, g) => (
                                      o(),
                                      i("div", { key: g }, [
                                        e("h6", null, t(_[g]), 1),
                                        e("div", Fs, [
                                          (o(!0),
                                          i(
                                            N,
                                            null,
                                            z(
                                              m.split(","),
                                              (c, d) => (
                                                o(),
                                                i("span", { key: d }, t(c), 1)
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
                              ]),
                            ])),
                      ]),
                    ]),
                  ]),
                  e("div", Gs, [
                    e("div", null, [
                      e("div", Us, [
                        e("h3", null, t(a(D)(l.amount)), 1),
                        e("span", null, t(a(n)("actualAmount")), 1),
                      ]),
                    ]),
                    e("div", null, [
                      e("div", Vs, [
                        e("h3", null, t(a(D)(l.winAmount)), 1),
                        e("span", null, t(a(n)("lotteryAmount")), 1),
                      ]),
                    ]),
                    e("div", Es, [
                      e("div", zs, [
                        e(
                          "h4",
                          {
                            class: H(
                              l.profitAmount > 0 ? "h4_green" : "h4_red",
                            ),
                          },
                          t(l.profitAmount ? a(D)(l.profitAmount) : "-"),
                          3,
                        ),
                        e("span", null, t(a(n)("profitNloss")), 1),
                      ]),
                    ]),
                  ]),
                ],
              )
            ),
          ),
          128,
        )
      );
    },
  });
const Zs = V(js, [["__scopeId", "data-v-76027499"]]),
  Hs = { style: { "background-color": "#fff" } },
  qs = ["src"],
  Ws = { class: "bet-container-searchBar" },
  Xs = { class: "ar-searchbar" },
  Ys = { class: "bet-content__box" },
  Ks = { key: 0, class: "bet-container-items" },
  Qs = { class: "bet-container-lottery" },
  Js = { class: "bet-container-lottery-card" },
  el = { class: "bet-container-lottery-card-header ar-1px-b" },
  tl = { class: "bet-container-lottery-card-info" },
  al = ["src"],
  nl = { key: 0 },
  ol = { key: 1 },
  sl = { key: 2 },
  ll = { key: 3 },
  il = { key: 1, style: { overflow: "inherit" } },
  rl = { class: "binguo_select" },
  dl = { key: 4 },
  cl = ["src"],
  ul = { class: "bet-container-lottery-note" },
  _l = { class: "bet-container-lottery-note-result" },
  fl = ["src"],
  pl = { key: 0 },
  vl = { key: 0 },
  hl = { key: 1 },
  ml = { key: 1 },
  gl = { class: "binguo_result" },
  yl = { class: "result_item" },
  $l = { class: "binguo_sum" },
  Cl = { key: 2 },
  bl = { key: 0 },
  wl = { key: 1 },
  kl = { key: 2 },
  Sl = { class: "bet-container-lottery-note-box" },
  xl = { class: "bet-container-lottery-note-box-para" },
  Bl = { class: "bet-container-lottery-note-box-para" },
  Al = { key: 0 },
  Ll = { key: 1 },
  Tl = { class: "bet-container-lottery-note-box-para" },
  Il = { key: 0, class: "bet-container-lottery-note-box-para" },
  Ml = { key: 1, class: "bet-container-lottery-note-box-para" },
  Dl = { key: 1, class: "bet-container-items" },
  Nl = { class: "bet-container-lottery" },
  Ol = { class: "bet-container-lottery-card electric-card" },
  Rl = { class: "bet-container-lottery-card-header ar-1px-b" },
  Pl = { class: "bet-container-lottery-card-info" },
  Fl = ["src"],
  Gl = { key: 0, class: "color2AAB79" },
  Ul = { key: 2, class: "bet-container-items" },
  Vl = { class: "bet-container-lottery" },
  El = { class: "bet-container-lottery-card electric-card" },
  zl = { class: "bet-container-lottery-card-header ar-1px-b" },
  jl = { class: "bet-container-lottery-card-info" },
  Zl = ["src"],
  Hl = { key: 0, class: "color2AAB79" },
  ql = { key: 3, class: "bet-container-items" },
  Wl = { class: "bet-container-lottery" },
  Xl = { class: "bet-container-lottery-card electric-card" },
  Yl = { class: "bet-container-lottery-card-header ar-1px-b" },
  Kl = { class: "bet-container-lottery-card-info" },
  Ql = ["src"],
  Jl = { key: 0, class: "color2AAB79" },
  ei = { key: 4, class: "bet-container-items" },
  ti = { class: "bet-container-lottery" },
  ai = { class: "bet-container-lottery-card electric-card" },
  ni = { class: "bet-container-lottery-card-header ar-1px-b" },
  oi = { class: "bet-container-lottery-card-info" },
  si = ["src"],
  li = { key: 0, class: "color2AAB79" },
  ii = { key: 5, class: "bet-container-items" },
  ri = { class: "bet-container-lottery" },
  di = { class: "bet-container-lottery-card electric-card" },
  ci = { class: "bet-container-lottery-card-header ar-1px-b" },
  ui = { class: "bet-container-lottery-card-info" },
  _i = ["src"],
  fi = { key: 0, class: "color2AAB79" },
  pi = E({
    __name: "index",
    setup(b) {
      const { setLoading: n } = ct(),
        { t: f } = oe(),
        { filterGameType: _ } = za();
      let h = pe([]);
      const s = pe([
          { key: "Win Go", value: 1, img: "" },
          { key: "Trx Win Go", value: 13, img: "" },
          { key: "5D", value: 5, img: "" },
          { key: "K3", value: 9, img: "" },
          { key: "XOSO", value: "XOSO", img: "" },
          { key: "Bingo18", value: "BINGO", img: "" },
          { key: "FXOSO", value: "FXOSO", img: "" },
          { key: "4D", value: "4D", img: "" },
        ]),
        u = y([]),
        l = y(0),
        m = pe([
          { name: f("lottery"), img: "lottery", type: 0, reqType: 0 },
          { name: f("live"), img: "video", type: 1, reqType: 1 },
          { name: f("fishing"), img: "fish", type: 3, reqType: 3 },
          { name: f("chess"), img: "chess", type: 5, reqType: 4 },
          { name: f("miniGame"), img: "flash", type: 6, reqType: 6 },
          { name: f("electric"), img: "slot", type: 2, reqType: 0 },
        ]),
        g = y(null),
        c = y(),
        d = X(),
        r = y({ startDate: "", endDate: "", type: 0, gameType: "1" });
      let v = y([]);
      const $ = y(!0),
        S = y([]),
        B = y({
          red: f("redColor"),
          green: f("green"),
          "red,violet": f("winColor3"),
          "green,violet": f("winColor4"),
          violet: f("purpleColor"),
        });
      function I() {
        d.go(-1);
      }
      const F = (k) => {
          switch (k) {
            case "Big":
              return f("big");
            case "Drawn":
              return f("binguoHe");
            case "Small":
              return f("small");
            default:
              return k;
          }
        },
        T = y(0),
        w = () => {
          (te.value = !1), (T.value = 0);
        };
      qe(
        () => l.value,
        async () => {
          T.value = 0;
          let k = m[l.value].type;
          if (k === r.value.type) return !1;
          if (((r.value.type = k), n(!0), k !== 0)) {
            if ((await q(m[l.value].reqType), u.value.length < 1)) {
              (v.value = []), n(!1);
              return;
            }
            u.value.unshift({ key: f("all"), value: -1 }),
              (h = u.value),
              (L.value = u.value[0]),
              (r.value.gameType = u.value[0].key),
              r.value.gameType == f("all") && (r.value.gameType = "-1");
          } else (h = s), me(), (L.value = s[0]);
          await c.value.resetRefresh(), n(!1);
        },
      );
      const L = y(s[0]),
        te = y(!1),
        ae = (k, R) => {
          switch (
            ((T.value = R), (te.value = !1), (L.value = k), L.value.value)
          ) {
            case 1:
              S.value = rt;
              break;
            case 13:
              S.value = Ha;
              break;
            case 5:
              S.value = Za;
              break;
            case 9:
              S.value = ja;
              break;
          }
          l.value == 0 || R == 0
            ? (r.value.gameType = L.value.value.toString())
            : (r.value.gameType = L.value.key),
            c.value.resetRefresh();
        },
        { value: Y } = ft(),
        K = y(""),
        G = y(Y),
        { minDate: U, maxDate: ce } = pt(0),
        ie = y(!1),
        se = () => {
          ie.value = !1;
        },
        le = ({ selectedOptions: k }) => {
          ie.value = !1;
          const [{ value: R }, { value: fe }, { value: be }] = k;
          let Be = R + "-" + fe + "-" + be;
          (r.value.startDate = Ge(Be)
            .startOf("day")
            .format("YYYY-MM-DD HH:mm:ss")),
            (r.value.endDate = Ge(Be)
              .endOf("day")
              .format("YYYY-MM-DD HH:mm:ss")),
            (K.value = Et(R, fe, be)),
            c.value.resetRefresh();
        },
        Q = () => {},
        q = async (k) => {
          const R = await W(zt({ categoryType: k }));
          R &&
            Pa(() => {
              u.value = R.data.map((fe) => ({
                key: fe.slotsName,
                value: fe.slotsTypeID,
              }));
            });
        },
        me = async () => {
          const k = await W(Ut());
          if (k) {
            const R = k.data;
            ne(R);
          }
        };
      me();
      const ne = (k) => {
          h = s
            .map((fe) => {
              const be = k.find((Be) => Be.categoryCode === fe.key);
              return be
                ? { value: fe.value, key: be.categoryCode, img: be.categoryImg }
                : null;
            })
            .filter((fe) => fe !== null);
        },
        Te = (k) => {
          var R;
          return S.value.length === 0
            ? ""
            : (R = S.value.find((fe) => fe.typeID === k)) == null
              ? void 0
              : R.typeName.replace("<br />", " ");
        },
        Xe = (k) => k.match(/[0-9]+|[A-Za-z]+/g);
      return (
        (S.value = rt),
        (k, R) => {
          const fe = M("NavBar"),
            be = M("van-tab"),
            Be = M("van-tabs"),
            Me = M("ArSelect"),
            Ye = M("van-date-picker"),
            Ee = M("van-popup");
          return (
            o(),
            i(
              "div",
              { class: "bet-container", ref_key: "containerRef", ref: g },
              [
                C(
                  fe,
                  {
                    title: k.$t("betrecords"),
                    "left-arrow": "",
                    onClickLeft: I,
                  },
                  null,
                  8,
                  ["title"],
                ),
                e("div", Hs, [
                  C(
                    Be,
                    {
                      class: "onlineGames__container-tabBar",
                      active: l.value,
                      "onUpdate:active": R[0] || (R[0] = (p) => (l.value = p)),
                      type: "card",
                      color: "transparent",
                      background: "transparent",
                      ref: "tabsRef",
                      "swipe-threshold": 3,
                    },
                    {
                      default: P(() => [
                        (o(!0),
                        i(
                          N,
                          null,
                          z(
                            m,
                            (p, we) => (
                              o(),
                              de(
                                be,
                                { key: we },
                                {
                                  title: P(() => [
                                    e(
                                      "div",
                                      {
                                        class: H([
                                          "tab_item",
                                          { tab_active: we === l.value },
                                        ]),
                                      },
                                      [
                                        e(
                                          "img",
                                          {
                                            src: a(x)(
                                              "home/AllGames",
                                              `${we === l.value ? p.img + "Active" : p.img}`,
                                            ),
                                          },
                                          null,
                                          8,
                                          qs,
                                        ),
                                        e("span", null, t(p.name), 1),
                                      ],
                                      2,
                                    ),
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
                    8,
                    ["active"],
                  ),
                  e("div", Ws, [
                    e("div", Xs, [
                      C(
                        Me,
                        {
                          onClickSelect:
                            R[1] || (R[1] = (p) => (te.value = !0)),
                          selectName: L.value.key,
                        },
                        null,
                        8,
                        ["selectName"],
                      ),
                      C(
                        Me,
                        {
                          onClickSelect:
                            R[2] || (R[2] = (p) => (ie.value = !0)),
                          selectName: K.value || k.$t("datePick"),
                        },
                        null,
                        8,
                        ["selectName"],
                      ),
                    ]),
                  ]),
                  e("div", null, [
                    C(
                      Ee,
                      {
                        show: ie.value,
                        "onUpdate:show": R[4] || (R[4] = (p) => (ie.value = p)),
                        round: "",
                        position: "bottom",
                      },
                      {
                        default: P(() => [
                          C(
                            Ye,
                            {
                              modelValue: G.value,
                              "onUpdate:modelValue":
                                R[3] || (R[3] = (p) => (G.value = p)),
                              title: k.$t("pickDate"),
                              onCancel: se,
                              onConfirm: le,
                              onChange: Q,
                              "min-date": a(U),
                              "max-date": a(ce),
                            },
                            null,
                            8,
                            ["modelValue", "title", "min-date", "max-date"],
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["show"],
                    ),
                  ]),
                ]),
                e("div", Ys, [
                  C(
                    Ze,
                    {
                      list: a(v),
                      "onUpdate:list":
                        R[5] ||
                        (R[5] = (p) => (Pe(v) ? (v.value = p) : (v = p))),
                      distance: 1e3,
                      "page-query": r.value,
                      "onUpdate:pageQuery":
                        R[6] || (R[6] = (p) => (r.value = p)),
                      api: a(Vt),
                      ref_key: "listRef",
                      ref: c,
                      "is-auto-load": $.value,
                    },
                    {
                      content: P(() => [
                        m[l.value].type === 0
                          ? (o(),
                            i("div", Ks, [
                              e("div", Qs, [
                                ["XOSO", "FXOSO"].includes(
                                  L.value.value.toString(),
                                )
                                  ? (o(),
                                    de(
                                      ks,
                                      {
                                        key: 0,
                                        listData: a(v),
                                        typeValue: L.value.value,
                                      },
                                      null,
                                      8,
                                      ["listData", "typeValue"],
                                    ))
                                  : ["4D"].includes(L.value.value.toString())
                                    ? (o(),
                                      de(
                                        Zs,
                                        {
                                          key: 1,
                                          listData: a(v),
                                          typeValue: L.value.value,
                                        },
                                        null,
                                        8,
                                        ["listData", "typeValue"],
                                      ))
                                    : (o(!0),
                                      i(
                                        N,
                                        { key: 2 },
                                        z(a(v), (p) => {
                                          var we;
                                          return (
                                            o(),
                                            i(
                                              "div",
                                              {
                                                class:
                                                  "bet-container-lottery-items",
                                                key: p.orderNumber,
                                              },
                                              [
                                                e("div", Js, [
                                                  e("div", el, [
                                                    e("h1", null, [
                                                      e(
                                                        "h2",
                                                        null,
                                                        t(
                                                          a(Se)(
                                                            s,
                                                            L.value.value,
                                                          ),
                                                        ),
                                                        1,
                                                      ),
                                                      e(
                                                        "span",
                                                        {
                                                          class: H([
                                                            p.state == 1
                                                              ? "color40C592"
                                                              : "colorE98613",
                                                          ]),
                                                        },
                                                        t(
                                                          a(Se)(
                                                            a(ue).bettingResult,
                                                            p.state,
                                                          ),
                                                        ),
                                                        3,
                                                      ),
                                                    ]),
                                                    e(
                                                      "p",
                                                      null,
                                                      t(p.addTime),
                                                      1,
                                                    ),
                                                  ]),
                                                  e("div", tl, [
                                                    e(
                                                      "img",
                                                      {
                                                        src: a(x)(
                                                          "main",
                                                          "betInfoStep",
                                                        ),
                                                      },
                                                      null,
                                                      8,
                                                      al,
                                                    ),
                                                    e("ul", null, [
                                                      r.value.gameType ===
                                                      "BINGO"
                                                        ? (o(),
                                                          i("li", nl, [
                                                            e(
                                                              "h2",
                                                              null,
                                                              t(
                                                                k.$t(
                                                                  "gamePlay",
                                                                ),
                                                              ),
                                                              1,
                                                            ),
                                                            e(
                                                              "span",
                                                              null,
                                                              t(
                                                                a(_)(
                                                                  Number(
                                                                    p.gameType,
                                                                  ),
                                                                  p.selectType,
                                                                ).playerName,
                                                              ),
                                                              1,
                                                            ),
                                                          ]))
                                                        : (o(),
                                                          i("li", ol, [
                                                            e(
                                                              "h2",
                                                              null,
                                                              t(k.$t("type")),
                                                              1,
                                                            ),
                                                            e(
                                                              "span",
                                                              null,
                                                              t(
                                                                Te(p.typeID) ||
                                                                  "",
                                                              ),
                                                              1,
                                                            ),
                                                          ])),
                                                      e("li", null, [
                                                        e(
                                                          "h2",
                                                          null,
                                                          t(k.$t("betNumber")),
                                                          1,
                                                        ),
                                                        e(
                                                          "span",
                                                          null,
                                                          t(p.issueNumber),
                                                          1,
                                                        ),
                                                      ]),
                                                      e("li", null, [
                                                        e(
                                                          "h2",
                                                          null,
                                                          t(k.$t("orderNo")),
                                                          1,
                                                        ),
                                                        e(
                                                          "span",
                                                          null,
                                                          t(p.orderNumber),
                                                          1,
                                                        ),
                                                      ]),
                                                      L.value.value == 1 ||
                                                      L.value.value == 13 ||
                                                      L.value.value == "XOSO"
                                                        ? (o(),
                                                          i("li", sl, [
                                                            e(
                                                              "h2",
                                                              null,
                                                              t(
                                                                k.$t("betPick"),
                                                              ),
                                                              1,
                                                            ),
                                                            e(
                                                              "p",
                                                              null,
                                                              t(
                                                                a(Se)(
                                                                  a(ue)
                                                                    .gameSelectType,
                                                                  p.selectType,
                                                                ),
                                                              ),
                                                              1,
                                                            ),
                                                          ]))
                                                        : r.value.gameType ===
                                                            "BINGO"
                                                          ? (o(),
                                                            i("li", ll, [
                                                              e(
                                                                "h2",
                                                                null,
                                                                t(
                                                                  k.$t(
                                                                    "betPick",
                                                                  ),
                                                                ),
                                                                1,
                                                              ),
                                                              p.gameType === "1"
                                                                ? (o(),
                                                                  i(
                                                                    "div",
                                                                    {
                                                                      key: 0,
                                                                      class: H(
                                                                        a(_)(
                                                                          Number(
                                                                            p.gameType,
                                                                          ),
                                                                          p.selectType,
                                                                        )
                                                                          .className +
                                                                          "_binguo",
                                                                      ),
                                                                    },
                                                                    t(
                                                                      F(
                                                                        p.selectType,
                                                                      ),
                                                                    ),
                                                                    3,
                                                                  ))
                                                                : (o(),
                                                                  i("div", il, [
                                                                    (o(!0),
                                                                    i(
                                                                      N,
                                                                      null,
                                                                      z(
                                                                        p.gameType ===
                                                                          "3"
                                                                          ? 2
                                                                          : p.selectType.split(
                                                                              "",
                                                                            ),
                                                                        (
                                                                          ke,
                                                                        ) => (
                                                                          o(),
                                                                          i(
                                                                            "div",
                                                                            rl,
                                                                            t(
                                                                              p.gameType ===
                                                                                "3"
                                                                                ? p.selectType
                                                                                : ke,
                                                                            ),
                                                                            1,
                                                                          )
                                                                        ),
                                                                      ),
                                                                      256,
                                                                    )),
                                                                  ])),
                                                            ]))
                                                          : (o(),
                                                            i("li", dl, [
                                                              e(
                                                                "h2",
                                                                null,
                                                                t(
                                                                  k.$t(
                                                                    "betPick",
                                                                  ),
                                                                ),
                                                                1,
                                                              ),
                                                              e("div", null, [
                                                                (o(!0),
                                                                i(
                                                                  N,
                                                                  null,
                                                                  z(
                                                                    Xe(
                                                                      p.selectType,
                                                                    ),
                                                                    (
                                                                      ke,
                                                                      De,
                                                                    ) => (
                                                                      o(),
                                                                      i(
                                                                        "div",
                                                                        {
                                                                          key: De,
                                                                        },
                                                                        t(
                                                                          a(Se)(
                                                                            a(
                                                                              ue,
                                                                            )
                                                                              .gameSelectType,
                                                                            ke,
                                                                          ),
                                                                        ),
                                                                        1,
                                                                      )
                                                                    ),
                                                                  ),
                                                                  128,
                                                                )),
                                                              ]),
                                                            ])),
                                                      e("li", null, [
                                                        e(
                                                          "h2",
                                                          null,
                                                          t(k.$t("betAmount")),
                                                          1,
                                                        ),
                                                        e(
                                                          "span",
                                                          null,
                                                          t(a(D)(p.amount)),
                                                          1,
                                                        ),
                                                      ]),
                                                    ]),
                                                  ]),
                                                ]),
                                                e(
                                                  "img",
                                                  {
                                                    src: a(x)(
                                                      "main",
                                                      "moonBar",
                                                    ),
                                                  },
                                                  null,
                                                  8,
                                                  cl,
                                                ),
                                                e("div", ul, [
                                                  e("div", _l, [
                                                    e(
                                                      "img",
                                                      {
                                                        src: a(x)(
                                                          "main",
                                                          "betResultStep",
                                                        ),
                                                      },
                                                      null,
                                                      8,
                                                      fl,
                                                    ),
                                                    L.value.value === 1 ||
                                                    L.value.value == 13
                                                      ? (o(),
                                                        i("div", pl, [
                                                          e(
                                                            "h1",
                                                            null,
                                                            t(
                                                              k.$t("betResult"),
                                                            ),
                                                            1,
                                                          ),
                                                          p.state !== 2
                                                            ? (o(),
                                                              i("h2", vl, [
                                                                e(
                                                                  "p",
                                                                  null,
                                                                  t(p.number),
                                                                  1,
                                                                ),
                                                                e(
                                                                  "span",
                                                                  {
                                                                    class: H(
                                                                      Number(
                                                                        p.number,
                                                                      ) > 4
                                                                        ? "bigClass"
                                                                        : "small",
                                                                    ),
                                                                  },
                                                                  t(
                                                                    Number(
                                                                      p.number,
                                                                    ) > 4
                                                                      ? k.$t(
                                                                          "big",
                                                                        )
                                                                      : k.$t(
                                                                          "small",
                                                                        ),
                                                                  ),
                                                                  3,
                                                                ),
                                                                e(
                                                                  "span",
                                                                  {
                                                                    class: H(
                                                                      (we =
                                                                        p.colour) ==
                                                                        null
                                                                        ? void 0
                                                                        : we
                                                                            .split(
                                                                              ",",
                                                                            )
                                                                            .join(
                                                                              "_",
                                                                            ),
                                                                    ),
                                                                  },
                                                                  t(
                                                                    B.value[
                                                                      p.colour
                                                                    ],
                                                                  ),
                                                                  3,
                                                                ),
                                                              ]))
                                                            : (o(),
                                                              i(
                                                                "h2",
                                                                hl,
                                                                "- -",
                                                              )),
                                                        ]))
                                                      : L.value.value ===
                                                          "BINGO"
                                                        ? (o(),
                                                          i("div", ml, [
                                                            e(
                                                              "h1",
                                                              null,
                                                              t(
                                                                k.$t(
                                                                  "betResult",
                                                                ),
                                                              ),
                                                              1,
                                                            ),
                                                            e("div", gl, [
                                                              (o(!0),
                                                              i(
                                                                N,
                                                                null,
                                                                z(
                                                                  p.premium
                                                                    ? p.premium.split(
                                                                        "",
                                                                      )
                                                                    : [],
                                                                  (ke) => (
                                                                    o(),
                                                                    i(
                                                                      "div",
                                                                      yl,
                                                                      t(ke),
                                                                      1,
                                                                    )
                                                                  ),
                                                                ),
                                                                256,
                                                              )),
                                                              e(
                                                                "div",
                                                                $l,
                                                                t(p.sumCount),
                                                                1,
                                                              ),
                                                            ]),
                                                          ]))
                                                        : (o(),
                                                          i("div", Cl, [
                                                            e(
                                                              "h1",
                                                              null,
                                                              t(
                                                                k.$t(
                                                                  "betResult",
                                                                ),
                                                              ),
                                                              1,
                                                            ),
                                                            p.state !== 2 &&
                                                            L.value.value == 5
                                                              ? (o(),
                                                                i("h2", bl, [
                                                                  (o(!0),
                                                                  i(
                                                                    N,
                                                                    null,
                                                                    z(
                                                                      p.premium,
                                                                      (
                                                                        ke,
                                                                        De,
                                                                      ) => (
                                                                        o(),
                                                                        i(
                                                                          "p",
                                                                          {
                                                                            key: De,
                                                                          },
                                                                          t(ke),
                                                                          1,
                                                                        )
                                                                      ),
                                                                    ),
                                                                    128,
                                                                  )),
                                                                ]))
                                                              : p.state !== 2 &&
                                                                  L.value
                                                                    .value == 9
                                                                ? (o(),
                                                                  i("h2", wl, [
                                                                    (o(!0),
                                                                    i(
                                                                      N,
                                                                      null,
                                                                      z(
                                                                        p.premium,
                                                                        (
                                                                          ke,
                                                                          De,
                                                                        ) => (
                                                                          o(),
                                                                          i(
                                                                            "p",
                                                                            {
                                                                              key: De,
                                                                              class:
                                                                                H(
                                                                                  "n" +
                                                                                    ke,
                                                                                ),
                                                                            },
                                                                            null,
                                                                            2,
                                                                          )
                                                                        ),
                                                                      ),
                                                                      128,
                                                                    )),
                                                                  ]))
                                                                : (o(),
                                                                  i(
                                                                    "h2",
                                                                    kl,
                                                                    "- -",
                                                                  )),
                                                          ])),
                                                  ]),
                                                  e("div", Sl, [
                                                    e("div", null, [
                                                      e("div", xl, [
                                                        e(
                                                          "h3",
                                                          null,
                                                          t(a(D)(p.realAmount)),
                                                          1,
                                                        ),
                                                        e(
                                                          "span",
                                                          null,
                                                          t(
                                                            k.$t(
                                                              "actualAmount",
                                                            ),
                                                          ),
                                                          1,
                                                        ),
                                                      ]),
                                                    ]),
                                                    e("div", null, [
                                                      e("div", Bl, [
                                                        L.value.value ===
                                                        "BINGO"
                                                          ? (o(),
                                                            i(
                                                              "h3",
                                                              Al,
                                                              t(
                                                                a(D)(
                                                                  p.profitAmount <=
                                                                    0
                                                                    ? 0
                                                                    : p.profitAmount,
                                                                ),
                                                              ),
                                                              1,
                                                            ))
                                                          : (o(),
                                                            i(
                                                              "h3",
                                                              Ll,
                                                              t(
                                                                a(D)(
                                                                  p.winAmount,
                                                                ),
                                                              ),
                                                              1,
                                                            )),
                                                        e(
                                                          "span",
                                                          null,
                                                          t(
                                                            k.$t(
                                                              "lotteryAmount",
                                                            ),
                                                          ),
                                                          1,
                                                        ),
                                                      ]),
                                                    ]),
                                                    e("div", null, [
                                                      e("div", Tl, [
                                                        e(
                                                          "h3",
                                                          null,
                                                          t(
                                                            a(D)(
                                                              p.serviceCharge,
                                                            ),
                                                          ),
                                                          1,
                                                        ),
                                                        e(
                                                          "span",
                                                          null,
                                                          t(
                                                            k.$t(
                                                              "serviceCharge",
                                                            ),
                                                          ),
                                                          1,
                                                        ),
                                                      ]),
                                                    ]),
                                                    e("div", null, [
                                                      L.value.value === "BINGO"
                                                        ? (o(),
                                                          i("div", Il, [
                                                            e(
                                                              "h4",
                                                              {
                                                                class: H(
                                                                  p.profitAmount >
                                                                    0 &&
                                                                    p.state !==
                                                                      2
                                                                    ? "h4_green"
                                                                    : "h4_red",
                                                                ),
                                                              },
                                                              t(
                                                                p.state !== 2
                                                                  ? a(D)(
                                                                      p.profitAmount,
                                                                    )
                                                                  : "-",
                                                              ),
                                                              3,
                                                            ),
                                                            e(
                                                              "span",
                                                              null,
                                                              t(
                                                                k.$t(
                                                                  "profitNloss",
                                                                ),
                                                              ),
                                                              1,
                                                            ),
                                                          ]))
                                                        : (o(),
                                                          i("div", Ml, [
                                                            e(
                                                              "h4",
                                                              {
                                                                class: H(
                                                                  p.winAmount -
                                                                    p.amount >
                                                                    0 &&
                                                                    p.state !==
                                                                      2
                                                                    ? "h4_green"
                                                                    : "h4_red",
                                                                ),
                                                              },
                                                              t(
                                                                p.state !== 2
                                                                  ? a(D)(
                                                                      p.winAmount -
                                                                        p.amount,
                                                                    )
                                                                  : "-",
                                                              ),
                                                              3,
                                                            ),
                                                            e(
                                                              "span",
                                                              null,
                                                              t(
                                                                k.$t(
                                                                  "profitNloss",
                                                                ),
                                                              ),
                                                              1,
                                                            ),
                                                          ])),
                                                    ]),
                                                  ]),
                                                ]),
                                              ],
                                            )
                                          );
                                        }),
                                        128,
                                      )),
                              ]),
                            ]))
                          : Z("", !0),
                        m[l.value].type === 3
                          ? (o(),
                            i("div", Dl, [
                              e("div", Nl, [
                                (o(!0),
                                i(
                                  N,
                                  null,
                                  z(
                                    a(v),
                                    (p) => (
                                      o(),
                                      i(
                                        "div",
                                        {
                                          class: "bet-container-lottery-items",
                                          key: p.orderNo,
                                        },
                                        [
                                          e("div", Ol, [
                                            e("div", Rl, [
                                              e("h1", null, [
                                                e(
                                                  "h2",
                                                  null,
                                                  t(p.venderCode),
                                                  1,
                                                ),
                                                e(
                                                  "span",
                                                  null,
                                                  t(
                                                    k.$t(
                                                      a(Se)(
                                                        a(ue)
                                                          .bettingOrderStatus,
                                                        p.orderStatus,
                                                      ),
                                                    ),
                                                  ),
                                                  1,
                                                ),
                                              ]),
                                              e("p", null, t(p.betTime), 1),
                                            ]),
                                            e("div", Pl, [
                                              e(
                                                "img",
                                                {
                                                  src: a(x)(
                                                    "main",
                                                    "betInfoStep",
                                                  ),
                                                },
                                                null,
                                                8,
                                                Fl,
                                              ),
                                              e("ul", null, [
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("type")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    t(p.gameName),
                                                    1,
                                                  ),
                                                ]),
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("orderNo")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    t(p.orderNo),
                                                    1,
                                                  ),
                                                ]),
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("betAmount")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    t(a(D)(p.betAmount)),
                                                    1,
                                                  ),
                                                ]),
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("lotteryAmount")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    t(a(D)(p.winAmount)),
                                                    1,
                                                  ),
                                                ]),
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("profitNloss")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    {
                                                      class: H([
                                                        p.winLossAmount <= 0
                                                          ? "colorF95959"
                                                          : "color2AAB79",
                                                      ]),
                                                    },
                                                    [
                                                      p.winLossAmount > 0
                                                        ? (o(),
                                                          i("span", Gl, "+"))
                                                        : Z("", !0),
                                                      j(
                                                        t(
                                                          a(D)(p.winLossAmount),
                                                        ),
                                                        1,
                                                      ),
                                                    ],
                                                    2,
                                                  ),
                                                ]),
                                              ]),
                                            ]),
                                          ]),
                                        ],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                            ]))
                          : Z("", !0),
                        m[l.value].type === 6
                          ? (o(),
                            i("div", Ul, [
                              e("div", Vl, [
                                (o(!0),
                                i(
                                  N,
                                  null,
                                  z(
                                    a(v),
                                    (p) => (
                                      o(),
                                      i(
                                        "div",
                                        {
                                          class: "bet-container-lottery-items",
                                          key: p.orderNo,
                                        },
                                        [
                                          e("div", El, [
                                            e("div", zl, [
                                              e("h1", null, [
                                                e(
                                                  "h2",
                                                  null,
                                                  t(p.venderCode),
                                                  1,
                                                ),
                                                e(
                                                  "span",
                                                  null,
                                                  t(
                                                    a(Se)(
                                                      a(ue).bettingOrderStatus,
                                                      p.orderStatus,
                                                    ),
                                                  ),
                                                  1,
                                                ),
                                              ]),
                                              e("p", null, t(p.betTime), 1),
                                            ]),
                                            e("div", jl, [
                                              e(
                                                "img",
                                                {
                                                  src: a(x)(
                                                    "main",
                                                    "betInfoStep",
                                                  ),
                                                },
                                                null,
                                                8,
                                                Zl,
                                              ),
                                              e("ul", null, [
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("type")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    t(p.gameName),
                                                    1,
                                                  ),
                                                ]),
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("orderNo")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    t(p.orderNo),
                                                    1,
                                                  ),
                                                ]),
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("betAmount")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    t(a(D)(p.betAmount)),
                                                    1,
                                                  ),
                                                ]),
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("lotteryAmount")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    t(a(D)(p.winAmount)),
                                                    1,
                                                  ),
                                                ]),
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("profitNloss")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    {
                                                      class: H([
                                                        p.winLossAmount <= 0
                                                          ? "colorF95959"
                                                          : "color2AAB79",
                                                      ]),
                                                    },
                                                    [
                                                      p.winLossAmount > 0
                                                        ? (o(),
                                                          i("span", Hl, "+"))
                                                        : Z("", !0),
                                                      j(
                                                        t(
                                                          a(D)(p.winLossAmount),
                                                        ),
                                                        1,
                                                      ),
                                                    ],
                                                    2,
                                                  ),
                                                ]),
                                              ]),
                                            ]),
                                          ]),
                                        ],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                            ]))
                          : Z("", !0),
                        m[l.value].type === 1
                          ? (o(),
                            i("div", ql, [
                              e("div", Wl, [
                                (o(!0),
                                i(
                                  N,
                                  null,
                                  z(
                                    a(v),
                                    (p) => (
                                      o(),
                                      i(
                                        "div",
                                        {
                                          class: "bet-container-lottery-items",
                                          key: p.orderNo,
                                        },
                                        [
                                          e("div", Xl, [
                                            e("div", Yl, [
                                              e("h1", null, [
                                                e(
                                                  "h2",
                                                  null,
                                                  t(p.venderCode),
                                                  1,
                                                ),
                                                e(
                                                  "span",
                                                  null,
                                                  t(
                                                    a(Se)(
                                                      a(ue).bettingOrderStatus,
                                                      p.orderStatus,
                                                    ),
                                                  ),
                                                  1,
                                                ),
                                              ]),
                                              e("p", null, t(p.betTime), 1),
                                            ]),
                                            e("div", Kl, [
                                              e(
                                                "img",
                                                {
                                                  src: a(x)(
                                                    "main",
                                                    "betInfoStep",
                                                  ),
                                                },
                                                null,
                                                8,
                                                Ql,
                                              ),
                                              e("ul", null, [
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("type")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    t(p.gameName),
                                                    1,
                                                  ),
                                                ]),
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("orderNo")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    t(p.orderNo),
                                                    1,
                                                  ),
                                                ]),
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("betAmounts")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    t(a(D)(p.betAmount)),
                                                    1,
                                                  ),
                                                ]),
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("lotteryAmount")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    t(a(D)(p.winAmount)),
                                                    1,
                                                  ),
                                                ]),
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("profitNloss")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    {
                                                      class: H([
                                                        p.winLossAmount <= 0
                                                          ? "colorF95959"
                                                          : "color2AAB79",
                                                      ]),
                                                    },
                                                    [
                                                      p.winLossAmount > 0
                                                        ? (o(),
                                                          i("span", Jl, "+"))
                                                        : Z("", !0),
                                                      j(
                                                        t(
                                                          a(D)(p.winLossAmount),
                                                        ),
                                                        1,
                                                      ),
                                                    ],
                                                    2,
                                                  ),
                                                ]),
                                              ]),
                                            ]),
                                          ]),
                                        ],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                            ]))
                          : Z("", !0),
                        m[l.value].type === 5
                          ? (o(),
                            i("div", ei, [
                              e("div", ti, [
                                (o(!0),
                                i(
                                  N,
                                  null,
                                  z(
                                    a(v),
                                    (p) => (
                                      o(),
                                      i(
                                        "div",
                                        {
                                          class: "bet-container-lottery-items",
                                          key: p.orderNo,
                                        },
                                        [
                                          e("div", ai, [
                                            e("div", ni, [
                                              e("h1", null, [
                                                e(
                                                  "h2",
                                                  null,
                                                  t(p.venderCode),
                                                  1,
                                                ),
                                                e(
                                                  "span",
                                                  null,
                                                  t(
                                                    k.$t(
                                                      a(Se)(
                                                        a(ue)
                                                          .bettingOrderStatus,
                                                        p.orderStatus,
                                                      ),
                                                    ),
                                                  ),
                                                  1,
                                                ),
                                              ]),
                                              e("p", null, t(p.betTime), 1),
                                            ]),
                                            e("div", oi, [
                                              e(
                                                "img",
                                                {
                                                  class:
                                                    "bet-container-lottery-card-info-chessimg",
                                                  src: a(x)(
                                                    "main",
                                                    "chessStepIcon",
                                                  ),
                                                },
                                                null,
                                                8,
                                                si,
                                              ),
                                              e("ul", null, [
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("type")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    t(p.gameName),
                                                    1,
                                                  ),
                                                ]),
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("orderNo")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    t(p.orderNo),
                                                    1,
                                                  ),
                                                ]),
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("betAmount")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    t(a(D)(p.betAmount)),
                                                    1,
                                                  ),
                                                ]),
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("serviceCharge")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    t(a(D)(p.serviceFeeAmount)),
                                                    1,
                                                  ),
                                                ]),
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("actualAmount")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    t(a(D)(p.validBetAmount)),
                                                    1,
                                                  ),
                                                ]),
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("lotteryAmount")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    t(a(D)(p.winAmount)),
                                                    1,
                                                  ),
                                                ]),
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("profitNloss")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    {
                                                      class: H([
                                                        p.winLossAmount <= 0
                                                          ? "colorF95959"
                                                          : "color2AAB79",
                                                      ]),
                                                    },
                                                    [
                                                      p.winLossAmount > 0
                                                        ? (o(),
                                                          i("span", li, "+"))
                                                        : Z("", !0),
                                                      j(
                                                        t(
                                                          a(D)(p.winLossAmount),
                                                        ),
                                                        1,
                                                      ),
                                                    ],
                                                    2,
                                                  ),
                                                ]),
                                              ]),
                                            ]),
                                          ]),
                                        ],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                            ]))
                          : Z("", !0),
                        m[l.value].type === 2
                          ? (o(),
                            i("div", ii, [
                              e("div", ri, [
                                (o(!0),
                                i(
                                  N,
                                  null,
                                  z(
                                    a(v),
                                    (p) => (
                                      o(),
                                      i(
                                        "div",
                                        {
                                          class: "bet-container-lottery-items",
                                          key: p.orderNo,
                                        },
                                        [
                                          e("div", di, [
                                            e("div", ci, [
                                              e("h1", null, [
                                                e(
                                                  "h2",
                                                  null,
                                                  t(p.venderCode),
                                                  1,
                                                ),
                                                e(
                                                  "span",
                                                  null,
                                                  t(
                                                    k.$t(
                                                      a(Se)(
                                                        a(ue)
                                                          .bettingOrderStatus,
                                                        p.orderStatus,
                                                      ),
                                                    ),
                                                  ),
                                                  1,
                                                ),
                                              ]),
                                              e("p", null, t(p.betTime), 1),
                                            ]),
                                            e("div", ui, [
                                              e(
                                                "img",
                                                {
                                                  class:
                                                    "bet-container-lottery-card-info-chessimg",
                                                  src: a(x)(
                                                    "main",
                                                    "chessStepIcon",
                                                  ),
                                                },
                                                null,
                                                8,
                                                _i,
                                              ),
                                              e("ul", null, [
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("type")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    t(p.gameName),
                                                    1,
                                                  ),
                                                ]),
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("orderNo")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    t(p.orderNo),
                                                    1,
                                                  ),
                                                ]),
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("betAmount")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    t(a(D)(p.betAmount)),
                                                    1,
                                                  ),
                                                ]),
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("serviceCharge")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    t(a(D)(p.serviceFeeAmount)),
                                                    1,
                                                  ),
                                                ]),
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("actualAmount")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    t(a(D)(p.validBetAmount)),
                                                    1,
                                                  ),
                                                ]),
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("lotteryAmount")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    t(a(D)(p.winAmount)),
                                                    1,
                                                  ),
                                                ]),
                                                e("li", null, [
                                                  e(
                                                    "h2",
                                                    null,
                                                    t(k.$t("profitNloss")),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    {
                                                      class: H([
                                                        p.winLossAmount <= 0
                                                          ? "colorF95959"
                                                          : "color2AAB79",
                                                      ]),
                                                    },
                                                    [
                                                      p.winLossAmount > 0
                                                        ? (o(),
                                                          i("span", fi, "+"))
                                                        : Z("", !0),
                                                      j(
                                                        t(
                                                          a(D)(p.winLossAmount),
                                                        ),
                                                        1,
                                                      ),
                                                    ],
                                                    2,
                                                  ),
                                                ]),
                                              ]),
                                            ]),
                                          ]),
                                        ],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                            ]))
                          : Z("", !0),
                      ]),
                      _: 1,
                    },
                    8,
                    ["list", "page-query", "api", "is-auto-load"],
                  ),
                ]),
                C(
                  as,
                  {
                    "show-popup": te.value,
                    tabId: l.value,
                    selectId: T.value,
                    list: a(h),
                    onOnOverlay: w,
                    onOnClick: ae,
                    onOnBack: w,
                  },
                  null,
                  8,
                  ["show-popup", "tabId", "selectId", "list"],
                ),
              ],
              512,
            )
          );
        }
      );
    },
  });
const vi = V(pi, [["__scopeId", "data-v-6143ed23"]]),
  B3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: vi },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  hi = { class: "content" },
  mi = ["onClick"],
  gi = { class: "content-item-title" },
  yi = { alt: "" },
  $i = E({
    __name: "ServiceLIst",
    props: { list: { default: { type: Array, default: () => [] } } },
    emits: ["onClick"],
    setup(b, { emit: n }) {
      return (f, _) => {
        const h = M("van-icon"),
          s = ee("lazy");
        return (
          o(),
          i("div", hi, [
            e("div", null, [
              (o(!0),
              i(
                N,
                null,
                z(
                  f.list,
                  (u, l) => (
                    o(),
                    i(
                      "div",
                      {
                        class: "content-item",
                        key: l,
                        onClick: () => {
                          n("onClick", u);
                        },
                      },
                      [
                        e("div", gi, [
                          A(e("img", yi, null, 512), [
                            [s, a(x)("main", `CStype${u.typeID}`)],
                          ]),
                          e("span", null, t(u.typeName || u.name), 1),
                        ]),
                        C(h, { name: "arrow", size: "18px", color: "#A8A8A8" }),
                      ],
                      8,
                      mi,
                    )
                  ),
                ),
                128,
              )),
            ]),
          ])
        );
      };
    },
  });
const Ci = V($i, [["__scopeId", "data-v-63448991"]]);
function It(b) {
  const n = X(),
    { ServerType: f } = b,
    _ = pe({ ContactList: [], CollectionList: [] }),
    h = y(),
    s = he(() => _.ContactList),
    u = he(() => _.CollectionList);
  function l() {
    n.go(-1);
  }
  function m(v) {
    n.push({
      name:
        f == 1
          ? "Server-ServiceCollection"
          : "CustomerService-ServiceCollection",
      state: { itemId: v.typeID },
    });
  }
  function g(v) {
    if (v.url) {
      if (jt()) {
        Zt("recharge", { url: v.url, returnType: "1", gameName: "" });
        return;
      }
      vt(v.url);
    }
  }
  const c = async () => {
      const v = await W(f == 1 ? Ht() : qt());
      v && (_.ContactList = v.data || []);
    },
    d = async (v) => {
      const $ = await W(f == 1 ? Wt(v) : Xt(v));
      $ && (_.CollectionList = $.data || []);
    };
  async function r() {
    const v = await W(Yt());
    v && (h.value = v.data || {});
  }
  return {
    List: Ci,
    getIcons: x,
    goBack: l,
    onItemClick: m,
    onClickUrl: g,
    getList: c,
    ContactList: s,
    getServiceList: d,
    CollectionList: u,
    serviceGroup: h,
    getCustomerServiceGroup: r,
  };
}
const bi = (b) => (ge("data-v-b8b61bf1"), (b = b()), ye(), b),
  wi = { class: "customer-container" },
  ki = { class: "customer-container-header" },
  Si = { class: "customer-container-header-belly" },
  xi = { alt: "" },
  Bi = { key: 0, class: "cg" },
  Ai = { class: "cg2" },
  Li = { class: "til1" },
  Ti = { class: "left" },
  Ii = bi(() => e("div", { class: "err" }, null, -1)),
  Mi = { class: "til2" },
  Di = E({
    __name: "index",
    setup(b) {
      const {
          onItemClick: n,
          goBack: f,
          getIcons: _,
          getList: h,
          ContactList: s,
          List: u,
          serviceGroup: l,
          getCustomerServiceGroup: m,
          onClickUrl: g,
        } = It({ ServerType: 2 }),
        c = He();
      return (
        re(() => {
          h(), m();
        }),
        (d, r) => {
          var B, I, F, T;
          const v = M("NavBar"),
            $ = M("van-image"),
            S = ee("lazy");
          return (
            o(),
            i("div", wi, [
              e("div", ki, [
                C(
                  v,
                  {
                    title: `${d.$t("customerServiceTitle")}`,
                    backgroundColor:
                      "linear-gradient(90deg, #2b3270 0%, #D9AD82 100%)",
                    "left-arrow": "",
                    onClickLeft: a(f),
                  },
                  null,
                  8,
                  ["title", "onClickLeft"],
                ),
                e("div", Si, [
                  A(e("img", xi, null, 512), [[S, a(_)("main", "customerBg")]]),
                ]),
              ]),
              ((B = a(l)) == null ? void 0 : B.status) == 1
                ? (o(),
                  i("div", Bi, [
                    e("div", Ai, [
                      e("div", Li, [
                        e("div", Ti, [
                          C(
                            $,
                            {
                              round: "",
                              width: "30",
                              height: "30",
                              src:
                                a(c).ossUrl +
                                "/" +
                                ((I = a(l)) == null ? void 0 : I.imageUrl),
                              fit: "cover",
                              position: "center",
                            },
                            { error: P(() => [Ii]), _: 1 },
                            8,
                            ["src"],
                          ),
                          e(
                            "p",
                            null,
                            t((F = a(l)) == null ? void 0 : F.mainTitle),
                            1,
                          ),
                        ]),
                        e(
                          "div",
                          {
                            class: "btn",
                            onClick:
                              r[0] ||
                              (r[0] = (w) => {
                                var O;
                                return a(g)({
                                  url: (O = a(l)) == null ? void 0 : O.url,
                                });
                              }),
                          },
                          t(d.$t("join")),
                          1,
                        ),
                      ]),
                      e(
                        "div",
                        Mi,
                        t((T = a(l)) == null ? void 0 : T.subTitle),
                        1,
                      ),
                    ]),
                  ]))
                : Z("", !0),
              C(a(u), { list: a(s), onOnClick: a(n) }, null, 8, [
                "list",
                "onOnClick",
              ]),
            ])
          );
        }
      );
    },
  });
const Ni = V(Di, [["__scopeId", "data-v-b8b61bf1"]]),
  A3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ni },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Oi = { class: "feedback-container" },
  Ri = { class: "feedback-container-content" },
  Pi = { class: "feedback-container-content-text" },
  Fi = { class: "feedback-container-content-text-wrapper" },
  Gi = ["placeholder"],
  Ui = { class: "feedback-container-content-describe" },
  Vi = ["src"],
  Ei = { class: "feedback-container-footer" },
  zi = E({
    __name: "index",
    setup(b) {
      const { t: n } = oe(),
        f = X(),
        _ = n("feedbackPhTXT"),
        h = pe({ content: "" });
      async function s() {
        if (!h.content) {
          _e({ message: n("feedbackMsg"), wordBreak: "break-word" });
          return;
        }
        (await W(Kt(h))) && (xe(n("submitSuccess")), f.go(-1));
      }
      return (u, l) => {
        const m = M("NavBar");
        return (
          o(),
          i("div", Oi, [
            C(
              m,
              {
                title: u.$t("feedback"),
                "left-arrow": "",
                onClickLeft: l[0] || (l[0] = (g) => a(f).go(-1)),
              },
              null,
              8,
              ["title"],
            ),
            e("div", Ri, [
              e("div", Pi, [
                e("div", Fi, [
                  A(
                    e(
                      "textarea",
                      {
                        "onUpdate:modelValue":
                          l[1] || (l[1] = (g) => (h.content = g)),
                        name: "feedback",
                        id: "",
                        cols: "30",
                        rows: "10",
                        placeholder: a(_),
                      },
                      null,
                      8,
                      Gi,
                    ),
                    [[Ve, h.content]],
                  ),
                ]),
              ]),
              e("div", Ui, [
                e("h5", null, t(u.$t("tipAcessableFeedback")), 1),
                e("h5", null, t(u.$t("tipWinMysteryRewards")), 1),
                e("div", null, [
                  e(
                    "img",
                    { src: a(x)("main", "feedbackImg"), alt: "" },
                    null,
                    8,
                    Vi,
                  ),
                ]),
              ]),
            ]),
            e("div", Ei, [e("button", { onClick: s }, t(u.$t("submit")), 1)]),
          ])
        );
      };
    },
  });
const ji = V(zi, [["__scopeId", "data-v-0f1c0a0c"]]),
  L3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ji },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  ve = ht.global.t;
ve("lottery"),
  ve("electronic"),
  ve("sport"),
  ve("live"),
  ve("chess"),
  ve("fishing"),
  ve("miniGame");
const Zi = [
    { name: ve("chess"), type: 5, icon: "iconChess", typeName: "chesscard" },
    { name: ve("fishing"), type: 3, icon: "iconFishing", typeName: "fish" },
    {
      name: ve("electronic"),
      type: 2,
      icon: "iconElectric",
      typeName: "electronic",
    },
    { name: ve("lottery"), type: 0, icon: "iconLottery", typeName: "lottery" },
    { name: ve("sport"), type: 4, icon: "iconPhysics", typeName: "sport" },
    { name: ve("live"), type: 5, icon: "iconRealPerson", typeName: "video" },
    {
      name: ve("miniGame"),
      type: 6,
      icon: "iconMiniGame",
      typeName: "smallgame",
    },
    { name: ve("electronic"), type: 2, icon: "iconSlots", typeName: "slot" },
  ],
  Hi = { class: "gamestats-container" },
  qi = { class: "gamestats-container-header" },
  Wi = { class: "gamestats-container-banner" },
  Xi = { class: "gamestats-container-list-wrapper" },
  Yi = { key: 1, class: "gamestats-container-items" },
  Ki = { alt: "" },
  Qi = { class: "gamestats-container-item-content" },
  Ji = { alt: "" },
  er = { class: "gamestats-container-item-content-list" },
  tr = E({
    __name: "index",
    setup(b) {
      const { t: n } = oe(),
        f = X(),
        _ = y(0),
        h = [
          { title: n("today"), records: "hello" },
          { title: n("yesterday"), records: "hello" },
          { title: n("thisWeek"), records: "hello" },
          { title: n("thisMonth"), records: "hello" },
        ],
        s = (d) => {
          let r = { start: 0, end: 0 };
          switch (d) {
            case 0:
              r = ze().today;
              break;
            case 1:
              r = ze().yesterday;
              break;
            case 2:
              r = ze().last7days;
              break;
            case 3:
              r = ze().thisMonth;
              break;
          }
          return {
            startDate: Ge(r.start * 1e3).format("YYYY-MM-DD HH:mm:ss"),
            endDate: Ge(r.end * 1e3).format("YYYY-MM-DD HH:mm:ss"),
          };
        },
        u = pe({ startDate: s(0).startDate, endDate: s(0).endDate }),
        l = (d) => {
          const r = Zi.find((v) => d.gameTypeName.toLowerCase() === v.typeName);
          return r == null ? void 0 : r.icon;
        },
        m = pe({ list: [], sumBetAmount: 0 }),
        g = async () => {
          const [d, r] = await mt(Qt(u));
          d && _e({ message: d.msg, wordBreak: "break-word" }),
            r && ((m.list = r.gameStatis), (m.sumBetAmount = r.sumBetAmount));
        };
      re(() => {
        g();
      });
      const c = (d) => {
        (u.startDate = s(d).startDate), (u.endDate = s(d).endDate), g();
      };
      return (d, r) => {
        const v = M("NavBar"),
          $ = M("van-tab"),
          S = M("van-tabs"),
          B = ee("lazy");
        return (
          o(),
          i("div", Hi, [
            C(
              v,
              {
                title: d.$t("gameStats"),
                "left-arrow": "",
                onClickLeft: r[0] || (r[0] = (I) => a(f).go(-1)),
              },
              null,
              8,
              ["title"],
            ),
            e("div", qi, [
              C(
                S,
                {
                  active: _.value,
                  "onUpdate:active": r[1] || (r[1] = (I) => (_.value = I)),
                  type: "card",
                  onChange: c,
                },
                {
                  default: P(() => [
                    (o(),
                    i(
                      N,
                      null,
                      z(h, (I) => C($, { title: I.title }, null, 8, ["title"])),
                      64,
                    )),
                  ]),
                  _: 1,
                },
                8,
                ["active"],
              ),
            ]),
            e("div", Wi, [
              e("h1", null, t(a(D)(m.sumBetAmount || 0)), 1),
              e("span", null, t(d.$t("totalBetAmount")), 1),
            ]),
            e("div", Xi, [
              m.list.length === 0
                ? (o(), de(tt, { key: 0, style: { "margin-top": "40px" } }))
                : (o(),
                  i("div", Yi, [
                    (o(!0),
                    i(
                      N,
                      null,
                      z(
                        m.list,
                        (I, F) => (
                          o(),
                          i(
                            "div",
                            { class: "gamestats-container-item", key: F },
                            [
                              e("h1", null, [
                                A(e("img", Ki, null, 512), [
                                  [B, a(x)("main", l(I))],
                                ]),
                                e("span", null, t(I.gameTypeName), 1),
                              ]),
                              e("div", Qi, [
                                A(e("img", Ji, null, 512), [
                                  [B, a(x)("main", "gameStatsSteps")],
                                ]),
                                e("div", er, [
                                  e("div", null, [
                                    e("h4", null, t(d.$t("betAmount")), 1),
                                    e("h5", null, t(a(D)(I.betAmount)), 1),
                                  ]),
                                  e("div", null, [
                                    e("h4", null, t(d.$t("betTimes")), 1),
                                    e("h5", null, t(I.betCount), 1),
                                  ]),
                                  e("div", null, [
                                    e("h4", null, t(d.$t("winningAmount")), 1),
                                    e(
                                      "span",
                                      null,
                                      t(a(D)(I.betWinLossAmount)),
                                      1,
                                    ),
                                  ]),
                                ]),
                              ]),
                            ],
                          )
                        ),
                      ),
                      128,
                    )),
                  ])),
            ]),
          ])
        );
      };
    },
  });
const ar = V(tr, [["__scopeId", "data-v-dc01f921"]]),
  T3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ar },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  nr = { class: "gverify-container" },
  or = { class: "gverify-container-header" },
  sr = { class: "gverify-container-header-belly" },
  lr = { alt: "" },
  ir = { class: "gverify-container-content" },
  rr = { class: "gverify-container-content-item" },
  dr = { class: "gverify-container-content-item-title" },
  cr = { alt: "" },
  ur = { class: "gverify-container-content-item-tip" },
  _r = { class: "gverify-container-content-item-tip" },
  fr = { class: "popup-content" },
  pr = { key: 0, class: "box" },
  vr = { class: "info" },
  hr = { class: "txt" },
  mr = { class: "txt" },
  gr = { key: 1, class: "box" },
  yr = { class: "info" },
  $r = { class: "txt" },
  Cr = { class: "txt" },
  br = { key: 2, class: "box" },
  wr = { class: "label" },
  kr = { class: "img", alt: "" },
  Sr = ["placeholder"],
  xr = { class: "lab" },
  Br = { class: "other" },
  Ar = E({
    __name: "index",
    setup(b) {
      const { t: n } = oe(),
        f = X(),
        _ = Ie(),
        s = $e().getUserInfo;
      let u = y(n("pwdVerify")),
        l = y(0),
        m = y(!1);
      const g = y(""),
        c = y(!1),
        d = y([]),
        r = { text: "name", value: "code" },
        {
          isGoogleVerifySms: v,
          isGoogleVerifyEmail: $,
          registerState: S,
        } = at();
      S();
      const B = async (G) => {
        var ce, ie;
        const U = await W(
          gt({ verifyCode: g.value.toString(), verifyType: G }),
        );
        (ce = U == null ? void 0 : U.data) != null &&
          ce.secret &&
          f.push({
            name: "GoogleVerify-BindGoogle",
            query: {
              secret: (ie = U.data) == null ? void 0 : ie.secret,
              type: 0,
            },
          });
      };
      re(() => {});
      const I = y(!1),
        F = () => {
          (g.value = ""),
            _.setCountDown(0),
            s.regType === 1
              ? v.value
                ? ((l.value = 1), (m.value = !0))
                : s.verifyMethods.email !== "" && $.value
                  ? ((l.value = 2), (m.value = !0))
                  : (l.value = 0)
              : $.value
                ? ((l.value = 2), (m.value = !0))
                : s.verifyMethods.mobile !== "" && v.value
                  ? ((l.value = 1), (m.value = !0))
                  : (l.value = 0),
            (u.value = T(l.value)),
            (I.value = !0);
        },
        T = (G) => {
          let U = "";
          switch (G) {
            case 0:
              U = n("pwdVerify");
              break;
            case 1:
              U = n("SMSVerify");
              break;
            case 2:
              U = n("emailverification");
              break;
            default:
              U = n("pwdVerify");
              break;
          }
          return U;
        },
        w = () => {
          if (l.value === 1 || l.value === 2) {
            if (!g.value) return _e(n("noVerifyCodeFound"));
          } else if (!g.value) return _e(n("pwdNull"));
          let G = O(l.value);
          B(G);
        },
        O = (G) => {
          let U = 1;
          switch (G) {
            case 0:
              U = 2;
              break;
            case 1:
              U = 1;
              break;
            case 2:
              U = 4;
              break;
            default:
              U = 2;
              break;
          }
          return U;
        },
        L = () => {
          (c.value = !0),
            $.value &&
            s.verifyMethods.email !== "" &&
            v.value &&
            s.verifyMethods.mobile !== ""
              ? (d.value = [
                  { name: n("SMSVerify"), code: 1 },
                  { name: n("emailverification"), code: 2 },
                ])
              : $.value && s.verifyMethods.email !== ""
                ? (d.value = [{ name: n("emailverification"), code: 2 }])
                : v.value &&
                  s.verifyMethods.mobile !== "" &&
                  (d.value = [{ name: n("SMSVerify"), code: 1 }]);
        },
        te = ({ selectedOptions: G }) => {
          (u.value = T(G[0].code)), (l.value = G[0].code), (c.value = !1);
        },
        ae = async () => {
          if (l.value === 1)
            if (
              await W(
                Ct({ phone: s.verifyMethods.mobile, codeType: Ae.openGoogle }),
              )
            )
              xe(n("sendSuccess"));
            else return -1;
          else if (
            await W(
              bt({ email: s.verifyMethods.email, emailType: Ae.openGoogle }),
            )
          )
            xe(n("sendSuccess"));
          else return -1;
        };
      function Y() {
        f.push({ name: "CustomerService" });
      }
      function K() {
        f.push({ name: "rpwd" });
      }
      return (G, U) => {
        const ce = M("NavBar"),
          ie = M("van-icon"),
          se = M("van-picker"),
          le = M("van-popup"),
          Q = ee("lazy");
        return (
          o(),
          i(
            N,
            null,
            [
              e("div", nr, [
                e("div", or, [
                  C(
                    ce,
                    {
                      title: a(n)("googleAuthenticator"),
                      backgroundColor:
                        "linear-gradient(90deg, #2b3270 0%, #D9AD82 100%)",
                      "left-arrow": "",
                      onClickLeft: U[0] || (U[0] = (q) => a(f).go(-1)),
                    },
                    null,
                    8,
                    ["title"],
                  ),
                  e("div", sr, [
                    A(e("img", lr, null, 512), [
                      [Q, a(x)("main", "googleVerifyBg")],
                    ]),
                  ]),
                ]),
                e("div", ir, [
                  e("div", rr, [
                    e("div", dr, [
                      A(e("img", cr, null, 512), [
                        [Q, a(x)("main", "GoogleTip")],
                      ]),
                      e("span", null, t(a(n)("googleIllustrate")), 1),
                    ]),
                    e("div", ur, t(a(n)("googleTip1")), 1),
                    e("div", _r, t(a(n)("googleTip2")), 1),
                  ]),
                ]),
                e(
                  "div",
                  { class: "gverify-container-button", onClick: F },
                  t(a(n)("turnGoogle")),
                  1,
                ),
              ]),
              C(
                Lt,
                {
                  show: I.value,
                  "onUpdate:show": U[6] || (U[6] = (q) => (I.value = q)),
                  onConfirm: w,
                  onCancel: L,
                  showCancelBtn: a(m),
                  cancelText: a(n)("otherverificationmethods"),
                  title: a(u),
                },
                {
                  content: P(() => {
                    var q, me;
                    return [
                      e("div", fr, [
                        a(l) === 1
                          ? (o(),
                            i("div", pr, [
                              e("div", vr, [
                                e("p", hr, t(a(n)("googleTip3")), 1),
                                e("p", mr, t(a(n)("googleTip4", [a(yt)()])), 1),
                              ]),
                              C(
                                et,
                                {
                                  value: g.value,
                                  "onUpdate:value":
                                    U[1] || (U[1] = (ne) => (g.value = ne)),
                                  isShowVerifyT: !1,
                                  sendFunc: ae,
                                  typeP: "updatePhone",
                                },
                                null,
                                8,
                                ["value"],
                              ),
                            ]))
                          : a(l) === 2
                            ? (o(),
                              i("div", gr, [
                                e("div", yr, [
                                  e("p", $r, t(a(n)("googleTip3")), 1),
                                  e(
                                    "p",
                                    Cr,
                                    t(
                                      a(n)("googleTip7", [
                                        a($t)(
                                          (me =
                                            (q = a(s)) == null
                                              ? void 0
                                              : q.verifyMethods) == null
                                            ? void 0
                                            : me.email,
                                        ),
                                      ]),
                                    ),
                                    1,
                                  ),
                                ]),
                                C(
                                  et,
                                  {
                                    value: g.value,
                                    "onUpdate:value":
                                      U[2] || (U[2] = (ne) => (g.value = ne)),
                                    isShowVerifyT: !1,
                                    sendFunc: ae,
                                    typeP: "updatePhone",
                                  },
                                  null,
                                  8,
                                  ["value"],
                                ),
                              ]))
                            : (o(),
                              i("div", br, [
                                e("label", wr, [
                                  A(e("img", kr, null, 512), [
                                    [Q, a(x)("main", "pswLock")],
                                  ]),
                                  j(t(a(n)("withdrawDialogDesc2")), 1),
                                ]),
                                A(
                                  e(
                                    "input",
                                    {
                                      class: "input",
                                      maxlength: "20",
                                      "onUpdate:modelValue":
                                        U[3] || (U[3] = (ne) => (g.value = ne)),
                                      type: "password",
                                      placeholder: a(n)("withdrawDialogPh"),
                                    },
                                    null,
                                    8,
                                    Sr,
                                  ),
                                  [[Ve, g.value]],
                                ),
                                e("p", xr, [
                                  C(ie, { class: "icon", name: "warning-o" }),
                                  e(
                                    "span",
                                    null,
                                    t(a(n)("withdrawDialogDesc3")),
                                    1,
                                  ),
                                ]),
                                e("div", Br, [
                                  e(
                                    "span",
                                    {
                                      class: "pwd",
                                      onClick: U[4] || (U[4] = (ne) => K()),
                                    },
                                    t(a(n)("withdrawDialogDesc4")),
                                    1,
                                  ),
                                  e(
                                    "span",
                                    {
                                      class: "service",
                                      onClick: U[5] || (U[5] = (ne) => Y()),
                                    },
                                    t(a(n)("withdrawDialogDesc5")),
                                    1,
                                  ),
                                ]),
                              ])),
                      ]),
                    ];
                  }),
                  _: 1,
                },
                8,
                ["show", "showCancelBtn", "cancelText", "title"],
              ),
              C(
                le,
                {
                  show: c.value,
                  "onUpdate:show": U[8] || (U[8] = (q) => (c.value = q)),
                  round: "",
                  position: "bottom",
                },
                {
                  default: P(() => [
                    C(
                      se,
                      {
                        "columns-field-names": r,
                        columns: d.value,
                        onCancel: U[7] || (U[7] = (q) => (c.value = !1)),
                        onConfirm: te,
                      },
                      null,
                      8,
                      ["columns"],
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["show"],
              ),
            ],
            64,
          )
        );
      };
    },
  });
const Lr = V(Ar, [["__scopeId", "data-v-bf283419"]]),
  I3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Lr },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Tr = { class: "guide-container" },
  Ir = ["innerHTML"],
  Mr = E({
    __name: "index",
    setup(b) {
      const n = X(),
        f = y();
      return (
        re(async () => {
          const _ = await W(Jt());
          _ && (f.value = _.data.playingGuide);
        }),
        (_, h) => {
          const s = M("NavBar");
          return (
            o(),
            i("div", Tr, [
              C(
                s,
                {
                  title: _.$t("guideTitle"),
                  "left-arrow": "",
                  onClickLeft: h[0] || (h[0] = (u) => a(n).go(-1)),
                },
                null,
                8,
                ["title"],
              ),
              e(
                "div",
                { class: "guide-container-content", innerHTML: f.value },
                null,
                8,
                Ir,
              ),
            ])
          );
        }
      );
    },
  });
const Dr = V(Mr, [["__scopeId", "data-v-d0534437"]]),
  M3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Dr },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Nr = (b) => (ge("data-v-144c92c3"), (b = b()), ye(), b),
  Or = { class: "bonus-header" },
  Rr = { class: "title left" },
  Pr = { class: "tip left" },
  Fr = { class: "tip left" },
  Gr = { class: "tip left" },
  Ur = { class: "time left" },
  Vr = { class: "nav" },
  Er = { class: "bonus-container" },
  zr = { class: "left" },
  jr = { class: "right" },
  Zr = { class: "detail" },
  Hr = { class: "text" },
  qr = { class: "people" },
  Wr = { class: "detail" },
  Xr = { class: "text" },
  Yr = { class: "num" },
  Kr = Nr(() => e("div", { class: "line" }, null, -1)),
  Qr = { class: "task" },
  Jr = { class: "peopleval" },
  e1 = { class: "text" },
  t1 = { class: "rechargeval" },
  a1 = { class: "text" },
  n1 = ["onClick"],
  o1 = E({
    __name: "index",
    setup(b) {
      const { t: n } = oe(),
        f = X(),
        _ = y(),
        h = he(() => {
          var c, d, r;
          if (
            (c = _.value) != null &&
            c.taskList &&
            (d = _.value) != null &&
            d.taskList.length
          ) {
            const { beginDate: v = "", endDate: $ = "" } =
              (r = _.value) == null ? void 0 : r.taskList[0];
            return `${v.split(" ")[0]} - ${$.split(" ")[0]}`;
          }
          return "";
        }),
        s = async () => {
          const c = await ea();
          _.value = c;
        };
      async function u(c) {
        const d = await W(ta({ taskId: c.taskID }));
        Fe(n("code" + d.msgCode)), s();
      }
      function l(c) {
        c.isFinshed && c.isReceive === 0 && u(c);
      }
      const m = (c) =>
          c.isFinshed
            ? c.isReceive == 0
              ? n("receive")
              : n("claimed")
            : n("undone"),
        g = (c) => {
          f.push({ name: c });
        };
      return (
        re(() => {
          s();
        }),
        (c, d) => {
          var v;
          const r = M("NavBar");
          return (
            o(),
            i(
              N,
              null,
              [
                C(
                  r,
                  {
                    title: c.$t("invitationBonus"),
                    backgroundColor:
                      "linear-gradient(90deg, #2b3270 0%, #D9AD82 100%)",
                    "left-arrow": "",
                    onClickLeft: d[0] || (d[0] = ($) => a(f).go(-1)),
                  },
                  null,
                  8,
                  ["title"],
                ),
                e("div", Or, [
                  e("div", Rr, t(c.$t("inviteFriendRecharge")), 1),
                  e("div", Pr, t(c.$t("inviteTip1")), 1),
                  e("div", Fr, t(c.$t("inviteTip2")), 1),
                  e("div", Gr, t(c.$t("inviteTip3")), 1),
                  e("div", Ur, t(h.value), 1),
                  e("div", Vr, [
                    e(
                      "div",
                      {
                        class: "rule",
                        onClick:
                          d[1] || (d[1] = ($) => g("InvitationBonus-Rule")),
                      },
                      t(c.$t("inviteRule")),
                      1,
                    ),
                    e(
                      "div",
                      {
                        class: "record",
                        onClick:
                          d[2] || (d[2] = ($) => g("InvitationBonus-Record")),
                      },
                      t(c.$t("inviteRecord")),
                      1,
                    ),
                  ]),
                ]),
                e("div", Er, [
                  (o(!0),
                  i(
                    N,
                    null,
                    z(
                      (v = _.value) == null ? void 0 : v.taskList,
                      ($, S) => (
                        o(),
                        i("div", { key: S, class: "bonus-items" }, [
                          e(
                            "div",
                            { class: H(["head", { isFinshed: $.isFinshed }]) },
                            [
                              e("div", zr, [
                                j(t(c.$t("award")) + " ", 1),
                                e("div", null, t(S + 1), 1),
                              ]),
                              e("div", jr, t(a(D)($.taskAmount)), 1),
                            ],
                            2,
                          ),
                          e("div", Zr, [
                            e("div", Hr, t(c.$t("invitationMember")), 1),
                            e("div", qr, t($.taskPeople), 1),
                          ]),
                          e("div", Wr, [
                            e("div", Xr, t(c.$t("rechargePerPerson")), 1),
                            e("div", Yr, t(a(D)($.rechargeAmount)), 1),
                          ]),
                          Kr,
                          e("div", Qr, [
                            e("div", null, [
                              e(
                                "div",
                                Jr,
                                t(`${$.efficientPeople} / ${$.taskPeople}`),
                                1,
                              ),
                              e("div", e1, t(c.$t("invitationMember")), 1),
                            ]),
                            e("div", null, [
                              e(
                                "div",
                                t1,
                                t(
                                  `${$.rechargePeople} / ${$.taskRechargePeople}`,
                                ),
                                1,
                              ),
                              e("div", a1, t(c.$t("rechargeNumber")), 1),
                            ]),
                          ]),
                          e(
                            "div",
                            {
                              class: H([
                                "btn",
                                { active: $.isFinshed && $.isReceive === 0 },
                              ]),
                              onClick: (B) => l($),
                            },
                            t(m($)),
                            11,
                            n1,
                          ),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
              ],
              64,
            )
          );
        }
      );
    },
  });
const s1 = V(o1, [["__scopeId", "data-v-144c92c3"]]),
  D3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: s1 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  l1 = { class: "languages" },
  i1 = E({
    __name: "index",
    setup(b) {
      const n = X();
      return (f, _) => {
        const h = M("NavBar");
        return (
          o(),
          i("div", l1, [
            C(
              h,
              {
                title: f.$t("selectLanguage"),
                "left-arrow": "",
                onClickLeft: _[0] || (_[0] = (s) => a(n).go(-1)),
              },
              null,
              8,
              ["title"],
            ),
            C(qa),
          ])
        );
      };
    },
  });
const r1 = V(i1, [["__scopeId", "data-v-5281405d"]]),
  N3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: r1 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  d1 = { class: "Laundry-page" },
  c1 = ["src"],
  u1 = { class: "laundry-page_container" },
  _1 = { class: "laundry-page_box" },
  f1 = { class: "title" },
  p1 = { class: "lab" },
  v1 = { class: "number" },
  h1 = ["src"],
  m1 = { class: "txt" },
  g1 = { class: "c-row" },
  y1 = { class: "item" },
  $1 = { class: "tit" },
  C1 = { class: "num" },
  b1 = { class: "tit" },
  w1 = { class: "num red" },
  k1 = { class: "item" },
  S1 = { class: "tit" },
  x1 = { class: "num" },
  B1 = { class: "tip" },
  A1 = ["src"],
  L1 = { class: "laundry-page_list" },
  T1 = { class: "title" },
  I1 = { key: 0, class: "list" },
  M1 = { class: "header" },
  D1 = { class: "" },
  N1 = { class: "name" },
  O1 = { class: "time" },
  R1 = { class: "state" },
  P1 = { class: "body" },
  F1 = { class: "left" },
  G1 = { class: "imgBox" },
  U1 = ["src"],
  V1 = { class: "right" },
  E1 = { class: "red" },
  z1 = { class: "orange" },
  j1 = { alt: "" },
  Z1 = { class: "Laundry-Con" },
  H1 = { class: "Laundry-Con_tip" },
  q1 = { class: "Laundry-Con_txt" },
  W1 = { class: "number" },
  X1 = E({
    __name: "index",
    setup(b) {
      const { t: n } = oe(),
        f = X(),
        _ = He(),
        h = he(() => _.getIsShowAppHandCodeWashingSwitch);
      y(null);
      const s = y(0);
      qe(
        () => s.value,
        () => {
          let I = ue.gameTabList[s.value].codeType;
          if (I === $.codeType) return !1;
          ($.codeType = I), B();
        },
      );
      const l = y(!1),
        m = y(0),
        g = async () => {
          var F, T;
          if (v.codeWashAmount < 100) return;
          const I = await W(na($));
          ((F = I == null ? void 0 : I.data) == null
            ? void 0
            : F.rebateAmount) > 0 &&
            ((m.value =
              (T = I == null ? void 0 : I.data) == null
                ? void 0
                : T.rebateAmount),
            B(),
            (l.value = !0));
        },
        c = () => {
          l.value = !1;
        },
        d = () => {
          f.push({ name: "Laundry-LaundryRule" });
        },
        r = () => {
          f.push({ name: "Laundry-LaundryRecord" });
        },
        v = pe({
          codeWashAmount: 0,
          dayRebate: 0,
          totalRebate: 0,
          washRate: "",
          washList: [],
        }),
        $ = pe({ codeType: -1 });
      function S(I) {
        let F = "";
        return (
          ue.gameTabList.map((T) => {
            T.codeType == I && (F = T.name);
          }),
          F
        );
      }
      async function B() {
        const I = await W(aa($));
        I &&
          ((v.codeWashAmount = I.data.codeWashAmount),
          (v.dayRebate = I.data.dayRebate),
          (v.totalRebate = I.data.totalRebate),
          (v.washRate = I.data.washRate),
          (v.washList = I.data.washList));
      }
      return (
        re(() => {
          ue.gameTabList, _.getHomeSetting(), B();
        }),
        (I, F) => {
          const T = M("NavBar"),
            w = M("van-tab"),
            O = M("van-tabs"),
            L = M("van-button"),
            te = ee("throttle-click"),
            ae = ee("lazy");
          return (
            o(),
            i("div", d1, [
              C(
                T,
                {
                  title: a(n)("laundry"),
                  "left-arrow": "",
                  onClickLeft: F[0] || (F[0] = (Y) => a(f).go(-1)),
                },
                null,
                8,
                ["title"],
              ),
              e("div", null, [
                C(
                  O,
                  {
                    class: "tabBar",
                    active: s.value,
                    "onUpdate:active": F[1] || (F[1] = (Y) => (s.value = Y)),
                    type: "card",
                    color: "transparent",
                    background: "transparent",
                    ref: "tabsRef",
                    "swipe-threshold": 3,
                  },
                  {
                    default: P(() => [
                      (o(!0),
                      i(
                        N,
                        null,
                        z(
                          a(ue).gameTabList,
                          (Y, K) => (
                            o(),
                            de(
                              w,
                              { key: K },
                              {
                                title: P(() => [
                                  e(
                                    "div",
                                    {
                                      class: H([
                                        "tab_item",
                                        { tab_active: K === s.value },
                                      ]),
                                    },
                                    [
                                      e(
                                        "img",
                                        {
                                          src: a(x)(
                                            "home/AllGames",
                                            `${K === s.value ? Y.img + "Active" : Y.img}`,
                                          ),
                                        },
                                        null,
                                        8,
                                        c1,
                                      ),
                                      e("span", null, t(Y.name), 1),
                                    ],
                                    2,
                                  ),
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
                  8,
                  ["active"],
                ),
              ]),
              e("div", u1, [
                e("div", _1, [
                  e(
                    "div",
                    f1,
                    t(a(ue).gameTabList[s.value].name) +
                      "-" +
                      t(a(n)("washableSize")),
                    1,
                  ),
                  e("div", p1, t(a(n)("laundryTxt")), 1),
                  e("div", v1, [
                    e(
                      "img",
                      {
                        class: "wallet",
                        src: a(x)("main/Laundry", "wallet"),
                        alt: "",
                      },
                      null,
                      8,
                      h1,
                    ),
                    j(" " + t(v.codeWashAmount.toFixed(2) || 0), 1),
                  ]),
                  e("div", m1, t(a(n)("laundryTxt1")), 1),
                  e("div", g1, [
                    e("div", y1, [
                      A(
                        e(
                          "div",
                          null,
                          [
                            e("p", $1, t(a(n)("rebateToday")), 1),
                            e("span", C1, t(v.dayRebate || 0), 1),
                          ],
                          512,
                        ),
                        [[J, s.value == 0]],
                      ),
                      A(
                        e(
                          "div",
                          null,
                          [
                            e("p", b1, t(a(n)("laundryRate")), 1),
                            e("span", w1, t(v.washRate || 0) + "%", 1),
                          ],
                          512,
                        ),
                        [[J, s.value != 0]],
                      ),
                    ]),
                    e("div", k1, [
                      e("p", S1, t(a(n)("totalRebate")), 1),
                      e("span", x1, t(v.totalRebate || 0), 1),
                    ]),
                  ]),
                  e("div", B1, t(a(n)("laundryTxt2")), 1),
                  h.value
                    ? A(
                        (o(),
                        i(
                          "button",
                          {
                            key: 0,
                            class: H(
                              v.codeWashAmount >= 100 ? "btn active" : "btn",
                            ),
                          },
                          [j(t(a(n)("codeWashing")), 1)],
                          2,
                        )),
                        [[te, { handler: g, wait: 2e3 }]],
                      )
                    : Z("", !0),
                  A(
                    e(
                      "p",
                      { class: "rule", onClick: d },
                      [
                        j(t(a(n)("understandRules")), 1),
                        e(
                          "img",
                          {
                            class: "rule-img",
                            src: a(x)("main/Laundry", "ruleicon"),
                            alt: "",
                          },
                          null,
                          8,
                          A1,
                        ),
                      ],
                      512,
                    ),
                    [[J, !1]],
                  ),
                ]),
                e("div", L1, [
                  e("div", T1, t(a(n)("laundryRed")), 1),
                  v.washList
                    ? (o(),
                      i("div", I1, [
                        (o(!0),
                        i(
                          N,
                          null,
                          z(
                            v.washList || [],
                            (Y, K) => (
                              o(),
                              i("div", { class: "item", key: K }, [
                                e("div", M1, [
                                  e("div", D1, [
                                    e("p", N1, t(S(Y.codeType)), 1),
                                    e("span", O1, t(Y.addTime), 1),
                                  ]),
                                  e("div", R1, t(a(n)("laundrySuccess")), 1),
                                ]),
                                e("div", P1, [
                                  e("div", F1, [
                                    e("div", G1, [
                                      e(
                                        "img",
                                        {
                                          class: "img",
                                          src: a(x)("main/Laundry", "zs"),
                                          alt: "",
                                        },
                                        null,
                                        8,
                                        U1,
                                      ),
                                    ]),
                                    e("div", null, [
                                      e("p", null, t(a(n)("laundryAmount")), 1),
                                      e("p", null, t(a(n)("laundryRate")), 1),
                                      e("p", null, t(a(n)("rebateAmount")), 1),
                                    ]),
                                  ]),
                                  e("div", V1, [
                                    e("p", null, t(Y.washVolume), 1),
                                    e("p", E1, t(Y.washRate) + "%", 1),
                                    e("p", z1, t(Y.rebateAmount), 1),
                                  ]),
                                ]),
                              ])
                            ),
                          ),
                          128,
                        )),
                      ]))
                    : Z("", !0),
                  A(
                    (o(),
                    de(
                      L,
                      {
                        class: "all-record",
                        color: "#2b3270",
                        plain: "",
                        block: "",
                        round: "",
                        type: "primary",
                      },
                      { default: P(() => [j(t(a(n)("allRecords")), 1)]), _: 1 },
                    )),
                    [[te, { handler: r, wait: 2e3 }]],
                  ),
                ]),
              ]),
              C(
                Ue,
                {
                  show: l.value,
                  "onUpdate:show": F[2] || (F[2] = (Y) => (l.value = Y)),
                  onConfirm: c,
                  "show-cancel-btn": !1,
                  confirmText: a(n)("confirm"),
                  title: `${a(ue).gameTabList[s.value].name}-${a(n)("laundryAmount")}`,
                },
                {
                  header: P(() => [
                    A(e("img", j1, null, 512), [
                      [ae, a(x)("main/Laundry", "promptImg")],
                    ]),
                  ]),
                  content: P(() => [
                    e("div", Z1, [
                      e("div", H1, t(a(n)("codeWashingSuccess")), 1),
                      e("div", q1, [
                        j(t(a(n)("rebateAmount")) + ":", 1),
                        e("span", W1, t(m.value.toFixed(2)), 1),
                      ]),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["show", "confirmText", "title"],
              ),
            ])
          );
        }
      );
    },
  });
const Y1 = V(X1, [["__scopeId", "data-v-0e6c153c"]]),
  O3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Y1 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Ce = (b) => (ge("data-v-18778a3b"), (b = b()), ye(), b),
  K1 = { class: "coins-container" },
  Q1 = { class: "coins-container-header" },
  J1 = { class: "imgBanner", alt: "" },
  ed = ["src"],
  td = Ce(() =>
    e(
      "div",
      { class: "tip" },
      [e("div", null, "我的金币"), e("div", null, "88.888.8889")],
      -1,
    ),
  ),
  ad = { class: "coins-container-content" },
  nd = Ce(() =>
    e(
      "div",
      { class: "coins-container-content-desc" },
      [
        e("h2", null, [
          j("目前金币与"),
          e("span", null, "USDT(TRC20)"),
          j("的兑换比率为"),
        ]),
        e("h3", null, [
          e("span", null, "1"),
          j("金币="),
          e("span", null, "1"),
          j("USDT(TRC20)"),
        ]),
      ],
      -1,
    ),
  ),
  od = { class: "coins-container-content-vipcard" },
  sd = { class: "coins-container-content-vipcard-title" },
  ld = { alt: "" },
  id = Ce(() => e("h1", null, "VIP券兑换", -1)),
  rd = Ce(() => e("span", null, "对不起！您的VIP券不足。", -1)),
  dd = Ce(() => e("p", null, "兑换", -1)),
  cd = { alt: "" },
  ud = Ce(() => e("span", null, "8888.88", -1)),
  _d = { class: "coins-container-content-vipcard-coin" },
  fd = { alt: "" },
  pd = Ce(() =>
    e(
      "button",
      { class: "gainCoins" },
      [j("获取"), e("span", null, "金币")],
      -1,
    ),
  ),
  vd = { class: "coins-container-content-recordcard" },
  hd = { class: "coins-container-content-recordcard-title" },
  md = { alt: "" },
  gd = Ce(() => e("h1", { class: "ar-1px-b" }, "兑换记录", -1)),
  yd = { class: "coins-container-content-recordcard-items" },
  $d = { class: "ar-1px-b" },
  Cd = { alt: "" },
  bd = { alt: "" },
  wd = { alt: "" },
  kd = Ce(() => e("span", null, "888", -1)),
  Sd = { class: "succeed" },
  xd = Ce(() =>
    e("div", { class: "van-dialog__content-title" }, "兑换成功", -1),
  ),
  Bd = { class: "van-dialog__content-note" },
  Ad = Ce(() => e("h1", null, "获得", -1)),
  Ld = { alt: "" },
  Td = Ce(() => e("span", null, "8888.88", -1)),
  Id = E({
    __name: "index",
    setup(b) {
      const n = X();
      y();
      const f = y(!1);
      let _ = y("");
      function h() {
        _.value = "";
      }
      async function s() {
        f.value = !0;
      }
      async function u() {
        f.value = !1;
      }
      re(() => {});
      const l = [
          { num: 100, title: "金币" },
          { num: 100, title: "金币" },
          { num: 100, title: "金币" },
          { num: 100, title: "金币" },
          { num: 100, title: "金币" },
          { num: 100, title: "金币" },
        ],
        m = [
          { name: "VND", date: "2022-12-12", num: 888 },
          { name: "VND", date: "2022-12-12", num: 888 },
          { name: "VND", date: "2022-12-12", num: 888 },
          { name: "VND", date: "2022-12-12", num: 888 },
          { name: "VND", date: "2022-12-12", num: 888 },
        ];
      return (g, c) => {
        const d = M("NavBar"),
          r = M("van-dialog"),
          v = ee("lazy");
        return (
          o(),
          i("div", K1, [
            C(d, {
              title: "金币",
              "left-arrow": "",
              onClickLeft: c[0] || (c[0] = ($) => a(n).go(-1)),
            }),
            e("div", Q1, [
              A(e("img", J1, null, 512), [[v, a(x)("main", "MyCoinsBanner")]]),
              e(
                "img",
                { src: a(x)("main", "mycoins_bg"), class: "bg2" },
                null,
                8,
                ed,
              ),
              td,
            ]),
            e("div", ad, [
              nd,
              e("div", od, [
                e("div", sd, [
                  A(e("img", ld, null, 512), [
                    [v, a(x)("main", "privacyIcon")],
                  ]),
                  id,
                ]),
                e("h1", null, [
                  A(
                    e(
                      "input",
                      {
                        type: "number",
                        "onUpdate:modelValue":
                          c[1] ||
                          (c[1] = ($) => (Pe(_) ? (_.value = $) : (_ = $))),
                        placeholder: "兑换数量",
                      },
                      null,
                      512,
                    ),
                    [[Ve, a(_)]],
                  ),
                  rd,
                  A(
                    e(
                      "img",
                      {
                        class: "clearImg",
                        type: "number",
                        onClick: h,
                        alt: "",
                      },
                      null,
                      512,
                    ),
                    [[v, a(x)("main", "clearIcon")]],
                  ),
                ]),
                e("h2", null, [
                  dd,
                  e("div", null, [
                    A(e("img", cd, null, 512), [
                      [v, a(x)("main", "vaultSmallIcon")],
                    ]),
                    ud,
                  ]),
                ]),
                e("div", _d, [
                  (o(),
                  i(
                    N,
                    null,
                    z(l, ($) =>
                      e("div", null, [
                        e("h1", null, [
                          A(e("img", fd, null, 512), [
                            [v, a(x)("main", "myCoin")],
                          ]),
                          e("span", null, t($.num), 1),
                        ]),
                        e("p", null, t($.title), 1),
                      ]),
                    ),
                    64,
                  )),
                ]),
              ]),
              e("div", { class: "coins-container-content-btn" }, [
                e("button", { class: "redeem", onClick: s }, "兑换"),
                pd,
              ]),
              e("div", vd, [
                e("div", hd, [
                  A(e("img", md, null, 512), [
                    [v, a(x)("main", "privacyIcon")],
                  ]),
                  gd,
                ]),
                (o(),
                i(
                  N,
                  null,
                  z(m, ($) =>
                    e("div", yd, [
                      e("h1", null, [
                        j(" 金币兑换"),
                        e("span", null, t($.name), 1),
                      ]),
                      e("p", null, t($.date), 1),
                      e("div", $d, [
                        e("h2", null, [
                          A(e("img", Cd, null, 512), [
                            [v, a(x)("main", "myCoin")],
                          ]),
                          e("span", null, t($.num), 1),
                        ]),
                        A(e("img", bd, null, 512), [
                          [v, a(x)("main", "exchangeIcon")],
                        ]),
                        e("h2", null, [
                          A(e("img", wd, null, 512), [
                            [v, a(x)("main", "vaultSmallIcon")],
                          ]),
                          kd,
                        ]),
                      ]),
                    ]),
                  ),
                  64,
                )),
              ]),
            ]),
            C(
              r,
              {
                show: f.value,
                "onUpdate:show": c[2] || (c[2] = ($) => (f.value = $)),
                "show-confirm-button": !1,
                "z-index": "3100",
              },
              {
                default: P(() => [
                  A(e("img", Sd, null, 512), [
                    [v, a(x)("wallet/withdraw", "succeed")],
                  ]),
                  xd,
                  e("div", Bd, [
                    e("div", null, [
                      Ad,
                      e("h2", null, [
                        A(e("img", Ld, null, 512), [
                          [v, a(x)("main", "vaultSmallIcon")],
                        ]),
                        Td,
                      ]),
                    ]),
                  ]),
                  e(
                    "div",
                    { class: "van-dialog__content-btn", onClick: u },
                    "确认",
                  ),
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
const Md = V(Id, [["__scopeId", "data-v-18778a3b"]]),
  R3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Md },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Dd = { class: "myCps" },
  Nd = { class: "head" },
  Od = { class: "time" },
  Rd = { class: "foot" },
  Pd = { class: "amount" },
  Fd = E({
    __name: "index",
    setup(b) {
      const n = X(),
        f = y([]);
      function _(h) {
        n.push({
          name: "Championship-ChampionshipDetail",
          query: { championId: h },
        });
      }
      return (h, s) => {
        const u = M("NavBar");
        return (
          o(),
          i("div", Dd, [
            C(
              u,
              {
                title: h.$t("cpsTip6"),
                "left-arrow": "",
                onClickLeft: s[0] || (s[0] = () => a(n).back()),
              },
              null,
              8,
              ["title"],
            ),
            C(
              nt,
              {
                list: f.value,
                "onUpdate:list": s[1] || (s[1] = (l) => (f.value = l)),
                api: a(sa),
                distance: 100,
                ref: "listRef",
                "is-auto-load": !0,
              },
              {
                content: P(() => [
                  (o(!0),
                  i(
                    N,
                    null,
                    z(
                      f.value,
                      (l) => (
                        o(),
                        de(
                          oa,
                          {
                            itemD: l,
                            key: l == null ? void 0 : l.id,
                            onClick: (m) => _(l.id),
                          },
                          {
                            content: P(() => [
                              e("div", Nd, [
                                e("h1", null, t(h.$t("cpsTip7")), 1),
                                e("div", Od, [
                                  e("span", null, t(l.ranking), 1),
                                ]),
                              ]),
                              e("div", Rd, [
                                e("h1", null, t(h.$t("winTips5")), 1),
                                e(
                                  "div",
                                  Pd,
                                  t(
                                    a(D)(
                                      (l == null ? void 0 : l.sumBonus) || 0,
                                    ),
                                  ),
                                  1,
                                ),
                              ]),
                            ]),
                            footer: P(() => [
                              e(
                                "div",
                                { class: H(["state", `state${l.bonusState}`]) },
                                t(
                                  l.bonusState == 1
                                    ? h.$t("cpsTip23")
                                    : h.$t("cpsTip24"),
                                ),
                                3,
                              ),
                            ]),
                            _: 2,
                          },
                          1032,
                          ["itemD", "onClick"],
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
                _: 1,
              },
              8,
              ["list", "api"],
            ),
          ])
        );
      };
    },
  });
const Gd = V(Fd, [["__scopeId", "data-v-6ef74b27"]]),
  P3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Gd },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Ud = { class: "notification-container" },
  Vd = { class: "notification-container-content-title" },
  Ed = { class: "notification-container-content-detail" },
  zd = E({
    __name: "index",
    setup(b) {
      const n = X(),
        f = y({ list: [], pageNo: 0, totalPage: 0, totalCount: 0 }),
        _ = y();
      return (h, s) => {
        const u = M("NavBar");
        return (
          o(),
          i("div", Ud, [
            C(
              u,
              {
                title: h.$t("notification"),
                "left-arrow": "",
                onClickLeft: s[0] || (s[0] = (l) => a(n).go(-1)),
              },
              null,
              8,
              ["title"],
            ),
            C(
              Ze,
              {
                class: "sysMessage__container-msgWrapper",
                list: f.value.list,
                "onUpdate:list": s[1] || (s[1] = (l) => (f.value.list = l)),
                "page-query": {},
                isAutoLoad: !0,
                api: a(la),
                distance: 250,
                ref_key: "listRef",
                ref: _,
              },
              {
                content: P(() => [
                  (o(!0),
                  i(
                    N,
                    null,
                    z(
                      f.value.list,
                      (l) => (
                        o(),
                        i(
                          "div",
                          {
                            class: "notification-container-content",
                            key: l.title,
                          },
                          [
                            e("div", Vd, [e("span", null, t(l.title), 1)]),
                            e("div", Ed, t(l.siteMessage), 1),
                            e("h5", null, t(l.addtime), 1),
                          ],
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
                _: 1,
              },
              8,
              ["list", "api"],
            ),
          ])
        );
      };
    },
  });
const jd = V(zd, [["__scopeId", "data-v-70e38c3e"]]),
  F3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: jd },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Zd = {};
function Hd(b, n) {
  return o(), i("div");
}
const qd = V(Zd, [["render", Hd]]),
  G3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: qd },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Wd = { class: "redeem-container" },
  Xd = { class: "redeem-container-header" },
  Yd = { class: "redeem-container-header-belly" },
  Kd = { alt: "" },
  Qd = { class: "redeem-container-content" },
  Jd = { class: "redeem-container-receive" },
  ec = ["placeholder"],
  tc = { key: 0 },
  ac = { class: "redeem-container-record" },
  nc = { class: "redeem-container-record-title" },
  oc = ["src"],
  sc = { class: "redeem-container-record-itemsBox" },
  lc = { class: "redeem-container-record-item ar-1px-b" },
  ic = { class: "redeem-container-record-item-left" },
  rc = { class: "redeem-container-record-item-right" },
  dc = ["src"],
  cc = E({
    __name: "index",
    setup(b) {
      const { t: n } = oe(),
        f = y(!1),
        _ = X(),
        h = St(),
        s = y(h.query.hbcode || ""),
        u = y(!0),
        l = pe({ pageSize: 10, pageNo: 1, startDate: null, endDate: null }),
        m = y({ list: [], pageNo: 0, totalPage: 0, totalCount: 0 }),
        g = async () => {
          if (s.value.trim() === "") {
            Fa({ message: n("tipPlsEnterCode") });
            return;
          }
          (await W(ia({ giftCode: s.value }))) &&
            (xe(n("redeemDialogDesc1")), c());
        },
        c = async () => {
          const d = await W(it(l));
          d && (m.value.list = d == null ? void 0 : d.data.list);
        };
      return (d, r) => {
        const v = M("NavBar"),
          $ = ee("lazy");
        return (
          o(),
          i("div", Wd, [
            e("div", Xd, [
              C(
                v,
                {
                  title: d.$t("gift"),
                  backgroundColor:
                    "linear-gradient(90deg, #2b3270 0%, #D9AD82 100%)",
                  "left-arrow": "",
                  onClickLeft: r[0] || (r[0] = (S) => a(_).go(-1)),
                },
                null,
                8,
                ["title", "backgroundColor"],
              ),
              e("div", Yd, [
                A(e("img", Kd, null, 512), [[$, a(x)("main", "gift")]]),
              ]),
            ]),
            e("div", Qd, [
              e("div", Jd, [
                e("p", null, t(d.$t("tipHelloVIP")), 1),
                e("p", null, t(d.$t("tipWepreparedGift4u")), 1),
                e("h4", null, t(d.$t("tipPlsEnterRedeemCode")), 1),
                A(
                  e(
                    "input",
                    {
                      type: "text",
                      "auto-complete": "new-password",
                      autocomplete: "off",
                      placeholder: d.$t("tipPlsEnterCode"),
                      "onUpdate:modelValue":
                        r[1] || (r[1] = (S) => (s.value = S)),
                    },
                    null,
                    8,
                    ec,
                  ),
                  [[Ve, s.value]],
                ),
                f.value
                  ? (o(), i("h5", tc, t(d.$t("tipPlsBindBankcard")), 1))
                  : Z("", !0),
                e(
                  "button",
                  { onClick: r[2] || (r[2] = (S) => g()) },
                  t(d.$t("receive")),
                  1,
                ),
              ]),
              e("div", ac, [
                e("div", nc, [
                  e("img", { src: a(x)("main", "gRecord") }, null, 8, oc),
                  e("span", null, t(d.$t("record")), 1),
                ]),
                e("div", sc, [
                  C(
                    Ze,
                    {
                      list: m.value.list,
                      "onUpdate:list":
                        r[3] || (r[3] = (S) => (m.value.list = S)),
                      "page-query": l,
                      "onUpdate:pageQuery": r[4] || (r[4] = (S) => (l = S)),
                      api: a(it),
                      distance: 20,
                      isAutoLoad: u.value,
                    },
                    {
                      content: P(() => [
                        (o(!0),
                        i(
                          N,
                          null,
                          z(
                            m.value.list,
                            (S) => (
                              o(),
                              i(
                                "div",
                                {
                                  class: "redeem-container-record-items",
                                  key: S.reserved,
                                },
                                [
                                  e("div", lc, [
                                    e("div", ic, [
                                      e(
                                        "h5",
                                        null,
                                        t(d.$t("receiveSuccess")),
                                        1,
                                      ),
                                      e("span", null, t(S.addTime), 1),
                                    ]),
                                    e("div", rc, [
                                      e(
                                        "img",
                                        { src: a(x)("main", "giftFolder") },
                                        null,
                                        8,
                                        dc,
                                      ),
                                      e("span", null, t(S.amount), 1),
                                    ]),
                                  ]),
                                ],
                              )
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
                ]),
              ]),
            ]),
          ])
        );
      };
    },
  });
const uc = V(cc, [["__scopeId", "data-v-38c131f8"]]),
  U3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: uc },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  _c = (b) => (ge("data-v-89bc76d1"), (b = b()), ye(), b),
  fc = { class: "content setting-wrapper" },
  pc = { class: "setting-items-wrapper" },
  vc = { class: "content-sub_title" },
  hc = { class: "phone_container" },
  mc = { class: "phone_container-item-left" },
  gc = ["src"],
  yc = { class: "phone_container-item-right" },
  $c = { class: "setting_container" },
  Cc = { key: 0, class: "phone_container-item-left" },
  bc = ["src"],
  wc = { key: 1, class: "phone_container-item-left" },
  kc = ["src"],
  Sc = { key: 2, class: "phone_container-item-right" },
  xc = { key: 3, class: "phone_container-item-right" },
  Bc = { key: 0, class: "phoneright" },
  Ac = { key: 1, class: "phoneright" },
  Lc = { key: 0, class: "phone_container-item-left" },
  Tc = ["src"],
  Ic = { key: 1, class: "phone_container-item-left" },
  Mc = ["src"],
  Dc = { key: 2, class: "phone_container-item-right" },
  Nc = { key: 0, class: "emailright" },
  Oc = { key: 1, class: "emailright" },
  Rc = { key: 3, class: "phone_container-item-right" },
  Pc = ["src"],
  Fc = { key: 0, class: "green" },
  Gc = { key: 1 },
  Uc = { class: "setting_container_item ar-1px-b" },
  Vc = ["src"],
  Ec = _c(() => e("h5", null, "1.0.9", -1)),
  zc = ["src"],
  jc = { class: "idlockTip" },
  Zc = E({
    __name: "index",
    setup(b) {
      const { t: n } = oe(),
        f = Ga(ra, 500),
        _ = X(),
        h = Ie(),
        s = $e();
      h.getUserInfo({ signature: s.token });
      const u = s.getUserInfo,
        l = y(!1);
      function m() {
        localStorage.setItem("toPath", "ResetPassword"),
          _.push({ name: "SettingCenter-LoginPassword" });
      }
      const g = he(() => {
          var T;
          return (T = u == null ? void 0 : u.verifyMethods) == null
            ? void 0
            : T.email;
        }),
        c = he(() => {
          var T;
          return (T = u == null ? void 0 : u.verifyMethods) == null
            ? void 0
            : T.mobile;
        }),
        d = !!u.googleVerify,
        r = y(!1),
        v = () => {
          u.googleVerify === 1
            ? (r.value = !0)
            : _.push({ name: "GoogleVerify" });
        },
        $ = (T) => {
          S(T);
        },
        S = async (T) => {
          var O, L;
          const w = await W(gt({ verifyCode: T, verifyType: 3 }));
          (O = w == null ? void 0 : w.data) != null &&
            O.secret &&
            _.push({
              name: "GoogleVerify-BindGoogle",
              query: {
                secret: (L = w.data) == null ? void 0 : L.secret,
                type: 1,
              },
            });
        },
        B = y(!1),
        I = () => {
          B.value = !0;
        },
        F = async () => {
          (await W(da())).code == 0 &&
            ((B.value = !1), xe(n("delete") + n("success")));
        };
      return (T, w) => {
        var ae, Y, K, G, U, ce, ie, se, le, Q;
        const O = M("van-icon"),
          L = M("van-button"),
          te = ee("haspermission");
        return (
          o(),
          i(
            N,
            null,
            [
              C(Tt, { userInfo: a(u) }, null, 8, ["userInfo"]),
              e("div", fc, [
                e("div", pc, [
                  e("div", vc, [e("div", null, t(a(n)("securityInfo")), 1)]),
                  e("div", hc, [
                    e("div", { class: "phone_container-item", onClick: m }, [
                      e("div", mc, [
                        e(
                          "img",
                          { src: a(x)("main", "editPswIcon") },
                          null,
                          8,
                          gc,
                        ),
                        e("span", null, t(a(n)("loginPSW")), 1),
                      ]),
                      e("div", yc, [
                        e("span", null, t(a(n)("edit")), 1),
                        C(O, { name: "arrow", color: "#888" }),
                      ]),
                    ]),
                  ]),
                  e("div", $c, [
                    ((ae = a(u)) == null ? void 0 : ae.regType) == 2
                      ? (o(),
                        i(
                          "div",
                          {
                            key: 0,
                            class:
                              "phone_container-item setting_container_item ar-1px-b",
                            onClick:
                              w[0] ||
                              (w[0] = (q) =>
                                a(_).push({
                                  name: "SettingCenter-UpdatePhone",
                                })),
                          },
                          [
                            c.value == ""
                              ? (o(),
                                i("div", Cc, [
                                  e(
                                    "img",
                                    { src: a(x)("main", "editPhoneIcon") },
                                    null,
                                    8,
                                    bc,
                                  ),
                                  e("span", null, t(a(n)("bindPhone")), 1),
                                ]))
                              : Z("", !0),
                            c.value != ""
                              ? (o(),
                                i("div", wc, [
                                  e(
                                    "img",
                                    { src: a(x)("main", "editPhoneIcon") },
                                    null,
                                    8,
                                    kc,
                                  ),
                                  e("span", null, t(a(n)("changephone")), 1),
                                ]))
                              : Z("", !0),
                            c.value != ""
                              ? (o(),
                                i("div", Sc, [
                                  e(
                                    "span",
                                    null,
                                    t(
                                      a(yt)(
                                        (K =
                                          (Y = a(u)) == null
                                            ? void 0
                                            : Y.verifyMethods) == null
                                          ? void 0
                                          : K.mobile,
                                      ),
                                    ),
                                    1,
                                  ),
                                  C(O, { name: "arrow", color: "#888" }),
                                ]))
                              : Z("", !0),
                            c.value == ""
                              ? (o(),
                                i("div", xc, [
                                  ((G = a(u)) == null ? void 0 : G.bindReward) >
                                  0
                                    ? (o(),
                                      i("div", Bc, [
                                        e("div", null, t(a(n)("award")), 1),
                                        e(
                                          "div",
                                          null,
                                          t(
                                            a(D)(
                                              (U = a(u)) == null
                                                ? void 0
                                                : U.bindReward,
                                            ),
                                          ),
                                          1,
                                        ),
                                      ]))
                                    : (o(),
                                      i("div", Ac, [
                                        e("div", null, t(a(n)("tobind")), 1),
                                      ])),
                                  C(O, { name: "arrow", color: "#888" }),
                                ]))
                              : Z("", !0),
                          ],
                        ))
                      : Z("", !0),
                    ((ce = a(u)) == null ? void 0 : ce.regType) == 1
                      ? (o(),
                        i(
                          "div",
                          {
                            key: 1,
                            class:
                              "phone_container-item setting_container_item",
                            onClick:
                              w[1] ||
                              (w[1] = (q) =>
                                a(_).push({ name: "SettingCenter-BindEmail" })),
                          },
                          [
                            g.value == ""
                              ? (o(),
                                i("div", Lc, [
                                  e(
                                    "img",
                                    { src: a(x)("main", "EmailIcon") },
                                    null,
                                    8,
                                    Tc,
                                  ),
                                  e("span", null, t(a(n)("bindEmail")), 1),
                                ]))
                              : Z("", !0),
                            g.value != ""
                              ? (o(),
                                i("div", Ic, [
                                  e(
                                    "img",
                                    { src: a(x)("main", "EmailIcon") },
                                    null,
                                    8,
                                    Mc,
                                  ),
                                  e("span", null, t(a(n)("email")), 1),
                                ]))
                              : Z("", !0),
                            g.value == ""
                              ? (o(),
                                i("div", Dc, [
                                  ((ie = a(u)) == null
                                    ? void 0
                                    : ie.bindReward) > 0
                                    ? (o(),
                                      i("div", Nc, [
                                        e("div", null, t(a(n)("award")), 1),
                                        e(
                                          "div",
                                          null,
                                          t(
                                            a(D)(
                                              (se = a(u)) == null
                                                ? void 0
                                                : se.bindReward,
                                            ),
                                          ),
                                          1,
                                        ),
                                      ]))
                                    : (o(),
                                      i("div", Oc, [
                                        e("div", null, t(a(n)("tobind")), 1),
                                      ])),
                                  C(O, { name: "arrow", color: "#888" }),
                                ]))
                              : Z("", !0),
                            g.value != ""
                              ? (o(),
                                i("div", Rc, [
                                  e(
                                    "span",
                                    null,
                                    t(
                                      a($t)(
                                        (Q =
                                          (le = a(u)) == null
                                            ? void 0
                                            : le.verifyMethods) == null
                                          ? void 0
                                          : Q.email,
                                      ),
                                    ),
                                    1,
                                  ),
                                  C(O, { name: "arrow", color: "#888" }),
                                ]))
                              : Z("", !0),
                          ],
                        ))
                      : Z("", !0),
                    A(
                      e(
                        "div",
                        {
                          class: "setting_container_item ar-1px-b",
                          onClick: v,
                        },
                        [
                          e("div", null, [
                            e(
                              "img",
                              { src: a(x)("main", "googleValidation") },
                              null,
                              8,
                              Pc,
                            ),
                            e("span", null, t(a(n)("googleVerify")), 1),
                          ]),
                          e("div", null, [
                            a(d)
                              ? (o(), i("span", Fc, t(a(n)("turnedOn")), 1))
                              : (o(), i("span", Gc, t(a(n)("unopened")), 1)),
                            C(O, { name: "arrow", color: "#888" }),
                          ]),
                        ],
                        512,
                      ),
                      [[J, a(u).isGoogle === "1"]],
                    ),
                    e("div", Uc, [
                      e("div", null, [
                        e(
                          "img",
                          { src: a(x)("main", "versionUpdate") },
                          null,
                          8,
                          Vc,
                        ),
                        e("span", null, t(a(n)("updateNewVersion")), 1),
                      ]),
                      e("div", null, [
                        Ec,
                        C(O, { name: "arrow", color: "#888" }),
                      ]),
                    ]),
                  ]),
                  l.value
                    ? (o(),
                      de(
                        L,
                        {
                          key: 0,
                          class: "cg-default",
                          block: "",
                          round: "",
                          size: "large",
                          color:
                            "linear-gradient(180deg, #D9AD82 0%, #2b3270 100%)",
                          onClick: a(f),
                        },
                        {
                          icon: P(() => [
                            e(
                              "img",
                              { src: a(x)("main", "clear") },
                              null,
                              8,
                              zc,
                            ),
                          ]),
                          default: P(() => [j(" " + t(a(n)("clearcache")), 1)]),
                          _: 1,
                        },
                        8,
                        ["onClick"],
                      ))
                    : Z("", !0),
                ]),
              ]),
              A(
                (o(),
                i("div", { class: "delAllRq", onClick: I }, [
                  j(t(a(n)("delAllBtn")), 1),
                ])),
                [[te, 19]],
              ),
              C(
                Bt,
                {
                  showPopup: r.value,
                  onOnConfirm: $,
                  onOnBack: w[2] || (w[2] = (q) => (r.value = !1)),
                },
                null,
                8,
                ["showPopup"],
              ),
              C(
                Ue,
                {
                  show: B.value,
                  "onUpdate:show": w[4] || (w[4] = (q) => (B.value = q)),
                  "show-cancel-btn": !0,
                  title: a(n)("delAllTip1"),
                },
                {
                  content: P(() => [e("div", jc, t(a(n)("delAllTip2")), 1)]),
                  footer: P(() => [
                    e(
                      "div",
                      { class: "dialogBtn", onClick: F },
                      t(a(n)("confirmDelete")),
                      1,
                    ),
                    e(
                      "div",
                      {
                        class: "dialogBtn",
                        onClick: w[3] || (w[3] = (q) => (B.value = !1)),
                      },
                      t(a(n)("cancel")),
                      1,
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["show", "title"],
              ),
            ],
            64,
          )
        );
      };
    },
  });
const Hc = V(Zc, [["__scopeId", "data-v-89bc76d1"]]),
  V3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Hc },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  qc = { class: "TotalAssets__container" },
  Wc = { class: "TotalAssets__container-header" },
  Xc = { class: "TotalAssets__container-header__left" },
  Yc = { alt: "" },
  Kc = { class: "TotalAssets__container-header__right" },
  Qc = { alt: "" },
  Jc = { class: "TotalAssets__container-main" },
  eu = { class: "TotalAssets__container-tip" },
  tu = E({
    __name: "index",
    props: { safeAmount: { type: String, default: "0" } },
    setup(b) {
      const n = b;
      return (f, _) => {
        const h = ee("lazy");
        return (
          o(),
          i("div", qc, [
            e("div", Wc, [
              e("div", Xc, [
                A(e("img", Yc, null, 512), [[h, a(x)("main", "vault")]]),
                j(" " + t(f.$t("totalAmount")), 1),
              ]),
              e("div", Kc, [
                A(e("img", Qc, null, 512), [[h, a(x)("main", "Subtract")]]),
                j(" " + t(f.$t("fundSafety")), 1),
              ]),
            ]),
            e("div", Jc, t(a(D)(n.safeAmount || 0)), 1),
            e("div", eu, t(f.$t("descTotalAssets")), 1),
          ])
        );
      };
    },
  });
const au = V(tu, [["__scopeId", "data-v-c1b8e11c"]]),
  nu = { class: "StrongBoxRecordCard__container" },
  ou = { class: "StrongBoxRecordCard__container-buttom" },
  su = { class: "StrongBoxRecordCard__container-num" },
  lu = { class: "StrongBoxRecordCard__container-rale" },
  iu = { class: "StrongBoxRecordCard__container-rale" },
  ru = { class: "StrongBoxRecordCard__container-rale-num" },
  du = { class: "StrongBoxRecordCard__container-last" },
  cu = E({
    __name: "index",
    props: {
      detail: {
        type: Object,
        default: {
          Type: 18,
          DayShareRate: 0.1,
          Amount: 5e4,
          Earnings: 5e3,
          OrderNum: "20221115123456789",
          AddTime: "2022/08/24",
        },
      },
    },
    setup(b) {
      const n = b;
      return (f, _) => (
        o(),
        i("div", nu, [
          e(
            "div",
            {
              class: H([
                "StrongBoxRecordCard__container-first",
                { transferIn: n.detail.type == 18 },
              ]),
            },
            [
              e(
                "div",
                ou,
                t(
                  n.detail.type == 18
                    ? f.$t("transferIn")
                    : f.$t("transferOut"),
                ),
                1,
              ),
              e(
                "div",
                su,
                t(n.detail.type == 18 ? "+" : "-") + t(a(D)(n.detail.amount)),
                1,
              ),
            ],
            2,
          ),
          e("div", lu, [
            e("span", null, t(f.$t("dailyRate")), 1),
            e(
              "span",
              null,
              t((n.detail.dayShareRate * 100).toFixed(2)) + "%",
              1,
            ),
          ]),
          e("div", iu, [
            e("span", null, t(f.$t("settlementIncome")), 1),
            e("span", ru, t(a(D)(n.detail.earnings)), 1),
          ]),
          e("div", du, [
            e("span", null, t(n.detail.orderNum), 1),
            e("span", null, t(n.detail.addTime), 1),
          ]),
        ])
      );
    },
  });
const Mt = V(cu, [["__scopeId", "data-v-34482612"]]),
  uu = (b) => (ge("data-v-f25c04d8"), (b = b()), ye(), b),
  _u = { class: "StrongBox__container" },
  fu = { class: "StrongBox__container-dailyRate" },
  pu = { class: "StrongBox__container-income" },
  vu = { class: "StrongBox__container-income-header" },
  hu = { class: "StrongBox__container-income-header-left" },
  mu = { class: "StrongBox__container-income-header-left-num" },
  gu = { class: "StrongBox__container-income-header-left-text" },
  yu = { class: "StrongBox__container-income-header-left-myrale" },
  $u = { class: "StrongBox__container-income-header-right" },
  Cu = { class: "StrongBox__container-income-header-right-num" },
  bu = { class: "StrongBox__container-income-header-right-text" },
  wu = { class: "StrongBox__container-income-buttom" },
  ku = { class: "StrongBox__container-income-tip" },
  Su = ["src"],
  xu = { class: "StrongBox__container-record" },
  Bu = { alt: "" },
  Au = { class: "tipText" },
  Lu = { class: "popup__header" },
  Tu = { class: "popup__amount" },
  Iu = { class: "popup__container" },
  Mu = { class: "popup__container-slider" },
  Du = uu(() =>
    e("div", { class: "popup__container-slider-button" }, null, -1),
  ),
  Nu = { class: "popup__container-slider-foot" },
  Ou = { class: "popup__container-numLine" },
  Ru = { class: "popup__container-numLine-num" },
  Pu = { class: "popup__container-numLine" },
  Fu = { class: "popup__container-numLine-num red" },
  Gu = { class: "popup__container-numLine" },
  Uu = { class: "popup__container-numLine-num" },
  Vu = { class: "popup__container-numLine" },
  Eu = { class: "popup__container-numLine-num red" },
  zu = { class: "popup__header" },
  ju = { class: "popup__amount" },
  Zu = { class: "popup__container" },
  Hu = { key: 0, class: "popup__container-errorTip" },
  qu = { class: "popup__container-multiple" },
  Wu = ["onClick"],
  Xu = { class: "popup__container-numLine" },
  Yu = { class: "popup__container-numLine-num" },
  Ku = { key: 1, class: "betTip" },
  Qu = { class: "popup__container-numLine" },
  Ju = { class: "popup__container-numLine-num red" },
  e2 = E({
    __name: "index",
    setup(b) {
      const { t: n } = oe(),
        f = Ua(() =>
          pa(
            () => import("./errorTip-ac53aeb7.js"),
            [
              "assets/js/errorTip-ac53aeb7.js",
              "assets/js/page-activity-6d456111.js",
              "assets/js/modules-aa8ffe67.js",
              "assets/css/modules-8b01ca49.css",
              "assets/js/native/index-3d731397.js",
              "assets/js/en-53bf8069.js",
              "assets/js/rus-ecb14220.js",
              "assets/js/vi-60d1c3eb.js",
              "assets/js/id-16b6cb52.js",
              "assets/js/hd-c5b1d7e8.js",
              "assets/js/tha-330057b2.js",
              "assets/js/md-e8a5e3b0.js",
              "assets/js/bra-38f5b166.js",
              "assets/js/my-32fb9d60.js",
              "assets/js/bdt-d8f19d0c.js",
              "assets/js/zh-7d334abd.js",
              "assets/js/pak-dbcb2394.js",
              "assets/js/ar-78aaffbf.js",
              "assets/css/page-activity-9da3f4e3.css",
            ],
          ),
        ),
        _ = X(),
        h = y(!1),
        s = y(!1),
        u = y(!1),
        l = y(0),
        m = y(0),
        g = y("0"),
        c = y("0"),
        d = y("0"),
        r = y(0),
        v = y(1),
        $ = y(0),
        S = y([]),
        B = y({ balance: 0, dayShareRate: 0, safeEarnings: "0" }),
        I = y(0),
        F = y(0),
        T = y(0),
        w = y(-1),
        O = [2, 5, 10, 50, 100, 200, 500, 1e3],
        L = y(2),
        te = he(() =>
          B.value.balance && r.value
            ? Math.floor(B.value.balance / r.value)
            : 0,
        ),
        ae = he(() => (te.value ? 1 : 0)),
        Y = async () => {
          const k = await W(wt());
          k &&
            ((l.value = k.data.dayShareRate || 0),
            (g.value = k.data.safeAmount),
            (c.value = k.data.safeEarnings),
            (d.value = k.data.safeTotalAmount),
            (r.value = k.data.shareAmount),
            (v.value = k.data.shareTime),
            (m.value = k.data.userDayShareRate || 0));
        },
        K = async () => {
          const k = await W(ca({ pageSize: 10, pageNo: 1 }));
          k && (S.value = k.data.list);
        },
        G = async () => {
          const k = await W(ua());
          k && ((B.value = k.data), (F.value = ae.value));
        },
        U = async () => {
          if (T.value < 1) {
            Fe(n("amountAvaliableInsufficient"));
            return;
          }
          (await W(va({ amount: T.value }))) &&
            ((s.value = !1), Fe(n("code0")), Y(), K());
        },
        ce = async () => {
          (await W(fa({ amount: L.value * r.value }))) &&
            (Fe(n("code0")), (u.value = !1), Y(), K());
        },
        ie = async () => {
          const k = await W(_a());
          k &&
            ((I.value = Number(k.data.balance)),
            ($.value = k.data.amountOfCode));
        },
        se = (k) => {
          (w.value = -1), k ? (T.value = parseInt(k) * r.value) : (T.value = 0);
        },
        le = () => {
          L.value = Number(Math.floor(I.value / r.value));
        },
        Q = () => {
          F.value && U();
        };
      function q() {
        _.go(-1);
      }
      function me() {
        G(), (h.value = !1), (s.value = !0);
      }
      const ne = (k) => {
          _.push({ name: k });
        },
        Te = (k) => {
          Number(k) > 0 ? (G(), (s.value = !0)) : (h.value = !0);
        },
        Xe = () => {
          (u.value = !0), ie();
        };
      return (
        re(async () => {
          Y(), K();
        }),
        (k, R) => {
          const fe = M("NavBar"),
            be = M("van-field"),
            Be = M("van-slider"),
            Me = M("van-popup"),
            Ye = ee("lazy"),
            Ee = ee("throttle-click");
          return (
            o(),
            i("div", _u, [
              C(
                fe,
                {
                  title: a(n)("vault"),
                  placeholder: !1,
                  "left-arrow": "",
                  onClickLeft: q,
                },
                null,
                8,
                ["title"],
              ),
              e(
                "div",
                fu,
                t(
                  a(n)("dailyRate1percent", [
                    (l.value && a(je)(l.value * 100, 2, 2)) + "%",
                  ]),
                ),
                1,
              ),
              C(au, { safeAmount: g.value }, null, 8, ["safeAmount"]),
              e("div", pu, [
                e("div", vu, [
                  e("div", hu, [
                    e("div", mu, t(a(D)(c.value || 0)), 1),
                    e("div", gu, t(a(n)("generatedRevenue")), 1),
                    e(
                      "div",
                      yu,
                      t(
                        a(n)("tipMyrate1percent", [
                          (m.value ? a(je)(m.value * 100, 2, 1) : 0) + "%",
                        ]),
                      ),
                      1,
                    ),
                  ]),
                  e("div", $u, [
                    e("div", Cu, t(a(D)(d.value || 0)), 1),
                    e("div", bu, t(a(n)("cumulativeRevenue")), 1),
                  ]),
                ]),
                e("div", wu, [
                  e(
                    "div",
                    { onClick: R[0] || (R[0] = (p) => Te(c.value)) },
                    t(a(n)("transferOut")),
                    1,
                  ),
                  e("div", { onClick: Xe }, t(a(n)("transferIn")), 1),
                ]),
                e("div", ku, [
                  C(a(f), { class: "StrongBox__container-errorTip" }),
                  j(" " + t(a(n)("tipFundEnsuredNtransferOutfreely")), 1),
                ]),
                e(
                  "div",
                  {
                    class: "StrongBox__container-income-godetail",
                    onClick:
                      R[1] || (R[1] = (p) => ne("StrongBox-StrongBoxAbout")),
                  },
                  [
                    j(t(a(n)("learnAboutVault")) + " ", 1),
                    e(
                      "img",
                      { src: a(x)("main", "nextIcon"), alt: "" },
                      null,
                      8,
                      Su,
                    ),
                  ],
                ),
              ]),
              e("div", xu, [
                A(e("img", Bu, null, 512), [[Ye, a(x)("main", "recordIcon")]]),
                j(" " + t(a(n)("historyRecourds")), 1),
              ]),
              (o(!0),
              i(
                N,
                null,
                z(
                  S.value,
                  (p, we) => (
                    o(),
                    de(
                      Mt,
                      {
                        class: "StrongBox__container-record-card",
                        key: we,
                        detail: p,
                      },
                      null,
                      8,
                      ["detail"],
                    )
                  ),
                ),
                128,
              )),
              e(
                "div",
                {
                  class: "StrongBox__container-allRecord",
                  onClick:
                    R[2] || (R[2] = (p) => ne("StrongBox-StrongBoxRecord")),
                },
                t(a(n)("allRecords")),
                1,
              ),
              C(
                Ue,
                {
                  show: h.value,
                  "onUpdate:show": R[3] || (R[3] = (p) => (h.value = p)),
                  onConfirm: me,
                  "show-cancel-btn": !0,
                  title: a(n)("noRevenue"),
                  confirmText: a(n)("transferOut"),
                },
                {
                  content: P(() => [
                    e(
                      "div",
                      Au,
                      t(a(n)("tipNoIncomeYetWeatherTransferout")),
                      1,
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["show", "title", "confirmText"],
              ),
              C(
                Me,
                {
                  show: s.value,
                  "onUpdate:show": R[8] || (R[8] = (p) => (s.value = p)),
                  round: "",
                  position: "bottom",
                  class: "popupStyle",
                },
                {
                  default: P(() => [
                    e("div", Lu, t(a(n)("transferOut")), 1),
                    e("div", Tu, [
                      e("div", null, t(a(n)("amountUnit")), 1),
                      e("div", null, t(r.value), 1),
                    ]),
                    e("div", Iu, [
                      C(
                        be,
                        {
                          class: "popup__container-input",
                          maxlength: "6",
                          modelValue: F.value,
                          "onUpdate:modelValue": [
                            R[4] || (R[4] = (p) => (F.value = p)),
                            se,
                          ],
                          clearable: "",
                          type: "digit",
                          placeholder: a(n)("plsEnterQuantity"),
                          "clear-icon": "close",
                          "clear-trigger": "always",
                        },
                        null,
                        8,
                        ["modelValue", "placeholder"],
                      ),
                      e("div", Mu, [
                        C(
                          Be,
                          {
                            modelValue: F.value,
                            "onUpdate:modelValue":
                              R[5] || (R[5] = (p) => (F.value = p)),
                            "bar-height": "7px",
                            "button-size": "18px",
                            "active-color": "#2b3270",
                            min: ae.value,
                            max: te.value,
                            "inactive-color": "#E3C29F",
                          },
                          { button: P(() => [Du]), _: 1 },
                          8,
                          ["modelValue", "min", "max"],
                        ),
                        e("div", Nu, [
                          e(
                            "div",
                            {
                              onClick:
                                R[6] || (R[6] = (p) => (F.value = ae.value)),
                            },
                            t(ae.value),
                            1,
                          ),
                          e(
                            "div",
                            {
                              onClick:
                                R[7] || (R[7] = (p) => (F.value = te.value)),
                            },
                            t(te.value),
                            1,
                          ),
                        ]),
                      ]),
                      e("div", Ou, [
                        e("div", null, t(a(n)("amountAvaliable")), 1),
                        e("div", Ru, t(a(D)(B.value.balance)), 1),
                      ]),
                      e("div", Pu, [
                        e("div", null, t(a(n)("amountTransferedOut")), 1),
                        e("div", Fu, t(a(D)(T.value)), 1),
                      ]),
                      e("div", Gu, [
                        e("div", null, t(a(n)("dailyRate")), 1),
                        e("div", Uu, t(a(je)(m.value * 100, 2, 1) + "%"), 1),
                      ]),
                      e("div", Vu, [
                        e("div", null, t(a(n)("revenue")), 1),
                        e("div", Eu, t(a(D)(c.value || 0)), 1),
                      ]),
                    ]),
                    A(
                      (o(),
                      i(
                        "div",
                        {
                          class: H([
                            "popup__container-sumbit",
                            { disabled: !L.value || T.value > B.value.balance },
                          ]),
                        },
                        [j(t(a(n)("transferOut")), 1)],
                        2,
                      )),
                      [[Ee, { handler: Q, wait: 5e3 }]],
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["show"],
              ),
              C(
                Me,
                {
                  show: u.value,
                  "onUpdate:show": R[10] || (R[10] = (p) => (u.value = p)),
                  round: "",
                  position: "bottom",
                },
                {
                  default: P(() => [
                    e("div", zu, t(a(n)("transferIn")), 1),
                    e("div", ju, [
                      e("div", null, t(a(n)("amountUnit")), 1),
                      e("div", null, t(r.value), 1),
                    ]),
                    e("div", Zu, [
                      C(
                        be,
                        {
                          class: "popup__container-input",
                          maxlength: "6",
                          modelValue: L.value,
                          "onUpdate:modelValue": [
                            R[9] || (R[9] = (p) => (L.value = p)),
                            se,
                          ],
                          type: "digit",
                          placeholder: a(n)("phEnter") + a(n)("quantity"),
                          "clear-icon": "close",
                          "clear-trigger": "always",
                        },
                        {
                          button: P(() => [
                            e(
                              "div",
                              { class: "popup__container-allBtn", onClick: le },
                              t(a(n)("all")),
                              1,
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["modelValue", "placeholder"],
                      ),
                      L.value * r.value > I.value
                        ? (o(),
                          i("div", Hu, [
                            C(a(f), { class: "StrongBox__container-errorTip" }),
                            j(" " + t(a(n)("amountAvaliableInsufficient")), 1),
                          ]))
                        : Z("", !0),
                      e("div", qu, [
                        (o(),
                        i(
                          N,
                          null,
                          z(O, (p, we) =>
                            e(
                              "div",
                              {
                                key: we,
                                class: H({ active: L.value == p }),
                                onClick: (ke) => (L.value = p),
                              },
                              t(p + "x"),
                              11,
                              Wu,
                            ),
                          ),
                          64,
                        )),
                      ]),
                      e("div", Xu, [
                        e("div", null, t(a(n)("amountAvaliable")), 1),
                        e("div", Yu, t(a(D)(I.value || 0)), 1),
                      ]),
                      $.value > 0
                        ? (o(),
                          i("div", Ku, [
                            j(t(a(n)("instructionDesc12")), 1),
                            e("span", null, t(a(D)($.value)), 1),
                            j(t(a(n)("afterTransferIn")), 1),
                          ]))
                        : Z("", !0),
                      e("div", Qu, [
                        e("div", null, t(a(n)("amountTransferedIn")), 1),
                        e("div", Ju, t(a(D)(L.value * r.value)), 1),
                      ]),
                    ]),
                    A(
                      (o(),
                      i(
                        "div",
                        {
                          class: H([
                            "popup__container-sumbit",
                            {
                              disabled:
                                $.value > 0 ||
                                !Number(L.value) ||
                                L.value * r.value > I.value,
                            },
                          ]),
                        },
                        [j(t(a(n)("transferIn")), 1)],
                        2,
                      )),
                      [[Ee, { handler: ce, wait: 5e3 }]],
                    ),
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
const t2 = V(e2, [["__scopeId", "data-v-f25c04d8"]]),
  E3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: t2 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  st = (b) => (ge("data-v-8974946b"), (b = b()), ye(), b),
  a2 = { class: "Xg-page" },
  n2 = { class: "Xg-info" },
  o2 = { class: "Xg-info_top" },
  s2 = { class: "tit" },
  l2 = { class: "tip" },
  i2 = { class: "txt" },
  r2 = st(() => e("div", { class: "imgjackpot" }, null, -1)),
  d2 = ["src"],
  c2 = { class: "Xg-page-wrap" },
  u2 = ot(
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" data-v-8974946b><g clip-path="url(#clip0_6492_262)" data-v-8974946b><path d="M24 48C10.7454 48 0 37.2546 0 24C0 10.7454 10.7454 0 24 0C37.2546 0 48 10.7454 48 24C48 37.2546 37.2546 48 24 48ZM15 12.6C14.0452 12.6 13.1295 12.9793 12.4544 13.6544C11.7793 14.3295 11.4 15.2452 11.4 16.2V20.7276C11.4 21.6824 11.7793 22.5981 12.4544 23.2732C13.1295 23.9483 14.0452 24.3276 15 24.3276H19.485C20.4398 24.3276 21.3555 23.9483 22.0306 23.2732C22.7057 22.5981 23.085 21.6824 23.085 20.7276V16.2C23.085 15.2452 22.7057 14.3295 22.0306 13.6544C21.3555 12.9793 20.4398 12.6 19.485 12.6H15ZM28.146 12.6C27.1912 12.6 26.2755 12.9793 25.6004 13.6544C24.9253 14.3295 24.546 15.2452 24.546 16.2V20.7276C24.546 21.6824 24.9253 22.5981 25.6004 23.2732C26.2755 23.9483 27.1912 24.3276 28.146 24.3276H32.631C33.5858 24.3276 34.5015 23.9483 35.1766 23.2732C35.8517 22.5981 36.231 21.6824 36.231 20.7276V16.2C36.231 15.2452 35.8517 14.3295 35.1766 13.6544C34.5015 12.9793 33.5858 12.6 32.631 12.6H28.146ZM15 25.7934C14.0452 25.7934 13.1295 26.1727 12.4544 26.8478C11.7793 27.5229 11.4 28.4386 11.4 29.3934V33.921C11.4 34.8758 11.7793 35.7915 12.4544 36.4666C13.1295 37.1417 14.0452 37.521 15 37.521H19.485C20.4398 37.521 21.3555 37.1417 22.0306 36.4666C22.7057 35.7915 23.085 34.8758 23.085 33.921V29.3934C23.085 28.4386 22.7057 27.5229 22.0306 26.8478C21.3555 26.1727 20.4398 25.7934 19.485 25.7934H15ZM30.3882 25.7934C27.1614 25.7934 24.546 28.4094 24.546 31.6362V31.6782C24.546 34.905 27.162 37.521 30.3882 37.521C33.615 37.521 36.231 34.905 36.231 31.6782V31.6362C36.231 28.4094 33.615 25.7934 30.3882 25.7934Z" data-v-8974946b></path></g><defs data-v-8974946b><clipPath id="clip0_6492_262" data-v-8974946b><rect width="48" height="48" fill="white" data-v-8974946b></rect></clipPath></defs></svg>',
    1,
  ),
  _2 = { class: "tab" },
  f2 = st(() =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none",
      },
      [
        e("path", {
          d: "M29.7516 7.6875H17.8266C17.1422 7.6875 16.5938 7.13437 16.5938 6.45469V1.27969C16.5938 0.6 17.1469 0.046875 17.8266 0.046875H29.7469C30.4312 0.046875 30.9844 0.6 30.9844 1.27969V6.45C30.9844 7.13438 30.4313 7.6875 29.7516 7.6875Z",
          fill: "#2b3270",
        }),
        e("path", {
          d: "M40.7953 4.64062H33.9188C33.6891 4.64062 33.5063 4.82813 33.5063 5.05313V8.58281C33.5063 9.26719 32.9532 9.81562 32.2735 9.81562H15.7078C15.0235 9.81562 14.475 9.2625 14.475 8.58281V5.05313C14.475 4.82344 14.2875 4.64062 14.0625 4.64062H7.18127C5.49846 4.64062 4.1344 6.00469 4.1344 7.6875V44.9062C4.1344 46.5891 5.49846 47.9531 7.18127 47.9531H40.7953C42.4782 47.9531 43.8422 46.5891 43.8422 44.9062V7.6875C43.8422 6.00469 42.4782 4.64062 40.7953 4.64062ZM7.82815 16.9688C7.82815 16.1391 8.49846 15.4688 9.32815 15.4688H33.4219C34.2516 15.4688 34.9219 16.1391 34.9219 16.9688C34.9219 17.7984 34.2516 18.4688 33.4219 18.4688H9.32815C8.49846 18.4688 7.82815 17.7984 7.82815 16.9688ZM19.5938 39.1406C19.5938 39.9703 18.9235 40.6406 18.0938 40.6406H9.32815C8.49846 40.6406 7.82815 39.9703 7.82815 39.1406C7.82815 38.3109 8.49846 37.6406 9.32815 37.6406H18.0938C18.9235 37.6406 19.5938 38.3109 19.5938 39.1406ZM19.5938 31.7484C19.5938 32.5781 18.9235 33.2484 18.0938 33.2484H9.32815C8.49846 33.2484 7.82815 32.5781 7.82815 31.7484C7.82815 30.9187 8.49846 30.2484 9.32815 30.2484H18.0938C18.9235 30.2484 19.5938 30.9234 19.5938 31.7484ZM22.5 25.8609H9.32815C8.49846 25.8609 7.82815 25.1906 7.82815 24.3609C7.82815 23.5312 8.49846 22.8609 9.32815 22.8609H22.5C23.3297 22.8609 24 23.5312 24 24.3609C24 25.1859 23.3297 25.8609 22.5 25.8609ZM32.0157 43.7859C27.3563 43.7859 23.5781 41.8453 23.5781 39.45C23.5781 38.85 23.8172 38.2781 24.2438 37.7578C25.5282 39.3094 28.5235 40.4016 32.0157 40.4016C35.5078 40.4016 38.5032 39.3141 39.7875 37.7578C40.2188 38.2781 40.4532 38.85 40.4532 39.45C40.4532 41.8453 36.675 43.7859 32.0157 43.7859ZM32.0157 38.9766C27.3563 38.9766 23.5781 37.0359 23.5781 34.6406C23.5781 34.0172 23.836 33.4266 24.2953 32.8875C25.6031 34.4109 28.5703 35.4703 32.0157 35.4703C35.461 35.4703 38.4235 34.4062 39.736 32.8875C40.1953 33.4219 40.4532 34.0172 40.4532 34.6406C40.4532 37.0359 36.675 38.9766 32.0157 38.9766ZM32.0157 34.1672C27.3563 34.1672 23.5781 32.2266 23.5781 29.8313C23.5781 27.4359 27.3563 25.4953 32.0157 25.4953C36.675 25.4953 40.4532 27.4359 40.4532 29.8313C40.4532 32.2266 36.675 34.1672 32.0157 34.1672Z",
          fill: "#2b3270",
        }),
      ],
      -1,
    ),
  ),
  p2 = ot(
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" data-v-8974946b><g clip-path="url(#clip0_1365_4519)" data-v-8974946b><path d="M23.9955 47.9998C10.7874 48.0471 -0.23118 37.1883 0.00368673 23.5594C0.230542 10.3977 11.1372 -0.274265 24.5288 0.00537298C37.2674 0.271345 47.9986 10.6432 48 24.0104C48.0014 37.308 37.2675 47.9998 23.9955 47.9998ZM31.898 33.1019C31.9229 33.0378 31.9637 32.9372 32.0012 32.8354C33.1533 29.6991 34.3075 26.5635 35.4523 23.4244C35.536 23.1947 35.6523 23.088 35.8957 23.0243C37.2211 22.6772 38.0122 21.3663 37.7026 20.0709C37.4124 18.8567 36.2337 18.0384 34.9821 18.182C33.8198 18.3155 32.8786 19.3717 32.8533 20.572C32.8411 21.1496 33.0217 21.6654 33.3848 22.1331C32.2741 23.4385 31.1737 24.7319 30.0385 26.0661C29.6353 23.6602 29.2447 21.329 28.8523 18.9878C28.9398 18.952 29.0064 18.9252 29.0725 18.8975C30.322 18.3741 30.9078 17.1195 30.5141 15.8101C30.134 14.5463 28.8118 13.7321 27.5455 13.9871C26.5239 14.1927 25.8288 14.7962 25.5231 15.7839C25.2074 16.804 25.4546 17.7202 26.2156 18.4748C26.3696 18.6275 26.399 18.7449 26.3322 18.9462C25.6104 21.1204 24.8986 23.298 24.183 25.4742C24.1586 25.5481 24.1223 25.6181 24.0673 25.7465C23.2467 23.3546 22.4458 21.02 21.6468 18.6912C22.8623 17.9342 23.0229 16.5173 22.6448 15.5997C22.187 14.4887 21.0419 13.806 19.8796 13.9608C18.6987 14.118 17.751 15.0669 17.62 16.2404C17.5534 16.8374 17.6585 17.4066 17.9731 17.9268C18.3196 18.4997 18.8001 18.8909 19.5106 18.9992C19.0253 21.3552 18.5454 23.6849 18.0595 26.0437C17.9958 25.9875 17.9587 25.9614 17.9295 25.9282C16.8492 24.6989 15.7714 23.4675 14.6876 22.2414C14.5807 22.1205 14.601 22.0352 14.6673 21.905C14.8237 21.5976 15.0201 21.291 15.0871 20.961C15.3937 19.4526 13.9742 17.8363 12.2263 18.1747C11.1024 18.3924 10.2019 19.4713 10.2078 20.6228C10.214 21.8218 11.1066 22.8928 12.2555 23.0499C12.4471 23.0761 12.5109 23.1563 12.5678 23.3159C13.1845 25.044 13.8075 26.7699 14.4283 28.4965C14.9596 29.9743 15.491 31.4521 16.02 32.9307C16.0686 33.0664 16.1044 33.1693 16.298 33.1459C16.9872 33.0625 17.6799 33.0088 18.3697 32.9293C20.934 32.6341 23.5048 32.4656 26.0844 32.6334C28.007 32.7585 29.9258 32.9409 31.898 33.1019Z" fill="#2b3270" data-v-8974946b></path></g><defs data-v-8974946b><clipPath id="clip0_1365_4519" data-v-8974946b><rect width="48" height="48" fill="white" data-v-8974946b></rect></clipPath></defs></svg>',
    1,
  ),
  v2 = { class: "Xg-list" },
  h2 = { class: "header c-row c-row-between" },
  m2 = { class: "time" },
  g2 = { key: 0, class: "red" },
  y2 = { class: "c-row body c-row-middle" },
  $2 = { class: "img" },
  C2 = { class: "info" },
  b2 = { class: "name" },
  w2 = { class: "lab" },
  k2 = st(() => e("div", { class: "line" }, null, -1)),
  S2 = { class: "numbox" },
  x2 = { class: "citem" },
  B2 = { class: "num" },
  A2 = { class: "txt" },
  L2 = { class: "citem" },
  T2 = { class: "num red" },
  I2 = { class: "txt" },
  M2 = { class: "box" },
  D2 = { class: "Laundry-Con" },
  N2 = { key: 0, class: "Laundry-Con_tip" },
  O2 = { key: 1, class: "Laundry-Con_tip" },
  R2 = { key: 2 },
  P2 = E({
    __name: "index",
    setup(b) {
      const { getRewardValidityTime: n } = He(),
        {
          goRule: f,
          goStar: _,
          RewardsRecordPageList: h,
          listRef: s,
          DialogShow: u,
          pageQuery: l,
          recivedAll: m,
          isRecived: g,
          onLaundy: c,
          onRecived: d,
          goBack: r,
          onRecivedAll: v,
        } = kt(),
        $ = X();
      return (S, B) => {
        const I = M("NavBar"),
          F = M("van-button"),
          T = ee("lazy");
        return (
          o(),
          i("div", a2, [
            C(
              I,
              {
                title: S.$t("superjackpot"),
                "left-arrow": "",
                onClickLeft: a(r),
              },
              null,
              8,
              ["title", "onClickLeft"],
            ),
            e("div", n2, [
              e("div", o2, [
                e("div", null, [
                  e("h3", s2, t(S.$t("superjackpot")), 1),
                  e("p", l2, t(S.$t("tip") + S.$t("txt")), 1),
                  e("p", i2, t(S.$t("superJackpotTxt", [a(n)])), 1),
                ]),
                r2,
              ]),
              e(
                "img",
                { class: "img", src: a(x)("main/Super", "icon"), alt: "" },
                null,
                8,
                d2,
              ),
            ]),
            e("div", c2, [
              e(
                "div",
                {
                  class: H(["receive-all", { "no-receive": a(g) }]),
                  onClick: B[0] || (B[0] = (...w) => a(v) && a(v)(...w)),
                },
                [u2, e("span", null, t(S.$t("receiveAll")), 1)],
                2,
              ),
              e("ul", _2, [
                e(
                  "li",
                  {
                    class: "tab-item",
                    onClick: B[1] || (B[1] = (...w) => a(f) && a(f)(...w)),
                  },
                  [f2, e("span", null, t(S.$t("ruleillustrate")), 1)],
                ),
                e(
                  "li",
                  {
                    class: "tab-item",
                    onClick: B[2] || (B[2] = (...w) => a(_) && a(_)(...w)),
                  },
                  [p2, e("span", null, t(S.$t("winningstar")), 1)],
                ),
              ]),
              C(
                nt,
                {
                  api: a(ha),
                  list: a(h),
                  "onUpdate:list":
                    B[3] || (B[3] = (w) => (Pe(h) ? (h.value = w) : null)),
                  "page-query": a(l),
                  "onUpdate:pageQuery":
                    B[4] || (B[4] = (w) => (Pe(l) ? (l.value = w) : null)),
                  ref_key: "listRef",
                  ref: s,
                },
                {
                  content: P(() => [
                    e("div", v2, [
                      (o(!0),
                      i(
                        N,
                        null,
                        z(
                          a(h),
                          (w, O) => (
                            o(),
                            i("div", { class: "item m-b-20", key: O }, [
                              e("div", h2, [
                                e(
                                  "div",
                                  {
                                    class: H([
                                      "tit",
                                      {
                                        action: w.isReceive == 0,
                                        action2: w.isReceive == 2,
                                      },
                                    ]),
                                  },
                                  t(
                                    w.isReceive == 1
                                      ? S.$t("received")
                                      : w.isReceive == 2
                                        ? S.$t("rewardExpired")
                                        : S.$t("unaccalimed"),
                                  ),
                                  3,
                                ),
                                e("div", m2, [
                                  e("div", null, t(w.createTime), 1),
                                  w.expirationFormatTime
                                    ? (o(),
                                      i("div", g2, [
                                        j(t(w.expirationFormatTime), 1),
                                        e(
                                          "span",
                                          null,
                                          t(S.$t("expiredTime")),
                                          1,
                                        ),
                                      ]))
                                    : Z("", !0),
                                ]),
                              ]),
                              e("div", y2, [
                                A(e("img", $2, null, 512), [[T, w.imgUrl]]),
                                e("div", C2, [
                                  e("p", b2, t(w.gameName), 1),
                                  e("p", w2, [
                                    e("span", null, t(w.orderNo), 1),
                                  ]),
                                ]),
                              ]),
                              k2,
                              e("div", S2, [
                                e("div", x2, [
                                  e("p", B2, t(w.multiple) + "X", 1),
                                  e("span", A2, t(S.$t("Winningmultiple")), 1),
                                ]),
                                e("div", L2, [
                                  e("p", T2, t(a(D)(w.bonusAmount)), 1),
                                  e(
                                    "span",
                                    I2,
                                    t(S.$t("Additionalrewards")),
                                    1,
                                  ),
                                ]),
                              ]),
                              e("div", M2, [
                                w.isReceive === 0
                                  ? (o(),
                                    de(
                                      F,
                                      {
                                        key: 0,
                                        class: "Xg-btn",
                                        round: "",
                                        type: "primary",
                                        block: "",
                                        onClick: (L) => a(d)(w.orderId),
                                      },
                                      {
                                        default: P(() => [
                                          j(t(S.$t("receive")), 1),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["onClick"],
                                    ))
                                  : w.isReceive === 1
                                    ? (o(),
                                      de(
                                        F,
                                        {
                                          key: 1,
                                          class: "Xg-btn-received",
                                          round: "",
                                          type: "primary",
                                          block: "",
                                        },
                                        {
                                          default: P(() => [
                                            j(t(S.$t("received")), 1),
                                          ]),
                                          _: 1,
                                        },
                                      ))
                                    : (o(),
                                      de(
                                        F,
                                        {
                                          key: 2,
                                          class: "Xg-btn-expired",
                                          round: "",
                                          block: "",
                                        },
                                        {
                                          default: P(() => [
                                            j(t(S.$t("rewardExpiredTime")), 1),
                                          ]),
                                          _: 1,
                                        },
                                      )),
                              ]),
                            ])
                          ),
                        ),
                        128,
                      )),
                    ]),
                  ]),
                  empty: P(() => [
                    C(tt, null, {
                      text: P(() => [
                        e("p", null, t(S.$t("notAmegaJackpot")), 1),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                },
                8,
                ["api", "list", "page-query"],
              ),
              e(
                "div",
                {
                  class: "go-bet",
                  onClick: B[5] || (B[5] = (w) => a($).push("/")),
                },
                t(S.$t("goBetting")),
                1,
              ),
            ]),
            C(
              Ue,
              {
                show: a(u),
                "onUpdate:show":
                  B[6] || (B[6] = (w) => (Pe(u) ? (u.value = w) : null)),
                onConfirm: a(c),
                "show-cancel-btn": !1,
                confirmText: "OK",
                title: S.$t("succTip1"),
              },
              {
                content: P(() => [
                  e("div", D2, [
                    a(m).type == -1
                      ? (o(), i("div", N2, t(S.$t("succTip2")), 1))
                      : (o(), i("div", O2, t(S.$t("receiveAllSuccess")), 1)),
                    a(m).type == 1
                      ? (o(),
                        i("ul", R2, [
                          e("li", null, [
                            e("h3", null, t(a(m).orderCount), 1),
                            e("p", null, t(S.$t("awardCount")), 1),
                          ]),
                          e("li", null, [
                            e("h3", null, t(a(D)(a(m).totalReceiveAmount)), 1),
                            e("p", null, t(S.$t("awardAmount")), 1),
                          ]),
                        ]))
                      : Z("", !0),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["show", "onConfirm", "title"],
            ),
          ])
        );
      };
    },
  });
const F2 = V(P2, [["__scopeId", "data-v-8974946b"]]),
  z3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: F2 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  lt = (b) => (ge("data-v-47c8ba37"), (b = b()), ye(), b),
  G2 = { class: "withdrawCenter__container content" },
  U2 = { class: "withdrawCenter__container-hero" },
  V2 = { class: "withdrawCenter__container-hero__header" },
  E2 = { class: "withdrawCenter__container-hero__subtitle" },
  z2 = lt(() => e("span", null, "$", -1)),
  j2 = { class: "withdrawCenter__container-hero__footer" },
  Z2 = lt(() =>
    e("div", null, [e("span", null, "***"), e("span", null, "***")], -1),
  ),
  H2 = { class: "withdrawCenter__container-content" },
  q2 = { class: "withdrawCenter__container-content__wrapper" },
  W2 = { class: "withdrawCenter__container-content__wrapper-bank" },
  X2 = { class: "withdrawCenter__container-content__wrapper-bank-left" },
  Y2 = { class: "withdrawCenter__container-content__wrapper-bank-right" },
  K2 = lt(() => e("span", null, "4978****0938", -1)),
  Q2 = { class: "withdrawCenter__container-content__wrapper-footer" },
  J2 = { class: "withdrawCenter__container-content__wrapper-footer-top" },
  e_ = ["placeholder"],
  t_ = { class: "withdrawCenter__container-content__wrapper-footer-bottom" },
  a_ = { class: "withdrawCenter__container-content__footer" },
  n_ = { class: "userInfo_dialog_content" },
  o_ = E({
    __name: "index",
    setup(b) {
      const n = X(),
        _ = $e().getUserInfo,
        h = y({}),
        s = y([]),
        u = y(!1);
      function l() {
        n.go(-1);
      }
      function m() {
        u.value = !0;
      }
      return (
        re(async () => {
          const g = await W(ma({ uid: _.userId, sign: _.sign }));
          (s.value = g.data.signInRechargesList), (h.value = g.data.signIn);
        }),
        (g, c) => {
          const d = M("van-nav-bar"),
            r = M("van-icon"),
            v = M("van-dialog"),
            $ = ee("lazy");
          return (
            o(),
            i("div", G2, [
              C(
                d,
                {
                  title: g.$t("withdraw"),
                  fixed: "",
                  "left-arrow": "",
                  onClickLeft: l,
                },
                null,
                8,
                ["title"],
              ),
              e("div", U2, [
                e("div", V2, [
                  e("p", null, t(g.$t("availableBalance")), 1),
                  e("p", E2, [
                    z2,
                    e("span", null, t(a(_).amount), 1),
                    A(e("img", null, null, 512), [
                      [$, a(x)("activity/DailySignIn", "coin")],
                    ]),
                  ]),
                ]),
                e("div", j2, [
                  A(e("img", null, null, 512), [
                    [$, a(x)("activity/DailySignIn", "coin")],
                  ]),
                  Z2,
                ]),
              ]),
              e("div", H2, [
                e("div", q2, [
                  (o(!0),
                  i(
                    N,
                    null,
                    z(
                      s.value.slice(0, 3),
                      (S, B) => (
                        o(),
                        i(
                          "div",
                          {
                            key: B,
                            class: H([
                              "withdrawCenter__container-content__wrapper-block",
                              { signed: S.IsReceive !== 0 || B === 0 },
                            ]),
                          },
                          [
                            A(e("img", null, null, 512), [
                              [$, a(x)("activity/DailySignIn", "coin")],
                            ]),
                            e("span", null, t(g.$t("availableBalance")), 1),
                          ],
                          2,
                        )
                      ),
                    ),
                    128,
                  )),
                  (o(!0),
                  i(
                    N,
                    null,
                    z(
                      s.value.slice(6, 7),
                      (S) => (
                        o(),
                        i(
                          "div",
                          {
                            class: H([
                              "withdrawCenter__container-content__wrapper-block",
                              { signed: S.IsReceive !== 0 },
                            ]),
                          },
                          [
                            e("div", null, [
                              e("span", null, t(S.Amount), 1),
                              e(
                                "span",
                                null,
                                t(g.$t("lastFor")) +
                                  t(S.Day) +
                                  " " +
                                  t(g.$t("days")),
                                1,
                              ),
                            ]),
                          ],
                          2,
                        )
                      ),
                    ),
                    256,
                  )),
                ]),
                e("div", W2, [
                  e("div", X2, [
                    A(e("img", null, null, 512), [
                      [$, a(x)("activity/DailySignIn", "coin")],
                    ]),
                    e("span", null, t(g.$t("availableBalance")), 1),
                  ]),
                  e("div", Y2, [
                    e("div", null, [e("span", null, t(g.$t("name")), 1), K2]),
                    C(r, { name: "arrow", color: "#888" }),
                  ]),
                ]),
                e("div", Q2, [
                  e("div", J2, [
                    e(
                      "input",
                      {
                        type: "text",
                        "auto-complete": "new-password",
                        autocomplete: "off",
                        name: "username",
                        placeholder: g.$t("enterAmount"),
                      },
                      null,
                      8,
                      e_,
                    ),
                    e("div", null, [
                      C(r, { name: "info-o" }),
                      e("span", null, t(g.$t("cashBalanceInsufficient")), 1),
                    ]),
                  ]),
                  e("div", t_, [
                    e("div", null, [
                      C(r, { name: "passed" }),
                      e("span", null, t(g.$t("tip3withdrwalsPerDay")), 1),
                    ]),
                    e("div", null, [
                      C(r, { name: "passed" }),
                      e("span", null, t(g.$t("withdrawalRange")), 1),
                    ]),
                  ]),
                ]),
                e("div", a_, [
                  e("button", { onClick: m }, t(g.$t("withdraw")), 1),
                ]),
              ]),
              C(
                v,
                {
                  show: u.value,
                  "onUpdate:show": c[0] || (c[0] = (S) => (u.value = S)),
                  title: g.$t("titleWithdrawalApplicationSuccess"),
                  theme: "round-button",
                  "show-cancel-button": "",
                },
                {
                  default: P(() => [
                    e("div", n_, [
                      e(
                        "div",
                        null,
                        t(g.$t("tip2HoursToCompleteWithdrawal")),
                        1,
                      ),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["show", "title"],
              ),
            ])
          );
        }
      );
    },
  });
const s_ = V(o_, [["__scopeId", "data-v-47c8ba37"]]),
  j3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: s_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  l_ = { class: "about-container" },
  i_ = ["innerHTML"],
  r_ = E({
    __name: "index",
    setup(b) {
      const { t: n } = oe(),
        f = y(n("pravicyProtocal")),
        _ = X(),
        h = history.state.paramValue,
        s = y();
      return (
        re(async () => {
          f.value = n(h === "Protocols" ? "pravicyProtocal" : "riskProtocal");
          const u = h === "Protocols" ? await W(ga()) : await W(ya());
          u &&
            (s.value = h === "Protocols" ? u.data.protocols : u.data.agreement);
        }),
        (u, l) => {
          const m = M("NavBar");
          return (
            o(),
            i("div", l_, [
              C(
                m,
                {
                  title: f.value,
                  "left-arrow": "",
                  onClickLeft: l[0] || (l[0] = (g) => a(_).go(-1)),
                },
                null,
                8,
                ["title"],
              ),
              e(
                "div",
                { class: "about-container-content", innerHTML: s.value },
                null,
                8,
                i_,
              ),
            ])
          );
        }
      );
    },
  });
const d_ = V(r_, [["__scopeId", "data-v-d52d5a81"]]),
  Z3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: d_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  c_ = { class: "customer-container" },
  u_ = { class: "customer-container-header" },
  __ = { class: "customer-container-header-belly" },
  f_ = { alt: "" },
  p_ = E({
    __name: "index",
    setup(b) {
      const {
          goBack: n,
          onClickUrl: f,
          CollectionList: _,
          getServiceList: h,
          getIcons: s,
          List: u,
        } = It({ ServerType: 2 }),
        l = history.state.itemId,
        m = pe({ typeId: l });
      return (
        re(async () => {
          h(m);
        }),
        (g, c) => {
          const d = M("NavBar"),
            r = ee("lazy");
          return (
            o(),
            i("div", c_, [
              e("div", u_, [
                C(
                  d,
                  {
                    title: `${g.$t("customerServiceTitle")}`,
                    backgroundColor:
                      "linear-gradient(90deg, #2b3270 0%, #D9AD82 100%)",
                    "left-arrow": "",
                    onClickLeft: a(n),
                  },
                  null,
                  8,
                  ["title", "onClickLeft"],
                ),
                e("div", __, [
                  A(e("img", f_, null, 512), [[r, a(s)("main", "customerBg")]]),
                ]),
              ]),
              C(a(u), { list: a(_), onOnClick: a(f) }, null, 8, [
                "list",
                "onOnClick",
              ]),
            ])
          );
        }
      );
    },
  });
const v_ = V(p_, [["__scopeId", "data-v-6997205e"]]),
  H3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: v_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  h_ = (b) => (ge("data-v-c0d22724"), (b = b()), ye(), b),
  m_ = { class: "gverify-container" },
  g_ = { class: "gverify-container-header" },
  y_ = { class: "gverify-container-header-belly" },
  $_ = { alt: "" },
  C_ = { class: "gverify-container-content" },
  b_ = { class: "gverify-container-content-item" },
  w_ = h_(() =>
    e(
      "div",
      { class: "gverify-container-content-code" },
      [e("canvas", { id: "qr-code" })],
      -1,
    ),
  ),
  k_ = { class: "gverify-container-content-item-title" },
  S_ = { alt: "" },
  x_ = { class: "gverify-container-content-item-text" },
  B_ = { class: "gverify-container-content-item-tip" },
  A_ = { class: "gverify-container-footer" },
  L_ = { class: "gverify-container-content-item footer-wrapper" },
  T_ = { class: "gverify-container-content-item-title" },
  I_ = { alt: "" },
  M_ = { class: "gverify-container-content-item-steps" },
  D_ = { alt: "" },
  N_ = { class: "gverify-container-content-item-steps" },
  O_ = { class: "gverify-container-content-item-steps" },
  R_ = { class: "gverify-container-content-item-steps" },
  P_ = { class: "gverify-container-content-item-steps" },
  F_ = { key: 0 },
  G_ = { key: 1 },
  U_ = E({
    __name: "index",
    setup(b) {
      const { t: n } = oe(),
        f = X(),
        _ = St(),
        { maxDate: h } = pt(0),
        s = Ge(h).startOf("day").format("YYYY-MM-DD"),
        u = _.query.secret,
        l = he(() => He().getProjectName),
        m = `otpauth://totp/${s}?secret=${_.query.secret}&issuer=${l.value}`,
        g = Number(_.query.type),
        c = async (B, I) => {
          const F = I == 0 ? $a({ googleCode: B }) : Ca({ googleCode: B }),
            T = await W(F);
          (T == null ? void 0 : T.code) == 0 && f.push({ name: "main" });
        },
        d = () => {
          vt("https://support.google.com/accounts/answer/1066447", 1);
        },
        r = () => {
          v.value = !0;
        },
        v = y(!1),
        $ = (B) => {
          c(B, g);
        };
      function S() {
        Va.toCanvas(document.getElementById("qr-code"), m, (B) => {
          B && console.error(B);
        });
      }
      return (
        re(() => {
          S();
        }),
        (B, I) => {
          const F = M("NavBar"),
            T = ee("lazy");
          return (
            o(),
            i(
              N,
              null,
              [
                e("div", m_, [
                  e("div", g_, [
                    C(
                      F,
                      {
                        title: a(n)("googleVerify"),
                        backgroundColor:
                          "linear-gradient(90deg, #2b3270 0%, #D9AD82 100%)",
                        "left-arrow": "",
                        onClickLeft: I[0] || (I[0] = (w) => a(f).go(-1)),
                      },
                      null,
                      8,
                      ["title"],
                    ),
                    e("div", y_, [
                      A(e("img", $_, null, 512), [
                        [T, a(x)("main", "googleVerifyBg")],
                      ]),
                    ]),
                  ]),
                  e("div", C_, [
                    e("div", b_, [
                      w_,
                      e("div", k_, [
                        A(e("img", S_, null, 512), [
                          [T, a(x)("main", "googleKey")],
                        ]),
                        e("span", null, t(a(n)("safeKey")), 1),
                      ]),
                      e("div", x_, t(a(u)), 1),
                      e(
                        "div",
                        {
                          class: "gverify-container-content-item-button",
                          onClick: I[1] || (I[1] = (w) => a(Je)(a(u))),
                        },
                        t(a(n)("copyKey")),
                        1,
                      ),
                      e("div", B_, t(a(n)("tipSaveKeyProperly")), 1),
                    ]),
                  ]),
                  e("div", A_, [
                    e("div", L_, [
                      e("div", T_, [
                        A(e("img", I_, null, 512), [
                          [T, a(x)("main", "privacyIcon")],
                        ]),
                        e("span", null, t(a(n)("bindStep")), 1),
                      ]),
                      e(
                        "div",
                        M_,
                        "1." + t(a(n)("tipDownloadGoogleVerify")),
                        1,
                      ),
                      e("div", { class: "footer-wrapper-button", onClick: d }, [
                        A(e("img", D_, null, 512), [
                          [T, a(x)("main", "gverifyDownload")],
                        ]),
                        e("span", null, t(a(n)("downloadGoogleVerify")), 1),
                      ]),
                      e("div", N_, "2." + t(a(n)("tipCopyKeyToBind")), 1),
                      e("div", O_, "3." + t(a(n)("tipAddNewAccount")), 1),
                      e(
                        "div",
                        R_,
                        "4." + t(a(n)("tipNametheAccountPasteTheKey")),
                        1,
                      ),
                      e("div", P_, "5." + t(a(n)("tipGenerateSuccessCode")), 1),
                    ]),
                  ]),
                  e("div", { class: "gverify-container-button", onClick: r }, [
                    a(g) === 0
                      ? (o(), i("span", F_, t(a(n)("confirmBinding")), 1))
                      : (o(), i("span", G_, t(a(n)("closeGoogle")), 1)),
                  ]),
                ]),
                C(
                  Bt,
                  {
                    showPopup: v.value,
                    onOnConfirm: $,
                    onOnBack: I[2] || (I[2] = (w) => (v.value = !1)),
                  },
                  null,
                  8,
                  ["showPopup"],
                ),
              ],
              64,
            )
          );
        }
      );
    },
  });
const V_ = V(U_, [["__scopeId", "data-v-c0d22724"]]),
  q3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: V_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  E_ = { class: "container" },
  z_ = { class: "item" },
  j_ = { class: "head" },
  Z_ = { class: "name" },
  H_ = { class: "uid" },
  q_ = { class: "line" },
  W_ = { class: "time" },
  X_ = { class: "line" },
  Y_ = { class: "amount" },
  K_ = E({
    __name: "index",
    setup(b) {
      const n = y(!1),
        f = y(!1),
        _ = X(),
        h = y(1),
        s = y([]),
        u = async () => {
          const l = await W(ba({ pageSize: 20, pageNo: h.value }));
          l.code === 0
            ? (s.value.push(...l.data.data),
              l.data.totalPage <= h.value && (f.value = !0),
              h.value++)
            : (f.value = !0),
            (n.value = !1);
        };
      return (l, m) => {
        const g = M("NavBar"),
          c = M("van-list");
        return (
          o(),
          i(
            N,
            null,
            [
              C(
                g,
                {
                  title: l.$t("inviteRecord"),
                  "left-arrow": "",
                  onClickLeft: m[0] || (m[0] = (d) => a(_).go(-1)),
                },
                null,
                8,
                ["title"],
              ),
              e("div", E_, [
                C(
                  c,
                  {
                    loading: n.value,
                    "onUpdate:loading": m[1] || (m[1] = (d) => (n.value = d)),
                    finished: f.value,
                    "finished-text": l.$t("noMoreThere"),
                    onLoad: u,
                  },
                  {
                    default: P(() => [
                      (o(!0),
                      i(
                        N,
                        null,
                        z(
                          s.value,
                          (d) => (
                            o(),
                            i("div", z_, [
                              e("div", j_, [
                                e("span", Z_, t(d.userName), 1),
                                j(),
                                e("span", H_, "UID:" + t(d.userID), 1),
                              ]),
                              e("div", q_, [
                                j(t(l.$t("registerTime")), 1),
                                e("span", W_, t(d.createTime), 1),
                              ]),
                              e("div", X_, [
                                j(t(l.$t("rechageAmount")), 1),
                                e("span", Y_, t(a(D)(d.rechargeAmount_All)), 1),
                              ]),
                            ])
                          ),
                        ),
                        256,
                      )),
                    ]),
                    _: 1,
                  },
                  8,
                  ["loading", "finished", "finished-text"],
                ),
              ]),
            ],
            64,
          )
        );
      };
    },
  });
const Q_ = V(K_, [["__scopeId", "data-v-39b01852"]]),
  W3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Q_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  J_ = { class: "container" },
  e0 = { class: "tip" },
  t0 = { class: "tip" },
  a0 = { class: "dailySignInRules__container-hero" },
  n0 = { class: "dailySignInRules__container-hero__wrapper" },
  o0 = { class: "dailySignInRules__container-hero__wrapper-titlebox" },
  s0 = { class: "dailySignInRules__container-hero__wrapper-title" },
  l0 = { class: "dailySignInRules__container-hero__wrapper-title" },
  i0 = { class: "dailySignInRules__container-hero__wrapper-title" },
  r0 = E({
    __name: "index",
    setup(b) {
      const { t: n } = ht.global,
        f = X(),
        _ = [n("iRule4"), n("iRule5"), n("iRule6"), n("iRule7")],
        h = y([]),
        s = async () => {
          const u = await W(ka());
          h.value = u.data.taskList || [];
        };
      return (
        re(() => {
          s();
        }),
        (u, l) => {
          const m = M("NavBar");
          return (
            o(),
            i(
              N,
              null,
              [
                C(
                  m,
                  {
                    title: u.$t("inviteRule"),
                    "left-arrow": "",
                    onClickLeft: l[0] || (l[0] = (g) => a(f).go(-1)),
                  },
                  null,
                  8,
                  ["title"],
                ),
                e("div", J_, [
                  e("div", e0, t(u.$t("iRule1")), 1),
                  e("div", t0, t(u.$t("iRule2")), 1),
                ]),
                e("div", a0, [
                  e("div", n0, [
                    e("div", o0, [
                      e("div", s0, t(u.$t("iRule3")), 1),
                      e("div", l0, t(u.$t("rechageAmount")), 1),
                      e("div", i0, t(u.$t("winTips5")), 1),
                    ]),
                    e("ul", null, [
                      (o(!0),
                      i(
                        N,
                        null,
                        z(
                          h.value,
                          (g, c) => (
                            o(),
                            i("li", { key: c }, [
                              e(
                                "div",
                                null,
                                t(g.taskPeople + u.$t("people")),
                                1,
                              ),
                              e("div", null, t(a(D)(g.rechargeAmount)), 1),
                              e("div", null, t(a(D)(g.taskAmount)), 1),
                            ])
                          ),
                        ),
                        128,
                      )),
                    ]),
                  ]),
                ]),
                C(wa, { name: u.$t("rule"), tiplist: _ }, null, 8, ["name"]),
              ],
              64,
            )
          );
        }
      );
    },
  });
const d0 = V(r0, [["__scopeId", "data-v-a3e56a9c"]]),
  X3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: d0 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  c0 = { class: "Laundry-Record" },
  u0 = ["src"],
  _0 = { class: "list" },
  f0 = { class: "header" },
  p0 = { class: "" },
  v0 = { class: "name" },
  h0 = { class: "time" },
  m0 = { class: "state" },
  g0 = { class: "body" },
  y0 = { class: "left" },
  $0 = { class: "imgBox" },
  C0 = ["src"],
  b0 = { class: "right" },
  w0 = { class: "red" },
  k0 = { class: "orange" },
  S0 = E({
    __name: "index",
    setup(b) {
      const { t: n } = oe(),
        f = X(),
        _ = y();
      y(null);
      const h = y(0);
      qe(
        () => h.value,
        async () => {
          (g.value.codeType = ue.gameTabList[h.value].codeType),
            (m.value = !0),
            (u.pageNo = 1),
            (l.list = []),
            await _.value.resetRefresh();
        },
      );
      const u = pe({ pageNo: 1, pageSize: 10, codeType: -1 }),
        l = pe({ list: [], pageNo: 0, totalPage: 0, totalCount: 0 }),
        m = y(!0),
        g = y({ codeType: -1 });
      function c(d) {
        let r = "";
        return (
          ue.gameTabList.map((v) => {
            v.codeType == d && (r = v.name);
          }),
          r
        );
      }
      return (d, r) => {
        const v = M("NavBar"),
          $ = M("van-tab"),
          S = M("van-tabs");
        return (
          o(),
          i("div", c0, [
            C(
              v,
              {
                title: a(n)("laundryRecord"),
                "left-arrow": "",
                onClickLeft: r[0] || (r[0] = (B) => a(f).go(-1)),
              },
              null,
              8,
              ["title"],
            ),
            e("div", null, [
              C(
                S,
                {
                  class: "tabBar",
                  active: h.value,
                  "onUpdate:active": r[1] || (r[1] = (B) => (h.value = B)),
                  type: "card",
                  color: "transparent",
                  background: "transparent",
                  ref: "tabsRef",
                  "swipe-threshold": 3,
                },
                {
                  default: P(() => [
                    (o(!0),
                    i(
                      N,
                      null,
                      z(
                        a(ue).gameTabList,
                        (B, I) => (
                          o(),
                          de(
                            $,
                            { key: I },
                            {
                              title: P(() => [
                                e(
                                  "div",
                                  {
                                    class: H([
                                      "tab_item",
                                      { tab_active: I === h.value },
                                    ]),
                                  },
                                  [
                                    e(
                                      "img",
                                      {
                                        src: a(x)(
                                          "home/AllGames",
                                          `${I === h.value ? B.img + "Active" : B.img}`,
                                        ),
                                      },
                                      null,
                                      8,
                                      u0,
                                    ),
                                    e("span", null, t(B.name), 1),
                                  ],
                                  2,
                                ),
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
                8,
                ["active"],
              ),
            ]),
            e("div", _0, [
              C(
                Ze,
                {
                  distance: 300,
                  api: a(Sa),
                  list: l.list,
                  "onUpdate:list": r[2] || (r[2] = (B) => (l.list = B)),
                  "page-query": g.value,
                  "onUpdate:pageQuery": r[3] || (r[3] = (B) => (g.value = B)),
                  "is-first": m.value,
                  "onUpdate:isFirst": r[4] || (r[4] = (B) => (m.value = B)),
                  ref_key: "listRef",
                  ref: _,
                  isAutoLoad: !0,
                },
                {
                  content: P(() => [
                    (o(!0),
                    i(
                      N,
                      null,
                      z(
                        l.list,
                        (B, I) => (
                          o(),
                          i("div", { class: "item", key: I }, [
                            e("div", f0, [
                              e("div", p0, [
                                e("p", v0, t(c(B.codeType)), 1),
                                e("span", h0, t(B.addTime), 1),
                              ]),
                              e("div", m0, t(a(n)("laundrySuccess")), 1),
                            ]),
                            e("div", g0, [
                              e("div", y0, [
                                e("div", $0, [
                                  e(
                                    "img",
                                    {
                                      class: "img",
                                      src: a(x)("main/Laundry", "zs"),
                                      alt: "",
                                    },
                                    null,
                                    8,
                                    C0,
                                  ),
                                ]),
                                e("div", null, [
                                  e("p", null, t(a(n)("laundryAmount")), 1),
                                  e("p", null, t(a(n)("laundryRate")), 1),
                                  e("p", null, t(a(n)("rebateAmount")), 1),
                                ]),
                              ]),
                              e("div", b0, [
                                e("p", null, t(B.washVolume), 1),
                                e("p", w0, t(B.washRate) + "%", 1),
                                e("p", k0, t(B.rebateAmount), 1),
                              ]),
                            ]),
                          ])
                        ),
                      ),
                      128,
                    )),
                  ]),
                  _: 1,
                },
                8,
                ["api", "list", "page-query", "is-first"],
              ),
            ]),
          ])
        );
      };
    },
  });
const x0 = V(S0, [["__scopeId", "data-v-4b54e7bd"]]),
  Y3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: x0 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  B0 = { class: "Laundry-Rule" },
  A0 = ["innerHTML"],
  L0 = E({
    __name: "index",
    setup(b) {
      const { t: n } = oe(),
        f = X(),
        _ = y();
      return (
        re(async () => {
          const h = await W(xa());
          h && (_.value = h.data.washRules);
        }),
        (h, s) => {
          const u = M("NavBar");
          return (
            o(),
            i("div", B0, [
              C(
                u,
                {
                  title: a(n)("laundryRule"),
                  "left-arrow": "",
                  onClickLeft: s[0] || (s[0] = (l) => a(f).go(-1)),
                },
                null,
                8,
                ["title"],
              ),
              e(
                "div",
                { class: "Laundry-Rule-content", innerHTML: _.value },
                null,
                8,
                A0,
              ),
            ])
          );
        }
      );
    },
  });
const T0 = V(L0, [["__scopeId", "data-v-524282ce"]]),
  K3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: T0 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  I0 = { class: "bind-container" },
  M0 = { class: "email-container" },
  D0 = { class: "updateP-container-tips" },
  N0 = { class: "bind-button" },
  O0 = { key: 0, class: "Laundry-Con" },
  R0 = { class: "Laundry-Con_tip" },
  P0 = { class: "reward" },
  F0 = { class: "money" },
  G0 = E({
    __name: "index",
    setup(b) {
      var Y, K, G, U, ce, ie;
      const { t: n } = oe(),
        f = X(),
        _ = Ie(),
        s = $e().getUserInfo,
        u = y("bindemail"),
        l = y(!0),
        m = y(!1),
        g = y(!1),
        c = y("");
      c.value =
        ((Y = s == null ? void 0 : s.verifyMethods) == null
          ? void 0
          : Y.email) != ""
          ? "updateEmail"
          : "bindEmail";
      const d = y("");
      d.value =
        ((K = s == null ? void 0 : s.verifyMethods) == null
          ? void 0
          : K.email) != ""
          ? n("safetyVerification")
          : n("bindEmail");
      const r = { email: "" },
        v = y("");
      r.email =
        (G = s == null ? void 0 : s.verifyMethods) == null ? void 0 : G.email;
      const $ = y(!1);
      $.value =
        ((U = s == null ? void 0 : s.verifyMethods) == null
          ? void 0
          : U.email) == "";
      const S = y(!0);
      S.value =
        ((ce = s == null ? void 0 : s.verifyMethods) == null
          ? void 0
          : ce.email) != "";
      const B = y(!1);
      B.value =
        ((ie = s == null ? void 0 : s.verifyMethods) == null
          ? void 0
          : ie.email) == "";
      const I = y("main"),
        F = y("bindemailsuccess"),
        T = () => {
          f.go(-1);
        },
        w = (se) => {
          r.email = se;
        },
        O = async () => {
          var le;
          if (c.value == "bindEmail") {
            if (!Ne.email1.test(r.email))
              return (
                _.setCountEmailDown(0),
                _e({ message: n(Oe.email), wordBreak: "break-word" })
              );
          } else if (
            !Ne.email1.test(
              (le = s == null ? void 0 : s.verifyMethods) == null
                ? void 0
                : le.email,
            )
          )
            return (
              _.setCountEmailDown(0),
              _e({ message: n(Oe.email), wordBreak: "break-word" })
            );
          (await W(
            bt({
              email: r.email,
              emailType: $.value ? Ae.bindEmailMmobile : Ae.resetEmailMmobile,
            }),
          ))
            ? xe(n("sendSuccess"))
            : _.setCountEmailDown(0);
        },
        L = async () => {
          if (!Ne.email1.test(r.email))
            return _e({ message: n(Oe.email), wordBreak: "break-word" });
          if (!v.value.trim())
            return _e({
              message: n("noVerifyCodeFound"),
              wordBreak: "break-word",
            });
          (await W(
            Ba({ email: r.email, code: v.value, type: Ae.resetEmailMmobile }),
          )) &&
            ((c.value = "bindEmail"),
            (d.value = n("bindEmail")),
            (S.value = !1),
            (m.value = !1),
            ($.value = !0),
            (l.value = !1),
            (B.value = !0),
            (v.value = ""),
            (r.email = ""),
            _.setCountEmailDown(0)),
            (m.value = !1);
        },
        te = async () => {
          var le;
          if (!Ne.email1.test(r.email))
            return _e({ message: n(Oe.email), wordBreak: "break-word" });
          if (!v.value.trim())
            return _e({
              message: n("noVerifyCodeFound"),
              wordBreak: "break-word",
            });
          (await W(Aa({ email: r.email, emailvCode: v.value }))) &&
            (((le = s == null ? void 0 : s.verifyMethods) == null
              ? void 0
              : le.email) != ""
              ? (xe(n("rpdsucceed")), f.push({ name: "main" }))
              : (g.value = !0));
        },
        ae = () => {
          f.push({ name: "main" }), (g.value = !1);
        };
      return (
        re(() => {
          _.setCountEmailDown(0);
        }),
        (se, le) => {
          const Q = M("NavBar");
          return (
            o(),
            i("div", I0, [
              C(
                Q,
                { title: d.value, "left-arrow": "", onClickLeft: T },
                null,
                8,
                ["title"],
              ),
              e("div", M0, [
                A(
                  e(
                    "div",
                    null,
                    [
                      C(
                        Wa,
                        {
                          ref: "email",
                          type: u.value,
                          email: r.email,
                          onChangeN: w,
                        },
                        null,
                        8,
                        ["type", "email"],
                      ),
                    ],
                    512,
                  ),
                  [[J, $.value]],
                ),
                C(
                  Xa,
                  {
                    value: v.value,
                    "onUpdate:value": le[0] || (le[0] = (q) => (v.value = q)),
                    isShowVerifyT: l.value,
                    typeP: c.value,
                    sendFunc: O,
                    email: r.email,
                  },
                  null,
                  8,
                  ["value", "isShowVerifyT", "typeP", "email"],
                ),
                A(
                  e(
                    "div",
                    D0,
                    [e("span", null, t(se.$t("tipVerifyCodeRequired")), 1)],
                    512,
                  ),
                  [[J, m.value]],
                ),
                e("div", N0, [
                  A(e("button", { onClick: L }, t(se.$t("nextStep")), 513), [
                    [J, S.value],
                  ]),
                  A(e("button", { onClick: te }, t(se.$t("toBind")), 513), [
                    [J, B.value],
                  ]),
                ]),
              ]),
              C(
                xt,
                {
                  show: g.value,
                  "onUpdate:show": le[1] || (le[1] = (q) => (g.value = q)),
                  onConfirm: ae,
                  "show-cancel-btn": !1,
                  confirmText: "confirm",
                  pathname: I.value,
                  picname: F.value,
                  title: se.$t("bindsuccess"),
                },
                {
                  content: P(() => {
                    var q, me;
                    return [
                      ((q = a(s)) == null ? void 0 : q.bindReward) > 0
                        ? (o(),
                          i("div", O0, [
                            e("div", R0, [
                              e("div", P0, t(se.$t("award")), 1),
                              e(
                                "div",
                                F0,
                                t(
                                  a(D)(
                                    (me = a(s)) == null
                                      ? void 0
                                      : me.bindReward,
                                  ),
                                ),
                                1,
                              ),
                            ]),
                          ]))
                        : Z("", !0),
                    ];
                  }),
                  _: 1,
                },
                8,
                ["show", "pathname", "picname", "title"],
              ),
            ])
          );
        }
      );
    },
  });
const U0 = V(G0, [["__scopeId", "data-v-6d382046"]]),
  Q3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: U0 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  V0 = { class: "LoginP-container" },
  E0 = { class: "LoginP-container-form" },
  z0 = { class: "LoginP-container-tips" },
  j0 = { class: "LoginP-container-button" },
  Z0 = E({
    __name: "index",
    setup(b) {
      let n = pe({ oldPwd: "", newPwd: "", confirmNewPwd: "" });
      const { t: f } = oe(),
        _ = y(!1),
        h = X();
      async function s() {
        if (!Ne.passReg3.test(n.newPwd))
          return _e({ message: f(Oe.passReg2), wordBreak: "break-word" });
        if (n.newPwd !== n.confirmNewPwd) {
          _.value = !0;
          return;
        } else _.value = !1;
        (await W(La(n))) &&
          (Fe(f("rpdsucceed")), localStorage.clear(), h.push("/login"));
      }
      function u() {
        h.push({ name: "rpwd" });
      }
      const { isSmSForgetPasswordState: l, registerState: m } = at();
      return (
        m(),
        (g, c) => {
          const d = M("NavBar"),
            r = M("van-icon");
          return (
            o(),
            i("div", V0, [
              C(
                d,
                {
                  title: g.$t("titleEditPsw"),
                  "left-arrow": "",
                  onClickLeft: c[0] || (c[0] = (v) => a(h).go(-1)),
                },
                null,
                8,
                ["title"],
              ),
              e("div", E0, [
                C(
                  Qe,
                  {
                    value: a(n).oldPwd,
                    "onUpdate:value": c[1] || (c[1] = (v) => (a(n).oldPwd = v)),
                    label: g.$t("oldPSW"),
                    maxlength: 32,
                  },
                  null,
                  8,
                  ["value", "label"],
                ),
                C(
                  Qe,
                  {
                    value: a(n).newPwd,
                    "onUpdate:value": c[2] || (c[2] = (v) => (a(n).newPwd = v)),
                    label: g.$t("newPSW"),
                  },
                  null,
                  8,
                  ["value", "label"],
                ),
                C(
                  Qe,
                  {
                    class: "mgb48",
                    value: a(n).confirmNewPwd,
                    "onUpdate:value":
                      c[3] || (c[3] = (v) => (a(n).confirmNewPwd = v)),
                    label: g.$t("confirmPSW"),
                  },
                  null,
                  8,
                  ["value", "label"],
                ),
                A(
                  e(
                    "div",
                    z0,
                    [e("span", null, t(g.$t("tipUnmatchPsw")), 1)],
                    512,
                  ),
                  [[J, _.value]],
                ),
                a(l)
                  ? (o(),
                    i(
                      "div",
                      {
                        key: 0,
                        class: "LoginP-container-remember",
                        onClick: u,
                      },
                      [
                        e("span", null, t(g.$t("forgotOldPSW")), 1),
                        C(r, { name: "arrow", color: "#888" }),
                      ],
                    ))
                  : (o(),
                    i(
                      "div",
                      {
                        key: 1,
                        class: "LoginP-container-remember",
                        onClick:
                          c[4] ||
                          (c[4] = (v) =>
                            a(h).push({ name: "CustomerService" })),
                      },
                      [
                        e("span", null, t(g.$t("contactServicer")), 1),
                        C(r, { name: "arrow", color: "#888" }),
                      ],
                    )),
                e("div", j0, [
                  e("button", { onClick: s }, t(g.$t("saveChanges")), 1),
                ]),
              ]),
            ])
          );
        }
      );
    },
  });
const H0 = V(Z0, [["__scopeId", "data-v-f7128642"]]),
  J3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: H0 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  q0 = { class: "updateP-container" },
  W0 = { class: "updateP-container-tips" },
  X0 = { class: "updateP-container-button" },
  Y0 = { key: 0, class: "Laundry-Con" },
  K0 = { class: "Laundry-Con_tip" },
  Q0 = { class: "reward" },
  J0 = { class: "money" },
  ef = E({
    __name: "index",
    setup(b) {
      var U, ce, ie, se, le;
      const { t: n } = oe(),
        f = X(),
        _ = Ie(),
        s = $e().getUserInfo,
        u = y(!1);
      u.value =
        ((U = s == null ? void 0 : s.verifyMethods) == null
          ? void 0
          : U.mobile) == "";
      const l = y(!1),
        m = y(!1);
      m.value =
        ((ce = s == null ? void 0 : s.verifyMethods) == null
          ? void 0
          : ce.mobile) != "";
      const g = y(!1);
      g.value =
        ((ie = s == null ? void 0 : s.verifyMethods) == null
          ? void 0
          : ie.mobile) == "";
      const c = y(!0),
        d = y(!1),
        r = y(""),
        v = y(!1),
        $ = y("");
      $.value =
        ((se = s == null ? void 0 : s.verifyMethods) == null
          ? void 0
          : se.mobile) != ""
          ? n("safetyVerification")
          : n("bindPhone");
      const S = y("");
      S.value =
        ((le = s == null ? void 0 : s.verifyMethods) == null
          ? void 0
          : le.mobile) != ""
          ? "updatePhone"
          : "bindPhone";
      const B = y("main"),
        I = y("bindemailsuccess"),
        F = () => {
          f.go(-1);
        },
        { isShowSMS: T, registerState: w } = at();
      w();
      async function O() {
        var q;
        if (!r.value.trim())
          return _e({
            message: n("noVerifyCodeFound"),
            wordBreak: "break-word",
          });
        (await W(
          Ta({
            userName:
              ((q = s == null ? void 0 : s.verifyMethods) == null
                ? void 0
                : q.mobile) ||
              localStorage.getItem("numberType") +
                localStorage.getItem("number"),
            smsvCode: r.value,
          }),
        )) &&
          (($.value = n("bindPhone")),
          (S.value = "bindPhone"),
          (m.value = !1),
          (d.value = !1),
          (u.value = !0),
          (c.value = !1),
          (g.value = !0),
          (r.value = ""),
          (L.PhoneNumber = ""),
          _.setCountDown(0)),
          (d.value = !1);
      }
      const L = pe({
        PhoneNumber: "",
        numberType: localStorage.getItem("numberType"),
      });
      async function te() {
        var q;
        if (!r.value.trim())
          return _e({
            message: n("noVerifyCodeFound"),
            wordBreak: "break-word",
          });
        if (!Ia(L.numberType, L.PhoneNumber.trim().length))
          return _e({ message: n("wrongTel"), wordBreak: "break-word" });
        (await W(
          Ma({ phone: L.numberType + L.PhoneNumber, smsvCode: r.value }),
        )) &&
          (((q = s == null ? void 0 : s.verifyMethods) == null
            ? void 0
            : q.mobile) != ""
            ? (xe(n("rpdsucceed")), f.push({ name: "main" }))
            : (l.value = !0));
      }
      const ae = (Q) => {
          L.numberType = Q;
        },
        Y = (Q) => {
          L.PhoneNumber = Q;
        },
        K = async () => {
          var ne;
          let Q = u.value
            ? L.numberType.replace("+", "") + L.PhoneNumber
            : (ne = s == null ? void 0 : s.verifyMethods) == null
              ? void 0
              : ne.mobile;
          const q = Q.length;
          if (q < 10 || q > 14)
            return _e({ message: n("wrongTel"), wordBreak: "break-word" });
          if (
            await W(
              Ct({
                phone: Q,
                codeType: u.value ? Ae.bindEmailMmobile : Ae.resetEmailMmobile,
              }),
            )
          )
            xe(n("sendSuccess"));
          else return -1;
        },
        G = () => {
          f.push({ name: "main" }), (l.value = !1);
        };
      return (
        re(() => {
          _.setCountDown(0);
        }),
        (Q, q) => {
          const me = M("NavBar");
          return (
            o(),
            i("div", q0, [
              C(
                me,
                { title: $.value, "left-arrow": "", onClickLeft: F },
                null,
                8,
                ["title"],
              ),
              A(
                e(
                  "div",
                  null,
                  [
                    C(
                      Ya,
                      {
                        "show-validate": v.value,
                        "onUpdate:showValidate":
                          q[0] || (q[0] = (ne) => (v.value = ne)),
                        typeP: S.value,
                        number: L.PhoneNumber,
                        "number-type": L.numberType,
                        onChangeT: ae,
                        onChangeN: Y,
                      },
                      null,
                      8,
                      ["show-validate", "typeP", "number", "number-type"],
                    ),
                  ],
                  512,
                ),
                [[J, u.value]],
              ),
              a(T)
                ? (o(),
                  de(
                    et,
                    {
                      key: 0,
                      value: r.value,
                      "onUpdate:value": q[1] || (q[1] = (ne) => (r.value = ne)),
                      typeP: S.value,
                      isShowVerifyT: c.value,
                      sendFunc: K,
                      number: L.PhoneNumber,
                      numberType: L.numberType,
                    },
                    null,
                    8,
                    ["value", "typeP", "isShowVerifyT", "number", "numberType"],
                  ))
                : Z("", !0),
              A(
                e(
                  "div",
                  W0,
                  [e("span", null, t(Q.$t("tipVerifyCodeRequired")), 1)],
                  512,
                ),
                [[J, d.value]],
              ),
              e("div", X0, [
                A(e("button", { onClick: O }, t(Q.$t("nextStep")), 513), [
                  [J, m.value],
                ]),
                A(e("button", { onClick: te }, t(Q.$t("complete")), 513), [
                  [J, g.value],
                ]),
              ]),
              C(
                xt,
                {
                  show: l.value,
                  "onUpdate:show": q[2] || (q[2] = (ne) => (l.value = ne)),
                  onConfirm: G,
                  "show-cancel-btn": !1,
                  confirmText: "confirm",
                  pathname: B.value,
                  picname: I.value,
                  title: Q.$t("bindsuccess"),
                },
                {
                  content: P(() => {
                    var ne, Te;
                    return [
                      ((ne = a(s)) == null ? void 0 : ne.bindReward) > 0
                        ? (o(),
                          i("div", Y0, [
                            e("div", K0, [
                              e("div", Q0, t(Q.$t("award")), 1),
                              e(
                                "div",
                                J0,
                                t(
                                  a(D)(
                                    (Te = a(s)) == null
                                      ? void 0
                                      : Te.bindReward,
                                  ),
                                ),
                                1,
                              ),
                            ]),
                          ]))
                        : Z("", !0),
                    ];
                  }),
                  _: 1,
                },
                8,
                ["show", "pathname", "picname", "title"],
              ),
            ])
          );
        }
      );
    },
  });
const tf = V(ef, [["__scopeId", "data-v-a90b90d4"]]),
  e5 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: tf },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  af = { class: "StrongBoxAbout__container" },
  nf = { class: "StrongBoxAbout__container-dailyRate" },
  of = { class: "StrongBoxAbout__container-header income" },
  sf = { class: "StrongBoxAbout__container-detail" },
  lf = { class: "StrongBoxAbout__container-detail-text" },
  rf = { class: "StrongBoxAbout__container-detail-text" },
  df = { class: "StrongBoxAbout__container-detail-text" },
  cf = { class: "StrongBoxAbout__container-header transferIn" },
  uf = { class: "StrongBoxAbout__container-detail" },
  _f = { class: "StrongBoxAbout__container-detail-text" },
  ff = { class: "StrongBoxAbout__container-detail-container" },
  pf = { class: "StrongBoxAbout__container-detail-container-tip" },
  vf = { class: "StrongBoxAbout__container-header transferOut" },
  hf = { class: "StrongBoxAbout__container-detail" },
  mf = { class: "StrongBoxAbout__container-detail-text" },
  gf = { class: "StrongBoxAbout__container-detail-container" },
  yf = { class: "StrongBoxAbout__container-detail-container-tip red" },
  $f = { class: "StrongBoxAbout__container-header safety" },
  Cf = { class: "StrongBoxAbout__container-detail" },
  bf = { class: "StrongBoxAbout__container-detail-text" },
  wf = { class: "StrongBoxAbout__container-detail-text" },
  kf = E({
    __name: "index",
    setup(b) {
      const n = X(),
        f = y(0);
      function _() {
        n.go(-1);
      }
      const h = async () => {
        const s = await W(wt());
        f.value = s.data.dayShareRate;
      };
      return (
        re(() => {
          h();
        }),
        (s, u) => {
          const l = M("NavBar");
          return (
            o(),
            i("div", af, [
              C(
                l,
                {
                  title: s.$t("titleLearnAboutVault"),
                  placeholder: !1,
                  "left-arrow": "",
                  onClickLeft: _,
                },
                null,
                8,
                ["title"],
              ),
              e(
                "div",
                nf,
                t(
                  s.$t("tipMinimumIncome") +
                    (f.value && a(je)(f.value * 100, 2, 1)) +
                    "%",
                ),
                1,
              ),
              e("div", of, t(s.$t("income")), 1),
              e("div", sf, [
                e("div", lf, t(s.$t("strongBoxAboutTip")), 1),
                e("div", rf, t(s.$t("tipEarningsCaculatedEveryMinites")), 1),
                e(
                  "div",
                  df,
                  t(s.$t("tipEarningSettledAfterTransferInOrOut")),
                  1,
                ),
              ]),
              e("div", cf, t(s.$t("transferIn")), 1),
              e("div", uf, [
                e("div", _f, t(s.$t("tipBalanceTransferInUnits")), 1),
                e("div", ff, [
                  e("div", pf, t(s.$t("example")), 1),
                  e(
                    "div",
                    null,
                    t(s.$t("tipTransferAmountMustBeMultipleOfCopies")),
                    1,
                  ),
                ]),
              ]),
              e("div", vf, t(s.$t("transferOut")), 1),
              e("div", hf, [
                e(
                  "div",
                  mf,
                  t(s.$t("tipTransferAnytimeGuarantedUnderSolidIncomes")),
                  1,
                ),
                e("div", gf, [
                  e("div", yf, t(s.$t("friendlyReminds")), 1),
                  e(
                    "div",
                    null,
                    t(s.$t("tipPlsDoNotTransferInOutFrequently")),
                    1,
                  ),
                ]),
              ]),
              e("div", $f, t(s.$t("security")), 1),
              e("div", Cf, [
                e("div", bf, t(s.$t("tipFundSaftyEnsuredBySecurityTeam")), 1),
                e("div", wf, t(s.$t("tipTransferIntoVaultToEnsureSafety")), 1),
              ]),
            ])
          );
        }
      );
    },
  });
const Sf = V(kf, [["__scopeId", "data-v-ca0c2aef"]]),
  t5 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Sf },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  xf = { class: "infiniteScroll__loading" },
  Bf = E({
    __name: "InfiniteScroll",
    props: {
      distance: {},
      loading: { type: Boolean },
      finished: { type: Boolean },
      page: {},
      onArrivedBottom: {},
    },
    setup(b) {
      const n = b,
        f = y(!1),
        _ = y(null),
        { bottom: h } = Ea(_);
      return (
        qe(h, (s) => {
          const { innerHeight: u } = window;
          f.value ||
            (s <= u + n.distance &&
              n.page >= 1 &&
              !n.loading &&
              !n.finished &&
              (n.onArrivedBottom(),
              (f.value = !0),
              setTimeout(() => {
                f.value = !1;
              }, 500)));
        }),
        (s, u) => {
          const l = M("van-loading");
          return (
            o(),
            i(
              "div",
              { class: "infiniteScroll", ref_key: "scrollRef", ref: _ },
              [
                Re(s.$slots, "content", {}, void 0, !0),
                Re(
                  s.$slots,
                  "loading",
                  {},
                  () => [
                    e("div", xf, [
                      s.loading && !s.finished
                        ? (o(), de(l, { key: 0, class: "z-50" }))
                        : s.finished
                          ? (o(),
                            i(
                              "div",
                              { key: 1, ref: "pullTextRef" },
                              t(s.$t("noMoreThere")),
                              513,
                            ))
                          : Z("", !0),
                    ]),
                  ],
                  !0,
                ),
              ],
              512,
            )
          );
        }
      );
    },
  });
const Af = V(Bf, [["__scopeId", "data-v-4302d6f6"]]),
  Lf = { class: "StrongBoxRecord__container" },
  Tf = { class: "StrongBoxRecord__container-overview" },
  If = { class: "StrongBoxRecord__container-overview-detail" },
  Mf = { key: 1 },
  Df = E({
    __name: "index",
    setup(b) {
      const { t: n } = oe(),
        f = X(),
        _ = y(!1),
        { value: h } = ft({ status: 3 }),
        s = y(`${h[0]}  ${n("year")} ${h[1]}  ${n("month")}`),
        u = y(h),
        l = y([]),
        m = y(0),
        g = y(0),
        c = y(0),
        d = y(1),
        r = y(!1),
        v = y(!1),
        $ = localStorage.getItem("language");
      function S(w, O) {
        if (w === "year")
          switch ($) {
            case "vi":
              O.text = n("year") + " " + O.text;
              break;
            case "en":
              O.text = n("year") + " " + O.text;
              break;
            default:
              O.text += n("year");
          }
        if (w === "month")
          switch ($) {
            case "vi":
              O.text = n("month") + " " + O.text;
              break;
            case "en":
              O.text = n("month") + " " + O.text;
              break;
            default:
              O.text += n("month");
          }
        return O;
      }
      const B = () => {
          _.value = !1;
        },
        I = ({ selectedOptions: w }) => {
          _.value = !1;
          let [{ text: O }, { text: L }] = w;
          L.startsWith("0") && (L = L.replace("0", "")), (s.value = O + L), T();
        };
      function F() {
        f.go(-1);
      }
      const T = async () => {
        const w = `${u.value[0]}-${u.value[1]}`,
          [O, L] = await mt(Da({ month: w, pageNo: d.value, pageSize: 20 }));
        L &&
          ((l.value = L.list),
          (m.value = L.extend2),
          (g.value = L.extend3),
          (c.value = L.extend1),
          (v.value = !1),
          d.value >= L.totalPage ? (r.value = !0) : d.value++);
      };
      return (
        re(async () => {
          T();
        }),
        (w, O) => {
          const L = M("NavBar"),
            te = M("van-date-picker"),
            ae = M("van-popup"),
            Y = ee("lazy");
          return (
            o(),
            i("div", Lf, [
              C(
                L,
                {
                  title: a(n)("vaultRecords"),
                  placeholder: !1,
                  "left-arrow": "",
                  onClickLeft: F,
                },
                null,
                8,
                ["title"],
              ),
              e("div", Tf, [
                e(
                  "div",
                  {
                    class: "StrongBoxRecord__container-overview-date",
                    onClick: O[0] || (O[0] = (K) => (_.value = !0)),
                  },
                  [
                    j(t(s.value) + " ", 1),
                    A(e("img", null, null, 512), [
                      [Y, a(x)("main", "dropDown")],
                    ]),
                  ],
                ),
                e("div", If, [
                  e("div", null, [
                    e("div", null, t(a(Ke)(m.value || 0)), 1),
                    e("div", null, t(a(n)("transferIn")), 1),
                  ]),
                  e("div", null, [
                    e("div", null, t(a(Ke)(g.value || 0)), 1),
                    e("div", null, t(a(n)("transferOut")), 1),
                  ]),
                  e("div", null, [
                    e("div", null, t(a(Ke)(c.value || 0)), 1),
                    e("div", null, t(a(n)("income")), 1),
                  ]),
                ]),
              ]),
              e(
                "div",
                {
                  class: H([
                    "StrongBoxRecord__container-detailList",
                    { empty: !l.value.length },
                  ]),
                },
                [
                  l.value.length
                    ? (o(),
                      i(
                        N,
                        { key: 0 },
                        [
                          l.value.length > 0
                            ? (o(),
                              de(
                                Af,
                                {
                                  key: 0,
                                  class: "sysMessage__container-msgWrapper",
                                  distance: 100,
                                  "on-arrived-bottom": T,
                                  loading: v.value,
                                  finished: r.value,
                                  page: d.value,
                                },
                                {
                                  content: P(() => [
                                    (o(!0),
                                    i(
                                      N,
                                      null,
                                      z(
                                        l.value,
                                        (K, G) => (
                                          o(),
                                          de(
                                            Mt,
                                            {
                                              class:
                                                "StrongBoxRecord__container-detailList-item",
                                              key: G,
                                              detail: K,
                                            },
                                            null,
                                            8,
                                            ["detail"],
                                          )
                                        ),
                                      ),
                                      128,
                                    )),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["loading", "finished", "page"],
                              ))
                            : Z("", !0),
                        ],
                        64,
                      ))
                    : (o(), i("div", Mf, [C(tt)])),
                ],
                2,
              ),
              C(
                ae,
                {
                  show: _.value,
                  "onUpdate:show": O[2] || (O[2] = (K) => (_.value = K)),
                  round: "",
                  position: "bottom",
                },
                {
                  default: P(() => [
                    C(
                      te,
                      {
                        modelValue: u.value,
                        "onUpdate:modelValue":
                          O[1] || (O[1] = (K) => (u.value = K)),
                        title: a(n)("pickDate"),
                        "columns-type": ["year", "month"],
                        formatter: S,
                        onCancel: B,
                        onConfirm: I,
                      },
                      null,
                      8,
                      ["modelValue", "title"],
                    ),
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
const Nf = V(Df, [["__scopeId", "data-v-e31a5e6f"]]),
  a5 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Nf },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  We = (b) => (ge("data-v-feffa0af"), (b = b()), ye(), b),
  Of = { class: "jackpot-rule" },
  Rf = { class: "rule-content" },
  Pf = { class: "rule-content-top" },
  Ff = ot(
    '<svg xmlns="http://www.w3.org/2000/svg" width="201" height="200" viewBox="0 0 201 200" fill="none" data-v-feffa0af><path d="M51.4192 65.5102C55.1509 65.5102 58.1761 62.4769 58.1763 58.7351C58.1765 54.9933 55.1515 51.96 51.4199 51.96C47.6882 51.96 44.6629 54.9933 44.6628 58.7351C44.6626 62.4769 47.6875 65.5102 51.4192 65.5102Z" fill="url(#paint0_linear_1816_27650)" data-v-feffa0af></path><path d="M51.416 64.7958C54.7549 64.7958 57.4617 62.0818 57.4619 58.7338C57.462 55.3859 54.7555 52.6719 51.4166 52.6719C48.0778 52.6719 45.371 55.3859 45.3708 58.7338C45.3706 62.0818 48.0772 64.7958 51.416 64.7958Z" fill="url(#paint1_linear_1816_27650)" data-v-feffa0af></path><path d="M51.4157 63.7256C54.1653 63.7256 56.3945 61.4905 56.3946 58.7334C56.3947 55.9763 54.1658 53.7412 51.4162 53.7412C48.6665 53.7412 46.4374 55.9763 46.4373 58.7334C46.4371 61.4905 48.666 63.7256 51.4157 63.7256Z" fill="url(#paint2_linear_1816_27650)" data-v-feffa0af></path><g filter="url(#filter0_d_1816_27650)" data-v-feffa0af><path fill-rule="evenodd" clip-rule="evenodd" d="M53.9802 59.4711L51.9621 58.3695C52.1136 61.3731 50.8687 62.4517 48.2272 61.6051C48.2272 61.6051 49.4079 59.7725 49.7272 57.853C50.0465 55.9335 50.887 55.7478 51.7787 56.4429C52.2132 56.7816 52.7023 57.1169 53.2459 57.4487C53.4573 56.4309 53.6034 55.8372 53.6842 55.6674C53.8054 55.4127 54.1749 55.3677 54.1487 55.9123C54.1312 56.2753 54.075 57.4616 53.9802 59.4711Z" fill="url(#paint3_linear_1816_27650)" data-v-feffa0af></path></g><path d="M149.606 62.9996C154.084 62.9996 157.715 59.3596 157.715 54.8694C157.715 50.3793 154.085 46.7393 149.607 46.7393C145.129 46.7393 141.499 50.3793 141.499 54.8694C141.498 59.3596 145.128 62.9996 149.606 62.9996Z" fill="url(#paint4_linear_1816_27650)" data-v-feffa0af></path><path d="M149.61 62.1435C153.617 62.1435 156.865 58.8866 156.865 54.8691C156.866 50.8516 153.618 47.5947 149.611 47.5947C145.604 47.5947 142.356 50.8516 142.356 54.8691C142.356 58.8866 145.604 62.1435 149.61 62.1435Z" fill="url(#paint5_linear_1816_27650)" data-v-feffa0af></path><path d="M149.613 60.8592C152.913 60.8592 155.588 58.1771 155.588 54.8686C155.588 51.56 152.914 48.8779 149.614 48.8779C146.314 48.8779 143.64 51.56 143.639 54.8686C143.639 58.1771 146.314 60.8592 149.613 60.8592Z" fill="url(#paint6_linear_1816_27650)" data-v-feffa0af></path><g filter="url(#filter1_d_1816_27650)" data-v-feffa0af><path fill-rule="evenodd" clip-rule="evenodd" d="M152.684 55.7534L150.262 54.4315C150.444 58.0359 148.95 59.3301 145.78 58.3142C145.78 58.3142 147.197 56.1151 147.58 53.8117C147.963 51.5083 148.972 51.2855 150.042 52.1196C150.563 52.526 151.15 52.9283 151.803 53.3265C152.056 52.1052 152.232 51.3927 152.329 51.1889C152.474 50.8833 152.918 50.8293 152.886 51.4828C152.865 51.9185 152.798 53.342 152.684 55.7534Z" fill="url(#paint7_linear_1816_27650)" data-v-feffa0af></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M72.2657 35.6982C72.2657 35.6982 70.748 40.7573 68.9666 41.9992C68.9666 41.9992 69.2284 42.9862 69.752 44.9602L67.185 43.9722L63.45 46.4732C63.9886 47.4021 64.169 48.1689 63.9911 48.7736C63.9911 48.7736 62.8961 47.3998 62.2484 47.3998C62.2484 47.3998 59.1904 50.3902 58.5028 57.8025C58.5028 57.8025 61.7935 57.8025 68.375 57.8025C75.941 50.8674 77.2379 43.4993 72.2657 35.6982Z" fill="url(#paint8_linear_1816_27650)" data-v-feffa0af></path><path d="M72.1755 36.2068C72.2962 36.1769 72.4183 36.2508 72.4482 36.3719C74.2051 43.5046 70.9464 50.7092 62.7098 57.9713C62.6164 58.0536 62.4741 58.0444 62.3919 57.9508C62.3098 57.8572 62.3189 57.7144 62.4124 57.632C70.5346 50.4708 73.7215 43.425 72.0108 36.4803C71.981 36.3592 72.0547 36.2368 72.1755 36.2068Z" fill="url(#paint9_linear_1816_27650)" data-v-feffa0af></path><path fill-rule="evenodd" clip-rule="evenodd" d="M139.338 58.4838C139.377 54.9942 139.176 53.01 138.736 52.5312C138.736 52.5312 133.909 54.477 133.464 53.9175C133.167 53.5446 134.617 52.3268 137.813 50.264C135.039 46.334 132.885 43.9018 131.351 42.9673C131.351 42.9673 129.838 46.2406 128.569 47.4509C128.569 47.4509 129.17 43.1281 128.068 40.4136C128.068 40.4136 122.956 36.8784 120.783 36.4416C120.783 36.4416 119.419 39.6871 117.455 39.6871C117.455 39.6871 118.267 37.1614 118.267 35.7999C118.267 35.7999 111.523 34.9422 106.786 36.4416C106.786 36.4416 104.71 48.1025 108.983 60.0062C108.983 60.0062 119.101 59.4988 139.338 58.4838Z" fill="url(#paint10_linear_1816_27650)" data-v-feffa0af></path><path fill-rule="evenodd" clip-rule="evenodd" d="M128.942 55.7398L128.079 54.9217C131.439 50.2909 133.301 47.282 133.662 45.8951C133.662 45.8951 131.666 48.7561 127.673 54.478L122.429 49.5184C123.568 42.9124 124.137 39.1708 124.137 38.2936C124.137 38.2936 123.409 41.8028 121.954 48.8212C113.047 41.1067 108.282 37.1441 107.659 36.9336C107.659 36.9336 112.21 41.2508 121.312 49.8853L107.659 49.8853L121.954 50.7174L128.435 56.2828L128.942 55.7398Z" fill="url(#paint11_linear_1816_27650)" data-v-feffa0af></path><path d="M82.7019 62.3171C88.374 62.3171 92.9724 57.7065 92.9727 52.0189C92.973 46.3314 88.3751 41.7207 82.7029 41.7207C77.0308 41.7207 72.4324 46.3314 72.4321 52.0189C72.4318 57.7065 77.0298 62.3171 82.7019 62.3171Z" fill="url(#paint12_linear_1816_27650)" data-v-feffa0af></path><path d="M82.703 61.2331C87.778 61.2331 91.8924 57.1077 91.8926 52.0189C91.8929 46.93 87.7789 42.8047 82.7039 42.8047C77.6288 42.8047 73.5144 46.93 73.5142 52.0189C73.5139 57.1077 77.6279 61.2331 82.703 61.2331Z" fill="url(#paint13_linear_1816_27650)" data-v-feffa0af></path><path d="M82.7026 59.608C86.882 59.608 90.2703 56.2106 90.2705 52.0198C90.2708 47.829 86.8828 44.4316 82.7033 44.4316C78.5239 44.4316 75.1356 47.829 75.1354 52.0198C75.1352 56.2106 78.5231 59.608 82.7026 59.608Z" fill="url(#paint14_linear_1816_27650)" data-v-feffa0af></path><g filter="url(#filter2_d_1816_27650)" data-v-feffa0af><path fill-rule="evenodd" clip-rule="evenodd" d="M86.5949 53.1388L83.5274 51.4645C83.7577 56.03 81.8654 57.6694 77.8503 56.3826C77.8503 56.3826 79.645 53.597 80.1304 50.6794C80.6157 47.7618 81.8933 47.4795 83.2486 48.536C83.909 49.0509 84.6524 49.5605 85.4787 50.0648C85.8 48.5178 86.0221 47.6153 86.1449 47.3572C86.3292 46.9701 86.8908 46.9016 86.8509 47.7294C86.8243 48.2813 86.739 50.0844 86.5949 53.1388Z" fill="url(#paint15_linear_1816_27650)" data-v-feffa0af></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M48.0989 58.2448C52.2177 57.0746 149.828 57.0746 155.98 58.2448C163.263 63.975 168.016 75.7305 170.238 93.5114L33.8371 93.5114C36.0616 76.9637 40.8156 65.2082 48.0989 58.2448Z" fill="url(#paint16_linear_1816_27650)" data-v-feffa0af></path><g filter="url(#filter3_d_1816_27650)" data-v-feffa0af><path fill-rule="evenodd" clip-rule="evenodd" d="M48.098 57.793C35.4095 59.2455 28.126 71.0011 26.2473 93.0596L33.8362 93.0596C36.4962 75.6509 41.2501 63.8954 48.098 57.793Z" fill="url(#paint17_linear_1816_27650)" data-v-feffa0af></path></g><g filter="url(#filter4_d_1816_27650)" data-v-feffa0af><path fill-rule="evenodd" clip-rule="evenodd" d="M155.979 57.793C168.667 59.2455 175.95 71.0011 177.826 93.0596L170.237 93.0596C167.579 75.6509 162.826 63.8954 155.979 57.793Z" fill="url(#paint18_linear_1816_27650)" data-v-feffa0af></path></g><g filter="url(#filter5_d_1816_27650)" data-v-feffa0af><path fill-rule="evenodd" clip-rule="evenodd" d="M105.23 56.623L97.8287 56.623C96.022 63.941 95.1182 76.0866 95.1173 93.0599L107.779 93.0599C107.384 75.6892 106.534 63.5436 105.23 56.623Z" fill="url(#paint19_linear_1816_27650)" data-v-feffa0af></path></g><g filter="url(#filter6_d_1816_27650)" data-v-feffa0af><path d="M180.252 93.0596L23.4951 93.0596L23.4946 103.448L180.252 103.448L180.252 93.0596Z" fill="url(#paint20_linear_1816_27650)" data-v-feffa0af></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M34.1618 108.009L0.995117 98.2539L200.995 98.2539L167.875 108.009L34.1618 108.009Z" fill="url(#paint21_linear_1816_27650)" data-v-feffa0af></path><path fill-rule="evenodd" clip-rule="evenodd" d="M180.241 119.338L180.241 107.559L23.5117 107.559L23.5111 119.338L27.004 119.338L33.0607 180.801L170.669 180.801L177.12 119.338L180.241 119.338Z" fill="url(#paint22_linear_1816_27650)" data-v-feffa0af></path><g filter="url(#filter7_d_1816_27650)" data-v-feffa0af><path fill-rule="evenodd" clip-rule="evenodd" d="M36.1338 119.571L84.7118 119.571C85.2615 125.62 88.5178 130.218 94.4809 133.366C94.4809 133.366 94.6514 143.192 94.9924 162.843C95.0573 166.581 92.0539 169.707 88.3252 169.707L42.3037 169.707C41.3165 169.707 40.4928 168.951 40.4058 167.965L36.1338 119.571Z" fill="url(#paint23_linear_1816_27650)" data-v-feffa0af></path></g><mask id="mask0_1816_27650" style="mask-type:luminance;" maskUnits="userSpaceOnUse" x="36" y="119" width="59" height="51" data-v-feffa0af><path fill-rule="evenodd" clip-rule="evenodd" d="M36.1357 119.571L84.7137 119.571C85.2634 125.62 88.5198 130.218 94.4829 133.366C94.4829 133.366 94.6533 143.192 94.9943 162.843C95.0592 166.581 92.0558 169.707 88.3271 169.707L42.3057 169.707C41.3185 169.707 40.4948 168.951 40.4077 167.965L36.1357 119.571Z" fill="white" data-v-feffa0af></path></mask><g mask="url(#mask0_1816_27650)" data-v-feffa0af><path d="M97.8432 168.804L37.0322 168.804L37.0318 176.482L97.8428 176.482L97.8432 168.804Z" fill="#FDE1A7" data-v-feffa0af></path></g><g filter="url(#filter8_d_1816_27650)" data-v-feffa0af><path fill-rule="evenodd" clip-rule="evenodd" d="M167.657 119.57L119.079 119.57C118.529 125.619 115.272 130.217 109.309 133.365C109.309 133.365 109.137 143.191 108.794 162.842C108.729 166.58 111.732 169.706 115.461 169.706L161.482 169.706C162.47 169.706 163.293 168.95 163.38 167.964L167.657 119.57Z" fill="url(#paint24_linear_1816_27650)" data-v-feffa0af></path></g><mask id="mask1_1816_27650" style="mask-type:luminance;" maskUnits="userSpaceOnUse" x="108" y="119" width="60" height="51" data-v-feffa0af><path fill-rule="evenodd" clip-rule="evenodd" d="M167.65 119.571L119.072 119.571C118.522 125.62 115.265 130.218 109.302 133.366C109.302 133.366 109.13 143.192 108.788 162.843C108.722 166.581 111.725 169.707 115.454 169.707L161.476 169.707C162.463 169.707 163.287 168.951 163.374 167.965L167.65 119.571Z" fill="white" data-v-feffa0af></path></mask><g mask="url(#mask1_1816_27650)" data-v-feffa0af><path d="M104.589 168.804L165.4 168.804L165.4 176.482L104.589 176.482L104.589 168.804Z" fill="#FDE1A7" data-v-feffa0af></path></g><g filter="url(#filter9_d_1816_27650)" data-v-feffa0af><path fill-rule="evenodd" clip-rule="evenodd" d="M97.3789 129.152L101.869 123.376C92.3099 122.365 89.5292 117.931 93.5266 110.076C93.5266 110.076 98.7204 114.681 104.62 116.631C110.52 118.58 110.685 121.305 108.043 123.754C106.756 124.948 105.452 126.314 104.132 127.852C107.239 129.018 109.041 129.769 109.536 130.107C110.279 130.612 110.236 131.792 108.53 131.44C107.393 131.206 103.676 130.443 97.3789 129.152Z" fill="url(#paint25_linear_1816_27650)" data-v-feffa0af></path></g><g style="mix-blend-mode:multiply;" opacity="0.718169" filter="url(#filter10_f_1816_27650)" data-v-feffa0af><path style="mix-blend-mode:multiply;" fill-rule="evenodd" clip-rule="evenodd" d="M28.9862 72.1876C30.2422 75.5437 31.5244 77.2218 32.8326 77.2218C34.795 77.2218 35.6737 77.3957 38.7583 77.6127C40.8969 77.7632 43.1166 78.0582 45.4175 78.4975C45.0594 74.8664 44.3597 72.6301 43.3185 71.7885C42.2772 70.947 40.4084 70.1162 37.712 69.2961L31.8122 68.9287L30.5921 69.8135L28.9862 72.1876Z" fill="url(#paint26_linear_1816_27650)" data-v-feffa0af></path></g><g style="mix-blend-mode:multiply;" opacity="0.718169" filter="url(#filter11_f_1816_27650)" data-v-feffa0af><path style="mix-blend-mode:multiply;" fill-rule="evenodd" clip-rule="evenodd" d="M164.893 64.8776C161.724 66.5368 160.219 68.0175 160.379 69.3195C160.485 70.1912 156.992 78.3907 149.9 93.918C151.756 93.5148 153.252 92.9808 154.389 92.3161C155.525 91.6515 156.534 90.7208 157.414 89.5242L159.187 91.1983L161.818 87.9149L163.102 87.9148L165.307 80.5696C166.38 79.713 166.955 79.2208 167.034 79.093C167.741 77.9542 168.335 75.993 168.818 73.2094L168.463 67.2929L167.439 66.1865L164.893 64.8776Z" fill="url(#paint27_linear_1816_27650)" data-v-feffa0af></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M24.3843 93.0609C20.3513 85.7281 22.0697 78.386 29.5394 71.0346C29.5394 71.0346 30.954 76.1467 34.2019 76.1467C36.3671 76.1467 40.1061 76.531 45.4188 77.2996C44.8185 71.7188 40.2833 68.9284 31.8134 68.9284C31.8134 68.9284 34.2024 65.4 34.2026 61.7797C34.2027 59.3661 33.4066 55.6114 31.8143 50.5156C27.4398 53.7886 25.2524 57.5433 25.2522 61.7797C25.2521 65.5083 26.3507 68.0779 28.5482 69.4886C20.874 77.1099 18.9608 84.9673 22.8086 93.0609C22.8086 93.0609 23.3338 93.0609 24.3843 93.0609Z" fill="url(#paint28_radial_1816_27650)" data-v-feffa0af></path><path d="M31.2835 51.3196C31.3363 51.2066 31.4703 51.1579 31.583 51.2108C31.6956 51.2637 31.7442 51.3981 31.6915 51.5111C28.7598 57.7901 28.4306 63.7719 30.6987 69.4713L30.7581 69.6187L30.9369 69.6624L31.1603 69.7194L31.482 69.8051L31.8302 69.9026C31.8903 69.9197 31.9515 69.9374 32.0138 69.9556C33.0796 70.2673 34.2284 70.6586 35.4174 71.1357C38.8186 72.5005 41.8626 74.2801 44.2062 76.5259C44.2962 76.612 44.2994 76.755 44.2134 76.8452C44.1276 76.9354 43.985 76.9387 43.895 76.8524C41.5987 74.652 38.6022 72.9002 35.25 71.555C34.0753 71.0837 32.9401 70.697 31.8877 70.3893L31.5322 70.2875C31.475 70.2716 31.4189 70.2561 31.364 70.241L31.0475 70.1566L30.5455 70.0331L30.4306 70.0079L30.3857 69.8989C27.955 64.0017 28.2561 57.8035 31.2835 51.3196Z" fill="#88BB5A" data-v-feffa0af></path><path d="M156.474 55.1686C165.995 54.5184 169.844 58.2232 167.613 65.9993L167.543 66.2362L166.465 65.9114C168.573 58.8749 165.496 55.7564 156.803 56.2841H156.592C156.58 56.0173 156.566 55.8185 156.551 55.6878C156.537 55.572 156.511 55.3989 156.474 55.1686Z" fill="#B1CA5C" data-v-feffa0af></path><path fill-rule="evenodd" clip-rule="evenodd" d="M166.439 65.4378C162.228 64.597 154.838 74.6114 153.707 74.6114C153.707 74.6114 154.465 75.1929 155.983 76.3558L152.28 79.5656C153.993 79.8181 154.85 80.1496 154.85 80.5601C154.85 80.5601 153.443 82.0456 150.63 85.0165L153.706 85.0165C152.153 88.3444 151.127 90.1755 150.63 90.5098C150.63 90.5098 155.461 89.8585 157.66 85.61C157.66 85.61 159.201 86.7351 159.201 87.8884C159.201 87.8884 161.858 85.2933 161.431 81.4899C161.431 81.4899 162.827 83.3556 162.827 83.7041C162.827 83.7041 164.764 78.265 164.765 74.1906L166.643 77.1944C166.643 77.1944 169.237 68.3295 166.439 65.4378Z" fill="url(#paint29_linear_1816_27650)" data-v-feffa0af></path><g opacity="0.432454" data-v-feffa0af><path d="M160.947 72.5195C161.065 72.4784 161.193 72.5407 161.234 72.6584C161.27 72.7631 161.226 72.8765 161.133 72.9292L161.096 72.946L155.336 74.9579C155.218 74.999 155.09 74.9368 155.049 74.819C155.012 74.7143 155.057 74.6009 155.15 74.5482L155.187 74.5314L160.947 72.5195ZM158.13 78.5384C158.254 78.5321 158.36 78.628 158.366 78.7526C158.372 78.8772 158.276 78.9832 158.152 78.9895C156.759 79.0594 155.846 79.3148 155.418 79.7308C155.329 79.8177 155.186 79.8155 155.099 79.726C155.013 79.6364 155.015 79.4934 155.104 79.4066C155.631 78.8945 156.637 78.6133 158.13 78.5384ZM158.003 81.594C158.101 81.5175 158.243 81.5353 158.319 81.6337C159.517 83.1796 160.12 84.6718 160.12 86.1091C160.12 86.2338 160.019 86.3349 159.895 86.3349C159.77 86.3349 159.67 86.2338 159.67 86.1091C159.67 84.7821 159.104 83.3831 157.963 81.9109C157.887 81.8124 157.905 81.6705 158.003 81.594ZM160.309 75.6056C160.387 75.5085 160.529 75.4933 160.626 75.5716C162.414 77.0179 163.318 78.6421 163.318 80.4353C163.318 80.56 163.217 80.6611 163.093 80.6611C162.968 80.6611 162.867 80.56 162.867 80.4353C162.868 78.7903 162.032 77.2893 160.343 75.9232C160.246 75.8449 160.231 75.7027 160.309 75.6056Z" fill="#77A232" data-v-feffa0af></path></g><path d="M163.971 69.594C164.053 69.5005 164.195 69.4916 164.289 69.5741C164.382 69.6566 164.391 69.7993 164.309 69.8928C161.18 73.4479 158.739 77.8974 156.985 83.2433L156.858 83.636C155.565 87.6864 153.966 89.7021 152.015 89.6146C151.891 89.609 151.794 89.5035 151.8 89.3789C151.806 89.2543 151.911 89.1577 152.035 89.1633C153.683 89.2373 155.14 87.4381 156.363 83.7005L156.429 83.4984C158.209 77.9203 160.723 73.2849 163.971 69.594Z" fill="url(#paint30_linear_1816_27650)" data-v-feffa0af></path><path fill-rule="evenodd" clip-rule="evenodd" d="M166.943 63.17C162.754 62.4298 159.396 62.7387 156.87 64.0968C153.723 65.7889 150.376 66.8966 146.828 67.4198C152.085 70.8 156.556 72.0324 160.24 71.1168C165.766 69.7435 167.651 67.4022 167.651 64.708C167.651 63.6827 167.415 63.17 166.943 63.17Z" fill="#C0CF5A" data-v-feffa0af></path><path fill-rule="evenodd" clip-rule="evenodd" d="M147.922 67.4652C153.297 69.1006 159.274 67.9664 165.853 64.0625C165.853 64.0625 158.15 71.6961 147.922 68.1226C147.28 67.8983 147.28 67.6791 147.922 67.4652Z" fill="url(#paint31_linear_1816_27650)" data-v-feffa0af></path><g filter="url(#filter12_d_1816_27650)" data-v-feffa0af><path fill-rule="evenodd" clip-rule="evenodd" d="M18.9156 167.468C20.0496 165.635 20.707 164.014 20.8879 162.604C21.1592 160.49 25.3412 149.881 33.4379 152.393C39.4481 154.258 35.4435 164.023 28.906 165.902C24.5475 167.156 21.2174 167.677 18.9156 167.468Z" fill="url(#paint32_linear_1816_27650)" data-v-feffa0af></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M169.165 57.5275C170.759 56.0789 171.837 54.702 172.398 53.397C173.24 51.4395 180.176 42.397 187.269 47.0499C192.533 50.5037 186 58.7838 179.199 58.7838C174.665 58.7838 171.32 58.365 169.165 57.5275Z" fill="url(#paint33_linear_1816_27650)" data-v-feffa0af></path><path fill-rule="evenodd" clip-rule="evenodd" d="M165.985 198.729C164.656 196.949 163.836 195.343 163.525 193.912C163.057 191.765 159.681 182.071 151.593 185.38C145.589 187.837 148.707 196.68 155.587 198.021C160.174 198.916 163.64 199.151 165.985 198.729Z" fill="url(#paint34_linear_1816_27650)" data-v-feffa0af></path><path fill-rule="evenodd" clip-rule="evenodd" d="M31.0004 34.7419C31.5913 34.3126 32.5873 33.6383 33.9883 32.7191C35.5278 24.592 34.8661 18.5582 32.0031 14.6177C29.1882 10.7433 23.7011 8.31402 15.5419 7.32982C14.1941 8.21041 13.1982 8.88469 12.554 9.35267C6.90641 13.4559 6.4575 22.4658 11.5513 29.4769C16.6452 36.4879 25.3528 38.8452 31.0004 34.7419Z" fill="url(#paint35_linear_1816_27650)" data-v-feffa0af></path><path d="M34.1839 32.8945C39.6577 28.9176 39.95 19.9883 34.8368 12.9505C29.7235 5.91273 21.141 3.43144 15.6671 7.40842C10.1933 11.3854 9.90097 20.3146 15.0142 27.3524C20.1275 34.3902 28.71 36.8715 34.1839 32.8945Z" fill="url(#paint36_linear_1816_27650)" data-v-feffa0af></path><path d="M32.8214 29.6371C36.8182 26.7333 36.7831 19.8714 32.743 14.3107C28.7029 8.74999 22.1877 6.59615 18.1909 9.49997C14.1941 12.4038 14.2293 19.2657 18.2694 24.8264C22.3095 30.3871 28.8246 32.541 32.8214 29.6371Z" fill="#FDCE00" data-v-feffa0af></path><path d="M32.449 29.1272C36.164 26.4281 36.0665 19.9605 32.231 14.6815C28.3956 9.40249 22.2747 7.31109 18.5597 10.0102C14.8446 12.7094 14.9422 19.1769 18.7777 24.4559C22.6131 29.7349 28.7339 31.8263 32.449 29.1272Z" stroke="#FBF658" stroke-width="3.24244" data-v-feffa0af></path><path d="M30.0227 25.7798C32.4368 24.0243 32.3715 19.8203 29.877 16.39C27.3825 12.9597 23.4033 11.602 20.9892 13.3575C18.5751 15.113 18.6404 19.317 21.1349 22.7473C23.6295 26.1776 27.6087 27.5353 30.0227 25.7798Z" fill="#FEDF38" data-v-feffa0af></path><path fill-rule="evenodd" clip-rule="evenodd" d="M167.31 20.0086C167.057 19.5552 166.666 18.7952 166.137 17.7286C160.535 15.9508 156.222 15.904 153.198 17.5883C150.225 19.2443 148.044 22.9085 146.656 28.5807C147.162 29.6064 147.553 30.3664 147.828 30.8607C150.242 35.1941 156.56 36.2777 161.94 33.281C167.319 30.2843 169.724 24.3421 167.31 20.0086Z" fill="url(#paint37_linear_1816_27650)" data-v-feffa0af></path><path d="M166.276 17.6051C163.937 13.4051 157.662 12.4388 152.262 15.4469C146.862 18.4551 144.381 24.2985 146.721 28.4986C149.06 32.6987 155.335 33.6649 160.735 30.6568C166.135 27.6486 168.616 21.8052 166.276 17.6051Z" fill="url(#paint38_linear_1816_27650)" data-v-feffa0af></path><path d="M163.862 18.2883C162.154 15.2215 157.31 14.6622 153.043 17.039C148.776 19.4159 146.702 23.8287 148.411 26.8954C150.119 29.9622 154.963 30.5215 159.23 28.1447C163.496 25.7679 165.57 21.355 163.862 18.2883Z" fill="#FDCE00" data-v-feffa0af></path><path d="M163.471 18.5073C161.883 15.6568 157.312 15.1751 153.262 17.4315C149.211 19.6879 147.215 23.8279 148.803 26.6784C150.39 29.529 154.961 30.0107 159.012 27.7543C163.063 25.4979 165.059 21.3579 163.471 18.5073Z" stroke="#FBF658" stroke-width="3.24244" data-v-feffa0af></path><path d="M160.902 19.934C159.869 18.0815 156.898 17.7697 154.266 19.2375C151.633 20.7053 150.337 23.3969 151.37 25.2494C152.403 27.1018 155.374 27.4136 158.006 25.9458C160.639 24.478 161.935 21.7864 160.902 19.934Z" fill="#FEDF38" data-v-feffa0af></path><defs data-v-feffa0af><filter id="filter0_d_1816_27650" x="47.5806" y="54.8384" width="7.2167" height="7.69326" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-feffa0af><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-feffa0af></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-feffa0af></feColorMatrix><feOffset data-v-feffa0af></feOffset><feGaussianBlur stdDeviation="0.323461" data-v-feffa0af></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.992157 0 0 0 0 0.690196 0 0 0 0 0.168627 0 0 0 1 0" data-v-feffa0af></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1816_27650" data-v-feffa0af></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1816_27650" result="shape" data-v-feffa0af></feBlend></filter><filter id="filter1_d_1816_27650" x="145.133" y="50.3238" width="8.40127" height="8.97256" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-feffa0af><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-feffa0af></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-feffa0af></feColorMatrix><feOffset data-v-feffa0af></feOffset><feGaussianBlur stdDeviation="0.323461" data-v-feffa0af></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.992157 0 0 0 0 0.690196 0 0 0 0 0.168627 0 0 0 1 0" data-v-feffa0af></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1816_27650" data-v-feffa0af></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1816_27650" result="shape" data-v-feffa0af></feBlend></filter><filter id="filter2_d_1816_27650" x="77.2037" y="46.4332" width="10.2958" height="11.0204" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-feffa0af><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-feffa0af></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-feffa0af></feColorMatrix><feOffset data-v-feffa0af></feOffset><feGaussianBlur stdDeviation="0.323461" data-v-feffa0af></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.992157 0 0 0 0 0.690196 0 0 0 0 0.168627 0 0 0 1 0" data-v-feffa0af></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1816_27650" data-v-feffa0af></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1816_27650" result="shape" data-v-feffa0af></feBlend></filter><filter id="filter3_d_1816_27650" x="26.2471" y="57.146" width="23.1444" height="36.5604" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-feffa0af><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-feffa0af></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-feffa0af></feColorMatrix><feOffset dx="0.646922" data-v-feffa0af></feOffset><feGaussianBlur stdDeviation="0.323461" data-v-feffa0af></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.903674 0 0 0 0 0.330502 0 0 0 0 0.280297 0 0 0 0.8 0" data-v-feffa0af></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1816_27650" data-v-feffa0af></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1816_27650" result="shape" data-v-feffa0af></feBlend></filter><filter id="filter4_d_1816_27650" x="155.979" y="57.146" width="23.1405" height="36.5604" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-feffa0af><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-feffa0af></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-feffa0af></feColorMatrix><feOffset dx="0.646922" data-v-feffa0af></feOffset><feGaussianBlur stdDeviation="0.323461" data-v-feffa0af></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.903674 0 0 0 0 0.330502 0 0 0 0 0.280297 0 0 0 0.8 0" data-v-feffa0af></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1816_27650" data-v-feffa0af></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1816_27650" result="shape" data-v-feffa0af></feBlend></filter><filter id="filter5_d_1816_27650" x="94.4703" y="55.9761" width="13.956" height="37.7304" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-feffa0af><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-feffa0af></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-feffa0af></feColorMatrix><feOffset data-v-feffa0af></feOffset><feGaussianBlur stdDeviation="0.323461" data-v-feffa0af></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.903674 0 0 0 0 0.330502 0 0 0 0 0.280297 0 0 0 0.8 0" data-v-feffa0af></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1816_27650" data-v-feffa0af></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1816_27650" result="shape" data-v-feffa0af></feBlend></filter><filter id="filter6_d_1816_27650" x="22.8472" y="93.0596" width="158.052" height="11.6825" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-feffa0af><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-feffa0af></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-feffa0af></feColorMatrix><feOffset dy="0.646922" data-v-feffa0af></feOffset><feGaussianBlur stdDeviation="0.323461" data-v-feffa0af></feGaussianBlur><feComposite in2="hardAlpha" operator="out" data-v-feffa0af></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.992157 0 0 0 0 0.870588 0 0 0 0 0.858824 0 0 0 0.9 0" data-v-feffa0af></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1816_27650" data-v-feffa0af></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1816_27650" result="shape" data-v-feffa0af></feBlend></filter><filter id="filter7_d_1816_27650" x="36.1338" y="119.571" width="59.5063" height="50.1357" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-feffa0af><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-feffa0af></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-feffa0af></feColorMatrix><feOffset dx="0.646922" data-v-feffa0af></feOffset><feColorMatrix type="matrix" values="0 0 0 0 0.992157 0 0 0 0 0.882353 0 0 0 0 0.654902 0 0 0 1 0" data-v-feffa0af></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1816_27650" data-v-feffa0af></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1816_27650" result="shape" data-v-feffa0af></feBlend></filter><filter id="filter8_d_1816_27650" x="108.793" y="119.57" width="59.5112" height="50.1357" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-feffa0af><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-feffa0af></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-feffa0af></feColorMatrix><feOffset dx="0.646922" data-v-feffa0af></feOffset><feColorMatrix type="matrix" values="0 0 0 0 0.992157 0 0 0 0 0.882353 0 0 0 0 0.654902 0 0 0 1 0" data-v-feffa0af></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1816_27650" data-v-feffa0af></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1816_27650" result="shape" data-v-feffa0af></feBlend></filter><filter id="filter9_d_1816_27650" x="91.1119" y="109.429" width="19.5302" height="22.7226" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-feffa0af><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-feffa0af></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-feffa0af></feColorMatrix><feOffset data-v-feffa0af></feOffset><feGaussianBlur stdDeviation="0.323461" data-v-feffa0af></feGaussianBlur><feComposite in2="hardAlpha" operator="out" data-v-feffa0af></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.980392 0 0 0 0 0.411765 0 0 0 0 0.282353 0 0 0 1 0" data-v-feffa0af></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1816_27650" data-v-feffa0af></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1816_27650" result="shape" data-v-feffa0af></feBlend></filter><filter id="filter10_f_1816_27650" x="27.3176" y="67.2599" width="19.7692" height="12.9059" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-feffa0af><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-feffa0af></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-v-feffa0af></feBlend><feGaussianBlur stdDeviation="0.834384" result="effect1_foregroundBlur_1816_27650" data-v-feffa0af></feGaussianBlur></filter><filter id="filter11_f_1816_27650" x="148.231" y="63.2092" width="22.2565" height="32.3776" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-feffa0af><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-feffa0af></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-v-feffa0af></feBlend><feGaussianBlur stdDeviation="0.834384" result="effect1_foregroundBlur_1816_27650" data-v-feffa0af></feGaussianBlur></filter><filter id="filter12_d_1816_27650" x="16.9752" y="150.717" width="21.3552" height="19.3835" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-feffa0af><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-feffa0af></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-feffa0af></feColorMatrix><feOffset dy="0.646922" data-v-feffa0af></feOffset><feGaussianBlur stdDeviation="0.970383" data-v-feffa0af></feGaussianBlur><feComposite in2="hardAlpha" operator="out" data-v-feffa0af></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.960739 0 0 0 0 0.377852 0 0 0 0 0.839155 0 0 0 1 0" data-v-feffa0af></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1816_27650" data-v-feffa0af></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1816_27650" result="shape" data-v-feffa0af></feBlend></filter><linearGradient id="paint0_linear_1816_27650" x1="51.4199" y1="51.96" x2="51.1375" y2="62.6622" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#F9F808" data-v-feffa0af></stop><stop offset="1" stop-color="#FDA10E" data-v-feffa0af></stop></linearGradient><linearGradient id="paint1_linear_1816_27650" x1="51.4166" y1="52.6719" x2="51.164" y2="62.2475" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#FCDE15" data-v-feffa0af></stop><stop offset="1" stop-color="#FDEE17" data-v-feffa0af></stop></linearGradient><linearGradient id="paint2_linear_1816_27650" x1="55.3748" y1="56.0706" x2="48.7028" y2="61.1076" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#FCA924" data-v-feffa0af></stop><stop offset="1" stop-color="#FAD52B" data-v-feffa0af></stop></linearGradient><linearGradient id="paint3_linear_1816_27650" x1="48.7915" y1="61.0844" x2="52.9416" y2="55.6482" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#FEF348" data-v-feffa0af></stop><stop offset="1" stop-color="#FEC60D" data-v-feffa0af></stop></linearGradient><linearGradient id="paint4_linear_1816_27650" x1="149.607" y1="46.7393" x2="149.268" y2="59.5819" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#F9F808" data-v-feffa0af></stop><stop offset="1" stop-color="#FDA10E" data-v-feffa0af></stop></linearGradient><linearGradient id="paint5_linear_1816_27650" x1="149.611" y1="47.5947" x2="149.308" y2="59.0855" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#FCDE15" data-v-feffa0af></stop><stop offset="1" stop-color="#FDEE17" data-v-feffa0af></stop></linearGradient><linearGradient id="paint6_linear_1816_27650" x1="154.364" y1="51.6732" x2="146.358" y2="57.7176" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#FCA924" data-v-feffa0af></stop><stop offset="1" stop-color="#FAD52B" data-v-feffa0af></stop></linearGradient><linearGradient id="paint7_linear_1816_27650" x1="146.457" y1="57.6893" x2="151.438" y2="51.1659" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#FEF348" data-v-feffa0af></stop><stop offset="1" stop-color="#FEC60D" data-v-feffa0af></stop></linearGradient><linearGradient id="paint8_linear_1816_27650" x1="66.8639" y1="35.6982" x2="66.8639" y2="57.8025" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#E7DB45" data-v-feffa0af></stop><stop offset="1" stop-color="#B6D05A" data-v-feffa0af></stop></linearGradient><linearGradient id="paint9_linear_1816_27650" x1="67.6235" y1="36.2002" x2="67.6235" y2="58.0275" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#DDD949" data-v-feffa0af></stop><stop offset="1" stop-color="#A7C654" data-v-feffa0af></stop></linearGradient><linearGradient id="paint10_linear_1816_27650" x1="110.905" y1="37.184" x2="117.824" y2="61.4295" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#E7DB45" data-v-feffa0af></stop><stop offset="1" stop-color="#93C44D" data-v-feffa0af></stop></linearGradient><linearGradient id="paint11_linear_1816_27650" x1="108.24" y1="37.4433" x2="121.743" y2="59.7081" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#DFD648" data-v-feffa0af></stop><stop offset="1" stop-color="#81AF40" data-v-feffa0af></stop></linearGradient><linearGradient id="paint12_linear_1816_27650" x1="82.7029" y1="41.7207" x2="82.2738" y2="57.9881" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#F9F808" data-v-feffa0af></stop><stop offset="1" stop-color="#FDA10E" data-v-feffa0af></stop></linearGradient><linearGradient id="paint13_linear_1816_27650" x1="82.7039" y1="42.8047" x2="82.3199" y2="57.3597" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#FCDE15" data-v-feffa0af></stop><stop offset="1" stop-color="#FDEE17" data-v-feffa0af></stop></linearGradient><linearGradient id="paint14_linear_1816_27650" x1="88.7205" y1="47.9723" x2="78.5789" y2="55.6285" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#FCA924" data-v-feffa0af></stop><stop offset="1" stop-color="#FAD52B" data-v-feffa0af></stop></linearGradient><linearGradient id="paint15_linear_1816_27650" x1="78.7081" y1="55.591" x2="85.0162" y2="47.328" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#FEF348" data-v-feffa0af></stop><stop offset="1" stop-color="#FEC60D" data-v-feffa0af></stop></linearGradient><linearGradient id="paint16_linear_1816_27650" x1="92.67" y1="43.9783" x2="94.3945" y2="116.943" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#FC8E86" data-v-feffa0af></stop><stop offset="0.496184" stop-color="#F72208" data-v-feffa0af></stop><stop offset="1" stop-color="#F37033" data-v-feffa0af></stop></linearGradient><linearGradient id="paint17_linear_1816_27650" x1="42.2004" y1="59.2475" x2="30.1558" y2="90.3419" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#FDEE82" data-v-feffa0af></stop><stop offset="1" stop-color="#FDC196" data-v-feffa0af></stop></linearGradient><linearGradient id="paint18_linear_1816_27650" x1="161.877" y1="59.2475" x2="173.92" y2="90.3411" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#FDEE82" data-v-feffa0af></stop><stop offset="1" stop-color="#FDC196" data-v-feffa0af></stop></linearGradient><linearGradient id="paint19_linear_1816_27650" x1="104.363" y1="58.1258" x2="87.0866" y2="83.1415" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#FDEE82" data-v-feffa0af></stop><stop offset="1" stop-color="#FDC196" data-v-feffa0af></stop></linearGradient><linearGradient id="paint20_linear_1816_27650" x1="39.7711" y1="94.112" x2="39.7711" y2="102.688" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#FFA34E" data-v-feffa0af></stop><stop offset="1" stop-color="#FFE483" data-v-feffa0af></stop></linearGradient><linearGradient id="paint21_linear_1816_27650" x1="100.995" y1="98.2539" x2="100.995" y2="108.009" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="white" stop-opacity="0" data-v-feffa0af></stop><stop offset="0.744047" stop-color="#FFF6A7" data-v-feffa0af></stop></linearGradient><linearGradient id="paint22_linear_1816_27650" x1="165.836" y1="175.445" x2="116.235" y2="69.6518" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#FFA133" data-v-feffa0af></stop><stop offset="1" stop-color="#FFE68F" data-v-feffa0af></stop></linearGradient><linearGradient id="paint23_linear_1816_27650" x1="36.134" y1="116.004" x2="82.4437" y2="172.418" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#FA905D" data-v-feffa0af></stop><stop offset="1" stop-color="#ED0600" data-v-feffa0af></stop></linearGradient><linearGradient id="paint24_linear_1816_27650" x1="172.475" y1="115.258" x2="121.584" y2="173.157" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#FA905D" data-v-feffa0af></stop><stop offset="1" stop-color="#ED0600" data-v-feffa0af></stop></linearGradient><linearGradient id="paint25_linear_1816_27650" x1="94.8877" y1="112.101" x2="109.843" y2="127.909" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#FC7E71" data-v-feffa0af></stop><stop offset="1" stop-color="#F76645" data-v-feffa0af></stop></linearGradient><linearGradient id="paint26_linear_1816_27650" x1="31.5067" y1="71.9419" x2="40.2408" y2="80.4575" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#FDE785" data-v-feffa0af></stop><stop offset="1" stop-color="#F94531" data-v-feffa0af></stop></linearGradient><linearGradient id="paint27_linear_1816_27650" x1="161.852" y1="69.4234" x2="151.028" y2="89.5506" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#FDE785" data-v-feffa0af></stop><stop offset="1" stop-color="#F94531" data-v-feffa0af></stop></linearGradient><radialGradient id="paint28_radial_1816_27650" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(29.7484 68.2797) rotate(94.5886) scale(14.4525 14.4137)" data-v-feffa0af><stop stop-color="#92C35D" data-v-feffa0af></stop><stop offset="1" stop-color="#BECF4D" data-v-feffa0af></stop></radialGradient><linearGradient id="paint29_linear_1816_27650" x1="167.738" y1="66.6467" x2="148.316" y2="80.9112" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#83C264" data-v-feffa0af></stop><stop offset="1" stop-color="#E4D857" data-v-feffa0af></stop></linearGradient><linearGradient id="paint30_linear_1816_27650" x1="158.083" y1="69.5176" x2="158.083" y2="89.6173" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#83BA5C" data-v-feffa0af></stop><stop offset="1" stop-color="#A1C058" data-v-feffa0af></stop></linearGradient><linearGradient id="paint31_linear_1816_27650" x1="165.212" y1="64.4871" x2="162.135" y2="72.9771" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#B2CD5E" data-v-feffa0af></stop><stop offset="1" stop-color="#BCC655" data-v-feffa0af></stop></linearGradient><linearGradient id="paint32_linear_1816_27650" x1="35.1897" y1="157.309" x2="21.2008" y2="167.437" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#F75093" data-v-feffa0af></stop><stop offset="1" stop-color="#CA2CF9" data-v-feffa0af></stop></linearGradient><linearGradient id="paint33_linear_1816_27650" x1="183.853" y1="52.2596" x2="176.803" y2="44.3624" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#FD9347" data-v-feffa0af></stop><stop offset="1" stop-color="#FFC038" data-v-feffa0af></stop></linearGradient><linearGradient id="paint34_linear_1816_27650" x1="153.284" y1="190.926" x2="164.325" y2="193.067" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#FFC340" data-v-feffa0af></stop><stop offset="1" stop-color="#FD9FD2" data-v-feffa0af></stop></linearGradient><linearGradient id="paint35_linear_1816_27650" x1="12.554" y1="9.35267" x2="31.0708" y2="34.8388" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#FF9F1A" data-v-feffa0af></stop><stop offset="1" stop-color="#FF9016" data-v-feffa0af></stop></linearGradient><linearGradient id="paint36_linear_1816_27650" x1="15.6671" y1="7.40842" x2="34.1839" y2="32.8945" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#FFED7F" data-v-feffa0af></stop><stop offset="1" stop-color="#FFC01E" data-v-feffa0af></stop></linearGradient><linearGradient id="paint37_linear_1816_27650" x1="147.828" y1="30.8607" x2="167.384" y2="19.9672" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#FF9F1A" data-v-feffa0af></stop><stop offset="1" stop-color="#FF9016" data-v-feffa0af></stop></linearGradient><linearGradient id="paint38_linear_1816_27650" x1="146.721" y1="28.4986" x2="166.276" y2="17.6051" gradientUnits="userSpaceOnUse" data-v-feffa0af><stop stop-color="#FFED7F" data-v-feffa0af></stop><stop offset="1" stop-color="#FFC01E" data-v-feffa0af></stop></linearGradient></defs></svg>',
    1,
  ),
  Gf = { class: "rule-content-top-right" },
  Uf = { class: "rule-content-tip" },
  Vf = We(() =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "36",
        height: "36",
        viewBox: "0 0 36 36",
        fill: "none",
      },
      [
        e("path", {
          d: "M35.2336 29.5075L21.1223 5.06815C19.3963 2.08015 16.5755 2.08015 14.8499 5.06815L0.738497 29.5075C-0.987066 32.4986 0.424628 34.9385 3.87335 34.9385H32.0986C35.5475 34.9385 36.9577 32.4984 35.2336 29.5075ZM16.0479 12.0026C16.555 11.4543 17.1997 11.1801 17.9859 11.1801C18.7726 11.1801 19.4167 11.4514 19.9243 11.9916C20.4286 12.533 20.6807 13.2101 20.6807 14.0242C20.6807 14.7247 19.628 19.8758 19.2769 23.6232H16.7414C16.4335 19.8758 15.2912 14.7247 15.2912 14.0242C15.2913 13.2224 15.5438 12.5481 16.0479 12.0026ZM19.8888 29.8216C19.3554 30.341 18.7207 30.5999 17.9861 30.5999C17.2516 30.5999 16.6168 30.341 16.0835 29.8216C15.5517 29.3033 15.2873 28.6756 15.2873 27.9383C15.2873 27.2049 15.5517 26.5704 16.0835 26.0386C16.6168 25.5066 17.2516 25.2406 17.9861 25.2406C18.7207 25.2406 19.3554 25.5066 19.8888 26.0386C20.4203 26.5704 20.6852 27.2049 20.6852 27.9383C20.6852 28.6756 20.4203 29.3033 19.8888 29.8216Z",
          fill: "white",
        }),
      ],
      -1,
    ),
  ),
  Ef = { class: "jackpot-rule-wrap" },
  zf = { class: "title" },
  jf = We(() =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none",
      },
      [
        e("path", {
          d: "M30.9492 20.3952C36.0096 20.3952 39.4332 22.2324 39.5892 24.6696L39.594 24.8448V35.9736C39.5352 38.4792 36.108 40.368 30.9492 40.368C25.8996 40.368 22.4772 38.5272 22.32 36.0936L22.314 35.9196V24.8436C22.314 22.3236 25.7772 20.3952 30.9492 20.3952ZM25.1172 33.7584V35.9184C25.1172 36.5304 27.7056 37.5804 30.9492 37.5804C34.0884 37.5804 36.6228 36.5952 36.7788 35.9796L36.786 35.9196V33.762L36.636 33.834C35.2836 34.434 33.522 34.776 31.4364 34.8216L30.9492 34.8264C28.6872 34.8264 26.7576 34.4748 25.2804 33.8328L25.1172 33.7584ZM25.1172 28.206V30.378C25.1172 30.9924 27.7032 32.0424 30.9492 32.0424C34.0896 32.046 36.6228 31.0584 36.7788 30.438L36.786 30.378V28.2072L36.6276 28.2828C35.2596 28.8828 33.4956 29.2284 31.4316 29.274L30.9492 29.28C28.6908 29.28 26.7612 28.926 25.2816 28.2816L25.1172 28.206ZM30.9492 23.178C27.7068 23.178 25.1172 24.2316 25.1172 24.8448C25.1172 25.4556 27.7056 26.5056 30.9492 26.5056C34.1964 26.5056 36.786 25.458 36.786 24.8448C36.786 24.2292 34.1988 23.178 30.9492 23.178Z",
          fill: "#2b3270",
        }),
        e("path", {
          d: "M21.0696 7.50119C27.8304 7.50119 33.5208 9.85079 33.7296 13.446L33.7344 13.6512V17.8716C33.7344 18.642 33.1056 19.266 32.3304 19.266C31.608 19.266 31.0104 18.7224 30.9348 18.024L30.9264 17.8716V17.622L30.7992 17.6964C28.6308 18.9084 25.44 19.6524 22.0848 19.7772L21.5544 19.7916L21.0696 19.7964C17.4924 19.7964 14.0304 19.092 11.6856 17.8404L11.358 17.658L11.2464 17.5908V22.2528C11.2464 23.6148 14.6904 25.2312 19.3104 25.5564L19.6776 25.5792L20.04 25.596C20.5392 25.6152 20.9904 25.8972 21.2232 26.3364C21.4572 26.7768 21.4368 27.3084 21.1692 27.7284C20.9016 28.1484 20.43 28.3944 19.9308 28.3752C16.818 28.2588 13.8588 27.5976 11.7384 26.5212L11.3736 26.3268L11.2272 26.2428V30.9024C11.2272 32.2644 14.6724 33.8808 19.2924 34.206L19.6596 34.2288L20.022 34.2456C20.5212 34.2672 20.9712 34.5516 21.2028 34.992C21.4344 35.4324 21.4116 35.964 21.1428 36.3828C21.0097 36.5889 20.8248 36.7566 20.6067 36.869C20.3885 36.9814 20.1447 37.0347 19.8996 37.0236C13.5552 36.7296 8.6076 34.4688 8.412 31.0956L8.406 30.888V13.6512C8.406 9.93359 14.1732 7.50119 21.0696 7.50119ZM21.0696 10.29C15.57 10.29 11.2092 12.0852 11.2092 13.6416C11.2092 15.198 15.5868 17.0028 21.0696 17.0028C26.556 17.0028 30.9264 15.2052 30.9264 13.6512C30.9264 12.0912 26.5668 10.29 21.0696 10.29Z",
          fill: "#2b3270",
        }),
      ],
      -1,
    ),
  ),
  Zf = { class: "table-container" },
  Hf = { class: "table-title" },
  qf = { class: "jackpot-rule-owener" },
  Wf = We(() =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "21",
        height: "24",
        viewBox: "0 0 21 24",
        fill: "none",
      },
      [
        e("path", {
          d: "M20 10.2679C21.3333 11.0378 21.3333 12.9623 20 13.7321L3.5 23.2583C2.16666 24.0281 0.499999 23.0659 0.499999 21.5263L0.5 2.47372C0.5 0.934117 2.16667 -0.0281317 3.5 0.741669L20 10.2679Z",
          fill: "#2b3270",
        }),
      ],
      -1,
    ),
  ),
  Xf = We(() =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none",
      },
      [
        e("g", null, [
          e("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M8.60868 36.9871C5.32131 33.3788 3.32142 28.615 3.32142 23.3918C3.32142 12.1276 12.6179 2.99609 24.0856 2.99609C35.5534 2.99609 44.8499 12.1276 44.8499 23.3918C44.8499 31.3565 40.2004 38.252 33.4234 41.6097C29.277 43.7714 24.5467 44.9961 19.5253 44.9961C13.3726 44.9961 7.6569 43.1575 2.91699 40.0092C2.91699 40.0092 6.09557 39.6625 8.60786 36.9879L8.60868 36.9871ZM33.8397 33.4859C39.2117 28.1141 39.2117 19.4046 33.8397 14.0327C31.3487 11.5418 28.1401 10.2067 24.8794 10.026C24.781 7.57955 26.0979 5.92657 26.1043 5.91851L26.103 5.91877L26.104 5.91747C22.3564 6.64141 18.7778 8.45446 15.8759 11.3564C13.6504 13.5818 12.0658 16.2053 11.1211 18.9975C11.2594 18.6313 11.4136 18.2697 11.5837 17.9139C11.3879 18.4132 11.211 18.9234 11.051 19.4454C9.47775 24.2213 10.5882 29.6877 14.3864 33.4859C19.7584 38.8579 28.4679 38.8579 33.8397 33.4859Z",
            fill: "white",
          }),
          e("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M17.1299 22.3454V25.1926C17.1299 26.3288 18.0509 27.2498 19.1872 27.2498C20.3234 27.2498 21.2443 26.3288 21.2443 25.1926V22.3454C21.2443 21.2094 20.3234 20.2881 19.1872 20.2881C18.0509 20.2881 17.1299 21.2094 17.1299 22.3454Z",
            fill: "white",
          }),
          e("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M27.3125 22.3454V25.1926C27.3125 26.3288 28.2336 27.2498 29.3697 27.2498C30.5059 27.2498 31.427 26.3288 31.427 25.1926V22.3454C31.427 21.2094 30.5059 20.2881 29.3697 20.2881C28.2336 20.2881 27.3125 21.2094 27.3125 22.3454Z",
            fill: "white",
          }),
        ]),
      ],
      -1,
    ),
  ),
  Yf = E({
    __name: "index",
    setup(b) {
      const n = X(),
        { getRuleList: f, ruleList: _, gotoCustom: h } = kt(),
        s = sessionStorage.getItem("dollarSign"),
        u = (l) => {
          const [m, g] = l.split("-");
          return `${m}X-${g}X`;
        };
      return (
        re(() => f()),
        (l, m) => {
          const g = M("NavBar");
          return (
            o(),
            i("div", Of, [
              C(
                g,
                {
                  color: "#333",
                  title: l.$t("ruleillustrate"),
                  "left-arrow": "",
                  onClickLeft: m[0] || (m[0] = (c) => a(n).go(-1)),
                },
                null,
                8,
                ["title"],
              ),
              e("div", Rf, [
                e("div", Pf, [
                  Ff,
                  e("div", Gf, [
                    e("h3", null, t(l.$t("superjackpot")), 1),
                    e("p", null, t(l.$t("ruleillustrate1")), 1),
                  ]),
                ]),
                e("div", Uf, [Vf, e("p", null, t(l.$t("ruleillustrate2")), 1)]),
              ]),
              e("div", Ef, [
                e("div", zf, [jf, j(" " + t(l.$t("winTips5")), 1)]),
                e("div", Zf, [
                  e("div", Hf, [
                    e("div", null, t(l.$t("winningrate")), 1),
                    e("div", null, t(l.$t("betAmounts")), 1),
                    e("div", null, t(l.$t("winTips5")), 1),
                  ]),
                  (o(!0),
                  i(
                    N,
                    null,
                    z(
                      a(_),
                      (c, d) => (
                        o(),
                        i("div", { class: "table-content", key: d }, [
                          e("div", null, t(u(c.multipleName)), 1),
                          e(
                            "div",
                            null,
                            t(a(s)) +
                              t(
                                c.betAmountName.split("-")[0] +
                                  "-" +
                                  a(s) +
                                  c.betAmountName.split("-")[1],
                              ),
                            1,
                          ),
                          e("div", null, t(a(D)(c.awardAmount)), 1),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
                e("div", qf, [Wf, j(t(l.$t("ruleillustaate3")), 1)]),
                e(
                  "div",
                  {
                    class: "jackpot-rule-custom",
                    onClick: m[1] || (m[1] = (...c) => a(h) && a(h)(...c)),
                  },
                  [Xf, j(" " + t(l.$t("contactServicer")), 1)],
                ),
              ]),
            ])
          );
        }
      );
    },
  });
const Kf = V(Yf, [["__scopeId", "data-v-feffa0af"]]),
  n5 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Kf },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Qf = (b) => (ge("data-v-f47a18d9"), (b = b()), ye(), b),
  Jf = { class: "jackpot-star" },
  e3 = { class: "jackpot-star-list" },
  t3 = { class: "starheader" },
  a3 = ["data-img"],
  n3 = { class: "nickname" },
  o3 = Qf(() => e("div", { class: "solidline" }, null, -1)),
  s3 = { class: "starcontent" },
  l3 = { class: "rowcontent" },
  i3 = { class: "label" },
  r3 = { class: "name" },
  d3 = { class: "rowcontent" },
  c3 = { class: "label" },
  u3 = { class: "multiple" },
  _3 = { class: "rowcontent" },
  f3 = { class: "label" },
  p3 = { class: "money" },
  v3 = { class: "rowcontent" },
  h3 = { class: "label" },
  m3 = { class: "time" },
  g3 = E({
    __name: "index",
    setup(b) {
      const n = X(),
        f = y([]),
        _ = pe({ pageSize: 10, isAll: !0 });
      return (h, s) => {
        const u = M("NavBar"),
          l = ee("lazy");
        return (
          o(),
          i("div", Jf, [
            C(
              u,
              {
                title: h.$t("winningstar"),
                "left-arrow": "",
                onClickLeft: s[0] || (s[0] = (m) => a(n).go(-1)),
              },
              null,
              8,
              ["title"],
            ),
            C(
              nt,
              {
                api: a(Oa),
                list: f.value,
                "onUpdate:list": s[1] || (s[1] = (m) => (f.value = m)),
                "page-query": _,
                "onUpdate:pageQuery": s[2] || (s[2] = (m) => (_ = m)),
              },
              {
                content: P(() => [
                  e("div", e3, [
                    (o(!0),
                    i(
                      N,
                      null,
                      z(
                        f.value,
                        (m, g) => (
                          o(),
                          i("div", { class: "star-item", key: g }, [
                            e("div", t3, [
                              A(
                                e(
                                  "img",
                                  { "data-img": a(x)("main/Avatar", "1") },
                                  null,
                                  8,
                                  a3,
                                ),
                                [[l, a(x)("main/Avatar", m.userPhoto)]],
                              ),
                              e("div", n3, t(a(Na)(m.userName)), 1),
                            ]),
                            o3,
                            e("div", s3, [
                              e("div", l3, [
                                e("div", i3, t(h.$t("gamename")), 1),
                                e("div", r3, t(m.gameName), 1),
                              ]),
                              e("div", d3, [
                                e("div", c3, t(h.$t("Winningmultiple")), 1),
                                e("div", u3, t(m.multiple + "X"), 1),
                              ]),
                              e("div", _3, [
                                e("div", f3, t(h.$t("winTips5")), 1),
                                e("div", p3, t(a(D)(m.bonusAmount)), 1),
                              ]),
                              e("div", v3, [
                                e("div", h3, t(h.$t("winningtime")), 1),
                                e("div", m3, t(m.createTime), 1),
                              ]),
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
              ["api", "list", "page-query"],
            ),
          ])
        );
      };
    },
  });
const y3 = V(g3, [["__scopeId", "data-v-f47a18d9"]]),
  o5 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: y3 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
export {
  X3 as A,
  Y3 as B,
  K3 as C,
  Q3 as D,
  J3 as E,
  e5 as F,
  t5 as G,
  a5 as H,
  n5 as I,
  o5 as J,
  S3 as a,
  x3 as b,
  B3 as c,
  A3 as d,
  L3 as e,
  T3 as f,
  I3 as g,
  M3 as h,
  k3 as i,
  D3 as j,
  N3 as k,
  O3 as l,
  R3 as m,
  P3 as n,
  F3 as o,
  G3 as p,
  U3 as q,
  V3 as r,
  E3 as s,
  z3 as t,
  It as u,
  j3 as v,
  Z3 as w,
  H3 as x,
  q3 as y,
  W3 as z,
};
