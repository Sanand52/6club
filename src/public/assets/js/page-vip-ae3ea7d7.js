import {
  X as x,
  r as T,
  F as pe,
  a2 as j,
  Z as i,
  _ as e,
  a6 as I,
  a7 as G,
  D as l,
  Y as a,
  a4 as S,
  a5 as P,
  ae as ee,
  a9 as C,
  a0 as s,
  a1 as D,
  aK as we,
  aL as Te,
  a8 as R,
  aR as ue,
  K as q,
  G as ve,
  T as _e,
  E as he,
  w as se,
  a3 as $e,
  aa as B,
  af as ne,
  ag as te,
  al as ke,
  x as be,
} from "./modules-aa8ffe67.js";
import {
  A as F,
  cA as Ve,
  g as v,
  S as Se,
  _ as H,
  a as Y,
  C as N,
  cB as Ce,
  cC as De,
  cD as Re,
  aW as E,
  aX as M,
  T as Ie,
  cE as ge,
  G as me,
  bi as Ae,
  cF as Ne,
  cG as J,
  bG as Ee,
} from "./page-activity-6d456111.js";
const Me = { class: "vip-content-card" },
  Ue = { class: "vip-content-card-item" },
  Be = { class: "itemInfo-right" },
  Pe = ["src"],
  Fe = { class: "itemInfo-head" },
  xe = ["src"],
  He = ["src"],
  We = { class: "bgg" },
  Ge = ["innerHTML"],
  ze = { class: "itemInfo-bottom mt50" },
  Oe = { class: "itemInfo-right" },
  Xe = ["src"],
  je = { class: "itemInfo-head" },
  qe = ["src"],
  Ke = ["src"],
  Qe = { class: "bgg" },
  Je = ["innerHTML"],
  Ye = { class: "mb8" },
  Ze = { class: "itemInfo-bottom" },
  Le = { class: "first" },
  es = { class: "left" },
  ss = { class: "right" },
  ns = ["innerHTML"],
  ts = { class: "itemInfo-right" },
  ls = ["src"],
  as = { class: "itemInfo-head" },
  os = ["src"],
  is = ["src"],
  cs = { class: "mb30" },
  rs = ["innerHTML"],
  ds = { class: "itemInfo-bottom" },
  ps = x({
    __name: "VipCard",
    props: { haspermission: { type: Boolean, default: () => !0 } },
    emits: ["changeLevel"],
    setup($, { expose: k, emit: d }) {
      const g = T(0);
      let f = {
          1: "#748AAA",
          2: "#D67D26",
          3: "#F05C5C",
          4: "#32B6E8",
          5: "#EA6ACA",
          6: "#1EB18B",
          7: "#1B9458",
          8: "#3470E6",
          9: "#8038F5",
          10: "#EF7B27",
        },
        p = T();
      function y(c) {
        p = c;
      }
      const r = T(!0),
        h = (c) => {
          r.value || d("changeLevel", n.value[c.activeIndex].id);
        },
        n = T([]);
      async function _() {
        var b;
        const c = await F(Ve());
        if (c) {
          n.value = c == null ? void 0 : c.data;
          let o = n.value.findIndex((L) => L.id == g.value);
          p.slideTo(o == -1 ? 0 : o);
          let t =
            n.value.length > 0
              ? (b = n.value[0]) == null
                ? void 0
                : b.amount
              : 1e3;
          sessionStorage.setItem("vipAmount", t);
        }
        r.value = !1;
      }
      function u(c, b) {
        return !b || !b ? 0 : c > b ? 100 : Math.round((c / b) * 1e4) / 100;
      }
      function A(c, b) {
        return c > b ? b : c;
      }
      const V = pe(() => Se().getDollarSign);
      return (
        k({ getVipUserLevelDetail: _, level: g }),
        (c, b) => {
          const o = j("van-progress");
          return (
            a(),
            i("div", Me, [
              e("div", Ue, [
                I(
                  l(Te),
                  {
                    class: "my-swipe",
                    slidesPerView: "auto",
                    centeredSlides: !0,
                    "space-between": 20,
                    onSlideChangeTransitionEnd: h,
                    onSwiper: y,
                  },
                  {
                    default: G(() => [
                      (a(!0),
                      i(
                        S,
                        null,
                        P(
                          n.value,
                          (t) => (
                            a(),
                            ee(
                              l(we),
                              { class: C(`itemInfo level${t.id}`), key: t.id },
                              {
                                default: G(() => [
                                  (t == null ? void 0 : t.status) == 2 &&
                                  t.id != g.value
                                    ? (a(),
                                      i(
                                        S,
                                        { key: 0 },
                                        [
                                          e("div", Be, [
                                            e(
                                              "img",
                                              {
                                                src: l(v)(
                                                  "vip/swiper/logo",
                                                  `${t.id}`,
                                                ),
                                              },
                                              null,
                                              8,
                                              Pe,
                                            ),
                                          ]),
                                          e("div", Fe, [
                                            e("div", null, [
                                              e(
                                                "img",
                                                {
                                                  src: l(v)(
                                                    "vip/swiper/crown",
                                                    `${t.id != 1 ? 2 : t.id}`,
                                                  ),
                                                },
                                                null,
                                                8,
                                                xe,
                                              ),
                                              e(
                                                "h1",
                                                {
                                                  class: C(
                                                    `level${t.id != 1 ? 2 : t.id}`,
                                                  ),
                                                },
                                                s(t.vipName),
                                                3,
                                              ),
                                              e(
                                                "img",
                                                {
                                                  src: l(v)(
                                                    "vip/swiper",
                                                    "HaveReached",
                                                  ),
                                                },
                                                null,
                                                8,
                                                He,
                                              ),
                                              e(
                                                "span",
                                                We,
                                                s(c.$t("achieved")),
                                                1,
                                              ),
                                            ]),
                                            e(
                                              "div",
                                              {
                                                class: C([
                                                  "border",
                                                  `level${t.id}`,
                                                ]),
                                              },
                                              [
                                                e(
                                                  "p",
                                                  {
                                                    innerHTML: c.$t("vipTip1", [
                                                      t.id,
                                                      t.id,
                                                    ]),
                                                  },
                                                  null,
                                                  8,
                                                  Ge,
                                                ),
                                              ],
                                              2,
                                            ),
                                          ]),
                                          e("div", ze, [
                                            t.upgradeStatus == 2
                                              ? (a(),
                                                i(
                                                  "h2",
                                                  {
                                                    key: 0,
                                                    class: C(`level${t.id}`),
                                                  },
                                                  s(c.$t("vipTip3", [t.id])),
                                                  3,
                                                ))
                                              : (a(),
                                                i(
                                                  "h2",
                                                  {
                                                    key: 1,
                                                    class: C(`level${t.id}`),
                                                  },
                                                  s(c.$t("vipTip14", [t.id])),
                                                  3,
                                                )),
                                          ]),
                                        ],
                                        64,
                                      ))
                                    : D("", !0),
                                  (t == null ? void 0 : t.id) == g.value
                                    ? (a(),
                                      i(
                                        S,
                                        { key: 1 },
                                        [
                                          e("div", Oe, [
                                            e(
                                              "img",
                                              {
                                                src: l(v)(
                                                  "vip/swiper/logo",
                                                  `${t.id}`,
                                                ),
                                              },
                                              null,
                                              8,
                                              Xe,
                                            ),
                                          ]),
                                          e("div", je, [
                                            e("div", null, [
                                              e(
                                                "img",
                                                {
                                                  src: l(v)(
                                                    "vip/swiper/crown",
                                                    `${t.id != 1 ? 2 : t.id}`,
                                                  ),
                                                },
                                                null,
                                                8,
                                                qe,
                                              ),
                                              e(
                                                "h1",
                                                {
                                                  class: C(
                                                    `level${t.id != 1 ? 2 : t.id}`,
                                                  ),
                                                },
                                                s(t.vipName),
                                                3,
                                              ),
                                              e(
                                                "img",
                                                {
                                                  src: l(v)(
                                                    "vip/swiper",
                                                    "HaveReached",
                                                  ),
                                                },
                                                null,
                                                8,
                                                Ke,
                                              ),
                                              e(
                                                "span",
                                                Qe,
                                                s(c.$t("achieved")),
                                                1,
                                              ),
                                            ]),
                                            e(
                                              "div",
                                              {
                                                class: C([
                                                  "border mb25",
                                                  `level${t.id}`,
                                                ]),
                                              },
                                              [
                                                e(
                                                  "p",
                                                  {
                                                    innerHTML: c.$t("vipTip1", [
                                                      t.id,
                                                      t.id,
                                                    ]),
                                                  },
                                                  null,
                                                  8,
                                                  Je,
                                                ),
                                              ],
                                              2,
                                            ),
                                            e(
                                              "div",
                                              Ye,
                                              s(c.$t("vipcondition")),
                                              1,
                                            ),
                                          ]),
                                          e("div", Ze, [
                                            e("div", Le, [
                                              e("div", es, [
                                                e(
                                                  "span",
                                                  {
                                                    class: C(
                                                      `level level${t.id}`,
                                                    ),
                                                  },
                                                  s(
                                                    $.haspermission
                                                      ? A(
                                                          t.relegationExp,
                                                          t.relegation,
                                                        )
                                                      : 0,
                                                  ) +
                                                    "/" +
                                                    s(t.relegation),
                                                  3,
                                                ),
                                              ]),
                                              e(
                                                "p",
                                                ss,
                                                s(
                                                  c.$t("completed1", [
                                                    u(
                                                      $.haspermission
                                                        ? A(
                                                            t.relegationExp,
                                                            t.relegation,
                                                          )
                                                        : 0,
                                                      t.relegation,
                                                    ),
                                                  ]),
                                                ),
                                                1,
                                              ),
                                            ]),
                                            e("div", null, [
                                              I(
                                                o,
                                                {
                                                  class: C(`level${t.id}`),
                                                  percentage: u(
                                                    $.haspermission
                                                      ? A(
                                                          t.relegationExp,
                                                          t.relegation,
                                                        )
                                                      : 0,
                                                    t.relegation,
                                                  ),
                                                  "stroke-width": "8",
                                                  color:
                                                    "linear-gradient(180deg, #FFFCE7 0%, #FFC821 100%)",
                                                  "track-color": l(f)[t.id],
                                                  "show-pivot": !1,
                                                },
                                                null,
                                                8,
                                                [
                                                  "class",
                                                  "percentage",
                                                  "track-color",
                                                ],
                                              ),
                                            ]),
                                            e("div", null, [
                                              e(
                                                "span",
                                                {
                                                  innerHTML: c.$t("vipTip2", [
                                                    t.deductExp,
                                                  ]),
                                                },
                                                null,
                                                8,
                                                ns,
                                              ),
                                            ]),
                                          ]),
                                        ],
                                        64,
                                      ))
                                    : D("", !0),
                                  (t == null ? void 0 : t.status) == 1 &&
                                  (t == null ? void 0 : t.id) != g.value
                                    ? (a(),
                                      i(
                                        S,
                                        { key: 2 },
                                        [
                                          e("div", ts, [
                                            e(
                                              "img",
                                              {
                                                src: l(v)(
                                                  "vip/swiper/logo",
                                                  `${t.id}`,
                                                ),
                                              },
                                              null,
                                              8,
                                              ls,
                                            ),
                                          ]),
                                          e("div", as, [
                                            e("div", null, [
                                              e(
                                                "img",
                                                {
                                                  src: l(v)(
                                                    "vip/swiper/crown",
                                                    `${t.id != 1 ? 2 : t.id}`,
                                                  ),
                                                },
                                                null,
                                                8,
                                                os,
                                              ),
                                              e(
                                                "h1",
                                                {
                                                  class: C(
                                                    `level${t.id != 1 ? 2 : t.id}`,
                                                  ),
                                                },
                                                s(t.vipName),
                                                3,
                                              ),
                                              e(
                                                "img",
                                                {
                                                  src: l(v)(
                                                    "vip/swiper",
                                                    "ununlocked",
                                                  ),
                                                },
                                                null,
                                                8,
                                                is,
                                              ),
                                              e(
                                                "span",
                                                null,
                                                s(c.$t("notUnlocked")),
                                                1,
                                              ),
                                            ]),
                                            e("div", cs, [
                                              e(
                                                "p",
                                                {
                                                  innerHTML: c.$t(
                                                    "experience",
                                                    [
                                                      t.id,
                                                      t.upgrade - t.currentExp,
                                                    ],
                                                  ),
                                                },
                                                null,
                                                8,
                                                rs,
                                              ),
                                            ]),
                                            e(
                                              "div",
                                              {
                                                class: C([
                                                  "border",
                                                  `level${t.id}`,
                                                ]),
                                              },
                                              s(
                                                c.$t("experience1", [
                                                  V.value,
                                                  t.amount,
                                                ]),
                                              ),
                                              3,
                                            ),
                                          ]),
                                          e("div", ds, [
                                            e("p", null, s(t.vipName), 1),
                                            e("div", null, [
                                              I(
                                                o,
                                                {
                                                  class: C(`level${t.id}`),
                                                  percentage: u(
                                                    $.haspermission
                                                      ? t.currentExp
                                                      : 0,
                                                    t.upgrade,
                                                  ),
                                                  "stroke-width": "8",
                                                  color:
                                                    "linear-gradient(180deg, #FFFCE7 0%, #FFC821 100%)",
                                                  "track-color": l(f)[t.id],
                                                  "show-pivot": !1,
                                                },
                                                null,
                                                8,
                                                [
                                                  "class",
                                                  "percentage",
                                                  "track-color",
                                                ],
                                              ),
                                            ]),
                                            e("div", null, [
                                              e(
                                                "span",
                                                {
                                                  class: C(
                                                    `level level${t.id}`,
                                                  ),
                                                },
                                                s(
                                                  $.haspermission
                                                    ? t.currentExp
                                                    : 0,
                                                ) +
                                                  "/" +
                                                  s(t.upgrade),
                                                3,
                                              ),
                                              e(
                                                "span",
                                                null,
                                                s(c.$t("upgrade", [t.upgrade])),
                                                1,
                                              ),
                                            ]),
                                          ]),
                                        ],
                                        64,
                                      ))
                                    : D("", !0),
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
                ),
              ]),
            ])
          );
        }
      );
    },
  });
const us = H(ps, [["__scopeId", "data-v-c164b937"]]),
  vs = { class: "vip-content-weal" },
  _s = { key: 0, class: "vip-content-weal-head" },
  hs = ["src"],
  $s = { class: "ar-1px-b" },
  gs = ["src"],
  ys = { key: 0 },
  fs = { key: 1 },
  ws = { key: 0 },
  Ts = ["src"],
  ks = ["src"],
  bs = { key: 1 },
  Vs = { class: "max" },
  Ss = ["src"],
  Cs = x({
    __name: "Weal",
    setup($, { expose: k }) {
      const { setLoading: d } = Y(),
        g = T(0),
        f = pe(() => (g.value == 0 ? 1 : g.value)),
        p = T([]);
      async function y(r) {
        d(!0);
        const h = await F(Ce({ vipLevel: r == 0 ? 1 : r }));
        h &&
          (p.value = h.data.filter(
            (n) => (n.id > 2 && n.rate > 0) || n.id <= 2,
          )),
          d(!1);
      }
      return (
        k({ getListVipLevel: y, level: g }),
        (r, h) => (
          a(),
          i("div", vs, [
            I(
              ue,
              { mode: "out-in" },
              {
                default: G(() => [
                  (a(),
                  i("div", { class: "slide", key: g.value }, [
                    p.value.length
                      ? (a(),
                        i("div", _s, [
                          e(
                            "img",
                            { src: l(v)("vip", "diamond") },
                            null,
                            8,
                            hs,
                          ),
                          e(
                            "h1",
                            $s,
                            "VIP" + s(f.value) + " " + s(r.$t("wealTXT1")),
                            1,
                          ),
                        ]))
                      : D("", !0),
                    (a(!0),
                    i(
                      S,
                      null,
                      P(
                        p.value,
                        (n, _) => (
                          a(),
                          i("div", { class: "vip-content-weal-con", key: _ }, [
                            e("div", null, [
                              e(
                                "img",
                                { src: l(v)("vip/weal", `${n.id}`) },
                                null,
                                8,
                                gs,
                              ),
                            ]),
                            e("div", null, [
                              n.id != 3
                                ? (a(),
                                  i("h2", ys, s(r.$t(`wealName${n.id}`)), 1))
                                : (a(),
                                  i("h2", fs, s(r.$t(`wealName${n.id}_1`)), 1)),
                              e(
                                "span",
                                null,
                                s(r.$t(`wealDescription${n.id}`)),
                                1,
                              ),
                            ]),
                            n.id == 1 || n.id == 2
                              ? (a(),
                                i("div", ws, [
                                  e("p", null, [
                                    e(
                                      "img",
                                      { src: l(v)("vip", "gold") },
                                      null,
                                      8,
                                      Ts,
                                    ),
                                    R(s(l(N)(n.balance, " ", 0)), 1),
                                  ]),
                                  e("p", null, [
                                    e(
                                      "img",
                                      { src: l(v)("vip", "love") },
                                      null,
                                      8,
                                      ks,
                                    ),
                                    R(s(l(N)(n.integral, " ", 0)), 1),
                                  ]),
                                ]))
                              : (a(),
                                i("div", bs, [
                                  e("p", Vs, [
                                    e(
                                      "img",
                                      { src: l(v)("vip/weal", `weal${n.id}`) },
                                      null,
                                      8,
                                      Ss,
                                    ),
                                    R(s(n.rate) + "%", 1),
                                  ]),
                                ])),
                          ])
                        ),
                      ),
                      128,
                    )),
                  ])),
                ]),
                _: 1,
              },
            ),
          ])
        )
      );
    },
  });
const Ds = H(Cs, [["__scopeId", "data-v-32afb31a"]]),
  Rs = { class: "vip-content-myWelfare" },
  Is = { class: "vip-content-myWelfare-head" },
  ms = ["src"],
  As = { class: "ar-1px-b" },
  Ns = { class: "vip-content-myWelfare-con" },
  Es = { class: "card" },
  Ms = { class: "card-head" },
  Us = ["src"],
  Bs = { class: "card-head-mon" },
  Ps = ["src"],
  Fs = ["src"],
  xs = { class: "card-bottom" },
  Hs = { key: 0, class: "noActive" },
  Ws = ["onClick"],
  Gs = { key: 1, class: "card" },
  zs = { class: "card-head tilt" },
  Os = ["src"],
  Xs = { class: "card-head-mon" },
  js = ["src"],
  qs = ["src"],
  Ks = ["src"],
  Qs = { class: "card-bottom" },
  Js = { key: 0 },
  Ys = { key: 1 },
  Zs = x({
    __name: "MyWelfare",
    emits: ["succeedDialog"],
    setup($, { expose: k, emit: d }) {
      const g = q(),
        { setLoading: f } = Y(),
        p = T(0),
        y = T([]);
      async function r(n) {
        f(!0);
        const _ = await F(De({ vipLevel: n }));
        _ &&
          (y.value = _.data.filter(
            (u) => (u.rewardType > 2 && u.rate > 0) || u.rewardType <= 2,
          )),
          f(!1);
      }
      async function h(n) {
        const _ = await F(
          Re({ receiveId: n.id, vipLevel: p.value, rewardType: n.rewardType }),
        );
        _ &&
          (r(p.value),
          _ != null &&
            _.data &&
            d("succeedDialog", {
              integral: _ == null ? void 0 : _.data.integral,
              balance: _ == null ? void 0 : _.data.balance,
            }));
      }
      return (
        k({ getListVipUserRewards: r, levelMy: p }),
        (n, _) => (
          a(),
          i("div", Rs, [
            I(
              ue,
              { mode: "out-in" },
              {
                default: G(() => [
                  (a(),
                  i("div", { class: "slideMy", key: p.value }, [
                    e("div", Is, [
                      e("img", { src: l(v)("vip", "crown") }, null, 8, ms),
                      e("h1", As, s(n.$t("vipDesc1")), 1),
                    ]),
                    e("div", Ns, [
                      (a(!0),
                      i(
                        S,
                        null,
                        P(
                          y.value,
                          (u, A) => (
                            a(),
                            i("div", { class: "cards", key: A }, [
                              u.rewardType == 1 || u.rewardType == 2
                                ? (a(),
                                  i(
                                    S,
                                    { key: 0 },
                                    [
                                      e("div", Es, [
                                        e("div", Ms, [
                                          e(
                                            "img",
                                            {
                                              src: l(v)(
                                                "vip/myWelfare",
                                                `welfare${u.rewardType}`,
                                              ),
                                            },
                                            null,
                                            8,
                                            Us,
                                          ),
                                          e("div", Bs, [
                                            e("p", null, [
                                              e(
                                                "img",
                                                { src: l(v)("vip", "gold") },
                                                null,
                                                8,
                                                Ps,
                                              ),
                                              R(s(l(N)(u.balance, " ", 0)), 1),
                                            ]),
                                            e("p", null, [
                                              e(
                                                "img",
                                                { src: l(v)("vip", "love2") },
                                                null,
                                                8,
                                                Fs,
                                              ),
                                              R(s(l(N)(u.integral, " ", 0)), 1),
                                            ]),
                                          ]),
                                        ]),
                                        e("div", xs, [
                                          e(
                                            "h1",
                                            null,
                                            s(n.$t(`wealName${u.rewardType}`)),
                                            1,
                                          ),
                                          e(
                                            "span",
                                            null,
                                            s(
                                              n.$t(
                                                `wealDescription${u.rewardType}`,
                                              ),
                                            ),
                                            1,
                                          ),
                                        ]),
                                      ]),
                                      u.status == 2
                                        ? (a(),
                                          i(
                                            "button",
                                            Hs,
                                            s(n.$t("vipDesc4")),
                                            1,
                                          ))
                                        : (a(),
                                          i(
                                            "button",
                                            {
                                              key: 1,
                                              class: "active",
                                              onClick: (V) => h(u),
                                            },
                                            s(n.$t("vipDesc7")),
                                            9,
                                            Ws,
                                          )),
                                    ],
                                    64,
                                  ))
                                : (a(),
                                  i("div", Gs, [
                                    e("div", zs, [
                                      e(
                                        "img",
                                        {
                                          src: l(v)(
                                            "vip/myWelfare",
                                            `welfare${u.rewardType}`,
                                          ),
                                        },
                                        null,
                                        8,
                                        Os,
                                      ),
                                      e("div", Xs, [
                                        e("p", null, [
                                          u.rewardType == 3
                                            ? (a(),
                                              i(
                                                "img",
                                                {
                                                  key: 0,
                                                  src: l(v)("vip", "wallet1"),
                                                },
                                                null,
                                                8,
                                                js,
                                              ))
                                            : u.rewardType == 4
                                              ? (a(),
                                                i(
                                                  "img",
                                                  {
                                                    key: 1,
                                                    src: l(v)(
                                                      "vip",
                                                      "insurance1",
                                                    ),
                                                  },
                                                  null,
                                                  8,
                                                  qs,
                                                ))
                                              : u.rewardType == 5
                                                ? (a(),
                                                  i(
                                                    "img",
                                                    {
                                                      key: 2,
                                                      src: l(v)("vip", "xm"),
                                                    },
                                                    null,
                                                    8,
                                                    Ks,
                                                  ))
                                                : D("", !0),
                                          R(" " + s(u.rate) + "% ", 1),
                                        ]),
                                      ]),
                                    ]),
                                    e("div", Qs, [
                                      u.rewardType != 3
                                        ? (a(),
                                          i(
                                            "h1",
                                            Js,
                                            s(n.$t(`wealName${u.rewardType}`)),
                                            1,
                                          ))
                                        : (a(),
                                          i(
                                            "h1",
                                            Ys,
                                            s(
                                              n.$t(`wealName${u.rewardType}_1`),
                                            ),
                                            1,
                                          )),
                                      e(
                                        "span",
                                        null,
                                        s(
                                          n.$t(
                                            `wealDescription${u.rewardType}`,
                                          ),
                                        ),
                                        1,
                                      ),
                                      u.rewardType == 5
                                        ? (a(),
                                          i(
                                            "div",
                                            {
                                              key: 2,
                                              class: "viewD",
                                              onClick:
                                                _[0] ||
                                                (_[0] = (V) =>
                                                  l(g).push({
                                                    name: "RebateDetails",
                                                  })),
                                            },
                                            s(n.$t("viewDetail")),
                                            1,
                                          ))
                                        : D("", !0),
                                    ]),
                                  ])),
                            ])
                          ),
                        ),
                        128,
                      )),
                    ]),
                  ])),
                ]),
                _: 1,
              },
            ),
          ])
        )
      );
    },
  });
const Ls = H(Zs, [["__scopeId", "data-v-7f8fb247"]]),
  U = ($) => (ne("data-v-ce3e6ca0"), ($ = $()), te(), $),
  en = { class: "vip-content-recordVsrule" },
  sn = { class: "vip-content-recordVsrule-head" },
  nn = { class: "vip-content-recordVsrule-con" },
  tn = { class: "item-left" },
  ln = { class: "green" },
  an = { class: "item-right" },
  on = ["src"],
  cn = ["src"],
  rn = { class: "item-left" },
  dn = { class: "red" },
  pn = { class: "item-right" },
  un = U(() => e("span", null, null, -1)),
  vn = U(() => e("span", null, null, -1)),
  _n = { key: 2, class: "item-left" },
  hn = { class: "yellow" },
  $n = { class: "item-left" },
  gn = { class: "blue" },
  yn = { class: "item-right" },
  fn = U(() => e("span", null, null, -1)),
  wn = U(() => e("span", null, null, -1)),
  Tn = { class: "green" },
  kn = { key: 4, class: "item-left" },
  bn = { class: "yellow" },
  Vn = { key: 1, class: "vip-content-recordVsrule-con" },
  Sn = { class: "con-content" },
  Cn = { class: "con-content__title" },
  Dn = { class: "con-content__rules" },
  Rn = U(() =>
    e(
      "div",
      { class: "con-content__rules-item__splitBorder" },
      [e("span")],
      -1,
    ),
  ),
  In = U(() =>
    e(
      "div",
      { class: "con-content__rules-item__borderTopStyle" },
      [e("span"), e("span")],
      -1,
    ),
  ),
  mn = U(() =>
    e("div", { class: "con-content__rules-item__titleLeft" }, null, -1),
  ),
  An = { class: "con-content__rules-item__title" },
  Nn = U(() =>
    e("div", { class: "con-content__rules-item__titleRight" }, null, -1),
  ),
  En = x({
    __name: "RecordVsrule",
    setup($, { expose: k }) {
      const { t: d } = ve(),
        g = q();
      let f = _e("permission", null);
      f && (f = JSON.parse(f.value));
      const p = T(1);
      f && f[18] === !1 && (p.value = 2);
      const y = [
        {
          title: d("promotionCriteria"),
          content: d("rVsTip1", [sessionStorage.getItem("vipAmount") || 1e3]),
        },
        { title: d("promotionOrder"), content: d("rVsTip2") },
        { title: d("relegationRequirements"), content: d("rVsTip3") },
        { title: d("downgradeStandard"), content: d("rVsTip4") },
        { title: d("upgradeReward"), content: d("rVsTip5") },
        { title: d("wealName2"), content: d("rVsTip6") },
        { title: d("wealName3"), content: d("rVsTip7") },
        { title: d("wealName4"), content: d("rVsTip8") },
      ];
      function r(V, c) {
        switch (V) {
          case 1:
            return d("vipTip12");
          case 2:
            return d("vipTip13");
          case 3:
            return d("vipTip10");
          case 4:
            return d("vipTip11", [c]);
          case 5:
            return d("vipTip6", [c]);
          case 6:
            return d("vipTip7");
          case 7:
            return d("vipTip15", [c]);
          case 8:
            return d("vipTip17", [c]);
        }
      }
      function h(V) {
        p.value = V;
      }
      function n() {
        g.push({ name: "RecordVsruleHistory" });
      }
      const _ = he({ pageSize: 10, pageNo: 1 }),
        u = T([]);
      async function A() {
        const V = await F(ge(_));
        V && (u.value = V.data.list);
      }
      return (
        se(() => {
          A();
        }),
        k({ getPageListVipUserRecord: A }),
        (V, c) => {
          const b = $e("haspermission");
          return (
            a(),
            i("div", en, [
              e("div", sn, [
                B(
                  (a(),
                  i(
                    "button",
                    {
                      class: C({ active: p.value == 1 }),
                      onClick: c[0] || (c[0] = (o) => h(1)),
                    },
                    [R(s(V.$t("record")), 1)],
                    2,
                  )),
                  [[b, 18]],
                ),
                e(
                  "button",
                  {
                    class: C({ active: p.value == 2 }),
                    onClick: c[1] || (c[1] = (o) => h(2)),
                  },
                  s(V.$t("rule")),
                  3,
                ),
              ]),
              p.value == 1
                ? (a(),
                  i(
                    S,
                    { key: 0 },
                    [
                      B(
                        (a(),
                        i("div", nn, [
                          u.value.length > 0
                            ? (a(!0),
                              i(
                                S,
                                { key: 0 },
                                P(
                                  u.value,
                                  (o, t) => (
                                    a(),
                                    i(
                                      "div",
                                      { class: "item ar-1px-b", key: t },
                                      [
                                        o.type == 1 || o.type == 2
                                          ? (a(),
                                            i(
                                              S,
                                              { key: 0 },
                                              [
                                                e("div", tn, [
                                                  e(
                                                    "span",
                                                    ln,
                                                    s(
                                                      l(E)(
                                                        l(M).VipType,
                                                        o.type,
                                                      ),
                                                    ),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    s(r(o.type, o.remark)),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    s(o.createTime),
                                                    1,
                                                  ),
                                                ]),
                                                e("div", an, [
                                                  e("p", null, [
                                                    e(
                                                      "img",
                                                      {
                                                        src: l(v)(
                                                          "vip",
                                                          "gold",
                                                        ),
                                                      },
                                                      null,
                                                      8,
                                                      on,
                                                    ),
                                                    R(
                                                      s(
                                                        l(N)(
                                                          o.awardAmount,
                                                          " ",
                                                          0,
                                                        ),
                                                      ),
                                                      1,
                                                    ),
                                                  ]),
                                                  e("p", null, [
                                                    e(
                                                      "img",
                                                      {
                                                        src: l(v)(
                                                          "vip",
                                                          "love",
                                                        ),
                                                      },
                                                      null,
                                                      8,
                                                      cn,
                                                    ),
                                                    R(
                                                      s(
                                                        l(N)(
                                                          o.bonusPoints,
                                                          " ",
                                                          0,
                                                        ),
                                                      ),
                                                      1,
                                                    ),
                                                  ]),
                                                ]),
                                              ],
                                              64,
                                            ))
                                          : D("", !0),
                                        o.type == 3 || o.type == 4
                                          ? (a(),
                                            i(
                                              S,
                                              { key: 1 },
                                              [
                                                e("div", rn, [
                                                  e(
                                                    "span",
                                                    dn,
                                                    s(
                                                      l(E)(
                                                        l(M).VipType,
                                                        o.type,
                                                      ),
                                                    ),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    s(r(o.type, o.remark)),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    s(o.createTime),
                                                    1,
                                                  ),
                                                ]),
                                                e("div", pn, [
                                                  un,
                                                  vn,
                                                  e(
                                                    "span",
                                                    null,
                                                    s(o.experience) + " EXP",
                                                    1,
                                                  ),
                                                ]),
                                              ],
                                              64,
                                            ))
                                          : D("", !0),
                                        o.type == 5
                                          ? (a(),
                                            i("div", _n, [
                                              e(
                                                "span",
                                                hn,
                                                s(l(E)(l(M).VipType, o.type)),
                                                1,
                                              ),
                                              e(
                                                "span",
                                                null,
                                                s(r(o.type, o.remark)),
                                                1,
                                              ),
                                              e(
                                                "span",
                                                null,
                                                s(o.createTime),
                                                1,
                                              ),
                                            ]))
                                          : D("", !0),
                                        o.type == 6
                                          ? (a(),
                                            i(
                                              S,
                                              { key: 3 },
                                              [
                                                e("div", $n, [
                                                  e(
                                                    "span",
                                                    gn,
                                                    s(
                                                      l(E)(
                                                        l(M).VipType,
                                                        o.type,
                                                      ),
                                                    ),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    s(r(o.type, o.remark)),
                                                    1,
                                                  ),
                                                  e(
                                                    "span",
                                                    null,
                                                    s(o.createTime),
                                                    1,
                                                  ),
                                                ]),
                                                e("div", yn, [
                                                  fn,
                                                  wn,
                                                  e(
                                                    "span",
                                                    Tn,
                                                    s(o.experience) + " EXP",
                                                    1,
                                                  ),
                                                ]),
                                              ],
                                              64,
                                            ))
                                          : D("", !0),
                                        [7, 8].includes(o.type)
                                          ? (a(),
                                            i("div", kn, [
                                              e(
                                                "span",
                                                bn,
                                                s(l(E)(l(M).VipType, o.type)),
                                                1,
                                              ),
                                              e(
                                                "span",
                                                null,
                                                s(r(o.type, o.remark)),
                                                1,
                                              ),
                                              e(
                                                "span",
                                                null,
                                                s(o.createTime),
                                                1,
                                              ),
                                            ]))
                                          : D("", !0),
                                      ],
                                    )
                                  ),
                                ),
                                128,
                              ))
                            : (a(), ee(Ie, { key: 1 })),
                        ])),
                        [[b, 18]],
                      ),
                      B(
                        (a(),
                        i("button", { onClick: n }, [
                          R(s(V.$t("viewAll")), 1),
                        ])),
                        [[b, 18]],
                      ),
                    ],
                    64,
                  ))
                : (a(),
                  i("div", Vn, [
                    e("div", Sn, [
                      e("div", Cn, [
                        e("h1", null, s(V.$t("vipPrivilege")), 1),
                        e("p", null, s(V.$t("vipRule")), 1),
                      ]),
                      e("div", Dn, [
                        (a(),
                        i(
                          S,
                          null,
                          P(y, (o, t) =>
                            e(
                              "div",
                              { class: "con-content__rules-item", key: t },
                              [
                                Rn,
                                In,
                                mn,
                                e("div", An, s(o.title), 1),
                                Nn,
                                e("p", null, s(o.content), 1),
                              ],
                            ),
                          ),
                          64,
                        )),
                      ]),
                    ]),
                  ])),
            ])
          );
        }
      );
    },
  });
const Mn = H(En, [["__scopeId", "data-v-ce3e6ca0"]]),
  Un = { class: "vip" },
  Bn = { class: "vip-header" },
  Pn = { class: "vip-header-wrapper" },
  Fn = ["data-img"],
  xn = { class: "vip-header-wrapper-name" },
  Hn = { class: "vip-header-wrapper-name-nickName" },
  Wn = { class: "vip-content" },
  Gn = { class: "vip-content-empirical" },
  zn = { class: "red" },
  On = ["innerHTML"],
  Xn = { class: "vip-content-tip" },
  jn = { class: "succeed" },
  qn = { class: "van-dialog__content-title" },
  Kn = { class: "van-dialog__content-note" },
  Qn = { class: "red" },
  Jn = ["src"],
  Yn = { class: "yellow" },
  Zn = ["src"],
  Ln = ["innerHTML"],
  et = { class: "van-dialog__content-btn" },
  st = x({
    __name: "index",
    setup($) {
      const d = me().getUserInfo,
        g = T(v("main/Avatar", d.userPhoto)),
        f = q(),
        { setLoading: p } = Y(),
        y = T(!1),
        r = T(),
        h = T(),
        n = T(),
        _ = T(),
        u = T(),
        A = T(!1);
      function V() {
        f.push({ name: "Avatar" });
      }
      let c = _e("permission", null);
      c && (c = JSON.parse(c.value));
      const b = T(!0);
      c && c[18] === !1 && (b.value = !1);
      const o = T();
      async function t() {
        var m, K, Q, W, z, O;
        p(!0);
        const w = await F(Ae());
        w &&
          w != null &&
          w.data &&
          ((o.value = w.data),
          (n.value.level = (m = o.value) == null ? void 0 : m.vipLevel),
          n.value.getListVipLevel((K = o.value) == null ? void 0 : K.vipLevel),
          ((Q = o.value) == null ? void 0 : Q.vipLevel) > 0 &&
            ((_.value.levelMy = (W = o.value) == null ? void 0 : W.vipLevel),
            _.value.getListVipUserRewards(
              (z = o.value) == null ? void 0 : z.vipLevel,
            )),
          (h.value.level = (O = o.value) == null ? void 0 : O.vipLevel),
          await h.value.getVipUserLevelDetail(),
          (A.value = !0)),
          p(!1);
      }
      se(() => {
        t();
      });
      function L(w) {
        be(() => {
          var m;
          (n.value.level = w),
            n.value.getListVipLevel(w),
            w <= ((m = o.value) == null ? void 0 : m.vipLevel) &&
              ((_.value.levelMy = w), _.value.getListVipUserRewards(w));
        });
      }
      function ye(w) {
        (r.value = w), (y.value = !0);
      }
      function fe() {
        (y.value = !1), u.value.getPageListVipUserRecord();
      }
      return (w, m) => {
        var z, O, ae, oe, ie;
        const K = j("NavBar"),
          Q = j("van-dialog"),
          W = $e("lazy");
        return (
          a(),
          i("div", Un, [
            e("div", Bn, [
              I(K, {
                title: "VIP",
                backgroundColor:
                  "linear-gradient(90deg, #2b3270 0%, #D9AD82 100%)",
                "left-arrow": "",
                onClickLeft: m[0] || (m[0] = (X) => l(f).go(-1)),
              }),
              e("div", Pn, [
                e("div", { class: "vip-header-wrapper-avatar", onClick: V }, [
                  B(
                    e(
                      "img",
                      { "data-img": l(v)("images", "avatar1") },
                      null,
                      8,
                      Fn,
                    ),
                    [[W, g.value]],
                  ),
                ]),
                e("div", xn, [
                  e(
                    "div",
                    {
                      class: C([
                        "vip-header-wrapper-name-vip",
                        ["n" + ((z = o.value) == null ? void 0 : z.vipLevel)],
                      ]),
                    },
                    null,
                    2,
                  ),
                  e("div", Hn, [
                    e(
                      "h3",
                      null,
                      s((O = o.value) == null ? void 0 : O.nickName),
                      1,
                    ),
                  ]),
                ]),
              ]),
            ]),
            e("div", Wn, [
              e("div", Gn, [
                e("div", null, [
                  e(
                    "p",
                    zn,
                    s(
                      w.$t("eightThousandEXP", [
                        b.value
                          ? (ae = o.value) == null
                            ? void 0
                            : ae.exp
                          : 0,
                      ]),
                    ),
                    1,
                  ),
                  e("p", null, s(w.$t("myExperience")), 1),
                ]),
                e("div", null, [
                  e(
                    "p",
                    {
                      class: "timeTop",
                      innerHTML: w.$t("fifteenDays", [
                        b.value
                          ? (oe = o.value) == null
                            ? void 0
                            : oe.settlementDate
                          : 0,
                      ]),
                    },
                    null,
                    8,
                    On,
                  ),
                  e("p", null, s(w.$t("settlementTime")), 1),
                ]),
              ]),
              e("div", Xn, s(w.$t("vipTip18")), 1),
              I(
                us,
                {
                  ref_key: "vipCardRef",
                  ref: h,
                  haspermission: b.value,
                  onChangeLevel: L,
                },
                null,
                8,
                ["haspermission"],
              ),
              I(Ds, { ref_key: "weal", ref: n }, null, 512),
              B(
                I(
                  Ls,
                  { onSucceedDialog: ye, ref_key: "myWelfare", ref: _ },
                  null,
                  512,
                ),
                [[ke, ((ie = o.value) == null ? void 0 : ie.vipLevel) > 0]],
              ),
              A.value
                ? (a(),
                  ee(
                    Mn,
                    { key: 0, ref_key: "recordVsrule", ref: u },
                    null,
                    512,
                  ))
                : D("", !0),
            ]),
            I(
              Q,
              {
                show: y.value,
                "onUpdate:show": m[2] || (m[2] = (X) => (y.value = X)),
                "show-confirm-button": !1,
                "z-index": "99",
              },
              {
                default: G(() => {
                  var X, ce, re, de;
                  return [
                    B(e("img", jn, null, 512), [[W, l(v)("vip", "succeed")]]),
                    e("div", qn, s(w.$t("receivedSuccessfully")), 1),
                    e("div", Kn, [
                      e("div", null, [
                        e("p", Qn, [
                          e("img", { src: l(v)("vip", "love") }, null, 8, Jn),
                          R(
                            s(
                              l(N)(
                                (X = r.value) == null ? void 0 : X.integral,
                                " ",
                                0,
                              ),
                            ),
                            1,
                          ),
                        ]),
                        e("p", Yn, [
                          e("img", { src: l(v)("vip", "gold") }, null, 8, Zn),
                          R(
                            s(
                              l(N)(
                                (ce = r.value) == null ? void 0 : ce.balance,
                                " ",
                                0,
                              ),
                            ),
                            1,
                          ),
                        ]),
                      ]),
                      e("div", null, [
                        e(
                          "p",
                          {
                            innerHTML: w.$t("vipTip4", [
                              (re = r.value) == null ? void 0 : re.integral,
                              (de = r.value) == null ? void 0 : de.balance,
                            ]),
                          },
                          null,
                          8,
                          Ln,
                        ),
                      ]),
                    ]),
                    e("div", et, [
                      e("button", { onClick: fe }, s(w.$t("sure")), 1),
                    ]),
                    B(
                      e(
                        "img",
                        {
                          class: "close",
                          onClick: m[1] || (m[1] = (Mt) => (y.value = !1)),
                        },
                        null,
                        512,
                      ),
                      [[W, l(v)("main", "close")]],
                    ),
                  ];
                }),
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
const nt = H(st, [["__scopeId", "data-v-8f27a2e4"]]),
  Pt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: nt },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  le = ($) => (ne("data-v-e21f063b"), ($ = $()), te(), $),
  tt = { class: "vip-RebateDetails" },
  lt = { class: "item" },
  at = le(() => e("div", { class: "line" }, null, -1)),
  ot = le(() => e("div", { class: "line" }, null, -1)),
  it = le(() => e("div", { class: "line" }, null, -1)),
  ct = x({
    __name: "index",
    setup($) {
      const { setLoading: k } = Y(),
        d = q(),
        g = T([]);
      async function f() {
        k(!0);
        const p = await F(Ne());
        p &&
          ((g.value = p.data),
          g.value.sort(function (y, r) {
            return y.id - r.id;
          })),
          k(!1);
      }
      return (
        se(() => {
          f();
        }),
        (p, y) => {
          const r = j("NavBar");
          return (
            a(),
            i("div", tt, [
              I(
                r,
                {
                  title: p.$t("RebateDetailTip1"),
                  "left-arrow": "",
                  onClickLeft: y[0] || (y[0] = (h) => l(d).go(-1)),
                },
                null,
                8,
                ["title"],
              ),
              e("h1", null, s(p.$t("RebateDetailTip2")), 1),
              (a(!0),
              i(
                S,
                null,
                P(
                  g.value,
                  (h) => (
                    a(),
                    i("div", { class: "vip-RebateDetails-items", key: h.id }, [
                      e(
                        "div",
                        { class: C(["header ar-1px-b", `bg${h.id}`]) },
                        null,
                        2,
                      ),
                      e("div", lt, [
                        e("div", null, [
                          e("span", null, s(p.$t("RebateDetailTip3")), 1),
                          e(
                            "span",
                            null,
                            s(l(J)(h.electronic || 0, 100)) + " %",
                            1,
                          ),
                        ]),
                        at,
                        e("div", null, [
                          e("span", null, s(p.$t("RebateDetailTip4")), 1),
                          e(
                            "span",
                            null,
                            s(l(J)(h.realPerson || 0, 100)) + " %",
                            1,
                          ),
                        ]),
                        ot,
                        e("div", null, [
                          e("span", null, s(p.$t("RebateDetailTip6")), 1),
                          e(
                            "span",
                            null,
                            s(l(J)(h.lottery || 0, 100)) + " %",
                            1,
                          ),
                        ]),
                        it,
                        e("div", null, [
                          e("span", null, s(p.$t("RebateDetailTip7")), 1),
                          e("span", null, s(l(J)(h.chess || 0, 100)) + " %", 1),
                        ]),
                      ]),
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
const rt = H(ct, [["__scopeId", "data-v-e21f063b"]]),
  Ft = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: rt },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Z = ($) => (ne("data-v-ba16fb3d"), ($ = $()), te(), $),
  dt = { class: "vip-content-recordVsrule" },
  pt = { class: "vip-content-recordVsrule-con" },
  ut = { class: "item-left" },
  vt = { class: "green" },
  _t = { class: "item-right" },
  ht = ["src"],
  $t = ["src"],
  gt = { class: "item-left" },
  yt = { class: "red" },
  ft = { class: "item-right" },
  wt = Z(() => e("span", null, null, -1)),
  Tt = Z(() => e("span", null, null, -1)),
  kt = { key: 2, class: "item-left" },
  bt = { class: "yellow" },
  Vt = { class: "item-left" },
  St = { class: "blue" },
  Ct = { class: "item-right" },
  Dt = Z(() => e("span", null, null, -1)),
  Rt = Z(() => e("span", null, null, -1)),
  It = { class: "green" },
  mt = { key: 4, class: "item-left" },
  At = { class: "yellow" },
  Nt = x({
    __name: "index",
    setup($) {
      const { t: k } = ve(),
        d = q(),
        g = he({ pageSize: 20 }),
        f = T([]);
      function p(y, r) {
        switch (y) {
          case 1:
            return k("vipTip12");
          case 2:
            return k("vipTip13");
          case 3:
            return k("vipTip10");
          case 4:
            return k("vipTip11", [r]);
          case 5:
            return k("vipTip6", [r]);
          case 6:
            return k("vipTip7");
          case 7:
            return k("vipTip15", [r]);
          case 8:
            return k("vipTip17", [r]);
        }
      }
      return (y, r) => {
        const h = j("NavBar");
        return (
          a(),
          i("div", dt, [
            I(
              h,
              {
                title: y.$t("record"),
                "left-arrow": "",
                onClickLeft: r[0] || (r[0] = (n) => l(d).go(-1)),
              },
              null,
              8,
              ["title"],
            ),
            I(
              Ee,
              {
                api: l(ge),
                list: f.value,
                "onUpdate:list": r[1] || (r[1] = (n) => (f.value = n)),
                "page-query": g,
                "onUpdate:pageQuery": r[2] || (r[2] = (n) => (g = n)),
                ref: "listRef",
              },
              {
                content: G(() => [
                  e("div", pt, [
                    (a(!0),
                    i(
                      S,
                      null,
                      P(
                        f.value,
                        (n, _) => (
                          a(),
                          i("div", { class: "item ar-1px-b", key: _ }, [
                            n.type == 1 || n.type == 2
                              ? (a(),
                                i(
                                  S,
                                  { key: 0 },
                                  [
                                    e("div", ut, [
                                      e(
                                        "span",
                                        vt,
                                        s(l(E)(l(M).VipType, n.type)),
                                        1,
                                      ),
                                      e(
                                        "span",
                                        null,
                                        s(p(n.type, n.remark)),
                                        1,
                                      ),
                                      e("span", null, s(n.createTime), 1),
                                    ]),
                                    e("div", _t, [
                                      e("p", null, [
                                        e(
                                          "img",
                                          { src: l(v)("vip", "gold") },
                                          null,
                                          8,
                                          ht,
                                        ),
                                        R(s(l(N)(n.awardAmount, " ", 0)), 1),
                                      ]),
                                      e("p", null, [
                                        e(
                                          "img",
                                          { src: l(v)("vip", "love3") },
                                          null,
                                          8,
                                          $t,
                                        ),
                                        R(s(l(N)(n.bonusPoints, " ", 0)), 1),
                                      ]),
                                    ]),
                                  ],
                                  64,
                                ))
                              : D("", !0),
                            n.type == 3 || n.type == 4
                              ? (a(),
                                i(
                                  S,
                                  { key: 1 },
                                  [
                                    e("div", gt, [
                                      e(
                                        "span",
                                        yt,
                                        s(l(E)(l(M).VipType, n.type)),
                                        1,
                                      ),
                                      e(
                                        "span",
                                        null,
                                        s(p(n.type, n.remark)),
                                        1,
                                      ),
                                      e("span", null, s(n.createTime), 1),
                                    ]),
                                    e("div", ft, [
                                      wt,
                                      Tt,
                                      e(
                                        "span",
                                        null,
                                        s(n.experience) + " EXP",
                                        1,
                                      ),
                                    ]),
                                  ],
                                  64,
                                ))
                              : D("", !0),
                            n.type == 5
                              ? (a(),
                                i("div", kt, [
                                  e(
                                    "span",
                                    bt,
                                    s(l(E)(l(M).VipType, n.type)),
                                    1,
                                  ),
                                  e("span", null, s(p(n.type, n.remark)), 1),
                                  e("span", null, s(n.createTime), 1),
                                ]))
                              : D("", !0),
                            n.type == 6
                              ? (a(),
                                i(
                                  S,
                                  { key: 3 },
                                  [
                                    e("div", Vt, [
                                      e(
                                        "span",
                                        St,
                                        s(l(E)(l(M).VipType, n.type)),
                                        1,
                                      ),
                                      e(
                                        "span",
                                        null,
                                        s(p(n.type, n.remark)),
                                        1,
                                      ),
                                      e("span", null, s(n.createTime), 1),
                                    ]),
                                    e("div", Ct, [
                                      Dt,
                                      Rt,
                                      e(
                                        "span",
                                        It,
                                        s(l(N)(n.experience, " ", 0)) + " EXP",
                                        1,
                                      ),
                                    ]),
                                  ],
                                  64,
                                ))
                              : D("", !0),
                            [7, 8].includes(n.type)
                              ? (a(),
                                i("div", mt, [
                                  e(
                                    "span",
                                    At,
                                    s(l(E)(l(M).VipType, n.type)),
                                    1,
                                  ),
                                  e("span", null, s(p(n.type, n.remark)), 1),
                                  e("span", null, s(n.createTime), 1),
                                ]))
                              : D("", !0),
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
const Et = H(Nt, [["__scopeId", "data-v-ba16fb3d"]]),
  xt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Et },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
export { Ft as a, xt as b, Pt as i };
