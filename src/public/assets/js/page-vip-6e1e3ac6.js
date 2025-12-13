import {
    _ as F,
    r as w,
    J as ue,
    a2 as U,
    j as i,
    l as e,
    a6 as b,
    a7 as O,
    H as a,
    o as l,
    a4 as I,
    a5 as H,
    ae as se,
    a1 as _,
    a9 as C,
    a0 as n,
    aJ as Te,
    aK as ke,
    a8 as R,
    aT as ve,
    P as K,
    K as _e,
    X as he,
    I as $e,
    A as ne,
    a3 as ge,
    aa as G,
    af as te,
    ag as ae,
    ak as Ve,
    B as me
} from "./modules-67ffc692.js";
import {
    A as B,
    cA as Se,
    h as E,
    S as Re,
    _ as W,
    a as L,
    g as A,
    n as M,
    cB as Ce,
    cC as Ie,
    cD as De,
    bk as N,
    bl as P,
    $ as Ae,
    cE as ye,
    G as Ee,
    bb as Me,
    cF as Ne,
    cG as Z,
    bG as Pe
} from "./page-activity-faec448c.js";
const Ue = {
        class: "vip-content-card"
    },
    xe = {
        class: "vip-content-card-item"
    },
    He = {
        class: "itemInfo-right"
    },
    Be = ["src"],
    Fe = {
        class: "itemInfo-head"
    },
    We = ["src"],
    je = ["src"],
    ze = {
        class: "bgg"
    },
    Ge = ["innerHTML"],
    Oe = {
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
    as = ["innerHTML"],
    ls = {
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
        setup($, {
            expose: k,
            emit: d
        }) {
            const h = w(0);
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
                    10: "#EF7B27"
                },
                p = w();

            function g(o) {
                p = o
            }
            const c = w(!0),
                T = o => {
                    c.value || d("changeLevel", t.value[o.activeIndex].id)
                },
                t = w([]);
            async function r() {
                var S;
                const o = await B(Se());
                if (o) {
                    t.value = o == null ? void 0 : o.data;
                    let y = t.value.findIndex(x => x.id == h.value);
                    p.slideTo(y == -1 ? 0 : y);
                    let s = t.value.length > 0 ? (S = t.value[0]) == null ? void 0 : S.amount : 1e3;
                    sessionStorage.setItem("vipAmount", s)
                }
                c.value = !1
            }

            function V(o, S) {
                return !S || !S ? 0 : o > S ? 100 : Math.round(o / S * 1e4) / 100
            }

            function u(o, S) {
                return o > S ? S : o
            }
            const m = ue(() => Re().getDollarSign);
            return k({
                getVipUserLevelDetail: r,
                level: h
            }), (o, S) => {
                const y = U("van-progress");
                return l(), i("div", Ue, [e("div", xe, [b(a(ke), {
                    class: "my-swipe",
                    slidesPerView: "auto",
                    centeredSlides: !0,
                    "space-between": 20,
                    onSlideChangeTransitionEnd: T,
                    onSwiper: g
                }, {
                    default: O(() => [(l(!0), i(I, null, H(t.value, s => (l(), se(a(Te), {
                        class: C(`itemInfo level${s.id}`),
                        key: s.id
                    }, {
                        default: O(() => [_("status:2 已达成"), (s == null ? void 0 : s.status) == 2 && s.id != h.value ? (l(), i(I, {
                            key: 0
                        }, [e("div", He, [e("img", {
                            src: a(E)("vip/swiper/logo", `${s.id}`)
                        }, null, 8, Be)]), e("div", Fe, [e("div", null, [e("img", {
                            src: a(E)("vip/swiper/crown", `${s.id!=1?2:s.id}`)
                        }, null, 8, We), e("h1", {
                            class: C(`level${s.id!=1?2:s.id}`)
                        }, n(s.vipName), 3), e("img", {
                            src: a(E)("vip/swiper", "HaveReached")
                        }, null, 8, je), e("span", ze, n(o.$t("achieved")), 1)]), e("div", {
                            class: C(["border", `level${s.id}`])
                        }, [e("p", {
                            innerHTML: o.$t("vipTip1", [s.id, s.id])
                        }, null, 8, Ge)], 2)]), e("div", Oe, [s.upgradeStatus == 2 ? (l(), i("h2", {
                            key: 0,
                            class: C(`level${s.id}`)
                        }, n(o.$t("vipTip3", [s.id])), 3)) : (l(), i("h2", {
                            key: 1,
                            class: C(`level${s.id}`)
                        }, n(o.$t("vipTip14", [s.id])), 3))])], 64)) : _("v-if", !0), (s == null ? void 0 : s.id) == h.value ? (l(), i(I, {
                            key: 1
                        }, [e("div", Xe, [e("img", {
                            src: a(E)("vip/swiper/logo", `${s.id}`)
                        }, null, 8, qe)]), e("div", Je, [e("div", null, [e("img", {
                            src: a(E)("vip/swiper/crown", `${s.id!=1?2:s.id}`)
                        }, null, 8, Ke), e("h1", {
                            class: C(`level${s.id!=1?2:s.id}`)
                        }, n(s.vipName), 3), e("img", {
                            src: a(E)("vip/swiper", "HaveReached")
                        }, null, 8, Qe), e("span", Ye, n(o.$t("achieved")), 1)]), e("div", {
                            class: C(["border mb25", `level${s.id}`])
                        }, [e("p", {
                            innerHTML: o.$t("vipTip1", [s.id, s.id])
                        }, null, 8, Ze)], 2), e("div", Le, n(o.$t("vipcondition")), 1)]), e("div", es, [e("div", ss, [e("div", ns, [e("span", {
                            class: C(`level level${s.id}`)
                        }, n($.haspermission ? u(s.relegationExp, s.relegation) : 0) + "/" + n(s.relegation), 3)]), e("p", ts, n(o.$t("completed1", [V($.haspermission ? u(s.relegationExp, s.relegation) : 0, s.relegation)])), 1)]), e("div", null, [b(y, {
                            class: C(`level${s.id}`),
                            percentage: V($.haspermission ? u(s.relegationExp, s.relegation) : 0, s.relegation),
                            "stroke-width": "8",
                            color: "linear-gradient(180deg, #FFFCE7 0%, #FFC821 100%)",
                            "track-color": a(f)[s.id],
                            "show-pivot": !1
                        }, null, 8, ["class", "percentage", "track-color"])]), e("div", null, [e("span", {
                            innerHTML: o.$t("vipTip2", [s.deductExp])
                        }, null, 8, as)])])], 64)) : _("v-if", !0), _("status:1 未解锁"), (s == null ? void 0 : s.status) == 1 && (s == null ? void 0 : s.id) != h.value ? (l(), i(I, {
                            key: 2
                        }, [e("div", ls, [e("img", {
                            src: a(E)("vip/swiper/logo", `${s.id}`)
                        }, null, 8, is)]), e("div", os, [e("div", null, [e("img", {
                            src: a(E)("vip/swiper/crown", `${s.id!=1?2:s.id}`)
                        }, null, 8, cs), e("h1", {
                            class: C(`level${s.id!=1?2:s.id}`)
                        }, n(s.vipName), 3), e("img", {
                            src: a(E)("vip/swiper", "ununlocked")
                        }, null, 8, rs), e("span", null, n(o.$t("notUnlocked")), 1)]), e("div", ds, [e("p", {
                            innerHTML: o.$t("experience", [s.id, s.upgrade - s.currentExp])
                        }, null, 8, ps)]), e("div", {
                            class: C(["border", `level${s.id}`])
                        }, n(o.$t("experience1", [m.value, s.amount])), 3)]), e("div", us, [e("p", null, n(s.vipName), 1), e("div", null, [b(y, {
                            class: C(`level${s.id}`),
                            percentage: V($.haspermission ? s.currentExp : 0, s.upgrade),
                            "stroke-width": "8",
                            color: "linear-gradient(180deg, #FFFCE7 0%, #FFC821 100%)",
                            "track-color": a(f)[s.id],
                            "show-pivot": !1
                        }, null, 8, ["class", "percentage", "track-color"])]), e("div", null, [e("span", {
                            class: C(`level level${s.id}`)
                        }, n($.haspermission ? s.currentExp : 0) + "/" + n(s.upgrade), 3), e("span", null, n(o.$t("upgrade", [s.upgrade])), 1)])])], 64)) : _("v-if", !0)]),
                        _: 2
                    }, 1032, ["class"]))), 128))]),
                    _: 1
                })])])
            }
        }
    });
