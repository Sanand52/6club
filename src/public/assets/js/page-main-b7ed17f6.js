import {
    V as q,
    G as ae,
    F as ge,
    a0 as N,
    a1 as te,
    X as l,
    a4 as $,
    a5 as V,
    D as n,
    W as o,
    Y as e,
    aa as Oe,
    _ as t,
    a8 as B,
    ad as we,
    ae as ke,
    K as Y,
    r as y,
    w as ce,
    ai as ee,
    a7 as H,
    $ as x,
    am as Ee,
    a2 as j,
    a3 as W,
    a6 as z,
    k as _e,
    T as It,
    ac as fe,
    E as me,
    B as Me,
    m as je,
    x as Nt,
    J as Ae,
    aq as Ve,
    aj as it,
    M as rt,
    P as Rt,
    aN as Pt,
    ah as Dt,
    aO as Ot,
    ag as Mt,
    C as Vt
} from "./modules-3ee1a0d5.js";
import {
    h as pe,
    _ as G,
    G as Se,
    a as ct,
    A as X,
    b3 as jt,
    b4 as Et,
    M as Ke,
    g as L,
    b5 as ut,
    b as Ut,
    x as R,
    b6 as zt,
    b7 as dt,
    u as Re,
    D as Ue,
    b8 as Gt,
    b9 as qt,
    ba as _t,
    v as vt,
    L as Fe,
    bb as Ft,
    bc as Te,
    bd as de,
    be as Wt,
    bf as Ht,
    bg as Xt,
    bh as Yt,
    bi as Zt,
    aO as pt,
    bj as Kt,
    bk as Qt,
    bl as Jt,
    bm as en,
    bn as tn,
    S as We,
    bo as nn,
    t as mt,
    bp as Ge,
    Q as ht,
    bq as sn,
    O as Je,
    br as et,
    bs as ft,
    aW as gt,
    b1 as yt,
    aX as bt,
    aY as Be,
    b2 as $t,
    bt as on,
    bu as an,
    bv as ln,
    bw as rn,
    bx as cn,
    by as tt,
    bz as un,
    bA as dn,
    V as _n,
    bB as vn,
    bC as ot,
    bD as pn,
    bE as mn,
    bF as wt,
    bG as hn,
    bH as fn,
    bI as gn,
    bJ as qe,
    bK as yn,
    i as bn,
    bL as $n,
    bM as kt,
    bN as wn,
    bO as kn,
    bP as Cn,
    bQ as Sn,
    bR as Tn,
    bS as An,
    bT as xn,
    bU as Bn,
    bV as Ln,
    bW as In,
    bX as Nn,
    bY as Rn,
    bZ as Pn,
    b_ as Dn,
    b$ as On,
    c0 as Mn,
    c1 as Vn,
    w as Ye,
    aL as jn,
    c2 as En
} from "./page-activity-b0cc3a5b.js";
import {
    u as Un,
    w as at,
    K as zn,
    F as Gn,
    b as qn,
    N as nt,
    D as Ct,
    v as Pe,
    a as De
} from "./page-home-d40a6f97.js";
import {
    V as Qe,
    L as Fn,
    a as St,
    E as Wn,
    b as Hn,
    P as Ze,
    c as Xn
} from "./page-login-95ed0718.js";
const Tt = w => (we("data-v-2c18a1cc"), w = w(), ke(), w),
    Yn = {
        class: "info-dialog"
    },
    Zn = {
        class: "info-dialog-header"
    },
    Kn = Tt(() => e("span", {
        class: "info-dialog-header-left"
    }, null, -1)),
    Qn = Tt(() => e("span", {
        class: "info-dialog-header-right"
    }, null, -1)),
    Jn = {
        class: "info-dialog-content"
    },
    es = {
        class: "info-dialog-footer"
    },
    ts = q({
        __name: "DiaLogOther",
        props: {
            show: {
                type: Boolean,
                default: !1
            },
            title: {
                type: String,
                default: ""
            },
            confirmText: {
                type: String,
                default: ""
            },
            showCancelBtn: {
                type: Boolean,
                default: !1
            },
            cancelText: {
                type: String,
                default: ""
            }
        },
        emits: ["update:show", "confirm", "cancel", "beforeClose"],
        setup(w, {
            emit: s
        }) {
            const p = w,
                {
                    t: _
                } = ae();
            _("confirm"), _("cancel");
            const h = ge({
                get() {
                    return p.show || !1
                },
                set(d) {
                    s("update:show", d)
                }
            });

            function a() {}
            return (d, i) => {
                const v = N("van-dialog"),
                    b = te("lazy");
                return o(), l("div", Yn, [$(v, {
                    show: h.value,
                    "onUpdate:show": i[1] || (i[1] = u => h.value = u),
                    onCancel: i[2] || (i[2] = () => {
                        s("cancel")
                    }),
                    onConfirm: i[3] || (i[3] = () => {
                        s("confirm")
                    }),
                    "cancel-button-text": w.cancelText || n(_)("cancel"),
                    "confirm-button-text": w.confirmText || n(_)("confirm"),
                    "show-cancel-button": w.showCancelBtn,
                    "before-close": a
                }, {
                    default: V(() => [e("div", null, [e("div", Zn, [Kn, Oe(d.$slots, "header", {}, () => [e("h5", null, t(w.title), 1)], !0), Qn]), e("div", Jn, [Oe(d.$slots, "content", {}, () => [e("div", null, t(d.$t("contentsHere")), 1)], !0)]), e("div", es, [Oe(d.$slots, "footer", {}, () => [B(e("img", {
                        onClick: i[0] || (i[0] = () => {
                            s("update:show", !1)
                        })
                    }, null, 512), [
                        [b, n(pe)("main", "close")]
                    ])], !0)])])]),
                    _: 3
                }, 8, ["show", "cancel-button-text", "confirm-button-text", "show-cancel-button"])])
            }
        }
    });
