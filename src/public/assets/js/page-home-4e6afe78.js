import {
    _ as V,
    o as n,
    j as a,
    a6 as L,
    H as d,
    l as t,
    a0 as e,
    a1 as $,
    a4 as R,
    a5 as A,
    $ as oe,
    a9 as G,
    aj as ki,
    J as Y,
    A as Nt,
    a3 as Ot,
    aa as vt,
    K as kt,
    P as dt,
    a2 as H,
    a8 as O,
    r as k,
    ae as it,
    a7 as M,
    af as $t,
    ag as wt,
    ar as So,
    as as na,
    D as Si,
    ac as _e,
    G as Mt,
    B as Zt,
    Y as xo,
    N as Fe,
    ak as Qt,
    C as ke,
    at as Ro,
    au as Bo,
    av as Go,
    am as an,
    I as Wt,
    aw as Ao,
    T as Mo,
    ax as aa,
    Q as sn,
    ay as Po,
    q as me,
    az as Do,
    aA as Oo,
    ab as oa,
    F as ce,
    n as Dt,
    O as ln,
    aq as ve,
    k as cn,
    aB as re,
    aC as He,
    aD as Qe,
    ap as rn,
    aE as Eo,
    aF as qo,
    aG as sa,
    aH as jo,
    aI as Ho,
    aJ as Wo,
    aK as Vo,
    aL as Fo,
    X as Uo,
    an as Ko,
    ao as Xo
} from "./modules-ca96e989.js";
import {
    S as Re,
    h as te,
    i as hi,
    _ as F,
    j as we,
    g as Xt,
    A as at,
    k as la,
    l as xi,
    m as Qo,
    n as Lt,
    o as Jo,
    p as fi,
    r as ui,
    q as Yo,
    s as ca,
    t as ra,
    v as Zo,
    a as un,
    G as Be,
    w as Fn,
    L as ua,
    x as ts,
    y as es,
    z as is,
    B as on,
    C as ns,
    E as as,
    F as os,
    H as Te,
    I as Ce,
    J as Ri,
    K as da,
    M as pa,
    O as dn,
    P as ss,
    Q as ls,
    R as cs,
    T as rs,
    U as us,
    V as ds,
    W as ps,
    X as gs,
    Y as bs,
    D as xe,
    Z as Ve,
    $ as pe,
    a0 as De,
    a1 as ee,
    a2 as ms,
    a3 as ga,
    a4 as ba,
    a5 as ma,
    a6 as _s,
    a7 as _a,
    a8 as vs,
    a9 as ks,
    aa as hs,
    ab as va,
    ac as ka,
    ad as pn,
    ae as gn,
    af as fs,
    ag as bn,
    ah as ys,
    ai as ha,
    aj as fa,
    ak as $s,
    al as mn,
    am as ws,
    an as Ts,
    ao as Cs,
    ap as ya,
    aq as Ls,
    ar as $a,
    as as Ns,
    at as zs,
    au as wa,
    av as Ta,
    aw as Is,
    ax as Ss,
    ay as xs,
    az as Rs,
    aA as Bs,
    aB as Ni,
    aC as ye,
    aD as $e,
    aE as Un,
    aF as Kn,
    aG as Gs,
    aH as Ca,
    aI as La,
    aJ as As,
    aK as Ms,
    aL as Ps,
    aM as Na,
    aN as Ds,
    aO as Os,
    aP as Es,
    aQ as za,
    aR as qs,
    aS as js,
    aT as Hs,
    aU as Ws,
    u as Vs,
    aV as Fs,
    aW as Us,
    aX as Ks,
    aY as Xs,
    aZ as Qs,
    a_ as Js
} from "./page-activity-76f2bb47.js";
const Ys = {
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
    Zs = {
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
    tl = {
        class: "hot_container"
    },
    el = {
        key: 0,
        class: "platform"
    },
    il = {
        key: 0,
        class: "title"
    },
    nl = {
        class: "list"
    },
    al = ["onClick"],
    ol = {
        class: "item"
    },
    sl = ["src", "data-img"],
    ll = {
        key: 0,
        class: "win-odds"
    },
    cl = {
        key: 0,
        class: "title"
    },
    rl = {
        class: "list"
    },
    ul = ["onClick"],
    dl = {
        class: "item"
    },
    pl = ["src", "data-img"],
    gl = {
        key: 0,
        class: "win-odds"
    },
    bl = V({
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
        setup(s, {
            emit: i
        }) {
            const o = ki(() => hi(() =>
                    import ("./gameHot-4b9198d5.js"), ["assets/js/gameHot-4b9198d5.js", "assets/js/modules-ca96e989.js", "assets/css/modules-b642e9bc.css", "assets/js/page-activity-76f2bb47.js", "assets/js/native/index-5b57e344.js", "assets/js/en-93cdab10.js", "assets/js/rus-ecb14220.js", "assets/js/vi-40bd560a.js", "assets/js/id-24cc3835.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-02b1fc1c.js", "assets/js/bra-1f3ea623.js", "assets/js/my-80d37f62.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-3589f8b3.js", "assets/js/pak-9f46abf2.js", "assets/js/ar-64903102.js", "assets/css/page-activity-e94516d2.css"])),
                l = ki(() => hi(() =>
                    import ("./gameRec-817dd282.js"), ["assets/js/gameRec-817dd282.js", "assets/js/modules-ca96e989.js", "assets/css/modules-b642e9bc.css", "assets/js/page-activity-76f2bb47.js", "assets/js/native/index-5b57e344.js", "assets/js/en-93cdab10.js", "assets/js/rus-ecb14220.js", "assets/js/vi-40bd560a.js", "assets/js/id-24cc3835.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-02b1fc1c.js", "assets/js/bra-1f3ea623.js", "assets/js/my-80d37f62.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-3589f8b3.js", "assets/js/pak-9f46abf2.js", "assets/js/ar-64903102.js", "assets/css/page-activity-e94516d2.css"])),
                g = ki(() => hi(() =>
                    import ("./noticeBarHot-7682c2d6.js"), ["assets/js/noticeBarHot-7682c2d6.js", "assets/js/modules-ca96e989.js", "assets/css/modules-b642e9bc.css", "assets/js/page-activity-76f2bb47.js", "assets/js/native/index-5b57e344.js", "assets/js/en-93cdab10.js", "assets/js/rus-ecb14220.js", "assets/js/vi-40bd560a.js", "assets/js/id-24cc3835.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-02b1fc1c.js", "assets/js/bra-1f3ea623.js", "assets/js/my-80d37f62.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-3589f8b3.js", "assets/js/pak-9f46abf2.js", "assets/js/ar-64903102.js", "assets/css/page-activity-e94516d2.css"])),
                m = Re(),
                r = c => {
                    i("onItemClick", c)
                };
            return (c, p) => {
                var u, b;
                return n(), a("div", tl, [((u = c.platformList) == null ? void 0 : u.length) > 0 && !c.isAll ? (n(), a("div", el, [c.isAll ? $("v-if", !0) : (n(), a("div", il, [L(d(l), {
                    class: "gameRec"
                }), t("span", null, e(c.$t("platRecom")), 1)])), t("div", nl, [(n(!0), a(R, null, A(c.platformList, _ => (n(), a("div", {
                    key: _.vendorId,
                    onClick: w => r(_)
                }, [t("div", ol, [L(d(o), {
                    class: "hot_bage"
                }), t("img", {
                    src: _.imgUrl,
                    alt: "",
                    "data-img": d(te)("images", "avatar")
                }, null, 8, sl)]), d(m).isShowHotGameWinOdds ? (n(), a("div", ll, [t("span", null, e(c.$t("winOdds")), 1), t("span", null, e(_.winOdds) + "%", 1), t("div", {
                    class: "win-p",
                    style: oe({
                        width: `${Math.min(_.winOdds,100)}%`
                    })
                }, null, 4)])) : $("v-if", !0)], 8, al))), 128))])])) : $("v-if", !0), ((b = c.platformList) == null ? void 0 : b.length) > 0 ? (n(), a("div", {
                    key: 1,
                    class: G(["popular", {
                        pupularAll: c.isAll
                    }])
                }, [c.isAll ? $("v-if", !0) : (n(), a("div", cl, [L(d(g), {
                    class: "hotGames"
                }), t("span", null, e(c.$t("hot")), 1)])), t("div", rl, [(n(!0), a(R, null, A(c.clicksTopList, _ => (n(), a("div", {
                    key: _.vendorId,
                    onClick: w => r(_)
                }, [t("div", dl, [t("img", {
                    src: _.imgUrl,
                    alt: "",
                    "data-img": d(te)("images", "avatar")
                }, null, 8, pl)]), d(m).isShowHotGameWinOdds ? (n(), a("div", gl, [t("span", null, e(c.$t("winOdds")), 1), t("span", null, e(_.winOdds) + "%", 1), t("div", {
                    class: "win-p",
                    style: oe({
                        width: `${Math.min(_.winOdds,100)}%`
                    })
                }, null, 4)])) : $("v-if", !0)], 8, ul))), 128))])], 2)) : $("v-if", !0)])
            }
        }
    });
const ml = F(bl, [
        ["__scopeId", "data-v-d06787cb"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/RedHome/GameList/HotGameItem.vue"]
    ]),
    _l = ["onClick"],
    vl = V({
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
        setup(s, {
            emit: i
        }) {
            const o = s,
                l = Y(() => o.isAll ? o.gameData : o.gameData.length > 8 ? o.gameData.slice(0, 8) : o.gameData),
                g = m => {
                    i("onItemClick", m)
                };
            return Nt(() => {}), (m, r) => {
                const c = Ot("lazy");
                return n(), a("div", {
                    class: G(["minGame_container", {
                        all_game: m.isAll
                    }])
                }, [(n(!0), a(R, null, A(l.value, p => (n(), a("div", {
                    class: "onlineGamesItem",
                    key: p.gameID,
                    onClick: u => g(p)
                }, [vt((n(), a("img", {
                    class: G(m.gameType === "fish" ? "fish_img" : "min_game_img"),
                    key: p.gameID
                }, null, 2)), [
                    [c, p.img]
                ])], 8, _l))), 128))], 2)
            }
        }
    });
const kl = F(vl, [
        ["__scopeId", "data-v-860d7030"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/RedHome/GameList/OnlineGamesItem.vue"]
    ]),
    hl = {
        class: "lottery_container"
    },
    fl = ["onClick"],
    yl = V({
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
        setup(s) {
            const {
                t: i
            } = kt(), o = dt(), l = c => {
                if (c) {
                    let p = c;
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
            }, g = c => {
                if (c) {
                    let p = [];
                    switch (c) {
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
            }, m = [{
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
            }], r = c => {
                o.push({
                    name: "AllLotteryGames-" + m[m.findIndex(p => p.value === c.id)].path,
                    query: {
                        id: c.id
                    }
                })
            };
            return (c, p) => {
                const u = Ot("lazy");
                return n(), a("div", hl, [(n(!0), a(R, null, A(c.gameData, b => (n(), a("div", {
                    class: "lotterySlotItem",
                    key: b.id,
                    onClick: _ => r(b)
                }, [vt(t("img", null, null, 512), [
                    [u, b.categoryImg]
                ]), t("span", null, e(l(b.categoryCode)), 1), t("h4", null, [t("div", null, e(g(b.categoryCode)[0]), 1), t("div", null, e(g(b.categoryCode)[1]), 1)])], 8, fl))), 128))])
            }
        }
    });
const $l = F(yl, [
        ["__scopeId", "data-v-acaadf81"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/RedHome/GameList/LotterySlotItem.vue"]
    ]),
    wl = {
        class: "lotterySlotItem__container"
    },
    Tl = {
        class: "title"
    },
    Cl = {
        class: "tit"
    },
    Ll = {
        class: "game_img"
    },
    Nl = V({
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
        setup(s) {
            const {
                t: i
            } = kt(), o = {
                sport: i("sport"),
                video: i("live"),
                chess: i("chess")
            };
            return (l, g) => {
                const m = Ot("lazy");
                return n(), a("div", wl, [t("div", Tl, [t("div", Cl, e(o[l.gameType]), 1), $(' <div class="desc">{{ getArrayKey(rootConfig.gameAllName, info.slotsTypeID) }}</div> ')]), vt(t("img", Ll, null, 512), [
                    [m, l.info.vendorImg]
                ])])
            }
        }
    });
const zl = F(Nl, [
        ["__scopeId", "data-v-1153e4fd"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/RedHome/GameList/OtherGameItem.vue"]
    ]),
    Il = ["onClick"],
    Sl = {
        class: "gameImg"
    },
    xl = V({
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
        setup(s, {
            emit: i
        }) {
            const o = s,
                l = Y(() => o.isAll ? o.gameData : o.gameData.slice(0, 6)),
                g = m => {
                    i("handleOpenGame", m, "slot")
                };
            return Nt(() => {}), (m, r) => {
                const c = Ot("lazy");
                return n(), a("div", {
                    class: G(["onlineGamesItem__container", {
                        allGame: s.isAll
                    }])
                }, [(n(!0), a(R, null, A(l.value, p => (n(), a("div", {
                    key: p.slotsTypeID,
                    class: "item",
                    onClick: u => g(p)
                }, [vt(t("img", Sl, null, 512), [
                    [c, p.vendorImg]
                ]), $(' <van-image :src="getIcons(`home/dianzi/onlineSlot`, item.slotsName)" class="slot_img">\n				<template v-slot:error>加载失败</template>\n			</van-image> ')], 8, Il))), 128))], 2)
            }
        }
    });
const Rl = F(xl, [
        ["__scopeId", "data-v-54337c48"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/RedHome/GameList/ElectronicItem.vue"]
    ]),
    Bl = {
        alt: ""
    },
    Gl = V({
        __name: "ElectronicWinRate",
        setup(s) {
            const i = Re(),
                o = Y(() => i.winRate.electronicWinRateImgUrl || ""),
                l = Y(() => !!(i.winRate.isShowElectronicWinRateExternalLink && o.value)),
                g = () => {
                    i.winRate.electronicWinRateExternalLink && window.open(i.winRate.electronicWinRateExternalLink)
                };
            return (m, r) => {
                const c = Ot("lazy");
                return l.value ? (n(), a("div", {
                    key: 0,
                    class: "WinRate",
                    onClick: g
                }, [vt(t("img", Bl, null, 512), [
                    [c, o.value]
                ])])) : $("v-if", !0)
            }
        }
    });
const Ia = F(Gl, [
        ["__scopeId", "data-v-0d36c546"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/RedHome/GameList/ElectronicWinRate.vue"]
    ]),
    Al = {
        class: "slot_list"
    },
    Ml = {
        class: "slot_title"
    },
    Pl = {
        class: "slot_img_box"
    },
    Dl = ["onClick"],
    Ol = ["onClick"],
    El = V({
        __name: "index",
        setup(s) {
            const i = dt(),
                {
                    getSlotList: o,
                    homeState: l,
                    onItemClick: g
                } = we(),
                m = c => c.indexOf("_") === -1 ? c : c.split("_")[0],
                r = c => {
                    const p = l.allGameList.slot.find(u => u.slotsName === c.vendorCode);
                    sessionStorage.setItem("slotGamesList", JSON.stringify(l.allGameList.slot)), sessionStorage.setItem("gameType", JSON.stringify("slot")), sessionStorage.setItem("clickedItem", JSON.stringify(p)), i.push({
                        name: "AllOnlineGames"
                    })
                };
            return o(), (c, p) => {
                const u = H("svg-icon"),
                    b = Ot("lazy");
                return n(), a("div", Al, [L(Ia), (n(!0), a(R, null, A(d(l).slotsGame, _ => (n(), a("div", {
                    class: "slot_item",
                    key: _.vendorCode
                }, [t("div", Ml, [$(`				<img :src="getIcons('home/slots', item.vendorCode)" alt="" />`), L(u, {
                    name: _.vendorCode
                }, null, 8, ["name"]), O(" " + e(m(_.vendorCode)) + e(c.$t("electric")), 1)]), t("div", Pl, [(n(!0), a(R, null, A(_.childList.slice(0, 6), w => vt((n(), a("img", {
                    key: w.gameID + _.vendorCode,
                    onClick: f => d(g)(w)
                }, null, 8, Dl)), [
                    [b, w.img]
                ])), 128))]), t("div", {
                    class: "all_slot",
                    onClick: () => r(_)
                }, e(c.$t("allGame")), 9, Ol)]))), 128))])
            }
        }
    });
const Sa = F(El, [
        ["__scopeId", "data-v-1b7d97f8"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/Electronic/Slot/index.vue"]
    ]),
    yi = s => ($t("data-v-df3cc798"), s = s(), wt(), s),
    ql = yi(() => t("div", {
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
    jl = yi(() => t("div", {
        class: "skeleton_other"
    }, [t("div"), t("div"), t("div"), t("div")], -1)),
    Hl = {
        class: "otherGame"
    },
    Wl = yi(() => t("div", {
        class: "skeleton_slot"
    }, [t("div"), t("div"), t("div"), t("div"), t("div"), t("div")], -1)),
    Vl = yi(() => t("div", {
        class: "skeleton_other"
    }, [t("div"), t("div"), t("div"), t("div")], -1)),
    Fl = yi(() => t("div", {
        class: "skeleton_flash"
    }, [t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div"), t("div")], -1)),
    Ul = ["src"],
    Kl = V({
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
        setup(s) {
            const i = s,
                o = dt(),
                l = k(!0),
                g = Y(() => o.currentRoute.value.name !== "AllGames"),
                {
                    onItemClick: m,
                    getAllGame: r,
                    homeState: c
                } = we(),
                p = Y(() => JSON.parse(JSON.stringify(c.allGameList))),
                u = Y(() => i.currentGame === "popular" ? 1 : ["sport", "chess", "video"].includes(i.currentGame) ? 2 : i.currentGame === "lottery" ? 3 : i.currentGame === "slot" ? 4 : i.currentGame === "flash" || i.currentGame === "fish" ? 5 : -1),
                b = async () => {
                    var T, z;
                    await r();
                    let h = p.value;
                    h.popular = [(T = p.value) == null ? void 0 : T.popular.platformList, (z = p.value) == null ? void 0 : z.popular.clicksTopList], sessionStorage.setItem("gameData", JSON.stringify(h)), l.value = !1
                },
                _ = () => {
                    o.push({
                        name: "AllGames",
                        query: {
                            type: i.currentGame
                        }
                    })
                },
                w = Y(() => p.value[i.currentGame].length < 1 ? [] : p.value[i.currentGame][0]),
                f = Y(() => p.value[i.currentGame].length < 1 ? [] : i.isAll ? p.value[i.currentGame][1] || [] : p.value[i.currentGame][1].slice(0, 9)),
                C = async (h, T) => {
                    ["chess", "slot"].includes(T) ? (sessionStorage.setItem("slotGamesList", JSON.stringify(p.value[i.currentGame])), sessionStorage.setItem("gameType", JSON.stringify(i.currentGame)), sessionStorage.setItem("clickedItem", JSON.stringify(h)), o.push({
                        name: "AllOnlineGames"
                    })) : m(h)
                };
            return b(), (h, T) => {
                const z = H("van-skeleton");
                return n(), a("div", {
                    class: G(["gameListGrid__container", {
                        all_container: s.isAll
                    }])
                }, [s.currentGame === "popular" ? (n(), it(z, {
                    key: 0,
                    loading: l.value
                }, {
                    template: M(() => [ql]),
                    default: M(() => [L(ml, {
                        platformList: w.value,
                        clicksTopList: f.value,
                        onOnItemClick: d(m),
                        isAll: s.isAll
                    }, null, 8, ["platformList", "clicksTopList", "onOnItemClick", "isAll"])]),
                    _: 1
                }, 8, ["loading"])) : $("v-if", !0), u.value === 2 ? (n(), it(z, {
                    key: 1,
                    loading: l.value
                }, {
                    template: M(() => [jl]),
                    default: M(() => [t("div", Hl, [(n(!0), a(R, null, A(p.value[s.currentGame], (y, v) => (n(), it(zl, {
                        key: v,
                        info: y,
                        gameType: s.currentGame,
                        isAll: s.isAll,
                        onClick: N => C(y, s.currentGame)
                    }, null, 8, ["info", "gameType", "isAll", "onClick"]))), 128))])]),
                    _: 1
                }, 8, ["loading"])) : $("v-if", !0), u.value === 4 ? (n(), it(z, {
                    key: 2,
                    loading: l.value
                }, {
                    template: M(() => [Wl]),
                    default: M(() => [s.isAll ? $("v-if", !0) : (n(), it(Ia, {
                        key: 0
                    })), g.value ? (n(), it(Rl, {
                        key: 1,
                        gameData: p.value[s.currentGame],
                        isAll: s.isAll,
                        onHandleOpenGame: C
                    }, null, 8, ["gameData", "isAll"])) : (n(), it(Sa, {
                        key: 2
                    }))]),
                    _: 1
                }, 8, ["loading"])) : $("v-if", !0), u.value === 3 ? (n(), it(z, {
                    key: 3,
                    loading: l.value
                }, {
                    template: M(() => [Vl]),
                    default: M(() => [L($l, {
                        gameData: p.value[s.currentGame],
                        isAll: s.isAll
                    }, null, 8, ["gameData", "isAll"])]),
                    _: 1
                }, 8, ["loading"])) : $("v-if", !0), $(" 小游戏、捕鱼 "), u.value === 5 ? (n(), it(z, {
                    key: 4,
                    loading: l.value
                }, {
                    template: M(() => [Fl]),
                    default: M(() => [L(kl, {
                        gameData: p.value[s.currentGame],
                        gameType: s.currentGame,
                        isAll: s.isAll,
                        onOnItemClick: d(m)
                    }, null, 8, ["gameData", "gameType", "isAll", "onOnItemClick"])]),
                    _: 1
                }, 8, ["loading"])) : $("v-if", !0), s.isAll ? $("v-if", !0) : (n(), a("button", {
                    key: 5,
                    onClick: _,
                    class: "look_all"
                }, [t("img", {
                    src: d(Xt)("home", "all"),
                    alt: ""
                }, null, 8, Ul), O(" " + e(h.$t("viewAll")), 1)]))], 2)
            }
        }
    });
const Xl = F(Kl, [
        ["__scopeId", "data-v-df3cc798"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/RedHome/GameList/GameListGrid.vue"]
    ]),
    Ql = {
        class: "gamesList__container"
    },
    Jl = {
        class: "gamesList__container-title"
    },
    Yl = V({
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
        setup(s) {
            return (i, o) => (n(), a("div", Ql, [t("div", Jl, e(i.title), 1), L(Xl, {
                currentGame: i.gameType,
                isAll: !0
            }, null, 8, ["currentGame"])]))
        }
    });
const Zl = F(Yl, [
        ["__scopeId", "data-v-e4c17073"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/RedHome/AllGames/GameList.vue"]
    ]),
    xa = Symbol();
var Ra = (s, i) => {
    const o = s.__vccOpts || s;
    for (const [l, g] of i) o[l] = g;
    return o
};
const tc = V({
        name: "FunTabItem",
        props: {
            title: String,
            name: [String, Number],
            badge: [String, Number]
        },
        setup(s) {
            const i = So(xa),
                o = k(),
                l = Y(() => (i == null ? void 0 : i.activeValue.value) === s.name ? {
                    color: i == null ? void 0 : i.activeColor.value
                } : {}),
                g = () => {
                    i == null || i.setActiveValue(s.name)
                },
                m = {
                    name: na(s, "name"),
                    el: o
                };
            return Nt(() => {
                var r;
                (r = i.addItem) == null || r.call(i, m)
            }), Si(() => {
                var r;
                (r = i.removeItem) == null || r.call(i, m)
            }), {
                el: o,
                style: l,
                handleClick: g
            }
        }
    }),
    ec = {
        class: "fun-tab-item__wrap"
    },
    ic = {
        class: "fun-tab-item__label"
    },
    nc = {
        key: 0,
        class: "fun-tab-item__badge"
    };

function ac(s, i, o, l, g, m) {
    return n(), a("div", {
        ref: "el",
        style: oe(s.style),
        class: "fun-tab-item",
        onClick: i[0] || (i[0] = (...r) => s.handleClick && s.handleClick(...r))
    }, [t("div", ec, [_e(s.$slots, "icon"), t("div", ic, [_e(s.$slots, "default", {}, () => [O(e(s.title), 1)])]), s.badge ? (n(), a("div", nc, e(s.badge), 1)) : $("v-if", !0)])], 4)
}
var Ba = Ra(tc, [
    ["render", ac],
    ["__file", "/Users/scoutyin/Documents/ScoutYin/fun-tab/src/tab-item.vue"]
]);
const Qi = window;

function oc() {
    let s = 0;
    const i = ["webkit", "moz"];
    for (let o = 0; o < i.length && !window.requestAnimationFrame; ++o) window.requestAnimationFrame = Qi[i[o] + "RequestAnimationFrame"], window.cancelAnimationFrame = Qi[i[o] + "CancelAnimationFrame"] || Qi[i[o] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(o) {
        const l = Date.now(),
            g = l - s,
            m = Math.max(0, 16.7 - g),
            r = window.setTimeout(function() {
                o(g)
            }, m);
        return s = l + m, r
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(o) {
        clearTimeout(o)
    })
}
const sc = V({
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
                validator(s) {
                    return s > 0
                }
            },
            inertialDuration: {
                type: Number,
                default: 1e3,
                validator(s) {
                    return s > 0
                }
            },
            reBoundingDuration: {
                type: Number,
                default: 360
            }
        },
        emits: ["update:modelValue", "change"],
        setup(s, {
            emit: i,
            expose: o
        }) {
            let l = null;
            const g = [],
                m = k(),
                r = k(),
                c = k(s.modelValue),
                p = k(0),
                u = k(0),
                b = k(0),
                _ = k(0),
                w = k(0),
                f = k(!1),
                C = k(!1),
                h = k(0),
                T = k(0),
                z = k(0),
                y = k(0),
                v = k(0),
                N = k(0),
                S = k(16.7),
                I = k(0),
                x = k(0),
                B = k(0),
                D = k(.001),
                P = k(.001),
                q = Y(() => {
                    const W = C.value && !f.value ? s.reBoundingDuration : 0;
                    return {
                        transitionTimingFunction: C.value ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.1, 0.57, 0.1, 1)",
                        transitionDuration: `${W}ms`,
                        transform: `translate3d(${h.value}px, 0px, 0px)`
                    }
                }),
                X = Y(() => ({
                    transition: "all 300ms",
                    width: `${u.value}px`,
                    height: `${s.lineHeight}px`,
                    transform: `translate3d(${p.value}px, 0, 0)`,
                    backgroundColor: s.activeColor
                })),
                lt = Y(() => y.value <= T.value);
            Mt(() => s.modelValue, W => {
                c.value = W, gt()
            });
            const gt = () => {
                    l || (l = new Promise(W => {
                        Zt(() => {
                            Rt(), W(), l = null
                        })
                    }))
                },
                rt = W => {
                    c.value = W, i("update:modelValue", W), i("change", W)
                },
                J = W => {
                    g.push(W), gt()
                },
                Q = W => {
                    const Ct = g.findIndex(Et => Et.name === W.name);
                    Ct !== -1 && (g.splice(Ct, 1), gt())
                },
                st = {
                    activeValue: c,
                    activeColor: na(s, "activeColor"),
                    addItem: J,
                    removeItem: Q,
                    setActiveValue: rt
                };
            xo(xa, st);
            const Rt = () => {
                    var W, Ct;
                    b.value = ((W = m.value) == null ? void 0 : W.offsetWidth) || 0, _.value = ((Ct = r.value) == null ? void 0 : Ct.offsetWidth) - b.value, Gt(), Bt()
                },
                At = () => (C.value = !1, h.value > 0 ? (C.value = !0, h.value = 0) : h.value < -_.value && (C.value = !0, h.value = -_.value), C.value),
                ot = () => {
                    lt.value ? h.value <= 0 && h.value + _.value > 0 || h.value > 0 ? h.value += y.value - z.value : h.value + _.value <= 0 && (h.value += s.additionalX * (y.value - z.value) / (b.value + Math.abs(h.value + _.value))) : h.value >= 0 ? h.value += s.additionalX * (y.value - z.value) / (b.value + h.value) : (h.value <= 0 && h.value + _.value >= 0 || h.value + _.value <= 0) && (h.value += y.value - z.value), z.value = y.value
                },
                yt = () => {
                    if (x.value = Date.now(), S.value = x.value - I.value, lt.value ? h.value <= -_.value ? (P.value *= (s.reBoundExponent + Math.abs(h.value + _.value)) / s.reBoundExponent, w.value = Math.min(w.value - P.value, 0)) : w.value = Math.min(w.value - P.value * S.value, 0) : h.value >= 0 ? (P.value *= (s.reBoundExponent + h.value) / s.reBoundExponent, w.value = Math.max(w.value - P.value, 0)) : w.value = Math.max(w.value - P.value * S.value, 0), h.value += w.value * S.value / 2, Math.abs(w.value) <= D.value) {
                        At();
                        return
                    }
                    I.value = x.value, B.value = requestAnimationFrame(yt)
                },
                Tt = () => {
                    if (!g.length) return;
                    const W = g.find(Ct => Ct.name.value === c.value);
                    return W && W.el.value
                },
                Bt = () => {
                    const W = Tt();
                    if (!W) return;
                    const Ct = W.offsetWidth,
                        Et = W.offsetLeft,
                        {
                            lineWidth: ie
                        } = s;
                    ie === "auto" ? u.value = Ct : ie < 1 ? u.value = Ct * ie : u.value = ie, p.value = Et + (Ct - u.value) / 2
                },
                Gt = () => {
                    const W = Tt();
                    if (!W) return;
                    const Ct = W.offsetLeft,
                        Et = (b.value - W.offsetWidth) / 2;
                    let ie = 0;
                    const Le = Math.abs(h.value);
                    Ct <= Le + Et ? ie = Et - (Ct + h.value) : ie = -(Ct - Le - Et);
                    let ue = ie + h.value;
                    ue > 0 && (ue = 0), ue < -_.value && (ue = -_.value), C.value = !0, h.value = ue
                },
                _t = W => {
                    W.stopPropagation(), cancelAnimationFrame(B.value), z.value = W.touches[0].clientX
                },
                nt = W => {
                    _.value <= 0 || (W.preventDefault(), W.stopPropagation(), f.value = !0, v.value = N.value, T.value = z.value, y.value = W.touches[0].clientX, ot(), N.value = W.timeStamp)
                },
                ct = W => {
                    if (f.value = !1, At()) cancelAnimationFrame(B.value);
                    else {
                        let Ct = W.timeStamp - N.value,
                            Et = N.value - v.value;
                        if (Et = Et > 0 ? Et : 8, Ct > 100) return;
                        w.value = (z.value - T.value) / Et, P.value = w.value / s.inertialDuration, I.value = Date.now(), B.value = requestAnimationFrame(yt)
                    }
                },
                Z = () => {
                    const W = m.value;
                    W.addEventListener("touchstart", _t, !1), W.addEventListener("touchmove", nt, !1), W.addEventListener("touchend", ct, !1)
                },
                tt = () => {
                    const W = m.value;
                    W.removeEventListener("touchstart", _t), W.removeEventListener("touchmove", nt), W.removeEventListener("touchend", ct)
                };
            return Nt(() => {
                oc(), Z(), gt()
            }), Fe(() => {
                tt()
            }), o({
                resize: Rt
            }), {
                viewAreaRef: m,
                listRef: r,
                activeValue: c,
                lineOffset: p,
                activeLineWidth: u,
                viewAreaWidth: b,
                offsetX: _,
                speed: w,
                touching: f,
                reBounding: C,
                translateX: h,
                startX: T,
                lastX: z,
                currentX: y,
                startMoveTime: v,
                endMoveTime: N,
                frameTime: S,
                frameStartTime: I,
                frameEndTime: x,
                inertiaFrame: B,
                zeroSpeed: D,
                acceleration: P,
                listStyle: q,
                activeBarStyle: X,
                isMoveLeft: lt
            }
        }
    }),
    lc = {
        ref: "viewAreaRef",
        class: "fun-tabs"
    };

function cc(s, i, o, l, g, m) {
    return n(), a("div", lc, [t("div", {
        ref: "listRef",
        style: oe(s.listStyle),
        class: "fun-tabs__tab-list"
    }, [_e(s.$slots, "default"), t("div", {
        style: oe(s.activeBarStyle),
        class: "fun-tabs__active-line"
    }, null, 4)], 4)], 512)
}
var Ga = Ra(sc, [
    ["render", cc],
    ["__file", "/Users/scoutyin/Documents/ScoutYin/fun-tab/src/tabs.vue"]
]);
const rc = V({
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
        setup(s, {
            expose: i,
            emit: o
        }) {
            const l = s,
                g = k(),
                m = k(0),
                r = (c, p) => {
                    o("update:active", m.value), o("onClickTab", {
                        item: c,
                        index: p
                    })
                };
            return Mt(() => l.active, c => {
                m.value = c
            }), i({
                funtabRef: g
            }), (c, p) => (n(), it(d(Ga), {
                modelValue: m.value,
                "onUpdate:modelValue": p[0] || (p[0] = u => m.value = u),
                class: G(c.tabClassName),
                lineWidth: "0",
                ref_key: "funtabRef",
                ref: g
            }, {
                default: M(() => [(n(!0), a(R, null, A(c.list, (u, b) => vt((n(), it(d(Ba), {
                    name: b,
                    key: b,
                    class: G([c.tabItemClassName, {
                        activeClassName: c.active === b
                    }]),
                    onClick: _ => r(u, b)
                }, {
                    default: M(() => [_e(c.$slots, "default", {
                        item: u,
                        index: b
                    })]),
                    _: 2
                }, 1032, ["name", "class", "onClick"])), [
                    [Qt, u.isShow !== void 0 ? u.isShow : !0]
                ])), 128))]),
                _: 3
            }, 8, ["modelValue", "class"]))
        }
    }),
    Xe = F(rc, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/FunTab/NavBar.vue"]
    ]),
    uc = {
        class: "allGames__container"
    },
    dc = V({
        __name: "index",
        setup(s) {
            const {
                homeState: i,
                getGameType: o,
                getAllGame: l
            } = we(), g = k(0), m = k(null), r = k(), c = dt(), {
                t: p
            } = kt(), u = k([]), b = k({});

            function _() {
                c.go(-1)
            }
            const w = Y(() => u.value[g.value]);
            Nt(() => {
                f()
            }), ke(() => {
                f()
            });
            const f = async () => {
                !i.gameTypeList.length && await o(), !i.allGameList && await l(), u.value = [], i.gameTypeList.forEach(T => {
                    T.categoryCode === "BigAward" || T.state !== 1 || u.value.push({
                        isShow: T.state === 1,
                        title: p("code" + T.typeNameCode),
                        img: T.categoryImg,
                        key: T.categoryCode.toLocaleLowerCase()
                    })
                }), b.value = i.allGameList;
                const h = c.currentRoute.value.query.type || "";
                g.value = u.value.findIndex(T => T.key + "" === h) || 0
            };

            function C() {}
            return (h, T) => {
                const z = H("NavBar"),
                    y = H("van-sticky"),
                    v = Ot("lazy");
                return n(), a("div", uc, [L(z, {
                    title: h.$t("all"),
                    "left-arrow": "",
                    onClickLeft: _
                }, null, 8, ["title"]), L(y, {
                    class: "alGames__container-sticky"
                }, {
                    default: M(() => [L(Xe, {
                        list: u.value,
                        active: g.value,
                        "onUpdate:active": T[0] || (T[0] = N => g.value = N),
                        tabClassName: "tabs",
                        onOnClickTab: C,
                        activeClassName: "tab_active",
                        ref_key: "tabRefs",
                        ref: r
                    }, {
                        default: M(({
                            item: N,
                            index: S
                        }) => [N.isShow ? (n(), a("div", {
                            key: 0,
                            class: G(["tab_item", {
                                tab_active: S === g.value
                            }])
                        }, [vt(t("img", null, null, 512), [
                            [v, N.img]
                        ]), t("span", null, e(N.title), 1)], 2)) : $("v-if", !0)]),
                        _: 1
                    }, 8, ["list", "active"])]),
                    _: 1
                }), t("div", {
                    class: "allGames__container-list",
                    ref_key: "allGamesContainer",
                    ref: m
                }, [u.value.length > 0 ? (n(), it(Zl, {
                    key: 0,
                    gameType: w.value.key,
                    title: w.value.title,
                    gameData: b.value[w.value.key]
                }, null, 8, ["gameType", "title", "gameData"])) : $("v-if", !0)], 512)])
            }
        }
    });
const pc = F(dc, [
        ["__scopeId", "data-v-0a9bf0c5"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllGames/index.vue"]
    ]),
    ZB = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: pc
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    gc = {
        class: "lotteryGamesList__container"
    },
    bc = {
        alt: ""
    },
    mc = {
        class: "lotteryGamesList__container-item__time"
    },
    _c = V({
        __name: "index",
        props: {
            gamesList: {
                type: Object,
                default: () => {}
            }
        },
        setup(s) {
            const i = dt();

            function o() {
                i.push({
                    name: "AllLotteryGames-VietnamLottery"
                })
            }
            return (l, g) => {
                const m = Ot("lazy");
                return n(), a("div", gc, [t("div", {
                    class: "lotteryGamesList__container-item",
                    onClick: o
                }, [vt(t("img", bc, null, 512), [
                    [m, d(Xt)("home/AllLotteryGames", "cover")]
                ]), t("span", mc, e(s.gamesList.title), 1)])])
            }
        }
    });
const vc = F(_c, [
        ["__scopeId", "data-v-22e2ba37"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/index.vue"]
    ]),
    kc = {
        class: "lotteryGames__container"
    },
    Ji = 46 + 90 + 35 + 16,
    Xn = 16 + 28,
    hc = V({
        __name: "index",
        setup(s) {
            const {
                t: i
            } = kt(), o = dt(), l = k(0), g = k(0), m = k(null), r = [{
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
            }], c = [{
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

            function u(C) {
                return C === l.value ? l.value : -1
            }
            const {
                direction: b
            } = Ro(m, {
                onSwipeStart: () => {
                    _()
                },
                onSwipe: _,
                onSwipeEnd: () => {
                    _()
                }
            });

            function _() {
                const C = document.getElementById(`gamesList-${l.value}`);
                if (C) {
                    const {
                        top: h,
                        bottom: T
                    } = C.getBoundingClientRect();
                    T - Ji - Xn < 0 ? b.value === "UP" && (l.value = l.value + 1) : h - Ji - Xn > 0 && b.value === "DOWN" && (l.value = l.value - 1)
                }
            }

            function w() {
                f()
            }

            function f() {
                const C = document.getElementById(`gamesList-${l.value}`);
                C && m.value.scrollTo({
                    top: C.offsetTop - Ji,
                    behavior: "smooth"
                })
            }
            return (C, h) => {
                const T = H("NavBar"),
                    z = H("van-tab"),
                    y = H("van-tabs");
                return n(), a("div", kc, [L(T, {
                    "left-arrow": "",
                    title: C.$t("lottery"),
                    onClickLeft: p
                }, null, 8, ["title"]), L(y, {
                    class: "lotteryGames__container-tabBar mgt10",
                    active: l.value,
                    "onUpdate:active": h[0] || (h[0] = v => l.value = v),
                    onClickTab: w,
                    type: "card",
                    color: "transparent",
                    background: "transparent"
                }, {
                    default: M(() => [(n(), a(R, null, A(r, (v, N) => L(z, {
                        name: N,
                        key: N,
                        title: v.title
                    }, null, 8, ["name", "title"])), 64))]),
                    _: 1
                }, 8, ["active"]), L(y, {
                    class: "lotteryGames__container-timeTab",
                    active: g.value,
                    "onUpdate:active": h[1] || (h[1] = v => g.value = v),
                    color: "#ff7172",
                    background: "#fff"
                }, {
                    default: M(() => [(n(), a(R, null, A(c, (v, N) => L(z, {
                        name: N,
                        key: N,
                        title: v.title
                    }, null, 8, ["name", "title"])), 64))]),
                    _: 1
                }, 8, ["active"]), t("div", {
                    class: "lotteryGames__container-list",
                    ref_key: "allGamesContainer",
                    ref: m
                }, [(n(), a(R, null, A(c, (v, N) => L(vc, {
                    "games-list": v,
                    active: u(N),
                    key: N,
                    id: `gamesList-${N}`
                }, null, 8, ["games-list", "active", "id"])), 64))], 512)])
            }
        }
    });
const fc = F(hc, [
        ["__scopeId", "data-v-147ae92c"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/index.vue"]
    ]),
    tG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: fc
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    yc = {
        class: "onlineGames__container"
    },
    $c = ["placeholder"],
    wc = {
        class: "onlineGames__container-list"
    },
    Tc = ["onClick"],
    Cc = {
        key: 1
    },
    Lc = {
        class: "onlineGames__container-list miniGames"
    },
    Nc = ["onClick"],
    zc = V({
        __name: "index",
        setup(s) {
            const {
                onItemClick: i
            } = we(), o = k(), l = k(0), g = k([]), m = k(0);
            Mt(l, y => {
                const v = b.value[y];
                _.value = [], m.value = 0, z(v.slotsTypeID)
            });
            const r = k(!1);
            Mt(r, y => {
                y ? setTimeout(() => {
                    p.value.focus()
                }, 0) : c.value = ""
            });
            const c = k("");
            Bo(c, y => {
                if (u.value)
                    if (u.value.key === "fish" || u.value.key === "flash") b.value = b.value.filter(v => v.gameNameEn.toLowerCase().includes(y)), y.length === 0 && (b.value = sessionStorage.getItem("slotGamesList") ? JSON.parse(sessionStorage.getItem("slotGamesList")) : null);
                    else {
                        const v = b.value[l.value];
                        z(v.slotsTypeID, y)
                    }
            }, {
                debounce: 300
            });
            const p = k(null),
                u = k(),
                b = k([]),
                _ = k([]),
                w = dt(),
                f = Go(_, y => r.value ? y.gameNameEn.toLowerCase().includes(c.value.toLowerCase()) : y.customGameType === m.value);

            function C(y) {
                return y ? y.split(/(?=[A-Z])/).join(" ") : ""
            }

            function h() {
                w.go(-1)
            }

            function T(y) {
                r.value = y
            }
            async function z(y, v = "") {
                const N = await at(la({
                    type: y,
                    gameNameEn: v
                }));
                if (N) {
                    if (_.value = N.data.gameLists || [], g.value = N.data.gameCustomTypeLists || [], !g.value.length) return;
                    m.value = g.value[0].customGameType
                }
            }
            return Nt(() => {
                u.value = sessionStorage.getItem("gameType") ? JSON.parse(sessionStorage.getItem("gameType")) : null, b.value = sessionStorage.getItem("slotGamesList") ? JSON.parse(sessionStorage.getItem("slotGamesList")) : null;
                const y = JSON.parse(sessionStorage.getItem("clickedItem"));
                y && (l.value = b.value.findIndex(N => N.slotsTypeID === y.slotsTypeID)), o.value && o.value.scrollTo(l.value);
                const v = b.value[l.value];
                z(v.slotsTypeID)
            }), (y, v) => {
                var D, P;
                const N = H("svg-icon"),
                    S = H("NavBar"),
                    I = H("van-tab"),
                    x = H("van-tabs"),
                    B = Ot("lazy");
                return n(), a("div", yc, [L(S, {
                    class: "white",
                    "left-arrow": "",
                    onClickLeft: h
                }, {
                    center: M(() => {
                        var q;
                        return [t("span", {
                            class: G({
                                active: r.value
                            })
                        }, e((q = u.value) == null ? void 0 : q.title) + e(y.$t("game")), 3), vt(t("input", {
                            type: "text",
                            placeholder: y.$t("searchGame"),
                            class: G({
                                active: r.value
                            }),
                            "onUpdate:modelValue": v[0] || (v[0] = X => c.value = X),
                            ref_key: "searchBarRef",
                            ref: p
                        }, null, 10, $c), [
                            [an, c.value]
                        ])]
                    }),
                    right: M(() => [L(N, {
                        name: "SearchTrx",
                        onClick: v[1] || (v[1] = q => T(!0)),
                        class: G({
                            active: r.value
                        })
                    }, null, 8, ["class"]), t("span", {
                        class: G({
                            active: r.value
                        }),
                        onClick: v[2] || (v[2] = q => T(!1))
                    }, e(y.$t("cancel")), 3)]),
                    _: 1
                }), ((D = u.value) == null ? void 0 : D.key) !== "fish" && ((P = u.value) == null ? void 0 : P.key) !== "flash" ? (n(), it(x, {
                    key: 0,
                    class: "onlineGames__container-tabBar",
                    active: l.value,
                    "onUpdate:active": v[4] || (v[4] = q => l.value = q),
                    type: "card",
                    sticky: !0,
                    "offset-top": 48,
                    ref_key: "tabsRef",
                    ref: o
                }, {
                    default: M(() => [(n(!0), a(R, null, A(b.value, (q, X) => (n(), it(I, {
                        key: X
                    }, {
                        title: M(() => [L(N, {
                            name: q.slotsName,
                            class: "gameIcon"
                        }, null, 8, ["name"]), t("span", null, e(q.slotsName), 1)]),
                        _: 2
                    }, 1024))), 128)), !r.value || g.value.length === 0 ? (n(), it(d(Ga), {
                        key: 0,
                        modelValue: m.value,
                        "onUpdate:modelValue": v[3] || (v[3] = q => m.value = q),
                        lineWidth: 0
                    }, {
                        default: M(() => [(n(!0), a(R, null, A(g.value, (q, X) => (n(), it(d(Ba), {
                            name: X,
                            key: X,
                            class: G([{
                                activeClassName: m.value === q.customGameType
                            }]),
                            onClick: lt => m.value = q.customGameType
                        }, {
                            default: M(() => [t("span", null, e(q.customGameTypeName), 1)]),
                            _: 2
                        }, 1032, ["name", "class", "onClick"]))), 128))]),
                        _: 1
                    }, 8, ["modelValue"])) : $("v-if", !0), t("div", wc, [(n(!0), a(R, null, A(d(f), (q, X) => (n(), a("div", {
                        class: "onlineGames__container-list__item",
                        key: X,
                        onClick: lt => d(i)(q)
                    }, [vt(t("img", null, null, 512), [
                        [B, q.img]
                    ]), t("span", null, e(C(q.gameNameEn)), 1)], 8, Tc))), 128))])]),
                    _: 1
                }, 8, ["active"])) : (n(), a("div", Cc, [t("div", Lc, [(n(!0), a(R, null, A(b.value, (q, X) => (n(), a("div", {
                    class: "onlineGames__container-list__item",
                    key: X,
                    onClick: lt => d(i)(q)
                }, [O(e(q) + " ", 1), vt(t("img", null, null, 512), [
                    [B, q.img]
                ]), t("span", null, e(q.gameNameEn), 1)], 8, Nc))), 128))])]))])
            }
        }
    });
const Ic = F(zc, [
        ["__scopeId", "data-v-0ffc3892"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllOnlineGames/index.vue"]
    ]),
    eG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ic
    }, Symbol.toStringTag, {
        value: "Module"
    }));

function di() {
    const s = Wt({
            Original: [],
            HotGames: [],
            Lottery: [],
            Slot: [],
            Casino: [],
            Chess: [],
            Fish: [],
            Sport: []
        }),
        i = async () => {
            try {
                const {
                    data: o
                } = await at(xi());
                o && (s.Original = o.flash, s.HotGames = o.popular.platformList, s.Lottery = o.lottery, s.Casino = o.video, s.Slot = o.slot, s.Chess = o.chess, s.Fish = o.fish, s.Sport = o.sport)
            } catch {}
        };
    return Nt(() => i()), {
        gameData: s
    }
}
const Sc = {
        class: "luckyWinners__container"
    },
    xc = {
        class: "luckyWinners__container-wrapper"
    },
    Rc = {
        class: "luckyWinners__container-wrapper__item-img"
    },
    Bc = {
        class: "luckyWinners__container-wrapper__item-info"
    },
    Gc = {
        class: "luckyWinners__container-wrapper__item-winType"
    },
    Ac = {
        class: "luckyWinners__container-wrapper__item-winAmount"
    },
    Mc = V({
        __name: "index",
        setup(s) {
            const {
                homeState: i,
                getWinInfoDetail: o,
                getWinInfo: l
            } = we(), g = k(null), m = k(null);
            return Nt(async () => {
                await o(), Ao(m.value), i.winInfoList.length > 0 && (g.value = setInterval(async () => {
                    i.winInfoList.unshift(i.winInfoList.pop())
                }, 3e3))
            }), Si(() => {
                clearInterval(g.value)
            }), (r, c) => {
                const p = Ot("lazy");
                return n(), a("div", Sc, [t("h1", null, e(r.$t("winningDetal")), 1), t("div", xc, [t("div", {
                    ref_key: "wrapperRef",
                    ref: m
                }, [(n(!0), a(R, null, A(d(l).slice(0, 6), u => (n(), a("div", {
                    class: "luckyWinners__container-wrapper__item",
                    key: u
                }, [t("div", Rc, [vt(t("img", null, null, 512), [
                    [p, d(te)("main/Avatar", u.userPhoto) || d(te)("home", "avatar")]
                ])]), t("div", Bc, [t("h1", null, e(d(Qo)(u.nickName)), 1)]), t("div", Gc, [vt(t("img", null, null, 512), [
                    [p, u.imgUrl]
                ])]), t("div", Ac, [t("h1", null, e(r.$t("titleGot")) + " " + e(d(Lt)(u.amount || 0)), 1), t("span", null, e(r.$t("winningAmount")), 1)])]))), 128))], 512)])])
            }
        }
    });
const Je = F(Mc, [
        ["__scopeId", "data-v-ffb14677"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/LuckyWinners/index.vue"]
    ]),
    Pc = "/assets/png/First-e49c6346.png",
    Dc = "/assets/png/Second-3436aa5f.png",
    Oc = "/assets/png/Third-8be3ae53.png",
    _n = s => ($t("data-v-74b37c48"), s = s(), wt(), s),
    Ec = {
        class: "mainContainer"
    },
    qc = {
        key: 0,
        class: "mainContainer_profitContainer_medal"
    },
    jc = _n(() => t("span", null, [t("img", {
        src: Pc
    })], -1)),
    Hc = [jc],
    Wc = _n(() => t("div", {
        class: "mainContainer_profitContainer_medal"
    }, [t("span", null, [t("img", {
        src: Dc
    })])], -1)),
    Vc = _n(() => t("div", {
        class: "mainContainer_profitContainer_medal"
    }, [t("span", null, [t("img", {
        src: Oc
    })])], -1)),
    Fc = {
        class: "mainContainer_profitContainer_medal"
    },
    Uc = {
        class: "numberMedal"
    },
    Kc = {
        class: "mainContainer_profitContainer_img"
    },
    Xc = {
        class: "mainContainer_profitContainer_title"
    },
    Qc = {
        class: "mainContainer_profitContainer_amount"
    },
    Jc = V({
        __name: "ProfitRanking",
        setup(s) {
            const {
                topList: i,
                desensitizeString: o
            } = Jo();
            return (l, g) => {
                const m = Ot("lazy");
                return n(), a("div", Ec, [(n(!0), a(R, null, A(d(i).slice(0, 9), (r, c) => (n(), a("div", {
                    class: "mainContainer_profitContainer",
                    key: r
                }, [$(" Rank 1 "), c == 0 ? (n(), a("div", qc, Hc)) : c == 1 ? (n(), a(R, {
                    key: 1
                }, [$(" Rank 2 "), Wc], 2112)) : c == 2 ? (n(), a(R, {
                    key: 2
                }, [$(" Rank 3 "), Vc], 2112)) : (n(), a(R, {
                    key: 3
                }, [$(" Rank All "), t("div", Fc, [t("span", Uc, e(c + 1), 1)])], 2112)), t("div", Kc, [vt(t("img", null, null, 512), [
                    [m, d(te)("main/Avatar", r.userPhoto)]
                ])]), t("div", Xc, e(d(o)(r.nickName)), 1), t("div", Qc, e(d(Lt)(r.amount || 0)), 1)]))), 128))])
            }
        }
    });
const Ye = F(Jc, [
        ["__scopeId", "data-v-74b37c48"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/goGame/ProfitRanking.vue"]
    ]),
    Yc = {
        class: "originalmainContainer"
    },
    Zc = {
        class: "originalmainContainer_title"
    },
    tr = {
        class: "GameContainer"
    },
    er = {
        class: "GameContainer_games"
    },
    ir = ["src", "onClick"],
    nr = {
        class: "WinningContainer"
    },
    ar = {
        class: "Winningdata"
    },
    or = {
        class: "profitRanking"
    },
    sr = V({
        __name: "index",
        setup(s) {
            const {
                goGame: i
            } = fi(), {
                gameData: o
            } = di(), l = Y(() => o.Casino), g = dt(), m = () => {
                g.push("/")
            };
            return (r, c) => (n(), a(R, null, [t("div", Yc, [t("div", {
                class: "backSvg",
                onClick: m
            }), t("div", Zc, e(r.$t("live")), 1)]), $(" Games images containers starts from here "), t("div", tr, [t("div", er, [(n(!0), a(R, null, A(l.value, (p, u) => (n(), a("img", {
                key: u,
                src: p.vendorImg,
                onClick: b => d(i)(p)
            }, null, 8, ir))), 128))]), L(Je)]), $(" Today's Profit Ranking "), t("div", nr, e(r.$t("homename1")), 1), t("div", ar, [t("div", or, [L(Ye)])])], 64))
        }
    });
const lr = F(sr, [
        ["__scopeId", "data-v-e152b4a0"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/Casino/index.vue"]
    ]),
    iG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: lr
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    cr = {
        class: "originalmainContainer"
    },
    rr = {
        class: "originalmainContainer_title"
    },
    ur = {
        class: "GameContainer"
    },
    dr = {
        class: "GameContainer_games"
    },
    pr = ["src", "onClick"],
    gr = {
        class: "WinningContainer"
    },
    br = {
        class: "Winningdata"
    },
    mr = {
        class: "profitRanking"
    },
    _r = V({
        __name: "index",
        setup(s) {
            const {
                gameData: i
            } = di(), o = Y(() => i.Chess), l = dt(), g = () => {
                l.push("/")
            }, m = r => {
                sessionStorage.setItem("slotGamesList", JSON.stringify(o.value)), sessionStorage.setItem("gameType", JSON.stringify("chess")), sessionStorage.setItem("clickedItem", JSON.stringify(r)), l.push({
                    name: "AllOnlineGames",
                    query: {
                        game: "chess",
                        currentId: r.slotsName
                    }
                })
            };
            return (r, c) => (n(), a(R, null, [t("div", cr, [t("div", {
                class: "backSvg",
                onClick: g
            }), t("div", rr, e(r.$t("ChessandCards")), 1)]), $(" Games images containers starts from here "), t("div", ur, [t("div", dr, [(n(!0), a(R, null, A(o.value, (p, u) => (n(), a("img", {
                key: u,
                src: p.vendorImg,
                onClick: b => m(p)
            }, null, 8, pr))), 128))]), L(Je)]), $(" Today's Profit Ranking "), t("div", gr, e(r.$t("homename1")), 1), t("div", br, [t("div", mr, [L(Ye)])])], 64))
        }
    });
const vr = F(_r, [
        ["__scopeId", "data-v-9d069a04"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/Chess/index.vue"]
    ]),
    nG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: vr
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    kr = {
        class: "fish_game"
    },
    hr = {
        class: "fish_list"
    },
    fr = ["onClick"],
    yr = V({
        __name: "index",
        setup(s) {
            const i = Wt([]),
                {
                    t: o
                } = kt(),
                l = () => {
                    ui.back()
                },
                g = async () => {
                    const r = await at(la({
                        type: 11
                    }));
                    r && i.push(...r.data.gameLists)
                },
                m = r => {
                    Mo({
                        title: o("tips"),
                        message: o("tipsPlayGame"),
                        cancelButtonText: o("cancel"),
                        showCancelButton: !0
                    }).then(async () => {
                        let c = {
                            gameCode: r.gameCode || r.gameID,
                            vendorCode: Number(r.vendorId) || Number(r.slotsTypeID)
                        };
                        const p = await at(Yo({ ...c,
                            phonetype: ca()
                        }));
                        p && ra(p == null ? void 0 : p.data, 1)
                    })
                };
            return g(), (r, c) => {
                const p = H("NavBar"),
                    u = Ot("lazy");
                return n(), a("div", kr, [L(p, {
                    title: r.$t("fishing"),
                    backgroundColor: "linear-gradient(90deg, #CF0305 0%, #F23F3A 100%)",
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: l
                }, null, 8, ["title"]), t("div", hr, [(n(!0), a(R, null, A(i, b => vt((n(), a("img", {
                    class: "gameImg",
                    key: b.vendorId,
                    onClick: _ => m(b)
                }, null, 8, fr)), [
                    [u, b.img]
                ])), 128))])])
            }
        }
    });
const $r = F(yr, [
        ["__scopeId", "data-v-50e7ebdb"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/FishGames/index.vue"]
    ]),
    aG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: $r
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    wr = {
        class: "originalmainContainer"
    },
    Tr = {
        class: "originalmainContainer_title"
    },
    Cr = {
        class: "GameContainer"
    },
    Lr = {
        class: "GameContainer_games"
    },
    Nr = ["src", "onClick"],
    zr = {
        class: "WinningContainer"
    },
    Ir = {
        class: "Winningdata"
    },
    Sr = {
        class: "profitRanking"
    },
    xr = V({
        __name: "index",
        setup(s) {
            const {
                goGame: i
            } = fi(), {
                gameData: o
            } = di(), l = Y(() => o.Fish), g = dt(), m = () => {
                g.push("/")
            };
            return (r, c) => (n(), a(R, null, [t("div", wr, [t("div", {
                class: "backSvg",
                onClick: m
            }), t("div", Tr, e(r.$t("code9303Fish")), 1)]), $(" Games images containers starts from here "), t("div", Cr, [t("div", Lr, [(n(!0), a(R, null, A(l.value, (p, u) => (n(), a("img", {
                key: u,
                src: p.img,
                onClick: b => d(i)(p)
            }, null, 8, Nr))), 128))]), L(Je)]), $(" Today's Profit Ranking "), t("div", zr, e(r.$t("homename1")), 1), t("div", Ir, [t("div", Sr, [L(Ye)])])], 64))
        }
    });
const Rr = F(xr, [
        ["__scopeId", "data-v-3490866d"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/Fishing/index.vue"]
    ]),
    oG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Rr
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Br = s => ($t("data-v-127acf74"), s = s(), wt(), s),
    Gr = Br(() => t("div", {
        class: "originalmainContainer_title"
    }, "HotGames", -1)),
    Ar = {
        class: "GameContainer"
    },
    Mr = {
        class: "GameContainer_games"
    },
    Pr = ["src", "onClick"],
    Dr = V({
        __name: "index",
        setup(s) {
            const {
                goGame: i
            } = fi();
            kt();
            const o = dt();
            Zo();
            const l = k([]),
                g = async () => {
                    const r = await at(xi());
                    if (r) {
                        const {
                            clicksVideoTopList: c,
                            clicksTopList: p,
                            platformList: u
                        } = r.data.popular;
                        l.value = [...u, ...p, ...c]
                    }
                },
                m = () => {
                    o.push("/")
                };
            return Nt(() => {
                g()
            }), (r, c) => (n(), a(R, null, [t("div", {
                class: "originalmainContainer"
            }, [t("div", {
                class: "backSvg",
                onClick: m
            }), Gr]), $(" Games images containers starts from here "), t("div", Ar, [t("div", Mr, [(n(!0), a(R, null, A(l.value, (p, u) => (n(), a("img", {
                key: u,
                src: p.imgUrl,
                onClick: b => d(i)(p)
            }, null, 8, Pr))), 128))])])], 64))
        }
    });
const Or = F(Dr, [
        ["__scopeId", "data-v-127acf74"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/HotGames/index.vue"]
    ]),
    sG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Or
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    $i = s => ($t("data-v-b8ad632c"), s = s(), wt(), s),
    Er = {
        class: "topContainer"
    },
    qr = {
        class: "title"
    },
    jr = {
        class: "lotteryBanner"
    },
    Hr = {
        class: "banner"
    },
    Wr = {
        class: "insideBanner"
    },
    Vr = {
        class: "Firstbanner"
    },
    Fr = $i(() => t("span", {
        class: "line"
    }, null, -1)),
    Ur = {
        class: "insideFirstbanner"
    },
    Kr = $i(() => t("br", null, null, -1)),
    Xr = {
        class: "Lastbanner"
    },
    Qr = ["onClick"],
    Jr = {
        class: "insideMainContainer"
    },
    Yr = ["src"],
    Zr = {
        class: "Typo"
    },
    tu = $i(() => t("br", null, null, -1)),
    eu = $i(() => t("br", null, null, -1)),
    iu = $i(() => t("div", {
        class: "GoBtn"
    }, null, -1)),
    nu = {
        class: "Winningdata"
    },
    au = {
        class: "WinningContainer"
    },
    ou = {
        class: "Winningdata"
    },
    su = {
        class: "profitRanking"
    },
    lu = V({
        __name: "index",
        setup(s) {
            const {
                t: i
            } = kt(), o = dt(), {
                gameData: l
            } = di(), g = Y(() => l.Lottery), m = {
                1: {
                    title: i("lotteryHintStr1"),
                    describe: i("lotteryHintStr2"),
                    RouterName: "AllLotteryGames-WinGo"
                },
                2: {
                    title: i("lotteryHintStr1"),
                    describe: i("lotteryHintStr2"),
                    RouterName: "AllLotteryGames-K3"
                },
                3: {
                    title: i("lotteryHintStr1"),
                    describe: i("lotteryHintStr4"),
                    RouterName: "AllLotteryGames-5D"
                },
                4: {
                    title: i("lotteryHintStr1"),
                    describe: i("lotteryHintStr2"),
                    RouterName: "AllLotteryGames-WinTrx"
                },
                5: {
                    title: i("vietnamOfficialLottery"),
                    describe: i("lotteryHintStr6"),
                    RouterName: "AllLotteryGames-XoSo"
                },
                6: {
                    title: i("vietnamOfficialLottery"),
                    describe: i("lotteryHintStr6"),
                    RouterName: "AllLotteryGames-XoSo"
                },
                7: {
                    title: i("vietnamOfficialLottery"),
                    describe: i("lotteryHintStr6"),
                    RouterName: "AllLotteryGames-Binguo"
                },
                8: {
                    title: i("lotteryHintStr1"),
                    describe: i("lotteryHintStr2"),
                    RouterName: "AllLotteryGames-4D"
                }
            }, r = u => {
                let b;
                (u == 6 || u == 5) && (b = {
                    id: u
                }), o.push({
                    name: m[u].RouterName,
                    query: b
                })
            }, c = u => {
                o.push({
                    name: u
                })
            }, p = () => {
                o.push("/")
            };
            return (u, b) => (n(), a(R, null, [t("div", Er, [t("div", {
                class: "backSvg",
                onClick: p
            }), t("div", qr, e(u.$t("code9301")), 1)]), $(" Top Container finish here  "), t("div", jr, [t("div", Hr, [t("div", Wr, [t("div", Vr, [Fr, t("div", Ur, [O(e(u.$t("wingoLng")), 1), Kr, t("span", null, e(u.$t("lotteryResultFive")), 1)])]), t("div", Xr, [t("div", {
                class: "btnLottery",
                onClick: b[0] || (b[0] = _ => c("AllLotteryGames-ChangLong"))
            }, e(u.$t("dragonEntry")) + " >>", 1)])])])]), $(" Third container starts from here  "), (n(!0), a(R, null, A(g.value.slice(0, 4), (_, w) => {
                var f, C;
                return n(), a("div", {
                    class: "MainContainer",
                    key: w,
                    onClick: h => r(_.id)
                }, [t("div", Jr, [t("img", {
                    src: _.categoryImg,
                    alt: ""
                }, null, 8, Yr), t("div", Zr, [t("span", null, e(_.categoryCode), 1), tu, t("pre", null, e((f = m[_.id]) == null ? void 0 : f.title), 1), t("span", null, [eu, O(e((C = m[_.id]) == null ? void 0 : C.describe), 1)])]), iu])], 8, Qr)
            }), 128)), t("div", nu, [L(Je)]), $(" Today's Profit Ranking "), t("div", au, e(u.$t("homename1")), 1), t("div", ou, [t("div", su, [L(Ye)])])], 64))
        }
    });
const cu = F(lu, [
        ["__scopeId", "data-v-b8ad632c"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/Lottery/index.vue"]
    ]),
    lG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: cu
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ru = {
        class: "sysMessage__container"
    },
    uu = {
        class: "sysMessage__container-msgWrapper__item-title"
    },
    du = {
        class: "sysMessage__container-msgWrapper__item-time"
    },
    pu = {
        class: "sysMessage__container-msgWrapper__item-content"
    },
    gu = V({
        __name: "index",
        setup(s) {
            const {
                t: i
            } = kt(), {
                setLoading: o
            } = un(), l = k(), g = Be(), m = dt(), r = k(!1), c = k([]), p = Fn(), u = k({
                pageSize: 25
            });

            function b() {
                m.back()
            }
            async function _() {
                const C = Fn();
                await ts({
                    state: 1
                }).then(h => {
                    h && C.setReadState(!0)
                }).catch(h => {})
            }

            function w(C) {
                aa({
                    title: i("warning"),
                    message: i("warningTxt1")
                }).then(async () => {
                    if (await at(on({
                            messageID: C.messageID,
                            state: 2
                        }))) {
                        let T = c.value;
                        c.value = T.filter(z => z.messageID !== C.messageID)
                    }
                })
            }
            const f = g.getUserInfo;
            return Nt(async () => {
                o(!0), await _(), o(!1), l.value.resetRefresh(), f.unRead = 0, g.setUserInfo({ ...f
                }), p.setReadState(!0)
            }), (C, h) => {
                const T = H("NavBar"),
                    z = H("svg-icon");
                return n(), a("div", ru, [L(T, {
                    title: d(i)("notifications"),
                    backgroundColor: "#f7f8ff",
                    "left-arrow": "",
                    onClickLeft: b
                }, null, 8, ["title"]), L(ua, {
                    ref_key: "msgWrapperRef",
                    ref: l,
                    list: c.value,
                    "onUpdate:list": h[0] || (h[0] = y => c.value = y),
                    "page-query": u.value,
                    "onUpdate:pageQuery": h[1] || (h[1] = y => u.value = y),
                    api: d(is),
                    distance: 100,
                    isAutoLoad: r.value
                }, {
                    content: M(() => [(n(!0), a(R, null, A(c.value, y => (n(), a("div", {
                        class: "sysMessage__container-msgWrapper__item",
                        key: y.messageID
                    }, [t("div", uu, [$(' <component :is="item.state === 0 ? icons.messageIconRed : icons.messageIconIsRead" /> '), t("div", null, [L(z, {
                        class: "svg",
                        name: y.state === 0 ? "messageIconRed" : "notification"
                    }, null, 8, ["name"]), t("span", null, e(d(es)(y.title, 20)), 1)]), L(z, {
                        class: "svg",
                        name: "messageGarbage",
                        onClick: v => w(y)
                    }, null, 8, ["onClick"]), $(` <component
							:is="icons.messageGarbage"
							@click="($event: Event) => { $event.stopPropagation(); onDeleteClick(item) }"
						/> `)]), t("div", du, e(y.addTime), 1), t("div", pu, e(y.messages), 1)]))), 128))]),
                    _: 1
                }, 8, ["list", "page-query", "api", "isAutoLoad"])])
            }
        }
    });
const bu = F(gu, [
        ["__scopeId", "data-v-8084bf25"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/Messages/index.vue"]
    ]),
    cG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: bu
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    mu = {
        class: "originalmainContainer"
    },
    _u = {
        class: "originalmainContainer_title"
    },
    vu = {
        class: "GameContainer"
    },
    ku = {
        class: "GameContainer_games"
    },
    hu = ["src", "onClick"],
    fu = {
        class: "WinningContainer"
    },
    yu = {
        class: "Winningdata"
    },
    $u = {
        class: "profitRanking"
    },
    wu = V({
        __name: "index",
        setup(s) {
            const {
                goGame: i
            } = fi(), o = dt(), l = k([]), g = async () => {
                const r = await at(xi());
                r && (l.value = r.data.flash)
            }, m = () => {
                o.push("/")
            };
            return Nt(() => {
                g()
            }), (r, c) => (n(), a(R, null, [t("div", mu, [t("div", {
                class: "backSvg",
                onClick: m
            }), t("div", _u, e(r.$t("code9308Flash")), 1)]), $(" Games images containers starts from here "), t("div", vu, [t("div", ku, [(n(!0), a(R, null, A(l.value, (p, u) => (n(), a("img", {
                key: u,
                src: p.img,
                onClick: b => d(i)(p)
            }, null, 8, hu))), 128))]), L(Je)]), $(" Today's Profit Ranking "), t("div", fu, e(r.$t("homename1")), 1), t("div", yu, [t("div", $u, [L(Ye)])])], 64))
        }
    });
const Tu = F(wu, [
        ["__scopeId", "data-v-c9357f63"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/Original/index.vue"]
    ]),
    rG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Tu
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Aa = s => ($t("data-v-dbfeadbc"), s = s(), wt(), s),
    Cu = {
        class: "topContainer"
    },
    Lu = {
        class: "title"
    },
    Nu = {
        class: "slot_list"
    },
    zu = {
        class: "awardbox"
    },
    Iu = {
        class: "title"
    },
    Su = ["src"],
    xu = {
        class: "award_tip"
    },
    Ru = Aa(() => t("br", null, null, -1)),
    Bu = {
        class: "amount"
    },
    Gu = {
        class: "list"
    },
    Au = {
        class: "big_prize"
    },
    Mu = {
        class: "info"
    },
    Pu = {
        class: "text"
    },
    Du = {
        class: "tit"
    },
    Ou = {
        class: "multiple"
    },
    Eu = {
        class: "award"
    },
    qu = Aa(() => t("div", {
        class: "Slot_game"
    }, "Slot Game", -1)),
    ju = {
        class: "GameContainer"
    },
    Hu = {
        class: "GameContainer_games"
    },
    Wu = ["src", "onClick"],
    Vu = {
        class: "WinningContainer"
    },
    Fu = {
        class: "Winningdata"
    },
    Uu = {
        class: "profitRanking"
    },
    Ku = V({
        __name: "index",
        setup(s) {
            const {
                gameData: i
            } = di(), o = Y(() => i.Slot), l = Re(), g = Y(() => l.getJackportMaxReswadAmount), m = k([]), r = k([]), c = dt(), p = async () => {
                const w = await at(ns());
                w && (r.value = w.data)
            }, u = w => {
                sessionStorage.setItem("slotGamesList", JSON.stringify(o.value)), sessionStorage.setItem("gameType", JSON.stringify("slot")), sessionStorage.setItem("clickedItem", JSON.stringify(w)), c.push({
                    name: "AllOnlineGames",
                    query: {
                        game: "slot",
                        currentId: w.slotsName
                    }
                })
            }, b = async () => {
                const w = await at(xi());
                m.value = w.data.awardRecordList || {}
            }, _ = () => {
                c.push({
                    path: "/main/SuperJackpot"
                })
            };
            return p(), b(), (w, f) => (n(), a(R, null, [t("div", Cu, [t("div", {
                class: "backSvg",
                onClick: f[0] || (f[0] = C => d(c).back())
            }), t("div", Lu, e(w.$t("code9304Slot")), 1)]), t("div", Nu, [$(" big jiang "), t("div", zu, [t("div", Iu, [t("img", {
                src: d(te)("home", "award"),
                alt: ""
            }, null, 8, Su), O(" " + e(w.$t("code9309")), 1)]), t("div", xu, [O(e(w.$t("awarDesc1")), 1), Ru, O(" " + e(w.$t("awarDesc2")) + " ", 1), t("span", Bu, e(d(Lt)(g.value)), 1)]), t("div", Gu, [(n(!0), a(R, null, A(m.value.slice(0, 3), C => (n(), a("div", Au, [t("div", {
                class: "bg",
                style: oe({
                    backgroundImage: `url(${C.imgUrl})`
                })
            }, null, 4), t("div", Mu, [t("div", Pu, [t("div", Du, e(C == null ? void 0 : C.gameName), 1), t("div", Ou, e(C == null ? void 0 : C.multiple) + "X", 1)]), t("div", Eu, e(d(Lt)(C == null ? void 0 : C.bonusAmount)), 1)])]))), 256)), O("1 ")]), t("div", {
                class: "look_more",
                onClick: _
            }, e(w.$t("lookBigAward")) + " >>", 1)]), qu, $(" Games images containers starts from here "), t("div", ju, [t("div", Hu, [(n(!0), a(R, null, A(o.value, (C, h) => (n(), a("img", {
                key: h,
                src: C.vendorImg,
                onClick: T => u(C)
            }, null, 8, Wu))), 128))]), L(Je)]), $(" Today's Profit Ranking "), t("div", Vu, e(w.$t("homename1")), 1), t("div", Fu, [t("div", Uu, [L(Ye)])])])], 64))
        }
    });
const Xu = F(Ku, [
        ["__scopeId", "data-v-dbfeadbc"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/Slots/index.vue"]
    ]),
    uG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Xu
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Qu = {
        class: "originalmainContainer"
    },
    Ju = {
        class: "originalmainContainer_title"
    },
    Yu = {
        class: "GameContainer"
    },
    Zu = {
        class: "GameContainer_games"
    },
    td = ["src", "onClick"],
    ed = {
        class: "WinningContainer"
    },
    id = {
        class: "Winningdata"
    },
    nd = {
        class: "profitRanking"
    },
    ad = V({
        __name: "index",
        setup(s) {
            const {
                goGame: i
            } = fi(), {
                gameData: o
            } = di(), l = Y(() => o.Sport), g = dt(), m = () => {
                g.push("/")
            };
            return (r, c) => (n(), a(R, null, [t("div", Qu, [t("div", {
                class: "backSvg",
                onClick: m
            }), t("div", Ju, e(r.$t("PhysicalEducation")), 1)]), $(" Games images containers starts from here "), t("div", Yu, [t("div", Zu, [(n(!0), a(R, null, A(l.value, (p, u) => (n(), a("img", {
                key: u,
                src: p.vendorImg,
                onClick: b => d(i)(p)
            }, null, 8, td))), 128))]), L(Je)]), $(" Today's Profit Ranking "), t("div", ed, e(r.$t("homename1")), 1), t("div", id, [t("div", nd, [L(Ye)])])], 64))
        }
    });
const od = F(ad, [
        ["__scopeId", "data-v-f8ca9d4e"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/eSports/index.vue"]
    ]),
    dG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: od
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    sd = s => ($t("data-v-bc67dde2"), s = s(), wt(), s),
    ld = {
        class: "game-iframe"
    },
    cd = ["src"],
    rd = sd(() => t("img", {
        src: as,
        alt: ""
    }, null, -1)),
    ud = [rd],
    dd = V({
        __name: "index",
        setup(s) {
            const i = sn(),
                o = k(null),
                l = k(!1),
                {
                    x: g,
                    y: m,
                    style: r
                } = Po(o, {
                    initialValue: {
                        x: 30,
                        y: 30
                    },
                    preventDefault: !0,
                    onMove: () => {
                        l.value = !0
                    },
                    onEnd: () => {
                        setTimeout(() => l.value = !1)
                    }
                }),
                c = Y(() => {
                    const b = i.query.url;
                    if (!b) return "";
                    const _ = os(b || "");
                    return _.startsWith("https:") ? _ : `data:text/html;charset=utf-8,${encodeURIComponent(_)}`
                }),
                p = dt(),
                u = () => {
                    l.value || p.push({
                        name: "home"
                    })
                };
            return (b, _) => (n(), a("div", ld, [c.value ? (n(), a("iframe", {
                key: 0,
                src: c.value
            }, null, 8, cd)) : $("v-if", !0), t("div", {
                class: "close",
                ref_key: "el",
                ref: o,
                style: oe(d(r)),
                onClick: u
            }, ud, 4)]))
        }
    });
const pd = F(dd, [
        ["__scopeId", "data-v-bc67dde2"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/game/index.vue"]
    ]),
    pG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: pd
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    gd = [{
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
    bd = [{
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
    md = [{
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
    _d = s => Te(Ce.GetMyBingo18HistoryBetting, s),
    vd = () => Te(Ce.GetBinguoGameConfig),
    kd = () => Te(Ce.GetBingo18OddsList),
    hd = () => Te(Ce.GetGameBingo18Issue),
    fd = () => Te(Ce.GetBingo18LastGameResult),
    yd = s => Te(Ce.GetBingo18BetAmount, s),
    $d = s => Te(Ce.Bingo18Betting, s),
    Ma = () => Te(Ce.GetBingo18Last50Result),
    wd = () => Te(Ce.GetTrendstatistics),
    Td = () => Te(Ce.GetLotteryRankList),
    Cd = () => Te(Ce.GetLotteryResult7Day),
    Ld = s => Te(Ce.GetUserRankList, {
        uid: s
    }),
    le = Wt({
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
    } = Ri.global,
    zi = k([{
        title: ri("time"),
        key: "issueEndTime",
        isLockColumn: !0,
        isSlot: !0,
        width: "50px",
        cusTdClass: "column_time"
    }]),
    Ze = () => {
        const s = {
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
            i = Y(() => {
                let w = [],
                    f = [];
                for (let C = 0; C < le.last50List.length; C++) f.length < 5 || (w.push(f), f = []), f.push(le.last50List[C].resultSum), C === le.last50List.length - 1 && w.push(f);
                return w
            }),
            o = Y(() => {
                let w = le.last50List.map(C => C.resultSum),
                    f = b(w).slice(0, 10).reverse();
                return f.forEach(C => {
                    if (C.length < 5) {
                        let h = 5 - C.length;
                        for (let T = 0; T < h; T++) C.push("")
                    }
                }), f
            }),
            l = Y(() => le.last50List.map(w => {
                const f = w.result.split(""),
                    C = {};
                for (let h = 1; h <= 6; h++) C["num" + h] = f.filter(T => T === h.toString()).length;
                return {
                    issueNo: w.issueNo,
                    sum: w.resultSum,
                    ...C
                }
            })),
            g = async () => {
                const w = await at(Cd());
                if (w != null && w.data) {
                    zi.value = [{
                        title: ri("time"),
                        key: "issueEndTime",
                        isLockColumn: !0,
                        isSlot: !0,
                        width: "50px",
                        cusTdClass: "column_time"
                    }];
                    let f = w.data.reverse();
                    [...new Set(w.data.map(z => z.startDate))].slice(0, 7).reverse().forEach((z, y) => {
                        zi.value.push({
                            key: "time_index_" + y,
                            title: z,
                            isSlot: !0
                        })
                    });
                    let h = m(f, "issueEndTime"),
                        T = [];
                    Object.entries(h).forEach(([z, y]) => {
                        let v = {};
                        y.forEach((N, S) => {
                            var x;
                            let I = (x = zi.value.find(B => B.title === N.startDate)) == null ? void 0 : x.key;
                            v[`${I}`] = N
                        }), T.push({
                            issueEndTime: z,
                            ...v
                        })
                    }), le.last7Day = T.sort((z, y) => {
                        const v = z.issueEndTime.split(":"),
                            N = y.issueEndTime.split(":"),
                            S = parseInt(v[0]),
                            I = parseInt(v[1]),
                            x = parseInt(N[0]),
                            B = parseInt(N[1]);
                        return S === x ? I - B : S - x
                    })
                }
            };

        function m(w, f) {
            const C = {};
            return w.forEach(h => {
                const T = h[f];
                C[T] || (C[T] = []), C[T].push(h)
            }), C
        }
        const r = async () => {
                const w = await at(Td());
                w != null && w.data && (le.trendList = w.data);
                const C = Be().getUserInfo,
                    h = await at(Ld(C.userId));
                h != null && h.data && (h.data < 100 && (le.isTrend = !0), le.userRank = h.data)
            },
            c = async () => {
                const w = await at(Ma());
                w != null && w.data && (le.last50List = w.data)
            },
            p = async () => {
                const w = await at(wd());
                w && (le.resultSumTrend = w.data.resultSumTrend, le.smallAndBigTrend = w.data.smallAndBigTrend, le.threeSameTrend = w.data.threeSameTrend, le.twoSameTrend = w.data.twoSameTrend)
            },
            u = (w, f) => {
                let C = "",
                    h = "";
                return w === 1 ? (Number(f) ? C = _(Number(f)) : C = s[1][f].class, h = s[1].player) : w === 2 ? (C = s[2].class, h = s[2].player) : w === 3 ? (Number(f) < 5 ? C = "small" : Number(f) === 5 ? C = "sum" : C = "big", h = s[3].player) : w === 4 && (f.includes("*") ? C = "big" : /[123]/.test(f) ? C = "small" : C = "big", h = s[4].player), {
                    className: C,
                    playerName: h
                }
            };

        function b(w) {
            const f = [],
                C = [];
            let h = "";
            const T = y => y < 10 ? "small" : y > 11 ? "big" : "sum",
                z = (y, v) => {
                    let N = 0;
                    if (y !== v[v.length - 1]) return 0;
                    for (let S = v.length - 1; S >= 0; S--)
                        if (y === v[S]) N += 1;
                        else return N;
                    return N
                };
            for (let y = 0; y < w.length; y++) {
                const v = w[y],
                    N = T(v);
                if (f.length === 0 || N !== h) {
                    f.push([v]), h = N, C.push(h);
                    continue
                }
                if (f[f.length - 1].length < 5) f[f.length - 1].push(v);
                else {
                    let S = z(N, C),
                        I = f[f.length - S].length;
                    I === 5 ? (f.splice(f.length - S, 0, [v]), C.push(N)) : (I > 5, f[f.length - S].unshift(v))
                }
                h = N
            }
            return f
        }
        const _ = w => Number(w) < 10 ? "small" : Number(w) > 11 ? "big" : "sum";
        return {
            store: le,
            last50Result: i,
            last50Record: o,
            last50RecordResult: l,
            columnOptions: zi,
            filterStyle: _,
            filterGameType: u,
            getTrendstatistics: p,
            getLotteryRankList: r,
            getLotteryResult7Day: g,
            getBingo18Last50Result: c
        }
    },
    Nd = {
        class: "ar-searchbar__selector"
    },
    zd = {
        key: 0,
        class: "noSelect"
    },
    Id = {
        key: 1,
        class: "ar-searchbar__selector-default"
    },
    Sd = V({
        __name: "Calendar",
        emits: ["confirm"],
        setup(s, {
            expose: i,
            emit: o
        }) {
            const {
                minDate: l,
                maxDate: g
            } = da(), m = k(""), r = k(""), c = k(!1), p = _ => `${_.getFullYear()}-${_.getMonth()+1}-${_.getDate()}`, u = async _ => {
                c.value = !1;
                const [w, f] = _;
                m.value = p(w), r.value = p(f), o("confirm")
            };

            function b() {
                c.value = !0
            }
            return i({
                startDateValue: m,
                endDateValue: r
            }), (_, w) => {
                const f = H("van-icon"),
                    C = H("van-calendar");
                return n(), a(R, null, [t("div", Nd, [t("div", {
                    onClick: b
                }, [m.value === "" || r.value === "" ? (n(), a("span", zd, e(_.$t("datePick")), 1)) : (n(), a("span", Id, e(m.value) + "/" + e(r.value), 1)), L(f, {
                    name: "arrow-down"
                })])]), $(`<ArSelect @click-select="onClickSelectT" :selectName="$t('datePick')|| (startDateValue / endDateValue )"></ArSelect>`), $(' <van-popup v-model:show="showDataPick" round position="bottom"> '), L(C, {
                    show: c.value,
                    "onUpdate:show": w[0] || (w[0] = h => c.value = h),
                    type: "range",
                    onConfirm: u,
                    "min-date": d(l),
                    "max-date": d(g),
                    teleport: "body"
                }, null, 8, ["show", "min-date", "max-date"]), $(" </van-popup> ")], 64)
            }
        }
    }),
    xd = F(Sd, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/common/Calendar.vue"]
    ]),
    Rd = s => ($t("data-v-1115ff02"), s = s(), wt(), s),
    Bd = {
        class: "x-4d-head"
    },
    Gd = {
        class: "menu"
    },
    Ad = ["onClick"],
    Md = {
        class: "main"
    },
    Pd = {
        class: "item"
    },
    Dd = Rd(() => t("div", {
        class: "box"
    }, [t("div")], -1)),
    Od = [Dd],
    Ed = {
        class: "mask"
    },
    qd = ["onClick"],
    jd = {
        class: "img"
    },
    Hd = V({
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
                default: me().format("YYYY-MM-DD")
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
        setup(s, {
            emit: i
        }) {
            const l = Do(s, "modelValue", i),
                g = (b, _) => {
                    i("onLotteryTab", b, _)
                },
                m = (b, _) => {
                    i("onTime", b, _)
                },
                r = () => {
                    l.value = !0
                },
                c = () => {
                    l.value = !1
                },
                p = () => {
                    l.value ? c() : r()
                },
                u = k(null);
            return Oo(u, b => {
                l.value = !1
            }), (b, _) => {
                var C;
                const w = H("van-skeleton"),
                    f = Ot("lazy");
                return n(), a("div", Bd, [t("div", {
                    class: "time",
                    ref_key: "target",
                    ref: u
                }, [t("div", {
                    class: "box",
                    onClick: p
                }, e(b.timeVal.replace(/-/g, "/")) + " " + e(b.timeWeek(b.timeVal)), 1), vt(t("div", Gd, [t("h3", {
                    onClick: c
                }, e(b.$t("Drawdate")), 1), t("ul", null, [(n(!0), a(R, null, A(b.lotteryTab, (h, T) => (n(), a("li", {
                    class: G([b.timeVal == h.date ? "active" : ""]),
                    key: T,
                    onClick: z => m(h, T)
                }, e(h.date.replace(/-/g, "/")) + " " + e(b.timeWeek(h.date)), 11, Ad))), 128))])], 512), [
                    [Qt, d(l)]
                ])], 512), t("div", Md, [L(w, {
                    loading: !((C = b.lotteryTab[b.timeIndex]) != null && C.games),
                    class: "flex"
                }, {
                    template: M(() => [(n(), a(R, null, A(10, () => t("div", Pd, Od)), 64))]),
                    default: M(() => {
                        var h;
                        return [vt(t("div", Ed, null, 512), [
                            [Qt, d(l)]
                        ]), (n(!0), a(R, null, A((h = b.lotteryTab[b.timeIndex]) == null ? void 0 : h.games, (T, z) => (n(), a("div", {
                            class: "item",
                            key: z,
                            onClick: y => g(T, z)
                        }, [t("div", {
                            class: G(["box", [b.lotteryList.includes(T.type) ? "active" : ""]])
                        }, [vt(t("img", jd, null, 512), [
                            [f, T.typeImg]
                        ])], 2)], 8, qd))), 128))]
                    }),
                    _: 1
                }, 8, ["loading"])])])
            }
        }
    });
const Wd = F(Hd, [
        ["__scopeId", "data-v-1115ff02"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/4D/components/lotterylist.vue"]
    ]),
    Vd = {
        class: "betType"
    },
    Fd = {
        class: "title"
    },
    Ud = {
        class: "betType-list"
    },
    Kd = {
        class: "item action"
    },
    Xd = ["onClick"],
    Qd = V({
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
        setup(s, {
            emit: i
        }) {
            const o = l => {
                i("onBetType", l)
            };
            return (l, g) => {
                const m = H("van-skeleton");
                return n(), a(R, null, [$(" 投注类型 "), t("div", Vd, [t("h4", Fd, e(l.$t("xosoTxt78")), 1), t("ul", Ud, [L(m, {
                    loading: !l.betTypeList,
                    class: "flex"
                }, {
                    template: M(() => [(n(), a(R, null, A(7, () => t("li", Kd)), 64))]),
                    default: M(() => [(n(!0), a(R, null, A(l.betTypeList, (r, c) => (n(), a("li", {
                        class: G([l.betType.includes(r) ? "item action" : "item"]),
                        onClick: p => o(r),
                        key: c
                    }, e(l.$t("d4gameType" + r)), 11, Xd))), 128))]),
                    _: 1
                }, 8, ["loading"])])])], 2112)
            }
        }
    });
const Jd = F(Qd, [
        ["__scopeId", "data-v-40039812"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/4D/components/bettype.vue"]
    ]),
    Yd = {
        class: "howPay"
    },
    Zd = {
        class: "title"
    },
    tp = {
        class: "howPay-list"
    },
    ep = {
        class: "item"
    },
    ip = {
        key: 0,
        class: "icon"
    },
    np = V({
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
        setup(s, {
            emit: i
        }) {
            const o = s,
                l = r => r.includes(5) ? r.slice(0, -1) : r,
                g = r => {
                    let c = !1,
                        p = (r === 2 || r === 3) && o.banBetPay === 1 || o.rollNum > 0,
                        u = o.duplex ? (r === 2 || r === 3 || r === 4) && o.banBetPay === 1 : r === 2 && (r === 2 || r === 3) && o.banBetPay === 1;
                    return (p || u) && (c = !0), c
                },
                m = r => {
                    i("onBetpay", r)
                };
            return (r, c) => {
                const p = H("van-icon"),
                    u = H("van-button"),
                    b = H("van-skeleton");
                return n(), a(R, null, [$(" 玩法 "), t("div", Yd, [t("h4", Zd, e(r.$t("gamePlay")), 1), t("ul", tp, [L(b, {
                    loading: !l(r.betPayList),
                    class: "flex"
                }, {
                    template: M(() => [(n(), a(R, null, A(4, () => t("li", ep)), 64))]),
                    default: M(() => [(n(!0), a(R, null, A(l(r.betPayList), (_, w) => (n(), it(u, {
                        plain: "",
                        disabled: g(_),
                        class: G([_ == r.betPayId ? "item action" : "item"]),
                        onClick: f => m(_),
                        key: w
                    }, {
                        default: M(() => [O(e(r.$t("d4gamePay" + _)) + " ", 1), _ == r.betPayId ? (n(), a("i", ip, [L(p, {
                            name: "success"
                        })])) : $("v-if", !0)]),
                        _: 2
                    }, 1032, ["disabled", "class", "onClick"]))), 128))]),
                    _: 1
                }, 8, ["loading"])])])], 2112)
            }
        }
    });
const ap = F(np, [
        ["__scopeId", "data-v-42192c16"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/4D/components/betpay.vue"]
    ]),
    op = {
        class: "betAmount"
    },
    sp = {
        class: "title"
    },
    lp = {
        class: "betAmount-list"
    },
    cp = ["onClick"],
    rp = V({
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
        setup(s, {
            emit: i
        }) {
            const o = l => {
                i("onAmount", l)
            };
            return (l, g) => (n(), a("div", op, [t("h4", sp, e(l.$t("betAmounts")), 1), t("ul", lp, [(n(!0), a(R, null, A(l.list, (m, r) => (n(), a("li", {
                class: G([m == l.count ? "item active" : "item"]),
                onClick: c => o(m),
                key: r
            }, e(m), 11, cp))), 128))])]))
        }
    });
const up = F(rp, [
        ["__scopeId", "data-v-1c2e9816"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/4D/components/betamount.vue"]
    ]),
    dp = s => ($t("data-v-f88540df"), s = s(), wt(), s),
    pp = {
        class: "select"
    },
    gp = {
        class: "tab"
    },
    bp = ["onClick"],
    mp = dp(() => t("span", null, "ALL", -1)),
    _p = {
        class: "numList"
    },
    vp = ["onClick"],
    kp = V({
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
        setup(s, {
            emit: i
        }) {
            const o = g => {
                    i("allAddnum", g)
                },
                l = (g, m) => {
                    i("addNumber", g, m)
                };
            return (g, m) => (n(), a("div", pp, [t("ul", gp, [(n(!0), a(R, null, A(g.tabList, (r, c) => (n(), a("li", {
                onClick: p => o(r.type),
                class: G(g.allActive.includes(r.type) ? "active" : ""),
                key: c
            }, [O(e(r.name) + " ", 1), mp], 10, bp))), 128))]), t("div", _p, [(n(!0), a(R, null, A(g.numList, (r, c) => (n(), a("ul", {
                key: c
            }, [(n(), a(R, null, A(10, (p, u) => t("li", {
                class: G([r != null && r.list.includes(u) ? "action" : ""]),
                key: p,
                onClick: b => l(c, u)
            }, e(u), 11, vp)), 64))]))), 128))])]))
        }
    });
const hp = F(kp, [
        ["__scopeId", "data-v-f88540df"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/4D/components/duplexbet.vue"]
    ]),
    fp = {
        class: "foot"
    },
    yp = {
        class: "item"
    },
    $p = {
        class: "marks"
    },
    wp = {
        class: "item"
    },
    Tp = {
        class: "marks"
    },
    Cp = V({
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
        setup(s, {
            emit: i
        }) {
            const o = s,
                l = () => {
                    o.totalAmount > 0 && i("onBet")
                };
            return (g, m) => (n(), a("div", fp, [t("div", yp, [t("p", null, e(g.$t("quantity")), 1), t("span", $p, e(s.betQuantity), 1)]), $('				<div class="bar" />'), t("div", wp, [t("p", null, e(g.$t("betAmounts")), 1), t("span", Tp, e(d(pa)(s.totalAmount)), 1)]), t("div", {
                class: G(["item bet", [s.totalAmount > 0 ? "active" : ""]]),
                onClick: l
            }, e(g.$t("betting")), 3)]))
        }
    });
const Lp = F(Cp, [
        ["__scopeId", "data-v-fd9536f0"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/4D/components/navfoot.vue"]
    ]),
    Np = {
        class: "x-bet"
    },
    zp = {
        class: "x-bet-sub"
    },
    Ip = {
        class: "x-bet-lottery"
    },
    Sp = {
        class: "x-bet-title"
    },
    xp = {
        class: "box"
    },
    Rp = {
        class: "img"
    },
    Bp = {
        class: "x-bet-type"
    },
    Gp = {
        class: "x-bet-title"
    },
    Ap = {
        class: "box"
    },
    Mp = {
        class: "x-bet-multiple"
    },
    Pp = {
        class: "tit"
    },
    Dp = {
        class: "box"
    },
    Op = {
        class: "multiple-list"
    },
    Ep = {
        class: "box"
    },
    qp = ["onClick"],
    jp = {
        class: "x-bet-list"
    },
    Hp = {
        class: "item"
    },
    Wp = {
        class: "lab"
    },
    Vp = {
        class: "number"
    },
    Fp = {
        class: "item"
    },
    Up = {
        class: "lab"
    },
    Kp = {
        class: "balance"
    },
    Xp = {
        class: "item"
    },
    Qp = {
        class: "lab"
    },
    Jp = {
        class: "amount"
    },
    Yp = {
        key: 0,
        class: "x-bet-wallet"
    },
    Zp = {
        class: "tip"
    },
    tg = {
        class: "x-bet-agree"
    },
    eg = {
        class: "agree"
    },
    ig = {
        class: "x-bet-foot"
    },
    ng = V({
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
        setup(s, {
            emit: i
        }) {
            const o = s,
                l = dt(),
                g = T => {
                    i("getClear", T)
                },
                m = T => {
                    i("onStepper", T)
                },
                r = T => {
                    i("changeStep", T)
                },
                c = T => {
                    i("onMltiple", T)
                },
                p = T => {
                    i("checkboxChange", T)
                },
                u = () => {
                    i("onCancel")
                },
                b = () => {
                    i("onBet")
                },
                _ = T => {
                    const {
                        lotteryTab: z,
                        timeIndex: y
                    } = o;
                    let v = z[y].games.find(N => N.type == T);
                    return v == null ? void 0 : v.typeImg
                },
                {
                    checked: w,
                    betShow: f,
                    countVal: C,
                    preSaleRule: h
                } = oa(o, i);
            return (T, z) => {
                const y = H("van-icon"),
                    v = H("van-field"),
                    N = H("van-checkbox"),
                    S = H("van-popup"),
                    I = Ot("lazy");
                return n(), it(S, {
                    show: d(f),
                    "onUpdate:show": z[7] || (z[7] = x => ce(f) ? f.value = x : null),
                    position: "bottom",
                    "close-on-click-overlay": !1,
                    style: {
                        borderRadius: "15px 15px 0 0"
                    }
                }, {
                    default: M(() => [t("div", Np, [t("div", zp, [O(e(T.$t("betting")) + " ", 1), t("div", {
                        class: "clear",
                        onClick: z[0] || (z[0] = x => g(1))
                    }, [L(y, {
                        class: "icon",
                        name: "delete-o"
                    }), O(e(T.$t("Clear")), 1)])]), $("  "), $(` <div class="x-bet-maxbet" v-if="tipShow"><span class="tip"> {{ $t('d4BetTip',[7000]) }}</span></div> `), t("div", Ip, [t("h5", Sp, e(T.$t("ColorSpecies")), 1), t("ul", xp, [(n(!0), a(R, null, A(T.lotteryList, (x, B) => (n(), a("li", {
                        class: "item",
                        key: B
                    }, [vt(t("img", Rp, null, 512), [
                        [I, _(x)]
                    ])]))), 128))])]), t("div", Bp, [t("h5", Gp, e(T.$t("xosoTxt78")), 1), t("ul", Ap, [(n(!0), a(R, null, A(T.betType, (x, B) => (n(), a("li", {
                        class: "item",
                        key: B
                    }, e(T.$t("d4gameType" + x)), 1))), 128))])]), $(" 投注 "), _e(T.$slots, "default", {}, void 0, !0), t("div", Mp, [t("div", Pp, e(T.$t("multiple")), 1), t("div", Dp, [t("div", {
                        class: "li minus",
                        onClick: z[1] || (z[1] = x => m(1))
                    }, [L(y, {
                        name: "minus"
                    })]), L(v, {
                        class: "digit",
                        modelValue: d(C),
                        "onUpdate:modelValue": z[2] || (z[2] = x => ce(C) ? C.value = x : null),
                        type: "digit",
                        maxlength: 5,
                        onInput: r
                    }, null, 8, ["modelValue"]), t("div", {
                        class: "li plus",
                        onClick: z[3] || (z[3] = x => m(2))
                    }, [L(y, {
                        name: "plus"
                    })])])]), t("div", Op, [t("div", Ep, [(n(!0), a(R, null, A(T.multipleList, (x, B) => (n(), a("div", {
                        key: B,
                        class: G(d(C) == x ? "active item" : "item"),
                        onClick: D => c(x)
                    }, " X" + e(x), 11, qp))), 128))])]), t("div", jp, [t("div", Hp, [t("div", Wp, e(T.$t("quantity")), 1), t("div", Vp, e(T.betQuantity) + e(T.$t("note")), 1)]), t("div", Fp, [t("div", Up, e(T.$t("walletBalance")), 1), t("div", Kp, e(d(Lt)(T.balance)), 1)]), t("div", Xp, [t("div", Qp, e(T.$t("betAmounts")), 1), t("div", Jp, e(d(pa)(T.totalAmount)), 1), $("K")])]), T.totalAmount > T.balance ? (n(), a("div", Yp, [t("div", Zp, [L(y, {
                        name: "warning-o",
                        color: "var(--norm_red-color)",
                        size: "17"
                    }), O(" " + e(T.$t("insufficientWallet")), 1)]), t("div", {
                        class: "txt",
                        onClick: z[4] || (z[4] = x => d(l).push({
                            name: "Recharge"
                        }))
                    }, e(T.$t("torecharge")) + " >>", 1)])) : $("v-if", !0), t("div", tg, [L(N, {
                        modelValue: d(w),
                        "onUpdate:modelValue": z[5] || (z[5] = x => ce(w) ? w.value = x : null),
                        "checked-color": "var(--main-color)",
                        onChange: p
                    }, {
                        default: M(() => [t("div", eg, e(T.$t("agree")), 1)]),
                        _: 1
                    }, 8, ["modelValue"]), t("span", {
                        class: "txt",
                        onClick: z[6] || (z[6] = x => h.value = !0)
                    }, e(T.$t("presaleRules")), 1)])]), t("div", ig, [t("div", {
                        class: "cancel",
                        onClick: u
                    }, e(T.$t("cancel")), 1), t("div", {
                        class: "bet",
                        onClick: b
                    }, e(T.$t("betting")), 1)])]),
                    _: 3
                }, 8, ["show"])
            }
        }
    });
const ag = F(ng, [
        ["__scopeId", "data-v-3557dd80"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/4D/components/betpopup.vue"]
    ]),
    og = {
        class: "x-bet"
    },
    sg = {
        key: 0,
        class: "x-bet-box"
    },
    lg = {
        class: "item"
    },
    cg = {
        class: "pay"
    },
    rg = {
        class: "txt"
    },
    ug = {
        class: "item"
    },
    dg = {
        class: "num"
    },
    pg = {
        class: "txt"
    },
    gg = {
        key: 1,
        class: "x-bet-pay"
    },
    bg = {
        class: "x-bet-title"
    },
    mg = {
        class: "name"
    },
    _g = {
        key: 2,
        class: "x-bet-dupleList"
    },
    vg = {
        class: "digits"
    },
    kg = {
        class: "sub"
    },
    hg = {
        class: "list"
    },
    fg = {
        class: "item"
    },
    yg = V({
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
        setup(s) {
            return (i, o) => (n(), a("div", og, [$(" 输入投注 "), i.tabId === 1 ? (n(), a("div", sg, [t("div", lg, [t("span", cg, e(i.$t("d4gamePay" + i.betPay)), 1), t("p", rg, e(i.$t("gamePlay")), 1)]), t("div", ug, [t("span", dg, e(i.num), 1), t("p", pg, e(i.$t("bettingnumber")), 1)])])) : $("v-if", !0), $(" 选择投注 "), i.tabId === 2 ? (n(), a("div", gg, [t("h5", bg, e(i.$t("gamePlay")), 1), t("div", mg, e(i.$t("d4gamePay" + i.betPay)), 1)])) : $("v-if", !0), i.tabId === 2 ? (n(), a("div", _g, [(n(!0), a(R, null, A(i.dupleList, (l, g) => (n(), a("div", {
                class: "box",
                key: g
            }, [t("div", vg, [t("div", kg, e(i.tabList[g].name), 1), t("div", hg, [(n(!0), a(R, null, A(l.list, (m, r) => (n(), a("div", {
                class: "num",
                key: r
            }, [t("div", fg, e(m), 1)]))), 128))])])]))), 128))])) : $("v-if", !0)]))
        }
    });
const $g = F(yg, [
        ["__scopeId", "data-v-d0caa9aa"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/4D/components/betcontent.vue"]
    ]),
    Qn = k(!1),
    Yi = k(!1),
    Jn = k(0),
    Ii = k(),
    Yn = k();

function pi() {
    const s = Wt({
            timeVal: me().format("YYYY-MM-DD"),
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
        } = un(),
        l = k(""),
        g = k(1),
        m = k(!0),
        r = k(!1),
        c = k(!1),
        p = k([{}]),
        u = k(),
        b = k(),
        _ = [{
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
        w = Y(() => s.timeVal),
        f = Y(() => s.timeIndex),
        C = Y(() => s.lotteryList),
        h = Y(() => s.lotteryTab),
        T = Y(() => s.tabId),
        z = Y(() => s.rollNum),
        y = Y(() => s.betType),
        v = Y(() => s.betTypeList),
        N = Y(() => s.betPay),
        S = Y(() => s.betPayList),
        I = Y(() => s.betAmount),
        x = Y(() => s.totalAmount),
        B = Y(() => s.betQuantity),
        D = Y(() => s.banbetpay),
        P = Y(() => s.dupleList),
        q = Y(() => s.allActive),
        X = Y(() => s.multipleList),
        lt = Y(() => s.betAmountList),
        gt = Y(() => s.duplex),
        rt = Y(() => s.balance),
        J = U => {
            const et = [i("Sunday"), i("Monday"), i("Tuesday"), i("Wednesday"), i("Thursday"), i("Friday"), i("Saturday")],
                bt = new Date(U);
            return et[bt.getDay()]
        },
        Q = (U, et) => {
            s.timeIndex = et, s.timeVal = U.date, At(1), Qn.value = !1
        },
        st = (U, et) => {
            if (s.lotteryList.includes(U.type)) {
                let bt = s.lotteryList.indexOf(U.type);
                s.lotteryList.splice(bt, 1)
            } else s.lotteryList.push(U.type);
            tt(s.betType.length, s.betAmount, s.betPay)
        },
        Rt = U => {
            s.tabId = U, At(0)
        },
        At = U => {
            l.value = "", s.betPay = 1, s.rollNum = 0, s.betType.length = 0, s.betAmount = s.betAmountList[0], s.dupleList.forEach(et => et.list = []), s.allActive.length = 0, g.value = 1, ot(), c.value = !1, U == 1 && (s.lotteryList.length = 0)
        },
        ot = () => {
            s.totalAmount = 0, s.betQuantity = 0, s.banbetpay = 0
        },
        yt = () => {
            if (s.rollNum >= 2 || l.value.length >= 4) return Dt(i("EnterTip"));
            s.betPay = 5, l.value += "R", s.rollNum = _t(l.value.split("")), tt(s.betType.length, s.betAmount, s.betPay)
        },
        Tt = U => {
            l.value = U.target.value, l.value == "" && (s.betPay = 1), l.value.length !== 4 ? ot() : Gt(U.target.value) ? (tt(s.betType.length, s.betAmount, s.betPay), s.banbetpay = Et(l.value), s.banbetpay === 1 && (s.betPay = 1)) : (l.value = "", s.betPay = 1, Dt(i("FormatTip1"))), s.rollNum = _t(l.value.split(""))
        },
        Bt = U => {
            if (U.target.value == "" || U.target.value.length !== 4) return;
            Gt(U.target.value) || (l.value = "", s.betPay = 1, Dt(i("FormatTip1")))
        },
        Gt = U => /^[0-9]{4}|\R[0-9]{3}|[0-9]{1}\R[0-9]{2}|[0-9]{2}\R[0-9]{1}|\R[0-9]{2}\R|[0-9]{2}\R{2}|\R{2}[0-9]{2}|[0-9]{3}\R|[0-9]\R{2}[0-9]|[0-9]\R[0-9]\R|\R[0-9]\R[0-9]$/.test(U),
        _t = U => {
            let et = U.indexOf("R"),
                bt = 0;
            for (; et !== -1;) bt++, et = U.indexOf("R", et + 1);
            return bt
        },
        nt = U => {
            const {
                betType: et,
                betAmount: bt,
                betPay: zt
            } = s;
            if (et.includes(U)) {
                let jt = et.indexOf(U);
                et.splice(jt, 1)
            } else et.push(U);
            tt(et.length, bt, zt)
        },
        ct = U => {
            s.betPay = U, tt(s.betType.length, s.betAmount, U)
        },
        Z = U => {
            s.betAmount = U, tt(s.betType.length, U, s.betPay)
        },
        tt = (U, et, bt) => {
            let {
                tabId: zt,
                dupleList: jt,
                lotteryList: Pt
            } = s;
            if (zt === 1) {
                if (l.value.length !== 4) return !1;
                W(U, et, l.value, bt)
            } else if (Ne(jt)) s.betQuantity = ht(jt) * Pt.length * s.betType.length, s.totalAmount = s.betQuantity * et * Pt.length * g.value;
            else {
                const Vt = jt.map(qt => qt.list[0]).join("");
                if (Vt.length !== 4) return;
                s.banbetpay = Et(Vt), W(U, et, Vt, bt)
            }
        },
        W = (U, et, bt, zt) => {
            let {
                rollNum: jt,
                lotteryList: Pt
            } = s, Vt = U * et * Pt.length * g.value, qt = U * Pt.length, Yt = 0, se = 0;
            if (zt === 1 || zt === 2) Yt = Vt, se = qt;
            else if (zt === 3) {
                const qe = Et(bt);
                Yt = Vt * qe, se = qt * qe
            } else if (zt === 4) {
                const qe = Ct(bt);
                Yt = Vt * (qe ? 1 : 2), se = qt * (qe ? 1 : 2)
            } else zt === 5 && (Yt = Vt * (jt > 0 ? jt == 1 ? 10 : 10 * 10 : 0), se = qt * (jt > 0 ? jt == 1 ? 10 : 10 * 10 : 0));
            s.totalAmount = Yt, s.betQuantity = se
        },
        Ct = U => U === U.split("").reverse().join("");

    function Et(U) {
        function et(qt) {
            return qt <= 1 ? 1 : qt * et(qt - 1)
        }
        let bt = U.split("").map(Number),
            zt = [...new Set(bt)],
            jt = et(bt.length),
            Pt = 1;
        for (const qt of zt) {
            const Yt = bt.filter(se => se === qt).length;
            Pt *= et(Yt)
        }
        return jt / Pt
    }
    const ie = U => {
            const {
                dupleList: et,
                allActive: bt,
                betType: zt,
                betAmount: jt
            } = s;
            if (et[U].list = [], bt.includes(U)) {
                let Pt = bt.indexOf(U);
                bt.splice(Pt, 1)
            } else {
                bt.push(U);
                for (let Pt = 0; Pt < 10; Pt++) et[U].list.push(Pt)
            }
            ue(), tt(zt.length, jt)
        },
        Le = (U, et) => {
            const {
                dupleList: bt,
                allActive: zt,
                betType: jt,
                betAmount: Pt,
                betPay: Vt
            } = s, qt = bt[U].list;
            if (qt.includes(et)) {
                let Yt = qt.indexOf(et);
                qt.splice(Yt, 1)
            } else qt.push(et);
            if (qt.length === 10) zt.push(U);
            else if (zt.includes(U)) {
                let Yt = zt.indexOf(U);
                zt.splice(Yt, 1)
            }
            if (ue(), ht(bt) > 0) {
                if (tt(jt.length, Pt, Vt), ht(bt) === 1) {
                    const Yt = bt.map(se => se.list[0]).join("");
                    s.banbetpay = Et(Yt)
                }
                s.banbetpay === 1 && (s.betPay = 1)
            } else Ne(bt) ? s.banbetpay = Ne(bt) ? 1 : 0 : ot()
        },
        ue = () => {
            const {
                dupleList: U
            } = s;
            s.duplex = Ne(U), s.banbetpay = Ne(U) ? 1 : 0, Ne(U) && (s.betPay = 1)
        };

    function Ne(U) {
        for (let et = 0; et < U.length; et++) {
            const bt = U[et].list;
            if (Array.isArray(bt) && bt.length > 1) return !0
        }
        return !1
    }

    function ht(U) {
        let et = 1;
        return U.forEach((bt, zt) => {
            et *= bt.list.length
        }), et
    }
    const ze = () => {
            c.value = !0
        },
        Ge = U => {
            const {
                betType: et,
                betAmount: bt,
                betPay: zt
            } = s;
            switch (U) {
                case 1:
                    g.value > 1 && g.value--;
                    break;
                case 2:
                    g.value++;
                    break
            }
            tt(et.length, bt, zt)
        },
        Ie = U => {
            const {
                betType: et,
                betAmount: bt,
                betPay: zt
            } = s;
            g.value = U.target.value, tt(et.length, bt, zt)
        },
        We = U => {
            const {
                betType: et,
                betAmount: bt,
                betPay: zt
            } = s;
            g.value = U, tt(et.length, bt, zt)
        },
        It = U => {
            m.value = U
        },
        he = () => {
            const {
                lotteryList: U,
                lotteryTab: et,
                timeIndex: bt,
                tabId: zt,
                betPay: jt,
                betType: Pt,
                betQuantity: Vt,
                betAmount: qt,
                dupleList: Yt,
                totalAmount: se,
                balance: qe
            } = s;
            if (se > qe) return Dt(i("wfDesc3"));
            if (Vt / U.length > 7e3) return Dt(i("d4BetTip", [7e3]));
            if (!m.value) return Dt(i("agreePresaleRules"));
            let de = {};
            de.type = U, de.gameType = jt;
            let vi = "";
            zt === 1 ? vi = l.value : vi = Yt.map(ni => ni.list.sort((Me, je) => Me - je).join(",")).join("|"), de.betContent = vi, de.betType = Pt, de.betMethod = zt, de.betNumber = Vt, de.multiple = Number(g.value), de.amount = qt, de.issueNumber = U.map(ni => {
                const Me = et[bt].games.find(je => je.type === ni);
                return Me == null ? void 0 : Me.issueNumber
            }), c.value = !1, Ci(de), ti()
        },
        ti = () => {
            setTimeout(() => {
                Yi.value = !1
            }, 1500)
        },
        fe = async () => {
            const U = await at(dn());
            U != null && U.data && (s.balance = (U == null ? void 0 : U.data.amount) || 0)
        },
        Hi = async () => {
            const U = await at(ss());
            U != null && U.data && (s.multipleList = (U == null ? void 0 : U.data.betMultiplier) || [], s.betAmountList = (U == null ? void 0 : U.data.betAmount) || [], s.betTypeList = (U == null ? void 0 : U.data.betType) || [], s.betPayList = (U == null ? void 0 : U.data.gameType) || [], s.betAmount = (U == null ? void 0 : U.data.betAmount[0]) || 0)
        },
        Jt = async () => {
            o(!0);
            const U = await at(ls());
            U != null && U.data && (s.timeVal = U.data[s.timeIndex].date, s.lotteryTab = (U == null ? void 0 : U.data) || []), o(!1)
        },
        Ci = async U => {
            const et = await at(cs(U));
            (et == null ? void 0 : et.code) === 0 ? (Yi.value = !0, fe(), Jn.value === 1 && Ae({
                pageSize: 10,
                pageNo: 1,
                type: 0,
                date: me(new Date).format("YYYY-MM-DD") + " 00:00:00"
            }), ti()) : Jt(), At(1)
        },
        Ut = async () => {
            o(!0), p.value.length = 0;
            const U = await at(rs());
            U != null && U.data && (U == null || U.data.forEach(et => {
                let bt = [],
                    zt = [],
                    jt = [];
                et.items.forEach(Pt => {
                    Pt.playId.split("_").length == 1 ? jt.push({ ...Pt,
                        code: Pt.playId
                    }) : (Pt.playId.split("_")[0] == "1" && bt.push({ ...Pt,
                        code: Pt.playId.split("_")[1]
                    }), Pt.playId.split("_")[0] == "2" && zt.push({ ...Pt,
                        code: Pt.playId.split("_")[1]
                    }))
                }), p.value.push({
                    playTypeId: et.playTypeId,
                    playTypeTitle: et.playTypeTitle,
                    lists: [{
                        type: 1,
                        list: bt
                    }, {
                        type: 2,
                        list: zt
                    }, {
                        type: 3,
                        list: jt
                    }]
                })
            })), o(!1)
        },
        _i = async () => {
            if (Ii.value) return;
            o(!0);
            const U = await at(us());
            U != null && U.data && (Ii.value = U.data.map(et => (et.typeName = i(`d4LType${et.typeId}`), et)), Ii.value.unshift({
                typeId: 0,
                typeName: i("all")
            })), o(!1)
        },
        Ae = async U => {
            o(!0);
            const et = await at(ds(U));
            et != null && et.data && (Yn.value = (et == null ? void 0 : et.data) || {}), o(!1)
        },
        ei = async () => {
            o(!0);
            const U = await at(ps());
            U != null && U.data && (u.value = (U == null ? void 0 : U.data) || []), o(!1)
        },
        Ee = async U => {
            o(!0);
            const et = await at(gs(U));
            et && (b.value = (et == null ? void 0 : et.data) || {}), o(!1)
        },
        ii = async U => {
            const et = await at(bs(U));
            return new Promise(async (bt, zt) => {
                et ? bt(et) : zt(et)
            })
        };
    return Fe(() => {
        clearInterval(s.stopTime)
    }), {
        tabList: _,
        getTimeWeek: J,
        onTime: Q,
        lotterTab: st,
        onTab: Rt,
        getClear: At,
        onRoll: yt,
        getInput: Tt,
        getBlur: Bt,
        onBetType: nt,
        onBetpay: ct,
        onAmount: Z,
        onClickBet: ze,
        addNumber: Le,
        allAddnum: ie,
        onStepper: Ge,
        changeStep: Ie,
        onMltiple: We,
        checkboxChange: It,
        onBet: he,
        getWinsUserAmount: fe,
        getGameConfig: Hi,
        getGameIssue: Jt,
        getOddsList: Ut,
        getTypeList: _i,
        getMy4DHistory: Ae,
        get4DResult: ei,
        gameResultByType: Ee,
        gameCancelOrder: ii,
        gameListIndex: Jn,
        timeVal: w,
        lotteryTab: h,
        timeIndex: f,
        lotteryList: C,
        timeShow: Qn,
        betShow: c,
        tabId: T,
        rollNum: z,
        banbetpay: D,
        num: l,
        betType: y,
        betTypeList: v,
        betPay: N,
        betPayList: S,
        count: I,
        totalAmount: x,
        betQuantity: B,
        allActive: q,
        dupleList: P,
        countVal: g,
        checked: m,
        preSaleRule: r,
        multipleList: X,
        betAmountList: lt,
        duplex: gt,
        balance: rt,
        promptShow: Yi,
        oddsList: p,
        typeList: Ii,
        myHistory: Yn,
        newGameResult: u,
        gameResultByTypeO: b
    }
}
const wg = {
        key: 0,
        class: "resultBox"
    },
    Tg = {
        class: "r123"
    },
    Cg = {
        class: "r"
    },
    Lg = {
        class: "num"
    },
    Ng = {
        class: "r"
    },
    zg = {
        class: "num"
    },
    Ig = {
        class: "r"
    },
    Sg = {
        class: "num"
    },
    xg = {
        class: "title"
    },
    Rg = {
        class: "rOther"
    },
    Bg = {
        class: "title"
    },
    Gg = {
        class: "rOther"
    },
    Ag = V({
        __name: "showResult",
        props: {
            data: {
                type: null,
                required: !1
            }
        },
        setup(s) {
            return (i, o) => {
                var l, g, m, r, c;
                return i.data ? (n(), a("div", wg, [t("div", Tg, [t("div", Cg, [t("div", Lg, [(n(!0), a(R, null, A((l = i.data) == null ? void 0 : l.firstPrize.split(""), (p, u) => (n(), a("span", {
                    key: u
                }, e(p), 1))), 128))]), t("p", null, e(i.$t("d4gameType3")), 1)]), t("div", Ng, [t("div", zg, [(n(!0), a(R, null, A((g = i.data) == null ? void 0 : g.secondPrize.split(""), (p, u) => (n(), a("span", {
                    key: u
                }, e(p), 1))), 128))]), t("p", null, e(i.$t("d4gameType4")), 1)]), t("div", Ig, [t("div", Sg, [(n(!0), a(R, null, A((m = i.data) == null ? void 0 : m.thirdPrize.split(""), (p, u) => (n(), a("span", {
                    key: u
                }, e(p), 1))), 128))]), t("p", null, e(i.$t("d4gameType5")), 1)])]), t("div", xg, e(i.$t("d4gameType6")), 1), t("div", Rg, [(n(!0), a(R, null, A((r = i.data) == null ? void 0 : r.specialPrize.split(","), (p, u) => (n(), a("span", {
                    key: u
                }, e(p), 1))), 128))]), t("div", Bg, e(i.$t("d4gameType7")), 1), t("div", Gg, [(n(!0), a(R, null, A((c = i.data) == null ? void 0 : c.consolationPrize.split(","), (p, u) => (n(), a("span", {
                    key: u
                }, e(p), 1))), 128))])])) : $("v-if", !0)
            }
        }
    });
const vn = F(Ag, [
        ["__scopeId", "data-v-fd6be9e5"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/4D/showResult.vue"]
    ]),
    Oe = s => ($t("data-v-aec2245d"), s = s(), wt(), s),
    Mg = {
        key: 0,
        class: "gameBox"
    },
    Pg = {
        class: "items"
    },
    Dg = ["onClick"],
    Og = {
        class: "left"
    },
    Eg = {
        class: "time"
    },
    qg = {
        class: "right"
    },
    jg = {
        key: 0,
        class: "info"
    },
    Hg = {
        class: "order"
    },
    Wg = ["onClick"],
    Vg = {
        class: "copy"
    },
    Fg = Oe(() => t("div", {
        class: "line"
    }, null, -1)),
    Ug = ["onClick"],
    Kg = {
        class: "copy"
    },
    Xg = Oe(() => t("div", {
        class: "line"
    }, null, -1)),
    Qg = {
        class: "li"
    },
    Jg = {
        class: "otherTip"
    },
    Yg = Oe(() => t("div", {
        class: "line"
    }, null, -1)),
    Zg = {
        class: "li"
    },
    tb = {
        class: "otherTip"
    },
    eb = Oe(() => t("div", {
        class: "line"
    }, null, -1)),
    ib = {
        class: "li"
    },
    nb = {
        class: "otherTip"
    },
    ab = Oe(() => t("div", {
        class: "line"
    }, null, -1)),
    ob = {
        class: "li"
    },
    sb = {
        class: "otherTip"
    },
    lb = Oe(() => t("div", {
        class: "line"
    }, null, -1)),
    cb = {
        class: "li"
    },
    rb = {
        class: "otherTip"
    },
    ub = Oe(() => t("div", {
        class: "line"
    }, null, -1)),
    db = {
        class: "li"
    },
    pb = {
        class: "type"
    },
    gb = Oe(() => t("div", {
        class: "line1"
    }, [t("p")], -1)),
    bb = {
        class: "order"
    },
    mb = {
        class: "li"
    },
    _b = {
        class: "numTit"
    },
    vb = {
        class: "num type"
    },
    kb = {
        class: "li"
    },
    hb = {
        class: "numTit"
    },
    fb = {
        class: "num select"
    },
    yb = {
        class: "n"
    },
    $b = {
        class: "li"
    },
    wb = Oe(() => t("div", {
        class: "line"
    }, null, -1)),
    Tb = {
        class: "li"
    },
    Cb = {
        key: 1,
        class: "otherTip"
    },
    Lb = Oe(() => t("div", {
        class: "line"
    }, null, -1)),
    Nb = {
        class: "li"
    },
    zb = {
        class: "otherTip"
    },
    Ib = {
        class: "reTitle"
    },
    Sb = ["onClick"],
    xb = {
        class: "foot"
    },
    Rb = {
        class: "page"
    },
    Bb = V({
        __name: "showGame",
        props: {
            pageQuery: {
                type: Object,
                required: !0
            }
        },
        emits: ["update:pageQuery"],
        setup(s, {
            emit: i
        }) {
            const o = s,
                {
                    pageQuery: l
                } = oa(o, i),
                {
                    gameCancelOrder: g,
                    myHistory: m,
                    tabList: r,
                    getMy4DHistory: c
                } = pi(),
                {
                    t: p
                } = kt(),
                u = k(!1),
                b = k(""),
                _ = k(-1);

            function w(y) {
                switch (y) {
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
                        return y
                }
            }
            const f = () => {
                    l.value.pageNo--, _.value = -1, c(l.value)
                },
                C = () => {
                    l.value.pageNo++, _.value = -1, c(l.value)
                },
                h = y => {
                    _.value === y ? _.value = -1 : _.value = y
                };

            function T(y) {
                u.value = !0, b.value = y
            }

            function z() {
                u.value = !1, g({
                    orderNumber: b.value
                }).then(y => {
                    y && (ln(p("xosoTxt96")), c(l.value))
                }).catch(y => {})
            }
            return (y, v) => {
                var I, x, B;
                const N = H("svg-icon"),
                    S = H("van-icon");
                return n(), a(R, null, [((I = d(m)) == null ? void 0 : I.list.length) > 0 ? (n(), a("div", Mg, [t("div", Pg, [(n(!0), a(R, null, A(d(m).list, (D, P) => (n(), a("div", {
                    class: G(["itemBox", {
                        active: _.value === P
                    }])
                }, [t("div", {
                    class: "item",
                    onClick: q => h(P)
                }, [t("div", Og, [t("div", {
                    class: G(["name", {
                        bold: _.value === P
                    }])
                }, e(y.$t(`d4LType${D.type}`)), 3), t("div", Eg, e(D.createTime), 1)]), t("div", qg, [t("div", {
                    class: G(["state", `state${D.state}`])
                }, e(w(D.state)), 3), [2, 3].includes(D.state) ? (n(), a("div", {
                    key: 0,
                    class: G(["amount", D.state == 3 ? "green" : "red"])
                }, e(D.profitAmount), 3)) : $("v-if", !0)])], 8, Dg), _.value === P ? (n(), a("div", jg, [t("div", Hg, [t("div", {
                    class: "li",
                    onClick: q => d(Ve)(D.orderNumber)
                }, [t("span", null, [L(N, {
                    name: "Circle1",
                    class: "svg1"
                }), O(" " + e(y.$t("orderNo")), 1)]), t("h6", Vg, [O(e(D.orderNumber) + " ", 1), t("i", null, [L(N, {
                    name: "copy",
                    class: "svg2"
                })])])], 8, Wg), Fg, t("div", {
                    class: "li",
                    onClick: q => d(Ve)(D.issueNumber)
                }, [t("span", null, [L(N, {
                    name: "Circle2",
                    class: "svg"
                }), O(" " + e(y.$t("betNumber")), 1)]), t("h6", Kg, [O(e(D.issueNumber) + " ", 1), L(N, {
                    name: "copy",
                    class: "svg2"
                })])], 8, Ug), Xg, t("div", Qg, [t("span", null, [L(N, {
                    name: "Circle2",
                    class: "svg"
                }), O(" " + e(y.$t("ColorSpecies")), 1)]), t("h6", Jg, e(y.$t(`d4LType${D.type}`)), 1)]), Yg, t("div", Zg, [t("span", null, [L(N, {
                    name: "Circle2",
                    class: "svg"
                }), O(" " + e(y.$t("gamePlay")), 1)]), t("h6", tb, e(y.$t(`d4gamePay${D.gameType}`)), 1)]), eb, t("div", ib, [t("span", null, [L(N, {
                    name: "Circle2",
                    class: "svg"
                }), O(" " + e(y.$t("betAmounts")), 1)]), t("h6", nb, e(d(Lt)(D.amount)), 1)]), ab, t("div", ob, [t("span", null, [L(N, {
                    name: "Circle2",
                    class: "svg"
                }), O(" " + e(y.$t("xosoTxt79")), 1)]), t("h6", sb, e(D.betNumber) + " " + e(y.$t("note")), 1)]), lb, t("div", cb, [t("span", null, [L(N, {
                    name: "Circle2",
                    class: "svg"
                }), O(e(y.$t("multiple")), 1)]), t("h6", rb, e(D.multiple), 1)]), ub, t("div", db, [t("span", null, [L(N, {
                    name: "Circle2",
                    class: "svg"
                }), O(e(y.$t("xosoTxt78")), 1)])]), t("div", pb, [(n(!0), a(R, null, A(D.betType.split(","), q => (n(), a("span", null, e(y.$t(`d4gameType${q}`)), 1))), 256))]), gb]), t("div", bb, [D.betMethod == 1 ? (n(), a(R, {
                    key: 0
                }, [t("div", mb, [t("span", _b, [L(N, {
                    name: "Circle1",
                    class: "svg1"
                }), O(e(y.$t("bettingnumber")) + " (" + e(y.$t("EnterBet")) + ") ", 1)])]), t("div", vb, [t("span", null, e(D.betContent), 1)])], 64)) : $("v-if", !0), D.betMethod == 2 ? (n(), a(R, {
                    key: 1
                }, [t("div", kb, [t("span", hb, [L(N, {
                    name: "Circle1",
                    class: "svg1"
                }), O(e(y.$t("bettingnumber")) + " (" + e(y.$t("SelectBet")) + ")", 1)])]), t("div", fb, [(n(!0), a(R, null, A(D.betContent.split("|"), (q, X) => (n(), a("div", {
                    key: X
                }, [t("h6", null, e(d(r)[X].name), 1), t("div", yb, [(n(!0), a(R, null, A(q.split(","), (lt, gt) => (n(), a("span", {
                    key: gt
                }, e(lt), 1))), 128))])]))), 128))])], 64)) : $("v-if", !0), t("div", $b, [t("span", null, [L(N, {
                    name: "Circle2",
                    class: "svg"
                }), O(e(y.$t("statusMay")), 1)]), t("h6", {
                    class: G(["stateInfo", `state${D.state}`])
                }, e(w(D.state)), 3)]), wb, t("div", Tb, [t("span", null, [L(N, {
                    name: "Circle2",
                    class: "svg"
                }), O(e(y.$t("winOrLose")), 1)]), [2, 3].includes(D.state) ? (n(), a("h6", {
                    key: 0,
                    class: G(["amountInfo", D.state == 3 ? "green" : "red"])
                }, e(D.profitAmount), 3)) : (n(), a("h6", Cb, "--"))]), Lb, t("div", Nb, [t("span", null, [L(N, {
                    name: "Circle2",
                    class: "svg"
                }), O(e(y.$t("createTime")), 1)]), t("h6", zb, e(D.createTime), 1)])]), [2, 3].includes(D.state) ? (n(), a(R, {
                    key: 0
                }, [t("div", Ib, e(y.$t("betResult")), 1), L(vn, {
                    data: D
                }, null, 8, ["data"])], 64)) : $("v-if", !0), D.state == 1 ? (n(), a("div", {
                    key: 1,
                    class: "btn",
                    onClick: q => T(D.orderNumber)
                }, e(y.$t("xosoTxt82")), 9, Sb)) : $("v-if", !0)])) : $("v-if", !0)], 2))), 256))]), t("div", xb, [t("div", {
                    class: G(["previous", {
                        disabled: d(m).pageNo <= 1
                    }]),
                    onClick: f
                }, [L(S, {
                    name: "arrow-left",
                    size: "20"
                })], 2), t("div", Rb, e(d(m).pageNo) + "/" + e((x = d(m)) == null ? void 0 : x.totalPage), 1), t("div", {
                    class: G(["next", {
                        disabled: d(m).pageNo >= ((B = d(m)) == null ? void 0 : B.totalPage)
                    }]),
                    onClick: C
                }, [L(S, {
                    name: "arrow",
                    size: "20"
                })], 2)])])) : (n(), it(pe, {
                    key: 1
                })), L(xe, {
                    show: u.value,
                    "onUpdate:show": v[0] || (v[0] = D => u.value = D),
                    title: y.$t("xosoTxt99"),
                    onConfirm: v[1] || (v[1] = D => z())
                }, null, 8, ["show", "title"])], 64)
            }
        }
    });
const Pa = F(Bb, [
        ["__scopeId", "data-v-aec2245d"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/4D/showGame.vue"]
    ]),
    Gb = {
        class: "gamelist"
    },
    Ab = {
        class: "tab"
    },
    Mb = {
        class: "con"
    },
    Pb = {
        class: "head"
    },
    Db = ["src"],
    Ob = V({
        __name: "gameList",
        setup(s) {
            const i = dt(),
                {
                    gameListIndex: o,
                    newGameResult: l,
                    get4DResult: g,
                    getMy4DHistory: m
                } = pi();

            function r(b) {
                o.value = b, u()
            }

            function c() {
                o.value == 0 ? i.push({
                    name: "AllLotteryGames-4DLotteryResults"
                }) : o.value == 1 && i.push({
                    name: "AllLotteryGames-4DmyGame"
                })
            }
            const p = Wt({
                type: 0,
                date: me(new Date).format("YYYY-MM-DD 00:00:00"),
                pageSize: 10,
                pageNo: 1
            });

            function u() {
                o.value == 0 ? g() : m(p)
            }
            return Nt(() => {
                u()
            }), (b, _) => {
                var f;
                const w = H("svg-icon");
                return n(), a("div", Gb, [t("div", Ab, [t("div", {
                    class: G({
                        active: d(o) == 0
                    }),
                    onClick: _[0] || (_[0] = C => r(0))
                }, e(b.$t("d4Tip1")), 3), t("div", {
                    class: G({
                        active: d(o) == 1
                    }),
                    onClick: _[1] || (_[1] = C => r(1))
                }, e(b.$t("myGame")), 3)]), t("div", Mb, [t("div", {
                    class: "more",
                    onClick: c
                }, [O(e(b.$t("more")), 1), L(w, {
                    name: "more"
                })]), d(o) == 0 ? (n(), a(R, {
                    key: 0
                }, [(n(!0), a(R, null, A(d(l), C => (n(), a("div", {
                    class: "items",
                    key: C.issueNumber
                }, [t("div", Pb, [t("img", {
                    src: C.typeImg,
                    alt: ""
                }, null, 8, Db), t("h1", null, e(b.$t(`d4LType${C.type}`)), 1), t("p", null, e(C.openDate) + " " + e(b.$t(`${d(me)(C.openDate).format("dddd")}`)), 1)]), L(vn, {
                    data: C
                }, null, 8, ["data"])]))), 128)), ((f = d(l)) == null ? void 0 : f.length) == 0 ? (n(), it(pe, {
                    key: 0
                })) : $("v-if", !0)], 64)) : $("v-if", !0), d(o) == 1 ? (n(), it(Pa, {
                    key: 1,
                    pageQuery: p,
                    "onUpdate:pageQuery": _[2] || (_[2] = C => p = C)
                }, null, 8, ["pageQuery"])) : $("v-if", !0)])])
            }
        }
    });
const Eb = F(Ob, [
        ["__scopeId", "data-v-e3178c7d"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/4D/components/gameList.vue"]
    ]),
    qb = {
        class: "x-4d"
    },
    jb = {
        class: "x-4d-more"
    },
    Hb = {
        class: "x-4d-body"
    },
    Wb = {
        class: "x-4d-tab"
    },
    Vb = {
        class: "x-4d-content"
    },
    Fb = {
        key: 0,
        class: "enter"
    },
    Ub = ["placeholder"],
    Kb = ["placeholder"],
    Xb = {
        class: "box"
    },
    Qb = {
        class: "PreSale"
    },
    Jb = {
        class: "head"
    },
    Yb = {
        class: "body"
    },
    Zb = {
        class: "foot"
    },
    tm = V({
        __name: "index",
        setup(s) {
            const {
                t: i
            } = kt(), o = dt(), {
                getTimeWeek: l,
                onTime: g,
                lotterTab: m,
                onTab: r,
                getClear: c,
                onRoll: p,
                getInput: u,
                getBlur: b,
                onBetType: _,
                onBetpay: w,
                onAmount: f,
                onClickBet: C,
                addNumber: h,
                allAddnum: T,
                onStepper: z,
                changeStep: y,
                onMltiple: v,
                checkboxChange: N,
                onBet: S,
                getWinsUserAmount: I,
                getGameConfig: x,
                getGameIssue: B,
                tabList: D,
                timeVal: P,
                lotteryTab: q,
                timeIndex: X,
                lotteryList: lt,
                timeShow: gt,
                betShow: rt,
                tabId: J,
                num: Q,
                rollNum: st,
                banbetpay: Rt,
                betType: At,
                betTypeList: ot,
                betPay: yt,
                betPayList: Tt,
                count: Bt,
                totalAmount: Gt,
                betQuantity: _t,
                dupleList: nt,
                allActive: ct,
                countVal: Z,
                checked: tt,
                preSaleRule: W,
                multipleList: Ct,
                betAmountList: Et,
                duplex: ie,
                balance: Le,
                promptShow: ue
            } = pi();
            return Nt(() => {
                I(), x(), B()
            }), (Ne, ht) => {
                const ze = H("svg-icon"),
                    Ge = H("NavBar"),
                    Ie = H("van-button"),
                    We = H("van-popup");
                return n(), a("div", qb, [L(Ge, {
                    "left-arrow": "",
                    onClickLeft: ht[2] || (ht[2] = It => d(o).go(-1)),
                    class: "main",
                    title: "4D"
                }, {
                    right: M(() => [t("div", jb, [L(ze, {
                        name: "howpay",
                        class: "svg",
                        onClick: ht[0] || (ht[0] = () => d(o).push({
                            name: "AllLotteryGames-4DPlay"
                        }))
                    }), L(ze, {
                        name: "odds",
                        class: "svg",
                        onClick: ht[1] || (ht[1] = () => d(o).push({
                            name: "AllLotteryGames-4DOdds"
                        }))
                    })])]),
                    _: 1
                }), $(" 头部彩种 "), L(Wd, {
                    onOnTime: d(g),
                    "lottery-tab": d(q),
                    "time-index": d(X),
                    onOnLotteryTab: d(m),
                    "time-week": d(l),
                    "lottery-list": d(lt),
                    modelValue: d(gt),
                    "onUpdate:modelValue": ht[3] || (ht[3] = It => ce(gt) ? gt.value = It : null),
                    "time-val": d(P)
                }, null, 8, ["onOnTime", "lottery-tab", "time-index", "onOnLotteryTab", "time-week", "lottery-list", "modelValue", "time-val"]), t("div", Hb, [t("div", Wb, [t("div", {
                    onClick: ht[4] || (ht[4] = It => d(r)(1)),
                    class: G([d(J) == 1 ? "active" : ""])
                }, e(d(i)("EnterBet")), 3), t("div", {
                    onClick: ht[5] || (ht[5] = It => d(r)(2)),
                    class: G([d(J) == 2 ? "active" : ""])
                }, e(d(i)("SelectBet")), 3)]), t("div", Vb, [d(J) === 1 ? (n(), a("div", Fb, [d(yt) != 5 ? vt((n(), a("input", {
                    key: 0,
                    class: G(d(Q).length > 0 ? "input fz24" : "input"),
                    oninput: "value=value.replace(/\\D/g,'')",
                    "onUpdate:modelValue": ht[6] || (ht[6] = It => ce(Q) ? Q.value = It : null),
                    type: "text",
                    placeholder: d(i)("PenterNumber"),
                    maxlength: "4",
                    onInput: ht[7] || (ht[7] = (...It) => d(u) && d(u)(...It)),
                    onBlur: ht[8] || (ht[8] = (...It) => d(b) && d(b)(...It))
                }, null, 42, Ub)), [
                    [an, d(Q)]
                ]) : vt((n(), a("input", {
                    key: 1,
                    class: G(d(Q).length > 0 ? "input fz24" : "input"),
                    oninput: "value=value.replace(/[^A-Z0-9]/g,'').toUpperCase()",
                    "onUpdate:modelValue": ht[9] || (ht[9] = It => ce(Q) ? Q.value = It : null),
                    type: "text",
                    placeholder: d(i)("PenterNumber"),
                    maxlength: "4",
                    onInput: ht[10] || (ht[10] = (...It) => d(u) && d(u)(...It)),
                    onBlur: ht[11] || (ht[11] = (...It) => d(b) && d(b)(...It))
                }, null, 42, Kb)), [
                    [an, d(Q)]
                ]), vt(L(Ie, {
                    class: "btn",
                    onClick: d(p)
                }, {
                    default: M(() => [O("ROll")]),
                    _: 1
                }, 8, ["onClick"]), [
                    [Qt, d(Tt).includes(5)]
                ])])) : $("v-if", !0), $(" 投注类型 "), L(Jd, {
                    class: "mb30",
                    "bet-type": d(At),
                    "bet-type-list": d(ot),
                    onOnBetType: d(_)
                }, null, 8, ["bet-type", "bet-type-list", "onOnBetType"]), $(" 选择投注 下注盘 "), d(J) === 2 ? (n(), it(hp, {
                    key: 1,
                    "tab-list": d(D),
                    "all-active": d(ct),
                    "num-list": d(nt),
                    onAddNumber: d(h),
                    onAllAddnum: d(T)
                }, null, 8, ["tab-list", "all-active", "num-list", "onAddNumber", "onAllAddnum"])) : $("v-if", !0), $(" 玩法 "), L(ap, {
                    class: "mb30",
                    "roll-num": d(st),
                    "ban-bet-pay": d(Rt),
                    "bet-pay-list": d(Tt),
                    "bet-pay-id": d(yt),
                    duplex: d(ie),
                    onOnBetpay: d(w)
                }, null, 8, ["roll-num", "ban-bet-pay", "bet-pay-list", "bet-pay-id", "duplex", "onOnBetpay"]), $(" 投注金额 "), L(up, {
                    count: d(Bt),
                    list: d(Et),
                    onOnAmount: d(f)
                }, null, 8, ["count", "list", "onOnAmount"])])]), $(" 开奖记录 && 我的比赛记录 "), L(Eb), L(Lp, {
                    "total-amount": d(Gt),
                    "bet-quantity": d(_t),
                    onOnBet: d(C)
                }, null, 8, ["total-amount", "bet-quantity", "onOnBet"]), $(" 投注弹窗 "), L(ag, {
                    betShow: d(rt),
                    "onUpdate:betShow": ht[12] || (ht[12] = It => ce(rt) ? rt.value = It : null),
                    "bet-quantity": d(_t),
                    "lottery-tab": d(q),
                    "time-index": d(X),
                    "total-amount": d(Gt),
                    balance: d(Le),
                    "lottery-list": d(lt),
                    "bet-type": d(At),
                    "multiple-list": d(Ct),
                    "count-val": d(Z),
                    "onUpdate:countVal": ht[13] || (ht[13] = It => ce(Z) ? Z.value = It : null),
                    checked: d(tt),
                    "onUpdate:checked": ht[14] || (ht[14] = It => ce(tt) ? tt.value = It : null),
                    "pre-sale-rule": d(W),
                    "onUpdate:preSaleRule": ht[15] || (ht[15] = It => ce(W) ? W.value = It : null),
                    onCheckboxChange: d(N),
                    onOnCancel: ht[16] || (ht[16] = It => rt.value = !1),
                    onGetClear: d(c),
                    onOnStepper: d(z),
                    onOnMltiple: d(v),
                    onChangeStep: d(y),
                    onOnBet: d(S)
                }, {
                    default: M(() => [L($g, {
                        num: d(Q),
                        "tab-id": d(J),
                        "bet-pay": d(yt),
                        "duple-list": d(nt),
                        "tab-list": d(D)
                    }, null, 8, ["num", "tab-id", "bet-pay", "duple-list", "tab-list"])]),
                    _: 1
                }, 8, ["betShow", "bet-quantity", "lottery-tab", "time-index", "total-amount", "balance", "lottery-list", "bet-type", "multiple-list", "count-val", "checked", "pre-sale-rule", "onCheckboxChange", "onGetClear", "onOnStepper", "onOnMltiple", "onChangeStep", "onOnBet"]), $(" 投注成功提示 "), L(We, {
                    show: d(ue),
                    "onUpdate:show": ht[17] || (ht[17] = It => ce(ue) ? ue.value = It : null),
                    position: "center",
                    class: "x-4d-prompt",
                    style: {
                        borderRadius: "10px",
                        width: "8rem",
                        height: "80px"
                    }
                }, {
                    default: M(() => [t("div", Xb, [L(ze, {
                        name: "success",
                        class: "svg"
                    }), O(" " + e(Ne.$t("code402")), 1)])]),
                    _: 1
                }, 8, ["show"]), $(" 预售规则 "), L(We, {
                    show: d(W),
                    "onUpdate:show": ht[19] || (ht[19] = It => ce(W) ? W.value = It : null),
                    class: "PreSaleRule",
                    "close-on-click-overlay": !1,
                    round: ""
                }, {
                    default: M(() => [t("div", Qb, [t("div", Jb, e(d(i)("presaleRules")), 1), t("div", Yb, e(Ne.$t("betPopTXT")), 1), t("div", Zb, [t("div", {
                        class: "btn",
                        onClick: ht[18] || (ht[18] = It => W.value = !1)
                    }, e(d(i)("iKonw")), 1)])])]),
                    _: 1
                }, 8, ["show"]), $(` <van-popup v-model:show="preSaleRule" position="center" class="x-4d-prompt" :style="{ borderRadius: '10px',width:'8rem',height:'80px' }">
            <div class="box">
                
                预售规则
            </div>
        </van-popup> `)])
            }
        }
    });
const em = F(tm, [
        ["__scopeId", "data-v-c4174cb0"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/4D/index.vue"]
    ]),
    gG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: em
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    im = {
        class: "LR"
    },
    nm = {
        class: "lotterys"
    },
    am = ["onClick"],
    om = {
        alt: ""
    },
    sm = {
        class: "date"
    },
    lm = {
        class: "dateBox"
    },
    cm = {
        class: "result"
    },
    rm = V({
        __name: "index",
        setup(s) {
            const {
                typeList: i,
                getTypeList: o,
                gameResultByType: l,
                gameResultByTypeO: g
            } = pi();
            o();
            const {
                t: m
            } = kt(), r = dt(), c = k(0), p = Y(() => i.value ? i.value.slice(1) : []), {
                minDate: u,
                maxDate: b
            } = da(0), _ = me(b).startOf("day"), w = k(!1), f = Wt({
                type: 0,
                date: _.format("YYYY-MM-DD")
            });
            Mt(() => p, () => {
                p.value.length > 0 && (f.type = p.value[0].typeId, l(f))
            }, {
                deep: !0,
                immediate: !0
            });
            const C = Y(() => me(f.date).format("YYYY-MM-DD") + " " + m(`${me(f.date).format("dddd")}`)),
                h = z => {
                    w.value = !1, f.date = me(z).format("YYYY-MM-DD"), l(f)
                };

            function T(z, y) {
                c.value = y, f.type = z.typeId, l(f)
            }
            return (z, y) => {
                const v = H("NavBar"),
                    N = H("svg-icon"),
                    S = H("ArSelect"),
                    I = H("van-calendar"),
                    x = Ot("lazy");
                return n(), a("div", im, [L(v, {
                    "left-arrow": "",
                    onClickLeft: y[0] || (y[0] = () => d(r).back()),
                    title: z.$t("d4Tip2")
                }, null, 8, ["title"]), t("div", nm, [(n(!0), a(R, null, A(p.value, (B, D) => (n(), a("div", {
                    class: G(["main", {
                        active: c.value === D
                    }]),
                    onClick: P => T(B, D),
                    key: D
                }, [vt(t("img", om, null, 512), [
                    [x, B.typeImg]
                ])], 10, am))), 128))]), t("div", sm, [t("div", lm, [L(N, {
                    name: "arrLeft"
                }), L(S, {
                    onClickSelect: y[1] || (y[1] = B => w.value = !0),
                    selectName: C.value
                }, null, 8, ["selectName"]), L(N, {
                    name: "arrLeft"
                })])]), t("div", cm, [t("h1", null, e(z.$t("betResult")), 1), JSON.stringify(d(g)) !== "{}" ? (n(), it(vn, {
                    key: 0,
                    data: d(g)
                }, null, 8, ["data"])) : (n(), it(pe, {
                    key: 1
                }))]), L(I, {
                    show: w.value,
                    "onUpdate:show": y[2] || (y[2] = B => w.value = B),
                    onCancel: y[3] || (y[3] = () => w.value = !1),
                    onConfirm: h,
                    "min-date": d(u),
                    "max-date": d(b)
                }, null, 8, ["show", "min-date", "max-date"])])
            }
        }
    });
const um = F(rm, [
        ["__scopeId", "data-v-d1d6b410"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/4DLotteryResults/index.vue"]
    ]),
    bG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: um
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    gi = s => ($t("data-v-789ad0bd"), s = s(), wt(), s),
    dm = {
        class: "oddsBox"
    },
    pm = {
        class: "title"
    },
    gm = {
        class: "words"
    },
    bm = {
        class: "tabHead"
    },
    mm = {
        class: "tabCon1"
    },
    _m = {
        class: "item"
    },
    vm = gi(() => t("div", null, null, -1)),
    km = gi(() => t("div", null, null, -1)),
    hm = [vm, km],
    fm = {
        class: "tabHead h2"
    },
    ym = {
        class: "tabCon2"
    },
    $m = {
        class: "tabHead h2"
    },
    wm = {
        key: 0
    },
    Tm = {
        key: 1
    },
    Cm = {
        key: 2
    },
    Lm = gi(() => t("br", null, null, -1)),
    Nm = gi(() => t("br", null, null, -1)),
    zm = gi(() => t("br", null, null, -1)),
    Im = gi(() => t("br", null, null, -1)),
    Sm = {
        class: "tabCon1 c2"
    },
    xm = V({
        __name: "index",
        setup(s) {
            const {
                t: i
            } = kt(), o = dt(), {
                getOddsList: l,
                oddsList: g
            } = pi();
            return Nt(() => {
                l()
            }), (m, r) => {
                const c = H("NavBar"),
                    p = H("svg-icon");
                return n(), a("div", dm, [L(c, {
                    "left-arrow": "",
                    title: d(i)("odds"),
                    onClickLeft: r[0] || (r[0] = () => d(o).back())
                }, null, 8, ["title"]), (n(!0), a(R, null, A(d(g), u => {
                    var b, _, w, f, C;
                    return n(), a("div", {
                        class: "items",
                        key: u.playTypeId
                    }, [t("div", pm, [t("div", gm, e(d(i)(`d4gamePay${u.playTypeId}`)), 1), L(p, {
                        name: "oddBg",
                        class: "odd"
                    })]), u.playTypeId != 2 ? (n(), a(R, {
                        key: 0
                    }, [t("div", bm, [t("span", null, e(d(i)("d4gameType1")), 1), t("span", null, e(d(i)("d4gameType2")), 1)]), t("div", mm, [(n(!0), a(R, null, A((b = u.lists) == null ? void 0 : b.filter(h => [1, 2].includes(h.type)), h => (n(), a("div", {
                        key: h.type
                    }, [(n(!0), a(R, null, A(h.list, T => (n(), a("div", {
                        class: "item",
                        key: T.playId
                    }, [t("div", null, e(d(i)(`d4gameType${T.code}`)), 1), t("div", null, e(T.odds > 0 ? T.odds : T.oddsDefault), 1)]))), 128)), h.list.length < 5 ? (n(), a(R, {
                        key: 0
                    }, A(2, T => t("div", _m, hm)), 64)) : $("v-if", !0)]))), 128))]), t("div", fm, [(n(!0), a(R, null, A((w = (_ = u.lists) == null ? void 0 : _.filter(h => [3].includes(h.type))[0]) == null ? void 0 : w.list, h => (n(), a("span", {
                        key: h.playId
                    }, e(d(i)(`d4gameType${h.playId}`)), 1))), 128))]), t("div", ym, [(n(!0), a(R, null, A((C = (f = u.lists) == null ? void 0 : f.filter(h => [3].includes(h.type))[0]) == null ? void 0 : C.list, h => (n(), a("div", {
                        key: h.playId
                    }, e(h.odds > 0 ? h.odds : h.oddsDefault), 1))), 128))])], 64)) : (n(!0), a(R, {
                        key: 1
                    }, A(u.lists, h => (n(), a(R, null, [t("div", $m, [h.type == 1 ? (n(), a("span", wm, e(d(i)("d4gameType1")), 1)) : $("v-if", !0), h.type == 2 ? (n(), a("span", Tm, e(d(i)("d4gameType2")), 1)) : $("v-if", !0), h.type == 3 ? (n(), a("span", Cm, e(d(i)("d4Tip3")), 1)) : $("v-if", !0), t("span", null, [O(e(d(i)("d4Tip4")), 1), Lm, O("24")]), t("span", null, [O(e(d(i)("d4Tip4")), 1), Nm, O("12")]), t("span", null, [O(e(d(i)("d4Tip4")), 1), zm, O("6")]), t("span", null, [O(e(d(i)("d4Tip4")), 1), Im, O("4")])]), t("div", Sm, [(n(!0), a(R, null, A(h.list, T => (n(), a("div", {
                        class: "itemR item",
                        key: T.playId
                    }, [t("div", null, e(d(i)(`d4gameType${T.code}`)), 1), t("div", null, e(T.odds24 > 0 ? T.odds24 : T.oddsDefault24), 1), t("div", null, e(T.odds12 > 0 ? T.odds12 : T.oddsDefault12), 1), t("div", null, e(T.odds6 > 0 ? T.odds6 : T.oddsDefault6), 1), t("div", null, e(T.odds4 > 0 ? T.odds4 : T.oddsDefault4), 1)]))), 128))])], 64))), 256))])
                }), 128))])
            }
        }
    });
const Rm = F(xm, [
        ["__scopeId", "data-v-789ad0bd"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/4DOdds/index.vue"]
    ]),
    mG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Rm
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Bm = {
        class: "playBox"
    },
    Gm = {
        class: "con"
    },
    Am = {
        class: "tip"
    },
    Mm = {
        class: "tip"
    },
    Pm = ["innerHTML"],
    Dm = {
        class: "txt"
    },
    Om = {
        key: 0,
        class: "num"
    },
    Em = ["innerHTML"],
    qm = V({
        __name: "index",
        setup(s) {
            const {
                t: i
            } = kt(), o = dt(), l = k(0), g = k([{
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
            return (m, r) => {
                const c = H("NavBar"),
                    p = H("van-icon"),
                    u = H("van-tab"),
                    b = H("van-tabs");
                return n(), a("div", Bm, [L(c, {
                    "left-arrow": "",
                    title: d(i)("lotteryManual"),
                    onClickLeft: r[0] || (r[0] = () => d(o).back())
                }, null, 8, ["title"]), L(b, {
                    active: l.value,
                    "onUpdate:active": r[1] || (r[1] = _ => l.value = _),
                    type: "card",
                    "swipe-threshold": 3
                }, {
                    default: M(() => [(n(!0), a(R, null, A(g.value, (_, w) => (n(), it(u, {
                        title: _.title,
                        key: w
                    }, {
                        default: M(() => [t("div", Gm, [t("h1", null, [L(p, {
                            name: "play",
                            class: "icon",
                            size: "20"
                        }), O(e(d(i)("betting")), 1)]), t("div", Am, e(_.tip1), 1), t("h1", null, [L(p, {
                            name: "play",
                            class: "icon",
                            size: "20"
                        }), O(e(d(i)("winningconditions")), 1)]), t("div", Mm, [t("span", {
                            innerHTML: _.tip2
                        }, null, 8, Pm)]), t("div", Dm, [t("div", null, e(d(i)("example")), 1), t("div", null, e(d(i)("betting")) + ":   " + e(_.txt.tip1), 1), t("div", null, e(_.txt.tip2), 1), _.txt.tip3.length > 0 ? (n(), a("div", Om, [(n(!0), a(R, null, A(_.txt.tip3, (f, C) => (n(), a("span", {
                            key: C
                        }, e(f), 1))), 128))])) : $("v-if", !0), t("div", null, [O(e(d(i)("result")) + ":   ", 1), t("span", {
                            innerHTML: _.txt.tip4
                        }, null, 8, Em)])])])]),
                        _: 2
                    }, 1032, ["title"]))), 128))]),
                    _: 1
                }, 8, ["active"])])
            }
        }
    });
const jm = F(qm, [
        ["__scopeId", "data-v-fa33b84e"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/4DPlay/index.vue"]
    ]),
    _G = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: jm
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Hm = {
        class: "MG"
    },
    Wm = V({
        __name: "index",
        setup(s) {
            const {
                getTypeList: i,
                typeList: o,
                getMy4DHistory: l
            } = pi();
            i();
            const {
                t: g
            } = kt(), m = dt(), r = k(!1), c = k(g("all")), p = Wt({
                type: 0,
                date: "",
                pageSize: 20,
                pageNo: 1
            });
            l(p);
            const u = async ({
                selectedOptions: b
            }) => {
                r.value = !1, p.type = b[0].typeId, p.pageNo = 1, c.value = b[0].typeName, l(p)
            };
            return (b, _) => {
                const w = H("NavBar"),
                    f = H("ArSelect"),
                    C = H("van-picker"),
                    h = H("van-popup");
                return n(), a("div", Hm, [L(w, {
                    "left-arrow": "",
                    onClickLeft: _[0] || (_[0] = () => d(m).back()),
                    title: b.$t("xosoTxt73")
                }, null, 8, ["title"]), L(f, {
                    onClickSelect: _[1] || (_[1] = T => r.value = !0),
                    selectName: c.value
                }, null, 8, ["selectName"]), L(Pa, {
                    pageQuery: p,
                    "onUpdate:pageQuery": _[2] || (_[2] = T => p = T)
                }, null, 8, ["pageQuery"]), L(h, {
                    show: r.value,
                    "onUpdate:show": _[4] || (_[4] = T => r.value = T),
                    round: "",
                    position: "bottom"
                }, {
                    default: M(() => [L(C, {
                        "columns-field-names": {
                            text: "typeName",
                            value: "typeId"
                        },
                        columns: d(o),
                        onCancel: _[3] || (_[3] = T => r.value = !1),
                        onConfirm: u
                    }, null, 8, ["columns"])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const Vm = F(Wm, [
        ["__scopeId", "data-v-34a342e1"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/4DmyGame/index.vue"]
    ]),
    vG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Vm
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Fm = {
        class: "Wallet__C"
    },
    Um = {
        class: "Wallet__C-balance"
    },
    Km = {
        class: "Wallet__C-balance-l1"
    },
    Xm = {
        class: "Wallet__C-balance-l2"
    },
    Qm = {
        class: "Wallet__C-balance-l3"
    },
    Jm = V({
        __name: "Wallet",
        setup(s, {
            expose: i
        }) {
            const {
                t: o
            } = kt(), l = k(0), g = async (c = !0) => {
                const p = await at(dn());
                p && (l.value = (p == null ? void 0 : p.data.amount) || 0, c && ve(o("refreshSuccess")))
            }, m = dt(), r = c => {
                m.push({
                    name: c
                })
            };
            return Nt(() => {
                g(!1)
            }), i({
                getWinsUserAmount: g
            }), (c, p) => {
                const u = Ot("throttle-click");
                return n(), a("div", Fm, [t("div", Um, [t("div", Km, [vt((n(), a("div", null, [O(e(d(Lt)(l.value)), 1)])), [
                    [u, {
                        handler: g,
                        wait: 2e3
                    }]
                ])]), t("div", Xm, [t("div", null, e(c.$t("walletBalance")), 1)]), t("div", Qm, [t("div", {
                    onClick: p[0] || (p[0] = b => r("Withdraw"))
                }, e(c.$t("withdraw")), 1), t("div", {
                    onClick: p[1] || (p[1] = b => r("Recharge"))
                }, e(c.$t("recharge")), 1)])])])
            }
        }
    });
const Bi = F(Jm, [
        ["__scopeId", "data-v-7dd1adab"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/WinGo/Wallet.vue"]
    ]),
    Ym = {
        class: "GameList__C"
    },
    Zm = ["onClick"],
    t_ = ["innerHTML"],
    e_ = V({
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
        setup(s) {
            const i = s;
            return (o, l) => (n(), a("div", Ym, [(n(!0), a(R, null, A(i.gameList, (g, m) => (n(), a("div", {
                key: m,
                class: G(["GameList__C-item", {
                    active: o.currentGameIndex == m
                }]),
                onClick: r => o.$emit("changeGame", m)
            }, [t("div", {
                innerHTML: g.typeName
            }, null, 8, t_)], 10, Zm))), 128))]))
        }
    });
const Gi = F(e_, [
        ["__scopeId", "data-v-17d56002"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/WinGo/GameList.vue"]
    ]),
    i_ = {
        class: "TimeLeft__C-PreSale"
    },
    n_ = {
        class: "TimeLeft__C-PreSale-head"
    },
    a_ = {
        class: "TimeLeft__C-PreSale-body"
    },
    o_ = ["innerHTML"],
    s_ = {
        class: "TimeLeft__C-PreSale-foot"
    },
    l_ = V({
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
        setup(s, {
            emit: i
        }) {
            const o = s,
                l = Y({
                    get() {
                        return o.howPlayShow || !1
                    },
                    set(g) {
                        g || i("close")
                    }
                });
            return (g, m) => {
                const r = H("van-popup");
                return n(), a(R, null, [$(" 规则弹层 begin"), L(r, {
                    show: l.value,
                    "onUpdate:show": m[1] || (m[1] = c => l.value = c),
                    "close-on-click-overlay": !1,
                    round: ""
                }, {
                    default: M(() => [t("div", i_, [t("div", n_, e(g.$t("winTrxIndicate")), 1), t("div", a_, [t("div", {
                        innerHTML: s.gamePresentation
                    }, null, 8, o_)]), t("div", s_, [t("div", {
                        class: "TimeLeft__C-PreSale-foot-btn",
                        onClick: m[0] || (m[0] = c => i("close"))
                    }, e(g.$t("winTrxClose")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 2112)
            }
        }
    });
const Ai = F(l_, [
        ["__scopeId", "data-v-0bba67ea"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/WinGo/rule.vue"]
    ]),
    Da = s => ($t("data-v-69f351dd"), s = s(), wt(), s),
    c_ = {
        class: "FDTL__C"
    },
    r_ = {
        class: "FDTL__C-l1"
    },
    u_ = {
        class: "left"
    },
    d_ = Da(() => t("svg", {
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
    p_ = {
        class: "FDTL__C-l2"
    },
    g_ = {
        class: "FDTL__C-time"
    },
    b_ = Da(() => t("div", {
        notime: ""
    }, ":", -1)),
    m_ = {
        class: "FDTL__C-l3"
    },
    __ = {
        class: "box"
    },
    v_ = ["num"],
    k_ = cn('<div class="slot-num" data-v-69f351dd>1</div><div class="slot-num" data-v-69f351dd>2</div><div class="slot-num" data-v-69f351dd>0</div><div class="slot-num" data-v-69f351dd>1</div><div class="slot-num" data-v-69f351dd>2</div><div class="slot-num" data-v-69f351dd>3</div><div class="slot-num" data-v-69f351dd>4</div><div class="slot-num" data-v-69f351dd>5</div><div class="slot-num" data-v-69f351dd>6</div><div class="slot-num" data-v-69f351dd>7</div><div class="slot-num" data-v-69f351dd>8</div><div class="slot-num" data-v-69f351dd>9</div><div class="slot-num" data-v-69f351dd>0</div><div class="slot-num" data-v-69f351dd>1</div><div class="slot-num" data-v-69f351dd>2</div><div class="slot-num" data-v-69f351dd>3</div><div class="slot-num" data-v-69f351dd>4</div><div class="slot-num" data-v-69f351dd>5</div><div class="slot-num" data-v-69f351dd>6</div><div class="slot-num" data-v-69f351dd>7</div><div class="slot-num" data-v-69f351dd>8</div><div class="slot-num" data-v-69f351dd>9</div><div class="slot-num" data-v-69f351dd>0</div><div class="slot-num" data-v-69f351dd>1</div><div class="slot-num" data-v-69f351dd>2</div><div class="slot-num" data-v-69f351dd>3</div><div class="slot-num" data-v-69f351dd>4</div><div class="slot-num" data-v-69f351dd>5</div><div class="slot-num" data-v-69f351dd>6</div><div class="slot-num" data-v-69f351dd>7</div><div class="slot-num" data-v-69f351dd>8</div><div class="slot-num" data-v-69f351dd>9</div>', 32),
    h_ = ["num"],
    f_ = V({
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
        setup(s, {
            expose: i
        }) {
            const o = s,
                l = k(0),
                g = k([{
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
            Mt(() => o.premium, b => {
                b && (g.value = m(b))
            });
            const m = b => {
                    let _ = [];
                    for (let f = 0; f < b.length; f++) {
                        let C = b[f];
                        var w = [];
                        switch (C) {
                            case 9:
                                w.push(C - 8, C - 9, C);
                                break;
                            case 0:
                                w.push(C + 8, C + 9, C);
                                break;
                            default:
                                w.push(C - 2, C - 1, C)
                        }
                        _.push({
                            arr: w
                        })
                    }
                    return _
                },
                r = () => {
                    l.value = 1, setTimeout(() => {
                        l.value = 0
                    }, 3e3)
                },
                c = k(!1),
                p = De(),
                u = () => {
                    c.value = !0, p.get5DRule(o.currentGame.typeID)
                };
            return i({
                animationShow: r
            }), (b, _) => (n(), a(R, null, [t("div", c_, [t("div", r_, [t("div", u_, [t("div", null, e(b.$t("betIssue")), 1), t("div", {
                class: "FDTL__C-rule",
                onClick: u
            }, [d_, O(e(b.$t("winTrxIndicate")), 1)])]), t("div", null, e(b.$t("k3TimeLeftToBuy")), 1)]), t("div", p_, [t("div", null, e(o.currentInfo.gameNo), 1), t("div", g_, [t("div", null, e(b.currentInfo.time1), 1), t("div", null, e(b.currentInfo.time2), 1), b_, t("div", null, e(b.currentInfo.time3), 1), t("div", null, e(b.currentInfo.time4), 1)])]), t("div", m_, [t("div", __, [(n(!0), a(R, null, A(g.value, (w, f) => (n(), a("div", {
                key: f,
                class: "slot-column"
            }, [t("div", {
                class: G(["slot-transform", "transform" + f, l.value == 1 && "slot-scroll"])
            }, [(n(!0), a(R, null, A(w.arr, (C, h) => (n(), a("div", {
                class: "slot-num",
                num: w,
                key: "2" + h
            }, e(C), 9, v_))), 128)), k_, (n(!0), a(R, null, A(w.arr, (C, h) => (n(), a("div", {
                class: "slot-num",
                num: w,
                key: "2" + h
            }, e(C), 9, h_))), 128))], 2)]))), 128))])])]), $(" 规则弹层 begin"), L(Ai, {
                howPlayShow: c.value,
                gamePresentation: b.currentGame.gamePresentation,
                onClose: _[0] || (_[0] = w => c.value = !1)
            }, null, 8, ["howPlayShow", "gamePresentation"])], 64))
        }
    });
const y_ = F(f_, [
        ["__scopeId", "data-v-69f351dd"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/FD/TimeLeft.vue"]
    ]),
    $_ = {
        class: "FDB__C-nav"
    },
    w_ = ["onClick"],
    T_ = {
        class: "FDB__C-H"
    },
    C_ = ["onClick"],
    L_ = {
        class: "FDB__C-Num"
    },
    N_ = ["txt", "onClick"],
    z_ = {
        class: "round"
    },
    I_ = {
        class: "rate"
    },
    S_ = V({
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
        setup(s, {
            emit: i
        }) {
            return (o, l) => (n(), a(R, null, [t("div", $_, [(n(!0), a(R, null, A(o.betTypeNameMap, (g, m) => (n(), a("div", {
                key: m,
                class: G({
                    active: o.betType == m
                }),
                onClick: r => i("changeType", m)
            }, e(g), 11, w_))), 128))]), t("div", T_, [(n(!0), a(R, null, A(o.BettingH, (g, m) => (n(), a("div", {
                key: m,
                class: G({
                    active: o.onTabID == g.id
                }),
                onClick: r => i("onTab", g.id)
            }, [t("span", null, e(g.name), 1), t("span", null, e(g.rate), 1)], 10, C_))), 128))]), t("div", L_, [o.betType != 5 ? (n(), a(R, {
                key: 0
            }, A(10, (g, m) => t("div", {
                key: m,
                txt: m,
                class: G({
                    active: o.numberChack[m]
                }),
                onClick: r => i("numberTab", m)
            }, [t("div", z_, e(m), 1), t("div", I_, e(o.OddsList[0].playRate ? o.OddsList[0].playRate : o.OddsList[0].playRate_Original), 1)], 10, N_)), 64)) : $("v-if", !0)])], 64))
        }
    });
const Zn = F(S_, [
        ["__scopeId", "data-v-baf77bdf"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/FD/BetCom.vue"]
    ]),
    x_ = s => ($t("data-v-7181abf7"), s = s(), wt(), s),
    R_ = {
        class: "Betting__Popup-body"
    },
    B_ = {
        class: "Betting__Popup-body-line"
    },
    G_ = {
        class: "Betting__Popup-body-line-list"
    },
    A_ = ["onClick"],
    M_ = {
        class: "Betting__Popup-body-line"
    },
    P_ = {
        class: "Betting__Popup-body-line-btnL"
    },
    D_ = {
        class: "Betting__Popup-body-line"
    },
    O_ = x_(() => t("div", null, null, -1)),
    E_ = {
        class: "Betting__Popup-body-line-list"
    },
    q_ = ["onClick"],
    j_ = {
        class: "Betting__Popup-body-line"
    },
    H_ = {
        class: "Betting__Popup-foot"
    },
    W_ = {
        class: "Betting__Popup-foot-s bgcolor"
    },
    V_ = {
        class: "Betting__Popup-PreSale"
    },
    F_ = {
        class: "Betting__Popup-PreSale-head"
    },
    U_ = {
        class: "Betting__Popup-PreSale-body"
    },
    K_ = {
        class: "Betting__Popup-PreSale-foot"
    },
    X_ = V({
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
        setup(s, {
            emit: i
        }) {
            const o = s,
                {
                    t: l
                } = kt(),
                g = k(!1),
                m = k(!0),
                r = Y(() => o.currentGame.betMultiple.split("|"));
            Mt(() => r, () => {
                o.selectInfo.count = r.value[0]
            }, {
                deep: !0,
                immediate: !0
            });
            let c = Y({
                get() {
                    return o.bettingPopupShow || !1
                },
                set(C) {
                    i("update:bettingPopupShow", C)
                }
            });
            const p = C => {
                    switch (C) {
                        case 1:
                            o.selectInfo.count > 1 && o.selectInfo.count--;
                            break;
                        case 2:
                            o.selectInfo.count++;
                            break
                    }
                    i("computedCoin")
                },
                u = C => {
                    C > 0 && (o.selectInfo.count = Math.floor(C)), i("computedCoin")
                },
                b = C => {
                    o.selectInfo.count = C, i("computedCoin")
                },
                _ = C => {
                    o.selectInfo.coin = C, i("computedCoin")
                },
                w = () => {
                    g.value = !1, m.value = !0
                },
                f = async () => {
                    if (!m.value) {
                        ve(l("agreePresaleRules"));
                        return
                    }
                    i("submitBetting")
                };
            return (C, h) => {
                const T = H("van-field"),
                    z = H("van-popup"),
                    y = Ot("throttle-click");
                return n(), a(R, null, [$(" 投注内容 begin "), L(z, {
                    show: d(c),
                    "onUpdate:show": h[6] || (h[6] = v => ce(c) ? c.value = v : c = v),
                    position: "bottom",
                    style: {
                        "box-shadow": "0px -18px 40px rgba(37, 37, 60, 0.26)"
                    },
                    round: !0,
                    "close-on-click-overlay": !1
                }, {
                    default: M(() => [t("div", R_, [_e(C.$slots, "default", {}, void 0, !0), t("div", B_, [O(e(d(l)("amount")) + " ", 1), t("div", G_, [(n(!0), a(R, null, A(C.betTypeList, (v, N) => (n(), a("div", {
                        key: N,
                        class: G(["Betting__Popup-body-line-item", {
                            bgcolor: o.selectInfo.coin == v
                        }]),
                        onClick: S => _(v)
                    }, e(v), 11, A_))), 128))])]), t("div", M_, [O(e(d(l)("numbers")) + " ", 1), t("div", P_, [t("div", {
                        class: G(["Betting__Popup-btn", {
                            bgcolor: o.selectInfo.count > 0
                        }]),
                        onClick: h[0] || (h[0] = v => p(1))
                    }, "-", 2), L(T, {
                        class: "Betting__Popup-input",
                        modelValue: o.selectInfo.count,
                        "onUpdate:modelValue": h[1] || (h[1] = v => o.selectInfo.count = v),
                        modelModifiers: {
                            number: !0
                        },
                        type: "digit",
                        maxlength: 4,
                        onInput: u
                    }, null, 8, ["modelValue"]), t("div", {
                        class: "Betting__Popup-btn bgcolor",
                        onClick: h[2] || (h[2] = v => p(2))
                    }, "+")])]), t("div", D_, [O_, t("div", E_, [(n(!0), a(R, null, A(r.value, (v, N) => (n(), a("div", {
                        key: N,
                        class: G(["Betting__Popup-body-line-item setBorder", {
                            bgcolor: o.selectInfo.count == v
                        }]),
                        onClick: S => b(v)
                    }, " X" + e(v), 11, q_))), 128))])]), t("div", j_, [t("span", {
                        class: G(["Betting__Popup-agree", {
                            active: m.value
                        }]),
                        onClick: h[3] || (h[3] = v => m.value = !m.value)
                    }, e(d(l)("agree")), 3), t("span", {
                        onClick: h[4] || (h[4] = v => g.value = !0),
                        class: "Betting__Popup-preSaleShow"
                    }, e(d(l)("presaleRules")), 1)])]), t("div", H_, [t("div", {
                        class: "Betting__Popup-foot-c",
                        onClick: h[5] || (h[5] = v => i("clearBetting"))
                    }, e(d(l)("cancel")), 1), vt((n(), a("div", W_, [O(e(d(l)("totalAmount")) + e(d(Lt)(o.selectInfo.allCoin || 0)), 1)])), [
                        [y, {
                            handler: f,
                            wait: 2e3
                        }]
                    ])])]),
                    _: 3
                }, 8, ["show"]), $(" 规则弹层 begin"), L(z, {
                    show: g.value,
                    "onUpdate:show": h[7] || (h[7] = v => g.value = v),
                    "close-on-click-overlay": !1,
                    round: ""
                }, {
                    default: M(() => [t("div", V_, [t("div", F_, e(d(l)("presaleRules")), 1), t("div", U_, e(C.$t("betPopTXT")), 1), t("div", K_, [t("div", {
                        class: "Betting__Popup-PreSale-foot-btn",
                        onClick: w
                    }, e(d(l)("iKonw")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const Q_ = F(X_, [
        ["__scopeId", "data-v-7181abf7"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/FD/BettingPopup.vue"]
    ]),
    J_ = {
        class: "FDB__C"
    },
    Y_ = {
        class: "FDB__C-mark"
    },
    Z_ = V({
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
        setup(s, {
            expose: i,
            emit: o
        }) {
            const l = s,
                {
                    t: g
                } = kt();
            k();
            const m = k(!1);
            Mt(() => m.value, D => {
                D && (f.value.coin = h.value[0])
            });
            const r = k(0),
                c = k(["A", "B", "C", "D", "E", "SUM"]),
                p = k([{
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
                u = k(0),
                b = k([]),
                _ = k([!1, !1, !1, !1, !1, !1, !1, !1]),
                w = Y(() => [{
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
                f = k({
                    coin: 0,
                    count: 1,
                    allCoin: 0,
                    gametype: 0,
                    typeid: 1,
                    issuenumber: "2020",
                    selecttype: ""
                }),
                C = Y(() => (l.currentInfo.passTime < l.ProhibitBuyTime && I(), l.currentInfo.passTime < l.ProhibitBuyTime)),
                h = Y(() => l.currentGame.scope ? l.currentGame.scope.split("|").map(D => Number(D)) : []),
                T = D => {
                    r.value = D, D == 5 && S()
                },
                z = async () => {
                    const [D, P] = await ee(ms());
                    P && (p.value = P)
                },
                y = D => {
                    S(), u.value == D ? (u.value = 0, m.value = !0) : (u.value = D, m.value = !0), N()
                },
                v = D => {
                    if (u.value = 0, _.value[D]) {
                        _.value[D] = !1;
                        const P = b.value.indexOf(D);
                        P > -1 && b.value.splice(P, 1), m.value = !0
                    } else b.value.push(D), _.value[D] = !0, m.value = !0;
                    N()
                },
                N = () => {
                    Zt(() => {
                        b.value.length > 0 ? f.value.allCoin = f.value.coin * f.value.count * b.value.length : u.value ? f.value.allCoin = f.value.coin * f.value.count : f.value.allCoin = 0
                    })
                },
                S = () => {
                    b.value = [];
                    for (let D = 0; _.value.length > D; D++) _.value[D] = !1;
                    N()
                },
                I = () => {
                    var D;
                    f.value.count = ((D = l.currentGame.betMultiple) == null ? void 0 : D.split("|")[0]) || 1, m.value = !1, x()
                },
                x = () => {
                    b.value = [], _.value = [!1, !1, !1, !1, !1, !1, !1, !1], u.value = 0
                },
                B = async () => {
                    if (f.value.count == 0) return Dt(g("bteNoCount"));
                    let D;
                    if (b.value.length > 0) D = b.value.join("|");
                    else switch (u.value) {
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
                    if (!D) return Dt(g("pleaseBet"));
                    const P = {
                            issuenumber: l.currentInfo.gameNo,
                            typeId: l.currentGame.typeID,
                            amount: f.value.coin,
                            betCount: Number(f.value.count),
                            gameType: r.value + 1,
                            selectType: D
                        },
                        q = await at(ga(P));
                    (q == null ? void 0 : q.code) === 0 && (ve(g("code" + (q == null ? void 0 : q.msgCode))), m.value = !1, x(), o("betting", l.currentInfo.gameNo))
                };
            return Nt(() => {
                z()
            }), i({
                bettingPopupShow: m
            }), (D, P) => (n(), a("div", J_, [vt(t("div", Y_, [t("div", null, e(l.currentInfo.time3 || "0"), 1), t("div", null, e(l.currentInfo.time4 || "0"), 1)], 512), [
                [Qt, C.value]
            ]), L(Zn, {
                betTypeNameMap: c.value,
                betType: r.value,
                BettingH: w.value,
                onTabID: u.value,
                OddsList: p.value,
                numberChack: _.value,
                onChangeType: T,
                onNumberTab: v,
                onOnTab: y
            }, null, 8, ["betTypeNameMap", "betType", "BettingH", "onTabID", "OddsList", "numberChack"]), L(Q_, {
                currentInfo: s.currentInfo,
                currentGame: s.currentGame,
                bettingPopupShow: m.value,
                betTypeList: h.value,
                selectInfo: f.value,
                onComputedCoin: N,
                onClearBetting: I,
                onSubmitBetting: B
            }, {
                default: M(() => [L(Zn, {
                    betTypeNameMap: c.value,
                    betType: r.value,
                    BettingH: w.value,
                    onTabID: u.value,
                    OddsList: p.value,
                    numberChack: _.value,
                    onChangeType: T,
                    onNumberTab: v,
                    onOnTab: y
                }, null, 8, ["betTypeNameMap", "betType", "BettingH", "onTabID", "OddsList", "numberChack"])]),
                _: 1
            }, 8, ["currentInfo", "currentGame", "bettingPopupShow", "betTypeList", "selectInfo"])]))
        }
    });
const tv = F(Z_, [
        ["__scopeId", "data-v-28e57f6a"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/FD/Betting.vue"]
    ]),
    ev = {
        class: "RecordNav__C"
    },
    iv = ["onClick"],
    nv = V({
        __name: "RecordNav",
        props: {
            record: {
                type: String,
                default: "GameRecord"
            }
        },
        setup(s) {
            const i = s,
                {
                    t: o
                } = kt(),
                l = k([{
                    name: o("gameRecords"),
                    componentName: "GameRecord"
                }, {
                    name: o("chartTrends"),
                    componentName: "Trend"
                }, {
                    name: o("myGameRecords"),
                    componentName: "MyGameRecord"
                }]);
            return (g, m) => (n(), a("div", ev, [(n(!0), a(R, null, A(l.value, (r, c) => (n(), a("div", {
                key: c,
                onClick: p => g.$emit("changeC", r.componentName),
                class: G({
                    active: i.record == r.componentName
                })
            }, e(r.name), 11, iv))), 128))]))
        }
    });
const Mi = F(nv, [
        ["__scopeId", "data-v-72f81e71"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/WinGo/RecordNav.vue"]
    ]),
    av = {
        class: "GameRecord__C"
    },
    ov = {
        class: "GameRecord__C-head"
    },
    sv = {
        class: "GameRecord__C-body"
    },
    lv = {
        class: "numList"
    },
    cv = {
        class: "numItem"
    },
    rv = {
        class: "redNumItem"
    },
    uv = {
        key: 1,
        class: "GameRecord__C-body-empty"
    },
    dv = {
        key: 0,
        class: "GameRecord__C-foot"
    },
    pv = {
        class: "GameRecord__C-foot-page"
    },
    gv = V({
        __name: "GameRecord",
        props: {
            typeid: {
                type: Number,
                required: !0
            }
        },
        setup(s, {
            expose: i
        }) {
            const o = s,
                l = k([]),
                g = k(4),
                m = k(10),
                r = k(1),
                c = () => {
                    r.value--, u()
                },
                p = () => {
                    r.value++, u()
                },
                u = async (b = !1) => {
                    if (o.typeid == null) return;
                    b && (r.value = 1);
                    const _ = await at(ba({
                        pageSize: m.value,
                        pageNo: r.value,
                        typeId: o.typeid
                    }));
                    l.value = (_ == null ? void 0 : _.data.list) || [], g.value = (_ == null ? void 0 : _.data.totalPage) || 0
                };
            return i({
                getData: u
            }), ke(() => {
                u()
            }), (b, _) => {
                const w = H("van-col"),
                    f = H("van-row"),
                    C = H("van-icon");
                return n(), a("div", av, [t("div", ov, [L(f, null, {
                    default: M(() => [L(w, {
                        span: "8"
                    }, {
                        default: M(() => [O(e(b.$t("FDNumber")), 1)]),
                        _: 1
                    }), L(w, {
                        span: "12"
                    }, {
                        default: M(() => [O(e(b.$t("FDResult")), 1)]),
                        _: 1
                    }), L(w, {
                        span: "4"
                    }, {
                        default: M(() => [O(e(b.$t("FDTotal")), 1)]),
                        _: 1
                    })]),
                    _: 1
                })]), t("div", sv, [l.value.length ? (n(!0), a(R, {
                    key: 0
                }, A(l.value, (h, T) => (n(), it(f, {
                    key: T
                }, {
                    default: M(() => [L(w, {
                        span: "8"
                    }, {
                        default: M(() => [O(e(h.issueNumber), 1)]),
                        _: 2
                    }, 1024), L(w, {
                        span: "12"
                    }, {
                        default: M(() => [t("div", lv, [(n(!0), a(R, null, A([...h.premium], (z, y) => (n(), a("div", cv, e(z), 1))), 256))])]),
                        _: 2
                    }, 1024), L(w, {
                        span: "4"
                    }, {
                        default: M(() => [t("span", rv, e(h.sumCount), 1)]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024))), 128)) : (n(), a("div", uv, [L(pe)]))]), l.value.length ? (n(), a("div", dv, [t("div", {
                    class: G(["GameRecord__C-foot-previous", {
                        disabled: r.value <= 1
                    }]),
                    onClick: c
                }, [L(C, {
                    name: "arrow-left",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2), t("div", pv, e(r.value) + "/" + e(g.value), 1), t("div", {
                    class: G(["GameRecord__C-foot-next", {
                        disabled: r.value >= g.value
                    }]),
                    onClick: p
                }, [L(C, {
                    name: "arrow",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2)])) : $("v-if", !0)])
            }
        }
    });
const bv = F(gv, [
        ["__scopeId", "data-v-9215aba8"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/FD/GameRecord.vue"]
    ]),
    mv = {
        class: "noticeBar__container"
    },
    _v = {
        class: "noticeBar__container-body"
    },
    vv = {
        key: 0,
        class: "noticeBar__container-body-text"
    },
    kv = V({
        __name: "index",
        props: {
            color: {
                type: String,
                required: !0,
                default: "red"
            }
        },
        setup(s) {
            const i = dt(),
                o = Be(),
                l = k(null),
                g = k(o.messageList),
                m = async () => {
                    const r = await at(ma({
                        pageNo: 1,
                        pageSize: 5
                    }));
                    if (r) {
                        if (o.setMessage(r.data.list), g.value = r.data.list, !g.value.length) return;
                        l.value && clearInterval(l.value), l.value = setInterval(() => {
                            g.value.push(g.value.shift())
                        }, 7e3)
                    }
                };
            return Nt(() => {
                g.value || setTimeout(() => {
                    m()
                }, 1e3)
            }), (r, c) => {
                var u;
                const p = H("svg-icon");
                return n(), a("div", mv, [L(p, {
                    name: "noticeBarSpeaker"
                }), t("div", _v, [g.value && g.value[0] && g.value[0].siteMessage ? (n(), a("div", vv, e((u = g.value[0]) == null ? void 0 : u.siteMessage), 1)) : $("v-if", !0)]), t("button", {
                    onClick: c[0] || (c[0] = b => d(i).push({
                        name: "Notification"
                    })),
                    class: "hotIcon"
                }, e(r.$t("more")), 1)])
            }
        }
    }),
    wi = F(kv, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/NoticeBar/index.vue"]
    ]),
    hv = {
        class: "Trend__C"
    },
    fv = {
        class: "Trend__C-body1"
    },
    yv = {
        class: "Trend__C-nav"
    },
    $v = ["onClick"],
    wv = {
        class: "Trend__C-body1-line"
    },
    Tv = {
        key: 0,
        class: "Trend__C-body1-line"
    },
    Cv = {
        class: "Trend__C-body1-line-num"
    },
    Lv = {
        key: 1,
        class: "Trend__C-body1-line"
    },
    Nv = {
        class: "Trend__C-body1-line-num"
    },
    zv = {
        key: 2,
        class: "Trend__C-body1-line"
    },
    Iv = {
        class: "Trend__C-body1-line-num"
    },
    Sv = {
        key: 3,
        class: "Trend__C-body1-line"
    },
    xv = {
        class: "Trend__C-body1-line-num"
    },
    Rv = {
        class: "Trend__C-head"
    },
    Bv = {
        class: "Trend__C-body2"
    },
    Gv = ["IssueNumber", "Number", "Colour", "rowId"],
    Av = {
        class: "Trend__C-body2-IssueNumber"
    },
    Mv = {
        class: "Trend__C-body2-Num"
    },
    Pv = ["id"],
    Dv = {
        key: 1,
        class: "Trend__C-body2-empty"
    },
    Ov = {
        key: 0,
        class: "Trend__C-foot"
    },
    Ev = {
        class: "Trend__C-foot-page"
    },
    qv = V({
        __name: "Trend",
        props: {
            typeid: {
                type: Number,
                required: !0
            }
        },
        setup(s, {
            expose: i
        }) {
            const o = s,
                l = k([]),
                g = k([]),
                m = k(),
                r = k(),
                c = k(),
                p = k(),
                u = k(),
                b = k(["A", "B", "C", "D", "E"]),
                _ = k(0),
                w = k(1),
                f = k(4);

            function C() {
                Zt(() => {
                    for (let S = 0; S < g.value.length; S++) g.value[S + 1] && T(g.value[S], g.value[S + 1])
                })
            }
            const h = S => {
                _.value = S, v(!0)
            };

            function T(S, I) {
                let x = parseInt(S.number),
                    B = parseInt(I.number);
                var D = document.getElementById("myCanvas" + S.rowId);
                if (D && D.getContext) {
                    var P = D.getContext("2d");
                    P.clearRect(0, 0, D.width, D.height), P.beginPath(), P.moveTo(x == 0 ? 14 : x * 27 + 14, 0), P.lineTo(B == 0 ? 14 : B * 27 + 14, D.height), P.strokeStyle = "red", P.stroke(), P.closePath()
                }
            }
            const z = () => {
                    w.value--, N()
                },
                y = () => {
                    w.value++, N()
                },
                v = async (S = !1) => {
                    if (o.typeid == null) return;
                    N(), S && (w.value = 1);
                    const I = await at(_s({
                        typeId: o.typeid,
                        typeNumber: _.value + 1
                    }));
                    if (I) {
                        const x = Object.keys(I.data[0]).filter(B => B.startsWith("number_"));
                        l.value = I.data.filter(B => B.type_Number == _.value + 1).map(B => {
                            const D = {
                                list: [],
                                type: 0
                            };
                            return D.type = B.type, D.list = [], x.forEach(P => {
                                D.list.push(B[P])
                            }), D
                        })
                    }
                    m.value = l.value.find(x => x.type == 1), r.value = l.value.find(x => x.type == 2), c.value = l.value.find(x => x.type == 3), p.value = l.value.find(x => x.type == 4), u.value = l.value.find(x => x.type == 5)
                },
                N = async (S = !1) => {
                    if (o.typeid == null) return;
                    S && (w.value = 1);
                    const I = await at(ba({
                        pageSize: 10,
                        pageNo: w.value,
                        typeId: o.typeid
                    }));
                    I && (g.value = I.data.list.map((x, B) => (x.rowId = B, x.number = x.premium[_.value], x)) || []), f.value = (I == null ? void 0 : I.data.totalPage) || 0, C()
                };
            return i({
                getData: v
            }), ke(() => {
                v()
            }), (S, I) => {
                const x = H("van-col"),
                    B = H("van-row"),
                    D = H("van-icon");
                return n(), a("div", hv, [t("div", fv, [t("div", yv, [(n(!0), a(R, null, A(b.value, (P, q) => (n(), a("div", {
                    key: q,
                    class: G({
                        active: _.value == q
                    }),
                    onClick: X => h(q)
                }, e(P), 11, $v))), 128))]), t("div", wv, e(S.$t("trendDesc1")), 1), r.value ? (n(), a("div", Tv, [t("div", null, e(S.$t("trendDesc3")), 1), t("div", Cv, [(n(!0), a(R, null, A(r.value.list, (P, q) => (n(), a("div", {
                    key: "2" + q
                }, e(P), 1))), 128))])])) : $("v-if", !0), p.value ? (n(), a("div", Lv, [t("div", null, e(S.$t("trendDesc4")), 1), t("div", Nv, [(n(!0), a(R, null, A(p.value.list, (P, q) => (n(), a("div", {
                    key: "4" + q
                }, e(P), 1))), 128))])])) : $("v-if", !0), m.value ? (n(), a("div", zv, [t("div", null, e(S.$t("trendDesc5")), 1), t("div", Iv, [(n(!0), a(R, null, A(m.value.list, (P, q) => (n(), a("div", {
                    key: "5" + q
                }, e(P), 1))), 128))])])) : $("v-if", !0), c.value ? (n(), a("div", Sv, [t("div", null, e(S.$t("trendDesc6")), 1), t("div", xv, [(n(!0), a(R, null, A(c.value.list, (P, q) => (n(), a("div", {
                    key: "3" + q
                }, e(P), 1))), 128))])])) : $("v-if", !0)]), t("div", Rv, [L(B, null, {
                    default: M(() => [L(x, {
                        span: "8"
                    }, {
                        default: M(() => [O(e(S.$t("betIssue")), 1)]),
                        _: 1
                    }), L(x, {
                        span: "16"
                    }, {
                        default: M(() => [O(e(S.$t("number")), 1)]),
                        _: 1
                    })]),
                    _: 1
                })]), t("div", Bv, [g.value.length ? (n(!0), a(R, {
                    key: 0
                }, A(g.value, (P, q) => (n(), a("div", {
                    key: q,
                    IssueNumber: P.issueNumber,
                    Number: P.number,
                    Colour: P.colour,
                    rowId: P.rowId
                }, [L(B, null, {
                    default: M(() => [L(x, {
                        span: "8"
                    }, {
                        default: M(() => [t("div", Av, e(P.issueNumber), 1)]),
                        _: 2
                    }, 1024), L(x, {
                        span: "16"
                    }, {
                        default: M(() => [t("div", Mv, [t("canvas", {
                            canvas: "",
                            id: "myCanvas" + P.rowId,
                            ref_for: !0,
                            ref: "canvas",
                            class: "line-canvas"
                        }, null, 8, Pv), (n(), a(R, null, A(10, X => t("div", {
                            class: G(["Trend__C-body2-Num-item", {
                                action: Number(P.number) == X - 1
                            }]),
                            key: X
                        }, e(X - 1), 3)), 64)), t("div", {
                            class: G(["Trend__C-body2-Num-BS", {
                                isB: Number(P.number) > 4
                            }])
                        }, e(Number(P.number) > 4 ? "H" : "L"), 3), t("div", {
                            class: G(["Trend__C-body2-Num-OE", {
                                isE: Number(P.number) % 2
                            }])
                        }, e(Number(P.number) % 2 ? "O" : "E"), 3)])]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024)], 8, Gv))), 128)) : (n(), a("div", Dv, [L(pe)]))]), g.value.length ? (n(), a("div", Ov, [t("div", {
                    class: G(["Trend__C-foot-previous", {
                        disabled: w.value <= 1
                    }]),
                    onClick: z
                }, [L(D, {
                    name: "arrow-left",
                    class: "Trend__C-icon",
                    size: "20"
                })], 2), t("div", Ev, e(w.value) + "/" + e(f.value), 1), t("div", {
                    class: G(["Trend__C-foot-next", {
                        disabled: w.value >= f.value
                    }]),
                    onClick: y
                }, [L(D, {
                    name: "arrow",
                    class: "Trend__C-icon",
                    size: "20"
                })], 2)])) : $("v-if", !0)])
            }
        }
    });
const jv = F(qv, [
        ["__scopeId", "data-v-9d93d892"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/FD/Trend.vue"]
    ]),
    Hv = {
        class: "MyGameRecordList__C"
    },
    Wv = ["onClick"],
    Vv = {
        class: "MyGameRecordList__C-item-m"
    },
    Fv = {
        class: "MyGameRecordList__C-item-m-top"
    },
    Uv = {
        class: "MyGameRecordList__C-item-m-bottom"
    },
    Kv = {
        key: 0,
        class: "MyGameRecordList__C-detail"
    },
    Xv = {
        class: "MyGameRecordList__C-detail-text"
    },
    Qv = {
        key: 0,
        class: "MyGameRecordList__C-detail-line"
    },
    Jv = ["onClick"],
    Yv = {
        class: "MyGameRecordList__C-detail-line"
    },
    Zv = {
        class: "MyGameRecordList__C-detail-line"
    },
    tk = {
        class: "MyGameRecordList__C-detail-line"
    },
    ek = {
        class: "MyGameRecordList__C-detail-line"
    },
    ik = {
        class: "red"
    },
    nk = {
        class: "MyGameRecordList__C-detail-line"
    },
    ak = {
        class: "MyGameRecordList__C-detail-line"
    },
    ok = {
        key: 0,
        class: "numList"
    },
    sk = {
        key: 1
    },
    lk = {
        class: "MyGameRecordList__C-detail-line"
    },
    ck = {
        class: "line1"
    },
    rk = {
        class: "MyGameRecordList__C-detail-line"
    },
    uk = {
        key: 1
    },
    dk = {
        class: "MyGameRecordList__C-detail-line"
    },
    pk = {
        key: 1
    },
    gk = {
        class: "MyGameRecordList__C-detail-line"
    },
    bk = V({
        __name: "MayrecordList",
        props: {
            mayrecord: {
                type: Array,
                required: !0
            }
        },
        setup(s) {
            const {
                t: i
            } = kt(), o = k(-1), l = c => ["", "A", "B", "C", "D", "E"][c], g = c => {
                switch (c) {
                    case "L":
                        return i("k3Small");
                    case "O":
                        return i("k3Odd");
                    case "E":
                        return i("k3Even");
                    case "H":
                        return i("k3Big");
                    default:
                        return c
                }
            }, m = c => {
                o.value == c ? o.value = -1 : o.value = c
            }, r = c => {
                switch (c) {
                    case "E":
                        return "Even";
                    case "O":
                        return "Odd";
                    case "H":
                        return "Big";
                    case "L":
                        return "Small";
                    default:
                        return c
                }
            };
            return (c, p) => {
                const u = H("svg-icon");
                return n(), a("div", Hv, [(n(!0), a(R, null, A(c.mayrecord, (b, _) => (n(), a(R, {
                    key: _
                }, [t("div", {
                    class: "MyGameRecordList__C-item",
                    onClick: re(w => m(_), ["stop", "prevent"])
                }, [t("div", {
                    class: G(["MyGameRecordList__C-item-l", ["MyGameRecordList__C-item-l-" + b.selectType]])
                }, e(r(b.selectType)), 3), t("div", Vv, [t("div", Fv, e(b.issueNumber), 1), t("div", Uv, e(b.addTime), 1)]), b.profitAmount ? (n(), a("div", {
                    key: 0,
                    class: G(["MyGameRecordList__C-item-r", {
                        success: b.state
                    }])
                }, [b.profitAmount ? (n(), a("div", {
                    key: 0,
                    class: G({
                        success: b.state
                    })
                }, e(b.state ? c.$t("success") : c.$t("fail")), 3)) : $("v-if", !0), t("span", null, e(`${b.state?"+":"-"}${d(Lt)(b.profitAmount)}`), 1)], 2)) : $("v-if", !0)], 8, Wv), _ == o.value ? (n(), a("div", Kv, [t("div", Xv, e(c.$t("detailMay")), 1), b.orderNumber ? (n(), a("div", Qv, [O(e(c.$t("orderNoMay")) + " ", 1), t("div", {
                    onClick: w => d(Ve)(b.orderNumber)
                }, [O(e(b.orderNumber) + " ", 1), L(u, {
                    name: "copy"
                })], 8, Jv)])) : $("v-if", !0), t("div", Yv, [O(e(c.$t("issueMay")) + " ", 1), t("div", null, e(b.issueNumber), 1)]), t("div", Zv, [O(e(c.$t("amountMay")) + " ", 1), t("div", null, e(d(Lt)(b.amount)), 1)]), t("div", tk, [O(e(c.$t("numMay")) + " ", 1), t("div", null, e(b.betCount), 1)]), t("div", ek, [O(e(c.$t("afterTaxAmount")) + " ", 1), t("div", ik, e(d(Lt)(b.realAmount)), 1)]), t("div", nk, [O(e(c.$t("tax")) + " ", 1), t("div", null, e(d(Lt)(b.fee)), 1)]), t("div", ak, [O(e(c.$t("resultMay")) + " ", 1), b.premium ? (n(), a("div", ok, [(n(!0), a(R, null, A(b.premium, (w, f) => (n(), a("div", {
                    key: f
                }, e(w), 1))), 128))])) : (n(), a("div", sk, "--"))]), t("div", lk, [O(e(c.$t("selectMay")) + " ", 1), t("div", ck, [t("div", null, e(l(b.gameType)), 1), (n(!0), a(R, null, A(b.selectType.split("|"), (w, f) => (n(), a("div", {
                    class: "num",
                    key: f
                }, e(g(w)), 1))), 128))])]), t("div", rk, [O(e(c.$t("statusMay")) + " ", 1), b.state != 2 ? (n(), a("div", {
                    key: 0,
                    class: G([b.state ? "green" : "red"])
                }, e(b.state ? c.$t("success") : c.$t("fail")), 3)) : (n(), a("div", uk, e(c.$t("unsettled")), 1))]), t("div", dk, [O(e(c.$t("winOrLose")) + " ", 1), b.state != 2 ? (n(), a("div", {
                    key: 0,
                    class: G([b.state ? "green" : "red"])
                }, e(`${b.state?"+":"-"} ${d(Lt)(b.profitAmount)}`), 3)) : (n(), a("div", pk, "--"))]), t("div", gk, [O(e(c.$t("createTime")) + " ", 1), t("div", null, e(b.addTime), 1)])])) : $("v-if", !0)], 64))), 128))])
            }
        }
    });
const Oa = F(bk, [
        ["__scopeId", "data-v-8bb41fd5"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/FD/MayrecordList.vue"]
    ]),
    mk = {
        class: "MyGameRecord__C"
    },
    _k = {
        key: 0,
        class: "MyGameRecord__C-head"
    },
    vk = {
        class: "MyGameRecord__C-body"
    },
    kk = {
        key: 1,
        class: "MyGameRecord__C-body-empty"
    },
    hk = {
        key: 1,
        class: "MyGameRecord__C-foot"
    },
    fk = {
        class: "MyGameRecord__C-foot-page"
    },
    yk = V({
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
        setup(s, {
            expose: i
        }) {
            const o = s,
                l = dt(),
                g = k(4),
                m = k(20),
                r = k(1),
                c = k([]),
                p = w => {
                    l.push({
                        name: w
                    })
                },
                u = () => {
                    r.value--, _()
                },
                b = () => {
                    r.value++, _()
                },
                _ = async (w = !1) => {
                    if (o.typeid == null) return;
                    w && (r.value = 1);
                    const f = await at(_a({
                        pageSize: m.value,
                        pageNo: r.value,
                        typeId: o.typeid
                    }));
                    c.value = (f == null ? void 0 : f.data.list) || [], g.value = (f == null ? void 0 : f.data.totalPage) || 0
                };
            return i({
                getData: _
            }), ke(() => {
                _()
            }), (w, f) => {
                const C = H("svg-icon"),
                    h = H("van-icon");
                return n(), a("div", mk, [w.hasHead ? (n(), a("div", _k, [t("div", {
                    class: "MyGameRecord__C-head-moreB",
                    onClick: f[0] || (f[0] = T => p(w.goPathName))
                }, [O(e(w.$t("more")) + " ", 1), L(C, {
                    name: "rightCircle"
                })])])) : $("v-if", !0), t("div", vk, [c.value.length ? (n(), it(Oa, {
                    key: 0,
                    mayrecord: c.value
                }, null, 8, ["mayrecord"])) : (n(), a("div", kk, [L(pe)]))]), c.value.length ? (n(), a("div", hk, [t("div", {
                    class: G(["MyGameRecord__C-foot-previous", {
                        disabled: r.value <= 1
                    }]),
                    onClick: u
                }, [L(h, {
                    name: "arrow-left",
                    class: "MyGameRecord__C-icon",
                    size: "20"
                })], 2), t("div", fk, e(r.value) + "/" + e(g.value), 1), t("div", {
                    class: G(["MyGameRecord__C-foot-next", {
                        disabled: r.value >= g.value
                    }]),
                    onClick: b
                }, [L(h, {
                    name: "arrow",
                    class: "MyGameRecord__C-icon",
                    size: "20"
                })], 2)])) : $("v-if", !0)])
            }
        }
    });
const Ea = F(yk, [
        ["__scopeId", "data-v-36ddca8e"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/FD/MyGameRecord.vue"]
    ]),
    $k = s => ($t("data-v-f388b770"), s = s(), wt(), s),
    wk = {
        class: "FDP__C"
    },
    Tk = {
        class: "FDP__C-text"
    },
    Ck = {
        class: "FDP__C-list"
    },
    Lk = {
        class: "num"
    },
    Nk = {
        class: "letter"
    },
    zk = $k(() => t("div", {
        class: "FDP__C-symbol"
    }, "=", -1)),
    Ik = {
        class: "FDP__C-sum"
    },
    Sk = V({
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
        setup(s) {
            const i = s,
                o = Y(() => [...i.premium]),
                l = k(["A", "B", "C", "D", "E"]);
            return (g, m) => (n(), a("div", wk, [t("div", Tk, e(g.$t("betResult")), 1), t("div", Ck, [(n(!0), a(R, null, A(o.value, (r, c) => (n(), a("div", {
                key: c
            }, [t("div", Lk, e(r), 1), t("div", Nk, e(l.value[c]), 1)]))), 128))]), zk, t("div", Ik, e(s.sumCount), 1)]))
        }
    });
const xk = F(Sk, [
        ["__scopeId", "data-v-f388b770"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/FD/premium.vue"]
    ]),
    Rk = s => ($t("data-v-e05c7c66"), s = s(), wt(), s),
    Bk = {
        key: 1,
        class: "WinningTip__C-body-l1"
    },
    Gk = {
        class: "WinningTip__C-body-l2"
    },
    Ak = {
        class: "line1"
    },
    Mk = {
        class: "title"
    },
    Pk = {
        class: "num"
    },
    Dk = Rk(() => t("div", {
        class: "title sum"
    }, "SUM", -1)),
    Ok = {
        class: "num"
    },
    Ek = {
        class: "WinningTip__C-body-l3"
    },
    qk = {
        key: 0,
        class: "isLose"
    },
    jk = {
        class: "head"
    },
    Hk = {
        class: "bonus"
    },
    Wk = {
        class: "gameDetail"
    },
    Vk = {
        class: "WinningTip__C-body-l4"
    },
    Fk = ["onClick"],
    Uk = V({
        __name: "WinningTips",
        setup(s, {
            expose: i
        }) {
            const o = Y(() => m.value[0] ? m.value[0].state == 0 : !1),
                l = Y(() => m.value[0] || {}),
                g = k(!1),
                m = k([]),
                r = k(["A", "B", "C", "D", "E", "SUM"]);
            let c = k();
            const p = () => {
                    clearTimeout(c.value), m.value.shift(), g.value && m.value.length && (c.value = setTimeout(() => {
                        p()
                    }, 1e3 * 3))
                },
                u = () => {
                    g.value = !g.value, g.value ? c.value = setTimeout(() => {
                        p()
                    }, 1e3 * 3) : clearTimeout(c.value)
                },
                b = w => {
                    w.list = w.premium.split(""), w.sum = w.sumCount, m.value.push(w), g.value && (c.value = setTimeout(() => {
                        p()
                    }, 1e3 * 3))
                },
                _ = () => {
                    m.value = []
                };
            return i({
                showMark: b
            }), (w, f) => vt((n(), a("div", {
                class: "WinningTip__C",
                onClick: p
            }, [t("div", {
                class: G(["WinningTip__C-body", {
                    isL: o.value
                }])
            }, [o.value ? (n(), a("div", {
                key: 0,
                class: G(["WinningTip__C-body-l1", {
                    isL: o.value
                }])
            }, e(w.$t("k3WarningTip1")), 3)) : (n(), a("div", Bk, e(w.$t("k3WarningTip2")), 1)), t("div", Gk, [O(e(w.$t("betResult")) + " ", 1), t("div", Ak, [(n(!0), a(R, null, A(l.value.list, (C, h) => (n(), a("div", {
                key: h
            }, [t("div", Mk, e(r.value[h]), 1), t("div", Pk, e(C), 1)]))), 128)), t("div", null, [Dk, t("div", Ok, e(l.value.sum), 1)])])]), t("div", Ek, [o.value ? (n(), a("div", qk, e(w.$t("k3WarningTip3")), 1)) : (n(), a(R, {
                key: 1
            }, [t("div", jk, e(w.$t("k3WarningTip4")), 1), t("div", Hk, e(d(Lt)(Number(l.value.winAmount))), 1)], 64)), t("div", Wk, e(w.$t("k3WarningTip5")) + e(l.value.typeName) + " " + e(l.value.issueNumber), 1)]), t("div", Vk, [t("div", {
                class: G(["acitveBtn", {
                    active: g.value
                }]),
                onClick: re(u, ["stop"])
            }, null, 10, Fk), O(" " + e(w.$t("autoShutOff3s")), 1)]), t("div", {
                class: "closeBtn",
                onClick: _
            })], 2)], 512)), [
                [Qt, m.value.length]
            ])
        }
    });
const Kk = F(Uk, [
        ["__scopeId", "data-v-e05c7c66"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/FD/WinningTips.vue"]
    ]),
    Xk = V({
        __name: "ChangLong",
        setup(s) {
            const i = dt(),
                o = () => {
                    i.push({
                        name: "AllLotteryGames-ChangLong"
                    })
                };
            return (l, g) => (n(), a("div", {
                class: "changlongEnter changlong",
                onClick: o
            }))
        }
    });
const kn = F(Xk, [
        ["__scopeId", "data-v-0ac3de13"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/common/ChangLong.vue"]
    ]),
    Qk = "/assets/mp3/di1-0f3d86cb.mp3",
    Jk = "/assets/mp3/di2-ad9aa8fb.mp3",
    Yk = ["muted"],
    Zk = t("source", {
        src: Qk,
        type: "audio/mpeg"
    }, null, -1),
    th = [Zk],
    eh = ["muted"],
    ih = t("source", {
        src: Jk,
        type: "audio/mpeg"
    }, null, -1),
    nh = [ih],
    ah = V({
        __name: "audio",
        setup(s) {
            const i = k(!1);
            Mt(() => Be().visibility, l => {
                l === 0 ? i.value = !0 : setTimeout(() => {
                    i.value = !1
                }, 500)
            });
            const o = () => {
                i.value = !0, Zt(() => {
                    const l = document.getElementById("voice1"),
                        g = document.getElementById("voice2");
                    l.play(), g.play(), l.pause(), g.pause(), i.value = !1, document.removeEventListener("touchstart", o)
                })
            };
            return Nt(() => {
                document.addEventListener("touchstart", o)
            }), (l, g) => (n(), a(R, null, [t("audio", {
                id: "voice1",
                muted: i.value
            }, th, 8, Yk), t("audio", {
                id: "voice2",
                muted: i.value
            }, nh, 8, eh)], 64))
        }
    }),
    Pi = F(ah, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/WinGo/audio.vue"]
    ]),
    oh = {
        class: "FD__C"
    },
    sh = {
        class: "FD__C-head-more"
    },
    lh = V({
        __name: "index",
        setup(s) {
            const i = {
                    GameRecord: bv,
                    Trend: jv,
                    MyGameRecord: Ea
                },
                o = k(),
                l = k(),
                g = k(),
                m = k(),
                r = k(!1),
                c = k("GameRecord"),
                p = dt(),
                u = De(),
                b = u.get5D,
                _ = k(0),
                w = k(localStorage.getItem("volumeShow") || "1"),
                f = k(!1),
                C = k(null),
                h = k({
                    gameNo: "loading",
                    currentTime: "",
                    beginTime: "",
                    passTime: 180,
                    time1: 0,
                    time2: 0,
                    time3: 0,
                    time4: 0
                }),
                T = k(5),
                z = k(""),
                y = k(!1),
                v = k(null),
                N = k("00000"),
                S = k(0),
                I = Y(() => b[_.value] || {}),
                x = Re(),
                B = Y(() => x.getIsShowLotteryDragon);
            Nt(() => {
                X()
            }), Fe(() => {
                clearInterval(C.value), yt.value.forEach(nt => {
                    clearInterval(nt)
                }), Gt.value && clearTimeout(Gt.value)
            }), Mt(() => Be().visibility, nt => {
                nt === 0 ? clearInterval(C.value) : (X(), gt(_.value))
            });
            const D = () => {
                    p.go(-1), sessionStorage.setItem("clickedGameType", "lottery")
                },
                P = () => {
                    w.value == "1" ? w.value = "2" : w.value = "1", localStorage.setItem("volumeShow", w.value)
                },
                q = nt => {
                    p.push({
                        name: nt
                    })
                },
                X = () => {
                    v.value == null && gt(0)
                },
                lt = async (nt, ct = !1) => {
                    const [Z, tt] = await ee(ks({
                        typeId: nt
                    }));
                    N.value = tt.premium, S.value = tt.sumCount, ct && m.value.animationShow()
                },
                gt = nt => {
                    u.get5DData(), _.value = nt, v.value = b[nt].typeID, rt(v.value), Zt(() => {
                        o.value.getData(v.value)
                    })
                },
                rt = async (nt, ct = !1) => {
                    lt(nt, ct);
                    const [Z, tt] = await ee(vs({
                        typeId: nt
                    }));
                    h.value.gameNo = tt.issueNumber, h.value.currentTime = tt.serviceTime.replace(/-/g, "/"), h.value.beginTime = tt.startTime.replace(/-/g, "/"), J()
                },
                J = () => {
                    if (!b.length) return;
                    var nt = new Date(h.value.currentTime).getTime(),
                        ct = new Date(h.value.beginTime).getTime();
                    let Z = (nt - ct) / 1e3,
                        tt = b[_.value];
                    if (Z > tt.intervalM * 60 && (Z = tt.intervalM * 60), h.value.passTime = tt.intervalM * 60 - Z, h.value.passTime < 0) {
                        z.value = "An error occurred, please contact customer service。The game time is " + tt.intervalM + " minutes,start time is " + h.value.beginTime + ",current time is" + h.value.currentTime + "!", f.value = !0;
                        return
                    }
                    Q()
                },
                Q = () => {
                    clearInterval(C.value), st(!1), C.value = setInterval(function() {
                        st()
                    }, 1e3)
                },
                st = (nt = !0) => {
                    if (h.value.passTime <= T.value && (y.value = !1), w.value == "1" && (h.value.passTime <= T.value && h.value.passTime > 1 ? Rt(1) : h.value.passTime == 1 && Rt(2)), h.value.passTime > 0) {
                        let ct = h.value.passTime;
                        h.value.time2 = Math.floor(ct / 60), h.value.time3 = Math.floor(ct % 60 / 10), h.value.time4 = Math.floor(ct % 10), h.value.passTime--
                    } else clearInterval(C.value), nt && At()
                },
                Rt = (nt = 1) => {
                    const ct = document.getElementById(`voice${nt}`);
                    ct && (ct.currentTime = 0, ct.play())
                },
                At = () => {
                    rt(v.value, !0), g.value.getWinsUserAmount(!1), o.value.getData(!0)
                },
                ot = k({}),
                yt = k([]),
                Tt = nt => {
                    if (g.value.getWinsUserAmount(!1), o.value.getData(), ot.value[nt]) return;
                    ot.value[nt] = !0;
                    const {
                        time1: ct,
                        time2: Z,
                        time3: tt,
                        time4: W
                    } = h.value, Ct = (ct * 10 * 60 + Z * 60 + tt * 10 + W) * 1e3;
                    yt.value[I.value.intervalM] = setTimeout(() => {
                        _t(nt)
                    }, Ct)
                },
                Bt = nt => {
                    r.value = nt
                },
                Gt = k(null),
                _t = async nt => {
                    const [ct, Z] = await ee(hs({
                        issueNumber: nt
                    }));
                    if (Z.data)
                        if (Z.data.state != 2) l.value.showMark(Z.data), delete ot.value[nt];
                        else {
                            Gt.value = setTimeout(() => {
                                _t(nt)
                            }, 2e3);
                            return
                        }
                };
            return (nt, ct) => {
                const Z = H("NavBar");
                return n(), a("div", oh, [L(Z, {
                    "left-arrow": "",
                    onClickLeft: D,
                    class: "main",
                    headLogo: !0
                }, {
                    right: M(() => [t("div", sh, [t("div", {
                        onClick: ct[0] || (ct[0] = tt => q("CustomerService"))
                    }), t("div", {
                        class: G({
                            disableVoice: w.value == "2"
                        }),
                        onClick: P
                    }, null, 2)])]),
                    _: 1
                }), $(" 钱包余额 "), L(Bi, {
                    ref_key: "WallteRef",
                    ref: g
                }, null, 512), L(wi, {
                    key: "5d"
                }), $(" 游戏类型 "), L(Gi, {
                    gameList: d(b),
                    currentGameIndex: _.value,
                    onChangeGame: gt
                }, null, 8, ["gameList", "currentGameIndex"]), L(xk, {
                    premium: N.value,
                    sumCount: S.value
                }, null, 8, ["premium", "sumCount"]), $(" 游戏开始时间倒计时 "), L(y_, {
                    ref_key: "tiemLeftRef",
                    ref: m,
                    currentInfo: h.value,
                    premium: N.value,
                    currentGame: I.value
                }, null, 8, ["currentInfo", "premium", "currentGame"]), $(" 投注表 "), L(tv, {
                    currentInfo: h.value,
                    currentGame: I.value,
                    VoiceType: w.value,
                    typeid: v.value,
                    onBetting: Tt,
                    onChangeBettingP: Bt
                }, null, 8, ["currentInfo", "currentGame", "VoiceType", "typeid"]), $(" 记录导航 "), L(Mi, {
                    record: c.value,
                    onChangeC: ct[1] || (ct[1] = tt => c.value = tt)
                }, null, 8, ["record"]), $(" 动态展示对应的组件 "), (n(), it(Qe, null, [(n(), it(He(i[c.value]), {
                    ref_key: "RecordComponent",
                    ref: o,
                    typeid: v.value,
                    EmerdApi: d(va),
                    goPathName: "AllLotteryGames-BettingRecord5D"
                }, null, 8, ["typeid", "EmerdApi"]))], 1024)), $(" 弹窗组件 "), L(xe, {
                    show: f.value,
                    onConfirm: ct[2] || (ct[2] = tt => q("/login"))
                }, {
                    content: M(() => [t("div", null, e(z.value), 1)]),
                    _: 1
                }, 8, ["show"]), $(" 中奖提示组件 "), L(Kk, {
                    ref_key: "WinningTipsRef",
                    ref: l
                }, null, 512), B.value ? (n(), it(kn, {
                    key: 0
                })) : $("v-if", !0), L(Pi)])
            }
        }
    });
const ch = F(lh, [
        ["__scopeId", "data-v-4f526022"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/5D/index.vue"]
    ]),
    kG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ch
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    rh = {
        class: "BettingRecord5D__C"
    },
    uh = {
        class: "BettingRecord5D__C-head"
    },
    dh = {
        class: "BettingRecord5D__C-nav"
    },
    ph = {
        class: "BettingRecord5D__C-list"
    },
    gh = {
        key: 0,
        class: "BettingRecord5D__C-foot"
    },
    bh = {
        class: "BettingRecord5D__C-foot-page"
    },
    mh = V({
        __name: "index",
        setup(s) {
            const i = dt(),
                o = k(bd),
                l = k([]),
                g = k(0),
                m = k(1),
                r = k(4),
                c = C => {
                    p.value = C.name, m.value = 1, u()
                },
                p = k(0),
                u = async () => {
                    const C = await at(_a({
                        pageSize: 20,
                        pageNo: m.value,
                        typeId: p.value
                    }));
                    l.value = (C == null ? void 0 : C.data.list) || [], r.value = (C == null ? void 0 : C.data.totalPage) || 0
                },
                b = () => {
                    p.value = o.value[0].typeID, u()
                };

            function _() {
                i.go(-1)
            }
            const w = () => {
                    m.value--, u()
                },
                f = () => {
                    m.value++, u()
                };
            return Nt(() => {
                b()
            }), (C, h) => {
                const T = H("NavBar"),
                    z = H("van-tab"),
                    y = H("van-tabs"),
                    v = H("van-icon");
                return n(), a("div", rh, [t("div", uh, [L(T, {
                    "left-arrow": "",
                    onClickLeft: _,
                    class: "main",
                    title: "5D Lotre"
                })]), t("div", dh, [L(y, {
                    active: g.value,
                    "onUpdate:active": h[0] || (h[0] = N => g.value = N),
                    onClickTab: c
                }, {
                    default: M(() => [(n(!0), a(R, null, A(o.value, (N, S) => (n(), it(z, {
                        key: S,
                        title: N.tabName,
                        name: N.typeID
                    }, null, 8, ["title", "name"]))), 128))]),
                    _: 1
                }, 8, ["active"])]), t("div", ph, [L(Oa, {
                    mayrecord: l.value
                }, null, 8, ["mayrecord"])]), l.value.length ? (n(), a("div", gh, [t("div", {
                    class: G(["BettingRecord5D__C-foot-previous", {
                        disabled: m.value <= 1
                    }]),
                    onClick: w
                }, [L(v, {
                    name: "arrow-left",
                    class: "BettingRecord5D__C-icon",
                    size: "20"
                })], 2), t("div", bh, e(m.value) + "/" + e(r.value), 1), t("div", {
                    class: G(["BettingRecord5D__C-foot-next", {
                        disabled: m.value >= r.value
                    }]),
                    onClick: f
                }, [L(v, {
                    name: "arrow",
                    class: "BettingRecord5D__C-icon",
                    size: "20"
                })], 2)])) : $("v-if", !0)])
            }
        }
    });
const _h = F(mh, [
        ["__scopeId", "data-v-8ab0e403"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/BettingRecord5D/index.vue"]
    ]),
    hG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: _h
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    vh = {
        class: "MyGameRecordList__C"
    },
    kh = ["onClick"],
    hh = {
        class: "MyGameRecordList__C-item-m"
    },
    fh = {
        class: "MyGameRecordList__C-item-m-top"
    },
    yh = {
        class: "MyGameRecordList__C-item-m-bottom"
    },
    $h = {
        key: 0,
        class: "MyGameRecordList__C-detail"
    },
    wh = {
        class: "MyGameRecordList__C-detail-text"
    },
    Th = {
        key: 0,
        class: "MyGameRecordList__C-detail-line"
    },
    Ch = ["onClick"],
    Lh = {
        class: "MyGameRecordList__C-detail-line"
    },
    Nh = {
        class: "MyGameRecordList__C-detail-line"
    },
    zh = {
        class: "MyGameRecordList__C-detail-line"
    },
    Ih = {
        class: "MyGameRecordList__C-detail-line"
    },
    Sh = {
        class: "red"
    },
    xh = {
        class: "MyGameRecordList__C-detail-line"
    },
    Rh = {
        class: "MyGameRecordList__C-detail-line"
    },
    Bh = {
        key: 0,
        class: "numList"
    },
    Gh = {
        key: 1
    },
    Ah = {
        class: "MyGameRecordList__C-detail-line noLine"
    },
    Mh = {
        key: 0,
        class: "line1"
    },
    Ph = {
        key: 1,
        class: "line1"
    },
    Dh = {
        class: ""
    },
    Oh = {
        class: ""
    },
    Eh = {
        key: 2,
        class: "line1"
    },
    qh = {
        class: ""
    },
    jh = {
        key: 1,
        class: "btn actionBtn"
    },
    Hh = {
        key: 3,
        class: "line1"
    },
    Wh = {
        class: ""
    },
    Vh = {
        key: 1,
        class: "actionBtn"
    },
    Fh = {
        class: ""
    },
    Uh = {
        class: "MyGameRecordList__C-detail-line"
    },
    Kh = {
        key: 1
    },
    Xh = {
        class: "MyGameRecordList__C-detail-line"
    },
    Qh = {
        key: 1
    },
    Jh = {
        class: "MyGameRecordList__C-detail-line"
    },
    Yh = V({
        __name: "MayrecordList",
        props: {
            mayrecord: {
                type: Array,
                required: !0
            }
        },
        setup(s) {
            const {
                t: i
            } = kt(), o = k(-1), l = c => {
                switch (c) {
                    case "H":
                        return i("k3Big");
                    case "L":
                        return i("k3Small");
                    case "O":
                        return i("k3Odd");
                    case "E":
                        return i("k3Even");
                    default:
                        return c
                }
            }, g = c => {
                o.value == c ? o.value = -1 : o.value = c
            }, m = c => {
                var p, u, b;
                if (c.gameType == "3") {
                    if (c.selectType == "|AAA|") return "3=";
                    if (c.oneList.length) return c.oneList[0]
                }
                if (c.gameType == "4") return c.selectType == "|ABC|" ? "3≠" : c.threeList.length ? `${c.threeList.join("")}` : `${c.oneList.join("")}`;
                if ((p = c.towList) != null && p.length) return c.towList[0];
                if ((u = c.towListArr) != null && u.length) return c.towListArr[0];
                if ((b = c.oneList) != null && b.length) switch (c.oneList[0]) {
                    case "H":
                        return "Big";
                    case "L":
                        return "Small";
                    case "O":
                        return "Odd";
                    case "E":
                        return "Even";
                    default:
                        return c.oneList[0]
                }
            }, r = c => {
                var p, u;
                if ((p = c.towList) != null && p.length) return "num";
                if ((u = c.oneList) != null && u.length) return c.oneList[0].length > 2 ? "num" : c.oneList[0]
            };
            return (c, p) => {
                const u = H("svg-icon");
                return n(), a("div", vh, [(n(!0), a(R, null, A(c.mayrecord, (b, _) => (n(), a(R, {
                    key: _
                }, [t("div", {
                    class: "MyGameRecordList__C-item",
                    onClick: re(w => g(_), ["stop", "prevent"])
                }, [t("div", {
                    class: G(["MyGameRecordList__C-item-l", ["MyGameRecordList__C-item-l-" + r(b)]])
                }, e(m(b)), 3), t("div", hh, [t("div", fh, e(b.issueNumber), 1), t("div", yh, e(b.addTime), 1)]), b.profitAmount ? (n(), a("div", {
                    key: 0,
                    class: G(["MyGameRecordList__C-item-r", {
                        success: b.state
                    }])
                }, [b.profitAmount ? (n(), a("div", {
                    key: 0,
                    class: G({
                        success: b.state
                    })
                }, e(b.state ? c.$t("success") : c.$t("fail")), 3)) : $("v-if", !0), t("span", null, e(`${b.state?"+":"-"}${d(Lt)(b.profitAmount)}`), 1)], 2)) : $("v-if", !0)], 8, kh), _ == o.value ? (n(), a("div", $h, [t("div", wh, e(c.$t("detailMay")), 1), b.orderNumber ? (n(), a("div", Th, [O(e(c.$t("orderNoMay")) + " ", 1), t("div", {
                    onClick: w => d(Ve)(b.orderNumber)
                }, [O(e(b.orderNumber) + " ", 1), L(u, {
                    name: "copy"
                })], 8, Ch)])) : $("v-if", !0), t("div", Lh, [O(e(c.$t("issueMay")) + " ", 1), t("div", null, e(b.issueNumber), 1)]), t("div", Nh, [O(e(c.$t("amountMay")) + " ", 1), t("div", null, e(d(Lt)(b.amount)), 1)]), t("div", zh, [O(e(c.$t("numMay")) + " ", 1), t("div", null, e(b.betCount), 1)]), t("div", Ih, [O(e(c.$t("afterTaxAmount")) + " ", 1), t("div", Sh, e(d(Lt)(b.realAmount)), 1)]), t("div", xh, [O(e(c.$t("tax")) + " ", 1), t("div", null, e(d(Lt)(b.fee)), 1)]), t("div", Rh, [O(e(c.$t("resultMay")) + " ", 1), b.premium ? (n(), a("div", Bh, [(n(!0), a(R, null, A(b.premium, (w, f) => (n(), a("div", {
                    key: f,
                    class: G(["n" + w])
                }, null, 2))), 128))])) : (n(), a("div", Gh, "--"))]), t("div", Ah, [O(e(c.$t("selectMay")) + " ", 1), b.gameType == 1 ? (n(), a("div", Mh, [b.oneList.length > 0 ? (n(), a(R, {
                    key: 0
                }, [t("span", null, e(c.$t("k3RecordDesc1")), 1), (n(!0), a(R, null, A(b.oneList, (w, f) => (n(), a("span", {
                    key: f + "1",
                    class: "btn"
                }, e(l(w)), 1))), 128))], 64)) : $("v-if", !0)])) : $("v-if", !0), $(" 2个相同的数字 "), b.gameType == 2 ? (n(), a("div", Ph, [b.oneList.length > 0 ? (n(), a(R, {
                    key: 0
                }, [t("span", Dh, e(c.$t("k3RecordDesc2")), 1), (n(!0), a(R, null, A(b.oneList, (w, f) => (n(), a("span", {
                    class: "btn actionViolet",
                    key: f + "1"
                }, e(w), 1))), 128))], 64)) : $("v-if", !0), b.towList.length > 0 ? (n(), a(R, {
                    key: 1
                }, [t("span", Oh, e(c.$t("k3RecordDesc3")), 1), (n(!0), a(R, null, A(b.towList, (w, f) => (n(), a("span", {
                    class: "btn actionRedGreen",
                    key: f + "1"
                }, e(w), 1))), 128))], 64)) : $("v-if", !0)])) : $("v-if", !0), b.gameType == 3 ? (n(), a("div", Eh, [b.oneList.length > 0 ? (n(), a(R, {
                    key: 0
                }, [t("span", qh, e(c.$t("k3RecordDesc4")), 1), (n(!0), a(R, null, A(b.oneList, (w, f) => (n(), a("span", {
                    class: "btn actionViolet",
                    key: f + "1"
                }, e(w), 1))), 128))], 64)) : $("v-if", !0), b.towList ? (n(), a("div", jh, e(c.$t("k3RecordDesc5")), 1)) : $("v-if", !0)])) : $("v-if", !0), $(" 不同的号码 "), b.gameType == 4 ? (n(), a("div", Hh, [b.oneList.length > 0 ? (n(), a(R, {
                    key: 0
                }, [t("span", Wh, e(c.$t("k3RecordDesc6")), 1), (n(!0), a(R, null, A(b.oneList, (w, f) => (n(), a("span", {
                    class: "actionViolet",
                    key: f + "1"
                }, e(w), 1))), 128))], 64)) : $("v-if", !0), b.towList ? (n(), a("div", Vh, e(c.$t("k3RecordDesc7")), 1)) : $("v-if", !0), b.threeList.length > 0 ? (n(), a(R, {
                    key: 2
                }, [t("span", Fh, e(c.$t("k3RecordDesc8")), 1), (n(!0), a(R, null, A(b.threeList, (w, f) => (n(), a("span", {
                    class: "actionViolet",
                    key: f + "1"
                }, e(w), 1))), 128))], 64)) : $("v-if", !0)])) : $("v-if", !0)]), t("div", Uh, [O(e(c.$t("statusMay")) + " ", 1), b.state != 2 ? (n(), a("div", {
                    key: 0,
                    class: G([b.state ? "green" : "red"])
                }, e(b.state ? c.$t("success") : c.$t("fail")), 3)) : (n(), a("div", Kh, e(c.$t("k3RecordDesc9")), 1))]), t("div", Xh, [O(e(c.$t("winOrLose")) + " ", 1), b.state != 2 ? (n(), a("div", {
                    key: 0,
                    class: G([b.state ? "green" : "red"])
                }, e(`${b.state?"+":"-"} ${d(Lt)(b.profitAmount)}`), 3)) : (n(), a("div", Qh, "--"))]), t("div", Jh, [O(e(c.$t("createTime")) + " ", 1), t("div", null, e(b.addTime), 1)])])) : $("v-if", !0)], 64))), 128))])
            }
        }
    });
const qa = F(Yh, [
        ["__scopeId", "data-v-a5ef3154"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/K3/MayrecordList.vue"]
    ]),
    Zh = {
        class: "BettingRecordK3__C"
    },
    t1 = {
        class: "BettingRecordK3__C-head"
    },
    e1 = {
        class: "BettingRecordK3__C-nav"
    },
    i1 = {
        class: "BettingRecordK3__C-list"
    },
    n1 = {
        key: 0,
        class: "BettingRecordK3__C-foot"
    },
    a1 = {
        class: "BettingRecordK3__C-foot-page"
    },
    o1 = V({
        __name: "index",
        setup(s) {
            const i = dt(),
                o = k(md),
                l = k([]),
                g = k(0),
                m = k(1),
                r = k(4),
                c = h => {
                    p.value = h.name, m.value = 1, u()
                },
                p = k(0),
                u = async () => {
                    const h = await at(ka({
                            pageSize: 20,
                            pageNo: m.value,
                            typeId: p.value
                        })),
                        T = (h == null ? void 0 : h.data.list) || [];
                    for (let z = 0; T.length > z; z++) {
                        let y = T[z].gameType.split(","),
                            v = T[z].selectType.split(",");
                        for (let N = 0; y.length > N; N++)
                            if (y[N] == "1" || y[N] == "2" || y[N] == "3") T[z].gameType = "1", T[z].oneList = v;
                            else if (y[N] == "5" || y[N] == "6") {
                            let S = [],
                                I = [],
                                x = [];
                            for (let B = 0; v.length > B; B++) {
                                if (v[B] == "|11|" || v[B] == "|22|" || v[B] == "|33|" || v[B] == "|44|" || v[B] == "|55|" || v[B] == "|66|") {
                                    let D = v[B].split("|");
                                    D.pop(), D.shift(), S.push(D.join())
                                }
                                if (v[B] == ":11:" || v[B] == ":22:" || v[B] == ":33:" || v[B] == ":44:" || v[B] == ":55:" || v[B] == ":66:") {
                                    let D = v[B].split(":");
                                    D.pop(), D.shift(), I.push(D.join())
                                }
                                if (v[B] == ":1:" || v[B] == ":2:" || v[B] == ":3:" || v[B] == ":4:" || v[B] == ":5:" || v[B] == ":6:") {
                                    let D = v[B].split(":");
                                    D.pop(), D.shift(), x.push(D.join())
                                }
                            }
                            T[z].gameType = "2", T[z].oneList = S, T[z].towList = !!b(I, x), T[z].towListArr = b(I, x)
                        } else if (y[N] == "7" || y[N] == "8") {
                            let S = [],
                                I = !1;
                            for (let x = 0; v.length > x; x++) {
                                if (v[x] == "|111|" || v[x] == "|222|" || v[x] == "|333|" || v[x] == "|444|" || v[x] == "|555|" || v[x] == "|666|") {
                                    let B = v[x].split("|");
                                    B.pop(), B.shift(), S.push(B.join())
                                }
                                v[x] == "|AAA|" && (I = !0), T[z].oneList = S, T[z].towList = I, T[z].gameType = "3"
                            }
                        } else if (y[N] == "9" || y[N] == "10" || y[N] == "4") {
                            let S = [],
                                I = !1,
                                x = [];
                            for (let B = 0; v.length > B; B++) {
                                if (v[B] == "|1|" || v[B] == "|2|" || v[B] == "|3|" || v[B] == "|4|" || v[B] == "|5|" || v[B] == "|6|") {
                                    let D = v[B].split("|");
                                    D.pop(), D.shift(), S.push(D.join())
                                }
                                if (v[B] == "|ABC|" && (I = !0), v[B] == ".1." || v[B] == ".2." || v[B] == ".3." || v[B] == ".4." || v[B] == ".5." || v[B] == ".6.") {
                                    let D = v[B].split(".");
                                    D.pop(), D.shift(), x.push(D.join())
                                }
                            }
                            T[z].oneList = S, T[z].towList = I, T[z].threeList = x, T[z].gameType = "4"
                        }
                    }
                    l.value = T || [], r.value = (h == null ? void 0 : h.data.totalPage) || 0
                },
                b = (h, T) => {
                    let z = [];
                    for (var y = 0; h.length > y; y++) {
                        let N = h[y],
                            S = [];
                        for (var v = 0; T.length > v; v++) S.push(T[v]);
                        if (S.length > 0) {
                            let I = S.sort().join(",");
                            z.push(N + "|" + I)
                        }
                    }
                    return z.sort()
                },
                _ = () => {
                    p.value = o.value[0].typeID, u()
                };

            function w() {
                i.go(-1)
            }
            const f = () => {
                    m.value--, u()
                },
                C = () => {
                    m.value++, u()
                };
            return Nt(() => {
                _()
            }), (h, T) => {
                const z = H("NavBar"),
                    y = H("van-tab"),
                    v = H("van-tabs"),
                    N = H("van-icon");
                return n(), a("div", Zh, [t("div", t1, [L(z, {
                    "left-arrow": "",
                    onClickLeft: w,
                    class: "main",
                    title: "K3 Lotre"
                })]), t("div", e1, [L(v, {
                    active: g.value,
                    "onUpdate:active": T[0] || (T[0] = S => g.value = S),
                    onClickTab: c
                }, {
                    default: M(() => [(n(!0), a(R, null, A(o.value, (S, I) => (n(), it(y, {
                        key: I,
                        title: S.tabName,
                        name: S.typeID
                    }, null, 8, ["title", "name"]))), 128))]),
                    _: 1
                }, 8, ["active"])]), t("div", i1, [L(qa, {
                    mayrecord: l.value
                }, null, 8, ["mayrecord"])]), l.value.length ? (n(), a("div", n1, [t("div", {
                    class: G(["BettingRecordK3__C-foot-previous", {
                        disabled: m.value <= 1
                    }]),
                    onClick: f
                }, [L(N, {
                    name: "arrow-left",
                    class: "BettingRecordK3__C-icon",
                    size: "20"
                })], 2), t("div", a1, e(m.value) + "/" + e(r.value), 1), t("div", {
                    class: G(["BettingRecordK3__C-foot-next", {
                        disabled: m.value >= r.value
                    }]),
                    onClick: C
                }, [L(N, {
                    name: "arrow",
                    class: "BettingRecordK3__C-icon",
                    size: "20"
                })], 2)])) : $("v-if", !0)])
            }
        }
    });
const s1 = F(o1, [
        ["__scopeId", "data-v-c228f246"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/BettingRecordK3/index.vue"]
    ]),
    fG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: s1
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    l1 = {
        class: "MyGameRecordList__C"
    },
    c1 = ["onClick"],
    r1 = {
        class: "MyGameRecordList__C-item-m"
    },
    u1 = {
        class: "MyGameRecordList__C-item-m-top"
    },
    d1 = {
        class: "MyGameRecordList__C-item-m-bottom"
    },
    p1 = {
        key: 0,
        class: "MyGameRecordList__C-detail"
    },
    g1 = {
        class: "MyGameRecordList__C-detail-text"
    },
    b1 = {
        key: 0,
        class: "MyGameRecordList__C-detail-line"
    },
    m1 = ["onClick"],
    _1 = {
        class: "MyGameRecordList__C-detail-line"
    },
    v1 = {
        class: "MyGameRecordList__C-detail-line"
    },
    k1 = {
        class: "MyGameRecordList__C-detail-line"
    },
    h1 = {
        class: "MyGameRecordList__C-detail-line"
    },
    f1 = {
        class: "red"
    },
    y1 = {
        class: "MyGameRecordList__C-detail-line"
    },
    $1 = {
        class: "MyGameRecordList__C-detail-line"
    },
    w1 = {
        key: 0
    },
    T1 = {
        class: "MyGameRecordList__C-inlineB"
    },
    C1 = {
        key: 0,
        class: "MyGameRecordList__C-inlineB purpleColor"
    },
    L1 = {
        key: 1
    },
    N1 = {
        class: "MyGameRecordList__C-detail-line"
    },
    z1 = {
        class: "MyGameRecordList__C-detail-line"
    },
    I1 = {
        key: 1
    },
    S1 = {
        class: "MyGameRecordList__C-detail-line"
    },
    x1 = {
        key: 1
    },
    R1 = {
        class: "MyGameRecordList__C-detail-line"
    },
    B1 = V({
        __name: "MayrecordList",
        props: {
            mayrecord: {
                type: Array,
                required: !0
            }
        },
        setup(s) {
            const {
                t: i
            } = kt(), o = k(-1), l = p => {
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
            }, m = p => {
                switch (p % 2) {
                    case 1:
                        return "greenColor";
                    default:
                        return "redColor"
                }
            }, r = p => {
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
            }, c = p => {
                o.value == p ? o.value = -1 : o.value = p
            };
            return (p, u) => {
                const b = H("svg-icon");
                return n(), a("div", l1, [(n(!0), a(R, null, A(p.mayrecord, (_, w) => (n(), a(R, {
                    key: w
                }, [t("div", {
                    class: "MyGameRecordList__C-item",
                    onClick: re(f => c(w), ["stop", "prevent"])
                }, [t("div", {
                    class: G(["MyGameRecordList__C-item-l", ["MyGameRecordList__C-item-l-" + _.selectType]])
                }, e(l(_.selectType)), 3), t("div", r1, [t("div", u1, e(_.issueNumber), 1), t("div", d1, e(_.addTime), 1)]), _.profitAmount ? (n(), a("div", {
                    key: 0,
                    class: G(["MyGameRecordList__C-item-r", {
                        success: _.state
                    }])
                }, [_.profitAmount ? (n(), a("div", {
                    key: 0,
                    class: G({
                        success: _.state
                    })
                }, e(_.state ? p.$t("success") : p.$t("fail")), 3)) : $("v-if", !0), t("span", null, e(`${_.state?"+":"-"}${d(Lt)(_.profitAmount)}`), 1)], 2)) : $("v-if", !0)], 8, c1), w == o.value ? (n(), a("div", p1, [t("div", g1, e(p.$t("detailMay")), 1), _.orderNumber ? (n(), a("div", b1, [t("span", null, e(p.$t("orderNoMay")), 1), t("div", {
                    onClick: f => d(Ve)(_.orderNumber)
                }, [O(e(_.orderNumber) + " ", 1), L(b, {
                    name: "copy"
                })], 8, m1)])) : $("v-if", !0), t("div", _1, [t("span", null, e(p.$t("issueMay")), 1), t("div", null, e(_.issueNumber), 1)]), t("div", v1, [t("span", null, e(p.$t("amountMay")), 1), t("div", null, e(d(Lt)(_.amount)), 1)]), t("div", k1, [t("span", null, e(p.$t("numMay")), 1), t("div", null, e(_.betCount), 1)]), t("div", h1, [t("span", null, e(p.$t("afterTaxAmount")), 1), t("div", f1, e(d(Lt)(_.realAmount)), 1)]), t("div", y1, [t("span", null, e(p.$t("tax")), 1), t("div", null, e(d(Lt)(_.fee)), 1)]), t("div", $1, [t("span", null, e(p.$t("resultMay")), 1), _.number ? (n(), a("div", w1, [t("div", T1, e(_.number), 1), t("div", {
                    class: G(["MyGameRecordList__C-inlineB", [m(Number(_.number))]])
                }, e(g(Number(_.number))), 3), _.number == 0 || _.number == 5 ? (n(), a("div", C1, e(p.$t("purpleColor")), 1)) : $("v-if", !0), t("div", {
                    class: G(["MyGameRecordList__C-inlineB", [Number(_.number) > 4 ? "big" : "small"]])
                }, e(Number(_.number) > 4 ? p.$t("big") : p.$t("small")), 3)])) : (n(), a("div", L1, "--"))]), t("div", N1, [t("span", null, e(p.$t("selectMay")), 1), t("div", null, e(r(_.selectType)), 1)]), t("div", z1, [t("span", null, e(p.$t("statusMay")), 1), _.state != 2 ? (n(), a("div", {
                    key: 0,
                    class: G([_.state ? "green" : "red"])
                }, e(_.state ? p.$t("success") : p.$t("fail")), 3)) : (n(), a("div", I1, e(p.$t("k3RecordDesc9")), 1))]), t("div", S1, [t("span", null, e(p.$t("winOrLose")), 1), _.state != 2 ? (n(), a("div", {
                    key: 0,
                    class: G([_.state ? "green" : "red"])
                }, e(`${_.state?"+":"-"} ${d(Lt)(_.profitAmount)}`), 3)) : (n(), a("div", x1, "--"))]), t("div", R1, [t("span", null, e(p.$t("createTime")), 1), t("div", null, e(_.addTime), 1)])])) : $("v-if", !0)], 64))), 128))])
            }
        }
    });
const hn = F(B1, [
        ["__scopeId", "data-v-2faec5cb"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/WinGo/MayrecordList.vue"]
    ]),
    G1 = {
        class: "BettingRecordWin__C"
    },
    A1 = {
        class: "BettingRecordWin__C-head"
    },
    M1 = {
        class: "BettingRecordWin__C-nav"
    },
    P1 = {
        class: "BettingRecordWin__C-list"
    },
    D1 = {
        key: 0,
        class: "BettingRecordWin__C-foot"
    },
    O1 = {
        class: "BettingRecordWin__C-foot-page"
    },
    E1 = V({
        __name: "index",
        setup(s) {
            const i = dt(),
                l = De().getWingo,
                g = k([]),
                m = k(0),
                r = k(1),
                c = k(4),
                p = h => {
                    u.value = h.name, r.value = 1, b()
                },
                u = k(0),
                b = async () => {
                    const [h, T] = await ee(pn({
                        pageSize: 20,
                        pageNo: r.value,
                        typeId: u.value
                    }));
                    g.value = T.list || [], c.value = T.totalPage
                },
                _ = () => {
                    u.value = l[0].typeID, b()
                };

            function w() {
                i.go(-1)
            }
            const f = () => {
                    r.value--, b()
                },
                C = () => {
                    r.value++, b()
                };
            return Nt(() => {
                _()
            }), (h, T) => {
                const z = H("NavBar"),
                    y = H("van-tab"),
                    v = H("van-tabs"),
                    N = H("van-icon");
                return n(), a("div", G1, [t("div", A1, [L(z, {
                    "left-arrow": "",
                    onClickLeft: w,
                    class: "main",
                    title: "Win Go"
                })]), t("div", M1, [L(v, {
                    active: m.value,
                    "onUpdate:active": T[0] || (T[0] = S => m.value = S),
                    onClickTab: p
                }, {
                    default: M(() => [(n(!0), a(R, null, A(d(l), (S, I) => (n(), it(y, {
                        key: I,
                        title: S.tabName,
                        name: S.typeID
                    }, null, 8, ["title", "name"]))), 128))]),
                    _: 1
                }, 8, ["active"])]), t("div", P1, [L(hn, {
                    mayrecord: g.value
                }, null, 8, ["mayrecord"])]), g.value.length ? (n(), a("div", D1, [t("div", {
                    class: G(["BettingRecordWin__C-foot-previous", {
                        disabled: r.value <= 1
                    }]),
                    onClick: f
                }, [L(N, {
                    name: "arrow-left",
                    class: "BettingRecordWin__C-icon",
                    size: "20"
                })], 2), t("div", O1, e(r.value) + "/" + e(c.value), 1), t("div", {
                    class: G(["BettingRecordWin__C-foot-next", {
                        disabled: r.value >= c.value
                    }]),
                    onClick: C
                }, [L(N, {
                    name: "arrow",
                    class: "BettingRecordWin__C-icon",
                    size: "20"
                })], 2)])) : $("v-if", !0)])
            }
        }
    });
const q1 = F(E1, [
        ["__scopeId", "data-v-6d173501"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/BettingRecordWin/index.vue"]
    ]),
    yG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: q1
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    j1 = {
        class: "BettingRecordWinTrx__C"
    },
    H1 = {
        class: "BettingRecordWinTrx__C-head"
    },
    W1 = {
        class: "BettingRecordWinTrx__C-nav"
    },
    V1 = {
        class: "BettingRecordWinTrx__C-list"
    },
    F1 = {
        key: 0,
        class: "BettingRecordWinTrx__C-foot"
    },
    U1 = {
        class: "BettingRecordWinTrx__C-foot-page"
    },
    K1 = V({
        __name: "index",
        setup(s) {
            const i = dt(),
                o = k(gd),
                l = k([]),
                g = k(0),
                m = k(1),
                r = k(0),
                c = k(4),
                p = C => {
                    r.value = C.name, m.value = 1, u()
                },
                u = async () => {
                    const [C, h] = await ee(gn({
                        pageSize: 20,
                        pageNo: m.value,
                        typeId: r.value
                    }));
                    l.value = h.list || [], c.value = h.totalPage
                },
                b = async () => {
                    r.value = o.value[0].typeID, u()
                };

            function _() {
                i.go(-1)
            }
            const w = () => {
                    m.value--, u()
                },
                f = () => {
                    m.value++, u()
                };
            return Nt(() => {
                b()
            }), (C, h) => {
                const T = H("NavBar"),
                    z = H("van-tab"),
                    y = H("van-tabs"),
                    v = H("van-icon");
                return n(), a("div", j1, [t("div", H1, [L(T, {
                    "left-arrow": "",
                    onClickLeft: _,
                    class: "main",
                    title: "Trx Win Go"
                })]), t("div", W1, [L(y, {
                    active: g.value,
                    "onUpdate:active": h[0] || (h[0] = N => g.value = N),
                    onClickTab: p
                }, {
                    default: M(() => [(n(!0), a(R, null, A(o.value, (N, S) => (n(), it(z, {
                        key: S,
                        title: N.tabName,
                        name: N.typeID
                    }, null, 8, ["title", "name"]))), 128))]),
                    _: 1
                }, 8, ["active"])]), t("div", V1, [L(hn, {
                    mayrecord: l.value
                }, null, 8, ["mayrecord"])]), l.value.length ? (n(), a("div", F1, [t("div", {
                    class: G(["BettingRecordWinTrx__C-foot-previous", {
                        disabled: m.value <= 1
                    }]),
                    onClick: w
                }, [L(v, {
                    name: "arrow-left",
                    class: "BettingRecordWinTrx__C-icon",
                    size: "20"
                })], 2), t("div", U1, e(m.value) + "/" + e(c.value), 1), t("div", {
                    class: G(["BettingRecordWinTrx__C-foot-next", {
                        disabled: m.value >= c.value
                    }]),
                    onClick: f
                }, [L(v, {
                    name: "arrow",
                    class: "BettingRecordWinTrx__C-icon",
                    size: "20"
                })], 2)])) : $("v-if", !0)])
            }
        }
    });
const X1 = F(K1, [
        ["__scopeId", "data-v-7bbbf1c1"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/BettingRecordWinTrx/index.vue"]
    ]),
    $G = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: X1
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ut = k({
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
    oi = k(),
    Zi = k(!1),
    si = k(!1),
    ta = k(!0),
    ea = k(!1),
    Q1 = k(!1),
    tn = k("00:00"),
    J1 = k(!1),
    en = k(!0),
    {
        t: nn
    } = Ri.global,
    li = k([]),
    Ue = k([{
        value: nn("small"),
        type: 1,
        range: "3-9",
        beishu: "2.0",
        bet_amount: 0,
        key: "Small",
        groupId: 1,
        playId: 0,
        hot: !1
    }, {
        value: nn("binguoHe"),
        type: 2,
        range: "10-11",
        beishu: "3.0",
        bet_amount: 0,
        key: "Drawn",
        groupId: 1,
        playId: 0,
        hot: !1
    }, {
        value: nn("k3Big"),
        type: 3,
        range: "12-18",
        beishu: "5.0",
        bet_amount: 0,
        key: "Big",
        groupId: 1,
        playId: 0,
        hot: !1
    }]),
    ci = k(Array.from({
        length: 16
    }, (s, i) => {
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
    Se = k({
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
    Pe = k([{
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
    Di = () => {
        const {
            t: s
        } = kt(), i = k(), o = Y(() => [Xt("home/AllLotteryGames/binguo", "dice_" + ut.value.award_result.toString()[0]), Xt("home/AllLotteryGames/binguo", "dice_" + ut.value.award_result.toString()[1]), Xt("home/AllLotteryGames/binguo", "dice_" + ut.value.award_result.toString()[2])]), l = Y(() => ut.value.currentBetType === 1 ? "small" : ut.value.currentBetType === 2 ? "and" : "big"), g = async () => {
            const I = await at(vd());
            I != null && I.data && (ut.value.money_list = I.data.betAmount, ut.value.beishuList = I.data.betMultiplier, ut.value.bet_money = I.data.betAmount[0])
        }, m = async () => {
            const I = await at(kd());
            if (I != null && I.data) {
                li.value = I == null ? void 0 : I.data;
                let x = I == null ? void 0 : I.data;
                x.filter(P => P.groupId === 1).forEach(P => {
                    Number(P.betType) ? ci.value.forEach(q => {
                        P.betType === q.value + "" && (q.beishu = P.odds, q.playId = P.playId)
                    }) : Ue.value.forEach(q => {
                        q.key === P.betType && (q.beishu = P.odds, q.playId = P.playId)
                    })
                }), x.filter(P => P.groupId !== 1).forEach(P => {
                    P.groupId === 4 && (P.betType === "1" ? Se.value.third.amount1 = P.odds : Se.value.third.amount2 = P.odds), P.groupId === 3 && (Se.value.two = P.odds), P.groupId === 2 && (P.betType === "1" ? Se.value.one.amount1 = P.odds : P.betType === "2" ? Se.value.one.amount2 = P.odds : Se.value.one.amount3 = P.odds)
                })
            }
        }, r = async () => {
            const I = await at(yd({
                issueNumber: ut.value.currentNumber
            }));
            I != null && I.data && (I.data.forEach(x => {
                switch (Ue.value.forEach(B => {
                    x.playId === B.playId && (B.bet_amount = x.amount)
                }), ci.value.forEach(B => {
                    x.playId === B.playId && (B.bet_amount = x.amount)
                }), x.playId) {
                    case 28:
                        Pe.value[Number(x.selectType[0]) - 1].amount1 = x.amount;
                        break;
                    case 29:
                        Pe.value[6].amount1 = x.amount;
                        break;
                    case 27:
                        Pe.value[Number(x.selectType[0]) - 1].amount2 = x.amount;
                        break;
                    case 24:
                        Pe.value[Number(x.selectType[0]) - 1].amount3 = x.amount;
                        break
                }
            }), await c(0), Zt(() => {
                I.data.sort((D, P) => P.amount - D.amount).slice(0, 3).forEach(D => {
                    let P = Ue.value.findIndex(X => D.playId === X.playId);
                    P > -1 && (Ue.value[P].hot = !0);
                    let q = ci.value.findIndex(X => D.playId === X.playId);
                    switch (q > -1 && (ci.value[q].hot = !0), D.playId) {
                        case 28:
                            Pe.value[Number(D.selectType[0]) - 1].hot1 = !0;
                            break;
                        case 29:
                            Pe.value[6].hot1 = !0;
                            break;
                        case 27:
                            Pe.value[Number(D.selectType[0]) - 1].hot2 = !0;
                            break;
                        case 24:
                            Pe.value[Number(D.selectType[0]) - 1].hot3 = !0;
                            break
                    }
                })
            }))
        }, c = async I => {
            Pe.value.forEach(x => {
                x.hot1 = !1, x.hot2 = !1, x.hot3 = !1, I === 1 && (x.amount1 = 0, x.amount2 = 0, x.amount3 = 0)
            }), Ue.value.forEach(x => {
                I === 1 && (x.bet_amount = 0), x.hot = !1
            }), ci.value.forEach(x => {
                I === 1 && (x.bet_amount = 0), x.hot = !1
            })
        }, p = async () => {
            const I = await at(hd());
            I && (I.data ? I.data.startTime && I.data.endTime && (ut.value.currentNumber = I == null ? void 0 : I.data.issueNumber, T(I.data.serviceTime, I.data.endTime, async () => {
                tn.value = "10:00", await p(), clearInterval(i.value), setTimeout(() => {
                    u()
                }, 60 * 1e3), c(1)
            })) : en.value = !1, await r())
        }, u = async () => {
            let I = 1;
            i.value = setInterval(async () => {
                I === 10 ? clearInterval(i.value) : (await b(), await _(), I++)
            }, 1e4)
        }, b = async () => {
            const I = await at(fd());
            I && (ut.value.award_result = I == null ? void 0 : I.data.result, ut.value.drawIssnum = I == null ? void 0 : I.data.issueNo)
        }, _ = async () => {
            const I = await at(Ma());
            I && (ut.value.trend_result = I == null ? void 0 : I.data.map(x => x.resultSum + "").slice(0, 13).reverse(), ut.value.trend_result2 = I == null ? void 0 : I.data.map(x => x.result + "").slice(0, 4).reverse())
        }, w = I => {
            si.value = !0, ut.value.bet_number = I.value + "", ut.value.currentBetType = I.type, ut.value.currentPlayId = I.playId, ut.value.currentOdds = I.beishu + ""
        }, f = (I, x) => {
            var B, D, P, q;
            x === 1 ? (ut.value.bet_number = I, ut.value.currentBetType = x, ut.value.currentPlayId = (B = li.value.find(X => X.betType === "1" && X.groupId === 2)) == null ? void 0 : B.playId, ut.value.currentOdds = Se.value.one.amount1 + "") : x === 2 ? (ut.value.bet_number = I + "," + I, I.includes("6") ? ut.value.currentBetType = 3 : I.includes("5") ? ut.value.currentBetType = 2 : ut.value.currentBetType = 1, ut.value.currentOdds = Se.value.two + "", ut.value.currentPlayId = (D = li.value.find(X => X.betType === "2" && X.groupId === 3)) == null ? void 0 : D.playId) : x === 3 && (ut.value.bet_number = I + "," + I + "," + I, /[123]/.test(I) ? ut.value.currentBetType = 1 : ut.value.currentBetType = 3, I.includes("*") ? (ut.value.currentOdds = Se.value.third.amount2 + "", ut.value.currentPlayId = (P = li.value.find(X => X.betType === "2" && X.groupId === 4)) == null ? void 0 : P.playId) : (ut.value.currentOdds = Se.value.third.amount1 + "", ut.value.currentPlayId = (q = li.value.find(X => X.betType === "1" && X.groupId === 4)) == null ? void 0 : q.playId)), si.value = !0
        }, C = async () => {
            var P;
            if (!en.value) {
                si.value = !1, ea.value = !0;
                return
            }
            if (!ta.value) return;
            let I = li.value.find(q => q.playId === ut.value.currentPlayId),
                x = "";
            (I == null ? void 0 : I.groupId) === 2 || (I == null ? void 0 : I.groupId) === 3 ? x = ut.value.bet_number.split(",")[0] : (I == null ? void 0 : I.groupId) === 4 ? x = ut.value.bet_number.includes("*") ? "***" : ut.value.bet_number.split(",").join("") : x = Number(ut.value.bet_number) ? ut.value.bet_number : (P = Ue.value.find(q => q.value === ut.value.bet_number)) == null ? void 0 : P.key;
            let B = {
                issueNumber: ut.value.currentNumber,
                amount: ut.value.bet_money * ut.value.beishu,
                figure: Number(ut.value.beishu),
                gameType: (I == null ? void 0 : I.groupId) + "",
                selectType: x,
                playId: ut.value.currentPlayId
            };
            (await at($d(B))).data && (ln(s("code402")), si.value = !1, r())
        }, h = (I, x) => {
            let B = new Date(I.replace(/-/g, "/"));
            return new Date(x.replace(/-/g, "/")).getTime() - B.getTime()
        }, T = (I, x, B) => {
            clearInterval(oi.value), oi.value = void 0;
            let D = h(I, x);
            if (D <= 1e3) throw new Error("时间不正确");
            oi.value = setInterval(() => {
                if (D -= 1e3, D <= 1e3) {
                    clearInterval(oi.value), B();
                    return
                }
                tn.value = fs(D, "mm:ss")
            }, 1e3)
        }, z = () => Zi.value = !Zi.value, y = I => {
            I === "add" ? ut.value.beishu = Number(ut.value.beishu) + 1 : ut.value.beishu = Number(ut.value.beishu) - 1
        }, v = () => {
            si.value = !1, ut.value.currentBeishuIndex = 0, ut.value.currentMoneyIndex = 0
        }, N = () => ui.back(), S = I => I >= 1e6 ? (I / 1e6).toFixed(1).replace(/\.0$/, "") + "M" : I >= 1e3 ? (I / 1e3).toFixed(1).replace(/\.0$/, "") + "K" : I + "";
        return Mt(() => ut.value.currentMoneyIndex, I => {
            ut.value.bet_money = Number(ut.value.money_list[I])
        }, {
            immediate: !0
        }), Mt(() => ut.value.bet_number, () => {
            ut.value.currentMoneyIndex = 0, ut.value.currentBeishuIndex = 0
        }, {
            immediate: !0
        }), Mt(() => ut.value.currentBeishuIndex, I => {
            ut.value.beishu = Number(ut.value.beishuList[I])
        }, {
            immediate: !0
        }), Fe(() => {
            clearInterval(oi.value)
        }), {
            store: ut,
            timer: oi,
            isShowBetMoney: Zi,
            filterNumberSize: l,
            handleToggleShwoMoney: z,
            handleBet: w,
            goBack: N,
            handleStep: y,
            handleCancel: v,
            isSell: en,
            handleAlike: f,
            getBinguoConfig: g,
            getBinguoOddsList: m,
            getGameBingo18Issue: p,
            countdownTimeFun: T,
            getBingo18LastGameResult: b,
            getBingo18BetAmount: r,
            handleBetSubmit: C,
            getBingo18Last50Result: _,
            formatNum: S,
            checkRule: ta,
            resultImgList: o,
            betSizeList: Ue,
            betNumberList: ci,
            betSheetVisible: si,
            overVisble: ea,
            alikeList: Pe,
            timeText: tn,
            oddObject: Se,
            playerRuleVisble: Q1,
            betPopTXT: J1
        }
    },
    ja = s => ($t("data-v-5ba4aae3"), s = s(), wt(), s),
    Y1 = {
        class: "binguo_info"
    },
    Z1 = {
        class: "binguo_award"
    },
    tf = {
        key: 0,
        class: "main"
    },
    ef = {
        class: "current_award"
    },
    nf = {
        class: "tit"
    },
    af = {
        class: "current_number"
    },
    of = {
        class: "award_time"
    },
    sf = {
        class: "award_result"
    },
    lf = {
        class: "tit"
    },
    cf = {
        class: "award_type"
    },
    rf = {
        key: 1,
        class: "over_tip"
    },
    uf = {
        class: "trend"
    },
    df = {
        key: 0,
        class: "trend_result1"
    },
    pf = {
        class: "text"
    },
    gf = {
        class: "result_list"
    },
    bf = ja(() => t("span", {
        class: "tag animation_tag"
    }, "-", -1)),
    mf = {
        key: 1,
        class: "trend_result2"
    },
    _f = {
        class: "result_list2"
    },
    vf = {
        class: "result_list2"
    },
    kf = {
        class: "animation_tag"
    },
    hf = ja(() => t("div", {
        id: "time"
    }, null, -1)),
    ff = V({
        __name: "BinguoInfo",
        setup(s) {
            const {
                store: i,
                resultImgList: o,
                isSell: l,
                timeText: g,
                getGameBingo18Issue: m,
                getBingo18LastGameResult: r,
                getBingo18Last50Result: c
            } = Di(), p = dt();

            function u(_) {
                let w = 0;
                return i.value.binguoType === 1 ? w = Number(_) : (w = 0, _.split("").forEach(f => {
                    w += Number(f)
                })), w < 10 ? "small" : w === 11 || w === 10 ? "sum" : "big"
            }
            const b = () => {
                p.push({
                    path: "/home/AllLotteryGames/BinguoCount"
                })
            };
            return m(), r(), c(), (_, w) => {
                const f = H("van-icon");
                return n(), a(R, null, [t("div", Y1, [t("div", Z1, [d(l) ? (n(), a("div", tf, [t("div", ef, [t("div", nf, e(_.$t("currentIssNumber")), 1), t("div", af, e(d(i).currentNumber), 1)]), t("div", of , e(d(g)), 1), t("div", sf, [t("div", lf, e(d(i).drawIssnum), 1), t("div", cf, [t("div", {
                    style: oe({
                        backgroundImage: `url(${d(o)[0]}) `
                    })
                }, null, 4), d(i).binguoType !== 2 ? (n(), it(f, {
                    key: 0,
                    name: d(Xt)("home/AllLotteryGames/binguo", "add")
                }, null, 8, ["name"])) : $("v-if", !0), t("div", {
                    style: oe({
                        backgroundImage: `url(${d(o)[1]}) `
                    })
                }, null, 4), d(i).binguoType !== 2 ? (n(), it(f, {
                    key: 1,
                    name: d(Xt)("home/AllLotteryGames/binguo", "add")
                }, null, 8, ["name"])) : $("v-if", !0), t("div", {
                    style: oe({
                        backgroundImage: `url(${d(o)[2]})`
                    })
                }, null, 4)])])])) : (n(), a("div", rf, e(_.$t("playerEnd")), 1))]), t("div", uf, [d(i).binguoType === 1 ? (n(), a("div", df, [t("div", pf, e(_.$t("result")), 1), t("div", gf, [(n(!0), a(R, null, A(d(i).trend_result, C => (n(), a("span", {
                    class: G(["tag", `${u(C)}_tag`])
                }, e(C), 3))), 256)), bf])])) : (n(), a("div", mf, [(n(!0), a(R, null, A(d(i).trend_result2, C => (n(), a("div", _f, [(n(!0), a(R, null, A(C, h => (n(), a("span", {
                    class: G(`${u(C)}_tag`)
                }, e(h), 3))), 256))]))), 256)), t("div", vf, [(n(), a(R, null, A(3, () => t("span", kf)), 64))])])), t("div", {
                    class: "trend_img",
                    onClick: w[0] || (w[0] = C => b())
                })])]), hf], 64)
            }
        }
    });
const yf = F(ff, [
        ["__scopeId", "data-v-5ba4aae3"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/Binguo/components/BinguoInfo.vue"]
    ]),
    $f = s => ($t("data-v-88d327d7"), s = s(), wt(), s),
    wf = {
        class: "main_desk"
    },
    Tf = {
        key: 0,
        class: "rule_tip"
    },
    Cf = {
        class: "bet_size"
    },
    Lf = ["onClick"],
    Nf = {
        class: "head"
    },
    zf = {
        class: "range"
    },
    If = {
        key: 0,
        class: "hot"
    },
    Sf = ["onClick"],
    xf = {
        key: 1,
        class: "alike_box"
    },
    Rf = {
        class: "rule_tip"
    },
    Bf = {
        class: "alike"
    },
    Gf = ["onClick"],
    Af = {
        class: "amount"
    },
    Mf = {
        class: "third_list"
    },
    Pf = {
        class: "ball"
    },
    Df = {
        class: "ball2"
    },
    Of = {
        key: 0,
        class: "ball_hot2"
    },
    Ef = {
        class: "rule_tip"
    },
    qf = {
        class: "alike two_alike"
    },
    jf = ["onClick"],
    Hf = {
        class: "amount"
    },
    Wf = {
        class: "third_list"
    },
    Vf = {
        class: "ball"
    },
    Ff = {
        class: "ball2"
    },
    Uf = {
        key: 0,
        class: "ball_hot2"
    },
    Kf = {
        class: "rule_tip"
    },
    Xf = {
        class: "alike one_alike"
    },
    Qf = ["onClick"],
    Jf = {
        class: "amount"
    },
    Yf = $f(() => t("div", {
        class: "ball_hot"
    }, null, -1)),
    Zf = {
        class: "third_list"
    },
    ty = {
        class: "ball"
    },
    ey = {
        class: "ball2"
    },
    iy = {
        key: 0,
        class: "ball_hot2"
    },
    ny = {
        class: "rule_tip_header"
    },
    ay = ["src"],
    oy = {
        class: "rule_tip_dialog"
    },
    sy = {
        class: "rule_tip_tit"
    },
    ly = {
        class: "rule_tip_text"
    },
    cy = V({
        __name: "BinguoMainDesk",
        setup(s) {
            const {
                t: i
            } = kt(), {
                betSizeList: o,
                betNumberList: l,
                isShowBetMoney: g,
                handleBet: m,
                store: r,
                alikeList: c,
                handleAlike: p,
                oddObject: u,
                formatNum: b
            } = Di(), _ = {
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
            }, w = k(!1), f = k(), C = () => {
                const h = document.querySelectorAll(".rule_tip");
                for (let T = 0; T < h.length; T++) h[T].addEventListener("click", () => {
                    w.value = !0, T === 0 && (f.value = _.sum), T === 1 && (f.value = _.third), T === 2 && (f.value = _.two), T === 3 && (f.value = _.one)
                })
            };
            return Mt(() => r.value.binguoType, h => {
                h === 2 && Zt(() => {
                    C()
                })
            }, {
                deep: !0,
                immediate: !0
            }), (h, T) => (n(), a("div", wf, [d(r).binguoType === 2 ? (n(), a("div", Tf, e(h.$t("xosoTxt60")), 1)) : $("v-if", !0), t("div", Cf, [(n(!0), a(R, null, A(d(o), z => (n(), a("div", {
                class: "size_item",
                onClick: re(y => d(m)(z), ["stop"])
            }, [t("div", Nf, [t("span", null, e(d(g) && z.bet_amount ? d(b)(z.bet_amount) : ""), 1), t("span", null, e(z.beishu + "x" || ""), 1)]), t("div", {
                class: G(`value value_${z.type}`)
            }, e(z.value), 3), t("div", zf, e(z.range), 1), z.hot && d(g) ? (n(), a("div", If)) : $("v-if", !0)], 8, Lf))), 256))]), t("div", {
                class: G(["bet_number", {
                    betAll: d(r).binguoType === 2
                }])
            }, [(n(!0), a(R, null, A(d(l), z => (n(), a("div", {
                key: z.value,
                class: "item",
                onClick: y => d(m)(z)
            }, [t("div", null, e(d(g) && z.bet_amount ? d(b)(z.bet_amount) : ""), 1), t("div", null, e(z.value), 1), t("div", null, e(z.beishu) + "X", 1), z.hot && d(g) ? (n(), a("div", {
                key: 0,
                class: G(["hot", {
                    hot2: d(r).binguoType === 2
                }])
            }, null, 2)) : $("v-if", !0)], 8, Sf))), 128))], 2), d(r).binguoType === 2 ? (n(), a("div", xf, [t("div", Rf, e(h.$t("trendTXT4")) + " " + e(h.$t("odds")) + e(d(u).third.amount1) + "x " + e(h.$t("k3bet3Desc4")) + " " + e(h.$t("odds")) + e(d(u).third.amount2) + "x ", 1), t("div", Bf, [(n(!0), a(R, null, A(d(c), z => (n(), a("div", {
                class: "alike_item",
                onClick: y => d(p)(z.value, 3)
            }, [t("div", Af, e(d(g) && z.amount1 ? d(b)(z.amount1) : ""), 1), t("div", Mf, [(n(), a(R, null, A(3, () => t("div", Pf, [t("span", Df, e(z.value), 1), z.hot1 ? (n(), a("span", Of)) : $("v-if", !0)])), 64))])], 8, Gf))), 256))]), t("div", Ef, e(h.$t("trendTXT3") + h.$t("odds")) + " " + e(d(u).two) + "x", 1), t("div", qf, [(n(!0), a(R, null, A(d(c).slice(0, 6), z => (n(), a("div", {
                class: "alike_item",
                onClick: y => d(p)(z.value, 2)
            }, [t("div", Hf, e(d(g) && z.amount2 ? d(b)(z.amount2) : ""), 1), t("div", Wf, [(n(), a(R, null, A(2, () => t("div", Vf, [t("span", Ff, e(z.value), 1), z.hot2 ? (n(), a("span", Uf)) : $("v-if", !0)])), 64))])], 8, jf))), 256))]), t("div", Kf, e(h.$t("binguoRuleTip1")) + e(d(u).one.amount1) + "x " + e(h.$t("binguoRuleTip2")) + e(d(u).one.amount2) + "x " + e(h.$t("binguoRuleTip3")) + " " + e(d(u).one.amount3) + "x ", 1), t("div", Xf, [(n(!0), a(R, null, A(d(c).slice(0, 6), z => (n(), a("div", {
                class: "alike_item",
                onClick: y => d(p)(z.value, 1)
            }, [t("div", Jf, e(d(g) && z.amount3 ? d(b)(z.amount3) : ""), 1), Yf, t("div", Zf, [t("span", ty, [t("span", ey, e(z.value), 1), z.hot3 ? (n(), a("span", iy)) : $("v-if", !0)])])], 8, Qf))), 256))])])) : $("v-if", !0), L(xe, {
                show: w.value,
                "onUpdate:show": T[0] || (T[0] = z => w.value = z),
                showCloseIcon: !0,
                clickOutSide: !0,
                "show-cancel-btn": !1,
                showFooter: !1,
                isShowHeader: !1
            }, {
                title: M(() => {
                    var z;
                    return [t("div", ny, [(n(!0), a(R, null, A((z = f.value) == null ? void 0 : z.dice.split(","), y => (n(), a("img", {
                        src: d(Xt)("home/AllLotteryGames/binguo", `rule_dice_${y}`),
                        alt: ""
                    }, null, 8, ay))), 256))])]
                }),
                content: M(() => {
                    var z, y;
                    return [t("div", oy, [t("div", sy, e((z = f.value) == null ? void 0 : z.tip1), 1), t("div", ly, e((y = f.value) == null ? void 0 : y.tip2), 1)])]
                }),
                footer: M(() => []),
                _: 1
            }, 8, ["show"])]))
        }
    });
const ry = F(cy, [
        ["__scopeId", "data-v-88d327d7"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/Binguo/components/BinguoMainDesk.vue"]
    ]),
    uy = {
        class: "bet_content"
    },
    dy = {
        class: "bet_tit"
    },
    py = {
        class: "bet_cnt"
    },
    gy = {
        class: "bet_item"
    },
    by = {
        class: "bet_item_tit"
    },
    my = {
        class: "bet_money_list"
    },
    _y = ["onClick"],
    vy = {
        class: "bet_item"
    },
    ky = {
        class: "bet_item_tit"
    },
    hy = {
        class: "bet_step"
    },
    fy = {
        class: "bet_money_list bet_beishu"
    },
    yy = ["onClick"],
    $y = {
        class: "bet_info"
    },
    wy = {
        class: "tit"
    },
    Ty = {
        class: "pl",
        style: {
            color: "#fff"
        }
    },
    Cy = {
        class: "bet_info"
    },
    Ly = {
        class: "tit"
    },
    Ny = {
        class: "pl",
        style: {
            color: "#cee98c"
        }
    },
    zy = {
        class: "bet_info"
    },
    Iy = {
        class: "tit"
    },
    Sy = {
        class: "pl",
        style: {
            color: "#f9bc36"
        }
    },
    xy = {
        key: 0,
        class: "recharge_tip"
    },
    Ry = {
        class: "apply"
    },
    By = {
        class: "bet_btn_group"
    },
    Gy = V({
        __name: "BinguoBetSheet",
        setup(s) {
            const {
                betSheetVisible: i,
                store: o,
                betPopTXT: l,
                filterNumberSize: g,
                handleStep: m,
                checkRule: r,
                handleCancel: c,
                handleBetSubmit: p
            } = Di(), b = Be().getUserInfo, _ = dt(), w = () => {
                _.push("/wallet/recharge")
            };
            return (f, C) => {
                const h = H("van-field"),
                    T = H("van-icon"),
                    z = H("van-checkbox"),
                    y = H("van-action-sheet");
                return n(), it(y, {
                    show: d(i),
                    "onUpdate:show": C[8] || (C[8] = v => ce(i) ? i.value = v : null),
                    closeable: !1
                }, {
                    default: M(() => [t("div", uy, [t("div", dy, e(f.$t("betting")), 1), t("div", py, [(n(!0), a(R, null, A(d(o).bet_number.split(","), v => (n(), a("span", {
                        class: G(`${d(g)}`)
                    }, e(v), 3))), 256))]), t("div", gy, [t("div", by, e(f.$t("amount")), 1), t("div", my, [(n(!0), a(R, null, A(d(o).money_list, (v, N) => (n(), a("div", {
                        class: G(["money_item", {
                            monyActive: d(o).currentMoneyIndex === N
                        }]),
                        onClick: S => d(o).currentMoneyIndex = N
                    }, e(v), 11, _y))), 256))])]), t("div", vy, [t("div", ky, [t("span", null, e(f.$t("multiple")), 1), t("div", hy, [t("span", {
                        onClick: C[0] || (C[0] = v => d(m)("sub"))
                    }, "-"), L(h, {
                        modelValue: d(o).beishu,
                        "onUpdate:modelValue": C[1] || (C[1] = v => d(o).beishu = v),
                        "input-align": "center",
                        onInput: C[2] || (C[2] = v => {
                            if (9999 < Number(v.target.value)) {
                                d(o).beishu = 9999;
                                return
                            }
                            if (Number(v.target.value) < 1) {
                                d(o).beishu = 0;
                                return
                            }
                            d(o).beishu = Number(v.target.value)
                        }),
                        type: "digit",
                        class: "bet_beishu_input"
                    }, null, 8, ["modelValue"]), t("span", {
                        onClick: C[3] || (C[3] = v => d(m)("add"))
                    }, "+")])]), t("div", fy, [(n(!0), a(R, null, A(d(o).beishuList, (v, N) => (n(), a("div", {
                        class: G(["money_item", {
                            monyActive: d(o).currentBeishuIndex === N
                        }]),
                        onClick: S => d(o).currentBeishuIndex = N
                    }, " X" + e(v), 11, yy))), 256))])]), t("div", $y, [t("div", wy, e(f.$t("odds")), 1), t("div", Ty, e(d(o).currentOdds), 1)]), t("div", Cy, [t("div", Ly, e(f.$t("walletBalance")), 1), t("div", Ny, e(d(b).amount), 1)]), t("div", zy, [t("div", Iy, e(f.$t("betAmounts")), 1), t("div", Sy, e(d(o).bet_money * d(o).beishu), 1)]), d(b).amount < d(o).bet_money * d(o).beishu ? (n(), a("div", xy, [t("div", null, [L(T, {
                        name: "warning-o",
                        size: "18"
                    }), O(" " + e(f.$t("walletTip")), 1)]), t("span", {
                        onClick: w
                    }, e(f.$t("goRecharge")) + " >>", 1)])) : $("v-if", !0), L(z, {
                        modelValue: d(r),
                        "onUpdate:modelValue": C[5] || (C[5] = v => ce(r) ? r.value = v : null),
                        "checked-color": "#CEE98C",
                        "label-disabled": "",
                        "icon-size": "24px"
                    }, {
                        default: M(() => [t("span", Ry, e(f.$t("agree")), 1), t("span", {
                            class: "rule",
                            onClick: C[4] || (C[4] = () => {
                                i.value = !1, l.value = !0
                            })
                        }, e(f.$t("presaleRules")), 1)]),
                        _: 1
                    }, 8, ["modelValue"]), t("div", By, [t("div", {
                        class: "cancel_btn",
                        onClick: C[6] || (C[6] = (...v) => d(c) && d(c)(...v))
                    }, e(f.$t("cancel")), 1), t("div", {
                        class: G(["bet_btn", {
                            inconformity: d(b).amount < d(o).bet_money * d(o).beishu || !d(r) || d(o).bet_money * d(o).beishu === 0
                        }]),
                        onClick: C[7] || (C[7] = (...v) => d(p) && d(p)(...v))
                    }, e(f.$t("betting")), 3)])])]),
                    _: 1
                }, 8, ["show"])
            }
        }
    });
const Ay = F(Gy, [
    ["__scopeId", "data-v-e3548ddc"],
    ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/Binguo/components/BinguoBetSheet.vue"]
]);
const My = {},
    fn = s => ($t("data-v-a175919f"), s = s(), wt(), s),
    Py = {
        class: "container"
    },
    Dy = {
        class: "first-paragraph"
    },
    Oy = {
        class: "first-statement"
    },
    Ey = {
        class: "paragraph-two"
    },
    qy = {
        class: "paragraph-two-statement"
    },
    jy = {
        class: "paragraph-three"
    },
    Hy = {
        class: "paragraph-three-statement"
    },
    Wy = {
        class: "svg-container"
    },
    Vy = cn('<div class="first-vector" data-v-a175919f><svg xmlns="http://www.w3.org/2000/svg" width="132" height="14" viewBox="0 0 132 14" fill="none" data-v-a175919f><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.99997C-2.41411e-08 6.72383 0.223857 6.49997 0.499999 6.49997L119.5 6.49996C119.776 6.49996 120 6.72382 120 6.99996C120 7.27611 119.776 7.49996 119.5 7.49996L0.5 7.49997C0.223858 7.49997 2.41411e-08 7.27612 0 6.99997Z" fill="url(#paint0_linear_22_2052)" data-v-a175919f></path><path d="M119.515 8.41418C118.734 7.63313 118.734 6.3668 119.515 5.58575L123.757 1.34311C124.538 0.562062 125.805 0.562062 126.586 1.34311L130.828 5.58575C131.609 6.3668 131.609 7.63313 130.828 8.41418L126.586 12.6568C125.805 13.4379 124.538 13.4379 123.757 12.6568L119.515 8.41418Z" fill="url(#paint1_linear_22_2052)" data-v-a175919f></path><defs data-v-a175919f><linearGradient id="paint0_linear_22_2052" x1="126" y1="7.00003" x2="-4.8188e-08" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-a175919f><stop stop-color="#5DBA47" data-v-a175919f></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-a175919f></stop></linearGradient><linearGradient id="paint1_linear_22_2052" x1="126" y1="7.00003" x2="-4.8188e-08" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-a175919f><stop stop-color="#5DBA47" data-v-a175919f></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-a175919f></stop></linearGradient></defs></svg></div>', 1),
    Fy = {
        class: "vector-heading"
    },
    Uy = cn('<div class="vector-two" data-v-a175919f><svg xmlns="http://www.w3.org/2000/svg" width="132" height="14" viewBox="0 0 132 14" fill="none" data-v-a175919f><path fill-rule="evenodd" clip-rule="evenodd" d="M132 6.99997C132 6.72383 131.776 6.49997 131.5 6.49997L12.5 6.49996C12.2239 6.49996 12 6.72382 12 6.99996C12 7.27611 12.2239 7.49996 12.5 7.49996L131.5 7.49997C131.776 7.49997 132 7.27612 132 6.99997Z" fill="url(#paint0_linear_22_2053)" data-v-a175919f></path><path d="M12.4853 8.41418C13.2664 7.63313 13.2664 6.3668 12.4853 5.58575L8.24268 1.34311C7.46163 0.562062 6.1953 0.562062 5.41425 1.34311L1.17162 5.58575C0.390564 6.3668 0.390564 7.63313 1.17162 8.41418L5.41425 12.6568C6.1953 13.4379 7.46163 13.4379 8.24268 12.6568L12.4853 8.41418Z" fill="url(#paint1_linear_22_2053)" data-v-a175919f></path><defs data-v-a175919f><linearGradient id="paint0_linear_22_2053" x1="6.00001" y1="7.00003" x2="132" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-a175919f><stop stop-color="#5DBA47" data-v-a175919f></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-a175919f></stop></linearGradient><linearGradient id="paint1_linear_22_2053" x1="6.00001" y1="7.00003" x2="132" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-a175919f><stop stop-color="#5DBA47" data-v-a175919f></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-a175919f></stop></linearGradient></defs></svg></div>', 1),
    Ky = {
        class: "details-container-one"
    },
    Xy = {
        class: "details-container-items"
    },
    Qy = {
        class: "first-heading"
    },
    Jy = {
        class: "fontBold"
    },
    Yy = {
        class: "paragraph-inside-container"
    },
    Zy = {
        class: "paragraph-title"
    },
    t0 = {
        class: "paragraph-inside-container"
    },
    e0 = {
        class: "paragraph-title"
    },
    i0 = {
        class: "paragraph-inside-container"
    },
    n0 = {
        class: "paragraph-title"
    },
    a0 = {
        class: "paragraph-inside-container"
    },
    o0 = {
        class: "paragraph-title"
    },
    s0 = {
        class: "details-container-one"
    },
    l0 = {
        class: "details-container-items"
    },
    c0 = {
        class: "first-heading"
    },
    r0 = fn(() => t("span", {
        class: "fontBold"
    }, "1,2,3,4,5,6", -1)),
    u0 = {
        class: "paragraph-inside-container"
    },
    d0 = {
        class: "paragraph-title"
    },
    p0 = {
        class: "details-container-one"
    },
    g0 = {
        class: "details-container-items"
    },
    b0 = {
        class: "first-heading"
    },
    m0 = fn(() => t("span", {
        class: "fontBold"
    }, "11,22...66", -1)),
    _0 = {
        class: "paragraph-inside-container"
    },
    v0 = {
        class: "paragraph-title"
    },
    k0 = {
        class: "details-container-one"
    },
    h0 = {
        class: "details-container-items"
    },
    f0 = {
        class: "first-heading"
    },
    y0 = fn(() => t("span", {
        class: "fontBold"
    }, "111,222...666,***", -1)),
    $0 = {
        class: "paragraph-inside-container"
    },
    w0 = {
        class: "paragraph-title"
    },
    T0 = {
        class: "paragraph-inside-container"
    },
    C0 = {
        class: "paragraph-title"
    };

function L0(s, i) {
    return n(), a("div", Py, [t("div", Dy, [t("p", Oy, e(s.$t("binguoRuleText1")), 1)]), $(" ------------------------- First paragraph ends here--------------------------- "), t("div", Ey, [t("p", qy, e(s.$t("binguoRuleText2")), 1)]), $(" ------------------------- Paragraph two ends here--------------------------- "), t("div", jy, [t("p", Hy, e(s.$t("binguoRuleText3")), 1)]), $(" ------------------------- Paragraph three ends here--------------------------- "), t("div", Wy, [Vy, t("div", Fy, e(s.$t("gamePlay")), 1), $(" ------------------------- vector heading ends here--------------------------- "), Uy]), $(" ------------------------- vector two ends here--------------------------- "), $(" ///////////////////////////////////////////////////// First container div starts from here   ///////////////////////////////////////////////////////////////////// "), t("div", Ky, [t("div", Xy, e(s.$t("xosoTxt60")), 1), $(" ------------------------- svg right ends here--------------------------- "), $(" ------------------------- details container heading ends here--------------------------- "), t("div", Qy, [O(e(s.$t("binguoRuleText4")) + " ", 1), t("span", Jy, e(s.$t("binguoRuleText5")), 1), O(e(s.$t("binguoRuleText6")), 1)]), $(" ------------------------- first-heading ends here--------------------------- "), t("div", Yy, [t("div", Zy, [t("span", null, e(s.$t("binguoRuleText7")) + ":", 1), O(e(s.$t("binguoRuleText8")), 1)])]), t("div", t0, [t("div", e0, [t("span", null, e(s.$t("binguoRuleText9")) + ":", 1), O(e(s.$t("binguoRuleText10")), 1)])]), t("div", i0, [t("div", n0, [t("span", null, e(s.$t("binguoRuleText17")) + ":", 1), O(e(s.$t("binguoRuleText18")), 1)])]), t("div", a0, [t("div", o0, [t("span", null, e(s.$t("binguoRuleText11")) + ",", 1), O(e(s.$t("binguoRuleText12")), 1)])])]), $(" First container ends here  "), $(" ///////////////////////////////////////////////////// 2nd container div starts from here   ///////////////////////////////////////////////////////////////////// "), t("div", s0, [t("div", l0, e(s.$t("same")), 1), $(" ------------------------- svg right ends here--------------------------- "), $(" ------------------------- details container heading ends here--------------------------- "), t("div", c0, [O(e(s.$t("binguoRuleText4")) + " ", 1), r0]), $(" ------------------------- first-heading ends here--------------------------- "), t("div", u0, [t("div", d0, e(s.$t("binguoRuleText13")), 1)])]), $(" ///////////////////////////////////////////////////// 3rd container div starts from here   ///////////////////////////////////////////////////////////////////// "), t("div", p0, [t("div", g0, e(s.$t("sameNum")), 1), $(" ------------------------- svg right ends here--------------------------- "), $(" ------------------------- details container heading ends here--------------------------- "), t("div", b0, [O(e(s.$t("binguoRuleText4")), 1), m0]), $(" ------------------------- first-heading ends here--------------------------- "), t("div", _0, [t("div", v0, e(s.$t("binguoRuleText14")), 1)])]), $(" ///////////////////////////////////////////////////// 4th container div starts from here   ///////////////////////////////////////////////////////////////////// "), t("div", k0, [t("div", h0, e(s.$t("numbersMatch")), 1), $(" ------------------------- svg right ends here--------------------------- "), $(" ------------------------- details container heading ends here--------------------------- "), t("div", f0, [O(e(s.$t("binguoRuleText4")), 1), y0]), $(" ------------------------- first-heading ends here--------------------------- "), t("div", $0, [t("div", w0, e(s.$t("binguoRuleText15")), 1)]), t("div", T0, [t("div", C0, e(s.$t("binguoRuleText16")), 1)])])])
}
const N0 = F(My, [
        ["render", L0],
        ["__scopeId", "data-v-a175919f"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/Bingo/Rule.vue"]
    ]),
    z0 = s => ($t("data-v-278561a4"), s = s(), wt(), s),
    I0 = {
        class: "binguo_container"
    },
    S0 = z0(() => t("span", {
        class: "nav_title"
    }, "BINGO18", -1)),
    x0 = {
        class: "nav_right"
    },
    R0 = {
        class: "binguo_btn_group"
    },
    B0 = ["src"],
    G0 = {
        class: "over_dialog_tip"
    },
    A0 = {
        class: "playerRule"
    },
    M0 = {
        class: "playerRule"
    },
    P0 = {
        style: {
            color: "#fff"
        }
    },
    D0 = V({
        __name: "index",
        setup(s) {
            const {
                goBack: i,
                betPopTXT: o,
                isShowBetMoney: l,
                handleToggleShwoMoney: g,
                store: m,
                overVisble: r,
                getBinguoConfig: c,
                getBinguoOddsList: p,
                playerRuleVisble: u
            } = Di(), b = dt(), _ = () => {
                b.push({
                    path: "/home/AllLotteryGames/BinguoRecord"
                })
            };
            return Nt(() => {
                c(), p()
            }), (w, f) => {
                const C = H("van-icon"),
                    h = H("NavBar");
                return n(), a("div", I0, [L(h, {
                    "left-arrow": "",
                    onClickLeft: d(i),
                    backgroundColor: "#0a4529"
                }, {
                    left: M(() => [L(C, {
                        name: "arrow-left",
                        size: 24
                    }), S0]),
                    right: M(() => [t("div", x0, [t("div", {
                        onClick: f[0] || (f[0] = re(() => u.value = !0, ["stop"])),
                        class: "binguo_explain"
                    }), t("div", {
                        class: G(["binguo_money", d(l) ? "binguo_money_look" : "binguo_money_hidden"]),
                        onClick: f[1] || (f[1] = re(() => d(g)(), ["stop"]))
                    }, null, 2), t("div", {
                        onClick: f[2] || (f[2] = re(() => _(), ["stop"])),
                        class: "binguo_count1"
                    })])]),
                    _: 1
                }, 8, ["onClickLeft"]), t("div", R0, [t("div", {
                    class: G(["btn_1", {
                        active_btn: d(m).binguoType === 1
                    }]),
                    onClick: f[3] || (f[3] = T => d(m).binguoType = 1)
                }, e(w.$t("binguoDesk1")), 3), t("div", {
                    class: G(["btn_2", {
                        active_btn: d(m).binguoType === 2
                    }]),
                    onClick: f[4] || (f[4] = T => d(m).binguoType = 2)
                }, e(w.$t("binguoDesk2")), 3)]), L(yf), L(ry), L(Ay), L(xe, {
                    show: d(r),
                    onConfirm: f[5] || (f[5] = T => r.value = !1),
                    "show-cancel-btn": !1,
                    confirmText: w.$t("confirm")
                }, {
                    header: M(() => [t("img", {
                        src: d(Xt)("home/AllLotteryGames/binguo", "binguo_tip"),
                        alt: "",
                        class: "binguo_tip"
                    }, null, 8, B0)]),
                    content: M(() => [t("div", G0, e(w.$t("over_dialog_tip")), 1)]),
                    _: 1
                }, 8, ["show", "confirmText"]), L(xe, {
                    class: "rule_dialog",
                    show: d(u),
                    onConfirm: f[6] || (f[6] = T => u.value = !1),
                    "show-cancel-btn": !1,
                    isShowHeader: !1,
                    confirmText: w.$t("iKonw")
                }, {
                    title: M(() => [t("div", null, e(w.$t("binguo_playerRule")), 1)]),
                    content: M(() => [t("div", A0, [L(N0)])]),
                    _: 1
                }, 8, ["show", "confirmText"]), L(xe, {
                    class: "rule_dialog",
                    show: d(o),
                    onConfirm: f[7] || (f[7] = T => o.value = !1),
                    "show-cancel-btn": !1,
                    isShowHeader: !1,
                    confirmText: w.$t("iKonw")
                }, {
                    title: M(() => [t("div", null, e(w.$t("presaleRules")), 1)]),
                    content: M(() => [t("div", M0, [t("div", P0, e(w.$t("betPopTXT")), 1)])]),
                    _: 1
                }, 8, ["show", "confirmText"])])
            }
        }
    });
const O0 = F(D0, [
        ["__scopeId", "data-v-278561a4"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/Binguo/index.vue"]
    ]),
    wG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: O0
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    E0 = {
        class: "binguo_count_tab"
    },
    q0 = ["onClick"],
    j0 = V({
        __name: "BinguoTab",
        setup(s) {
            const {
                store: i
            } = Ze(), {
                t: o
            } = kt(), l = [{
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
            return (g, m) => (n(), a("div", E0, [(n(), a(R, null, A(l, (r, c) => t("div", {
                class: G(["item", {
                    active: d(i).currentTabIndex === c
                }]),
                key: r.value,
                onClick: p => d(i).currentTabIndex = c
            }, e(r.lable), 11, q0)), 64))]))
        }
    });
const H0 = F(j0, [
        ["__scopeId", "data-v-44316bfe"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/BinguoCount/components/BinguoTab.vue"]
    ]),
    W0 = s => ($t("data-v-ca8cfc1e"), s = s(), wt(), s),
    V0 = {
        class: "t-table_border"
    },
    F0 = {
        class: "t-table_th_round"
    },
    U0 = {
        class: "tab_header"
    },
    K0 = {
        key: 0,
        class: "tab_default_cell"
    },
    X0 = {
        class: "tab_default_cell"
    },
    Q0 = {
        key: 0
    },
    J0 = {
        key: 0
    },
    Y0 = ["colspan"],
    Z0 = W0(() => t("div", {
        style: {
            color: "#666",
            "font-size": "14px",
            padding: "6px",
            "text-align": "center"
        }
    }, "暂无数据", -1)),
    t2 = V({
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
        setup(s) {
            const i = s;
            rn(u => ({
                "ca8cfc1e-tabWidth": u.tabWidth,
                "ca8cfc1e-tabHeight": u.tabHeight,
                "ca8cfc1e-rowHeight": d(r),
                "ca8cfc1e-align": d(g),
                "ca8cfc1e-rowBgColor": d(l),
                "ca8cfc1e-hColor": u.hColor,
                "ca8cfc1e-hBgColor": d(m)
            }));
            const o = k([]),
                {
                    rowBgColor: l,
                    align: g,
                    hBgColor: m,
                    rowHeight: r
                } = i,
                c = () => {
                    o.value = JSON.parse(JSON.stringify(i.dataSource))
                },
                p = () => {
                    i.columnOptions.forEach((u, b) => {
                        if (u.isLockColumn) {
                            let _ = document.querySelector(`.th_${u.key}_${b}`),
                                w = document.querySelectorAll(`.td_${u.key}`);
                            _.style.position = "sticky", _.style.top = "-2px", _.style.left = "0", _.style.zIndex = "11", w.forEach(f => {
                                f.style.position = "sticky", f.style.left = "0", f.style.zIndex = "10"
                            })
                        }
                    })
                };
            return Nt(() => {
                p()
            }), Mt(() => i.dataSource, (u, b) => {
                u !== b && (c(), p())
            }, {
                deep: !0
            }), (u, b) => (n(), a("div", {
                class: "cuTable",
                style: oe({ ...u.scroll && {
                        overflowX: "auto"
                    },
                    ...!u.scroll && {
                        overflow: "hidden"
                    }
                })
            }, [t("div", V0, [t("table", F0, [t("tr", U0, [(n(!0), a(R, null, A(u.columnOptions, (_, w) => (n(), a("th", {
                style: oe({
                    width: _.width || 100 / u.columnOptions.length + "%"
                }),
                key: w + "p",
                class: G(`th_${_.key}_${w} default_header_cell ${u.border?"":"noBorder"}`)
            }, [_.isSlotHeader ? _e(u.$slots, _.key + "_head", {
                key: 1,
                item: _
            }, void 0, !0) : (n(), a("div", K0, e(_.title), 1))], 6))), 128))]), (n(!0), a(R, null, A(u.dataSource, (_, w) => vt((n(), a("tr", {
                class: "tab_body",
                key: w + "p1"
            }, [(n(!0), a(R, null, A(u.columnOptions, (f, C) => (n(), a("td", {
                key: C + "p2",
                class: G(`td_${f.key} default_cell ${f.cusTdClass||""} ${u.border?"":"noBorder"}`),
                style: oe({
                    width: f.width
                })
            }, [t("div", X0, [f.isSlot ? $("v-if", !0) : (n(), a("span", Q0, e(_[f.key]), 1)), _e(u.$slots, f.key, {
                item: _
            }, void 0, !0)])], 6))), 128))])), [
                [Qt, u.dataSource && u.dataSource.length > 0]
            ])), 128)), u.dataSource.length === 0 ? (n(), a("tr", J0, [t("td", {
                colspan: u.columnOptions.length
            }, [_e(u.$slots, "empty", {}, () => [Z0], !0)], 8, Y0)])) : $("v-if", !0)])])], 4))
        }
    });
const Ke = F(t2, [
        ["__scopeId", "data-v-ca8cfc1e"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/table/index.vue"]
    ]),
    e2 = {
        class: "binguo_bet_count"
    },
    i2 = {
        class: "bingtip_count_title"
    },
    n2 = {
        class: "lately"
    },
    a2 = {
        class: "average_column"
    },
    o2 = {
        class: "noaverage_column"
    },
    s2 = {
        class: "average_column"
    },
    l2 = {
        class: "noaverage_column"
    },
    c2 = {
        class: "progress_box"
    },
    r2 = {
        class: "progress"
    },
    u2 = {
        class: "tit"
    },
    d2 = {
        class: "progress"
    },
    p2 = {
        class: "tit"
    },
    g2 = {
        class: "progress"
    },
    b2 = {
        class: "tit"
    },
    m2 = {
        class: "bingtip_count_title"
    },
    _2 = {
        class: "alike_column"
    },
    v2 = {
        class: "big"
    },
    k2 = {
        class: "bingtip_count_title two_title"
    },
    h2 = {
        class: "alike_column"
    },
    f2 = {
        class: "big"
    },
    y2 = V({
        __name: "BinguoBetCount",
        setup(s) {
            const {
                store: i,
                filterStyle: o
            } = Ze(), {
                t: l
            } = kt(), g = Y(() => {
                var p, u, b, _;
                return (p = i.smallAndBigTrend) != null && p.bigCount ? ((u = i.smallAndBigTrend) == null ? void 0 : u.bigCount) + ((b = i.smallAndBigTrend) == null ? void 0 : b.smallCount) + ((_ = i.smallAndBigTrend) == null ? void 0 : _.equalCount) : 0
            }), m = k([{
                title: l("xosoTxt60"),
                key: "number",
                isSlot: !0,
                cusTdClass: "sum_column"
            }, {
                title: l("binguoAvgCount"),
                key: "avgCount",
                isSlot: !0
            }, {
                title: l("binguoNotOpenCount"),
                key: "notOpenCount",
                isSlot: !0
            }]), r = k([{
                title: l("numbersMatch"),
                key: "number",
                isSlot: !0,
                cusTdClass: "sum_column"
            }, {
                title: l("binguoOpenCount"),
                key: "openCount",
                isSlot: !1
            }, {
                title: l("binguoAvgCount"),
                key: "avgCount",
                isSlot: !1
            }, {
                title: l("binguoNotOpenCount"),
                key: "notOpenCount",
                isSlot: !1
            }]), c = Y(() => {
                let p = bn(r.value);
                return p[0].title = l("sameNum"), p
            });
            return (p, u) => {
                var _, w, f, C, h, T;
                const b = H("van-progress");
                return n(), a("div", e2, [t("div", i2, e(p.$t("binguoLastIssue")), 1), t("div", n2, [L(Ke, {
                    "column-options": m.value,
                    "data-source": d(i).resultSumTrend.slice(0, 8),
                    rowHeight: "40px",
                    tabWidth: "49.6%",
                    tabHeight: "100%",
                    border: !1
                }, {
                    number: M(({
                        item: z
                    }) => [t("div", {
                        class: G(`sum_column ${d(o)(z.number)}`)
                    }, e(z.number), 3)]),
                    avgCount: M(({
                        item: z
                    }) => [t("div", a2, e(z.avgCount), 1)]),
                    notOpenCount: M(({
                        item: z
                    }) => [t("div", o2, e(z.notOpenCount), 1)]),
                    _: 1
                }, 8, ["column-options", "data-source"]), L(Ke, {
                    "column-options": m.value,
                    "data-source": d(i).resultSumTrend.slice(8, 16),
                    rowHeight: "40px",
                    tabWidth: "49.6%",
                    tabHeight: "100%",
                    border: !1
                }, {
                    number: M(({
                        item: z
                    }) => [t("div", {
                        class: G(`sum_column ${d(o)(z.number)}`)
                    }, e(z.number), 3)]),
                    avgCount: M(({
                        item: z
                    }) => [t("div", s2, e(z.avgCount), 1)]),
                    notOpenCount: M(({
                        item: z
                    }) => [t("div", l2, e(z.notOpenCount), 1)]),
                    _: 1
                }, 8, ["column-options", "data-source"])]), $(" 进度条 "), t("div", c2, [t("div", r2, [t("div", u2, [t("span", null, e(p.$t("small")), 1), t("div", null, [O(e(p.$t("binguoAppeared")), 1), t("span", null, e((_ = d(i).smallAndBigTrend) == null ? void 0 : _.smallCount), 1)])]), L(b, {
                    percentage: ((w = d(i).smallAndBigTrend) == null ? void 0 : w.smallCount) / g.value * 100,
                    "stroke-width": "10",
                    "track-color": "#0A603E",
                    color: "#5DBA47"
                }, null, 8, ["percentage"])]), t("div", d2, [t("div", p2, [t("span", null, e(p.$t("binguoHe")), 1), t("div", null, [O(e(p.$t("binguoAppeared")), 1), t("span", null, e((f = d(i).smallAndBigTrend) == null ? void 0 : f.equalCount), 1)])]), L(b, {
                    percentage: ((C = d(i).smallAndBigTrend) == null ? void 0 : C.equalCount) / g.value * 100,
                    "stroke-width": "10",
                    "track-color": "#0A603E",
                    color: "#F9BC36"
                }, null, 8, ["percentage"])]), t("div", g2, [t("div", b2, [t("span", null, e(p.$t("k3Big")), 1), t("div", null, [O(e(p.$t("binguoAppeared")), 1), t("span", null, e((h = d(i).smallAndBigTrend) == null ? void 0 : h.bigCount), 1)])]), L(b, {
                    percentage: ((T = d(i).smallAndBigTrend) == null ? void 0 : T.bigCount) / g.value * 100,
                    "stroke-width": "10",
                    "track-color": "#0A603E",
                    color: "#5DBA47"
                }, null, 8, ["percentage"])])]), t("div", m2, e(p.$t("binguoThirdAlike")), 1), L(Ke, {
                    "column-options": r.value,
                    "data-source": d(i).threeSameTrend,
                    rowHeight: "40px",
                    tabWidth: "100%",
                    tabHeight: "100%",
                    border: !1,
                    class: "binguoCountTable"
                }, {
                    number: M(({
                        item: z
                    }) => [t("div", _2, [(n(!0), a(R, null, A((z.number + "").split(""), y => (n(), a("div", v2, e(y), 1))), 256))])]),
                    _: 1
                }, 8, ["column-options", "data-source"]), t("div", k2, e(p.$t("binguoTwoAlike")), 1), L(Ke, {
                    "column-options": c.value,
                    "data-source": d(i).twoSameTrend,
                    rowHeight: "40px",
                    tabWidth: "100%",
                    tabHeight: "100%",
                    border: !1,
                    class: "binguoCountTable"
                }, {
                    number: M(({
                        item: z
                    }) => [t("div", h2, [(n(!0), a(R, null, A((z.number + "").split(""), y => (n(), a("div", f2, e(y), 1))), 256))])]),
                    _: 1
                }, 8, ["column-options", "data-source"])])
            }
        }
    });
const $2 = F(y2, [
        ["__scopeId", "data-v-cd38c622"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/BinguoCount/components/BinguoBetCount.vue"]
    ]),
    bi = s => ($t("data-v-f03aed68"), s = s(), wt(), s),
    w2 = {
        class: "binguo_detail"
    },
    T2 = {
        class: "bingtip_count_title"
    },
    C2 = {
        class: "result1"
    },
    L2 = {
        class: "column_list"
    },
    N2 = {
        class: "bingtip_count_title"
    },
    z2 = {
        class: "record_list"
    },
    I2 = {
        class: "record_item"
    },
    S2 = {
        class: "item"
    },
    x2 = {
        key: 1
    },
    R2 = {
        class: "bingtip_count_title"
    },
    B2 = {
        class: "issueNo_head"
    },
    G2 = {
        class: "issue_text"
    },
    A2 = {
        class: "issue_number"
    },
    M2 = bi(() => t("div", {
        class: "ball"
    }, "1", -1)),
    P2 = bi(() => t("div", {
        class: "ball"
    }, "2", -1)),
    D2 = bi(() => t("div", {
        class: "ball"
    }, "3", -1)),
    O2 = bi(() => t("div", {
        class: "ball"
    }, "4", -1)),
    E2 = bi(() => t("div", {
        class: "ball"
    }, "5", -1)),
    q2 = bi(() => t("div", {
        class: "ball"
    }, "6", -1)),
    j2 = {
        class: "issueNo_column"
    },
    H2 = V({
        __name: "BinguoDetail",
        setup(s) {
            const {
                t: i
            } = kt(), o = k([{
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
                filterStyle: l,
                last50Result: g,
                last50Record: m,
                last50RecordResult: r
            } = Ze();
            return (c, p) => (n(), a("div", w2, [t("div", T2, e(c.$t("binguoLast50")), 1), t("div", C2, [(n(!0), a(R, null, A(d(g), u => (n(), a("div", L2, [(n(!0), a(R, null, A(u, b => (n(), a("div", {
                class: G(`item ${d(l)(b)}`)
            }, e(b), 3))), 256))]))), 256))]), t("div", N2, e(c.$t("binguoLast50Record")), 1), t("div", z2, [(n(!0), a(R, null, A(d(m), u => (n(), a("div", I2, [(n(!0), a(R, null, A(u, b => (n(), a("div", S2, [b ? (n(), a("div", {
                key: 0,
                class: G(`${d(l)(b)}`)
            }, e(b), 3)) : (n(), a("div", x2))]))), 256))]))), 256))]), t("div", R2, e(c.$t("binguoRecordResult")), 1), L(Ke, {
                "column-options": o.value,
                "data-source": d(r),
                rowHeight: "30px",
                tabWidth: "100%",
                hBgColor: "linear-gradient(180deg, #0A603E 0%, #168055 100%)",
                tabHeight: "100%",
                border: !0,
                hColor: "#FFF880"
            }, {
                issueNo_head: M(() => [t("div", B2, [t("span", G2, e(c.$t("betNumber")), 1), t("span", A2, e(c.$t("binguoNumber")), 1)])]),
                num1_head: M(() => [M2]),
                num2_head: M(() => [P2]),
                num3_head: M(() => [D2]),
                num4_head: M(() => [O2]),
                num5_head: M(() => [E2]),
                num6_head: M(() => [q2]),
                issueNo: M(({
                    item: u
                }) => [t("div", j2, e(u.issueNo), 1)]),
                sum: M(({
                    item: u
                }) => [t("div", {
                    class: G(`sum_column ${d(l)(u.sum)}`)
                }, e(u.sum), 3)]),
                num1: M(({
                    item: u
                }) => [t("div", {
                    class: G(`num_column num_column${u.num1}`)
                }, [(n(!0), a(R, null, A(u.num1, () => (n(), a("div"))), 256))], 2)]),
                num2: M(({
                    item: u
                }) => [t("div", {
                    class: G(`num_column num_column${u.num2}`)
                }, [(n(!0), a(R, null, A(u.num2, () => (n(), a("div"))), 256))], 2)]),
                num3: M(({
                    item: u
                }) => [t("div", {
                    class: G(`num_column num_column${u.num3}`)
                }, [(n(!0), a(R, null, A(u.num3, () => (n(), a("div"))), 256))], 2)]),
                num4: M(({
                    item: u
                }) => [t("div", {
                    class: G(`num_column num_column${u.num4}`)
                }, [(n(!0), a(R, null, A(u.num4, () => (n(), a("div"))), 256))], 2)]),
                num5: M(({
                    item: u
                }) => [t("div", {
                    class: G(`num_column num_column${u.num5}`)
                }, [(n(!0), a(R, null, A(u.num5, () => (n(), a("div"))), 256))], 2)]),
                num6: M(({
                    item: u
                }) => [t("div", {
                    class: G(`num_column num_column${u.num6}`)
                }, [(n(!0), a(R, null, A(u.num6, () => (n(), a("div"))), 256))], 2)]),
                _: 1
            }, 8, ["column-options", "data-source"])]))
        }
    });
const W2 = F(H2, [
        ["__scopeId", "data-v-f03aed68"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/BinguoCount/components/BinguoDetail.vue"]
    ]),
    yn = s => ($t("data-v-ec5b8d89"), s = s(), wt(), s),
    V2 = {
        class: "trend_container"
    },
    F2 = {
        class: "trend_header"
    },
    U2 = {
        class: "trend_header_title"
    },
    K2 = yn(() => t("span", null, "7", -1)),
    X2 = yn(() => t("br", null, null, -1)),
    Q2 = yn(() => t("span", null, "100", -1)),
    J2 = ["src"],
    Y2 = ["src"],
    Z2 = {
        class: "trend_table"
    },
    t$ = {
        class: "trend_tip"
    },
    e$ = {
        class: "tip_text"
    },
    i$ = {
        key: 0
    },
    n$ = {
        key: 0
    },
    a$ = {
        class: "custom_column"
    },
    o$ = {
        class: "custom_column winmount_column"
    },
    s$ = V({
        __name: "BinguoTrend",
        setup(s) {
            const {
                store: i
            } = Ze(), {
                t: o
            } = kt(), l = k([{
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
            }]), g = dt(), m = () => {
                i.isTrend || g.back()
            };
            return (r, c) => (n(), a("div", V2, [t("div", F2, [t("div", U2, [O(e(r.$t("binguoLately")), 1), K2, O(e(r.$t("days")), 1), X2, O(" " + e(r.$t("binguoQian")), 1), Q2, O(e(r.$t("binguoMin") + r.$t("binguoPaimin")), 1)]), t("img", {
                src: d(Xt)("home/AllLotteryGames/binguo", "trend1"),
                class: "trend1",
                alt: ""
            }, null, 8, J2), t("img", {
                src: d(Xt)("home/AllLotteryGames/binguo", "trend2"),
                class: "trend2",
                alt: ""
            }, null, 8, Y2)]), t("div", Z2, [t("div", t$, [t("div", e$, [O(e(d(i).isTrend ? r.$t("binguoMyLead") : r.$t("binguoNotBoard")) + " ", 1), d(i).isTrend ? $("v-if", !0) : (n(), a("br", i$)), O(" " + e(d(i).isTrend ? "" : r.$t("binguoGoPlay")), 1)]), t("div", {
                class: "trend_go",
                onClick: m
            }, [O(e(d(i).isTrend ? d(i).userRank : "GO") + " ", 1), d(i).isTrend ? (n(), a("span", n$, e(r.$t("binguoMin")), 1)) : $("v-if", !0)])]), L(Ke, {
                "column-options": l.value,
                "data-source": d(i).trendList,
                rowHeight: "50px",
                tabWidth: "100%",
                hBgColor: "linear-gradient(180deg, #13AB62 0%, #0F6946 100%)",
                tabHeight: "100%",
                border: !1,
                hColor: "#FFF880"
            }, {
                rankID: M(({
                    item: p
                }) => [t("div", {
                    class: G(["rankID_column", `${p.rankID<4?"top_"+p.rankID:"rank_text"}`])
                }, e(p.rankID > 3 ? p.rankID : ""), 3)]),
                userName: M(({
                    item: p
                }) => [t("div", a$, e(p.userName), 1)]),
                winAmount: M(({
                    item: p
                }) => [t("div", o$, e(d(Lt)(p.winAmount)), 1)]),
                _: 1
            }, 8, ["column-options", "data-source"])])]))
        }
    });
const l$ = F(s$, [
        ["__scopeId", "data-v-ec5b8d89"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/BinguoCount/components/BinguoTrend.vue"]
    ]),
    c$ = {
        class: "last7Day_container"
    },
    r$ = {
        class: "bingtip_count_title"
    },
    u$ = {
        class: "column_time"
    },
    d$ = {
        key: 0,
        class: "result"
    },
    p$ = {
        class: "quan"
    },
    g$ = {
        key: 0,
        class: "result"
    },
    b$ = {
        class: "quan"
    },
    m$ = {
        key: 0,
        class: "result"
    },
    _$ = {
        class: "quan"
    },
    v$ = {
        key: 0,
        class: "result"
    },
    k$ = {
        class: "quan"
    },
    h$ = {
        key: 0,
        class: "result"
    },
    f$ = {
        class: "quan"
    },
    y$ = {
        key: 0,
        class: "result"
    },
    $$ = {
        class: "quan"
    },
    w$ = {
        key: 0,
        class: "result"
    },
    T$ = {
        class: "quan"
    },
    C$ = V({
        __name: "BinguoLast7Day",
        setup(s) {
            const {
                store: i,
                columnOptions: o,
                filterStyle: l
            } = Ze();
            return (g, m) => (n(), a("div", c$, [t("div", r$, e(g.$t("binguoLast7Result")), 1), L(Ke, {
                "column-options": d(o),
                "data-source": d(i).last7Day,
                rowHeight: "40px",
                "tab-height": "1200px"
            }, {
                issueEndTime: M(({
                    item: r
                }) => [t("div", u$, e(r.issueEndTime), 1)]),
                time_index_0: M(({
                    item: r
                }) => {
                    var c, p, u;
                    return [r.time_index_0 ? (n(), a("div", d$, [t("div", p$, [(n(!0), a(R, null, A((c = r.time_index_0) == null ? void 0 : c.result.split(""), b => (n(), a("div", null, e(b), 1))), 256))]), t("div", {
                        class: G(["result_sum", d(l)((p = r.time_index_0) == null ? void 0 : p.resultSum)])
                    }, e((u = r.time_index_0) == null ? void 0 : u.resultSum), 3)])) : $("v-if", !0)]
                }),
                time_index_1: M(({
                    item: r
                }) => {
                    var c, p, u;
                    return [r.time_index_1 ? (n(), a("div", g$, [t("div", b$, [(n(!0), a(R, null, A((c = r.time_index_1) == null ? void 0 : c.result.split(""), b => (n(), a("div", null, e(b), 1))), 256))]), t("div", {
                        class: G(["result_sum", d(l)((p = r.time_index_1) == null ? void 0 : p.resultSum)])
                    }, e((u = r.time_index_1) == null ? void 0 : u.resultSum), 3)])) : $("v-if", !0)]
                }),
                time_index_2: M(({
                    item: r
                }) => {
                    var c, p, u;
                    return [r.time_index_2 ? (n(), a("div", m$, [t("div", _$, [(n(!0), a(R, null, A((c = r.time_index_2) == null ? void 0 : c.result.split(""), b => (n(), a("div", null, e(b), 1))), 256))]), t("div", {
                        class: G(["result_sum", d(l)((p = r.time_index_2) == null ? void 0 : p.resultSum)])
                    }, e((u = r.time_index_2) == null ? void 0 : u.resultSum), 3)])) : $("v-if", !0)]
                }),
                time_index_3: M(({
                    item: r
                }) => {
                    var c, p, u;
                    return [r.time_index_3 ? (n(), a("div", v$, [t("div", k$, [(n(!0), a(R, null, A((c = r.time_index_3) == null ? void 0 : c.result.split(""), b => (n(), a("div", null, e(b), 1))), 256))]), t("div", {
                        class: G(["result_sum", d(l)((p = r.time_index_3) == null ? void 0 : p.resultSum)])
                    }, e((u = r.time_index_3) == null ? void 0 : u.resultSum), 3)])) : $("v-if", !0)]
                }),
                time_index_4: M(({
                    item: r
                }) => {
                    var c, p, u;
                    return [r.time_index_4 ? (n(), a("div", h$, [t("div", f$, [(n(!0), a(R, null, A((c = r.time_index_4) == null ? void 0 : c.result.split(""), b => (n(), a("div", null, e(b), 1))), 256))]), t("div", {
                        class: G(["result_sum", d(l)((p = r.time_index_4) == null ? void 0 : p.resultSum)])
                    }, e((u = r.time_index_4) == null ? void 0 : u.resultSum), 3)])) : $("v-if", !0)]
                }),
                time_index_5: M(({
                    item: r
                }) => {
                    var c, p, u;
                    return [r.time_index_5 ? (n(), a("div", y$, [t("div", $$, [(n(!0), a(R, null, A((c = r.time_index_5) == null ? void 0 : c.result.split(""), b => (n(), a("div", null, e(b), 1))), 256))]), t("div", {
                        class: G(["result_sum", d(l)((p = r.time_index_5) == null ? void 0 : p.resultSum)])
                    }, e((u = r.time_index_5) == null ? void 0 : u.resultSum), 3)])) : $("v-if", !0)]
                }),
                time_index_6: M(({
                    item: r
                }) => {
                    var c, p, u;
                    return [r.time_index_6 ? (n(), a("div", w$, [t("div", T$, [(n(!0), a(R, null, A((c = r.time_index_6) == null ? void 0 : c.result.split(""), b => (n(), a("div", null, e(b), 1))), 256))]), t("div", {
                        class: G(["result_sum", d(l)((p = r.time_index_6) == null ? void 0 : p.resultSum)])
                    }, e((u = r.time_index_6) == null ? void 0 : u.resultSum), 3)])) : $("v-if", !0)]
                }),
                _: 1
            }, 8, ["column-options", "data-source"])]))
        }
    });
const L$ = F(C$, [
        ["__scopeId", "data-v-177bff59"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/BinguoCount/components/BinguoLast7Day.vue"]
    ]),
    N$ = {
        class: "binguo_count"
    },
    z$ = V({
        __name: "index",
        setup(s) {
            const {
                store: i,
                getTrendstatistics: o,
                getLotteryRankList: l,
                getLotteryResult7Day: g,
                getBingo18Last50Result: m
            } = Ze(), r = dt(), c = () => {
                r.back()
            };
            return Mt(() => i.currentTabIndex, p => {
                switch (p) {
                    case 0:
                        o();
                        break;
                    case 1:
                        m();
                        break;
                    case 2:
                        g();
                        break;
                    case 3:
                        l();
                        break
                }
            }, {
                immediate: !0
            }), (p, u) => {
                const b = H("NavBar");
                return n(), a("div", N$, [L(b, {
                    "left-arrow": "",
                    onClickLeft: c,
                    backgroundColor: "#0a4529",
                    title: `${p.$t("binguoCount")}`
                }, null, 8, ["title"]), L(H0), d(i).currentTabIndex === 0 ? (n(), it($2, {
                    key: 0
                })) : $("v-if", !0), d(i).currentTabIndex === 1 ? (n(), it(W2, {
                    key: 1
                })) : $("v-if", !0), d(i).currentTabIndex === 2 ? (n(), it(L$, {
                    key: 2
                })) : $("v-if", !0), d(i).currentTabIndex === 3 ? (n(), it(l$, {
                    key: 3
                })) : $("v-if", !0)])
            }
        }
    });
const I$ = F(z$, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/BinguoCount/index.vue"]
    ]),
    TG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: I$
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Oi = s => ($t("data-v-8073d5d0"), s = s(), wt(), s),
    S$ = {
        class: "body-container"
    },
    x$ = {
        class: "MyGameRecordList__C"
    },
    R$ = ["onClick"],
    B$ = {
        class: "MyGameRecordList__C_left"
    },
    G$ = {
        class: "MyGameRecordList__C-item-m"
    },
    A$ = {
        class: "MyGameRecordList__C-item-m-top"
    },
    M$ = {
        class: "MyGameRecordList__C-item-m-bottom"
    },
    P$ = {
        key: 0
    },
    D$ = {
        key: 0,
        class: "MyGameRecordList__C-detail"
    },
    O$ = {
        class: "detail_title"
    },
    E$ = {
        class: "detail_item"
    },
    q$ = {
        class: "item_title"
    },
    j$ = {
        class: "item_result"
    },
    H$ = ["onClick"],
    W$ = Oi(() => t("path", {
        d: "M6.5 6.2158V3.90625C6.5 3.1296 7.1296 2.5 7.90625 2.5H20.0938C20.8704 2.5 21.5 3.1296 21.5 3.90625V16.0938C21.5 16.8704 20.8704 17.5 20.0938 17.5H17.7582",
        stroke: "#87C7AF",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }, null, -1)),
    V$ = Oi(() => t("path", {
        d: "M16.0938 6.5H3.90625C3.1296 6.5 2.5 7.1296 2.5 7.90625V20.0938C2.5 20.8704 3.1296 21.5 3.90625 21.5H16.0938C16.8704 21.5 17.5 20.8704 17.5 20.0938V7.90625C17.5 7.1296 16.8704 6.5 16.0938 6.5Z",
        fill: "#87C7AF",
        stroke: "#87C7AF",
        "stroke-width": "2",
        "stroke-linejoin": "round"
    }, null, -1)),
    F$ = [W$, V$],
    U$ = {
        class: "detail_item"
    },
    K$ = {
        class: "item_title"
    },
    X$ = {
        class: "item_result"
    },
    Q$ = ["onClick"],
    J$ = Oi(() => t("path", {
        d: "M6.5 6.2158V3.90625C6.5 3.1296 7.1296 2.5 7.90625 2.5H20.0938C20.8704 2.5 21.5 3.1296 21.5 3.90625V16.0938C21.5 16.8704 20.8704 17.5 20.0938 17.5H17.7582",
        stroke: "#87C7AF",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }, null, -1)),
    Y$ = Oi(() => t("path", {
        d: "M16.0938 6.5H3.90625C3.1296 6.5 2.5 7.1296 2.5 7.90625V20.0938C2.5 20.8704 3.1296 21.5 3.90625 21.5H16.0938C16.8704 21.5 17.5 20.8704 17.5 20.0938V7.90625C17.5 7.1296 16.8704 6.5 16.0938 6.5Z",
        fill: "#87C7AF",
        stroke: "#87C7AF",
        "stroke-width": "2",
        "stroke-linejoin": "round"
    }, null, -1)),
    Z$ = [J$, Y$],
    t3 = {
        class: "detail_item"
    },
    e3 = {
        class: "item_title"
    },
    i3 = {
        class: "item_result"
    },
    n3 = {
        class: "detail_item"
    },
    a3 = {
        class: "item_title"
    },
    o3 = {
        class: "item_result"
    },
    s3 = {
        class: "detail_item"
    },
    l3 = {
        class: "item_title"
    },
    c3 = {
        class: "item_result"
    },
    r3 = {
        class: "detail_item"
    },
    u3 = {
        class: "item_title"
    },
    d3 = {
        class: "item_result"
    },
    p3 = {
        class: "detail_item"
    },
    g3 = {
        class: "item_title"
    },
    b3 = {
        class: "item_result"
    },
    m3 = {
        class: "detail_item"
    },
    _3 = {
        class: "item_title"
    },
    v3 = {
        class: "item_result"
    },
    k3 = {
        class: "draw_result"
    },
    h3 = {
        class: "detail_item"
    },
    f3 = {
        class: "item_title"
    },
    y3 = {
        key: 1,
        class: "item_result"
    },
    $3 = {
        class: "detail_item"
    },
    w3 = {
        class: "item_title"
    },
    T3 = {
        class: "detail_item"
    },
    C3 = {
        class: "item_title"
    },
    L3 = {
        class: "item_result"
    },
    N3 = {
        class: "detail_item"
    },
    z3 = {
        class: "item_title"
    },
    I3 = {
        class: "item_result"
    },
    S3 = V({
        __name: "RecordList",
        props: {
            mayrecord: {
                type: Array,
                required: !0
            }
        },
        setup(s) {
            const {
                t: i
            } = kt(), {
                filterGameType: o
            } = Ze(), l = k(-1), g = c => {
                l.value == c ? l.value = -1 : l.value = c
            }, m = (c, p) => {
                if (p == 1) switch (c) {
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
                } else switch (c) {
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
            }, r = c => {
                switch (c) {
                    case "Big":
                        return i("big");
                    case "Drawn":
                        return i("binguoHe");
                    case "Small":
                        return i("small");
                    default:
                        return c
                }
            };
            return (c, p) => (n(), a("div", S$, [t("div", x$, [(n(!0), a(R, null, A(c.mayrecord, (u, b) => (n(), a(R, {
                key: b
            }, [t("div", {
                class: "MyGameRecordList__C-item",
                onClick: _ => g(b)
            }, [t("div", {
                class: G(["MyGameRecordList__C-item-l", d(o)(Number(u.gameType), u.selectType).className])
            }, e(r(u.selectType)), 3), t("div", B$, [t("div", G$, [t("div", A$, e(u.issueNumber), 1), t("div", M$, e(u.addTime), 1)]), t("div", {
                class: G(["MyGameRecordList__C-item-r", m(u.state, 2)])
            }, [t("div", {
                class: G(m(u.state, 2))
            }, e(m(u.state, 1)), 3), u.premium ? (n(), a("span", P$, e(d(Lt)(u.profitAmount)), 1)) : $("v-if", !0)], 2)])], 8, R$), b == l.value ? (n(), a("div", D$, [t("div", O$, e(c.$t("details")), 1), t("div", E$, [t("div", q$, e(c.$t("orderNoMay")), 1), t("div", j$, [O(e(u.orderNumber) + " ", 1), (n(), a("svg", {
                onClick: _ => d(Ve)(u.orderNumber),
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none"
            }, F$, 8, H$))])]), t("div", U$, [t("div", K$, e(c.$t("issueMay")), 1), t("div", X$, [O(e(u.issueNumber) + " ", 1), (n(), a("svg", {
                onClick: _ => d(Ve)(u.issueNumber),
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none"
            }, Z$, 8, Q$))])]), t("div", t3, [t("div", e3, e(c.$t("gamePlay")), 1), t("div", i3, e(d(o)(Number(u.gameType), u.selectType).playerName), 1)]), t("div", n3, [t("div", a3, e(c.$t("amountMay")), 1), t("div", o3, e(u.amount), 1)]), t("div", s3, [t("div", l3, e(c.$t("multiple")), 1), t("div", c3, e(u.figure), 1)]), t("div", r3, [t("div", u3, e(c.$t("afterTaxAmount")), 1), t("div", d3, e(u.realAmount), 1)]), t("div", p3, [t("div", g3, e(c.$t("tax")), 1), t("div", b3, e(u.serviceCharge || "-"), 1)]), t("div", m3, [t("div", _3, e(c.$t("winTips3")), 1), t("div", v3, [t("div", {
                class: G(["draw_num", `${u.sumCount?d(o)(Number(u.gameType),u.selectType).className:""}`])
            }, e(u.sumCount || "-"), 3), u.premium ? (n(!0), a(R, {
                key: 0
            }, A(u.premium.split(""), _ => (n(), a("div", k3, e(_), 1))), 256)) : $("v-if", !0)])]), t("div", h3, [t("div", f3, e(c.$t("betting")), 1), u.gameType === "2" || u.gameType === "1" ? (n(), a("div", {
                key: 0,
                class: G(["item_result item_bet", `${d(o)(Number(u.gameType),u.selectType).className}`])
            }, e(u.selectType), 3)) : (n(), a("div", y3, [(n(!0), a(R, null, A(u.selectType.split(""), _ => (n(), a("div", {
                class: G(["item_result item_bet item_alike", `${d(o)(Number(u.gameType),u.selectType).className}`])
            }, e(_), 3))), 256))]))]), t("div", $3, [t("div", w3, e(c.$t("statusMay")), 1), t("div", {
                class: G(["item_result", m(u.state, 2)])
            }, e(m(u.state, 1)), 3)]), t("div", T3, [t("div", C3, e(c.$t("winOrLose")), 1), t("div", L3, e(u.profitAmount ? d(Lt)(u.profitAmount) : "-"), 1)]), t("div", N3, [t("div", z3, e(c.$t("createTime")), 1), t("div", I3, e(u.addTime), 1)])])) : $("v-if", !0)], 64))), 128))])]))
        }
    });
const x3 = F(S3, [
        ["__scopeId", "data-v-8073d5d0"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/Bingo/RecordList.vue"]
    ]),
    R3 = {
        class: "record-container"
    },
    B3 = {
        class: "WinTrx__C-head-more"
    },
    G3 = V({
        __name: "index",
        setup(s) {
            const i = dt(),
                o = () => {
                    i.back()
                },
                l = k([]),
                g = k({
                    pageSize: 20
                }),
                m = () => {},
                r = () => {},
                c = k("");
            return (p, u) => {
                const b = H("NavBar");
                return n(), a("div", R3, [L(b, {
                    "left-arrow": "",
                    onClickLeft: o,
                    "background-color": "#0a4529",
                    title: p.$t("xosoTxt73")
                }, {
                    right: M(() => [t("div", B3, [t("div", {
                        onClick: u[0] || (u[0] = _ => m())
                    }), t("div", {
                        class: G({
                            disableVoice: c.value == "2"
                        }),
                        onClick: r
                    }, null, 2)])]),
                    _: 1
                }, 8, ["title"]), L(ua, {
                    list: l.value,
                    "onUpdate:list": u[1] || (u[1] = _ => l.value = _),
                    pageQuery: g.value,
                    "onUpdate:pageQuery": u[2] || (u[2] = _ => g.value = _),
                    api: d(_d),
                    distance: 100,
                    ref: "listRef",
                    isAutoLoad: !0
                }, {
                    content: M(() => [L(x3, {
                        mayrecord: l.value
                    }, null, 8, ["mayrecord"])]),
                    _: 1
                }, 8, ["list", "pageQuery", "api"])])
            }
        }
    });
const A3 = F(G3, [
        ["__scopeId", "data-v-5e0daa42"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/BinguoRecord/index.vue"]
    ]),
    CG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: A3
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    M3 = s => ($t("data-v-6c7a1db6"), s = s(), wt(), s),
    P3 = {
        class: "Betting__Popup"
    },
    D3 = {
        class: "Betting__Popup-head"
    },
    O3 = {
        class: "Betting__Popup-head-title"
    },
    E3 = {
        class: "Betting__Popup-head-selectName"
    },
    q3 = {
        class: "Betting__Popup-body"
    },
    j3 = {
        class: "Betting__Popup-body-line"
    },
    H3 = {
        class: "Betting__Popup-body-line-list"
    },
    W3 = ["onClick"],
    V3 = {
        class: "Betting__Popup-body-line"
    },
    F3 = {
        class: "Betting__Popup-body-line-btnL"
    },
    U3 = {
        class: "Betting__Popup-body-line"
    },
    K3 = M3(() => t("div", null, null, -1)),
    X3 = {
        class: "Betting__Popup-body-line-list"
    },
    Q3 = ["onClick"],
    J3 = {
        class: "Betting__Popup-body-line"
    },
    Y3 = {
        class: "Betting__Popup-foot"
    },
    Z3 = {
        class: "Betting__Popup-foot-s bgcolor"
    },
    tw = {
        class: "Betting__Popup-PreSale"
    },
    ew = {
        class: "Betting__Popup-PreSale-head"
    },
    iw = {
        class: "Betting__Popup-PreSale-body"
    },
    nw = {
        class: "Betting__Popup-PreSale-foot"
    },
    aw = V({
        __name: "BettingPopup",
        props: {
            selectInfo: {
                type: Object,
                default: () => ({})
            },
            bettingPopupShow: {
                type: Boolean,
                default: k(!1)
            },
            actionItem: {
                type: Object,
                default: () => ({})
            }
        },
        emits: ["update:bettingPopupShow", "update:selectInfo", "clearBetting", "submitBetting"],
        setup(s, {
            emit: i
        }) {
            const o = s,
                {
                    t: l
                } = kt(),
                g = k(!1),
                m = k(!0),
                r = Y(() => o.actionItem.scopeList || []),
                c = k([1, 5, 10, 20, 50, 100]),
                p = Y({
                    get() {
                        return o.bettingPopupShow || !1
                    },
                    set(T) {
                        i("update:bettingPopupShow", T)
                    }
                }),
                u = T => {
                    switch (T) {
                        case 1:
                            o.selectInfo.count > 1 && (o.selectInfo.count--, h());
                            break;
                        case 2:
                            o.selectInfo.count++, h();
                            break
                    }
                },
                b = T => {
                    T > 0 && (o.selectInfo.count = parseInt(T), h())
                },
                _ = T => {
                    o.selectInfo.count = T, h()
                },
                w = T => {
                    o.selectInfo.coin = T, h()
                },
                f = () => {
                    g.value = !1, m.value = !0
                },
                C = () => {
                    m.value ? i("submitBetting") : ve(l("agreePresaleRules"))
                },
                h = () => {
                    o.selectInfo.allCoin = o.selectInfo.coin * o.selectInfo.count
                };
            return (T, z) => {
                const y = H("van-field"),
                    v = H("van-popup"),
                    N = Ot("throttle-click");
                return n(), a(R, null, [$(" 投注内容 begin "), L(v, {
                    show: p.value,
                    "onUpdate:show": z[6] || (z[6] = S => p.value = S),
                    position: "bottom",
                    round: !0,
                    "close-on-click-overlay": !1
                }, {
                    default: M(() => [t("div", P3, [t("div", D3, [t("div", O3, e(s.actionItem.lotteryName), 1), t("div", E3, [t("span", null, e(d(l)("choose")), 1), t("span", null, e(s.selectInfo.selectCon), 1)])]), t("div", q3, [t("div", j3, [O(e(d(l)("amount")) + " ", 1), t("div", H3, [(n(!0), a(R, null, A(r.value, (S, I) => (n(), a("div", {
                        key: I,
                        class: G(["Betting__Popup-body-line-item", {
                            bgcolor: s.selectInfo.coin == S
                        }]),
                        onClick: x => w(S)
                    }, e(S), 11, W3))), 128))])]), t("div", V3, [O(e(d(l)("numbers")) + " ", 1), t("div", F3, [t("div", {
                        class: G(["Betting__Popup-btn", {
                            bgcolor: s.selectInfo.count > 0
                        }]),
                        onClick: z[0] || (z[0] = S => u(1))
                    }, "-", 2), L(y, {
                        class: "Betting__Popup-input",
                        modelValue: s.selectInfo.count,
                        "onUpdate:modelValue": z[1] || (z[1] = S => s.selectInfo.count = S),
                        type: "digit",
                        maxlength: 4,
                        onInput: b
                    }, null, 8, ["modelValue"]), t("div", {
                        class: "Betting__Popup-btn bgcolor",
                        onClick: z[2] || (z[2] = S => u(2))
                    }, "+")])]), t("div", U3, [K3, t("div", X3, [(n(!0), a(R, null, A(c.value, (S, I) => (n(), a("div", {
                        key: I,
                        class: G(["Betting__Popup-body-line-item", {
                            bgcolor: s.selectInfo.count == S
                        }]),
                        onClick: x => _(S)
                    }, " X" + e(S), 11, Q3))), 128))])]), t("div", J3, [t("span", {
                        class: G(["Betting__Popup-agree", {
                            active: m.value
                        }]),
                        onClick: z[3] || (z[3] = S => m.value = !m.value)
                    }, e(d(l)("agree")), 3), t("span", {
                        onClick: z[4] || (z[4] = S => g.value = !0),
                        class: "Betting__Popup-preSaleShow"
                    }, e(d(l)("presaleRules")), 1)])]), t("div", Y3, [t("div", {
                        class: "Betting__Popup-foot-c",
                        onClick: z[5] || (z[5] = S => i("clearBetting"))
                    }, e(d(l)("cancel")), 1), vt((n(), a("div", Z3, [O(e(d(l)("totalAmount")) + " " + e(d(Lt)(s.selectInfo.count * s.selectInfo.coin || 0)), 1)])), [
                        [N, {
                            handler: C,
                            wait: 2e3
                        }]
                    ])])])]),
                    _: 1
                }, 8, ["show"]), $(" 规则弹层 begin"), L(v, {
                    show: g.value,
                    "onUpdate:show": z[7] || (z[7] = S => g.value = S),
                    "close-on-click-overlay": !1,
                    round: ""
                }, {
                    default: M(() => [t("div", tw, [t("div", ew, e(d(l)("presaleRules")), 1), t("div", iw, e(T.$t("betPopTXT")), 1), t("div", nw, [t("div", {
                        class: "Betting__Popup-PreSale-foot-btn",
                        onClick: f
                    }, e(d(l)("iKonw")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const ow = F(aw, [
        ["__scopeId", "data-v-6c7a1db6"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/ChangLong/BettingPopup.vue"]
    ]),
    sw = {
        class: "changLong__C"
    },
    lw = {
        class: "changLong__C-bet"
    },
    cw = {
        class: "changLong__C-bet-l"
    },
    rw = {
        class: "num"
    },
    uw = {
        class: "time"
    },
    dw = {
        class: "other"
    },
    pw = {
        class: "remark"
    },
    gw = {
        class: "issue"
    },
    bw = ["onClick"],
    mw = ["onClick"],
    _w = ["onClick"],
    vw = ["onClick"],
    kw = ["onClick"],
    hw = ["onClick"],
    fw = ["onClick"],
    yw = ["onClick"],
    $w = ["onClick"],
    ww = ["onClick"],
    Tw = ["onClick"],
    ia = 5,
    Cw = V({
        __name: "Bet",
        setup(s) {
            const i = Ri.global.t,
                o = k(!1),
                l = k({}),
                g = k({
                    coin: 0,
                    count: 1,
                    allCoin: 0,
                    gametype: 0,
                    typeid: 1,
                    issuenumber: "2020",
                    selecttype: 1,
                    selectCon: ""
                }),
                m = Eo([]);
            let r = null;
            const c = (y, v, N, S, I) => {
                    if (m.value[v].action = N, l.value = y, g.value.selectCon = S, g.value.coin = y.scopeList[0], g.value.typeid = y.type, g.value.gametype = y.bettingGameType, y.type > 4 && y.type != 30) I == "big" ? g.value.selecttype = "H" : I == "small" ? g.value.selecttype = "L" : g.value.selecttype = I;
                    else {
                        const x = {
                            red: 10,
                            green: 11,
                            violet: 12,
                            big: 13,
                            small: 14
                        };
                        g.value.selecttype = x[I]
                    }
                    g.value.issuenumber = y.issueNumber, o.value = !0
                },
                p = k(!1),
                u = async () => {
                    if (r && clearInterval(r), p.value) return;
                    p.value = !0;
                    const y = await at(ys({
                        gameType: -1
                    }));
                    if (p.value = !1, !y) return;
                    const v = y.data.serviceTime;
                    m.value = y.data.list.map(N => {
                        let S = new Date(v).getTime(),
                            I = new Date(N.startTime).getTime(),
                            x = (S - I) / 1e3;
                        return x > N.intervalM * 60 && (x = N.intervalM * 60), N.scopeList = N.scope.split("|").map(B => Number(B)), N.passTime = Math.floor(N.intervalM * 60 - x), N.time1 = 0, N.time2 = Math.floor(N.passTime / 60), N.time3 = Math.floor(N.passTime % 60 / 10), N.time4 = Math.floor(N.passTime % 10), N
                    }), r = setInterval(function() {
                        b()
                    }, 1e3)
                },
                b = () => {
                    const y = m.value.length;
                    let v = !1;
                    for (let N = 0; N < y; N++) {
                        let S = m.value[N];
                        if (S.passTime < ia && S.issueNumber == l.value.issueNumber && _(), S.passTime > 0) S.time2 = Math.floor(S.passTime / 60), S.time3 = Math.floor(S.passTime % 60 / 10), S.time4 = Math.floor(S.passTime % 10), S.passTime--;
                        else {
                            v = !1, clearInterval(r), u();
                            break
                        }
                        v = S.time3 + S.time4 == 0
                    }
                    qo(m), v && (clearInterval(r), u())
                },
                _ = () => {
                    o.value = !1;
                    let y = m.value.findIndex(v => JSON.stringify(v) == JSON.stringify(l.value));
                    y != -1 && (m.value[y].action = 0), g.value.coin = l.value.scopeList ? l.value.scopeList[0] : 0, g.value.count = 1, l.value = {}
                },
                w = () => {
                    const {
                        typeid: y = 0
                    } = g.value;
                    y && (y < 5 || y == 30 ? C() : y < 9 ? T() : h())
                },
                f = y => y < 5 || y == 30 ? "winGo" : y < 9 ? "Fd" : "k3",
                C = async () => {
                    const y = await at(ha({
                        typeId: g.value.typeid,
                        issuenumber: g.value.issuenumber,
                        amount: g.value.coin,
                        betCount: Number(g.value.count),
                        gameType: g.value.gametype,
                        selectType: g.value.selecttype
                    }));
                    (y == null ? void 0 : y.code) === 0 && (ve(i("code" + y.msgCode)), _())
                },
                h = async () => {
                    let {
                        coin: y,
                        count: v,
                        issuenumber: N,
                        gametype: S,
                        selecttype: I,
                        typeid: x
                    } = g.value;
                    const B = await at(fa({
                        amount: y,
                        betCount: Number(v),
                        gameType: S.toString(),
                        selectType: I,
                        typeId: x,
                        issuenumber: N
                    }));
                    (B == null ? void 0 : B.code) === 0 && (ve(i("code" + B.msgCode)), _())
                },
                T = async () => {
                    let {
                        coin: y,
                        count: v,
                        issuenumber: N,
                        gametype: S,
                        selecttype: I,
                        typeid: x
                    } = g.value;
                    const B = {
                            issuenumber: N,
                            typeId: x,
                            amount: y,
                            betCount: Number(v),
                            gameType: S,
                            selectType: I
                        },
                        D = await at(ga(B));
                    (D == null ? void 0 : D.code) === 0 && (ve(i("code" + D.msgCode)), _())
                },
                z = y => y == "H" ? "B" : y.trim() == "L" ? "S" : y;
            return Nt(() => {
                u()
            }), Fe(() => {
                clearInterval(r)
            }), Mt(() => Be().visibility, y => {
                u()
            }), (y, v) => (n(), a(R, null, [t("div", sw, [(n(!0), a(R, null, A(m.value, (N, S) => (n(), a("div", lw, [t("div", cw, [t("div", {
                class: G(["titel", [f(N.type)]])
            }, e(N.lotteryName), 3), t("div", rw, [O(e(N.issueNumber) + " ", 1), t("span", uw, e(`${N.time1}${N.time2}:${N.time3}${N.time4}`), 1)]), t("div", dw, [t("div", pw, e(N.remark), 1), t("div", {
                class: G(["gameResult", "bg-" + N.gameResult])
            }, e(z(N.gameResult)), 3), t("div", gw, e(N.issue) + e(y.$t("betIssues")), 1)])]), t("div", {
                class: G(["changLong__C-bet-r", {
                    disable: N.passTime < ia
                }])
            }, [N.gameType == 0 ? (n(), a(R, {
                key: 0
            }, [t("div", {
                class: G({
                    active: N.action == 1
                }),
                onClick: I => c(N, S, 1, y.$t("betBig"), "big")
            }, e(y.$t("betBig")), 11, bw), t("div", {
                class: G({
                    active: N.action == 2
                }),
                onClick: I => c(N, S, 2, y.$t("betSmall"), "small")
            }, e(y.$t("betSmall")), 11, mw)], 64)) : $("v-if", !0), N.gameType == 1 ? (n(), a(R, {
                key: 1
            }, [t("div", {
                class: G({
                    active: N.action == 1
                }),
                onClick: I => c(N, S, 1, y.$t("betRed"), "red")
            }, e(y.$t("betRed")), 11, _w), t("div", {
                class: G({
                    active: N.action == 2
                }),
                onClick: I => c(N, S, 2, y.$t("betGreen"), "green")
            }, e(y.$t("betGreen")), 11, vw), t("div", {
                class: G({
                    active: N.action == 3
                }),
                onClick: I => c(N, S, 3, y.$t("betPurple"), "violet")
            }, e(y.$t("betPurple")), 11, kw)], 64)) : $("v-if", !0), N.gameType == 2 ? (n(), a(R, {
                key: 2
            }, [t("div", {
                class: G({
                    active: N.action == 1
                }),
                onClick: I => c(N, S, 1, y.$t("betOdd"), "O")
            }, e(y.$t("betOdd")), 11, hw), t("div", {
                class: G({
                    active: N.action == 2
                }),
                onClick: I => c(N, S, 2, y.$t("betEven"), "E")
            }, e(y.$t("betEven")), 11, fw)], 64)) : $("v-if", !0), N.gameType == 3 ? (n(), a(R, {
                key: 3
            }, [t("div", {
                class: G({
                    active: N.action == 1
                }),
                onClick: I => c(N, S, 1, y.$t("betWithSingle"), "O")
            }, e(y.$t("betWithSingle")), 11, yw), t("div", {
                class: G({
                    active: N.action == 2
                }),
                onClick: I => c(N, S, 2, y.$t("betWithDouble"), "E")
            }, e(y.$t("betWithDouble")), 11, $w)], 64)) : $("v-if", !0), N.gameType == 4 ? (n(), a(R, {
                key: 4
            }, [t("div", {
                class: G({
                    active: N.action == 1
                }),
                onClick: I => c(N, S, 1, y.$t("betWithBig"), "H")
            }, e(y.$t("betWithBig")), 11, ww), t("div", {
                class: G({
                    active: N.action == 2
                }),
                onClick: I => c(N, S, 2, y.$t("betWithSmall"), "L")
            }, e(y.$t("betWithSmall")), 11, Tw)], 64)) : $("v-if", !0)], 2)]))), 256))]), L(ow, {
                bettingPopupShow: o.value,
                selectInfo: g.value,
                actionItem: l.value,
                onClearBetting: _,
                onSubmitBetting: w
            }, null, 8, ["bettingPopupShow", "selectInfo", "actionItem"])], 64))
        }
    });
const Lw = F(Cw, [
        ["__scopeId", "data-v-91d808d9"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/ChangLong/Bet.vue"]
    ]),
    Nw = {
        class: "MyGameRecord__C"
    },
    zw = {
        key: 0,
        class: "MyGameRecord__C-head"
    },
    Iw = {
        class: "MyGameRecord__C-body"
    },
    Sw = {
        key: 1,
        class: "MyGameRecord__C-body-empty"
    },
    xw = {
        key: 1,
        class: "MyGameRecord__C-foot"
    },
    Rw = {
        class: "MyGameRecord__C-foot-page"
    },
    Bw = V({
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
        setup(s, {
            expose: i
        }) {
            const o = s,
                l = dt(),
                g = k(4),
                m = k(20),
                r = k(1),
                c = k([]),
                p = w => {
                    l.push({
                        name: w
                    })
                },
                u = () => {
                    r.value--, _()
                },
                b = () => {
                    r.value++, _()
                },
                _ = async (w = !1) => {
                    if (o.typeid == null) return;
                    w && (r.value = 1);
                    const [f, C] = await ee(o.ApiFun({
                        pageSize: m.value,
                        pageNo: r.value,
                        typeId: o.typeid
                    }));
                    C && (c.value = (C == null ? void 0 : C.list) || [], g.value = (C == null ? void 0 : C.totalPage) || 0)
                };
            return i({
                getData: _
            }), ke(() => {
                _()
            }), (w, f) => {
                const C = H("svg-icon"),
                    h = H("van-icon");
                return n(), a("div", Nw, [w.hasHead ? (n(), a("div", zw, [t("div", {
                    class: "MyGameRecord__C-head-moreB",
                    onClick: f[0] || (f[0] = T => p(w.goPathName))
                }, [O(e(w.$t("more")) + " ", 1), L(C, {
                    name: "rightCircle"
                })])])) : $("v-if", !0), t("div", Iw, [c.value.length ? (n(), it(hn, {
                    key: 0,
                    mayrecord: c.value
                }, null, 8, ["mayrecord"])) : (n(), a("div", Sw, [L(pe)]))]), c.value.length ? (n(), a("div", xw, [t("div", {
                    class: G(["MyGameRecord__C-foot-previous", {
                        disabled: r.value <= 1
                    }]),
                    onClick: u
                }, [L(h, {
                    name: "arrow-left",
                    class: "MyGameRecord__C-icon",
                    size: "20"
                })], 2), t("div", Rw, e(r.value) + "/" + e(g.value), 1), t("div", {
                    class: G(["MyGameRecord__C-foot-next", {
                        disabled: r.value >= g.value
                    }]),
                    onClick: b
                }, [L(h, {
                    name: "arrow",
                    class: "MyGameRecord__C-icon",
                    size: "20"
                })], 2)])) : $("v-if", !0)])
            }
        }
    });
const $n = F(Bw, [
        ["__scopeId", "data-v-4b21e13b"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/WinGo/MyGameRecord.vue"]
    ]),
    Gw = {
        class: "MyGameRecord__C"
    },
    Aw = {
        key: 0,
        class: "MyGameRecord__C-head"
    },
    Mw = {
        class: "MyGameRecord__C-body"
    },
    Pw = {
        key: 1,
        class: "MyGameRecord__C-body-empty"
    },
    Dw = {
        key: 1,
        class: "MyGameRecord__C-foot"
    },
    Ow = {
        class: "MyGameRecord__C-foot-page"
    },
    Ew = V({
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
        setup(s, {
            expose: i
        }) {
            const o = s,
                l = dt(),
                g = k(4),
                m = k(20),
                r = k(1),
                c = k([]),
                p = f => {
                    l.push({
                        name: f
                    })
                },
                u = () => {
                    r.value--, _()
                },
                b = () => {
                    r.value++, _()
                },
                _ = async (f = !1) => {
                    if (o.typeid == null) return;
                    f && (r.value = 1);
                    const C = await at(ka({
                            pageSize: m.value,
                            pageNo: r.value,
                            typeId: o.typeid
                        })),
                        h = (C == null ? void 0 : C.data.list) || [];
                    for (let T = 0; h.length > T; T++) {
                        let z = h[T].gameType.split(","),
                            y = h[T].selectType.split(",");
                        for (let v = 0; z.length > v; v++)
                            if (z[v] == "1" || z[v] == "2" || z[v] == "3") h[T].gameType = "1", h[T].oneList = y;
                            else if (z[v] == "5" || z[v] == "6") {
                            let N = [],
                                S = [],
                                I = [];
                            for (let x = 0; y.length > x; x++) {
                                if (y[x] == "|11|" || y[x] == "|22|" || y[x] == "|33|" || y[x] == "|44|" || y[x] == "|55|" || y[x] == "|66|") {
                                    let B = y[x].split("|");
                                    B.pop(), B.shift(), N.push(B.join())
                                }
                                if (y[x] == ":11:" || y[x] == ":22:" || y[x] == ":33:" || y[x] == ":44:" || y[x] == ":55:" || y[x] == ":66:") {
                                    let B = y[x].split(":");
                                    B.pop(), B.shift(), S.push(B.join())
                                }
                                if (y[x] == ":1:" || y[x] == ":2:" || y[x] == ":3:" || y[x] == ":4:" || y[x] == ":5:" || y[x] == ":6:") {
                                    let B = y[x].split(":");
                                    B.pop(), B.shift(), I.push(B.join())
                                }
                            }
                            h[T].gameType = "2", h[T].oneList = N, h[T].towList = w(S, I)
                        } else if (z[v] == "7" || z[v] == "8") {
                            let N = [],
                                S = !1;
                            for (let I = 0; y.length > I; I++) {
                                if (y[I] == "|111|" || y[I] == "|222|" || y[I] == "|333|" || y[I] == "|444|" || y[I] == "|555|" || y[I] == "|666|") {
                                    let x = y[I].split("|");
                                    x.pop(), x.shift(), N.push(x.join())
                                }
                                y[I] == "|AAA|" && (S = !0), h[T].oneList = N, h[T].towList = S, h[T].gameType = "3"
                            }
                        } else if (z[v] == "9" || z[v] == "10" || z[v] == "4") {
                            let N = [],
                                S = !1,
                                I = [];
                            for (let x = 0; y.length > x; x++) {
                                if (y[x] == "|1|" || y[x] == "|2|" || y[x] == "|3|" || y[x] == "|4|" || y[x] == "|5|" || y[x] == "|6|") {
                                    let B = y[x].split("|");
                                    B.pop(), B.shift(), N.push(B.join())
                                }
                                if (y[x] == "|ABC|" && (S = !0), y[x] == ".1." || y[x] == ".2." || y[x] == ".3." || y[x] == ".4." || y[x] == ".5." || y[x] == ".6.") {
                                    let B = y[x].split(".");
                                    B.pop(), B.shift(), I.push(B.join())
                                }
                            }
                            h[T].oneList = N, h[T].towList = S, h[T].threeList = I, h[T].gameType = "4"
                        }
                    }
                    c.value = h || [], g.value = (C == null ? void 0 : C.data.totalPage) || 0
                },
                w = (f, C) => {
                    let h = [];
                    for (var T = 0; f.length > T; T++) {
                        let y = f[T],
                            v = [];
                        for (var z = 0; C.length > z; z++) v.push(C[z]);
                        if (v.length > 0) {
                            let N = v.sort().join(",");
                            h.push(y + "|" + N)
                        }
                    }
                    return h.sort()
                };
            return i({
                getData: _
            }), ke(() => {
                _()
            }), (f, C) => {
                const h = H("svg-icon"),
                    T = H("van-icon");
                return n(), a("div", Gw, [f.hasHead ? (n(), a("div", Aw, [t("div", {
                    class: "MyGameRecord__C-head-moreB",
                    onClick: C[0] || (C[0] = z => p(f.goPathName))
                }, [O(e(f.$t("more")) + " ", 1), L(h, {
                    name: "rightCircle"
                })])])) : $("v-if", !0), t("div", Mw, [c.value.length ? (n(), it(qa, {
                    key: 0,
                    mayrecord: c.value
                }, null, 8, ["mayrecord"])) : (n(), a("div", Pw, [L(pe)]))]), c.value.length ? (n(), a("div", Dw, [t("div", {
                    class: G(["MyGameRecord__C-foot-previous", {
                        disabled: r.value <= 1
                    }]),
                    onClick: u
                }, [L(T, {
                    name: "arrow-left",
                    class: "MyGameRecord__C-icon",
                    size: "20"
                })], 2), t("div", Ow, e(r.value) + "/" + e(g.value), 1), t("div", {
                    class: G(["MyGameRecord__C-foot-next", {
                        disabled: r.value >= g.value
                    }]),
                    onClick: b
                }, [L(T, {
                    name: "arrow",
                    class: "MyGameRecord__C-icon",
                    size: "20"
                })], 2)])) : $("v-if", !0)])
            }
        }
    });
const Ha = F(Ew, [
        ["__scopeId", "data-v-cffd8c9f"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/K3/MyGameRecord.vue"]
    ]),
    qw = {
        class: "BetRecord__C"
    },
    jw = V({
        __name: "BetRecord",
        setup(s) {
            const i = {
                    Win: $n,
                    FD: Ea,
                    K3: Ha
                },
                o = De();
            o.getWinGoData();
            const l = k(),
                g = k(0),
                m = k(0),
                r = o.getWingo,
                c = k([{
                    name: "WinGo",
                    com: "Win"
                }, {
                    name: "5D Lotre",
                    com: "FD"
                }, {
                    name: "K3Lotre",
                    com: "K3"
                }]),
                p = k(["1min", "3min", "5min", "10min"]),
                u = k(1),
                b = () => {
                    g.value === 0 ? u.value = r[m.value].typeID : u.value = g.value * 4 + m.value + 1, Zt(() => {
                        l.value && l.value.getData()
                    })
                };
            return Nt(() => {
                b()
            }), (_, w) => {
                const f = H("van-tab"),
                    C = H("van-tabs");
                return n(), a("div", qw, [L(C, {
                    class: "BetRecord__C-gameTab",
                    active: g.value,
                    "onUpdate:active": w[1] || (w[1] = h => g.value = h),
                    onClick: b
                }, {
                    default: M(() => [(n(!0), a(R, null, A(c.value, (h, T) => (n(), it(f, {
                        key: T,
                        title: h.name
                    }, {
                        default: M(() => [L(C, {
                            class: "BetRecord__C-timeTab",
                            active: m.value,
                            "onUpdate:active": w[0] || (w[0] = z => m.value = z)
                        }, {
                            default: M(() => [h.com == "Win" ? (n(!0), a(R, {
                                key: 0
                            }, A(d(r), (z, y) => (n(), it(f, {
                                key: y,
                                title: z.intervalM >= 1 ? z.intervalM + "min" : z.intervalM * 60 + "sencond"
                            }, null, 8, ["title"]))), 128)) : (n(!0), a(R, {
                                key: 1
                            }, A(p.value, (z, y) => (n(), it(f, {
                                key: y,
                                title: z
                            }, null, 8, ["title"]))), 128))]),
                            _: 2
                        }, 1032, ["active"])]),
                        _: 2
                    }, 1032, ["title"]))), 128))]),
                    _: 1
                }, 8, ["active"]), (n(), it(He(i[c.value[g.value].com]), {
                    ref_key: "RecRef",
                    ref: l,
                    typeid: u.value,
                    "has-head": !1,
                    ApiFun: d(pn),
                    "go-path-name": "0"
                }, null, 8, ["typeid", "ApiFun"]))])
            }
        }
    });
const Hw = F(jw, [
        ["__scopeId", "data-v-7c263a55"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/ChangLong/BetRecord.vue"]
    ]),
    Ww = {
        class: "changLong__C"
    },
    Vw = V({
        __name: "index",
        setup(s) {
            const i = dt(),
                o = k(0);

            function l() {
                i.go(-1)
            }
            return Nt(() => {}), (g, m) => {
                const r = H("NavBar"),
                    c = H("van-tab"),
                    p = H("van-tabs");
                return n(), a("div", Ww, [L(r, {
                    "left-arrow": "",
                    title: g.$t("loongAssistant"),
                    class: "main",
                    onClickLeft: l
                }, null, 8, ["title"]), L(p, {
                    class: "changLong__C-tab",
                    active: o.value,
                    "onUpdate:active": m[0] || (m[0] = u => o.value = u)
                }, {
                    default: M(() => [L(c, {
                        title: g.$t("latestLoong")
                    }, null, 8, ["title"]), L(c, {
                        title: g.$t("myBet")
                    }, null, 8, ["title"])]),
                    _: 1
                }, 8, ["active"]), o.value == 0 ? (n(), it(Lw, {
                    key: 0
                })) : (n(), it(Hw, {
                    key: 1
                }))])
            }
        }
    });
const Fw = F(Vw, [
        ["__scopeId", "data-v-6aad721b"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/ChangLong/index.vue"]
    ]),
    LG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Fw
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Wa = s => ($t("data-v-75b35bf5"), s = s(), wt(), s),
    Uw = {
        class: "K3TL__C"
    },
    Kw = {
        class: "K3TL__C-l1"
    },
    Xw = {
        class: "left"
    },
    Qw = Wa(() => t("svg", {
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
    Jw = {
        class: "K3TL__C-l2"
    },
    Yw = {
        class: "K3TL__C-time"
    },
    Zw = Wa(() => t("div", {
        notime: ""
    }, ":", -1)),
    t5 = {
        class: "K3TL__C-l3"
    },
    e5 = {
        class: "box"
    },
    i5 = V({
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
        setup(s) {
            const i = s,
                o = Y(() => [...i.premium]),
                l = k(!1),
                g = De(),
                m = () => {
                    l.value = !0, g.getK3Rule(i.currentGame.typeID)
                };
            return (r, c) => (n(), a(R, null, [t("div", Uw, [t("div", Kw, [t("div", Xw, [t("div", null, e(r.$t("k3Number")), 1), t("div", {
                class: "K3TL__C-rule",
                onClick: m
            }, [Qw, O(" " + e(r.$t("winTrxIndicate")), 1)])]), t("div", null, e(r.$t("k3TimeLeftToBuy")), 1)]), t("div", Jw, [t("div", null, e(i.currentInfo.gameNo), 1), t("div", Yw, [t("div", null, e(s.currentInfo.time1), 1), t("div", null, e(s.currentInfo.time2), 1), Zw, t("div", null, e(s.currentInfo.time3), 1), t("div", null, e(s.currentInfo.time4), 1)])]), t("div", t5, [t("div", e5, [(n(!0), a(R, null, A(o.value, (p, u) => (n(), a("div", {
                key: u,
                class: G(["num" + p])
            }, null, 2))), 128))])])]), $(" 规则弹层 begin"), L(Ai, {
                howPlayShow: l.value,
                gamePresentation: s.currentGame.gamePresentation,
                onClose: c[0] || (c[0] = p => l.value = !1)
            }, null, 8, ["howPlayShow", "gamePresentation"])], 64))
        }
    });
const n5 = F(i5, [
        ["__scopeId", "data-v-75b35bf5"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/K3/TimeLeft.vue"]
    ]),
    a5 = {
        class: "K3B__C-bettingList"
    },
    o5 = ["onClick"],
    s5 = {
        key: 1,
        class: ""
    },
    l5 = {
        key: 2,
        class: "K3B__C-odds-rate"
    },
    c5 = {
        key: 3,
        class: "K3B__C-odds-rate"
    },
    r5 = {
        key: 4,
        class: "K3B__C-odds-rate"
    },
    u5 = V({
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
        setup(s, {
            expose: i,
            emit: o
        }) {
            const l = s,
                {
                    t: g
                } = kt(),
                m = k([{
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
                r = w => {
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
                c = (w, f) => {
                    f < 16 ? m.value[f].chack ? b(w, f) : (l.betnumList.push(w.num), m.value[f].chack = !0) : p(w, f), l.betnumList.length > 0 ? o("showP", !0) : o("showP", !1), o("upAll")
                },
                p = (w, f) => {
                    switch (f) {
                        case 16:
                            u(w, f, 17);
                            break;
                        case 17:
                            u(w, f, 16);
                            break;
                        case 18:
                            u(w, f, 19);
                            break;
                        case 19:
                            u(w, f, 18);
                            break
                    }
                },
                u = (w, f, C) => {
                    m.value[C].chack && b(m.value[C], C), m.value[f].chack ? b(w, f) : (l.betnumList.push(w.num), m.value[f].chack = !0)
                },
                b = (w, f) => {
                    m.value[f].chack = !1;
                    let C = l.betnumList.indexOf(w.num);
                    C > -1 && l.betnumList.splice(C, 1)
                };
            return i({
                clearList: () => {
                    m.value = m.value.map(w => (w.chack = !1, w))
                }
            }), (w, f) => (n(), a("div", a5, [(n(!0), a(R, null, A(m.value, (C, h) => (n(), a("div", {
                class: G("num num" + C.num),
                key: h,
                onClick: T => c(C, h)
            }, [h < 16 ? (n(), a("div", {
                key: 0,
                class: G(h % 2 == 0 ? "ball rball" : "ball gball")
            }, [t("div", {
                class: G("K3B__C-odds-bet num" + C.num)
            }, e(r(C.num)), 3)], 2)) : (n(), a("div", s5, e(r(C.num)), 1)), h < 16 ? (n(), a("div", l5, e(l.OddsList[h] && (l.OddsList[h].playRate || l.OddsList[h].playRate_Original)) + "X ", 1)) : h < 18 ? (n(), a("div", c5, e(l.OddsList[16] && (l.OddsList[16].playRate || l.OddsList[16].playRate_Original)) + "X ", 1)) : (n(), a("div", r5, e(l.OddsList[17] && (l.OddsList[17].playRate || l.OddsList[17].playRate_Original)) + "X ", 1))], 10, o5))), 128))]))
        }
    });
const d5 = F(u5, [
        ["__scopeId", "data-v-ed0c8e79"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/K3/Betting1.vue"]
    ]),
    p5 = {
        class: "K3B__C-betting2"
    },
    g5 = {
        class: "K3B__C-betting2-tip1"
    },
    b5 = {
        key: 0
    },
    m5 = {
        class: "K3B__C-betting2-line1 mb30"
    },
    _5 = ["onClick"],
    v5 = {
        class: "K3B__C-betting2-tip1"
    },
    k5 = {
        key: 0
    },
    h5 = {
        class: "K3B__C-betting2-line2"
    },
    f5 = ["onClick"],
    y5 = {
        class: ""
    },
    $5 = {
        class: "K3B__C-betting2-line3"
    },
    w5 = ["onClick"],
    T5 = {
        class: ""
    },
    C5 = V({
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
        setup(s, {
            emit: i
        }) {
            const o = s,
                l = (r, c, p) => {
                    let u = r.num,
                        b = r.num + "" + r.num;
                    if (p == 1)
                        if (o.numList[c].chackOne) {
                            o.numList[c].chackOne = !1;
                            let _ = o.numTow.indexOf(b);
                            _ > -1 && o.numTow.splice(_, 1)
                        } else {
                            o.numList[c].chackOne = !0, o.numList[c].chackTow = !1;
                            let _ = o.numOne.indexOf(u);
                            _ > -1 && o.numOne.splice(_, 1), o.numTow.push(b)
                        }
                    else if (o.numList[c].chackTow) {
                        o.numList[c].chackTow = !1;
                        let _ = o.numOne.indexOf(u);
                        _ > -1 && o.numOne.splice(_, 1)
                    } else {
                        o.numList[c].chackTow = !0, o.numList[c].chackOne = !1;
                        let _ = o.numTow.indexOf(b);
                        _ > -1 && o.numTow.splice(_, 1), o.numOne.push(u)
                    }
                    i("selectNum"), o.numTow.length > 0 && o.numOne.length > 0 || o.betnumList.length > 0 ? i("showP", !0) : i("showP", !1)
                },
                g = (r, c) => {
                    let p = r.num + "" + r.num;
                    if (o.numList[c].chack) {
                        o.numList[c].chack = !1;
                        let u = o.betnumList.indexOf(p);
                        u > -1 && o.betnumList.splice(u, 1)
                    } else o.betnumList.push(p), o.betnumList.sort(), o.numList[c].chack = !0;
                    o.numChack || o.betnumList.length > 0 || o.numTow.length > 0 && o.numOne.length > 0 ? i("showP", !0) : i("showP", !1)
                },
                m = (r, c) => {
                    i("onQuestion", r, c)
                };
            return Nt(() => {}), (r, c) => {
                const p = H("van-icon");
                return n(), a("div", p5, [t("div", g5, [O(e(r.$t("k3bet2Desc1")), 1), r.OddsList[20] ? (n(), a("span", b5, "(" + e(r.OddsList[20].playRate ? r.OddsList[20].playRate : r.OddsList[20].playRate_Original) + ")", 1)) : $("v-if", !0), L(p, {
                    onClick: c[0] || (c[0] = u => m(r.$t("k3bet2Desc2"), [5, 5])),
                    class: "icon",
                    color: "#FA574A",
                    size: "16",
                    name: "question"
                })]), t("div", m5, [(n(!0), a(R, null, A(r.numList, (u, b) => (n(), a("div", {
                    class: G({
                        active: u.chack
                    }),
                    key: b,
                    onClick: _ => g(u, b)
                }, [t("div", null, e(u.num) + e(u.num), 1)], 10, _5))), 128))]), t("div", v5, [O(e(r.$t("k3bet2Desc3")), 1), r.OddsList[19] ? (n(), a("span", k5, "(" + e(r.OddsList[19].playRate ? r.OddsList[19].playRate : r.OddsList[19].playRate_Original) + ")", 1)) : $("v-if", !0), L(p, {
                    onClick: c[1] || (c[1] = u => m(r.$t("k3bet2Desc4"), [6, 1, 6])),
                    class: "icon",
                    color: "#FA574A",
                    size: "16",
                    name: "question"
                })]), t("div", h5, [(n(!0), a(R, null, A(r.numList, (u, b) => (n(), a("div", {
                    class: G({
                        active: u.chackOne
                    }),
                    key: b,
                    onClick: _ => l(u, b, 1)
                }, [t("div", y5, e(u.num) + e(u.num), 1)], 10, f5))), 128))]), t("div", $5, [(n(!0), a(R, null, A(r.numList, (u, b) => (n(), a("div", {
                    class: G({
                        active: u.chackTow
                    }),
                    key: b,
                    onClick: _ => l(u, b, 2)
                }, [t("div", T5, e(u.num), 1)], 10, w5))), 128))])])
            }
        }
    });
const L5 = F(C5, [
        ["__scopeId", "data-v-5c28a69e"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/K3/Betting2.vue"]
    ]),
    N5 = {
        class: "K3B__C-betting3"
    },
    z5 = {
        class: "K3B__C-betting3-tip1"
    },
    I5 = {
        key: 0
    },
    S5 = {
        class: "K3B__C-betting3-line1 mb30"
    },
    x5 = ["onClick"],
    R5 = {
        class: "K3B__C-betting3-tip1"
    },
    B5 = {
        key: 0
    },
    G5 = V({
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
        setup(s, {
            emit: i
        }) {
            const o = s,
                l = (r, c) => {
                    let p = r.num + "" + r.num + r.num;
                    if (o.numList[c].chack) {
                        o.numList[c].chack = !1;
                        let u = o.betnumList.indexOf(p);
                        u > -1 && o.betnumList.splice(u, 1)
                    } else o.betnumList.push(p), o.betnumList.sort(), o.numList[c].chack = !0;
                    o.numChack || o.betnumList.length > 0 || o.numTow.length > 0 && o.numOne.length > 0 ? i("showP", !0) : i("showP", !1)
                },
                g = () => {
                    i("cNumChack"), Zt(() => {
                        o.numChack || o.betnumList.length > 0 || o.numTow.length > 1 || o.numOne.length > 2 ? i("showP", !0) : i("showP", !1)
                    })
                },
                m = (r, c) => {
                    i("onQuestion", r, c)
                };
            return Nt(() => {}), (r, c) => {
                const p = H("van-icon");
                return n(), a("div", N5, [t("div", z5, [O(e(r.$t("k3bet3Desc1")) + " ", 1), r.OddsList[21] ? (n(), a("span", I5, "(" + e(r.OddsList[21].playRate ? r.OddsList[21].playRate : r.OddsList[21].playRate_Original) + ")", 1)) : $("v-if", !0), L(p, {
                    onClick: c[0] || (c[0] = u => m(r.$t("k3bet3Desc2"), [6, 6, 6])),
                    class: "icon",
                    color: "#FA574A",
                    size: "16",
                    name: "question"
                })]), t("div", S5, [(n(!0), a(R, null, A(r.numList, (u, b) => (n(), a("div", {
                    class: G({
                        active: u.chack
                    }),
                    key: b,
                    onClick: _ => l(u, b)
                }, [t("div", null, e(u.num) + e(u.num) + e(u.num), 1)], 10, x5))), 128))]), t("div", R5, [O(e(r.$t("k3bet3Desc3")) + " ", 1), r.OddsList[22] ? (n(), a("span", B5, "(" + e(r.OddsList[22].playRate ? r.OddsList[22].playRate : r.OddsList[22].playRate_Original) + ")", 1)) : $("v-if", !0), L(p, {
                    onClick: c[1] || (c[1] = u => m(r.$t("k3bet3Desc5"), [7, 7, 7])),
                    class: "icon",
                    color: "#FA574A",
                    size: "16",
                    name: "question"
                })]), t("div", {
                    class: G(["K3B__C-betting3-btn", {
                        active: o.numChack
                    }]),
                    onClick: g
                }, e(r.$t("k3bet3Desc4")), 3)])
            }
        }
    });
const A5 = F(G5, [
        ["__scopeId", "data-v-3deb049d"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/K3/Betting3.vue"]
    ]),
    M5 = {
        class: "K3B__C-betting4"
    },
    P5 = {
        class: "K3B__C-betting4-tip1"
    },
    D5 = {
        key: 0
    },
    O5 = {
        class: "K3B__C-betting4-line1 mb30"
    },
    E5 = ["onClick"],
    q5 = {
        class: "K3B__C-betting4-tip1"
    },
    j5 = {
        key: 0
    },
    H5 = {
        class: "K3B__C-betting4-tip1"
    },
    W5 = {
        key: 0
    },
    V5 = {
        class: "K3B__C-betting4-line1"
    },
    F5 = ["onClick"],
    U5 = V({
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
        setup(s, {
            emit: i
        }) {
            const o = s,
                l = (r, c, p) => {
                    if (p == 1)
                        if (o.numList[c].chackOne) {
                            o.numList[c].chackOne = !1;
                            var u = o.numOne.indexOf(r.num);
                            u > -1 && o.numOne.splice(u, 1)
                        } else o.numList[c].chackOne = !0, o.numOne.push(r.num), o.numOne.sort();
                    else if (o.numList[c].chackTow) {
                        o.numList[c].chackTow = !1;
                        var c = o.numTow.indexOf(r.num);
                        c > -1 && o.numTow.splice(c, 1)
                    } else o.numList[c].chackTow = !0, o.numTow.push(r.num), o.numTow.sort();
                    o.numChack || o.numTow.length > 1 || o.numOne.length > 2 ? i("showP", !0) : i("showP", !1)
                },
                g = (r, c) => {
                    i("onQuestion", r, c)
                },
                m = () => {
                    i("cNumChack"), Zt(() => {
                        o.numChack || o.betnumList.length > 0 || o.numTow.length > 1 || o.numOne.length > 2 ? i("showP", !0) : i("showP", !1)
                    })
                };
            return Nt(() => {}), (r, c) => {
                const p = H("van-icon");
                return n(), a("div", M5, [t("div", P5, [O(e(r.$t("k3bet4Desc1")) + " ", 1), r.OddsList[23] ? (n(), a("span", D5, "(" + e(r.OddsList[23].playRate ? r.OddsList[23].playRate : r.OddsList[23].playRate_Original) + ")", 1)) : $("v-if", !0), L(p, {
                    onClick: c[0] || (c[0] = u => g(r.$t("k3bet4Desc2"), [1, 2, 4])),
                    class: "icon",
                    color: "#FA574A",
                    size: "16",
                    name: "question"
                })]), t("div", O5, [(n(!0), a(R, null, A(r.numList, (u, b) => (n(), a("div", {
                    class: G({
                        active: u.chackOne
                    }),
                    key: b,
                    onClick: _ => l(u, b, 1)
                }, [t("div", null, e(u.num), 1)], 10, E5))), 128))]), t("div", q5, [O(e(r.$t("k3bet4Desc3")) + " ", 1), r.OddsList[24] ? (n(), a("span", j5, "(" + e(r.OddsList[24].playRate ? r.OddsList[24].playRate : r.OddsList[24].playRate_Original) + ")", 1)) : $("v-if", !0), L(p, {
                    onClick: c[1] || (c[1] = u => g(r.$t("k3bet4Desc4"), [1, 2, 3])),
                    class: "icon",
                    color: "#FA574A",
                    size: "16",
                    name: "question"
                })]), t("div", {
                    class: G(["K3B__C-betting4-btn", {
                        active: r.numChack
                    }]),
                    onClick: m
                }, e(r.$t("betPopDesc7")), 3), t("div", H5, [O(e(r.$t("k3bet4Desc5")) + " ", 1), r.OddsList[18] ? (n(), a("span", W5, "(" + e(r.OddsList[18].playRate ? r.OddsList[18].playRate : r.OddsList[18].playRate_Original) + ")", 1)) : $("v-if", !0), L(p, {
                    onClick: c[2] || (c[2] = u => g(r.$t("k3bet4Desc6"), [1, 2])),
                    class: "icon",
                    color: "#FA574A",
                    size: "16",
                    name: "question"
                })]), t("div", V5, [(n(!0), a(R, null, A(r.numList, (u, b) => (n(), a("div", {
                    class: G({
                        active: u.chackTow
                    }),
                    key: b,
                    onClick: _ => l(u, b, 2)
                }, [t("div", null, e(u.num), 1)], 10, F5))), 128))])])
            }
        }
    });
const K5 = F(U5, [
        ["__scopeId", "data-v-bcf2c3f9"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/K3/Betting4.vue"]
    ]),
    X5 = s => ($t("data-v-5f002ad4"), s = s(), wt(), s),
    Q5 = {
        class: "Betting__Popup-body"
    },
    J5 = {
        key: 0,
        class: "Betting__Popup-type1"
    },
    Y5 = {
        class: "title"
    },
    Z5 = {
        class: "list"
    },
    tT = {
        key: 0,
        class: "Betting__Popup-type2"
    },
    eT = {
        class: "title"
    },
    iT = {
        class: "list"
    },
    nT = {
        key: 1,
        class: "Betting__Popup-type2"
    },
    aT = {
        class: "title"
    },
    oT = {
        class: "list"
    },
    sT = ["innerHTML"],
    lT = {
        key: 0,
        class: "Betting__Popup-type2"
    },
    cT = {
        class: "title"
    },
    rT = {
        class: "list"
    },
    uT = {
        key: 1,
        class: "title"
    },
    dT = {
        key: 2,
        class: "Betting__Popup-type2-r"
    },
    pT = {
        key: 0,
        class: "Betting__Popup-type2"
    },
    gT = {
        class: "title"
    },
    bT = {
        class: "list"
    },
    mT = {
        key: 1,
        class: "title"
    },
    _T = {
        key: 2,
        class: "Betting__Popup-type2-r"
    },
    vT = {
        key: 3,
        class: "Betting__Popup-type2"
    },
    kT = {
        class: "title"
    },
    hT = {
        class: "list"
    },
    fT = {
        class: "Betting__Popup-body-line"
    },
    yT = {
        class: "Betting__Popup-body-line-list"
    },
    $T = ["onClick"],
    wT = {
        class: "Betting__Popup-body-line"
    },
    TT = {
        class: "Betting__Popup-body-line-btnL"
    },
    CT = {
        class: "Betting__Popup-body-line"
    },
    LT = X5(() => t("div", null, null, -1)),
    NT = {
        class: "Betting__Popup-body-line-list"
    },
    zT = ["onClick"],
    IT = {
        class: "Betting__Popup-body-line"
    },
    ST = {
        class: "Betting__Popup-foot"
    },
    xT = {
        class: "Betting__Popup-foot-s bgcolor"
    },
    RT = {
        class: "Betting__Popup-PreSale"
    },
    BT = {
        class: "Betting__Popup-PreSale-head"
    },
    GT = {
        class: "Betting__Popup-PreSale-body"
    },
    AT = {
        class: "Betting__Popup-PreSale-foot"
    },
    MT = V({
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
        setup(s, {
            expose: i,
            emit: o
        }) {
            const l = s,
                {
                    t: g
                } = kt(),
                m = k(!1),
                r = k(!0),
                c = Y(() => l.currentGame.betMultiple.split("|"));
            Mt(() => l.bettingPopupShow, () => {
                p.value.coin = Number(l.betTypeList[0]), p.value.count = c.value[0]
            });
            const p = k({
                coin: 0,
                count: c.value[0],
                allCoin: 0,
                gametype: 0,
                typeid: 1,
                issuenumber: "",
                selecttype: "1"
            });
            Mt(() => c, () => {
                p.value.count = c.value[0]
            }, {
                deep: !0,
                immediate: !0
            });
            let u = Y({
                get() {
                    return z(), l.bettingPopupShow || !1
                },
                set(I) {
                    o("update:bettingPopupShow", I)
                }
            });
            const b = I => {
                    switch (I) {
                        case 1:
                            p.value.count > 1 && (p.value.count--, z());
                            break;
                        case 2:
                            p.value.count++, z();
                            break
                    }
                },
                _ = I => {
                    I > 0 && (p.value.count = parseInt(I), z())
                },
                w = I => {
                    p.value.count = I, z()
                },
                f = I => {
                    p.value.coin = I, z()
                },
                C = () => {
                    m.value = !1, r.value = !0
                },
                h = async () => {
                    if (!r.value) {
                        ve(g("agreePresaleRules"));
                        return
                    }
                    let {
                        coin: I,
                        count: x,
                        selecttype: B
                    } = p.value;
                    if (x == 0) return Dt(g("bteNoCount"));
                    let D = null,
                        P = l.betnumList;
                    if (l.actNav === 0 && l.betnumList.length) {
                        D = T(l.betnumList), P.sort();
                        for (let X = 0; P.length > X; X++) P[X] == "A" && (P[X] = "H"), P[X] == "B" && (P[X] = "L"), P[X] == "C" && (P[X] = "O"), P[X] == "D" && (P[X] = "E");
                        B = P.join(",")
                    } else if (l.actNav == 1) {
                        let X = [],
                            lt = "",
                            gt = "";
                        if (P.length > 0) {
                            let rt = [];
                            for (let J = 0; P.length > J; J++) {
                                let Q = "|" + P[J] + "|";
                                rt.push(Q)
                            }
                            gt = rt.join(","), X.push(6)
                        }
                        if (l.numTowList.length > 0) {
                            let rt = [],
                                J = [];
                            for (let Q = 0; l.numOne.length > Q; Q++) {
                                let st = ":" + l.numOne[Q] + ":";
                                rt.push(st), rt = rt.sort()
                            }
                            for (let Q = 0; l.numTow.length > Q; Q++) {
                                let st = ":" + l.numTow[Q] + ":";
                                J.push(st), J = J.sort()
                            }
                            lt = J.join(",") + "," + rt.join(","), X.push(5)
                        }
                        X = X.sort((rt, J) => rt - J), D = X.join(","), lt && (B = lt), gt && (B = gt), lt && gt && (B = lt + "," + gt)
                    } else if (l.actNav == 2) {
                        let X = [],
                            lt = "",
                            gt = "";
                        if (P.length > 0) {
                            let rt = [];
                            for (let J = 0; P.length > J; J++) {
                                let Q = "|" + P[J] + "|";
                                rt.push(Q), rt = rt.sort()
                            }
                            lt = rt.join(","), X.push(7)
                        }
                        l.numChack && (gt = "|AAA|", X.push(8)), X = X.sort((rt, J) => rt - J), D = X.join(","), lt && (B = lt), gt && (B = gt), lt && gt && (B = lt + "," + gt)
                    } else if (l.actNav == 3) {
                        let X = [],
                            lt = "",
                            gt = "",
                            rt = "";
                        if (l.numOne.length > 2) {
                            let J = [];
                            for (let Q = 0; l.numOne.length > Q; Q++) {
                                let st = "|" + l.numOne[Q] + "|";
                                J.push(st), J = J.sort()
                            }
                            lt = J.join(","), X.push(9)
                        }
                        if (l.numChack && (gt = "|ABC|", X.push(10)), l.numTow.length > 1) {
                            let J = [];
                            for (let Q = 0; l.numTow.length > Q; Q++) {
                                let st = "." + l.numTow[Q] + ".";
                                J.push(st), J = J.sort()
                            }
                            rt = J.join(","), X.push(4)
                        }
                        X = X.sort((J, Q) => J - Q), D = X.join(","), rt && (B = rt), lt && (B = lt), gt && (B = gt), lt && gt && (B = lt + "," + gt), rt && lt && (B = rt + "," + lt), rt && gt && (B = rt + "," + gt), rt && lt && gt && (B = rt + "," + lt + "," + gt)
                    }
                    const q = await at(fa({
                        amount: I,
                        betCount: Number(x),
                        gameType: D,
                        selectType: B,
                        typeId: l.currentGame.typeID,
                        issuenumber: l.currentInfo.gameNo
                    }));
                    (q == null ? void 0 : q.code) === 0 ? (ve(g("code" + (q == null ? void 0 : q.msgCode))), o("submitBetting", l.currentInfo.gameNo)) : o("clearBetting")
                },
                T = I => {
                    let x = [];
                    for (let B = 0; I.length > B; B++) {
                        if (I[B] == "3" || I[B] == "4" || I[B] == "5" || I[B] == "6" || I[B] == "7" || I[B] == "8" || I[B] == "9" || I[B] == "10" || I[B] == "11" || I[B] == "12" || I[B] == "13" || I[B] == "14" || I[B] == "15" || I[B] == "16" || I[B] == "17" || I[B] == "18") {
                            x.push(1);
                            continue
                        }
                        if (I[B] == "A" || I[B] == "B") {
                            x.push(2);
                            continue
                        }
                        if (I[B] == "C" || I[B] == "D") {
                            x.push(3);
                            continue
                        }
                    }
                    return x = x.sort(function(B, D) {
                        return B - D
                    }), [...new Set(x)].join(",")
                },
                z = () => {
                    const I = l.betnumList.length + y() + (l.numChack ? 1 : 0) + v(l.numOne, 3) + v(l.numTow);
                    p.value.allCoin = p.value.coin * p.value.count * I
                },
                y = () => {
                    const I = l.numTowList.length;
                    return I && l.numTowList[0].split("|")[1].split(",").length * I
                },
                v = (I, x = 2) => {
                    if (l.actNav != 3) return 0;

                    function B(P) {
                        let q = 1;
                        for (let X = 2; X <= P; X++) q *= X;
                        return q
                    }
                    const D = I.length;
                    return D < x ? 0 : B(D) / (B(x) * B(D - x))
                },
                N = I => {
                    switch (I) {
                        case "A":
                            return g("betBig");
                        case "B":
                            return g("betSmall");
                        case "C":
                            return g("betOdd");
                        case "D":
                            return g("betEven");
                        default:
                            return I
                    }
                },
                S = I => {
                    let x = I.split("|"),
                        B = "";
                    return x.forEach(D => {
                        B += `<div>${D}</div>`
                    }), B
                };
            return i({
                setAllCoin: z
            }), (I, x) => {
                const B = H("van-field"),
                    D = H("van-popup"),
                    P = Ot("throttle-click");
                return n(), a(R, null, [$(" 投注内容 begin "), L(D, {
                    show: d(u),
                    "onUpdate:show": x[6] || (x[6] = q => ce(u) ? u.value = q : u = q),
                    position: "bottom",
                    style: {
                        "box-shadow": "0px -18px 40px rgba(37, 37, 60, 0.26)"
                    },
                    round: !0,
                    overlay: !1,
                    "close-on-click-overlay": !1,
                    "lock-scroll": !1
                }, {
                    default: M(() => [t("div", Q5, [I.actNav === 0 && I.betnumList.length ? (n(), a("div", J5, [t("p", Y5, e(I.$t("betPopDesc1")), 1), t("div", Z5, [(n(!0), a(R, null, A(I.betnumList, (q, X) => (n(), a("div", {
                        class: G(q % 2 === 0 ? "green" : "red num" + q),
                        key: X
                    }, e(N(q)), 3))), 128))])])) : $("v-if", !0), I.actNav === 1 ? (n(), a(R, {
                        key: 1
                    }, [I.betnumList.length ? (n(), a("div", tT, [t("p", eT, e(I.$t("betPopDesc2")), 1), t("div", iT, [(n(!0), a(R, null, A(I.betnumList, (q, X) => (n(), a("div", {
                        key: X,
                        class: "Betting__Popup-type2-d"
                    }, e(N(q)), 1))), 128))])])) : $("v-if", !0), I.numTowList.length ? (n(), a("div", nT, [t("p", aT, e(I.$t("betPopDesc3")), 1), t("div", oT, [(n(!0), a(R, null, A(I.numTowList, (q, X) => (n(), a("div", {
                        key: X,
                        class: "Betting__Popup-type2-o",
                        innerHTML: S(q)
                    }, null, 8, sT))), 128))])])) : $("v-if", !0)], 64)) : $("v-if", !0), I.actNav === 2 ? (n(), a(R, {
                        key: 2
                    }, [I.betnumList.length ? (n(), a("div", lT, [t("p", cT, e(I.$t("betPopDesc4")), 1), t("div", rT, [(n(!0), a(R, null, A(I.betnumList, (q, X) => (n(), a("div", {
                        key: X,
                        class: "Betting__Popup-type2-d"
                    }, e(N(q)), 1))), 128))])])) : $("v-if", !0), I.numChack ? (n(), a("p", uT, e(I.$t("betPopDesc5")), 1)) : $("v-if", !0), I.numChack ? (n(), a("div", dT, e(I.$t("k3bet3Desc4")), 1)) : $("v-if", !0)], 64)) : $("v-if", !0), I.actNav === 3 ? (n(), a(R, {
                        key: 3
                    }, [I.numOne.length > 2 ? (n(), a("div", pT, [t("p", gT, e(I.$t("betPopDesc6")), 1), t("div", bT, [(n(!0), a(R, null, A(I.numOne, (q, X) => (n(), a("div", {
                        key: X,
                        class: "Betting__Popup-type2-d"
                    }, e(N(q)), 1))), 128))])])) : $("v-if", !0), I.numChack ? (n(), a("p", mT, e(I.$t("betPopDesc7")), 1)) : $("v-if", !0), I.numChack ? (n(), a("div", _T, e(I.$t("betPopDesc7")), 1)) : $("v-if", !0), I.numTow.length > 1 ? (n(), a("div", vT, [t("p", kT, e(I.$t("betPopDesc8")), 1), t("div", hT, [(n(!0), a(R, null, A(I.numTow, (q, X) => (n(), a("div", {
                        key: X,
                        class: "Betting__Popup-type2-d"
                    }, e(N(q)), 1))), 128))])])) : $("v-if", !0)], 64)) : $("v-if", !0), t("div", fT, [O(e(d(g)("amount")) + " ", 1), t("div", yT, [(n(!0), a(R, null, A(I.betTypeList, (q, X) => (n(), a("div", {
                        key: X,
                        class: G(["Betting__Popup-body-line-item", {
                            bgcolor: p.value.coin == q
                        }]),
                        onClick: lt => f(q)
                    }, e(q), 11, $T))), 128))])]), t("div", wT, [O(e(d(g)("numbers")) + " ", 1), t("div", TT, [t("div", {
                        class: G(["Betting__Popup-btn", {
                            bgcolor: p.value.count > 0
                        }]),
                        onClick: x[0] || (x[0] = q => b(1))
                    }, "-", 2), L(B, {
                        class: "Betting__Popup-input",
                        modelValue: p.value.count,
                        "onUpdate:modelValue": x[1] || (x[1] = q => p.value.count = q),
                        type: "digit",
                        maxlength: 4,
                        onInput: _
                    }, null, 8, ["modelValue"]), t("div", {
                        class: "Betting__Popup-btn bgcolor",
                        onClick: x[2] || (x[2] = q => b(2))
                    }, "+")])]), t("div", CT, [LT, t("div", NT, [(n(!0), a(R, null, A(c.value, (q, X) => (n(), a("div", {
                        key: X,
                        class: G(["Betting__Popup-body-line-item", {
                            bgcolor: p.value.count == q
                        }]),
                        onClick: lt => w(q)
                    }, " X" + e(q), 11, zT))), 128))])]), t("div", IT, [t("span", {
                        class: G(["Betting__Popup-agree", {
                            active: r.value
                        }]),
                        onClick: x[3] || (x[3] = q => r.value = !r.value)
                    }, e(d(g)("agree")), 3), t("span", {
                        onClick: x[4] || (x[4] = q => m.value = !0),
                        class: "Betting__Popup-preSaleShow"
                    }, e(d(g)("presaleRules")), 1)])]), t("div", ST, [t("div", {
                        class: "Betting__Popup-foot-c",
                        onClick: x[5] || (x[5] = q => o("clearBetting"))
                    }, e(d(g)("cancel")), 1), vt((n(), a("div", xT, [O(e(d(g)("totalAmount")) + " " + e(d(Lt)(p.value.allCoin || 0)), 1)])), [
                        [P, {
                            handler: h,
                            wait: 2e3
                        }]
                    ])])]),
                    _: 1
                }, 8, ["show"]), $(" 规则弹层 begin"), L(D, {
                    show: m.value,
                    "onUpdate:show": x[7] || (x[7] = q => m.value = q),
                    "close-on-click-overlay": !1,
                    round: ""
                }, {
                    default: M(() => [t("div", RT, [t("div", BT, e(d(g)("presaleRules")), 1), t("div", GT, e(I.$t("betPopTXT")), 1), t("div", AT, [t("div", {
                        class: "Betting__Popup-PreSale-foot-btn",
                        onClick: C
                    }, e(d(g)("iKonw")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const PT = F(MT, [
        ["__scopeId", "data-v-5f002ad4"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/K3/BettingPopup.vue"]
    ]),
    DT = {
        class: "K3B__C"
    },
    OT = {
        class: "K3B__C-mark"
    },
    ET = {
        class: "K3B__C-nav"
    },
    qT = ["onClick"],
    jT = {
        class: "qpopup-box"
    },
    HT = {
        class: "qpopup-box-list"
    },
    WT = {
        class: "qpopup-box-txt"
    },
    VT = V({
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
        setup(s, {
            expose: i,
            emit: o
        }) {
            const l = s,
                {
                    t: g
                } = kt(),
                m = {
                    bt1: d5,
                    bt2: L5,
                    bt3: A5,
                    bt4: K5
                },
                r = k(),
                c = k(),
                p = k([]),
                u = k(0),
                b = k([{
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
                _ = k([{
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
                w = k([]),
                f = k([]),
                C = k([]),
                h = k(!1),
                T = k([]),
                z = k(!1),
                y = Y(() => (l.currentInfo.passTime < l.ProhibitBuyTime && N(), l.currentInfo.passTime < l.ProhibitBuyTime)),
                v = Y(() => l.currentGame.scope ? l.currentGame.scope.split("|").map(rt => Number(rt)) : []),
                N = () => {
                    z.value = !1, S()
                },
                S = () => {
                    c.value.clearList && c.value.clearList(), w.value = [], f.value = [], C.value = [], h.value = !1, T.value = [], _.value = [{
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
                I = async () => {
                    const rt = await at($s());
                    p.value = (rt == null ? void 0 : rt.data) || []
                },
                x = () => {
                    r.value.setAllCoin()
                },
                B = rt => {
                    u.value = rt, z.value = !1, S()
                },
                D = () => {
                    let rt = [];
                    for (let J = 0; f.value.length > J; J++) {
                        let Q = f.value[J],
                            st = [];
                        for (let Rt = 0; C.value.length > Rt; Rt++) st.push(C.value[Rt]);
                        if (st.length > 0) {
                            let Rt = st.sort().join(",");
                            rt.push(Q + "|" + Rt)
                        }
                    }
                    T.value = rt.sort()
                },
                P = async rt => {
                    o("betting", rt), z.value = !1, S()
                },
                q = k(!1),
                X = k([]),
                lt = k(""),
                gt = (rt, J) => {
                    lt.value = rt, X.value = J, q.value = !0
                };
            return Nt(() => {
                I()
            }), i({
                bettingPopupShow: z
            }), (rt, J) => {
                const Q = H("van-popup");
                return n(), a("div", DT, [vt(t("div", OT, [t("div", null, e(l.currentInfo.time3 || "0"), 1), t("div", null, e(l.currentInfo.time4 || "0"), 1)], 512), [
                    [Qt, y.value]
                ]), t("div", ET, [(n(!0), a(R, null, A(b.value, (st, Rt) => (n(), a("div", {
                    key: Rt,
                    class: G({
                        active: u.value == Rt
                    }),
                    onClick: At => B(Rt)
                }, e(st.name), 11, qT))), 128))]), (n(), it(He(m[b.value[u.value].comp]), {
                    ref_key: "BetRef",
                    ref: c,
                    OddsList: p.value,
                    numList: _.value,
                    numTow: f.value,
                    numOne: C.value,
                    numChack: h.value,
                    betnumList: w.value,
                    onSelectNum: D,
                    onShowP: J[0] || (J[0] = st => z.value = st),
                    onUpAll: x,
                    onCNumChack: J[1] || (J[1] = st => h.value = !h.value),
                    onOnQuestion: gt
                }, null, 40, ["OddsList", "numList", "numTow", "numOne", "numChack", "betnumList"])), L(PT, {
                    ref_key: "betPopupRef",
                    ref: r,
                    currentInfo: l.currentInfo,
                    bettingPopupShow: z.value,
                    numTow: f.value,
                    numOne: C.value,
                    betTypeList: v.value,
                    numTowList: T.value,
                    currentGame: s.currentGame,
                    actNav: u.value,
                    betnumList: w.value,
                    numChack: h.value,
                    onClearBetting: N,
                    onSubmitBetting: P
                }, null, 8, ["currentInfo", "bettingPopupShow", "numTow", "numOne", "betTypeList", "numTowList", "currentGame", "actNav", "betnumList", "numChack"]), $(" 玩法提示 "), L(Q, {
                    class: "qpopup",
                    show: q.value,
                    "onUpdate:show": J[2] || (J[2] = st => q.value = st),
                    "close-on-click-overlay": !1,
                    closeable: "",
                    "close-icon": "close",
                    "close-icon-position": "bottom-left",
                    round: ""
                }, {
                    default: M(() => [t("div", jT, [t("div", HT, [(n(!0), a(R, null, A(X.value, (st, Rt) => (n(), a("div", {
                        class: G("num num" + st),
                        key: Rt
                    }, null, 2))), 128))]), t("div", WT, e(lt.value), 1)])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const FT = F(VT, [
        ["__scopeId", "data-v-8a4509d7"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/K3/Betting.vue"]
    ]),
    UT = {
        class: "GameRecord__C"
    },
    KT = {
        class: "GameRecord__C-head"
    },
    XT = {
        class: "GameRecord__C-body"
    },
    QT = {
        class: "GameRecord__C-body-premium"
    },
    JT = {
        key: 1,
        class: "GameRecord__C-body-empty"
    },
    YT = {
        key: 0,
        class: "GameRecord__C-foot"
    },
    ZT = {
        class: "GameRecord__C-foot-page"
    },
    tC = V({
        __name: "GameRecord",
        props: {
            typeid: {
                type: Number,
                required: !0
            }
        },
        setup(s, {
            expose: i
        }) {
            const o = s,
                l = k([]),
                g = k(4),
                m = k(10),
                r = k(1),
                c = () => {
                    r.value--, u()
                },
                p = () => {
                    r.value++, u()
                },
                u = async (b = !1) => {
                    if (o.typeid == null) return;
                    b && (r.value = 1);
                    const [_, w] = await ee(mn({
                        pageSize: m.value,
                        pageNo: r.value,
                        typeId: o.typeid
                    }));
                    l.value = w.list || [], g.value = w.totalPage
                };
            return i({
                getData: u
            }), ke(() => {
                u()
            }), (b, _) => {
                const w = H("van-col"),
                    f = H("van-row"),
                    C = H("van-icon");
                return n(), a("div", UT, [t("div", KT, [L(f, null, {
                    default: M(() => [L(w, {
                        span: "10"
                    }, {
                        default: M(() => [O(e(b.$t("gameRecordNum")), 1)]),
                        _: 1
                    }), L(w, {
                        span: "4"
                    }, {
                        default: M(() => [O(e(b.$t("gameRecordTotal")), 1)]),
                        _: 1
                    }), L(w, {
                        span: "10"
                    }, {
                        default: M(() => [O(e(b.$t("gameRecordResult")), 1)]),
                        _: 1
                    })]),
                    _: 1
                })]), t("div", XT, [l.value.length ? (n(!0), a(R, {
                    key: 0
                }, A(l.value, (h, T) => (n(), it(f, {
                    key: T
                }, {
                    default: M(() => [L(w, {
                        span: "8"
                    }, {
                        default: M(() => [O(e(h.issueNumber), 1)]),
                        _: 2
                    }, 1024), L(w, {
                        span: "1"
                    }, {
                        default: M(() => [t("span", null, e(h.sumCount), 1)]),
                        _: 2
                    }, 1024), L(w, {
                        span: "4"
                    }, {
                        default: M(() => [t("span", null, e(h.sumCount > 10 ? b.$t("big") : b.$t("small")), 1)]),
                        _: 2
                    }, 1024), L(w, {
                        span: "4"
                    }, {
                        default: M(() => [t("span", null, e(h.sumCount % 2 ? b.$t("k3Odd") : b.$t("k3Even")), 1)]),
                        _: 2
                    }, 1024), L(w, {
                        span: "6"
                    }, {
                        default: M(() => [t("div", QT, [(n(!0), a(R, null, A(h.premium, (z, y) => (n(), a("div", {
                            key: y,
                            class: G("n" + z)
                        }, null, 2))), 128))])]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024))), 128)) : (n(), a("div", JT, [L(pe)]))]), l.value.length ? (n(), a("div", YT, [t("div", {
                    class: G(["GameRecord__C-foot-previous", {
                        disabled: r.value <= 1
                    }]),
                    onClick: c
                }, [L(C, {
                    name: "arrow-left",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2), t("div", ZT, e(r.value) + "/" + e(g.value), 1), t("div", {
                    class: G(["GameRecord__C-foot-next", {
                        disabled: r.value >= g.value
                    }]),
                    onClick: p
                }, [L(C, {
                    name: "arrow",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2)])) : $("v-if", !0)])
            }
        }
    });
const eC = F(tC, [
        ["__scopeId", "data-v-4e09079f"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/K3/GameRecord.vue"]
    ]),
    iC = {
        class: "Trend__C"
    },
    nC = {
        class: "Trend__C-head"
    },
    aC = {
        class: "Trend__C-body"
    },
    oC = {
        class: "Trend__C-body-premium"
    },
    sC = {
        class: "Trend__C-body-gameText"
    },
    lC = {
        key: 1,
        class: "Trend__C-body-empty"
    },
    cC = {
        key: 0,
        class: "Trend__C-foot"
    },
    rC = {
        class: "Trend__C-foot-page"
    },
    uC = V({
        __name: "Trend",
        props: {
            typeid: {
                type: Number,
                required: !0
            }
        },
        setup(s, {
            expose: i
        }) {
            const o = s,
                {
                    t: l
                } = kt(),
                g = k([]),
                m = k(4),
                r = k(10),
                c = k(1),
                p = () => {
                    c.value--, b()
                },
                u = () => {
                    c.value++, b()
                },
                b = async (f = !1) => {
                    if (o.typeid == null) return;
                    f && (c.value = 1);
                    const [C, h] = await ee(mn({
                        pageSize: r.value,
                        pageNo: c.value,
                        typeId: o.typeid
                    }));
                    g.value = h.list.map(T => {
                        let z = [0, 0, 0, 0, 0, 0],
                            y = T.premium.split("").map(Number),
                            v = T.premium.split("").map(Number);
                        for (let N = 0; z.length > N; N++) z[y[N] - 1] = y[N];
                        return T.Premiums = z, T.AllEqual = w(v), T
                    }) || [], m.value = h.totalPage
                },
                _ = k([l("trendTXT1"), l("trendTXT2"), l("trendTXT3"), l("trendTXT4")]),
                w = f => {
                    let C = [0, 0, 0, 0, 0, 0],
                        h = f.sort(),
                        T = 2;
                    for (let z = 0; z < h.length - 1; z++) h[z] == h[z + 1] && (C[h[z] - 1] = T++);
                    return C
                };
            return i({
                getData: b
            }), ke(() => {
                b()
            }), (f, C) => {
                const h = H("van-col"),
                    T = H("van-row"),
                    z = H("van-icon");
                return n(), a("div", iC, [t("div", nC, [L(T, null, {
                    default: M(() => [L(h, {
                        span: "8"
                    }, {
                        default: M(() => [O(e(f.$t("trendNumber")), 1)]),
                        _: 1
                    }), L(h, {
                        span: "6"
                    }, {
                        default: M(() => [O(e(f.$t("trendResult")), 1)]),
                        _: 1
                    }), L(h, {
                        span: "10"
                    }, {
                        default: M(() => [O(e(f.$t("trendNum")), 1)]),
                        _: 1
                    })]),
                    _: 1
                })]), t("div", aC, [g.value.length ? (n(!0), a(R, {
                    key: 0
                }, A(g.value, (y, v) => (n(), it(T, {
                    key: v
                }, {
                    default: M(() => [L(h, {
                        span: "8"
                    }, {
                        default: M(() => [O(e(y.issueNumber), 1)]),
                        _: 2
                    }, 1024), L(h, {
                        span: "6"
                    }, {
                        default: M(() => [t("div", oC, [(n(!0), a(R, null, A(y.premium, (N, S) => (n(), a("div", {
                            key: S,
                            class: G("n" + N)
                        }, null, 2))), 128))])]),
                        _: 2
                    }, 1024), L(h, {
                        span: "10"
                    }, {
                        default: M(() => [t("div", sC, [t("span", null, e(_.value[y.gameType]), 1)])]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024))), 128)) : (n(), a("div", lC, [L(pe)]))]), g.value.length ? (n(), a("div", cC, [t("div", {
                    class: G(["Trend__C-foot-previous", {
                        disabled: c.value <= 1
                    }]),
                    onClick: p
                }, [L(z, {
                    name: "arrow-left",
                    class: "Trend__C-icon",
                    size: "20"
                })], 2), t("div", rC, e(c.value) + "/" + e(m.value), 1), t("div", {
                    class: G(["Trend__C-foot-next", {
                        disabled: c.value >= m.value
                    }]),
                    onClick: u
                }, [L(z, {
                    name: "arrow",
                    class: "Trend__C-icon",
                    size: "20"
                })], 2)])) : $("v-if", !0)])
            }
        }
    });
const dC = F(uC, [
        ["__scopeId", "data-v-4159c83a"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/K3/Trend.vue"]
    ]),
    pC = {
        key: 1,
        class: "WinningTip__C-body-l1"
    },
    gC = {
        class: "WinningTip__C-body-l2"
    },
    bC = {
        class: "line1"
    },
    mC = {
        class: "line2"
    },
    _C = {
        class: "yuan"
    },
    vC = {
        class: "WinningTip__C-body-l3"
    },
    kC = {
        key: 0,
        class: "isLose"
    },
    hC = {
        class: "head"
    },
    fC = {
        class: "bonus"
    },
    yC = {
        class: "gameDetail"
    },
    $C = {
        class: "WinningTip__C-body-l4"
    },
    wC = ["onClick"],
    TC = V({
        __name: "WinningTips",
        setup(s, {
            expose: i
        }) {
            const o = Y(() => m.value[0] ? m.value[0].state == 0 : !1),
                l = Y(() => m.value[0] || {}),
                g = k(!1),
                m = k([]);
            let r = k();
            const c = () => {
                    clearTimeout(r.value), m.value.shift(), g.value && m.value.length && (r.value = setTimeout(() => {
                        c()
                    }, 1e3 * 3))
                },
                p = () => {
                    g.value = !g.value, g.value ? r.value = setTimeout(() => {
                        c()
                    }, 1e3 * 3) : clearTimeout(r.value)
                },
                u = _ => {
                    _.list = _.premium.split(""), _.sum = Number(_.list[0]) + Number(_.list[1]) + Number(_.list[2]), m.value.push(_), g.value && (r.value = setTimeout(() => {
                        c()
                    }, 1e3 * 3))
                },
                b = () => {
                    m.value = []
                };
            return i({
                showMark: u
            }), (_, w) => vt((n(), a("div", {
                class: "WinningTip__C",
                onClick: c
            }, [t("div", {
                class: G(["WinningTip__C-body", {
                    isL: o.value
                }])
            }, [o.value ? (n(), a("div", {
                key: 0,
                class: G(["WinningTip__C-body-l1", {
                    isL: o.value
                }])
            }, e(_.$t("k3WarningTip1")), 3)) : (n(), a("div", pC, e(_.$t("k3WarningTip2")), 1)), t("div", gC, [t("div", bC, [(n(!0), a(R, null, A(l.value.list, (f, C) => (n(), a("div", {
                class: G(["n" + f])
            }, null, 2))), 256))]), t("div", mC, [t("div", null, e(l.value.premium), 1), t("div", _C, e(l.value.sum > 10 ? _.$t("big") : _.$t("small")), 1), t("div", null, e(l.value.sum % 2 ? _.$t("k3Odd") : _.$t("k3Even")), 1)])]), t("div", vC, [o.value ? (n(), a("div", kC, e(_.$t("k3WarningTip3")), 1)) : (n(), a(R, {
                key: 1
            }, [t("div", hC, e(_.$t("k3WarningTip4")), 1), t("div", fC, e(d(Lt)(Number(l.value.winAmount))), 1)], 64)), t("div", yC, e(_.$t("k3WarningTip5")) + e(l.value.typeName) + " " + e(l.value.issueNumber), 1)]), t("div", $C, [t("div", {
                class: G(["acitveBtn", {
                    active: g.value
                }]),
                onClick: re(p, ["stop"])
            }, null, 10, wC), O(" " + e(_.$t("autoShutOff3s")), 1)]), t("div", {
                class: "closeBtn",
                onClick: b
            })], 2)], 512)), [
                [Qt, m.value.length]
            ])
        }
    });
const CC = F(TC, [
        ["__scopeId", "data-v-2d418cc5"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/K3/WinningTips.vue"]
    ]),
    LC = {
        class: "K3__C"
    },
    NC = {
        class: "K3__C-head-more"
    },
    zC = V({
        __name: "index",
        setup(s) {
            const i = {
                    GameRecord: eC,
                    Trend: dC,
                    MyGameRecord: Ha
                },
                o = k(),
                l = k(),
                g = k(),
                m = k(!1),
                r = k("GameRecord"),
                c = dt(),
                p = De(),
                u = p.getK3,
                b = k(0),
                _ = k(localStorage.getItem("volumeShow") || "1"),
                w = k(!1),
                f = k([]),
                C = k(null),
                h = k({
                    gameNo: "loading",
                    currentTime: "",
                    beginTime: "",
                    passTime: 180,
                    time1: 0,
                    time2: 0,
                    time3: 0,
                    time4: 0
                }),
                T = k("666"),
                z = k(5),
                y = k(""),
                v = k(!1),
                N = k(null),
                S = Y(() => u[b.value] || {}),
                I = Re(),
                x = Y(() => I.getIsShowLotteryDragon);
            Nt(() => {
                q()
            }), Fe(() => {
                clearInterval(C.value), clearInterval(At.value), Bt.value.forEach(Z => {
                    clearInterval(Z)
                }), nt.value && clearTimeout(nt.value)
            }), Mt(() => Be().visibility, Z => {
                Z === 0 ? clearInterval(C.value) : (q(), lt(b.value))
            });
            const B = () => {
                    c.go(-1), sessionStorage.setItem("clickedGameType", "lottery")
                },
                D = () => {
                    _.value == "1" ? _.value = "2" : _.value = "1", localStorage.setItem("volumeShow", _.value)
                },
                P = Z => {
                    c.push({
                        name: Z
                    })
                },
                q = () => {
                    N.value == null && lt(0)
                },
                X = async (Z, tt = !1) => {
                    const W = await at(Ts({
                        typeId: Z
                    }));
                    W && (T.value = W.data.premium, tt && yt(T.value))
                },
                lt = Z => {
                    p.getK3Data(), b.value = Z, N.value = u[Z].typeID, gt(N.value), Zt(() => {
                        o.value.getData(N.value)
                    })
                },
                gt = async (Z, tt = !1) => {
                    X(Z, tt);
                    const [W, Ct] = await ee(ws({
                        typeId: Z
                    }));
                    h.value.gameNo = Ct.issueNumber, h.value.currentTime = Ct.serviceTime.replace(/-/g, "/"), h.value.beginTime = Ct.startTime.replace(/-/g, "/"), rt()
                },
                rt = () => {
                    if (!u.length) return;
                    var Z = new Date(h.value.currentTime).getTime(),
                        tt = new Date(h.value.beginTime).getTime();
                    let W = (Z - tt) / 1e3,
                        Ct = u[b.value];
                    if (W > Ct.intervalM * 60 && (W = Ct.intervalM * 60), h.value.passTime = Ct.intervalM * 60 - W, h.value.passTime < 0) {
                        y.value = "An error occurred, please contact customer service。The game time is " + Ct.intervalM + " minutes,start time is " + h.value.beginTime + ",current time is" + h.value.currentTime + "!", w.value = !0;
                        return
                    }
                    J()
                },
                J = () => {
                    clearInterval(C.value), Q(!1), C.value = setInterval(function() {
                        Q()
                    }, 1e3)
                },
                Q = (Z = !0) => {
                    if (h.value.passTime <= z.value && (v.value = !1), _.value == "1" && (h.value.passTime <= z.value && h.value.passTime > 1 ? st(1) : h.value.passTime == 1 && st(2)), h.value.passTime > 0) {
                        let tt = h.value.passTime;
                        h.value.time2 = Math.floor(tt / 60), h.value.time3 = Math.floor(tt % 60 / 10), h.value.time4 = Math.floor(tt % 10), h.value.passTime--
                    } else clearInterval(C.value), Z && Rt()
                },
                st = (Z = 1) => {
                    const tt = document.getElementById(`voice${Z}`);
                    tt && tt.play()
                },
                Rt = () => {
                    gt(N.value, !0), g.value.getWinsUserAmount(!1), o.value.getData(!0)
                },
                At = k(null),
                ot = (Z, tt) => {
                    if (Z >= 0 && tt > 0 && tt >= Z) {
                        let W = tt - Z + 1;
                        return Math.floor(Math.random() * W + Z)
                    } else return 0
                },
                yt = Z => {
                    At.value || (At.value = setInterval(function() {
                        for (var tt = [], W = 0; 3 > W; W++) tt.push(ot(1, 6));
                        T.value = tt.join("")
                    }, 50)), setTimeout(function() {
                        clearInterval(At.value), T.value = Z, At.value = null
                    }, 2e3)
                },
                Tt = k({}),
                Bt = k([]),
                Gt = Z => {
                    if (g.value.getWinsUserAmount(!1), o.value.getData(), Tt.value[Z]) return;
                    Tt.value[Z] = !0;
                    const {
                        time1: tt,
                        time2: W,
                        time3: Ct,
                        time4: Et
                    } = h.value, ie = (tt * 10 * 60 + W * 60 + Ct * 10 + Et) * 1e3;
                    Bt.value[S.value.intervalM] = setTimeout(() => {
                        ct(Z)
                    }, ie)
                },
                _t = Z => {
                    m.value = Z
                },
                nt = k(null),
                ct = async Z => {
                    const tt = await at(Cs({
                        issueNumber: Z
                    }));
                    if (tt) {
                        if (!(tt.data.state != 2)) {
                            nt.value = setTimeout(() => {
                                ct(Z)
                            }, 2e3);
                            return
                        }
                        l.value.showMark(tt.data), delete Tt.value[Z]
                    }
                };
            return (Z, tt) => {
                const W = H("NavBar");
                return n(), a("div", LC, [L(W, {
                    "left-arrow": "",
                    onClickLeft: B,
                    class: "main",
                    headLogo: !0
                }, {
                    right: M(() => [t("div", NC, [t("div", {
                        onClick: tt[0] || (tt[0] = Ct => P("CustomerService"))
                    }), t("div", {
                        class: G({
                            disableVoice: _.value == "2"
                        }),
                        onClick: D
                    }, null, 2)])]),
                    _: 1
                }), $(" 钱包余额 "), L(Bi, {
                    ref_key: "WallteRef",
                    ref: g
                }, null, 512), L(wi, {
                    siteMsg: f.value,
                    key: "k3"
                }, null, 8, ["siteMsg"]), $(" 游戏类型 "), L(Gi, {
                    gameList: d(u),
                    currentGameIndex: b.value,
                    onChangeGame: lt
                }, null, 8, ["gameList", "currentGameIndex"]), $(" 游戏开始时间倒计时 "), L(n5, {
                    currentInfo: h.value,
                    premium: T.value,
                    currentGame: S.value
                }, null, 8, ["currentInfo", "premium", "currentGame"]), $(" 投注表 "), L(FT, {
                    currentInfo: h.value,
                    currentGame: S.value,
                    VoiceType: _.value,
                    typeid: N.value,
                    onBetting: Gt,
                    onChangeBettingP: _t
                }, null, 8, ["currentInfo", "currentGame", "VoiceType", "typeid"]), $(" 记录导航 "), L(Mi, {
                    record: r.value,
                    onChangeC: tt[1] || (tt[1] = Ct => r.value = Ct)
                }, null, 8, ["record"]), $(" 动态展示对应的组件 "), (n(), it(Qe, null, [(n(), it(He(i[r.value]), {
                    ref_key: "RecordComponent",
                    ref: o,
                    typeid: N.value,
                    ApiFun: d(gn),
                    listApi: d(mn),
                    EmerdApi: d(ya),
                    goPathName: "AllLotteryGames-BettingRecordK3"
                }, null, 8, ["typeid", "ApiFun", "listApi", "EmerdApi"]))], 1024)), $(" 弹窗组件 "), L(xe, {
                    show: w.value,
                    onConfirm: tt[2] || (tt[2] = Ct => P("/login"))
                }, {
                    content: M(() => [t("div", null, e(y.value), 1)]),
                    _: 1
                }, 8, ["show"]), $(" 中奖提示组件 "), L(CC, {
                    ref_key: "WinningTipsRef",
                    ref: l
                }, null, 512), x.value ? (n(), it(kn, {
                    key: 0
                })) : $("v-if", !0), L(Pi)])
            }
        }
    });
const IC = F(zC, [
        ["__scopeId", "data-v-d024c659"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/K3/index.vue"]
    ]),
    NG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: IC
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ei = s => ($t("data-v-35613996"), s = s(), wt(), s),
    SC = {
        class: "TimeLeft__C"
    },
    xC = {
        class: "box"
    },
    RC = {
        class: "tit"
    },
    BC = {
        class: "citycon"
    },
    GC = Ei(() => t("div", {
        class: "citybg"
    }, null, -1)),
    AC = {
        class: "font30"
    },
    MC = {
        class: "playmethod"
    },
    PC = {
        key: 0,
        class: "odds"
    },
    DC = Ei(() => t("div", {
        class: "line"
    }, "|", -1)),
    OC = {
        class: "odd"
    },
    EC = {
        key: 1,
        class: "color8"
    },
    qC = {
        class: "bettingcut"
    },
    jC = {
        class: "font22"
    },
    HC = {
        class: "info"
    },
    WC = Ei(() => t("div", {
        class: "illustratebg"
    }, null, -1)),
    VC = {
        class: "font24"
    },
    FC = {
        class: "issue"
    },
    UC = Ei(() => t("div", {
        class: "issuebg"
    }, null, -1)),
    KC = {
        class: "font26"
    },
    XC = {
        class: "closure"
    },
    QC = {
        class: "closuretime"
    },
    JC = {
        class: "closurtimes"
    },
    YC = V({
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
        setup(s) {
            const i = s,
                o = dt(),
                l = () => {
                    o.push({
                        name: "AllLotteryGames-Play",
                        query: {
                            id: i.areId,
                            gVSs: 1
                        }
                    })
                };
            return (g, m) => (n(), a("div", SC, [t("div", xC, [t("div", RC, [t("div", BC, [GC, t("div", AC, e(s.defaultcityname), 1)]), t("div", MC, e(g.$t("code" + s.defaultplayname)), 1), s.colorId != 8 ? (n(), a("div", PC, [t("div", null, e(g.$t("odds")), 1), DC, t("div", OC, "1:" + e(s.odds), 1)])) : $("v-if", !0), s.colorId == 8 ? (n(), a("div", EC)) : $("v-if", !0), t("div", qC, [t("div", jC, e(g.$t("xosoTxt91")), 1), t("div", null, e(s.defaultexpiredate), 1)])]), t("div", HC, [t("div", {
                class: "playillustrate",
                onClick: l
            }, [WC, t("div", VC, e(g.$t("lotteryManual")), 1)]), t("div", FC, [UC, t("div", KC, e(s.issue), 1)]), t("div", XC, [t("div", QC, e(g.$t("xosoTxt92")), 1), t("div", JC, [(n(!0), a(R, null, A(s.time.split(""), (r, c) => (n(), a("div", {
                class: G(r == ":" ? "red" : "redsqure"),
                key: c
            }, e(r), 3))), 128))])])])])]))
        }
    });
const ZC = F(YC, [
        ["__scopeId", "data-v-35613996"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/NewVietnam/TimeLeft.vue"]
    ]),
    wn = s => ($t("data-v-9adf5430"), s = s(), wt(), s),
    t6 = {
        class: "TimeLeft__C"
    },
    e6 = {
        class: "box"
    },
    i6 = {
        class: "tit"
    },
    n6 = {
        class: "citycon"
    },
    a6 = wn(() => t("div", {
        class: "citybg"
    }, null, -1)),
    o6 = {
        class: "font30"
    },
    s6 = {
        key: 0,
        class: "playmethod"
    },
    l6 = {
        class: "odd"
    },
    c6 = {
        class: "odds"
    },
    r6 = {
        class: "result"
    },
    u6 = {
        class: "info"
    },
    d6 = wn(() => t("div", {
        class: "illustratebg"
    }, null, -1)),
    p6 = {
        class: "font24"
    },
    g6 = {
        class: "issue"
    },
    b6 = wn(() => t("div", {
        class: "issuebg"
    }, null, -1)),
    m6 = {
        class: "font26"
    },
    _6 = {
        class: "closure isShowPreparing"
    },
    v6 = {
        class: "closure"
    },
    k6 = {
        class: "closuretime"
    },
    h6 = {
        class: "closurtimes"
    },
    f6 = V({
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
        setup(s) {
            const i = s,
                o = dt(),
                l = Y(() => {
                    var r, c;
                    let m = (r = i.resultList) != null && r.openingResult ? (c = i.resultList) == null ? void 0 : c.openingResult.find(p => p.resultType == 0).result : "";
                    return Array.isArray(m) && (m = m[0]), m
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
            return (m, r) => {
                var c;
                return n(), a("div", t6, [t("div", e6, [t("div", i6, [t("div", n6, [a6, t("div", o6, e(s.defaultcityname), 1)]), s.colorId != 8 ? (n(), a("div", s6, [t("div", null, "(" + e(m.$t("code" + s.defaultplayname)) + ")", 1), t("div", l6, "1:" + e(s.odds), 1)])) : $("v-if", !0), t("div", c6, [t("div", null, e(m.$t("betResult")), 1), t("div", null, e((c = s.resultList) == null ? void 0 : c.issueNumber), 1), t("div", r6, [(n(!0), a(R, null, A(l.value.split(""), (p, u) => (n(), a("span", {
                    key: u
                }, e(p), 1))), 128))])])]), t("div", u6, [t("div", {
                    class: "playillustrate",
                    onClick: g
                }, [d6, t("div", p6, e(m.$t("lotteryManual")), 1)]), t("div", g6, [b6, t("div", m6, e(s.issue), 1)]), t("div", _6, e(m.$t("preparing")), 1), t("div", v6, [t("div", k6, e(m.$t("xosoTxt91")), 1), t("div", h6, [(n(!0), a(R, null, A(s.time.split(""), (p, u) => (n(), a("div", {
                    class: G(p == ":" ? "red" : "redsqure"),
                    key: u
                }, e(p), 3))), 128))])])])])])
            }
        }
    });
const y6 = F(f6, [
        ["__scopeId", "data-v-9adf5430"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/NewVietnam/TimeLeftF.vue"]
    ]),
    $6 = {
        class: "ColorsContainer"
    },
    w6 = V({
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
        setup(s, {
            emit: i
        }) {
            const o = s,
                l = k(o.colortab),
                g = k(o.playtab),
                m = Y(() => {
                    var p;
                    return ((p = o.gameCategoryList[l.value]) == null ? void 0 : p.gamePlayList) || []
                });

            function r(p) {
                i("colorupdate", p.item.categoryId, p.index)
            }

            function c({
                item: p,
                index: u
            }) {
                i("update", p.playId, u, p.playNameCode, p.betType)
            }
            return Mt(() => o.playtab, () => {
                g.value = o.playtab
            }), Mt(() => o.colortab, () => {
                l.value = o.colortab
            }), (p, u) => (n(), a("div", $6, [L(Xe, {
                list: s.gameCategoryList,
                active: l.value,
                "onUpdate:active": u[0] || (u[0] = b => l.value = b),
                tabClassName: "ColorsMethod",
                onOnClickTab: r
            }, {
                default: M(({
                    item: b,
                    index: _
                }) => [t("div", {
                    class: G(["coloritem", {
                        active: _ === l.value
                    }])
                }, e(p.$t("code" + b.categoryNameCode)), 3)]),
                _: 1
            }, 8, ["list", "active"]), L(Xe, {
                list: m.value,
                active: g.value,
                "onUpdate:active": u[1] || (u[1] = b => g.value = b),
                tabClassName: "PlayMethod",
                onOnClickTab: c
            }, {
                default: M(({
                    item: b,
                    index: _
                }) => [t("div", {
                    class: G(["playitem", {
                        active: _ === g.value
                    }])
                }, e(p.$t("code" + b.playNameCode)), 3)]),
                _: 1
            }, 8, ["list", "active"])]))
        }
    });
const T6 = F(w6, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/NewVietnam/ColorsAndPlay.vue"]
    ]),
    qi = s => ($t("data-v-cca50955"), s = s(), wt(), s),
    C6 = {
        class: "NumberSelectContainer"
    },
    L6 = {
        class: "NumberSelectContainer-mark"
    },
    N6 = {
        class: "NumberTabContent"
    },
    z6 = {
        key: 0,
        class: "selectcontainer"
    },
    I6 = {
        class: "selectbutton"
    },
    S6 = {
        class: "selectcontent"
    },
    x6 = {
        class: "selectheader"
    },
    R6 = {
        class: "selectball"
    },
    B6 = ["onClick"],
    G6 = {
        key: 1,
        class: "selectcontainer"
    },
    A6 = {
        class: "selectbutton"
    },
    M6 = {
        class: "selectcontent"
    },
    P6 = {
        class: "selectheader"
    },
    D6 = {
        class: "selectball"
    },
    O6 = ["onClick"],
    E6 = {
        key: 2,
        class: "selectcontainer"
    },
    q6 = {
        class: "selectbutton"
    },
    j6 = {
        class: "selectcontent"
    },
    H6 = {
        class: "selectheader"
    },
    W6 = {
        class: "selectball"
    },
    V6 = ["onClick"],
    F6 = {
        key: 3,
        class: "selectcontainer"
    },
    U6 = {
        class: "selectbutton"
    },
    K6 = {
        class: "selectcontent"
    },
    X6 = {
        class: "selectheader"
    },
    Q6 = {
        class: "selectball"
    },
    J6 = ["onClick"],
    Y6 = {
        class: "quickcontainer"
    },
    Z6 = {
        key: 0,
        class: "intervalcontainer"
    },
    t4 = ["onClick"],
    e4 = {
        key: 1,
        class: "randomcontainer"
    },
    i4 = {
        class: "randomheader"
    },
    n4 = qi(() => t("div", {
        class: "redline"
    }, null, -1)),
    a4 = {
        class: "font30"
    },
    o4 = {
        class: "randombutton"
    },
    s4 = ["onClick"],
    l4 = {
        key: 2,
        class: "specialcontainer"
    },
    c4 = {
        class: "specialheader"
    },
    r4 = qi(() => t("div", {
        class: "redline"
    }, null, -1)),
    u4 = {
        class: "font30"
    },
    d4 = {
        class: "specialbutton"
    },
    p4 = {
        class: "Ntit"
    },
    g4 = qi(() => t("br", null, null, -1)),
    b4 = qi(() => t("br", null, null, -1)),
    m4 = {
        class: "list"
    },
    _4 = ["onClick"],
    v4 = V({
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
        setup(s, {
            expose: i,
            emit: o
        }) {
            const l = s,
                {
                    t: g
                } = kt(),
                m = [{
                    name: g("selectNo"),
                    value: 1
                }, {
                    name: g("xosoTxt81"),
                    value: 3
                }, {
                    name: g("xosoTxt80"),
                    value: 2
                }],
                r = Y(() => m.filter(v => {
                    var N;
                    return (N = l.methodList) == null ? void 0 : N.includes(v.value + "")
                })),
                c = k(0),
                p = k(""),
                u = k(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]),
                b = ({
                    item: v
                }) => {
                    o("tabupdate", v.value)
                },
                _ = (v, N, S) => {
                    o("selectgroup", v, N, S)
                },
                w = (v, N) => {
                    o("betNum", v, N)
                },
                f = (v, N, S) => {
                    o("betQuickNum", v, N, S)
                },
                C = (v, N, S, I) => {
                    o("getselect", v, N, S, I)
                },
                h = (v, N) => {
                    o("getquick", v, N)
                },
                T = (v, N) => {
                    o("selectinterval", v, N)
                },
                z = v => {
                    v.target.value != "" && o("inputblur", v.target.value)
                },
                y = () => {
                    p.value = ""
                };
            return Mt(() => l.activeTab, async () => {
                await Zt();
                const v = r.value.findIndex(N => N.value == l.activeTab);
                v !== -1 && (c.value = v)
            }), i({
                cleardata: y
            }), (v, N) => {
                var I, x, B, D;
                const S = H("van-field");
                return n(), a("div", C6, [vt(t("div", L6, [t("div", null, e(d(g)("nomorebet")), 1)], 512), [
                    [Qt, s.isShowMark]
                ]), r.value.length > 0 ? (n(), it(Xe, {
                    key: 0,
                    list: r.value,
                    active: c.value,
                    "onUpdate:active": N[0] || (N[0] = P => c.value = P),
                    tabClassName: "NumberTab",
                    onOnClickTab: b
                }, {
                    default: M(({
                        item: P,
                        index: q
                    }) => [t("div", {
                        class: G(["tabitem", {
                            active: P.value === s.activeTab
                        }])
                    }, e(P.name), 3)]),
                    _: 1
                }, 8, ["list", "active"])) : $("v-if", !0), t("div", N6, [vt(t("div", null, [$("选择号码"), (I = s.betconfig) != null && I.includes("4") ? (n(), a("div", z6, [t("div", I6, [t("div", {
                    class: "selectall",
                    onClick: N[1] || (N[1] = P => C("Thousand", 0, 9, "all"))
                }, e(d(g)("all")), 1), t("div", {
                    class: "selectbig",
                    onClick: N[2] || (N[2] = P => C("Thousand", 0, 9, "big"))
                }, e(d(g)("big")), 1), t("div", {
                    class: "selectsmall",
                    onClick: N[3] || (N[3] = P => C("Thousand", 0, 9, "small"))
                }, e(d(g)("small")), 1), t("div", {
                    class: "selectodd",
                    onClick: N[4] || (N[4] = P => C("Thousand", 0, 9, "odd"))
                }, e(d(g)("xosoTxt71")), 1), t("div", {
                    class: "selecteven",
                    onClick: N[5] || (N[5] = P => C("Thousand", 0, 9, "even"))
                }, e(d(g)("xosoTxt70")), 1)]), t("div", S6, [t("div", x6, e(d(g)("xosoTxt87")), 1), t("div", R6, [(n(!0), a(R, null, A(u.value, (P, q) => (n(), a("div", {
                    key: q,
                    onClick: X => w("Thousand", P)
                }, [t("div", {
                    class: G(s.thousandnumList.includes(P) ? "ball action " : "ball")
                }, e(P), 3)], 8, B6))), 128))])])])) : $("v-if", !0), (x = s.betconfig) != null && x.includes("3") ? (n(), a("div", G6, [t("div", A6, [t("div", {
                    class: "selectall",
                    onClick: N[6] || (N[6] = P => C("hundred", 0, 9, "all"))
                }, e(d(g)("all")), 1), t("div", {
                    class: "selectbig",
                    onClick: N[7] || (N[7] = P => C("hundred", 0, 9, "big"))
                }, e(d(g)("big")), 1), t("div", {
                    class: "selectsmall",
                    onClick: N[8] || (N[8] = P => C("hundred", 0, 9, "small"))
                }, e(d(g)("small")), 1), t("div", {
                    class: "selectodd",
                    onClick: N[9] || (N[9] = P => C("hundred", 0, 9, "odd"))
                }, e(d(g)("xosoTxt71")), 1), t("div", {
                    class: "selecteven",
                    onClick: N[10] || (N[10] = P => C("hundred", 0, 9, "even"))
                }, e(d(g)("xosoTxt70")), 1)]), t("div", M6, [t("div", P6, e(d(g)("xosoTxt88")), 1), t("div", D6, [(n(!0), a(R, null, A(u.value, (P, q) => (n(), a("div", {
                    key: q,
                    onClick: X => w("Hundred", P)
                }, [t("div", {
                    class: G(s.hundrednumList.includes(P) ? "action ball" : "ball")
                }, e(P), 3)], 8, O6))), 128))])])])) : $("v-if", !0), (B = s.betconfig) != null && B.includes("2") ? (n(), a("div", E6, [t("div", q6, [t("div", {
                    class: "selectall",
                    onClick: N[11] || (N[11] = P => C("ten", 0, 9, "all"))
                }, e(d(g)("all")), 1), t("div", {
                    class: "selectbig",
                    onClick: N[12] || (N[12] = P => C("ten", 0, 9, "big"))
                }, e(d(g)("big")), 1), t("div", {
                    class: "selectsmall",
                    onClick: N[13] || (N[13] = P => C("ten", 0, 9, "small"))
                }, e(d(g)("small")), 1), t("div", {
                    class: "selectodd",
                    onClick: N[14] || (N[14] = P => C("ten", 0, 9, "odd"))
                }, e(d(g)("xosoTxt71")), 1), t("div", {
                    class: "selecteven",
                    onClick: N[15] || (N[15] = P => C("ten", 0, 9, "even"))
                }, e(d(g)("xosoTxt70")), 1)]), t("div", j6, [t("div", H6, e(d(g)("xosoTxt89")), 1), t("div", W6, [(n(!0), a(R, null, A(u.value, (P, q) => (n(), a("div", {
                    key: q,
                    onClick: X => w("ten", P)
                }, [t("div", {
                    class: G(s.tennumList.includes(P) ? "action ball" : "ball")
                }, e(P), 3)], 8, V6))), 128))])])])) : $("v-if", !0), (D = s.betconfig) != null && D.includes("1") ? (n(), a("div", F6, [t("div", U6, [t("div", {
                    class: "selectall",
                    onClick: N[16] || (N[16] = P => C("Indivual", 0, 9, "all"))
                }, e(d(g)("all")), 1), t("div", {
                    class: "selectbig",
                    onClick: N[17] || (N[17] = P => C("Indivual", 0, 9, "big"))
                }, e(d(g)("big")), 1), t("div", {
                    class: "selectsmall",
                    onClick: N[18] || (N[18] = P => C("Indivual", 0, 9, "small"))
                }, e(d(g)("small")), 1), t("div", {
                    class: "selectodd",
                    onClick: N[19] || (N[19] = P => C("Indivual", 0, 9, "odd"))
                }, e(d(g)("xosoTxt71")), 1), t("div", {
                    class: "selecteven",
                    onClick: N[20] || (N[20] = P => C("Indivual", 0, 9, "even"))
                }, e(d(g)("xosoTxt70")), 1)]), t("div", K6, [t("div", X6, e(d(g)("xosoTxt90")), 1), t("div", Q6, [(n(!0), a(R, null, A(u.value, (P, q) => (n(), a("div", {
                    key: q,
                    onClick: X => w("Indivual", P)
                }, [t("div", {
                    class: G(s.indicualnumList.includes(P) ? "ball action" : "ball")
                }, e(P), 3)], 8, J6))), 128))])])])) : $("v-if", !0)], 512), [
                    [Qt, s.activeTab === 1]
                ]), $("输入号码"), vt(t("div", null, [L(S, {
                    class: "custom-field",
                    modelValue: p.value,
                    "onUpdate:modelValue": N[21] || (N[21] = P => p.value = P),
                    rows: "4",
                    autosize: "",
                    type: "textarea",
                    placeholder: d(g)("xosoTxt86"),
                    onInput: z
                }, null, 8, ["modelValue", "placeholder"])], 512), [
                    [Qt, s.activeTab === 2]
                ]), $("快捷选号"), vt(t("div", null, [t("div", Y6, [s.isthreenumber === 1 ? (n(), a("div", Z6, [(n(!0), a(R, null, A(s.intervalnumber, (P, q) => (n(), a("div", {
                    class: G(["intervalitem", [s.intervalTab === q ? "active" : ""]]),
                    key: q,
                    onClick: X => T(P, q)
                }, e(P), 11, t4))), 128))])) : $("v-if", !0), s.randomtype === 1 ? (n(), a("div", e4, [t("div", i4, [n4, t("div", a4, e(d(g)("xosoTxt83")), 1)]), t("div", o4, [(n(!0), a(R, null, A(s.randomList, (P, q) => (n(), a("div", {
                    class: G([s.groupTab === q ? "active" : ""]),
                    key: q,
                    onClick: X => _(P, q, s.isthreenumber)
                }, e(P) + e(d(g)("xosoTxt84")), 11, s4))), 128))])])) : $("v-if", !0), s.specialtype === 1 ? (n(), a("div", l4, [t("div", c4, [r4, t("div", u4, e(d(g)("xosoTxt97")), 1)]), t("div", d4, [s.speciaSelectNo.includes("1") ? (n(), a("div", {
                    key: 0,
                    class: "specialsame",
                    onClick: N[22] || (N[22] = P => h(s.isthreenumber, "same"))
                }, e(d(g)("xosoTxt85")), 1)) : $("v-if", !0), s.speciaSelectNo.includes("4") ? (n(), a("div", {
                    key: 1,
                    class: "specialbig",
                    onClick: N[23] || (N[23] = P => h(s.isthreenumber, "big"))
                }, e(d(g)("big")), 1)) : $("v-if", !0), s.speciaSelectNo.includes("5") ? (n(), a("div", {
                    key: 2,
                    class: "specialsmall",
                    onClick: N[24] || (N[24] = P => h(s.isthreenumber, "small"))
                }, e(d(g)("small")), 1)) : $("v-if", !0), s.speciaSelectNo.includes("2") ? (n(), a("div", {
                    key: 3,
                    class: "specialodd",
                    onClick: N[25] || (N[25] = P => h(s.isthreenumber, "odd"))
                }, e(d(g)("xosoTxt71")), 1)) : $("v-if", !0), s.speciaSelectNo.includes("3") ? (n(), a("div", {
                    key: 4,
                    class: "specialeven",
                    onClick: N[26] || (N[26] = P => h(s.isthreenumber, "even"))
                }, e(d(g)("xosoTxt70")), 1)) : $("v-if", !0)])])) : $("v-if", !0), s.activeTab === 3 ? (n(), a(R, {
                    key: 3
                }, A(10, (P, q) => t("div", {
                    class: "numbercontainer",
                    key: P
                }, [t("div", p4, [t("div", null, [O(e(s.hundred) + e(q) + "0", 1), g4, O("/"), b4, O(e(s.hundred) + e(q) + "9", 1)])]), t("div", m4, [(n(), a(R, null, A(10, (X, lt) => t("div", {
                    class: "item",
                    key: X
                }, [t("div", {
                    onClick: gt => f(s.hundred, q, lt)
                }, [t("div", {
                    class: G(s.quicknumList.includes(s.hundred + "" + q + lt) ? "number action" : "number")
                }, e(s.hundred) + e(q) + e(lt), 3)], 8, _4)])), 64))])])), 64)) : $("v-if", !0)])], 512), [
                    [Qt, s.activeTab === 3]
                ])])])
            }
        }
    });
const k4 = F(v4, [
        ["__scopeId", "data-v-cca50955"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/NewVietnam/NumberSelect.vue"]
    ]),
    h4 = {
        class: "TasteContainer"
    },
    f4 = {
        class: "TasteHeader"
    },
    y4 = {
        class: "NumberSelect"
    },
    $4 = {
        class: "NumberSelectCon"
    },
    w4 = ["onClick"],
    T4 = V({
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
        setup(s, {
            emit: i
        }) {
            const o = (l, g) => {
                i("selectvalue", l, g)
            };
            return (l, g) => (n(), a("div", h4, [t("div", f4, e(l.$t("xosoTxt60")), 1), t("div", y4, [t("div", $4, [(n(!0), a(R, null, A(s.funplaylist, (m, r) => (n(), a("div", {
                class: G(["NumberCon", {
                    action: m.oddTypeName === s.numbercon,
                    more: r == 18
                }]),
                key: r,
                onClick: c => o(m, r)
            }, [t("div", {
                class: G(["number", {
                    active: m.oddTypeName === s.numbercon
                }])
            }, e(l.$t("code" + m.oddTypeNameCode)), 3), t("div", {
                class: G(["odds", {
                    active: m.oddTypeName === s.numbercon
                }])
            }, e(m.oddsOrAmount), 3)], 10, w4))), 128))])])]))
        }
    });
const C4 = F(T4, [
        ["__scopeId", "data-v-a08d1fa6"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/NewVietnam/TasteSelect.vue"]
    ]),
    L4 = {
        class: "Footer__C"
    },
    N4 = {
        class: "nav c-row c-row-between"
    },
    z4 = {
        class: "c-row left c-row c-row-middle-center"
    },
    I4 = {
        class: "item"
    },
    S4 = {
        class: "txt"
    },
    x4 = {
        class: "num"
    },
    R4 = {
        class: "item"
    },
    B4 = {
        class: "txt"
    },
    G4 = {
        class: "num"
    },
    A4 = {
        class: ""
    },
    M4 = V({
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
        setup(s, {
            emit: i
        }) {
            const o = () => {
                i("playBet")
            };
            return (l, g) => (n(), a("div", L4, [t("div", N4, [t("div", z4, [t("div", I4, [t("p", S4, e(l.$t("quantity")), 1), t("span", x4, e(l.betNumber || 0), 1)]), t("div", R4, [t("p", B4, e(l.$t("betAmount")), 1), t("span", G4, e(d(Lt)(l.betSum || 0)), 1)])]), t("div", {
                class: G(["c-row c-row-middle-center", [l.betSum > 0 ? "bet-btn" : "disabled-btn"]]),
                onClick: g[0] || (g[0] = m => o())
            }, [t("span", A4, e(l.$t("betting")), 1)], 2)])]))
        }
    });
const P4 = F(M4, [
        ["__scopeId", "data-v-b37345b8"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/NewVietnam/Footer.vue"]
    ]),
    D4 = {
        class: "RecordNav__C"
    },
    O4 = ["onClick"],
    E4 = V({
        __name: "RecordNav",
        props: {
            record: {
                type: String,
                default: "GameRecord"
            }
        },
        setup(s) {
            const i = s,
                {
                    t: o
                } = kt(),
                l = k([{
                    name: o("gameRecords"),
                    componentName: "GameRecord"
                }, {
                    name: o("myGame"),
                    componentName: "MyGameRecord"
                }]);
            return (g, m) => (n(), a("div", D4, [(n(!0), a(R, null, A(l.value, (r, c) => (n(), a("div", {
                key: c,
                onClick: p => g.$emit("changeC", r.componentName),
                class: G({
                    active: i.record == r.componentName
                })
            }, e(r.name), 11, O4))), 128))]))
        }
    });
const q4 = F(E4, [
        ["__scopeId", "data-v-fdfc55f4"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/NewVietnam/RecordNav.vue"]
    ]),
    j4 = {
        class: "GameRecord__C"
    },
    H4 = {
        class: "GameRecord__C-head"
    },
    W4 = {
        class: "GameRecord__C-body"
    },
    V4 = {
        class: "c-tc goItem"
    },
    F4 = {
        class: "c-row"
    },
    U4 = {
        class: "c-row c-row-middle-center"
    },
    K4 = {
        class: "c-row c-row-middle-center time"
    },
    X4 = {
        key: 0
    },
    Q4 = {
        key: 1
    },
    J4 = {
        key: 0,
        class: "details"
    },
    Y4 = {
        key: 0,
        class: "detailLi"
    },
    Z4 = {
        class: "prize-tit"
    },
    t8 = {
        key: 0
    },
    e8 = {
        class: "prize-box c-row c-flex-warp"
    },
    i8 = {
        class: "prize-box-item action"
    },
    n8 = {
        key: 1,
        class: "GameRecord__C-body-empty"
    },
    a8 = {
        key: 0,
        class: "GameRecord__C-foot"
    },
    o8 = {
        class: "GameRecord__C-foot-page"
    },
    s8 = V({
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
        setup(s, {
            expose: i
        }) {
            const o = s,
                {
                    t: l
                } = kt(),
                g = k([]),
                m = k(4),
                r = k(10),
                c = k(1),
                p = k(-1),
                u = async (T = !1, z) => {
                    var y, v, N;
                    if ((z == null ? void 0 : z.list.length) > 0) g.value = sa(z == null ? void 0 : z.list) || [], m.value = z == null ? void 0 : z.totalPage, c.value = z == null ? void 0 : z.pageNo;
                    else {
                        if (o.cityCode === "") return;
                        let S;
                        o.gVSs == "1" ? S = await at(Ls({
                            pageSize: r.value,
                            pageNo: c.value,
                            areId: o == null ? void 0 : o.areId,
                            cityCode: o == null ? void 0 : o.cityCode
                        })) : o.gVSs == "2" && (S = await at($a({
                            pageSize: r.value,
                            pageNo: c.value,
                            areId: o.areId,
                            typeId: Number(o.cityCode)
                        }))), g.value = ((y = S.data) == null ? void 0 : y.list) || [], m.value = (v = S.data) == null ? void 0 : v.totalPage, c.value = (N = S.data) == null ? void 0 : N.pageNo
                    }
                },
                b = T => {
                    for (var z = [], y = 0; y < T.length; y++) {
                        var v = z.findIndex(function(N) {
                            return N.resultType === T[y].resultType
                        });
                        v !== -1 ? z[v].result.push(T[y].result) : z.push({
                            resultType: T[y].resultType,
                            result: [T[y].result]
                        })
                    }
                    return z
                };

            function _(T) {
                return T.join("-")
            }

            function w(T) {
                switch (T) {
                    case 0:
                        return l("GrandPrize");
                    case 1:
                        return l("firstprize");
                    case 2:
                        return l("secondprize");
                    case 3:
                        return l("thirdprize");
                    case 4:
                        return l("fourprize");
                    case 5:
                        return l("fiveprize");
                    case 6:
                        return l("sixprize");
                    case 7:
                        return l("sevenprize");
                    case 8:
                        return l("eightprize")
                }
            }
            const f = () => {
                    c.value--, u()
                },
                C = T => {
                    p.value == T ? p.value = -1 : p.value = T
                },
                h = () => {
                    c.value++, u()
                };
            return i({
                getData: u
            }), ke(() => {
                p.value = -1
            }), (T, z) => {
                var S, I;
                const y = H("van-col"),
                    v = H("van-row"),
                    N = H("van-icon");
                return n(), a("div", j4, [t("div", H4, [L(v, null, {
                    default: M(() => [L(y, {
                        span: "8"
                    }, {
                        default: M(() => [O(e(T.$t("betSerial")), 1)]),
                        _: 1
                    }), L(y, {
                        span: "10"
                    }, {
                        default: M(() => [O(e(T.$t("result")), 1)]),
                        _: 1
                    }), L(y, {
                        span: "6"
                    }, {
                        default: M(() => [O(e(T.$t("time")), 1)]),
                        _: 1
                    })]),
                    _: 1
                })]), t("div", W4, [(S = g.value) != null && S.length ? (n(!0), a(R, {
                    key: 0
                }, A(g.value, (x, B) => (n(), it(v, {
                    key: B,
                    onClick: D => C(B)
                }, {
                    default: M(() => [L(y, {
                        span: "8"
                    }, {
                        default: M(() => [t("div", V4, e(x.issueNumber), 1)]),
                        _: 2
                    }, 1024), L(y, {
                        span: "10",
                        class: "c-row c-row-middle-center"
                    }, {
                        default: M(() => [t("div", F4, [t("div", U4, [x.openingResult ? (n(!0), a(R, {
                            key: 0
                        }, A(x.openingResult[0].result, (D, P) => (n(), a("div", {
                            class: "li circle-black c-row c-row-middle-center c-tc",
                            key: P
                        }, [t("div", null, e(D), 1)]))), 128)) : $("v-if", !0)])])]),
                        _: 2
                    }, 1024), L(y, {
                        span: "6"
                    }, {
                        default: M(() => [t("div", K4, [T.gVSs == "1" ? (n(), a("div", X4, e(x.openingTime.substr(0, 10)), 1)) : (n(), a("div", Q4, e(x.openingTime), 1))])]),
                        _: 2
                    }, 1024), B == p.value ? (n(), a("div", J4, [x.openingResult ? (n(), a("div", Y4, [(n(!0), a(R, null, A(b(x.openingResult), (D, P) => (n(), a("div", {
                        class: G([`selectItem${D.resultType}`, "prize"]),
                        key: P
                    }, [t("div", Z4, e(w(D.resultType)), 1), [0, 1, 2].includes(D.resultType) ? (n(), a("div", t8, "|")) : $("v-if", !0), t("div", e8, [t("span", i8, e(_(D.result)), 1)])], 2))), 128))])) : $("v-if", !0)])) : $("v-if", !0)]),
                    _: 2
                }, 1032, ["onClick"]))), 128)) : (n(), a("div", n8, [L(pe)]))]), (I = g.value) != null && I.length ? (n(), a("div", a8, [t("div", {
                    class: G(["GameRecord__C-foot-previous", {
                        disabled: c.value <= 1
                    }]),
                    onClick: f
                }, [L(N, {
                    name: "arrow-left",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2), t("div", o8, e(c.value) + "/" + e(m.value), 1), t("div", {
                    class: G(["GameRecord__C-foot-next", {
                        disabled: c.value >= m.value
                    }]),
                    onClick: h
                }, [L(N, {
                    name: "arrow",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2)])) : $("v-if", !0)])
            }
        }
    });
const l8 = F(s8, [
        ["__scopeId", "data-v-68c3df62"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/NewVietnam/GameRecord.vue"]
    ]),
    c8 = s => ($t("data-v-56cdb7a2"), s = s(), wt(), s),
    r8 = {
        class: "MyGameRecordList__C"
    },
    u8 = ["onClick"],
    d8 = {
        class: "box"
    },
    p8 = {
        class: "time"
    },
    g8 = {
        key: 0,
        class: "state state0"
    },
    b8 = {
        key: 1,
        class: "state state3"
    },
    m8 = {
        key: 2,
        class: "state state4"
    },
    _8 = {
        key: 3,
        class: "state state2"
    },
    v8 = {
        key: 4,
        class: "state state5"
    },
    k8 = {
        key: 5,
        class: "state state1"
    },
    h8 = {
        key: 0,
        class: "info"
    },
    f8 = {
        class: "order"
    },
    y8 = {
        key: 0,
        class: "li"
    },
    $8 = {
        class: "lab"
    },
    w8 = ["onClick"],
    T8 = {
        key: 1,
        class: "li"
    },
    C8 = {
        class: "lab"
    },
    L8 = {
        class: "sub"
    },
    N8 = {
        class: "li"
    },
    z8 = {
        class: "lab"
    },
    I8 = {
        key: 0,
        class: "sub"
    },
    S8 = {
        key: 1,
        class: "sub"
    },
    x8 = {
        key: 2,
        class: "li"
    },
    R8 = {
        class: "lab"
    },
    B8 = {
        class: "sub"
    },
    G8 = {
        class: "li"
    },
    A8 = {
        class: "lab"
    },
    M8 = {
        class: "sub"
    },
    P8 = {
        class: "li"
    },
    D8 = {
        class: "lab"
    },
    O8 = {
        class: "sub"
    },
    E8 = {
        class: "li"
    },
    q8 = {
        class: "lab"
    },
    j8 = {
        class: "sub"
    },
    H8 = {
        class: "li"
    },
    W8 = {
        class: "lab"
    },
    V8 = {
        class: "sub"
    },
    F8 = {
        class: "li"
    },
    U8 = {
        class: "lab"
    },
    K8 = {
        class: "sub"
    },
    X8 = c8(() => t("div", {
        class: "line"
    }, [t("p")], -1)),
    Q8 = {
        class: "bet"
    },
    J8 = {
        class: "li betNum"
    },
    Y8 = {
        class: "lab"
    },
    Z8 = {
        key: 0,
        class: "txt"
    },
    t7 = {
        key: 1,
        class: "txt"
    },
    e7 = {
        key: 2,
        class: "txt"
    },
    i7 = {
        key: 3,
        class: "betList select"
    },
    n7 = {
        key: 4,
        class: "betList select"
    },
    a7 = {
        class: "li"
    },
    o7 = {
        class: "lab"
    },
    s7 = {
        key: 0,
        class: "state state0"
    },
    l7 = {
        key: 1,
        class: "state state3"
    },
    c7 = {
        key: 2,
        class: "state state4"
    },
    r7 = {
        key: 3,
        class: "state state2"
    },
    u7 = {
        key: 4,
        class: "state state5"
    },
    d7 = {
        key: 5,
        class: "state state1"
    },
    p7 = {
        class: "li"
    },
    g7 = {
        class: "lab"
    },
    b7 = {
        key: 0,
        class: "sub success"
    },
    m7 = {
        key: 1,
        class: "sub fail"
    },
    _7 = {
        key: 2,
        class: "sub"
    },
    v7 = {
        key: 0,
        class: "li"
    },
    k7 = {
        class: "lab"
    },
    h7 = {
        class: "sub"
    },
    f7 = {
        key: 1,
        class: "li"
    },
    y7 = {
        class: "lab"
    },
    $7 = {
        class: "sub"
    },
    w7 = {
        key: 0
    },
    T7 = ["onClick"],
    C7 = {
        key: 1,
        class: "result"
    },
    L7 = {
        key: 0,
        class: "txt"
    },
    N7 = {
        key: 1,
        class: "txt"
    },
    z7 = {
        key: 2,
        class: "txt"
    },
    I7 = {
        key: 3,
        class: "txt"
    },
    S7 = {
        key: 4,
        class: "txt"
    },
    x7 = {
        key: 5,
        class: "txt"
    },
    R7 = {
        key: 6,
        class: "txt"
    },
    B7 = {
        key: 7,
        class: "txt"
    },
    G7 = {
        key: 8,
        class: "txt"
    },
    A7 = {
        class: "num"
    },
    M7 = V({
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
        setup(s, {
            emit: i
        }) {
            const {
                t: o
            } = kt(), l = k(-1), g = T => {
                l.value === T ? l.value = -1 : l.value = T
            }, m = k(!1), r = k(""), c = async () => {
                await at(zs({
                    orderId: r.value
                })) && (m.value = !1, ln(o("xosoTxt96")), i("click-cance"))
            }, p = T => {
                r.value = T, m.value = !0
            }, u = Ns(c, 1e3), b = T => {
                for (var z = [], y = 0; y < T.length; y++) {
                    var v = z.findIndex(function(N) {
                        return N.resultType === T[y].resultType
                    });
                    v !== -1 ? z[v].result.push("-" + T[y].result) : z.push({
                        resultType: T[y].resultType,
                        result: [T[y].result]
                    })
                }
                return z
            }, _ = T => {
                const z = w(T);
                return f(z)
            }, w = T => {
                let z = [];
                if (T.includes(",")) {
                    let y = T.split(","),
                        v = {};
                    for (let N = 0; y.length > N; N++) v = y[N].split("|"), z.push(v);
                    return z
                }
                return T
            }, f = T => {
                let z = T[0],
                    y = T[1],
                    v = [];
                for (let S = 0; z.length > S; S++)
                    for (let I = 0; y.length > I; I++) v.push(z[S] + y[I]);
                let N = T.slice(2);
                return N.length > 0 ? f([v, ...N]) : v
            }, C = T => {
                if (T != null) {
                    let z = T.split(",");
                    if (z.length > 0) return z
                }
                return []
            }, h = T => {
                const z = {
                    大: o("big"),
                    小: o("small"),
                    单: o("odd"),
                    双: o("xosoTxt70")
                };
                return z[T] ? z[T].replace(/\|/g, ",") : T.replace(/\|/g, ",")
            };
            return Nt(() => {}), (T, z) => {
                const y = H("svg-icon");
                return n(), a("div", r8, [(n(!0), a(R, null, A(T.mayrecord, (v, N) => (n(), a("div", {
                    class: G(l.value === N ? "item active" : "item"),
                    key: v,
                    onClick: S => g(N)
                }, [t("div", d8, [t("div", null, [t("h4", null, e(d(o)("code" + v.bettingParentTypeNameCode)), 1), t("span", p8, e(v.createTime), 1)]), v.status === 1 ? (n(), a("div", g8, [t("p", null, e(d(o)("bettingResultState1")), 1)])) : $("v-if", !0), v.status === 3 ? (n(), a("div", b8, [t("p", null, e(d(o)("hasWon")), 1), t("span", null, "+" + e(v.winningAmount), 1)])) : $("v-if", !0), v.status === 2 ? (n(), a("div", m8, [t("p", null, e(d(o)("bettingResultState3")), 1), t("span", null, "-" + e(v.realBettingAmount), 1)])) : $("v-if", !0), v.status === 4 ? (n(), a("div", _8, [t("p", null, e(d(o)("xosoTxt74")), 1)])) : $("v-if", !0), v.status === 5 ? (n(), a("div", v8, [t("p", null, e(d(o)("xosoTxt75")), 1)])) : $("v-if", !0), v.status === 6 ? (n(), a("div", k8, [t("p", null, e(d(o)("xosoTxt76")), 1)])) : $("v-if", !0)]), l.value === N ? (n(), a("div", h8, [t("div", f8, [v.orderNo ? (n(), a("div", y8, [t("div", $8, e(d(o)("orderNo")), 1), t("div", {
                    class: "sub",
                    onClick: re(S => d(Ve)(v.orderNo), ["stop"])
                }, [O(e(v.orderNo) + " ", 1), L(y, {
                    name: "copy"
                })], 8, w8)])) : $("v-if", !0), v.issueNo ? (n(), a("div", T8, [t("div", C8, e(d(o)("betIssue")), 1), t("div", L8, e(v.issueNo), 1)])) : $("v-if", !0), t("div", N8, [t("div", z8, e(d(o)("area")), 1), T.gVSs == "1" ? (n(), a("div", I8, e(d(o)("code" + v.areNameCode)), 1)) : T.gVSs == "2" ? (n(), a("div", S8, e(d(o)("code" + v.typeCode)), 1)) : $("v-if", !0)]), T.gVSs == "1" ? (n(), a("div", x8, [t("div", R8, e(d(o)("xosoTxt77")), 1), t("div", B8, e(d(o)("code" + v.nameCode)), 1)])) : $("v-if", !0), t("div", G8, [t("div", A8, e(d(o)("gamePlay")), 1), t("div", M8, e(d(o)("code" + v.bettingParentTypeNameCode)), 1)]), t("div", P8, [t("div", D8, e(d(o)("xosoTxt78")), 1), t("div", O8, e(d(o)("code" + v.bettingTypeNameCode)), 1)]), t("div", E8, [t("div", q8, e(d(o)("amountMay")), 1), t("div", j8, e(v.amount), 1)]), t("div", H8, [t("div", W8, e(d(o)("multiple")), 1), t("div", V8, e(v.bettingMultiple), 1)]), t("div", F8, [t("div", U8, e(d(o)("xosoTxt79")), 1), t("div", K8, e(v.totalBetting) + " " + e(d(o)("note")), 1)]), $(` <div class="li" v-if="item.realBettingAmount">
						<div class="lab">{{ $t('afterTaxAmount') }}</div>
						<div class="sub">{{ item.realBettingAmount }}</div>
					</div>
					<div class="li" v-if="item.serviceCharge">
						<div class="lab">{{ $t('tax') }}</div>
						<div class="sub">{{ item.serviceCharge }}</div>
					</div> `)]), X8, t("div", Q8, [t("div", J8, [t("div", Y8, [O(e(d(o)("bettingnumber")), 1), v.bettingFormat === 1 ? (n(), a("span", Z8, "(" + e(d(o)("selectNo")) + ")", 1)) : $("v-if", !0), v.bettingFormat === 2 ? (n(), a("span", t7, "(" + e(d(o)("xosoTxt80")) + ")", 1)) : $("v-if", !0), v.bettingFormat === 3 ? (n(), a("span", e7, "(" + e(d(o)("xosoTxt81")) + ")", 1)) : $("v-if", !0), $(" 选择号码 "), v.bettingFormat == 1 ? (n(), a("div", i7, [(n(!0), a(R, null, A(_(v.bettingContent), (S, I) => (n(), a("span", {
                    class: G({
                        active: C(v.winningNum).includes(S)
                    }),
                    key: I
                }, e(S), 3))), 128))])) : (n(), a("div", n7, [(n(!0), a(R, null, A(v.bettingContent.split(","), (S, I) => (n(), a("span", {
                    class: G({
                        active: C(v.winningNum).includes(S)
                    }),
                    key: I
                }, e(h(S)), 3))), 128))]))])]), t("div", a7, [t("div", o7, e(d(o)("statusMay")), 1), v.status === 1 ? (n(), a("div", s7, [t("p", null, e(d(o)("bettingResultState1")), 1)])) : $("v-if", !0), v.status === 3 ? (n(), a("div", l7, [t("p", null, e(d(o)("hasWon")), 1)])) : $("v-if", !0), v.status === 2 ? (n(), a("div", c7, [t("p", null, e(d(o)("bettingResultState3")), 1)])) : $("v-if", !0), v.status === 4 ? (n(), a("div", r7, [t("p", null, e(d(o)("xosoTxt74")), 1)])) : $("v-if", !0), v.status === 5 ? (n(), a("div", u7, [t("p", null, e(d(o)("xosoTxt75")), 1)])) : $("v-if", !0), v.status === 6 ? (n(), a("div", d7, [t("p", null, e(d(o)("xosoTxt76")), 1)])) : $("v-if", !0)]), t("div", p7, [t("div", g7, e(d(o)("winOrLose")), 1), v.status === 3 ? (n(), a("div", b7, " +" + e(v.winningAmount), 1)) : v.status === 2 ? (n(), a("div", m7, " -" + e(v.realBettingAmount), 1)) : (n(), a("div", _7, "---"))]), v.createTime ? (n(), a("div", v7, [t("div", k7, e(d(o)("createTime")), 1), t("div", h7, e(v.createTime), 1)])) : $("v-if", !0), v.openingTime ? (n(), a("div", f7, [t("div", y7, e(d(o)("winTrxTime")), 1), t("div", $7, e(v.openingTime), 1)])) : $("v-if", !0)]), v.issueNoStatus === 1 && v.status === 1 && T.gVSs == "1" ? (n(), a("div", w7, [t("div", {
                    class: "btn",
                    onClick: re(S => p(v.id), ["stop"])
                }, e(d(o)("xosoTxt82")), 9, T7)])) : $("v-if", !0), $(" 开奖结果 "), v.openingResult ? (n(), a("div", C7, [(n(!0), a(R, null, A(b(v.openingResult), (S, I) => (n(), a("div", {
                    class: G(I < 3 ? "result-item jusb" : "result-item"),
                    key: I
                }, [S.resultType == 0 ? (n(), a("div", L7, e(d(o)("GrandPrize")), 1)) : $("v-if", !0), S.resultType == 1 ? (n(), a("div", N7, e(d(o)("firstprize")), 1)) : $("v-if", !0), S.resultType == 2 ? (n(), a("div", z7, e(d(o)("secondprize")), 1)) : $("v-if", !0), S.resultType == 3 ? (n(), a("div", I7, e(d(o)("thirdprize")), 1)) : $("v-if", !0), S.resultType == 4 ? (n(), a("div", S7, e(d(o)("fourprize")), 1)) : $("v-if", !0), S.resultType == 5 ? (n(), a("div", x7, e(d(o)("fiveprize")), 1)) : $("v-if", !0), S.resultType == 6 ? (n(), a("div", R7, e(d(o)("sixprize")), 1)) : $("v-if", !0), S.resultType == 7 ? (n(), a("div", B7, e(d(o)("sevenprize")), 1)) : $("v-if", !0), S.resultType == 8 ? (n(), a("div", G7, e(d(o)("eightprize")), 1)) : $("v-if", !0), t("div", A7, [(n(!0), a(R, null, A(S.result, (x, B) => (n(), a("span", {
                    key: B
                }, e(x), 1))), 128))])], 2))), 128))])) : $("v-if", !0)])) : $("v-if", !0)], 10, u8))), 128)), L(xe, {
                    show: m.value,
                    "onUpdate:show": z[0] || (z[0] = v => m.value = v),
                    title: d(o)("xosoTxt99"),
                    onConfirm: d(u)
                }, null, 8, ["show", "title", "onConfirm"])])
            }
        }
    });
const P7 = F(M7, [
        ["__scopeId", "data-v-56cdb7a2"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/NewVietnam/MyRecordList.vue"]
    ]),
    D7 = {
        class: "MyGameRecord__C"
    },
    O7 = {
        class: "MyGameRecord__C-body"
    },
    E7 = {
        key: 0,
        class: "MyGameRecord__C-head"
    },
    q7 = {
        key: 2,
        class: "MyGameRecord__C-body-empty"
    },
    j7 = {
        key: 0,
        class: "MyGameRecord__C-foot"
    },
    H7 = {
        class: "MyGameRecord__C-foot-page"
    },
    W7 = V({
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
        setup(s, {
            expose: i
        }) {
            const o = s,
                l = dt(),
                g = k(0),
                m = k(10),
                r = k(1),
                c = k([]),
                p = async () => {
                    var z, y, v;
                    const h = u(o.parmas);
                    (o == null ? void 0 : o.gVSs) == "2" && (o != null && o.areId && (h.areId = o == null ? void 0 : o.areId), o != null && o.cityCode && (h.typeId = Number(o == null ? void 0 : o.cityCode)));
                    const T = await at(o.ApiFun({
                        pageSize: m.value,
                        pageNo: r.value,
                        ...h
                    }));
                    T && (c.value = ((z = T.data) == null ? void 0 : z.list) || [], g.value = ((y = T.data) == null ? void 0 : y.totalPage) || 0, r.value = (v = T.data) == null ? void 0 : v.pageNo)
                };

            function u(h) {
                const T = {};
                for (const z in h) h[z] !== "" && (T[z] = h[z]);
                return T
            }
            const b = () => {
                    p()
                },
                _ = Y(() => o.gVSs == "1" ? "AllLotteryGames-XoSoRecord" : o.gVSs == "2" ? "AllLotteryGames-XoSoRecordF" : ""),
                w = h => {
                    l.push({
                        name: h,
                        query: {
                            areId: o.areId,
                            typeId: o.cityCode
                        }
                    })
                },
                f = () => {
                    r.value--, p()
                },
                C = () => {
                    r.value++, p()
                };
            return i({
                getData: p
            }), ke(() => {
                p()
            }), (h, T) => {
                var y, v;
                const z = H("van-icon");
                return n(), a("div", D7, [t("div", O7, [h.hasHead ? (n(), a("div", E7, [t("div", {
                    class: "MyGameRecord__C-head-moreB",
                    onClick: T[0] || (T[0] = N => w(_.value || ""))
                }, e(h.$t("more")), 1)])) : $("v-if", !0), (y = c.value) != null && y.length ? (n(), it(P7, {
                    key: 1,
                    mayrecord: c.value,
                    onClickCance: b,
                    gVSs: h.gVSs
                }, null, 8, ["mayrecord", "gVSs"])) : (n(), a("div", q7, [L(pe)]))]), (v = c.value) != null && v.length ? (n(), a("div", j7, [t("div", {
                    class: G(["MyGameRecord__C-foot-previous", {
                        disabled: r.value <= 1
                    }]),
                    onClick: f
                }, [L(z, {
                    name: "arrow-left",
                    class: "MyGameRecord__C-icon",
                    size: "20"
                })], 2), t("div", H7, e(r.value) + "/" + e(g.value), 1), t("div", {
                    class: G(["MyGameRecord__C-foot-next", {
                        disabled: r.value >= g.value
                    }]),
                    onClick: C
                }, [L(z, {
                    name: "arrow",
                    class: "MyGameRecord__C-icon",
                    size: "20"
                })], 2)])) : $("v-if", !0)])
            }
        }
    });
const Tn = F(W7, [
        ["__scopeId", "data-v-44e97c4d"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/NewVietnam/MyGameRecord.vue"]
    ]),
    V7 = {
        key: 0,
        class: "WinningTip__C-body-l1 isL"
    },
    F7 = {
        key: 1,
        class: "WinningTip__C-body-l1"
    },
    U7 = {
        key: 2,
        class: "notwinning"
    },
    K7 = {
        key: 3,
        class: "WinningTip__C-body-l2"
    },
    X7 = {
        key: 4,
        class: "WinningTip__C-body-l5"
    },
    Q7 = {
        class: "WinningTip__C-body-l5-content"
    },
    J7 = {
        class: "balltext"
    },
    Y7 = {
        class: "WinningTip__C-body-l3"
    },
    Z7 = {
        key: 0,
        class: "isLose"
    },
    t9 = {
        class: "head"
    },
    e9 = {
        class: "bonus"
    },
    i9 = {
        class: "gameDetail"
    },
    n9 = {
        class: "gameDetail"
    },
    a9 = {
        class: "WinningTip__C-body-l4"
    },
    o9 = ["onClick"],
    s9 = V({
        __name: "WinningTips",
        setup(s, {
            expose: i
        }) {
            const o = Y(() => m.value[0] ? m.value[0].winningAmount == 0 : !1),
                l = Y(() => m.value[0] || {}),
                g = k(!1),
                m = k([]);
            let r = k();
            const c = () => {
                clearTimeout(r.value), m.value.shift(), g.value && m.value.length && (r.value = setTimeout(() => {
                    c()
                }, 1e3 * 3))
            };
            Mt(() => m.value.length, _ => {
                _ ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
            });
            const p = () => {
                    g.value = !g.value, g.value ? r.value = setTimeout(() => {
                        c()
                    }, 1e3 * 3) : clearTimeout(r.value)
                },
                u = _ => {
                    m.value.push(_), g.value && (r.value = setTimeout(() => {
                        c()
                    }, 1e3 * 3))
                },
                b = () => {
                    m.value = []
                };
            return i({
                showMark: u
            }), (_, w) => vt((n(), a("div", {
                class: "WinningTip__C",
                onClick: c
            }, [t("div", {
                class: G(["WinningTip__C-body", {
                    isL: o.value
                }])
            }, [o.value ? (n(), a("div", V7, e(_.$t("k3WarningTip1")), 1)) : $("v-if", !0), o.value ? $("v-if", !0) : (n(), a("div", F7, e(_.$t("k3WarningTip2")), 1)), o.value ? (n(), a("div", U7)) : $("v-if", !0), o.value ? $("v-if", !0) : (n(), a("div", K7, e(_.$t("code" + l.value.bettingParentTypeNameCode)) + "/" + e(_.$t("code" + l.value.bettingTypeNameCode)), 1)), o.value ? $("v-if", !0) : (n(), a("div", X7, [t("div", Q7, [(n(!0), a(R, null, A(l.value.openingResult, (f, C) => (n(), a("div", {
                class: "ball",
                key: C
            }, [t("div", J7, e(f), 1)]))), 128))])])), t("div", Y7, [o.value ? (n(), a("div", Z7, e(_.$t("winTips4")), 1)) : $("v-if", !0), o.value ? $("v-if", !0) : (n(), a(R, {
                key: 1
            }, [t("div", t9, e(_.$t("winTips5")), 1), t("div", e9, e(d(Lt)(l.value.winningAmount)), 1)], 64)), t("div", i9, e(_.$t(`code${l.value.typeCode}`)), 1), t("div", n9, e(_.$t("winTips6")) + e(l.value.issueNo), 1)]), t("div", a9, [t("div", {
                class: G(["acitveBtn", {
                    active: g.value
                }]),
                onClick: re(p, ["stop"])
            }, null, 10, o9), O(" " + e(_.$t("autoShutOff3s")), 1)]), t("div", {
                class: "closeBtn",
                onClick: b
            })], 2)], 512)), [
                [Qt, m.value.length]
            ])
        }
    });
const l9 = F(s9, [
        ["__scopeId", "data-v-eb0f5940"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/NewVietnam/WinningTips.vue"]
    ]),
    Cn = s => ($t("data-v-b1e14027"), s = s(), wt(), s),
    c9 = {
        class: "NewVietnam__C"
    },
    r9 = Cn(() => t("div", {
        class: "bottombg"
    }, null, -1)),
    u9 = {
        class: "box p-l-10 p-r-10 p-t-10 p-b-10"
    },
    d9 = ["src"],
    p9 = {
        class: "title c-tc"
    },
    g9 = {
        key: 0,
        class: "titlebets c-tc border60"
    },
    b9 = {
        class: "box"
    },
    m9 = {
        class: "c-row"
    },
    _9 = {
        key: 2,
        class: G("c-row c-flex-warp compound")
    },
    v9 = {
        key: 0,
        class: "item"
    },
    k9 = {
        class: "title"
    },
    h9 = {
        class: "numcontainer"
    },
    f9 = {
        key: 1,
        class: "item"
    },
    y9 = {
        class: "title"
    },
    $9 = {
        class: "numcontainer"
    },
    w9 = {
        key: 2,
        class: "item"
    },
    T9 = {
        class: "title"
    },
    C9 = {
        class: "numcontainer"
    },
    L9 = {
        key: 3,
        class: "item"
    },
    N9 = {
        class: "title"
    },
    z9 = {
        class: "numcontainer"
    },
    I9 = {
        key: 4,
        class: "item"
    },
    S9 = {
        class: "numcontainer"
    },
    x9 = {
        class: "popup-info"
    },
    R9 = {
        class: "popup-info-item c-row c-row-between"
    },
    B9 = {
        class: "tit"
    },
    G9 = {
        class: "c-row c-row-between stepper-box"
    },
    A9 = {
        class: "popup-info-item c-row c-flew-end"
    },
    M9 = {
        class: "c-row multiple-box"
    },
    P9 = ["onClick"],
    D9 = {
        class: "c-row c-row-between c-row-middle quantity"
    },
    O9 = {
        class: "c-row c-row-middle-center"
    },
    E9 = Cn(() => t("span", {
        class: "line"
    }, "|", -1)),
    q9 = {
        class: "num"
    },
    j9 = {
        class: "c-row c-row-middle-center"
    },
    H9 = Cn(() => t("span", {
        class: "line"
    }, "|", -1)),
    W9 = {
        class: "num"
    },
    V9 = {
        class: "wallet c-row c-row-between c-row-middle"
    },
    F9 = {
        class: "txt c-row"
    },
    U9 = {
        class: "num c-row c-row-middle"
    },
    K9 = {
        class: "balance c-row c-row-middle"
    },
    X9 = {
        class: "txt"
    },
    Q9 = {
        class: "num yellow"
    },
    J9 = {
        key: 0,
        class: "wallet c-row c-row-between c-row-middle"
    },
    Y9 = {
        class: "txt c-row bg7172"
    },
    Z9 = ["src"],
    tL = {
        class: "popup-info-item c-row c-row-middle"
    },
    eL = {
        class: "agree p-r-15"
    },
    iL = {
        class: "popup-btn c-row c-row-between"
    },
    nL = {
        class: "left"
    },
    aL = {
        class: "right"
    },
    oL = {
        class: ""
    },
    sL = {
        class: "areList"
    },
    lL = ["src"],
    cL = {
        class: "itemsC"
    },
    rL = ["onClick"],
    uL = {
        class: "PreSale"
    },
    dL = {
        class: "head"
    },
    pL = {
        class: "body"
    },
    gL = {
        class: "foot"
    },
    bL = ["src"],
    mL = ["src"],
    _L = {
        class: "font36"
    },
    vL = {
        class: "tipMsg"
    },
    kL = V({
        __name: "index",
        setup(s) {
            var Mn, Pn;
            const i = dt(),
                o = sn(),
                {
                    t: l
                } = kt(),
                g = k(!1),
                m = Y(() => {
                    var E, j;
                    return _.value ? (E = _.value) == null ? void 0 : E.type : (j = o.query) == null ? void 0 : j.type
                }),
                r = k(i.currentRoute.value.query.nameCode),
                c = k(Number((Mn = o.query) == null ? void 0 : Mn.areId) || 1),
                p = Y(() => r.value ? l("code" + r.value) : ""),
                u = k((Pn = o.query) == null ? void 0 : Pn.code),
                b = k(),
                _ = k(),
                w = Wt({
                    bettingParentType: "",
                    areId: "",
                    startDate: "",
                    endDate: ""
                }),
                f = new Date,
                C = `${me(f).format("YYYY-MM-DD")} 00:00:00`,
                h = `${me(f).format("YYYY-MM-DD")} 23:59:59`;
            w.startDate = C, w.endDate = h;
            const T = k(!1),
                z = k([]),
                y = k([]),
                v = k({}),
                N = k(0),
                S = k(1),
                I = k(0),
                x = k(1),
                B = k(1),
                D = k(""),
                P = k(""),
                q = k("00:00:00"),
                X = k(1.995),
                lt = k(1),
                gt = k([]),
                rt = k(0),
                J = k(""),
                Q = k(1),
                st = k(""),
                Rt = k([]),
                At = k(0),
                ot = k(0),
                yt = k(0),
                Tt = k(0),
                Bt = k(""),
                Gt = k(),
                _t = k(1e3),
                nt = k([]),
                ct = k([]),
                Z = k([]),
                tt = k([]),
                W = k([]),
                Ct = k([]),
                Et = k("1000"),
                ie = k(1),
                Le = k(!1),
                ue = Y(() => !(Ae.value > ei.value || Jt.value <= 0)),
                Ne = k(["000/099", "100/199", "200/299", "300/399", "400/499", "500/599", "600/699", "700/799", "800/899", "900/999"]),
                ht = k("000/099"),
                ze = k(0),
                Ge = k(!1),
                Ie = k(1),
                We = k(1),
                It = k(0),
                he = k(0),
                ti = k(0),
                fe = k("GameRecord"),
                Hi = {
                    GameRecord: l8,
                    MyGameRecord: Tn
                },
                Jt = k(1),
                Ci = k(),
                Ut = k(!1),
                _i = k(!0),
                Ae = k(0),
                ei = k(0),
                Ee = k(0),
                ii = k(!1),
                U = k(),
                et = k(!1),
                bt = k(""),
                zt = k(""),
                jt = Y(() => {
                    if (m.value == "1") return Ca;
                    if (m.value == "2") return La
                }),
                Pt = E => {
                    const j = String(Math.floor(Vt.value % 3600 / 60)).padStart(2, "0"),
                        K = String(Vt.value % 60).padStart(2, "0");
                    return `${j}:${K}`
                },
                Vt = k(),
                qt = k(null),
                Yt = k("00:00"),
                se = k(!1),
                qe = () => {
                    qt.value = setInterval(() => {
                        Vt.value <= 0 ? (Yt.value = "00:00", setTimeout(() => {
                            se.value = !0
                        }, 500), clearInterval(qt.value), Me(), setTimeout(() => {
                            ai(!0)
                        }, 5e3)) : (se.value = !1, Yt.value = Pt(Vt.value), Vt.value--)
                    }, 1e3)
                },
                de = k(null),
                vi = (E, j) => {
                    clearInterval(Ee.value), Le.value = !1, Ee.value = (j - E) / 1e3, de.value = setInterval(() => {
                        if (Ee.value <= 0) clearInterval(de.value), q.value = "00:00:00", Le.value = !0;
                        else {
                            const K = String(Math.floor(Ee.value / 3600)).padStart(2, "0"),
                                pt = String(Math.floor(Ee.value % 3600 / 60)).padStart(2, "0"),
                                ft = String(Ee.value % 60).padStart(2, "0");
                            q.value = K + ":" + pt + ":" + ft, Ee.value--
                        }
                    }, 1e3)
                };

            function ni() {
                _.value || (ve({
                    message: l("xosoTip5"),
                    wordBreak: "break-word"
                }), setTimeout(function() {
                    An("AllLotteryGames-XoSo")
                }, 2e3))
            }
            const Me = async () => {
                let E;
                if (m.value == "1") {
                    const ft = me(o.query.day).format("YYYY-MM-DD HH:mm:ss");
                    E = await at(wa({
                        dateTime: ft
                    }))
                } else m.value == "2" && (E = await at(Ta({
                    are: c.value,
                    typeId: Number(u.value)
                })));
                E.data.length == 0 && ni();
                let j = E.data.find(ft => ft.day == o.query.day);
                P.value = j.day;
                let K = j.areInfos.find(ft => (ft == null ? void 0 : ft.areId) == c.value);
                const pt = K == null ? void 0 : K.serverTime;
                if (_.value = K.areIssueNos.find(ft => ft.code == u.value), _.value || ni(), m.value == "1") {
                    const ft = K == null ? void 0 : K.closingTime;
                    clearInterval(de.value), vi(new Date(pt.replace(/-/g, "/")).getTime(), new Date(ft.replace(/-/g, "/")).getTime())
                } else m.value == "2" && (Vt.value = (new Date(_.value.endTime.replace(/-/g, "/")).getTime() - new Date(pt.replace(/-/g, "/")).getTime()) / 1e3, clearInterval(qt.value), qe())
            };
            let je = null;
            const Li = k(""),
                Nn = k(),
                ai = async (E = !1) => {
                    var pt, ft, Ft, Kt, ge, be, mt, St;
                    if (g.value || m.value != "2") return;
                    let j, K = !0;
                    if (fe.value === "GameRecord") {
                        if (j = await at($a({
                                pageSize: 10,
                                pageNo: 1,
                                areId: c.value,
                                typeId: Number(u.value)
                            })), j) {
                            if (((ft = (pt = j.data) == null ? void 0 : pt.list) == null ? void 0 : ft.length) > 0 && (Li.value.trim().length == 0 || Li.value != ((Kt = (Ft = j.data) == null ? void 0 : Ft.list[0]) == null ? void 0 : Kt.issueNumber)) && (K = !1, Li.value = (be = (ge = j.data) == null ? void 0 : ge.list[0]) == null ? void 0 : be.issueNumber), K == !0 && E) {
                                clearTimeout(je), je = setTimeout(() => {
                                    ai(!0)
                                }, 1e3);
                                return
                            }
                            v.value = (mt = j.data) == null ? void 0 : mt.list[0], Nn.value = j.data, Zt(() => {
                                U.value.getData(!1, Nn.value)
                            })
                        }
                    } else if (fe.value === "MyGameRecord" && (j = await at(Is({
                            areId: c.value,
                            typeId: Number(u.value)
                        })), j && j.data && j.data.openingResult && j.data.openingResult.length > 0 && (K = !1, Li.value = (St = j.data) == null ? void 0 : St.issueNumber, v.value = j.data), K == !0 && E)) {
                        clearTimeout(je), je = setTimeout(() => {
                            ai(!0)
                        }, 1e3);
                        return
                    }
                };

            function Ya() {
                let E = JSON.parse(sessionStorage.getItem("xosoList") || ""),
                    j = [];
                for (let K = 0; K < E.areInfos.length; K++) j.push({
                    text: l("code" + E.areInfos[K].areNameCode),
                    value: E.areInfos[K].areId,
                    disabled: !0,
                    info: E.areInfos[K].areIssueNos
                });
                z.value = j
            }

            function Za(E, j) {
                var K;
                if (u.value == E.code) {
                    Ge.value = !1;
                    return
                }
                Ki(), c.value = j, r.value = E.nameCode, u.value = E.code, N.value = 0, I.value = 0, S.value = y.value.length > 0 ? (K = y == null ? void 0 : y.value[0]) == null ? void 0 : K.categoryId : 1, Ge.value = !1, to(E, j), _.value = E, E.type == "2" && (Le.value = !1, ai()), Me(), zn(), Zt(() => {
                    fe.value === "MyGameRecord" && U.value.getData(!0)
                })
            }

            function to(E, j) {
                const K = Ho("hash");
                K.code = E == null ? void 0 : E.code, K.nameCode = E == null ? void 0 : E.nameCode, K.type = E == null ? void 0 : E.type, K.areId = j
            }
            const zn = async () => {
                    var j, K, pt, ft, Ft, Kt, ge, be;
                    In(), ne();
                    let E;
                    m.value == "1" ? E = await at(Ss({
                        areaId: c.value
                    })) : m.value == "2" && (E = await at(xs({
                        areaId: c.value,
                        typeId: Number(u.value)
                    }))), E && (y.value = (K = (j = E.data) == null ? void 0 : j.areaConfigList[0]) == null ? void 0 : K.gameCategoryList, localStorage.setItem("gameCategoryList", JSON.stringify((pt = E.data.areaConfigList[0]) == null ? void 0 : pt.gameCategoryList)), D.value = (Ft = (ft = y == null ? void 0 : y.value[0]) == null ? void 0 : ft.gamePlayList[0]) == null ? void 0 : Ft.playNameCode, x.value = (ge = (Kt = y == null ? void 0 : y.value[0]) == null ? void 0 : Kt.gamePlayList[0]) == null ? void 0 : ge.playId, S.value = (be = y == null ? void 0 : y.value[0]) == null ? void 0 : be.categoryId, Wi())
                },
                eo = (E, j) => {
                    ne(), N.value = j, S.value = E, I.value = 0, x.value = y == null ? void 0 : y.value[j].gamePlayList[0].playId, B.value = y.value[j].gamePlayList[0].betType, D.value = y.value[j].gamePlayList[0].playNameCode, ze.value = 0, Wi()
                },
                io = (E, j, K, pt) => {
                    I.value = j, x.value = E, D.value = K, B.value = Number(pt), ze.value = 0, Wi(), ne()
                },
                Wi = async () => {
                    var j, K, pt, ft, Ft, Kt, ge, be, mt, St, ae, xt, Xi, Dn, On, En, qn, jn, Hn, Wn, Vn;
                    In();
                    let E;
                    m.value == "1" ? E = await at(Rs({
                        areaId: c.value,
                        categoryId: S.value,
                        playId: x.value
                    })) : m.value == "2" && (E = await at(Bs({
                        areaId: c.value,
                        categoryId: S.value,
                        playId: x.value
                    }))), J.value = (j = E.data) == null ? void 0 : j.betMethod, st.value = (K = E.data) == null ? void 0 : K.betScopeConfig, At.value = (pt = E.data) == null ? void 0 : pt.isThreeNumber, ot.value = (ft = E.data) == null ? void 0 : ft.betNumber, Bt.value = (Ft = E.data) == null ? void 0 : Ft.fastSpeciaSelectNo, yt.value = (Kt = E.data) == null ? void 0 : Kt.fastRandomType, Tt.value = (ge = E.data) == null ? void 0 : ge.fastSpeciaType, ti.value = (be = E.data) == null ? void 0 : be.playOddInfo.defaultOdds, X.value = (mt = E.data) == null ? void 0 : mt.playOddInfo.oddsOrAmount, It.value = (St = E.data) == null ? void 0 : St.playOddInfo.bettingAmount, Rt.value = (xt = (ae = E.data) == null ? void 0 : ae.fastRandomSelecNo) == null ? void 0 : xt.split(",").map(Number), gt.value = (Dn = (Xi = E.data) == null ? void 0 : Xi.playOddInfo.bettingMultiple) == null ? void 0 : Dn.split(",").map(Number), Jt.value = (En = (On = E.data) == null ? void 0 : On.playOddInfo.bettingMultiple) == null ? void 0 : En.split(",")[0], We.value = (qn = E.data) == null ? void 0 : qn.perBetNumber, S.value == 8 && (Ct.value = (jn = E.data) == null ? void 0 : jn.funPlayOddList), no((Hn = E.data) == null ? void 0 : Hn.betMethod), oo((Wn = E.data) == null ? void 0 : Wn.betNumber), so((Vn = E.data) == null ? void 0 : Vn.isThreeNumber)
                },
                no = E => {
                    E != null && E.includes("1") ? Q.value = 1 : S.value === 4 || S.value === 8 ? Q.value == 1 : Q.value = 3
                },
                ao = (E, j) => {
                    Et.value = E.oddTypeName, ie.value = E.oddsOrAmount, W.value = [Et.value], Ht(3, ot.value)
                },
                oo = E => {
                    E == 10 ? Ie.value = 1 : E == 8 ? Ie.value = 2 : E == 4 ? Ie.value = 3 : E == 3 ? Ie.value = 4 : E == 2 ? Ie.value = 5 : Ie.value = 0
                },
                so = E => {
                    E == 1 && (Gt.value = ht.value.split("/")[0][0].toString())
                },
                In = () => {
                    Q.value = 1, X.value = 0, It.value = 0, gt.value = [], J.value = "", st.value = "", Rt.value = [], At.value = 0, ot.value = 0, Bt.value = "", yt.value = 0, Tt.value = 0, _t.value = 1e3, Gt.value = ""
                },
                ne = () => {
                    nt.value = [], ct.value = [], Z.value = [], tt.value = [], W.value = [], lt.value = 0, Et.value = "1000", Ae.value = 0, he.value = 0, Jt.value = 1, zt.value = "", _t.value = 1e3, Zt(() => {
                        b.value && b.value.cleardata()
                    })
                },
                lo = E => {
                    zt.value = E;
                    let K = E.split(",").flatMap(pt => pt.split("|"));
                    W.value = K.map(String), Ht(Q.value, ot.value)
                },
                co = (E, j, K, pt) => {
                    E == "Thousand" ? pt == "all" ? nt.value = Ni(j, K) : pt == "big" ? nt.value = ye(j, K, "big", 0) : pt == "small" ? nt.value = ye(j, K, "small", 0) : pt == "odd" ? nt.value = $e(j, K, "odd", 0) : nt.value = $e(j, K, "even", 0) : E == "hundred" ? pt == "all" ? ct.value = Ni(j, K) : pt == "big" ? ct.value = ye(j, K, "big", 0) : pt == "small" ? ct.value = ye(j, K, "small", 0) : pt == "odd" ? ct.value = $e(j, K, "odd", 0) : ct.value = $e(j, K, "even", 0) : E == "ten" ? pt == "all" ? Z.value = Ni(j, K) : pt == "big" ? Z.value = ye(j, K, "big", 0) : pt == "small" ? Z.value = ye(j, K, "small", 0) : pt == "odd" ? Z.value = $e(j, K, "odd", 0) : Z.value = $e(j, K, "even", 0) : pt == "all" ? tt.value = Ni(j, K) : pt == "big" ? tt.value = ye(j, K, "big", 0) : pt == "small" ? tt.value = ye(j, K, "small", 0) : pt == "odd" ? tt.value = $e(j, K, "odd", 0) : tt.value = $e(j, K, "even", 0), Ht(Q.value, ot.value)
                },
                ro = (E, j) => {
                    if (E == 0) j == "even" ? (ne(), W.value = $e(0, 99, "even", 2), Ht(Q.value, ot.value)) : j == "big" ? (ne(), W.value = ye(0, 99, "big", 2), Ht(Q.value, ot.value)) : j == "small" ? (ne(), W.value = ye(0, 99, "small", 2), Ht(Q.value, ot.value)) : j == "odd" ? (ne(), W.value = $e(0, 99, "odd", 2), Ht(Q.value, ot.value)) : (ne(), W.value = Un(0, 99, 2), Ht(Q.value, ot.value));
                    else {
                        let K = Number(ht.value.split("/")[0]),
                            pt = Number(ht.value.split("/")[1]);
                        j == "even" ? (ne(), W.value = $e(K, pt, "even", 3), Ht(Q.value, ot.value)) : j == "big" ? (ne(), W.value = ye(K, pt, "big", 3), Ht(Q.value, ot.value)) : j == "small" ? (ne(), W.value = ye(K, pt, "small", 3), Ht(Q.value, ot.value)) : j == "odd" ? (ne(), W.value = $e(K, pt, "odd", 3), Ht(Q.value, ot.value)) : (ne(), W.value = Un(K, pt, 3), Ht(Q.value, ot.value))
                    }
                },
                uo = (E, j, K) => {
                    if (E == "") {
                        let pt = j + "" + K;
                        W.value.includes(pt) ? W.value = W.value.filter(function(ft) {
                            return ft != pt
                        }) : W.value.push(pt)
                    } else {
                        let pt = E + "" + j + K;
                        W.value.includes(pt) ? W.value = W.value.filter(function(ft) {
                            return ft != pt
                        }) : W.value.push(pt)
                    }
                    Ht(Q.value, ot.value)
                },
                po = (E, j) => {
                    E == "Thousand" ? nt.value.includes(j) ? nt.value = nt.value.filter(function(K) {
                        return K != j
                    }) : nt.value.push(j) : E == "Hundred" ? ct.value.includes(j) ? ct.value = ct.value.filter(function(K) {
                        return K != j
                    }) : ct.value.push(j) : E == "ten" ? Z.value.includes(j) ? Z.value = Z.value.filter(function(K) {
                        return K != j
                    }) : Z.value.push(j) : tt.value.includes(j) ? tt.value = tt.value.filter(function(K) {
                        return K != j
                    }) : tt.value.push(j), Ht(Q.value, ot.value)
                },
                go = (E, j) => {
                    ze.value = j, ht.value = E, _t.value = 1e3, Gt.value = ht.value.split("/")[0][0].toString(), ne()
                },
                bo = (E, j, K) => {
                    if (_t.value = j, K == 0) W.value = Kn(Number(E) * ot.value, 0, 99, K), Ht(Q.value, ot.value);
                    else {
                        let pt = Number(ht.value.split("/")[0]),
                            ft = Number(ht.value.split("/")[1]);
                        W.value = Kn(Number(E), pt, ft, K), Ht(Q.value, ot.value)
                    }
                },
                mo = E => {
                    Q.value = E, ne()
                },
                _o = () => {
                    Ut.value = !1, ne()
                },
                vo = E => {},
                ko = () => {
                    ii.value = !1, _i.value = !0
                },
                ho = () => {
                    Ut.value = !1, Jt.value = 1, Ht(Q.value, ot.value)
                },
                Sn = () => {
                    const E = y.value[N.value].gamePlayList[I.value].availableBetNumber,
                        j = y.value[N.value].gamePlayList[I.value].eachIssueBetMaxWinningAmount;
                    return he.value > E ? Dt(l("xosoTip1", [E])) : Ae.value > j ? Dt(l("xosoTip2", [j])) : !0
                },
                fo = async () => {
                    var j, K, pt, ft;
                    if (Sn() === !0) {
                        if (he.value > 5e3) return Dt(l("xosoTxt94"));
                        if (Q.value == 1)(j = st.value) != null && j.includes("4") ? tt.value.length > 0 && Z.value.length > 0 && ct.value.length > 0 && nt.value.length > 0 ? Ut.value = !0 : Dt(l("xosoTxt95")) : (K = st.value) != null && K.includes("3") ? tt.value.length > 0 && Z.value.length > 0 && ct.value.length > 0 ? Ut.value = !0 : Dt(l("xosoTxt95")) : (pt = st.value) != null && pt.includes("2") ? tt.value.length > 0 && Z.value.length > 0 && S.value != 4 || Z.value.length > 0 && S.value == 4 ? Ut.value = !0 : Dt(l("xosoTxt95")) : (ft = st.value) != null && ft.includes("1") ? tt.value.length > 0 ? Ut.value = !0 : Dt(l("xosoTxt95")) : W.value.length > 0 && S.value == 8 ? Ut.value = !0 : Dt(l("xosoTxt95"));
                        else if (Q.value == 3) xn(ot.value, W.value);
                        else if (Q.value == 2) {
                            if (!Ys.inputrule.test(zt.value)) return Dt({
                                message: l(Zs.inputtip),
                                wordBreak: "break-word"
                            });
                            for (let Ft = 0; Ft < W.value.length; Ft++)
                                if (W.value[Ft].toString().length != We.value) return Dt(l("xosoTxt95"));
                            if (Gs(W.value)) return Dt(l("xosoTxt98"));
                            xn(ot.value, W.value)
                        } else S.value == 8 && W.value.length === 1 ? Ut.value = !0 : Dt(l("xosoTxt95"));
                        Ht(Q.value, ot.value)
                    }
                },
                xn = (E, j) => {
                    E == 1 ? j.length > 0 ? Ut.value = !0 : Dt(l("xosoTxt95")) : E == 2 ? j.length % 2 == 0 ? Ut.value = !0 : Dt(l("xosoTxt95")) : E == 3 ? j.length % 3 == 0 ? Ut.value = !0 : Dt(l("xosoTxt95")) : E == 4 ? j.length % 4 == 0 ? Ut.value = !0 : Dt(l("xosoTxt95")) : E == 8 ? j.length % 8 == 0 ? Ut.value = !0 : Dt(l("xosoTxt95")) : E == 10 && (j.length % 10 == 0 ? Ut.value = !0 : Dt(l("xosoTxt95")))
                },
                Vi = k(null),
                yo = async () => {
                    Vi.value && clearTimeout(Vi.value), Vi.value = setTimeout(async () => {
                        var Kt, ge, be;
                        if (se.value) return ve({
                            message: l("xosoTip6"),
                            wordBreak: "break-word"
                        });
                        if (!ue.value || Sn() !== !0) return;
                        let j = [],
                            K = "";
                        if (Q.value == 1 ? st.value.toString().includes("4") ? K = nt.value.join("|") + "," + ct.value.join("|") + "," + Z.value.join("|") + "," + tt.value.join("|") : st.value.toString().includes("3") ? K = ct.value.join("|") + "," + Z.value.join("|") + "," + tt.value.join("|") : st.value.toString().includes("2") ? S.value == 4 ? K = Z.value.join(",") : K = Z.value.join("|") + "," + tt.value.join("|") : S.value == 4 ? (K = tt.value.join(","), Q.value = 3) : S.value == 8 && (K = W.value[0]) : [2, 3].includes(Q.value) ? ot.value == 1 ? K = W.value.join(",") : ot.value == 2 ? K = W.value.reduce((St, ae, xt) => (xt % 2 === 0 && St.push(ae + "|" + W.value[xt + 1]), St), []).join(",") : ot.value == 3 ? K = W.value.reduce((St, ae, xt) => (xt % 3 === 0 && St.push(ae + "|" + W.value[xt + 1] + "|" + W.value[xt + 2]), St), []).join(",") : ot.value == 4 ? K = W.value.reduce((St, ae, xt) => (xt % 4 === 0 && St.push(ae + "|" + W.value[xt + 1] + "|" + W.value[xt + 2] + "|" + W.value[xt + 3]), St), []).join(",") : ot.value == 8 ? K = W.value.reduce((St, ae, xt) => (xt % 8 === 0 && St.push(ae + "|" + W.value[xt + 1] + "|" + W.value[xt + 2] + "|" + W.value[xt + 3] + "|" + W.value[xt + 4] + "|" + W.value[xt + 5] + "|" + W.value[xt + 6] + "|" + W.value[xt + 7]), St), []).join(",") : K = W.value.reduce((St, ae, xt) => (xt % 10 === 0 && St.push(ae + "|" + W.value[xt + 1] + "|" + W.value[xt + 2] + "|" + W.value[xt + 3] + "|" + W.value[xt + 4] + "|" + W.value[xt + 5] + "|" + W.value[xt + 6] + "|" + W.value[xt + 7] + "|" + W.value[xt + 8] + "|" + W.value[xt + 9]), St), []).join(",") : S.value === 8 && ot.value == 1 && (K = W.value[0], he.value = ot.value), [4, 8].includes(S.value) && (Q.value = 3), K.replace(",", "").trim().length == 0 || he.value == 0) return;
                        j.push({
                            bettingParentType: S.value,
                            bettingType: B.value,
                            bettingFormat: Q.value,
                            bettingContent: K,
                            totalBetting: he.value,
                            initialAmount: It.value,
                            bettingMultiple: Jt.value,
                            defaultOdds: ti.value
                        });
                        let [pt, ft] = [null, null], Ft = sa((Kt = _.value) == null ? void 0 : Kt.issueNo);
                        if (m.value == "1" ? [pt, ft] = await ee(As({
                                areId: c.value,
                                issueNo: (ge = _.value) == null ? void 0 : ge.issueNo,
                                xosoBettingData: j
                            })) : m.value == "2" && ([pt, ft] = await ee(Ms({
                                areId: c.value,
                                typeId: Number(u.value),
                                issueNo: (be = _.value) == null ? void 0 : be.issueNo,
                                xosoBettingData: j
                            }))), ft) {
                            S.value === 4 && (Q.value = 1), Ut.value = !1;
                            const mt = Rn(ft == null ? void 0 : ft.msgCode, ft == null ? void 0 : ft.msg);
                            bt.value = mt, ze.value = 0, ne(), Ui(), fe.value === "MyGameRecord" && U.value.getData(), setTimeout(() => {
                                Bn(Ft)
                            }, Number(Vt.value * 1e3) + 5e3)
                        } else {
                            Ut.value = !1;
                            const mt = Rn(ft == null ? void 0 : ft.msgCode, ft == null ? void 0 : ft.msg);
                            bt.value = mt
                        }
                    }, 500)
                },
                $o = () => {
                    setTimeout(() => {
                        et.value && (et.value = !1)
                    }, 1500)
                },
                Rn = (E, j) => {
                    let K = "";
                    switch (E) {
                        case 345:
                            K = l("xosoTip2", [j]), T.value = !0;
                            break;
                        case 346:
                            K = l("xosoTip3"), T.value = !0;
                            break;
                        case 347:
                            K = l("xosoTip3"), T.value = !0;
                            break;
                        case 348:
                            K = l("xosoTip1", [j]), T.value = !0;
                            break;
                        case 349:
                            K = l("xosoTip4"), T.value = !0;
                            break;
                        default:
                            K = "code" + E, et.value = !0, $o();
                            break
                    }
                    return K
                },
                wo = () => {
                    T.value = !1
                };
            let Fi = null;
            async function Bn(E) {
                if (g.value || m.value != "2") return;
                const j = await at(Ps({
                    issueNo: E
                }));
                if (j) {
                    if (j.data.status == 1) {
                        clearTimeout(Fi), Fi = setTimeout(() => {
                            Bn(E)
                        }, 1e3);
                        return
                    }
                    Ci.value.showMark(j.data), fe.value === "MyGameRecord" && U.value.getData()
                }
            }
            const To = E => {
                    E <= 0 || (E >= 5e4 ? Jt.value = 5e4 : Jt.value = E), Ht(Q.value, ot.value)
                },
                Co = (E, j) => {
                    rt.value = j, Jt.value = E, Ht(Q.value, ot.value)
                },
                Gn = E => {
                    switch (E) {
                        case 1:
                            Jt.value > 1 && (Jt.value--, Ht(Q.value, ot.value));
                            break;
                        case 2:
                            Jt.value++, Ht(Q.value, ot.value);
                            break
                    }
                },
                Ht = (E, j) => {
                    j != 0 && (he.value = Lo(E, j), Ae.value = he.value * It.value * Jt.value * ti.value, S.value === 8 ? lt.value = ie.value : lt.value = X.value)
                },
                Lo = (E, j) => {
                    let K = 0;
                    if (E == 1) {
                        let pt = nt.value.length,
                            ft = ct.value.length,
                            Ft = Z.value.length,
                            Kt = tt.value.length;
                        return st.value.toString().includes("4") ? K = pt * ft * Ft * Kt : st.value.toString().includes("3") ? K = ft * Ft * Kt : st.value.toString().includes("2") ? S.value === 4 ? K = Ft : K = Ft * Kt : st.value.toString().includes("1") ? K = Kt : S.value === 8 && (K = 1), K
                    } else {
                        if (E == 3) return K = Math.floor(W.value.length / j), K;
                        if (E == 2) return W.value.length == 1 && W.value[0] == "1" ? K = 0 : K = Math.floor(W.value.length / j), K
                    }
                    return K
                },
                No = () => {
                    i.go(-1)
                },
                An = E => {
                    var j;
                    i.push({
                        name: E,
                        query: {
                            id: (j = o.query) == null ? void 0 : j.id
                        }
                    })
                },
                Ui = async () => {
                    const E = await at(dn());
                    E && (ei.value = (E == null ? void 0 : E.data.amount) || 0)
                };

            function zo(E) {
                fe.value = E, fe.value == "GameRecord" && Zt(() => {
                    U.value.getData()
                })
            }
            Ya(), Me(), m.value == "2" && ai(), zn(), Ui();

            function Ki() {
                clearInterval(de.value), clearInterval(qt.value), clearTimeout(je), clearTimeout(Fi)
            }
            Si(() => {
                g.value = !0, Ki()
            });
            const Io = jo();
            return Mt(Io, (E, j) => {
                E === "visible" && j === "hidden" ? (Me(), m.value == "2" && ai(), Ui()) : Ki()
            }), (E, j) => {
                var ge, be;
                const K = H("NavBar"),
                    pt = H("van-field"),
                    ft = H("van-checkbox"),
                    Ft = H("van-button"),
                    Kt = H("van-popup");
                return n(), a(R, null, [t("div", c9, [L(K, {
                    "left-arrow": "",
                    onClickLeft: No,
                    class: "main"
                }, {
                    center: M(() => [t("div", {
                        class: "centercity",
                        onClick: j[0] || (j[0] = mt => Ge.value = !0)
                    }, [O(e(p.value) + " ", 1), r9])]),
                    _: 1
                }), $("彩种及玩法"), L(T6, {
                    gameCategoryList: y.value,
                    colortab: N.value,
                    playtab: I.value,
                    onColorupdate: eo,
                    onUpdate: io
                }, null, 8, ["gameCategoryList", "colortab", "playtab"]), $("玩法说明"), m.value == "1" ? (n(), it(ZC, {
                    key: 0,
                    defaultcityname: p.value,
                    defaultplayname: D.value,
                    defaultexpiredate: P.value,
                    colorId: S.value,
                    issue: (ge = _.value) == null ? void 0 : ge.issueNo,
                    time: q.value,
                    odds: X.value,
                    areId: c.value
                }, null, 8, ["defaultcityname", "defaultplayname", "defaultexpiredate", "colorId", "issue", "time", "odds", "areId"])) : m.value == "2" ? (n(), it(y6, {
                    key: 1,
                    defaultcityname: p.value,
                    defaultplayname: D.value,
                    colorId: S.value,
                    issue: (be = _.value) == null ? void 0 : be.issueNo,
                    time: Yt.value,
                    odds: X.value,
                    areId: c.value,
                    resultList: v.value,
                    isShowPreparing: se.value
                }, null, 8, ["defaultcityname", "defaultplayname", "colorId", "issue", "time", "odds", "areId", "resultList", "isShowPreparing"])) : $("v-if", !0), $("趣味玩法"), S.value === 8 ? (n(), it(C4, {
                    key: 2,
                    funplaylist: Ct.value,
                    numbercon: Et.value,
                    onSelectvalue: ao
                }, null, 8, ["funplaylist", "numbercon"])) : (n(), a(R, {
                    key: 3
                }, [$("选择号码，输入号码，快捷选号"), L(k4, {
                    ref_key: "numberselectRef",
                    ref: b,
                    methodList: J.value,
                    activeTab: Q.value,
                    randomList: Rt.value,
                    randomtype: yt.value,
                    specialtype: Tt.value,
                    isthreenumber: At.value,
                    speciaSelectNo: Bt.value,
                    isShowMark: Le.value,
                    betconfig: st.value,
                    hundred: Gt.value,
                    groupTab: _t.value,
                    thousandnumList: nt.value,
                    hundrednumList: ct.value,
                    tennumList: Z.value,
                    indicualnumList: tt.value,
                    quicknumList: W.value,
                    intervalnumber: Ne.value,
                    intervalTab: ze.value,
                    onTabupdate: mo,
                    onSelectgroup: bo,
                    onSelectinterval: go,
                    onBetNum: po,
                    onBetQuickNum: uo,
                    onGetselect: co,
                    onGetquick: ro,
                    onInputblur: lo
                }, null, 8, ["methodList", "activeTab", "randomList", "randomtype", "specialtype", "isthreenumber", "speciaSelectNo", "isShowMark", "betconfig", "hundred", "groupTab", "thousandnumList", "hundrednumList", "tennumList", "indicualnumList", "quicknumList", "intervalnumber", "intervalTab"])], 2112)), $("投注记录和比赛结果"), L(q4, {
                    record: fe.value,
                    onChangeC: zo
                }, null, 8, ["record"]), $(" 动态展示对应的组件 "), (n(), it(Qe, null, [(n(), it(He(Hi[fe.value]), {
                    ref_key: "RecordComponent",
                    ref: U,
                    ApiFun: jt.value,
                    areId: c.value,
                    cityCode: u.value,
                    parmas: w,
                    gVSs: m.value
                }, null, 8, ["ApiFun", "areId", "cityCode", "parmas", "gVSs"]))], 1024)), $("foot"), L(P4, {
                    betNumber: he.value,
                    betSum: Ae.value,
                    onPlayBet: fo
                }, null, 8, ["betNumber", "betSum"]), $(" 中奖提示组件 "), L(l9, {
                    ref_key: "WinningTipsRef",
                    ref: Ci
                }, null, 512)]), $("下注弹窗"), L(Kt, {
                    show: Ut.value,
                    "onUpdate:show": j[8] || (j[8] = mt => Ut.value = mt),
                    "close-on-click-overlay": !1,
                    class: "popup",
                    position: "bottom"
                }, {
                    default: M(() => [t("div", u9, [t("div", {
                        class: "close",
                        onClick: _o
                    }, [t("img", {
                        class: "img",
                        src: d(te)("main", "close")
                    }, null, 8, d9)]), t("div", p9, e(E.$t("bettingnumber")), 1), S.value === 6 || c.value === 2 && S.value === 1 && x.value === 4 || c.value === 3 && S.value === 1 && x.value === 4 || c.value === 1 && S.value === 1 && x.value === 5 ? (n(), a("div", g9, e(E.$t("xosoTxt93")), 1)) : $("v-if", !0), Q.value == 2 || Q.value == 3 ? (n(), a("div", {
                        key: 1,
                        class: G("c-row c-flex-warp compound" + Q.value)
                    }, [t("div", {
                        class: G("c-row item item" + Ie.value + "-" + We.value)
                    }, [t("div", b9, [t("div", m9, [(n(!0), a(R, null, A(W.value, (mt, St) => (n(), a("div", {
                        class: "num c-row c-row-middle-center",
                        key: St
                    }, e(mt), 1))), 128))])])], 2)], 2)) : $("v-if", !0), Q.value == 1 ? (n(), a("div", _9, [nt.value.length > 0 ? (n(), a("div", v9, [t("div", k9, e(E.$t("xosoTxt87")), 1), t("div", h9, [(n(!0), a(R, null, A(nt.value, (mt, St) => (n(), a("div", {
                        class: "num",
                        key: St
                    }, e(mt), 1))), 128))])])) : $("v-if", !0), ct.value.length > 0 ? (n(), a("div", f9, [t("div", y9, e(E.$t("xosoTxt88")), 1), t("div", $9, [(n(!0), a(R, null, A(ct.value, (mt, St) => (n(), a("div", {
                        class: "num",
                        key: St
                    }, e(mt), 1))), 128))])])) : $("v-if", !0), Z.value.length > 0 ? (n(), a("div", w9, [t("div", T9, e(E.$t("xosoTxt89")), 1), t("div", C9, [(n(!0), a(R, null, A(Z.value, (mt, St) => (n(), a("div", {
                        class: "num",
                        key: St
                    }, e(mt), 1))), 128))])])) : $("v-if", !0), tt.value.length > 0 ? (n(), a("div", L9, [t("div", N9, e(E.$t("xosoTxt90")), 1), t("div", z9, [(n(!0), a(R, null, A(tt.value, (mt, St) => (n(), a("div", {
                        class: "num",
                        key: St
                    }, e(mt), 1))), 128))])])) : $("v-if", !0), W.value.length > 0 ? (n(), a("div", I9, [t("div", S9, [(n(!0), a(R, null, A(W.value, (mt, St) => (n(), a("div", {
                        class: "num",
                        key: St
                    }, e(mt), 1))), 128))])])) : $("v-if", !0)])) : $("v-if", !0), t("div", x9, [t("div", R9, [t("div", B9, e(E.$t("multiple")), 1), t("div", G9, [t("div", {
                        class: "li minus",
                        onClick: j[1] || (j[1] = mt => Gn(1))
                    }, "-"), L(pt, {
                        class: "digit-box",
                        modelValue: Jt.value,
                        "onUpdate:modelValue": j[2] || (j[2] = mt => Jt.value = mt),
                        type: "digit",
                        maxlength: 5,
                        onInput: j[3] || (j[3] = mt => To(Jt.value))
                    }, null, 8, ["modelValue"]), t("div", {
                        class: "li plus c-row c-row-middle-center",
                        onClick: j[4] || (j[4] = mt => Gn(2))
                    }, "+")])]), t("div", A9, [t("div", M9, [(n(!0), a(R, null, A(gt.value, (mt, St) => (n(), a("div", {
                        class: G(Jt.value == mt ? "action li" : "li"),
                        onClick: ae => Co(mt, St)
                    }, " X" + e(mt), 11, P9))), 256))])]), t("div", D9, [t("div", O9, [O(e(E.$t("quantity")) + " ", 1), E9, t("span", q9, e(he.value || 0) + e(E.$t("note")), 1)]), t("div", j9, [O(e(E.$t("odds")), 1), H9, O(), t("span", W9, e(lt.value), 1)])]), t("div", V9, [t("div", F9, [O(e(E.$t("walletBalance")) + " ", 1), t("span", U9, e(d(Lt)(ei.value)), 1)])]), t("div", K9, [t("div", X9, [O(e(E.$t("betAmounts")), 1), t("span", Q9, e(d(Lt)(Ae.value)), 1)])]), Ae.value > ei.value ? (n(), a("div", J9, [t("div", Y9, [t("img", {
                        src: d(Xt)("home/AllLotteryGames/NewVietnam", "tip")
                    }, null, 8, Z9), O(e(E.$t("insufficientWallet")), 1)]), t("div", {
                        class: "txt bg333",
                        onClick: j[5] || (j[5] = mt => An("Recharge"))
                    }, e(E.$t("torecharge")) + " >>", 1)])) : $("v-if", !0), t("div", tL, [L(ft, {
                        modelValue: _i.value,
                        "onUpdate:modelValue": j[6] || (j[6] = mt => _i.value = mt),
                        shape: "square",
                        "checked-color": "#F4453E",
                        onChange: vo
                    }, {
                        default: M(() => [t("div", eL, e(E.$t("agree")), 1)]),
                        _: 1
                    }, 8, ["modelValue"]), t("span", {
                        class: "txt",
                        onClick: j[7] || (j[7] = mt => ii.value = !0)
                    }, e(E.$t("presaleRules")), 1)])])]), t("div", iL, [t("div", nL, [L(Ft, {
                        class: "btn",
                        block: "",
                        onClick: ho
                    }, {
                        default: M(() => [t("span", null, e(E.$t("cancel")), 1)]),
                        _: 1
                    })]), t("div", aL, [L(Ft, {
                        class: G(["btn", {
                            noActive: !ue.value
                        }]),
                        block: "",
                        onClick: yo
                    }, {
                        default: M(() => [t("span", oL, e(E.$t("betting")), 1)]),
                        _: 1
                    }, 8, ["class"])])])]),
                    _: 1
                }, 8, ["show"]), $("顶部弹窗"), L(Kt, {
                    class: "areBox",
                    show: Ge.value,
                    "onUpdate:show": j[10] || (j[10] = mt => Ge.value = mt),
                    round: "",
                    position: "bottom",
                    style: {
                        overflow: "initial"
                    }
                }, {
                    default: M(() => [t("div", sL, [t("img", {
                        class: "close",
                        src: d(te)("main", "close"),
                        alt: "",
                        onClick: j[9] || (j[9] = () => Ge.value = !1)
                    }, null, 8, lL), (n(!0), a(R, null, A(z.value, (mt, St) => (n(), a("div", {
                        class: "items",
                        key: St
                    }, [t("h1", null, e(mt.text), 1), t("div", cL, [(n(!0), a(R, null, A(mt.info, (ae, xt) => (n(), a("div", {
                        key: xt,
                        class: G({
                            isActive: u.value == ae.code
                        }),
                        onClick: Xi => Za(ae, mt.value)
                    }, e(E.$t("code" + ae.nameCode)), 11, rL))), 128))])]))), 128))])]),
                    _: 1
                }, 8, ["show"]), $("预售规则"), L(Kt, {
                    show: ii.value,
                    "onUpdate:show": j[11] || (j[11] = mt => ii.value = mt),
                    class: "PreSaleRule",
                    "close-on-click-overlay": !1,
                    round: ""
                }, {
                    default: M(() => [t("div", uL, [t("div", dL, e(d(l)("presaleRules")), 1), t("div", pL, e(E.$t("betPopTXT")), 1), t("div", gL, [t("div", {
                        class: "btn",
                        onClick: ko
                    }, e(d(l)("iKonw")), 1)])])]),
                    _: 1
                }, 8, ["show"]), $("提示"), L(Kt, {
                    show: et.value,
                    "onUpdate:show": j[12] || (j[12] = mt => et.value = mt),
                    class: "Tips",
                    "close-on-click-overlay": !0
                }, {
                    default: M(() => [t("div", null, [bt.value == "code402" ? (n(), a("img", {
                        key: 0,
                        src: d(te)("home/AllLotteryGames/NewVietnam", "success")
                    }, null, 8, bL)) : (n(), a("img", {
                        key: 1,
                        src: d(te)("home/AllLotteryGames/NewVietnam", "fail")
                    }, null, 8, mL)), t("div", _L, e(E.$t(bt.value)), 1)])]),
                    _: 1
                }, 8, ["show"]), L(xe, {
                    show: T.value,
                    "onUpdate:show": j[13] || (j[13] = mt => T.value = mt),
                    onConfirm: wo,
                    confirmText: d(l)("confirm"),
                    showCancelBtn: !1
                }, {
                    content: M(() => [t("div", vL, e(bt.value ? E.$t(bt.value) : ""), 1)]),
                    _: 1
                }, 8, ["show", "confirmText"])], 64)
            }
        }
    });
const hL = F(kL, [
        ["__scopeId", "data-v-b1e14027"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/NewVietnam/index.vue"]
    ]),
    zG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: hL
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    fL = {
        class: "Play__C"
    },
    yL = {
        class: "title"
    },
    $L = ["src"],
    wL = {
        class: "info"
    },
    TL = ["src"],
    CL = {
        class: "sub"
    },
    LL = {
        class: "text"
    },
    NL = {
        class: "info_text"
    },
    zL = {
        class: "forexample"
    },
    IL = {
        key: 0,
        class: "betting"
    },
    SL = {
        class: "result"
    },
    xL = {
        key: 0,
        class: "info_item"
    },
    RL = ["src"],
    BL = {
        class: "sub"
    },
    GL = {
        class: "text"
    },
    AL = {
        key: 1,
        class: "info_text"
    },
    ML = {
        class: "forexample"
    },
    PL = {
        class: "result"
    },
    DL = V({
        __name: "NorthPlay",
        setup(s) {
            const {
                t: i
            } = kt(), o = k(0), l = Wt([{
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
            return (g, m) => {
                const r = H("van-tab"),
                    c = H("van-tabs");
                return n(), a("div", fL, [L(c, {
                    active: o.value,
                    "onUpdate:active": m[0] || (m[0] = p => o.value = p),
                    type: "card"
                }, {
                    default: M(() => [(n(!0), a(R, null, A(l, (p, u) => (n(), it(r, {
                        title: p.title,
                        key: u
                    }, {
                        default: M(() => [(n(!0), a(R, null, A(p.subList, (b, _) => (n(), a("div", {
                            class: "Play__C-Cotent",
                            key: _
                        }, [t("div", yL, [t("img", {
                            src: d(te)("home/AllLotteryGames/NewVietnam", "Star")
                        }, null, 8, $L), t("span", null, e(b.sub), 1)]), t("div", wL, [(n(!0), a(R, null, A(b.txtList, (w, f) => (n(), a("div", {
                            class: "info_item",
                            key: f
                        }, [t("img", {
                            src: d(Xt)("public", "Triangle")
                        }, null, 8, TL), t("span", CL, e(w.bet), 1), t("div", LL, e(w.betTip), 1)]))), 128)), t("div", NL, [t("div", zL, e(d(i)("forexample")), 1), b.num ? (n(), a("div", IL, e(d(i)("betting")) + "：" + e(b.num), 1)) : $("v-if", !0), t("div", SL, e(d(i)("result")) + "：" + e(b.resultTip), 1)]), o.value === 7 ? (n(), a("div", xL, [t("img", {
                            src: d(Xt)("public", "Triangle")
                        }, null, 8, RL), t("span", BL, e(d(i)("xosoTxt71")), 1), t("div", GL, e(d(i)("xosoTxt67")), 1)])) : $("v-if", !0), o.value === 7 ? (n(), a("div", AL, [t("div", ML, e(d(i)("forexample")), 1), t("div", PL, e(d(i)("result")) + "： " + e(d(i)("xosoTxt68")), 1)])) : $("v-if", !0)])]))), 128))]),
                        _: 2
                    }, 1032, ["title"]))), 128))]),
                    _: 1
                }, 8, ["active"])])
            }
        }
    });
const OL = F(DL, [
        ["__scopeId", "data-v-b67ec5ce"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/NewVietnam/NorthPlay.vue"]
    ]),
    Ti = s => ($t("data-v-33026085"), s = s(), wt(), s),
    EL = {
        class: "NorthRule__C"
    },
    qL = {
        class: "NorthRule__C-title"
    },
    jL = {
        class: "NorthRule__C-tips"
    },
    HL = Ti(() => t("div", {
        class: "borderTopStyle"
    }, [t("span"), t("span")], -1)),
    WL = {
        class: "title"
    },
    VL = {
        class: "text"
    },
    FL = {
        class: "table"
    },
    UL = {
        class: "table-row header-time"
    },
    KL = {
        class: "table-time-1"
    },
    XL = Ti(() => t("div", {
        class: "table-time-1"
    }, "18:15", -1)),
    QL = {
        class: "table-row header-week"
    },
    JL = {
        class: "table-week-1"
    },
    YL = {
        class: "table-week-1"
    },
    ZL = {
        class: "table-cell-1"
    },
    tN = {
        class: "table-cell-1"
    },
    eN = Ti(() => t("div", {
        class: "borderTopStyle"
    }, [t("span"), t("span")], -1)),
    iN = {
        class: "title"
    },
    nN = {
        class: "text"
    },
    aN = {
        key: 0,
        class: "text"
    },
    oN = {
        key: 1,
        class: "text"
    },
    sN = {
        class: "NorthRule__C-Rule"
    },
    lN = {
        class: "NorthRule__C-Struct"
    },
    cN = Ti(() => t("span", {
        class: "left"
    }, null, -1)),
    rN = Ti(() => t("span", {
        class: "right"
    }, null, -1)),
    uN = {
        class: "table-rule"
    },
    dN = {
        class: "table-header"
    },
    pN = {
        class: "table-header-cell"
    },
    gN = {
        class: "table-header-cell"
    },
    bN = {
        class: "table-header-cell"
    },
    mN = {
        class: "table-cell"
    },
    _N = {
        class: "table-cell"
    },
    vN = {
        class: "table-cell"
    },
    kN = {
        class: "table-rule"
    },
    hN = {
        class: "table-header"
    },
    fN = {
        class: "table-header-cell"
    },
    yN = {
        key: 0,
        class: "table-box-title"
    },
    $N = V({
        __name: "NorthRule",
        setup(s) {
            const {
                t: i
            } = kt(), o = Wt([{
                title: "01",
                sub: i("resultsVielottery")
            }, {
                title: "02",
                sub: i("systemresult")
            }, {
                title: "03",
                sub: i("lotterytime")
            }]), l = Wt([{
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
            }]), g = Wt([{
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
            }]), m = Wt([{
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
            return (r, c) => (n(), a("div", EL, [t("div", qL, e(d(i)("northVieLotteryGameRules")), 1), t("div", jL, e(d(i)("precautions")), 1), (n(!0), a(R, null, A(o, (p, u) => (n(), a("div", {
                class: "NorthRule__C-Content",
                key: u
            }, [HL, t("div", WL, e(p.title), 1), t("div", VL, e(p.sub), 1)]))), 128)), t("div", FL, [t("div", UL, [t("div", KL, e(d(i)("winTrxTime")), 1), XL]), t("div", QL, [t("div", JL, e(d(i)("weeks")), 1), t("div", YL, e(d(i)("northLotteryCities")), 1)]), (n(!0), a(R, null, A(g, (p, u) => (n(), a("div", {
                class: "table-row",
                key: u
            }, [t("div", ZL, e(p.week), 1), t("div", tN, e(p.addressList), 1)]))), 128))]), (n(!0), a(R, null, A(l, (p, u) => (n(), a("div", {
                class: "NorthRule__C-Content",
                key: u
            }, [eN, t("div", iN, e(p.title), 1), t("div", nN, e(p.sub), 1), p.sub1 ? (n(), a("div", aN, e(p.sub1), 1)) : $("v-if", !0), p.sub2 ? (n(), a("div", oN, e(p.sub2), 1)) : $("v-if", !0)]))), 128)), t("div", sN, e(d(i)("northernLotteryGameRules")), 1), t("div", lN, [cN, O(e(d(i)("colorstructure")), 1), rN]), t("div", uN, [t("div", dN, [t("div", pN, e(d(i)("Lottery")), 1), t("div", gN, e(d(i)("numberofPrizes")), 1), t("div", bN, e(d(i)("Number")), 1)]), (n(!0), a(R, null, A(m, (p, u) => (n(), a("div", {
                class: "table-row",
                key: u
            }, [t("div", mN, e(p.title), 1), t("div", _N, e(p.quantity), 1), t("div", vN, e(p.number), 1)]))), 128))]), t("div", kN, [t("div", hN, [t("div", fN, e(d(i)("sorthlotteryresult")), 1)]), (n(!0), a(R, null, A(m, (p, u) => (n(), a("div", {
                class: G(u == 8 ? "table-box none" : "table-box"),
                key: u
            }, [u != 8 ? (n(), a("div", yN, e(p.title), 1)) : $("v-if", !0), (n(!0), a(R, null, A(p.drawsNumber, (b, _) => (n(), a("div", {
                class: "table-box-number",
                key: _
            }, e(b), 1))), 128))], 2))), 128))])]))
        }
    });
const wN = F($N, [
        ["__scopeId", "data-v-33026085"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/NewVietnam/NorthRule.vue"]
    ]),
    TN = {
        class: "Play__C"
    },
    CN = {
        class: "title"
    },
    LN = ["src"],
    NN = {
        class: "info"
    },
    zN = ["src"],
    IN = {
        class: "sub"
    },
    SN = {
        class: "text"
    },
    xN = {
        class: "info_text"
    },
    RN = {
        class: "forexample"
    },
    BN = {
        key: 0,
        class: "betting"
    },
    GN = {
        class: "result"
    },
    AN = {
        key: 0,
        class: "info_item"
    },
    MN = ["src"],
    PN = {
        class: "sub"
    },
    DN = {
        class: "text"
    },
    ON = {
        key: 1,
        class: "info_text"
    },
    EN = {
        class: "forexample"
    },
    qN = {
        class: "result"
    },
    jN = V({
        __name: "SorthPlay",
        setup(s) {
            const {
                t: i
            } = kt(), o = k(0), l = Wt([{
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
            return (g, m) => {
                const r = H("van-tab"),
                    c = H("van-tabs");
                return n(), a("div", TN, [L(c, {
                    active: o.value,
                    "onUpdate:active": m[0] || (m[0] = p => o.value = p),
                    type: "card"
                }, {
                    default: M(() => [(n(!0), a(R, null, A(l, (p, u) => (n(), it(r, {
                        title: p.title,
                        key: u
                    }, {
                        default: M(() => [(n(!0), a(R, null, A(p.subList, (b, _) => (n(), a("div", {
                            class: "Play__C-Cotent",
                            key: _
                        }, [t("div", CN, [t("img", {
                            src: d(te)("home/AllLotteryGames/NewVietnam", "Star")
                        }, null, 8, LN), t("span", null, e(b.sub), 1)]), t("div", NN, [(n(!0), a(R, null, A(b.txtList, (w, f) => (n(), a("div", {
                            class: "info_item",
                            key: f
                        }, [t("img", {
                            src: d(Xt)("public", "Triangle")
                        }, null, 8, zN), t("span", IN, e(w.bet), 1), t("div", SN, e(w.betTip), 1)]))), 128)), t("div", xN, [t("div", RN, e(d(i)("forexample")), 1), b.num ? (n(), a("div", BN, e(d(i)("betting")) + "：" + e(b.num), 1)) : $("v-if", !0), t("div", GN, e(d(i)("result")) + "：" + e(b.resultTip), 1)]), o.value === 7 ? (n(), a("div", AN, [t("img", {
                            src: d(Xt)("public", "Triangle")
                        }, null, 8, MN), t("span", PN, e(d(i)("xosoTxt71")), 1), t("div", DN, e(d(i)("xosoTxt67")), 1)])) : $("v-if", !0), o.value === 7 ? (n(), a("div", ON, [t("div", EN, e(d(i)("forexample")), 1), t("div", qN, e(d(i)("result")) + "： " + e(d(i)("xosoTxt68")), 1)])) : $("v-if", !0)])]))), 128))]),
                        _: 2
                    }, 1032, ["title"]))), 128))]),
                    _: 1
                }, 8, ["active"])])
            }
        }
    });
const HN = F(jN, [
        ["__scopeId", "data-v-19e150a9"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/NewVietnam/SorthPlay.vue"]
    ]),
    mi = s => ($t("data-v-7bb580e6"), s = s(), wt(), s),
    WN = {
        class: "NorthRule__C"
    },
    VN = {
        class: "NorthRule__C-title"
    },
    FN = {
        class: "NorthRule__C-tips"
    },
    UN = mi(() => t("div", {
        class: "borderTopStyle"
    }, [t("span"), t("span")], -1)),
    KN = {
        class: "title"
    },
    XN = {
        class: "text"
    },
    QN = {
        class: "table"
    },
    JN = {
        class: "table-row header-time"
    },
    YN = {
        class: "table-time-1"
    },
    ZN = mi(() => t("div", {
        class: "table-time-1"
    }, "16:20(GMT+7)", -1)),
    tz = mi(() => t("div", {
        class: "table-time-1"
    }, "17:15(GMT+7)", -1)),
    ez = {
        class: "table-row header-week"
    },
    iz = {
        class: "table-week-1"
    },
    nz = {
        class: "table-week-1"
    },
    az = {
        class: "table-week-1"
    },
    oz = {
        class: "table-cell-1"
    },
    sz = {
        class: "table-cell-2"
    },
    lz = mi(() => t("div", {
        class: "borderTopStyle"
    }, [t("span"), t("span")], -1)),
    cz = {
        class: "title"
    },
    rz = {
        class: "text"
    },
    uz = {
        key: 0,
        class: "text"
    },
    dz = {
        key: 1,
        class: "text"
    },
    pz = {
        class: "NorthRule__C-Rule"
    },
    gz = {
        class: "NorthRule__C-Struct"
    },
    bz = mi(() => t("span", {
        class: "left"
    }, null, -1)),
    mz = mi(() => t("span", {
        class: "right"
    }, null, -1)),
    _z = {
        class: "table-rule"
    },
    vz = {
        class: "table-header"
    },
    kz = {
        class: "table-header-cell"
    },
    hz = {
        class: "table-header-cell"
    },
    fz = {
        class: "table-header-cell"
    },
    yz = {
        class: "table-cell"
    },
    $z = {
        class: "table-cell"
    },
    wz = {
        class: "table-cell"
    },
    Tz = {
        class: "table-rule"
    },
    Cz = {
        class: "table-header"
    },
    Lz = {
        class: "table-header-cell"
    },
    Nz = {
        key: 0,
        class: "table-box-title"
    },
    zz = V({
        __name: "SorthRule",
        setup(s) {
            const {
                t: i
            } = kt(), o = Wt([{
                title: "01",
                sub: i("resultsVielottery")
            }, {
                title: "02",
                sub: i("systemresult")
            }, {
                title: "03",
                sub: i("lotterytime1")
            }]), l = Wt([{
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
            }]), g = Wt([{
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
            }]), m = Wt([{
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
            }]), r = c => c.slice().reverse();
            return (c, p) => (n(), a("div", WN, [t("div", VN, e(d(i)("sorthVieLotteryGameRules")), 1), t("div", FN, e(d(i)("precautions")), 1), (n(!0), a(R, null, A(o, (u, b) => (n(), a("div", {
                class: "NorthRule__C-Content",
                key: b
            }, [UN, t("div", KN, e(u.title), 1), t("div", XN, e(u.sub), 1)]))), 128)), t("div", QN, [t("div", JN, [t("div", YN, e(d(i)("winTrxTime")), 1), ZN, tz]), t("div", ez, [t("div", iz, e(d(i)("weeks")), 1), t("div", nz, e(d(i)("sorthLotteryCities")), 1), t("div", az, e(d(i)("middleLotteryCities")), 1)]), (n(!0), a(R, null, A(g, (u, b) => (n(), a("div", {
                class: "table-row",
                key: b
            }, [t("div", oz, e(u.week), 1), t("div", sz, [(n(!0), a(R, null, A(u.addressList, (_, w) => (n(), a("div", {
                class: "table-column-1",
                key: w
            }, e(_), 1))), 128))])]))), 128))]), (n(!0), a(R, null, A(l, (u, b) => (n(), a("div", {
                class: "NorthRule__C-Content",
                key: b
            }, [lz, t("div", cz, e(u.title), 1), t("div", rz, e(u.sub), 1), u.sub1 ? (n(), a("div", uz, e(u.sub1), 1)) : $("v-if", !0), u.sub2 ? (n(), a("div", dz, e(u.sub2), 1)) : $("v-if", !0)]))), 128)), t("div", pz, e(d(i)("sorthernLotteryGameRules")), 1), t("div", gz, [bz, O(e(d(i)("colorstructure")), 1), mz]), t("div", _z, [t("div", vz, [t("div", kz, e(d(i)("Lottery")), 1), t("div", hz, e(d(i)("numberofPrizes")), 1), t("div", fz, e(d(i)("Number")), 1)]), (n(!0), a(R, null, A(m, (u, b) => (n(), a("div", {
                class: "table-row",
                key: b
            }, [t("div", yz, e(u.title), 1), t("div", $z, e(u.quantity), 1), t("div", wz, e(u.number), 1)]))), 128))]), t("div", Tz, [t("div", Cz, [t("div", Lz, e(d(i)("sorthlotteryresult")), 1)]), (n(!0), a(R, null, A(r(m), (u, b) => (n(), a("div", {
                class: G(b == 0 ? "table-box none" : "table-box"),
                key: b
            }, [b != 0 ? (n(), a("div", Nz, e(u.title), 1)) : $("v-if", !0), (n(!0), a(R, null, A(u.drawsNumber, (_, w) => (n(), a("div", {
                class: "table-box-number",
                key: w
            }, e(_), 1))), 128))], 2))), 128))])]))
        }
    });
const Iz = F(zz, [
        ["__scopeId", "data-v-7bb580e6"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/NewVietnam/SorthRule.vue"]
    ]),
    Sz = {
        class: "vietnamPlay__C"
    },
    xz = {
        key: 0,
        class: "play"
    },
    Rz = {
        key: 1,
        class: "play"
    },
    Bz = {
        key: 0,
        class: "northrule"
    },
    Gz = {
        key: 1,
        class: "sorthrule"
    },
    Az = V({
        __name: "index",
        setup(s) {
            var r, c;
            const i = dt(),
                o = k(0),
                l = i.currentRoute.value.query.id,
                g = ((c = (r = i.currentRoute.value.query) == null ? void 0 : r.gVSs) == null ? void 0 : c.toString()) || "",
                m = () => {
                    i.go(-1)
                };
            return (p, u) => {
                const b = H("NavBar"),
                    _ = H("van-tab"),
                    w = H("van-tabs");
                return n(), a("div", Sz, [L(b, {
                    "left-arrow": "",
                    title: p.$t("lotteryManual"),
                    onClickLeft: m,
                    "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)"
                }, null, 8, ["title"]), L(w, {
                    active: o.value,
                    "onUpdate:active": u[0] || (u[0] = f => o.value = f),
                    type: "card",
                    class: G({
                        dis: d(g) == "2"
                    })
                }, {
                    default: M(() => [L(_, {
                        title: p.$t("gamePlay")
                    }, {
                        default: M(() => [d(l) == "1" ? (n(), a("div", xz, [L(OL)])) : (n(), a("div", Rz, [L(HN)]))]),
                        _: 1
                    }, 8, ["title"]), d(g) != "2" ? (n(), it(_, {
                        key: 0,
                        title: p.$t("rule")
                    }, {
                        default: M(() => [d(l) == "1" ? (n(), a("div", Bz, [L(wN)])) : (n(), a("div", Gz, [L(Iz)]))]),
                        _: 1
                    }, 8, ["title"])) : $("v-if", !0)]),
                    _: 1
                }, 8, ["active", "class"])])
            }
        }
    });
const Mz = F(Az, [
        ["__scopeId", "data-v-f14c68e9"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/Play/index.vue"]
    ]),
    IG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Mz
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Va = s => ($t("data-v-3e4c6499"), s = s(), wt(), s),
    Pz = {
        class: "TimeLeft__C"
    },
    Dz = Va(() => t("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "36",
        height: "36",
        viewBox: "0 0 36 36",
        fill: "none"
    }, [t("path", {
        d: "M23.67 3H12.33C6.66 3 5.25 4.515 5.25 10.56V27.45C5.25 31.44 7.44 32.385 10.095 29.535L10.11 29.52C11.34 28.215 13.215 28.32 14.28 29.745L15.795 31.77C17.01 33.375 18.975 33.375 20.19 31.77L21.705 29.745C22.785 28.305 24.66 28.2 25.89 29.52C28.56 32.37 30.735 31.425 30.735 27.435V10.56C30.75 4.515 29.34 3 23.67 3ZM11.67 18C10.845 18 10.17 17.325 10.17 16.5C10.17 15.675 10.845 15 11.67 15C12.495 15 13.17 15.675 13.17 16.5C13.17 17.325 12.495 18 11.67 18ZM11.67 12C10.845 12 10.17 11.325 10.17 10.5C10.17 9.675 10.845 9 11.67 9C12.495 9 13.17 9.675 13.17 10.5C13.17 11.325 12.495 12 11.67 12ZM24.345 17.625H16.095C15.48 17.625 14.97 17.115 14.97 16.5C14.97 15.885 15.48 15.375 16.095 15.375H24.345C24.96 15.375 25.47 15.885 25.47 16.5C25.47 17.115 24.96 17.625 24.345 17.625ZM24.345 11.625H16.095C15.48 11.625 14.97 11.115 14.97 10.5C14.97 9.885 15.48 9.375 16.095 9.375H24.345C24.96 9.375 25.47 9.885 25.47 10.5C25.47 11.115 24.96 11.625 24.345 11.625Z",
        fill: "currentColor"
    })], -1)),
    Oz = {
        class: "TimeLeft__C-name"
    },
    Ez = {
        class: "TimeLeft__C-num"
    },
    qz = {
        class: "TimeLeft__C-id"
    },
    jz = {
        class: "TimeLeft__C-text"
    },
    Hz = {
        class: "TimeLeft__C-time"
    },
    Wz = Va(() => t("div", null, ":", -1)),
    Vz = V({
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
        setup(s) {
            const i = s,
                o = k(!1),
                l = De(),
                g = () => {
                    o.value = !0, l.getWinGoRule(i.currentGame.typeID)
                };
            return (m, r) => (n(), a(R, null, [t("div", Pz, [t("div", {
                class: "TimeLeft__C-rule",
                onClick: g
            }, [Dz, O(e(m.$t("winTrxIndicate")), 1)]), t("div", Oz, e(i.gameName.replace("<br />", " ")), 1), t("div", Ez, [(n(!0), a(R, null, A(s.winNum, (c, p) => (n(), a("div", {
                key: p,
                class: G(["n" + c])
            }, null, 2))), 128))]), t("div", qz, e(i.currentInfo.gameNo), 1), t("div", jz, e(m.$t("timeLeftToBuy")), 1), t("div", Hz, [t("div", null, e(s.currentInfo.time1), 1), t("div", null, e(s.currentInfo.time2), 1), Wz, t("div", null, e(s.currentInfo.time3), 1), t("div", null, e(s.currentInfo.time4), 1)])]), $(" 规则弹层 begin"), L(Ai, {
                howPlayShow: o.value,
                gamePresentation: s.currentGame.gamePresentation,
                onClose: r[0] || (r[0] = c => o.value = !1)
            }, null, 8, ["howPlayShow", "gamePresentation"])], 64))
        }
    });
const Fz = F(Vz, [
        ["__scopeId", "data-v-3e4c6499"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/WinGo/TimeLeft.vue"]
    ]),
    Uz = s => ($t("data-v-7f36fe93"), s = s(), wt(), s),
    Kz = {
        class: "Betting__Popup-head"
    },
    Xz = {
        class: "Betting__Popup-head-title"
    },
    Qz = {
        class: "Betting__Popup-head-selectName"
    },
    Jz = {
        class: "Betting__Popup-body"
    },
    Yz = {
        class: "Betting__Popup-body-line"
    },
    Zz = {
        class: "Betting__Popup-body-line-list"
    },
    tI = ["onClick"],
    eI = {
        class: "Betting__Popup-body-line"
    },
    iI = {
        class: "Betting__Popup-body-line-btnL"
    },
    nI = {
        class: "Betting__Popup-body-line"
    },
    aI = Uz(() => t("div", null, null, -1)),
    oI = {
        class: "Betting__Popup-body-line-list"
    },
    sI = ["onClick"],
    lI = {
        class: "Betting__Popup-body-line"
    },
    cI = {
        class: "Betting__Popup-foot"
    },
    rI = {
        class: "Betting__Popup-foot-s bgcolor"
    },
    uI = {
        class: "Betting__Popup-PreSale"
    },
    dI = {
        class: "Betting__Popup-PreSale-head"
    },
    pI = {
        class: "Betting__Popup-PreSale-body"
    },
    gI = {
        class: "Betting__Popup-PreSale-foot"
    },
    bI = V({
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
                default: k(!1)
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
        setup(s, {
            emit: i
        }) {
            const o = s,
                {
                    t: l
                } = kt(),
                g = k(!1),
                m = k(!0),
                r = Y({
                    get() {
                        return o.bettingPopupShow || !1
                    },
                    set(T) {
                        i("update:bettingPopupShow", T)
                    }
                }),
                c = Y(() => {
                    switch (o.selectInfo.selecttype) {
                        case 13:
                            return l("big");
                        case 14:
                            return l("small");
                        case 10:
                            return l("redColor");
                        case 11:
                            return l("greenColor");
                        case 12:
                            return l("purpleColor");
                        default:
                            return o.selectInfo.selecttype
                    }
                }),
                p = Y(() => o.currentGame.typeName),
                u = T => {
                    switch (T) {
                        case 1:
                            o.selectInfo.count > 1 && (o.selectInfo.count--, h());
                            break;
                        case 2:
                            o.selectInfo.count++, h();
                            break
                    }
                },
                b = T => {
                    T > 0 && (o.selectInfo.count = parseInt(T), h())
                },
                _ = T => {
                    o.selectInfo.count = T, h()
                },
                w = T => {
                    o.selectInfo.coin = T, h()
                },
                f = () => {
                    g.value = !1, m.value = !0
                },
                C = () => {
                    if (o.selectInfo.count == 0) return Dt(l("bteNoCount"));
                    m.value ? i("submitBetting") : ve(l("agreePresaleRules"))
                },
                h = () => {
                    o.selectInfo.allCoin = o.selectInfo.coin * o.selectInfo.count
                };
            return (T, z) => {
                const y = H("van-field"),
                    v = H("van-popup"),
                    N = Ot("throttle-click");
                return n(), a(R, null, [$(" 投注内容 begin "), L(v, {
                    show: r.value,
                    "onUpdate:show": z[6] || (z[6] = S => r.value = S),
                    position: "bottom",
                    round: !0,
                    "close-on-click-overlay": !1
                }, {
                    default: M(() => [t("div", {
                        class: G([`Betting__Popup-${s.selectInfo.selecttype}`])
                    }, [t("div", Kz, [t("div", Xz, e(p.value.replace("<br />", " ")), 1), t("div", Qz, [t("span", null, e(d(l)("choose")), 1), t("span", null, e(c.value), 1)])]), t("div", Jz, [t("div", Yz, [O(e(d(l)("amount")) + " ", 1), t("div", Zz, [(n(!0), a(R, null, A(s.betTypeList, (S, I) => (n(), a("div", {
                        key: I,
                        class: G(["Betting__Popup-body-line-item", {
                            bgcolor: s.selectInfo.coin == S
                        }]),
                        onClick: x => w(S)
                    }, e(S), 11, tI))), 128))])]), t("div", eI, [O(e(d(l)("numbers")) + " ", 1), t("div", iI, [t("div", {
                        class: G(["Betting__Popup-btn", {
                            bgcolor: s.selectInfo.count > 0
                        }]),
                        onClick: z[0] || (z[0] = S => u(1))
                    }, "-", 2), L(y, {
                        class: "Betting__Popup-input",
                        modelValue: s.selectInfo.count,
                        "onUpdate:modelValue": z[1] || (z[1] = S => s.selectInfo.count = S),
                        modelModifiers: {
                            number: !0
                        },
                        type: "digit",
                        maxlength: 4,
                        onInput: b
                    }, null, 8, ["modelValue"]), t("div", {
                        class: "Betting__Popup-btn bgcolor",
                        onClick: z[2] || (z[2] = S => u(2))
                    }, "+")])]), t("div", nI, [aI, t("div", oI, [(n(!0), a(R, null, A(s.multipleList, (S, I) => (n(), a("div", {
                        key: I,
                        class: G(["Betting__Popup-body-line-item", {
                            bgcolor: s.selectInfo.count == S
                        }]),
                        onClick: x => _(S)
                    }, " X" + e(S), 11, sI))), 128))])]), t("div", lI, [t("span", {
                        class: G(["Betting__Popup-agree", {
                            active: m.value
                        }]),
                        onClick: z[3] || (z[3] = S => m.value = !m.value)
                    }, e(d(l)("agree")), 3), t("span", {
                        onClick: z[4] || (z[4] = S => g.value = !0),
                        class: "Betting__Popup-preSaleShow"
                    }, e(d(l)("presaleRules")), 1)])]), t("div", cI, [t("div", {
                        class: "Betting__Popup-foot-c",
                        onClick: z[5] || (z[5] = S => i("clearBetting"))
                    }, e(d(l)("cancel")), 1), vt((n(), a("div", rI, [O(e(d(l)("totalAmount")) + " " + e(d(Lt)(s.selectInfo.count * s.selectInfo.coin || 0)), 1)])), [
                        [N, {
                            handler: C,
                            wait: 2e3
                        }]
                    ])])], 2)]),
                    _: 1
                }, 8, ["show"]), $(" 规则弹层 begin"), L(v, {
                    show: g.value,
                    "onUpdate:show": z[7] || (z[7] = S => g.value = S),
                    "close-on-click-overlay": !1,
                    round: ""
                }, {
                    default: M(() => [t("div", uI, [t("div", dI, e(d(l)("presaleRules")), 1), t("div", pI, e(T.$t("betPopTXT")), 1), t("div", gI, [t("div", {
                        class: "Betting__Popup-PreSale-foot-btn",
                        onClick: f
                    }, e(d(l)("iKonw")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const mI = F(bI, [
        ["__scopeId", "data-v-7f36fe93"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/common/BettingPopup.vue"]
    ]),
    _I = {
        class: "Betting__C"
    },
    vI = {
        class: "Betting__C-mark"
    },
    kI = {
        class: "Betting__C-head"
    },
    hI = {
        class: "Betting__C-numC"
    },
    fI = ["onClick"],
    yI = {
        class: "Betting__C-multiple"
    },
    $I = ["onClick"],
    wI = {
        class: "Betting__C-foot"
    },
    TI = V({
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
        setup(s, {
            expose: i,
            emit: o
        }) {
            const l = s,
                g = Ri.global.t,
                m = Y(() => l.currentGame.betMultiple.split("|")),
                r = k(!1),
                c = k(""),
                p = k({
                    coin: 0,
                    count: m.value[0],
                    allCoin: 0,
                    gametype: 0,
                    typeid: 1,
                    issuenumber: "2020",
                    selecttype: 1
                });
            Mt(() => m, () => {
                p.value.count = m.value[0]
            }, {
                deep: !0,
                immediate: !0
            });
            const u = k(null),
                b = k(0),
                _ = k(!1),
                w = Y(() => (l.currentInfo.passTime < l.ProhibitBuyTime && v(), l.currentInfo.passTime < l.ProhibitBuyTime)),
                f = Y(() => l.currentGame.typeID),
                C = Y(() => l.currentGame.scope ? l.currentGame.scope.split("|").map(S => Number(S)) : []),
                h = S => {
                    p.value.count = S, T()
                },
                T = () => {
                    p.value.allCoin = p.value.coin * p.value.count
                },
                z = (S, I, x) => {
                    p.value.gametype = x, p.value.selecttype = S, p.value.issuenumber = l.currentInfo.gameNo, p.value.typeid = f.value, p.value.coin = C.value[0], c.value = S, r.value = !0
                },
                y = () => {
                    _.value || (_.value = !0, u.value || (u.value = setInterval(function() {
                        b.value = Math.floor(Math.random() * 11)
                    }, 50)), setTimeout(function() {
                        b.value > 9 && (b.value = 9), clearInterval(u.value), _.value = !1, u.value = null, z(b.value, "color" + b.value, 1)
                    }, 5e3))
                },
                v = () => {
                    r.value && (r.value = !1, p.value.coin = C.value[0], p.value.count = m.value[0], T(), o("changeBettingP", r.value))
                },
                N = async () => {
                    const S = await at(l.bettingApiFun({
                        typeId: p.value.typeid,
                        issuenumber: p.value.issuenumber,
                        amount: p.value.coin,
                        betCount: Number(p.value.count),
                        gameType: p.value.gametype,
                        selectType: p.value.selecttype
                    }));
                    (S == null ? void 0 : S.code) === 0 && (ve(g("code" + S.msgCode)), o("betting", p.value.issuenumber), v())
                };
            return i({
                bettingPopupShow: r
            }), (S, I) => (n(), a("div", _I, [vt(t("div", vI, [t("div", null, e(l.currentInfo.time3 || "0"), 1), t("div", null, e(l.currentInfo.time4 || "0"), 1)], 512), [
                [Qt, w.value]
            ]), t("div", kI, [t("div", {
                class: "Betting__C-head-g",
                onClick: I[0] || (I[0] = x => z(11, "#5CBA47", 0))
            }, e(S.$t("greenColor")), 1), t("div", {
                class: "Betting__C-head-p",
                onClick: I[1] || (I[1] = x => z(12, "#9831E9", 0))
            }, e(S.$t("purpleColor")), 1), t("div", {
                class: "Betting__C-head-r",
                onClick: I[2] || (I[2] = x => z(10, "#FB4E4E", 0))
            }, e(S.$t("redColor")), 1)]), t("div", hI, [(n(), a(R, null, A(10, (x, B) => t("div", {
                key: B,
                class: G([b.value == x ? "active" : "", "Betting__C-numC-item" + B]),
                onClick: D => z(B, "color" + B, 1)
            }, null, 10, fI)), 64))]), t("div", yI, [t("div", {
                class: "Betting__C-multiple-l",
                onClick: y
            }, e(S.$t("randomBet")), 1), (n(!0), a(R, null, A(m.value, (x, B) => (n(), a("div", {
                key: B,
                class: G(["Betting__C-multiple-r", {
                    active: p.value.count == x
                }]),
                onClick: D => h(x)
            }, " X" + e(x), 11, $I))), 128))]), t("div", wI, [t("div", {
                class: "Betting__C-foot-b",
                onClick: I[3] || (I[3] = x => z(13, "#ffc511", 2))
            }, e(S.$t("big")), 1), t("div", {
                class: "Betting__C-foot-s",
                onClick: I[4] || (I[4] = x => z(14, "#5CBA47", 2))
            }, e(S.$t("small")), 1)]), L(mI, {
                currentGame: s.currentGame,
                selectInfo: p.value,
                bettingPopupShow: r.value,
                betTypeList: C.value,
                multipleList: m.value,
                onClearBetting: v,
                onSubmitBetting: N
            }, null, 8, ["currentGame", "selectInfo", "bettingPopupShow", "betTypeList", "multipleList"])]))
        }
    });
const Fa = F(TI, [
        ["__scopeId", "data-v-4aca9bd1"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/WinGo/Betting.vue"]
    ]),
    ji = s => ($t("data-v-481307ec"), s = s(), wt(), s),
    CI = {
        class: "GameRecord__C"
    },
    LI = {
        class: "GameRecord__C-head"
    },
    NI = {
        class: "GameRecord__C-body"
    },
    zI = {
        key: 0
    },
    II = {
        key: 1
    },
    SI = {
        class: "GameRecord__C-origin"
    },
    xI = ji(() => t("div", {
        class: "GameRecord__C-origin-I red"
    }, null, -1)),
    RI = ji(() => t("div", {
        class: "GameRecord__C-origin-I violet"
    }, null, -1)),
    BI = {
        key: 1,
        class: "GameRecord__C-origin-I green"
    },
    GI = {
        key: 2,
        class: "GameRecord__C-origin-I red"
    },
    AI = ji(() => t("div", {
        class: "GameRecord__C-origin-I green"
    }, null, -1)),
    MI = ji(() => t("div", {
        class: "GameRecord__C-origin-I violet"
    }, null, -1)),
    PI = {
        key: 1,
        class: "GameRecord__C-body-empty"
    },
    DI = {
        key: 0,
        class: "GameRecord__C-foot"
    },
    OI = {
        class: "GameRecord__C-foot-page"
    },
    EI = V({
        __name: "GameRecord",
        props: {
            typeid: {
                type: Number,
                required: !0
            }
        },
        emits: ["changefive"],
        setup(s, {
            expose: i,
            emit: o
        }) {
            const l = s,
                g = k([]),
                m = k(4),
                r = k(10),
                c = k(1),
                p = () => {
                    c.value--, b()
                },
                u = () => {
                    c.value++, b()
                },
                b = async (f = !1) => {
                    if (l.typeid == null) return;
                    f && (c.value = 1);
                    const [C, h] = await ee(Na({
                        pageSize: r.value,
                        pageNo: c.value,
                        typeId: l.typeid
                    }));
                    g.value = h.list || [], m.value = h.totalPage, f && o("changefive", h.list.slice(0, 5).map(T => T.number))
                },
                _ = f => parseInt(f, 10) % 2 !== 0,
                w = f => {
                    let C = "";
                    switch (_(f) ? C = "greenColor" : C = "defaultColor", f) {
                        case "0":
                            C = "mixedColor0";
                            break;
                        case "5":
                            C = "mixedColor5";
                            break
                    }
                    return C
                };
            return i({
                getData: b
            }), ke(() => {
                b()
            }), (f, C) => {
                const h = H("van-col"),
                    T = H("van-row"),
                    z = H("van-icon");
                return n(), a("div", CI, [t("div", LI, [L(T, null, {
                    default: M(() => [L(h, {
                        span: "8"
                    }, {
                        default: M(() => [O(e(f.$t("betSerial")), 1)]),
                        _: 1
                    }), L(h, {
                        span: "5"
                    }, {
                        default: M(() => [O(e(f.$t("num")), 1)]),
                        _: 1
                    }), L(h, {
                        span: "5"
                    }, {
                        default: M(() => [O(e(f.$t("bigOrSmall")), 1)]),
                        _: 1
                    }), L(h, {
                        span: "6"
                    }, {
                        default: M(() => [O(e(f.$t("color")), 1)]),
                        _: 1
                    })]),
                    _: 1
                })]), t("div", NI, [g.value.length ? (n(!0), a(R, {
                    key: 0
                }, A(g.value, (y, v) => (n(), it(T, {
                    key: v
                }, {
                    default: M(() => [L(h, {
                        span: "8"
                    }, {
                        default: M(() => [O(e(y.issueNumber), 1)]),
                        _: 2
                    }, 1024), L(h, {
                        span: "5",
                        class: "numcenter"
                    }, {
                        default: M(() => [t("div", {
                            class: G(["GameRecord__C-body-num", w(y.number)])
                        }, e(y.number), 3)]),
                        _: 2
                    }, 1024), L(h, {
                        span: "5"
                    }, {
                        default: M(() => [Number(y.number) > 4 ? (n(), a("span", zI, e(f.$t("big")), 1)) : (n(), a("span", II, e(f.$t("small")), 1))]),
                        _: 2
                    }, 1024), L(h, {
                        span: "6"
                    }, {
                        default: M(() => [t("div", SI, [y.number == "0" ? (n(), a(R, {
                            key: 0
                        }, [xI, RI], 64)) : $("v-if", !0), y.number == "1" || y.number == "3" || y.number == "7" || y.number == "9" ? (n(), a("div", BI)) : $("v-if", !0), y.number == "2" || y.number == "4" || y.number == "6" || y.number == "8" ? (n(), a("div", GI)) : $("v-if", !0), y.number == "5" ? (n(), a(R, {
                            key: 3
                        }, [AI, MI], 64)) : $("v-if", !0)])]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024))), 128)) : (n(), a("div", PI, [L(pe)]))]), g.value.length ? (n(), a("div", DI, [t("div", {
                    class: G(["GameRecord__C-foot-previous", {
                        disabled: c.value <= 1
                    }]),
                    onClick: p
                }, [L(z, {
                    name: "arrow-left",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2), t("div", OI, e(c.value) + "/" + e(m.value), 1), t("div", {
                    class: G(["GameRecord__C-foot-next", {
                        disabled: c.value >= m.value
                    }]),
                    onClick: u
                }, [L(z, {
                    name: "arrow",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2)])) : $("v-if", !0)])
            }
        }
    });
const qI = F(EI, [
        ["__scopeId", "data-v-481307ec"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/WinGo/GameRecord.vue"]
    ]),
    jI = {
        class: "Trend__C"
    },
    HI = {
        class: "Trend__C-head"
    },
    WI = {
        class: "Trend__C-body1"
    },
    VI = {
        class: "Trend__C-body1-line"
    },
    FI = {
        class: "Trend__C-body1-line lottery"
    },
    UI = {
        key: 0,
        class: "Trend__C-body1-line-num"
    },
    KI = {
        key: 0,
        class: "Trend__C-body1-line"
    },
    XI = {
        class: "Trend__C-body1-line-num"
    },
    QI = {
        key: 1,
        class: "Trend__C-body1-line"
    },
    JI = {
        class: "Trend__C-body1-line-num"
    },
    YI = {
        key: 2,
        class: "Trend__C-body1-line"
    },
    ZI = {
        class: "Trend__C-body1-line-num"
    },
    tS = {
        key: 3,
        class: "Trend__C-body1-line"
    },
    eS = {
        class: "Trend__C-body1-line-num"
    },
    iS = {
        class: "Trend__C-body2"
    },
    nS = ["IssueNumber", "Number", "Colour", "rowId"],
    aS = {
        class: "Trend__C-body2-IssueNumber"
    },
    oS = {
        class: "Trend__C-body2-Num"
    },
    sS = ["id"],
    lS = {
        key: 1,
        class: "Trend__C-body2-empty"
    },
    cS = {
        key: 0,
        class: "Trend__C-foot"
    },
    rS = {
        class: "Trend__C-foot-page"
    },
    uS = V({
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
        setup(s, {
            expose: i,
            emit: o
        }) {
            const l = s,
                g = k([]),
                m = k([]),
                r = k(),
                c = k(),
                p = k(),
                u = k(),
                b = k(),
                _ = k(1),
                w = k(4);

            function f() {
                Zt(() => {
                    for (let v = 0; v < m.value.length; v++) m.value[v + 1] && C(m.value[v], m.value[v + 1])
                })
            }

            function C(v, N) {
                let S = parseInt(v.number),
                    I = parseInt(N.number);
                var x = document.getElementById("myCanvas" + v.rowId);
                if (x && x.getContext) {
                    var B = x.getContext("2d");
                    B.clearRect(0, 0, x.width, x.height), B.beginPath(), B.moveTo(S == 0 ? 15 : S * 29 + 15, 0), B.lineTo(I == 0 ? 15 : I * 29 + 15, x.height), B.strokeStyle = "red", B.stroke(), B.closePath()
                }
            }
            const h = () => {
                    _.value--, y()
                },
                T = () => {
                    _.value++, y()
                },
                z = async (v = !1) => {
                    if (l.typeid == null) return;
                    v && (_.value = 1, y(v));
                    const [N, S] = await ee(l.EmerdApi({
                        typeId: l.typeid
                    }));
                    if (S.length) {
                        const I = Object.keys(S[0]).filter(x => x.startsWith("number_"));
                        g.value = S.map(x => {
                            const B = {
                                list: []
                            };
                            return B.type = x.type, B.list = [], I.forEach(D => {
                                B.list.push(x[D])
                            }), B
                        })
                    }
                    r.value = g.value[0], c.value = g.value[1], p.value = g.value[2], u.value = g.value[3], b.value = g.value[4]
                },
                y = async (v = !1) => {
                    var I;
                    if (l.typeid == null) return;
                    v && (_.value = 1);
                    const [N, S] = await ee(l.listApi({
                        pageSize: 10,
                        pageNo: _.value,
                        typeId: l.typeid
                    }));
                    if (S.list ? m.value = S.list.map((x, B) => (x.rowId = B, x)) || [] : S.data.gameslist && (m.value = S.data.gameslist.map((x, B) => (x.rowId = B, x)) || []), w.value = S.totalPage, v) {
                        const x = ((I = S.data) == null ? void 0 : I.gameslist) || S.list || [];
                        o("changefive", x.slice(0, 5).map(B => B.number))
                    }
                    f()
                };
            return i({
                getData: z
            }), ke(() => {
                z(), y()
            }), (v, N) => {
                const S = H("van-col"),
                    I = H("van-row"),
                    x = H("van-icon");
                return n(), a("div", jI, [t("div", HI, [L(I, null, {
                    default: M(() => [L(S, {
                        span: "8"
                    }, {
                        default: M(() => [O(e(v.$t("betIssue")), 1)]),
                        _: 1
                    }), L(S, {
                        span: "16"
                    }, {
                        default: M(() => [O(e(v.$t("number")), 1)]),
                        _: 1
                    })]),
                    _: 1
                })]), t("div", WI, [t("div", VI, e(v.$t("trendDesc1")), 1), t("div", FI, [t("div", null, e(v.$t("trendDesc2")), 1), r.value ? (n(), a("div", UI, [(n(), a(R, null, A(10, B => t("div", {
                    key: B
                }, e(B - 1), 1)), 64))])) : $("v-if", !0)]), u.value && u.value.type == 2 ? (n(), a("div", KI, [t("div", null, e(v.$t("trendDesc3")), 1), t("div", XI, [(n(!0), a(R, null, A(u.value.list, (B, D) => (n(), a("div", {
                    key: "4" + D
                }, e(B), 1))), 128))])])) : $("v-if", !0), c.value && c.value.type == 4 ? (n(), a("div", QI, [t("div", null, e(v.$t("trendDesc4")), 1), t("div", JI, [(n(!0), a(R, null, A(c.value.list, (B, D) => (n(), a("div", {
                    key: "2" + D
                }, e(B), 1))), 128))])])) : $("v-if", !0), b.value && b.value.type == 1 ? (n(), a("div", YI, [t("div", null, e(v.$t("trendDesc5")), 1), t("div", ZI, [(n(!0), a(R, null, A(b.value.list, (B, D) => (n(), a("div", {
                    key: "5" + D
                }, e(B), 1))), 128))])])) : $("v-if", !0), p.value && p.value.type == 3 ? (n(), a("div", tS, [t("div", null, e(v.$t("trendDesc6")), 1), t("div", eS, [(n(!0), a(R, null, A(p.value.list, (B, D) => (n(), a("div", {
                    key: "3" + D
                }, e(B), 1))), 128))])])) : $("v-if", !0)]), t("div", iS, [m.value.length ? (n(!0), a(R, {
                    key: 0
                }, A(m.value, (B, D) => (n(), a("div", {
                    key: D,
                    IssueNumber: B.issueNumber,
                    Number: B.number,
                    Colour: B.colour,
                    rowId: B.rowId
                }, [L(I, null, {
                    default: M(() => [L(S, {
                        span: "8"
                    }, {
                        default: M(() => [t("div", aS, e(B.issueNumber), 1)]),
                        _: 2
                    }, 1024), L(S, {
                        span: "16"
                    }, {
                        default: M(() => [t("div", oS, [t("canvas", {
                            canvas: "",
                            id: "myCanvas" + B.rowId,
                            ref_for: !0,
                            ref: "canvas",
                            class: "line-canvas"
                        }, null, 8, sS), (n(), a(R, null, A(10, P => t("div", {
                            class: G(["Trend__C-body2-Num-item", Number(B.number) == P - 1 ? "action" + (P - 1) : ""]),
                            key: P
                        }, e(P - 1), 3)), 64)), t("div", {
                            class: G(["Trend__C-body2-Num-BS", {
                                isB: Number(B.number) > 4
                            }])
                        }, e(Number(B.number) > 4 ? "B" : "S"), 3)])]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024)], 8, nS))), 128)) : (n(), a("div", lS, [L(pe)]))]), m.value.length ? (n(), a("div", cS, [t("div", {
                    class: G(["Trend__C-foot-previous", {
                        disabled: _.value <= 1
                    }]),
                    onClick: h
                }, [L(x, {
                    name: "arrow-left",
                    class: "Trend__C-icon",
                    size: "20"
                })], 2), t("div", rS, e(_.value) + "/" + e(w.value), 1), t("div", {
                    class: G(["Trend__C-foot-next", {
                        disabled: _.value >= w.value
                    }]),
                    onClick: T
                }, [L(x, {
                    name: "arrow",
                    class: "Trend__C-icon",
                    size: "20"
                })], 2)])) : $("v-if", !0)])
            }
        }
    });
const Ua = F(uS, [
        ["__scopeId", "data-v-d485a39d"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/WinGo/Trend.vue"]
    ]),
    dS = {
        key: 1,
        class: "WinningTip__C-body-l1"
    },
    pS = {
        class: "WinningNum"
    },
    gS = {
        class: "WinningTip__C-body-l3"
    },
    bS = {
        key: 0,
        class: "isLose"
    },
    mS = {
        class: "head"
    },
    _S = {
        class: "bonus"
    },
    vS = {
        class: "gameDetail"
    },
    kS = {
        class: "WinningTip__C-body-l4"
    },
    hS = ["onClick"],
    fS = V({
        __name: "WinningTips",
        setup(s, {
            expose: i
        }) {
            const {
                t: o
            } = kt(), l = Y(() => r.value[0] ? r.value[0].state == 0 : !1), g = Y(() => r.value[0] || {}), m = k(!1), r = k([]), c = k({
                red: o("winColor1"),
                green: o("winColor2"),
                "red,violet": o("winColor3"),
                "green,violet": o("winColor4"),
                violet: o("winColor5")
            });
            let p = k();
            const u = () => {
                clearTimeout(p.value), r.value.shift(), m.value && r.value.length && (p.value = setTimeout(() => {
                    u()
                }, 1e3 * 3))
            };
            Mt(() => r.value.length, f => {
                f ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
            });
            const b = () => {
                    m.value = !m.value, m.value ? p.value = setTimeout(() => {
                        u()
                    }, 1e3 * 3) : clearTimeout(p.value)
                },
                _ = f => {
                    r.value.push(...f), m.value && (p.value = setTimeout(() => {
                        u()
                    }, 1e3 * 3))
                },
                w = () => {
                    r.value = []
                };
            return i({
                showMark: _
            }), (f, C) => vt((n(), a("div", {
                class: "WinningTip__C",
                onClick: u
            }, [t("div", {
                class: G(["WinningTip__C-body", {
                    isL: l.value
                }])
            }, [l.value ? (n(), a("div", {
                key: 0,
                class: G(["WinningTip__C-body-l1", {
                    isL: l.value
                }])
            }, e(f.$t("k3WarningTip1")), 3)) : (n(), a("div", dS, e(f.$t("k3WarningTip2")), 1)), t("div", {
                class: G(["WinningTip__C-body-l2", [`type${g.value.number}`]])
            }, [O(e(f.$t("winTips3")) + " ", 1), t("div", null, e(c.value[g.value.colour]), 1), t("div", pS, e(g.value.number), 1), t("div", null, e(g.value.number > 4 ? f.$t("big") : f.$t("small")), 1)], 2), t("div", gS, [l.value ? (n(), a("div", bS, e(f.$t("winTips4")), 1)) : (n(), a(R, {
                key: 1
            }, [t("div", mS, e(f.$t("winTips5")), 1), t("div", _S, e(d(Lt)(Number(g.value.winAmount))), 1)], 64)), t("div", vS, e(f.$t("winTips6")) + e(g.value.typeName) + " " + e(g.value.issueNumber), 1)]), t("div", kS, [t("div", {
                class: G(["acitveBtn", {
                    active: m.value
                }]),
                onClick: re(b, ["stop"])
            }, null, 10, hS), O(" " + e(f.$t("autoShutOff3s")), 1)]), t("div", {
                class: "closeBtn",
                onClick: w
            })], 2)], 512)), [
                [Qt, r.value.length]
            ])
        }
    });
const Ka = F(fS, [
        ["__scopeId", "data-v-e44179e3"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/common/WinningTips.vue"]
    ]),
    yS = {
        class: "WinGo__C"
    },
    $S = {
        class: "WinGo__C-head-more"
    },
    wS = V({
        __name: "index",
        setup(s) {
            const i = () => {
                    p.go(-1), sessionStorage.setItem("clickedGameType", "lottery")
                },
                o = {
                    GameRecord: qI,
                    Trend: Ua,
                    MyGameRecord: $n
                },
                l = k(),
                g = k(),
                m = k(),
                r = k(!1),
                c = k("GameRecord"),
                p = dt(),
                u = De();
            u.getWinGoData();
            const b = u.getWingo,
                _ = k(0),
                w = k(localStorage.getItem("volumeShow") || "1"),
                f = k(!1),
                C = k(null),
                h = k({
                    gameNo: "loading",
                    currentTime: "",
                    beginTime: "",
                    passTime: 180,
                    time1: 0,
                    time2: 0,
                    time3: 0,
                    time4: 0
                }),
                T = k(5),
                z = k(""),
                y = k(!1),
                v = k(null),
                N = Y(() => b[_.value] || {}),
                S = k([0, 0, 0, 0, 0]),
                I = Re(),
                x = Y(() => I.getIsShowLotteryDragon);
            Nt(() => {
                P()
            }), Fe(() => {
                clearInterval(C.value), At.value.forEach(_t => {
                    clearInterval(_t)
                }), Bt.value && clearTimeout(Bt.value)
            }), Mt(() => Be().visibility, _t => {
                _t === 0 ? clearInterval(C.value) : (P(), q(_.value))
            });
            const B = () => {
                    w.value == "1" ? w.value = "2" : w.value = "1", localStorage.setItem("volumeShow", w.value)
                },
                D = _t => {
                    p.push({
                        name: _t
                    })
                },
                P = () => {
                    v.value == null && q(0)
                },
                q = _t => {
                    u.getWinGoData(), _.value = _t, v.value = b[_t].typeID, X(v.value), Zt(() => {
                        l.value.getData(v.value)
                    })
                },
                X = async _t => {
                    c.value == "MyGameRecord" && lt(_t);
                    const [nt, ct] = await ee(Ds({
                        typeId: _t
                    }));
                    h.value.gameNo = ct.issueNumber, h.value.currentTime = ct.serviceTime.replace(/-/g, "/"), h.value.beginTime = ct.startTime.replace(/-/g, "/"), gt()
                },
                lt = async _t => {
                    const nt = await at(Os({
                        typeId: _t
                    }));
                    nt && (S.value = nt.data.number.split(","))
                },
                gt = () => {
                    const _t = new Date(h.value.currentTime).getTime(),
                        nt = new Date(h.value.beginTime).getTime();
                    let ct = (_t - nt) / 1e3,
                        Z = b[_.value];
                    if (ct > Z.intervalM * 60 && (ct = Z.intervalM * 60), h.value.passTime = Z.intervalM * 60 - ct, h.value.passTime < 0) {
                        z.value = "An error occurred, please contact customer service。The game time is " + Z.intervalM + " minutes,start time is " + h.value.beginTime + ",current time is" + h.value.currentTime + "!", f.value = !0;
                        return
                    }
                    rt()
                },
                rt = () => {
                    clearInterval(C.value), J(!1), C.value = setInterval(function() {
                        J()
                    }, 1e3)
                },
                J = (_t = !0) => {
                    if (h.value.passTime <= T.value && (y.value = !1), w.value == "1" && (h.value.passTime <= T.value && h.value.passTime > 1 ? Q(1) : h.value.passTime == 1 && Q(2)), h.value.passTime > 0) {
                        let nt = h.value.passTime;
                        h.value.time2 = Math.floor(nt / 60), h.value.time3 = Math.floor(nt % 60 / 10), h.value.time4 = Math.floor(nt % 10), h.value.passTime--
                    } else clearInterval(C.value), _t && st()
                },
                Q = (_t = 1) => {
                    const nt = document.getElementById(`voice${_t}`);
                    nt && nt.play()
                },
                st = () => {
                    X(v.value || 0), m.value.getWinsUserAmount(!1), l.value.getData(!0)
                },
                Rt = k({}),
                At = k([]),
                ot = _t => {
                    if (m.value.getWinsUserAmount(!1), l.value.getData(), Rt.value[_t]) return;
                    Rt.value[_t] = !0;
                    const {
                        time1: nt,
                        time2: ct,
                        time3: Z,
                        time4: tt
                    } = h.value, W = (nt * 10 * 60 + ct * 60 + Z * 10 + tt) * 1e3 + Math.floor(Math.random() * 2e3) + 1e3;
                    At.value[N.value.intervalM] = setTimeout(() => {
                        Gt(_t)
                    }, W)
                },
                yt = _t => {
                    r.value = _t
                },
                Tt = _t => {
                    S.value = _t
                },
                Bt = k(null),
                Gt = async _t => {
                    const [nt, ct] = await ee(Es({
                        issueNumber: [_t]
                    }));
                    if (ct) {
                        const Z = ct.filter(tt => tt.state != 2);
                        if (!Z.length) return;
                        g.value.showMark(Z), delete Rt.value[_t]
                    }
                };
            return (_t, nt) => {
                const ct = H("NavBar");
                return n(), a("div", yS, [L(ct, {
                    "left-arrow": "",
                    onClickLeft: i,
                    class: "main",
                    headLogo: !0
                }, {
                    right: M(() => [t("div", $S, [t("div", {
                        onClick: nt[0] || (nt[0] = Z => D("CustomerService"))
                    }), t("div", {
                        class: G({
                            disableVoice: w.value == "2"
                        }),
                        onClick: B
                    }, null, 2)])]),
                    _: 1
                }), $(" 钱包余额 "), L(Bi, {
                    ref_key: "WallteRef",
                    ref: m
                }, null, 512), L(wi, {
                    key: "wingo",
                    class: "lottery-notice"
                }), $(" 游戏类型 "), L(Gi, {
                    gameList: d(b),
                    currentGameIndex: _.value,
                    onChangeGame: q
                }, null, 8, ["gameList", "currentGameIndex"]), $(" 游戏开始时间倒计时 "), L(Fz, {
                    currentInfo: h.value,
                    winNum: S.value,
                    gameName: N.value.typeName,
                    currentGame: N.value
                }, null, 8, ["currentInfo", "winNum", "gameName", "currentGame"]), $(" 投注表 "), L(Fa, {
                    currentInfo: h.value,
                    currentGame: N.value,
                    VoiceType: w.value,
                    typeid: v.value,
                    onBetting: ot,
                    onChangeBettingP: yt,
                    "betting-api-fun": d(ha)
                }, null, 8, ["currentInfo", "currentGame", "VoiceType", "typeid", "betting-api-fun"]), $(" 记录导航 "), L(Mi, {
                    record: c.value,
                    onChangeC: nt[1] || (nt[1] = Z => c.value = Z)
                }, null, 8, ["record"]), $(" 动态展示对应的组件 "), (n(), it(Qe, null, [(n(), it(He(o[c.value]), {
                    class: "game-record",
                    ref_key: "RecordComponent",
                    ref: l,
                    typeid: v.value,
                    ApiFun: d(pn),
                    listApi: d(Na),
                    EmerdApi: d(va),
                    goPathName: "AllLotteryGames-BettingRecordWin",
                    onChangefive: Tt
                }, null, 40, ["typeid", "ApiFun", "listApi", "EmerdApi"]))], 1024)), $(" 弹窗组件 "), L(xe, {
                    show: f.value,
                    onConfirm: nt[2] || (nt[2] = Z => D("/login"))
                }, {
                    content: M(() => [t("div", null, e(z.value), 1)]),
                    _: 1
                }, 8, ["show"]), $(" 中奖提示组件 "), L(Ka, {
                    ref_key: "WinningTipsRef",
                    ref: g
                }, null, 512), x.value ? (n(), it(kn, {
                    key: 0
                })) : $("v-if", !0), L(Pi)])
            }
        }
    });
const TS = F(wS, [
        ["__scopeId", "data-v-5d71c3fd"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/WinGo/index.vue"]
    ]),
    SG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: TS
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ln = s => ($t("data-v-3c1bee29"), s = s(), wt(), s),
    CS = {
        class: "TimeLeft__C"
    },
    LS = {
        class: "TimeLeft__C-l1"
    },
    NS = {
        class: "TimeLeft__C-l1-l"
    },
    zS = {
        class: "TimeLeft__C-l1-no"
    },
    IS = Ln(() => t("svg", {
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
    SS = Ln(() => t("svg", {
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
    xS = {
        class: "TimeLeft__C-l2"
    },
    RS = {
        class: "TimeLeft__C-time"
    },
    BS = Ln(() => t("div", {
        notime: ""
    }, ":", -1)),
    GS = {
        class: "TimeLeft__C-l3"
    },
    AS = V({
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
        setup(s) {
            const i = s,
                o = k(!1),
                l = dt(),
                g = Y(() => {
                    const {
                        blockID: u
                    } = i.settled;
                    if (!u) return [0, 0, 0, 0, 0];
                    let b = u.substring(u.length - 5).toUpperCase();
                    return /\d/.test(b) ? [...b] : [...u.substring(u.length - 5, u.length - 10).toUpperCase()]
                }),
                m = Y(() => {
                    var u;
                    return (u = i.settled) == null ? void 0 : u.number
                }),
                r = () => {
                    let u = "https://tronscan.org";
                    l.push({
                        name: "AllLotteryGames-WinTrxIframe",
                        query: {
                            url: u
                        }
                    })
                },
                c = De(),
                p = () => {
                    o.value = !0, c.getTrxRule(i.currentGame.typeID)
                };
            return (u, b) => (n(), a("div", CS, [t("div", LS, [t("div", NS, [t("div", zS, e(u.$t("winTrxNum")), 1), t("div", {
                class: "TimeLeft__C-l1-tip",
                onClick: p
            }, [IS, O(e(u.$t("winTrxIndicate")), 1)])]), t("div", {
                class: "TimeLeft__C-l1-r",
                onClick: r
            }, [SS, O(e(u.$t("winTrxPub")), 1)])]), t("div", xS, [t("div", null, e(i.currentInfo.gameNo), 1), t("div", RS, [t("span", null, e(u.$t("winTrxTime")), 1), t("div", null, e(s.currentInfo.time1), 1), t("div", null, e(s.currentInfo.time2), 1), BS, t("div", null, e(s.currentInfo.time3), 1), t("div", null, e(s.currentInfo.time4), 1)])]), t("div", GS, [(n(!0), a(R, null, A(g.value, (_, w) => (n(), a(R, {
                key: w
            }, [m.value == _ ? (n(), a("p", {
                key: 0,
                class: G(["num" + _, m.value == _ && "prize" + _])
            }, null, 2)) : (n(), a("div", {
                key: 1,
                class: G(["num" + _, m.value == _ && "prize" + _])
            }, null, 2))], 64))), 128))]), $(" 规则弹层 begin"), L(Ai, {
                howPlayShow: o.value,
                gamePresentation: s.currentGame.gamePresentation,
                onClose: b[0] || (b[0] = _ => o.value = !1)
            }, null, 8, ["howPlayShow", "gamePresentation"])]))
        }
    });
const MS = F(AS, [
        ["__scopeId", "data-v-3c1bee29"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/WinTrx/TimeLeft.vue"]
    ]),
    PS = {
        class: "GameRecord__C"
    },
    DS = {
        class: "GameRecord__C-head"
    },
    OS = {
        class: "GameRecord__C-body"
    },
    ES = {
        class: "numberC"
    },
    qS = {
        key: 1,
        class: "GameRecord__C-body-empty"
    },
    jS = {
        key: 0,
        class: "GameRecord__C-foot"
    },
    HS = {
        class: "GameRecord__C-foot-page"
    },
    WS = V({
        __name: "GameRecord",
        props: {
            typeid: {
                type: Number,
                required: !0
            }
        },
        setup(s, {
            expose: i
        }) {
            const o = s,
                l = k([]),
                g = k(4),
                m = k(10),
                r = k(1),
                c = dt(),
                p = () => {
                    r.value--, b()
                },
                u = () => {
                    r.value++, b()
                },
                b = async (w = !1) => {
                    if (o.typeid == null) return;
                    w && (r.value = 1);
                    const [f, C] = await ee(za({
                        pageSize: m.value,
                        pageNo: r.value,
                        typeId: o.typeid
                    }));
                    if (!C) return;
                    let h = C == null ? void 0 : C.data.date.serviceTime;
                    l.value = C.data.gameslist.map(T => {
                        if (T.blockID) {
                            var z = T.blockID.length,
                                y = T.blockID.substring(z - 4, z);
                            T.blockName = "**" + y
                        }
                        if (T.issueNumber) {
                            var v = T.issueNumber.substring(0, 3),
                                N = T.issueNumber.length,
                                S = T.issueNumber.substring(N - 4, N);
                            T.issue = v + "**" + S
                        }
                        if (T.blockTime) {
                            let I = h.split(" "),
                                x = T.blockTime.split(" ");
                            T.day = I[0].substring(8, 10) == x[0].substring(8, 10), T.time = x[1]
                        }
                        return T
                    }), g.value = C.totalPage
                },
                _ = w => {
                    let f = `https://tronscan.org/#/block/${w}`;
                    c.push({
                        name: "AllLotteryGames-WinTrxIframe",
                        query: {
                            url: f
                        }
                    })
                };
            return i({
                getData: b
            }), ke(() => {
                b()
            }), (w, f) => {
                const C = H("van-col"),
                    h = H("van-row"),
                    T = H("svg-icon"),
                    z = H("van-icon");
                return n(), a("div", PS, [t("div", DS, [L(h, null, {
                    default: M(() => [L(C, {
                        span: "4"
                    }, {
                        default: M(() => [O(e(w.$t("betSerial")), 1)]),
                        _: 1
                    }), L(C, {
                        span: "6"
                    }, {
                        default: M(() => [O(e(w.$t("winTrxDesc1")), 1)]),
                        _: 1
                    }), L(C, {
                        span: "5"
                    }, {
                        default: M(() => [O(e(w.$t("winTrxDesc2")), 1)]),
                        _: 1
                    }), L(C, {
                        span: "5"
                    }, {
                        default: M(() => [O(e(w.$t("winTrxDesc3")), 1)]),
                        _: 1
                    }), L(C, {
                        span: "4"
                    }, {
                        default: M(() => [O(e(w.$t("winTrxDesc4")), 1)]),
                        _: 1
                    })]),
                    _: 1
                })]), t("div", OS, [l.value.length ? (n(!0), a(R, {
                    key: 0
                }, A(l.value, (y, v) => (n(), it(h, {
                    key: v
                }, {
                    default: M(() => [L(C, {
                        span: "6"
                    }, {
                        default: M(() => [O(e(y.issue), 1)]),
                        _: 2
                    }, 1024), L(C, {
                        span: "4",
                        onClick: N => _(y.blockNumber)
                    }, {
                        default: M(() => [O(e(y.blockNumber) + " ", 1), y.day ? (n(), it(T, {
                            key: 0,
                            name: "trxquestion",
                            class: "Binquire"
                        })) : $("v-if", !0)]),
                        _: 2
                    }, 1032, ["onClick"]), L(C, {
                        span: "5"
                    }, {
                        default: M(() => [O(e(y.time), 1)]),
                        _: 2
                    }, 1024), L(C, {
                        span: "4"
                    }, {
                        default: M(() => [O(e(y.blockName), 1)]),
                        _: 2
                    }, 1024), L(C, {
                        span: "5"
                    }, {
                        default: M(() => [t("div", ES, [t("div", {
                            class: G(["number", ["num" + y.number]])
                        }, e(y.number), 3), t("div", {
                            class: G([Number(y.number) > 4 ? "big" : "small"])
                        }, e(Number(y.number) > 4 ? "B" : "S"), 3)])]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1024))), 128)) : (n(), a("div", qS, [L(pe)]))]), l.value.length ? (n(), a("div", jS, [t("div", {
                    class: G(["GameRecord__C-foot-previous", {
                        disabled: r.value <= 1
                    }]),
                    onClick: p
                }, [L(z, {
                    name: "arrow-left",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2), t("div", HS, e(r.value) + "/" + e(g.value), 1), t("div", {
                    class: G(["GameRecord__C-foot-next", {
                        disabled: r.value >= g.value
                    }]),
                    onClick: u
                }, [L(z, {
                    name: "arrow",
                    class: "GameRecord__C-icon",
                    size: "20"
                })], 2)])) : $("v-if", !0)])
            }
        }
    });
const VS = F(WS, [
        ["__scopeId", "data-v-7a795a91"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/AllLotteryGames/WinTrx/GameRecord.vue"]
    ]),
    FS = {
        class: "WinTrx__C"
    },
    US = {
        class: "WinTrx__C-head-more"
    },
    KS = V({
        __name: "index",
        setup(s) {
            const i = () => {
                    p.go(-1), sessionStorage.setItem("clickedGameType", "lottery")
                },
                o = {
                    GameRecord: VS,
                    Trend: Ua,
                    MyGameRecord: $n
                },
                l = k(),
                g = k(),
                m = k(),
                r = k(!1),
                c = k("GameRecord"),
                p = dt(),
                u = De(),
                b = u.getTrx,
                _ = k(0),
                w = k(localStorage.getItem("volumeShow") || "1"),
                f = k(!1),
                C = k(null),
                h = k(),
                T = k({
                    gameNo: "loading",
                    currentTime: "",
                    beginTime: "",
                    passTime: 180,
                    time1: 0,
                    time2: 0,
                    time3: 0,
                    time4: 0
                }),
                z = k(10),
                y = k(""),
                v = k(!1),
                N = k(null),
                S = Y(() => b[_.value] || {});
            Nt(() => {
                B()
            }), Fe(() => {
                clearInterval(C.value), Q.value.forEach(yt => {
                    clearInterval(yt)
                }), At.value && clearTimeout(At.value)
            }), Mt(() => Be().visibility, yt => {
                yt === 0 ? clearInterval(C.value) : (B(), D(_.value))
            });
            const I = () => {
                    w.value == "1" ? w.value = "2" : w.value = "1", localStorage.setItem("volumeShow", w.value)
                },
                x = yt => {
                    p.push({
                        name: yt
                    })
                },
                B = () => {
                    N.value == null && D(0)
                },
                D = yt => {
                    u.getTrxData(), _.value = yt, N.value = b[yt].typeID, P(N.value), Zt(() => {
                        l.value.getData(N.value)
                    })
                },
                P = async yt => {
                    const [Tt, Bt] = await ee(qs({
                        typeId: yt
                    }));
                    T.value.gameNo = Bt.predraw.issueNumber, T.value.currentTime = Bt.predraw.serviceTime.replace(/-/g, "/"), T.value.beginTime = Bt.predraw.startTime.replace(/-/g, "/"), h.value = Bt.settled, q()
                },
                q = () => {
                    if (!b.length) return;
                    var yt = new Date(T.value.currentTime).getTime(),
                        Tt = new Date(T.value.beginTime).getTime();
                    let Bt = (yt - Tt) / 1e3,
                        Gt = b[_.value];
                    if (Bt > Gt.intervalM * 60 && (Bt = Gt.intervalM * 60), T.value.passTime = Gt.intervalM * 60 - Bt, T.value.passTime < 0) {
                        y.value = "An error occurred, please contact customer service。The game time is " + Gt.intervalM + " minutes,start time is " + T.value.beginTime + ",current time is" + T.value.currentTime + "!", f.value = !0;
                        return
                    }
                    X()
                },
                X = () => {
                    clearInterval(C.value), lt(!1), C.value = setInterval(function() {
                        lt()
                    }, 1e3)
                },
                lt = (yt = !0) => {
                    if (T.value.passTime <= z.value && (v.value = !1), w.value == "1" && (T.value.passTime <= z.value && T.value.passTime > 1 ? gt(1) : T.value.passTime == 1 && gt(2)), T.value.passTime > 0) {
                        let Tt = T.value.passTime;
                        T.value.time2 = Math.floor(Tt / 60), T.value.time3 = Math.floor(Tt % 60 / 10), T.value.time4 = Math.floor(Tt % 10), T.value.passTime--
                    } else clearInterval(C.value), yt && rt()
                },
                gt = (yt = 1) => {
                    const Tt = document.getElementById(`voice${yt}`);
                    Tt && Tt.play()
                },
                rt = () => {
                    P(N.value), m.value.getWinsUserAmount(!1), l.value.getData(!0)
                },
                J = k({}),
                Q = k([]),
                st = yt => {
                    if (m.value.getWinsUserAmount(!1), l.value.getData(), J.value[yt]) return;
                    J.value[yt] = !0;
                    const {
                        time1: Tt,
                        time2: Bt,
                        time3: Gt,
                        time4: _t
                    } = T.value, nt = (Tt * 10 * 60 + Bt * 60 + Gt * 10 + _t) * 1e3;
                    Q.value[S.value.intervalM] = setTimeout(() => {
                        ot(yt)
                    }, nt)
                },
                Rt = yt => {
                    r.value = yt
                },
                At = k(null),
                ot = async yt => {
                    const Tt = await at(js({
                        issueNumber: [yt]
                    }));
                    if (Tt) {
                        const Bt = Tt.data.filter(Gt => Gt.state != 2);
                        if (!Bt.length) {
                            At.value = setTimeout(() => {
                                ot(yt)
                            }, 2e3);
                            return
                        }
                        g.value.showMark(Bt), delete J.value[yt]
                    }
                };
            return (yt, Tt) => {
                const Bt = H("NavBar");
                return n(), a("div", FS, [L(Bt, {
                    "left-arrow": "",
                    onClickLeft: i,
                    class: "main",
                    headLogo: !0
                }, {
                    right: M(() => [t("div", US, [t("div", {
                        onClick: Tt[0] || (Tt[0] = Gt => x("CustomerService"))
                    }), t("div", {
                        class: G({
                            disableVoice: w.value == "2"
                        }),
                        onClick: I
                    }, null, 2)])]),
                    _: 1
                }), $(" 钱包余额 "), L(Bi, {
                    ref_key: "WallteRef",
                    ref: m
                }, null, 512), L(wi, {
                    key: "winx"
                }), $(" 游戏类型 "), L(Gi, {
                    gameList: d(b),
                    currentGameIndex: _.value,
                    onChangeGame: D
                }, null, 8, ["gameList", "currentGameIndex"]), $(" 游戏开始时间倒计时 "), L(MS, {
                    currentInfo: T.value,
                    gameName: S.value.typeName,
                    currentGame: S.value,
                    settled: h.value
                }, null, 8, ["currentInfo", "gameName", "currentGame", "settled"]), $(" 投注表 "), L(Fa, {
                    currentInfo: T.value,
                    ProhibitBuyTime: z.value,
                    currentGame: S.value,
                    VoiceType: w.value,
                    typeid: N.value,
                    onBetting: st,
                    onChangeBettingP: Rt,
                    "betting-api-fun": d(Hs)
                }, null, 8, ["currentInfo", "ProhibitBuyTime", "currentGame", "VoiceType", "typeid", "betting-api-fun"]), $(" 记录导航 "), L(Mi, {
                    record: c.value,
                    onChangeC: Tt[1] || (Tt[1] = Gt => c.value = Gt)
                }, null, 8, ["record"]), $(" 动态展示对应的组件 "), (n(), it(Qe, null, [(n(), it(He(o[c.value]), {
                    ref_key: "RecordComponent",
                    ref: l,
                    typeid: N.value,
                    ApiFun: d(gn),
                    listApi: d(za),
                    EmerdApi: d(ya),
                    goPathName: "AllLotteryGames-BettingRecordWinTrx"
                }, null, 8, ["typeid", "ApiFun", "listApi", "EmerdApi"]))], 1024)), $(" 弹窗组件 "), L(xe, {
                    show: f.value,
                    onConfirm: Tt[2] || (Tt[2] = Gt => x("/login"))
                }, {
                    content: M(() => [t("div", null, e(y.value), 1)]),
                    _: 1
                }, 8, ["show"]), $(" 中奖提示组件 "), L(Ka, {
                    ref_key: "WinningTipsRef",
                    ref: g
                }, null, 512), L(Pi)])
            }
        }
    });
const XS = F(KS, [
        ["__scopeId", "data-v-ac90c264"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/WinTrx/index.vue"]
    ]),
    xG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: XS
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    QS = {
        class: "WinTrxIfram__C"
    },
    JS = ["src"],
    YS = V({
        __name: "index",
        setup(s) {
            const i = dt(),
                o = Y(() => String(i.currentRoute.value.query.url)),
                l = () => {
                    i.go(-1)
                };
            return (g, m) => {
                const r = H("NavBar");
                return n(), a("div", QS, [L(r, {
                    "left-arrow": "",
                    onClickLeft: l,
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
                }, null, 8, JS)])
            }
        }
    });
const ZS = F(YS, [
        ["__scopeId", "data-v-5930c2be"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/WinTrxIframe/index.vue"]
    ]),
    RG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ZS
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    tx = {
        class: "Xoso"
    },
    ex = {
        style: {
            "background-color": "#f7f8ff"
        }
    },
    ix = {
        key: 1,
        class: "Xoso-page"
    },
    nx = {
        class: "title"
    },
    ax = {
        class: "list"
    },
    ox = ["onClick"],
    sx = {
        key: 0
    },
    lx = ["src"],
    cx = {
        key: 1,
        class: "info"
    },
    rx = {
        class: "issue"
    },
    ux = ["src"],
    dx = {
        class: "time"
    },
    px = V({
        __name: "index",
        setup(s) {
            const {
                t: i
            } = kt(), o = dt();
            let l = o.currentRoute.value.query.id;
            const g = Y(() => l == "5" ? "XOSO" : l == "6" ? i("fXosoTitle") : "XOSO"),
                {
                    setLoading: m
                } = un(),
                r = () => {
                    o.go(-1)
                },
                c = (f, C, h, T) => {
                    C.day = h, C.id = l, C.areId = T, o.push({
                        name: f,
                        query: C
                    })
                },
                p = k(null),
                u = k(0),
                b = f => {
                    sessionStorage.setItem("xosoList", JSON.stringify(_.value[f.index]))
                },
                _ = k([]);
            return (async () => {
                m(!0);
                let f;
                l == "5" ? f = await at(wa()) : l == "6" && (f = await at(Ta())), f && (_.value = f.data, sessionStorage.setItem("xosoList", JSON.stringify(f.data[0]))), m(!1)
            })(), (f, C) => {
                const h = H("NavBar"),
                    T = H("van-sticky");
                return n(), a("div", tx, [L(h, {
                    class: "main",
                    "left-arrow": "",
                    onClickLeft: r,
                    "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)",
                    title: g.value
                }, {
                    default: M(() => [$(` <template #right>
				<div class="WinGo__C-head-more">
					<div @click="goPath('AllLotteryGames-XoSoRecord')">投注记录</div>
				</div>
			</template> `)]),
                    _: 1
                }, 8, ["title"]), d(l) == "5" ? (n(), it(T, {
                    key: 0,
                    "offset-top": 46,
                    container: p.value,
                    class: "bet-container-sticky"
                }, {
                    default: M(() => [t("div", ex, [L(Xe, {
                        list: _.value,
                        active: u.value,
                        "onUpdate:active": C[0] || (C[0] = z => u.value = z),
                        tabClassName: "tabs",
                        onOnClickTab: b,
                        activeClassName: "tab_active",
                        ref: "tabRefs",
                        tabItemClassName: "funtab_item"
                    }, {
                        default: M(({
                            item: z,
                            index: y
                        }) => [t("div", {
                            class: G(["tab_item", {
                                tab_active: y === u.value
                            }])
                        }, [t("span", null, e(f.$t(z.week)), 1), t("p", null, e(z.day), 1)], 2)]),
                        _: 1
                    }, 8, ["list", "active"])])]),
                    _: 1
                }, 8, ["container"])) : $("v-if", !0), _.value[u.value] ? (n(), a("div", ix, [(n(!0), a(R, null, A(_.value[u.value].areInfos, (z, y) => (n(), a("div", {
                    class: "Xoso-page-box",
                    key: y
                }, [t("div", nx, e(f.$t("code" + z.areNameCode)), 1), t("div", ax, [(n(!0), a(R, null, A(z.areIssueNos, (v, N) => (n(), a("div", {
                    class: "item",
                    key: N,
                    onClick: S => c("AllLotteryGames-NewVietnam", v, _.value[u.value].day, z.areId)
                }, [v.status == 1 || v.status == 2 || v.status == 3 ? (n(), a("h4", sx, [O(e(f.$t("code" + v.nameCode)) + " ", 1), t("img", {
                    class: "img",
                    src: d(Xt)("public", "xosoCity"),
                    alt: ""
                }, null, 8, lx)])) : $("v-if", !0), v.status == 1 || v.status == 2 || v.status == 3 ? (n(), a("div", cx, [t("div", rx, [t("img", {
                    class: "img",
                    src: d(Xt)("public", "ticketstar"),
                    alt: ""
                }, null, 8, ux), O(e(v.issueNo), 1)]), t("p", null, e(f.$t("xosoTxt72")), 1), t("div", dx, [(n(!0), a(R, null, A(_.value[u.value].day.split("-"), (S, I) => (n(), a("div", {
                    key: I
                }, e(S), 1))), 128))])])) : $("v-if", !0)], 8, ox))), 128))])]))), 128))])) : $("v-if", !0)])
            }
        }
    });
const gx = F(px, [
        ["__scopeId", "data-v-d965c53a"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/XoSo/index.vue"]
    ]),
    BG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: gx
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    bx = {
        class: "TeamReport__C"
    },
    mx = {
        class: "TeamReport__C-head"
    },
    _x = {
        class: "TeamReport__C-head-fixed"
    },
    vx = {
        class: "TeamReport__C-head-line1"
    },
    kx = {
        key: 0,
        class: "default"
    },
    hx = {
        key: 1,
        class: "default"
    },
    fx = {
        class: "TeamReport__C-head-line2"
    },
    yx = {
        key: 0,
        class: "default"
    },
    $x = {
        key: 1,
        class: "default"
    },
    wx = {
        class: "TeamReport__C-list"
    },
    Tx = V({
        __name: "index",
        setup(s) {
            const {
                t: i
            } = kt(), o = dt(), l = sn(), g = () => {
                o.go(-1)
            }, m = k([]), r = k([]), c = {
                text: "nameCode",
                value: "value"
            }, p = k(), u = k(!1), b = k(!1), _ = Wt({
                bettingParentType: "",
                areId: "",
                startDate: "",
                endDate: ""
            }), w = k(), f = k(), C = ({
                selectedOptions: N
            }) => {
                _.bettingParentType = Number(N[0].value), f.value = N[0].nameCode, w.value.getData(), u.value = !1
            }, h = k(), T = ({
                selectedOptions: N
            }) => {
                _.areId = Number(N[0].value), h.value = N[0].nameCode, w.value.getData(), b.value = !1
            };
            async function z() {
                let N = p.value.endDateValue !== "" ? `${p.value.endDateValue} 23:59:59` : "";
                _.startDate = `${me(p.value.startDateValue).format("YYYY-MM-DD")} 23:59:59`, _.endDate = `${me(N).format("YYYY-MM-DD")} 23:59:59`, w.value.getData()
            }
            const y = async () => {
                    const N = Number(l.query.areId) | 0,
                        S = await at(Ws({
                            areId: N
                        }));
                    r.value = v(S.data.categorys), r.value.unshift({
                        value: "",
                        nameCode: i("all")
                    }), m.value = v(S.data.ares), m.value.unshift({
                        value: "",
                        nameCode: i("all")
                    })
                },
                v = N => N.map(I => {
                    let x = {
                        value: "",
                        nameCode: ""
                    };
                    return x.value = I.value, x.nameCode = i("code" + I.nameCode), x
                });
            return y(), (N, S) => {
                const I = H("NavBar"),
                    x = H("van-icon"),
                    B = H("van-picker"),
                    D = H("van-popup");
                return n(), a("div", bx, [L(I, {
                    "left-arrow": "",
                    onClickLeft: g,
                    "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)",
                    title: N.$t("xosoTxt73")
                }, null, 8, ["title"]), t("div", mx, [t("div", _x, [t("div", vx, [t("div", {
                    onClick: S[0] || (S[0] = P => b.value = !0)
                }, [h.value ? (n(), a("span", kx, e(h.value), 1)) : (n(), a("span", hx, e(d(i)("all")), 1)), L(x, {
                    name: "arrow-down"
                })])]), t("div", fx, [t("div", {
                    onClick: S[1] || (S[1] = P => u.value = !0)
                }, [f.value ? (n(), a("span", yx, e(f.value), 1)) : (n(), a("span", $x, e(d(i)("all")), 1)), L(x, {
                    name: "arrow-down"
                })]), $("日期选择组件"), t("div", null, [L(xd, {
                    ref_key: "calendar",
                    ref: p,
                    onConfirm: z
                }, null, 512)])])])]), $(" list "), t("div", wx, [(n(), it(Qe, null, [L(Tn, {
                    ref_key: "RecordComponent",
                    ref: w,
                    parmas: _,
                    ApiFun: d(Ca),
                    hasHead: !1,
                    gVSs: "1"
                }, null, 8, ["parmas", "ApiFun"])], 1024))]), L(D, {
                    show: u.value,
                    "onUpdate:show": S[3] || (S[3] = P => u.value = P),
                    round: "",
                    position: "bottom"
                }, {
                    default: M(() => [L(B, {
                        "columns-field-names": c,
                        columns: r.value,
                        onCancel: S[2] || (S[2] = P => u.value = !1),
                        onConfirm: C
                    }, null, 8, ["columns"])]),
                    _: 1
                }, 8, ["show"]), L(D, {
                    show: b.value,
                    "onUpdate:show": S[5] || (S[5] = P => b.value = P),
                    round: "",
                    position: "bottom"
                }, {
                    default: M(() => [L(B, {
                        "columns-field-names": c,
                        columns: m.value,
                        onCancel: S[4] || (S[4] = P => b.value = !1),
                        onConfirm: T
                    }, null, 8, ["columns"])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const Cx = F(Tx, [
        ["__scopeId", "data-v-b328b529"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/XoSoRecord/index.vue"]
    ]),
    GG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Cx
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Lx = {
        class: "TeamReport__C"
    },
    Nx = {
        style: {
            "background-color": "#f7f8ff"
        }
    },
    zx = {
        class: "TeamReport__C-list"
    },
    Ix = V({
        __name: "index",
        setup(s) {
            const i = dt(),
                o = () => {
                    i.go(-1)
                },
                l = k(0),
                g = k([]),
                m = k();
            let r = i.currentRoute.value.query.areId,
                c = i.currentRoute.value.query.typeId;
            const p = Wt({
                    bettingParentType: "",
                    startDate: "",
                    endDate: "",
                    areId: "",
                    typeId: ""
                }),
                u = _ => {
                    p.areId = _.item.areId, p.typeId = _.item.typeId, m.value.getData()
                };
            async function b() {
                let _ = JSON.parse(sessionStorage.getItem("xosoList") || ""),
                    w = [];
                for (let f = 0; f < _.areInfos.length; f++)
                    for (let C = 0; C < _.areInfos[f].areIssueNos.length; C++) _.areInfos[f].areIssueNos[C].type == 2 && w.push({
                        areId: _.areInfos[f].areId,
                        typeId: _.areInfos[f].areIssueNos[C].code,
                        nameCode: _.areInfos[f].areIssueNos[C].nameCode
                    });
                g.value = w, g.value.length > 0 && (l.value = g.value.findIndex(f => f.areId == r && f.typeId == c))
            }
            return b(), (_, w) => {
                const f = H("NavBar"),
                    C = H("van-sticky");
                return n(), a("div", Lx, [L(f, {
                    "left-arrow": "",
                    onClickLeft: o,
                    "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)",
                    title: _.$t("fXosoTitle")
                }, null, 8, ["title"]), L(C, {
                    "offset-top": 46,
                    class: "bet-container-sticky"
                }, {
                    default: M(() => [t("div", Nx, [L(Xe, {
                        list: g.value,
                        active: l.value,
                        "onUpdate:active": w[0] || (w[0] = h => l.value = h),
                        tabClassName: "tabs",
                        activeClassName: "tab_active",
                        ref: "tabRefs",
                        tabItemClassName: "funtab_item",
                        onOnClickTab: u
                    }, {
                        default: M(({
                            item: h,
                            index: T
                        }) => [t("div", {
                            class: G(["tab_item", {
                                tab_active: T === l.value
                            }])
                        }, [t("p", null, e(_.$t(`code${h.nameCode}`)), 1)], 2)]),
                        _: 1
                    }, 8, ["list", "active"])])]),
                    _: 1
                }), $(" list "), t("div", zx, [(n(), it(Qe, null, [L(Tn, {
                    ref_key: "RecordComponent",
                    ref: m,
                    parmas: p,
                    ApiFun: d(La),
                    hasHead: !1,
                    gVSs: "2"
                }, null, 8, ["parmas", "ApiFun"])], 1024))])])
            }
        }
    });
const Sx = F(Ix, [
        ["__scopeId", "data-v-24e1bb6f"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/AllLotteryGames/XoSoRecordF/index.vue"]
    ]),
    AG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Sx
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    xx = {
        class: "header"
    },
    Rx = {
        class: "l1"
    },
    Bx = {
        class: "header_title"
    },
    Gx = {
        key: 0,
        class: "l2"
    },
    Ax = {
        class: "inputDom"
    },
    Mx = ["v-model"],
    Px = V({
        __name: "index",
        setup(s) {
            const i = dt(),
                o = k(!1),
                l = k(""),
                g = () => {
                    i.push({
                        name: "Casino"
                    })
                },
                m = () => {
                    l.value = "", o.value = !1
                };
            return (r, c) => (n(), a("div", xx, [t("div", Rx, [t("div", {
                class: "backSvg",
                onClick: g
            }), t("div", Bx, e(r.$t("live")), 1), t("div", {
                class: "searchIcon",
                onClick: c[0] || (c[0] = p => o.value = !0)
            })]), o.value ? (n(), a("div", Gx, [t("div", Ax, [t("input", {
                type: "text",
                "v-model": l.value,
                placeholder: "Search games……"
            }, null, 8, Mx)]), t("div", {
                class: "close",
                onClick: m
            }, "Close")])) : $("v-if", !0)]))
        }
    });
const Dx = F(Px, [
        ["__scopeId", "data-v-1aca5679"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/Casino/Detail/index.vue"]
    ]),
    MG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Dx
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ox = {
        class: "header"
    },
    Ex = {
        class: "l1"
    },
    qx = {
        class: "header_title"
    },
    jx = {
        key: 0,
        class: "l2"
    },
    Hx = {
        class: "inputDom"
    },
    Wx = ["v-model"],
    Vx = V({
        __name: "index",
        setup(s) {
            const i = dt(),
                o = k(!1),
                l = k(""),
                g = () => {
                    i.push({
                        name: "Chess"
                    })
                },
                m = () => {
                    l.value = "", o.value = !1
                };
            return (r, c) => (n(), a("div", Ox, [t("div", Ex, [t("div", {
                class: "backSvg",
                onClick: g
            }), t("div", qx, e(r.$t("ChessandCards")), 1), t("div", {
                class: "searchIcon",
                onClick: c[0] || (c[0] = p => o.value = !0)
            })]), o.value ? (n(), a("div", jx, [t("div", Hx, [t("input", {
                type: "text",
                "v-model": l.value,
                placeholder: "Search games……"
            }, null, 8, Wx)]), t("div", {
                class: "close",
                onClick: m
            }, "Close")])) : $("v-if", !0)]))
        }
    });
const Fx = F(Vx, [
        ["__scopeId", "data-v-5df4fc2f"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/Chess/Detail/index.vue"]
    ]),
    PG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Fx
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ux = {
        class: "messageDetail__container content"
    },
    Kx = {
        class: "messageDetail__container-wrapper"
    },
    Xx = {
        class: "messageDetail__container-title"
    },
    Qx = {
        class: "messageDetail__container-content"
    },
    Jx = V({
        __name: "index",
        setup(s) {
            const {
                t: i
            } = kt(), o = Vs(), l = dt(), g = k({}), m = ki(() => hi(() =>
                import ("./messageIconNoDot-76ca5af6.js"), ["assets/js/messageIconNoDot-76ca5af6.js", "assets/js/modules-ca96e989.js", "assets/css/modules-b642e9bc.css", "assets/js/page-activity-76f2bb47.js", "assets/js/native/index-5b57e344.js", "assets/js/en-93cdab10.js", "assets/js/rus-ecb14220.js", "assets/js/vi-40bd560a.js", "assets/js/id-24cc3835.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-02b1fc1c.js", "assets/js/bra-1f3ea623.js", "assets/js/my-80d37f62.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-3589f8b3.js", "assets/js/pak-9f46abf2.js", "assets/js/ar-64903102.js", "assets/css/page-activity-e94516d2.css"])), r = ki(() => hi(() =>
                import ("./messageGarbage-1ffa521c.js"), ["assets/js/messageGarbage-1ffa521c.js", "assets/js/modules-ca96e989.js", "assets/css/modules-b642e9bc.css", "assets/js/page-activity-76f2bb47.js", "assets/js/native/index-5b57e344.js", "assets/js/en-93cdab10.js", "assets/js/rus-ecb14220.js", "assets/js/vi-40bd560a.js", "assets/js/id-24cc3835.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-02b1fc1c.js", "assets/js/bra-1f3ea623.js", "assets/js/my-80d37f62.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-3589f8b3.js", "assets/js/pak-9f46abf2.js", "assets/js/ar-64903102.js", "assets/css/page-activity-e94516d2.css"]));

            function c() {
                l.back()
            }

            function p() {
                aa({
                    title: i("warning"),
                    message: i("warningTxt1")
                }).then(() => {
                    on({
                        messageID: g.value.messageID,
                        state: 2
                    }), l.back()
                })
            }
            return Nt(async () => {
                g.value = o.getMessagesDetail, g.value.state !== 1 && (await on({
                    messageID: g.value.messageID,
                    state: 1
                }), o.setMessageDetail({ ...g.value,
                    state: 1
                }))
            }), (u, b) => {
                const _ = H("NavBar");
                return n(), a("div", Ux, [L(_, {
                    "left-arrow": "",
                    onClickLeft: c,
                    title: d(i)("notificationDetails")
                }, null, 8, ["title"]), t("div", Kx, [t("div", Xx, [t("div", null, [t("div", null, [(n(), it(He(d(m)))), t("span", null, e(g.value.title), 1)]), t("span", null, e(g.value.addTime), 1)]), (n(), it(He(d(r)), {
                    onClick: p
                }))]), t("div", Qx, e(g.value.messages), 1)])])
            }
        }
    });
const Yx = F(Jx, [
        ["__scopeId", "data-v-e5380132"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/Messages/MessageDetail/index.vue"]
    ]),
    DG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Yx
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Zx = {
        class: "dialog__container",
        role: "dialog",
        tabindex: "0"
    },
    tR = {
        class: "dialog__container-img"
    },
    eR = {
        alt: ""
    },
    iR = {
        class: "dialog__container-title"
    },
    nR = {
        class: "dialog__container-content"
    },
    aR = {
        class: "dialog__container-footer"
    },
    oR = V({
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
        setup(s, {
            emit: i
        }) {
            const o = s,
                {
                    t: l
                } = kt();
            Mt(() => o.show, r => {
                r ? window.addEventListener("touchmove", m, {
                    passive: !1
                }) : window.removeEventListener("touchmove", m)
            });

            function g(r) {
                o.clickOutSide && i("update:show", !1)
            }
            const m = r => {
                o.show && r.preventDefault()
            };
            return (r, c) => {
                const p = Ot("lazy");
                return n(), a("div", {
                    class: G(["dialog", {
                        active: s.show,
                        inactive: !s.show
                    }])
                }, [t("div", Zx, [t("div", tR, [_e(r.$slots, "header", {}, () => [vt(t("img", eR, null, 512), [
                    [p, d(Xt)(s.pathname, s.picname)]
                ])], !0)]), t("div", iR, [_e(r.$slots, "title", {}, () => [t("h1", null, e(d(l)(s.title)), 1)], !0)]), t("div", nR, [_e(r.$slots, "content", {}, void 0, !0)]), t("div", aR, [_e(r.$slots, "footer", {}, () => [s.showCancelBtn ? (n(), a("button", {
                    key: 0,
                    onClick: c[0] || (c[0] = () => {
                        i("update:show", !1)
                    })
                }, e(r.$t(s.cancelText)), 1)) : $("v-if", !0), t("button", {
                    onClick: c[1] || (c[1] = () => {
                        i("confirm")
                    })
                }, e(r.$t(s.confirmText)), 1)], !0)])]), t("div", {
                    class: "dialog__outside",
                    onClick: g
                })], 2)
            }
        }
    });
const sR = F(oR, [
        ["__scopeId", "data-v-c0caae78"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/common/HomeDialog.vue"]
    ]),
    lR = {
        class: "swiper_box"
    },
    cR = ["onClick"],
    rR = {
        key: 0,
        class: "swiper-button"
    },
    uR = V({
        __name: "index",
        props: {
            isShowButton: {
                type: Boolean,
                default: !1
            }
        },
        setup(s) {
            const {
                getBannerApi: i,
                getBanner: o
            } = we(), l = k(0), g = [Fo], m = c => {
                c.activeIndex >= o.value.length ? l.value = c.activeIndex - o.value.length : l.value = c.activeIndex
            }, r = c => {
                c && (window.location.href = c)
            };
            return Nt(async () => {
                await i()
            }), (c, p) => {
                const u = Ot("lazy");
                return n(), a("div", lR, [L(d(Vo), {
                    class: "my-swipe",
                    "slides-per-view": 1,
                    "space-between": 20,
                    onSlideChange: m,
                    autoplay: {
                        delay: 5e3,
                        disableOnInteraction: !1
                    },
                    modules: g,
                    loop: !0
                }, {
                    default: M(() => [(n(!0), a(R, null, A(d(o), (b, _) => (n(), it(d(Wo), {
                        key: _
                    }, {
                        default: M(() => [vt(t("img", {
                            onClick: w => r(b.url)
                        }, null, 8, cR), [
                            [u, b.bannerUrl]
                        ])]),
                        _: 2
                    }, 1024))), 128))]),
                    _: 1
                }), d(o).length > 1 && s.isShowButton ? (n(), a("div", rR, [(n(!0), a(R, null, A(d(o).length, b => (n(), a("span", {
                    key: b,
                    class: G({
                        active: l.value === b - 1
                    })
                }, null, 2))), 128))])) : $("v-if", !0)])
            }
        }
    });
const dR = F(uR, [
        ["__scopeId", "data-v-3ad7aed7"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/Swiper/index.vue"]
    ]),
    pR = s => ($t("data-v-b3bd7e49"), s = s(), wt(), s),
    gR = pR(() => t("svg", {
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
    bR = ["src"],
    mR = {
        class: "text"
    },
    _R = 1.1,
    vR = V({
        __name: "DownloadPWA",
        setup(s) {
            const i = Uo("show-pwa-download", !0);
            let o = null;
            const {
                t: l
            } = kt(), g = Re(), m = Wt({
                canIUse: !1,
                download: null
            });
            window.addEventListener("beforeinstallprompt", u => {
                u.preventDefault(), o = u, m.canIUse = !0
            }, {
                once: !0
            }), m.download = function() {
                o.prompt().then(u => {
                    u.outcome === "accepted" && (m.canIUse = !1)
                })
            };
            let r = Fs();
            r = r == null ? void 0 : r.toLowerCase(), /[\u4e00-\u9fa5]+/.test(r) && (r = "vxth");
            const c = document.querySelector("link[rel='manifest']");
            c == null || c.setAttribute("href", "/manifest." + r + ".json?version=" + _R);
            async function p() {
                if (i.value)
                    if (m.canIUse) m.download && m.download();
                    else {
                        const u = await at(Us());
                        if (!u) return;
                        ra(Ks ? u.data.androidUrl : u.data.iosUrl)
                    }
            }
            return (u, b) => {
                const _ = H("van-icon");
                return n(), a("div", {
                    class: "btn",
                    onClick: p
                }, [gR, L(_, {
                    class: "close",
                    name: "close",
                    onClick: b[0] || (b[0] = w => i.value = !1)
                }), t("img", {
                    class: "icon",
                    src: d(g).getWebIco
                }, null, 8, bR), t("div", mR, e(m.canIUse ? d(l)("addToDesktop") : d(l)("downloadAPP")), 1)])
            }
        }
    });
const kR = F(vR, [
        ["__scopeId", "data-v-b3bd7e49"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/common/DownloadPWA.vue"]
    ]),
    hR = V({
        __name: "Turntable",
        setup(s) {
            const i = dt(),
                o = k(),
                l = Re();

            function g() {
                l.getBigTurntableLink && window.open(l.getBigTurntableLink)
            }
            return (m, r) => (n(), a(R, null, [d(l).getOpenTurntable ? (n(), a("div", {
                key: 0,
                class: G(["turntable-lottery trntableIcon2", {
                    "lottery-bottom": d(l).getBigTurntableLink
                }]),
                onClick: r[0] || (r[0] = c => d(i).push({
                    name: "Turntable"
                }))
            }, null, 2)) : $("v-if", !0), d(l).getBigTurntableLink ? (n(), a("div", {
                key: 1,
                class: "turntable turntableIcon1",
                onClick: g,
                ref_key: "turntableId",
                ref: o
            }, null, 512)) : $("v-if", !0)], 64))
        }
    });
const fR = F(hR, [
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/common/Turntable.vue"]
    ]),
    yR = {
        key: 0,
        alt: ""
    },
    $R = V({
        __name: "index",
        props: {
            tabList: {
                type: Object,
                required: !0
            },
            visibileAll: {
                type: Boolean,
                required: !1,
                default: !0
            },
            currentMenu: {
                type: Number,
                required: !0
            },
            isShowIcon: {
                type: Boolean,
                required: !1,
                default: !0
            },
            isBg: {
                type: Boolean,
                required: !1,
                default: !0
            }
        },
        emits: ["tabChange", "update:currentMenu"],
        setup(s, {
            expose: i,
            emit: o
        }) {
            const l = s,
                g = k(),
                m = b => b.img.includes("http") ? b.img : Xt("home", b.img, "png"),
                r = k(0),
                c = Y(() => {
                    let b = bn(l.tabList);
                    return b.length === 1 ? [] : b
                }),
                p = b => {
                    let {
                        item: _,
                        index: w
                    } = b;
                    o("tabChange", {
                        item: _,
                        index: w
                    }), o("update:currentMenu", r.value)
                },
                u = Y(() => l.tabList[r.value]);
            return Mt(() => l.currentMenu, b => {
                r.value = b
            }, {
                immediate: !0
            }), i({
                currentTab: r,
                currentMenu: u,
                tabRef: g
            }), (b, _) => {
                const w = Ot("lazy");
                return n(), a(R, null, [L(Xe, {
                    list: c.value,
                    active: r.value,
                    "onUpdate:active": _[0] || (_[0] = f => r.value = f),
                    tabClassName: "tabs",
                    onOnClickTab: p,
                    activeClassName: "tab_active",
                    ref: "tabRefs",
                    tabItemClassName: "funtab_item"
                }, {
                    default: M(({
                        item: f,
                        index: C
                    }) => [t("div", {
                        class: G(["tab_item", {
                            tab_active: C === r.value,
                            allGame: !b.isShowIcon
                        }])
                    }, [f.img ? vt((n(), a("img", yR, null, 512)), [
                        [w, m(f)]
                    ]) : $("v-if", !0), t("span", null, e(f.title), 1)], 2)]),
                    _: 1
                }, 8, ["list", "active"]), $(` <van-tabs
		class="gameTabBar"
		v-model:active="currentTab"
		@click-tab="handleClickTab"
		type="card"
		color="transparent"
		background="transparent"
		ref="tabRef"
		:class="{ noBg: !props.isBg }"
	>
		<van-tab v-for="(item, index) in tabLists" :name="index" :key="index">
			<template #title>
				<div v-if="item?.isShow" class="tab_item">
					<img v-if="isShowIcon" :src="getIcons('home/tab', item.img, 'png', 'Icons')" alt="" />
					<span>{{ item.title }}</span>
				</div>
			</template>
		</van-tab>
	</van-tabs> `)], 2112)
            }
        }
    });
const wR = F($R, [
        ["__scopeId", "data-v-8ac0d926"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/Electronic/Tabs/index.vue"]
    ]),
    TR = s => ($t("data-v-6a6ca1da"), s = s(), wt(), s),
    CR = {
        key: 1
    },
    LR = {
        key: 2,
        class: "win-odds"
    },
    NR = ["onClick"],
    zR = {
        key: 0,
        class: "big_prize"
    },
    IR = {
        class: "info"
    },
    SR = {
        class: "text"
    },
    xR = {
        class: "title"
    },
    RR = {
        class: "award"
    },
    BR = TR(() => t("div", null, null, -1)),
    GR = {
        class: "multiple"
    },
    AR = V({
        __name: "index",
        props: {
            type: {
                type: String,
                required: !0
            },
            gameItem: {
                type: Object,
                required: !0
            },
            gameType: {
                type: String,
                required: !0
            },
            isWidth: {
                type: Boolean,
                required: !0,
                default: !1
            },
            isElec: {
                type: Boolean,
                required: !1,
                default: !1
            }
        },
        setup(s) {
            const i = s;
            rn(f => ({
                "6a6ca1da-bgHidth": c.value
            }));
            const {
                t: o
            } = kt(), {
                homeState: l,
                onItemClick: g
            } = we(), m = Re(), r = {
                sport: o("sport"),
                video: o("live"),
                chess: o("chess")
            }, c = Y(() => {
                let f = ca() === 0;
                return i.isWidth ? (f ? 248 / 2 : 218 / 2) + "px" : "100%"
            }), p = Y(() => {
                let f = i.gameItem;
                return f.imgUrl || f.img || f.vendorImg || f.categoryImg
            }), u = Y(() => i.gameType === "lottery" ? `url(${i.gameItem.categoryImg})` : `url(${i.gameItem.vendorImg})`), b = f => {
                var h, T;
                if (!Be().token) {
                    ui.push({
                        name: "login"
                    });
                    return
                }
                if (i.type === "1")
                    if (!["slot"].includes(i.gameType)) g(f);
                    else {
                        if (i.isElec) {
                            g(f);
                            return
                        }
                        sessionStorage.setItem("slotGamesList", JSON.stringify((h = l.allGameList) == null ? void 0 : h.slot)), sessionStorage.setItem("gameType", JSON.stringify("slot")), sessionStorage.setItem("clickedItem", JSON.stringify(i.gameItem)), ui.push({
                            name: "AllOnlineGames"
                        })
                    }
                else if (i.gameType === "lottery" && _(f), (i.gameType === "video" || i.gameType === "sport") && g(f), i.gameType === "chess") {
                    if (i.isElec) {
                        g(f);
                        return
                    }
                    sessionStorage.setItem("slotGamesList", JSON.stringify((T = l.allGameList) == null ? void 0 : T.chess)), sessionStorage.setItem("gameType", JSON.stringify("chess")), sessionStorage.setItem("clickedItem", JSON.stringify(i.gameItem)), ui.push({
                        name: "AllOnlineGames"
                    })
                }
            }, _ = f => {
                ui.push({
                    name: "AllLotteryGames-" + w[w.findIndex(C => C.value === f.id)].path,
                    query: {
                        id: f.id
                    }
                })
            }, w = [{
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
            }];
            return (f, C) => {
                const h = Ot("lazy");
                return ["1", "2"].includes(f.type) && f.gameType !== "bigaward" ? (n(), a("div", {
                    key: 0,
                    class: G(["gameItem1", {
                        elec: f.gameType === "slot"
                    }]),
                    onClick: C[0] || (C[0] = re(T => b(f.gameItem), ["stop"]))
                }, [f.gameType === "slot" ? (n(), a("div", {
                    key: 0,
                    class: "slot_bg",
                    style: oe({
                        backgroundImage: `url(${p.value})`
                    })
                }, null, 4)) : vt((n(), a("img", CR, null, 512)), [
                    [h, p.value]
                ]), ["clicksTopList", "platformList"].includes(f.gameType) && d(m).isShowHotGameWinOdds ? (n(), a("div", LR, [t("span", null, e(f.$t("winOdds")), 1), t("span", null, e(f.gameItem.winOdds) + "%", 1), t("div", {
                    class: "win-p",
                    style: oe({
                        width: `${Math.min(f.gameItem.winOdds,100)}%`
                    })
                }, null, 4)])) : $("v-if", !0)], 2)) : (n(), a("div", {
                    key: 1,
                    class: "gameImte2",
                    onClick: re(b, ["stop"])
                }, [f.gameType === "bigaward" ? (n(), a("div", zR, [t("div", {
                    class: "bg",
                    style: oe({
                        backgroundImage: `url(${f.gameItem.imgUrl})`
                    })
                }, null, 4), t("div", IR, [t("div", SR, [t("div", xR, e(f.gameItem.gameName), 1), t("div", RR, e(d(Lt)(f.gameItem.bonusAmount)), 1), BR]), t("div", GR, e(f.gameItem.multiple) + "X", 1)])])) : (n(), a("div", {
                    key: 1,
                    class: "other_style",
                    style: oe({
                        backgroundImage: u.value
                    })
                }, [t("div", null, e(r[f.gameType]), 1)], 4))], 8, NR))
            }
        }
    });
const MR = F(AR, [
        ["__scopeId", "data-v-6a6ca1da"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/Electronic/GameItem/index.vue"]
    ]),
    Xa = s => ($t("data-v-e3bcc790"), s = s(), wt(), s),
    PR = {
        class: "aloneGame"
    },
    DR = {
        class: "header"
    },
    OR = {
        key: 0,
        class: "title"
    },
    ER = ["src"],
    qR = Xa(() => t("span", {
        class: "all"
    }, "ALL", -1)),
    jR = {
        class: "len"
    },
    HR = {
        key: 1,
        class: "right_btn"
    },
    WR = {
        key: 0,
        class: "flash_desc"
    },
    VR = {
        key: 1,
        class: "flash_desc awar_desc"
    },
    FR = Xa(() => t("br", null, null, -1)),
    UR = {
        class: "amount"
    },
    KR = V({
        __name: "index",
        props: {
            title: {
                type: String,
                required: !0
            },
            isAll: {
                type: Boolean,
                required: !1,
                default: !1
            },
            gameType: {
                type: String,
                required: !0
            },
            gameList: {
                type: Array,
                required: !0
            },
            isShowMore: {
                type: Boolean,
                required: !1,
                default: !1
            },
            currentMenuType: {
                type: Number,
                required: !1
            },
            isShowBtn: {
                type: Boolean,
                required: !1,
                default: !1
            },
            isShowTitle: {
                type: Boolean,
                required: !1,
                default: !0
            }
        },
        emits: ["goAll"],
        setup(s, {
            emit: i
        }) {
            const o = s;
            rn(v => ({
                "e3bcc790-swipeHeight": v.swipeHeight
            }));
            const {
                homeState: l
            } = we(), {
                t: g
            } = kt(), m = Xs(), r = dt(), c = k(), p = Re();
            Y(() => l.allGameList);
            const u = (v, N) => {
                    switch (o.gameType) {
                        case "lottery":
                            return v.name + "" + N;
                        case "all":
                        case "clicksTopList":
                        case "platformList":
                        case "fish":
                        case "flash":
                            return v.vendorId + "" + N;
                        default:
                            return v.slotsTypeID + "" + N
                    }
                },
                b = Y(() => p.getJackportMaxReswadAmount),
                _ = Y(() => {
                    const v = o.gameType;
                    return v === "flash" || v === "slot" || v === "fish" || v === "clicksTopList" || v === "platformList" ? "1" : "2"
                }),
                w = (v, N) => {
                    const S = [];
                    for (let I = 0; I < Math.ceil(v.length / N); I++) {
                        const x = I * N,
                            B = x + N;
                        S.push(v.slice(x, B))
                    }
                    return S
                },
                f = Y(() => {
                    if (o.isAll) return w(o.gameList, o.gameList.length);
                    if (o.currentMenuType === 0 && (o.gameType === "clicksTopList" || o.gameType === "platformList")) {
                        let v = o.gameList;
                        return v.length > 6 ? w(v, 6) : w(o.gameList, v.length)
                    } else if (o.currentMenuType === 0 && o.gameType === "slot") return w(o.gameList, o.gameList.length);
                    return o.currentMenuType === 0 && o.gameType === "bigaward" ? w(o.gameList.slice(0, 6), 6) : w(o.gameList, 3)
                }),
                C = v => {
                    var N, S;
                    v === "left" ? (N = c.value) == null || N.prev() : (S = c.value) == null || S.next()
                },
                h = () => {
                    r.push({
                        path: "/main/SuperJackpot"
                    })
                },
                T = k(0),
                z = v => {
                    T.value = v
                },
                y = () => {
                    if (m.emit("changeKeepAliveKey"), o.gameType === "clicksTopList" || o.gameType === "platformList") {
                        i("goAll", "popular");
                        return
                    }
                    i("goAll", o.gameType)
                };
            return (v, N) => {
                const S = H("van-icon");
                return n(), a("div", PR, [t("div", DR, [v.isShowTitle ? (n(), a("div", OR, [t("img", {
                    src: d(te)("electronic", v.gameType),
                    alt: "",
                    class: "icons"
                }, null, 8, ER), O(" " + e(v.title) + " ", 1), v.gameType !== "bigaward" ? (n(), a("div", {
                    key: 0,
                    onClick: y
                }, [qR, t("span", jR, e(v.gameList.length), 1)])) : $("v-if", !0)])) : $("v-if", !0), v.isShowBtn ? (n(), a("div", HR, [L(S, {
                    name: "arrow-left",
                    class: G({
                        active: T.value == 0
                    }),
                    onClick: N[0] || (N[0] = I => C("left"))
                }, null, 8, ["class"]), L(S, {
                    name: "arrow",
                    class: G({
                        active: T.value === f.value.length - 1
                    }),
                    onClick: N[1] || (N[1] = I => C("right"))
                }, null, 8, ["class"]), $(`				<img :src="getIcons('home', 'arrow_left')" alt=""  />`), $(`				<img :src="getIcons('home', 'arrow_right')" alt=""  />`)])) : $("v-if", !0)]), v.gameType === "flash" ? (n(), a("div", WR, e(v.$t("flashDesc", [d(p).getProjectName])), 1)) : $("v-if", !0), v.gameType === "bigaward" ? (n(), a("div", VR, [O(e(v.$t("awarDesc1")), 1), FR, O(" " + e(v.$t("awarDesc2")) + " ", 1), t("span", UR, e(d(Lt)(b.value)), 1)])) : $("v-if", !0), L(d(Xo), {
                    class: "my-swipe",
                    ref_key: "swipeRef",
                    ref: c,
                    autoplay: v.gameType !== "flash" ? "-" : 9e3,
                    onChange: z,
                    "lazy-render": !1,
                    "show-indicators": !1
                }, {
                    default: M(() => [(n(!0), a(R, null, A(f.value, (I, x) => (n(), it(d(Ko), {
                        key: v.gameType + x,
                        class: G({
                            isShowAll: v.isAll,
                            gys: v.gameType === "slot" && v.isAll && v.currentMenuType === 0
                        })
                    }, {
                        default: M(() => [(n(!0), a(R, null, A(I, (B, D) => (n(), it(MR, {
                            class: "item_two",
                            "game-type": v.gameType,
                            "game-item": B,
                            key: u(B, D),
                            type: _.value,
                            "is-width": v.isAll
                        }, null, 8, ["game-type", "game-item", "type", "is-width"]))), 128))]),
                        _: 2
                    }, 1032, ["class"]))), 128))]),
                    _: 1
                }, 8, ["autoplay"]), v.isShowMore && v.gameList.length > 9 ? (n(), a("div", {
                    key: 2,
                    class: "look_all",
                    onClick: y
                }, e(d(g)("viewAll")), 1)) : $("v-if", !0), v.gameType === "bigaward" ? (n(), a("div", {
                    key: 3,
                    class: "look_all look_awar",
                    onClick: h
                }, e(v.$t("lookBigAward")), 1)) : $("v-if", !0), v.gameType === "lottery" ? (n(), a("div", {
                    key: 4,
                    class: "ChangLong",
                    onClick: N[2] || (N[2] = I => d(r).push({
                        name: "AllLotteryGames-ChangLong"
                    }))
                })) : $("v-if", !0)])
            }
        }
    });
const XR = F(KR, [
        ["__scopeId", "data-v-e3bcc790"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/Electronic/AloneGame/index.vue"]
    ]),
    Qa = s => ($t("data-v-3cb56872"), s = s(), wt(), s),
    QR = {
        class: "winning"
    },
    JR = {
        class: "title"
    },
    YR = {
        class: "wrapper"
    },
    ZR = {
        class: "avatar"
    },
    tB = Qa(() => t("div", {
        class: "avatar_outbg"
    }, null, -1)),
    eB = ["data-img"],
    iB = Qa(() => t("div", {
        class: "level"
    }, "V1", -1)),
    nB = {
        class: "info"
    },
    aB = {
        class: "name"
    },
    oB = {
        class: "winning_icon",
        alt: ""
    },
    sB = {
        class: "winning"
    },
    lB = V({
        __name: "index",
        setup(s) {
            const {
                homeState: i,
                getWinInfoDetail: o,
                getWinInfo: l
            } = we(), g = k(null), m = k(null), r = c => {
                if (c.length >= 7) return c.substring(0, 3) + "***" + c.substring(c.length - 3, c.length); {
                    const p = "***",
                        u = 7 - c.length,
                        b = "*".repeat(u);
                    return c.substring(0, Math.ceil((7 - u) / 2)) + p + b + c.substring(Math.ceil((7 - u) / 2))
                }
            };
            return Nt(async () => {
                await o()
            }), Si(() => {
                clearInterval(m.value)
            }), (c, p) => {
                const u = Ot("lazy");
                return n(), a("div", QR, [t("div", JR, e(c.$t("winningDetal")), 1), t("div", YR, [t("div", {
                    ref_key: "wrapperRef",
                    ref: g
                }, [(n(!0), a(R, null, A(d(l).slice(0, 6), b => (n(), a("div", {
                    class: "win_item",
                    key: b
                }, [t("div", ZR, [tB, vt(t("img", {
                    "data-img": d(te)("home", "avatar")
                }, null, 8, eB), [
                    [u, d(te)("main/Avatar", b.userPhoto) || d(te)("home", "avatar")]
                ]), iB]), t("div", nB, [t("div", aB, e(r(b == null ? void 0 : b.nickName)), 1), $(' <div class="time">18:24</div> ')]), vt(t("img", oB, null, 512), [
                    [u, b.imgUrl]
                ]), t("div", sB, [t("div", null, e(d(Lt)(b.amount || 0)), 1), t("div", null, e(c.$t("winningAmount")), 1)])]))), 128))], 512)])])
            }
        }
    });
const cB = F(lB, [
        ["__scopeId", "data-v-3cb56872"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/Electronic/Winning/index.vue"]
    ]),
    rB = {
        class: "profit"
    },
    uB = {
        class: "title"
    },
    dB = {
        class: "profit__list"
    },
    pB = ["data-img"],
    gB = {
        class: "profit__list-item__info"
    },
    bB = {
        class: "rank"
    },
    mB = {
        class: "name"
    },
    _B = {
        class: "rank_num"
    },
    vB = ["src"],
    kB = {
        class: "price"
    },
    hB = V({
        __name: "index",
        setup(s) {
            const {
                homeState: i
            } = we(), o = l => {
                if (l.length >= 7) return l.substring(0, 3) + "***" + l.substring(l.length - 3, l.length); {
                    const g = "***",
                        m = 7 - l.length,
                        r = "*".repeat(m);
                    return l.substring(0, Math.ceil((7 - m) / 2)) + g + r + l.substring(Math.ceil((7 - m) / 2))
                }
            };
            return (l, g) => {
                const m = Ot("lazy");
                return n(), a("div", rB, [t("div", uB, e(l.$t("earningsRankingToday")), 1), t("div", dB, [(n(!0), a(R, null, A(d(i).rankList, (r, c) => (n(), a("div", {
                    key: c,
                    class: "profit__list-item"
                }, [vt(t("img", {
                    class: "usePhoto",
                    "data-img": d(te)("home", "avatar")
                }, null, 8, pB), [
                    [m, r.userPhoto]
                ]), t("div", gB, [t("div", bB, [t("div", mB, e(o(r.nickName)), 1), t("div", _B, [c < 3 ? (n(), a("img", {
                    key: 0,
                    class: "rank_img",
                    src: d(te)("electronic", "no" + (c + 1)),
                    alt: ""
                }, null, 8, vB)) : $("v-if", !0), t("span", {
                    class: G(`no${c+1}`)
                }, "NO" + e(c + 1), 3)])]), t("div", kB, e(d(Lt)(r.price)), 1)])]))), 128))])])
            }
        }
    });
const fB = F(hB, [
        ["__scopeId", "data-v-dd3d232d"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/Electronic/Profit/index.vue"]
    ]),
    Ja = s => ($t("data-v-4529147b"), s = s(), wt(), s),
    yB = {
        class: "instructions"
    },
    $B = {
        class: "instructions_img"
    },
    wB = ["src"],
    TB = ["src"],
    CB = {
        class: "desc"
    },
    LB = Ja(() => t("br", null, null, -1)),
    NB = Ja(() => t("br", null, null, -1)),
    zB = V({
        __name: "index",
        setup(s) {
            const i = Re(),
                o = Y(() => i.getHeadLogo);
            return (l, g) => (n(), a("div", yB, [t("div", $B, [t("img", {
                src: d(te)("home", "u18"),
                alt: "",
                class: "u18"
            }, null, 8, wB), t("img", {
                src: o.value,
                class: "logo"
            }, null, 8, TB)]), t("div", CB, [O(e(l.$t("instructions", [d(i).getProjectName])), 1), LB, O(" " + e(l.$t("instructions2")) + " ", 1), NB, O(" " + e(l.$t("instructions3", [d(i).getProjectName])), 1)])]))
        }
    });
const IB = F(zB, [
        ["__scopeId", "data-v-4529147b"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/Electronic/Instructions/index.vue"]
    ]),
    SB = {
        class: "video_list"
    },
    xB = {
        class: "video_title"
    },
    RB = ["src"],
    BB = {
        class: "video_img_box"
    },
    GB = ["onClick"],
    AB = ["onClick"],
    MB = V({
        __name: "index",
        setup(s) {
            const i = k([]),
                o = dt(),
                {
                    onItemClick: l,
                    homeState: g
                } = we(),
                m = async () => {
                    const p = await at(Qs());
                    p && (i.value = p.data)
                },
                r = p => p.indexOf("_") === -1 ? p : p.split("_")[0],
                c = p => {
                    const u = g.allGameList.video.find(b => b.slotsName === p.vendorCode);
                    sessionStorage.setItem("slotGamesList", JSON.stringify(g.allGameList.video)), sessionStorage.setItem("gameType", JSON.stringify("video")), sessionStorage.setItem("clickedItem", JSON.stringify(u)), o.push({
                        name: "AllOnlineGames",
                        query: {
                            gameType: "video",
                            currentId: p.childList[0].vendorId
                        }
                    })
                };
            return m(), (p, u) => {
                const b = Ot("lazy");
                return n(), a("div", SB, [(n(!0), a(R, null, A(i.value, _ => (n(), a("div", {
                    class: "video_item",
                    key: _.vendorCode
                }, [t("div", xB, [t("img", {
                    src: d(Xt)("home/slots", _.vendorCode),
                    alt: ""
                }, null, 8, RB), t("span", null, e(r(_.vendorCode)) + e(p.$t("code9306")), 1)]), t("div", BB, [(n(!0), a(R, null, A(_.childList.slice(0, 6), w => vt((n(), a("img", {
                    key: w.gameID + _.vendorCode,
                    onClick: f => d(l)(w)
                }, null, 8, GB)), [
                    [b, w.img]
                ])), 128))]), t("div", {
                    class: "all_slot",
                    onClick: () => c(_)
                }, e(p.$t("allGame")), 9, AB)]))), 128))])
            }
        }
    });
const PB = F(MB, [
        ["__scopeId", "data-v-93741f34"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/components/Home/Electronic/Video/index.vue"]
    ]),
    DB = s => ($t("data-v-6c4ce891"), s = s(), wt(), s),
    OB = {
        id: "home"
    },
    EB = ["src"],
    qB = {
        class: "content__right"
    },
    jB = {
        class: "content"
    },
    HB = DB(() => t("div", {
        id: "game_content"
    }, null, -1)),
    WB = {
        class: "promptHeader"
    },
    VB = ["innerHTML"],
    FB = {
        class: "Laundry-Con"
    },
    UB = {
        class: "Laundry-Con_tip"
    },
    KB = {
        class: "Laundry-Con_tips"
    },
    XB = V({
        __name: "electronic",
        setup(s) {
            const {
                onDown: i,
                isAppDownload: o,
                isAppDownloadIcon: l,
                getMessagesData: g,
                showPWA: m,
                homeState: r,
                getAllGame: c,
                getGameType: p,
                projectIcon: u
            } = we(), {
                t: b
            } = kt(), {
                closeLaundry: _,
                closePrompt: w,
                store: f,
                promptContent: C
            } = Js(), h = dt(), T = k([]), z = k(), y = Wt([]), v = k(0), N = J => v.value === 0 && J.gameType !== "slot" && J.gameType !== "bigaward", S = J => J === "popular" && v.value === 0 || J === "slot" && v.value === 0 ? !0 : v.value !== 0, I = () => {
                _(), h.push({
                    name: "SuperJackpot"
                })
            }, x = Y(() => {
                let J = y.findIndex(Q => Q.gameType === lt[v.value].type);
                return J < 0 ? -1 : J
            }), B = J => {
                var Q;
                return J.gameType === "bigaward" && x.value === -1 ? J.isShow : (v.value === 0 || ((Q = y[x.value]) == null ? void 0 : Q.gameType) === J.gameType) && J.gameList.length > 0
            }, D = J => {
                let {
                    item: Q
                } = J;
                sessionStorage.setItem("currentMenu", Q.type)
            };

            function P() {
                h.push({
                    name: "CustomerService"
                })
            }
            const q = async () => {
                    await gt();
                    let J = sessionStorage.getItem("currentMenu");
                    v.value = J ? lt.findIndex(st => st.type === J) : 0, await c();
                    const Q = bn(r.allGameList);
                    y.forEach(st => {
                        st.gameType === "clicksTopList" ? st.gameList = Q.popular.clicksTopList : st.gameType === "platformList" ? st.gameList = Q.popular.platformList : st.gameType === "bigaward" ? st.gameList = Q.awardRecordList || [] : st.gameType === "video" ? st.gameList = Q.popular.clicksVideoTopList || [] : st.gameList = Q[st.gameType], st.gameList || (st.isShow = !1)
                    }), sessionStorage.setItem("allGameList", JSON.stringify(y)), sessionStorage.setItem("gameData", JSON.stringify(r.allGameList))
                },
                X = J => {
                    h.push({
                        name: "AllGames",
                        query: {
                            type: J
                        }
                    })
                },
                lt = Wt([{
                    title: b("all"),
                    type: "all",
                    img: "all",
                    isShow: !0
                }]),
                gt = async () => {
                    await p(), r.gameTypeList.forEach(J => {
                        lt.push({
                            title: b("code" + J.typeNameCode + J.categoryCode),
                            type: J.categoryCode.toLocaleLowerCase(),
                            isShow: J.state === 1 && J.categoryCode.toLocaleLowerCase() !== "popular" && J.categoryCode.toLocaleLowerCase() !== "bigaward",
                            img: J.categoryImg
                        }), J.categoryCode.toLocaleLowerCase() === "popular" && y.push({
                            isAll: !1,
                            img: J.categoryImg,
                            isShow: !0,
                            gameList: [],
                            gameType: "platformList",
                            title: b("characteristical"),
                            showTitle: b("characteristical")
                        }), y.push({
                            isAll: !1,
                            img: J.categoryImg,
                            isShow: J.state === 1,
                            gameList: [],
                            gameType: J.categoryCode.toLocaleLowerCase() === "popular" ? "clicksTopList" : J.categoryCode.toLocaleLowerCase(),
                            title: b("code" + J.typeNameCode),
                            showTitle: b("code" + J.typeNameCode + J.categoryCode)
                        })
                    })
                };
            return (async () => {
                await q(), await g()
            })(), Nt(async () => {
                const J = await at(ma({
                    pageNo: 1,
                    pageSize: 5
                }));
                J && (T.value = J.data.list)
            }), (J, Q) => {
                const st = H("svg-icon"),
                    Rt = H("NavBar"),
                    At = H("van-dialog");
                return n(), a("div", OB, [L(Rt, null, {
                    left: M(() => [t("img", {
                        style: {
                            height: "40px"
                        },
                        src: d(u),
                        alt: ""
                    }, null, 8, EB)]),
                    right: M(() => [t("div", qB, [d(o) ? (n(), it(st, {
                        key: 0,
                        onClick: re(d(i), ["stop"]),
                        name: "down",
                        class: "home_down"
                    }, null, 8, ["onClick"])) : $("v-if", !0), $(' <div v-if="isAppDownload" class="homeIcon down" @click="onDown"></div> '), L(st, {
                        onClick: P,
                        name: "server"
                    })])]),
                    _: 1
                }), $(" 未登录提示 "), t("div", jB, [$(" 头部轮播图 "), L(dR), $(" 滚动通知栏 "), L(wi, {
                    key: "home",
                    isHome: !0
                }), $(" 游戏栏 "), L(wR, {
                    onTabChange: D,
                    ref_key: "tabsRef",
                    ref: z,
                    "tab-list": lt,
                    "current-menu": v.value,
                    "onUpdate:currentMenu": Q[0] || (Q[0] = ot => v.value = ot)
                }, null, 8, ["tab-list", "current-menu"]), vt(L(Sa, {
                    key: "slots"
                }, null, 512), [
                    [Qt, lt[v.value].type === "slot"]
                ]), vt(L(PB, {
                    key: "video"
                }, null, 512), [
                    [Qt, lt[v.value].type === "video"]
                ]), HB, $(' <GameItem type="2" :game-type="3" :game-item="test" /> '), vt(t("div", null, [(n(!0), a(R, null, A(y, ot => (n(), a("div", {
                    key: ot.gameType + v.value
                }, [vt((n(), it(XR, {
                    onGoAll: X,
                    title: ot.showTitle,
                    "game-type": ot.gameType,
                    "game-list": ot.gameList,
                    key: ot.gameType,
                    "is-all": S(ot.gameType),
                    "is-show-more": v.value !== 0,
                    currentMenuType: v.value,
                    isShowBtn: N(ot)
                }, null, 8, ["title", "game-type", "game-list", "is-all", "is-show-more", "currentMenuType", "isShowBtn"])), [
                    [Qt, B(ot)]
                ])]))), 128))], 512), [
                    [Qt, !["slot", "video"].includes(lt[v.value].type)]
                ]), $(" 热门、彩票、游戏选项卡 "), $(" 中奖信息 "), L(cB), $(" 今日盈利排行榜 "), L(fB), $(" 说明 "), L(IB), $(" 长龙"), $(" <ChangLong /> "), $("下载PWA应用"), d(m) && d(l) ? (n(), it(kR, {
                    key: 0
                })) : $("v-if", !0), L(fR), $(`			<van-popup v-model:show="store.prompt" round :confirm-button-text="$t('confirm')">`), $('				<div class="TimeLeft__C-PreSale">'), $(`					<div class="TimeLeft__C-PreSale-head">{{ $t('prompt') }}</div>`), $('					<div class="TimeLeft__C-PreSale-body">'), $('						<div v-html="promptContent"></div>'), $("					</div>"), $('					<div class="TimeLeft__C-PreSale-foot">'), $(`						<div class="TimeLeft__C-PreSale-foot-btn" @click="closePrompt()">{{ $t('winTrxClose') }}</div>`), $("					</div>"), $("				</div>"), $("			</van-popup>"), L(At, {
                    class: "prompt-dialog",
                    show: d(f).prompt,
                    "onUpdate:show": Q[2] || (Q[2] = ot => d(f).prompt = ot),
                    showConfirmButton: !1
                }, {
                    default: M(() => [t("div", WB, e(J.$t("prompt")), 1), t("div", {
                        class: "promptContent",
                        innerHTML: d(C)
                    }, null, 8, VB), t("div", {
                        class: "promptBtn",
                        onClick: Q[1] || (Q[1] = (...ot) => d(w) && d(w)(...ot))
                    }, e(J.$t("confirm")), 1)]),
                    _: 1
                }, 8, ["show"]), L(sR, {
                    show: d(f).laundry,
                    "onUpdate:show": Q[3] || (Q[3] = ot => d(f).laundry = ot),
                    onConfirm: I,
                    "show-cancel-btn": !1,
                    confirmText: "OK",
                    title: J.$t("congratulations")
                }, {
                    content: M(() => [t("div", FB, [t("div", UB, e(J.$t("getSuper")), 1), t("div", KB, e(J.$t("getRewards")), 1)])]),
                    _: 1
                }, 8, ["show", "title"])])])
            }
        }
    });
const QB = F(XB, [
        ["__scopeId", "data-v-6c4ce891"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-ar023-webnew/src/views/home/other/electronic.vue"]
    ]),
    OG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: QB
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    yG as A, $G as B, xd as C, sR as D, wG as E, bd as F, TG as G, CG as H, LG as I, NG as J, md as K, zG as L, IG as M, Xe as N, SG as O, xG as P, RG as Q, BG as R, GG as S, AG as T, MG as U, PG as V, DG as W, OG as X, Zs as a, tG as b, eG as c, iG as d, nG as e, aG as f, oG as g, sG as h, ZB as i, lG as j, cG as k, rG as l, uG as m, dG as n, pG as o, gG as p, bG as q, mG as r, _G as s, vG as t, Ze as u, Ys as v, gd as w, kG as x, hG as y, fG as z
};