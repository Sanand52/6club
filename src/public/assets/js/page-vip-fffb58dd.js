import {
    V as F,
    r as b,
    F as ue,
    a0 as J,
    X as o,
    Y as e,
    a4 as D,
    a5 as O,
    D as l,
    W as i,
    a2 as m,
    a3 as U,
    ac as se,
    $,
    a7 as R,
    _ as s,
    aJ as Te,
    aK as ke,
    a6 as I,
    aT as ve,
    K,
    G as _e,
    T as he,
    E as $e,
    w as ne,
    a1 as ge,
    a8 as z,
    ad as te,
    ae as le,
    ai as Ve,
    x as me
} from "./modules-3ee1a0d5.js";
import {
    A as B,
    cs as Se,
    h as A,
    S as Re,
    _ as H,
    a as Z,
    g as S,
    x as M,
    ct as Ce,
    cu as Ie,
    cv as De,
    bc as N,
    bd as x,
    O as Ae,
    cw as ye,
    G as Ee,
    b3 as Me,
    cx as Ne,
    cy as Y,
    by as xe
} from "./page-activity-b0cc3a5b.js";
const Pe = {
        class: "vip-content-card"
    },
    Ue = {
        class: "vip-content-card-item"
    },
    Be = {
        class: "itemInfo-right"
    },
    Fe = ["src"],
    He = {
        class: "itemInfo-head"
    },
    We = ["src"],
    je = ["src"],
    ze = {
        class: "bgg"
    },
    Oe = ["innerHTML"],
    Ge = {
        class: "itemInfo-bottom mt50"
    },
    Xe = {
        class: "itemInfo-right"
    },
    qe = ["src"],
    Je = {
        class: "itemInfo-head"
    },
    Ke = ["src"],
    Qe = ["src"],
    Ye = {
        class: "bgg"
    },
    Ze = ["innerHTML"],
    Le = {
        class: "mb8"
    },
    es = {
        class: "itemInfo-bottom"
    },
    ss = {
        class: "first"
    },
    ns = {
        class: "left"
    },
    ts = {
        class: "right"
    },
    ls = ["innerHTML"],
    as = {
        class: "itemInfo-right"
    },
    is = ["src"],
    os = {
        class: "itemInfo-head"
    },
    cs = ["src"],
    rs = ["src"],
    ds = {
        class: "mb30"
    },
    ps = ["innerHTML"],
    us = {
        class: "itemInfo-bottom"
    },
    vs = F({
        __name: "VipCard",
        props: {
            haspermission: {
                type: Boolean,
                default: () => !0
            }
        },
        emits: ["changeLevel"],
        setup(y, {
            expose: T,
            emit: d
        }) {
            const g = b(0);
            let w = {
                    1: "#748AAA",
                    2: "#D67D26",
                    3: "#F05C5C",
                    4: "#32B6E8",
                    5: "#EA6ACA",
                    6: "#1EB18B",
                    7: "#1B9458",
                    8: "#3470E6",
                    9: "#8038F5",
                    10: "#EF7B27"
                },
                p = b();

            function f(c) {
                p = c
            }
            const r = b(!0),
                _ = c => {
                    r.value || d("changeLevel", n.value[c.activeIndex].id)
                },
                n = b([]);
            async function v() {
                var k;
                const c = await B(Se());
                if (c) {
                    n.value = c == null ? void 0 : c.data;
                    let a = n.value.findIndex(ee => ee.id == g.value);
                    p.slideTo(a == -1 ? 0 : a);
                    let t = n.value.length > 0 ? (k = n.value[0]) == null ? void 0 : k.amount : 1e3;
                    sessionStorage.setItem("vipAmount", t)
                }
                r.value = !1
            }

            function u(c, k) {
                return !k || !k ? 0 : c > k ? 100 : Math.round(c / k * 1e4) / 100
            }

            function E(c, k) {
                return c > k ? k : c
            }
            const V = ue(() => Re().getDollarSign);
            return T({
                getVipUserLevelDetail: v,
                level: g
            }), (c, k) => {
                const a = J("van-progress");
                return i(), o("div", Pe, [e("div", Ue, [D(l(ke), {
                    class: "my-swipe",
                    slidesPerView: "auto",
                    centeredSlides: !0,
                    "space-between": 20,
                    onSlideChangeTransitionEnd: _,
                    onSwiper: f
                }, {
                    default: O(() => [(i(!0), o(m, null, U(n.value, t => (i(), se(l(Te), {
                        class: R(`itemInfo level${t.id}`),
                        key: t.id
                    }, {
                        default: O(() => [$("status:2 已达成"), (t == null ? void 0 : t.status) == 2 && t.id != g.value ? (i(), o(m, {
                            key: 0
                        }, [e("div", Be, [e("img", {
                            src: l(A)("vip/swiper/logo", `${t.id}`)
                        }, null, 8, Fe)]), e("div", He, [e("div", null, [e("img", {
                            src: l(A)("vip/swiper/crown", `${t.id!=1?2:t.id}`)
                        }, null, 8, We), e("h1", {
                            class: R(`level${t.id!=1?2:t.id}`)
                        }, s(t.vipName), 3), e("img", {
                            src: l(A)("vip/swiper", "HaveReached")
                        }, null, 8, je), e("span", ze, s(c.$t("achieved")), 1)]), e("div", {
                            class: R(["border", `level${t.id}`])
                        }, [e("p", {
                            innerHTML: c.$t("vipTip1", [t.id, t.id])
                        }, null, 8, Oe)], 2)]), e("div", Ge, [t.upgradeStatus == 2 ? (i(), o("h2", {
                            key: 0,
                            class: R(`level${t.id}`)
                        }, s(c.$t("vipTip3", [t.id])), 3)) : (i(), o("h2", {
                            key: 1,
                            class: R(`level${t.id}`)
                        }, s(c.$t("vipTip14", [t.id])), 3))])], 64)) : $("v-if", !0), (t == null ? void 0 : t.id) == g.value ? (i(), o(m, {
                            key: 1
                        }, [e("div", Xe, [e("img", {
                            src: l(A)("vip/swiper/logo", `${t.id}`)
                        }, null, 8, qe)]), e("div", Je, [e("div", null, [e("img", {
                            src: l(A)("vip/swiper/crown", `${t.id!=1?2:t.id}`)
                        }, null, 8, Ke), e("h1", {
                            class: R(`level${t.id!=1?2:t.id}`)
                        }, s(t.vipName), 3), e("img", {
                            src: l(A)("vip/swiper", "HaveReached")
                        }, null, 8, Qe), e("span", Ye, s(c.$t("achieved")), 1)]), e("div", {
                            class: R(["border mb25", `level${t.id}`])
                        }, [e("p", {
                            innerHTML: c.$t("vipTip1", [t.id, t.id])
                        }, null, 8, Ze)], 2), e("div", Le, s(c.$t("vipcondition")), 1)]), e("div", es, [e("div", ss, [e("div", ns, [e("span", {
                            class: R(`level level${t.id}`)
                        }, s(y.haspermission ? E(t.relegationExp, t.relegation) : 0) + "/" + s(t.relegation), 3)]), e("p", ts, s(c.$t("completed1", [u(y.haspermission ? E(t.relegationExp, t.relegation) : 0, t.relegation)])), 1)]), e("div", null, [D(a, {
                            class: R(`level${t.id}`),
                            percentage: u(y.haspermission ? E(t.relegationExp, t.relegation) : 0, t.relegation),
                            "stroke-width": "8",
                            color: "linear-gradient(180deg, #FFFCE7 0%, #FFC821 100%)",
                            "track-color": l(w)[t.id],
                            "show-pivot": !1
                        }, null, 8, ["class", "percentage", "track-color"])]), e("div", null, [e("span", {
                            innerHTML: c.$t("vipTip2", [t.deductExp])
                        }, null, 8, ls)])])], 64)) : $("v-if", !0), $("status:1 未解锁"), (t == null ? void 0 : t.status) == 1 && (t == null ? void 0 : t.id) != g.value ? (i(), o(m, {
                            key: 2
                        }, [e("div", as, [e("img", {
                            src: l(A)("vip/swiper/logo", `${t.id}`)
                        }, null, 8, is)]), e("div", os, [e("div", null, [e("img", {
                            src: l(A)("vip/swiper/crown", `${t.id!=1?2:t.id}`)
                        }, null, 8, cs), e("h1", {
                            class: R(`level${t.id!=1?2:t.id}`)
                        }, s(t.vipName), 3), e("img", {
                            src: l(A)("vip/swiper", "ununlocked")
                        }, null, 8, rs), e("span", null, s(c.$t("notUnlocked")), 1)]), e("div", ds, [e("p", {
                            innerHTML: c.$t("experience", [t.id, t.upgrade - t.currentExp])
                        }, null, 8, ps)]), e("div", {
                            class: R(["border", `level${t.id}`])
                        }, s(c.$t("experience1", [V.value, t.amount])), 3)]), e("div", us, [e("p", null, s(t.vipName), 1), e("div", null, [D(a, {
                            class: R(`level${t.id}`),
                            percentage: u(y.haspermission ? t.currentExp : 0, t.upgrade),
                            "stroke-width": "8",
                            color: "linear-gradient(180deg, #FFFCE7 0%, #FFC821 100%)",
                            "track-color": l(w)[t.id],
                            "show-pivot": !1
                        }, null, 8, ["class", "percentage", "track-color"])]), e("div", null, [e("span", {
                            class: R(`level level${t.id}`)
                        }, s(y.haspermission ? t.currentExp : 0) + "/" + s(t.upgrade), 3), e("span", null, s(c.$t("upgrade", [t.upgrade])), 1)])])], 64)) : $("v-if", !0)]),
                        _: 2
                    }, 1032, ["class"]))), 128))]),
                    _: 1
                })])])
            }
        }
    });