const At = G(ts, [
        ["__scopeId", "data-v-2c18a1cc"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/common/DiaLogOther.vue"]
    ]),
    Le = w => (we("data-v-5bd44e74"), w = w(), ke(), w),
    ns = {
        class: "userInfo__container-content"
    },
    ss = {
        class: "userInfo__container-content-wrapper"
    },
    os = ["src"],
    as = {
        class: "userInfo__container-content__name"
    },
    ls = {
        class: "userInfo__container-content-nickname"
    },
    is = ["src"],
    rs = {
        class: "userInfo__container-content-uid"
    },
    cs = Le(() => e("span", null, "UID", -1)),
    us = Le(() => e("span", null, "|", -1)),
    ds = ["src"],
    _s = {
        class: "userInfo__container-content-logintime"
    },
    vs = {
        class: "userInfo__container-content-logintime"
    },
    ps = Le(() => e("span", null, " ", -1)),
    ms = [ps],
    hs = {
        class: "userInfo__container-setting-center"
    },
    fs = {
        class: "userInfo__container-content__avatar"
    },
    gs = ["data-img"],
    ys = {
        class: "userInfo__container-setting-center-content"
    },
    bs = Le(() => e("h5", null, "UID", -1)),
    $s = ["src"],
    ws = {
        class: "info-dialog-content-title"
    },
    ks = ["placeholder"],
    Cs = {
        class: "info-dialog"
    },
    Ss = {
        class: "info-dialog-header"
    },
    Ts = Le(() => e("span", {
        class: "info-dialog-header-left"
    }, null, -1)),
    As = Le(() => e("span", {
        class: "info-dialog-header-right"
    }, null, -1)),
    xs = Le(() => e("div", {
        class: "info-dialog-content"
    }, [e("div", {
        class: "info-dialog-content-avatar-list"
    }, [e("div", null, [x(` <img v-lazy="getIcons('main', 'dialogNickname')" /> `), x(" <van-uploader></van-uploader> ")])])], -1)),
    Bs = {
        class: "info-dialog-footer"
    },
    Ls = q({
        __name: "index",
        props: {
            userInfo: {
                type: null,
                required: !0
            }
        },
        setup(w) {
            const s = w,
                p = Se(),
                _ = p.getUserInfo,
                {
                    setLoading: h
                } = ct(),
                a = Y(),
                d = y(!1),
                i = y(!1),
                v = y(!1);

            function b(T) {
                d.value = T
            }

            function u(T) {
                a.push({
                    name: "Avatar"
                })
            }
            ce(() => {
                a.currentRoute.value.name === "SettingCenter" ? v.value = !0 : (v.value = !1, m())
            });
            const c = y(!1),
                r = y();
            async function m() {
                h(!0);
                const T = await X(jt());
                T && (r.value = T.data), h(!1)
            }
            async function g() {
                if (s.userInfo.nickName.trim() === "") return c.value = !0, d.value = !0, !1;
                if (s.userInfo.nickName.trim().length > 12) return c.value = !0, d.value = !0, !1;
                c.value = !1, d.value = !1, await X(Et({
                    nikeName: s.userInfo.nickName
                })) && p.setUserInfo({ ...s.userInfo
                })
            }

            function S() {
                a.go(-1)
            }

            function A() {}
            const P = (T, k) => {
                    T = pe("images", "avatar1");
                    let O = document.querySelector(`.${k}`);
                    O.src = T
                },
                D = y(pe("main/Avatar", s.userInfo.userPhoto));
            return (T, k) => {
                var Z, K;
                const O = N("NavBar"),
                    I = N("van-icon"),
                    ne = N("van-dialog"),
                    se = te("lazy");
                return o(), l("div", {
                    class: H(["userInfo__container", {
                        "setting-page-container": v.value
                    }])
                }, [B($(O, {
                    title: T.$t("settingCenter"),
                    class: "main",
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: S
                }, null, 8, ["title"]), [
                    [ee, v.value]
                ]), B(e("div", ns, [e("div", ss, [e("div", {
                    class: "userInfo__container-content__avatar",
                    onClick: k[1] || (k[1] = E => u())
                }, [e("img", {
                    src: D.value,
                    class: "userAvatar",
                    onError: k[0] || (k[0] = E => P(D.value, "userAvatar"))
                }, null, 40, os)]), e("div", as, [e("div", ls, [e("h3", null, t((Z = n(_).nickName) == null ? void 0 : Z.toUpperCase()), 1), e("div", {
                    class: H(["n" + ((K = r.value) == null ? void 0 : K.vipLevel)])
                }, null, 2), B(e("img", {
                    class: "editPencil",
                    onClick: k[2] || (k[2] = E => b(!0)),
                    src: n(pe)("main", "editPencil")
                }, null, 8, is), [
                    [ee, v.value]
                ])]), e("div", rs, [cs, us, e("span", null, t(n(_).userId), 1), e("img", {
                    onClick: k[3] || (k[3] = E => n(Ke)(n(_).userId.toString())),
                    src: n(L)("public", "copy")
                }, null, 8, ds)]), B(e("div", _s, [e("span", null, t(T.$t("lastLoginTime")) + " ", 1), B(e("span", null, t(n(_).userLoginDate), 513), [
                    [ee, n(_).userLoginDate]
                ])], 512), [
                    [ee, !v.value]
                ]), B(e("div", vs, ms, 512), [
                    [ee, v.value]
                ])])]), x(` <div v-show="!isSettingPage" class="userInfo__container-content-right">
				<img v-lazy="getIcons('main', 'myCoin')" alt="" />
				<span>我的金币</span>
			</div> `), B(e("div", {
                    class: "userInfo__container-content-right",
                    onClick: k[4] || (k[4] = E => u())
                }, [e("h5", null, t(T.$t("changeAvatar")), 1)], 512), [
                    [ee, v.value]
                ])], 512), [
                    [ee, !v.value]
                ]), B(e("div", hs, [e("div", {
                    class: "userInfo__container-setting-center-header",
                    onClick: k[6] || (k[6] = E => u())
                }, [e("div", fs, [B(e("img", {
                    "data-img": n(pe)("images", "avatar1")
                }, null, 8, gs), [
                    [se, D.value]
                ])]), e("div", {
                    class: "userInfo__container-setting-center-header-edit",
                    onClick: k[5] || (k[5] = E => u())
                }, [e("span", null, t(T.$t("changeAvatar")), 1), $(I, {
                    name: "arrow",
                    color: "#888"
                })])]), e("div", {
                    class: "userInfo__container-setting-center-content ar-1px-b",
                    onClick: k[9] || (k[9] = E => b(!0))
                }, [e("h5", null, t(T.$t("nickName")), 1), e("div", {
                    onClick: k[8] || (k[8] = E => b(!0))
                }, [e("span", null, t(n(_).nickName), 1), $(I, {
                    name: "arrow",
                    color: "#888",
                    onClick: k[7] || (k[7] = E => b(!0))
                })])]), e("div", ys, [bs, e("div", null, [e("span", null, t(n(_).userId), 1), e("img", {
                    onClick: k[10] || (k[10] = E => n(Ke)(n(_).userId.toString())),
                    src: n(L)("main", "copyIcon")
                }, null, 8, $s)])])], 512), [
                    [ee, v.value]
                ]), $(At, {
                    show: d.value,
                    "onUpdate:show": k[12] || (k[12] = E => d.value = E),
                    onConfirm: g,
                    title: T.$t("editNickname")
                }, {
                    content: V(() => [e("div", ws, [B(e("img", null, null, 512), [
                        [se, n(L)("main", "dialogNickname")]
                    ]), e("span", null, t(T.$t("nickName")), 1)]), B(e("input", {
                        type: "text",
                        "auto-complete": "new-password",
                        autocomplete: "off",
                        name: "username",
                        "onUpdate:modelValue": k[11] || (k[11] = E => n(_).nickName = E),
                        placeholder: T.$t("tipEnterNickname")
                    }, null, 8, ks), [
                        [Ee, n(_).nickName]
                    ]), B(e("h4", null, t(T.$t("tipDoNotEnterUnvalideNickname")), 513), [
                        [ee, c.value]
                    ])]),
                    _: 1
                }, 8, ["show", "title"]), e("div", Cs, [$(ne, {
                    show: i.value,
                    "onUpdate:show": k[14] || (k[14] = E => i.value = E),
                    onConfirm: k[15] || (k[15] = E => void 0)
                }, {
                    default: V(() => [e("div", null, [e("div", Ss, [Ts, e("h5", null, t(T.$t("changeAvatar")), 1), As]), xs, e("div", Bs, [B(e("img", {
                        onClick: k[13] || (k[13] = E => u(!1))
                    }, null, 512), [
                        [se, n(pe)("main", "close")]
                    ])])])]),
                    _: 1
                }, 8, ["show"])])], 2)
            }
        }
    });
const xt = G(Ls, [
        ["__scopeId", "data-v-5bd44e74"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Main/UserInformation/index.vue"]
    ]),
    Is = w => (we("data-v-7d799898"), w = w(), ke(), w),
    Ns = {
        class: "totalSavings__container"
    },
    Rs = {
        class: "totalSavings__container-header"
    },
    Ps = {
        class: "totalSavings__container-header-box ar-1px-b"
    },
    Ds = {
        class: "totalSavings__container-header__title"
    },
    Os = {
        class: "totalSavings__container-header__subtitle"
    },
    Ms = ["src"],
    Vs = {
        class: "totalSavings__container-content"
    },
    js = ["src"],
    Es = ["src"],
    Us = ["src"],
    zs = ["src"],
    Gs = {
        alt: ""
    },
    qs = Is(() => e("span", null, "VIP", -1)),
    Fs = q({
        __name: "index",
        props: {
            userInfo: {
                type: null,
                required: !0
            }
        },
        setup(w) {
            const s = Y(),
                p = ut(),
                {
                    t: _
                } = ae(),
                {
                    goWallet: h,
                    isArWalletActive: a,
                    goActive: d,
                    getInfo: i
                } = Ut(),
                v = y(!1),
                b = m => {
                    s.push({
                        name: m
                    })
                },
                u = async () => {
                    if (v.value) await i();
                    else return;
                    a.value ? h("main") : d("main")
                },
                c = ge(() => p.getAmount);
            async function r() {
                p.resetData(!1, !0)
            }
            return ce(() => {
                v.value = sessionStorage.getItem("ar_pay") === "1"
            }), (m, g) => {
                const S = te("throttle-click"),
                    A = te("lazy");
                return o(), l("div", Ns, [e("div", Rs, [e("div", Ps, [e("div", Ds, [e("span", null, t(n(_)("totalBalance")), 1), x(` <img v-lazy="getIcons('main', 'balanceIcon')" alt="" /> `)]), e("p", Os, [e("span", null, t(n(R)(c.value)), 1), B(e("img", {
                    src: n(L)("main", "refresh")
                }, null, 8, Ms), [
                    [S, {
                        handler: r,
                        wait: 500
                    }]
                ])])])]), e("div", Vs, [v.value ? (o(), l("div", {
                    key: 0,
                    onClick: u,
                    class: "totalSavings__container-content-item"
                }, [e("div", null, [e("img", {
                    src: n(L)("main", "wallets"),
                    alt: ""
                }, null, 8, js), e("span", null, "AR" + t(n(_)("wallet")), 1)])])) : (o(), l("div", {
                    key: 1,
                    onClick: g[0] || (g[0] = P => b("wallet")),
                    class: "totalSavings__container-content-item"
                }, [e("div", null, [e("img", {
                    src: n(L)("main", "wallet"),
                    alt: ""
                }, null, 8, Es), e("span", null, t(n(_)("wallet")), 1)])])), e("div", {
                    onClick: g[1] || (g[1] = P => b("Recharge")),
                    class: "totalSavings__container-content-item"
                }, [e("div", null, [e("img", {
                    src: n(L)("wallet", "rechargeIcon"),
                    alt: ""
                }, null, 8, Us), e("span", null, t(n(_)("recharge")), 1)])]), e("div", {
                    onClick: g[2] || (g[2] = P => b("Withdraw")),
                    class: "totalSavings__container-content-item"
                }, [e("div", null, [e("img", {
                    src: n(L)("wallet", "widthdrawBlue"),
                    alt: ""
                }, null, 8, zs), e("span", null, t(n(_)("withdraw")), 1)])]), e("div", {
                    onClick: g[3] || (g[3] = P => b("vip")),
                    class: "totalSavings__container-content-item"
                }, [e("div", null, [B(e("img", Gs, null, 512), [
                    [A, n(L)("main", "VipIcon")]
                ]), qs])])])])
            }
        }
    });
const Ws = G(Fs, [
        ["__scopeId", "data-v-7d799898"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Main/TotalSavings/index.vue"]
    ]),
    Hs = {
        class: "financialServices__container"
    },
    Xs = {
        class: "financialServices__container-footer"
    },
    Ys = ["src"],
    Zs = {
        class: "financialServices__container-footer-des"
    },
    Ks = ["src"],
    Qs = ["src"],
    Js = {
        class: "financialServices__container-footer-des"
    },
    eo = ["src"],
    to = {
        class: "financialServices__container-box"
    },
    no = ["src"],
    so = {
        class: "financialServices__container-box-para"
    },
    oo = ["src"],
    ao = {
        class: "financialServices__container-box-para"
    },
    lo = ["src"],
    io = {
        class: "financialServices__container-box-para"
    },
    ro = ["src"],
    co = {
        class: "financialServices__container-box-para"
    },
    uo = q({
        __name: "index",
        props: {
            userInfo: {
                type: null,
                required: !0
            }
        },
        setup(w) {
            const s = dt(),
                _ = Se().getUserInfo,
                h = Y(),
                a = y(0),
                d = y(0),
                i = y(0),
                v = y("0"),
                b = c => {
                    c === "RechargeHistory" && s.emit("changeKeepAliveKey"), h.push({
                        name: c
                    })
                };
            return (() => {
                zt().then(c => {
                    v.value = c.state, a.value = c.dayShareRate, d.value = c.shareTime, i.value = c.safeAmount
                })
            })(), (c, r) => {
                const m = N("van-icon");
                return o(), l("div", Hs, [e("div", Xs, [x(" 保险箱 "), v.value == "1" ? (o(), l("div", {
                    key: 0,
                    onClick: r[0] || (r[0] = g => b("StrongBox"))
                }, [e("img", {
                    src: n(L)("main", "vault"),
                    alt: ""
                }, null, 8, Ys), e("div", null, [e("div", null, [e("span", null, t(c.$t("vault")), 1), e("div", Zs, [e("img", {
                    src: n(L)("main", "vaultSmallIcon"),
                    alt: ""
                }, null, 8, Ks), e("h4", null, t(n(R)(i.value)), 1), $(m, {
                    name: "arrow",
                    color: "#fff"
                })])]), x(" <span>{{ $t('dailyRate') + dayShareRate }}%，{{ shareTime + $t('minCalculateIncome') }}</span> "), e("span", null, t(c.$t("dailyRateReturn", [a.value, d.value])), 1)])])) : x("v-if", !0), x(" 积分商城 "), n(_).isOpenPointMall == 1 ? (o(), l("div", {
                    key: 1,
                    onClick: r[1] || (r[1] = g => b("PointMall"))
                }, [e("img", {
                    src: n(L)("main", "points"),
                    alt: ""
                }, null, 8, Qs), e("div", null, [e("div", null, [e("span", null, t(c.$t("points")), 1), e("div", Js, [e("img", {
                    src: n(L)("main", "pointsSmallIncon"),
                    alt: ""
                }, null, 8, eo), e("h4", null, t(n(R)(n(_).integral, " ")), 1), $(m, {
                    name: "arrow",
                    color: "#fff"
                })])]), e("span", null, t(c.$t("vaultdesc2")), 1)])])) : x("v-if", !0)]), x(" 下注-交易-充值-提现 "), e("div", to, [e("div", {
                    onClick: r[2] || (r[2] = g => b("BetRecords"))
                }, [e("img", {
                    src: n(L)("main", "betHistory")
                }, null, 8, no), e("div", so, [e("h3", null, t(c.$t("bet")), 1), e("span", null, t(c.$t("mybetRecords")), 1)])]), e("div", {
                    onClick: r[3] || (r[3] = g => b("TransAction"))
                }, [e("img", {
                    src: n(L)("main", "tradeHistory")
                }, null, 8, oo), e("div", ao, [e("h3", null, t(c.$t("trade")), 1), e("span", null, t(c.$t("tradeRecords")), 1)])]), e("div", {
                    onClick: r[4] || (r[4] = g => b("RechargeHistory"))
                }, [e("img", {
                    src: n(L)("wallet", "rechargeHistory")
                }, null, 8, lo), e("div", io, [e("h3", null, t(c.$t("recharge")), 1), e("span", null, t(c.$t("myRchargeHistory")), 1)])]), e("div", {
                    onClick: r[5] || (r[5] = g => b("WithdrawHistory"))
                }, [e("img", {
                    src: n(L)("main", "myWithdrawHistory")
                }, null, 8, ro), e("div", co, [e("h3", null, t(c.$t("withdraw")), 1), e("span", null, t(c.$t("myWithdrawHistory")), 1)])])])])
            }
        }
    });
const _o = G(uo, [
        ["__scopeId", "data-v-acd6d46f"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Main/FinancialServices/index.vue"]
    ]),
    vo = {
        class: "serviceCenter-wrap"
    },
    po = {
        class: "serviceCenter__container"
    },
    mo = {
        class: "serviceCenter__container-items"
    },
    ho = ["onClick"],
    fo = {
        class: "serviceCenter-wrap-header"
    },
    go = q({
        __name: "index",
        setup(w) {
            const {
                t: s
            } = ae(), p = Y(), _ = Se(), h = ut(), a = Re(), d = [{
                icon: "settingCenter",
                title: s("setting"),
                link: "SettingCenter"
            }, {
                icon: "withdrawHistory",
                title: s("feedback"),
                link: "Feedback"
            }, {
                icon: "notificationCenter",
                title: s("noti"),
                link: "Notification"
            }, {
                icon: "serviceCenter",
                title: s("wholeTimeService"),
                link: "CustomerService"
            }, {
                icon: "guide",
                title: s("guide"),
                link: "Guide"
            }, {
                icon: "about",
                title: s("about"),
                link: "About"
            }], i = y(!1);

            function v(c) {
                p.push({
                    name: c
                })
            }

            function b() {
                i.value = !0
            }

            function u() {
                Gt({}).then(async c => {
                    _.token = "", i.value = !1, h.setTimestampLast(0), a.userForm.vCode = "", a.loginout()
                }).catch(c => {
                    _e({
                        message: c.msg,
                        wordBreak: "break-word"
                    })
                }).finally(() => {
                    localStorage.setItem("isToLogin", "1"), Se().setToken(""), p.push({
                        name: "login"
                    })
                })
            }
            return (c, r) => {
                const m = te("lazy");
                return o(), l("div", vo, [e("div", po, [e("h1", null, t(c.$t("serviceCenter")), 1), e("div", mo, [(o(), l(j, null, W(d, g => e("div", {
                    key: g.title,
                    onClick: S => v(g.link),
                    class: "serviceCenter__container-items__item"
                }, [B(e("img", null, null, 512), [
                    [m, n(L)("main", `${g.icon}`)]
                ]), e("span", null, t(g.title), 1)], 8, ho)), 64))])]), e("div", fo, [e("button", {
                    onClick: b
                }, [B(e("img", null, null, 512), [
                    [m, n(L)("home", "logout")]
                ]), z(" " + t(c.$t("logout")), 1)])]), x("退出登录弹窗"), $(Ue, {
                    show: i.value,
                    "onUpdate:show": r[0] || (r[0] = g => i.value = g),
                    onConfirm: u,
                    confirmText: n(s)("confirm"),
                    cancelText: n(s)("cancel"),
                    "show-cancel-btn": !0,
                    title: c.$t("tipLogout1")
                }, null, 8, ["show", "confirmText", "cancelText", "title"])])
            }
        }
    });
const yo = G(go, [
        ["__scopeId", "data-v-159bf81f"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Main/ServiceCenter/index.vue"]
    ]),
    bo = {
        class: "settingPanel__container"
    },
    $o = {
        class: "settingPanel__container-items"
    },
    wo = ["onClick"],
    ko = {
        class: "settingPanel__container-items__title"
    },
    Co = ["src"],
    So = {
        class: "settingPanel__container-items-right"
    },
    To = q({
        __name: "index",
        setup(w) {
            const {
                t: s
            } = ae(), p = Y(), _ = Se(), h = ge(() => _.userInfo);
            let a = It("permission", null);
            a && (a = JSON.parse(a.value));
            const d = ge(() => h.value.isOpenChampion),
                i = y([{
                    icon: "notifyIcon",
                    title: s("notifications"),
                    link: "Messages",
                    isopen: "1"
                }, {
                    icon: "giftIcon",
                    title: s("giftExchange"),
                    link: "RedeemGift",
                    isopen: "1"
                }, {
                    icon: "cps",
                    title: s("cpsTip6"),
                    link: "MyCps",
                    isopen: d
                }, {
                    icon: "orderIcon",
                    title: s("productOrder"),
                    link: "PointMall-MyOrders",
                    isopen: h.value.isOpenPointMall
                }, {
                    icon: "mylottery",
                    title: s("MyLottery"),
                    link: "PointMall-MyLottery",
                    isopen: h.value.isOpenPointMall
                }, {
                    icon: "statsIcon",
                    title: s("gameStatistics"),
                    link: "GameStats",
                    isopen: "1",
                    haspermission: 17
                }, {
                    icon: "languageIcon",
                    title: s("switchLanguages"),
                    link: "Language",
                    isopen: "1"
                }]);

            function v(b) {
                p.push({
                    name: b.link
                })
            }
            return (b, u) => {
                const c = N("van-icon"),
                    r = te("haspermission");
                return o(), l("div", bo, [e("div", $o, [(o(!0), l(j, null, W(i.value, m => {
                    var g, S;
                    return B((o(), l("div", {
                        key: m.title,
                        onClick: A => v(m),
                        class: "settingPanel__container-items__item ar-1px-b"
                    }, [e("div", ko, [e("img", {
                        src: n(L)("main", `${m.icon}`)
                    }, null, 8, Co), e("span", null, t(m.title), 1)]), e("div", So, [B(e("h5", null, t((g = h.value) == null ? void 0 : g.unRead), 513), [
                        [ee, m.icon === "notifyIcon" && ((S = h.value) == null ? void 0 : S.unRead) > 0]
                    ]), B(e("span", null, t(n(_).getLanguageName), 513), [
                        [ee, m.icon === "languageIcon"]
                    ]), $(c, {
                        name: "arrow",
                        color: "var(--Lottery4dTextColor-1)"
                    })])], 8, wo)), [
                        [ee, m.isopen == "1"],
                        [r, m.haspermission]
                    ])
                }), 128))])])
            }
        }
    });
const Ao = G(To, [
        ["__scopeId", "data-v-a30d19b1"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Main/SettingPanel/index.vue"]
    ]),
    xo = {
        class: "userinfo-content"
    },
    Bo = q({
        __name: "index",
        setup(w) {
            const s = dt(),
                p = Se();
            Re().getUserInfo({
                signature: p.token
            });
            const h = p.getUserInfo;
            return localStorage.getItem("needUpd") === "1" && (localStorage.setItem("isReload", "1"), localStorage.setItem("needUpd", "2"), s.emit("keyChange")), (d, i) => (o(), l(j, null, [x(" 头部 "), $(xt, {
                userInfo: n(h)
            }, null, 8, ["userInfo"]), e("div", xo, [x(" 总余额及钱包 "), $(Ws, {
                userInfo: n(h)
            }, null, 8, ["userInfo"]), x(" 保险箱 积分商城 下注-交易-充值-提现 "), $(_o, {
                userInfo: n(h)
            }, null, 8, ["userInfo"]), x(" 通知 邀请奖励 礼物兑换 商品订单 游戏统计 语言变更 "), $(Ao), x(" 服务中心 "), $(yo)])], 64))
        }
    });
const Lo = G(Bo, [
        ["__scopeId", "data-v-a78765c7"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/index.vue"]
    ]),
    t2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Lo
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Io = {
        class: "about-container"
    },
    No = {
        class: "about-container-header"
    },
    Ro = {
        class: "about-container-header-belly"
    },
    Po = {
        alt: ""
    },
    Do = {
        class: "about-container-content"
    },
    Oo = {
        class: "about-container-content-item-title"
    },
    Mo = {
        alt: ""
    },
    Vo = {
        class: "about-container-content-item-title"
    },
    jo = {
        alt: ""
    },
    Eo = q({
        __name: "index",
        setup(w) {
            const s = Y();

            function p(_) {
                s.push({
                    name: "About-AboutDetail",
                    state: {
                        paramValue: _
                    }
                })
            }
            return (_, h) => {
                const a = N("NavBar"),
                    d = N("van-icon"),
                    i = te("lazy");
                return o(), l("div", Io, [e("div", No, [$(a, {
                    title: `${_.$t("aboutTitle")}`,
                    class: "main",
                    "left-arrow": "",
                    onClickLeft: h[0] || (h[0] = v => n(s).go(-1))
                }, null, 8, ["title"]), e("div", Ro, [B(e("img", Po, null, 512), [
                    [i, n(L)("main", "aboutBg")]
                ])])]), e("div", Do, [e("div", {
                    class: "about-container-content-item ar-1px-b",
                    onClick: h[1] || (h[1] = v => p("Protocols"))
                }, [e("div", Oo, [B(e("img", Mo, null, 512), [
                    [i, n(L)("main", "privacyIcon")]
                ]), e("span", null, t(_.$t("pravicyProtocal")), 1)]), $(d, {
                    name: "arrow",
                    size: "18px",
                    color: "var(--text2)"
                })]), e("div", {
                    class: "about-container-content-item ar-1px-b",
                    onClick: h[2] || (h[2] = v => p("Agreement"))
                }, [e("div", Vo, [B(e("img", jo, null, 512), [
                    [i, n(L)("main", "riskProtocal")]
                ]), e("span", null, t(_.$t("riskProtocal")), 1)]), $(d, {
                    name: "arrow",
                    size: "18px",
                    color: "var(--text2)"
                })])])])
            }
        }
    });
const Uo = G(Eo, [
        ["__scopeId", "data-v-6616fdfe"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/About/index.vue"]
    ]),
    n2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Uo
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    zo = {
        class: "avatar-container"
    },
    Go = {
        class: "avatar-container-content"
    },
    qo = ["src"],
    lt = !0,
    Fo = q({
        __name: "index",
        setup(w) {
            const {
                t: s
            } = ae(), p = Se(), _ = p.getUserInfo, h = Y(), a = y(_.userPhoto);
            async function d(i) {
                if (a.value = (i + 1).toString(), i < 0) return _e({
                    message: s("tipSelectPls")
                }), !1;
                await X(qt({
                    userPhoto: (i + 1).toString()
                })) && (_.userPhoto = (i + 1).toString(), p.setUserInfo({ ..._
                }), h.go(-1))
            }
            return (i, v) => {
                const b = N("NavBar"),
                    u = N("van-checkbox"),
                    c = N("van-grid-item"),
                    r = N("van-grid");
                return o(), l("div", zo, [$(b, {
                    title: i.$t("changeAvatar"),
                    "left-arrow": "",
                    onClickLeft: v[0] || (v[0] = m => n(h).go(-1))
                }, null, 8, ["title"]), e("div", Go, [$(r, {
                    border: !1,
                    "column-num": 3,
                    gutter: 10
                }, {
                    default: V(() => [(o(), l(j, null, W(20, (m, g) => $(c, {
                        onClick: S => d(g)
                    }, {
                        default: V(() => [e("img", {
                            class: H(a.value === (g + 1).toString() ? "active" : ""),
                            src: n(pe)("main/Avatar", `${g+1}`)
                        }, null, 10, qo), B(e("div", null, [$(u, {
                            modelValue: lt,
                            "onUpdate:modelValue": v[1] || (v[1] = S => lt = S),
                            "icon-size": "20px"
                        })], 512), [
                            [ee, a.value === (g + 1).toString()]
                        ])]),
                        _: 2
                    }, 1032, ["onClick"])), 64))]),
                    _: 1
                })])])
            }
        }
    });
const Wo = G(Fo, [
        ["__scopeId", "data-v-0cd6dac4"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/Avatar/index.vue"]
    ]),
    s2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Wo
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ho = {
        class: "list"
    },
    Xo = ["onClick"],
    Yo = {
        key: 0
    },
    Zo = {
        class: "img"
    },
    Ko = {
        key: 1
    },
    Qo = {
        class: "img"
    },
    Jo = q({
        __name: "SelectList",
        props: {
            showPopup: {
                type: Boolean,
                default: y(!1)
            },
            list: {
                type: Array,
                default: () => []
            },
            tabId: {
                type: Number,
                default: 0
            },
            selectId: {
                type: Number,
                default: 0
            }
        },
        emits: ["update:showPopup", "onClick", "onBack"],
        setup(w, {
            emit: s
        }) {
            const p = w,
                _ = ge({
                    get() {
                        return p.showPopup || !1
                    },
                    set(d) {
                        s("update:showPopup", d)
                    }
                }),
                h = (d, i) => {
                    s("onClick", d, i)
                },
                a = () => {
                    s("onBack")
                };
            return (d, i) => {
                const v = N("van-popup"),
                    b = te("lazy");
                return o(), fe(v, {
                    show: _.value,
                    "onUpdate:show": i[0] || (i[0] = u => _.value = u),
                    round: "",
                    position: "bottom",
                    onClickOverlay: a
                }, {
                    default: V(() => [e("div", Ho, [(o(!0), l(j, null, W(w.list, (u, c) => (o(), l("div", {
                        class: H(c == w.selectId ? "item active" : "item"),
                        key: c,
                        onClick: r => h(u, c)
                    }, [w.tabId === 0 ? (o(), l("div", Yo, [B(e("img", Zo, null, 512), [
                        [b, u.img]
                    ]), z(t(u.key), 1)])) : (o(), l("div", Ko, [B(e("img", Qo, null, 512), [
                        [b, n(pe)(c == w.selectId ? "main/BetRecord/acitve" : "main/BetRecord", u.value)]
                    ]), z(" " + t(u.key), 1)]))], 10, Xo))), 128))])]),
                    _: 1
                }, 8, ["show"])
            }
        }
    });
const ea = G(Jo, [
        ["__scopeId", "data-v-0a298b45"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Main/BetRecords/SelectList.vue"]
    ]),
    ta = {
        class: "bet-container-lottery-card"
    },
    na = {
        class: "bet-container-lottery-card-header ar-1px-b"
    },
    sa = ["src"],
    oa = {
        key: 0
    },
    aa = {
        key: 1
    },
    la = {
        key: 0
    },
    ia = ["src"],
    ra = {
        class: "bet"
    },
    ca = {
        class: "li betNum"
    },
    ua = {
        class: "lab"
    },
    da = {
        key: 0,
        class: "txt"
    },
    _a = {
        key: 1,
        class: "txt"
    },
    va = {
        key: 2,
        class: "txt"
    },
    pa = {
        key: 3,
        class: "betList select"
    },
    ma = {
        key: 4,
        class: "betList select"
    },
    ha = {
        class: "bet-container-lottery-note-box"
    },
    fa = {
        class: "bet-container-lottery-note-box-para"
    },
    ga = {
        class: "bet-container-lottery-note-box-para"
    },
    ya = {
        class: "last"
    },
    ba = {
        class: "bet-container-lottery-note-box-para"
    },
    $a = q({
        __name: "XoSoRecord",
        props: {
            listData: {
                type: null,
                required: !0,
                default: {
                    type: Array,
                    default: () => []
                }
            },
            typeValue: {
                type: null,
                required: !0,
                default: {
                    type: Number,
                    default: 0
                }
            }
        },
        setup(w) {
            const {
                t: s
            } = ae(), p = y({
                1: s("bettingResultState1"),
                2: s("bettingResultState3"),
                3: s("hasWon"),
                4: s("xosoTxt74"),
                5: s("xosoTxt75"),
                6: s("xosoTxt76")
            }), _ = u => {
                let c = "";
                switch (u) {
                    case 1:
                        c = "WIN GO";
                        break;
                    case 13:
                        c = "TRX Hash";
                        break;
                    case 5:
                        c = "5D Lotre";
                        break;
                    case 9:
                        c = "K3 Lotre";
                        break;
                    default:
                        c = u.toString()
                }
                return c
            }, h = u => {
                if (u == "3") return "color40C592"
            };
            JSON.parse(localStorage.getItem("gameCategoryList"));
            const a = u => {
                    const c = d(u);
                    return i(c)
                },
                d = u => {
                    let c = [];
                    if (u.includes(",")) {
                        let r = u.split(","),
                            m = {};
                        for (let g = 0; r.length > g; g++) m = r[g].split("|"), c.push(m);
                        return c
                    }
                    return u
                },
                i = u => {
                    let c = u[0],
                        r = u[1],
                        m = [];
                    for (let S = 0; c.length > S; S++)
                        for (let A = 0; r.length > A; A++) m.push(c[S] + r[A]);
                    let g = u.slice(2);
                    return g.length > 0 ? i([m, ...g]) : m
                },
                v = u => {
                    if (u != null) {
                        let c = u.split(",");
                        if (c.length > 0) return c
                    }
                    return []
                },
                b = u => u.replace(/\|/g, ",");
            return (u, c) => (o(!0), l(j, null, W(u.listData, r => (o(), l("div", {
                class: "bet-container-lottery-items",
                key: r.orderNumber
            }, [e("div", ta, [e("div", na, [e("h1", null, [e("h2", null, t(_(u.typeValue)), 1), e("span", {
                class: H(h(r.status))
            }, t(p.value[r.status]), 3)]), e("p", null, t(r.createTime), 1)]), e("div", {
                class: H(["bet-container-lottery-card-info", `type${u.typeValue}`])
            }, [e("img", {
                src: n(L)("main", "gameStatsSteps"),
                class: H(`type${u.typeValue}`)
            }, null, 10, sa), e("ul", null, [e("li", null, [e("h2", null, t(n(s)("type")), 1), e("span", null, t(n(s)("code" + r.bettingTypeNameCode)), 1)]), e("li", null, [e("h2", null, t(n(s)("betNumber")), 1), e("span", null, t(r.issueNo), 1)]), e("li", null, [e("h2", null, t(n(s)("area")), 1), u.typeValue == "XOSO" ? (o(), l("span", oa, t(n(s)("code" + r.areNameCode)), 1)) : u.typeValue == "FXOSO" ? (o(), l("span", aa, t(n(s)("code" + r.typeCode)), 1)) : x("v-if", !0)]), u.typeValue == "XOSO" ? (o(), l("li", la, [e("h2", null, t(n(s)("city")), 1), e("span", null, t(n(s)("code" + r.nameCode)), 1)])) : x("v-if", !0), e("li", null, [e("h2", null, t(n(s)("orderNo")), 1), e("span", null, t(r.orderNo), 1)]), e("li", null, [e("h2", null, t(n(s)("betAmount")), 1), e("span", null, t(n(R)(r.amount)), 1)])])], 2)]), e("img", {
                src: n(L)("main", "moonBar")
            }, null, 8, ia), e("div", ra, [e("div", ca, [e("div", ua, [z(t(n(s)("bettingnumber")), 1), r.bettingFormat === 1 ? (o(), l("span", da, "(" + t(n(s)("selectNo")) + ")", 1)) : x("v-if", !0), r.bettingFormat === 2 ? (o(), l("span", _a, "(" + t(n(s)("xosoTxt80")) + ")", 1)) : x("v-if", !0), r.bettingFormat === 3 ? (o(), l("span", va, "(" + t(n(s)("xosoTxt81")) + ")", 1)) : x("v-if", !0), x(" 选择号码 "), r.bettingFormat == 1 ? (o(), l("div", pa, [(o(!0), l(j, null, W(a(r.bettingContent), (m, g) => (o(), l("span", {
                class: H({
                    active: v(r.winningNum).includes(m)
                }),
                key: g
            }, t(m), 3))), 128))])) : (o(), l("div", ma, [(o(!0), l(j, null, W(r.bettingContent.split(","), (m, g) => (o(), l("span", {
                class: H({
                    active: v(r.winningNum).includes(m)
                }),
                key: g
            }, t(b(m)), 3))), 128))]))])])]), e("div", ha, [e("div", null, [e("div", fa, [e("h3", null, t(n(R)(r.realBettingAmount)), 1), e("span", null, t(n(s)("actualAmount")), 1)])]), e("div", null, [e("div", ga, [e("h3", null, t(n(R)(r.winningAmount)), 1), e("span", null, t(n(s)("lotteryAmount")), 1)])]), x(` <div>
				<div class="bet-container-lottery-note-box-para">
					<h3>{{ currency(item.serviceCharge) }}</h3>
					<span>{{ $t('serviceCharge') }}</span>
				</div>
			</div> `), e("div", ya, [e("div", ba, [e("h4", {
                class: H(r.winningAmount - r.amount > 0 && r.status !== 2 ? "h4_green" : "h4_red")
            }, t(r.status === 3 || r.status === 2 ? n(R)(r.winningAmount - r.amount) : "-"), 3), e("span", null, t(n(s)("profitNloss")), 1)])])])]))), 128))
        }
    });
const wa = G($a, [
        ["__scopeId", "data-v-811ff882"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Main/BetRecords/XoSoRecord.vue"]
    ]),
    ka = {
        class: "bet-container-lottery-card"
    },
    Ca = {
        class: "bet-container-lottery-card-header ar-1px-b"
    },
    Sa = ["src"],
    Ta = {
        class: "type"
    },
    Aa = ["src"],
    xa = {
        class: "bet"
    },
    Ba = {
        class: "li betNum"
    },
    La = {
        class: "lab"
    },
    Ia = {
        key: 0,
        class: "txt"
    },
    Na = {
        key: 1,
        class: "txt"
    },
    Ra = {
        key: 2,
        class: "betList select"
    },
    Pa = {
        key: 3,
        class: "betList select"
    },
    Da = {
        class: "num"
    },
    Oa = {
        class: "n"
    },
    Ma = {
        class: "bet-container-lottery-note-box"
    },
    Va = {
        class: "bet-container-lottery-note-box-para"
    },
    ja = {
        class: "bet-container-lottery-note-box-para"
    },
    Ea = {
        class: "last"
    },
    Ua = {
        class: "bet-container-lottery-note-box-para"
    },
    za = q({
        __name: "D4Record",
        props: {
            listData: {
                type: null,
                required: !0,
                default: {
                    type: Array,
                    default: () => []
                }
            },
            typeValue: {
                type: null,
                required: !0,
                default: {
                    type: Number,
                    default: 0
                }
            }
        },
        setup(w) {
            const {
                t: s
            } = ae(), p = {
                1: s("bettingResultState1"),
                2: s("bettingResultState3"),
                3: s("hasWon"),
                4: s("xosoTxt74"),
                5: s("xosoTxt75"),
                6: s("xosoTxt76")
            }, _ = {
                0: s("xosoTxt90"),
                1: s("xosoTxt89"),
                2: s("xosoTxt88"),
                3: s("xosoTxt87")
            }, h = a => {
                if (a == "3") return "color40C592"
            };
            return (a, d) => (o(!0), l(j, null, W(a.listData, i => (o(), l("div", {
                class: "bet-container-lottery-items",
                key: i.orderNumber
            }, [e("div", ka, [e("div", Ca, [e("h1", null, [e("h2", null, t(a.typeValue), 1), e("span", {
                class: H(h(i.state))
            }, t(p[i.state]), 3)]), e("p", null, t(i.createTime), 1)]), e("div", {
                class: H(["bet-container-lottery-card-info", `type${a.typeValue}`])
            }, [e("img", {
                src: n(L)("main", "betInfoStep"),
                class: H(`type${a.typeValue}`)
            }, null, 10, Sa), e("ul", null, [e("li", null, [e("h2", null, t(n(s)("betNumber")), 1), e("span", null, t(i.issueNumber), 1)]), e("li", null, [e("h2", null, t(n(s)("orderNo")), 1), e("span", null, t(i.orderNumber), 1)]), e("li", null, [e("h2", null, t(n(s)("ColorSpecies")), 1), e("span", null, t(n(s)(`d4LType${i.type}`)), 1)]), e("li", null, [e("h2", null, t(n(s)("gamePlay")), 1), e("span", null, t(n(s)("d4gamePay" + i.gameType)), 1)]), e("li", null, [e("h2", null, t(n(s)("xosoTxt78")), 1)]), e("div", Ta, [(o(!0), l(j, null, W(i.betType.split(","), (v, b) => (o(), l("span", {
                key: b
            }, t(n(s)("d4gameType" + v)), 1))), 128))])])], 2)]), e("img", {
                src: n(L)("main", "moonBar")
            }, null, 8, Aa), e("div", xa, [e("div", Ba, [e("div", La, [z(t(n(s)("bettingnumber")), 1), i.betMethod === 1 ? (o(), l("span", Ia, "(" + t(n(s)("EnterBet")) + ")", 1)) : x("v-if", !0), i.betMethod === 2 ? (o(), l("span", Na, "(" + t(n(s)("SelectBet")) + ")", 1)) : x("v-if", !0), x(" 选择号码 "), i.betMethod == 1 ? (o(), l("div", Ra, [e("span", null, t(i.betContent), 1)])) : (o(), l("div", Pa, [e("div", Da, [(o(!0), l(j, null, W(i.betContent.split("|"), (v, b) => (o(), l("div", {
                key: b
            }, [e("h6", null, t(_[b]), 1), e("div", Oa, [(o(!0), l(j, null, W(v.split(","), (u, c) => (o(), l("span", {
                key: c
            }, t(u), 1))), 128))])]))), 128))])]))])])]), e("div", Ma, [e("div", null, [e("div", Va, [e("h3", null, t(n(R)(i.amount)), 1), e("span", null, t(n(s)("actualAmount")), 1)])]), e("div", null, [e("div", ja, [e("h3", null, t(n(R)(i.winAmount)), 1), e("span", null, t(n(s)("lotteryAmount")), 1)])]), e("div", Ea, [e("div", Ua, [e("h4", {
                class: H(i.profitAmount > 0 ? "h4_green" : "h4_red")
            }, t(i.profitAmount ? n(R)(i.profitAmount) : "-"), 3), e("span", null, t(n(s)("profitNloss")), 1)])])])]))), 128))
        }
    });
const Ga = G(za, [
        ["__scopeId", "data-v-893cf551"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Main/BetRecords/D4Record.vue"]
    ]),
    qa = ["src"],
    Fa = {
        class: "bet-container-searchBar"
    },
    Wa = {
        class: "ar-searchbar"
    },
    Ha = {
        class: "bet-content__box"
    },
    Xa = {
        key: 0,
        class: "bet-container-items"
    },
    Ya = {
        class: "bet-container-lottery"
    },
    Za = {
        class: "bet-container-lottery-card"
    },
    Ka = {
        class: "bet-container-lottery-card-header ar-1px-b"
    },
    Qa = {
        class: "bet-container-lottery-card-info"
    },
    Ja = ["src"],
    el = {
        key: 0
    },
    tl = {
        key: 1
    },
    nl = {
        key: 2
    },
    sl = {
        key: 3
    },
    ol = {
        key: 1,
        style: {
            overflow: "inherit"
        }
    },
    al = {
        class: "binguo_select"
    },
    ll = {
        key: 4
    },
    il = ["src"],
    rl = {
        class: "bet-container-lottery-note"
    },
    cl = {
        class: "bet-container-lottery-note-result"
    },
    ul = ["src"],
    dl = {
        key: 0
    },
    _l = {
        key: 0
    },
    vl = {
        key: 1
    },
    pl = {
        key: 1
    },
    ml = {
        class: "binguo_result"
    },
    hl = {
        class: "result_item"
    },
    fl = {
        class: "binguo_sum"
    },
    gl = {
        key: 2
    },
    yl = {
        key: 0
    },
    bl = {
        key: 1
    },
    $l = {
        key: 2
    },
    wl = {
        class: "bet-container-lottery-note-box"
    },
    kl = {
        class: "bet-container-lottery-note-box-para"
    },
    Cl = {
        class: "bet-container-lottery-note-box-para"
    },
    Sl = {
        key: 0
    },
    Tl = {
        key: 1
    },
    Al = {
        class: "bet-container-lottery-note-box-para"
    },
    xl = {
        key: 0,
        class: "bet-container-lottery-note-box-para"
    },
    Bl = {
        key: 1,
        class: "bet-container-lottery-note-box-para"
    },
    Ll = {
        key: 1,
        class: "bet-container-items"
    },
    Il = {
        class: "bet-container-lottery"
    },
    Nl = {
        class: "bet-container-lottery-card electric-card"
    },
    Rl = {
        class: "bet-container-lottery-card-header ar-1px-b"
    },
    Pl = {
        class: "bet-container-lottery-card-info"
    },
    Dl = ["src"],
    Ol = {
        key: 0,
        class: "color2AAB79"
    },
    Ml = {
        key: 2,
        class: "bet-container-items"
    },
    Vl = {
        class: "bet-container-lottery"
    },
    jl = {
        class: "bet-container-lottery-card electric-card"
    },
    El = {
        class: "bet-container-lottery-card-header ar-1px-b"
    },
    Ul = {
        class: "bet-container-lottery-card-info"
    },
    zl = ["src"],
    Gl = {
        key: 0,
        class: "color2AAB79"
    },
    ql = {
        key: 3,
        class: "bet-container-items"
    },
    Fl = {
        class: "bet-container-lottery"
    },
    Wl = {
        class: "bet-container-lottery-card electric-card"
    },
    Hl = {
        class: "bet-container-lottery-card-header ar-1px-b"
    },
    Xl = {
        class: "bet-container-lottery-card-info"
    },
    Yl = ["src"],
    Zl = {
        key: 0,
        class: "color2AAB79"
    },
    Kl = {
        key: 4,
        class: "bet-container-items"
    },
    Ql = {
        class: "bet-container-lottery"
    },
    Jl = {
        class: "bet-container-lottery-card electric-card"
    },
    ei = {
        class: "bet-container-lottery-card-header ar-1px-b"
    },
    ti = {
        class: "bet-container-lottery-card-info"
    },
    ni = ["src"],
    si = {
        key: 0,
        class: "color2AAB79"
    },
    oi = {
        key: 5,
        class: "bet-container-items"
    },
    ai = {
        class: "bet-container-lottery"
    },
    li = {
        class: "bet-container-lottery-card electric-card"
    },
    ii = {
        class: "bet-container-lottery-card-header ar-1px-b"
    },
    ri = {
        class: "bet-container-lottery-card-info"
    },
    ci = ["src"],
    ui = {
        key: 0,
        class: "color2AAB79"
    },
    di = q({
        __name: "index",
        setup(w) {
            const {
                setLoading: s
            } = ct(), {
                t: p
            } = ae(), {
                filterGameType: _
            } = Un();
            let h = me([]);
            const a = me([{
                    key: "Win Go",
                    value: 1,
                    img: ""
                }, {
                    key: "Trx Win Go",
                    value: 13,
                    img: ""
                }, {
                    key: "5D",
                    value: 5,
                    img: ""
                }, {
                    key: "K3",
                    value: 9,
                    img: ""
                }, {
                    key: "XOSO",
                    value: "XOSO",
                    img: ""
                }, {
                    key: "Bingo18",
                    value: "BINGO",
                    img: ""
                }, {
                    key: "FXOSO",
                    value: "FXOSO",
                    img: ""
                }, {
                    key: "4D",
                    value: "4D",
                    img: ""
                }]),
                d = y([]),
                i = y(0),
                v = me([{
                    name: p("lottery"),
                    img: "lottery",
                    type: 0,
                    reqType: 0
                }, {
                    name: p("live"),
                    img: "video",
                    type: 1,
                    reqType: 1
                }, {
                    name: p("fishing"),
                    img: "fish",
                    type: 3,
                    reqType: 3
                }, {
                    name: p("chess"),
                    img: "chess",
                    type: 5,
                    reqType: 4
                }, {
                    name: p("miniGame"),
                    img: "flash",
                    type: 6,
                    reqType: 6
                }, {
                    name: p("electric"),
                    img: "slot",
                    type: 2,
                    reqType: 0
                }]),
                b = y(null),
                u = y(),
                c = Y(),
                r = y({
                    startDate: "",
                    endDate: "",
                    type: 0,
                    gameType: "1"
                });
            let m = y([]);
            const g = y(!0),
                S = y([]),
                A = y({
                    red: p("redColor"),
                    green: p("green"),
                    "red,violet": p("winColor3"),
                    "green,violet": p("winColor4"),
                    violet: p("purpleColor")
                });

            function P() {
                c.go(-1)
            }
            const D = C => {
                    switch (C) {
                        case "Big":
                            return p("big");
                        case "Drawn":
                            return p("binguoHe");
                        case "Small":
                            return p("small");
                        default:
                            return C
                    }
                },
                T = y(0),
                k = () => {
                    ne.value = !1, T.value = 0
                },
                O = async () => {
                    T.value = 0;
                    let C = v[i.value].type;
                    if (C === r.value.type) return !1;
                    if (r.value.type = C, s(!0), C !== 0) {
                        if (await F(v[i.value].reqType), d.value.length < 1) {
                            m.value = [], s(!1);
                            return
                        }
                        d.value.unshift({
                            key: p("all"),
                            value: -1
                        }), h = d.value, I.value = d.value[0], r.value.gameType = d.value[0].key, r.value.gameType == p("all") && (r.value.gameType = "-1")
                    } else h = a, ye(), I.value = a[0];
                    await u.value.resetRefresh(), s(!1)
                },
                I = y(a[0]),
                ne = y(!1),
                se = (C, M) => {
                    switch (T.value = M, ne.value = !1, I.value = C, I.value.value) {
                        case 1:
                            S.value = at;
                            break;
                        case 13:
                            S.value = qn;
                            break;
                        case 5:
                            S.value = Gn;
                            break;
                        case 9:
                            S.value = zn;
                            break
                    }
                    i.value == 0 || M == 0 ? r.value.gameType = I.value.value.toString() : r.value.gameType = I.value.key, u.value.resetRefresh()
                },
                {
                    value: Z
                } = _t(),
                K = y(""),
                E = y(Z),
                {
                    minDate: U,
                    maxDate: ue
                } = vt(0),
                re = y(!1),
                le = () => {
                    re.value = !1
                },
                ie = ({
                    selectedOptions: C
                }) => {
                    re.value = !1;
                    const [{
                        value: M
                    }, {
                        value: ve
                    }, {
                        value: $e
                    }] = C;
                    let xe = M + "-" + ve + "-" + $e;
                    r.value.startDate = je(xe).startOf("day").format("YYYY-MM-DD HH:mm:ss"), r.value.endDate = je(xe).endOf("day").format("YYYY-MM-DD HH:mm:ss"), K.value = Ht(M, ve, $e), u.value.resetRefresh()
                },
                J = () => {},
                F = async C => {
                    const M = await X(Xt({
                        categoryType: C
                    }));
                    M && Nt(() => {
                        d.value = M.data.map(ve => ({
                            key: ve.slotsName,
                            value: ve.slotsTypeID
                        }))
                    })
                },
                ye = async () => {
                    const C = await X(Ft());
                    if (C) {
                        const M = C.data;
                        oe(M)
                    }
                };
            ye();
            const oe = C => {
                    h = a.map(ve => {
                        const $e = C.find(xe => xe.categoryCode === ve.key);
                        return $e ? {
                            value: ve.value,
                            key: $e.categoryCode,
                            img: $e.categoryImg
                        } : null
                    }).filter(ve => ve !== null)
                },
                Ie = C => {
                    var M;
                    return S.value.length === 0 ? "" : (M = S.value.find(ve => ve.typeID === C)) == null ? void 0 : M.typeName.replace("<br />", " ")
                },
                He = C => C.match(/[0-9]+|[A-Za-z]+/g);
            return S.value = at, (C, M) => {
                const ve = N("NavBar"),
                    $e = N("ArSelect"),
                    xe = N("van-date-picker"),
                    ze = N("van-popup"),
                    Xe = N("van-sticky");
                return o(), l("div", {
                    class: "bet-container",
                    ref_key: "containerRef",
                    ref: b
                }, [$(ve, {
                    title: C.$t("betrecords"),
                    "left-arrow": "",
                    onClickLeft: P
                }, null, 8, ["title"]), $(Xe, {
                    "offset-top": 46,
                    container: b.value,
                    class: "bet-container-sticky"
                }, {
                    default: V(() => [e("div", null, [$(nt, {
                        list: v,
                        active: i.value,
                        "onUpdate:active": M[0] || (M[0] = f => i.value = f),
                        tabClassName: "tabs",
                        onOnClickTab: O,
                        activeClassName: "tab_active",
                        ref: "tabRefs",
                        tabItemClassName: "funtab_item"
                    }, {
                        default: V(({
                            item: f,
                            index: Q
                        }) => [e("div", {
                            class: H(["tab_item", {
                                tab_active: Q === i.value
                            }])
                        }, [e("img", {
                            src: n(L)("AllGames", `${Q===i.value?f.img+"Active":f.img}`)
                        }, null, 8, qa), e("span", null, t(f.name), 1)], 2)]),
                        _: 1
                    }, 8, ["list", "active"]), e("div", Fa, [e("div", Wa, [$($e, {
                        onClickSelect: M[1] || (M[1] = f => ne.value = !0),
                        selectName: I.value.key
                    }, null, 8, ["selectName"]), $($e, {
                        onClickSelect: M[2] || (M[2] = f => re.value = !0),
                        selectName: K.value || C.$t("datePick")
                    }, null, 8, ["selectName"])])]), e("div", null, [x(` <van-popup v-model:show="showPicker" round position="bottom">
						<div class="list">
							<div class="item" v-for="(item,index) in lotteryList"><img width="25" :src="item.img">{{item.key}}</div>
						</div>
						<van-picker
							:columns-field-names="{ text: 'key', value: 'value', children: 'children' }"
							:columns="pickerData"
							@cancel="showPicker = false"
							@confirm="onConfirm"
						/>
					</van-popup> `), x(" 日期选择 "), $(ze, {
                        show: re.value,
                        "onUpdate:show": M[4] || (M[4] = f => re.value = f),
                        round: "",
                        position: "bottom"
                    }, {
                        default: V(() => [$(xe, {
                            modelValue: E.value,
                            "onUpdate:modelValue": M[3] || (M[3] = f => E.value = f),
                            title: C.$t("pickDate"),
                            onCancel: le,
                            onConfirm: ie,
                            onChange: J,
                            "min-date": n(U),
                            "max-date": n(ue)
                        }, null, 8, ["modelValue", "title", "min-date", "max-date"])]),
                        _: 1
                    }, 8, ["show"])])])]),
                    _: 1
                }, 8, ["container"]), e("div", Ha, [$(Fe, {
                    list: n(m),
                    "onUpdate:list": M[5] || (M[5] = f => Me(m) ? m.value = f : m = f),
                    distance: 1e3,
                    "page-query": r.value,
                    "onUpdate:pageQuery": M[6] || (M[6] = f => r.value = f),
                    api: n(Wt),
                    ref_key: "listRef",
                    ref: u,
                    "is-auto-load": g.value
                }, {
                    content: V(() => [x(" 彩票 "), v[i.value].type === 0 ? (o(), l("div", Xa, [e("div", Ya, [
                        ["XOSO", "FXOSO"].includes(I.value.value.toString()) ? (o(), fe(wa, {
                            key: 0,
                            listData: n(m),
                            typeValue: I.value.value
                        }, null, 8, ["listData", "typeValue"])) : ["4D"].includes(I.value.value.toString()) ? (o(), fe(Ga, {
                            key: 1,
                            listData: n(m),
                            typeValue: I.value.value
                        }, null, 8, ["listData", "typeValue"])) : (o(!0), l(j, {
                            key: 2
                        }, W(n(m), f => {
                            var Q;
                            return o(), l("div", {
                                class: "bet-container-lottery-items",
                                key: f.orderNumber
                            }, [e("div", Za, [e("div", Ka, [e("h1", null, [e("h2", null, t(n(Te)(a, I.value.value)), 1), e("span", {
                                class: H([f.state == 1 ? "color40C592" : "colorE98613"])
                            }, t(n(Te)(n(de).bettingResult, f.state)), 3)]), e("p", null, t(f.addTime), 1)]), e("div", Qa, [e("img", {
                                src: n(L)("main", "betInfoStep")
                            }, null, 8, Ja), e("ul", null, [r.value.gameType === "BINGO" ? (o(), l("li", el, [e("h2", null, t(C.$t("gamePlay")), 1), e("span", null, t(n(_)(Number(f.gameType), f.selectType).playerName), 1)])) : (o(), l("li", tl, [e("h2", null, t(C.$t("type")), 1), e("span", null, t(Ie(f.typeID) || ""), 1)])), e("li", null, [e("h2", null, t(C.$t("betNumber")), 1), e("span", null, t(f.issueNumber), 1)]), e("li", null, [e("h2", null, t(C.$t("orderNo")), 1), e("span", null, t(f.orderNumber), 1)]), I.value.value == 1 || I.value.value == 13 || I.value.value == "XOSO" ? (o(), l("li", nl, [e("h2", null, t(C.$t("betPick")), 1), x(` <h3 v-if="item.info.bet === '绿'" class="BG-49CE9B">{{ $t('green') }}</h3> `), e("p", null, t(n(Te)(n(de).gameSelectType, f.selectType)), 1)])) : r.value.gameType === "BINGO" ? (o(), l("li", sl, [e("h2", null, t(C.$t("betPick")), 1), f.gameType === "1" ? (o(), l("div", {
                                key: 0,
                                class: H(n(_)(Number(f.gameType), f.selectType).className + "_binguo")
                            }, t(D(f.selectType)), 3)) : (o(), l("div", ol, [(o(!0), l(j, null, W(f.gameType === "3" ? 2 : f.selectType.split(""), be => (o(), l("div", al, t(f.gameType === "3" ? f.selectType : be), 1))), 256))]))])) : (o(), l("li", ll, [e("h2", null, t(C.$t("betPick")), 1), e("div", null, [(o(!0), l(j, null, W(He(f.selectType), (be, Ne) => (o(), l("div", {
                                key: Ne
                            }, t(n(Te)(n(de).gameSelectType, be)), 1))), 128))])])), e("li", null, [e("h2", null, t(C.$t("betAmount")), 1), e("span", null, t(n(R)(f.amount)), 1)])])])]), e("img", {
                                src: n(L)("main", "moonBar")
                            }, null, 8, il), e("div", rl, [e("div", cl, [e("img", {
                                src: n(L)("main", "betResultStep")
                            }, null, 8, ul), I.value.value === 1 || I.value.value == 13 ? (o(), l("div", dl, [e("h1", null, t(C.$t("betResult")), 1), f.state !== 2 ? (o(), l("h2", _l, [e("p", null, t(f.number), 1), e("span", {
                                class: H(Number(f.number) > 4 ? "bigClass" : "small")
                            }, t(Number(f.number) > 4 ? C.$t("big") : C.$t("small")), 3), e("span", {
                                class: H((Q = f.colour) == null ? void 0 : Q.split(",").join("_"))
                            }, t(A.value[f.colour]), 3)])) : (o(), l("h2", vl, "- -"))])) : I.value.value === "BINGO" ? (o(), l("div", pl, [e("h1", null, t(C.$t("betResult")), 1), e("div", ml, [(o(!0), l(j, null, W(f.premium ? f.premium.split("") : [], be => (o(), l("div", hl, t(be), 1))), 256)), e("div", fl, t(f.sumCount), 1)])])) : (o(), l("div", gl, [e("h1", null, t(C.$t("betResult")), 1), f.state !== 2 && I.value.value == 5 ? (o(), l("h2", yl, [(o(!0), l(j, null, W(f.premium, (be, Ne) => (o(), l("p", {
                                key: Ne
                            }, t(be), 1))), 128))])) : f.state !== 2 && I.value.value == 9 ? (o(), l("h2", bl, [(o(!0), l(j, null, W(f.premium, (be, Ne) => (o(), l("p", {
                                key: Ne,
                                class: H("n" + be)
                            }, null, 2))), 128))])) : (o(), l("h2", $l, "- -"))]))]), e("div", wl, [e("div", null, [e("div", kl, [e("h3", null, t(n(R)(f.realAmount)), 1), e("span", null, t(C.$t("actualAmount")), 1)])]), e("div", null, [e("div", Cl, [I.value.value === "BINGO" ? (o(), l("h3", Sl, t(n(R)(f.profitAmount <= 0 ? 0 : f.profitAmount)), 1)) : (o(), l("h3", Tl, t(n(R)(f.winAmount)), 1)), e("span", null, t(C.$t("lotteryAmount")), 1)])]), e("div", null, [e("div", Al, [e("h3", null, t(n(R)(f.serviceCharge)), 1), e("span", null, t(C.$t("serviceCharge")), 1)])]), e("div", null, [I.value.value === "BINGO" ? (o(), l("div", xl, [e("h4", {
                                class: H(f.profitAmount > 0 && f.state !== 2 ? "h4_green" : "h4_red")
                            }, t(f.state !== 2 ? n(R)(f.profitAmount) : "-"), 3), e("span", null, t(C.$t("profitNloss")), 1)])) : (o(), l("div", Bl, [e("h4", {
                                class: H(f.winAmount - f.amount > 0 && f.state !== 2 ? "h4_green" : "h4_red")
                            }, t(f.state !== 2 ? n(R)(f.winAmount - f.amount) : "-"), 3), e("span", null, t(C.$t("profitNloss")), 1)]))])])])])
                        }), 128))
                    ])])) : x("v-if", !0), x(" 捕鱼 "), v[i.value].type === 3 ? (o(), l("div", Ll, [e("div", Il, [(o(!0), l(j, null, W(n(m), f => (o(), l("div", {
                        class: "bet-container-lottery-items",
                        key: f.orderNo
                    }, [e("div", Nl, [e("div", Rl, [e("h1", null, [e("h2", null, t(f.venderCode), 1), e("span", null, t(C.$t(n(Te)(n(de).bettingOrderStatus, f.orderStatus))), 1)]), e("p", null, t(f.betTime), 1)]), e("div", Pl, [e("img", {
                        src: n(L)("main", "betInfoStep")
                    }, null, 8, Dl), e("ul", null, [e("li", null, [e("h2", null, t(C.$t("type")), 1), e("span", null, t(f.gameName), 1)]), e("li", null, [e("h2", null, t(C.$t("orderNo")), 1), e("span", null, t(f.orderNo), 1)]), e("li", null, [e("h2", null, t(C.$t("betAmount")), 1), e("span", null, t(n(R)(f.betAmount)), 1)]), e("li", null, [e("h2", null, t(C.$t("lotteryAmount")), 1), e("span", null, t(n(R)(f.winAmount)), 1)]), e("li", null, [e("h2", null, t(C.$t("profitNloss")), 1), e("span", {
                        class: H([f.winLossAmount <= 0 ? "colorF95959" : "color2AAB79"])
                    }, [f.winLossAmount > 0 ? (o(), l("span", Ol, "+")) : x("v-if", !0), z(t(n(R)(f.winLossAmount)), 1)], 2)])])])])]))), 128))])])) : x("v-if", !0), x(" 小游戏 "), v[i.value].type === 6 ? (o(), l("div", Ml, [e("div", Vl, [(o(!0), l(j, null, W(n(m), f => (o(), l("div", {
                        class: "bet-container-lottery-items",
                        key: f.orderNo
                    }, [e("div", jl, [e("div", El, [e("h1", null, [e("h2", null, t(f.venderCode), 1), e("span", null, t(n(Te)(n(de).bettingOrderStatus, f.orderStatus)), 1)]), e("p", null, t(f.betTime), 1)]), e("div", Ul, [e("img", {
                        src: n(L)("main", "betInfoStep")
                    }, null, 8, zl), e("ul", null, [e("li", null, [e("h2", null, t(C.$t("type")), 1), e("span", null, t(f.gameName), 1)]), e("li", null, [e("h2", null, t(C.$t("orderNo")), 1), e("span", null, t(f.orderNo), 1)]), e("li", null, [e("h2", null, t(C.$t("betAmount")), 1), e("span", null, t(n(R)(f.betAmount)), 1)]), e("li", null, [e("h2", null, t(C.$t("lotteryAmount")), 1), e("span", null, t(n(R)(f.winAmount)), 1)]), e("li", null, [e("h2", null, t(C.$t("profitNloss")), 1), e("span", {
                        class: H([f.winLossAmount <= 0 ? "colorF95959" : "color2AAB79"])
                    }, [f.winLossAmount > 0 ? (o(), l("span", Gl, "+")) : x("v-if", !0), z(t(n(R)(f.winLossAmount)), 1)], 2)])])])])]))), 128))])])) : x("v-if", !0), x(" 视讯 "), v[i.value].type === 1 ? (o(), l("div", ql, [e("div", Fl, [(o(!0), l(j, null, W(n(m), f => (o(), l("div", {
                        class: "bet-container-lottery-items",
                        key: f.orderNo
                    }, [e("div", Wl, [e("div", Hl, [e("h1", null, [e("h2", null, t(f.venderCode), 1), e("span", null, t(n(Te)(n(de).bettingOrderStatus, f.orderStatus)), 1)]), e("p", null, t(f.betTime), 1)]), e("div", Xl, [e("img", {
                        src: n(L)("main", "betInfoStep")
                    }, null, 8, Yl), e("ul", null, [e("li", null, [e("h2", null, t(C.$t("type")), 1), e("span", null, t(f.gameName), 1)]), e("li", null, [e("h2", null, t(C.$t("orderNo")), 1), e("span", null, t(f.orderNo), 1)]), e("li", null, [e("h2", null, t(C.$t("betAmounts")), 1), e("span", null, t(n(R)(f.betAmount)), 1)]), e("li", null, [e("h2", null, t(C.$t("lotteryAmount")), 1), e("span", null, t(n(R)(f.winAmount)), 1)]), e("li", null, [e("h2", null, t(C.$t("profitNloss")), 1), e("span", {
                        class: H([f.winLossAmount <= 0 ? "colorF95959" : "color2AAB79"])
                    }, [f.winLossAmount > 0 ? (o(), l("span", Zl, "+")) : x("v-if", !0), z(t(n(R)(f.winLossAmount)), 1)], 2)])])])])]))), 128))])])) : x("v-if", !0), x(" 棋牌 "), v[i.value].type === 5 ? (o(), l("div", Kl, [e("div", Ql, [(o(!0), l(j, null, W(n(m), f => (o(), l("div", {
                        class: "bet-container-lottery-items",
                        key: f.orderNo
                    }, [e("div", Jl, [e("div", ei, [e("h1", null, [e("h2", null, t(f.venderCode), 1), e("span", null, t(C.$t(n(Te)(n(de).bettingOrderStatus, f.orderStatus))), 1)]), e("p", null, t(f.betTime), 1)]), e("div", ti, [e("img", {
                        class: "bet-container-lottery-card-info-chessimg",
                        src: n(L)("main", "chessStepIcon")
                    }, null, 8, ni), e("ul", null, [e("li", null, [e("h2", null, t(C.$t("type")), 1), e("span", null, t(f.gameName), 1)]), e("li", null, [e("h2", null, t(C.$t("orderNo")), 1), e("span", null, t(f.orderNo), 1)]), e("li", null, [e("h2", null, t(C.$t("betAmount")), 1), e("span", null, t(n(R)(f.betAmount)), 1)]), e("li", null, [e("h2", null, t(C.$t("serviceCharge")), 1), e("span", null, t(n(R)(f.serviceFeeAmount)), 1)]), e("li", null, [e("h2", null, t(C.$t("actualAmount")), 1), e("span", null, t(n(R)(f.validBetAmount)), 1)]), e("li", null, [e("h2", null, t(C.$t("lotteryAmount")), 1), e("span", null, t(n(R)(f.winAmount)), 1)]), e("li", null, [e("h2", null, t(C.$t("profitNloss")), 1), e("span", {
                        class: H([f.winLossAmount <= 0 ? "colorF95959" : "color2AAB79"])
                    }, [f.winLossAmount > 0 ? (o(), l("span", si, "+")) : x("v-if", !0), z(t(n(R)(f.winLossAmount)), 1)], 2)])])])])]))), 128))])])) : x("v-if", !0), x(" 电子 "), v[i.value].type === 2 ? (o(), l("div", oi, [e("div", ai, [(o(!0), l(j, null, W(n(m), f => (o(), l("div", {
                        class: "bet-container-lottery-items",
                        key: f.orderNo
                    }, [e("div", li, [e("div", ii, [e("h1", null, [e("h2", null, t(f.venderCode), 1), e("span", null, t(C.$t(n(Te)(n(de).bettingOrderStatus, f.orderStatus))), 1)]), e("p", null, t(f.betTime), 1)]), e("div", ri, [e("img", {
                        class: "bet-container-lottery-card-info-chessimg",
                        src: n(L)("main", "chessStepIcon")
                    }, null, 8, ci), e("ul", null, [e("li", null, [e("h2", null, t(C.$t("type")), 1), e("span", null, t(f.gameName), 1)]), e("li", null, [e("h2", null, t(C.$t("orderNo")), 1), e("span", null, t(f.orderNo), 1)]), e("li", null, [e("h2", null, t(C.$t("betAmount")), 1), e("span", null, t(n(R)(f.betAmount)), 1)]), e("li", null, [e("h2", null, t(C.$t("serviceCharge")), 1), e("span", null, t(n(R)(f.serviceFeeAmount)), 1)]), e("li", null, [e("h2", null, t(C.$t("actualAmount")), 1), e("span", null, t(n(R)(f.validBetAmount)), 1)]), e("li", null, [e("h2", null, t(C.$t("lotteryAmount")), 1), e("span", null, t(n(R)(f.winAmount)), 1)]), e("li", null, [e("h2", null, t(C.$t("profitNloss")), 1), e("span", {
                        class: H([f.winLossAmount <= 0 ? "colorF95959" : "color2AAB79"])
                    }, [f.winLossAmount > 0 ? (o(), l("span", ui, "+")) : x("v-if", !0), z(t(n(R)(f.winLossAmount)), 1)], 2)])])])])]))), 128))])])) : x("v-if", !0)]),
                    _: 1
                }, 8, ["list", "page-query", "api", "is-auto-load"])]), $(ea, {
                    "show-popup": ne.value,
                    tabId: i.value,
                    selectId: T.value,
                    list: n(h),
                    onOnOverlay: k,
                    onOnClick: se,
                    onOnBack: k
                }, null, 8, ["show-popup", "tabId", "selectId", "list"])], 512)
            }
        }
    });
const _i = G(di, [
        ["__scopeId", "data-v-1d8fbc24"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/BetRecords/index.vue"]
    ]),
    o2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: _i
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    vi = {
        class: "content"
    },
    pi = ["onClick"],
    mi = {
        class: "content-item-title"
    },
    hi = ["src"],
    fi = q({
        __name: "ServiceLIst",
        props: {
            list: {
                type: null,
                required: !0,
                default: {
                    type: Array,
                    default: () => []
                }
            }
        },
        emits: ["onClick"],
        setup(w, {
            emit: s
        }) {
            return (p, _) => {
                const h = N("van-icon");
                return o(), l("div", vi, [e("div", null, [(o(!0), l(j, null, W(p.list, (a, d) => (o(), l("div", {
                    class: "content-item",
                    key: d,
                    onClick: () => {
                        s("onClick", a)
                    }
                }, [e("div", mi, [e("img", {
                    src: n(pe)("main", `CStype${a.typeID}`),
                    alt: ""
                }, null, 8, hi), e("span", null, t(a.typeName || a.name), 1)]), $(h, {
                    name: "arrow",
                    size: "18px",
                    color: "#A8A8A8"
                })], 8, pi))), 128))])])
            }
        }
    });
const gi = G(fi, [
    ["__scopeId", "data-v-f4c030dd"],
    ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/common/ServiceLIst.vue"]
]);

function Bt(w) {
    const s = Y(),
        {
            ServerType: p
        } = w,
        _ = me({
            ContactList: [],
            CollectionList: []
        }),
        h = y(),
        a = ge(() => _.ContactList),
        d = ge(() => _.CollectionList);

    function i() {
        s.go(-1)
    }

    function v(m) {
        s.push({
            name: p == 1 ? "Server-ServiceCollection" : "CustomerService-ServiceCollection",
            state: {
                itemId: m.typeID
            }
        })
    }

    function b(m) {
        if (m.url) {
            if (Yt()) {
                Zt("recharge", {
                    url: m.url,
                    returnType: "1",
                    gameName: ""
                });
                return
            }
            pt(m.url)
        }
    }
    const u = async () => {
            const m = await X(p == 1 ? Kt() : Qt());
            m && (_.ContactList = m.data || [])
        },
        c = async m => {
            const g = await X(p == 1 ? Jt(m) : en(m));
            g && (_.CollectionList = g.data || [])
        };
    async function r() {
        const m = await X(tn());
        m && (h.value = m.data || {})
    }
    return {
        List: gi,
        getIcons: L,
        goBack: i,
        onItemClick: v,
        onClickUrl: b,
        getList: u,
        ContactList: a,
        getServiceList: c,
        CollectionList: d,
        serviceGroup: h,
        getCustomerServiceGroup: r
    }
}
const yi = w => (we("data-v-26935615"), w = w(), ke(), w),
    bi = {
        class: "customer-container"
    },
    $i = {
        class: "customer-container-header"
    },
    wi = {
        class: "customer-container-header-belly"
    },
    ki = {
        alt: ""
    },
    Ci = {
        key: 0,
        class: "cg"
    },
    Si = {
        class: "cg2"
    },
    Ti = {
        class: "til1"
    },
    Ai = {
        class: "left"
    },
    xi = yi(() => e("div", {
        class: "err"
    }, null, -1)),
    Bi = {
        class: "til2"
    },
    Li = q({
        __name: "index",
        setup(w) {
            const {
                onItemClick: s,
                goBack: p,
                getIcons: _,
                getList: h,
                ContactList: a,
                List: d,
                serviceGroup: i,
                getCustomerServiceGroup: v,
                onClickUrl: b
            } = Bt({
                ServerType: 2
            }), u = We();
            return ce(() => {
                h(), v()
            }), (c, r) => {
                var A, P, D, T;
                const m = N("NavBar"),
                    g = N("van-image"),
                    S = te("lazy");
                return o(), l("div", bi, [e("div", $i, [$(m, {
                    title: `${c.$t("customerServiceTitle")}`,
                    class: "main",
                    "left-arrow": "",
                    onClickLeft: n(p)
                }, null, 8, ["title", "onClickLeft"]), e("div", wi, [B(e("img", ki, null, 512), [
                    [S, n(_)("main", "customerBg")]
                ])])]), ((A = n(i)) == null ? void 0 : A.status) == 1 ? (o(), l("div", Ci, [e("div", Si, [e("div", Ti, [e("div", Ai, [$(g, {
                    round: "",
                    width: "30",
                    height: "30",
                    src: n(u).ossUrl + "/" + ((P = n(i)) == null ? void 0 : P.imageUrl),
                    fit: "cover",
                    position: "center"
                }, {
                    error: V(() => [xi]),
                    _: 1
                }, 8, ["src"]), e("p", null, t((D = n(i)) == null ? void 0 : D.mainTitle), 1)]), e("div", {
                    class: "btn",
                    onClick: r[0] || (r[0] = k => {
                        var O;
                        return n(b)({
                            url: (O = n(i)) == null ? void 0 : O.url
                        })
                    })
                }, t(c.$t("join")), 1)]), e("div", Bi, t((T = n(i)) == null ? void 0 : T.subTitle), 1)])])) : x("v-if", !0), $(n(d), {
                    list: n(a),
                    onOnClick: n(s)
                }, null, 8, ["list", "onOnClick"])])
            }
        }
    });
const Ii = G(Li, [
        ["__scopeId", "data-v-26935615"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/CustomerService/index.vue"]
    ]),
    a2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ii
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ni = {
        class: "feedback-container"
    },
    Ri = {
        class: "feedback-container-content"
    },
    Pi = {
        class: "feedback-container-content-text"
    },
    Di = {
        class: "feedback-container-content-text-wrapper"
    },
    Oi = ["placeholder"],
    Mi = {
        class: "feedback-container-content-describe"
    },
    Vi = ["src"],
    ji = {
        class: "feedback-container-footer"
    },
    Ei = q({
        __name: "index",
        setup(w) {
            const {
                t: s
            } = ae(), p = Y(), _ = s("feedbackPhTXT"), h = me({
                content: ""
            });
            async function a() {
                if (!h.content) {
                    _e({
                        message: s("feedbackMsg"),
                        wordBreak: "break-word"
                    });
                    return
                }
                await X(nn(h)) && (Ae(s("submitSuccess")), p.go(-1))
            }
            return (d, i) => {
                const v = N("NavBar");
                return o(), l("div", Ni, [$(v, {
                    title: d.$t("feedback"),
                    "left-arrow": "",
                    onClickLeft: i[0] || (i[0] = b => n(p).go(-1))
                }, null, 8, ["title"]), e("div", Ri, [e("div", Pi, [e("div", Di, [B(e("textarea", {
                    "onUpdate:modelValue": i[1] || (i[1] = b => h.content = b),
                    name: "feedback",
                    id: "",
                    cols: "30",
                    rows: "10",
                    placeholder: n(_)
                }, null, 8, Oi), [
                    [Ee, h.content]
                ])])]), e("div", Mi, [e("h5", null, t(d.$t("tipAcessableFeedback")), 1), e("h5", null, t(d.$t("tipWinMysteryRewards")), 1), e("div", null, [e("img", {
                    src: n(L)("main", "feedbackImg"),
                    alt: ""
                }, null, 8, Vi)])])]), e("div", ji, [e("button", {
                    onClick: a
                }, t(d.$t("submit")), 1)])])
            }
        }
    });
const Ui = G(Ei, [
        ["__scopeId", "data-v-00fab4aa"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/Feedback/index.vue"]
    ]),
    l2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ui
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    he = mt.global.t;
he("lottery"), he("electronic"), he("sport"), he("live"), he("chess"), he("fishing"), he("miniGame");
const zi = [{
        name: he("chess"),
        type: 5,
        icon: "iconChess",
        typeName: "chesscard"
    }, {
        name: he("fishing"),
        type: 3,
        icon: "iconFishing",
        typeName: "fish"
    }, {
        name: he("electronic"),
        type: 2,
        icon: "iconElectric",
        typeName: "electronic"
    }, {
        name: he("lottery"),
        type: 0,
        icon: "iconLottery",
        typeName: "lottery"
    }, {
        name: he("sport"),
        type: 4,
        icon: "iconPhysics",
        typeName: "sport"
    }, {
        name: he("live"),
        type: 5,
        icon: "iconRealPerson",
        typeName: "video"
    }, {
        name: he("miniGame"),
        type: 6,
        icon: "iconMiniGame",
        typeName: "smallgame"
    }, {
        name: he("electronic"),
        type: 2,
        icon: "iconSlots",
        typeName: "slot"
    }],
    Gi = {
        class: "gamestats-container"
    },
    qi = {
        class: "gamestats-container-header"
    },
    Fi = {
        class: "gamestats-container-banner"
    },
    Wi = {
        class: "gamestats-container-list-wrapper"
    },
    Hi = {
        key: 1,
        class: "gamestats-container-items"
    },
    Xi = {
        alt: ""
    },
    Yi = {
        class: "gamestats-container-item-content"
    },
    Zi = {
        alt: ""
    },
    Ki = {
        class: "gamestats-container-item-content-list"
    },
    Qi = q({
        __name: "index",
        setup(w) {
            const {
                t: s
            } = ae(), p = Y(), _ = y(0), h = [{
                title: s("today"),
                records: "hello"
            }, {
                title: s("yesterday"),
                records: "hello"
            }, {
                title: s("thisWeek"),
                records: "hello"
            }, {
                title: s("thisMonth"),
                records: "hello"
            }], a = c => {
                let r = {
                    start: 0,
                    end: 0
                };
                switch (c) {
                    case 0:
                        r = Ge().today;
                        break;
                    case 1:
                        r = Ge().yesterday;
                        break;
                    case 2:
                        r = Ge().last7days;
                        break;
                    case 3:
                        r = Ge().thisMonth;
                        break
                }
                return {
                    startDate: je(r.start * 1e3).format("YYYY-MM-DD HH:mm:ss"),
                    endDate: je(r.end * 1e3).format("YYYY-MM-DD HH:mm:ss")
                }
            }, d = me({
                startDate: a(0).startDate,
                endDate: a(0).endDate
            }), i = c => {
                const r = zi.find(m => c.gameTypeName.toLowerCase() === m.typeName);
                return r == null ? void 0 : r.icon
            }, v = me({
                list: [],
                sumBetAmount: 0
            }), b = async () => {
                const [c, r] = await ht(sn(d));
                c && _e({
                    message: c.msg,
                    wordBreak: "break-word"
                }), r && (v.list = r.gameStatis, v.sumBetAmount = r.sumBetAmount)
            };
            ce(() => {
                b()
            });
            const u = c => {
                d.startDate = a(c).startDate, d.endDate = a(c).endDate, b()
            };
            return (c, r) => {
                const m = N("NavBar"),
                    g = N("van-tab"),
                    S = N("van-tabs"),
                    A = te("lazy");
                return o(), l("div", Gi, [$(m, {
                    title: c.$t("gameStats"),
                    "left-arrow": "",
                    onClickLeft: r[0] || (r[0] = P => n(p).go(-1))
                }, null, 8, ["title"]), e("div", qi, [$(S, {
                    active: _.value,
                    "onUpdate:active": r[1] || (r[1] = P => _.value = P),
                    type: "card",
                    onChange: u
                }, {
                    default: V(() => [(o(), l(j, null, W(h, P => $(g, {
                        title: P.title
                    }, null, 8, ["title"])), 64))]),
                    _: 1
                }, 8, ["active"])]), e("div", Fi, [e("h1", null, t(n(R)(v.sumBetAmount || 0)), 1), e("span", null, t(c.$t("totalBetAmount")), 1)]), e("div", Wi, [v.list.length === 0 ? (o(), fe(Je, {
                    key: 0,
                    style: {
                        "margin-top": "40px"
                    }
                })) : (o(), l("div", Hi, [(o(!0), l(j, null, W(v.list, (P, D) => (o(), l("div", {
                    class: "gamestats-container-item",
                    key: D
                }, [e("h1", null, [B(e("img", Xi, null, 512), [
                    [A, n(L)("main", i(P))]
                ]), e("span", null, t(P.gameTypeName), 1)]), e("div", Yi, [B(e("img", Zi, null, 512), [
                    [A, n(L)("main", "gameStatsSteps")]
                ]), e("div", Ki, [e("div", null, [e("h4", null, t(c.$t("betAmount")), 1), e("h5", null, t(n(R)(P.betAmount)), 1)]), e("div", null, [e("h4", null, t(c.$t("betTimes")), 1), e("h5", null, t(P.betCount), 1)]), e("div", null, [e("h4", null, t(c.$t("winningAmount")), 1), e("span", null, t(n(R)(P.betWinLossAmount)), 1)])])])]))), 128))]))])])
            }
        }
    });
const Ji = G(Qi, [
        ["__scopeId", "data-v-0fabbe57"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/GameStats/index.vue"]
    ]),
    i2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ji
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    er = {
        class: "gverify-container"
    },
    tr = {
        class: "gverify-container-header"
    },
    nr = {
        class: "gverify-container-header-belly"
    },
    sr = {
        alt: ""
    },
    or = {
        class: "gverify-container-content"
    },
    ar = {
        class: "gverify-container-content-item"
    },
    lr = {
        class: "gverify-container-content-item-title"
    },
    ir = {
        alt: ""
    },
    rr = {
        class: "gverify-container-content-item-tip"
    },
    cr = {
        class: "gverify-container-content-item-tip"
    },
    ur = {
        class: "gravity-container-modal"
    },
    dr = {
        class: "popup-content"
    },
    _r = {
        key: 0,
        class: "box"
    },
    vr = {
        class: "info"
    },
    pr = {
        class: "txt"
    },
    mr = {
        class: "txt"
    },
    hr = {
        key: 1,
        class: "box"
    },
    fr = {
        class: "info"
    },
    gr = {
        class: "txt"
    },
    yr = {
        class: "txt"
    },
    br = {
        key: 2,
        class: "box"
    },
    $r = {
        class: "label"
    },
    wr = {
        class: "img",
        alt: ""
    },
    kr = ["placeholder"],
    Cr = {
        class: "lab"
    },
    Sr = {
        class: "other"
    },
    Tr = q({
        __name: "index",
        setup(w) {
            const {
                t: s
            } = ae(), p = Y(), _ = Re(), a = Se().getUserInfo;
            let d = y(s("pwdVerify")),
                i = y(0),
                v = y(!1);
            const b = y(""),
                u = y(!1),
                c = y([]),
                r = {
                    text: "name",
                    value: "code"
                },
                {
                    isGoogleVerifySms: m,
                    isGoogleVerifyEmail: g,
                    registerState: S
                } = et();
            S();
            const A = async E => {
                var ue, re;
                const U = await X(ft({
                    verifyCode: b.value.toString(),
                    verifyType: E
                }));
                (ue = U == null ? void 0 : U.data) != null && ue.secret && p.push({
                    name: "GoogleVerify-BindGoogle",
                    query: {
                        secret: (re = U.data) == null ? void 0 : re.secret,
                        type: 0
                    }
                })
            };
            ce(() => {});
            const P = y(!1),
                D = () => {
                    b.value = "", _.setCountDown(0), a.regType === 1 ? m.value ? (i.value = 1, v.value = !0) : a.verifyMethods.email !== "" && g.value ? (i.value = 2, v.value = !0) : i.value = 0 : g.value ? (i.value = 2, v.value = !0) : a.verifyMethods.mobile !== "" && m.value ? (i.value = 1, v.value = !0) : i.value = 0, d.value = T(i.value), P.value = !0
                },
                T = E => {
                    let U = "";
                    switch (E) {
                        case 0:
                            U = s("pwdVerify");
                            break;
                        case 1:
                            U = s("SMSVerify");
                            break;
                        case 2:
                            U = s("emailverification");
                            break;
                        default:
                            U = s("pwdVerify");
                            break
                    }
                    return U
                },
                k = () => {
                    if (i.value === 1 || i.value === 2) {
                        if (!b.value) return _e(s("noVerifyCodeFound"))
                    } else if (!b.value) return _e(s("pwdNull"));
                    let E = O(i.value);
                    A(E)
                },
                O = E => {
                    let U = 1;
                    switch (E) {
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
                            break
                    }
                    return U
                },
                I = () => {
                    u.value = !0, g.value && a.verifyMethods.email !== "" && m.value && a.verifyMethods.mobile !== "" ? c.value = [{
                        name: s("SMSVerify"),
                        code: 1
                    }, {
                        name: s("emailverification"),
                        code: 2
                    }] : g.value && a.verifyMethods.email !== "" ? c.value = [{
                        name: s("emailverification"),
                        code: 2
                    }] : m.value && a.verifyMethods.mobile !== "" && (c.value = [{
                        name: s("SMSVerify"),
                        code: 1
                    }])
                },
                ne = ({
                    selectedOptions: E
                }) => {
                    d.value = T(E[0].code), i.value = E[0].code, u.value = !1
                },
                se = async () => {
                    if (i.value === 1)
                        if (await X(bt({
                                phone: a.verifyMethods.mobile,
                                codeType: Be.openGoogle
                            }))) Ae(s("sendSuccess"));
                        else return -1;
                    else if (await X($t({
                            email: a.verifyMethods.email,
                            emailType: Be.openGoogle
                        }))) Ae(s("sendSuccess"));
                    else return -1
                };

            function Z() {
                p.push({
                    name: "CustomerService"
                })
            }

            function K() {
                p.push({
                    name: "rpwd"
                })
            }
            return (E, U) => {
                const ue = N("NavBar"),
                    re = N("van-icon"),
                    le = N("van-picker"),
                    ie = N("van-popup"),
                    J = te("lazy");
                return o(), l(j, null, [e("div", er, [e("div", tr, [$(ue, {
                    title: n(s)("googleAuthenticator"),
                    class: "main",
                    "left-arrow": "",
                    onClickLeft: U[0] || (U[0] = F => n(p).go(-1))
                }, null, 8, ["title"]), e("div", nr, [B(e("img", sr, null, 512), [
                    [J, n(L)("main", "googleVerifyBg")]
                ])])]), e("div", or, [e("div", ar, [e("div", lr, [B(e("img", ir, null, 512), [
                    [J, n(L)("wallet", "hint")]
                ]), e("span", null, t(n(s)("googleIllustrate")), 1)]), e("div", rr, t(n(s)("googleTip1")), 1), e("div", cr, t(n(s)("googleTip2")), 1)])]), e("div", {
                    class: "gverify-container-button",
                    onClick: D
                }, t(n(s)("turnGoogle")), 1)]), x(" 修改 短信&&密码验证弹窗修改 "), e("div", ur, [$(At, {
                    show: P.value,
                    "onUpdate:show": U[6] || (U[6] = F => P.value = F),
                    onConfirm: k,
                    onCancel: I,
                    showCancelBtn: n(v),
                    cancelText: n(s)("otherverificationmethods"),
                    title: n(d)
                }, {
                    content: V(() => {
                        var F, ye;
                        return [e("div", dr, [n(i) === 1 ? (o(), l("div", _r, [e("div", vr, [e("p", pr, t(n(s)("googleTip3")), 1), e("p", mr, t(n(s)("googleTip4", [n(gt)()])), 1)]), $(Qe, {
                            value: b.value,
                            "onUpdate:value": U[1] || (U[1] = oe => b.value = oe),
                            isShowVerifyT: !1,
                            sendFunc: se,
                            typeP: "updatePhone"
                        }, null, 8, ["value"])])) : n(i) === 2 ? (o(), l("div", hr, [e("div", fr, [e("p", gr, t(n(s)("googleTip3")), 1), e("p", yr, t(n(s)("googleTip7", [n(yt)((ye = (F = n(a)) == null ? void 0 : F.verifyMethods) == null ? void 0 : ye.email)])), 1)]), $(Qe, {
                            value: b.value,
                            "onUpdate:value": U[2] || (U[2] = oe => b.value = oe),
                            isShowVerifyT: !1,
                            sendFunc: se,
                            typeP: "updatePhone"
                        }, null, 8, ["value"])])) : (o(), l("div", br, [e("label", $r, [B(e("img", wr, null, 512), [
                            [J, n(L)("main", "password")]
                        ]), z(t(n(s)("withdrawDialogDesc2")), 1)]), B(e("input", {
                            class: "input",
                            maxlength: "20",
                            "onUpdate:modelValue": U[3] || (U[3] = oe => b.value = oe),
                            type: "password",
                            placeholder: n(s)("withdrawDialogPh")
                        }, null, 8, kr), [
                            [Ee, b.value]
                        ]), e("p", Cr, [$(re, {
                            class: "icon",
                            name: "warning-o"
                        }), e("span", null, t(n(s)("withdrawDialogDesc3")), 1)]), e("div", Sr, [e("span", {
                            class: "pwd",
                            onClick: U[4] || (U[4] = oe => K())
                        }, t(n(s)("withdrawDialogDesc4")), 1), e("span", {
                            class: "service",
                            onClick: U[5] || (U[5] = oe => Z())
                        }, t(n(s)("withdrawDialogDesc5")), 1)])]))])]
                    }),
                    _: 1
                }, 8, ["show", "showCancelBtn", "cancelText", "title"])]), $(ie, {
                    show: u.value,
                    "onUpdate:show": U[8] || (U[8] = F => u.value = F),
                    round: "",
                    position: "bottom"
                }, {
                    default: V(() => [$(le, {
                        "columns-field-names": r,
                        columns: c.value,
                        onCancel: U[7] || (U[7] = F => u.value = !1),
                        onConfirm: ne
                    }, null, 8, ["columns"])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const Ar = G(Tr, [
        ["__scopeId", "data-v-1911143a"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/GoogleVerify/index.vue"]
    ]),
    r2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ar
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    xr = {
        class: "guide-container"
    },
    Br = ["innerHTML"],
    Lr = q({
        __name: "index",
        setup(w) {
            const s = Y(),
                p = y();
            return ce(async () => {
                const _ = await X(on());
                _ && (p.value = _.data.playingGuide)
            }), (_, h) => {
                const a = N("NavBar");
                return o(), l("div", xr, [$(a, {
                    title: _.$t("guideTitle"),
                    "left-arrow": "",
                    onClickLeft: h[0] || (h[0] = d => n(s).go(-1))
                }, null, 8, ["title"]), e("div", {
                    class: "guide-container-content",
                    innerHTML: p.value
                }, null, 8, Br)])
            }
        }
    });
const Ir = G(Lr, [
        ["__scopeId", "data-v-99f1dd99"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/Guide/index.vue"]
    ]),
    c2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ir
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Nr = w => (we("data-v-b733e3c6"), w = w(), ke(), w),
    Rr = {
        class: "bonus-header"
    },
    Pr = {
        class: "title left"
    },
    Dr = {
        class: "bonus-header-flex"
    },
    Or = {
        class: "tip left"
    },
    Mr = {
        class: "tip left"
    },
    Vr = {
        class: "tip left"
    },
    jr = {
        class: "time left"
    },
    Er = {
        class: "nav"
    },
    Ur = {
        class: "bonus-container"
    },
    zr = {
        class: "left"
    },
    Gr = {
        class: "right"
    },
    qr = {
        class: "detail"
    },
    Fr = {
        class: "text"
    },
    Wr = {
        class: "people"
    },
    Hr = {
        class: "detail"
    },
    Xr = {
        class: "text"
    },
    Yr = {
        class: "num"
    },
    Zr = Nr(() => e("div", {
        class: "line"
    }, null, -1)),
    Kr = {
        class: "task"
    },
    Qr = {
        class: "peopleval"
    },
    Jr = {
        class: "text"
    },
    ec = {
        class: "rechargeval"
    },
    tc = {
        class: "text"
    },
    nc = ["onClick"],
    sc = q({
        __name: "index",
        setup(w) {
            const {
                t: s
            } = ae(), p = Y(), _ = y(), h = ge(() => {
                var u, c, r;
                if ((u = _.value) != null && u.taskList && ((c = _.value) != null && c.taskList.length)) {
                    const {
                        beginDate: m = "",
                        endDate: g = ""
                    } = (r = _.value) == null ? void 0 : r.taskList[0];
                    return `${m.split(" ")[0]} - ${g.split(" ")[0]}`
                }
                return ""
            }), a = async () => {
                const u = await an();
                _.value = u
            };
            async function d(u) {
                const c = await X(ln({
                    taskId: u.taskID
                }));
                Ve(s("code" + c.msgCode)), a()
            }

            function i(u) {
                u.isFinshed && u.isReceive === 0 && d(u)
            }
            const v = u => u.isFinshed ? u.isReceive == 0 ? s("receive") : s("claimed") : s("undone"),
                b = u => {
                    p.push({
                        name: u
                    })
                };
            return ce(() => {
                a()
            }), (u, c) => {
                var m;
                const r = N("NavBar");
                return o(), l(j, null, [$(r, {
                    title: u.$t("invitationBonus"),
                    backgroundColor: "linear-gradient(90deg, #FB5C5B 0%, #FF988C 100%)!important",
                    "left-arrow": "",
                    onClickLeft: c[0] || (c[0] = g => n(p).go(-1))
                }, null, 8, ["title"]), e("div", Rr, [e("div", Pr, t(u.$t("inviteFriendRecharge")), 1), e("div", Dr, [e("div", null, [e("div", Or, t(u.$t("inviteTip1")), 1), e("div", Mr, t(u.$t("inviteTip2")), 1), e("div", Vr, t(u.$t("inviteTip3")), 1), e("div", jr, t(h.value), 1)])]), e("div", Er, [e("div", {
                    class: "rule",
                    onClick: c[1] || (c[1] = g => b("InvitationBonus-Rule"))
                }, t(u.$t("inviteRule")), 1), e("div", {
                    class: "record",
                    onClick: c[2] || (c[2] = g => b("InvitationBonus-Record"))
                }, t(u.$t("inviteRecord")), 1)])]), e("div", Ur, [(o(!0), l(j, null, W((m = _.value) == null ? void 0 : m.taskList, (g, S) => (o(), l("div", {
                    key: S,
                    class: "bonus-items"
                }, [e("div", {
                    class: H(["head", {
                        isFinshed: g.isFinshed
                    }])
                }, [e("div", zr, [z(t(u.$t("award")) + " ", 1), e("div", null, t(S + 1), 1)]), e("div", Gr, t(n(R)(g.taskAmount)), 1)], 2), e("div", qr, [e("div", Fr, t(u.$t("invitationMember")), 1), e("div", Wr, t(g.taskPeople), 1)]), e("div", Hr, [e("div", Xr, t(u.$t("rechargePerPerson")), 1), e("div", Yr, t(n(R)(g.rechargeAmount)), 1)]), Zr, e("div", Kr, [e("div", null, [e("div", Qr, t(`${g.efficientPeople} / ${g.taskPeople}`), 1), e("div", Jr, t(u.$t("invitationMember")), 1)]), e("div", null, [e("div", ec, t(`${g.rechargePeople} / ${g.taskRechargePeople}`), 1), e("div", tc, t(u.$t("rechargeNumber")), 1)])]), e("div", {
                    class: H(["btn", {
                        active: g.isFinshed && g.isReceive === 0
                    }]),
                    onClick: A => i(g)
                }, t(v(g)), 11, nc)]))), 128))])], 64)
            }
        }
    });
const oc = G(sc, [
        ["__scopeId", "data-v-b733e3c6"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/InvitationBonus/index.vue"]
    ]),
    u2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: oc
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ac = {
        class: "languages"
    },
    lc = q({
        __name: "index",
        setup(w) {
            const s = Y();
            return (p, _) => {
                const h = N("NavBar");
                return o(), l("div", ac, [$(h, {
                    title: p.$t("selectLanguage"),
                    "left-arrow": "",
                    onClickLeft: _[0] || (_[0] = a => n(s).go(-1))
                }, null, 8, ["title"]), $(Fn)])
            }
        }
    });
const ic = G(lc, [
        ["__scopeId", "data-v-99fcc2d2"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/Language/index.vue"]
    ]),
    d2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ic
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    rc = {
        class: "Laundry-page"
    },
    cc = ["src"],
    uc = {
        class: "laundry-page_container"
    },
    dc = {
        class: "laundry-page_box"
    },
    _c = {
        class: "title"
    },
    vc = {
        class: "lab"
    },
    pc = {
        class: "number"
    },
    mc = it('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" data-v-cdf0e578><path d="M21.3742 33.0555V37.3185C21.3742 40.9305 18.0143 43.8494 13.8773 43.8494C9.74038 43.8494 6.35938 40.9305 6.35938 37.3185V33.0555C6.35938 36.6675 9.71938 39.2295 13.8773 39.2295C18.0143 39.2295 21.3742 36.6465 21.3742 33.0555Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-cdf0e578></path><path d="M21.3737 27.2808C21.3737 28.3308 21.0797 29.2968 20.5757 30.1368C19.3367 32.1738 16.7957 33.4547 13.8557 33.4547C10.9158 33.4547 8.37476 32.1528 7.13578 30.1368C6.63178 29.2968 6.33789 28.3308 6.33789 27.2808C6.33789 25.4748 7.17784 23.8578 8.52183 22.6819C9.88681 21.4849 11.7557 20.7709 13.8347 20.7709C15.9137 20.7709 17.7827 21.5059 19.1477 22.6819C20.5337 23.8368 21.3737 25.4748 21.3737 27.2808Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-cdf0e578></path><path d="M21.3742 27.2808V33.0558C21.3742 36.6677 18.0143 39.2297 13.8773 39.2297C9.74038 39.2297 6.35938 36.6467 6.35938 33.0558V27.2808C6.35938 23.6688 9.71938 20.7499 13.8773 20.7499C15.9563 20.7499 17.8254 21.4849 19.1903 22.6609C20.5344 23.8368 21.3742 25.4748 21.3742 27.2808Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-cdf0e578></path><path d="M44.9996 20.6867V25.0128C44.9996 26.1678 44.0756 27.1126 42.8996 27.1546H38.7836C36.5157 27.1546 34.4367 25.4956 34.2477 23.2276C34.1217 21.9047 34.6257 20.6657 35.5077 19.8047C36.2847 19.0067 37.3556 18.5448 38.5316 18.5448H42.8996C44.0756 18.5868 44.9996 19.5317 44.9996 20.6867Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-cdf0e578></path><path d="M32.4003 5C32.9463 5 33.4713 5.02098 33.9753 5.10498C39.3933 5.73497 42.9002 9.74595 42.9002 15.4999V18.5449H38.5323C37.3563 18.5449 36.2853 19.0069 35.5083 19.8049C34.6263 20.6658 34.1223 21.9048 34.2483 23.2278C34.4373 25.4958 36.5163 27.1548 38.7843 27.1548H42.9002V30.1997C42.9002 36.4997 38.7003 40.6996 32.4003 40.6996H27.1504" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-cdf0e578></path><path d="M3 19.6999V15.4999C3 9.78795 6.44397 5.79799 11.7989 5.126C12.3449 5.042 12.9119 5 13.4999 5H23.9998" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-cdf0e578></path></svg>', 1),
    hc = {
        class: "txt"
    },
    fc = {
        class: "c-row"
    },
    gc = {
        class: "item"
    },
    yc = {
        class: "tit"
    },
    bc = {
        class: "num"
    },
    $c = {
        class: "tit"
    },
    wc = {
        class: "num red"
    },
    kc = {
        class: "item"
    },
    Cc = {
        class: "tit"
    },
    Sc = {
        class: "num"
    },
    Tc = {
        class: "tip"
    },
    Ac = ["src"],
    xc = {
        class: "laundry-page_list"
    },
    Bc = {
        class: "title"
    },
    Lc = {
        key: 0,
        class: "list"
    },
    Ic = {
        class: "header"
    },
    Nc = {
        class: ""
    },
    Rc = {
        class: "name"
    },
    Pc = {
        class: "time"
    },
    Dc = {
        class: "state"
    },
    Oc = {
        class: "body"
    },
    Mc = {
        class: "left"
    },
    Vc = {
        class: "imgBox"
    },
    jc = ["src"],
    Ec = {
        class: "right"
    },
    Uc = {
        class: "red"
    },
    zc = {
        class: "orange"
    },
    Gc = {
        alt: ""
    },
    qc = {
        class: "Laundry-Con"
    },
    Fc = {
        class: "Laundry-Con_tip"
    },
    Wc = {
        class: "Laundry-Con_txt"
    },
    Hc = {
        class: "number"
    },
    Xc = q({
        __name: "index",
        setup(w) {
            const {
                t: s
            } = ae(), p = Y(), _ = We(), h = ge(() => _.getIsShowAppHandCodeWashingSwitch), a = y(null), d = y(0), i = D => {
                let T = de.gameTabList[d.value].codeType;
                if (T === S.codeType) return !1;
                S.codeType = T, P()
            }, v = y(!1), b = y(0), u = async () => {
                var T, k;
                if (g.codeWashAmount < 100) return;
                const D = await X(cn(S));
                ((T = D == null ? void 0 : D.data) == null ? void 0 : T.rebateAmount) > 0 && (b.value = (k = D == null ? void 0 : D.data) == null ? void 0 : k.rebateAmount, P(), v.value = !0)
            }, c = () => {
                v.value = !1
            }, r = () => {
                p.push({
                    name: "Laundry-LaundryRule"
                })
            }, m = () => {
                p.push({
                    name: "Laundry-LaundryRecord"
                })
            }, g = me({
                codeWashAmount: 0,
                dayRebate: 0,
                totalRebate: 0,
                washRate: "",
                washList: []
            }), S = me({
                codeType: -1
            });

            function A(D) {
                let T = "";
                return de.gameTabList.map(k => {
                    k.codeType == D && (T = k.name)
                }), T
            }
            async function P() {
                const D = await X(rn(S));
                D && (g.codeWashAmount = D.data.codeWashAmount, g.dayRebate = D.data.dayRebate, g.totalRebate = D.data.totalRebate, g.washRate = D.data.washRate, g.washList = D.data.washList)
            }
            return ce(() => {
                de.gameTabList, _.getHomeSetting(), P()
            }), (D, T) => {
                const k = N("NavBar"),
                    O = N("van-sticky"),
                    I = N("van-button"),
                    ne = te("throttle-click"),
                    se = te("lazy");
                return o(), l("div", rc, [$(k, {
                    title: n(s)("laundry"),
                    "left-arrow": "",
                    onClickLeft: T[0] || (T[0] = Z => n(p).go(-1))
                }, null, 8, ["title"]), $(O, {
                    "offset-top": 46,
                    container: a.value,
                    class: "bet-container-sticky"
                }, {
                    default: V(() => [e("div", null, [$(nt, {
                        list: n(de).gameTabList,
                        active: d.value,
                        "onUpdate:active": T[1] || (T[1] = Z => d.value = Z),
                        tabClassName: "tabs",
                        onOnClickTab: i,
                        activeClassName: "tab_active",
                        ref: "tabRefs",
                        tabItemClassName: "funtab_item"
                    }, {
                        default: V(({
                            item: Z,
                            index: K
                        }) => [e("div", {
                            class: H(["tab_item", {
                                tab_active: K === d.value
                            }])
                        }, [e("img", {
                            src: n(L)("AllGames", `${K===d.value?Z.img+"Active":Z.img}`)
                        }, null, 8, cc), e("span", null, t(Z.name), 1)], 2)]),
                        _: 1
                    }, 8, ["list", "active"])])]),
                    _: 1
                }, 8, ["container"]), x(" 可洗码量 "), e("div", uc, [e("div", dc, [e("div", _c, t(n(de).gameTabList[d.value].name) + "-" + t(n(s)("washableSize")), 1), e("div", vc, t(n(s)("laundryTxt")), 1), e("div", pc, [mc, z(" " + t(g.codeWashAmount.toFixed(2) || 0), 1)]), e("div", hc, t(n(s)("laundryTxt1")), 1), e("div", fc, [e("div", gc, [B(e("div", null, [e("p", yc, t(n(s)("rebateToday")), 1), e("span", bc, t(g.dayRebate || 0), 1)], 512), [
                    [ee, d.value == 0]
                ]), B(e("div", null, [e("p", $c, t(n(s)("laundryRate")), 1), e("span", wc, t(g.washRate || 0) + "%", 1)], 512), [
                    [ee, d.value != 0]
                ])]), e("div", kc, [e("p", Cc, t(n(s)("totalRebate")), 1), e("span", Sc, t(g.totalRebate || 0), 1)])]), e("div", Tc, t(n(s)("laundryTxt2")), 1), h.value ? B((o(), l("button", {
                    key: 0,
                    class: H(g.codeWashAmount >= 100 ? "btn active" : "btn")
                }, [z(t(n(s)("codeWashing")), 1)], 2)), [
                    [ne, {
                        handler: u,
                        wait: 2e3
                    }]
                ]) : x("v-if", !0), B(e("p", {
                    class: "rule",
                    onClick: r
                }, [z(t(n(s)("understandRules")), 1), e("img", {
                    class: "rule-img",
                    src: n(L)("main", "ruleicon"),
                    alt: ""
                }, null, 8, Ac)], 512), [
                    [ee, !1]
                ])]), x(" 洗码记录 "), e("div", xc, [e("div", Bc, t(n(s)("laundryRed")), 1), g.washList ? (o(), l("div", Lc, [(o(!0), l(j, null, W(g.washList || [], (Z, K) => (o(), l("div", {
                    class: "item",
                    key: K
                }, [e("div", Ic, [e("div", Nc, [e("p", Rc, t(A(Z.codeType)), 1), e("span", Pc, t(Z.addTime), 1)]), e("div", Dc, t(n(s)("laundrySuccess")), 1)]), e("div", Oc, [e("div", Mc, [e("div", Vc, [e("img", {
                    class: "img",
                    src: n(L)("main", "gameStatsSteps"),
                    alt: ""
                }, null, 8, jc)]), e("div", null, [e("p", null, t(n(s)("laundryAmount")), 1), e("p", null, t(n(s)("laundryRate")), 1), e("p", null, t(n(s)("rebateAmount")), 1)])]), e("div", Ec, [e("p", null, t(Z.washVolume), 1), e("p", Uc, t(Z.washRate) + "%", 1), e("p", zc, t(Z.rebateAmount), 1)])])]))), 128))])) : x("v-if", !0), B((o(), fe(I, {
                    class: "all-record",
                    color: "#FA5A5A",
                    plain: "",
                    block: "",
                    round: "",
                    type: "primary"
                }, {
                    default: V(() => [z(t(n(s)("allRecords")), 1)]),
                    _: 1
                })), [
                    [ne, {
                        handler: m,
                        wait: 2e3
                    }]
                ])])]), $(Ue, {
                    show: v.value,
                    "onUpdate:show": T[2] || (T[2] = Z => v.value = Z),
                    onConfirm: c,
                    "show-cancel-btn": !1,
                    confirmText: n(s)("confirm"),
                    title: `${n(de).gameTabList[d.value].name}-${n(s)("laundryAmount")}`
                }, {
                    header: V(() => [B(e("img", Gc, null, 512), [
                        [se, n(L)("public", "succeed")]
                    ])]),
                    content: V(() => [e("div", qc, [e("div", Fc, t(n(s)("codeWashingSuccess")), 1), e("div", Wc, [z(t(n(s)("rebateAmount")) + ":", 1), e("span", Hc, t(b.value.toFixed(2)), 1)])])]),
                    _: 1
                }, 8, ["show", "confirmText", "title"])])
            }
        }
    });
const Yc = G(Xc, [
        ["__scopeId", "data-v-cdf0e578"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/Laundry/index.vue"]
    ]),
    _2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Yc
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ce = w => (we("data-v-15181d0c"), w = w(), ke(), w),
    Zc = {
        class: "coins-container"
    },
    Kc = {
        class: "coins-container-header"
    },
    Qc = {
        class: "imgBanner",
        alt: ""
    },
    Jc = ["src"],
    eu = Ce(() => e("div", {
        class: "tip"
    }, [e("div", null, "我的金币"), e("div", null, "88.888.8889")], -1)),
    tu = {
        class: "coins-container-content"
    },
    nu = Ce(() => e("div", {
        class: "coins-container-content-desc"
    }, [e("h2", null, [z("目前金币与"), e("span", null, "USDT(TRC20)"), z("的兑换比率为")]), e("h3", null, [e("span", null, "1"), z("金币="), e("span", null, "1"), z("USDT(TRC20)")])], -1)),
    su = {
        class: "coins-container-content-vipcard"
    },
    ou = {
        class: "coins-container-content-vipcard-title"
    },
    au = {
        alt: ""
    },
    lu = Ce(() => e("h1", null, "VIP券兑换", -1)),
    iu = Ce(() => e("span", null, "对不起！您的VIP券不足。", -1)),
    ru = Ce(() => e("p", null, "兑换", -1)),
    cu = {
        alt: ""
    },
    uu = Ce(() => e("span", null, "8888.88", -1)),
    du = {
        class: "coins-container-content-vipcard-coin"
    },
    _u = {
        alt: ""
    },
    vu = Ce(() => e("button", {
        class: "gainCoins"
    }, [z("获取"), e("span", null, "金币")], -1)),
    pu = {
        class: "coins-container-content-recordcard"
    },
    mu = {
        class: "coins-container-content-recordcard-title"
    },
    hu = {
        alt: ""
    },
    fu = Ce(() => e("h1", {
        class: "ar-1px-b"
    }, "兑换记录", -1)),
    gu = {
        class: "coins-container-content-recordcard-items"
    },
    yu = {
        class: "ar-1px-b"
    },
    bu = {
        alt: ""
    },
    $u = {
        alt: ""
    },
    wu = {
        alt: ""
    },
    ku = Ce(() => e("span", null, "888", -1)),
    Cu = {
        class: "succeed"
    },
    Su = Ce(() => e("div", {
        class: "van-dialog__content-title"
    }, "兑换成功", -1)),
    Tu = {
        class: "van-dialog__content-note"
    },
    Au = Ce(() => e("h1", null, "获得", -1)),
    xu = {
        alt: ""
    },
    Bu = Ce(() => e("span", null, "8888.88", -1)),
    Lu = q({
        __name: "index",
        setup(w) {
            const s = Y();
            y();
            const p = y(!1);
            let _ = y("");

            function h() {
                _.value = ""
            }
            async function a() {
                p.value = !0
            }
            async function d() {
                p.value = !1
            }
            ce(() => {});
            const i = [{
                    num: 100,
                    title: "金币"
                }, {
                    num: 100,
                    title: "金币"
                }, {
                    num: 100,
                    title: "金币"
                }, {
                    num: 100,
                    title: "金币"
                }, {
                    num: 100,
                    title: "金币"
                }, {
                    num: 100,
                    title: "金币"
                }],
                v = [{
                    name: "VND",
                    date: "2022-12-12",
                    num: 888
                }, {
                    name: "VND",
                    date: "2022-12-12",
                    num: 888
                }, {
                    name: "VND",
                    date: "2022-12-12",
                    num: 888
                }, {
                    name: "VND",
                    date: "2022-12-12",
                    num: 888
                }, {
                    name: "VND",
                    date: "2022-12-12",
                    num: 888
                }];
            return (b, u) => {
                const c = N("NavBar"),
                    r = N("van-dialog"),
                    m = te("lazy");
                return o(), l("div", Zc, [$(c, {
                    title: "金币",
                    "left-arrow": "",
                    onClickLeft: u[0] || (u[0] = g => n(s).go(-1))
                }), e("div", Kc, [B(e("img", Qc, null, 512), [
                    [m, n(L)("main", "MyCoinsBanner")]
                ]), e("img", {
                    src: n(L)("main", "mycoins_bg"),
                    class: "bg2"
                }, null, 8, Jc), eu]), e("div", tu, [nu, e("div", su, [e("div", ou, [B(e("img", au, null, 512), [
                    [m, n(L)("main", "privacyIcon")]
                ]), lu]), e("h1", null, [B(e("input", {
                    type: "number",
                    "onUpdate:modelValue": u[1] || (u[1] = g => Me(_) ? _.value = g : _ = g),
                    placeholder: "兑换数量"
                }, null, 512), [
                    [Ee, n(_)]
                ]), iu, B(e("img", {
                    class: "clearImg",
                    type: "number",
                    onClick: h,
                    alt: ""
                }, null, 512), [
                    [m, n(L)("main", "clearIcon")]
                ])]), e("h2", null, [ru, e("div", null, [B(e("img", cu, null, 512), [
                    [m, n(L)("main", "vaultSmallIcon")]
                ]), uu])]), e("div", du, [(o(), l(j, null, W(i, g => e("div", null, [e("h1", null, [B(e("img", _u, null, 512), [
                    [m, n(L)("main", "myCoin")]
                ]), e("span", null, t(g.num), 1)]), e("p", null, t(g.title), 1)])), 64))])]), e("div", {
                    class: "coins-container-content-btn"
                }, [e("button", {
                    class: "redeem",
                    onClick: a
                }, "兑换"), vu]), e("div", pu, [e("div", mu, [B(e("img", hu, null, 512), [
                    [m, n(L)("main", "privacyIcon")]
                ]), fu]), (o(), l(j, null, W(v, g => e("div", gu, [e("h1", null, [z(" 金币兑换"), e("span", null, t(g.name), 1)]), e("p", null, t(g.date), 1), e("div", yu, [e("h2", null, [B(e("img", bu, null, 512), [
                    [m, n(L)("main", "myCoin")]
                ]), e("span", null, t(g.num), 1)]), B(e("img", $u, null, 512), [
                    [m, n(L)("main", "exchangeIcon")]
                ]), e("h2", null, [B(e("img", wu, null, 512), [
                    [m, n(L)("main", "vaultSmallIcon")]
                ]), ku])])])), 64))])]), $(r, {
                    show: p.value,
                    "onUpdate:show": u[2] || (u[2] = g => p.value = g),
                    "show-confirm-button": !1,
                    "z-index": "3100"
                }, {
                    default: V(() => [B(e("img", Cu, null, 512), [
                        [m, n(L)("public", "succeed")]
                    ]), Su, e("div", Tu, [e("div", null, [Au, e("h2", null, [B(e("img", xu, null, 512), [
                        [m, n(L)("main", "vaultSmallIcon")]
                    ]), Bu])])]), e("div", {
                        class: "van-dialog__content-btn",
                        onClick: d
                    }, "确认")]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const Iu = G(Lu, [
        ["__scopeId", "data-v-15181d0c"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/MyCoins/index.vue"]
    ]),
    v2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Iu
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Nu = {
        class: "myCps"
    },
    Ru = {
        class: "head"
    },
    Pu = {
        class: "time"
    },
    Du = {
        class: "foot"
    },
    Ou = {
        class: "amount"
    },
    Mu = q({
        __name: "index",
        setup(w) {
            const s = Y(),
                p = y([]);

            function _(h) {
                s.push({
                    name: "Championship-ChampionshipDetail",
                    query: {
                        championId: h
                    }
                })
            }
            return (h, a) => {
                const d = N("NavBar");
                return o(), l("div", Nu, [$(d, {
                    title: h.$t("cpsTip6"),
                    "left-arrow": "",
                    onClickLeft: a[0] || (a[0] = () => n(s).back())
                }, null, 8, ["title"]), $(tt, {
                    list: p.value,
                    "onUpdate:list": a[1] || (a[1] = i => p.value = i),
                    api: n(dn),
                    distance: 100,
                    ref: "listRef",
                    "is-auto-load": !0
                }, {
                    content: V(() => [(o(!0), l(j, null, W(p.value, i => (o(), fe(un, {
                        itemD: i,
                        key: i == null ? void 0 : i.id,
                        onClick: v => _(i.id)
                    }, {
                        content: V(() => [e("div", Ru, [e("h1", null, t(h.$t("cpsTip7")), 1), e("div", Pu, [e("span", null, t(i.ranking), 1)])]), e("div", Du, [e("h1", null, t(h.$t("winTips5")), 1), e("div", Ou, t(n(R)((i == null ? void 0 : i.sumBonus) || 0)), 1)])]),
                        footer: V(() => [e("div", {
                            class: H(["state", `state${i.bonusState}`])
                        }, t(i.bonusState == 1 ? h.$t("cpsTip23") : h.$t("cpsTip24")), 3)]),
                        _: 2
                    }, 1032, ["itemD", "onClick"]))), 128))]),
                    _: 1
                }, 8, ["list", "api"])])
            }
        }
    });
const Vu = G(Mu, [
        ["__scopeId", "data-v-e9e147fc"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/MyCps/index.vue"]
    ]),
    p2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Vu
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ju = {
        class: "notification-container"
    },
    Eu = {
        class: "notification-container-content-title"
    },
    Uu = {
        alt: ""
    },
    zu = {
        class: "notification-container-content-desc"
    },
    Gu = q({
        __name: "index",
        setup(w) {
            const s = Y(),
                p = y({
                    list: [],
                    pageNo: 0,
                    totalPage: 0,
                    totalCount: 0
                }),
                _ = y();
            return (h, a) => {
                const d = N("NavBar"),
                    i = te("lazy");
                return o(), l("div", ju, [$(d, {
                    title: h.$t("notification"),
                    "left-arrow": "",
                    onClickLeft: a[0] || (a[0] = v => n(s).go(-1))
                }, null, 8, ["title"]), $(Fe, {
                    class: "sysMessage__container-msgWrapper",
                    list: p.value.list,
                    "onUpdate:list": a[1] || (a[1] = v => p.value.list = v),
                    "page-query": {},
                    isAutoLoad: !0,
                    api: n(_n),
                    distance: 250,
                    ref_key: "listRef",
                    ref: _
                }, {
                    content: V(() => [(o(!0), l(j, null, W(p.value.list, v => (o(), l("div", {
                        class: "notification-container-content",
                        key: v.title
                    }, [e("div", Eu, [B(e("img", Uu, null, 512), [
                        [i, n(L)("main", "notificationIcon")]
                    ]), e("span", null, t(v.title), 1)]), e("div", zu, t(v.siteMessage), 1), e("h5", null, t(v.addtime), 1)]))), 128))]),
                    _: 1
                }, 8, ["list", "api"])])
            }
        }
    });
const qu = G(Gu, [
        ["__scopeId", "data-v-00f99608"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/Notification/index.vue"]
    ]),
    m2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: qu
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Fu = {};

function Wu(w, s) {
    return o(), l("div")
}
const Hu = G(Fu, [
        ["render", Wu],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/PointDetail/index.vue"]
    ]),
    h2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Hu
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Xu = {
        class: "redeem-container"
    },
    Yu = {
        class: "redeem-container-header"
    },
    Zu = {
        class: "redeem-container-header-belly"
    },
    Ku = {
        alt: ""
    },
    Qu = {
        class: "redeem-container-content"
    },
    Ju = {
        class: "redeem-container-receive"
    },
    ed = ["placeholder"],
    td = {
        key: 0
    },
    nd = {
        class: "redeem-container-record"
    },
    sd = {
        class: "redeem-container-record-title"
    },
    od = ["src"],
    ad = {
        class: "redeem-container-record-itemsBox"
    },
    ld = {
        class: "redeem-container-record-item ar-1px-b"
    },
    id = {
        class: "redeem-container-record-item-left"
    },
    rd = {
        class: "redeem-container-record-item-right"
    },
    cd = ["src"],
    ud = q({
        __name: "index",
        setup(w) {
            const {
                t: s
            } = ae(), p = y(!1), _ = Y(), h = rt(), a = y(h.query.hbcode || ""), d = y(!0), i = me({
                pageSize: 10,
                pageNo: 1,
                startDate: null,
                endDate: null
            }), v = y({
                list: [],
                pageNo: 0,
                totalPage: 0,
                totalCount: 0
            }), b = async () => {
                if (a.value.trim() === "") {
                    Rt({
                        message: s("tipPlsEnterCode")
                    });
                    return
                }
                await X(vn({
                    giftCode: a.value
                })) && (Ae(s("redeemDialogDesc1")), u())
            }, u = async () => {
                const c = await X(ot(i));
                c && (v.value.list = c == null ? void 0 : c.data.list)
            };
            return (c, r) => {
                const m = N("NavBar"),
                    g = te("lazy");
                return o(), l("div", Xu, [e("div", Yu, [$(m, {
                    title: c.$t("gift"),
                    "left-arrow": "",
                    onClickLeft: r[0] || (r[0] = S => n(_).go(-1))
                }, null, 8, ["title"]), e("div", Zu, [B(e("img", Ku, null, 512), [
                    [g, n(pe)("main", "gift")]
                ])])]), e("div", Qu, [e("div", Ju, [e("p", null, t(c.$t("tipHelloVIP")), 1), e("p", null, t(c.$t("tipWepreparedGift4u")), 1), e("h4", null, t(c.$t("tipPlsEnterRedeemCode")), 1), B(e("input", {
                    type: "text",
                    "auto-complete": "new-password",
                    autocomplete: "off",
                    placeholder: c.$t("tipPlsEnterCode"),
                    "onUpdate:modelValue": r[1] || (r[1] = S => a.value = S)
                }, null, 8, ed), [
                    [Ee, a.value]
                ]), p.value ? (o(), l("h5", td, t(c.$t("tipPlsBindBankcard")), 1)) : x("v-if", !0), e("button", {
                    onClick: r[2] || (r[2] = S => b())
                }, t(c.$t("receive")), 1)]), e("div", nd, [e("div", sd, [e("img", {
                    src: n(L)("main", "gRecord")
                }, null, 8, od), e("span", null, t(c.$t("record")), 1)]), e("div", ad, [$(Fe, {
                    list: v.value.list,
                    "onUpdate:list": r[3] || (r[3] = S => v.value.list = S),
                    "page-query": i,
                    "onUpdate:pageQuery": r[4] || (r[4] = S => i = S),
                    api: n(ot),
                    distance: 20,
                    isAutoLoad: d.value
                }, {
                    content: V(() => [(o(!0), l(j, null, W(v.value.list, S => (o(), l("div", {
                        class: "redeem-container-record-items",
                        key: S.reserved
                    }, [e("div", ld, [e("div", id, [e("h5", null, t(c.$t("receiveSuccess")), 1), e("span", null, t(S.addTime), 1)]), e("div", rd, [e("img", {
                        src: n(L)("main", "gold")
                    }, null, 8, cd), e("span", null, t(S.amount), 1)])])]))), 128))]),
                    _: 1
                }, 8, ["list", "page-query", "api", "isAutoLoad"])])])])])
            }
        }
    });
const dd = G(ud, [
        ["__scopeId", "data-v-695ca243"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/RedeemGift/index.vue"]
    ]),
    f2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: dd
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    _d = w => (we("data-v-6af1b9df"), w = w(), ke(), w),
    vd = {
        class: "content setting-wrapper"
    },
    pd = {
        class: "setting-items-wrapper"
    },
    md = {
        class: "content-sub_title"
    },
    hd = {
        class: "phone_container"
    },
    fd = {
        class: "phone_container-item-left"
    },
    gd = ["src"],
    yd = {
        class: "phone_container-item-right"
    },
    bd = {
        class: "setting_container"
    },
    $d = {
        key: 0,
        class: "phone_container-item-left"
    },
    wd = ["src"],
    kd = {
        key: 1,
        class: "phone_container-item-left"
    },
    Cd = ["src"],
    Sd = {
        key: 2,
        class: "phone_container-item-right"
    },
    Td = {
        key: 3,
        class: "phone_container-item-right"
    },
    Ad = {
        key: 0,
        class: "phoneright"
    },
    xd = {
        key: 1,
        class: "phoneright"
    },
    Bd = {
        key: 0,
        class: "phone_container-item-left"
    },
    Ld = ["src"],
    Id = {
        key: 1,
        class: "phone_container-item-left"
    },
    Nd = ["src"],
    Rd = {
        key: 2,
        class: "phone_container-item-right"
    },
    Pd = {
        key: 0,
        class: "emailright"
    },
    Dd = {
        key: 1,
        class: "emailright"
    },
    Od = {
        key: 3,
        class: "phone_container-item-right"
    },
    Md = ["src"],
    Vd = {
        key: 0,
        class: "green"
    },
    jd = {
        key: 1
    },
    Ed = {
        class: "setting_container_item ar-1px-b"
    },
    Ud = ["src"],
    zd = _d(() => e("h5", null, "1.0.9", -1)),
    Gd = ["src"],
    qd = {
        class: "setting-records-modal"
    },
    Fd = {
        class: "idlockTip"
    },
    Wd = q({
        __name: "index",
        setup(w) {
            const {
                t: s
            } = ae(), p = Pt(pn, 500), _ = Y(), h = Re(), a = Se();
            h.getUserInfo({
                signature: a.token
            });
            const d = a.getUserInfo,
                i = y(!1);

            function v() {
                localStorage.setItem("toPath", "ResetPassword"), _.push({
                    name: "SettingCenter-LoginPassword"
                })
            }
            const b = ge(() => {
                    var T;
                    return (T = d == null ? void 0 : d.verifyMethods) == null ? void 0 : T.email
                }),
                u = ge(() => {
                    var T;
                    return (T = d == null ? void 0 : d.verifyMethods) == null ? void 0 : T.mobile
                }),
                c = !!d.googleVerify,
                r = y(!1),
                m = () => {
                    d.googleVerify === 1 ? r.value = !0 : _.push({
                        name: "GoogleVerify"
                    })
                },
                g = T => {
                    S(T)
                },
                S = async T => {
                    var O, I;
                    const k = await X(ft({
                        verifyCode: T,
                        verifyType: 3
                    }));
                    (O = k == null ? void 0 : k.data) != null && O.secret && _.push({
                        name: "GoogleVerify-BindGoogle",
                        query: {
                            secret: (I = k.data) == null ? void 0 : I.secret,
                            type: 1
                        }
                    })
                },
                A = y(!1),
                P = () => {
                    A.value = !0
                },
                D = async () => {
                    (await X(mn())).code == 0 && (A.value = !1, Ae(s("delete") + s("success")))
                };
            return (T, k) => {
                var se, Z, K, E, U, ue, re, le, ie, J;
                const O = N("van-icon"),
                    I = N("van-button"),
                    ne = te("haspermission");
                return o(), l(j, null, [$(xt, {
                    userInfo: n(d)
                }, null, 8, ["userInfo"]), e("div", vd, [e("div", pd, [e("div", md, [e("div", null, t(n(s)("securityInfo")), 1)]), e("div", hd, [e("div", {
                    class: "phone_container-item",
                    onClick: v
                }, [e("div", fd, [e("img", {
                    src: n(L)("main", "editPswIcon")
                }, null, 8, gd), e("span", null, t(n(s)("loginPSW")), 1)]), e("div", yd, [e("span", null, t(n(s)("edit")), 1), $(O, {
                    name: "arrow",
                    color: "#888"
                })])])]), e("div", bd, [((se = n(d)) == null ? void 0 : se.regType) == 2 ? (o(), l("div", {
                    key: 0,
                    class: "phone_container-item setting_container_item ar-1px-b",
                    onClick: k[0] || (k[0] = F => n(_).push({
                        name: "SettingCenter-UpdatePhone"
                    }))
                }, [u.value == "" ? (o(), l("div", $d, [e("img", {
                    src: n(L)("main", "editPhoneIcon")
                }, null, 8, wd), e("span", null, t(n(s)("bindPhone")), 1)])) : x("v-if", !0), u.value != "" ? (o(), l("div", kd, [e("img", {
                    src: n(L)("main", "editPhoneIcon")
                }, null, 8, Cd), e("span", null, t(n(s)("changephone")), 1)])) : x("v-if", !0), u.value != "" ? (o(), l("div", Sd, [e("span", null, t(n(gt)((K = (Z = n(d)) == null ? void 0 : Z.verifyMethods) == null ? void 0 : K.mobile)), 1), $(O, {
                    name: "arrow",
                    color: "#888"
                })])) : x("v-if", !0), u.value == "" ? (o(), l("div", Td, [((E = n(d)) == null ? void 0 : E.bindReward) > 0 ? (o(), l("div", Ad, [e("div", null, t(n(s)("award")), 1), e("div", null, t(n(R)((U = n(d)) == null ? void 0 : U.bindReward)), 1)])) : (o(), l("div", xd, [e("div", null, t(n(s)("tobind")), 1)])), $(O, {
                    name: "arrow",
                    color: "#888"
                })])) : x("v-if", !0)])) : x("v-if", !0), ((ue = n(d)) == null ? void 0 : ue.regType) == 1 ? (o(), l("div", {
                    key: 1,
                    class: "phone_container-item setting_container_item",
                    onClick: k[1] || (k[1] = F => n(_).push({
                        name: "SettingCenter-BindEmail"
                    }))
                }, [b.value == "" ? (o(), l("div", Bd, [e("img", {
                    src: n(L)("main", "EmailIcon")
                }, null, 8, Ld), e("span", null, t(n(s)("bindEmail")), 1)])) : x("v-if", !0), b.value != "" ? (o(), l("div", Id, [e("img", {
                    src: n(L)("main", "EmailIcon")
                }, null, 8, Nd), e("span", null, t(n(s)("email")), 1)])) : x("v-if", !0), b.value == "" ? (o(), l("div", Rd, [((re = n(d)) == null ? void 0 : re.bindReward) > 0 ? (o(), l("div", Pd, [e("div", null, t(n(s)("award")), 1), e("div", null, t(n(R)((le = n(d)) == null ? void 0 : le.bindReward)), 1)])) : (o(), l("div", Dd, [e("div", null, t(n(s)("tobind")), 1)])), $(O, {
                    name: "arrow",
                    color: "#888"
                })])) : x("v-if", !0), b.value != "" ? (o(), l("div", Od, [e("span", null, t(n(yt)((J = (ie = n(d)) == null ? void 0 : ie.verifyMethods) == null ? void 0 : J.email)), 1), $(O, {
                    name: "arrow",
                    color: "#888"
                })])) : x("v-if", !0)])) : x("v-if", !0), B(e("div", {
                    class: "setting_container_item ar-1px-b",
                    onClick: m
                }, [e("div", null, [e("img", {
                    src: n(L)("main", "googleValidation")
                }, null, 8, Md), e("span", null, t(n(s)("googleVerify")), 1)]), e("div", null, [n(c) ? (o(), l("span", Vd, t(n(s)("turnedOn")), 1)) : (o(), l("span", jd, t(n(s)("unopened")), 1)), $(O, {
                    name: "arrow",
                    color: "#888"
                })])], 512), [
                    [ee, n(d).isGoogle === "1"]
                ]), e("div", Ed, [e("div", null, [e("img", {
                    src: n(L)("main", "versionUpdate")
                }, null, 8, Ud), e("span", null, t(n(s)("updateNewVersion")), 1)]), e("div", null, [zd, $(O, {
                    name: "arrow",
                    color: "var(--colorText-6)"
                })])])]), i.value ? (o(), fe(I, {
                    key: 0,
                    class: "cg-default",
                    block: "",
                    round: "",
                    size: "large",
                    color: "var(--RuleGradient)",
                    onClick: n(p)
                }, {
                    icon: V(() => [e("img", {
                        src: n(L)("main", "clear")
                    }, null, 8, Gd)]),
                    default: V(() => [z(" " + t(n(s)("clearcache")), 1)]),
                    _: 1
                }, 8, ["onClick"])) : x("v-if", !0)])]), B((o(), l("div", {
                    class: "delAllRq",
                    onClick: P
                }, [z(t(n(s)("delAllBtn")), 1)])), [
                    [ne, 19]
                ]), x(" 验证弹窗 "), $(St, {
                    showPopup: r.value,
                    onOnConfirm: g,
                    onOnBack: k[2] || (k[2] = F => r.value = !1)
                }, null, 8, ["showPopup"]), e("div", qd, [$(Ue, {
                    show: A.value,
                    "onUpdate:show": k[4] || (k[4] = F => A.value = F),
                    "show-cancel-btn": !0,
                    title: n(s)("delAllTip1")
                }, {
                    content: V(() => [e("div", Fd, t(n(s)("delAllTip2")), 1)]),
                    footer: V(() => [e("div", {
                        class: "dialogBtn",
                        onClick: D
                    }, t(n(s)("confirmDelete")), 1), e("div", {
                        class: "dialogBtn",
                        onClick: k[3] || (k[3] = F => A.value = !1)
                    }, t(n(s)("cancel")), 1)]),
                    _: 1
                }, 8, ["show", "title"])])], 64)
            }
        }
    });
const Hd = G(Wd, [
        ["__scopeId", "data-v-6af1b9df"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/SettingCenter/index.vue"]
    ]),
    g2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Hd
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Xd = {
        class: "TotalAssets__container"
    },
    Yd = {
        class: "TotalAssets__container-header"
    },
    Zd = {
        class: "TotalAssets__container-header__left"
    },
    Kd = {
        alt: ""
    },
    Qd = {
        class: "TotalAssets__container-header__right"
    },
    Jd = {
        alt: ""
    },
    e_ = {
        class: "TotalAssets__container-main"
    },
    t_ = {
        class: "TotalAssets__container-tip"
    },
    n_ = q({
        __name: "index",
        props: {
            safeAmount: {
                type: String,
                default: "0"
            }
        },
        setup(w) {
            const s = w;
            return (p, _) => {
                const h = te("lazy");
                return o(), l("div", Xd, [e("div", Yd, [e("div", Zd, [B(e("img", Kd, null, 512), [
                    [h, n(L)("main", "vault")]
                ]), z(" " + t(p.$t("totalAmount")), 1)]), e("div", Qd, [B(e("img", Jd, null, 512), [
                    [h, n(pe)("main", "Subtract")]
                ]), z(" " + t(p.$t("fundSafety")), 1)])]), e("div", e_, t(n(R)(s.safeAmount || 0)), 1), e("div", t_, t(p.$t("descTotalAssets")), 1)])
            }
        }
    });
const s_ = G(n_, [
        ["__scopeId", "data-v-d24f0506"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Main/TotalAssets/index.vue"]
    ]),
    o_ = {
        class: "StrongBoxRecordCard__container"
    },
    a_ = {
        class: "StrongBoxRecordCard__container-buttom"
    },
    l_ = {
        class: "StrongBoxRecordCard__container-num"
    },
    i_ = {
        class: "StrongBoxRecordCard__container-rale"
    },
    r_ = {
        class: "StrongBoxRecordCard__container-rale"
    },
    c_ = {
        class: "StrongBoxRecordCard__container-rale-num"
    },
    u_ = {
        class: "StrongBoxRecordCard__container-last"
    },
    d_ = q({
        __name: "index",
        props: {
            detail: {
                type: Object,
                default: {
                    Type: 18,
                    DayShareRate: .1,
                    Amount: 5e4,
                    Earnings: 5e3,
                    OrderNum: "20221115123456789",
                    AddTime: "2022/08/24"
                }
            }
        },
        setup(w) {
            const s = w;
            return (p, _) => (o(), l("div", o_, [e("div", {
                class: H(["StrongBoxRecordCard__container-first", {
                    transferIn: s.detail.type == 18
                }])
            }, [e("div", a_, t(s.detail.type == 18 ? p.$t("transferIn") : p.$t("transferOut")), 1), e("div", l_, t(s.detail.type == 18 ? "+" : "-") + t(n(R)(s.detail.amount)), 1)], 2), e("div", i_, [e("span", null, t(p.$t("dailyRate")), 1), e("span", null, t((s.detail.dayShareRate * 100).toFixed(2)) + "%", 1)]), e("div", r_, [e("span", null, t(p.$t("settlementIncome")), 1), e("span", c_, t(n(R)(s.detail.earnings)), 1)]), e("div", u_, [e("span", null, t(s.detail.orderNum), 1), e("span", null, t(s.detail.addTime), 1)])]))
        }
    });
const Lt = G(d_, [
        ["__scopeId", "data-v-6cfd8c1d"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Main/StrongBoxRecordCard/index.vue"]
    ]),
    __ = w => (we("data-v-002ff529"), w = w(), ke(), w),
    v_ = {
        class: "StrongBox__container"
    },
    p_ = {
        class: "StrongBox__container-dailyRate"
    },
    m_ = {
        class: "StrongBox__container-income"
    },
    h_ = {
        class: "StrongBox__container-income-header"
    },
    f_ = {
        class: "StrongBox__container-income-header-left"
    },
    g_ = {
        class: "StrongBox__container-income-header-left-num"
    },
    y_ = {
        class: "StrongBox__container-income-header-left-text"
    },
    b_ = {
        class: "StrongBox__container-income-header-left-myrale"
    },
    $_ = {
        class: "StrongBox__container-income-header-right"
    },
    w_ = {
        class: "StrongBox__container-income-header-right-num"
    },
    k_ = {
        class: "StrongBox__container-income-header-right-text"
    },
    C_ = {
        class: "StrongBox__container-income-buttom"
    },
    S_ = {
        class: "StrongBox__container-income-tip"
    },
    T_ = ["src"],
    A_ = {
        class: "StrongBox__container-record"
    },
    x_ = {
        alt: ""
    },
    B_ = {
        class: "tipText"
    },
    L_ = {
        class: "popup__header"
    },
    I_ = {
        class: "popup__amount"
    },
    N_ = {
        class: "popup__container"
    },
    R_ = {
        class: "popup__container-slider"
    },
    P_ = __(() => e("div", {
        class: "popup__container-slider-button"
    }, null, -1)),
    D_ = {
        class: "popup__container-slider-foot"
    },
    O_ = {
        class: "popup__container-numLine"
    },
    M_ = {
        class: "popup__container-numLine-num"
    },
    V_ = {
        class: "popup__container-numLine"
    },
    j_ = {
        class: "popup__container-numLine-num red"
    },
    E_ = {
        class: "popup__container-numLine"
    },
    U_ = {
        class: "popup__container-numLine-num"
    },
    z_ = {
        class: "popup__container-numLine"
    },
    G_ = {
        class: "popup__container-numLine-num red"
    },
    q_ = {
        class: "popup__header"
    },
    F_ = {
        class: "popup__amount"
    },
    W_ = {
        class: "popup__container"
    },
    H_ = {
        key: 0,
        class: "popup__container-errorTip"
    },
    X_ = {
        class: "popup__container-multiple"
    },
    Y_ = ["onClick"],
    Z_ = {
        class: "popup__container-numLine"
    },
    K_ = {
        class: "popup__container-numLine-num"
    },
    Q_ = {
        key: 1,
        class: "betTip"
    },
    J_ = {
        class: "popup__container-numLine"
    },
    ev = {
        class: "popup__container-numLine-num red"
    },
    tv = q({
        __name: "index",
        setup(w) {
            const {
                t: s
            } = ae(), p = Dt(() => bn(() =>
                import ("./errorTip-433eb62e.js"), ["assets/js/errorTip-433eb62e.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css", "assets/js/page-activity-b0cc3a5b.js", "assets/js/native/index-09743dd6.js", "assets/js/en-cff984dc.js", "assets/js/rus-ecb14220.js", "assets/js/vi-edb4f658.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-e19d7dd2.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-116b9972.js", "assets/js/pak-656a575f.js", "assets/js/ar-1c9ff85b.js", "assets/css/page-activity-f0ca3544.css"])), _ = Y(), h = y(!1), a = y(!1), d = y(!1), i = y(0), v = y(0), b = y("0"), u = y("0"), c = y("0"), r = y(0), m = y(1), g = y(0), S = y([]), A = y({
                balance: 0,
                dayShareRate: 0,
                safeEarnings: "0"
            }), P = y(0), D = y(0), T = y(0), k = y(-1), O = [2, 5, 10, 50, 100, 200, 500, 1e3], I = y(2), ne = ge(() => A.value.balance && r.value ? Math.floor(A.value.balance / r.value) : 0), se = ge(() => ne.value ? 1 : 0), Z = async () => {
                const C = await X(wt());
                C && (i.value = C.data.dayShareRate || 0, b.value = C.data.safeAmount, u.value = C.data.safeEarnings, c.value = C.data.safeTotalAmount, r.value = C.data.shareAmount, m.value = C.data.shareTime, v.value = C.data.userDayShareRate || 0)
            }, K = async () => {
                const C = await X(hn({
                    pageSize: 10,
                    pageNo: 1
                }));
                C && (S.value = C.data.list)
            }, E = async () => {
                const C = await X(fn());
                C && (A.value = C.data, D.value = se.value)
            }, U = async () => {
                if (T.value < 1) {
                    Ve(s("amountAvaliableInsufficient"));
                    return
                }
                await X($n({
                    amount: T.value
                })) && (a.value = !1, Ve(s("code0")), Z(), K())
            }, ue = async () => {
                await X(yn({
                    amount: I.value * r.value
                })) && (Ve(s("code0")), d.value = !1, Z(), K())
            }, re = async () => {
                const C = await X(gn());
                C && (P.value = Number(C.data.balance), g.value = C.data.amountOfCode)
            }, le = C => {
                k.value = -1, C ? T.value = parseInt(C) * r.value : T.value = 0
            }, ie = () => {
                I.value = Number(Math.floor(P.value / r.value))
            }, J = () => {
                D.value && U()
            };

            function F() {
                _.go(-1)
            }

            function ye() {
                E(), h.value = !1, a.value = !0
            }
            const oe = C => {
                    _.push({
                        name: C
                    })
                },
                Ie = C => {
                    Number(C) > 0 ? (E(), a.value = !0) : h.value = !0
                },
                He = () => {
                    d.value = !0, re()
                };
            return ce(async () => {
                Z(), K()
            }), (C, M) => {
                const ve = N("NavBar"),
                    $e = N("van-field"),
                    xe = N("van-slider"),
                    ze = N("van-popup"),
                    Xe = te("lazy"),
                    f = te("throttle-click");
                return o(), l("div", v_, [$(ve, {
                    title: n(s)("vault"),
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: F
                }, null, 8, ["title"]), e("div", p_, [x(" {{ $t('dailyRate1percent', [(dayShareRate && numFilter2(dayShareRate * 100, 3, 1)) + '%']) }} "), z(" " + t(n(s)("dailyRate1percent", [(i.value && n(qe)(i.value * 100, 2, 2)) + "%"])), 1)]), $(s_, {
                    safeAmount: b.value
                }, null, 8, ["safeAmount"]), e("div", m_, [e("div", h_, [e("div", f_, [e("div", g_, t(n(R)(u.value || 0)), 1), e("div", y_, t(n(s)("generatedRevenue")), 1), e("div", b_, t(n(s)("tipMyrate1percent", [(v.value ? n(qe)(v.value * 100, 2, 1) : 0) + "%"])), 1)]), e("div", $_, [e("div", w_, t(n(R)(c.value || 0)), 1), e("div", k_, t(n(s)("cumulativeRevenue")), 1)])]), e("div", C_, [e("div", {
                    onClick: M[0] || (M[0] = Q => Ie(u.value))
                }, t(n(s)("transferOut")), 1), e("div", {
                    onClick: He
                }, t(n(s)("transferIn")), 1)]), e("div", S_, [$(n(p), {
                    class: "StrongBox__container-errorTip"
                }), z(" " + t(n(s)("tipFundEnsuredNtransferOutfreely")), 1)]), e("div", {
                    class: "StrongBox__container-income-godetail",
                    onClick: M[1] || (M[1] = Q => oe("StrongBox-StrongBoxAbout"))
                }, [z(t(n(s)("learnAboutVault")) + " ", 1), e("img", {
                    src: n(pe)("main", "nextIcon"),
                    alt: ""
                }, null, 8, T_)])]), e("div", A_, [B(e("img", x_, null, 512), [
                    [Xe, n(L)("wallet", "historyHead")]
                ]), z(" " + t(n(s)("historyRecourds")), 1)]), (o(!0), l(j, null, W(S.value, (Q, be) => (o(), fe(Lt, {
                    class: "StrongBox__container-record-card",
                    key: be,
                    detail: Q
                }, null, 8, ["detail"]))), 128)), e("div", {
                    class: "StrongBox__container-allRecord",
                    onClick: M[2] || (M[2] = Q => oe("StrongBox-StrongBoxRecord"))
                }, t(n(s)("allRecords")), 1), $(Ue, {
                    show: h.value,
                    "onUpdate:show": M[3] || (M[3] = Q => h.value = Q),
                    onConfirm: ye,
                    "show-cancel-btn": !0,
                    title: n(s)("noRevenue"),
                    confirmText: n(s)("transferOut")
                }, {
                    content: V(() => [e("div", B_, t(n(s)("tipNoIncomeYetWeatherTransferout")), 1)]),
                    _: 1
                }, 8, ["show", "title", "confirmText"]), $(ze, {
                    show: a.value,
                    "onUpdate:show": M[8] || (M[8] = Q => a.value = Q),
                    round: "",
                    position: "bottom",
                    class: "popupStyle"
                }, {
                    default: V(() => [e("div", L_, t(n(s)("transferOut")), 1), e("div", I_, [e("div", null, t(n(s)("amountUnit")), 1), e("div", null, t(r.value), 1)]), e("div", N_, [$($e, {
                        class: "popup__container-input",
                        maxlength: "6",
                        modelValue: D.value,
                        "onUpdate:modelValue": [M[4] || (M[4] = Q => D.value = Q), le],
                        clearable: "",
                        type: "digit",
                        placeholder: n(s)("plsEnterQuantity"),
                        "clear-icon": "close",
                        "clear-trigger": "always"
                    }, null, 8, ["modelValue", "placeholder"]), e("div", R_, [$(xe, {
                        modelValue: D.value,
                        "onUpdate:modelValue": M[5] || (M[5] = Q => D.value = Q),
                        "bar-height": "7px",
                        "button-size": "18px",
                        min: se.value,
                        max: ne.value
                    }, {
                        button: V(() => [P_]),
                        _: 1
                    }, 8, ["modelValue", "min", "max"]), e("div", D_, [e("div", {
                        onClick: M[6] || (M[6] = Q => D.value = se.value)
                    }, t(se.value), 1), e("div", {
                        onClick: M[7] || (M[7] = Q => D.value = ne.value)
                    }, t(ne.value), 1)])]), e("div", O_, [e("div", null, t(n(s)("amountAvaliable")), 1), e("div", M_, t(n(R)(A.value.balance)), 1)]), e("div", V_, [e("div", null, t(n(s)("amountTransferedOut")), 1), e("div", j_, t(n(R)(T.value)), 1)]), e("div", E_, [e("div", null, t(n(s)("dailyRate")), 1), e("div", U_, t(n(qe)(v.value * 100, 2, 1) + "%"), 1)]), e("div", z_, [e("div", null, t(n(s)("revenue")), 1), e("div", G_, t(n(R)(u.value || 0)), 1)])]), B((o(), l("div", {
                        class: H(["popup__container-sumbit", {
                            disabled: !I.value || T.value > A.value.balance
                        }])
                    }, [z(t(n(s)("transferOut")), 1)], 2)), [
                        [f, {
                            handler: J,
                            wait: 5e3
                        }]
                    ])]),
                    _: 1
                }, 8, ["show"]), $(ze, {
                    show: d.value,
                    "onUpdate:show": M[10] || (M[10] = Q => d.value = Q),
                    round: "",
                    position: "bottom"
                }, {
                    default: V(() => [e("div", q_, t(n(s)("transferIn")), 1), e("div", F_, [e("div", null, t(n(s)("amountUnit")), 1), e("div", null, t(r.value), 1)]), e("div", W_, [$($e, {
                        class: "popup__container-input",
                        maxlength: "6",
                        modelValue: I.value,
                        "onUpdate:modelValue": [M[9] || (M[9] = Q => I.value = Q), le],
                        type: "digit",
                        placeholder: n(s)("phEnter") + n(s)("quantity"),
                        "clear-icon": "close",
                        "clear-trigger": "always"
                    }, {
                        button: V(() => [e("div", {
                            class: "popup__container-allBtn",
                            onClick: ie
                        }, t(n(s)("all")), 1)]),
                        _: 1
                    }, 8, ["modelValue", "placeholder"]), I.value * r.value > P.value ? (o(), l("div", H_, [$(n(p), {
                        class: "StrongBox__container-errorTip"
                    }), z(t(n(s)("amountAvaliableInsufficient")), 1)])) : x("v-if", !0), e("div", X_, [(o(), l(j, null, W(O, (Q, be) => e("div", {
                        key: be,
                        class: H({
                            active: I.value == Q
                        }),
                        onClick: Ne => I.value = Q
                    }, t(Q + "x"), 11, Y_)), 64))]), e("div", Z_, [e("div", null, t(n(s)("amountAvaliable")), 1), e("div", K_, t(n(R)(P.value || 0)), 1)]), g.value > 0 ? (o(), l("div", Q_, [z(t(n(s)("instructionDesc12")), 1), e("span", null, t(n(R)(g.value)), 1), z(t(n(s)("afterTransferIn")), 1)])) : x("v-if", !0), e("div", J_, [e("div", null, t(n(s)("amountTransferedIn")), 1), e("div", ev, t(n(R)(I.value * r.value)), 1)])]), B((o(), l("div", {
                        class: H(["popup__container-sumbit", {
                            disabled: g.value > 0 || !Number(I.value) || I.value * r.value > P.value
                        }])
                    }, [z(t(n(s)("transferIn")), 1)], 2)), [
                        [f, {
                            handler: ue,
                            wait: 5e3
                        }]
                    ])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const nv = G(tv, [
        ["__scopeId", "data-v-002ff529"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/StrongBox/index.vue"]
    ]),
    y2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: nv
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    sv = w => (we("data-v-6243ef37"), w = w(), ke(), w),
    ov = {
        class: "Xg-page"
    },
    av = {
        class: "Xg-info"
    },
    lv = {
        class: "tit"
    },
    iv = {
        class: "tip"
    },
    rv = {
        class: "txt"
    },
    cv = {
        class: "Xg-page-wrap"
    },
    uv = ["src"],
    dv = ["src"],
    _v = {
        class: "tab"
    },
    vv = {
        class: "Xg-list"
    },
    pv = {
        class: "header c-row c-row-between"
    },
    mv = {
        class: "time"
    },
    hv = {
        key: 0,
        class: "red"
    },
    fv = {
        class: "c-row body c-row-middle"
    },
    gv = {
        class: "img"
    },
    yv = {
        class: "info"
    },
    bv = {
        class: "name"
    },
    $v = {
        class: "lab"
    },
    wv = sv(() => e("div", {
        class: "line"
    }, null, -1)),
    kv = {
        class: "numbox"
    },
    Cv = {
        class: "citem"
    },
    Sv = {
        class: "num"
    },
    Tv = {
        class: "txt"
    },
    Av = {
        class: "citem"
    },
    xv = {
        class: "num red"
    },
    Bv = {
        class: "txt"
    },
    Lv = {
        class: "box"
    },
    Iv = {
        class: "Laundry-Con"
    },
    Nv = {
        key: 0,
        class: "Laundry-Con_tip"
    },
    Rv = {
        key: 1,
        class: "Laundry-Con_tip"
    },
    Pv = {
        key: 2
    },
    Dv = q({
        __name: "index",
        setup(w) {
            const {
                getRewardValidityTime: s
            } = We(), {
                goRule: p,
                goStar: _,
                RewardsRecordPageList: h,
                listRef: a,
                DialogShow: d,
                pageQuery: i,
                recivedAll: v,
                isRecived: b,
                onLaundy: u,
                onRecived: c,
                goBack: r,
                onRecivedAll: m
            } = kt(), g = Y();
            return (S, A) => {
                const P = N("NavBar"),
                    D = N("van-button"),
                    T = te("lazy");
                return o(), l("div", ov, [$(P, {
                    title: S.$t("superjackpot"),
                    "left-arrow": "",
                    onClickLeft: n(r)
                }, null, 8, ["title", "onClickLeft"]), e("div", av, [e("div", null, [e("h3", lv, t(S.$t("superjackpot")), 1), e("p", iv, t(S.$t("tip") + S.$t("txt")), 1), e("p", rv, t(S.$t("superJackpotTxt", [n(s)])), 1)])]), e("div", cv, [e("div", {
                    class: H(["receive-all", {
                        "no-receive": n(b)
                    }]),
                    onClick: A[0] || (A[0] = (...k) => n(m) && n(m)(...k))
                }, [n(b) ? (o(), l("img", {
                    key: 0,
                    class: "icon",
                    src: n(pe)("main", "super_no")
                }, null, 8, uv)) : (o(), l("img", {
                    key: 1,
                    class: "icon",
                    src: n(L)("main/superJackpot", "super_1")
                }, null, 8, dv)), e("span", null, t(S.$t("receiveAll")), 1)], 2), e("ul", _v, [e("li", {
                    class: "tab-item",
                    onClick: A[1] || (A[1] = (...k) => n(p) && n(p)(...k))
                }, [e("span", null, t(S.$t("ruleillustrate")), 1)]), e("li", {
                    class: "tab-item",
                    onClick: A[2] || (A[2] = (...k) => n(_) && n(_)(...k))
                }, [e("span", null, t(S.$t("winningstar")), 1)])]), x(" 列表 "), $(tt, {
                    api: n(wn),
                    list: n(h),
                    "onUpdate:list": A[3] || (A[3] = k => Me(h) ? h.value = k : null),
                    "page-query": n(i),
                    "onUpdate:pageQuery": A[4] || (A[4] = k => Me(i) ? i.value = k : null),
                    ref_key: "listRef",
                    ref: a
                }, {
                    content: V(() => [e("div", vv, [(o(!0), l(j, null, W(n(h), (k, O) => (o(), l("div", {
                        class: "item m-b-20",
                        key: O
                    }, [e("div", pv, [e("div", {
                        class: H(["tit", {
                            action: k.isReceive == 0,
                            action2: k.isReceive == 2
                        }])
                    }, t(k.isReceive == 1 ? S.$t("received") : k.isReceive == 2 ? S.$t("rewardExpired") : S.$t("unaccalimed")), 3), e("div", mv, [e("div", null, t(k.createTime), 1), k.expirationFormatTime ? (o(), l("div", hv, [z(t(k.expirationFormatTime), 1), e("span", null, t(S.$t("expiredTime")), 1)])) : x("v-if", !0)])]), e("div", fv, [x(` <img class="img" :src="require('@/assets/images/game/1.png')" /> `), B(e("img", gv, null, 512), [
                        [T, k.imgUrl]
                    ]), e("div", yv, [e("p", bv, t(k.gameName), 1), e("p", $v, [e("span", null, t(k.orderNo), 1)])])]), wv, e("div", kv, [e("div", Cv, [e("p", Sv, t(k.multiple) + "X", 1), e("span", Tv, t(S.$t("Winningmultiple")), 1)]), e("div", Av, [e("p", xv, t(n(R)(k.bonusAmount)), 1), e("span", Bv, t(S.$t("Additionalrewards")), 1)])]), e("div", Lv, [k.isReceive === 0 ? (o(), fe(D, {
                        key: 0,
                        class: "Xg-btn",
                        round: "",
                        type: "primary",
                        block: "",
                        onClick: I => n(c)(k.orderId)
                    }, {
                        default: V(() => [z(t(S.$t("receive")), 1)]),
                        _: 2
                    }, 1032, ["onClick"])) : k.isReceive === 1 ? (o(), fe(D, {
                        key: 1,
                        class: "Xg-btn-received",
                        round: "",
                        type: "primary",
                        block: ""
                    }, {
                        default: V(() => [z(t(S.$t("received")), 1)]),
                        _: 1
                    })) : (o(), fe(D, {
                        key: 2,
                        class: "Xg-btn-expired",
                        round: "",
                        block: ""
                    }, {
                        default: V(() => [z(t(S.$t("rewardExpiredTime")), 1)]),
                        _: 1
                    }))])]))), 128))])]),
                    empty: V(() => [$(Je, null, {
                        text: V(() => [e("p", null, t(S.$t("notAmegaJackpot")), 1)]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["api", "list", "page-query"]), e("div", {
                    class: "go-bet",
                    onClick: A[5] || (A[5] = k => n(g).push("/"))
                }, t(S.$t("goBetting")), 1)]), $(Ue, {
                    show: n(d),
                    "onUpdate:show": A[6] || (A[6] = k => Me(d) ? d.value = k : null),
                    onConfirm: n(u),
                    "show-cancel-btn": !1,
                    confirmText: "OK",
                    title: S.$t("succTip1")
                }, {
                    content: V(() => [e("div", Iv, [n(v).type == -1 ? (o(), l("div", Nv, t(S.$t("succTip2")), 1)) : (o(), l("div", Rv, t(S.$t("receiveAllSuccess")), 1)), n(v).type == 1 ? (o(), l("ul", Pv, [e("li", null, [e("h3", null, t(n(v).orderCount), 1), e("p", null, t(S.$t("awardCount")), 1)]), e("li", null, [e("h3", null, t(n(R)(n(v).totalReceiveAmount)), 1), e("p", null, t(S.$t("awardAmount")), 1)])])) : x("v-if", !0)])]),
                    _: 1
                }, 8, ["show", "onConfirm", "title"])])
            }
        }
    });
const Ov = G(Dv, [
        ["__scopeId", "data-v-6243ef37"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/SuperJackpot/index.vue"]
    ]),
    b2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ov
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Mv = {
        class: "about-container"
    },
    Vv = ["innerHTML"],
    jv = q({
        __name: "index",
        setup(w) {
            const {
                t: s
            } = ae(), p = y(s("pravicyProtocal")), _ = Y(), h = history.state.paramValue, a = y();
            return ce(async () => {
                p.value = s(h === "Protocols" ? "pravicyProtocal" : "riskProtocal");
                const d = h === "Protocols" ? await X(kn()) : await X(Cn());
                d && (a.value = h === "Protocols" ? d.data.protocols : d.data.agreement)
            }), (d, i) => {
                const v = N("NavBar");
                return o(), l("div", Mv, [$(v, {
                    title: p.value,
                    "left-arrow": "",
                    onClickLeft: i[0] || (i[0] = b => n(_).go(-1))
                }, null, 8, ["title"]), e("div", {
                    class: "about-container-content",
                    innerHTML: a.value
                }, null, 8, Vv)])
            }
        }
    });
const Ev = G(jv, [
        ["__scopeId", "data-v-19d4c048"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/About/AboutDetail/index.vue"]
    ]),
    $2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ev
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Uv = {
        class: "customer-container"
    },
    zv = {
        class: "customer-container-header"
    },
    Gv = {
        class: "customer-container-header-belly"
    },
    qv = {
        alt: ""
    },
    Fv = q({
        __name: "index",
        setup(w) {
            const {
                goBack: s,
                onClickUrl: p,
                CollectionList: _,
                getServiceList: h,
                getIcons: a,
                List: d
            } = Bt({
                ServerType: 2
            }), i = history.state.itemId, v = me({
                typeId: i
            });
            return ce(async () => {
                h(v)
            }), (b, u) => {
                const c = N("NavBar"),
                    r = te("lazy");
                return o(), l("div", Uv, [e("div", zv, [$(c, {
                    title: `${b.$t("customerServiceTitle")}`,
                    class: "main",
                    "left-arrow": "",
                    onClickLeft: n(s)
                }, null, 8, ["title", "onClickLeft"]), e("div", Gv, [B(e("img", qv, null, 512), [
                    [r, n(a)("main", "customerBg")]
                ])])]), $(n(d), {
                    list: n(_),
                    onOnClick: n(p)
                }, null, 8, ["list", "onOnClick"])])
            }
        }
    });
const Wv = G(Fv, [
        ["__scopeId", "data-v-78d5a4a8"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/CustomerService/ServiceCollection/index.vue"]
    ]),
    w2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Wv
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Hv = w => (we("data-v-85031541"), w = w(), ke(), w),
    Xv = {
        class: "gverify-container"
    },
    Yv = {
        class: "gverify-container-header"
    },
    Zv = {
        class: "gverify-container-header-belly"
    },
    Kv = {
        alt: ""
    },
    Qv = {
        class: "gverify-container-content"
    },
    Jv = {
        class: "gverify-container-content-item"
    },
    e1 = Hv(() => e("div", {
        class: "gverify-container-content-code"
    }, [e("canvas", {
        id: "qr-code"
    })], -1)),
    t1 = {
        class: "gverify-container-content-item-title"
    },
    n1 = {
        alt: ""
    },
    s1 = {
        class: "gverify-container-content-item-text"
    },
    o1 = {
        class: "gverify-container-content-item-tip"
    },
    a1 = {
        class: "gverify-container-footer"
    },
    l1 = {
        class: "gverify-container-content-item footer-wrapper"
    },
    i1 = {
        class: "gverify-container-content-item-title"
    },
    r1 = {
        alt: ""
    },
    c1 = {
        class: "gverify-container-content-item-steps"
    },
    u1 = {
        alt: ""
    },
    d1 = {
        class: "gverify-container-content-item-steps"
    },
    _1 = {
        class: "gverify-container-content-item-steps"
    },
    v1 = {
        class: "gverify-container-content-item-steps"
    },
    p1 = {
        class: "gverify-container-content-item-steps"
    },
    m1 = {
        key: 0
    },
    h1 = {
        key: 1
    },
    f1 = q({
        __name: "index",
        setup(w) {
            const {
                t: s
            } = ae(), p = Y(), _ = rt(), {
                maxDate: h
            } = vt(0), a = je(h).startOf("day").format("YYYY-MM-DD"), d = _.query.secret, i = ge(() => We().getProjectName), v = `otpauth://totp/${a}?secret=${_.query.secret}&issuer=${i.value}`, b = Number(_.query.type), u = async (A, P) => {
                const D = P == 0 ? Sn({
                        googleCode: A
                    }) : Tn({
                        googleCode: A
                    }),
                    T = await X(D);
                (T == null ? void 0 : T.code) == 0 && p.push({
                    name: "main"
                })
            }, c = () => {
                pt("https://support.google.com/accounts/answer/1066447", 1)
            }, r = () => {
                m.value = !0
            }, m = y(!1), g = A => {
                u(A, b)
            };

            function S() {
                Ot.toCanvas(document.getElementById("qr-code"), v, A => {
                    A && console.error(A)
                })
            }
            return ce(() => {
                S()
            }), (A, P) => {
                const D = N("NavBar"),
                    T = te("lazy");
                return o(), l(j, null, [e("div", Xv, [e("div", Yv, [$(D, {
                    title: n(s)("googleVerify"),
                    class: "main",
                    "left-arrow": "",
                    onClickLeft: P[0] || (P[0] = k => n(p).go(-1))
                }, null, 8, ["title"]), e("div", Zv, [B(e("img", Kv, null, 512), [
                    [T, n(L)("main", "googleVerifyBg")]
                ])])]), e("div", Qv, [e("div", Jv, [e1, e("div", t1, [B(e("img", n1, null, 512), [
                    [T, n(L)("main", "googleKey")]
                ]), e("span", null, t(n(s)("safeKey")), 1)]), e("div", s1, t(n(d)), 1), e("div", {
                    class: "gverify-container-content-item-button",
                    onClick: P[1] || (P[1] = k => n(Ke)(n(d)))
                }, t(n(s)("copyKey")), 1), e("div", o1, t(n(s)("tipSaveKeyProperly")), 1)])]), e("div", a1, [e("div", l1, [e("div", i1, [B(e("img", r1, null, 512), [
                    [T, n(L)("main", "privacyIcon")]
                ]), e("span", null, t(n(s)("bindStep")), 1)]), e("div", c1, " 1." + t(n(s)("tipDownloadGoogleVerify")), 1), e("div", {
                    class: "footer-wrapper-button",
                    onClick: c
                }, [B(e("img", u1, null, 512), [
                    [T, n(L)("main", "gverifyDownload")]
                ]), e("span", null, t(n(s)("downloadGoogleVerify")), 1)]), e("div", d1, " 2." + t(n(s)("tipCopyKeyToBind")), 1), e("div", _1, " 3." + t(n(s)("tipAddNewAccount")), 1), e("div", v1, " 4." + t(n(s)("tipNametheAccountPasteTheKey")), 1), e("div", p1, " 5." + t(n(s)("tipGenerateSuccessCode")), 1)])]), e("div", {
                    class: "gverify-container-button",
                    onClick: r
                }, [n(b) === 0 ? (o(), l("span", m1, t(n(s)("confirmBinding")), 1)) : (o(), l("span", h1, t(n(s)("closeGoogle")), 1))])]), x(" 验证弹窗 "), $(St, {
                    showPopup: m.value,
                    onOnConfirm: g,
                    onOnBack: P[2] || (P[2] = k => m.value = !1)
                }, null, 8, ["showPopup"])], 64)
            }
        }
    });
const g1 = G(f1, [
        ["__scopeId", "data-v-85031541"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/GoogleVerify/BindGoogle/index.vue"]
    ]),
    k2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: g1
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    y1 = {
        class: "container"
    },
    b1 = {
        class: "item"
    },
    $1 = {
        class: "head"
    },
    w1 = {
        class: "name"
    },
    k1 = {
        class: "uid"
    },
    C1 = {
        class: "line"
    },
    S1 = {
        class: "time"
    },
    T1 = {
        class: "line"
    },
    A1 = {
        class: "amount"
    },
    x1 = q({
        __name: "index",
        setup(w) {
            const s = y(!1),
                p = y(!1),
                _ = Y(),
                h = y(1),
                a = y([]),
                d = async () => {
                    const i = await X(An({
                        pageSize: 20,
                        pageNo: h.value
                    }));
                    i.code === 0 ? (a.value.push(...i.data.data), i.data.totalPage <= h.value && (p.value = !0), h.value++) : p.value = !0, s.value = !1
                };
            return (i, v) => {
                const b = N("NavBar"),
                    u = N("van-list");
                return o(), l(j, null, [$(b, {
                    title: i.$t("inviteRecord"),
                    "left-arrow": "",
                    onClickLeft: v[0] || (v[0] = c => n(_).go(-1))
                }, null, 8, ["title"]), e("div", y1, [$(u, {
                    loading: s.value,
                    "onUpdate:loading": v[1] || (v[1] = c => s.value = c),
                    finished: p.value,
                    "finished-text": i.$t("noMoreThere"),
                    onLoad: d
                }, {
                    default: V(() => [(o(!0), l(j, null, W(a.value, c => (o(), l("div", b1, [e("div", $1, [e("span", w1, t(c.userName), 1), z(), e("span", k1, "UID:" + t(c.userID), 1)]), e("div", C1, [z(t(i.$t("registerTime")), 1), e("span", S1, t(c.createTime), 1)]), e("div", T1, [z(t(i.$t("rechageAmount")), 1), e("span", A1, t(n(R)(c.rechargeAmount_All)), 1)])]))), 256))]),
                    _: 1
                }, 8, ["loading", "finished", "finished-text"])])], 64)
            }
        }
    });
const B1 = G(x1, [
        ["__scopeId", "data-v-67e25db3"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/InvitationBonus/Record/index.vue"]
    ]),
    C2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: B1
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    L1 = {
        class: "container"
    },
    I1 = {
        class: "tip"
    },
    N1 = {
        class: "tip"
    },
    R1 = {
        class: "dailySignInRules__container-hero"
    },
    P1 = {
        class: "dailySignInRules__container-hero__wrapper"
    },
    D1 = {
        class: "dailySignInRules__container-hero__wrapper-titlebox"
    },
    O1 = {
        class: "dailySignInRules__container-hero__wrapper-title"
    },
    M1 = {
        class: "dailySignInRules__container-hero__wrapper-title"
    },
    V1 = {
        class: "dailySignInRules__container-hero__wrapper-title"
    },
    j1 = q({
        __name: "index",
        setup(w) {
            const {
                t: s
            } = mt.global, p = Y(), _ = [s("iRule4"), s("iRule5"), s("iRule6"), s("iRule7")], h = y([]), a = async () => {
                const d = await X(Bn());
                h.value = d.data.taskList || []
            };
            return ce(() => {
                a()
            }), (d, i) => {
                const v = N("NavBar");
                return o(), l(j, null, [$(v, {
                    title: d.$t("inviteRule"),
                    "left-arrow": "",
                    onClickLeft: i[0] || (i[0] = b => n(p).go(-1))
                }, null, 8, ["title"]), e("div", L1, [e("div", I1, t(d.$t("iRule1")), 1), e("div", N1, t(d.$t("iRule2")), 1)]), e("div", R1, [e("div", P1, [e("div", D1, [e("div", O1, t(d.$t("iRule3")), 1), e("div", M1, t(d.$t("rechageAmount")), 1), e("div", V1, t(d.$t("winTips5")), 1)]), e("ul", null, [(o(!0), l(j, null, W(h.value, (b, u) => (o(), l("li", {
                    key: u
                }, [e("div", null, t(b.taskPeople + d.$t("people")), 1), e("div", null, t(n(R)(b.rechargeAmount)), 1), e("div", null, t(n(R)(b.taskAmount)), 1)]))), 128))])])]), $(xn, {
                    name: d.$t("rule"),
                    tiplist: _
                }, null, 8, ["name"])], 64)
            }
        }
    });
const E1 = G(j1, [
        ["__scopeId", "data-v-08f58021"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/InvitationBonus/Rule/index.vue"]
    ]),
    S2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: E1
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    U1 = {
        class: "Laundry-Record"
    },
    z1 = {
        style: {
            "background-color": "#f7f8ff"
        }
    },
    G1 = ["src"],
    q1 = {
        class: "list"
    },
    F1 = {
        class: "header"
    },
    W1 = {
        class: ""
    },
    H1 = {
        class: "name"
    },
    X1 = {
        class: "time"
    },
    Y1 = {
        class: "state"
    },
    Z1 = {
        class: "body"
    },
    K1 = {
        class: "left"
    },
    Q1 = {
        class: "imgBox"
    },
    J1 = ["src"],
    ep = {
        class: "right"
    },
    tp = {
        class: "red"
    },
    np = {
        class: "orange"
    },
    sp = q({
        __name: "index",
        setup(w) {
            const {
                t: s
            } = ae(), p = Y(), _ = y(), h = y(null), a = y(0), d = async r => {
                let m = de.gameTabList[a.value].codeType;
                u.value.codeType = m, b.value = !0, i.pageNo = 1, v.list = [], await _.value.resetRefresh()
            }, i = me({
                pageNo: 1,
                pageSize: 10,
                codeType: -1
            }), v = me({
                list: [],
                pageNo: 0,
                totalPage: 0,
                totalCount: 0
            }), b = y(!0), u = y({
                codeType: -1
            });

            function c(r) {
                let m = "";
                return de.gameTabList.map(g => {
                    g.codeType == r && (m = g.name)
                }), m
            }
            return (r, m) => {
                const g = N("NavBar"),
                    S = N("van-sticky");
                return o(), l("div", U1, [$(g, {
                    title: n(s)("laundryRecord"),
                    "left-arrow": "",
                    onClickLeft: m[0] || (m[0] = A => n(p).go(-1))
                }, null, 8, ["title"]), $(S, {
                    "offset-top": 46,
                    container: h.value,
                    class: "bet-container-sticky"
                }, {
                    default: V(() => [e("div", z1, [$(nt, {
                        list: n(de).gameTabList,
                        active: a.value,
                        "onUpdate:active": m[1] || (m[1] = A => a.value = A),
                        tabClassName: "tabs",
                        onOnClickTab: d,
                        activeClassName: "tab_active",
                        ref: "tabRefs",
                        tabItemClassName: "funtab_item"
                    }, {
                        default: V(({
                            item: A,
                            index: P
                        }) => [e("div", {
                            class: H(["tab_item", {
                                tab_active: P === a.value
                            }])
                        }, [e("img", {
                            src: n(L)("AllGames", `${P===a.value?A.img+"Active":A.img}`)
                        }, null, 8, G1), e("span", null, t(A.name), 1)], 2)]),
                        _: 1
                    }, 8, ["list", "active"])])]),
                    _: 1
                }, 8, ["container"]), e("div", q1, [$(Fe, {
                    distance: 300,
                    api: n(Ln),
                    list: v.list,
                    "onUpdate:list": m[2] || (m[2] = A => v.list = A),
                    "page-query": u.value,
                    "onUpdate:pageQuery": m[3] || (m[3] = A => u.value = A),
                    "is-first": b.value,
                    "onUpdate:isFirst": m[4] || (m[4] = A => b.value = A),
                    ref_key: "listRef",
                    ref: _,
                    isAutoLoad: !0
                }, {
                    content: V(() => [(o(!0), l(j, null, W(v.list, (A, P) => (o(), l("div", {
                        class: "item",
                        key: P
                    }, [e("div", F1, [e("div", W1, [e("p", H1, t(c(A.codeType)), 1), e("span", X1, t(A.addTime), 1)]), e("div", Y1, t(n(s)("laundrySuccess")), 1)]), e("div", Z1, [e("div", K1, [e("div", Q1, [e("img", {
                        class: "img",
                        src: n(L)("main", "gameStatsSteps"),
                        alt: ""
                    }, null, 8, J1)]), e("div", null, [e("p", null, t(n(s)("laundryAmount")), 1), e("p", null, t(n(s)("laundryRate")), 1), e("p", null, t(n(s)("rebateAmount")), 1)])]), e("div", ep, [e("p", null, t(A.washVolume), 1), e("p", tp, t(A.washRate) + "%", 1), e("p", np, t(A.rebateAmount), 1)])])]))), 128))]),
                    _: 1
                }, 8, ["api", "list", "page-query", "is-first"])])])
            }
        }
    });
const op = G(sp, [
        ["__scopeId", "data-v-34682eef"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/Laundry/LaundryRecord/index.vue"]
    ]),
    T2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: op
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ap = {
        class: "Laundry-Rule"
    },
    lp = ["innerHTML"],
    ip = q({
        __name: "index",
        setup(w) {
            const {
                t: s
            } = ae(), p = Y(), _ = y();
            return ce(async () => {
                const h = await X(In());
                h && (_.value = h.data.washRules)
            }), (h, a) => {
                const d = N("NavBar");
                return o(), l("div", ap, [$(d, {
                    title: n(s)("laundryRule"),
                    "left-arrow": "",
                    onClickLeft: a[0] || (a[0] = i => n(p).go(-1))
                }, null, 8, ["title"]), e("div", {
                    class: "Laundry-Rule-content",
                    innerHTML: _.value
                }, null, 8, lp)])
            }
        }
    });
const rp = G(ip, [
        ["__scopeId", "data-v-f4ca4591"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/Laundry/LaundryRule/index.vue"]
    ]),
    A2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: rp
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    cp = {
        class: "bind-container"
    },
    up = {
        class: "email-container"
    },
    dp = {
        class: "updateP-container-tips"
    },
    _p = {
        class: "bind-button"
    },
    vp = {
        key: 0,
        class: "Laundry-Con"
    },
    pp = {
        class: "Laundry-Con_tip"
    },
    mp = {
        class: "reward"
    },
    hp = {
        class: "money"
    },
    fp = q({
        __name: "index",
        setup(w) {
            var Z, K, E, U, ue, re;
            const {
                t: s
            } = ae(), p = Y(), _ = Re(), a = Se().getUserInfo, d = y("bindemail"), i = y(!0), v = y(!1), b = y(!1), u = y("");
            u.value = ((Z = a == null ? void 0 : a.verifyMethods) == null ? void 0 : Z.email) != "" ? "updateEmail" : "bindEmail";
            const c = y("");
            c.value = ((K = a == null ? void 0 : a.verifyMethods) == null ? void 0 : K.email) != "" ? s("safetyVerification") : s("bindEmail");
            const r = {
                    email: ""
                },
                m = y("");
            r.email = (E = a == null ? void 0 : a.verifyMethods) == null ? void 0 : E.email;
            const g = y(!1);
            g.value = ((U = a == null ? void 0 : a.verifyMethods) == null ? void 0 : U.email) == "";
            const S = y(!0);
            S.value = ((ue = a == null ? void 0 : a.verifyMethods) == null ? void 0 : ue.email) != "";
            const A = y(!1);
            A.value = ((re = a == null ? void 0 : a.verifyMethods) == null ? void 0 : re.email) == "";
            const P = y("public"),
                D = y("succeed"),
                T = () => {
                    p.go(-1)
                },
                k = le => {
                    r.email = le
                },
                O = async () => {
                    var ie;
                    if (u.value == "bindEmail") {
                        if (!Pe.email1.test(r.email)) return _.setCountEmailDown(0), _e({
                            message: s(De.email),
                            wordBreak: "break-word"
                        })
                    } else if (!Pe.email1.test((ie = a == null ? void 0 : a.verifyMethods) == null ? void 0 : ie.email)) return _.setCountEmailDown(0), _e({
                        message: s(De.email),
                        wordBreak: "break-word"
                    });
                    await X($t({
                        email: r.email,
                        emailType: g.value ? Be.bindEmailMmobile : Be.resetEmailMmobile
                    })) ? Ae(s("sendSuccess")) : _.setCountEmailDown(0)
                },
                I = async () => {
                    if (!Pe.email1.test(r.email)) return _e({
                        message: s(De.email),
                        wordBreak: "break-word"
                    });
                    if (!m.value.trim()) return _e({
                        message: s("noVerifyCodeFound"),
                        wordBreak: "break-word"
                    });
                    await X(Nn({
                        email: r.email,
                        code: m.value,
                        type: Be.resetEmailMmobile
                    })) && (u.value = "bindEmail", c.value = s("bindEmail"), S.value = !1, v.value = !1, g.value = !0, i.value = !1, A.value = !0, m.value = "", r.email = "", _.setCountEmailDown(0)), v.value = !1
                },
                ne = async () => {
                    var ie;
                    if (!Pe.email1.test(r.email)) return _e({
                        message: s(De.email),
                        wordBreak: "break-word"
                    });
                    if (!m.value.trim()) return _e({
                        message: s("noVerifyCodeFound"),
                        wordBreak: "break-word"
                    });
                    await X(Rn({
                        email: r.email,
                        emailvCode: m.value
                    })) && (((ie = a == null ? void 0 : a.verifyMethods) == null ? void 0 : ie.email) != "" ? (Ae(s("rpdsucceed")), p.push({
                        name: "main"
                    })) : b.value = !0)
                },
                se = () => {
                    p.push({
                        name: "main"
                    }), b.value = !1
                };
            return ce(() => {
                _.setCountEmailDown(0)
            }), (le, ie) => {
                const J = N("NavBar");
                return o(), l("div", cp, [$(J, {
                    title: c.value,
                    class: "white",
                    "left-arrow": "",
                    onClickLeft: T
                }, null, 8, ["title"]), e("div", up, [B(e("div", null, [$(Wn, {
                    ref: "email",
                    type: d.value,
                    email: r.email,
                    onChangeN: k
                }, null, 8, ["type", "email"])], 512), [
                    [ee, g.value]
                ]), $(Hn, {
                    value: m.value,
                    "onUpdate:value": ie[0] || (ie[0] = F => m.value = F),
                    isShowVerifyT: i.value,
                    typeP: u.value,
                    sendFunc: O,
                    email: r.email
                }, null, 8, ["value", "isShowVerifyT", "typeP", "email"]), B(e("div", dp, [e("span", null, t(le.$t("tipVerifyCodeRequired")), 1)], 512), [
                    [ee, v.value]
                ]), e("div", _p, [B(e("button", {
                    onClick: I
                }, t(le.$t("nextStep")), 513), [
                    [ee, S.value]
                ]), B(e("button", {
                    onClick: ne
                }, t(le.$t("toBind")), 513), [
                    [ee, A.value]
                ])])]), $(Ct, {
                    show: b.value,
                    "onUpdate:show": ie[1] || (ie[1] = F => b.value = F),
                    onConfirm: se,
                    "show-cancel-btn": !1,
                    confirmText: "confirm",
                    pathname: P.value,
                    picname: D.value,
                    title: le.$t("bindsuccess")
                }, {
                    content: V(() => {
                        var F, ye;
                        return [((F = n(a)) == null ? void 0 : F.bindReward) > 0 ? (o(), l("div", vp, [e("div", pp, [e("div", mp, t(le.$t("award")), 1), e("div", hp, t(n(R)((ye = n(a)) == null ? void 0 : ye.bindReward)), 1)])])) : x("v-if", !0)]
                    }),
                    _: 1
                }, 8, ["show", "pathname", "picname", "title"])])
            }
        }
    });
const gp = G(fp, [
        ["__scopeId", "data-v-eca8202a"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/SettingCenter/BindEmail/index.vue"]
    ]),
    x2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: gp
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    yp = {
        class: "LoginP-container"
    },
    bp = {
        class: "LoginP-container-form"
    },
    $p = {
        class: "LoginP-container-tips"
    },
    wp = {
        class: "LoginP-container-button"
    },
    kp = q({
        __name: "index",
        setup(w) {
            let s = me({
                oldPwd: "",
                newPwd: "",
                confirmNewPwd: ""
            });
            const {
                t: p
            } = ae(), _ = y(!1), h = Y();
            async function a() {
                if (!Pe.passReg3.test(s.newPwd)) return _e({
                    message: p(De.passReg2),
                    wordBreak: "break-word"
                });
                if (s.newPwd !== s.confirmNewPwd) {
                    _.value = !0;
                    return
                } else _.value = !1;
                await X(Pn(s)) && (Ve(p("rpdsucceed")), localStorage.clear(), h.push("/login"))
            }

            function d() {
                h.push({
                    name: "rpwd"
                })
            }
            const {
                isSmSForgetPasswordState: i,
                registerState: v
            } = et();
            return v(), (b, u) => {
                const c = N("NavBar"),
                    r = N("van-icon");
                return o(), l("div", yp, [$(c, {
                    title: b.$t("titleEditPsw"),
                    class: "white",
                    "left-arrow": "",
                    onClickLeft: u[0] || (u[0] = m => n(h).go(-1))
                }, null, 8, ["title"]), e("div", bp, [$(Ze, {
                    value: n(s).oldPwd,
                    "onUpdate:value": u[1] || (u[1] = m => n(s).oldPwd = m),
                    label: b.$t("oldPSW"),
                    maxlength: 32
                }, null, 8, ["value", "label"]), $(Ze, {
                    value: n(s).newPwd,
                    "onUpdate:value": u[2] || (u[2] = m => n(s).newPwd = m),
                    label: b.$t("newPSW")
                }, null, 8, ["value", "label"]), $(Ze, {
                    class: "mgb48",
                    value: n(s).confirmNewPwd,
                    "onUpdate:value": u[3] || (u[3] = m => n(s).confirmNewPwd = m),
                    label: b.$t("confirmPSW")
                }, null, 8, ["value", "label"]), B(e("div", $p, [e("span", null, t(b.$t("tipUnmatchPsw")), 1)], 512), [
                    [ee, _.value]
                ]), x(`
				功能暂时不可用且跳转 重置密码页有bug
			`), n(i) ? (o(), l("div", {
                    key: 0,
                    class: "LoginP-container-remember",
                    onClick: d
                }, [e("span", null, t(b.$t("forgotOldPSW")), 1), $(r, {
                    name: "arrow",
                    color: "var(--colorText-6)"
                })])) : (o(), l("div", {
                    key: 1,
                    class: "LoginP-container-remember",
                    onClick: u[4] || (u[4] = m => n(h).push({
                        name: "CustomerService"
                    }))
                }, [e("span", null, t(b.$t("contactServicer")), 1), $(r, {
                    name: "arrow",
                    color: "var(--colorText-6)"
                })])), e("div", wp, [e("button", {
                    onClick: a
                }, t(b.$t("saveChanges")), 1)])])])
            }
        }
    });
const Cp = G(kp, [
        ["__scopeId", "data-v-5beab1ae"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/SettingCenter/LoginPassword/index.vue"]
    ]),
    B2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Cp
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Sp = {
        class: "updateP-container"
    },
    Tp = {
        class: "updateP-container-tips"
    },
    Ap = {
        class: "updateP-container-button"
    },
    xp = {
        key: 0,
        class: "Laundry-Con"
    },
    Bp = {
        class: "Laundry-Con_tip"
    },
    Lp = {
        class: "reward"
    },
    Ip = {
        class: "money"
    },
    Np = q({
        __name: "index",
        setup(w) {
            var U, ue, re, le, ie;
            const {
                t: s
            } = ae(), p = Y(), _ = Re(), a = Se().getUserInfo, d = y(!1);
            d.value = ((U = a == null ? void 0 : a.verifyMethods) == null ? void 0 : U.mobile) == "";
            const i = y(!1),
                v = y(!1);
            v.value = ((ue = a == null ? void 0 : a.verifyMethods) == null ? void 0 : ue.mobile) != "";
            const b = y(!1);
            b.value = ((re = a == null ? void 0 : a.verifyMethods) == null ? void 0 : re.mobile) == "";
            const u = y(!0),
                c = y(!1),
                r = y(""),
                m = y(!1),
                g = y("");
            g.value = ((le = a == null ? void 0 : a.verifyMethods) == null ? void 0 : le.mobile) != "" ? s("safetyVerification") : s("bindPhone");
            const S = y("");
            S.value = ((ie = a == null ? void 0 : a.verifyMethods) == null ? void 0 : ie.mobile) != "" ? "updatePhone" : "bindPhone";
            const A = y("public"),
                P = y("succeed"),
                D = () => {
                    p.go(-1)
                },
                {
                    isShowSMS: T,
                    registerState: k
                } = et();
            k();
            async function O() {
                var F;
                if (!r.value.trim()) return _e({
                    message: s("noVerifyCodeFound"),
                    wordBreak: "break-word"
                });
                await X(Dn({
                    userName: ((F = a == null ? void 0 : a.verifyMethods) == null ? void 0 : F.mobile) || localStorage.getItem("numberType") + localStorage.getItem("number"),
                    smsvCode: r.value
                })) && (g.value = s("bindPhone"), S.value = "bindPhone", v.value = !1, c.value = !1, d.value = !0, u.value = !1, b.value = !0, r.value = "", I.PhoneNumber = "", _.setCountDown(0)), c.value = !1
            }
            const I = me({
                PhoneNumber: "",
                numberType: localStorage.getItem("numberType")
            });
            async function ne() {
                var F;
                if (!r.value.trim()) return _e({
                    message: s("noVerifyCodeFound"),
                    wordBreak: "break-word"
                });
                if (!On(I.numberType, I.PhoneNumber.trim().length)) return _e({
                    message: s("wrongTel"),
                    wordBreak: "break-word"
                });
                await X(Mn({
                    phone: I.numberType + I.PhoneNumber,
                    smsvCode: r.value
                })) && (((F = a == null ? void 0 : a.verifyMethods) == null ? void 0 : F.mobile) != "" ? (Ae(s("rpdsucceed")), p.push({
                    name: "main"
                })) : i.value = !0)
            }
            const se = J => {
                    I.numberType = J
                },
                Z = J => {
                    I.PhoneNumber = J
                },
                K = async () => {
                    var oe;
                    let J = d.value ? I.numberType.replace("+", "") + I.PhoneNumber : (oe = a == null ? void 0 : a.verifyMethods) == null ? void 0 : oe.mobile;
                    const F = J.length;
                    if (F < 10 || F > 14) return _e({
                        message: s("wrongTel"),
                        wordBreak: "break-word"
                    });
                    if (await X(bt({
                            phone: J,
                            codeType: d.value ? Be.bindEmailMmobile : Be.resetEmailMmobile
                        }))) Ae(s("sendSuccess"));
                    else return -1
                },
                E = () => {
                    p.push({
                        name: "main"
                    }), i.value = !1
                };
            return ce(() => {
                _.setCountDown(0)
            }), (J, F) => {
                const ye = N("NavBar");
                return o(), l("div", Sp, [$(ye, {
                    title: g.value,
                    class: "white",
                    "left-arrow": "",
                    onClickLeft: D
                }, null, 8, ["title"]), B(e("div", null, [$(Xn, {
                    "show-validate": m.value,
                    "onUpdate:showValidate": F[0] || (F[0] = oe => m.value = oe),
                    typeP: S.value,
                    number: I.PhoneNumber,
                    "number-type": I.numberType,
                    onChangeT: se,
                    onChangeN: Z
                }, null, 8, ["show-validate", "typeP", "number", "number-type"])], 512), [
                    [ee, d.value]
                ]), n(T) ? (o(), fe(Qe, {
                    key: 0,
                    value: r.value,
                    "onUpdate:value": F[1] || (F[1] = oe => r.value = oe),
                    typeP: S.value,
                    isShowVerifyT: u.value,
                    sendFunc: K,
                    number: I.PhoneNumber,
                    numberType: I.numberType
                }, null, 8, ["value", "typeP", "isShowVerifyT", "number", "numberType"])) : x("v-if", !0), B(e("div", Tp, [e("span", null, t(J.$t("tipVerifyCodeRequired")), 1)], 512), [
                    [ee, c.value]
                ]), e("div", Ap, [B(e("button", {
                    onClick: O
                }, t(J.$t("nextStep")), 513), [
                    [ee, v.value]
                ]), B(e("button", {
                    onClick: ne
                }, t(J.$t("complete")), 513), [
                    [ee, b.value]
                ])]), $(Ct, {
                    show: i.value,
                    "onUpdate:show": F[2] || (F[2] = oe => i.value = oe),
                    onConfirm: E,
                    "show-cancel-btn": !1,
                    confirmText: "confirm",
                    pathname: A.value,
                    picname: P.value,
                    title: J.$t("bindsuccess")
                }, {
                    content: V(() => {
                        var oe, Ie;
                        return [((oe = n(a)) == null ? void 0 : oe.bindReward) > 0 ? (o(), l("div", xp, [e("div", Bp, [e("div", Lp, t(J.$t("award")), 1), e("div", Ip, t(n(R)((Ie = n(a)) == null ? void 0 : Ie.bindReward)), 1)])])) : x("v-if", !0)]
                    }),
                    _: 1
                }, 8, ["show", "pathname", "picname", "title"])])
            }
        }
    });
const Rp = G(Np, [
        ["__scopeId", "data-v-90d7db2e"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/SettingCenter/UpdatePhone/index.vue"]
    ]),
    L2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Rp
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Pp = {
        class: "StrongBoxAbout__container"
    },
    Dp = {
        class: "StrongBoxAbout__container-dailyRate"
    },
    Op = {
        class: "StrongBoxAbout__container-header income"
    },
    Mp = {
        class: "StrongBoxAbout__container-detail"
    },
    Vp = {
        class: "StrongBoxAbout__container-detail-text"
    },
    jp = {
        class: "StrongBoxAbout__container-detail-text"
    },
    Ep = {
        class: "StrongBoxAbout__container-detail-text"
    },
    Up = {
        class: "StrongBoxAbout__container-header transferIn"
    },
    zp = {
        class: "StrongBoxAbout__container-detail"
    },
    Gp = {
        class: "StrongBoxAbout__container-detail-text"
    },
    qp = {
        class: "StrongBoxAbout__container-detail-container"
    },
    Fp = {
        class: "StrongBoxAbout__container-detail-container-tip"
    },
    Wp = {
        class: "StrongBoxAbout__container-header transferOut"
    },
    Hp = {
        class: "StrongBoxAbout__container-detail"
    },
    Xp = {
        class: "StrongBoxAbout__container-detail-text"
    },
    Yp = {
        class: "StrongBoxAbout__container-detail-container"
    },
    Zp = {
        class: "StrongBoxAbout__container-detail-container-tip red"
    },
    Kp = {
        class: "StrongBoxAbout__container-header safety"
    },
    Qp = {
        class: "StrongBoxAbout__container-detail"
    },
    Jp = {
        class: "StrongBoxAbout__container-detail-text"
    },
    em = {
        class: "StrongBoxAbout__container-detail-text"
    },
    tm = q({
        __name: "index",
        setup(w) {
            const s = Y(),
                p = y(0);

            function _() {
                s.go(-1)
            }
            const h = async () => {
                const a = await X(wt());
                p.value = a.data.dayShareRate
            };
            return ce(() => {
                h()
            }), (a, d) => {
                const i = N("NavBar");
                return o(), l("div", Pp, [$(i, {
                    title: a.$t("titleLearnAboutVault"),
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: _
                }, null, 8, ["title"]), e("div", Dp, t(a.$t("tipMinimumIncome") + (p.value && n(qe)(p.value * 100, 2, 1)) + "%"), 1), e("div", Op, t(a.$t("income")), 1), e("div", Mp, [e("div", Vp, t(a.$t("strongBoxAboutTip")), 1), e("div", jp, t(a.$t("tipEarningsCaculatedEveryMinites")), 1), e("div", Ep, t(a.$t("tipEarningSettledAfterTransferInOrOut")), 1)]), e("div", Up, t(a.$t("transferIn")), 1), e("div", zp, [e("div", Gp, t(a.$t("tipBalanceTransferInUnits")), 1), e("div", qp, [e("div", Fp, t(a.$t("example")), 1), e("div", null, t(a.$t("tipTransferAmountMustBeMultipleOfCopies")), 1)])]), e("div", Wp, t(a.$t("transferOut")), 1), e("div", Hp, [e("div", Xp, t(a.$t("tipTransferAnytimeGuarantedUnderSolidIncomes")), 1), e("div", Yp, [e("div", Zp, t(a.$t("friendlyReminds")), 1), e("div", null, t(a.$t("tipPlsDoNotTransferInOutFrequently")), 1)])]), e("div", Kp, t(a.$t("security")), 1), e("div", Qp, [e("div", Jp, t(a.$t("tipFundSaftyEnsuredBySecurityTeam")), 1), e("div", em, t(a.$t("tipTransferIntoVaultToEnsureSafety")), 1)])])
            }
        }
    });
const nm = G(tm, [
        ["__scopeId", "data-v-7b17e822"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/StrongBox/StrongBoxAbout/index.vue"]
    ]),
    I2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: nm
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    sm = {
        class: "infiniteScroll__loading"
    },
    om = q({
        __name: "InfiniteScroll",
        props: {
            distance: {
                type: Number,
                required: !0
            },
            loading: {
                type: Boolean,
                required: !0
            },
            finished: {
                type: Boolean,
                required: !0
            },
            page: {
                type: Number,
                required: !0
            },
            onArrivedBottom: {
                type: Function,
                required: !0
            }
        },
        setup(w) {
            const s = w,
                p = y(!1),
                _ = y(null),
                {
                    bottom: h
                } = Mt(_);
            return Vt(h, a => {
                const {
                    innerHeight: d
                } = window;
                p.value || a <= d + s.distance && s.page >= 1 && !s.loading && !s.finished && (s.onArrivedBottom(), p.value = !0, setTimeout(() => {
                    p.value = !1
                }, 500))
            }), (a, d) => {
                const i = N("van-loading");
                return o(), l("div", {
                    class: "infiniteScroll",
                    ref_key: "scrollRef",
                    ref: _
                }, [Oe(a.$slots, "content", {}, void 0, !0), Oe(a.$slots, "loading", {}, () => [e("div", sm, [a.loading && !a.finished ? (o(), fe(i, {
                    key: 0,
                    class: "z-50"
                })) : a.finished ? (o(), l("div", {
                    key: 1,
                    ref: "pullTextRef"
                }, t(a.$t("noMoreThere")), 513)) : x("v-if", !0)])], !0)], 512)
            }
        }
    });
const am = G(om, [
        ["__scopeId", "data-v-a2f37f81"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/common/InfiniteScroll.vue"]
    ]),
    lm = {
        class: "StrongBoxRecord__container"
    },
    im = {
        class: "StrongBoxRecord__container-overview"
    },
    rm = {
        class: "StrongBoxRecord__container-overview-detail"
    },
    cm = {
        key: 1
    },
    um = q({
        __name: "index",
        setup(w) {
            const {
                t: s
            } = ae(), p = Y(), _ = y(!1), {
                value: h
            } = _t({
                status: 3
            }), a = y(`${h[0]}  ${s("year")} ${h[1]}  ${s("month")}`), d = y(h), i = y([]), v = y(0), b = y(0), u = y(0), c = y(1), r = y(!1), m = y(!1), g = localStorage.getItem("language");

            function S(k, O) {
                if (k === "year") switch (g) {
                    case "vi":
                        O.text = s("year") + " " + O.text;
                        break;
                    case "en":
                        O.text = s("year") + " " + O.text;
                        break;
                    default:
                        O.text += s("year")
                }
                if (k === "month") switch (g) {
                    case "vi":
                        O.text = s("month") + " " + O.text;
                        break;
                    case "en":
                        O.text = s("month") + " " + O.text;
                        break;
                    default:
                        O.text += s("month")
                }
                return O
            }
            const A = () => {
                    _.value = !1
                },
                P = ({
                    selectedOptions: k
                }) => {
                    _.value = !1;
                    let [{
                        text: O
                    }, {
                        text: I
                    }] = k;
                    I.startsWith("0") && (I = I.replace("0", "")), a.value = O + I, T()
                };

            function D() {
                p.go(-1)
            }
            const T = async () => {
                const k = `${d.value[0]}-${d.value[1]}`,
                    [O, I] = await ht(Vn({
                        month: k,
                        pageNo: c.value,
                        pageSize: 20
                    }));
                I && (i.value = I.list, v.value = I.extend2, b.value = I.extend3, u.value = I.extend1, m.value = !1, c.value >= I.totalPage ? r.value = !0 : c.value++)
            };
            return ce(async () => {
                T()
            }), (k, O) => {
                const I = N("NavBar"),
                    ne = N("van-date-picker"),
                    se = N("van-popup"),
                    Z = te("lazy");
                return o(), l("div", lm, [$(I, {
                    title: n(s)("vaultRecords"),
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: D
                }, null, 8, ["title"]), e("div", im, [e("div", {
                    class: "StrongBoxRecord__container-overview-date",
                    onClick: O[0] || (O[0] = K => _.value = !0)
                }, [z(t(a.value) + " ", 1), B(e("img", null, null, 512), [
                    [Z, n(pe)("main", "dropDown")]
                ])]), e("div", rm, [e("div", null, [e("div", null, t(n(Ye)(v.value || 0)), 1), e("div", null, t(n(s)("transferIn")), 1)]), e("div", null, [e("div", null, t(n(Ye)(b.value || 0)), 1), e("div", null, t(n(s)("transferOut")), 1)]), e("div", null, [e("div", null, t(n(Ye)(u.value || 0)), 1), e("div", null, t(n(s)("income")), 1)])])]), e("div", {
                    class: H(["StrongBoxRecord__container-detailList", {
                        empty: !i.value.length
                    }])
                }, [i.value.length ? (o(), l(j, {
                    key: 0
                }, [i.value.length > 0 ? (o(), fe(am, {
                    key: 0,
                    class: "sysMessage__container-msgWrapper",
                    distance: 100,
                    "on-arrived-bottom": T,
                    loading: m.value,
                    finished: r.value,
                    page: c.value
                }, {
                    content: V(() => [(o(!0), l(j, null, W(i.value, (K, E) => (o(), fe(Lt, {
                        class: "StrongBoxRecord__container-detailList-item",
                        key: E,
                        detail: K
                    }, null, 8, ["detail"]))), 128))]),
                    _: 1
                }, 8, ["loading", "finished", "page"])) : x("v-if", !0)], 64)) : (o(), l("div", cm, [$(Je)]))], 2), $(se, {
                    show: _.value,
                    "onUpdate:show": O[2] || (O[2] = K => _.value = K),
                    round: "",
                    position: "bottom"
                }, {
                    default: V(() => [$(ne, {
                        modelValue: d.value,
                        "onUpdate:modelValue": O[1] || (O[1] = K => d.value = K),
                        title: n(s)("pickDate"),
                        "columns-type": ["year", "month"],
                        formatter: S,
                        onCancel: A,
                        onConfirm: P
                    }, null, 8, ["modelValue", "title"])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const dm = G(um, [
        ["__scopeId", "data-v-566f6513"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/StrongBox/StrongBoxRecord/index.vue"]
    ]),
    N2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: dm
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    st = w => (we("data-v-bc9939e5"), w = w(), ke(), w),
    _m = {
        class: "jackpot-rule"
    },
    vm = {
        class: "rule-bannerMain"
    },
    pm = {
        class: "rule-content"
    },
    mm = {
        class: "rule-content-top"
    },
    hm = {
        class: "rule-content-top-right"
    },
    fm = {
        class: "rule-content-tip"
    },
    gm = st(() => e("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "36",
        height: "36",
        viewBox: "0 0 36 36",
        fill: "none"
    }, [e("path", {
        d: "M35.2336 29.5075L21.1223 5.06815C19.3963 2.08015 16.5755 2.08015 14.8499 5.06815L0.738497 29.5075C-0.987066 32.4986 0.424628 34.9385 3.87335 34.9385H32.0986C35.5475 34.9385 36.9577 32.4984 35.2336 29.5075ZM16.0479 12.0026C16.555 11.4543 17.1997 11.1801 17.9859 11.1801C18.7726 11.1801 19.4167 11.4514 19.9243 11.9916C20.4286 12.533 20.6807 13.2101 20.6807 14.0242C20.6807 14.7247 19.628 19.8758 19.2769 23.6232H16.7414C16.4335 19.8758 15.2912 14.7247 15.2912 14.0242C15.2913 13.2224 15.5438 12.5481 16.0479 12.0026ZM19.8888 29.8216C19.3554 30.341 18.7207 30.5999 17.9861 30.5999C17.2516 30.5999 16.6168 30.341 16.0835 29.8216C15.5517 29.3033 15.2873 28.6756 15.2873 27.9383C15.2873 27.2049 15.5517 26.5704 16.0835 26.0386C16.6168 25.5066 17.2516 25.2406 17.9861 25.2406C18.7207 25.2406 19.3554 25.5066 19.8888 26.0386C20.4203 26.5704 20.6852 27.2049 20.6852 27.9383C20.6852 28.6756 20.4203 29.3033 19.8888 29.8216Z",
        fill: "white"
    })], -1)),
    ym = {
        class: "jackpot-rule-wrap"
    },
    bm = {
        class: "title"
    },
    $m = st(() => e("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none"
    }, [e("path", {
        d: "M30.9497 20.3955C36.0101 20.3955 39.4337 22.2327 39.5897 24.6699L39.5945 24.8451V35.9739C39.5357 38.4795 36.1085 40.3683 30.9497 40.3683C25.9001 40.3683 22.4777 38.5275 22.3205 36.0939L22.3145 35.9199V24.8439C22.3145 22.3239 25.7777 20.3955 30.9497 20.3955ZM25.1177 33.7587V35.9187C25.1177 36.5307 27.7061 37.5807 30.9497 37.5807C34.0889 37.5807 36.6233 36.5955 36.7793 35.9799L36.7865 35.9199V33.7623L36.6365 33.8343C35.2841 34.4343 33.5225 34.7763 31.4369 34.8219L30.9497 34.8267C28.6877 34.8267 26.7581 34.4751 25.2809 33.8331L25.1177 33.7587ZM25.1177 28.2063V30.3783C25.1177 30.9927 27.7037 32.0427 30.9497 32.0427C34.0901 32.0463 36.6233 31.0587 36.7793 30.4383L36.7865 30.3783V28.2075L36.6281 28.2831C35.2601 28.8831 33.4961 29.2287 31.4321 29.2743L30.9497 29.2803C28.6913 29.2803 26.7617 28.9263 25.2821 28.2819L25.1177 28.2063ZM30.9497 23.1783C27.7073 23.1783 25.1177 24.2319 25.1177 24.8451C25.1177 25.4559 27.7061 26.5059 30.9497 26.5059C34.1969 26.5059 36.7865 25.4583 36.7865 24.8451C36.7865 24.2295 34.1993 23.1783 30.9497 23.1783Z"
    }), e("path", {
        d: "M21.0698 7.50098C27.8307 7.50098 33.5211 9.85058 33.7299 13.4458L33.7346 13.651V17.8714C33.7346 18.6418 33.1059 19.2658 32.3307 19.2658C31.6082 19.2658 31.0106 18.7222 30.935 18.0238L30.9266 17.8714V17.6218L30.7994 17.6962C28.6311 18.9082 25.4403 19.6522 22.085 19.777L21.5547 19.7914L21.0698 19.7962C17.4927 19.7962 14.0307 19.0918 11.6858 17.8402L11.3582 17.6578L11.2466 17.5906V22.2526C11.2466 23.6146 14.6906 25.231 19.3106 25.5562L19.6778 25.579L20.0402 25.5958C20.5394 25.615 20.9907 25.897 21.2234 26.3362C21.4574 26.7766 21.437 27.3082 21.1694 27.7282C20.9018 28.1482 20.4303 28.3942 19.931 28.375C16.8182 28.2586 13.859 27.5974 11.7387 26.521L11.3738 26.3266L11.2274 26.2426V30.9022C11.2274 32.2642 14.6726 33.8806 19.2927 34.2058L19.6598 34.2286L20.0222 34.2454C20.5214 34.267 20.9714 34.5514 21.203 34.9918C21.4346 35.4322 21.4118 35.9638 21.143 36.3826C21.0099 36.5887 20.8251 36.7564 20.6069 36.8688C20.3888 36.9812 20.145 37.0345 19.8999 37.0234C13.5555 36.7294 8.60785 34.4686 8.41225 31.0954L8.40625 30.8878V13.651C8.40625 9.93338 14.1734 7.50098 21.0698 7.50098ZM21.0698 10.2898C15.5703 10.2898 11.2094 12.085 11.2094 13.6414C11.2094 15.1978 15.587 17.0026 21.0698 17.0026C26.5562 17.0026 30.9266 15.205 30.9266 13.651C30.9266 12.091 26.567 10.2898 21.0698 10.2898Z"
    })], -1)),
    wm = {
        class: "table-container"
    },
    km = {
        class: "table-title"
    },
    Cm = {
        class: "jackpot-rule-owener"
    },
    Sm = st(() => e("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "21",
        height: "24",
        viewBox: "0 0 21 24",
        fill: "none"
    }, [e("path", {
        d: "M20 10.2679C21.3333 11.0378 21.3333 12.9623 20 13.7321L3.5 23.2583C2.16666 24.0281 0.499999 23.0659 0.499999 21.5263L0.5 2.47372C0.5 0.934117 2.16667 -0.0281317 3.5 0.741669L20 10.2679Z",
        fill: "currentColor"
    })], -1)),
    Tm = it('<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-bc9939e5><g id="icon" data-v-bc9939e5><g id="Vector" data-v-bc9939e5><path fill-rule="evenodd" clip-rule="evenodd" d="M8.60575 36.9871C5.31838 33.3788 3.31849 28.615 3.31849 23.3918C3.31849 12.1276 12.615 2.99609 24.0827 2.99609C35.5505 2.99609 44.847 12.1276 44.847 23.3918C44.847 31.3565 40.1975 38.252 33.4205 41.6097C29.2741 43.7714 24.5438 44.9961 19.5224 44.9961C13.3697 44.9961 7.65397 43.1575 2.91406 40.0092C2.91406 40.0092 6.09264 39.6625 8.60493 36.9879L8.60575 36.9871ZM33.8368 33.4859C39.2088 28.1141 39.2088 19.4046 33.8368 14.0327C31.3458 11.5418 28.1372 10.2067 24.8765 10.026C24.7781 7.57955 26.095 5.92657 26.1014 5.91851L26.1001 5.91877L26.1011 5.91747C22.3535 6.64141 18.7749 8.45446 15.873 11.3564C13.6475 13.5818 12.0629 16.2053 11.1182 18.9975C11.2565 18.6313 11.4107 18.2697 11.5808 17.9139C11.385 18.4132 11.2081 18.9234 11.0481 19.4454C9.47482 24.2213 10.5853 29.6877 14.3835 33.4859C19.7555 38.8579 28.465 38.8579 33.8368 33.4859Z" fill="var(--whiteBg)" data-v-bc9939e5></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.127 22.3454V25.1926C17.127 26.3288 18.048 27.2498 19.1843 27.2498C20.3205 27.2498 21.2414 26.3288 21.2414 25.1926V22.3454C21.2414 21.2094 20.3205 20.2881 19.1843 20.2881C18.048 20.2881 17.127 21.2094 17.127 22.3454Z" fill="var(--whiteBg)" data-v-bc9939e5></path><path fill-rule="evenodd" clip-rule="evenodd" d="M27.3096 22.3454V25.1926C27.3096 26.3288 28.2307 27.2498 29.3668 27.2498C30.503 27.2498 31.4241 26.3288 31.4241 25.1926V22.3454C31.4241 21.2094 30.503 20.2881 29.3668 20.2881C28.2307 20.2881 27.3096 21.2094 27.3096 22.3454Z" fill="var(--whiteBg)" data-v-bc9939e5></path></g></g></svg>', 1),
    Am = q({
        __name: "index",
        setup(w) {
            const s = Y(),
                {
                    getRuleList: p,
                    ruleList: _,
                    gotoCustom: h
                } = kt(),
                a = sessionStorage.getItem("dollarSign"),
                d = i => {
                    const [v, b] = i.split("-");
                    return `${v}X-${b}X`
                };
            return ce(() => p()), (i, v) => {
                const b = N("NavBar");
                return o(), l("div", _m, [$(b, {
                    title: i.$t("ruleillustrate"),
                    "left-arrow": "",
                    onClickLeft: v[0] || (v[0] = u => n(s).go(-1))
                }, null, 8, ["title"]), e("div", vm, [e("div", pm, [e("div", mm, [e("div", hm, [e("h3", null, t(i.$t("superjackpot")), 1), e("p", null, t(i.$t("ruleillustrate1")), 1)])]), e("div", fm, [gm, e("p", null, t(i.$t("ruleillustrate2")), 1)])])]), e("div", ym, [e("div", bm, [$m, z(" " + t(i.$t("winTips5")), 1)]), e("div", wm, [e("div", km, [e("div", null, t(i.$t("winningrate")), 1), e("div", null, t(i.$t("betAmounts")), 1), e("div", null, t(i.$t("winTips5")), 1)]), (o(!0), l(j, null, W(n(_), (u, c) => (o(), l("div", {
                    class: "table-content",
                    key: c
                }, [e("div", null, t(d(u.multipleName)), 1), e("div", null, t(n(a)) + t(u.betAmountName.split("-")[0] + "-" + n(a) + u.betAmountName.split("-")[1]), 1), e("div", null, t(n(R)(u.awardAmount)), 1)]))), 128))]), e("div", Cm, [Sm, z(" " + t(i.$t("ruleillustaate3")), 1)]), e("div", {
                    class: "jackpot-rule-custom",
                    onClick: v[1] || (v[1] = (...u) => n(h) && n(h)(...u))
                }, [x(` <img :src="getIconsPublic('svg', 'serverIcon', 'svg')"> `), Tm, z(" " + t(i.$t("contactServicer")), 1)])])])
            }
        }
    });
const xm = G(Am, [
        ["__scopeId", "data-v-bc9939e5"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/SuperJackpot/rule/index.vue"]
    ]),
    R2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: xm
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Bm = w => (we("data-v-7c5c25a2"), w = w(), ke(), w),
    Lm = {
        class: "jackpot-star"
    },
    Im = {
        class: "jackpot-star-list"
    },
    Nm = {
        class: "starheader"
    },
    Rm = ["data-img"],
    Pm = {
        class: "nickname"
    },
    Dm = Bm(() => e("div", {
        class: "solidline"
    }, null, -1)),
    Om = {
        class: "starcontent"
    },
    Mm = {
        class: "rowcontent"
    },
    Vm = {
        class: "label"
    },
    jm = {
        class: "name"
    },
    Em = {
        class: "rowcontent"
    },
    Um = {
        class: "label"
    },
    zm = {
        class: "multiple"
    },
    Gm = {
        class: "rowcontent"
    },
    qm = {
        class: "label"
    },
    Fm = {
        class: "money"
    },
    Wm = {
        class: "rowcontent"
    },
    Hm = {
        class: "label"
    },
    Xm = {
        class: "time"
    },
    Ym = q({
        __name: "index",
        setup(w) {
            const s = Y(),
                p = y([]),
                _ = me({
                    pageSize: 10,
                    isAll: !0
                });
            return (h, a) => {
                const d = N("NavBar"),
                    i = te("lazy");
                return o(), l("div", Lm, [$(d, {
                    title: h.$t("winningstar"),
                    "left-arrow": "",
                    onClickLeft: a[0] || (a[0] = v => n(s).go(-1))
                }, null, 8, ["title"]), $(tt, {
                    api: n(En),
                    list: p.value,
                    "onUpdate:list": a[1] || (a[1] = v => p.value = v),
                    "page-query": _,
                    "onUpdate:pageQuery": a[2] || (a[2] = v => _ = v)
                }, {
                    content: V(() => [e("div", Im, [(o(!0), l(j, null, W(p.value, (v, b) => (o(), l("div", {
                        class: "star-item",
                        key: b
                    }, [e("div", Nm, [B(e("img", {
                        "data-img": n(pe)("main/Avatar", "1")
                    }, null, 8, Rm), [
                        [i, n(pe)("main/Avatar", v.userPhoto)]
                    ]), e("div", Pm, t(n(jn)(v.userName)), 1)]), Dm, e("div", Om, [e("div", Mm, [e("div", Vm, t(h.$t("gamename")), 1), e("div", jm, t(v.gameName), 1)]), e("div", Em, [e("div", Um, t(h.$t("Winningmultiple")), 1), e("div", zm, t(v.multiple + "X"), 1)]), e("div", Gm, [e("div", qm, t(h.$t("winTips5")), 1), e("div", Fm, t(n(R)(v.bonusAmount)), 1)]), e("div", Wm, [e("div", Hm, t(h.$t("winningtime")), 1), e("div", Xm, t(v.createTime), 1)])])]))), 128))])]),
                    _: 1
                }, 8, ["api", "list", "page-query"])])
            }
        }
    });
const Zm = G(Ym, [
        ["__scopeId", "data-v-7c5c25a2"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/main/SuperJackpot/star/index.vue"]
    ]),
    P2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Zm
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    T2 as A, A2 as B, x2 as C, B2 as D, L2 as E, I2 as F, N2 as G, R2 as H, P2 as I, n2 as a, s2 as b, o2 as c, a2 as d, l2 as e, i2 as f, r2 as g, c2 as h, t2 as i, u2 as j, d2 as k, _2 as l, v2 as m, p2 as n, m2 as o, h2 as p, f2 as q, g2 as r, y2 as s, b2 as t, Bt as u, $2 as v, w2 as w, k2 as x, C2 as y, S2 as z
};