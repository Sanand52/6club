import {
    V as T,
    r as O,
    H as Ce,
    C as Z,
    a8 as z,
    ai as E,
    X as g,
    Y as s,
    a4 as u,
    a5 as C,
    aT as Y,
    W as _,
    $ as V,
    ad as le,
    ae as ie,
    aU as be,
    aV as R,
    aW as X,
    E as re,
    ar as Se,
    aX as $e,
    F as P,
    x as xe,
    w as ue,
    y as Ie,
    A as Oe,
    at as Ve,
    aY as Be,
    a2 as de,
    aZ as ce,
    a9 as De,
    G as Te,
    K as Ae,
    a0 as D,
    aa as ne,
    _ as h,
    D as r,
    B as j,
    ac as ae,
    a6 as I
} from "./modules-3ee1a0d5.js";
import {
    _ as H,
    cj as Me,
    ck as pe,
    cl as je,
    cm as fe,
    cn as Pe,
    co as ze,
    cp as Ee,
    cq as se,
    aW as Ue,
    b1 as Ne,
    A as Fe,
    cr as Le
} from "./page-activity-b0cc3a5b.js";
import {
    P as Re
} from "./page-login-95ed0718.js";
const ve = e => (le("data-v-3492f60f"), e = e(), ie(), e),
    Ze = {
        class: "dialog"
    },
    qe = {
        class: "dialog-main"
    },
    We = ve(() => s("div", {
        class: "dialog-main-content"
    }, null, -1)),
    Ge = ve(() => s("div", {
        style: {
            width: "30px",
            height: "30px"
        }
    }, [s("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "60",
        height: "60",
        viewBox: "0 0 60 60",
        fill: "none"
    }, [s("path", {
        d: "M30 57C44.9117 57 57 44.9117 57 30C57 15.0883 44.9117 3 30 3C15.0883 3 3 15.0883 3 30C3 44.9117 15.0883 57 30 57Z",
        stroke: "white",
        "stroke-width": "4",
        "stroke-linejoin": "round"
    }), s("path", {
        d: "M43 17L17 43",
        stroke: "white",
        "stroke-width": "4",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), s("path", {
        d: "M17 17L43 43",
        stroke: "white",
        "stroke-width": "4",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })])], -1)),
    Ke = [Ge],
    Ye = T({
        __name: "Dialog",
        props: {
            show: {
                type: Boolean,
                default: !1
            },
            type: {
                type: String,
                default: "info"
            },
            showCancel: {
                type: Boolean,
                default: !0
            },
            cancelText: {
                type: String,
                default: "取消"
            },
            showConfirm: {
                type: Boolean,
                default: !0
            },
            confirmText: {
                type: String,
                default: "确认"
            },
            title: {
                type: String,
                default: ""
            },
            code: {
                type: String,
                default: ""
            },
            desc: {
                type: [String, Function],
                default: ""
            },
            showClose: {
                type: Boolean,
                default: !0
            },
            maskClose: {
                type: Boolean,
                default: !0
            },
            time: {
                type: Number,
                default: 0
            }
        },
        emits: ["update:show", "cancel", "confirm"],
        setup(e, {
            emit: o
        }) {
            const n = e,
                a = O(n.time !== 0),
                t = O(!1),
                p = () => {
                    n.maskClose && (t.value = !1)
                },
                v = () => {
                    t.value = !1
                },
                l = () => {
                    o("update:show", !1)
                },
                d = Ce({
                    time: n.time * 1e3,
                    onFinish() {
                        a.value = !1
                    }
                });
            return Z(() => n.show, i => {
                t.value = i, i && n.time !== 0 && d.start()
            }), (i, y) => z((_(), g("div", Ze, [s("div", {
                class: "dialog-bg",
                onClick: p
            }), u(Y, {
                name: "dialogIn",
                onAfterLeave: l,
                "enter-active-class": "dialogIn-enter-active",
                "leave-active-class": "dialogIn-leave-active",
                persisted: ""
            }, {
                default: C(() => [z(s("div", qe, [We, e.showClose ? (_(), g("div", {
                    key: 0,
                    class: "dialog-main-close",
                    onClick: v
                }, Ke)) : V("v-if", !0)], 512), [
                    [E, t.value]
                ])]),
                _: 1
            })], 512)), [
                [E, {
                    show: e.show
                }]
            ])
        }
    });