const _s = H(vs, [
        ["__scopeId", "data-v-31cfa30d"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Vip/VipCard.vue"]
    ]),
    hs = {
        class: "vip-content-weal"
    },
    $s = {
        key: 0,
        class: "vip-content-weal-head"
    },
    gs = ["src"],
    ys = {
        class: "ar-1px-b"
    },
    fs = ["src"],
    ws = {
        key: 0
    },
    bs = {
        key: 1
    },
    Ts = {
        key: 0
    },
    ks = ["src"],
    Vs = ["src"],
    ms = {
        key: 1
    },
    Ss = {
        class: "max"
    },
    Rs = ["src"],
    Cs = F({
        __name: "Weal",
        setup(y, {
            expose: T
        }) {
            const {
                setLoading: d
            } = Z(), g = b(0), w = ue(() => g.value == 0 ? 1 : g.value), p = b([]);
            async function f(r) {
                d(!0);
                const _ = await B(Ce({
                    vipLevel: r == 0 ? 1 : r
                }));
                _ && (p.value = _.data.filter(n => n.id > 2 && n.rate > 0 || n.id <= 2)), d(!1)
            }
            return T({
                getListVipLevel: f,
                level: g
            }), (r, _) => (i(), o("div", hs, [D(ve, {
                mode: "out-in"
            }, {
                default: O(() => [(i(), o("div", {
                    class: "slide",
                    key: g.value
                }, [p.value.length ? (i(), o("div", $s, [e("img", {
                    src: l(S)("main", "diamond")
                }, null, 8, gs), e("h1", ys, "VIP" + s(w.value) + " " + s(r.$t("wealTXT1")), 1)])) : $("v-if", !0), (i(!0), o(m, null, U(p.value, (n, v) => (i(), o("div", {
                    class: "vip-content-weal-con",
                    key: v
                }, [e("div", null, [e("img", {
                    src: l(S)("main/weal", `${n.id}`)
                }, null, 8, fs)]), e("div", null, [n.id != 3 ? (i(), o("h2", ws, s(r.$t(`wealName${n.id}`)), 1)) : (i(), o("h2", bs, s(r.$t(`wealName${n.id}_1`)), 1)), e("span", null, s(r.$t(`wealDescription${n.id}`)), 1)]), n.id == 1 || n.id == 2 ? (i(), o("div", Ts, [e("p", null, [e("img", {
                    src: l(S)("main", "gold")
                }, null, 8, ks), I(s(l(M)(n.balance, " ", 0)), 1)]), e("p", null, [e("img", {
                    src: l(S)("main", "love")
                }, null, 8, Vs), I(s(l(M)(n.integral, " ", 0)), 1)])])) : (i(), o("div", ms, [e("p", Ss, [e("img", {
                    src: l(S)("main/weal", `weal${n.id}`)
                }, null, 8, Rs), I(s(n.rate) + "%", 1)])]))]))), 128))]))]),
                _: 1
            })]))
        }
    });
const Is = H(Cs, [
        ["__scopeId", "data-v-9bb5e81c"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Vip/Weal.vue"]
    ]),
    Ds = {
        class: "vip-content-myWelfare"
    },
    As = {
        class: "vip-content-myWelfare-head"
    },
    Es = ["src"],
    Ms = {
        class: "ar-1px-b"
    },
    Ns = {
        class: "vip-content-myWelfare-con"
    },
    xs = {
        class: "card"
    },
    Ps = {
        class: "card-head"
    },
    Us = ["src"],
    Bs = {
        class: "card-head-mon"
    },
    Fs = ["src"],
    Hs = ["src"],
    Ws = {
        class: "card-bottom"
    },
    js = {
        key: 0,
        class: "noActive"
    },
    zs = ["onClick"],
    Os = {
        key: 1,
        class: "card"
    },
    Gs = {
        class: "card-head tilt"
    },
    Xs = ["src"],
    qs = {
        class: "card-head-mon"
    },
    Js = ["src"],
    Ks = {
        class: "card-bottom"
    },
    Qs = {
        key: 0
    },
    Ys = {
        key: 1
    },
    Zs = F({
        __name: "MyWelfare",
        emits: ["succeedDialog"],
        setup(y, {
            expose: T,
            emit: d
        }) {
            const g = K(),
                {
                    setLoading: w
                } = Z(),
                p = b(0),
                f = b([]);
            async function r(n) {
                w(!0);
                const v = await B(Ie({
                    vipLevel: n
                }));
                v && (f.value = v.data.filter(u => u.rewardType > 2 && u.rate > 0 || u.rewardType <= 2)), w(!1)
            }
            async function _(n) {
                const v = await B(De({
                    receiveId: n.id,
                    vipLevel: p.value,
                    rewardType: n.rewardType
                }));
                v && (r(p.value), v != null && v.data && d("succeedDialog", {
                    integral: v == null ? void 0 : v.data.integral,
                    balance: v == null ? void 0 : v.data.balance
                }))
            }
            return T({
                getListVipUserRewards: r,
                levelMy: p
            }), (n, v) => (i(), o("div", Ds, [D(ve, {
                mode: "out-in"
            }, {
                default: O(() => [(i(), o("div", {
                    class: "slideMy",
                    key: p.value
                }, [e("div", As, [e("img", {
                    src: l(S)("main", "crown")
                }, null, 8, Es), e("h1", Ms, s(n.$t("vipDesc1")), 1)]), e("div", Ns, [(i(!0), o(m, null, U(f.value, (u, E) => (i(), o("div", {
                    class: "cards",
                    key: E
                }, [u.rewardType == 1 || u.rewardType == 2 ? (i(), o(m, {
                    key: 0
                }, [e("div", xs, [e("div", Ps, [e("img", {
                    src: l(S)("main/myWelfare", `welfare${u.rewardType}`)
                }, null, 8, Us), e("div", Bs, [e("p", null, [e("img", {
                    src: l(S)("main", "gold")
                }, null, 8, Fs), I(s(l(M)(u.balance, " ", 0)), 1)]), e("p", null, [e("img", {
                    src: l(S)("main", "love2")
                }, null, 8, Hs), I(s(l(M)(u.integral, " ", 0)), 1)])])]), e("div", Ws, [e("h1", null, s(n.$t(`wealName${u.rewardType}`)), 1), e("span", null, s(n.$t(`wealDescription${u.rewardType}`)), 1)])]), u.status == 2 ? (i(), o("button", js, s(n.$t("vipDesc4")), 1)) : (i(), o("button", {
                    key: 1,
                    class: "active",
                    onClick: V => _(u)
                }, s(n.$t("vipDesc7")), 9, zs))], 64)) : (i(), o("div", Os, [e("div", Gs, [e("img", {
                    src: l(S)("main/myWelfare", `welfare${u.rewardType}`)
                }, null, 8, Xs), e("div", qs, [e("p", null, [e("img", {
                    src: l(S)("main", "wallet1")
                }, null, 8, Js), I(s(u.rate) + "%", 1)])])]), e("div", Ks, [u.rewardType != 3 ? (i(), o("h1", Qs, s(n.$t(`wealName${u.rewardType}`)), 1)) : (i(), o("h1", Ys, s(n.$t(`wealName${u.rewardType}_1`)), 1)), e("span", null, s(n.$t(`wealDescription${u.rewardType}`)), 1), u.rewardType == 5 ? (i(), o("div", {
                    key: 2,
                    class: "viewD",
                    onClick: v[0] || (v[0] = V => l(g).push({
                        name: "RebateDetails"
                    }))
                }, s(n.$t("viewDetail")), 1)) : $("v-if", !0)])]))]))), 128))])]))]),
                _: 1
            })]))
        }
    });
const Ls = H(Zs, [
        ["__scopeId", "data-v-4e842459"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Vip/MyWelfare.vue"]
    ]),
    P = y => (te("data-v-eaa4a307"), y = y(), le(), y),
    en = {
        class: "vip-content-recordVsrule"
    },
    sn = {
        class: "vip-content-recordVsrule-head"
    },
    nn = {
        class: "vip-content-recordVsrule-con"
    },
    tn = {
        class: "item-left"
    },
    ln = {
        class: "green"
    },
    an = {
        class: "item-right"
    },
    on = ["src"],
    cn = ["src"],
    rn = {
        class: "item-left"
    },
    dn = {
        class: "red"
    },
    pn = {
        class: "item-right"
    },
    un = P(() => e("span", null, null, -1)),
    vn = P(() => e("span", null, null, -1)),
    _n = {
        key: 2,
        class: "item-left"
    },
    hn = {
        class: "yellow"
    },
    $n = {
        class: "item-left"
    },
    gn = {
        class: "blue"
    },
    yn = {
        class: "item-right"
    },
    fn = P(() => e("span", null, null, -1)),
    wn = P(() => e("span", null, null, -1)),
    bn = {
        class: "green"
    },
    Tn = {
        key: 4,
        class: "item-left"
    },
    kn = {
        class: "yellow"
    },
    Vn = {
        key: 1,
        class: "vip-content-recordVsrule-con"
    },
    mn = {
        class: "con-content"
    },
    Sn = {
        class: "con-content__title"
    },
    Rn = {
        class: "con-content__rules"
    },
    Cn = P(() => e("div", {
        class: "con-content__rules-item__splitBorder"
    }, [e("span")], -1)),
    In = P(() => e("div", {
        class: "con-content__rules-item__borderTopStyle"
    }, [e("span"), e("span")], -1)),
    Dn = P(() => e("div", {
        class: "con-content__rules-item__titleLeft"
    }, null, -1)),
    An = {
        class: "con-content__rules-item__title"
    },
    En = P(() => e("div", {
        class: "con-content__rules-item__titleRight"
    }, null, -1)),
    Mn = F({
        __name: "RecordVsrule",
        setup(y, {
            expose: T
        }) {
            const {
                t: d
            } = _e(), g = K();
            let w = he("permission", null);
            w && (w = JSON.parse(w.value));
            const p = b(1);
            w && w[18] === !1 && (p.value = 2);
            const f = [{
                title: d("promotionCriteria"),
                content: d("rVsTip1", [sessionStorage.getItem("vipAmount") || 1e3])
            }, {
                title: d("promotionOrder"),
                content: d("rVsTip2")
            }, {
                title: d("relegationRequirements"),
                content: d("rVsTip3")
            }, {
                title: d("downgradeStandard"),
                content: d("rVsTip4")
            }, {
                title: d("upgradeReward"),
                content: d("rVsTip5")
            }, {
                title: d("wealName2"),
                content: d("rVsTip6")
            }, {
                title: d("wealName3"),
                content: d("rVsTip7")
            }, {
                title: d("wealName4"),
                content: d("rVsTip8")
            }];

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
                        return d("vipTip17", [c])
                }
            }

            function _(V) {
                p.value = V
            }

            function n() {
                g.push({
                    name: "RecordVsruleHistory"
                })
            }
            const v = $e({
                    pageSize: 10,
                    pageNo: 1
                }),
                u = b([]);
            async function E() {
                const V = await B(ye(v));
                V && (u.value = V.data.list)
            }
            return ne(() => {
                E()
            }), T({
                getPageListVipUserRecord: E
            }), (V, c) => {
                const k = ge("haspermission");
                return i(), o("div", en, [e("div", sn, [z((i(), o("button", {
                    class: R({
                        active: p.value == 1
                    }),
                    onClick: c[0] || (c[0] = a => _(1))
                }, [I(s(V.$t("record")), 1)], 2)), [
                    [k, 18]
                ]), e("button", {
                    class: R({
                        active: p.value == 2
                    }),
                    onClick: c[1] || (c[1] = a => _(2))
                }, s(V.$t("rule")), 3)]), p.value == 1 ? (i(), o(m, {
                    key: 0
                }, [z((i(), o("div", nn, [u.value.length > 0 ? (i(!0), o(m, {
                    key: 0
                }, U(u.value, (a, t) => (i(), o("div", {
                    class: "item ar-1px-b",
                    key: t
                }, [a.type == 1 || a.type == 2 ? (i(), o(m, {
                    key: 0
                }, [e("div", tn, [e("span", ln, s(l(N)(l(x).VipType, a.type)), 1), e("span", null, s(r(a.type, a.remark)), 1), e("span", null, s(a.createTime), 1)]), e("div", an, [e("p", null, [e("img", {
                    src: l(S)("main", "gold")
                }, null, 8, on), I(s(l(M)(a.awardAmount, " ", 0)), 1)]), e("p", null, [e("img", {
                    src: l(S)("main", "love")
                }, null, 8, cn), I(s(l(M)(a.bonusPoints, " ", 0)), 1)])])], 64)) : $("v-if", !0), a.type == 3 || a.type == 4 ? (i(), o(m, {
                    key: 1
                }, [e("div", rn, [e("span", dn, s(l(N)(l(x).VipType, a.type)), 1), e("span", null, s(r(a.type, a.remark)), 1), e("span", null, s(a.createTime), 1)]), e("div", pn, [un, vn, e("span", null, s(a.experience) + " EXP", 1)])], 64)) : $("v-if", !0), a.type == 5 ? (i(), o("div", _n, [e("span", hn, s(l(N)(l(x).VipType, a.type)), 1), e("span", null, s(r(a.type, a.remark)), 1), e("span", null, s(a.createTime), 1)])) : $("v-if", !0), a.type == 6 ? (i(), o(m, {
                    key: 3
                }, [e("div", $n, [e("span", gn, s(l(N)(l(x).VipType, a.type)), 1), e("span", null, s(r(a.type, a.remark)), 1), e("span", null, s(a.createTime), 1)]), e("div", yn, [fn, wn, e("span", bn, s(a.experience) + " EXP", 1)])], 64)) : $("v-if", !0), [7, 8].includes(a.type) ? (i(), o("div", Tn, [e("span", kn, s(l(N)(l(x).VipType, a.type)), 1), e("span", null, s(r(a.type, a.remark)), 1), e("span", null, s(a.createTime), 1)])) : $("v-if", !0)]))), 128)) : (i(), se(Ae, {
                    key: 1
                }))])), [
                    [k, 18]
                ]), z((i(), o("button", {
                    onClick: n
                }, [I(s(V.$t("viewAll")), 1)])), [
                    [k, 18]
                ])], 64)) : (i(), o("div", Vn, [e("div", mn, [e("div", Sn, [e("h1", null, s(V.$t("vipPrivilege")), 1), e("p", null, s(V.$t("vipRule")), 1)]), e("div", Rn, [(i(), o(m, null, U(f, (a, t) => e("div", {
                    class: "con-content__rules-item",
                    key: t
                }, [Cn, In, Dn, e("div", An, s(a.title), 1), En, e("p", null, s(a.content), 1)])), 64))])])]))])
            }
        }
    });
const Nn = H(Mn, [
        ["__scopeId", "data-v-eaa4a307"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Vip/RecordVsrule.vue"]
    ]),
    xn = {
        class: "vip"
    },
    Pn = {
        class: "vip-header"
    },
    Un = {
        class: "vip-header-wrapper"
    },
    Bn = ["src"],
    Fn = {
        class: "vip-header-wrapper-name"
    },
    Hn = {
        class: "vip-header-wrapper-name-nickName"
    },
    Wn = {
        class: "vip-content"
    },
    jn = {
        class: "vip-content-empirical"
    },
    zn = {
        class: "red"
    },
    On = ["innerHTML"],
    Gn = {
        class: "vip-content-tip"
    },
    Xn = {
        class: "succeed"
    },
    qn = {
        class: "van-dialog__content-title"
    },
    Jn = {
        class: "van-dialog__content-note"
    },
    Kn = {
        class: "red"
    },
    Qn = ["src"],
    Yn = {
        class: "yellow"
    },
    Zn = ["src"],
    Ln = ["innerHTML"],
    et = {
        class: "van-dialog__content-btn"
    },
    st = F({
        __name: "index",
        setup(y) {
            const d = Ee().getUserInfo,
                g = b(A("main/Avatar", d.userPhoto)),
                w = K(),
                {
                    setLoading: p
                } = Z(),
                f = b(!1),
                r = b(),
                _ = b(),
                n = b(),
                v = b(),
                u = b(),
                E = b(!1);

            function V() {
                w.push({
                    name: "Avatar"
                })
            }
            let c = he("permission", null);
            c && (c = JSON.parse(c.value));
            const k = b(!0);
            c && c[18] === !1 && (k.value = !1);
            const a = b();
            async function t() {
                var C, W, Q, G, X, q;
                p(!0);
                const h = await B(Me());
                h && h != null && h.data && (a.value = h.data, n.value.level = (C = a.value) == null ? void 0 : C.vipLevel, n.value.getListVipLevel((W = a.value) == null ? void 0 : W.vipLevel), ((Q = a.value) == null ? void 0 : Q.vipLevel) > 0 && (v.value.levelMy = (G = a.value) == null ? void 0 : G.vipLevel, v.value.getListVipUserRewards((X = a.value) == null ? void 0 : X.vipLevel)), _.value.level = (q = a.value) == null ? void 0 : q.vipLevel, await _.value.getVipUserLevelDetail(), E.value = !0), p(!1)
            }
            ne(() => {
                t()
            });

            function ee(h) {
                me(() => {
                    var C;
                    n.value.level = h, n.value.getListVipLevel(h), h <= ((C = a.value) == null ? void 0 : C.vipLevel) && (v.value.levelMy = h, v.value.getListVipUserRewards(h))
                })
            }

            function fe(h) {
                r.value = h, f.value = !0
            }

            function we() {
                f.value = !1, u.value.getPageListVipUserRecord()
            }
            const be = (h, C) => {
                h = A("images", "avatar1");
                let W = document.querySelector(`.${C}`);
                W.src = h
            };
            return (h, C) => {
                var X, q, ie, oe, ce;
                const W = J("NavBar"),
                    Q = J("van-dialog"),
                    G = ge("lazy");
                return i(), o("div", xn, [e("div", Pn, [D(W, {
                    title: "VIP",
                    class: "main",
                    "left-arrow": "",
                    onClickLeft: C[0] || (C[0] = j => l(w).go(-1))
                }), e("div", Un, [e("div", {
                    class: "vip-header-wrapper-avatar",
                    onClick: V
                }, [$(` <img v-lazy="avatarUrl" :data-img="getIconsPublic('images', 'avatar1')" /> `), e("img", {
                    src: g.value,
                    class: "userAvatar",
                    onError: C[1] || (C[1] = j => be(g.value, "userAvatar"))
                }, null, 40, Bn)]), e("div", Fn, [e("div", {
                    class: R(["vip-header-wrapper-name-vip", ["n" + ((X = a.value) == null ? void 0 : X.vipLevel)]])
                }, null, 2), e("div", Hn, [e("h3", null, s((q = a.value) == null ? void 0 : q.nickName), 1)])])])]), e("div", Wn, [e("div", jn, [e("div", null, [e("p", zn, s(h.$t("eightThousandEXP", [k.value ? (ie = a.value) == null ? void 0 : ie.exp : 0])), 1), e("p", null, s(h.$t("myExperience")), 1)]), e("div", null, [e("p", {
                    class: "timeTop",
                    innerHTML: h.$t("fifteenDays", [k.value ? (oe = a.value) == null ? void 0 : oe.settlementDate : 0])
                }, null, 8, On), e("p", null, s(h.$t("settlementTime")), 1)])]), e("div", Gn, s(h.$t("vipTip18")), 1), $("vip卡片"), D(_s, {
                    ref_key: "vipCardRef",
                    ref: _,
                    haspermission: k.value,
                    onChangeLevel: ee
                }, null, 8, ["haspermission"]), $("等级福利"), D(Is, {
                    ref_key: "weal",
                    ref: n
                }, null, 512), $("我的福利"), z(D(Ls, {
                    onSucceedDialog: fe,
                    ref_key: "myWelfare",
                    ref: v
                }, null, 512), [
                    [Ve, ((ce = a.value) == null ? void 0 : ce.vipLevel) > 0]
                ]), $("记录规则"), E.value ? (i(), se(Nn, {
                    key: 0,
                    ref_key: "recordVsrule",
                    ref: u
                }, null, 512)) : $("v-if", !0)]), $("领取成功弹窗"), D(Q, {
                    show: f.value,
                    "onUpdate:show": C[3] || (C[3] = j => f.value = j),
                    "show-confirm-button": !1,
                    "z-index": "99"
                }, {
                    default: O(() => {
                        var j, re, de, pe;
                        return [z(e("img", Xn, null, 512), [
                            [G, l(S)("public", "succeed")]
                        ]), e("div", qn, s(h.$t("receivedSuccessfully")), 1), e("div", Jn, [e("div", null, [e("p", Kn, [e("img", {
                            src: l(S)("main", "love")
                        }, null, 8, Qn), I(s(l(M)((j = r.value) == null ? void 0 : j.integral, " ", 0)), 1)]), e("p", Yn, [e("img", {
                            src: l(S)("main", "gold")
                        }, null, 8, Zn), I(s(l(M)((re = r.value) == null ? void 0 : re.balance, " ", 0)), 1)])]), e("div", null, [e("p", {
                            innerHTML: h.$t("vipTip4", [(de = r.value) == null ? void 0 : de.integral, (pe = r.value) == null ? void 0 : pe.balance])
                        }, null, 8, Ln), $(" <p>{{ $t('vipTip5') }}</p> ")])]), e("div", et, [e("button", {
                            onClick: we
                        }, s(h.$t("sure")), 1)]), z(e("img", {
                            class: "close",
                            onClick: C[2] || (C[2] = Nt => f.value = !1)
                        }, null, 512), [
                            [G, l(A)("main", "close")]
                        ])]
                    }),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const nt = H(st, [
        ["__scopeId", "data-v-92d3d2e1"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/vip/index.vue"]
    ]),
    Ut = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: nt
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ae = y => (te("data-v-149189bc"), y = y(), le(), y),
    tt = {
        class: "vip-RebateDetails"
    },
    lt = {
        class: "item"
    },
    at = ae(() => e("div", {
        class: "line"
    }, null, -1)),
    it = ae(() => e("div", {
        class: "line"
    }, null, -1)),
    ot = ae(() => e("div", {
        class: "line"
    }, null, -1)),
    ct = F({
        __name: "index",
        setup(y) {
            const {
                setLoading: T
            } = Z(), d = K(), g = b([]);
            async function w() {
                T(!0);
                const p = await B(Ne());
                p && (g.value = p.data, g.value.sort(function(f, r) {
                    return f.id - r.id
                })), T(!1)
            }
            return ne(() => {
                w()
            }), (p, f) => {
                const r = J("NavBar");
                return i(), o("div", tt, [D(r, {
                    title: p.$t("RebateDetailTip1"),
                    "left-arrow": "",
                    onClickLeft: f[0] || (f[0] = _ => l(d).go(-1))
                }, null, 8, ["title"]), e("h1", null, s(p.$t("RebateDetailTip2")), 1), (i(!0), o(m, null, U(g.value, _ => (i(), o("div", {
                    class: "vip-RebateDetails-items",
                    key: _.id
                }, [e("div", {
                    class: R(["header ar-1px-b", `bg${_.id}`])
                }, "VIP " + s(_.id), 3), e("div", lt, [e("div", null, [e("span", null, s(p.$t("RebateDetailTip3")), 1), e("span", null, s(l(Y)(_.electronic || 0, 100)) + " %", 1)]), at, e("div", null, [e("span", null, s(p.$t("RebateDetailTip4")), 1), e("span", null, s(l(Y)(_.realPerson || 0, 100)) + " %", 1)]), it, e("div", null, [e("span", null, s(p.$t("RebateDetailTip6")), 1), e("span", null, s(l(Y)(_.lottery || 0, 100)) + " %", 1)]), ot, e("div", null, [e("span", null, s(p.$t("RebateDetailTip7")), 1), e("span", null, s(l(Y)(_.chess || 0, 100)) + " %", 1)])])]))), 128))])
            }
        }
    });
const rt = H(ct, [
        ["__scopeId", "data-v-149189bc"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/vip/RebateDetails/index.vue"]
    ]),
    Bt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: rt
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    L = y => (te("data-v-d800515e"), y = y(), le(), y),
    dt = {
        class: "vip-content-recordVsrule"
    },
    pt = {
        class: "vip-content-recordVsrule-con"
    },
    ut = {
        class: "item-left"
    },
    vt = {
        class: "green"
    },
    _t = {
        class: "item-right"
    },
    ht = ["src"],
    $t = ["src"],
    gt = {
        class: "item-left"
    },
    yt = {
        class: "red"
    },
    ft = {
        class: "item-right"
    },
    wt = L(() => e("span", null, null, -1)),
    bt = L(() => e("span", null, null, -1)),
    Tt = {
        key: 2,
        class: "item-left"
    },
    kt = {
        class: "yellow"
    },
    Vt = {
        class: "item-left"
    },
    mt = {
        class: "blue"
    },
    St = {
        class: "item-right"
    },
    Rt = L(() => e("span", null, null, -1)),
    Ct = L(() => e("span", null, null, -1)),
    It = {
        class: "green"
    },
    Dt = {
        key: 4,
        class: "item-left"
    },
    At = {
        class: "yellow"
    },
    Et = F({
        __name: "index",
        setup(y) {
            const {
                t: T
            } = _e(), d = K(), g = $e({
                pageSize: 20
            }), w = b([]);

            function p(f, r) {
                switch (f) {
                    case 1:
                        return T("vipTip12");
                    case 2:
                        return T("vipTip13");
                    case 3:
                        return T("vipTip10");
                    case 4:
                        return T("vipTip11", [r]);
                    case 5:
                        return T("vipTip6", [r]);
                    case 6:
                        return T("vipTip7");
                    case 7:
                        return T("vipTip15", [r]);
                    case 8:
                        return T("vipTip17", [r])
                }
            }
            return (f, r) => {
                const _ = J("NavBar");
                return i(), o("div", dt, [D(_, {
                    title: f.$t("record"),
                    "left-arrow": "",
                    onClickLeft: r[0] || (r[0] = n => l(d).go(-1))
                }, null, 8, ["title"]), D(xe, {
                    api: l(ye),
                    list: w.value,
                    "onUpdate:list": r[1] || (r[1] = n => w.value = n),
                    "page-query": g,
                    "onUpdate:pageQuery": r[2] || (r[2] = n => g = n),
                    ref: "listRef"
                }, {
                    content: O(() => [e("div", pt, [(i(!0), o(m, null, U(w.value, (n, v) => (i(), o("div", {
                        class: "item ar-1px-b",
                        key: v
                    }, [n.type == 1 || n.type == 2 ? (i(), o(m, {
                        key: 0
                    }, [e("div", ut, [e("span", vt, s(l(N)(l(x).VipType, n.type)), 1), e("span", null, s(p(n.type, n.remark)), 1), e("span", null, s(n.createTime), 1)]), e("div", _t, [e("p", null, [e("img", {
                        src: l(S)("main", "gold")
                    }, null, 8, ht), I(s(l(M)(n.awardAmount, " ", 0)), 1)]), e("p", null, [e("img", {
                        src: l(S)("main", "love")
                    }, null, 8, $t), I(s(l(M)(n.bonusPoints, " ", 0)), 1)])])], 64)) : $("v-if", !0), n.type == 3 || n.type == 4 ? (i(), o(m, {
                        key: 1
                    }, [e("div", gt, [e("span", yt, s(l(N)(l(x).VipType, n.type)), 1), e("span", null, s(p(n.type, n.remark)), 1), e("span", null, s(n.createTime), 1)]), e("div", ft, [wt, bt, e("span", null, s(n.experience) + " EXP", 1)])], 64)) : $("v-if", !0), n.type == 5 ? (i(), o("div", Tt, [e("span", kt, s(l(N)(l(x).VipType, n.type)), 1), e("span", null, s(p(n.type, n.remark)), 1), e("span", null, s(n.createTime), 1)])) : $("v-if", !0), n.type == 6 ? (i(), o(m, {
                        key: 3
                    }, [e("div", Vt, [e("span", mt, s(l(N)(l(x).VipType, n.type)), 1), e("span", null, s(p(n.type, n.remark)), 1), e("span", null, s(n.createTime), 1)]), e("div", St, [Rt, Ct, e("span", It, s(l(M)(n.experience, " ", 0)) + " EXP", 1)])], 64)) : $("v-if", !0), [7, 8].includes(n.type) ? (i(), o("div", Dt, [e("span", At, s(l(N)(l(x).VipType, n.type)), 1), e("span", null, s(p(n.type, n.remark)), 1), e("span", null, s(n.createTime), 1)])) : $("v-if", !0)]))), 128))])]),
                    _: 1
                }, 8, ["api", "list", "page-query"])])
            }
        }
    });
const Mt = H(Et, [
        ["__scopeId", "data-v-d800515e"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/vip/RecordVsruleHistory/index.vue"]
    ]),
    Ft = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Mt
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    Bt as a, Ft as b, Ut as i
};