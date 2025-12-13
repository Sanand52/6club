import {
    r as m,
    G as ee,
    K,
    F as E,
    V as A,
    a0 as U,
    W as f,
    X as k,
    a2 as we,
    a3 as Je,
    a7 as O,
    D as o,
    Y as e,
    _ as r,
    a4 as S,
    a5 as j,
    B as xe,
    a1 as oe,
    a8 as L,
    a6 as B,
    $ as q,
    am as de,
    k as M,
    w as le,
    z as Qe,
    ac as ce,
    Z as J,
    ai as z,
    x as Q,
    ad as pe,
    ae as ve,
    C as ye,
    J as he,
    aA as et,
    aM as Ee,
    I as Re,
    ab as tt
} from "./modules-3ee1a0d5.js";
import {
    G as Ve,
    S as Le,
    aR as Te,
    aS as st,
    g as Y,
    aT as ot,
    aU as nt,
    aV as at,
    t as _e,
    h as be,
    _ as H,
    u as te,
    aW as rt,
    A as ae,
    aX as lt,
    aY as Be,
    aZ as Ue,
    a_ as it,
    a as Ne,
    D as qe,
    a$ as De,
    b0 as Me,
    b1 as ut,
    b2 as ct,
    aQ as dt
} from "./page-activity-b0cc3a5b.js";
import {
    v as ke,
    a as pt
} from "./page-home-d40a6f97.js";
const Fe = m(!1);

function Ae() {
    const {
        locale: p
    } = ee(), b = Ve(), i = K();
    async function t(u, a) {
        ot(u), p.value = u, b.updateLanguage(u), await nt(u), at(_e.global.t), localStorage.setItem("needUpd", "1"), a === 1 ? c() : Fe.value = !1
    }
    const c = () => {
            i.back()
        },
        s = E(() => {
            let u = 0;
            const a = Le().getLanguage,
                v = [];
            if (a) {
                const g = a == null ? void 0 : a.replace("th", "tha").split("|");
                g == null || g.forEach(d => {
                    Te.forEach(h => {
                        (d.toLowerCase().indexOf(h.key.toLowerCase()) !== -1 || h.key.toLowerCase().indexOf(d.toLowerCase()) !== -1) && (v.push(h), u++)
                    })
                })
            }
            return b.getLanguage || b.updateLanguage(st()), u == 0 ? Te : v
        });
    return {
        onClick: t,
        languagesList: s,
        getIcons: Y,
        locale: p,
        goBack: c,
        getLangName: u => {
            const a = s.value.find(v => v.key === u);
            return (a == null ? void 0 : a.key.toLocaleUpperCase()) || ""
        },
        show: Fe
    }
}
const vt = ["onClick"],
    _t = {
        class: "item-title"
    },
    mt = ["src"],
    gt = {
        key: 0
    },
    ht = {
        key: 1
    },
    ft = A({
        __name: "index",
        props: {
            type: {
                type: Number,
                default: 1
            }
        },
        setup(p) {
            const {
                onClick: b,
                languagesList: i,
                locale: t
            } = Ae();
            return (c, s) => {
                const n = U("van-radio"),
                    u = U("van-radio-group");
                return f(), k("div", {
                    class: O(p.type === 2 ? "list info" : "list")
                }, [(f(!0), k(we, null, Je(o(i), (a, v) => (f(), k("div", {
                    class: O(["item ar-1px-b", a.key == o(t) ? "checked" : ""]),
                    key: v,
                    onClick: g => o(b)(a.key, p.type)
                }, [e("div", _t, [e("img", {
                    src: o(be)("languages", a.key)
                }, null, 8, mt), p.type === 2 ? (f(), k("span", gt, r(a.key.toLocaleUpperCase()), 1)) : (f(), k("span", ht, r(a.name), 1))]), S(u, {
                    modelValue: o(t),
                    "onUpdate:modelValue": s[0] || (s[0] = g => xe(t) ? t.value = g : null)
                }, {
                    default: j(() => [S(n, {
                        name: a.key
                    }, null, 8, ["name"])]),
                    _: 2
                }, 1032, ["modelValue"])], 10, vt))), 128))], 2)
            }
        }
    });
