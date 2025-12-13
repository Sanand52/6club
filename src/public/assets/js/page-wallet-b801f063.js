import {
    V as ie,
    F as V,
    G as be,
    K as ye,
    r as C,
    w as ge,
    a0 as x,
    X as i,
    Y as e,
    a4 as S,
    D as a,
    _ as t,
    $ as f,
    B as Ye,
    a2 as de,
    a3 as $e,
    W as n,
    a7 as ae,
    Z as ut,
    aj as Bt,
    ad as Ae,
    ae as Re,
    E as Ne,
    a5 as J,
    J as xe,
    a8 as he,
    am as Se,
    a6 as H,
    C as je,
    I as lt,
    k as _e,
    v as ra,
    S as ca,
    aq as gt,
    aP as ln,
    aO as on,
    z as $t,
    ac as Ie,
    a1 as ze,
    ai as vt,
    aB as Ze,
    ab as rn,
    m as Ut,
    as as da,
    M as tt,
    a9 as ua,
    aa as Ft,
    x as cn,
    a_ as dn,
    a$ as Et
} from "./modules-3ee1a0d5.js";
import {
    G as Wt,
    a as He,
    b5 as at,
    A as ne,
    cz as un,
    cA as vn,
    b7 as _t,
    h as ue,
    x as ve,
    g as F,
    _ as re,
    bc as Xe,
    bd as De,
    M as ke,
    D as Fe,
    cB as _n,
    cC as zt,
    cD as va,
    cE as pn,
    S as We,
    c as hn,
    d as mn,
    cF as fn,
    cG as wn,
    cH as yn,
    bh as gn,
    bi as $n,
    aO as bn,
    Q as _a,
    cI as kn,
    cJ as Cn,
    cK as Tn,
    cL as Sn,
    cM as In,
    cN as Nn,
    cO as sa,
    cP as An,
    cQ as Rn,
    cR as Dn,
    cS as Un,
    a4 as bt,
    cT as Bn,
    cU as Wn,
    cV as pa,
    cW as ha,
    cX as On,
    cy as Kt,
    cr as ma,
    b as kt,
    cY as Ht,
    O as pt,
    L as Gt,
    ba as Pn,
    v as Ln,
    cZ as Mn,
    c_ as Vn,
    c$ as qn,
    f as ot,
    d0 as jn,
    d1 as fa,
    d2 as nt,
    u as Ot,
    d3 as En,
    d4 as wa,
    N as Hn,
    c4 as Dt,
    by as xn,
    d5 as la,
    a5 as Fn,
    d6 as zn,
    d7 as ht,
    cp as mt,
    aY as Ee,
    d8 as Kn,
    b$ as Pt,
    d9 as Qt,
    da as Gn,
    db as Qn,
    dc as Zn,
    a_ as Yn,
    dd as Xn,
    de as Jn,
    df as es,
    dg as ts,
    dh as ya,
    di as as,
    dj as ns,
    dk as ss,
    dl as ls,
    dm as os
} from "./page-activity-b0cc3a5b.js";
import {
    N as is,
    C as ga,
    v as $a,
    a as ba
} from "./page-home-d40a6f97.js";
import {
    P as rs
} from "./page-login-95ed0718.js";
import {
    u as it,
    S as rt
} from "./page-test-b1b334d3.js";
import {
    S as cs
} from "./page-promotion-729bfa41.js";
const ds = {
        class: "wallet-container"
    },
    us = {
        class: "wallet-container-header"
    },
    vs = {
        class: "wallet-container-header-belly"
    },
    _s = ["src"],
    ps = {
        key: 0
    },
    hs = {
        class: "total"
    },
    ms = {
        class: "total"
    },
    fs = {
        class: "wallet-container-content"
    },
    ws = {
        class: "container"
    },
    ys = {
        class: "progressBars"
    },
    gs = {
        class: "progressBarsL"
    },
    $s = {
        class: "progressBarsR"
    },
    bs = {
        class: "recycleBtnD"
    },
    ks = {
        key: 1,
        class: "recycleBtn disable"
    },
    Cs = {
        class: "userDetail"
    },
    Ts = ["onClick"],
    Ss = {
        class: "imgD"
    },
    Is = ["src"],
    Ns = {
        key: 0,
        class: "gameList"
    },
    As = {
        class: "money"
    },
    Rs = {
        key: 1,
        class: "gameList"
    },
    Ds = ie({
        __name: "index",
        setup(b) {
            const s = Wt(),
                c = V(() => s.userInfo),
                r = _t(),
                {
                    t: o
                } = be(),
                l = ye(),
                {
                    setLoading: d
                } = He(),
                h = at(),
                w = {
                    recharge: {
                        title: o("recharge"),
                        icon: "rechargeIcon",
                        link: "Recharge"
                    },
                    withdraw: {
                        title: o("withdraw"),
                        icon: "widthdrawBlue",
                        link: "Withdraw"
                    },
                    rechargeHistory: {
                        title: o("rechargeRecords"),
                        icon: "rechargeHistory",
                        link: "RechargeHistory"
                    },
                    withdrawHistory: {
                        title: o("withdrawRecords"),
                        icon: "withdrawHistory",
                        link: "WithdrawHistory"
                    }
                };

            function u(j) {
                j === "RechargeHistory" && r.emit("changeKeepAliveKey"), l.push({
                    name: j
                })
            }
            let _ = C([]),
                $ = 0,
                v = 0,
                A = 0,
                g = "0%",
                U = 0,
                B = 0,
                T = "0%";
            const m = new Date().getTime() / 1e3,
                k = C(0),
                P = C(0),
                I = C(0);
            async function O() {
                d(!0);
                const j = await ne(un());
                j && (h.setTimestampLast(m), h.setAllwallets(j == null ? void 0 : j.data), Z(j == null ? void 0 : j.data)), d(!1)
            }
            async function q() {
                if (I.value) return;
                I.value = 5;
                const j = await ne(vn());
                j && ($ = j.data.amount), R()
            }
            const R = async () => {
                if (I.value == 0) {
                    d(!0), await O(), d(!1);
                    return
                }
                setTimeout(() => {
                    I.value -= 1, R()
                }, 1e3)
            };

            function Z(j) {
                if (!j) return;
                c.value.isShowWalletTotalCT == "1" && (k.value = j.totalWithdraw || 0, P.value = j.totalRecharge || 0), _.value = j.thidGameBalanceList || [];
                let N = j.thidGameBalanceList || [];
                if (v = 0, U = 0, N)
                    for (var y of N) y.vendorCode === "Lottery" ? v += y.balance : U += y.balance;
                $ = v + U, $ > 0 ? (A = Math.round(v / $ * 1e4) / 100, B = Math.round(U / $ * 1e4) / 100, g = A + "%", T = B + "%") : (A = 0, B = 0)
            }
            ge(async () => {
                h.getTimestampLast == 0 || m - h.getTimestampLast >= 6 ? await O() : Z(h.getAllwallets)
            });

            function M(j) {
                return `background-image: url(${F("wallet",j)})`
            }
            return (j, N) => {
                const y = x("NavBar"),
                    E = x("van-circle");
                return n(), i("div", ds, [e("div", us, [S(y, {
                    title: a(o)("wallet"),
                    class: "main",
                    "left-arrow": "",
                    onClickLeft: N[0] || (N[0] = ee => a(l).go(-1))
                }, null, 8, ["title"]), e("div", vs, [e("img", {
                    src: a(ue)("wallet", "wallets"),
                    alt: ""
                }, null, 8, _s), e("div", null, t(a(ve)(a($))), 1), e("span", null, t(a(o)("totalBalance")), 1), c.value.isShowWalletTotalCT == "1" ? (n(), i("div", ps, [e("div", null, [e("p", hs, t(k.value), 1), e("p", null, t(a(o)("totalWithdraw")), 1)]), e("div", null, [e("p", ms, t(P.value), 1), e("p", null, t(a(o)("totalRechargeAmount")), 1)])])) : f("v-if", !0)])]), e("div", fs, [e("div", ws, [e("div", ys, [e("div", gs, [S(E, {
                    "current-rate": a(A),
                    "onUpdate:currentRate": N[1] || (N[1] = ee => Ye(A) ? A.value = ee : A = ee),
                    speed: 100,
                    text: a(g),
                    "stroke-width": "100",
                    "stroke-linecap": "butt"
                }, null, 8, ["current-rate", "text"]), e("h3", null, t(a(ve)(a(v))), 1), e("span", null, t(a(o)("mainWallet")), 1)]), e("div", $s, [S(E, {
                    "current-rate": a(B),
                    "onUpdate:currentRate": N[2] || (N[2] = ee => Ye(B) ? B.value = ee : B = ee),
                    speed: 100,
                    text: a(T),
                    "stroke-width": "100",
                    "stroke-linecap": "butt"
                }, null, 8, ["current-rate", "text"]), e("h3", null, t(a(ve)(a(U))), 1), e("span", null, t(a(o)("thirdPartyWallet")), 1)])]), e("div", bs, [I.value == 0 ? (n(), i("button", {
                    key: 0,
                    class: "recycleBtn",
                    onClick: q
                }, t(a(o)("oneClickRecovery")), 1)) : (n(), i("button", ks, t(a(o)("recycling")) + " " + t(I.value), 1))]), e("div", Cs, [(n(), i(de, null, $e(w, (ee, pe) => e("div", {
                    key: pe,
                    onClick: G => u(ee.link)
                }, [e("div", Ss, [e("img", {
                    src: a(F)("wallet", ee.icon)
                }, null, 8, Is)]), e("span", null, t(ee.title), 1)], 8, Ts)), 64))])]), a(_) ? (n(), i("div", Ns, [(n(!0), i(de, null, $e(a(_), (ee, pe) => (n(), i("div", {
                    class: ae(["box", ee.balance > 0 ? "select" : ""]),
                    key: pe,
                    style: ut(ee.balance <= 0 ? M(ee.vendorCode) : "")
                }, [e("h3", As, t(a(ve)(ee.balance, " ")), 1), e("span", null, t(ee.vendorCode), 1)], 6))), 128))])) : (n(), i("div", Rs, [e("div", null, t(a(o)("noData")), 1)]))])])
            }
        }
    });
const Us = re(Ds, [
        ["__scopeId", "data-v-0dabd3fc"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/index.vue"]
    ]),
    J2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Us
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ct = b => (Ae("data-v-63c604a3"), b = b(), Re(), b),
    Bs = {
        class: "WHD__container"
    },
    Ws = ["src"],
    Os = {
        class: "WHD__container-body"
    },
    Ps = {
        class: "container"
    },
    Ls = {
        class: "top ar-1px-b"
    },
    Ms = ["src"],
    Vs = ct(() => e("span", null, "Bank Card 充值", -1)),
    qs = Bt('<div class="item" data-v-63c604a3><div data-v-63c604a3><span data-v-63c604a3>订单金额</span><span class="yellow" data-v-63c604a3>$8888.88</span></div><div data-v-63c604a3><span data-v-63c604a3>扣除金额</span><span class="black" data-v-63c604a3>$8888.88</span></div><div data-v-63c604a3><span data-v-63c604a3>到账金额</span><span class="black" data-v-63c604a3>$8888.88</span></div><div data-v-63c604a3><span data-v-63c604a3>订单时间</span><span data-v-63c604a3>2022-06-01</span></div></div>', 1),
    js = {
        class: "mImg"
    },
    Es = ["src"],
    Hs = {
        class: "item"
    },
    xs = ct(() => e("span", null, "UTR", -1)),
    Fs = ct(() => e("span", null, "202246892345", -1)),
    zs = ["src"],
    Ks = ct(() => e("span", null, "订单号", -1)),
    Gs = ct(() => e("span", null, "2022102518543345000113", -1)),
    Qs = ["src"],
    Zs = ct(() => e("span", null, "支付时间", -1)),
    Ys = ct(() => e("span", null, "2022-06-20 15：15：16", -1)),
    Xs = ["src"],
    Js = Bt('<div class="containerB" data-v-63c604a3><div class="top ar-1px-b" data-v-63c604a3><span data-v-63c604a3>银行名称</span></div><div class="item" data-v-63c604a3><div data-v-63c604a3><span class="red" data-v-63c604a3>Account Name</span><span data-v-63c604a3>SAWARN TELECOM</span></div><div data-v-63c604a3><span class="red" data-v-63c604a3>Bank Number</span><span data-v-63c604a3>0005123100000315</span></div><div data-v-63c604a3><span class="red" data-v-63c604a3>Order Number</span><span data-v-63c604a3>2022102518543345000113</span></div></div></div>', 1),
    el = ie({
        __name: "index",
        setup(b) {
            const s = ye();

            function c() {
                s.back()
            }
            const r = history.state.paramValue || 1;
            return (o, l) => {
                const d = x("NavBar");
                return n(), i("div", Bs, [S(d, {
                    title: "",
                    classN: `bg${a(r)}`,
                    "left-arrow": "",
                    onClickLeft: c
                }, null, 8, ["classN"]), e("div", {
                    class: ae(["WHD__container-header", `bg${a(r)}`])
                }, [e("div", null, [e("h1", null, t(o.$t(a(Xe)(a(De).RechargeState, a(r)))), 1), e("span", null, t(o.$t(a(Xe)(a(De).RStateCorrelationT, a(r)))), 1)]), e("img", {
                    src: a(F)("wallet/recharge/rechargeRecords/state", `${a(r)}`)
                }, null, 8, Ws)], 2), e("div", Os, [e("div", Ps, [e("div", Ls, [e("img", {
                    src: a(F)("wallet/withdraw/withdrawHistory", "bc")
                }, null, 8, Ms), Vs]), qs, e("div", js, [e("img", {
                    src: a(F)("wallet/withdraw/withdrawHistory", "moonBar")
                }, null, 8, Es)]), e("div", Hs, [e("div", null, [xs, Fs, e("img", {
                    onClick: l[0] || (l[0] = h => a(ke)("1414")),
                    src: a(F)("wallet", "copy")
                }, null, 8, zs)]), e("div", null, [Ks, Gs, e("img", {
                    onClick: l[1] || (l[1] = h => a(ke)("1414")),
                    src: a(F)("wallet", "copy")
                }, null, 8, Qs)]), e("div", null, [Zs, Ys, e("img", {
                    onClick: l[2] || (l[2] = h => a(ke)("1414")),
                    src: a(F)("wallet", "copy")
                }, null, 8, Xs)])])]), Js])])
            }
        }
    });
const tl = re(el, [
        ["__scopeId", "data-v-63c604a3"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/BankStatus/index.vue"]
    ]),
    eb = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: tl
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    al = b => (Ae("data-v-b22f1e4e"), b = b(), Re(), b),
    nl = {
        class: "cancel_recharge"
    },
    sl = {
        class: "info"
    },
    ll = {
        class: "info_item"
    },
    ol = al(() => e("div", null, "UPI ID", -1)),
    il = {
        class: "user_name"
    },
    rl = {
        class: "info_item"
    },
    cl = {
        class: "money"
    },
    dl = {
        class: "info_item"
    },
    ul = {
        class: "order_num"
    },
    vl = {
        class: "time"
    },
    _l = {
        class: "cancel_content"
    },
    pl = {
        class: "title"
    },
    hl = ["onClick"],
    ml = {
        class: "radio_title"
    },
    fl = ["placeholder", "disabled"],
    wl = {
        class: "tip"
    },
    yl = {
        class: "cancen_model_cnt"
    },
    gl = ie({
        __name: "index",
        setup(b) {
            const {
                t: s
            } = be(), c = _t(), r = C(""), o = C(!1), l = C(-1), d = C(), h = ye(), w = Ne([]), u = () => {
                h.back()
            }, _ = async () => {
                await v(), o.value = !1
            }, $ = V(() => {
                var U;
                return l.value === 4 ? r.value : (U = w.find(B => B.id === l.value)) == null ? void 0 : U.reasonText
            }), v = async () => {
                var T;
                let U = {
                    orderId: (T = d.value) == null ? void 0 : T.id,
                    cancelReason: $.value
                };
                await ne(_n(U)) && (xe(s("code244")), c.emit("changeKeepAliveKey"), window.history.replaceState(null, "", window.location.href), h.replace({
                    name: "RechargeHistory",
                    query: {
                        type: 1
                    }
                }))
            }, A = async U => {
                const B = await ne(zt({
                    orderId: U
                }));
                B && (d.value = B.data)
            }, g = async () => {
                const U = await ne(va({
                    type: 0
                }));
                U && w.unshift(...U.data)
            };
            return ge(async () => {
                const U = Number(h.currentRoute.value.query.orderNo);
                await A(U), await g()
            }), (U, B) => {
                var k, P, I, O;
                const T = x("NavBar"),
                    m = x("van-divider");
                return n(), i("div", nl, [S(T, {
                    title: U.$t("concelOrder"),
                    "left-arrow": "",
                    onClickLeft: u
                }, null, 8, ["title"]), e("div", sl, [e("div", ll, [ol, e("span", il, t((k = d.value) == null ? void 0 : k.sellerAccountNo), 1)]), e("div", rl, [e("div", null, t(U.$t("amount")), 1), e("span", cl, "₹ " + t((P = d.value) == null ? void 0 : P.orderAmount), 1)]), S(m), e("div", dl, [e("div", ul, t((I = d.value) == null ? void 0 : I.orderNo), 1), e("span", vl, t((O = d.value) == null ? void 0 : O.createTime), 1)])]), e("div", _l, [e("div", pl, t(U.$t("cancelReason")), 1), (n(!0), i(de, null, $e(w, q => (n(), i("div", {
                    class: ae(["cancel_radio", {
                        radio_active: l.value === q.id
                    }]),
                    key: q.id,
                    onClick: () => {
                        l.value = q.id, l.value !== 4 && (r.value = "")
                    }
                }, [e("span", ml, t(q.reasonText), 1), q.id === 4 ? he((n(), i("textarea", {
                    key: 0,
                    class: "textarea_input",
                    "onUpdate:modelValue": B[0] || (B[0] = R => r.value = R),
                    placeholder: U.$t("enterOtherReason"),
                    disabled: l.value !== 4
                }, null, 8, fl)), [
                    [Se, r.value]
                ]) : f("v-if", !0)], 10, hl))), 128))]), e("div", wl, t(U.$t("c2cTip15")), 1), e("div", {
                    class: "cancel_btn",
                    onClick: B[1] || (B[1] = q => o.value = !0)
                }, t(U.$t("confirmCancel")), 1), S(Fe, {
                    show: o.value,
                    "onUpdate:show": B[2] || (B[2] = q => o.value = q),
                    onConfirm: _,
                    "show-cancel-btn": !0,
                    confirmText: U.$t("confirmCancel"),
                    cancelText: U.$t("cancel"),
                    title: U.$t("cancelDeal")
                }, {
                    content: J(() => [e("div", yl, t(U.$t("orderDesc2")), 1)]),
                    _: 1
                }, 8, ["show", "confirmText", "cancelText", "title"])])
            }
        }
    });
const $l = re(gl, [
        ["__scopeId", "data-v-b22f1e4e"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/CancelRecharge/index.vue"]
    ]),
    tb = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: $l
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ka = b => (Ae("data-v-877972de"), b = b(), Re(), b),
    bl = {
        class: "orderCancel__container"
    },
    kl = {
        class: "orderCancel__container-header"
    },
    Cl = {
        class: "orderCancel__container-header__details"
    },
    Tl = ka(() => e("div", {
        class: "divider"
    }, null, -1)),
    Sl = ka(() => e("div", {
        class: "orderCancel__container-header__footer"
    }, [e("span", null, "MS2022102618415496"), e("span", null, "2022-06-01 15:15:15")], -1)),
    Il = {
        class: "orderCancel__container-reason"
    },
    Nl = ["onClick"],
    Al = ["placeholder"],
    Rl = {
        class: "orderCancel__container-tip"
    },
    Dl = ie({
        __name: "index",
        setup(b) {
            const {
                t: s
            } = be(), c = ye(), r = C(1), o = C(""), l = C(!1), d = [{
                name: "Account Name",
                value: "SAWARN TELECOM"
            }, {
                name: "Bank Number",
                value: "00051231000000315"
            }, {
                name: "Order Number",
                value: "2022102518543345000113"
            }, {
                name: "Payment Amount",
                value: "฿8888.00"
            }], h = [{
                value: 1,
                label: s("c2cTip17")
            }, {
                value: 2,
                label: s("c2cTip17")
            }, {
                value: 3,
                label: s("c2cTip17")
            }, {
                value: 4,
                label: s("other")
            }];
            return (w, u) => {
                const _ = x("NavBar");
                return n(), i(de, null, [e("div", bl, [S(_, {
                    "left-arrow": !0,
                    onClickLeft: u[0] || (u[0] = $ => a(c).back())
                }, {
                    center: J(() => [H(t(w.$t("concelOrder")), 1)]),
                    _: 1
                }), e("div", kl, [(n(), i(de, null, $e(d, ($, v) => e("div", Cl, [e("span", null, t($.name), 1), e("span", null, t($.value), 1)])), 64)), Tl, Sl]), e("div", Il, [e("h1", null, t(w.$t("cancelReason")), 1), (n(), i(de, null, $e(h, ($, v) => e("div", {
                    class: ae(["orderCancel__container-reason__item", {
                        selected: $.value === r.value
                    }]),
                    onClick: A => r.value = $.value,
                    key: v
                }, [e("span", null, t($.label), 1)], 10, Nl)), 64)), he(e("textarea", {
                    "onUpdate:modelValue": u[1] || (u[1] = $ => o.value = $),
                    class: ae({
                        active: r.value === 4
                    }),
                    placeholder: w.$t("enterOtherReason")
                }, null, 10, Al), [
                    [Se, o.value]
                ])]), e("div", Rl, t(w.$t("orderDesc1")), 1)]), e("div", {
                    class: "orderCancel__container-button",
                    onClick: u[2] || (u[2] = $ => l.value = !0)
                }, t(w.$t("confirmCancel")), 1), S(Fe, {
                    show: l.value,
                    "onUpdate:show": u[3] || (u[3] = $ => l.value = $),
                    title: w.$t("cancelDeal"),
                    "cancel-text": w.$t("close"),
                    "confirm-text": w.$t("confirmCancel")
                }, {
                    content: J(() => [H(t(w.$t("orderDesc2")), 1)]),
                    _: 1
                }, 8, ["show", "title", "cancel-text", "confirm-text"])], 64)
            }
        }
    });
const Ul = re(Dl, [
        ["__scopeId", "data-v-877972de"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/OrderCancel/index.vue"]
    ]),
    ab = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ul
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    p = Ne({
        rechangeUpiShow: !1,
        rechargeSubmitBtnStatus: !1,
        currentMenu: 0,
        rechargeType: [],
        bankList: [],
        rechargeTypes: [],
        bank_local: [],
        quickList: [],
        C2CQuickList: [],
        priceRange: {
            min: 0,
            max: 0
        },
        currentPayType: {},
        isRechargeInputDialog: JSON.parse(localStorage.getItem("userInfo") || "{}").isOpenOfficialRechargeInputDialog === "1",
        amount: void 0,
        numberPayAmount: void 0,
        numberExchangeRate: 0,
        validateAmount: "",
        currentQuickIndex: -1,
        rechargeDialogVisible: !1,
        bankInfo: {},
        currentBankIndex: 0,
        isC2COrder: !1,
        C2COrderInfo: void 0,
        isBankOrder: !1,
        bankOrderInfo: void 0,
        isUsdtOrder: !1,
        currentPayId: 0,
        localUsdtInfo: [],
        currentLocalUsdtIndex: 0,
        usdtOrderInfo: {},
        orderDetail: {},
        bankUTR: "",
        localUpiUTR: "",
        upiOrderInfo: void 0,
        isUpiOrder: !1,
        CreateUpiOrderRep: void 0,
        otherBankName: "",
        thirdPayBankList: [],
        selectOtherBank: void 0,
        arPayInfo: void 0,
        isArPayOrder: !1
    }),
    Bl = [9, 18, 19],
    Wl = [11, 16, 19],
    jt = C(),
    oa = C(1),
    yt = C(),
    ia = C(!1),
    Je = () => {
        const {
            t: b
        } = be(), s = _t(), c = V(() => E.value === 20), r = V(() => E.value === 21), l = Wt().getUserInfo, d = V(() => l.uRate), h = V(() => l.trxRate), w = V(() => l.isOpenOfficialRechargeInputDialog === "1"), u = V(() => l.isShowRechargeBankList === "1" || E.value !== 9), _ = V(() => Wl.includes(E.value)), $ = ye(), v = C(!1), A = C(!1), g = C([]), U = C(!1), B = C(!1), T = C(0), m = C(0), k = C(!1), P = C(!1), I = C(""), O = C(!1), q = V(() => We().getDollarSign), R = C(!1), Z = D => {
            jt.value = D
        }, M = {
            11: {
                key: "USDT",
                unit: "USDT",
                selectText: b("selectUSDTNum"),
                placeholder: b("enterUSDTAmount"),
                icon: "usdt"
            },
            16: {
                key: "TRX",
                unit: "TRX",
                selectText: b("selectTRXNum"),
                placeholder: b("enterTRXAmount"),
                icon: "trx"
            },
            19: {
                key: "USDT",
                unit: "USDT",
                selectText: b("selectUSDTNum"),
                placeholder: b("enterUSDTAmount"),
                icon: "usdt"
            }
        }, j = V(() => {
            var z;
            let D = (z = p.rechargeTypes[0]) == null ? void 0 : z.c2cUnitAmount;
            return D ? D.toString().substring(1) : "00"
        }), N = V(() => {
            var D, z;
            return ((D = p.bankList) == null ? void 0 : D.length) < 1 ? [] : (z = p.bankList) == null ? void 0 : z.filter(te => te.transferType === oa.value)
        }), y = V(() => E.value === 12), E = V(() => p.currentPayId), ee = V(() => Bl.includes(E.value)), pe = V(() => p.currentPayType.payTypeID || -1), G = V(() => !ee.value && !r.value && !y.value), W = V(() => q.value === "৳" ? N.value[p.currentBankIndex].bankName : p.bankList[p.currentBankIndex].bankName), L = V(() => q.value === "৳" ? N.value : p.bankList), we = V(() => p.thirdPayBankList.length > 0 ? p.thirdPayBankList.filter(D => D.type === p.currentPayType.payTypeID) : []), le = V(() => E.value !== 18 ? !0 : !We().getIsSplitLocalEWallet), X = async () => {
            p.rechargeType.unshift({
                payNameUrl2: ue("wallet/withdraw/withdrawHistory", "all_NS"),
                payNameUrl: F("wallet", "all"),
                payID: -1,
                payName: b("all"),
                minPrice: 0,
                maxPrice: -0,
                scope: "",
                typeName: b("all"),
                payTypeID: 0,
                paySysName: ""
            }), p.currentMenu = 0
        }, oe = V(() => y.value ? !!p.isUpiOrder : ee.value ? !!p.isBankOrder || !!p.isUsdtOrder : r.value ? !!p.isArPayOrder : !1), Q = V(() => E.value === 11 || E.value === 19 ? d.value : E.value === 16 ? h.value : 0), Oe = V(() => p.rechargeType.find(D => D.payID === 21)), Ce = V(() => p.rechargeType.filter(D => D.payID !== 21)), Pe = V(() => p.localUsdtInfo[p.currentLocalUsdtIndex]), qe = async D => {
            an(), p.currentMenu = 0, p.rechargeType = [];
            const z = await ne(pn());
            z && (p.rechargeType = z.data.typelist, p.currentMenu = 0, p.currentPayId = Ce.value[0].payID, !D && Me(0), D && X())
        }, Be = () => {
            var z;
            return (z = p.rechargeTypes.find(te => te.paySysName === W.value)) == null ? void 0 : z.payTypeID
        }, Me = async D => {
            p.currentMenu === D && p.currentMenu !== 0 || (p.currentMenu = D, D !== -1 ? p.currentPayId = Ce.value[D].payID : p.currentPayId = 21, Y(), await K(), y.value ? ea() : r.value ? ce() : ee.value && (E.value === 19 ? ta() : E.value === 18 && !We().getIsSplitLocalEWallet ? It(Be()) : It(Ce.value[p.currentMenu].payTypeID || -1)), Nt())
        }, Y = () => {
            p.isArPayOrder = !1, p.isC2COrder = !1, p.isUpiOrder = !1, p.isBankOrder = !1, p.isUsdtOrder = !1
        }, K = async () => {
            var z, te, fe, Ue, Qe;
            const D = await ne(hn({
                payid: E.value,
                payTypeId: (z = Ce.value[p.currentMenu]) == null ? void 0 : z.payTypeID
            }));
            D && (G && (p.thirdPayBankList = D.data.thirdPayBankList || [], p.thirdPayBankList.length > 0 && (p.selectOtherBank = p.thirdPayBankList[0])), E.value === 19 && (p.localUsdtInfo = D.data.localUsdtlist), p.rechargeTypes = D.data.rechargetypelist, p.bankList = D.data.banklist, ee.value && ((te = p.bankList) == null ? void 0 : te.length) > 0 && (p.currentBankIndex = 0), ee.value && (p.bank_local = D.data.rechargetypelist[0].parameters.split("|")), D.data.rechargetypelist.length > 0 && (p.quickList = (fe = D.data.rechargetypelist[0]) == null ? void 0 : fe.scope.split("|"), p.currentPayType = D.data.rechargetypelist[0], p.priceRange = {
                min: Number((Ue = D.data.rechargetypelist[0]) == null ? void 0 : Ue.miniPrice),
                max: Number((Qe = D.data.rechargetypelist[0]) == null ? void 0 : Qe.maxPrice)
            }))
        }, ce = async () => {
            const D = await ne(mn());
            D.code === 0 && (p.isArPayOrder = D.data)
        }, se = D => {
            var z, te, fe;
            p.currentPayType = p.rechargeTypes[D], p.quickList = (z = p.rechargeTypes[D]) == null ? void 0 : z.scope.split("|"), p.priceRange = {
                min: Number((te = p.rechargeTypes[D]) == null ? void 0 : te.miniPrice),
                max: Number((fe = p.rechargeTypes[D]) == null ? void 0 : fe.maxPrice)
            }, p.thirdPayBankList.length > 0 && (p.selectOtherBank = we.value[0] || ""), Nt()
        }, me = () => {
            let D = E.value === 11 || E.value === 19 ? "USDT" : "TRX";
            return (p.numberPayAmount || p.numberPayAmount === 0) && p.numberPayAmount <= 0 ? (p.validateAmount = b("rangeDesc1"), !1) : p.numberPayAmount && p.numberPayAmount > p.priceRange.max ? (p.validateAmount = b("rangeDesc3") + p.priceRange.max + D, !1) : p.numberPayAmount && p.numberPayAmount < p.priceRange.min ? (p.validateAmount = b("rangeDesc2") + p.priceRange.min + D, !1) : (p.validateAmount = "", !0)
        }, Ve = () => (p.amount || p.amount === 0) && p.amount <= 0 ? (p.validateAmount = b("rangeDesc1"), !1) : p.amount && p.amount > p.priceRange.max ? (p.validateAmount = b("rangeDesc3") + p.priceRange.max, !1) : p.amount && p.amount < p.priceRange.min ? (p.validateAmount = b("rangeDesc2") + p.priceRange.min, !1) : (p.validateAmount = "", !0), Ge = D => {
            if (p.currentQuickIndex = D, _.value) {
                p.numberPayAmount = Number(p.quickList[D]), p.numberExchangeRate = Q.value * Number(p.quickList[D]), me() && (p.numberPayAmount = Number(et(p.numberPayAmount.toString())), p.numberExchangeRate = p.numberPayAmount * Q.value);
                return
            }
            p.amount = Number(p.quickList[D]), Ve() && (p.amount = Number(et(p.amount.toString())))
        }, et = D => (D = D + "", D.indexOf(".") > -1 ? D.split(".")[0] : D), St = async () => {
            if (!p.rechargeSubmitBtnStatus) return;
            const {
                onTriggerRecharege: D
            } = On();
            if (D({
                    amount: p.amount
                }), G.value) return qt();
            if (r.value) return Te();
            if (y.value) return Wa();
            if (ee.value)
                if (p.isRechargeInputDialog && E.value !== 19) {
                    if (!p.bankList) {
                        _e("The payment channel is empty");
                        return
                    }
                    p.bank_local.map(z => {
                        let te = z.split(",")[1];
                        p.bankInfo[te] = L.value[p.currentBankIndex][te]
                    }), p.rechargeDialogVisible = !0;
                    return
                } else E.value === 19 ? Oa() : Jt()
        }, Te = () => {
            var D, z;
            if (((D = p.arPayInfo) == null ? void 0 : D.walletActivationStatus) === 0) {
                _e(b("arNoActive2"));
                return
            }
            if (((z = p.arPayInfo) == null ? void 0 : z.balance) >= Number(p.amount)) {
                ra({
                    message: b("loading") + "...",
                    forbidClick: !0
                });
                let te = "&returnUrl=" + encodeURIComponent("https://" + window.location.host + "/#/main"),
                    fe = p.currentPayType.paySendUrl + "?tyid=" + pe.value + "&amount=" + p.amount + "&uid=" + l.userId + "&sign=" + encodeURIComponent(l.sign) + te;
                window.location.href = fe, ca()
            } else R.value = !0
        }, Ba = (D, z, te, fe, Ue) => {
            if (p.currentPayId = D, r.value && fe === 0) {
                window.location.href = p.isArPayOrder;
                return
            }
            if (y.value && fe === 0) {
                $.push({
                    name: "OtherPay",
                    query: {
                        type: "upi"
                    }
                });
                return
            }
            if (fe === 0 && D === 19) return $.push({
                name: "RechargeUsdt"
            });
            if (ee.value && fe === 0) return $.push({
                name: "RechargeDetail",
                query: {
                    currentPayId: D,
                    payTypeId: z,
                    amount: te
                }
            })
        }, Wa = async () => {
            await ja(), $.push({
                name: "OtherPay",
                query: {
                    type: "upi"
                }
            })
        }, Oa = () => {
            $.push({
                name: "RechargeUsdt",
                query: {
                    amount: p.numberPayAmount
                }
            })
        }, Pa = async D => {
            await ne(fn(D)) && (xe(b("success")), s.emit("changeKeepAliveKey"), $.replace({
                name: "RechargeHistory"
            }))
        }, qt = async () => {
            var At, Rt;
            if (E.value === 15 && !O.value) {
                if ((await ne(wn())).data) {
                    ia.value = !0, O.value = !0;
                    return
                }
                O.value = !0
            }
            let D = 0;
            _.value ? D = p.numberPayAmount : D = p.amount;
            let z = p.thirdPayBankList.length > 0 && p.selectOtherBank,
                te = p.currentPayType.paySendUrl,
                fe = "",
                Ue = window.location.origin + ",status/rechargeStatus";
            const Qe = localStorage.getItem("fb_dynamic_pixel") || "",
                wt = yn("_fbp") || "";
            te.indexOf("tyid") === -1 ? fe = te + "?tyid=" + p.currentPayType.payTypeID + "&amount=" + D + "&uid=" + l.userId + "&sign=" + l.sign + (z ? "&bankCode=" + ((At = p.selectOtherBank) == null ? void 0 : At.bankCode) : "") + "&urlInfo=" + Ue + `&pixelId=${Qe}&fbcId=${wt}` : fe = te + "&amount=" + D + "&uid=" + l.userId + "&sign=" + l.sign + (z ? "&bankCode=" + ((Rt = p.selectOtherBank) == null ? void 0 : Rt.bankCode) : "") + "&urlInfo=" + Ue + `&pixelId=${Qe}&fbcId=${wt}`, gn() ? $n("recharge", {
                url: fe,
                recharegeName: p.currentPayType.payName
            }) : bn(fe)
        }, La = async () => {
            var fe, Ue;
            let D = ((fe = p.amount) == null ? void 0 : fe.toString()) + j.value,
                z = {
                    category: E.value,
                    orderAmount: Number(D)
                };
            const [, te] = await _a(kn(z));
            if (te) {
                if ((te == null ? void 0 : te.msgCode) === 260 && te.code !== 0) {
                    _e(te.msg), setTimeout(() => {
                        $.push({
                            name: "RechargeHistory-RechargeUpiDetail",
                            query: {
                                type: "C2C",
                                orderNo: te.data.orderId,
                                state: te.data.state
                            }
                        })
                    }, 2e3);
                    return
                }
                if (te.data.state === 1) p.rechangeUpiShow = !1, $.push({
                    name: "OtherPay",
                    query: {
                        type: "C2C"
                    }
                });
                else if (te.data.state === 2) B.value = !0, T.value = te.data.errorCount, m.value = te.data.remainingLimitTime;
                else {
                    if (p.currentPayType.paySendUrl = (Ue = te.data.rechargeChannelInfo) == null ? void 0 : Ue.paySendUrl, p.currentPayType = te.data.rechargeChannelInfo, !te.data.suggessList.length) return qt();
                    p.rechangeUpiShow = !0, p.C2CQuickList = te.data.suggessList
                }
            }
        }, Ma = async () => {
            const D = await ne(Cn({
                amount: p.amount
            }));
            D && (p.C2CQuickList = D.data)
        }, Jt = async () => {
            if (E.value !== 9) {
                let z = p.bankInfo[p.bank_local[1].split(",")[1]];
                if (z && z.length && z.trim().length < 7) {
                    _e({
                        message: b("wrongTel"),
                        wordBreak: "break-word"
                    });
                    return
                }
            }
            if (w.value) {
                for (let z in p.bankInfo)
                    if (!p.bankInfo[z]) {
                        _e(b("rechargeBankTip"));
                        return
                    }
            }
            if (p.rechargeDialogVisible = !1, await aa()) {
                let z = Ce.value[p.currentMenu].payTypeID;
                E.value === 18 && (z = Be()), $.push({
                    name: "RechargeDetail",
                    query: {
                        currentPayId: E.value,
                        payTypeId: z,
                        amount: p.amount
                    }
                })
            }
        }, Va = async D => {
            const z = await ne(zt({
                orderId: D
            }));
            z && (p.C2COrderInfo = z.data)
        }, qa = async () => {
            var z;
            const D = await ne(Tn());
            D ? D.data && ((z = D.data) != null && z.orderNo) && (p.isC2COrder = !0, ft(D.data.serviceTime, D.data.endTime, () => {
                p.C2COrderInfo = void 0, p.isC2COrder = !1
            }), p.C2COrderInfo = D.data) : (p.C2COrderInfo = void 0, p.isC2COrder = !1)
        }, It = async D => {
            var te;
            const z = await ne(Sn({
                payTypeId: D
            }));
            z && (p.orderDetail = z.data, z.data && ((te = z.data) != null && te.orderNumber) ? (p.bankUTR = z.data.refNo, p.isBankOrder = !0, ft(z.data.serverTime, z.data.addTime1, () => {
                p.bankOrderInfo = void 0, p.isBankOrder = !1
            }), p.bankOrderInfo = z.data) : (p.bankOrderInfo = void 0, p.isBankOrder = !1))
        }, ea = async () => {
            const D = await ne(In({
                type: 82
            }));
            D && (D.data && D.data.orderNumber ? (p.localUpiUTR = D.data.transferUTR, p.isUpiOrder = !0, ft(D.data.serverTime, D.data.addTime1, () => {
                p.upiOrderInfo = void 0, p.isUpiOrder = !1
            }), p.upiOrderInfo = D.data) : (p.upiOrderInfo = void 0, p.isUpiOrder = !1))
        }, ja = async () => {
            const D = await ne(Nn({
                amount: p.amount
            }));
            D && (p.CreateUpiOrderRep = D.data)
        }, Ea = async (D, z, te) => {
            var fe;
            if (D === "upi") {
                let Ue = {
                    type: 1,
                    tranrefId: p.localUpiUTR,
                    orderNo: z + ""
                };
                await ne(sa(Ue)) && (s.emit("changeKeepAliveKey"), $.replace({
                    name: "RechargeHistory"
                }))
            } else await ne(An({
                orderId: z,
                transactionNo: p.localUpiUTR,
                ossUrls: te
            })) && $.replace({
                name: "RechargeHistory-RechargeUpiDetail",
                query: {
                    orderNo: (fe = p.C2COrderInfo) == null ? void 0 : fe.id,
                    state: 1
                }
            })
        }, ta = async () => {
            var z;
            const D = await ne(Rn({
                type: 3
            }));
            D && (D.data && ((z = D.data) != null && z.orderNumber) ? (p.isUsdtOrder = !0, p.isBankOrder = !1, ft(D.data.serverTime, D.data.addTime1, () => {
                p.usdtOrderInfo = void 0, p.isUsdtOrder = !1
            }), p.usdtOrderInfo = D.data) : (p.usdtOrderInfo = void 0, p.isUsdtOrder = !1, p.isBankOrder = !1))
        }, Ha = async D => {
            await ne(Dn(D)) && (xe(b("success")), s.emit("changeKeepAliveKey"), $.replace({
                name: "RechargeHistory"
            }))
        }, aa = async () => {
            let D = Ce.value[p.currentMenu].payTypeID;
            E.value === 18 && (D = Be());
            let z = {
                payTypeId: D,
                amount: p.amount,
                bankName: W.value,
                transferType: L.value[p.currentBankIndex].transferType,
                ...p.bankInfo
            };
            u.value || delete z.bankName;
            const te = await ne(Un(z));
            return te != null && te.data ? (p.orderDetail = te.data, p.bankUTR = te.data.refNo, !0) : !1
        }, ft = (D, z, te) => {
            clearInterval(yt.value), yt.value = void 0;
            let fe = na(D, z);
            yt.value = setInterval(() => {
                var wt;
                if (fe -= 1e3, fe < 0) {
                    clearInterval(yt.value), te();
                    return
                }
                const Ue = bt(fe, "mm:ss"),
                    Qe = (wt = jt.value) == null ? void 0 : wt.querySelectorAll("span");
                Qe == null || Qe.forEach((At, Rt) => {
                    At.innerHTML = Ue[Rt]
                })
            }, 1e3)
        }, xa = async D => {
            const z = await ne(Bn({
                rechargeNumber: D
            }));
            if (z.data.state !== 0) {
                gt(z.data.state === 1 ? b("orderpay") : b("ordercancle")), sessionStorage.removeItem("localOrder"), $.go(-1);
                return
            }
        }, Fa = async () => {
            var z;
            if (We().getDollarSign === "₹" && E.value === 9) {
                let te = {
                    type: 1,
                    tranrefId: p.bankUTR,
                    orderNo: (z = p.orderDetail) == null ? void 0 : z.orderNumber
                };
                const fe = await ne(sa(te));
                if (fe.code === 0) xe(b("success"));
                else {
                    xe(fe.msg);
                    return
                }
            }
            s.emit("changeKeepAliveKey"), $.replace({
                name: "RechargeHistory"
            })
        }, za = async (D, z) => {
            await ne(Wn({
                orderNo: D
            })) && (p.isBankOrder = !1, v.value = !1, A.value = !1, xe(b("cancelSucceed")), s.emit("changeKeepAliveKey"), $.back())
        }, na = (D, z) => {
            let te = new Date(D);
            return new Date(z).getTime() - te.getTime()
        }, Ka = () => {
            p.rechargeSubmitBtnStatus = !1, p.amount = void 0, p.numberPayAmount = void 0, p.numberExchangeRate = void 0, p.currentQuickIndex = -1, p.validateAmount = ""
        }, Ga = async () => {
            var te;
            let D = {
                pageNo: 1,
                pageSize: 5,
                startDate: "",
                endDate: "",
                state: -1,
                type: -1,
                payId: p.currentPayId,
                category: p.currentPayId
            };
            c.value ? (D.type = -1, delete D.payId) : (delete D.category, delete D.type, D.payTypeId = ((te = Ce.value[p.currentMenu]) == null ? void 0 : te.payTypeID) || -1);
            const z = await ne(c.value ? pa(D) : ha(D));
            z && (g.value = z.data.list)
        }, Qa = (D, z, te) => {
            if (z !== 0 && E.value !== 9 && (D.replace(/\D/g, ""), p.bankInfo[te] = D.replace(/\D/g, "")), z === 0) {
                let fe = p.bankInfo[p.bank_local[0].split(",")[1]].replace(/\s*/g, "");
                p.bankInfo[p.bank_local[0].split(",")[1]] = fe
            }
        }, Za = D => {
            if (p.currentBankIndex = D, p.currentPayId === 18 && p.bankList.length) {
                let z = q.value === "৳" ? N.value[D].bankName : p.bankList[D].bankName,
                    te = p.rechargeTypes.find(fe => fe.paySysName === z);
                p.bank_local = (te == null ? void 0 : te.parameters.split("|")) || [], p.bank_local.map(fe => {
                    let Ue = fe.split(",")[1];
                    p.bankInfo[Ue] = p.bankList[p.currentBankIndex][Ue]
                }), p.quickList = te.scope.split("|")
            }
            p.currentPayId === 18 && It(Be())
        }, Nt = () => {
            p.rechargeSubmitBtnStatus = !1, p.amount = void 0, p.numberPayAmount = void 0, p.numberExchangeRate = void 0, p.validateAmount = "", p.currentQuickIndex = -1, p.currentBankIndex = 0, p.localUpiUTR = "", p.bankUTR = ""
        }, Ya = D => {
            clearTimeout(D.target.timer), D.target.timer = setTimeout(() => {
                if (p.validateAmount = "", p.currentQuickIndex = -1, _.value) {
                    me() && (p.numberExchangeRate = p.numberPayAmount ? p.numberPayAmount * Q.value : 0);
                    return
                }
                Ve()
            }, 500)
        }, Xa = D => D >= 1e6 ? (D / 1e6).toFixed(1).replace(/\.0$/, "") + "M" : D >= 1e3 ? (D / 1e3).toFixed(1).replace(/\.0$/, "") + "K" : D + "", Ja = async () => await navigator.clipboard.readText(), en = D => {
            var z = document.getElementById(D);
            ln(z, {
                useCORS: !0,
                x: 0,
                y: 0,
                width: z.offsetWidth,
                height: z.offsetHeight
            }).then(te => {
                te.toDataURL("image/jpeg");
                const fe = document.createElement("a");
                fe.href = te.toDataURL("image/jpeg"), fe.download = "qrcode.jpeg", document.body.appendChild(fe), fe.click()
            })
        }, tn = async D => {
            try {
                return on.toDataURL(D)
            } catch {}
        }, an = () => {
            p.isBankOrder = !1, p.isUsdtOrder = !1, p.localUpiUTR = "", p.bankUTR = ""
        }, nn = ({
            selectedOptions: D
        }) => {
            U.value = !1, p.selectOtherBank = D[0]
        }, sn = (D, z) => {
            let te = new Date(D.replace(/-/g, "/")).getTime(),
                fe = new Date(z.replace(/-/g, "/")).getTime();
            te - fe <= 0 && (k.value = !0)
        };
        return je(() => pe.value, () => {
            Nt()
        }), lt(() => {
            clearInterval(yt.value)
        }), je([() => p.amount, () => p.numberPayAmount], () => {
            if (!p.amount && !p.numberPayAmount) {
                p.rechargeSubmitBtnStatus = !1;
                return
            }
            if (_.value && p.numberPayAmount) {
                p.rechargeSubmitBtnStatus = me();
                return
            }
            if (!_.value) {
                p.rechargeSubmitBtnStatus = Ve() && p.rechargeTypes.length > 0;
                return
            }
            p.rechargeSubmitBtnStatus = !1
        }), {
            store: p,
            confirmOtherSelectBank: nn,
            showOtherSelect: U,
            getRechargeTypeName: qe,
            handleChangeMenu: Me,
            getRechargeTypes: K,
            restAmount: Nt,
            handleInput: Ya,
            formatNum: Xa,
            handleRecharge: St,
            handleQuickSelect: Ge,
            isHaveOrder: oe,
            currentPayId: E,
            numberKeyObj: M,
            isC2CRecharge: c,
            isArpay: r,
            isLocakBank: ee,
            isNumberPay: _,
            getC2CunitAmount: j,
            usdtRate: d,
            trxRate: h,
            currentBankName: W,
            currentPayTypeId: pe,
            handleSelectPayType: se,
            handleClearInput: Ka,
            getPayTabList: Ce,
            arPay: Oe,
            validateBankForm: Qa,
            localBankRecharge: Jt,
            submitUsdtRecharge: Pa,
            getUsdtOrderInfo: ta,
            getLocalUsdtInfo: Pe,
            handlePaste: Ja,
            createLocalBankOrder: aa,
            getLoclBankOrderDetail: xa,
            handeCancelOrder: za,
            getAmountList: Ma,
            cancelOrderShow: A,
            rechargeActionSheetShow: v,
            handleFinishOrder: Fa,
            countdownTimeFun: ft,
            countdownRef: jt,
            setCountdownRef: Z,
            getBankOrderInfo: It,
            getUpiOrderInfo: ea,
            handleFinishUpiOrder: Ea,
            getRechargeTab: X,
            historyToDetail: Ba,
            getC2COrderInfo: qa,
            otherRecharge: qt,
            getRecordList: Ga,
            htmlToImage: en,
            createQrCode: tn,
            C2CRecharge: La,
            getTransferBankList: N,
            transfer: oa,
            isFirstPixRecharge: ia,
            isSplitLocalEWallet: le,
            RechargeRList: g,
            handleSelectBank: Za,
            getElwallett: Be,
            IsShowRechargeBankList: u,
            handleUpdateUsdtOrder: Ha,
            getOrderDetail: Va,
            isOtherRecharge: G,
            currentOtherThirdBankList: we,
            C2CforbiddenShow: B,
            ErrorCount: T,
            RemainingLimitTime: m,
            C2COrderTimeOutStatus: k,
            C2CTimeOut: sn,
            thirdRechargeDialog: P,
            thirdRechargeUrl: I,
            getDownTime: na,
            currentBankList: L,
            userInfo: l,
            showAmountError: R
        }
    },
    Zt = b => (Ae("data-v-7cba6004"), b = b(), Re(), b),
    Ol = {
        class: "Recharge__container-intro"
    },
    Pl = {
        key: 0,
        class: "Recharge__container-intro__title"
    },
    Ll = Zt(() => e("div", {
        class: "img"
    }, null, -1)),
    Ml = {
        class: "Recharge__container-intro__lists"
    },
    Vl = {
        key: 0,
        class: "item"
    },
    ql = ["innerHTML"],
    jl = {
        class: "red"
    },
    El = {
        class: "red"
    },
    Hl = {
        class: "red"
    },
    xl = {
        key: 1,
        class: "item"
    },
    Fl = {
        key: 0
    },
    zl = {
        class: "red"
    },
    Kl = ["innerHTML"],
    Gl = {
        key: 2,
        class: "item"
    },
    Ql = Zt(() => e("p", null, "*Số tiền nạp phải là bội số nguyên của 1000", -1)),
    Zl = Zt(() => e("p", null, " Lưu ý: nếu tạo lệnh nạp sai với mệnh giá thấp hơn thẻ cào thì hệ thống sẽ tự động cộng vào số tiền mà quý khách đã tạo lệnh,chúng tôi không có trách nhiệm bổ sung số tiền chênh lệch.Xin cảm ơn! ", -1)),
    Yl = {
        key: 3,
        class: "item"
    },
    Xl = {
        key: 0
    },
    Jl = {
        key: 4,
        class: "item"
    },
    eo = {
        key: 5,
        class: "item"
    },
    to = {
        key: 6,
        class: "item"
    },
    ao = {
        key: 7,
        class: "item"
    },
    no = ie({
        __name: "Instructions",
        props: {
            withdrawalsrule: {
                type: null,
                required: !1
            },
            showType: {
                type: Number,
                required: !1,
                default: 0
            },
            withdrawMoney: {
                type: Number,
                required: !1,
                default: 0
            },
            withdrawType: {
                type: Number,
                required: !1,
                default: -1
            },
            isShowHead: {
                type: Boolean,
                required: !1,
                default: !1
            },
            rechargeInfo: {
                type: null,
                required: !1
            }
        },
        setup(b) {
            const s = b,
                {
                    store: c
                } = Je(),
                r = {}.VITE_BASE_VIR,
                o = V(() => s.showType === 9 || s.showType === 18 ? "bank" : s.showType === 20 ? "c2c" : s.showType === 12 ? "upi" : s.showType === 6 && r ? "exclusive" : s.showType === 11 || s.showType === 16 || s.showType === 19 ? "numberCurrency" : s.showType === 771 ? "c2cDetail" : s.withdrawType !== -1 ? "" : "bank");
            return (l, d) => {
                var h, w, u, _, $, v, A, g, U, B, T, m, k;
                return n(), i("div", Ol, [l.isShowHead ? (n(), i("div", Pl, [Ll, e("p", null, t(l.$t("rechargeInstruction")), 1)])) : f("v-if", !0), e("div", Ml, [
                    [1, 3, 6].includes(l.withdrawType) ? (n(), i("div", Vl, [e("p", {
                        innerHTML: l.$t("instructionDes", [a(ve)((h = l.withdrawalsrule) == null ? void 0 : h.amountofCode)])
                    }, null, 8, ql), e("p", null, [H(t(l.$t("instructionTxt6")) + " ", 1), e("span", jl, t((w = l.withdrawalsrule) == null ? void 0 : w.startTime) + "-" + t((u = l.withdrawalsrule) == null ? void 0 : u.endTime), 1)]), e("p", null, [H(t(l.$t("instructionTxt7")), 1), e("span", El, t((_ = l.withdrawalsrule) == null ? void 0 : _.withdrawRemainingCount), 1)]), e("p", null, [H(t(l.$t("instructionTxt8")), 1), e("span", Hl, t(a(ve)(($ = l.withdrawalsrule) == null ? void 0 : $.minPrice)) + "-" + t(a(ve)((v = l.withdrawalsrule) == null ? void 0 : v.maxPrice)), 1)])])) : f("v-if", !0), f(" c2c "), o.value === "c2c" ? (n(), i("div", xl, [e("p", null, t(l.$t("c2cMBAInteger", [(A = l.rechargeInfo) == null ? void 0 : A.c2cUnitAmount])), 1), ((g = l.rechargeInfo) == null ? void 0 : g.rechargeRifts) > 0 ? (n(), i("p", Fl, t(l.$t("c2cNEWUPIW", [a(Kt)((U = l.rechargeInfo) == null ? void 0 : U.rechargeRifts, 100)])), 1)) : f("v-if", !0), e("p", null, [H(t(l.$t("c2cTUAR")), 1), e("span", zl, t(a(ve)((B = l.rechargeInfo) == null ? void 0 : B.miniPrice)) + "-" + t(a(ve)((T = l.rechargeInfo) == null ? void 0 : T.maxPrice)), 1)]), e("p", {
                        innerHTML: l.$t("c2cInstructions1")
                    }, null, 8, Kl)])) : f("v-if", !0), f(" 专属 "), o.value === "exclusive" ? (n(), i("div", Gl, [e("p", null, "Số tiền nhận được：" + t((a(c).amount || 0) * Number(a(r))), 1), e("p", null, "Phí: " + t((1 - a(r)) * 100) + "%", 1), Ql, Zl])) : f("v-if", !0), f(" 一般三方和本地银行充值 "), o.value === "bank" ? (n(), i("div", Yl, [f(` <p v-if="showType === 99">{{ $t('instructionTxt1') }}</p> `), e("p", null, t(l.$t("instructionTxt2")), 1), e("p", null, t(l.$t("instructionTxt3")), 1), e("p", null, t(l.$t("instructionTxt4")), 1), l.showType === 18 ? (n(), i("p", Xl, t(l.$t("rechargeBankDetailTip")), 1)) : f("v-if", !0), e("p", null, t(l.$t("instructionTxt5")), 1)])) : f("v-if", !0), o.value === "c2cDetail" ? (n(), i("div", Jl, [f(" <p>{{ $t('c2cInstructions2') }}</p> "), e("p", null, t(l.$t("c2cInstructions3")), 1)])) : f("v-if", !0), o.value === "numberCurrency" ? (n(), i("div", eo, [e("p", null, t(l.$t("instructionsDesc1", [(((m = l.rechargeInfo) == null ? void 0 : m.miniPrice) || 1) + (l.showType === 16 ? "TRX" : "USDT"), (((k = l.rechargeInfo) == null ? void 0 : k.miniPrice) || 1) + (l.showType === 16 ? "TRX" : "USDT")])), 1), e("p", null, t(l.$t("instructionsDesc2")), 1), e("p", null, t(l.$t("instructionsDesc3")), 1), e("p", null, t(l.$t("instructionsDesc4")), 1), e("p", null, t(l.$t("instructionsDesc5")), 1)])) : f("v-if", !0), o.value === "upi" ? (n(), i("div", to, [e("p", null, t(l.$t("upiInstructions1")), 1), e("p", null, t(l.$t("upiInstructions2")), 1)])) : f("v-if", !0), l.withdrawType === 3 ? (n(), i("div", ao, [f(" <p>{{ $t('instructionTxt9') }}</p> "), e("p", null, t(l.$t("instructionTxt10")), 1), e("p", null, t(l.$t("instructionTxt11")), 1)])) : f("v-if", !0)
                ])])
            }
        }
    });
const Ct = re(no, [
        ["__scopeId", "data-v-7cba6004"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/Recharge/Instructions.vue"]
    ]),
    so = {
        class: "pay_state_step"
    },
    lo = ["src"],
    oo = ie({
        __name: "PayState",
        props: {
            state: {
                type: Number,
                default: 1
            },
            type: {
                type: Number,
                default: 1
            }
        },
        setup(b) {
            const s = b,
                {
                    t: c
                } = be(),
                r = V(() => s.type === 1 ? [{
                    img: ue("wallet/recharge", "setup1"),
                    title: c("transfer")
                }, {
                    img: s.state >= 2 ? ue("wallet/recharge", "setup2_active") : ue("wallet/recharge", "setup2"),
                    title: c("uploadproof")
                }, {
                    img: s.state >= 3 ? ue("wallet/recharge", "setup3_active") : ue("wallet/recharge", "setup3"),
                    title: c("waitConfirm")
                }, {
                    img: s.state === 4 ? ue("wallet/recharge", "setup4_active") : ue("wallet/recharge", "setup4"),
                    title: c("completed")
                }] : [{
                    img: ue("wallet/recharge", "appeal_state"),
                    title: c("c2cTip32")
                }, {
                    img: s.state >= 3 ? ue("wallet/recharge", "setup3_active") : ue("wallet/recharge", "setup3"),
                    title: c("amountError2")
                }, {
                    img: s.state === 4 ? ue("wallet/recharge", "setup4_active") : ue("wallet/recharge", "setup4"),
                    title: c("completed")
                }]);
            return (o, l) => (n(), i("div", so, [(n(!0), i(de, null, $e(r.value, (d, h) => (n(), i("div", {
                class: ae(["item", {
                    appeal: b.type === 2
                }]),
                key: h
            }, [e("img", {
                src: d.img,
                alt: ""
            }, null, 8, lo), e("span", null, t(d.title), 1)], 2))), 128))]))
        }
    });
const Ca = re(oo, [
        ["__scopeId", "data-v-d8d9a23f"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/OtherPay/components/PayState.vue"]
    ]),
    Ke = b => (Ae("data-v-5bada7e8"), b = b(), Re(), b),
    io = {
        class: "other_pay"
    },
    ro = {
        key: 0,
        class: "pay_store"
    },
    co = ["onClick"],
    uo = ["src"],
    vo = Ke(() => e("div", {
        class: "tip"
    }, [e("div", null, "have you paid successfully?"), e("div", null, "Paytm,PhonePe,GooglePay,Other Bank")], -1)),
    _o = {
        class: "orderInfo"
    },
    po = {
        key: 0,
        class: "info_item"
    },
    ho = {
        class: "info_item"
    },
    mo = Ke(() => e("span", null, "UPI ID", -1)),
    fo = ["src"],
    wo = {
        key: 1,
        class: "info_item"
    },
    yo = Ke(() => e("span", null, "UTR", -1)),
    go = {
        class: "info_item"
    },
    $o = {
        key: 2
    },
    bo = ["src"],
    ko = {
        key: 3
    },
    Co = Ke(() => e("div", {
        class: "UTR_title"
    }, "UTR(UPI Ref.ID)", -1)),
    To = ["src"],
    So = {
        class: "c2cupload_box"
    },
    Io = {
        class: "c2cupload_tip"
    },
    No = ["src"],
    Ao = {
        class: "upload_action"
    },
    Ro = {
        class: "upload_btn"
    },
    Do = ["src"],
    Uo = {
        class: "upload_text"
    },
    Bo = Ke(() => e("br", null, null, -1)),
    Wo = {
        key: 2,
        class: "pay_btn"
    },
    Oo = {
        key: 3,
        class: "c2c_btn"
    },
    Po = {
        class: "actionSheet__content"
    },
    Lo = {
        class: "title"
    },
    Mo = ["src"],
    Vo = {
        class: "sheet_info"
    },
    qo = {
        class: "info_item sheet_item"
    },
    jo = Ke(() => e("span", null, "UPI ID", -1)),
    Eo = {
        class: "sheet_right"
    },
    Ho = {
        class: "info_item sheet_item"
    },
    xo = Ke(() => e("span", null, "UTR", -1)),
    Fo = {
        class: "sheet_right"
    },
    zo = {
        class: "info_item sheet_item"
    },
    Ko = {
        class: "sheet_amount"
    },
    Go = {
        class: "finish_tit"
    },
    Qo = {
        class: "finish_tip"
    },
    Zo = {
        class: "pay_btn"
    },
    Yo = {
        class: "c2c_actiosheet"
    },
    Xo = ["src"],
    Jo = Ke(() => e("div", {
        class: "text"
    }, [H("*Confirm using "), e("span", null, "your own UPI"), H(" for the transfer")], -1)),
    ei = Ke(() => e("div", {
        class: "text"
    }, [H(" *After a successful transfer, return here and provide the "), e("span", null, "12-digit Ref/UTR No"), H(". for the deposit into your account. ")], -1)),
    ti = Ke(() => e("div", {
        class: "video_text"
    }, "DEMO VIDEO >>", -1)),
    ai = Ke(() => e("div", {
        class: "text2"
    }, "Sample of UTR(UPI Ref.ID)", -1)),
    ni = {
        class: "img_box"
    },
    si = ["src"],
    li = {
        class: "close_box"
    },
    oi = ie({
        __name: "index",
        setup(b) {
            const {
                store: s,
                getUpiOrderInfo: c,
                handleFinishUpiOrder: r,
                getC2COrderInfo: o,
                handeCancelOrder: l,
                createQrCode: d,
                htmlToImage: h,
                getDownTime: w,
                C2COrderTimeOutStatus: u
            } = Je(), _ = ye(), $ = C(!1), v = C(), A = C(!1), g = C(), U = C(""), B = C(!1), T = C(1), m = C([]), k = C(""), P = C(), I = C(""), O = [{
                name: "Paytm",
                icon: ue("wallet/recharge", "paytm"),
                id: 1,
                url: "paytmmp://upi"
            }, {
                name: "PhonePe",
                icon: ue("wallet/recharge", "phone_pe"),
                id: 2,
                url: "phonepe://pay"
            }, {
                name: "GooglePay",
                icon: ue("wallet/recharge", "google_pay"),
                id: 3,
                url: "gpay://upi"
            }, {
                name: "Other Bank",
                icon: ue("wallet/recharge", "other_bank"),
                id: 4,
                url: "upi://pay"
            }], q = C({
                fileType: 1,
                fileUrl: ""
            }), R = V(() => _.currentRoute.value.query.type === "C2C"), Z = le => {
                window.open(le, "_blank")
            }, M = V(() => T.value === 2 ? F("common", "upload_icon") : T.value === 3 ? ue("common", "switch") : F("common", "upload_icon")), j = async le => {
                m.value = [];
                const X = new FormData;
                X.append("files", le.file);
                const oe = await ne(ma(X));
                k.value = oe.data[0].ossHttp + "/" + oe.data[0].src, q.value.fileUrl = oe.data[0].src
            }, N = () => {
                u.value = !1, _.back()
            }, y = () => {
                $.value = !1
            }, E = () => {
                s.localUpiUTR.length < 12 || ($.value = !0)
            }, ee = () => {
                _.back()
            }, pe = V(() => _.currentRoute.value.query.type), G = () => {
                if (R.value && T.value === 1) {
                    if (s.localUpiUTR.length < 12) return;
                    T.value = 2
                } else E()
            }, W = async le => {
                if (s.localUpiUTR.length !== 12) {
                    A.value = !0;
                    return
                }
                await r(_.currentRoute.value.query.type, le), $.value = !1
            }, L = () => {
                var le, X;
                _.currentRoute.value.query.type === "upi" ? l(((le = v.value) == null ? void 0 : le.orderNumber) + "") : _.push({
                    name: "CancelRecharge",
                    query: {
                        orderNo: (X = v.value) == null ? void 0 : X.id
                    }
                })
            }, we = async () => {
                if (await o(), v.value = s.C2COrderInfo, s.isC2COrder = !1, !v.value) {
                    u.value = !0, clearInterval(g.value);
                    return
                }
                let le = w(v.value.serviceTime, v.value.endTime);
                g.value = setInterval(() => {
                    le -= 1e3, le < 0 && (u.value = !0, clearInterval(g.value)), U.value = bt(le, "mm:ss")
                }, 1e3)
            };
            return ge(async () => {
                var Q, Oe, Ce, Pe;
                let le = _.currentRoute.value.query.type;
                g.value = null;
                let X = "";
                le === "upi" ? (await c(), v.value = s.upiOrderInfo, X = "upi://pay?pa=" + ((Q = v.value) == null ? void 0 : Q.upiAccount) + "&am=" + ((Oe = v.value) == null ? void 0 : Oe.amount) + "&cu=INR") : (B.value = !0, await we(), X = "upi://pay?pa=" + ((Ce = v.value) == null ? void 0 : Ce.sellerAccountNo) + "&am=" + ((Pe = v.value) == null ? void 0 : Pe.orderAmount) + "&cu=INR");
                const oe = await d(X);
                I.value = oe, d(X)
            }), lt(() => {
                clearInterval(g.value)
            }), $t(() => {
                sessionStorage.removeItem("upiOrderInfo"), clearInterval(g.value)
            }), (le, X) => {
                var qe, Be, Me, Y;
                const oe = x("NavBar"),
                    Q = x("van-field"),
                    Oe = x("van-uploader"),
                    Ce = x("van-divider"),
                    Pe = x("van-action-sheet");
                return n(), i("div", io, [S(oe, {
                    class: "white",
                    title: le.$t("payments"),
                    "left-arrow": "",
                    onClickLeft: ee
                }, null, 8, ["title"]), R.value ? (n(), Ie(Ca, {
                    key: 1,
                    state: T.value
                }, null, 8, ["state"])) : (n(), i("div", ro, [(n(), i(de, null, $e(O, K => e("div", {
                    class: "store_item",
                    key: K.id,
                    onClick: ce => Z(K.url)
                }, [e("img", {
                    src: K.icon,
                    alt: ""
                }, null, 8, uo), e("span", null, t(K.name), 1)], 8, co)), 64))])), vo, e("div", _o, [R.value ? (n(), i("div", po, [e("span", null, t(le.$t("expiredTimes")), 1), e("div", null, t(U.value), 1)])) : f("v-if", !0), e("div", ho, [mo, e("div", null, [e("span", null, t(((qe = v.value) == null ? void 0 : qe.upiAccount) || ((Be = v.value) == null ? void 0 : Be.sellerAccountNo) || "--"), 1), e("img", {
                    src: a(F)("public", "copy"),
                    alt: "",
                    onClick: X[0] || (X[0] = K => {
                        var ce, se;
                        return a(ke)(((ce = v.value) == null ? void 0 : ce.sellerAccountNo) || ((se = v.value) == null ? void 0 : se.upiAccount))
                    })
                }, null, 8, fo)])]), T.value !== 1 ? (n(), i("div", wo, [yo, e("div", null, [e("span", null, t(a(s).localUpiUTR), 1)])])) : f("v-if", !0), e("div", go, [e("span", null, t(le.$t("amount")), 1), e("div", null, t(a(ve)((Me = v.value) == null ? void 0 : Me.orderAmount) || ((Y = v.value) == null ? void 0 : Y.amount) || "--"), 1)]), T.value === 1 || !R.value ? (n(), i("div", $o, [e("img", {
                    class: "qrcode",
                    src: I.value,
                    id: "qrcode"
                }, null, 8, bo), e("div", {
                    class: "save_qrcode",
                    onClick: X[1] || (X[1] = K => a(h)("qrcode"))
                }, t(le.$t("saveTheQRCode")), 1)])) : f("v-if", !0), f(` <img class="qrcode" :src="codeUrl" id="qrcode" />
			<div class="save_qrcode" @click="htmlToImage('qrcode')">{{ $t('saveTheQRCode') }}</div> `), T.value === 1 ? (n(), i("div", ko, [Co, S(Q, {
                    modelValue: a(s).localUpiUTR,
                    "onUpdate:modelValue": X[3] || (X[3] = K => a(s).localUpiUTR = K),
                    class: "info_item",
                    type: "digit",
                    placeholder: "Please enter a 12-digit UTR",
                    maxlength: 12
                }, {
                    "right-icon": J(() => [e("img", {
                        src: a(F)("public", "copy"),
                        alt: "",
                        onClick: X[2] || (X[2] = K => a(ke)(a(s).localUpiUTR))
                    }, null, 8, To)]),
                    _: 1
                }, 8, ["modelValue"])])) : f("v-if", !0), T.value === 1 ? (n(), Ie(Ct, {
                    key: 4,
                    showType: R.value ? 771 : 12,
                    isShowHead: !0
                }, null, 8, ["showType"])) : f("v-if", !0)]), e("div", So, [e("div", Io, [e("div", null, t(le.$t("C2Cuploadtip3")), 1), e("div", null, t(le.$t("C2Cuploadtip4")), 1)]), e("div", {
                    class: ae(["upload_img", {
                        noAdd: !!k.value
                    }]),
                    onClick: X[4] || (X[4] = () => {
                        P.value.chooseFile()
                    })
                }, [k.value ? (n(), i("img", {
                    key: 0,
                    src: k.value,
                    alt: ""
                }, null, 8, No)) : f("v-if", !0)], 2), e("div", Ao, [S(Oe, {
                    ref_key: "uploadRef",
                    ref: P,
                    "max-size": 5e3 * 1024,
                    onOversize: X[5] || (X[5] = () => a(gt)(le.$t("C2Cuploadtip2"))),
                    modelValue: m.value,
                    "onUpdate:modelValue": X[6] || (X[6] = K => m.value = K),
                    accept: "image/*",
                    "after-read": j,
                    "preview-image": !1
                }, {
                    default: J(() => [e("div", Ro, [e("img", {
                        src: M.value
                    }, null, 8, Do), e("span", null, t(T.value === 2 && m.value.length === 0 ? le.$t("uploadImg") : le.$t("changeImage")), 1)])]),
                    _: 1
                }, 8, ["modelValue"]), e("div", Uo, [H(t(le.$t("C2Cuploadtip1")), 1), Bo, H(" " + t(le.$t("C2Cuploadtip2")), 1)])])]), T.value === 1 ? (n(), i("div", Wo, [e("div", {
                    class: "cancel_order",
                    onClick: L
                }, t(le.$t("concelOrder")), 1), e("div", {
                    class: ae(["finish", {
                        unfinish: a(s).localUpiUTR.length < 12
                    }]),
                    onClick: G
                }, t(R.value && T.value === 1 ? le.$t("nextStep") : le.$t("rechargeDetailDesc6")), 3)])) : f("v-if", !0), T.value !== 1 ? (n(), i("div", Oo, [e("div", {
                    class: ae(["c2cFinish", {
                        no_finish: !k.value
                    }]),
                    onClick: X[7] || (X[7] = () => {
                        var K;
                        k.value && a(r)("c2c", (K = v.value) == null ? void 0 : K.id, [q.value])
                    })
                }, t(le.$t("rechargeDetailDesc6")), 3), e("div", {
                    class: "backPay",
                    onClick: X[8] || (X[8] = K => T.value = 1)
                }, t(le.$t("backPay")), 1)])) : f("v-if", !0), S(Pe, {
                    show: $.value,
                    "onUpdate:show": X[11] || (X[11] = K => $.value = K),
                    onClickOverlay: y
                }, {
                    default: J(() => {
                        var K, ce, se, me;
                        return [e("div", Po, [e("div", Lo, [e("img", {
                            src: a(F)("wallet", "upi"),
                            alt: ""
                        }, null, 8, Mo), e("span", null, t((pe.value === "upi" ? "Local UPI " : "NEW UPI ") + le.$t("recharge")), 1)]), S(Ce), e("div", Vo, [e("div", qo, [jo, e("div", Eo, t(((K = v.value) == null ? void 0 : K.sellerAccountNo) || ((ce = v.value) == null ? void 0 : ce.upiAccount)), 1)]), e("div", Ho, [xo, e("div", Fo, t(a(s).localUpiUTR), 1)]), e("div", zo, [e("span", null, t(le.$t("amount")), 1), e("div", Ko, t(a(ve)(((se = v.value) == null ? void 0 : se.orderAmount) || ((me = v.value) == null ? void 0 : me.amount))), 1)])]), e("div", Go, t(le.$t("rechargeDetailDesc8")), 1), e("div", Qo, t(le.$t("rechargeDetailDesc11")), 1), e("div", Zo, [e("div", {
                            class: "cancel_order",
                            onClick: X[9] || (X[9] = Ve => $.value = !1)
                        }, t(le.$t("rechargeDetailDesc7")), 1), e("div", {
                            class: "finish",
                            onClick: X[10] || (X[10] = Ve => {
                                var Ge, et;
                                return W(((Ge = v.value) == null ? void 0 : Ge.id) || ((et = v.value) == null ? void 0 : et.orderNumber))
                            })
                        }, t(le.$t("rechargeDetailDesc8")), 1)])])]
                    }),
                    _: 1
                }, 8, ["show"]), S(Pe, {
                    title: " ",
                    show: B.value,
                    "onUpdate:show": X[13] || (X[13] = K => B.value = K),
                    onClickOverlay: X[14] || (X[14] = K => B.value = !1),
                    closeable: !0
                }, {
                    default: J(() => [e("div", Yo, [e("img", {
                        src: a(ue)("common", "close"),
                        class: "close_img"
                    }, null, 8, Xo), Jo, ei, ti, ai, e("div", ni, [e("img", {
                        src: a(ue)("wallet/recharge", "C2Chelp"),
                        alt: "",
                        class: "help_img"
                    }, null, 8, si)]), e("div", li, [e("div", {
                        class: "close_btn",
                        onClick: X[12] || (X[12] = K => B.value = !1)
                    }, t(le.$t("close")), 1)])])]),
                    _: 1
                }, 8, ["show"]), S(Fe, {
                    show: A.value,
                    "onUpdate:show": X[15] || (X[15] = K => A.value = K),
                    showCancelBtn: !1,
                    title: le.$t("UTRError"),
                    "confirm-text": "OK",
                    confirm: A.value = !1
                }, {
                    content: J(() => [H(t(le.$t("c2cTip16")), 1)]),
                    _: 1
                }, 8, ["show", "title", "confirm"]), S(Fe, {
                    show: a(u),
                    "onUpdate:show": X[16] || (X[16] = K => Ye(u) ? u.value = K : null),
                    showCancelBtn: !1,
                    title: le.$t("C2Ctimeout1"),
                    "confirm-text": "OK",
                    onConfirm: N
                }, {
                    content: J(() => [H(t(le.$t("C2Ctimeout2")), 1)]),
                    _: 1
                }, 8, ["show", "title"])])
            }
        }
    });
const ii = re(oi, [
        ["__scopeId", "data-v-5bada7e8"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/OtherPay/index.vue"]
    ]),
    nb = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ii
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ri = b => (Ae("data-v-4f3d8608"), b = b(), Re(), b),
    ci = ["src"],
    di = {
        class: "upi_item"
    },
    ui = {
        class: "title"
    },
    vi = {
        key: 0,
        class: "upi_image"
    },
    _i = {
        key: 1,
        class: "gift"
    },
    pi = {
        key: 2,
        class: "upi_image"
    },
    hi = {
        class: "Recharge__container-tabcard"
    },
    mi = ["onClick"],
    fi = {
        key: 0,
        class: "gift"
    },
    wi = {
        class: "Recharge__container-tabcard__top"
    },
    yi = ["src"],
    gi = {
        class: "Recharge__container-tabcard__bot"
    },
    $i = {
        key: 1
    },
    bi = {
        class: "left"
    },
    ki = ["src"],
    Ci = {
        class: "right"
    },
    Ti = {
        class: "ar_wallet"
    },
    Si = {
        class: "info"
    },
    Ii = ["src"],
    Ni = {
        key: 0,
        class: "tit"
    },
    Ai = {
        key: 1,
        class: "tip"
    },
    Ri = {
        key: 2,
        class: "wallet_amount"
    },
    Di = ri(() => e("span", null, "ARB", -1)),
    Ui = ie({
        __name: "RechargeMenu",
        setup(b) {
            const {
                store: s,
                handleChangeMenu: c,
                getPayTabList: r,
                arPay: o,
                currentPayId: l
            } = Je(), {
                isArWalletActive: d,
                arWallet: h,
                getInfo: w,
                goWallet: u,
                goActive: _
            } = kt(), {
                t: $
            } = be();
            ye();
            const v = () => {
                    d.value ? u("wallet/recharge") : _("wallet/recharge")
                },
                A = () => {
                    const g = encodeURIComponent("https://" + window.location.host + "/#/main");
                    let B = `https://arbpay.me/#/TradRules?lang=${localStorage.getItem("language")}&returnUrl=${g}`;
                    window.location.href = B
                };
            return je(() => l.value, async g => {
                g === 21 && (ra({
                    message: "加载中...",
                    forbidClick: !0
                }), await w(), s.arPayInfo = h.value, ca())
            }, {
                immediate: !0
            }), (g, U) => {
                var T, m, k, P, I;
                const B = x("van-icon");
                return n(), i("div", null, [a(o) ? (n(), i("div", {
                    key: 0,
                    class: ae(["new_upi", {
                        upi_active: a(s).currentMenu === -1
                    }]),
                    onClick: U[0] || (U[0] = O => a(c)(-1))
                }, [e("img", {
                    src: a(o).payNameUrl,
                    alt: ""
                }, null, 8, ci), e("div", di, [e("div", ui, t(a(o).payName), 1), (T = a(o)) != null && T.maxRechargeRifts ? (n(), i("div", vi, "+" + t(((m = a(o)) == null ? void 0 : m.maxRechargeRifts) * 100) + "%", 1)) : f("v-if", !0), a(o).maxRechargeRifts ? (n(), i("div", _i, t(a($)("arGift", [a(Kt)(a(o).maxRechargeRifts || 0, 100) + "%"])), 1)) : f("v-if", !0), (k = a(o)) != null && k.maxRechargeRifts ? (n(), i("div", pi, "+" + t(((P = a(o)) == null ? void 0 : P.maxRechargeRifts) * 100) + "%", 1)) : f("v-if", !0)])], 2)) : f("v-if", !0), e("div", hi, [(n(!0), i(de, null, $e(a(r), (O, q) => (n(), i("div", {
                    key: q,
                    class: ae(["Recharge__container-tabcard__items", {
                        active: q === a(s).currentMenu
                    }])
                }, [e("div", {
                    class: "centers",
                    onClick: R => a(c)(q)
                }, [O.maxRechargeRifts && O.maxRechargeRifts > 0 ? (n(), i("div", fi, [e("span", null, "+" + t(a(Ht)((O == null ? void 0 : O.maxRechargeRifts) * 100)) + "%", 1)])) : f("v-if", !0), e("div", wi, [e("img", {
                    class: "img",
                    src: q === a(s).currentMenu ? O.payNameUrl2 : O.payNameUrl,
                    alt: ""
                }, null, 8, yi)]), e("div", gi, [H(t(O.payName) + " ", 1), f(' <span v-if="item.maxRechargeRifts && item.maxRechargeRifts > 0">{{ item?.maxRechargeRifts * 100 }}%</span> ')])], 8, mi)], 2))), 128))]), a(o) && a(s).currentMenu === -1 ? (n(), i("div", $i, [e("div", {
                    class: "rule",
                    onClick: U[1] || (U[1] = O => A())
                }, [e("div", bi, [e("img", {
                    src: a(F)("wallet", "ar1")
                }, null, 8, ki), e("p", null, t(g.$t("arbTip1")), 1)]), e("div", Ci, [H(t(g.$t("checkOver")), 1), S(B, {
                    name: "arrow"
                })])]), e("div", Ti, [e("div", Si, [e("img", {
                    src: a(o).payNameUrl,
                    alt: ""
                }, null, 8, Ii), e("div", null, [a(d) ? (n(), i("div", Ni, t(a($)("arbTip13")), 1)) : f("v-if", !0), a(d) ? (n(), i("div", Ri, [H(t(((I = a(h)) == null ? void 0 : I.balance) || 0), 1), Di])) : (n(), i("div", Ai, t(g.$t("arNoActive")), 1))])]), e("div", {
                    class: "ar_btn",
                    onClick: v
                }, t(a(d) ? a($)("comminWallet") : a($)("arActive")), 1)]), f(` <div class="ar_wallet_tip">{{ $t('arTip') }}</div> `)])) : f("v-if", !0)])
            }
        }
    });
const Bi = re(Ui, [
        ["__scopeId", "data-v-4f3d8608"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/Recharge/RechargeMenu.vue"]
    ]),
    Wi = {
        key: 0,
        class: "arCard"
    },
    Oi = {
        class: "left"
    },
    Pi = ["src"],
    Li = {
        class: "features"
    },
    Mi = {
        class: "title"
    },
    Vi = ["src"],
    qi = {
        class: "t1"
    },
    ji = {
        class: "t3"
    },
    Ei = ["innerHTML"],
    Hi = ["innerHTML"],
    xi = ie({
        __name: "noActivate",
        props: {
            pageType: {
                type: String,
                required: !0
            }
        },
        setup(b) {
            const s = () => {
                    const o = encodeURIComponent("https://" + window.location.host + "/#/main");
                    let d = `https://arbpay.me/#/ActivaRules?lang=${localStorage.getItem("language")}&returnUrl=${o}`;
                    window.location.href = d
                },
                {
                    goActive: c
                } = kt(),
                r = V(() => We().getProjectName);
            return (o, l) => {
                const d = x("van-icon");
                return n(), i(de, null, [o.pageType !== "wallet/recharge" ? (n(), i("div", Wi, [e("div", Oi, [e("img", {
                    src: a(F)("wallet/withdrawType", "21")
                }, null, 8, Pi), H(" " + t(o.$t("arbTip3")), 1)]), e("div", {
                    class: "right",
                    onClick: l[0] || (l[0] = h => a(c)(o.pageType))
                }, t(o.$t("arbActive")), 1)])) : f("v-if", !0), e("div", Li, [e("div", Mi, [e("img", {
                    src: a(F)("wallet", "ar2")
                }, null, 8, Vi), H(" " + t(o.$t("arbTip4")), 1)]), e("p", null, t(o.$t("arbTip5")), 1), e("p", qi, t(o.$t("arbTip6")), 1), e("p", {
                    class: "t2",
                    onClick: l[1] || (l[1] = h => s())
                }, [H(t(o.$t("arbTip7")), 1), S(d, {
                    name: "arrow"
                })]), e("p", ji, t(o.$t("arbTip8")), 1), e("p", {
                    innerHTML: o.$t("abbTip9", [r.value])
                }, null, 8, Ei), e("p", {
                    innerHTML: o.$t("arbTip10", [r.value])
                }, null, 8, Hi), e("p", null, t(o.$t("arbTip11")), 1), e("p", null, t(o.$t("arbTip12")), 1), e("div", {
                    class: "toActive",
                    onClick: l[2] || (l[2] = h => a(c)(o.pageType))
                }, t(o.$t("arActive")), 1)])], 64)
            }
        }
    });
const Ta = re(xi, [
        ["__scopeId", "data-v-e7d19060"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/Withdraw/Ar/noActivate.vue"]
    ]),
    Tt = b => (Ae("data-v-9e03166f"), b = b(), Re(), b),
    Fi = {
        class: "Recharge__content"
    },
    zi = {
        key: 0,
        class: "Recharge__content-quickInfo boxStyle"
    },
    Ki = {
        class: "Recharge__content-quickInfo__title"
    },
    Gi = {
        class: "title"
    },
    Qi = ["src"],
    Zi = ["onClick"],
    Yi = {
        key: 0,
        class: "other"
    },
    Xi = {
        key: 0,
        class: "bouns"
    },
    Ji = {
        key: 1,
        class: "usdt_icon"
    },
    er = ["src"],
    tr = {
        key: 0,
        class: "bouns"
    },
    ar = {
        key: 1,
        class: "other_bank"
    },
    nr = {
        class: "select_bank_tit"
    },
    sr = {
        key: 2,
        class: "transfer boxStyle"
    },
    lr = {
        class: "title"
    },
    or = ["src"],
    ir = {
        class: "transfer_list"
    },
    rr = ["src"],
    cr = ["src"],
    dr = {
        key: 3,
        class: "bank_list"
    },
    ur = ["onClick"],
    vr = ["data-img"],
    _r = {
        key: 5,
        class: "Recharge__content-paymoney boxStyle"
    },
    pr = {
        class: "Recharge__content-paymoney__title"
    },
    hr = ["src"],
    mr = ["src"],
    fr = {
        key: 2
    },
    wr = {
        key: 3
    },
    yr = {
        class: "Recharge__content-paymoney__money-list"
    },
    gr = ["onClick"],
    $r = ["src"],
    br = {
        key: 1
    },
    kr = {
        key: 0,
        class: "ar_gift"
    },
    Cr = ["src"],
    Tr = {
        class: "place-div"
    },
    Sr = {
        key: 2,
        class: "unit"
    },
    Ir = ["src"],
    Nr = {
        key: 2,
        class: "recharge_tip"
    },
    Ar = {
        class: "Recharge__content-waitPay boxStyle"
    },
    Rr = ["src"],
    Dr = {
        class: "wait_text"
    },
    Ur = Tt(() => e("span", null, "3", -1)),
    Br = Tt(() => e("span", null, "0", -1)),
    Wr = Tt(() => e("span", null, ":", -1)),
    Or = Tt(() => e("span", null, "0", -1)),
    Pr = Tt(() => e("span", null, "0", -1)),
    Lr = [Ur, Br, Wr, Or, Pr],
    Mr = {
        class: "showAmountError"
    },
    Vr = {
        class: "title1"
    },
    qr = {
        class: "title2"
    },
    jr = {
        class: "title2 red"
    },
    Er = {
        class: "button"
    },
    Hr = ie({
        __name: "RechargeContainer",
        setup(b) {
            const s = C(),
                {
                    store: c,
                    currentPayId: r,
                    isLocakBank: o,
                    isArpay: l,
                    isNumberPay: d,
                    isHaveOrder: h,
                    currentPayTypeId: w,
                    handleSelectPayType: u,
                    numberKeyObj: _,
                    handleQuickSelect: $,
                    handleInput: v,
                    getC2CunitAmount: A,
                    handleClearInput: g,
                    formatNum: U,
                    setCountdownRef: B,
                    getElwallett: T,
                    isSplitLocalEWallet: m,
                    handleSelectBank: k,
                    IsShowRechargeBankList: P,
                    showOtherSelect: I,
                    confirmOtherSelectBank: O,
                    isOtherRecharge: q,
                    currentOtherThirdBankList: R,
                    getTransferBankList: Z,
                    transfer: M,
                    handleRecharge: j,
                    showAmountError: N
                } = Je(),
                {
                    arWallet: y,
                    isArWalletActive: E,
                    goWallet: ee
                } = kt(),
                pe = ye(),
                G = V(() => We().getDollarSign),
                W = V(() => l.value ? "arActive" : "active");
            ge(() => {
                B(s.value)
            });
            const L = () => {
                    c.amount = 1e3, c.currentQuickIndex = -1
                },
                we = V(() => l.value ? !!E.value : !h.value),
                le = async () => {
                    let oe = r.value === 18 ? T() : c.currentPayType.payTypeID;
                    r.value === 21 ? window.location.href = c.isArPayOrder : r.value === 12 ? pe.push({
                        name: "OtherPay",
                        query: {
                            type: "upi"
                        }
                    }) : r.value === 19 ? pe.push({
                        name: "RechargeUsdt",
                        query: {
                            amount: c.numberPayAmount
                        }
                    }) : pe.push({
                        name: "RechargeDetail",
                        query: {
                            currentPayId: r.value,
                            payTypeId: oe,
                            amount: c.amount
                        }
                    })
                },
                X = () => {
                    ee("wallet/recharge")
                };
            return (oe, Q) => {
                var K, ce;
                const Oe = x("van-icon"),
                    Ce = x("van-field"),
                    Pe = x("van-picker"),
                    qe = x("van-popup"),
                    Be = x("van-dialog"),
                    Me = ze("lazy"),
                    Y = ze("throttle-click");
                return n(), i(de, null, [e("div", Fi, [f(" 在线支付 "), f(' <OnlinePay v-show="currentMenu === 1" /> '), f("  选择通道  "), !a(o) && !a(l) && !a(h) ? (n(), i("div", zi, [e("div", Ki, [e("div", Gi, [e("img", {
                    src: a(F)("wallet", "quickpay2"),
                    alt: ""
                }, null, 8, Qi), e("p", null, t(oe.$t("RCTXT1")), 1)])]), e("div", {
                    class: ae(["rechargeTypes_list", {
                        numberPay: a(d)
                    }])
                }, [(n(!0), i(de, null, $e(a(c).rechargeTypes, (se, me) => (n(), i("div", {
                    class: ae(["Recharge__content-quickInfo__item", {
                        item_active: a(w) === se.payTypeID
                    }]),
                    key: se.payTypeID,
                    onClick: Ve => a(u)(me)
                }, [a(r) !== 11 ? (n(), i("div", Yi, [e("div", null, t(se.payName), 1), e("div", null, t(oe.$t("RCTXT2")) + t(se.miniPrice) + " - " + t(a(U)(se.maxPrice)), 1), se.rechargeRifts > 0 ? (n(), i("div", Xi, t(a(Ht)(se.rechargeRifts * 100)) + "% bonus", 1)) : f("v-if", !0)])) : (n(), i("div", Ji, [e("img", {
                    src: a(F)("wallet", "usdt"),
                    alt: ""
                }, null, 8, er), e("div", null, [e("div", null, t(se.payName), 1), e("div", null, t(oe.$t("RCTXT2")) + t(se.miniPrice) + " - " + t(a(U)(se.maxPrice)), 1), se.rechargeRifts > 0 ? (n(), i("div", tr, t(a(Ht)(se.rechargeRifts * 100)) + "% bonus", 1)) : f("v-if", !0)])]))], 10, Zi))), 128))], 2)])) : f("v-if", !0), a(q) && a(c).thirdPayBankList.length > 0 && a(R).length > 0 ? (n(), i("div", ar, [e("div", nr, t(oe.$t("selectBank")), 1), e("div", {
                    class: "bank_name",
                    onClick: Q[0] || (Q[0] = se => I.value = !0)
                }, [H(t((K = a(c).selectOtherBank) == null ? void 0 : K.bankName) + " ", 1), S(Oe, {
                    name: "arrow",
                    class: "right_arrow"
                })])])) : f("v-if", !0), f(" 孟加拉的转账类型选择 "), G.value === "৳" && !a(h) && a(r) === 9 ? (n(), i("div", sr, [e("div", lr, [e("img", {
                    src: a(ue)("wallet/recharge", "transf_amount"),
                    alt: ""
                }, null, 8, or), H(" " + t(oe.$t("transferType")), 1)]), e("div", ir, [e("div", {
                    class: ae(["item", {
                        transfer_active: a(M) === 1
                    }]),
                    onClick: Q[1] || (Q[1] = se => M.value = 1)
                }, [e("img", {
                    src: a(ue)("wallet/recharge", "banktobank"),
                    alt: ""
                }, null, 8, rr), H(" " + t(oe.$t("banktobank")), 1)], 2), e("div", {
                    class: ae(["item", {
                        transfer_active: a(M) === 2
                    }]),
                    onClick: Q[2] || (Q[2] = se => M.value = 2)
                }, [e("img", {
                    src: a(ue)("wallet/recharge", "wallettobank"),
                    alt: ""
                }, null, 8, cr), H(" " + t(oe.$t("wallettobank")), 1)], 2)])])) : f("v-if", !0), f(" 银行列表 "), a(o) && a(m) && a(P) && !a(h) ? (n(), i("div", dr, [(n(!0), i(de, null, $e(G.value === "৳" ? a(Z) : a(c).bankList, (se, me) => (n(), i("div", {
                    class: ae(["bank_item", {
                        bank_item_active: a(c).currentBankIndex === me
                    }]),
                    onClick: Ve => a(k)(me)
                }, [he(e("img", {
                    alt: "",
                    "data-img": a(F)("wallet", "slot_wallet")
                }, null, 8, vr), [
                    [Me, se.bankLogo]
                ]), H(" " + t(se.bankName), 1)], 10, ur))), 256))])) : f("v-if", !0), !a(E) && a(l) ? (n(), Ie(Ta, {
                    key: 4,
                    "page-type": "wallet/recharge"
                })) : f("v-if", !0), f(" 充值金额选择 "), we.value ? (n(), i("div", _r, [e("div", pr, [a(d) ? (n(), i("img", {
                    key: 1,
                    src: a(F)("wallet", a(_)[a(r)].icon),
                    alt: ""
                }, null, 8, mr)) : (n(), i("img", {
                    key: 0,
                    src: a(F)("wallet", "saveWallet"),
                    alt: ""
                }, null, 8, hr)), a(d) ? (n(), i("p", wr, t(((ce = a(_)[a(r)]) == null ? void 0 : ce.selectText) || ""), 1)) : (n(), i("p", fr, t(a(l) ? oe.$t("arbRecharge") : oe.$t("rechageAmount")), 1))]), e("div", yr, [(n(!0), i(de, null, $e(a(c).quickList, (se, me) => {
                    var Ve;
                    return n(), i("div", {
                        class: ae(["Recharge__content-paymoney__money-list__item", a(c).currentQuickIndex === me ? W.value : ""]),
                        key: me,
                        onClick: Ge => a($)(me)
                    }, [e("div", {
                        class: ae(["amount", {
                            arAmount: a(l)
                        }])
                    }, [a(d) ? (n(), i("img", {
                        key: 0,
                        src: a(F)("wallet", a(_)[a(r)].icon),
                        alt: "",
                        class: "usdt"
                    }, null, 8, $r)) : f("v-if", !0), !a(d) && !a(l) ? (n(), i("span", br, t(G.value), 1)) : f("v-if", !0), H(" " + t(a(l) ? "₹" + a(U)(Number(se)) : a(U)(Number(se))), 1)], 2), a(l) && ((Ve = a(c).currentPayType) != null && Ve.rechargeRifts) ? (n(), i("div", kr, [H(t(oe.$t("k3WarningTip4")) + " ₹ ", 1), e("span", null, t(a(U)(Number(a(c).currentPayType.rechargeRifts * (se || 0)))), 1)])) : f("v-if", !0)], 10, gr)
                }), 128))]), a(d) ? (n(), i("div", {
                    key: 0,
                    class: ae(["Recharge__content-paymoney__money-input", {
                        radius: a(d)
                    }])
                }, [e("div", {
                    class: ae(["place-div", a(_)[a(r)].icon])
                }, null, 2), S(Ce, {
                    modelValue: a(c).numberPayAmount,
                    "onUpdate:modelValue": Q[3] || (Q[3] = se => a(c).numberPayAmount = se),
                    modelModifiers: {
                        number: !0
                    },
                    type: "digit",
                    placeholder: a(_)[a(r)].placeholder,
                    class: "amount-input",
                    onInput: Q[4] || (Q[4] = se => a(v)(se))
                }, null, 8, ["modelValue", "placeholder"]), e("div", {
                    class: "place-right",
                    onClick: Q[5] || (Q[5] = se => a(g)())
                }, [e("img", {
                    src: a(ue)("wallet/recharge", "clean"),
                    alt: ""
                }, null, 8, Cr)])], 2)) : f("v-if", !0), a(r) != 6 ? (n(), i("div", {
                    key: 1,
                    class: ae(["Recharge__content-paymoney__money-input", {
                        radius: a(d)
                    }])
                }, [e("div", Tr, t(G.value), 1), a(d) ? (n(), Ie(Ce, {
                    key: 0,
                    disabled: a(d),
                    modelValue: a(c).numberExchangeRate,
                    "onUpdate:modelValue": Q[6] || (Q[6] = se => a(c).numberExchangeRate = se),
                    modelModifiers: {
                        number: !0
                    },
                    type: "digit",
                    placeholder: oe.$t("enterAmount"),
                    class: "amount-input",
                    onInput: Q[7] || (Q[7] = se => a(v)(se))
                }, null, 8, ["disabled", "modelValue", "placeholder"])) : (n(), Ie(Ce, {
                    key: 1,
                    modelValue: a(c).amount,
                    "onUpdate:modelValue": Q[8] || (Q[8] = se => a(c).amount = se),
                    modelModifiers: {
                        number: !0
                    },
                    type: "digit",
                    placeholder: oe.$t("enterAmount"),
                    class: "amount-input",
                    onInput: Q[9] || (Q[9] = se => a(v)(se))
                }, null, 8, ["modelValue", "placeholder"])), a(r) === 20 ? (n(), i("div", Sr, t(a(A)), 1)) : f("v-if", !0), !a(d) && !a(l) ? (n(), i("div", {
                    key: 3,
                    class: "place-right",
                    onClick: Q[10] || (Q[10] = se => a(g)())
                }, [e("img", {
                    src: a(ue)("wallet/recharge", "clean"),
                    alt: ""
                }, null, 8, Ir)])) : f("v-if", !0), a(l) ? (n(), i("div", {
                    key: 4,
                    class: "ar_all",
                    onClick: L
                }, t(oe.$t("withdrawStatem1")), 1)) : f("v-if", !0)], 2)) : f("v-if", !0), a(c).validateAmount ? (n(), i("div", Nr, t(a(c).validateAmount), 1)) : f("v-if", !0), !a(h) || a(q) ? he((n(), i("div", {
                    key: 3,
                    class: ae(["Recharge__container-rechageBtn", a(c).rechargeSubmitBtnStatus ? "rechage_active" : ""])
                }, [H(t(oe.$t("recharge")), 1)], 2)), [
                    [Y, {
                        handler: a(j),
                        wait: 2e3
                    }]
                ]) : f("v-if", !0)])) : f("v-if", !0), he(e("div", Ar, [e("img", {
                    src: a(F)("wallet", "tip"),
                    alt: ""
                }, null, 8, Rr), e("div", Dr, t(oe.$t("RCTXT3")), 1), a(l) ? f("v-if", !0) : (n(), i("div", {
                    key: 0,
                    class: "Recharge__content-waitPay__countdown",
                    ref_key: "countdownRef",
                    ref: s
                }, Lr, 512)), e("div", {
                    class: "go_pay",
                    onClick: le
                }, t(oe.$t("RCTXT4")), 1)], 512), [
                    [vt, a(h)]
                ]), S(qe, {
                    show: a(I),
                    "onUpdate:show": Q[12] || (Q[12] = se => Ye(I) ? I.value = se : null),
                    round: "",
                    position: "bottom"
                }, {
                    default: J(() => [S(Pe, {
                        "columns-field-names": {
                            text: "bankName",
                            value: "bankCode",
                            children: "children"
                        },
                        columns: a(R),
                        onCancel: Q[11] || (Q[11] = se => I.value = !1),
                        onConfirm: a(O)
                    }, null, 8, ["columns", "onConfirm"])]),
                    _: 1
                }, 8, ["show"])]), S(Be, {
                    show: a(N),
                    "onUpdate:show": Q[14] || (Q[14] = se => Ye(N) ? N.value = se : null),
                    "show-confirm-button": !1,
                    width: 327
                }, {
                    default: J(() => {
                        var se;
                        return [e("div", Mr, [e("div", Vr, t(oe.$t("arb1")), 1), e("div", qr, t(oe.$t("arb2")), 1), e("div", jr, t(oe.$t("arb3", [((se = a(y)) == null ? void 0 : se.withdrawalRewardRatio) || 0])), 1), e("div", Er, [e("div", {
                            class: "clance",
                            onClick: Q[13] || (Q[13] = me => N.value = !1)
                        }, t(oe.$t("cancel")), 1), e("div", {
                            class: "goBuy",
                            onClick: X
                        }, t(oe.$t("arb4")), 1)])])]
                    }),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const xr = re(Hr, [
        ["__scopeId", "data-v-9e03166f"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/Recharge/RechargeContainer.vue"]
    ]),
    Fr = {
        class: "balanceAssets"
    },
    zr = {
        class: "balanceAssets__header"
    },
    Kr = {
        class: "balanceAssets__header__left"
    },
    Gr = ["src"],
    Qr = {
        class: "balanceAssets__main"
    },
    Zr = ["src"],
    Yr = ie({
        __name: "BalanceAssets",
        setup(b) {
            const s = at();
            return (c, r) => (n(), i("div", Fr, [e("div", zr, [e("div", Kr, [e("img", {
                src: a(F)("wallet", "balance")
            }, null, 8, Gr), H(" " + t(c.$t("balance")), 1)])]), e("div", Qr, [e("p", null, t(a(ve)(a(s).getAmount)), 1), e("img", {
                src: a(ue)("wallet/recharge", "refresh"),
                alt: "",
                onClick: r[0] || (r[0] = o => a(s).resetData())
            }, null, 8, Zr)]), f(` <div class="balanceAssets__tip">
			<img :src="getIconsPublic('wallet/recharge', 'cip')" alt="" />
		</div> `)]))
        }
    });
const Xr = re(Yr, [
        ["__scopeId", "data-v-98c90f53"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/BalanceAssets.vue"]
    ]),
    Jr = ie({
        __name: "CountDownTimer",
        props: {
            startTime: {
                type: String,
                required: !0
            },
            endTime: {
                type: String,
                required: !0
            },
            className: {
                type: String,
                required: !1
            }
        },
        setup(b) {
            const s = b,
                c = C(),
                r = C("00:00");
            return ge(() => {
                let o = s.startTime,
                    l = s.endTime,
                    d = new Date(o.replace(/-/g, "/")).getTime(),
                    h = new Date(l.replace(/-/g, "/")).getTime(),
                    w = d - h;
                c.value = setInterval(() => {
                    w -= 1e3, r.value = bt(w, "mm:ss"), w < 0 && (clearInterval(c.value), r.value = "00:00")
                }, 1e3)
            }), lt(() => {
                clearInterval(c.value)
            }), (o, l) => (n(), i("span", {
                class: ae([o.className, "count_timer"])
            }, t(r.value), 3))
        }
    });
const Sa = re(Jr, [
        ["__scopeId", "data-v-b3f8911c"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/Recharge/CountDownTimer.vue"]
    ]),
    ec = b => (Ae("data-v-9f5f4114"), b = b(), Re(), b),
    tc = {
        class: "record__main"
    },
    ac = {
        class: "record__main-title"
    },
    nc = ["src"],
    sc = {
        key: 1
    },
    lc = ["onClick"],
    oc = {
        class: "record__main-info__title flex_between"
    },
    ic = {
        class: "recharge_text"
    },
    rc = {
        class: "flex_between"
    },
    cc = ["src"],
    dc = {
        key: 0,
        class: "record__main-info__money item flex_between"
    },
    uc = {
        key: 1,
        class: "record__main-info__money item flex_between"
    },
    vc = {
        key: 2,
        class: "record__main-info__type item flex_between"
    },
    _c = {
        key: 3,
        class: "record__main-info__type item flex_between"
    },
    pc = ec(() => e("span", null, "UTR", -1)),
    hc = ["src", "onClick"],
    mc = {
        key: 4,
        class: "record__main-info__time item flex_between"
    },
    fc = {
        key: 5,
        class: "record__main-info__time item flex_between"
    },
    wc = {
        key: 6,
        class: "record__main-info__orderNumber item flex_between"
    },
    yc = ["src", "onClick"],
    gc = {
        key: 7,
        class: "record__main-info__orderNumber item flex_between"
    },
    $c = ["src", "onClick"],
    bc = ["onClick"],
    kc = ie({
        __name: "RechargeRecord",
        setup(b, {
            expose: s
        }) {
            const c = _t(),
                {
                    store: r,
                    historyToDetail: o,
                    getRecordList: l,
                    RechargeRList: d
                } = Je(),
                h = V(() => d.value.length >= 5),
                w = ye(),
                u = v => {
                    let A = "";
                    switch (v.state) {
                        case 0:
                            A = "recharge";
                            break;
                        case 1:
                            A = "check";
                            break;
                        case 2:
                            A = "timeout";
                            break;
                        case 3:
                            A = "representation";
                            break;
                        case 4:
                            A = "success";
                            break;
                        case 5:
                            A = "fail";
                            break;
                        case 6:
                            A = "cancel";
                            break;
                        default:
                            A = "#FFB800";
                            break
                    }
                    return A
                },
                _ = async v => {
                    o(v.payID || v.category, v.type, v.price, v.state, v.id)
                },
                $ = () => {
                    c.emit("changeKeepAliveKey"), w.push({
                        name: "RechargeHistory"
                    })
                };
            return ge(() => {
                l()
            }), s({
                getRecordList: l
            }), (v, A) => (n(), i("div", tc, [e("div", ac, [e("img", {
                src: a(F)("wallet", "historyHead"),
                alt: ""
            }, null, 8, nc), e("span", null, t(a(r).currentPayId === 20 ? "C2C" + v.$t("rechargeRecords") : v.$t("rechargeRecords")), 1)]), a(d).length < 1 ? (n(), Ie(pt, {
                key: 0,
                class: "mgt40"
            })) : f("v-if", !0), a(d).length > 0 ? (n(), i("div", sc, [(n(!0), i(de, null, $e(a(d), g => (n(), i("div", {
                class: "record__main-info",
                key: g.rechargeNumber,
                onClick: U => _(g)
            }, [e("div", oc, [e("div", ic, t(v.$t("recharge")), 1), e("div", rc, [a(r).currentPayId !== 20 ? (n(), i("div", {
                key: 0,
                class: ae({
                    danger: g.state === 0,
                    success: g.state === 1
                })
            }, t(v.$t(a(Xe)(a(De).RechargeState, g.state))), 3)) : (n(), i("div", {
                key: 1,
                class: ae(u(g))
            }, [H(t(a(Xe)(a(De).RechargeC2CState, g.state)) + " ", 1), g.state === 1 || g.state === 0 ? (n(), Ie(Sa, {
                "start-time": g.endTime,
                "end-time": g.serviceTime,
                "class-name": u(g),
                key: g.id
            }, null, 8, ["start-time", "end-time", "class-name"])) : f("v-if", !0)], 2)), g.state !== 2 ? (n(), i("img", {
                key: 2,
                src: a(ue)("wallet/recharge", "left_arrow"),
                alt: ""
            }, null, 8, cc)) : f("v-if", !0)])]), a(r).currentPayId !== 20 ? (n(), i("div", dc, [e("span", null, t(v.$t("amount")), 1), e("span", null, t(a(ve)(g == null ? void 0 : g.price)), 1)])) : (n(), i("div", uc, [e("span", null, t(v.$t("amount")), 1), e("span", null, t(a(ve)(g == null ? void 0 : g.orderAmount)), 1)])), a(r).currentPayId !== 20 ? (n(), i("div", vc, [e("span", null, t(v.$t("type")), 1), e("span", null, t(g == null ? void 0 : g.payName), 1)])) : (n(), i("div", _c, [pc, e("div", null, [e("span", null, t(g.transactionNo || "-"), 1), e("img", {
                src: a(F)("public", "copy"),
                alt: "",
                onClick: Ze(U => a(ke)(g.transactionNo), ["stop"])
            }, null, 8, hc)])])), a(r).currentPayId !== 20 ? (n(), i("div", mc, [e("span", null, t(v.$t("time")), 1), e("span", null, t(g.addTime), 1)])) : (n(), i("div", fc, [e("span", null, t(v.$t("time")), 1), e("span", null, t(g.createTime), 1)])), a(r).currentPayId !== 20 ? (n(), i("div", wc, [e("span", null, t(v.$t("orderNo")), 1), e("div", null, [e("span", null, t(g == null ? void 0 : g.rechargeNumber), 1), e("img", {
                src: a(F)("public", "copy"),
                alt: "",
                onClick: Ze(U => a(ke)(g.rechargeNumber), ["stop"])
            }, null, 8, yc)])])) : (n(), i("div", gc, [e("span", null, t(v.$t("orderNo")), 1), e("div", null, [e("span", null, t(g.orderNo), 1), e("img", {
                src: a(F)("public", "copy"),
                alt: "",
                onClick: Ze(U => a(ke)(g.orderNo), ["stop"])
            }, null, 8, $c)])]))], 8, lc))), 128)), h.value ? (n(), i("div", {
                key: 0,
                class: "record__main-more",
                onClick: Ze($, ["stop"])
            }, t(v.$t("allRecords")), 9, bc)) : f("v-if", !0)])) : f("v-if", !0)]))
        }
    });
const Cc = re(kc, [
        ["__scopeId", "data-v-9f5f4114"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/Recharge/RechargeRecord.vue"]
    ]),
    Tc = {
        class: "Recharge__box"
    },
    Sc = {
        class: "Recharge__container"
    },
    Ic = {
        class: "cancen_model_cnt"
    },
    Nc = {
        class: "promptHeader"
    },
    Ac = {
        class: "promptContent"
    },
    Rc = {
        class: "input_item"
    },
    Dc = ["maxlength", "onUpdate:modelValue", "placeholder", "onInput"],
    Uc = {
        key: 0,
        class: "tip"
    },
    Bc = {
        key: 1,
        class: "tip"
    },
    Wc = {
        class: "footer_btn"
    },
    Oc = {
        class: "forbidden_tip"
    },
    Pc = {
        class: "forbidden1"
    },
    Lc = {
        class: "forbidden2"
    },
    Mc = {
        class: "forbidden3"
    },
    Vc = {
        class: "cancen_model_cnt"
    },
    qc = ie({
        __name: "index",
        setup(b) {
            const {
                store: s,
                C2CforbiddenShow: c,
                ErrorCount: r,
                RemainingLimitTime: o,
                currentPayId: l,
                validateBankForm: d,
                localBankRecharge: h,
                getRechargeTypeName: w,
                getAmountList: u,
                isFirstPixRecharge: _,
                isArpay: $
            } = Je(), {
                isArWalletActive: v
            } = kt(), A = ye(), g = at(), U = _t(), B = C(!1), T = V(() => We().getDollarSign), m = V(() => $.value ? !v.value : !1), k = () => {
                U.emit("changeKeepAliveKey"), A.push({
                    name: "RechargeHistory"
                })
            };

            function P() {
                A.go(-1)
            }
            const I = () => {
                u(), B.value = !1
            };
            return ge(async () => {
                g.resetData(!0), w()
            }), (O, q) => {
                const R = x("NavBar"),
                    Z = x("van-dialog");
                return n(), i("div", Tc, [e("div", Sc, [S(R, {
                    class: "white",
                    title: O.$t("recharge"),
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: P
                }, {
                    right: J(() => [e("div", {
                        class: "title",
                        onClick: k
                    }, t(O.$t("rechargeRecords")), 1)]),
                    _: 1
                }, 8, ["title"]), f(" 余额组件 "), S(Xr), f(" 支付方式选择菜单 "), S(Bi), f(" 支付方式组件 "), S(xr), f(` <div
				v-if="!isHaveOrder || isOtherRecharge"
				class="Recharge__container-rechageBtn"
				:class="store.rechargeSubmitBtnStatus ? 'rechage_active' : ''"
				v-throttle-click="{ handler: handleRecharge, wait: 2000 }"
			>
				{{ $t('recharge') }}
			</div> `), f(" 充值说明组件 "), a(l) && !m.value ? (n(), Ie(Ct, {
                    key: 0,
                    "show-type": a(l),
                    isShowHead: !0,
                    rechargeInfo: a(s).currentPayType
                }, null, 8, ["show-type", "rechargeInfo"])) : f("v-if", !0), a(l) && !m.value ? (n(), Ie(Cc, {
                    ref: "recordRef",
                    payID: a(l),
                    key: a(l)
                }, null, 8, ["payID"])) : f("v-if", !0)]), f(" <RechargeUpiSheet /> "), S(Fe, {
                    show: B.value,
                    "onUpdate:show": q[0] || (q[0] = M => B.value = M),
                    onConfirm: I,
                    "show-cancel-btn": !0,
                    confirmText: "OK",
                    title: O.$t("c2cLapseOfAmount")
                }, {
                    content: J(() => [e("div", Ic, t(O.$t("c2cPCAAmount")), 1)]),
                    _: 1
                }, 8, ["show", "title"]), a(s).isRechargeInputDialog && a(l) !== 19 ? (n(), Ie(Z, {
                    key: 0,
                    show: a(s).rechargeDialogVisible,
                    "onUpdate:show": q[3] || (q[3] = M => a(s).rechargeDialogVisible = M),
                    "confirm-button-text": O.$t("confirm")
                }, {
                    footer: J(() => []),
                    default: J(() => [e("div", Nc, t(O.$t("prompt")), 1), e("div", Ac, [(n(!0), i(de, null, $e(a(s).bank_local, (M, j) => (n(), i("div", Rc, [e("div", null, t(M.split(",")[0]), 1), he(e("input", {
                        class: "input_bank",
                        maxlength: j === 0 ? 50 : 30,
                        "onUpdate:modelValue": N => a(s).bankInfo[M.split(",")[1]] = N,
                        placeholder: O.$t("requiredFaild"),
                        onInput: N => a(d)(a(s).bankInfo[M.split(",")[1]], j, M.split(",")[1])
                    }, null, 40, Dc), [
                        [Se, a(s).bankInfo[M.split(",")[1]], void 0, {
                            trim: !0
                        }]
                    ])]))), 256)), T.value === "৳" ? (n(), i("div", Uc, t(O.$t("rechargeBankVailte2")), 1)) : (n(), i("div", Bc, t(a(l) === 9 ? O.$t("rechargeBankVailte1") : O.$t("rechargeBankVailte")), 1)), e("div", Wc, [e("div", {
                        onClick: q[1] || (q[1] = (...M) => a(h) && a(h)(...M))
                    }, t(O.$t("confirm")), 1), e("div", {
                        onClick: q[2] || (q[2] = M => a(s).rechargeDialogVisible = !1)
                    }, t(O.$t("cancel")), 1)])])]),
                    _: 1
                }, 8, ["show", "confirm-button-text"])) : f("v-if", !0), S(Fe, {
                    show: a(c),
                    "onUpdate:show": q[4] || (q[4] = M => Ye(c) ? c.value = M : null),
                    title: O.$t("C2Cforbidden", [a(o)]),
                    "img-url": "forbhidden",
                    showCancelBtn: !1,
                    onConfirm: q[5] || (q[5] = M => c.value = !1),
                    "cancel-text": O.$t("close"),
                    "confirm-text": O.$t("sure")
                }, {
                    content: J(() => [e("div", Oc, t(O.$t("C2Cforbidden1", [a(o)])), 1), e("div", Pc, t(O.$t("C2Cforbidden2", [a(r)])), 1), e("div", Lc, t(O.$t("C2Cforbidden3", [a(o)])), 1), e("div", Mc, t(O.$t("C2Cforbidden4")), 1)]),
                    _: 1
                }, 8, ["show", "title", "cancel-text", "confirm-text"]), S(Fe, {
                    show: a(_),
                    "onUpdate:show": q[6] || (q[6] = M => Ye(_) ? _.value = M : null),
                    onConfirm: q[7] || (q[7] = M => _.value = !1),
                    "show-cancel-btn": !1,
                    confirmText: O.$t("confirm"),
                    cancelText: O.$t("cancel"),
                    title: O.$t("safetyTips")
                }, {
                    content: J(() => [e("div", Vc, t(O.$t("safetyTips1")), 1)]),
                    _: 1
                }, 8, ["show", "confirmText", "cancelText", "title"]), f(` <van-action-sheet v-model:show="thirdRechargeDialog" :title="store.currentPayType.payName" :close-icon="getIcons('wallet/recharge' ,'close')">
			<div id="third_content"></div>
		</van-action-sheet> `), f(` <div class="Recharge__container-rechageBtn" :class="quickRecharge ? 'rechage_active' : ''" @click="handleSubmit">
			{{ $t('recharge') }}
		</div> `)])
            }
        }
    });
const jc = re(qc, [
        ["__scopeId", "data-v-36cc3380"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/Recharge/index.vue"]
    ]),
    sb = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: jc
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Le = b => (Ae("data-v-845bb16b"), b = b(), Re(), b),
    Ec = {
        class: "rechargeDetail__container"
    },
    Hc = {
        class: "rechargeDetail__container-header"
    },
    xc = Le(() => e("span", null, null, -1)),
    Fc = Le(() => e("span", null, null, -1)),
    zc = Le(() => e("span", null, null, -1)),
    Kc = Le(() => e("span", null, null, -1)),
    Gc = Le(() => e("span", null, null, -1)),
    Qc = [xc, Fc, zc, Kc, Gc],
    Zc = {
        class: "rechargeDetail__container-main"
    },
    Yc = {
        class: "rechargeDetail__container-body"
    },
    Xc = {
        class: "rechargeDetail__container-body__title"
    },
    Jc = {
        key: 0,
        class: "rechargeDetail__container-body__content"
    },
    ed = ["onClick"],
    td = Le(() => e("path", {
        d: "M8.66699 8.28741V5.20801C8.66699 4.17247 9.50646 3.33301 10.542 3.33301H26.792C27.8275 3.33301 28.667 4.17247 28.667 5.20801V21.458C28.667 22.4935 27.8275 23.333 26.792 23.333H23.6779",
        stroke: "#666666",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }, null, -1)),
    ad = Le(() => e("path", {
        d: "M21.458 8.66699H5.20801C4.17247 8.66699 3.33301 9.50646 3.33301 10.542V26.792C3.33301 27.8275 4.17247 28.667 5.20801 28.667H21.458C22.4935 28.667 23.333 27.8275 23.333 26.792V10.542C23.333 9.50646 22.4935 8.66699 21.458 8.66699Z",
        stroke: "#666666",
        "stroke-width": "2",
        "stroke-linejoin": "round"
    }, null, -1)),
    nd = [td, ad],
    sd = {
        key: 0,
        class: "rechargeDetail__container-body__content"
    },
    ld = Le(() => e("h1", null, "SWIFT CODE", -1)),
    od = Le(() => e("path", {
        d: "M8.66699 8.28741V5.20801C8.66699 4.17247 9.50646 3.33301 10.542 3.33301H26.792C27.8275 3.33301 28.667 4.17247 28.667 5.20801V21.458C28.667 22.4935 27.8275 23.333 26.792 23.333H23.6779",
        stroke: "#666666",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }, null, -1)),
    id = Le(() => e("path", {
        d: "M21.458 8.66699H5.20801C4.17247 8.66699 3.33301 9.50646 3.33301 10.542V26.792C3.33301 27.8275 4.17247 28.667 5.20801 28.667H21.458C22.4935 28.667 23.333 27.8275 23.333 26.792V10.542C23.333 9.50646 22.4935 8.66699 21.458 8.66699Z",
        stroke: "#666666",
        "stroke-width": "2",
        "stroke-linejoin": "round"
    }, null, -1)),
    rd = [od, id],
    cd = {
        key: 1,
        class: "rechargeDetail__container-body__content"
    },
    dd = Le(() => e("h1", null, "Routing Number", -1)),
    ud = Le(() => e("path", {
        d: "M8.66699 8.28741V5.20801C8.66699 4.17247 9.50646 3.33301 10.542 3.33301H26.792C27.8275 3.33301 28.667 4.17247 28.667 5.20801V21.458C28.667 22.4935 27.8275 23.333 26.792 23.333H23.6779",
        stroke: "#666666",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }, null, -1)),
    vd = Le(() => e("path", {
        d: "M21.458 8.66699H5.20801C4.17247 8.66699 3.33301 9.50646 3.33301 10.542V26.792C3.33301 27.8275 4.17247 28.667 5.20801 28.667H21.458C22.4935 28.667 23.333 27.8275 23.333 26.792V10.542C23.333 9.50646 22.4935 8.66699 21.458 8.66699Z",
        stroke: "#666666",
        "stroke-width": "2",
        "stroke-linejoin": "round"
    }, null, -1)),
    _d = [ud, vd],
    pd = {
        key: 2,
        class: "rechargeDetail__container-body__timestamp"
    },
    hd = Le(() => e("path", {
        d: "M6.5 6.2158V3.90625C6.5 3.1296 7.1296 2.5 7.90625 2.5H20.0938C20.8704 2.5 21.5 3.1296 21.5 3.90625V16.0938C21.5 16.8704 20.8704 17.5 20.0938 17.5H17.7582",
        stroke: "#B8B8B8",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }, null, -1)),
    md = Le(() => e("path", {
        d: "M16.0938 6.5H3.90625C3.1296 6.5 2.5 7.1296 2.5 7.90625V20.0938C2.5 20.8704 3.1296 21.5 3.90625 21.5H16.0938C16.8704 21.5 17.5 20.8704 17.5 20.0938V7.90625C17.5 7.1296 16.8704 6.5 16.0938 6.5Z",
        stroke: "#B8B8B8",
        "stroke-width": "2",
        "stroke-linejoin": "round"
    }, null, -1)),
    fd = [hd, md],
    wd = {
        key: 0,
        class: "utr_box"
    },
    yd = Le(() => e("h1", null, "UTR(UPI Ref.ID)", -1)),
    gd = {
        class: "rechargeDetail__container-buttons"
    },
    $d = {
        key: 0
    },
    bd = {
        key: 1
    },
    kd = {
        class: "actionSheet__content"
    },
    Cd = {
        class: "title"
    },
    Td = Le(() => e("div", {
        class: "divider"
    }, null, -1)),
    Sd = {
        class: "details"
    },
    Id = {
        class: "details"
    },
    Nd = {
        class: "details"
    },
    Ad = {
        class: "details"
    },
    Rd = {
        class: "tipTitle"
    },
    Dd = {
        class: "tipText"
    },
    Ud = {
        class: "cancen_model_cnt"
    },
    Bd = ie({
        __name: "index",
        setup(b) {
            const s = C(),
                c = V(() => Number(T.currentRoute.value.query.currentPayId)),
                r = V(() => Number(T.currentRoute.value.query.payTypeId)),
                o = _t(),
                l = V(() => We().getDollarSign),
                {
                    rechargeActionSheetShow: d,
                    cancelOrderShow: h,
                    store: w,
                    getLoclBankOrderDetail: u,
                    handleFinishOrder: _,
                    handlePaste: $,
                    handeCancelOrder: v,
                    countdownTimeFun: A,
                    setCountdownRef: g,
                    getBankOrderInfo: U
                } = Je(),
                {
                    t: B
                } = be(),
                T = ye(),
                m = We(),
                k = V(() => T.currentRoute.value.query.bankName === "KBZpay" ? {
                    tit1: B("kbzName"),
                    tit2: B("kbzMobile"),
                    tit3: B("rechageAmount")
                } : T.currentRoute.value.query.bankName === "WavePay" ? {
                    tit1: B("waveName"),
                    tit2: B("waveMobile"),
                    tit3: B("rechageAmount")
                } : {
                    tit1: B("rechargeDetailTitle1"),
                    tit2: B(c.value === 9 ? "rechargeDetailTitle2" : "account"),
                    tit3: B("amount")
                }),
                P = Ne([{
                    title: k.value.tit1,
                    value: "",
                    name: "accountName"
                }, {
                    title: k.value.tit2,
                    value: "",
                    name: "bankAccountNumber"
                }, {
                    title: "IFSC",
                    value: "",
                    name: "ifscCode"
                }, {
                    title: k.value.tit3,
                    value: "",
                    name: "amount"
                }]),
                I = () => {
                    o.emit("changeKeepAliveKey"), T.replace({
                        name: "RechargeHistory"
                    })
                },
                O = C(),
                q = V(() => We().getProjectName === "vn168"),
                R = V(() => c.value === 9 ? {
                    text1: B("accountName"),
                    text2: B("bankNumber"),
                    text3: B("orderNumber"),
                    text4: B("rechageAmount")
                } : r.value === 157 ? {
                    text1: B("kbzName"),
                    text2: B("kbzMobile"),
                    text3: B("orderNumber"),
                    text4: B("rechageAmount")
                } : r.value === 158 ? {
                    text1: B("waveName"),
                    text2: B("waveMobile"),
                    text3: B("orderNumber"),
                    text4: B("rechageAmount")
                } : {
                    text1: B("name"),
                    text2: B("account"),
                    text3: B("orderNumber"),
                    text4: B("rechageAmount")
                }),
                Z = V(() => {
                    let y = "";
                    return c.value === 9 ? y = "bank" : r.value === 157 ? y = "kbz" : r.value === 158 ? y = "wave" : y = "bank", F("wallet/detail", y)
                }),
                M = async () => {
                    w.bankUTR = await $()
                },
                j = () => {
                    let y = Number(T.currentRoute.value.query.currentPayId);
                    if ((!w.bankUTR || w.bankUTR.length < 12) && m.getDollarSign === "₹" && y === 9) {
                        _e({
                            message: B("bankUTR"),
                            wordBreak: "break-word"
                        });
                        return
                    }
                    d.value = !0
                },
                N = y => {
                    let E = w.orderDetail ? w.orderDetail[y] : "";
                    y === "bankAccountNumber" && (E = E.replaceAll(" ", "")), ke(E)
                };
            return ge(async () => {
                var y, E, ee, pe, G, W, L;
                g(s.value), await U(Number(T.currentRoute.value.query.payTypeId)), await u(((y = w.orderDetail) == null ? void 0 : y.orderNumber) + ""), P[0].value = ((E = w.orderDetail) == null ? void 0 : E.accountName) || "", P[1].value = ((ee = w.orderDetail) == null ? void 0 : ee.bankAccountNumber) || "", m.getDollarSign === "₹" && c.value === 9 && (P[2].value = ((pe = w.orderDetail) == null ? void 0 : pe.ifscCode) || ""), P[3].value = ((G = w.orderDetail) == null ? void 0 : G.amount) || "", A((W = w.orderDetail) == null ? void 0 : W.serverTime, (L = w.orderDetail) == null ? void 0 : L.addTime1, () => {
                    w.orderDetail = void 0, w.isBankOrder = !1, T.back()
                })
            }), rn((y, E, ee) => {
                ee()
            }), (y, E) => {
                var W, L, we, le, X;
                const ee = x("NavBar"),
                    pe = x("van-field"),
                    G = x("van-action-sheet");
                return n(), i("div", Ec, [S(ee, {
                    leftArrow: !0,
                    onClickLeft: E[0] || (E[0] = oe => a(T).back()),
                    onClickRight: I
                }, {
                    center: J(() => [H(t(y.$t("recharge")), 1)]),
                    right: J(() => [H(t(y.$t("rechargeRecords")), 1)]),
                    _: 1
                }), e("div", Hc, [e("p", null, t(y.$t("rechargeDetailDesc3")), 1), e("div", {
                    class: "rechargeDetail__container-header__countdown",
                    ref_key: "countdownRef",
                    ref: s
                }, Qc, 512)]), e("div", Zc, [e("div", Yc, [e("div", Xc, [e("h1", {
                    style: ut({
                        backgroundImage: `url(${Z.value})`
                    })
                }, t(((W = a(w).orderDetail) == null ? void 0 : W.bankName) || y.$t("rechargeDetailDesc4")), 5)]), (n(!0), i(de, null, $e(P, (oe, Q) => (n(), i("div", {
                    key: Q
                }, [oe.value ? (n(), i("div", Jc, [e("h1", null, t(oe.title), 1), e("div", null, [e("span", null, t(oe.value), 1), (n(), i("svg", {
                    width: "32",
                    height: "32",
                    viewBox: "0 0 32 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    onClick: Oe => N(oe.name)
                }, nd, 8, ed))])])) : f("v-if", !0)]))), 128)), l.value === "৳" ? (n(), i("div", sd, [ld, e("div", null, [H(t((L = a(w).orderDetail) == null ? void 0 : L.extend1) + " ", 1), (n(), i("svg", {
                    width: "32",
                    height: "32",
                    viewBox: "0 0 32 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    onClick: E[1] || (E[1] = oe => {
                        var Q;
                        return a(ke)((Q = a(w).orderDetail) == null ? void 0 : Q.extend1)
                    })
                }, rd))])])) : f("v-if", !0), l.value === "৳" ? (n(), i("div", cd, [dd, e("div", null, [H(t((we = a(w).orderDetail) == null ? void 0 : we.extend2) + " ", 1), (n(), i("svg", {
                    width: "32",
                    height: "32",
                    viewBox: "0 0 32 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    onClick: E[2] || (E[2] = oe => {
                        var Q;
                        return a(ke)((Q = a(w).orderDetail) == null ? void 0 : Q.extend2)
                    })
                }, _d))])])) : f("v-if", !0), q.value ? (n(), i("div", pd, [e("span", null, t((le = O.value) == null ? void 0 : le.serverTime), 1), e("span", null, [e("span", null, t((X = O.value) == null ? void 0 : X.orderNumber), 1), (n(), i("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    onClick: E[3] || (E[3] = oe => {
                        var Q;
                        return a(ke)((Q = O.value) == null ? void 0 : Q.orderNumber)
                    })
                }, fd))])])) : f("v-if", !0)]), a(m).getDollarSign === "₹" && c.value === 9 ? (n(), i("div", wd, [yd, S(pe, {
                    modelValue: a(w).bankUTR,
                    "onUpdate:modelValue": E[4] || (E[4] = oe => a(w).bankUTR = oe),
                    class: "utr_input",
                    type: "digit",
                    placeholder: y.$t("bankUTR"),
                    maxlength: 12
                }, {
                    button: J(() => [e("div", {
                        class: "paste",
                        onClick: M
                    }, t(y.$t("paste")), 1)]),
                    _: 1
                }, 8, ["modelValue", "placeholder"])])) : f("v-if", !0), f(" 充值说明组件 "), S(Ct, {
                    "show-type": c.value,
                    isShowHead: !0
                }, null, 8, ["show-type"])]), e("div", gd, [a(d) ? (n(), i("div", bd, [e("span", {
                    onClick: E[6] || (E[6] = oe => d.value = !1)
                }, t(y.$t("rechargeDetailDesc7")), 1), e("span", {
                    onClick: E[7] || (E[7] = oe => a(_)())
                }, t(y.$t("rechargeDetailDesc8")), 1)])) : (n(), i("div", $d, [e("span", {
                    onClick: E[5] || (E[5] = oe => h.value = !0)
                }, t(y.$t("rechargeDetailDesc5")), 1), e("span", {
                    onClick: j
                }, t(y.$t("rechargeDetailDesc6")), 1)]))]), S(G, {
                    show: a(d),
                    "onUpdate:show": E[8] || (E[8] = oe => Ye(d) ? d.value = oe : null),
                    closeable: !1
                }, {
                    default: J(() => {
                        var oe, Q, Oe, Ce, Pe, qe, Be, Me, Y;
                        return [e("div", kd, [e("div", Cd, [e("h1", {
                            style: ut({
                                backgroundImage: `url(${Z.value})`
                            })
                        }, t(((oe = a(w).orderDetail) == null ? void 0 : oe.bankName) || y.$t("rechargeDetailDesc4")), 5)]), Td, e("div", Sd, [e("span", null, t((Q = R.value) == null ? void 0 : Q.text1), 1), e("span", null, t((Oe = a(w).orderDetail) == null ? void 0 : Oe.accountName), 1)]), e("div", Id, [e("span", null, t((Ce = R.value) == null ? void 0 : Ce.text2), 1), e("span", null, t((Pe = a(w).orderDetail) == null ? void 0 : Pe.bankAccountNumber), 1)]), e("div", Nd, [e("span", null, t((qe = R.value) == null ? void 0 : qe.text3), 1), e("span", null, t((Be = a(w).orderDetail) == null ? void 0 : Be.orderNumber), 1)]), e("div", Ad, [e("span", null, t((Me = R.value) == null ? void 0 : Me.text4), 1), e("span", null, t((Y = a(w).orderDetail) == null ? void 0 : Y.amount), 1)]), e("h1", Rd, t(y.$t("rechargeDetailDesc10")), 1), e("p", Dd, t(y.$t("rechargeDetailDesc11")), 1)])]
                    }),
                    _: 1
                }, 8, ["show"]), S(Fe, {
                    show: a(h),
                    "onUpdate:show": E[9] || (E[9] = oe => Ye(h) ? h.value = oe : null),
                    onConfirm: E[10] || (E[10] = oe => {
                        var Q;
                        return a(v)((Q = a(w).orderDetail) == null ? void 0 : Q.orderNumber)
                    }),
                    "show-cancel-btn": !0,
                    confirmText: y.$t("confirmCancel"),
                    cancelText: y.$t("cancel"),
                    title: y.$t("cancelDeal")
                }, {
                    content: J(() => [e("div", Ud, t(y.$t("orderDesc2")), 1)]),
                    _: 1
                }, 8, ["show", "confirmText", "cancelText", "title"])])
            }
        }
    });
const Wd = re(Bd, [
        ["__scopeId", "data-v-845bb16b"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/RechargeDetail/index.vue"]
    ]),
    lb = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Wd
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Od = b => (Ae("data-v-f851bd18"), b = b(), Re(), b),
    Pd = {
        class: "rechargeh__container"
    },
    Ld = {
        class: "rechargeh__header_box"
    },
    Md = ["src"],
    Vd = {
        key: 0,
        class: "state_box"
    },
    qd = {
        class: "query_select"
    },
    jd = {
        class: "ar-searchbar__selector"
    },
    Ed = {
        class: "ar-searchbar__selector-default"
    },
    Hd = {
        class: "rechargeh__container-content"
    },
    xd = ["onClick"],
    Fd = {
        class: "rechargeh__container-content__item-header"
    },
    zd = {
        class: "recharge_tit"
    },
    Kd = {
        key: 0,
        class: "rechargeh__container-content__item-body"
    },
    Gd = {
        class: "price"
    },
    Qd = Od(() => e("span", null, "UTR", -1)),
    Zd = {
        class: "order"
    },
    Yd = ["src", "onClick"],
    Xd = {
        key: 1,
        class: "rechargeh__container-content__item-body"
    },
    Jd = {
        class: "price"
    },
    eu = {
        class: "order"
    },
    tu = ["src", "onClick"],
    au = ie({
        __name: "index",
        setup(b) {
            const {
                t: s
            } = be(), {
                store: c,
                getRechargeTypeName: r,
                currentPayId: o,
                historyToDetail: l
            } = Je();
            c.currentPayId = 0, r(!0);
            const d = ye();

            function h() {
                d.currentRoute.value.query.type ? d.replace({
                    name: "Recharge"
                }) : d.back()
            }
            const w = C(!1),
                u = C(s("all")),
                _ = C(!1),
                $ = C(!1),
                v = C(1),
                A = C(),
                g = Ne({
                    startDate: "",
                    endDate: "",
                    state: -1,
                    payId: -1,
                    payTypeId: -1
                }),
                U = V(() => {
                    if (!B.value) return De.RechargeState;
                    let N = [{
                            key: s("all"),
                            value: -1
                        }],
                        y = De.RechargeC2CState;
                    return v.value === 1 ? N.concat(y.slice(0, 4)) : N.concat(y.slice(4, 7))
                }),
                B = V(() => {
                    var N;
                    return ((N = c.rechargeType[c.currentMenu]) == null ? void 0 : N.payID) === 20 || !1
                }),
                T = N => {
                    N !== v.value && (u.value = s("all"), g.state = -1, v.value = N, g.type = N, O.value.resetRefresh())
                },
                m = async ({
                    selectedOptions: N
                }) => {
                    w.value = !1, u.value = N[0].key, g.state = N[0].value, O.value.resetRefresh()
                };

            function k() {
                w.value = !0, _.value = !0
            }
            async function P() {
                let N = A.value.endDateValue !== "" ? `${A.value.endDateValue} 23:59:59` : "";
                g.startDate = Ut(A.value.startDateValue).format("YYYY-MM-DD HH:mm:ss"), g.endDate = Ut(N).format("YYYY-MM-DD HH:mm:ss"), O.value.resetRefresh()
            }
            const I = C([]),
                O = C(),
                q = V(() => c.currentMenu === 0 || !B.value ? (g.category && delete g.category, g) : { ...g
                }),
                R = N => {},
                Z = async N => {
                    l(N.payID || N.category, N.type, N.price, N.state, N.id)
                },
                M = V(() => B.value ? pa : ha),
                j = N => {
                    let y = "";
                    switch (N.state) {
                        case 0:
                            y = "recharge";
                            break;
                        case 1:
                            o.value !== 20 ? y = "success" : y = "check";
                            break;
                        case 2:
                            o.value !== 20 ? y = "fail" : y = "timeout";
                            break;
                        case 3:
                            y = "representation";
                            break;
                        case 4:
                            y = "success";
                            break;
                        case 5:
                            y = "fail";
                            break;
                        case 6:
                            y = "cancel";
                            break;
                        case 7:
                            y = "timeout";
                            break;
                        default:
                            y = "#FFB800";
                            break
                    }
                    return y
                };
            return je(() => c.currentMenu, async () => {
                c.currentMenu === 0 && (c.currentPayId = 0), u.value = s("all"), g.state = -1, $.value = !1, B.value ? (g.type = 1, g.category = -1, delete g.payTypeId, delete g.payId) : (delete g.type, g.payId = c.rechargeType[c.currentMenu].payID, g.payTypeId = c.rechargeType[c.currentMenu].payTypeID), await O.value.resetRefresh()
            }), (N, y) => {
                const E = x("NavBar"),
                    ee = x("van-icon"),
                    pe = x("van-picker"),
                    G = x("van-popup"),
                    W = x("van-divider");
                return n(), i("div", Pd, [S(E, {
                    class: "white",
                    title: N.$t("rechargeRecords"),
                    "left-arrow": "",
                    onClickLeft: h
                }, null, 8, ["title"]), e("div", Ld, [S(is, {
                    list: a(c).rechargeType,
                    "is-auto-load": !0,
                    active: a(c).currentMenu,
                    "onUpdate:active": y[0] || (y[0] = L => a(c).currentMenu = L),
                    tabClassName: "tabs",
                    activeClassName: "tab_active",
                    ref: "tabRefs",
                    tabItemClassName: "funtab_item"
                }, {
                    default: J(({
                        item: L,
                        index: we
                    }) => [e("div", {
                        class: ae(["tab_item", {
                            tab_active: we === a(c).currentMenu
                        }])
                    }, [e("img", {
                        src: a(c).currentMenu === we ? L.payNameUrl2 : L.payNameUrl,
                        alt: ""
                    }, null, 8, Md), e("span", null, t(L.typeName), 1)], 2)]),
                    _: 1
                }, 8, ["list", "active"]), B.value ? (n(), i("div", Vd, [e("div", {
                    class: ae(["state_item", {
                        state_item_active: v.value === 1
                    }]),
                    onClick: y[1] || (y[1] = L => T(1))
                }, t(N.$t("inTransaction")), 3), e("div", {
                    class: ae(["state_item", {
                        state_item_active: v.value === 2
                    }]),
                    onClick: y[2] || (y[2] = L => T(2))
                }, t(N.$t("completed")), 3)])) : f("v-if", !0), e("div", qd, [e("div", jd, [e("div", {
                    onClick: k,
                    class: ae({
                        selectorA: !_.value
                    })
                }, [e("span", Ed, t(u.value), 1), S(ee, {
                    name: "arrow-down"
                })], 2)]), f("日期选择组件"), S(ga, {
                    ref_key: "calendar",
                    ref: A,
                    onConfirm: P
                }, null, 512)])]), S(G, {
                    show: w.value,
                    "onUpdate:show": y[4] || (y[4] = L => w.value = L),
                    round: "",
                    position: "bottom"
                }, {
                    default: J(() => [S(pe, {
                        "columns-field-names": {
                            text: "key",
                            value: "value",
                            children: "children"
                        },
                        columns: U.value,
                        onCancel: y[3] || (y[3] = L => w.value = !1),
                        onConfirm: m
                    }, null, 8, ["columns"])]),
                    _: 1
                }, 8, ["show"]), S(Gt, {
                    list: I.value,
                    "onUpdate:list": y[5] || (y[5] = L => I.value = L),
                    "page-query": q.value,
                    "onUpdate:pageQuery": y[6] || (y[6] = L => q.value = L),
                    api: M.value,
                    distance: 100,
                    ref_key: "listRef",
                    ref: O,
                    onPageChange: R,
                    isAutoLoad: !0
                }, {
                    content: J(() => [e("div", Hd, [(n(!0), i(de, null, $e(I.value, (L, we) => (n(), i("div", {
                        class: "rechargeh__container-content__item",
                        key: we,
                        onClick: Ze(le => Z(L), ["stop"])
                    }, [e("div", Fd, [e("span", zd, t(N.$t("recharge")), 1), f(` <span
								:class="{ stateR: item.state === 0, stateG: item.state === 1 }"
								@click="onToDetail(item.type, item.state)"
								>{{ getArrayKey(rootConfig.RechargeState, item.state) }}
								<van-icon name="arrow" />
							</span> `), e("div", {
                        class: ae(["recharge_right", j(L)])
                    }, [H(t(a(Xe)(B.value ? a(De).RechargeC2CState : a(De).RechargeState, L.state)) + " ", 1), L.state !== 2 ? (n(), Ie(ee, {
                        key: 0,
                        name: "arrow"
                    })) : f("v-if", !0)], 2)]), S(W, {
                        class: "divier"
                    }), B.value ? (n(), i("div", Kd, [e("div", null, [e("span", null, t(N.$t("amount")), 1), e("span", Gd, t(a(ve)(L.orderAmount)), 1)]), e("div", null, [Qd, e("span", null, t(L.transactionNo || "-"), 1)]), e("div", null, [e("span", null, t(N.$t("time")), 1), e("span", null, t(L.createTime), 1)]), e("div", null, [e("span", null, t(N.$t("orderNo")), 1), e("div", Zd, [e("span", null, t(L.orderNo), 1), e("img", {
                        src: a(ue)("wallet/recharge", "copy1"),
                        alt: "",
                        onClick: Ze(le => a(ke)(L.orderNo), ["stop"])
                    }, null, 8, Yd)])])])) : (n(), i("div", Xd, [e("div", null, [e("span", null, t(N.$t("amount")), 1), e("span", Jd, t(a(ve)(L.price)), 1)]), e("div", null, [e("span", null, t(N.$t("type")), 1), e("span", null, t(L == null ? void 0 : L.payName), 1)]), e("div", null, [e("span", null, t(N.$t("time")), 1), e("span", null, t(L.addTime), 1)]), e("div", null, [e("span", null, t(N.$t("orderNo")), 1), e("div", eu, [e("span", null, t(L.rechargeNumber), 1), e("img", {
                        src: a(F)("public", "copy"),
                        alt: "",
                        onClick: Ze(le => a(ke)(L.rechargeNumber), ["stop"])
                    }, null, 8, tu)])])]))], 8, xd))), 128))])]),
                    _: 1
                }, 8, ["list", "page-query", "api"])])
            }
        }
    });
const nu = re(au, [
        ["__scopeId", "data-v-f851bd18"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/RechargeHistory/index.vue"]
    ]),
    ob = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: nu
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    su = b => (Ae("data-v-a876fc5b"), b = b(), Re(), b),
    lu = {
        class: "RechargeUsdt__container"
    },
    ou = {
        class: "RechargeUsdt__container__content"
    },
    iu = {
        class: "RechargeUsdt__container__content-qrCode"
    },
    ru = ["src"],
    cu = {
        class: "tip"
    },
    du = ["src"],
    uu = {
        class: "RechargeUsdt__container__content-info"
    },
    vu = {
        class: "label"
    },
    _u = ["src"],
    pu = {
        class: "address"
    },
    hu = ["src"],
    mu = {
        class: "RechargeUsdt__container__content-info"
    },
    fu = {
        class: "label"
    },
    wu = ["src"],
    yu = {
        class: "address"
    },
    gu = {
        class: "RechargeUsdt__container__content-info"
    },
    $u = {
        class: "label"
    },
    bu = {
        class: "RechargeUsdt__container-popup__wrap"
    },
    ku = {
        class: "title"
    },
    Cu = {
        class: "tip"
    },
    Tu = {
        class: "list"
    },
    Su = {
        class: "item"
    },
    Iu = ["src"],
    Nu = su(() => e("span", null, "Tron(TRC20)", -1)),
    Au = {
        class: "item"
    },
    Ru = ["src"],
    Du = ie({
        __name: "index",
        setup(b) {
            const s = ye(),
                {
                    t: c
                } = be(),
                r = C(!1),
                o = C(""),
                {
                    store: l,
                    submitUsdtRecharge: d,
                    getLocalUsdtInfo: h,
                    handlePaste: w,
                    createQrCode: u,
                    getUsdtOrderInfo: _,
                    handleUpdateUsdtOrder: $
                } = Je(),
                v = C(""),
                A = C(null),
                g = m => m.replace(/[\u4e00-\u9fa5\s]/g, "");
            ge(async () => {
                var P, I, O, q, R;
                if (await _(), !sessionStorage.getItem("usdtInfo") && !l.isUsdtOrder) A.value = h.value, A.value && sessionStorage.setItem("usdtInfo", JSON.stringify(A.value));
                else {
                    let Z = sessionStorage.getItem("usdtInfo"),
                        M = JSON.parse(Z || "{}");
                    A.value = M
                }
                let m = ((P = A.value) == null ? void 0 : P.coding) || ((I = l.usdtOrderInfo) == null ? void 0 : I.rechargeAddress),
                    k = "";
                m && (k = await u(((O = A.value) == null ? void 0 : O.coding) || ((q = l.usdtOrderInfo) == null ? void 0 : q.rechargeAddress))), l.isUsdtOrder && (v.value = (R = l.usdtOrderInfo) == null ? void 0 : R.transferOutAddress), o.value = k + ""
            });
            const U = async () => {
                var k, P, I, O, q, R, Z, M;
                if (!v.value) {
                    _e(c("enterUsdtAddress"));
                    return
                }
                if (l.isUsdtOrder) {
                    let j = {
                        usdtID: (k = l.usdtOrderInfo) == null ? void 0 : k.usdtId,
                        usdtType: (P = l.usdtOrderInfo) == null ? void 0 : P.usdtType,
                        rechargeAddress: (I = l.usdtOrderInfo) == null ? void 0 : I.rechargeAddress,
                        transferOutAddress: v.value,
                        amount: Number((O = l.usdtOrderInfo) == null ? void 0 : O.amount),
                        orderNo: (q = l.usdtOrderInfo) == null ? void 0 : q.orderNumber
                    };
                    await $(j);
                    return
                }
                let m = {
                    usdtId: (R = A.value) == null ? void 0 : R.usdtID,
                    amount: Number(s.currentRoute.value.query.amount),
                    usdtType: (Z = A.value) == null ? void 0 : Z.usdtType,
                    rechargeAddress: (M = A.value) == null ? void 0 : M.coding,
                    transferOutAddress: v.value
                };
                await d(m)
            };
            $t(() => {
                sessionStorage.removeItem("usdtInfo")
            });
            const B = async () => {
                v.value = await w()
            };

            function T() {
                s.go(-1)
            }
            return (m, k) => {
                var q, R, Z, M;
                const P = x("NavBar"),
                    I = x("van-field"),
                    O = x("van-popup");
                return n(), i("div", lu, [S(P, {
                    title: m.$t("rechargeUSDT"),
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: T
                }, null, 8, ["title"]), e("div", ou, [e("div", iu, [e("img", {
                    src: o.value,
                    alt: ""
                }, null, 8, ru), e("div", cu, t(m.$t("rechargeUsdtDesc1")), 1), e("img", {
                    src: a(F)("wallet", "recharge_usdt"),
                    alt: "",
                    class: "usdt_bg"
                }, null, 8, du)]), e("div", uu, [e("div", vu, [e("img", {
                    src: a(F)("wallet", "usdt1"),
                    alt: ""
                }, null, 8, _u), e("span", null, t(m.$t("rechargeUsdtDesc2")), 1)]), e("div", pu, [e("span", null, t(((q = A.value) == null ? void 0 : q.coding) || ((R = a(l).usdtOrderInfo) == null ? void 0 : R.rechargeAddress)), 1), e("img", {
                    src: a(F)("public", "copy"),
                    alt: "",
                    onClick: k[0] || (k[0] = j => {
                        var N;
                        return a(ke)((N = A.value) == null ? void 0 : N.coding)
                    })
                }, null, 8, hu)])]), e("div", mu, [e("div", fu, [e("img", {
                    src: a(F)("wallet", "usdt1"),
                    alt: ""
                }, null, 8, wu), e("span", null, t(m.$t("rechargeUsdtDesc3")), 1)]), e("div", yu, [e("span", null, t(((Z = A.value) == null ? void 0 : Z.usdtName) || ((M = a(l).usdtOrderInfo) == null ? void 0 : M.bankName)), 1), f(` <img :src="getIcons('wallet/recharge', 'mainChain')" alt="" @click="showPicker = true" /> `)])]), e("div", gu, [e("div", $u, [e("span", null, t(m.$t("transferAddress")), 1)]), S(I, {
                    modelValue: v.value,
                    "onUpdate:modelValue": k[2] || (k[2] = j => v.value = j),
                    modelModifiers: {
                        trim: !0
                    },
                    class: "address_input",
                    placeholder: m.$t("enterUsdtAddress"),
                    maxlength: 40,
                    formatter: g
                }, {
                    button: J(() => [e("div", {
                        class: "paste",
                        onClick: k[1] || (k[1] = j => B())
                    }, t(m.$t("paste")), 1)]),
                    _: 1
                }, 8, ["modelValue", "placeholder"])]), S(Ct, {
                    "show-type": 19,
                    isShowHead: !0
                }), e("div", {
                    class: "RechargeUsdt__container-rechageBtn rechage_active",
                    onClick: U
                }, t(m.$t("finishRechargeUsdt")), 1)]), S(O, {
                    show: r.value,
                    "onUpdate:show": k[3] || (k[3] = j => r.value = j),
                    round: "",
                    position: "bottom"
                }, {
                    default: J(() => [e("div", bu, [e("div", ku, t(m.$t("rechargeUsdtDesc4")), 1), e("div", Cu, t(m.$t("rechargeUsdtDesc5")), 1), e("div", Tu, [e("div", Su, [e("img", {
                        src: a(ue)("wallet/recharge", "mainChain"),
                        alt: ""
                    }, null, 8, Iu), Nu]), e("div", Au, [e("img", {
                        src: a(F)("wallet", "usdt1"),
                        alt: ""
                    }, null, 8, Ru), e("span", null, t(m.$t("rechargeUsdtDesc6")), 1)])])])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const Uu = re(Du, [
        ["__scopeId", "data-v-a876fc5b"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/RechargeUsdt/index.vue"]
    ]),
    ib = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Uu
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ia = b => (Ae("data-v-7261fdec"), b = b(), Re(), b),
    Bu = {
        class: "fastRecharge"
    },
    Wu = {
        class: "fastRecharge-label"
    },
    Ou = {
        class: "block"
    },
    Pu = {
        class: "fastRecharge-label"
    },
    Lu = {
        class: "fastRecharge-input"
    },
    Mu = {
        class: "fastRecharge-label"
    },
    Vu = {
        class: "fastRecharge-input"
    },
    qu = ["src"],
    ju = {
        class: "fastRecharge-label"
    },
    Eu = {
        class: "fastRecharge-input"
    },
    Hu = ["src"],
    xu = {
        class: "fastRecharge-label"
    },
    Fu = {
        class: "fastRecharge-input"
    },
    zu = ["src"],
    Ku = {
        class: "fastRecharge-label"
    },
    Gu = {
        class: "fastRecharge-input"
    },
    Qu = ["src"],
    Zu = Ia(() => e("span", null, "2022-06-01 15:15:15", -1)),
    Yu = Ia(() => e("span", null, "2022102618451254125412", -1)),
    Xu = ["src"],
    Ju = ie({
        __name: "FastRecharge",
        props: {
            isShowCountDown: {
                type: Boolean,
                required: !1,
                default: !1
            }
        },
        setup(b) {
            const s = C(18e5);

            function c(r) {
                let o = r.toString();
                return o = r < 10 ? "0" + o : o
            }
            return (r, o) => {
                const l = x("van-count-down"),
                    d = ze("lazy");
                return n(), i("div", Bu, [e("div", Wu, [he(e("img", null, null, 512), [
                    [d, a(F)("wallet", "quickpay2")]
                ]), e("h1", null, t(r.$t("quickRecharge")), 1), he(S(l, {
                    time: s.value
                }, {
                    default: J(h => [e("span", Ou, t(c(h.minutes)) + ":" + t(c(h.seconds)), 1)]),
                    _: 1
                }, 8, ["time"]), [
                    [vt, r.isShowCountDown]
                ])]), e("div", null, [e("div", Pu, [e("span", null, t(r.$t("bankname")), 1)]), e("div", Lu, [e("input", {
                    type: "text",
                    name: "",
                    onInput: o[0] || (o[0] = () => {}),
                    placeholder: "",
                    onBlur: o[1] || (o[1] = () => {})
                }, null, 32)])]), e("div", null, [e("div", Mu, [e("span", null, t(r.$t("name")), 1)]), e("div", Vu, [e("input", {
                    type: "text",
                    name: "accountName",
                    onInput: o[2] || (o[2] = () => {}),
                    placeholder: "",
                    onBlur: o[3] || (o[3] = () => {})
                }, null, 32), e("img", {
                    onClick: o[4] || (o[4] = () => {}),
                    src: a(ue)("wallet", "copy")
                }, null, 8, qu)])]), e("div", null, [e("div", ju, [e("span", null, t(r.$t("cardNo")), 1)]), e("div", Eu, [e("input", {
                    type: "text",
                    name: "bankAccountNumber",
                    onInput: o[5] || (o[5] = () => {}),
                    placeholder: "",
                    onBlur: o[6] || (o[6] = () => {})
                }, null, 32), e("img", {
                    onClick: o[7] || (o[7] = () => {}),
                    src: a(ue)("wallet", "copy")
                }, null, 8, Hu)])]), e("div", null, [e("div", xu, [e("span", null, t(r.$t("branchBank")), 1)]), e("div", Fu, [e("input", {
                    type: "text",
                    name: "bankName",
                    onInput: o[8] || (o[8] = () => {}),
                    placeholder: "",
                    onBlur: o[9] || (o[9] = () => {})
                }, null, 32), e("img", {
                    onClick: o[10] || (o[10] = () => {}),
                    src: a(ue)("wallet", "copy")
                }, null, 8, zu)])]), e("div", null, [e("div", Ku, [e("span", null, t(r.$t("amount")), 1)]), e("div", Gu, [e("input", {
                    type: "text",
                    name: "amount",
                    onInput: o[11] || (o[11] = () => {}),
                    placeholder: "",
                    onBlur: o[12] || (o[12] = () => {})
                }, null, 32), e("img", {
                    onClick: o[13] || (o[13] = () => {}),
                    src: a(ue)("wallet", "copy")
                }, null, 8, Qu)])]), e("div", null, [Zu, e("div", null, [Yu, e("img", {
                    onClick: o[14] || (o[14] = () => {}),
                    src: a(ue)("wallet", "copy")
                }, null, 8, Xu)])])])
            }
        }
    });
const ev = re(Ju, [
        ["__scopeId", "data-v-7261fdec"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/Recharge/FastRecharge.vue"]
    ]),
    Yt = b => (Ae("data-v-13d5a1df"), b = b(), Re(), b),
    tv = {
        class: "recharge-container"
    },
    av = {
        class: "recharge-container-header"
    },
    nv = {
        class: "recharge-container-header-belly"
    },
    sv = {
        key: 0
    },
    lv = {
        key: 1,
        class: "bellyLogo"
    },
    ov = Yt(() => e("h2", null, "MOMO", -1)),
    iv = {
        class: "block"
    },
    rv = {
        class: "block"
    },
    cv = Yt(() => e("span", {
        class: "colon"
    }, ":", -1)),
    dv = {
        class: "block"
    },
    uv = {
        class: "block"
    },
    vv = {
        class: "recharge-container-content"
    },
    _v = {
        key: 1,
        class: "rechargeT"
    },
    pv = Yt(() => e("h3", null, "50.000.00VND", -1)),
    hv = {
        class: "recharge-input"
    },
    mv = ["src"],
    fv = {
        class: "recharge-container-cancel"
    },
    wv = ie({
        __name: "index",
        setup(b) {
            const s = ye(),
                c = history.state.typeV,
                r = C(30 * 60 * 1e3);

            function o(l, d) {
                let h = l.toString();
                return h = l < 10 ? "0" + h : h, d === 1 ? h.slice(0, 1) : h.slice(1, 2)
            }
            return (l, d) => {
                const h = x("NavBar"),
                    w = x("van-count-down"),
                    u = ze("lazy");
                return n(), i("div", tv, [e("div", av, [S(h, {
                    title: l.$t("titleToBePaid"),
                    backgroundColor: "linear-gradient(90deg, #f95959 0%, #ff9a8e 100%)",
                    "left-arrow": "",
                    onClickLeft: d[0] || (d[0] = _ => a(s).go(-1))
                }, null, 8, ["title"]), e("div", nv, [a(c) === 0 ? (n(), i("span", sv, t(l.$t("tipCompletePaymentBeforeCountdown")), 1)) : f("v-if", !0), a(c) !== 0 ? (n(), i("div", lv, [he(e("img", null, null, 512), [
                    [u, a(F)("wallet", "thirdPartyLogo")]
                ]), ov])) : f("v-if", !0), S(w, {
                    time: r.value
                }, {
                    default: J(_ => [e("span", iv, t(o(_.minutes, 1)), 1), e("span", rv, t(o(_.minutes, 2)), 1), cv, e("span", dv, t(o(_.seconds, 1)), 1), e("span", uv, t(o(_.seconds, 2)), 1)]),
                    _: 1
                }, 8, ["time"])])]), e("div", vv, [f("快捷充值，内部充值"), a(c) === 0 ? (n(), Ie(ev, {
                    key: 0,
                    isShowCountDown: !1
                })) : f("v-if", !0), a(c) !== 0 ? (n(), i("div", _v, [he(e("img", null, null, 512), [
                    [u, a(F)("wallet", "QRCode")]
                ]), pv, e("span", null, t(l.$t("fillInTheContent")), 1), e("div", hv, [e("input", {
                    type: "text",
                    "auto-complete": "new-password",
                    autocomplete: "off",
                    name: "accountName",
                    onInput: d[1] || (d[1] = () => {}),
                    placeholder: "",
                    onBlur: d[2] || (d[2] = () => {})
                }, null, 32), e("img", {
                    onClick: d[3] || (d[3] = () => {}),
                    src: a(ue)("wallet", "copy")
                }, null, 8, mv)])])) : f("v-if", !0), f("充值说明组件"), S(Ct, {
                    showType: 2,
                    isShowHead: !0
                })]), e("div", fv, t(l.$t("concelRecharge")), 1)])
            }
        }
    });
const yv = re(wv, [
        ["__scopeId", "data-v-13d5a1df"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/TobePay/index.vue"]
    ]),
    rb = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: yv
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    gv = {
        class: "transRecord__container"
    },
    $v = {
        style: {
            height: "65px"
        }
    },
    bv = {
        class: "ar"
    },
    kv = {
        class: "ar-searchbar"
    },
    Cv = {
        class: "transRecord__container-content"
    },
    Tv = {
        class: "transRecord__container-content__card"
    },
    Sv = {
        class: "transRecord__container-content__card-top"
    },
    Iv = {
        class: "transRecord__container-content__card-mid"
    },
    Nv = {
        class: "line"
    },
    Av = {
        class: "left"
    },
    Rv = {
        class: "right"
    },
    Dv = {
        class: "line"
    },
    Uv = {
        class: "left"
    },
    Bv = {
        class: "right"
    },
    Wv = {
        class: "line"
    },
    Ov = {
        class: "left"
    },
    Pv = {
        class: "transRecord__container-content__card-bot"
    },
    Lv = ["onUpdate:modelValue"],
    Mv = ie({
        __name: "index",
        setup(b) {
            const {
                t: s
            } = be(), c = ye();

            function r() {
                c.back()
            }
            const o = C([]),
                l = C([]),
                d = C(),
                h = Ne({
                    date: "",
                    type: -1
                }),
                w = C(!1),
                u = C(""),
                _ = C(!1),
                $ = async ({
                    selectedOptions: N
                }) => {
                    w.value = !1, u.value = N[0].typeName, h.type = N[0].type, d.value.resetRefresh()
                };

            function v() {
                w.value = !0, _.value = !0
            }
            const {
                key: A,
                value: g
            } = Pn(), U = C(g), {
                minDate: B,
                maxDate: T
            } = Ln(0), m = C(!1), k = ({
                selectedOptions: N
            }) => {
                m.value = !1
            }, P = async ({
                selectedOptions: N
            }) => {
                m.value = !1, h.date = `${U.value[0]}-${U.value[1]}-${U.value[2]} 00:00:00`, d.value.resetRefresh()
            }, I = ({
                selectedOptions: N
            }) => {}, O = (N, y) => y;
            async function q() {
                const N = await ne(Mn());
                N && (o.value = N.data.typeList.map(y => (y.typeName = s(`code${y.typeNameCode}`), y)), o.value.unshift({
                    type: -1,
                    typeName: s("all")
                }), u.value = o.value[0].typeName)
            }
            let R = [8e3, 8005, 8018, 8021, 8023, 8100],
                Z = [8001, 8002, 8003, 8004, 8006, 8007, 8008, 8009, 8010, 8011, 8012, 8013, 8014, 8015, 8016, 8017, 8019, 8020, 8022, 8024, 8029, 8030, 8031, 8101, 8102, 8103, 8104, 8105];
            const M = N => {
                l.value = N, l.value = l.value.map(y => {
                    y.typeName = s(`code${y.typeNameCode}`);
                    let E;
                    return R.includes(y.typeNameCode * 1) ? E = "red" : Z.includes(y.typeNameCode * 1) && (E = "green"), { ...y,
                        typeColor: E
                    }
                })
            };

            function j(N) {
                return [109].includes(N) ? "red" : [111, 112, 110, 108, 114].includes(N) ? "green" : ""
            }
            return ge(async () => {
                await q()
            }), (N, y) => {
                const E = x("NavBar"),
                    ee = x("ArSelect"),
                    pe = x("van-picker"),
                    G = x("van-popup"),
                    W = x("van-date-picker");
                return n(), i("div", gv, [S(E, {
                    title: N.$t("transactionrecord"),
                    "left-arrow": "",
                    onClickLeft: r
                }, null, 8, ["title"]), e("div", $v, [e("div", bv, [e("div", kv, [S(ee, {
                    onClickSelect: v,
                    selectName: u.value
                }, null, 8, ["selectName"]), S(ee, {
                    onClickSelect: y[0] || (y[0] = L => m.value = !0),
                    selectName: h.date || N.$t("pickDate")
                }, null, 8, ["selectName"])])])]), f(" 配合弹窗层使用 "), S(G, {
                    show: w.value,
                    "onUpdate:show": y[2] || (y[2] = L => w.value = L),
                    round: "",
                    position: "bottom"
                }, {
                    default: J(() => [S(pe, {
                        "columns-field-names": {
                            text: "typeName",
                            value: "type",
                            children: "children"
                        },
                        columns: o.value,
                        onCancel: y[1] || (y[1] = L => w.value = !1),
                        onConfirm: $
                    }, null, 8, ["columns"])]),
                    _: 1
                }, 8, ["show"]), f(" 日期选择 "), S(G, {
                    show: m.value,
                    "onUpdate:show": y[4] || (y[4] = L => m.value = L),
                    round: "",
                    position: "bottom"
                }, {
                    default: J(() => [S(W, {
                        modelValue: U.value,
                        "onUpdate:modelValue": y[3] || (y[3] = L => U.value = L),
                        title: N.$t("pickDate"),
                        onCancel: k,
                        onConfirm: P,
                        filter: O,
                        onChange: I,
                        "min-date": a(B),
                        "max-date": a(T)
                    }, null, 8, ["modelValue", "title", "min-date", "max-date"])]),
                    _: 1
                }, 8, ["show"]), S(Gt, {
                    distance: 100,
                    api: a(qn),
                    list: l.value,
                    "onUpdate:list": [y[5] || (y[5] = L => l.value = L), M],
                    ref_key: "listRef",
                    ref: d,
                    pageQuery: h,
                    "onUpdate:pageQuery": y[6] || (y[6] = L => h = L)
                }, {
                    content: J(() => [e("div", Cv, [(n(!0), i(de, null, $e(l.value, (L, we) => (n(), i("div", {
                        class: "transRecord__container-content__item",
                        key: we
                    }, [e("div", Tv, [e("div", Sv, [e("h3", null, t(L.typeName), 1)]), e("div", Iv, [e("div", Nv, [e("div", Av, t(N.$t("detail")), 1), e("div", Rv, t(a(Vn)(o.value, L.type)), 1)]), e("div", Dv, [e("div", Uv, t(N.$t("time")), 1), e("div", Bv, t(L.addTime), 1)]), e("div", Wv, [e("div", Ov, t(N.$t("amount")), 1), e("div", {
                        class: ae(["right", L.typeColor]),
                        style: ut(`color:${j(L.type)}`)
                    }, t(a(ve)(L.amount)), 7)])]), e("div", Pv, [he(e("textarea", {
                        class: "textarea",
                        name: "remark",
                        cols: "30",
                        rows: "10",
                        readonly: !0,
                        "onUpdate:modelValue": le => L.remark = le
                    }, null, 8, Lv), [
                        [Se, L.remark]
                    ])])])]))), 128))])]),
                    _: 1
                }, 8, ["api", "list", "pageQuery"])])
            }
        }
    });
const Vv = re(Mv, [
        ["__scopeId", "data-v-2565e76d"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/TransAction/index.vue"]
    ]),
    cb = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Vv
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    qv = {
        class: "balanceAssets"
    },
    jv = {
        class: "balanceAssets__header"
    },
    Ev = {
        class: "balanceAssets__header__left"
    },
    Hv = ["src"],
    xv = {
        class: "balanceAssets__main"
    },
    Fv = ["src"],
    zv = ie({
        __name: "BalanceAssetsW",
        props: {
            data_NewSetWithdrawal: {
                type: null,
                required: !0
            },
            withdrawalsrule: {
                type: null,
                required: !0
            }
        },
        setup(b) {
            const s = b,
                {
                    t: c
                } = be(),
                {
                    setLoading: r
                } = He(),
                o = da(s, "withdrawalsrule");
            async function l() {
                r(!0);
                const d = await ne(ot({
                    withdrawid: s.data_NewSetWithdrawal.type
                }));
                d && (o.value.amount = d.data.withdrawalsrule.amount, xe(c("refreshSuccess"))), r(!1)
            }
            return (d, h) => (n(), i("div", qv, [e("div", jv, [e("div", Ev, [e("img", {
                src: a(F)("wallet", "balance")
            }, null, 8, Hv), f(" 可用余额 "), H(" " + t(d.$t("vailableBalance")), 1)])]), e("div", xv, [e("p", null, t(a(ve)(o.value.amount)), 1), e("img", {
                src: a(ue)("wallet/recharge", "refresh"),
                alt: "",
                onClick: l
            }, null, 8, Fv)]), f(` <div class="balanceAssets__tip">
			<img :src="getIconsPublic('wallet/recharge', 'cip')" alt="" />
		</div> `)]))
        }
    });
const Kv = re(zv, [
        ["__scopeId", "data-v-0879c174"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/Withdraw/BalanceAssetsW.vue"]
    ]),
    Gv = {
        class: "rechargeh__container"
    },
    Qv = {
        class: "rechargeh__container-head"
    },
    Zv = ["src"],
    Yv = {
        class: "rechargeh__container-content"
    },
    Xv = {
        class: "rechargeh__container-content__item-header ar-1px-b"
    },
    Jv = {
        class: "rechargeh__container-content__item-body"
    },
    e_ = ["onClick", "src"],
    t_ = {
        class: "rechargeh__container-footer"
    },
    a_ = ie({
        __name: "WithdrawHistory",
        setup(b, {
            expose: s
        }) {
            const c = ye(),
                {
                    setLoading: r
                } = He(),
                o = C([]),
                l = Ne({
                    pageNo: 1,
                    pageSize: 5,
                    startDate: "",
                    endDate: "",
                    state: -1,
                    type: -1
                });

            function d() {
                c.push({
                    name: "WithdrawHistory"
                })
            }
            async function h() {
                r(!0);
                const w = await ne(jn(l));
                w && (o.value = w.data.list), r(!1)
            }
            return ge(async () => {
                await h()
            }), s({
                getWithdrawLog: h
            }), (w, u) => (n(), i("div", Gv, [e("div", Qv, [e("img", {
                src: a(F)("wallet", "historyHead")
            }, null, 8, Zv), e("h1", null, t(w.$t("whTitle5")), 1)]), e("div", Yv, [o.value.length > 0 ? (n(!0), i(de, {
                key: 0
            }, $e(o.value, (_, $) => (n(), i("div", {
                class: "rechargeh__container-content__item",
                key: $
            }, [f(' <div class="rechargeh__container-content__item-header ar-1px-b" @click="onToDetail(item.state)"> '), e("div", Xv, [e("span", null, t(w.$t("withdraw")), 1), e("span", {
                class: ae({
                    stateR: _.state === 0,
                    stateG: _.state === 1
                })
            }, [H(t(a(Xe)(a(De).WithdrawState, _.state)) + " ", 1), f(' <van-icon name="arrow" /> ')], 2)]), e("div", Jv, [e("div", null, [e("span", null, t(w.$t("amount")), 1), e("span", null, t(a(ve)(_.price)), 1)]), e("div", null, [e("span", null, t(w.$t("type")), 1), e("span", null, t(_.withdrawName), 1)]), e("div", null, [e("span", null, t(w.$t("time")), 1), e("span", null, t(_.addTime), 1)]), e("div", null, [e("span", null, t(w.$t("orderNo")), 1), e("span", null, t(_.withdrawNumber), 1), e("img", {
                onClick: v => a(ke)(_.withdrawNumber.toString()),
                src: a(F)("public", "copy")
            }, null, 8, e_)])])]))), 128)) : (n(), Ie(pt, {
                key: 1
            }))]), e("div", t_, [e("button", {
                onClick: d
            }, t(w.$t("allRecords")), 1)])]))
        }
    });
const xt = re(a_, [
        ["__scopeId", "data-v-30972a14"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/Withdraw/WithdrawHistory.vue"]
    ]),
    n_ = {
        class: "withdrawWay"
    },
    s_ = ["src"],
    l_ = ["src"],
    o_ = ["src"],
    i_ = ["src"],
    r_ = ["onClick"],
    c_ = ["src"],
    d_ = ["src"],
    u_ = ie({
        __name: "withdrawalTypes",
        props: {
            data_NewSetWithdrawal: {
                type: null,
                required: !0
            },
            withdrawalTypeslist: {
                type: Array,
                required: !0
            },
            c2cAward: {
                type: Number,
                required: !0
            }
        },
        emits: ["onSelectWithdrawalType"],
        setup(b, {
            emit: s
        }) {
            const c = b,
                r = V(() => c.withdrawalTypeslist.find(d => d.withdrawID == 20)),
                o = V(() => c.withdrawalTypeslist.find(d => d.withdrawID == 21));

            function l(d) {
                s("onSelectWithdrawalType", d)
            }
            return (d, h) => (n(), i("div", n_, [r.value ? (n(), i("div", {
                key: 0,
                class: ae(["c2c", {
                    active: d.data_NewSetWithdrawal.type == 20
                }]),
                onClick: h[0] || (h[0] = w => l({
                    withdrawID: 20
                }))
            }, [d.data_NewSetWithdrawal.type != r.value.withdrawID ? (n(), i("img", {
                key: 0,
                src: r.value.withBeforeImgUrl
            }, null, 8, s_)) : (n(), i("img", {
                key: 1,
                src: r.value.withAfterImgUrl
            }, null, 8, l_)), e("div", null, [e("div", null, t(r.value.name), 1), d.c2cAward > 0 ? (n(), i(de, {
                key: 0
            }, [H(t(d.$t("c2cEGReward", [d.c2cAward ? a(Kt)(d.c2cAward, 100) : 0])), 1)], 64)) : f("v-if", !0)])], 2)) : f("v-if", !0), o.value ? (n(), i("div", {
                key: 1,
                class: ae(["c2c Ar", {
                    active: d.data_NewSetWithdrawal.type == 21
                }]),
                onClick: h[1] || (h[1] = w => l({
                    withdrawID: 21
                }))
            }, [d.data_NewSetWithdrawal.type != o.value.withdrawID ? (n(), i("img", {
                key: 0,
                src: o.value.withBeforeImgUrl
            }, null, 8, o_)) : (n(), i("img", {
                key: 1,
                src: o.value.withAfterImgUrl
            }, null, 8, i_)), e("div", null, [e("div", null, t(o.value.name), 1), e("p", null, t(d.$t("withdrawTip5")), 1)])], 2)) : f("v-if", !0), (n(!0), i(de, null, $e(d.withdrawalTypeslist, w => (n(), i(de, {
                key: w.withdrawID
            }, [
                [20, 21].includes(w.withdrawID) ? f("v-if", !0) : (n(), i("div", {
                    key: 0,
                    class: ae({
                        select: d.data_NewSetWithdrawal.type == w.withdrawID
                    }),
                    onClick: u => l(w)
                }, [e("div", null, [d.data_NewSetWithdrawal.type != w.withdrawID ? (n(), i("img", {
                    key: 0,
                    src: w.withBeforeImgUrl
                }, null, 8, c_)) : (n(), i("img", {
                    key: 1,
                    src: w.withAfterImgUrl
                }, null, 8, d_))]), e("span", null, t(w.name), 1)], 10, r_))
            ], 64))), 128))]))
        }
    });
const v_ = re(u_, [
        ["__scopeId", "data-v-9bae072d"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/Withdraw/withdrawalTypes.vue"]
    ]),
    __ = {
        class: "explain"
    },
    p_ = {
        class: "input"
    },
    h_ = {
        class: "place-div"
    },
    m_ = ["placeholder"],
    f_ = {
        key: 0,
        class: "verify"
    },
    w_ = {
        class: "balance bank"
    },
    y_ = {
        class: "red"
    },
    g_ = ["value"],
    $_ = {
        class: "rightD"
    },
    b_ = {
        class: "yellow"
    },
    k_ = {
        class: "explain usdt"
    },
    C_ = {
        class: "head"
    },
    T_ = ["src"],
    S_ = {
        key: 0
    },
    I_ = {
        key: 1
    },
    N_ = {
        class: "input"
    },
    A_ = {
        class: "place-div"
    },
    R_ = ["placeholder"],
    D_ = {
        key: 0,
        class: "verify"
    },
    U_ = {
        key: 1,
        class: "verify"
    },
    B_ = {
        key: 2,
        class: "input"
    },
    W_ = ["placeholder"],
    O_ = {
        class: "place-div"
    },
    P_ = {
        class: "place-icon"
    },
    L_ = ["src"],
    M_ = {
        class: "balance usdt"
    },
    V_ = {
        class: "yellow"
    },
    q_ = ["value"],
    j_ = ie({
        __name: "withdrawField",
        props: {
            data_NewSetWithdrawal: {
                type: null,
                required: !0
            },
            withdrawalsrule: {
                type: null,
                required: !0
            }
        },
        setup(b, {
            expose: s
        }) {
            const c = b,
                {
                    t: r
                } = be(),
                o = V(() => We().getDollarSign),
                l = C(0),
                d = V({
                    get() {
                        return l.value != 0 ? l.value : ""
                    },
                    set(k) {
                        l.value = k
                    }
                }),
                h = da(c, "data_NewSetWithdrawal"),
                w = V({
                    get() {
                        return h.value.amount != 0 ? h.value.amount : ""
                    },
                    set(k) {
                        h.value.amount = k
                    }
                }),
                u = V(() => h.value.amount != 0 && (h.value.amount > c.withdrawalsrule.canWithdrawAmount || h.value.amount > c.withdrawalsrule.maxPrice || h.value.amount < c.withdrawalsrule.minPrice || c.withdrawalsrule.amountofCode > 0)),
                _ = V(() => {
                    if (h.value.amount != 0) {
                        if (c.withdrawalsrule.amountofCode > 0) return r("code128");
                        if (h.value.amount > c.withdrawalsrule.canWithdrawAmount) return r("cashBalanceInsufficient");
                        if (h.value.amount > c.withdrawalsrule.maxPrice || h.value.amount < c.withdrawalsrule.minPrice) return r("wordWithdrawal", [ve(c.withdrawalsrule.minPrice), ve(c.withdrawalsrule.maxPrice)])
                    }
                }),
                $ = V(() => h.value.type === 3 && h.value.amount != 0 && Number(h.value.amount) < 10);

            function v(k) {
                k.keyCode != 46 && (k.keyCode < 48 || k.keyCode > 57) && (k.returnValue = !1)
            }

            function A(k) {
                (k.keyCode < 48 || k.keyCode > 57) && (k.returnValue = !1)
            }

            function g() {
                h.value.amount = Number(h.value.amount.toString().replace(/[^\d.]/g, "").replace(/^\./g, "").replace(/\.{2,}/g, ".").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".")), h.value.amount.toString().length > 11 && (h.value.amount = Number(h.value.amount.toString().slice(0, 11)))
            }

            function U() {
                h.value.amount = Math.floor(c.withdrawalsrule.canWithdrawAmount), h.value.type === 3 && T()
            }

            function B() {
                l.value = Math.floor(l.value)
            }

            function T() {
                if (h.value.amount = Number(h.value.amount.toString().replace(/[^\d.]/g, "").replace(/\.{2,}/g, ".").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".").replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3").replace(/^\./g, "")), h.value.amount.toString().length > 11 && (h.value.amount = Number(h.value.amount.toString().slice(0, 11))), h.value.amount > 0) {
                    let k = Number(h.value.amount) / c.withdrawalsrule.uRate;
                    l.value = Math.floor(k * 100) / 100
                } else l.value = 0
            }

            function m() {
                if (l.value.toString().length > 11 && (l.value = Number(l.value.toString().slice(0, 11))), l.value > 0) {
                    let k = l.value * c.withdrawalsrule.uRate;
                    h.value.amount = Math.floor(Math.floor(k * 100) / 100)
                } else h.value.amount = 0
            }
            return s({
                usdtCount: l,
                data: h,
                showValidate: u,
                showValidateUB: $
            }), (k, P) => (n(), i(de, null, [he(e("div", __, [e("div", p_, [e("div", h_, t(o.value), 1), he(e("input", {
                placeholder: k.$t("enterAmount"),
                onInput: P[0] || (P[0] = I => g()),
                class: "inp",
                "onUpdate:modelValue": P[1] || (P[1] = I => w.value = I),
                onKeypress: P[2] || (P[2] = I => v(I))
            }, null, 40, m_), [
                [Se, w.value]
            ])]), u.value ? (n(), i("div", f_, t(_.value), 1)) : f("v-if", !0), e("div", w_, [e("div", null, [e("span", null, [H(t(k.$t("wfDesc1")) + " ", 1), e("h6", y_, t(a(ve)(k.withdrawalsrule.canWithdrawAmount || 0)), 1)]), e("input", {
                type: "button",
                value: k.$t("all"),
                onClick: U
            }, null, 8, g_)]), e("div", null, [e("span", null, t(k.$t("wfDesc2")), 1), e("div", $_, [e("span", b_, t(a(ve)(h.value.amount || 0)), 1)])])])], 512), [
                [vt, [1, 6, 8, 5].includes(h.value.type)]
            ]), he(e("div", k_, [e("div", C_, [e("img", {
                src: a(F)("wallet/withdrawType", String(h.value.type))
            }, null, 8, T_), h.value.type == 3 ? (n(), i("h1", S_, t(k.$t("selectUSDTNum")), 1)) : f("v-if", !0), h.value.type == 10 ? (n(), i("h1", I_, t(k.$t("selectUSDTAmount")), 1)) : f("v-if", !0)]), e("div", N_, [e("div", A_, t(o.value), 1), he(e("input", {
                type: "number",
                placeholder: k.$t("enterWithdrawAmount"),
                onInput: T,
                class: "inp",
                "onUpdate:modelValue": P[3] || (P[3] = I => w.value = I),
                onKeypress: P[4] || (P[4] = I => A(I))
            }, null, 40, R_), [
                [Se, w.value]
            ])]), u.value ? (n(), i("div", D_, t(_.value), 1)) : f("v-if", !0), $.value ? (n(), i("div", U_, t(k.$t("wfDesc4")), 1)) : f("v-if", !0), [3].includes(h.value.type) ? (n(), i("div", B_, [he(e("input", {
                type: "number",
                placeholder: k.$t("enterUSDTAmount"),
                onInput: m,
                class: "inp",
                "onUpdate:modelValue": P[5] || (P[5] = I => d.value = I),
                onKeypress: P[6] || (P[6] = I => A(I)),
                onFocus: B
            }, null, 40, W_), [
                [Se, d.value]
            ]), e("div", O_, [e("div", P_, [e("img", {
                src: a(F)("wallet/withdrawType", "3")
            }, null, 8, L_)])])])) : f("v-if", !0), e("div", M_, [e("div", null, [e("span", null, [H(t(k.$t("wfDesc5")) + " ", 1), e("h6", V_, t(a(ve)(k.withdrawalsrule.canWithdrawAmount || 0)), 1)]), e("input", {
                type: "button",
                value: k.$t("all"),
                onClick: U
            }, null, 8, q_)])])], 512), [
                [vt, [3, 10].includes(h.value.type)]
            ])], 64))
        }
    });
const E_ = re(j_, [
        ["__scopeId", "data-v-cb5583fe"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/Withdraw/withdrawField.vue"]
    ]),
    H_ = {
        key: 0,
        class: "addWithdrawType"
    },
    x_ = ["src"],
    F_ = {
        key: 0,
        class: "addWithdrawType-text"
    },
    z_ = ie({
        __name: "AddWithdrawType",
        props: {
            isShowhintTextO: {
                type: Boolean,
                required: !1,
                default: !1
            },
            hintTextO: {
                type: String,
                required: !1,
                default: ""
            },
            type: {
                type: null,
                required: !1,
                default: ""
            }
        },
        setup(b) {
            const s = b,
                c = ye(),
                r = tt(),
                {
                    t: o
                } = be(),
                l = at(),
                d = o("addAddr");
            let h = o("paymentMethodRequired");
            const w = V(() => !([3, 10].includes(s.type) && l.getADDUSTD == 0)),
                u = () => {
                    c.push({
                        name: "CustomerService"
                    })
                };

            function _() {
                const v = {
                    1: "Withdraw-AddBankCard",
                    3: "Withdraw-AddUSDT",
                    4: "Withdraw-AddType4",
                    5: "Withdraw-AddPIX",
                    6: "Withdraw-AddWave",
                    8: "Withdraw-AddKbz",
                    10: "Withdraw-AddUSDT"
                };
                c.replace({
                    name: v[s.type],
                    query: {
                        fromV: r.name
                    }
                })
            }
            const $ = V(() => ({
                1: o("titleAddBankCard"),
                3: o("addAddr"),
                4: o("addWallet"),
                5: o("upiAddPaymentMethod"),
                6: o("addWaveType"),
                8: o("upiAddPaymentMethod"),
                10: o("addAddr")
            })[s.type]);
            return (v, A) => w.value ? (n(), i("div", H_, [e("div", {
                class: "addWithdrawType-top",
                onClick: _
            }, [e("img", {
                src: a(ue)("wallet/withdraw", "add")
            }, null, 8, x_), e("span", null, t($.value || a(d)), 1)]), v.isShowhintTextO ? (n(), i("div", F_, t(v.hintTextO || a(h)), 1)) : f("v-if", !0)])) : (n(), i("div", {
                key: 1,
                class: "canNotAdd",
                onClick: u
            }, t(v.$t("contactServicer") + v.$t("titleAddUSDTAddr")), 1))
        }
    });
const Lt = re(z_, [
        ["__scopeId", "data-v-ef5c8333"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/Withdraw/AddWithdrawType.vue"]
    ]),
    K_ = {
        class: "Recharge__container-intro"
    },
    G_ = {
        class: "br"
    },
    Q_ = ["innerHTML"],
    Z_ = {
        class: "red"
    },
    Y_ = {
        class: "red"
    },
    X_ = {
        class: "red"
    },
    J_ = {
        key: 0
    },
    ep = ["innerHTML"],
    tp = {
        key: 0
    },
    ap = ["innerHTML"],
    np = ["innerHTML"],
    sp = ["innerHTML"],
    lp = ["innerHTML"],
    op = ie({
        __name: "InstructionsW",
        props: {
            withdrawalsrule: {
                type: null,
                required: !1
            },
            withdrawType: {
                type: null,
                required: !1
            },
            award: {
                type: null,
                required: !1
            },
            name: {
                type: null,
                required: !1
            }
        },
        setup(b) {
            return (s, c) => {
                var r, o, l, d, h, w, u;
                return n(), i("div", K_, [e("div", G_, [s.withdrawType == 21 ? (n(), i(de, {
                    key: 0
                }, [e("p", null, t(s.$t("arWTip1", [s.name])), 1), e("p", null, t(s.$t("arWTip2", [s.name])), 1)], 64)) : f("v-if", !0), [1, 3, 4, 5, 6, 8, 10, 20, 21].includes(s.withdrawType) ? (n(), i(de, {
                    key: 1
                }, [e("p", {
                    innerHTML: s.$t("instructionDes", [a(ve)((r = s.withdrawalsrule) == null ? void 0 : r.amountofCode)])
                }, null, 8, Q_), e("p", null, [H(t(s.$t("instructionTxt6")) + " ", 1), e("span", Z_, t((o = s.withdrawalsrule) == null ? void 0 : o.startTime) + "-" + t((l = s.withdrawalsrule) == null ? void 0 : l.endTime), 1)]), e("p", null, [H(t(s.$t("instructionTxt7")), 1), e("span", Y_, t((d = s.withdrawalsrule) == null ? void 0 : d.withdrawRemainingCount), 1)]), e("p", null, [H(t(s.$t("instructionTxt8")) + " ", 1), e("span", X_, t(a(ve)((h = s.withdrawalsrule) == null ? void 0 : h.minPrice)) + "-" + t(a(ve)((w = s.withdrawalsrule) == null ? void 0 : w.maxPrice)), 1)])], 64)) : f("v-if", !0), [3, 10].includes(s.withdrawType) ? (n(), i(de, {
                    key: 2
                }, [e("p", null, t(s.$t("instructionTxt10")), 1), e("p", null, t(s.$t("instructionTxt11")), 1)], 64)) : f("v-if", !0), s.withdrawType == 4 ? (n(), i(de, {
                    key: 3
                }, [Number(s.award) ? (n(), i("div", J_, [e("p", {
                    innerHTML: s.$t("c2cFTip1", [s.name, s.award * 100 || 0])
                }, null, 8, ep)])) : f("v-if", !0)], 64)) : f("v-if", !0), s.withdrawType == 20 ? (n(), i(de, {
                    key: 4
                }, [Number(s.award) ? (n(), i("div", tp, [e("p", {
                    innerHTML: s.$t("c2cFTip1", [s.name, s.award * 100 || 0])
                }, null, 8, ap)])) : f("v-if", !0), e("div", null, [e("p", {
                    innerHTML: s.$t("c2cFTip4")
                }, null, 8, np)]), e("div", null, [e("p", {
                    innerHTML: s.$t("c2cFTip2", [((u = s.withdrawalsrule) == null ? void 0 : u.c2cUnitAmount) || 100])
                }, null, 8, sp)]), e("div", null, [e("p", {
                    innerHTML: s.$t("c2cFTip3")
                }, null, 8, lp)])], 64)) : f("v-if", !0), s.withdrawType != 21 ? (n(), i(de, {
                    key: 5
                }, [e("p", null, t(s.$t("withdrwsTip5")), 1), e("p", null, t(s.$t("withdrwsTip6")), 1)], 64)) : f("v-if", !0)])])
            }
        }
    });
const Mt = re(op, [
        ["__scopeId", "data-v-76eb7f31"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/Withdraw/InstructionsW.vue"]
    ]),
    st = b => (Ae("data-v-391308ac"), b = b(), Re(), b),
    ip = {
        class: "c2cConfirm"
    },
    rp = st(() => e("p", null, [H("*You must click "), e("span", null, "【Confirm Receipt】")], -1)),
    cp = st(() => e("p", null, "*After receiving the transfer, go to order details and click 【Confirm Receipt】to receive the reward.", -1)),
    dp = st(() => e("h6", null, [H("How to "), e("span", null, "【Confirm Receipt】")], -1)),
    up = {
        class: "imgBox"
    },
    vp = {
        class: "box"
    },
    _p = st(() => e("div", null, [e("h6", null, "01、"), H("Open my withdrawal record")], -1)),
    pp = {
        class: "box"
    },
    hp = st(() => e("div", null, "02、Select New-UPI Click Order", -1)),
    mp = {
        class: "box"
    },
    fp = st(() => e("div", null, "03、Click to Money received", -1)),
    wp = {
        class: "box"
    },
    yp = st(() => e("div", null, "04、Complete the order and get rewards", -1)),
    gp = st(() => e("span", null, "[Money received]", -1)),
    $p = ie({
        __name: "c2cConfirm",
        props: {
            showC2c: {
                type: Boolean,
                default: !1,
                required: !0
            }
        },
        emits: ["update:showC2c"],
        setup(b, {
            emit: s
        }) {
            const c = b,
                {
                    showC2c: r
                } = ua(c, s),
                o = C(!1);

            function l() {
                if (!o.value) return _e({
                    message: "Please read the process and check the box to agree",
                    wordBreak: "break-word"
                });
                localStorage.setItem("isC2cCheck", "1"), r.value = !1
            }
            return ge(() => {
                localStorage.getItem("isC2cCheck") != null && (o.value = localStorage.getItem("isC2cCheck") == "1")
            }), (d, h) => {
                const w = x("van-checkbox"),
                    u = ze("lazy");
                return n(), i("div", ip, [rp, cp, dp, e("div", up, [e("div", vp, [_p, he(e("img", null, null, 512), [
                    [u, a(F)("wallet/withdraw/c2c", "1")]
                ])]), e("div", pp, [hp, he(e("img", null, null, 512), [
                    [u, a(F)("wallet/withdraw/c2c", "2")]
                ])]), e("div", mp, [fp, he(e("img", null, null, 512), [
                    [u, a(F)("wallet/withdraw/c2c", "3")]
                ])]), e("div", wp, [yp, he(e("img", null, null, 512), [
                    [u, a(F)("wallet/withdraw/c2c", "4")]
                ])])]), S(w, {
                    modelValue: o.value,
                    "onUpdate:modelValue": h[0] || (h[0] = _ => o.value = _)
                }, {
                    default: J(() => [H("I already understand the process and agree to come back and click "), gp]),
                    _: 1
                }, 8, ["modelValue"]), e("div", {
                    class: ae(["btn", {
                        active: o.value
                    }]),
                    onClick: l
                }, "confirm", 2)])
            }
        }
    });
const bp = re($p, [
        ["__scopeId", "data-v-391308ac"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/Withdraw/c2cConfirm.vue"]
    ]),
    kp = {
        class: "c2cWithdraw__C"
    },
    Cp = {
        class: "c2cWithdraw__C-input"
    },
    Tp = {
        class: "place-div"
    },
    Sp = {
        class: "unit"
    },
    Ip = {
        key: 0,
        class: "verify"
    },
    Np = {
        class: "can-withdraw"
    },
    Ap = {
        class: "c2cWithdraw__C-tip"
    },
    Rp = {
        class: "c2cWithdraw__C-tip-l"
    },
    Dp = {
        class: "c2cWithdraw__C-tip-r"
    },
    Up = {
        class: "c2cWithdraw__T"
    },
    Bp = {
        class: "c2cWithdraw__T-h"
    },
    Wp = 20,
    Op = ie({
        __name: "c2cField",
        props: {
            c2crule: {
                type: null,
                required: !0
            },
            c2cAward: {
                type: null,
                required: !0
            },
            c2cName: {
                type: String,
                required: !0
            }
        },
        emits: ["setc2cAmount"],
        setup(b, {
            emit: s
        }) {
            const c = b,
                {
                    t: r
                } = be(),
                o = C(0),
                l = V(() => We().getDollarSign),
                d = V(() => Number(o.value) ? Number(o.value) * (c.c2crule.c2cUnitAmount || 100) : 0),
                h = V(() => d.value * c.c2cAward),
                w = () => {
                    const $ = Math.floor(c.c2crule.canWithdrawAmount / 100),
                        v = Math.floor(c.c2crule.maxPrice / 100);
                    o.value = $ > v ? v : $
                },
                u = $ => {
                    s("setc2cAmount", $ * (c.c2crule.c2cUnitAmount || 100))
                },
                _ = V(() => {
                    if (d.value != 0) {
                        if (d.value > c.c2crule.canWithdrawAmount) return r("cashBalanceInsufficient");
                        if (d.value > c.c2crule.maxPrice || d.value < c.c2crule.minPrice) return r("wordWithdrawal", [ve(c.c2crule.minPrice), ve(c.c2crule.maxPrice)])
                    }
                    return ""
                });
            return ge(() => {}), ($, v) => {
                var g;
                const A = x("van-field");
                return n(), i(de, null, [e("div", kp, [e("div", Cp, [e("div", Tp, t(l.value), 1), S(A, {
                    modelValue: o.value,
                    "onUpdate:modelValue": [v[0] || (v[0] = U => o.value = U), u],
                    modelModifiers: {
                        number: !0
                    },
                    type: "digit",
                    placeholder: $.$t("plsEnterQuantity"),
                    class: "amount-input"
                }, null, 8, ["modelValue", "placeholder"]), e("div", Sp, t(((g = $.c2crule.c2cUnitAmount) == null ? void 0 : g.toString().substring(1)) || "00"), 1)]), _.value ? (n(), i("div", Ip, t(_.value), 1)) : f("v-if", !0), e("div", Np, [H(t($.$t("wfDesc1")) + t(a(ve)($.c2crule.canWithdrawAmount || 0)) + " ", 1), e("div", {
                    onClick: w
                }, t($.$t("all")), 1)]), e("div", Ap, [e("div", Rp, [e("div", null, t($.$t("wfDesc2")), 1), e("div", null, t($.$t("savedForYou")), 1)]), e("div", Dp, [e("div", null, t(a(ve)(d.value)), 1), e("div", null, t(a(ve)(h.value)), 1)])]), Ft($.$slots, "default", {}, void 0, !0)]), e("div", Up, [e("div", Bp, t($.$t("withdrawalInstructions")), 1), S(Mt, {
                    withdrawType: Wp,
                    withdrawalsrule: $.c2crule,
                    award: $.c2cAward,
                    name: $.c2cName
                }, null, 8, ["withdrawalsrule", "award", "name"])])], 64)
            }
        }
    });
const Pp = re(Op, [
        ["__scopeId", "data-v-472a2df8"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/Withdraw/c2cField.vue"]
    ]),
    Lp = {
        class: "title"
    },
    Mp = {
        class: "name"
    },
    Vp = ie({
        __name: "c2cUpi",
        props: {
            withdrawalslist: {
                type: Array,
                default: () => []
            },
            bid: {
                default: -0
            }
        },
        setup(b) {
            const s = b,
                c = tt(),
                r = ye(),
                o = V(() => s.withdrawalslist.find(d => d.bid == s.bid) || {}),
                l = d => {
                    r.replace({
                        name: "Withdraw-Upi",
                        query: {
                            bid: d,
                            fromV: c.name
                        }
                    })
                };
            return ge(() => {}), (d, h) => {
                const w = x("van-icon");
                return n(), i("div", {
                    class: ae(["c2cUpi", {
                        noUpi: !b.withdrawalslist.length
                    }]),
                    onClick: h[0] || (h[0] = u => l(o.value.bid))
                }, [b.withdrawalslist.length ? (n(), i(de, {
                    key: 0
                }, [e("div", Lp, t(d.$t("upiCollectMoney")), 1), e("div", Mp, t(o.value.upiAccount), 1), S(w, {
                    name: "arrow",
                    class: "right-icon",
                    size: "12"
                })], 64)) : (n(), i(de, {
                    key: 1
                }, [H(t(d.$t("addUpi")), 1)], 64))], 2)
            }
        }
    });
const qp = re(Vp, [
        ["__scopeId", "data-v-fe54ed07"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/Withdraw/c2cUpi.vue"]
    ]),
    jp = b => (Ae("data-v-15989e8c"), b = b(), Re(), b),
    Ep = ["onClick"],
    Hp = {
        class: "c2cRecord__C-item-h"
    },
    xp = {
        class: "title"
    },
    Fp = {
        key: 0
    },
    zp = {
        key: 1
    },
    Kp = {
        class: "c2cRecord__C-item-a"
    },
    Gp = {
        class: "title"
    },
    Qp = {
        class: "c2cRecord__C-item-u"
    },
    Zp = jp(() => e("span", {
        class: "title"
    }, "UTR", -1)),
    Yp = ["onClick", "src"],
    Xp = {
        class: "c2cRecord__C-item-t"
    },
    Jp = {
        class: "title"
    },
    eh = {
        class: "c2cRecord__C-item-id"
    },
    th = {
        class: "title"
    },
    ah = ["onClick", "src"],
    nh = ie({
        __name: "c2cRecordList",
        props: {
            list: {
                type: Array,
                required: !0
            }
        },
        setup(b) {
            const s = b,
                {
                    t: c
                } = be(),
                r = ye(),
                o = [c("c2cState0"), c("c2cState1"), c("c2cState2"), c("c2cState3"), c("c2cState4"), c("c2cTip9"), c("c2cState6"), c("c2cState7"), c("c2cState8"), c("c2cState9"), c("c2cState10"), c("c2cState11"), c("c2cState11"), c("c2cState13"), c("c2cState14")],
                l = C(null),
                d = C(0),
                h = C("00:00"),
                w = C("00:00"),
                u = C(null),
                _ = C(null),
                $ = (U, B) => {
                    localStorage.setItem("c2cOrderNo", U), r.push({
                        name: "Withdraw-C2cDetail",
                        query: {
                            order: U,
                            state: B
                        }
                    })
                };
            je(() => s.list, U => {
                if (l.value = U.findIndex(T => T.state === 1), l.value != -1) {
                    const T = U[l.value].serviceTime.replace(/-/g, "/"),
                        m = U[l.value].confrimEndTime.replace(/-/g, "/");
                    d.value = new Date(m).getTime() - new Date(T).getTime(), d.value > 0 ? (clearInterval(u.value), A()) : h.value = "00:00"
                } else h.value = "00:00";
                let B = U.find(T => T.state === 11 || T.state === 12);
                if (B) {
                    const T = B.auditEndTime.replace(/-/g, "/"),
                        m = B.serviceTime.replace(/-/g, "/");
                    d.value = new Date(m).getTime() - new Date(T).getTime(), clearInterval(_.value), g()
                } else w.value = "00:00"
            });
            const v = U => {
                const B = Math.floor(U / 36e5),
                    T = Math.floor((U - B * 36e5) / 6e4),
                    m = Math.floor((U - B * 36e5 - T * 6e4) / 1e3);
                return `${B?B.toString().padStart(2,"0")+":":""}${T.toString().padStart(2,"0")}:${m.toString().padStart(2,"0")}`
            };

            function A() {
                u.value = setInterval(() => {
                    d.value -= 1e3, h.value = v(d.value), d.value <= 0 && clearInterval(u.value)
                }, 1e3)
            }

            function g() {
                _.value = setInterval(() => {
                    d.value += 1e3, w.value = v(d.value)
                }, 1e3)
            }
            return lt(() => {
                clearInterval(u.value), clearInterval(_.value)
            }), (U, B) => {
                const T = x("van-icon");
                return n(!0), i(de, null, $e(U.list, (m, k) => (n(), i("div", {
                    key: k,
                    class: "c2cRecord__C-item",
                    onClick: P => $(m.orderNo, m.state)
                }, [e("div", Hp, [e("div", xp, t(U.$t("withdraw")), 1), e("div", {
                    class: ae(["state" + m.state])
                }, [H(t(o[m.state]) + " ", 1), m.state === 1 ? (n(), i("span", Fp, t(h.value), 1)) : f("v-if", !0), [11, 12].includes(m.state) ? (n(), i("span", zp, ": " + t(w.value), 1)) : f("v-if", !0), m.state != 2 ? (n(), Ie(T, {
                    key: 2,
                    name: "arrow",
                    size: "14"
                })) : f("v-if", !0)], 2)]), e("div", Kp, [e("span", Gp, t(U.$t("amount")), 1), H(" " + t(a(ve)(m.orderAmount)), 1)]), e("div", Qp, [Zp, e("span", null, [H(t(m.transactionNo), 1), e("img", {
                    onClick: Ze(P => a(ke)(m.transactionNo), ["stop"]),
                    src: a(F)("public", "copy")
                }, null, 8, Yp)])]), e("div", Xp, [e("span", Jp, t(U.$t("time")), 1), H(t(m.createTime), 1)]), e("div", eh, [e("span", th, t(U.$t("orderNo")), 1), e("span", null, [H(t(m.orderNo), 1), e("img", {
                    onClick: Ze(P => a(ke)(m.orderNo), ["stop"]),
                    src: a(F)("public", "copy")
                }, null, 8, ah)])])], 8, Ep))), 128)
            }
        }
    });
const Na = re(nh, [
        ["__scopeId", "data-v-15989e8c"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/Withdraw/c2cRecordList.vue"]
    ]),
    sh = {
        class: "c2cRecord__C"
    },
    lh = {
        class: "c2cRecord__C-head"
    },
    oh = {
        class: "c2cRecord__C-body"
    },
    ih = ie({
        __name: "c2cRecord",
        setup(b, {
            expose: s
        }) {
            const c = ye(),
                r = C(),
                o = C({
                    startDate: "",
                    endDate: "",
                    type: -1,
                    state: -1,
                    category: -1
                }),
                l = C([]),
                d = () => {
                    c.push({
                        name: "WithdrawHistory"
                    })
                };
            return s({
                resetRefresh: () => {
                    r.value.resetRefresh()
                }
            }), (w, u) => (n(), i("div", sh, [e("div", lh, t(w.$t("c2CWithdrawalRecord")), 1), e("div", oh, [S(Gt, {
                list: l.value,
                "onUpdate:list": u[0] || (u[0] = _ => l.value = _),
                "page-query": o.value,
                "onUpdate:pageQuery": u[1] || (u[1] = _ => o.value = _),
                api: a(fa),
                distance: 100,
                ref_key: "listRef",
                ref: r,
                "is-auto-load": !0,
                showNoM: !1
            }, {
                content: J(() => [S(Na, {
                    list: l.value
                }, null, 8, ["list"])]),
                _: 1
            }, 8, ["list", "page-query", "api"])]), e("div", {
                class: "c2cRecord__C-allrecord",
                onClick: d
            }, t(w.$t("allRecords")), 1)]))
        }
    });
const rh = re(ih, [
        ["__scopeId", "data-v-824a4891"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/Withdraw/c2cRecord.vue"]
    ]),
    ch = {
        class: "WC4__C"
    },
    dh = {
        class: "WC4__C-input"
    },
    uh = {
        class: "place-div"
    },
    vh = {
        key: 0,
        class: "verify"
    },
    _h = {
        class: "can-withdraw"
    },
    ph = {
        class: "amount"
    },
    hh = {
        class: "num"
    },
    mh = 4,
    fh = ie({
        __name: "wC4Field",
        props: {
            rule: {
                type: null,
                required: !0
            },
            award: {
                type: null,
                required: !0
            },
            name: {
                type: String,
                required: !0
            }
        },
        emits: ["setc2cAmount"],
        setup(b, {
            emit: s
        }) {
            const c = b,
                {
                    t: r
                } = be(),
                o = C(0),
                l = V(() => We().getDollarSign),
                d = () => {
                    const u = c.rule.canWithdrawAmount,
                        _ = c.rule.maxPrice;
                    o.value = u > _ ? _ : u
                },
                h = u => {
                    s("setc2cAmount", u)
                },
                w = V(() => {
                    if (o.value != 0) {
                        if (o.value > c.rule.canWithdrawAmount) return r("cashBalanceInsufficient");
                        if (o.value > c.rule.maxPrice || o.value < c.rule.minPrice) return r("wordWithdrawal", [ve(c.rule.minPrice), ve(c.rule.maxPrice)])
                    }
                    return ""
                });
            return ge(() => {}), (u, _) => {
                const $ = x("van-field");
                return n(), i("div", ch, [e("div", dh, [e("div", uh, t(l.value), 1), S($, {
                    modelValue: o.value,
                    "onUpdate:modelValue": [_[0] || (_[0] = v => o.value = v), h],
                    modelModifiers: {
                        number: !0
                    },
                    type: "digit",
                    placeholder: u.$t("plsEnterQuantity"),
                    class: "amount-input"
                }, null, 8, ["modelValue", "placeholder"])]), w.value ? (n(), i("div", vh, t(w.value), 1)) : f("v-if", !0), e("div", _h, [H(t(u.$t("wfDesc1")) + t(a(ve)(u.rule.canWithdrawAmount || 0)) + " ", 1), e("div", {
                    onClick: d
                }, t(u.$t("all")), 1)]), e("div", ph, [e("div", null, t(u.$t("wfDesc2")), 1), e("div", hh, t(a(ve)(o.value)), 1)]), Ft(u.$slots, "default", {}, void 0, !0), f(` <div class="WC4__C-b">

			<div v-html="$t('instructionDes', [currency(rule?.amountofCode)])"></div>
			<div>
				{{ $t('withdrawTime') }}<span>{{ rule.startTime }}-{{ rule.endTime }}</span
				>；
			</div>
			<div>
				{{ $t('instructionTxt7') }} <span>{{ rule.withdrawRemainingCount }}</span
				>；
			</div>
			<div>
				{{ $t('instructionTxt8') }} <span>{{ currency(rule.minPrice) }}-{{ currency(rule.maxPrice) }}</span>
			</div>
			<div v-if="Number(award)">
				<p v-html="$t('c2cFTip1', [name, award * 100 || 0])"></p>
			</div>
		</div> `), S(Mt, {
                    withdrawType: mh,
                    withdrawalsrule: u.rule,
                    award: u.award,
                    name: u.name
                }, null, 8, ["withdrawalsrule", "award", "name"])])
            }
        }
    });
const wh = re(fh, [
        ["__scopeId", "data-v-81d3a4d3"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/Withdraw/wC4Field.vue"]
    ]),
    yh = {
        class: "name"
    },
    gh = ie({
        __name: "wC4Id",
        props: {
            withdrawalslist: {
                type: Array,
                default: () => []
            },
            bid: {
                default: -0
            },
            name: {
                default: ""
            }
        },
        setup(b) {
            const s = b,
                c = tt(),
                r = ye(),
                o = V(() => s.withdrawalslist.find(d => d.bid == s.bid) || {}),
                l = d => {
                    r.replace({
                        name: "Withdraw-Type4",
                        query: {
                            bid: d,
                            fromV: c.name,
                            Type4name: s.name
                        }
                    })
                };
            return ge(() => {}), (d, h) => {
                const w = x("van-icon");
                return n(), i("div", {
                    class: ae(["wC4Id", {
                        noUpi: !b.withdrawalslist.length
                    }]),
                    onClick: h[0] || (h[0] = u => l(o.value.bid))
                }, [b.withdrawalslist.length ? (n(), i(de, {
                    key: 0
                }, [e("div", {
                    class: ae(["title", `${o.value.walletName}`])
                }, t(o.value.walletName), 3), e("div", yh, t(o.value.mobileNO), 1), S(w, {
                    name: "arrow",
                    class: "right-icon",
                    size: "12"
                })], 64)) : (n(), i(de, {
                    key: 1
                }, [H(t(d.$t("addto")), 1)], 64))], 2)
            }
        }
    });
const $h = re(gh, [
        ["__scopeId", "data-v-8fab5987"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/Withdraw/wC4Id.vue"]
    ]),
    bh = {
        class: "c2cWithdraw__C"
    },
    kh = {
        class: "head"
    },
    Ch = ["src"],
    Th = {
        class: "c2cWithdraw__C-input"
    },
    Sh = {
        class: "place-div"
    },
    Ih = {
        key: 0,
        class: "verify"
    },
    Nh = {
        class: "can-withdraw"
    },
    Ah = {
        class: "c2cWithdraw__C-tip"
    },
    Rh = {
        class: "c2cWithdraw__C-tip-l"
    },
    Dh = {
        class: "c2cWithdraw__C-tip-r"
    },
    Uh = {
        class: "c2cWithdraw__T"
    },
    Bh = {
        class: "c2cWithdraw__T-h"
    },
    Wh = 21,
    Oh = ie({
        __name: "arField",
        setup(b, {
            expose: s
        }) {
            const {
                withdrawalsrule: c,
                withdrawalTypeslist: r,
                setc2cAmount: o
            } = nt(), {
                t: l
            } = be(), d = C(0), h = V(() => We().getDollarSign), w = V(() => Number(d.value) ? Number(d.value) : 0), u = () => {
                const v = Math.floor(c.value.canWithdrawAmount),
                    A = Math.floor(c.value.maxPrice);
                d.value = v > A ? A : v
            }, _ = v => {
                o(v)
            }, $ = V(() => {
                if (w.value != 0) {
                    if (w.value > c.value.canWithdrawAmount) return l("cashBalanceInsufficient");
                    if (w.value > c.value.maxPrice || w.value < c.value.minPrice) return l("wordWithdrawal", [ve(c.value.minPrice), ve(c.value.maxPrice)])
                }
                return ""
            });
            return s({
                validateTxt: $
            }), (v, A) => {
                var U;
                const g = x("van-field");
                return n(), i(de, null, [e("div", bh, [e("div", kh, [e("img", {
                    src: a(F)("wallet", "saveWallet")
                }, null, 8, Ch), H(" " + t(v.$t("enterA")), 1)]), e("div", Th, [e("div", Sh, t(h.value), 1), S(g, {
                    modelValue: d.value,
                    "onUpdate:modelValue": [A[0] || (A[0] = B => d.value = B), _],
                    modelModifiers: {
                        number: !0
                    },
                    type: "digit",
                    placeholder: v.$t("plsEnterQuantity"),
                    class: "amount-input"
                }, null, 8, ["modelValue", "placeholder"]), e("div", {
                    class: "all",
                    onClick: u
                }, t(v.$t("all")), 1)]), $.value ? (n(), i("div", Ih, t($.value), 1)) : f("v-if", !0), e("div", Nh, t(v.$t("wfDesc1")) + t(a(ve)(a(c).canWithdrawAmount || 0)), 1), e("div", Ah, [e("div", Rh, [e("div", null, t(v.$t("wfDesc2")), 1)]), e("div", Dh, [e("div", null, t(a(ve)(w.value)), 1)])]), Ft(v.$slots, "default", {}, void 0, !0)]), e("div", Uh, [e("div", Bh, t(v.$t("withdrawalInstructions")), 1), S(Mt, {
                    withdrawType: Wh,
                    withdrawalsrule: a(c),
                    name: ((U = a(r).find(B => B.withdrawID == 21)) == null ? void 0 : U.name) || ""
                }, null, 8, ["withdrawalsrule", "name"])])], 64)
            }
        }
    });
const Ph = re(Oh, [
        ["__scopeId", "data-v-7dcfb9e1"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/Withdraw/Ar/arField.vue"]
    ]),
    Lh = {
        class: "arType"
    },
    Mh = {
        class: "left"
    },
    Vh = ["src"],
    qh = {
        class: "right"
    },
    jh = {
        key: 0,
        class: "arCard"
    },
    Eh = {
        class: "left"
    },
    Hh = ["src"],
    xh = {
        class: "amount"
    },
    Fh = {
        class: "recycleBtnD c2c"
    },
    zh = ie({
        __name: "card",
        emits: ["onShowPwdD"],
        setup(b, {
            expose: s,
            emit: c
        }) {
            ye();
            const {
                data_NewSetWithdrawalH: r,
                withdrawalTypeslist: o
            } = nt(), {
                getInfo: l,
                arWallet: d,
                goWallet: h
            } = kt(), w = C(), u = V(() => {
                var v, A;
                if ([21].includes(r.value.type) && r.value.amount > 0) return !(r.value.amount < 1 || ((v = w.value) == null ? void 0 : v.validateTxt.length) > 0 || r.value.bid == 0 || ((A = d.value) == null ? void 0 : A.walletActivationStatus) != 1)
            }), _ = () => {
                const $ = encodeURIComponent("https://" + window.location.host + "/#/main");
                let A = `https://arbpay.me/#/TradRules?type=1&lang=${localStorage.getItem("language")}&returnUrl=${$}`;
                window.location.href = A
            };
            return ge(() => {
                l()
            }), s({
                isActiveC: u
            }), ($, v) => {
                var g, U;
                const A = x("van-icon");
                return n(), i("div", Lh, [e("div", {
                    class: "rule",
                    onClick: v[0] || (v[0] = B => _())
                }, [e("div", Mh, [e("img", {
                    src: a(F)("wallet", "ar1")
                }, null, 8, Vh), e("p", null, t($.$t("arbTip1")), 1)]), e("div", qh, [H(t($.$t("checkOver")), 1), S(A, {
                    name: "arrow"
                })])]), ((g = a(d)) == null ? void 0 : g.walletActivationStatus) == 1 ? (n(), i(de, {
                    key: 0
                }, [
                    [21].includes(a(r).type) ? (n(), i("div", jh, [e("div", Eh, [e("img", {
                        src: a(F)("wallet/withdrawType", `${a(r).type}`)
                    }, null, 8, Hh), e("p", null, [e("span", null, t($.$t("arbTip13")), 1), e("span", xh, t(((U = a(d)) == null ? void 0 : U.balance) || 0) + " ARB", 1)])]), e("div", {
                        class: "right",
                        onClick: v[1] || (v[1] = B => a(h)("wallet/withdraw"))
                    }, t($.$t("comminWallet")), 1)])) : f("v-if", !0), S(Ph, {
                        ref_key: "arFieldRef",
                        ref: w
                    }, {
                        default: J(() => [e("div", Fh, [e("button", {
                            class: ae(["recycleBtn", {
                                active: u.value
                            }]),
                            onClick: v[2] || (v[2] = () => {
                                c("onShowPwdD")
                            })
                        }, t($.$t("withdraw")), 3)])]),
                        _: 1
                    }, 512), S(xt)
                ], 64)) : (n(), Ie(Ta, {
                    key: 1,
                    pageType: "wallet/Withdraw"
                }))])
            }
        }
    });
const Kh = re(zh, [
        ["__scopeId", "data-v-69845b27"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/Withdraw/Ar/card.vue"]
    ]),
    Gh = {
        class: "noRightTimeDialog"
    },
    Qh = {
        class: "fail"
    },
    Zh = {
        class: "van-dialog__content-title title1"
    },
    Yh = {
        class: "van-dialog__content-note"
    },
    Xh = {
        class: "red"
    },
    Jh = ie({
        __name: "noRightTimeDialog",
        setup(b) {
            const {
                withdrawalsrule: s
            } = nt(), c = V(() => s.value ? s.value.startTime : "00:00"), r = V(() => s.value ? s.value.endTime : "23:59");
            return (o, l) => {
                const d = ze("lazy");
                return n(), i("div", Gh, [he(e("img", Qh, null, 512), [
                    [d, a(F)("wallet", "tip")]
                ]), e("div", Zh, t(o.$t("noRightTime")), 1), e("div", Yh, [e("p", null, [H(t(o.$t("wTimeInterval")), 1), e("span", Xh, t(c.value) + "-" + t(r.value), 1), H(", ")]), e("p", null, t(o.$t("later")), 1)])])
            }
        }
    });
const em = re(Jh, [
        ["__scopeId", "data-v-415fa4b1"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/Withdraw/noRightTimeDialog.vue"]
    ]),
    Aa = b => (Ae("data-v-80a607a5"), b = b(), Re(), b),
    tm = {
        class: "withdraw__container"
    },
    am = {
        class: "withdraw__container-content"
    },
    nm = {
        class: "recycleBtnD c2c"
    },
    sm = {
        class: "recycleBtnD c2c"
    },
    lm = ["src"],
    om = {
        key: 1,
        class: "bankInfoItem usdt"
    },
    im = ["src"],
    rm = {
        key: 2,
        class: "bankInfoItem usdt KBZ"
    },
    cm = ["src"],
    dm = {
        key: 0
    },
    um = {
        key: 1
    },
    vm = {
        key: 0
    },
    _m = {
        key: 1
    },
    pm = {
        class: "recycleBtnD"
    },
    hm = {
        class: "succeed"
    },
    mm = {
        class: "van-dialog__content-title"
    },
    fm = {
        class: "van-dialog__content-note"
    },
    wm = {
        class: "succeedImg"
    },
    ym = {
        class: "c2cTip"
    },
    gm = ["innerHTML"],
    $m = ["innerHTML"],
    bm = {
        class: "pwd"
    },
    km = {
        class: "pwd-head ar-1px-b"
    },
    Cm = ["src"],
    Tm = Aa(() => e("input", {
        type: "text",
        class: "is-hidden"
    }, null, -1)),
    Sm = Aa(() => e("input", {
        type: "password",
        class: "is-hidden"
    }, null, -1)),
    Im = {
        class: "red"
    },
    Nm = {
        class: "forgetPwd"
    },
    Am = {
        class: "btnD"
    },
    Rm = ie({
        __name: "index",
        setup(b) {
            const {
                setWithdrawal: s,
                setWithdrawalsrule: c,
                setWithdrawalTypeslist: r
            } = nt(), {
                t: o
            } = be(), {
                setLoading: l
            } = He(), {
                getUserInfo: d,
                getRegisterState: h,
                $state: w
            } = Ot(), u = ye(), _ = at(), $ = C(), v = C(), A = C(), g = C({}), U = C(), B = C(0), T = C(!1), m = C(!1), k = V(() => w.isOpenForgetPasswordSMSState);

            function P() {
                u.back()
            }
            const I = Wt(),
                O = V(() => I.userInfo);

            function q() {
                const Y = {
                    1: "Withdraw-BankCard",
                    3: "Withdraw-USDT",
                    10: "Withdraw-USDT",
                    5: "Withdraw-PIX"
                };
                u.replace({
                    name: Y[y.type]
                })
            }
            const R = V(() => {
                    var ce, se;
                    if ([4, 20].includes(y.type) && y.amount > 0) return !(Q.value.withdrawalslist.length == 0 || y.bid == 0 || y.amount < 1 || y.amount > Q.value.withdrawalsrule.canWithdrawAmount);
                    const K = [1, 3, 5, 6, 8, 10];
                    return !(y.bid == 0 || !K.includes(y.type) || y.amount < 1 || (ce = $.value) != null && ce.showValidate || (se = $.value) != null && se.showValidateUB || y.type == 1 && y.amount.toString().indexOf(".") != -1)
                }),
                Z = C(!1),
                M = C(!1),
                j = C(!1),
                N = C(!1),
                y = Ne({
                    amount: 0,
                    pwd: "",
                    type: 0,
                    bid: 0,
                    name: ""
                });
            je(y, Y => {
                _.setWithdrawal({ ...Y
                }), s(Y)
            });
            const E = C(null),
                ee = C("");
            async function pe() {
                E.value && clearTimeout(E.value), E.value = setTimeout(async () => {
                    if (O.value.isAllowWithdraw == 0) {
                        m.value = !0, j.value = !1;
                        return
                    }
                    let Y = Q.value.withdrawalsrule;
                    y.amount = Number(y.amount);
                    var K = /^\d+(\.\d{1,2})?$/;
                    if (!K.test(y.amount.toString())) {
                        _e(o("showDialogTip1")), j.value = !1;
                        return
                    }
                    if (y.amount > Y.maxPrice || y.amount < Y.minPrice) {
                        _e(o("wordWithdrawal", [ve(Y.minPrice), ve(Y.maxPrice)])), j.value = !1;
                        return
                    }
                    l(!0);
                    const ce = await G(Hn(y));
                    ce && (ce.code !== 0 && ce.msgCode == 220 ? (N.value = !0, setTimeout(function() {
                        N.value = !1
                    }, 3e3)) : ce.code !== 0 && ce.msgCode == 280 ? setTimeout(function() {
                        y.type == 20 && (ce != null && ce.data) && (localStorage.setItem("c2cOrderNo", ce == null ? void 0 : ce.data), u.push({
                            name: "Withdraw-C2cDetail",
                            query: {
                                order: ce == null ? void 0 : ce.data
                            }
                        }))
                    }, 2e3) : y.type == 20 ? (M.value = !0, ee.value = ce == null ? void 0 : ce.data) : Z.value = !0), j.value = !1, l(!1)
                }, 500)
            }
            const G = async Y => await Y.then(ce => ce && ce.code !== 0 ? [220].includes(ce.msgCode) ? ce : [280].includes(ce.msgCode) ? (Dt(ce), ce) : (Dt(ce), null) : ce).catch(ce => (Dt(ce), null));
            async function W(Y) {
                Y == "c2c" ? (M.value = !1, y.type == 20 && ee.value && (localStorage.setItem("c2cOrderNo", ee.value), u.push({
                    name: "Withdraw-C2cDetail",
                    query: {
                        order: ee.value
                    }
                }))) : (Z.value = !1, await u.push({
                    name: "WithdrawHistory"
                }))
            }

            function L() {
                var Y;
                y.type == 21 ? (Y = v.value) != null && Y.isActiveC && (y.pwd = "", j.value = !0) : R.value && (y.pwd = "", j.value = !0)
            }
            const we = C([]);
            async function le() {
                var K;
                l(!0);
                const Y = await ne(wa());
                Y && (we.value = (Y == null ? void 0 : Y.data.withdrawlist) || [], r(we.value), _.getWithdrawal.type && we.value.find(ce => ce.withdrawID == _.getWithdrawal.type) ? y.type = _.getWithdrawal.type : we.value.find(ce => ce.withdrawID == _.getWithdrawal.type) || (y.type = 0), y.type == 0 && (y.type = we.value[0].withdrawID, X.value = we.value[0].name, y.type == 20 && (T.value = !0)), y.type == 4 && (X.value = ((K = we.value.find(ce => ce.withdrawID == 4)) == null ? void 0 : K.name) || "")), l(!1)
            }
            const X = C("");
            async function oe(Y) {
                y.type != Y.withdrawID && (Y.withdrawID == 20 && (T.value = !0), y.type = Y.withdrawID, g.value = {}, await Ce(), X.value = Y.name || "", y.bid = Q.value.withdrawalslist.length > 0 ? Q.value.withdrawalslist[0].bid : 0, y.amount = 0, $.value && ($.value.usdtCount = 0))
            }
            const Q = C({
                withdrawalslist: [],
                withdrawalsrule: {}
            });

            function Oe() {
                g.value = Q.value.withdrawalslist.find(Y => Y.bid == y.bid), g.value || (y.bid = Q.value.withdrawalslist[0].bid, g.value = Q.value.withdrawalslist[0])
            }
            async function Ce() {
                var K, ce, se;
                l(!0);
                const Y = await ne(ot({
                    withdrawid: y.type
                }));
                if (l(!1), Y) {
                    if (Q.value = Y.data, c((K = Y.data) == null ? void 0 : K.withdrawalsrule), Y.data.lastBandCarkName ? localStorage.setItem("lastBandCarkName", (ce = Y.data) == null ? void 0 : ce.lastBandCarkName) : localStorage.removeItem("lastBandCarkName"), !Q.value.withdrawalslist.length) return;
                    y.bid == 0 && (y.bid = ((se = Q.value.withdrawalslist[0]) == null ? void 0 : se.bid) || 0), Oe(), _.setWithdrawalslist(Y.data.withdrawalslist)
                }
            }
            ge(async () => {
                var Y, K;
                _.getWithdrawal.type && (y.type = _.getWithdrawal.type), y.bid = Number(((K = (Y = u.currentRoute.value) == null ? void 0 : Y.query) == null ? void 0 : K.bid) || 0) || 0, d({
                    signature: I.token
                }), h(), await le(), await Ce(), await Be()
            });

            function Pe() {
                u.push({
                    name: "CustomerService"
                })
            }

            function qe() {
                u.push({
                    name: "rpwd"
                })
            }
            const Be = async () => {
                    const Y = await ne(En({
                            key: "C2CWithdrawRewardRate"
                        })),
                        K = (Y == null ? void 0 : Y.data.value1) || 0;
                    B.value = Number(K)
                },
                Me = Y => {
                    y.amount = Y
                };
            return (Y, K) => {
                var et, St;
                const ce = x("NavBar"),
                    se = x("van-icon"),
                    me = x("van-dialog"),
                    Ve = x("van-popup"),
                    Ge = ze("lazy");
                return n(), i("div", tm, [S(ce, {
                    title: Y.$t("withdraw"),
                    "left-arrow": "",
                    onClickLeft: P,
                    onClickRight: K[0] || (K[0] = Te => a(u).push({
                        name: "WithdrawHistory"
                    }))
                }, {
                    right: J(() => [e("span", null, t(Y.$t("withdrawRecords")), 1)]),
                    _: 1
                }, 8, ["title"]), e("div", am, [f("资产余额"), S(Kv, {
                    data_NewSetWithdrawal: y,
                    withdrawalsrule: Q.value.withdrawalsrule
                }, null, 8, ["data_NewSetWithdrawal", "withdrawalsrule"]), f("提款方式"), S(v_, {
                    data_NewSetWithdrawal: y,
                    withdrawalTypeslist: we.value,
                    c2cAward: B.value,
                    onOnSelectWithdrawalType: oe
                }, null, 8, ["data_NewSetWithdrawal", "withdrawalTypeslist", "c2cAward"]), f(" c2cupi "), y.type == 20 ? (n(), i(de, {
                    key: 0
                }, [S(qp, {
                    withdrawalslist: Q.value.withdrawalslist,
                    bid: y.bid
                }, null, 8, ["withdrawalslist", "bid"]), S(Pp, {
                    c2crule: Q.value.withdrawalsrule,
                    c2cAward: B.value,
                    onSetc2cAmount: Me,
                    c2cName: ((et = we.value.find(Te => Te.withdrawID == 20)) == null ? void 0 : et.name) || ""
                }, {
                    default: J(() => [e("div", nm, [e("button", {
                        class: ae(["recycleBtn", {
                            active: R.value
                        }]),
                        onClick: L
                    }, t(Y.$t("withdraw")), 3)])]),
                    _: 1
                }, 8, ["c2crule", "c2cAward", "c2cName"]), S(rh, {
                    ref_key: "c2cRecordRef",
                    ref: U
                }, null, 512)], 64)) : y.type == 21 ? (n(), Ie(Kh, {
                    key: 1,
                    onOnShowPwdD: K[1] || (K[1] = Te => L()),
                    ref_key: "ArCardRef",
                    ref: v
                }, null, 512)) : y.type == 4 ? (n(), i(de, {
                    key: 2
                }, [S($h, {
                    withdrawalslist: Q.value.withdrawalslist,
                    bid: y.bid,
                    name: X.value
                }, null, 8, ["withdrawalslist", "bid", "name"]), S(wh, {
                    rule: Q.value.withdrawalsrule,
                    award: B.value,
                    onSetc2cAmount: Me,
                    name: ((St = we.value.find(Te => Te.withdrawID == 20)) == null ? void 0 : St.name) || ""
                }, {
                    default: J(() => [e("div", sm, [e("button", {
                        class: ae(["recycleBtn", {
                            active: R.value
                        }]),
                        onClick: L
                    }, t(Y.$t("withdraw")), 3)])]),
                    _: 1
                }, 8, ["rule", "award", "name"]), f("提现记录"), S(xt, {
                    ref_key: "withdrawHistory",
                    ref: A
                }, null, 512)], 64)) : (n(), i(de, {
                    key: 3
                }, [f("银行卡模块"), Q.value.withdrawalslist.length ? (n(), i("div", {
                    key: 0,
                    class: "bankInfo",
                    onClick: K[2] || (K[2] = Te => q())
                }, [
                    [1, 5].includes(y.type) ? (n(), i("div", {
                        key: 0,
                        class: ae(["bankInfoItem", `type${y.type}`])
                    }, [e("div", null, [e("img", {
                        src: a(F)("wallet/withdrawType", `${y.type}`)
                    }, null, 8, lm), e("span", null, t(g.value.bankName), 1)]), e("div", null, [e("span", null, t(g.value.beneficiaryName), 1), e("span", null, t(g.value.accountNo), 1)]), S(se, {
                        name: "arrow"
                    })], 2)) : f("v-if", !0), [3, 10].includes(y.type) ? (n(), i("div", om, [e("div", null, [e("img", {
                        src: a(F)("wallet/withdrawType", `${y.type}`)
                    }, null, 8, im), e("span", null, t(g.value.bankName), 1)]), e("div", null, [e("span", null, t(g.value.accountNo), 1), S(se, {
                        name: "arrow"
                    })]), e("div", null, [e("span", null, t(g.value.usdtRemarkName), 1)])])) : f("v-if", !0), [6, 8].includes(y.type) ? (n(), i("div", rm, [e("div", null, [e("img", {
                        src: a(F)("wallet/withdrawType", `${y.type}`)
                    }, null, 8, cm), y.type == 6 ? (n(), i("span", dm, t(g.value.bankName), 1)) : f("v-if", !0), y.type == 8 ? (n(), i("span", um, t(g.value.walletName), 1)) : f("v-if", !0)]), e("div", null, [y.type == 6 ? (n(), i("span", vm, t(g.value.accountNo), 1)) : f("v-if", !0), y.type == 8 ? (n(), i("span", _m, t(g.value.mobileNO), 1)) : f("v-if", !0)])])) : f("v-if", !0)
                ])) : f("v-if", !0), he(S(Lt, {
                    type: y.type,
                    isShowhintTextO: !0
                }, null, 8, ["type"]), [
                    [vt, [1, 3, 6, 8, 5, 10].includes(y.type) && Q.value.withdrawalslist.length == 0]
                ]), f("输入区"), S(E_, {
                    data_NewSetWithdrawal: y,
                    withdrawalsrule: Q.value.withdrawalsrule,
                    ref_key: "withdrawField",
                    ref: $
                }, null, 8, ["data_NewSetWithdrawal", "withdrawalsrule"]), e("div", pm, [e("button", {
                    class: ae(["recycleBtn", {
                        active: R.value
                    }]),
                    onClick: L
                }, t(Y.$t("withdraw")), 3)]), f("提现说明组件"), S(Mt, {
                    withdrawType: y.type,
                    withdrawalsrule: Q.value.withdrawalsrule
                }, null, 8, ["withdrawType", "withdrawalsrule"]), f("提现记录"), S(xt, {
                    ref_key: "withdrawHistory",
                    ref: A
                }, null, 512)], 64))]), f("提现成功弹窗"), S(me, {
                    show: Z.value,
                    "onUpdate:show": K[4] || (K[4] = Te => Z.value = Te),
                    "show-confirm-button": !1,
                    "z-index": "100"
                }, {
                    default: J(() => [he(e("img", hm, null, 512), [
                        [Ge, a(F)("public", "succeed")]
                    ]), e("div", mm, t(Y.$t("tipWithdrawalApplicationSuccess")), 1), e("div", fm, [e("span", null, t(Y.$t("tipWithdrawWillBeCompletedIn2Hours")), 1), e("span", null, t(Y.$t("tipPlaWaitPaciently")) + "...", 1)]), e("div", {
                        class: "van-dialog__content-btn",
                        onClick: K[3] || (K[3] = Te => W())
                    }, t(Y.$t("confirm")), 1)]),
                    _: 1
                }, 8, ["show"]), S(Fe, {
                    class: "c2c",
                    show: M.value,
                    "onUpdate:show": K[5] || (K[5] = Te => M.value = Te),
                    showCancelBtn: !1,
                    onConfirm: K[6] || (K[6] = Te => W("c2c")),
                    title: Y.$t("withdrawTip2")
                }, {
                    header: J(() => [he(e("img", wm, null, 512), [
                        [Ge, a(F)("public", "succeed")]
                    ])]),
                    content: J(() => [e("div", ym, [e("h1", {
                        innerHTML: Y.$t("withdrawTip3")
                    }, null, 8, gm), e("p", {
                        innerHTML: Y.$t("withdrawTip4")
                    }, null, 8, $m)])]),
                    _: 1
                }, 8, ["show", "title"]), f("输入密码弹窗"), j.value ? (n(), Ie(Ve, {
                    key: 0,
                    show: j.value,
                    "onUpdate:show": K[9] || (K[9] = Te => j.value = Te),
                    position: "bottom",
                    closeable: "",
                    round: ""
                }, {
                    default: J(() => [e("div", bm, [e("div", km, [e("img", {
                        src: a(F)("wallet", "safety"),
                        alt: ""
                    }, null, 8, Cm), e("h1", null, t(Y.$t("withdrawDialogDesc1")), 1)]), Tm, Sm, S(rs, {
                        value: y.pwd,
                        "onUpdate:value": K[7] || (K[7] = Te => y.pwd = Te),
                        label: Y.$t("withdrawDialogPh"),
                        maxlength: 32
                    }, null, 8, ["value", "label"]), e("span", Im, t(Y.$t("withdrawDialogDesc3")), 1), e("div", Nm, [k.value ? (n(), i("span", {
                        key: 0,
                        onClick: qe
                    }, t(Y.$t("withdrawDialogDesc4")), 1)) : f("v-if", !0), e("div", {
                        class: "red",
                        onClick: Pe
                    }, t(Y.$t("withdrawDialogDesc5")), 1)]), e("div", Am, [e("button", {
                        onClick: K[8] || (K[8] = () => j.value = !1)
                    }, t(Y.$t("withdrawDialogDesc6")), 1), e("button", {
                        onClick: pe
                    }, t(Y.$t("withdrawDialogDesc7")), 1)])])]),
                    _: 1
                }, 8, ["show"])) : f("v-if", !0), f("不在提现时间内提示"), S(me, {
                    show: N.value,
                    "onUpdate:show": K[10] || (K[10] = Te => N.value = Te),
                    "show-confirm-button": !1,
                    "z-index": "100"
                }, {
                    default: J(() => [S(em)]),
                    _: 1
                }, 8, ["show"]), S(me, {
                    show: T.value,
                    "onUpdate:show": K[12] || (K[12] = Te => T.value = Te),
                    showConfirmButton: !1,
                    class: "c2cconfirm",
                    width: "100%"
                }, {
                    default: J(() => [T.value ? (n(), Ie(bp, {
                        key: 0,
                        showC2c: T.value,
                        "onUpdate:showC2c": K[11] || (K[11] = Te => T.value = Te)
                    }, null, 8, ["showC2c"])) : f("v-if", !0)]),
                    _: 1
                }, 8, ["show"]), S(Fe, {
                    show: m.value,
                    "onUpdate:show": K[13] || (K[13] = Te => m.value = Te),
                    showCancelBtn: !1,
                    showCloseIcon: !0,
                    clickOutSide: !0,
                    onConfirm: K[14] || (K[14] = () => m.value = !1)
                }, {
                    content: J(() => [e("h1", null, t(Y.$t("withdrwsTip1")), 1)]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const Dm = re(Rm, [
        ["__scopeId", "data-v-80a607a5"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/Withdraw/index.vue"]
    ]),
    db = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Dm
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Um = {
        class: "rechargeh__container"
    },
    Bm = {
        class: "rechargeh__container_header"
    },
    Wm = {
        class: "tabDiv"
    },
    Om = ["src"],
    Pm = ["src"],
    Lm = {
        key: 0,
        class: "c2cType"
    },
    Mm = {
        class: "ar"
    },
    Vm = {
        class: "ar-searchbar"
    },
    qm = {
        class: "rechargeh__container-content__item-header ar-1px-b"
    },
    jm = {
        class: "rechargeh__container-content__item-body"
    },
    Em = ["onClick", "src"],
    Hm = ["onUpdate:modelValue"],
    xm = ie({
        __name: "index",
        setup(b) {
            const {
                t: s
            } = be(), {
                setLoading: c
            } = He(), r = C(!1), o = ye();

            function l() {
                o.back()
            }
            const d = C([]),
                h = C(!1),
                w = C(""),
                u = C(!1),
                _ = async ({
                    selectedOptions: M
                }) => {
                    var j;
                    h.value = !1, w.value = M[0].key, R.state = M[0].value, (j = q.value) == null || j.resetRefresh()
                },
                $ = C(la),
                v = C();
            let A = C([]);
            const g = C(!1),
                U = C(-1),
                B = C(null),
                T = je(U, (M, j) => {
                    w.value = De.RechargeState[0].key, R.state = De.RechargeState[0].value, R.type = A.value[M].withdrawID, R.type == 20 ? (v.value = [{
                        key: s("withdrawStatem1"),
                        value: -1
                    }, {
                        key: s("c2cState0"),
                        value: 0
                    }, {
                        key: s("c2cState1"),
                        value: 1
                    }, {
                        key: s("c2cState2"),
                        value: 2
                    }, {
                        key: s("c2cState3"),
                        value: 3
                    }, {
                        key: s("c2cState4"),
                        value: 4
                    }, {
                        key: s("c2cTip9"),
                        value: 5
                    }, {
                        key: s("c2cState6"),
                        value: 6
                    }, {
                        key: s("c2cState7"),
                        value: 7
                    }, {
                        key: s("c2cState8"),
                        value: 8
                    }, {
                        key: s("c2cState9"),
                        value: 9
                    }], w.value = De.C2cState[0].key, R.state = De.C2cState[0].value, R.category = -1, $.value = fa, g.value = !0, R.type = -1) : (clearInterval(B.value), v.value = De.WithdrawState, delete R.category, g.value = !1, $.value = la), cn(() => {
                        var N;
                        (N = q.value) == null || N.resetRefresh()
                    })
                });

            function m() {
                B.value = setInterval(() => {
                    var M;
                    (M = q.value) == null || M.resetRefresh()
                }, 1e4)
            }
            je(() => d.value, M => {
                g.value && M.findIndex(j => j.state === 11 || j.state === 12) != -1 ? (clearInterval(B.value), m()) : clearInterval(B.value)
            });
            async function k() {
                c(!0);
                const M = await ne(wa());
                if (M) {
                    let j = M == null ? void 0 : M.data.withdrawlist;
                    j.unshift({
                        withdrawID: -1,
                        name: s("all"),
                        isAdd: 0
                    }), A.value = j
                }
                c(!1)
            }
            ge(async () => {
                setTimeout(() => {
                    w.value = s("all"), v.value = De.WithdrawState
                }), await k()
            }), $t(() => {
                T()
            }), lt(() => {
                clearInterval(B.value)
            });

            function P() {
                h.value = !0, u.value = !0
            }
            const I = C();
            async function O() {
                var j;
                let M = I.value.endDateValue !== "" ? `${I.value.endDateValue} 23:59:59` : "";
                R.startDate = Ut(I.value.startDateValue).format("YYYY-MM-DD HH:mm:ss"), R.endDate = Ut(M).format("YYYY-MM-DD HH:mm:ss"), (j = q.value) == null || j.resetRefresh()
            }
            const q = C(),
                R = Ne({
                    startDate: "",
                    endDate: "",
                    state: De.RechargeState[0].value,
                    type: -1
                }),
                Z = M => {
                    var j;
                    R.type = M, M == 1 ? v.value = [{
                        key: s("withdrawStatem1"),
                        value: -1
                    }, {
                        key: s("c2cState0"),
                        value: 0
                    }, {
                        key: s("c2cState1"),
                        value: 1
                    }, {
                        key: s("c2cState2"),
                        value: 2
                    }, {
                        key: s("c2cState3"),
                        value: 3
                    }, {
                        key: s("c2cState8"),
                        value: 8
                    }, {
                        key: s("c2cState9"),
                        value: 9
                    }] : v.value = [{
                        key: s("withdrawStatem1"),
                        value: -1
                    }, {
                        key: s("c2cState4"),
                        value: 4
                    }, {
                        key: s("c2cTip9"),
                        value: 5
                    }, {
                        key: s("c2cState6"),
                        value: 6
                    }, {
                        key: s("c2cState7"),
                        value: 7
                    }], w.value = De.C2cState[0].key, R.state = De.C2cState[0].value, (j = q.value) == null || j.resetRefresh()
                };
            return (M, j) => {
                const N = x("NavBar"),
                    y = x("van-tab"),
                    E = x("van-tabs"),
                    ee = x("ArSelect"),
                    pe = x("van-picker"),
                    G = x("van-popup");
                return n(), i("div", Um, [S(N, {
                    class: "white",
                    title: M.$t("withdrawRecords"),
                    "left-arrow": "",
                    onClickLeft: l
                }, null, 8, ["title"]), e("div", Bm, [S(E, {
                    class: "onlineGames__container-tabBar",
                    active: U.value,
                    "onUpdate:active": j[0] || (j[0] = W => U.value = W),
                    type: "card",
                    ref: "tabsRef",
                    ellipsis: "",
                    "swipe-threshold": 3
                }, {
                    default: J(() => [(n(!0), i(de, null, $e(a(A), (W, L) => (n(), Ie(y, {
                        key: L
                    }, dn({
                        _: 2
                    }, [W.withdrawID === -1 ? {
                        name: "title",
                        fn: J(() => [e("div", Wm, [U.value == L ? (n(), i("img", {
                            key: 0,
                            src: a(ue)("wallet/withdraw/withdrawHistory", "all_NS")
                        }, null, 8, Om)) : (n(), i("img", {
                            key: 1,
                            src: a(F)("wallet", "all")
                        }, null, 8, Pm)), H(" " + t(W.name), 1)])]),
                        key: "0"
                    } : {
                        name: "title",
                        fn: J(() => [e("div", {
                            class: "tabDiv"
                        }, [U.value == L ? (n(), i("img", {
                            key: 0,
                            src: W.withAfterImgUrl
                        }, null, 8, ["src"])) : (n(), i("img", {
                            key: 1,
                            src: W.withBeforeImgUrl
                        }, null, 8, ["src"])), H(" " + t(W.name), 1)])]),
                        key: "1"
                    }]), 1024))), 128))]),
                    _: 1
                }, 8, ["active"]), g.value ? (n(), i("div", Lm, [e("div", {
                    class: ae({
                        active: R.type == 1
                    }),
                    onClick: j[1] || (j[1] = W => Z(1))
                }, t(M.$t("inTransaction")), 3), e("div", {
                    class: ae({
                        active: R.type == 2
                    }),
                    onClick: j[2] || (j[2] = W => Z(2))
                }, t(M.$t("completed")), 3)])) : f("v-if", !0), e("div", Mm, [e("div", Vm, [S(ee, {
                    onClickSelect: P,
                    selectName: w.value
                }, null, 8, ["selectName"]), f("日期选择组件"), S(ga, {
                    ref_key: "calendar",
                    ref: I,
                    onConfirm: O
                }, null, 512)])])]), S(G, {
                    show: h.value,
                    "onUpdate:show": j[4] || (j[4] = W => h.value = W),
                    round: "",
                    position: "bottom"
                }, {
                    default: J(() => [S(pe, {
                        "columns-field-names": {
                            text: "key",
                            value: "value",
                            children: "children"
                        },
                        columns: v.value,
                        onCancel: j[3] || (j[3] = W => h.value = !1),
                        onConfirm: _
                    }, null, 8, ["columns"])]),
                    _: 1
                }, 8, ["show"]), f(" 提现记录 "), S(xn, {
                    list: d.value,
                    "onUpdate:list": j[5] || (j[5] = W => d.value = W),
                    "page-query": R,
                    "onUpdate:pageQuery": j[6] || (j[6] = W => R = W),
                    api: $.value,
                    distance: 100,
                    ref_key: "listRef",
                    ref: q,
                    "is-auto-load": r.value
                }, {
                    content: J(() => [e("div", {
                        class: ae(["rechargeh__container-content", {
                            isC2c: g.value
                        }])
                    }, [g.value ? (n(), Ie(Na, {
                        key: 0,
                        list: d.value
                    }, null, 8, ["list"])) : (n(!0), i(de, {
                        key: 1
                    }, $e(d.value, (W, L) => (n(), i("div", {
                        class: "rechargeh__container-content__item",
                        key: L
                    }, [f(' <div class="rechargeh__container-content__item-header ar-1px-b" @click="onToDetail(item.state)"> '), e("div", qm, [e("span", null, t(M.$t("withdraw")), 1), f(" <span>{{ item.withdrawName }}</span> "), e("span", {
                        class: ae({
                            stateR: W.state === 0,
                            stateG: W.state === 1
                        })
                    }, [H(t(a(Xe)(a(De).WithdrawState, W.state)) + " ", 1), f(' <van-icon name="arrow" /> ')], 2)]), e("div", jm, [e("div", null, [e("span", null, t(M.$t("amount")), 1), e("span", null, t(a(ve)(W.price)), 1)]), e("div", null, [e("span", null, t(M.$t("type")), 1), e("span", null, t(W.withdrawName), 1)]), e("div", null, [e("span", null, t(M.$t("time")), 1), e("span", null, t(W.addTime), 1)]), e("div", null, [e("span", null, t(M.$t("orderNo")), 1), e("span", null, t(W.withdrawNumber), 1), e("img", {
                        onClick: we => a(ke)(W.withdrawNumber.toString()),
                        src: a(F)("public", "copy")
                    }, null, 8, Em)]), e("div", null, [e("span", null, t(M.$t("remarksContent")), 1)]), e("div", null, [f(" <span>{{ $t('remarksContent') }}</span> "), he(e("textarea", {
                        class: "textarea",
                        name: "remark",
                        cols: "30",
                        rows: "10",
                        readonly: !0,
                        "onUpdate:modelValue": we => W.remark = we
                    }, null, 8, Hm), [
                        [vt, (W == null ? void 0 : W.remark) && (W == null ? void 0 : W.remark.trim()) != ""],
                        [Se, W.remark]
                    ])])])]))), 128))], 2)]),
                    _: 1
                }, 8, ["list", "page-query", "api", "is-auto-load"])])
            }
        }
    });
const Fm = re(xm, [
        ["__scopeId", "data-v-e4760c44"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/WithdrawHistory/index.vue"]
    ]),
    ub = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Fm
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    zm = {
        key: 0
    },
    Km = {
        class: "info"
    },
    Gm = {
        class: "state_txt"
    },
    Qm = {
        class: "tip"
    },
    Zm = ["src"],
    Ym = {
        class: "btn_group"
    },
    Xm = ["src"],
    Jm = ["src"],
    e1 = ie({
        __name: "RechargeDetailHeader",
        props: {
            state: {
                type: Number,
                required: !0
            },
            info: {
                type: null,
                required: !0
            }
        },
        emits: ["onClickRight", "appeal", "appealAdmin"],
        setup(b, {
            emit: s
        }) {
            const c = b,
                {
                    t: r
                } = be(),
                o = V(() => d.value.find(u => u.state === c.state)),
                l = V(() => {
                    var u;
                    return (u = d.value.find(_ => _.state === c.state)) == null ? void 0 : u.state
                }),
                d = C([{
                    state: 1,
                    text: r("rechargeState0"),
                    tip: r("rdhTip1"),
                    tip2: r("tipPlaWaitPaciently"),
                    icon: ue("wallet/recharge", "wait"),
                    className: "wait"
                }, {
                    state: 4,
                    text: r("completed"),
                    tip: r("c2cTip7"),
                    tip2: r("c2cTip8"),
                    icon: ue("wallet/recharge", "success"),
                    className: "success"
                }, {
                    state: 5,
                    text: r("rechargeState4"),
                    tip: r("rdhTip2"),
                    tip2: r("rdhTip3"),
                    icon: ue("wallet/recharge", "fail"),
                    className: "fail"
                }, {
                    state: 7,
                    text: r("rechargeState1"),
                    tip: r("rdhTip4"),
                    tip2: r("rdhTip5"),
                    icon: ue("wallet/recharge", "timeout"),
                    className: "timeout"
                }, {
                    state: 6,
                    text: r("cancelled"),
                    tip: "",
                    icon: ue("wallet/recharge", "cancel"),
                    className: "cancel"
                }, {
                    state: 3,
                    text: r("c2cState3"),
                    tip: r("c2cTip5"),
                    tip2: r("c2cTip6"),
                    icon: ue("wallet/recharge", "appeal"),
                    className: "appeal"
                }, {
                    state: 8,
                    text: r("c2cState14"),
                    tip: r("amountError1"),
                    tip2: r("c2cTip33"),
                    icon: ue("wallet/recharge", "amount_error"),
                    className: "appeal"
                }]),
                h = () => {
                    s("onClickRight")
                },
                w = () => {
                    Fn.go(-1)
                };
            return je(() => c.info, u => {
                c.state === 6 && (d.value[4].tip = u == null ? void 0 : u.cancelReason)
            }, {
                immediate: !0
            }), (u, _) => {
                var v, A, g, U, B, T, m, k, P;
                const $ = x("NavBar");
                return n(), i("div", {
                    class: ae(["upi_detail_header", (v = o.value) == null ? void 0 : v.className])
                }, [S($, {
                    title: "",
                    "left-arrow": "",
                    onClickLeft: w,
                    onClickRight: h
                }, {
                    right: J(() => [d.value === 3 ? (n(), i("div", zm, t(u.$t("concelOrder")), 1)) : f("v-if", !0)]),
                    _: 1
                }), e("div", Km, [e("div", Gm, [H(t((A = o.value) == null ? void 0 : A.text) + " ", 1), ((g = u.info) == null ? void 0 : g.state) === 1 ? (n(), Ie(Sa, {
                    "start-time": (U = u.info) == null ? void 0 : U.endTime,
                    "end-time": (B = u.info) == null ? void 0 : B.serviceTime,
                    "class-name": "state_txt",
                    key: (T = u.info) == null ? void 0 : T.id
                }, null, 8, ["start-time", "end-time"])) : f("v-if", !0)]), e("div", Qm, [e("div", null, t((m = o.value) == null ? void 0 : m.tip), 1), e("div", null, t((k = o.value) == null ? void 0 : k.tip2), 1)])]), e("img", {
                    src: (P = o.value) == null ? void 0 : P.icon,
                    class: "state_img",
                    alt: ""
                }, null, 8, Zm), e("div", Ym, [l.value === 7 ? (n(), i("div", {
                    key: 0,
                    class: "appeal",
                    onClick: _[0] || (_[0] = () => {
                        s("appeal")
                    })
                }, [e("img", {
                    src: a(ue)("wallet/recharge/detail", "appeal"),
                    alt: ""
                }, null, 8, Xm), H(" " + t(u.$t("appeal")), 1)])) : f("v-if", !0), l.value === 3 ? (n(), i("div", {
                    key: 1,
                    class: "appeal_admin",
                    onClick: _[1] || (_[1] = () => {
                        s("appealAdmin")
                    })
                }, t(u.$t("AppealsAdmin")), 1)) : f("v-if", !0), l.value === 7 || l.value === 3 || l.value === 1 ? (n(), i("div", {
                    key: 2,
                    class: "cancel",
                    onClick: _[2] || (_[2] = () => {
                        s("onClickRight")
                    })
                }, [e("img", {
                    src: a(ue)("common", "close"),
                    alt: ""
                }, null, 8, Jm), H(" " + t(u.$t("concelOrder")), 1)])) : f("v-if", !0)])], 2)
            }
        }
    });
const t1 = re(e1, [
        ["__scopeId", "data-v-fb8ab76f"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/Recharge/RechargeDetailHeader.vue"]
    ]),
    Vt = b => (Ae("data-v-f3187262"), b = b(), Re(), b),
    a1 = {
        key: 0,
        style: {
            padding: "20px 16px 0"
        }
    },
    n1 = {
        class: "order_info"
    },
    s1 = {
        class: "title"
    },
    l1 = ["src"],
    o1 = Vt(() => e("div", {
        class: "dir"
    }, null, -1)),
    i1 = {
        class: "order_info_box"
    },
    r1 = {
        class: "order_info_item"
    },
    c1 = {
        class: "title"
    },
    d1 = {
        class: "amount"
    },
    u1 = {
        class: "order_info_item"
    },
    v1 = {
        class: "title"
    },
    _1 = {
        class: "order_info_item"
    },
    p1 = {
        class: "title"
    },
    h1 = {
        class: "order_info_item"
    },
    m1 = {
        class: "title"
    },
    f1 = {
        class: "time"
    },
    w1 = {
        key: 0,
        class: "order_info_item"
    },
    y1 = {
        class: "title"
    },
    g1 = {
        class: "time"
    },
    $1 = Vt(() => e("div", {
        class: "divider"
    }, null, -1)),
    b1 = {
        class: "order_info_box"
    },
    k1 = {
        class: "order_info_item"
    },
    C1 = Vt(() => e("div", {
        class: "title"
    }, "UTR", -1)),
    T1 = {
        class: "order_num"
    },
    S1 = ["src"],
    I1 = {
        class: "order_info_item"
    },
    N1 = {
        class: "title"
    },
    A1 = {
        class: "order_num"
    },
    R1 = ["src"],
    D1 = {
        class: "order_info_item"
    },
    U1 = {
        class: "title"
    },
    B1 = {
        class: "time"
    },
    W1 = {
        class: "upi_info"
    },
    O1 = {
        class: "upi_title"
    },
    P1 = {
        class: "order_info_box"
    },
    L1 = {
        class: "order_info_item"
    },
    M1 = Vt(() => e("div", {
        class: "title"
    }, "UPI", -1)),
    V1 = {
        class: "order_num"
    },
    q1 = ["src"],
    j1 = {
        key: 1,
        class: "upi_info"
    },
    E1 = {
        class: "upi_title"
    },
    H1 = ["src"],
    x1 = {
        key: 2
    },
    F1 = {
        class: "upi_info"
    },
    z1 = {
        class: "upi_title tit_img"
    },
    K1 = ["src", "onClick"],
    G1 = {
        key: 0,
        class: "upi_info"
    },
    Q1 = {
        class: "upi_title tit_video"
    },
    Z1 = {
        style: {
            width: "100%"
        },
        controls: ""
    },
    Y1 = ["src"],
    X1 = ie({
        __name: "index",
        setup(b) {
            const s = ye(),
                c = C(3),
                r = C(),
                o = C(-1),
                l = C(),
                d = C(),
                h = We(),
                w = V(() => {
                    var m, k;
                    return !!((m = r.value) != null && m.isAppealCompleted || [4, 3, 7, 1].includes((k = r.value) == null ? void 0 : k.state))
                }),
                u = V(() => {
                    var T, m;
                    if ((T = r.value) != null && T.ossUrls) return h.getOSSUrl + "/" + JSON.parse(((m = r.value) == null ? void 0 : m.ossUrls) || "[]")[0].fileUrl || ""
                }),
                _ = V(() => {
                    var T, m;
                    return (T = r.value) != null && T.withdrawOssUrls ? JSON.parse((m = r.value) == null ? void 0 : m.withdrawOssUrls).filter(k => k.fileType === 1) : []
                }),
                $ = V(() => {
                    var T, m, k;
                    return (T = r.value) != null && T.withdrawOssUrls ? (k = JSON.parse((m = r.value) == null ? void 0 : m.withdrawOssUrls).filter(P => P.fileType === 2)[0]) == null ? void 0 : k.fileUrl : []
                }),
                v = async T => {
                    const m = await ne(zt({
                        orderId: T
                    }));
                    m && (r.value = m.data, l.value = m.data, o.value = m.data.state, r.value.state === 4 && (c.value = 4), r.value.state === 5 && r.value.isAppealCompleted && (c.value = 4), o.value !== 1 && d.value && clearInterval(d.value), (o.value === 3 || o.value === 7) && B())
                },
                A = () => {
                    var T;
                    s.push({
                        name: "CancelRecharge",
                        query: {
                            orderNo: (T = r.value) == null ? void 0 : T.id
                        }
                    })
                },
                g = async () => {
                    var T, m, k;
                    try {
                        await ne(zn({
                            orderId: (T = r.value) == null ? void 0 : T.id
                        })), await v((m = r.value) == null ? void 0 : m.id), gt({
                            message: "申诉成功",
                            type: "success"
                        }), U(), o.value = (k = r.value) == null ? void 0 : k.state
                    } catch {}
                },
                U = () => {
                    var T;
                    Tawk_API.toggle(), window.Tawk_API.setAttributes({
                        order: (T = r.value) == null ? void 0 : T.id,
                        store: "recharge"
                    }, function(m) {})
                },
                B = () => {
                    let T = "https://embed.tawk.to/6452138631ebfa0fe7fbb175/1hb0ug9qm";
                    if (!document.getElementById("tawk-chatjs")) {
                        let m = document.createElement("script");
                        m.id = "tawk-chatjs", m.async = !0, m.src = T, document.head.appendChild(m)
                    }
                };
            return ge(() => {
                o.value = Number(s.currentRoute.value.query.state);
                const T = Number(s.currentRoute.value.query.orderNo) || -1;
                v(T), o.value === 1 ? d.value = setInterval(() => {
                    v(T)
                }, 5e3) : clearInterval(d.value), (o.value === 3 || o.value === 7) && B()
            }), $t(() => {
                d.value && clearInterval(d.value)
            }), (T, m) => {
                var P, I, O, q, R, Z, M, j, N, y, E, ee, pe;
                const k = x("van-divider");
                return n(), i("div", null, [(n(), Ie(t1, {
                    state: o.value,
                    info: l.value,
                    onOnClickRight: A,
                    onAppeal: g,
                    onAppealAdmin: U,
                    key: o.value
                }, null, 8, ["state", "info"])), w.value ? (n(), i("div", a1, [S(Ca, {
                    state: c.value,
                    type: (P = r.value) != null && P.isAppealCompleted || ((I = r.value) == null ? void 0 : I.state) === 3 ? 2 : 1
                }, null, 8, ["state", "type"])])) : f("v-if", !0), e("div", n1, [e("div", s1, [e("img", {
                    src: a(F)("wallet", "upi"),
                    alt: ""
                }, null, 8, l1), e("span", null, "New UPI " + t(T.$t("recharge")), 1)]), o1, e("div", i1, [e("div", r1, [e("div", c1, t(T.$t("orderAmount")), 1), e("span", d1, t(a(ve)((O = r.value) == null ? void 0 : O.orderAmount)), 1)]), e("div", u1, [e("div", v1, t(T.$t("actualAmount")), 1), e("span", null, t(a(ve)((q = r.value) == null ? void 0 : q.finalAmount)), 1)]), e("div", _1, [e("div", p1, t(T.$t("award")), 1), e("span", null, t(a(ve)((R = r.value) == null ? void 0 : R.discountAmount)), 1)]), e("div", h1, [e("div", m1, t(T.$t("orderTime")), 1), e("span", f1, t((Z = r.value) == null ? void 0 : Z.createTime), 1)]), ((M = r.value) == null ? void 0 : M.state) === 8 ? (n(), i("div", w1, [e("div", y1, t(T.$t("c2cTip47")), 1), e("span", g1, t((j = r.value) == null ? void 0 : j.lastUpdateTime), 1)])) : f("v-if", !0)]), $1, e("div", b1, [e("div", k1, [C1, e("div", T1, [e("span", null, t((N = r.value) == null ? void 0 : N.transactionNo), 1), e("img", {
                    src: a(ue)("wallet/recharge", "copy1"),
                    alt: "",
                    onClick: m[0] || (m[0] = G => {
                        var W;
                        return a(ke)(((W = r.value) == null ? void 0 : W.transactionNo) || "-")
                    })
                }, null, 8, S1)])]), e("div", I1, [e("div", N1, t(T.$t("orderNo")), 1), e("div", A1, [e("span", null, t((y = r.value) == null ? void 0 : y.orderNo), 1), e("img", {
                    src: a(ue)("wallet/recharge", "copy1"),
                    alt: "",
                    onClick: m[1] || (m[1] = G => {
                        var W;
                        return a(ke)(((W = r.value) == null ? void 0 : W.orderNo) || "-")
                    })
                }, null, 8, R1)])]), e("div", D1, [e("div", U1, t(T.$t("PaymentTime")), 1), e("span", B1, t((E = r.value) == null ? void 0 : E.confrimBeginTime), 1)])])]), e("div", W1, [e("div", O1, t(T.$t("information")), 1), S(k), e("div", P1, [e("div", L1, [M1, e("div", V1, [e("span", null, t(((ee = r.value) == null ? void 0 : ee.sellerAccountNo) || "--"), 1), e("img", {
                    src: a(ue)("wallet/recharge", "copy1"),
                    alt: "",
                    onClick: m[2] || (m[2] = G => {
                        var W;
                        return a(ke)(((W = r.value) == null ? void 0 : W.sellerAccountNo) || "-")
                    })
                }, null, 8, q1)])])])]), ((pe = r.value) == null ? void 0 : pe.state) !== 8 ? (n(), i("div", j1, [e("div", E1, t(T.$t("c2cTip50")), 1), S(k), e("img", {
                    src: u.value,
                    class: "pay_img",
                    alt: "",
                    onClick: m[3] || (m[3] = () => {
                        a(Et)({
                            images: [u.value || ""],
                            closeable: !0
                        })
                    })
                }, null, 8, H1)])) : (n(), i("div", x1, [e("div", F1, [e("div", z1, t(T.$t("c2cTip48")), 1), S(k), (n(!0), i(de, null, $e(_.value, G => (n(), i("img", {
                    src: a(h).getOSSUrl + "/" + G.fileUrl,
                    class: "withdraw_img",
                    alt: "",
                    onClick: () => {
                        a(Et)({
                            images: [a(h).getOSSUrl + "/" + G.fileUrl],
                            closeable: !0
                        })
                    }
                }, null, 8, K1))), 256))]), $.value ? (n(), i("div", G1, [e("div", Q1, t(T.$t("c2cTip49")), 1), S(k), e("video", Z1, [e("source", {
                    src: a(h).getOSSUrl + "/" + $.value
                }, null, 8, Y1)])])) : f("v-if", !0)])), f(` <div class="btn_group">
			<div class="appeal" v-if="orderDetail?.state === 7" @click="handleAppeal">{{ $t('appeal') }}</div>
			<div class="appeal_admin" v-if="orderDetail?.state === 3" @click="handleAppealAdmin">{{ $t('AppealsAdmin') }}</div>
			<div
				class="cancel"
				@click="handleCancelOrder"
				v-if="orderDetail?.state === 7 || orderDetail?.state === 3 || orderDetail?.state === 1"
			>
				{{ $t('concelOrder') }}
			</div>
		</div> `)])
            }
        }
    });
const J1 = re(X1, [
        ["__scopeId", "data-v-f3187262"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/RechargeHistory/RechargeUpiDetail/index.vue"]
    ]),
    vb = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: J1
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ef = {
        class: "chooseBank__container"
    },
    tf = {
        class: "search"
    },
    af = ["placeholder"],
    nf = {
        class: "chooseBank__container-content"
    },
    sf = {
        class: "chooseBank__container-content-items"
    },
    lf = {
        class: "ar-1px-b"
    },
    of = ["onClick"],
    rf = {
        class: "chooseBank__container-content-items__title"
    },
    cf = ["src"],
    df = ie({
        __name: "index",
        emits: ["onSelectItem"],
        setup(b, {
            emit: s
        }) {
            const c = C("");
            let r = Ne([]),
                o = C([]);

            function l(h) {
                s("onSelectItem", h)
            }
            async function d() {
                const h = await ne(ht({
                    withdrawid: 1
                }));
                h && (r = h.data.banklist, o.value = r)
            }
            return je(c, () => {
                r.length > 0 && (o.value = r.filter(h => h.bankName.toLowerCase().indexOf(c.value.toLowerCase()) !== -1))
            }), ge(() => {
                d()
            }), (h, w) => {
                const u = x("van-icon");
                return n(), i("div", ef, [e("div", tf, [S(u, {
                    name: "search",
                    size: "35"
                }), he(e("input", {
                    placeholder: h.$t("phSearchBank"),
                    "onUpdate:modelValue": w[0] || (w[0] = _ => c.value = _)
                }, null, 8, af), [
                    [Se, c.value, void 0, {
                        trim: !0
                    }]
                ])]), e("div", nf, [e("div", sf, [e("div", lf, t(h.$t("selectBank")), 1), (n(!0), i(de, null, $e(a(o), _ => (n(), i("div", {
                    key: _.bankID,
                    class: "chooseBank__container-content-items__item ar-1px-b",
                    onClick: $ => l(_)
                }, [e("div", rf, [e("img", {
                    src: _.bankLogo,
                    alt: ""
                }, null, 8, cf), e("span", null, t(_.bankName), 1)])], 8, of ))), 128))])])])
            }
        }
    });
const Ra = re(df, [
        ["__scopeId", "data-v-c1c91417"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/Withdraw/ChooseBank/index.vue"]
    ]),
    _b = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ra
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    uf = {
        class: "addBankCard__container"
    },
    vf = {
        key: 0,
        class: "addBankCard__container-content"
    },
    _f = {
        class: "addBankCard__container-content-top"
    },
    pf = ["src"],
    hf = {
        class: "addBankCard__container-content-item"
    },
    mf = {
        class: "label"
    },
    ff = ["src"],
    wf = {
        class: "addBankCard__container-content-item"
    },
    yf = {
        class: "label"
    },
    gf = ["src"],
    $f = ["placeholder", "readonly"],
    bf = {
        key: 0,
        class: "red"
    },
    kf = {
        key: 1,
        class: "red"
    },
    Cf = {
        class: "addBankCard__container-content-item"
    },
    Tf = {
        class: "label"
    },
    Sf = ["src"],
    If = ["placeholder"],
    Nf = {
        class: "addBankCard__container-content-item"
    },
    Af = {
        class: "label"
    },
    Rf = ["src"],
    Df = ["placeholder"],
    Uf = {
        key: 0,
        class: "addBankCard__container-content-item"
    },
    Bf = {
        class: "label"
    },
    Wf = ["src"],
    Of = ["placeholder"],
    Pf = {
        key: 1,
        class: "addBankCard__container-content-item"
    },
    Lf = {
        class: "label"
    },
    Mf = ["src"],
    Vf = ["placeholder"],
    qf = {
        key: 2,
        class: "addBankCard__container-content-item"
    },
    jf = {
        class: "label"
    },
    Ef = ["src"],
    Hf = ["placeholder"],
    xf = {
        key: 3,
        class: "addBankCard__container-content-item"
    },
    Ff = {
        class: "label"
    },
    zf = ["src"],
    Kf = ["placeholder"],
    Gf = {
        class: "addBankCard__container-content-btn"
    },
    Qf = {
        key: 1
    },
    Zf = ie({
        __name: "index",
        setup(b) {
            const {
                t: s
            } = be(), c = C(0), {
                setLoading: r
            } = He(), o = Ot(), l = ye(), {
                isOpenWithdraw: d,
                isOpenAddBankCardOpenEmail: h
            } = mt(), w = l.currentRoute.value.query.fromV || "Withdraw-BankCard", u = C(), {
                iseditor: _,
                onInput: $,
                setUL: v,
                onLoad: A,
                makeTxt: g
            } = nt(), U = V(() => u.value ? u.value : s("addCardMsg1"));

            function B(W) {
                R.bankid = W.bankID, u.value = W.bankName, c.value = 0
            }
            const T = V(() => c.value == 0 ? s("titleAddBankCard") : s("selectBank")),
                m = C(!1),
                k = C(!1),
                P = C(!1),
                I = We(),
                O = V(() => I.getDollarSign);
            O.value && (m.value = ["₫", "K"].includes(O.value), k.value = O.value == "₹", P.value = O.value == "৳");

            function q() {
                if (c.value > 0) return c.value = 0;
                l.replace({
                    name: w,
                    query: {
                        type: "Add"
                    }
                })
            }
            const R = Ne({
                    smsCode: "",
                    ifsccode: "",
                    bankid: 0,
                    beneficiaryname: "",
                    accountno: "",
                    email: "",
                    mobileno: "",
                    bankcitycode: "",
                    bankprovincecode: "",
                    bankbranchaddress: "",
                    type: "",
                    codeType: Ee.addBankCard
                }),
                M = it({
                    content: () => S(rt, {
                        type: R.type,
                        "onUpdate:type": W => R.type = W,
                        code: R.smsCode,
                        "onUpdate:code": W => R.smsCode = W,
                        onConfirm: E,
                        codeType: Ee.addBankCard
                    }, null),
                    beforeClose: () => {
                        R.smsCode = ""
                    }
                }),
                j = V(() => !(R.beneficiaryname.trim().length == 0 || R.accountno.trim().length == 0 || R.mobileno.trim().length == 0 || !k.value && !P.value && R.bankbranchaddress.trim().length == 0 || R.bankid == 0 || k.value == !0 && R.ifsccode.trim().length == 0 || P.value == !0 && R.ifsccode.trim().length == 0)),
                N = () => {
                    const W = localStorage.getItem("numberType") || o.userForm.numberType;
                    if (!j.value) return !1;
                    if (R.bankid == 0) return _e({
                        message: s("addCardMsg1"),
                        wordBreak: "break-word"
                    });
                    if (R.beneficiaryname.toString().trim().length == 0) return _e({
                        message: s("addCardMsg2"),
                        wordBreak: "break-word"
                    });
                    if (R.accountno.toString().trim().length == 0) return _e({
                        message: s("addCardMsg3"),
                        wordBreak: "break-word"
                    }); {
                        let L;
                        if (O.value == "R$") {
                            if (L = /^[0-9\-]{6,25}$/, R.accountno.indexOf("-") == -1) return _e({
                                message: s("code212"),
                                wordBreak: "break-word"
                            })
                        } else L = /^[0-9]{6,25}$/;
                        if (!L.test(R.accountno)) return _e({
                            message: s("code212"),
                            wordBreak: "break-word"
                        })
                    }
                    if (U.value.toUpperCase() == "STATE BANK OF INDIA" && R.accountno.toString().trim().charAt(0) == "0") return _e({
                        message: s("addBC1", [U.value]),
                        wordBreak: "break-word"
                    });
                    if (R.mobileno.toString().trim().length == 0) return _e({
                        message: s("addCardMsg4"),
                        wordBreak: "break-word"
                    });
                    if (!Pt(W, R.mobileno.trim().length)) return _e({
                        message: s("wrongTel"),
                        wordBreak: "break-word"
                    });
                    if (R.bankbranchaddress.toString().trim().length == 0 && !k.value && !P.value) return _e({
                        message: s("addCardMsg5"),
                        wordBreak: "break-word"
                    });
                    if (h.value && R.email.toString().trim().length == 0) return _e({
                        message: s("addCardMsg6"),
                        wordBreak: "break-word"
                    });
                    if (k.value == !0) {
                        if (R.ifsccode.trim().length == 0) return _e({
                            message: s("phEnter") + s("IFSCCode"),
                            wordBreak: "break-word"
                        });
                        if (!/^[A-Za-z]{4}0[A-Za-z0-9]{6}$/.test(R.ifsccode)) return _e({
                            message: s("IFSCCode") + s("formatErr"),
                            wordBreak: "break-word"
                        })
                    }
                    return h.value && !$a.email1.test(R.email) ? _e({
                        message: s(ba.email),
                        wordBreak: "break-word"
                    }) : P.value == !0 && R.ifsccode.trim().length == 0 ? _e({
                        message: s("phEnter") + " Routing Number",
                        wordBreak: "break-word"
                    }) : !0
                };
            async function y() {
                if (R.smsCode = "", N() === !0) {
                    if (d.value) return M.open();
                    await E()
                }
            }
            async function E() {
                const W = localStorage.getItem("numberType") || o.userForm.numberType;
                r(!0), R.beneficiaryname = R.beneficiaryname.trim(), await ne(Kn(Object.assign({}, R, {
                    mobileno: W + R.mobileno
                }))) && (xe(s("addedSuccessfully")), M.close(), await l.replace({
                    name: w,
                    query: {
                        type: "Add"
                    },
                    replace: !0
                })), r(!1)
            }

            function ee() {
                O.value == "R$" ? R.accountno = R.accountno.replace(/[^\d\-]+/g, "") : R.accountno = R.accountno.replace(/[^\d]+/g, "")
            }
            const pe = () => {
                R.ifsccode = R.ifsccode.replace(/[^a-zA-Z0-9]/g, ""), v(R, "ifsccode")
            };

            function G() {
                c.value = 2
            }
            return A(R, "beneficiaryname"), (W, L) => {
                const we = x("NavBar"),
                    le = x("van-icon");
                return n(), i("div", uf, [S(we, {
                    title: T.value,
                    "left-arrow": "",
                    onClickLeft: q
                }, null, 8, ["title"]), c.value == 0 ? (n(), i("div", vf, [e("div", _f, [e("img", {
                    src: a(F)("wallet", "hint")
                }, null, 8, pf), e("span", null, t(W.$t("tipBindUrOwnCardToEnsureFundSafety")), 1)]), e("div", hf, [e("div", mf, [e("img", {
                    src: a(F)("wallet", "bank"),
                    class: "icon"
                }, null, 8, ff), H(" " + t(W.$t("selectBank")), 1)]), e("div", {
                    class: "selectB",
                    onClick: G
                }, [H(t(U.value) + " ", 1), S(le, {
                    name: "arrow"
                })])]), f("验证收款人姓名"), e("div", wf, [e("div", yf, [e("img", {
                    src: a(F)("wallet", "name"),
                    class: "icon"
                }, null, 8, gf), H(" " + t(W.$t("payeeName")), 1)]), he(e("input", {
                    placeholder: W.$t("phEnterPayeeName"),
                    "onUpdate:modelValue": L[0] || (L[0] = X => R.beneficiaryname = X),
                    maxlength: "50",
                    onInput: L[1] || (L[1] = X => a(g)(R, "beneficiaryname")),
                    readonly: a(_)
                }, null, 40, $f), [
                    [Se, R.beneficiaryname, void 0, {
                        trim: !0
                    }]
                ]), m.value ? (n(), i("span", bf, t(W.$t("validateDesc21")), 1)) : f("v-if", !0), m.value ? (n(), i("p", kf, t(W.$t("example")) + " : DINH THI HUYEN", 1)) : f("v-if", !0)]), e("div", Cf, [e("div", Tf, [e("img", {
                    src: a(F)("wallet", "bankCard"),
                    class: "icon"
                }, null, 8, Sf), H(" " + t(W.$t("bankcardNo")), 1)]), he(e("input", {
                    placeholder: W.$t("phEnterBankcardNo"),
                    "onUpdate:modelValue": L[2] || (L[2] = X => R.accountno = X),
                    maxlength: "25",
                    onInput: ee
                }, null, 40, If), [
                    [Se, R.accountno, void 0, {
                        trim: !0
                    }]
                ])]), e("div", Nf, [e("div", Af, [e("img", {
                    src: a(F)("wallet", "phone"),
                    class: "icon"
                }, null, 8, Rf), H(" " + t(W.$t("tel")), 1)]), he(e("input", {
                    placeholder: W.$t("phEnterPayeeTel"),
                    "onUpdate:modelValue": L[3] || (L[3] = X => R.mobileno = X),
                    maxlength: "12",
                    onInput: L[4] || (L[4] = X => a($)(R, "mobileno"))
                }, null, 40, Df), [
                    [Se, R.mobileno, void 0, {
                        trim: !0
                    }]
                ])]), a(h) ? (n(), i("div", Uf, [e("div", Bf, [e("img", {
                    src: a(F)("wallet", "email"),
                    class: "icon"
                }, null, 8, Wf), H(" " + t(W.$t("email")), 1)]), he(e("input", {
                    type: "text",
                    placeholder: W.$t("inputemail"),
                    "onUpdate:modelValue": L[5] || (L[5] = X => R.email = X),
                    maxlength: "250"
                }, null, 8, Of), [
                    [Se, R.email, void 0, {
                        trim: !0
                    }]
                ])])) : f("v-if", !0), k.value ? (n(), i("div", Pf, [e("div", Lf, [e("img", {
                    src: a(F)("wallet", "ifscCode"),
                    class: "icon"
                }, null, 8, Mf), H(" " + t(W.$t("IFSCCode")), 1)]), he(e("input", {
                    placeholder: W.$t("phEnter") + W.$t("IFSCCode"),
                    "onUpdate:modelValue": L[6] || (L[6] = X => R.ifsccode = X),
                    onInput: pe,
                    maxlength: "11"
                }, null, 40, Vf), [
                    [Se, R.ifsccode, void 0, {
                        trim: !0
                    }]
                ])])) : f("v-if", !0), P.value ? (n(), i("div", qf, [e("div", jf, [e("img", {
                    src: a(F)("wallet", "address"),
                    class: "icon"
                }, null, 8, Ef), H(" Routing Number ")]), he(e("input", {
                    placeholder: W.$t("phEnter") + " Routing Number",
                    "onUpdate:modelValue": L[7] || (L[7] = X => R.ifsccode = X)
                }, null, 8, Hf), [
                    [Se, R.ifsccode, void 0, {
                        trim: !0
                    }]
                ])])) : f("v-if", !0), !k.value && !P.value ? (n(), i("div", xf, [e("div", Ff, [e("img", {
                    src: a(F)("wallet", "address"),
                    class: "icon"
                }, null, 8, zf), H(" " + t(W.$t("branchBankAddr")), 1)]), he(e("textarea", {
                    class: "textarea",
                    name: "remark",
                    id: "",
                    cols: "30",
                    rows: "10",
                    placeholder: W.$t("phEnterBranchAddr"),
                    "onUpdate:modelValue": L[8] || (L[8] = X => R.bankbranchaddress = X),
                    maxlength: "100"
                }, null, 8, Kf), [
                    [Se, R.bankbranchaddress, void 0, {
                        trim: !0
                    }]
                ])])) : f("v-if", !0), e("div", Gf, [e("button", {
                    class: ae({
                        active: j.value
                    }),
                    onClick: y
                }, t(W.$t("save")), 3)])])) : (n(), i("div", Qf, [f("选择银行卡"), S(Ra, {
                    onOnSelectItem: B
                })]))])
            }
        }
    });
const Yf = re(Zf, [
        ["__scopeId", "data-v-1726638e"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/Withdraw/AddBankCard/index.vue"]
    ]),
    pb = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Yf
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Xf = {
        class: "addKBZ"
    },
    Jf = {
        class: "addKBZ-top"
    },
    ew = ["src"],
    tw = {
        class: "addKBZ-item"
    },
    aw = {
        class: "label"
    },
    nw = ["src"],
    sw = {
        class: "selectB"
    },
    lw = {
        class: "addKBZ-item"
    },
    ow = {
        class: "label"
    },
    iw = ["src"],
    rw = ["placeholder", "readonly"],
    cw = {
        class: "addKBZ-item"
    },
    dw = {
        class: "label"
    },
    uw = ["src"],
    vw = ["placeholder"],
    _w = ie({
        __name: "index",
        setup(b) {
            const {
                iseditor: s,
                onInput: c,
                checkAccoutNo: r,
                onLoad: o,
                makeTxt: l
            } = nt(), {
                t: d
            } = be(), h = ye(), {
                setLoading: w
            } = He();
            let u = Ne([]);
            const _ = C(""),
                {
                    isOpenWithdraw: $
                } = mt(),
                v = Ne({
                    smsCode: "",
                    withdrawId: 8,
                    bankId: 0,
                    mobileNo: "",
                    beneficiaryName: "",
                    type: "",
                    codeType: Ee.addKBZ
                }),
                A = V(() => !(v.mobileNo.trim().length == 0 || v.bankId == 0 || v.beneficiaryName.trim().length == 0));
            async function g() {
                const I = await ne(ht({
                    withdrawid: 8
                }));
                I && (u = I.data.banklist, _.value = u.length > 0 ? u[0].bankName : "", v.bankId = u.length > 0 ? u[0].bankID : 0)
            }
            ge(async () => {
                await g()
            });
            const U = () => !A.value || !localStorage.getItem("numberType") ? !1 : v.bankId == 0 ? _e({
                    message: d("addCardMsg1"),
                    wordBreak: "break-word"
                }) : v.beneficiaryName.toString().trim().length == 0 ? _e({
                    message: d("phEnterName"),
                    wordBreak: "break-word"
                }) : v.mobileNo.toString().trim().length == 0 ? _e({
                    message: d("addCardMsg4"),
                    wordBreak: "break-word"
                }) : r(v.mobileNo, d("tel") + d("formatErr")) ? Pt(localStorage.getItem("numberType"), v.mobileNo.trim().length) ? !0 : _e({
                    message: d("wrongTel"),
                    wordBreak: "break-word"
                }) : void 0,
                T = it({
                    content: () => S(rt, {
                        type: v.type,
                        "onUpdate:type": I => v.type = I,
                        code: v.smsCode,
                        "onUpdate:code": I => v.smsCode = I,
                        onConfirm: k,
                        codeType: Ee.addKBZ
                    }, null),
                    beforeClose: () => {
                        v.smsCode = ""
                    }
                });
            async function m() {
                if (U() === !0) {
                    if (v.smsCode = "", $.value) return T.open();
                    await k()
                }
            }
            async function k() {
                w(!0), await ne(Qt(v)) && (T.close(), h.replace({
                    name: "Withdraw",
                    query: {
                        type: "Add"
                    },
                    replace: !0
                })), w(!1)
            }

            function P() {
                h.replace({
                    name: "Withdraw",
                    query: {
                        type: "Add"
                    }
                })
            }
            return o(v, "beneficiaryName"), (I, O) => {
                const q = x("NavBar");
                return n(), i("div", Xf, [S(q, {
                    title: `${I.$t("addto")} KBZPay`,
                    "left-arrow": "",
                    onClickLeft: P
                }, null, 8, ["title"]), e("div", Jf, [e("img", {
                    src: a(F)("wallet", "hint")
                }, null, 8, ew), e("span", null, t(I.$t("WaveTip1")), 1)]), e("div", tw, [e("div", aw, [e("img", {
                    src: a(F)("wallet", "bank"),
                    class: "icon"
                }, null, 8, nw), H(" " + t(I.$t("bankname")), 1)]), e("div", sw, t(_.value), 1)]), e("div", lw, [e("div", ow, [e("img", {
                    src: a(F)("wallet", "name"),
                    class: "icon"
                }, null, 8, iw), H(" " + t(I.$t("name")), 1)]), he(e("input", {
                    placeholder: I.$t("phEnterName"),
                    "onUpdate:modelValue": O[0] || (O[0] = R => v.beneficiaryName = R),
                    maxlength: "50",
                    onInput: O[1] || (O[1] = R => a(l)(v, "beneficiaryName")),
                    readonly: a(s)
                }, null, 40, rw), [
                    [Se, v.beneficiaryName, void 0, {
                        trim: !0
                    }]
                ])]), e("div", cw, [e("div", dw, [e("img", {
                    src: a(F)("wallet", "phone"),
                    class: "icon"
                }, null, 8, uw), H(" " + t(I.$t("tel")), 1)]), he(e("input", {
                    placeholder: I.$t("phEnterPayeeTel"),
                    "onUpdate:modelValue": O[2] || (O[2] = R => v.mobileNo = R),
                    maxlength: 12,
                    onInput: O[3] || (O[3] = R => a(c)(v, "mobileNo"))
                }, null, 40, vw), [
                    [Se, v.mobileNo, void 0, {
                        trim: !0
                    }]
                ])]), e("div", {
                    class: ae(["addKBZ-btn", {
                        active: A.value
                    }]),
                    onClick: m
                }, t(I.$t("save")), 3)])
            }
        }
    });
const pw = re(_w, [
        ["__scopeId", "data-v-ee22f671"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/Withdraw/AddKbz/index.vue"]
    ]),
    hb = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: pw
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    hw = b => (Ae("data-v-9694f22e"), b = b(), Re(), b),
    mw = {
        class: "addBankCard__container"
    },
    fw = {
        class: "addBankCard__container-content"
    },
    ww = {
        class: "addBankCard__container-content-top"
    },
    yw = {
        class: "addBankCard__container-content-top-item"
    },
    gw = {
        class: "label"
    },
    $w = ["readonly", "placeholder"],
    bw = {
        class: "addBankCard__container-content-top-item"
    },
    kw = hw(() => e("div", {
        class: "label"
    }, "CPF", -1)),
    Cw = ["readonly", "placeholder"],
    Tw = {
        class: "addBankCard__container-content-top-item"
    },
    Sw = {
        class: "label"
    },
    Iw = {
        class: "ar-searchbar"
    },
    Nw = {
        class: "addBankCard__container-content-top-item"
    },
    Aw = {
        class: "label"
    },
    Rw = {
        class: "accountNo"
    },
    Dw = {
        key: 0
    },
    Uw = ["placeholder"],
    Bw = ["placeholder"],
    Ww = {
        class: "addBankCard__container-content-btn"
    },
    Ow = {
        class: "search"
    },
    Pw = ie({
        __name: "index",
        setup(b) {
            const {
                t: s
            } = be(), {
                setLoading: c
            } = He(), r = ye(), o = C(""), l = C(!1), d = r.currentRoute.value.query.fromV || "Withdraw-PIX";

            function h() {
                r.replace({
                    name: d,
                    query: {
                        type: "Add"
                    }
                })
            }
            const {
                isOpenWithdraw: w
            } = mt(), u = Ne({
                bankId: 0,
                accountNo: "",
                name: "",
                cpf: "",
                smsCode: "",
                type: "",
                codeType: Ee.addPIX,
                pixType: ""
            }), _ = C(localStorage.getItem("numberType")), $ = C("");
            let v = C([]),
                A = Ne([]);
            const g = V(() => !(u.accountNo.trim().length == 0 || u.name.trim().length == 0 || u.cpf.trim().length == 0 || u.bankId == 0));

            function U(N) {
                N.preventDefault();
                const E = N.clipboardData.getData("text").replace(/[^\d]/g, "");
                N.target.value = E, N.target.id == "cpf" ? u.cpf = E : N.target.id == "accountNo" && (u.accountNo = E)
            }
            const B = () => {
                if (g.value) return u.name.trim().length == 0 ? _e({
                    message: s("phEnterPayeeName"),
                    wordBreak: "break-word"
                }) : u.cpf.trim().length == 0 ? _e({
                    message: s("enterCpf"),
                    wordBreak: "break-word"
                }) : Z(u.cpf.trim()) ? u.bankId == 0 ? _e({
                    message: s("tipsCpf2"),
                    wordBreak: "break-word"
                }) : u.accountNo.trim().length == 0 ? _e({
                    message: s("tipsCpf3"),
                    wordBreak: "break-word"
                }) : (o.value.toUpperCase().indexOf("PHONE") != -1 || o.value.toUpperCase().indexOf("CPF") != -1) && u.accountNo.trim().length != 11 ? _e({
                    message: s("tipsCpf4"),
                    wordBreak: "break-word"
                }) : o.value.toUpperCase().indexOf("CPF") != -1 && u.accountNo != u.cpf ? _e({
                    message: s("pixTip1"),
                    wordBreak: "break-word"
                }) : ["EMALL", "EMAIL"].includes(o.value.toUpperCase()) && !$a.email1.test(u.accountNo.trim()) ? _e({
                    message: s(ba.email),
                    wordBreak: "break-word"
                }) : !0 : _e({
                    message: s("tipsCpf1"),
                    wordBreak: "break-word"
                })
            };
            async function T() {
                if (B() === !0) {
                    if (u.smsCode = "", w.value) return j.open();
                    await m()
                }
            }
            async function m() {
                c(!0);
                let N = u;
                if (o.value.toUpperCase().indexOf("PHONE") != -1) {
                    const E = _.value + u.accountNo;
                    N = Object.assign({}, u, {
                        accountNo: E
                    })
                }
                await ne(Gn(N)) && (xe(s("addedSuccessfully")), j.close(), u.accountNo = "", await r.replace({
                    name: d,
                    query: {
                        type: "Add"
                    },
                    replace: !0
                })), c(!1)
            }
            const k = C(!0);
            async function P() {
                const N = await ne(Qn());
                N && N.data != null ? (k.value = !0, u.name = N.data.realName, u.cpf = N.data.idCard) : k.value = !1
            }
            async function I() {
                const N = await ne(ht({
                    withdrawid: 5
                }));
                N && (A = N.data.banklist, o.value = A.length > 0 ? A[0].bankName : "", u.bankId = A.length > 0 ? A[0].bankID : 0, v.value = A, O())
            }
            je($, () => {
                A.length > 0 && (v.value = A.filter(N => N.bankName.toLowerCase().indexOf($.value.toLowerCase()) !== -1))
            });

            function O() {
                u.accountNo = "", u.pixType = "", o.value.toUpperCase().indexOf("CPF") != -1 && (u.pixType = "cpf", u.cpf.trim().length != 0 && (u.accountNo = u.cpf))
            }
            je(l, () => {
                l.value && ($.value = "")
            });

            function q() {
                l.value = !0
            }
            const R = ({
                selectedOptions: N
            }) => {
                l.value = !1, N[0] && (o.value = N[0].bankName, u.bankId = N[0].bankID, O())
            };

            function Z(N) {
                if (N = N.replace(/[^\d]+/g, ""), N == "" || N.length != 11 || N == "00000000000" || N == "11111111111" || N == "22222222222" || N == "33333333333" || N == "44444444444" || N == "55555555555" || N == "66666666666" || N == "77777777777" || N == "88888888888" || N == "99999999999") return !1;
                let y = 0;
                for (let ee = 0; ee < 9; ee++) y += parseInt(N.charAt(ee)) * (10 - ee);
                let E = 11 - y % 11;
                if ((E == 10 || E == 11) && (E = 0), E != parseInt(N.charAt(9))) return !1;
                y = 0;
                for (let ee = 0; ee < 10; ee++) y += parseInt(N.charAt(ee)) * (11 - ee);
                return E = 11 - y % 11, (E == 10 || E == 11) && (E = 0), E == parseInt(N.charAt(10))
            }
            ge(async () => {
                await P(), await I()
            });
            const j = it({
                content: () => S(rt, {
                    type: u.type,
                    "onUpdate:type": N => u.type = N,
                    code: u.smsCode,
                    "onUpdate:code": N => u.smsCode = N,
                    onConfirm: m,
                    codeType: Ee.addPIX
                }, null),
                beforeClose: () => {
                    u.smsCode = ""
                }
            });
            return (N, y) => {
                const E = x("NavBar"),
                    ee = x("ArSelect"),
                    pe = x("van-picker"),
                    G = x("van-popup");
                return n(), i("div", mw, [S(E, {
                    title: N.$t("paymentMethod"),
                    "left-arrow": "",
                    onClickLeft: h
                }, null, 8, ["title"]), e("div", fw, [e("h1", null, t(N.$t("pixInfo")), 1), e("div", ww, [e("div", yw, [e("div", gw, t(N.$t("payeeName")), 1), he(e("input", {
                    readonly: k.value,
                    placeholder: N.$t("phEnterPayeeName"),
                    "onUpdate:modelValue": y[0] || (y[0] = W => u.name = W)
                }, null, 8, $w), [
                    [Se, u.name]
                ])]), e("div", bw, [kw, he(e("input", {
                    readonly: k.value,
                    placeholder: N.$t("enterCpf"),
                    "onUpdate:modelValue": y[1] || (y[1] = W => u.cpf = W),
                    maxlength: "11",
                    oninput: "value=value.replace(/\\D/g,'')",
                    onPaste: U,
                    id: "cpf"
                }, null, 40, Cw), [
                    [Se, u.cpf]
                ])]), e("div", Tw, [e("div", Sw, t(N.$t("pixType")), 1), e("div", Iw, [S(ee, {
                    onClickSelect: q,
                    selectName: o.value
                }, null, 8, ["selectName"])])]), e("div", Nw, [e("div", Aw, t(N.$t("pixAccount")), 1), e("div", Rw, [o.value.toUpperCase().indexOf("PHONE") != -1 ? (n(), i("div", Dw, "+" + t(_.value), 1)) : f("v-if", !0), f("phone只能输入数字"), o.value.toUpperCase().indexOf("PHONE") != -1 || o.value.toUpperCase().indexOf("CPF") != -1 ? he((n(), i("input", {
                    key: 1,
                    placeholder: N.$t("enterPixAccount"),
                    "onUpdate:modelValue": y[2] || (y[2] = W => u.accountNo = W),
                    oninput: "value=value.replace(/\\D/g,'')",
                    maxlength: "11",
                    onPaste: U,
                    id: "accountNo"
                }, null, 40, Uw)), [
                    [Se, u.accountNo, void 0, {
                        trim: !0
                    }]
                ]) : he((n(), i("input", {
                    key: 2,
                    placeholder: N.$t("enterPixAccount"),
                    "onUpdate:modelValue": y[3] || (y[3] = W => u.accountNo = W),
                    oninput: "value=value.replace(/\\s+/g,'')",
                    maxlength: "40"
                }, null, 8, Bw)), [
                    [Se, u.accountNo, void 0, {
                        trim: !0
                    }]
                ])])])])]), e("div", Ww, [e("button", {
                    class: ae({
                        active: g.value
                    }),
                    onClick: T
                }, t(N.$t("save")), 3), e("div", {
                    onClick: y[4] || (y[4] = () => {
                        a(r).push({
                            name: "CustomerService"
                        })
                    })
                }, t(N.$t("withdrawDialogDesc5")), 1)]), S(G, {
                    show: l.value,
                    "onUpdate:show": y[7] || (y[7] = W => l.value = W),
                    round: "",
                    position: "bottom"
                }, {
                    default: J(() => [e("div", Ow, [S(cs, {
                        placeholder: N.$t("searchPixType"),
                        value: $.value,
                        "onUpdate:value": y[5] || (y[5] = W => $.value = W),
                        isShowClose: !0
                    }, null, 8, ["placeholder", "value"])]), S(pe, {
                        "columns-field-names": {
                            text: "bankName",
                            value: "bankID",
                            children: "children"
                        },
                        columns: a(v),
                        onCancel: y[6] || (y[6] = W => l.value = !1),
                        onConfirm: R
                    }, null, 8, ["columns"])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const Lw = re(Pw, [
        ["__scopeId", "data-v-9694f22e"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/Withdraw/AddPIX/index.vue"]
    ]),
    mb = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Lw
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Mw = {
        class: "addtype4_C"
    },
    Vw = {
        class: "addtype4_C-header"
    },
    qw = {
        class: "addtype4_C-title"
    },
    jw = {
        class: "addtype4_C-title"
    },
    Ew = {
        class: "addtype4_C-title"
    },
    Hw = {
        class: "successTip"
    },
    xw = ie({
        __name: "index",
        setup(b) {
            const {
                iseditor: s,
                onInput: c,
                checkAccoutNo: r,
                onLoad: o,
                makeTxt: l
            } = nt(), {
                t: d
            } = be(), h = ye(), {
                isOpenWithdraw: w
            } = mt(), u = h.currentRoute.value.query.Type4name, _ = C(!1), $ = Ne({
                withdrawId: 4,
                mobileNo: "",
                bankId: "",
                smsCode: "",
                beneficiaryName: "",
                type: "",
                codeType: Ee.addEWallet
            }), v = C({
                bankName: "",
                bankID: 0,
                reserved: ""
            }), A = C(!1), g = () => {
                h.replace({
                    name: "Withdraw-Type4",
                    query: {
                        type: "Add",
                        Type4name: u
                    }
                })
            }, U = {
                text: "bankName",
                value: "bankID"
            }, B = V(() => $.mobileNo && $.bankId);
            let T = C([]);
            async function m() {
                const Z = await ne(ht({
                    withdrawid: 4
                }));
                Z && (T.value = Z.data.banklist)
            }
            ge(async () => {
                await m()
            });
            const k = async () => {
                    await ne(Qt($)) && (xe(d("addedSuccessfully")), I.close(), h.replace({
                        name: "Withdraw-Type4",
                        query: {
                            type: "Add",
                            Type4name: u
                        }
                    }))
                },
                I = it({
                    content: () => S(rt, {
                        type: $.type,
                        "onUpdate:type": Z => $.type = Z,
                        code: $.smsCode,
                        "onUpdate:code": Z => $.smsCode = Z,
                        onConfirm: k,
                        codeType: Ee.addEWallet
                    }, null),
                    beforeClose: () => {
                        $.smsCode = ""
                    }
                }),
                O = Z => {
                    let M = { ...Z.selectedOptions[0]
                    };
                    v.value = M, $.bankId = M.bankID, A.value = !1
                },
                q = () => {
                    if (!($.mobileNo.toString().trim().length > 0 && !r($.mobileNo, d("account") + d("formatErr")))) return !0
                },
                R = async () => {
                    if (q() === !0) {
                        if (w.value) return I.open();
                        await k()
                    }
                };
            return o($, "beneficiaryName"), (Z, M) => {
                const j = x("NavBar"),
                    N = x("van-field"),
                    y = x("van-toast"),
                    E = x("van-picker"),
                    ee = x("van-popup");
                return n(), i(de, null, [e("div", Mw, [S(j, {
                    title: a(u) + a(d)("paymentMethod"),
                    "left-arrow": "",
                    onClickLeft: g
                }, null, 8, ["title"]), e("div", Vw, t(a(u)), 1), e("div", qw, t(Z.$t("selectType")), 1), S(N, {
                    class: "addtype4-input",
                    modelValue: v.value.bankName,
                    "onUpdate:modelValue": M[0] || (M[0] = pe => v.value.bankName = pe),
                    readonly: !0,
                    "right-icon": "arrow-down",
                    placeholder: Z.$t("tipSelectPls"),
                    onClick: M[1] || (M[1] = pe => A.value = !0)
                }, null, 8, ["modelValue", "placeholder"]), e("div", jw, t(Z.$t("name")), 1), S(N, {
                    class: "addtype4-input",
                    modelValue: $.beneficiaryName,
                    "onUpdate:modelValue": M[2] || (M[2] = pe => $.beneficiaryName = pe),
                    maxlength: 50,
                    placeholder: Z.$t("phEnter") + Z.$t("name"),
                    onInput: M[3] || (M[3] = pe => a(l)($, "beneficiaryName")),
                    readonly: a(s)
                }, null, 8, ["modelValue", "placeholder", "readonly"]), e("div", Ew, t(Z.$t("account")), 1), S(N, {
                    class: "addtype4-input",
                    modelValue: $.mobileNo,
                    "onUpdate:modelValue": M[4] || (M[4] = pe => $.mobileNo = pe),
                    modelModifiers: {
                        trim: !0
                    },
                    maxlength: 12,
                    type: "digit",
                    placeholder: Z.$t("phEnter") + Z.$t("account"),
                    onInput: M[5] || (M[5] = pe => a(c)($, "mobileNo"))
                }, null, 8, ["modelValue", "placeholder"]), e("div", {
                    class: ae(["sumbitBtn", {
                        disable: !B.value
                    }]),
                    onClick: R
                }, t(Z.$t("save")), 3), S(y, {
                    show: _.value,
                    "onUpdate:show": M[6] || (M[6] = pe => _.value = pe)
                }, {
                    message: J(() => [e("div", Hw, [e("div", null, t(Z.$t("addedSuccessfully")), 1)])]),
                    _: 1
                }, 8, ["show"])]), S(ee, {
                    show: A.value,
                    "onUpdate:show": M[8] || (M[8] = pe => A.value = pe),
                    round: "",
                    position: "bottom"
                }, {
                    default: J(() => [S(E, {
                        columns: a(T),
                        "columns-field-names": U,
                        onCancel: M[7] || (M[7] = pe => A.value = !1),
                        onConfirm: O
                    }, null, 8, ["columns"])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const Fw = re(xw, [
        ["__scopeId", "data-v-497422b6"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/Withdraw/AddType4/index.vue"]
    ]),
    fb = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Fw
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    zw = {
        class: "addUSDT__container"
    },
    Kw = {
        class: "addUSDT__container-content"
    },
    Gw = {
        class: "addUSDT__container-content-top"
    },
    Qw = ["src"],
    Zw = {
        class: "addUSDT__container-content-item"
    },
    Yw = {
        class: "label"
    },
    Xw = ["src"],
    Jw = {
        class: "ar-searchbar"
    },
    ey = {
        class: "addUSDT__container-content-item"
    },
    ty = {
        class: "label"
    },
    ay = ["src"],
    ny = {
        class: "input"
    },
    sy = ["placeholder", "maxlength"],
    ly = {
        class: "addUSDT__container-content-item"
    },
    oy = {
        class: "label"
    },
    iy = ["src"],
    ry = ["placeholder"],
    cy = {
        class: "addUSDT__container-content-btn"
    },
    dy = ie({
        __name: "index",
        setup(b) {
            const {
                t: s
            } = be(), {
                isOpenWithdraw: c
            } = mt(), {
                setLoading: r
            } = He(), o = ye(), l = o.currentRoute.value.query.fromV || "Withdraw-USDT";

            function d() {
                o.replace({
                    name: l,
                    query: {
                        type: "Add"
                    }
                })
            }
            const h = C(!1);
            let w = Ne([]);
            async function u() {
                const I = await ne(ht({
                    withdrawid: 3
                }));
                I && (w = I.data.banklist, _.value = w.length > 0 ? w[0].bankName : "", g.bankid = w.length > 0 ? w[0].bankID : 0)
            }
            const _ = C(""),
                $ = ({
                    selectedOptions: I
                }) => {
                    h.value = !1, _.value = I[0].bankName, g.bankid = I[0].bankID
                };

            function v() {
                h.value = !0
            }
            const A = V(() => _.value.toUpperCase().indexOf("TRC") != -1 ? 36 : _.value.toUpperCase().indexOf("ERC") != -1 ? 46 : 100),
                g = Ne({
                    withdrawid: 3,
                    bankid: 0,
                    usdtaddress: "",
                    smsCode: "",
                    usdtRemarkName: "",
                    type: "",
                    codeType: Ee.addUSDT
                }),
                U = V(() => !(g.usdtRemarkName.trim().length == 0 || g.bankid == 0 || g.usdtaddress.trim().length == 0)),
                B = () => {
                    if (U.value) return g.bankid == 0 ? _e({
                        message: s("onConfirmMsg1"),
                        wordBreak: "break-word"
                    }) : g.usdtaddress.toString().trim().length == 0 ? _e({
                        message: s("onConfirmMsg2"),
                        wordBreak: "break-word"
                    }) : g.usdtaddress.trim().length < 30 ? _e({
                        message: s("onConfirmMsg4"),
                        wordBreak: "break-word"
                    }) : _.value.toUpperCase().indexOf("TRC") != -1 && (g.usdtaddress.trim().slice(0, 1) != "T" || g.usdtaddress.trim().length > 36) ? _e({
                        message: s("onConfirmMsg5"),
                        wordBreak: "break-word"
                    }) : _.value.toUpperCase().indexOf("ERC") != -1 && (g.usdtaddress.trim().slice(0, 2) != "0x" || g.usdtaddress.trim().length > 46) ? _e({
                        message: s("onConfirmMsg5"),
                        wordBreak: "break-word"
                    }) : g.usdtRemarkName.toString().trim().length == 0 ? _e({
                        message: s("onConfirmMsg3"),
                        wordBreak: "break-word"
                    }) : !0
                };
            async function T() {
                if (B() !== !0) return;
                r(!0), await ne(Zn(g)) && (xe(s("addedSuccessfully")), k.close(), await o.replace({
                    name: l,
                    query: {
                        type: "Add"
                    },
                    replace: !0
                })), r(!1)
            }
            ge(async () => {
                await u()
            });
            const k = it({
                content: () => S(rt, {
                    type: g.type,
                    "onUpdate:type": I => g.type = I,
                    code: g.smsCode,
                    "onUpdate:code": I => g.smsCode = I,
                    onConfirm: T,
                    codeType: g.codeType
                }, null),
                beforeClose: () => {
                    g.smsCode = ""
                }
            });
            async function P() {
                if (g.smsCode = "", B() === !0) {
                    if (c.value) return k.open();
                    await T()
                }
            }
            return (I, O) => {
                const q = x("NavBar"),
                    R = x("ArSelect"),
                    Z = x("van-picker"),
                    M = x("van-popup");
                return n(), i("div", zw, [S(q, {
                    title: I.$t("titleAddUSDTAddr"),
                    "left-arrow": "",
                    onClickLeft: d
                }, null, 8, ["title"]), e("div", Kw, [e("div", Gw, [e("img", {
                    src: a(F)("wallet", "hint")
                }, null, 8, Qw), e("span", null, t(I.$t("tipBindUrOwnUSDEAddrForFundSafety")), 1)]), e("div", Zw, [e("div", Yw, [e("img", {
                    src: a(F)("wallet", "network"),
                    class: "icon"
                }, null, 8, Xw), H(" " + t(I.$t("selectMainNetwork")), 1)]), e("div", Jw, [S(R, {
                    onClickSelect: v,
                    selectName: _.value
                }, null, 8, ["selectName"])])]), e("div", ey, [e("div", ty, [e("img", {
                    src: a(F)("wallet", "address"),
                    class: "icon"
                }, null, 8, ay), H(" " + t(I.$t("usedAddr")), 1)]), e("div", ny, [he(e("input", {
                    placeholder: I.$t("phEnterUSDTAddr"),
                    maxlength: A.value,
                    "onUpdate:modelValue": O[0] || (O[0] = j => g.usdtaddress = j),
                    oninput: "value=value.replace(/[^\\w\\/]/ig,'')"
                }, null, 8, sy), [
                    [Se, g.usdtaddress]
                ])])]), e("div", ly, [e("div", oy, [e("img", {
                    src: a(F)("wallet", "anotherNamer"),
                    class: "icon"
                }, null, 8, iy), H(" " + t(I.$t("addressAlias")), 1)]), he(e("input", {
                    placeholder: I.$t("phEnterUSDTRemarks"),
                    maxlength: "20",
                    "onUpdate:modelValue": O[1] || (O[1] = j => g.usdtRemarkName = j)
                }, null, 8, ry), [
                    [Se, g.usdtRemarkName]
                ])]), e("div", cy, [e("button", {
                    class: ae({
                        active: U.value
                    }),
                    onClick: P
                }, t(I.$t("save")), 3)])]), S(M, {
                    show: h.value,
                    "onUpdate:show": O[3] || (O[3] = j => h.value = j),
                    round: "",
                    position: "bottom"
                }, {
                    default: J(() => [S(Z, {
                        "columns-field-names": {
                            text: "bankName",
                            value: "bankID",
                            children: "children"
                        },
                        columns: a(w),
                        onCancel: O[2] || (O[2] = j => h.value = !1),
                        onConfirm: $
                    }, null, 8, ["columns"])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const uy = re(dy, [
        ["__scopeId", "data-v-24736190"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/Withdraw/AddUSDT/index.vue"]
    ]),
    wb = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: uy
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Da = b => (Ae("data-v-8ced09ab"), b = b(), Re(), b),
    vy = {
        class: "addupi_C"
    },
    _y = {
        class: "addupi_C-header wallet_18"
    },
    py = Da(() => e("div", {
        class: "addupi_C-title"
    }, "UPI Name", -1)),
    hy = Da(() => e("div", {
        class: "addupi_C-title"
    }, "UPI ID", -1)),
    my = {
        class: "addupi_C-title"
    },
    fy = {
        class: "addupi_C_number"
    },
    wy = {
        class: "tip"
    },
    yy = ie({
        __name: "index",
        setup(b) {
            const s = ye(),
                c = Ot(),
                r = C(c.getUserForm.numberType),
                o = C(""),
                {
                    t: l
                } = be(),
                d = C(""),
                h = V(() => r.value + "" + o.value),
                w = () => {
                    s.replace({
                        name: "Withdraw-Upi",
                        query: {
                            type: "Add"
                        }
                    })
                },
                u = C({
                    beneficiaryName: "",
                    accountNo: "",
                    smsCode: "",
                    type: "c2c",
                    codeType: Ee.addNewUPI_N
                }),
                _ = m => {
                    r.value = m
                };

            function $(m) {
                var O;
                const k = sessionStorage.getItem("areaPhoneLenList");
                let I = (O = JSON.parse(k).find(q => m.indexOf(q.area.replace("+", "")) == 0)) == null ? void 0 : O.area.replace("+", "");
                I && (r.value = I, o.value = m.substring(I.length))
            }
            const v = V(() => u.value.beneficiaryName && u.value.accountNo && o.value && r.value),
                A = async () => {
                    const m = await ne(Xn());
                    d.value = (m == null ? void 0 : m.data) || "", d.value != "" && $(d.value)
                };
            ge(() => {
                A()
            });
            const U = it({
                    content: () => S(rt, {
                        type: u.value.type,
                        code: u.value.smsCode,
                        "onUpdate:code": m => u.value.smsCode = m,
                        onConfirm: B,
                        codeType: Ee.addNewUPI_N,
                        phone: h.value,
                        "onUpdate:phone": m => h.value = m,
                        showType: "phone"
                    }, null),
                    beforeClose: () => {
                        u.value.smsCode = ""
                    }
                }),
                B = async () => {
                    Object.assign(u.value, {
                        mobileNo: h.value
                    }), await ne(Jn(u.value)) && (xe(l("addedSuccessfully")), U.close(), await s.replace({
                        name: "Withdraw-Upi"
                    }))
                },
                T = async () => /^[a-zA-Z0-9]+@[a-zA-Z0-9]+$/.test(u.value.accountNo) ? Pt(r.value, o.value.toString().trim().length) ? U.open() : _e({
                    message: l("wrongTel"),
                    wordBreak: "break-word"
                }) : _e(l("UPIID"));
            return (m, k) => {
                const P = x("NavBar"),
                    I = x("van-field"),
                    O = x("van-icon");
                return n(), i("div", vy, [S(P, {
                    title: m.$t("paymentMethod"),
                    "left-arrow": "",
                    onClickLeft: w
                }, null, 8, ["title"]), e("div", _y, t(m.$t("UPIInformation")), 1), py, S(I, {
                    class: "upi-input",
                    modelValue: u.value.beneficiaryName,
                    "onUpdate:modelValue": k[0] || (k[0] = q => u.value.beneficiaryName = q),
                    modelModifiers: {
                        trim: !0
                    },
                    maxlength: 30,
                    placeholder: m.$t("phEnterUPIName"),
                    rules: [{
                        required: !0,
                        message: m.$t("phEnterUPIName")
                    }]
                }, null, 8, ["modelValue", "placeholder", "rules"]), hy, S(I, {
                    class: "upi-input",
                    modelValue: u.value.accountNo,
                    "onUpdate:modelValue": k[1] || (k[1] = q => u.value.accountNo = q),
                    modelModifiers: {
                        trim: !0
                    },
                    maxlength: 30,
                    type: "text",
                    placeholder: m.$t("phEnterUPIID")
                }, null, 8, ["modelValue", "placeholder"]), e("div", my, t(m.$t("phoneN")), 1), e("div", fy, [S(Yn, {
                    typeValue: r.value,
                    "onUpdate:typeValue": k[2] || (k[2] = q => r.value = q),
                    ref: "dropDown",
                    onChangeT: _
                }, null, 8, ["typeValue"]), S(I, {
                    class: "upi-input number",
                    modelValue: o.value,
                    "onUpdate:modelValue": k[3] || (k[3] = q => o.value = q),
                    modelModifiers: {
                        number: !0,
                        trim: !0
                    },
                    type: "digit",
                    placeholder: m.$t("plsEnterTel")
                }, null, 8, ["modelValue", "placeholder"])]), e("div", wy, [S(O, {
                    name: "warning-o",
                    size: "14"
                }), H(t(m.$t("upiTip1")), 1)]), e("div", {
                    class: ae(["bind-bank-sumbit", {
                        disable: !v.value
                    }]),
                    onClick: T
                }, t(m.$t("save")), 3)])
            }
        }
    });
const gy = re(yy, [
        ["__scopeId", "data-v-8ced09ab"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/Withdraw/AddUpi/index.vue"]
    ]),
    yb = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: gy
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    $y = {
        class: "addKBZ"
    },
    by = {
        class: "addKBZ-top"
    },
    ky = ["src"],
    Cy = {
        class: "addKBZ-item"
    },
    Ty = {
        class: "label"
    },
    Sy = ["src"],
    Iy = {
        class: "selectB"
    },
    Ny = {
        class: "addKBZ-item"
    },
    Ay = {
        class: "label"
    },
    Ry = ["src"],
    Dy = ["placeholder", "readonly"],
    Uy = {
        class: "addKBZ-item"
    },
    By = {
        class: "label"
    },
    Wy = ["src"],
    Oy = ["placeholder"],
    Py = ie({
        __name: "index",
        setup(b) {
            const {
                iseditor: s,
                onInput: c,
                checkAccoutNo: r,
                onLoad: o,
                makeTxt: l
            } = nt(), {
                t: d
            } = be(), h = ye(), {
                setLoading: w
            } = He(), {
                isOpenWithdraw: u
            } = mt();
            let _ = Ne([]);
            const $ = C(""),
                v = Ne({
                    smsCode: "",
                    withdrawId: 6,
                    bankId: 0,
                    mobileNo: "",
                    beneficiaryName: "",
                    type: "",
                    codeType: Ee.addWave
                }),
                A = V(() => !(v.mobileNo.trim().length == 0 || v.bankId == 0 || v.beneficiaryName.trim().length == 0)),
                g = () => v.bankId == 0 ? _e({
                    message: d("addCardMsg1"),
                    wordBreak: "break-word"
                }) : v.beneficiaryName.toString().trim().length == 0 ? _e({
                    message: d("phEnterName"),
                    wordBreak: "break-word"
                }) : v.mobileNo.toString().trim().length == 0 ? _e({
                    message: d("addCardMsg4"),
                    wordBreak: "break-word"
                }) : r(v.mobileNo, d("tel") + d("formatErr")) ? Pt(localStorage.getItem("numberType"), v.mobileNo.trim().length) ? !0 : _e({
                    message: d("wrongTel"),
                    wordBreak: "break-word"
                }) : void 0,
                B = it({
                    content: () => S(rt, {
                        type: v.type,
                        "onUpdate:type": I => v.type = I,
                        code: v.smsCode,
                        "onUpdate:code": I => v.smsCode = I,
                        onConfirm: m,
                        codeType: Ee.addWave
                    }, null),
                    beforeClose: () => {
                        v.smsCode = ""
                    }
                });
            async function T() {
                if (!A.value) return !1;
                if (g() === !0) {
                    if (!localStorage.getItem("numberType")) return !1;
                    if (v.smsCode = "", u.value) return B.open();
                    await m()
                }
            }
            async function m() {
                w(!0), await ne(Qt(v)) && (B.close(), h.replace({
                    name: "Withdraw",
                    query: {
                        type: "Add"
                    },
                    replace: !0
                })), w(!1)
            }
            async function k() {
                const I = await ne(ht({
                    withdrawid: 6
                }));
                I && (_ = I.data.banklist, $.value = _.length > 0 ? _[0].bankName : "", v.bankId = _.length > 0 ? _[0].bankID : 0)
            }
            k();

            function P() {
                h.replace({
                    name: "Withdraw",
                    query: {
                        type: "Add"
                    }
                })
            }
            return o(v, "beneficiaryName"), (I, O) => {
                const q = x("NavBar");
                return n(), i("div", $y, [S(q, {
                    title: I.$t("addWaveType"),
                    "left-arrow": "",
                    onClickLeft: P
                }, null, 8, ["title"]), e("div", by, [e("img", {
                    src: a(F)("wallet", "hint")
                }, null, 8, ky), e("span", null, t(I.$t("WaveTip1")), 1)]), e("div", Cy, [e("div", Ty, [e("img", {
                    src: a(F)("wallet", "bank"),
                    class: "icon"
                }, null, 8, Sy), H(" " + t(I.$t("bankname")), 1)]), e("div", Iy, t($.value), 1)]), e("div", Ny, [e("div", Ay, [e("img", {
                    src: a(F)("wallet", "name"),
                    class: "icon"
                }, null, 8, Ry), H(" " + t(I.$t("name")), 1)]), he(e("input", {
                    placeholder: I.$t("phEnterName"),
                    "onUpdate:modelValue": O[0] || (O[0] = R => v.beneficiaryName = R),
                    maxlength: "50",
                    onInput: O[1] || (O[1] = R => a(l)(v, "beneficiaryName")),
                    readonly: a(s)
                }, null, 40, Dy), [
                    [Se, v.beneficiaryName, void 0, {
                        trim: !0
                    }]
                ])]), e("div", Uy, [e("div", By, [e("img", {
                    src: a(F)("wallet", "phone"),
                    class: "icon"
                }, null, 8, Wy), H(" " + t(I.$t("tel")), 1)]), he(e("input", {
                    placeholder: I.$t("phEnterPayeeTel"),
                    "onUpdate:modelValue": O[2] || (O[2] = R => v.mobileNo = R),
                    maxlength: 12,
                    type: "digit",
                    onInput: O[3] || (O[3] = R => a(c)(v, "mobileNo"))
                }, null, 40, Oy), [
                    [Se, v.mobileNo, void 0, {
                        trim: !0
                    }]
                ])]), e("div", {
                    class: ae(["addKBZ-btn", {
                        active: A.value
                    }]),
                    onClick: T
                }, t(I.$t("save")), 3)])
            }
        }
    });
const Ly = re(Py, [
        ["__scopeId", "data-v-8c64dafa"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/Withdraw/AddWave/index.vue"]
    ]),
    gb = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ly
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    My = b => (Ae("data-v-9ed9b8ef"), b = b(), Re(), b),
    Vy = {
        class: "bankCard__container"
    },
    qy = {
        key: 0,
        class: "bankCard__container-content"
    },
    jy = {
        class: "bankCard__container-content__card"
    },
    Ey = My(() => e("div", {
        class: "bankCard__container-content__card-top"
    }, null, -1)),
    Hy = {
        class: "bankCard__container-content__card-mid"
    },
    xy = {
        class: "line"
    },
    Fy = {
        class: "left"
    },
    zy = {
        class: "right"
    },
    Ky = {
        class: "line"
    },
    Gy = {
        class: "left"
    },
    Qy = {
        class: "right"
    },
    Zy = {
        class: "line"
    },
    Yy = {
        class: "left"
    },
    Xy = {
        class: "right"
    },
    Jy = {
        key: 1,
        class: "bankCard__container-default"
    },
    eg = ie({
        __name: "index",
        setup(b) {
            const {
                setLoading: s
            } = He(), c = ye(), r = at(), o = V(() => r.getWithdrawal), l = C(!1), d = V(() => r.getWithdrawal.bid.toString()), h = C([]);

            function w() {
                c.replace({
                    name: "Withdraw",
                    query: {
                        bid: d.value
                    }
                })
            }
            const u = Ne({
                bid: r.getWithdrawal.bid,
                withdrawid: r.getWithdrawal.type
            });

            function _(g) {
                c.replace({
                    name: "Withdraw",
                    query: {
                        bid: g.bid
                    }
                })
            }
            async function $() {
                l.value = !1, s(!0), await ne(es(u)) && (u.bid == o.value.bid && (o.value.bid = 0), r.setWithdrawal({ ...o.value
                }), await A()), s(!1)
            }
            const v = Ne({
                withdrawid: r.getWithdrawal.type
            });
            async function A() {
                s(!0);
                const g = await ne(ot(v));
                g && (h.value = g.data.withdrawalslist, g.data.withdrawalslist.length > 0 && r.getWithdrawal.bid == 0 || g.data.withdrawalslist.length == 1 ? o.value.bid = g.data.withdrawalslist[0].bid : g.data.withdrawalslist.length == 0 && (o.value.bid = 0), r.setWithdrawal({ ...o.value
                }), r.setWithdrawalslist(g.data.withdrawalslist)), s(!1)
            }
            return ge(async () => {
                c.currentRoute.value.query.type == "Add" ? await A() : h.value = r.getWithdrawalslist
            }), (g, U) => {
                const B = x("NavBar"),
                    T = x("van-radio"),
                    m = x("van-radio-group"),
                    k = ze("lazy");
                return n(), i("div", Vy, [S(B, {
                    title: g.$t("bankCard"),
                    "left-arrow": "",
                    onClickLeft: w
                }, null, 8, ["title"]), h.value.length > 0 ? (n(), i("div", qy, [(n(!0), i(de, null, $e(h.value, P => (n(), i("div", {
                    class: "bankCard__container-content__item",
                    key: P.bid
                }, [S(m, {
                    modelValue: d.value,
                    "onUpdate:modelValue": U[0] || (U[0] = I => d.value = I)
                }, {
                    default: J(() => [e("div", jy, [Ey, e("div", Hy, [e("div", xy, [e("div", Fy, t(g.$t("bankname")), 1), e("div", zy, t(P.bankName), 1)]), f(` <div class="line" v-if="item.beneficiaryName">
								<div class="left">{{ $t('payeename') }}</div>
								<div class="right">{{ item.beneficiaryName }}</div>
							</div> `), e("div", Ky, [e("div", Gy, t(g.$t("bankcardNo")), 1), e("div", Qy, t(P.accountNo), 1)]), e("div", Zy, [e("div", Yy, t(g.$t("tel")), 1), e("div", Xy, t(P.mobileNo), 1)])]), e("div", null, [S(T, {
                        name: `${P.bid.toString()}`,
                        "icon-size": "18px",
                        onClick: I => _(P)
                    }, {
                        default: J(() => [H(t(g.$t("select")), 1)]),
                        _: 2
                    }, 1032, ["name", "onClick"])])])]),
                    _: 2
                }, 1032, ["modelValue"])]))), 128))])) : (n(), i("div", Jy, [S(pt, null, {
                    text: J(() => [e("span", null, t(g.$t("noPaymentMethodsYet")), 1)]),
                    _: 1
                })])), S(Lt, {
                    type: 1
                }), S(Fe, {
                    show: l.value,
                    "onUpdate:show": U[2] || (U[2] = P => l.value = P),
                    onConfirm: $,
                    "show-cancel-btn": !0,
                    title: g.$t("tipCanNotRetrivedAfterDeleted"),
                    confirmText: g.$t("confirmDelete"),
                    cancelText: g.$t("cancel")
                }, {
                    content: J(() => [he(e("img", {
                        class: "dialog__content-bottom",
                        onClick: U[1] || (U[1] = P => l.value = !1)
                    }, null, 512), [
                        [k, a(ue)("main", "close")]
                    ])]),
                    _: 1
                }, 8, ["show", "title", "confirmText", "cancelText"])])
            }
        }
    });
const tg = re(eg, [
        ["__scopeId", "data-v-9ed9b8ef"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/Withdraw/BankCard/index.vue"]
    ]),
    $b = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: tg
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ag = {
        class: "item"
    },
    ng = {
        key: 0,
        class: "line"
    },
    sg = ie({
        __name: "progress",
        props: {
            state: {
                type: Number,
                required: !0
            },
            isAppealCompleted: {
                type: Boolean,
                required: !1
            }
        },
        setup(b) {
            const s = b,
                {
                    t: c
                } = be(),
                r = [{
                    title: c("c2cState11"),
                    icon: "1"
                }, {
                    title: c("c2cState13"),
                    icon: "2"
                }, {
                    title: c("c2cTip30"),
                    icon: "3"
                }, {
                    title: c("c2cState4"),
                    icon: "4"
                }],
                o = [{
                    title: c("c2cTip32"),
                    icon: "1"
                }, {
                    title: c("c2cTip33"),
                    icon: "2"
                }, {
                    title: c("c2cState4"),
                    icon: "3"
                }],
                l = [{
                    title: c("c2cTip32"),
                    icon: "1"
                }, {
                    title: c("c2cTip33"),
                    icon: "2"
                }, {
                    title: c("c2cTip9"),
                    icon: "4"
                }],
                d = V(() => [1, 9, 11, 13].includes(s.state) ? r : [3].includes(s.state) ? o : [5].includes(s.state) ? l : s.state == 4 ? s.isAppealCompleted ? o : r : []);

            function h(w) {
                let u = [];
                switch (s.state) {
                    case 1:
                    case 9:
                        u = [!0, !0, !0, !1];
                        break;
                    case 4:
                        u = [!0, !0, !0, !0];
                        break;
                    case 11:
                        u = [!0, !1, !1, !1];
                        break;
                    case 13:
                        u = [!0, !0, !1, !1];
                        break;
                    case 3:
                        u = [!0, !0, !1];
                        break;
                    case 5:
                        u = [!0, !0, !0];
                        break
                }
                return u[w]
            }
            return (w, u) => d.value.length > 0 ? (n(), i("div", {
                key: 0,
                class: ae(["progress", [`state_${w.state}`, {
                    isAppealCompleted: w.isAppealCompleted
                }]])
            }, [(n(!0), i(de, null, $e(d.value, (_, $) => (n(), i(de, null, [e("div", ag, [e("span", {
                class: ae(`icon${h($)?_.icon+"_a":_.icon}`)
            }, null, 2), e("h6", null, t(_.title), 1)]), $ < d.value.length - 1 ? (n(), i("div", ng)) : f("v-if", !0)], 64))), 256))], 2)) : f("v-if", !0)
        }
    });
const Ua = re(sg, [
        ["__scopeId", "data-v-90f50022"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/Withdraw/progress.vue"]
    ]),
    lg = b => (Ae("data-v-ced8750d"), b = b(), Re(), b),
    og = {
        class: "c2cDetail__CO"
    },
    ig = {
        class: "top"
    },
    rg = {
        class: "container"
    },
    cg = {
        key: 0,
        class: "time"
    },
    dg = {
        key: 1,
        class: "time2"
    },
    ug = {
        class: "head"
    },
    vg = {
        class: "tip2"
    },
    _g = {
        class: "tip2"
    },
    pg = {
        key: 0
    },
    hg = {
        key: 0,
        class: "operate"
    },
    mg = {
        class: "order-q"
    },
    fg = {
        class: "y"
    },
    wg = {
        class: "order-q"
    },
    yg = {
        class: "b"
    },
    gg = lg(() => e("div", {
        class: "line"
    }, null, -1)),
    $g = {
        class: "tip"
    },
    bg = ie({
        __name: "c2cDetailOther",
        props: {
            OrderDetail: {
                type: null,
                required: !0
            },
            orderNo: {
                type: String,
                required: !0
            }
        },
        emits: ["update:OrderDetail", "update:orderNo"],
        setup(b, {
            emit: s
        }) {
            const c = b,
                r = ye(),
                {
                    t: o
                } = be(),
                {
                    OrderDetail: l,
                    orderNo: d
                } = ua(c, s),
                h = {
                    2: {
                        title: o("c2cState11"),
                        tip1: o("c2cWTip1"),
                        tip2: o("c2cWTip6"),
                        tip3: o("c2cTip31")
                    },
                    11: {
                        title: o("c2cState11"),
                        tip1: o("c2cWTip1"),
                        tip2: o("c2cWTip2"),
                        tip3: o("c2cWTip3")
                    },
                    12: {
                        title: o("c2cState11"),
                        tip1: o("c2cWTip1"),
                        tip2: o("c2cWTip2"),
                        tip3: o("c2cWTip3")
                    }
                },
                w = V(() => h[l.value.state]),
                u = () => {
                    r.go(-1)
                },
                _ = C("00:00"),
                $ = C(0),
                v = C(null),
                A = V(() => [11, 12].includes(l.value.state));
            je(() => l.value, I => {
                g(I)
            }, {
                immediate: !0
            });

            function g(I) {
                if (!A.value) return !1;
                const O = I.auditEndTime.replace(/-/g, "/"),
                    q = I.serviceTime.replace(/-/g, "/");
                $.value = new Date(q).getTime() - new Date(O).getTime(), clearInterval(v.value), T()
            }
            const U = I => {
                    const O = Math.floor(I / 36e5),
                        q = Math.floor((I - O * 36e5) / 6e4),
                        R = Math.floor((I - O * 36e5 - q * 6e4) / 1e3);
                    return `${O?O.toString().padStart(2,"0")+":":""}${q.toString().padStart(2,"0")}:${R.toString().padStart(2,"0")}`
                },
                B = C(5);

            function T() {
                v.value = setInterval(() => {
                    B.value--, $.value += 1e3, _.value = U($.value), B.value == 0 && (m(l.value.orderNo), B.value = 5)
                }, 1e3)
            }
            const m = async I => {
                const O = await ne(ya({
                    orderNo: I
                }));
                O && (O.data.state == 2 && clearInterval(v.value), l.value = O.data)
            };
            async function k() {
                await ne(ts({
                    orderNo: l.value.orderNo
                })) && m(l.value.orderNo)
            }

            function P() {
                r.push({
                    name: "Withdraw-c2cCancelWithdrawal",
                    query: {
                        orderAmount: l.value.orderAmount,
                        sellerAccountNo: l.value.sellerAccountNo,
                        createTime: l.value.createTime,
                        orderNo: l.value.orderNo
                    }
                })
            }
            return lt(() => {
                clearInterval(v.value)
            }), (I, O) => {
                var R;
                const q = x("NavBar");
                return n(), i("div", og, [e("div", ig, [S(q, {
                    title: w.value.title,
                    "left-arrow": "",
                    onClickLeft: u,
                    backgroundColor: "transparent"
                }, null, 8, ["title"]), f(" 进度条 "), S(Ua, {
                    state: (R = a(l)) == null ? void 0 : R.state
                }, null, 8, ["state"]), e("div", rg, [A.value ? (n(), i("div", cg, [e("p", null, t(w.value.title), 1), e("div", null, [e("span", null, t(_.value), 1)])])) : f("v-if", !0), A.value ? f("v-if", !0) : (n(), i("div", dg, t(I.$t("c2cState2")), 1))]), e("div", ug, [e("div", vg, t(w.value.tip2), 1), e("div", _g, [H(t(w.value.tip3), 1), A.value ? (n(), i("span", pg, t(a(l).matchTimeMinutes || 5) + t(I.$t("minute")), 1)) : f("v-if", !0)])]), A.value ? f("v-if", !0) : (n(), i("div", hg, [e("div", {
                    class: "CancelW",
                    onClick: P
                }, t(I.$t("concelOrder")), 1), e("div", {
                    class: "uAmount",
                    onClick: k
                }, t(I.$t("continueM")), 1)]))]), e("div", {
                    class: ae(["order", ["bgc" + w.value.background]])
                }, [e("div", mg, [e("span", null, t(I.$t("withdrawalA")), 1), e("span", fg, t(a(ve)(a(l).orderAmount)), 1)]), e("div", wg, [e("span", null, "UPI " + t(I.$t("account")), 1), e("span", yg, t(a(l).sellerAccountNo), 1)]), e("div", {
                    class: "order-id",
                    onClick: O[0] || (O[0] = Z => a(ke)(a(l).orderNo))
                }, [e("span", null, t(a(bt)(a(l).createTime, "yyyy-MM-dd")), 1), H(t(a(l).orderNo), 1)]), gg, e("div", $g, t(I.$t("c2cWTip4")), 1)], 2)])
            }
        }
    });
const kg = re(bg, [
        ["__scopeId", "data-v-ced8750d"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Wallet/Withdraw/c2cDetailOther.vue"]
    ]),
    Xt = b => (Ae("data-v-0f202033"), b = b(), Re(), b),
    Cg = {
        key: 0,
        class: "c2cDetail__C"
    },
    Tg = {
        class: "title"
    },
    Sg = {
        key: 0
    },
    Ig = {
        class: "tip1"
    },
    Ng = {
        key: 0,
        class: "tip2"
    },
    Ag = {
        key: 1
    },
    Rg = {
        key: 0,
        class: "accountArry"
    },
    Dg = {
        class: "con"
    },
    Ug = {
        class: "order"
    },
    Bg = {
        class: "order-h"
    },
    Wg = {
        class: "order-q y"
    },
    Og = {
        key: 0,
        class: "order-q y"
    },
    Pg = {
        key: 1,
        class: "order-q orange"
    },
    Lg = {
        class: "order-t"
    },
    Mg = {
        key: 2,
        class: "order-t"
    },
    Vg = Xt(() => e("div", {
        class: "line"
    }, null, -1)),
    qg = Xt(() => e("span", null, "UTR", -1)),
    jg = {
        key: 4,
        class: "order-tl"
    },
    Eg = {
        key: 0,
        class: "upi"
    },
    Hg = {
        class: "upi-h"
    },
    xg = Xt(() => e("span", null, "UPI", -1)),
    Fg = {
        key: 1,
        class: "upi img"
    },
    zg = {
        class: "upi-h"
    },
    Kg = {
        class: "imgBox"
    },
    Gg = ["onClick"],
    Qg = {
        key: 2,
        class: "img"
    },
    Zg = {
        class: "imgBox"
    },
    Yg = ["onClick"],
    Xg = {
        key: 3,
        class: "img video"
    },
    Jg = {
        class: "v",
        controls: ""
    },
    e$ = ["src"],
    t$ = ["src"],
    a$ = ["src"],
    n$ = ie({
        __name: "index",
        setup(b) {
            var pe;
            const {
                t: s
            } = be(), c = ye(), r = tt(), o = We(), l = {
                0: {
                    title: s("c2cState0"),
                    tip1: s("c2cTip1"),
                    tip2: s("tipPlaWaitPaciently"),
                    icon: "0",
                    background: 0
                },
                1: {
                    title: s("c2cState1"),
                    tip1: s("c2cTip2"),
                    tip2: s("c2cTip3"),
                    icon: "0",
                    background: 1
                },
                2: {
                    title: s("c2cState8"),
                    tip1: s("c2cTip4"),
                    tip2: s("tipPlaWaitPaciently"),
                    icon: "6",
                    background: 8
                },
                3: {
                    title: s("c2cState3"),
                    tip1: s("c2cTip5"),
                    tip2: s("c2cTip6"),
                    icon: "1",
                    background: 3
                },
                4: {
                    title: s("completed"),
                    tip1: s("c2cTip7"),
                    tip2: s("c2cTip8"),
                    icon: "2",
                    background: 4
                },
                5: {
                    title: s("c2cTip9"),
                    tip1: s("c2cTip10"),
                    tip2: s("c2cTip11"),
                    icon: "3",
                    background: 5
                },
                6: {
                    title: s("cancelled"),
                    tip1: "*****",
                    tip2: "",
                    icon: "4",
                    background: 6
                },
                7: {
                    title: s("c2cTip12"),
                    tip1: s("c2cTip1"),
                    tip2: "",
                    icon: "5",
                    background: 7
                },
                8: {
                    title: s("withdrawState1"),
                    tip1: s("c2cTip4"),
                    tip2: s("tipPlaWaitPaciently"),
                    icon: "6",
                    background: 8
                },
                9: {
                    title: s("rechargeState1"),
                    tip1: s("c2cTip13"),
                    tip2: s("c2cTip14"),
                    icon: "7",
                    background: 9
                },
                10: {
                    title: s("c2cState10"),
                    tip1: s("c2cTip21"),
                    tip2: s("c2cTip22"),
                    icon: "8",
                    background: 10
                },
                11: {
                    title: s("c2cState11"),
                    tip1: s("c2cWTip1"),
                    tip2: s("c2cWTip2"),
                    tip3: s("c2cWTip3"),
                    icon: "8",
                    background: 11
                },
                12: {
                    title: s("c2cState11"),
                    tip1: s("c2cTip21"),
                    tip2: s("c2cTip22"),
                    icon: "8",
                    background: 10
                },
                13: {
                    title: s("c2cState13"),
                    tip1: s("c2cTip24"),
                    icon: "0",
                    background: 11
                },
                14: {
                    title: s("c2cState14"),
                    tip1: s("c2cTip46"),
                    tip2: s("c2cTip33"),
                    icon: "14",
                    background: 11
                }
            }, d = C(0), h = C("00:00"), w = C(null), u = C(null), _ = C({
                id: 0,
                orderNo: "",
                type: 0,
                withdrawName: "",
                createTime: "",
                orderAmount: 0,
                realAmount: 0,
                discountAmount: 0,
                serviceAmount: 0,
                state: Number(((pe = r.query) == null ? void 0 : pe.state) || 0),
                cancelReasonId: 0,
                reasonText: "",
                remark: "",
                transactionNo: "",
                sellerAccountNo: "",
                rechargeFinishTime: ""
            }), $ = C(""), v = V(() => l[_.value.state]), A = V(() => _.value.state == 10), g = V(() => [9].includes(_.value.state)), U = V(() => [1, 9, 3].includes(_.value.state)), B = V(() => [2, 11, 12].includes(_.value.state)), T = V(() => [5, 6, 7, 14].includes(_.value.state));
            je(() => _.value.state, G => {
                I()
            }, {
                deep: !0
            });
            const m = () => {
                c.back()
            };

            function k(G, W) {
                if (!G) return;
                let L;
                return W ? L = JSON.parse(G).filter(we => we.fileType == W) : L = JSON.parse(G), L.length == 0 ? !1 : L.map(we => (we.fileUrl = o.ossUrl + "/" + we.fileUrl, we))
            }
            const P = async G => {
                const W = await ne(ya({
                    orderNo: G
                }));
                W && (_.value = W.data)
            };

            function I() {
                var G;
                if ([1, 13].includes(_.value.state)) {
                    const W = (G = _.value) == null ? void 0 : G.serviceTime.replace(/-/g, "/");
                    if (_.value.state == 1) {
                        const L = _.value.confrimEndTime.replace(/-/g, "/");
                        d.value = new Date(L).getTime() - new Date(W).getTime()
                    } else if (_.value.state == 13) {
                        const L = _.value.matchOutTime.replace(/-/g, "/");
                        d.value = new Date(L).getTime() - new Date(W).getTime()
                    }
                    clearInterval(w.value), M()
                } else clearInterval(w.value);
                (_.value.state === 7 || _.value.state === 6) && (l[_.value.state].tip1 = _.value.reasonText || "", l[_.value.state].tip2 = _.value.remark || ""), _.value.state === 0 ? (clearInterval(u.value), j()) : clearInterval(u.value), _.value.state === 3 && y()
            }
            const O = async G => {
                    await ne(as({
                        orderNo: G
                    })), P(G)
                },
                q = async G => {
                    await ne(ns({
                        orderNo: G
                    })), P(G)
                },
                R = G => {
                    const W = Math.floor(G / 36e5),
                        L = Math.floor((G - W * 36e5) / 6e4),
                        we = Math.floor((G - W * 36e5 - L * 6e4) / 1e3);
                    return `${W?W.toString().padStart(2,"0")+":":""}${L.toString().padStart(2,"0")}:${we.toString().padStart(2,"0")}`
                },
                Z = C(5);

            function M() {
                w.value = setInterval(() => {
                    Z.value--, d.value > 0 ? (d.value -= 1e3, h.value = R(d.value)) : h.value = "00:00", Z.value == 0 && (P($.value), Z.value = 5)
                }, 1e3)
            }

            function j() {
                u.value = setInterval(() => {
                    P($.value)
                }, 5e3)
            }
            const N = () => {
                    Tawk_API.toggle(), window.Tawk_API.setAttributes({
                        order: $.value,
                        store: "withdraw"
                    }, function(G) {})
                },
                y = () => {
                    let G = "https://embed.tawk.to/6452138631ebfa0fe7fbb175/1hb0ug9qm";
                    if (!document.getElementById("tawk-chatjs")) {
                        var W = document.createElement("script"),
                            L = document.getElementsByTagName("script")[0];
                        W.async = !0, W.src = G, W.charset = "UTF-8", W.setAttribute("crossorigin", "*"), W.id = "tawk-chatjs", L.parentNode.insertBefore(W, L)
                    }
                };

            function E() {
                c.push({
                    name: "Withdraw-c2cWrongAmount",
                    query: {
                        orderNo: $.value
                    }
                })
            }

            function ee(G) {
                Et({
                    images: [G],
                    closeable: !0
                })
            }
            return ge(() => {
                var G, W;
                $.value = localStorage.getItem("c2cOrderNo") || ((W = (G = r.query) == null ? void 0 : G.order) == null ? void 0 : W.toString()) || "", P($.value)
            }), $t(() => {}), lt(() => {
                clearInterval(w.value), clearInterval(u.value)
            }), (G, W) => {
                var we, le, X, oe, Q, Oe, Ce, Pe, qe, Be, Me, Y, K, ce, se;
                const L = x("NavBar");
                return B.value ? (n(), i(de, {
                    key: 1
                }, [_.value.orderNo != "" ? (n(), Ie(kg, {
                    key: 0,
                    orderNo: $.value,
                    "onUpdate:orderNo": W[7] || (W[7] = me => $.value = me),
                    OrderDetail: _.value,
                    "onUpdate:OrderDetail": W[8] || (W[8] = me => _.value = me)
                }, null, 8, ["orderNo", "OrderDetail"])) : f("v-if", !0)], 64)) : (n(), i("div", Cg, [e("div", {
                    class: ae(["header", ["bgc" + v.value.background]])
                }, [S(L, {
                    title: "",
                    "left-arrow": "",
                    onClickLeft: m,
                    backgroundColor: "transparent"
                }), e("div", {
                    class: ae(["head", ["hicon" + v.value.icon]])
                }, [e("div", Tg, [H(t(v.value.title) + " ", 1), [1, 13].includes(_.value.state) ? (n(), i("span", Sg, t(h.value), 1)) : f("v-if", !0)]), e("div", Ig, t(v.value.tip1), 1), v.value.tip2 ? (n(), i("div", Ng, t(v.value.tip2), 1)) : f("v-if", !0), U.value ? (n(), i("div", Ag, t(G.$t("c2cTip23")), 1)) : f("v-if", !0)], 2), U.value ? (n(), i("div", Rg, [e("div", {
                    class: "account btn",
                    onClick: W[0] || (W[0] = me => O(_.value.orderNo))
                }, t(G.$t("confirmTheAccount")), 1), g.value ? (n(), i("div", {
                    key: 0,
                    class: "appeal btn",
                    onClick: W[1] || (W[1] = me => q(_.value.orderNo))
                }, t(G.$t("appeal")), 1)) : f("v-if", !0), _.value.state == 3 ? (n(), i("div", {
                    key: 1,
                    class: "appeal btn",
                    onClick: W[2] || (W[2] = me => N())
                }, t(G.$t("AppealsAdmin")), 1)) : f("v-if", !0), _.value.state == 1 ? (n(), i("div", {
                    key: 2,
                    class: "wrong btn",
                    onClick: W[3] || (W[3] = me => E())
                }, t(G.$t("c2cState14")), 1)) : f("v-if", !0)])) : f("v-if", !0)], 2), e("div", Dg, [f(" 进度条 "), S(Ua, {
                    state: (we = _.value) == null ? void 0 : we.state,
                    isAppealCompleted: (le = _.value) == null ? void 0 : le.isAppealCompleted
                }, null, 8, ["state", "isAppealCompleted"]), e("div", Ug, [e("div", Bg, "New UPI " + t(G.$t("withdraw")), 1), e("div", Wg, [e("span", null, t(G.$t("orderAmount")), 1), H(t(a(ve)(_.value.orderAmount)), 1)]), [4, 14].includes(_.value.state) ? (n(), i("div", Og, [e("span", null, t(G.$t("actualAmount")), 1), H(t(a(ve)(_.value.realAmount)), 1)])) : f("v-if", !0), T.value ? f("v-if", !0) : (n(), i("div", Pg, [e("span", null, t(G.$t("award")), 1), H(t(a(ve)(_.value.discountAmount)), 1)])), e("div", Lg, [e("span", null, t(G.$t("orderTime")), 1), H(t(_.value.createTime), 1)]), _.value.state == 14 ? (n(), i("div", Mg, [e("span", null, t(G.$t("c2cTip47")), 1), H(t(_.value.lastUpdateTime), 1)])) : f("v-if", !0), Vg, A.value ? f("v-if", !0) : (n(), i("div", {
                    key: 3,
                    class: "order-id",
                    onClick: W[4] || (W[4] = me => a(ke)(_.value.transactionNo))
                }, [qg, H(t(_.value.transactionNo), 1)])), e("div", {
                    class: "order-id",
                    onClick: W[5] || (W[5] = me => a(ke)(_.value.orderNo))
                }, [e("span", null, t(G.$t("orderNo")), 1), H(t(_.value.orderNo), 1)]), A.value ? f("v-if", !0) : (n(), i("div", jg, [e("span", null, t(G.$t("PaymentTime")), 1), H(t(_.value.rechargeFinishTime), 1)]))]), A.value ? f("v-if", !0) : (n(), i("div", Eg, [e("div", Hg, t(G.$t("information")), 1), e("div", {
                    class: "upi-id",
                    onClick: W[6] || (W[6] = me => a(ke)(_.value.sellerAccountNo))
                }, [xg, H(t(_.value.sellerAccountNo), 1)])])), [5, 1, 9, 3, 4, 6].includes(_.value.state) && ((X = _.value) != null && X.rechargeOssUrls) ? (n(), i("div", Fg, [e("div", zg, t(G.$t("c2cTip50")), 1), e("div", Kg, [(n(!0), i(de, null, $e(k((oe = _.value) == null ? void 0 : oe.rechargeOssUrls), (me, Ve) => (n(), i("div", {
                    class: "imgD",
                    key: Ve,
                    style: ut(`background-image: url('${me==null?void 0:me.fileUrl}');`),
                    onClick: Ge => ee(me == null ? void 0 : me.fileUrl)
                }, null, 12, Gg))), 128))])])) : f("v-if", !0), ((Q = _.value) == null ? void 0 : Q.state) == 14 && ((Oe = _.value) != null && Oe.ossUrls) ? (n(), i("div", Qg, [e("h1", null, t(G.$t("c2cTip48")), 1), e("div", Zg, [(n(!0), i(de, null, $e(k((Ce = _.value) == null ? void 0 : Ce.ossUrls, 1), (me, Ve) => (n(), i("div", {
                    class: "imgD",
                    key: Ve,
                    style: ut(`background-image: url('${me==null?void 0:me.fileUrl}');`),
                    onClick: Ge => ee(me == null ? void 0 : me.fileUrl)
                }, null, 12, Yg))), 128))])])) : f("v-if", !0), ((Pe = _.value) == null ? void 0 : Pe.state) == 14 && k((qe = _.value) == null ? void 0 : qe.ossUrls, 2) ? (n(), i("div", Xg, [e("h1", null, t(G.$t("c2cTip49")), 1), e("video", Jg, [e("source", {
                    src: (Me = k((Be = _.value) == null ? void 0 : Be.ossUrls, 2)[0]) == null ? void 0 : Me.fileUrl,
                    type: "video/ogg"
                }, null, 8, e$), e("source", {
                    src: (K = k((Y = _.value) == null ? void 0 : Y.ossUrls, 2)[0]) == null ? void 0 : K.fileUrl,
                    type: "video/mp4"
                }, null, 8, t$), e("source", {
                    src: (se = k((ce = _.value) == null ? void 0 : ce.ossUrls, 2)[0]) == null ? void 0 : se.fileUrl,
                    type: "video/webm"
                }, null, 8, a$)])])) : f("v-if", !0)])]))
            }
        }
    });
const s$ = re(n$, [
        ["__scopeId", "data-v-0f202033"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/Withdraw/C2cDetail/index.vue"]
    ]),
    bb = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: s$
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    l$ = {
        class: "bankCard__container"
    },
    o$ = {
        key: 0,
        class: "bankCard__container-content"
    },
    i$ = {
        class: "bankCard__container-content__card"
    },
    r$ = {
        class: "bankCard__container-content__card-top ar-1px-b"
    },
    c$ = ["src"],
    d$ = {
        class: "bankCard__container-content__card-mid"
    },
    u$ = {
        class: "line"
    },
    v$ = {
        class: "line"
    },
    _$ = {
        class: "line"
    },
    p$ = {
        key: 1,
        class: "bankCard__container-default"
    },
    h$ = ie({
        __name: "index",
        setup(b) {
            const {
                setLoading: s
            } = He(), c = ye();
            tt();
            const r = at(),
                o = V(() => r.getWithdrawal);
            C(!1);
            const l = V(() => r.getWithdrawal.bid.toString()),
                d = C([]);

            function h() {
                c.replace({
                    name: "Withdraw",
                    query: {
                        bid: l.value
                    }
                })
            }
            const w = Ne({
                bid: r.getWithdrawal.bid,
                withdrawid: 5
            });

            function u(v) {
                c.replace({
                    name: "Withdraw",
                    query: {
                        bid: v.bid
                    }
                })
            }
            const _ = Ne({
                withdrawid: 5
            });
            async function $() {
                s(!0);
                const v = await ne(ot(_));
                v && (d.value = v.data.withdrawalslist, v.data.withdrawalslist.length > 0 && r.getWithdrawal.bid == 0 || v.data.withdrawalslist.length == 1 ? o.value.bid = v.data.withdrawalslist[0].bid : v.data.withdrawalslist.length == 0 && (o.value.bid = 0), r.setWithdrawal({ ...o.value
                }), r.setWithdrawalslist(v.data.withdrawalslist)), s(!1)
            }
            return ge(async () => {
                c.currentRoute.value.query.type == "Add" ? await $() : d.value = r.getWithdrawalslist
            }), (v, A) => {
                const g = x("NavBar"),
                    U = x("van-radio"),
                    B = x("van-radio-group");
                return n(), i("div", l$, [S(g, {
                    title: v.$t("paymentMethod"),
                    "left-arrow": "",
                    onClickLeft: h
                }, null, 8, ["title"]), d.value.length > 0 ? (n(), i("div", o$, [(n(!0), i(de, null, $e(d.value, (T, m) => (n(), i("div", {
                    class: "bankCard__container-content__item",
                    key: T.bid
                }, [S(B, {
                    modelValue: l.value,
                    "onUpdate:modelValue": A[0] || (A[0] = k => l.value = k)
                }, {
                    default: J(() => [e("div", i$, [e("div", r$, [e("div", null, [e("img", {
                        src: a(F)("wallet/withdrawType", `${w.withdrawid}`)
                    }, null, 8, c$), H(" " + t(v.$t("paymentMethodOfPix")), 1)]), e("div", null, [S(U, {
                        name: `${T.bid.toString()}`,
                        "icon-size": "22px",
                        onClick: k => u(T)
                    }, null, 8, ["name", "onClick"])])]), e("div", d$, [e("div", u$, t(T.beneficiaryName), 1), e("div", v$, t(T.accountNo), 1), e("div", _$, t(T.bankName), 1)]), f(` <div class="delete" @click="onShowDeleteDialog(item)">
							<van-icon name="delete" color="rgba(238, 54, 37, 1)" size="20" />
							{{ $t('delete') }}
						</div> `)])]),
                    _: 2
                }, 1032, ["modelValue"])]))), 128))])) : (n(), i("div", p$, [S(pt, null, {
                    text: J(() => [e("span", null, t(v.$t("noPaymentMethodsYet")), 1)]),
                    _: 1
                })])), S(Lt, {
                    type: 5
                }), f(` <Dialog
			v-model:show="delelteDialogShow"
			@confirm="onDelete"
			:show-cancel-btn="true"
			:title="$t('tipCanNotRetrivedAfterDeleted')"
			:confirmText="$t('confirmDelete')"
			:cancelText="$t('cancel')"
		>
			<template #header>
				<img v-lazy="getIconsPublic('common', 'warn')" />
			</template>
			<template #content>
				<img v-lazy="getIconsPublic('common', 'closeGrey')" class="dialog__content-bottom" @click="delelteDialogShow = false" />
			</template>
		</Dialog> `)])
            }
        }
    });
const m$ = re(h$, [
        ["__scopeId", "data-v-abf3326c"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/Withdraw/PIX/index.vue"]
    ]),
    kb = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: m$
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    f$ = {
        class: "type4_C"
    },
    w$ = {
        class: "type4_C-list"
    },
    y$ = {
        class: "header-title"
    },
    g$ = ["onClick"],
    $$ = {
        class: "type4-body"
    },
    b$ = {
        class: "type4-body-name"
    },
    k$ = {
        class: "type4-body-id"
    },
    C$ = {
        key: 1,
        class: "noData"
    },
    T$ = {
        class: "type4_C-addbtn"
    },
    S$ = ie({
        __name: "index",
        setup(b) {
            const s = ye(),
                c = tt(),
                r = s.currentRoute.value.query.Type4name,
                o = C([]),
                l = C(null),
                d = () => {
                    const $ = o.value.find(v => {
                        v.bid == l.value
                    }) ? l.value : 0;
                    s.replace({
                        name: "Withdraw",
                        query: {
                            bid: $,
                            type: 4
                        }
                    })
                },
                h = _ => {
                    s.replace({
                        name: "Withdraw",
                        query: {
                            bid: _,
                            type: 4
                        }
                    })
                },
                w = async () => {
                    s.replace({
                        name: "Withdraw-AddType4",
                        query: {
                            Type4name: r
                        }
                    })
                },
                u = async () => {
                    var $;
                    const _ = await ne(ot({
                        withdrawid: 4
                    }));
                    _ && (o.value = (($ = _.data) == null ? void 0 : $.withdrawalslist) || [])
                };
            return ge(() => {
                l.value = c.query.bid || 0, u()
            }), (_, $) => {
                const v = x("NavBar"),
                    A = ze("throttle-click");
                return n(), i("div", f$, [S(v, {
                    title: a(r) + _.$t("paymentMethod"),
                    "left-arrow": "",
                    onClickLeft: d
                }, null, 8, ["title"]), e("div", w$, [o.value.length ? (n(!0), i(de, {
                    key: 0
                }, $e(o.value, (g, U) => (n(), i("div", {
                    key: U,
                    class: "type4_C-item"
                }, [e("div", {
                    class: ae(["header", `${g.walletName}`])
                }, [e("div", y$, t(g.walletName), 1), e("div", {
                    class: ae(["select-btn", {
                        isSelect: g.bid == l.value
                    }]),
                    onClick: B => h(g.bid)
                }, null, 10, g$)], 2), e("div", $$, [e("div", b$, t(g.beneficiaryName), 1), e("div", k$, t(g.mobileNO), 1)])]))), 128)) : he((n(), i("div", C$, [H(t(_.$t("upiAddPaymentMethod")), 1)])), [
                    [A, {
                        handler: w,
                        wait: 1e3
                    }]
                ])]), he((n(), i("div", T$, [H(t(_.$t("upiAddPaymentMethod")), 1)])), [
                    [A, {
                        handler: w,
                        wait: 1e3
                    }]
                ])])
            }
        }
    });
const I$ = re(S$, [
        ["__scopeId", "data-v-8da75fee"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/Withdraw/Type4/index.vue"]
    ]),
    Cb = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: I$
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    N$ = {
        class: "USDT__container"
    },
    A$ = {
        key: 0,
        class: "USDT__container-content"
    },
    R$ = {
        class: "USDT__container-content__card"
    },
    D$ = {
        class: "USDT__container-content__card-top"
    },
    U$ = ["src"],
    B$ = ["src"],
    W$ = {
        class: "USDT__container-content__card-mid ar-1px-b"
    },
    O$ = {
        key: 1,
        class: "USDT__container-default"
    },
    P$ = ie({
        __name: "index",
        setup(b) {
            const {
                setLoading: s
            } = He(), {
                getUserInfo: c
            } = Ot(), r = Wt();
            c({
                signature: r.token
            });
            const o = ye(),
                l = at(),
                d = l.getWithdrawal;
            C(!1);
            const h = V(() => l.getWithdrawal.bid.toString()),
                w = C([]);
            Ne({
                bid: l.getWithdrawal.bid,
                withdrawid: l.getWithdrawal.type
            });

            function u(A) {
                o.replace({
                    name: "Withdraw",
                    query: {
                        bid: A.bid
                    }
                })
            }
            const _ = Ne({
                withdrawid: l.getWithdrawal.type
            });
            async function $() {
                s(!0);
                const A = await ne(ot(_));
                A && (w.value = A.data.withdrawalslist, A.data.withdrawalslist.length > 0 && l.getWithdrawal.bid == 0 || A.data.withdrawalslist.length == 1 ? d.bid = A.data.withdrawalslist[0].bid : A.data.withdrawalslist.length == 0 && (d.bid = 0), l.setWithdrawal({ ...d
                }), l.setWithdrawalslist(A.data.withdrawalslist)), s(!1)
            }
            ge(async () => {
                o.currentRoute.value.query.type == "Add" ? await $() : w.value = l.getWithdrawalslist
            });

            function v() {
                o.replace({
                    name: "Withdraw",
                    query: {
                        bid: h.value
                    }
                })
            }
            return (A, g) => {
                const U = x("NavBar"),
                    B = x("van-radio"),
                    T = x("van-radio-group");
                return n(), i("div", N$, [S(U, {
                    title: A.$t("usdtAddr"),
                    "left-arrow": "",
                    onClickLeft: v
                }, null, 8, ["title"]), w.value.length > 0 ? (n(), i("div", A$, [(n(!0), i(de, null, $e(w.value, m => (n(), i("div", {
                    class: "USDT__container-content__item",
                    key: m.bid
                }, [S(T, {
                    modelValue: h.value,
                    "onUpdate:modelValue": g[0] || (g[0] = k => h.value = k)
                }, {
                    default: J(() => [e("div", R$, [e("div", D$, [e("img", {
                        src: a(ue)("wallet/withdraw/USDT", "bankHeader")
                    }, null, 8, U$), e("img", {
                        src: a(ue)("wallet/withdraw/USDT", "usdtLogo3")
                    }, null, 8, B$)]), e("div", W$, [e("span", null, t(m.accountNo), 1), e("span", null, t(m.usdtRemarkName), 1)]), e("div", null, [f("这是假的"), S(B, {
                        name: `${m.bid.toString()}`,
                        "icon-size": "18px",
                        onClick: k => u(m)
                    }, {
                        default: J(() => [H(t(A.$t("select")), 1)]),
                        _: 2
                    }, 1032, ["name", "onClick"]), f(` <div @click="onShowDeleteDialog(item)">
								<img :src="getIcons('wallet/withdraw', 'delete')" />{{ $t('delete') }}
							</div> `)])])]),
                    _: 2
                }, 1032, ["modelValue"])]))), 128))])) : (n(), i("div", O$, [S(pt, null, {
                    text: J(() => [e("span", null, t(A.$t("noPaymentMethodsYet")), 1)]),
                    _: 1
                })])), S(Lt, {
                    type: 3
                }), f(` <Dialog
			v-model:show="delelteDialogShow"
			@confirm="onDelete"
			:show-cancel-btn="true"
			:title="$t('tipCanNotRetrivedAfterDeleted')"
			:confirmText="$t('confirmDelete')"
			:cancelText="$t('cancel')"
		>
			<template #content>
				<img v-lazy="getIcons('main', 'close')" class="dialog__content-bottom" @click="delelteDialogShow = false" />
			</template>
		</Dialog> `)])
            }
        }
    });
const L$ = re(P$, [
        ["__scopeId", "data-v-1cef303f"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/Withdraw/USDT/index.vue"]
    ]),
    Tb = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: L$
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    M$ = {
        class: "upi_C"
    },
    V$ = {
        class: "upi_C-list"
    },
    q$ = {
        class: "header"
    },
    j$ = {
        class: "header-title"
    },
    E$ = ["onClick"],
    H$ = {
        class: "upi-body"
    },
    x$ = {
        class: "upi-body-name"
    },
    F$ = {
        class: "upi-body-id"
    },
    z$ = {
        class: "upi-body-id"
    },
    K$ = {
        class: "upi_C-addbtn"
    },
    G$ = ie({
        __name: "index",
        setup(b) {
            const s = ye(),
                c = tt(),
                r = C([]),
                o = C(null),
                l = () => {
                    const _ = r.value.find($ => {
                        $.bid == o.value
                    }) ? o.value : 0;
                    s.replace({
                        name: "Withdraw",
                        query: {
                            bid: _,
                            type: 20
                        }
                    })
                },
                d = u => {
                    s.replace({
                        name: "Withdraw",
                        query: {
                            bid: u,
                            type: 20
                        }
                    })
                },
                h = async () => {
                    s.replace({
                        name: "Withdraw-AddUpi"
                    })
                },
                w = async () => {
                    var _;
                    const u = await ne(ot({
                        withdrawid: 20
                    }));
                    u && (r.value = ((_ = u.data) == null ? void 0 : _.withdrawalslist) || [])
                };
            return ge(() => {
                o.value = c.query.bid || 0, w()
            }), (u, _) => {
                const $ = x("NavBar"),
                    v = ze("throttle-click");
                return n(), i("div", M$, [S($, {
                    title: u.$t("upiPaymentMethod"),
                    "left-arrow": "",
                    onClickLeft: l
                }, null, 8, ["title"]), e("div", V$, [r.value.length ? (n(!0), i(de, {
                    key: 0
                }, $e(r.value, (A, g) => (n(), i("div", {
                    key: g,
                    class: "upi_C-item"
                }, [e("div", q$, [e("div", j$, t(u.$t("upiCollectMoney")), 1), e("div", {
                    class: ae(["select-btn", {
                        isSelect: A.bid == o.value
                    }]),
                    onClick: U => d(A.bid)
                }, null, 10, E$)]), e("div", H$, [e("div", x$, t(A.upiName), 1), e("div", F$, t(A.upiAccount), 1), e("div", z$, t(A.mobileNo), 1)])]))), 128)) : (n(), Ie(pt, {
                    key: 1
                }, {
                    text: J(() => [e("span", null, t(u.$t("noPaymentMethodsYet")), 1)]),
                    _: 1
                }))]), he((n(), i("div", K$, [H(t(u.$t("upiAddPaymentMethod")), 1)])), [
                    [v, {
                        handler: h,
                        wait: 1e3
                    }]
                ])])
            }
        }
    });
const Q$ = re(G$, [
        ["__scopeId", "data-v-68a41569"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/Withdraw/Upi/index.vue"]
    ]),
    Sb = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Q$
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Z$ = {
        class: "cancelW"
    },
    Y$ = {
        class: "orderInfo"
    },
    X$ = {
        class: "b"
    },
    J$ = {
        class: "reason"
    },
    e2 = {
        class: "fail"
    },
    t2 = {
        class: "van-dialog__content-title"
    },
    a2 = {
        class: "van-dialog__content-note"
    },
    n2 = ie({
        __name: "index",
        setup(b) {
            const {
                t: s
            } = be(), c = ye(), r = tt(), o = C(), l = C("0"), d = C(!1), h = C(""), w = V(() => {
                var T;
                return l.value == "0" ? h.value : (T = o.value.find(m => m.id == l.value)) == null ? void 0 : T.reasonText
            }), u = () => {
                c.go(-1)
            }, _ = C(""), $ = C(""), v = C(""), A = C("");
            async function g() {
                const T = await ne(va({
                    type: 1
                }));
                T && (o.value = T.data)
            }
            async function U() {
                await ne(ss({
                    orderNo: A.value,
                    cancelReason: w.value,
                    reamrk: ""
                })) && (d.value = !1, u())
            }
            async function B() {
                if (l.value == "0" && h.value.trim().length == 0) {
                    _e(s("enterOtherReason"));
                    return
                }
                d.value = !0
            }
            return ge(() => {
                var T, m, k, P, I, O, q, R;
                _.value = ((m = (T = r.query) == null ? void 0 : T.orderAmount) == null ? void 0 : m.toString()) || "", $.value = ((P = (k = r.query) == null ? void 0 : k.sellerAccountNo) == null ? void 0 : P.toString()) || "", v.value = ((O = (I = r.query) == null ? void 0 : I.createTime) == null ? void 0 : O.toString()) || "", A.value = ((R = (q = r.query) == null ? void 0 : q.orderNo) == null ? void 0 : R.toString()) || "", g()
            }), (T, m) => {
                const k = x("NavBar"),
                    P = x("van-radio"),
                    I = x("van-radio-group"),
                    O = x("van-field"),
                    q = x("van-dialog"),
                    R = ze("lazy");
                return n(), i("div", Z$, [S(k, {
                    title: "取消订单",
                    "left-arrow": "",
                    onClickLeft: u,
                    backgroundColor: "transparent"
                }), e("div", Y$, [e("div", null, [e("span", null, t(T.$t("withdrawalA")), 1), e("span", X$, t(a(ve)(_.value)), 1)]), e("div", null, [e("span", null, "UPI " + t(T.$t("account")), 1), e("span", null, t($.value), 1)]), e("div", null, [e("span", null, t(a(bt)(v.value, "yyyy-MM-dd")), 1), e("span", {
                    class: "copy",
                    onClick: m[0] || (m[0] = Z => a(ke)(A.value))
                }, t(A.value), 1)])]), e("div", J$, [e("h2", null, t(T.$t("cancelReason")), 1), S(I, {
                    modelValue: l.value,
                    "onUpdate:modelValue": m[1] || (m[1] = Z => l.value = Z),
                    shape: "dot",
                    "checked-color": "#ee0a24"
                }, {
                    default: J(() => [(n(!0), i(de, null, $e(o.value, (Z, M) => (n(), Ie(P, {
                        key: M,
                        name: Z.id.toString()
                    }, {
                        default: J(() => [H(t(Z.reasonText), 1)]),
                        _: 2
                    }, 1032, ["name"]))), 128)), S(P, {
                        name: "0"
                    }, {
                        default: J(() => [H(t(T.$t("other")), 1)]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["modelValue"]), S(O, {
                    class: "textarea",
                    disabled: l.value != "0",
                    modelValue: h.value,
                    "onUpdate:modelValue": m[2] || (m[2] = Z => h.value = Z),
                    rows: "3",
                    autosize: "",
                    type: "textarea",
                    maxlength: "150",
                    placeholder: T.$t("enterOtherReason")
                }, null, 8, ["disabled", "modelValue", "placeholder"])]), e("div", {
                    class: "cancel",
                    onClick: B
                }, t(T.$t("confirmCancel")), 1), S(q, {
                    show: d.value,
                    "onUpdate:show": m[4] || (m[4] = Z => d.value = Z),
                    "show-confirm-button": !1,
                    "z-index": "100",
                    closeOnClickOverlay: !0
                }, {
                    default: J(() => [he(e("img", e2, null, 512), [
                        [R, a(F)("wallet/recharge", "tip")]
                    ]), e("div", t2, t(T.$t("cancelW")), 1), e("div", a2, [e("span", null, t(T.$t("c2cWTip11")), 1)]), e("div", {
                        class: "van-dialog__content-btn",
                        onClick: U
                    }, t(T.$t("confirmCancel")), 1), he(e("img", {
                        class: "close",
                        onClick: m[3] || (m[3] = Z => d.value = !1)
                    }, null, 512), [
                        [R, a(ue)("main", "close")]
                    ])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const s2 = re(n2, [
        ["__scopeId", "data-v-522a488b"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/Withdraw/c2cCancelWithdrawal/index.vue"]
    ]),
    Ib = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: s2
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    l2 = {
        class: "wrongA"
    },
    o2 = {
        class: "head"
    },
    i2 = {
        class: "content"
    },
    r2 = {
        class: "amount"
    },
    c2 = {
        class: "input"
    },
    d2 = {
        class: "place-div"
    },
    u2 = {
        class: "img"
    },
    v2 = {
        class: "uploadImg"
    },
    _2 = {
        class: "tip"
    },
    p2 = {
        class: "img video"
    },
    h2 = {
        class: "uploadImg"
    },
    m2 = {
        key: 0,
        class: "v",
        controls: ""
    },
    f2 = ["src"],
    w2 = ["src"],
    y2 = ["src"],
    g2 = {
        key: 1,
        class: "videoBox loading"
    },
    $2 = ie({
        __name: "index",
        setup(b) {
            var T;
            const s = ye(),
                {
                    t: c
                } = be(),
                r = V(() => We().getDollarSign),
                o = C([]),
                l = C([]),
                d = C([]),
                h = C(),
                w = C(),
                u = C(!1),
                _ = C({
                    orderNo: (T = s.currentRoute.value.query) == null ? void 0 : T.orderNo,
                    realAmount: 0,
                    ossUrls: [{}]
                }),
                $ = V(() => {
                    var m;
                    return !(((m = _.value.orderNo) == null ? void 0 : m.toString().trim().length) == 0 || +(_.value.realAmount <= 0) || d.value.length == 0 || u.value)
                }),
                v = async m => {
                    const k = new FormData;
                    (m == null ? void 0 : m.length) > 0 ? m.forEach(I => {
                        k.append("files", I.file)
                    }) : k.append("files", m.file), (await ne(ma(k))).data.forEach(I => {
                        d.value.push(I.src)
                    })
                },
                A = (m, k) => (d.value.filter((P, I) => {
                    k.index == I && d.value.splice(I, 1)
                }), !0),
                g = async m => {
                    u.value = !0;
                    const k = new FormData;
                    k.append("files", m.file);
                    const P = await ne(ls(k));
                    P && (h.value = P.data[0].ossHttp + "/" + P.data[0].src, w.value = P.data[0].src), u.value = !1
                };
            async function U() {
                if (!$.value) return;
                if (u.value) return _e({
                    message: c("c2cTip45"),
                    wordBreak: "break-word"
                });
                _.value.ossUrls.length = 0, d.value.forEach(P => {
                    _.value.ossUrls.push({
                        fileType: 1,
                        fileUrl: P
                    })
                }), w.value && _.value.ossUrls.push({
                    fileType: 2,
                    fileUrl: w.value
                });
                const [m, k] = await _a(os(_.value));
                k.code == 0 ? B(c("submitSuccess")) : k.msgCode == "281" && k.code == 1 ? B(k.msg) : Dt(k)
            }

            function B(m) {
                _e({
                    message: m,
                    wordBreak: "break-word"
                }), setTimeout(() => {
                    s.replace({
                        name: "Withdraw-C2cDetail",
                        query: {
                            order: _.value.orderNo
                        }
                    })
                }, 2e3)
            }
            return (m, k) => {
                const P = x("NavBar"),
                    I = x("van-field"),
                    O = x("van-uploader"),
                    q = x("van-icon");
                return n(), i("div", l2, [e("div", o2, [S(P, {
                    title: "",
                    "left-arrow": "",
                    onClickLeft: k[0] || (k[0] = () => a(s).back()),
                    backgroundColor: "transparent"
                }), e("h1", null, t(m.$t("c2cState14")), 1), e("div", null, t(m.$t("c2cTip35")), 1), e("div", null, t(m.$t("c2cTip36")), 1)]), e("div", i2, [e("div", r2, [e("h1", null, t(m.$t("c2cTip37")), 1), e("p", null, t(m.$t("c2cTip38")), 1), e("div", c2, [e("div", d2, t(r.value), 1), S(I, {
                    modelValue: _.value.realAmount,
                    "onUpdate:modelValue": k[1] || (k[1] = R => _.value.realAmount = R),
                    modelModifiers: {
                        number: !0
                    },
                    center: "",
                    type: "digit",
                    placeholder: m.$t("enterAmount"),
                    class: "inp"
                }, null, 8, ["modelValue", "placeholder"])])]), e("div", u2, [e("h1", null, t(m.$t("c2cTip39")) + " (" + t(o.value.length) + "/3) ", 1), S(O, {
                    modelValue: o.value,
                    "onUpdate:modelValue": k[2] || (k[2] = R => o.value = R),
                    multiple: "",
                    "max-count": 3,
                    "max-size": 5e3 * 1024,
                    onOversize: k[3] || (k[3] = () => a(gt)(m.$t("C2Cuploadtip2"))),
                    accept: "image/*",
                    "after-read": v,
                    "before-delete": A
                }, {
                    default: J(() => [e("div", v2, t(m.$t("c2cTip40")), 1)]),
                    _: 1
                }, 8, ["modelValue"]), e("div", _2, [S(q, {
                    name: "warning-o",
                    size: "18"
                }), H(t(m.$t("c2cTip41")), 1)])]), e("div", p2, [e("h1", null, t(m.$t("c2cTip42")) + " (" + t(l.value.length) + "/1) ", 1), u.value ? f("v-if", !0) : (n(), Ie(O, {
                    key: 0,
                    modelValue: l.value,
                    "onUpdate:modelValue": k[4] || (k[4] = R => l.value = R),
                    "max-count": 1,
                    "max-size": 5e4 * 1024,
                    onOversize: k[5] || (k[5] = () => a(gt)(m.$t("c2cTip51"))),
                    accept: "video/*",
                    "after-read": g
                }, {
                    "preview-cover": J(({
                        file: R
                    }) => [h.value ? (n(), i("video", m2, [e("source", {
                        src: h.value,
                        type: "video/ogg"
                    }, null, 8, f2), e("source", {
                        src: h.value,
                        type: "video/mp4"
                    }, null, 8, w2), e("source", {
                        src: h.value,
                        type: "video/webm"
                    }, null, 8, y2)])) : f("v-if", !0)]),
                    default: J(() => [e("div", h2, t(m.$t("c2cTip43")), 1)]),
                    _: 1
                }, 8, ["modelValue"])), u.value ? (n(), i("div", g2, t(m.$t("c2cTip44")), 1)) : f("v-if", !0)]), e("div", {
                    class: ae(["cmdBth", {
                        active: $.value
                    }]),
                    onClick: U
                }, t(m.$t("c2cState14")), 3)])])
            }
        }
    });
const b2 = re($2, [
        ["__scopeId", "data-v-5e595a70"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/Withdraw/c2cWrongAmount/index.vue"]
    ]),
    Nb = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: b2
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    dt = b => (Ae("data-v-9bca0648"), b = b(), Re(), b),
    k2 = {
        class: "WHD__container"
    },
    C2 = ["src"],
    T2 = {
        class: "WHD__container-body"
    },
    S2 = {
        class: "container"
    },
    I2 = {
        class: "top ar-1px-b"
    },
    N2 = ["src"],
    A2 = dt(() => e("span", null, "Bank Card 提现", -1)),
    R2 = Bt('<div class="item" data-v-9bca0648><div data-v-9bca0648><span data-v-9bca0648>订单金额</span><span class="yellow" data-v-9bca0648>$8888.88</span></div><div data-v-9bca0648><span data-v-9bca0648>扣除金额</span><span class="black" data-v-9bca0648>$8888.88</span></div><div data-v-9bca0648><span data-v-9bca0648>到账金额</span><span class="black" data-v-9bca0648>$8888.88</span></div><div data-v-9bca0648><span data-v-9bca0648>订单时间</span><span data-v-9bca0648>2022-06-01</span></div></div>', 1),
    D2 = {
        class: "mImg"
    },
    U2 = ["src"],
    B2 = {
        class: "item"
    },
    W2 = dt(() => e("span", null, "UTR", -1)),
    O2 = dt(() => e("span", null, "202246892345", -1)),
    P2 = ["src"],
    L2 = dt(() => e("span", null, "订单号", -1)),
    M2 = dt(() => e("span", null, "2022102518543345000113", -1)),
    V2 = ["src"],
    q2 = dt(() => e("span", null, "支付时间", -1)),
    j2 = dt(() => e("span", null, "2022-06-20 15：15：16", -1)),
    E2 = ["src"],
    H2 = Bt('<div class="containerB" data-v-9bca0648><div class="top ar-1px-b" data-v-9bca0648><!-- &lt;img :src=&quot;getIcons(&#39;wallet/withdraw/withdrawHistory&#39;, &#39;bc&#39;)&quot; /&gt; --><span data-v-9bca0648>银行名称</span></div><div class="item" data-v-9bca0648><div data-v-9bca0648><span class="red" data-v-9bca0648>Account Name</span><span data-v-9bca0648>SAWARN TELECOM</span></div><div data-v-9bca0648><span class="red" data-v-9bca0648>Bank Number</span><span data-v-9bca0648>0005123100000315</span></div><div data-v-9bca0648><span class="red" data-v-9bca0648>Order Number</span><span data-v-9bca0648>2022102518543345000113</span></div></div></div>', 1),
    x2 = ie({
        __name: "index",
        setup(b) {
            const s = ye();

            function c() {
                s.back()
            }
            const r = history.state.paramValue || 0;
            return (o, l) => {
                const d = x("NavBar");
                return n(), i("div", k2, [S(d, {
                    title: "",
                    "left-arrow": "",
                    onClickLeft: c,
                    classN: `bg${a(r)}`
                }, null, 8, ["classN"]), e("div", {
                    class: ae(["WHD__container-header", `bg${a(r)}`])
                }, [e("div", null, [e("h1", null, t(o.$t(a(Xe)(a(De).WithdrawState, a(r)))), 1), e("span", null, t(o.$t(a(Xe)(a(De).WStateCorrelationT, a(r)))), 1)]), e("img", {
                    src: a(F)("wallet/withdraw/withdrawHistory/state", `${a(r)}`)
                }, null, 8, C2)], 2), e("div", T2, [e("div", S2, [e("div", I2, [e("img", {
                    src: a(F)("wallet/withdraw/withdrawHistory", "bc")
                }, null, 8, N2), A2]), R2, e("div", D2, [e("img", {
                    src: a(F)("wallet/withdraw/withdrawHistory", "moonBar")
                }, null, 8, U2)]), e("div", B2, [e("div", null, [W2, O2, e("img", {
                    onClick: l[0] || (l[0] = h => a(ke)("1414")),
                    src: a(F)("wallet", "copy")
                }, null, 8, P2)]), e("div", null, [L2, M2, e("img", {
                    onClick: l[1] || (l[1] = h => a(ke)("1414")),
                    src: a(F)("wallet", "copy")
                }, null, 8, V2)]), e("div", null, [q2, j2, e("img", {
                    onClick: l[2] || (l[2] = h => a(ke)("1414")),
                    src: a(F)("wallet", "copy")
                }, null, 8, E2)])])]), H2])])
            }
        }
    });
const F2 = re(x2, [
        ["__scopeId", "data-v-9bca0648"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/wallet/WithdrawHistory/WithdrawHistoryDetail/index.vue"]
    ]),
    Ab = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: F2
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    Tb as A, Sb as B, Ib as C, Nb as D, Ab as E, eb as a, tb as b, ab as c, nb as d, sb as e, lb as f, ob as g, ib as h, J2 as i, rb as j, cb as k, db as l, ub as m, vb as n, _b as o, pb as p, hb as q, mb as r, fb as s, wb as t, yb as u, gb as v, $b as w, bb as x, kb as y, Cb as z
};