const Xe = H(Ye, [
        ["__scopeId", "data-v-3492f60f"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Dialog/Dialog.vue"]
    ]),
    He = e => {
        const o = X(),
            {
                cancel: n,
                confirm: a,
                close: t,
                ...p
            } = e,
            v = document.createElement("div");
        let l;
        const d = be(Xe, { ...p,
            onCancel: n,
            onConfirm: a,
            "onUpdate:show" () {
                var i;
                d.component && (d.component.props.show = !1), t == null || t(), (i = l == null ? void 0 : l.unmount) == null || i.call(l)
            }
        });
        return l = {
            isUnmounted: !1,
            vm: d,
            open() {
                var i;
                document.body.appendChild(v), R(d, v), (i = d.component) != null && i.props && (d.component.props.show = !0), d.appContext = (o == null ? void 0 : o.appContext) || null
            },
            unmount() {
                var i, y;
                (i = d.component) != null && i.isUnmounted || (l.isUnmounted = !0, R(null, v), (y = v == null ? void 0 : v.parentNode) == null || y.removeChild(v))
            }
        }, l
    },
    Je = He;
let Qe = 100;

function ye(e) {
    const o = X();
    o && Object.assign(o.proxy, e)
}

function et() {
    const e = re({
            show: !1
        }),
        o = t => {
            e.show = t
        },
        n = t => {
            t && Object.assign(e, t, {
                transitionAppear: !0
            }), o(!0)
        },
        a = () => o(!1);
    return ye({
        open: n,
        close: a,
        toggle: o
    }), {
        open: n,
        close: a,
        state: e,
        toggle: o
    }
}

function tt(e) {
    var p;
    const o = X(),
        n = u(e);
    n.appContext = (o == null ? void 0 : o.appContext) || null;
    const a = document.createElement("div");
    return document.body.appendChild(a), R(n, a), {
        instance: ((p = n.component) == null ? void 0 : p.proxy) || {},
        unmount() {
            R(null, a), document.body.removeChild(a)
        }
    }
}
const ot = () => ++Qe;

function me(e) {
    const o = O(!1);
    return Z(e, n => {
        n && (o.value = n)
    }, {
        immediate: !0
    }), n => () => o.value ? n() : null
}

function nt(e, {
    args: o = [],
    done: n,
    canceled: a
}) {
    if (e) {
        const t = e.apply(null, o);
        Me(t) ? t.then(p => {
            p ? n() : a && a()
        }).catch(pe) : t ? n() : a ? a() : n()
    } else n()
}
const he = Symbol(),
    at = {
        show: Boolean,
        zIndex: Number,
        role: String,
        duration: {
            type: Number,
            default: 1
        },
        className: {
            type: String
        },
        lockScroll: {
            type: Boolean,
            default: !0
        },
        lazyRender: {
            type: Boolean,
            default: !0
        },
        transition: String,
        tabindex: Number,
        customStyle: Object
    };

function st() {
    return Se(he, {
        close: () => {}
    })
}
const lt = T({
        props: at,
        setup(e, {
            emit: o,
            slots: n
        }) {
            const a = O(),
                t = me(() => e.show || !e.lazyRender),
                p = l => {
                    e.lockScroll && Pe(l, !0)
                },
                v = t(() => {
                    var d;
                    const l = Object.assign(ze(e.zIndex), e.customStyle);
                    return z(u("div", {
                        ref: a,
                        style: l,
                        class: [e.className, "popup-overlay"]
                    }, [(d = n.default) == null ? void 0 : d.call(n)]), [
                        [E, e.show]
                    ])
                });
            return fe("touchmove", p, {
                target: a
            }), () => u(Y, {
                name: e.transition || "fade",
                appear: !0
            }, {
                default: v
            })
        }
    }),
    it = {
        show: Boolean,
        zIndex: Number,
        teleport: {
            type: [String, Object],
            default: "body"
        },
        duration: {
            type: Number
        },
        lockScroll: {
            type: Boolean,
            default: !0
        },
        lazyRender: {
            type: Boolean,
            default: !0
        },
        overlay: {
            type: Boolean,
            default: !1
        },
        transitionAppear: {
            type: Boolean,
            default: !0
        },
        content: Function,
        transition: String,
        destroyOnClose: {
            type: Boolean,
            default: !0
        },
        beforeClose: Function,
        overlayStyle: Object,
        closeOnClickOverlay: {
            type: Boolean,
            default: !1
        }
    },
    rt = Object.assign({}, it, {
        position: {
            type: String,
            default: ""
        },
        safeAreaInsetTop: Boolean,
        safeAreaInsetBottom: Boolean,
        safeArea: Boolean,
        overlayClass: String,
        closeOnPopstate: Boolean
    }),
    ut = T({
        inheritAttrs: !1,
        props: rt,
        emits: ["open", "close", "opened", "closed", "keydown", "update:show", "clickOverlay"],
        setup(e, {
            emit: o,
            attrs: n,
            slots: a
        }) {
            let t, p;
            const v = $e(document.body),
                l = O(),
                d = O(!1),
                i = O(),
                y = me(() => e.show || !e.lazyRender),
                k = P(() => {
                    const m = {
                        zIndex: l.value
                    };
                    if (je(e.duration)) {
                        const b = e.position === "center" ? "animationDuration" : "transitionDuration";
                        m[b] = `${e.duration}m`
                    }
                    return m
                }),
                B = () => {
                    t || (t = !0, v.value = !0, l.value = e.zIndex !== void 0 ? +e.zIndex : ot(), d.value = !0, o("open"))
                },
                $ = () => {
                    t && nt(e.beforeClose, {
                        done() {
                            t = !1, o("close"), o("update:show", !1), v.value = !1, e.destroyOnClose && (d.value = !1)
                        }
                    })
                },
                U = () => o("opened"),
                q = () => o("closed"),
                W = m => o("keydown", m),
                N = m => {
                    o("clickOverlay", m), e.closeOnClickOverlay && $()
                };
            Z(() => e.show, m => {
                m && !t && (B(), n.tabindex === 0 && xe(() => {
                    var b;
                    (b = i.value) == null || b.focus()
                })), !m && t && $()
            }), ye({
                popupRef: i
            }), fe("popstate", () => {
                e.closeOnPopstate && ($(), p = !1)
            }), ue(() => {
                e.show && B()
            }), Ie(() => {
                p && (o("update:show", !0), p = !1)
            }), Oe(() => {
                e.show && e.teleport && ($(), p = !0)
            }), Ve(he, {
                close: $
            });
            const G = y(() => {
                    const {
                        position: m,
                        safeAreaInsetTop: b,
                        safeAreaInsetBottom: S
                    } = e, x = e.content || a.default || pe;
                    return z(u("div", ce({
                        ref: i,
                        style: k.value,
                        role: "dialog",
                        tabindex: 0,
                        class: ["popup", m === "center" ? "popup-center" : null, {
                            "van-safe-area-top": b,
                            "van-safe-area-bottom": S
                        }],
                        onKeydown: W
                    }, n), [d.value && x()]), [
                        [E, e.show]
                    ])
                }),
                A = () => {
                    if (e.overlay) return u(lt, {
                        show: e.show,
                        class: e.overlayClass,
                        zIndex: l.value,
                        duration: e.duration,
                        customStyle: e.overlayStyle,
                        role: e.closeOnClickOverlay ? "button" : void 0,
                        tabindex: e.closeOnClickOverlay ? 0 : void 0,
                        onClick: N
                    }, {
                        default: a["overlay-content"]
                    })
                },
                F = () => {
                    const {
                        position: m,
                        transition: b,
                        transitionAppear: S
                    } = e, x = m === "center" ? "fade" : `popup-slide-${m}`;
                    return u(Y, {
                        name: b || x,
                        appear: S,
                        onAfterEnter: U,
                        onAfterLeave: q
                    }, {
                        default: G
                    })
                };
            return () => e.teleport ? u(Be, {
                to: e.teleport
            }, {
                default: () => [A(), F()]
            }) : u(de, null, [A(), F()])
        }
    }),
    dt = {
        overlay: !0,
        teleport: "body",
        position: "center",
        transition: "van-fade"
    };
let L = [],
    ct = !0;

function pt(e) {
    const {
        onClosed: o,
        ...n
    } = e;
    return tt({
        setup() {
            const {
                state: t,
                toggle: p
            } = et();
            return () => u(ut, ce(t, n, {
                "onUpdate:show": p
            }), null)
        }
    }).instance
}

function ft(e) {
    if (!L.length || ct) {
        const o = pt(e);
        L.push(o)
    }
    return L[L.length - 1]
}

function vt(e = {}) {
    const o = Object.assign({}, dt, e);
    return ft(o)
}
const J = e => (le("data-v-954f2fdf"), e = e(), ie(), e),
    yt = {
        class: "security"
    },
    mt = {
        class: "security-header"
    },
    ht = J(() => s("span", {
        class: "security-header-left"
    }, null, -1)),
    wt = {
        key: 0
    },
    _t = {
        key: 1
    },
    gt = J(() => s("span", {
        class: "security-header-right"
    }, null, -1)),
    kt = {
        class: "security-content"
    },
    Ct = {
        key: 0
    },
    bt = {
        class: "security-hit"
    },
    St = {
        key: 1
    },
    $t = {
        class: "security-hit"
    },
    xt = {
        key: 2
    },
    It = {
        class: "security-hit"
    },
    Ot = {
        key: 3
    },
    Vt = {
        class: "security-tip"
    },
    Bt = {
        key: 1
    },
    Dt = {
        class: "security-btns"
    },
    Tt = {
        class: "security-footer"
    },
    At = J(() => s("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "60",
        height: "60",
        viewBox: "0 0 60 60",
        fill: "none"
    }, [s("path", {
        d: "M30 57C44.9117 57 57 44.9117 57 30C57 15.0883 44.9117 3 30 3C15.0883 3 3 15.0883 3 30C3 44.9117 15.0883 57 30 57Z",
        stroke: "white",
        "stroke-width": "4",
        "stroke-linejoin": "round"
    }), s("path", {
        d: "M43 17L17 43",
        stroke: "white",
        "stroke-width": "4",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), s("path", {
        d: "M17 17L43 43",
        stroke: "white",
        "stroke-width": "4",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1)),
    Mt = [At],
    jt = T({
        __name: "index",
        props: {
            type: {
                type: String,
                default: "",
                required: !0
            },
            code: {
                type: String,
                default: "",
                required: !0
            },
            codeType: {
                type: Number,
                required: !0
            },
            phone: {
                type: String,
                default: ""
            },
            showType: {
                type: String,
                default: "auth"
            }
        },
        emits: ["update:type", "update:code", "confirm"],
        setup(e, {
            emit: o
        }) {
            const n = e,
                {
                    type: a,
                    code: t,
                    phone: p
                } = De(n, o),
                {
                    t: v
                } = Te(),
                {
                    close: l
                } = st(),
                d = Ae(),
                {
                    verifyList: i,
                    verifyModal: y,
                    verifyActive: k,
                    openVerify: B,
                    onSelectVerify: $,
                    userInfo: U,
                    isOpenForgetPasswordSMSState: q
                } = Ee(),
                {
                    getEmailCode: W,
                    isCount: N,
                    seconds: G
                } = se({
                    time: 300,
                    codeType: n.codeType
                }),
                {
                    isCount: A,
                    seconds: F,
                    getSMSCode: m
                } = se({
                    time: 120,
                    codeType: n.codeType
                }),
                b = P(() => t.value ? k.value.value === "pwd" ? !(t.value.length >= 8) : t.value.length !== 6 : !0),
                S = P(() => n.showType === "phone"),
                x = P(() => S.value ? {} : k.value),
                Q = P(() => {
                    var c, f;
                    return p.value || ((f = (c = U.value) == null ? void 0 : c.verifyMethods) == null ? void 0 : f.mobile)
                }),
                we = () => {
                    l(), d.push({
                        name: "rpwd"
                    })
                },
                ee = () => {
                    l(), d.push({
                        name: "CustomerService"
                    })
                },
                _e = async () => {
                    o("confirm", {
                        type: a,
                        code: t
                    })
                };
            return Z(k, () => {
                a.value = k.value.value
            }), ue(() => {
                S.value || (a.value = k.value.value)
            }), (c, f) => {
                var te, oe;
                const M = D("van-button"),
                    K = D("van-field"),
                    ge = D("van-picker"),
                    ke = D("van-popup");
                return _(), g("div", yt, [s("div", mt, [ht, ne(c.$slots, "header", {}, () => [S.value ? (_(), g("h5", wt, h(r(v)("SMSVerify")), 1)) : (_(), g("h5", _t, h(r(k).title), 1))], !0), gt]), s("div", kt, [x.value.value === "mobile" || S.value ? (_(), g("div", Ct, [s("div", bt, [s("p", null, h(c.$t("tipVerifyIdentityForFundSafety")), 1), s("span", null, h(c.$t("tip6digitVeriCode", [`${r(Ue)(Q.value)} 6`])), 1)]), u(K, {
                    center: "",
                    type: "digit",
                    placeholder: c.$t("phEnterVerificationCode"),
                    maxlength: 6,
                    modelValue: r(t),
                    "onUpdate:modelValue": f[1] || (f[1] = w => j(t) ? t.value = w : null)
                }, {
                    button: C(() => [u(M, {
                        class: "security-code",
                        disabled: r(A),
                        size: "small",
                        type: "primary",
                        onClick: f[0] || (f[0] = w => r(m)(Q.value))
                    }, {
                        default: C(() => [I(h(r(A) ? `${r(F)}S` : c.$t("send")), 1)]),
                        _: 1
                    }, 8, ["disabled"])]),
                    _: 1
                }, 8, ["placeholder", "modelValue"])])) : V("v-if", !0), x.value.value === "email" ? (_(), g("div", St, [s("div", $t, [s("p", null, h(c.$t("tipVerifyIdentityForFundSafety")), 1), s("span", null, h(c.$t("tipemaildigitVeriCode", [r(Ne)(((oe = (te = r(U)) == null ? void 0 : te.verifyMethods) == null ? void 0 : oe.email) || "")])), 1)]), u(K, {
                    center: "",
                    type: "digit",
                    maxlength: 6,
                    modelValue: r(t),
                    "onUpdate:modelValue": f[3] || (f[3] = w => j(t) ? t.value = w : null),
                    placeholder: c.$t("phEnterVerificationCode")
                }, {
                    button: C(() => [u(M, {
                        class: "security-code",
                        disabled: r(N),
                        size: "small",
                        type: "primary",
                        onClick: f[2] || (f[2] = w => r(W)())
                    }, {
                        default: C(() => [I(h(r(N) ? `${r(G)}S` : c.$t("send")), 1)]),
                        _: 1
                    }, 8, ["disabled"])]),
                    _: 1
                }, 8, ["modelValue", "placeholder"])])) : V("v-if", !0), x.value.value === "google" ? (_(), g("div", xt, [s("div", It, [s("p", null, h(c.$t("openauthenticator")), 1), s("p", null, h(c.$t("verificationcodegoogle")), 1)]), u(K, {
                    center: "",
                    clearable: "",
                    maxlength: 6,
                    modelValue: r(t),
                    "onUpdate:modelValue": f[4] || (f[4] = w => j(t) ? t.value = w : null),
                    type: "number",
                    placeholder: c.$t("PgoogleVerification")
                }, null, 8, ["modelValue", "placeholder"])])) : V("v-if", !0), x.value.value === "pwd" ? (_(), g("div", Ot, [u(Re, {
                    value: r(t),
                    "onUpdate:value": f[5] || (f[5] = w => j(t) ? t.value = w : null),
                    label: c.$t("withdrawDialogDesc2"),
                    maxlength: 32
                }, null, 8, ["value", "label"]), s("div", Vt, [r(q) ? (_(), g("p", {
                    key: 0,
                    onClick: we
                }, h(c.$t("withdrawDialogDesc4")), 1)) : (_(), g("p", Bt)), s("div", {
                    onClick: ee
                }, h(c.$t("withdrawDialogDesc5")), 1)])])) : V("v-if", !0), s("div", Dt, [S.value ? V("v-if", !0) : z((_(), ae(M, {
                    key: 0,
                    onClick: r(B)
                }, {
                    default: C(() => [I(h(c.$t("otherverificationmethods")), 1)]),
                    _: 1
                }, 8, ["onClick"])), [
                    [E, x.value.value !== "pwd"]
                ]), u(M, {
                    type: "primary",
                    disabled: b.value,
                    onClick: _e
                }, {
                    default: C(() => [I(h(c.$t("confirmAdd")), 1)]),
                    _: 1
                }, 8, ["disabled"]), S.value ? (_(), ae(M, {
                    key: 1,
                    onClick: ee
                }, {
                    default: C(() => [I(h(c.$t("contactServicer")), 1)]),
                    _: 1
                })) : V("v-if", !0)])]), s("div", Tt, [ne(c.$slots, "footer", {}, () => [s("span", {
                    onClick: f[6] || (f[6] = (...w) => r(l) && r(l)(...w))
                }, Mt)], !0)]), u(ke, {
                    teleport: "body",
                    show: r(y),
                    "onUpdate:show": f[8] || (f[8] = w => j(y) ? y.value = w : null),
                    "lazy-render": !0,
                    round: "",
                    position: "bottom"
                }, {
                    default: C(() => [u(ge, {
                        onCancel: f[7] || (f[7] = w => y.value = !1),
                        onConfirm: r($),
                        columns: r(i)
                    }, null, 8, ["onConfirm", "columns"])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const Pt = H(jt, [
        ["__scopeId", "data-v-954f2fdf"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/SecurityDialog/index.vue"]
    ]),
    zt = T({
        __name: "index",
        setup(e) {
            const o = T({
                    render() {
                        return u("div", null, [I("Test")])
                    }
                }),
                {
                    open: n
                } = Je({
                    title: "未绑定银行卡或支付宝地址",
                    desc: "您还未绑定银行卡或支付宝地址，请先绑定",
                    confirmText: "绑定"
                }),
                a = re({
                    phone: "111111",
                    code: ""
                }),
                t = O(),
                p = vt({
                    content: () => u(Pt, {
                        showType: "phone",
                        code: a.code,
                        "onUpdate:code": i => a.code = i,
                        phone: a.phone,
                        "onUpdate:phone": i => a.phone = i
                    }, null)
                }),
                v = () => {
                    n()
                },
                l = () => {
                    p.open()
                },
                d = async i => {
                    const y = new FormData;
                    y.append("files", i.file), await Fe(Le(y))
                };
            return (i, y) => {
                const k = D("van-button"),
                    B = D("van-uploader");
                return _(), g(de, null, [u(r(o)), u(k, {
                    onClick: v
                }, {
                    default: C(() => [I("测试")]),
                    _: 1
                }), u(k, {
                    onClick: l
                }, {
                    default: C(() => [I("测试2")]),
                    _: 1
                }), u(B, {
                    modelValue: t.value,
                    "onUpdate:modelValue": y[0] || (y[0] = $ => t.value = $),
                    accept: "image/*",
                    "max-count": 1,
                    "after-read": d
                }, null, 8, ["modelValue"])], 64)
            }
        }
    }),
    Et = H(zt, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/test/index.vue"]
    ]),
    Lt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Et
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    Pt as S, Lt as i, vt as u
};