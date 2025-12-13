import {
    _ as L,
    G as le,
    g as U,
    a_ as ee,
    dy as re,
    dz as ge,
    n as Q,
    u as he,
    S as ce,
    a as be,
    dA as ye,
    dB as we,
    dC as ke,
    dD as Se,
    b1 as Ce,
    aY as $e,
    b2 as Ae,
    b3 as Le,
    J as ue,
    h as se,
    dE as oe,
    dF as Ie,
    r as de,
    i as De
} from "./page-activity-76f2bb47.js";
import {
    _ as B,
    P as te,
    Q as J,
    a2 as T,
    o as d,
    j as w,
    a4 as Z,
    a5 as Ee,
    l as n,
    a6 as k,
    a1 as y,
    a0 as _,
    a9 as ve,
    H as c,
    A as H,
    N as _e,
    ap as me,
    r as m,
    a3 as pe,
    aa as A,
    q as Te,
    Z as Be,
    J as R,
    G as W,
    ae as C,
    a7 as E,
    a8 as Pe,
    K as Ne,
    aD as xe,
    aC as ne,
    b0 as Ve,
    b1 as Re,
    X as Fe,
    ac as z,
    $ as Ge,
    B as Oe,
    b2 as je,
    ak as M,
    k as He,
    aZ as Me,
    b3 as Ue,
    b4 as ze,
    b5 as Ke,
    b6 as Ye,
    b7 as qe,
    b8 as Xe,
    b9 as We,
    ba as Je,
    bb as Ze,
    bc as Qe,
    bd as et,
    be as tt,
    bf as at,
    bg as st,
    bh as ot,
    bi as nt,
    bj as it,
    bk as lt,
    bl as rt,
    bm as ct,
    bn as ut,
    bo as dt,
    bp as vt,
    bq as _t,
    br as mt,
    bs as pt,
    bt as ft,
    bu as gt,
    bv as ht,
    bw as bt,
    bx as yt,
    by as wt,
    bz as kt,
    bA as St,
    bB as Ct,
    bC as $t,
    bD as At,
    bE as Lt,
    bF as It,
    bG as Dt,
    bH as Et
} from "./modules-ca96e989.js";
import "./native/index-5b57e344.js";
import "./en-93cdab10.js";
import "./rus-ecb14220.js";
import "./vi-40bd560a.js";
import "./id-24cc3835.js";
import "./hd-c5b1d7e8.js";
import "./tha-330057b2.js";
import "./md-02b1fc1c.js";
import "./bra-1f3ea623.js";
import "./my-80d37f62.js";
import "./bdt-d8f19d0c.js";
import "./zh-3589f8b3.js";
import "./pak-9f46abf2.js";
import "./ar-64903102.js";
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
    new MutationObserver(s => {
        for (const i of s)
            if (i.type === "childList")
                for (const r of i.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && o(r)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function a(s) {
        const i = {};
        return s.integrity && (i.integrity = s.integrity), s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function o(s) {
        if (s.ep) return;
        s.ep = !0;
        const i = a(s);
        fetch(s.href, i)
    }
})();
const Tt = {
        class: "tabbar__container"
    },
    Bt = ["onClick"],
    Pt = {
        key: 0,
        class: "promotionBg"
    },
    Nt = B({
        __name: "index",
        setup(t) {
            const e = te(),
                a = J();
            async function o(i) {
                await e.push({
                    name: i
                })
            }
            const s = [{
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
            return (i, r) => {
                const l = T("svg-icon");
                return d(), w("div", Tt, [(d(), w(Z, null, Ee(s, (u, p) => n("div", {
                    class: ve(["tabbar__container-item", {
                        active: u.name === c(a).name
                    }]),
                    key: u + "" + p,
                    onClick: f => o(u.name)
                }, [k(l, {
                    name: u.name
                }, null, 8, ["name"]), u.name === "promotion" ? (d(), w("div", Pt)) : y("v-if", !0), n("span", null, _(i.$t(u.name)), 1)], 10, Bt)), 64))])
            }
        }
    });
const xt = L(Nt, [
    ["__scopeId", "data-v-6ab3f23e"],
    ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/TabBar/index.vue"]
]);

function Vt() {
    const t = le(),
        e = () => {
            document.visibilityState === "visible" ? t.setvisibility() : t.setvisibility(0)
        };
    H(() => {
        document.addEventListener("visibilitychange", e)
    }), _e(() => {
        document.removeEventListener("visibilitychange", e)
    })
}
const Rt = B({
    __name: "Customer",
    setup(t) {
        me(v => ({
            "f6a705e1-currentFontFamily": x.value
        }));
        const e = m(!1),
            a = m({
                x: 0,
                y: 0
            }),
            o = m(0),
            s = m(0),
            i = m(0),
            r = m(0),
            l = m(0),
            u = m(0),
            p = m();
        let f, F, P, N;
        const G = te();

        function O() {
            j(f, F, P, N) || G.push({
                name: "CustomerService"
            })
        }
        H(() => {
            p.value = document.getElementById("customerId")
        });

        function b(v) {
            e.value = !0;
            var g;
            v.touches ? g = v.touches[0] : g = v, a.value.x = g.clientX, a.value.y = g.clientY, o.value = p.value.offsetLeft, s.value = p.value.offsetTop, f = v.clientX, F = v.clientY
        }

        function $(v) {
            if (e.value) {
                var g, I = document.getElementById("customerId"),
                    V = I.clientWidth,
                    K = I.clientHeight,
                    Y = document.documentElement.clientHeight,
                    h = document.documentElement.clientWidth;
                v.touches ? g = v.touches[0] : g = v, i.value = g.clientX - a.value.x, r.value = g.clientY - a.value.y, l.value = o.value + i.value, u.value = s.value + r.value, l.value <= 0 && (l.value = 0), u.value <= 0 && (u.value = 0), l.value >= h - V && (l.value = h - V), u.value >= Y - K && (u.value = Y - K), p.value.style.left = l.value + "px", p.value.style.top = u.value + "px", document.addEventListener("touchmove", function() {
                    v.preventDefault()
                }, !1)
            }
            v.stopPropagation(), v.preventDefault()
        }

        function S(v) {
            e.value = !1, P = v.clientX, N = v.clientY
        }

        function j(v, g, I, V) {
            return !(Math.sqrt((v - I) * (v - I) + (g - V) * (g - V)) <= 1)
        }
        const x = m("bahnschrift");
        return (v, g) => {
            const I = pe("lazy");
            return d(), w("div", {
                class: "customer",
                onClick: O,
                onMousedown: b,
                onTouchstart: b,
                onMousemove: $,
                onTouchmove: $,
                onMouseup: S,
                id: "customerId"
            }, [A(n("img", null, null, 512), [
                [I, c(U)("home", "icon_sevice")]
            ])], 32)
        }
    }
});
const Ft = L(Rt, [
    ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/common/Customer.vue"]
]);
const Gt = {},
    Ot = {
        class: "start-page"
    };

function jt(t, e) {
    return d(), w("div", Ot)
}
const Ht = L(Gt, [
        ["render", jt],
        ["__scopeId", "data-v-5eb72be7"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/entrance/ar023/StartPage.vue"]
    ]),
    Mt = {
        class: "header"
    },
    Ut = {
        class: "title"
    },
    zt = {
        class: "tip"
    },
    Kt = {
        class: "container"
    },
    Yt = {
        class: "footer"
    },
    qt = B({
        __name: "dialog",
        setup(t) {
            const e = te(),
                a = J(),
                o = m(!1),
                {
                    closeFirstSave: s
                } = ee(),
                {
                    ActiveSotre: i,
                    getFirstRechargeList: r
                } = re(),
                l = Te(new Date).format("YYYY-MM-DD"),
                u = Be("firstSave", null),
                p = R(() => u.value == l),
                f = () => {
                    p.value ? (u.value = "", localStorage.removeItem("firstSave")) : u.value = l
                },
                F = () => {
                    o.value = !1, s()
                },
                P = ["activity", "home", "main", "wallet", "promotion"];
            W(() => a.name, b => {
                P.includes(a.name) && N()
            });
            const N = () => {
                    u.value != l && r().then(b => {
                        if (!b.length) {
                            o.value = !1, s();
                            return
                        }
                        const $ = b.find(S => S.isFinshed);
                        $ && (i.value.isShowFirstSaveDialog = !1), $ || (o.value = !0)
                    })
                },
                G = () => {
                    o.value = !1, s(!0), e.push({
                        name: "FirstRecharge"
                    })
                },
                O = () => {
                    o.value = !1, s(!0), e.push({
                        name: "Recharge"
                    })
                };
            return H(() => {
                P.includes(a.name) && N()
            }), (b, $) => {
                const S = T("svg-icon"),
                    j = T("van-dialog");
                return d(), C(j, {
                    show: o.value,
                    "onUpdate:show": $[0] || ($[0] = x => o.value = x),
                    className: "firstSaveDialog"
                }, {
                    title: E(() => [n("div", Mt, [n("div", Ut, _(b.$t("firstDialogH")), 1), n("div", zt, _(b.$t("firstDialogTip")), 1)])]),
                    footer: E(() => [n("div", Yt, [n("div", {
                        class: ve(["active", {
                            a: p.value
                        }]),
                        onClick: f
                    }, [k(S, {
                        name: "active"
                    }), Pe(_(b.$t("noTipToday")), 1)], 2), n("div", {
                        class: "btn",
                        onClick: G
                    }, _(b.$t("activity")), 1)])]),
                    default: E(() => [n("div", Kt, [k(ge, {
                        list: c(i).FirstRechargeList,
                        onGorecharge: O
                    }, null, 8, ["list"])]), n("div", {
                        class: "close",
                        onClick: F
                    })]),
                    _: 1
                }, 8, ["show"])
            }
        }
    });
const Xt = L(qt, [
        ["__scopeId", "data-v-9cd12fb2"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Activity/FirstRecharge/dialog.vue"]
    ]),
    Wt = {
        class: "dialog-window"
    },
    Jt = {
        class: "dialog-wrapper"
    },
    Zt = {
        class: "dialog-title"
    },
    Qt = {
        class: "dialog-content"
    },
    ea = {
        class: "dialog-window"
    },
    ta = {
        class: "dialog-wrapper"
    },
    aa = {
        class: "dialog-title"
    },
    sa = {
        class: "dialog-tips"
    },
    oa = {
        class: "dialog-content"
    },
    na = {
        class: "dialog-tips",
        style: {
            "margin-bottom": "0"
        }
    },
    ia = {
        class: "dialog-window"
    },
    la = {
        class: "dialog-wrapper"
    },
    ra = {
        class: "dialog-tips",
        style: {
            "margin-top": "10px"
        }
    },
    ca = {
        class: "dialog-title",
        style: {
            "margin-top": "0"
        }
    },
    ua = {
        class: "dialog-tips"
    },
    da = {
        class: "dialog-content"
    },
    va = B({
        __name: "AllPageDialog",
        setup(t) {
            J();
            const {
                ActiveSotre: e
            } = re(), {
                store: a,
                closeInvite: o,
                showFirstSave: s,
                onReturnAwards: i
            } = ee();
            return (r, l) => {
                const u = T("van-dialog"),
                    p = pe("lazy");
                return d(), w(Z, null, [c(s) ? (d(), C(Xt, {
                    key: 0
                })) : y("v-if", !0), k(u, {
                    show: c(e).showReceiveDialog,
                    "onUpdate:show": l[1] || (l[1] = f => c(e).showReceiveDialog = f),
                    "show-confirm-button": !1,
                    className: "noOverHidden"
                }, {
                    default: E(() => [n("div", Wt, [n("div", Jt, [A(n("img", null, null, 512), [
                        [p, c(U)("public", "succeed")]
                    ]), n("div", Zt, _(r.$t("awardsReceived")), 1), n("div", Qt, [A(n("img", null, null, 512), [
                        [p, c(U)("activity/DailyTask", "amountIcon")]
                    ]), n("span", null, _(c(Q)(c(e).receiveAmount)), 1)]), n("div", {
                        class: "dialog-btn",
                        onClick: l[0] || (l[0] = f => c(e).showReceiveDialog = !1)
                    }, _(r.$t("confirm")), 1)])])]),
                    _: 1
                }, 8, ["show"]), k(u, {
                    show: c(a).invite,
                    "onUpdate:show": l[3] || (l[3] = f => c(a).invite = f),
                    "show-confirm-button": !1,
                    className: "noOverHidden"
                }, {
                    default: E(() => [n("div", ea, [n("div", ta, [A(n("img", null, null, 512), [
                        [p, c(U)("public", "succeed")]
                    ]), n("div", aa, _(r.$t("inviteTips")), 1), n("p", sa, _(r.$t("inviteAmount")), 1), n("div", oa, [n("span", na, _(r.$t("commissionAmount")), 1), n("span", null, _(c(Q)(c(a).rebateAmount)), 1)]), n("div", {
                        class: "dialog-btn",
                        onClick: l[2] || (l[2] = f => c(o)())
                    }, _(r.$t("receive")), 1)])])]),
                    _: 1
                }, 8, ["show"]), k(u, {
                    show: c(a).oldUser,
                    "onUpdate:show": l[5] || (l[5] = f => c(a).oldUser = f),
                    "show-confirm-button": !1,
                    "close-on-click-overlay": !0,
                    className: "noOverHidden"
                }, {
                    default: E(() => [n("div", ia, [n("div", la, [A(n("img", null, null, 512), [
                        [p, c(U)("public", "succeed")]
                    ]), n("p", ra, _(r.$t("oldPromptTip")), 1), n("div", ca, _(r.$t("oldPrompt")), 1), n("p", ua, _(r.$t("oldPromptGift")), 1), n("div", da, [n("span", null, _(c(Q)(c(a).returnAwards)), 1)]), n("div", {
                        class: "dialog-btn",
                        onClick: l[4] || (l[4] = f => c(i)())
                    }, _(r.$t("receive")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const _a = L(va, [
        ["__scopeId", "data-v-3d4fafbb"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/common/AllPageDialog.vue"]
    ]),
    ma = B({
        __name: "App",
        setup(t) {
            me(h => ({
                "f13b4d11-currentFontFamily": x.value
            }));
            const {
                openAll: e
            } = ee(), a = $e(), o = m(!1), s = m(!1), i = J(), r = he(), l = ce(), {
                locale: u
            } = Ne(), p = le(), f = m(!1), F = R(() => i.meta.tabBar), P = "electronic", N = R(() => ["electronic", "blackGoldHome"].includes(P) ? !1 : !["/wallet/Withdraw/C2cDetail", "/wallet/RechargeHistory/RechargeUpiDetail", "/wallet/Withdraw/Upi", "/wallet/Withdraw/AddUpi", "/wallet/Withdraw/c2cCancelWithdrawal/index.vue", "/wallet/otherPay?type=C2C", "/home/game"].includes(i.path)), G = m(0), O = m(Math.floor(Math.random() * 1e4)), b = R(() => i.name + O.value), $ = () => {
                a.on("changeKeepAliveKey", () => {
                    O.value = Math.floor(Math.random() * 1e4)
                })
            };
            sessionStorage.getItem("isload") ? o.value = !1 : (s.value = !0, sessionStorage.setItem("isload", s.value.toString()), o.value = !0), l.getHomeSetting(), W(() => l.getAreacode, h => {
                h && r.setNumberType(h.substring(1))
            }), W(() => l.getDL, h => {
                u.value = h, p.updateLanguage(h), Ae(h), Le(ue.global.t)
            }), setTimeout(() => {
                o.value = !1
            }, 2e3);
            const S = m(!1),
                j = be();
            j.$subscribe((h, D) => {
                S.value = D.isLoading, j.setLoading(S.value)
            });
            const x = m("bahnschrift");
            let v = ye(),
                g = l.getLanguage,
                I = we(v, g);
            const V = async h => {
                    const D = [{
                            title: "vi",
                            fontStyle: "bahnschrift"
                        }, {
                            title: "else",
                            fontStyle: "'Roboto', 'Inter', sans-serif"
                        }],
                        q = D.findIndex(X => X.title == I);
                    q >= 0 ? x.value = D[q].fontStyle : x.value = D[D.length - 1].fontStyle
                },
                K = () => {
                    a.on("keyChange", () => {
                        G.value++
                    }), a.on("changeIsGame", () => {
                        f.value = !f.value, S.value = !S.value
                    })
                },
                Y = () => {
                    a.off("keyChange"), a.off("changeKeepAliveKey"), a.off("changeIsGame")
                };
            return r.setNumberType(l.getAreacode.substring(1)), V(), H(() => {
                ke() && Se(), e(), Y(), K(), $(), localStorage.getItem("language") && Ce(localStorage.getItem("language"))
            }), Vt(), (h, D) => {
                const q = T("LoadingView");
                return d(), w(Z, null, [k(q, {
                    loading: S.value,
                    type: "loading",
                    isGame: f.value
                }, {
                    default: E(() => [(d(), C(c(Ve), {
                        key: G.value
                    }, {
                        default: E(({
                            Component: X
                        }) => [(d(), C(xe, {
                            max: 1
                        }, [c(i).meta.keepAlive ? (d(), C(ne(X), {
                            key: b.value
                        })) : y("v-if", !0)], 1024)), c(i).meta.keepAlive ? y("v-if", !0) : (d(), C(ne(X), {
                            key: 0
                        }))]),
                        _: 1
                    })), y("online custom service"), N.value ? (d(), C(Ft, {
                        key: 0
                    })) : (d(), C(c(Re), {
                        key: 1,
                        license: "15861567"
                    })), F.value ? (d(), C(xt, {
                        key: 2
                    })) : y("v-if", !0)]),
                    _: 1
                }, 8, ["loading", "isGame"]), o.value ? (d(), C(Ht, {
                    key: 0
                })) : y("v-if", !0), k(_a)], 64)
            }
        }
    });
const pa = L(ma, [
    ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/entrance/ar023/App.vue"]
]);
const fa = {
        mounted(t, e) {
            if (typeof e.value[0] != "function" || typeof e.value[1] != "number") throw new Error("v-debounce: value must be an array that includes a function and a number");
            let a = null;
            const o = e.value[0],
                s = e.value[1];
            t.__handleClick__ = function() {
                a && clearTimeout(a), a = setTimeout(() => {
                    o()
                }, s || 500)
            }, t.addEventListener("click", t.__handleClick__)
        },
        beforeUnmount(t) {
            t.removeEventListener("click", t.__handleClick__)
        }
    },
    ga = {
        mounted(t, e) {
            if (typeof e.value[0] != "function" || typeof e.value[1] != "number") throw new Error("v-throttle: value must be an array that includes a function and a number");
            let a = null;
            const o = e.value[0],
                s = e.value[1];
            t.__handleClick__ = function() {
                a && clearTimeout(a), t.disabled || (t.disabled = !0, o(), a = setTimeout(() => {
                    t.disabled = !1
                }, s || 500))
            }, t.addEventListener("click", t.__handleClick__)
        },
        beforeUnmount(t) {
            t.removeEventListener("click", t.__handleClick__)
        }
    },
    ha = {
        mounted(t, e) {
            t.addEventListener("input", a => {
                const s = t.value.replace(/\D+/g, "");
                t.value = s, e.value = s
            })
        }
    },
    ba = t => ({
        beforeMount: (e, a) => {
            e.classList.add("ar-lazyload");
            const {
                value: o
            } = a;
            e.dataset.origin = o, t.observe(e)
        },
        updated(e, a) {
            e.dataset.origin = a.value, t.observe(e)
        },
        unmounted(e, a) {
            t.unobserve(e)
        },
        mounted(e, a) {
            t.observe(e)
        }
    }),
    ya = {
        mounted(t, e) {
            let a = 0;
            const o = e.value && e.value.wait ? e.value.wait : 3e3,
                s = i => {
                    const r = Date.now();
                    r - a >= o && (a = r, e.value && e.value.handler && e.value.handler(i))
                };
            t.addEventListener("click", s), t._throttleClickCleanup = () => {
                t.removeEventListener("click", s)
            }
        },
        unmounted(t) {
            t._throttleClickCleanup && t._throttleClickCleanup(), delete t._throttleClickCleanup
        }
    },
    wa = {
        mounted(t, e) {
            const {
                value: a
            } = e;
            let o = Fe("permission", null);
            o.value === null || !a || (o && (o = JSON.parse(o.value)), o && o[a] === !1 && (t.style.display = "none"))
        }
    },
    ie = {
        debounce: fa,
        throttle: ga,
        onlyNum: ha,
        throttleClick: ya,
        haspermission: wa
    },
    ka = {
        install: function(t) {
            Object.keys(ie).forEach(a => {
                t.directive(a, ie[a])
            });
            const e = new IntersectionObserver(a => {
                a.forEach(o => {
                    if (o.isIntersecting) {
                        const s = o.target;
                        s.src = s.dataset.origin || se("images", "avatar"), s.onerror = () => {
                            e.unobserve(s);
                            let i = s.dataset.img || se("images", "avatar");
                            if (!i || i != null && i.includes("undefined")) {
                                s.onerror = null;
                                return
                            }
                            s.src = i, s.style.objectFit = "contain"
                        }, s.classList.remove("ar-lazyload"), e.unobserve(s)
                    }
                })
            }, {
                rootMargin: "0px 0px -50px 0px"
            });
            t.directive("lazy", ba(e))
        }
    },
    Sa = {
        class: "navbar-fixed"
    },
    Ca = {
        class: "navbar__content"
    },
    $a = {
        class: "navbar__content-center"
    },
    Aa = {
        class: "navbar__content-title"
    },
    La = B({
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
                default: "#f7f8ff"
            },
            classN: {
                type: String,
                default: ""
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
        setup(t, {
            emit: e
        }) {
            const a = m(),
                o = ce(),
                s = R(() => o.getHeadLogo),
                i = () => {
                    e("click-left")
                },
                r = () => {
                    e("click-right")
                };
            return H(() => {}), (l, u) => {
                const p = T("van-icon");
                return d(), w("div", {
                    class: "navbar",
                    ref_key: "navbar",
                    ref: a
                }, [n("div", Sa, [n("div", Ca, [n("div", {
                    class: "navbar__content-left",
                    onClick: i
                }, [z(l.$slots, "left", {}, () => [t.leftArrow ? (d(), C(p, {
                    key: 0,
                    name: "arrow-left"
                })) : y("v-if", !0)], !0)]), n("div", $a, [t.headLogo ? (d(), w("div", {
                    key: 0,
                    class: "headLogo",
                    style: Ge({
                        backgroundImage: "url(" + (t.headerUrl || s.value) + ")"
                    })
                }, null, 4)) : y("v-if", !0), z(l.$slots, "center", {}, () => [n("div", Aa, _(t.title), 1)], !0)]), n("div", {
                    class: "navbar__content-right",
                    onClick: r
                }, [z(l.$slots, "right", {}, void 0, !0)])])])], 512)
            }
        }
    });
const Ia = L(La, [
        ["__scopeId", "data-v-12a80a3e"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/common/NavBar.vue"]
    ]),
    Da = {
        class: "ar-loading-view"
    },
    Ea = {
        class: "loading-wrapper"
    },
    Ta = {
        class: "com__box"
    },
    Ba = He('<div class="loading" data-v-647954c7><div class="shape shape-1" data-v-647954c7></div><div class="shape shape-2" data-v-647954c7></div><div class="shape shape-3" data-v-647954c7></div><div class="shape shape-4" data-v-647954c7></div></div>', 1),
    Pa = {
        class: "skeleton-wrapper"
    },
    Na = B({
        __name: "LoadingView",
        props: {
            loading: {
                type: Boolean,
                required: !0
            },
            type: {
                type: String,
                required: !0
            },
            isGame: {
                type: Boolean,
                required: !0
            }
        },
        setup(t) {
            const e = t,
                a = m();
            let o = null;
            return H(async () => {
                await Oe(), o = je.loadAnimation({
                    container: a.value,
                    renderer: "svg",
                    loop: !0,
                    autoplay: !0,
                    path: "/data.json"
                })
            }), W(() => e.loading, () => {
                e.type === "loading" && !e.isGame && (e.loading ? o && o.play() : o && o.stop())
            }), _e(() => {
                o && o.destroy(), o = null
            }), (s, i) => {
                const r = T("VanSkeleton");
                return d(), w(Z, null, [A(n("div", Da, [z(s.$slots, "template", {}, () => [A(n("div", Ea, [y(" <VanLoading /> "), A(n("div", {
                    ref_key: "element",
                    ref: a,
                    class: "loading-animat"
                }, null, 512), [
                    [M, !s.isGame]
                ]), A(n("div", Ta, [y(" loading "), Ba, y(" 说明：组件名 ")], 512), [
                    [M, s.isGame]
                ]), y(' <div class="animation"></div> ')], 512), [
                    [M, s.type === "loading"]
                ]), A(n("div", Pa, [k(r, {
                    row: 10
                }), k(r, {
                    title: "",
                    avatar: "",
                    row: 5
                }), k(r, {
                    title: "",
                    row: 5
                })], 512), [
                    [M, s.type === "skeleton"]
                ])], !0)], 512), [
                    [M, s.loading]
                ]), z(s.$slots, "default", {}, void 0, !0)], 64)
            }
        }
    });
const xa = L(Na, [
    ["__scopeId", "data-v-647954c7"],
    ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/common/LoadingView.vue"]
]);
const Va = ["xlink:href"],
    Ra = {
        __name: "svgIcons",
        props: {
            name: {
                type: String,
                required: !0
            },
            color: {
                type: String,
                default: ""
            }
        },
        setup(t) {
            const e = t,
                a = R(() => `#icon-${e.name}`),
                o = R(() => e.name ? `svg-icon icon-${e.name}` : "svg-icon");
            return (s, i) => (d(), w("svg", Me({
                class: o.value
            }, s.$attrs, {
                style: {
                    color: t.color
                }
            }), [n("use", {
                "xlink:href": a.value
            }, null, 8, Va)], 16))
        }
    },
    Fa = L(Ra, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/common/svgIcons.vue"]
    ]),
    Ga = {
        class: "ar-searchbar__selector"
    },
    Oa = {
        class: "ar-searchbar__selector-default"
    },
    ja = B({
        __name: "ArSelect",
        props: {
            selectName: {
                type: String,
                default: ""
            }
        },
        emits: ["click-select"],
        setup(t, {
            emit: e
        }) {
            const a = () => {
                e("click-select")
            };
            return (o, s) => {
                const i = T("van-icon");
                return d(), w("div", Ga, [n("div", {
                    onClick: a
                }, [n("span", Oa, _(t.selectName), 1), k(i, {
                    name: "arrow-down"
                })])])
            }
        }
    });
const Ha = L(ja, [
        ["__scopeId", "data-v-fa757a88"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/common/ArSelect.vue"]
    ]),
    Ma = t => {
        t.component("NavBar", Ia), t.component("LoadingView", xa), t.component("ArSelect", Ha), t.component("svg-icon", Fa), t.use(Ue).use(ze).use(Ke).use(Ye).use(qe).use(Xe).use(We).use(Je).use(Ze).use(Qe).use(et).use(tt).use(at).use(st).use(ot).use(nt).use(it).use(lt).use(rt).use(ct).use(ut).use(dt).use(vt).use(_t).use(mt).use(pt).use(ft).use(gt).use(ht).use(bt).use(yt).use(wt).use(kt).use(St).use(Ct).use($t).use(At).use(ue).use(ka).use(Lt);
        let e = t.config.globalProperties,
            a = {};
        a.TopHeight = 38, Object.keys(oe.refiter).forEach(o => {
            a[o] = oe.refiter[o]
        }), e.$u = a
    };
({}).VITE_POINT && Ie[{}.VITE_POINT]();
de.addRoute({
    path: "/",
    name: "home",
    component: () => De(() =>
        import ("./page-home-4e6afe78.js").then(t => t.X), ["assets/js/page-home-4e6afe78.js", "assets/js/modules-ca96e989.js", "assets/css/modules-b642e9bc.css", "assets/js/page-activity-76f2bb47.js", "assets/js/native/index-5b57e344.js", "assets/js/en-93cdab10.js", "assets/js/rus-ecb14220.js", "assets/js/vi-40bd560a.js", "assets/js/id-24cc3835.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-02b1fc1c.js", "assets/js/bra-1f3ea623.js", "assets/js/my-80d37f62.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-3589f8b3.js", "assets/js/pak-9f46abf2.js", "assets/js/ar-64903102.js", "assets/css/page-activity-e94516d2.css", "assets/css/page-home-bdf6197d.css"]),
    meta: {
        title: "home",
        tabBar: !0,
        keepAlive: !1
    }
});
const ae = It(pa),
    fe = Dt();
Ma(ae);
fe.use(Et);
ae.use(de).use(fe);
ae.mount("#app");