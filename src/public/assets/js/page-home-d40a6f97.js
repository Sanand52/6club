import {
    V as U,
    W as n,
    X as a,
    a4 as x,
    D as c,
    Y as t,
    _ as e,
    $ as C,
    a2 as B,
    a3 as G,
    Z as ue,
    a7 as M,
    ah as vi,
    F as J,
    w as zt,
    a1 as Jt,
    a8 as ft,
    G as kt,
    K as ht,
    r as v,
    a0 as W,
    ac as it,
    a5 as A,
    a6 as E,
    ad as Rt,
    ae as St,
    ar as mo,
    as as Qn,
    z as en,
    aa as ve,
    C as Dt,
    x as Yt,
    at as vo,
    I as Ve,
    ai as te,
    au as Yn,
    y as ke,
    av as _o,
    aw as ko,
    am as Zi,
    ax as Zn,
    M as nn,
    ay as ho,
    E as Zt,
    m as oe,
    az as fo,
    aA as yo,
    a9 as Jn,
    B as ce,
    k as Ot,
    J as an,
    aq as _e,
    aj as on,
    aB as be,
    ak as qe,
    aC as Qe,
    ap as $o,
    aD as wo,
    aE as To,
    aF as ta,
    aG as Co,
    aH as No,
    aI as Lo,
    aJ as zo,
    aK as xo,
    aL as Io,
    T as Ro
} from "./modules-3ee1a0d5.js";
import {
    S as Ye,
    h as Vt,
    i as _i,
    _ as K,
    j as Fe,
    g as qt,
    A as lt,
    k as So,
    a as Ci,
    G as Me,
    l as Pn,
    L as ea,
    s as Bo,
    m as Mo,
    n as Go,
    o as Ji,
    p as Ao,
    q as Te,
    r as Ce,
    t as Ni,
    v as ia,
    w as na,
    x as It,
    y as sn,
    z as Po,
    B as Do,
    C as Oo,
    E as qo,
    F as Eo,
    H as jo,
    I as Ho,
    J as Wo,
    K as Vo,
    D as xe,
    M as We,
    O as de,
    P as Ee,
    Q as ee,
    R as Fo,
    T as aa,
    U as oa,
    V as Uo,
    W as Ko,
    X as sa,
    Y as Xo,
    Z as Qo,
    $ as Yo,
    a0 as la,
    a1 as ca,
    a2 as ln,
    a3 as cn,
    a4 as Zo,
    a5 as Jo,
    a6 as ts,
    a7 as es,
    a8 as ra,
    a9 as ua,
    aa as is,
    ab as rn,
    ac as ns,
    ad as as,
    ae as os,
    af as da,
    ag as ss,
    ah as pa,
    ai as ls,
    aj as cs,
    ak as ga,
    al as ba,
    am as rs,
    an as us,
    ao as ds,
    ap as ps,
    aq as gs,
    ar as $i,
    as as $e,
    at as we,
    au as Dn,
    av as On,
    aw as bs,
    ax as ma,
    ay as va,
    az as ms,
    aA as vs,
    aB as _s,
    aC as _a,
    aD as ks,
    aE as hs,
    aF as fs,
    aG as ka,
    aH as ys,
    aI as $s,
    aJ as ws,
    aK as Ts,
    u as Cs,
    aL as tn,
    aM as Ns,
    aN as Ls,
    aO as zs,
    aP as xs,
    aQ as Is
} from "./page-activity-b0cc3a5b.js";
const Rs = {
        moneyup: /^(?!0+$)(?!0*\.0*$)\d{1,11}(\.\d{1,2})?$/,
        redNum: /^([1-9]\d{0,2}|1000)$/,
        requiredNum: /^.{0,20}$/,
        passReg2: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,30}$/,
        passReg3: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/,
        outmoneypwd: /^\d{6}$/,
        name: /^[^~`!@#$%^&*+-/=/_()|<\{\}\[\],.:'"//\?\\/>》《]{1,30}$/,
        tuiName: /^[a-zA-Z\s\u4e00-\u9fa50-9][a-zA-Z0-9\s\u4e00-\u9fa5]{1,23}$/,
        yaoma: /^[A-Za-z0-9|A-Za-z|0-9]{6}$/,
        httpCheck: /^((ht|f)tps?):\/\/([\w-]+(\.[\w-]+)*\/?)+(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?$/,
        password: /^[A-Za-z0-9~`!@#$%^&*()_+-='",;.?/|]{6,12}$/,
        account: /^(?![a-zA-Z]+$)[a-zA-Z0-9|0-9]{7,11}$/,
        email: /^[0-9A-Za-zd]+([-_.][0-9A-Za-zd]+)*@([0-9A-Za-zd]+[-.]{0,1})[A-Za-zd]{1,5}$/,
        email1: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        length1: /^.{6,30}$/,
        phone: /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
        phone1: /^(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
        moneys2: /^(-?)\d{1,9}(\.\d{1,2})?$/,
        moneys21: /^\d{1,4}(\.\d{1,2})?$/,
        ip: /^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/,
        int: /^[1-9]\d*$/,
        verifyname: /[^a-zA-Z\s+$]/g,
        inputrule: /^[0-9,|]+$/
    },
    Ss = {
        moneyup: "validateDesc1",
        redNum: "validateDesc2",
        requiredNum: "validateDesc3",
        passReg2: "pswRequirements",
        outmoneypwd: "validateDesc5",
        name: "validateDesc6",
        tuiName: "validateDesc7",
        endSpace: "validateDesc8",
        yaoma: "validateDesc9",
        httpCheck: "validateDesc10",
        password: "validateDesc11",
        account: "validateDesc13",
        email: "validateDesc14",
        length1: "validateDesc15",
        phone: "validateDesc16",
        moneys2: "validateDesc17",
        moneys21: "validateDesc18",
        ip: "validateDesc19",
        int: "validateDesc20",
        verifyname: "validateDesc21",
        inputtip: "validateDesc22"
    },
    Bs = {
        class: "hot_container"
    },
    Ms = {
        key: 0,
        class: "platform"
    },
    Gs = {
        key: 0,
        class: "title"
    },
    As = {
        class: "list"
    },
    Ps = ["onClick"],
    Ds = {
        class: "item"
    },
    Os = ["src", "data-img"],
    qs = {
        key: 0,
        class: "win-odds"
    },
    Es = {
        key: 0,
        class: "title"
    },
    js = {
        class: "list"
    },
    Hs = ["onClick"],
    Ws = {
        class: "item"
    },
    Vs = ["src", "data-img"],
    Fs = {
        key: 0,
        class: "win-odds"
    },
    Us = U({
        __name: "HotGameItem",
        props: {
            platformList: {
                type: Array,
                required: !0
            },
            clicksTopList: {
                type: Array,
                required: !0
            },
            isAll: {
                type: Boolean,
                required: !0
            }
        },
        emits: ["onItemClick"],
        setup(l, {
            emit: i
        }) {
            const o = vi(() => _i(() =>
                    import ("./gameHot-4496d4ae.js"), ["assets/js/gameHot-4496d4ae.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css", "assets/js/page-activity-b0cc3a5b.js", "assets/js/native/index-09743dd6.js", "assets/js/en-cff984dc.js", "assets/js/rus-ecb14220.js", "assets/js/vi-edb4f658.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-e19d7dd2.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-116b9972.js", "assets/js/pak-656a575f.js", "assets/js/ar-1c9ff85b.js", "assets/css/page-activity-f0ca3544.css"])),
                r = vi(() => _i(() =>
                    import ("./gameRec-1b7c66f1.js"), ["assets/js/gameRec-1b7c66f1.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css", "assets/js/page-activity-b0cc3a5b.js", "assets/js/native/index-09743dd6.js", "assets/js/en-cff984dc.js", "assets/js/rus-ecb14220.js", "assets/js/vi-edb4f658.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-e19d7dd2.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-116b9972.js", "assets/js/pak-656a575f.js", "assets/js/ar-1c9ff85b.js", "assets/css/page-activity-f0ca3544.css"])),
                g = vi(() => _i(() =>
                    import ("./noticeBarHot-152c1c01.js"), ["assets/js/noticeBarHot-152c1c01.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css", "assets/js/page-activity-b0cc3a5b.js", "assets/js/native/index-09743dd6.js", "assets/js/en-cff984dc.js", "assets/js/rus-ecb14220.js", "assets/js/vi-edb4f658.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-e19d7dd2.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-116b9972.js", "assets/js/pak-656a575f.js", "assets/js/ar-1c9ff85b.js", "assets/css/page-activity-f0ca3544.css"])),
                b = Ye(),
                d = u => {
                    i("onItemClick", u)
                };
            return (u, p) => (n(), a("div", Bs, [u.platformList.length > 0 && !u.isAll ? (n(), a("div", Ms, [u.isAll ? C("v-if", !0) : (n(), a("div", Gs, [x(c(r), {
                class: "gameRec"
            }), t("span", null, e(u.$t("platRecom")), 1)])), t("div", As, [(n(!0), a(B, null, G(u.platformList, s => (n(), a("div", {
                key: s.vendorId,
                onClick: _ => d(s)
            }, [t("div", Ds, [x(c(o), {
                class: "hot_bage"
            }), t("img", {
                src: s.imgUrl,
                alt: "",
                "data-img": c(Vt)("images", "avatar")
            }, null, 8, Os)]), c(b).isShowHotGameWinOdds ? (n(), a("div", qs, [t("span", null, e(u.$t("winOdds")), 1), t("span", null, e(s.winOdds) + "%", 1), t("div", {
                class: "win-p",
                style: ue({
                    width: `${Math.min(s.winOdds,100)}%`
                })
            }, null, 4)])) : C("v-if", !0)], 8, Ps))), 128))])])) : C("v-if", !0), u.platformList.length > 0 ? (n(), a("div", {
                key: 1,
                class: M(["popular", {
                    pupularAll: u.isAll
                }])
            }, [u.isAll ? C("v-if", !0) : (n(), a("div", Es, [x(c(g), {
                class: "hotGames"
            }), t("span", null, e(u.$t("hot")), 1)])), t("div", js, [(n(!0), a(B, null, G(u.clicksTopList, s => (n(), a("div", {
                key: s.vendorId,
                onClick: _ => d(s)
            }, [t("div", Ws, [t("img", {
                src: s.imgUrl,
                alt: "",
                "data-img": c(Vt)("images", "avatar")
            }, null, 8, Vs)]), c(b).isShowHotGameWinOdds ? (n(), a("div", Fs, [t("span", null, e(u.$t("winOdds")), 1), t("span", null, e(s.winOdds) + "%", 1), t("div", {
                class: "win-p",
                style: ue({
                    width: `${Math.min(s.winOdds,100)}%`
                })
            }, null, 4)])) : C("v-if", !0)], 8, Hs))), 128))])], 2)) : C("v-if", !0)]))
        }
    });
const Ks = K(Us, [
        ["__scopeId", "data-v-d06787cb"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/RedHome/GameList/HotGameItem.vue"]
    ]),
    Xs = ["onClick"],
    Qs = U({
        __name: "OnlineGamesItem",
        props: {
            gameData: {
                type: Array,
                required: !0
            },
            isAll: {
                type: Boolean,
                required: !0
            },
            gameType: {
                type: String,
                required: !0
            }
        },
        emits: ["onItemClick"],
        setup(l, {
            emit: i
        }) {
            const o = l,
                r = J(() => o.isAll ? o.gameData : o.gameData.length > 8 ? o.gameData.slice(0, 8) : o.gameData),
                g = b => {
                    i("onItemClick", b)
                };
            return zt(() => {}), (b, d) => {
                const u = Jt("lazy");
                return n(), a("div", {
                    class: M(["minGame_container", {
                        all_game: b.isAll
                    }])
                }, [(n(!0), a(B, null, G(r.value, p => (n(), a("div", {
                    class: "onlineGamesItem",
                    key: p.gameID,
                    onClick: s => g(p)
                }, [ft((n(), a("img", {
                    class: M(b.gameType === "fish" ? "fish_img" : "min_game_img"),
                    key: p.gameID
                }, null, 2)), [
                    [u, p.img]
                ])], 8, Xs))), 128))], 2)
            }
        }
    });
const Ys = K(Qs, [
        ["__scopeId", "data-v-860d7030"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/RedHome/GameList/OnlineGamesItem.vue"]
    ]),
    Zs = {
        class: "lottery_container"
    },
    Js = ["onClick"],
    tl = U({
        __name: "LotterySlotItem",
        props: {
            gameData: {
                type: Array,
                required: !0
            },
            isAll: {
                type: Boolean,
                required: !0
            }
        },
        setup(l) {
            const {
                t: i
            } = kt(), o = ht(), r = u => {
                if (u) {
                    let p = u;
                    switch (p) {
                        case "Trx Win Go":
                            p = "Trx Win";
                            break;
                        case "FXOSO":
                            p = i("FXOSO");
                        default:
                            p = p
                    }
                    return p
                }
                return ""
            }, g = u => {
                if (u) {
                    let p = [];
                    switch (u) {
                        case "Win Go":
                        case "Trx Win Go":
                            p = [i("lotteryHintStr1"), i("lotteryHintStr2")];
                            break;
                        case "5D":
                        case "K3":
                            p = [i("lotteryHintStr3"), i("lotteryHintStr4")];
                            break;
                        case "XOSO":
                        case "FXOSO":
                            p = [i("lotteryHintStr5"), i("lotteryHintStr6")];
                            break;
                        case "Bingo18":
                            p = [i("lotteryHintStr5"), i("lotteryHintStr6")];
                            break;
                        case "4D":
                            p = [i("lotteryHintStr7"), i("lotteryHintStr6")];
                            break;
                        default:
                            p = []
                    }
                    return p
                }
                return ""
            }, b = [{
                value: 1,
                path: "WinGo"
            }, {
                value: 3,
                path: "5D"
            }, {
                value: 2,
                path: "K3"
            }, {
                value: 4,
                path: "WinTrx"
            }, {
                value: 5,
                path: "XoSo"
            }, {
                value: 6,
                path: "XoSo"
            }, {
                value: 7,
                path: "Binguo"
            }, {
                value: 8,
                path: "4D"
            }], d = u => {
                o.push({
                    name: "AllLotteryGames-" + b[b.findIndex(p => p.value === u.id)].path,
                    query: {
                        id: u.id
                    }
                })
            };
            return (u, p) => {
                const s = Jt("lazy");
                return n(), a("div", Zs, [(n(!0), a(B, null, G(u.gameData, _ => (n(), a("div", {
                    class: "lotterySlotItem",
                    key: _.id,
                    onClick: m => d(_)
                }, [ft(t("img", null, null, 512), [
                    [s, _.categoryImg]
                ]), t("span", null, e(r(_.categoryCode)), 1), t("h4", null, [t("div", null, e(g(_.categoryCode)[0]), 1), t("div", null, e(g(_.categoryCode)[1]), 1)])], 8, Js))), 128))])
            }
        }
    });
const el = K(tl, [
        ["__scopeId", "data-v-acaadf81"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/RedHome/GameList/LotterySlotItem.vue"]
    ]),
    il = {
        class: "lotterySlotItem__container"
    },
    nl = {
        class: "title"
    },
    al = {
        class: "tit"
    },
    ol = {
        class: "game_img"
    },
    sl = U({
        __name: "OtherGameItem",
        props: {
            info: {
                type: null,
                required: !0
            },
            isAll: {
                type: Boolean,
                required: !0
            },
            gameType: {
                type: String,
                required: !0
            }
        },
        setup(l) {
            const {
                t: i
            } = kt(), o = {
                sport: i("sport"),
                video: i("live"),
                chess: i("chess")
            };
            return (r, g) => {
                const b = Jt("lazy");
                return n(), a("div", il, [t("div", nl, [t("div", al, e(o[r.gameType]), 1), C(' <div class="desc">{{ getArrayKey(rootConfig.gameAllName, info.slotsTypeID) }}</div> ')]), ft(t("img", ol, null, 512), [
                    [b, r.info.vendorImg]
                ])])
            }
        }
    });
const ll = K(sl, [
        ["__scopeId", "data-v-1153e4fd"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/RedHome/GameList/OtherGameItem.vue"]
    ]),
    cl = ["onClick"],
    rl = {
        class: "gameImg"
    },
    ul = U({
        __name: "ElectronicItem",
        props: {
            gameData: {
                type: Array,
                default: []
            },
            isAll: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["handleOpenGame"],
        setup(l, {
            emit: i
        }) {
            const o = l,
                r = J(() => o.isAll ? o.gameData : o.gameData.slice(0, 6)),
                g = b => {
                    i("handleOpenGame", b, "slot")
                };
            return zt(() => {}), (b, d) => {
                const u = Jt("lazy");
                return n(), a("div", {
                    class: M(["onlineGamesItem__container", {
                        allGame: l.isAll
                    }])
                }, [(n(!0), a(B, null, G(r.value, p => (n(), a("div", {
                    key: p.slotsTypeID,
                    class: "item",
                    onClick: s => g(p)
                }, [ft(t("img", rl, null, 512), [
                    [u, p.vendorImg]
                ]), C(' <van-image :src="getIcons(`home/dianzi/onlineSlot`, item.slotsName)" class="slot_img">\n				<template v-slot:error>加载失败</template>\n			</van-image> ')], 8, cl))), 128))], 2)
            }
        }
    });
const dl = K(ul, [
        ["__scopeId", "data-v-54337c48"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/RedHome/GameList/ElectronicItem.vue"]
    ]),
    pl = {
        alt: ""
    },
    gl = U({
        __name: "ElectronicWinRate",
        setup(l) {
            const i = Ye(),
                o = J(() => i.winRate.electronicWinRateImgUrl || ""),
                r = J(() => !!(i.winRate.isShowElectronicWinRateExternalLink && o.value)),
                g = () => {
                    i.winRate.electronicWinRateExternalLink && window.open(i.winRate.electronicWinRateExternalLink)
                };
            return (b, d) => {
                const u = Jt("lazy");
                return r.value ? (n(), a("div", {
                    key: 0,
                    class: "WinRate",
                    onClick: g
                }, [ft(t("img", pl, null, 512), [
                    [u, o.value]
                ])])) : C("v-if", !0)
            }
        }
    });
const bl = K(gl, [
        ["__scopeId", "data-v-0d36c546"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/RedHome/GameList/ElectronicWinRate.vue"]
    ]),
    ki = l => (Rt("data-v-df3cc798"), l = l(), St(), l),
    ml = ki(() => t("div", {
        class: "skeleton_hot"
    }, [t("div", {
        class: "hot_tit"
    }), t("div", {
        class: "hot_list"
    }, [t("div"), t("div"), t("div"), t("div"), t("div"), t("div")]), t("div", {
        class: "hot_tit"
    }), t("div", {
        class: "hot_list"
    }, [t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div")])], -1)),
    vl = ki(() => t("div", {
        class: "skeleton_other"
    }, [t("div"), t("div"), t("div"), t("div")], -1)),
    _l = {
        class: "otherGame"
    },
    kl = ki(() => t("div", {
        class: "skeleton_slot"
    }, [t("div"), t("div"), t("div"), t("div"), t("div"), t("div")], -1)),
    hl = ki(() => t("div", {
        class: "skeleton_other"
    }, [t("div"), t("div"), t("div"), t("div")], -1)),
    fl = ki(() => t("div", {
        class: "skeleton_flash"
    }, [t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div")], -1)),
    yl = ["src"],
    $l = U({
        __name: "GameListGrid",
        props: {
            currentGame: {
                type: String,
                default: ""
            },
            isAll: {
                type: Boolean,
                default: !1
            }
        },
        setup(l) {
            const i = l,
                o = ht(),
                r = v(!0),
                {
                    onItemClick: g,
                    getAllGame: b,
                    homeState: d
                } = Fe(),
                u = J(() => JSON.parse(JSON.stringify(d.allGameList))),
                p = J(() => i.currentGame === "popular" ? 1 : ["sport", "chess", "video"].includes(i.currentGame) ? 2 : i.currentGame === "lottery" ? 3 : i.currentGame === "slot" ? 4 : i.currentGame === "flash" || i.currentGame === "fish" ? 5 : -1),
                s = async () => {
                    var h, N;
                    await b();
                    let f = u.value;
                    f.popular = [(h = u.value) == null ? void 0 : h.popular.platformList, (N = u.value) == null ? void 0 : N.popular.clicksTopList], sessionStorage.setItem("gameData", JSON.stringify(f)), r.value = !1
                },
                _ = () => {
                    o.push({
                        name: "AllGames",
                        query: {
                            type: i.currentGame
                        }
                    })
                },
                m = J(() => u.value[i.currentGame].length < 1 ? [] : u.value[i.currentGame][0]),
                w = J(() => u.value[i.currentGame].length < 1 ? [] : u.value[i.currentGame][1].length > 9 && !i.isAll ? u.value[i.currentGame][1].slice(0, 9) : u.value[i.currentGame][1]),
                y = async (f, h) => {
                    ["chess", "slot"].includes(h) ? (sessionStorage.setItem("slotGamesList", JSON.stringify(u.value[i.currentGame])), sessionStorage.setItem("gameType", JSON.stringify(i.currentGame)), sessionStorage.setItem("clickedItem", JSON.stringify(f)), o.push({
                        name: "AllOnlineGames"
                    })) : g(f)
                };
            return s(), (f, h) => {
                const N = W("van-skeleton");
                return n(), a("div", {
                    class: M(["gameListGrid__container", {
                        all_container: l.isAll
                    }])
                }, [l.currentGame === "popular" ? (n(), it(N, {
                    key: 0,
                    loading: r.value
                }, {
                    template: A(() => [ml]),
                    default: A(() => [x(Ks, {
                        platformList: m.value,
                        clicksTopList: w.value,
                        onOnItemClick: c(g),
                        isAll: l.isAll
                    }, null, 8, ["platformList", "clicksTopList", "onOnItemClick", "isAll"])]),
                    _: 1
                }, 8, ["loading"])) : C("v-if", !0), p.value === 2 ? (n(), it(N, {
                    key: 1,
                    loading: r.value
                }, {
                    template: A(() => [vl]),
                    default: A(() => [t("div", _l, [(n(!0), a(B, null, G(u.value[l.currentGame], (L, k) => (n(), it(ll, {
                        key: k,
                        info: L,
                        gameType: l.currentGame,
                        isAll: l.isAll,
                        onClick: $ => y(L, l.currentGame)
                    }, null, 8, ["info", "gameType", "isAll", "onClick"]))), 128))])]),
                    _: 1
                }, 8, ["loading"])) : C("v-if", !0), p.value === 4 ? (n(), it(N, {
                    key: 2,
                    loading: r.value
                }, {
                    template: A(() => [kl]),
                    default: A(() => [l.isAll ? C("v-if", !0) : (n(), it(bl, {
                        key: 0
                    })), x(dl, {
                        gameData: u.value[l.currentGame],
                        isAll: l.isAll,
                        onHandleOpenGame: y
                    }, null, 8, ["gameData", "isAll"])]),
                    _: 1
                }, 8, ["loading"])) : C("v-if", !0), p.value === 3 ? (n(), it(N, {
                    key: 3,
                    loading: r.value
                }, {
                    template: A(() => [hl]),
                    default: A(() => [x(el, {
                        gameData: u.value[l.currentGame],
                        isAll: l.isAll
                    }, null, 8, ["gameData", "isAll"])]),
                    _: 1
                }, 8, ["loading"])) : C("v-if", !0), C(" 小游戏、捕鱼 "), p.value === 5 ? (n(), it(N, {
                    key: 4,
                    loading: r.value
                }, {
                    template: A(() => [fl]),
                    default: A(() => [x(Ys, {
                        gameData: u.value[l.currentGame],
                        gameType: l.currentGame,
                        isAll: l.isAll,
                        onOnItemClick: c(g)
                    }, null, 8, ["gameData", "gameType", "isAll", "onOnItemClick"])]),
                    _: 1
                }, 8, ["loading"])) : C("v-if", !0), l.isAll ? C("v-if", !0) : (n(), a("button", {
                    key: 5,
                    onClick: _,
                    class: "look_all"
                }, [t("img", {
                    src: c(qt)("home", "all"),
                    alt: ""
                }, null, 8, yl), E(" " + e(f.$t("viewAll")), 1)]))], 2)
            }
        }
    });
const ha = K($l, [
        ["__scopeId", "data-v-df3cc798"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/RedHome/GameList/GameListGrid.vue"]
    ]),
    wl = {
        class: "gamesList__container"
    },
    Tl = {
        class: "gamesList__container-title"
    },
    Cl = U({
        __name: "GameList",
        props: {
            gameData: {
                type: Object,
                required: !0
            },
            title: {
                type: String,
                required: !0
            },
            gameType: {
                type: String,
                required: !0
            }
        },
        setup(l) {
            return (i, o) => (n(), a("div", wl, [t("div", Tl, e(i.title), 1), x(ha, {
                currentGame: i.gameType,
                isAll: !0
            }, null, 8, ["currentGame"])]))
        }
    });
const Nl = K(Cl, [
        ["__scopeId", "data-v-e4c17073"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/RedHome/AllGames/GameList.vue"]
    ]),
    fa = Symbol();
var ya = (l, i) => {
    const o = l.__vccOpts || l;
    for (const [r, g] of i) o[r] = g;
    return o
};
const Ll = U({
        name: "FunTabItem",
        props: {
            title: String,
            name: [String, Number],
            badge: [String, Number]
        },
        setup(l) {
            const i = mo(fa),
                o = v(),
                r = J(() => (i == null ? void 0 : i.activeValue.value) === l.name ? {
                    color: i == null ? void 0 : i.activeColor.value
                } : {}),
                g = () => {
                    i == null || i.setActiveValue(l.name)
                },
                b = {
                    name: Qn(l, "name"),
                    el: o
                };
            return zt(() => {
                var d;
                (d = i.addItem) == null || d.call(i, b)
            }), en(() => {
                var d;
                (d = i.removeItem) == null || d.call(i, b)
            }), {
                el: o,
                style: r,
                handleClick: g
            }
        }
    }),
    zl = {
        class: "fun-tab-item__wrap"
    },
    xl = {
        class: "fun-tab-item__label"
    },
    Il = {
        key: 0,
        class: "fun-tab-item__badge"
    };

function Rl(l, i, o, r, g, b) {
    return n(), a("div", {
        ref: "el",
        style: ue(l.style),
        class: "fun-tab-item",
        onClick: i[0] || (i[0] = (...d) => l.handleClick && l.handleClick(...d))
    }, [t("div", zl, [ve(l.$slots, "icon"), t("div", xl, [ve(l.$slots, "default", {}, () => [E(e(l.title), 1)])]), l.badge ? (n(), a("div", Il, e(l.badge), 1)) : C("v-if", !0)])], 4)
}
var $a = ya(Ll, [
    ["render", Rl],
    ["__file", "/Users/scoutyin/Documents/ScoutYin/fun-tab/src/tab-item.vue"]
]);
const Vi = window;

function Sl() {
    let l = 0;
    const i = ["webkit", "moz"];
    for (let o = 0; o < i.length && !window.requestAnimationFrame; ++o) window.requestAnimationFrame = Vi[i[o] + "RequestAnimationFrame"], window.cancelAnimationFrame = Vi[i[o] + "CancelAnimationFrame"] || Vi[i[o] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(o) {
        const r = Date.now(),
            g = r - l,
            b = Math.max(0, 16.7 - g),
            d = window.setTimeout(function() {
                o(g)
            }, b);
        return l = r + b, d
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(o) {
        clearTimeout(o)
    })
}
const Bl = U({
        name: "FunTabs",
        props: {
            modelValue: {
                type: [String, Number],
                default: ""
            },
            lineWidth: {
                type: [Number, String],
                default: 30
            },
            lineHeight: {
                type: Number,
                default: 3
            },
            activeColor: {
                type: String,
                default: "#1677ff"
            },
            additionalX: {
                type: Number,
                default: 50
            },
            reBoundExponent: {
                type: Number,
                default: 10,
                validator(l) {
                    return l > 0
                }
            },
            inertialDuration: {
                type: Number,
                default: 1e3,
                validator(l) {
                    return l > 0
                }
            },
            reBoundingDuration: {
                type: Number,
                default: 360
            }
        },
        emits: ["update:modelValue", "change"],
        setup(l, {
            emit: i,
            expose: o
        }) {
            let r = null;
            const g = [],
                b = v(),
                d = v(),
                u = v(l.modelValue),
                p = v(0),
                s = v(0),
                _ = v(0),
                m = v(0),
                w = v(0),
                y = v(!1),
                f = v(!1),
                h = v(0),
                N = v(0),
                L = v(0),
                k = v(0),
                $ = v(0),
                T = v(0),
                R = v(16.7),
                z = v(0),
                I = v(0),
                S = v(0),
                D = v(.001),
                P = v(.001),
                V = J(() => {
                    const H = f.value && !y.value ? l.reBoundingDuration : 0;
                    return {
                        transitionTimingFunction: f.value ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.1, 0.57, 0.1, 1)",
                        transitionDuration: `${H}ms`,
                        transform: `translate3d(${h.value}px, 0px, 0px)`
                    }
                }),
                F = J(() => ({
                    transition: "all 300ms",
                    width: `${s.value}px`,
                    height: `${l.lineHeight}px`,
                    transform: `translate3d(${p.value}px, 0, 0)`,
                    backgroundColor: l.activeColor
                })),
                nt = J(() => k.value <= N.value);
            Dt(() => l.modelValue, H => {
                u.value = H, ut()
            });
            const ut = () => {
                    r || (r = new Promise(H => {
                        Yt(() => {
                            Bt(), H(), r = null
                        })
                    }))
                },
                ct = H => {
                    u.value = H, i("update:modelValue", H), i("change", H)
                },
                ot = H => {
                    g.push(H), ut()
                },
                Z = H => {
                    const wt = g.findIndex(jt => jt.name === H.name);
                    wt !== -1 && (g.splice(wt, 1), ut())
                },
                _t = {
                    activeValue: u,
                    activeColor: Qn(l, "activeColor"),
                    addItem: ot,
                    removeItem: Z,
                    setActiveValue: ct
                };
            vo(fa, _t);
            const Bt = () => {
                    var H, wt;
                    _.value = ((H = b.value) == null ? void 0 : H.offsetWidth) || 0, m.value = ((wt = d.value) == null ? void 0 : wt.offsetWidth) - _.value, Gt(), Mt()
                },
                At = () => (f.value = !1, h.value > 0 ? (f.value = !0, h.value = 0) : h.value < -m.value && (f.value = !0, h.value = -m.value), f.value),
                dt = () => {
                    nt.value ? h.value <= 0 && h.value + m.value > 0 || h.value > 0 ? h.value += k.value - L.value : h.value + m.value <= 0 && (h.value += l.additionalX * (k.value - L.value) / (_.value + Math.abs(h.value + m.value))) : h.value >= 0 ? h.value += l.additionalX * (k.value - L.value) / (_.value + h.value) : (h.value <= 0 && h.value + m.value >= 0 || h.value + m.value <= 0) && (h.value += k.value - L.value), L.value = k.value
                },
                yt = () => {
                    if (I.value = Date.now(), R.value = I.value - z.value, nt.value ? h.value <= -m.value ? (P.value *= (l.reBoundExponent + Math.abs(h.value + m.value)) / l.reBoundExponent, w.value = Math.min(w.value - P.value, 0)) : w.value = Math.min(w.value - P.value * R.value, 0) : h.value >= 0 ? (P.value *= (l.reBoundExponent + h.value) / l.reBoundExponent, w.value = Math.max(w.value - P.value, 0)) : w.value = Math.max(w.value - P.value * R.value, 0), h.value += w.value * R.value / 2, Math.abs(w.value) <= D.value) {
                        At();
                        return
                    }
                    z.value = I.value, S.value = requestAnimationFrame(yt)
                },
                $t = () => {
                    if (!g.length) return;
                    const H = g.find(wt => wt.name.value === u.value);
                    return H && H.el.value
                },
                Mt = () => {
                    const H = $t();
                    if (!H) return;
                    const wt = H.offsetWidth,
                        jt = H.offsetLeft,
                        {
                            lineWidth: ie
                        } = l;
                    ie === "auto" ? s.value = wt : ie < 1 ? s.value = wt * ie : s.value = ie, p.value = jt + (wt - s.value) / 2
                },
                Gt = () => {
                    const H = $t();
                    if (!H) return;
                    const wt = H.offsetLeft,
                        jt = (_.value - H.offsetWidth) / 2;
                    let ie = 0;
                    const Ne = Math.abs(h.value);
                    wt <= Ne + jt ? ie = jt - (wt + h.value) : ie = -(wt - Ne - jt);
                    let re = ie + h.value;
                    re > 0 && (re = 0), re < -m.value && (re = -m.value), f.value = !0, h.value = re
                },
                gt = H => {
                    H.stopPropagation(), cancelAnimationFrame(S.value), L.value = H.touches[0].clientX
                },
                et = H => {
                    m.value <= 0 || (H.preventDefault(), H.stopPropagation(), y.value = !0, $.value = T.value, N.value = L.value, k.value = H.touches[0].clientX, dt(), T.value = H.timeStamp)
                },
                at = H => {
                    if (y.value = !1, At()) cancelAnimationFrame(S.value);
                    else {
                        let wt = H.timeStamp - T.value,
                            jt = T.value - $.value;
                        if (jt = jt > 0 ? jt : 8, wt > 100) return;
                        w.value = (L.value - N.value) / jt, P.value = w.value / l.inertialDuration, z.value = Date.now(), S.value = requestAnimationFrame(yt)
                    }
                },
                Q = () => {
                    const H = b.value;
                    H.addEventListener("touchstart", gt, !1), H.addEventListener("touchmove", et, !1), H.addEventListener("touchend", at, !1)
                },
                Y = () => {
                    const H = b.value;
                    H.removeEventListener("touchstart", gt), H.removeEventListener("touchmove", et), H.removeEventListener("touchend", at)
                };
            return zt(() => {
                Sl(), Q(), ut()
            }), Ve(() => {
                Y()
            }), o({
                resize: Bt
            }), {
                viewAreaRef: b,
                listRef: d,
                activeValue: u,
                lineOffset: p,
                activeLineWidth: s,
                viewAreaWidth: _,
                offsetX: m,
                speed: w,
                touching: y,
                reBounding: f,
                translateX: h,
                startX: N,
                lastX: L,
                currentX: k,
                startMoveTime: $,
                endMoveTime: T,
                frameTime: R,
                frameStartTime: z,
                frameEndTime: I,
                inertiaFrame: S,
                zeroSpeed: D,
                acceleration: P,
                listStyle: V,
                activeBarStyle: F,
                isMoveLeft: nt
            }
        }
    }),
    Ml = {
        ref: "viewAreaRef",
        class: "fun-tabs"
    };

function Gl(l, i, o, r, g, b) {
    return n(), a("div", Ml, [t("div", {
        ref: "listRef",
        style: ue(l.listStyle),
        class: "fun-tabs__tab-list"
    }, [ve(l.$slots, "default"), t("div", {
        style: ue(l.activeBarStyle),
        class: "fun-tabs__active-line"
    }, null, 4)], 4)], 512)
}
var wa = ya(Bl, [
    ["render", Gl],
    ["__file", "/Users/scoutyin/Documents/ScoutYin/fun-tab/src/tabs.vue"]
]);
const Al = U({
        __name: "NavBar",
        props: {
            list: {
                type: Array,
                required: !0
            },
            tabClassName: {
                type: String,
                required: !0
            },
            active: {
                type: Number,
                required: !0,
                default: 0
            },
            tabItemClassName: {
                type: String,
                required: !1
            }
        },
        emits: ["update:active", "onClickTab"],
        setup(l, {
            expose: i,
            emit: o
        }) {
            const r = l,
                g = v(),
                b = v(0),
                d = (u, p) => {
                    o("update:active", b.value), o("onClickTab", {
                        item: u,
                        index: p
                    })
                };
            return Dt(() => r.active, u => {
                b.value = u
            }), i({
                funtabRef: g
            }), (u, p) => (n(), it(c(wa), {
                modelValue: b.value,
                "onUpdate:modelValue": p[0] || (p[0] = s => b.value = s),
                class: M(u.tabClassName),
                lineWidth: "0",
                ref_key: "funtabRef",
                ref: g
            }, {
                default: A(() => [(n(!0), a(B, null, G(u.list, (s, _) => ft((n(), it(c($a), {
                    name: _,
                    key: _,
                    class: M([u.tabItemClassName, {
                        activeClassName: u.active === _
                    }]),
                    onClick: m => d(s, _)
                }, {
                    default: A(() => [ve(u.$slots, "default", {
                        item: s,
                        index: _
                    })]),
                    _: 2
                }, 1032, ["name", "class", "onClick"])), [
                    [te, s.isShow !== void 0 ? s.isShow : !0]
                ])), 128))]),
                _: 3
            }, 8, ["modelValue", "class"]))
        }
    }),
    ui = K(Al, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/FunTab/NavBar.vue"]
    ]),
    Pl = {
        class: "allGames__container"
    },
    qn = 92 + 140,
    En = 16 + 28,
    Dl = U({
        __name: "index",
        setup(l) {
            const {
                homeState: i,
                getGameType: o,
                getAllGame: r
            } = Fe(), g = v(0), b = v(null), d = v(), u = ht(), {
                t: p
            } = kt(), s = v([]), _ = v({});

            function m() {
                u.go(-1)
            }
            const w = v(null),
                {
                    direction: y
                } = Yn(b, {
                    onSwipeStart: () => {
                        clearInterval(w.value), f()
                    },
                    onSwipe: f,
                    onSwipeEnd: () => {
                        f();
                        let k = 0;
                        w.value = setInterval(() => {
                            k++, k > 10 && clearInterval(w.value), f()
                        }, 100)
                    }
                });

            function f() {
                const k = document.getElementById(`gamesList-${g.value}`);
                if (k) {
                    const {
                        top: $,
                        bottom: T
                    } = k.getBoundingClientRect();
                    T - qn - En < 0 ? y.value === "UP" && (g.value = g.value + 1) : $ - qn - En > 0 && y.value === "DOWN" && (g.value = g.value - 1)
                }
            }
            const h = J(() => s.value[g.value]);
            zt(() => {
                N()
            }), ke(() => {
                N()
            });
            const N = async () => {
                !i.gameTypeList.length && await o(), !i.allGameList && await r(), s.value = [], i.gameTypeList.forEach($ => {
                    $.categoryCode === "BigAward" || $.state !== 1 || s.value.push({
                        isShow: $.state === 1,
                        title: p("code" + $.typeNameCode),
                        img: $.categoryImg,
                        key: $.categoryCode.toLocaleLowerCase()
                    })
                }), _.value = i.allGameList;
                const k = u.currentRoute.value.query.type || "";
                g.value = s.value.findIndex($ => $.key + "" === k) || 0
            };

            function L() {}
            return (k, $) => {
                const T = W("NavBar"),
                    R = W("van-sticky"),
                    z = Jt("lazy");
                return n(), a("div", Pl, [x(T, {
                    title: k.$t("all"),
                    "left-arrow": "",
                    onClickLeft: m
                }, null, 8, ["title"]), x(R, {
                    class: "alGames__container-sticky"
                }, {
                    default: A(() => [x(ui, {
                        list: s.value,
                        active: g.value,
                        "onUpdate:active": $[0] || ($[0] = I => g.value = I),
                        tabClassName: "tabs",
                        onOnClickTab: L,
                        activeClassName: "tab_active",
                        ref_key: "tabRefs",
                        ref: d,
                        tabItemClassName: "funtab_item"
                    }, {
                        default: A(({
                            item: I,
                            index: S
                        }) => [I.isShow ? (n(), a("div", {
                            key: 0,
                            class: M(["tab_item", {
                                tab_active: S === g.value
                            }])
                        }, [ft(t("img", null, null, 512), [
                            [z, I.img]
                        ]), t("span", null, e(I.title), 1)], 2)) : C("v-if", !0)]),
                        _: 1
                    }, 8, ["list", "active"])]),
                    _: 1
                }), t("div", {
                    class: "allGames__container-list",
                    ref_key: "allGamesContainer",
                    ref: b
                }, [s.value.length > 0 ? (n(), it(Nl, {
                    key: 0,
                    gameType: h.value.key,
                    title: h.value.title,
                    gameData: _.value[h.value.key]
                }, null, 8, ["gameType", "title", "gameData"])) : C("v-if", !0)], 512)])
            }
        }
    });
const Ol = K(Dl, [
        ["__scopeId", "data-v-0a9bf0c5"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllGames/index.vue"]
    ]),
    Jx = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ol
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ql = {
        class: "lotteryGamesList__container"
    },
    El = {
        alt: ""
    },
    jl = {
        class: "lotteryGamesList__container-item__time"
    },
    Hl = U({
        __name: "index",
        props: {
            gamesList: {
                type: Object,
                default: () => {}
            }
        },
        setup(l) {
            const i = ht();

            function o() {
                i.push({
                    name: "AllLotteryGames-VietnamLottery"
                })
            }
            return (r, g) => {
                const b = Jt("lazy");
                return n(), a("div", ql, [t("div", {
                    class: "lotteryGamesList__container-item",
                    onClick: o
                }, [ft(t("img", El, null, 512), [
                    [b, c(qt)("home/AllLotteryGames", "cover")]
                ]), t("span", jl, e(l.gamesList.title), 1)])])
            }
        }
    });
const Wl = K(Hl, [
        ["__scopeId", "data-v-22e2ba37"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/index.vue"]
    ]),
    Vl = {
        class: "lotteryGames__container"
    },
    Fi = 46 + 90 + 35 + 16,
    jn = 16 + 28,
    Fl = U({
        __name: "index",
        setup(l) {
            const {
                t: i
            } = kt(), o = ht(), r = v(0), g = v(0), b = v(null), d = [{
                title: i("all"),
                value: "all"
            }, {
                title: "Win Go",
                value: "winGo"
            }, {
                title: i("Lotre4d"),
                value: "4DLottery"
            }, {
                title: "Lottery",
                value: "lottery"
            }, {
                title: "Xổ số",
                value: "lotteryVi"
            }, {
                title: "Xổ số",
                value: "lotteryVi"
            }], u = [{
                title: i("all"),
                value: "all"
            }, {
                title: i("minites1"),
                value: "60"
            }, {
                title: i("minites3"),
                value: "180"
            }, {
                title: i("minites5"),
                value: "300"
            }, {
                title: i("minites10"),
                value: "600"
            }, {
                title: i("minitesLong"),
                value: "long"
            }];

            function p() {
                o.go(-1)
            }

            function s(f) {
                return f === r.value ? r.value : -1
            }
            const {
                direction: _
            } = Yn(b, {
                onSwipeStart: () => {
                    m()
                },
                onSwipe: m,
                onSwipeEnd: () => {
                    m()
                }
            });

            function m() {
                const f = document.getElementById(`gamesList-${r.value}`);
                if (f) {
                    const {
                        top: h,
                        bottom: N
                    } = f.getBoundingClientRect();
                    N - Fi - jn < 0 ? _.value === "UP" && (r.value = r.value + 1) : h - Fi - jn > 0 && _.value === "DOWN" && (r.value = r.value - 1)
                }
            }

            function w() {
                y()
            }

            function y() {
                const f = document.getElementById(`gamesList-${r.value}`);
                f && b.value.scrollTo({
                    top: f.offsetTop - Fi,
                    behavior: "smooth"
                })
            }
            return (f, h) => {
                const N = W("NavBar"),
                    L = W("van-tab"),
                    k = W("van-tabs");
                return n(), a("div", Vl, [x(N, {
                    "left-arrow": "",
                    title: f.$t("lottery"),
                    onClickLeft: p
                }, null, 8, ["title"]), x(k, {
                    class: "lotteryGames__container-tabBar mgt10",
                    active: r.value,
                    "onUpdate:active": h[0] || (h[0] = $ => r.value = $),
                    onClickTab: w,
                    type: "card",
                    color: "transparent",
                    background: "transparent"
                }, {
                    default: A(() => [(n(), a(B, null, G(d, ($, T) => x(L, {
                        name: T,
                        key: T,
                        title: $.title
                    }, null, 8, ["name", "title"])), 64))]),
                    _: 1
                }, 8, ["active"]), x(k, {
                    class: "lotteryGames__container-timeTab",
                    active: g.value,
                    "onUpdate:active": h[1] || (h[1] = $ => g.value = $),
                    color: "#ff7172",
                    background: "#fff"
                }, {
                    default: A(() => [(n(), a(B, null, G(u, ($, T) => x(L, {
                        name: T,
                        key: T,
                        title: $.title
                    }, null, 8, ["name", "title"])), 64))]),
                    _: 1
                }, 8, ["active"]), t("div", {
                    class: "lotteryGames__container-list",
                    ref_key: "allGamesContainer",
                    ref: b
                }, [(n(), a(B, null, G(u, ($, T) => x(Wl, {
                    "games-list": $,
                    active: s(T),
                    key: T,
                    id: `gamesList-${T}`
                }, null, 8, ["games-list", "active", "id"])), 64))], 512)])
            }
        }
    });
const Ul = K(Fl, [
        ["__scopeId", "data-v-147ae92c"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/index.vue"]
    ]),
    tI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ul
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Kl = {
        class: "onlineGames__container"
    },
    Xl = ["placeholder"],
    Ql = ["src"],
    Yl = {
        class: "onlineGames__container-list"
    },
    Zl = ["onClick"],
    Jl = {
        key: 1
    },
    tc = {
        class: "onlineGames__container-list miniGames"
    },
    ec = ["onClick"],
    ic = U({
        __name: "index",
        setup(l) {
            const {
                onItemClick: i
            } = Fe(), o = v(), r = v(0), g = v([]), b = v(0);
            Dt(r, $ => {
                const T = m.value[$];
                w.value = [], b.value = 0, k(T.slotsTypeID)
            });
            const d = v(!1);
            Dt(d, $ => {
                $ ? setTimeout(() => {
                    s.value.focus()
                }, 0) : p.value = ""
            });
            const u = $ => $.indexOf("_") === -1 ? $ : $.split("_")[0].toUpperCase(),
                p = v("");
            _o(p, $ => {
                if (_.value)
                    if (_.value.key === "fish" || _.value.key === "flash") m.value = m.value.filter(T => T.gameNameEn.toLowerCase().includes($)), $.length === 0 && (m.value = sessionStorage.getItem("slotGamesList") ? JSON.parse(sessionStorage.getItem("slotGamesList")) : null);
                    else {
                        const T = m.value[r.value];
                        k(T.slotsTypeID, $)
                    }
            }, {
                debounce: 300
            });
            const s = v(null),
                _ = v(),
                m = v([]),
                w = v([]),
                y = ht(),
                f = ko(w, $ => d.value ? $.gameNameEn.toLowerCase().includes(p.value.toLowerCase()) : $.customGameType === b.value);

            function h($) {
                return $ ? $.split(/(?=[A-Z])/).join(" ") : ""
            }

            function N() {
                y.go(-1)
            }

            function L($) {
                d.value = $
            }
            async function k($, T = "") {
                const R = await lt(So({
                    type: $,
                    gameNameEn: T
                }));
                if (R) {
                    if (w.value = R.data.gameLists || [], g.value = R.data.gameCustomTypeLists || [], !g.value.length) return;
                    b.value = g.value[0].customGameType
                }
            }
            return zt(() => {
                _.value = sessionStorage.getItem("gameType") ? JSON.parse(sessionStorage.getItem("gameType")) : null, m.value = sessionStorage.getItem("slotGamesList") ? JSON.parse(sessionStorage.getItem("slotGamesList")) : null;
                const $ = JSON.parse(sessionStorage.getItem("clickedItem"));
                $ && (r.value = m.value.findIndex(R => R.slotsTypeID === $.slotsTypeID)), o.value && o.value.scrollTo(r.value);
                const T = m.value[r.value];
                k(T.slotsTypeID)
            }), ($, T) => {
                var P, V;
                const R = W("van-icon"),
                    z = W("NavBar"),
                    I = W("van-tab"),
                    S = W("van-tabs"),
                    D = Jt("lazy");
                return n(), a("div", Kl, [x(z, {
                    class: "white",
                    "left-arrow": "",
                    onClickLeft: N
                }, {
                    center: A(() => {
                        var F;
                        return [t("span", {
                            class: M({
                                active: d.value
                            })
                        }, e((F = _.value) == null ? void 0 : F.title) + e($.$t("game")), 3), ft(t("input", {
                            type: "text",
                            placeholder: $.$t("searchGame"),
                            class: M({
                                active: d.value
                            }),
                            "onUpdate:modelValue": T[0] || (T[0] = nt => p.value = nt),
                            ref_key: "searchBarRef",
                            ref: s
                        }, null, 10, Xl), [
                            [Zi, p.value]
                        ])]
                    }),
                    right: A(() => [x(R, {
                        name: c(qt)("public", "searchIcon"),
                        onClick: T[1] || (T[1] = F => L(!0)),
                        class: M({
                            active: d.value
                        })
                    }, null, 8, ["name", "class"]), t("span", {
                        class: M({
                            active: d.value
                        }),
                        onClick: T[2] || (T[2] = F => L(!1))
                    }, e($.$t("cancel")), 3)]),
                    _: 1
                }), ((P = _.value) == null ? void 0 : P.key) !== "fish" && ((V = _.value) == null ? void 0 : V.key) !== "flash" ? (n(), it(S, {
                    key: 0,
                    class: "onlineGames__container-tabBar",
                    active: r.value,
                    "onUpdate:active": T[4] || (T[4] = F => r.value = F),
                    type: "card",
                    ref_key: "tabsRef",
                    ref: o
                }, {
                    default: A(() => [(n(!0), a(B, null, G(m.value, (F, nt) => (n(), it(I, {
                        key: nt
                    }, {
                        title: A(() => [t("img", {
                            src: c(Vt)("home/AllOnlineGames/svg", `${nt===r.value?u(F.slotsName)+"Active":u(F.slotsName)}`)
                        }, null, 8, Ql), t("span", null, e(F.slotsName), 1)]),
                        _: 2
                    }, 1024))), 128)), !d.value || g.value.length === 0 ? (n(), it(c(wa), {
                        key: 0,
                        modelValue: b.value,
                        "onUpdate:modelValue": T[3] || (T[3] = F => b.value = F),
                        lineWidth: 0
                    }, {
                        default: A(() => [(n(!0), a(B, null, G(g.value, (F, nt) => (n(), it(c($a), {
                            name: nt,
                            key: nt,
                            class: M([{
                                activeClassName: b.value === F.customGameType
                            }]),
                            onClick: ut => b.value = F.customGameType
                        }, {
                            default: A(() => [t("span", null, e(F.customGameTypeName), 1)]),
                            _: 2
                        }, 1032, ["name", "class", "onClick"]))), 128))]),
                        _: 1
                    }, 8, ["modelValue"])) : C("v-if", !0), t("div", Yl, [(n(!0), a(B, null, G(c(f), (F, nt) => (n(), a("div", {
                        class: "onlineGames__container-list__item",
                        key: nt,
                        onClick: ut => c(i)(F)
                    }, [ft(t("img", null, null, 512), [
                        [D, F.img]
                    ]), t("span", null, e(h(F.gameNameEn)), 1)], 8, Zl))), 128))])]),
                    _: 1
                }, 8, ["active"])) : (n(), a("div", Jl, [t("div", tc, [C(' <GamesList v-for="(item, index) in onlineGameData" :games-list="item" :key="index" /> '), (n(!0), a(B, null, G(m.value, (F, nt) => (n(), a("div", {
                    class: "onlineGames__container-list__item",
                    key: nt,
                    onClick: ut => c(i)(F)
                }, [E(e(F) + " ", 1), ft(t("img", null, null, 512), [
                    [D, F.img]
                ]), t("span", null, e(F.gameNameEn), 1)], 8, ec))), 128))])]))])
            }
        }
    });
const nc = K(ic, [
        ["__scopeId", "data-v-0ffc3892"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllOnlineGames/index.vue"]
    ]),
    eI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: nc
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ac = {
        class: "sysMessage__container"
    },
    oc = {
        class: "sysMessage__container-msgWrapper__item-title"
    },
    sc = ["src"],
    lc = ["src", "onClick"],
    cc = {
        class: "sysMessage__container-msgWrapper__item-time"
    },
    rc = {
        class: "sysMessage__container-msgWrapper__item-content"
    },
    uc = U({
        __name: "index",
        setup(l) {
            const {
                t: i
            } = kt(), {
                setLoading: o
            } = Ci(), r = v(), g = Me(), b = ht(), d = v(!1), u = v([]), p = Pn(), s = v({
                pageSize: 25
            });

            function _() {
                b.back()
            }
            async function m() {
                const f = Pn();
                await Bo({
                    state: 1
                }).then(h => {
                    h && f.setReadState(!0)
                }).catch(h => {})
            }

            function w(f) {
                Zn({
                    title: i("warning"),
                    message: i("warningTxt1")
                }).then(async () => {
                    if (await lt(Ji({
                            messageID: f.messageID,
                            state: 2
                        }))) {
                        let N = u.value;
                        u.value = N.filter(L => L.messageID !== f.messageID)
                    }
                })
            }
            const y = g.getUserInfo;
            return zt(async () => {
                o(!0), await m(), o(!1), r.value.resetRefresh(), y.unRead = 0, g.setUserInfo({ ...y
                }), p.setReadState(!0)
            }), (f, h) => {
                const N = W("NavBar");
                return n(), a("div", ac, [x(N, {
                    title: c(i)("notifications"),
                    backgroundColor: "#f7f8ff",
                    "left-arrow": "",
                    onClickLeft: _
                }, null, 8, ["title"]), x(ea, {
                    ref_key: "msgWrapperRef",
                    ref: r,
                    list: u.value,
                    "onUpdate:list": h[0] || (h[0] = L => u.value = L),
                    "page-query": s.value,
                    "onUpdate:pageQuery": h[1] || (h[1] = L => s.value = L),
                    api: c(Go),
                    distance: 100,
                    isAutoLoad: d.value
                }, {
                    content: A(() => [(n(!0), a(B, null, G(u.value, L => (n(), a("div", {
                        class: "sysMessage__container-msgWrapper__item",
                        key: L.messageID
                    }, [t("div", oc, [C(' <component :is="item.state === 0 ? icons.messageIconRed : icons.messageIconIsRead" /> '), t("img", {
                        class: "svg",
                        src: c(qt)("main", L.state === 0 ? "messageIconRed" : "messageIconIsRead", "svg"),
                        alt: ""
                    }, null, 8, sc), t("span", null, e(c(Mo)(L.title, 20)), 1), t("img", {
                        class: "svg",
                        src: c(qt)("main", "messageGarbage", "svg"),
                        alt: "",
                        onClick: k => w(L)
                    }, null, 8, lc), C(` <component
							:is="icons.messageGarbage"
							@click="($event: Event) => { $event.stopPropagation(); onDeleteClick(item) }"
						/> `)]), t("div", cc, e(L.addTime), 1), t("div", rc, e(L.messages), 1)]))), 128))]),
                    _: 1
                }, 8, ["list", "page-query", "api", "isAutoLoad"])])
            }
        }
    });
const dc = K(uc, [
        ["__scopeId", "data-v-8084bf25"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/Messages/index.vue"]
    ]),
    iI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: dc
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    pc = "/assets/png/close-32ada670.png",
    gc = l => (Rt("data-v-bc67dde2"), l = l(), St(), l),
    bc = {
        class: "game-iframe"
    },
    mc = ["src"],
    vc = gc(() => t("img", {
        src: pc,
        alt: ""
    }, null, -1)),
    _c = [vc],
    kc = U({
        __name: "index",
        setup(l) {
            const i = nn(),
                o = v(null),
                r = v(!1),
                {
                    x: g,
                    y: b,
                    style: d
                } = ho(o, {
                    initialValue: {
                        x: 30,
                        y: 30
                    },
                    preventDefault: !0,
                    onMove: () => {
                        r.value = !0
                    },
                    onEnd: () => {
                        setTimeout(() => r.value = !1)
                    }
                }),
                u = J(() => {
                    const _ = i.query.url;
                    if (!_) return "";
                    const m = Ao(_ || "");
                    return m.startsWith("https:") ? m : `data:text/html;charset=utf-8,${encodeURIComponent(m)}`
                }),
                p = ht(),
                s = () => {
                    r.value || p.push({
                        name: "home"
                    })
                };
            return (_, m) => (n(), a("div", bc, [u.value ? (n(), a("iframe", {
                key: 0,
                src: u.value
            }, null, 8, mc)) : C("v-if", !0), t("div", {
                class: "close",
                ref_key: "el",
                ref: o,
                style: ue(c(d)),
                onClick: s
            }, _c, 4)]))
        }
    });
const hc = K(kc, [
        ["__scopeId", "data-v-bc67dde2"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/game/index.vue"]
    ]),
    nI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: hc
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    fc = [{
        typeID: 13,
        typeName: "Trx Win Go<br />1Min",
        tabName: "Trx 1Min",
        intervalM: 1,
        scope: "1000|10000|100000|1000000",
        sort: 1,
        gamePresentation: '<p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm là gì?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Bất kỳ ai biết những điều cơ bản về Bitcoin sẽ được tiếp xúc với một khái niệm, một giá trị băm. Tiêu đề khối của Bitcoin có một hàm băm của khối trước đó dùng để chỉ đến khối trước đó.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Hash là phiên âm của Hash trong tiếng Anh, chúng ta cũng có thể dịch nó thành băm, vì vậy còn được gọi là giá trị băm. Giá trị băm là một giá trị được tính bằng hàm băm (hoặc hàm băm / thuật toán băm). Để hiểu các giá trị băm, Cần phải hiểu các thuộc tính của hàm băm. Một hàm băm có thể biến đổi một cách tính toán đầu vào có độ dài tùy ý thành đầu ra có độ dài cố định.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Mỗi hàm băm có các thuộc tính sau: Nếu giá trị nhập vào giống nhau, Giá trị băm chuyển ra giống nhau,Nếu giá trị nhập vào khác,thì giá trị băm chuyển ra thường khác. Nhưng khả năng xảy ra xung đột băm là cực kỳ nhỏ. Nếu trong lúc nhập vào có sự thay đổi xung đột băm sẽ được giải trừ , sau đó xuất ra một giá trị băm hoàn toàn không liên quan. Vì hàm băm là không thể thay đổi và dễ dàng xác minh, Hầu như không thể đảo ngược giá trị nhập vào từ giá trị từ giá trị băm chuyển ra , Nếu có giá trị nhập vào, giá trị băm tương ứng có thể được xác minh ngay lập tức.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Do đó, giá trị băm của mỗi khối là duy nhất, ngẫu nhiên, không thể phá vỡ, không thể làm giả, giá trị băm của khối được tự động xác định và bản ghi không thể bị giả mạo.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Có bao nhiêu loại USDT?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Omni-USDT dựa trên mạng Bitcoin, địa chỉ nạp tiền là địa chỉ BTC, gửi và rút tiền thông qua mạng BTC;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">ERC20-USDT dựa trên giao thức Ethereum ERC20, địa chỉ nạp tiền là địa chỉ ETH, gửi và rút tiền thông qua mạng ETH;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON), địa chỉ gửi tiền là địa chỉ TRON, và việc gửi và rút tiền đi qua mạng TRON.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TrxHash là một mã băm khối của TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON). Số cuối cùng được sử dụng làm kết quả để xác định xem bạn có trúng thưởng hay không (nhấp vào Chiều cao khối để chuyển đến chuỗi công khai để truy vấn hàm băm Khối duy nhất-Block hash)</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 8pt;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Luật chơi như sau :</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">1 phút mở thưởng 1 lần, 55 giây đặt cươc, Không thể cược trong vòng 5 giây cuối cùng .</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Sau khi đóng , băm khối của khối được tạo mới được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">mở thưởng.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Tổng số lượt mở thưởng trong một ngày là 1440 lượt.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><br></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">4. Nếu bạn thực hiện một giao dịch cược là 100, sẽ có khoản khấu trừ phí là 2%, do đó khoản đặt cược thực tế của bạn sẽ là 98.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">5 . 3 phút , 5 phút , 10 phút luật chơi giống 1 phút, chỉ có thời gian mở thưởng không giống nhau.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">6.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Chữ số cuối cùng của</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">giá trị băm (</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Ví dụ:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**b569</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 9.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**d14c</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 4.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">. Ch</font><font face="微软雅黑">ọ</font><font face="等线">n màu xanh: N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">1,3,7,9 b</font><font face="微软雅黑">ạ</font><font face="等线">n s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c(98*2)=196; N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">5, b</font><font face="微软雅黑">ạ</font><font face="等线">n</font></span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c (98*1.5)=147.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu đỏ: Nếu kết quả hiện thị 2,4,6,8, bạn sẽ nhận được (98*2)=196; Nếu kết quả hiện thị 0, bạn sẽ nhận được (98*1.5)=147.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu tím: Nếu kết quả hiện thị 0 hoặc 5, thì bạn sẽ nhận được (98*4.5)=441.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn số : Nếu kết quả mở giống như kết quả bạn đã chọn, bạn sẽ nhận được (98*9)=882</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn lớn&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Big</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 5,6,7,8,9 bạn sẽ nhận được (98*2)=196.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 0pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn nhỏ&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Small</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 0,1,2,3,4 bạn sẽ nhận được (98*2)=196.</font></span></p>'
    }, {
        typeID: 14,
        typeName: "Trx Win Go<br />3Min",
        tabName: "Trx 3Min",
        intervalM: 3,
        scope: "1000|10000|100000|1000000",
        sort: 2,
        gamePresentation: '<p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm là gì?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Bất kỳ ai biết những điều cơ bản về Bitcoin sẽ được tiếp xúc với một khái niệm, một giá trị băm. Tiêu đề khối của Bitcoin có một hàm băm của khối trước đó dùng để chỉ đến khối trước đó.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Hash là phiên âm của Hash trong tiếng Anh, chúng ta cũng có thể dịch nó thành băm, vì vậy còn được gọi là giá trị băm. Giá trị băm là một giá trị được tính bằng hàm băm (hoặc hàm băm / thuật toán băm). Để hiểu các giá trị băm, Cần phải hiểu các thuộc tính của hàm băm. Một hàm băm có thể biến đổi một cách tính toán đầu vào có độ dài tùy ý thành đầu ra có độ dài cố định.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Mỗi hàm băm có các thuộc tính sau: Nếu giá trị nhập vào giống nhau, Giá trị băm chuyển ra giống nhau,Nếu giá trị nhập vào khác,thì giá trị băm chuyển ra thường khác. Nhưng khả năng xảy ra xung đột băm là cực kỳ nhỏ. Nếu trong lúc nhập vào có sự thay đổi xung đột băm sẽ được giải trừ , sau đó xuất ra một giá trị băm hoàn toàn không liên quan. Vì hàm băm là không thể thay đổi và dễ dàng xác minh, Hầu như không thể đảo ngược giá trị nhập vào từ giá trị từ giá trị băm chuyển ra , Nếu có giá trị nhập vào, giá trị băm tương ứng có thể được xác minh ngay lập tức.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Do đó, giá trị băm của mỗi khối là duy nhất, ngẫu nhiên, không thể phá vỡ, không thể làm giả, giá trị băm của khối được tự động xác định và bản ghi không thể bị giả mạo.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Có bao nhiêu loại USDT?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Omni-USDT dựa trên mạng Bitcoin, địa chỉ nạp tiền là địa chỉ BTC, gửi và rút tiền thông qua mạng BTC;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">ERC20-USDT dựa trên giao thức Ethereum ERC20, địa chỉ nạp tiền là địa chỉ ETH, gửi và rút tiền thông qua mạng ETH;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON), địa chỉ gửi tiền là địa chỉ TRON, và việc gửi và rút tiền đi qua mạng TRON.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TrxHash là một mã băm khối của TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON). Số cuối cùng được sử dụng làm kết quả để xác định xem bạn có trúng thưởng hay không (nhấp vào Chiều cao khối để chuyển đến chuỗi công khai để truy vấn hàm băm Khối duy nhất-Block hash)</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 8pt;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Luật chơi như sau :</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">1 phút mở thưởng 1 lần, 55 giây đặt cươc, Không thể cược trong vòng 5 giây cuối cùng .</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Sau khi đóng , băm khối của khối được tạo mới được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">mở thưởng.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Tổng số lượt mở thưởng trong một ngày là 1440 lượt.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><br></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">4. Nếu bạn thực hiện một giao dịch cược là 100, sẽ có khoản khấu trừ phí là 2%, do đó khoản đặt cược thực tế của bạn sẽ là 98.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">5 . 3 phút , 5 phút , 10 phút luật chơi giống 1 phút, chỉ có thời gian mở thưởng không giống nhau.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">6.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Chữ số cuối cùng của</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">giá trị băm (</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Ví dụ:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**b569</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 9.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**d14c</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 4.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">. Ch</font><font face="微软雅黑">ọ</font><font face="等线">n màu xanh: N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">1,3,7,9 b</font><font face="微软雅黑">ạ</font><font face="等线">n s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c(98*2)=196; N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">5, b</font><font face="微软雅黑">ạ</font><font face="等线">n</font></span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c (98*1.5)=147.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu đỏ: Nếu kết quả hiện thị 2,4,6,8, bạn sẽ nhận được (98*2)=196; Nếu kết quả hiện thị 0, bạn sẽ nhận được (98*1.5)=147.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu tím: Nếu kết quả hiện thị 0 hoặc 5, thì bạn sẽ nhận được (98*4.5)=441.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn số : Nếu kết quả mở giống như kết quả bạn đã chọn, bạn sẽ nhận được (98*9)=882</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn lớn&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Big</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 5,6,7,8,9 bạn sẽ nhận được (98*2)=196.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 0pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn nhỏ&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Small</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 0,1,2,3,4 bạn sẽ nhận được (98*2)=196.</font></span></p>'
    }, {
        typeID: 15,
        typeName: "Trx Win Go<br />5Min",
        tabName: "Trx 5Min",
        intervalM: 5,
        scope: "1000|10000|100000|1000000",
        sort: 3,
        gamePresentation: '<p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm là gì?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Bất kỳ ai biết những điều cơ bản về Bitcoin sẽ được tiếp xúc với một khái niệm, một giá trị băm. Tiêu đề khối của Bitcoin có một hàm băm của khối trước đó dùng để chỉ đến khối trước đó.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Hash là phiên âm của Hash trong tiếng Anh, chúng ta cũng có thể dịch nó thành băm, vì vậy còn được gọi là giá trị băm. Giá trị băm là một giá trị được tính bằng hàm băm (hoặc hàm băm / thuật toán băm). Để hiểu các giá trị băm, Cần phải hiểu các thuộc tính của hàm băm. Một hàm băm có thể biến đổi một cách tính toán đầu vào có độ dài tùy ý thành đầu ra có độ dài cố định.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Mỗi hàm băm có các thuộc tính sau: Nếu giá trị nhập vào giống nhau, Giá trị băm chuyển ra giống nhau,Nếu giá trị nhập vào khác,thì giá trị băm chuyển ra thường khác. Nhưng khả năng xảy ra xung đột băm là cực kỳ nhỏ. Nếu trong lúc nhập vào có sự thay đổi xung đột băm sẽ được giải trừ , sau đó xuất ra một giá trị băm hoàn toàn không liên quan. Vì hàm băm là không thể thay đổi và dễ dàng xác minh, Hầu như không thể đảo ngược giá trị nhập vào từ giá trị từ giá trị băm chuyển ra , Nếu có giá trị nhập vào, giá trị băm tương ứng có thể được xác minh ngay lập tức.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Do đó, giá trị băm của mỗi khối là duy nhất, ngẫu nhiên, không thể phá vỡ, không thể làm giả, giá trị băm của khối được tự động xác định và bản ghi không thể bị giả mạo.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Có bao nhiêu loại USDT?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Omni-USDT dựa trên mạng Bitcoin, địa chỉ nạp tiền là địa chỉ BTC, gửi và rút tiền thông qua mạng BTC;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">ERC20-USDT dựa trên giao thức Ethereum ERC20, địa chỉ nạp tiền là địa chỉ ETH, gửi và rút tiền thông qua mạng ETH;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON), địa chỉ gửi tiền là địa chỉ TRON, và việc gửi và rút tiền đi qua mạng TRON.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TrxHash là một mã băm khối của TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON). Số cuối cùng được sử dụng làm kết quả để xác định xem bạn có trúng thưởng hay không (nhấp vào Chiều cao khối để chuyển đến chuỗi công khai để truy vấn hàm băm Khối duy nhất-Block hash)</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 8pt;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Luật chơi như sau :</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">1 phút mở thưởng 1 lần, 55 giây đặt cươc, Không thể cược trong vòng 5 giây cuối cùng .</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Sau khi đóng , băm khối của khối được tạo mới được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">mở thưởng.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Tổng số lượt mở thưởng trong một ngày là 1440 lượt.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><br></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">4. Nếu bạn thực hiện một giao dịch cược là 100, sẽ có khoản khấu trừ phí là 2%, do đó khoản đặt cược thực tế của bạn sẽ là 98.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">5 . 3 phút , 5 phút , 10 phút luật chơi giống 1 phút, chỉ có thời gian mở thưởng không giống nhau.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">6.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Chữ số cuối cùng của</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">giá trị băm (</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Ví dụ:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**b569</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 9.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**d14c</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 4.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">. Ch</font><font face="微软雅黑">ọ</font><font face="等线">n màu xanh: N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">1,3,7,9 b</font><font face="微软雅黑">ạ</font><font face="等线">n s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c(98*2)=196; N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">5, b</font><font face="微软雅黑">ạ</font><font face="等线">n</font></span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c (98*1.5)=147.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu đỏ: Nếu kết quả hiện thị 2,4,6,8, bạn sẽ nhận được (98*2)=196; Nếu kết quả hiện thị 0, bạn sẽ nhận được (98*1.5)=147.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu tím: Nếu kết quả hiện thị 0 hoặc 5, thì bạn sẽ nhận được (98*4.5)=441.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn số : Nếu kết quả mở giống như kết quả bạn đã chọn, bạn sẽ nhận được (98*9)=882</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn lớn&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Big</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 5,6,7,8,9 bạn sẽ nhận được (98*2)=196.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 0pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn nhỏ&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Small</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 0,1,2,3,4 bạn sẽ nhận được (98*2)=196.</font></span></p>'
    }, {
        typeID: 16,
        typeName: "Trx Win Go<br />10Min",
        tabName: "Trx 10Min",
        intervalM: 10,
        scope: "1000|10000|100000|1000000",
        sort: 4,
        gamePresentation: '<p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm là gì?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Bất kỳ ai biết những điều cơ bản về Bitcoin sẽ được tiếp xúc với một khái niệm, một giá trị băm. Tiêu đề khối của Bitcoin có một hàm băm của khối trước đó dùng để chỉ đến khối trước đó.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Hash là phiên âm của Hash trong tiếng Anh, chúng ta cũng có thể dịch nó thành băm, vì vậy còn được gọi là giá trị băm. Giá trị băm là một giá trị được tính bằng hàm băm (hoặc hàm băm / thuật toán băm). Để hiểu các giá trị băm, Cần phải hiểu các thuộc tính của hàm băm. Một hàm băm có thể biến đổi một cách tính toán đầu vào có độ dài tùy ý thành đầu ra có độ dài cố định.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Mỗi hàm băm có các thuộc tính sau: Nếu giá trị nhập vào giống nhau, Giá trị băm chuyển ra giống nhau,Nếu giá trị nhập vào khác,thì giá trị băm chuyển ra thường khác. Nhưng khả năng xảy ra xung đột băm là cực kỳ nhỏ. Nếu trong lúc nhập vào có sự thay đổi xung đột băm sẽ được giải trừ , sau đó xuất ra một giá trị băm hoàn toàn không liên quan. Vì hàm băm là không thể thay đổi và dễ dàng xác minh, Hầu như không thể đảo ngược giá trị nhập vào từ giá trị từ giá trị băm chuyển ra , Nếu có giá trị nhập vào, giá trị băm tương ứng có thể được xác minh ngay lập tức.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Do đó, giá trị băm của mỗi khối là duy nhất, ngẫu nhiên, không thể phá vỡ, không thể làm giả, giá trị băm của khối được tự động xác định và bản ghi không thể bị giả mạo.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Có bao nhiêu loại USDT?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Omni-USDT dựa trên mạng Bitcoin, địa chỉ nạp tiền là địa chỉ BTC, gửi và rút tiền thông qua mạng BTC;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">ERC20-USDT dựa trên giao thức Ethereum ERC20, địa chỉ nạp tiền là địa chỉ ETH, gửi và rút tiền thông qua mạng ETH;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON), địa chỉ gửi tiền là địa chỉ TRON, và việc gửi và rút tiền đi qua mạng TRON.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TrxHash là một mã băm khối của TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON). Số cuối cùng được sử dụng làm kết quả để xác định xem bạn có trúng thưởng hay không (nhấp vào Chiều cao khối để chuyển đến chuỗi công khai để truy vấn hàm băm Khối duy nhất-Block hash)</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 8pt;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Luật chơi như sau :</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">1 phút mở thưởng 1 lần, 55 giây đặt cươc, Không thể cược trong vòng 5 giây cuối cùng .</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Sau khi đóng , băm khối của khối được tạo mới được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">mở thưởng.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Tổng số lượt mở thưởng trong một ngày là 1440 lượt.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><br></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">4. Nếu bạn thực hiện một giao dịch cược là 100, sẽ có khoản khấu trừ phí là 2%, do đó khoản đặt cược thực tế của bạn sẽ là 98.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">5 . 3 phút , 5 phút , 10 phút luật chơi giống 1 phút, chỉ có thời gian mở thưởng không giống nhau.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">6.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Chữ số cuối cùng của</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">giá trị băm (</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Ví dụ:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**b569</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 9.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**d14c</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 4.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">. Ch</font><font face="微软雅黑">ọ</font><font face="等线">n màu xanh: N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">1,3,7,9 b</font><font face="微软雅黑">ạ</font><font face="等线">n s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c(98*2)=196; N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">5, b</font><font face="微软雅黑">ạ</font><font face="等线">n</font></span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c (98*1.5)=147.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu đỏ: Nếu kết quả hiện thị 2,4,6,8, bạn sẽ nhận được (98*2)=196; Nếu kết quả hiện thị 0, bạn sẽ nhận được (98*1.5)=147.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu tím: Nếu kết quả hiện thị 0 hoặc 5, thì bạn sẽ nhận được (98*4.5)=441.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn số : Nếu kết quả mở giống như kết quả bạn đã chọn, bạn sẽ nhận được (98*9)=882</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn lớn&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Big</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 5,6,7,8,9 bạn sẽ nhận được (98*2)=196.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 0pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn nhỏ&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Small</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 0,1,2,3,4 bạn sẽ nhận được (98*2)=196.</font></span></p>'
    }],
    yc = [{
        typeID: 5,
        typeName: "5D Lotre<br />1Min",
        tabName: "5D 1Min",
        intervalM: 1,
        scope: "1000|10000|100000|1000000",
        sort: 4,
        gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">LUẬT CHƠI XỔ SỐ 5D</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">*Quy định cá cược xổ số</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 2 )&nbsp;</font><span style="font-family: &quot;Times New Roman&quot;;">Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">HƯỚNG DẪN GIẢI THƯỞNG</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Mỗi kỳ sẽ mở ngẫu nhiên 5 con số （00000-99999）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Ví dụ :</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Kỳ xổ hiện tại là 12345</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A=1</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">B=2</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">C=3</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">D=4</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">E=5</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng =A+B+C+D+E=15</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Cách chơi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Người chơi có thể chỉ định đặt cược A,B,C,D,E và tổng hợp của năm kết quả</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A,B,C,D,E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Con số（0 1 2 3 4 5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0 1 2 3 4）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 5 7 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 4 6 8）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng hợp =A+B+C+D+E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0-22）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （23-45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 ···43 45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 ···42 44）</font></p>'
    }, {
        typeID: 6,
        typeName: "5D Lotre<br />3Min",
        tabName: "5D 3Min",
        intervalM: 3,
        scope: "1000|10000|100000|1000000",
        sort: 3,
        gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">LUẬT CHƠI XỔ SỐ 5D</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">*Quy định cá cược xổ số</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 2 )&nbsp;</font><span style="font-family: &quot;Times New Roman&quot;;">Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">HƯỚNG DẪN GIẢI THƯỞNG</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Mỗi kỳ sẽ mở ngẫu nhiên 5 con số （00000-99999）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Ví dụ :</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Kỳ xổ hiện tại là 12345</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A=1</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">B=2</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">C=3</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">D=4</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">E=5</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng =A+B+C+D+E=15</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Cách chơi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Người chơi có thể chỉ định đặt cược A,B,C,D,E và tổng hợp của năm kết quả</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A,B,C,D,E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Con số（0 1 2 3 4 5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0 1 2 3 4）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 5 7 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 4 6 8）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng hợp =A+B+C+D+E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0-22）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （23-45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 ···43 45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 ···42 44）</font></p>'
    }, {
        typeID: 7,
        typeName: "5D Lotre<br />5Min",
        tabName: "5D 5Min",
        intervalM: 5,
        scope: "1000|10000|100000|1000000",
        sort: 2,
        gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">LUẬT CHƠI XỔ SỐ 5D</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">*Quy định cá cược xổ số</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 2 )&nbsp;</font><span style="font-family: &quot;Times New Roman&quot;;">Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">HƯỚNG DẪN GIẢI THƯỞNG</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Mỗi kỳ sẽ mở ngẫu nhiên 5 con số （00000-99999）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Ví dụ :</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Kỳ xổ hiện tại là 12345</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A=1</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">B=2</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">C=3</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">D=4</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">E=5</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng =A+B+C+D+E=15</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Cách chơi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Người chơi có thể chỉ định đặt cược A,B,C,D,E và tổng hợp của năm kết quả</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A,B,C,D,E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Con số（0 1 2 3 4 5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0 1 2 3 4）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 5 7 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 4 6 8）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng hợp =A+B+C+D+E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0-22）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （23-45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 ···43 45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 ···42 44）</font></p>'
    }, {
        typeID: 8,
        typeName: "5D Lotre<br />10Min",
        tabName: "5D 10Min",
        intervalM: 10,
        scope: "1000|10000|100000|1000000",
        sort: 1,
        gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">LUẬT CHƠI XỔ SỐ 5D</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">*Quy định cá cược xổ số</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 2 )&nbsp;</font><span style="font-family: &quot;Times New Roman&quot;;">Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">HƯỚNG DẪN GIẢI THƯỞNG</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Mỗi kỳ sẽ mở ngẫu nhiên 5 con số （00000-99999）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Ví dụ :</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Kỳ xổ hiện tại là 12345</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A=1</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">B=2</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">C=3</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">D=4</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">E=5</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng =A+B+C+D+E=15</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Cách chơi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Người chơi có thể chỉ định đặt cược A,B,C,D,E và tổng hợp của năm kết quả</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A,B,C,D,E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Con số（0 1 2 3 4 5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0 1 2 3 4）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 5 7 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 4 6 8）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng hợp =A+B+C+D+E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0-22）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （23-45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 ···43 45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 ···42 44）</font></p>'
    }],
    $c = [{
        typeID: 9,
        typeName: "K3 Lotre<br />1Min",
        tabName: "K3 1Min",
        intervalM: 1,
        scope: "1000|10000|100000|1000000",
        sort: 1,
        gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Xổ số Fast 3 mỗi kỳ xổ sẽ là 3 con số,con số sẽ được mở ngẫu nhiên từ 111 đến 666 không có số 0 và các con số xổ không theo thứ tự cụ thể Fast 3 đó là đoán tất cả hoặc một phần của 3 con số trúng thưởng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược tổng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số tổng của 3 viên xúc xắc</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 toàn bộ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi đặt cược nhóm các bộ ba giống nhau như: （111、222、…、666）bao trọn bộ và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi chọn một trong tất cả các bộ ba bất kỳ（111、…、666）và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược hai số đôi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số gồm hai số đôi được chỉ định và một số bất kỳ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số đôi +1 số đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số được chỉ định gồm hai số đôi và một số khác</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số hoàn toàn khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 2 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược 2 số khác nhau + 1 số khác để đặt chung trong 1 vé cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số liên tiếp</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược toàn bộ các số liên tiếp là [123, 234, 345, 456] tiến hành đặt cược<br></font></p>'
    }, {
        typeID: 10,
        typeName: "K3 Lotre<br />3Min",
        tabName: "K3 3Min",
        intervalM: 3,
        scope: "1000|10000|100000|1000000",
        sort: 2,
        gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Xổ số Fast 3 mỗi kỳ xổ sẽ là 3 con số,con số sẽ được mở ngẫu nhiên từ 111 đến 666 không có số 0 và các con số xổ không theo thứ tự cụ thể Fast 3 đó là đoán tất cả hoặc một phần của 3 con số trúng thưởng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược tổng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số tổng của 3 viên xúc xắc</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 toàn bộ</font><span style="font-family: 宋体;">Xổ số Fast 3 mỗi kỳ xổ sẽ là 3 con số,con số sẽ được mở ngẫu nhiên từ 111 đến 666 không có số 0 và các con số xổ không theo thứ tự cụ thể Fast 3 đó là đoán tất cả hoặc một phần của 3 con số trúng thưởng</span></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược tổng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số tổng của 3 viên xúc xắc</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 toàn bộ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi đặt cược nhóm các bộ ba giống nhau như: （111、222、…、666）bao trọn bộ và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi chọn một trong tất cả các bộ ba bất kỳ（111、…、666）và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược hai số đôi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số gồm hai số đôi được chỉ định và một số bất kỳ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số đôi +1 số đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số được chỉ định gồm hai số đôi và một số khác</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số hoàn toàn khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 2 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược 2 số khác nhau + 1 số khác để đặt chung trong 1 vé cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số liên tiếp</font></p><p class="MsoNormal" style="margin-bottom: 0px; -webkit-tap-highlight-color: transparent;"><font face="宋体">Cược toàn bộ các số liên tiếp là [123, 234, 345, 456] tiến hành đặt cược<br></font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi đặt cược nhóm các bộ ba giống nhau như: （111、222、…、666）bao trọn bộ và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi chọn một trong tất cả các bộ ba bất kỳ（111、…、666）và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược hai số đôi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số gồm hai số đôi được chỉ định và một số bất kỳ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số đôi +1 số đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số được chỉ định gồm hai số đôi và một số khác</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số hoàn toàn khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 2 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược 2 số khác nhau + 1 số khác để đặt chung trong 1 vé cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số liên tiếp</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược toàn bộ các số liên tiếp là [123, 234, 345, 456] tiến hành đặt cược<br></font></p>'
    }, {
        typeID: 11,
        typeName: "K3 Lotre<br />5Min",
        tabName: "K3 5Min",
        intervalM: 5,
        scope: "1000|10000|100000|1000000",
        sort: 3,
        gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Xổ số Fast 3 mỗi kỳ xổ sẽ là 3 con số,con số sẽ được mở ngẫu nhiên từ 111 đến 666 không có số 0 và các con số xổ không theo thứ tự cụ thể Fast 3 đó là đoán tất cả hoặc một phần của 3 con số trúng thưởng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược tổng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số tổng của 3 viên xúc xắc</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 toàn bộ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi đặt cược nhóm các bộ ba giống nhau như: （111、222、…、666）bao trọn bộ và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi chọn một trong tất cả các bộ ba bất kỳ（111、…、666）và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược hai số đôi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số gồm hai số đôi được chỉ định và một số bất kỳ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số đôi +1 số đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số được chỉ định gồm hai số đôi và một số khác</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số hoàn toàn khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 2 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược 2 số khác nhau + 1 số khác để đặt chung trong 1 vé cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số liên tiếp</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược toàn bộ các số liên tiếp là [123, 234, 345, 456] tiến hành đặt cược<br></font></p>'
    }, {
        typeID: 12,
        typeName: "K3 Lotre<br />10Min",
        tabName: "K3 10Min",
        intervalM: 10,
        scope: "1000|10000|100000|1000000",
        sort: 4,
        gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Xổ số Fast 3 mỗi kỳ xổ sẽ là 3 con số,con số sẽ được mở ngẫu nhiên từ 111 đến 666 không có số 0 và các con số xổ không theo thứ tự cụ thể Fast 3 đó là đoán tất cả hoặc một phần của 3 con số trúng thưởng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược tổng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số tổng của 3 viên xúc xắc</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 toàn bộ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi đặt cược nhóm các bộ ba giống nhau như: （111、222、…、666）bao trọn bộ và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi chọn một trong tất cả các bộ ba bất kỳ（111、…、666）và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược hai số đôi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số gồm hai số đôi được chỉ định và một số bất kỳ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số đôi +1 số đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số được chỉ định gồm hai số đôi và một số khác</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số hoàn toàn khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 2 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược 2 số khác nhau + 1 số khác để đặt chung trong 1 vé cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số liên tiếp</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược toàn bộ các số liên tiếp là [123, 234, 345, 456] tiến hành đặt cược<br></font></p>'
    }],
    aI = [{
        typeID: 1,
        typeName: "Win Go<br />1Min",
        tabName: "WinGo 1Min",
        intervalM: 1,
        scope: "1000|10000|100000|1000000",
        sort: 4,
        gamePresentation: '<p class="MsoNormal"><span style="font-family: &quot;Times New Roman&quot;;">\uFEFF</span><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">LUẬT CHƠI XỔ SỐ WINGO 1 Phút</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">*Quy định cá cược xổ số</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 2 ) Không được phép cược 8 số trở lên trong cùng một kỳ xổ.</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 3 ) Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></span></font></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">HƯỚNG DẪN GIẢI THƯỞNG</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">Một phút mở thưởng một lần , 55 giây đặt cược, 5 giây còn lại chờ đợi mở kết quả tạm ngưng đặt cược. Giải thưởng sẽ được mở cả ngày. Tổng số lượt mở thưởng mỗi ngày là 1440 lượt.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">Nếu bạn thực hiện một giao dịch mua là 100, sẽ có khoản khấu trừ là 2, do đó khoản đặt thực tế của bạn là 98.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">1. Chọn màu xanh lá cây: nếu kết quả hiển thị số "1,3,7,9" bạn sẽ nhận được (98 * 2)= 196.</span></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">- Nếu kết quả hiển thị số "5", bạn sẽ nhận được (98 * 1.5)= 147.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">2. Chọn màu đỏ: nếu kết quả hiển thị số "2,4,6,8" bạn sẽ nhận được (98 * 2)= 196; nếu kết quả hiển thị là "0" bạn sẽ nhận được (98 * 1.5)= 147.</span></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">3. Chọn màu tím: nếu kết quả hiển thị số "0" hoặc “5”, bạn sẽ nhận được (98 * 4,5)= 441.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">4. Chọn số: nếu kết quả mở ra giống với kết quả bạn đã chọn, bạn sẽ nhận được (98 * 9)= 882.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">5. Chọn lớn: nếu kết quả hiển thị số "5,6,7,8,9" bạn sẽ nhận được (98 * 2)= 196.</span><br></p><p class="MsoNormal" style="margin-bottom: 0px;"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">6. Chọn nhỏ: nếu kết quả hiển thị số "0,1,2,3,4" bạn sẽ nhận được (98 * 2)= 196.</span></p>'
    }, {
        typeID: 2,
        typeName: "Win Go<br />3Min",
        tabName: "WinGo 3Min",
        intervalM: 3,
        scope: "1000|10000|100000|1000000",
        sort: 3,
        gamePresentation: '<p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">LUẬT CHƠI XỔ SỐ WINGO 3 Phút</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">*Quy định cá cược xổ số</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 2 ) Không được phép cược 8 số trở lên trong cùng một kỳ xổ.</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 3 ) Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></span></font></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">HƯỚNG DẪN GIẢI THƯỞNG</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">Một phút mở thưởng một lần ,2 phút 55 giây đặt cược, 5 giây còn lại chờ đợi mở kết quả tạm ngưng đặt cược. Giải thưởng sẽ được mở cả ngày. Tổng số lượt mở thưởng mỗi ngày là 480 lượt.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">Nếu bạn thực hiện một giao dịch mua là 100, sẽ có khoản khấu trừ là 2, do đó khoản đặt thực tế của bạn là 98.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">1. Chọn màu xanh lá cây: nếu kết quả hiển thị số "1,3,7,9" bạn sẽ nhận được (98 * 2)= 196.</span></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">- Nếu kết quả hiển thị số "5", bạn sẽ nhận được (98 * 1.5)= 147.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">2. Chọn màu đỏ: nếu kết quả hiển thị số "2,4,6,8" bạn sẽ nhận được (98 * 2)= 196; nếu kết quả hiển thị là "0" bạn sẽ nhận được (98 * 1.5)= 147.</span></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">3. Chọn màu tím: nếu kết quả hiển thị số "0" hoặc “5”, bạn sẽ nhận được (98 * 4,5)= 441.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">4. Chọn số: nếu kết quả mở ra giống với kết quả bạn đã chọn, bạn sẽ nhận được (98 * 9)= 882.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">5. Chọn lớn: nếu kết quả hiển thị số "5,6,7,8,9" bạn sẽ nhận được (98 * 2)= 196.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">6. Chọn nhỏ: nếu kết quả hiển thị số "0,1,2,3,4" bạn sẽ nhận được (98 * 2)= 196.</span></p>'
    }, {
        typeID: 3,
        typeName: "Win Go<br />5Min",
        tabName: "WinGo 5Min",
        intervalM: 5,
        scope: "1000|10000|100000|1000000",
        sort: 2,
        gamePresentation: '<p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">LUẬT CHƠI XỔ SỐ WINGO 5 Phút</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">*Quy định cá cược xổ số</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 2 ) Không được phép cược 8 số trở lên trong cùng một kỳ xổ.</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 3 ) Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></span></font></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">HƯỚNG DẪN GIẢI THƯỞNG</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">Năm phút mở thưởng một lần , 4 phút 55 giây đặt cược, 5 giây còn lại chờ đợi mở kết quả tạm ngưng đặt cược. Giải thưởng sẽ được mở cả ngày. Tổng số lượt mở thưởng mỗi ngày là 288 lượt.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">Nếu bạn thực hiện một giao dịch mua là 100, sẽ có khoản khấu trừ là 2, do đó khoản đặt thực tế của bạn là 98.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">1. Chọn màu xanh lá cây: nếu kết quả hiển thị số "1,3,7,9" bạn sẽ nhận được (98 * 2)= 196.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">- Nếu kết quả hiển thị số "5", bạn sẽ nhận được (98 * 1.5)= 147.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">2. Chọn màu đỏ: nếu kết quả hiển thị số "2,4,6,8" bạn sẽ nhận được (98 * 2)= 196; nếu kết quả hiển thị là "0" bạn sẽ nhận được (98 * 1.5)= 147.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">3. Chọn màu tím: nếu kết quả hiển thị số "0" hoặc “5”, bạn sẽ nhận được (98 * 4,5)= 441.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">4. Chọn số: nếu kết quả mở ra giống với kết quả bạn đã chọn, bạn sẽ nhận được (98 * 9)= 882.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">5. Chọn lớn: nếu kết quả hiển thị số "5,6,7,8,9" bạn sẽ nhận được (98 * 2)= 196.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">6. Chọn nhỏ: nếu kết quả hiển thị số "0,1,2,3,4" bạn sẽ nhận được (98 * 2)= 196.</span></p>'
    }, {
        typeID: 4,
        typeName: "Win Go<br />10Min",
        tabName: "WinGo 10Min",
        intervalM: 10,
        scope: "1000|10000|100000|1000000",
        sort: 1,
        gamePresentation: '<p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">LUẬT CHƠI XỔ SỐ WINGO 5 Phút</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">*Quy định cá cược xổ số</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 2 ) Không được phép cược 8 số trở lên trong cùng một kỳ xổ.</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 3 ) Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></span></font></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">HƯỚNG DẪN GIẢI THƯỞNG</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">Năm phút mở thưởng một lần , 4 phút 55 giây đặt cược, 5 giây còn lại chờ đợi mở kết quả tạm ngưng đặt cược. Giải thưởng sẽ được mở cả ngày. Tổng số lượt mở thưởng mỗi ngày là 288 lượt.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">Nếu bạn thực hiện một giao dịch mua là 100, sẽ có khoản khấu trừ là 2, do đó khoản đặt thực tế của bạn là 98.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">1. Chọn màu xanh lá cây: nếu kết quả hiển thị số "1,3,7,9" bạn sẽ nhận được (98 * 2)= 196.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">- Nếu kết quả hiển thị số "5", bạn sẽ nhận được (98 * 1.5)= 147.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">2. Chọn màu đỏ: nếu kết quả hiển thị số "2,4,6,8" bạn sẽ nhận được (98 * 2)= 196; nếu kết quả hiển thị là "0" bạn sẽ nhận được (98 * 1.5)= 147.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">3. Chọn màu tím: nếu kết quả hiển thị số "0" hoặc “5”, bạn sẽ nhận được (98 * 4,5)= 441.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">4. Chọn số: nếu kết quả mở ra giống với kết quả bạn đã chọn, bạn sẽ nhận được (98 * 9)= 882.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">5. Chọn lớn: nếu kết quả hiển thị số "5,6,7,8,9" bạn sẽ nhận được (98 * 2)= 196.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">6. Chọn nhỏ: nếu kết quả hiển thị số "0,1,2,3,4" bạn sẽ nhận được (98 * 2)= 196.</span></p>'
    }],
    wc = l => Te(Ce.GetMyBingo18HistoryBetting, l),
    Tc = () => Te(Ce.GetBinguoGameConfig),
    Cc = () => Te(Ce.GetBingo18OddsList),
    Nc = () => Te(Ce.GetGameBingo18Issue),
    Lc = () => Te(Ce.GetBingo18LastGameResult),
    zc = l => Te(Ce.GetBingo18BetAmount, l),
    xc = l => Te(Ce.Bingo18Betting, l),
    Ta = () => Te(Ce.GetBingo18Last50Result),
    Ic = () => Te(Ce.GetTrendstatistics),
    Rc = () => Te(Ce.GetLotteryRankList),
    Sc = () => Te(Ce.GetLotteryResult7Day),
    Bc = l => Te(Ce.GetUserRankList, {
        uid: l
    }),
    le = Zt({
        currentTabIndex: 0,
        resultSumTrend: [],
        smallAndBigTrend: void 0,
        threeSameTrend: [],
        twoSameTrend: [],
        isTrend: !1,
        trendList: [],
        last50List: [],
        userRank: 0,
        last7Day: []
    }),
    {
        t: ri
    } = Ni.global,
    wi = v([{
        title: ri("time"),
        key: "issueEndTime",
        isLockColumn: !0,
        isSlot: !0,
        width: "50px",
        cusTdClass: "column_time"
    }]),
    Ze = () => {
        const l = {
                1: {
                    player: ri("xosoTxt60"),
                    Big: {
                        class: "big"
                    },
                    Small: {
                        class: "small"
                    },
                    Drawn: {
                        class: "sum"
                    }
                },
                2: {
                    player: ri("same"),
                    class: "small"
                },
                3: {
                    player: ri("sameNum")
                },
                4: {
                    player: ri("numbersMatch")
                }
            },
            i = J(() => {
                let w = [],
                    y = [];
                for (let f = 0; f < le.last50List.length; f++) y.length < 5 || (w.push(y), y = []), y.push(le.last50List[f].resultSum), f === le.last50List.length - 1 && w.push(y);
                return w
            }),
            o = J(() => {
                let w = le.last50List.map(f => f.resultSum),
                    y = _(w).slice(0, 10).reverse();
                return y.forEach(f => {
                    if (f.length < 5) {
                        let h = 5 - f.length;
                        for (let N = 0; N < h; N++) f.push("")
                    }
                }), y
            }),
            r = J(() => le.last50List.map(w => {
                const y = w.result.split(""),
                    f = {};
                for (let h = 1; h <= 6; h++) f["num" + h] = y.filter(N => N === h.toString()).length;
                return {
                    issueNo: w.issueNo,
                    sum: w.resultSum,
                    ...f
                }
            })),
            g = async () => {
                const w = await lt(Sc());
                if (w != null && w.data) {
                    wi.value = [{
                        title: ri("time"),
                        key: "issueEndTime",
                        isLockColumn: !0,
                        isSlot: !0,
                        width: "50px",
                        cusTdClass: "column_time"
                    }];
                    let y = w.data.reverse();
                    [...new Set(w.data.map(L => L.startDate))].slice(0, 7).reverse().forEach((L, k) => {
                        wi.value.push({
                            key: "time_index_" + k,
                            title: L,
                            isSlot: !0
                        })
                    });
                    let h = b(y, "issueEndTime"),
                        N = [];
                    Object.entries(h).forEach(([L, k]) => {
                        let $ = {};
                        k.forEach((T, R) => {
                            var I;
                            let z = (I = wi.value.find(S => S.title === T.startDate)) == null ? void 0 : I.key;
                            $[`${z}`] = T
                        }), N.push({
                            issueEndTime: L,
                            ...$
                        })
                    }), le.last7Day = N.sort((L, k) => {
                        const $ = L.issueEndTime.split(":"),
                            T = k.issueEndTime.split(":"),
                            R = parseInt($[0]),
                            z = parseInt($[1]),
                            I = parseInt(T[0]),
                            S = parseInt(T[1]);
                        return R === I ? z - S : R - I
                    })
                }
            };

        function b(w, y) {
            const f = {};
            return w.forEach(h => {
                const N = h[y];
                f[N] || (f[N] = []), f[N].push(h)
            }), f
        }
        const d = async () => {
                const w = await lt(Rc());
                w != null && w.data && (le.trendList = w.data);
                const f = Me().getUserInfo,
                    h = await lt(Bc(f.userId));
                h != null && h.data && (h.data < 100 && (le.isTrend = !0), le.userRank = h.data)
            },
            u = async () => {
                const w = await lt(Ta());
                w != null && w.data && (le.last50List = w.data)
            },
            p = async () => {
                const w = await lt(Ic());
                w && (le.resultSumTrend = w.data.resultSumTrend, le.smallAndBigTrend = w.data.smallAndBigTrend, le.threeSameTrend = w.data.threeSameTrend, le.twoSameTrend = w.data.twoSameTrend)
            },
            s = (w, y) => {
                let f = "",
                    h = "";
                return w === 1 ? (Number(y) ? f = m(Number(y)) : f = l[1][y].class, h = l[1].player) : w === 2 ? (f = l[2].class, h = l[2].player) : w === 3 ? (Number(y) < 5 ? f = "small" : Number(y) === 5 ? f = "sum" : f = "big", h = l[3].player) : w === 4 && (y.includes("*") ? f = "big" : /[123]/.test(y) ? f = "small" : f = "big", h = l[4].player), {
                    className: f,
                    playerName: h
                }
            };

        function _(w) {
            const y = [],
                f = [];
            let h = "";
            const N = k => k < 10 ? "small" : k > 11 ? "big" : "sum",
                L = (k, $) => {
                    let T = 0;
                    if (k !== $[$.length - 1]) return 0;
                    for (let R = $.length - 1; R >= 0; R--)
                        if (k === $[R]) T += 1;
                        else return T;
                    return T
                };
            for (let k = 0; k < w.length; k++) {
                const $ = w[k],
                    T = N($);
                if (y.length === 0 || T !== h) {
                    y.push([$]), h = T, f.push(h);
                    continue
                }
                if (y[y.length - 1].length < 5) y[y.length - 1].push($);
                else {
                    let R = L(T, f),
                        z = y[y.length - R].length;
                    z === 5 ? (y.splice(y.length - R, 0, [$]), f.push(T)) : (z > 5, y[y.length - R].unshift($))
                }
                h = T
            }
            return y
        }
        const m = w => Number(w) < 10 ? "small" : Number(w) > 11 ? "big" : "sum";
        return {
            store: le,
            last50Result: i,
            last50Record: o,
            last50RecordResult: r,
            columnOptions: wi,
            filterStyle: m,
            filterGameType: s,
            getTrendstatistics: p,
            getLotteryRankList: d,
            getLotteryResult7Day: g,
            getBingo18Last50Result: u
        }
    },
    Mc = {
        class: "ar-searchbar__selector"
    },
    Gc = {
        key: 0,
        class: "noSelect"
    },
    Ac = {
        key: 1,
        class: "ar-searchbar__selector-default"
    },
    Pc = U({
        __name: "Calendar",
        emits: ["confirm"],
        setup(l, {
            expose: i,
            emit: o
        }) {
            const {
                minDate: r,
                maxDate: g
            } = ia(), b = v(""), d = v(""), u = v(!1), p = m => `${m.getFullYear()}-${m.getMonth()+1}-${m.getDate()}`, s = async m => {
                u.value = !1;
                const [w, y] = m;
                b.value = p(w), d.value = p(y), o("confirm")
            };

            function _() {
                u.value = !0
            }
            return i({
                startDateValue: b,
                endDateValue: d
            }), (m, w) => {
                const y = W("van-icon"),
                    f = W("van-calendar");
                return n(), a(B, null, [t("div", Mc, [t("div", {
                    onClick: _
                }, [b.value === "" || d.value === "" ? (n(), a("span", Gc, e(m.$t("datePick")), 1)) : (n(), a("span", Ac, e(b.value) + "/" + e(d.value), 1)), x(y, {
                    name: "arrow-down"
                })])]), C(`<ArSelect @click-select="onClickSelectT" :selectName="$t('datePick')|| (startDateValue / endDateValue )"></ArSelect>`), C(' <van-popup v-model:show="showDataPick" round position="bottom"> '), x(f, {
                    show: u.value,
                    "onUpdate:show": w[0] || (w[0] = h => u.value = h),
                    type: "range",
                    onConfirm: s,
                    "min-date": c(r),
                    "max-date": c(g),
                    teleport: "body"
                }, null, 8, ["show", "min-date", "max-date"]), C(" </van-popup> ")], 64)
            }
        }
    }),
    Dc = K(Pc, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/common/Calendar.vue"]
    ]),
    Oc = l => (Rt("data-v-1115ff02"), l = l(), St(), l),
    qc = {
        class: "x-4d-head"
    },
    Ec = {
        class: "menu"
    },
    jc = ["onClick"],
    Hc = {
        class: "lottery"
    },
    Wc = {
        class: "item"
    },
    Vc = Oc(() => t("div", {
        class: "box"
    }, [t("div")], -1)),
    Fc = [Vc],
    Uc = {
        class: "mask"
    },
    Kc = ["onClick"],
    Xc = {
        class: "img"
    },
    Qc = U({
        __name: "lotterylist",
        props: {
            modelValue: {
                type: Boolean,
                required: !0,
                default: !1
            },
            timeIndex: {
                type: Number,
                required: !0,
                default: 0
            },
            timeVal: {
                type: String,
                required: !0,
                default: oe().format("YYYY-MM-DD")
            },
            lotteryList: {
                type: Array,
                required: !0
            },
            lotteryTab: {
                type: Array,
                required: !0
            },
            timeWeek: {
                type: Function,
                required: !0,
                default: () => ""
            }
        },
        emits: ["onLotteryTab", "onTime", "update:modelValue"],
        setup(l, {
            emit: i
        }) {
            const r = fo(l, "modelValue", i),
                g = (_, m) => {
                    i("onLotteryTab", _, m)
                },
                b = (_, m) => {
                    i("onTime", _, m)
                },
                d = () => {
                    r.value = !0
                },
                u = () => {
                    r.value = !1
                },
                p = () => {
                    r.value ? u() : d()
                },
                s = v(null);
            return yo(s, _ => {
                r.value = !1
            }), (_, m) => {
                var f;
                const w = W("van-skeleton"),
                    y = Jt("lazy");
                return n(), a("div", qc, [t("div", {
                    class: "time",
                    ref_key: "target",
                    ref: s
                }, [t("div", {
                    class: "box",
                    onClick: p
                }, e(_.timeVal.replace(/-/g, "/")) + " " + e(_.timeWeek(_.timeVal)), 1), ft(t("div", Ec, [t("h3", {
                    onClick: u
                }, e(_.$t("Drawdate")), 1), t("ul", null, [(n(!0), a(B, null, G(_.lotteryTab, (h, N) => (n(), a("li", {
                    class: M([_.timeVal == h.date ? "active" : ""]),
                    key: N,
                    onClick: L => b(h, N)
                }, e(h.date.replace(/-/g, "/")) + " " + e(_.timeWeek(h.date)), 11, jc))), 128))])], 512), [
                    [te, c(r)]
                ])], 512), t("div", Hc, [x(w, {
                    loading: !((f = _.lotteryTab[_.timeIndex]) != null && f.games),
                    class: "flex"
                }, {
                    template: A(() => [(n(), a(B, null, G(10, () => t("div", Wc, Fc)), 64))]),
                    default: A(() => {
                        var h;
                        return [ft(t("div", Uc, null, 512), [
                            [te, c(r)]
                        ]), (n(!0), a(B, null, G((h = _.lotteryTab[_.timeIndex]) == null ? void 0 : h.games, (N, L) => (n(), a("div", {
                            class: "item",
                            key: L,
                            onClick: k => g(N, L)
                        }, [t("div", {
                            class: M(["box", [_.lotteryList.includes(N.type) ? "active" : ""]])
                        }, [ft(t("img", Xc, null, 512), [
                            [y, N.typeImg]
                        ])], 2)], 8, Kc))), 128))]
                    }),
                    _: 1
                }, 8, ["loading"])])])
            }
        }
    });
const Yc = K(Qc, [
        ["__scopeId", "data-v-1115ff02"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/4D/components/lotterylist.vue"]
    ]),
    Zc = {
        class: "betType"
    },
    Jc = {
        class: "title"
    },
    tr = {
        class: "betType-list"
    },
    er = {
        class: "item action"
    },
    ir = ["onClick"],
    nr = U({
        __name: "bettype",
        props: {
            betType: {
                type: Array,
                required: !0
            },
            betTypeList: {
                type: Array,
                required: !0
            }
        },
        emits: ["onBetType"],
        setup(l, {
            emit: i
        }) {
            const o = r => {
                i("onBetType", r)
            };
            return (r, g) => {
                const b = W("van-skeleton");
                return n(), a(B, null, [C(" 投注类型 "), t("div", Zc, [t("h4", Jc, e(r.$t("xosoTxt78")), 1), t("ul", tr, [x(b, {
                    loading: !r.betTypeList,
                    class: "flex"
                }, {
                    template: A(() => [(n(), a(B, null, G(7, () => t("li", er)), 64))]),
                    default: A(() => [(n(!0), a(B, null, G(r.betTypeList, (d, u) => (n(), a("li", {
                        class: M([r.betType.includes(d) ? "item action" : "item"]),
                        onClick: p => o(d),
                        key: u
                    }, e(r.$t("d4gameType" + d)), 11, ir))), 128))]),
                    _: 1
                }, 8, ["loading"])])])], 2112)
            }
        }
    });
const ar = K(nr, [
        ["__scopeId", "data-v-40039812"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/4D/components/bettype.vue"]
    ]),
    or = {
        class: "howPay"
    },
    sr = {
        class: "title"
    },
    lr = {
        class: "howPay-list"
    },
    cr = {
        class: "item"
    },
    rr = {
        key: 0,
        class: "icon"
    },
    ur = U({
        __name: "betpay",
        props: {
            rollNum: {
                type: Number,
                required: !0,
                default: 1
            },
            banBetPay: {
                type: Number,
                required: !0,
                default: 0
            },
            betPayId: {
                type: Number,
                required: !0,
                default: 1
            },
            duplex: {
                type: Boolean,
                required: !0,
                default: !1
            },
            betPayList: {
                type: Array,
                required: !0
            }
        },
        emits: ["onBetpay"],
        setup(l, {
            emit: i
        }) {
            const o = l,
                r = d => d.includes(5) ? d.slice(0, -1) : d,
                g = d => {
                    let u = !1,
                        p = (d === 2 || d === 3) && o.banBetPay === 1 || o.rollNum > 0,
                        s = o.duplex ? (d === 2 || d === 3 || d === 4) && o.banBetPay === 1 : d === 2 && (d === 2 || d === 3) && o.banBetPay === 1;
                    return (p || s) && (u = !0), u
                },
                b = d => {
                    i("onBetpay", d)
                };
            return (d, u) => {
                const p = W("van-icon"),
                    s = W("van-button"),
                    _ = W("van-skeleton");
                return n(), a(B, null, [C(" 玩法 "), t("div", or, [t("h4", sr, e(d.$t("gamePlay")), 1), t("ul", lr, [x(_, {
                    loading: !r(d.betPayList),
                    class: "flex"
                }, {
                    template: A(() => [(n(), a(B, null, G(4, () => t("li", cr)), 64))]),
                    default: A(() => [(n(!0), a(B, null, G(r(d.betPayList), (m, w) => (n(), it(s, {
                        plain: "",
                        disabled: g(m),
                        class: M([m == d.betPayId ? "item action" : "item"]),
                        onClick: y => b(m),
                        key: w
                    }, {
                        default: A(() => [E(e(d.$t("d4gamePay" + m)) + " ", 1), m == d.betPayId ? (n(), a("i", rr, [x(p, {
                            name: "success"
                        })])) : C("v-if", !0)]),
                        _: 2
                    }, 1032, ["disabled", "class", "onClick"]))), 128))]),
                    _: 1
                }, 8, ["loading"])])])], 2112)
            }
        }
    });
const dr = K(ur, [
        ["__scopeId", "data-v-42192c16"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/4D/components/betpay.vue"]
    ]),
    pr = {
        class: "betAmount"
    },
    gr = {
        class: "title"
    },
    br = {
        class: "betAmount-list"
    },
    mr = ["onClick"],
    vr = U({
        __name: "betamount",
        props: {
            count: {
                type: Number,
                required: !0,
                default: 10
            },
            list: {
                type: Array,
                required: !0
            }
        },
        emits: ["onAmount"],
        setup(l, {
            emit: i
        }) {
            const o = r => {
                i("onAmount", r)
            };
            return (r, g) => (n(), a("div", pr, [t("h4", gr, e(r.$t("betAmounts")), 1), t("ul", br, [(n(!0), a(B, null, G(r.list, (b, d) => (n(), a("li", {
                class: M([b == r.count ? "item active" : "item"]),
                onClick: u => o(b),
                key: d
            }, e(b), 11, mr))), 128))])]))
        }
    });
const _r = K(vr, [
        ["__scopeId", "data-v-1c2e9816"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/4D/components/betamount.vue"]
    ]),
    kr = l => (Rt("data-v-f88540df"), l = l(), St(), l),
    hr = {
        class: "select"
    },
    fr = {
        class: "tab"
    },
    yr = ["onClick"],
    $r = kr(() => t("span", null, "ALL", -1)),
    wr = {
        class: "numList"
    },
    Tr = ["onClick"],
    Cr = U({
        __name: "duplexbet",
        props: {
            tabList: {
                type: Array,
                required: !0
            },
            allActive: {
                type: Array,
                required: !0
            },
            numList: {
                type: Array,
                required: !0
            }
        },
        emits: ["allAddnum", "addNumber"],
        setup(l, {
            emit: i
        }) {
            const o = g => {
                    i("allAddnum", g)
                },
                r = (g, b) => {
                    i("addNumber", g, b)
                };
            return (g, b) => (n(), a("div", hr, [t("ul", fr, [(n(!0), a(B, null, G(g.tabList, (d, u) => (n(), a("li", {
                onClick: p => o(d.type),
                class: M(g.allActive.includes(d.type) ? "active" : ""),
                key: u
            }, [E(e(d.name) + " ", 1), $r], 10, yr))), 128))]), t("div", wr, [(n(!0), a(B, null, G(g.numList, (d, u) => (n(), a("ul", {
                class: "",
                key: u
            }, [(n(), a(B, null, G(10, (p, s) => t("li", {
                class: M([d != null && d.list.includes(s) ? "action" : ""]),
                key: p,
                onClick: _ => r(u, s)
            }, e(s), 11, Tr)), 64))]))), 128))])]))
        }
    });
const Nr = K(Cr, [
        ["__scopeId", "data-v-f88540df"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/4D/components/duplexbet.vue"]
    ]),
    Lr = {
        class: "foot"
    },
    zr = {
        class: "item"
    },
    xr = {
        class: "item"
    },
    Ir = U({
        __name: "navfoot",
        props: {
            betQuantity: {
                type: Number,
                default: 0
            },
            totalAmount: {
                type: Number,
                default: 0
            }
        },
        emits: ["onBet"],
        setup(l, {
            emit: i
        }) {
            const o = l,
                r = () => {
                    o.totalAmount > 0 && i("onBet")
                };
            return (g, b) => (n(), a("div", Lr, [t("div", zr, [t("p", null, e(g.$t("quantity")), 1), t("span", null, e(l.betQuantity), 1)]), t("div", xr, [t("p", null, e(g.$t("betAmounts")), 1), t("span", null, e(c(na)(l.totalAmount)), 1)]), t("div", {
                class: M(["item bet", [l.totalAmount > 0 ? "active" : ""]]),
                onClick: r
            }, e(g.$t("betting")), 3)]))
        }
    });
const Rr = K(Ir, [
        ["__scopeId", "data-v-fd9536f0"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/4D/components/navfoot.vue"]
    ]),
    Sr = {
        class: "x-bet"
    },
    Br = {
        class: "x-bet-sub"
    },
    Mr = {
        class: "x-bet-lottery"
    },
    Gr = {
        class: "x-bet-title"
    },
    Ar = {
        class: "box"
    },
    Pr = {
        class: "img"
    },
    Dr = {
        class: "x-bet-type"
    },
    Or = {
        class: "x-bet-title"
    },
    qr = {
        class: "box"
    },
    Er = {
        class: "x-bet-multiple"
    },
    jr = {
        class: "tit"
    },
    Hr = {
        class: "box"
    },
    Wr = {
        class: "multiple-list"
    },
    Vr = {
        class: "box"
    },
    Fr = ["onClick"],
    Ur = {
        class: "x-bet-list"
    },
    Kr = {
        class: "item"
    },
    Xr = {
        class: "lab"
    },
    Qr = {
        class: "number"
    },
    Yr = {
        class: "item"
    },
    Zr = {
        class: "lab"
    },
    Jr = {
        class: "balance"
    },
    tu = {
        class: "item"
    },
    eu = {
        class: "lab"
    },
    iu = {
        class: "amount"
    },
    nu = {
        key: 0,
        class: "x-bet-wallet"
    },
    au = {
        class: "tip"
    },
    ou = ["src"],
    su = {
        class: "x-bet-agree"
    },
    lu = {
        class: "agree"
    },
    cu = {
        class: "x-bet-foot"
    },
    ru = U({
        __name: "betpopup",
        props: {
            betShow: {
                type: Boolean,
                required: !0,
                default: !1
            },
            betQuantity: {
                type: Number,
                required: !0,
                default: 0
            },
            timeIndex: {
                type: Number,
                required: !0,
                default: 0
            },
            totalAmount: {
                type: Number,
                required: !0,
                default: 0
            },
            balance: {
                type: Number,
                required: !0,
                default: 0
            },
            lotteryList: {
                type: Array,
                required: !0
            },
            betType: {
                type: Array,
                required: !0
            },
            countVal: {
                type: [String, Number],
                required: !0
            },
            multipleList: {
                type: Array,
                required: !0
            },
            checked: {
                type: Boolean,
                required: !0,
                default: !1
            },
            preSaleRule: {
                type: Boolean,
                required: !0,
                default: !1
            },
            lotteryTab: {
                type: Array,
                required: !0
            }
        },
        emits: ["getClear", "onStepper", "changeStep", "onMltiple", "checkboxChange", "onCancel", "update:checked", "update:betShow", "update:countVal", "update:preSaleRule", "onBet"],
        setup(l, {
            emit: i
        }) {
            const o = l,
                r = ht(),
                g = N => {
                    i("getClear", N)
                },
                b = N => {
                    i("onStepper", N)
                },
                d = N => {
                    i("changeStep", N)
                },
                u = N => {
                    i("onMltiple", N)
                },
                p = N => {
                    i("checkboxChange", N)
                },
                s = () => {
                    i("onCancel")
                },
                _ = () => {
                    i("onBet")
                },
                m = N => {
                    const {
                        lotteryTab: L,
                        timeIndex: k
                    } = o;
                    let $ = L[k].games.find(T => T.type == N);
                    return $ == null ? void 0 : $.typeImg
                },
                {
                    checked: w,
                    betShow: y,
                    countVal: f,
                    preSaleRule: h
                } = Jn(o, i);
            return (N, L) => {
                const k = W("van-icon"),
                    $ = W("van-field"),
                    T = W("van-checkbox"),
                    R = W("van-popup"),
                    z = Jt("lazy");
                return n(), it(R, {
                    show: c(y),
                    "onUpdate:show": L[7] || (L[7] = I => ce(y) ? y.value = I : null),
                    position: "bottom",
                    "close-on-click-overlay": !1,
                    style: {
                        borderRadius: "15px 15px 0 0"
                    }
                }, {
                    default: A(() => [t("div", Sr, [t("div", Br, [E(e(N.$t("betting")) + " ", 1), t("div", {
                        class: "clear",
                        onClick: L[0] || (L[0] = I => g(1))
                    }, [x(k, {
                        class: "icon",
                        name: "delete-o"
                    }), E(e(N.$t("Clear")), 1)])]), C("  "), C(` <div class="x-bet-maxbet" v-if="tipShow"><span class="tip"> {{ $t('d4BetTip',[7000]) }}</span></div> `), t("div", Mr, [t("h5", Gr, e(N.$t("ColorSpecies")), 1), t("ul", Ar, [(n(!0), a(B, null, G(N.lotteryList, (I, S) => (n(), a("li", {
                        class: "item",
                        key: S
                    }, [ft(t("img", Pr, null, 512), [
                        [z, m(I)]
                    ])]))), 128))])]), t("div", Dr, [t("h5", Or, e(N.$t("xosoTxt78")), 1), t("ul", qr, [(n(!0), a(B, null, G(N.betType, (I, S) => (n(), a("li", {
                        class: "item",
                        key: S
                    }, e(N.$t("d4gameType" + I)), 1))), 128))])]), C(" 投注 "), ve(N.$slots, "default", {}, void 0, !0), t("div", Er, [t("div", jr, e(N.$t("multiple")), 1), t("div", Hr, [t("div", {
                        class: "li minus",
                        onClick: L[1] || (L[1] = I => b(1))
                    }, [x(k, {
                        name: "minus"
                    })]), x($, {
                        class: "digit",
                        modelValue: c(f),
                        "onUpdate:modelValue": L[2] || (L[2] = I => ce(f) ? f.value = I : null),
                        type: "digit",
                        maxlength: 5,
                        onInput: d
                    }, null, 8, ["modelValue"]), t("div", {
                        class: "li plus",
                        onClick: L[3] || (L[3] = I => b(2))
                    }, [x(k, {
                        name: "plus"
                    })])])]), t("div", Wr, [t("div", Vr, [(n(!0), a(B, null, G(N.multipleList, (I, S) => (n(), a("div", {
                        key: S,
                        class: M(c(f) == I ? "active item" : "item"),
                        onClick: D => u(I)
                    }, " X" + e(I), 11, Fr))), 128))])]), t("div", Ur, [t("div", Kr, [t("div", Xr, e(N.$t("quantity")), 1), t("div", Qr, e(N.betQuantity) + e(N.$t("note")), 1)]), t("div", Yr, [t("div", Zr, e(N.$t("walletBalance")), 1), t("div", Jr, e(c(It)(N.balance)), 1)]), t("div", tu, [t("div", eu, e(N.$t("betAmounts")), 1), t("div", iu, e(c(na)(N.totalAmount)), 1), C("K")])]), N.totalAmount > N.balance ? (n(), a("div", nu, [t("div", au, [t("img", {
                        src: c(qt)("home/AllLotteryGames/NewVietnam", "tip")
                    }, null, 8, ou), E(e(N.$t("insufficientWallet")), 1)]), t("div", {
                        class: "txt",
                        onClick: L[4] || (L[4] = I => c(r).push({
                            name: "Recharge"
                        }))
                    }, e(N.$t("torecharge")) + " >>", 1)])) : C("v-if", !0), t("div", su, [x(T, {
                        modelValue: c(w),
                        "onUpdate:modelValue": L[5] || (L[5] = I => ce(w) ? w.value = I : null),
                        "checked-color": "#FF7172",
                        onChange: p
                    }, {
                        default: A(() => [t("div", lu, e(N.$t("agree")), 1)]),
                        _: 1
                    }, 8, ["modelValue"]), t("span", {
                        class: "txt",
                        onClick: L[6] || (L[6] = I => h.value = !0)
                    }, e(N.$t("presaleRules")), 1)])]), t("div", cu, [t("div", {
                        class: "cancel",
                        onClick: s
                    }, e(N.$t("cancel")), 1), t("div", {
                        class: "bet",
                        onClick: _
                    }, e(N.$t("betting")), 1)])]),
                    _: 3
                }, 8, ["show"])
            }
        }
    });
const uu = K(ru, [
        ["__scopeId", "data-v-3557dd80"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/4D/components/betpopup.vue"]
    ]),
    du = {
        class: "x-bet"
    },
    pu = {
        key: 0,
        class: "x-bet-box"
    },
    gu = {
        class: "item"
    },
    bu = {
        class: "pay"
    },
    mu = {
        class: "txt"
    },
    vu = {
        class: "item"
    },
    _u = {
        class: "num"
    },
    ku = {
        class: "txt"
    },
    hu = {
        key: 1,
        class: "x-bet-pay"
    },
    fu = {
        class: "x-bet-title"
    },
    yu = {
        class: "name"
    },
    $u = {
        key: 2,
        class: "x-bet-dupleList"
    },
    wu = {
        class: "digits"
    },
    Tu = {
        class: "sub"
    },
    Cu = {
        class: "list"
    },
    Nu = {
        class: "item"
    },
    Lu = U({
        __name: "betcontent",
        props: {
            tabId: {
                type: Number,
                required: !0,
                default: 0
            },
            betPay: {
                type: Number,
                required: !0,
                default: 0
            },
            num: {
                type: String,
                required: !0
            },
            dupleList: {
                type: Array,
                required: !0
            },
            tabList: {
                type: Array,
                required: !0
            }
        },
        setup(l) {
            return (i, o) => (n(), a("div", du, [C(" 输入投注 "), i.tabId === 1 ? (n(), a("div", pu, [t("div", gu, [t("span", bu, e(i.$t("d4gamePay" + i.betPay)), 1), t("p", mu, e(i.$t("gamePlay")), 1)]), t("div", vu, [t("span", _u, e(i.num), 1), t("p", ku, e(i.$t("bettingnumber")), 1)])])) : C("v-if", !0), C(" 选择投注 "), i.tabId === 2 ? (n(), a("div", hu, [t("h5", fu, e(i.$t("gamePlay")), 1), t("div", yu, e(i.$t("d4gamePay" + i.betPay)), 1)])) : C("v-if", !0), i.tabId === 2 ? (n(), a("div", $u, [(n(!0), a(B, null, G(i.dupleList, (r, g) => (n(), a("div", {
                class: "box",
                key: g
            }, [t("div", wu, [t("div", Tu, e(i.tabList[g].name), 1), t("div", Cu, [(n(!0), a(B, null, G(r.list, (b, d) => (n(), a("div", {
                class: "num",
                key: d
            }, [t("div", Nu, e(b), 1)]))), 128))])])]))), 128))])) : C("v-if", !0)]))
        }
    });
const zu = K(Lu, [
        ["__scopeId", "data-v-d0caa9aa"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/4D/components/betcontent.vue"]
    ]),
    Hn = v(!1),
    Ui = v(!1),
    Wn = v(0),
    Ti = v(),
    Vn = v();

function di() {
    const l = Zt({
            timeVal: oe().format("YYYY-MM-DD"),
            timeIndex: 0,
            lotteryList: [],
            lotteryTab: [],
            tabId: 1,
            rollNum: 0,
            betQuantity: 0,
            betAmount: 0,
            totalAmount: 0,
            betType: [],
            betTypeList: [],
            betPay: 1,
            betPayList: [],
            dupleList: [{
                list: []
            }, {
                list: []
            }, {
                list: []
            }, {
                list: []
            }],
            allActive: [],
            banbetpay: 0,
            multipleList: [1, 5, 10, 20, 50, 100],
            betAmountList: [10, 50, 100, 500, 1e3, 5e3],
            duplex: !1,
            balance: 0,
            stopTime: null
        }),
        {
            t: i
        } = kt(),
        {
            setLoading: o
        } = Ci(),
        r = v(""),
        g = v(1),
        b = v(!0),
        d = v(!1),
        u = v(!1),
        p = v([{}]),
        s = v(),
        _ = v(),
        m = [{
            name: i("xosoTxt90"),
            type: 0
        }, {
            name: i("xosoTxt89"),
            type: 1
        }, {
            name: i("xosoTxt88"),
            type: 2
        }, {
            name: i("xosoTxt87"),
            type: 3
        }],
        w = J(() => l.timeVal),
        y = J(() => l.timeIndex),
        f = J(() => l.lotteryList),
        h = J(() => l.lotteryTab),
        N = J(() => l.tabId),
        L = J(() => l.rollNum),
        k = J(() => l.betType),
        $ = J(() => l.betTypeList),
        T = J(() => l.betPay),
        R = J(() => l.betPayList),
        z = J(() => l.betAmount),
        I = J(() => l.totalAmount),
        S = J(() => l.betQuantity),
        D = J(() => l.banbetpay),
        P = J(() => l.dupleList),
        V = J(() => l.allActive),
        F = J(() => l.multipleList),
        nt = J(() => l.betAmountList),
        ut = J(() => l.duplex),
        ct = J(() => l.balance),
        ot = j => {
            const tt = [i("Sunday"), i("Monday"), i("Tuesday"), i("Wednesday"), i("Thursday"), i("Friday"), i("Saturday")],
                mt = new Date(j);
            return tt[mt.getDay()]
        },
        Z = (j, tt) => {
            l.timeIndex = tt, l.timeVal = j.date, At(1), Hn.value = !1
        },
        _t = (j, tt) => {
            if (l.lotteryList.includes(j.type)) {
                let mt = l.lotteryList.indexOf(j.type);
                l.lotteryList.splice(mt, 1)
            } else l.lotteryList.push(j.type);
            Y(l.betType.length, l.betAmount, l.betPay)
        },
        Bt = j => {
            l.tabId = j, At(0)
        },
        At = j => {
            r.value = "", l.betPay = 1, l.rollNum = 0, l.betType.length = 0, l.betAmount = l.betAmountList[0], l.dupleList.forEach(tt => tt.list = []), l.allActive.length = 0, g.value = 1, dt(), u.value = !1, j == 1 && (l.lotteryList.length = 0)
        },
        dt = () => {
            l.totalAmount = 0, l.betQuantity = 0, l.banbetpay = 0
        },
        yt = () => {
            if (l.rollNum >= 2 || r.value.length >= 4) return Ot(i("EnterTip"));
            l.betPay = 5, r.value += "R", l.rollNum = gt(r.value.split("")), Y(l.betType.length, l.betAmount, l.betPay)
        },
        $t = j => {
            r.value = j.target.value, r.value == "" && (l.betPay = 1), r.value.length !== 4 ? dt() : Gt(j.target.value) ? (Y(l.betType.length, l.betAmount, l.betPay), l.banbetpay = jt(r.value), l.banbetpay === 1 && (l.betPay = 1)) : (r.value = "", l.betPay = 1, Ot(i("FormatTip1"))), l.rollNum = gt(r.value.split(""))
        },
        Mt = j => {
            if (j.target.value == "" || j.target.value.length !== 4) return;
            Gt(j.target.value) || (r.value = "", l.betPay = 1, Ot(i("FormatTip1")))
        },
        Gt = j => /^[0-9]{4}|\R[0-9]{3}|[0-9]{1}\R[0-9]{2}|[0-9]{2}\R[0-9]{1}|\R[0-9]{2}\R|[0-9]{2}\R{2}|\R{2}[0-9]{2}|[0-9]{3}\R|[0-9]\R{2}[0-9]|[0-9]\R[0-9]\R|\R[0-9]\R[0-9]$/.test(j),
        gt = j => {
            let tt = j.indexOf("R"),
                mt = 0;
            for (; tt !== -1;) mt++, tt = j.indexOf("R", tt + 1);
            return mt
        },
        et = j => {
            const {
                betType: tt,
                betAmount: mt,
                betPay: Tt
            } = l;
            if (tt.includes(j)) {
                let Pt = tt.indexOf(j);
                tt.splice(Pt, 1)
            } else tt.push(j);
            Y(tt.length, mt, Tt)
        },
        at = j => {
            l.betPay = j, Y(l.betType.length, l.betAmount, j)
        },
        Q = j => {
            l.betAmount = j, Y(l.betType.length, j, l.betPay)
        },
        Y = (j, tt, mt) => {
            let {
                tabId: Tt,
                dupleList: Pt,
                lotteryList: xt
            } = l;
            if (Tt === 1) {
                if (r.value.length !== 4) return !1;
                H(j, tt, r.value, mt)
            } else if (Le(Pt)) l.betQuantity = bt(Pt) * xt.length * l.betType.length, l.totalAmount = l.betQuantity * tt * xt.length * g.value;
            else {
                const Qt = Pt.map(Et => Et.list[0]).join("");
                if (Qt.length !== 4) return;
                l.banbetpay = jt(Qt), H(j, tt, Qt, mt)
            }
        },
        H = (j, tt, mt, Tt) => {
            let {
                rollNum: Pt,
                lotteryList: xt
            } = l, Qt = j * tt * xt.length * g.value, Et = j * xt.length, Ut = 0, se = 0;
            if (Tt === 1 || Tt === 2) Ut = Qt, se = Et;
            else if (Tt === 3) {
                const De = jt(mt);
                Ut = Qt * De, se = Et * De
            } else if (Tt === 4) {
                const De = wt(mt);
                Ut = Qt * (De ? 1 : 2), se = Et * (De ? 1 : 2)
            } else Tt === 5 && (Ut = Qt * (Pt > 0 ? Pt == 1 ? 10 : 10 * 10 : 0), se = Et * (Pt > 0 ? Pt == 1 ? 10 : 10 * 10 : 0));
            l.totalAmount = Ut, l.betQuantity = se
        },
        wt = j => j === j.split("").reverse().join("");

    function jt(j) {
        function tt(Et) {
            return Et <= 1 ? 1 : Et * tt(Et - 1)
        }
        let mt = j.split("").map(Number),
            Tt = [...new Set(mt)],
            Pt = tt(mt.length),
            xt = 1;
        for (const Et of Tt) {
            const Ut = mt.filter(se => se === Et).length;
            xt *= tt(Ut)
        }
        return Pt / xt
    }
    const ie = j => {
            const {
                dupleList: tt,
                allActive: mt,
                betType: Tt,
                betAmount: Pt
            } = l;
            if (tt[j].list = [], mt.includes(j)) {
                let xt = mt.indexOf(j);
                mt.splice(xt, 1)
            } else {
                mt.push(j);
                for (let xt = 0; xt < 10; xt++) tt[j].list.push(xt)
            }
            re(), Y(Tt.length, Pt)
        },
        Ne = (j, tt) => {
            const {
                dupleList: mt,
                allActive: Tt,
                betType: Pt,
                betAmount: xt,
                betPay: Qt
            } = l, Et = mt[j].list;
            if (Et.includes(tt)) {
                let Ut = Et.indexOf(tt);
                Et.splice(Ut, 1)
            } else Et.push(tt);
            if (Et.length === 10) Tt.push(j);
            else if (Tt.includes(j)) {
                let Ut = Tt.indexOf(j);
                Tt.splice(Ut, 1)
            }
            if (re(), bt(mt) > 0) {
                if (Y(Pt.length, xt, Qt), bt(mt) === 1) {
                    const Ut = mt.map(se => se.list[0]).join("");
                    l.banbetpay = jt(Ut)
                }
                l.banbetpay === 1 && (l.betPay = 1)
            } else Le(mt) ? l.banbetpay = Le(mt) ? 1 : 0 : dt()
        },
        re = () => {
            const {
                dupleList: j
            } = l;
            l.duplex = Le(j), l.banbetpay = Le(j) ? 1 : 0, Le(j) && (l.betPay = 1)
        };

    function Le(j) {
        for (let tt = 0; tt < j.length; tt++) {
            const mt = j[tt].list;
            if (Array.isArray(mt) && mt.length > 1) return !0
        }
        return !1
    }

    function bt(j) {
        let tt = 1;
        return j.forEach((mt, Tt) => {
            tt *= mt.list.length
        }), tt
    }
    const Ae = () => {
            u.value = !0
        },
        Ie = j => {
            const {
                betType: tt,
                betAmount: mt,
                betPay: Tt
            } = l;
            switch (j) {
                case 1:
                    g.value > 1 && g.value--;
                    break;
                case 2:
                    g.value++;
                    break
            }
            Y(tt.length, mt, Tt)
        },
        he = j => {
            const {
                betType: tt,
                betAmount: mt,
                betPay: Tt
            } = l;
            g.value = j.target.value, Y(tt.length, mt, Tt)
        },
        Ct = j => {
            const {
                betType: tt,
                betAmount: mt,
                betPay: Tt
            } = l;
            g.value = j, Y(tt.length, mt, Tt)
        },
        Je = j => {
            b.value = j
        },
        fe = () => {
            const {
                lotteryList: j,
                lotteryTab: tt,
                timeIndex: mt,
                tabId: Tt,
                betPay: Pt,
                betType: xt,
                betQuantity: Qt,
                betAmount: Et,
                dupleList: Ut,
                totalAmount: se,
                balance: De
            } = l;
            if (se > De) return Ot(i("wfDesc3"));
            if (Qt / j.length > 7e3) return Ot(i("d4BetTip", [7e3]));
            if (!b.value) return Ot(i("agreePresaleRules"));
            let me = {};
            me.type = j, me.gameType = Pt;
            let He = "";
            Tt === 1 ? He = r.value : He = Ut.map(Oe => Oe.list.sort((Se, ni) => Se - ni).join(",")).join("|"), me.betContent = He, me.betType = xt, me.betMethod = Tt, me.betNumber = Qt, me.multiple = Number(g.value), me.amount = Et, me.issueNumber = j.map(Oe => {
                const Se = tt[mt].games.find(ni => ni.type === Oe);
                return Se == null ? void 0 : Se.issueNumber
            }), u.value = !1, mi(me), ti()
        },
        ti = () => {
            setTimeout(() => {
                Ui.value = !1
            }, 1500)
        },
        ye = async () => {
            const j = await lt(sn());
            j != null && j.data && (l.balance = (j == null ? void 0 : j.data.amount) || 0)
        },
        Di = async () => {
            const j = await lt(Po());
            j != null && j.data && (l.multipleList = (j == null ? void 0 : j.data.betMultiplier) || [], l.betAmountList = (j == null ? void 0 : j.data.betAmount) || [], l.betTypeList = (j == null ? void 0 : j.data.betType) || [], l.betPayList = (j == null ? void 0 : j.data.gameType) || [], l.betAmount = (j == null ? void 0 : j.data.betAmount[0]) || 0)
        },
        Xt = async () => {
            o(!0);
            const j = await lt(Do());
            j != null && j.data && (l.timeVal = j.data[l.timeIndex].date, l.lotteryTab = (j == null ? void 0 : j.data) || [], yi(j.serviceNowTime)), o(!1)
        },
        yi = j => {
            const {
                lotteryTab: tt,
                timeIndex: mt
            } = l, Pt = tt[mt].games.map(Ut => Ut.stopTime).map(Ut => new Date(Ut)), xt = new Date(Math.min(...Pt)), Qt = oe(xt).format("YYYY-MM-DD HH:mm:ss"), Et = oe(Qt).diff(oe(j));
            Ft(Et / 1e3)
        },
        Ft = j => {
            l.stopTime = setInterval(() => {
                j > 0 ? j-- : (At(1), clearInterval(l.stopTime), Xt())
            }, 1e3)
        },
        mi = async j => {
            const tt = await lt(Oo(j));
            (tt == null ? void 0 : tt.code) === 0 ? (Ui.value = !0, ye(), Wn.value === 1 && Re({
                pageSize: 10,
                pageNo: 1,
                type: 0,
                date: oe(new Date).format("YYYY-MM-DD") + " 00:00:00"
            }), ti()) : Xt(), At(1)
        },
        Pe = async () => {
            o(!0), p.value.length = 0;
            const j = await lt(qo());
            j != null && j.data && (j == null || j.data.forEach(tt => {
                let mt = [],
                    Tt = [],
                    Pt = [];
                tt.items.forEach(xt => {
                    xt.playId.split("_").length == 1 ? Pt.push({ ...xt,
                        code: xt.playId
                    }) : (xt.playId.split("_")[0] == "1" && mt.push({ ...xt,
                        code: xt.playId.split("_")[1]
                    }), xt.playId.split("_")[0] == "2" && Tt.push({ ...xt,
                        code: xt.playId.split("_")[1]
                    }))
                }), p.value.push({
                    playTypeId: tt.playTypeId,
                    playTypeTitle: tt.playTypeTitle,
                    lists: [{
                        type: 1,
                        list: mt
                    }, {
                        type: 2,
                        list: Tt
                    }, {
                        type: 3,
                        list: Pt
                    }]
                })
            })), o(!1)
        },
        ei = async () => {
            if (Ti.value) return;
            o(!0);
            const j = await lt(Eo());
            j != null && j.data && (Ti.value = j.data.map(tt => (tt.typeName = i(`d4LType${tt.typeId}`), tt)), Ti.value.unshift({
                typeId: 0,
                typeName: i("all")
            })), o(!1)
        },
        Re = async j => {
            o(!0);
            const tt = await lt(jo(j));
            tt != null && tt.data && (Vn.value = (tt == null ? void 0 : tt.data) || {}), o(!1)
        },
        ii = async () => {
            o(!0);
            const j = await lt(Ho());
            j != null && j.data && (s.value = (j == null ? void 0 : j.data) || []), o(!1)
        },
        je = async j => {
            o(!0);
            const tt = await lt(Wo(j));
            tt && (_.value = (tt == null ? void 0 : tt.data) || {}), o(!1)
        },
        Ue = async j => {
            const tt = await lt(Vo(j));
            return new Promise(async (mt, Tt) => {
                tt ? mt(tt) : Tt(tt)
            })
        };
    return Ve(() => {
        clearInterval(l.stopTime)
    }), {
        tabList: m,
        getTimeWeek: ot,
        onTime: Z,
        lotterTab: _t,
        onTab: Bt,
        getClear: At,
        onRoll: yt,
        getInput: $t,
        getBlur: Mt,
        onBetType: et,
        onBetpay: at,
        onAmount: Q,
        onClickBet: Ae,
        addNumber: Ne,
        allAddnum: ie,
        onStepper: Ie,
        changeStep: he,
        onMltiple: Ct,
        checkboxChange: Je,
        onBet: fe,
        getWinsUserAmount: ye,
        getGameConfig: Di,
        getGameIssue: Xt,
        getOddsList: Pe,
        getTypeList: ei,
        getMy4DHistory: Re,
        get4DResult: ii,
        gameResultByType: je,
        gameCancelOrder: Ue,
        gameListIndex: Wn,
        timeVal: w,
        lotteryTab: h,
        timeIndex: y,
        lotteryList: f,
        timeShow: Hn,
        betShow: u,
        tabId: N,
        rollNum: L,
        banbetpay: D,
        num: r,
        betType: k,
        betTypeList: $,
        betPay: T,
        betPayList: R,
        count: z,
        totalAmount: I,
        betQuantity: S,
        allActive: V,
        dupleList: P,
        countVal: g,
        checked: b,
        preSaleRule: d,
        multipleList: F,
        betAmountList: nt,
        duplex: ut,
        balance: ct,
        promptShow: Ui,
        oddsList: p,
        typeList: Ti,
        myHistory: Vn,
        newGameResult: s,
        gameResultByTypeO: _
    }
}
const xu = {
        key: 0,
        class: "resultBox"
    },
    Iu = {
        class: "r123"
    },
    Ru = {
        class: "r"
    },
    Su = {
        class: "num"
    },
    Bu = {
        class: "r"
    },
    Mu = {
        class: "num"
    },
    Gu = {
        class: "r"
    },
    Au = {
        class: "num"
    },
    Pu = {
        class: "title"
    },
    Du = {
        class: "rOther"
    },
    Ou = {
        class: "title"
    },
    qu = {
        class: "rOther"
    },
    Eu = U({
        __name: "showResult",
        props: {
            data: {
                type: null,
                required: !1
            }
        },
        setup(l) {
            return (i, o) => {
                var r, g, b, d, u;
                return i.data ? (n(), a("div", xu, [t("div", Iu, [t("div", Ru, [t("div", Su, [(n(!0), a(B, null, G((r = i.data) == null ? void 0 : r.firstPrize.split(""), (p, s) => (n(), a("span", {
                    key: s
                }, e(p), 1))), 128))]), t("p", null, e(i.$t("d4gameType3")), 1)]), t("div", Bu, [t("div", Mu, [(n(!0), a(B, null, G((g = i.data) == null ? void 0 : g.secondPrize.split(""), (p, s) => (n(), a("span", {
                    key: s
                }, e(p), 1))), 128))]), t("p", null, e(i.$t("d4gameType4")), 1)]), t("div", Gu, [t("div", Au, [(n(!0), a(B, null, G((b = i.data) == null ? void 0 : b.thirdPrize.split(""), (p, s) => (n(), a("span", {
                    key: s
                }, e(p), 1))), 128))]), t("p", null, e(i.$t("d4gameType5")), 1)])]), t("div", Pu, e(i.$t("d4gameType6")), 1), t("div", Du, [(n(!0), a(B, null, G((d = i.data) == null ? void 0 : d.specialPrize.split(","), (p, s) => (n(), a("span", {
                    key: s
                }, e(p), 1))), 128))]), t("div", Ou, e(i.$t("d4gameType7")), 1), t("div", qu, [(n(!0), a(B, null, G((u = i.data) == null ? void 0 : u.consolationPrize.split(","), (p, s) => (n(), a("span", {
                    key: s
                }, e(p), 1))), 128))])])) : C("v-if", !0)
            }
        }
    });
const un = K(Eu, [
        ["__scopeId", "data-v-fd6be9e5"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/4D/showResult.vue"]
    ]),
    Ge = l => (Rt("data-v-aec2245d"), l = l(), St(), l),
    ju = {
        key: 0,
        class: "gameBox"
    },
    Hu = {
        class: "items"
    },
    Wu = ["onClick"],
    Vu = {
        class: "left"
    },
    Fu = {
        class: "time"
    },
    Uu = {
        class: "right"
    },
    Ku = {
        key: 0,
        class: "info"
    },
    Xu = {
        class: "order"
    },
    Qu = ["onClick"],
    Yu = {
        class: "copy"
    },
    Zu = Ge(() => t("div", {
        class: "line"
    }, null, -1)),
    Ju = ["onClick"],
    td = {
        class: "copy"
    },
    ed = Ge(() => t("div", {
        class: "line"
    }, null, -1)),
    id = {
        class: "li"
    },
    nd = Ge(() => t("div", {
        class: "line"
    }, null, -1)),
    ad = {
        class: "li"
    },
    od = Ge(() => t("div", {
        class: "line"
    }, null, -1)),
    sd = {
        class: "li"
    },
    ld = Ge(() => t("div", {
        class: "line"
    }, null, -1)),
    cd = {
        class: "li"
    },
    rd = Ge(() => t("div", {
        class: "line"
    }, null, -1)),
    ud = {
        class: "li"
    },
    dd = Ge(() => t("div", {
        class: "line"
    }, null, -1)),
    pd = {
        class: "li"
    },
    gd = {
        class: "type"
    },
    bd = Ge(() => t("div", {
        class: "line1"
    }, [t("p")], -1)),
    md = {
        class: "order"
    },
    vd = {
        class: "li"
    },
    _d = {
        class: "numTit"
    },
    kd = {
        class: "num type"
    },
    hd = {
        class: "li"
    },
    fd = {
        class: "numTit"
    },
    yd = {
        class: "num select"
    },
    $d = {
        class: "n"
    },
    wd = {
        class: "li"
    },
    Td = Ge(() => t("div", {
        class: "line"
    }, null, -1)),
    Cd = {
        class: "li"
    },
    Nd = {
        key: 1
    },
    Ld = Ge(() => t("div", {
        class: "line"
    }, null, -1)),
    zd = {
        class: "li"
    },
    xd = {
        class: "reTitle"
    },
    Id = ["onClick"],
    Rd = {
        class: "foot"
    },
    Sd = {
        class: "page"
    },
    Bd = U({
        __name: "showGame",
        props: {
            pageQuery: {
                type: Object,
                required: !0
            }
        },
        emits: ["update:pageQuery"],
        setup(l, {
            emit: i
        }) {
            const o = l,
                {
                    pageQuery: r
                } = Jn(o, i),
                {
                    gameCancelOrder: g,
                    myHistory: b,
                    tabList: d,
                    getMy4DHistory: u
                } = di(),
                {
                    t: p
                } = kt(),
                s = v(!1),
                _ = v(""),
                m = v(-1);

            function w(k) {
                switch (k) {
                    case 1:
                        return p("bettingResultState1");
                    case 2:
                        return p("bettingResultState3");
                    case 3:
                        return p("hasWon");
                    case 4:
                        return p("xosoTxt74");
                    case 5:
                        return p("xosoTxt75");
                    case 6:
                        return p("xosoTxt76");
                    default:
                        return k
                }
            }
            const y = () => {
                    r.value.pageNo--, m.value = -1, u(r.value)
                },
                f = () => {
                    r.value.pageNo++, m.value = -1, u(r.value)
                },
                h = k => {
                    m.value === k ? m.value = -1 : m.value = k
                };

            function N(k) {
                s.value = !0, _.value = k
            }

            function L() {
                s.value = !1, g({
                    orderNumber: _.value
                }).then(k => {
                    k && (an(p("xosoTxt96")), u(r.value))
                }).catch(k => {})
            }
            return (k, $) => {
                var R, z, I;
                const T = W("van-icon");
                return n(), a(B, null, [((R = c(b)) == null ? void 0 : R.list.length) > 0 ? (n(), a("div", ju, [t("div", Hu, [(n(!0), a(B, null, G(c(b).list, (S, D) => (n(), a("div", {
                    class: M(["itemBox", {
                        active: m.value === D
                    }])
                }, [t("div", {
                    class: "item",
                    onClick: P => h(D)
                }, [t("div", Vu, [t("div", {
                    class: M(["name", {
                        bold: m.value === D
                    }])
                }, e(k.$t(`d4LType${S.type}`)), 3), t("div", Fu, e(S.createTime), 1)]), t("div", Uu, [t("div", {
                    class: M(["state", `state${S.state}`])
                }, e(w(S.state)), 3), [2, 3].includes(S.state) ? (n(), a("div", {
                    key: 0,
                    class: M(["amount", S.state == 3 ? "green" : "red"])
                }, e(S.profitAmount), 3)) : C("v-if", !0)])], 8, Wu), m.value === D ? (n(), a("div", Ku, [t("div", Xu, [t("div", {
                    class: "li",
                    onClick: P => c(We)(S.orderNumber)
                }, [t("span", null, e(k.$t("orderNo")), 1), t("h6", Yu, e(S.orderNumber), 1)], 8, Qu), Zu, t("div", {
                    class: "li",
                    onClick: P => c(We)(S.issueNumber)
                }, [t("span", null, e(k.$t("betNumber")), 1), t("h6", td, e(S.issueNumber), 1)], 8, Ju), ed, t("div", id, [t("span", null, e(k.$t("ColorSpecies")), 1), t("h6", null, e(k.$t(`d4LType${S.type}`)), 1)]), nd, t("div", ad, [t("span", null, e(k.$t("gamePlay")), 1), t("h6", null, e(k.$t(`d4gamePay${S.gameType}`)), 1)]), od, t("div", sd, [t("span", null, e(k.$t("betAmounts")), 1), t("h6", null, e(c(It)(S.amount)), 1)]), ld, t("div", cd, [t("span", null, e(k.$t("xosoTxt79")), 1), t("h6", null, e(S.betNumber) + " " + e(k.$t("note")), 1)]), rd, t("div", ud, [t("span", null, e(k.$t("multiple")), 1), t("h6", null, e(S.multiple), 1)]), dd, t("div", pd, [t("span", null, e(k.$t("xosoTxt78")), 1)]), t("div", gd, [(n(!0), a(B, null, G(S.betType.split(","), P => (n(), a("span", null, e(k.$t(`d4gameType${P}`)), 1))), 256))]), bd]), t("div", md, [S.betMethod == 1 ? (n(), a(B, {
                    key: 0
                }, [t("div", vd, [t("span", _d, e(k.$t("bettingnumber")) + " (" + e(k.$t("EnterBet")) + ") ", 1)]), t("div", kd, [t("span", null, e(S.betContent), 1)])], 64)) : C("v-if", !0), S.betMethod == 2 ? (n(), a(B, {
                    key: 1
                }, [t("div", hd, [t("span", fd, e(k.$t("bettingnumber")) + " (" + e(k.$t("SelectBet")) + ")", 1)]), t("div", yd, [(n(!0), a(B, null, G(S.betContent.split("|"), (P, V) => (n(), a("div", {
                    key: V
                }, [t("h6", null, e(c(d)[V].name), 1), t("div", $d, [(n(!0), a(B, null, G(P.split(","), (F, nt) => (n(), a("span", {
                    key: nt
                }, e(F), 1))), 128))])]))), 128))])], 64)) : C("v-if", !0), t("div", wd, [t("span", null, e(k.$t("statusMay")), 1), t("h6", {
                    class: M(["stateInfo", `state${S.state}`])
                }, e(w(S.state)), 3)]), Td, t("div", Cd, [t("span", null, e(k.$t("winOrLose")), 1), [2, 3].includes(S.state) ? (n(), a("h6", {
                    key: 0,
                    class: M(["amountInfo", S.state == 3 ? "green" : "red"])
                }, e(S.profitAmount), 3)) : (n(), a("h6", Nd, "--"))]), Ld, t("div", zd, [t("span", null, e(k.$t("createTime")), 1), t("h6", null, e(S.createTime), 1)])]), [2, 3].includes(S.state) ? (n(), a(B, {
                    key: 0
                }, [t("div", xd, e(k.$t("betResult")), 1), x(un, {
                    data: S
                }, null, 8, ["data"])], 64)) : C("v-if", !0), S.state == 1 ? (n(), a("div", {
                    key: 1,
                    class: "btn",
                    onClick: P => N(S.orderNumber)
                }, e(k.$t("xosoTxt82")), 9, Id)) : C("v-if", !0)])) : C("v-if", !0)], 2))), 256))]), t("div", Rd, [t("div", {
                    class: M(["previous", {
                        disabled: c(b).pageNo <= 1
                    }]),
                    onClick: y
                }, [x(T, {
                    name: "arrow-left",
                    size: "20"
                })], 2), t("div", Sd, e(c(b).pageNo) + "/" + e((z = c(b)) == null ? void 0 : z.totalPage), 1), t("div", {
                    class: M(["next", {
                        disabled: c(b).pageNo >= ((I = c(b)) == null ? void 0 : I.totalPage)
                    }]),
                    onClick: f
                }, [x(T, {
                    name: "arrow",
                    size: "20"
                })], 2)])])) : (n(), it(de, {
                    key: 1
                })), x(xe, {
                    show: s.value,
                    "onUpdate:show": $[0] || ($[0] = S => s.value = S),
                    title: k.$t("xosoTxt99"),
                    onConfirm: $[1] || ($[1] = S => L())
                }, null, 8, ["show", "title"])], 64)
            }
        }
    });
const Ca = K(Bd, [
        ["__scopeId", "data-v-aec2245d"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/4D/showGame.vue"]
    ]),
    Md = {
        class: "gamelist"
    },
    Gd = {
        class: "tab"
    },
    Ad = {
        class: "con"
    },
    Pd = {
        class: "head"
    },
    Dd = ["src"],
    Od = U({
        __name: "gameList",
        setup(l) {
            const i = ht(),
                {
                    gameListIndex: o,
                    newGameResult: r,
                    get4DResult: g,
                    getMy4DHistory: b
                } = di();

            function d(_) {
                o.value = _, s()
            }

            function u() {
                o.value == 0 ? i.push({
                    name: "AllLotteryGames-4DLotteryResults"
                }) : o.value == 1 && i.push({
                    name: "AllLotteryGames-4DmyGame"
                })
            }
            const p = Zt({
                type: 0,
                date: oe(new Date).format("YYYY-MM-DD 00:00:00"),
                pageSize: 10,
                pageNo: 1
            });

            function s() {
                o.value == 0 ? g() : b(p)
            }
            return zt(() => {
                s()
            }), (_, m) => {
                var w;
                return n(), a("div", Md, [t("div", Gd, [t("div", {
                    class: M({
                        active: c(o) == 0
                    }),
                    onClick: m[0] || (m[0] = y => d(0))
                }, e(_.$t("d4Tip1")), 3), t("div", {
                    class: M({
                        active: c(o) == 1
                    }),
                    onClick: m[1] || (m[1] = y => d(1))
                }, e(_.$t("myGame")), 3)]), t("div", Ad, [t("div", {
                    class: "more",
                    onClick: u
                }, e(_.$t("more")), 1), c(o) == 0 ? (n(), a(B, {
                    key: 0
                }, [(n(!0), a(B, null, G(c(r), y => (n(), a("div", {
                    class: "items",
                    key: y.issueNumber
                }, [t("div", Pd, [t("img", {
                    src: y.typeImg,
                    alt: ""
                }, null, 8, Dd), t("h1", null, e(_.$t(`d4LType${y.type}`)), 1), t("p", null, e(y.openDate) + " " + e(_.$t(`${c(oe)(y.openDate).format("dddd")}`)), 1)]), x(un, {
                    data: y
                }, null, 8, ["data"])]))), 128)), ((w = c(r)) == null ? void 0 : w.length) == 0 ? (n(), it(de, {
                    key: 0
                })) : C("v-if", !0)], 64)) : C("v-if", !0), c(o) == 1 ? (n(), it(Ca, {
                    key: 1,
                    pageQuery: p,
                    "onUpdate:pageQuery": m[2] || (m[2] = y => p = y)
                }, null, 8, ["pageQuery"])) : C("v-if", !0)])])
            }
        }
    });
const qd = K(Od, [
        ["__scopeId", "data-v-e3178c7d"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/4D/components/gameList.vue"]
    ]),
    Ed = {
        class: "x-4d"
    },
    jd = {
        class: "x-4d-more"
    },
    Hd = ["src"],
    Wd = ["src"],
    Vd = {
        class: "x-4d-body"
    },
    Fd = {
        class: "x-4d-tab"
    },
    Ud = {
        class: "x-4d-content"
    },
    Kd = {
        key: 0,
        class: "enter"
    },
    Xd = ["placeholder"],
    Qd = ["placeholder"],
    Yd = {
        class: "box"
    },
    Zd = ["src"],
    Jd = {
        class: "PreSale"
    },
    tp = {
        class: "head"
    },
    ep = {
        class: "body"
    },
    ip = {
        class: "foot"
    },
    np = U({
        __name: "index",
        setup(l) {
            const {
                t: i
            } = kt(), o = ht(), {
                getTimeWeek: r,
                onTime: g,
                lotterTab: b,
                onTab: d,
                getClear: u,
                onRoll: p,
                getInput: s,
                getBlur: _,
                onBetType: m,
                onBetpay: w,
                onAmount: y,
                onClickBet: f,
                addNumber: h,
                allAddnum: N,
                onStepper: L,
                changeStep: k,
                onMltiple: $,
                checkboxChange: T,
                onBet: R,
                getWinsUserAmount: z,
                getGameConfig: I,
                getGameIssue: S,
                tabList: D,
                timeVal: P,
                lotteryTab: V,
                timeIndex: F,
                lotteryList: nt,
                timeShow: ut,
                betShow: ct,
                tabId: ot,
                num: Z,
                rollNum: _t,
                banbetpay: Bt,
                betType: At,
                betTypeList: dt,
                betPay: yt,
                betPayList: $t,
                count: Mt,
                totalAmount: Gt,
                betQuantity: gt,
                dupleList: et,
                allActive: at,
                countVal: Q,
                checked: Y,
                preSaleRule: H,
                multipleList: wt,
                betAmountList: jt,
                duplex: ie,
                balance: Ne,
                promptShow: re
            } = di();
            return zt(() => {
                z(), I(), S()
            }), (Le, bt) => {
                const Ae = W("NavBar"),
                    Ie = W("van-button"),
                    he = W("van-popup");
                return n(), a("div", Ed, [x(Ae, {
                    "left-arrow": "",
                    onClickLeft: bt[2] || (bt[2] = Ct => c(o).go(-1)),
                    "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)",
                    title: "4D"
                }, {
                    right: A(() => [t("div", jd, [t("img", {
                        class: "img",
                        src: c(Vt)("home/AllLotteryGames/4D", "howpay"),
                        alt: "",
                        onClick: bt[0] || (bt[0] = () => c(o).push({
                            name: "AllLotteryGames-4DPlay"
                        }))
                    }, null, 8, Hd), t("img", {
                        class: "img",
                        src: c(Vt)("home/AllLotteryGames/4D", "odds"),
                        alt: "",
                        onClick: bt[1] || (bt[1] = () => c(o).push({
                            name: "AllLotteryGames-4DOdds"
                        }))
                    }, null, 8, Wd)])]),
                    _: 1
                }), C(" 头部彩种 "), x(Yc, {
                    onOnTime: c(g),
                    "lottery-tab": c(V),
                    "time-index": c(F),
                    onOnLotteryTab: c(b),
                    "time-week": c(r),
                    "lottery-list": c(nt),
                    modelValue: c(ut),
                    "onUpdate:modelValue": bt[3] || (bt[3] = Ct => ce(ut) ? ut.value = Ct : null),
                    "time-val": c(P)
                }, null, 8, ["onOnTime", "lottery-tab", "time-index", "onOnLotteryTab", "time-week", "lottery-list", "modelValue", "time-val"]), t("div", Vd, [t("div", Fd, [t("div", {
                    onClick: bt[4] || (bt[4] = Ct => c(d)(1)),
                    class: M([c(ot) == 1 ? "active" : ""])
                }, e(c(i)("EnterBet")), 3), t("div", {
                    onClick: bt[5] || (bt[5] = Ct => c(d)(2)),
                    class: M([c(ot) == 2 ? "active" : ""])
                }, e(c(i)("SelectBet")), 3)]), t("div", Ud, [c(ot) === 1 ? (n(), a("div", Kd, [c(yt) != 5 ? ft((n(), a("input", {
                    key: 0,
                    class: M(c(Z).length > 0 ? "input fz24" : "input"),
                    oninput: "value=value.replace(/\\D/g,'')",
                    "onUpdate:modelValue": bt[6] || (bt[6] = Ct => ce(Z) ? Z.value = Ct : null),
                    type: "text",
                    placeholder: c(i)("PenterNumber"),
                    maxlength: "4",
                    onInput: bt[7] || (bt[7] = (...Ct) => c(s) && c(s)(...Ct)),
                    onBlur: bt[8] || (bt[8] = (...Ct) => c(_) && c(_)(...Ct))
                }, null, 42, Xd)), [
                    [Zi, c(Z)]
                ]) : ft((n(), a("input", {
                    key: 1,
                    class: M(c(Z).length > 0 ? "input fz24" : "input"),
                    oninput: "value=value.replace(/[^A-Z0-9]/g,'').toUpperCase()",
                    "onUpdate:modelValue": bt[9] || (bt[9] = Ct => ce(Z) ? Z.value = Ct : null),
                    type: "text",
                    placeholder: c(i)("PenterNumber"),
                    maxlength: "4",
                    onInput: bt[10] || (bt[10] = (...Ct) => c(s) && c(s)(...Ct)),
                    onBlur: bt[11] || (bt[11] = (...Ct) => c(_) && c(_)(...Ct))
                }, null, 42, Qd)), [
                    [Zi, c(Z)]
                ]), ft(x(Ie, {
                    class: "btn",
                    onClick: c(p)
                }, {
                    default: A(() => [E("ROll")]),
                    _: 1
                }, 8, ["onClick"]), [
                    [te, c($t).includes(5)]
                ])])) : C("v-if", !0), C(" 投注类型 "), x(ar, {
                    class: "mb30",
                    "bet-type": c(At),
                    "bet-type-list": c(dt),
                    onOnBetType: c(m)
                }, null, 8, ["bet-type", "bet-type-list", "onOnBetType"]), C(" 选择投注 下注盘 "), c(ot) === 2 ? (n(), it(Nr, {
                    key: 1,
                    "tab-list": c(D),
                    "all-active": c(at),
                    "num-list": c(et),
                    onAddNumber: c(h),
                    onAllAddnum: c(N)
                }, null, 8, ["tab-list", "all-active", "num-list", "onAddNumber", "onAllAddnum"])) : C("v-if", !0), C(" 玩法 "), x(dr, {
                    class: "mb30",
                    "roll-num": c(_t),
                    "ban-bet-pay": c(Bt),
                    "bet-pay-list": c($t),
                    "bet-pay-id": c(yt),
                    duplex: c(ie),
                    onOnBetpay: c(w)
                }, null, 8, ["roll-num", "ban-bet-pay", "bet-pay-list", "bet-pay-id", "duplex", "onOnBetpay"]), C(" 投注金额 "), x(_r, {
                    count: c(Mt),
                    list: c(jt),
                    onOnAmount: c(y)
                }, null, 8, ["count", "list", "onOnAmount"])])]), C(" 开奖记录 && 我的比赛记录 "), x(qd), x(Rr, {
                    "total-amount": c(Gt),
                    "bet-quantity": c(gt),
                    onOnBet: c(f)
                }, null, 8, ["total-amount", "bet-quantity", "onOnBet"]), C(" 投注弹窗 "), x(uu, {
                    betShow: c(ct),
                    "onUpdate:betShow": bt[12] || (bt[12] = Ct => ce(ct) ? ct.value = Ct : null),
                    "bet-quantity": c(gt),
                    "lottery-tab": c(V),
                    "time-index": c(F),
                    "total-amount": c(Gt),
                    balance: c(Ne),
                    "lottery-list": c(nt),
                    "bet-type": c(At),
                    "multiple-list": c(wt),
                    "count-val": c(Q),
                    "onUpdate:countVal": bt[13] || (bt[13] = Ct => ce(Q) ? Q.value = Ct : null),
                    checked: c(Y),
                    "onUpdate:checked": bt[14] || (bt[14] = Ct => ce(Y) ? Y.value = Ct : null),
                    "pre-sale-rule": c(H),
                    "onUpdate:preSaleRule": bt[15] || (bt[15] = Ct => ce(H) ? H.value = Ct : null),
                    onCheckboxChange: c(T),
                    onOnCancel: bt[16] || (bt[16] = Ct => ct.value = !1),
                    onGetClear: c(u),
                    onOnStepper: c(L),
                    onOnMltiple: c($),
                    onChangeStep: c(k),
                    onOnBet: c(R)
                }, {
                    default: A(() => [x(zu, {
                        num: c(Z),
                        "tab-id": c(ot),
                        "bet-pay": c(yt),
                        "duple-list": c(et),
                        "tab-list": c(D)
                    }, null, 8, ["num", "tab-id", "bet-pay", "duple-list", "tab-list"])]),
                    _: 1
                }, 8, ["betShow", "bet-quantity", "lottery-tab", "time-index", "total-amount", "balance", "lottery-list", "bet-type", "multiple-list", "count-val", "checked", "pre-sale-rule", "onCheckboxChange", "onGetClear", "onOnStepper", "onOnMltiple", "onChangeStep", "onOnBet"]), C(" 投注成功提示 "), x(he, {
                    show: c(re),
                    "onUpdate:show": bt[17] || (bt[17] = Ct => ce(re) ? re.value = Ct : null),
                    position: "center",
                    class: "x-4d-prompt",
                    style: {
                        borderRadius: "10px",
                        width: "8rem",
                        height: "80px"
                    }
                }, {
                    default: A(() => [t("div", Yd, [t("img", {
                        src: c(qt)("home/AllLotteryGames/4D", "success")
                    }, null, 8, Zd), E(" " + e(Le.$t("code402")), 1)])]),
                    _: 1
                }, 8, ["show"]), C(" 预售规则 "), x(he, {
                    show: c(H),
                    "onUpdate:show": bt[19] || (bt[19] = Ct => ce(H) ? H.value = Ct : null),
                    class: "PreSaleRule",
                    "close-on-click-overlay": !1,
                    round: ""
                }, {
                    default: A(() => [t("div", Jd, [t("div", tp, e(c(i)("presaleRules")), 1), t("div", ep, e(Le.$t("betPopTXT")), 1), t("div", ip, [t("div", {
                        class: "btn",
                        onClick: bt[18] || (bt[18] = Ct => H.value = !1)
                    }, e(c(i)("iKonw")), 1)])])]),
                    _: 1
                }, 8, ["show"]), C(` <van-popup v-model:show="preSaleRule" position="center" class="x-4d-prompt" :style="{ borderRadius: '10px',width:'8rem',height:'80px' }">
            <div class="box">
                
                预售规则
            </div>
        </van-popup> `)])
            }
        }
    });
const ap = K(np, [
        ["__scopeId", "data-v-c4174cb0"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/4D/index.vue"]
    ]),
    oI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ap
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    op = {
        class: "LR"
    },
    sp = {
        class: "lotterys"
    },
    lp = ["onClick"],
    cp = {
        alt: ""
    },
    rp = {
        class: "date"
    },
    up = {
        class: "dateBox"
    },
    dp = {
        class: "result"
    },
    pp = U({
        __name: "index",
        setup(l) {
            const {
                typeList: i,
                getTypeList: o,
                gameResultByType: r,
                gameResultByTypeO: g
            } = di();
            o();
            const {
                t: b
            } = kt(), d = ht(), u = v(0), p = J(() => i.value ? i.value.slice(1) : []), {
                minDate: s,
                maxDate: _
            } = ia(0), m = oe(_).startOf("day"), w = v(!1), y = Zt({
                type: 0,
                date: m.format("YYYY-MM-DD")
            });
            Dt(() => p, () => {
                p.value.length > 0 && (y.type = p.value[0].typeId, r(y))
            }, {
                deep: !0,
                immediate: !0
            });
            const f = J(() => oe(y.date).format("YYYY-MM-DD") + " " + b(`${oe(y.date).format("dddd")}`)),
                h = L => {
                    w.value = !1, y.date = oe(L).format("YYYY-MM-DD"), r(y)
                };

            function N(L, k) {
                u.value = k, y.type = L.typeId, r(y)
            }
            return (L, k) => {
                const $ = W("NavBar"),
                    T = W("ArSelect"),
                    R = W("van-calendar"),
                    z = Jt("lazy");
                return n(), a("div", op, [x($, {
                    "left-arrow": "",
                    onClickLeft: k[0] || (k[0] = () => c(d).back()),
                    title: L.$t("d4Tip2")
                }, null, 8, ["title"]), t("div", sp, [(n(!0), a(B, null, G(p.value, (I, S) => (n(), a("div", {
                    class: M(["lottery", {
                        active: u.value === S
                    }]),
                    onClick: D => N(I, S),
                    key: S
                }, [ft(t("img", cp, null, 512), [
                    [z, I.typeImg]
                ])], 10, lp))), 128))]), t("div", rp, [t("div", up, [x(T, {
                    onClickSelect: k[1] || (k[1] = I => w.value = !0),
                    selectName: f.value
                }, null, 8, ["selectName"])])]), t("div", dp, [t("h1", null, e(L.$t("betResult")), 1), JSON.stringify(c(g)) !== "{}" ? (n(), it(un, {
                    key: 0,
                    data: c(g)
                }, null, 8, ["data"])) : (n(), it(de, {
                    key: 1
                }))]), x(R, {
                    show: w.value,
                    "onUpdate:show": k[2] || (k[2] = I => w.value = I),
                    onCancel: k[3] || (k[3] = () => w.value = !1),
                    onConfirm: h,
                    "min-date": c(s),
                    "max-date": c(_)
                }, null, 8, ["show", "min-date", "max-date"])])
            }
        }
    });
const gp = K(pp, [
        ["__scopeId", "data-v-d1d6b410"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/4DLotteryResults/index.vue"]
    ]),
    sI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: gp
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    pi = l => (Rt("data-v-789ad0bd"), l = l(), St(), l),
    bp = {
        class: "oddsBox"
    },
    mp = {
        class: "title"
    },
    vp = {
        class: "tabHead"
    },
    _p = {
        class: "tabCon1"
    },
    kp = {
        class: "item"
    },
    hp = pi(() => t("div", null, null, -1)),
    fp = pi(() => t("div", null, null, -1)),
    yp = [hp, fp],
    $p = {
        class: "tabHead h2"
    },
    wp = {
        class: "tabCon2"
    },
    Tp = {
        class: "tabHead h2"
    },
    Cp = {
        key: 0
    },
    Np = {
        key: 1
    },
    Lp = {
        key: 2
    },
    zp = pi(() => t("br", null, null, -1)),
    xp = pi(() => t("br", null, null, -1)),
    Ip = pi(() => t("br", null, null, -1)),
    Rp = pi(() => t("br", null, null, -1)),
    Sp = {
        class: "tabCon1 c2"
    },
    Bp = U({
        __name: "index",
        setup(l) {
            const {
                t: i
            } = kt(), o = ht(), {
                getOddsList: r,
                oddsList: g
            } = di();
            return zt(() => {
                r()
            }), (b, d) => {
                const u = W("NavBar");
                return n(), a("div", bp, [x(u, {
                    "left-arrow": "",
                    title: c(i)("odds"),
                    onClickLeft: d[0] || (d[0] = () => c(o).back())
                }, null, 8, ["title"]), (n(!0), a(B, null, G(c(g), p => {
                    var s, _, m, w, y;
                    return n(), a("div", {
                        class: "items",
                        key: p.playTypeId
                    }, [t("div", mp, e(c(i)(`d4gamePay${p.playTypeId}`)), 1), p.playTypeId != 2 ? (n(), a(B, {
                        key: 0
                    }, [t("div", vp, [t("span", null, e(c(i)("d4gameType1")), 1), t("span", null, e(c(i)("d4gameType2")), 1)]), t("div", _p, [(n(!0), a(B, null, G((s = p.lists) == null ? void 0 : s.filter(f => [1, 2].includes(f.type)), f => (n(), a("div", {
                        key: f.type
                    }, [(n(!0), a(B, null, G(f.list, h => (n(), a("div", {
                        class: "item",
                        key: h.playId
                    }, [t("div", null, e(c(i)(`d4gameType${h.code}`)), 1), t("div", null, e(h.odds > 0 ? h.odds : h.oddsDefault), 1)]))), 128)), f.list.length < 5 ? (n(), a(B, {
                        key: 0
                    }, G(2, h => t("div", kp, yp)), 64)) : C("v-if", !0)]))), 128))]), t("div", $p, [(n(!0), a(B, null, G((m = (_ = p.lists) == null ? void 0 : _.filter(f => [3].includes(f.type))[0]) == null ? void 0 : m.list, f => (n(), a("span", {
                        key: f.playId
                    }, e(c(i)(`d4gameType${f.playId}`)), 1))), 128))]), t("div", wp, [(n(!0), a(B, null, G((y = (w = p.lists) == null ? void 0 : w.filter(f => [3].includes(f.type))[0]) == null ? void 0 : y.list, f => (n(), a("div", {
                        key: f.playId
                    }, e(f.odds > 0 ? f.odds : f.oddsDefault), 1))), 128))])], 64)) : (n(!0), a(B, {
                        key: 1
                    }, G(p.lists, f => (n(), a(B, null, [t("div", Tp, [f.type == 1 ? (n(), a("span", Cp, e(c(i)("d4gameType1")), 1)) : C("v-if", !0), f.type == 2 ? (n(), a("span", Np, e(c(i)("d4gameType2")), 1)) : C("v-if", !0), f.type == 3 ? (n(), a("span", Lp, e(c(i)("d4Tip3")), 1)) : C("v-if", !0), t("span", null, [E(e(c(i)("d4Tip4")), 1), zp, E("24")]), t("span", null, [E(e(c(i)("d4Tip4")), 1), xp, E("12")]), t("span", null, [E(e(c(i)("d4Tip4")), 1), Ip, E("6")]), t("span", null, [E(e(c(i)("d4Tip4")), 1), Rp, E("4")])]), t("div", Sp, [(n(!0), a(B, null, G(f.list, h => (n(), a("div", {
                        class: "itemR item",
                        key: h.playId
                    }, [t("div", null, e(c(i)(`d4gameType${h.code}`)), 1), t("div", null, e(h.odds24 > 0 ? h.odds24 : h.oddsDefault24), 1), t("div", null, e(h.odds12 > 0 ? h.odds12 : h.oddsDefault12), 1), t("div", null, e(h.odds6 > 0 ? h.odds6 : h.oddsDefault6), 1), t("div", null, e(h.odds4 > 0 ? h.odds4 : h.oddsDefault4), 1)]))), 128))])], 64))), 256))])
                }), 128))])
            }
        }
    });
const Mp = K(Bp, [
        ["__scopeId", "data-v-789ad0bd"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/4DOdds/index.vue"]
    ]),
    lI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Mp
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Gp = {
        class: "playBox"
    },
    Ap = {
        class: "con"
    },
    Pp = {
        class: "tip"
    },
    Dp = {
        class: "tip"
    },
    Op = ["innerHTML"],
    qp = {
        class: "txt"
    },
    Ep = {
        key: 0,
        class: "num"
    },
    jp = ["innerHTML"],
    Hp = U({
        __name: "index",
        setup(l) {
            const {
                t: i
            } = kt(), o = ht(), r = v(0), g = v([{
                title: i("d4gamePay1"),
                tip1: i("Play4DTip2"),
                tip2: i("Play4DTip4"),
                txt: {
                    tip1: "[1234]",
                    tip2: "",
                    tip3: [],
                    tip4: i("Play4DTip1", ["1234"])
                }
            }, {
                title: i("d4gamePay5"),
                tip1: i("Play4DTip5"),
                tip2: i("Play4DTip6"),
                txt: {
                    tip1: "[123R]",
                    tip2: i("Play4DTip10", [10]),
                    tip3: ["1230", "1231", "1232", "1233", "1234", "1235", "1236", "1237", "1238", "1239"],
                    tip4: i("Play4DTip1", ["1234"])
                }
            }, {
                title: i("d4gamePay2"),
                tip1: i("Play4DTip7"),
                tip2: i("Play4DTip8"),
                txt: {
                    tip1: "[1122]",
                    tip2: i("Play4DTip11"),
                    tip3: ["1122", "1212", "1221", "2112", "2121", "2211"],
                    tip4: i("Play4DTip1", ["1212"])
                }
            }, {
                title: i("d4gamePay3"),
                tip1: i("Play4DTip9"),
                tip2: i("Play4DTip8"),
                txt: {
                    tip1: "[1122]",
                    tip2: i("Play4DTip10", [6]),
                    tip3: ["1122", "1212", "1221", "2112", "2121", "2211"],
                    tip4: i("Play4DTip1", ["1212"])
                }
            }, {
                title: i("d4gamePay4"),
                tip1: i("Play4DTip3"),
                tip2: i("Play4DTip4"),
                txt: {
                    tip1: "[1234]",
                    tip2: i("Play4DTip10", [2]),
                    tip3: ["1234", "4321"],
                    tip4: i("Play4DTip1", ["1234"])
                }
            }]);
            return (b, d) => {
                const u = W("NavBar"),
                    p = W("van-icon"),
                    s = W("van-tab"),
                    _ = W("van-tabs");
                return n(), a("div", Gp, [x(u, {
                    "left-arrow": "",
                    title: c(i)("lotteryManual"),
                    onClickLeft: d[0] || (d[0] = () => c(o).back())
                }, null, 8, ["title"]), x(_, {
                    active: r.value,
                    "onUpdate:active": d[1] || (d[1] = m => r.value = m),
                    type: "card",
                    "swipe-threshold": 3
                }, {
                    default: A(() => [(n(!0), a(B, null, G(g.value, (m, w) => (n(), it(s, {
                        title: m.title,
                        key: w
                    }, {
                        default: A(() => [t("div", Ap, [t("h1", null, [x(p, {
                            name: "play",
                            class: "icon",
                            size: "20"
                        }), E(e(c(i)("betting")), 1)]), t("div", Pp, e(m.tip1), 1), t("h1", null, [x(p, {
                            name: "play",
                            class: "icon",
                            size: "20"
                        }), E(e(c(i)("winningconditions")), 1)]), t("div", Dp, [t("span", {
                            innerHTML: m.tip2
                        }, null, 8, Op)]), t("div", qp, [t("div", null, e(c(i)("example")), 1), t("div", null, e(c(i)("betting")) + ":   " + e(m.txt.tip1), 1), t("div", null, e(m.txt.tip2), 1), m.txt.tip3.length > 0 ? (n(), a("div", Ep, [(n(!0), a(B, null, G(m.txt.tip3, (y, f) => (n(), a("span", {
                            key: f
                        }, e(y), 1))), 128))])) : C("v-if", !0), t("div", null, [E(e(c(i)("result")) + ":   ", 1), t("span", {
                            innerHTML: m.txt.tip4
                        }, null, 8, jp)])])])]),
                        _: 2
                    }, 1032, ["title"]))), 128))]),
                    _: 1
                }, 8, ["active"])])
            }
        }
    });
const Wp = K(Hp, [
        ["__scopeId", "data-v-fa33b84e"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/4DPlay/index.vue"]
    ]),
    cI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Wp
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Vp = {
        class: "MG"
    },
    Fp = U({
        __name: "index",
        setup(l) {
            const {
                getTypeList: i,
                typeList: o,
                getMy4DHistory: r
            } = di();
            i();
            const {
                t: g
            } = kt(), b = ht(), d = v(!1), u = v(g("all")), p = Zt({
                type: 0,
                date: "",
                pageSize: 20,
                pageNo: 1
            });
            r(p);
            const s = async ({
                selectedOptions: _
            }) => {
                d.value = !1, p.type = _[0].typeId, p.pageNo = 1, u.value = _[0].typeName, r(p)
            };
            return (_, m) => {
                const w = W("NavBar"),
                    y = W("ArSelect"),
                    f = W("van-picker"),
                    h = W("van-popup");
                return n(), a("div", Vp, [x(w, {
                    "left-arrow": "",
                    onClickLeft: m[0] || (m[0] = () => c(b).back()),
                    title: _.$t("xosoTxt73")
                }, null, 8, ["title"]), x(y, {
                    onClickSelect: m[1] || (m[1] = N => d.value = !0),
                    selectName: u.value
                }, null, 8, ["selectName"]), x(Ca, {
                    pageQuery: p,
                    "onUpdate:pageQuery": m[2] || (m[2] = N => p = N)
                }, null, 8, ["pageQuery"]), x(h, {
                    show: d.value,
                    "onUpdate:show": m[4] || (m[4] = N => d.value = N),
                    round: "",
                    position: "bottom"
                }, {
                    default: A(() => [x(f, {
                        "columns-field-names": {
                            text: "typeName",
                            value: "typeId"
                        },
                        columns: c(o),
                        onCancel: m[3] || (m[3] = N => d.value = !1),
                        onConfirm: s
                    }, null, 8, ["columns"])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const Up = K(Fp, [
        ["__scopeId", "data-v-34a342e1"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/4DmyGame/index.vue"]
    ]),
    rI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Up
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Kp = {
        class: "Wallet__C"
    },
    Xp = {
        class: "Wallet__C-balance"
    },
    Qp = {
        class: "Wallet__C-balance-l1"
    },
    Yp = {
        class: "Wallet__C-balance-l2"
    },
    Zp = {
        class: "Wallet__C-balance-l3"
    },
    Jp = U({
        __name: "Wallet",
        setup(l, {
            expose: i
        }) {
            const {
                t: o
            } = kt(), r = v(0), g = async (u = !0) => {
                const p = await lt(sn());
                p && (r.value = (p == null ? void 0 : p.data.amount) || 0, u && _e(o("refreshSuccess")))
            }, b = ht(), d = u => {
                b.push({
                    name: u
                })
            };
            return zt(() => {
                g(!1)
            }), i({
                getWinsUserAmount: g
            }), (u, p) => {
                const s = Jt("throttle-click");
                return n(), a("div", Kp, [t("div", Xp, [t("div", Qp, [ft((n(), a("div", null, [E(e(c(It)(r.value)), 1)])), [
                    [s, {
                        handler: g,
                        wait: 2e3
                    }]
                ])]), t("div", Yp, [t("div", null, e(u.$t("walletBalance")), 1)]), t("div", Zp, [t("div", {
                    onClick: p[0] || (p[0] = _ => d("Withdraw"))
                }, e(u.$t("withdraw")), 1), t("div", {
                    onClick: p[1] || (p[1] = _ => d("Recharge"))
                }, e(u.$t("recharge")), 1)])])])
            }
        }
    });
const Li = K(Jp, [
        ["__scopeId", "data-v-7dd1adab"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/WinGo/Wallet.vue"]
    ]),
    tg = {
        class: "GameList__C"
    },
    eg = ["onClick"],
    ig = ["innerHTML"],
    ng = U({
        __name: "GameList",
        props: {
            gameList: {
                type: null,
                required: !0,
                default: {
                    type: Array,
                    default: () => []
                }
            },
            currentGameIndex: {
                type: null,
                required: !0,
                default: {
                    type: Number,
                    default: 0
                }
            }
        },
        setup(l) {
            const i = l;
            return (o, r) => (n(), a("div", tg, [(n(!0), a(B, null, G(i.gameList, (g, b) => (n(), a("div", {
                key: b,
                class: M(["GameList__C-item", {
                    active: o.currentGameIndex == b
                }]),
                onClick: d => o.$emit("changeGame", b)
            }, [t("div", {
                innerHTML: g.typeName
            }, null, 8, ig)], 10, eg))), 128))]))
        }
    });
const zi = K(ng, [
        ["__scopeId", "data-v-17d56002"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/WinGo/GameList.vue"]
    ]),
    ag = {
        class: "TimeLeft__C-PreSale"
    },
    og = {
        class: "TimeLeft__C-PreSale-head"
    },
    sg = {
        class: "TimeLeft__C-PreSale-body"
    },
    lg = ["innerHTML"],
    cg = {
        class: "TimeLeft__C-PreSale-foot"
    },
    rg = U({
        __name: "rule",
        props: {
            howPlayShow: {
                type: Boolean,
                default: !1
            },
            gamePresentation: {
                type: String,
                default: ""
            }
        },
        emits: ["close"],
        setup(l, {
            emit: i
        }) {
            const o = l,
                r = J({
                    get() {
                        return o.howPlayShow || !1
                    },
                    set(g) {
                        g || i("close")
                    }
                });
            return (g, b) => {
                const d = W("van-popup");
                return n(), a(B, null, [C(" 规则弹层 begin"), x(d, {
                    show: r.value,
                    "onUpdate:show": b[1] || (b[1] = u => r.value = u),
                    "close-on-click-overlay": !1,
                    round: ""
                }, {
                    default: A(() => [t("div", ag, [t("div", og, e(g.$t("winTrxIndicate")), 1), t("div", sg, [t("div", {
                        innerHTML: l.gamePresentation
                    }, null, 8, lg)]), t("div", cg, [t("div", {
                        class: "TimeLeft__C-PreSale-foot-btn",
                        onClick: b[0] || (b[0] = u => i("close"))
                    }, e(g.$t("winTrxClose")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 2112)
            }
        }
    });
const xi = K(rg, [
        ["__scopeId", "data-v-0bba67ea"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/WinGo/rule.vue"]
    ]),
    Na = l => (Rt("data-v-69f351dd"), l = l(), St(), l),
    ug = {
        class: "FDTL__C"
    },
    dg = {
        class: "FDTL__C-l1"
    },
    pg = {
        class: "left"
    },
    gg = Na(() => t("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none"
    }, [t("path", {
        d: "M8.5484 25.8291L8.54089 25.8366L8.53366 25.8444C7.97797 26.4409 7.47942 26.802 7.06631 26.9804C6.65908 27.1562 6.37147 27.1416 6.17169 27.0556C5.96753 26.9677 5.74252 26.7566 5.56263 26.3155C5.38195 25.8725 5.26602 25.2383 5.26602 24.4V9.38666C5.26602 6.69084 5.59509 5.24007 6.36083 4.42157C7.11326 3.6173 8.44055 3.26666 10.9593 3.26666H21.0393C23.5584 3.26666 24.8852 3.61741 25.6358 4.42118C26.3997 5.23909 26.726 6.68929 26.7193 9.38518V9.38666V24.3867C26.7193 25.2254 26.6041 25.8598 26.4242 26.3031C26.2451 26.7444 26.0211 26.9549 25.8182 27.0425C25.6198 27.1281 25.3328 27.1431 24.9244 26.967C24.5105 26.7884 24.0102 26.4271 23.4512 25.8305C22.7918 25.1231 21.9328 24.7739 21.0701 24.8209C20.2074 24.8679 19.3916 25.3082 18.8127 26.08L18.8123 26.0806L17.4676 27.8779C17.4673 27.8783 17.467 27.8787 17.4667 27.8791C17.0231 28.4644 16.4844 28.71 15.9927 28.71C15.501 28.71 14.9623 28.4644 14.5187 27.8791C14.5184 27.8787 14.5181 27.8783 14.5177 27.8779L13.1733 26.0808C13.1732 26.0807 13.1732 26.0806 13.1731 26.0806C12.0033 24.5156 9.90283 24.3999 8.55577 25.8217L8.5484 25.8291ZM8.43935 14.6667C8.43935 15.7314 9.30798 16.6 10.3727 16.6C11.4374 16.6 12.306 15.7314 12.306 14.6667C12.306 13.602 11.4374 12.7333 10.3727 12.7333C9.30798 12.7333 8.43935 13.602 8.43935 14.6667ZM8.43935 9.33333C8.43935 10.398 9.30798 11.2667 10.3727 11.2667C11.4374 11.2667 12.306 10.398 12.306 9.33333C12.306 8.26863 11.4374 7.4 10.3727 7.4C9.30798 7.4 8.43935 8.26863 8.43935 9.33333ZM14.306 16.2667H21.6393C22.5174 16.2667 23.2393 15.5447 23.2393 14.6667C23.2393 13.7886 22.5174 13.0667 21.6393 13.0667H14.306C13.428 13.0667 12.706 13.7886 12.706 14.6667C12.706 15.5447 13.428 16.2667 14.306 16.2667ZM14.306 10.9333H21.6393C22.5174 10.9333 23.2393 10.2114 23.2393 9.33333C23.2393 8.45529 22.5174 7.73333 21.6393 7.73333H14.306C13.428 7.73333 12.706 8.45529 12.706 9.33333C12.706 10.2114 13.428 10.9333 14.306 10.9333Z",
        stroke: "currentColor",
        "stroke-width": "1.2"
    })], -1)),
    bg = {
        class: "FDTL__C-l2"
    },
    mg = {
        class: "FDTL__C-time"
    },
    vg = Na(() => t("div", {
        notime: ""
    }, ":", -1)),
    _g = {
        class: "FDTL__C-l3"
    },
    kg = {
        class: "box"
    },
    hg = ["num"],
    fg = on('<div class="slot-num" data-v-69f351dd>1</div><div class="slot-num" data-v-69f351dd>2</div><div class="slot-num" data-v-69f351dd>0</div><div class="slot-num" data-v-69f351dd>1</div><div class="slot-num" data-v-69f351dd>2</div><div class="slot-num" data-v-69f351dd>3</div><div class="slot-num" data-v-69f351dd>4</div><div class="slot-num" data-v-69f351dd>5</div><div class="slot-num" data-v-69f351dd>6</div><div class="slot-num" data-v-69f351dd>7</div><div class="slot-num" data-v-69f351dd>8</div><div class="slot-num" data-v-69f351dd>9</div><div class="slot-num" data-v-69f351dd>0</div><div class="slot-num" data-v-69f351dd>1</div><div class="slot-num" data-v-69f351dd>2</div><div class="slot-num" data-v-69f351dd>3</div><div class="slot-num" data-v-69f351dd>4</div><div class="slot-num" data-v-69f351dd>5</div><div class="slot-num" data-v-69f351dd>6</div><div class="slot-num" data-v-69f351dd>7</div><div class="slot-num" data-v-69f351dd>8</div><div class="slot-num" data-v-69f351dd>9</div><div class="slot-num" data-v-69f351dd>0</div><div class="slot-num" data-v-69f351dd>1</div><div class="slot-num" data-v-69f351dd>2</div><div class="slot-num" data-v-69f351dd>3</div><div class="slot-num" data-v-69f351dd>4</div><div class="slot-num" data-v-69f351dd>5</div><div class="slot-num" data-v-69f351dd>6</div><div class="slot-num" data-v-69f351dd>7</div><div class="slot-num" data-v-69f351dd>8</div><div class="slot-num" data-v-69f351dd>9</div>', 32),
    yg = ["num"],
    $g = U({
        __name: "TimeLeft",
        props: {
            premium: {
                type: null,
                required: !0
            },
            currentInfo: {
                type: null,
                required: !0
            },
            currentGame: {
                type: null,
                required: !0
            }
        },
        setup(l, {
            expose: i
        }) {
            const o = l,
                r = v(0),
                g = v([{
                    arr: []
                }, {
                    arr: []
                }, {
                    arr: []
                }, {
                    arr: []
                }, {
                    arr: []
                }]);
            Dt(() => o.premium, _ => {
                _ && (g.value = b(_))
            });
            const b = _ => {
                    let m = [];
                    for (let y = 0; y < _.length; y++) {
                        let f = _[y];
                        var w = [];
                        switch (f) {
                            case 9:
                                w.push(f - 8, f - 9, f);
                                break;
                            case 0:
                                w.push(f + 8, f + 9, f);
                                break;
                            default:
                                w.push(f - 2, f - 1, f)
                        }
                        m.push({
                            arr: w
                        })
                    }
                    return m
                },
                d = () => {
                    r.value = 1, setTimeout(() => {
                        r.value = 0
                    }, 3e3)
                },
                u = v(!1),
                p = Ee(),
                s = () => {
                    u.value = !0, p.get5DRule(o.currentGame.typeID)
                };
            return i({
                animationShow: d
            }), (_, m) => (n(), a(B, null, [t("div", ug, [t("div", dg, [t("div", pg, [t("div", null, e(_.$t("betIssue")), 1), t("div", {
                class: "FDTL__C-rule",
                onClick: s
            }, [gg, E(e(_.$t("winTrxIndicate")), 1)])]), t("div", null, e(_.$t("k3TimeLeftToBuy")), 1)]), t("div", bg, [t("div", null, e(o.currentInfo.gameNo), 1), t("div", mg, [t("div", null, e(_.currentInfo.time1), 1), t("div", null, e(_.currentInfo.time2), 1), vg, t("div", null, e(_.currentInfo.time3), 1), t("div", null, e(_.currentInfo.time4), 1)])]), t("div", _g, [t("div", kg, [(n(!0), a(B, null, G(g.value, (w, y) => (n(), a("div", {
                key: y,
                class: "slot-column"
            }, [t("div", {
                class: M(["slot-transform", "transform" + y, r.value == 1 && "slot-scroll"])
            }, [(n(!0), a(B, null, G(w.arr, (f, h) => (n(), a("div", {
                class: "slot-num",
                num: w,
                key: "2" + h
            }, e(f), 9, hg))), 128)), fg, (n(!0), a(B, null, G(w.arr, (f, h) => (n(), a("div", {
                class: "slot-num",
                num: w,
                key: "2" + h
            }, e(f), 9, yg))), 128))], 2)]))), 128))])])]), C(" 规则弹层 begin"), x(xi, {
                howPlayShow: u.value,
                gamePresentation: _.currentGame.gamePresentation,
                onClose: m[0] || (m[0] = w => u.value = !1)
            }, null, 8, ["howPlayShow", "gamePresentation"])], 64))
        }
    });
const wg = K($g, [
        ["__scopeId", "data-v-69f351dd"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/FD/TimeLeft.vue"]
    ]),
    Tg = {
        class: "FDB__C-nav"
    },
    Cg = ["onClick"],
    Ng = {
        class: "FDB__C-H"
    },
    Lg = ["onClick"],
    zg = {
        class: "FDB__C-Num"
    },
    xg = ["txt", "onClick"],
    Ig = {
        class: "round"
    },
    Rg = {
        class: "rate"
    },
    Sg = U({
        __name: "BetCom",
        props: {
            betTypeNameMap: {
                type: null,
                required: !0
            },
            betType: {
                type: null,
                required: !0
            },
            BettingH: {
                type: null,
                required: !0
            },
            onTabID: {
                type: null,
                required: !0
            },
            numberChack: {
                type: null,
                required: !0
            },
            OddsList: {
                type: null,
                required: !0
            }
        },
        emits: ["changeType", "onTab", "numberTab"],
        setup(l, {
            emit: i
        }) {
            return (o, r) => (n(), a(B, null, [t("div", Tg, [(n(!0), a(B, null, G(o.betTypeNameMap, (g, b) => (n(), a("div", {
                key: b,
                class: M({
                    active: o.betType == b
                }),
                onClick: d => i("changeType", b)
            }, e(g), 11, Cg))), 128))]), t("div", Ng, [(n(!0), a(B, null, G(o.BettingH, (g, b) => (n(), a("div", {
                key: b,
                class: M({
                    active: o.onTabID == g.id
                }),
                onClick: d => i("onTab", g.id)
            }, [t("span", null, e(g.name), 1), t("span", null, e(g.rate), 1)], 10, Lg))), 128))]), t("div", zg, [o.betType != 5 ? (n(), a(B, {
                key: 0
            }, G(10, (g, b) => t("div", {
                key: b,
                txt: b,
                class: M({
                    active: o.numberChack[b]
                }),
                onClick: d => i("numberTab", b)
            }, [t("div", Ig, e(b), 1), t("div", Rg, e(o.OddsList[0].playRate ? o.OddsList[0].playRate : o.OddsList[0].playRate_Original), 1)], 10, xg)), 64)) : C("v-if", !0)])], 64))
        }
    });
const Fn = K(Sg, [
        ["__scopeId", "data-v-baf77bdf"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/FD/BetCom.vue"]
    ]),
    Bg = l => (Rt("data-v-7181abf7"), l = l(), St(), l),
    Mg = {
        class: "Betting__Popup-body"
    },
    Gg = {
        class: "Betting__Popup-body-line"
    },
    Ag = {
        class: "Betting__Popup-body-line-list"
    },
    Pg = ["onClick"],
    Dg = {
        class: "Betting__Popup-body-line"
    },
    Og = {
        class: "Betting__Popup-body-line-btnL"
    },
    qg = {
        class: "Betting__Popup-body-line"
    },
    Eg = Bg(() => t("div", null, null, -1)),
    jg = {
        class: "Betting__Popup-body-line-list"
    },
    Hg = ["onClick"],
    Wg = {
        class: "Betting__Popup-body-line"
    },
    Vg = {
        class: "Betting__Popup-foot"
    },
    Fg = {
        class: "Betting__Popup-foot-s bgcolor"
    },
    Ug = {
        class: "Betting__Popup-PreSale"
    },
    Kg = {
        class: "Betting__Popup-PreSale-head"
    },
    Xg = {
        class: "Betting__Popup-PreSale-body"
    },
    Qg = {
        class: "Betting__Popup-PreSale-foot"
    },
    Yg = U({
        __name: "BettingPopup",
        props: {
            currentInfo: {
                type: null,
                required: !0
            },
            currentGame: {
                type: null,
                required: !0
            },
            bettingPopupShow: {
                type: null,
                required: !0
            },
            betTypeList: {
                type: null,
                required: !0
            },
            selectInfo: {
                type: null,
                required: !0
            }
        },
        emits: ["update:bettingPopupShow", "update:selectInfo", "clearBetting", "computedCoin", "submitBetting"],
        setup(l, {
            emit: i
        }) {
            const o = l,
                {
                    t: r
                } = kt(),
                g = v(!1),
                b = v(!0),
                d = J(() => o.currentGame.betMultiple.split("|"));
            Dt(() => d, () => {
                o.selectInfo.count = d.value[0]
            }, {
                deep: !0,
                immediate: !0
            });
            let u = J({
                get() {
                    return o.bettingPopupShow || !1
                },
                set(f) {
                    i("update:bettingPopupShow", f)
                }
            });
            const p = f => {
                    switch (f) {
                        case 1:
                            o.selectInfo.count > 1 && o.selectInfo.count--;
                            break;
                        case 2:
                            o.selectInfo.count++;
                            break
                    }
                    i("computedCoin")
                },
                s = f => {
                    f > 0 && (o.selectInfo.count = Math.floor(f)), i("computedCoin")
                },
                _ = f => {
                    o.selectInfo.count = f, i("computedCoin")
                },
                m = f => {
                    o.selectInfo.coin = f, i("computedCoin")
                },
                w = () => {
                    g.value = !1, b.value = !0
                },
                y = async () => {
                    if (!b.value) {
                        _e(r("agreePresaleRules"));
                        return
                    }
                    i("submitBetting")
                };
            return (f, h) => {
                const N = W("van-field"),
                    L = W("van-popup"),
                    k = Jt("throttle-click");
                return n(), a(B, null, [C(" 投注内容 begin "), x(L, {
                    show: c(u),
                    "onUpdate:show": h[6] || (h[6] = $ => ce(u) ? u.value = $ : u = $),
                    position: "bottom",
                    style: {
                        "box-shadow": "0px -18px 40px rgba(37, 37, 60, 0.26)"
                    },
                    round: !0,
                    "close-on-click-overlay": !1
                }, {
                    default: A(() => [t("div", Mg, [ve(f.$slots, "default", {}, void 0, !0), t("div", Gg, [E(e(c(r)("amount")) + " ", 1), t("div", Ag, [(n(!0), a(B, null, G(f.betTypeList, ($, T) => (n(), a("div", {
                        key: T,
                        class: M(["Betting__Popup-body-line-item", {
                            bgcolor: o.selectInfo.coin == $
                        }]),
                        onClick: R => m($)
                    }, e($), 11, Pg))), 128))])]), t("div", Dg, [E(e(c(r)("numbers")) + " ", 1), t("div", Og, [t("div", {
                        class: M(["Betting__Popup-btn", {
                            bgcolor: o.selectInfo.count > 0
                        }]),
                        onClick: h[0] || (h[0] = $ => p(1))
                    }, "-", 2), x(N, {
                        class: "Betting__Popup-input",
                        modelValue: o.selectInfo.count,
                        "onUpdate:modelValue": h[1] || (h[1] = $ => o.selectInfo.count = $),
                        modelModifiers: {
                            number: !0
                        },
                        type: "digit",
                        maxlength: 4,
                        onInput: s
                    }, null, 8, ["modelValue"]), t("div", {
                        class: "Betting__Popup-btn bgcolor",
                        onClick: h[2] || (h[2] = $ => p(2))
                    }, "+")])]), t("div", qg, [Eg, t("div", jg, [(n(!0), a(B, null, G(d.value, ($, T) => (n(), a("div", {
                        key: T,
                        class: M(["Betting__Popup-body-line-item setBorder", {
                            bgcolor: o.selectInfo.count == $
                        }]),
                        onClick: R => _($)
                    }, " X" + e($), 11, Hg))), 128))])]), t("div", Wg, [t("span", {
                        class: M(["Betting__Popup-agree", {
                            active: b.value
                        }]),
                        onClick: h[3] || (h[3] = $ => b.value = !b.value)
                    }, e(c(r)("agree")), 3), t("span", {
                        onClick: h[4] || (h[4] = $ => g.value = !0),
                        class: "Betting__Popup-preSaleShow"
                    }, e(c(r)("presaleRules")), 1)])]), t("div", Vg, [t("div", {
                        class: "Betting__Popup-foot-c",
                        onClick: h[5] || (h[5] = $ => i("clearBetting"))
                    }, e(c(r)("cancel")), 1), ft((n(), a("div", Fg, [E(e(c(r)("totalAmount")) + e(c(It)(o.selectInfo.allCoin || 0)), 1)])), [
                        [k, {
                            handler: y,
                            wait: 2e3
                        }]
                    ])])]),
                    _: 3
                }, 8, ["show"]), C(" 规则弹层 begin"), x(L, {
                    show: g.value,
                    "onUpdate:show": h[7] || (h[7] = $ => g.value = $),
                    "close-on-click-overlay": !1,
                    round: ""
                }, {
                    default: A(() => [t("div", Ug, [t("div", Kg, e(c(r)("presaleRules")), 1), t("div", Xg, e(f.$t("betPopTXT")), 1), t("div", Qg, [t("div", {
                        class: "Betting__Popup-PreSale-foot-btn",
                        onClick: w
                    }, e(c(r)("iKonw")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const Zg = K(Yg, [
        ["__scopeId", "data-v-7181abf7"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/FD/BettingPopup.vue"]
    ]),
    Jg = {
        class: "FDB__C"
    },
    tb = {
        class: "FDB__C-mark"
    },
    eb = U({
        __name: "Betting",
        props: {
            currentInfo: {
                type: Object,
                default: () => ({})
            },
            ProhibitBuyTime: {
                type: Number,
                default: 5
            },
            currentGame: {
                type: Object,
                default: () => ({})
            }
        },
        emits: ["betting", "changeBettingP"],
        setup(l, {
            expose: i,
            emit: o
        }) {
            const r = l,
                {
                    t: g
                } = kt();
            v();
            const b = v(!1);
            Dt(() => b.value, D => {
                D && (y.value.coin = h.value[0])
            });
            const d = v(0),
                u = v(["A", "B", "C", "D", "E", "SUM"]),
                p = v([{
                    playID: 1,
                    playType: 1,
                    playBet: "0-9",
                    playResult: "0-9",
                    playRate: 9,
                    playRate_Original: 9
                }, {
                    playID: 2,
                    playType: 2,
                    playBet: "H",
                    playResult: "H",
                    playRate: 2,
                    playRate_Original: 2
                }, {
                    playID: 3,
                    playType: 2,
                    playBet: "L",
                    playResult: "L",
                    playRate: 2,
                    playRate_Original: 2
                }, {
                    playID: 4,
                    playType: 3,
                    playBet: "O",
                    playResult: "O",
                    playRate: 2,
                    playRate_Original: 2
                }, {
                    playID: 5,
                    playType: 3,
                    playBet: "E",
                    playResult: "E",
                    playRate: 2,
                    playRate_Original: 2
                }]),
                s = v(0),
                _ = v([]),
                m = v([!1, !1, !1, !1, !1, !1, !1, !1]),
                w = J(() => [{
                    id: 1,
                    name: g("k3Big"),
                    rate: p.value[1].playRate || p.value[1].playRate_Original
                }, {
                    id: 2,
                    name: g("k3Small"),
                    rate: p.value[2].playRate || p.value[2].playRate_Original
                }, {
                    id: 3,
                    name: g("k3Odd"),
                    rate: p.value[3].playRate || p.value[3].playRate_Original
                }, {
                    id: 4,
                    name: g("k3Even"),
                    rate: p.value[4].playRate || p.value[4].playRate_Original
                }]),
                y = v({
                    coin: 0,
                    count: 1,
                    allCoin: 0,
                    gametype: 0,
                    typeid: 1,
                    issuenumber: "2020",
                    selecttype: ""
                }),
                f = J(() => (r.currentInfo.passTime < r.ProhibitBuyTime && z(), r.currentInfo.passTime < r.ProhibitBuyTime)),
                h = J(() => r.currentGame.scope ? r.currentGame.scope.split("|").map(D => Number(D)) : []),
                N = D => {
                    d.value = D, D == 5 && R()
                },
                L = async () => {
                    const [D, P] = await ee(Fo());
                    P && (p.value = P)
                },
                k = D => {
                    R(), s.value == D ? (s.value = 0, b.value = !0) : (s.value = D, b.value = !0), T()
                },
                $ = D => {
                    if (s.value = 0, m.value[D]) {
                        m.value[D] = !1;
                        const P = _.value.indexOf(D);
                        P > -1 && _.value.splice(P, 1), b.value = !0
                    } else _.value.push(D), m.value[D] = !0, b.value = !0;
                    T()
                },
                T = () => {
                    Yt(() => {
                        _.value.length > 0 ? y.value.allCoin = y.value.coin * y.value.count * _.value.length : s.value ? y.value.allCoin = y.value.coin * y.value.count : y.value.allCoin = 0
                    })
                },
                R = () => {
                    _.value = [];
                    for (let D = 0; m.value.length > D; D++) m.value[D] = !1;
                    T()
                },
                z = () => {
                    var D;
                    y.value.count = ((D = r.currentGame.betMultiple) == null ? void 0 : D.split("|")[0]) || 1, b.value = !1, I()
                },
                I = () => {
                    _.value = [], m.value = [!1, !1, !1, !1, !1, !1, !1, !1], s.value = 0
                },
                S = async () => {
                    if (y.value.count == 0) return Ot(g("bteNoCount"));
                    let D;
                    if (_.value.length > 0) D = _.value.join("|");
                    else switch (s.value) {
                        case 1:
                            D = "H";
                            break;
                        case 2:
                            D = "L";
                            break;
                        case 3:
                            D = "O";
                            break;
                        case 4:
                            D = "E";
                            break
                    }
                    if (!D) return Ot("请下注");
                    const P = {
                            issuenumber: r.currentInfo.gameNo,
                            typeId: r.currentGame.typeID,
                            amount: y.value.coin,
                            betCount: Number(y.value.count),
                            gameType: d.value + 1,
                            selectType: D
                        },
                        V = await lt(aa(P));
                    (V == null ? void 0 : V.code) === 0 && (_e(g("code" + (V == null ? void 0 : V.msgCode))), b.value = !1, I(), o("betting", r.currentInfo.gameNo))
                };
            return zt(() => {
                L()
            }), i({
                bettingPopupShow: b
            }), (D, P) => (n(), a("div", Jg, [ft(t("div", tb, [t("div", null, e(r.currentInfo.time3 || "0"), 1), t("div", null, e(r.currentInfo.time4 || "0"), 1)], 512), [
                [te, f.value]
            ]), x(Fn, {
                betTypeNameMap: u.value,
                betType: d.value,
                BettingH: w.value,
                onTabID: s.value,
                OddsList: p.value,
                numberChack: m.value,
                onChangeType: N,
                onNumberTab: $,
                onOnTab: k
            }, null, 8, ["betTypeNameMap", "betType", "BettingH", "onTabID", "OddsList", "numberChack"]), x(Zg, {
                currentInfo: l.currentInfo,
                currentGame: l.currentGame,
                bettingPopupShow: b.value,
                betTypeList: h.value,
                selectInfo: y.value,
                onComputedCoin: T,
                onClearBetting: z,
                onSubmitBetting: S
            }, {
                default: A(() => [x(Fn, {
                    betTypeNameMap: u.value,
                    betType: d.value,
                    BettingH: w.value,
                    onTabID: s.value,
                    OddsList: p.value,
                    numberChack: m.value,
                    onChangeType: N,
                    onNumberTab: $,
                    onOnTab: k
                }, null, 8, ["betTypeNameMap", "betType", "BettingH", "onTabID", "OddsList", "numberChack"])]),
                _: 1
            }, 8, ["currentInfo", "currentGame", "bettingPopupShow", "betTypeList", "selectInfo"])]))
        }
    });
const ib = K(eb, [
        ["__scopeId", "data-v-28e57f6a"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/FD/Betting.vue"]
    ]),
    nb = {
        class: "RecordNav__C"
    },
    ab = ["onClick"],
    ob = U({
        __name: "RecordNav",
        props: {
            record: {
                type: String,
                default: "GameRecord"
            }
        },
        setup(l) {
            const i = l,
                {
                    t: o
                } = kt(),
                r = v([{
                    name: o("gameRecords"),
                    componentName: "GameRecord"
                }, {
                    name: o("chartTrends"),
                    componentName: "Trend"
                }, {
                    name: o("myGameRecords"),
                    componentName: "MyGameRecord"
                }]);
            return (g, b) => (n(), a("div", nb, [(n(!0), a(B, null, G(r.value, (d, u) => (n(), a("div", {
                key: u,
                onClick: p => g.$emit("changeC", d.componentName),
                class: M({
                    active: i.record == d.componentName
                })
            }, e(d.name), 11, ab))), 128))]))
        }
    });
const Ii = K(ob, [
        ["__scopeId", "data-v-72f81e71"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/WinGo/RecordNav.vue"]
    ]),
    sb = {
        class: "GameRecord__C"
    },
    lb = {
        class: "GameRecord__C-head"
    },
    cb = {
        class: "GameRecord__C-body"
    },
    rb = {
        class: "numList"
    },
    ub = {
        class: "numItem"
    },
    db = {
        class: "redNumItem"
    },
    pb = {
        key: 1,
        class: "GameRecord__C-body-empty"
    },
    gb = {
        key: 0,
        class: "GameRecord__C-foot"
    },
    bb = {
        class: "GameRecord__C-foot-page"
    },
    mb = U({
        __name: "GameRecord",
        props: {
            typeid: {
                type: Number,
                required: !0
            }
        },
        setup(l, {
            expose: i
        }) {
            const o = l,
                r = v([]),
                g = v(4),
                b = v(10),
                d = v(1),
                u = () => {
                    d.value--, s()
                },
                p = () => {
                    d.value++, s()
                },
                s = async (_ = !1) => {
                    if (o.typeid == null) return;
                    _ && (d.value = 1);
                    const m = await lt(oa({
                        pageSize: b.value,
                        pageNo: d.value,
                        typeId: o.typeid
                    }));
                    r.value = (m == null ? void 0 : m.data.list) || [], g.value = (m == null ? void 0 : m.data.totalPage) || 0
                };
            return i({
                getData: s
            }), ke(() => {
                s()
            }), (_, m) => {
                const w = W("van-col"),
                    y = W("van-row"),
                    f = W("van-icon");
                return n(), a("div", sb, [t("div", lb, [x(y, null, {
                    default: A(() => [x(w, {
                        span: "8"
                    }, {
                        default: A(() => [E(e(_.$t("FDNumber")), 1)]),
                        _: 1
                    }), x(w, {
                        span: "12"
                    }, {
                        default: A(() => [E(e(_.$t("FDResult")), 1)]),
                        _: 1
                    }), x(w, {
                        span: "4"
                    }, {
                        default: A(() => [E(e(_.$t("FDTotal")), 1)]),
                        _: 1
                    })]),
                    _: 1
                })]), t("div", cb, [r.value.length ? (n(!0), a(B, {
                    key: 0
                }, G(r.value, (h, N) => (n(), it(y, {
                    key: N
                }, {
                    default: A(() => [x(w, {
                        span: "8"
                    }, {
                        default: A(() => [E(e(h.issueNumber), 1)]),
                        _: 2
                    }, 1024), x(w, {
                        span: "12"
                    }, {
                        default: A(() => [t("div", rb, [(n(!0), a(B, null, G([...h.premium], (L, k) => (n(), a("div", ub, e(L), 1))), 256))])]),
                        _: 2
                    }, 1024), x(w, {
                        span: "4"
                    }, {
                        default: A(() => [t("span", db, e(h.sumCount), 1)]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024))), 128)) : (n(), a("div", pb, [x(de)]))]), r.value.length ? (n(), a("div", gb, [t("div", {
                    class: M(["GameRecord__C-foot-previous", {
                        disabled: d.value <= 1
                    }]),
                    onClick: u
                }, [x(f, {
                    name: "arrow-left",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2), t("div", bb, e(d.value) + "/" + e(g.value), 1), t("div", {
                    class: M(["GameRecord__C-foot-next", {
                        disabled: d.value >= g.value
                    }]),
                    onClick: p
                }, [x(f, {
                    name: "arrow",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2)])) : C("v-if", !0)])
            }
        }
    });
const vb = K(mb, [
        ["__scopeId", "data-v-9215aba8"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/FD/GameRecord.vue"]
    ]),
    _b = {
        class: "noticeBar__container"
    },
    kb = t("div", {
        class: "notice_svg"
    }, null, -1),
    hb = {
        class: "noticeBar__container-body"
    },
    fb = {
        key: 0,
        class: "noticeBar__container-body-text"
    },
    yb = U({
        __name: "index",
        props: {
            color: {
                type: String,
                required: !0,
                default: "red"
            }
        },
        setup(l) {
            const i = ht(),
                o = Me(),
                r = v(null),
                g = v(o.messageList),
                b = async () => {
                    const d = await lt(Uo({
                        pageNo: 1,
                        pageSize: 5
                    }));
                    if (d) {
                        if (o.setMessage(d.data.list), g.value = d.data.list, !g.value.length) return;
                        r.value && clearInterval(r.value), r.value = setInterval(() => {
                            g.value.push(g.value.shift())
                        }, 7e3)
                    }
                };
            return zt(() => {
                g.value || setTimeout(() => {
                    b()
                }, 1e3)
            }), (d, u) => {
                var p;
                return n(), a("div", _b, [kb, t("div", hb, [g.value && g.value[0] && g.value[0].siteMessage ? (n(), a("div", fb, e((p = g.value[0]) == null ? void 0 : p.siteMessage), 1)) : C("v-if", !0)]), t("button", {
                    onClick: u[0] || (u[0] = s => c(i).push({
                        name: "Notification"
                    })),
                    class: "hotIcon"
                }, e(d.$t("more")), 1)])
            }
        }
    }),
    hi = K(yb, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/NoticeBar/index.vue"]
    ]),
    $b = {
        class: "Trend__C"
    },
    wb = {
        class: "Trend__C-body1"
    },
    Tb = {
        class: "Trend__C-nav"
    },
    Cb = ["onClick"],
    Nb = {
        class: "Trend__C-body1-line"
    },
    Lb = {
        key: 0,
        class: "Trend__C-body1-line"
    },
    zb = {
        class: "Trend__C-body1-line-num"
    },
    xb = {
        key: 1,
        class: "Trend__C-body1-line"
    },
    Ib = {
        class: "Trend__C-body1-line-num"
    },
    Rb = {
        key: 2,
        class: "Trend__C-body1-line"
    },
    Sb = {
        class: "Trend__C-body1-line-num"
    },
    Bb = {
        key: 3,
        class: "Trend__C-body1-line"
    },
    Mb = {
        class: "Trend__C-body1-line-num"
    },
    Gb = {
        class: "Trend__C-head"
    },
    Ab = {
        class: "Trend__C-body2"
    },
    Pb = ["IssueNumber", "Number", "Colour", "rowId"],
    Db = {
        class: "Trend__C-body2-IssueNumber"
    },
    Ob = {
        class: "Trend__C-body2-Num"
    },
    qb = ["id"],
    Eb = {
        key: 1,
        class: "Trend__C-body2-empty"
    },
    jb = {
        key: 0,
        class: "Trend__C-foot"
    },
    Hb = {
        class: "Trend__C-foot-page"
    },
    Wb = U({
        __name: "Trend",
        props: {
            typeid: {
                type: Number,
                required: !0
            }
        },
        setup(l, {
            expose: i
        }) {
            const o = l,
                r = v([]),
                g = v([]),
                b = v(),
                d = v(),
                u = v(),
                p = v(),
                s = v(),
                _ = v(["A", "B", "C", "D", "E"]),
                m = v(0),
                w = v(1),
                y = v(4);

            function f() {
                Yt(() => {
                    for (let R = 0; R < g.value.length; R++) g.value[R + 1] && N(g.value[R], g.value[R + 1])
                })
            }
            const h = R => {
                m.value = R, $(!0)
            };

            function N(R, z) {
                let I = parseInt(R.number),
                    S = parseInt(z.number);
                var D = document.getElementById("myCanvas" + R.rowId);
                if (D && D.getContext) {
                    var P = D.getContext("2d");
                    P.clearRect(0, 0, D.width, D.height), P.beginPath(), P.moveTo(I == 0 ? 14 : I * 27 + 14, 0), P.lineTo(S == 0 ? 14 : S * 27 + 14, D.height), P.strokeStyle = "red", P.stroke(), P.closePath()
                }
            }
            const L = () => {
                    w.value--, T()
                },
                k = () => {
                    w.value++, T()
                },
                $ = async (R = !1) => {
                    if (o.typeid == null) return;
                    T(), R && (w.value = 1);
                    const z = await lt(Ko({
                        typeId: o.typeid,
                        typeNumber: m.value + 1
                    }));
                    if (z) {
                        const I = Object.keys(z.data[0]).filter(S => S.startsWith("number_"));
                        r.value = z.data.filter(S => S.type_Number == m.value + 1).map(S => {
                            const D = {
                                list: [],
                                type: 0
                            };
                            return D.type = S.type, D.list = [], I.forEach(P => {
                                D.list.push(S[P])
                            }), D
                        })
                    }
                    b.value = r.value.find(I => I.type == 1), d.value = r.value.find(I => I.type == 2), u.value = r.value.find(I => I.type == 3), p.value = r.value.find(I => I.type == 4), s.value = r.value.find(I => I.type == 5)
                },
                T = async (R = !1) => {
                    if (o.typeid == null) return;
                    R && (w.value = 1);
                    const z = await lt(oa({
                        pageSize: 10,
                        pageNo: w.value,
                        typeId: o.typeid
                    }));
                    z && (g.value = z.data.list.map((I, S) => (I.rowId = S, I.number = I.premium[m.value], I)) || []), y.value = (z == null ? void 0 : z.data.totalPage) || 0, f()
                };
            return i({
                getData: $
            }), ke(() => {
                $()
            }), (R, z) => {
                const I = W("van-col"),
                    S = W("van-row"),
                    D = W("van-icon");
                return n(), a("div", $b, [t("div", wb, [t("div", Tb, [(n(!0), a(B, null, G(_.value, (P, V) => (n(), a("div", {
                    key: V,
                    class: M({
                        active: m.value == V
                    }),
                    onClick: F => h(V)
                }, e(P), 11, Cb))), 128))]), t("div", Nb, e(R.$t("trendDesc1")), 1), d.value ? (n(), a("div", Lb, [t("div", null, e(R.$t("trendDesc3")), 1), t("div", zb, [(n(!0), a(B, null, G(d.value.list, (P, V) => (n(), a("div", {
                    key: "2" + V
                }, e(P), 1))), 128))])])) : C("v-if", !0), p.value ? (n(), a("div", xb, [t("div", null, e(R.$t("trendDesc4")), 1), t("div", Ib, [(n(!0), a(B, null, G(p.value.list, (P, V) => (n(), a("div", {
                    key: "4" + V
                }, e(P), 1))), 128))])])) : C("v-if", !0), b.value ? (n(), a("div", Rb, [t("div", null, e(R.$t("trendDesc5")), 1), t("div", Sb, [(n(!0), a(B, null, G(b.value.list, (P, V) => (n(), a("div", {
                    key: "5" + V
                }, e(P), 1))), 128))])])) : C("v-if", !0), u.value ? (n(), a("div", Bb, [t("div", null, e(R.$t("trendDesc6")), 1), t("div", Mb, [(n(!0), a(B, null, G(u.value.list, (P, V) => (n(), a("div", {
                    key: "3" + V
                }, e(P), 1))), 128))])])) : C("v-if", !0)]), t("div", Gb, [x(S, null, {
                    default: A(() => [x(I, {
                        span: "8"
                    }, {
                        default: A(() => [E(e(R.$t("betIssue")), 1)]),
                        _: 1
                    }), x(I, {
                        span: "16"
                    }, {
                        default: A(() => [E(e(R.$t("number")), 1)]),
                        _: 1
                    })]),
                    _: 1
                })]), t("div", Ab, [g.value.length ? (n(!0), a(B, {
                    key: 0
                }, G(g.value, (P, V) => (n(), a("div", {
                    key: V,
                    IssueNumber: P.issueNumber,
                    Number: P.number,
                    Colour: P.colour,
                    rowId: P.rowId
                }, [x(S, null, {
                    default: A(() => [x(I, {
                        span: "8"
                    }, {
                        default: A(() => [t("div", Db, e(P.issueNumber), 1)]),
                        _: 2
                    }, 1024), x(I, {
                        span: "16"
                    }, {
                        default: A(() => [t("div", Ob, [t("canvas", {
                            canvas: "",
                            id: "myCanvas" + P.rowId,
                            ref_for: !0,
                            ref: "canvas",
                            class: "line-canvas"
                        }, null, 8, qb), (n(), a(B, null, G(10, F => t("div", {
                            class: M(["Trend__C-body2-Num-item", {
                                action: Number(P.number) == F - 1
                            }]),
                            key: F
                        }, e(F - 1), 3)), 64)), t("div", {
                            class: M(["Trend__C-body2-Num-BS", {
                                isB: Number(P.number) > 4
                            }])
                        }, e(Number(P.number) > 4 ? "H" : "L"), 3), t("div", {
                            class: M(["Trend__C-body2-Num-OE", {
                                isE: Number(P.number) % 2
                            }])
                        }, e(Number(P.number) % 2 ? "O" : "E"), 3)])]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024)], 8, Pb))), 128)) : (n(), a("div", Eb, [x(de)]))]), g.value.length ? (n(), a("div", jb, [t("div", {
                    class: M(["Trend__C-foot-previous", {
                        disabled: w.value <= 1
                    }]),
                    onClick: L
                }, [x(D, {
                    name: "arrow-left",
                    class: "Trend__C-icon",
                    size: "20"
                })], 2), t("div", Hb, e(w.value) + "/" + e(y.value), 1), t("div", {
                    class: M(["Trend__C-foot-next", {
                        disabled: w.value >= y.value
                    }]),
                    onClick: k
                }, [x(D, {
                    name: "arrow",
                    class: "Trend__C-icon",
                    size: "20"
                })], 2)])) : C("v-if", !0)])
            }
        }
    });
const Vb = K(Wb, [
        ["__scopeId", "data-v-9d93d892"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/FD/Trend.vue"]
    ]),
    Fb = {
        class: "MyGameRecordList__C"
    },
    Ub = ["onClick"],
    Kb = {
        class: "MyGameRecordList__C-item-m"
    },
    Xb = {
        class: "MyGameRecordList__C-item-m-top"
    },
    Qb = {
        class: "MyGameRecordList__C-item-m-bottom"
    },
    Yb = {
        key: 0,
        class: "MyGameRecordList__C-detail"
    },
    Zb = {
        class: "MyGameRecordList__C-detail-text"
    },
    Jb = {
        key: 0,
        class: "MyGameRecordList__C-detail-line"
    },
    tm = ["onClick"],
    em = ["src"],
    im = {
        class: "MyGameRecordList__C-detail-line"
    },
    nm = {
        class: "MyGameRecordList__C-detail-line"
    },
    am = {
        class: "MyGameRecordList__C-detail-line"
    },
    om = {
        class: "MyGameRecordList__C-detail-line"
    },
    sm = {
        class: "red"
    },
    lm = {
        class: "MyGameRecordList__C-detail-line"
    },
    cm = {
        class: "MyGameRecordList__C-detail-line"
    },
    rm = {
        key: 0,
        class: "numList"
    },
    um = {
        key: 1
    },
    dm = {
        class: "MyGameRecordList__C-detail-line"
    },
    pm = {
        class: "line1"
    },
    gm = {
        class: "MyGameRecordList__C-detail-line"
    },
    bm = {
        key: 1
    },
    mm = {
        class: "MyGameRecordList__C-detail-line"
    },
    vm = {
        key: 1
    },
    _m = {
        class: "MyGameRecordList__C-detail-line"
    },
    km = U({
        __name: "MayrecordList",
        props: {
            mayrecord: {
                type: Array,
                required: !0
            }
        },
        setup(l) {
            const {
                t: i
            } = kt(), o = v(-1), r = u => ["", "A", "B", "C", "D", "E"][u], g = u => {
                switch (u) {
                    case "L":
                        return i("k3Small");
                    case "O":
                        return i("k3Odd");
                    case "E":
                        return i("k3Even");
                    case "H":
                        return i("k3Big");
                    default:
                        return u
                }
            }, b = u => {
                o.value == u ? o.value = -1 : o.value = u
            }, d = u => {
                switch (u) {
                    case "E":
                        return "Even";
                    case "O":
                        return "Odd";
                    case "H":
                        return "Big";
                    case "L":
                        return "Small";
                    default:
                        return u
                }
            };
            return (u, p) => (n(), a("div", Fb, [(n(!0), a(B, null, G(u.mayrecord, (s, _) => (n(), a(B, {
                key: _
            }, [t("div", {
                class: "MyGameRecordList__C-item",
                onClick: be(m => b(_), ["stop", "prevent"])
            }, [t("div", {
                class: M(["MyGameRecordList__C-item-l", ["MyGameRecordList__C-item-l-" + s.selectType]])
            }, e(d(s.selectType)), 3), t("div", Kb, [t("div", Xb, e(s.issueNumber), 1), t("div", Qb, e(s.addTime), 1)]), s.profitAmount ? (n(), a("div", {
                key: 0,
                class: M(["MyGameRecordList__C-item-r", {
                    success: s.state
                }])
            }, [s.profitAmount ? (n(), a("div", {
                key: 0,
                class: M({
                    success: s.state
                })
            }, e(s.state ? u.$t("success") : u.$t("fail")), 3)) : C("v-if", !0), t("span", null, e(`${s.state?"+":"-"}${c(It)(s.profitAmount)}`), 1)], 2)) : C("v-if", !0)], 8, Ub), _ == o.value ? (n(), a("div", Yb, [t("div", Zb, e(u.$t("detailMay")), 1), s.orderNumber ? (n(), a("div", Jb, [E(e(u.$t("orderNoMay")) + " ", 1), t("div", {
                onClick: m => c(We)(s.orderNumber)
            }, [E(e(s.orderNumber) + " ", 1), t("img", {
                src: c(qt)("public", "copy")
            }, null, 8, em)], 8, tm)])) : C("v-if", !0), t("div", im, [E(e(u.$t("issueMay")) + " ", 1), t("div", null, e(s.issueNumber), 1)]), t("div", nm, [E(e(u.$t("amountMay")) + " ", 1), t("div", null, e(c(It)(s.amount)), 1)]), t("div", am, [E(e(u.$t("numMay")) + " ", 1), t("div", null, e(s.betCount), 1)]), t("div", om, [E(e(u.$t("afterTaxAmount")) + " ", 1), t("div", sm, e(c(It)(s.realAmount)), 1)]), t("div", lm, [E(e(u.$t("tax")) + " ", 1), t("div", null, e(c(It)(s.fee)), 1)]), t("div", cm, [E(e(u.$t("resultMay")) + " ", 1), s.premium ? (n(), a("div", rm, [(n(!0), a(B, null, G(s.premium, (m, w) => (n(), a("div", {
                key: w
            }, e(m), 1))), 128))])) : (n(), a("div", um, "--"))]), t("div", dm, [E(e(u.$t("selectMay")) + " ", 1), t("div", pm, [t("div", null, e(r(s.gameType)), 1), (n(!0), a(B, null, G(s.selectType.split("|"), (m, w) => (n(), a("div", {
                class: "num",
                key: w
            }, e(g(m)), 1))), 128))])]), t("div", gm, [E(e(u.$t("statusMay")) + " ", 1), s.state != 2 ? (n(), a("div", {
                key: 0,
                class: M([s.state ? "green" : "red"])
            }, e(s.state ? u.$t("success") : u.$t("fail")), 3)) : (n(), a("div", bm, e(u.$t("unsettled")), 1))]), t("div", mm, [E(e(u.$t("winOrLose")) + " ", 1), s.state != 2 ? (n(), a("div", {
                key: 0,
                class: M([s.state ? "green" : "red"])
            }, e(`${s.state?"+":"-"} ${c(It)(s.profitAmount)}`), 3)) : (n(), a("div", vm, "--"))]), t("div", _m, [E(e(u.$t("createTime")) + " ", 1), t("div", null, e(s.addTime), 1)])])) : C("v-if", !0)], 64))), 128))]))
        }
    });
const La = K(km, [
        ["__scopeId", "data-v-8bb41fd5"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/FD/MayrecordList.vue"]
    ]),
    hm = {
        class: "MyGameRecord__C"
    },
    fm = {
        key: 0,
        class: "MyGameRecord__C-head"
    },
    ym = {
        class: "MyGameRecord__C-body"
    },
    $m = {
        key: 1,
        class: "MyGameRecord__C-body-empty"
    },
    wm = {
        key: 1,
        class: "MyGameRecord__C-foot"
    },
    Tm = {
        class: "MyGameRecord__C-foot-page"
    },
    Cm = U({
        __name: "MyGameRecord",
        props: {
            typeid: {
                type: Number,
                required: !0
            },
            goPathName: {
                type: String,
                required: !0
            },
            hasHead: {
                type: Boolean,
                required: !0,
                default: !0
            }
        },
        setup(l, {
            expose: i
        }) {
            const o = l,
                r = ht(),
                g = v(4),
                b = v(20),
                d = v(1),
                u = v([]),
                p = w => {
                    r.push({
                        name: w
                    })
                },
                s = () => {
                    d.value--, m()
                },
                _ = () => {
                    d.value++, m()
                },
                m = async (w = !1) => {
                    if (o.typeid == null) return;
                    w && (d.value = 1);
                    const y = await lt(sa({
                        pageSize: b.value,
                        pageNo: d.value,
                        typeId: o.typeid
                    }));
                    u.value = (y == null ? void 0 : y.data.list) || [], g.value = (y == null ? void 0 : y.data.totalPage) || 0
                };
            return i({
                getData: m
            }), ke(() => {
                m()
            }), (w, y) => {
                const f = W("van-icon");
                return n(), a("div", hm, [w.hasHead ? (n(), a("div", fm, [t("div", {
                    class: "MyGameRecord__C-head-moreB",
                    onClick: y[0] || (y[0] = h => p(w.goPathName))
                }, e(w.$t("more")), 1)])) : C("v-if", !0), t("div", ym, [u.value.length ? (n(), it(La, {
                    key: 0,
                    mayrecord: u.value
                }, null, 8, ["mayrecord"])) : (n(), a("div", $m, [x(de)]))]), u.value.length ? (n(), a("div", wm, [t("div", {
                    class: M(["MyGameRecord__C-foot-previous", {
                        disabled: d.value <= 1
                    }]),
                    onClick: s
                }, [x(f, {
                    name: "arrow-left",
                    class: "MyGameRecord__C-icon",
                    size: "20"
                })], 2), t("div", Tm, e(d.value) + "/" + e(g.value), 1), t("div", {
                    class: M(["MyGameRecord__C-foot-next", {
                        disabled: d.value >= g.value
                    }]),
                    onClick: _
                }, [x(f, {
                    name: "arrow",
                    class: "MyGameRecord__C-icon",
                    size: "20"
                })], 2)])) : C("v-if", !0)])
            }
        }
    });
const za = K(Cm, [
        ["__scopeId", "data-v-36ddca8e"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/FD/MyGameRecord.vue"]
    ]),
    Nm = l => (Rt("data-v-f388b770"), l = l(), St(), l),
    Lm = {
        class: "FDP__C"
    },
    zm = {
        class: "FDP__C-text"
    },
    xm = {
        class: "FDP__C-list"
    },
    Im = {
        class: "num"
    },
    Rm = {
        class: "letter"
    },
    Sm = Nm(() => t("div", {
        class: "FDP__C-symbol"
    }, "=", -1)),
    Bm = {
        class: "FDP__C-sum"
    },
    Mm = U({
        __name: "premium",
        props: {
            sumCount: {
                type: Number,
                default: 0
            },
            premium: {
                type: String,
                default: "00000"
            }
        },
        setup(l) {
            const i = l,
                o = J(() => [...i.premium]),
                r = v(["A", "B", "C", "D", "E"]);
            return (g, b) => (n(), a("div", Lm, [t("div", zm, e(g.$t("betResult")), 1), t("div", xm, [(n(!0), a(B, null, G(o.value, (d, u) => (n(), a("div", {
                key: u
            }, [t("div", Im, e(d), 1), t("div", Rm, e(r.value[u]), 1)]))), 128))]), Sm, t("div", Bm, e(l.sumCount), 1)]))
        }
    });
const Gm = K(Mm, [
        ["__scopeId", "data-v-f388b770"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/FD/premium.vue"]
    ]),
    Am = l => (Rt("data-v-e05c7c66"), l = l(), St(), l),
    Pm = {
        key: 1,
        class: "WinningTip__C-body-l1"
    },
    Dm = {
        class: "WinningTip__C-body-l2"
    },
    Om = {
        class: "line1"
    },
    qm = {
        class: "title"
    },
    Em = {
        class: "num"
    },
    jm = Am(() => t("div", {
        class: "title sum"
    }, "SUM", -1)),
    Hm = {
        class: "num"
    },
    Wm = {
        class: "WinningTip__C-body-l3"
    },
    Vm = {
        key: 0,
        class: "isLose"
    },
    Fm = {
        class: "head"
    },
    Um = {
        class: "bonus"
    },
    Km = {
        class: "gameDetail"
    },
    Xm = {
        class: "WinningTip__C-body-l4"
    },
    Qm = ["onClick"],
    Ym = U({
        __name: "WinningTips",
        setup(l, {
            expose: i
        }) {
            const o = J(() => b.value[0] ? b.value[0].state == 0 : !1),
                r = J(() => b.value[0] || {}),
                g = v(!1),
                b = v([]),
                d = v(["A", "B", "C", "D", "E", "SUM"]);
            let u = v();
            const p = () => {
                    clearTimeout(u.value), b.value.shift(), g.value && b.value.length && (u.value = setTimeout(() => {
                        p()
                    }, 1e3 * 3))
                },
                s = () => {
                    g.value = !g.value, g.value ? u.value = setTimeout(() => {
                        p()
                    }, 1e3 * 3) : clearTimeout(u.value)
                },
                _ = w => {
                    w.list = w.premium.split(""), w.sum = w.sumCount, b.value.push(w), g.value && (u.value = setTimeout(() => {
                        p()
                    }, 1e3 * 3))
                },
                m = () => {
                    b.value = []
                };
            return i({
                showMark: _
            }), (w, y) => ft((n(), a("div", {
                class: "WinningTip__C",
                onClick: p
            }, [t("div", {
                class: M(["WinningTip__C-body", {
                    isL: o.value
                }])
            }, [o.value ? (n(), a("div", {
                key: 0,
                class: M(["WinningTip__C-body-l1", {
                    isL: o.value
                }])
            }, e(w.$t("k3WarningTip1")), 3)) : (n(), a("div", Pm, e(w.$t("k3WarningTip2")), 1)), t("div", Dm, [E(e(w.$t("betResult")) + " ", 1), t("div", Om, [(n(!0), a(B, null, G(r.value.list, (f, h) => (n(), a("div", {
                key: h
            }, [t("div", qm, e(d.value[h]), 1), t("div", Em, e(f), 1)]))), 128)), t("div", null, [jm, t("div", Hm, e(r.value.sum), 1)])])]), t("div", Wm, [o.value ? (n(), a("div", Vm, e(w.$t("k3WarningTip3")), 1)) : (n(), a(B, {
                key: 1
            }, [t("div", Fm, e(w.$t("k3WarningTip4")), 1), t("div", Um, e(c(It)(Number(r.value.winAmount))), 1)], 64)), t("div", Km, e(w.$t("k3WarningTip5")) + e(r.value.typeName) + " " + e(r.value.issueNumber), 1)]), t("div", Xm, [t("div", {
                class: M(["acitveBtn", {
                    active: g.value
                }]),
                onClick: be(s, ["stop"])
            }, null, 10, Qm), E(" " + e(w.$t("autoShutOff3s")), 1)]), t("div", {
                class: "closeBtn",
                onClick: m
            })], 2)], 512)), [
                [te, b.value.length]
            ])
        }
    });
const Zm = K(Ym, [
        ["__scopeId", "data-v-e05c7c66"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/FD/WinningTips.vue"]
    ]),
    Jm = U({
        __name: "ChangLong",
        setup(l) {
            const i = ht(),
                o = () => {
                    i.push({
                        name: "AllLotteryGames-ChangLong"
                    })
                };
            return (r, g) => (n(), a("div", {
                class: "changlongEnter changlong",
                onClick: o
            }))
        }
    });
const Ri = K(Jm, [
        ["__scopeId", "data-v-0ac3de13"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/common/ChangLong.vue"]
    ]),
    tv = "/assets/mp3/di1-0f3d86cb.mp3",
    ev = "/assets/mp3/di2-ad9aa8fb.mp3",
    iv = ["muted"],
    nv = t("source", {
        src: tv,
        type: "audio/mpeg"
    }, null, -1),
    av = [nv],
    ov = ["muted"],
    sv = t("source", {
        src: ev,
        type: "audio/mpeg"
    }, null, -1),
    lv = [sv],
    cv = U({
        __name: "audio",
        setup(l) {
            const i = v(!1);
            Dt(() => Me().visibility, r => {
                r === 0 ? i.value = !0 : setTimeout(() => {
                    i.value = !1
                }, 500)
            });
            const o = () => {
                i.value = !0, Yt(() => {
                    const r = document.getElementById("voice1"),
                        g = document.getElementById("voice2");
                    r.play(), g.play(), r.pause(), g.pause(), i.value = !1, document.removeEventListener("touchstart", o)
                })
            };
            return zt(() => {
                document.addEventListener("touchstart", o)
            }), (r, g) => (n(), a(B, null, [t("audio", {
                id: "voice1",
                muted: i.value
            }, av, 8, iv), t("audio", {
                id: "voice2",
                muted: i.value
            }, lv, 8, ov)], 64))
        }
    }),
    Si = K(cv, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/WinGo/audio.vue"]
    ]),
    rv = {
        class: "FD__C"
    },
    uv = {
        class: "FD__C-head-more"
    },
    dv = U({
        __name: "index",
        setup(l) {
            const i = {
                    GameRecord: vb,
                    Trend: Vb,
                    MyGameRecord: za
                },
                o = v(),
                r = v(),
                g = v(),
                b = v(),
                d = v(!1),
                u = v("GameRecord"),
                p = ht(),
                s = Ee(),
                _ = s.get5D,
                m = v(0),
                w = v(localStorage.getItem("volumeShow") || "1"),
                y = v(!1),
                f = v(null),
                h = v({
                    gameNo: "loading",
                    currentTime: "",
                    beginTime: "",
                    passTime: 180,
                    time1: 0,
                    time2: 0,
                    time3: 0,
                    time4: 0
                }),
                N = v(5),
                L = v(""),
                k = v(!1),
                $ = v(null),
                T = v("00000"),
                R = v(0),
                z = J(() => _[m.value] || {}),
                I = Ye(),
                S = J(() => I.getIsShowLotteryDragon);
            zt(() => {
                F()
            }), Ve(() => {
                clearInterval(f.value), yt.value.forEach(et => {
                    clearInterval(et)
                }), Gt.value && clearTimeout(Gt.value)
            }), Dt(() => Me().visibility, et => {
                et === 0 ? clearInterval(f.value) : (F(), ut(m.value))
            });
            const D = () => {
                    sessionStorage.setItem("clickedGameType", "lottery"), p.push({
                        path: "/"
                    })
                },
                P = () => {
                    w.value == "1" ? w.value = "2" : w.value = "1", localStorage.setItem("volumeShow", w.value)
                },
                V = et => {
                    p.push({
                        name: et
                    })
                },
                F = () => {
                    $.value == null && ut(0)
                },
                nt = async (et, at = !1) => {
                    const [Q, Y] = await ee(Qo({
                        typeId: et
                    }));
                    T.value = Y.premium, R.value = Y.sumCount, at && b.value.animationShow()
                },
                ut = et => {
                    s.get5DData(), m.value = et, $.value = _[et].typeID, ct($.value), Yt(() => {
                        o.value.getData($.value)
                    })
                },
                ct = async (et, at = !1) => {
                    nt(et, at);
                    const [Q, Y] = await ee(Xo({
                        typeId: et
                    }));
                    h.value.gameNo = Y.issueNumber, h.value.currentTime = Y.serviceTime.replace(/-/g, "/"), h.value.beginTime = Y.startTime.replace(/-/g, "/"), ot()
                },
                ot = () => {
                    if (!_.length) return;
                    var et = new Date(h.value.currentTime).getTime(),
                        at = new Date(h.value.beginTime).getTime();
                    let Q = (et - at) / 1e3,
                        Y = _[m.value];
                    if (Q > Y.intervalM * 60 && (Q = Y.intervalM * 60), h.value.passTime = Y.intervalM * 60 - Q, h.value.passTime < 0) {
                        L.value = "An error occurred, please contact customer service。The game time is " + Y.intervalM + " minutes,start time is " + h.value.beginTime + ",current time is" + h.value.currentTime + "!", y.value = !0;
                        return
                    }
                    Z()
                },
                Z = () => {
                    clearInterval(f.value), _t(!1), f.value = setInterval(function() {
                        _t()
                    }, 1e3)
                },
                _t = (et = !0) => {
                    if (h.value.passTime <= N.value && (k.value = !1), w.value == "1" && (h.value.passTime <= N.value && h.value.passTime > 1 ? Bt(1) : h.value.passTime == 1 && Bt(2)), h.value.passTime > 0) {
                        let at = h.value.passTime;
                        h.value.time2 = Math.floor(at / 60), h.value.time3 = Math.floor(at % 60 / 10), h.value.time4 = Math.floor(at % 10), h.value.passTime--
                    } else clearInterval(f.value), et && At()
                },
                Bt = (et = 1) => {
                    const at = document.getElementById(`voice${et}`);
                    at && (at.currentTime = 0, at.play())
                },
                At = () => {
                    ct($.value, !0), g.value.getWinsUserAmount(!1), o.value.getData(!0)
                },
                dt = v({}),
                yt = v([]),
                $t = et => {
                    if (g.value.getWinsUserAmount(!1), o.value.getData(), dt.value[et]) return;
                    dt.value[et] = !0;
                    const {
                        time1: at,
                        time2: Q,
                        time3: Y,
                        time4: H
                    } = h.value, wt = (at * 10 * 60 + Q * 60 + Y * 10 + H) * 1e3;
                    yt.value[z.value.intervalM] = setTimeout(() => {
                        gt(et)
                    }, wt)
                },
                Mt = et => {
                    d.value = et
                },
                Gt = v(null),
                gt = async et => {
                    const [at, Q] = await ee(Yo({
                        issueNumber: et
                    }));
                    if (Q.data)
                        if (Q.data.state != 2) r.value.showMark(Q.data), delete dt.value[et];
                        else {
                            Gt.value = setTimeout(() => {
                                gt(et)
                            }, 2e3);
                            return
                        }
                };
            return (et, at) => {
                const Q = W("NavBar");
                return n(), a("div", rv, [x(Q, {
                    "left-arrow": "",
                    onClickLeft: D,
                    class: "lottery",
                    headLogo: !0
                }, {
                    right: A(() => [t("div", uv, [t("div", {
                        onClick: at[0] || (at[0] = Y => V("CustomerService"))
                    }), t("div", {
                        class: M({
                            disableVoice: w.value == "2"
                        }),
                        onClick: P
                    }, null, 2)])]),
                    _: 1
                }), C(" 钱包余额 "), x(Li, {
                    ref_key: "WallteRef",
                    ref: g
                }, null, 512), x(hi, {
                    key: "5d"
                }), C(" 游戏类型 "), x(zi, {
                    gameList: c(_),
                    currentGameIndex: m.value,
                    onChangeGame: ut
                }, null, 8, ["gameList", "currentGameIndex"]), x(Gm, {
                    premium: T.value,
                    sumCount: R.value
                }, null, 8, ["premium", "sumCount"]), C(" 游戏开始时间倒计时 "), x(wg, {
                    ref_key: "tiemLeftRef",
                    ref: b,
                    currentInfo: h.value,
                    premium: T.value,
                    currentGame: z.value
                }, null, 8, ["currentInfo", "premium", "currentGame"]), C(" 投注表 "), x(ib, {
                    currentInfo: h.value,
                    currentGame: z.value,
                    VoiceType: w.value,
                    typeid: $.value,
                    onBetting: $t,
                    onChangeBettingP: Mt
                }, null, 8, ["currentInfo", "currentGame", "VoiceType", "typeid"]), C(" 记录导航 "), x(Ii, {
                    record: u.value,
                    onChangeC: at[1] || (at[1] = Y => u.value = Y)
                }, null, 8, ["record"]), C(" 动态展示对应的组件 "), (n(), it(Qe, null, [(n(), it(qe(i[u.value]), {
                    ref_key: "RecordComponent",
                    ref: o,
                    typeid: $.value,
                    EmerdApi: c(la),
                    goPathName: "AllLotteryGames-BettingRecord5D"
                }, null, 8, ["typeid", "EmerdApi"]))], 1024)), C(" 弹窗组件 "), x(xe, {
                    show: y.value,
                    onConfirm: at[2] || (at[2] = Y => V("/login"))
                }, {
                    content: A(() => [t("div", null, e(L.value), 1)]),
                    _: 1
                }, 8, ["show"]), C(" 中奖提示组件 "), x(Zm, {
                    ref_key: "WinningTipsRef",
                    ref: r
                }, null, 512), S.value ? (n(), it(Ri, {
                    key: 0
                })) : C("v-if", !0), x(Si)])
            }
        }
    });
const pv = K(dv, [
        ["__scopeId", "data-v-4f526022"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/5D/index.vue"]
    ]),
    uI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: pv
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    gv = {
        class: "BettingRecord5D__C"
    },
    bv = {
        class: "BettingRecord5D__C-nav"
    },
    mv = {
        class: "BettingRecord5D__C-list"
    },
    vv = {
        key: 0,
        class: "BettingRecord5D__C-foot"
    },
    _v = {
        class: "BettingRecord5D__C-foot-page"
    },
    kv = U({
        __name: "index",
        setup(l) {
            const i = ht(),
                o = v(yc),
                r = v([]),
                g = v(0),
                b = v(1),
                d = v(4),
                u = f => {
                    p.value = f.name, b.value = 1, s()
                },
                p = v(0),
                s = async () => {
                    const f = await lt(sa({
                        pageSize: 20,
                        pageNo: b.value,
                        typeId: p.value
                    }));
                    r.value = (f == null ? void 0 : f.data.list) || [], d.value = (f == null ? void 0 : f.data.totalPage) || 0
                },
                _ = () => {
                    p.value = o.value[0].typeID, s()
                };

            function m() {
                i.go(-1)
            }
            const w = () => {
                    b.value--, s()
                },
                y = () => {
                    b.value++, s()
                };
            return zt(() => {
                _()
            }), (f, h) => {
                const N = W("van-tab"),
                    L = W("van-tabs"),
                    k = W("van-icon");
                return n(), a("div", gv, [t("div", {
                    class: "BettingRecord5D__C-head"
                }, [t("div", {
                    class: "BettingRecord5D__C-head-bcak",
                    onClick: m
                }), E(" 5D Lotre ")]), t("div", bv, [x(L, {
                    active: g.value,
                    "onUpdate:active": h[0] || (h[0] = $ => g.value = $),
                    onClickTab: u
                }, {
                    default: A(() => [(n(!0), a(B, null, G(o.value, ($, T) => (n(), it(N, {
                        key: T,
                        title: $.tabName,
                        name: $.typeID
                    }, null, 8, ["title", "name"]))), 128))]),
                    _: 1
                }, 8, ["active"])]), t("div", mv, [x(La, {
                    mayrecord: r.value
                }, null, 8, ["mayrecord"])]), r.value.length ? (n(), a("div", vv, [t("div", {
                    class: M(["BettingRecord5D__C-foot-previous", {
                        disabled: b.value <= 1
                    }]),
                    onClick: w
                }, [x(k, {
                    name: "arrow-left",
                    class: "BettingRecord5D__C-icon",
                    size: "20"
                })], 2), t("div", _v, e(b.value) + "/" + e(d.value), 1), t("div", {
                    class: M(["BettingRecord5D__C-foot-next", {
                        disabled: b.value >= d.value
                    }]),
                    onClick: y
                }, [x(k, {
                    name: "arrow",
                    class: "BettingRecord5D__C-icon",
                    size: "20"
                })], 2)])) : C("v-if", !0)])
            }
        }
    });
const hv = K(kv, [
        ["__scopeId", "data-v-8ab0e403"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/BettingRecord5D/index.vue"]
    ]),
    dI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: hv
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    fv = {
        class: "MyGameRecordList__C"
    },
    yv = ["onClick"],
    $v = {
        class: "MyGameRecordList__C-item-m"
    },
    wv = {
        class: "MyGameRecordList__C-item-m-top"
    },
    Tv = {
        class: "MyGameRecordList__C-item-m-bottom"
    },
    Cv = {
        key: 0,
        class: "MyGameRecordList__C-detail"
    },
    Nv = {
        class: "MyGameRecordList__C-detail-text"
    },
    Lv = {
        key: 0,
        class: "MyGameRecordList__C-detail-line"
    },
    zv = ["onClick"],
    xv = ["src"],
    Iv = {
        class: "MyGameRecordList__C-detail-line"
    },
    Rv = {
        class: "MyGameRecordList__C-detail-line"
    },
    Sv = {
        class: "MyGameRecordList__C-detail-line"
    },
    Bv = {
        class: "MyGameRecordList__C-detail-line"
    },
    Mv = {
        class: "red"
    },
    Gv = {
        class: "MyGameRecordList__C-detail-line"
    },
    Av = {
        class: "MyGameRecordList__C-detail-line"
    },
    Pv = {
        key: 0,
        class: "numList"
    },
    Dv = {
        key: 1
    },
    Ov = {
        class: "MyGameRecordList__C-detail-line noLine"
    },
    qv = {
        key: 0,
        class: "line1"
    },
    Ev = {
        key: 1,
        class: "line1"
    },
    jv = {
        class: ""
    },
    Hv = {
        class: ""
    },
    Wv = {
        key: 2,
        class: "line1"
    },
    Vv = {
        class: ""
    },
    Fv = {
        key: 1,
        class: "btn actionBtn"
    },
    Uv = {
        key: 3,
        class: "line1"
    },
    Kv = {
        class: ""
    },
    Xv = {
        key: 1,
        class: "actionBtn"
    },
    Qv = {
        class: ""
    },
    Yv = {
        class: "MyGameRecordList__C-detail-line"
    },
    Zv = {
        key: 1
    },
    Jv = {
        class: "MyGameRecordList__C-detail-line"
    },
    t_ = {
        key: 1
    },
    e_ = {
        class: "MyGameRecordList__C-detail-line"
    },
    i_ = U({
        __name: "MayrecordList",
        props: {
            mayrecord: {
                type: Array,
                required: !0
            }
        },
        setup(l) {
            const {
                t: i
            } = kt(), o = v(-1), r = u => {
                switch (u) {
                    case "H":
                        return i("k3Big");
                    case "L":
                        return i("k3Small");
                    case "O":
                        return i("k3Odd");
                    case "E":
                        return i("k3Even");
                    default:
                        return u
                }
            }, g = u => {
                o.value == u ? o.value = -1 : o.value = u
            }, b = u => {
                var p, s;
                if (u.gameType == "3") {
                    if (u.selectType == "|AAA|") return "3=";
                    if (u.oneList.length) return u.oneList[0]
                }
                if (u.gameType == "4") return u.selectType == "|ABC|" ? "3≠" : u.threeList.length ? `${u.threeList.join("")}` : `${u.oneList.join("")}`;
                if ((p = u.towList) != null && p.length) return u.towList[0];
                if ((s = u.oneList) != null && s.length) switch (u.oneList[0]) {
                    case "H":
                        return "Big";
                    case "L":
                        return "Small";
                    case "O":
                        return "Odd";
                    case "E":
                        return "Even";
                    default:
                        return u.oneList[0]
                }
            }, d = u => {
                var p, s;
                if ((p = u.towList) != null && p.length) return "num";
                if ((s = u.oneList) != null && s.length) return u.oneList[0].length > 2 ? "num" : u.oneList[0]
            };
            return (u, p) => (n(), a("div", fv, [(n(!0), a(B, null, G(u.mayrecord, (s, _) => (n(), a(B, {
                key: _
            }, [t("div", {
                class: "MyGameRecordList__C-item",
                onClick: be(m => g(_), ["stop", "prevent"])
            }, [t("div", {
                class: M(["MyGameRecordList__C-item-l", ["MyGameRecordList__C-item-l-" + d(s)]])
            }, e(b(s)), 3), t("div", $v, [t("div", wv, e(s.issueNumber), 1), t("div", Tv, e(s.addTime), 1)]), s.profitAmount ? (n(), a("div", {
                key: 0,
                class: M(["MyGameRecordList__C-item-r", {
                    success: s.state
                }])
            }, [s.profitAmount ? (n(), a("div", {
                key: 0,
                class: M({
                    success: s.state
                })
            }, e(s.state ? u.$t("success") : u.$t("fail")), 3)) : C("v-if", !0), t("span", null, e(`${s.state?"+":"-"}${c(It)(s.profitAmount)}`), 1)], 2)) : C("v-if", !0)], 8, yv), _ == o.value ? (n(), a("div", Cv, [t("div", Nv, e(u.$t("detailMay")), 1), s.orderNumber ? (n(), a("div", Lv, [E(e(u.$t("orderNoMay")) + " ", 1), t("div", {
                onClick: m => c(We)(s.orderNumber)
            }, [E(e(s.orderNumber) + " ", 1), t("img", {
                src: c(qt)("public", "copy")
            }, null, 8, xv)], 8, zv)])) : C("v-if", !0), t("div", Iv, [E(e(u.$t("issueMay")) + " ", 1), t("div", null, e(s.issueNumber), 1)]), t("div", Rv, [E(e(u.$t("amountMay")) + " ", 1), t("div", null, e(c(It)(s.amount)), 1)]), t("div", Sv, [E(e(u.$t("numMay")) + " ", 1), t("div", null, e(s.betCount), 1)]), t("div", Bv, [E(e(u.$t("afterTaxAmount")) + " ", 1), t("div", Mv, e(c(It)(s.realAmount)), 1)]), t("div", Gv, [E(e(u.$t("tax")) + " ", 1), t("div", null, e(c(It)(s.fee)), 1)]), t("div", Av, [E(e(u.$t("resultMay")) + " ", 1), s.premium ? (n(), a("div", Pv, [(n(!0), a(B, null, G(s.premium, (m, w) => (n(), a("div", {
                key: w,
                class: M(["n" + m])
            }, null, 2))), 128))])) : (n(), a("div", Dv, "--"))]), t("div", Ov, [E(e(u.$t("selectMay")) + " ", 1), s.gameType == 1 ? (n(), a("div", qv, [s.oneList.length > 0 ? (n(), a(B, {
                key: 0
            }, [t("span", null, e(u.$t("k3RecordDesc1")), 1), (n(!0), a(B, null, G(s.oneList, (m, w) => (n(), a("span", {
                key: w + "1",
                class: "btn"
            }, e(r(m)), 1))), 128))], 64)) : C("v-if", !0)])) : C("v-if", !0), C(" 2个相同的数字 "), s.gameType == 2 ? (n(), a("div", Ev, [s.oneList.length > 0 ? (n(), a(B, {
                key: 0
            }, [t("span", jv, e(u.$t("k3RecordDesc2")), 1), (n(!0), a(B, null, G(s.oneList, (m, w) => (n(), a("span", {
                class: "btn actionViolet",
                key: w + "1"
            }, e(m), 1))), 128))], 64)) : C("v-if", !0), s.towList.length > 0 ? (n(), a(B, {
                key: 1
            }, [t("span", Hv, e(u.$t("k3RecordDesc3")), 1), (n(!0), a(B, null, G(s.towList, (m, w) => (n(), a("span", {
                class: "btn actionRedGreen",
                key: w + "1"
            }, e(m), 1))), 128))], 64)) : C("v-if", !0)])) : C("v-if", !0), s.gameType == 3 ? (n(), a("div", Wv, [s.oneList.length > 0 ? (n(), a(B, {
                key: 0
            }, [t("span", Vv, e(u.$t("k3RecordDesc4")), 1), (n(!0), a(B, null, G(s.oneList, (m, w) => (n(), a("span", {
                class: "btn actionViolet",
                key: w + "1"
            }, e(m), 1))), 128))], 64)) : C("v-if", !0), s.towList ? (n(), a("div", Fv, e(u.$t("k3RecordDesc5")), 1)) : C("v-if", !0)])) : C("v-if", !0), C(" 不同的号码 "), s.gameType == 4 ? (n(), a("div", Uv, [s.oneList.length > 0 ? (n(), a(B, {
                key: 0
            }, [t("span", Kv, e(u.$t("k3RecordDesc6")), 1), (n(!0), a(B, null, G(s.oneList, (m, w) => (n(), a("span", {
                class: "actionViolet",
                key: w + "1"
            }, e(m), 1))), 128))], 64)) : C("v-if", !0), s.towList ? (n(), a("div", Xv, e(u.$t("k3RecordDesc7")), 1)) : C("v-if", !0), s.threeList.length > 0 ? (n(), a(B, {
                key: 2
            }, [t("span", Qv, e(u.$t("k3RecordDesc8")), 1), (n(!0), a(B, null, G(s.threeList, (m, w) => (n(), a("span", {
                class: "actionViolet",
                key: w + "1"
            }, e(m), 1))), 128))], 64)) : C("v-if", !0)])) : C("v-if", !0)]), t("div", Yv, [E(e(u.$t("statusMay")) + " ", 1), s.state != 2 ? (n(), a("div", {
                key: 0,
                class: M([s.state ? "green" : "red"])
            }, e(s.state ? u.$t("success") : u.$t("fail")), 3)) : (n(), a("div", Zv, e(u.$t("k3RecordDesc9")), 1))]), t("div", Jv, [E(e(u.$t("winOrLose")) + " ", 1), s.state != 2 ? (n(), a("div", {
                key: 0,
                class: M([s.state ? "green" : "red"])
            }, e(`${s.state?"+":"-"} ${c(It)(s.profitAmount)}`), 3)) : (n(), a("div", t_, "--"))]), t("div", e_, [E(e(u.$t("createTime")) + " ", 1), t("div", null, e(s.addTime), 1)])])) : C("v-if", !0)], 64))), 128))]))
        }
    });
const xa = K(i_, [
        ["__scopeId", "data-v-a5ef3154"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/K3/MayrecordList.vue"]
    ]),
    n_ = {
        class: "BettingRecordK3__C"
    },
    a_ = {
        class: "BettingRecordK3__C-nav"
    },
    o_ = {
        class: "BettingRecordK3__C-list"
    },
    s_ = {
        key: 0,
        class: "BettingRecordK3__C-foot"
    },
    l_ = {
        class: "BettingRecordK3__C-foot-page"
    },
    c_ = U({
        __name: "index",
        setup(l) {
            const i = ht(),
                o = v($c),
                r = v([]),
                g = v(0),
                b = v(1),
                d = v(4),
                u = h => {
                    p.value = h.name, b.value = 1, s()
                },
                p = v(0),
                s = async () => {
                    const h = await lt(ca({
                            pageSize: 20,
                            pageNo: b.value,
                            typeId: p.value
                        })),
                        N = (h == null ? void 0 : h.data.list) || [];
                    for (let L = 0; N.length > L; L++) {
                        let k = N[L].gameType.split(","),
                            $ = N[L].selectType.split(",");
                        for (let T = 0; k.length > T; T++)
                            if (k[T] == "1" || k[T] == "2" || k[T] == "3") N[L].gameType = "1", N[L].oneList = $;
                            else if (k[T] == "5" || k[T] == "6") {
                            let R = [],
                                z = [],
                                I = [];
                            for (let S = 0; $.length > S; S++) {
                                if ($[S] == "|11|" || $[S] == "|22|" || $[S] == "|33|" || $[S] == "|44|" || $[S] == "|55|" || $[S] == "|66|") {
                                    let D = $[S].split("|");
                                    D.pop(), D.shift(), R.push(D.join())
                                }
                                if ($[S] == ":11:" || $[S] == ":22:" || $[S] == ":33:" || $[S] == ":44:" || $[S] == ":55:" || $[S] == ":66:") {
                                    let D = $[S].split(":");
                                    D.pop(), D.shift(), z.push(D.join())
                                }
                                if ($[S] == ":1:" || $[S] == ":2:" || $[S] == ":3:" || $[S] == ":4:" || $[S] == ":5:" || $[S] == ":6:") {
                                    let D = $[S].split(":");
                                    D.pop(), D.shift(), I.push(D.join())
                                }
                            }
                            N[L].gameType = "2", N[L].oneList = R, N[L].towList = !!_(z, I)
                        } else if (k[T] == "7" || k[T] == "8") {
                            let R = [],
                                z = !1;
                            for (let I = 0; $.length > I; I++) {
                                if ($[I] == "|111|" || $[I] == "|222|" || $[I] == "|333|" || $[I] == "|444|" || $[I] == "|555|" || $[I] == "|666|") {
                                    let S = $[I].split("|");
                                    S.pop(), S.shift(), R.push(S.join())
                                }
                                $[I] == "|AAA|" && (z = !0), N[L].oneList = R, N[L].towList = z, N[L].gameType = "3"
                            }
                        } else if (k[T] == "9" || k[T] == "10" || k[T] == "4") {
                            let R = [],
                                z = !1,
                                I = [];
                            for (let S = 0; $.length > S; S++) {
                                if ($[S] == "|1|" || $[S] == "|2|" || $[S] == "|3|" || $[S] == "|4|" || $[S] == "|5|" || $[S] == "|6|") {
                                    let D = $[S].split("|");
                                    D.pop(), D.shift(), R.push(D.join())
                                }
                                if ($[S] == "|ABC|" && (z = !0), $[S] == ".1." || $[S] == ".2." || $[S] == ".3." || $[S] == ".4." || $[S] == ".5." || $[S] == ".6.") {
                                    let D = $[S].split(".");
                                    D.pop(), D.shift(), I.push(D.join())
                                }
                            }
                            N[L].oneList = R, N[L].towList = z, N[L].threeList = I, N[L].gameType = "4"
                        }
                    }
                    r.value = N || [], d.value = (h == null ? void 0 : h.data.totalPage) || 0
                },
                _ = (h, N) => {
                    let L = [];
                    for (var k = 0; h.length > k; k++) {
                        let T = h[k],
                            R = [];
                        for (var $ = 0; N.length > $; $++) R.push(N[$]);
                        if (R.length > 0) {
                            let z = R.sort().join(",");
                            L.push(T + "|" + z)
                        }
                    }
                    return L.sort()
                },
                m = () => {
                    p.value = o.value[0].typeID, s()
                };

            function w() {
                i.go(-1)
            }
            const y = () => {
                    b.value--, s()
                },
                f = () => {
                    b.value++, s()
                };
            return zt(() => {
                m()
            }), (h, N) => {
                const L = W("van-tab"),
                    k = W("van-tabs"),
                    $ = W("van-icon");
                return n(), a("div", n_, [t("div", {
                    class: "BettingRecordK3__C-head"
                }, [t("div", {
                    class: "BettingRecordK3__C-head-bcak",
                    onClick: w
                }), E(" K3 Lotre ")]), t("div", a_, [x(k, {
                    active: g.value,
                    "onUpdate:active": N[0] || (N[0] = T => g.value = T),
                    onClickTab: u
                }, {
                    default: A(() => [(n(!0), a(B, null, G(o.value, (T, R) => (n(), it(L, {
                        key: R,
                        title: T.tabName,
                        name: T.typeID
                    }, null, 8, ["title", "name"]))), 128))]),
                    _: 1
                }, 8, ["active"])]), t("div", o_, [x(xa, {
                    mayrecord: r.value
                }, null, 8, ["mayrecord"])]), r.value.length ? (n(), a("div", s_, [t("div", {
                    class: M(["BettingRecordK3__C-foot-previous", {
                        disabled: b.value <= 1
                    }]),
                    onClick: y
                }, [x($, {
                    name: "arrow-left",
                    class: "BettingRecordK3__C-icon",
                    size: "20"
                })], 2), t("div", l_, e(b.value) + "/" + e(d.value), 1), t("div", {
                    class: M(["BettingRecordK3__C-foot-next", {
                        disabled: b.value >= d.value
                    }]),
                    onClick: f
                }, [x($, {
                    name: "arrow",
                    class: "BettingRecordK3__C-icon",
                    size: "20"
                })], 2)])) : C("v-if", !0)])
            }
        }
    });
const r_ = K(c_, [
        ["__scopeId", "data-v-c228f246"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/BettingRecordK3/index.vue"]
    ]),
    pI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: r_
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    u_ = {
        class: "MyGameRecordList__C"
    },
    d_ = ["onClick"],
    p_ = {
        class: "MyGameRecordList__C-item-m"
    },
    g_ = {
        class: "MyGameRecordList__C-item-m-top"
    },
    b_ = {
        class: "MyGameRecordList__C-item-m-bottom"
    },
    m_ = {
        key: 0,
        class: "MyGameRecordList__C-detail"
    },
    v_ = {
        class: "MyGameRecordList__C-detail-text"
    },
    __ = {
        key: 0,
        class: "MyGameRecordList__C-detail-line"
    },
    k_ = ["onClick"],
    h_ = ["src"],
    f_ = {
        class: "MyGameRecordList__C-detail-line"
    },
    y_ = {
        class: "MyGameRecordList__C-detail-line"
    },
    $_ = {
        class: "MyGameRecordList__C-detail-line"
    },
    w_ = {
        class: "MyGameRecordList__C-detail-line"
    },
    T_ = {
        class: "red"
    },
    C_ = {
        class: "MyGameRecordList__C-detail-line"
    },
    N_ = {
        class: "MyGameRecordList__C-detail-line"
    },
    L_ = {
        key: 0
    },
    z_ = {
        class: "MyGameRecordList__C-inlineB"
    },
    x_ = {
        key: 0,
        class: "MyGameRecordList__C-inlineB purpleColor"
    },
    I_ = {
        key: 1
    },
    R_ = {
        class: "MyGameRecordList__C-detail-line"
    },
    S_ = {
        class: "MyGameRecordList__C-detail-line"
    },
    B_ = {
        key: 1
    },
    M_ = {
        class: "MyGameRecordList__C-detail-line"
    },
    G_ = {
        key: 1
    },
    A_ = {
        class: "MyGameRecordList__C-detail-line"
    },
    P_ = U({
        __name: "MayrecordList",
        props: {
            mayrecord: {
                type: Array,
                required: !0
            }
        },
        setup(l) {
            const {
                t: i
            } = kt(), o = v(-1), r = p => {
                switch (p) {
                    case "big":
                        return "big";
                    case "green":
                    case "red":
                    case "violet":
                        return "";
                    default:
                        return p
                }
            }, g = p => {
                switch (p % 2) {
                    case 1:
                        return i("greenColor");
                    default:
                        return i("redColor")
                }
            }, b = p => {
                switch (p % 2) {
                    case 1:
                        return "greenColor";
                    default:
                        return "redColor"
                }
            }, d = p => {
                switch (p) {
                    case "small":
                        return i("small");
                    case "big":
                        return i("big");
                    case "green":
                        return i("green");
                    case "violet":
                        return i("purpleColor");
                    case "red":
                        return i("redColor");
                    default:
                        return p
                }
            }, u = p => {
                o.value == p ? o.value = -1 : o.value = p
            };
            return (p, s) => (n(), a("div", u_, [(n(!0), a(B, null, G(p.mayrecord, (_, m) => (n(), a(B, {
                key: m
            }, [t("div", {
                class: "MyGameRecordList__C-item",
                onClick: be(w => u(m), ["stop", "prevent"])
            }, [t("div", {
                class: M(["MyGameRecordList__C-item-l", ["MyGameRecordList__C-item-l-" + _.selectType]])
            }, e(r(_.selectType)), 3), t("div", p_, [t("div", g_, e(_.issueNumber), 1), t("div", b_, e(_.addTime), 1)]), _.profitAmount ? (n(), a("div", {
                key: 0,
                class: M(["MyGameRecordList__C-item-r", {
                    success: _.state
                }])
            }, [_.profitAmount ? (n(), a("div", {
                key: 0,
                class: M({
                    success: _.state
                })
            }, e(_.state ? p.$t("success") : p.$t("fail")), 3)) : C("v-if", !0), t("span", null, e(`${_.state?"+":"-"}${c(It)(_.profitAmount)}`), 1)], 2)) : C("v-if", !0)], 8, d_), m == o.value ? (n(), a("div", m_, [t("div", v_, e(p.$t("detailMay")), 1), _.orderNumber ? (n(), a("div", __, [t("span", null, e(p.$t("orderNoMay")), 1), t("div", {
                onClick: w => c(We)(_.orderNumber)
            }, [E(e(_.orderNumber) + " ", 1), t("img", {
                src: c(qt)("public", "copy")
            }, null, 8, h_)], 8, k_)])) : C("v-if", !0), t("div", f_, [t("span", null, e(p.$t("issueMay")), 1), t("div", null, e(_.issueNumber), 1)]), t("div", y_, [t("span", null, e(p.$t("amountMay")), 1), t("div", null, e(c(It)(_.amount)), 1)]), t("div", $_, [t("span", null, e(p.$t("numMay")), 1), t("div", null, e(_.betCount), 1)]), t("div", w_, [t("span", null, e(p.$t("afterTaxAmount")), 1), t("div", T_, e(c(It)(_.realAmount)), 1)]), t("div", C_, [t("span", null, e(p.$t("tax")), 1), t("div", null, e(c(It)(_.fee)), 1)]), t("div", N_, [t("span", null, e(p.$t("resultMay")), 1), _.number ? (n(), a("div", L_, [t("div", z_, e(_.number), 1), t("div", {
                class: M(["MyGameRecordList__C-inlineB", [b(Number(_.number))]])
            }, e(g(Number(_.number))), 3), _.number == 0 || _.number == 5 ? (n(), a("div", x_, e(p.$t("purpleColor")), 1)) : C("v-if", !0), t("div", {
                class: M(["MyGameRecordList__C-inlineB", [Number(_.number) > 4 ? "big" : "small"]])
            }, e(Number(_.number) > 4 ? p.$t("big") : p.$t("small")), 3)])) : (n(), a("div", I_, "--"))]), t("div", R_, [t("span", null, e(p.$t("selectMay")), 1), t("div", null, e(d(_.selectType)), 1)]), t("div", S_, [t("span", null, e(p.$t("statusMay")), 1), _.state != 2 ? (n(), a("div", {
                key: 0,
                class: M([_.state ? "green" : "red"])
            }, e(_.state ? p.$t("success") : p.$t("fail")), 3)) : (n(), a("div", B_, e(p.$t("k3RecordDesc9")), 1))]), t("div", M_, [t("span", null, e(p.$t("winOrLose")), 1), _.state != 2 ? (n(), a("div", {
                key: 0,
                class: M([_.state ? "green" : "red"])
            }, e(`${_.state?"+":"-"} ${c(It)(_.profitAmount)}`), 3)) : (n(), a("div", G_, "--"))]), t("div", A_, [t("span", null, e(p.$t("createTime")), 1), t("div", null, e(_.addTime), 1)])])) : C("v-if", !0)], 64))), 128))]))
        }
    });
const dn = K(P_, [
        ["__scopeId", "data-v-2faec5cb"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/WinGo/MayrecordList.vue"]
    ]),
    D_ = {
        class: "BettingRecordWin__C"
    },
    O_ = {
        class: "BettingRecordWin__C-nav"
    },
    q_ = {
        class: "BettingRecordWin__C-list"
    },
    E_ = {
        key: 0,
        class: "BettingRecordWin__C-foot"
    },
    j_ = {
        class: "BettingRecordWin__C-foot-page"
    },
    H_ = U({
        __name: "index",
        setup(l) {
            const i = ht(),
                r = Ee().getWingo,
                g = v([]),
                b = v(0),
                d = v(1),
                u = v(4),
                p = h => {
                    s.value = h.name, d.value = 1, _()
                },
                s = v(0),
                _ = async () => {
                    const [h, N] = await ee(ln({
                        pageSize: 20,
                        pageNo: d.value,
                        typeId: s.value
                    }));
                    g.value = N.list || [], u.value = N.totalPage
                },
                m = () => {
                    s.value = r[0].typeID, _()
                };

            function w() {
                i.go(-1)
            }
            const y = () => {
                    d.value--, _()
                },
                f = () => {
                    d.value++, _()
                };
            return zt(() => {
                m()
            }), (h, N) => {
                const L = W("van-tab"),
                    k = W("van-tabs"),
                    $ = W("van-icon");
                return n(), a("div", D_, [t("div", {
                    class: "BettingRecordWin__C-head"
                }, [t("div", {
                    class: "BettingRecordWin__C-head-bcak",
                    onClick: w
                }), E(" Win Go ")]), t("div", O_, [x(k, {
                    active: b.value,
                    "onUpdate:active": N[0] || (N[0] = T => b.value = T),
                    onClickTab: p
                }, {
                    default: A(() => [(n(!0), a(B, null, G(c(r), (T, R) => (n(), it(L, {
                        key: R,
                        title: T.tabName,
                        name: T.typeID
                    }, null, 8, ["title", "name"]))), 128))]),
                    _: 1
                }, 8, ["active"])]), t("div", q_, [x(dn, {
                    mayrecord: g.value
                }, null, 8, ["mayrecord"])]), g.value.length ? (n(), a("div", E_, [t("div", {
                    class: M(["BettingRecordWin__C-foot-previous", {
                        disabled: d.value <= 1
                    }]),
                    onClick: y
                }, [x($, {
                    name: "arrow-left",
                    class: "BettingRecordWin__C-icon",
                    size: "20"
                })], 2), t("div", j_, e(d.value) + "/" + e(u.value), 1), t("div", {
                    class: M(["BettingRecordWin__C-foot-next", {
                        disabled: d.value >= u.value
                    }]),
                    onClick: f
                }, [x($, {
                    name: "arrow",
                    class: "BettingRecordWin__C-icon",
                    size: "20"
                })], 2)])) : C("v-if", !0)])
            }
        }
    });
const W_ = K(H_, [
        ["__scopeId", "data-v-6d173501"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/BettingRecordWin/index.vue"]
    ]),
    gI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: W_
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    V_ = {
        class: "BettingRecordWinTrx__C"
    },
    F_ = {
        class: "BettingRecordWinTrx__C-nav"
    },
    U_ = {
        class: "BettingRecordWinTrx__C-list"
    },
    K_ = {
        key: 0,
        class: "BettingRecordWinTrx__C-foot"
    },
    X_ = {
        class: "BettingRecordWinTrx__C-foot-page"
    },
    Q_ = U({
        __name: "index",
        setup(l) {
            const i = ht(),
                o = v(fc),
                r = v([]),
                g = v(0),
                b = v(1),
                d = v(0),
                u = v(4),
                p = f => {
                    d.value = f.name, b.value = 1, s()
                },
                s = async () => {
                    const [f, h] = await ee(cn({
                        pageSize: 20,
                        pageNo: b.value,
                        typeId: d.value
                    }));
                    r.value = h.list || [], u.value = h.totalPage
                },
                _ = async () => {
                    d.value = o.value[0].typeID, s()
                };

            function m() {
                i.go(-1)
            }
            const w = () => {
                    b.value--, s()
                },
                y = () => {
                    b.value++, s()
                };
            return zt(() => {
                _()
            }), (f, h) => {
                const N = W("van-tab"),
                    L = W("van-tabs"),
                    k = W("van-icon");
                return n(), a("div", V_, [t("div", {
                    class: "BettingRecordWinTrx__C-head"
                }, [t("div", {
                    class: "BettingRecordWinTrx__C-head-bcak",
                    onClick: m
                }), E(" Trx Win Go ")]), t("div", F_, [x(L, {
                    active: g.value,
                    "onUpdate:active": h[0] || (h[0] = $ => g.value = $),
                    onClickTab: p
                }, {
                    default: A(() => [(n(!0), a(B, null, G(o.value, ($, T) => (n(), it(N, {
                        key: T,
                        title: $.tabName,
                        name: $.typeID
                    }, null, 8, ["title", "name"]))), 128))]),
                    _: 1
                }, 8, ["active"])]), t("div", U_, [x(dn, {
                    mayrecord: r.value
                }, null, 8, ["mayrecord"])]), r.value.length ? (n(), a("div", K_, [t("div", {
                    class: M(["BettingRecordWinTrx__C-foot-previous", {
                        disabled: b.value <= 1
                    }]),
                    onClick: w
                }, [x(k, {
                    name: "arrow-left",
                    class: "BettingRecordWinTrx__C-icon",
                    size: "20"
                })], 2), t("div", X_, e(b.value) + "/" + e(u.value), 1), t("div", {
                    class: M(["BettingRecordWinTrx__C-foot-next", {
                        disabled: b.value >= u.value
                    }]),
                    onClick: y
                }, [x(k, {
                    name: "arrow",
                    class: "BettingRecordWinTrx__C-icon",
                    size: "20"
                })], 2)])) : C("v-if", !0)])
            }
        }
    });
const Y_ = K(Q_, [
        ["__scopeId", "data-v-7bbbf1c1"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/BettingRecordWinTrx/index.vue"]
    ]),
    bI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Y_
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    st = v({
        odds: 1.5,
        money_list: [100, 1e3, 200, 5e3, 1e4],
        bet_money: 0,
        binguoType: 1,
        currentNumber: "20230610858776",
        award_result: "246",
        bet_item: "",
        trend_result: ["6", "7", "8", "9", "10", "12", "13", "14", "15", "16", "17", "18", "5"],
        trend_result2: ["123", "245", "532", "666"],
        currentMoneyIndex: 0,
        bet_number: "",
        beishu: 1,
        beishuList: [1, 5, 10, 20, 50, 100],
        currentBeishuIndex: 0,
        currentBetType: void 0,
        currentPlayId: 0,
        currentSelectType: "",
        currentOdds: "",
        drawIssnum: ""
    }),
    oi = v(),
    Ki = v(!1),
    si = v(!1),
    Un = v(!0),
    Kn = v(!1),
    Z_ = v(!1),
    Xi = v("00:00"),
    J_ = v(!1),
    Qi = v(!0),
    {
        t: Yi
    } = Ni.global,
    li = v([]),
    Ke = v([{
        value: Yi("small"),
        type: 1,
        range: "3-9",
        beishu: "2.0",
        bet_amount: 0,
        key: "Small",
        groupId: 1,
        playId: 0,
        hot: !1
    }, {
        value: Yi("binguoHe"),
        type: 2,
        range: "10-11",
        beishu: "3.0",
        bet_amount: 0,
        key: "Drawn",
        groupId: 1,
        playId: 0,
        hot: !1
    }, {
        value: Yi("k3Big"),
        type: 3,
        range: "12-18",
        beishu: "5.0",
        bet_amount: 0,
        key: "Big",
        groupId: 1,
        playId: 0,
        hot: !1
    }]),
    ci = v(Array.from({
        length: 16
    }, (l, i) => {
        const o = i + 3;
        return {
            value: o,
            type: o < 10 ? 1 : o > 11 ? 3 : 2,
            beishu: "2.0",
            bet_amount: 0,
            hot: !1,
            groupId: 1,
            playId: 0
        }
    })),
    ze = v({
        third: {
            amount1: 0,
            amount2: 0
        },
        two: 0,
        one: {
            amount1: 0,
            amount2: 0,
            amount3: 0
        }
    }),
    Be = v([{
        value: "1",
        amount1: 0,
        amount2: 0,
        amount3: 0,
        hot1: !1,
        hot2: !1,
        hot3: !1
    }, {
        value: "2",
        amount1: 0,
        amount2: 0,
        amount3: 0,
        hot1: !1,
        hot2: !1,
        hot3: !1
    }, {
        value: "3",
        amount1: 0,
        amount2: 0,
        amount3: 0,
        hot1: !1,
        hot2: !1,
        hot3: !1
    }, {
        value: "4",
        amount1: 0,
        amount2: 0,
        amount3: 0,
        hot1: !1,
        hot2: !1,
        hot3: !1
    }, {
        value: "5",
        amount1: 0,
        amount2: 0,
        amount3: 0,
        hot1: !1,
        hot2: !1,
        hot3: !1
    }, {
        value: "6",
        amount1: 0,
        amount2: 0,
        amount3: 0,
        hot1: !1,
        hot2: !1,
        hot3: !1
    }, {
        value: "*",
        amount1: 0,
        amount2: 0,
        amount3: 0,
        hot1: !1,
        hot2: !1,
        hot3: !1
    }]),
    Bi = () => {
        const {
            t: l
        } = kt(), i = v(), o = J(() => [qt("home/AllLotteryGames/binguo", "dice_" + st.value.award_result.toString()[0]), qt("home/AllLotteryGames/binguo", "dice_" + st.value.award_result.toString()[1]), qt("home/AllLotteryGames/binguo", "dice_" + st.value.award_result.toString()[2])]), r = J(() => st.value.currentBetType === 1 ? "small" : st.value.currentBetType === 2 ? "and" : "big"), g = async () => {
            const z = await lt(Tc());
            z != null && z.data && (st.value.money_list = z.data.betAmount, st.value.beishuList = z.data.betMultiplier, st.value.bet_money = z.data.betAmount[0])
        }, b = async () => {
            const z = await lt(Cc());
            if (z != null && z.data) {
                li.value = z == null ? void 0 : z.data;
                let I = z == null ? void 0 : z.data;
                I.filter(P => P.groupId === 1).forEach(P => {
                    Number(P.betType) ? ci.value.forEach(V => {
                        P.betType === V.value + "" && (V.beishu = P.odds, V.playId = P.playId)
                    }) : Ke.value.forEach(V => {
                        V.key === P.betType && (V.beishu = P.odds, V.playId = P.playId)
                    })
                }), I.filter(P => P.groupId !== 1).forEach(P => {
                    P.groupId === 4 && (P.betType === "1" ? ze.value.third.amount1 = P.odds : ze.value.third.amount2 = P.odds), P.groupId === 3 && (ze.value.two = P.odds), P.groupId === 2 && (P.betType === "1" ? ze.value.one.amount1 = P.odds : P.betType === "2" ? ze.value.one.amount2 = P.odds : ze.value.one.amount3 = P.odds)
                })
            }
        }, d = async () => {
            const z = await lt(zc({
                issueNumber: st.value.currentNumber
            }));
            z != null && z.data && (z.data.forEach(I => {
                switch (Ke.value.forEach(S => {
                    I.playId === S.playId && (S.bet_amount = I.amount)
                }), ci.value.forEach(S => {
                    I.playId === S.playId && (S.bet_amount = I.amount)
                }), I.playId) {
                    case 28:
                        Be.value[Number(I.selectType[0]) - 1].amount1 = I.amount;
                        break;
                    case 29:
                        Be.value[6].amount1 = I.amount;
                        break;
                    case 27:
                        Be.value[Number(I.selectType[0]) - 1].amount2 = I.amount;
                        break;
                    case 24:
                        Be.value[Number(I.selectType[0]) - 1].amount3 = I.amount;
                        break
                }
            }), await u(0), Yt(() => {
                z.data.sort((D, P) => P.amount - D.amount).slice(0, 3).forEach(D => {
                    let P = Ke.value.findIndex(F => D.playId === F.playId);
                    P > -1 && (Ke.value[P].hot = !0);
                    let V = ci.value.findIndex(F => D.playId === F.playId);
                    switch (V > -1 && (ci.value[V].hot = !0), D.playId) {
                        case 28:
                            Be.value[Number(D.selectType[0]) - 1].hot1 = !0;
                            break;
                        case 29:
                            Be.value[6].hot1 = !0;
                            break;
                        case 27:
                            Be.value[Number(D.selectType[0]) - 1].hot2 = !0;
                            break;
                        case 24:
                            Be.value[Number(D.selectType[0]) - 1].hot3 = !0;
                            break
                    }
                })
            }))
        }, u = async z => {
            Be.value.forEach(I => {
                I.hot1 = !1, I.hot2 = !1, I.hot3 = !1, z === 1 && (I.amount1 = 0, I.amount2 = 0, I.amount3 = 0)
            }), Ke.value.forEach(I => {
                z === 1 && (I.bet_amount = 0), I.hot = !1
            }), ci.value.forEach(I => {
                z === 1 && (I.bet_amount = 0), I.hot = !1
            })
        }, p = async () => {
            const z = await lt(Nc());
            z && (z.data ? z.data.startTime && z.data.endTime && (st.value.currentNumber = z == null ? void 0 : z.data.issueNumber, N(z.data.serviceTime, z.data.endTime, async () => {
                Xi.value = "10:00", await p(), clearInterval(i.value), setTimeout(() => {
                    s()
                }, 60 * 1e3), u(1)
            })) : Qi.value = !1, await d())
        }, s = async () => {
            let z = 1;
            i.value = setInterval(async () => {
                z === 10 ? clearInterval(i.value) : (await _(), await m(), z++)
            }, 1e4)
        }, _ = async () => {
            const z = await lt(Lc());
            z && (st.value.award_result = z == null ? void 0 : z.data.result, st.value.drawIssnum = z == null ? void 0 : z.data.issueNo)
        }, m = async () => {
            const z = await lt(Ta());
            z && (st.value.trend_result = z == null ? void 0 : z.data.map(I => I.resultSum + "").slice(0, 13).reverse(), st.value.trend_result2 = z == null ? void 0 : z.data.map(I => I.result + "").slice(0, 4).reverse())
        }, w = z => {
            si.value = !0, st.value.bet_number = z.value + "", st.value.currentBetType = z.type, st.value.currentPlayId = z.playId, st.value.currentOdds = z.beishu + ""
        }, y = (z, I) => {
            var S, D, P, V;
            I === 1 ? (st.value.bet_number = z, st.value.currentBetType = I, st.value.currentPlayId = (S = li.value.find(F => F.betType === "1" && F.groupId === 2)) == null ? void 0 : S.playId, st.value.currentOdds = ze.value.one.amount1 + "") : I === 2 ? (st.value.bet_number = z + "," + z, z.includes("6") ? st.value.currentBetType = 3 : z.includes("5") ? st.value.currentBetType = 2 : st.value.currentBetType = 1, st.value.currentOdds = ze.value.two + "", st.value.currentPlayId = (D = li.value.find(F => F.betType === "2" && F.groupId === 3)) == null ? void 0 : D.playId) : I === 3 && (st.value.bet_number = z + "," + z + "," + z, /[123]/.test(z) ? st.value.currentBetType = 1 : st.value.currentBetType = 3, z.includes("*") ? (st.value.currentOdds = ze.value.third.amount2 + "", st.value.currentPlayId = (P = li.value.find(F => F.betType === "2" && F.groupId === 4)) == null ? void 0 : P.playId) : (st.value.currentOdds = ze.value.third.amount1 + "", st.value.currentPlayId = (V = li.value.find(F => F.betType === "1" && F.groupId === 4)) == null ? void 0 : V.playId)), si.value = !0
        }, f = async () => {
            var P;
            if (!Qi.value) {
                si.value = !1, Kn.value = !0;
                return
            }
            if (!Un.value) return;
            let z = li.value.find(V => V.playId === st.value.currentPlayId),
                I = "";
            (z == null ? void 0 : z.groupId) === 2 || (z == null ? void 0 : z.groupId) === 3 ? I = st.value.bet_number.split(",")[0] : (z == null ? void 0 : z.groupId) === 4 ? I = st.value.bet_number.includes("*") ? "***" : st.value.bet_number.split(",").join("") : I = Number(st.value.bet_number) ? st.value.bet_number : (P = Ke.value.find(V => V.value === st.value.bet_number)) == null ? void 0 : P.key;
            let S = {
                issueNumber: st.value.currentNumber,
                amount: st.value.bet_money * st.value.beishu,
                figure: Number(st.value.beishu),
                gameType: (z == null ? void 0 : z.groupId) + "",
                selectType: I,
                playId: st.value.currentPlayId
            };
            (await lt(xc(S))).data && (an(l("code402")), si.value = !1, d())
        }, h = (z, I) => {
            let S = new Date(z.replace(/-/g, "/"));
            return new Date(I.replace(/-/g, "/")).getTime() - S.getTime()
        }, N = (z, I, S) => {
            clearInterval(oi.value), oi.value = void 0;
            let D = h(z, I);
            if (D <= 1e3) throw new Error("时间不正确");
            oi.value = setInterval(() => {
                if (D -= 1e3, D <= 1e3) {
                    clearInterval(oi.value), S();
                    return
                }
                Xi.value = Zo(D, "mm:ss")
            }, 1e3)
        }, L = () => Ki.value = !Ki.value, k = z => {
            z === "add" ? st.value.beishu = Number(st.value.beishu) + 1 : st.value.beishu = Number(st.value.beishu) - 1
        }, $ = () => {
            si.value = !1, st.value.currentBeishuIndex = 0, st.value.currentMoneyIndex = 0
        }, T = () => Jo.back(), R = z => z >= 1e6 ? (z / 1e6).toFixed(1).replace(/\.0$/, "") + "M" : z >= 1e3 ? (z / 1e3).toFixed(1).replace(/\.0$/, "") + "K" : z + "";
        return Dt(() => st.value.currentMoneyIndex, z => {
            st.value.bet_money = Number(st.value.money_list[z])
        }, {
            immediate: !0
        }), Dt(() => st.value.bet_number, () => {
            st.value.currentMoneyIndex = 0, st.value.currentBeishuIndex = 0
        }, {
            immediate: !0
        }), Dt(() => st.value.currentBeishuIndex, z => {
            st.value.beishu = Number(st.value.beishuList[z])
        }, {
            immediate: !0
        }), Ve(() => {
            clearInterval(oi.value)
        }), {
            store: st,
            timer: oi,
            isShowBetMoney: Ki,
            filterNumberSize: r,
            handleToggleShwoMoney: L,
            handleBet: w,
            goBack: T,
            handleStep: k,
            handleCancel: $,
            isSell: Qi,
            handleAlike: y,
            getBinguoConfig: g,
            getBinguoOddsList: b,
            getGameBingo18Issue: p,
            countdownTimeFun: N,
            getBingo18LastGameResult: _,
            getBingo18BetAmount: d,
            handleBetSubmit: f,
            getBingo18Last50Result: m,
            formatNum: R,
            checkRule: Un,
            resultImgList: o,
            betSizeList: Ke,
            betNumberList: ci,
            betSheetVisible: si,
            overVisble: Kn,
            alikeList: Be,
            timeText: Xi,
            oddObject: ze,
            playerRuleVisble: Z_,
            betPopTXT: J_
        }
    },
    Ia = l => (Rt("data-v-5ba4aae3"), l = l(), St(), l),
    tk = {
        class: "binguo_info"
    },
    ek = {
        class: "binguo_award"
    },
    ik = {
        key: 0,
        class: "main"
    },
    nk = {
        class: "current_award"
    },
    ak = {
        class: "tit"
    },
    ok = {
        class: "current_number"
    },
    sk = {
        class: "award_time"
    },
    lk = {
        class: "award_result"
    },
    ck = {
        class: "tit"
    },
    rk = {
        class: "award_type"
    },
    uk = {
        key: 1,
        class: "over_tip"
    },
    dk = {
        class: "trend"
    },
    pk = {
        key: 0,
        class: "trend_result1"
    },
    gk = {
        class: "text"
    },
    bk = {
        class: "result_list"
    },
    mk = Ia(() => t("span", {
        class: "tag animation_tag"
    }, "-", -1)),
    vk = {
        key: 1,
        class: "trend_result2"
    },
    _k = {
        class: "result_list2"
    },
    kk = {
        class: "result_list2"
    },
    hk = {
        class: "animation_tag"
    },
    fk = Ia(() => t("div", {
        id: "time"
    }, null, -1)),
    yk = U({
        __name: "BinguoInfo",
        setup(l) {
            const {
                store: i,
                resultImgList: o,
                isSell: r,
                timeText: g,
                getGameBingo18Issue: b,
                getBingo18LastGameResult: d,
                getBingo18Last50Result: u
            } = Bi(), p = ht();

            function s(m) {
                let w = 0;
                return i.value.binguoType === 1 ? w = Number(m) : (w = 0, m.split("").forEach(y => {
                    w += Number(y)
                })), w < 10 ? "small" : w === 11 || w === 10 ? "sum" : "big"
            }
            const _ = () => {
                p.push({
                    path: "/home/AllLotteryGames/BinguoCount"
                })
            };
            return b(), d(), u(), (m, w) => {
                const y = W("van-icon");
                return n(), a(B, null, [t("div", tk, [t("div", ek, [c(r) ? (n(), a("div", ik, [t("div", nk, [t("div", ak, e(m.$t("currentIssNumber")), 1), t("div", ok, e(c(i).currentNumber), 1)]), t("div", sk, e(c(g)), 1), t("div", lk, [t("div", ck, e(c(i).drawIssnum), 1), t("div", rk, [t("div", {
                    style: ue({
                        backgroundImage: `url(${c(o)[0]}) `
                    })
                }, null, 4), c(i).binguoType !== 2 ? (n(), it(y, {
                    key: 0,
                    name: c(qt)("home/AllLotteryGames/binguo", "add")
                }, null, 8, ["name"])) : C("v-if", !0), t("div", {
                    style: ue({
                        backgroundImage: `url(${c(o)[1]}) `
                    })
                }, null, 4), c(i).binguoType !== 2 ? (n(), it(y, {
                    key: 1,
                    name: c(qt)("home/AllLotteryGames/binguo", "add")
                }, null, 8, ["name"])) : C("v-if", !0), t("div", {
                    style: ue({
                        backgroundImage: `url(${c(o)[2]})`
                    })
                }, null, 4)])])])) : (n(), a("div", uk, e(m.$t("playerEnd")), 1))]), t("div", dk, [c(i).binguoType === 1 ? (n(), a("div", pk, [t("div", gk, e(m.$t("result")), 1), t("div", bk, [(n(!0), a(B, null, G(c(i).trend_result, f => (n(), a("span", {
                    class: M(["tag", `${s(f)}_tag`])
                }, e(f), 3))), 256)), mk])])) : (n(), a("div", vk, [(n(!0), a(B, null, G(c(i).trend_result2, f => (n(), a("div", _k, [(n(!0), a(B, null, G(f, h => (n(), a("span", {
                    class: M(`${s(f)}_tag`)
                }, e(h), 3))), 256))]))), 256)), t("div", kk, [(n(), a(B, null, G(3, () => t("span", hk)), 64))])])), t("div", {
                    class: "trend_img",
                    onClick: w[0] || (w[0] = f => _())
                })])]), fk], 64)
            }
        }
    });
const $k = K(yk, [
        ["__scopeId", "data-v-5ba4aae3"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/Binguo/components/BinguoInfo.vue"]
    ]),
    wk = l => (Rt("data-v-88d327d7"), l = l(), St(), l),
    Tk = {
        class: "main_desk"
    },
    Ck = {
        key: 0,
        class: "rule_tip"
    },
    Nk = {
        class: "bet_size"
    },
    Lk = ["onClick"],
    zk = {
        class: "head"
    },
    xk = {
        class: "range"
    },
    Ik = {
        key: 0,
        class: "hot"
    },
    Rk = ["onClick"],
    Sk = {
        key: 1,
        class: "alike_box"
    },
    Bk = {
        class: "rule_tip"
    },
    Mk = {
        class: "alike"
    },
    Gk = ["onClick"],
    Ak = {
        class: "amount"
    },
    Pk = {
        class: "third_list"
    },
    Dk = {
        class: "ball"
    },
    Ok = {
        class: "ball2"
    },
    qk = {
        key: 0,
        class: "ball_hot2"
    },
    Ek = {
        class: "rule_tip"
    },
    jk = {
        class: "alike two_alike"
    },
    Hk = ["onClick"],
    Wk = {
        class: "amount"
    },
    Vk = {
        class: "third_list"
    },
    Fk = {
        class: "ball"
    },
    Uk = {
        class: "ball2"
    },
    Kk = {
        key: 0,
        class: "ball_hot2"
    },
    Xk = {
        class: "rule_tip"
    },
    Qk = {
        class: "alike one_alike"
    },
    Yk = ["onClick"],
    Zk = {
        class: "amount"
    },
    Jk = wk(() => t("div", {
        class: "ball_hot"
    }, null, -1)),
    th = {
        class: "third_list"
    },
    eh = {
        class: "ball"
    },
    ih = {
        class: "ball2"
    },
    nh = {
        key: 0,
        class: "ball_hot2"
    },
    ah = {
        class: "rule_tip_header"
    },
    oh = ["src"],
    sh = {
        class: "rule_tip_dialog"
    },
    lh = {
        class: "rule_tip_tit"
    },
    ch = {
        class: "rule_tip_text"
    },
    rh = U({
        __name: "BinguoMainDesk",
        setup(l) {
            const {
                t: i
            } = kt(), {
                betSizeList: o,
                betNumberList: r,
                isShowBetMoney: g,
                handleBet: b,
                store: d,
                alikeList: u,
                handleAlike: p,
                oddObject: s,
                formatNum: _
            } = Bi(), m = {
                sum: {
                    dice: "1,3,6",
                    tip1: i("result"),
                    tip2: i("binguoRuleTipText1")
                },
                third: {
                    dice: "6,6,6",
                    tip1: i("numbersMatch"),
                    tip2: i("binguoRuleTipText2")
                },
                two: {
                    dice: "6,6",
                    tip1: i("sameNum"),
                    tip2: i("binguoRuleTipText3")
                },
                one: {
                    dice: "1,2,3,5,4,6",
                    tip1: i("same"),
                    tip2: i("binguoRuleTipText4")
                }
            }, w = v(!1), y = v(), f = () => {
                const h = document.querySelectorAll(".rule_tip");
                for (let N = 0; N < h.length; N++) h[N].addEventListener("click", () => {
                    w.value = !0, N === 0 && (y.value = m.sum), N === 1 && (y.value = m.third), N === 2 && (y.value = m.two), N === 3 && (y.value = m.one)
                })
            };
            return Dt(() => d.value.binguoType, h => {
                h === 2 && Yt(() => {
                    f()
                })
            }, {
                deep: !0,
                immediate: !0
            }), (h, N) => (n(), a("div", Tk, [c(d).binguoType === 2 ? (n(), a("div", Ck, e(h.$t("xosoTxt60")), 1)) : C("v-if", !0), t("div", Nk, [(n(!0), a(B, null, G(c(o), L => (n(), a("div", {
                class: "size_item",
                onClick: be(k => c(b)(L), ["stop"])
            }, [t("div", zk, [t("span", null, e(c(g) && L.bet_amount ? c(_)(L.bet_amount) : ""), 1), t("span", null, e(L.beishu + "x" || ""), 1)]), t("div", {
                class: M(`value value_${L.type}`)
            }, e(L.value), 3), t("div", xk, e(L.range), 1), L.hot && c(g) ? (n(), a("div", Ik)) : C("v-if", !0)], 8, Lk))), 256))]), t("div", {
                class: M(["bet_number", {
                    betAll: c(d).binguoType === 2
                }])
            }, [(n(!0), a(B, null, G(c(r), L => (n(), a("div", {
                key: L.value,
                class: "item",
                onClick: k => c(b)(L)
            }, [t("div", null, e(c(g) && L.bet_amount ? c(_)(L.bet_amount) : ""), 1), t("div", null, e(L.value), 1), t("div", null, e(L.beishu) + "X", 1), L.hot && c(g) ? (n(), a("div", {
                key: 0,
                class: M(["hot", {
                    hot2: c(d).binguoType === 2
                }])
            }, null, 2)) : C("v-if", !0)], 8, Rk))), 128))], 2), c(d).binguoType === 2 ? (n(), a("div", Sk, [t("div", Bk, e(h.$t("trendTXT4")) + " " + e(h.$t("odds")) + e(c(s).third.amount1) + "x " + e(h.$t("k3bet3Desc4")) + " " + e(h.$t("odds")) + e(c(s).third.amount2) + "x ", 1), t("div", Mk, [(n(!0), a(B, null, G(c(u), L => (n(), a("div", {
                class: "alike_item",
                onClick: k => c(p)(L.value, 3)
            }, [t("div", Ak, e(c(g) && L.amount1 ? c(_)(L.amount1) : ""), 1), t("div", Pk, [(n(), a(B, null, G(3, () => t("div", Dk, [t("span", Ok, e(L.value), 1), L.hot1 ? (n(), a("span", qk)) : C("v-if", !0)])), 64))])], 8, Gk))), 256))]), t("div", Ek, e(h.$t("trendTXT3") + h.$t("odds")) + " " + e(c(s).two) + "x", 1), t("div", jk, [(n(!0), a(B, null, G(c(u).slice(0, 6), L => (n(), a("div", {
                class: "alike_item",
                onClick: k => c(p)(L.value, 2)
            }, [t("div", Wk, e(c(g) && L.amount2 ? c(_)(L.amount2) : ""), 1), t("div", Vk, [(n(), a(B, null, G(2, () => t("div", Fk, [t("span", Uk, e(L.value), 1), L.hot2 ? (n(), a("span", Kk)) : C("v-if", !0)])), 64))])], 8, Hk))), 256))]), t("div", Xk, e(h.$t("binguoRuleTip1")) + e(c(s).one.amount1) + "x " + e(h.$t("binguoRuleTip2")) + e(c(s).one.amount2) + "x " + e(h.$t("binguoRuleTip3")) + " " + e(c(s).one.amount3) + "x ", 1), t("div", Qk, [(n(!0), a(B, null, G(c(u).slice(0, 6), L => (n(), a("div", {
                class: "alike_item",
                onClick: k => c(p)(L.value, 1)
            }, [t("div", Zk, e(c(g) && L.amount3 ? c(_)(L.amount3) : ""), 1), Jk, t("div", th, [t("span", eh, [t("span", ih, e(L.value), 1), L.hot3 ? (n(), a("span", nh)) : C("v-if", !0)])])], 8, Yk))), 256))])])) : C("v-if", !0), x(xe, {
                show: w.value,
                "onUpdate:show": N[0] || (N[0] = L => w.value = L),
                showCloseIcon: !0,
                clickOutSide: !0,
                "show-cancel-btn": !1,
                showFooter: !1,
                isShowHeader: !1
            }, {
                title: A(() => {
                    var L;
                    return [t("div", ah, [(n(!0), a(B, null, G((L = y.value) == null ? void 0 : L.dice.split(","), k => (n(), a("img", {
                        src: c(qt)("home/AllLotteryGames/binguo", `rule_dice_${k}`),
                        alt: ""
                    }, null, 8, oh))), 256))])]
                }),
                content: A(() => {
                    var L, k;
                    return [t("div", sh, [t("div", lh, e((L = y.value) == null ? void 0 : L.tip1), 1), t("div", ch, e((k = y.value) == null ? void 0 : k.tip2), 1)])]
                }),
                footer: A(() => []),
                _: 1
            }, 8, ["show"])]))
        }
    });
const uh = K(rh, [
        ["__scopeId", "data-v-88d327d7"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/Binguo/components/BinguoMainDesk.vue"]
    ]),
    dh = {
        class: "bet_content"
    },
    ph = {
        class: "bet_tit"
    },
    gh = {
        class: "bet_cnt"
    },
    bh = {
        class: "bet_item"
    },
    mh = {
        class: "bet_item_tit"
    },
    vh = {
        class: "bet_money_list"
    },
    _h = ["onClick"],
    kh = {
        class: "bet_item"
    },
    hh = {
        class: "bet_item_tit"
    },
    fh = {
        class: "bet_step"
    },
    yh = {
        class: "bet_money_list bet_beishu"
    },
    $h = ["onClick"],
    wh = {
        class: "bet_info"
    },
    Th = {
        class: "tit"
    },
    Ch = {
        class: "pl",
        style: {
            color: "#fff"
        }
    },
    Nh = {
        class: "bet_info"
    },
    Lh = {
        class: "tit"
    },
    zh = {
        class: "pl",
        style: {
            color: "#cee98c"
        }
    },
    xh = {
        class: "bet_info"
    },
    Ih = {
        class: "tit"
    },
    Rh = {
        class: "pl",
        style: {
            color: "#f9bc36"
        }
    },
    Sh = {
        key: 0,
        class: "recharge_tip"
    },
    Bh = {
        class: "apply"
    },
    Mh = {
        class: "bet_btn_group"
    },
    Gh = U({
        __name: "BinguoBetSheet",
        setup(l) {
            const {
                betSheetVisible: i,
                store: o,
                betPopTXT: r,
                filterNumberSize: g,
                handleStep: b,
                checkRule: d,
                handleCancel: u,
                handleBetSubmit: p
            } = Bi(), _ = Me().getUserInfo, m = ht(), w = () => {
                m.push("/wallet/recharge")
            };
            return (y, f) => {
                const h = W("van-field"),
                    N = W("van-icon"),
                    L = W("van-checkbox"),
                    k = W("van-action-sheet");
                return n(), it(k, {
                    show: c(i),
                    "onUpdate:show": f[8] || (f[8] = $ => ce(i) ? i.value = $ : null),
                    closeable: !1
                }, {
                    default: A(() => [t("div", dh, [t("div", ph, e(y.$t("betting")), 1), t("div", gh, [(n(!0), a(B, null, G(c(o).bet_number.split(","), $ => (n(), a("span", {
                        class: M(`${c(g)}`)
                    }, e($), 3))), 256))]), t("div", bh, [t("div", mh, e(y.$t("amount")), 1), t("div", vh, [(n(!0), a(B, null, G(c(o).money_list, ($, T) => (n(), a("div", {
                        class: M(["money_item", {
                            monyActive: c(o).currentMoneyIndex === T
                        }]),
                        onClick: R => c(o).currentMoneyIndex = T
                    }, e($), 11, _h))), 256))])]), t("div", kh, [t("div", hh, [t("span", null, e(y.$t("multiple")), 1), t("div", fh, [t("span", {
                        onClick: f[0] || (f[0] = $ => c(b)("sub"))
                    }, "-"), x(h, {
                        modelValue: c(o).beishu,
                        "onUpdate:modelValue": f[1] || (f[1] = $ => c(o).beishu = $),
                        "input-align": "center",
                        onInput: f[2] || (f[2] = $ => {
                            if (9999 < Number($.target.value)) {
                                c(o).beishu = 9999;
                                return
                            }
                            if (Number($.target.value) < 1) {
                                c(o).beishu = 0;
                                return
                            }
                            c(o).beishu = Number($.target.value)
                        }),
                        type: "digit",
                        class: "bet_beishu_input"
                    }, null, 8, ["modelValue"]), t("span", {
                        onClick: f[3] || (f[3] = $ => c(b)("add"))
                    }, "+")])]), t("div", yh, [(n(!0), a(B, null, G(c(o).beishuList, ($, T) => (n(), a("div", {
                        class: M(["money_item", {
                            monyActive: c(o).currentBeishuIndex === T
                        }]),
                        onClick: R => c(o).currentBeishuIndex = T
                    }, " X" + e($), 11, $h))), 256))])]), t("div", wh, [t("div", Th, e(y.$t("odds")), 1), t("div", Ch, e(c(o).currentOdds), 1)]), t("div", Nh, [t("div", Lh, e(y.$t("walletBalance")), 1), t("div", zh, e(c(_).amount), 1)]), t("div", xh, [t("div", Ih, e(y.$t("betAmounts")), 1), t("div", Rh, e(c(o).bet_money * c(o).beishu), 1)]), c(_).amount < c(o).bet_money * c(o).beishu ? (n(), a("div", Sh, [t("div", null, [x(N, {
                        name: "warning-o",
                        size: "18"
                    }), E(" " + e(y.$t("walletTip")), 1)]), t("span", {
                        onClick: w
                    }, e(y.$t("goRecharge")) + " >>", 1)])) : C("v-if", !0), x(L, {
                        modelValue: c(d),
                        "onUpdate:modelValue": f[5] || (f[5] = $ => ce(d) ? d.value = $ : null),
                        "checked-color": "#CEE98C",
                        "label-disabled": "",
                        "icon-size": "24px"
                    }, {
                        default: A(() => [t("span", Bh, e(y.$t("agree")), 1), t("span", {
                            class: "rule",
                            onClick: f[4] || (f[4] = () => {
                                i.value = !1, r.value = !0
                            })
                        }, e(y.$t("presaleRules")), 1)]),
                        _: 1
                    }, 8, ["modelValue"]), t("div", Mh, [t("div", {
                        class: "cancel_btn",
                        onClick: f[6] || (f[6] = (...$) => c(u) && c(u)(...$))
                    }, e(y.$t("cancel")), 1), t("div", {
                        class: M(["bet_btn", {
                            inconformity: c(_).amount < c(o).bet_money * c(o).beishu || !c(d) || c(o).bet_money * c(o).beishu === 0
                        }]),
                        onClick: f[7] || (f[7] = (...$) => c(p) && c(p)(...$))
                    }, e(y.$t("betting")), 3)])])]),
                    _: 1
                }, 8, ["show"])
            }
        }
    });
const Ah = K(Gh, [
    ["__scopeId", "data-v-e3548ddc"],
    ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/Binguo/components/BinguoBetSheet.vue"]
]);
const Ph = {},
    pn = l => (Rt("data-v-a175919f"), l = l(), St(), l),
    Dh = {
        class: "container"
    },
    Oh = {
        class: "first-paragraph"
    },
    qh = {
        class: "first-statement"
    },
    Eh = {
        class: "paragraph-two"
    },
    jh = {
        class: "paragraph-two-statement"
    },
    Hh = {
        class: "paragraph-three"
    },
    Wh = {
        class: "paragraph-three-statement"
    },
    Vh = {
        class: "svg-container"
    },
    Fh = on('<div class="first-vector" data-v-a175919f><svg xmlns="http://www.w3.org/2000/svg" width="132" height="14" viewBox="0 0 132 14" fill="none" data-v-a175919f><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.99997C-2.41411e-08 6.72383 0.223857 6.49997 0.499999 6.49997L119.5 6.49996C119.776 6.49996 120 6.72382 120 6.99996C120 7.27611 119.776 7.49996 119.5 7.49996L0.5 7.49997C0.223858 7.49997 2.41411e-08 7.27612 0 6.99997Z" fill="url(#paint0_linear_22_2052)" data-v-a175919f></path><path d="M119.515 8.41418C118.734 7.63313 118.734 6.3668 119.515 5.58575L123.757 1.34311C124.538 0.562062 125.805 0.562062 126.586 1.34311L130.828 5.58575C131.609 6.3668 131.609 7.63313 130.828 8.41418L126.586 12.6568C125.805 13.4379 124.538 13.4379 123.757 12.6568L119.515 8.41418Z" fill="url(#paint1_linear_22_2052)" data-v-a175919f></path><defs data-v-a175919f><linearGradient id="paint0_linear_22_2052" x1="126" y1="7.00003" x2="-4.8188e-08" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-a175919f><stop stop-color="#5DBA47" data-v-a175919f></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-a175919f></stop></linearGradient><linearGradient id="paint1_linear_22_2052" x1="126" y1="7.00003" x2="-4.8188e-08" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-a175919f><stop stop-color="#5DBA47" data-v-a175919f></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-a175919f></stop></linearGradient></defs></svg></div>', 1),
    Uh = {
        class: "vector-heading"
    },
    Kh = on('<div class="vector-two" data-v-a175919f><svg xmlns="http://www.w3.org/2000/svg" width="132" height="14" viewBox="0 0 132 14" fill="none" data-v-a175919f><path fill-rule="evenodd" clip-rule="evenodd" d="M132 6.99997C132 6.72383 131.776 6.49997 131.5 6.49997L12.5 6.49996C12.2239 6.49996 12 6.72382 12 6.99996C12 7.27611 12.2239 7.49996 12.5 7.49996L131.5 7.49997C131.776 7.49997 132 7.27612 132 6.99997Z" fill="url(#paint0_linear_22_2053)" data-v-a175919f></path><path d="M12.4853 8.41418C13.2664 7.63313 13.2664 6.3668 12.4853 5.58575L8.24268 1.34311C7.46163 0.562062 6.1953 0.562062 5.41425 1.34311L1.17162 5.58575C0.390564 6.3668 0.390564 7.63313 1.17162 8.41418L5.41425 12.6568C6.1953 13.4379 7.46163 13.4379 8.24268 12.6568L12.4853 8.41418Z" fill="url(#paint1_linear_22_2053)" data-v-a175919f></path><defs data-v-a175919f><linearGradient id="paint0_linear_22_2053" x1="6.00001" y1="7.00003" x2="132" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-a175919f><stop stop-color="#5DBA47" data-v-a175919f></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-a175919f></stop></linearGradient><linearGradient id="paint1_linear_22_2053" x1="6.00001" y1="7.00003" x2="132" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-a175919f><stop stop-color="#5DBA47" data-v-a175919f></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-a175919f></stop></linearGradient></defs></svg></div>', 1),
    Xh = {
        class: "details-container-one"
    },
    Qh = {
        class: "details-container-items"
    },
    Yh = {
        class: "first-heading"
    },
    Zh = {
        class: "fontBold"
    },
    Jh = {
        class: "paragraph-inside-container"
    },
    t1 = {
        class: "paragraph-title"
    },
    e1 = {
        class: "paragraph-inside-container"
    },
    i1 = {
        class: "paragraph-title"
    },
    n1 = {
        class: "paragraph-inside-container"
    },
    a1 = {
        class: "paragraph-title"
    },
    o1 = {
        class: "paragraph-inside-container"
    },
    s1 = {
        class: "paragraph-title"
    },
    l1 = {
        class: "details-container-one"
    },
    c1 = {
        class: "details-container-items"
    },
    r1 = {
        class: "first-heading"
    },
    u1 = pn(() => t("span", {
        class: "fontBold"
    }, "1,2,3,4,5,6", -1)),
    d1 = {
        class: "paragraph-inside-container"
    },
    p1 = {
        class: "paragraph-title"
    },
    g1 = {
        class: "details-container-one"
    },
    b1 = {
        class: "details-container-items"
    },
    m1 = {
        class: "first-heading"
    },
    v1 = pn(() => t("span", {
        class: "fontBold"
    }, "11,22...66", -1)),
    _1 = {
        class: "paragraph-inside-container"
    },
    k1 = {
        class: "paragraph-title"
    },
    h1 = {
        class: "details-container-one"
    },
    f1 = {
        class: "details-container-items"
    },
    y1 = {
        class: "first-heading"
    },
    $1 = pn(() => t("span", {
        class: "fontBold"
    }, "111,222...666,***", -1)),
    w1 = {
        class: "paragraph-inside-container"
    },
    T1 = {
        class: "paragraph-title"
    },
    C1 = {
        class: "paragraph-inside-container"
    },
    N1 = {
        class: "paragraph-title"
    };

function L1(l, i) {
    return n(), a("div", Dh, [t("div", Oh, [t("p", qh, e(l.$t("binguoRuleText1")), 1)]), C(" ------------------------- First paragraph ends here--------------------------- "), t("div", Eh, [t("p", jh, e(l.$t("binguoRuleText2")), 1)]), C(" ------------------------- Paragraph two ends here--------------------------- "), t("div", Hh, [t("p", Wh, e(l.$t("binguoRuleText3")), 1)]), C(" ------------------------- Paragraph three ends here--------------------------- "), t("div", Vh, [Fh, t("div", Uh, e(l.$t("gamePlay")), 1), C(" ------------------------- vector heading ends here--------------------------- "), Kh]), C(" ------------------------- vector two ends here--------------------------- "), C(" ///////////////////////////////////////////////////// First container div starts from here   ///////////////////////////////////////////////////////////////////// "), t("div", Xh, [t("div", Qh, e(l.$t("xosoTxt60")), 1), C(" ------------------------- svg right ends here--------------------------- "), C(" ------------------------- details container heading ends here--------------------------- "), t("div", Yh, [E(e(l.$t("binguoRuleText4")) + " ", 1), t("span", Zh, e(l.$t("binguoRuleText5")), 1), E(e(l.$t("binguoRuleText6")), 1)]), C(" ------------------------- first-heading ends here--------------------------- "), t("div", Jh, [t("div", t1, [t("span", null, e(l.$t("binguoRuleText7")) + ":", 1), E(e(l.$t("binguoRuleText8")), 1)])]), t("div", e1, [t("div", i1, [t("span", null, e(l.$t("binguoRuleText9")) + ":", 1), E(e(l.$t("binguoRuleText10")), 1)])]), t("div", n1, [t("div", a1, [t("span", null, e(l.$t("binguoRuleText17")) + ":", 1), E(e(l.$t("binguoRuleText18")), 1)])]), t("div", o1, [t("div", s1, [t("span", null, e(l.$t("binguoRuleText11")) + ",", 1), E(e(l.$t("binguoRuleText12")), 1)])])]), C(" First container ends here  "), C(" ///////////////////////////////////////////////////// 2nd container div starts from here   ///////////////////////////////////////////////////////////////////// "), t("div", l1, [t("div", c1, e(l.$t("same")), 1), C(" ------------------------- svg right ends here--------------------------- "), C(" ------------------------- details container heading ends here--------------------------- "), t("div", r1, [E(e(l.$t("binguoRuleText4")) + " ", 1), u1]), C(" ------------------------- first-heading ends here--------------------------- "), t("div", d1, [t("div", p1, e(l.$t("binguoRuleText13")), 1)])]), C(" ///////////////////////////////////////////////////// 3rd container div starts from here   ///////////////////////////////////////////////////////////////////// "), t("div", g1, [t("div", b1, e(l.$t("sameNum")), 1), C(" ------------------------- svg right ends here--------------------------- "), C(" ------------------------- details container heading ends here--------------------------- "), t("div", m1, [E(e(l.$t("binguoRuleText4")), 1), v1]), C(" ------------------------- first-heading ends here--------------------------- "), t("div", _1, [t("div", k1, e(l.$t("binguoRuleText14")), 1)])]), C(" ///////////////////////////////////////////////////// 4th container div starts from here   ///////////////////////////////////////////////////////////////////// "), t("div", h1, [t("div", f1, e(l.$t("numbersMatch")), 1), C(" ------------------------- svg right ends here--------------------------- "), C(" ------------------------- details container heading ends here--------------------------- "), t("div", y1, [E(e(l.$t("binguoRuleText4")), 1), $1]), C(" ------------------------- first-heading ends here--------------------------- "), t("div", w1, [t("div", T1, e(l.$t("binguoRuleText15")), 1)]), t("div", C1, [t("div", N1, e(l.$t("binguoRuleText16")), 1)])])])
}
const z1 = K(Ph, [
        ["render", L1],
        ["__scopeId", "data-v-a175919f"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/Bingo/Rule.vue"]
    ]),
    x1 = l => (Rt("data-v-278561a4"), l = l(), St(), l),
    I1 = {
        class: "binguo_container"
    },
    R1 = x1(() => t("span", {
        class: "nav_title"
    }, "BINGO18", -1)),
    S1 = {
        class: "nav_right"
    },
    B1 = {
        class: "binguo_btn_group"
    },
    M1 = ["src"],
    G1 = {
        class: "over_dialog_tip"
    },
    A1 = {
        class: "playerRule"
    },
    P1 = {
        class: "playerRule"
    },
    D1 = {
        style: {
            color: "var(--textW)"
        }
    },
    O1 = U({
        __name: "index",
        setup(l) {
            const {
                goBack: i,
                betPopTXT: o,
                isShowBetMoney: r,
                handleToggleShwoMoney: g,
                store: b,
                overVisble: d,
                getBinguoConfig: u,
                getBinguoOddsList: p,
                playerRuleVisble: s
            } = Bi(), _ = ht(), m = () => {
                _.push({
                    path: "/home/AllLotteryGames/BinguoRecord"
                })
            };
            return zt(() => {
                u(), p()
            }), (w, y) => {
                const f = W("van-icon"),
                    h = W("NavBar");
                return n(), a("div", I1, [x(h, {
                    "left-arrow": "",
                    onClickLeft: c(i),
                    backgroundColor: "#0a4529"
                }, {
                    left: A(() => [x(f, {
                        name: "arrow-left",
                        size: 24
                    }), R1]),
                    right: A(() => [t("div", S1, [t("div", {
                        onClick: y[0] || (y[0] = be(() => s.value = !0, ["stop"])),
                        class: "binguo_explain"
                    }), t("div", {
                        class: M(["binguo_money", c(r) ? "binguo_money_look" : "binguo_money_hidden"]),
                        onClick: y[1] || (y[1] = be(() => c(g)(), ["stop"]))
                    }, null, 2), t("div", {
                        onClick: y[2] || (y[2] = be(() => m(), ["stop"])),
                        class: "binguo_count1"
                    })])]),
                    _: 1
                }, 8, ["onClickLeft"]), t("div", B1, [t("div", {
                    class: M(["btn_1", {
                        active_btn: c(b).binguoType === 1
                    }]),
                    onClick: y[3] || (y[3] = N => c(b).binguoType = 1)
                }, e(w.$t("binguoDesk1")), 3), t("div", {
                    class: M(["btn_2", {
                        active_btn: c(b).binguoType === 2
                    }]),
                    onClick: y[4] || (y[4] = N => c(b).binguoType = 2)
                }, e(w.$t("binguoDesk2")), 3)]), x($k), x(uh), x(Ah), x(xe, {
                    show: c(d),
                    onConfirm: y[5] || (y[5] = N => d.value = !1),
                    "show-cancel-btn": !1,
                    confirmText: w.$t("confirm")
                }, {
                    header: A(() => [t("img", {
                        src: c(qt)("home/AllLotteryGames/binguo", "binguo_tip"),
                        alt: "",
                        class: "binguo_tip"
                    }, null, 8, M1)]),
                    content: A(() => [t("div", G1, e(w.$t("over_dialog_tip")), 1)]),
                    _: 1
                }, 8, ["show", "confirmText"]), x(xe, {
                    class: "rule_dialog",
                    show: c(s),
                    onConfirm: y[6] || (y[6] = N => s.value = !1),
                    "show-cancel-btn": !1,
                    isShowHeader: !1,
                    confirmText: w.$t("iKonw")
                }, {
                    title: A(() => [t("div", null, e(w.$t("binguo_playerRule")), 1)]),
                    content: A(() => [t("div", A1, [x(z1)])]),
                    _: 1
                }, 8, ["show", "confirmText"]), x(xe, {
                    class: "rule_dialog",
                    show: c(o),
                    onConfirm: y[7] || (y[7] = N => o.value = !1),
                    "show-cancel-btn": !1,
                    isShowHeader: !1,
                    confirmText: w.$t("iKonw")
                }, {
                    title: A(() => [t("div", null, e(w.$t("presaleRules")), 1)]),
                    content: A(() => [t("div", P1, [t("div", D1, e(w.$t("betPopTXT")), 1)])]),
                    _: 1
                }, 8, ["show", "confirmText"])])
            }
        }
    });
const q1 = K(O1, [
        ["__scopeId", "data-v-278561a4"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/Binguo/index.vue"]
    ]),
    mI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: q1
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    E1 = {
        class: "binguo_count_tab"
    },
    j1 = ["onClick"],
    H1 = U({
        __name: "BinguoTab",
        setup(l) {
            const {
                store: i
            } = Ze(), {
                t: o
            } = kt(), r = [{
                lable: o("betting"),
                value: 1
            }, {
                lable: o("detail"),
                value: 2
            }, {
                lable: o("thisWeek"),
                value: 3
            }, {
                lable: o("binguoLeaderboard"),
                value: 4
            }];
            return (g, b) => (n(), a("div", E1, [(n(), a(B, null, G(r, (d, u) => t("div", {
                class: M(["item", {
                    active: c(i).currentTabIndex === u
                }]),
                key: d.value,
                onClick: p => c(i).currentTabIndex = u
            }, e(d.lable), 11, j1)), 64))]))
        }
    });
const W1 = K(H1, [
        ["__scopeId", "data-v-44316bfe"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/BinguoCount/components/BinguoTab.vue"]
    ]),
    V1 = l => (Rt("data-v-ca8cfc1e"), l = l(), St(), l),
    F1 = {
        class: "t-table_border"
    },
    U1 = {
        class: "t-table_th_round"
    },
    K1 = {
        class: "tab_header"
    },
    X1 = {
        key: 0,
        class: "tab_default_cell"
    },
    Q1 = {
        class: "tab_default_cell"
    },
    Y1 = {
        key: 0
    },
    Z1 = {
        key: 0
    },
    J1 = ["colspan"],
    tf = V1(() => t("div", {
        style: {
            color: "#666",
            "font-size": "14px",
            padding: "6px",
            "text-align": "center"
        }
    }, "暂无数据", -1)),
    ef = U({
        __name: "index",
        props: {
            dataSource: {
                type: Array,
                required: !0
            },
            columnOptions: {
                type: Array,
                required: !0
            },
            headerClass: {
                type: String,
                required: !1
            },
            bodyClass: {
                type: String,
                required: !1
            },
            isLockHeader: {
                type: Boolean,
                required: !1
            },
            border: {
                type: Boolean,
                required: !1,
                default: !0
            },
            scroll: {
                type: Boolean,
                required: !1,
                default: !0
            },
            borderColor: {
                type: String,
                required: !1,
                default: "#0B462A"
            },
            hBgColor: {
                type: String,
                required: !1,
                default: "linear-gradient(180deg, #0A603E 0%, #168055 100%)"
            },
            hColor: {
                type: String,
                required: !1,
                default: "#F9BC36"
            },
            align: {
                type: String,
                required: !1,
                default: "center"
            },
            rowHeight: {
                type: String,
                required: !1,
                default: "auto"
            },
            rowBgColor: {
                type: String,
                required: !1,
                default: "#09613E"
            },
            tabWidth: {
                type: String,
                required: !1,
                default: "100%"
            },
            tabHeight: {
                type: String,
                required: !1,
                default: "600px"
            }
        },
        setup(l) {
            const i = l;
            $o(s => ({
                "ca8cfc1e-tabWidth": s.tabWidth,
                "ca8cfc1e-tabHeight": s.tabHeight,
                "ca8cfc1e-rowHeight": c(d),
                "ca8cfc1e-align": c(g),
                "ca8cfc1e-rowBgColor": c(r),
                "ca8cfc1e-hColor": s.hColor,
                "ca8cfc1e-hBgColor": c(b)
            }));
            const o = v([]),
                {
                    rowBgColor: r,
                    align: g,
                    hBgColor: b,
                    rowHeight: d
                } = i,
                u = () => {
                    o.value = JSON.parse(JSON.stringify(i.dataSource))
                },
                p = () => {
                    i.columnOptions.forEach((s, _) => {
                        if (s.isLockColumn) {
                            let m = document.querySelector(`.th_${s.key}_${_}`),
                                w = document.querySelectorAll(`.td_${s.key}`);
                            m.style.position = "sticky", m.style.top = "-2px", m.style.left = "0", m.style.zIndex = "11", w.forEach(y => {
                                y.style.position = "sticky", y.style.left = "0", y.style.zIndex = "10"
                            })
                        }
                    })
                };
            return zt(() => {
                p()
            }), Dt(() => i.dataSource, (s, _) => {
                s !== _ && (u(), p())
            }, {
                deep: !0
            }), (s, _) => (n(), a("div", {
                class: "cuTable",
                style: ue({ ...s.scroll && {
                        overflowX: "auto"
                    },
                    ...!s.scroll && {
                        overflow: "hidden"
                    }
                })
            }, [t("div", F1, [t("table", U1, [t("tr", K1, [(n(!0), a(B, null, G(s.columnOptions, (m, w) => (n(), a("th", {
                style: ue({
                    width: m.width || 100 / s.columnOptions.length + "%"
                }),
                key: w + "p",
                class: M(`th_${m.key}_${w} default_header_cell ${s.border?"":"noBorder"}`)
            }, [m.isSlotHeader ? ve(s.$slots, m.key + "_head", {
                key: 1,
                item: m
            }, void 0, !0) : (n(), a("div", X1, e(m.title), 1))], 6))), 128))]), (n(!0), a(B, null, G(s.dataSource, (m, w) => ft((n(), a("tr", {
                class: "tab_body",
                key: w + "p1"
            }, [(n(!0), a(B, null, G(s.columnOptions, (y, f) => (n(), a("td", {
                key: f + "p2",
                class: M(`td_${y.key} default_cell ${y.cusTdClass||""} ${s.border?"":"noBorder"}`),
                style: ue({
                    width: y.width
                })
            }, [t("div", Q1, [y.isSlot ? C("v-if", !0) : (n(), a("span", Y1, e(m[y.key]), 1)), ve(s.$slots, y.key, {
                item: m
            }, void 0, !0)])], 6))), 128))])), [
                [te, s.dataSource && s.dataSource.length > 0]
            ])), 128)), s.dataSource.length === 0 ? (n(), a("tr", Z1, [t("td", {
                colspan: s.columnOptions.length
            }, [ve(s.$slots, "empty", {}, () => [tf], !0)], 8, J1)])) : C("v-if", !0)])])], 4))
        }
    });
const Xe = K(ef, [
        ["__scopeId", "data-v-ca8cfc1e"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/table/index.vue"]
    ]),
    nf = {
        class: "binguo_bet_count"
    },
    af = {
        class: "bingtip_count_title"
    },
    of = {
        class: "lately"
    },
    sf = {
        class: "average_column"
    },
    lf = {
        class: "noaverage_column"
    },
    cf = {
        class: "average_column"
    },
    rf = {
        class: "noaverage_column"
    },
    uf = {
        class: "progress_box"
    },
    df = {
        class: "progress"
    },
    pf = {
        class: "tit"
    },
    gf = {
        class: "progress"
    },
    bf = {
        class: "tit"
    },
    mf = {
        class: "progress"
    },
    vf = {
        class: "tit"
    },
    _f = {
        class: "bingtip_count_title"
    },
    kf = {
        class: "alike_column"
    },
    hf = {
        class: "big"
    },
    ff = {
        class: "bingtip_count_title two_title"
    },
    yf = {
        class: "alike_column"
    },
    $f = {
        class: "big"
    },
    wf = U({
        __name: "BinguoBetCount",
        setup(l) {
            const {
                store: i,
                filterStyle: o
            } = Ze(), {
                t: r
            } = kt(), g = J(() => {
                var p, s, _, m;
                return (p = i.smallAndBigTrend) != null && p.bigCount ? ((s = i.smallAndBigTrend) == null ? void 0 : s.bigCount) + ((_ = i.smallAndBigTrend) == null ? void 0 : _.smallCount) + ((m = i.smallAndBigTrend) == null ? void 0 : m.equalCount) : 0
            }), b = v([{
                title: r("xosoTxt60"),
                key: "number",
                isSlot: !0,
                cusTdClass: "sum_column"
            }, {
                title: r("binguoAvgCount"),
                key: "avgCount",
                isSlot: !0
            }, {
                title: r("binguoNotOpenCount"),
                key: "notOpenCount",
                isSlot: !0
            }]), d = v([{
                title: r("numbersMatch"),
                key: "number",
                isSlot: !0,
                cusTdClass: "sum_column"
            }, {
                title: r("binguoOpenCount"),
                key: "openCount",
                isSlot: !1
            }, {
                title: r("binguoAvgCount"),
                key: "avgCount",
                isSlot: !1
            }, {
                title: r("binguoNotOpenCount"),
                key: "notOpenCount",
                isSlot: !1
            }]), u = J(() => {
                let p = ts(d.value);
                return p[0].title = r("sameNum"), p
            });
            return (p, s) => {
                var m, w, y, f, h, N;
                const _ = W("van-progress");
                return n(), a("div", nf, [t("div", af, e(p.$t("binguoLastIssue")), 1), t("div", of , [x(Xe, {
                    "column-options": b.value,
                    "data-source": c(i).resultSumTrend.slice(0, 8),
                    rowHeight: "40px",
                    tabWidth: "49.6%",
                    tabHeight: "100%",
                    border: !1
                }, {
                    number: A(({
                        item: L
                    }) => [t("div", {
                        class: M(`sum_column ${c(o)(L.number)}`)
                    }, e(L.number), 3)]),
                    avgCount: A(({
                        item: L
                    }) => [t("div", sf, e(L.avgCount), 1)]),
                    notOpenCount: A(({
                        item: L
                    }) => [t("div", lf, e(L.notOpenCount), 1)]),
                    _: 1
                }, 8, ["column-options", "data-source"]), x(Xe, {
                    "column-options": b.value,
                    "data-source": c(i).resultSumTrend.slice(8, 16),
                    rowHeight: "40px",
                    tabWidth: "49.6%",
                    tabHeight: "100%",
                    border: !1
                }, {
                    number: A(({
                        item: L
                    }) => [t("div", {
                        class: M(`sum_column ${c(o)(L.number)}`)
                    }, e(L.number), 3)]),
                    avgCount: A(({
                        item: L
                    }) => [t("div", cf, e(L.avgCount), 1)]),
                    notOpenCount: A(({
                        item: L
                    }) => [t("div", rf, e(L.notOpenCount), 1)]),
                    _: 1
                }, 8, ["column-options", "data-source"])]), C(" 进度条 "), t("div", uf, [t("div", df, [t("div", pf, [t("span", null, e(p.$t("small")), 1), t("div", null, [E(e(p.$t("binguoAppeared")), 1), t("span", null, e((m = c(i).smallAndBigTrend) == null ? void 0 : m.smallCount), 1)])]), x(_, {
                    percentage: ((w = c(i).smallAndBigTrend) == null ? void 0 : w.smallCount) / g.value * 100,
                    "stroke-width": "10",
                    "track-color": "#0A603E",
                    color: "#5DBA47"
                }, null, 8, ["percentage"])]), t("div", gf, [t("div", bf, [t("span", null, e(p.$t("binguoHe")), 1), t("div", null, [E(e(p.$t("binguoAppeared")), 1), t("span", null, e((y = c(i).smallAndBigTrend) == null ? void 0 : y.equalCount), 1)])]), x(_, {
                    percentage: ((f = c(i).smallAndBigTrend) == null ? void 0 : f.equalCount) / g.value * 100,
                    "stroke-width": "10",
                    "track-color": "#0A603E",
                    color: "#F9BC36"
                }, null, 8, ["percentage"])]), t("div", mf, [t("div", vf, [t("span", null, e(p.$t("k3Big")), 1), t("div", null, [E(e(p.$t("binguoAppeared")), 1), t("span", null, e((h = c(i).smallAndBigTrend) == null ? void 0 : h.bigCount), 1)])]), x(_, {
                    percentage: ((N = c(i).smallAndBigTrend) == null ? void 0 : N.bigCount) / g.value * 100,
                    "stroke-width": "10",
                    "track-color": "#0A603E",
                    color: "#5DBA47"
                }, null, 8, ["percentage"])])]), t("div", _f, e(p.$t("binguoThirdAlike")), 1), x(Xe, {
                    "column-options": d.value,
                    "data-source": c(i).threeSameTrend,
                    rowHeight: "40px",
                    tabWidth: "100%",
                    tabHeight: "100%",
                    border: !1,
                    class: "binguoCountTable"
                }, {
                    number: A(({
                        item: L
                    }) => [t("div", kf, [(n(!0), a(B, null, G((L.number + "").split(""), k => (n(), a("div", hf, e(k), 1))), 256))])]),
                    _: 1
                }, 8, ["column-options", "data-source"]), t("div", ff, e(p.$t("binguoTwoAlike")), 1), x(Xe, {
                    "column-options": u.value,
                    "data-source": c(i).twoSameTrend,
                    rowHeight: "40px",
                    tabWidth: "100%",
                    tabHeight: "100%",
                    border: !1,
                    class: "binguoCountTable"
                }, {
                    number: A(({
                        item: L
                    }) => [t("div", yf, [(n(!0), a(B, null, G((L.number + "").split(""), k => (n(), a("div", $f, e(k), 1))), 256))])]),
                    _: 1
                }, 8, ["column-options", "data-source"])])
            }
        }
    });
const Tf = K(wf, [
        ["__scopeId", "data-v-cd38c622"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/BinguoCount/components/BinguoBetCount.vue"]
    ]),
    gi = l => (Rt("data-v-f03aed68"), l = l(), St(), l),
    Cf = {
        class: "binguo_detail"
    },
    Nf = {
        class: "bingtip_count_title"
    },
    Lf = {
        class: "result1"
    },
    zf = {
        class: "column_list"
    },
    xf = {
        class: "bingtip_count_title"
    },
    If = {
        class: "record_list"
    },
    Rf = {
        class: "record_item"
    },
    Sf = {
        class: "item"
    },
    Bf = {
        key: 1
    },
    Mf = {
        class: "bingtip_count_title"
    },
    Gf = {
        class: "issueNo_head"
    },
    Af = {
        class: "issue_text"
    },
    Pf = {
        class: "issue_number"
    },
    Df = gi(() => t("div", {
        class: "ball"
    }, "1", -1)),
    Of = gi(() => t("div", {
        class: "ball"
    }, "2", -1)),
    qf = gi(() => t("div", {
        class: "ball"
    }, "3", -1)),
    Ef = gi(() => t("div", {
        class: "ball"
    }, "4", -1)),
    jf = gi(() => t("div", {
        class: "ball"
    }, "5", -1)),
    Hf = gi(() => t("div", {
        class: "ball"
    }, "6", -1)),
    Wf = {
        class: "issueNo_column"
    },
    Vf = U({
        __name: "BinguoDetail",
        setup(l) {
            const {
                t: i
            } = kt(), o = v([{
                title: i("betNumber"),
                key: "issueNo",
                isSlotHeader: !0,
                isSlot: !0,
                width: "28%"
            }, {
                title: "1",
                key: "num1",
                isSlotHeader: !0,
                isSlot: !0,
                width: "10%"
            }, {
                title: "2",
                key: "num2",
                isSlotHeader: !0,
                isSlot: !0,
                width: "10%"
            }, {
                title: "3",
                key: "num3",
                isSlotHeader: !0,
                isSlot: !0,
                width: "10%"
            }, {
                title: "4",
                key: "num4",
                isSlotHeader: !0,
                isSlot: !0,
                width: "10%"
            }, {
                title: "5",
                key: "num5",
                isSlotHeader: !0,
                isSlot: !0,
                width: "10%"
            }, {
                title: "6",
                key: "num6",
                isSlotHeader: !0,
                isSlot: !0,
                width: "10%"
            }, {
                title: i("gameRecordTotal"),
                key: "sum",
                isSlot: !0,
                width: "10%"
            }]), {
                filterStyle: r,
                last50Result: g,
                last50Record: b,
                last50RecordResult: d
            } = Ze();
            return (u, p) => (n(), a("div", Cf, [t("div", Nf, e(u.$t("binguoLast50")), 1), t("div", Lf, [(n(!0), a(B, null, G(c(g), s => (n(), a("div", zf, [(n(!0), a(B, null, G(s, _ => (n(), a("div", {
                class: M(`item ${c(r)(_)}`)
            }, e(_), 3))), 256))]))), 256))]), t("div", xf, e(u.$t("binguoLast50Record")), 1), t("div", If, [(n(!0), a(B, null, G(c(b), s => (n(), a("div", Rf, [(n(!0), a(B, null, G(s, _ => (n(), a("div", Sf, [_ ? (n(), a("div", {
                key: 0,
                class: M(`${c(r)(_)}`)
            }, e(_), 3)) : (n(), a("div", Bf))]))), 256))]))), 256))]), t("div", Mf, e(u.$t("binguoRecordResult")), 1), x(Xe, {
                "column-options": o.value,
                "data-source": c(d),
                rowHeight: "30px",
                tabWidth: "100%",
                hBgColor: "linear-gradient(180deg, #0A603E 0%, #168055 100%)",
                tabHeight: "100%",
                border: !0,
                hColor: "#FFF880"
            }, {
                issueNo_head: A(() => [t("div", Gf, [t("span", Af, e(u.$t("betNumber")), 1), t("span", Pf, e(u.$t("binguoNumber")), 1)])]),
                num1_head: A(() => [Df]),
                num2_head: A(() => [Of]),
                num3_head: A(() => [qf]),
                num4_head: A(() => [Ef]),
                num5_head: A(() => [jf]),
                num6_head: A(() => [Hf]),
                issueNo: A(({
                    item: s
                }) => [t("div", Wf, e(s.issueNo), 1)]),
                sum: A(({
                    item: s
                }) => [t("div", {
                    class: M(`sum_column ${c(r)(s.sum)}`)
                }, e(s.sum), 3)]),
                num1: A(({
                    item: s
                }) => [t("div", {
                    class: M(`num_column num_column${s.num1}`)
                }, [(n(!0), a(B, null, G(s.num1, () => (n(), a("div"))), 256))], 2)]),
                num2: A(({
                    item: s
                }) => [t("div", {
                    class: M(`num_column num_column${s.num2}`)
                }, [(n(!0), a(B, null, G(s.num2, () => (n(), a("div"))), 256))], 2)]),
                num3: A(({
                    item: s
                }) => [t("div", {
                    class: M(`num_column num_column${s.num3}`)
                }, [(n(!0), a(B, null, G(s.num3, () => (n(), a("div"))), 256))], 2)]),
                num4: A(({
                    item: s
                }) => [t("div", {
                    class: M(`num_column num_column${s.num4}`)
                }, [(n(!0), a(B, null, G(s.num4, () => (n(), a("div"))), 256))], 2)]),
                num5: A(({
                    item: s
                }) => [t("div", {
                    class: M(`num_column num_column${s.num5}`)
                }, [(n(!0), a(B, null, G(s.num5, () => (n(), a("div"))), 256))], 2)]),
                num6: A(({
                    item: s
                }) => [t("div", {
                    class: M(`num_column num_column${s.num6}`)
                }, [(n(!0), a(B, null, G(s.num6, () => (n(), a("div"))), 256))], 2)]),
                _: 1
            }, 8, ["column-options", "data-source"])]))
        }
    });
const Ff = K(Vf, [
        ["__scopeId", "data-v-f03aed68"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/BinguoCount/components/BinguoDetail.vue"]
    ]),
    gn = l => (Rt("data-v-ec5b8d89"), l = l(), St(), l),
    Uf = {
        class: "trend_container"
    },
    Kf = {
        class: "trend_header"
    },
    Xf = {
        class: "trend_header_title"
    },
    Qf = gn(() => t("span", null, "7", -1)),
    Yf = gn(() => t("br", null, null, -1)),
    Zf = gn(() => t("span", null, "100", -1)),
    Jf = ["src"],
    ty = ["src"],
    ey = {
        class: "trend_table"
    },
    iy = {
        class: "trend_tip"
    },
    ny = {
        class: "tip_text"
    },
    ay = {
        key: 0
    },
    oy = {
        key: 0
    },
    sy = {
        class: "custom_column"
    },
    ly = {
        class: "custom_column winmount_column"
    },
    cy = U({
        __name: "BinguoTrend",
        setup(l) {
            const {
                store: i
            } = Ze(), {
                t: o
            } = kt(), r = v([{
                title: "Top",
                key: "rankID",
                isSlot: !0,
                width: "20%",
                cusTdClass: "rankID_column"
            }, {
                title: o("account"),
                key: "userName",
                width: "38%",
                isSlot: !0
            }, {
                title: o("winningAmount"),
                width: "42%",
                key: "winAmount",
                isSlot: !0
            }]), g = ht(), b = () => {
                i.isTrend || g.back()
            };
            return (d, u) => (n(), a("div", Uf, [t("div", Kf, [t("div", Xf, [E(e(d.$t("binguoLately")), 1), Qf, E(e(d.$t("days")), 1), Yf, E(" " + e(d.$t("binguoQian")), 1), Zf, E(e(d.$t("binguoMin") + d.$t("binguoPaimin")), 1)]), t("img", {
                src: c(qt)("home/AllLotteryGames/binguo", "trend1"),
                class: "trend1",
                alt: ""
            }, null, 8, Jf), t("img", {
                src: c(qt)("home/AllLotteryGames/binguo", "trend2"),
                class: "trend2",
                alt: ""
            }, null, 8, ty)]), t("div", ey, [t("div", iy, [t("div", ny, [E(e(c(i).isTrend ? d.$t("binguoMyLead") : d.$t("binguoNotBoard")) + " ", 1), c(i).isTrend ? C("v-if", !0) : (n(), a("br", ay)), E(" " + e(c(i).isTrend ? "" : d.$t("binguoGoPlay")), 1)]), t("div", {
                class: "trend_go",
                onClick: b
            }, [E(e(c(i).isTrend ? c(i).userRank : "GO") + " ", 1), c(i).isTrend ? (n(), a("span", oy, e(d.$t("binguoMin")), 1)) : C("v-if", !0)])]), x(Xe, {
                "column-options": r.value,
                "data-source": c(i).trendList,
                rowHeight: "50px",
                tabWidth: "100%",
                hBgColor: "linear-gradient(180deg, #13AB62 0%, #0F6946 100%)",
                tabHeight: "100%",
                border: !1,
                hColor: "#FFF880"
            }, {
                rankID: A(({
                    item: p
                }) => [t("div", {
                    class: M(["rankID_column", `${p.rankID<4?"top_"+p.rankID:"rank_text"}`])
                }, e(p.rankID > 3 ? p.rankID : ""), 3)]),
                userName: A(({
                    item: p
                }) => [t("div", sy, e(p.userName), 1)]),
                winAmount: A(({
                    item: p
                }) => [t("div", ly, e(c(It)(p.winAmount)), 1)]),
                _: 1
            }, 8, ["column-options", "data-source"])])]))
        }
    });
const ry = K(cy, [
        ["__scopeId", "data-v-ec5b8d89"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/BinguoCount/components/BinguoTrend.vue"]
    ]),
    uy = {
        class: "last7Day_container"
    },
    dy = {
        class: "bingtip_count_title"
    },
    py = {
        class: "column_time"
    },
    gy = {
        key: 0,
        class: "result"
    },
    by = {
        class: "quan"
    },
    my = {
        key: 0,
        class: "result"
    },
    vy = {
        class: "quan"
    },
    _y = {
        key: 0,
        class: "result"
    },
    ky = {
        class: "quan"
    },
    hy = {
        key: 0,
        class: "result"
    },
    fy = {
        class: "quan"
    },
    yy = {
        key: 0,
        class: "result"
    },
    $y = {
        class: "quan"
    },
    wy = {
        key: 0,
        class: "result"
    },
    Ty = {
        class: "quan"
    },
    Cy = {
        key: 0,
        class: "result"
    },
    Ny = {
        class: "quan"
    },
    Ly = U({
        __name: "BinguoLast7Day",
        setup(l) {
            const {
                store: i,
                columnOptions: o,
                filterStyle: r
            } = Ze();
            return (g, b) => (n(), a("div", uy, [t("div", dy, e(g.$t("binguoLast7Result")), 1), x(Xe, {
                "column-options": c(o),
                "data-source": c(i).last7Day,
                rowHeight: "40px",
                "tab-height": "1200px"
            }, {
                issueEndTime: A(({
                    item: d
                }) => [t("div", py, e(d.issueEndTime), 1)]),
                time_index_0: A(({
                    item: d
                }) => {
                    var u, p, s;
                    return [d.time_index_0 ? (n(), a("div", gy, [t("div", by, [(n(!0), a(B, null, G((u = d.time_index_0) == null ? void 0 : u.result.split(""), _ => (n(), a("div", null, e(_), 1))), 256))]), t("div", {
                        class: M(["result_sum", c(r)((p = d.time_index_0) == null ? void 0 : p.resultSum)])
                    }, e((s = d.time_index_0) == null ? void 0 : s.resultSum), 3)])) : C("v-if", !0)]
                }),
                time_index_1: A(({
                    item: d
                }) => {
                    var u, p, s;
                    return [d.time_index_1 ? (n(), a("div", my, [t("div", vy, [(n(!0), a(B, null, G((u = d.time_index_1) == null ? void 0 : u.result.split(""), _ => (n(), a("div", null, e(_), 1))), 256))]), t("div", {
                        class: M(["result_sum", c(r)((p = d.time_index_1) == null ? void 0 : p.resultSum)])
                    }, e((s = d.time_index_1) == null ? void 0 : s.resultSum), 3)])) : C("v-if", !0)]
                }),
                time_index_2: A(({
                    item: d
                }) => {
                    var u, p, s;
                    return [d.time_index_2 ? (n(), a("div", _y, [t("div", ky, [(n(!0), a(B, null, G((u = d.time_index_2) == null ? void 0 : u.result.split(""), _ => (n(), a("div", null, e(_), 1))), 256))]), t("div", {
                        class: M(["result_sum", c(r)((p = d.time_index_2) == null ? void 0 : p.resultSum)])
                    }, e((s = d.time_index_2) == null ? void 0 : s.resultSum), 3)])) : C("v-if", !0)]
                }),
                time_index_3: A(({
                    item: d
                }) => {
                    var u, p, s;
                    return [d.time_index_3 ? (n(), a("div", hy, [t("div", fy, [(n(!0), a(B, null, G((u = d.time_index_3) == null ? void 0 : u.result.split(""), _ => (n(), a("div", null, e(_), 1))), 256))]), t("div", {
                        class: M(["result_sum", c(r)((p = d.time_index_3) == null ? void 0 : p.resultSum)])
                    }, e((s = d.time_index_3) == null ? void 0 : s.resultSum), 3)])) : C("v-if", !0)]
                }),
                time_index_4: A(({
                    item: d
                }) => {
                    var u, p, s;
                    return [d.time_index_4 ? (n(), a("div", yy, [t("div", $y, [(n(!0), a(B, null, G((u = d.time_index_4) == null ? void 0 : u.result.split(""), _ => (n(), a("div", null, e(_), 1))), 256))]), t("div", {
                        class: M(["result_sum", c(r)((p = d.time_index_4) == null ? void 0 : p.resultSum)])
                    }, e((s = d.time_index_4) == null ? void 0 : s.resultSum), 3)])) : C("v-if", !0)]
                }),
                time_index_5: A(({
                    item: d
                }) => {
                    var u, p, s;
                    return [d.time_index_5 ? (n(), a("div", wy, [t("div", Ty, [(n(!0), a(B, null, G((u = d.time_index_5) == null ? void 0 : u.result.split(""), _ => (n(), a("div", null, e(_), 1))), 256))]), t("div", {
                        class: M(["result_sum", c(r)((p = d.time_index_5) == null ? void 0 : p.resultSum)])
                    }, e((s = d.time_index_5) == null ? void 0 : s.resultSum), 3)])) : C("v-if", !0)]
                }),
                time_index_6: A(({
                    item: d
                }) => {
                    var u, p, s;
                    return [d.time_index_6 ? (n(), a("div", Cy, [t("div", Ny, [(n(!0), a(B, null, G((u = d.time_index_6) == null ? void 0 : u.result.split(""), _ => (n(), a("div", null, e(_), 1))), 256))]), t("div", {
                        class: M(["result_sum", c(r)((p = d.time_index_6) == null ? void 0 : p.resultSum)])
                    }, e((s = d.time_index_6) == null ? void 0 : s.resultSum), 3)])) : C("v-if", !0)]
                }),
                _: 1
            }, 8, ["column-options", "data-source"])]))
        }
    });
const zy = K(Ly, [
        ["__scopeId", "data-v-177bff59"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/BinguoCount/components/BinguoLast7Day.vue"]
    ]),
    xy = {
        class: "binguo_count"
    },
    Iy = U({
        __name: "index",
        setup(l) {
            const {
                store: i,
                getTrendstatistics: o,
                getLotteryRankList: r,
                getLotteryResult7Day: g,
                getBingo18Last50Result: b
            } = Ze(), d = ht(), u = () => {
                d.back()
            };
            return Dt(() => i.currentTabIndex, p => {
                switch (p) {
                    case 0:
                        o();
                        break;
                    case 1:
                        b();
                        break;
                    case 2:
                        g();
                        break;
                    case 3:
                        r();
                        break
                }
            }, {
                immediate: !0
            }), (p, s) => {
                const _ = W("NavBar");
                return n(), a("div", xy, [x(_, {
                    "left-arrow": "",
                    onClickLeft: u,
                    backgroundColor: "#0a4529",
                    title: `${p.$t("binguoCount")}`
                }, null, 8, ["title"]), x(W1), c(i).currentTabIndex === 0 ? (n(), it(Tf, {
                    key: 0
                })) : C("v-if", !0), c(i).currentTabIndex === 1 ? (n(), it(Ff, {
                    key: 1
                })) : C("v-if", !0), c(i).currentTabIndex === 2 ? (n(), it(zy, {
                    key: 2
                })) : C("v-if", !0), c(i).currentTabIndex === 3 ? (n(), it(ry, {
                    key: 3
                })) : C("v-if", !0)])
            }
        }
    });
const Ry = K(Iy, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/BinguoCount/index.vue"]
    ]),
    vI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ry
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Mi = l => (Rt("data-v-8073d5d0"), l = l(), St(), l),
    Sy = {
        class: "body-container"
    },
    By = {
        class: "MyGameRecordList__C"
    },
    My = ["onClick"],
    Gy = {
        class: "MyGameRecordList__C_left"
    },
    Ay = {
        class: "MyGameRecordList__C-item-m"
    },
    Py = {
        class: "MyGameRecordList__C-item-m-top"
    },
    Dy = {
        class: "MyGameRecordList__C-item-m-bottom"
    },
    Oy = {
        key: 0
    },
    qy = {
        key: 0,
        class: "MyGameRecordList__C-detail"
    },
    Ey = {
        class: "detail_title"
    },
    jy = {
        class: "detail_item"
    },
    Hy = {
        class: "item_title"
    },
    Wy = {
        class: "item_result"
    },
    Vy = ["onClick"],
    Fy = Mi(() => t("path", {
        d: "M6.5 6.2158V3.90625C6.5 3.1296 7.1296 2.5 7.90625 2.5H20.0938C20.8704 2.5 21.5 3.1296 21.5 3.90625V16.0938C21.5 16.8704 20.8704 17.5 20.0938 17.5H17.7582",
        stroke: "#87C7AF",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }, null, -1)),
    Uy = Mi(() => t("path", {
        d: "M16.0938 6.5H3.90625C3.1296 6.5 2.5 7.1296 2.5 7.90625V20.0938C2.5 20.8704 3.1296 21.5 3.90625 21.5H16.0938C16.8704 21.5 17.5 20.8704 17.5 20.0938V7.90625C17.5 7.1296 16.8704 6.5 16.0938 6.5Z",
        fill: "#87C7AF",
        stroke: "#87C7AF",
        "stroke-width": "2",
        "stroke-linejoin": "round"
    }, null, -1)),
    Ky = [Fy, Uy],
    Xy = {
        class: "detail_item"
    },
    Qy = {
        class: "item_title"
    },
    Yy = {
        class: "item_result"
    },
    Zy = ["onClick"],
    Jy = Mi(() => t("path", {
        d: "M6.5 6.2158V3.90625C6.5 3.1296 7.1296 2.5 7.90625 2.5H20.0938C20.8704 2.5 21.5 3.1296 21.5 3.90625V16.0938C21.5 16.8704 20.8704 17.5 20.0938 17.5H17.7582",
        stroke: "#87C7AF",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }, null, -1)),
    t0 = Mi(() => t("path", {
        d: "M16.0938 6.5H3.90625C3.1296 6.5 2.5 7.1296 2.5 7.90625V20.0938C2.5 20.8704 3.1296 21.5 3.90625 21.5H16.0938C16.8704 21.5 17.5 20.8704 17.5 20.0938V7.90625C17.5 7.1296 16.8704 6.5 16.0938 6.5Z",
        fill: "#87C7AF",
        stroke: "#87C7AF",
        "stroke-width": "2",
        "stroke-linejoin": "round"
    }, null, -1)),
    e0 = [Jy, t0],
    i0 = {
        class: "detail_item"
    },
    n0 = {
        class: "item_title"
    },
    a0 = {
        class: "item_result"
    },
    o0 = {
        class: "detail_item"
    },
    s0 = {
        class: "item_title"
    },
    l0 = {
        class: "item_result"
    },
    c0 = {
        class: "detail_item"
    },
    r0 = {
        class: "item_title"
    },
    u0 = {
        class: "item_result"
    },
    d0 = {
        class: "detail_item"
    },
    p0 = {
        class: "item_title"
    },
    g0 = {
        class: "item_result"
    },
    b0 = {
        class: "detail_item"
    },
    m0 = {
        class: "item_title"
    },
    v0 = {
        class: "item_result"
    },
    _0 = {
        class: "detail_item"
    },
    k0 = {
        class: "item_title"
    },
    h0 = {
        class: "item_result"
    },
    f0 = {
        class: "draw_result"
    },
    y0 = {
        class: "detail_item"
    },
    $0 = {
        class: "item_title"
    },
    w0 = {
        key: 1,
        class: "item_result"
    },
    T0 = {
        class: "detail_item"
    },
    C0 = {
        class: "item_title"
    },
    N0 = {
        class: "detail_item"
    },
    L0 = {
        class: "item_title"
    },
    z0 = {
        class: "item_result"
    },
    x0 = {
        class: "detail_item"
    },
    I0 = {
        class: "item_title"
    },
    R0 = {
        class: "item_result"
    },
    S0 = U({
        __name: "RecordList",
        props: {
            mayrecord: {
                type: Array,
                required: !0
            }
        },
        setup(l) {
            const {
                t: i
            } = kt(), {
                filterGameType: o
            } = Ze(), r = v(-1), g = u => {
                r.value == u ? r.value = -1 : r.value = u
            }, b = (u, p) => {
                if (p == 1) switch (u) {
                    case 0:
                        return i("bettingResultState3");
                    case 1:
                        return i("hasWon");
                    case 2:
                        return i("bettingResultState1");
                    case 3:
                        return i("xosoTxt76");
                    default:
                        return ""
                } else switch (u) {
                    case 0:
                        return "fail";
                    case 1:
                        return "success";
                    case 2:
                        return "wait";
                    case 3:
                        return "ing";
                    default:
                        return "ing"
                }
            }, d = u => {
                switch (u) {
                    case "Big":
                        return i("big");
                    case "Drawn":
                        return i("binguoHe");
                    case "Small":
                        return i("small");
                    default:
                        return u
                }
            };
            return (u, p) => (n(), a("div", Sy, [t("div", By, [(n(!0), a(B, null, G(u.mayrecord, (s, _) => (n(), a(B, {
                key: _
            }, [t("div", {
                class: "MyGameRecordList__C-item",
                onClick: m => g(_)
            }, [t("div", {
                class: M(["MyGameRecordList__C-item-l", c(o)(Number(s.gameType), s.selectType).className])
            }, e(d(s.selectType)), 3), t("div", Gy, [t("div", Ay, [t("div", Py, e(s.issueNumber), 1), t("div", Dy, e(s.addTime), 1)]), t("div", {
                class: M(["MyGameRecordList__C-item-r", b(s.state, 2)])
            }, [t("div", {
                class: M(b(s.state, 2))
            }, e(b(s.state, 1)), 3), s.premium ? (n(), a("span", Oy, e(c(It)(s.profitAmount)), 1)) : C("v-if", !0)], 2)])], 8, My), _ == r.value ? (n(), a("div", qy, [t("div", Ey, e(u.$t("details")), 1), t("div", jy, [t("div", Hy, e(u.$t("orderNoMay")), 1), t("div", Wy, [E(e(s.orderNumber) + " ", 1), (n(), a("svg", {
                onClick: m => c(We)(s.orderNumber),
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none"
            }, Ky, 8, Vy))])]), t("div", Xy, [t("div", Qy, e(u.$t("issueMay")), 1), t("div", Yy, [E(e(s.issueNumber) + " ", 1), (n(), a("svg", {
                onClick: m => c(We)(s.issueNumber),
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none"
            }, e0, 8, Zy))])]), t("div", i0, [t("div", n0, e(u.$t("gamePlay")), 1), t("div", a0, e(c(o)(Number(s.gameType), s.selectType).playerName), 1)]), t("div", o0, [t("div", s0, e(u.$t("amountMay")), 1), t("div", l0, e(s.amount), 1)]), t("div", c0, [t("div", r0, e(u.$t("multiple")), 1), t("div", u0, e(s.figure), 1)]), t("div", d0, [t("div", p0, e(u.$t("afterTaxAmount")), 1), t("div", g0, e(s.realAmount), 1)]), t("div", b0, [t("div", m0, e(u.$t("tax")), 1), t("div", v0, e(s.serviceCharge || "-"), 1)]), t("div", _0, [t("div", k0, e(u.$t("winTips3")), 1), t("div", h0, [t("div", {
                class: M(["draw_num", `${s.sumCount?c(o)(Number(s.gameType),s.selectType).className:""}`])
            }, e(s.sumCount || "-"), 3), s.premium ? (n(!0), a(B, {
                key: 0
            }, G(s.premium.split(""), m => (n(), a("div", f0, e(m), 1))), 256)) : C("v-if", !0)])]), t("div", y0, [t("div", $0, e(u.$t("betting")), 1), s.gameType === "2" || s.gameType === "1" ? (n(), a("div", {
                key: 0,
                class: M(["item_result item_bet", `${c(o)(Number(s.gameType),s.selectType).className}`])
            }, e(s.selectType), 3)) : (n(), a("div", w0, [(n(!0), a(B, null, G(s.selectType.split(""), m => (n(), a("div", {
                class: M(["item_result item_bet item_alike", `${c(o)(Number(s.gameType),s.selectType).className}`])
            }, e(m), 3))), 256))]))]), t("div", T0, [t("div", C0, e(u.$t("statusMay")), 1), t("div", {
                class: M(["item_result", b(s.state, 2)])
            }, e(b(s.state, 1)), 3)]), t("div", N0, [t("div", L0, e(u.$t("winOrLose")), 1), t("div", z0, e(s.profitAmount ? c(It)(s.profitAmount) : "-"), 1)]), t("div", x0, [t("div", I0, e(u.$t("createTime")), 1), t("div", R0, e(s.addTime), 1)])])) : C("v-if", !0)], 64))), 128))])]))
        }
    });
const B0 = K(S0, [
        ["__scopeId", "data-v-8073d5d0"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/Bingo/RecordList.vue"]
    ]),
    M0 = {
        class: "record-container"
    },
    G0 = {
        class: "WinTrx__C-head-more"
    },
    A0 = U({
        __name: "index",
        setup(l) {
            const i = ht(),
                o = () => {
                    i.back()
                },
                r = v([]),
                g = v({
                    pageSize: 20
                }),
                b = () => {},
                d = () => {},
                u = v("");
            return (p, s) => {
                const _ = W("NavBar");
                return n(), a("div", M0, [x(_, {
                    "left-arrow": "",
                    onClickLeft: o,
                    "background-color": "#0a4529",
                    title: p.$t("xosoTxt73")
                }, {
                    right: A(() => [t("div", G0, [t("div", {
                        onClick: s[0] || (s[0] = m => b())
                    }), t("div", {
                        class: M({
                            disableVoice: u.value == "2"
                        }),
                        onClick: d
                    }, null, 2)])]),
                    _: 1
                }, 8, ["title"]), x(ea, {
                    list: r.value,
                    "onUpdate:list": s[1] || (s[1] = m => r.value = m),
                    pageQuery: g.value,
                    "onUpdate:pageQuery": s[2] || (s[2] = m => g.value = m),
                    api: c(wc),
                    distance: 100,
                    ref: "listRef",
                    isAutoLoad: !0
                }, {
                    content: A(() => [x(B0, {
                        mayrecord: r.value
                    }, null, 8, ["mayrecord"])]),
                    _: 1
                }, 8, ["list", "pageQuery", "api"])])
            }
        }
    });
const P0 = K(A0, [
        ["__scopeId", "data-v-5e0daa42"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/BinguoRecord/index.vue"]
    ]),
    _I = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: P0
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    D0 = l => (Rt("data-v-6c7a1db6"), l = l(), St(), l),
    O0 = {
        class: "Betting__Popup"
    },
    q0 = {
        class: "Betting__Popup-head"
    },
    E0 = {
        class: "Betting__Popup-head-title"
    },
    j0 = {
        class: "Betting__Popup-head-selectName"
    },
    H0 = {
        class: "Betting__Popup-body"
    },
    W0 = {
        class: "Betting__Popup-body-line"
    },
    V0 = {
        class: "Betting__Popup-body-line-list"
    },
    F0 = ["onClick"],
    U0 = {
        class: "Betting__Popup-body-line"
    },
    K0 = {
        class: "Betting__Popup-body-line-btnL"
    },
    X0 = {
        class: "Betting__Popup-body-line"
    },
    Q0 = D0(() => t("div", null, null, -1)),
    Y0 = {
        class: "Betting__Popup-body-line-list"
    },
    Z0 = ["onClick"],
    J0 = {
        class: "Betting__Popup-body-line"
    },
    t2 = {
        class: "Betting__Popup-foot"
    },
    e2 = {
        class: "Betting__Popup-foot-s bgcolor"
    },
    i2 = {
        class: "Betting__Popup-PreSale"
    },
    n2 = {
        class: "Betting__Popup-PreSale-head"
    },
    a2 = {
        class: "Betting__Popup-PreSale-body"
    },
    o2 = {
        class: "Betting__Popup-PreSale-foot"
    },
    s2 = U({
        __name: "BettingPopup",
        props: {
            selectInfo: {
                type: Object,
                default: () => ({})
            },
            bettingPopupShow: {
                type: Boolean,
                default: v(!1)
            },
            actionItem: {
                type: Object,
                default: () => ({})
            }
        },
        emits: ["update:bettingPopupShow", "update:selectInfo", "clearBetting", "submitBetting"],
        setup(l, {
            emit: i
        }) {
            const o = l,
                {
                    t: r
                } = kt(),
                g = v(!1),
                b = v(!0),
                d = J(() => o.actionItem.scopeList || []),
                u = v([1, 5, 10, 20, 50, 100]),
                p = J({
                    get() {
                        return o.bettingPopupShow || !1
                    },
                    set(N) {
                        i("update:bettingPopupShow", N)
                    }
                }),
                s = N => {
                    switch (N) {
                        case 1:
                            o.selectInfo.count > 1 && (o.selectInfo.count--, h());
                            break;
                        case 2:
                            o.selectInfo.count++, h();
                            break
                    }
                },
                _ = N => {
                    N > 0 && (o.selectInfo.count = parseInt(N), h())
                },
                m = N => {
                    o.selectInfo.count = N, h()
                },
                w = N => {
                    o.selectInfo.coin = N, h()
                },
                y = () => {
                    g.value = !1, b.value = !0
                },
                f = () => {
                    b.value ? i("submitBetting") : _e(r("agreePresaleRules"))
                },
                h = () => {
                    o.selectInfo.allCoin = o.selectInfo.coin * o.selectInfo.count
                };
            return (N, L) => {
                const k = W("van-field"),
                    $ = W("van-popup"),
                    T = Jt("throttle-click");
                return n(), a(B, null, [C(" 投注内容 begin "), x($, {
                    show: p.value,
                    "onUpdate:show": L[6] || (L[6] = R => p.value = R),
                    position: "bottom",
                    round: !0,
                    "close-on-click-overlay": !1
                }, {
                    default: A(() => [t("div", O0, [t("div", q0, [t("div", E0, e(l.actionItem.lotteryName), 1), t("div", j0, [t("span", null, e(c(r)("choose")), 1), t("span", null, e(l.selectInfo.selectCon), 1)])]), t("div", H0, [t("div", W0, [E(e(c(r)("amount")) + " ", 1), t("div", V0, [(n(!0), a(B, null, G(d.value, (R, z) => (n(), a("div", {
                        key: z,
                        class: M(["Betting__Popup-body-line-item", {
                            bgcolor: l.selectInfo.coin == R
                        }]),
                        onClick: I => w(R)
                    }, e(R), 11, F0))), 128))])]), t("div", U0, [E(e(c(r)("numbers")) + " ", 1), t("div", K0, [t("div", {
                        class: M(["Betting__Popup-btn", {
                            bgcolor: l.selectInfo.count > 0
                        }]),
                        onClick: L[0] || (L[0] = R => s(1))
                    }, "-", 2), x(k, {
                        class: "Betting__Popup-input",
                        modelValue: l.selectInfo.count,
                        "onUpdate:modelValue": L[1] || (L[1] = R => l.selectInfo.count = R),
                        type: "digit",
                        maxlength: 4,
                        onInput: _
                    }, null, 8, ["modelValue"]), t("div", {
                        class: "Betting__Popup-btn bgcolor",
                        onClick: L[2] || (L[2] = R => s(2))
                    }, "+")])]), t("div", X0, [Q0, t("div", Y0, [(n(!0), a(B, null, G(u.value, (R, z) => (n(), a("div", {
                        key: z,
                        class: M(["Betting__Popup-body-line-item", {
                            bgcolor: l.selectInfo.count == R
                        }]),
                        onClick: I => m(R)
                    }, " X" + e(R), 11, Z0))), 128))])]), t("div", J0, [t("span", {
                        class: M(["Betting__Popup-agree", {
                            active: b.value
                        }]),
                        onClick: L[3] || (L[3] = R => b.value = !b.value)
                    }, e(c(r)("agree")), 3), t("span", {
                        onClick: L[4] || (L[4] = R => g.value = !0),
                        class: "Betting__Popup-preSaleShow"
                    }, e(c(r)("presaleRules")), 1)])]), t("div", t2, [t("div", {
                        class: "Betting__Popup-foot-c",
                        onClick: L[5] || (L[5] = R => i("clearBetting"))
                    }, e(c(r)("cancel")), 1), ft((n(), a("div", e2, [E(e(c(r)("totalAmount")) + " " + e(c(It)(l.selectInfo.count * l.selectInfo.coin || 0)), 1)])), [
                        [T, {
                            handler: f,
                            wait: 2e3
                        }]
                    ])])])]),
                    _: 1
                }, 8, ["show"]), C(" 规则弹层 begin"), x($, {
                    show: g.value,
                    "onUpdate:show": L[7] || (L[7] = R => g.value = R),
                    "close-on-click-overlay": !1,
                    round: ""
                }, {
                    default: A(() => [t("div", i2, [t("div", n2, e(c(r)("presaleRules")), 1), t("div", a2, e(N.$t("betPopTXT")), 1), t("div", o2, [t("div", {
                        class: "Betting__Popup-PreSale-foot-btn",
                        onClick: y
                    }, e(c(r)("iKonw")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const l2 = K(s2, [
        ["__scopeId", "data-v-6c7a1db6"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/ChangLong/BettingPopup.vue"]
    ]),
    c2 = {
        class: "changLong__C"
    },
    r2 = {
        class: "changLong__C-bet"
    },
    u2 = {
        class: "changLong__C-bet-l"
    },
    d2 = {
        class: "num"
    },
    p2 = {
        class: "time"
    },
    g2 = {
        class: "other"
    },
    b2 = {
        class: "remark"
    },
    m2 = {
        class: "issue"
    },
    v2 = ["onClick"],
    _2 = ["onClick"],
    k2 = ["onClick"],
    h2 = ["onClick"],
    f2 = ["onClick"],
    y2 = ["onClick"],
    $2 = ["onClick"],
    w2 = ["onClick"],
    T2 = ["onClick"],
    C2 = ["onClick"],
    N2 = ["onClick"],
    Xn = 5,
    L2 = U({
        __name: "Bet",
        setup(l) {
            const i = Ni.global.t,
                o = v(!1),
                r = v({}),
                g = v({
                    coin: 0,
                    count: 1,
                    allCoin: 0,
                    gametype: 0,
                    typeid: 1,
                    issuenumber: "2020",
                    selecttype: 1,
                    selectCon: ""
                }),
                b = wo([]);
            let d = null;
            const u = (k, $, T, R, z) => {
                    if (b.value[$].action = T, r.value = k, g.value.selectCon = R, g.value.coin = k.scopeList[0], g.value.typeid = k.type, g.value.gametype = k.bettingGameType, k.type > 4) z == "big" ? g.value.selecttype = "H" : z == "small" ? g.value.selecttype = "L" : g.value.selecttype = z;
                    else {
                        const I = {
                            red: 10,
                            green: 11,
                            violet: 12,
                            big: 13,
                            small: 14
                        };
                        g.value.selecttype = I[z]
                    }
                    g.value.issuenumber = k.issueNumber, o.value = !0
                },
                p = v(!1),
                s = async () => {
                    if (d && clearInterval(d), p.value) return;
                    p.value = !0;
                    const k = await lt(es({
                        gameType: -1
                    }));
                    if (p.value = !1, !k) return;
                    const $ = k.data.serviceTime;
                    b.value = k.data.list.map(T => {
                        let R = new Date($).getTime(),
                            z = new Date(T.startTime).getTime(),
                            I = (R - z) / 1e3;
                        return I > T.intervalM * 60 && (I = T.intervalM * 60), T.scopeList = T.scope.split("|").map(S => Number(S)), T.passTime = Math.floor(T.intervalM * 60 - I), T.time1 = 0, T.time2 = Math.floor(T.passTime / 60), T.time3 = Math.floor(T.passTime % 60 / 10), T.time4 = Math.floor(T.passTime % 10), T
                    }), d = setInterval(function() {
                        _()
                    }, 1e3)
                },
                _ = () => {
                    const k = b.value.length;
                    let $ = !1;
                    for (let T = 0; T < k; T++) {
                        let R = b.value[T];
                        if (R.passTime < Xn && R.issueNumber == r.value.issueNumber && m(), R.passTime > 0) R.time2 = Math.floor(R.passTime / 60), R.time3 = Math.floor(R.passTime % 60 / 10), R.time4 = Math.floor(R.passTime % 10), R.passTime--;
                        else {
                            $ = !1, clearInterval(d), s();
                            break
                        }
                        $ = R.time3 + R.time4 == 0
                    }
                    To(b), $ && (clearInterval(d), s())
                },
                m = () => {
                    o.value = !1;
                    let k = b.value.findIndex($ => JSON.stringify($) == JSON.stringify(r.value));
                    k != -1 && (b.value[k].action = 0), g.value.coin = r.value.scopeList ? r.value.scopeList[0] : 0, g.value.count = 1, r.value = {}
                },
                w = () => {
                    const {
                        typeid: k = 0
                    } = g.value;
                    k && (k < 5 ? f() : k < 9 ? N() : h())
                },
                y = k => k < 5 ? "winGo" : k < 9 ? "Fd" : "k3",
                f = async () => {
                    const k = await lt(ra({
                        typeId: g.value.typeid,
                        issuenumber: g.value.issuenumber,
                        amount: g.value.coin,
                        betCount: Number(g.value.count),
                        gameType: g.value.gametype,
                        selectType: g.value.selecttype
                    }));
                    (k == null ? void 0 : k.code) === 0 && (_e(i("code" + k.msgCode)), m())
                },
                h = async () => {
                    let {
                        coin: k,
                        count: $,
                        issuenumber: T,
                        gametype: R,
                        selecttype: z,
                        typeid: I
                    } = g.value;
                    const S = await lt(ua({
                        amount: k,
                        betCount: Number($),
                        gameType: R.toString(),
                        selectType: z,
                        typeId: I,
                        issuenumber: T
                    }));
                    (S == null ? void 0 : S.code) === 0 && (_e(i("code" + S.msgCode)), m())
                },
                N = async () => {
                    let {
                        coin: k,
                        count: $,
                        issuenumber: T,
                        gametype: R,
                        selecttype: z,
                        typeid: I
                    } = g.value;
                    const S = {
                            issuenumber: T,
                            typeId: I,
                            amount: k,
                            betCount: Number($),
                            gameType: R,
                            selectType: z
                        },
                        D = await lt(aa(S));
                    (D == null ? void 0 : D.code) === 0 && (_e(i("code" + D.msgCode)), m())
                },
                L = k => k == "H" ? "B" : k.trim() == "L" ? "S" : k;
            return zt(() => {
                s()
            }), Ve(() => {
                clearInterval(d)
            }), Dt(() => Me().visibility, k => {
                s()
            }), (k, $) => (n(), a(B, null, [t("div", c2, [(n(!0), a(B, null, G(b.value, (T, R) => (n(), a("div", r2, [t("div", u2, [t("div", {
                class: M(["titel", [y(T.type)]])
            }, e(T.lotteryName), 3), t("div", d2, [E(e(T.issueNumber) + " ", 1), t("span", p2, e(`${T.time1}${T.time2}:${T.time3}${T.time4}`), 1)]), t("div", g2, [t("div", b2, e(T.remark), 1), t("div", {
                class: M(["gameResult", "bg-" + T.gameResult])
            }, e(L(T.gameResult)), 3), t("div", m2, e(T.issue) + e(k.$t("betIssues")), 1)])]), t("div", {
                class: M(["changLong__C-bet-r", {
                    disable: T.passTime < Xn
                }])
            }, [T.gameType == 0 ? (n(), a(B, {
                key: 0
            }, [t("div", {
                class: M({
                    active: T.action == 1
                }),
                onClick: z => u(T, R, 1, k.$t("betBig"), "big")
            }, e(k.$t("betBig")), 11, v2), t("div", {
                class: M({
                    active: T.action == 2
                }),
                onClick: z => u(T, R, 2, k.$t("betSmall"), "small")
            }, e(k.$t("betSmall")), 11, _2)], 64)) : C("v-if", !0), T.gameType == 1 ? (n(), a(B, {
                key: 1
            }, [t("div", {
                class: M({
                    active: T.action == 1
                }),
                onClick: z => u(T, R, 1, k.$t("betRed"), "red")
            }, e(k.$t("betRed")), 11, k2), t("div", {
                class: M({
                    active: T.action == 2
                }),
                onClick: z => u(T, R, 2, k.$t("betGreen"), "green")
            }, e(k.$t("betGreen")), 11, h2), t("div", {
                class: M({
                    active: T.action == 3
                }),
                onClick: z => u(T, R, 3, k.$t("betPurple"), "violet")
            }, e(k.$t("betPurple")), 11, f2)], 64)) : C("v-if", !0), T.gameType == 2 ? (n(), a(B, {
                key: 2
            }, [t("div", {
                class: M({
                    active: T.action == 1
                }),
                onClick: z => u(T, R, 1, k.$t("betOdd"), "O")
            }, e(k.$t("betOdd")), 11, y2), t("div", {
                class: M({
                    active: T.action == 2
                }),
                onClick: z => u(T, R, 2, k.$t("betEven"), "E")
            }, e(k.$t("betEven")), 11, $2)], 64)) : C("v-if", !0), T.gameType == 3 ? (n(), a(B, {
                key: 3
            }, [t("div", {
                class: M({
                    active: T.action == 1
                }),
                onClick: z => u(T, R, 1, k.$t("betWithSingle"), "O")
            }, e(k.$t("betWithSingle")), 11, w2), t("div", {
                class: M({
                    active: T.action == 2
                }),
                onClick: z => u(T, R, 2, k.$t("betWithDouble"), "E")
            }, e(k.$t("betWithDouble")), 11, T2)], 64)) : C("v-if", !0), T.gameType == 4 ? (n(), a(B, {
                key: 4
            }, [t("div", {
                class: M({
                    active: T.action == 1
                }),
                onClick: z => u(T, R, 1, k.$t("betWithBig"), "H")
            }, e(k.$t("betWithBig")), 11, C2), t("div", {
                class: M({
                    active: T.action == 2
                }),
                onClick: z => u(T, R, 2, k.$t("betWithSmall"), "L")
            }, e(k.$t("betWithSmall")), 11, N2)], 64)) : C("v-if", !0)], 2)]))), 256))]), x(l2, {
                bettingPopupShow: o.value,
                selectInfo: g.value,
                actionItem: r.value,
                onClearBetting: m,
                onSubmitBetting: w
            }, null, 8, ["bettingPopupShow", "selectInfo", "actionItem"])], 64))
        }
    });
const z2 = K(L2, [
        ["__scopeId", "data-v-91d808d9"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/ChangLong/Bet.vue"]
    ]),
    x2 = {
        class: "MyGameRecord__C"
    },
    I2 = {
        key: 0,
        class: "MyGameRecord__C-head"
    },
    R2 = {
        class: "MyGameRecord__C-body"
    },
    S2 = {
        key: 1,
        class: "MyGameRecord__C-body-empty"
    },
    B2 = {
        key: 1,
        class: "MyGameRecord__C-foot"
    },
    M2 = {
        class: "MyGameRecord__C-foot-page"
    },
    G2 = U({
        __name: "MyGameRecord",
        props: {
            typeid: {
                type: Number,
                required: !0
            },
            ApiFun: {
                type: Function,
                required: !0
            },
            goPathName: {
                type: String,
                required: !0
            },
            hasHead: {
                type: Boolean,
                required: !0,
                default: !0
            }
        },
        setup(l, {
            expose: i
        }) {
            const o = l,
                r = ht(),
                g = v(4),
                b = v(20),
                d = v(1),
                u = v([]),
                p = w => {
                    r.push({
                        name: w
                    })
                },
                s = () => {
                    d.value--, m()
                },
                _ = () => {
                    d.value++, m()
                },
                m = async (w = !1) => {
                    if (o.typeid == null) return;
                    w && (d.value = 1);
                    const [y, f] = await ee(o.ApiFun({
                        pageSize: b.value,
                        pageNo: d.value,
                        typeId: o.typeid
                    }));
                    f && (u.value = (f == null ? void 0 : f.list) || [], g.value = (f == null ? void 0 : f.totalPage) || 0)
                };
            return i({
                getData: m
            }), ke(() => {
                m()
            }), (w, y) => {
                const f = W("van-icon");
                return n(), a("div", x2, [w.hasHead ? (n(), a("div", I2, [t("div", {
                    class: "MyGameRecord__C-head-moreB",
                    onClick: y[0] || (y[0] = h => p(w.goPathName))
                }, e(w.$t("more")), 1)])) : C("v-if", !0), t("div", R2, [u.value.length ? (n(), it(dn, {
                    key: 0,
                    mayrecord: u.value
                }, null, 8, ["mayrecord"])) : (n(), a("div", S2, [x(de)]))]), u.value.length ? (n(), a("div", B2, [t("div", {
                    class: M(["MyGameRecord__C-foot-previous", {
                        disabled: d.value <= 1
                    }]),
                    onClick: s
                }, [x(f, {
                    name: "arrow-left",
                    class: "MyGameRecord__C-icon",
                    size: "20"
                })], 2), t("div", M2, e(d.value) + "/" + e(g.value), 1), t("div", {
                    class: M(["MyGameRecord__C-foot-next", {
                        disabled: d.value >= g.value
                    }]),
                    onClick: _
                }, [x(f, {
                    name: "arrow",
                    class: "MyGameRecord__C-icon",
                    size: "20"
                })], 2)])) : C("v-if", !0)])
            }
        }
    });
const bn = K(G2, [
        ["__scopeId", "data-v-4b21e13b"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/WinGo/MyGameRecord.vue"]
    ]),
    A2 = {
        class: "MyGameRecord__C"
    },
    P2 = {
        key: 0,
        class: "MyGameRecord__C-head"
    },
    D2 = {
        class: "MyGameRecord__C-body"
    },
    O2 = {
        key: 1,
        class: "MyGameRecord__C-body-empty"
    },
    q2 = {
        key: 1,
        class: "MyGameRecord__C-foot"
    },
    E2 = {
        class: "MyGameRecord__C-foot-page"
    },
    j2 = U({
        __name: "MyGameRecord",
        props: {
            typeid: {
                type: Number,
                required: !0
            },
            goPathName: {
                type: String,
                required: !0
            },
            hasHead: {
                type: Boolean,
                required: !0,
                default: !0
            }
        },
        setup(l, {
            expose: i
        }) {
            const o = l,
                r = ht(),
                g = v(4),
                b = v(20),
                d = v(1),
                u = v([]),
                p = y => {
                    r.push({
                        name: y
                    })
                },
                s = () => {
                    d.value--, m()
                },
                _ = () => {
                    d.value++, m()
                },
                m = async (y = !1) => {
                    if (o.typeid == null) return;
                    y && (d.value = 1);
                    const f = await lt(ca({
                            pageSize: b.value,
                            pageNo: d.value,
                            typeId: o.typeid
                        })),
                        h = (f == null ? void 0 : f.data.list) || [];
                    for (let N = 0; h.length > N; N++) {
                        let L = h[N].gameType.split(","),
                            k = h[N].selectType.split(",");
                        for (let $ = 0; L.length > $; $++)
                            if (L[$] == "1" || L[$] == "2" || L[$] == "3") h[N].gameType = "1", h[N].oneList = k;
                            else if (L[$] == "5" || L[$] == "6") {
                            let T = [],
                                R = [],
                                z = [];
                            for (let I = 0; k.length > I; I++) {
                                if (k[I] == "|11|" || k[I] == "|22|" || k[I] == "|33|" || k[I] == "|44|" || k[I] == "|55|" || k[I] == "|66|") {
                                    let S = k[I].split("|");
                                    S.pop(), S.shift(), T.push(S.join())
                                }
                                if (k[I] == ":11:" || k[I] == ":22:" || k[I] == ":33:" || k[I] == ":44:" || k[I] == ":55:" || k[I] == ":66:") {
                                    let S = k[I].split(":");
                                    S.pop(), S.shift(), R.push(S.join())
                                }
                                if (k[I] == ":1:" || k[I] == ":2:" || k[I] == ":3:" || k[I] == ":4:" || k[I] == ":5:" || k[I] == ":6:") {
                                    let S = k[I].split(":");
                                    S.pop(), S.shift(), z.push(S.join())
                                }
                            }
                            h[N].gameType = "2", h[N].oneList = T, h[N].towList = w(R, z)
                        } else if (L[$] == "7" || L[$] == "8") {
                            let T = [],
                                R = !1;
                            for (let z = 0; k.length > z; z++) {
                                if (k[z] == "|111|" || k[z] == "|222|" || k[z] == "|333|" || k[z] == "|444|" || k[z] == "|555|" || k[z] == "|666|") {
                                    let I = k[z].split("|");
                                    I.pop(), I.shift(), T.push(I.join())
                                }
                                k[z] == "|AAA|" && (R = !0), h[N].oneList = T, h[N].towList = R, h[N].gameType = "3"
                            }
                        } else if (L[$] == "9" || L[$] == "10" || L[$] == "4") {
                            let T = [],
                                R = !1,
                                z = [];
                            for (let I = 0; k.length > I; I++) {
                                if (k[I] == "|1|" || k[I] == "|2|" || k[I] == "|3|" || k[I] == "|4|" || k[I] == "|5|" || k[I] == "|6|") {
                                    let S = k[I].split("|");
                                    S.pop(), S.shift(), T.push(S.join())
                                }
                                if (k[I] == "|ABC|" && (R = !0), k[I] == ".1." || k[I] == ".2." || k[I] == ".3." || k[I] == ".4." || k[I] == ".5." || k[I] == ".6.") {
                                    let S = k[I].split(".");
                                    S.pop(), S.shift(), z.push(S.join())
                                }
                            }
                            h[N].oneList = T, h[N].towList = R, h[N].threeList = z, h[N].gameType = "4"
                        }
                    }
                    u.value = h || [], g.value = (f == null ? void 0 : f.data.totalPage) || 0
                },
                w = (y, f) => {
                    let h = [];
                    for (var N = 0; y.length > N; N++) {
                        let k = y[N],
                            $ = [];
                        for (var L = 0; f.length > L; L++) $.push(f[L]);
                        if ($.length > 0) {
                            let T = $.sort().join(",");
                            h.push(k + "|" + T)
                        }
                    }
                    return h.sort()
                };
            return i({
                getData: m
            }), ke(() => {
                m()
            }), (y, f) => {
                const h = W("van-icon");
                return n(), a("div", A2, [y.hasHead ? (n(), a("div", P2, [t("div", {
                    class: "MyGameRecord__C-head-moreB",
                    onClick: f[0] || (f[0] = N => p(y.goPathName))
                }, e(y.$t("more")), 1)])) : C("v-if", !0), t("div", D2, [u.value.length ? (n(), it(xa, {
                    key: 0,
                    mayrecord: u.value
                }, null, 8, ["mayrecord"])) : (n(), a("div", O2, [x(de)]))]), u.value.length ? (n(), a("div", q2, [t("div", {
                    class: M(["MyGameRecord__C-foot-previous", {
                        disabled: d.value <= 1
                    }]),
                    onClick: s
                }, [x(h, {
                    name: "arrow-left",
                    class: "MyGameRecord__C-icon",
                    size: "20"
                })], 2), t("div", E2, e(d.value) + "/" + e(g.value), 1), t("div", {
                    class: M(["MyGameRecord__C-foot-next", {
                        disabled: d.value >= g.value
                    }]),
                    onClick: _
                }, [x(h, {
                    name: "arrow",
                    class: "MyGameRecord__C-icon",
                    size: "20"
                })], 2)])) : C("v-if", !0)])
            }
        }
    });
const Ra = K(j2, [
        ["__scopeId", "data-v-cffd8c9f"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/K3/MyGameRecord.vue"]
    ]),
    H2 = {
        class: "BetRecord__C"
    },
    W2 = U({
        __name: "BetRecord",
        setup(l) {
            const i = {
                    Win: bn,
                    FD: za,
                    K3: Ra
                },
                o = v(),
                r = v(0),
                g = v(0),
                b = v([{
                    name: "WinGo",
                    com: "Win"
                }, {
                    name: "5D Lotre",
                    com: "FD"
                }, {
                    name: "K3Lotre",
                    com: "K3"
                }]),
                d = v(["1min", "3min", "5min", "10min"]),
                u = v(1),
                p = () => {
                    u.value = r.value * 4 + g.value + 1, Yt(() => {
                        o.value && o.value.getData()
                    })
                };
            return zt(() => {
                p()
            }), (s, _) => {
                const m = W("van-tab"),
                    w = W("van-tabs");
                return n(), a("div", H2, [x(w, {
                    class: "BetRecord__C-gameTab",
                    active: r.value,
                    "onUpdate:active": _[1] || (_[1] = y => r.value = y),
                    onClick: p
                }, {
                    default: A(() => [(n(!0), a(B, null, G(b.value, (y, f) => (n(), it(m, {
                        key: f,
                        title: y.name
                    }, {
                        default: A(() => [x(w, {
                            class: "BetRecord__C-timeTab",
                            active: g.value,
                            "onUpdate:active": _[0] || (_[0] = h => g.value = h)
                        }, {
                            default: A(() => [(n(!0), a(B, null, G(d.value, (h, N) => (n(), it(m, {
                                key: N,
                                title: h
                            }, null, 8, ["title"]))), 128))]),
                            _: 2
                        }, 1032, ["active"])]),
                        _: 2
                    }, 1032, ["title"]))), 128))]),
                    _: 1
                }, 8, ["active"]), (n(), it(qe(i[b.value[r.value].com]), {
                    ref_key: "RecRef",
                    ref: o,
                    typeid: u.value,
                    "has-head": !1,
                    ApiFun: c(ln),
                    "go-path-name": "0"
                }, null, 8, ["typeid", "ApiFun"]))])
            }
        }
    });
const V2 = K(W2, [
        ["__scopeId", "data-v-7c263a55"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/ChangLong/BetRecord.vue"]
    ]),
    F2 = {
        class: "changLong__C"
    },
    U2 = U({
        __name: "index",
        setup(l) {
            const i = ht(),
                o = v(0);

            function r() {
                i.go(-1)
            }
            return zt(() => {}), (g, b) => {
                const d = W("NavBar"),
                    u = W("van-tab"),
                    p = W("van-tabs");
                return n(), a("div", F2, [x(d, {
                    "left-arrow": "",
                    title: g.$t("loongAssistant"),
                    class: "lottery",
                    onClickLeft: r
                }, null, 8, ["title"]), x(p, {
                    class: "changLong__C-tab",
                    active: o.value,
                    "onUpdate:active": b[0] || (b[0] = s => o.value = s)
                }, {
                    default: A(() => [x(u, {
                        title: g.$t("latestLoong")
                    }, null, 8, ["title"]), x(u, {
                        title: g.$t("myBet")
                    }, null, 8, ["title"])]),
                    _: 1
                }, 8, ["active"]), o.value == 0 ? (n(), it(z2, {
                    key: 0
                })) : (n(), it(V2, {
                    key: 1
                }))])
            }
        }
    });
const K2 = K(U2, [
        ["__scopeId", "data-v-6aad721b"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/ChangLong/index.vue"]
    ]),
    kI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: K2
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Sa = l => (Rt("data-v-75b35bf5"), l = l(), St(), l),
    X2 = {
        class: "K3TL__C"
    },
    Q2 = {
        class: "K3TL__C-l1"
    },
    Y2 = {
        class: "left"
    },
    Z2 = Sa(() => t("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "33",
        height: "32",
        viewBox: "0 0 33 32",
        fill: "none"
    }, [t("path", {
        d: "M9.0484 25.8284L9.04089 25.8359L9.03366 25.8437C8.47797 26.4402 7.97942 26.8014 7.56631 26.9797C7.15908 27.1556 6.87147 27.141 6.67169 27.055C6.46753 26.967 6.24252 26.7559 6.06263 26.3149C5.88195 25.8718 5.76602 25.2377 5.76602 24.3993V9.38602C5.76602 6.69019 6.09509 5.23943 6.86083 4.42092C7.61326 3.61665 8.94055 3.26602 11.4593 3.26602H21.5393C24.0584 3.26602 25.3852 3.61676 26.1358 4.42054C26.8997 5.23844 27.226 6.68864 27.2193 9.38453V9.38602V24.386C27.2193 25.2248 27.1041 25.8592 26.9242 26.3024C26.7451 26.7438 26.5211 26.9543 26.3182 27.0418C26.1198 27.1275 25.8328 27.1424 25.4244 26.9663C25.0105 26.7878 24.5102 26.4264 23.9512 25.8299C23.2918 25.1224 22.4328 24.7733 21.5701 24.8202C20.7074 24.8672 19.8916 25.3075 19.3127 26.0793L19.3123 26.0799L17.9676 27.8772C17.9673 27.8776 17.967 27.878 17.9667 27.8785C17.5231 28.4638 16.9844 28.7094 16.4927 28.7094C16.001 28.7094 15.4623 28.4638 15.0187 27.8785C15.0184 27.878 15.0181 27.8776 15.0177 27.8772L13.6733 26.0802C13.6732 26.0801 13.6732 26.08 13.6731 26.0799C12.5033 24.515 10.4028 24.3993 9.05577 25.8211L9.0484 25.8284ZM8.93935 14.666C8.93935 15.7307 9.80798 16.5993 10.8727 16.5993C11.9374 16.5993 12.806 15.7307 12.806 14.666C12.806 13.6013 11.9374 12.7327 10.8727 12.7327C9.80798 12.7327 8.93935 13.6013 8.93935 14.666ZM8.93935 9.33268C8.93935 10.3974 9.80798 11.266 10.8727 11.266C11.9374 11.266 12.806 10.3974 12.806 9.33268C12.806 8.26798 11.9374 7.39935 10.8727 7.39935C9.80798 7.39935 8.93935 8.26798 8.93935 9.33268ZM14.806 16.266H22.1393C23.0174 16.266 23.7393 15.5441 23.7393 14.666C23.7393 13.788 23.0174 13.066 22.1393 13.066H14.806C13.928 13.066 13.206 13.788 13.206 14.666C13.206 15.5441 13.928 16.266 14.806 16.266ZM14.806 10.9327H22.1393C23.0174 10.9327 23.7393 10.2107 23.7393 9.33268C23.7393 8.45465 23.0174 7.73268 22.1393 7.73268H14.806C13.928 7.73268 13.206 8.45465 13.206 9.33268C13.206 10.2107 13.928 10.9327 14.806 10.9327Z",
        stroke: "currentColor",
        "stroke-width": "1.2"
    })], -1)),
    J2 = {
        class: "K3TL__C-l2"
    },
    t$ = {
        class: "K3TL__C-time"
    },
    e$ = Sa(() => t("div", {
        notime: ""
    }, ":", -1)),
    i$ = {
        class: "K3TL__C-l3"
    },
    n$ = {
        class: "box"
    },
    a$ = U({
        __name: "TimeLeft",
        props: {
            currentInfo: {
                type: Object,
                default: () => ({
                    gameNo: "loading",
                    currentTime: "",
                    beginTime: "",
                    passTime: 180,
                    time1: 0,
                    time2: 0,
                    time3: 0,
                    time4: 0
                })
            },
            premium: {
                type: String,
                default: "666"
            },
            currentGame: {
                type: Object,
                default: () => ({})
            }
        },
        setup(l) {
            const i = l,
                o = J(() => [...i.premium]),
                r = v(!1),
                g = Ee(),
                b = () => {
                    r.value = !0, g.getK3Rule(i.currentGame.typeID)
                };
            return (d, u) => (n(), a(B, null, [t("div", X2, [t("div", Q2, [t("div", Y2, [t("div", null, e(d.$t("k3Number")), 1), t("div", {
                class: "K3TL__C-rule",
                onClick: b
            }, [Z2, E(" " + e(d.$t("winTrxIndicate")), 1)])]), t("div", null, e(d.$t("k3TimeLeftToBuy")), 1)]), t("div", J2, [t("div", null, e(i.currentInfo.gameNo), 1), t("div", t$, [t("div", null, e(l.currentInfo.time1), 1), t("div", null, e(l.currentInfo.time2), 1), e$, t("div", null, e(l.currentInfo.time3), 1), t("div", null, e(l.currentInfo.time4), 1)])]), t("div", i$, [t("div", n$, [(n(!0), a(B, null, G(o.value, (p, s) => (n(), a("div", {
                key: s,
                class: M(["num" + p])
            }, null, 2))), 128))])])]), C(" 规则弹层 begin"), x(xi, {
                howPlayShow: r.value,
                gamePresentation: l.currentGame.gamePresentation,
                onClose: u[0] || (u[0] = p => r.value = !1)
            }, null, 8, ["howPlayShow", "gamePresentation"])], 64))
        }
    });
const o$ = K(a$, [
        ["__scopeId", "data-v-75b35bf5"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/K3/TimeLeft.vue"]
    ]),
    s$ = {
        class: "K3B__C-bettingList"
    },
    l$ = ["onClick"],
    c$ = {
        key: 1,
        class: ""
    },
    r$ = {
        key: 2,
        class: "K3B__C-odds-rate"
    },
    u$ = {
        key: 3,
        class: "K3B__C-odds-rate"
    },
    d$ = {
        key: 4,
        class: "K3B__C-odds-rate"
    },
    p$ = U({
        __name: "Betting1",
        props: {
            OddsList: {
                type: Array,
                required: !0
            },
            betnumList: {
                type: Array,
                required: !0
            }
        },
        emits: ["showP", "upAll"],
        setup(l, {
            expose: i,
            emit: o
        }) {
            const r = l,
                {
                    t: g
                } = kt(),
                b = v([{
                    num: 3,
                    odds: 191.16,
                    chack: !1
                }, {
                    num: 4,
                    odds: 63.72,
                    chack: !1
                }, {
                    num: 5,
                    odds: 31.86,
                    chack: !1
                }, {
                    num: 6,
                    odds: 19.11,
                    chack: !1
                }, {
                    num: 7,
                    odds: 12.74,
                    chack: !1
                }, {
                    num: 8,
                    odds: 9.1,
                    chack: !1
                }, {
                    num: 9,
                    odds: 7.64,
                    chack: !1
                }, {
                    num: 10,
                    odds: 7.08,
                    chack: !1
                }, {
                    num: 11,
                    odds: 7.08,
                    chack: !1
                }, {
                    num: 12,
                    odds: 7.64,
                    chack: !1
                }, {
                    num: 13,
                    odds: 9.1,
                    chack: !1
                }, {
                    num: 14,
                    odds: 12.74,
                    chack: !1
                }, {
                    num: 15,
                    odds: 19.11,
                    chack: !1
                }, {
                    num: 16,
                    odds: 31.86,
                    chack: !1
                }, {
                    num: 17,
                    odds: 63.72,
                    chack: !1
                }, {
                    num: 18,
                    odds: 191.16,
                    chack: !1
                }, {
                    num: "A",
                    odds: 2,
                    chack: !1
                }, {
                    num: "B",
                    odds: 2,
                    chack: !1
                }, {
                    num: "C",
                    odds: 2,
                    chack: !1
                }, {
                    num: "D",
                    odds: 2,
                    chack: !1
                }]),
                d = w => {
                    switch (w) {
                        case "A":
                            return g("k3Big");
                        case "B":
                            return g("k3Small");
                        case "C":
                            return g("k3Odd");
                        case "D":
                            return g("k3Even");
                        default:
                            return w
                    }
                },
                u = (w, y) => {
                    y < 16 ? b.value[y].chack ? _(w, y) : (r.betnumList.push(w.num), b.value[y].chack = !0) : p(w, y), r.betnumList.length > 0 ? o("showP", !0) : o("showP", !1), o("upAll")
                },
                p = (w, y) => {
                    switch (y) {
                        case 16:
                            s(w, y, 17);
                            break;
                        case 17:
                            s(w, y, 16);
                            break;
                        case 18:
                            s(w, y, 19);
                            break;
                        case 19:
                            s(w, y, 18);
                            break
                    }
                },
                s = (w, y, f) => {
                    b.value[f].chack && _(b.value[f], f), b.value[y].chack ? _(w, y) : (r.betnumList.push(w.num), b.value[y].chack = !0)
                },
                _ = (w, y) => {
                    b.value[y].chack = !1;
                    let f = r.betnumList.indexOf(w.num);
                    f > -1 && r.betnumList.splice(f, 1)
                };
            return i({
                clearList: () => {
                    b.value = b.value.map(w => (w.chack = !1, w))
                }
            }), (w, y) => (n(), a("div", s$, [(n(!0), a(B, null, G(b.value, (f, h) => (n(), a("div", {
                class: M("num num" + f.num),
                key: h,
                onClick: N => u(f, h)
            }, [h < 16 ? (n(), a("div", {
                key: 0,
                class: M(h % 2 == 0 ? "ball rball" : "ball gball")
            }, [t("div", {
                class: M("K3B__C-odds-bet num" + f.num)
            }, e(d(f.num)), 3)], 2)) : (n(), a("div", c$, e(d(f.num)), 1)), h < 16 ? (n(), a("div", r$, e(r.OddsList[h] && (r.OddsList[h].playRate || r.OddsList[h].playRate_Original)) + "X ", 1)) : h < 18 ? (n(), a("div", u$, e(r.OddsList[16] && (r.OddsList[16].playRate || r.OddsList[16].playRate_Original)) + "X ", 1)) : (n(), a("div", d$, e(r.OddsList[17] && (r.OddsList[17].playRate || r.OddsList[17].playRate_Original)) + "X ", 1))], 10, l$))), 128))]))
        }
    });
const g$ = K(p$, [
        ["__scopeId", "data-v-ed0c8e79"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/K3/Betting1.vue"]
    ]),
    b$ = {
        class: "K3B__C-betting2"
    },
    m$ = {
        class: "K3B__C-betting2-tip1"
    },
    v$ = {
        key: 0
    },
    _$ = {
        class: "K3B__C-betting2-line1 mb30"
    },
    k$ = ["onClick"],
    h$ = {
        class: "K3B__C-betting2-tip1"
    },
    f$ = {
        key: 0
    },
    y$ = {
        class: "K3B__C-betting2-line2"
    },
    $$ = ["onClick"],
    w$ = {
        class: ""
    },
    T$ = {
        class: "K3B__C-betting2-line3"
    },
    C$ = ["onClick"],
    N$ = {
        class: ""
    },
    L$ = U({
        __name: "Betting2",
        props: {
            OddsList: {
                type: Array,
                required: !0
            },
            numList: {
                type: null,
                required: !0
            },
            betnumList: {
                type: Array,
                required: !0
            },
            numTow: {
                type: Array,
                required: !0
            },
            numOne: {
                type: Array,
                required: !0
            },
            numChack: {
                type: Boolean,
                required: !0
            }
        },
        emits: ["showP", "upAll", "selectNum", "onQuestion"],
        setup(l, {
            emit: i
        }) {
            const o = l,
                r = (d, u, p) => {
                    let s = d.num,
                        _ = d.num + "" + d.num;
                    if (p == 1)
                        if (o.numList[u].chackOne) {
                            o.numList[u].chackOne = !1;
                            let m = o.numTow.indexOf(_);
                            m > -1 && o.numTow.splice(m, 1)
                        } else {
                            o.numList[u].chackOne = !0, o.numList[u].chackTow = !1;
                            let m = o.numOne.indexOf(s);
                            m > -1 && o.numOne.splice(m, 1), o.numTow.push(_)
                        }
                    else if (o.numList[u].chackTow) {
                        o.numList[u].chackTow = !1;
                        let m = o.numOne.indexOf(s);
                        m > -1 && o.numOne.splice(m, 1)
                    } else {
                        o.numList[u].chackTow = !0, o.numList[u].chackOne = !1;
                        let m = o.numTow.indexOf(_);
                        m > -1 && o.numTow.splice(m, 1), o.numOne.push(s)
                    }
                    i("selectNum"), o.numTow.length > 0 && o.numOne.length > 0 || o.betnumList.length > 0 ? i("showP", !0) : i("showP", !1)
                },
                g = (d, u) => {
                    let p = d.num + "" + d.num;
                    if (o.numList[u].chack) {
                        o.numList[u].chack = !1;
                        let s = o.betnumList.indexOf(p);
                        s > -1 && o.betnumList.splice(s, 1)
                    } else o.betnumList.push(p), o.betnumList.sort(), o.numList[u].chack = !0;
                    o.numChack || o.betnumList.length > 0 || o.numTow.length > 0 && o.numOne.length > 0 ? i("showP", !0) : i("showP", !1)
                },
                b = (d, u) => {
                    i("onQuestion", d, u)
                };
            return zt(() => {}), (d, u) => {
                const p = W("van-icon");
                return n(), a("div", b$, [t("div", m$, [E(e(d.$t("k3bet2Desc1")), 1), d.OddsList[20] ? (n(), a("span", v$, "(" + e(d.OddsList[20].playRate ? d.OddsList[20].playRate : d.OddsList[20].playRate_Original) + ")", 1)) : C("v-if", !0), x(p, {
                    onClick: u[0] || (u[0] = s => b(d.$t("k3bet2Desc2"), [5, 5])),
                    class: "icon",
                    color: "#FA574A",
                    size: "16",
                    name: "question"
                })]), t("div", _$, [(n(!0), a(B, null, G(d.numList, (s, _) => (n(), a("div", {
                    class: M({
                        active: s.chack
                    }),
                    key: _,
                    onClick: m => g(s, _)
                }, [t("div", null, e(s.num) + e(s.num), 1)], 10, k$))), 128))]), t("div", h$, [E(e(d.$t("k3bet2Desc3")), 1), d.OddsList[19] ? (n(), a("span", f$, "(" + e(d.OddsList[19].playRate ? d.OddsList[19].playRate : d.OddsList[19].playRate_Original) + ")", 1)) : C("v-if", !0), x(p, {
                    onClick: u[1] || (u[1] = s => b(d.$t("k3bet2Desc4"), [6, 1, 6])),
                    class: "icon",
                    color: "#FA574A",
                    size: "16",
                    name: "question"
                })]), t("div", y$, [(n(!0), a(B, null, G(d.numList, (s, _) => (n(), a("div", {
                    class: M({
                        active: s.chackOne
                    }),
                    key: _,
                    onClick: m => r(s, _, 1)
                }, [t("div", w$, e(s.num) + e(s.num), 1)], 10, $$))), 128))]), t("div", T$, [(n(!0), a(B, null, G(d.numList, (s, _) => (n(), a("div", {
                    class: M({
                        active: s.chackTow
                    }),
                    key: _,
                    onClick: m => r(s, _, 2)
                }, [t("div", N$, e(s.num), 1)], 10, C$))), 128))])])
            }
        }
    });
const z$ = K(L$, [
        ["__scopeId", "data-v-5c28a69e"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/K3/Betting2.vue"]
    ]),
    x$ = {
        class: "K3B__C-betting3"
    },
    I$ = {
        class: "K3B__C-betting3-tip1"
    },
    R$ = {
        key: 0
    },
    S$ = {
        class: "K3B__C-betting3-line1 mb30"
    },
    B$ = ["onClick"],
    M$ = {
        class: "K3B__C-betting3-tip1"
    },
    G$ = {
        key: 0
    },
    A$ = U({
        __name: "Betting3",
        props: {
            OddsList: {
                type: Array,
                required: !0
            },
            numList: {
                type: null,
                required: !0
            },
            betnumList: {
                type: null,
                required: !0
            },
            numChack: {
                type: null,
                required: !0
            },
            numTow: {
                type: null,
                required: !0
            },
            numOne: {
                type: null,
                required: !0
            }
        },
        emits: ["showP", "upAll", "selectNum", "cNumChack", "onQuestion"],
        setup(l, {
            emit: i
        }) {
            const o = l,
                r = (d, u) => {
                    let p = d.num + "" + d.num + d.num;
                    if (o.numList[u].chack) {
                        o.numList[u].chack = !1;
                        let s = o.betnumList.indexOf(p);
                        s > -1 && o.betnumList.splice(s, 1)
                    } else o.betnumList.push(p), o.betnumList.sort(), o.numList[u].chack = !0;
                    o.numChack || o.betnumList.length > 0 || o.numTow.length > 0 && o.numOne.length > 0 ? i("showP", !0) : i("showP", !1)
                },
                g = () => {
                    i("cNumChack"), Yt(() => {
                        o.numChack || o.betnumList.length > 0 || o.numTow.length > 1 || o.numOne.length > 2 ? i("showP", !0) : i("showP", !1)
                    })
                },
                b = (d, u) => {
                    i("onQuestion", d, u)
                };
            return zt(() => {}), (d, u) => {
                const p = W("van-icon");
                return n(), a("div", x$, [t("div", I$, [E(e(d.$t("k3bet3Desc1")) + " ", 1), d.OddsList[21] ? (n(), a("span", R$, "(" + e(d.OddsList[21].playRate ? d.OddsList[21].playRate : d.OddsList[21].playRate_Original) + ")", 1)) : C("v-if", !0), x(p, {
                    onClick: u[0] || (u[0] = s => b(d.$t("k3bet3Desc2"), [6, 6, 6])),
                    class: "icon",
                    color: "#FA574A",
                    size: "16",
                    name: "question"
                })]), t("div", S$, [(n(!0), a(B, null, G(d.numList, (s, _) => (n(), a("div", {
                    class: M({
                        active: s.chack
                    }),
                    key: _,
                    onClick: m => r(s, _)
                }, [t("div", null, e(s.num) + e(s.num) + e(s.num), 1)], 10, B$))), 128))]), t("div", M$, [E(e(d.$t("k3bet3Desc3")) + " ", 1), d.OddsList[22] ? (n(), a("span", G$, "(" + e(d.OddsList[22].playRate ? d.OddsList[22].playRate : d.OddsList[22].playRate_Original) + ")", 1)) : C("v-if", !0), x(p, {
                    onClick: u[1] || (u[1] = s => b(d.$t("k3bet3Desc5"), [7, 7, 7])),
                    class: "icon",
                    color: "#FA574A",
                    size: "16",
                    name: "question"
                })]), t("div", {
                    class: M(["K3B__C-betting3-btn", {
                        active: o.numChack
                    }]),
                    onClick: g
                }, e(d.$t("k3bet3Desc4")), 3)])
            }
        }
    });
const P$ = K(A$, [
        ["__scopeId", "data-v-3deb049d"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/K3/Betting3.vue"]
    ]),
    D$ = {
        class: "K3B__C-betting4"
    },
    O$ = {
        class: "K3B__C-betting4-tip1"
    },
    q$ = {
        key: 0
    },
    E$ = {
        class: "K3B__C-betting4-line1 mb30"
    },
    j$ = ["onClick"],
    H$ = {
        class: "K3B__C-betting4-tip1"
    },
    W$ = {
        key: 0
    },
    V$ = {
        class: "K3B__C-betting4-tip1"
    },
    F$ = {
        key: 0
    },
    U$ = {
        class: "K3B__C-betting4-line1"
    },
    K$ = ["onClick"],
    X$ = U({
        __name: "Betting4",
        props: {
            OddsList: {
                type: Array,
                required: !0
            },
            numList: {
                type: null,
                required: !0
            },
            numTow: {
                type: Array,
                required: !0
            },
            numOne: {
                type: Array,
                required: !0
            },
            numChack: {
                type: null,
                required: !0
            },
            betnumList: {
                type: null,
                required: !0
            }
        },
        emits: ["showP", "upAll", "selectNum", "cNumChack", "onQuestion"],
        setup(l, {
            emit: i
        }) {
            const o = l,
                r = (d, u, p) => {
                    if (p == 1)
                        if (o.numList[u].chackOne) {
                            o.numList[u].chackOne = !1;
                            var s = o.numOne.indexOf(d.num);
                            s > -1 && o.numOne.splice(s, 1)
                        } else o.numList[u].chackOne = !0, o.numOne.push(d.num), o.numOne.sort();
                    else if (o.numList[u].chackTow) {
                        o.numList[u].chackTow = !1;
                        var u = o.numTow.indexOf(d.num);
                        u > -1 && o.numTow.splice(u, 1)
                    } else o.numList[u].chackTow = !0, o.numTow.push(d.num), o.numTow.sort();
                    o.numChack || o.numTow.length > 1 || o.numOne.length > 2 ? i("showP", !0) : i("showP", !1)
                },
                g = (d, u) => {
                    i("onQuestion", d, u)
                },
                b = () => {
                    i("cNumChack"), Yt(() => {
                        o.numChack || o.betnumList.length > 0 || o.numTow.length > 1 || o.numOne.length > 2 ? i("showP", !0) : i("showP", !1)
                    })
                };
            return zt(() => {}), (d, u) => {
                const p = W("van-icon");
                return n(), a("div", D$, [t("div", O$, [E(e(d.$t("k3bet4Desc1")) + " ", 1), d.OddsList[23] ? (n(), a("span", q$, "(" + e(d.OddsList[23].playRate ? d.OddsList[23].playRate : d.OddsList[23].playRate_Original) + ")", 1)) : C("v-if", !0), x(p, {
                    onClick: u[0] || (u[0] = s => g(d.$t("k3bet4Desc2"), [1, 2, 4])),
                    class: "icon",
                    color: "#FA574A",
                    size: "16",
                    name: "question"
                })]), t("div", E$, [(n(!0), a(B, null, G(d.numList, (s, _) => (n(), a("div", {
                    class: M({
                        active: s.chackOne
                    }),
                    key: _,
                    onClick: m => r(s, _, 1)
                }, [t("div", null, e(s.num), 1)], 10, j$))), 128))]), t("div", H$, [E(e(d.$t("k3bet4Desc3")) + " ", 1), d.OddsList[24] ? (n(), a("span", W$, "(" + e(d.OddsList[24].playRate ? d.OddsList[24].playRate : d.OddsList[24].playRate_Original) + ")", 1)) : C("v-if", !0), x(p, {
                    onClick: u[1] || (u[1] = s => g(d.$t("k3bet4Desc4"), [1, 2, 3])),
                    class: "icon",
                    color: "#FA574A",
                    size: "16",
                    name: "question"
                })]), t("div", {
                    class: M(["K3B__C-betting4-btn", {
                        active: d.numChack
                    }]),
                    onClick: b
                }, e(d.$t("betPopDesc7")), 3), t("div", V$, [E(e(d.$t("k3bet4Desc5")) + " ", 1), d.OddsList[18] ? (n(), a("span", F$, "(" + e(d.OddsList[18].playRate ? d.OddsList[18].playRate : d.OddsList[18].playRate_Original) + ")", 1)) : C("v-if", !0), x(p, {
                    onClick: u[2] || (u[2] = s => g(d.$t("k3bet4Desc6"), [1, 2])),
                    class: "icon",
                    color: "#FA574A",
                    size: "16",
                    name: "question"
                })]), t("div", U$, [(n(!0), a(B, null, G(d.numList, (s, _) => (n(), a("div", {
                    class: M({
                        active: s.chackTow
                    }),
                    key: _,
                    onClick: m => r(s, _, 2)
                }, [t("div", null, e(s.num), 1)], 10, K$))), 128))])])
            }
        }
    });
const Q$ = K(X$, [
        ["__scopeId", "data-v-bcf2c3f9"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/K3/Betting4.vue"]
    ]),
    Y$ = l => (Rt("data-v-5f002ad4"), l = l(), St(), l),
    Z$ = {
        class: "Betting__Popup-body"
    },
    J$ = {
        key: 0,
        class: "Betting__Popup-type1"
    },
    t5 = {
        class: "title"
    },
    e5 = {
        class: "list"
    },
    i5 = {
        key: 0,
        class: "Betting__Popup-type2"
    },
    n5 = {
        class: "title"
    },
    a5 = {
        class: "list"
    },
    o5 = {
        key: 1,
        class: "Betting__Popup-type2"
    },
    s5 = {
        class: "title"
    },
    l5 = {
        class: "list"
    },
    c5 = ["innerHTML"],
    r5 = {
        key: 0,
        class: "Betting__Popup-type2"
    },
    u5 = {
        class: "title"
    },
    d5 = {
        class: "list"
    },
    p5 = {
        key: 1,
        class: "title"
    },
    g5 = {
        key: 2,
        class: "Betting__Popup-type2-r"
    },
    b5 = {
        key: 0,
        class: "Betting__Popup-type2"
    },
    m5 = {
        class: "title"
    },
    v5 = {
        class: "list"
    },
    _5 = {
        key: 1,
        class: "title"
    },
    k5 = {
        key: 2,
        class: "Betting__Popup-type2-r"
    },
    h5 = {
        key: 3,
        class: "Betting__Popup-type2"
    },
    f5 = {
        class: "title"
    },
    y5 = {
        class: "list"
    },
    $5 = {
        class: "Betting__Popup-body-line"
    },
    w5 = {
        class: "Betting__Popup-body-line-list"
    },
    T5 = ["onClick"],
    C5 = {
        class: "Betting__Popup-body-line"
    },
    N5 = {
        class: "Betting__Popup-body-line-btnL"
    },
    L5 = {
        class: "Betting__Popup-body-line"
    },
    z5 = Y$(() => t("div", null, null, -1)),
    x5 = {
        class: "Betting__Popup-body-line-list"
    },
    I5 = ["onClick"],
    R5 = {
        class: "Betting__Popup-body-line"
    },
    S5 = {
        class: "Betting__Popup-foot"
    },
    B5 = {
        class: "Betting__Popup-foot-s bgcolor"
    },
    M5 = {
        class: "Betting__Popup-PreSale"
    },
    G5 = {
        class: "Betting__Popup-PreSale-head"
    },
    A5 = {
        class: "Betting__Popup-PreSale-body"
    },
    P5 = {
        class: "Betting__Popup-PreSale-foot"
    },
    D5 = U({
        __name: "BettingPopup",
        props: {
            currentInfo: {
                type: null,
                required: !0
            },
            currentGame: {
                type: null,
                required: !0
            },
            bettingPopupShow: {
                type: null,
                required: !0
            },
            betTypeList: {
                type: null,
                required: !0
            },
            betnumList: {
                type: Array,
                required: !0
            },
            numTow: {
                type: Array,
                required: !0
            },
            numOne: {
                type: Array,
                required: !0
            },
            actNav: {
                type: Number,
                required: !0
            },
            numTowList: {
                type: Array,
                required: !0
            },
            numChack: {
                type: null,
                required: !0
            }
        },
        emits: ["update:bettingPopupShow", "update:selectInfo", "clearBetting", "submitBetting"],
        setup(l, {
            expose: i,
            emit: o
        }) {
            const r = l,
                {
                    t: g
                } = kt(),
                b = v(!1),
                d = v(!0),
                u = J(() => r.currentGame.betMultiple.split("|"));
            Dt(() => r.bettingPopupShow, () => {
                p.value.coin = Number(r.betTypeList[0]), p.value.count = u.value[0]
            });
            const p = v({
                coin: 0,
                count: u.value[0],
                allCoin: 0,
                gametype: 0,
                typeid: 1,
                issuenumber: "",
                selecttype: "1"
            });
            Dt(() => u, () => {
                p.value.count = u.value[0]
            }, {
                deep: !0,
                immediate: !0
            });
            let s = J({
                get() {
                    return L(), r.bettingPopupShow || !1
                },
                set(z) {
                    o("update:bettingPopupShow", z)
                }
            });
            const _ = z => {
                    switch (z) {
                        case 1:
                            p.value.count > 1 && (p.value.count--, L());
                            break;
                        case 2:
                            p.value.count++, L();
                            break
                    }
                },
                m = z => {
                    z > 0 && (p.value.count = parseInt(z), L())
                },
                w = z => {
                    p.value.count = z, L()
                },
                y = z => {
                    p.value.coin = z, L()
                },
                f = () => {
                    b.value = !1, d.value = !0
                },
                h = async () => {
                    if (!d.value) {
                        _e(g("agreePresaleRules"));
                        return
                    }
                    let {
                        coin: z,
                        count: I,
                        selecttype: S
                    } = p.value;
                    if (I == 0) return Ot(g("bteNoCount"));
                    let D = null,
                        P = r.betnumList;
                    if (r.actNav === 0 && r.betnumList.length) {
                        D = N(r.betnumList), P.sort();
                        for (let F = 0; P.length > F; F++) P[F] == "A" && (P[F] = "H"), P[F] == "B" && (P[F] = "L"), P[F] == "C" && (P[F] = "O"), P[F] == "D" && (P[F] = "E");
                        S = P.join(",")
                    } else if (r.actNav == 1) {
                        let F = [],
                            nt = "",
                            ut = "";
                        if (P.length > 0) {
                            let ct = [];
                            for (let ot = 0; P.length > ot; ot++) {
                                let Z = "|" + P[ot] + "|";
                                ct.push(Z)
                            }
                            ut = ct.join(","), F.push(6)
                        }
                        if (r.numTowList.length > 0) {
                            let ct = [],
                                ot = [];
                            for (let Z = 0; r.numOne.length > Z; Z++) {
                                let _t = ":" + r.numOne[Z] + ":";
                                ct.push(_t), ct = ct.sort()
                            }
                            for (let Z = 0; r.numTow.length > Z; Z++) {
                                let _t = ":" + r.numTow[Z] + ":";
                                ot.push(_t), ot = ot.sort()
                            }
                            nt = ot.join(",") + "," + ct.join(","), F.push(5)
                        }
                        F = F.sort((ct, ot) => ct - ot), D = F.join(","), nt && (S = nt), ut && (S = ut), nt && ut && (S = nt + "," + ut)
                    } else if (r.actNav == 2) {
                        let F = [],
                            nt = "",
                            ut = "";
                        if (P.length > 0) {
                            let ct = [];
                            for (let ot = 0; P.length > ot; ot++) {
                                let Z = "|" + P[ot] + "|";
                                ct.push(Z), ct = ct.sort()
                            }
                            nt = ct.join(","), F.push(7)
                        }
                        r.numChack && (ut = "|AAA|", F.push(8)), F = F.sort((ct, ot) => ct - ot), D = F.join(","), nt && (S = nt), ut && (S = ut), nt && ut && (S = nt + "," + ut)
                    } else if (r.actNav == 3) {
                        let F = [],
                            nt = "",
                            ut = "",
                            ct = "";
                        if (r.numOne.length > 2) {
                            let ot = [];
                            for (let Z = 0; r.numOne.length > Z; Z++) {
                                let _t = "|" + r.numOne[Z] + "|";
                                ot.push(_t), ot = ot.sort()
                            }
                            nt = ot.join(","), F.push(9)
                        }
                        if (r.numChack && (ut = "|ABC|", F.push(10)), r.numTow.length > 1) {
                            let ot = [];
                            for (let Z = 0; r.numTow.length > Z; Z++) {
                                let _t = "." + r.numTow[Z] + ".";
                                ot.push(_t), ot = ot.sort()
                            }
                            ct = ot.join(","), F.push(4)
                        }
                        F = F.sort((ot, Z) => ot - Z), D = F.join(","), ct && (S = ct), nt && (S = nt), ut && (S = ut), nt && ut && (S = nt + "," + ut), ct && nt && (S = ct + "," + nt), ct && ut && (S = ct + "," + ut), ct && nt && ut && (S = ct + "," + nt + "," + ut)
                    }
                    const V = await lt(ua({
                        amount: z,
                        betCount: Number(I),
                        gameType: D,
                        selectType: S,
                        typeId: r.currentGame.typeID,
                        issuenumber: r.currentInfo.gameNo
                    }));
                    (V == null ? void 0 : V.code) === 0 ? (_e(g("code" + (V == null ? void 0 : V.msgCode))), o("submitBetting", r.currentInfo.gameNo)) : o("clearBetting")
                },
                N = z => {
                    let I = [];
                    for (let S = 0; z.length > S; S++) {
                        if (z[S] == "3" || z[S] == "4" || z[S] == "5" || z[S] == "6" || z[S] == "7" || z[S] == "8" || z[S] == "9" || z[S] == "10" || z[S] == "11" || z[S] == "12" || z[S] == "13" || z[S] == "14" || z[S] == "15" || z[S] == "16" || z[S] == "17" || z[S] == "18") {
                            I.push(1);
                            continue
                        }
                        if (z[S] == "A" || z[S] == "B") {
                            I.push(2);
                            continue
                        }
                        if (z[S] == "C" || z[S] == "D") {
                            I.push(3);
                            continue
                        }
                    }
                    return I = I.sort(function(S, D) {
                        return S - D
                    }), [...new Set(I)].join(",")
                },
                L = () => {
                    const z = r.betnumList.length + k() + (r.numChack ? 1 : 0) + $(r.numOne, 3) + $(r.numTow);
                    p.value.allCoin = p.value.coin * p.value.count * z
                },
                k = () => {
                    const z = r.numTowList.length;
                    return z && r.numTowList[0].split("|")[1].split(",").length * z
                },
                $ = (z, I = 2) => {
                    if (r.actNav != 3) return 0;

                    function S(P) {
                        let V = 1;
                        for (let F = 2; F <= P; F++) V *= F;
                        return V
                    }
                    const D = z.length;
                    return D < I ? 0 : S(D) / (S(I) * S(D - I))
                },
                T = z => {
                    switch (z) {
                        case "A":
                            return g("betBig");
                        case "B":
                            return g("betSmall");
                        case "C":
                            return g("betOdd");
                        case "D":
                            return g("betEven");
                        default:
                            return z
                    }
                },
                R = z => {
                    let I = z.split("|"),
                        S = "";
                    return I.forEach(D => {
                        S += `<div>${D}</div>`
                    }), S
                };
            return i({
                setAllCoin: L
            }), (z, I) => {
                const S = W("van-field"),
                    D = W("van-popup"),
                    P = Jt("throttle-click");
                return n(), a(B, null, [C(" 投注内容 begin "), x(D, {
                    show: c(s),
                    "onUpdate:show": I[6] || (I[6] = V => ce(s) ? s.value = V : s = V),
                    position: "bottom",
                    style: {
                        "box-shadow": "0px -18px 40px rgba(37, 37, 60, 0.26)"
                    },
                    round: !0,
                    overlay: !1,
                    "close-on-click-overlay": !1,
                    "lock-scroll": !1
                }, {
                    default: A(() => [t("div", Z$, [z.actNav === 0 && z.betnumList.length ? (n(), a("div", J$, [t("p", t5, e(z.$t("betPopDesc1")), 1), t("div", e5, [(n(!0), a(B, null, G(z.betnumList, (V, F) => (n(), a("div", {
                        class: M(V % 2 === 0 ? "green" : "red num" + V),
                        key: F
                    }, e(T(V)), 3))), 128))])])) : C("v-if", !0), z.actNav === 1 ? (n(), a(B, {
                        key: 1
                    }, [z.betnumList.length ? (n(), a("div", i5, [t("p", n5, e(z.$t("betPopDesc2")), 1), t("div", a5, [(n(!0), a(B, null, G(z.betnumList, (V, F) => (n(), a("div", {
                        key: F,
                        class: "Betting__Popup-type2-d"
                    }, e(T(V)), 1))), 128))])])) : C("v-if", !0), z.numTowList.length ? (n(), a("div", o5, [t("p", s5, e(z.$t("betPopDesc3")), 1), t("div", l5, [(n(!0), a(B, null, G(z.numTowList, (V, F) => (n(), a("div", {
                        key: F,
                        class: "Betting__Popup-type2-o",
                        innerHTML: R(V)
                    }, null, 8, c5))), 128))])])) : C("v-if", !0)], 64)) : C("v-if", !0), z.actNav === 2 ? (n(), a(B, {
                        key: 2
                    }, [z.betnumList.length ? (n(), a("div", r5, [t("p", u5, e(z.$t("betPopDesc4")), 1), t("div", d5, [(n(!0), a(B, null, G(z.betnumList, (V, F) => (n(), a("div", {
                        key: F,
                        class: "Betting__Popup-type2-d"
                    }, e(T(V)), 1))), 128))])])) : C("v-if", !0), z.numChack ? (n(), a("p", p5, e(z.$t("betPopDesc5")), 1)) : C("v-if", !0), z.numChack ? (n(), a("div", g5, e(z.$t("k3bet3Desc4")), 1)) : C("v-if", !0)], 64)) : C("v-if", !0), z.actNav === 3 ? (n(), a(B, {
                        key: 3
                    }, [z.numOne.length > 2 ? (n(), a("div", b5, [t("p", m5, e(z.$t("betPopDesc6")), 1), t("div", v5, [(n(!0), a(B, null, G(z.numOne, (V, F) => (n(), a("div", {
                        key: F,
                        class: "Betting__Popup-type2-d"
                    }, e(T(V)), 1))), 128))])])) : C("v-if", !0), z.numChack ? (n(), a("p", _5, e(z.$t("betPopDesc7")), 1)) : C("v-if", !0), z.numChack ? (n(), a("div", k5, e(z.$t("betPopDesc7")), 1)) : C("v-if", !0), z.numTow.length > 1 ? (n(), a("div", h5, [t("p", f5, e(z.$t("betPopDesc8")), 1), t("div", y5, [(n(!0), a(B, null, G(z.numTow, (V, F) => (n(), a("div", {
                        key: F,
                        class: "Betting__Popup-type2-d"
                    }, e(T(V)), 1))), 128))])])) : C("v-if", !0)], 64)) : C("v-if", !0), t("div", $5, [E(e(c(g)("amount")) + " ", 1), t("div", w5, [(n(!0), a(B, null, G(z.betTypeList, (V, F) => (n(), a("div", {
                        key: F,
                        class: M(["Betting__Popup-body-line-item", {
                            bgcolor: p.value.coin == V
                        }]),
                        onClick: nt => y(V)
                    }, e(V), 11, T5))), 128))])]), t("div", C5, [E(e(c(g)("numbers")) + " ", 1), t("div", N5, [t("div", {
                        class: M(["Betting__Popup-btn", {
                            bgcolor: p.value.count > 0
                        }]),
                        onClick: I[0] || (I[0] = V => _(1))
                    }, "-", 2), x(S, {
                        class: "Betting__Popup-input",
                        modelValue: p.value.count,
                        "onUpdate:modelValue": I[1] || (I[1] = V => p.value.count = V),
                        type: "digit",
                        maxlength: 4,
                        onInput: m
                    }, null, 8, ["modelValue"]), t("div", {
                        class: "Betting__Popup-btn bgcolor",
                        onClick: I[2] || (I[2] = V => _(2))
                    }, "+")])]), t("div", L5, [z5, t("div", x5, [(n(!0), a(B, null, G(u.value, (V, F) => (n(), a("div", {
                        key: F,
                        class: M(["Betting__Popup-body-line-item", {
                            bgcolor: p.value.count == V
                        }]),
                        onClick: nt => w(V)
                    }, " X" + e(V), 11, I5))), 128))])]), t("div", R5, [t("span", {
                        class: M(["Betting__Popup-agree", {
                            active: d.value
                        }]),
                        onClick: I[3] || (I[3] = V => d.value = !d.value)
                    }, e(c(g)("agree")), 3), t("span", {
                        onClick: I[4] || (I[4] = V => b.value = !0),
                        class: "Betting__Popup-preSaleShow"
                    }, e(c(g)("presaleRules")), 1)])]), t("div", S5, [t("div", {
                        class: "Betting__Popup-foot-c",
                        onClick: I[5] || (I[5] = V => o("clearBetting"))
                    }, e(c(g)("cancel")), 1), ft((n(), a("div", B5, [E(e(c(g)("totalAmount")) + " " + e(c(It)(p.value.allCoin || 0)), 1)])), [
                        [P, {
                            handler: h,
                            wait: 2e3
                        }]
                    ])])]),
                    _: 1
                }, 8, ["show"]), C(" 规则弹层 begin"), x(D, {
                    show: b.value,
                    "onUpdate:show": I[7] || (I[7] = V => b.value = V),
                    "close-on-click-overlay": !1,
                    round: ""
                }, {
                    default: A(() => [t("div", M5, [t("div", G5, e(c(g)("presaleRules")), 1), t("div", A5, e(z.$t("betPopTXT")), 1), t("div", P5, [t("div", {
                        class: "Betting__Popup-PreSale-foot-btn",
                        onClick: f
                    }, e(c(g)("iKonw")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const O5 = K(D5, [
        ["__scopeId", "data-v-5f002ad4"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/K3/BettingPopup.vue"]
    ]),
    q5 = {
        class: "K3B__C"
    },
    E5 = {
        class: "K3B__C-mark"
    },
    j5 = {
        class: "K3B__C-nav"
    },
    H5 = ["onClick"],
    W5 = {
        class: "qpopup-box"
    },
    V5 = {
        class: "qpopup-box-list"
    },
    F5 = {
        class: "qpopup-box-txt"
    },
    U5 = U({
        __name: "Betting",
        props: {
            currentInfo: {
                type: Object,
                default: () => ({})
            },
            ProhibitBuyTime: {
                type: Number,
                default: 5
            },
            currentGame: {
                type: Object,
                default: () => ({})
            }
        },
        emits: ["betting", "changeBettingP"],
        setup(l, {
            expose: i,
            emit: o
        }) {
            const r = l,
                {
                    t: g
                } = kt(),
                b = {
                    bt1: g$,
                    bt2: z$,
                    bt3: P$,
                    bt4: Q$
                },
                d = v(),
                u = v(),
                p = v([]),
                s = v(0),
                _ = v([{
                    name: g("totalBet"),
                    comp: "bt1"
                }, {
                    name: g("sameNum"),
                    comp: "bt2"
                }, {
                    name: g("numbersMatch"),
                    comp: "bt3"
                }, {
                    name: g("numbersUnmatch"),
                    comp: "bt4"
                }]),
                m = v([{
                    num: 1,
                    chack: !1,
                    chackOne: !1,
                    chackTow: !1
                }, {
                    num: 2,
                    chack: !1,
                    chackOne: !1,
                    chackTow: !1
                }, {
                    num: 3,
                    chack: !1,
                    chackOne: !1,
                    chackTow: !1
                }, {
                    num: 4,
                    chack: !1,
                    chackOne: !1,
                    chackTow: !1
                }, {
                    num: 5,
                    chack: !1,
                    chackOne: !1,
                    chackTow: !1
                }, {
                    num: 6,
                    chack: !1,
                    chackOne: !1,
                    chackTow: !1
                }]),
                w = v([]),
                y = v([]),
                f = v([]),
                h = v(!1),
                N = v([]),
                L = v(!1),
                k = J(() => (r.currentInfo.passTime < r.ProhibitBuyTime && T(), r.currentInfo.passTime < r.ProhibitBuyTime)),
                $ = J(() => r.currentGame.scope ? r.currentGame.scope.split("|").map(ct => Number(ct)) : []),
                T = () => {
                    L.value = !1, R()
                },
                R = () => {
                    u.value.clearList && u.value.clearList(), w.value = [], y.value = [], f.value = [], h.value = !1, N.value = [], m.value = [{
                        num: 1,
                        chack: !1,
                        chackOne: !1,
                        chackTow: !1
                    }, {
                        num: 2,
                        chack: !1,
                        chackOne: !1,
                        chackTow: !1
                    }, {
                        num: 3,
                        chack: !1,
                        chackOne: !1,
                        chackTow: !1
                    }, {
                        num: 4,
                        chack: !1,
                        chackOne: !1,
                        chackTow: !1
                    }, {
                        num: 5,
                        chack: !1,
                        chackOne: !1,
                        chackTow: !1
                    }, {
                        num: 6,
                        chack: !1,
                        chackOne: !1,
                        chackTow: !1
                    }]
                },
                z = async () => {
                    const ct = await lt(is());
                    p.value = (ct == null ? void 0 : ct.data) || []
                },
                I = () => {
                    d.value.setAllCoin()
                },
                S = ct => {
                    s.value = ct, L.value = !1, R()
                },
                D = () => {
                    let ct = [];
                    for (let ot = 0; y.value.length > ot; ot++) {
                        let Z = y.value[ot],
                            _t = [];
                        for (let Bt = 0; f.value.length > Bt; Bt++) _t.push(f.value[Bt]);
                        if (_t.length > 0) {
                            let Bt = _t.sort().join(",");
                            ct.push(Z + "|" + Bt)
                        }
                    }
                    N.value = ct.sort()
                },
                P = async ct => {
                    o("betting", ct), L.value = !1, R()
                },
                V = v(!1),
                F = v([]),
                nt = v(""),
                ut = (ct, ot) => {
                    nt.value = ct, F.value = ot, V.value = !0
                };
            return zt(() => {
                z()
            }), i({
                bettingPopupShow: L
            }), (ct, ot) => {
                const Z = W("van-popup");
                return n(), a("div", q5, [ft(t("div", E5, [t("div", null, e(r.currentInfo.time3 || "0"), 1), t("div", null, e(r.currentInfo.time4 || "0"), 1)], 512), [
                    [te, k.value]
                ]), t("div", j5, [(n(!0), a(B, null, G(_.value, (_t, Bt) => (n(), a("div", {
                    key: Bt,
                    class: M({
                        active: s.value == Bt
                    }),
                    onClick: At => S(Bt)
                }, e(_t.name), 11, H5))), 128))]), (n(), it(qe(b[_.value[s.value].comp]), {
                    ref_key: "BetRef",
                    ref: u,
                    OddsList: p.value,
                    numList: m.value,
                    numTow: y.value,
                    numOne: f.value,
                    numChack: h.value,
                    betnumList: w.value,
                    onSelectNum: D,
                    onShowP: ot[0] || (ot[0] = _t => L.value = _t),
                    onUpAll: I,
                    onCNumChack: ot[1] || (ot[1] = _t => h.value = !h.value),
                    onOnQuestion: ut
                }, null, 40, ["OddsList", "numList", "numTow", "numOne", "numChack", "betnumList"])), x(O5, {
                    ref_key: "betPopupRef",
                    ref: d,
                    currentInfo: r.currentInfo,
                    bettingPopupShow: L.value,
                    numTow: y.value,
                    numOne: f.value,
                    betTypeList: $.value,
                    numTowList: N.value,
                    currentGame: l.currentGame,
                    actNav: s.value,
                    betnumList: w.value,
                    numChack: h.value,
                    onClearBetting: T,
                    onSubmitBetting: P
                }, null, 8, ["currentInfo", "bettingPopupShow", "numTow", "numOne", "betTypeList", "numTowList", "currentGame", "actNav", "betnumList", "numChack"]), C(" 玩法提示 "), x(Z, {
                    class: "qpopup",
                    show: V.value,
                    "onUpdate:show": ot[2] || (ot[2] = _t => V.value = _t),
                    "close-on-click-overlay": !1,
                    closeable: "",
                    "close-icon": "close",
                    "close-icon-position": "bottom-left",
                    round: ""
                }, {
                    default: A(() => [t("div", W5, [t("div", V5, [(n(!0), a(B, null, G(F.value, (_t, Bt) => (n(), a("div", {
                        class: M("num num" + _t),
                        key: Bt
                    }, null, 2))), 128))]), t("div", F5, e(nt.value), 1)])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const K5 = K(U5, [
        ["__scopeId", "data-v-8a4509d7"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/K3/Betting.vue"]
    ]),
    X5 = {
        class: "GameRecord__C"
    },
    Q5 = {
        class: "GameRecord__C-head"
    },
    Y5 = {
        class: "GameRecord__C-body"
    },
    Z5 = {
        class: "GameRecord__C-body-premium"
    },
    J5 = {
        key: 1,
        class: "GameRecord__C-body-empty"
    },
    t3 = {
        key: 0,
        class: "GameRecord__C-foot"
    },
    e3 = {
        class: "GameRecord__C-foot-page"
    },
    i3 = U({
        __name: "GameRecord",
        props: {
            typeid: {
                type: Number,
                required: !0
            }
        },
        setup(l, {
            expose: i
        }) {
            const o = l,
                r = v([]),
                g = v(4),
                b = v(10),
                d = v(1),
                u = () => {
                    d.value--, s()
                },
                p = () => {
                    d.value++, s()
                },
                s = async (_ = !1) => {
                    if (o.typeid == null) return;
                    _ && (d.value = 1);
                    const [m, w] = await ee(rn({
                        pageSize: b.value,
                        pageNo: d.value,
                        typeId: o.typeid
                    }));
                    r.value = w.list || [], g.value = w.totalPage
                };
            return i({
                getData: s
            }), ke(() => {
                s()
            }), (_, m) => {
                const w = W("van-col"),
                    y = W("van-row"),
                    f = W("van-icon");
                return n(), a("div", X5, [t("div", Q5, [x(y, null, {
                    default: A(() => [x(w, {
                        span: "10"
                    }, {
                        default: A(() => [E(e(_.$t("gameRecordNum")), 1)]),
                        _: 1
                    }), x(w, {
                        span: "4"
                    }, {
                        default: A(() => [E(e(_.$t("gameRecordTotal")), 1)]),
                        _: 1
                    }), x(w, {
                        span: "10"
                    }, {
                        default: A(() => [E(e(_.$t("gameRecordResult")), 1)]),
                        _: 1
                    })]),
                    _: 1
                })]), t("div", Y5, [r.value.length ? (n(!0), a(B, {
                    key: 0
                }, G(r.value, (h, N) => (n(), it(y, {
                    key: N
                }, {
                    default: A(() => [x(w, {
                        span: "8"
                    }, {
                        default: A(() => [E(e(h.issueNumber), 1)]),
                        _: 2
                    }, 1024), x(w, {
                        span: "1"
                    }, {
                        default: A(() => [t("span", null, e(h.sumCount), 1)]),
                        _: 2
                    }, 1024), x(w, {
                        span: "4"
                    }, {
                        default: A(() => [t("span", null, e(h.sumCount > 10 ? _.$t("big") : _.$t("small")), 1)]),
                        _: 2
                    }, 1024), x(w, {
                        span: "4"
                    }, {
                        default: A(() => [t("span", null, e(h.sumCount % 2 ? _.$t("k3Odd") : _.$t("k3Even")), 1)]),
                        _: 2
                    }, 1024), x(w, {
                        span: "6"
                    }, {
                        default: A(() => [t("div", Z5, [(n(!0), a(B, null, G(h.premium, (L, k) => (n(), a("div", {
                            key: k,
                            class: M("n" + L)
                        }, null, 2))), 128))])]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024))), 128)) : (n(), a("div", J5, [x(de)]))]), r.value.length ? (n(), a("div", t3, [t("div", {
                    class: M(["GameRecord__C-foot-previous", {
                        disabled: d.value <= 1
                    }]),
                    onClick: u
                }, [x(f, {
                    name: "arrow-left",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2), t("div", e3, e(d.value) + "/" + e(g.value), 1), t("div", {
                    class: M(["GameRecord__C-foot-next", {
                        disabled: d.value >= g.value
                    }]),
                    onClick: p
                }, [x(f, {
                    name: "arrow",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2)])) : C("v-if", !0)])
            }
        }
    });
const n3 = K(i3, [
        ["__scopeId", "data-v-4e09079f"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/K3/GameRecord.vue"]
    ]),
    a3 = {
        class: "Trend__C"
    },
    o3 = {
        class: "Trend__C-head"
    },
    s3 = {
        class: "Trend__C-body"
    },
    l3 = {
        class: "Trend__C-body-premium"
    },
    c3 = {
        class: "Trend__C-body-gameText"
    },
    r3 = {
        key: 1,
        class: "Trend__C-body-empty"
    },
    u3 = {
        key: 0,
        class: "Trend__C-foot"
    },
    d3 = {
        class: "Trend__C-foot-page"
    },
    p3 = U({
        __name: "Trend",
        props: {
            typeid: {
                type: Number,
                required: !0
            }
        },
        setup(l, {
            expose: i
        }) {
            const o = l,
                {
                    t: r
                } = kt(),
                g = v([]),
                b = v(4),
                d = v(10),
                u = v(1),
                p = () => {
                    u.value--, _()
                },
                s = () => {
                    u.value++, _()
                },
                _ = async (y = !1) => {
                    if (o.typeid == null) return;
                    y && (u.value = 1);
                    const [f, h] = await ee(rn({
                        pageSize: d.value,
                        pageNo: u.value,
                        typeId: o.typeid
                    }));
                    g.value = h.list.map(N => {
                        let L = [0, 0, 0, 0, 0, 0],
                            k = N.premium.split("").map(Number),
                            $ = N.premium.split("").map(Number);
                        for (let T = 0; L.length > T; T++) L[k[T] - 1] = k[T];
                        return N.Premiums = L, N.AllEqual = w($), N
                    }) || [], b.value = h.totalPage
                },
                m = v([r("trendTXT1"), r("trendTXT2"), r("trendTXT3"), r("trendTXT4")]),
                w = y => {
                    let f = [0, 0, 0, 0, 0, 0],
                        h = y.sort(),
                        N = 2;
                    for (let L = 0; L < h.length - 1; L++) h[L] == h[L + 1] && (f[h[L] - 1] = N++);
                    return f
                };
            return i({
                getData: _
            }), ke(() => {
                _()
            }), (y, f) => {
                const h = W("van-col"),
                    N = W("van-row"),
                    L = W("van-icon");
                return n(), a("div", a3, [t("div", o3, [x(N, null, {
                    default: A(() => [x(h, {
                        span: "8"
                    }, {
                        default: A(() => [E(e(y.$t("trendNumber")), 1)]),
                        _: 1
                    }), x(h, {
                        span: "6"
                    }, {
                        default: A(() => [E(e(y.$t("trendResult")), 1)]),
                        _: 1
                    }), x(h, {
                        span: "10"
                    }, {
                        default: A(() => [E(e(y.$t("trendNum")), 1)]),
                        _: 1
                    })]),
                    _: 1
                })]), t("div", s3, [g.value.length ? (n(!0), a(B, {
                    key: 0
                }, G(g.value, (k, $) => (n(), it(N, {
                    key: $
                }, {
                    default: A(() => [x(h, {
                        span: "8"
                    }, {
                        default: A(() => [E(e(k.issueNumber), 1)]),
                        _: 2
                    }, 1024), x(h, {
                        span: "6"
                    }, {
                        default: A(() => [t("div", l3, [(n(!0), a(B, null, G(k.premium, (T, R) => (n(), a("div", {
                            key: R,
                            class: M("n" + T)
                        }, null, 2))), 128))])]),
                        _: 2
                    }, 1024), x(h, {
                        span: "10"
                    }, {
                        default: A(() => [t("div", c3, [t("span", null, e(m.value[k.gameType]), 1)])]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024))), 128)) : (n(), a("div", r3, [x(de)]))]), g.value.length ? (n(), a("div", u3, [t("div", {
                    class: M(["Trend__C-foot-previous", {
                        disabled: u.value <= 1
                    }]),
                    onClick: p
                }, [x(L, {
                    name: "arrow-left",
                    class: "Trend__C-icon",
                    size: "20"
                })], 2), t("div", d3, e(u.value) + "/" + e(b.value), 1), t("div", {
                    class: M(["Trend__C-foot-next", {
                        disabled: u.value >= b.value
                    }]),
                    onClick: s
                }, [x(L, {
                    name: "arrow",
                    class: "Trend__C-icon",
                    size: "20"
                })], 2)])) : C("v-if", !0)])
            }
        }
    });
const g3 = K(p3, [
        ["__scopeId", "data-v-4159c83a"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/K3/Trend.vue"]
    ]),
    b3 = {
        key: 1,
        class: "WinningTip__C-body-l1"
    },
    m3 = {
        class: "WinningTip__C-body-l2"
    },
    v3 = {
        class: "line1"
    },
    _3 = {
        class: "line2"
    },
    k3 = {
        class: "yuan"
    },
    h3 = {
        class: "WinningTip__C-body-l3"
    },
    f3 = {
        key: 0,
        class: "isLose"
    },
    y3 = {
        class: "head"
    },
    $3 = {
        class: "bonus"
    },
    w3 = {
        class: "gameDetail"
    },
    T3 = {
        class: "WinningTip__C-body-l4"
    },
    C3 = ["onClick"],
    N3 = U({
        __name: "WinningTips",
        setup(l, {
            expose: i
        }) {
            const o = J(() => b.value[0] ? b.value[0].state == 0 : !1),
                r = J(() => b.value[0] || {}),
                g = v(!1),
                b = v([]);
            let d = v();
            const u = () => {
                    clearTimeout(d.value), b.value.shift(), g.value && b.value.length && (d.value = setTimeout(() => {
                        u()
                    }, 1e3 * 3))
                },
                p = () => {
                    g.value = !g.value, g.value ? d.value = setTimeout(() => {
                        u()
                    }, 1e3 * 3) : clearTimeout(d.value)
                },
                s = m => {
                    m.list = m.premium.split(""), m.sum = Number(m.list[0]) + Number(m.list[1]) + Number(m.list[2]), b.value.push(m), g.value && (d.value = setTimeout(() => {
                        u()
                    }, 1e3 * 3))
                },
                _ = () => {
                    b.value = []
                };
            return i({
                showMark: s
            }), (m, w) => ft((n(), a("div", {
                class: "WinningTip__C",
                onClick: u
            }, [t("div", {
                class: M(["WinningTip__C-body", {
                    isL: o.value
                }])
            }, [o.value ? (n(), a("div", {
                key: 0,
                class: M(["WinningTip__C-body-l1", {
                    isL: o.value
                }])
            }, e(m.$t("k3WarningTip1")), 3)) : (n(), a("div", b3, e(m.$t("k3WarningTip2")), 1)), t("div", m3, [t("div", v3, [(n(!0), a(B, null, G(r.value.list, (y, f) => (n(), a("div", {
                class: M(["n" + y])
            }, null, 2))), 256))]), t("div", _3, [t("div", null, e(r.value.premium), 1), t("div", k3, e(r.value.sum > 10 ? m.$t("big") : m.$t("small")), 1), t("div", null, e(r.value.sum % 2 ? m.$t("k3Odd") : m.$t("k3Even")), 1)])]), t("div", h3, [o.value ? (n(), a("div", f3, e(m.$t("k3WarningTip3")), 1)) : (n(), a(B, {
                key: 1
            }, [t("div", y3, e(m.$t("k3WarningTip4")), 1), t("div", $3, e(c(It)(Number(r.value.winAmount))), 1)], 64)), t("div", w3, e(m.$t("k3WarningTip5")) + e(r.value.typeName) + " " + e(r.value.issueNumber), 1)]), t("div", T3, [t("div", {
                class: M(["acitveBtn", {
                    active: g.value
                }]),
                onClick: be(p, ["stop"])
            }, null, 10, C3), E(" " + e(m.$t("autoShutOff3s")), 1)]), t("div", {
                class: "closeBtn",
                onClick: _
            })], 2)], 512)), [
                [te, b.value.length]
            ])
        }
    });
const L3 = K(N3, [
        ["__scopeId", "data-v-2d418cc5"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/K3/WinningTips.vue"]
    ]),
    z3 = {
        class: "K3__C"
    },
    x3 = {
        class: "K3__C-head-more"
    },
    I3 = U({
        __name: "index",
        setup(l) {
            const i = {
                    GameRecord: n3,
                    Trend: g3,
                    MyGameRecord: Ra
                },
                o = v(),
                r = v(),
                g = v(),
                b = v(!1),
                d = v("GameRecord"),
                u = ht(),
                p = Ee(),
                s = p.getK3,
                _ = v(0),
                m = v(localStorage.getItem("volumeShow") || "1"),
                w = v(!1),
                y = v([]),
                f = v(null),
                h = v({
                    gameNo: "loading",
                    currentTime: "",
                    beginTime: "",
                    passTime: 180,
                    time1: 0,
                    time2: 0,
                    time3: 0,
                    time4: 0
                }),
                N = v("666"),
                L = v(5),
                k = v(""),
                $ = v(!1),
                T = v(null),
                R = J(() => s[_.value] || {}),
                z = Ye(),
                I = J(() => z.getIsShowLotteryDragon);
            zt(() => {
                V()
            }), Ve(() => {
                clearInterval(f.value), clearInterval(At.value), Mt.value.forEach(Q => {
                    clearInterval(Q)
                }), et.value && clearTimeout(et.value)
            }), Dt(() => Me().visibility, Q => {
                Q === 0 ? clearInterval(f.value) : (V(), nt(_.value))
            });
            const S = () => {
                    sessionStorage.setItem("clickedGameType", "lottery"), u.push({
                        path: "/"
                    })
                },
                D = () => {
                    m.value == "1" ? m.value = "2" : m.value = "1", localStorage.setItem("volumeShow", m.value)
                },
                P = Q => {
                    u.push({
                        name: Q
                    })
                },
                V = () => {
                    T.value == null && nt(0)
                },
                F = async (Q, Y = !1) => {
                    const H = await lt(as({
                        typeId: Q
                    }));
                    H && (N.value = H.data.premium, Y && yt(N.value))
                },
                nt = Q => {
                    p.getK3Data(), _.value = Q, T.value = s[Q].typeID, ut(T.value), Yt(() => {
                        o.value.getData(T.value)
                    })
                },
                ut = async (Q, Y = !1) => {
                    F(Q, Y);
                    const [H, wt] = await ee(ns({
                        typeId: Q
                    }));
                    h.value.gameNo = wt.issueNumber, h.value.currentTime = wt.serviceTime.replace(/-/g, "/"), h.value.beginTime = wt.startTime.replace(/-/g, "/"), ct()
                },
                ct = () => {
                    if (!s.length) return;
                    var Q = new Date(h.value.currentTime).getTime(),
                        Y = new Date(h.value.beginTime).getTime();
                    let H = (Q - Y) / 1e3,
                        wt = s[_.value];
                    if (H > wt.intervalM * 60 && (H = wt.intervalM * 60), h.value.passTime = wt.intervalM * 60 - H, h.value.passTime < 0) {
                        k.value = "An error occurred, please contact customer service。The game time is " + wt.intervalM + " minutes,start time is " + h.value.beginTime + ",current time is" + h.value.currentTime + "!", w.value = !0;
                        return
                    }
                    ot()
                },
                ot = () => {
                    clearInterval(f.value), Z(!1), f.value = setInterval(function() {
                        Z()
                    }, 1e3)
                },
                Z = (Q = !0) => {
                    if (h.value.passTime <= L.value && ($.value = !1), m.value == "1" && (h.value.passTime <= L.value && h.value.passTime > 1 ? _t(1) : h.value.passTime == 1 && _t(2)), h.value.passTime > 0) {
                        let Y = h.value.passTime;
                        h.value.time2 = Math.floor(Y / 60), h.value.time3 = Math.floor(Y % 60 / 10), h.value.time4 = Math.floor(Y % 10), h.value.passTime--
                    } else clearInterval(f.value), Q && Bt()
                },
                _t = (Q = 1) => {
                    const Y = document.getElementById(`voice${Q}`);
                    Y && Y.play()
                },
                Bt = () => {
                    ut(T.value, !0), g.value.getWinsUserAmount(!1), o.value.getData(!0)
                },
                At = v(null),
                dt = (Q, Y) => {
                    if (Q >= 0 && Y > 0 && Y >= Q) {
                        let H = Y - Q + 1;
                        return Math.floor(Math.random() * H + Q)
                    } else return 0
                },
                yt = Q => {
                    At.value || (At.value = setInterval(function() {
                        for (var Y = [], H = 0; 3 > H; H++) Y.push(dt(1, 6));
                        N.value = Y.join("")
                    }, 50)), setTimeout(function() {
                        clearInterval(At.value), N.value = Q, At.value = null
                    }, 2e3)
                },
                $t = v({}),
                Mt = v([]),
                Gt = Q => {
                    if (g.value.getWinsUserAmount(!1), o.value.getData(), $t.value[Q]) return;
                    $t.value[Q] = !0;
                    const {
                        time1: Y,
                        time2: H,
                        time3: wt,
                        time4: jt
                    } = h.value, ie = (Y * 10 * 60 + H * 60 + wt * 10 + jt) * 1e3;
                    Mt.value[R.value.intervalM] = setTimeout(() => {
                        at(Q)
                    }, ie)
                },
                gt = Q => {
                    b.value = Q
                },
                et = v(null),
                at = async Q => {
                    const Y = await lt(os({
                        issueNumber: Q
                    }));
                    if (Y) {
                        if (!(Y.data.state != 2)) {
                            et.value = setTimeout(() => {
                                at(Q)
                            }, 2e3);
                            return
                        }
                        r.value.showMark(Y.data), delete $t.value[Q]
                    }
                };
            return (Q, Y) => {
                const H = W("NavBar");
                return n(), a("div", z3, [x(H, {
                    "left-arrow": "",
                    onClickLeft: S,
                    class: "lottery",
                    headLogo: !0
                }, {
                    right: A(() => [t("div", x3, [t("div", {
                        onClick: Y[0] || (Y[0] = wt => P("CustomerService"))
                    }), t("div", {
                        class: M({
                            disableVoice: m.value == "2"
                        }),
                        onClick: D
                    }, null, 2)])]),
                    _: 1
                }), C(" 钱包余额 "), x(Li, {
                    ref_key: "WallteRef",
                    ref: g
                }, null, 512), x(hi, {
                    siteMsg: y.value,
                    key: "k3"
                }, null, 8, ["siteMsg"]), C(" 游戏类型 "), x(zi, {
                    gameList: c(s),
                    currentGameIndex: _.value,
                    onChangeGame: nt
                }, null, 8, ["gameList", "currentGameIndex"]), C(" 游戏开始时间倒计时 "), x(o$, {
                    currentInfo: h.value,
                    premium: N.value,
                    currentGame: R.value
                }, null, 8, ["currentInfo", "premium", "currentGame"]), C(" 投注表 "), x(K5, {
                    currentInfo: h.value,
                    currentGame: R.value,
                    VoiceType: m.value,
                    typeid: T.value,
                    onBetting: Gt,
                    onChangeBettingP: gt
                }, null, 8, ["currentInfo", "currentGame", "VoiceType", "typeid"]), C(" 记录导航 "), x(Ii, {
                    record: d.value,
                    onChangeC: Y[1] || (Y[1] = wt => d.value = wt)
                }, null, 8, ["record"]), C(" 动态展示对应的组件 "), (n(), it(Qe, null, [(n(), it(qe(i[d.value]), {
                    ref_key: "RecordComponent",
                    ref: o,
                    typeid: T.value,
                    ApiFun: c(cn),
                    listApi: c(rn),
                    EmerdApi: c(da),
                    goPathName: "AllLotteryGames-BettingRecordK3"
                }, null, 8, ["typeid", "ApiFun", "listApi", "EmerdApi"]))], 1024)), C(" 弹窗组件 "), x(xe, {
                    show: w.value,
                    onConfirm: Y[2] || (Y[2] = wt => P("/login"))
                }, {
                    content: A(() => [t("div", null, e(k.value), 1)]),
                    _: 1
                }, 8, ["show"]), C(" 中奖提示组件 "), x(L3, {
                    ref_key: "WinningTipsRef",
                    ref: r
                }, null, 512), I.value ? (n(), it(Ri, {
                    key: 0
                })) : C("v-if", !0), x(Si)])
            }
        }
    });
const R3 = K(I3, [
        ["__scopeId", "data-v-d024c659"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/K3/index.vue"]
    ]),
    hI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: R3
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Gi = l => (Rt("data-v-35613996"), l = l(), St(), l),
    S3 = {
        class: "TimeLeft__C"
    },
    B3 = {
        class: "box"
    },
    M3 = {
        class: "tit"
    },
    G3 = {
        class: "citycon"
    },
    A3 = Gi(() => t("div", {
        class: "citybg"
    }, null, -1)),
    P3 = {
        class: "font30"
    },
    D3 = {
        class: "playmethod"
    },
    O3 = {
        key: 0,
        class: "odds"
    },
    q3 = Gi(() => t("div", {
        class: "line"
    }, "|", -1)),
    E3 = {
        class: "odd"
    },
    j3 = {
        key: 1,
        class: "color8"
    },
    H3 = {
        class: "bettingcut"
    },
    W3 = {
        class: "font22"
    },
    V3 = {
        class: "info"
    },
    F3 = Gi(() => t("div", {
        class: "illustratebg"
    }, null, -1)),
    U3 = {
        class: "font24"
    },
    K3 = {
        class: "issue"
    },
    X3 = Gi(() => t("div", {
        class: "issuebg"
    }, null, -1)),
    Q3 = {
        class: "font26"
    },
    Y3 = {
        class: "closure"
    },
    Z3 = {
        class: "closuretime"
    },
    J3 = {
        class: "closurtimes"
    },
    tw = U({
        __name: "TimeLeft",
        props: {
            defaultcityname: {
                type: String,
                default: ""
            },
            defaultplayname: {
                type: String,
                default: ""
            },
            defaultexpiredate: {
                type: String,
                default: ""
            },
            issue: {
                type: String,
                default: ""
            },
            time: {
                type: String,
                default: ""
            },
            odds: {
                type: Number,
                default: 0
            },
            colorId: {
                type: Number,
                default: 0
            },
            areId: {
                type: Number,
                default: 0
            }
        },
        setup(l) {
            const i = l,
                o = ht(),
                r = () => {
                    o.push({
                        name: "AllLotteryGames-Play",
                        query: {
                            id: i.areId,
                            gVSs: 1
                        }
                    })
                };
            return (g, b) => (n(), a("div", S3, [t("div", B3, [t("div", M3, [t("div", G3, [A3, t("div", P3, e(l.defaultcityname), 1)]), t("div", D3, e(g.$t("code" + l.defaultplayname)), 1), l.colorId != 8 ? (n(), a("div", O3, [t("div", null, e(g.$t("odds")), 1), q3, t("div", E3, "1:" + e(l.odds), 1)])) : C("v-if", !0), l.colorId == 8 ? (n(), a("div", j3)) : C("v-if", !0), t("div", H3, [t("div", W3, e(g.$t("xosoTxt91")), 1), t("div", null, e(l.defaultexpiredate), 1)])]), t("div", V3, [t("div", {
                class: "playillustrate",
                onClick: r
            }, [F3, t("div", U3, e(g.$t("lotteryManual")), 1)]), t("div", K3, [X3, t("div", Q3, e(l.issue), 1)]), t("div", Y3, [t("div", Z3, e(g.$t("xosoTxt92")), 1), t("div", J3, [(n(!0), a(B, null, G(l.time.split(""), (d, u) => (n(), a("div", {
                class: M(d == ":" ? "red" : "redsqure"),
                key: u
            }, e(d), 3))), 128))])])])])]))
        }
    });
const ew = K(tw, [
        ["__scopeId", "data-v-35613996"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/NewVietnam/TimeLeft.vue"]
    ]),
    mn = l => (Rt("data-v-9adf5430"), l = l(), St(), l),
    iw = {
        class: "TimeLeft__C"
    },
    nw = {
        class: "box"
    },
    aw = {
        class: "tit"
    },
    ow = {
        class: "citycon"
    },
    sw = mn(() => t("div", {
        class: "citybg"
    }, null, -1)),
    lw = {
        class: "font30"
    },
    cw = {
        key: 0,
        class: "playmethod"
    },
    rw = {
        class: "odd"
    },
    uw = {
        class: "odds"
    },
    dw = {
        class: "result"
    },
    pw = {
        class: "info"
    },
    gw = mn(() => t("div", {
        class: "illustratebg"
    }, null, -1)),
    bw = {
        class: "font24"
    },
    mw = {
        class: "issue"
    },
    vw = mn(() => t("div", {
        class: "issuebg"
    }, null, -1)),
    _w = {
        class: "font26"
    },
    kw = {
        class: "closure isShowPreparing"
    },
    hw = {
        class: "closure"
    },
    fw = {
        class: "closuretime"
    },
    yw = {
        class: "closurtimes"
    },
    $w = U({
        __name: "TimeLeftF",
        props: {
            defaultcityname: {
                type: String,
                default: ""
            },
            defaultplayname: {
                type: String,
                default: ""
            },
            issue: {
                type: String,
                default: ""
            },
            time: {
                type: String,
                default: ""
            },
            odds: {
                type: Number,
                default: 0
            },
            colorId: {
                type: Number,
                default: 0
            },
            areId: {
                type: Number,
                default: 0
            },
            resultList: {
                type: Object,
                default: {}
            },
            isShowPreparing: {
                type: Boolean,
                defauft: !1
            }
        },
        setup(l) {
            const i = l,
                o = ht(),
                r = J(() => {
                    var d, u;
                    let b = (d = i.resultList) != null && d.openingResult ? (u = i.resultList) == null ? void 0 : u.openingResult.find(p => p.resultType == 0).result : "";
                    return Array.isArray(b) && (b = b[0]), b
                }),
                g = () => {
                    o.push({
                        name: "AllLotteryGames-Play",
                        query: {
                            id: i.areId,
                            gVSs: 2
                        }
                    })
                };
            return (b, d) => {
                var u;
                return n(), a("div", iw, [t("div", nw, [t("div", aw, [t("div", ow, [sw, t("div", lw, e(l.defaultcityname), 1)]), l.colorId != 8 ? (n(), a("div", cw, [t("div", null, "(" + e(b.$t("code" + l.defaultplayname)) + ")", 1), t("div", rw, "1:" + e(l.odds), 1)])) : C("v-if", !0), t("div", uw, [t("div", null, e(b.$t("betResult")), 1), t("div", null, e((u = l.resultList) == null ? void 0 : u.issueNumber), 1), t("div", dw, [(n(!0), a(B, null, G(r.value.split(""), (p, s) => (n(), a("span", {
                    key: s
                }, e(p), 1))), 128))])])]), t("div", pw, [t("div", {
                    class: "playillustrate",
                    onClick: g
                }, [gw, t("div", bw, e(b.$t("lotteryManual")), 1)]), t("div", mw, [vw, t("div", _w, e(l.issue), 1)]), t("div", kw, e(b.$t("preparing")), 1), t("div", hw, [t("div", fw, e(b.$t("xosoTxt91")), 1), t("div", yw, [(n(!0), a(B, null, G(l.time.split(""), (p, s) => (n(), a("div", {
                    class: M(p == ":" ? "red" : "redsqure"),
                    key: s
                }, e(p), 3))), 128))])])])])])
            }
        }
    });
const ww = K($w, [
        ["__scopeId", "data-v-9adf5430"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/NewVietnam/TimeLeftF.vue"]
    ]),
    Tw = {
        class: "ColorsContainer"
    },
    Cw = U({
        __name: "ColorsAndPlay",
        props: {
            gameCategoryList: {
                type: Array,
                default: () => []
            },
            colortab: {
                type: Number,
                default: 0
            },
            playtab: {
                type: Number,
                default: 0
            }
        },
        emits: ["colorupdate", "update"],
        setup(l, {
            emit: i
        }) {
            const o = l,
                r = v(o.colortab),
                g = v(o.playtab),
                b = J(() => {
                    var p;
                    return ((p = o.gameCategoryList[r.value]) == null ? void 0 : p.gamePlayList) || []
                });

            function d(p) {
                i("colorupdate", p.item.categoryId, p.index)
            }

            function u({
                item: p,
                index: s
            }) {
                i("update", p.playId, s, p.playNameCode, p.betType)
            }
            return Dt(() => o.playtab, () => {
                g.value = o.playtab
            }), Dt(() => o.colortab, () => {
                r.value = o.colortab
            }), (p, s) => (n(), a("div", Tw, [x(ui, {
                list: l.gameCategoryList,
                active: r.value,
                "onUpdate:active": s[0] || (s[0] = _ => r.value = _),
                tabClassName: "ColorsMethod",
                onOnClickTab: d
            }, {
                default: A(({
                    item: _,
                    index: m
                }) => [t("div", {
                    class: M(["coloritem", {
                        active: m === r.value
                    }])
                }, e(p.$t("code" + _.categoryNameCode)), 3)]),
                _: 1
            }, 8, ["list", "active"]), x(ui, {
                list: b.value,
                active: g.value,
                "onUpdate:active": s[1] || (s[1] = _ => g.value = _),
                tabClassName: "PlayMethod",
                onOnClickTab: u
            }, {
                default: A(({
                    item: _,
                    index: m
                }) => [t("div", {
                    class: M(["playitem", {
                        active: m === g.value
                    }])
                }, e(p.$t("code" + _.playNameCode)), 3)]),
                _: 1
            }, 8, ["list", "active"])]))
        }
    });
const Nw = K(Cw, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/NewVietnam/ColorsAndPlay.vue"]
    ]),
    Ai = l => (Rt("data-v-cca50955"), l = l(), St(), l),
    Lw = {
        class: "NumberSelectContainer"
    },
    zw = {
        class: "NumberSelectContainer-mark"
    },
    xw = {
        class: "NumberTabContent"
    },
    Iw = {
        key: 0,
        class: "selectcontainer"
    },
    Rw = {
        class: "selectbutton"
    },
    Sw = {
        class: "selectcontent"
    },
    Bw = {
        class: "selectheader"
    },
    Mw = {
        class: "selectball"
    },
    Gw = ["onClick"],
    Aw = {
        key: 1,
        class: "selectcontainer"
    },
    Pw = {
        class: "selectbutton"
    },
    Dw = {
        class: "selectcontent"
    },
    Ow = {
        class: "selectheader"
    },
    qw = {
        class: "selectball"
    },
    Ew = ["onClick"],
    jw = {
        key: 2,
        class: "selectcontainer"
    },
    Hw = {
        class: "selectbutton"
    },
    Ww = {
        class: "selectcontent"
    },
    Vw = {
        class: "selectheader"
    },
    Fw = {
        class: "selectball"
    },
    Uw = ["onClick"],
    Kw = {
        key: 3,
        class: "selectcontainer"
    },
    Xw = {
        class: "selectbutton"
    },
    Qw = {
        class: "selectcontent"
    },
    Yw = {
        class: "selectheader"
    },
    Zw = {
        class: "selectball"
    },
    Jw = ["onClick"],
    tT = {
        class: "quickcontainer"
    },
    eT = {
        key: 0,
        class: "intervalcontainer"
    },
    iT = ["onClick"],
    nT = {
        key: 1,
        class: "randomcontainer"
    },
    aT = {
        class: "randomheader"
    },
    oT = Ai(() => t("div", {
        class: "redline"
    }, null, -1)),
    sT = {
        class: "font30"
    },
    lT = {
        class: "randombutton"
    },
    cT = ["onClick"],
    rT = {
        key: 2,
        class: "specialcontainer"
    },
    uT = {
        class: "specialheader"
    },
    dT = Ai(() => t("div", {
        class: "redline"
    }, null, -1)),
    pT = {
        class: "font30"
    },
    gT = {
        class: "specialbutton"
    },
    bT = {
        class: "Ntit"
    },
    mT = Ai(() => t("br", null, null, -1)),
    vT = Ai(() => t("br", null, null, -1)),
    _T = {
        class: "list"
    },
    kT = ["onClick"],
    hT = U({
        __name: "NumberSelect",
        props: {
            methodList: {
                type: String,
                default: ""
            },
            activeTab: {
                type: Number,
                default: 0
            },
            randomList: {
                type: Array,
                default: () => {}
            },
            randomtype: {
                type: Number,
                default: 0
            },
            specialtype: {
                type: Number,
                default: 0
            },
            isthreenumber: {
                type: Number,
                default: 0
            },
            speciaSelectNo: {
                type: String,
                default: ""
            },
            isShowMark: {
                type: Boolean,
                default: !1
            },
            hundred: {
                type: String,
                default: ""
            },
            betconfig: {
                type: String,
                default: ""
            },
            groupTab: {
                type: Number,
                default: 30
            },
            thousandnumList: {
                type: Array,
                default: []
            },
            hundrednumList: {
                type: Array,
                default: []
            },
            tennumList: {
                type: Array,
                default: []
            },
            indicualnumList: {
                type: Array,
                default: []
            },
            quicknumList: {
                type: Array,
                default: []
            },
            intervalnumber: {
                type: Array,
                default: []
            },
            intervalTab: {
                type: Number,
                default: 0
            }
        },
        emits: ["tabupdate", "selectgroup", "selectspecial", "betNum", "betQuickNum", "getselect", "getquick", "selectinterval"],
        setup(l, {
            expose: i,
            emit: o
        }) {
            const r = l,
                {
                    t: g
                } = kt(),
                b = [{
                    name: g("selectNo"),
                    value: 1
                }, {
                    name: g("xosoTxt81"),
                    value: 3
                }, {
                    name: g("xosoTxt80"),
                    value: 2
                }],
                d = J(() => b.filter($ => {
                    var T;
                    return (T = r.methodList) == null ? void 0 : T.includes($.value + "")
                })),
                u = v(0),
                p = v(""),
                s = v(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]),
                _ = ({
                    item: $
                }) => {
                    o("tabupdate", $.value)
                },
                m = ($, T, R) => {
                    o("selectgroup", $, T, R)
                },
                w = ($, T) => {
                    o("betNum", $, T)
                },
                y = ($, T, R) => {
                    o("betQuickNum", $, T, R)
                },
                f = ($, T, R, z) => {
                    o("getselect", $, T, R, z)
                },
                h = ($, T) => {
                    o("getquick", $, T)
                },
                N = ($, T) => {
                    o("selectinterval", $, T)
                },
                L = $ => {
                    $.target.value != "" && o("inputblur", $.target.value)
                },
                k = () => {
                    p.value = ""
                };
            return Dt(() => r.activeTab, async () => {
                await Yt();
                const $ = d.value.findIndex(T => T.value == r.activeTab);
                $ !== -1 && (u.value = $)
            }), i({
                cleardata: k
            }), ($, T) => {
                var z, I, S, D;
                const R = W("van-field");
                return n(), a("div", Lw, [ft(t("div", zw, [t("div", null, e(c(g)("nomorebet")), 1)], 512), [
                    [te, l.isShowMark]
                ]), d.value.length > 0 ? (n(), it(ui, {
                    key: 0,
                    list: d.value,
                    active: u.value,
                    "onUpdate:active": T[0] || (T[0] = P => u.value = P),
                    tabClassName: "NumberTab",
                    onOnClickTab: _
                }, {
                    default: A(({
                        item: P,
                        index: V
                    }) => [t("div", {
                        class: M(["tabitem", {
                            active: P.value === l.activeTab
                        }])
                    }, e(P.name), 3)]),
                    _: 1
                }, 8, ["list", "active"])) : C("v-if", !0), t("div", xw, [ft(t("div", null, [C("选择号码"), (z = l.betconfig) != null && z.includes("4") ? (n(), a("div", Iw, [t("div", Rw, [t("div", {
                    class: "selectall",
                    onClick: T[1] || (T[1] = P => f("Thousand", 0, 9, "all"))
                }, e(c(g)("all")), 1), t("div", {
                    class: "selectbig",
                    onClick: T[2] || (T[2] = P => f("Thousand", 0, 9, "big"))
                }, e(c(g)("big")), 1), t("div", {
                    class: "selectsmall",
                    onClick: T[3] || (T[3] = P => f("Thousand", 0, 9, "small"))
                }, e(c(g)("small")), 1), t("div", {
                    class: "selectodd",
                    onClick: T[4] || (T[4] = P => f("Thousand", 0, 9, "odd"))
                }, e(c(g)("xosoTxt71")), 1), t("div", {
                    class: "selecteven",
                    onClick: T[5] || (T[5] = P => f("Thousand", 0, 9, "even"))
                }, e(c(g)("xosoTxt70")), 1)]), t("div", Sw, [t("div", Bw, e(c(g)("xosoTxt87")), 1), t("div", Mw, [(n(!0), a(B, null, G(s.value, (P, V) => (n(), a("div", {
                    key: V,
                    onClick: F => w("Thousand", P)
                }, [t("div", {
                    class: M(l.thousandnumList.includes(P) ? "ball action " : "ball")
                }, e(P), 3)], 8, Gw))), 128))])])])) : C("v-if", !0), (I = l.betconfig) != null && I.includes("3") ? (n(), a("div", Aw, [t("div", Pw, [t("div", {
                    class: "selectall",
                    onClick: T[6] || (T[6] = P => f("hundred", 0, 9, "all"))
                }, e(c(g)("all")), 1), t("div", {
                    class: "selectbig",
                    onClick: T[7] || (T[7] = P => f("hundred", 0, 9, "big"))
                }, e(c(g)("big")), 1), t("div", {
                    class: "selectsmall",
                    onClick: T[8] || (T[8] = P => f("hundred", 0, 9, "small"))
                }, e(c(g)("small")), 1), t("div", {
                    class: "selectodd",
                    onClick: T[9] || (T[9] = P => f("hundred", 0, 9, "odd"))
                }, e(c(g)("xosoTxt71")), 1), t("div", {
                    class: "selecteven",
                    onClick: T[10] || (T[10] = P => f("hundred", 0, 9, "even"))
                }, e(c(g)("xosoTxt70")), 1)]), t("div", Dw, [t("div", Ow, e(c(g)("xosoTxt88")), 1), t("div", qw, [(n(!0), a(B, null, G(s.value, (P, V) => (n(), a("div", {
                    key: V,
                    onClick: F => w("Hundred", P)
                }, [t("div", {
                    class: M(l.hundrednumList.includes(P) ? "action ball" : "ball")
                }, e(P), 3)], 8, Ew))), 128))])])])) : C("v-if", !0), (S = l.betconfig) != null && S.includes("2") ? (n(), a("div", jw, [t("div", Hw, [t("div", {
                    class: "selectall",
                    onClick: T[11] || (T[11] = P => f("ten", 0, 9, "all"))
                }, e(c(g)("all")), 1), t("div", {
                    class: "selectbig",
                    onClick: T[12] || (T[12] = P => f("ten", 0, 9, "big"))
                }, e(c(g)("big")), 1), t("div", {
                    class: "selectsmall",
                    onClick: T[13] || (T[13] = P => f("ten", 0, 9, "small"))
                }, e(c(g)("small")), 1), t("div", {
                    class: "selectodd",
                    onClick: T[14] || (T[14] = P => f("ten", 0, 9, "odd"))
                }, e(c(g)("xosoTxt71")), 1), t("div", {
                    class: "selecteven",
                    onClick: T[15] || (T[15] = P => f("ten", 0, 9, "even"))
                }, e(c(g)("xosoTxt70")), 1)]), t("div", Ww, [t("div", Vw, e(c(g)("xosoTxt89")), 1), t("div", Fw, [(n(!0), a(B, null, G(s.value, (P, V) => (n(), a("div", {
                    key: V,
                    onClick: F => w("ten", P)
                }, [t("div", {
                    class: M(l.tennumList.includes(P) ? "action ball" : "ball")
                }, e(P), 3)], 8, Uw))), 128))])])])) : C("v-if", !0), (D = l.betconfig) != null && D.includes("1") ? (n(), a("div", Kw, [t("div", Xw, [t("div", {
                    class: "selectall",
                    onClick: T[16] || (T[16] = P => f("Indivual", 0, 9, "all"))
                }, e(c(g)("all")), 1), t("div", {
                    class: "selectbig",
                    onClick: T[17] || (T[17] = P => f("Indivual", 0, 9, "big"))
                }, e(c(g)("big")), 1), t("div", {
                    class: "selectsmall",
                    onClick: T[18] || (T[18] = P => f("Indivual", 0, 9, "small"))
                }, e(c(g)("small")), 1), t("div", {
                    class: "selectodd",
                    onClick: T[19] || (T[19] = P => f("Indivual", 0, 9, "odd"))
                }, e(c(g)("xosoTxt71")), 1), t("div", {
                    class: "selecteven",
                    onClick: T[20] || (T[20] = P => f("Indivual", 0, 9, "even"))
                }, e(c(g)("xosoTxt70")), 1)]), t("div", Qw, [t("div", Yw, e(c(g)("xosoTxt90")), 1), t("div", Zw, [(n(!0), a(B, null, G(s.value, (P, V) => (n(), a("div", {
                    key: V,
                    onClick: F => w("Indivual", P)
                }, [t("div", {
                    class: M(l.indicualnumList.includes(P) ? "ball action" : "ball")
                }, e(P), 3)], 8, Jw))), 128))])])])) : C("v-if", !0)], 512), [
                    [te, l.activeTab === 1]
                ]), C("输入号码"), ft(t("div", null, [x(R, {
                    class: "custom-field",
                    modelValue: p.value,
                    "onUpdate:modelValue": T[21] || (T[21] = P => p.value = P),
                    rows: "4",
                    autosize: "",
                    type: "textarea",
                    placeholder: c(g)("xosoTxt86"),
                    onInput: L
                }, null, 8, ["modelValue", "placeholder"])], 512), [
                    [te, l.activeTab === 2]
                ]), C("快捷选号"), ft(t("div", null, [t("div", tT, [l.isthreenumber === 1 ? (n(), a("div", eT, [(n(!0), a(B, null, G(l.intervalnumber, (P, V) => (n(), a("div", {
                    class: M(["intervalitem", [l.intervalTab === V ? "active" : ""]]),
                    key: V,
                    onClick: F => N(P, V)
                }, e(P), 11, iT))), 128))])) : C("v-if", !0), l.randomtype === 1 ? (n(), a("div", nT, [t("div", aT, [oT, t("div", sT, e(c(g)("xosoTxt83")), 1)]), t("div", lT, [(n(!0), a(B, null, G(l.randomList, (P, V) => (n(), a("div", {
                    class: M([l.groupTab === V ? "active" : ""]),
                    key: V,
                    onClick: F => m(P, V, l.isthreenumber)
                }, e(P) + e(c(g)("xosoTxt84")), 11, cT))), 128))])])) : C("v-if", !0), l.specialtype === 1 ? (n(), a("div", rT, [t("div", uT, [dT, t("div", pT, e(c(g)("xosoTxt97")), 1)]), t("div", gT, [l.speciaSelectNo.includes("1") ? (n(), a("div", {
                    key: 0,
                    class: "specialsame",
                    onClick: T[22] || (T[22] = P => h(l.isthreenumber, "same"))
                }, e(c(g)("xosoTxt85")), 1)) : C("v-if", !0), l.speciaSelectNo.includes("4") ? (n(), a("div", {
                    key: 1,
                    class: "specialbig",
                    onClick: T[23] || (T[23] = P => h(l.isthreenumber, "big"))
                }, e(c(g)("big")), 1)) : C("v-if", !0), l.speciaSelectNo.includes("5") ? (n(), a("div", {
                    key: 2,
                    class: "specialsmall",
                    onClick: T[24] || (T[24] = P => h(l.isthreenumber, "small"))
                }, e(c(g)("small")), 1)) : C("v-if", !0), l.speciaSelectNo.includes("2") ? (n(), a("div", {
                    key: 3,
                    class: "specialodd",
                    onClick: T[25] || (T[25] = P => h(l.isthreenumber, "odd"))
                }, e(c(g)("xosoTxt71")), 1)) : C("v-if", !0), l.speciaSelectNo.includes("3") ? (n(), a("div", {
                    key: 4,
                    class: "specialeven",
                    onClick: T[26] || (T[26] = P => h(l.isthreenumber, "even"))
                }, e(c(g)("xosoTxt70")), 1)) : C("v-if", !0)])])) : C("v-if", !0), l.activeTab === 3 ? (n(), a(B, {
                    key: 3
                }, G(10, (P, V) => t("div", {
                    class: "numbercontainer",
                    key: P
                }, [t("div", bT, [t("div", null, [E(e(l.hundred) + e(V) + "0", 1), mT, E("/"), vT, E(e(l.hundred) + e(V) + "9", 1)])]), t("div", _T, [(n(), a(B, null, G(10, (F, nt) => t("div", {
                    class: "item",
                    key: F
                }, [t("div", {
                    onClick: ut => y(l.hundred, V, nt)
                }, [t("div", {
                    class: M(l.quicknumList.includes(l.hundred + "" + V + nt) ? "number action" : "number")
                }, e(l.hundred) + e(V) + e(nt), 3)], 8, kT)])), 64))])])), 64)) : C("v-if", !0)])], 512), [
                    [te, l.activeTab === 3]
                ])])])
            }
        }
    });
const fT = K(hT, [
        ["__scopeId", "data-v-cca50955"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/NewVietnam/NumberSelect.vue"]
    ]),
    yT = {
        class: "TasteContainer"
    },
    $T = {
        class: "TasteHeader"
    },
    wT = {
        class: "NumberSelect"
    },
    TT = {
        class: "NumberSelectCon"
    },
    CT = ["onClick"],
    NT = U({
        __name: "TasteSelect",
        props: {
            funplaylist: {
                type: Array,
                default: []
            },
            numbercon: {
                type: String,
                default: "1000"
            }
        },
        emits: ["selectvalue"],
        setup(l, {
            emit: i
        }) {
            const o = (r, g) => {
                i("selectvalue", r, g)
            };
            return (r, g) => (n(), a("div", yT, [t("div", $T, e(r.$t("xosoTxt60")), 1), t("div", wT, [t("div", TT, [(n(!0), a(B, null, G(l.funplaylist, (b, d) => (n(), a("div", {
                class: M(["NumberCon", {
                    action: b.oddTypeName === l.numbercon,
                    more: d == 18
                }]),
                key: d,
                onClick: u => o(b, d)
            }, [t("div", {
                class: M(["number", {
                    active: b.oddTypeName === l.numbercon
                }])
            }, e(r.$t("code" + b.oddTypeNameCode)), 3), t("div", {
                class: M(["odds", {
                    active: b.oddTypeName === l.numbercon
                }])
            }, e(b.oddsOrAmount), 3)], 10, CT))), 128))])])]))
        }
    });
const LT = K(NT, [
        ["__scopeId", "data-v-a08d1fa6"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/NewVietnam/TasteSelect.vue"]
    ]),
    zT = {
        class: "Footer__C"
    },
    xT = {
        class: "nav c-row c-row-between"
    },
    IT = {
        class: "c-row left c-row c-row-middle-center"
    },
    RT = {
        class: "item"
    },
    ST = {
        class: "txt"
    },
    BT = {
        class: "num"
    },
    MT = {
        class: "item"
    },
    GT = {
        class: "txt"
    },
    AT = {
        class: "num"
    },
    PT = {
        class: ""
    },
    DT = U({
        __name: "Footer",
        props: {
            betNumber: {
                type: null,
                required: !0,
                default: {
                    type: Number,
                    default: 0
                }
            },
            betSum: {
                type: null,
                required: !0,
                default: {
                    type: Number,
                    default: 0
                }
            }
        },
        emits: ["playBet"],
        setup(l, {
            emit: i
        }) {
            const o = () => {
                i("playBet")
            };
            return (r, g) => (n(), a("div", zT, [t("div", xT, [t("div", IT, [t("div", RT, [t("p", ST, e(r.$t("quantity")), 1), t("span", BT, e(r.betNumber || 0), 1)]), t("div", MT, [t("p", GT, e(r.$t("betAmount")), 1), t("span", AT, e(c(It)(r.betSum || 0)), 1)])]), t("div", {
                class: M(["c-row c-row-middle-center", [r.betSum > 0 ? "bet-btn" : "disabled-btn"]]),
                onClick: g[0] || (g[0] = b => o())
            }, [t("span", PT, e(r.$t("betting")), 1)], 2)])]))
        }
    });
const OT = K(DT, [
        ["__scopeId", "data-v-b37345b8"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/NewVietnam/Footer.vue"]
    ]),
    qT = {
        class: "RecordNav__C"
    },
    ET = ["onClick"],
    jT = U({
        __name: "RecordNav",
        props: {
            record: {
                type: String,
                default: "GameRecord"
            }
        },
        setup(l) {
            const i = l,
                {
                    t: o
                } = kt(),
                r = v([{
                    name: o("gameRecords"),
                    componentName: "GameRecord"
                }, {
                    name: o("myGame"),
                    componentName: "MyGameRecord"
                }]);
            return (g, b) => (n(), a("div", qT, [(n(!0), a(B, null, G(r.value, (d, u) => (n(), a("div", {
                key: u,
                onClick: p => g.$emit("changeC", d.componentName),
                class: M({
                    active: i.record == d.componentName
                })
            }, e(d.name), 11, ET))), 128))]))
        }
    });
const HT = K(jT, [
        ["__scopeId", "data-v-fdfc55f4"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/NewVietnam/RecordNav.vue"]
    ]),
    WT = {
        class: "GameRecord__C"
    },
    VT = {
        class: "GameRecord__C-head"
    },
    FT = {
        class: "GameRecord__C-body"
    },
    UT = {
        class: "c-tc goItem"
    },
    KT = {
        class: "c-row"
    },
    XT = {
        class: "c-row c-row-middle-center"
    },
    QT = {
        class: "c-row c-row-middle-center time"
    },
    YT = {
        key: 0
    },
    ZT = {
        key: 1
    },
    JT = {
        key: 0,
        class: "details"
    },
    t6 = {
        key: 0,
        class: "detailLi"
    },
    e6 = {
        class: "prize-tit"
    },
    i6 = {
        key: 0
    },
    n6 = {
        class: "prize-box c-row c-flex-warp"
    },
    a6 = {
        class: "prize-box-item action"
    },
    o6 = {
        key: 1,
        class: "GameRecord__C-body-empty"
    },
    s6 = {
        key: 0,
        class: "GameRecord__C-foot"
    },
    l6 = {
        class: "GameRecord__C-foot-page"
    },
    c6 = U({
        __name: "GameRecord",
        props: {
            areId: {
                type: Number,
                required: !0
            },
            cityCode: {
                type: String,
                required: !0
            },
            gVSs: {
                type: String,
                required: !1
            }
        },
        setup(l, {
            expose: i
        }) {
            const o = l,
                {
                    t: r
                } = kt(),
                g = v([]),
                b = v(4),
                d = v(10),
                u = v(1),
                p = v(-1),
                s = async (N = !1, L) => {
                    var k, $, T;
                    if ((L == null ? void 0 : L.list.length) > 0) g.value = ta(L == null ? void 0 : L.list) || [], b.value = L == null ? void 0 : L.totalPage, u.value = L == null ? void 0 : L.pageNo;
                    else {
                        if (o.cityCode === "") return;
                        let R;
                        o.gVSs == "1" ? R = await lt(ss({
                            pageSize: d.value,
                            pageNo: u.value,
                            areId: o == null ? void 0 : o.areId,
                            cityCode: o == null ? void 0 : o.cityCode
                        })) : o.gVSs == "2" && (R = await lt(pa({
                            pageSize: d.value,
                            pageNo: u.value,
                            areId: o.areId,
                            typeId: Number(o.cityCode)
                        }))), g.value = ((k = R.data) == null ? void 0 : k.list) || [], b.value = ($ = R.data) == null ? void 0 : $.totalPage, u.value = (T = R.data) == null ? void 0 : T.pageNo
                    }
                },
                _ = N => {
                    for (var L = [], k = 0; k < N.length; k++) {
                        var $ = L.findIndex(function(T) {
                            return T.resultType === N[k].resultType
                        });
                        $ !== -1 ? L[$].result.push(N[k].result) : L.push({
                            resultType: N[k].resultType,
                            result: [N[k].result]
                        })
                    }
                    return L
                };

            function m(N) {
                return N.join("-")
            }

            function w(N) {
                switch (N) {
                    case 0:
                        return r("GrandPrize");
                    case 1:
                        return r("firstprize");
                    case 2:
                        return r("secondprize");
                    case 3:
                        return r("thirdprize");
                    case 4:
                        return r("fourprize");
                    case 5:
                        return r("fiveprize");
                    case 6:
                        return r("sixprize");
                    case 7:
                        return r("sevenprize");
                    case 8:
                        return r("eightprize")
                }
            }
            const y = () => {
                    u.value--, s()
                },
                f = N => {
                    p.value == N ? p.value = -1 : p.value = N
                },
                h = () => {
                    u.value++, s()
                };
            return i({
                getData: s
            }), ke(() => {
                p.value = -1
            }), (N, L) => {
                var R, z;
                const k = W("van-col"),
                    $ = W("van-row"),
                    T = W("van-icon");
                return n(), a("div", WT, [t("div", VT, [x($, null, {
                    default: A(() => [x(k, {
                        span: "8"
                    }, {
                        default: A(() => [E(e(N.$t("betSerial")), 1)]),
                        _: 1
                    }), x(k, {
                        span: "10"
                    }, {
                        default: A(() => [E(e(N.$t("result")), 1)]),
                        _: 1
                    }), x(k, {
                        span: "6"
                    }, {
                        default: A(() => [E(e(N.$t("time")), 1)]),
                        _: 1
                    })]),
                    _: 1
                })]), t("div", FT, [(R = g.value) != null && R.length ? (n(!0), a(B, {
                    key: 0
                }, G(g.value, (I, S) => (n(), it($, {
                    key: S,
                    onClick: D => f(S)
                }, {
                    default: A(() => [x(k, {
                        span: "8"
                    }, {
                        default: A(() => [t("div", UT, e(I.issueNumber), 1)]),
                        _: 2
                    }, 1024), x(k, {
                        span: "10",
                        class: "c-row c-row-middle-center"
                    }, {
                        default: A(() => [t("div", KT, [t("div", XT, [I.openingResult ? (n(!0), a(B, {
                            key: 0
                        }, G(I.openingResult[0].result, (D, P) => (n(), a("div", {
                            class: "li circle-black c-row c-row-middle-center c-tc",
                            key: P
                        }, [t("div", null, e(D), 1)]))), 128)) : C("v-if", !0)])])]),
                        _: 2
                    }, 1024), x(k, {
                        span: "6"
                    }, {
                        default: A(() => [t("div", QT, [N.gVSs == "1" ? (n(), a("div", YT, e(I.openingTime.substr(0, 10)), 1)) : (n(), a("div", ZT, e(I.openingTime), 1))])]),
                        _: 2
                    }, 1024), S == p.value ? (n(), a("div", JT, [I.openingResult ? (n(), a("div", t6, [(n(!0), a(B, null, G(_(I.openingResult), (D, P) => (n(), a("div", {
                        class: M([`selectItem${D.resultType}`, "prize"]),
                        key: P
                    }, [t("div", e6, e(w(D.resultType)), 1), [0, 1, 2].includes(D.resultType) ? (n(), a("div", i6, "|")) : C("v-if", !0), t("div", n6, [t("span", a6, e(m(D.result)), 1)])], 2))), 128))])) : C("v-if", !0)])) : C("v-if", !0)]),
                    _: 2
                }, 1032, ["onClick"]))), 128)) : (n(), a("div", o6, [x(de)]))]), (z = g.value) != null && z.length ? (n(), a("div", s6, [t("div", {
                    class: M(["GameRecord__C-foot-previous", {
                        disabled: u.value <= 1
                    }]),
                    onClick: y
                }, [x(T, {
                    name: "arrow-left",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2), t("div", l6, e(u.value) + "/" + e(b.value), 1), t("div", {
                    class: M(["GameRecord__C-foot-next", {
                        disabled: u.value >= b.value
                    }]),
                    onClick: h
                }, [x(T, {
                    name: "arrow",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2)])) : C("v-if", !0)])
            }
        }
    });
const r6 = K(c6, [
        ["__scopeId", "data-v-68c3df62"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/NewVietnam/GameRecord.vue"]
    ]),
    u6 = l => (Rt("data-v-56cdb7a2"), l = l(), St(), l),
    d6 = {
        class: "MyGameRecordList__C"
    },
    p6 = ["onClick"],
    g6 = {
        class: "box"
    },
    b6 = {
        class: "time"
    },
    m6 = {
        key: 0,
        class: "state state0"
    },
    v6 = {
        key: 1,
        class: "state state3"
    },
    _6 = {
        key: 2,
        class: "state state4"
    },
    k6 = {
        key: 3,
        class: "state state2"
    },
    h6 = {
        key: 4,
        class: "state state5"
    },
    f6 = {
        key: 5,
        class: "state state1"
    },
    y6 = {
        key: 0,
        class: "info"
    },
    $6 = {
        class: "order"
    },
    w6 = {
        key: 0,
        class: "li"
    },
    T6 = {
        class: "lab"
    },
    C6 = ["onClick"],
    N6 = ["src"],
    L6 = {
        key: 1,
        class: "li"
    },
    z6 = {
        class: "lab"
    },
    x6 = {
        class: "sub"
    },
    I6 = {
        class: "li"
    },
    R6 = {
        class: "lab"
    },
    S6 = {
        key: 0,
        class: "sub"
    },
    B6 = {
        key: 1,
        class: "sub"
    },
    M6 = {
        key: 2,
        class: "li"
    },
    G6 = {
        class: "lab"
    },
    A6 = {
        class: "sub"
    },
    P6 = {
        class: "li"
    },
    D6 = {
        class: "lab"
    },
    O6 = {
        class: "sub"
    },
    q6 = {
        class: "li"
    },
    E6 = {
        class: "lab"
    },
    j6 = {
        class: "sub"
    },
    H6 = {
        class: "li"
    },
    W6 = {
        class: "lab"
    },
    V6 = {
        class: "sub"
    },
    F6 = {
        class: "li"
    },
    U6 = {
        class: "lab"
    },
    K6 = {
        class: "sub"
    },
    X6 = {
        class: "li"
    },
    Q6 = {
        class: "lab"
    },
    Y6 = {
        class: "sub"
    },
    Z6 = u6(() => t("div", {
        class: "line"
    }, [t("p")], -1)),
    J6 = {
        class: "bet"
    },
    tC = {
        class: "li betNum"
    },
    eC = {
        class: "lab"
    },
    iC = {
        key: 0,
        class: "txt"
    },
    nC = {
        key: 1,
        class: "txt"
    },
    aC = {
        key: 2,
        class: "txt"
    },
    oC = {
        key: 3,
        class: "betList select"
    },
    sC = {
        key: 4,
        class: "betList select"
    },
    lC = {
        class: "li"
    },
    cC = {
        class: "lab"
    },
    rC = {
        key: 0,
        class: "state state0"
    },
    uC = {
        key: 1,
        class: "state state3"
    },
    dC = {
        key: 2,
        class: "state state4"
    },
    pC = {
        key: 3,
        class: "state state2"
    },
    gC = {
        key: 4,
        class: "state state5"
    },
    bC = {
        key: 5,
        class: "state state1"
    },
    mC = {
        class: "li"
    },
    vC = {
        class: "lab"
    },
    _C = {
        key: 0,
        class: "sub success"
    },
    kC = {
        key: 1,
        class: "sub fail"
    },
    hC = {
        key: 2,
        class: "sub"
    },
    fC = {
        key: 0,
        class: "li"
    },
    yC = {
        class: "lab"
    },
    $C = {
        class: "sub"
    },
    wC = {
        key: 1,
        class: "li"
    },
    TC = {
        class: "lab"
    },
    CC = {
        class: "sub"
    },
    NC = {
        key: 0
    },
    LC = ["onClick"],
    zC = {
        key: 1,
        class: "result"
    },
    xC = {
        key: 0,
        class: "txt"
    },
    IC = {
        key: 1,
        class: "txt"
    },
    RC = {
        key: 2,
        class: "txt"
    },
    SC = {
        key: 3,
        class: "txt"
    },
    BC = {
        key: 4,
        class: "txt"
    },
    MC = {
        key: 5,
        class: "txt"
    },
    GC = {
        key: 6,
        class: "txt"
    },
    AC = {
        key: 7,
        class: "txt"
    },
    PC = {
        key: 8,
        class: "txt"
    },
    DC = {
        class: "num"
    },
    OC = U({
        __name: "MyRecordList",
        props: {
            mayrecord: {
                type: Array,
                required: !1
            },
            gVSs: {
                type: String,
                required: !1
            }
        },
        emits: ["click-cance"],
        setup(l, {
            emit: i
        }) {
            const {
                t: o
            } = kt(), r = v(-1), g = N => {
                r.value === N ? r.value = -1 : r.value = N
            }, b = v(!1), d = v(""), u = async () => {
                await lt(cs({
                    orderId: d.value
                })) && (b.value = !1, an(o("xosoTxt96")), i("click-cance"))
            }, p = N => {
                d.value = N, b.value = !0
            }, s = ls(u, 1e3), _ = N => {
                for (var L = [], k = 0; k < N.length; k++) {
                    var $ = L.findIndex(function(T) {
                        return T.resultType === N[k].resultType
                    });
                    $ !== -1 ? L[$].result.push("-" + N[k].result) : L.push({
                        resultType: N[k].resultType,
                        result: [N[k].result]
                    })
                }
                return L
            }, m = N => {
                const L = w(N);
                return y(L)
            }, w = N => {
                let L = [];
                if (N.includes(",")) {
                    let k = N.split(","),
                        $ = {};
                    for (let T = 0; k.length > T; T++) $ = k[T].split("|"), L.push($);
                    return L
                }
                return N
            }, y = N => {
                let L = N[0],
                    k = N[1],
                    $ = [];
                for (let R = 0; L.length > R; R++)
                    for (let z = 0; k.length > z; z++) $.push(L[R] + k[z]);
                let T = N.slice(2);
                return T.length > 0 ? y([$, ...T]) : $
            }, f = N => {
                if (N != null) {
                    let L = N.split(",");
                    if (L.length > 0) return L
                }
                return []
            }, h = N => {
                const L = {
                    大: o("big"),
                    小: o("small"),
                    单: o("odd"),
                    双: o("xosoTxt70")
                };
                return L[N] ? L[N].replace(/\|/g, ",") : N.replace(/\|/g, ",")
            };
            return zt(() => {}), (N, L) => (n(), a("div", d6, [(n(!0), a(B, null, G(N.mayrecord, (k, $) => (n(), a("div", {
                class: M(r.value === $ ? "item active" : "item"),
                key: k,
                onClick: T => g($)
            }, [t("div", g6, [t("div", null, [t("h4", null, e(c(o)("code" + k.bettingParentTypeNameCode)), 1), t("span", b6, e(k.createTime), 1)]), k.status === 1 ? (n(), a("div", m6, [t("p", null, e(c(o)("bettingResultState1")), 1)])) : C("v-if", !0), k.status === 3 ? (n(), a("div", v6, [t("p", null, e(c(o)("hasWon")), 1), t("span", null, "+" + e(k.winningAmount), 1)])) : C("v-if", !0), k.status === 2 ? (n(), a("div", _6, [t("p", null, e(c(o)("bettingResultState3")), 1), t("span", null, "-" + e(k.realBettingAmount), 1)])) : C("v-if", !0), k.status === 4 ? (n(), a("div", k6, [t("p", null, e(c(o)("xosoTxt74")), 1)])) : C("v-if", !0), k.status === 5 ? (n(), a("div", h6, [t("p", null, e(c(o)("xosoTxt75")), 1)])) : C("v-if", !0), k.status === 6 ? (n(), a("div", f6, [t("p", null, e(c(o)("xosoTxt76")), 1)])) : C("v-if", !0)]), r.value === $ ? (n(), a("div", y6, [t("div", $6, [k.orderNo ? (n(), a("div", w6, [t("div", T6, e(c(o)("orderNo")), 1), t("div", {
                class: "sub",
                onClick: be(T => c(We)(k.orderNo), ["stop"])
            }, [E(e(k.orderNo) + " ", 1), t("img", {
                src: c(qt)("public", "copy")
            }, null, 8, N6)], 8, C6)])) : C("v-if", !0), k.issueNo ? (n(), a("div", L6, [t("div", z6, e(c(o)("betIssue")), 1), t("div", x6, e(k.issueNo), 1)])) : C("v-if", !0), t("div", I6, [t("div", R6, e(c(o)("area")), 1), N.gVSs == "1" ? (n(), a("div", S6, e(c(o)("code" + k.areNameCode)), 1)) : N.gVSs == "2" ? (n(), a("div", B6, e(c(o)("code" + k.typeCode)), 1)) : C("v-if", !0)]), N.gVSs == "1" ? (n(), a("div", M6, [t("div", G6, e(c(o)("xosoTxt77")), 1), t("div", A6, e(c(o)("code" + k.nameCode)), 1)])) : C("v-if", !0), t("div", P6, [t("div", D6, e(c(o)("gamePlay")), 1), t("div", O6, e(c(o)("code" + k.bettingParentTypeNameCode)), 1)]), t("div", q6, [t("div", E6, e(c(o)("xosoTxt78")), 1), t("div", j6, e(c(o)("code" + k.bettingTypeNameCode)), 1)]), t("div", H6, [t("div", W6, e(c(o)("amountMay")), 1), t("div", V6, e(k.amount), 1)]), t("div", F6, [t("div", U6, e(c(o)("multiple")), 1), t("div", K6, e(k.bettingMultiple), 1)]), t("div", X6, [t("div", Q6, e(c(o)("xosoTxt79")), 1), t("div", Y6, e(k.totalBetting) + " " + e(c(o)("note")), 1)]), C(` <div class="li" v-if="item.realBettingAmount">
						<div class="lab">{{ $t('afterTaxAmount') }}</div>
						<div class="sub">{{ item.realBettingAmount }}</div>
					</div>
					<div class="li" v-if="item.serviceCharge">
						<div class="lab">{{ $t('tax') }}</div>
						<div class="sub">{{ item.serviceCharge }}</div>
					</div> `)]), Z6, t("div", J6, [t("div", tC, [t("div", eC, [E(e(c(o)("bettingnumber")), 1), k.bettingFormat === 1 ? (n(), a("span", iC, "(" + e(c(o)("selectNo")) + ")", 1)) : C("v-if", !0), k.bettingFormat === 2 ? (n(), a("span", nC, "(" + e(c(o)("xosoTxt80")) + ")", 1)) : C("v-if", !0), k.bettingFormat === 3 ? (n(), a("span", aC, "(" + e(c(o)("xosoTxt81")) + ")", 1)) : C("v-if", !0), C(" 选择号码 "), k.bettingFormat == 1 ? (n(), a("div", oC, [(n(!0), a(B, null, G(m(k.bettingContent), (T, R) => (n(), a("span", {
                class: M({
                    active: f(k.winningNum).includes(T)
                }),
                key: R
            }, e(T), 3))), 128))])) : (n(), a("div", sC, [(n(!0), a(B, null, G(k.bettingContent.split(","), (T, R) => (n(), a("span", {
                class: M({
                    active: f(k.winningNum).includes(T)
                }),
                key: R
            }, e(h(T)), 3))), 128))]))])]), t("div", lC, [t("div", cC, e(c(o)("statusMay")), 1), k.status === 1 ? (n(), a("div", rC, [t("p", null, e(c(o)("bettingResultState1")), 1)])) : C("v-if", !0), k.status === 3 ? (n(), a("div", uC, [t("p", null, e(c(o)("hasWon")), 1)])) : C("v-if", !0), k.status === 2 ? (n(), a("div", dC, [t("p", null, e(c(o)("bettingResultState3")), 1)])) : C("v-if", !0), k.status === 4 ? (n(), a("div", pC, [t("p", null, e(c(o)("xosoTxt74")), 1)])) : C("v-if", !0), k.status === 5 ? (n(), a("div", gC, [t("p", null, e(c(o)("xosoTxt75")), 1)])) : C("v-if", !0), k.status === 6 ? (n(), a("div", bC, [t("p", null, e(c(o)("xosoTxt76")), 1)])) : C("v-if", !0)]), t("div", mC, [t("div", vC, e(c(o)("winOrLose")), 1), k.status === 3 ? (n(), a("div", _C, "+" + e(k.winningAmount), 1)) : k.status === 2 ? (n(), a("div", kC, "-" + e(k.realBettingAmount), 1)) : (n(), a("div", hC, "---"))]), k.createTime ? (n(), a("div", fC, [t("div", yC, e(c(o)("createTime")), 1), t("div", $C, e(k.createTime), 1)])) : C("v-if", !0), k.openingTime ? (n(), a("div", wC, [t("div", TC, e(c(o)("winTrxTime")), 1), t("div", CC, e(k.openingTime), 1)])) : C("v-if", !0)]), k.issueNoStatus === 1 && k.status === 1 && N.gVSs == "1" ? (n(), a("div", NC, [t("div", {
                class: "btn",
                onClick: be(T => p(k.id), ["stop"])
            }, e(c(o)("xosoTxt82")), 9, LC)])) : C("v-if", !0), C(" 开奖结果 "), k.openingResult ? (n(), a("div", zC, [(n(!0), a(B, null, G(_(k.openingResult), (T, R) => (n(), a("div", {
                class: M(R < 3 ? "result-item jusb" : "result-item"),
                key: R
            }, [T.resultType == 0 ? (n(), a("div", xC, e(c(o)("GrandPrize")), 1)) : C("v-if", !0), T.resultType == 1 ? (n(), a("div", IC, e(c(o)("firstprize")), 1)) : C("v-if", !0), T.resultType == 2 ? (n(), a("div", RC, e(c(o)("secondprize")), 1)) : C("v-if", !0), T.resultType == 3 ? (n(), a("div", SC, e(c(o)("thirdprize")), 1)) : C("v-if", !0), T.resultType == 4 ? (n(), a("div", BC, e(c(o)("fourprize")), 1)) : C("v-if", !0), T.resultType == 5 ? (n(), a("div", MC, e(c(o)("fiveprize")), 1)) : C("v-if", !0), T.resultType == 6 ? (n(), a("div", GC, e(c(o)("sixprize")), 1)) : C("v-if", !0), T.resultType == 7 ? (n(), a("div", AC, e(c(o)("sevenprize")), 1)) : C("v-if", !0), T.resultType == 8 ? (n(), a("div", PC, e(c(o)("eightprize")), 1)) : C("v-if", !0), t("div", DC, [(n(!0), a(B, null, G(T.result, (z, I) => (n(), a("span", {
                key: I
            }, e(z), 1))), 128))])], 2))), 128))])) : C("v-if", !0)])) : C("v-if", !0)], 10, p6))), 128)), x(xe, {
                show: b.value,
                "onUpdate:show": L[0] || (L[0] = k => b.value = k),
                title: c(o)("xosoTxt99"),
                onConfirm: c(s)
            }, null, 8, ["show", "title", "onConfirm"])]))
        }
    });
const qC = K(OC, [
        ["__scopeId", "data-v-56cdb7a2"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/NewVietnam/MyRecordList.vue"]
    ]),
    EC = {
        class: "MyGameRecord__C"
    },
    jC = {
        class: "MyGameRecord__C-body"
    },
    HC = {
        key: 0,
        class: "MyGameRecord__C-head"
    },
    WC = {
        key: 2,
        class: "MyGameRecord__C-body-empty"
    },
    VC = {
        key: 0,
        class: "MyGameRecord__C-foot"
    },
    FC = {
        class: "MyGameRecord__C-foot-page"
    },
    UC = U({
        __name: "MyGameRecord",
        props: {
            parmas: {
                type: Object,
                required: !1
            },
            ApiFun: {
                type: Function,
                required: !0
            },
            cityCode: {
                type: Array,
                required: !1
            },
            hasHead: {
                type: Boolean,
                required: !1,
                default: !0
            },
            gVSs: {
                type: String,
                required: !1
            },
            areId: {
                type: String,
                required: !1
            }
        },
        setup(l, {
            expose: i
        }) {
            const o = l,
                r = ht(),
                g = v(0),
                b = v(10),
                d = v(1),
                u = v([]),
                p = async () => {
                    var L, k, $;
                    const h = s(o.parmas);
                    (o == null ? void 0 : o.gVSs) == "2" && (o != null && o.areId && (h.areId = o == null ? void 0 : o.areId), o != null && o.cityCode && (h.typeId = Number(o == null ? void 0 : o.cityCode)));
                    const N = await lt(o.ApiFun({
                        pageSize: b.value,
                        pageNo: d.value,
                        ...h
                    }));
                    N && (u.value = ((L = N.data) == null ? void 0 : L.list) || [], g.value = ((k = N.data) == null ? void 0 : k.totalPage) || 0, d.value = ($ = N.data) == null ? void 0 : $.pageNo)
                };

            function s(h) {
                const N = {};
                for (const L in h) h[L] !== "" && (N[L] = h[L]);
                return N
            }
            const _ = () => {
                    p()
                },
                m = J(() => o.gVSs == "1" ? "AllLotteryGames-XoSoRecord" : o.gVSs == "2" ? "AllLotteryGames-XoSoRecordF" : ""),
                w = h => {
                    r.push({
                        name: h,
                        query: {
                            areId: o.areId,
                            typeId: o.cityCode
                        }
                    })
                },
                y = () => {
                    d.value--, p()
                },
                f = () => {
                    d.value++, p()
                };
            return i({
                getData: p
            }), ke(() => {
                p()
            }), (h, N) => {
                var k, $;
                const L = W("van-icon");
                return n(), a("div", EC, [t("div", jC, [h.hasHead ? (n(), a("div", HC, [t("div", {
                    class: "MyGameRecord__C-head-moreB",
                    onClick: N[0] || (N[0] = T => w(m.value || ""))
                }, e(h.$t("more")), 1)])) : C("v-if", !0), (k = u.value) != null && k.length ? (n(), it(qC, {
                    key: 1,
                    mayrecord: u.value,
                    onClickCance: _,
                    gVSs: h.gVSs
                }, null, 8, ["mayrecord", "gVSs"])) : (n(), a("div", WC, [x(de)]))]), ($ = u.value) != null && $.length ? (n(), a("div", VC, [t("div", {
                    class: M(["MyGameRecord__C-foot-previous", {
                        disabled: d.value <= 1
                    }]),
                    onClick: y
                }, [x(L, {
                    name: "arrow-left",
                    class: "MyGameRecord__C-icon",
                    size: "20"
                })], 2), t("div", FC, e(d.value) + "/" + e(g.value), 1), t("div", {
                    class: M(["MyGameRecord__C-foot-next", {
                        disabled: d.value >= g.value
                    }]),
                    onClick: f
                }, [x(L, {
                    name: "arrow",
                    class: "MyGameRecord__C-icon",
                    size: "20"
                })], 2)])) : C("v-if", !0)])
            }
        }
    });
const vn = K(UC, [
        ["__scopeId", "data-v-44e97c4d"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/NewVietnam/MyGameRecord.vue"]
    ]),
    KC = {
        key: 0,
        class: "WinningTip__C-body-l1 isL"
    },
    XC = {
        key: 1,
        class: "WinningTip__C-body-l1"
    },
    QC = {
        key: 2,
        class: "notwinning"
    },
    YC = {
        key: 3,
        class: "WinningTip__C-body-l2"
    },
    ZC = {
        key: 4,
        class: "WinningTip__C-body-l5"
    },
    JC = {
        class: "WinningTip__C-body-l5-content"
    },
    t4 = {
        class: "balltext"
    },
    e4 = {
        class: "WinningTip__C-body-l3"
    },
    i4 = {
        key: 0,
        class: "isLose"
    },
    n4 = {
        class: "head"
    },
    a4 = {
        class: "bonus"
    },
    o4 = {
        class: "gameDetail"
    },
    s4 = {
        class: "gameDetail"
    },
    l4 = {
        class: "WinningTip__C-body-l4"
    },
    c4 = ["onClick"],
    r4 = U({
        __name: "WinningTips",
        setup(l, {
            expose: i
        }) {
            const o = J(() => b.value[0] ? b.value[0].winningAmount == 0 : !1),
                r = J(() => b.value[0] || {}),
                g = v(!1),
                b = v([]);
            let d = v();
            const u = () => {
                clearTimeout(d.value), b.value.shift(), g.value && b.value.length && (d.value = setTimeout(() => {
                    u()
                }, 1e3 * 3))
            };
            Dt(() => b.value.length, m => {
                m ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
            });
            const p = () => {
                    g.value = !g.value, g.value ? d.value = setTimeout(() => {
                        u()
                    }, 1e3 * 3) : clearTimeout(d.value)
                },
                s = m => {
                    b.value.push(m), g.value && (d.value = setTimeout(() => {
                        u()
                    }, 1e3 * 3))
                },
                _ = () => {
                    b.value = []
                };
            return i({
                showMark: s
            }), (m, w) => ft((n(), a("div", {
                class: "WinningTip__C",
                onClick: u
            }, [t("div", {
                class: M(["WinningTip__C-body", {
                    isL: o.value
                }])
            }, [o.value ? (n(), a("div", KC, e(m.$t("k3WarningTip1")), 1)) : C("v-if", !0), o.value ? C("v-if", !0) : (n(), a("div", XC, e(m.$t("k3WarningTip2")), 1)), o.value ? (n(), a("div", QC)) : C("v-if", !0), o.value ? C("v-if", !0) : (n(), a("div", YC, e(m.$t("code" + r.value.bettingParentTypeNameCode)) + "/" + e(m.$t("code" + r.value.bettingTypeNameCode)), 1)), o.value ? C("v-if", !0) : (n(), a("div", ZC, [t("div", JC, [(n(!0), a(B, null, G(r.value.openingResult, (y, f) => (n(), a("div", {
                class: "ball",
                key: f
            }, [t("div", t4, e(y), 1)]))), 128))])])), t("div", e4, [o.value ? (n(), a("div", i4, e(m.$t("winTips4")), 1)) : C("v-if", !0), o.value ? C("v-if", !0) : (n(), a(B, {
                key: 1
            }, [t("div", n4, e(m.$t("winTips5")), 1), t("div", a4, e(c(It)(r.value.winningAmount)), 1)], 64)), t("div", o4, e(m.$t(`code${r.value.typeCode}`)), 1), t("div", s4, e(m.$t("winTips6")) + e(r.value.issueNo), 1)]), t("div", l4, [t("div", {
                class: M(["acitveBtn", {
                    active: g.value
                }]),
                onClick: be(p, ["stop"])
            }, null, 10, c4), E(" " + e(m.$t("autoShutOff3s")), 1)]), t("div", {
                class: "closeBtn",
                onClick: _
            })], 2)], 512)), [
                [te, b.value.length]
            ])
        }
    });
const u4 = K(r4, [
        ["__scopeId", "data-v-eb0f5940"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/NewVietnam/WinningTips.vue"]
    ]),
    _n = l => (Rt("data-v-b1e14027"), l = l(), St(), l),
    d4 = {
        class: "NewVietnam__C"
    },
    p4 = _n(() => t("div", {
        class: "bottombg"
    }, null, -1)),
    g4 = {
        class: "box p-l-10 p-r-10 p-t-10 p-b-10"
    },
    b4 = ["src"],
    m4 = {
        class: "title c-tc"
    },
    v4 = {
        key: 0,
        class: "titlebets c-tc border60"
    },
    _4 = {
        class: "box"
    },
    k4 = {
        class: "c-row"
    },
    h4 = {
        key: 2,
        class: M("c-row c-flex-warp compound")
    },
    f4 = {
        key: 0,
        class: "item"
    },
    y4 = {
        class: "title"
    },
    $4 = {
        class: "numcontainer"
    },
    w4 = {
        key: 1,
        class: "item"
    },
    T4 = {
        class: "title"
    },
    C4 = {
        class: "numcontainer"
    },
    N4 = {
        key: 2,
        class: "item"
    },
    L4 = {
        class: "title"
    },
    z4 = {
        class: "numcontainer"
    },
    x4 = {
        key: 3,
        class: "item"
    },
    I4 = {
        class: "title"
    },
    R4 = {
        class: "numcontainer"
    },
    S4 = {
        key: 4,
        class: "item"
    },
    B4 = {
        class: "numcontainer"
    },
    M4 = {
        class: "popup-info"
    },
    G4 = {
        class: "popup-info-item c-row c-row-between"
    },
    A4 = {
        class: "tit"
    },
    P4 = {
        class: "c-row c-row-between stepper-box"
    },
    D4 = {
        class: "popup-info-item c-row c-flew-end"
    },
    O4 = {
        class: "c-row multiple-box"
    },
    q4 = ["onClick"],
    E4 = {
        class: "c-row c-row-between c-row-middle quantity"
    },
    j4 = {
        class: "c-row c-row-middle-center"
    },
    H4 = _n(() => t("span", {
        class: "line"
    }, "|", -1)),
    W4 = {
        class: "num"
    },
    V4 = {
        class: "c-row c-row-middle-center"
    },
    F4 = _n(() => t("span", {
        class: "line"
    }, "|", -1)),
    U4 = {
        class: "num"
    },
    K4 = {
        class: "wallet c-row c-row-between c-row-middle"
    },
    X4 = {
        class: "txt c-row"
    },
    Q4 = {
        class: "num c-row c-row-middle"
    },
    Y4 = {
        class: "balance c-row c-row-middle"
    },
    Z4 = {
        class: "txt"
    },
    J4 = {
        class: "num yellow"
    },
    t8 = {
        key: 0,
        class: "wallet c-row c-row-between c-row-middle"
    },
    e8 = {
        class: "txt c-row bg7172"
    },
    i8 = ["src"],
    n8 = {
        class: "popup-info-item c-row c-row-middle"
    },
    a8 = {
        class: "agree p-r-15"
    },
    o8 = {
        class: "popup-btn c-row c-row-between"
    },
    s8 = {
        class: "left"
    },
    l8 = {
        class: "right"
    },
    c8 = {
        class: ""
    },
    r8 = {
        class: "areList"
    },
    u8 = ["src"],
    d8 = {
        class: "itemsC"
    },
    p8 = ["onClick"],
    g8 = {
        class: "PreSale"
    },
    b8 = {
        class: "head"
    },
    m8 = {
        class: "body"
    },
    v8 = {
        class: "foot"
    },
    _8 = ["src"],
    k8 = ["src"],
    h8 = {
        class: "font36"
    },
    f8 = {
        class: "tipMsg"
    },
    y8 = U({
        __name: "index",
        setup(l) {
            var Ln, zn;
            const i = ht(),
                o = nn(),
                {
                    t: r
                } = kt(),
                g = v(!1),
                b = J(() => {
                    var O, q;
                    return m.value ? (O = m.value) == null ? void 0 : O.type : (q = o.query) == null ? void 0 : q.type
                }),
                d = v(i.currentRoute.value.query.nameCode),
                u = v(Number((Ln = o.query) == null ? void 0 : Ln.areId) || 1),
                p = J(() => d.value ? r("code" + d.value) : ""),
                s = v((zn = o.query) == null ? void 0 : zn.code),
                _ = v(),
                m = v(),
                w = Zt({
                    bettingParentType: "",
                    areId: "",
                    startDate: "",
                    endDate: ""
                }),
                y = new Date,
                f = `${oe(y).format("YYYY-MM-DD")} 00:00:00`,
                h = `${oe(y).format("YYYY-MM-DD")} 23:59:59`;
            w.startDate = f, w.endDate = h;
            const N = v(!1),
                L = v([]),
                k = v([]),
                $ = v({}),
                T = v(0),
                R = v(1),
                z = v(0),
                I = v(1),
                S = v(1),
                D = v(""),
                P = v(""),
                V = v("00:00:00"),
                F = v(1.995),
                nt = v(1),
                ut = v([]),
                ct = v(0),
                ot = v(""),
                Z = v(1),
                _t = v(""),
                Bt = v([]),
                At = v(0),
                dt = v(0),
                yt = v(0),
                $t = v(0),
                Mt = v(""),
                Gt = v(),
                gt = v(1e3),
                et = v([]),
                at = v([]),
                Q = v([]),
                Y = v([]),
                H = v([]),
                wt = v([]),
                jt = v("1000"),
                ie = v(1),
                Ne = v(!1),
                re = J(() => !(Pe.value > ei.value || Xt.value <= 0)),
                Le = v(["000/099", "100/199", "200/299", "300/399", "400/499", "500/599", "600/699", "700/799", "800/899", "900/999"]),
                bt = v("000/099"),
                Ae = v(0),
                Ie = v(!1),
                he = v(1),
                Ct = v(1),
                Je = v(0),
                fe = v(0),
                ti = v(0),
                ye = v("GameRecord"),
                Di = {
                    GameRecord: r6,
                    MyGameRecord: vn
                },
                Xt = v(1),
                yi = v(),
                Ft = v(!1),
                mi = v(!0),
                Pe = v(0),
                ei = v(0),
                Re = v(0),
                ii = v(!1),
                je = v(),
                Ue = v(!1),
                j = v(""),
                tt = v(""),
                mt = J(() => {
                    if (b.value == "1") return ma;
                    if (b.value == "2") return va
                }),
                Tt = O => {
                    const q = String(Math.floor(Pt.value % 3600 / 60)).padStart(2, "0"),
                        X = String(Pt.value % 60).padStart(2, "0");
                    return `${q}:${X}`
                },
                Pt = v(),
                xt = v(null),
                Qt = v("00:00"),
                Et = v(!1),
                Ut = () => {
                    xt.value = setInterval(() => {
                        Pt.value <= 0 ? (Qt.value = "00:00", setTimeout(() => {
                            Et.value = !0
                        }, 500), clearInterval(xt.value), He(), setTimeout(() => {
                            ai(!0)
                        }, 5e3)) : (Et.value = !1, Qt.value = Tt(Pt.value), Pt.value--)
                    }, 1e3)
                },
                se = v(null),
                De = (O, q) => {
                    clearInterval(Re.value), Ne.value = !1, Re.value = (q - O) / 1e3, se.value = setInterval(() => {
                        if (Re.value <= 0) clearInterval(se.value), V.value = "00:00:00", Ne.value = !0;
                        else {
                            const X = String(Math.floor(Re.value / 3600)).padStart(2, "0"),
                                rt = String(Math.floor(Re.value % 3600 / 60)).padStart(2, "0"),
                                vt = String(Re.value % 60).padStart(2, "0");
                            V.value = X + ":" + rt + ":" + vt, Re.value--
                        }
                    }, 1e3)
                };

            function me() {
                m.value || (_e({
                    message: r("xosoTip5"),
                    wordBreak: "break-word"
                }), setTimeout(function() {
                    Nn("AllLotteryGames-XoSo")
                }, 2e3))
            }
            const He = async () => {
                let O;
                if (b.value == "1") {
                    const vt = oe(o.query.day).format("YYYY-MM-DD HH:mm:ss");
                    O = await lt(ga({
                        dateTime: vt
                    }))
                } else b.value == "2" && (O = await lt(ba({
                    are: u.value,
                    typeId: Number(s.value)
                })));
                O.data.length == 0 && me();
                let q = O.data.find(vt => vt.day == o.query.day);
                P.value = q.day;
                let X = q.areInfos.find(vt => (vt == null ? void 0 : vt.areId) == u.value);
                const rt = X == null ? void 0 : X.serverTime;
                if (m.value = X.areIssueNos.find(vt => vt.code == s.value), m.value || me(), b.value == "1") {
                    const vt = X == null ? void 0 : X.closingTime;
                    clearInterval(se.value), De(new Date(rt.replace(/-/g, "/")).getTime(), new Date(vt.replace(/-/g, "/")).getTime())
                } else b.value == "2" && (Pt.value = (new Date(m.value.endTime.replace(/-/g, "/")).getTime() - new Date(rt.replace(/-/g, "/")).getTime()) / 1e3, clearInterval(xt.value), Ut())
            };
            let Oe = null;
            const Se = v(""),
                ni = v(),
                ai = async (O = !1) => {
                    var rt, vt, Wt, Kt, pe, ge, pt, Nt;
                    if (g.value || b.value != "2") return;
                    let q, X = !0;
                    if (ye.value === "GameRecord") {
                        if (q = await lt(pa({
                                pageSize: 10,
                                pageNo: 1,
                                areId: u.value,
                                typeId: Number(s.value)
                            })), q) {
                            if (((vt = (rt = q.data) == null ? void 0 : rt.list) == null ? void 0 : vt.length) > 0 && (Se.value.trim().length == 0 || Se.value != ((Kt = (Wt = q.data) == null ? void 0 : Wt.list[0]) == null ? void 0 : Kt.issueNumber)) && (X = !1, Se.value = (ge = (pe = q.data) == null ? void 0 : pe.list[0]) == null ? void 0 : ge.issueNumber), X == !0 && O) {
                                clearTimeout(Oe), Oe = setTimeout(() => {
                                    ai(!0)
                                }, 1e3);
                                return
                            }
                            $.value = (pt = q.data) == null ? void 0 : pt.list[0], ni.value = q.data, Yt(() => {
                                je.value.getData(!1, ni.value)
                            })
                        }
                    } else if (ye.value === "MyGameRecord" && (q = await lt(rs({
                            areId: u.value,
                            typeId: Number(s.value)
                        })), q && q.data && q.data.openingResult && q.data.openingResult.length > 0 && (X = !1, Se.value = (Nt = q.data) == null ? void 0 : Nt.issueNumber, $.value = q.data), X == !0 && O)) {
                        clearTimeout(Oe), Oe = setTimeout(() => {
                            ai(!0)
                        }, 1e3);
                        return
                    }
                };

            function Pa() {
                let O = JSON.parse(sessionStorage.getItem("xosoList") || ""),
                    q = [];
                for (let X = 0; X < O.areInfos.length; X++) q.push({
                    text: r("code" + O.areInfos[X].areNameCode),
                    value: O.areInfos[X].areId,
                    disabled: !0,
                    info: O.areInfos[X].areIssueNos
                });
                L.value = q
            }

            function Da(O, q) {
                var X;
                if (s.value == O.code) {
                    Ie.value = !1;
                    return
                }
                Hi(), u.value = q, d.value = O.nameCode, s.value = O.code, T.value = 0, z.value = 0, R.value = k.value.length > 0 ? (X = k == null ? void 0 : k.value[0]) == null ? void 0 : X.categoryId : 1, Ie.value = !1, Oa(O, q), m.value = O, O.type == "2" && (Ne.value = !1, ai()), He(), hn(), Yt(() => {
                    ye.value === "MyGameRecord" && je.value.getData(!0)
                })
            }

            function Oa(O, q) {
                const X = No("hash");
                X.code = O == null ? void 0 : O.code, X.nameCode = O == null ? void 0 : O.nameCode, X.type = O == null ? void 0 : O.type, X.areId = q
            }
            const hn = async () => {
                    var q, X, rt, vt, Wt, Kt, pe, ge;
                    fn(), ne();
                    let O;
                    b.value == "1" ? O = await lt(us({
                        areaId: u.value
                    })) : b.value == "2" && (O = await lt(ds({
                        areaId: u.value,
                        typeId: Number(s.value)
                    }))), O && (k.value = (X = (q = O.data) == null ? void 0 : q.areaConfigList[0]) == null ? void 0 : X.gameCategoryList, localStorage.setItem("gameCategoryList", JSON.stringify((rt = O.data.areaConfigList[0]) == null ? void 0 : rt.gameCategoryList)), D.value = (Wt = (vt = k == null ? void 0 : k.value[0]) == null ? void 0 : vt.gamePlayList[0]) == null ? void 0 : Wt.playNameCode, I.value = (pe = (Kt = k == null ? void 0 : k.value[0]) == null ? void 0 : Kt.gamePlayList[0]) == null ? void 0 : pe.playId, R.value = (ge = k == null ? void 0 : k.value[0]) == null ? void 0 : ge.categoryId, Oi())
                },
                qa = (O, q) => {
                    ne(), T.value = q, R.value = O, z.value = 0, I.value = k == null ? void 0 : k.value[q].gamePlayList[0].playId, S.value = k.value[q].gamePlayList[0].betType, D.value = k.value[q].gamePlayList[0].playNameCode, Ae.value = 0, Oi()
                },
                Ea = (O, q, X, rt) => {
                    z.value = q, I.value = O, D.value = X, S.value = Number(rt), Ae.value = 0, Oi(), ne()
                },
                Oi = async () => {
                    var q, X, rt, vt, Wt, Kt, pe, ge, pt, Nt, ae, Lt, Wi, xn, In, Rn, Sn, Bn, Mn, Gn, An;
                    fn();
                    let O;
                    b.value == "1" ? O = await lt(ps({
                        areaId: u.value,
                        categoryId: R.value,
                        playId: I.value
                    })) : b.value == "2" && (O = await lt(gs({
                        areaId: u.value,
                        categoryId: R.value,
                        playId: I.value
                    }))), ot.value = (q = O.data) == null ? void 0 : q.betMethod, _t.value = (X = O.data) == null ? void 0 : X.betScopeConfig, At.value = (rt = O.data) == null ? void 0 : rt.isThreeNumber, dt.value = (vt = O.data) == null ? void 0 : vt.betNumber, Mt.value = (Wt = O.data) == null ? void 0 : Wt.fastSpeciaSelectNo, yt.value = (Kt = O.data) == null ? void 0 : Kt.fastRandomType, $t.value = (pe = O.data) == null ? void 0 : pe.fastSpeciaType, ti.value = (ge = O.data) == null ? void 0 : ge.playOddInfo.defaultOdds, F.value = (pt = O.data) == null ? void 0 : pt.playOddInfo.oddsOrAmount, Je.value = (Nt = O.data) == null ? void 0 : Nt.playOddInfo.bettingAmount, Bt.value = (Lt = (ae = O.data) == null ? void 0 : ae.fastRandomSelecNo) == null ? void 0 : Lt.split(",").map(Number), ut.value = (xn = (Wi = O.data) == null ? void 0 : Wi.playOddInfo.bettingMultiple) == null ? void 0 : xn.split(",").map(Number), Xt.value = (Rn = (In = O.data) == null ? void 0 : In.playOddInfo.bettingMultiple) == null ? void 0 : Rn.split(",")[0], Ct.value = (Sn = O.data) == null ? void 0 : Sn.perBetNumber, R.value == 8 && (wt.value = (Bn = O.data) == null ? void 0 : Bn.funPlayOddList), ja((Mn = O.data) == null ? void 0 : Mn.betMethod), Wa((Gn = O.data) == null ? void 0 : Gn.betNumber), Va((An = O.data) == null ? void 0 : An.isThreeNumber)
                },
                ja = O => {
                    O != null && O.includes("1") ? Z.value = 1 : R.value === 4 || R.value === 8 ? Z.value == 1 : Z.value = 3
                },
                Ha = (O, q) => {
                    jt.value = O.oddTypeName, ie.value = O.oddsOrAmount, H.value = [jt.value], Ht(3, dt.value)
                },
                Wa = O => {
                    O == 10 ? he.value = 1 : O == 8 ? he.value = 2 : O == 4 ? he.value = 3 : O == 3 ? he.value = 4 : O == 2 ? he.value = 5 : he.value = 0
                },
                Va = O => {
                    O == 1 && (Gt.value = bt.value.split("/")[0][0].toString())
                },
                fn = () => {
                    Z.value = 1, F.value = 0, Je.value = 0, ut.value = [], ot.value = "", _t.value = "", Bt.value = [], At.value = 0, dt.value = 0, Mt.value = "", yt.value = 0, $t.value = 0, gt.value = 1e3, Gt.value = ""
                },
                ne = () => {
                    et.value = [], at.value = [], Q.value = [], Y.value = [], H.value = [], nt.value = 0, jt.value = "1000", Pe.value = 0, fe.value = 0, Xt.value = 1, tt.value = "", gt.value = 1e3, Yt(() => {
                        _.value && _.value.cleardata()
                    })
                },
                Fa = O => {
                    tt.value = O;
                    let X = O.split(",").flatMap(rt => rt.split("|"));
                    H.value = X.map(String), Ht(Z.value, dt.value)
                },
                Ua = (O, q, X, rt) => {
                    O == "Thousand" ? rt == "all" ? et.value = $i(q, X) : rt == "big" ? et.value = $e(q, X, "big", 0) : rt == "small" ? et.value = $e(q, X, "small", 0) : rt == "odd" ? et.value = we(q, X, "odd", 0) : et.value = we(q, X, "even", 0) : O == "hundred" ? rt == "all" ? at.value = $i(q, X) : rt == "big" ? at.value = $e(q, X, "big", 0) : rt == "small" ? at.value = $e(q, X, "small", 0) : rt == "odd" ? at.value = we(q, X, "odd", 0) : at.value = we(q, X, "even", 0) : O == "ten" ? rt == "all" ? Q.value = $i(q, X) : rt == "big" ? Q.value = $e(q, X, "big", 0) : rt == "small" ? Q.value = $e(q, X, "small", 0) : rt == "odd" ? Q.value = we(q, X, "odd", 0) : Q.value = we(q, X, "even", 0) : rt == "all" ? Y.value = $i(q, X) : rt == "big" ? Y.value = $e(q, X, "big", 0) : rt == "small" ? Y.value = $e(q, X, "small", 0) : rt == "odd" ? Y.value = we(q, X, "odd", 0) : Y.value = we(q, X, "even", 0), Ht(Z.value, dt.value)
                },
                Ka = (O, q) => {
                    if (O == 0) q == "even" ? (ne(), H.value = we(0, 99, "even", 2), Ht(Z.value, dt.value)) : q == "big" ? (ne(), H.value = $e(0, 99, "big", 2), Ht(Z.value, dt.value)) : q == "small" ? (ne(), H.value = $e(0, 99, "small", 2), Ht(Z.value, dt.value)) : q == "odd" ? (ne(), H.value = we(0, 99, "odd", 2), Ht(Z.value, dt.value)) : (ne(), H.value = Dn(0, 99, 2), Ht(Z.value, dt.value));
                    else {
                        let X = Number(bt.value.split("/")[0]),
                            rt = Number(bt.value.split("/")[1]);
                        q == "even" ? (ne(), H.value = we(X, rt, "even", 3), Ht(Z.value, dt.value)) : q == "big" ? (ne(), H.value = $e(X, rt, "big", 3), Ht(Z.value, dt.value)) : q == "small" ? (ne(), H.value = $e(X, rt, "small", 3), Ht(Z.value, dt.value)) : q == "odd" ? (ne(), H.value = we(X, rt, "odd", 3), Ht(Z.value, dt.value)) : (ne(), H.value = Dn(X, rt, 3), Ht(Z.value, dt.value))
                    }
                },
                Xa = (O, q, X) => {
                    if (O == "") {
                        let rt = q + "" + X;
                        H.value.includes(rt) ? H.value = H.value.filter(function(vt) {
                            return vt != rt
                        }) : H.value.push(rt)
                    } else {
                        let rt = O + "" + q + X;
                        H.value.includes(rt) ? H.value = H.value.filter(function(vt) {
                            return vt != rt
                        }) : H.value.push(rt)
                    }
                    Ht(Z.value, dt.value)
                },
                Qa = (O, q) => {
                    O == "Thousand" ? et.value.includes(q) ? et.value = et.value.filter(function(X) {
                        return X != q
                    }) : et.value.push(q) : O == "Hundred" ? at.value.includes(q) ? at.value = at.value.filter(function(X) {
                        return X != q
                    }) : at.value.push(q) : O == "ten" ? Q.value.includes(q) ? Q.value = Q.value.filter(function(X) {
                        return X != q
                    }) : Q.value.push(q) : Y.value.includes(q) ? Y.value = Y.value.filter(function(X) {
                        return X != q
                    }) : Y.value.push(q), Ht(Z.value, dt.value)
                },
                Ya = (O, q) => {
                    Ae.value = q, bt.value = O, gt.value = 1e3, Gt.value = bt.value.split("/")[0][0].toString(), ne()
                },
                Za = (O, q, X) => {
                    if (gt.value = q, X == 0) H.value = On(Number(O) * dt.value, 0, 99, X), Ht(Z.value, dt.value);
                    else {
                        let rt = Number(bt.value.split("/")[0]),
                            vt = Number(bt.value.split("/")[1]);
                        H.value = On(Number(O), rt, vt, X), Ht(Z.value, dt.value)
                    }
                },
                Ja = O => {
                    Z.value = O, ne()
                },
                to = () => {
                    Ft.value = !1, ne()
                },
                eo = O => {},
                io = () => {
                    ii.value = !1, mi.value = !0
                },
                no = () => {
                    Ft.value = !1, Xt.value = 1, Ht(Z.value, dt.value)
                },
                yn = () => {
                    const O = k.value[T.value].gamePlayList[z.value].availableBetNumber,
                        q = k.value[T.value].gamePlayList[z.value].eachIssueBetMaxWinningAmount;
                    return fe.value > O ? Ot(r("xosoTip1", [O])) : Pe.value > q ? Ot(r("xosoTip2", [q])) : !0
                },
                ao = async () => {
                    var q, X, rt, vt;
                    if (yn() === !0) {
                        if (fe.value > 5e3) return Ot(r("xosoTxt94"));
                        if (Z.value == 1)(q = _t.value) != null && q.includes("4") ? Y.value.length > 0 && Q.value.length > 0 && at.value.length > 0 && et.value.length > 0 ? Ft.value = !0 : Ot(r("xosoTxt95")) : (X = _t.value) != null && X.includes("3") ? Y.value.length > 0 && Q.value.length > 0 && at.value.length > 0 ? Ft.value = !0 : Ot(r("xosoTxt95")) : (rt = _t.value) != null && rt.includes("2") ? Y.value.length > 0 && Q.value.length > 0 && R.value != 4 || Q.value.length > 0 && R.value == 4 ? Ft.value = !0 : Ot(r("xosoTxt95")) : (vt = _t.value) != null && vt.includes("1") ? Y.value.length > 0 ? Ft.value = !0 : Ot(r("xosoTxt95")) : H.value.length > 0 && R.value == 8 ? Ft.value = !0 : Ot(r("xosoTxt95"));
                        else if (Z.value == 3) $n(dt.value, H.value);
                        else if (Z.value == 2) {
                            if (!Rs.inputrule.test(tt.value)) return Ot({
                                message: r(Ss.inputtip),
                                wordBreak: "break-word"
                            });
                            for (let Wt = 0; Wt < H.value.length; Wt++)
                                if (H.value[Wt].toString().length != Ct.value) return Ot(r("xosoTxt95"));
                            if (bs(H.value)) return Ot(r("xosoTxt98"));
                            $n(dt.value, H.value)
                        } else R.value == 8 && H.value.length === 1 ? Ft.value = !0 : Ot(r("xosoTxt95"));
                        Ht(Z.value, dt.value)
                    }
                },
                $n = (O, q) => {
                    O == 1 ? q.length > 0 ? Ft.value = !0 : Ot(r("xosoTxt95")) : O == 2 ? q.length % 2 == 0 ? Ft.value = !0 : Ot(r("xosoTxt95")) : O == 3 ? q.length % 3 == 0 ? Ft.value = !0 : Ot(r("xosoTxt95")) : O == 4 ? q.length % 4 == 0 ? Ft.value = !0 : Ot(r("xosoTxt95")) : O == 8 ? q.length % 8 == 0 ? Ft.value = !0 : Ot(r("xosoTxt95")) : O == 10 && (q.length % 10 == 0 ? Ft.value = !0 : Ot(r("xosoTxt95")))
                },
                qi = v(null),
                oo = async () => {
                    qi.value && clearTimeout(qi.value), qi.value = setTimeout(async () => {
                        var Kt, pe, ge;
                        if (Et.value) return _e({
                            message: r("xosoTip6"),
                            wordBreak: "break-word"
                        });
                        if (!re.value || yn() !== !0) return;
                        let q = [],
                            X = "";
                        if (Z.value == 1 ? _t.value.toString().includes("4") ? X = et.value.join("|") + "," + at.value.join("|") + "," + Q.value.join("|") + "," + Y.value.join("|") : _t.value.toString().includes("3") ? X = at.value.join("|") + "," + Q.value.join("|") + "," + Y.value.join("|") : _t.value.toString().includes("2") ? R.value == 4 ? X = Q.value.join(",") : X = Q.value.join("|") + "," + Y.value.join("|") : R.value == 4 ? (X = Y.value.join(","), Z.value = 3) : R.value == 8 && (X = H.value[0]) : [2, 3].includes(Z.value) ? dt.value == 1 ? X = H.value.join(",") : dt.value == 2 ? X = H.value.reduce((Nt, ae, Lt) => (Lt % 2 === 0 && Nt.push(ae + "|" + H.value[Lt + 1]), Nt), []).join(",") : dt.value == 3 ? X = H.value.reduce((Nt, ae, Lt) => (Lt % 3 === 0 && Nt.push(ae + "|" + H.value[Lt + 1] + "|" + H.value[Lt + 2]), Nt), []).join(",") : dt.value == 4 ? X = H.value.reduce((Nt, ae, Lt) => (Lt % 4 === 0 && Nt.push(ae + "|" + H.value[Lt + 1] + "|" + H.value[Lt + 2] + "|" + H.value[Lt + 3]), Nt), []).join(",") : dt.value == 8 ? X = H.value.reduce((Nt, ae, Lt) => (Lt % 8 === 0 && Nt.push(ae + "|" + H.value[Lt + 1] + "|" + H.value[Lt + 2] + "|" + H.value[Lt + 3] + "|" + H.value[Lt + 4] + "|" + H.value[Lt + 5] + "|" + H.value[Lt + 6] + "|" + H.value[Lt + 7]), Nt), []).join(",") : X = H.value.reduce((Nt, ae, Lt) => (Lt % 10 === 0 && Nt.push(ae + "|" + H.value[Lt + 1] + "|" + H.value[Lt + 2] + "|" + H.value[Lt + 3] + "|" + H.value[Lt + 4] + "|" + H.value[Lt + 5] + "|" + H.value[Lt + 6] + "|" + H.value[Lt + 7] + "|" + H.value[Lt + 8] + "|" + H.value[Lt + 9]), Nt), []).join(",") : R.value === 8 && dt.value == 1 && (X = H.value[0], fe.value = dt.value), [4, 8].includes(R.value) && (Z.value = 3), X.replace(",", "").trim().length == 0 || fe.value == 0) return;
                        q.push({
                            bettingParentType: R.value,
                            bettingType: S.value,
                            bettingFormat: Z.value,
                            bettingContent: X,
                            totalBetting: fe.value,
                            initialAmount: Je.value,
                            bettingMultiple: Xt.value,
                            defaultOdds: ti.value
                        });
                        let [rt, vt] = [null, null], Wt = ta((Kt = m.value) == null ? void 0 : Kt.issueNo);
                        if (b.value == "1" ? [rt, vt] = await ee(ms({
                                areId: u.value,
                                issueNo: (pe = m.value) == null ? void 0 : pe.issueNo,
                                xosoBettingData: q
                            })) : b.value == "2" && ([rt, vt] = await ee(vs({
                                areId: u.value,
                                typeId: Number(s.value),
                                issueNo: (ge = m.value) == null ? void 0 : ge.issueNo,
                                xosoBettingData: q
                            }))), vt) {
                            R.value === 4 && (Z.value = 1), Ft.value = !1;
                            const pt = wn(vt == null ? void 0 : vt.msgCode, vt == null ? void 0 : vt.msg);
                            j.value = pt, Ae.value = 0, ne(), ji(), ye.value === "MyGameRecord" && je.value.getData(), setTimeout(() => {
                                Tn(Wt)
                            }, Number(Pt.value * 1e3) + 5e3)
                        } else {
                            Ft.value = !1;
                            const pt = wn(vt == null ? void 0 : vt.msgCode, vt == null ? void 0 : vt.msg);
                            j.value = pt
                        }
                    }, 500)
                },
                so = () => {
                    setTimeout(() => {
                        Ue.value && (Ue.value = !1)
                    }, 1500)
                },
                wn = (O, q) => {
                    let X = "";
                    switch (O) {
                        case 345:
                            X = r("xosoTip2", [q]), N.value = !0;
                            break;
                        case 346:
                            X = r("xosoTip3"), N.value = !0;
                            break;
                        case 347:
                            X = r("xosoTip3"), N.value = !0;
                            break;
                        case 348:
                            X = r("xosoTip1", [q]), N.value = !0;
                            break;
                        case 349:
                            X = r("xosoTip4"), N.value = !0;
                            break;
                        default:
                            X = "code" + O, Ue.value = !0, so();
                            break
                    }
                    return X
                },
                lo = () => {
                    N.value = !1
                };
            let Ei = null;
            async function Tn(O) {
                if (g.value || b.value != "2") return;
                const q = await lt(_s({
                    issueNo: O
                }));
                if (q) {
                    if (q.data.status == 1) {
                        clearTimeout(Ei), Ei = setTimeout(() => {
                            Tn(O)
                        }, 1e3);
                        return
                    }
                    yi.value.showMark(q.data), ye.value === "MyGameRecord" && je.value.getData()
                }
            }
            const co = O => {
                    O <= 0 || (O >= 5e4 ? Xt.value = 5e4 : Xt.value = O), Ht(Z.value, dt.value)
                },
                ro = (O, q) => {
                    ct.value = q, Xt.value = O, Ht(Z.value, dt.value)
                },
                Cn = O => {
                    switch (O) {
                        case 1:
                            Xt.value > 1 && (Xt.value--, Ht(Z.value, dt.value));
                            break;
                        case 2:
                            Xt.value++, Ht(Z.value, dt.value);
                            break
                    }
                },
                Ht = (O, q) => {
                    q != 0 && (fe.value = uo(O, q), Pe.value = fe.value * Je.value * Xt.value * ti.value, R.value === 8 ? nt.value = ie.value : nt.value = F.value)
                },
                uo = (O, q) => {
                    let X = 0;
                    if (O == 1) {
                        let rt = et.value.length,
                            vt = at.value.length,
                            Wt = Q.value.length,
                            Kt = Y.value.length;
                        return _t.value.toString().includes("4") ? X = rt * vt * Wt * Kt : _t.value.toString().includes("3") ? X = vt * Wt * Kt : _t.value.toString().includes("2") ? R.value === 4 ? X = Wt : X = Wt * Kt : _t.value.toString().includes("1") ? X = Kt : R.value === 8 && (X = 1), X
                    } else {
                        if (O == 3) return X = Math.floor(H.value.length / q), X;
                        if (O == 2) return H.value.length == 1 && H.value[0] == "1" ? X = 0 : X = Math.floor(H.value.length / q), X
                    }
                    return X
                },
                po = () => {
                    i.go(-1)
                },
                Nn = O => {
                    var q;
                    i.push({
                        name: O,
                        query: {
                            id: (q = o.query) == null ? void 0 : q.id
                        }
                    })
                },
                ji = async () => {
                    const O = await lt(sn());
                    O && (ei.value = (O == null ? void 0 : O.data.amount) || 0)
                };

            function go(O) {
                ye.value = O, ye.value == "GameRecord" && Yt(() => {
                    je.value.getData()
                })
            }
            Pa(), He(), b.value == "2" && ai(), hn(), ji();

            function Hi() {
                clearInterval(se.value), clearInterval(xt.value), clearTimeout(Oe), clearTimeout(Ei)
            }
            en(() => {
                g.value = !0, Hi()
            });
            const bo = Co();
            return Dt(bo, (O, q) => {
                O === "visible" && q === "hidden" ? (He(), b.value == "2" && ai(), ji()) : Hi()
            }), (O, q) => {
                var pe, ge;
                const X = W("NavBar"),
                    rt = W("van-field"),
                    vt = W("van-checkbox"),
                    Wt = W("van-button"),
                    Kt = W("van-popup");
                return n(), a(B, null, [t("div", d4, [x(X, {
                    "left-arrow": "",
                    onClickLeft: po,
                    class: "main"
                }, {
                    center: A(() => [t("div", {
                        class: "centercity",
                        onClick: q[0] || (q[0] = pt => Ie.value = !0)
                    }, [E(e(p.value) + " ", 1), p4])]),
                    _: 1
                }), C("彩种及玩法"), x(Nw, {
                    gameCategoryList: k.value,
                    colortab: T.value,
                    playtab: z.value,
                    onColorupdate: qa,
                    onUpdate: Ea
                }, null, 8, ["gameCategoryList", "colortab", "playtab"]), C("玩法说明"), b.value == "1" ? (n(), it(ew, {
                    key: 0,
                    defaultcityname: p.value,
                    defaultplayname: D.value,
                    defaultexpiredate: P.value,
                    colorId: R.value,
                    issue: (pe = m.value) == null ? void 0 : pe.issueNo,
                    time: V.value,
                    odds: F.value,
                    areId: u.value
                }, null, 8, ["defaultcityname", "defaultplayname", "defaultexpiredate", "colorId", "issue", "time", "odds", "areId"])) : b.value == "2" ? (n(), it(ww, {
                    key: 1,
                    defaultcityname: p.value,
                    defaultplayname: D.value,
                    colorId: R.value,
                    issue: (ge = m.value) == null ? void 0 : ge.issueNo,
                    time: Qt.value,
                    odds: F.value,
                    areId: u.value,
                    resultList: $.value,
                    isShowPreparing: Et.value
                }, null, 8, ["defaultcityname", "defaultplayname", "colorId", "issue", "time", "odds", "areId", "resultList", "isShowPreparing"])) : C("v-if", !0), C("趣味玩法"), R.value === 8 ? (n(), it(LT, {
                    key: 2,
                    funplaylist: wt.value,
                    numbercon: jt.value,
                    onSelectvalue: Ha
                }, null, 8, ["funplaylist", "numbercon"])) : (n(), a(B, {
                    key: 3
                }, [C("选择号码，输入号码，快捷选号"), x(fT, {
                    ref_key: "numberselectRef",
                    ref: _,
                    methodList: ot.value,
                    activeTab: Z.value,
                    randomList: Bt.value,
                    randomtype: yt.value,
                    specialtype: $t.value,
                    isthreenumber: At.value,
                    speciaSelectNo: Mt.value,
                    isShowMark: Ne.value,
                    betconfig: _t.value,
                    hundred: Gt.value,
                    groupTab: gt.value,
                    thousandnumList: et.value,
                    hundrednumList: at.value,
                    tennumList: Q.value,
                    indicualnumList: Y.value,
                    quicknumList: H.value,
                    intervalnumber: Le.value,
                    intervalTab: Ae.value,
                    onTabupdate: Ja,
                    onSelectgroup: Za,
                    onSelectinterval: Ya,
                    onBetNum: Qa,
                    onBetQuickNum: Xa,
                    onGetselect: Ua,
                    onGetquick: Ka,
                    onInputblur: Fa
                }, null, 8, ["methodList", "activeTab", "randomList", "randomtype", "specialtype", "isthreenumber", "speciaSelectNo", "isShowMark", "betconfig", "hundred", "groupTab", "thousandnumList", "hundrednumList", "tennumList", "indicualnumList", "quicknumList", "intervalnumber", "intervalTab"])], 2112)), C("投注记录和比赛结果"), x(HT, {
                    record: ye.value,
                    onChangeC: go
                }, null, 8, ["record"]), C(" 动态展示对应的组件 "), (n(), it(Qe, null, [(n(), it(qe(Di[ye.value]), {
                    ref_key: "RecordComponent",
                    ref: je,
                    ApiFun: mt.value,
                    areId: u.value,
                    cityCode: s.value,
                    parmas: w,
                    gVSs: b.value
                }, null, 8, ["ApiFun", "areId", "cityCode", "parmas", "gVSs"]))], 1024)), C("foot"), x(OT, {
                    betNumber: fe.value,
                    betSum: Pe.value,
                    onPlayBet: ao
                }, null, 8, ["betNumber", "betSum"]), C(" 中奖提示组件 "), x(u4, {
                    ref_key: "WinningTipsRef",
                    ref: yi
                }, null, 512)]), C("下注弹窗"), x(Kt, {
                    show: Ft.value,
                    "onUpdate:show": q[8] || (q[8] = pt => Ft.value = pt),
                    "close-on-click-overlay": !1,
                    class: "popup",
                    position: "bottom"
                }, {
                    default: A(() => [t("div", g4, [t("div", {
                        class: "close",
                        onClick: to
                    }, [t("img", {
                        class: "img",
                        src: c(Vt)("main", "close")
                    }, null, 8, b4)]), t("div", m4, e(O.$t("bettingnumber")), 1), R.value === 6 || u.value === 2 && R.value === 1 && I.value === 4 || u.value === 3 && R.value === 1 && I.value === 4 || u.value === 1 && R.value === 1 && I.value === 5 ? (n(), a("div", v4, e(O.$t("xosoTxt93")), 1)) : C("v-if", !0), Z.value == 2 || Z.value == 3 ? (n(), a("div", {
                        key: 1,
                        class: M("c-row c-flex-warp compound" + Z.value)
                    }, [t("div", {
                        class: M("c-row item item" + he.value + "-" + Ct.value)
                    }, [t("div", _4, [t("div", k4, [(n(!0), a(B, null, G(H.value, (pt, Nt) => (n(), a("div", {
                        class: "num c-row c-row-middle-center",
                        key: Nt
                    }, e(pt), 1))), 128))])])], 2)], 2)) : C("v-if", !0), Z.value == 1 ? (n(), a("div", h4, [et.value.length > 0 ? (n(), a("div", f4, [t("div", y4, e(O.$t("xosoTxt87")), 1), t("div", $4, [(n(!0), a(B, null, G(et.value, (pt, Nt) => (n(), a("div", {
                        class: "num",
                        key: Nt
                    }, e(pt), 1))), 128))])])) : C("v-if", !0), at.value.length > 0 ? (n(), a("div", w4, [t("div", T4, e(O.$t("xosoTxt88")), 1), t("div", C4, [(n(!0), a(B, null, G(at.value, (pt, Nt) => (n(), a("div", {
                        class: "num",
                        key: Nt
                    }, e(pt), 1))), 128))])])) : C("v-if", !0), Q.value.length > 0 ? (n(), a("div", N4, [t("div", L4, e(O.$t("xosoTxt89")), 1), t("div", z4, [(n(!0), a(B, null, G(Q.value, (pt, Nt) => (n(), a("div", {
                        class: "num",
                        key: Nt
                    }, e(pt), 1))), 128))])])) : C("v-if", !0), Y.value.length > 0 ? (n(), a("div", x4, [t("div", I4, e(O.$t("xosoTxt90")), 1), t("div", R4, [(n(!0), a(B, null, G(Y.value, (pt, Nt) => (n(), a("div", {
                        class: "num",
                        key: Nt
                    }, e(pt), 1))), 128))])])) : C("v-if", !0), H.value.length > 0 ? (n(), a("div", S4, [t("div", B4, [(n(!0), a(B, null, G(H.value, (pt, Nt) => (n(), a("div", {
                        class: "num",
                        key: Nt
                    }, e(pt), 1))), 128))])])) : C("v-if", !0)])) : C("v-if", !0), t("div", M4, [t("div", G4, [t("div", A4, e(O.$t("multiple")), 1), t("div", P4, [t("div", {
                        class: "li minus",
                        onClick: q[1] || (q[1] = pt => Cn(1))
                    }, "-"), x(rt, {
                        class: "digit-box",
                        modelValue: Xt.value,
                        "onUpdate:modelValue": q[2] || (q[2] = pt => Xt.value = pt),
                        type: "digit",
                        maxlength: 5,
                        onInput: q[3] || (q[3] = pt => co(Xt.value))
                    }, null, 8, ["modelValue"]), t("div", {
                        class: "li plus c-row c-row-middle-center",
                        onClick: q[4] || (q[4] = pt => Cn(2))
                    }, "+")])]), t("div", D4, [t("div", O4, [(n(!0), a(B, null, G(ut.value, (pt, Nt) => (n(), a("div", {
                        class: M(Xt.value == pt ? "action li" : "li"),
                        onClick: ae => ro(pt, Nt)
                    }, " X" + e(pt), 11, q4))), 256))])]), t("div", E4, [t("div", j4, [E(e(O.$t("quantity")) + " ", 1), H4, t("span", W4, e(fe.value || 0) + e(O.$t("note")), 1)]), t("div", V4, [E(e(O.$t("odds")), 1), F4, E(), t("span", U4, e(nt.value), 1)])]), t("div", K4, [t("div", X4, [E(e(O.$t("walletBalance")) + " ", 1), t("span", Q4, e(c(It)(ei.value)), 1)])]), t("div", Y4, [t("div", Z4, [E(e(O.$t("betAmounts")), 1), t("span", J4, e(c(It)(Pe.value)), 1)])]), Pe.value > ei.value ? (n(), a("div", t8, [t("div", e8, [t("img", {
                        src: c(qt)("home/AllLotteryGames/NewVietnam", "tip")
                    }, null, 8, i8), E(e(O.$t("insufficientWallet")), 1)]), t("div", {
                        class: "txt bg333",
                        onClick: q[5] || (q[5] = pt => Nn("Recharge"))
                    }, e(O.$t("torecharge")) + " >>", 1)])) : C("v-if", !0), t("div", n8, [x(vt, {
                        modelValue: mi.value,
                        "onUpdate:modelValue": q[6] || (q[6] = pt => mi.value = pt),
                        shape: "square",
                        "checked-color": "#F4453E",
                        onChange: eo
                    }, {
                        default: A(() => [t("div", a8, e(O.$t("agree")), 1)]),
                        _: 1
                    }, 8, ["modelValue"]), t("span", {
                        class: "txt",
                        onClick: q[7] || (q[7] = pt => ii.value = !0)
                    }, e(O.$t("presaleRules")), 1)])])]), t("div", o8, [t("div", s8, [x(Wt, {
                        class: "btn",
                        block: "",
                        onClick: no
                    }, {
                        default: A(() => [t("span", null, e(O.$t("cancel")), 1)]),
                        _: 1
                    })]), t("div", l8, [x(Wt, {
                        class: M(["btn", {
                            noActive: !re.value
                        }]),
                        block: "",
                        onClick: oo
                    }, {
                        default: A(() => [t("span", c8, e(O.$t("betting")), 1)]),
                        _: 1
                    }, 8, ["class"])])])]),
                    _: 1
                }, 8, ["show"]), C("顶部弹窗"), x(Kt, {
                    class: "areBox",
                    show: Ie.value,
                    "onUpdate:show": q[10] || (q[10] = pt => Ie.value = pt),
                    round: "",
                    position: "bottom",
                    style: {
                        overflow: "initial"
                    }
                }, {
                    default: A(() => [t("div", r8, [t("img", {
                        class: "close",
                        src: c(Vt)("main", "close"),
                        alt: "",
                        onClick: q[9] || (q[9] = () => Ie.value = !1)
                    }, null, 8, u8), (n(!0), a(B, null, G(L.value, (pt, Nt) => (n(), a("div", {
                        class: "items",
                        key: Nt
                    }, [t("h1", null, e(pt.text), 1), t("div", d8, [(n(!0), a(B, null, G(pt.info, (ae, Lt) => (n(), a("div", {
                        key: Lt,
                        class: M({
                            isActive: s.value == ae.code
                        }),
                        onClick: Wi => Da(ae, pt.value)
                    }, e(O.$t("code" + ae.nameCode)), 11, p8))), 128))])]))), 128))])]),
                    _: 1
                }, 8, ["show"]), C("预售规则"), x(Kt, {
                    show: ii.value,
                    "onUpdate:show": q[11] || (q[11] = pt => ii.value = pt),
                    class: "PreSaleRule",
                    "close-on-click-overlay": !1,
                    round: ""
                }, {
                    default: A(() => [t("div", g8, [t("div", b8, e(c(r)("presaleRules")), 1), t("div", m8, e(O.$t("betPopTXT")), 1), t("div", v8, [t("div", {
                        class: "btn",
                        onClick: io
                    }, e(c(r)("iKonw")), 1)])])]),
                    _: 1
                }, 8, ["show"]), C("提示"), x(Kt, {
                    show: Ue.value,
                    "onUpdate:show": q[12] || (q[12] = pt => Ue.value = pt),
                    class: "Tips",
                    "close-on-click-overlay": !0
                }, {
                    default: A(() => [t("div", null, [j.value == "code402" ? (n(), a("img", {
                        key: 0,
                        src: c(Vt)("home/AllLotteryGames/NewVietnam", "success")
                    }, null, 8, _8)) : (n(), a("img", {
                        key: 1,
                        src: c(Vt)("home/AllLotteryGames/NewVietnam", "fail")
                    }, null, 8, k8)), t("div", h8, e(O.$t(j.value)), 1)])]),
                    _: 1
                }, 8, ["show"]), x(xe, {
                    show: N.value,
                    "onUpdate:show": q[13] || (q[13] = pt => N.value = pt),
                    onConfirm: lo,
                    confirmText: c(r)("confirm"),
                    showCancelBtn: !1
                }, {
                    content: A(() => [t("div", f8, e(j.value ? O.$t(j.value) : ""), 1)]),
                    _: 1
                }, 8, ["show", "confirmText"])], 64)
            }
        }
    });
const $8 = K(y8, [
        ["__scopeId", "data-v-b1e14027"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/NewVietnam/index.vue"]
    ]),
    fI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: $8
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    w8 = {
        class: "Play__C"
    },
    T8 = {
        class: "title"
    },
    C8 = ["src"],
    N8 = {
        class: "info"
    },
    L8 = ["src"],
    z8 = {
        class: "sub"
    },
    x8 = {
        class: "text"
    },
    I8 = {
        class: "info_text"
    },
    R8 = {
        class: "forexample"
    },
    S8 = {
        key: 0,
        class: "betting"
    },
    B8 = {
        class: "result"
    },
    M8 = {
        key: 0,
        class: "info_item"
    },
    G8 = ["src"],
    A8 = {
        class: "sub"
    },
    P8 = {
        class: "text"
    },
    D8 = {
        key: 1,
        class: "info_text"
    },
    O8 = {
        class: "forexample"
    },
    q8 = {
        class: "result"
    },
    E8 = U({
        __name: "NorthPlay",
        setup(l) {
            const {
                t: i
            } = kt(), o = v(0), r = Zt([{
                title: i("xosoTab1"),
                subList: [{
                    sub: i("xosoSub1"),
                    num: "［45］",
                    resultTip: i("xosoTxt3", ["27"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt1")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt2", ["27", "2"])
                    }]
                }, {
                    sub: i("xosoSub2"),
                    num: "［45］",
                    resultTip: i("xosoTxt5"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt1")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt4")
                    }]
                }, {
                    sub: i("xosoSub3"),
                    num: "［45］",
                    resultTip: i("xosoTxt6", ["27"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt1")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt2", ["27", "2"])
                    }]
                }, {
                    sub: i("xosoSub4"),
                    num: "［456］",
                    resultTip: i("xosoTxt9", ["23"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt8")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt2", ["23", "3"])
                    }]
                }, {
                    sub: i("xosoSub5"),
                    num: "［4567］",
                    resultTip: i("xosoTxt11", ["20"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt10")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt2", ["20", "4"])
                    }]
                }]
            }, {
                title: i("xosoTab2"),
                subList: [{
                    sub: i("xosoSub6"),
                    num: "［45/55］",
                    resultTip: i("xosoTxt14", ["27"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt12", ["2"])
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt13", ["27", "2", "2"])
                    }]
                }, {
                    sub: i("xosoSub7"),
                    num: "［45/55/65］",
                    resultTip: i("xosoTxt15", ["27"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt12", ["3"])
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt13", ["27", "3", "2"])
                    }]
                }, {
                    sub: i("xosoSub8"),
                    num: "［45/55/65/75］",
                    resultTip: i("xosoTxt16", ["27"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt12", ["4"])
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt13", ["27", "4", "2"])
                    }]
                }]
            }, {
                title: i("xosoTab3"),
                subList: [{
                    sub: i("xosoSub9"),
                    num: "［45］",
                    resultTip: i("xosoTxt19"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt1")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt17")
                    }]
                }, {
                    sub: i("xosoSub18"),
                    num: "［45］",
                    resultTip: i("xosoTxt23"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt1")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt21")
                    }]
                }, {
                    sub: i("xosoSub11"),
                    num: "［45］",
                    resultTip: i("xosoTxt27"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt1")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt25")
                    }]
                }, {
                    sub: i("xosoSub12"),
                    num: "［45］",
                    resultTip: i("xosoTxt35"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt1")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt34")
                    }]
                }, {
                    sub: i("xosoSub13"),
                    num: "［45］",
                    resultTip: i("xosoTxt37"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt1")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt36")
                    }]
                }]
            }, {
                title: i("xosoTab4"),
                subList: [{
                    sub: i("xosoSub17"),
                    num: "［4］",
                    resultTip: i("xosoTxt31"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt29")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt30")
                    }]
                }, {
                    sub: i("xosoTxt100"),
                    num: "［4］",
                    resultTip: i("xosoTxt33"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt101")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt102")
                    }]
                }]
            }, {
                title: i("xosoTab5"),
                subList: [{
                    sub: i("xosoSub19"),
                    num: "［456］",
                    resultTip: i("xosoTxt41"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt38")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt39")
                    }]
                }, {
                    sub: i("xosoSub20"),
                    num: "［456］",
                    resultTip: i("xosoTxt45"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt43")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt44")
                    }]
                }, {
                    sub: i("xosoSub21"),
                    num: "［456］",
                    resultTip: i("xosoTxt49"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt43")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt47")
                    }]
                }, {
                    sub: i("xosoSub22"),
                    num: "［456］",
                    resultTip: i("xosoTxt55"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt43")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt54")
                    }]
                }]
            }, {
                title: i("xosoTab6"),
                subList: [{
                    sub: i("xosoSub25"),
                    num: "［4567］",
                    resultTip: i("xosoTxt53"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt51")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt52")
                    }]
                }]
            }, {
                title: i("xosoTab7"),
                subList: [{
                    sub: i("xosoSub26"),
                    num: "［45/55/66/77］",
                    resultTip: i("xosoTxt57", ["27"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt12", ["4"])
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt56", ["27"])
                    }]
                }, {
                    sub: i("xosoSub27"),
                    num: "［45/55/66/77/88/99/11/22］",
                    resultTip: i("xosoTxt58", ["27"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt12", ["8"])
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt56", ["27"])
                    }]
                }, {
                    sub: i("xosoSub28"),
                    num: "［45/55/66/77/88/99/11/22/33/44］",
                    resultTip: i("xosoTxt59", ["27"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt12", ["10"])
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt56", ["27"])
                    }]
                }]
            }, {
                title: i("xosoTab8"),
                subList: [{
                    sub: i("xosoTxt60"),
                    num: "",
                    resultTip: i("xosoTxt66"),
                    txtList: [{
                        bet: i("xosoTxt60"),
                        betTip: i("xosoTxt61")
                    }, {
                        bet: i("big"),
                        betTip: i("xosoTxt62")
                    }, {
                        bet: i("small"),
                        betTip: i("xosoTxt63")
                    }, {
                        bet: i("xosoTxt69"),
                        betTip: i("xosoTxt64")
                    }, {
                        bet: i("xosoTxt70"),
                        betTip: i("xosoTxt65")
                    }]
                }]
            }]);
            return (g, b) => {
                const d = W("van-tab"),
                    u = W("van-tabs");
                return n(), a("div", w8, [x(u, {
                    active: o.value,
                    "onUpdate:active": b[0] || (b[0] = p => o.value = p),
                    type: "card"
                }, {
                    default: A(() => [(n(!0), a(B, null, G(r, (p, s) => (n(), it(d, {
                        title: p.title,
                        key: s
                    }, {
                        default: A(() => [(n(!0), a(B, null, G(p.subList, (_, m) => (n(), a("div", {
                            class: "Play__C-Cotent",
                            key: m
                        }, [t("div", T8, [t("img", {
                            src: c(Vt)("home/AllLotteryGames/NewVietnam", "Star")
                        }, null, 8, C8), t("span", null, e(_.sub), 1)]), t("div", N8, [(n(!0), a(B, null, G(_.txtList, (w, y) => (n(), a("div", {
                            class: "info_item",
                            key: y
                        }, [t("img", {
                            src: c(qt)("public", "Triangle")
                        }, null, 8, L8), t("span", z8, e(w.bet), 1), t("div", x8, e(w.betTip), 1)]))), 128)), t("div", I8, [t("div", R8, e(c(i)("forexample")), 1), _.num ? (n(), a("div", S8, e(c(i)("betting")) + "：" + e(_.num), 1)) : C("v-if", !0), t("div", B8, e(c(i)("result")) + "：" + e(_.resultTip), 1)]), o.value === 7 ? (n(), a("div", M8, [t("img", {
                            src: c(qt)("public", "Triangle")
                        }, null, 8, G8), t("span", A8, e(c(i)("xosoTxt71")), 1), t("div", P8, e(c(i)("xosoTxt67")), 1)])) : C("v-if", !0), o.value === 7 ? (n(), a("div", D8, [t("div", O8, e(c(i)("forexample")), 1), t("div", q8, e(c(i)("result")) + "： " + e(c(i)("xosoTxt68")), 1)])) : C("v-if", !0)])]))), 128))]),
                        _: 2
                    }, 1032, ["title"]))), 128))]),
                    _: 1
                }, 8, ["active"])])
            }
        }
    });
const j8 = K(E8, [
        ["__scopeId", "data-v-b67ec5ce"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/NewVietnam/NorthPlay.vue"]
    ]),
    fi = l => (Rt("data-v-33026085"), l = l(), St(), l),
    H8 = {
        class: "NorthRule__C"
    },
    W8 = {
        class: "NorthRule__C-title"
    },
    V8 = {
        class: "NorthRule__C-tips"
    },
    F8 = fi(() => t("div", {
        class: "borderTopStyle"
    }, [t("span"), t("span")], -1)),
    U8 = {
        class: "title"
    },
    K8 = {
        class: "text"
    },
    X8 = {
        class: "table"
    },
    Q8 = {
        class: "table-row header-time"
    },
    Y8 = {
        class: "table-time-1"
    },
    Z8 = fi(() => t("div", {
        class: "table-time-1"
    }, "18:15", -1)),
    J8 = {
        class: "table-row header-week"
    },
    t9 = {
        class: "table-week-1"
    },
    e9 = {
        class: "table-week-1"
    },
    i9 = {
        class: "table-cell-1"
    },
    n9 = {
        class: "table-cell-1"
    },
    a9 = fi(() => t("div", {
        class: "borderTopStyle"
    }, [t("span"), t("span")], -1)),
    o9 = {
        class: "title"
    },
    s9 = {
        class: "text"
    },
    l9 = {
        key: 0,
        class: "text"
    },
    c9 = {
        key: 1,
        class: "text"
    },
    r9 = {
        class: "NorthRule__C-Rule"
    },
    u9 = {
        class: "NorthRule__C-Struct"
    },
    d9 = fi(() => t("span", {
        class: "left"
    }, null, -1)),
    p9 = fi(() => t("span", {
        class: "right"
    }, null, -1)),
    g9 = {
        class: "table-rule"
    },
    b9 = {
        class: "table-header"
    },
    m9 = {
        class: "table-header-cell"
    },
    v9 = {
        class: "table-header-cell"
    },
    _9 = {
        class: "table-header-cell"
    },
    k9 = {
        class: "table-cell"
    },
    h9 = {
        class: "table-cell"
    },
    f9 = {
        class: "table-cell"
    },
    y9 = {
        class: "table-rule"
    },
    $9 = {
        class: "table-header"
    },
    w9 = {
        class: "table-header-cell"
    },
    T9 = {
        key: 0,
        class: "table-box-title"
    },
    C9 = U({
        __name: "NorthRule",
        setup(l) {
            const {
                t: i
            } = kt(), o = Zt([{
                title: "01",
                sub: i("resultsVielottery")
            }, {
                title: "02",
                sub: i("systemresult")
            }, {
                title: "03",
                sub: i("lotterytime")
            }]), r = Zt([{
                title: "04",
                sub: i("oddsmiscalculated")
            }, {
                title: "05",
                sub: i("oddsbettingprincipal")
            }, {
                title: "06",
                sub: i("oddsfluctuate")
            }, {
                title: "07",
                sub: i("oncebetgenerated")
            }, {
                title: "08",
                sub: i("anyreasonCauses")
            }, {
                title: "09",
                sub: i("platformcancel"),
                sub1: i("drawdelayedtoolong"),
                sub2: i("resultsofthelotterybeenleaked")
            }]), g = Zt([{
                week: i("Monday"),
                addressList: i("Hanoi")
            }, {
                week: i("Tuesday"),
                addressList: i("quangNinh")
            }, {
                week: i("Wednesday"),
                addressList: i("bacninh")
            }, {
                week: i("Thursday"),
                addressList: i("Hanoi")
            }, {
                week: i("Friday"),
                addressList: i("haiphong")
            }, {
                week: i("Saturday"),
                addressList: i("nanning")
            }, {
                week: i("Sunday"),
                addressList: i("taiping")
            }]), b = Zt([{
                title: i("GrandPrize"),
                quantity: 1,
                number: i("fivedigits"),
                drawsNumber: ["29818"]
            }, {
                title: i("FirstPrize"),
                quantity: 1,
                number: i("fivedigits"),
                drawsNumber: ["69388"]
            }, {
                title: i("SecondPrize"),
                quantity: 2,
                number: i("fivedigits"),
                drawsNumber: ["66992", "95797"]
            }, {
                title: i("ThirdPrize"),
                quantity: 6,
                number: i("fivedigits"),
                drawsNumber: ["99095", "32620", "51685", "12345", "69548", "69874"]
            }, {
                title: i("FourPrize"),
                quantity: 4,
                number: i("fourdigits"),
                drawsNumber: ["6545", "5257", "7896", "3682"]
            }, {
                title: i("FivePrize"),
                quantity: 6,
                number: i("fourdigits"),
                drawsNumber: ["4567", "8533", "7632", "7632", "6673", "7855"]
            }, {
                title: i("SixPrize"),
                quantity: 3,
                number: i("fourdigits"),
                drawsNumber: ["567", "642", "934"]
            }, {
                title: i("SevenPrize"),
                quantity: 4,
                number: i("seconddigits"),
                drawsNumber: ["48", "64", "32", "51"]
            }, {
                title: i("intotal"),
                quantity: i("lotteryawards"),
                number: ""
            }]);
            return (d, u) => (n(), a("div", H8, [t("div", W8, e(c(i)("northVieLotteryGameRules")), 1), t("div", V8, e(c(i)("precautions")), 1), (n(!0), a(B, null, G(o, (p, s) => (n(), a("div", {
                class: "NorthRule__C-Content",
                key: s
            }, [F8, t("div", U8, e(p.title), 1), t("div", K8, e(p.sub), 1)]))), 128)), t("div", X8, [t("div", Q8, [t("div", Y8, e(c(i)("winTrxTime")), 1), Z8]), t("div", J8, [t("div", t9, e(c(i)("weeks")), 1), t("div", e9, e(c(i)("northLotteryCities")), 1)]), (n(!0), a(B, null, G(g, (p, s) => (n(), a("div", {
                class: "table-row",
                key: s
            }, [t("div", i9, e(p.week), 1), t("div", n9, e(p.addressList), 1)]))), 128))]), (n(!0), a(B, null, G(r, (p, s) => (n(), a("div", {
                class: "NorthRule__C-Content",
                key: s
            }, [a9, t("div", o9, e(p.title), 1), t("div", s9, e(p.sub), 1), p.sub1 ? (n(), a("div", l9, e(p.sub1), 1)) : C("v-if", !0), p.sub2 ? (n(), a("div", c9, e(p.sub2), 1)) : C("v-if", !0)]))), 128)), t("div", r9, e(c(i)("northernLotteryGameRules")), 1), t("div", u9, [d9, E(e(c(i)("colorstructure")), 1), p9]), t("div", g9, [t("div", b9, [t("div", m9, e(c(i)("Lottery")), 1), t("div", v9, e(c(i)("numberofPrizes")), 1), t("div", _9, e(c(i)("Number")), 1)]), (n(!0), a(B, null, G(b, (p, s) => (n(), a("div", {
                class: "table-row",
                key: s
            }, [t("div", k9, e(p.title), 1), t("div", h9, e(p.quantity), 1), t("div", f9, e(p.number), 1)]))), 128))]), t("div", y9, [t("div", $9, [t("div", w9, e(c(i)("sorthlotteryresult")), 1)]), (n(!0), a(B, null, G(b, (p, s) => (n(), a("div", {
                class: M(s == 8 ? "table-box none" : "table-box"),
                key: s
            }, [s != 8 ? (n(), a("div", T9, e(p.title), 1)) : C("v-if", !0), (n(!0), a(B, null, G(p.drawsNumber, (_, m) => (n(), a("div", {
                class: "table-box-number",
                key: m
            }, e(_), 1))), 128))], 2))), 128))])]))
        }
    });
const N9 = K(C9, [
        ["__scopeId", "data-v-33026085"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/NewVietnam/NorthRule.vue"]
    ]),
    L9 = {
        class: "Play__C"
    },
    z9 = {
        class: "title"
    },
    x9 = ["src"],
    I9 = {
        class: "info"
    },
    R9 = ["src"],
    S9 = {
        class: "sub"
    },
    B9 = {
        class: "text"
    },
    M9 = {
        class: "info_text"
    },
    G9 = {
        class: "forexample"
    },
    A9 = {
        key: 0,
        class: "betting"
    },
    P9 = {
        class: "result"
    },
    D9 = {
        key: 0,
        class: "info_item"
    },
    O9 = ["src"],
    q9 = {
        class: "sub"
    },
    E9 = {
        class: "text"
    },
    j9 = {
        key: 1,
        class: "info_text"
    },
    H9 = {
        class: "forexample"
    },
    W9 = {
        class: "result"
    },
    V9 = U({
        __name: "SorthPlay",
        setup(l) {
            const {
                t: i
            } = kt(), o = v(0), r = Zt([{
                title: i("xosoTab1"),
                subList: [{
                    sub: i("xosoSub1"),
                    num: "［45］",
                    resultTip: i("xosoTxt3", ["18"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt1")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt2", ["18", "2"])
                    }]
                }, {
                    sub: i("xosoSub3"),
                    num: "［45］",
                    resultTip: i("xosoTxt6", ["18"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt1")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt2", ["18", "2"])
                    }]
                }, {
                    sub: i("xosoSub4"),
                    num: "［456］",
                    resultTip: i("xosoTxt9", ["17"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt8")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt2", ["17", "3"])
                    }]
                }, {
                    sub: i("xosoSub5"),
                    num: "［4567］",
                    resultTip: i("xosoTxt11", ["16"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt10")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt2", ["16", "4"])
                    }]
                }]
            }, {
                title: i("xosoTab2"),
                subList: [{
                    sub: i("xosoSub6"),
                    num: "［45/55］",
                    resultTip: i("xosoTxt14", ["18"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt12", ["2"])
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt13", ["18", "2", "2"])
                    }]
                }, {
                    sub: i("xosoSub7"),
                    num: "［45/55/65］",
                    resultTip: i("xosoTxt15", ["18"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt12", ["3"])
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt13", ["18", "3", "2"])
                    }]
                }, {
                    sub: i("xosoSub8"),
                    num: "［45/55/65/75］",
                    resultTip: i("xosoTxt16", ["18"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt12", ["4"])
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt13", ["18", "4", "2"])
                    }]
                }]
            }, {
                title: i("xosoTab3"),
                subList: [{
                    sub: i("xosoSub14"),
                    num: "［45］",
                    resultTip: i("xosoTxt20"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt1")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt18")
                    }]
                }, {
                    sub: i("xosoSub15"),
                    num: "［45］",
                    resultTip: i("xosoTxt24"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt1")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt22")
                    }]
                }, {
                    sub: i("xosoSub16"),
                    num: "［45］",
                    resultTip: i("xosoTxt28"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt1")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt26")
                    }]
                }]
            }, {
                title: i("xosoTab4"),
                subList: [{
                    sub: i("xosoSub17"),
                    num: "［4］",
                    resultTip: i("xosoTxt31"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt29")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt30")
                    }]
                }, {
                    sub: i("xosoTxt100"),
                    num: "［4］",
                    resultTip: i("xosoTxt33"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt101")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt102")
                    }]
                }]
            }, {
                title: i("xosoTab5"),
                subList: [{
                    sub: i("xosoSub23"),
                    num: "［456］",
                    resultTip: i("xosoTxt42"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt38")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt40")
                    }]
                }, {
                    sub: i("xosoSub20"),
                    num: "［456］",
                    resultTip: i("xosoTxt45"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt43")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt44")
                    }]
                }, {
                    sub: i("xosoSub24"),
                    num: "［456］",
                    resultTip: i("xosoTxt50"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt43")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt48")
                    }]
                }]
            }, {
                title: i("xosoTab6"),
                subList: [{
                    sub: i("xosoSub25"),
                    num: "［4567］",
                    resultTip: i("xosoTxt53"),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt51")
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt52")
                    }]
                }]
            }, {
                title: i("xosoTab7"),
                subList: [{
                    sub: i("xosoSub26"),
                    num: "［45/55/66/77］",
                    resultTip: i("xosoTxt57", ["18"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt12", ["4"])
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt56", ["18"])
                    }]
                }, {
                    sub: i("xosoSub27"),
                    num: "［45/55/66/77/88/99/11/22］",
                    resultTip: i("xosoTxt58", ["18"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt12", ["8"])
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt56", ["18"])
                    }]
                }, {
                    sub: i("xosoSub28"),
                    num: "［45/55/66/77/88/99/11/22/33/44］",
                    resultTip: i("xosoTxt59", ["18"]),
                    txtList: [{
                        bet: i("betting"),
                        betTip: i("xosoTxt12", ["10"])
                    }, {
                        bet: i("winningconditions"),
                        betTip: i("xosoTxt56", ["18"])
                    }]
                }]
            }, {
                title: i("xosoTab8"),
                subList: [{
                    sub: i("xosoTxt60"),
                    num: "",
                    resultTip: i("xosoTxt66"),
                    txtList: [{
                        bet: i("xosoTxt60"),
                        betTip: i("xosoTxt61")
                    }, {
                        bet: i("big"),
                        betTip: i("xosoTxt62")
                    }, {
                        bet: i("small"),
                        betTip: i("xosoTxt63")
                    }, {
                        bet: i("xosoTxt69"),
                        betTip: i("xosoTxt64")
                    }, {
                        bet: i("xosoTxt70"),
                        betTip: i("xosoTxt65")
                    }]
                }]
            }]);
            return (g, b) => {
                const d = W("van-tab"),
                    u = W("van-tabs");
                return n(), a("div", L9, [x(u, {
                    active: o.value,
                    "onUpdate:active": b[0] || (b[0] = p => o.value = p),
                    type: "card"
                }, {
                    default: A(() => [(n(!0), a(B, null, G(r, (p, s) => (n(), it(d, {
                        title: p.title,
                        key: s
                    }, {
                        default: A(() => [(n(!0), a(B, null, G(p.subList, (_, m) => (n(), a("div", {
                            class: "Play__C-Cotent",
                            key: m
                        }, [t("div", z9, [t("img", {
                            src: c(Vt)("home/AllLotteryGames/NewVietnam", "Star")
                        }, null, 8, x9), t("span", null, e(_.sub), 1)]), t("div", I9, [(n(!0), a(B, null, G(_.txtList, (w, y) => (n(), a("div", {
                            class: "info_item",
                            key: y
                        }, [t("img", {
                            src: c(qt)("public", "Triangle")
                        }, null, 8, R9), t("span", S9, e(w.bet), 1), t("div", B9, e(w.betTip), 1)]))), 128)), t("div", M9, [t("div", G9, e(c(i)("forexample")), 1), _.num ? (n(), a("div", A9, e(c(i)("betting")) + "：" + e(_.num), 1)) : C("v-if", !0), t("div", P9, e(c(i)("result")) + "：" + e(_.resultTip), 1)]), o.value === 7 ? (n(), a("div", D9, [t("img", {
                            src: c(qt)("public", "Triangle")
                        }, null, 8, O9), t("span", q9, e(c(i)("xosoTxt71")), 1), t("div", E9, e(c(i)("xosoTxt67")), 1)])) : C("v-if", !0), o.value === 7 ? (n(), a("div", j9, [t("div", H9, e(c(i)("forexample")), 1), t("div", W9, e(c(i)("result")) + "： " + e(c(i)("xosoTxt68")), 1)])) : C("v-if", !0)])]))), 128))]),
                        _: 2
                    }, 1032, ["title"]))), 128))]),
                    _: 1
                }, 8, ["active"])])
            }
        }
    });
const F9 = K(V9, [
        ["__scopeId", "data-v-19e150a9"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/NewVietnam/SorthPlay.vue"]
    ]),
    bi = l => (Rt("data-v-7bb580e6"), l = l(), St(), l),
    U9 = {
        class: "NorthRule__C"
    },
    K9 = {
        class: "NorthRule__C-title"
    },
    X9 = {
        class: "NorthRule__C-tips"
    },
    Q9 = bi(() => t("div", {
        class: "borderTopStyle"
    }, [t("span"), t("span")], -1)),
    Y9 = {
        class: "title"
    },
    Z9 = {
        class: "text"
    },
    J9 = {
        class: "table"
    },
    tN = {
        class: "table-row header-time"
    },
    eN = {
        class: "table-time-1"
    },
    iN = bi(() => t("div", {
        class: "table-time-1"
    }, "16:20(GMT+7)", -1)),
    nN = bi(() => t("div", {
        class: "table-time-1"
    }, "17:15(GMT+7)", -1)),
    aN = {
        class: "table-row header-week"
    },
    oN = {
        class: "table-week-1"
    },
    sN = {
        class: "table-week-1"
    },
    lN = {
        class: "table-week-1"
    },
    cN = {
        class: "table-cell-1"
    },
    rN = {
        class: "table-cell-2"
    },
    uN = bi(() => t("div", {
        class: "borderTopStyle"
    }, [t("span"), t("span")], -1)),
    dN = {
        class: "title"
    },
    pN = {
        class: "text"
    },
    gN = {
        key: 0,
        class: "text"
    },
    bN = {
        key: 1,
        class: "text"
    },
    mN = {
        class: "NorthRule__C-Rule"
    },
    vN = {
        class: "NorthRule__C-Struct"
    },
    _N = bi(() => t("span", {
        class: "left"
    }, null, -1)),
    kN = bi(() => t("span", {
        class: "right"
    }, null, -1)),
    hN = {
        class: "table-rule"
    },
    fN = {
        class: "table-header"
    },
    yN = {
        class: "table-header-cell"
    },
    $N = {
        class: "table-header-cell"
    },
    wN = {
        class: "table-header-cell"
    },
    TN = {
        class: "table-cell"
    },
    CN = {
        class: "table-cell"
    },
    NN = {
        class: "table-cell"
    },
    LN = {
        class: "table-rule"
    },
    zN = {
        class: "table-header"
    },
    xN = {
        class: "table-header-cell"
    },
    IN = {
        key: 0,
        class: "table-box-title"
    },
    RN = U({
        __name: "SorthRule",
        setup(l) {
            const {
                t: i
            } = kt(), o = Zt([{
                title: "01",
                sub: i("resultsVielottery")
            }, {
                title: "02",
                sub: i("systemresult")
            }, {
                title: "03",
                sub: i("lotterytime1")
            }]), r = Zt([{
                title: "04",
                sub: i("oddsmiscalculated")
            }, {
                title: "05",
                sub: i("oddsbettingprincipal")
            }, {
                title: "06",
                sub: i("oddsfluctuate")
            }, {
                title: "07",
                sub: i("oncebetgenerated")
            }, {
                title: "08",
                sub: i("anyreasonCauses")
            }, {
                title: "09",
                sub: i("platformcancel"),
                sub1: i("drawdelayedtoolong"),
                sub2: i("resultsofthelotterybeenleaked")
            }]), g = Zt([{
                week: i("Monday"),
                addressList: [i("hochiminhcity"), i("sametower"), i("camua"), i("fuan"), i("hue")]
            }, {
                week: i("Tuesday"),
                addressList: [i("BenTre"), i("VungTau"), i("BacLieu"), i("Guangnan"), i("Dole")]
            }, {
                week: i("Wednesday"),
                addressList: [i("DongNai"), i("CanTho"), i("Shuozhuang"), i("danang"), i("Qinghe")]
            }, {
                week: i("Thursday"),
                addressList: [i("Xining"), i("Anjiang"), i("smooth"), i("putdown"), i("QuangBinh"), i("Koji")]
            }, {
                week: i("Friday"),
                addressList: [i("VinhLong"), i("BinhDuong"), i("ChaRong"), i("Carai"), i("NinhThun")]
            }, {
                week: i("Saturday"),
                addressList: [i("hochiminhcity"), i("LongAn"), i("Pingfu"), i("Houjiang"), i("danang"), i("Generalized"), i("Denon")]
            }, {
                week: i("Sunday"),
                addressList: [i("Qianjiang"), i("jianjiang"), i("DaLat"), i("Qinghe"), i("KonTum")]
            }]), b = Zt([{
                title: i("GrandPrize"),
                quantity: 1,
                number: i("onedigits"),
                drawsNumber: ["575333"]
            }, {
                title: i("FirstPrize"),
                quantity: 1,
                number: i("onedigits"),
                drawsNumber: ["34521"]
            }, {
                title: i("SecondPrize"),
                quantity: 1,
                number: i("onedigits"),
                drawsNumber: ["34675"]
            }, {
                title: i("ThirdPrize"),
                quantity: 2,
                number: i("seconddigits"),
                drawsNumber: ["34575", "45732"]
            }, {
                title: i("FourPrize"),
                quantity: 7,
                number: i("sevendigits"),
                drawsNumber: ["43211", "23545", "78023", "46954", "32463", "23478", "34522"]
            }, {
                title: i("FivePrize"),
                quantity: 1,
                number: i("onedigits"),
                drawsNumber: ["6425"]
            }, {
                title: i("SixPrize"),
                quantity: 3,
                number: i("threedigits"),
                drawsNumber: ["66992", "95797", "4356"]
            }, {
                title: i("SevenPrize"),
                quantity: 1,
                number: i("onedigits"),
                drawsNumber: ["69388"]
            }, {
                title: i("EightPrize"),
                quantity: 1,
                number: i("onedigits"),
                drawsNumber: ["12"]
            }, {
                title: i("intotal"),
                quantity: i("eightlotteryawards"),
                number: ""
            }]), d = u => u.slice().reverse();
            return (u, p) => (n(), a("div", U9, [t("div", K9, e(c(i)("sorthVieLotteryGameRules")), 1), t("div", X9, e(c(i)("precautions")), 1), (n(!0), a(B, null, G(o, (s, _) => (n(), a("div", {
                class: "NorthRule__C-Content",
                key: _
            }, [Q9, t("div", Y9, e(s.title), 1), t("div", Z9, e(s.sub), 1)]))), 128)), t("div", J9, [t("div", tN, [t("div", eN, e(c(i)("winTrxTime")), 1), iN, nN]), t("div", aN, [t("div", oN, e(c(i)("weeks")), 1), t("div", sN, e(c(i)("sorthLotteryCities")), 1), t("div", lN, e(c(i)("middleLotteryCities")), 1)]), (n(!0), a(B, null, G(g, (s, _) => (n(), a("div", {
                class: "table-row",
                key: _
            }, [t("div", cN, e(s.week), 1), t("div", rN, [(n(!0), a(B, null, G(s.addressList, (m, w) => (n(), a("div", {
                class: "table-column-1",
                key: w
            }, e(m), 1))), 128))])]))), 128))]), (n(!0), a(B, null, G(r, (s, _) => (n(), a("div", {
                class: "NorthRule__C-Content",
                key: _
            }, [uN, t("div", dN, e(s.title), 1), t("div", pN, e(s.sub), 1), s.sub1 ? (n(), a("div", gN, e(s.sub1), 1)) : C("v-if", !0), s.sub2 ? (n(), a("div", bN, e(s.sub2), 1)) : C("v-if", !0)]))), 128)), t("div", mN, e(c(i)("sorthernLotteryGameRules")), 1), t("div", vN, [_N, E(e(c(i)("colorstructure")), 1), kN]), t("div", hN, [t("div", fN, [t("div", yN, e(c(i)("Lottery")), 1), t("div", $N, e(c(i)("numberofPrizes")), 1), t("div", wN, e(c(i)("Number")), 1)]), (n(!0), a(B, null, G(b, (s, _) => (n(), a("div", {
                class: "table-row",
                key: _
            }, [t("div", TN, e(s.title), 1), t("div", CN, e(s.quantity), 1), t("div", NN, e(s.number), 1)]))), 128))]), t("div", LN, [t("div", zN, [t("div", xN, e(c(i)("sorthlotteryresult")), 1)]), (n(!0), a(B, null, G(d(b), (s, _) => (n(), a("div", {
                class: M(_ == 0 ? "table-box none" : "table-box"),
                key: _
            }, [_ != 0 ? (n(), a("div", IN, e(s.title), 1)) : C("v-if", !0), (n(!0), a(B, null, G(s.drawsNumber, (m, w) => (n(), a("div", {
                class: "table-box-number",
                key: w
            }, e(m), 1))), 128))], 2))), 128))])]))
        }
    });
const SN = K(RN, [
        ["__scopeId", "data-v-7bb580e6"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/NewVietnam/SorthRule.vue"]
    ]),
    BN = {
        class: "vietnamPlay__C"
    },
    MN = {
        key: 0,
        class: "play"
    },
    GN = {
        key: 1,
        class: "play"
    },
    AN = {
        key: 0,
        class: "northrule"
    },
    PN = {
        key: 1,
        class: "sorthrule"
    },
    DN = U({
        __name: "index",
        setup(l) {
            var d, u;
            const i = ht(),
                o = v(0),
                r = i.currentRoute.value.query.id,
                g = ((u = (d = i.currentRoute.value.query) == null ? void 0 : d.gVSs) == null ? void 0 : u.toString()) || "",
                b = () => {
                    i.go(-1)
                };
            return (p, s) => {
                const _ = W("NavBar"),
                    m = W("van-tab"),
                    w = W("van-tabs");
                return n(), a("div", BN, [x(_, {
                    "left-arrow": "",
                    title: p.$t("lotteryManual"),
                    onClickLeft: b,
                    "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)"
                }, null, 8, ["title"]), x(w, {
                    active: o.value,
                    "onUpdate:active": s[0] || (s[0] = y => o.value = y),
                    type: "card",
                    class: M({
                        dis: c(g) == "2"
                    })
                }, {
                    default: A(() => [x(m, {
                        title: p.$t("gamePlay")
                    }, {
                        default: A(() => [c(r) == "1" ? (n(), a("div", MN, [x(j8)])) : (n(), a("div", GN, [x(F9)]))]),
                        _: 1
                    }, 8, ["title"]), c(g) != "2" ? (n(), it(m, {
                        key: 0,
                        title: p.$t("rule")
                    }, {
                        default: A(() => [c(r) == "1" ? (n(), a("div", AN, [x(N9)])) : (n(), a("div", PN, [x(SN)]))]),
                        _: 1
                    }, 8, ["title"])) : C("v-if", !0)]),
                    _: 1
                }, 8, ["active", "class"])])
            }
        }
    });
const ON = K(DN, [
        ["__scopeId", "data-v-f14c68e9"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/Play/index.vue"]
    ]),
    yI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ON
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ba = l => (Rt("data-v-3e4c6499"), l = l(), St(), l),
    qN = {
        class: "TimeLeft__C"
    },
    EN = Ba(() => t("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "36",
        height: "36",
        viewBox: "0 0 36 36",
        fill: "none"
    }, [t("path", {
        d: "M23.67 3H12.33C6.66 3 5.25 4.515 5.25 10.56V27.45C5.25 31.44 7.44 32.385 10.095 29.535L10.11 29.52C11.34 28.215 13.215 28.32 14.28 29.745L15.795 31.77C17.01 33.375 18.975 33.375 20.19 31.77L21.705 29.745C22.785 28.305 24.66 28.2 25.89 29.52C28.56 32.37 30.735 31.425 30.735 27.435V10.56C30.75 4.515 29.34 3 23.67 3ZM11.67 18C10.845 18 10.17 17.325 10.17 16.5C10.17 15.675 10.845 15 11.67 15C12.495 15 13.17 15.675 13.17 16.5C13.17 17.325 12.495 18 11.67 18ZM11.67 12C10.845 12 10.17 11.325 10.17 10.5C10.17 9.675 10.845 9 11.67 9C12.495 9 13.17 9.675 13.17 10.5C13.17 11.325 12.495 12 11.67 12ZM24.345 17.625H16.095C15.48 17.625 14.97 17.115 14.97 16.5C14.97 15.885 15.48 15.375 16.095 15.375H24.345C24.96 15.375 25.47 15.885 25.47 16.5C25.47 17.115 24.96 17.625 24.345 17.625ZM24.345 11.625H16.095C15.48 11.625 14.97 11.115 14.97 10.5C14.97 9.885 15.48 9.375 16.095 9.375H24.345C24.96 9.375 25.47 9.885 25.47 10.5C25.47 11.115 24.96 11.625 24.345 11.625Z",
        fill: "currentColor"
    })], -1)),
    jN = {
        class: "TimeLeft__C-name"
    },
    HN = {
        class: "TimeLeft__C-num"
    },
    WN = {
        class: "TimeLeft__C-id"
    },
    VN = {
        class: "TimeLeft__C-text"
    },
    FN = {
        class: "TimeLeft__C-time"
    },
    UN = Ba(() => t("div", null, ":", -1)),
    KN = U({
        __name: "TimeLeft",
        props: {
            currentInfo: {
                type: Object,
                default: () => ({
                    gameNo: "loading",
                    currentTime: "",
                    beginTime: "",
                    passTime: 180,
                    time1: 0,
                    time2: 0,
                    time3: 0,
                    time4: 0
                })
            },
            winNum: {
                type: Array,
                default: [0, 0, 0, 0, 0]
            },
            gameName: {
                type: String,
                default: ""
            },
            currentGame: {
                type: Object,
                default: () => ({})
            }
        },
        setup(l) {
            const i = l,
                o = v(!1),
                r = Ee(),
                g = () => {
                    o.value = !0, r.getWinGoRule(i.currentGame.typeID)
                };
            return (b, d) => (n(), a(B, null, [t("div", qN, [t("div", {
                class: "TimeLeft__C-rule",
                onClick: g
            }, [EN, E(e(b.$t("winTrxIndicate")), 1)]), t("div", jN, e(i.gameName.replace("<br />", " ")), 1), t("div", HN, [(n(!0), a(B, null, G(l.winNum, (u, p) => (n(), a("div", {
                key: p,
                class: M(["n" + u])
            }, null, 2))), 128))]), t("div", WN, e(i.currentInfo.gameNo), 1), t("div", VN, e(b.$t("timeLeftToBuy")), 1), t("div", FN, [t("div", null, e(l.currentInfo.time1), 1), t("div", null, e(l.currentInfo.time2), 1), UN, t("div", null, e(l.currentInfo.time3), 1), t("div", null, e(l.currentInfo.time4), 1)])]), C(" 规则弹层 begin"), x(xi, {
                howPlayShow: o.value,
                gamePresentation: l.currentGame.gamePresentation,
                onClose: d[0] || (d[0] = u => o.value = !1)
            }, null, 8, ["howPlayShow", "gamePresentation"])], 64))
        }
    });
const XN = K(KN, [
        ["__scopeId", "data-v-3e4c6499"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/WinGo/TimeLeft.vue"]
    ]),
    QN = l => (Rt("data-v-7f36fe93"), l = l(), St(), l),
    YN = {
        class: "Betting__Popup-head"
    },
    ZN = {
        class: "Betting__Popup-head-title"
    },
    JN = {
        class: "Betting__Popup-head-selectName"
    },
    t7 = {
        class: "Betting__Popup-body"
    },
    e7 = {
        class: "Betting__Popup-body-line"
    },
    i7 = {
        class: "Betting__Popup-body-line-list"
    },
    n7 = ["onClick"],
    a7 = {
        class: "Betting__Popup-body-line"
    },
    o7 = {
        class: "Betting__Popup-body-line-btnL"
    },
    s7 = {
        class: "Betting__Popup-body-line"
    },
    l7 = QN(() => t("div", null, null, -1)),
    c7 = {
        class: "Betting__Popup-body-line-list"
    },
    r7 = ["onClick"],
    u7 = {
        class: "Betting__Popup-body-line"
    },
    d7 = {
        class: "Betting__Popup-foot"
    },
    p7 = {
        class: "Betting__Popup-foot-s bgcolor"
    },
    g7 = {
        class: "Betting__Popup-PreSale"
    },
    b7 = {
        class: "Betting__Popup-PreSale-head"
    },
    m7 = {
        class: "Betting__Popup-PreSale-body"
    },
    v7 = {
        class: "Betting__Popup-PreSale-foot"
    },
    _7 = U({
        __name: "BettingPopup",
        props: {
            currentGame: {
                type: Object,
                default: () => ({})
            },
            selectInfo: {
                type: Object,
                default: () => ({})
            },
            bettingPopupShow: {
                type: Boolean,
                default: v(!1)
            },
            betTypeList: {
                type: Array,
                default: []
            },
            multipleList: {
                type: Array,
                default: () => [1, 5, 10, 20, 50, 100]
            }
        },
        emits: ["update:bettingPopupShow", "update:selectInfo", "clearBetting", "submitBetting"],
        setup(l, {
            emit: i
        }) {
            const o = l,
                {
                    t: r
                } = kt(),
                g = v(!1),
                b = v(!0),
                d = J({
                    get() {
                        return o.bettingPopupShow || !1
                    },
                    set(N) {
                        i("update:bettingPopupShow", N)
                    }
                }),
                u = J(() => {
                    switch (o.selectInfo.selecttype) {
                        case 13:
                            return r("big");
                        case 14:
                            return r("small");
                        case 10:
                            return r("redColor");
                        case 11:
                            return r("greenColor");
                        case 12:
                            return r("purpleColor");
                        default:
                            return o.selectInfo.selecttype
                    }
                }),
                p = J(() => o.currentGame.typeName),
                s = N => {
                    switch (N) {
                        case 1:
                            o.selectInfo.count > 1 && (o.selectInfo.count--, h());
                            break;
                        case 2:
                            o.selectInfo.count++, h();
                            break
                    }
                },
                _ = N => {
                    N > 0 && (o.selectInfo.count = parseInt(N), h())
                },
                m = N => {
                    o.selectInfo.count = N, h()
                },
                w = N => {
                    o.selectInfo.coin = N, h()
                },
                y = () => {
                    g.value = !1, b.value = !0
                },
                f = () => {
                    if (o.selectInfo.count == 0) return Ot(r("bteNoCount"));
                    b.value ? i("submitBetting") : _e(r("agreePresaleRules"))
                },
                h = () => {
                    o.selectInfo.allCoin = o.selectInfo.coin * o.selectInfo.count
                };
            return (N, L) => {
                const k = W("van-field"),
                    $ = W("van-popup"),
                    T = Jt("throttle-click");
                return n(), a(B, null, [C(" 投注内容 begin "), x($, {
                    show: d.value,
                    "onUpdate:show": L[6] || (L[6] = R => d.value = R),
                    position: "bottom",
                    round: !0,
                    "close-on-click-overlay": !1
                }, {
                    default: A(() => [t("div", {
                        class: M([`Betting__Popup-${l.selectInfo.selecttype}`])
                    }, [t("div", YN, [t("div", ZN, e(p.value.replace("<br />", " ")), 1), t("div", JN, [t("span", null, e(c(r)("choose")), 1), t("span", null, e(u.value), 1)])]), t("div", t7, [t("div", e7, [E(e(c(r)("amount")) + " ", 1), t("div", i7, [(n(!0), a(B, null, G(l.betTypeList, (R, z) => (n(), a("div", {
                        key: z,
                        class: M(["Betting__Popup-body-line-item", {
                            bgcolor: l.selectInfo.coin == R
                        }]),
                        onClick: I => w(R)
                    }, e(R), 11, n7))), 128))])]), t("div", a7, [E(e(c(r)("numbers")) + " ", 1), t("div", o7, [t("div", {
                        class: M(["Betting__Popup-btn", {
                            bgcolor: l.selectInfo.count > 0
                        }]),
                        onClick: L[0] || (L[0] = R => s(1))
                    }, "-", 2), x(k, {
                        class: "Betting__Popup-input",
                        modelValue: l.selectInfo.count,
                        "onUpdate:modelValue": L[1] || (L[1] = R => l.selectInfo.count = R),
                        modelModifiers: {
                            number: !0
                        },
                        type: "digit",
                        maxlength: 4,
                        onInput: _
                    }, null, 8, ["modelValue"]), t("div", {
                        class: "Betting__Popup-btn bgcolor",
                        onClick: L[2] || (L[2] = R => s(2))
                    }, "+")])]), t("div", s7, [l7, t("div", c7, [(n(!0), a(B, null, G(l.multipleList, (R, z) => (n(), a("div", {
                        key: z,
                        class: M(["Betting__Popup-body-line-item", {
                            bgcolor: l.selectInfo.count == R
                        }]),
                        onClick: I => m(R)
                    }, " X" + e(R), 11, r7))), 128))])]), t("div", u7, [t("span", {
                        class: M(["Betting__Popup-agree", {
                            active: b.value
                        }]),
                        onClick: L[3] || (L[3] = R => b.value = !b.value)
                    }, e(c(r)("agree")), 3), t("span", {
                        onClick: L[4] || (L[4] = R => g.value = !0),
                        class: "Betting__Popup-preSaleShow"
                    }, e(c(r)("presaleRules")), 1)])]), t("div", d7, [t("div", {
                        class: "Betting__Popup-foot-c",
                        onClick: L[5] || (L[5] = R => i("clearBetting"))
                    }, e(c(r)("cancel")), 1), ft((n(), a("div", p7, [E(e(c(r)("totalAmount")) + " " + e(c(It)(l.selectInfo.count * l.selectInfo.coin || 0)), 1)])), [
                        [T, {
                            handler: f,
                            wait: 2e3
                        }]
                    ])])], 2)]),
                    _: 1
                }, 8, ["show"]), C(" 规则弹层 begin"), x($, {
                    show: g.value,
                    "onUpdate:show": L[7] || (L[7] = R => g.value = R),
                    "close-on-click-overlay": !1,
                    round: ""
                }, {
                    default: A(() => [t("div", g7, [t("div", b7, e(c(r)("presaleRules")), 1), t("div", m7, e(N.$t("betPopTXT")), 1), t("div", v7, [t("div", {
                        class: "Betting__Popup-PreSale-foot-btn",
                        onClick: y
                    }, e(c(r)("iKonw")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const k7 = K(_7, [
        ["__scopeId", "data-v-7f36fe93"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/common/BettingPopup.vue"]
    ]),
    h7 = {
        class: "Betting__C"
    },
    f7 = {
        class: "Betting__C-mark"
    },
    y7 = {
        class: "Betting__C-head"
    },
    $7 = {
        class: "Betting__C-numC"
    },
    w7 = ["onClick"],
    T7 = {
        class: "Betting__C-multiple"
    },
    C7 = ["onClick"],
    N7 = {
        class: "Betting__C-foot"
    },
    L7 = U({
        __name: "Betting",
        props: {
            currentInfo: {
                type: Object,
                default: () => ({})
            },
            ProhibitBuyTime: {
                type: Number,
                default: 5
            },
            currentGame: {
                type: Object,
                default: () => ({})
            },
            bettingApiFun: {
                type: Function,
                required: !0
            }
        },
        emits: ["betting", "changeBettingP"],
        setup(l, {
            expose: i,
            emit: o
        }) {
            const r = l,
                g = Ni.global.t,
                b = J(() => r.currentGame.betMultiple.split("|")),
                d = v(!1),
                u = v(""),
                p = v({
                    coin: 0,
                    count: b.value[0],
                    allCoin: 0,
                    gametype: 0,
                    typeid: 1,
                    issuenumber: "2020",
                    selecttype: 1
                });
            Dt(() => b, () => {
                p.value.count = b.value[0]
            }, {
                deep: !0,
                immediate: !0
            });
            const s = v(null),
                _ = v(0),
                m = v(!1),
                w = J(() => (r.currentInfo.passTime < r.ProhibitBuyTime && $(), r.currentInfo.passTime < r.ProhibitBuyTime)),
                y = J(() => r.currentGame.typeID),
                f = J(() => r.currentGame.scope ? r.currentGame.scope.split("|").map(R => Number(R)) : []),
                h = R => {
                    p.value.count = R, N()
                },
                N = () => {
                    p.value.allCoin = p.value.coin * p.value.count
                },
                L = (R, z, I) => {
                    p.value.gametype = I, p.value.selecttype = R, p.value.issuenumber = r.currentInfo.gameNo, p.value.typeid = y.value, p.value.coin = f.value[0], u.value = R, d.value = !0
                },
                k = () => {
                    m.value || (m.value = !0, s.value || (s.value = setInterval(function() {
                        _.value = Math.floor(Math.random() * 11)
                    }, 50)), setTimeout(function() {
                        _.value > 9 && (_.value = 9), clearInterval(s.value), m.value = !1, s.value = null, L(_.value, "color" + _.value, 1)
                    }, 5e3))
                },
                $ = () => {
                    d.value && (d.value = !1, p.value.coin = f.value[0], p.value.count = b.value[0], N(), o("changeBettingP", d.value))
                },
                T = async () => {
                    const R = await lt(r.bettingApiFun({
                        typeId: p.value.typeid,
                        issuenumber: p.value.issuenumber,
                        amount: p.value.coin,
                        betCount: Number(p.value.count),
                        gameType: p.value.gametype,
                        selectType: p.value.selecttype
                    }));
                    (R == null ? void 0 : R.code) === 0 && (_e(g("code" + R.msgCode)), o("betting", p.value.issuenumber), $())
                };
            return i({
                bettingPopupShow: d
            }), (R, z) => (n(), a("div", h7, [ft(t("div", f7, [t("div", null, e(r.currentInfo.time3 || "0"), 1), t("div", null, e(r.currentInfo.time4 || "0"), 1)], 512), [
                [te, w.value]
            ]), t("div", y7, [t("div", {
                class: "Betting__C-head-g",
                onClick: z[0] || (z[0] = I => L(11, "#5CBA47", 0))
            }, e(R.$t("greenColor")), 1), t("div", {
                class: "Betting__C-head-p",
                onClick: z[1] || (z[1] = I => L(12, "#9831E9", 0))
            }, e(R.$t("purpleColor")), 1), t("div", {
                class: "Betting__C-head-r",
                onClick: z[2] || (z[2] = I => L(10, "#FB4E4E", 0))
            }, e(R.$t("redColor")), 1)]), t("div", $7, [(n(), a(B, null, G(10, (I, S) => t("div", {
                key: S,
                class: M([_.value == I ? "active" : "", "Betting__C-numC-item" + S]),
                onClick: D => L(S, "color" + S, 1)
            }, null, 10, w7)), 64))]), t("div", T7, [t("div", {
                class: "Betting__C-multiple-l",
                onClick: k
            }, e(R.$t("randomBet")), 1), (n(!0), a(B, null, G(b.value, (I, S) => (n(), a("div", {
                key: S,
                class: M(["Betting__C-multiple-r", {
                    active: p.value.count == I
                }]),
                onClick: D => h(I)
            }, " X" + e(I), 11, C7))), 128))]), t("div", N7, [t("div", {
                class: "Betting__C-foot-b",
                onClick: z[3] || (z[3] = I => L(13, "#ffc511", 2))
            }, e(R.$t("big")), 1), t("div", {
                class: "Betting__C-foot-s",
                onClick: z[4] || (z[4] = I => L(14, "#5CBA47", 2))
            }, e(R.$t("small")), 1)]), x(k7, {
                currentGame: l.currentGame,
                selectInfo: p.value,
                bettingPopupShow: d.value,
                betTypeList: f.value,
                multipleList: b.value,
                onClearBetting: $,
                onSubmitBetting: T
            }, null, 8, ["currentGame", "selectInfo", "bettingPopupShow", "betTypeList", "multipleList"])]))
        }
    });
const Ma = K(L7, [
        ["__scopeId", "data-v-4aca9bd1"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/WinGo/Betting.vue"]
    ]),
    Pi = l => (Rt("data-v-481307ec"), l = l(), St(), l),
    z7 = {
        class: "GameRecord__C"
    },
    x7 = {
        class: "GameRecord__C-head"
    },
    I7 = {
        class: "GameRecord__C-body"
    },
    R7 = {
        key: 0
    },
    S7 = {
        key: 1
    },
    B7 = {
        class: "GameRecord__C-origin"
    },
    M7 = Pi(() => t("div", {
        class: "GameRecord__C-origin-I red"
    }, null, -1)),
    G7 = Pi(() => t("div", {
        class: "GameRecord__C-origin-I violet"
    }, null, -1)),
    A7 = {
        key: 1,
        class: "GameRecord__C-origin-I green"
    },
    P7 = {
        key: 2,
        class: "GameRecord__C-origin-I red"
    },
    D7 = Pi(() => t("div", {
        class: "GameRecord__C-origin-I green"
    }, null, -1)),
    O7 = Pi(() => t("div", {
        class: "GameRecord__C-origin-I violet"
    }, null, -1)),
    q7 = {
        key: 1,
        class: "GameRecord__C-body-empty"
    },
    E7 = {
        key: 0,
        class: "GameRecord__C-foot"
    },
    j7 = {
        class: "GameRecord__C-foot-page"
    },
    H7 = U({
        __name: "GameRecord",
        props: {
            typeid: {
                type: Number,
                required: !0
            }
        },
        emits: ["changefive"],
        setup(l, {
            expose: i,
            emit: o
        }) {
            const r = l,
                g = v([]),
                b = v(4),
                d = v(10),
                u = v(1),
                p = () => {
                    u.value--, _()
                },
                s = () => {
                    u.value++, _()
                },
                _ = async (y = !1) => {
                    if (r.typeid == null) return;
                    y && (u.value = 1);
                    const [f, h] = await ee(_a({
                        pageSize: d.value,
                        pageNo: u.value,
                        typeId: r.typeid
                    }));
                    g.value = h.list || [], b.value = h.totalPage, y && o("changefive", h.list.slice(0, 5).map(N => N.number))
                },
                m = y => parseInt(y, 10) % 2 !== 0,
                w = y => {
                    let f = "";
                    switch (m(y) ? f = "greenColor" : f = "defaultColor", y) {
                        case "0":
                            f = "mixedColor0";
                            break;
                        case "5":
                            f = "mixedColor5";
                            break
                    }
                    return f
                };
            return i({
                getData: _
            }), ke(() => {
                _()
            }), (y, f) => {
                const h = W("van-col"),
                    N = W("van-row"),
                    L = W("van-icon");
                return n(), a("div", z7, [t("div", x7, [x(N, null, {
                    default: A(() => [x(h, {
                        span: "8"
                    }, {
                        default: A(() => [E(e(y.$t("betSerial")), 1)]),
                        _: 1
                    }), x(h, {
                        span: "5"
                    }, {
                        default: A(() => [E(e(y.$t("num")), 1)]),
                        _: 1
                    }), x(h, {
                        span: "5"
                    }, {
                        default: A(() => [E(e(y.$t("bigOrSmall")), 1)]),
                        _: 1
                    }), x(h, {
                        span: "6"
                    }, {
                        default: A(() => [E(e(y.$t("color")), 1)]),
                        _: 1
                    })]),
                    _: 1
                })]), t("div", I7, [g.value.length ? (n(!0), a(B, {
                    key: 0
                }, G(g.value, (k, $) => (n(), it(N, {
                    key: $
                }, {
                    default: A(() => [x(h, {
                        span: "8"
                    }, {
                        default: A(() => [E(e(k.issueNumber), 1)]),
                        _: 2
                    }, 1024), x(h, {
                        span: "5",
                        class: "numcenter"
                    }, {
                        default: A(() => [t("div", {
                            class: M(["GameRecord__C-body-num", w(k.number)])
                        }, e(k.number), 3)]),
                        _: 2
                    }, 1024), x(h, {
                        span: "5"
                    }, {
                        default: A(() => [Number(k.number) > 4 ? (n(), a("span", R7, e(y.$t("big")), 1)) : (n(), a("span", S7, e(y.$t("small")), 1))]),
                        _: 2
                    }, 1024), x(h, {
                        span: "6"
                    }, {
                        default: A(() => [t("div", B7, [k.number == "0" ? (n(), a(B, {
                            key: 0
                        }, [M7, G7], 64)) : C("v-if", !0), k.number == "1" || k.number == "3" || k.number == "7" || k.number == "9" ? (n(), a("div", A7)) : C("v-if", !0), k.number == "2" || k.number == "4" || k.number == "6" || k.number == "8" ? (n(), a("div", P7)) : C("v-if", !0), k.number == "5" ? (n(), a(B, {
                            key: 3
                        }, [D7, O7], 64)) : C("v-if", !0)])]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024))), 128)) : (n(), a("div", q7, [x(de)]))]), g.value.length ? (n(), a("div", E7, [t("div", {
                    class: M(["GameRecord__C-foot-previous", {
                        disabled: u.value <= 1
                    }]),
                    onClick: p
                }, [x(L, {
                    name: "arrow-left",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2), t("div", j7, e(u.value) + "/" + e(b.value), 1), t("div", {
                    class: M(["GameRecord__C-foot-next", {
                        disabled: u.value >= b.value
                    }]),
                    onClick: s
                }, [x(L, {
                    name: "arrow",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2)])) : C("v-if", !0)])
            }
        }
    });
const W7 = K(H7, [
        ["__scopeId", "data-v-481307ec"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/WinGo/GameRecord.vue"]
    ]),
    V7 = {
        class: "Trend__C"
    },
    F7 = {
        class: "Trend__C-head"
    },
    U7 = {
        class: "Trend__C-body1"
    },
    K7 = {
        class: "Trend__C-body1-line"
    },
    X7 = {
        class: "Trend__C-body1-line lottery"
    },
    Q7 = {
        key: 0,
        class: "Trend__C-body1-line-num"
    },
    Y7 = {
        key: 0,
        class: "Trend__C-body1-line"
    },
    Z7 = {
        class: "Trend__C-body1-line-num"
    },
    J7 = {
        key: 1,
        class: "Trend__C-body1-line"
    },
    tL = {
        class: "Trend__C-body1-line-num"
    },
    eL = {
        key: 2,
        class: "Trend__C-body1-line"
    },
    iL = {
        class: "Trend__C-body1-line-num"
    },
    nL = {
        key: 3,
        class: "Trend__C-body1-line"
    },
    aL = {
        class: "Trend__C-body1-line-num"
    },
    oL = {
        class: "Trend__C-body2"
    },
    sL = ["IssueNumber", "Number", "Colour", "rowId"],
    lL = {
        class: "Trend__C-body2-IssueNumber"
    },
    cL = {
        class: "Trend__C-body2-Num"
    },
    rL = ["id"],
    uL = {
        key: 1,
        class: "Trend__C-body2-empty"
    },
    dL = {
        key: 0,
        class: "Trend__C-foot"
    },
    pL = {
        class: "Trend__C-foot-page"
    },
    gL = U({
        __name: "Trend",
        props: {
            typeid: {
                type: Number,
                required: !0
            },
            listApi: {
                type: Function,
                required: !0
            },
            EmerdApi: {
                type: Function,
                required: !0
            }
        },
        emits: ["changefive"],
        setup(l, {
            expose: i,
            emit: o
        }) {
            const r = l,
                g = v([]),
                b = v([]),
                d = v(),
                u = v(),
                p = v(),
                s = v(),
                _ = v(),
                m = v(1),
                w = v(4);

            function y() {
                Yt(() => {
                    for (let $ = 0; $ < b.value.length; $++) b.value[$ + 1] && f(b.value[$], b.value[$ + 1])
                })
            }

            function f($, T) {
                let R = parseInt($.number),
                    z = parseInt(T.number);
                var I = document.getElementById("myCanvas" + $.rowId);
                if (I && I.getContext) {
                    var S = I.getContext("2d");
                    S.clearRect(0, 0, I.width, I.height), S.beginPath(), S.moveTo(R == 0 ? 15 : R * 29 + 15, 0), S.lineTo(z == 0 ? 15 : z * 29 + 15, I.height), S.strokeStyle = "red", S.stroke(), S.closePath()
                }
            }
            const h = () => {
                    m.value--, k()
                },
                N = () => {
                    m.value++, k()
                },
                L = async ($ = !1) => {
                    if (r.typeid == null) return;
                    $ && (m.value = 1, k($));
                    const [T, R] = await ee(r.EmerdApi({
                        typeId: r.typeid
                    }));
                    if (R.length) {
                        const z = Object.keys(R[0]).filter(I => I.startsWith("number_"));
                        g.value = R.map(I => {
                            const S = {
                                list: []
                            };
                            return S.type = I.type, S.list = [], z.forEach(D => {
                                S.list.push(I[D])
                            }), S
                        })
                    }
                    d.value = g.value[0], u.value = g.value[1], p.value = g.value[2], s.value = g.value[3], _.value = g.value[4]
                },
                k = async ($ = !1) => {
                    var z;
                    if (r.typeid == null) return;
                    $ && (m.value = 1);
                    const [T, R] = await ee(r.listApi({
                        pageSize: 10,
                        pageNo: m.value,
                        typeId: r.typeid
                    }));
                    if (R.list ? b.value = R.list.map((I, S) => (I.rowId = S, I)) || [] : R.data.gameslist && (b.value = R.data.gameslist.map((I, S) => (I.rowId = S, I)) || []), w.value = R.totalPage, $) {
                        const I = ((z = R.data) == null ? void 0 : z.gameslist) || R.list || [];
                        o("changefive", I.slice(0, 5).map(S => S.number))
                    }
                    y()
                };
            return i({
                getData: L
            }), ke(() => {
                L(), k()
            }), ($, T) => {
                const R = W("van-col"),
                    z = W("van-row"),
                    I = W("van-icon");
                return n(), a("div", V7, [t("div", F7, [x(z, null, {
                    default: A(() => [x(R, {
                        span: "8"
                    }, {
                        default: A(() => [E(e($.$t("betIssue")), 1)]),
                        _: 1
                    }), x(R, {
                        span: "16"
                    }, {
                        default: A(() => [E(e($.$t("number")), 1)]),
                        _: 1
                    })]),
                    _: 1
                })]), t("div", U7, [t("div", K7, e($.$t("trendDesc1")), 1), t("div", X7, [t("div", null, e($.$t("trendDesc2")), 1), d.value ? (n(), a("div", Q7, [(n(), a(B, null, G(10, S => t("div", {
                    key: S
                }, e(S - 1), 1)), 64))])) : C("v-if", !0)]), s.value && s.value.type == 2 ? (n(), a("div", Y7, [t("div", null, e($.$t("trendDesc3")), 1), t("div", Z7, [(n(!0), a(B, null, G(s.value.list, (S, D) => (n(), a("div", {
                    key: "4" + D
                }, e(S), 1))), 128))])])) : C("v-if", !0), u.value && u.value.type == 4 ? (n(), a("div", J7, [t("div", null, e($.$t("trendDesc4")), 1), t("div", tL, [(n(!0), a(B, null, G(u.value.list, (S, D) => (n(), a("div", {
                    key: "2" + D
                }, e(S), 1))), 128))])])) : C("v-if", !0), _.value && _.value.type == 1 ? (n(), a("div", eL, [t("div", null, e($.$t("trendDesc5")), 1), t("div", iL, [(n(!0), a(B, null, G(_.value.list, (S, D) => (n(), a("div", {
                    key: "5" + D
                }, e(S), 1))), 128))])])) : C("v-if", !0), p.value && p.value.type == 3 ? (n(), a("div", nL, [t("div", null, e($.$t("trendDesc6")), 1), t("div", aL, [(n(!0), a(B, null, G(p.value.list, (S, D) => (n(), a("div", {
                    key: "3" + D
                }, e(S), 1))), 128))])])) : C("v-if", !0)]), t("div", oL, [b.value.length ? (n(!0), a(B, {
                    key: 0
                }, G(b.value, (S, D) => (n(), a("div", {
                    key: D,
                    IssueNumber: S.issueNumber,
                    Number: S.number,
                    Colour: S.colour,
                    rowId: S.rowId
                }, [x(z, null, {
                    default: A(() => [x(R, {
                        span: "8"
                    }, {
                        default: A(() => [t("div", lL, e(S.issueNumber), 1)]),
                        _: 2
                    }, 1024), x(R, {
                        span: "16"
                    }, {
                        default: A(() => [t("div", cL, [t("canvas", {
                            canvas: "",
                            id: "myCanvas" + S.rowId,
                            ref_for: !0,
                            ref: "canvas",
                            class: "line-canvas"
                        }, null, 8, rL), (n(), a(B, null, G(10, P => t("div", {
                            class: M(["Trend__C-body2-Num-item", Number(S.number) == P - 1 ? "action" + (P - 1) : ""]),
                            key: P
                        }, e(P - 1), 3)), 64)), t("div", {
                            class: M(["Trend__C-body2-Num-BS", {
                                isB: Number(S.number) > 4
                            }])
                        }, e(Number(S.number) > 4 ? "B" : "S"), 3)])]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024)], 8, sL))), 128)) : (n(), a("div", uL, [x(de)]))]), b.value.length ? (n(), a("div", dL, [t("div", {
                    class: M(["Trend__C-foot-previous", {
                        disabled: m.value <= 1
                    }]),
                    onClick: h
                }, [x(I, {
                    name: "arrow-left",
                    class: "Trend__C-icon",
                    size: "20"
                })], 2), t("div", pL, e(m.value) + "/" + e(w.value), 1), t("div", {
                    class: M(["Trend__C-foot-next", {
                        disabled: m.value >= w.value
                    }]),
                    onClick: N
                }, [x(I, {
                    name: "arrow",
                    class: "Trend__C-icon",
                    size: "20"
                })], 2)])) : C("v-if", !0)])
            }
        }
    });
const Ga = K(gL, [
        ["__scopeId", "data-v-d485a39d"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/WinGo/Trend.vue"]
    ]),
    bL = {
        key: 1,
        class: "WinningTip__C-body-l1"
    },
    mL = {
        class: "WinningNum"
    },
    vL = {
        class: "WinningTip__C-body-l3"
    },
    _L = {
        key: 0,
        class: "isLose"
    },
    kL = {
        class: "head"
    },
    hL = {
        class: "bonus"
    },
    fL = {
        class: "gameDetail"
    },
    yL = {
        class: "WinningTip__C-body-l4"
    },
    $L = ["onClick"],
    wL = U({
        __name: "WinningTips",
        setup(l, {
            expose: i
        }) {
            const {
                t: o
            } = kt(), r = J(() => d.value[0] ? d.value[0].state == 0 : !1), g = J(() => d.value[0] || {}), b = v(!1), d = v([]), u = v({
                red: o("winColor1"),
                green: o("winColor2"),
                "red,violet": o("winColor3"),
                "green,violet": o("winColor4"),
                violet: o("winColor5")
            });
            let p = v();
            const s = () => {
                clearTimeout(p.value), d.value.shift(), b.value && d.value.length && (p.value = setTimeout(() => {
                    s()
                }, 1e3 * 3))
            };
            Dt(() => d.value.length, y => {
                y ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
            });
            const _ = () => {
                    b.value = !b.value, b.value ? p.value = setTimeout(() => {
                        s()
                    }, 1e3 * 3) : clearTimeout(p.value)
                },
                m = y => {
                    d.value.push(...y), b.value && (p.value = setTimeout(() => {
                        s()
                    }, 1e3 * 3))
                },
                w = () => {
                    d.value = []
                };
            return i({
                showMark: m
            }), (y, f) => ft((n(), a("div", {
                class: "WinningTip__C",
                onClick: s
            }, [t("div", {
                class: M(["WinningTip__C-body", {
                    isL: r.value
                }])
            }, [r.value ? (n(), a("div", {
                key: 0,
                class: M(["WinningTip__C-body-l1", {
                    isL: r.value
                }])
            }, e(y.$t("k3WarningTip1")), 3)) : (n(), a("div", bL, e(y.$t("k3WarningTip2")), 1)), t("div", {
                class: M(["WinningTip__C-body-l2", [`type${g.value.number}`]])
            }, [E(e(y.$t("winTips3")) + " ", 1), t("div", null, e(u.value[g.value.colour]), 1), t("div", mL, e(g.value.number), 1), t("div", null, e(g.value.number > 4 ? y.$t("big") : y.$t("small")), 1)], 2), t("div", vL, [r.value ? (n(), a("div", _L, e(y.$t("winTips4")), 1)) : (n(), a(B, {
                key: 1
            }, [t("div", kL, e(y.$t("winTips5")), 1), t("div", hL, e(c(It)(Number(g.value.winAmount))), 1)], 64)), t("div", fL, e(y.$t("winTips6")) + e(g.value.typeName) + " " + e(g.value.issueNumber), 1)]), t("div", yL, [t("div", {
                class: M(["acitveBtn", {
                    active: b.value
                }]),
                onClick: be(_, ["stop"])
            }, null, 10, $L), E(" " + e(y.$t("autoShutOff3s")), 1)]), t("div", {
                class: "closeBtn",
                onClick: w
            })], 2)], 512)), [
                [te, d.value.length]
            ])
        }
    });
const Aa = K(wL, [
        ["__scopeId", "data-v-e44179e3"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/common/WinningTips.vue"]
    ]),
    TL = {
        class: "WinGo__C"
    },
    CL = {
        class: "WinGo__C-head-more"
    },
    NL = U({
        __name: "index",
        setup(l) {
            const i = {
                    GameRecord: W7,
                    Trend: Ga,
                    MyGameRecord: bn
                },
                o = v(),
                r = v(),
                g = v(),
                b = v(!1),
                d = v("GameRecord"),
                u = ht(),
                p = Ee();
            p.getWinGoData();
            const s = p.getWingo,
                _ = v(0),
                m = v(localStorage.getItem("volumeShow") || "1"),
                w = v(!1),
                y = v(null),
                f = v({
                    gameNo: "loading",
                    currentTime: "",
                    beginTime: "",
                    passTime: 180,
                    time1: 0,
                    time2: 0,
                    time3: 0,
                    time4: 0
                }),
                h = v(5),
                N = v(""),
                L = v(!1),
                k = v(null),
                $ = J(() => s[_.value] || {}),
                T = v([0, 0, 0, 0, 0]),
                R = Ye(),
                z = J(() => R.getIsShowLotteryDragon);
            zt(() => {
                P()
            }), Ve(() => {
                clearInterval(y.value), At.value.forEach(gt => {
                    clearInterval(gt)
                }), Mt.value && clearTimeout(Mt.value)
            }), Dt(() => Me().visibility, gt => {
                gt === 0 ? clearInterval(y.value) : (P(), V(_.value))
            });
            const I = () => {
                    sessionStorage.setItem("clickedGameType", "lottery"), u.push({
                        path: "/"
                    })
                },
                S = () => {
                    m.value == "1" ? m.value = "2" : m.value = "1", localStorage.setItem("volumeShow", m.value)
                },
                D = gt => {
                    u.push({
                        name: gt
                    })
                },
                P = () => {
                    k.value == null && V(0)
                },
                V = gt => {
                    p.getWinGoData(), _.value = gt, k.value = s[gt].typeID, F(k.value), Yt(() => {
                        o.value.getData(k.value)
                    })
                },
                F = async gt => {
                    d.value == "MyGameRecord" && nt(gt);
                    const [et, at] = await ee(ks({
                        typeId: gt
                    }));
                    f.value.gameNo = at.issueNumber, f.value.currentTime = at.serviceTime.replace(/-/g, "/"), f.value.beginTime = at.startTime.replace(/-/g, "/"), ut()
                },
                nt = async gt => {
                    const et = await lt(hs({
                        typeId: gt
                    }));
                    et && (T.value = et.data.number.split(","))
                },
                ut = () => {
                    const gt = new Date(f.value.currentTime).getTime(),
                        et = new Date(f.value.beginTime).getTime();
                    let at = (gt - et) / 1e3,
                        Q = s[_.value];
                    if (at > Q.intervalM * 60 && (at = Q.intervalM * 60), f.value.passTime = Q.intervalM * 60 - at, f.value.passTime < 0) {
                        N.value = "An error occurred, please contact customer service。The game time is " + Q.intervalM + " minutes,start time is " + f.value.beginTime + ",current time is" + f.value.currentTime + "!", w.value = !0;
                        return
                    }
                    ct()
                },
                ct = () => {
                    clearInterval(y.value), ot(!1), y.value = setInterval(function() {
                        ot()
                    }, 1e3)
                },
                ot = (gt = !0) => {
                    if (f.value.passTime <= h.value && (L.value = !1), m.value == "1" && (f.value.passTime <= h.value && f.value.passTime > 1 ? Z(1) : f.value.passTime == 1 && Z(2)), f.value.passTime > 0) {
                        let et = f.value.passTime;
                        f.value.time2 = Math.floor(et / 60), f.value.time3 = Math.floor(et % 60 / 10), f.value.time4 = Math.floor(et % 10), f.value.passTime--
                    } else clearInterval(y.value), gt && _t()
                },
                Z = (gt = 1) => {
                    const et = document.getElementById(`voice${gt}`);
                    et && et.play()
                },
                _t = () => {
                    F(k.value || 0), g.value.getWinsUserAmount(!1), o.value.getData(!0)
                },
                Bt = v({}),
                At = v([]),
                dt = gt => {
                    if (g.value.getWinsUserAmount(!1), o.value.getData(), Bt.value[gt]) return;
                    Bt.value[gt] = !0;
                    const {
                        time1: et,
                        time2: at,
                        time3: Q,
                        time4: Y
                    } = f.value, H = (et * 10 * 60 + at * 60 + Q * 10 + Y) * 1e3 + Math.floor(Math.random() * 2e3) + 1e3;
                    At.value[$.value.intervalM] = setTimeout(() => {
                        Gt(gt)
                    }, H)
                },
                yt = gt => {
                    b.value = gt
                },
                $t = gt => {
                    T.value = gt
                },
                Mt = v(null),
                Gt = async gt => {
                    const [et, at] = await ee(fs({
                        issueNumber: [gt]
                    }));
                    if (at) {
                        const Q = at.filter(Y => Y.state != 2);
                        if (!Q.length) return;
                        r.value.showMark(Q), delete Bt.value[gt]
                    }
                };
            return (gt, et) => {
                const at = W("NavBar");
                return n(), a("div", TL, [x(at, {
                    "left-arrow": "",
                    onClickLeft: I,
                    class: "lottery",
                    headLogo: !0
                }, {
                    right: A(() => [t("div", CL, [t("div", {
                        onClick: et[0] || (et[0] = Q => D("CustomerService"))
                    }), t("div", {
                        class: M({
                            disableVoice: m.value == "2"
                        }),
                        onClick: S
                    }, null, 2)])]),
                    _: 1
                }), C(" 钱包余额 "), x(Li, {
                    ref_key: "WallteRef",
                    ref: g
                }, null, 512), x(hi, {
                    key: "wingo"
                }), C(" 游戏类型 "), x(zi, {
                    gameList: c(s),
                    currentGameIndex: _.value,
                    onChangeGame: V
                }, null, 8, ["gameList", "currentGameIndex"]), C(" 游戏开始时间倒计时 "), x(XN, {
                    currentInfo: f.value,
                    winNum: T.value,
                    gameName: $.value.typeName,
                    currentGame: $.value
                }, null, 8, ["currentInfo", "winNum", "gameName", "currentGame"]), C(" 投注表 "), x(Ma, {
                    currentInfo: f.value,
                    currentGame: $.value,
                    VoiceType: m.value,
                    typeid: k.value,
                    onBetting: dt,
                    onChangeBettingP: yt,
                    "betting-api-fun": c(ra)
                }, null, 8, ["currentInfo", "currentGame", "VoiceType", "typeid", "betting-api-fun"]), C(" 记录导航 "), x(Ii, {
                    record: d.value,
                    onChangeC: et[1] || (et[1] = Q => d.value = Q)
                }, null, 8, ["record"]), C(" 动态展示对应的组件 "), (n(), it(Qe, null, [(n(), it(qe(i[d.value]), {
                    ref_key: "RecordComponent",
                    ref: o,
                    typeid: k.value,
                    ApiFun: c(ln),
                    listApi: c(_a),
                    EmerdApi: c(la),
                    goPathName: "AllLotteryGames-BettingRecordWin",
                    onChangefive: $t
                }, null, 40, ["typeid", "ApiFun", "listApi", "EmerdApi"]))], 1024)), C(" 弹窗组件 "), x(xe, {
                    show: w.value,
                    onConfirm: et[2] || (et[2] = Q => D("/login"))
                }, {
                    content: A(() => [t("div", null, e(N.value), 1)]),
                    _: 1
                }, 8, ["show"]), C(" 中奖提示组件 "), x(Aa, {
                    ref_key: "WinningTipsRef",
                    ref: r
                }, null, 512), z.value ? (n(), it(Ri, {
                    key: 0
                })) : C("v-if", !0), x(Si)])
            }
        }
    });
const LL = K(NL, [
        ["__scopeId", "data-v-5d71c3fd"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/WinGo/index.vue"]
    ]),
    $I = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: LL
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    kn = l => (Rt("data-v-3c1bee29"), l = l(), St(), l),
    zL = {
        class: "TimeLeft__C"
    },
    xL = {
        class: "TimeLeft__C-l1"
    },
    IL = {
        class: "TimeLeft__C-l1-l"
    },
    RL = {
        class: "TimeLeft__C-l1-no"
    },
    SL = kn(() => t("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "36",
        height: "36",
        viewBox: "0 0 36 36",
        fill: "none"
    }, [t("path", {
        d: "M9.67074 29.1107L9.66322 29.1182L9.65598 29.126C9.02654 29.8017 8.45747 30.2157 7.98006 30.4218C7.50853 30.6254 7.16285 30.6135 6.91422 30.5064C6.6612 30.3975 6.39655 30.1416 6.18925 29.6333C5.98114 29.123 5.85 28.3992 5.85 27.45V10.56C5.85 7.52835 6.21824 5.86758 7.1019 4.92303C7.97224 3.99272 9.4962 3.6 12.33 3.6H23.67C26.5041 3.6 28.0275 3.99282 28.8959 4.92264C29.7774 5.86659 30.1425 7.52679 30.135 10.5585V10.56V27.435C30.135 28.3846 30.0047 29.1087 29.7975 29.6192C29.5911 30.1278 29.3276 30.383 29.076 30.4916C28.8287 30.5983 28.4837 30.6106 28.011 30.4067C27.5326 30.2004 26.9615 29.7861 26.3282 29.1102C25.6005 28.3296 24.6554 27.9468 23.7086 27.9984C22.7618 28.0499 21.8639 28.5332 21.225 29.385L21.2246 29.3856L19.7116 31.4079C19.7113 31.4083 19.711 31.4087 19.7107 31.4091C19.1996 32.0836 18.5725 32.3738 17.9925 32.3738C17.4125 32.3738 16.7854 32.0836 16.2743 31.4091C16.274 31.4087 16.2737 31.4083 16.2734 31.4079L14.7606 29.3858C14.7605 29.3857 14.7605 29.3856 14.7604 29.3856C13.4723 27.6623 11.1634 27.5349 9.67973 29.1017L9.67074 29.1107ZM9.57 16.5C9.57 17.6564 10.5136 18.6 11.67 18.6C12.8264 18.6 13.77 17.6564 13.77 16.5C13.77 15.3436 12.8264 14.4 11.67 14.4C10.5136 14.4 9.57 15.3436 9.57 16.5ZM9.57 10.5C9.57 11.6564 10.5136 12.6 11.67 12.6C12.8264 12.6 13.77 11.6564 13.77 10.5C13.77 9.34363 12.8264 8.4 11.67 8.4C10.5136 8.4 9.57 9.34363 9.57 10.5ZM16.095 18.225H24.345C25.2914 18.225 26.07 17.4464 26.07 16.5C26.07 15.5536 25.2914 14.775 24.345 14.775H16.095C15.1486 14.775 14.37 15.5536 14.37 16.5C14.37 17.4464 15.1486 18.225 16.095 18.225ZM16.095 12.225H24.345C25.2914 12.225 26.07 11.4464 26.07 10.5C26.07 9.55363 25.2914 8.775 24.345 8.775H16.095C15.1486 8.775 14.37 9.55363 14.37 10.5C14.37 11.4464 15.1486 12.225 16.095 12.225Z",
        stroke: "currentColor",
        "stroke-width": "1.2"
    })], -1)),
    BL = kn(() => t("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "36",
        height: "36",
        viewBox: "0 0 36 36",
        fill: "none"
    }, [t("path", {
        d: "M22.3206 29.4914C20.713 30.1573 18.99 30.5 17.25 30.5C13.7359 30.5 10.3657 29.104 7.88084 26.6192C5.39598 24.1343 4 20.7641 4 17.25C4 13.7359 5.39598 10.3657 7.88083 7.88083C10.3657 5.39598 13.7359 4 17.25 4C18.99 4 20.713 4.34272 22.3206 5.0086C23.9281 5.67447 25.3888 6.65046 26.6192 7.88083C27.8495 9.11121 28.8255 10.5719 29.4914 12.1794C30.1573 13.787 30.5 15.51 30.5 17.25C30.5 18.99 30.1573 20.713 29.4914 22.3206C28.8255 23.9281 27.8495 25.3888 26.6192 26.6192C25.3888 27.8495 23.9281 28.8255 22.3206 29.4914ZM31.95 31.9985C31.9436 31.9985 31.9355 31.9971 31.9282 31.9941C31.9242 31.9925 31.922 31.9911 31.9214 31.9906L29.1369 29.2062C29.1268 29.1953 29.1211 29.1809 29.1211 29.166C29.1211 29.152 29.1261 29.1385 29.1351 29.1279C29.1381 29.1254 29.1407 29.124 29.1432 29.123C29.1472 29.1213 29.1535 29.1197 29.1619 29.1197C29.1774 29.1197 29.1952 29.1249 29.2127 29.1404L31.9929 31.9206C31.9948 31.9226 31.9963 31.9243 31.9975 31.926C31.9989 31.928 31.9998 31.9299 32.0005 31.9317C32.0022 31.9357 32.0037 31.942 32.0037 31.9504C32.0037 31.9608 32.0014 31.9723 31.9952 31.984C31.9756 31.9955 31.9587 31.9985 31.95 31.9985Z",
        stroke: "currentColor",
        "stroke-width": "2"
    })], -1)),
    ML = {
        class: "TimeLeft__C-l2"
    },
    GL = {
        class: "TimeLeft__C-time"
    },
    AL = kn(() => t("div", {
        notime: ""
    }, ":", -1)),
    PL = {
        class: "TimeLeft__C-l3"
    },
    DL = U({
        __name: "TimeLeft",
        props: {
            currentInfo: {
                type: Object,
                default: () => ({
                    gameNo: "loading",
                    currentTime: "",
                    beginTime: "",
                    passTime: 180,
                    time1: 0,
                    time2: 0,
                    time3: 0,
                    time4: 0
                })
            },
            settled: {
                type: Object,
                default: () => ({})
            },
            gameName: {
                type: String,
                default: ""
            },
            currentGame: {
                type: Object,
                default: () => ({})
            }
        },
        setup(l) {
            const i = l,
                o = v(!1),
                r = ht(),
                g = J(() => {
                    const {
                        blockID: s
                    } = i.settled;
                    if (!s) return [0, 0, 0, 0, 0];
                    let _ = s.substring(s.length - 5).toUpperCase();
                    return /\d/.test(_) ? [..._] : [...s.substring(s.length - 5, s.length - 10).toUpperCase()]
                }),
                b = J(() => {
                    var s;
                    return (s = i.settled) == null ? void 0 : s.number
                }),
                d = () => {
                    let s = "https://tronscan.org";
                    r.push({
                        name: "AllLotteryGames-WinTrxIframe",
                        query: {
                            url: s
                        }
                    })
                },
                u = Ee(),
                p = () => {
                    o.value = !0, u.getTrxRule(i.currentGame.typeID)
                };
            return (s, _) => (n(), a("div", zL, [t("div", xL, [t("div", IL, [t("div", RL, e(s.$t("winTrxNum")), 1), t("div", {
                class: "TimeLeft__C-l1-tip",
                onClick: p
            }, [SL, E(e(s.$t("winTrxIndicate")), 1)])]), t("div", {
                class: "TimeLeft__C-l1-r",
                onClick: d
            }, [BL, E(e(s.$t("winTrxPub")), 1)])]), t("div", ML, [t("div", null, e(i.currentInfo.gameNo), 1), t("div", GL, [t("span", null, e(s.$t("winTrxTime")), 1), t("div", null, e(l.currentInfo.time1), 1), t("div", null, e(l.currentInfo.time2), 1), AL, t("div", null, e(l.currentInfo.time3), 1), t("div", null, e(l.currentInfo.time4), 1)])]), t("div", PL, [(n(!0), a(B, null, G(g.value, (m, w) => (n(), a(B, {
                key: w
            }, [b.value == m ? (n(), a("p", {
                key: 0,
                class: M(["num" + m, b.value == m && "prize" + m])
            }, null, 2)) : (n(), a("div", {
                key: 1,
                class: M(["num" + m, b.value == m && "prize" + m])
            }, null, 2))], 64))), 128))]), C(" 规则弹层 begin"), x(xi, {
                howPlayShow: o.value,
                gamePresentation: l.currentGame.gamePresentation,
                onClose: _[0] || (_[0] = m => o.value = !1)
            }, null, 8, ["howPlayShow", "gamePresentation"])]))
        }
    });
const OL = K(DL, [
        ["__scopeId", "data-v-3c1bee29"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/WinTrx/TimeLeft.vue"]
    ]),
    qL = {
        class: "GameRecord__C"
    },
    EL = {
        class: "GameRecord__C-head"
    },
    jL = {
        class: "GameRecord__C-body"
    },
    HL = {
        class: "Binquire"
    },
    WL = {
        class: "numberC"
    },
    VL = {
        key: 1,
        class: "GameRecord__C-body-empty"
    },
    FL = {
        key: 0,
        class: "GameRecord__C-foot"
    },
    UL = {
        class: "GameRecord__C-foot-page"
    },
    KL = U({
        __name: "GameRecord",
        props: {
            typeid: {
                type: Number,
                required: !0
            }
        },
        setup(l, {
            expose: i
        }) {
            const o = l,
                r = v([]),
                g = v(4),
                b = v(10),
                d = v(1),
                u = ht(),
                p = () => {
                    d.value--, _()
                },
                s = () => {
                    d.value++, _()
                },
                _ = async (w = !1) => {
                    if (o.typeid == null) return;
                    w && (d.value = 1);
                    const [y, f] = await ee(ka({
                        pageSize: b.value,
                        pageNo: d.value,
                        typeId: o.typeid
                    }));
                    if (!f) return;
                    let h = f == null ? void 0 : f.data.date.serviceTime;
                    r.value = f.data.gameslist.map(N => {
                        if (N.blockID) {
                            var L = N.blockID.length,
                                k = N.blockID.substring(L - 4, L);
                            N.blockName = "**" + k
                        }
                        if (N.issueNumber) {
                            var $ = N.issueNumber.substring(0, 3),
                                T = N.issueNumber.length,
                                R = N.issueNumber.substring(T - 4, T);
                            N.issue = $ + "**" + R
                        }
                        if (N.blockTime) {
                            let z = h.split(" "),
                                I = N.blockTime.split(" ");
                            N.day = z[0].substring(8, 10) == I[0].substring(8, 10), N.time = I[1]
                        }
                        return N
                    }), g.value = f.totalPage
                },
                m = w => {
                    let y = `https://tronscan.org/#/block/${w}`;
                    u.push({
                        name: "AllLotteryGames-WinTrxIframe",
                        query: {
                            url: y
                        }
                    })
                };
            return i({
                getData: _
            }), ke(() => {
                _()
            }), (w, y) => {
                const f = W("van-col"),
                    h = W("van-row"),
                    N = W("van-icon");
                return n(), a("div", qL, [t("div", EL, [x(h, null, {
                    default: A(() => [x(f, {
                        span: "6"
                    }, {
                        default: A(() => [E(e(w.$t("betSerial")), 1)]),
                        _: 1
                    }), x(f, {
                        span: "4"
                    }, {
                        default: A(() => [E(e(w.$t("winTrxDesc1")), 1)]),
                        _: 1
                    }), x(f, {
                        span: "5"
                    }, {
                        default: A(() => [E(e(w.$t("winTrxDesc2")), 1)]),
                        _: 1
                    }), x(f, {
                        span: "4"
                    }, {
                        default: A(() => [E(e(w.$t("winTrxDesc3")), 1)]),
                        _: 1
                    }), x(f, {
                        span: "5"
                    }, {
                        default: A(() => [E(e(w.$t("winTrxDesc4")), 1)]),
                        _: 1
                    })]),
                    _: 1
                })]), t("div", jL, [r.value.length ? (n(!0), a(B, {
                    key: 0
                }, G(r.value, (L, k) => (n(), it(h, {
                    key: k
                }, {
                    default: A(() => [x(f, {
                        span: "6"
                    }, {
                        default: A(() => [E(e(L.issue), 1)]),
                        _: 2
                    }, 1024), x(f, {
                        span: "4",
                        onClick: $ => m(L.blockNumber)
                    }, {
                        default: A(() => [E(e(L.blockNumber) + " ", 1), ft(t("div", HL, null, 512), [
                            [te, L.day]
                        ])]),
                        _: 2
                    }, 1032, ["onClick"]), x(f, {
                        span: "5"
                    }, {
                        default: A(() => [E(e(L.time), 1)]),
                        _: 2
                    }, 1024), x(f, {
                        span: "4"
                    }, {
                        default: A(() => [E(e(L.blockName), 1)]),
                        _: 2
                    }, 1024), x(f, {
                        span: "5"
                    }, {
                        default: A(() => [t("div", WL, [t("div", {
                            class: M(["number", ["num" + L.number]])
                        }, e(L.number), 3), t("div", {
                            class: M([Number(L.number) > 4 ? "big" : "small"])
                        }, e(Number(L.number) > 4 ? "B" : "S"), 3)])]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024))), 128)) : (n(), a("div", VL, [x(de)]))]), r.value.length ? (n(), a("div", FL, [t("div", {
                    class: M(["GameRecord__C-foot-previous", {
                        disabled: d.value <= 1
                    }]),
                    onClick: p
                }, [x(N, {
                    name: "arrow-left",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2), t("div", UL, e(d.value) + "/" + e(g.value), 1), t("div", {
                    class: M(["GameRecord__C-foot-next", {
                        disabled: d.value >= g.value
                    }]),
                    onClick: s
                }, [x(N, {
                    name: "arrow",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2)])) : C("v-if", !0)])
            }
        }
    });
const XL = K(KL, [
        ["__scopeId", "data-v-7a795a91"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/AllLotteryGames/WinTrx/GameRecord.vue"]
    ]),
    QL = {
        class: "WinTrx__C"
    },
    YL = {
        class: "WinTrx__C-head-more"
    },
    ZL = U({
        __name: "index",
        setup(l) {
            const i = {
                    GameRecord: XL,
                    Trend: Ga,
                    MyGameRecord: bn
                },
                o = v(),
                r = v(),
                g = v(),
                b = v(!1),
                d = v("GameRecord"),
                u = ht(),
                p = Ee(),
                s = p.getTrx,
                _ = v(0),
                m = v(localStorage.getItem("volumeShow") || "1"),
                w = v(!1),
                y = v(null),
                f = v(),
                h = v({
                    gameNo: "loading",
                    currentTime: "",
                    beginTime: "",
                    passTime: 180,
                    time1: 0,
                    time2: 0,
                    time3: 0,
                    time4: 0
                }),
                N = v(10),
                L = v(""),
                k = v(!1),
                $ = v(null),
                T = J(() => s[_.value] || {});
            zt(() => {
                S()
            }), Ve(() => {
                clearInterval(y.value), Z.value.forEach(yt => {
                    clearInterval(yt)
                }), At.value && clearTimeout(At.value)
            }), Dt(() => Me().visibility, yt => {
                yt === 0 ? clearInterval(y.value) : (S(), D(_.value))
            });
            const R = () => {
                    sessionStorage.setItem("clickedGameType", "lottery"), u.push({
                        path: "/"
                    })
                },
                z = () => {
                    m.value == "1" ? m.value = "2" : m.value = "1", localStorage.setItem("volumeShow", m.value)
                },
                I = yt => {
                    u.push({
                        name: yt
                    })
                },
                S = () => {
                    $.value == null && D(0)
                },
                D = yt => {
                    p.getTrxData(), _.value = yt, $.value = s[yt].typeID, P($.value), Yt(() => {
                        o.value.getData($.value)
                    })
                },
                P = async yt => {
                    const [$t, Mt] = await ee(ys({
                        typeId: yt
                    }));
                    h.value.gameNo = Mt.predraw.issueNumber, h.value.currentTime = Mt.predraw.serviceTime.replace(/-/g, "/"), h.value.beginTime = Mt.predraw.startTime.replace(/-/g, "/"), f.value = Mt.settled, V()
                },
                V = () => {
                    if (!s.length) return;
                    var yt = new Date(h.value.currentTime).getTime(),
                        $t = new Date(h.value.beginTime).getTime();
                    let Mt = (yt - $t) / 1e3,
                        Gt = s[_.value];
                    if (Mt > Gt.intervalM * 60 && (Mt = Gt.intervalM * 60), h.value.passTime = Gt.intervalM * 60 - Mt, h.value.passTime < 0) {
                        L.value = "An error occurred, please contact customer service。The game time is " + Gt.intervalM + " minutes,start time is " + h.value.beginTime + ",current time is" + h.value.currentTime + "!", w.value = !0;
                        return
                    }
                    F()
                },
                F = () => {
                    clearInterval(y.value), nt(!1), y.value = setInterval(function() {
                        nt()
                    }, 1e3)
                },
                nt = (yt = !0) => {
                    if (h.value.passTime <= N.value && (k.value = !1), m.value == "1" && (h.value.passTime <= N.value && h.value.passTime > 1 ? ut(1) : h.value.passTime == 1 && ut(2)), h.value.passTime > 0) {
                        let $t = h.value.passTime;
                        h.value.time2 = Math.floor($t / 60), h.value.time3 = Math.floor($t % 60 / 10), h.value.time4 = Math.floor($t % 10), h.value.passTime--
                    } else clearInterval(y.value), yt && ct()
                },
                ut = (yt = 1) => {
                    const $t = document.getElementById(`voice${yt}`);
                    $t && $t.play()
                },
                ct = () => {
                    P($.value), g.value.getWinsUserAmount(!1), o.value.getData(!0)
                },
                ot = v({}),
                Z = v([]),
                _t = yt => {
                    if (g.value.getWinsUserAmount(!1), o.value.getData(), ot.value[yt]) return;
                    ot.value[yt] = !0;
                    const {
                        time1: $t,
                        time2: Mt,
                        time3: Gt,
                        time4: gt
                    } = h.value, et = ($t * 10 * 60 + Mt * 60 + Gt * 10 + gt) * 1e3;
                    Z.value[T.value.intervalM] = setTimeout(() => {
                        dt(yt)
                    }, et)
                },
                Bt = yt => {
                    b.value = yt
                },
                At = v(null),
                dt = async yt => {
                    const $t = await lt($s({
                        issueNumber: [yt]
                    }));
                    if ($t) {
                        const Mt = $t.data.filter(Gt => Gt.state != 2);
                        if (!Mt.length) {
                            At.value = setTimeout(() => {
                                dt(yt)
                            }, 2e3);
                            return
                        }
                        r.value.showMark(Mt), delete ot.value[yt]
                    }
                };
            return (yt, $t) => {
                const Mt = W("NavBar");
                return n(), a("div", QL, [x(Mt, {
                    "left-arrow": "",
                    onClickLeft: R,
                    class: "lottery",
                    headLogo: !0
                }, {
                    right: A(() => [t("div", YL, [t("div", {
                        onClick: $t[0] || ($t[0] = Gt => I("CustomerService"))
                    }), t("div", {
                        class: M({
                            disableVoice: m.value == "2"
                        }),
                        onClick: z
                    }, null, 2)])]),
                    _: 1
                }), C(" 钱包余额 "), x(Li, {
                    ref_key: "WallteRef",
                    ref: g
                }, null, 512), x(hi, {
                    key: "winx"
                }), C(" 游戏类型 "), x(zi, {
                    gameList: c(s),
                    currentGameIndex: _.value,
                    onChangeGame: D
                }, null, 8, ["gameList", "currentGameIndex"]), C(" 游戏开始时间倒计时 "), x(OL, {
                    currentInfo: h.value,
                    gameName: T.value.typeName,
                    currentGame: T.value,
                    settled: f.value
                }, null, 8, ["currentInfo", "gameName", "currentGame", "settled"]), C(" 投注表 "), x(Ma, {
                    currentInfo: h.value,
                    ProhibitBuyTime: N.value,
                    currentGame: T.value,
                    VoiceType: m.value,
                    typeid: $.value,
                    onBetting: _t,
                    onChangeBettingP: Bt,
                    "betting-api-fun": c(ws)
                }, null, 8, ["currentInfo", "ProhibitBuyTime", "currentGame", "VoiceType", "typeid", "betting-api-fun"]), C(" 记录导航 "), x(Ii, {
                    record: d.value,
                    onChangeC: $t[1] || ($t[1] = Gt => d.value = Gt)
                }, null, 8, ["record"]), C(" 动态展示对应的组件 "), (n(), it(Qe, null, [(n(), it(qe(i[d.value]), {
                    ref_key: "RecordComponent",
                    ref: o,
                    typeid: $.value,
                    ApiFun: c(cn),
                    listApi: c(ka),
                    EmerdApi: c(da),
                    goPathName: "AllLotteryGames-BettingRecordWinTrx"
                }, null, 8, ["typeid", "ApiFun", "listApi", "EmerdApi"]))], 1024)), C(" 弹窗组件 "), x(xe, {
                    show: w.value,
                    onConfirm: $t[2] || ($t[2] = Gt => I("/login"))
                }, {
                    content: A(() => [t("div", null, e(L.value), 1)]),
                    _: 1
                }, 8, ["show"]), C(" 中奖提示组件 "), x(Aa, {
                    ref_key: "WinningTipsRef",
                    ref: r
                }, null, 512), x(Si)])
            }
        }
    });
const JL = K(ZL, [
        ["__scopeId", "data-v-ac90c264"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/WinTrx/index.vue"]
    ]),
    wI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: JL
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    tz = {
        class: "WinTrxIfram__C"
    },
    ez = ["src"],
    iz = U({
        __name: "index",
        setup(l) {
            const i = ht(),
                o = J(() => String(i.currentRoute.value.query.url)),
                r = () => {
                    i.go(-1)
                };
            return (g, b) => {
                const d = W("NavBar");
                return n(), a("div", tz, [x(d, {
                    "left-arrow": "",
                    onClickLeft: r,
                    backgroundColor: "linear-gradient(90deg,#cd0103,#f64841)",
                    title: "TRX"
                }), t("iframe", {
                    class: "iframe",
                    sandbox: "allow-same-origin allow-popups allow-scripts",
                    frameborder: "0",
                    marginwidth: "0",
                    marginheight: "0",
                    vspace: "0",
                    hspace: "0",
                    allowtransparency: "true",
                    allowfullscreen: !0,
                    ref: "iframe",
                    src: o.value
                }, null, 8, ez)])
            }
        }
    });
const nz = K(iz, [
        ["__scopeId", "data-v-5930c2be"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/WinTrxIframe/index.vue"]
    ]),
    TI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: nz
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    az = {
        class: "Xoso"
    },
    oz = {
        style: {
            "background-color": "#f7f8ff"
        }
    },
    sz = {
        key: 1,
        class: "Xoso-page"
    },
    lz = {
        class: "title"
    },
    cz = {
        class: "list"
    },
    rz = ["onClick"],
    uz = {
        key: 0
    },
    dz = ["src"],
    pz = {
        key: 1,
        class: "info"
    },
    gz = {
        class: "issue"
    },
    bz = ["src"],
    mz = {
        class: "time"
    },
    vz = U({
        __name: "index",
        setup(l) {
            const {
                t: i
            } = kt(), o = ht();
            let r = o.currentRoute.value.query.id;
            const g = J(() => r == "5" ? "XOSO" : r == "6" ? i("fXosoTitle") : "XOSO"),
                {
                    setLoading: b
                } = Ci(),
                d = () => {
                    o.go(-1)
                },
                u = (y, f, h, N) => {
                    f.day = h, f.id = r, f.areId = N, o.push({
                        name: y,
                        query: f
                    })
                },
                p = v(null),
                s = v(0),
                _ = y => {
                    sessionStorage.setItem("xosoList", JSON.stringify(m.value[y.index]))
                },
                m = v([]);
            return (async () => {
                b(!0);
                let y;
                r == "5" ? y = await lt(ga()) : r == "6" && (y = await lt(ba())), y && (m.value = y.data, sessionStorage.setItem("xosoList", JSON.stringify(y.data[0]))), b(!1)
            })(), (y, f) => {
                const h = W("NavBar"),
                    N = W("van-sticky");
                return n(), a("div", az, [x(h, {
                    class: "lottery",
                    "left-arrow": "",
                    onClickLeft: d,
                    "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)",
                    title: g.value
                }, {
                    default: A(() => [C(` <template #right>
				<div class="WinGo__C-head-more">
					<div @click="goPath('AllLotteryGames-XoSoRecord')">投注记录</div>
				</div>
			</template> `)]),
                    _: 1
                }, 8, ["title"]), c(r) == "5" ? (n(), it(N, {
                    key: 0,
                    "offset-top": 46,
                    container: p.value,
                    class: "bet-container-sticky"
                }, {
                    default: A(() => [t("div", oz, [x(ui, {
                        list: m.value,
                        active: s.value,
                        "onUpdate:active": f[0] || (f[0] = L => s.value = L),
                        tabClassName: "tabs",
                        onOnClickTab: _,
                        activeClassName: "tab_active",
                        ref: "tabRefs",
                        tabItemClassName: "funtab_item"
                    }, {
                        default: A(({
                            item: L,
                            index: k
                        }) => [t("div", {
                            class: M(["tab_item", {
                                tab_active: k === s.value
                            }])
                        }, [t("span", null, e(y.$t(L.week)), 1), t("p", null, e(L.day), 1)], 2)]),
                        _: 1
                    }, 8, ["list", "active"])])]),
                    _: 1
                }, 8, ["container"])) : C("v-if", !0), m.value[s.value] ? (n(), a("div", sz, [(n(!0), a(B, null, G(m.value[s.value].areInfos, (L, k) => (n(), a("div", {
                    class: "Xoso-page-box",
                    key: k
                }, [t("div", lz, e(y.$t("code" + L.areNameCode)), 1), t("div", cz, [(n(!0), a(B, null, G(L.areIssueNos, ($, T) => (n(), a("div", {
                    class: "item",
                    key: T,
                    onClick: R => u("AllLotteryGames-NewVietnam", $, m.value[s.value].day, L.areId)
                }, [$.status == 1 || $.status == 2 || $.status == 3 ? (n(), a("h4", uz, [E(e(y.$t("code" + $.nameCode)) + " ", 1), t("img", {
                    class: "img",
                    src: c(qt)("public", "xosoCity"),
                    alt: ""
                }, null, 8, dz)])) : C("v-if", !0), $.status == 1 || $.status == 2 || $.status == 3 ? (n(), a("div", pz, [t("div", gz, [t("img", {
                    class: "img",
                    src: c(qt)("public", "ticketstar"),
                    alt: ""
                }, null, 8, bz), E(e($.issueNo), 1)]), t("p", null, e(y.$t("xosoTxt72")), 1), t("div", mz, [(n(!0), a(B, null, G(m.value[s.value].day.split("-"), (R, z) => (n(), a("div", {
                    key: z
                }, e(R), 1))), 128))])])) : C("v-if", !0)], 8, rz))), 128))])]))), 128))])) : C("v-if", !0)])
            }
        }
    });
const _z = K(vz, [
        ["__scopeId", "data-v-d965c53a"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/XoSo/index.vue"]
    ]),
    CI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: _z
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    kz = {
        class: "TeamReport__C"
    },
    hz = {
        class: "TeamReport__C-head"
    },
    fz = {
        class: "TeamReport__C-head-fixed"
    },
    yz = {
        class: "TeamReport__C-head-line1"
    },
    $z = {
        key: 0,
        class: "default"
    },
    wz = {
        key: 1,
        class: "default"
    },
    Tz = {
        class: "TeamReport__C-head-line2"
    },
    Cz = {
        key: 0,
        class: "default"
    },
    Nz = {
        key: 1,
        class: "default"
    },
    Lz = {
        class: "TeamReport__C-list"
    },
    zz = U({
        __name: "index",
        setup(l) {
            const {
                t: i
            } = kt(), o = ht(), r = nn(), g = () => {
                o.go(-1)
            }, b = v([]), d = v([]), u = {
                text: "nameCode",
                value: "value"
            }, p = v(), s = v(!1), _ = v(!1), m = Zt({
                bettingParentType: "",
                areId: "",
                startDate: "",
                endDate: ""
            }), w = v(), y = v(), f = ({
                selectedOptions: T
            }) => {
                m.bettingParentType = Number(T[0].value), y.value = T[0].nameCode, w.value.getData(), s.value = !1
            }, h = v(), N = ({
                selectedOptions: T
            }) => {
                m.areId = Number(T[0].value), h.value = T[0].nameCode, w.value.getData(), _.value = !1
            };
            async function L() {
                let T = p.value.endDateValue !== "" ? `${p.value.endDateValue} 23:59:59` : "";
                m.startDate = `${oe(p.value.startDateValue).format("YYYY-MM-DD")} 23:59:59`, m.endDate = `${oe(T).format("YYYY-MM-DD")} 23:59:59`, w.value.getData()
            }
            const k = async () => {
                    const T = Number(r.query.areId) | 0,
                        R = await lt(Ts({
                            areId: T
                        }));
                    d.value = $(R.data.categorys), d.value.unshift({
                        value: "",
                        nameCode: i("all")
                    }), b.value = $(R.data.ares), b.value.unshift({
                        value: "",
                        nameCode: i("all")
                    })
                },
                $ = T => T.map(z => {
                    let I = {
                        value: "",
                        nameCode: ""
                    };
                    return I.value = z.value, I.nameCode = i("code" + z.nameCode), I
                });
            return k(), (T, R) => {
                const z = W("NavBar"),
                    I = W("van-icon"),
                    S = W("van-picker"),
                    D = W("van-popup");
                return n(), a("div", kz, [x(z, {
                    "left-arrow": "",
                    onClickLeft: g,
                    "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)",
                    title: T.$t("xosoTxt73")
                }, null, 8, ["title"]), t("div", hz, [t("div", fz, [t("div", yz, [t("div", {
                    onClick: R[0] || (R[0] = P => _.value = !0)
                }, [h.value ? (n(), a("span", $z, e(h.value), 1)) : (n(), a("span", wz, e(c(i)("all")), 1)), x(I, {
                    name: "arrow-down"
                })])]), t("div", Tz, [t("div", {
                    onClick: R[1] || (R[1] = P => s.value = !0)
                }, [y.value ? (n(), a("span", Cz, e(y.value), 1)) : (n(), a("span", Nz, e(c(i)("all")), 1)), x(I, {
                    name: "arrow-down"
                })]), C("日期选择组件"), t("div", null, [x(Dc, {
                    ref_key: "calendar",
                    ref: p,
                    onConfirm: L
                }, null, 512)])])])]), C(" list "), t("div", Lz, [(n(), it(Qe, null, [x(vn, {
                    ref_key: "RecordComponent",
                    ref: w,
                    parmas: m,
                    ApiFun: c(ma),
                    hasHead: !1,
                    gVSs: "1"
                }, null, 8, ["parmas", "ApiFun"])], 1024))]), x(D, {
                    show: s.value,
                    "onUpdate:show": R[3] || (R[3] = P => s.value = P),
                    round: "",
                    position: "bottom"
                }, {
                    default: A(() => [x(S, {
                        "columns-field-names": u,
                        columns: d.value,
                        onCancel: R[2] || (R[2] = P => s.value = !1),
                        onConfirm: f
                    }, null, 8, ["columns"])]),
                    _: 1
                }, 8, ["show"]), x(D, {
                    show: _.value,
                    "onUpdate:show": R[5] || (R[5] = P => _.value = P),
                    round: "",
                    position: "bottom"
                }, {
                    default: A(() => [x(S, {
                        "columns-field-names": u,
                        columns: b.value,
                        onCancel: R[4] || (R[4] = P => _.value = !1),
                        onConfirm: N
                    }, null, 8, ["columns"])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const xz = K(zz, [
        ["__scopeId", "data-v-b328b529"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/XoSoRecord/index.vue"]
    ]),
    NI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: xz
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Iz = {
        class: "TeamReport__C"
    },
    Rz = {
        style: {
            "background-color": "#f7f8ff"
        }
    },
    Sz = {
        class: "TeamReport__C-list"
    },
    Bz = U({
        __name: "index",
        setup(l) {
            const i = ht(),
                o = () => {
                    i.go(-1)
                },
                r = v(0),
                g = v([]),
                b = v();
            let d = i.currentRoute.value.query.areId,
                u = i.currentRoute.value.query.typeId;
            const p = Zt({
                    bettingParentType: "",
                    startDate: "",
                    endDate: "",
                    areId: "",
                    typeId: ""
                }),
                s = m => {
                    p.areId = m.item.areId, p.typeId = m.item.typeId, b.value.getData()
                };
            async function _() {
                let m = JSON.parse(sessionStorage.getItem("xosoList") || ""),
                    w = [];
                for (let y = 0; y < m.areInfos.length; y++)
                    for (let f = 0; f < m.areInfos[y].areIssueNos.length; f++) m.areInfos[y].areIssueNos[f].type == 2 && w.push({
                        areId: m.areInfos[y].areId,
                        typeId: m.areInfos[y].areIssueNos[f].code,
                        nameCode: m.areInfos[y].areIssueNos[f].nameCode
                    });
                g.value = w, g.value.length > 0 && (r.value = g.value.findIndex(y => y.areId == d && y.typeId == u))
            }
            return _(), (m, w) => {
                const y = W("NavBar"),
                    f = W("van-sticky");
                return n(), a("div", Iz, [x(y, {
                    "left-arrow": "",
                    onClickLeft: o,
                    "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)",
                    title: m.$t("fXosoTitle")
                }, null, 8, ["title"]), x(f, {
                    "offset-top": 46,
                    class: "bet-container-sticky"
                }, {
                    default: A(() => [t("div", Rz, [x(ui, {
                        list: g.value,
                        active: r.value,
                        "onUpdate:active": w[0] || (w[0] = h => r.value = h),
                        tabClassName: "tabs",
                        activeClassName: "tab_active",
                        ref: "tabRefs",
                        tabItemClassName: "funtab_item",
                        onOnClickTab: s
                    }, {
                        default: A(({
                            item: h,
                            index: N
                        }) => [t("div", {
                            class: M(["tab_item", {
                                tab_active: N === r.value
                            }])
                        }, [t("p", null, e(m.$t(`code${h.nameCode}`)), 1)], 2)]),
                        _: 1
                    }, 8, ["list", "active"])])]),
                    _: 1
                }), C(" list "), t("div", Sz, [(n(), it(Qe, null, [x(vn, {
                    ref_key: "RecordComponent",
                    ref: b,
                    parmas: p,
                    ApiFun: c(va),
                    hasHead: !1,
                    gVSs: "2"
                }, null, 8, ["parmas", "ApiFun"])], 1024))])])
            }
        }
    });
const Mz = K(Bz, [
        ["__scopeId", "data-v-24e1bb6f"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/AllLotteryGames/XoSoRecordF/index.vue"]
    ]),
    LI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Mz
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Gz = {
        class: "messageDetail__container content"
    },
    Az = {
        class: "messageDetail__container-wrapper"
    },
    Pz = {
        class: "messageDetail__container-title"
    },
    Dz = {
        class: "messageDetail__container-content"
    },
    Oz = U({
        __name: "index",
        setup(l) {
            const {
                t: i
            } = kt(), o = Cs(), r = ht(), g = v({}), b = vi(() => _i(() =>
                import ("./messageIconNoDot-4cc1bc4c.js"), ["assets/js/messageIconNoDot-4cc1bc4c.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css", "assets/js/page-activity-b0cc3a5b.js", "assets/js/native/index-09743dd6.js", "assets/js/en-cff984dc.js", "assets/js/rus-ecb14220.js", "assets/js/vi-edb4f658.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-e19d7dd2.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-116b9972.js", "assets/js/pak-656a575f.js", "assets/js/ar-1c9ff85b.js", "assets/css/page-activity-f0ca3544.css"])), d = vi(() => _i(() =>
                import ("./messageGarbage-a0b09b73.js"), ["assets/js/messageGarbage-a0b09b73.js", "assets/js/modules-3ee1a0d5.js", "assets/css/modules-b642e9bc.css", "assets/js/page-activity-b0cc3a5b.js", "assets/js/native/index-09743dd6.js", "assets/js/en-cff984dc.js", "assets/js/rus-ecb14220.js", "assets/js/vi-edb4f658.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-e19d7dd2.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-116b9972.js", "assets/js/pak-656a575f.js", "assets/js/ar-1c9ff85b.js", "assets/css/page-activity-f0ca3544.css"]));

            function u() {
                r.back()
            }

            function p() {
                Zn({
                    title: i("warning"),
                    message: i("warningTxt1")
                }).then(() => {
                    Ji({
                        messageID: g.value.messageID,
                        state: 2
                    }), r.back()
                })
            }
            return zt(async () => {
                g.value = o.getMessagesDetail, g.value.state !== 1 && (await Ji({
                    messageID: g.value.messageID,
                    state: 1
                }), o.setMessageDetail({ ...g.value,
                    state: 1
                }))
            }), (s, _) => {
                const m = W("NavBar");
                return n(), a("div", Gz, [x(m, {
                    "left-arrow": "",
                    onClickLeft: u,
                    title: c(i)("notificationDetails")
                }, null, 8, ["title"]), t("div", Az, [t("div", Pz, [t("div", null, [t("div", null, [(n(), it(qe(c(b)))), t("span", null, e(g.value.title), 1)]), t("span", null, e(g.value.addTime), 1)]), (n(), it(qe(c(d)), {
                    onClick: p
                }))]), t("div", Dz, e(g.value.messages), 1)])])
            }
        }
    });
const qz = K(Oz, [
        ["__scopeId", "data-v-e5380132"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/Messages/MessageDetail/index.vue"]
    ]),
    zI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: qz
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ez = {
        class: "dialog__container",
        role: "dialog",
        tabindex: "0"
    },
    jz = {
        class: "dialog__container-img"
    },
    Hz = {
        alt: ""
    },
    Wz = {
        class: "dialog__container-title"
    },
    Vz = {
        class: "dialog__container-content"
    },
    Fz = {
        class: "dialog__container-footer"
    },
    Uz = U({
        __name: "HomeDialog",
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
                default: "comfirm"
            },
            showCancelBtn: {
                type: Boolean,
                default: !0
            },
            cancelText: {
                type: String,
                default: "cancel"
            },
            clickOutSide: {
                type: Boolean,
                default: !1
            },
            pathname: {
                type: String,
                default: "public"
            },
            picname: {
                type: String,
                default: "superjackpotHome"
            }
        },
        emits: ["update:show", "confirm"],
        setup(l, {
            emit: i
        }) {
            const o = l,
                {
                    t: r
                } = kt();
            Dt(() => o.show, d => {
                d ? window.addEventListener("touchmove", b, {
                    passive: !1
                }) : window.removeEventListener("touchmove", b)
            });

            function g(d) {
                o.clickOutSide && i("update:show", !1)
            }
            const b = d => {
                o.show && d.preventDefault()
            };
            return (d, u) => {
                const p = Jt("lazy");
                return n(), a("div", {
                    class: M(["dialog", {
                        active: l.show,
                        inactive: !l.show
                    }])
                }, [t("div", Ez, [t("div", jz, [ve(d.$slots, "header", {}, () => [ft(t("img", Hz, null, 512), [
                    [p, c(qt)(l.pathname, l.picname)]
                ])], !0)]), t("div", Wz, [ve(d.$slots, "title", {}, () => [t("h1", null, e(c(r)(l.title)), 1)], !0)]), t("div", Vz, [ve(d.$slots, "content", {}, void 0, !0)]), t("div", Fz, [ve(d.$slots, "footer", {}, () => [l.showCancelBtn ? (n(), a("button", {
                    key: 0,
                    onClick: u[0] || (u[0] = () => {
                        i("update:show", !1)
                    })
                }, e(d.$t(l.cancelText)), 1)) : C("v-if", !0), t("button", {
                    onClick: u[1] || (u[1] = () => {
                        i("confirm")
                    })
                }, e(d.$t(l.confirmText)), 1)], !0)])]), t("div", {
                    class: "dialog__outside",
                    onClick: g
                })], 2)
            }
        }
    });
const Kz = K(Uz, [
    ["__scopeId", "data-v-c0caae78"],
    ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/common/HomeDialog.vue"]
]);
const Xz = {},
    Qz = {
        class: "point point-flicker"
    };

function Yz(l, i) {
    return n(), a("div", Qz)
}
const Zz = K(Xz, [
        ["render", Yz],
        ["__scopeId", "data-v-c10b67fb"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/common/Point.vue"]
    ]),
    Jz = {
        class: "dailyProfitRank"
    },
    tx = {
        class: "dailyProfitRank__content"
    },
    ex = {
        class: "dailyProfitRank__content-topThree"
    },
    ix = ["data-img"],
    nx = ["data-img"],
    ax = {
        class: "dailyProfitRank__content-list"
    },
    ox = {
        class: "left-rank"
    },
    sx = ["data-img"],
    lx = ["data-img"],
    cx = {
        class: "middle-name"
    },
    rx = {
        class: "right-box"
    },
    ux = U({
        __name: "index",
        setup(l) {
            const {
                t: i
            } = kt(), {
                homeState: o
            } = Fe(), r = {
                nickName: i("noData"),
                userPhoto: "",
                price: 0,
                time: "",
                typeName: ""
            };
            Dt(() => o.rankList, d => {
                g.value.splice(0, d.length, ...d.sort((u, p) => p.price - u.price).slice(0, 3)), b.value.splice(0, d.length, ...d.sort((u, p) => p.price - u.price).slice(3, 10))
            });
            const g = v([r, r, r]),
                b = v([]);
            return (d, u) => {
                const p = Jt("lazy");
                return n(), a("div", Jz, [t("h1", null, e(d.$t("earningsRankingToday")), 1), t("div", tx, [t("div", ex, [(n(!0), a(B, null, G(g.value, (s, _) => (n(), a("div", {
                    class: "dailyProfitRank__content-topThree__item",
                    key: _,
                    style: ue({
                        order: _ === 0 ? 2 : _ === 2 ? 3 : 1,
                        top: _ === 0 ? "-45px" : "-30px"
                    })
                }, [t("div", {
                    style: ue({
                        background: `url(${c(Vt)("images/DailyProfitRank",`border${_+1}`)}) no-repeat center center / 100% 100%`
                    })
                }, [s.userPhoto.length > 2 ? ft((n(), a("img", {
                    key: 0,
                    "data-img": c(Vt)("home", "avatar")
                }, null, 8, ix)), [
                    [p, s.userPhoto]
                ]) : ft((n(), a("img", {
                    key: 1,
                    "data-img": c(Vt)("home", "avatar")
                }, null, 8, nx)), [
                    [p, c(Vt)("main/Avatar", s.userPhoto)]
                ])], 4), t("div", null, [ft(t("img", null, null, 512), [
                    [p, c(Vt)("images/DailyProfitRank", `crown${_+1}`)]
                ]), ft(t("img", null, null, 512), [
                    [p, c(Vt)("images/DailyProfitRank", `place${_+1}`)]
                ])]), t("span", null, e(c(tn)(s.nickName)), 1), t("span", null, e(c(It)(s.price)), 1)], 4))), 128))]), t("div", ax, [(n(!0), a(B, null, G(b.value, (s, _) => (n(), a("div", {
                    class: "dailyProfitRank__content-list__item",
                    key: _
                }, [t("span", ox, e(_ + 4), 1), s.userPhoto.length > 2 ? ft((n(), a("img", {
                    key: 0,
                    "data-img": c(Vt)("home", "avatar")
                }, null, 8, sx)), [
                    [p, s.userPhoto]
                ]) : ft((n(), a("img", {
                    key: 1,
                    "data-img": c(Vt)("home", "avatar")
                }, null, 8, lx)), [
                    [p, c(Vt)("main/Avatar", s.userPhoto)]
                ]), t("span", cx, e(c(tn)(s.nickName)), 1), C(' <span class="middle-name">{{ formatString(item.nickName, 10) }}</span> '), t("span", rx, e(c(It)(s.price)), 1)]))), 128))])])])
            }
        }
    });
const dx = K(ux, [
        ["__scopeId", "data-v-84514e8e"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/DailyProfitRank/index.vue"]
    ]),
    px = l => (Rt("data-v-c9ec78ed"), l = l(), St(), l),
    gx = {
        class: "gameList"
    },
    bx = px(() => t("div", {
        class: "slidebar_ske"
    }, [t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div")], -1)),
    mx = U({
        __name: "index",
        setup(l) {
            const {
                t: i
            } = kt(), o = v(0), r = v(!1), g = Zt([]), b = J(() => {
                var m, w;
                return (m = g[o.value]) != null && m.key ? (w = g[o.value]) == null ? void 0 : w.key : ""
            }), {
                getGameType: d,
                homeState: u
            } = Fe(), p = async () => {
                await d(), u.gameTypeList.length > 0 && (u.gameTypeList.forEach(m => {
                    m.state === 1 && g.push({
                        isShow: m.state === 1,
                        title: i("code" + m.typeNameCode),
                        img: m.categoryImg,
                        key: m.categoryCode.toLocaleLowerCase()
                    })
                }), sessionStorage.setItem("gameMenu", JSON.stringify(g)))
            }, s = m => {
                sessionStorage.setItem("clickedGameType", g[m].key)
            };
            return (async () => {
                r.value = !0, await p();
                const m = sessionStorage.getItem("clickedGameType");
                if (m !== null) {
                    const w = g.findIndex(y => y.key === m);
                    w >= 0 && (o.value = w, Yt(() => {
                        s(w);
                        const y = document.getElementById("gameType-" + m);
                        setTimeout(() => {
                            y && y.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                                inline: "center"
                            })
                        }, 0)
                    }))
                }
                r.value = !1
            })(), (m, w) => {
                const y = W("van-sidebar-item"),
                    f = W("van-sidebar"),
                    h = W("van-skeleton");
                return n(), a("div", gx, [x(h, {
                    loading: r.value
                }, {
                    template: A(() => [bx]),
                    default: A(() => [x(f, {
                        modelValue: o.value,
                        "onUpdate:modelValue": w[0] || (w[0] = N => o.value = N),
                        class: "mySideBar",
                        onChange: s
                    }, {
                        default: A(() => [(n(!0), a(B, null, G(g, (N, L) => (n(), it(y, {
                            key: L,
                            id: "gameType-" + N.key
                        }, {
                            title: A(() => [N.isShow ? (n(), a("div", {
                                key: 0,
                                class: M({
                                    whiteColor: L === o.value
                                })
                            }, [t("div", {
                                style: ue({
                                    backgroundImage: `url(${N.img})`
                                })
                            }, null, 4), E(" " + e(N.title), 1)], 2)) : C("v-if", !0)]),
                            _: 2
                        }, 1032, ["id"]))), 128))]),
                        _: 1
                    }, 8, ["modelValue"])]),
                    _: 1
                }, 8, ["loading"]), C(" 首页右侧游戏渲染组件 "), ft(x(ha, {
                    currentGame: b.value,
                    ref: "gameListGridRef"
                }, null, 8, ["currentGame"]), [
                    [te, g[o.value]]
                ])])
            }
        }
    });
const vx = K(mx, [
        ["__scopeId", "data-v-c9ec78ed"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/RedHome/GameList/index.vue"]
    ]),
    _x = {
        class: "luckyWinners__container"
    },
    kx = {
        class: "luckyWinners__container-wrapper"
    },
    hx = {
        class: "luckyWinners__container-wrapper__item-img"
    },
    fx = {
        class: "luckyWinners__container-wrapper__item-info"
    },
    yx = {
        class: "luckyWinners__container-wrapper__item-winType"
    },
    $x = {
        class: "luckyWinners__container-wrapper__item-winAmount"
    },
    wx = U({
        __name: "index",
        setup(l) {
            const {
                homeState: i,
                getWinInfoDetail: o,
                getWinInfo: r
            } = Fe(), g = v(null), b = v(null);
            return zt(async () => {
                await o(), Lo(b.value), i.winInfoList.length > 0 && (g.value = setInterval(async () => {
                    i.winInfoList.unshift(i.winInfoList.pop())
                }, 3e3))
            }), en(() => {
                clearInterval(g.value)
            }), (d, u) => {
                const p = Jt("lazy");
                return n(), a("div", _x, [t("h1", null, e(d.$t("winningDetal")), 1), t("div", kx, [t("div", {
                    ref_key: "wrapperRef",
                    ref: b
                }, [(n(!0), a(B, null, G(c(r).slice(0, 6), s => (n(), a("div", {
                    class: "luckyWinners__container-wrapper__item",
                    key: s
                }, [t("div", hx, [ft(t("img", null, null, 512), [
                    [p, c(Vt)("main/Avatar", s.userPhoto) || c(Vt)("home", "avatar")]
                ])]), t("div", fx, [t("h1", null, e(c(tn)(s.nickName)), 1)]), t("div", yx, [ft(t("img", null, null, 512), [
                    [p, s.imgUrl]
                ])]), t("div", $x, [t("h1", null, e(d.$t("titleGot")) + " " + e(c(It)(s.amount || 0)), 1), t("span", null, e(d.$t("winningAmount")), 1)])]))), 128))], 512)])])
            }
        }
    });
const Tx = K(wx, [
        ["__scopeId", "data-v-ffb14677"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/LuckyWinners/index.vue"]
    ]),
    Cx = {
        class: "swiper_box"
    },
    Nx = ["onClick"],
    Lx = {
        key: 0,
        class: "swiper-button"
    },
    zx = U({
        __name: "index",
        props: {
            isShowButton: {
                type: Boolean,
                default: !1
            }
        },
        setup(l) {
            const {
                getBannerApi: i,
                getBanner: o
            } = Fe(), r = v(0), g = [Io], b = p => {}, d = p => {
                p.activeIndex >= o.value.length ? r.value = p.activeIndex - o.value.length : r.value = p.activeIndex
            }, u = p => {
                p && (window.location.href = p)
            };
            return zt(async () => {
                await i()
            }), (p, s) => {
                const _ = Jt("lazy");
                return n(), a("div", Cx, [x(c(xo), {
                    class: "my-swipe",
                    "slides-per-view": 1,
                    "space-between": 20,
                    onSwiper: b,
                    onSlideChange: d,
                    autoplay: {
                        delay: 5e3,
                        disableOnInteraction: !1
                    },
                    modules: g,
                    loop: !0
                }, {
                    default: A(() => [(n(!0), a(B, null, G(c(o), (m, w) => (n(), it(c(zo), {
                        key: w
                    }, {
                        default: A(() => [ft(t("img", {
                            onClick: y => u(m.url)
                        }, null, 8, Nx), [
                            [_, m.bannerUrl]
                        ])]),
                        _: 2
                    }, 1024))), 128))]),
                    _: 1
                }), c(o).length > 1 && l.isShowButton ? (n(), a("div", Lx, [(n(!0), a(B, null, G(c(o).length, m => (n(), a("span", {
                    key: m,
                    class: M({
                        active: r.value === m - 1
                    })
                }, null, 2))), 128))])) : C("v-if", !0)])
            }
        }
    });
const xx = K(zx, [
        ["__scopeId", "data-v-3ad7aed7"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/Home/Swiper/index.vue"]
    ]),
    Ix = U({
        __name: "Turntable",
        setup(l) {
            const i = ht(),
                o = v(),
                r = Ye();

            function g() {
                r.getBigTurntableLink && window.open(r.getBigTurntableLink)
            }
            return (b, d) => (n(), a(B, null, [c(r).getOpenTurntable ? (n(), a("div", {
                key: 0,
                class: M(["turntable-lottery trntableIcon2", {
                    "lottery-bottom": c(r).getBigTurntableLink
                }]),
                onClick: d[0] || (d[0] = u => c(i).push({
                    name: "Turntable"
                }))
            }, null, 2)) : C("v-if", !0), c(r).getBigTurntableLink ? (n(), a("div", {
                key: 1,
                class: "turntable turntableIcon1",
                onClick: g,
                ref_key: "turntableId",
                ref: o
            }, null, 512)) : C("v-if", !0)], 64))
        }
    });
const Rx = K(Ix, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/common/Turntable.vue"]
    ]),
    Sx = l => (Rt("data-v-b3bd7e49"), l = l(), St(), l),
    Bx = Sx(() => t("svg", {
        class: "line",
        width: "1",
        height: "60",
        viewBox: "0 0 1 60",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [t("line", {
        x1: "0.5",
        x2: "0.5",
        y2: "60",
        stroke: "white"
    })], -1)),
    Mx = ["src"],
    Gx = {
        class: "text"
    },
    Ax = 1.1,
    Px = U({
        __name: "DownloadPWA",
        setup(l) {
            const i = Ro("show-pwa-download", !0);
            let o = null;
            const {
                t: r
            } = kt(), g = Ye(), b = Zt({
                canIUse: !1,
                download: null
            });
            window.addEventListener("beforeinstallprompt", s => {
                s.preventDefault(), o = s, b.canIUse = !0
            }, {
                once: !0
            }), b.download = function() {
                o.prompt().then(s => {
                    s.outcome === "accepted" && (b.canIUse = !1)
                })
            };
            let d = Ns();
            d = d == null ? void 0 : d.toLowerCase(), /[\u4e00-\u9fa5]+/.test(d) && (d = "vxth");
            const u = document.querySelector("link[rel='manifest']");
            u == null || u.setAttribute("href", "/manifest." + d + ".json?version=" + Ax);
            async function p() {
                if (i.value)
                    if (b.canIUse) b.download && b.download();
                    else {
                        const s = await lt(Ls());
                        if (!s) return;
                        zs(xs ? s.data.androidUrl : s.data.iosUrl)
                    }
            }
            return (s, _) => {
                const m = W("van-icon");
                return n(), a("div", {
                    class: "btn",
                    onClick: p
                }, [Bx, x(m, {
                    class: "close",
                    name: "close",
                    color: "rgb(255,255,255)",
                    onClick: _[0] || (_[0] = w => i.value = !1)
                }), t("img", {
                    class: "icon",
                    src: c(g).getWebIco
                }, null, 8, Mx), t("div", Gx, e(b.canIUse ? c(r)("addToDesktop") : c(r)("downloadAPP")), 1)])
            }
        }
    });
const Dx = K(Px, [
        ["__scopeId", "data-v-b3bd7e49"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/components/common/DownloadPWA.vue"]
    ]),
    Ox = l => (Rt("data-v-003e4505"), l = l(), St(), l),
    qx = {
        id: "home",
        class: "content"
    },
    Ex = ["src"],
    jx = {
        class: "content__right"
    },
    Hx = Ox(() => t("div", {
        class: "messageIcon"
    }, null, -1)),
    Wx = {
        class: "promptHeader"
    },
    Vx = ["innerHTML"],
    Fx = {
        class: "Laundry-Con"
    },
    Ux = {
        class: "Laundry-Con_tip"
    },
    Kx = {
        class: "Landty-Con-tips"
    },
    Xx = U({
        __name: "redHome",
        setup(l) {
            const {
                t: i
            } = kt(), o = ht(), {
                setLoading: r
            } = Ci(), {
                onDown: g,
                isAppDownloadIcon: b,
                showChanglong: d,
                projectIcon: u,
                isRead: p,
                getMessagesData: s,
                showPWA: _
            } = Fe(), {
                closeLaundry: m,
                closePrompt: w,
                store: y,
                promptContent: f
            } = Is();

            function h() {
                o.push({
                    name: "Messages"
                })
            }
            r(!1);
            const N = () => {
                    m(), o.push({
                        name: "SuperJackpot"
                    })
                },
                L = v();
            return zt(() => {
                s(), r(!1)
            }), (k, $) => {
                const T = W("svg-icon"),
                    R = W("NavBar"),
                    z = W("van-dialog");
                return n(), a("div", qx, [x(R, {
                    class: "white"
                }, {
                    left: A(() => [t("img", {
                        src: c(u),
                        alt: ""
                    }, null, 8, Ex)]),
                    right: A(() => [t("div", jx, [t("div", {
                        class: "message",
                        onClick: h
                    }, [Hx, ft(x(Zz, {
                        class: "point"
                    }, null, 512), [
                        [te, !c(p)]
                    ])]), x(T, {
                        onClick: be(c(g), ["stop"]),
                        name: "down",
                        class: "down"
                    }, null, 8, ["onClick"])])]),
                    _: 1
                }), C(" 头部轮播图 "), x(xx), C(" 滚动通知栏 "), x(hi, {
                    key: "home",
                    color: "red"
                }), C(" 热门、彩票、游戏选项卡 "), x(vx, {
                    ref_key: "gameListRef",
                    ref: L
                }, null, 512), C(" 中奖信息 "), x(Tx), C(" 今日盈利排行榜 "), x(dx), C(" 长龙"), c(d) ? (n(), it(Ri, {
                    key: 0
                })) : C("v-if", !0), C("下载PWA应用"), c(_) && c(b) ? (n(), it(Dx, {
                    key: 1
                })) : C("v-if", !0), x(Rx), x(z, {
                    show: c(y).prompt,
                    "onUpdate:show": $[0] || ($[0] = I => c(y).prompt = I),
                    "confirm-button-text": c(i)("confirm"),
                    onConfirm: c(w)
                }, {
                    default: A(() => [t("div", Wx, e(c(i)("prompt")), 1), t("div", {
                        class: "promptContent",
                        innerHTML: c(f)
                    }, null, 8, Vx)]),
                    _: 1
                }, 8, ["show", "confirm-button-text", "onConfirm"]), x(Kz, {
                    show: c(y).laundry,
                    "onUpdate:show": $[1] || ($[1] = I => c(y).laundry = I),
                    onConfirm: N,
                    "show-cancel-btn": !1,
                    confirmText: "OK",
                    title: c(i)("congratulations")
                }, {
                    content: A(() => [t("div", Fx, [t("div", Ux, e(c(i)("getSuper")), 1), t("div", Kx, e(c(i)("getRewards")), 1)])]),
                    _: 1
                }, 8, ["show", "title"])])
            }
        }
    });
const Qx = K(Xx, [
        ["__scopeId", "data-v-003e4505"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-91club-webnew2/src/views/home/other/redHome.vue"]
    ]),
    xI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Qx
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    yI as A, $I as B, Dc as C, Kz as D, wI as E, yc as F, TI as G, CI as H, NI as I, LI as J, $c as K, zI as L, xI as M, ui as N, Ss as a, fc as b, tI as c, eI as d, iI as e, nI as f, oI as g, sI as h, Jx as i, lI as j, cI as k, rI as l, uI as m, dI as n, pI as o, gI as p, bI as q, mI as r, vI as s, _I as t, Ze as u, Rs as v, aI as w, kI as x, hI as y, fI as z
};