const _s = W(vs, [
        ["__scopeId", "data-v-31cfa30d"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar021-webnew/src/components/Vip/VipCard.vue"]
    ]),
    hs = {
        class: "vip-content-weal"
    },
    $s = {
        key: 0,
        class: "vip-content-weal-head ar-1px-b"
    },
    gs = ["src"],
    ys = {
        key: 0
    },
    fs = {
        key: 1
    },
    ws = {
        key: 0
    },
    bs = ["src"],
    Ts = {
        key: 1
    },
    ks = {
        class: "max"
    },
    Vs = F({
        __name: "Weal",
        setup($, {
            expose: k
        }) {
            const {
                setLoading: d
            } = L(), h = w(0), f = ue(() => h.value == 0 ? 1 : h.value), p = w([]);
            async function g(c) {
                d(!0);
                const T = await B(Ce({
                    vipLevel: c == 0 ? 1 : c
                }));
                T && (p.value = T.data.filter(t => t.id > 2 && t.rate > 0 || t.id <= 2)), d(!1)
            }
            return k({
                getListVipLevel: g,
                level: h
            }), (c, T) => {
                const t = U("svg-icon");
                return l(), i("div", hs, [b(ve, {
                    mode: "out-in"
                }, {
                    default: O(() => [(l(), i("div", {
                        class: "slide",
                        key: h.value
                    }, [p.value.length ? (l(), i("div", $s, [b(t, {
                        name: "diamond"
                    }), e("h1", null, "VIP" + n(f.value) + " " + n(c.$t("wealTXT1")), 1)])) : _("v-if", !0), (l(!0), i(I, null, H(p.value, (r, V) => (l(), i("div", {
                        class: "vip-content-weal-con",
                        key: V
                    }, [e("div", null, [e("img", {
                        src: a(A)("main/weal", `${r.id}`)
                    }, null, 8, gs)]), e("div", null, [r.id != 3 ? (l(), i("h2", ys, n(c.$t(`wealName${r.id}`)), 1)) : (l(), i("h2", fs, n(c.$t(`wealName${r.id}_1`)), 1)), e("span", null, n(c.$t(`wealDescription${r.id}`)), 1)]), r.id == 1 || r.id == 2 ? (l(), i("div", ws, [e("p", null, [e("img", {
                        src: a(A)("main", "gold")
                    }, null, 8, bs), R(n(a(M)(r.balance, " ", 0)), 1)]), e("p", null, [b(t, {
                        name: "love"
                    }), R(n(a(M)(r.integral, " ", 0)), 1)])])) : (l(), i("div", Ts, [e("p", ks, [b(t, {
                        name: `weal${r.id}`
                    }, null, 8, ["name"]), R(n(r.rate) + "% ", 1)])]))]))), 128))]))]),
                    _: 1
                })])
            }
        }
    });
const ms = W(Vs, [
        ["__scopeId", "data-v-9bb5e81c"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar021-webnew/src/components/Vip/Weal.vue"]
    ]),
    Ss = {
        class: "vip-content-myWelfare"
    },
    Rs = {
        class: "vip-content-myWelfare-head ar-1px-b"
    },
    Cs = {
        class: "vip-content-myWelfare-con"
    },
    Is = {
        class: "card"
    },
    Ds = {
        class: "card-head"
    },
    As = ["src"],
    Es = {
        class: "card-head-mon"
    },
    Ms = ["src"],
    Ns = ["src"],
    Ps = {
        class: "card-bottom"
    },
    Us = {
        key: 0,
        class: "noActive"
    },
    xs = ["onClick"],
    Hs = {
        key: 1,
        class: "card"
    },
    Bs = {
        class: "card-head tilt"
    },
    Fs = ["src"],
    Ws = {
        class: "card-head-mon"
    },
    js = ["src"],
    zs = {
        class: "card-bottom"
    },
    Gs = {
        key: 0
    },
    Os = {
        key: 1
    },
    Xs = F({
        __name: "MyWelfare",
        emits: ["succeedDialog"],
        setup($, {
            expose: k,
            emit: d
        }) {
            const h = K(),
                {
                    setLoading: f
                } = L(),
                p = w(0),
                g = w([]);
            async function c(t) {
                f(!0);
                const r = await B(Ie({
                    vipLevel: t
                }));
                r && (g.value = r.data.filter(V => V.rewardType > 2 && V.rate > 0 || V.rewardType <= 2)), f(!1)
            }
            async function T(t) {
                const r = await B(De({
                    receiveId: t.id,
                    vipLevel: p.value,
                    rewardType: t.rewardType
                }));
                r && (c(p.value), r != null && r.data && d("succeedDialog", {
                    integral: r == null ? void 0 : r.data.integral,
                    balance: r == null ? void 0 : r.data.balance
                }))
            }
            return k({
                getListVipUserRewards: c,
                levelMy: p
            }), (t, r) => {
                const V = U("svg-icon");
                return l(), i("div", Ss, [b(ve, {
                    mode: "out-in"
                }, {
                    default: O(() => [(l(), i("div", {
                        class: "slideMy",
                        key: p.value
                    }, [e("div", Rs, [b(V, {
                        name: "crown"
                    }), e("h1", null, n(t.$t("vipDesc1")), 1)]), e("div", Cs, [(l(!0), i(I, null, H(g.value, (u, m) => (l(), i("div", {
                        class: "cards",
                        key: m
                    }, [u.rewardType == 1 || u.rewardType == 2 ? (l(), i(I, {
                        key: 0
                    }, [e("div", Is, [e("div", Ds, [e("img", {
                        src: a(A)("main/myWelfare", `welfare${u.rewardType}`)
                    }, null, 8, As), e("div", Es, [e("p", null, [e("img", {
                        src: a(A)("main", "gold")
                    }, null, 8, Ms), R(n(a(M)(u.balance, " ", 0)), 1)]), e("p", null, [e("img", {
                        src: a(A)("main", "love2")
                    }, null, 8, Ns), R(n(a(M)(u.integral, " ", 0)), 1)])])]), e("div", Ps, [e("h1", null, n(t.$t(`wealName${u.rewardType}`)), 1), e("span", null, n(t.$t(`wealDescription${u.rewardType}`)), 1)])]), u.status == 2 ? (l(), i("button", Us, n(t.$t("vipDesc4")), 1)) : (l(), i("button", {
                        key: 1,
                        class: "active",
                        onClick: o => T(u)
                    }, n(t.$t("vipDesc7")), 9, xs))], 64)) : (l(), i("div", Hs, [e("div", Bs, [e("img", {
                        src: a(A)("main/myWelfare", `welfare${u.rewardType}`)
                    }, null, 8, Fs), e("div", Ws, [e("p", null, [e("img", {
                        src: a(A)("main", "wallet1")
                    }, null, 8, js), R(n(u.rate) + "%", 1)])])]), e("div", zs, [u.rewardType != 3 ? (l(), i("h1", Gs, n(t.$t(`wealName${u.rewardType}`)), 1)) : (l(), i("h1", Os, n(t.$t(`wealName${u.rewardType}_1`)), 1)), e("span", null, n(t.$t(`wealDescription${u.rewardType}`)), 1), u.rewardType == 5 ? (l(), i("div", {
                        key: 2,
                        class: "viewD",
                        onClick: r[0] || (r[0] = o => a(h).push({
                            name: "RebateDetails"
                        }))
                    }, n(t.$t("viewDetail")), 1)) : _("v-if", !0)])]))]))), 128))])]))]),
                    _: 1
                })])
            }
        }
    });
const qs = W(Xs, [
        ["__scopeId", "data-v-4e842459"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar021-webnew/src/components/Vip/MyWelfare.vue"]
    ]),
    Q = $ => (te("data-v-eaa4a307"), $ = $(), ae(), $),
    Js = {
        class: "vip-content-recordVsrule"
    },
    Ks = {
        class: "vip-content-recordVsrule-head"
    },
    Qs = {
        key: 0,
        class: "vip-content-recordVsrule-con"
    },
    Ys = {
        class: "item-left"
    },
    Zs = {
        class: "green"
    },
    Ls = {
        class: "item-right"
    },
    en = ["src"],
    sn = ["src"],
    nn = {
        class: "item-left"
    },
    tn = {
        class: "red"
    },
    an = {
        class: "item-right"
    },
    ln = Q(() => e("span", null, null, -1)),
    on = Q(() => e("span", null, null, -1)),
    cn = {
        key: 2,
        class: "item-left"
    },
    rn = {
        class: "yellow"
    },
    dn = {
        class: "item-left"
    },
    pn = {
        class: "blue"
    },
    un = {
        class: "item-right"
    },
    vn = Q(() => e("span", null, null, -1)),
    _n = Q(() => e("span", null, null, -1)),
    hn = {
        class: "green"
    },
    $n = {
        key: 4,
        class: "item-left"
    },
    gn = {
        class: "yellow"
    },
    yn = {
        key: 1,
        class: "vip-content-recordVsrule-con"
    },
    fn = {
        class: "con-content"
    },
    wn = {
        class: "con-content__title"
    },
    bn = {
        class: "con-content__rules"
    },
    Tn = {
        class: "con-content__rules-item__title"
    },
    kn = Q(() => e("div", {
        class: "con-content__rules-item__titleRight"
    }, null, -1)),
    Vn = F({
        __name: "RecordVsrule",
        setup($, {
            expose: k
        }) {
            const {
                t: d
            } = _e(), h = K();
            let f = he("permission", null);
            f && (f = JSON.parse(f.value));
            const p = w(1);
            f && f[18] === !1 && (p.value = 2);
            const g = [{
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

            function c(m, o) {
                switch (m) {
                    case 1:
                        return d("vipTip12");
                    case 2:
                        return d("vipTip13");
                    case 3:
                        return d("vipTip10");
                    case 4:
                        return d("vipTip11", [o]);
                    case 5:
                        return d("vipTip6", [o]);
                    case 6:
                        return d("vipTip7");
                    case 7:
                        return d("vipTip15", [o]);
                    case 8:
                        return d("vipTip17", [o])
                }
            }

            function T(m) {
                p.value = m
            }

            function t() {
                h.push({
                    name: "RecordVsruleHistory"
                })
            }
            const r = $e({
                    pageSize: 10,
                    pageNo: 1
                }),
                V = w([]);
            async function u() {
                const m = await B(ye(r));
                m && (V.value = m.data.list)
            }
            return ne(() => {
                u()
            }), k({
                getPageListVipUserRecord: u
            }), (m, o) => {
                const S = U("svg-icon"),
                    y = ge("haspermission");
                return l(), i("div", Js, [e("div", Ks, [G((l(), i("button", {
                    class: C({
                        active: p.value == 1
                    }),
                    onClick: o[0] || (o[0] = s => T(1))
                }, [R(n(m.$t("record")), 1)], 2)), [
                    [y, 18]
                ]), e("button", {
                    class: C({
                        active: p.value == 2
                    }),
                    onClick: o[1] || (o[1] = s => T(2))
                }, n(m.$t("rule")), 3)]), p.value == 1 ? G((l(), i("div", Qs, [V.value.length > 0 ? (l(!0), i(I, {
                    key: 0
                }, H(V.value, (s, x) => (l(), i("div", {
                    class: "item ar-1px-b",
                    key: x
                }, [s.type == 1 || s.type == 2 ? (l(), i(I, {
                    key: 0
                }, [e("div", Ys, [e("span", Zs, n(a(N)(a(P).VipType, s.type)), 1), e("span", null, n(c(s.type, s.remark)), 1), e("span", null, n(s.createTime), 1)]), e("div", Ls, [e("p", null, [e("img", {
                    src: a(A)("main", "gold")
                }, null, 8, en), R(n(a(M)(s.awardAmount, " ", 0)), 1)]), e("p", null, [e("img", {
                    src: a(A)("main", "love")
                }, null, 8, sn), R(n(a(M)(s.bonusPoints, " ", 0)), 1)])])], 64)) : _("v-if", !0), s.type == 3 || s.type == 4 ? (l(), i(I, {
                    key: 1
                }, [e("div", nn, [e("span", tn, n(a(N)(a(P).VipType, s.type)), 1), e("span", null, n(c(s.type, s.remark)), 1), e("span", null, n(s.createTime), 1)]), e("div", an, [ln, on, e("span", null, n(s.experience) + " EXP", 1)])], 64)) : _("v-if", !0), s.type == 5 ? (l(), i("div", cn, [e("span", rn, n(a(N)(a(P).VipType, s.type)), 1), e("span", null, n(c(s.type, s.remark)), 1), e("span", null, n(s.createTime), 1)])) : _("v-if", !0), s.type == 6 ? (l(), i(I, {
                    key: 3
                }, [e("div", dn, [e("span", pn, n(a(N)(a(P).VipType, s.type)), 1), e("span", null, n(c(s.type, s.remark)), 1), e("span", null, n(s.createTime), 1)]), e("div", un, [vn, _n, e("span", hn, n(s.experience) + " EXP", 1)])], 64)) : _("v-if", !0), [7, 8].includes(s.type) ? (l(), i("div", $n, [e("span", gn, n(a(N)(a(P).VipType, s.type)), 1), e("span", null, n(c(s.type, s.remark)), 1), e("span", null, n(s.createTime), 1)])) : _("v-if", !0)]))), 128)) : (l(), se(Ae, {
                    key: 1
                })), G((l(), i("button", {
                    onClick: t
                }, [R(n(m.$t("viewAll")), 1)])), [
                    [y, 18]
                ])])), [
                    [y, 18]
                ]) : (l(), i("div", yn, [e("div", fn, [e("div", wn, [e("h1", null, n(m.$t("vipPrivilege")), 1), e("p", null, n(m.$t("vipRule")), 1)]), e("div", bn, [(l(), i(I, null, H(g, (s, x) => e("div", {
                    class: "con-content__rules-item ruleHead",
                    key: x
                }, [b(S, {
                    name: "ruleHead"
                }), e("div", Tn, n(s.title), 1), kn, e("p", null, n(s.content), 1)])), 64))])])]))])
            }
        }
    });
const mn = W(Vn, [
        ["__scopeId", "data-v-eaa4a307"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar021-webnew/src/components/Vip/RecordVsrule.vue"]
    ]),
    Sn = {
        class: "vip"
    },
    Rn = {
        class: "vip-header"
    },
    Cn = {
        class: "vip-header-wrapper"
    },
    In = ["src"],
    Dn = {
        class: "vip-header-wrapper-name"
    },
    An = {
        class: "vip-header-wrapper-name-nickName"
    },
    En = {
        class: "vip-content"
    },
    Mn = {
        class: "vip-content-empirical"
    },
    Nn = {
        class: "red"
    },
    Pn = ["innerHTML"],
    Un = {
        class: "vip-content-tip"
    },
    xn = {
        class: "succeed"
    },
    Hn = {
        class: "van-dialog__content-title"
    },
    Bn = {
        class: "van-dialog__content-note"
    },
    Fn = {
        class: "main"
    },
    Wn = ["src"],
    jn = {
        class: "yellow"
    },
    zn = ["src"],
    Gn = ["innerHTML"],
    On = {
        class: "van-dialog__content-btn"
    },
    Xn = F({
        __name: "index",
        setup($) {
            const d = Ee().getUserInfo,
                h = w(E("main/Avatar", d.userPhoto)),
                f = K(),
                {
                    setLoading: p
                } = L(),
                g = w(!1),
                c = w(),
                T = w(),
                t = w(),
                r = w(),
                V = w(),
                u = w(!1);

            function m() {
                f.push({
                    name: "Avatar"
                })
            }
            let o = he("permission", null);
            o && (o = JSON.parse(o.value));
            const S = w(!0);
            o && o[18] === !1 && (S.value = !1);
            const y = w();
            async function s() {
                var D, j, Y, X, q, J;
                p(!0);
                const v = await B(Me());
                v && v != null && v.data && (y.value = v.data, t.value.level = (D = y.value) == null ? void 0 : D.vipLevel, t.value.getListVipLevel((j = y.value) == null ? void 0 : j.vipLevel), ((Y = y.value) == null ? void 0 : Y.vipLevel) > 0 && (r.value.levelMy = (X = y.value) == null ? void 0 : X.vipLevel, r.value.getListVipUserRewards((q = y.value) == null ? void 0 : q.vipLevel)), T.value.level = (J = y.value) == null ? void 0 : J.vipLevel, await T.value.getVipUserLevelDetail(), u.value = !0), p(!1)
            }
            ne(() => {
                s()
            });

            function x(v) {
                me(() => {
                    var D;
                    t.value.level = v, t.value.getListVipLevel(v), v <= ((D = y.value) == null ? void 0 : D.vipLevel) && (r.value.levelMy = v, r.value.getListVipUserRewards(v))
                })
            }

            function fe(v) {
                c.value = v, g.value = !0
            }

            function we() {
                g.value = !1, V.value.getPageListVipUserRecord()
            }
            const be = (v, D) => {
                v = E("images", "avatar1");
                let j = document.querySelector(`.${D}`);
                j.src = v
            };
            return (v, D) => {
                var q, J, ie, oe, ce;
                const j = U("NavBar"),
                    Y = U("van-dialog"),
                    X = ge("lazy");
                return l(), i("div", Sn, [e("div", Rn, [b(j, {
                    title: "VIP",
                    class: "main",
                    "left-arrow": "",
                    onClickLeft: D[0] || (D[0] = z => a(f).go(-1))
                }), e("div", Cn, [e("div", {
                    class: "vip-header-wrapper-avatar",
                    onClick: m
                }, [_(` <img v-lazy="avatarUrl" :data-img="getIconsPublic('images', 'avatar1')" /> `), e("img", {
                    src: h.value,
                    class: "userAvatar",
                    onError: D[1] || (D[1] = z => be(h.value, "userAvatar"))
                }, null, 40, In)]), e("div", Dn, [e("div", {
                    class: C(["vip-header-wrapper-name-vip", ["n" + ((q = y.value) == null ? void 0 : q.vipLevel)]])
                }, null, 2), e("div", An, [e("h3", null, n((J = y.value) == null ? void 0 : J.nickName), 1)])])])]), e("div", En, [e("div", Mn, [e("div", null, [e("p", Nn, n(v.$t("eightThousandEXP", [S.value ? (ie = y.value) == null ? void 0 : ie.exp : 0])), 1), e("p", null, n(v.$t("myExperience")), 1)]), e("div", null, [e("p", {
                    class: "timeTop",
                    innerHTML: v.$t("fifteenDays", [S.value ? (oe = y.value) == null ? void 0 : oe.settlementDate : 0])
                }, null, 8, Pn), e("p", null, n(v.$t("settlementTime")), 1)])]), e("div", Un, n(v.$t("vipTip18")), 1), _("vip卡片"), b(_s, {
                    ref_key: "vipCardRef",
                    ref: T,
                    haspermission: S.value,
                    onChangeLevel: x
                }, null, 8, ["haspermission"]), _("等级福利"), b(ms, {
                    ref_key: "weal",
                    ref: t
                }, null, 512), _("我的福利"), G(b(qs, {
                    onSucceedDialog: fe,
                    ref_key: "myWelfare",
                    ref: r
                }, null, 512), [
                    [Ve, ((ce = y.value) == null ? void 0 : ce.vipLevel) > 0]
                ]), _("记录规则"), u.value ? (l(), se(mn, {
                    key: 0,
                    ref_key: "recordVsrule",
                    ref: V
                }, null, 512)) : _("v-if", !0)]), _("领取成功弹窗"), b(Y, {
                    show: g.value,
                    "onUpdate:show": D[3] || (D[3] = z => g.value = z),
                    "show-confirm-button": !1,
                    "z-index": "99"
                }, {
                    default: O(() => {
                        var z, re, de, pe;
                        return [G(e("img", xn, null, 512), [
                            [X, a(A)("public", "succeed")]
                        ]), e("div", Hn, n(v.$t("receivedSuccessfully")), 1), e("div", Bn, [e("div", null, [e("p", Fn, [e("img", {
                            src: a(A)("main", "love")
                        }, null, 8, Wn), R(n(a(M)((z = c.value) == null ? void 0 : z.integral, " ", 0)), 1)]), e("p", jn, [e("img", {
                            src: a(A)("main", "gold")
                        }, null, 8, zn), R(n(a(M)((re = c.value) == null ? void 0 : re.balance, " ", 0)), 1)])]), e("div", null, [e("p", {
                            innerHTML: v.$t("vipTip4", [(de = c.value) == null ? void 0 : de.integral, (pe = c.value) == null ? void 0 : pe.balance])
                        }, null, 8, Gn), _(" <p>{{ $t('vipTip5') }}</p> ")])]), e("div", On, [e("button", {
                            onClick: we
                        }, n(v.$t("sure")), 1)]), G(e("img", {
                            class: "close",
                            onClick: D[2] || (D[2] = mt => g.value = !1)
                        }, null, 512), [
                            [X, a(E)("main", "close")]
                        ])]
                    }),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const qn = W(Xn, [
        ["__scopeId", "data-v-92d3d2e1"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar021-webnew/src/views/vip/index.vue"]
    ]),
    Ct = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: qn
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    le = $ => (te("data-v-149189bc"), $ = $(), ae(), $),
    Jn = {
        class: "vip-RebateDetails"
    },
    Kn = {
        class: "item"
    },
    Qn = le(() => e("div", {
        class: "line"
    }, null, -1)),
    Yn = le(() => e("div", {
        class: "line"
    }, null, -1)),
    Zn = le(() => e("div", {
        class: "line"
    }, null, -1)),
    Ln = F({
        __name: "index",
        setup($) {
            const {
                setLoading: k
            } = L(), d = K(), h = w([]);
            async function f() {
                k(!0);
                const p = await B(Ne());
                p && (h.value = p.data, h.value.sort(function(g, c) {
                    return g.id - c.id
                })), k(!1)
            }
            return ne(() => {
                f()
            }), (p, g) => {
                const c = U("NavBar"),
                    T = U("svg-icon");
                return l(), i("div", Jn, [b(c, {
                    title: p.$t("RebateDetailTip1"),
                    "left-arrow": "",
                    onClickLeft: g[0] || (g[0] = t => a(d).go(-1))
                }, null, 8, ["title"]), e("h1", null, n(p.$t("RebateDetailTip2")), 1), (l(!0), i(I, null, H(h.value, t => (l(), i("div", {
                    class: "vip-RebateDetails-items",
                    key: t.id
                }, [e("div", {
                    class: C(["header ar-1px-b", `bg${t.id}`])
                }, "VIP " + n(t.id), 3), e("div", Kn, [e("div", null, [e("span", null, [b(T, {
                    name: "vipRebateDark"
                }), R(n(p.$t("RebateDetailTip3")), 1)]), e("span", null, n(a(Z)(t.electronic || 0, 100)) + " %", 1)]), Qn, e("div", null, [e("span", null, [b(T, {
                    name: "vipRebateLight"
                }), R(n(p.$t("RebateDetailTip4")), 1)]), e("span", null, n(a(Z)(t.realPerson || 0, 100)) + " %", 1)]), Yn, e("div", null, [e("span", null, [b(T, {
                    name: "vipRebateLight"
                }), R(n(p.$t("RebateDetailTip6")), 1)]), e("span", null, n(a(Z)(t.lottery || 0, 100)) + " %", 1)]), Zn, e("div", null, [e("span", null, [b(T, {
                    name: "vipRebateLight"
                }), R(n(p.$t("RebateDetailTip7")), 1)]), e("span", null, n(a(Z)(t.chess || 0, 100)) + " %", 1)])])]))), 128))])
            }
        }
    });
const et = W(Ln, [
        ["__scopeId", "data-v-149189bc"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar021-webnew/src/views/vip/RebateDetails/index.vue"]
    ]),
    It = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: et
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ee = $ => (te("data-v-d800515e"), $ = $(), ae(), $),
    st = {
        class: "vip-content-recordVsrule"
    },
    nt = {
        class: "vip-content-recordVsrule-con"
    },
    tt = {
        class: "item-left"
    },
    at = {
        class: "green"
    },
    lt = {
        class: "item-right"
    },
    it = ["src"],
    ot = ["src"],
    ct = {
        class: "item-left"
    },
    rt = {
        class: "red"
    },
    dt = {
        class: "item-right"
    },
    pt = ee(() => e("span", null, null, -1)),
    ut = ee(() => e("span", null, null, -1)),
    vt = {
        key: 2,
        class: "item-left"
    },
    _t = {
        class: "yellow"
    },
    ht = {
        class: "item-left"
    },
    $t = {
        class: "blue"
    },
    gt = {
        class: "item-right"
    },
    yt = ee(() => e("span", null, null, -1)),
    ft = ee(() => e("span", null, null, -1)),
    wt = {
        class: "green"
    },
    bt = {
        key: 4,
        class: "item-left"
    },
    Tt = {
        class: "yellow"
    },
    kt = F({
        __name: "index",
        setup($) {
            const {
                t: k
            } = _e(), d = K(), h = $e({
                pageSize: 20
            }), f = w([]);

            function p(g, c) {
                switch (g) {
                    case 1:
                        return k("vipTip12");
                    case 2:
                        return k("vipTip13");
                    case 3:
                        return k("vipTip10");
                    case 4:
                        return k("vipTip11", [c]);
                    case 5:
                        return k("vipTip6", [c]);
                    case 6:
                        return k("vipTip7");
                    case 7:
                        return k("vipTip15", [c]);
                    case 8:
                        return k("vipTip17", [c])
                }
            }
            return (g, c) => {
                const T = U("NavBar");
                return l(), i("div", st, [b(T, {
                    title: g.$t("record"),
                    "left-arrow": "",
                    onClickLeft: c[0] || (c[0] = t => a(d).go(-1))
                }, null, 8, ["title"]), b(Pe, {
                    api: a(ye),
                    list: f.value,
                    "onUpdate:list": c[1] || (c[1] = t => f.value = t),
                    "page-query": h,
                    "onUpdate:pageQuery": c[2] || (c[2] = t => h = t),
                    ref: "listRef"
                }, {
                    content: O(() => [e("div", nt, [(l(!0), i(I, null, H(f.value, (t, r) => (l(), i("div", {
                        class: "item ar-1px-b",
                        key: r
                    }, [t.type == 1 || t.type == 2 ? (l(), i(I, {
                        key: 0
                    }, [e("div", tt, [e("span", at, n(a(N)(a(P).VipType, t.type)), 1), e("span", null, n(p(t.type, t.remark)), 1), e("span", null, n(t.createTime), 1)]), e("div", lt, [e("p", null, [e("img", {
                        src: a(A)("main", "gold")
                    }, null, 8, it), R(n(a(M)(t.awardAmount, " ", 0)), 1)]), e("p", null, [e("img", {
                        src: a(A)("main", "love")
                    }, null, 8, ot), R(n(a(M)(t.bonusPoints, " ", 0)), 1)])])], 64)) : _("v-if", !0), t.type == 3 || t.type == 4 ? (l(), i(I, {
                        key: 1
                    }, [e("div", ct, [e("span", rt, n(a(N)(a(P).VipType, t.type)), 1), e("span", null, n(p(t.type, t.remark)), 1), e("span", null, n(t.createTime), 1)]), e("div", dt, [pt, ut, e("span", null, n(t.experience) + " EXP", 1)])], 64)) : _("v-if", !0), t.type == 5 ? (l(), i("div", vt, [e("span", _t, n(a(N)(a(P).VipType, t.type)), 1), e("span", null, n(p(t.type, t.remark)), 1), e("span", null, n(t.createTime), 1)])) : _("v-if", !0), t.type == 6 ? (l(), i(I, {
                        key: 3
                    }, [e("div", ht, [e("span", $t, n(a(N)(a(P).VipType, t.type)), 1), e("span", null, n(p(t.type, t.remark)), 1), e("span", null, n(t.createTime), 1)]), e("div", gt, [yt, ft, e("span", wt, n(a(M)(t.experience, " ", 0)) + " EXP", 1)])], 64)) : _("v-if", !0), [7, 8].includes(t.type) ? (l(), i("div", bt, [e("span", Tt, n(a(N)(a(P).VipType, t.type)), 1), e("span", null, n(p(t.type, t.remark)), 1), e("span", null, n(t.createTime), 1)])) : _("v-if", !0)]))), 128))])]),
                    _: 1
                }, 8, ["api", "list", "page-query"])])
            }
        }
    });
const Vt = W(kt, [
        ["__scopeId", "data-v-d800515e"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar021-webnew/src/views/vip/RecordVsruleHistory/index.vue"]
    ]),
    Dt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Vt
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    It as a, Dt as b, Ct as i
};