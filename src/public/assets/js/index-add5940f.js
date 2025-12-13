import {
    i as n,
    _ as L,
    G as de,
    g as W,
    aQ as ae,
    dn as me,
    dp as Ie,
    x as ie,
    u as Ee,
    S as pe,
    a as Ae,
    dq as De,
    dr as Le,
    ds as xe,
    dt as qe,
    aT as ke,
    b7 as Be,
    aU as Te,
    aV as Pe,
    t as ve,
    h as le,
    du as ce,
    a5 as fe
} from "./page-activity-b0cc3a5b.js";
import {
    V as k,
    W as v,
    ac as I,
    a7 as Q,
    ak as ee,
    D as p,
    ah as ue,
    K as ne,
    M as se,
    X as A,
    a2 as oe,
    a3 as Ce,
    Y as u,
    a4 as D,
    $ as E,
    _ as g,
    w as H,
    I as ge,
    ap as be,
    r as b,
    a1 as ye,
    a8 as x,
    ad as Ve,
    ae as Oe,
    m as Re,
    U as $e,
    F as $,
    C as te,
    a0 as U,
    a5 as P,
    G as Fe,
    aC as Ne,
    b0 as Me,
    b1 as je,
    T as He,
    aa as K,
    Z as Ue,
    x as Ge,
    b2 as We,
    ai as G,
    aj as Ke,
    aZ as ze,
    b3 as Ye,
    b4 as Xe,
    b5 as Ze,
    b6 as Je,
    b7 as Qe,
    b8 as et,
    b9 as tt,
    ba as st,
    bb as ot,
    bc as it,
    bd as at,
    be as nt,
    bf as rt,
    bg as lt,
    bh as ct,
    bi as ut,
    bj as _t,
    bk as dt,
    bl as mt,
    bm as pt,
    bn as vt,
    bo as ft,
    bp as gt,
    bq as bt,
    br as yt,
    bs as ht,
    bt as wt,
    bu as St,
    bv as It,
    bw as Et,
    bx as At,
    by as Dt,
    bz as Lt,
    bA as xt,
    bB as qt,
    bC as kt,
    bD as Bt,
    bE as Tt,
    bF as Pt,
    bG as Ct,
    bH as Vt
} from "./modules-3ee1a0d5.js";
import "./native/index-09743dd6.js";
import "./en-cff984dc.js";
import "./rus-ecb14220.js";
import "./vi-edb4f658.js";
import "./id-16b6cb52.js";
import "./hd-c5b1d7e8.js";
import "./tha-330057b2.js";
import "./md-e8a5e3b0.js";
import "./bra-e19d7dd2.js";
import "./my-32fb9d60.js";
import "./bdt-d8f19d0c.js";
import "./zh-116b9972.js";
import "./pak-656a575f.js";
import "./ar-1c9ff85b.js";
(function() {
    const s = document.createElement("link").relList;
    if (s && s.supports && s.supports("modulepreload")) return;
    for (const t of document.querySelectorAll('link[rel="modulepreload"]')) i(t);
    new MutationObserver(t => {
        for (const r of t)
            if (r.type === "childList")
                for (const l of r.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && i(l)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function o(t) {
        const r = {};
        return t.integrity && (r.integrity = t.integrity), t.referrerPolicy && (r.referrerPolicy = t.referrerPolicy), t.crossOrigin === "use-credentials" ? r.credentials = "include" : t.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r
    }

    function i(t) {
        if (t.ep) return;
        t.ep = !0;
        const r = o(t);
        fetch(t.href, r)
    }
})();
const z = (e, s) => {
        const o = e[s];
        return o ? typeof o == "function" ? o() : Promise.resolve(o) : new Promise((i, t) => {
            (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(t.bind(null, new Error("Unknown variable dynamic import: " + s)))
        })
    },
    Ot = k({
        __name: "Icon",
        props: {
            name: {
                type: String,
                required: !0
            },
            isa: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const s = e,
                o = "redStyle",
                i = ue(() => z(Object.assign({
                    "../../assets/blueStyle/icons/tabBarIcons/activity.svg": () => n(() =>
                        import ("./activity-e56b9ca6.js"), ["assets/js/activity-e56b9ca6.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/blueStyle/icons/tabBarIcons/chat.svg": () => n(() =>
                        import ("./chat-053713c2.js"), ["assets/js/chat-053713c2.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/blueStyle/icons/tabBarIcons/home.svg": () => n(() =>
                        import ("./home-4b53a993.js"), ["assets/js/home-4b53a993.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/blueStyle/icons/tabBarIcons/main.svg": () => n(() =>
                        import ("./main-a25e6208.js"), ["assets/js/main-a25e6208.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/blueStyle/icons/tabBarIcons/promotion.svg": () => n(() =>
                        import ("./promotion-30c9e772.js"), ["assets/js/promotion-30c9e772.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/blueStyle/icons/tabBarIcons/wallet.svg": () => n(() =>
                        import ("./wallet-8924a899.js"), ["assets/js/wallet-8924a899.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/deepBlueStyle/icons/tabBarIcons/activity.svg": () => n(() =>
                        import ("./activity-cabb6569.js"), ["assets/js/activity-cabb6569.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/deepBlueStyle/icons/tabBarIcons/chat.svg": () => n(() =>
                        import ("./chat-37fb0279.js"), ["assets/js/chat-37fb0279.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/deepBlueStyle/icons/tabBarIcons/home.svg": () => n(() =>
                        import ("./home-3433012d.js"), ["assets/js/home-3433012d.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/deepBlueStyle/icons/tabBarIcons/main.svg": () => n(() =>
                        import ("./main-a85af22c.js"), ["assets/js/main-a85af22c.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/deepBlueStyle/icons/tabBarIcons/promotion.svg": () => n(() =>
                        import ("./promotion-3c0729ad.js"), ["assets/js/promotion-3c0729ad.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/deepBlueStyle/icons/tabBarIcons/wallet.svg": () => n(() =>
                        import ("./wallet-6afcf03f.js"), ["assets/js/wallet-6afcf03f.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/goldWStyle/icons/tabBarIcons/activity.svg": () => n(() =>
                        import ("./activity-f8c2c201.js"), ["assets/js/activity-f8c2c201.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/goldWStyle/icons/tabBarIcons/chat.svg": () => n(() =>
                        import ("./chat-1b0cd7ef.js"), ["assets/js/chat-1b0cd7ef.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/goldWStyle/icons/tabBarIcons/home.svg": () => n(() =>
                        import ("./home-6f37abae.js"), ["assets/js/home-6f37abae.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/goldWStyle/icons/tabBarIcons/main.svg": () => n(() =>
                        import ("./main-2f04c24a.js"), ["assets/js/main-2f04c24a.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/goldWStyle/icons/tabBarIcons/promotion.svg": () => n(() =>
                        import ("./promotion-eba24f5b.js"), ["assets/js/promotion-eba24f5b.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/goldWStyle/icons/tabBarIcons/wallet.svg": () => n(() =>
                        import ("./wallet-f527b5bd.js"), ["assets/js/wallet-f527b5bd.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/greenStyle/icons/tabBarIcons/activity.svg": () => n(() =>
                        import ("./activity-07fa1b91.js"), ["assets/js/activity-07fa1b91.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/greenStyle/icons/tabBarIcons/chat.svg": () => n(() =>
                        import ("./chat-2b68ae4c.js"), ["assets/js/chat-2b68ae4c.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/greenStyle/icons/tabBarIcons/home.svg": () => n(() =>
                        import ("./home-c60ba2ca.js"), ["assets/js/home-c60ba2ca.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/greenStyle/icons/tabBarIcons/main.svg": () => n(() =>
                        import ("./main-b79f5ee6.js"), ["assets/js/main-b79f5ee6.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/greenStyle/icons/tabBarIcons/promotion.svg": () => n(() =>
                        import ("./promotion-cb9e9a6e.js"), ["assets/js/promotion-cb9e9a6e.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/greenStyle/icons/tabBarIcons/wallet.svg": () => n(() =>
                        import ("./wallet-7d29ab4f.js"), ["assets/js/wallet-7d29ab4f.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/lightBlueStyle/icons/tabBarIcons/activity.svg": () => n(() =>
                        import ("./activity-df3280af.js"), ["assets/js/activity-df3280af.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/lightBlueStyle/icons/tabBarIcons/chat.svg": () => n(() =>
                        import ("./chat-1ef15985.js"), ["assets/js/chat-1ef15985.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/lightBlueStyle/icons/tabBarIcons/home.svg": () => n(() =>
                        import ("./home-5902e031.js"), ["assets/js/home-5902e031.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/lightBlueStyle/icons/tabBarIcons/main.svg": () => n(() =>
                        import ("./main-9f533c54.js"), ["assets/js/main-9f533c54.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/lightBlueStyle/icons/tabBarIcons/promotion.svg": () => n(() =>
                        import ("./promotion-55c5c430.js"), ["assets/js/promotion-55c5c430.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/lightBlueStyle/icons/tabBarIcons/wallet.svg": () => n(() =>
                        import ("./wallet-5e18ddbe.js"), ["assets/js/wallet-5e18ddbe.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/public3Style/icons/tabBarIcons/chat.svg": () => n(() =>
                        import ("./chat-42d05746.js"), ["assets/js/chat-42d05746.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/purpleStyle/icons/tabBarIcons/activity.svg": () => n(() =>
                        import ("./activity-4bcc0684.js"), ["assets/js/activity-4bcc0684.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/purpleStyle/icons/tabBarIcons/chat.svg": () => n(() =>
                        import ("./chat-5304b2f8.js"), ["assets/js/chat-5304b2f8.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/purpleStyle/icons/tabBarIcons/home.svg": () => n(() =>
                        import ("./home-d93ccfc7.js"), ["assets/js/home-d93ccfc7.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/purpleStyle/icons/tabBarIcons/main.svg": () => n(() =>
                        import ("./main-2edfd551.js"), ["assets/js/main-2edfd551.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/purpleStyle/icons/tabBarIcons/promotion.svg": () => n(() =>
                        import ("./promotion-04771824.js"), ["assets/js/promotion-04771824.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/purpleStyle/icons/tabBarIcons/wallet.svg": () => n(() =>
                        import ("./wallet-a3192daa.js"), ["assets/js/wallet-a3192daa.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/red92Style/icons/tabBarIcons/activity.svg": () => n(() =>
                        import ("./activity-6a45fb12.js"), ["assets/js/activity-6a45fb12.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/red92Style/icons/tabBarIcons/chat.svg": () => n(() =>
                        import ("./chat-cd544f39.js"), []),
                    "../../assets/red92Style/icons/tabBarIcons/home.svg": () => n(() =>
                        import ("./home-51870048.js"), ["assets/js/home-51870048.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/red92Style/icons/tabBarIcons/main.svg": () => n(() =>
                        import ("./main-b53194a7.js"), ["assets/js/main-b53194a7.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/red92Style/icons/tabBarIcons/promotion.svg": () => n(() =>
                        import ("./promotion-67782d94.js"), ["assets/js/promotion-67782d94.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/red92Style/icons/tabBarIcons/wallet.svg": () => n(() =>
                        import ("./wallet-d7651327.js"), ["assets/js/wallet-d7651327.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/redStyle/icons/tabBarIcons/activity.svg": () => n(() =>
                        import ("./activity-f120a1f9.js"), ["assets/js/activity-f120a1f9.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/redStyle/icons/tabBarIcons/chat.svg": () => n(() =>
                        import ("./chat-2ebe2afc.js"), ["assets/js/chat-2ebe2afc.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/redStyle/icons/tabBarIcons/home.svg": () => n(() =>
                        import ("./home-c399e427.js"), ["assets/js/home-c399e427.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/redStyle/icons/tabBarIcons/main.svg": () => n(() =>
                        import ("./main-1686ee63.js"), ["assets/js/main-1686ee63.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/redStyle/icons/tabBarIcons/promotion.svg": () => n(() =>
                        import ("./promotion-cfd8aaa9.js"), ["assets/js/promotion-cfd8aaa9.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"]),
                    "../../assets/redStyle/icons/tabBarIcons/wallet.svg": () => n(() =>
                        import ("./wallet-4bef7d62.js"), ["assets/js/wallet-4bef7d62.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css"])
                }), `../../assets/${o}/icons/tabBarIcons/${s.name}.svg`)),
                t = ue(() => z(Object.assign({}), `../../assets/${o}/icons/tabBarIcons/${s.name}_a.svg`)),
                r = s.name === "promotion",
                l = s.name === "wallet";
            return (c, a) => e.isa ? (v(), I(ee(p(t)), {
                key: 0,
                viewBox: r ? "0 0 57 49" : "0 0 46 44",
                class: Q({
                    wallet: l
                })
            }, null, 8, ["viewBox", "class"])) : (v(), I(ee(p(i)), {
                key: 1,
                viewBox: r ? "0 0 57 49" : "0 0 46 44",
                class: Q({
                    wallet: l
                })
            }, null, 8, ["viewBox", "class"]))
        }
    }),
    Rt = L(Ot, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/TabBar/Icon.vue"]
    ]),
    $t = {
        class: "tabbar__container"
    },
    Ft = ["onClick"],
    Nt = {
        key: 0,
        class: "promotionBg"
    },
    Mt = k({
        __name: "index",
        setup(e) {
            const s = ne(),
                o = se();
            async function i(r) {
                await s.push({
                    name: r
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
            return (r, l) => (v(), A("div", $t, [(v(), A(oe, null, Ce(t, (c, a) => u("div", {
                class: Q(["tabbar__container-item", {
                    active: c.name === p(o).name
                }]),
                key: c + "" + a,
                onClick: _ => i(c.name)
            }, [D(Rt, {
                name: c.name
            }, null, 8, ["name"]), c.name === "promotion" ? (v(), A("div", Nt)) : E("v-if", !0), u("span", null, g(r.$t(c.name)), 1)], 10, Ft)), 64))]))
        }
    });
const jt = L(Mt, [
    ["__scopeId", "data-v-6ab3f23e"],
    ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/TabBar/index.vue"]
]);

function Ht() {
    const e = de(),
        s = () => {
            document.visibilityState === "visible" ? e.setvisibility() : e.setvisibility(0)
        };
    H(() => {
        document.addEventListener("visibilitychange", s)
    }), ge(() => {
        document.removeEventListener("visibilitychange", s)
    })
}
const Ut = k({
    __name: "Customer",
    setup(e) {
        be(f => ({
            "f6a705e1-currentFontFamily": O.value
        }));
        const s = b(!1),
            o = b({
                x: 0,
                y: 0
            }),
            i = b(0),
            t = b(0),
            r = b(0),
            l = b(0),
            c = b(0),
            a = b(0),
            _ = b();
        let d, F, N, C;
        const V = ne();

        function M() {
            B(d, F, N, C) || V.push({
                name: "CustomerService"
            })
        }
        H(() => {
            _.value = document.getElementById("customerId")
        });

        function j(f) {
            s.value = !0;
            var y;
            f.touches ? y = f.touches[0] : y = f, o.value.x = y.clientX, o.value.y = y.clientY, i.value = _.value.offsetLeft, t.value = _.value.offsetTop, d = f.clientX, F = f.clientY
        }

        function w(f) {
            if (s.value) {
                var y, q = document.getElementById("customerId"),
                    R = q.clientWidth,
                    Y = q.clientHeight,
                    X = document.documentElement.clientHeight,
                    h = document.documentElement.clientWidth;
                f.touches ? y = f.touches[0] : y = f, r.value = y.clientX - o.value.x, l.value = y.clientY - o.value.y, c.value = i.value + r.value, a.value = t.value + l.value, c.value <= 0 && (c.value = 0), a.value <= 0 && (a.value = 0), c.value >= h - R && (c.value = h - R), a.value >= X - Y && (a.value = X - Y), _.value.style.left = c.value + "px", _.value.style.top = a.value + "px", document.addEventListener("touchmove", function() {
                    f.preventDefault()
                }, !1)
            }
            f.stopPropagation(), f.preventDefault()
        }

        function S(f) {
            s.value = !1, N = f.clientX, C = f.clientY
        }

        function B(f, y, q, R) {
            return !(Math.sqrt((f - q) * (f - q) + (y - R) * (y - R)) <= 1)
        }
        const O = b("bahnschrift");
        return (f, y) => {
            const q = ye("lazy");
            return v(), A("div", {
                class: "customer",
                onClick: M,
                onMousedown: j,
                onTouchstart: j,
                onMousemove: w,
                onTouchmove: w,
                onMouseup: S,
                id: "customerId"
            }, [x(u("img", null, null, 512), [
                [q, p(W)("home", "icon_sevice")]
            ])], 32)
        }
    }
});
const Gt = L(Ut, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/common/Customer.vue"]
    ]),
    Wt = "/assets/png/logo-f7e29255.png";
const Kt = {},
    he = e => (Ve("data-v-5eb72be7"), e = e(), Oe(), e),
    zt = {
        class: "start-page"
    },
    Yt = he(() => u("div", {
        class: "dice"
    }, null, -1)),
    Xt = he(() => u("img", {
        class: "logo",
        src: Wt
    }, null, -1));

function Zt(e, s) {
    return v(), A("div", zt, [u("div", null, [Yt, u("p", null, g(e.$t("fairAndSafe")), 1), Xt])])
}
const Jt = L(Kt, [
        ["render", Zt],
        ["__scopeId", "data-v-5eb72be7"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/entrance/91club/StartPage.vue"]
    ]),
    Qt = {
        class: "header"
    },
    es = {
        class: "title"
    },
    ts = {
        class: "tip"
    },
    ss = {
        class: "container"
    },
    os = {
        class: "footer"
    },
    is = k({
        __name: "dialog",
        setup(e) {
            const s = ne(),
                o = se(),
                i = b(!1),
                {
                    store: t,
                    closeFirstSave: r
                } = ae(),
                {
                    ActiveSotre: l,
                    getFirstRechargeList: c
                } = me(),
                a = Re(new Date).format("YYYY-MM-DD"),
                _ = $e("firstSave", null),
                d = $(() => _.value == a),
                F = () => {
                    d.value ? (_.value = "", localStorage.removeItem("firstSave")) : _.value = a
                },
                N = () => {
                    i.value = !1, r()
                },
                C = ["activity", "home", "main", "wallet", "promotion"];
            te(() => o.name, w => {
                C.includes(o.name) && V()
            });
            const V = () => {
                    _.value != a && c().then(w => {
                        if (!w.length) {
                            i.value = !1, r();
                            return
                        }
                        const S = w.find(B => B.isFinshed);
                        S && (l.value.isShowFirstSaveDialog = !1), S || (i.value = !0)
                    })
                },
                M = () => {
                    i.value = !1, r(!0), s.push({
                        name: "FirstRecharge"
                    })
                },
                j = () => {
                    i.value = !1, r(!0), s.push({
                        name: "Recharge"
                    })
                };
            return H(() => {
                C.includes(o.name) && V()
            }), (w, S) => {
                const B = U("van-dialog");
                return v(), I(B, {
                    show: i.value,
                    "onUpdate:show": S[0] || (S[0] = O => i.value = O),
                    className: "firstSaveDialog"
                }, {
                    title: P(() => [u("div", Qt, [u("div", es, g(w.$t("firstDialogH")), 1), u("div", ts, g(w.$t("firstDialogTip")), 1)])]),
                    footer: P(() => [u("div", os, [u("div", {
                        class: Q(["active", {
                            a: d.value
                        }]),
                        onClick: F
                    }, g(w.$t("noTipToday")), 3), u("div", {
                        class: "btn",
                        onClick: M
                    }, g(w.$t("activity")), 1)])]),
                    default: P(() => [u("div", ss, [D(Ie, {
                        list: p(l).FirstRechargeList,
                        onGorecharge: j
                    }, null, 8, ["list"])]), u("div", {
                        class: "close",
                        onClick: N
                    })]),
                    _: 1
                }, 8, ["show"])
            }
        }
    });
const as = L(is, [
        ["__scopeId", "data-v-9cd12fb2"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Activity/FirstRecharge/dialog.vue"]
    ]),
    ns = {
        class: "dialog-window"
    },
    rs = {
        class: "dialog-wrapper"
    },
    ls = {
        class: "dialog-title"
    },
    cs = {
        class: "dialog-content"
    },
    us = {
        class: "dialog-window"
    },
    _s = {
        class: "dialog-wrapper"
    },
    ds = {
        class: "dialog-title"
    },
    ms = {
        class: "dialog-tips"
    },
    ps = {
        class: "dialog-content"
    },
    vs = {
        class: "dialog-tips",
        style: {
            "margin-bottom": "0"
        }
    },
    fs = {
        class: "dialog-window"
    },
    gs = {
        class: "dialog-wrapper"
    },
    bs = {
        class: "dialog-tips",
        style: {
            "margin-top": "10px"
        }
    },
    ys = {
        class: "dialog-title",
        style: {
            "margin-top": "0"
        }
    },
    hs = {
        class: "dialog-tips"
    },
    ws = {
        class: "dialog-content"
    },
    Ss = k({
        __name: "AllPageDialog",
        setup(e) {
            se();
            const {
                ActiveSotre: s
            } = me(), {
                store: o,
                closeInvite: i,
                showFirstSave: t,
                onReturnAwards: r
            } = ae();
            return (l, c) => {
                const a = U("van-dialog"),
                    _ = ye("lazy");
                return v(), A(oe, null, [p(t) ? (v(), I(as, {
                    key: 0
                })) : E("v-if", !0), D(a, {
                    show: p(s).showReceiveDialog,
                    "onUpdate:show": c[1] || (c[1] = d => p(s).showReceiveDialog = d),
                    "show-confirm-button": !1,
                    className: "noOverHidden"
                }, {
                    default: P(() => [u("div", ns, [u("div", rs, [x(u("img", null, null, 512), [
                        [_, p(W)("public", "succeed")]
                    ]), u("div", ls, g(l.$t("awardsReceived")), 1), u("div", cs, [x(u("img", null, null, 512), [
                        [_, p(W)("activity/DailyTask", "amountIcon")]
                    ]), u("span", null, g(p(ie)(p(s).receiveAmount)), 1)]), u("div", {
                        class: "dialog-btn",
                        onClick: c[0] || (c[0] = d => p(s).showReceiveDialog = !1)
                    }, g(l.$t("confirm")), 1)])])]),
                    _: 1
                }, 8, ["show"]), D(a, {
                    show: p(o).invite,
                    "onUpdate:show": c[3] || (c[3] = d => p(o).invite = d),
                    "show-confirm-button": !1,
                    className: "noOverHidden"
                }, {
                    default: P(() => [u("div", us, [u("div", _s, [x(u("img", null, null, 512), [
                        [_, p(W)("public", "succeed")]
                    ]), u("div", ds, g(l.$t("inviteTips")), 1), u("p", ms, g(l.$t("inviteAmount")), 1), u("div", ps, [u("span", vs, g(l.$t("commissionAmount")), 1), u("span", null, g(p(ie)(p(o).rebateAmount)), 1)]), u("div", {
                        class: "dialog-btn",
                        onClick: c[2] || (c[2] = d => p(i)())
                    }, g(l.$t("receive")), 1)])])]),
                    _: 1
                }, 8, ["show"]), D(a, {
                    show: p(o).oldUser,
                    "onUpdate:show": c[5] || (c[5] = d => p(o).oldUser = d),
                    "show-confirm-button": !1,
                    "close-on-click-overlay": !0,
                    className: "noOverHidden"
                }, {
                    default: P(() => [u("div", fs, [u("div", gs, [x(u("img", null, null, 512), [
                        [_, p(W)("public", "succeed")]
                    ]), u("p", bs, g(l.$t("oldPromptTip")), 1), u("div", ys, g(l.$t("oldPrompt")), 1), u("p", hs, g(l.$t("oldPromptGift")), 1), u("div", ws, [u("span", null, g(p(ie)(p(o).returnAwards)), 1)]), u("div", {
                        class: "dialog-btn",
                        onClick: c[4] || (c[4] = d => p(r)())
                    }, g(l.$t("receive")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const Is = L(Ss, [
        ["__scopeId", "data-v-3d4fafbb"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/common/AllPageDialog.vue"]
    ]),
    Es = k({
        __name: "App",
        setup(e) {
            be(h => ({
                "f13b4d11-currentFontFamily": O.value
            }));
            const {
                openAll: s
            } = ae(), o = Be(), i = b(!1), t = b(!1), r = se(), l = Ee(), c = pe(), {
                locale: a
            } = Fe(), _ = de(), d = b(!1), F = $(() => r.meta.tabBar), N = "redHome", C = $(() => ["electronic", "blackGoldHome"].includes(N) ? !1 : !["/wallet/Withdraw/C2cDetail", "/wallet/RechargeHistory/RechargeUpiDetail", "/wallet/Withdraw/Upi", "/wallet/Withdraw/AddUpi", "/wallet/Withdraw/c2cCancelWithdrawal/index.vue", "/wallet/otherPay?type=C2C", "/home/game"].includes(r.path)), V = b(0), M = b(Math.floor(Math.random() * 1e4)), j = $(() => r.name + M.value), w = () => {
                o.on("changeKeepAliveKey", () => {
                    M.value = Math.floor(Math.random() * 1e4)
                })
            };
            sessionStorage.getItem("isload") ? i.value = !1 : (t.value = !0, sessionStorage.setItem("isload", t.value.toString()), i.value = !0), c.getHomeSetting(), te(() => c.getAreacode, h => {
                h && l.setNumberType(h.substring(1))
            }), te(() => c.getDL, h => {
                a.value = h, _.updateLanguage(h), Te(h), Pe(ve.global.t)
            }), setTimeout(() => {
                i.value = !1
            }, 2e3);
            const S = b(!1),
                B = Ae();
            B.$subscribe((h, T) => {
                S.value = T.isLoading, B.setLoading(S.value)
            });
            const O = b("bahnschrift");
            let f = De(),
                y = c.getLanguage,
                q = Le(f, y);
            const R = async h => {
                    const T = [{
                            title: "vi",
                            fontStyle: "bahnschrift"
                        }, {
                            title: "else",
                            fontStyle: "'Roboto', 'Inter', sans-serif"
                        }],
                        Z = T.findIndex(J => J.title == q);
                    Z >= 0 ? O.value = T[Z].fontStyle : O.value = T[T.length - 1].fontStyle
                },
                Y = () => {
                    o.on("keyChange", () => {
                        V.value++
                    }), o.on("changeIsGame", () => {
                        d.value = !d.value, S.value = !S.value
                    })
                },
                X = () => {
                    o.off("keyChange"), o.off("changeKeepAliveKey"), o.off("changeIsGame")
                };
            return l.setNumberType(c.getAreacode.substring(1)), R(), H(() => {
                xe() && qe(), s(), X(), Y(), w(), localStorage.getItem("language") && ke(localStorage.getItem("language"))
            }), Ht(), (h, T) => {
                const Z = U("LoadingView");
                return v(), A(oe, null, [D(Z, {
                    loading: S.value,
                    type: "loading",
                    isGame: d.value
                }, {
                    default: P(() => [(v(), I(p(Me), {
                        key: V.value
                    }, {
                        default: P(({
                            Component: J
                        }) => [(v(), I(Ne, {
                            max: 1
                        }, [p(r).meta.keepAlive ? (v(), I(ee(J), {
                            key: j.value
                        })) : E("v-if", !0)], 1024)), p(r).meta.keepAlive ? E("v-if", !0) : (v(), I(ee(J), {
                            key: 0
                        }))]),
                        _: 1
                    })), E("online custom service"), C.value ? (v(), I(Gt, {
                        key: 0
                    })) : (v(), I(p(je), {
                        key: 1,
                        license: "15861567"
                    })), F.value ? (v(), I(jt, {
                        key: 2
                    })) : E("v-if", !0)]),
                    _: 1
                }, 8, ["loading", "isGame"]), i.value ? (v(), I(Jt, {
                    key: 0
                })) : E("v-if", !0), D(Is)], 64)
            }
        }
    });
const As = L(Es, [
    ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/entrance/91club/App.vue"]
]);
const Ds = {
        mounted(e, s) {
            if (typeof s.value[0] != "function" || typeof s.value[1] != "number") throw new Error("v-debounce: value must be an array that includes a function and a number");
            let o = null;
            const i = s.value[0],
                t = s.value[1];
            e.__handleClick__ = function() {
                o && clearTimeout(o), o = setTimeout(() => {
                    i()
                }, t || 500)
            }, e.addEventListener("click", e.__handleClick__)
        },
        beforeUnmount(e) {
            e.removeEventListener("click", e.__handleClick__)
        }
    },
    Ls = {
        mounted(e, s) {
            if (typeof s.value[0] != "function" || typeof s.value[1] != "number") throw new Error("v-throttle: value must be an array that includes a function and a number");
            let o = null;
            const i = s.value[0],
                t = s.value[1];
            e.__handleClick__ = function() {
                o && clearTimeout(o), e.disabled || (e.disabled = !0, i(), o = setTimeout(() => {
                    e.disabled = !1
                }, t || 500))
            }, e.addEventListener("click", e.__handleClick__)
        },
        beforeUnmount(e) {
            e.removeEventListener("click", e.__handleClick__)
        }
    },
    xs = {
        mounted(e, s) {
            e.addEventListener("input", o => {
                const t = e.value.replace(/\D+/g, "");
                e.value = t, s.value = t
            })
        }
    },
    qs = e => ({
        beforeMount: (s, o) => {
            s.classList.add("ar-lazyload");
            const {
                value: i
            } = o;
            s.dataset.origin = i, e.observe(s)
        },
        updated(s, o) {
            s.dataset.origin = o.value, e.observe(s)
        },
        unmounted(s, o) {
            e.unobserve(s)
        },
        mounted(s, o) {
            e.observe(s)
        }
    }),
    ks = {
        mounted(e, s) {
            let o = 0;
            const i = s.value && s.value.wait ? s.value.wait : 3e3,
                t = r => {
                    const l = Date.now();
                    l - o >= i && (o = l, s.value && s.value.handler && s.value.handler(r))
                };
            e.addEventListener("click", t), e._throttleClickCleanup = () => {
                e.removeEventListener("click", t)
            }
        },
        unmounted(e) {
            e._throttleClickCleanup && e._throttleClickCleanup(), delete e._throttleClickCleanup
        }
    },
    Bs = {
        mounted(e, s) {
            const {
                value: o
            } = s;
            let i = He("permission", null);
            i.value === null || !o || (i && (i = JSON.parse(i.value)), i && i[o] === !1 && (e.style.display = "none"))
        }
    },
    _e = {
        debounce: Ds,
        throttle: Ls,
        onlyNum: xs,
        throttleClick: ks,
        haspermission: Bs
    },
    Ts = {
        install: function(e) {
            Object.keys(_e).forEach(o => {
                e.directive(o, _e[o])
            });
            const s = new IntersectionObserver(o => {
                o.forEach(i => {
                    if (i.isIntersecting) {
                        const t = i.target;
                        t.src = t.dataset.origin || le("images", "avatar"), t.onerror = () => {
                            s.unobserve(t);
                            let r = t.dataset.img || le("images", "avatar");
                            if (!r || r != null && r.includes("undefined")) {
                                t.onerror = null;
                                return
                            }
                            t.src = r, t.style.objectFit = "contain"
                        }, t.classList.remove("ar-lazyload"), s.unobserve(t)
                    }
                })
            }, {
                rootMargin: "0px 0px -50px 0px"
            });
            e.directive("lazy", qs(s))
        }
    },
    Ps = {
        class: "navbar-fixed"
    },
    Cs = {
        class: "navbar__content"
    },
    Vs = {
        class: "navbar__content-center"
    },
    Os = {
        class: "navbar__content-title"
    },
    Rs = k({
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
        setup(e, {
            emit: s
        }) {
            const o = b(),
                i = pe(),
                t = $(() => i.getHeadLogo),
                r = () => {
                    s("click-left")
                },
                l = () => {
                    s("click-right")
                };
            return H(() => {}), (c, a) => {
                const _ = U("van-icon");
                return v(), A("div", {
                    class: "navbar",
                    ref_key: "navbar",
                    ref: o
                }, [u("div", Ps, [u("div", Cs, [u("div", {
                    class: "navbar__content-left",
                    onClick: r
                }, [K(c.$slots, "left", {}, () => [e.leftArrow ? (v(), I(_, {
                    key: 0,
                    name: "arrow-left"
                })) : E("v-if", !0)], !0)]), u("div", Vs, [e.headLogo ? (v(), A("div", {
                    key: 0,
                    class: "headLogo",
                    style: Ue({
                        backgroundImage: "url(" + (e.headerUrl || t.value) + ")"
                    })
                }, null, 4)) : E("v-if", !0), K(c.$slots, "center", {}, () => [u("div", Os, g(e.title), 1)], !0)]), u("div", {
                    class: "navbar__content-right",
                    onClick: l
                }, [K(c.$slots, "right", {}, void 0, !0)])])])], 512)
            }
        }
    });
const $s = L(Rs, [
        ["__scopeId", "data-v-12a80a3e"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/common/NavBar.vue"]
    ]),
    Fs = {
        class: "ar-loading-view"
    },
    Ns = {
        class: "loading-wrapper"
    },
    Ms = {
        class: "com__box"
    },
    js = Ke('<div class="loading" data-v-647954c7><div class="shape shape-1" data-v-647954c7></div><div class="shape shape-2" data-v-647954c7></div><div class="shape shape-3" data-v-647954c7></div><div class="shape shape-4" data-v-647954c7></div></div>', 1),
    Hs = {
        class: "skeleton-wrapper"
    },
    Us = k({
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
        setup(e) {
            const s = e,
                o = b();
            let i = null;
            return H(async () => {
                await Ge(), i = We.loadAnimation({
                    container: o.value,
                    renderer: "svg",
                    loop: !0,
                    autoplay: !0,
                    path: "/data.json"
                })
            }), te(() => s.loading, () => {
                s.type === "loading" && !s.isGame && (s.loading ? i && i.play() : i && i.stop())
            }), ge(() => {
                i && i.destroy(), i = null
            }), (t, r) => {
                const l = U("VanSkeleton");
                return v(), A(oe, null, [x(u("div", Fs, [K(t.$slots, "template", {}, () => [x(u("div", Ns, [E(" <VanLoading /> "), x(u("div", {
                    ref_key: "element",
                    ref: o,
                    class: "loading-animat"
                }, null, 512), [
                    [G, !t.isGame]
                ]), x(u("div", Ms, [E(" loading "), js, E(" 说明：组件名 ")], 512), [
                    [G, t.isGame]
                ]), E(' <div class="animation"></div> ')], 512), [
                    [G, t.type === "loading"]
                ]), x(u("div", Hs, [D(l, {
                    row: 10
                }), D(l, {
                    title: "",
                    avatar: "",
                    row: 5
                }), D(l, {
                    title: "",
                    row: 5
                })], 512), [
                    [G, t.type === "skeleton"]
                ])], !0)], 512), [
                    [G, t.loading]
                ]), K(t.$slots, "default", {}, void 0, !0)], 64)
            }
        }
    });
const Gs = L(Us, [
    ["__scopeId", "data-v-647954c7"],
    ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/common/LoadingView.vue"]
]);
const Ws = ["xlink:href"],
    Ks = {
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
        setup(e) {
            const s = e,
                o = $(() => `#icon-${s.name}`),
                i = $(() => s.name ? `svg-icon icon-${s.name}` : "svg-icon");
            return (t, r) => (v(), A("svg", ze({
                class: i.value
            }, t.$attrs, {
                style: {
                    color: e.color
                }
            }), [u("use", {
                "xlink:href": o.value
            }, null, 8, Ws)], 16))
        }
    },
    zs = L(Ks, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/common/svgIcons.vue"]
    ]),
    Ys = {
        class: "ar-searchbar__selector"
    },
    Xs = {
        class: "ar-searchbar__selector-default"
    },
    Zs = k({
        __name: "ArSelect",
        props: {
            selectName: {
                type: String,
                default: ""
            }
        },
        emits: ["click-select"],
        setup(e, {
            emit: s
        }) {
            const o = () => {
                s("click-select")
            };
            return (i, t) => {
                const r = U("van-icon");
                return v(), A("div", Ys, [u("div", {
                    onClick: o
                }, [u("span", Xs, g(e.selectName), 1), D(r, {
                    name: "arrow-down"
                })])])
            }
        }
    });
const Js = L(Zs, [
        ["__scopeId", "data-v-fa757a88"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/common/ArSelect.vue"]
    ]),
    Qs = "redHome",
    we = "redStyle";
z(Object.assign((() => {
    let e = !1;
    return {
        "../assets/styles/other/blackGoldHome/reset.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/styles/other/*/reset.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/reset-11485637.css"])),
        "../assets/styles/other/blueHome/reset.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/styles/other/*/reset.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/reset-c4c0cd1e.css"])),
        "../assets/styles/other/damanHome/reset.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/styles/other/*/reset.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/reset-d460b2e8.css"])),
        "../assets/styles/other/electronic/reset.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/styles/other/*/reset.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/reset-63e5cb02.css"])),
        "../assets/styles/other/public3Home/reset.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/styles/other/*/reset.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/reset-643cd8ae.css"])),
        "../assets/styles/other/red92Home/reset.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/styles/other/*/reset.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/reset-1642856a.css"])),
        "../assets/styles/other/redHome/reset.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/styles/other/*/reset.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/reset-18dc7e67.css"])),
        "../assets/styles/other/whiteGoldHome/reset.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/styles/other/*/reset.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/reset-4a96816b.css"]))
    }
})()), `../assets/styles/other/${Qs}/reset.scss`);
z(Object.assign((() => {
    let e = !1;
    return {
        "../assets/blueStyle/reset.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/*/reset.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/reset-cf9148b6.css"])),
        "../assets/deepBlueStyle/reset.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/*/reset.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/reset-aff21626.css"])),
        "../assets/goldWStyle/reset.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/*/reset.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/reset-4c2bba56.css"])),
        "../assets/greenStyle/reset.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/*/reset.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/reset-a8743424.css"])),
        "../assets/lightBlueStyle/reset.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/*/reset.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/reset-50a50d13.css"])),
        "../assets/public3Style/reset.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/*/reset.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/reset-45dbfc82.css"])),
        "../assets/purpleStyle/reset.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/*/reset.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/reset-85c0cd1b.css"])),
        "../assets/red92Style/reset.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/*/reset.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/reset-7dcd284f.css"])),
        "../assets/redStyle/reset.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/*/reset.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/reset-caf052b6.css"])),
        "../assets/styles/reset.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/*/reset.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/reset-1e1d152c.css"]))
    }
})()), `../assets/${we}/reset.scss`);
z(Object.assign((() => {
    let e = !1;
    return {
        "../assets/blueStyle/root.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/*/root.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/root-b6e30d4c.css"])),
        "../assets/deepBlueStyle/root.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/*/root.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/root-cf3403f3.css"])),
        "../assets/goldWStyle/root.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/*/root.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/root-bd8f9bb7.css"])),
        "../assets/greenStyle/root.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/*/root.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/root-e6a13ade.css"])),
        "../assets/lightBlueStyle/root.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/*/root.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/root-2ab04af1.css"])),
        "../assets/public3Style/root.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/*/root.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/root-c7e1dc56.css"])),
        "../assets/purpleStyle/root.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/*/root.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/root-8c873adb.css"])),
        "../assets/red92Style/root.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/*/root.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/root-98a5d726.css"])),
        "../assets/redStyle/root.scss": () => (e || (e = !0, console.warn('Default import of CSS without `?inline` is deprecated. Add the `{ query: \'?inline\' }` glob option to fix this.\nFor example: `import.meta.glob("../assets/*/root.scss", { "query": "?inline" })`')), n(() => Promise.resolve({}), ["assets/css/root-a9d5bd50.css"]))
    }
})()), `../assets/${we}/root.scss`);
const eo = e => {
    e.component("NavBar", $s), e.component("LoadingView", Gs), e.component("ArSelect", Js), e.component("svg-icon", zs), e.use(Ye).use(Xe).use(Ze).use(Je).use(Qe).use(et).use(tt).use(st).use(ot).use(it).use(at).use(nt).use(rt).use(lt).use(ct).use(ut).use(_t).use(dt).use(mt).use(pt).use(vt).use(ft).use(gt).use(bt).use(yt).use(ht).use(wt).use(St).use(It).use(Et).use(At).use(Dt).use(Lt).use(xt).use(qt).use(kt).use(Bt).use(ve).use(Ts).use(Tt);
    let s = e.config.globalProperties,
        o = {};
    o.TopHeight = 38, Object.keys(ce.refiter).forEach(i => {
        o[i] = ce.refiter[i]
    }), s.$u = o
};

function to() {
    let e = window.location.hash;
    e.includes("?") || (e = location.search);

    function s(o) {
        if (o) {
            const r = o.indexOf("?");
            r !== -1 && (o = o.substring(r + 1));
            var i = o.split("&"),
                t = {};
            return i.forEach(function(l) {
                var c = l.split("=");
                t[c[0]] = decodeURIComponent(c[1])
            }), t
        } else return {}
    }
    return s(e)
}
const m = to(),
    so = {
        "91club": () => {
            const e = {
                    "356634288423": "749293993830590"
                },
                s = m.invitationCode || sessionStorage.getItem("invitecode"),
                o = m.fb_dynamic_pixel || e[s] || "";
            m.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", o);
            const i = m.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || e[s];
            i && (function(t, r, l, c, a, _, d) {
                t.fbq || (a = t.fbq = function() {
                    a.callMethod ? a.callMethod.apply(a, arguments) : a.queue.push(arguments)
                }, t._fbq || (t._fbq = a), a.push = a, a.loaded = !0, a.version = "2.0", a.queue = [], _ = r.createElement(l), _.async = !0, _.src = c, d = r.getElementsByTagName(l)[0], d.parentNode.insertBefore(_, d))
            }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"), fbq("init", i), fbq("track", "PageView"))
        },
        yjlottery: () => {
            (function(e, s, o, i, t, r, l) {
                e.fbq || (t = e.fbq = function() {
                    t.callMethod ? t.callMethod.apply(t, arguments) : t.queue.push(arguments)
                }, e._fbq || (e._fbq = t), t.push = t, t.loaded = !0, t.version = "2.0", t.queue = [], r = s.createElement(o), r.async = !0, r.src = i, l = s.getElementsByTagName(o)[0], l.parentNode.insertBefore(r, l))
            })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"), fbq("init", "865606625239361"), fbq("track", "PageView")
        },
        "66lottery": () => {
            m.gtagId && localStorage.setItem("gtagId", m.gtagId), m.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", m.fb_dynamic_pixel);
            const e = m.gtagId || localStorage.getItem("gtagId") || "AW-11352382371",
                s = m.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || "";
            (function() {
                window.dataLayer = window.dataLayer || [];

                function o() {
                    dataLayer.push(arguments)
                }
                window.gtag = o;
                var i = document.createElement("script");
                i.src = "https://www.googletagmanager.com/gtag/js?id=" + e;
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(i, t), o("js", new Date), o("config", e)
            })(), s && (function(o, i, t, r, l, c, a) {
                o.fbq || (l = o.fbq = function() {
                    l.callMethod ? l.callMethod.apply(l, arguments) : l.queue.push(arguments)
                }, o._fbq || (o._fbq = l), l.push = l, l.loaded = !0, l.version = "2.0", l.queue = [], c = i.createElement(t), c.async = !0, c.src = r, a = i.getElementsByTagName(t)[0], a.parentNode.insertBefore(c, a))
            }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"), fbq("init", s), fbq("track", "PageView"))
        },
        lottery7: () => {
            const e = {
                    "18685100001": "749293993830590"
                },
                s = m.invitationCode || sessionStorage.getItem("invitecode"),
                o = m.fb_dynamic_pixel || e[s] || "";
            m.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", o), m.invitationCode && sessionStorage.setItem("invitecode", m.invitationCode);
            const i = m.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || e[s];
            i && (function(t, r, l, c, a, _, d) {
                t.fbq || (a = t.fbq = function() {
                    a.callMethod ? a.callMethod.apply(a, arguments) : a.queue.push(arguments)
                }, t._fbq || (t._fbq = a), a.push = a, a.loaded = !0, a.version = "2.0", a.queue = [], _ = r.createElement(l), _.async = !0, _.src = c, d = r.getElementsByTagName(l)[0], d.parentNode.insertBefore(_, d))
            }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"), fbq("init", i), fbq("track", "PageView"))
        },
        pakgames: () => {
            const e = {
                    "28187260351": "1611788192994065"
                },
                s = m.invitationCode || sessionStorage.getItem("invitecode"),
                o = m.fb_dynamic_pixel || e[s] || "";
            m.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", o), m.invitationCode && sessionStorage.setItem("invitecode", m.invitationCode);
            const i = m.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || e[s];
            i && (function(t, r, l, c, a, _, d) {
                t.fbq || (a = t.fbq = function() {
                    a.callMethod ? a.callMethod.apply(a, arguments) : a.queue.push(arguments)
                }, t._fbq || (t._fbq = a), a.push = a, a.loaded = !0, a.version = "2.0", a.queue = [], _ = r.createElement(l), _.async = !0, _.src = c, d = r.getElementsByTagName(l)[0], d.parentNode.insertBefore(_, d))
            }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"), fbq("init", i), fbq("track", "PageView"))
        },
        fb999: () => {
            const e = {
                    17837762: "1544377389683477"
                },
                s = m.invitationCode || sessionStorage.getItem("invitecode"),
                o = m.fb_dynamic_pixel || e[s] || "";
            m.invitationCode && sessionStorage.setItem("invitecode", m.invitationCode), m.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", o);
            const i = m.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || e[s];
            i && (function(t, r, l, c, a, _, d) {
                t.fbq || (a = t.fbq = function() {
                    a.callMethod ? a.callMethod.apply(a, arguments) : a.queue.push(arguments)
                }, t._fbq || (t._fbq = a), a.push = a, a.loaded = !0, a.version = "2.0", a.queue = [], _ = r.createElement(l), _.async = !0, _.src = c, d = r.getElementsByTagName(l)[0], d.parentNode.insertBefore(_, d))
            }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"), fbq("init", i), fbq("track", "PageView"))
        },
        okwin: () => {
            const e = {
                    "38316220667": "2061590324241394"
                },
                s = m.invitationCode || sessionStorage.getItem("invitecode"),
                o = m.fb_dynamic_pixel || e[s] || "";
            m.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", o), m.invitationCode && sessionStorage.setItem("invitecode", m.invitationCode);
            const i = m.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || e[s];
            i && (function(t, r, l, c, a, _, d) {
                t.fbq || (a = t.fbq = function() {
                    a.callMethod ? a.callMethod.apply(a, arguments) : a.queue.push(arguments)
                }, t._fbq || (t._fbq = a), a.push = a, a.loaded = !0, a.version = "2.0", a.queue = [], _ = r.createElement(l), _.async = !0, _.src = c, d = r.getElementsByTagName(l)[0], d.parentNode.insertBefore(_, d))
            }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"), fbq("init", i), fbq("track", "PageView"))
        }
    };
so["91club"]();
fe.addRoute({
    path: "/",
    name: "home",
    component: () => n(() =>
        import ("./page-home-d40a6f97.js").then(e => e.M), ["assets/js/page-home-d40a6f97.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css", "assets/js/page-activity-b0cc3a5b.js", "assets/js/native/index-09743dd6.js", "assets/js/en-cff984dc.js", "assets/js/rus-ecb14220.js", "assets/js/vi-edb4f658.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-e19d7dd2.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-116b9972.js", "assets/js/pak-656a575f.js", "assets/js/ar-1c9ff85b.js", "assets/css/page-activity-f0ca3544.css", "assets/css/page-home-384125d0.css"]),
    meta: {
        title: "home",
        tabBar: !0,
        keepAlive: !1
    }
});
const re = Pt(As),
    Se = Ct();
eo(re);
Se.use(Vt);
re.use(fe).use(Se);
re.mount("#app");