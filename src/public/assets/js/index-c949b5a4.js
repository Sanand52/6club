import {
    X as E,
    K as oe,
    M as ae,
    Y as v,
    Z as b,
    a4 as Y,
    a5 as me,
    a0 as r,
    D as _,
    $ as C,
    _ as p,
    a9 as ee,
    w as U,
    I as ve,
    as as fe,
    r as g,
    a3 as pe,
    aa as D,
    m as ke,
    W as Ce,
    F as G,
    C as te,
    a2 as F,
    ae as I,
    a7 as $,
    a6 as S,
    a8 as le,
    G as Ie,
    aD as $e,
    ak as ce,
    b7 as Ee,
    T as xe,
    ab as z,
    a1 as re,
    x as Le,
    b8 as Te,
    am as K,
    an as De,
    b9 as Ae,
    ba as qe,
    bb as Pe,
    bc as Be,
    bd as Ve,
    be as Ne,
    bf as Re,
    bg as Oe,
    bh as He,
    bi as Me,
    bj as Ge,
    bk as Ue,
    bl as Fe,
    bm as je,
    bn as Ke,
    bo as ze,
    bp as Ye,
    bq as Xe,
    br as We,
    bs as Je,
    bt as Qe,
    bu as Ze,
    bv as et,
    bw as tt,
    bx as ot,
    by as at,
    bz as st,
    bA as nt,
    bB as it,
    bC as lt,
    bD as ct,
    bE as rt,
    bF as ut,
    bG as dt,
    bH as _t,
    bI as mt,
    bJ as vt,
    bK as ft,
    bL as pt,
    bM as gt,
    bN as ht,
    bO as bt
} from "./modules-5f4bb8af.js";
import {
    g as A,
    _ as P,
    G as ge,
    aT as ue,
    aY as ne,
    dz as he,
    dA as yt,
    o as se,
    C as w,
    u as wt,
    S as be,
    a as St,
    dB as kt,
    dC as Ct,
    dD as It,
    dE as $t,
    s as Et,
    q as xt,
    i as Lt,
    j as Tt,
    k as ye,
    dF as de,
    r as Dt
} from "./page-activity-1d916f67.js";
import {
    e as At
} from "./page-home-c0ac7f2c.js";
import "./native/index-d56959bc.js";
import "./en-5db85987.js";
import "./rus-ecb14220.js";
import "./vi-40bd560a.js";
import "./id-24cc3835.js";
import "./hd-c5b1d7e8.js";
import "./tha-330057b2.js";
import "./md-02b1fc1c.js";
import "./bra-1f3ea623.js";
import "./my-80d37f62.js";
import "./bdt-d8f19d0c.js";
import "./zh-c7494ff8.js";
import "./pak-47641c9f.js";
import "./ar-1c9ff85b.js";
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const t of document.querySelectorAll('link[rel="modulepreload"]')) n(t);
    new MutationObserver(t => {
        for (const i of t)
            if (i.type === "childList")
                for (const l of i.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && n(l)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function o(t) {
        const i = {};
        return t.integrity && (i.integrity = t.integrity), t.referrerPolicy && (i.referrerPolicy = t.referrerPolicy), t.crossOrigin === "use-credentials" ? i.credentials = "include" : t.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function n(t) {
        if (t.ep) return;
        t.ep = !0;
        const i = o(t);
        fetch(t.href, i)
    }
})();
const qt = {
        class: "tabbar__container"
    },
    Pt = ["onClick"],
    Bt = ["src"],
    Vt = {
        key: 0,
        class: "promotionBg"
    },
    Nt = E({
        __name: "index",
        setup(a) {
            const e = oe(),
                o = ae();
            async function n(i) {
                await e.push({
                    name: i
                })
            }
            const t = [{
                name: "home"
            }, {
                name: "activity"
            }, {
                name: "promotion"
            }, {
                name: "wallet"
            }, {
                name: "main"
            }];
            return (i, l) => (v(), b("div", qt, [(v(), b(Y, null, me(t, (c, s) => r("div", {
                class: ee(["tabbar__container-item", {
                    active: c.name === _(o).name,
                    noShowBgC: s == 2
                }]),
                key: c + "" + s,
                onClick: u => n(c.name)
            }, [r("img", {
                src: _(A)("home/tabBar", `${c.name!=_(o).name?c.name:c.name+"_active"}`)
            }, null, 8, Bt), c.name === "promotion" ? (v(), b("div", Vt)) : C("", !0), r("span", null, p(i.$t(c.name)), 1)], 10, Pt)), 64))]))
        }
    });
const Rt = P(Nt, [
    ["__scopeId", "data-v-6c9881c3"]
]);

function Ot() {
    const a = ge(),
        e = () => {
            document.visibilityState === "visible" ? a.setvisibility() : a.setvisibility(0)
        };
    U(() => {
        document.addEventListener("visibilitychange", e)
    }), ve(() => {
        document.removeEventListener("visibilitychange", e)
    })
}
const Ht = E({
    __name: "Customer",
    setup(a) {
        fe(f => ({
            "17a7a9f6": L.value
        }));
        const e = g(!1),
            o = g({
                x: 0,
                y: 0
            }),
            n = g(0),
            t = g(0),
            i = g(0),
            l = g(0),
            c = g(0),
            s = g(0),
            u = g();
        let d, O, H, B;
        const M = oe();

        function j() {
            N(d, O, H, B) || M.push({
                name: "CustomerService"
            })
        }
        U(() => {
            u.value = document.getElementById("customerId")
        });

        function V(f) {
            e.value = !0;
            var h;
            f.touches ? h = f.touches[0] : h = f, o.value.x = h.clientX, o.value.y = h.clientY, n.value = u.value.offsetLeft, t.value = u.value.offsetTop, d = f.clientX, O = f.clientY
        }

        function y(f) {
            if (e.value) {
                var h, T = document.getElementById("customerId"),
                    R = T.clientWidth,
                    X = T.clientHeight,
                    W = document.documentElement.clientHeight,
                    J = document.documentElement.clientWidth;
                f.touches ? h = f.touches[0] : h = f, i.value = h.clientX - o.value.x, l.value = h.clientY - o.value.y, c.value = n.value + i.value, s.value = t.value + l.value, c.value <= 0 && (c.value = 0), s.value <= 0 && (s.value = 0), c.value >= J - R && (c.value = J - R), s.value >= W - X && (s.value = W - X), u.value.style.left = c.value + "px", u.value.style.top = s.value + "px", document.addEventListener("touchmove", function() {
                    f.preventDefault()
                }, !1)
            }
            f.stopPropagation(), f.preventDefault()
        }

        function x(f) {
            e.value = !1, H = f.clientX, B = f.clientY
        }

        function N(f, h, T, R) {
            return !(Math.sqrt((f - T) * (f - T) + (h - R) * (h - R)) <= 1)
        }
        const L = g("bahnschrift");
        return (f, h) => {
            const T = pe("lazy");
            return v(), b("div", {
                class: "customer",
                onClick: j,
                onMousedown: V,
                onTouchstart: V,
                onMousemove: y,
                onTouchmove: y,
                onMouseup: x,
                id: "customerId"
            }, [D(r("img", null, null, 512), [
                [T, _(A)("home", "icon_sevice")]
            ])], 32)
        }
    }
});
const Mt = {
        class: "start-page"
    },
    Gt = ["src"],
    Ut = ["src"],
    Ft = E({
        __name: "StartPage",
        setup(a) {
            const e = "sit",
                o = {}.VITE_STARTEXT || "";
            return (n, t) => (v(), b("div", Mt, [r("div", null, [r("img", {
                class: ee(["dice", [_(e)]]),
                src: _(A)("home/StartPage", _(ue)() + "_dice")
            }, null, 10, Gt), r("p", null, p(_(o) || n.$t("fairAndSafe")), 1), r("img", {
                class: ee(["logo", [_(e)]]),
                src: _(A)("home/StartPage", _(ue)())
            }, null, 10, Ut)])]))
        }
    });
const jt = P(Ft, [
        ["__scopeId", "data-v-f8a34b01"]
    ]),
    Kt = {
        class: "header"
    },
    zt = {
        class: "image"
    },
    Yt = {
        class: "tip"
    },
    Xt = {
        class: "container"
    },
    Wt = {
        class: "footer"
    },
    Jt = E({
        __name: "dialog",
        setup(a) {
            const e = oe(),
                o = ae(),
                n = g(!1),
                {
                    store: t,
                    closeFirstSave: i
                } = ne(),
                {
                    ActiveSotre: l,
                    getFirstRechargeList: c
                } = he(),
                s = ke(new Date).format("YYYY-MM-DD"),
                u = Ce("firstSave", null),
                d = G(() => u.value == s),
                O = () => {
                    d.value ? (u.value = "", localStorage.removeItem("firstSave")) : u.value = s
                },
                H = () => {
                    n.value = !1, i()
                },
                B = ["activity", "home", "main", "wallet", "promotion"];
            te(() => o.name, y => {
                B.includes(o.name) && M()
            });
            const M = () => {
                    u.value != s && c().then(y => {
                        if (!y.length) {
                            n.value = !1, i();
                            return
                        }
                        const x = y.find(N => N.isFinshed);
                        x && (l.value.isShowFirstSaveDialog = !1), x || (n.value = !0)
                    })
                },
                j = () => {
                    n.value = !1, i(!0), e.push({
                        name: "FirstRecharge"
                    })
                },
                V = () => {
                    n.value = !1, i(!0), e.push({
                        name: "Recharge"
                    })
                };
            return U(() => {
                B.includes(o.name) && M()
            }), (y, x) => {
                const N = F("van-dialog");
                return v(), I(N, {
                    show: n.value,
                    "onUpdate:show": x[0] || (x[0] = L => n.value = L),
                    className: "firstSaveDialog",
                    lockScroll: !0
                }, {
                    title: $(() => [r("div", Kt, [r("div", zt, p(y.$t("firstDialogH")), 1), r("div", Yt, p(y.$t("firstDialogTip")), 1)])]),
                    footer: $(() => [r("div", Wt, [r("div", {
                        class: ee(["active", {
                            a: d.value
                        }]),
                        onClick: O
                    }, p(y.$t("noTipToday")), 3), r("div", {
                        class: "btn",
                        onClick: j
                    }, p(y.$t("activity")), 1)])]),
                    default: $(() => [r("div", Xt, [S(yt, {
                        list: _(l).FirstRechargeList,
                        onGorecharge: V
                    }, null, 8, ["list"])]), r("div", {
                        class: "close",
                        onClick: H
                    })]),
                    _: 1
                }, 8, ["show"])
            }
        }
    });
const Qt = P(Jt, [
        ["__scopeId", "data-v-85903efa"]
    ]),
    Zt = {
        class: "dialog-window"
    },
    eo = {
        class: "dialog-wrapper"
    },
    to = {
        class: "dialog-title"
    },
    oo = {
        class: "dialog-content"
    },
    ao = {
        class: "dialog-window"
    },
    so = {
        class: "dialog-wrapper"
    },
    no = {
        class: "dialog-title"
    },
    io = {
        class: "dialog-tips"
    },
    lo = {
        class: "dialog-content"
    },
    co = {
        class: "dialog-tips",
        style: {
            "margin-bottom": "0"
        }
    },
    ro = {
        class: "dialog-window"
    },
    uo = {
        class: "dialog-wrapper"
    },
    _o = {
        class: "dialog-tips",
        style: {
            "margin-top": "10px"
        }
    },
    mo = {
        class: "dialog-title",
        style: {
            "margin-top": "0"
        }
    },
    vo = {
        class: "dialog-tips"
    },
    fo = {
        class: "dialog-content"
    },
    po = E({
        __name: "AllPageDialog",
        setup(a) {
            ae();
            const {
                ActiveSotre: e
            } = he(), {
                store: o,
                closeInvite: n,
                showFirstSave: t,
                onReturnAwards: i
            } = ne();
            return (l, c) => {
                const s = F("van-dialog"),
                    u = pe("lazy");
                return v(), b(Y, null, [_(t) ? (v(), I(Qt, {
                    key: 0
                })) : C("", !0), S(s, {
                    show: _(e).showReceiveDialog,
                    "onUpdate:show": c[1] || (c[1] = d => _(e).showReceiveDialog = d),
                    "show-confirm-button": !1,
                    className: "noOverHidden"
                }, {
                    default: $(() => [r("div", Zt, [r("div", eo, [D(r("img", null, null, 512), [
                        [u, _(A)("activity/DailyTask", "taskbg")]
                    ]), r("div", to, p(l.$t("awardsReceived")), 1), r("div", oo, [r("span", null, p(_(se)(_(e).receiveAmount)), 1)]), r("div", {
                        class: "dialog-btn",
                        onClick: c[0] || (c[0] = d => _(e).showReceiveDialog = !1)
                    }, p(l.$t("confirm")), 1)])])]),
                    _: 1
                }, 8, ["show"]), S(s, {
                    show: _(o).invite,
                    "onUpdate:show": c[3] || (c[3] = d => _(o).invite = d),
                    "show-confirm-button": !1,
                    className: "noOverHidden"
                }, {
                    default: $(() => [r("div", ao, [r("div", so, [D(r("img", null, null, 512), [
                        [u, _(A)("activity/DailyTask", "confirmationReceived")]
                    ]), r("div", no, p(l.$t("inviteTips")), 1), r("p", io, p(l.$t("inviteAmount")), 1), r("div", lo, [r("span", co, p(l.$t("commissionAmount")), 1), r("span", null, p(_(se)(_(o).rebateAmount)), 1)]), r("div", {
                        class: "dialog-btn",
                        onClick: c[2] || (c[2] = d => _(n)())
                    }, p(l.$t("receive")), 1)])])]),
                    _: 1
                }, 8, ["show"]), S(s, {
                    show: _(o).oldUser,
                    "onUpdate:show": c[5] || (c[5] = d => _(o).oldUser = d),
                    "show-confirm-button": !1,
                    "close-on-click-overlay": !0,
                    className: "noOverHidden"
                }, {
                    default: $(() => [r("div", ro, [r("div", uo, [D(r("img", null, null, 512), [
                        [u, _(A)("activity/DailyTask", "confirmationReceived")]
                    ]), r("p", _o, p(l.$t("oldPromptTip")), 1), r("div", mo, p(l.$t("oldPrompt")), 1), r("p", vo, p(l.$t("oldPromptGift")), 1), r("div", fo, [r("span", null, p(_(se)(_(o).returnAwards)), 1)]), r("div", {
                        class: "dialog-btn",
                        onClick: c[4] || (c[4] = d => _(i)())
                    }, p(l.$t("receive")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const go = P(po, [
        ["__scopeId", "data-v-9af3e6cc"]
    ]),
    ho = {
        class: "test"
    },
    bo = {
        key: 0,
        class: "test_box"
    },
    yo = E({
        __name: "index",
        setup(a) {
            const e = [{
                    name: "red",
                    pageName: "redHome"
                }, {
                    name: "blue",
                    pageName: "blueHome"
                }, {
                    name: "blackGold",
                    pageName: "blackGoldHome"
                }, {
                    name: "whiteGold",
                    pageName: "whiteGoldHome"
                }, {
                    name: "electronic",
                    pageName: "electronic"
                }],
                o = oe(),
                n = Object.assign({
                    "/src/views/home/other/blackGoldHome.vue": () => w(() =>
                        import ("./page-home-c0ac7f2c.js").then(l => l.P), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-activity-1d916f67.js", "assets/js/native/index-d56959bc.js", "assets/js/en-5db85987.js", "assets/js/rus-ecb14220.js", "assets/js/vi-40bd560a.js", "assets/js/id-24cc3835.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-02b1fc1c.js", "assets/js/bra-1f3ea623.js", "assets/js/my-80d37f62.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-c7494ff8.js", "assets/js/pak-47641c9f.js", "assets/js/ar-1c9ff85b.js", "assets/css/page-activity-825515c5.css", "assets/css/page-home-fcf6e273.css"]),
                    "/src/views/home/other/blueHome.vue": () => w(() =>
                        import ("./page-home-c0ac7f2c.js").then(l => l.Q), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-activity-1d916f67.js", "assets/js/native/index-d56959bc.js", "assets/js/en-5db85987.js", "assets/js/rus-ecb14220.js", "assets/js/vi-40bd560a.js", "assets/js/id-24cc3835.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-02b1fc1c.js", "assets/js/bra-1f3ea623.js", "assets/js/my-80d37f62.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-c7494ff8.js", "assets/js/pak-47641c9f.js", "assets/js/ar-1c9ff85b.js", "assets/css/page-activity-825515c5.css", "assets/css/page-home-fcf6e273.css"]),
                    "/src/views/home/other/damanHome.vue": () => w(() =>
                        import ("./page-home-c0ac7f2c.js").then(l => l.R), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-activity-1d916f67.js", "assets/js/native/index-d56959bc.js", "assets/js/en-5db85987.js", "assets/js/rus-ecb14220.js", "assets/js/vi-40bd560a.js", "assets/js/id-24cc3835.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-02b1fc1c.js", "assets/js/bra-1f3ea623.js", "assets/js/my-80d37f62.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-c7494ff8.js", "assets/js/pak-47641c9f.js", "assets/js/ar-1c9ff85b.js", "assets/css/page-activity-825515c5.css", "assets/css/page-home-fcf6e273.css"]),
                    "/src/views/home/other/electronic.vue": () => w(() =>
                        import ("./page-home-c0ac7f2c.js").then(l => l.S), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-activity-1d916f67.js", "assets/js/native/index-d56959bc.js", "assets/js/en-5db85987.js", "assets/js/rus-ecb14220.js", "assets/js/vi-40bd560a.js", "assets/js/id-24cc3835.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-02b1fc1c.js", "assets/js/bra-1f3ea623.js", "assets/js/my-80d37f62.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-c7494ff8.js", "assets/js/pak-47641c9f.js", "assets/js/ar-1c9ff85b.js", "assets/css/page-activity-825515c5.css", "assets/css/page-home-fcf6e273.css"]),
                    "/src/views/home/other/redHome.vue": () => w(() =>
                        import ("./page-home-c0ac7f2c.js").then(l => l.T), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-activity-1d916f67.js", "assets/js/native/index-d56959bc.js", "assets/js/en-5db85987.js", "assets/js/rus-ecb14220.js", "assets/js/vi-40bd560a.js", "assets/js/id-24cc3835.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-02b1fc1c.js", "assets/js/bra-1f3ea623.js", "assets/js/my-80d37f62.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-c7494ff8.js", "assets/js/pak-47641c9f.js", "assets/js/ar-1c9ff85b.js", "assets/css/page-activity-825515c5.css", "assets/css/page-home-fcf6e273.css"]),
                    "/src/views/home/other/whiteGoldHome.vue": () => w(() =>
                        import ("./page-home-c0ac7f2c.js").then(l => l.U), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-activity-1d916f67.js", "assets/js/native/index-d56959bc.js", "assets/js/en-5db85987.js", "assets/js/rus-ecb14220.js", "assets/js/vi-40bd560a.js", "assets/js/id-24cc3835.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-02b1fc1c.js", "assets/js/bra-1f3ea623.js", "assets/js/my-80d37f62.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-c7494ff8.js", "assets/js/pak-47641c9f.js", "assets/js/ar-1c9ff85b.js", "assets/css/page-activity-825515c5.css", "assets/css/page-home-fcf6e273.css"])
                }),
                t = async l => {
                    if (o.currentRoute.value.name === l) return;
                    let c = n[`/src/views/home/other/${l}.vue`];
                    o.removeRoute("home"), o.addRoute({
                        path: "/",
                        name: "home",
                        component: c,
                        meta: {
                            title: "home",
                            tabBar: !0,
                            KeepAlive: !1
                        }
                    }), o.push("/")
                },
                i = g(!1);
            return (l, c) => {
                const s = F("van-button");
                return v(), b("div", ho, [S(s, {
                    type: "primary",
                    onClick: c[0] || (c[0] = u => i.value = !i.value)
                }, {
                    default: $(() => [le(p(i.value ? "隐藏" : "展开"), 1)]),
                    _: 1
                }), i.value ? (v(), b("div", bo, [(v(), b(Y, null, me(e, u => S(s, {
                    type: "primary",
                    onClick: d => t(u.pageName)
                }, {
                    default: $(() => [le(p(u.name), 1)]),
                    _: 2
                }, 1032, ["onClick"])), 64))])) : C("", !0)])
            }
        }
    });
const wo = P(yo, [
        ["__scopeId", "data-v-530567cf"]
    ]),
    So = E({
        __name: "App",
        setup(a) {
            fe(k => ({
                "656434f0": h.value
            }));
            const {
                openAll: e
            } = ne(), o = xt(), n = g(!1), t = g(!1), i = ae(), l = wt(), c = be(), {
                locale: s
            } = Ie(), u = ge(), d = g(!1), O = G(() => i.meta.tabBar);
            let H = ["development"];
            const B = G(() => H.includes("sit") && i.path === "/"),
                M = "electronic",
                j = G(() => ["electronic", "blackGoldHome"].includes(M) ? !1 : !["/wallet/Withdraw/C2cDetail", "/wallet/RechargeHistory/RechargeUpiDetail", "/wallet/Withdraw/Upi", "/wallet/Withdraw/AddUpi", "/wallet/Withdraw/c2cCancelWithdrawal/index.vue", "/wallet/otherPay?type=C2C", "/home/game"].includes(i.path)),
                V = g(0),
                y = g(Math.floor(Math.random() * 1e4)),
                x = G(() => i.name + y.value),
                N = () => {
                    o.on("changeKeepAliveKey", () => {
                        y.value = Math.floor(Math.random() * 1e4)
                    })
                };
            sessionStorage.getItem("isload") ? n.value = !1 : (t.value = !0, sessionStorage.setItem("isload", t.value.toString()), n.value = !0), c.getHomeSetting(), te(() => c.getAreacode, k => {
                k && l.setNumberType(k.substring(1))
            }), te(() => c.getDL, k => {
                s.value = k, u.updateLanguage(k), Lt(k), Tt(ye.global.t)
            }), setTimeout(() => {
                n.value = !1
            }, 2e3);
            const L = g(!1),
                f = St();
            f.$subscribe((k, q) => {
                L.value = q.isLoading, f.setLoading(L.value)
            });
            const h = g("bahnschrift");
            let T = kt(),
                R = c.getLanguage,
                X = Ct(T, R);
            const W = async k => {
                    const q = [{
                            title: "vi",
                            fontStyle: "bahnschrift"
                        }, {
                            title: "else",
                            fontStyle: "'Roboto', 'Inter', sans-serif"
                        }],
                        Q = q.findIndex(Z => Z.title == X);
                    Q >= 0 ? h.value = q[Q].fontStyle : h.value = q[q.length - 1].fontStyle
                },
                J = () => {
                    o.on("keyChange", () => {
                        V.value++
                    }), o.on("changeIsGame", () => {
                        d.value = !d.value, L.value = !L.value
                    })
                },
                Se = () => {
                    o.off("keyChange"), o.off("changeKeepAliveKey"), o.off("changeIsGame")
                };
            return l.setNumberType(c.getAreacode.substring(1)), W(), U(() => {
                It() && $t(), e(), Se(), J(), N(), localStorage.getItem("language") && Et(localStorage.getItem("language"))
            }), Ot(), (k, q) => {
                const Q = F("LoadingView");
                return v(), b(Y, null, [S(Q, {
                    loading: L.value,
                    type: "loading",
                    isGame: d.value
                }, {
                    default: $(() => [(v(), I(_(Ee), {
                        key: V.value
                    }, {
                        default: $(({
                            Component: Z
                        }) => [(v(), I($e, {
                            max: 1
                        }, [_(i).meta.keepAlive ? (v(), I(ce(Z), {
                            key: x.value
                        })) : C("", !0)], 1024)), _(i).meta.keepAlive ? C("", !0) : (v(), I(ce(Z), {
                            key: 0
                        }))]),
                        _: 1
                    })), j.value ? (v(), I(Ht, {
                        key: 0
                    })) : C("", !0), O.value ? (v(), I(Rt, {
                        key: 1
                    })) : C("", !0)]),
                    _: 1
                }, 8, ["loading", "isGame"]), n.value ? (v(), I(jt, {
                    key: 0
                })) : C("", !0), S(go), B.value ? (v(), I(wo, {
                    key: 1
                })) : C("", !0)], 64)
            }
        }
    });
const ko = (a, e) => {
    const o = a[e];
    return o ? typeof o == "function" ? o() : Promise.resolve(o) : new Promise((n, t) => {
        (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(t.bind(null, new Error("Unknown variable dynamic import: " + e)))
    })
};
const Co = {
        mounted(a, e) {
            if (typeof e.value[0] != "function" || typeof e.value[1] != "number") throw new Error("v-debounce: value must be an array that includes a function and a number");
            let o = null;
            const n = e.value[0],
                t = e.value[1];
            a.__handleClick__ = function() {
                o && clearTimeout(o), o = setTimeout(() => {
                    n()
                }, t || 500)
            }, a.addEventListener("click", a.__handleClick__)
        },
        beforeUnmount(a) {
            a.removeEventListener("click", a.__handleClick__)
        }
    },
    Io = {
        mounted(a, e) {
            if (typeof e.value[0] != "function" || typeof e.value[1] != "number") throw new Error("v-throttle: value must be an array that includes a function and a number");
            let o = null;
            const n = e.value[0],
                t = e.value[1];
            a.__handleClick__ = function() {
                o && clearTimeout(o), a.disabled || (a.disabled = !0, n(), o = setTimeout(() => {
                    a.disabled = !1
                }, t || 500))
            }, a.addEventListener("click", a.__handleClick__)
        },
        beforeUnmount(a) {
            a.removeEventListener("click", a.__handleClick__)
        }
    },
    $o = {
        mounted(a, e) {
            a.addEventListener("input", o => {
                const t = a.value.replace(/\D+/g, "");
                a.value = t, e.value = t
            })
        }
    },
    Eo = a => ({
        beforeMount: (e, o) => {
            e.classList.add("ar-lazyload");
            const {
                value: n
            } = o;
            e.dataset.origin = n, a.observe(e)
        },
        updated(e, o) {
            e.dataset.origin = o.value, a.observe(e)
        },
        unmounted(e, o) {
            a.unobserve(e)
        },
        mounted(e, o) {
            a.observe(e)
        }
    }),
    xo = {
        mounted(a, e) {
            let o = 0;
            const n = e.value && e.value.wait ? e.value.wait : 3e3,
                t = i => {
                    const l = Date.now();
                    l - o >= n && (o = l, e.value && e.value.handler && e.value.handler(i))
                };
            a.addEventListener("click", t), a._throttleClickCleanup = () => {
                a.removeEventListener("click", t)
            }
        },
        unmounted(a) {
            a._throttleClickCleanup && a._throttleClickCleanup(), delete a._throttleClickCleanup
        }
    },
    Lo = {
        mounted(a, e) {
            const {
                value: o
            } = e;
            let n = xe("permission", null);
            n.value === null || !o || (n && (n = JSON.parse(n.value)), n && n[o] === !1 && (a.style.display = "none"))
        }
    },
    _e = {
        debounce: Co,
        throttle: Io,
        onlyNum: $o,
        throttleClick: xo,
        haspermission: Lo
    },
    To = {
        install: function(a) {
            Object.keys(_e).forEach(o => {
                a.directive(o, _e[o])
            });
            const e = new IntersectionObserver(o => {
                o.forEach(n => {
                    if (n.isIntersecting) {
                        const t = n.target;
                        t.src = t.dataset.origin || A("images", "avatar"), t.onerror = () => {
                            e.unobserve(t);
                            let i = t.dataset.img || A("images", "avatar");
                            if (!i || i != null && i.includes("undefined")) {
                                t.onerror = null;
                                return
                            }
                            t.src = i, t.style.objectFit = "contain"
                        }, t.classList.remove("ar-lazyload"), e.unobserve(t)
                    }
                })
            }, {
                rootMargin: "0px 0px -50px 0px"
            });
            a.directive("lazy", Eo(e))
        }
    },
    Do = {
        class: "navbar__content"
    },
    Ao = {
        key: 0,
        class: "backIcon"
    },
    qo = {
        class: "navbar__content-center"
    },
    Po = {
        class: "navbar__content-title"
    },
    Bo = E({
        __name: "NavBar",
        props: {
            title: {
                type: String,
                default: ""
            },
            placeholder: {
                type: Boolean,
                default: !0
            },
            leftArrow: {
                type: Boolean,
                default: !1
            },
            backgroundColor: {
                type: String,
                default: ""
            },
            color: {
                type: String,
                default: "#fff"
            },
            classN: {
                type: String,
                default: ""
            },
            ifleftTitle: {
                type: Boolean,
                default: !1
            },
            headLogo: {
                type: Boolean,
                default: !1
            },
            headerUrl: {
                type: String,
                default: ""
            }
        },
        emits: ["click-left", "click-right"],
        setup(a, {
            emit: e
        }) {
            const o = g(),
                n = be(),
                t = G(() => n.getHeadLogo),
                i = () => {
                    e("click-left")
                },
                l = () => {
                    e("click-right")
                };
            return U(() => {}), (c, s) => (v(), b("div", {
                class: "navbar",
                ref_key: "navbar",
                ref: o
            }, [r("div", {
                class: "navbar-fixed",
                style: re({
                    background: a.backgroundColor,
                    color: a.color
                })
            }, [r("div", Do, [r("div", {
                class: "navbar__content-left",
                onClick: i
            }, [z(c.$slots, "left", {}, () => [a.leftArrow ? (v(), b("div", Ao)) : C("", !0), a.headLogo ? (v(), b("div", {
                key: 1,
                class: "headLogo",
                style: re({
                    backgroundImage: "url(" + (a.headerUrl || t.value) + ")"
                })
            }, null, 4)) : C("", !0)], !0)]), r("div", qo, [z(c.$slots, "center", {}, () => [r("div", Po, p(a.title), 1)], !0)]), r("div", {
                class: "navbar__content-right",
                onClick: l
            }, [z(c.$slots, "right", {}, void 0, !0)])])], 4)], 512))
        }
    });
const Vo = P(Bo, [
        ["__scopeId", "data-v-3cadb98b"]
    ]),
    No = {
        class: "ar-searchbar__selector"
    },
    Ro = {
        class: "ar-searchbar__selector-default"
    },
    Oo = E({
        __name: "ArSelect",
        props: {
            selectName: {
                type: String,
                default: ""
            }
        },
        emits: ["click-select"],
        setup(a, {
            emit: e
        }) {
            const o = () => {
                e("click-select")
            };
            return (n, t) => {
                const i = F("van-icon");
                return v(), b("div", No, [r("div", {
                    onClick: o
                }, [r("span", Ro, p(a.selectName), 1), S(i, {
                    name: "arrow-down"
                })])])
            }
        }
    });
const Ho = P(Oo, [
        ["__scopeId", "data-v-87930521"]
    ]),
    Mo = {
        class: "ar-loading-view"
    },
    Go = {
        class: "loading-wrapper"
    },
    Uo = {
        class: "com__box"
    },
    Fo = De('<div class="loading" data-v-2cefdf48><div class="shape shape-1" data-v-2cefdf48></div><div class="shape shape-2" data-v-2cefdf48></div><div class="shape shape-3" data-v-2cefdf48></div><div class="shape shape-4" data-v-2cefdf48></div></div>', 1),
    jo = [Fo],
    Ko = {
        class: "skeleton-wrapper"
    },
    zo = E({
        __name: "LoadingView",
        props: {
            loading: {
                type: Boolean
            },
            type: {},
            isGame: {
                type: Boolean
            }
        },
        setup(a) {
            const e = a,
                o = g();
            let n = null;
            return U(async () => {
                const t = "sit";
                await Le(), n = Te.loadAnimation({
                    container: o.value,
                    renderer: "svg",
                    loop: !0,
                    autoplay: !0,
                    path: `/loading/${t}/data.json`
                })
            }), te(() => e.loading, () => {
                e.type === "loading" && !e.isGame && (e.loading ? n && n.play() : n && n.stop())
            }), ve(() => {
                n && n.destroy(), n = null
            }), (t, i) => {
                const l = F("VanSkeleton");
                return v(), b(Y, null, [D(r("div", Mo, [z(t.$slots, "template", {}, () => [D(r("div", Go, [D(r("div", {
                    ref_key: "element",
                    ref: o,
                    class: "loading-animat"
                }, null, 512), [
                    [K, !t.isGame]
                ]), D(r("div", Uo, jo, 512), [
                    [K, t.isGame]
                ])], 512), [
                    [K, t.type === "loading"]
                ]), D(r("div", Ko, [S(l, {
                    row: 10
                }), S(l, {
                    title: "",
                    avatar: "",
                    row: 5
                }), S(l, {
                    title: "",
                    row: 5
                })], 512), [
                    [K, t.type === "skeleton"]
                ])], !0)], 512), [
                    [K, t.loading]
                ]), z(t.$slots, "default", {}, void 0, !0)], 64)
            }
        }
    });
const Yo = P(zo, [
        ["__scopeId", "data-v-2cefdf48"]
    ]),
    Xo = "electronic";
ko(Object.assign({
    "../assets/styles/other/blackGoldHome/reset.scss": () => w(() => Promise.resolve({}), ["assets/css/reset-5c87d646.css"]),
    "../assets/styles/other/blueHome/reset.scss": () => w(() => Promise.resolve({}), ["assets/css/reset-e7c521f5.css"]),
    "../assets/styles/other/damanHome/reset.scss": () => w(() => Promise.resolve({}), ["assets/css/reset-2bab8522.css"]),
    "../assets/styles/other/electronic/reset.scss": () => w(() => Promise.resolve({}), ["assets/css/reset-98ee8a20.css"]),
    "../assets/styles/other/redHome/reset.scss": () => w(() => Promise.resolve({}), ["assets/css/reset-2bab8522.css"]),
    "../assets/styles/other/whiteGoldHome/reset.scss": () => w(() => Promise.resolve({}), ["assets/css/reset-2bab8522.css"])
}), `../assets/styles/other/${Xo}/reset.scss`);
const Wo = a => {
    a.component("NavBar", Vo), a.component("ArSelect", Ho), a.component("LoadingView", Yo), a.component("svg-icon", At), a.use(Ae).use(qe).use(Pe).use(Be).use(Ve).use(Ne).use(Re).use(Oe).use(He).use(Me).use(Ge).use(Ue).use(Fe).use(je).use(Ke).use(ze).use(Ye).use(Xe).use(We).use(Je).use(Qe).use(Ze).use(et).use(tt).use(ot).use(at).use(st).use(nt).use(it).use(lt).use(ct).use(rt).use(ut).use(dt).use(_t).use(mt).use(vt).use(ft).use(ye).use(To).use(pt);
    let e = a.config.globalProperties,
        o = {};
    o.TopHeight = 38, Object.keys(de.refiter).forEach(n => {
        o[n] = de.refiter[n]
    }), e.$u = o
};

function Jo() {
    let a = window.location.hash;
    a.includes("?") || (a = location.search);

    function e(o) {
        if (o) {
            const i = o.indexOf("?");
            i !== -1 && (o = o.substring(i + 1));
            var n = o.split("&"),
                t = {};
            return n.forEach(function(l) {
                var c = l.split("=");
                t[c[0]] = decodeURIComponent(c[1])
            }), t
        } else return {}
    }
    return e(a)
}
const m = Jo(),
    Qo = {
        ar018: () => {
            const a = {
                    "82824100038": "1571584707020552"
                },
                e = m.invitationCode || sessionStorage.getItem("invitecode"),
                o = m.fb_dynamic_pixel || a[e] || "";
            m.invitationCode && sessionStorage.setItem("invitecode", m.invitationCode), m.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", o), m.invitationCode && sessionStorage.setItem("invitecode", m.invitationCode);
            const n = m.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || a[e];
            n && (function(t, i, l, c, s, u, d) {
                t.fbq || (s = t.fbq = function() {
                    s.callMethod ? s.callMethod.apply(s, arguments) : s.queue.push(arguments)
                }, t._fbq || (t._fbq = s), s.push = s, s.loaded = !0, s.version = "2.0", s.queue = [], u = i.createElement(l), u.async = !0, u.src = c, d = i.getElementsByTagName(l)[0], d.parentNode.insertBefore(u, d))
            }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"), fbq("init", n), fbq("track", "PageView"))
        },
        pakgames: () => {
            const a = {
                    "28187260351": "1611788192994065"
                },
                e = m.invitationCode || sessionStorage.getItem("invitecode"),
                o = m.fb_dynamic_pixel || a[e] || "";
            m.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", o), m.invitationCode && sessionStorage.setItem("invitecode", m.invitationCode);
            const n = m.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || a[e];
            n && (function(t, i, l, c, s, u, d) {
                t.fbq || (s = t.fbq = function() {
                    s.callMethod ? s.callMethod.apply(s, arguments) : s.queue.push(arguments)
                }, t._fbq || (t._fbq = s), s.push = s, s.loaded = !0, s.version = "2.0", s.queue = [], u = i.createElement(l), u.async = !0, u.src = c, d = i.getElementsByTagName(l)[0], d.parentNode.insertBefore(u, d))
            }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"), fbq("init", n), fbq("track", "PageView"))
        },
        okwin: () => {
            const a = {
                    "38316220667": "2061590324241394",
                    "42318414899": "893342322790796"
                },
                e = m.invitationCode || sessionStorage.getItem("invitecode"),
                o = m.fb_dynamic_pixel || a[e] || "";
            m.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", o), m.invitationCode && sessionStorage.setItem("invitecode", m.invitationCode);
            const n = m.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || a[e];
            n && (function(t, i, l, c, s, u, d) {
                t.fbq || (s = t.fbq = function() {
                    s.callMethod ? s.callMethod.apply(s, arguments) : s.queue.push(arguments)
                }, t._fbq || (t._fbq = s), s.push = s, s.loaded = !0, s.version = "2.0", s.queue = [], u = i.createElement(l), u.async = !0, u.src = c, d = i.getElementsByTagName(l)[0], d.parentNode.insertBefore(u, d))
            }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"), fbq("init", n), fbq("track", "PageView"))
        },
        ar006: () => {
            const a = {
                    "8281440027": "946249607200818"
                },
                e = m.invitationCode || sessionStorage.getItem("invitecode"),
                o = m.fb_dynamic_pixel || a[e] || "";
            m.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", o), m.invitationCode && sessionStorage.setItem("invitecode", m.invitationCode);
            const n = m.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || a[e];
            n && (function(t, i, l, c, s, u, d) {
                t.fbq || (s = t.fbq = function() {
                    s.callMethod ? s.callMethod.apply(s, arguments) : s.queue.push(arguments)
                }, t._fbq || (t._fbq = s), s.push = s, s.loaded = !0, s.version = "2.0", s.queue = [], u = i.createElement(l), u.async = !0, u.src = c, d = i.getElementsByTagName(l)[0], d.parentNode.insertBefore(u, d))
            }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"), fbq("init", n), fbq("track", "PageView"))
        },
        vxth: () => {
            const a = {
                    "2872187916": "485454613935563"
                },
                e = m.invitationCode || sessionStorage.getItem("invitecode"),
                o = m.fb_dynamic_pixel || a[e] || "";
            m.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", o), m.invitationCode && sessionStorage.setItem("invitecode", m.invitationCode);
            const n = m.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || a[e];
            n && (function(t, i, l, c, s, u, d) {
                t.fbq || (s = t.fbq = function() {
                    s.callMethod ? s.callMethod.apply(s, arguments) : s.queue.push(arguments)
                }, t._fbq || (t._fbq = s), s.push = s, s.loaded = !0, s.version = "2.0", s.queue = [], u = i.createElement(l), u.async = !0, u.src = c, d = i.getElementsByTagName(l)[0], d.parentNode.insertBefore(u, d))
            }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"), fbq("init", n), fbq("track", "PageView"))
        }
    };
({}).VITE_POINT && Qo[{}.VITE_POINT]();
const ie = gt(So),
    we = ht();
we.use(bt);
Wo(ie);
ie.use(Dt).use(we);
ie.mount("#app");