const wt = H(ft, [
        ["__scopeId", "data-v-29e221c4"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Main/LanguageList/index.vue"]
    ]),
    yt = {
        class: "img"
    },
    bt = A({
        __name: "LangPopup",
        setup(p) {
            const {
                getLangName: b,
                locale: i,
                show: t
            } = Ae(), c = Le(), s = E(() => c.getLoginChangeLanguage == "1");
            return (n, u) => {
                const a = U("van-popup"),
                    v = oe("lazy");
                return f(), k("div", null, [s.value ? (f(), k("div", {
                    key: 0,
                    class: "right",
                    onClick: u[0] || (u[0] = g => t.value = !0)
                }, [e("div", yt, [L(e("img", null, null, 512), [
                    [v, o(be)("languages", o(i))]
                ])]), B(" " + r(o(b)(o(i))), 1)])) : q("v-if", !0), S(a, {
                    show: o(t),
                    "onUpdate:show": u[1] || (u[1] = g => xe(t) ? t.value = g : null),
                    class: "popup",
                    position: "bottom",
                    teleport: "body"
                }, {
                    default: j(() => [S(wt, {
                        type: 2
                    })]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const kt = H(bt, [
        ["__scopeId", "data-v-8610bd15"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Login/LangPopup.vue"]
    ]),
    St = {
        class: "popups"
    },
    $t = {
        class: "popup-content"
    },
    Ct = {
        class: "tit"
    },
    It = {
        class: "con"
    },
    Pt = {
        class: "info"
    },
    Tt = {
        class: "txt"
    },
    Ft = {
        class: "txt"
    },
    xt = {
        class: "box"
    },
    Et = ["placeholder"],
    Rt = {
        class: "lab"
    },
    Vt = {
        class: "popup-foot"
    },
    Lt = A({
        __name: "index",
        props: {
            showPopup: {
                type: Boolean,
                default: m(!1)
            }
        },
        emits: ["update:showPopup", "onConfirm", "onBack"],
        setup(p, {
            emit: b
        }) {
            const i = p,
                t = K(),
                {
                    t: c
                } = ee(),
                s = E({
                    get() {
                        return i.showPopup || !1
                    },
                    set(g) {
                        b("update:showPopup", g)
                    }
                }),
                n = m(""),
                u = () => {
                    if (!n.value) return M(c("googleKey"));
                    b("onConfirm", n.value.toString())
                },
                a = () => {
                    n.value = "", b("onBack")
                };

            function v() {
                t.push({
                    name: "CustomerService"
                })
            }
            return (g, d) => {
                const h = U("van-icon"),
                    C = U("van-popup"),
                    l = oe("throttle-click"),
                    y = oe("lazy");
                return f(), k("div", St, [S(C, {
                    show: s.value,
                    "onUpdate:show": d[1] || (d[1] = P => s.value = P),
                    position: "center",
                    round: "",
                    class: "popup",
                    "close-on-click-overlay": !1
                }, {
                    default: j(() => [e("div", $t, [e("div", Ct, r(o(c)("googleVerification")), 1), e("div", It, [e("div", Pt, [e("p", Tt, r(o(c)("googleTip5")), 1), e("p", Ft, r(o(c)("googleTip6")), 1)]), e("div", xt, [L(e("input", {
                        class: "input",
                        type: "text",
                        "onUpdate:modelValue": d[0] || (d[0] = P => n.value = P),
                        maxlength: "6",
                        oninput: "value=value.replace(/\\D/g,'')",
                        placeholder: o(c)("PgoogleVerification")
                    }, null, 8, Et), [
                        [de, n.value]
                    ]), e("p", Rt, [S(h, {
                        class: "icon",
                        name: "warning-o"
                    }), B(r(o(c)("PVerificationCode")) + " ", 1), e("span", {
                        onClick: v
                    }, r(o(c)("contactServicer")), 1)])]), e("div", Vt, [L((f(), k("div", null, [B(r(o(c)("confirm")), 1)])), [
                        [l, {
                            handler: u,
                            wait: 1e3
                        }]
                    ]), e("div", {
                        onClick: a
                    }, r(o(c)("withdrawDialogDesc6")), 1)])]), L(e("img", {
                        class: "close",
                        onClick: a
                    }, null, 512), [
                        [y, o(be)("main", "close")]
                    ])])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const He = H(Lt, [
        ["__scopeId", "data-v-96e240c3"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Main/VerifyPopup/index.vue"]
    ]),
    Z = p => (pe("data-v-869b9ee0"), p = p(), ve(), p),
    Bt = ["src"],
    Ut = ["src"],
    Nt = {
        key: 1,
        class: "captcha_message"
    },
    qt = {
        class: "captcha_message__icon"
    },
    Dt = {
        key: 0,
        height: "28",
        viewBox: "0 0 28 28",
        width: "28",
        xmlns: "http://www.w3.org/2000/svg"
    },
    Mt = Z(() => e("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "#fff",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "1.5"
    }, [e("path", {
        d: "M22.776 4.073A13.2 13.2 0 0 0 14 .75C6.682.75.75 6.682.75 14S6.682 27.25 14 27.25 27.25 21.318 27.25 14c0-.284-.009-.566-.027-.845"
    }), e("path", {
        d: "M7 12.5l7 7 13-13"
    })], -1)),
    At = [Mt],
    Ht = {
        key: 1,
        height: "28",
        viewBox: "0 0 28 28",
        width: "28",
        xmlns: "http://www.w3.org/2000/svg"
    },
    Ot = Z(() => e("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "#fff",
        "stroke-width": "1.5"
    }, [e("circle", {
        cx: "14",
        cy: "14",
        r: "13.25"
    }), e("path", {
        d: "M8.75 8.75l10.5 10.5M19.25 8.75l-10.5 10.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1)),
    jt = [Ot],
    Wt = {
        class: "captcha_message__text"
    },
    zt = {
        key: 2,
        class: "captcha_message loadding"
    },
    Gt = Z(() => e("div", {
        class: "captcha_message__icon captcha_message__icon--loadding"
    }, null, -1)),
    Xt = Z(() => e("div", {
        class: "captcha_message__text"
    }, "加载中...", -1)),
    Yt = [Gt, Xt],
    Kt = {
        key: 3,
        class: "captcha_message"
    },
    Zt = Z(() => e("div", {
        class: "captcha_message__icon captcha_message__icon--loadding"
    }, null, -1)),
    Jt = Z(() => e("div", {
        class: "captcha_message__text"
    }, null, -1)),
    Qt = [Zt, Jt],
    es = Z(() => e("path", {
        d: "M500.864 545.728a47.744 47.744 0 0 0 6.72-48.896 24.704 24.704 0 0 0-4.48-8.384L240.256 193.088a34.24 34.24 0 0 0-28.608-17.408 34.24 34.24 0 0 0-25.856 12.864 46.592 46.592 0 0 0 0 59.52l238.08 264.512-238.08 264.512a46.592 46.592 0 0 0-1.088 59.52 32 32 0 0 0 50.56 0l265.6-290.88z",
        "p-id": "820"
    }, null, -1)),
    ts = Z(() => e("path", {
        d: "M523.84 248.064l236.992 264.512-238.08 264.512a46.592 46.592 0 0 0 0 59.52 32 32 0 0 0 50.56 0l265.6-292.608a47.744 47.744 0 0 0 6.72-48.832 24.704 24.704 0 0 0-4.48-8.448L578.304 191.36a34.24 34.24 0 0 0-55.552-2.816 46.592 46.592 0 0 0 1.088 59.52z",
        "p-id": "821"
    }, null, -1)),
    ss = [es, ts],
    os = {
        key: 0,
        class: "captcha__actions"
    },
    ns = ["fill"],
    as = Z(() => e("path", {
        d: "M10,4 C12.0559549,4 13.9131832,5.04358655 15.0015086,6.68322231 L15,5.5 C15,5.22385763 15.2238576,5 15.5,5 C15.7761424,5 16,5.22385763 16,5.5 L16,8.5 C16,8.77614237 15.7761424,9 15.5,9 L12.5,9 C12.2238576,9 12,8.77614237 12,8.5 C12,8.22385763 12.2238576,8 12.5,8 L14.5842317,8.00000341 C13.7999308,6.20218044 12.0143541,5 10,5 C7.23857625,5 5,7.23857625 5,10 C5,12.7614237 7.23857625,15 10,15 C11.749756,15 13.3431487,14.0944653 14.2500463,12.6352662 C14.3958113,12.4007302 14.7041063,12.328767 14.9386423,12.4745321 C15.1731784,12.6202971 15.2451415,12.9285921 15.0993765,13.1631281 C14.0118542,14.9129524 12.0990688,16 10,16 C6.6862915,16 4,13.3137085 4,10 C4,6.6862915 6.6862915,4 10,4 Z",
        "fill-rule": "nonzero"
    }, null, -1)),
    rs = [as],
    ls = A({
        __name: "SlideCaptcha",
        props: {
            width: {
                type: Number,
                default: 340
            },
            height: {
                type: Number,
                default: 212
            },
            barHeight: {
                type: Number,
                default: 40
            },
            handlerIconWidth: {
                type: Number,
                default: 16
            },
            handlerIconHeigth: {
                type: Number,
                default: 16
            },
            background: {
                type: String,
                default: "#eee"
            },
            circle: {
                type: Boolean,
                default: !1
            },
            radius: {
                type: String,
                default: "4px"
            },
            text: {
                type: String,
                default: "按住滑块拖动"
            },
            progressBarBg: {
                type: String,
                default: "#76c61d"
            },
            successTip: {
                type: String,
                default: "验证通过，超过80%用户"
            },
            failTip: {
                type: String,
                default: "验证未通过，拖动滑块将悬浮图像正确合并"
            },
            showRefresh: {
                type: Boolean,
                default: !1
            },
            refreshColor: {
                type: String,
                default: "#505050"
            }
        },
        emits: ["finish", "refresh"],
        setup(p, {
            expose: b,
            emit: i
        }) {
            const t = p,
                c = m(!1),
                s = m(!1),
                n = m(0),
                u = m(0),
                a = m(!1),
                v = m(!1),
                g = m(!1),
                d = m([]),
                h = m(void 0),
                C = m(!1),
                l = m(!1),
                y = m(!1),
                P = m(""),
                I = m(""),
                R = m(!1),
                $ = E(() => ({
                    width: t.width + "px",
                    height: t.height + "px",
                    position: "relative",
                    overflow: "hidden"
                })),
                x = E(() => ({
                    width: t.width + "px"
                })),
                V = E(() => ({
                    width: t.width + "px",
                    height: t.barHeight + "px",
                    lineHeight: t.barHeight + "px",
                    background: t.background,
                    borderRadius: t.circle ? t.barHeight / 2 + "px" : t.radius
                })),
                W = E(() => ({
                    background: t.progressBarBg,
                    height: t.barHeight + "px",
                    borderRadius: t.circle ? t.barHeight / 2 + "px 0 0 " + t.barHeight / 2 + "px" : t.radius
                })),
                se = E(() => ({
                    height: t.barHeight + "px",
                    width: t.width + "px"
                })),
                w = E(() => ({
                    width: t.barHeight + "px",
                    height: t.barHeight - 2 + "px"
                })),
                F = E(() => ({
                    width: t.handlerIconWidth + "px",
                    height: t.handlerIconHeigth + "px"
                })),
                ie = E(() => t.refreshColor),
                ne = E(() => ({
                    color: t.refreshColor
                })),
                _ = m(),
                T = m(),
                ue = m(),
                G = m(),
                D = m();
            le(() => {});
            const je = () => {
                    c.value = !0, Q(() => {
                        Ce(), Ye()
                    }), y.value = !0
                },
                We = (N, X) => {
                    y.value = !1, P.value = N, I.value = X
                },
                ze = () => {
                    l.value = !0
                },
                Ge = N => {
                    N.value = N, l.value = !1, C.value = !0
                },
                Ce = () => {
                    n.value = 0, u.value = 0, d.value = [], s.value = !1, g.value = !1, y.value = !1, l.value = !1, C.value = !1, R.value = !1, T && (T.value.style.width = 0), G && (G.value.style.left = 0), D && (D.value.style.left = 0)
                },
                Ie = () => {
                    window.removeEventListener("touchmove", me), window.removeEventListener("touchend", ge), window.removeEventListener("mousemove", me), window.removeEventListener("mouseup", ge)
                },
                Pe = N => {
                    !R.value && P.value && I.value && !g.value && (window.addEventListener("touchmove", me), window.addEventListener("touchend", ge), window.addEventListener("mousemove", me), window.addEventListener("mouseup", ge), s.value = !0, h.value = new Date, n.value = N.pageX || N.touches[0].pageX, u.value = N.pageY || N.touches[0].pageY)
                },
                me = N => {
                    if (s.value && !R.value && P.value && I.value && !g.value) {
                        const X = (N.pageX || N.touches[0].pageX) - n.value,
                            fe = (N.pageY || N.touches[0].pageY) - u.value;
                        D.value.style.left = X + "px", T.value.style.width = X + t.barHeight / 2 + "px", G.value.style.left = X + "px", d.value.push({
                            x: Math.round(X),
                            y: Math.round(fe),
                            t: new Date().getTime() - h.value.getTime()
                        })
                    }
                },
                ge = () => {
                    s.value && !R.value && P.value && I.value && !g.value && (s.value = !1, g.value = !0, Ie(), i("finish", {
                        backgroundImageWidth: ue.value.offsetWidth,
                        backgroundImageHeight: ue.value.offsetHeight,
                        sliderImageWidth: G.value.offsetWidth,
                        sliderImageHeight: G.value.offsetHeight,
                        startTime: h.value,
                        endTime: new Date,
                        tracks: d.value
                    }))
                },
                Xe = N => {
                    c.value = N
                },
                Ye = () => {
                    _.value.style.setProperty("--textColor", "#333"), _.value.style.setProperty("--width", Math.floor(t.width / 2) + "px"), _.value.style.setProperty("--pwidth", -Math.floor(t.width / 2) + "px")
                },
                Ke = () => {
                    Ce(), i("refresh")
                };
            return b({
                startRequestVerify: ze,
                endRequestVerify: Ge,
                startRequestGenerate: je,
                endRequestGenerate: We,
                setShowHiden: Xe
            }), Qe(() => {
                Ie()
            }), (N, X) => {
                const fe = U("van-popup");
                return f(), ce(fe, {
                    show: c.value,
                    "onUpdate:show": X[0] || (X[0] = Ze => c.value = Ze),
                    teleport: "body"
                }, {
                    default: j(() => [e("div", {
                        class: "captcha",
                        style: J(x.value)
                    }, [e("div", {
                        class: "captcha__main",
                        style: J($.value)
                    }, [P.value ? (f(), k("img", {
                        key: 0,
                        ref_key: "backgroundRef",
                        ref: ue,
                        alt: "background",
                        class: "captcha_background",
                        src: P.value
                    }, null, 8, Bt)) : q("v-if", !0), L(e("img", {
                        ref_key: "sliderRef",
                        ref: G,
                        alt: "slider",
                        class: O(["captcha_slider", {
                            goFirst: a.value,
                            goKeep: v.value
                        }]),
                        src: I.value
                    }, null, 10, Ut), [
                        [z, I.value]
                    ]), C.value ? (f(), k("div", Nt, [e("div", qt, [R.value ? (f(), k("svg", Dt, At)) : (f(), k("svg", Ht, jt))]), e("div", Wt, r(R.value ? p.successTip : p.failTip), 1)])) : q("v-if", !0), y.value ? (f(), k("div", zt, Yt)) : q("v-if", !0), l.value ? (f(), k("div", Kt, Qt)) : q("v-if", !0)], 4), e("div", {
                        ref_key: "dragVerifyRef",
                        ref: _,
                        class: "captcha__bar",
                        style: J(V.value)
                    }, [e("div", {
                        ref_key: "progressBarRef",
                        ref: T,
                        class: O(["captcha_progress_bar", {
                            goFirst2: a.value
                        }]),
                        style: J(W.value)
                    }, null, 6), e("div", {
                        class: "captcha_progress_bar__text",
                        style: J(se.value)
                    }, r(p.text), 5), e("div", {
                        ref_key: "handlerRef",
                        ref: D,
                        class: O(["captcha_handler", {
                            goFirst: a.value
                        }]),
                        style: J(w.value),
                        onMousedown: Pe,
                        onTouchstart: Pe
                    }, [(f(), k("svg", {
                        "p-id": "819",
                        style: J(F.value),
                        version: "1.1",
                        viewBox: "0 0 1024 1024",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, ss, 4))], 38)], 4), p.showRefresh ? (f(), k("div", os, [e("a", {
                        class: "captcha__action",
                        style: J(ne.value),
                        onClick: Ke
                    }, [(f(), k("svg", {
                        fill: ie.value,
                        height: "20px",
                        version: "1.1",
                        viewBox: "0 0 20 20",
                        width: "20px",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, rs, 8, ns)), q(' <span class="captcha__action__text">刷新</span> ')], 4)])) : q("v-if", !0)], 4)]),
                    _: 1
                }, 8, ["show"])
            }
        }
    });
const Oe = H(ls, [
        ["__scopeId", "data-v-869b9ee0"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Login/SlideCaptcha.vue"]
    ]),
    is = {
        class: "verifyInput__container"
    },
    us = {
        class: "verifyInput__container-label"
    },
    cs = {
        class: "verifyInput__container-label__icon"
    },
    ds = {
        key: 0
    },
    ps = {
        key: 1
    },
    vs = {
        class: "verifyInput__container-input"
    },
    _s = ["placeholder"],
    ms = {
        key: 0
    },
    gs = {
        key: 1
    },
    hs = {
        class: "verifyInput__container-tip"
    },
    fs = A({
        __name: "VerifyInput",
        props: {
            value: {
                type: String,
                required: !1
            },
            typeP: {
                type: String,
                required: !1
            },
            isShowVerifyT: {
                type: Boolean,
                required: !1
            },
            placeholder: {
                type: String,
                required: !1,
                default: _e.global.t("registerTip1")
            },
            sendFunc: {
                type: Function,
                required: !1
            },
            number: {
                type: String,
                required: !1
            },
            numberType: {
                type: String,
                required: !1,
                default: ""
            },
            showVerify: {
                type: Boolean,
                required: !1,
                default: !0
            },
            email: {
                type: String,
                required: !1
            },
            loginType: {
                type: String,
                required: !1
            }
        },
        emits: ["update:value"],
        setup(p, {
            emit: b
        }) {
            const i = p,
                {
                    t
                } = ee(),
                c = te(),
                n = Ve().getUserInfo,
                u = K(),
                a = E({
                    get() {
                        return i.value || ""
                    },
                    set(l) {
                        b("update:value", l)
                    }
                }),
                v = m(!0);
            async function g() {
                var y;
                if (v.value && (v.value = !1), c.countDown > 0) return;
                if (u.currentRoute.value.name === "rpwd" || u.currentRoute.value.name === "register" || u.currentRoute.value.name === "SettingC-UpdatePhone" && !i.isShowVerifyT) {
                    if (!((y = i.number) != null && y.trim())) return M({
                        message: t("telUndetected"),
                        wordBreak: "break-word"
                    });
                    const P = (i.number.trim() + i.numberType.trim()).length;
                    if (P < 10 || P > 14) return M({
                        message: t("wrongTel"),
                        wordBreak: "break-word"
                    })
                } else if (!localStorage.getItem("numberType") && localStorage.getItem("number")) return M({
                    message: t("telUndetected"),
                    wordBreak: "break-word"
                });
                !i.sendFunc || await i.sendFunc() === -1 || c.sendCode()
            }
            const d = E(() => {
                    var l;
                    return i.number ? i.numberType + i.number : ((l = n == null ? void 0 : n.verifyMethods) == null ? void 0 : l.mobile) || localStorage.getItem("numberType") + localStorage.getItem("number")
                }),
                h = l => {
                    const y = l.target;
                    y.value = y.value.replace(/\s+/g, ""), y.value = y.value.replace(/[^\d]/g, "")
                };

            function C() {
                u.push({
                    name: "CustomerService"
                })
            }
            return (l, y) => {
                const P = U("van-icon"),
                    I = oe("lazy");
                return L((f(), k("div", is, [L(e("div", us, [L(e("img", cs, null, 512), [
                    [I, o(Y)("main", "verify")]
                ]), l.typeP === "updatePhone" || l.typeP === "lock" ? (f(), k("span", ds, r(l.$t("sendVerifyCodeTo")) + " " + r(o(rt)(d.value)), 1)) : (f(), k("span", ps, r(l.$t("verifyCode")), 1))], 512), [
                    [z, !(l.isShowVerifyT === !1 && l.typeP === "updatePhone")]
                ]), e("div", vs, [L(e("input", {
                    type: "text",
                    "onUpdate:modelValue": y[0] || (y[0] = R => a.value = R),
                    placeholder: l.$t("phEnterVerificationCode"),
                    maxlength: "6",
                    onInput: h
                }, null, 40, _s), [
                    [de, a.value]
                ]), e("button", {
                    onClick: g,
                    class: O({
                        inActive: o(c).countDown > 0
                    })
                }, [o(c).countDown === 0 ? (f(), k("span", ms, r(l.$t("send")), 1)) : (f(), k("span", gs, r(o(c).countDown) + "S ", 1))], 2)]), L(e("div", hs, [S(P, {
                    name: "warning-o"
                }), e("span", null, r(l.$t("codeUnreceived")) + "?", 1), e("span", {
                    onClick: y[1] || (y[1] = R => C())
                }, r(l.$t("contactServicer")), 1)], 512), [
                    [z, !v.value]
                ])], 512)), [
                    [z, l.showVerify]
                ])
            }
        }
    });
const ws = H(fs, [
        ["__scopeId", "data-v-c17848a2"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Login/VerifyInput.vue"]
    ]),
    ys = {
        class: "passwordInput__container"
    },
    bs = {
        class: "passwordInput__container-label"
    },
    ks = {
        class: "passwordInput__container-label__icon"
    },
    Ss = {
        class: "passwordInput__container-input"
    },
    $s = ["type", "placeholder", "maxlength", "value"],
    Cs = ["src"],
    Is = A({
        __name: "PasswordInput",
        props: {
            value: {
                type: String,
                required: !1
            },
            maxlength: {
                type: Number,
                required: !1,
                default: 15
            },
            label: {
                type: String,
                required: !0
            }
        },
        emits: ["update:value"],
        setup(p, {
            emit: b
        }) {
            const i = p,
                t = _e.global.t,
                c = m(),
                s = m(""),
                n = m(!1);
            ye(s, $ => {
                b("update:value", $)
            }, {
                flush: "post"
            });
            const u = $ => {
                    if (n.value) return;
                    let x = g();
                    const V = $.target;
                    V.value = V.value.replace(/\s+/g, "");
                    const W = /[\u4e00-\u9fa5]/g;
                    V.value = V.value.replace(W, ""), d(x, V.value), h(V.value), C(x)
                },
                a = m(!1),
                v = E(() => Y("main", `${a.value?"eyeVisible":"eyeInvisible"}`)),
                g = () => {
                    var $ = {
                        start: 0,
                        end: 0
                    };
                    return $.start = c.value.selectionStart, $.end = c.value.selectionEnd, $
                },
                d = ($, x) => {
                    if (x.length > 1 && !x.includes("•")) {
                        s.value = x;
                        return
                    }
                    let V = x.split("•").join("");
                    if (V) {
                        let W = s.value.length - (x.length - $.end);
                        s.value = s.value.slice(0, $.end - V.length) + V + s.value.slice(W)
                    } else s.value = s.value.slice(0, $.end) + s.value.slice($.end + s.value.length - x.length)
                },
                h = $ => {
                    if (a.value) return;
                    if (!$) {
                        c.value.value = "";
                        return
                    }
                    let x = "";
                    for (let V = 0; V < $.length; V++) x += "•";
                    c.value.value = x
                },
                C = $ => {
                    c.value.setSelectionRange($.start, $.end)
                },
                l = () => {
                    n.value = !0
                },
                y = $ => {
                    n.value && (n.value = !1, u($))
                },
                P = () => {
                    a.value = !a.value, a.value ? c.value.value = s.value : h(s.value)
                };
            le(() => {
                s.value = i.value || "", h(s.value)
            });
            const I = localStorage.getItem("language"),
                R = E(() => {
                    let $, x = i.label;
                    switch (I) {
                        case "vi":
                            switch (x) {
                                case "Đặt mật khẩu":
                                    $ = t("setLoginPSW");
                                    break;
                                case "Xác nhận mật khẩu":
                                    $ = t("enterPswConfirmation");
                                    break;
                                default:
                                    $ = t("phEnter") + x;
                                    break
                            }
                            break;
                        default:
                            $ = x
                    }
                    return $
                });
            return ($, x) => {
                const V = oe("lazy");
                return f(), k("div", ys, [e("div", bs, [L(e("img", ks, null, 512), [
                    [V, o(Y)("main", "password")]
                ]), e("span", null, r($.label), 1)]), e("div", Ss, [e("input", {
                    type: a.value ? "text" : "password",
                    placeholder: R.value,
                    maxlength: $.maxlength,
                    onInput: u,
                    onCompositionstart: l,
                    onCompositionend: y,
                    ref_key: "inputPwd",
                    ref: c,
                    value: $.value,
                    autocomplete: "new-password"
                }, null, 40, $s), e("img", {
                    src: v.value,
                    class: "eye",
                    onClick: P
                }, null, 8, Cs)])])
            }
        }
    });
const re = H(Is, [
        ["__scopeId", "data-v-ea5b66c8"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Login/PasswordInput.vue"]
    ]),
    Se = p => (pe("data-v-ab583a3a"), p = p(), ve(), p),
    Ps = {
        class: "RpwdPopup"
    },
    Ts = {
        class: "RpwdPopup-head"
    },
    Fs = {
        class: "RpwdPopup-topTip"
    },
    xs = Se(() => e("br", null, null, -1)),
    Es = {
        class: "RpwdPopup-tip"
    },
    Rs = Se(() => e("div", {
        class: "tipbg"
    }, null, -1)),
    Vs = {
        class: "RpwdPopup-errorTip"
    },
    Ls = {
        key: 0
    },
    Bs = {
        class: "errorTip"
    },
    Us = Se(() => e("br", null, null, -1)),
    Ns = {
        class: "RpwdPopup-foot"
    },
    qs = A({
        __name: "RpwdPopup",
        props: {
            show: {
                type: Boolean,
                default: !1
            },
            gamePresentation: {
                type: String,
                default: ""
            },
            phoneNumber: {
                type: String,
                default: ""
            },
            phoneNumberType: {
                type: String,
                default: ""
            },
            passwordErrorMaxNum: {
                default: 10
            }
        },
        emits: ["update:show"],
        setup(p, {
            emit: b
        }) {
            const i = p,
                {
                    t
                } = ee(),
                c = K(),
                s = m(!1),
                n = te(),
                u = m(!1),
                a = m({
                    smsvcode: "",
                    password: "",
                    rePassword: ""
                }),
                v = E({
                    get() {
                        return i.show || !1
                    },
                    set(C) {
                        C || b("update:show", !1)
                    }
                }),
                g = async () => {
                    if (!i.phoneNumber) return;
                    await ae(lt({
                        phone: i.phoneNumberType + i.phoneNumber,
                        codeType: Be.resetPassword
                    })) ? he(t("sendSuccess")) : setTimeout(() => {
                        n.setCountDown(0)
                    }, 500)
                },
                d = async () => {
                    if (!a.value.smsvcode.trim()) return M({
                        message: t("registerTip1"),
                        wordBreak: "break-word"
                    });
                    if (a.value.smsvcode.trim().length != 6) return M({
                        message: t("verifyCode6Digits"),
                        wordBreak: "break-word"
                    });
                    if (!a.value.password.trim()) return M({
                        message: t("registerTip2"),
                        wordBreak: "break-word"
                    });
                    if (!ke.passReg3.test(a.value.password)) {
                        s.value = !0;
                        return
                    }
                    if (!a.value.rePassword.trim()) return M({
                        message: t("registerTip3"),
                        wordBreak: "break-word"
                    });
                    if (a.value.password !== a.value.rePassword) {
                        u.value = !0;
                        return
                    } else u.value = !1;
                    const {
                        password: C,
                        smsvcode: l
                    } = a.value;
                    let y = {
                        username: i.phoneNumberType + i.phoneNumber,
                        password: C,
                        type: "mobile",
                        smsvcode: l
                    };
                    await ae(Ue(y)) && (he(t("rpdsucceed")), localStorage.clear(), b("update:show", !1))
                },
                h = () => {
                    c.push({
                        name: "CustomerService"
                    })
                };
            return (C, l) => {
                const y = U("svg-icon"),
                    P = U("van-popup");
                return f(), k(we, null, [q(" 规则弹层 begin"), S(P, {
                    show: v.value,
                    "onUpdate:show": l[4] || (l[4] = I => v.value = I),
                    "close-on-click-overlay": !1,
                    position: "bottom",
                    round: ""
                }, {
                    default: j(() => [e("div", Ps, [e("div", Ts, r(o(t)("idlockTitle")), 1), e("div", Fs, [B(r(o(t)("idlockTip1", [p.passwordErrorMaxNum])), 1), xs, B(r(o(t)("idlockTip3")), 1)]), S(ws, {
                        value: a.value.smsvcode,
                        "onUpdate:value": l[0] || (l[0] = I => a.value.smsvcode = I),
                        number: p.phoneNumber,
                        sendFunc: g,
                        numberType: p.phoneNumberType,
                        "type-p": "lock"
                    }, null, 8, ["value", "number", "numberType"]), S(re, {
                        value: a.value.password,
                        "onUpdate:value": l[1] || (l[1] = I => a.value.password = I),
                        label: o(t)("newPSWRest")
                    }, null, 8, ["value", "label"]), L(e("div", Es, [Rs, e("span", null, r(o(t)("pswRule")), 1)], 512), [
                        [z, s.value]
                    ]), S(re, {
                        value: a.value.rePassword,
                        "onUpdate:value": l[2] || (l[2] = I => a.value.rePassword = I),
                        label: o(t)("newPSWconfirm")
                    }, null, 8, ["value", "label"]), e("div", Vs, [u.value ? (f(), k("span", Ls, r(o(t)("unmatchedInput")), 1)) : q("v-if", !0)]), e("div", {
                        class: "gotuserver van-hairline--surround",
                        onClick: h
                    }, [S(y, {
                        name: "customer1"
                    }), B(r(o(t)("contactServicer")), 1)]), e("div", Bs, [B(r(o(t)("wrongTel")), 1), Us, B(r(o(t)("rpwdPopupTip")), 1)]), e("div", Ns, [e("button", {
                        class: "dialogBtn",
                        onClick: l[3] || (l[3] = I => b("update:show", !1))
                    }, r(o(t)("cancel")), 1), e("button", {
                        class: "dialogBtn",
                        onClick: d
                    }, r(o(t)("confirm")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 2112)
            }
        }
    });
const Ds = H(qs, [
        ["__scopeId", "data-v-ab583a3a"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Login/RpwdPopup.vue"]
    ]),
    Ms = {
        class: "phoneInput__container"
    },
    As = {
        class: "phoneInput__container-label"
    },
    Hs = ["src"],
    Os = {
        class: "phoneInput__container-input"
    },
    js = ["placeholder"],
    Ws = A({
        __name: "PhoneInput",
        props: {
            type: {
                type: String,
                required: !0
            },
            showValidate: {
                type: Boolean,
                required: !0
            },
            typeP: {
                type: String,
                required: !1
            },
            numberType: {
                type: String,
                required: !0
            },
            number: {
                type: String,
                required: !0
            }
        },
        emits: ["update:show-validate", "changeT", "changeN"],
        setup(p, {
            expose: b,
            emit: i
        }) {
            const t = p,
                c = m(),
                s = E({
                    get() {
                        return t.number
                    },
                    set(d) {
                        i("changeN", d.replace(/[^0-9]/g, ""))
                    }
                });

            function n(d) {
                d.target.value.length < 6 && i("update:show-validate", !0)
            }

            function u(d) {
                const h = d.target,
                    C = /[\u4e00-\u9fa5]/g;
                h.value = h.value.replace(C, ""), h.value.length > 0 && i("update:show-validate", !1)
            }
            const a = d => {
                i("changeT", d)
            };
            et(c, () => {
                c.value.close()
            }), le(() => {});
            const v = m();

            function g() {
                Q(() => {
                    v.value.focus()
                })
            }
            return b({
                getFocus: g
            }), (d, h) => {
                const C = oe("only-num");
                return f(), k("div", Ms, [e("div", As, [e("img", {
                    src: o(Y)("main", "cellphone"),
                    class: "phoneInput__container-label__icon"
                }, null, 8, Hs), e("span", null, r(d.$t("phone")), 1)]), e("div", Os, [S(it, {
                    typeValue: t.numberType,
                    ref_key: "dropDown",
                    ref: c,
                    onChangeT: a
                }, null, 8, ["typeValue"]), L(e("input", {
                    type: "text",
                    name: "userNumber",
                    "onUpdate:modelValue": h[0] || (h[0] = l => s.value = l),
                    placeholder: d.$t("plsEnterTel"),
                    onBlur: n,
                    onInput: u,
                    ref_key: "number",
                    ref: v
                }, null, 40, js), [
                    [C],
                    [de, s.value]
                ])])])
            }
        }
    });
const zs = H(Ws, [
        ["__scopeId", "data-v-50aa8bb0"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Login/PhoneInput.vue"]
    ]),
    Gs = p => (pe("data-v-33f88764"), p = p(), ve(), p),
    Xs = {
        class: "signIn__container"
    },
    Ys = {
        class: "signIn__container-button"
    },
    Ks = {
        class: "signIn_footer"
    },
    Zs = {
        class: "font24"
    },
    Js = {
        class: "font24"
    },
    Qs = {
        class: "idlockTip"
    },
    eo = Gs(() => e("br", null, null, -1)),
    to = ["src"],
    so = A({
        __name: "SignIn",
        setup(p, {
            expose: b
        }) {
            const i = K(),
                {
                    t
                } = ee(),
                c = m("login"),
                {
                    setLoading: s
                } = Ne(),
                n = te(),
                u = m(!1),
                a = m(!1),
                v = m(10),
                g = m();
            let d = !1;
            async function h() {
                if (!d) {
                    if (d = !0, De() && await new Promise(_ => setTimeout(_, 1e3)), d = !1, !n.userForm.number || n.userForm.number.toString().trim() === "") {
                        a.value = !0;
                        return
                    }
                    if (!n.userForm.password || n.userForm.password.toString().trim() === "") return M({
                        message: t("registerTip2"),
                        wordBreak: "break-word"
                    });
                    n.userForm.numberType = n.getUserForm.numberType.replace("+", ""), n.userForm.remember && n.userForm.password.toString().trim() !== "" ? localStorage.setItem("remember", n.userForm.password) : localStorage.setItem("remember", ""), n.isOpenCaptcha ? se() : (s(!0), await n.signIn(n.userForm).then(_ => {
                        n.userForm.vCode = ""
                    }).catch(_ => {
                        var T;
                        _.code === 1 && (v.value = ((T = _.data) == null ? void 0 : T.passwordErrorMaxNum) || 10), _.msgCode === 33 ? Q(() => F.value = !0) : w(_.msgCode || 0)
                    }).finally(() => {
                        R.value.setShowHiden(!1), s(!1)
                    }))
                }
            }
            const C = () => {
                i.push({
                    name: "register"
                })
            };

            function l() {
                i.push({
                    name: "rpwd"
                }), n.setCurrentView("ResetPassword")
            }

            function y() {
                i.push({
                    name: "CustomerService"
                })
            }
            const P = _ => {
                    n.getUserForm.numberType = _
                },
                I = _ => {
                    n.getUserForm.number = _
                },
                R = m(),
                $ = m(""),
                x = () => {
                    u.value = !1, i.push({
                        name: "CustomerService"
                    })
                };
            Ee(window, "keydown", _ => {
                _.key == "Enter" && h()
            }), le(async () => {
                var T;
                const _ = n.getUserForm;
                localStorage.getItem("remember") != null && ((T = localStorage.getItem("remember")) == null ? void 0 : T.toString().trim()) != "" ? _.password = localStorage.getItem("remember") : _.password = "", n.setUserForm({ ..._
                })
            });
            let V = ye(() => n.userForm.number, _ => {
                n.setCountDown(0)
            }, {
                flush: "post"
            });
            const W = async _ => {
                    Q(async () => {
                        R.value.startRequestVerify(), s(!0), n.signIn(Object.assign(n.userForm, {
                            captchaId: $.value,
                            track: _
                        })).then(T => {}).catch(T => {
                            w(T.msgCode || 0)
                        }).finally(() => {
                            R.value.setShowHiden(!1), s(!1)
                        })
                    })
                },
                se = () => {
                    Q(async () => {
                        R.value.startRequestGenerate();
                        const _ = await ae(Me());
                        _ ? ($.value = _.data.captchaId, R.value.endRequestGenerate(_.data.backgroundImage, _.data.sliderImage)) : R.value.endRequestGenerate(null, null)
                    })
                },
                w = _ => {
                    _ == 122 && (u.value = !0)
                };
            Re(() => {
                V(), n.getUserForm.remember || (n.getUserForm.password = "")
            });
            const F = m(!1),
                ie = _ => {
                    n.userForm.vCode = _, h()
                },
                ne = () => {
                    F.value = !1, n.userForm.vCode = ""
                };
            return b({
                showPhoneValidate: a
            }), (_, T) => {
                const ue = U("van-checkbox"),
                    G = U("svg-icon");
                return f(), k("div", Xs, [S(zs, {
                    "show-validate": a.value,
                    "onUpdate:showValidate": T[0] || (T[0] = D => a.value = D),
                    ref_key: "phone",
                    ref: g,
                    type: c.value,
                    "number-type": o(n).getUserForm.numberType,
                    number: o(n).userForm.number,
                    onChangeT: P,
                    onChangeN: I
                }, null, 8, ["show-validate", "type", "number-type", "number"]), S(re, {
                    value: o(n).userForm.password,
                    "onUpdate:value": T[1] || (T[1] = D => o(n).userForm.password = D),
                    label: _.$t("password"),
                    maxlength: 32
                }, null, 8, ["value", "label"]), e("div", null, [S(ue, {
                    modelValue: o(n).userForm.rememberpwd,
                    "onUpdate:modelValue": T[2] || (T[2] = D => o(n).userForm.rememberpwd = D)
                }, {
                    default: j(() => [B(r(_.$t("rememberPSW")), 1)]),
                    _: 1
                }, 8, ["modelValue"])]), e("div", Ys, [e("button", {
                    class: O([o(n).userForm.number != "" ? "active" : ""]),
                    onClick: h
                }, r(_.$t("login")), 3), e("button", {
                    class: "register",
                    onClick: C
                }, r(_.$t("register")), 1)]), e("div", Ks, [o(n).isOpenForgetPasswordSMSState || o(n).isOpenForgetPasswordEmailState ? (f(), k("div", {
                    key: 0,
                    class: "forgetcon",
                    onClick: l
                }, [S(G, {
                    name: "clock_b",
                    class: "forgetbg"
                }), e("div", Zs, r(_.$t("forgetPSW")), 1)])) : q("v-if", !0), e("div", {
                    class: "customcon",
                    onClick: y
                }, [S(G, {
                    name: "customer_b",
                    class: "forgetbg"
                }), e("div", Js, r(_.$t("customerServiceTitle")), 1)])]), S(Oe, {
                    ref_key: "captchaRef",
                    ref: R,
                    "refresh-color": "#FFFFFF",
                    "show-refresh": !0,
                    text: o(t)("slideCaptchaText"),
                    onFinish: W,
                    onRefresh: se
                }, null, 8, ["text"]), q("10锁定密码弹窗"), o(n).isOpenForgetPasswordSMSState && u.value ? (f(), ce(Ds, {
                    key: 0,
                    show: u.value,
                    "onUpdate:show": T[3] || (T[3] = D => u.value = D),
                    phoneNumber: o(n).getUserForm.number,
                    phoneNumberType: o(n).getUserForm.numberType,
                    passwordErrorMaxNum: v.value
                }, null, 8, ["show", "phoneNumber", "phoneNumberType", "passwordErrorMaxNum"])) : (f(), ce(qe, {
                    key: 1,
                    show: u.value,
                    "onUpdate:show": T[5] || (T[5] = D => u.value = D),
                    "show-cancel-btn": !0,
                    title: _.$t("idlockTitle")
                }, {
                    content: j(() => [e("div", Qs, [B(r(_.$t("idlockTip1", [v.value])) + " ", 1), eo, B(r(_.$t("idlockTip2")), 1)])]),
                    footer: j(() => [e("button", {
                        class: "dialogBtn",
                        onClick: T[4] || (T[4] = D => u.value = !1)
                    }, r(_.$t("cancel")), 1), e("button", {
                        class: "dialogBtn",
                        onClick: x
                    }, [e("img", {
                        src: o(Y)("main", "iconservr")
                    }, null, 8, to), B(" " + r(_.$t("contactServicer")), 1)])]),
                    _: 1
                }, 8, ["show", "title"])), q(" 验证弹窗 "), S(He, {
                    showPopup: F.value,
                    onOnConfirm: ie,
                    onOnBack: ne
                }, null, 8, ["showPopup"])])
            }
        }
    });
const oo = H(so, [
        ["__scopeId", "data-v-33f88764"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Login/SignIn.vue"]
    ]),
    no = {
        class: "verifyInput__container"
    },
    ao = {
        class: "verifyInput__container-label"
    },
    ro = {
        class: "verifyInput__container-label__icon"
    },
    lo = {
        key: 0
    },
    io = {
        key: 1
    },
    uo = {
        class: "verifyInput__container-input"
    },
    co = ["placeholder"],
    po = {
        key: 0
    },
    vo = {
        key: 1
    },
    _o = {
        class: "verifyInput__container-tip"
    },
    mo = A({
        __name: "VerifyEmailInput",
        props: {
            value: {
                type: String,
                required: !1
            },
            typeP: {
                type: String,
                required: !1
            },
            isShowVerifyT: {
                type: Boolean,
                required: !1
            },
            placeholder: {
                type: String,
                required: !1,
                default: _e.global.t("registerTip6")
            },
            sendFunc: {
                type: Function,
                required: !1
            },
            number: {
                type: String,
                required: !1
            },
            numberType: {
                type: String,
                required: !1
            },
            showVerify: {
                type: Boolean,
                required: !1,
                default: !0
            },
            email: {
                type: String,
                required: !1,
                default: ""
            },
            loginType: {
                type: String,
                required: !1
            }
        },
        emits: ["update:value"],
        setup(p, {
            emit: b
        }) {
            const i = p;
            ee();
            const t = te(),
                c = K(),
                s = E({
                    get() {
                        return i.value || ""
                    },
                    set(d) {
                        b("update:value", d)
                    }
                }),
                n = m(!0);
            async function u() {
                n.value && (n.value = !1), !(t.countEmailDown > 0) && (t.sendEmailCode(), i.sendFunc && i.sendFunc())
            }
            const a = E(() => localStorage.getItem("email") || i.email),
                v = d => {
                    const h = d.target;
                    h.value = h.value.replace(/\s+/g, ""), h.value = h.value.replace(/[^\d]/g, "")
                };

            function g() {
                c.push({
                    name: "CustomerService"
                })
            }
            return (d, h) => {
                const C = U("van-icon"),
                    l = oe("lazy");
                return L((f(), k("div", no, [L(e("div", ao, [L(e("img", ro, null, 512), [
                    [l, o(Y)("main", "verify")]
                ]), d.typeP === "updateEmail" || d.typeP === "lock" ? (f(), k("span", lo, r(d.$t("sendVerifyCodeTo")) + " " + r(o(ut)(a.value)), 1)) : (f(), k("span", io, r(d.$t("verifyCode")), 1))], 512), [
                    [z, !(d.isShowVerifyT === !1 && d.typeP === "updateEmail")]
                ]), e("div", uo, [L(e("input", {
                    type: "text",
                    "onUpdate:modelValue": h[0] || (h[0] = y => s.value = y),
                    placeholder: d.$t("phEnterVerificationCode"),
                    maxlength: "6",
                    onInput: v
                }, null, 40, co), [
                    [de, s.value]
                ]), e("button", {
                    onClick: u,
                    class: O({
                        inActive: o(t).countEmailDown > 0
                    })
                }, [o(t).countEmailDown === 0 ? (f(), k("span", po, r(d.$t("send")), 1)) : (f(), k("span", vo, r(o(t).countEmailDown) + "S ", 1))], 2)]), L(e("div", _o, [S(C, {
                    name: "warning-o"
                }), e("span", null, r(d.$t("codeUnreceived")) + "?", 1), e("span", {
                    onClick: h[1] || (h[1] = y => g())
                }, r(d.$t("contactServicer")), 1)], 512), [
                    [z, !n.value]
                ])], 512)), [
                    [z, d.showVerify]
                ])
            }
        }
    });
const go = H(mo, [
        ["__scopeId", "data-v-484b25b1"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Login/VerifyEmailInput.vue"]
    ]),
    $e = p => (pe("data-v-95ce4137"), p = p(), ve(), p),
    ho = {
        class: "RpwdPopup"
    },
    fo = {
        class: "RpwdPopup-head"
    },
    wo = {
        class: "RpwdPopup-topTip"
    },
    yo = $e(() => e("br", null, null, -1)),
    bo = {
        class: "RpwdPopup-tip"
    },
    ko = $e(() => e("div", {
        class: "tipbg"
    }, null, -1)),
    So = {
        class: "RpwdPopup-errorTip"
    },
    $o = {
        key: 0
    },
    Co = {
        class: "errorTip"
    },
    Io = $e(() => e("br", null, null, -1)),
    Po = {
        class: "RpwdPopup-foot"
    },
    To = A({
        __name: "EmailRpwdPopup",
        props: {
            show: {
                type: Boolean,
                default: !1
            },
            gamePresentation: {
                type: String,
                default: ""
            },
            email: {
                type: String,
                default: ""
            },
            passwordErrorMaxNum: {
                default: 10
            }
        },
        emits: ["update:show"],
        setup(p, {
            emit: b
        }) {
            const i = p,
                {
                    t
                } = ee(),
                c = K(),
                s = m(!1),
                n = te(),
                u = m(!1),
                a = m({
                    smsvcode: "",
                    password: "",
                    rePassword: ""
                }),
                v = E({
                    get() {
                        return i.show || !1
                    },
                    set(C) {
                        C || b("update:show", !1)
                    }
                }),
                g = async () => {
                    if (!i.email) return;
                    await ae(ct({
                        email: i.email,
                        emailType: Be.resetPassword
                    })) ? he(t("sendSuccess")) : setTimeout(() => {
                        n.setCountEmailDown(0)
                    }, 500)
                },
                d = async () => {
                    if (!a.value.smsvcode.trim()) return M({
                        message: t("registerTip6"),
                        wordBreak: "break-word"
                    });
                    if (a.value.smsvcode.trim().length != 6) return M({
                        message: t("verifyCode6Digits"),
                        wordBreak: "break-word"
                    });
                    if (!a.value.password.trim()) return M({
                        message: t("registerTip2"),
                        wordBreak: "break-word"
                    });
                    if (!ke.passReg3.test(a.value.password)) {
                        s.value = !0;
                        return
                    }
                    if (!a.value.rePassword.trim()) return M({
                        message: t("registerTip3"),
                        wordBreak: "break-word"
                    });
                    if (a.value.password !== a.value.rePassword) {
                        u.value = !0;
                        return
                    } else u.value = !1;
                    const {
                        password: C,
                        smsvcode: l
                    } = a.value;
                    let y = {
                        username: i.email,
                        type: "email",
                        password: C,
                        smsvcode: l
                    };
                    await ae(Ue(y)) && (he(t("rpdsucceed")), localStorage.clear(), b("update:show", !1))
                },
                h = () => {
                    c.push({
                        name: "CustomerService"
                    })
                };
            return (C, l) => {
                const y = U("svg-icon"),
                    P = U("van-popup");
                return f(), k(we, null, [q(" 规则弹层 begin"), S(P, {
                    show: v.value,
                    "onUpdate:show": l[4] || (l[4] = I => v.value = I),
                    "close-on-click-overlay": !1,
                    position: "bottom",
                    round: ""
                }, {
                    default: j(() => [e("div", ho, [e("div", fo, r(o(t)("idlockTitle")), 1), e("div", wo, [B(r(o(t)("idlockTip1", [p.passwordErrorMaxNum])), 1), yo, B(r(o(t)("idlockTip3")), 1)]), S(go, {
                        value: a.value.smsvcode,
                        "onUpdate:value": l[0] || (l[0] = I => a.value.smsvcode = I),
                        sendFunc: g,
                        email: p.email,
                        "type-p": "lock"
                    }, null, 8, ["value", "email"]), S(re, {
                        value: a.value.password,
                        "onUpdate:value": l[1] || (l[1] = I => a.value.password = I),
                        label: o(t)("newPSWRest")
                    }, null, 8, ["value", "label"]), L(e("div", bo, [ko, e("span", null, r(o(t)("pswRule")), 1)], 512), [
                        [z, s.value]
                    ]), S(re, {
                        value: a.value.rePassword,
                        "onUpdate:value": l[2] || (l[2] = I => a.value.rePassword = I),
                        label: o(t)("newPSWconfirm")
                    }, null, 8, ["value", "label"]), e("div", So, [u.value ? (f(), k("span", $o, r(o(t)("unmatchedInput")), 1)) : q("v-if", !0)]), e("div", {
                        class: "gotuserver",
                        onClick: h
                    }, [S(y, {
                        name: "customer1"
                    }), B(r(o(t)("contactServicer")), 1)]), e("div", Co, [B(r(o(t)("wrongemail")), 1), Io, B(r(o(t)("rpwdEmailPopupTip")), 1)]), e("div", Po, [e("button", {
                        class: "dialogBtn",
                        onClick: l[3] || (l[3] = I => b("update:show", !1))
                    }, r(o(t)("cancel")), 1), e("button", {
                        class: "dialogBtn",
                        onClick: d
                    }, r(o(t)("confirm")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 2112)
            }
        }
    });
const Fo = H(To, [
        ["__scopeId", "data-v-95ce4137"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Login/EmailRpwdPopup.vue"]
    ]),
    xo = {
        class: "emailcontainer"
    },
    Eo = {
        class: "emailinput__container"
    },
    Ro = {
        class: "emailinput__container-label"
    },
    Vo = ["src"],
    Lo = {
        class: "emailinput__container-input"
    },
    Bo = ["placeholder"],
    Uo = A({
        __name: "EmailInput",
        props: {
            type: {
                type: String,
                required: !0
            },
            email: {
                type: String,
                required: !0
            }
        },
        emits: ["update:show-validate", "changeN"],
        setup(p, {
            expose: b,
            emit: i
        }) {
            const t = p,
                c = te(),
                s = E({
                    get() {
                        return t.email
                    },
                    set(v) {
                        i("changeN", v)
                    }
                });

            function n(v) {
                const g = v.target,
                    d = /[\u4e00-\u9fa5]/g;
                g.value = g.value.replace(d, ""), g.value.length > 0 && i("update:show-validate", !1)
            }
            const u = m();

            function a() {
                Q(() => {
                    u.value.focus()
                })
            }
            return b({
                getFocus: a
            }), (v, g) => (f(), k("div", xo, [e("div", Eo, [e("div", Ro, [e("img", {
                src: o(Y)("wallet", "email"),
                class: "emailinput__container-label__icon"
            }, null, 8, Vo), e("span", null, r(o(c).isOpenExternalAccount ? `${v.$t("otherlogin")} ${v.$t("login")}` : v.$t("email")), 1)]), e("div", Lo, [L(e("input", {
                type: "text",
                name: "userEmail",
                maxlength: "250",
                "onUpdate:modelValue": g[0] || (g[0] = d => s.value = d),
                placeholder: v.$t("inputemail"),
                onInput: n,
                ref_key: "email",
                ref: u
            }, null, 40, Bo), [
                [de, s.value]
            ])])])]))
        }
    });
const No = H(Uo, [
        ["__scopeId", "data-v-4499df08"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Login/EmailInput.vue"]
    ]),
    qo = p => (pe("data-v-436a69c4"), p = p(), ve(), p),
    Do = {
        class: "signIn__container"
    },
    Mo = {
        class: "signIn__container-button"
    },
    Ao = {
        class: "signIn_footer"
    },
    Ho = {
        class: "font24"
    },
    Oo = {
        class: "font24"
    },
    jo = {
        class: "idlockTip"
    },
    Wo = qo(() => e("br", null, null, -1)),
    zo = ["src"],
    Go = A({
        __name: "EmailSignIn",
        setup(p) {
            const b = K(),
                {
                    t: i
                } = ee(),
                t = m(10),
                {
                    setLoading: c
                } = Ne(),
                s = te(),
                n = m(!1),
                u = m(!1),
                a = m(),
                v = m("login");
            async function g() {
                if (De() && await new Promise(w => setTimeout(w, 500)), !(!s.userForm.email || s.userForm.email.toString().trim() === "")) {
                    if (!s.isOpenExternalAccount && !ke.email1.test(s.userForm.email)) return M({
                        message: i(pt.email),
                        wordBreak: "break-word"
                    });
                    if (!s.userForm.password || s.userForm.password.toString().trim() === "") return M({
                        message: i("registerTip2"),
                        wordBreak: "break-word"
                    });
                    s.userForm.remember && s.userForm.password.toString().trim() !== "" ? localStorage.setItem("remember", s.userForm.password) : localStorage.setItem("remember", ""), s.isOpenCaptcha ? W() : (c(!0), await s.signIn(s.userForm).then(w => {}).catch(w => {
                        var F;
                        w.code === 1 && (t.value = ((F = w.data) == null ? void 0 : F.passwordErrorMaxNum) || 10), w.msgCode === 33 ? u.value = !0 : se(w.msgCode || 0)
                    }).finally(() => {
                        y.value.setShowHiden(!1), c(!1)
                    }))
                }
            }
            const d = () => {
                b.push({
                    name: "register"
                })
            };

            function h() {
                b.push({
                    name: "rpwd"
                }), s.setCurrentView("ResetPassword")
            }

            function C() {
                b.push({
                    name: "CustomerService"
                })
            }
            const l = w => {
                    s.getUserForm.email = w
                },
                y = m(),
                P = m(""),
                I = () => {
                    n.value = !1, b.push({
                        name: "CustomerService"
                    })
                };
            Ee(window, "keydown", w => {
                w.key == "Enter" && g()
            });
            const R = w => {
                    s.userForm.vCode = w, g()
                },
                $ = () => {
                    u.value = !1, s.userForm.vCode = ""
                };
            le(async () => {
                var F;
                const w = s.getUserForm;
                localStorage.getItem("remember") != null && ((F = localStorage.getItem("remember")) == null ? void 0 : F.toString().trim()) != "" ? w.password = localStorage.getItem("remember") : w.password = "", s.setUserForm({ ...w
                })
            });
            let x = ye(() => s.userForm.number, w => {
                s.setCountDown(0)
            }, {
                flush: "post"
            });
            const V = async w => {
                    Q(async () => {
                        y.value.startRequestVerify(), c(!0), s.signIn(Object.assign(s.userForm, {
                            captchaId: P.value,
                            track: w
                        })).then(F => {
                            s.userForm.vCode = ""
                        }).catch(F => {
                            se(F.msgCode || 0)
                        }).finally(() => {
                            y.value.setShowHiden(!1), c(!1)
                        })
                    })
                },
                W = () => {
                    Q(async () => {
                        y.value.startRequestGenerate();
                        const w = await ae(Me());
                        w ? (P.value = w.data.captchaId, y.value.endRequestGenerate(w.data.backgroundImage, w.data.sliderImage)) : y.value.endRequestGenerate(null, null)
                    })
                },
                se = w => {
                    w == 122 && (n.value = !0)
                };
            return Re(() => {
                x(), s.getUserForm.remember || (s.getUserForm.password = "")
            }), (w, F) => {
                const ie = U("van-checkbox"),
                    ne = U("svg-icon");
                return f(), k("div", Do, [S(No, {
                    ref_key: "email",
                    ref: a,
                    type: v.value,
                    email: o(s).userForm.email,
                    onChangeN: l
                }, null, 8, ["type", "email"]), S(re, {
                    value: o(s).userForm.password,
                    "onUpdate:value": F[0] || (F[0] = _ => o(s).userForm.password = _),
                    label: w.$t("password"),
                    maxlength: 32
                }, null, 8, ["value", "label"]), e("div", null, [S(ie, {
                    modelValue: o(s).userForm.rememberpwd,
                    "onUpdate:modelValue": F[1] || (F[1] = _ => o(s).userForm.rememberpwd = _)
                }, {
                    default: j(() => [B(r(w.$t("rememberPSW")), 1)]),
                    _: 1
                }, 8, ["modelValue"])]), e("div", Mo, [e("button", {
                    class: O([o(s).userForm.email != "" ? "active" : ""]),
                    onClick: g
                }, r(w.$t("login")), 3), e("button", {
                    class: "register",
                    onClick: d
                }, r(w.$t("register")), 1)]), e("div", Ao, [o(s).isOpenForgetPasswordSMSState || o(s).isOpenForgetPasswordEmailState ? (f(), k("div", {
                    key: 0,
                    class: "forgetcon",
                    onClick: h
                }, [S(ne, {
                    name: "clock_b",
                    class: "forgetbg"
                }), e("div", Ho, r(w.$t("forgetPSW")), 1)])) : q("v-if", !0), e("div", {
                    class: "customcon",
                    onClick: C
                }, [S(ne, {
                    name: "customer_b",
                    class: "forgetbg"
                }), e("div", Oo, r(w.$t("customerServiceTitle")), 1)])]), S(Oe, {
                    ref_key: "captchaRef",
                    ref: y,
                    "refresh-color": "#FFFFFF",
                    "show-refresh": !0,
                    text: o(i)("slideCaptchaText"),
                    onFinish: V,
                    onRefresh: W
                }, null, 8, ["text"]), q("10锁定密码弹窗"), o(s).isOpenForgetPasswordEmailState && n.value ? (f(), ce(Fo, {
                    key: 0,
                    show: n.value,
                    "onUpdate:show": F[2] || (F[2] = _ => n.value = _),
                    email: o(s).getUserForm.email,
                    passwordErrorMaxNum: t.value
                }, null, 8, ["show", "email", "passwordErrorMaxNum"])) : (f(), ce(qe, {
                    key: 1,
                    show: n.value,
                    "onUpdate:show": F[4] || (F[4] = _ => n.value = _),
                    "show-cancel-btn": !0,
                    title: w.$t("idlockTitle")
                }, {
                    content: j(() => [e("div", jo, [B(r(w.$t("idlockTip1", [t.value])) + " ", 1), Wo, B(r(w.$t("idlockTip2")), 1)])]),
                    footer: j(() => [e("button", {
                        class: "dialogBtn",
                        onClick: F[3] || (F[3] = _ => n.value = !1)
                    }, r(w.$t("cancel")), 1), e("button", {
                        class: "dialogBtn",
                        onClick: I
                    }, [e("img", {
                        src: o(Y)("main", "iconservr")
                    }, null, 8, zo), B(" " + r(w.$t("contactServicer")), 1)])]),
                    _: 1
                }, 8, ["show", "title"])), q(" 验证弹窗 "), S(He, {
                    showPopup: u.value,
                    onOnConfirm: R,
                    onOnBack: $
                }, null, 8, ["showPopup"])])
            }
        }
    });
const Xo = H(Go, [
        ["__scopeId", "data-v-436a69c4"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Login/EmailSignIn.vue"]
    ]),
    Yo = {
        class: "login__container-heading"
    },
    Ko = {
        class: "login__container-heading__title"
    },
    Zo = {
        class: "login__container-heading__subTitle"
    },
    Jo = {
        class: "login_container-tab"
    },
    Qo = {
        class: "login__container-form"
    },
    en = A({
        __name: "index",
        setup(p) {
            const {
                t: b
            } = _e.global, i = K(), t = te();
            t.getRegisterState();
            const c = m("mobile"),
                s = m(void 0);
            t.userForm.logintype = c.value;
            const {
                openAll: n
            } = dt();

            function u() {
                i.replace("/")
            }
            const a = v => {
                c.value = v, t.userForm.logintype = v, t.userForm.password = "", t.remember(!0)
            };
            return tt((v, g, d) => {
                d(), v.name === "home" && n()
            }), le(() => {
                t.remember(!0), t.getIp()
            }), (v, g) => {
                const d = U("NavBar"),
                    h = U("svg-icon");
                return f(), k("div", {
                    class: "login__container",
                    ref_key: "loginContainerRef",
                    ref: s
                }, [S(d, {
                    onClickLeft: u,
                    class: "main",
                    leftArrow: !0,
                    headLogo: !0
                }, {
                    right: j(() => [S(kt)]),
                    _: 1
                }), e("div", Yo, [e("h1", Ko, r(o(b)("login")), 1), e("div", Zo, [e("div", null, r(v.$t("pleaseloginphoneoremail")), 1), e("div", null, r(v.$t("forgetyourpassword")), 1)])]), e("div", Jo, [e("div", {
                    class: O(["tab", [c.value == "mobile" ? "active" : ""]]),
                    onClick: g[0] || (g[0] = C => a("mobile"))
                }, [S(h, {
                    name: "phone"
                }), e("div", null, r(v.$t("mobilelogin")), 1)], 2), e("div", {
                    class: O(["tab", [c.value == "email" ? "active" : ""]]),
                    onClick: g[1] || (g[1] = C => a("email"))
                }, [e("div", null, [S(h, {
                    name: "email"
                }), L(S(h, {
                    name: "user"
                }, null, 512), [
                    [z, o(t).isOpenExternalAccount]
                ])]), e("div", null, r(o(t).isOpenExternalAccount ? v.$t("otherlogin") : v.$t("emaillogin")), 1)], 2)]), e("div", Qo, [e("div", {
                    class: O(["tab-content", [c.value == "mobile" ? "activecontent" : ""]])
                }, [S(oo, {
                    ref: "signIn"
                }, null, 512)], 2), e("div", {
                    class: O(["tab-content", [c.value == "email" ? "activecontent" : ""]])
                }, [S(Xo, {
                    ref: "signIn"
                }, null, 512)], 2)])], 512)
            }
        }
    });
const tn = H(en, [
        ["__scopeId", "data-v-47f4cc84"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/login/index.vue"]
    ]),
    an = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: tn
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    No as E, wt as L, re as P, Oe as S, ws as V, He as a, go as b, zs as c, kt as d, an as i
};