var Xs = Object.defineProperty;
var js = (e, s, n) => s in e ? Xs(e, s, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[s] = n;
var Xt = (e, s, n) => (js(e, typeof s != "symbol" ? s + "" : s, n), n);
import {
    r as D,
    j as zs,
    k as Qe,
    l as Zs,
    m as pe,
    n as qs,
    o as $s,
    p as Le,
    q as en,
    t as tn,
    u as Ze,
    v as rt,
    w as le,
    x as pt,
    y as sn,
    z as Tt,
    A as nn,
    B as Ie,
    C as Ce,
    D as l,
    E as ue,
    F as M,
    G as ie,
    H as gs,
    I as Qt,
    J as be,
    K as oe,
    M as Ne,
    N as an,
    O as on,
    P as xe,
    Q as An,
    R as ln,
    S as jt,
    T as rn,
    U as cn,
    V as gn,
    W as ot,
    X as $,
    Y as _,
    Z as m,
    _ as a,
    $ as K,
    a0 as t,
    a1 as Ve,
    a2 as N,
    a3 as he,
    a4 as Y,
    a5 as te,
    a6 as U,
    a7 as X,
    a8 as j,
    a9 as ae,
    aa as Z,
    ab as Be,
    ac as dn,
    ad as pn,
    ae as ce,
    af as Re,
    ag as Ee,
    ah as zt,
    L as _n,
    ai as ds,
    aj as un,
    ak as vn,
    al as ps,
    am as mn,
    an as He,
    ao as hn,
    ap as Gt,
    aq as wn,
    ar as bn,
    as as Cn,
    at as yn
} from "./modules-5f4bb8af.js";
import {
    s as fn
} from "./native/index-d56959bc.js";
import {
    e as Bn
} from "./en-5db85987.js";
import {
    r as Rn
} from "./rus-ecb14220.js";
import {
    v as En
} from "./vi-40bd560a.js";
import {
    i as Dn
} from "./id-24cc3835.js";
import {
    h as In
} from "./hd-c5b1d7e8.js";
import {
    t as Zt
} from "./tha-330057b2.js";
import {
    m as Sn
} from "./md-02b1fc1c.js";
import {
    b as Ln
} from "./bra-1f3ea623.js";
import {
    m as Gn
} from "./my-80d37f62.js";
import {
    b as kn
} from "./bdt-d8f19d0c.js";
import {
    z as Un
} from "./zh-c7494ff8.js";
import {
    p as Mn
} from "./pak-47641c9f.js";
import {
    a as Tn
} from "./ar-1c9ff85b.js";
const Qn = "/assets/mp3/di1-0f3d86cb.mp3",
    Vn = "/assets/mp3/di2-ad9aa8fb.mp3",
    On = "/assets/woff2/bahnschrift-610d57ac.woff2",
    Pn = "/assets/ttf/digitalDreamFat-7e51cfaf.ttf",
    Fn = "/assets/png/electronic_bg-3178ba77.png",
    xn = "/assets/png/fish_bg-bf0b060b.png",
    Nn = "/assets/png/game_mini_bg-c04fcbbd.png",
    Hn = "/assets/png/hot_bg-cdfcf84a.png",
    Yn = "/assets/png/lottery_bg-6a8872fc.png",
    Wn = "/assets/png/third_bg-dfa325e7.png",
    Jn = "/assets/png/chess-9c4d1dff.png",
    Kn = "/assets/png/chess_icon-6930b633.png",
    Xn = "/assets/png/fish-a70df76d.png",
    jn = "/assets/png/fish_icon-bee0f4fe.png",
    zn = "/assets/png/flash-eac62fa4.png",
    Zn = "/assets/png/flash_icon-4db9e3b4.png",
    qn = "/assets/png/lottery-c0a9176b.png",
    $n = "/assets/png/lottery_icon-7f9c3132.png",
    ea = "/assets/png/popular-044514e1.png",
    ta = "/assets/png/popular_icon-6977543a.png",
    sa = "/assets/png/slot-bf07af03.png",
    na = "/assets/png/slot_icon-ffc91891.png",
    aa = "/assets/png/sport-ac79bf87.png",
    oa = "/assets/png/sport_icon-314ece36.png",
    Aa = "/assets/png/video-c9dce622.png",
    ia = "/assets/png/video_icon-f7afb28f.png",
    la = "/assets/svg/customerIcon-e7614905.svg",
    ra = "/assets/svg/down-60f07873.svg",
    ca = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALMSURBVHgB7Zm/bxMxFMeffadECmUKSxGROmViiMSULiDmdi1dKnVl7sq/wMxKhkoVKx0ZYMqEFIktE0gVnTK1gBpydr8vuTbXs9PL/ajOgz9SdD7b57yv/fx8eSHyeDweTwnEOp3+7O8/bRBtKSE2Ayk3lNZNegCkEFeRUpcyCCbT2Wz86OTkd9Yz9wpgwwMhXmDgTaoBKeXF1Wz27T4hKwXog4Pn/6NomxxACzFsHh//sLVJWyXPvCvGM0LrPttka7MKaIbhS3KMVTYZAlipUuoxOQbbZFsFQ0AjDLvkKNiwW+k6Q4CKojY5SsMSDQ0BQgjn3OcGZbHNtokblDUQUQ+XPlVHn9Ybz7AtpPz0EdYONc1Xq4dTeYCD7i8VQYiWVuotSt3F7fxYGuYZIrcARIN/8ReR1rqHUgf371Ge5BkHz7Qx1hGKpfaczNmfj/cRLp8TVW0Y/45yuBT6byNY8DO3xmMVecxcs88UcSGevVNceMb3YEyLPygfouGJuCvOALO+i+d3KF5FsXC/AVxyRAUoJCBmiC8f43oEAYuZ1JoNe4b6T4ZLxf6Otu6ySkyKuF+SMgLYFRYGYCVw04vrevjwvvgCC8+wyVu8TyiKXrOIxOMj3A/Qt1gAqEIAUSyC6ANE7OB2N67mffEGjcvXXbF88WV/R/9Tbi9LaQE38L6Af59hk+/dupTZZwKjP8LsMVVEZQKYOEKNYChHpA7cp8P1bLhe1LPhpVwmTaUCEnA4HMqE28xLFbhMmtzngGt4AXXjBdSNTcCU3MWwzRCAQ+iCHEVabJOWisx0Xl1opBzTdYaAqda/yFE4X5quMwRwHhKpvEtyDLbJliO1RqFZFH0lx1hlk1VAvAq5f949FGzLqgx1Zno9DIJXyEJsUA3gbfY80vp7ofR6kvkfHEg5ctYuTnxl5o4KMuUwjnB5joD/c50/ODwej8dTimto1Rxvl/j9pAAAAABJRU5ErkJggg==",
    ga = "/assets/png/1-dcdd0031.png",
    da = "/assets/png/2-0c408958.png",
    pa = "/assets/png/3-f5a58c12.png",
    _a = "/assets/png/game-96ffef08.png",
    ua = "/assets/png/SignInTop-93bf1981.png",
    va = "/assets/png/Signed-dd8900d1.png",
    ma = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADcBAMAAACbu7AEAAAAMFBMVEUAAADy9P/y9f/y9P/v8//y9f/z9f/y9f/z9f/y9f/v8//x9f/z9P/y9f/z9v/y9P+XHCoiAAAAD3RSTlMA79+PEM+vn38/IG+/X29rBQNYAAABZUlEQVR42u3dzypEARiG8Q8j8qcsLJTFWFFK3MEcd2BlO6WsyQ0MSytbKyZXwNLOHZAb0ZjGUPI6TUcz9a3PW+p5buBX3wW8X1TdHDVVY73Dy5iscaHa2+pOeC0ZGo7FB1naiaoZmdqrDvosU4NiBM7K1tMIbMlWP8qWZey+BO9kbLUEOzLWj1iQtSLmZO08pmVtJW5l7SuuZO0nTmTtI9qy9h5NWeuFzAECAgKmAAEBU4CAgClAQMAUICBgChAQMAUICJgCBARMAQICpgABAVOAgIApQEDAFCAgYAoQEDAFCAiYAgQETAECAqYAAQFTgICAKUBAwBQgIGAKEBAwBQgImAIEBEwBAgKmAP8BaJ8x3JW1gX+K8k3WPv1zolOythHzsnYaDVnrRrRkbBgR+zK2XYKLMvbiH58uW5KtgxHYaMvUd2GfSK96laX1+GuhI0P9IsbimWpvrfKqro/rfVWw+VhBvwq8MKRa6hm0AAAAAElFTkSuQmCC",
    ha = "/assets/png/coin-d78e2103.png",
    wa = "/assets/png/coin_w-48028e5d.png",
    ba = "/assets/png/day7Bg-d3f63db0.png",
    Ca = "/assets/png/day7BgActive-0b574f89.png",
    ya = "/assets/png/gold-057909ab.png",
    fa = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABCCAMAAACfIiM3AAAAe1BMVEUAAAD/LCP/KyD/LCP/KyH/KyH/KyH/KyD/LSL/Ign/LCL/KyH/LCL/Jhr/LCL/KyH/KiD/KR3/IRr/LCL/LCP/LCL/KyL/LCL/KyH/Jx7/LCL/LCL/LSL/KiL/KyH/KyD/KiD/KiH/Kh//KR//JR3/LSL/LCL/LB//LSO7lG98AAAAKHRSTlMA+F76W5KOVvwF7G7PDquBNSQJ8+TDt6agHdmXj3h0Tkc9KxgU32ZRnsguwAAAAZRJREFUWMO1ltlugzAURCEUs4QlhOxp9qXz/1/YSlE0UoEYC+Y8o3NkX3RlT0aVrRNPSJQCwsLcxICwUC3xotAUTinebLzxScoYb/zJ+P7tClL/ZSH1J8dY6r8XIP7X6P7ZQ+pPnoDyfvKN1n/daf1RLPXne0A53yrT+n9qKO9nbiD1b5da/znt6z9EQ1a/fb4HoNi6+m8rOPiBdJK4rv6+9zPFi6Jy8B8DZz+QPvse4r6Gi5+srv1W/87RT+rj3O6f+ug5X/rJcmZf/UP8gF9+PMQ1g/V+SIg2sg+HmNR2v70Ql3nHbtuj1e9cQHaxrH6bnxi0EzYPEdWwzNepsDv/220mRoOAfvcC9nnH6qe/3/4P0cHj1Hj1N/zDCtjcX1+UQYd/cGERcfW7+4lBJ8XtvEAL/l96nELqD/KzYGHw+yFU+VlQ+Vlw92vmEHC+ggL9qkIw7H0eqvwsqPwsiPzEiOZLjMrPguh+SKjys6DysyDyk+/mfJWFmH5JIf7yFIQqPwsqPwv0izD8f0QY+kXMvAH8AjBd8CPPjv+qAAAAAElFTkSuQmCC",
    Ba = "/assets/png/headerBg-b4f41a4f.png",
    Ra = "/assets/png/headerBg1-c5504bca.png",
    Ea = "/assets/png/DailyCheckInBanner-4da72087.png",
    Da = "/assets/png/DailyTaskBanner-4d2c6dee.png",
    Ia = "/assets/png/DailyTaskHero-24465825.png",
    Sa = "/assets/png/activityIcon1-fdbea43b.png",
    La = "/assets/png/activityIcon2-e3d36e93.png",
    Ga = "/assets/png/activityIcon3-40a34b7b.png",
    ka = "/assets/png/activityIcon4-bd101860.png",
    Ua = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAYAAAAc0MJxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANFSURBVHgB7dtNUlpBEAfw7nlAdMcRkCTrkBMET6CewLhINCv1BOIJwi6GLNQTaE4gNwj7BH25AYuUEuBNZ0ZKi1gP6EePBZb9q7IslI/hz9A9MxQASim1uBACuSntlCJDewSwhgglAOq4u28ZoJNcu3EKj4BKe8WBud4lxKq7VHGPVwSClntWrSTBw+X4KIZAggTVK2/vAlLtdqDpYjfw1ZAD//P6QyWfmLPhi5IOiWr5y8YhBCAOql/eOaDbkKbqgLGrhZ/fWiB0O3sj+2PCC3PPEu0vXTbqICQKajhguspwE/HM8o9pDF1MmkkPdNxjvpXOZgMCJrI1yMbXsTNfW2BG7oU5zhCSV/S1E4REQSHiG8gKodKPbj7DDPzb3P2qQlYIayAkCsp1mArM5n2//PEgyw18w2DWwjQlEJIFJeBaem3w8tMm57q+w7lZIS7IErKg3HoFBCzYes+HMIEv3n4ZABJE4k4rCoosfgeZIlhz5sNIvX9X9DN2uFQWQLzgFQVVsN36cAUuMrYT9qLrY2lITkzWnIOQrOvFJx23ZdkCqZRO6DscAq6DCLnxmf0QOwJxMX/RbpwT0AYRxCBz3wmFHe5O3DO0+qL9RTybvKCbYoigGgFsuuJZJF9/ZmDRHhoymZYO/3ENBgmaebt8inFdWhaUUvMVrEbNisasoUZhwHOsWeXS/ui3DAWLF5zznqwSdMcsv46ad5d70xeUsftZubvQf7VTJaILCC92Y9saHduo1OXBcMsQPqQFV4qIxm6VUoMKsBp+qsZOjrmdHjw1GhSTBsWkQTFpUEwaFNOYoLAJz5A78Rh7JJO6Ms8n3Y1utLTujkzeQWARJqKjj8EA4ijCEwiMEH4XBktjP8CY+17vb3n7atoWptD+ugJzpjWKSYNiyk36J+cIJCvpkcnw05pu8A37tHFNDKoX4DO1h1z4K5KwBrlu5RGOWWIYOcpJo289Jg2KSYNi0qCYNCgmDYpJg2LSoJg0KCYNikmDYtKgmDQoJg2KSYNi0qCYNCgmDYpJg2LSoJg0KCYNikmDYtKgmDQoJg2KSYNi0qCYNCimiUEhYgzPQzztChOD6plkP8B3hRddM0lQ/gVypZRSi+8fX5UTeqKcPpAAAAAASUVORK5CYII=",
    Ma = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGRSURBVHgB7ZfPSwJBFMe/b9YSwV+HQCNCI7NL4KV7B7t36tpfEP4JHvoDOkR/gReDLnnPQ39CEEFQpAeJsnRTSy2dadfYLazWrWYzyi8MO8N78z775g3DDAkhFAxBDEOSXPDuwpJdVzngvcUosrE8Hpt5ZOfSdqbQt2qcXw7iqpiC4K9hKkIzMST3VaupX894Zz6Fy/PTPqiuIMqFgVl/PmO9jp1WGkJY13PMk8Tq0QEGgkvrQd5srIHz4IfOtUoCjfoK7GjcfSgmwjljKAQVFa8vh6ntXglchqGrBSTqbFrFEv4AoDd7SmhRE+ZPE8CbtYBW2y19zF4MIgKnxWGu5h85QEbg3wh2QbKoWgFdlID7u/fMacSxIR1M12VQ4cyWr9Slppty78tjcfDorKWv1IyFooD0jqKHJfwc2OcHqVWwk+OBvnJ3dWgSQmt2JH1Xi+mIBg8D7fZbY+shw5wC9zTufm798ikFozs6MocAZkyFwxKMikbf3Fys4810XfVb4g7dRLTEFI/XvIPRv3s7PQHFo3muTyJYoAAAAABJRU5ErkJggg==",
    Ta = "/assets/png/awardImg-36ab6349.png",
    Qa = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAmCAYAAABK4fLXAAAAAXNSR0IArs4c6QAAAlpJREFUWEftmM1LVFEYh5/fqJUJSRToIsGPv6CSPsBFQdEmCFpE9EGELSToH3Bhs7AI2gRGSEEtghZBtWgREYWtEsRtrcw0pFX0bWE6vzjDvTANU9e5egeEubt7zn3P+9z3vF/nCMD2bmAY6AM2hLGMn6/AY2BQ0qxs7wJe1kh5+b/NAL0B4gWwP5r9BnzM2Aph+faSn74UIH5GA5+ADkk/soaw3QtMRHrGAoSjl2lJ3VkDRD7YCnyOdE3UIeqWsL0GfWIx33m8IZc7lD5qFq9raHayVL4qSzjf2W7pQ3qAouQXDU1vlohTQSgTy98OX21rYX7jlKEtLYjguS5OH0htiWJiudLdyq/C9nQQKkDzuPKvF1YEkU75/6Wq2o4sAOppe237hPPkCuoaFT4Kakhwt1ea23JENyd/J/lSVY7p4Z4OLxVmkxaN59W0sFWDc4mdWXUQ+X2Nzs08whxOAlHolNzcV54TKslVBZGkOO18HSK2XM0sYbsFOAiEiqmyrWsGbmTa3tk+BYwCASTpWf1u23Y4NrwB1iVpz8wStp8Bcf/wFBivABNCfmc0/mTVzx223wPbIgU9kt6W1Y2TwB2gKRo/lzVEl6R3JVFxBrhVAvAQOFYzCNv9kbM2RlAPgBOSFmoCYXsAGAFigPvA6QAQgDKHgGLduQbEVfgecDYGiCHmgZA8wik5XA18X2ZoVfyszDGD8gslAHeBfkl/lfssLklCZMRmLwW9DQyUA8SW2AOMAetXYoEE2RAR5yUtVvqumNNt7wAuA3uBTasEUwCmohoxImnpX+v+AXKAuT91xQfLAAAAAElFTkSuQmCC",
    Va = "/assets/png/close-32ada670.png",
    Oa = "/assets/png/confirmationReceived-a0e67071.png",
    Pa = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEySURBVHgB7ZTBbcIwFIbfs0pREIeOwAh0BDbgiH1pO0InaDpBR2hOIbeqEzBC2KAZoYdKVgnk4YcUCSQTxwZx8neJpS/5Xyy/Z4BIJHILaqXeLvFdiC7ZEKUbpT5DfXBhappXInreSFnSfP7g67tA1wt/Sk0HACsg+jU7nCVFUfn44MKMXiwmAnHFa1u4y9sQ0AMO4sDDB4ilOdepjw8u3IbfD4ePiFiZcy23Uj75+Kugpcz+paRz4+TyTO8dH3NH9MPP7ZkecXmmV3O18MjUo9EHj1CD+J7keerjT34OesKdWyN+EcDENNJLslxmPj6ocDsuJhRqgNm4KNY+3obzjPmCEEKUvOaRGef52scHFeaR4FsJiSrbxeDywYV3AJkJ/B5obQ11+WC0UuklPhKJ3IQ9jzb4kh/4axMAAAAASUVORK5CYII=",
    Fa = "/assets/png/friends-b97f5cb8.png",
    xa = "/assets/png/giftRedeem-32978318.png",
    Na = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJbSURBVHgB7Zi9bhNBEMdnd80dsmSIIhqoroGKSEiuUsUNSJEogMqObQnyBOQReILwBAEpl6SESHmApKKyREFDqlDRgBRhEeu+dph1gfD5zneDgDuU/Umns3ZnZ+e/X7M+AIvlciOACW5utuKLixWh1G2N6NLzOQR4d+3g4AvHz/du95YSoi2FuElPgEJ8ajjOSOzsjDl+WAJM8EkYPtRat9J1WsqTq77/sZSfbteLpHyQLpdSjpXjHHFESGAQh2E7K/ipI61Xv/V6N4p8TAdBqbWsOuN7QrMLDFgCUGtvQbXTVOq+CTC3/fq6O51BWnp5Ng0p7wADlgDCWVRpRjCYTDp59fHy8lreDJbtIw1LgNmwRTZmU2Kvt5ouDzc22ojoFbZH/AoMeDOg1GkZs0iIlaDf/7mWcTi8S692mbaxUh+AAfsYNSNZNphI66NmszlOguDJonX/CyNnf38EDNgCDGajhkHgCcSF65XO9tBRKojiuFVo57pn3BxgqQOZSyjq97cR4DlwkfKZs7v7OhoMOpQzZs5zIeXpFd8/Nr/D4fApnbmvgM9LZ29va6bLLKvfCv7fMBcXN5HVDiugavIEnEM9OUsXNLKshBCPNUAHmIgkeV/KkOxQyhfAhEb7eK5P+AsUHaN/kv9+DzTyKmgU39D19x4woDvNluv7b4vs4sHgEV3utoED4iFd9ObyQK4ASmZL9PKAAe2dpTJ22tiV+G+Qcn49q9jmgaqxAqrGCqgaK6BqrICqsQKqxgqoGiuganIFiPp+mZghV0CCeAJ1QYhz+khwCBaLZY4fuFDZDAR6g24AAAAASUVORK5CYII=",
    Ha = "/assets/png/present-360b680e.png",
    Ya = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGRSURBVHgB7ZfPSwJBFMe/b9YSwV+HQCNCI7NL4KV7B7t36tpfEP4JHvoDOkR/gReDLnnPQ39CEEFQpAeJsnRTSy2dadfYLazWrWYzyi8MO8N78z775g3DDAkhFAxBDEOSXPDuwpJdVzngvcUosrE8Hpt5ZOfSdqbQt2qcXw7iqpiC4K9hKkIzMST3VaupX894Zz6Fy/PTPqiuIMqFgVl/PmO9jp1WGkJY13PMk8Tq0QEGgkvrQd5srIHz4IfOtUoCjfoK7GjcfSgmwjljKAQVFa8vh6ntXglchqGrBSTqbFrFEv4AoDd7SmhRE+ZPE8CbtYBW2y19zF4MIgKnxWGu5h85QEbg3wh2QbKoWgFdlID7u/fMacSxIR1M12VQ4cyWr9Slppty78tjcfDorKWv1IyFooD0jqKHJfwc2OcHqVWwk+OBvnJ3dWgSQmt2JH1Xi+mIBg8D7fZbY+shw5wC9zTufm798ikFozs6MocAZkyFwxKMikbf3Fys4810XfVb4g7dRLTEFI/XvIPRv3s7PQHFo3muTyJYoAAAAABJRU5ErkJggg==",
    Wa = "/assets/png/signInBanner-e0be7ad5.png",
    Ja = "/assets/png/taskIcon1-4d9fdca3.png",
    Ka = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANeSURBVHgB7ZldUtswEMf/a1Ke0xuYExRO0HCCwgkIJyAJdKZvhLfOAIk5AeEE5QaBE5Ab4BvUQ99IbXUl29gEf8hYDn3wb4b4Q7Kk1Wq1qwVoaWlpaakBoSbi+HgPgbjmls5oMnG0vhmOHlXn08kWamKhLr6w+bcLgVMxGHfLqovRqM8X+Y2tU7+M+gIgmPGPBymE9TQorc6CqithRs7YQ01qC0CO4/GgrtSDwFHRrKZmn+UOzmAAAxqQBHLtl2vh1ew7LgxgRAAdLTQx+6rvKpXFYGAXFHdB1jy6Ogj+Xr3uSZXZILpF4A9RNKgK2ikVQAy+b4OCKd9tq8GtC6IZgk9n5Px0C6sVFYrh8ICrzPChUJ+mlze5pXkFYvCD1f38uPI6WuvBLUKjNUjH5nZZ2zhCbCsvfW7u5Gmik9uetTzlwSYQeO0Gh8pgI0Jj9broyM7fAZFH5+eL6Mnlvzu2M54ca8r97UXv2aaWcmfL3N3yNTAc/Uay5t2020/ZRQ8mWFnvLAQPemMe2Z3E4/4/Z31atI0mBrthHca3KvYhf25s8KpR0eflOlcTg3hbpmHmWFbQ8QMeXVzcqX6kXcjArZndiG3O/xX7EHJUn6V2piEAuUntpfSkTW6l9oonNyFAqhFhcNnkIehrlepVQwm7vAotIIItNjriwewj3F0qoMJzbQwFc+n+/f04FCDn8lbtXgIy9jHsN0KMC5AVx5AzGbNWdli6GxjGvAZykILRdNrnuzsYZG0CvEDiHgZZvwCgLzBIB2tCOSjrieMrsQeDGNdA5mns5KQHenrg3aj80F8R8xqw/nCQBxU7hSH58hp+0ENDmBeAAzOOZHu81nnff7bR8CmuqgAutLyxrCPwPlKxlwYaNpBy7QLGHdHb7qo5Ox0j7iaGqfI/LhqDFuy1Z/JOHWo0tK0lQBzihgeNYBeNCMEemuOol0fL0tpui46U8kBvR49vDtZiwIkqooOq0WPGEFy5bOKZD9tWCYUwjxTWWXBmYifz67xmeYBjLj1NveKONnfL8jR1UT7DD+Spz07e0hULUPFQrw7W1gPerENWdRjPuDALp+jpW8ZZ25XLNi9bV5zYkqnEOCX4MRQOXqKVG03Wu3RKovn0ooDMFd3L/z2k81AtLS0t/x//ACb4T8s751c6AAAAAElFTkSuQmCC",
    Xa = "/assets/png/taskIcon3-dd14a0b4.png",
    ja = "/assets/png/taskIcon4-61254c95.png",
    za = "/assets/png/taskIcon5-de1c9e45.png",
    Za = "/assets/png/taskbg-ccfaa9a1.png",
    qa = "/assets/svg/weeklyType1-5e9f2d00.svg",
    $a = "/assets/svg/weeklyType10-07c4e868.svg",
    eo = "/assets/svg/weeklyType11-25f842c6.svg",
    to = "/assets/svg/weeklyType12-34fde9d7.svg",
    so = "/assets/svg/weeklyType2-29588ce0.svg",
    no = "/assets/svg/weeklyType3-e6ab7d85.svg",
    ao = "/assets/svg/weeklyType4-99a51307.svg",
    oo = "/assets/svg/weeklyType5-fc8ad507.svg",
    Ao = "/assets/svg/weeklyType6-17da4c31.svg",
    io = "/assets/svg/weeklyType7-9b8179b3.svg",
    lo = "/assets/svg/weeklyType8-d34a0143.svg",
    ro = "/assets/svg/weeklyType9-dfbfa5f5.svg",
    co = "/assets/png/bg-d867692b.png",
    go = "/assets/png/box-4a7ba10d.png",
    po = "/assets/png/cardbg-50bb0b77.png",
    _o = "/assets/png/head-1346d1c1.png",
    uo = "/assets/svg/rule-bb636f94.svg",
    vo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI0SURBVHgB7dzhbdpAGIfx91AHYYQsUDfdoBbwuWECygRNJkgzQdLPJXI7QSNYICOwSH29E1hF/XSv1X9S4+cnJeGDzxZPDkPIYTMAAAAAwLAEc3psdp+jtVdp6NQxzKLZelFXX0q2fWy2V2n7e3NId2Q5q6uHkm3T/j+l/d+aQ7T4PLFwV3qMzsSz8abZ/kwHuvbGPQfBwkX+pecGvnGFulkVLO5bmywX9dsnG5EU9kO677fRwjS28WYxe3ddMq54Bqcdr44/12OLm83r6nueWPl2mISPpeMcp4h40R3IRupkYk1Lx7jOwfAjsBiBxQgsRmAxAosRWIzAYgQWI7AYgcXelG6Y3nZbtwY6oL/mx261aXYrG5DiU8T/4Fcbu3853dlA8CQnRmAxAosRWIzAYgQWI7BYceC88CR/2ch5OxT/oXGyVuzBRszbgVOEGIHFCCxGYLEXfzetz+Lnv22abbQePIvA/xVmsNiLz+DZYQb1mkXdzJ3XlfujD6+FGSxGYDECixFYzLMuYmk47w75VUTf18CvhVOEGIHFCCxGYDECixFYjMBig1pdyeJn9DfExc8K3g7Fp4ghLn5W8HbgSU6MwGIEFiOwGIHFCCxGYDECixFYjMBiBBbzBN7nb9+a3aWNVL4C6+FWfC4d47j6avx6GBDv/xxoPPLECsd1zcFC8RtermWgx4sTX1oPQ78C9omneV29L93YdQ7OOz4sHSp/iJyPuE+P4htPXAAAAADAEP0GbMazGuYBeoYAAAAASUVORK5CYII=",
    mo = "/assets/png/claimRuleBg-21888f47.png",
    ho = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAmVBMVEUAAAD/xgD/xgD/xgD/xgD/xwD/xQD/yAD/wgD/xwD/xgD/xgD/xgD/xgD/xwD/xgD/xQD/xgD/xgD/xgD/xgD/xgD/xgD/xgD/xwD/xQD/xAD/wwD/xAD/xgD/////yQ3//fX//PH/9db/88z/6Zz/55L/2FL/1D3/yxf/8cD/7rX/7K3/6qP/5In/4n7/1Ub/+eX/3nD/2lxUAIT2AAAAHXRSTlMAtmnzvpxiCgb79+6oknSJhFgmH9/FsHwQT0UvGh9iw0IAAAEQSURBVDjL1dPXcsIwEEDRdcEYG7DppKyMSUjoKf//cVmNJIQDa+mV++RyRm1G8IiVEd4tK/7LBNmSpnzNeZpPGjTAlgLn9LbQykneTqOxa3pbbGSIzobM9PwSYvRolprpvZYwjvxo9gIBehZDhL5B31f2YTnzk0EXYBl7Sqp7sV/1vkLbud5cZEpQWnMKByF21p6EWKFqTlLbufryIYR4M3ZDL+96RyRNqT6HX2m3KDvS41F97UCjjh53pWx1sGOSZO16W+15SQ30KUi7I6l3P4A7FerfZy1kJ15S5ZU9G8m00Hb9/aOeCmAbYqOSYbc3cgGtJb2rK+JoZGwI4LSZhD2S7p4ykgl49TydjuCx+wPdumhNhF/FAAAAAABJRU5ErkJggg==",
    wo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFuSURBVHgB7ZdBSsQwFED/DxW3HkFv4JxAPYHuFaZxUXA1eAI9wuwEQTOliEvxBB5BjzBH6FIw9ptU7ZROZ5pMk8BA3yoNP/2Pn3yaAgwMLBBpNrkTz/s2axh44lFkMyKY7qJ8vxdPh6brEDygZdSbx7WpXBI7Sfj5R9da5xWqyWiJERCkarwXYfFmUimnFWrIVBVZNe9VqCupqZQTIdNk9TgkecA5z5sxvc+QzXbU+VTnqm2+l5CNTDP2ivN5W9zGW9ZHxvmh9iWzkZBPGWsh3zJWQiFkNEZdphJMQ8gYCT2I7FYlmISQ0WCXDCLchJLRrK0QQzgqB8jiEDKdQhX4nUMAGXOhQDK9hHzIaCKTICogVhf24//ngkDf/M5cy5gIlWcHAWN1Ya/4a03nMt1CJK+RRa0Jvwr26lpmYCtZ+nTof6cdVpxCIAhwfjm+SFcKiVn2Qr8tHQxJcpRwXjbIcpet6SxP5EnMh27dXn4ArktBGmclnqsAAAAASUVORK5CYII=",
    bo = "/assets/png/forbhidden-a43247ed.png",
    Co = "/assets/png/header-bg-1f77afcf.png",
    yo = "/assets/png/headerBodyBg-97b071e8.png",
    fo = "/assets/png/icon_jfgz@2x-518131aa.png",
    Bo = "/assets/png/icon_jfjl@2x-49b1e178.png",
    Ro = "/assets/png/icon_tip-38287455.png",
    Eo = "/assets/png/jfgz-88c57e1f.png",
    Do = "/assets/png/luckyNumber-36352a7e.png",
    Io = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAABHNCSVQICAgIfAhkiAAAAsVJREFUWEftWMt1GkEQ7JYWTj7IEQgb7kIRaIkAHIFRBJYiMERgZ2CUAY6AUQTaAMAiBA4+8XG7ZvYjQGJnZln5We/tHCQ+vd011dXdMzC9kcVvBCeVClQaYWN9Sg8iNKz/Ut/LJKFUoKtWGBLxBADva9MJXpe3KqD/nNF1M+wL00Vtqm5tiYw1ypGIDFw0Ct+9P0Td+kxd23xbU79qdRScXCH4yMWhLWD6PTbVRuFNiPksWMslz1WU96wVqHEY8IN2wiLXwUyNXMEcsoPPM4B81CBBwB0I6Nt8WoFqB3H6+Yd+De05PZMXeNkMR8z82ac7OAc1YInatZm6se3e9n2S9kGwoT5SvrDZm2y6GP0PNkcD1XrbnFIXbPfQHRpM3Ibu5sw0xwajYE13tkJxIeIooJhEAxL6oosiN5jIGGm+BWANvtAqBFSzuAoIVcXtp6jgVC/9T3tN3prPQC+JLAC2U5TdQkCXrU6EBy9iMPijgRxaOKEY5JmJdDA8lC+t3kBNuom/OoFM0RiwMbNCEtWn6rIw0OXH8IZP6JyFIvTMOfrl/b4zMyIDftzNsUfIVBYkQ7CKDe8u3bY2AZ9jM1pSmFg0TNtXxihG5baqXtx5Ok6ht/x0H9ZBImAijM0P28UVE8Xf9qBnMnlSjmGL+sDQwNRo6BazPdpSNvF5LLc8XeaRnG1yl1VzQGEewDcGgCidWYzrcerKWaNbh2KPXL9gmgIV+Ykp13N15gM0LqKs/7iG2BdiLBvfonIGmh0kCuvz+cZ8DjjOQLNCOpbRLbwVUJBxdbRGK0YTBiqNOna5qupdiKraU9WeHHRSFZMDSV6/ulSMvhqjyeWumxPAXLhcAHjYqFxboQVuAZ/MzSc1XDXDMU7eeUA94pdnikvge30T3dFofC86vGDcwi/E78qAccI0xWXhd54vXJejZ9flMoK/po+/xWJrOuMPCRcAAAAASUVORK5CYII=",
    So = "/assets/png/orderCancelSuccess-4100db24.png",
    Lo = "/assets/png/orderCancelWarn-ddac2780.png",
    Go = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAAeCAMAAADjJaDCAAAAQlBMVEX66XP66nT66XP66XP56HL56nT66nP66nT56HH56XP66nT66XT66nT453H56XP66nQAAAD66nT66nT66nT76nT66nQpHvyWAAAAFnRSTlMwNSIpFC0eJhAYPDhACxtEAEdKTVFWzQBWjgAAAx1JREFUWMPF2eFS4kAQAOFcEsjuYQJ63Pu/6rFh2VZbGSjF6/DDVCnUfJlQqN2hlXI/bDr6Rbva79bTq/a150sv5/60jvT35o7EM73Unmv7S0/0m3Y1RuloM/Q5MX+jyMNmrUGUR4WA4gOMvS1eaheIswUax1BhdUDiGEg87XFAYmeJrjwaRWnI7yhShYCiQFCTwOL0omgIo+XNqIW74IUwBDuxj3cCBiQKRnpNsQyVAgs0sPBioOG7RBwCcUYwg++NKytR8kogUSiGDMUylG7E8GaAAYe3w10DAOETBhzoYwjqCIjScqHI5ewahjXIb6B4GAQWZwAboGCG6w7rm58havlMkaZhMEaosRMHIBIBJcoCGFgBBiA+dqANEK1pXin6aQLjHg0w8DCITeIsYAMr7MzAfWEHOgH0hWKcStL4lMMeO4MQKC6c2wI2sIIYIofSeKLo+3piDXOggYdBTGIZPhHoS81uAgwagnYhYMCh1PeHbu5Lt3HgYRFIMIHlq+kp1xcyQk0KAUNp7sa+hIY8QhCTeFHcTWMbAAEIZBArwNAau7zlTB4BCCRCUecbWnP5Wr851egCkIEQrAADbXO3bEt96AEIIrEJv8GIxzlPb4HQIFZYWyrFFQ9AJCKTiMVO7w4VjC8BGQjBCo3iFBwCkYhNrPIVHNcpz28CGxgBhlKXl0tbgVgEE6sY5gFtSPNLAAMjoFDL3ZhLC0lEJkaJXbo7iTYUT28AE9gAhLWxm3Mmg9jEKGYxDj53V35YeXwDmMAINHeH8VQm7UhkAottvr2JNL4EAgIqBOWDdxrJJDaxipseXO88vwVsQOlEMScwIJGJVGIYC5WDwnpmDoZXiwBMQCmlef17RWsMTVCxi+u/va3S9ABYQDH7oVBgIROh2EU0P9bi8pLd6JI6nCnmWiKj2MUt2Hwb0kIq69Jr/EBgvnSmwEImVnGG8e6AdGdZIwezq0QWQKJSCMMqdgnKD2wMSkoAgoCiaJSDAhfb/LcSqTmozMx/x2iGBJRAJu6hA7s5nh6A5gAF8S24ABOXfrCZuWOANv/MNX/bP3f5/fozpo2QAAAAAElFTkSuQmCC",
    ko = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAUVBMVEX6YV8AAAD6YmD7YV/6YV/8X17/W1v/UVH7YF78Y2D7YV/7YF/6YWD9X1/7YWD6YmD6X1//X1/6YmD6YWD7YWD7YWD7YV77YV/7YF76YWD6YWDnhh6SAAAAGnRSTlNmAJ+NWTIMBkxfeUH1KuxwHBK84sWyU9KCqGHd9LwAAAG9SURBVGje7dndjoIwEIbhT+kv5U8WULn/C92DPTCk1Q7DGN2k7w08QZCUGZzeXAEK8I8BO7TBKQ9KygU92D2AbR1251pDBKz24BUMBdAe7LzOAmbBoZR5DVwUDqYur4CLx+H85TlgFARS5imgIJJ7BmgI1aYBA6m8TQIBYukUYCCXtwmghWBtAnAQzMWAhWg2AgaINkSAhmg6AgKSVedMFZKFCHBIdOvWbF2NREsEKMTV3UqoSQkqApBoWkmNSEQCGhrQsYGVWAEKcPgx/WEDVxowsYGKBtQ0gH0JI/hA/0O4Az0ZYL1Prz2IAE8YASrAEmbQAY5whwCAulnTNRVEANzSQncDA6ALXQ0xAOfk488A6MLUQxTAGL1AhYF+extqFkC/hCvkgSrzB5MFzgUoQAEKkAcqBqB2AE2PXCoCFryuppyGHjnaKCH9sTAhX9g/DLk/TkOENGOcM/8dRnvmOMciWz1PcwVa9t0jtU8MBa2HXGYDyA/VwmkDyF+C2QDyd0GftoD0g6Q+sKCQXbF8YEkk+CstJr+og/CiLsoE8PLBEpelhrcstfvWvTo4BVJqCXqw37awLkABvgj4BfGKfjchOb8TAAAAAElFTkSuQmCC",
    Uo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFoSURBVHgB7ZffTcMwEMa/szpANyBsEjboABDcdIC2E1A26ALFhTzwygbABt2AsAGvSETHuUHhj0hsR0QC5J8UXeR8sb9czokNRLoh9GBjrjQRmS4NMy9n02yNQBR6IGbOfDTGmDECGSGQjSlWEhLJQZnr7PA7zcW2uJWQQo3mEs8RQFCGjLlOiDB/u1O36SquTTBjEZqlpoZsXShFB11iGSCFfXLJjrySrUO7kDBm4EYRdp1aUJmfHl/a8+aV2SKVTjyhRLQrLyUwEe2kW7Uf+LMhmRXTJkMsA4K1TyZCEXNagu1/q4jK2k4dgZZpb0yRMsEW5l2uT47wgxgpeN4XPKd5lt1/vd5r2g9JNOTi/xiSr/GDPXzbfQn+dXwgCWz3ItaQi2jIRTTkIhpy8esM9f5SywJrzfS+sHK1D25oprNlSLsvsYZcREMu/ty0T2X157199MHVWUuGXnZ2k4jheHquqkdEevAK5w16EtFKUlkAAAAASUVORK5CYII=",
    Mo = "/assets/png/redDiamondSm-846918b0.png",
    To = "/assets/png/statusBg-219ad07d.png",
    Qo = "/assets/png/successfullyParticipatedBg-95369aca.png",
    Vo = "/assets/png/successfullyParticipatedBottom-7e9e5c61.png",
    Oo = "/assets/png/successfullyReceived-cd71ba28.png",
    Po = "/assets/png/ticket-e196c542.png",
    Fo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAZlBMVEUAAAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AABaVZVmAAAAIXRSTlMA+ogNB6vdcl8n5+FZViGkegrxs7BPOyPb2ZaNgkHyRhDvf3KlAAABGElEQVQ4y7WUSWKDMAxFbWwgEIZMQIam7bv/JbtoQAjb2UU7fR6W9ZEwn42uLcume4u4niV6l4D8DRVXH6O+AB7udW4GkIXUHuxzLVQW6i11gvNWu8ApOGsXVtjBXt1LKBWtup9fV/yBYUlykH5vWHkHQDJLsbgKzxQ2wuxzL7pgcly+PHiksWzJ4DeNHeesA6Oq6Byqf3O0XG+w2dJSy2coNHaIYQfIY1ijsWHWpWishQmGWAsGnNZ9zBATjmnU3l5Xvd9N9GM5GEUv1CxOyI2u2NRXsIiJHi6yzzDpsZR7Joa82XRXQxtdhTpYQKkrFb9j61ythdFCHfURmx1f3meWhOu+QEXhUz+uXKDcmXdRNWXZVOaj8QdvhiCtOhnMLgAAAABJRU5ErkJggg==",
    xo = "/assets/png/bg-368559ba.png",
    No = "/assets/png/btn-779fac98.png",
    Ho = "/assets/png/money-61d676bd.png",
    Yo = "/assets/png/turntable-b345db9e.png",
    Wo = "/assets/png/zp-624cd5c8.png",
    Jo = "/assets/svg/active-c0a03346.svg",
    Ko = "/assets/svg/active_b-cc46285e.svg",
    Xo = "/assets/png/scck_head-6fe57481.png",
    jo = "/assets/svg/scck_head-89a49cb9.svg",
    zo = "/assets/png/supportService-3357d35e.png",
    Zo = "/assets/png/ar_wallet-62a42389.png",
    qo = "/assets/png/close-628f1a7c.png",
    $o = "/assets/png/closeGrey-bcb35c22.png",
    eA = "/assets/png/91club-9e9718ff.png",
    tA = "/assets/png/sit-95b2397f.png",
    sA = "/assets/png/development@192-f134a4f5.png",
    nA = "/assets/png/development@512-d2757cff.png",
    aA = "/assets/png/downloadPWA92lottery-6b8e4840.png",
    oA = "/assets/png/downloadPWAmzplay-5f6fc834.png",
    AA = "/assets/png/sit-95b2397f.png",
    iA = "/assets/png/downloadPWAvxth-194b66d9.png",
    lA = "/assets/png/sit-95b2397f.png",
    rA = "/assets/png/sit@192-c72b958e.png",
    cA = "/assets/png/sit@512-3ffeabd6.png",
    gA = "/assets/png/downloadPWAar006-9de82932.png",
    dA = "/assets/png/downloadPWAar018-4e95aef9.png",
    pA = "/assets/png/downloadPWAbharatclub-d6dbde55.png",
    _A = "/assets/png/downloadPWAdream99-ce8deabd.png",
    uA = "/assets/png/downloadPWAlottery7-055a8d05.png",
    vA = "/assets/png/downloadPWAsit-482af576.png",
    mA = "/assets/png/downloadPWAvxth-d81aa4c1.png",
    hA = "/assets/png/downloadPWAyjlottery-fb0d02e2.png",
    wA = "/assets/png/missingviebg-f283c7c1.png",
    bA = "/assets/png/missningLBg-ca049a47.png",
    CA = "/assets/png/newmissingbg-b08ac203.png",
    yA = "/assets/png/newmissingviebg-0d3c6b98.png",
    fA = "/assets/png/pwa_close-08f52d08.png",
    BA = "/assets/svg/rulehead-4a63d685.svg",
    RA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAmVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VHQRUAAAAMnRSTlMA/RjwhfR528iMbU+ZPTjTtS8sEA0L9tbNuK17dXJLQigdCQbp48O/rqCcZTQjE+qpFIVR27sAAAFOSURBVDjL1VRZdoMwDARj9gQSQggQIPu+tOX+h6tlwNhEL/lt52/Gg55GltH+CTa+Z1mev3nneVph3SIsnhqOLTVrCSbdYq71oh4gXL+6xgY/0p2L614cnRNjPHQFJteXpKFkyb8yA9VF9qCeZ70yO4OyJ4otA42qn1LQMlnxQRkNGxmB6ktCyrjzGstR5SlEDJD0EDgS1GLsqCE4sgNLsAljJWYr2MFEMJuxO2a7swNbMBgtwWwERiwYdKph2EE2pVr8uRr09sBsU+hNHreBVvOUpHM3D9DeTnxunxCIW3gLB4KmlRLqNsU2BJD1yx4far1E9o1Dd7t9XQG9zqXtzbmhNX7dGvXHAHbwYvUtrCZdxbwtZ3CWnEbU/Q77l1XZra99ZRFwBYuI32vRFKjEkBPZlIhXT66seLrrh0JtUYkS+W5pCel6PLo/0h/BL2jWPviG/2l0AAAAAElFTkSuQmCC",
    EA = "/assets/png/success-914c7de9.png",
    DA = "/assets/png/successfullyReceived-66c9b6a9.png",
    IA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMkSURBVHgB7VhdbtpAEJ5dpwiiPNAT1D1ByAlKbuA8BaxIgROkNyA5QZMTQF8gb6EngJwgcAP3BjxU4q/e7TfGKKjYZvkLfuCTLJB3Z/z5m/Xs7BAdcUS6IWhL6FLJnkpZJK3PNZENh/ngPtEA/z0Sou8r1c09P3u0BTYiqh0n//f09E5rXQShookNHtQD6adNSa9NdOK6dyB3DwXzMw+ClWsrrfsa/0kpj29LIfKBwkJ8I36Z+XyojHsPmWaz8b/vIaIjpXyDAA/ZVutxI6LsxBKiPlcQhl0fDqFO19C+AvvbhQh4eLnLRXWnpVJRCdFh35lW63LRXpo85I/rFqBQJ3xI8AB2ZEqSgbkNtoFtlX3gstknIlQwsV9JlJX8RNRhxwhzOzMcXqxDMIowvyj7Yp8IsxHZE1oNm9eXIvqZazYrtAOE4b4alssNKHULsi8Q5DLJZqWirB5U/JxrtSq0YwQ+Q2V5/SfNNVGURLs9oD0hk8lUJ+Nxgde/lnKA6EXOM/qY9gnRaAzCDwwJWjtx8w5OlMHLi1NS0pxUEGVwTk4aTw3RIOXxzhaD1BANoPWvuKFUEdVcuMQgXUQTQr+URyfl8g+8mcNb5T7zZyQZVF4oSiLHohTlfdcenZ0ZFQu7xEk2y6H3sF33l8bijCylbPpgcPLHz9eosdg1qt4L3VQglihqxXNKEWKJ6oR99xBISk/54c1NkVKCxDxq+X6NUoJEolwjpkXVeKKzypuk79f5HE8HRnx6kvIprBHtSS5XpwMjMfT++9HWwUlx52SnrlvjhobJ3ESifFqcCnHFdSLSVWVcLvNp0aYtwUtp7Lov2FTu8R1UTGxWVk9nzWZvSsRHWQ+XEzYNKrQhpvg4sZTewvORB99VEzujMo/JBk2DsMMBdeuostYiHBCEjfL9oJnB6599sm8T+6WaanR9/V1YVk0pdRHVdeMeElTl/GrPPAg+4nZx1H3lMk1bVlAaahQ1KNnyctaOdBabalFNsLWJmiBcp0VLSm49GpWDYVPtNTsaPW5S527dyJ2TRiuxgOuLCJXTM+V+47dHO2jkHnFE2vEPNOZ8InMlqBAAAAAASUVORK5CYII=",
    SA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI4SURBVHgB7dzRURNRFIfxczMWQglJBziEMfJkB2IFaAVCBUoFYAc+CWgy0kFCB1SS473ROPh2zuof3Oz3m4HwsJsMHyebkNysGQAAAACgX4ol3Szu3rv5sbntZfYz93ezw8nHyKZXi+Vx8XJhCV78zcuDyWVk2y+L5duRlw+Ws6q3cR69ja1RZuPr+eq7u5+m4+6GcfujtwaZncIT/Huqit37uk7L4eTWBuRmvnzlpU59Ha46ZGf19z+N7Bee4Br3pF2u6119aHGbF9PJ5zZY7edSyuvofplDxLh9O6o3ZAP1YLD2ovukjsHII7AYgcUILEZgMQKLEViMwGIEFiOwGIHFnoW3rC/yGOiAv/B1fnfSvqxH4oeI/8DafPuW07n1BA9yYgQWI7AYgcUILEZgMQKLhQO3hSftywYu2yH8j8aDtWKXNmDZDhwixAgsRmAxAos9+qtpHRc//+F6vnLrIrEI/F9hgsUefYKPDjYT1GmKtpM7m47TH314KkywGIHFCCxGYLHwg1z7HJphtzu0ZxGdnwM/EQ4RYgQWI7AYgcUILEZgMQKL9Wp1JYuf0V0fFz8rZDuEDxF9XPyskO3Ag5wYgcUILEZgMQKLEViMwGIEFiOwGIHFCCwWD1zsvl1cfVvu20C1M7C2y2K2iu4TDuxr/7S58lG52N7QkLTB2pzetloXD7/glVoG+uvkxPvWRf/PgL11O5uOn0c3Th2DN1f8812F8F1kZ7QTU7ufZeICAAAAAProB0QQyfTA95UHAAAAAElFTkSuQmCC",
    LA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFWSURBVHgB7ZhRToNAEEBn0VQ/+OgR8AZ4BE8gn4X2Q09iPAHeQL/gtz2JHsEj9A+FsOMuCQTbgu0yrCGdl5BsdrKTl8nuZAIAw5wZRRQ95ctlDMQIICSPoldEfKgSC/E2S5JHIIJMtC3ZJCeUdYCARlKIbbOp1npPx4CAwaJtyQLgrt6v1oSyg0R3Jd0k+ahjek0payzaJzmGrJHoMZLUsieL5mEYHytJKWtSUf8UyZpfsjqHDTAI5l2x7zBE/fWd7TvfxSUYINbrLRhiepak4duARamZjOjeY6r6JEAwy7LbIY/GhGyx8BzHeVe99vk6TV/asUMV1T3O+3JdO72uhaqaB4hzJXW/G+M7Sg2LUsOi1BgNJX/wCSNALnqVpjcwAnxHqWFRaqbfni7K0i9WK7BJiegLKQ/GOkXVTBpjWYJN+n4t7olKKTdqeIX/RNV0AwwzMX4AcHnD990jZh4AAAAASUVORK5CYII=",
    GA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAjCAMAAADlnnmAAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMA3yBggO/PMBCgj79QQG+vkLfRazwAAAC8SURBVDjLtdJLEoJADARQkjAfBlBz/8tqgdqFBkgW9BJeU9PFdFdmznrngL/pK6PfN13i5XVcPTk9k66ZnHPT24t3bsy3mOf88b1zbsxPKeZ7DfnaYp6z6asU2xeC/1nV2PCS7PMsnyE5mKuPzQtdQ7ydO8AP3Sbj9zkbc+GNP0mCufseDZxLEnzevS04V69Irt1Jg2Q49Wgg8JEGwf+lJMOzJdHwejS8Hg2fR2anR8Tt0YB3NuADjVSOxBNajhv3t2tsGwAAAABJRU5ErkJggg==",
    kA = "/assets/png/warn-da9b2db2.png",
    UA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAnCAYAAAB9qAq4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHkSURBVHgB7ZiBcYIwFIYfTsAI2aBuUDpBHYFOYDuBOkHbCbQTqBOoE9QNcIOywet7ENoUAk3I4447/e7eCVF+fpNo/hABgYhTeonBkSiKjuAJ3SOhl0eqGZXSzTnVmeqD6ki6F9uFKfrzRbWmUvC/sZhq66CZsRebwBL7k3WZ5Pf0Z3xYSBqsTMZC5homJxCOonq2tC/gd675wp2W8IGEQWZunmA57CmEUfSilMEY/87FFMJJeOpIGaxzDzLMhjKoQAY1lEExhjKYgwz5UAZPIMOZDUp9W5MdhHPhNZ8NnkEYHSaOEMbq5wjLxT8UZarzSoD9ySqdag4+gTC6F1/AnwvVQ6MVw0ODst2N2mfoHhoO2BXhsMyGrmImPEXiDl1ONpsO7QPasiARtQhywlbgnrLtadiunWhdriJRu157ow+NIdZzKaW6A3dONEwbQ4OnyNzjeh7qfedmDMvNzSv2Rxlan9iPLbb9igNEbQYz7E9mak20IMfrKYwDRbWuTiba7RLGBS+TCR9wD46l5+rwE4hRGyz+Ra428otxMxjKVRnMW46DkDLImc40tQchpAy+1843INSLEgZ3ZtRidEJegQChBvnht3VHSCbfQMIk+j+q5Q3SoVrMHfV5w+QT5/gexVr8Da0NleU3SpLlAAAAAElFTkSuQmCC",
    MA = "/assets/png/bigaward-a6efd2ac.png",
    TA = "/assets/png/chess-11735038.png",
    QA = "/assets/png/clicksTopList-dfac71d9.png",
    VA = "/assets/png/fish-57b49990.png",
    OA = "/assets/png/flash-be6ad48f.png",
    PA = "/assets/png/loteria-0ccd41c5.png",
    FA = "/assets/png/no1-5c6f8e80.png",
    xA = "/assets/png/no2-1683c744.png",
    NA = "/assets/png/no3-95e1b4d0.png",
    HA = "/assets/png/platformList-5db5d715.png",
    YA = "/assets/png/profit-56d94e8f.png",
    WA = "/assets/png/slot-3fcac344.png",
    JA = "/assets/png/sport-f0fdc902.png",
    KA = "/assets/png/video-0216ce19.png",
    XA = "/assets/png/winning-6264c04c.png",
    jA = "/assets/png/tab-97a30bc0.png",
    zA = "/assets/png/tabActive-796a5254.png",
    ZA = "/assets/png/BetSoft-80415603.png",
    qA = "/assets/png/EVO_Electronic-cd87d534.png",
    $A = "/assets/png/EVO_Play-ab84e706.png",
    ei = "/assets/png/Hacksaw-08e9f33c.png",
    ti = "/assets/png/JOKER-dbc6795a.png",
    si = "/assets/png/PP-c781eae5.png",
    ni = "/assets/png/SEXY_Video-0c0c6661.png",
    ai = "/assets/png/SaBa-4ce9ad72.png",
    oi = "/assets/png/WM_Video-ec09d1ea.png",
    Ai = "/assets/png/Wickets9-5427115a.png",
    ii = "/assets/png/YGG-58ec9d10.png",
    li = "/assets/svg/arr-left-bfe1fd7a.svg",
    ri = "/assets/svg/arr-right-2572fbc2.svg",
    ci = "/assets/png/fail-2d46961d.png",
    gi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJQSURBVHgB7ZqxTsMwEIZ/tykDrDATngAkmCGMbEjMDGxsIDYkEGGBnYkBiWdgYwOxIiRYYCR753ah1JxTp0pcp00qJ3FRPukUORcr98uWz84FmHFYloc45x5dtsjWpLmRr//ygt7tLaalsbkJ5/AwagbS3skeGGPPk/o745wy8AsyD+XgSvPIjun9AV0PxglppDmoswj8CeUFr8MVMchYtGgFyA4+7MFPEzEiQE4bH/bhy9gS6EbgHvYyMgoJAVKhC3vx1FFQR2AX9pOIURWwCvtJxKgKcGE/brzx7wTMHLWASbDFRRRJoQKae3to3dzAOTkBFhZQBIUJEMELC1+ysYHW2VkhIgoR0KT9fRR8BFteRuvqClhagkmMCwiDp0OKDkbBhyNhUIQ5ATQ9WtfXqcFHmBaROFLSRoljCsSxUkwRYVnh7Tb42xvY+nooKg90QhvGbURA2cQF1ImsamoBVTPzAhyUxO/jI/jra+bnGzs74RZkEqUso2LN/zk6ytUH8/OYu7vTukpfRtk0m7iMfUpLZCJb9z8/Mz/fpCmUltnrTGwTtYCqqRMZ73bBaYXhnQ5MIkpPWc4JqoAAOb/O9U5Pw0RlGk5LrnN+rnMF8UZjnDPTi2gEiqD/9ZXmCuINVcAHcqJ+fTACZeHm/n6aNxGjmsg8DAp7NrMdr1qO1IlJRNWVyXEEFPxK/IZuGb2EvRyoN0YEyOGxUcRllsr9EJpKoqxpCz6mgTqKquA3r44nrqkNx8nzs4eoDooCm4viSlEBBj96iKXyOdeUmVX+AJlNvtL0wqD2AAAAAElFTkSuQmCC",
    di = "/assets/png/oddBg-80cbe063.png",
    pi = "/assets/png/odds-7ec4c7ff.png",
    _i = "/assets/png/success-6974caeb.png",
    ui = "/assets/png/kj_di-62f84671.png",
    vi = "/assets/png/tz_di_g-e3650b39.png",
    mi = "/assets/png/tz_di_l-c4de2e10.png",
    hi = "/assets/png/greenBall-3ebb89c5.png",
    wi = "/assets/png/kj_di-bf30667f.png",
    bi = "/assets/png/missningBg-a6a726bb.png",
    Ci = "/assets/png/n1-b2457717.png",
    yi = "/assets/png/n2-904d2efc.png",
    fi = "/assets/png/n3-8c89bd1d.png",
    Bi = "/assets/png/n4-2b1c8a75.png",
    Ri = "/assets/png/n5-daa22115.png",
    Ei = "/assets/png/n6-1aa82148.png",
    Di = "/assets/png/n7-039e2d7d.png",
    Ii = "/assets/png/num1-0af353c9.png",
    Si = "/assets/png/num2-b9fff38e.png",
    Li = "/assets/png/num3-5888ce86.png",
    Gi = "/assets/png/num4-9bc219c5.png",
    ki = "/assets/png/num5-131cfe71.png",
    Ui = "/assets/png/num6-582c11e3.png",
    Mi = "/assets/png/redBall-50155adf.png",
    Ti = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAjCAMAAADL21gSAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAfyDf70C/EG+Pz59gcFBPMK8DE0pVAAAAwUlEQVQ4y4WSWQ7DMAhEbYOXpNnK/Q/bJaJ1AsnMp/XkJ2CCyTwEmCSSINREIoSKSMG2dyqApg/UsA36knxTkQ37yg4VYFMfsllfjl1IIepflzAKzBgWQgwvIaRyz5S9FFGcmBG2SyXlbj8Pn3nWY2nZItzMso1ydGpcT3+Re5oTxB6Tz7rsQGbAwYHIDAdt6vNtHGe+9JEu578yvrANtT959mz8e53I85E2R69UrC/b8kfja0Kbc/L1+LJW5+TKvAB/bSBMYNbj4AAAAABJRU5ErkJggg==",
    Qi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAMAAABMOI/cAAAAOVBMVEUAAAD/j4v/jor/jor/jov/j4f/jor/f3//jon/j4r/h4f/j3//jYn/jon/jYr/jYn/jIb/jov/joo7JEFDAAAAEnRSTlMAf9/vXyA/EL+fIBBvz5+PUE9KnGCKAAAAeUlEQVQoz3XRSRKAIAxE0ZAIqDhy/8M6lGUv0vlLX1UiINJKE1bWrgOD1O/0ZPA2ZQ9fqQXwrwKAMgWsAiBLHLAKgMbsAKsAbh6HbhFoABaM2iv/3cIPeARXUoXBNuMS3XAH5h4KwwmM33C0PJ/XIq5Zuy3CqqUK6QKbLRhz3froGQAAAABJRU5ErkJggg==",
    Vi = "/assets/png/WalletBg-eedd378a.png",
    Oi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD2SURBVHgB7dThDYIwEAXghxPoBm7gCo7gBrqJbqAbwAaOgE4CG8AG5xEb4x+QXivF+L6E9Be5d831ACIiIiIi+lcZAonIVo+Nfkv4u2dZdkMqGr6QcGekoIVPEs8RRuYR0qKVHmvE0eoorWBgakDDd/PeIK6VNtHC0wIGrpB3sQG1JXzH1IBzQTwFptaNkX6NhKvcSE5PCx8k3B4paYBS7CqkpiG2YrfGHGiQXPzlmIvuJsXvQTexbj9kjb7oDq/ht1Yv7p/5kOdarUbcfvqH20fD7UY0kHZtfiLDa7XE3En/g472cL/ONXF9C17+THgiIiIims4DgE/PN6bHlxEAAAAASUVORK5CYII=",
    Pi = "/assets/png/bg1-c7e3c3ac.png",
    Fi = "/assets/png/bg2-6bb5d543.png",
    xi = "/assets/png/bg3-90fd24c7.png",
    Ni = "/assets/png/bg4-200f47b7.png",
    Hi = "/assets/png/bg5-71cd6b43.png",
    Yi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAX98f72+fEL8/fzCAz6+PUNCGCFwAAAHwSURBVEjHtZdZgoMgDEBr2AKK2vtfdiYFzchaaoefUpLXrEb6+IdlrNIenr8LcHXWDJAK5fO6cBJvoVYTmS/dxwWy+iBulsMqaDULClVYpeHAl5ZZH3SkE4lARR6qxqdgFm1RGHCpyuwSfnunfQNf6uxmGlFppkusatdCMZ0dy7lXyfmVlinxSDLbp+U1569cENunSdObNGCOtx+34++CvutYa5iKDEu2q+Oaewc4HwlLSOhh0kE2zARnM2efEPY77e1fw6yU0vkxxijZcJXODy2FYE4JFBQbR/IsDtIuV239nDtSZkgiEkOdQMTht41e53QjCRDz7Th1KV1Pv46hruGzSFdLp6JF5IrnNLP54+Gj++JRoSvsQ8REkbjYzDX2LBHDVXoqCr8FmwG3Gb6bME/Ta7RUNja3/rRJVvr8tD3d3QfDyA8eybNESC6MDQMKFc+dHBhDPKAPv22drQQiOHU4MnrhT4EsCXY+rw59mRo+Ugahv2WBTQa0OA3z23kLOiBz9irRybh1N16xD+PHXu5w81qRZ3Pus8UA3ftXKZcLXPdmazZmyzRMNXYHZvOlZAO3+BIWu4B7h3AlEsFxD/csKLnOl3VLikbMfFmXzpQxvtlWF7LZQVxq26IYnzAlUZmRP2VuRSAOvFaWyG+vHySHO/nzpJ72AAAAAElFTkSuQmCC",
    Wi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAG1BMVEUAAAD/cHL/cXP/cXL/cHD/cHD/cXH/cXH/cXKHG6ONAAAACHRSTlMAf2/fIBC/z4tSxnwAAABeSURBVBjTY0AHQYJgoAJis1h0gEFzAJDD1A6RqVAAchgbIaolBIA6xNrAOkAchA4gh6kDChSAHEYYR4BOnMQKBQSno9kBSUaVAcEBegDJoUAOqwVcBxA4QTytih5MAHWJUsGFmjujAAAAAElFTkSuQmCC",
    Ji = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAASFBMVEX6WloAAAD5WVn6WVn7WVn/WVn6Wlr8W1v6WFj/WVn6W1v7WVn9W1v5WFj/VVX6WVn5Wlr4Wlr8XV33WFj5Wlr5WVn1WFj5WVkDM/vyAAAAF3RSTlNmALKfQAxMX1ImWTkygAaPf28sIO/vGs8Gg/oAAADoSURBVEjH1dbRjgIhDEDRdkvLDDOrq672///URI0DFugYfdD7fhIghAL4ZB8OeJYE94YN4vC/bQMWKJsQSZVaYIzwULgApToYARpAqQY4toFSBQToACUDGDpgEQuYHKD0AMQDui1BrIEBcaf3fgsA1TZ40Ez4YEb8y4ULIhfi2APL/Tvs6NZggRWMeT6AtGcH2CRcm9gBVhrg9RZAP1nkA9Iieg28viTbdwJqbdg/VuqCtAbEDIizJHNbZ1jRlIHTGsAZQAG3YJ77fpHNQOk39kaWLY6VoRigmXB97O4lgSnJzN/zdVjVGetuE8QMTcuRAAAAAElFTkSuQmCC",
    Ki = "/assets/png/fail-2d46961d.png",
    Xi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzBAMAAADIjy0ZAAAAMFBMVEUAAAD/cXH/cHD/cHD/cXL/cHH/cHH/cXL/cXH/cXP/cHD/cXH/cXP/cXH/cnL/cXKE7Iw/AAAAD3RSTlMA3yAQn79f75BvMD/Pz68n36Y/AAAAhElEQVQ4y+3LIRKCUBRG4SvjDkwmiUaSYzOYHekWd+ASWIJmk+7AnbgWGCBymMcMAeb+kfZO/ebY0OFSMC8fZB9g3j3IEacySLLzqA30BZp3ZtPGqU7NawXlx9yecPYlgc781rARdIJU0IPaRFcqRX9yRQUvRfDTlGmySJEiLUVbSTcpPfgItYvzQsIJAAAAAElFTkSuQmCC",
    ji = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoBAMAAAAMH8foAAAAD1BMVEUAAAD/cHL/cXP/cHH/cXJ5nib9AAAABHRSTlMAQL+/+4r3MAAAAC1JREFUGNNjAAFGFyBwBjOZQExHMFMExDQAM1VATIGhphTBRChAaEMybAgqBgAMYjR3jBImUQAAAABJRU5ErkJggg==",
    zi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAoBAMAAACLAuyrAAAAD1BMVEUAAAD/cHL/cXP/cHH/cXJ5nib9AAAABHRSTlMAQL+/+4r3MAAAAJZJREFUSMet10ERwzAMRNFUCHooBAEQhY7CH1Mmh00IPAH4M/6WpfVx1+ck9T1SZYDzAH8G+H+AbYAbXhQyiaWA8yq0ElsBFyuMxHLAiUIrsR1wo5BKLAmcKJQSWwI3CqHEssCJQiexLXA5kB+ZXwpvG93Y/Onx4cDHlx6wfAXwJcXXqF70PIrwsMTjnA+cPhL70M6/FRfw4xxkSHeoPgAAAABJRU5ErkJggg==",
    Zi = "/assets/png/notwinning-7e54c381.png",
    qi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAr4AAAA8BAMAAAByTqS8AAAAD1BMVEUAAAD/cXH/cXP/cHD/cXLrmyVbAAAABHRSTlMAz28g8GvgRwAAAMxJREFUeNrt1jEBwEAIwEAkIAEJWADqX1PHV5AtJyFT4hNo7Ita+6LOvqi0L6rsi2r7kibsS1r7os6+qLQvquyLavuSJuxLWvuizr6otC+q7Itq+5Im7Eta+6LOvqi0L6rsi2r7kibsS1r7os6+qLQvquyLavuSJuxLWvuizr6otC+q7Itq+5Im7Eta+6LOvqi0L6rsi2r7kibsS1r7os6+qLQvquyLavuSJuxLWvuizr6otC+q7Itq+5Im7Eta+6LOvqi0L6rsi3r78AMQQo8geT/5zwAAAABJRU5ErkJggg==",
    $i = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzBAMAAADIjy0ZAAAAMFBMVEUAAAD/cXH/cHD/cHD/cXL/cXP/cHH/cXL/cXP/cHD/cXH/cnL/cHT/cnL/cHL/cXKOCLU4AAAAD3RSTlMA3xAgn79f728wz48/r49nIDyvAAAAg0lEQVQ4y2OI/48OqtwUGMDg/H9M8MUALMX4Hwv4DdbH8R8bEGbABnRagVIfJzBgBSZwbZjAEKhNAbsU0/3//zfg0Mby//9nHFJM8v//MeAA8/9/V8BtYgIOKeb//x1wSAFDfQEuqf7/Bbjd8QGXlD5uKf5RqVGpUSmaSbHJw6Uw5QIA7nW2ncl6ReYAAAAASUVORK5CYII=",
    el = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoBAMAAAAMH8foAAAAD1BMVEUAAAD/cHL/cXP/cHH/cXJ5nib9AAAABHRSTlMAQL+/+4r3MAAAAC5JREFUGNNjUHEBAgEGEBABMQ3ATCYQ0xHMZAQxncHMoagYzkQoQGhDGDbUlAIADGI0dxvWkPsAAAAASUVORK5CYII=",
    tl = "/assets/png/success-6974caeb.png",
    sl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMASURBVHgB7Zc9bNNAFMf/7xoIQhQqhb1h6cRQxARLoTMIJjpSFpYuSSt1TbswVLRkqlhAZUKoCwMzHxMLqEhMsBAhpEqolVJSBaXEfjyfg4gdx77LRzvUP8nx+fxy9793796dgZSUlOMFmRhxoTAmN+/KB/5cLr/V7xcXR3GQOQNbfjX36elKzcQ0gzhxRAUp3hJJkxEmFbku6NKBcxlwJmDLWa+fBUCpXTSdbZzKfKaVaOEK0SInQeqbCCx1ETlYXDcHRRfhODek73yUSYdQbUjqDfypPlwcjIJGpnQohej0qFLixSMQ+Q9GFs3mVLhaRRjO4qhhynGpdLK9KiBUAvsazBlrZQNvFnIYJJ5Xd3YC0x/yKOdhjmQFtSWDu68Xw8DJBtoMT/047MjL4IYgUhhR3ade8mYVQ4VPW9hm25+CCZ+dZ6Ld34WIb4vyPAaGOyOOmJbCqsTgV1gSECpboufR5dZjkefnS9LoEvpFUU5W8rT/wDelp1VYouJe0trasggto2ckfgkTYL7TVjkhvU7reotQyCSbuOJhVYAtxA/kN+flmg6YZ3wbfb2Ai9dJzakkg1Y4VGALs6EdjLyaKNSnl2wgcci8m2DzXoS+ggGJQv3TDPdwgqLd2EVDtCUiN2BIskeJZtErRN2nlfk8LIgVysXikn8m7RHu2LXqbWWrHS2w6v1T/chd6UDOpPoU1d9xj6iuV70Xq6Q2/DtdAbtXWwbGTYXSk5LdiMsW/4/H34GK0m7dz1IEf/FQYjoKExRKdC4y7/UF1c3q4gnGKPMe7KjKlP7EMHA48JEXWkzuJ5hTlVi7RI8ePgG52xg0J9w4oXoHMk3uVdm1KrrEyujb3AZpOzB4FXopIsnGq8OB3C/hqoiPO+cezL06eAgNNBofw9UdQvV0sitiuYLDxhP523lH6+v74VeRO5OIfSkZ4LoIXpL78ENBH16cD/jx/Tk9bsV9WBMM4YWFcbgq/7/iz54MSA+C5+bkgExZ2FKv11CrNWhz8wApKSkpAf4C5BP5hhN/VpgAAAAASUVORK5CYII=",
    nl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAPFBMVEUAAAD/aWn/cHD/aGj/aWn/aWn+aGj+Z2f+aWn9aGj/aGj/aGj/amr/aGj/cXL/a2v/cXL/cHD+aGj/cXLlHFRuAAAAEnRSTlMAPxDfj3+/78+QX78wIO8f3yCab4IVAAAAx0lEQVQoz62SSQ7DMAhFGT3EdtM6979rpabxXKmLsDHwBALz4S5DDZyzDRJXMFjFHYBQOOAAyXOT2thTS5OTLiZxqYmcXnXb11FHBXu5vJwvT3yZimnGVIYJG8wY0JxvZFhhsGe5yBqrnr2xw2N3S2uc+EzBGkP+B/O+xmQ/j/k5Wl1g/PO6MFpYGkcYur8ez1gamekkehxaTzIdD49HrEee5UC0kAMk56mXnktdLNyshCw0CtmwIAEkVGsQZotibM5sFOEmewPAUQXQHORhdwAAAABJRU5ErkJggg==",
    al = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAeFBMVEUAAAD/oKD/oKD/oaH/n5//n5//oKD/oaH/n5//n5//oKD/n5//oKD/n5/+i4v/n5/+iIj/n5//oaH/n5//n5//oaH/n5/5WVn9hYX6a2v7c3P////8i4v7eXn6YmL5XV3+lpb+j4/+9fX+6ur+m5v8trb7f3/6Zmaz6OagAAAAFnRSTlMA359fIBBvP++vjzC/f9/Pv49/YFBPchRNZwAAANhJREFUSMft1bkSgjAUheEEw467XoQQdvX931CLFBdDSFJYMMNfn2+YYQlkyz7/mnjaLqmyv0WwmMem+wBMUR/vWQTGzhgkYBG+RGYDdgjQtYCxEiXq5AVsCYyiySc9AGiqB20tdxgAxUDdqwBCHSjzebDTgCp3AfgCtSWQu6rnTzsgNwPn/OUC+i+orIB8ZsD5kFuBQo6EqP90W+HtCrrG7dXAAoPI1wJoixkQLH5AnShwhywOydoOgZ/urkclQyAEczHB7cEUZcRJUOUfxLwj1RYHPtly6gOS6nMolZZu1QAAAABJRU5ErkJggg==",
    ol = "/assets/png/warning2-9b67d247.png",
    Al = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD4SURBVHgB7dY9DoJAEAXgt8aEVuMFtLGzsfNCegA7G63sjDWn0wsYqUys1iHGAiMLCvuH70smG7IJ7MDyACDyS2u9lbrq9uXnPMKm/ALavp1pDQoN5HdJhgHsypRSw7LJpg1oOCANlK6zh8ixAd/6sCU9FI9X6+/ma+IW8i36Bvgd8I0xWooxWg8b8I0x6htj9GctxWhlA7LN5zLMpJK3qTsCYGxAFr/Ac/GfJAhA1TswReCMMSpPYAmzFA4wRkMWfYz+3RPYS42kLlIbBKDbf6OMUQfYgG+db6Dql/kG+zLTZOHtltQ5yTBG2M4SSpPXQfRbiIgi9wD8lPxYVp+kYgAAAABJRU5ErkJggg==",
    il = "/assets/png/00-0f1bc9bc.png",
    ll = "/assets/png/01-92c6a35d.png",
    rl = "/assets/png/02-36360534.png",
    cl = "/assets/png/03-fef35c52.png",
    gl = "/assets/png/04-da1b00f7.png",
    dl = "/assets/png/05-98a67f2e.png",
    pl = "/assets/png/06-ee3b4fe5.png",
    _l = "/assets/png/07-aed4cb8e.png",
    ul = "/assets/png/08-0161cc8a.png",
    vl = "/assets/png/09-77398564.png",
    ml = "/assets/png/PreSaleBg-d87c1838.png",
    hl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAPFBMVEUAAAD////////////////////////////////////////////////////////////////////////////YSWgTAAAAE3RSTlMA3yAQQO9ggL+QcM+gnzCvULBviYFniAAAA0RJREFUaN61Wt16rCAM5F9AEc/Z93/X9lu0021ZYzDNrTpjJiFCorpm1uVUZ+0fn+Z1rCk7q6TMhqIfHZtLMALoOT5OLN7kcPFBWt3GX14/LpkOQ/j//QtImYIz9kls3DbV+SaF03hcJ2d7iZX0MIWpX0/6yZzcl8BRGOEOX+pER7pa2U7YdAUeZpbj/mQv3a+vwuOReDhxQabV79qz0jvonWEl7zyWT99bWqdAJP/++lmxLe+uZwKfkpIOXib1mQcrsZkJldZ2fbHD1WsPxHrq4qJuWGPwpksP/NsMuidCYuvvNvP7NVscUifA1/MHUH59J0ToB8Cz8D8tdkLpu0iFSuG+FHNvxbVS0BOosBdV6l1sBfy1VGoEgIO/9L3zT7TfDoR7+LANen93IN7Fh8VnnO0PB4wYvnJwAQ4UIXy4oF8lM1L4cMF9T6t/MvhwAVE1YOPlP+2CRYg1C39SpHmEOeKV5PDV9NQIChlJfMBaKCSJj9wPRx1N4vgqHYtrRg5J4iu3K2ObVtL4AHbtu0HYysNHEJzKV5bx6oHP22DkFotJGB8rIbVCtMnhw0LTJjal5PH36LZQGGF8rGXdipIVxkeeevV8mki2IXzVoCkCB/w/JTB/RmBxqBojIIOcwDAUZDpNFzCMpCmqtTiDax/Nil2pMMPWSgWKnSgDil3GtlGWoWmTjy+bPMMe3aufzInLAGDdiKQZ8C1eWixEGbBtwcZLmgEbr6aVkWYwgI1YCYIMCQeE3IqSJAMUQj45WQYHhXDcYTBQ3UUcy8DmWAx+vRDijTqHjzMU5D76I06OwfxoTVgPF7gM9DkcLmx3GIjeikb34h4DDiu6k7ZViTAUOACrzJZabgzxbX+6EK080gJ6dj0kbfoPaMtjSO9Oi0GgMbvNemI0ZpXV0G7cyokQxoPhJr45be+X8fZ+aQgrNaAwg/gzOcbJQiMWksHn8eEq8WjAZJJltmLMRbc9+OPVzaM4XR81GvbgXBvesLQY3lw+WcZksll11+F9YE0mMQ4/G1hPmMtXXloE7sgdrnIoYHOdNvw0EKaCq1g3YxS06TxcvbZKw0en7pgJ8RQdL3+HY5m7ypTAQqd//4nH7z8z4/efD2dnf+KkWYbKAAAAAElFTkSuQmCC",
    wl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAk1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ROyVeAAAAMHRSTlMABPpvqpVa3mrtmeVjK75WJ+CAEPKhSUZEHxXJYF1R6ddBuYQNzaaciTXz0LKUNjRiuc4XAAACUElEQVRIx43W6XLiMBAE4JZM4vvAHOaKIYQj526//9PtBiMUMhK4f1Aw+CtRaOwRXMmzr20Yax2H268sR6/MHlJeJX2Y3TO7KCQZTqKmWii1qJpocipEu1vqKSXDurouVnVIpk9eVC3Jfakgoso9uazcavXOdAVPspTvzgVfycEI3owG5KssH6kj3EykmfyuJRw3uJPp+LerOX7D3fwZs8aPtNSzXq2g2dpP85gZeiVjPIdJwQN65sDCvC2Zmt5ZLOCKrY9SluceGNJs5FS7d+FRa3PJikN1frM0X3+SDFyK9po9u1basDSlgJ2TynZIyQ3+5/l7VZOHzkk1uFyjhnw+9ccLIJ1UJi+nXlkzh3R+hZzr75chIJ1UNkPmiDiBy/kVJoxwZASn8ypETFBwBrfzKTQsMOQcHudRmDNEzBE8zqMwYgxNBY/zKChqH8OWJPcKbmZ/pOwouw/yR4asPMrrKoZ2A2Qf2v2TG5Aw8igF4+R22+aSCtaJ5soZ+pTPhcztjSOVdPbGQcLao6Szt6l9KEglnX0oYMNHqfzukZvzA/rjMlOMku4yMD+YdaumlwnwaZR0y8sUSJVZdn3uy8Ao6V7P/bhmaUfHAF2ep4Jc1wcsfg6qCL0S/RxUKKmbPmqqWV5tYa8h/Dbmixj5s7sjeMxE/ll6dVtl2iqbmjzs/Gh3IGs40sZMn24c4uIWzsy35LJ1HtWW5HYOX9qQDOv8upjX39UWN6KyzekYGky7Y+g0OB1DN5nCnTTHmFeJjw36RL0FSdEdsYsk+Ota6B/G4VatqZeC9wAAAABJRU5ErkJggg==",
    bl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEXRSTlMAzMGOHxSmpB2KQCOurA4KCV2BVBMAAAB1SURBVCjPrZLbCsNACAWdo2mT9Pr/X1vYTckS9CmZl5UzsIJqFi4G5LM1QhxQN45PNjA53grR892g9sKY/pOohOYubmzcN8FSCRVfweVib16KEz2KIUIxdsgWFfaBZLVhtoJlvF8oib/rE5ZWPrKD6MY59vkBQkICN5LV0FkAAAAASUVORK5CYII=",
    Cl = "/assets/png/diban-d1250942.png",
    yl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAnCAYAAACmE6CaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ9SURBVHgB7ZfNVtNAFMfvzYcS3cAbtMeNGyn1CRQ34EOI+gJy8AWse219A3kB2EFXFV/AeMS18ggsOIcU2lzuDeWr3JRkkrTJOfwXnUw6M7n/zO/OTADuda/chFBhBX9WJf4vDlRQx/6KFHWwYIsIGjZUTEf+ayDApuXADlefyj0LKqRgfxUch9Zth35xtXZxvzImIv4J2gTQHv+v9Dkxxv+S1qbUOaHxr6m0OMXxr6mUJibxr6lUOZGEf02lyYmk/GsqBU5p+Nc0cxNp+dc0s5ww5V/TTHIiC/+apo5TVv41TdVEHvxrmkpOZOSfKIQN7rvGX0Bq36nMxBCsJjjYMzHAFt73w4ed/uDBMs/gb61R4Z+nnAMf+OEdSK/IgLfY/S6V4/1oNl9yyL3xdoXOBOdA29QAIWxcGhAcB1DnFW1La1xITvBDa+jitoYP3ztEhPlJ/cOQPj9udDujsaSoC46Mjdov95ngPWAJXPyhGeDgWjik5wzKQVx/acMGPsn1dQMwYTnO1YTwz+u/z0HWID64/zCkZc2IiQFRbibu4J8syyK58JpdKW4ZMTUgyrw6TeJ/TGwCW96zndaoH0SB2tgLiTZNDci4mUwI/7ZL2xo+cQ+8boT8F1LMY3PvUC4MDETDGJvIsv7LDvyosXuj78jQQuB4ac9UZvtEhvVfhGjB15O/K2uXUYwM9F0vzQxcDZimcQr+k4hspHfuabBJiAsnzlzPcNzkOBnwnygARuujZcObDC8mmYkM/Bcujsu/00TEP8I6lFOC5NtYEznzX4wI/nmLu0/UA+D5+YfEQA3KKT6mR7v+K6ncmokC+SfIRbTHPz/nBsG3i03yDGTpWRofMfPFAAAAAElFTkSuQmCC",
    fl = "/assets/png/icon_sm-868ad46b.png",
    Bl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAstJREFUSEvFlkuIzmEUxn+PkWsouacwxcj9EllYMYmSLBgbwsJlRbml2ChsGBtJJhsjRRZKLiVWsnEp11wKZeESRcgll0dnvN80Zr7/9/3HN3FW39f/vOc5533Oe84j/pPpP+GSC9h2d2AaMBrol5J9A9wHrkv63N4CSgLbngRsARYCAV7MAvQUsEfSzbwJFAW23QOoB9ZA863cAyLw8xR8CBCJjU3/fwINwEZJn8ol0AbY9mDgPDAR+J6C1Ut6UiyY7eoAA1YDnYFbwDxJL0qB/wFsO/i7AowCngILJN0tl318tz0eOA0MBx4CMyVFHxS1ZmDbnYALwOyUdW2pgxnVDwAuApHEJWCOpKCgjbUEXgscBF4B0yU9y1Npax/bw4CrQCSxVtKhTGDb3YDgMPhdKunY34AWztheChwFgudqSV9ax2uq2HYdcAK4E52adT15k0m0xQuIK6+TdDILuBFYBmyTtDsvQCk/29uAnUCjpOVZwNG58R6D22sdBByTLri+J2lcFvB7oFdwLOllBwEPShx/kNQ7C9jpQ1Wl/LZosC7A1/gvqc2gKjTXR6BnVC0pfldstnNVvB8YCiyS9KNi1N8vpTzHHQFUZJAUuvqIpBVFOe5o4NzvOA2RGcBhYKukM5Ukk3tyJeAlwHHgdazEcmstK7F2zeoEHB1+DpibFv4sSW/bU7nt/mkr5d9OCTz28eWkrWKnLpEUi72stdrH4f8I2CDpbLHDWQokOJ6SFEjwvlfS42IBbI8ANgOrkgK5DXwDpib/UDORwIOW50tprl3AOiAEQljM85jjsa+rgNBck4Ex6XtBc20CQgCuBCLGwJTIAWCHpHdN06zUHdquASLQYqBPhm+myrQdM3o7sB6IERqNu11SQ15d3TUpyglA31RxQVffKKcqbY8E9gHzU/I1uYDLdlZOB9u1QY+kPf8UuGxz5SygIrdfRoIKUbuekuMAAAAASUVORK5CYII=",
    Rl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAqFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8j1z1tAAAAN3RSTlMA/AX5Cvbw5+sRLhR8POPKu6WYSUUrGA3SzZB3Ykcy3NW0i4FOQSithWpWJN/BnjcfHMVwXFKq6HdHKQAAAjxJREFUSMfFldd26jAQRUeS5YYLhoALprcECIQAOf//ZxfhJBgsyn3KftHS8jmyZjQa0Z/B+fPaZb4OV0GQzD3feKw28lTgF+u1/UDfHRRKZn7bzFfj3vINBiDIJtvjxPE7oZoOWjf1tU/1fVEKtxcJwOze0ieA7Jx2ELeXW+dknPYBOdHq43fAmhJxPwtNBib70T4matcB2dMZGoDtEu0HrJwlh4wh0Heq+qmAeKFlneGC4EBxAjSqJxsCY/JtXMPG3JUQlVRNgL7hS2gYkQdE14YhkLds6GB5bEFur1IqYdVS6JGtDHi7NCyAhodbhD4wvKiqWR3INRuKgmJcWICony17geMSqLJpFmNq4cj7bwAm9NgGzcvR/+TWxw1eiVxRmv9U4Qv01FUhfuFM856BDTylp+4zhtW8023z75pZ3TeY887LZWmu7xo+P+iat3sGS9MkmtUsTVGgK/ty0tmscnCextADIOxTms/bFABTpbHWGFqqKNwQmNdKq4zGrmMDyY0/LMgIWExXdFDcxOpdTPgxzrTa91JVPSXiTJ3ICGKjekqHKrgmLCWZjVyDO+5uFall+ko6k3Kra8USIzV6wrRNhrR2OrcGJz5ERjqmtvDVuEgZgnGs/maP+XEF1cq0fNStZRFQrZh/qr6aM7mhG/B8fRHW0cfHkAd6nt47zObDZy6L3nghjyQS95H+w1KFyGeHbMBge4+fRq945hiAZOfQY0ZQWGG0a9FTbERRzM8zCYOvNv0XnP6Mf8nXmZOl+SwwAAAAAElFTkSuQmCC",
    El = "/assets/png/missningBg-fdb36cc2.png",
    Dl = "/assets/png/missningLBg-4d241909.png",
    Il = "/assets/jpg/moreBtn-ffccf44d.jpg",
    Sl = "/assets/png/00-0f1bc9bc.png",
    Ll = "/assets/png/01-92c6a35d.png",
    Gl = "/assets/png/02-36360534.png",
    kl = "/assets/png/03-fef35c52.png",
    Ul = "/assets/png/04-da1b00f7.png",
    Ml = "/assets/png/05-98a67f2e.png",
    Tl = "/assets/png/06-ee3b4fe5.png",
    Ql = "/assets/png/07-aed4cb8e.png",
    Vl = "/assets/png/08-0161cc8a.png",
    Ol = "/assets/png/09-77398564.png",
    Pl = "/assets/png/refireshIcon-2a244aac.png",
    Fl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAv2DfkCDvcBCvnzDPgFBAXz1CD60AAACTSURBVDjL5ZNLDsMgDEQHjPkmbbn/ZQskqUzl7CJlkbdAMDxbsDDugd3i64RfMs/Oq6p8pBNJl3ycG+lYIbkzyQkpnUlZSGZURdsWuxOoZ+ZfKgBV8QRVcni3/vZA6aRwsfSs3z1bSluS6DdLeYuSkNaeF4B3ixgofaLDPJym5eOm+2PP1GXJcQpV1HOEzko+4F6+jgwmeQTHRtsAAAAASUVORK5CYII=",
    xl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAjCAMAAADlnnmAAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMA3yBggO/PMBCgj79QQG+vY113yAAAALxJREFUOMu10tsSgjAMBFCS0AsFNP//tTpU3am2kDy4j3CW6Q6d/pk96p0d/qbPrHZf9IiV57V6MnomrdmMc8PLi3Wuzxef5/j2s3Guz2/B52d1+Vx8nmPXZ0l9nwj+a1XhjpfQP8/xGZKTuVqaF1pD3M5d4Jepyfp5zs1c+OGfJMHcsUcD55IAH4e3BeeaFYl5umiQLJceDQTe0yD4n6TQ8dyTaFg9GlaPhs0ju9EjYvZowBsb8I5GSGfiAQHlGnLX3vj7AAAAAElFTkSuQmCC",
    Nl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAk1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ROyVeAAAAMHRSTlMAkBP7xxHF9smTCwdK6Nv4u6IzIRcP8uLPcmNWUisn7N62sqqea146MaaYiod+Qhwnp0x1AAABgUlEQVRIx8WWWZKDIBRFaUiCivOYxMzz3G//q2shg9JiQz66cj4oreKI7+ZWRfQpnLd2347FfLEqmenDNwQEg4PRfraEJ3RsInwHUDPq3NZXC7BVb8/CIMSP64QAzF8CUZ+x4yPiWlh7tWGrEnZ5Lr27MauuoxHUWKqwvoAb/adwZFbDoKe0bdjiWdyYVsISTXNoKpHrdJ0hhJ54SwnvwtqGmDyhAH51v/1l+BnqMMoAChFdLu2fdk2O0YR64v4wqIewMfojq4nnPOJeUahYXBJx252Vm72qG7t7OVT1GRrak/+/0dMYpnNosjJkho3P2Eebap1Y2HDycQBwrQQwNG6UdyZGJYCVGmTFhsAZOiVfU/0cLtw57/ga6bOKHgJZ8TXU/x4+NBloW+IQSRhqe5WCxELbq0QWPKbrFZYFX+5V1hZYLgmh3F0btVlKwlVu+1rVJGhAYlRzpkWsEPqe6o0EmUig+whRQRM28r+OHnYiwMm3yJT9upj79uzNT4bP8wOU32WCrlMYJgAAAABJRU5ErkJggg==",
    Hl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAllBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AJcWoAAAAMXRSTlMA/fr3C9tMM+hkIggE8u3Gt6Kec1tHQTgwKxgT4NGyqohUPCYG4sq8ppiUkoFuaR57zxwlRQAAAU5JREFUSMfF1cdygzAQgOEVondwx73G3dn3f7lIjgNWZmClk/+LmEGfhOAAfCobTBoeZ+lssY51Fy8Zylg2Bp12Of7FAx1QWVjHekD3EKDpToNQgFTdgwZLvxFnmwBbAYoba8TBI4CYe9wdsImfqi4wESCHSYLvpHCjTpABuBYq+as2MhbAEeP9n3DsDrAHUT9R5k+gJU8AP35eZaw+xHkKbY3E/fS1/WDB5Yt1ViFAJ+D1erY3GFXQ2Uau+QD9higKTcHYAAwk2JgC1wC4EvRNQQA6jYoyfoEeaBRwZN8AawmuQDfk8hN7v+ACZPEcZXO7L4dS76yy1RMsaVC8gLVAUU4DB9/LgCqyFDAnQYVKs5gCoQr8iAJTFThAtUsU8AVkuQKuNAjwLcujwdRXn4guYPV87oFOJVP+OnTRyUJZcgPdNst96ly2YJINn+8HUSBVIvQ4zf8AAAAASUVORK5CYII=",
    Yl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAMAAAA5QerMAAABMlBMVEUAAAAEAAIAAAABAAEAAAAAAAAAAAACAAAAAAAAAAAKAAAAAAAAAADxKU/vKU/pKE7bJUqCFS8+CBaqGG7cLYbULZ7hLHfgK3TTLqDvKUnkKV3lK2nYK4DRLZ7rKEjfKFXiK3DYKnfQLqDPKG7fK3PPLJ/gJULjJT/WJUPFJ3LfKmnHIkXLK5vIIT+wHjhBDBiQFCfmK23jLHTgLH7oK2jaLYzcLYfeLYPuKljqK2HWLpjhLHrhLHjkLHHrK17ZLY/sK1vYLZLpK2XoK2XXLpTvKlTxKk/wKlLTLp/ULpv1u9X+/f786fHqe7HhMYD87PP64ez73Of2tc3tksDkS5DdOI/pNGz98vf3yN34ydr4xdbxpcj0rMfwocbwkrbqZ5znV5XlU5XnSYbmRoTmP37jMnmjb+AuAAAAMXRSTlMABwoFDQ8TIBwaFRgW9vDOkzwdCvbx6eno5djOycK9ubi2so6HhYR1b2loaF5dRCsnXYvRgwAAAX1JREFUOMvt0tdSwkAUBmCT7G5IQsfee28QimAHRQy9iL3r+7+CuzGbM5PseO0F5/qb//xbhgYDk1gePTTNXC6bzWROzy8KhevK+EpCJKX5VOrIayuLil8qm8ljkd1WfFKaSgrtjOSjcjrt2Ebdsro33I5I3lhJLnFr3T4+11qulSXvflR07Gv1zTR71TrvgJxY2I/yjn1psb7NLu+LZMWzH5849uuD9n2v1vnZMG8A9Ixa3rdXu2vwexDQA7CfTavh3pmIgn1qf8P9Cugl2PsOvIWIXv3afNHuAFZAQ9yW+u0O2GEBjZS57dceIHdaQNfLrmV9ud1wKbyWPgsW+i7o7mvBHyDxaNhrx5bixP0D0AARI6CqaoTZyZjKJqAZBMF+iMW6oQXUMM2d21MDdDQjSLAd6ovFJKjFaIcojaMsqBOCIBRGsa2+Uw5tUadThjGDNFRgWd/ViV2DxmFEmQxQFLy2TwiFTFEHUGBlZOd5lbgEdQD/shQzOJh/OT9W5m7ME5gU3gAAAABJRU5ErkJggg==",
    Wl = "/assets/png/num0-1e5ab203.png",
    Jl = "/assets/png/num1-4a9297ab.png",
    Kl = "/assets/png/num2-ae2e749f.png",
    Xl = "/assets/png/num3-8eb6e1c9.png",
    jl = "/assets/png/num4-d4dce399.png",
    zl = "/assets/png/num5-8b8e8f90.png",
    Zl = "/assets/png/num6-742c3305.png",
    ql = "/assets/png/num7-103f2644.png",
    $l = "/assets/png/num8-5915a6f0.png",
    er = "/assets/png/num9-7a057db3.png",
    tr = "/assets/png/numA-ce518177.png",
    sr = "/assets/png/numB-bdac701b.png",
    nr = "/assets/png/numC-5873bbc3.png",
    ar = "/assets/png/numD-f9179e60.png",
    or = "/assets/png/numE-0f67fb2b.png",
    Ar = "/assets/png/numF-1d1b549e.png",
    ir = "/assets/png/prize0-3694a66c.png",
    lr = "/assets/png/prize1-89bba3e8.png",
    rr = "/assets/png/prize2-4a014283.png",
    cr = "/assets/png/prize3-5ba27c6d.png",
    gr = "/assets/png/prize4-be39cadf.png",
    dr = "/assets/png/prize5-247bbc48.png",
    pr = "/assets/png/prize6-e8903e09.png",
    _r = "/assets/png/prize7-9cb5005a.png",
    ur = "/assets/png/prize8-1e015ac5.png",
    vr = "/assets/png/prize9-db6f0cbe.png",
    mr = "/assets/png/prizeA-2944baed.png",
    hr = "/assets/png/prizeB-38ceb0e1.png",
    wr = "/assets/png/prizeC-fa81ec2d.png",
    br = "/assets/png/prizeD-a591cf0b.png",
    Cr = "/assets/png/prizeE-8f38472f.png",
    yr = "/assets/png/prizeF-b4969d6a.png",
    fr = "/assets/png/trxbg-4ae5330d.png",
    Br = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIGSURBVHgBtZW/S1tRFMe/57a0phR9pUO3ErCFTsVCW7qUvi6aTvUvKHarWczaoUjp0EKXTMWtpZMuouCggpBsggHFwclgcFNQr4JBM+R4zn1RTGJe3kPfZ7n33R/n3PPO4XwJIXi5Ya9eq44Rky+faYDTjS0L0BoBs2CasRPzlU426ErDXzJpJv4rBn1EgIn+mTp9v8rRrdaF3uzQmFyZlOkzREReOQDikdSrJ6cnpfJyRwe92cFxYvySaQ/io3cyd1/343SlXGxzoC9vGL8WEo0vkRyeR+JyEPzz+qpOwy6v//jvxuffPqELlti80Jzcdp+Gx8HhxpXHDx8hIl5QJHhv3OuZR3DjsK9lbiT7w0iKWjVnGPiIhGCmd0aGASQGp6lvdJAvL2ki53K/4yTUsb23g7c/R3FYPW5aN60HWw/EoS91v21NI9iCa2TdsX8W3OhlhxARKxFQBQlB0nENEReRHLMGd2p5JIVohbH5gopHATeMaoT2IldFolif4VQqnBgVZlWAdOLa9Ulp06pYyDQTdmtpYwXTpSK293fCjmlyv9qJhfkLB4GT8nLqZb/swe90cffooLtxhkjn4oWuNCmaOCmoWMj0DeKrmg1evtgkWm2aHETydErK9wFUayMghgsiMB/Of0vzXgiqFdrOg47rmqLXMFiRoSLtsoiee3mbn+lYIGcDdLyePrURVwAAAABJRU5ErkJggg==",
    Rr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALYSURBVHgB5VZNbtNQEJ55jgoCFu2CouzSE2CTA9Q9QdMTkN6AqgSJVZIVEiWKeoKWE7Q5QdMDFIcT4AVSRLogi1JYxDPM2NTkx3bcqOmmnxQltt+bL89v3vd9AA8NmHegd3ngAphNZnaBsQTApagCDuV3DwF7AMFnZ/1dL0+9ucRKyIx1GWpzQIcGoAsw8p3iez98/q29Co9HNiFWEHEbkH1EbjrPa92FiMOCT6nODBUk2nWK2YXief1WlQ3U0cApXJmms7E3TBpnkie3S/wkOCNixGvj5CVVOMX9Y1wxDgWMWkNrJY2bWbGuVCcwcKf8otZII/AGrSrJd3l9/zhtzEX/oIEGt/Ha2ppe+eyKo9d7nkWqkCY7QvlkjSkXaw2tBc+oPv1sgtjrayNBxfy2GnBHMI+sBhNUolORQswW1mVQakMsAmdtb6jNGZ2MBGLve9vW81kupu/ZwuRRc9rjq46JqRBUZd86sCRwwIdE4M4Qy7l7aSw+hSVBhUcEZnPsOoYNV4VccrcYCn4ktdPEDKt32VTTcIp7fqzvkKJc94H/ewzoe/0PJVgSvJ+i/QDDGWJRVh8KhRIsC39Gtqwu7qFCTBzwubiKC6HtzQcS7hLkh9omEHydIdZ2Z8AT+dnIU8i5pdCoVyMGO/H1+MMvg09neUw8tE2LPDkJQy02L3Wok4nbvX61/nbr5t5EV2PATSZzFIaADJAZVcWeVvV4iGVXMknVZlmCgSxo/P4EsWpqKJsJNjYxif71geQtg3PULrRZ7ky/xZlzHNkYu95lK5Vc/6CY+xr+MhtZr9n70VJSN8lmEzNXuIcmOJH00M3KTamEcV5jF8naiVRrEonKpQNxxdqKchN5F9IckJdUU6nMifKaRJ4EUsX8eKupRAKCCjyiJEekjprJzVsI1S4UHs3c8CbM2NKk8wJi/kA/+GgTmarap2bsqKvDEr5maRUg1YLbJNKHhb8f/2gYvPLTRwAAAABJRU5ErkJggg==",
    Er = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAABeCAYAAAB/7LVmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMhSURBVHgB7dpNUhNBGIfxtydJibscYTyBeIOwAFKu8ADgcILACQgnEDeWO0Zxb3YmYQEX0MoNTHGCLFQsw6TtDh+VQmSffz+/BTXp7JqnMt0940zYznCz4511zVszfCxrjaf75VpvYonbGWy8Nue63iwPH89rDbdbrvXHJiozUdvDdhH+iUc3gUdFNb18Y4krztq5d668CTxqVVN/bMJkI3feWg8Mb1niZn+seGC4VXxp5yZKNvL/aBqSk1rkSBCRQx6RQ1799qI422rOrn51zLtiYee9lE42Bu6x73cG7dI7/9oSU6vcs9kj34d56YZ5ObBl5WwSTtNG4eLDyUa/vB2e/5IXZ+ur1dXld+/vzk6B5XN9XNwKF8fbp5t3x8VZPDetptnnhfNkYPl524t3pniZhQcB8faUGyAmLL06cRkelystS0fyj/S99w/PwcqK4tw0q+nvrRh5bmKK4cvVWWblv9+4Xvw7c/65JeiqbrmvudH98bBLH8d3enymNy/hyXcueYRYWdX5tN4/Dxvpw/gPvB5157WfK/vxnZYwtmoJct4fzOcl868W5yWr3Frcm4V1rORrD257uOlNkHO++3F9eLg4Vpy2W5X51DfZZa3hDhffOpzPi5+/pJWbGBd/6FQjvzEO9+JRiDquN3NLa//xmGTmJUZeN23xFpwb7ktqXnisD3lEDnn1iwsDZHk/s/rXb8r7ToDlChJA5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JAXI58YIMp7N8nMuZEBohpPXC+rV27X+DWHJPd2ctQfZ5P3/XF9lr0IIz0DBDhz47BM2f/xbrAXP/8F5RrRvj9YxagAAAAASUVORK5CYII=",
    Dr = "/assets/png/binguo_tip-5bf2ec89.png",
    Ir = "/assets/png/count_icon-841b89c6.png",
    Sr = "/assets/png/dice_1-3eb8e22b.png",
    Lr = "/assets/png/dice_2-38383685.png",
    Gr = "/assets/png/dice_3-c91e0c1c.png",
    kr = "/assets/png/dice_4-3537b074.png",
    Ur = "/assets/png/dice_5-a11110ab.png",
    Mr = "/assets/png/dice_6-3734f323.png",
    Tr = "/assets/png/hidden_money-4d2f0151.png",
    Qr = "/assets/png/hot_bg-52030c8d.png",
    Vr = "/assets/png/hot_top-db35cb37.png",
    Or = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALuSURBVHgB7ZpNaxNBGMef2ZS0gpqih0jFsFJUPPhysKceXBVqQQ9e/AC5WRH0G9h8B8GejKciemmggiloc7Cn5NDag7UYXPBUsTZFD0kwO32elKXZySa7aWazk5If5GVnd5b/f95nnwXoc5ifi0afTBuWZd1knF3HQ/xw3T53ZfwS3Ju8DYdlvfgN3q98suWY+GUyDVaBsUzpxYecV/4h8BDOa/w5r1nGvlMOwVIvGJ1bYOD/Z7GZKZNxLVmaa21Ea3Xi5OMpEr6MNzIgPHTOrGXS0uoCVwOUgXGYBUUgLa1MNBmgZqOSeBvSNPpo2hDTmwxgs0mDonDGm2rBYYBKH390UBZuiLXgrIH/tQegOhp3aHQY4Ey7BorDOTg0Cn3gYIJSF6dGsRProD5644EGfc7AgBe7//5CkAxBgHxey+OnABfPnccV6y0Yjg6DbAKrAVs8sfnzB8xnM1CpVkA2gRig9b0t3mZrZxteLb6T3qSkGyDxtElxg8TPL2WkmpBmgJpHevFtS/E2sk103Yltwb92fsPWn21feWwT1Lmpf3SDlFHIq9TdIBP5r1+gWwYTWdgMDIRN3xsIdC3UyMTlq3ABh02/FHCE8jPE9sRA7PgJuDMx2VGe+KnTsPnG20BPmlClWoVOKfvM05MaKOMyg9ZIifhZ33kKG2u+rutZH6DZ+jAztheDYTRsBgbCputOPIIbdQozyd6wrxc3fG16RAMmdPh0Lnn/YX2ikk0iPlbf9LhgNh4ITYiZ0CEj0SgEQeLMmGs6EzQ6DDBu+Zs9GhCfPsiA9tcf8yvuJxk4NApNKLIAYD2FDqBtoYytoW8sttB42BQnjs3cDTsy2QZm7r7MOpa0TcMoBrNToCioLSmmRcSEcuG7eezGOPYVCjarA0YpU6W57GsxPeJ2cblQzKlkYl/80qzruXYZKSKIoc10WKEnLMEcBu5S7V418PeyB4U2MTpIATZG4f+ADNEYj/dexRLHoVLLtRN+ZNgD0kIVRvkm2awAAAAASUVORK5CYII=",
    Pr = "/assets/png/lock_money-47931447.png",
    Fr = "/assets/png/record-5001454f.png",
    xr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIoSURBVHgBnVRBdtpADJWmfaXZcQT3BCGrvtJF4ASJ2wPEOQFkV7LBbEh2gRMAJzA+QcimJatwg9IbZFVg0VG/HDsxgwm86L15npGlL80fSUwFEj5E5YMFBWLoWIQqUHmqF6aZIZpDF7e++MMiX3YV3fvo1PyjQQJgaERCM2znyVmozEyn2B6n5h0XeA3wehrdkEVmTP3VR+qFR/4jbZHuNGoaS23Y9gDa2QC8uo/bZG2AbR0Gc9pDrn5FHj63LDT+UfUvngHxI4DyBtGO9gXLg8L3wb6j88vP/jgD/A1++pdVv+cY1/Bpw6GCYGXsJ1gjlzfYheC2sSzRJ6PZqXIDTCnAdbBqKZiKBhjAp523XS2pB+7pAyrDAPmEmCdOxAB8hrRdwjT7p0PdfxRkjuvWDJA9YyV2HM5ot6xlideYYR2+x3UqQHfLo0Y7BDerOKo5lmcKjYW21l8mWuRFesMp8poxJ93xeoZPL74WAImgNdVZxE2/swtQH8HJ7AS6P4Yt3bHhMx0I2U/U2eRVUGs3eliUd6axWaxoqDVU+mubeQM4hPicZ1dTXtN9vfX1e5i3vZ7GjdRnmHRK9ycmjKEBeHhz64H3CwVMXhldMhabcHKbNvzeYOojYvsZBewYJD1pLXXcVsyL8l1aUgOZNYVk1Kp+e6aLC6IG9NIFEwzZGA+X1aWHgIc6M/WQTZi8P9P26wRGGKUgnqRdoTXLwqhRuVsc0LBoAP8HIQz5W1LQdRoAAAAASUVORK5CYII=",
    Nr = "/assets/png/rule_bg-50b5b9c0.png",
    Hr = "/assets/png/rule_dice_1-0f7cd7df.png",
    Yr = "/assets/png/rule_dice_2-aeca7e3d.png",
    Wr = "/assets/png/rule_dice_3-5d32ae31.png",
    Jr = "/assets/png/rule_dice_4-34353cc2.png",
    Kr = "/assets/png/rule_dice_5-58830c67.png",
    Xr = "/assets/png/rule_dice_6-fc323f22.png",
    jr = "/assets/png/rule_tip-5d3f81b0.png",
    zr = "/assets/png/top_1-4e868024.png",
    Zr = "/assets/png/top_2-7d8a7364.png",
    qr = "/assets/png/top_3-d324faac.png",
    $r = "/assets/png/trend1-e90c2f20.png",
    ec = "/assets/png/trend2-db817e06.png",
    tc = "/assets/png/trend3-2a1b1d6f.png",
    sc = "/assets/png/trend_go-7405456e.png",
    nc = "/assets/png/tg_zcjl_sel_di-7f7acdcc.png",
    ac = "/assets/png/BetSoft-791013ca.png",
    oc = "/assets/png/BetSoftActive-a2fb8c94.png",
    Ac = "/assets/png/Hacksaw-d5a9f183.png",
    ic = "/assets/png/HacksawActive-c206e018.png",
    lc = "/assets/png/JOKER-4897aa9d.png",
    rc = "/assets/png/JOKERActive-e3869b94.png",
    cc = "/assets/png/35-e05f12c6.png",
    gc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAsCAYAAAAJpsrIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANfSURBVHgBtVmNldowDBb3OgCdoOkEzQbNBpdOcOkExwbQCY4NYANggqQTHJ3AdALaCVTrRS7GJ/kHct97eiGxLH2WbfmHGUwARKzso7Yyt1J5RSeW42w2+wPvDUtkbqWxsrFyxjwY1m9hajChZQGZGMklR/puUlMQkggu4BZQq6y84vvCYEn0rPITlkXpzE6clJJLjz+r9JxhjIisrXSotBjHiLdWtpjXyKd7SJGDlZU5FADHydNhOpqtVLlOVFqXEhJ8VGxHg5mFFeyjh+sk6UAJ8ptNlIPijMg2Vj5Z+cifz1Z+gZJgKXr28QJjYo62ZKu1gCKp1KFE22MaO9IV6lMPhWNvEzrQUAsGq0xCEsFKIEcpybDNuV9oFEOLzFaWwKDSA1J3SNhkkspJwGfhvU4R08ZWBW+7zwh6LabRKGSrGDEJUrR2gl7PZT3q2LCO0eqXdGOTqbfg8g51NKyzzvEFEeVzZrQINZdTVpcmhPFsaF3eS8R6QXEf6MwVgybQWwk6Txl2CFdJ9gHkrHsM3rXZMziH/L4Oyk9WDk6Hs/+g2PoKAbFKUDpBATELilQjOB7oG45jqONvPxVbnyEglrMgazrOCbXW7Qh+eOXu97OVR/49QIaPD3A7aGE+4eWERDluRYu8fQ6k4JUTabeIH/l3NCAPXoUYJB0XrYaf5MgtXzSu3HhbuXKvu48pHxqxKng/CTpu5j5639wM3FoCB/7tD+oGLsRDXJNFOT8l04VXZoKixisLk65bJepUuihJsL3gQFoN+gjp/wTwOhnvQXB4y5LklqGFUncesfvIdbeaL8IDXGZJiKX/wlvqgV9dbtJONES8U8parut87rXteum2J2eDWHKfUYEG1MPeC7r37l7RI5+1i+0VA9rW2uDtyCOViJpoBMdu3WE5epSHyJqllsjtIuSqSINyCPaYf3xrwgMv5ZhX0A+83+0M2isEqS619gtcH3h/A+8yhDo0q2npCtfNgxaBGJZ4/xUB5bmXiI+9VrFLkDMYu5WJE1piela3MSMrTMMg36ti/Bqqw/z72g4yWtjifRd3pXUbyAXqh9wp0eOtF8U4dq3BaUFRWsC9wDF6UxC86UYyl6S7VzWZZEiPMnuTY38GEwAvybWCS3Km5PoXxsQ8lP5l8w9KoeguCvL40AAAAABJRU5ErkJggg==",
    dc = "/assets/png/SEXY-05174410.png",
    pc = "/assets/png/SEXYActive-a1f08d17.png",
    _c = "/assets/png/Spribe2-2765ea87.png",
    uc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAYAAABznEEcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKnSURBVHgB7ZfdcdswDIAhX96rThBlgjYbyBPUnSDuBHYmsDxB3QmsTNB2ArkT1J3AzARRJ2ABGSwhmpLYu7aX3OG7w1kkAfAPgGQARVEURVEURXlpZO7BWlviz1uUHMVkWVaLMepfcPMapUV5RPmCeoZ1lsJvzr9HHD8IPwX+FN3E3I99lfD5E+UgbcT8OcQ24HRRaWMvOaHkbiIb54kXRjrNgM5GLKZ2vkWfHZi7EDqnAT1L4zNWrlifTuPAz9S/hnFok8sJnYpveQrD4ubeQyKzYBG3eD1z8Bt5F7F5zdJy+zoYp3CgML0RfXcwzRbNyOYTt0sOowvfErcJiVvYFvyp9EC7lgT6pxbTM1M6A9TiOU8xoE20or3mBdCOb1BuR2xbmCZFJyRp4RLaRC3aK5lQiRiYXtAPSMeFngmr1BAzDo17MWmTuBEXr49Bf06xjPIRfBjtYJo7qnDgc3QbmxN19kL6t4YdOxsprzwmS2zDpdVRsk4TL4LdZpyf1BL7JJPaDpfYgsZ/JzbeCOXDAzdpcKjEleDDZJtw5YuLE4tDJ085aNj/54idYT0n8ZxDw++RUw5vYmeD2m/9TZB9GdisWWfsJpbcXkT6Tm7u2JrpZUcxXFifB+/F+CbQp2Sb062N3EDL1a0SJ1VCOkfxXKQYUDhVKHQy3S65vh//xMkIbhOv4B8iX3a5iEETLOJ/UojnY4rBFZw/MVZwTqY9bsSA/2JNcvKXeMM5sBJ94fxdiZUdGDkfugcbL48n679QqzAhQ4SPRvT1EtKml1iiivi5gMaveDdzPgV6WxZ8AvfuvwK3axgPLyrP36D/Bv8K53xwdgdaU+CHfMtSSjoPQeFwfqJkVvxReYl0lZCuGNI+lZ8l9DlO4SQ/qxVFURRFURRFUVL5BQGB2fVH4otlAAAAAElFTkSuQmCC",
    vc = "/assets/png/YGG-f24e929b.png",
    mc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAwCAYAAADn/d+1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL0SURBVHgB7ZuNdeIwDMfNLXAZIRu0I2SEbgCdADYgG8AG0AnaDXwbcDdB2IBu8D/rYq4myB/QQJNav/f8eM+SlTwpjiw7KCUIgiAIGQCgMm1lWoOWJ0bnycq0aQsao4T+MY6d4Zw1o7dg9BZqJPxQ46Fg+n4yfQ9KuD32ddXlwOg1jF6lhOswzpubtjPtkZEdQs6mMYlBK017NW2pBD/kIMeRDTmuI9eMw2tHvmbkbx0bJU5nkQSFoxOM/083nIQMPmEfHHnDyGeOfA5+lklQuniceYRktMoqPA6dgV+FETQjKP9o+CGbhRI+wPmrxBeYg6e/8Th6h7jNUgnn2KDEHNgnGjIz4hgn1bg9ayWcEno60c6WLfpHg1lSp9zTtwYfSZgcNAvo9RGYg71OFbiOm/hrlRs4zxVNJDCFDeIW8eR/tLexY0IzsWLuRaucQPvUhxxZRsZPEWcasUFVvQ6Mz+fVhbSkvfSMnSOdxSdsjGaH+NMg/nQeof2mwhm3wuUsnfFF4nVJp1K5gbSE3aA9dArVJ6+2hWxUiOeeDQIrsGywgdG4jq1j59rVmIZU6+fg8oKw7sHGoHLFYE4M7RP6bto+QZ30nieTSd0V2L7nC+y8D2l2TNQXgPbjBErWD/a3Mq1MHP5LtcHYR65Rmp+NtZ3Cb9UG8Y+yD4a5xpvKAfA7tjH+nY3ggqSLNpFTYdjgClQu4LIdXQoE5QVaaWnbt0q4xnGJTKuv8orA7FQuIG01pK0TfTXLNGCfK/w2TmA04uTxuiLgOYq1TiOZWww+gn/FUV/J2C5T9J3g0AxqGP2sKnWqmGvrkCfE9658x7NNJ3ihU8dFwj0dc04NqUvCgP+ihNCOjq9ar5XQP/C/+5fgv1oh8knO9wZpH0K4kG6phNsB/pNSH7JReA/Ar9K61Eq4HwjXMvJFyb1Bu0xtwOeN0R6/jun/ISeYjT/aAHxhRC9WNkpGG5DvigRkYEhABoYEZGBIQAbG2AOyT+wTBEEQ+ucvFAovRtfUbowAAAAASUVORK5CYII=",
    hc = "/assets/png/ar018-4f7b105c.png",
    wc = "/assets/png/ar018_dice-13a0c28c.png",
    bc = "/assets/png/basantclub-1d080abf.png",
    Cc = "/assets/png/daman-91d0d479.png",
    yc = "/assets/png/game_dice_basantclub-8e2d71d1.png",
    fc = "/assets/png/game_dice_daman-160c8c5a.png",
    Bc = "/assets/png/game_dice_lottery77-ae944ff4.png",
    Rc = "/assets/png/lottery7-c1301e77.png",
    Ec = "/assets/png/mz9-2e74ccfa.png",
    Dc = "/assets/png/pop888-f9532e60.png",
    Ic = "/assets/png/pop888_dice-ef18c3fa.png",
    Sc = "/assets/png/sit-87f8830c.png",
    Lc = "/assets/png/vxth-a0537675.png",
    Gc = "/assets/png/vxth_dice-1e0a0205.png",
    kc = "/assets/png/adver1-4268f5e8.png",
    Uc = "/assets/png/adver2-0fef2e3b.png",
    Mc = "/assets/png/adver3-352e6e35.png",
    Tc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALySURBVHgB7ZoxaBNRGID//11aLzHI4WJAqCk4RAri6NhJY0EouBgV6iqdnEqFgiAonTqpuFVQcHBwqcQtKIKbqdJBUBp0iSA2pGe8Nnf3fP89Lwknqct71zzoB+X6Lgf5v7v//f/L3SH8B745bQM49q/OmG2xrg0pEYRj3uFc18PJF629jsPkDgrYdfNnkYVFMSxwgNSCHoYI0hObpvir56de1hOf9XE3Zs6ITXkUgh4GIm8Bx2dCpBmN4w/an86V0M9cBgMQJ9hjAKskweKdLBgrgyGgzJAo3khgR5x9zrkDBiGuQnFrc9aJBLo8UwQDYb+DkkyhAApgIBYL5BXAEa46e8F9lAIc0UgBtLgtBQybwDE8BJuBwYimZrYAkapA2w1BNakIfG2GMFX5Cccv/oAHzz1QiXYBOusXbraEhB+NP37ZBZVoFUgGXywwWJzLg0q0ClSW2vDhcz/4tZWjMFFQ+5XaBG4st+F1XaaLk2fw9I6jPHhCi8DCfReeVOVkpeDXVhw4fTIDOlAucO9xR1SaTn88n9cWPKFUgIK/u+r2xg8XjsC1st5lljIBSpnB4G9dz2kPnlAm8Hbd7/1PeX/1fA7SQJnA4lxOlEqZ6y1R/ytLLS1LhyTKBCYKstrEElT/qYnpllA6iWMJSiGCJKiZ6UR5GU1KUDOjpqYLLY2M6v6gBFUoXRLalhIksTzfX7iRBPUJ1WhdzF0RfeCRaGYx1CeM+z1AEtTUYr5990El+hYpA9BvgBPHMvBmXUzoS2obXHR3entj5jYYCN1qP7grsd8cCOwnnKMX351WW5xTAhlIATGdjRQg5BXg3EiBkP8towFaTTAQREsKZORDZOPIgN+IBLLZ7ToYBnXh7KmqFMDJmodW8A5MgmONNr0+kC+9qnLkZlwJFtbidyb+edkjel8CcXoUn5uJut+wIKxR6vT2DTt46/2sk8t1CkFwyAnEsyjE0MaQp/Y0kzP0OGeeJbqtZe20xsd3G5TqyeP+ACCZCyIUE6gvAAAAAElFTkSuQmCC",
    Qc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALrSURBVHgB7Zq/TxRBFMe/bxfwgINbOis8ExtE9Ow1oQRiIoUFiRZXqiFRKo/EBEiMQocJEUsKfzQW2OB1kvgHeGKMjYlARaMsP5RF7mact3d73BlDNbPHJHyK29m9zeV9dnbem9tZwhHI78NeEMDjdhHFNGKCXOG7pRY/kYBPZxf9I8/998D2l6EskbwugQxJpNFoJPlwZEEIvG1x5WJrT3619uuqwN7XgXRJ0HsVeBrHGYcmO3qWpqLdUMCa4CsIwljq/LtZbjv8URLOhC3BM47ExKYan2F78+OwJyGzsAuveW8/yw3Hdff7YSOSLvHGIZcysBLZz5+OlDINC1FjtjwGiCgFOykLgKQHS+FM5MBiEkFgtwCjXWBtQyBOtAo8e7OHCyM/0DvyE1u7EnGgVeBD4SDcrm+UMHTfj0VCq8DMaDvOnHbD9sq3YiwSWgW6VfCvHnUilSz/LEs8mNuFSbQP4ovnmrA0m6pKvMwHuD29A1MYSaMs8Vr1RARLmOoJY3XgaqYZz3Md1X3OUE8WfkE3RgvZzYFEncTjhd/aJYxXYpYYz7ZX91mCbyldxDKVuKUkokHNfFbZSRfGBdbV1GIwrAflKQbXibs3WqELowJcxEYeboWVmeHgOcV2V4qdDowJcPB85aPbxUTwjDGB3NxONXhP3f8mgmeMCNyZ3saL/H7YNhk8o12A83wUPDOfS6JPVWZTaP8/wHk+Yj7XiWtXTsEkWgVq8/v0aFLlf7PBM1r7djzbhs4khZM5rsBxoFWAB+qMuvJxcvJUotGcCDSSIJHwnXARzVK61AomP17fgsU4apXPyh5Qca/y1pFEBViIpIqAGsVWCkDgE2+cZO9SQfXHMiyj6MrDdWKU5BQsgkALXZVXDkKBjr78MoQdEmrwFg7aWsZq9g/ZXhkcpibcU0uA/Th2qHolxFN1sSfrjv7vVF48a9oNMoIoo5YxPUjpxb2aqR7KrwkpfSLpN//Bcuvl+rdUIv4Cz04HGSy8kFAAAAAASUVORK5CYII=",
    Vc = "/assets/png/avatar-fb4c2506.png",
    Oc = "/assets/png/award_icon-7b085743.png",
    Pc = "/assets/png/btn_gd-bc3329db.png",
    Fc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAApVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD9/f35+fmAgIAPDw8AAAAAAAAAAAAAAAAAAAAAAADMzMz7+/v39/fz8/Pv7+/l5eXf39+oqKicnJxfX19RUVE1NTUpKSkbGxsAAAAAAAAAAAAAAADDw8MAAADq6urQ0NDGxsa6urqtra2QkJBvb29EREQAAAAAAAD////F/6qsAAAANnRSTlOAAAV3YQp9ZSF8XXFUPfz5q4RZUU9JHhrU+vbz8efivrmdmI+LhzczKijPDezY0MjBsaOTTA7wG9piAAABmklEQVRIx7XXZ2+DMBCA4YvBDIcsSCB777TpSvn/P63XkUYF+4Cc+n6M8kjIGA+oaRNeI3LrluNYdTdqeEL/Lx2WO9uBPzn2TpbCSeCDJj9ICnGiwJhKSCy7QNaVZnywoCDrYMI9KFFPi4WCUimRx9KFkrkyiwXa0lpksIIKqSsmxooctRveQ8X2N/xuVcXW6RcHULngij24I+8H20C3eRzMcj/a3zgusG8PadqCXPEXDmn7OkzT9Ay5wk8sHdLOm2ifIJ8jEW8p2jkibb6Ari1iarjWU7SjBWizayCIp16O0U5WoM8XQLzkdgttfwOGkDbA1CzFnsEY0q5pqPpIW23CIjWM12qCdrykLNI66FqM0E7XpEVqaYdqgPbcoS1S7Zsa4syYQ1E++AxMPPax8LFZA8Z6VaxJwpqevA9D+Pd+ko7gLAasZYi1AJZdevuQK2Qt+pzthrXR8bdY7MTY3FnHCuxSzV6Q3LCodpQS3EMc//h4TYTlbCgYR+Z/OKxjMqJtJMkLSmybqR1zr0bFlzLlZ6TSXspY18EPl2woqhFSC88AAAAASUVORK5CYII=",
    xc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAArlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD7+/v9/f2rq6ssLCwAAAAAAAAAAAAAAAAAAAAAAAD6+vrw8PDl5eXf39/Q0NDLy8ucnJyBgYFfX18+Pj4aGhoQEBAAAAAAAAAAAAAAAAAAAAD29vb39/fy8vLq6urFxcXCwsK6urqPj499fX1vb29UVFRPT08MDAwAAAAAAAD39/f///8RZRpPAAAAOXRSTlOAAAV3YX1lUCJ8XQpUKfv9v4xaSTceGgj58Ofi19S5q52Sh4RycD49DfX38+zPzsiyqaOYl4NMM/WxvALZAAABm0lEQVRIx7XX2XaCMBAG4GkgKCCorO57rXZftbz/i3W6UmUSwGn/2+E7h5PAZAJnZERz3bBWhpTGymqsm4J+isJpZEo4iDSjtBJOWjYQsVtJKU4cUMZJtNhtgDYNV409A0pieCocQoWEJBYOVIojiti1oGIs9xgL2tJaHGEHasQ5xCHUSvgbe1AzXo43Rl1sbH5wC2qn9Y2bcEKaX9gsVDr+aFGCzU8cFyt+ll3PS3T8gYNiYZxl2eWjHgfv2JVE5Q51e6LF0kUckaV7H/nti05HiE26NNuiHna1SwZCAp35AHX/WY1tAepNXoxQ9x6UdaQXoE4HdbujqiLVtrxpD/l4SReRmqDLUx/1gF42pOegTXeI+mpGlZAaoM/yBrU/JSpIJZRl0s6yLblXYFfCryRmvTZrwVhbxfpIWJ8n78cQ9qm/pBScZsBqQ6wGyGm93KZPHze98uOGddBxjlju4c4fKzC7enaHJMei3igl/myIw6RWZZsSg2tQzQaCPzLzh3X+NSFPbKqpGf/P1ShPunfsI+nsqUsZ6zr4BsyjKfTl85T6AAAAAElFTkSuQmCC",
    Nc = "/assets/png/changlong_bg-82acfbd5.png",
    Hc = "/assets/png/changlong_icon-a1be5291.png",
    Yc = "/assets/png/customer_icon-a245dae7.png",
    Wc = "/assets/png/SEXY_Video-2c1d2e0e.png",
    Jc = "/assets/png/WM_Video-44cb2712.png",
    Kc = "/assets/png/SEXY_Video-7c170e2c.png",
    Xc = "/assets/png/EVOPlay-4cdf61cf.png",
    jc = "/assets/png/Wickets9-92dc19af.png",
    zc = "/assets/png/AG_Electronic-c7870495.png",
    Zc = "/assets/png/CQ9-bf841f59.png",
    qc = "/assets/png/EVOPlay-3c593699.png",
    $c = "/assets/png/EVO_Electronic-3baabc16.png",
    eg = "/assets/png/HB-5b2b3a70.png",
    tg = "/assets/png/JDB-c7df4ca8.png",
    sg = "/assets/png/JILI-b4192f6f.png",
    ng = "/assets/png/MG-a162ed5a.png",
    ag = "/assets/png/PG-a6f601d9.png",
    og = "/assets/png/PP-cb7fedce.png",
    Ag = "/assets/png/TB-9b3162ea.png",
    ig = "/assets/png/bg-edc23a85.png",
    lg = "/assets/png/bgActive-805fae0e.png",
    rg = "/assets/png/bgActiveOld-0e6f6732.png",
    cg = "/assets/png/bgOld-d9a87831.png",
    gg = "/assets/png/chess-9a2d9c33.png",
    dg = "/assets/png/chessActive-53643ac1.png",
    pg = "/assets/png/fish-2be0a575.png",
    _g = "/assets/png/fishActive-aca8b68b.png",
    ug = "/assets/png/flash-77bbc5d6.png",
    vg = "/assets/png/flashActive-ef7a14b3.png",
    mg = "/assets/png/lottery-49847eb7.png",
    hg = "/assets/png/lotteryActive-c43af489.png",
    wg = "/assets/png/popular-40beb97d.png",
    bg = "/assets/png/popularActive-168afcaa.png",
    Cg = "/assets/png/slot-a9a2f416.png",
    yg = "/assets/png/slotActive-b5921bd5.png",
    fg = "/assets/png/sport-3c47e41a.png",
    Bg = "/assets/png/sportActive-0235eeda.png",
    Rg = "/assets/png/video-727f5ef5.png",
    Eg = "/assets/png/videoActive-eb4fe331.png",
    Dg = "/assets/png/AG_Sport-01e0bbc1.png",
    Ig = "/assets/png/AG_Sport_big-2ce871cc.png",
    Sg = "/assets/png/AG_Video-58d66d6d.png",
    Lg = "/assets/png/AG_Video_big-3ff21df0.png",
    Gg = "/assets/png/BB-1a996437.png",
    kg = "/assets/png/CMD-f3629cc2.png",
    Ug = "/assets/png/Card365-cf7404e8.png",
    Mg = "/assets/png/DG-81fede9b.png",
    Tg = "/assets/png/EVO_Video-a27aa565.png",
    Qg = "/assets/png/IM-91829b59.png",
    Vg = "/assets/png/SEXY_Video-daa76e02.png",
    Og = "/assets/png/SaBa-ac98f5ad.png",
    Pg = "/assets/png/TB-cf04548f.png",
    Fg = "/assets/png/V8Card-eb8a9851.png",
    xg = "/assets/png/WM_Video-4fc6cc79.png",
    Ng = "/assets/png/Wickets9-36cee7bd.png",
    Hg = "/assets/png/headerBg-177dd139.png",
    Yg = "/assets/png/home_message-91c1ea33.png",
    Wg = "/assets/png/icon_sevice-28f818dc.png",
    Jg = "/assets/png/icon_sevice1-1d31a371.png",
    Kg = "/assets/png/5d-f8ff113e.png",
    Xg = "/assets/png/bigaward-83a15fce.png",
    jg = "/assets/png/chess-d19898df.png",
    zg = "/assets/png/clicksTopList-f8615884.png",
    Zg = "/assets/png/fish-047eed52.png",
    qg = "/assets/png/flash-a5f4f28f.png",
    $g = "/assets/png/k3-a4a42715.png",
    ed = "/assets/png/lottery-29630bba.png",
    td = "/assets/svg/message-8d1fb933.svg",
    sd = "/assets/png/platformList-a769d96d.png",
    nd = "/assets/svg/search_icon-4452570e.svg",
    ad = "/assets/png/slot-daa2117b.png",
    od = "/assets/png/sport-51c19861.png",
    Ad = "/assets/png/top1-573e2e29.png",
    id = "/assets/png/top2-40f62dc7.png",
    ld = "/assets/png/top3-31e06806.png",
    rd = "/assets/png/trx-6b43aee9.png",
    cd = "/assets/png/video-f917d809.png",
    gd = "/assets/png/wingo-7fed1973.png",
    dd = "/assets/png/loteria-0ccd41c5.png",
    pd = "/assets/png/5D-d8c03d58.png",
    _d = "/assets/png/K3-54cae092.png",
    ud = "/assets/png/Trx Win Go-b482ec80.png",
    vd = "/assets/png/Win Go-da739135.png",
    md = "/assets/png/XOSO-31052906.png",
    hd = "/assets/png/d55-92bf4299.png",
    wd = "/assets/png/d56-381350f2.png",
    bd = "/assets/png/d57-59e91e51.png",
    Cd = "/assets/png/d58-b02f0617.png",
    yd = "/assets/png/k310-1fc41fc4.png",
    fd = "/assets/png/k311-2acf4e28.png",
    Bd = "/assets/png/k312-126dcbfe.png",
    Rd = "/assets/png/k39-707408c6.png",
    Ed = "/assets/png/trx13-30f132be.png",
    Dd = "/assets/png/trx14-af832a85.png",
    Id = "/assets/png/trx15-5500af52.png",
    Sd = "/assets/png/trx16-27318f43.png",
    Ld = "/assets/png/wingo1-26adecc4.png",
    Gd = "/assets/png/wingo2-7620426f.png",
    kd = "/assets/png/wingo3-af2ecabf.png",
    Ud = "/assets/png/wingo4-c325a189.png",
    Md = "/assets/png/luck_bg-62bc96e0.png",
    Td = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAASFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////neHiwAAAAF3RSTlMAcmWrWSYcBaSd3Eoz8beTjYV9C+fGQYudJigAAAC/SURBVEjH7dTJDsIwDATQpmRP94X5/z9FgktRnGl66gHe2aM4luzmNut6rd5sm7kUUIC61NAMzK66nWXH277YmvIHDrw5bb7Hl76l5S4gM7NAgGBhwxTpUn0HWV8a1oACTx6QycMdUTSJI40oilLAgJC+nUA8hYAGoYVAC6L9B344EECEbNv0CGrU3bF+QoaunUUVS5eNr51Hjh+bpE6l5kbJPz6E1ec3dqgMaOG4cCGfI+dUBKJyTT1nrWtu8gKZqk9uigqG/QAAAABJRU5ErkJggg==",
    Qd = "/assets/png/no1-50a24142.png",
    Vd = "/assets/png/no2-12a16fee.png",
    Od = "/assets/png/no3-84021f6c.png",
    Pd = "/assets/png/notice-ddf69f91.png",
    Fd = "/assets/png/pop_login-83bf4fd9.png",
    xd = "/assets/png/pop_logo-22740bd2.png",
    Nd = "/assets/png/profit-804d25a8.png",
    Hd = "/assets/png/promp_bg-c1dabf59.png",
    Yd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAYCAYAAACmwZ5SAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJASURBVHgB7ZdNTsMwEIXHLkj8LcoCIVaEG9BcADgBcALaE7QsWQBFgjXlBJQTUE4AJyDcgKzZ0BVIIGzepE4IIW0d2opG9JNGduOx45eZTFyiCRPGFq11FXZO/wEIdfQXju08SfllJ9YvkyV5Frwd62/QX/PieVXYSN6vRDqHFG3mjiTCr57nYFcNWC3oD5/NlGs1smCKRsCHUjtSiKCvlCqjqVNGTCHiDEmL3HrKtWPMSUvtNqwihOCWRHL06fT0UijVXjo62idLOIosUpjNYfE9NI4Z9rGRq9BXStmcLZX8fmtiDovyaDjsYk8t7kQRfjo7W6fOd62sER0IL6J/s3x42Oq3GkcRET3uMuyI2Bh8ualTHzDnAffnhz5IHeConoRimegd1p2UKEe/0Ydj1WLRIGqY/2Dhese+ZAnu30CzBvMpOz6sZNaIiASr9/cfKfxRKFTIAk7Redct4SGddPNRWl/Mue6WTTrHwYZ9GIu+yDCNfVmsnxyIBM90wv+NlYMDnzIwLWXX9C9I2aABwOa5Cl9ZuDbZNyxSSSLBi/V6G1Go4A3bCloYZeQtvXoGaBQ1GpxVCx+n16CgIfJ6f3+Ld3lTc7YghQW3QgRFB9dukPa/Fm0OFs8WrhzZtW4RHup3mKs6BBKq/P6C6wZFDJ+sFrLlGoM2Ra0XaQ8rFBX/VheNb5PyDB7mdeIoyb+L5pjZTIzdUp4xwkKeYbUUn5oZC32sztZjiRH8CPN6/fc10X7MvWAmi4Dci50wwZ5Pgw1cEb3Yvd4AAAAASUVORK5CYII=",
    Wd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAYCAYAAACmwZ5SAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJESURBVHgB7ZdNTvMwEIbHLp/0/S3KAiFWhBvQXAA4AXAC2hO0XbIAigRr4ASUEwAngBMQbkDWbOgKJBA276R2CVHSOLRFCvSRRp56JrEnY49doilTBmitm5Aj+gkgUE+/41FJkQV8N2J6nUpKkYDXY/oKfWcSy9lSpQnwGARNyMTqhGuGV1P6WjRmnoLAw9c9hrQifQLMWMUUIv6yaZlbTunbwzNpS7sHaQghelSQV6U2pBCRrpSqo+nQmBFWweQ5qIDGwyYCvshz4ixykMJ8ZDyzhcYz5hBzOrO+Usrun1otJEfuDw5OhVK9ud3ddrx/kGEMdosB2DjK/uGs7rsEy3AWkdG9DLMnYjb4ctOhHO4PD5epf1+oa6wWBF6Ffjm/sxPN6cMexgDHaJYgIRUnhNTMO5zgrGmiWwfXa/Z18CPd32r1wW/omFNzMGbyARhDCAd9Qu6wLwcbFniGeIn+8/0aJrWf5aO0Pvnr+2uuy1m9vLSTfa+VSsPqmVUak+cqfEb5dNn3M0XK8kvKzC1QkdJ5xTC/+9vqAwvb26HV846lRcrHoxF5Tj8FIjSKGhVgttPpYVU0sOPXohYSt4vMgfoXiwfKh7/o0igZfrq5ucLeW9X8Lixhwa0QUfFE3yWWfaGghzEzxJY2iA0qflZXjW+XPglXUQRIqKrt/74fFTEcWRfIzjmMLkVtdDCJ88RVkn9XzTWzm7BdUZkxgVkeIK0Un5axWZ+J3K2/BBPwHSQY9t/XZPuu9AEzRQIofbBTppSXNzWCXBHkhhdcAAAAAElFTkSuQmCC",
    Jd = "/assets/png/recycleFail_bg-b72ce19a.png",
    Kd = "/assets/png/AG_Electronic-49dd8138.png",
    Xd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAkCAYAAAA3pUL9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANYSURBVHgB5ZnRcdswDEDhXgdwJyg3sDNBlQ3SCaJO0HSCKBPEncDpBM4GUieIOwHVCexMgAKl5NA4UCIlV/rou6NlkQBFkCAI2QuYAURc0mUJE7JYLOoFzAAZu6PLDUzLh3cwDwam5Ugre5zc2MaF1zAte/6YY2WnNpT5xR/vZS3NvKFLDv+OTwmyNZWKyiuVY1O3AjdhBuKp1Voy9g7n5UClQOfuQah9TeUpss8s1MkG54OfnXQkkXyOboK6WIaUSxwGe8QNDieHgaBb5ZDBhy7FvlnS2Hj6L5hOHhhLRmVLxTalpPKILq5oshplyNAlpmPRcxN0+y2FQhmHwX4Pe1T0tC24gY6ZTMWMmDAbMNRG6m+VZ0vPvAsZmxqJi0A/ZaR+ruhaTCOD7tXNQsamRGJ9L8ApQvZxUPTuMR2LbnLbYkX76EhsUQkSXj+aO0k0F7R4Wc4mVKaLsWfcA78yeQPlI+e0NzjppsuPnj5+int+CzJwWfZqLcYHlo3QawOKFfV9wS4T8ju8PM/+M/zc2EA/NZVC1N23umwArWrF3/lK97zCy46+fEJyFZUvEEfejMfXPZFq7HXjon9BF01zrz0TD/guHj4If8t0QeNZiaozN/b3bN+rl9ynvBLSkFtxrx/oDrmSv2E8mbg/+jf+yq4gzJ4MLUQdT04lBXkPt5PCXkD3lTKIdmD+zPP3W0WOY0Kh1D+Jyc9BTCC1BwNUKKe12HHM9IHhRKUUcilHz4vyHNsn4wuHyGEE2H3mGiEbkyqWKBIF1JOR59CA1oGOt3ABMOw1ZUCeM7AdvmVF/L1AJfXrGHshZReNAh/oO9FWU7kS0fcr6IGMZV69e97jz54eQpiCZB9gAOg8gyfMKM2f/TH4StprmZEdYzwHT28dIZ98PKHL2rpS0nVIUWYvhWgfkrdm3qBisBgRH9BlZmVfZ5pue/T4G75WjplTlpQA61SgHzsahsoW3SrzkcE/f9Ze20dw+XNM/r4PtuCbO/DViLaY17UQSxz+m9YY1Ej8Ds//ZPomDmo2fEy6l8M8P4qrK8tu3A6molLjeXjn33kMDIczokn/rWvoNTaD+P0VS2hVj9C1r8YTNNbA9PA5fA0Tw289K/hPYGPnCCCzwG58BdNzhBn4AxtDfg1hSggjAAAAAElFTkSuQmCC",
    jd = "/assets/png/CQ9-7a5080ac.png",
    zd = "/assets/png/DG-24d54d19.png",
    Zd = "/assets/png/EVO_Electronic-321a7fb9.png",
    qd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAeCAYAAACR82geAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOJSURBVHgB5ZmBdeIwDEAVXgfIbZBOUEZwJzg2uHSC4yYgneDYADpB6QTkJiidINkANtBJL0oxwk4cA0d7/e+ZvMiyYjuyI5kECERM6ZJTuaNiqGTQsKNSUympvCRJUsJXgSZlRmWLYVRUcvgCJDTQNTReMoQ5lUfyoF2XEtk2sPe+GDb0jA1cA+48xvEqS7DL9hJPo4ArMZJ9o4bhjKk8w3/KSK5PEIe55lu9JAn/yJKoqKQQxy15Xq2FvJTo8sMSsU4J4fCXcAXXhAYxxXgWHpvLEL2PSLuUgN4Mf2lKiCPHno34s3Gj7h+o8Oc7g+Hk0HzGz4JM9ESJV74QgfRZN/Xp4mEQm4mYQ4E30ltCQIcybAK5oawctk5aSngceBqPXuroT2bVz7A7iK0wJHCVB81xGBWcf2LmIe1JPlF6a6tugeHMQjuWyeCqQMNpz8RU3OmOkqv2Ovjcevq5UHq5yH+jmwr9HjSBIUgn+cs19wzqOWBi+igcz62UjgnQyaRo1ni4xIyjLU9YegOBSIRciuEUHDFPX+4UCQeftovzGy3bG+oPR+CZVV9yTIXHy64m+b0t4DGRHsteYT+edpPuBpv9Ziqz3ZeFZ6rtOTxGv/mtqtfxVy7yrUvuGaPey1Y3HcoZXXjWDQTiin4Vf6gUHfW1yyb1pbT6wS/KWGdD31UT26sP5OBHZ/B3Ti0y/BPDz2ha1g47Z4l8HV4xF3nm6gM6Tgx67B/pjxxKvJ75wUMj2Te4HEt133qJUfLYZPiIg4lhT4FuV+/iYsmebOqlJWJPMeBYRnKttQ3sTll03W5kNcwgflLqf3AerL3BwKHHvLR7nFz1F3IMfvQEb2yP4SUUmwg+wuVhj7QHy96dqnobvaE6o1pxCKPET4lVWUEc7C23nocu4fA8poRh+8DOPo9x2LP5ppJGA01CbFPw81vPknHzKaTtTVx33xpZYBxbVLGLDZ5+5lspe8ajt/I8f+3RZ3nlqZu2jTOMJ4cO8MwTIza3of3AJjitMJyibct7jIHhsMs+BJ1jnB/XUnR6jCyte+hfvqz3i/SL97Y0S5wnjCGcEppJqfkG95tXqSNfbDLVIbY1OzlZtG2yPTsDrkNekPSTl4k+qOJofHmU52GzlIoAl1ujO7PlqHSMTb4R+1X7cCT2De4z1fYtv/937cqccX9cWItoE5AvfQoSOBF747vSnnMR/gJM5LCoRpb4pQAAAABJRU5ErkJggg==",
    $d = "/assets/png/HB-43f71d5c.png",
    ep = "/assets/png/JDB-a9e793bc.png",
    tp = "/assets/png/JILI-418fe1de.png",
    sp = "/assets/png/MG-3bacbf03.png",
    np = "/assets/png/PG-297fae79.png",
    ap = "/assets/png/PP-1c082366.png",
    op = "/assets/png/SEXY_Video-cfa2ed4b.png",
    Ap = "/assets/png/TB-1af34ec6.png",
    ip = "/assets/png/TB-1af34ec6.png",
    lp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM7SURBVHgBtViBdaMwDFU6ASOwwbHBMUI2KBs0G5ROcM0EtBOknYDcBOkGZIN0A51VpCALm9hc+9/TA/xlWZZtYXsDK4CItXtUTn7zs2AhfDo5s/x1ctxsNh/wU3DOFE4enQyYj8FJ46RMbW+TokQOuccOpqhonJ1QRD75u2S9KqK7dxF8hv8B9dDJyfT+4uSZhpOiuFC3YJ0XrmMjWMIauIr3xiC9t0vO3Ohgi/40IHtbyAUbEvSrezh38MVE7z7XSMUVW/hmmE7fdo57dFDf+aFe59xlcUTUHCgifLPAVcyTVJDv3Cmm9KCU2ohOf4MTlJAIU6+1ZIlmxQQMlAkcoYcMcN2LGtKvEbljvoYxMQq+cpCx0SRwhFfIgEu2Z/fYi20YE/nVax0twUEbMDp9hLv2OAc4JmOJ2iCFlWqwU2N+bQTHDK4R4zpYCRz/JoKahrJWPA3DO79Tww2/2zyjQ665vWqogbgTIe5NvVekdFCeFiasPfoTe1jiVMNSXgScCnLcruCNCuQnfVJK2tlOvTdLnI4Il7WhaC1ww7WTOgJKwc4pQbnEBRq4LDQe4g5XThnujJLdqnSJnHW8TuGYfxHiDuLYm+/XRM4ulMdEzofq/Zsp15NxSOHQXziCC84XlUah6vdShyImW+JfunGXkan8yJ9PiRztRqQhOYBIaglxADrTT/x5li7Aj4zMiRIMQhz62/AK/dTSR7gT152li50qqAMORLM5+pO+9AyDP5lvcDX6C2NnV8rq0wv6OW1rooo3uGdTvxKjAxes+gkbG3ah6OG1nN7ueD9xSRey3P1tR7pTDUzbpqOh3yPvBL3dkYA8acOF8b6EPMd6FZXScEUi9xWtWdtojmuQCEzYvbLjS5xgF2tEz4d4VvbrbHGcuCTbiE6NkW0QTotgWGpE77+TnVsDVCcpTLkywGlb8mPO4XhrdFHfaZkg4FyH+G1XBL2yW0MueO7oYR24pyVkAqe7NXtJs+6kj/PzphjsMP0a6g/OdxWnWx1MvbijZfwA/tlTIJd2Z/6WS7uQLunRxV0L3wWOXoPrrzpbzPjdJUUs4CRFpIbxcriE6XqT8MlCkaTL4Q8XoSNk4h8W4bR6ABx0nAAAAABJRU5ErkJggg==",
    rp = "/assets/png/all-e4f594c8.png",
    cp = "/assets/png/chess-8f02a3b9.png",
    gp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAjCAYAAADSQImyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANRSURBVHgB1ZjNTttAEMf/TtKqipPKSERKQ1WZW2/NIZW4kdx6hFtvpbfeGp4AeIKGJyB9gsIT4JxaiSDSW28YqaIRoVKQEkrUONvZDa0/6oCx1wF+0jr22uvMrGdmZxaQRX5BF23KpCATa3iAXImftaCggQQMtJsGYkSBTGZLVXrjB89fmHQwkExuoP3FhGTkKsDJlXbpWPa/qdRlK5KEbNKFI5qWlQl3i2CjFWQLA2SftdH73kVE5H8Bvayh19uiNy8FHGGQGC0k2U4Yf5GnQL5UhoU18FkGNIRC+MsGmZkR1MyiK2ALXoY0SBGF1XHS3Lj2SYSFm0q/xwWvIjbEF1lGZ6816YlwTswXrMHgM529QrxwU3yHTAHoHzf8HlCgFTU8fHAAxjS6MsCUHdK4PvGVXHjLolDJdEwVpUZyrXp7k7hoXyA9d0bnr6k9p7YEdW6F2hnOj92f7taEFyyQTDrJtOPstH3AdwEiG0wmKyIiCJvvH9yS8A6RsO50btsH0oUZuum1aY0WnirUpyZ+D/gXitvmg1BG5slX9H984xf2F+C+8CB1CP8Y3kXo2B4LXajDeZitbsLuanEhJ4WruyQ8R8N5SoTvhKubp8B3EUarc6epYMSWHX3voRc19zqQzuukRdAcZnqcNivi9xfZvVrg8uWpPcIwMUjgPjBL6QpHVHyKbc5MMd0VGUtoMeSn0VGwS2HeoIrPThQVCvEne3VvSbmIu0vZdcX9As4wKlbZ4SHuBWwTnX1PFLKs8hUjIldO8qDi51J4zliB8XbI2oQRBg2qUAjbxK3DPkJVK86esQ+Mhm/oqHueNoSdnf4r86rkSC8gtXC5AUKW/XV03N1jHxCJnCgezjAaGchmDZjG/2YzTjd40lfEtODRZsTeOibSfRs3hSuRSt2kaA9Ll2Z9E5lMzXcyLwkf9WdL6zR6DfIJJPhfoi1b49C7heh+MU4k3T4XCDnrbu4l9wm+rbhIpakeaIzCTFr5DYrfDaiPt4PMtu9rIIuryk0F25S3HJFypmiTgkQI5O1OW9YnX+EZVikVrrn6fkIacrLRXIl2pJkntPKN3NQ82XQNMRLdhIT9Myr2RfQw6LdBEaQuy0SuI7oJqapJxxmXwKeYGn8AXD8fPq4FGRYAAAAASUVORK5CYII=",
    dp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAeCAYAAABuUU38AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALUSURBVHgB3ZhbbtpQEIb/MYSH0EpECmmkPtTZAVFI1beSFbQ7SLKChhUkXUGSFYSsIHQFOG9VQxS6groPlaqCVCpBVQXbpzPHQKHFLhBz/SSDL8fWGc/MP3NM6OXpbgauSmHqxG3AMfVujOpwY/Xu8SBkzJebSu8p0r9pNgC4AlTwzZMk5h3CNS7aRxaIPkOp/fCbyAZ5eXy7LcqRgc0XJhtQmpkRY8PzVXSF9HNtsAHXPeb/GYRTVHhnMDMpgy3LYLFJ4WciJ4YssDfaKCUeWQ6WxpA4RqcOUnVWDAnJwWFJytb/ikwMg8d1QWTXv1nqwxpGZDSPEGt3LL7N2r3F++/+HaAukXy0pq/LVi1znaJDiPFhrBj8XLzVWwKXGINRPMKToTy+vrcDrldQvT1AlffMXAqtpqmrb/WmgPVsikvvaeCTXTfTLYiu8gviiAzrEcv3xIdiyJP8NykFttn4hHt1hyfZI32uVj7DhBnGEItDZE97QncBAfhxjnaP5OeOh1c9I8LD64EM5xEJlY3sMYdAKXAMKX/SvxxJVksnPBnn+txmNocJdw/D5EhGh4o/ETtwlMJrbeyqcw6bPdhBGlIXFzIgkCmpVrDM9iKK5uEadqWuPSibUOWEVypciSJQregKouJJ1MpWN9mbje/aQ0KtfILuGx+AVi2U9HavTjEG0RmSbPmK5jkH6HhQ4eTPAPUREyT6FsULUCeiOVCtYWjE/eWA4xR0vggSbh0UXmKCjNNrDUYqt5nZ08kObPVdS+++YUtymCCjG+LXBGklnv11hWV65Q4bO3msPrZgW3Wd+J6zz6p1EvrMCOSXkN7hGkEmZkmCtrtfb+QLSQtH///40AsdRhdaD2GKTePcs0yGtKVykUmgIoaM1dvMDYSiLOAMvYIL64PmGSm8Rjwvu75qycJpnVdz1LcQmiLc/fbVEfrBBdQKHK50G3SNZLKg6xXzG2ALBSkd3xhoAAAAAElFTkSuQmCC",
    pp = "/assets/png/popular-3eb06a0f.png",
    _p = "/assets/png/slot-b51fe91a.png",
    up = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAApCAYAAABDV7v1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHFSURBVHgB7ZlNTsJAFMf/r9REZdOFGHRVb4ARE5flBMYb4AnQpStw5854A7kBngCWJrDgBnZlCJLYBZKY0Ixv2gDxY2E6M6Uk/W3aDix+eX3z8V4JPylXPYR0zncO1keAgnjCaNBbDNDyp/KZizDsAsJFViB0YNnXGD37sWgWJVcMUZzXCtHtzsE9S3rIJmXMrU+CU3GwZb8j05BvYXt7nZPmnwjXwoaQi+omF9VNLqobDaI05D35FkQ+DKImKuWKxRrGgxbG/SMeuDQlrCYqhA+/Fyyf3/qPkbDgCMujmkbM5OiEI1ywjznCbWjC3GTiMyRHuM7CMsIdKGJ+1kvhyeBCNX/TW54W+SsPwglIfx0V8JGAdEVl4UhUQQJspEFckzURiroMaRLMirqeg9m0gXB+BcXy25xo6bSBj2kLmvoDaqJEvyWiBgaauqta1S3UjfJPIq+lapcluT8AD5pRffUO598L9k98vrowiJ7lSZALw+QnfN3korrJRXWzMaJxx7lUlf3RLLcfe3FECQ/INNRefWyQ+7SBPVoZWXpzVVtYDsxe29g9JFjkIhtpELDkDUveyQf68y97fFRbJ0QBF4PfisAv/AF8AsgkQWIAAAAASUVORK5CYII=",
    vp = "/assets/png/all-34bf45ad.png",
    mp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAATlBMVEX///8AAAD///////////////////////////////////////////////////////////////////////////////////////////////+h8NhCAAAAGnRSTlOZAI6TBwsRf0uEF1Z4aT1zYyc2HCJeQy1uUdBP2pAAAAMxSURBVFjDtZnbYqsgEEX3meGioniNpv//o6epSNIqUCNdr4krQ2QGGPAvgVC9NXddEjOV+m5sr0Tqmbi0Goxm/ID1bajelUrbEh6UlVLVOE5T37dOTK2Vb0jHG8FRPp/v4KHbdFLaNwQcSG94gZv+hFS5gIJST6N+KRUFISQ1+AEV8jfSUQNp6RM9pqUDISL9wB4aElJhGDFpgQPYiJhUdMCRVC12Lgq7TB84pBFhqbzjCCKkaGVIKmu8jZYBaYMLNOJIKm64RCcOpAYXMXvpwLgIDz+lI+EyNH6XCo0MaPlNWiALxatUEbJA1Yu0Qyaap7Rn5KL30gbIGirC00mrL0b+sYB8ERocT04ays/hoDBzn6gT3SqVFJx2+6lxX50LQpD8klqEmHeh8rTmSo0g9kvaIgTtQm1coUCY+iGtKFl4zDPQdFJz9Skd0iVC8TPQdFLbT+kNEbrvoU7RpPbPIDYUP96KfKDpcq4FFCNG/bKH4tH/Qgyu0CPOsIrYB5quPgss1xsUyYCb/ysmHELlBmYYv2ILimSAoi3QOiBVckXB4F4KJ1WBb6+fGx7jC6TaYuMW2kuXaAaMJjHvFy/VKP2ezsbXCOG+FMJuUipBXjojwO2fRxJCzF5KYJLhvSeZBx/CSyfz4DAJCy/luFQHzmwpKXnpfE3qh18SSi+116TWS0to3qRLcpNQRPPZSzXuXqquSatNqlsYKLEi6YqUpJcaWJTacU3abtAcL32lcripr1Z6RFkCRTrx9lNFWujcUi3iCx8VjvUt9MWKQYwusESnXlRyia4or5Qrt+3JKa3dBi2rdHZbyZxSkm7Tm1PauZ30xPmkPP3+IMErSHJ/HnmQjf6PDmf5j5F/feD9JzMezfM3EfK3O/66MeMQDS7RiFept7a4QLtrdl2fAloFG4gNjmCChwMpr862OmvX6pztotShtROnm7L162AYO/gmku3js1IaTja691I61ej2yIJS0nRLfk/V/VbaVKeuOTggLeHhe3/yQmbq6EgqvJS66a2ro5rdPBUetUq5nuXbl1y20wzSuixL+oT5IdSdTV1yJRDVMpt2u45rzbxUMvXMf9EGI/hKs11HAAAAAElFTkSuQmCC",
    hp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAATlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////+QlxstAAAAGnRSTlMAmQYNkVcpMoMgiHJfaUo/bhWNeWNFN1GAGRw09bUAAAHOSURBVFjD7ddJjuMwDAVQfQ22ZclDPCb3v2ijGiEUoYOKBtaiC367bD5kkaFNcblc/nd2HryZHlKwmvFF38+GMfihQYwVXE4E6yF4yA4vVqbTNohsSnAYEOkbweCmEfPjcRO1RvyrH/aae1DtjLe0a2VhmQZ8YxkLjrt3+ECfmbFHhwTLlHOXDolc8mFbjWQ6sXUNsowJkdIhkxcvvPOTlRWZZBCBxRcfX8qMApsINvx1P15OjyImJCiqsntQx6PQ9KbOeqL5WcoK8ohLqHoU62S41aiEGyqYt/9H34JUXoCcAaJRxYVePXpwacP7skrXStnSlLwLooHakktKbSjUMTwwVXgO/V9BPquNJ0UDmTOURuuN8fGxUqMyFio8/8LRUoSGaA9G5idC558IXVhDCXtoaFRJ1e88qlGdFP2WckWlIZ59rqFXVHUmfX9v9jmxl8pnJ8YdSpBbX1cjIuNtpEOuhC9KOaDE/cMetCOfkeIDuyJVxh4oR40UmTuK8jo10quMpfTUnKck6vxY8kmJXBO+ode9aJte8d6yzqYRZRQiZtz3aTqaum2/xYveChYbglkJHguIawQTi6ehPjLehjS1IhOzmd0qcblcfp0/8HEW32PZQ5sAAAAASUVORK5CYII=",
    wp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAmVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VHQRUAAAAMnRSTlMA/e/5CvM+9ZMp30rUfweMTy4f18OgRzcizb+t5ZpX26iHgQzhjoQy8cik5mcNt5wVdEqvgvsAAAIGSURBVDjL1ZTbkpswDIZlG0IIFEIIJEAO5HzYbHf7v//DVTYJxQk7O9Or9rsRDB9GyLLoPyXK4+mbJ7zFtAllnEe94mQo8YIcTl5EZ6MgLttVJR6WqFbbi4DaOLbppxCZT8kIHUYJ+ZlA6nfNwRnhjChwYeEGRLMQ50HH9FA7bCo8odh1anit60ssOZxcvOCe+MES8p6DE6LisFujh/WOH1UIm3/bINUXB/QS61VSHE09lZhxmIt+Vc2J/00oXd8hrmQSYhQ0AsCfuyUxVwyJIolEJ+wCKN5nrN3ol3GGTU6uzi6BjChAQcwKzIZIwuO7n2DGlKOJTIGAYmzJpMH8IBpB6vzPRhncV2e2iKlETszFUunWUafE5ChpjzkxsqsmnEKrNu/OsScXprqiqy5PNHFbVZh9gssOadBVszCiW6veBdW7aqY3p7RW3cHtzTWDSmie27mOHhWY2iqKiOipAr11zZrr57qO290yj99wblTlEwVGXTW7NSZHCv/RAzV9KuCTSgC6RTdtD/hCRvrTWdtZxR7AooBhfxF2Z7X9qr7vV/5M+M0pcPgUPM5WzeH967NV82Ltif3gkPSdWN32H5B+Zw5Uu945kPPXKnjdmSGRfjVdUsiBNbNCiOuJkrWVZ0KnWiD0ySI6KiCN7UkYp4A6Rn89Xw1RcJguzNRuQnkIIvqH+A2+3oosDWbgFwAAAABJRU5ErkJggg==",
    bp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAYFBMVEX///8AAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9oJYrRAAAAIHRSTlOZAFZCTJcHjpImHHMYhWo/DEM2MBKJX1I6LX5GIWQrH42NnpcAAAEGSURBVDjL7ZTbboQgFEXPpoDDgEoHvIza9v//skCMNlEMj81k1hMPK8d9dgRCMW81qj/txzl4KnxGRpNUrykHRIX1qD3I1pRF0g20UlsaqEwNYhhaEoCSmAftY1fFtRqgI/zO4qLOW9Vv6lOdqD3AiRrAKIAfsu5UI5Kg8C1ogBTHBlYaCW+jajCm0VVWZXKu7lHlkL02cPkAdZiSVMERmG9nZe0k9Uti+bsWkFMriTn4gN7KyqkamOI2YFvWnNqlb2ug2RrIZm0BbwAlLlU+hlGieSyL60W2rOs/qwwABeqxLEFd+S1gpXeLke3K1M4SzFQSYDIgAI6zc2JZ6TC4//ISvqD6CzzyDEvhAQdgAAAAAElFTkSuQmCC",
    Cp = "/assets/png/popular-9e7b2781.png",
    yp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAAUVBMVEX///8AAAD///////////////////////////////////////////////////////////////////////////////////////////////////94vRsEAAAAG3RSTlOZAI8QbgleaQVIVhp6iYQVf08uNDondCJEYz5PoMGWAAAC7klEQVRYw+3Y7Y6jIBiG4YcXEBHx29r2/A90u0wdiqIOXTfZTXr9mGSSmbsSUKhgf8Enyj7RT3SWj1qVlS3VXbId8q5KW5VKj/lhtG4rzKgwW0mTEWZVW+9H7xavqM1jybwlvLLXnai8YamsI5fZYEnxrWhdYs0Oy8u8E9aaOh6V/gJ2rqIWiGpkLJorbLC9/6OBsEHlkajGNtExpxPYptdRQ9hTZcOQNdhD0yqq8MfEMtrhBH0YzUucoMmD6IhT9EH0hlOI1ygnnMO8RO84iX6JLqeJyBK9NVU+asLira8lk3WfHXRF13VDbPxY3aHKsJlR2JP9no3Y+F1UwCuCx7KmxKiYo9wGnxToE6OWP6Pj6vnFBz1w5hRpUXTPqPZzZFyyIPc/LsurtGj7jPrpKFymnNeHq17TopdnlMIFcfG7nts/0qKQLsrDpdvBG2J3Bi7iy/V3VDxVeJpctAvXQwZPxR42xFkonNCri7Z+PM/Rh+MvUqIugtd5uvk74f1o6aJVMHOshVfEdi8y8otb0/LpO0r5I8oJ/ne/rfpla9NmH+YRneB14aW6c9eExGj3iPar7WA+02VufFlqVD+iGstLZaMikOhcc6LUaPaIFouHjCO5ZE7eIDUqGBaTe5HslVRIjjY5lseIxjDPlEiPWg5pEaJ2Xty8JbwRRY3Ilk9CD92gFWFfqbUusDbC4HQDOpyuxR2ny6BxOoUCp7s8sqdrHtnTWZT4EaKqsoQfITRHK7y49qPhnEv5+FFP3b1VdBStsImEnnIWU/dZhW07UWHYDq5pb6o2FOzAZDeHf9k8vR+qN0Zpt9Zpy36gthuDz9LH7k0Uv6Ou0TnKt0PHB+0bRqxZzn6qjU0HePyL+7Ht9xl9sPH5g4mXvgSoBiuSJylkKLLv17R6wZKmXwTu86HXu3CWagjve8kQnr+pyFm6sXopGOaieUFwSI3sLVzP2Wb8/mpeayVubc/Z2/LxmimR9fJ/f9P7iX6i/170F0aFIj68j3eaAAAAAElFTkSuQmCC",
    fp = "/assets/png/sport-b90b6a2f.png",
    Bp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAA8CAMAAADPEm3EAAAAOVBMVEX///8AAAD///////////////////////////////////////////////////////////////////9ESdXCAAAAE3RSTlOZAEwlgjmRiVF4cxVFLVoPCGkaIJll0gAAAPpJREFUWMPt2N1ugzAMQGF7zn8IFN7/YaduirLdbsetKvU8wHcBBLBFZ1Zalj+XWzGdTTQG+Xch/kJ7FaTaFzqSQCWb6BAw+0Z7ItHUv9AqaPWORoGLKhpoNKiY4JkUHi3SeLRJ5tEs7x7efulVEmtueu+2ZfTEzWLA0F1Xo0Hoh/7MThBd9T1x6OooCUbnowCiqxhAdDUaiK6iB6qbB3rzQDV7oK9yTUfCUTvx53RU/ETFAJ799Tph0YN/n147/o2yE/+ajipYcd1wsHLosb3/DZ/+L51dBgmfkcd41DzGSKeBlx/N/ZYIaiRqczFj6GKGXyG5Lrv4tdwnQMUHOYRtV7AAAAAASUVORK5CYII=",
    Rp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAJFBMVEX///8AAAD///////////////////////////////////////9l1p1dAAAADHRSTlN6AGUYYDQ6D0tBDS+ZfrdRAAAAyElEQVQ4y+3ROw7CMAwGYCeUga0BKgRTunaCG5SBnUocoEyscAMeF4AjwAk4IsEuckPcSmwM9fC31afUSQyGanTWlyqpPnAFgBulB1PYTcoBpQfznvsPPDEXdThuXZSAeaqDPbjYA2ZaAT9iShWsQOAV3IOAevCuCLxdbSCo1RseIFTmwEqgDST8pQy/FzCWYQmxDOpPoekczSc3VgKNtytAhvNg8OYhVjtIPTr4EfIQIoR1CH2EYQgpwsx+g74jmCT3ISraRvsCRCgvCdUAK6UAAAAASUVORK5CYII=",
    Ep = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEUAAAD///////////////////////////////////////////////////////////87TQQwAAAAD3RSTlMA99QeB8punjF7OIuHemTwhqx+AAAA3UlEQVQ4y2OAAo4ioQooiQrO/////wCURAbcHy87T/wNIVEk+qUYGLjk34PJBmSJ+gtAYv5/MFmALKFvACTs/4NJBWQJeQcgwf8fxPQXQNUBkcDQUT8BIoFhR78UTALhKpZU+f9o4GMYyEqj/1iAMlCDPjaJTw4MbAjeBwYEO4GBFbtEAAMjdgkBBn7sEh/oIYHTVTj9gdvnLPooEoiwYjDCJqEMiQ+EBCI+yALY7BiVwC4hjynxESwRjynxFSyRjynxDSzhhCmhApZg1keX+GQAiSm3QFQJ0RR88QoAVfzNW3SKkNoAAAAASUVORK5CYII=",
    Dp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAilBMVEX///8AAAABAQEAAAADAwMBAQH////x8fGxsbHs7Oz////a2trY2Nj8/Pz6+vr29vaioqL////6+vr8/Pz////29vb7+/v6+vrb29v4+PiNjY3v7++0tLT+/v7Nzc3u7u7BwcHFxcWdnZ329vbm5ubm5ub39/fj4+Pu7u6Li4vy8vJhYWE8PDzT09OVdoUHAAAALnRSTlN6AAkEBg5xSRU2dz05bmBPBGloY3RXRDooIhQTCFk2LCgfHhoNRkA/MRoYERELaaMOvwAAAZ5JREFUSMeV09eagjAQhuGfCaCAVHuv23fv//Z2DCSgJkq+Q5g38+Qg8Bwzg+K8XF76g2Iegtuee4LvCnXxe9EDiCiGLlu/BH9bdAs/X4BliLvyzRNQzPBYebaC9Rim4rkFRBNYyi4G8DeFvXD/AJYpDBnuDnXbV5XfChhua7m7UOBzgl5tLzWYoW/p+goi9K8sPGxCODQX2MOlUmAGpzbI3cAQ73Ap9rFwApkPKl3AiIHLiowY0Af6Vq0Y+ESHMfo0GfwQCQbcaZckSQpreZKMDr886AsIFlwQBB1Qve12yTRu78q/Sc4z0CJEU5wEslPVAmrmPXhCEQ0+gqA+4itUQI7zfP2AWPgdkP5SU/CGukgez/M1kEtakJPu0AJ5vAJyiQYDuV4u/dJAztuBLzgmQwXUvAbeDZC/WTwF4gY0WzvAewaa416BVAG/Jxi3wLsDCyMY2MHqEfDfoxVMyQhoagHxkYQRrCozGJFvAleR3QJxBZMRMfC6QK8gisZA1oI9wvx0nTcCFtzPcdHZMCROLdBAr/D1u9Jf1MPR/QPQmhT7ZweuAAAAAABJRU5ErkJggg==",
    Ip = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAA81BMVEUAAAAAAAADAwMAAAAAAAAAAAAAAAABAQEDAwPx8fH+/v7////////+/v7m5uavr6/////+/v76+vr7+/vZ2dni4uLw8PAvLy/////////6+vr8/Pz9/f34+Pj5+fnY2Nje3t7AwMDDw8OZmZmnp6fl5eXX19e4uLiqqqqFhYXw8PD5+fny8vLl5eX29vbj4+P6+vr4+PjPz8/19fXy8vLY2Njs7Oz19fX29vagoKC4uLiOjo6IiIhmZmY9PT3Ly8unp6fu7u7q6ur8/Pz6+vrT09PX19f4+PjNzc319fXd3d3Z2dmcnJzu7u6CgoLe3t7///+yhzJVAAAAUHRSTlMADAURCBUHHhqa6/3753Ut893a0oNxNRT37s7Hu7eSfnlWRDQvLBsWEAiqoZ2ViYZ+enVrYFxbTEY8Mi8mJSUkC7aspox6eHJsZFNKSD07JxxAxhUAAAH6SURBVEjHrZPndqMwEEZVECEGNgbjFrfYu7HTk82m1+29zPs/zY5koZgAtjgn96eYOx8zIPIy7LYur6bEmvcnNQDw+y1iRyuGOcHRrkU5+9YBQ+8fWcW0D4vUz9jy9pc1eMan2bJphz7kiP6UhbDtBhQRnBQb7F0dSug9kjyzAZTTvXgewq5CWIa/v5P9FT77sIKoxTLTrqbzNjXYjzpY0Z/O64dgS7ittgn2RDj6ThcqgHOcQRUilwyhEjOyX014JEdQhaBNflYSNilpR1WEJiX83K8Q0KaEimNrI77lKHAxboAN9fV7QVGgQnjX30dJEkIpH5Pk6/jBE5w6xKEcjTVkQYgPT09HHwJI+YKPPSHrXeI6VCs1s+xkTfE7Bs1IlXNKXUaYMqRihGPZz8MWf9OLsqXaUwfrEaZDUiF88DyBYOphKsj2jq5HQyrcCHsqXoWO9dEr3d6gjFRYl/EIKq+fBIepemNkBHyMoGIEuZ4MzF0QuIzH0IzASJasIF9XGm/sBJ3PVgnhk6DXbYRmodDICxv66DwvYP5BqRDcFQqTUmGAaygQ+KBECCYoEJL/EHdxoeA3hd5bBty6uN0E5AAFvYgbAOg0BdcnuXcS3lbDh54RnAvo7l3P700eVxpC3E9+pRMyZ+OmLQQ3AbkpKEdMPxTUCc0E/AftgGbGteIb7gAAAABJRU5ErkJggg==",
    Sp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAPFBMVEX///8AAAD///////////////////////////////////////////////////////////////////////+em3UEAAAAFHRSTlN6AAZ2cVYkakFONC1dZEg3Ew8fG1sMEiIAAAFLSURBVEjHpdRBtoMgDAXQNCEggiJ2/3v9/TStiiB4+iYO9B4IJsDjnDiyITI8YuHlGaAlkNCMbaAV7GKeLaAJDqH1GjwJsqjlCqCBU6YrMEAhYx2gKgFTBw6KWavAlsFQBaYMuAqoDEwVQDnqxxXaNfgfT6n9H3TzT09jipGa271khNd7KV8iiG5262OVk2XnuDEPEpdPnK5P3Dq700yr10wvinUB6EmWjxYOtwZOAGB0BnB+F5iulWXw6qV9iP9vpBaLe4D+M8CfEhHlySDxuAO8bdodT83kYwGn2fcav3Vx1lMCFsr6n4PWLlgFx9AiwEJn7Bsg9QLCBBx0Rycw94MhAe4HnMDUD3wC/ia4v6XhbtH67rGigs4oaY2he0cCepdQKKC3OfQ2QHPfhgR0ivl4awRqdHbIr5loLwjZWLjIYmBTQGQ4xO2rP/mFCj6obphNAAAAAElFTkSuQmCC",
    Lp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAclBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9eWEHEAAAAJXRSTlMA+e8Ms29I5uBSjCMVB9XHpYVd2r919Lqqn5hiK5NBOB0QzGl3Kk0zoAAAAW5JREFUSMellOuSgjAMRhssUOSOIIp437z/Ky7SrgVsa5g9f5xxcmxjv4QZuPk8BBD8mTAKSQGogPPme30Q4gRx/VYfAc7YX9z1V8AFXuyq3wj84OESSjTwdBzgmQRhF05oJLAKB7OwtQo7s9BaBTALO6uAZsK1J4i1PdRWoSD8S/97h/teVmT+SKh7trHVXeqg+A7hrn60YQNndVzqnDeQVYfq1KoJ6pmTCnAGBPbaS1e9zvBmjzzMdB8eItNlMjWOic4sdMnQe/aK01JJO9nguIn6Mt8Pdv3z8lMu5eNmNmo1SrL475tUfbaoyKdGq5fEad7XJF61ZfbzKH33xXFKyRQ9LFYRb6KoaorlSoBYh5TGUW1foAog+66QjHyNji7IUarpAh+FB13IRyFfK/C1V9rShVIGgC4EMtoeEvFSRriTIX0J8Yjw/p58ejAUZ2IuNEditjU+oBP4WJhx4VCgiNknt4YLgwSCNzdd9Qt6s7piiQeIGgAAAABJRU5ErkJggg==",
    Gp = "/assets/png/promotion-00bd0736.png",
    kp = "/assets/png/promotion-00bd0736.png",
    Up = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEX///8AAAD///////////////////////////////////////////////////////9PNSPeAAAAEHRSTlN6AF08HgwHbRZHTEJxaVlSg0VbpQAAANVJREFUOMudlD0KwkAQhZ8GiaaIvqCCXQKCrXY2FgoewBNIPEFOIIIX0Bt4BL2EjY1HkkSEZTOvMF/7sT8zO29BQUNxnsHhuPyJDTymXzFBjWspxmldtHOCCQwyghdL9IghTNZIbJHhZIsu7gD6O5bsHREgBdBhxcgRMQpbhIC/1WvLEvhEOW2xoC0iCvEkV1UbffFgInrEuS3Id2A6Ei0ODJGLFeIMcStZh65c90p3130PSQGTEKktYohCAzlwckT1UPMmYsCDuZOMmg6njrP+AAT/iw+kBSsdmw7VUQAAAABJRU5ErkJggg==",
    Mp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAARVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////9SnXPCAAAAFnRSTlMAxweAGBDlwpi9QO0s3a2gj3g7hzRDddAMkgAAANhJREFUSMfNldsOwiAQBQcQ6E2tVvf/P1WtNjWaBs5b54mkTMpl2cOOGUKbbIPUhtvP9LuzAu7Kim+sgsbzITqrIkdmvLNKsudFY9U0POlM4LVzpwgZbiYxMC3D04GVw2lDCORlOM9fjQ2hpdeEhBWX1I/d9ycrcY6AIASQhDOa0EfAh6MtuIIw/RUn5doJJggeOJpd4FIn8OTt+Tohqn/o1D2MwilJ96DftF5LerVuvwcRkkkksia0TJoQ5Eamtkq5GYvtfhQDxXktslxUQ1GK3dxpwT6wXx5Q7owmPE5KkAAAAABJRU5ErkJggg==",
    Tp = "/assets/png/tab_select-07b035f1.png",
    Qp = "/assets/png/turntable_icon-04916ea0.png",
    Vp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAolBMVEUAAAD6Imf/H2T6IWX7Imb/H2H7Imb6Imb3HWL7I2f7Imf6IWb5H2P2F2D7I2b6Imf6IWX6Imb6Imf7Imf6Imb6Imb7Imb7IWb6HGT7Imb6Imb6ImbkDVn7Imb6IWb7IGb5IGb6Imb6Imb7IWb6IGX6HGD6Imb7Imb6IWb7IGf6H2T7Imb6Imb6Imb6IWf5IWb6Imb7IGX/H2T5G2T7Imf6I2feFLJ/AAAANXRSTlMA1Baj9hhfzxr6u1kmC/PnSuPcrYSylUQj6tedBsBUT0fwx3U3D459bT4x7c22qIhmLSASOx5siggAAAJvSURBVDjLhZXpYqowEIUHiVX2HQTFfddqtT3v/2r3ThOgBbXnhwzjRziZkAy15PhXM3QN4WlRPHfolbJIABChNggNDi5Zm7C3PRn4A8AbWyOVnqYeMJj+hrcomB69A8m89ab/OfP+M9PTmH5zsVxTR+slFrMWrfV18UEPtRfYdWibnmidI23TPXqmUYC4ubP0/kvazmHVT7rG7fXYB2MxUqGJ1V9OVjBlMMP5b99nyNXRcKCaduqiONl+t/c3lRFofJnzG2p6uJLxJhVgCb0vEyV8IopQrdCkqUmvQKXgrsxeiByRVwMvmwqOGStTky/vcqSTcMjHWLLTHKhohz2woQ+mh8TSMadY1jsrAdT0muMej8cBm+XnYnoHl9sCy6tom+9stsbBF7GOiKgwOHoDcPrg31R+gwDMT9pEPMOJLCU0WgQSzuNPYnggK8i0mywALA4k5XpkFBysLYdIwZIeq8Jth6QUChKFimtYrSWPzaNnNWxQHnRh5STUPea3JOWdqBAP4HufaaJJ3JRuYmiU4N6F9XotEwCR3AFI6IppF9ZQ0TsAZ/VnTD7SLrxERXNRSrXcPm1E0IWvqGiGd9+Wc9chipB14OFC0bw63ienpt/WZ0g6MB3ymt7e1EbN5GyOCp4NBoOL2imr8lT5Zn1BI5aFkh5qsml28bnaTyb29EyK3tUb1XbF8TV9M9xRlbAQDF/SQ33aJGKEr+n+z0SK4KkTu3NqXiFWzw5zvdeiuU2Ux4dtQrxRhx6Z3QY0T4Dl7eGpaWlA0LQ2a+wBoVXPMm03zYsAYHiFJptm5Dc1SbtNx5nHkeYJww3N2G+343+V+1qdX8gJ0gAAAABJRU5ErkJggg==",
    Op = "/assets/png/win-1586b6ec.png",
    Pp = "/assets/png/5D-b8aa8f0e.png",
    Fp = "/assets/png/AG_Electronic-d81a9a98.png",
    xp = "/assets/png/AG_Sport-fd9e9c78.png",
    Np = "/assets/png/AG_Video-55611ee6.png",
    Hp = "/assets/png/BB-27f66982.png",
    Yp = "/assets/png/CMD-b43c01a0.png",
    Wp = "/assets/png/CQ9-e141f92d.png",
    Jp = "/assets/png/Card365-cf987192.png",
    Kp = "/assets/png/DG-053b21dc.png",
    Xp = "/assets/png/EVO_Electronic-65c219ac.png",
    jp = "/assets/png/EVO_Video-9812256c.png",
    zp = "/assets/png/HB-0990897e.png",
    Zp = "/assets/png/IM-b37501d2.png",
    qp = "/assets/png/JDB-771c0e23.png",
    $p = "/assets/png/JILI-978bed87.png",
    e_ = "/assets/png/K3-cea1f7bd.png",
    t_ = "/assets/png/MG-7083ba57.png",
    s_ = "/assets/png/PG-19c96d57.png",
    n_ = "/assets/png/PP-1db20585.png",
    a_ = "/assets/png/SEXY_Video-9dadb2a3.png",
    o_ = "/assets/png/SaBa-1f65694d.png",
    A_ = "/assets/png/SmallGame-a59b5ac8.png",
    i_ = "/assets/png/TB-cf5928ec.png",
    l_ = "/assets/png/TB_Chess-0c355794.png",
    r_ = "/assets/png/TrxHash-490e7d63.png",
    c_ = "/assets/png/V8Card-a8ae5d8f.png",
    g_ = "/assets/png/WM_Video-3dd4a7fc.png",
    d_ = "/assets/png/Wickets9-3dabad9a.png",
    p_ = "/assets/png/WinGo-50994da2.png",
    __ = "/assets/png/XOSO-4eb59d17.png",
    u_ = "/assets/png/winning_bg-d9c728ae.png",
    v_ = "/assets/png/winning_bg2-85772bbb.png",
    m_ = "/assets/png/winning_icon-6642aeaf.png",
    h_ = "data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAcSURBVHgB7cAxAQAAAMKg9U9tB28oAAAAAIDfABRkAAFctxwzAAAAAElFTkSuQmCC",
    w_ = "/assets/ico/favicon-4bea6c21.ico",
    b_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAnCAYAAAB9qAq4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHkSURBVHgB7ZiBcYIwFIYfTsAI2aBuUDpBHYFOYDuBOkHbCbQTqBOoE9QNcIOywet7ENoUAk3I4447/e7eCVF+fpNo/hABgYhTeonBkSiKjuAJ3SOhl0eqGZXSzTnVmeqD6ki6F9uFKfrzRbWmUvC/sZhq66CZsRebwBL7k3WZ5Pf0Z3xYSBqsTMZC5homJxCOonq2tC/gd675wp2W8IGEQWZunmA57CmEUfSilMEY/87FFMJJeOpIGaxzDzLMhjKoQAY1lEExhjKYgwz5UAZPIMOZDUp9W5MdhHPhNZ8NnkEYHSaOEMbq5wjLxT8UZarzSoD9ySqdag4+gTC6F1/AnwvVQ6MVw0ODst2N2mfoHhoO2BXhsMyGrmImPEXiDl1ONpsO7QPasiARtQhywlbgnrLtadiunWhdriJRu157ow+NIdZzKaW6A3dONEwbQ4OnyNzjeh7qfedmDMvNzSv2Rxlan9iPLbb9igNEbQYz7E9mak20IMfrKYwDRbWuTiba7RLGBS+TCR9wD46l5+rwE4hRGyz+Ra428otxMxjKVRnMW46DkDLImc40tQchpAy+1843INSLEgZ3ZtRidEJegQChBvnht3VHSCbfQMIk+j+q5Q3SoVrMHfV5w+QT5/gexVr8Da0NleU3SpLlAAAAAElFTkSuQmCC",
    C_ = "/assets/png/border1-3b6518ec.png",
    y_ = "/assets/png/border2-7a806be7.png",
    f_ = "/assets/png/border3-cfec4a7d.png",
    B_ = "/assets/png/crown1-3912fd85.png",
    R_ = "/assets/png/crown2-c8aced52.png",
    E_ = "/assets/png/crown3-2ca02146.png",
    D_ = "/assets/png/place1-fe39c3f3.png",
    I_ = "/assets/png/place2-8189be28.png",
    S_ = "/assets/png/place3-d9b0be38.png",
    L_ = "/assets/png/stage-f0b7a560.png",
    G_ = "/assets/png/avatar-3f503276.png",
    k_ = "/assets/png/empty-fb998774.png",
    U_ = "/assets/gif/loading-66a2cec9.gif",
    M_ = "/assets/png/totalIncomeBg-e5f99b03.png",
    T_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMVSURBVHgB1Zq/TttQFMa/41SVA1LlqlMnzFKxJXRAjGbqSvdKwBNAF0QnnK0jPEHTJ4A3aNi6EaaiLjhvkKWJF3J7jv+ASZwYOybx/UmR7WsHne+ec67PuYFQApbrWL7/b5eU0eBLW0E1+WMRyEo85gHkEdBVNLoBah3/+28Pc0IoiLIsC75/+Oed6Xz88sFBAUIx6nweMbkFxIZDqSMQWb03r7FxsIH5oTb/vVZeIUaeh5VpnmI4vONTV4xHqah9qNGdebx1mudbz/IAG26zwRc8683xe+V54AkeyNh5jjcyPcDG77Hh12nGvyA2qdH1yvHWbtaDMwUEIQO0yw+XbBQvbiPCRVZITRUQGe9i2RDcWSJSBaiVFXGdi6ogIr5t76XdmhAQJOz9/Q9UDBqNzsyTbXt8PM0Dv5YR81lITnBiX4yPPxEQxb2NisIimubJlpscexAQhE6V4n4KpHAotVd8nfRArjfgspBQ8v3BUXwdCIhmfx+akPTCq2jMwRysvX2PBWMpLib7HPJBLaTq9eKlwtoacHuLJdAhoh0jCJ/F1jll4bAXLMkBB/qya/BLS8fZj2kaHD4N6IstIWRDXxq6C7By9cQVRHsBkCTuQ2NkGdVZgCcCutAXT3KgB325kRzQ2QNdA6Z5CX3pGNTvSxJ3oB9dLqe9uKG5QsGqtNfr4dNG6Xujmayurp7LMWxoZMtcdp0LbKfICrB48wPWfd8PViEEYUR0Dn1oi/Fy8lhKmOaZRm/lVnzyIEAjL7Ti2RcmfuDI2+AvOAc8Nn49OTBZjSr1uYqhpEKbdsbHJwSQuIfoKypGrVY7SIZOTGo/wCLaSCRKBWgNBoPUimFqQ8MiXFRDhCStO+3mzI4sEGEYS8mJKOYPZhkvZLaUJK4j2kTwrwKLgWscqXM2/TCUZ/KsnlgSm8Ll60VDKpr11nA43ExL2DRyNfVRXoiQnyiR2PB6vb6eFTITNqEg0W8Kzl+iw0bxzeEOf65MLmP6YVmfm8ICkpiRGI7bpgq3Km0kNsxkhvlen49dwzB6cuTvXBY1Osl/HTU6hXQNo/8AAAAASUVORK5CYII=",
    Q_ = "/assets/png/bd-de258be1.png",
    V_ = "/assets/png/bra-42104755.png",
    O_ = "/assets/png/en-4c6eba8e.png",
    P_ = "/assets/png/hd-796a1d34.png",
    F_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALISURBVHgB1ZrbcZtAGIXPkhknj6gD9JLLk5QKInegVOCkAtsVWOrAqSBKBXYHVioIfsrlxaQC8Rhnxqz/g1gNAgkBkvHuN4MFaD36z/5nl72gcADuEPj/8Gr8AnqQAIHcGirA13LkikU8PCB8gLqV8/k7/IqwJwotYdD/cXSqoUZyOUIrdKjhfcEeYhoLMIHLv54VangvFPQsgTdtKqSRgN94fXHowFEKSE/e4M+0fvka/MTbQCG5kuJDdEMk1jyukw1vVwGp9RMP+keHwZOAvym/Pd5VsFIALSM1MXtKy2xDp72YulradjtbLZQFP4EFVLWLjQKYOqqHRYiITyLiW/l+ATZY+u85bFOFBBonUO+LDdsrF9Q3tgVPGNOyJ1xnTUDWYAJYixqKQyZrd8zJsq/Xd7AcWukI9/0+opjXqwzIyQUcgFaSgeOZuU4z4ErtG/JZMBkYwSHyWUgFSO2fwjEk5g/pp2v2yfMS9z1mYARH4SzQk9rvcpR5UBg7MzCAoyTpsBsqgKNI8AM5dABH4crHzhmZzaQDvDiONRyGGYjhMK4L4EofQrhL5Gmt/8JRJPZb1zMQqsVi4SulFnAQyUDf6/V6bMRzuEcosaeNmEq+wzEkZi7Lr+bEl3CvO53zTyqANjKKXEDa7Iz2Sc/Nzawxc2Zm3aJWETZeI2A1mHMlCxLj1ARPSmujMriTvQDYOkuLfN/v52+UhtOi8CPsbNB0yHHxZkkA0yMFz2EZEtPnvHUMGyc0UnBGr8ESMt9fb/qucpNPeqaJ9EzPumaaBT/Z9v3OXUoRMRYRX9F990rPn9MNVYVqbbOKiEBE3KC7vYOQnckmzxdptNHdgaXSZ1GVZYo0ftWA2ZAPCjnB4TAP0ctsdFyb1i97ZEJGIoQr220ffPNsJNw4cENrAXmMGPA1G6W4VBlgvb3E2RFmU1jOAq/bBp3nEca4HAfo9UboAAAAAElFTkSuQmCC",
    x_ = "/assets/png/japan-09a3697b.png",
    N_ = "/assets/png/korea-9ace4c53.png",
    H_ = "/assets/png/md-8f32f4c5.png",
    Y_ = "/assets/png/my-2cbaca53.png",
    W_ = "/assets/png/ph-f374fde7.png",
    J_ = "/assets/png/pk-076f0344.png",
    K_ = "/assets/png/rus-3e998552.png",
    X_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAAtCAMAAADP9FYsAAAAY1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+aRQ2gAAAAIHRSTlMAGdf1QPHz2T1pbGI0FrdlXjruOOiwfisLn3Bnw08qE30VRzMAAADaSURBVEjH7dTLDoJAEERRBUFUGAV5+5r//0pDiFZIL5juijvvchYn1SzYcD3ucT28SOTop6KeROZGEplzHAKFR/xIIvi6LLLfWpHDH/k5EgHpXF03T3JJl0wPScad08xPaRhzXpyDYg9Gi6DEhzM3cQ4u+jKldgnqUv8pKbVLUCaYoCUGRiI25rRE1pirCZGMFkG7WDBKRDIWRDL5CmJgBGJhLgIxMAIxMALRMlUuEROjRsCkYFrxK7CsEUsIBgjHRIUOAMMiYIAQDBCCAUIwFRCioh2ca/tNUG/5fVRNTZ17TgAAAABJRU5ErkJggg==",
    j_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANCSURBVHgB1ZrNUhNBEMf/PasloEVtWR4tHQ4eFAKxvHoIJ4/CzRtcPQFPQHgC4AmITwA+AaAHj6xAsJADA6I3IcRSi4/dtidAKkDIFyHu/Kq2tnZ2kvS/uyfZng6hCWwmtf8HGOAw6iOQBiHJDF9u+WdziGBkzAAcKE8tEhA8DYzBNSE0iDX6d4RhML+WyxQaQEQFYJpWHhYaFVO3gIK3o2iEmUZR4uHrwxnPUxP1CqlLQLb30XjzDT8PEae7l7cnap5fy6QvSa3DY561uY3WYDyP+muJhqo2YbVXD4UhL7XQeIu2n7mW0APVJlYUkO3V47JIM7jBlKmAH4FnbdpWmnRlClnjmTmNGFBpXZQVYENn1SNOEA33LJt3l4YvDojXU3KaRzzpJ6KF0oFyAjblpBFPjBzPRUTubODcIhbj7YLRiC9ajtHSgWIExHh7cxPxx3q/6ywKpREYhxvYr/RiFAoRsN4P8/lNr7MTjlCMwi17tbbxM9XRfhvI5+EI/vFxNCznqYKAl69mRnLcDsewj/FTKj35SYvxrXzOaRYp6Enf+7ieTDHoDRwk8eTBuuIGq6k4kN3YTYoA6oOjiO1a3ffbNNylT0VR4RfYVXyVyx/AYfyqJWXcsQJycBS/847bAvjXvhEBFMBR9rnNKEK0BUch8GcRwM5GIIK3oEKEc3AWChTMmF3EC3AMn/4GMG9NoR4YH3mx+Pihn4JDbO3kptNjpxdSUvpy7LEjHHz/xnbD2dpe+CU+rfCn4QgHG18zl3au2ZEolHrfUnwWslE4/LET+ygc7uxU7uIc7e0ucUzJf5ivvvEm8/Txfi52qRSe2KQv2lt2ez2b0MMMnkGMUKDBZytm7vJ4GbpXTEaaeTU32m4a8fxEOeMtFZt8Kz06Ld2R/7pnao1PrG6nr7pftUu5LN0adZJOre2TEXJRSGO9WZOpPK0GCm3WiOdlH0OjFUgH31M0WEubta5G942nlHidI5pOrJp07S+pExuNoxBpSashNItTw+/dwlRXYOoqcRv+s4cVEoVIMWFEVlqDm8PSsCO8v6uQqdfw4jugCZxGJUmMFBH6JM00l64X8bB8UC5iqb8ZW1IGBh0e5ho1upR/fhLSEeU2NEYAAAAASUVORK5CYII=",
    z_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAA0CAMAAAAe047PAAABHVBMVEUAAAD///////////////////////8AAJn9AAD/AAAAAI3eKRACAJr7AQH/AQT5AQHWDBD9/v36+/ny5ebGDQ/t4uEAAJj//v3///rkDAXpDg0iI5cuLZgBAZUDAJkAAZAAAKCvsLAAAJ4BAZICAX7R0dH/BQT1AwIDA2nNCwz///cuLZa0DBD639sDA2vpbl3gNBy7ExPcHRHhDQvlDAuwCgvx6eWwr6oBAJwkIZcAAIoBAHgeH3KnERHDDRDUDA/7//////Tr4eDK0s3R0c0vL54kIZskI5IBAIQCAoADA2cAAGPnEAvwCArPBgb6/frz3ens4eHO0MrHt8DHubiloqotLaGwmp0DAJ0tMJEoJoCgGh6QGB2iHRbqEQx3rtijAAAABnRSTlMArUTxhvMPDBZQAAABiElEQVRIx+3XSVeCUBTAcUBFUB5YDtmAmgMkYmqQ82zOQ/M8fP+P0QVbdNrU6bKoTv/FW8A5v/NYAO9SFMXQLhaVi2YoyJ0vFP0fO4L8X61YyLthP0+dUDuEq91uMRRdUhRFxKUoAZpytRSiSriIlPVQ7LFIVIILINaCRInHJakhgHRRJEiIEHtHPI+FOG4FUMs0jG1cplkC6Lbc74dxnYevANpn0XXZDEAVdhPd6cDe0QY69sSGHCjzI6EKG41u4dK0C4Cao/EuplqtNho3AZpP6j5kcrwB0Cx2VxWgmL2sV+Hdhc/ueQVBTk0AOowk5QiueLVhQXIy5cUVT0zXkIyG0k5CB/Bo/9Cvg1IJZ6CZ4JUFXPHqFKC5nPb56nX8298c3ues9r5d7mb4sP5C9jRNiyLqaX/8L+Ig1MVDA4Cuy2dBZOXgJUDPL0tjsYNqYZbso5/EEQ4VUVcA6cqS57BQ1oJEFQ1JTkIunXcC8lhDjcij69AU8xgwOgFsOvM2+KGyBz/HRtFXxBHKWUhpb4IAAAAASUVORK5CYII=",
    Z_ = "/assets/png/vi-7e276113.png",
    q_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAA0CAMAAAAe047PAAAAsVBMVEUAAAD////////////////eKRD////fLBDdJBDdIBH//wDWABTcHRHeJhD/3gDcGxHYBhPbGBHaEBLbFBHfLw/oWwvpbl3gNR7ZDBLhNg/lTQ3jQA75vgP/6QD63trkRw3/7gDiOg7mUwzrbgr2qgT+2wH/+wDgMxvscgnzmQb/5ADoYQvqaArteAnsdQnvhAjviwfznwX70gL7ygL81wH64NzwkQfzpAb2tAT/9AD/4AAVvM40AAAABXRSTlMA8q1Ehq9quroAAAHeSURBVEjH7dfHsptAEAVQFEY9UUMWUaAAylkv+f8/zKjMA5e9YWq88IK76g2n6O7ZtGEYo+FgopXBcGRUGb/5M/RHAEvJXdQxM/9tXP3PvGHakDgOVxx1zmw+MoY+qoPbLzHZpQnB3SV/aAyaH4IQN5Cd0B8X0V3aDIzJd20t11LUtYy2yc1GCpm0kHkuQ6euAbHF0gFiIaIOBTe6Ndu9cQ4ky1jois4QICewbYandM2qIpBQW7abfJyt7hCG4yGKwstXXnhZFK28uh3u7kp6Yqg7xLclTdN8Wuzz9IsWkVU/pvBwv19c0r01YS4eNJ++UtKbDL5bw2wV26FQGDYEwXW/r5z0eWAWtBMnBAmlrQFnO1pB9MgEoDZYqL4jLh55TtNyZ6LfAoSDImR6lCbnlBaubBnMlhHDoASxNf3gLH7QVbtusog+E29BVCAr259MB0znM7FwA6F3St+xEiSXy1cPYNneooHAzJ5Pz1RqDYgDv8biNAuTSHoxeERl2H8HAicG4Ja0XC2Ix6vrldWPSAcS5poWR4y1Ie6u6d0T+hDJwu2JIdCGgDjkNWUNqKEwAU2oTQ/1UA/1UA/9Z9DrhNDPZlAfNbrxh/WZpZP6zDLGc3+j2Zc/Hxv/7BT9CVXQY1p+QpJwAAAAAElFTkSuQmCC",
    $_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAbFBMVEX///8AAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+nAQA6AAAAI3RSTlMfABkKFg8H+gVxIzxV7pF/TdvKJ+jTwi3ksamaXlA0t6KIRRmPMmYAAALZSURBVGjezZrZkusgDER7MNjGe+Lsmaz8/z/eZF48MRikDK6bU5U80oVaYJDAF400UVIKIYDHn5QqSb9oUAQSJeBAqCSGQCLhQQY1wBudrwHf8AIkhE8CgeGpEmyBXIKFzHkCCmwUQyAVeAORUgUU3kTRBCTeRhIEcoE/ICyvwQg/3whbIMGfSXwCCRBbAbzx+QrgxZ/vA4j5w88lW0AgGsIloBARZQukiEpqCQhERYwFFCKjXgVyRCd/EZCIjhwEGEuYv6DBc5jvM3gT4E8BPAf4LoC8xoqq2W/2umeuNhAn0B1r80OteVPA8xei1xsz0LJsRtjiol2Z32QVx2aEIlS0OzPiwokRAhHSK2NRF6DyFPDlULU2LipGHsGzj5YX4+bG2FMxuU30TWYmODBMwJQF3zszyRJ0E5DDRXE0HnYgkyOBg25hfGQgk0DB5pYZPz3dZUg7PAcT4kx32RboNyZIiYFtefrWbXPdb9aLZVNaAgKvFEsT5o4fTvt1nY3s0XhBWAI3Q6DDk9ZpVRUQsPJncpDSnQqbkcCYjCygjZMafmqywLdxsgK8c9gbAic8KNxb7TXgQZmRTS5dCb3YBgSgM3KaomuPh8tyMeRqdujHAZL2PprRF9qw2rrHarvpLWElA6eVCbBlbBUKNue1ibWbKvd2XTTeMK0423UOsL8Ia5DJh08mYxIXkPF89HGf3FePrI++wiR6Z5xo1rFlcJkcpxJU0uDR8Xy1JRYgQzj8ojyMJRrm4TdBgPOxflkFZ9bxnXTHLPSQUbs7yDCuUCjb5TNU2XXLv0KloFGcqq4H+xI4xCg2cv6L+PylhPmLIfOXc+YvSM1fUpu/KDh/WXP+wmz0TJLu6ruIa4AtkIu4xfdBILLR6X9osczaJGIp8Puy4PUx+f1MeBq9fGT+Ec3S99u9n9Owfqvl/mmPBnjPHj714Qbp6cnnP5759fxHCAgAAoLx/OcfpSanB4oYWz0AAAAASUVORK5CYII=",
    eu = "/assets/png/dl_bg@2x-44e35030.png",
    tu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAAclBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9eWEHEAAAAJXRSTlMAc/jwBOD6wAgSudjmkReKTBvQa1hRIUdBLMczJQyupLKbOYJfOK+acwAAAupJREFUWMPtmO16sjAMhgNCKQVEPnQyBdQt53+K7665EZGnUt7Lf/P+C31IkzQJpRcvXvxtdBWZmp6Mx194ZCPQXwS0kJS/8L3pOt1s8+5k3svy3Zy6fHvU5MyKr6o0Iq5O4YpHrEJTxeTGma/c2FpUxmeIb6qCHIgjHtu6y1N+QJrtXFTf+Rt1VT2mPIOfrd1tVVcPbFY8R+q1NMd67IG3eVUu924ekGhtHVT9Si+IFlDF9LGrrdgDmHI2DRoGHpghPM5oJsxiq+RAavo8701oUW3oAcXtqsEDYXYYPponUPWBB3ayQqrL5nMUX/1ZLvLAetAUDwBaT/GEpCCI7liQaAFqEL4e52vGgtgK2QPVjABbxVOURfVNTV+tceChKvZABcrLNAV6FpAHis2mIKEFOdBNNs9W5BSEVSvBAm/eOSBOwHaG6iInNhryUYMV4bhq5zwlW4PqIuvgktGRR3XjMFRCvukF/W/gDigABxI61Cs07AX+hX5A6WJE86Isz6UbDqqyxRMDhvYSwMe9pRuWMikAzOAdnwG5pRuqX9EPBqi97N4uSvF9L3ATDQze/g/J+GztH24/0kPRUY8CmVlqVvcwUDiQoZZPwvqKU0o44OS/og2srw1K/svsMUWf9GaW4PYkJHo4HMmoG9oLihRHayX7lCLmpfceqBVeMBfLsiVhtwXVZcxp2vNBMD3bpAlV06NT41M1nrVF1f6y/YSs9njWRtPbmRDaANU3Vw90miAFyBJVtXDWFlXJJswRnbyy1shW8QAe0HAKCMntKBkymLVFE9HYxtrT+ePj3MnTUb6mBxLwiOqI2Bo2NENRshOSr5cjzRL3C1QD9zsKf4EHnNm7uwDaimm99Hm2CuvMf56qsMtmLhGkvi6S9azXHZG3o0KqyzLiyqT+nWBqqhhUl0Xops6NicokKSNjsrrR0z/5iv6LQLetDmx3GWFMz0JsVQU9C7E1aempxJGSpvM0gn1d0IsXL775B5CsVE7Tk+QXAAAAAElFTkSuQmCC",
    su = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABQCAMAAACwJKLlAAAAdVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////li2ZAAAAAJnRSTlMA+Qw47yyv9ORUyr6bgxfqomNO0h2LatqTdj7etBHEpggjfHFdRVva+u8AAAG5SURBVFjD7ZjZdoMgEIaLOy5xj9rGLE067/+IvanW6MgSDpxc8F0q/DAMAzN8WCwWi0kaOmR9EQRFnw20Uddz3CGI4IkoGFzndcVrVXQEEEhX0Nd0D8cOGHzdD/KSbQQcol5O1jnmIEB+H8U1aQ2C1FR0mhkBYUgr5DH/DFLEPl/zMwJJ8oqnWXkgTViyNUuCT+acZmWZpUkOGOQorUku/wF/qAoiqVpitl38lSMv2ArtqlKCRKMr5ktCd/yOzCBBI7FJYIPnYi1vyPjxuBMfiGp+E2vXNbvnTY1YtY2tb7L1kcuIuxA2ZOtGLuKkYvG7jT0vbhejpIiz3JXxMbKZ/PlvQP4+pdd5qohba+fZeNhymp1dL1w39wuAuQD4sPBAu6fT1wds8Sbj9kYNx2n/EnThnBC1buYHi+d64RJ0qjEgVPNVnABr0GgVuCzz4OywJgr9ZCasmLq1gEAqLaJazNfhKI1bir/5T/Kbnx+mty/5MOUfKKPwgaLj6NNxSGu5TsxcfOpXtJlkQj3tMZOgqaeSZpJe9fTcXCGhXvKYL87Uy0j1gvcdSnP+I8I7PXfsPMxYLBaLQX4B2aZMurblwBUAAAAASUVORK5CYII=",
    nu = "/assets/png/googleIcon-666ff85e.png",
    au = "/assets/png/customer-4afe1e50.png",
    ou = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANHSURBVHgB7VnLjeJAFGw8EoIbIRDCTAS7ZLBEMBDB4gu/C3Dge4GNgNkIYCNAG8EQAhksJ0BIwFZZbtQ2BrfNzyO5JDTd7W5c1Z9XrxkhYsSIESPGFUjIQrfbbSYSiXcUsyLCOBwOc/z5U6vVmqwb8sHLy8sUAjIi4jAMI0uusp7o9Xrj9XpttlqtJVYhCxEzEd1VWGAFcpj9BblCzE+uQCGVSs0ajUaGD9iBHUX04CDPiUa9ZG0hVF7dItA2FxEB9z12yRu5DQaDV3WXHM+AW0QymaSIqXg+PjabTY5bnOQhxrHFeQYOam+qlQNY7/f7Qy6VeALw3hEm02QZ26aACR27+xjuBnUlWK9UKibamuLB4DsleUxiyYs8YZwZ7BbRerCIEt/JAv0JKzE819E498BLBL6oiPaluBP43fgUqtXqL9axvUeoNy6OcZ8BN9xnggdpv99PxI29wiafK5fLc04aJm9kZwYXYWh8sWMl+II7eMUCk/KmkJ/pkCd8BRBuETc2PIdBpdPpT75Pd7CWAOKciGsMTzWosGmMtgDCSwQND0R+i+BwGFTYHMz3EHvBfbAJxOoG2pua41WD+o6kbIK2UJlwoBWQ4Epgr07UNl2vUA3KImAYw7DkrfEiJPDipruNIhBNzAvDjgYlYedcoc9RWAElhLy/skKr73Q6P1iu1+uM33nV8NwGxf7tdtuKNKZpLq8REVgAt4AkQkir5z6GCCvpwyzzdifD7IJltFkHne5q95/dQkSgQ0zy6haw79EOqwe5lryvqvByV/TlKllhlPXhcJjZbre8qNzeB4APP/IE2/hMnJI/cVfewRk+6QGsh1kJLQEMm9g2RYV84VKSxWe8R9h9/dw1e40IHQELxnzhJD/2G8RLEET8w17/FP4GFVqEnwArXZCGpUtegvE9QIw/EYGQnBc++dYlAccki5Wg5EPCIUInaTx3I1ti6fMPJi8RSISngN1uV2RuzvKDyUtoi/C61DfhptbPKU8iL6ElwiFANaonk5fwFXEUwBQ3YuQlLoqQPy1OZYprXy6iQl7CUwQ+0wQdc7VatdSf7q7Jz+8MR2gnjv/g+ALkJRwi1DPwbmeHUccCHvVNxIgRI0Yk8B/jXmlqMD7YrgAAAABJRU5ErkJggg==",
    Au = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMwSURBVHgB7VlLctpAEO2Wq7xzFUfgCM4NzA3iEwSfwAKcquws77KIkXKC2CcwOQG5gTkCN4gS7yijdndLgz4I9OGnhd6C0oge9B4z3a8ZAFq0aNGixQ5Ac0HD4T0Q9PmyC40GzgBpguPxg4ys1f0g+M2vHWg8qBtxVSANR78guBig5/hk211AawrNXYU5UNBDz5uT/a0L1vutBUR9wLcp2U5H3pAADWwe0uRxMeWxHW0hulwXwXutMWAuFHwKyX+9VPLRLolzYE3EssdJPYGTA5+FC3PyQ/LL1BZHGgwpM4HVXvQkJ2REg4HH927hJMCf6D7aEY8vPH7KRljrk+KV0I9wXZtX4gGODYSHmPzoNo+8wMqfnRHhjZ2jiiAYcJ139NJmfwLyNoVaWz4lT8QNX/pwOPicrDf8LCXM5urySjjbJuTkwFpIOidsm4VZL7B/r/CjMjnTL816c7XEF8CCQmRXwpsdwCvmUZkMyfPzypAXlBAgWBOxT8PLGNT/V31eSZQUINgkYhfDSxpU5K4Vt2YFAYI8Ecuemk1lZA1qUasHK5HEudNSiS3gcudwxbgvOT82qLu7K1gGUhRqdcIVV8BAVuJfqs0o7RUJg1IsyYUd2viaAhh05mRvRSIGm+fEBhXfW+6UR/UECBHvx5/VkK2eRqPPcq0mRHgNacNLG5TEy77XeM/fRUR1AbIFIiJKxlh9QC/snHZI6nGSKLOmTD5pvLirxHNXuQ8R1ZJYyCe2gJLPWj2Pze/VJDa4KxM/5zL6fR7G2GxiZ9MD+QA+F5LXN8DRA4Is+Xx37Uj5VA+AeitRUgDOuHL0V4SkN9/WZKmIOzckX+iu3V1ElBEQmVWC/IbePAX+vcrb8y+Te4Vig6otokiASUC/EvkYHShf4/NEXENBv7VNwKrJkkEN8nWQFVHYNG4SIHX7+sjkDSqJyBdAeKN9PxydvEFpEesC1Kgetc85EXmDUiLSAhJGdWLyBoUiEgK4xW0WeYOtIkIBCJNVf679SWPIG+SLQJygnrwROZmju6YeszPx857pnQTxHxzNJ2+QEhHnAL734bCHVnsCzgEWV9CiRYsWjcAHWiJRtZ28yDoAAAAASUVORK5CYII=",
    iu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANsSURBVHgB7Vj/edowED25C9ANPELZINkgTFAyQW13AJwFsDNB6QRkg3SDskHYoEzg693JkoUwtgUE+MPv+5wgWz/eWffuTgYYMWLEiBEjRtwOyr+BSTIBiAp68kTNCdwHtoDwpspl6j+I/BuqLHcA1SuZsoO7AdJV/W57YneA3nxM/3bagLqt1Dt1ieGmQHr7+Ei8ttISD4GJaTc7EEULUNHf2hCQDjSQhmzgVkD8Q9fUIR8zRyL7w3RpdiDN/oH2eSJezWiQJY5JxppI4JpAKF2fJ/LfiPyafsbAnlIsv/J9VwNGsLHeicwSlokU5HA1YOKRn+s3L+TB4XooYgsFBQ3MbXO5fOGdoZ+fKe6d7H5RvJobmKY5kf91bEDUOZ2KFpiR+5hmWb7RAlMR1sXBYq2msgZosRL5Fa266BoV9U1LvpjQRG3i3sLFQIFiP9KYCPi9b2S/AQLFAnr3jJiSm73BuVCw8sjLWrLmAAw0QFCLO3mSdSlfkC5mZ4kbq5zmeHZyz1yTt2LtRYgBjAmHshZxpxAMjjTli201Yg0qX0IN0DgUdwmohuqC3jY+eJGm7BPrUSrNJBlCKDhTAj63iC8+MuCwLFBf1mwQBIISmXA/bQfsLOqB/lqxdZcfEmlsWVDj6RTyLs4zQPvxXiRiguQeUy4Fmm5UFtA9R6yTuu/qNP00ON0AjiC1H7PrkAt+tJYf3G+vLKA+OpoZI8pzItlpGhBSOoJoP1ZN3MbqhZ7lrcO0WOtK0iYvvStZtqCdygcyOEMDDnk9E4vQSTpehJIhXBZk2bohLx1pjFrbloRjx+0GImwHKGty4mnGSK1yJN3LG57pcR3JKWhOZ1j4DuDGWyjvXkjKjw+5ujIrwnwvMRbFPOQQNdAA7a+2pcmflHhawW7nGBFyEhxggCSfmRXbpckbOEbIWuJ+/Zm9x4CDzDn/FPIGbESailsOLds7DPDJ/3zoOhldDmoVYsQxA3a122y5oWt0XMPVoEpZE6wRR4+y7QZg9Wi+StSfMpj8Nb/STbwD1IY5tXV0DagtxLlHPuiAcUG0GfG8z9U1gL491vWNfMK7MXmD2DNiJcUfNkdZZweq1KtvzEekW8MY0RR/0FSwqm2E1C0oX6fvCPvFn8GBiMXSSo59W7gfUFRUrMtrBpIRI0aMGID/EYgKCbjmh1gAAAAASUVORK5CYII=",
    lu = "/assets/png/forgetpassword-3dde2500.png",
    ru = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ9SURBVHgB7Zg/ctpQEMY/oAA65QbyCUKZLs4AtUmZzjlBQhdojBsYaHBOYB8Bd8kMTOIbUKaLfIKkAxrItx45fzyjh/R2gzVj/WY8li2B9tu3+3bfAgUFT5sSDBkMBkG1Wu2Uy+WT3W7X4L/C+NayVCpF2+32utfrXcEQMwHD4bBTqVQuaXiw59GIz5xbCanAgPF4PKWHL3hZS/F4wGc77XYb8/n8BkrUAmj8GT36Adk5poiAIj5DgSqERqPRKb15CQXMi9f9fn8GT8pQQOPPoETyRpIfnngLEO/jzy7jjSS97FzwxFsAvX8CIySp4YlGQAg7nsMTbwFxobIihCeqJM4DGgERjGA4LuGJRoD3Sx/CcLyFJ5ocuIYR/K7DF7JarTbj0v+EnkjT2HkL6Ha7YvxbKJHOFApUzRwbsW+tVusZL1/Ag7itvoACdTdKEZ+azSajqXSc5XM0/iON9+li/8HkPLBYLL5SxC1FSHFzNmaSN+xA37ADVXn+9/fBGGny5EjJy/Cvah3JXi9Hys1mM2P3aZH8BQUFMEji+1kQk/Ql/2zIOSFptCI7EO9FvFzy941FQnsL4G4T0qB3/DlNMQtycRUXtAgeZBYgHq/X6zJKeQ9DZK60Wq3Os65IJgGx17/A4DCfgEztXmVZjdTN3GQyafxn44U7B8m70n4g1QocwPMPSb0Se1dAYv7Axgt3Dksz8NorQBIWhzX+njB+txNnCMWh8x2PCEPpyBVKzhWwmH0a4NyuE1dgOp0GrJQ/8MhI9WZ9OEqqD4krsF6vveeVluwb/iYKiHubXOCyxSXAcvapwmWLK4lD5Icw6UaiAGWHaUqebCkoyBu/AFYp85fnJKc8AAAAAElFTkSuQmCC",
    cu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJfSURBVHgB7ZjfbdRAEMa/WYk8oVNKcCogVBBRQUIHRwVYF5B44+6Nl8s5FSQdwFWAqIB0gKmAKOKJIA/jxUQoya7tncn5pPj3FEW+3fnmz+7sACMjjxuCIZzPd+GujmTZQzDvy7+yZpsL2amUL9Z0cnIOQ8wE8PHxESo+kz93Wz4tZdeFlRAHA3g2W4nxH9FufE0Gxpn85j0MUAvgXAxh5OgLY86zNysoUaWQeHFaexMaHL2k5fITEtFFgKFPA6kbX/yJJAvw3r85ZVQ0J1caigjIUWkF8wAC2MT7DfQMiSgi4C8qKzIkYnIPDIlGQAkzpNVIJF0ApW96l+o7EtHUwBpWMA1wkVVVvekl9JRUpDd2yQKoKC7Fc6+ghbGAAtUpREXdw/ApUqnb6kLXVpu8B6QjnctKPfsiOqXVsn8Xe3sVGCEipo2IrOVTn3p/o6fH9ElZ44UAh3LMZv/d1qXk+oUk7Loufl8/IyMjJqiL+GYWVOFACleKljOEpxNSvFSPVaSP4i+oJlLQc1VBJwvg/F0G9/s1uJqi2zglYAGdo3oiF9qHEgn0FtB4PG2UErXEFaieLvpGpJcA73X69Rk2j/n7kPti50WfaHTuhTh/u//AxsOvLXv4vTrSKQIb8PxtOkeiVYDPebr6is0Z/w8RMXneVhPtKVQX7OaNh9/T/WztcKMRaFLnG4aEd/ZiqRSPgLs2GYGroOvocR2MAOe55L77geGR98NkL1QL4Qg4lzyvNCY6/I2kEB1gewjaEhbAsJx96mAK2hKJgO8qt4SwLbFTKL3DtGebbBkZ2Sr+AP/GxbVXMd8KAAAAAElFTkSuQmCC",
    gu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIBSURBVHgB7Zo7bsJAEIYHx0jQkS6lj0Bu4CDRwwninCBYQkJUiSsejUmZCqVKSw5gQZmSnCDkBk4FAgH5F1FQeBdvtHhB2k+yFnnGZv7Zh6WdzdEROp2Om8vlnvDTpQzZbrdTy7IGrVbrTeR3JTL2er0GmndcDmUMknaDplapVH6jKPrk+vEMyLyDl4xJInhkbZTP5xsin9VqNcB7ayTBfD6/DoIgTrLZvIfQfWUE5JAECCxuNps/Ip9utxuTJMVi8R7NS5KNK2Cz2ZQQEEniIsDhMR+SBHGUeDab1OLg8ihDpAQgE8+UDQ0M31IaRykBWNICygAMQw9NKgEWXThGgG6MAN0YAboxAnRjBOjGCNCNEaAbI0A3RoBujADdGAG6MQJ0c/ECpLYWWc2AzgzZzd1vOjPMHOAwQ295tm07qPTcYqv8gd2jE6C6wLGrLi4Wi7uDmhYrOU3DMBwtl8sx7GVSyCl6oJ5UkPN9P0bZqs7qaKQQ1QIm7XZ7xjMyG+shUohSAQguTXZnpBClAjBhnRRuaXzS/ycphE1QdjSBZ99/CF1SiPJJjEk6TPpiH1T+pRENTe4yWigU2LIXpi13HrALtN/vD9br9df+novh9fiPd+3Acx88m7AUj6x5LKOkEVabFpV3hadVoiiaVqtVlkV2csShbJngu+Fj6X0VOf0Bnb6jYT8x8UsAAAAASUVORK5CYII=",
    du = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHVSURBVHgB7ZrBbcIwFIZ/pz1XdILSDegE0A3oBIUJcIBDb6UDlIQJ6Ah0gjICG5ROUOixVfL6CD1QgZ0YmRgkfxKRlfdI/MuxLfl/AjlQv99AQo/caqBUxAyCRmI4fNFm6YIU9jp8jeESgZBFxOqwApIPVYjvN25WURh6BZHUpgRBBEITJtDFpYgHi12hc+Wfzn5qSE06zwjxKaJorkuhMFzmDPw2wVeLrztHQS2AqAJTCA2S3XFOVh3mKPuiFrAf/NmhhRIxEyDwhDIg8OKBQl+AkQBeDQYoAQq79ygoIMCJ4wW4xgtwjRfgGi/ANV6Aa7wA13gBrvECXOMFuMYLcI0X4BovwDUnL8DoaJGkrOLIMDzcDd5xZPg5oGDOR/FtUHrNvxs+Lm9n9w6AbYMDmbtIya2I4k1Pa8bzZwJxxp4b1WAR+yNAyZ2I4y1DLrvHMW4uYBHLAsSUOzpXRrMYj5BFLAtIlwVyPmARywKCKzs5Bm+EVaiWlSaooivz3HLJgv1JnKTjdUf/s+H874Ny4mtKDWTlb+c1N7zX+8AIQbCesGla571A7vksrPYT1eKgL/aQ3RZn5Dnvh4W9aZ29m1u0QLLX5KyOg3KbKY/aSMTPE13WL20ShkVbnBd0AAAAAElFTkSuQmCC",
    pu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKVSURBVHgB5VfRcdpAFNx3sr+jdCBXAFRgUoHpwO7AAheAXUAsuQR3QCoIVGBSgZUKTL4z0sveSWCQkJDG0U+yMxruhrv39p7ublfA/w7pMljD0AfMhM1L9gKIBPzdQLFhqDX7a2i6kjhO2sZsRUDDuzFHztkaMtnCJYJZw2QJ0vQz5PwTkA0hOub/duwCWfbQhog0J+aKRe7ZvGLCmKt7ZtANThIObzhvzmdJItOmOdIQhCU2392K4VZzMnGFPAxJYALNvtRVQxqTQ2OJoid8AIwVMtZtHQk5ylzMS5vkOp29uiDR4wXakRiVK2kqo42JbNlbrjwonkYwaexepeErKafDIdMAyp3Md46/DsZUnTDHuJZAwfC+64ZrgzwmTxJkfpRAvnpMWPpn9AUeYx7NYX5CSgTYtJfIEj3CVcFdZN7VEQIYuIujb7jr2u6zMgGWhhtljb6h+OF0pEIA8MnsF3pHmuQiViGgPjzvDf3DdwpaJSAJhSNA7/D8XL7LBFQTdofoG8LNbr1DgbO9v1YkcYlOkJAbt9MM5xmgi3c+BQoReqVgXPRxE+7yTGdvhSgltr+rgE2q0zvaKu+a3ZNCtNN7h3Z+QcPZjRO6PVk+1ALFgx22f1XWw5mN0D2oqtxRws7WHQrdAQGJvy7rZPPDsNaOV33ZlJxVR1rZlBeW66fEj3F9RDvOvLcbwFiskvL+z0YVXscnWEsm9IPy1EziNFxyUbohbWfJKiREtha7uyndOuqa5BamLoCboDriMXcekSfkGi0Tc+yt85UqamM0fR+0/DBhNbYW20q29Q2aUtXOWZXftjKsljdgsmFuw5XHmc4qilanYnf9NAv4MyaZgZNvzWyZfacj9ip35NJvfV5k/x7+AJcnQD/C/Q2dAAAAAElFTkSuQmCC",
    _u = "/assets/png/1-dd501f44.png",
    uu = "/assets/png/10-3a21cf1a.png",
    vu = "/assets/png/11-7edac6ee.png",
    mu = "/assets/png/12-207d5c40.png",
    hu = "/assets/png/13-6da27469.png",
    wu = "/assets/png/14-92257593.png",
    bu = "/assets/png/15-a5cfb3fc.png",
    Cu = "/assets/png/16-87a2f703.png",
    yu = "/assets/png/17-420bfb7e.png",
    fu = "/assets/png/18-95b86f5e.png",
    Bu = "/assets/png/19-e1d9c94b.png",
    Ru = "/assets/png/2-06c51773.png",
    Eu = "/assets/png/20-b0071db0.png",
    Du = "/assets/png/3-42031786.png",
    Iu = "/assets/png/4-cfc9ce19.png",
    Su = "/assets/png/5-56371e93.png",
    Lu = "/assets/png/6-689d785c.png",
    Gu = "/assets/png/7-808c906d.png",
    ku = "/assets/png/8-8c82988d.png",
    Uu = "/assets/png/9-f4ae28b0.png",
    Mu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJaSURBVHgB7dnBbtNAEADQmXWK1F4IF6An3C+gHBEqygrBlXxC+ILQLyD9g/QLKF9A7lDZSg8cKV9AOAU4WQKpQrF32LUqUBM39o7byErnnar12tbYk+3sGEAIIYQQQgghxCIEpujTNKQU3xLgLgC1YflNThFwpPfuHRRe6+Rnn8i8JoQQlsLEXmykAnOgH29PgEEBk8nUGwLolAXr2Hm7Bmjw4WTamT/2cfyja8AMy4PNr9QGop570MDEDtjdGDwpoO78GGLWAU/uAQITP2AODG4vDBGWZkgBzjm51QbcABLwupOA150EvO5qFB4wAV9kvi0MKTwFX8i497kab9gcek23dbBK4Wh+VM1o5BuAIXoHTOzNg+NqY+XqaVQPlk409EVlZ0da7yRFh6NoGpoAu4QmxIJq7B+bIQYgfr63HYMQ4kaqtWhFdtEyiC/tZZZs1yjJF60NiLldiqvEDvh4PO3Z3Xv1zoP916NmZ48uW6lXpQVMhKqPrvdQ+QQIzcZmz/41nD8Uff7aht9bfVOtzZOogA652cIO2AbLaLPgw6LR7NdWB5EGVZ+f7ae5n9ArYGAHfJWC7FZMrT9xlbnkKrYZelZ5/zUiYK3vuN+1hhWQ3dK6a0RKO+5LBqRVVmmb+zU2D40IOP/6kNL7qvOPx9/3nz29PwSGRqS03RZ6FiPELl5qvGH7YavCd6ULCjoejtvf2j3xTtoqT2lSQfLiyV3/Lsm5GgFntuug+l5nqGB02TGt88ppAteMndIq3RxQ3mrB0vRC2/+yZeN+nTcjhBBCCCGEEOI6/QVm9MUNAI75bwAAAABJRU5ErkJggg==",
    Tu = "/assets/png/1-40ae7baf.png",
    Qu = "/assets/png/10-da12a6c6.png",
    Vu = "/assets/png/10-da12a6c6.png",
    Ou = "/assets/png/10-da12a6c6.png",
    Pu = "/assets/png/16-2bd4085f.png",
    Fu = "/assets/png/16-2bd4085f.png",
    xu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgB7ZjNchJBEIC7x5RV8WJyUcgJniB4B5J149nkCcQnEJ9A8gTgE5g8AZW7qQWhymN8A/AEcsKqWB5kp+1hKxbZ3VmW1aQS7O+yUzP9M70zO9s9AIIgCIIgCIIgCIIgCIJwv8A0Quf9cRMJSkkyRHDmVnOtj72xx0b3Idlp53kl53ifxk2NUIdk4aFbzhXD3Vl1NyAFpGkbUHHAtGWxPGWhrmkpI7/MHsDUPDXor4HG6nCwBchAKm8H1XxNzR4WbeM88SN3L98wbbNyRHRqNYZ44lZyR6bpVndaoOnYKkvUVb9+PosbMjYI9PtVdVO/XsfZnqaVRd5K1kEyq7oonCCr1MBxila/SPhlVd1s++keIwGvOxLwuiMBrzv/XcCxqaXXm7wh0nVOCqaEquOWn7yFO4KZmyaNJm+HDKiowW/vOFVsEeeqnPOWODOqn/cnTbgDeJ9HBTM3zuReQkYiAWukWkSKg/a8gaVwuEVm6hX8JdFvmLJVITdNsLpLysEUxAU8jPRxhZOUxG/MEgqAf4B3MdjyfWzby9P0RAPG66WdBjp2y09fe/1J7HYy446THy5Ojs3ugt3lrlmtP7JK7UECXm+07//Y9MIXEMt0kah05eea93CHW8k3FutMBTifPJ+MJ2FZE+yLSlAHX+FfPvJ4JQ7BCh36vmrPW5ebba5ba5CAJvwQd9uyTNccuHqGF+H+2N/SQWWHD6lRy38ADUR8HPTyrQZvKXY+JIUdfgGnHGwnqu13kVTi1iOWmT9JnyGogk1Og/9doRqGr1D4DzK/YUnSDaZ8s5+aIAiCIAiCIAiCIAiCINwGvwH1ffnjKGA4rQAAAABJRU5ErkJggg==",
    Nu = "/assets/png/19-2b8a5fc5.png",
    Hu = "/assets/png/2-79d63988.png",
    Yu = "/assets/png/20-1f5d984e.png",
    Wu = "/assets/png/21-d4ee3b73.png",
    Ju = "/assets/png/22-24343d89.png",
    Ku = "/assets/png/23-83a407d7.png",
    Xu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALYSURBVHgB7ZlPbtNAFIffc1pRiY1XkKzqnICwRCRqrKgLVi0noByBI3AETtByAy5QxUAllrgnqFkFdkaUqiLxPN44RAluEmXGM44rzae0XdR18vXnvD8xgMPhcDgcDofD4dAB4R4y/Hrlw6+9Y+F5B0DkD3rNl5v+7Q7cA+aC+AQFHItrCPKoiOTXa5Vz1TLhqeCDvkxQChKy4DIQkkG32QYFapFwLni91xGIR0jQ5wQ70wT5sTYSjECRrQgXBDss2M9/QfljY7yxeAuKVCI8E+SXeEBAfV3B/0A8C8NmAopYEx5+HvXngsiy5JfQu4Mg8R40MFa0pKAg7CDCEcFM0BIaxWqGdsJFQSEFcZahuSSXIkj5vTtDKeHzT6MTRHxlPcElIGAsIPvIz/3hsNeKQBO1hBFPK0kQ5oJAjaiR3URh2E7BALWZtGwJFtmacFWCRSoT3pZgEWvCJgXzwYUJn5b/JxkT5nIfCRCXsoruTG5jVcFc6uZhAFnGLQ59kJsRUcD1MZDbEbe9kA+LoCTawjqCwy+jAMbELQ19uerJnyzV4XOwlGxzQnaC6cG8+tG/J5KDxmFXvxUtotiW4I0gilcJ5ind7vlSSoAXgAf7MiG5IMgVT0xgQWj6baM2V2LQuKugSJ6SaPj5pSf3VPT2ZUr8mv2Ve2tJvAm1w7CVgAGUEj6/+H7FKQUrLz0baG5Fq/CUjiY7Ca7DQ3wHBlETrhhZGMPnj2IwSK2FiUhr511HDWZpTDnJhAteTJT9RMKYwEvHuyJ+8cxMoVqkEmFuSyyEMV+jKbeYS84uzRqNePfP76TqEdOQcLUplUFJWBYRTioBEt+4YifbSsmhgNpHPBc/TqECBt3HSrdPVFB7DxOdgG14sgKL1K4P69xNUDo/1Ih8sgrtVvVaCduYrIrU5/6wvJvQa52BZeqTsMElfx1qwpwCWAFTLyv/eZXD4XA4HA6Hw+Gwx1+QjG5sHIcl5wAAAABJRU5ErkJggg==",
    ju = "/assets/png/26-5206d38e.png",
    zu = "/assets/png/27-9188478b.png",
    Zu = "/assets/png/29-1825e402.png",
    qu = "/assets/png/3-6318b052.png",
    $u = "/assets/png/30-d5d51a19.png",
    e1 = "/assets/png/35-e05f12c6.png",
    t1 = "/assets/png/4-12492e70.png",
    s1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALJSURBVHgB7ZhNdhJBEMerBlzLKgFXeALZ5iUECLrICjxB4ASSExhPYDyB8QSSvXw80OeWnMBZCbpxtip0WTPDKCgz002GPGLqt4Hurv74d1V3TzeAIAiCIAiCIAiCIAiCcMvBVZmdweQTl+QhuU76R8VsRce2MxyfcY3noItFzep+7kLbHO4YSx7uup5lKEHvzjuJ9XBnODlHghohZngEGdBv3UEiJ0iRhf3qwW4zzHrJw67QpMUSqcvvaWrG2fGgM37fJmK9HjLBuL36RI3ucNILs05HtoXq9EcK22DAvan1FoEKv5uwUt+O93ZtMMSNCp2J8vukFoL1LEhHOS1GMDrHezkbDODZdWgph8rBjHO+Uy1mnwYlnfdfXrNn834ZFjyLBXT75o3OAU3SsGmIQw3mM45gL5UpKv/xBsFNkLhgnNILSsEbjuUai6iDMbyEeN0rIG2vWdNUW6VmdpAmCq+buOBKJdd3fznM8jz4NQSrq+qh/rnq97kz4p+Rju3mQzph3g0/nyOm7uva/31E3TrBSN5SyRtU2azgzmDccD9LEbB0M9uQGclvWognLLS8jWJdNh/S3lGE/XlCe+cNg1Bdhq1h3p05sqAcVT9aMFml3mAMRgMC71t4ISf629aUx8UHrbAyfzlhGSKIEUwNhdgAI64bzNajnr8P2JWif8Tp0Ps4zquZVeIxR9olv4YB+TxcuL0ougIjqM6TXOdb06j34Wuzsr8Teb66QmEKLBZrroNiGk9e8AzU6RMDz4TB39gFXpMv+W/ktZJ+whlPzoluYGkIXr5vxptrW/Jy4w1tPtBV92D2dMbzYARqiis3ML5b2yvzFxN8Cf93ngyfUNalOxhfeJ5KAp7I6kH24aqirXniYbGO75XrHF1+G2HeddkawXxPbh0dul5Rr2BdENpuG1HPSXfuEU8QBEEQBEEQBEEQBOH/4xe8WAcXsNxK+AAAAABJRU5ErkJggg==",
    n1 = "/assets/png/6-d33a01cc.png",
    a1 = "/assets/png/7-0fc3263c.png",
    o1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF7SURBVHgB7dnhUcIwFAfwfz2/wwbiBo6AE8gIbIBO4AowAbiBG9AN0AmKE9gN4kupfgpt30tpa/n/7t5x1wtJH0lDkgJERERERETUIufcTGIv8e3qHSReK+paSWQN6vFtbX3b6FrZsNY8UM/C6e1hdAO7JfQWgWtz6D3AKCZhi0ng2hR6lu8Uuk64d0x47Jjw2DHhsYtJ+Ai9r8C1D3TTdiEm4Q10cold4Po79Am8wShBhHJt7OOupuinxC5JkvxMPTOclp3+c1JRjx8hqdSTgoiuUhuT1hOqt2t+ovKTlp9sjvivJNml08kkzPvYtph7WG7+AP3Jw4v08jpQl/8hVjj9LdXxI2bT+WhxNtszdWnPtbYwusUwpGU0UfQwjAaRcLkCe0QHuFsau6E8w78biFmTsr1sHpxNW7P0M4yGMqTzC5f/EzOkfaPalVPoxKMYotJr92i48JDyllOSOHKDa6dnfifUO7n5qcTONXtdmsU8d0RERERERHRpP6UgfNRRH6+JAAAAAElFTkSuQmCC",
    A1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANtSURBVHgB7ZnhdZswEMfPff3ebBA6QbxB6AbuBEkmsDcwniDpBE4mqDsBeIK6E1iewHSCq+5JJMohKIfAdt7T7z09QAiJPzqdpAMgEolEIpFIJBIZhAmMDCKm+jDV6dYer2wiSp2UTVuddpPJpICPhhZ5pdNSpyPK2dtnE7h0AoX6WFKdMCCDmTQa013rlHhuk+kWOh102rF7VP5GJ3reJ07p9HBRpm57wkduP0TXelKdnpt6GwYguIetyc08t1TfXrHj9ycYJ+eS6TpXEEAvwfaFBvniDWy1MOrpzNNOsGgxaDzp2Ozpw+o0w7oTnMGpwObxOgYkdIpmbPP8Xt5bbNK6oXXHotQL7kttwHhrzgHaUda8F/r80cl/1vkPIKSPYHelRJS64dJTLgcz1VR8AzMldXnW24avztGnK+phZl5JQ7mclSOzzFhe1vDsva8cmjHt8gRCPkkKY30KIrNScCJsW4WTdScdyyLBUF8NvcA4tIlYsXIpCOgjuKIcY/ygWZnNWfbrctS2WTa803/5DDJufC8RwFwLvGN5CbsmL71heQW8Da1bECAVnDjnfyAc7o19+IbNgdXRGalJJ855CadhifWNg3LOExAg7eGmRkPqUJ78lF3TdLZ1fEbvjx0iOIFwXrSIjGfauT1nbdCYLULblpq0cs4HjUS42Pn2B8v+0tC2AgFSwa5nvoFxaZsF3LYVCJAKdr3jFAeON3XBtpk6WaLZQirYnQ/FqxwhfH7+a498L7wBASKnRV5Sf2HykFXPzqUNMq6xHvOiukksF1ZtFNwPoU6xW+I7nrShXN5ht9SVzNbJAwFd9+ZBgin27IZc9r6xPKDgJ6fOPbuXgBDpGAa7YXenjATGCeiRl6Z49IIutLhHeD//rvpsTftGLalHf7MXeBdNRH/EQ0G3RYNyxaBZWmbs/lc4JWiCazyauHTu59ykoQdYDxoe8Vz/nbAeiiHWaEIxeYhgNL5i7an/Hs5Ji+i8r2Bb5/HixFag8cD7EMHWKpYNQo/Yc0hwQnZLr9gFCTkl8qSNfwXQeFpyeNUS9RreVmxNy9QCjLdWMACDCCbsC323ZpeA3xtPoftyVMGl/SZtA/0LjxzbOaLwF6uUwXrYgy8q8cuTp8DseGihsfP9ifgwoJmrF2P3WiQSiUQikUgkcgb+AX5SUCuxMXRlAAAAAElFTkSuQmCC",
    i1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMZSURBVHgB7ZmBcdswDADhXAZQN2AmqDtB1QnqDepOUHcCKxM0mcDuBHEnkDtB3AnEDeINUPAspjRMSqDsk3s5/B3PoQiSgAiApAKgKIqiKIqiKIqi/Ecg4gOOR+nnvYHr8R7GY+f/mMCVcK8dxmE/mUze+cpVVjh0sRHYhZXbLklSbEk/JVweI5TbUvkDx0oXVD7CQa9CMIYFKWRwjePzQqWiUvToZlq5PhYgpZ08l2cqDQ6jxh5DE4Y3HWOW0oEKzKdp+y4wn3WHHlOneFuKTKOnIKEdPBcTKJnjHc8JQ5eJcVZ+rh59X0AK5q/SgvVfZ/Q1IF+xV2OQrV5kzhqkYN5JaBXpL/WQaoCxHidXBH2nrH3D9eralqQnIUvlnj+kzX5LE+6hf+tYs7rbCg3IcHI/aJ7fwbNwzh1IQXkMzjvG6Ns2Nkze4GWZcZ1uEooWINvUH2kl10G/GR7H1bqn/5bVl3BZrEgKZfHXsD4+9h7Y87pjjJLJNnhBYralYliyup9Y3cfeFyphxv4F6eOpZXUD6bks9PNExXtYVvz2xV7F5OeYWDns3pMNGwclcgmd+UFpE5NL3Za6MvSG4rYKJjJwGnuvyYJkXdbcJsbinmRhODxBRVc45dIm8dxS+R6R/cme7Vn9MaKQo2SKOff/FpFzW8/RmPQivzIZ/tKzXDrFHAaScOuayUgPHRXrN4/IiM/Q08QkD3AGmM4LJciNdi+NH2GLmHxKj5hLm8gzS6WC80hl/hXp96GNdeeqln7u2hUyQb8dtcXcdAWnOp+doQ2TWaKMMuhTd8i5O3TuPdit7Cox3iZnoCfWuWLt0kuBow769R1VGxRe1lsdmo6xKpCCh7d9onDblnOT8RSY9zGhxkMScrmkCOZ19QXKPjvNcgz2K9HgqSuvMB+n5JCPCeeQzNC3zCAn6GPpvk0gvs3tj3PI5zOMj0018CztjXVBv8V/K+yeVzCMEmRn80ux8xk/BjfYu8IM4iejoaRczMLlsV2N3GAD42FpJe5gZPjlYcx/cFm4Atxg2flTURRFURRFURRFeWP8BVmDq2egXi68AAAAAElFTkSuQmCC",
    l1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMZSURBVHgB7ZmBcdswDADhXAZQN2AmqDtB1QnqDepOUHcCKxM0mcDuBHEnkDtB3AnEDeINUPAspjRMSqDsk3s5/B3PoQiSgAiApAKgKIqiKIqiKIqi/Ecg4gOOR+nnvYHr8R7GY+f/mMCVcK8dxmE/mUze+cpVVjh0sRHYhZXbLklSbEk/JVweI5TbUvkDx0oXVD7CQa9CMIYFKWRwjePzQqWiUvToZlq5PhYgpZ08l2cqDQ6jxh5DE4Y3HWOW0oEKzKdp+y4wn3WHHlOneFuKTKOnIKEdPBcTKJnjHc8JQ5eJcVZ+rh59X0AK5q/SgvVfZ/Q1IF+xV2OQrV5kzhqkYN5JaBXpL/WQaoCxHidXBH2nrH3D9eralqQnIUvlnj+kzX5LE+6hf+tYs7rbCg3IcHI/aJ7fwbNwzh1IQXkMzjvG6Ns2Nkze4GWZcZ1uEooWINvUH2kl10G/GR7H1bqn/5bVl3BZrEgKZfHXsD4+9h7Y87pjjJLJNnhBYralYliyup9Y3cfeFyphxv4F6eOpZXUD6bks9PNExXtYVvz2xV7F5OeYWDns3pMNGwclcgmd+UFpE5NL3Za6MvSG4rYKJjJwGnuvyYJkXdbcJsbinmRhODxBRVc45dIm8dxS+R6R/cme7Vn9MaKQo2SKOff/FpFzW8/RmPQivzIZ/tKzXDrFHAaScOuayUgPHRXrN4/IiM/Q08QkD3AGmM4LJciNdi+NH2GLmHxKj5hLm8gzS6WC80hl/hXp96GNdeeqln7u2hUyQb8dtcXcdAWnOp+doQ2TWaKMMuhTd8i5O3TuPdit7Cox3iZnoCfWuWLt0kuBow769R1VGxRe1lsdmo6xKpCCh7d9onDblnOT8RSY9zGhxkMScrmkCOZ19QXKPjvNcgz2K9HgqSuvMB+n5JCPCeeQzNC3zCAn6GPpvk0gvs3tj3PI5zOMj0018CztjXVBv8V/K+yeVzCMEmRn80ux8xk/BjfYu8IM4iejoaRczMLlsV2N3GAD42FpJe5gZPjlYcx/cFm4Atxg2flTURRFURRFURRFeWP8BVmDq2egXi68AAAAAElFTkSuQmCC",
    r1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMZSURBVHgB7ZmBcdswDADhXAZQN2AmqDtB1QnqDepOUHcCKxM0mcDuBHEnkDtB3AnEDeINUPAspjRMSqDsk3s5/B3PoQiSgAiApAKgKIqiKIqiKIqi/Ecg4gOOR+nnvYHr8R7GY+f/mMCVcK8dxmE/mUze+cpVVjh0sRHYhZXbLklSbEk/JVweI5TbUvkDx0oXVD7CQa9CMIYFKWRwjePzQqWiUvToZlq5PhYgpZ08l2cqDQ6jxh5DE4Y3HWOW0oEKzKdp+y4wn3WHHlOneFuKTKOnIKEdPBcTKJnjHc8JQ5eJcVZ+rh59X0AK5q/SgvVfZ/Q1IF+xV2OQrV5kzhqkYN5JaBXpL/WQaoCxHidXBH2nrH3D9eralqQnIUvlnj+kzX5LE+6hf+tYs7rbCg3IcHI/aJ7fwbNwzh1IQXkMzjvG6Ns2Nkze4GWZcZ1uEooWINvUH2kl10G/GR7H1bqn/5bVl3BZrEgKZfHXsD4+9h7Y87pjjJLJNnhBYralYliyup9Y3cfeFyphxv4F6eOpZXUD6bks9PNExXtYVvz2xV7F5OeYWDns3pMNGwclcgmd+UFpE5NL3Za6MvSG4rYKJjJwGnuvyYJkXdbcJsbinmRhODxBRVc45dIm8dxS+R6R/cme7Vn9MaKQo2SKOff/FpFzW8/RmPQivzIZ/tKzXDrFHAaScOuayUgPHRXrN4/IiM/Q08QkD3AGmM4LJciNdi+NH2GLmHxKj5hLm8gzS6WC80hl/hXp96GNdeeqln7u2hUyQb8dtcXcdAWnOp+doQ2TWaKMMuhTd8i5O3TuPdit7Cox3iZnoCfWuWLt0kuBow769R1VGxRe1lsdmo6xKpCCh7d9onDblnOT8RSY9zGhxkMScrmkCOZ19QXKPjvNcgz2K9HgqSuvMB+n5JCPCeeQzNC3zCAn6GPpvk0gvs3tj3PI5zOMj0018CztjXVBv8V/K+yeVzCMEmRn80ux8xk/BjfYu8IM4iejoaRczMLlsV2N3GAD42FpJe5gZPjlYcx/cFm4Atxg2flTURRFURRFURRFeWP8BVmDq2egXi68AAAAAElFTkSuQmCC",
    c1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALrSURBVHgB7ZjhldowDIDFPf43GzS3ASNkg9IJjtuATgCdoHSC3E0AG5BOAJ0g6QTQCVSpETzFOInNy6PcVd97ejaxbEuxbIsAGIZhGIZhGIZhGIbxf4CIGck3kh3JAWu43MrzFN4L5Mwaw8jfg+Njkl+BujMSjoTPo9Fo36ZE7SsqPkAcRxrzC9wCCecYONQnHeOVGE8JN+KB3mxBZRHRJyHhbZDAG2Qs5VeSDMJJSRYkfWF4JNlDPxXcGqxP5FgSzzilas/hznhQ9WeoVySGObwxzg7TXq6gP0RdnmAAKBIWEmF/pUNvrfTm6nkiY+g8gus59l2lWJ/aJYaTOP3L2JAmvZkzZtZi14UOlU/KSR8H/XLaDEhJXnoGOjHtcHgrzvhkovokzlwrj00r1V62vIQu+qNRDJnKZFtxRqeeZY/DXSydfjrjO3hsKVV73jIX2zkRWTltbG/4VSrO88pnjiQDOewNWWlL3Ta83AZLj83zPh3wGJH3ODHICkvfg6/dce4Uzu5/gKTFBz2m/0DEuIMr63A46h7GZhju1POtOybWp3C3I5cv5vDgUeAMigdIIYyQTCqUjarzPkxl5TL1/FXK0P34W9WTsW4RZ5cQTkH3d2yy0grn9WQDj3dyhrdLpVQqyf1jaPxzO68wTTSDOGeZVxie76r+SeREoeqVqrf+e4NmpO51SC8gjgqaITgUhapn4A9n5oeqJ+hPVlJovoz9SBpmVMQm+s8UXi+eSfgUTeVnAeFRsDltDzmEMqedw/lRzcNhr+/rSmwqpJ3759Bc4cezkRjHGlrA6z4AIDbv3aWnPffM5dM7oD9DXJ46zTAOvg5aT0gcxuHE0z5pmW8VMPZKd9hiOL1fOnAAhz12lT1zzlrm5TGmrvIS+43c6Y5Y34+ctnGencKdgM3UN/XpjJRyBvVB8RHqe5APkJ/AJ5tz94nuUfT3V9yN/4wRXAHWYc0rzuVGPh4YhmEYhmEYhmEYhmHcB38AVsFdQjpOpnIAAAAASUVORK5CYII=",
    g1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALrSURBVHgB7ZjhldowDIDFPf43GzS3ASNkg9IJjtuATgCdoHSC3E0AG5BOAJ0g6QTQCVSpETzFOInNy6PcVd97ejaxbEuxbIsAGIZhGIZhGIZhGIbxf4CIGck3kh3JAWu43MrzFN4L5Mwaw8jfg+Njkl+BujMSjoTPo9Fo36ZE7SsqPkAcRxrzC9wCCecYONQnHeOVGE8JN+KB3mxBZRHRJyHhbZDAG2Qs5VeSDMJJSRYkfWF4JNlDPxXcGqxP5FgSzzilas/hznhQ9WeoVySGObwxzg7TXq6gP0RdnmAAKBIWEmF/pUNvrfTm6nkiY+g8gus59l2lWJ/aJYaTOP3L2JAmvZkzZtZi14UOlU/KSR8H/XLaDEhJXnoGOjHtcHgrzvhkovokzlwrj00r1V62vIQu+qNRDJnKZFtxRqeeZY/DXSydfjrjO3hsKVV73jIX2zkRWTltbG/4VSrO88pnjiQDOewNWWlL3Ta83AZLj83zPh3wGJH3ODHICkvfg6/dce4Uzu5/gKTFBz2m/0DEuIMr63A46h7GZhju1POtOybWp3C3I5cv5vDgUeAMigdIIYyQTCqUjarzPkxl5TL1/FXK0P34W9WTsW4RZ5cQTkH3d2yy0grn9WQDj3dyhrdLpVQqyf1jaPxzO68wTTSDOGeZVxie76r+SeREoeqVqrf+e4NmpO51SC8gjgqaITgUhapn4A9n5oeqJ+hPVlJovoz9SBpmVMQm+s8UXi+eSfgUTeVnAeFRsDltDzmEMqedw/lRzcNhr+/rSmwqpJ3759Bc4cezkRjHGlrA6z4AIDbv3aWnPffM5dM7oD9DXJ46zTAOvg5aT0gcxuHE0z5pmW8VMPZKd9hiOL1fOnAAhz12lT1zzlrm5TGmrvIS+43c6Y5Y34+ctnGencKdgM3UN/XpjJRyBvVB8RHqe5APkJ/AJ5tz94nuUfT3V9yN/4wRXAHWYc0rzuVGPh4YhmEYhmEYhmEYhmHcB38AVsFdQjpOpnIAAAAASUVORK5CYII=",
    d1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGcSURBVHgB7djhUcIwFAfwV4/v4gZ1ArqBOIk6gTiBdQLZAJiAYwLKBHUDwgTWCerL8XqnudckxUOg9//d5QLpS5vXhpKWCAAAAAAAAAAA4LIkMUF1Xb9zlQXCVkmSTDl2zZ/HgdiCY+9lv5NArOHYW9LH1LnvgOLc0D7hYcv2isuG4lVS7+hwKR0Tn9Fh3W7sxM49sTMnNvfEFva4njFNu/a9okg8NSqKZzzbdh1it4HjfnTtG51wXyDhvkPCfYeE+w4JW7xCeeay5VLKmvVsyNhCa+hWA2WHr1zlP5oybrMrrRc6MR5HytWUSyF1Z9oVflTaJr417T96oD/SEk7pDMnVPXgqN7SEjdI2DyziDR2RzK4ltT+eRtMSXjjf3zjZJz5o23Sy2w39HtyI2o3kajWxd55YkkdP+1Ihc9pDfbPmOEHOc+ZS2jS50resw0qJXQfiZvJv4VrX4b7Wpzs+9Y0HXzF7k7J3wZzLtTTbKW3PqqH9XXLBcYXSfUPhqde8HVmR/57xRfrPpXnDkpKfIQAAAAAAAAAAgAv3DYnvrcX7SHOhAAAAAElFTkSuQmCC",
    p1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALnSURBVHgB7ZfdcdswDIDhXN+rEbhBNIIzQbRB1AmcDeJOYHUCqRM0nUD2BHImkDqBvQFKVtCZpkCRlvzSC747nGzihwBNgTSAIAiCIAiCIAiCIAiCIPxfrGINETHRj1zLo5azlpSeH1r2q9Vqf0OstX48a+kozoFidBP2Ro7k02nbM2OXUtw/Wl/BXHSgFy0nvFDjmFKLCsRZa2kdHzdGwvhtmflOFGsQOz8Fc9HOGTNZjTzNRJw3JuGciVVHFuxjC0vA61/EsKNxhderOvDKxMhxXGxCupSJkTv+FcbRwBKw34LoK4pZDMO7E0Mxdi3pEk+MckbBNTKvg8tDQK884xvw8+h8zybipBM6m07Lnp5na8w0sUrLk25ST1wjc/kS0B894x8TPu4qb2bEPzjfO7I9+jr53WC2U4vUBZHfjo3lqzzbr7VsXh1dxeRQky6z4mYka7g32DedgpJLrEm5ppVbfuuIgs17nFLyqWf+lvy2VHyL193d5FHikuNoovgMx+feMOkrjBeKLVjLBsc7pOaS9vjXnvEU7gmOt+BAzthOFVx7dCc3aUffUA4Zfeb8g936loLNVjZbqwqtcETBjUdfO3MWZJ874wnyr9UWloD9O2beR+WMn6ZWGPlLxVCwIhvfGRv1KyHfOFuf/UMgmKLVNp3XPE3wF8uEO/eGPxmGDjxEHC/KymNDCxnbnLz60MXjDfp/KTZFxOr/09NFoIMF0DYuKOawmCXMJFRwxoyZSRXE8xvm0dHzmdEpmMZ74woVnNwakOiszwXczj5wTexgmoNPESp4z4x9t96/JORHtj/Az1dm7Kf1mbtmfrO+czm8wxyQv00NZ+DO011LJo45PtwjaIeXS4xNwfjaNiX23V95cqhhCcj/vauRx9vQKPEqEKeIzKFF/jiq8V6XDux/DZNwYyVqJv2F1h07Is6a4pzwci82FxkV8DMLluPlwtJaMYz/GgRBEARBEARBEARBEITPwF+ey98hJ3b0CAAAAABJRU5ErkJggg==",
    _1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMESURBVHgB7ZiLkZswEIbXNynAHRwdxB2EqyBOBaGDuAPTgZ0K7KvAlwpwKvClAkgFOBVstNHqWGQBApzJZGa/mR2DHr9WD6SVARRFURRFURRFURRFUZT/nEVfJiIm5mdt7NHYkpN/GHtdLBZnGEGH1k/WeoEJsOZn1k1Y90qaxp6N7jFWKDVWYD+lsexOWrWxA3cg1sctDlMaW/eJLI3tcBxlyNEZWuuIzhaBujXXD7Hp6uwlILInJ9DOFNnG2ClQbnUnrbCDjbY/iHvZNpdZBzqf+kJ+wzk53tNw4omuZmpdeh2Et89DkkEPJv8oypYyIxMZrdkagkWzDq2g45EO1v4gYXsp5xF6/kpbu4xSJG5gBnO1PAdzz/nb2RrWkxNw8BMKmME9tLC9bOuO9OhjzB+oB5P2UeR/hXlIrWeYAJ/vZ34lZ9NAsRri9a7ynTqciPczzCMRz5OCCeabeI7eTyJIHoRg5Y/GBJzWdaaWrOs2rleRNnhWO/wV8gB/h7kDdwMP4JlflyM2xJ18eWesArsUE5hP5bRosyAneYRp5mmmHr3y1IlfYGePYuqK05deGQftCyk/b2nzEnVuMPlbaH8SlX+2pTADbAccKafVGE/BO33R5ZOXV4dmGm0gE4rgCsrciIQTzADtBaARt2k5Tqfu6Ezpl+OBILv06O0XaKMZOsjdMnoae/VzjpifC7SX4xPYJfkF7FWwClSleh+gWfYSqvvJ94fbysFeDftwn8Nb35yAnIUSR1zTuP4KwzeVUVrYfY3cYSAWRxuMnPD2sym5T/Ki0Yqll9h2mJ6zCAep3tZrjBy4jNHCuKtkrw7apZ6wVkgvC1UovUIF2k1kJRxLOO2AtyNbiDIxWjRD24BO3qHhOr7jukvP/zXn+Xr7vlEKNRLD/k5aG08nw+k+EUcYYmQjBfZcJ0dodepgs6pidBzBI2voTzwK4VJj76H5g4zsz59vxl5iQ0hPy0F1v7NOFamTsg7t7Ak0AZPz7Sw07x7xKYqiKIqiKIqiKIqiKP+c31538oDRetHhAAAAAElFTkSuQmCC",
    u1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA8CAYAAADRy2JxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMqSURBVHgB7ZjRcdswDEAhXf+bTlBmgjoTVJ0g7gR2J6g7QdwJ7Exge4IkE8SZIOoEYiaIOgELWNQZpklRjO3r+YJ3h5MMQSBBgiRkAEEQBEEQBEEQBEEQBOE8yNobY8wYLyOUAcoFSolyj3KbZVltbejZLOCrtLaa+VzgRXlsyd8D2i650rEnX/eoo77cQbhN8rN2/DxCBHznW2s8M2GemdPCxBkx+ypiW9ngfPZjq1Mmzo0TfBSyy/E6xOukY5AGaNP13GXOA4qgIm33ZYptFpBIjnLNfmuUT5gStBxumf468D6lzhXKL6ajwIce298ol/Yd3cM3RNr84eiHAfvvtl1XNsErZrhq1zeyZnoVcKzRvkSZQ7P+uuzJVtv1yQe2b5a4bS6dPn4M2Ne23R2hBx+cjvKOaNjOkIY4NfSH2yp4Oy+H+KHgS/bil/YBjS7Y9DgTNCRCaf/EfheJm9sxKOHtfGb3fyARmvklyk/Yzj4de6848ys4HV/Z/QukcY39+2t9FFanoalJfNBRqdjvmu1rTfFCATtH4V4GmP1zXlm9ct6fWH3FdHcodCS5NcWA+ef2Y+a7i4r7sO90sV8AoXLoMbyJBF9ZcQdOeYLxMXT8c/txz+CJ2UHBs+DcQEYdwfuYB4Lx8WzSKzzKoIW9ciaB4CtHQqWydwm8th003cFXxlkqxp/2S+e9aWLwitnPmf4xEHwRijV3FfaIcyu20AlA1RYdh1QVXtpiJwR9gExRxnjPN9PUCo/DT4oBJLKp7WmUrWwceKqnUAfbiimlwAHoVz32QbP71Epxc9TNWAeo/m5H8wG2R4mC05Hc6WORdzxLnc3/gYIDoJnXzAkVEHObxjzVD6nCjg1tgJsrNMVZS9lhr1wlLVcKnjafwupozVfWOU/HU1Z7MdxlEfqXJtTHRUCf5XZzWzmN7XzduX83HQGdYNtnT1hHThovNPOUArTTr6FJo/bI0NAMCndaw/ZT9wLi+0LIlnRtmtaUlvYbuxVg9jXsDlbNnpH+yTM5JWwHjb+rQGjIqKqC9wd92V1R8AbeIfQ/ZQ6CIAiCIAiCIAiCIAjCefAPqX9cvacpc0IAAAAASUVORK5CYII=",
    v1 = "/assets/png/21-445197ac.png",
    m1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMZSURBVHgB7ZmLcdswDEDhXAdQN2AnsDNB1AnqDepO0HaCOBM4G8idoM4ElidwMoHUCepOgAIRdbYV8CvZse/47nBMGBIkCBAkFYBEIpFIJBKJRCKR8GAEPUHECRU5yZiEf85I1EGTHcmzLjck5Wg0eoZrgozMSO5JthhHRfKdRMGloyf6F4fjHgLBZsEVSa5lAkOjB1jjaajQ4W02Ct1RxX9bYN/I0as4pFclWP/EYOgawylQMNyZtKjTVyqW4E9J8gL7RMXSJjI26A6Ok9oh3PaWklqtx15Q8QPc1AfSovh30vUNfMEmjH08W5HMSTJPvRwxS4OuLbq3D8/pkWTqO6avsRXa4YF9PGAbY43+cNscTgE2m9/GqydgALCJjvcxVE9AOSbA4ThMKO3HlBJjrwgKGbywGLuFE6GNbqnwHBcTbA51U6I6+STYozqEB42glpEw4JSK34b2PynNP4IDPVnWw/drBc1x1MJHT03yRLIifTuLDu73xaCD5Rc0d/MaYsEm3Yve9exfoD+VXuCujpDra799juZjovDo60p2JvKOnhjijEbz2Zt79I01mL2U9TSYdSjXHG+EOiU1pH1SQhxLkluST7rkq15337KxM4uOjaCjFnSEe9mwel5HEcoengntcqHdyjKHwnMsZ565AT92MCA6Wro6xxCAzsxlp5oXwXqc+Rpcw/DUnd8VhPNHqAs2uIbzMETU1EKdsnW48ZzIR7hMJG9aF1Iy+EWoC9pfnnS/bsR4XJpXbesgGVwKdc5kEILO3F19GwhAn7l5p7o2XVVbJINXhraxXwbHeHypyKlYBIzLZIKOtdCuhBhQvl7OPfrF3rSqjp5YlGuOpmPpSai7g9PxAP15iH41oflNnDn6hXpYfOlgOHPoCymZCYpnEG5whW8/nnMdP0OVQY+0MFs8dgLrKHDIb134di8XEG7wDAIRdDifpr64rpbdV8kUrhyrwToJfIa90Rme8nPpGXA+HgSjY8/ji+CDTyM2mjzLD28O6RKuGC+DGX1lW0I4MXfk9h9wLf8gkUgkEolEIpFIvCv/AVU9+VnOW6UJAAAAAElFTkSuQmCC",
    h1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMVSURBVHgBvVjhVeMwDFZ4/X9sQG4C2ICwQW8CygSwQcMEcBMUJjiYoLkJoBPEN0F7EwipVkBVlDRNGr73/NLKtvTFlmQ5CfQAImb0OKfGzwtqp9IYG2pBWkFtlSRJAWOByJxSm1Nb4+EoZW4Kx8JAQh7mrHOf3WQPqYweC2qp081bVlBbQdw2DR5fbbVHgsff9NpieTMPSyHcVU9G7alp9ZrmJQ3K+C2nTlfo68jiX38gBotGTjrvoYmYTGx8gyOgIALPZCd37LjkKmIljo+SF4DaFOvBNPVIzfH7wIQuMPqelX8GSiLEFtAN/FY6yl4gRqfFP2hHKdt6R78flPyJ5DeamM7cjA0NqBmkcUuIKaDCFbX3jnNdG57OzwDDejin4ABjqtDg7ciNLG+YO/PGYfQ5jUeWn8ibXCsdvJwBvgliq1Cia+Z0ArvLyHiGcdB2DN2bcZeW2GaMSgDjSXFrxG/VD7Gp/fJqAvFMq/AOw3FLRLRrWKdn8AnyamQFfJ02l0wsVZ0rGA6PiIXnLjrFbH0sVQIvJ42BOdYPcG07nZjOAMMRwNeTmf+cZv4qn96ZY4mlMBzPZCy3QsmNS2ODfarwbPNWBvV/b2XZF5KvfhvxjwbbgYnpSDyHcdEW9dr2lpiOhgvsUI8fG2IzU6IVE3tRgm3WhfEwM///y9PWYi8TjgpivIGvPeZS5BX64wzrd4LqPLYEHuWpE3LQ1YWtEDJw0LG66IpcdE6NfKEN8t1Rl7ql52tHJPaodJamL2U5+xhIYadDmTvHuJhwVM7I3p2QeoDd/HVflVz6lsQr9GYG7txe0K9gA3RLzEHXeRiPpNz0/3RnYrwk2NvLXBOzWwk9gPXLzxr3fdfAegnMWGAsgZdDiGH05YWjf9ZVQRO5ZV9ionPdm5RSxBFXDiEmqzxvILRumz9p6pDEy87NkTNtMc6hz4dxdbSdQUyoGTQXBQXErz0BDiUm5AI9fslyp+BHX/W5qQsC9P381Ab0E+wS27HGAz9dMSZwGLzS2ztXA8RkyneId+9mfnRgzHW3fVbhEHwAFCZQOroQMr4AAAAASUVORK5CYII=",
    w1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHrSURBVHgB7ZmBTcMwEEV/EAN0A9IJgAkIE1AmoIzACEzACJQNOoLZIJ2gYQOYIJxVRzEWjXru2XWle9LJTatIff2OfVYBRVEURVEURVFiqHCG9H0/o2FBdUc1q6rq8dB7L3EGeILXbqy9j59x7lhBqgXVG9W2388WTIpI2CV4Q/VA1bjXh2DA5CTPcCBoxwZxzOn57Tg3ZEnYE7SLTIN4QZ8VV9aSTJgkG4yCVnYGWT4QgdiUdoL+NJUW9Oko3TkiiE44s2DIKyJhJUySSxqekF/Q0lJ9Uq0pXYNIuMI98jEIGlsk+Q0BSuq0kgiGnFI4i2BITuGTCIakFBYTdI0LJH4kSWFDtaFaU7XcL+ekaow7wLW7HuoeEb1zyDGrtAFTkG6v8VdoaDlrTG9z0Y1GCDfhF+ym6r+CLiVf4gpjajXiiW40QtitpUsplBpSq5EG9qloH6yE3YG7Rl5WUrKWkjutgVsSbiHEBcrGSMpaSheOOvNOUUIvbVf7DrvV/8eN9r1W8tkdyCXcYRTZuNFed7lbTCnhrCkdA1fYYCf2hVEwe0oKA+4+/I4M0IxJ9vcJd0ovkZ4VElJipzVPudCV1niY1Kt6acLinVVISVNa7JA/RUkJix3yp+AKd0iDbVwMFEVRFEVRFEUpll89TtE+6KRNLAAAAABJRU5ErkJggg==",
    b1 = "/assets/png/26-443407d9.png",
    C1 = "/assets/png/27-4ed9e7d3.png",
    y1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK0SURBVHgB7Zj/cdpQDMcF1//DBvEGZYPQDegEpROUTlAzQboBZALoBHYmCJkAdwLcCV6f4CtQhMFOguFyp8+dzpal90N+z9IDIsdxHMdxHMdxHMdxHMdxPh4hhDS85ClKX9mzcMgUtlWoJoG9r9pzv0PVbwLbGvJL2WYVfbLv6Mh406rYutQMDjaTSb8VtM+iDFS/8/hc9HvYehB+8Sm1jVrhhVmRMeyiD7EqLD0JCrLSPqbfOXzm0H9DF3jMMe7XaDszvpsxIYnyz/R8LHUrvO50Ost4fYRuOymjvYCU/EB062PaPePZM/SbKAnuC4y5aDImhPsqxUHPx/KJmpHQeUiMnuO6pAvRNOBWiKuQE4JW33GrdONA9w38SjoPBa63dGECMj5/w+Og0n/LyIsbvjfjvwbEl/K9bGnOnrzFJsa3jx3wDXph7D/UVlzG9gs6zSwKD86JiLPpl4qEVsedKlWcnGannHWwTIfzuLLzBHK8/cQ2xje3OTzQYfZ8kZ3FR9qo59yurx4tJaPi5ZXI0rvv+sScdmOqfvUzPtTM1fw7pGpfqiYl9XKF+5XUQNgz6FPY06BOTPCRNgMzSTJ1eo1aOpAxlU+QBVF1OFNjjlSfI7GbsVLdj2zpSQw+pUNyfh59i3jPR7XPxv5gV7AJvAK8nePtE213yoial6bHI3M9NlaKWHdJa/KaDs4Ftt0fqAm1COLb5KfuNYJVFLjeUMtInBc9eOA758SSv+VTOAeXPmlxwFLicroCdQH3UA7uoP8z9iTsDxDlsQO7Quy3aCdJ8C/tt3cPJU3GLKhtwuEfAMII9qzCNjV9rGxZCtuffZZ12P98zCrsKWwzrVfMubIsWZr+AVBE+Vl3qqkDB4qvtC9BOevqwPI9ygNtdwLL5MpJ1XEcx3Ecx3Ecx3Ecx3Guzn/XjS0WXRNi4wAAAABJRU5ErkJggg==",
    f1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKBSURBVHgB7ZqBcdswDEW/ex3AG5SdINmg6gTtCMoEzQZxJ2g3qDdoN7A6QZwJ5A3sDRDgRF8YWrIpRQQthe+OJ5KhQ0EkABECkMlkMplTiOg7lz2XX3gPsKBrsjh9P+QBcDGYGyzUyspb23ZBL/yBEh+hxGKxEIG3XK1sl0ECPkCXA5clEqImMK/uPV82XGrZzkiE5grfOnXDZee0n6CEmg77sE5XvNKfuWqkDiW0ddjnlU6LexKLLT4bU0d02HFDxvbVtr2y7aOv3mNq8E2XdrWM01e4Bsv3w20vJ2MTU4fdl4k7p74785sVFxH2PyJxrW7pgEikdEttrLiUeL07RiW1le4i2tvYaDrM2/RBruxTfwYM/8bjbwLGwW7/A//fLa4Fe9Y9Utq+TgvcwsaOeXStNF9unTEFRmCsFT63BeVhiNX9cmZM0eGKQvS+F4N0mO9taVfVBAyXhyGrHDLWnUPGf3rj3CcMXeFHNAJUXL56f7uhcSIYNfrPHQdX+Wy7pPiUbXP35VrdUjSmJPADWWv+FhYYgLedxD8aJAjdsG/uff9jCJyMIQLHPC2tO/pLr12h/QRVIFFk84QQk9rjt2XHuPXQOc6RrfTcSRG1vPPaFRRRF5gN6xoJyTo8d7LRik2L391qhm9SWGk/IikxMDWBsw7PnZinpV1Hv/HaB7R/aVjiwpEzHw8DyDocSIX0/IMW1MSGf1M6JAVKPxuImhSFv6THhq4ha4+auHRN8agpYapTJ/SSXjgWe0q1fUOhZptfjEcFIKpiMBWo+eBVU3/kk2mBqUJNulIdIKhs33vMAbq8zcXFqejpoFfLoVidLLkc0x0kx7LSTD3MZDLT5hnkj9yOIOEXhQAAAABJRU5ErkJggg==",
    B1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL9SURBVHgB7ZqNsdowDMd1nYARMgIbNBs0GzQblA1gg7BB3gZvhNybgG7gvgnoBv9GF1FCkD9C4uTg+XfnO7BlW7ItWQkQJRKJRCKReDkAbNqSt6Vqy7kthr8rchk6mrYcNJmnoFX8hHt2ilyuyDUUiW8Uj01g3TZQbhZiGvyh1H1X6n4odb8pEpMMFj/dsR8qzZrSW+4zqMsVuQ9lrkzmirb7TkQBIz7HQWmrtGvkPZnCIpM55jotbrTs7DAosULlQM7AEZDaz7XSfhqMUciC3shAP1VxQHeF2KgvyqC7ZjR4wWwn4Ch9WaaCnWiRXDN4Bz91W0pL2wH67jLs53vc7+rdGLQkDmNC8Bnj61vSGqDbDYPlMBgExzWMZl98Q3waLByock97iTi7bQLmnnfXcfVXI58zj2yD6TRtKRzzcBTf4xoPdjQXuDfAyGQbR5+sZ3xIkGKZd3iyKcXQ/wtEMxmbOZQ0CIiYoqCPfcA4BdxuMz0DQ9j1U9smCzTWaTS6Xa0D+k8/1mJwyJE06Pk2/JmSjWowfz+PdsE6FjQXCIvC3L4VJU8e5YxnnEzG8i12I7rFeaDA9OvHiDEhO3f2jFPSEuDxZOPmKQfhx3XIEWs8F8P+NKTxpimJztfHLF5FSyHK8dXAwagZoaQ3emLc4p1Ehxxz7zS6ZMDgsSccViw47cPjR/wsc73TVPCYodyHM6bLe+mgXRDZS4ZmMJ4zTQXjji4bykeTr5O6V+/1O9ze2bUs1m6k4dPTS3QR0TsROt++5LkaPx1z2LK5qtfewM+RpmJRxuD6CmczkLe9/uHdz5TxM9jd5qDI8pwc1bXEZnqmhW7XSinae2WtT2MxwPT7y9jGIusNQLj+flUgZrYVqIjNkKonVzkWJqNnAu48mI/9L9jJ6BmB259tzPfmYg0wLm2s6dmB25/7sMw6QWdu4L56AMuV9dTA/aqopFcE+v283I9iFPcfABqfSt0fWpClDV6dZPCrkwx+dZY2+K9S90mJRCKRSCS+BP8A6hc45+tUCh0AAAAASUVORK5CYII=",
    R1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAsCAYAAAAJpsrIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANfSURBVHgBtVmNldowDBb3OgCdoOkEzQbNBpdOcOkExwbQCY4NYANggqQTHJ3AdALaCVTrRS7GJ/kHct97eiGxLH2WbfmHGUwARKzso7Yyt1J5RSeW42w2+wPvDUtkbqWxsrFyxjwY1m9hajChZQGZGMklR/puUlMQkggu4BZQq6y84vvCYEn0rPITlkXpzE6clJJLjz+r9JxhjIisrXSotBjHiLdWtpjXyKd7SJGDlZU5FADHydNhOpqtVLlOVFqXEhJ8VGxHg5mFFeyjh+sk6UAJ8ptNlIPijMg2Vj5Z+cifz1Z+gZJgKXr28QJjYo62ZKu1gCKp1KFE22MaO9IV6lMPhWNvEzrQUAsGq0xCEsFKIEcpybDNuV9oFEOLzFaWwKDSA1J3SNhkkspJwGfhvU4R08ZWBW+7zwh6LabRKGSrGDEJUrR2gl7PZT3q2LCO0eqXdGOTqbfg8g51NKyzzvEFEeVzZrQINZdTVpcmhPFsaF3eS8R6QXEf6MwVgybQWwk6Txl2CFdJ9gHkrHsM3rXZMziH/L4Oyk9WDk6Hs/+g2PoKAbFKUDpBATELilQjOB7oG45jqONvPxVbnyEglrMgazrOCbXW7Qh+eOXu97OVR/49QIaPD3A7aGE+4eWERDluRYu8fQ6k4JUTabeIH/l3NCAPXoUYJB0XrYaf5MgtXzSu3HhbuXKvu48pHxqxKng/CTpu5j5639wM3FoCB/7tD+oGLsRDXJNFOT8l04VXZoKixisLk65bJepUuihJsL3gQFoN+gjp/wTwOhnvQXB4y5LklqGFUncesfvIdbeaL8IDXGZJiKX/wlvqgV9dbtJONES8U8parut87rXteum2J2eDWHKfUYEG1MPeC7r37l7RI5+1i+0VA9rW2uDtyCOViJpoBMdu3WE5epSHyJqllsjtIuSqSINyCPaYf3xrwgMv5ZhX0A+83+0M2isEqS619gtcH3h/A+8yhDo0q2npCtfNgxaBGJZ4/xUB5bmXiI+9VrFLkDMYu5WJE1piela3MSMrTMMg36ti/Bqqw/z72g4yWtjifRd3pXUbyAXqh9wp0eOtF8U4dq3BaUFRWsC9wDF6UxC86UYyl6S7VzWZZEiPMnuTY38GEwAvybWCS3Km5PoXxsQ8lP5l8w9KoeguCvL40AAAAABJRU5ErkJggg==",
    E1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMOSURBVHgB7ZqLcdswDEDhTuARuEG1QdQJmk5gbRBvYHmCuhPYmcDNBHYmiDegNkg2QMET1DA8fkRakuU7vjucLBGkAAGkSMoAmUwmk8lkMpnMICxgZBCxpENB8sDHJYvig6RheSU5LxaLC9wb5OSSZEMiMR5JUpEIuAfY0Xe8HqnagrmiIkLyhsMjcW7RJoNW6I7qjqTEtPTuUG0/whxgZ13sNb01Xs8Kbol66gEDhaZb4TDcxmls+6xvcNob+kM5rO4pIJFvkM4JPt+nNrYwDuqeR0gkyWFsXxfCo3KgCUQD41GQDTVMAaeyDKSdsNQbKqX11F7G2p8S4RLGj25D8ovEN81Uzq5hbFKiy/ViXksF1wm9BSREEhVhNkR4VHzR7Zt+jbaACC0kVPcqIYLYlC49ZWrl82VkTuljxEv3o2fXKCCCWIcfPGV/dAOxnQqmvD52xnkT0C8hgliHheO6SsO6O+F+/Bv86W/jbIlqKK2/QwRDOfzDOF+x7gfE8Wy59hqoE9VtYh22Nb41UlnQoebTGIdVlhy4DbWB8MTXQxEe1WGTi57KzBOkoQ94JcmOBz3lcGymOIl1WL9xA+3k4D8c3ZR1a0Ny1s67FdEjPVB1z0tPm4Jc4/DWMsB0fTdU1+S5a8t4aD/5+OKp28BYkDFHnuHsLGW2OfZJK3fNpSV+XTfvjXLBfdq1FP0LY4Ht9FA6yjYWY960ctc0sdJ0hKX8BP4HNt58mhov0L4Scm0GSKOus5x19g6nNly+s5RFzbQGwWOoYsk6S0uZ0NoQ6OfIOid0PLCpnA0ZWmi6urG10Y7EfuiZVMHU9DC01nRLvnYw2thgPBKn3q/uaejJqFOY55hGDVOC4cW5ztrRRp/tIhs367t9vyEpvcqoX2LaN6irtmmvdTp2Y05iO9qeMJ3bfnLB4XcjfVQwB7Dtz0N8InXxPhtnOzB9AAqhPsEKmCtkXD2Q4yqqNdwD2Ea7wvS/PKiHlrLjGWSKP7WoiUYJ7Y6nYNH/1NIt8NXeldpBOUMmk8lkMplMJjN//gF0UPOBrBte+wAAAABJRU5ErkJggg==",
    D1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHhSURBVHgB7ZjhVcIwEMevPr/LCN1ANqBOIE5gmUDcQDdwA3ACcQIZASYgG8gG8fIanjGPNDlMK8L/9969EnrJ5ZLLJSkRAAAAAAAAAAAAADhFtNYbnZcPge0nLaMmARd0ZhRuwcys/VlSXpZFUdy0KbDtF37csgyspLK14tqaJNXU3bBgKRNsz3U+gkvoMtKPR5YFyXhjGTrlTx5xRXKWLGkzRTRleXDKZUgx5vBW2lke3a33V+WMuGnvztGdOZ0b+m2l2t5jM0jM4RyU9O2U8t5VlD9ftNKFw88sr9QkoDHJMUvonX4mopQ6yikH62Z3mMNwaZ42UR3i8JrbmEsqsP6KH6sU3T5COiu62b6uUvX9LerfOUzNUikF+t06rJujXskyoiOkixm+pyb7HiV9hLSi5hBhkGTeECaDh9ZwSZHBjjk84hAlIf45OP1smwC3NQ29s8upohZiDtdW+uTadlzttrgU7DYYzRtdhLTZD93QXZOMsZUVOzGxe2wQ66gRk71rkqDzUAnsbfSBtx6njdZblq+fMsP+fTMnyvm97x480PGr5VVC2/sJDFJNPaDz3oc3ITvH9InHRJGi30XTrg2VpK3/cIadPkg/4rnMYu2f3Uc8AAAAAAAAAAAAgNPjC/DU4rAqMkoaAAAAAElFTkSuQmCC",
    I1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALbSURBVHgB7ZntcdswDIbhXv9HI6gTxBuUmaDeoO4EcSdIMoHTCZxMkHYCqRPUmUDewN4AJU9yToZfipSoxnWC544nCwQ/IBIgJBMpiqIoiqIoiqIox0xoAMy8sJdlQO2HLRe2GEojp37sbCnd+JPJpKSxsEYX3I2xJbdly6djSWMRYUzW6C34tKxoLGxnc88ghdAr+LSY/VwG+bA0ho791PnPoqWT20sldDZU+5okJ7/fbzxt9rhdNQPy0s7nisaA8eoZoTMFOquOPp27PIA224j5mCHtorAdZYzJhB7a+vOI/p848DA97SrZaF/3gdKYApnbPjsh+4L0KMwdxY0Z4mU+qQYjf3kGMjnJtX0oGwpgddZU+22bvKsN1/FC6qz3P1INvgSykg4nMO2awAAufBXNdi9A1SONQaT/onN41mOMSrTdNjJZfDlBRWPAOBr+AXoo8OQ9xknFtPtL2dIGyH5H6EX5r4MjInKA7zKfTjH4M5CV7ZtmwpnQ6eO/XymNayn4SMMxQFaKe3SE/KIImm0/F+IdtY4YQUbHD9clMCb5ramH/xY80H85IoMDbe5BmwWlwjjy3gO9beihePq/Af0Hoy3XKWnnvIb6cDBzYuy/KKiRaHdjL7eg6huFyYDs4Nwe6sMwpRT3JkLnBa7Pb2cs2oJ3kX6IFuKZUuA0/82AXtZs4YoxTxFzcn0sPe3ztu6QFUari44aI+5ddHVJSFuWU8Q3K65fJVEUDvXxEHvmdw2OMqeZ0DF8eioGJ8KQoGWATK5wdK78j9jYcoVWt5fB7MmcQMeXdDpK8hjr6OvDKNU7WF2uA5Oh18XFh5+2PIaiebTB1hCXl85B1cG7pvvaYXU/0euxA19Y4uE6W5kK2bUnMBR07lgjVo0x+xftro/tOZ0z7P+wjrilc6bZytW7MNbBcX+HuO2d/rr1P9Cs8KIxvO23FdfZlavLSFEURVEURVEURXmD/AXAFsDlNK8DQwAAAABJRU5ErkJggg==",
    S1 = "/assets/png/7-50491f4f.png",
    L1 = "/assets/png/CStype1-4ef936a9.png",
    G1 = "/assets/png/CStype2-6a0db738.png",
    k1 = "/assets/png/CStype3-34fcaa9b.png",
    U1 = "/assets/png/CStype4-d7b94bf8.png",
    M1 = "/assets/png/CStype5-a7a08bc9.png",
    T1 = "/assets/png/CStype6-fcf3ce23.png",
    Q1 = "/assets/png/CStype7-a1a65ced.png",
    V1 = "/assets/png/EmailIcon-4cb8279d.png",
    O1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABRklEQVR4Aa2VzW2DMBSA3zNIVW8ZgW7QERihG5QV8teWU+GEQpWGThBG6AZxJ2CEZAQubaUq8asNJE1RIA74O3CwrQ/8CdkIEnqJXGDMBSE4Tn0OPUGK41uwITuMEKTwswvR9zfQEQYW3f1/DXhwZa1pPnumRTCADrDGGcQA6DqjeeSBMWlpdgCtJb3O1hRFDpiRHsmLJPFSR64p3buL3pnqbU5aMlC9iyQNvbtIK7DqHa/qSXpID7j13iakJUVvtpJZ7m0wCjrykZj70j9yw1LMgXahQal4A/y8wbGfmmj6of5bHD7x/UAf6QYEDXHy+F6f6CBV3eRW2XeCkyA/teIyKcoDHLYhjtoPcF1p1W3KdRafkaqtym7jhxQuwG6WqW5fCY5Od2uXCsblPXV8Psqtbr1z3dpA9aCFvFGFvAAZ47rd2vgFQjh6PRqvw0EAAAAASUVORK5CYII=",
    P1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC1klEQVR4Ae2ZQXLTMBiFnzwcoHABwg3CDFk33TTs2m1XDScg7QVI9kxqTkB7g3SZbPC+zAA3MCfAB2AknuKE0NSyLFlpzNTfTCaOZCvv/fplSzLQ0vK0EdgBajTqs+lTtn4IhYxFP1g6E3GcIDBBDFDwARCd8vCQLervA8OpGQ0lgLzlcUJDKWribYCiu/w6YRN9CH68GlEJr6cZqc18hweVDeRRRjdPDXEOc5Q9USmUSGjmxiXVSg2sUmPIoxOK1hEPLNpI5VQzGlCjyxFrr9AElBzTxKSoqtAAIz+EiD6jSSh5QRPxdnFUeLIQ79E08nH3gMhwdheNo1hThP+c1sC+aYaB3pv848Ez7JvjY+DtYPP77itc2G8PbIv3mJrtz8C2+PmC0b+DK/sxUCR+PocPJgM/YcN34PmLT4sKDYNY/WI+voQJLfzsLD9+/gJYLFCJWpEXWVFpcQ8ovQQsbWxzqAVpYTZqp40szArTXKh8daQH2/yfqNtMhMh5VazJYCCyL++0gComgg1YmRSVGgz81gYy2LCZCHi3MS0zI8PJmTWN/ooymAgonvlza6oxTyWUmECoPqqwFjZYRf/e0xU1xS+1zExV5Yv6i0veTh0W8oPBxsSauuJ5/xdX01emyvInscAnuLCdTvXF61v6pKzavq0iom887MCFXi//9pjbbFEafU1pDywHs4rewRUtvL54a/Q11smciD8m7KcZHhuBaxFPr22nVZuNSql7IcXjkfI/rdHXuOyNdlbjYdfbi0xb+brqznXl9cCyQSWPUOUJ7Y8Wf+Sy7e68hltuq4voC8L3xFq80za71/uBVTppEx2EIXWN/BqvJeUmndQN6qLvcA45//DymnAbnjvZ+AD33sh43URMpzFqEOodGVNKjNncebULFKcoapzPeusR9C2lxQgHqU45FYd4ubdmV69ZOxxefbY+5C+mCtcWUsYhIt7S0nKfP3FZG2VwWyZlAAAAAElFTkSuQmCC",
    F1 = "/assets/png/GoogleTip-e9f496ce.png",
    x1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAfCAMAAADOWS1PAAAAPFBMVEUAAAD7WVn5WFj6WVn5WFj5WVn5WFj4WFj6WFj5WFj5Wlr5WVn6WVn4WVn8V1f/YGD4Wlr6XFz/UFD5WVmiIy06AAAAE3RSTlMAH99fn89/v48/7++/r08Qby8QpzlMxQAAAJZJREFUKM+t0tsOgyAQRdEDw0UQa9v5/3+thtATS+ep3W+64kTI4N3znlWjOHxWtlV74QawRzreMx/Gp5J1KsopSb+2AKJGgmhRhpr9iYJbDAr8Z0zi/CBLSFuJlCsJ9thlIu+wU0jdhpBolF8uKlvSUCwScwESjmSdocopPA6LXNQ0bRMTT6hcXw7lsGuJw6akaW2Fzy9JNyvfb+KcygAAAABJRU5ErkJggg==",
    N1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA1CAMAAAA9D+hBAAAAh1BMVEUAAADExMTDw8PExMTDw8PDw8PDw8PExMS7u7vExMS7u7vExMTExMTExMTExMTExMTExMTExMS/v7/ExMTExMTExMTExMTExMTDw8PExMTBwcHExMTDw8PExMTExMTExMTExMTExMTExMTCwsLBwcHFxcXExMTExMTExMTExMTExMTDw8PExMQaV91nAAAALHRSTlMA7zb9zmidEAX5CeWBwEPcWfMTpuCKcEksJQurfXVOMurIuSAXwrCF1pVSPJVeoSsAAAJCSURBVEjHpZbrcrIwEIY3okA4yFGQAopWa23f+7++b6aK+9FNxJm+vzThmd1kswcyyN9XblwqrVUZu9WeXpG/axUmUu3On4G8PgSQuKu6yX0/b+qVmwAI+7dnllYDkHTNdLXpEmBYWS0uPoHDl2nn6wB8LsxUp1GmZFFaQvckFbTA9ckJ3lygFY56MbKpf9LTDLH3y1aMcDZA+xBxMFn5QPhOs3oP8UHEiqC29IK2Ch3/WzvOeo6QXwYJotEN813yeoRkPN4Fy/vNbjAYg3rF0Nwf0hKX26+Txvd9WwPKwLnAw59v6NPdRDvuH8HclMLjSO3NXKDw+NBbMjehnBW/XKiAiFKciQQnKNYZ6Y9jvCY5SdEKR6JA65wkZ6co1zqgNQ5EBk5QrAPWFGFDRs5K0QYRFUjJzNkoSlHQEnuycBaKFljSgBOZOcdC0QkhZQjIzNkoekNGDsikXAHAhoyCQxmMueICHAeDtRAnG8WcPNsSlkxxeo6fuEkRN44yx0/GjV+JoIg5+UpqHCwUc/JNcgYIysbljg443wQlOc43zm5JSY6zm2uJpCTHtYQuXLk2IyW5htvF5XbEjOvkSEmO62SWjwV6rMrHkZLc+lGVO9ED/FTkLK9zD/hTxyGKMLzc3/7UTbl3b2dtce/mSQGqfk7teFJg+QVw9e1QcAUK036vkeysphLo3j5zxTsjdOaZS8qvFJBE2183ESWAqnyyy+tCAGVRjfNkVZQ/86Q3N73WRYaJsqIWlozk4v9ZeWFi/gEGqk9C9PxgTQAAAABJRU5ErkJggg==",
    H1 = "/assets/png/promptImg-ab477516.png",
    Y1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAKlBMVEUAAABlZWVlZWVmZmZnZ2dlZWVnZ2dmZmZmZmZmZmZlZWVlZWVkZGRmZmYneegcAAAADXRSTlMA739fv78/38+fbx8QysQzOAAAAJdJREFUOMtjGAVDDhyqvTEbmziz7N27Fxcgi6TKBoOotXeB4DKSABOQr8DAwA3UANRyAC7AYAukrzEwcAIpkAhcgMEXSF9lYOCASBTABRjAJjAw8EIkLsAFGMBmIyRgAnCd7BCJBoRRuRBXMkEkJkAFEM7lgTh3A8K5DCYX3Rigzr57Cy6AAFygIDHAFlg7e6/rMIyCoQYA2Ml+MQB4FKsAAAAASUVORK5CYII=",
    W1 = "/assets/png/superjackpotHome-8c77b68c.png",
    J1 = "/assets/png/wallet-3843efe8.png",
    K1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABLFBMVEUAAABWq/cklOgglOxowPwfj+dFovE5nO04m+0xmew5m+1XrPg4m+0mlek3mu04mu9PsPdes/k3muwklehXrPgzmesllegklekkleg4m+03m+1ju/o3nO1Vq/cjlOc3m+0kk+k6ne88nO4ik+gslus1muoflOgqmOwklehTqvZJpPNnv/tPp/Utl+o6nO04nO1owPwlleg4nO1mvPppwf1XrPhWrPhpwfxnwPtJpfFWq/g7nO45nO5VrPcllOg8ne03m+1mv/xSqvY3m+0jlOo5m+04m+xnvfo4mu9iu/k9nu4ikuk3ne5kufpMo/RNrPkzmekeh+JZrfg6nO0llehrwvw5nO0nluhovvtcsfg1muwzmetkuvpWq/dMpvM8ne4sl+pOp/RBoO8xmOq4KPWpAAAAUnRSTlMA3PIE3Qr++PE0++LXr6AaE/7+9vTx7NbMxqaNgHx1aGVjWlpLMDAn/vz5+Pfx7+3o5uLd1dTPycK6tLKvqKeemZiTioNwbmFgVlFEPDMvKCMIMc9d+QAAAU5JREFUOMutkcdywjAQQBccG9Nr6L2E9N5779UyNiEEAvn/f4gktMHj8XDiHXR5b1czEkybSO7kbZJ/WI9qiUvJefbl7mK71dUoicPCY1O2ytz+3lKL0dYEQ2KsZUKAzLQEn8J/9wnFYw/a6LUesQfocYFT0EWNC4g6DsQ40iecWUC2ulHNguLL5EOGNXBpVnq+OtwTyopzMDgLQ0ml3nA7Bss3ABXC+LIFu352LlYlqK4yb5i2wP9acC0oJYBnz2iBbg14EY5UriSQA8ZogSXYYa83UI7YP0shwv2PricBOVCGhJEFgIYqLtD1FCB5IrgFyPJ55vVTQLwY+BrvBvMd5udr8M85FpvH4n5KWh4HckAEfNzkPtkEC14VfYeOc8pCYUF3xGKdX1PoeBFshIMmlYi7LoGdj3IadTw4B47UNrhPMe2M/HQdLHphuvwB79aSdAqUQVEAAAAASUVORK5CYII=",
    X1 = "/assets/png/Group-74b890b6.png",
    j1 = "/assets/png/Grouptip-2ccf91bd.png",
    z1 = "/assets/png/SuperJackpotBg-d3b3a41e.png",
    Z1 = "/assets/svg/close-f63083a1.svg",
    q1 = "/assets/png/icon-7ea83c3d.png",
    $1 = "/assets/png/nodata-5eb76d23.png",
    ev = "/assets/png/succeed-620aa289.png",
    tv = "/assets/png/rulebg-bafcfc52.png",
    sv = "/assets/png/TotalAssetsBg-f0487246.png",
    nv = "/assets/png/VipIcon-5415bca6.png",
    av = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAV1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////+ORg7oAAAAHHRSTlMA+zuYNEsVBe5pxagOeHMlH+Pg0760yoC6LJBe84F9gAAAAUtJREFUOMu1VNmWgjAMpQstlFXFFpz+/3dOwtGmEB084zFPXW6T3Js0xfdtLOuuq8vxb5RU53i3s5IvYaWLG3PlU5hpIrPGcJw+4Y2YemmsNbKfBO5PmmVXIUwNdDIohFZy5w9xF707vCByc2gw7rXdh2mvGD3Ps0GcTVtrHgtENpkuGLfN8hXh4ROjk0oOeOiNf5HyBEYueYBXqiALMfq0UXApaS2GDGjrMJJKgrxAfafX9Z+g7vd+Aed9Lors1ULbHq7HxFmSAh4LkmUiE+8aViTqEmYoR14MuK7XVQcrEnt9OOfU4LrbAkmEGwNSaDIf4w8LTWTIA5Ah0kSGyaNBfltweUhw4uKY4M9KqKhkeQl5U7iVJGsK3mYVyGjbhbUZa1wPGxFvrHHZV9Czb4JmX+H9z3X8Xf8zAI5HyvGQ+mTs8UH65mj+uv0CnO4onHK5fEQAAAAASUVORK5CYII=",
    ov = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAnCAYAAACmE6CaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKRSURBVHgB1ZhPbtpAFIffmEqAsuEIZFmpVcMJSnaEdkFPEHqCtieAniDcILkB2SU7egMqaNRlc4RIJTIO2K/v2XJDzDP+MzbYvxWesWfmg483tgFKnuXs7EJBSWP+7jSVrcaIcGJACWPOP7bBVhMG4OPSQSzn3S8A9gQQmn5baXTCP72G9dcaoIKvwb5SQGz6L/UXXqeg/1IKDSH5L6WQOrH/y8enC0Dsxzm/cBBR/kupQIHC/qMDE/rYTHJdYf4Tvv8KsAEJc3Cdkvov5aAQ7D+Xz6jqE5WD6eT6vzamugCcg0BYd91BWv+l7FWnLPyXsjeIrPyXshedrNlZT9d/peCncuCb1Jc7BPvvKBjr+M8A1VX1tPbuZkQqft7qh5zC/psL65Im6IFGfADVun7w28xZp08dl/7xK8gh7P/y0aLqo+e/BODGMN7TL/J8CBnn6deH80zqv4J7XOGnIIBbngPVLVMInsBG50ryH0E9xB6IAGCFp/XW7X1wfMfB4fbpGcSt/wtrTB/bsGNRJG+fDgY7B0sI4F2imcj6H1iUOe8MQ0FSAHC0dIrlP5XEzUXV394OqfH71nkpAbxLU4ZfH0qvT8TFVWhxr18u7sUvogHgXZ4wkf7Ls4SDKHWuA+ANnyCLu+5JBXGcqnyGgOC015DKaFwAb+iYYf/XiCOt22cCqR1VW+r4OrTcJgXwho2R2P7HmZB34SPahQUQ/qJ4n4GE2Qnhls+1e4/ShgwjgaQFcMcL69DyP87EGyA6AO5YUiO/PnEAhlk9PoZOTiCA6goBR5AyyM8ZwcYs/d9LaDP9D5GX/7mGql39zc2x+zzB/oONvIE1oSzxbyopBvtfcXCa1x84h/zge6/aqtryd/l/LAKq982EA9oAAAAASUVORK5CYII=",
    Av = "/assets/png/avatorBg-342f9869.png",
    iv = "/assets/png/00-0e1f691c.png",
    lv = "/assets/png/01-66379825.png",
    rv = "/assets/png/02-3ff6d8bf.png",
    cv = "/assets/png/03-b6a88365.png",
    gv = "/assets/png/04-7552f3d2.png",
    dv = "/assets/png/05-122f27af.png",
    pv = "/assets/png/06-899ffc38.png",
    _v = "/assets/png/07-5b7c2a16.png",
    uv = "/assets/png/08-503471fb.png",
    vv = "/assets/png/09-61dbda55.png",
    mv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAXVBMVEUAAAD/cXL/cXL/cHL/cXL/cXP/cXH/cXL/cHL/cHD/cHL/cHD/////cXL/env/uLn/g4T/29z/29v/lJX/9vf/7e7/7e3/09P/ysr/ycr/wcL/pqf/lZX/r7D/r6/hxXGbAAAADHRSTlMA369g78+QgFAQcHADMg5FAAAAuklEQVQY002QVxbEIAhFUdMnEE3v+1/mIInG+8PjWo4CQt1ohZhrAx9VRtfm3HJYFXVB3dg+7FQ+rrRzG5lt4Z0hcdFSxVLtPvcD4bD61GU1GCsJhY7jSA3og8OKL46bW0O+cB2CHPwOBbKIAfLX4yMp2keqNT1+crPkoG+uLsiNm0PDj8b0SYw1UGeSthPpdPJ95UdEU5swkZEh2SlxNoyJ9leNHRXwYpQ9lr7fLsoq+DA6R1S6qaX7AxMpETByKqHKAAAAAElFTkSuQmCC",
    hv = "/assets/png/betInfoStep-698278be.png",
    wv = "/assets/png/betResultStep-e52796e2.png",
    bv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAEDCAMAAAAC89SoAAAAnFBMVEUAAAD6mZr/jIz6mZr7mZr7mZr5mZn6mJr6l5r6mZn5mZn/cXL/cnL7mZr/cXP/cHH5mZn5mZn5mJn/cHH/cHP/cXH/cXL/cXH/cHD/cHL/cnL////6mZr/cXL7n6D+5ub9y8z/8vP92dn7s7P7pqf/+Pn+0tP+4OD8xcb8v8D/env/3Nz/7e7/uLn/lJX/g4T/wcL/r6//pqf/pqbfa1MpAAAAG3RSTlMA3xDvr4+Ab2BfUN+vz2/P36+vX0A/74BQj4/3THh8AAABtklEQVRYw+2TW3OCMBSED1GrNohVWi+FhMhNDQpe/v9/a04gODo8OOO004fsC8uXcCZZZkGLeC5ljLo+3LRayLMoivxS0Rav5TELap3ksmbL6hC0OlTfyHyJ7EblSkF6Ql+UkpUC3XFBwK+0Y1pHZTPpgXtRRrBGhXo5uzDN1bM0sMQdFPQiM5I4ntVQtrSGVDx+nk/BPeOigbjj6oIns/sjBZUPZKGdKJksC319ihE9XtPXId0HYmKSpwZlR7mGRj6trnlRiLNcYEQtdqf4OzwCfyDaBaddkHRB9jR0u+DnazO9TvjazK/Ow782kzwdMoXfFxn2nTB0+mO46b3Hd3EUbffpR4sHXJi+5/ytZm/pJmi1SQfIRhzZjfJ3BZ0cfZTwMInRiR6BUapdqCWwDHwI/b0ycdgoUi+7OUy26pkYmOAOB/RiaMRxfFhD3tIaOvHj59sJ9He4aCDu2M9hyLP7IwXpGEhPuzgJeRKhyz8wosdrjnVI94GYmHhu+i74ABqNnHS/jaJ4x3sYUYtnE/U7ZkNiq22rbattq237bvtu+277bvtu+277bvtu+277bvv+//r+Awjx2Q1hutuMAAAAAElFTkSuQmCC",
    Cv = "/assets/png/betSportStep-b95593dd.png",
    yv = "/assets/png/bindemailsuccess-e72ac2a3.png",
    fv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXYAAAAwCAMAAAAy9qGSAAAAeFBMVEUuQdsoO9cvQdsvQdsuQdouQNojNsotP9ouQdsvQdsuQNovQdsuQdovQdstP9ovQdsvQdovQdsuQNouQdotQNksPtgvQdsvQdsvQdssPdgsPdouQdsvQdsvQdwvQdsvQdsvQdsvQdstP9gvQdsAAAAvQdsvQNopPdqsIPiIAAAAKHRSTlNPDpCbPDcJKVWwSpZftSOrg2taRS4fi3ZvGhZjpqKHfnpAMp8Ac2cSEk/gswAAAVZJREFUeNrs1ElOw1AURFGnt+OQvsWQBrC9/x1S9w0ZhIAAEf06Y1v6Kl297C0MRTpo2/YRB9lgGkZY40UGoY+LrDAOWcixxCRU0jTNAnup63qHs5xkjqNs0Q0leniVZ3mSGQo8hFBgBj7hU/3RCyW6YStHmeMkZ9mJXrPHAnpmJRMskSMLY6xwkX4YgE3WGGGKDQ5gTa3aCUMwO2L0K7OPvjR7/mH26huzl7fPXlyfHX84Oz6b/a5rL26tvfsDtef/ufbMtbt21/5rtcO1u/Zkavdtd+3p1O7b7trTqd233bWnU7tvu2tPp3bfdteeTu2+7a49ndp92117OrX7trv2dGr3bX9vp45pAABgGIbxZz0I/fbEFCIrtHe0ezvtHe3eTntHu7fT3tHu7bR3tHs77R3t3k57R7u3097R7u20d7R7O+0d7d5Oe0e7t9P+p31nj719Zj95BtJ64qyn6QAAAABJRU5ErkJggg==",
    Bv = "/assets/png/bxxSecurity-9f66c4ce.png",
    Rv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASgAAAAzCAMAAAATv2XHAAAASFBMVEUAAAAiKDIiKDMUGyUfJS8fJi8iKDIiKDIiKDIhJzEhJzEfJDAhKDIhKDEhKDEiKDIiJzEiKDMiKDEdJi4hJzIgJzAgIDAjKTNN5X9jAAAAF3RSTlMA+u0HJzjT9a6SfzCZtkLoh97FHqhPEKrSXisAAAE4SURBVGje7dpZbsMwDATQ0Wpb3peE979pmyZ14ECy+Z95RxAkgiIHeW5zIIVGGtC1m4jcQFdWKyJ2BV1Y5GEBnUvylEBngpEnE0Bl91n+zXdQ0SZvGyjPDZ18vWqM9TQ4lPmuEnqpOo88Xwsd1LmjcpMR+mAmhw/rIpSxrDgIo1DWGA7nxCJeVAXsvBUqsh4vLgqdiG6f0tGpBn9a9gUXTIuHXuhCj1+t0KUWAH/BCh3g2BooWIdBSGFAElJI4GxFpQa7cpUI1nIVC7blKoYHpWP49HQsi7lOZHugU7Ph1En8wugM/BSrWMcxi0rHwZ1Oy1GwSs/lgoppua5SabgAVYmOK3UN6xnSUIc0doF3qsAGHHjWqazoGU3URRMZdlWoi7nghgnF3dh4nAipn6svf4SmmvsUcPQDZQo9Jx0hRL0AAAAASUVORK5CYII=",
    Ev = "/assets/png/chessStepIcon-41ce8df1.png",
    Dv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAZsZA300mkEYzLKAaOg0HCeixNQAAAHhJREFUSMft0kkOgCAQRFERaQZxuP9pNURB7IUMicHYb1UhfFZ05PsWzZ1pLogFO4iCmHkUtx2bEMPjXR5T7ELx2O01zbJo9BczCIprYlUTm4wS/zkL0CcCsB2yJtqvUkzxD2M5+iXDWWLsJloUtxMPJzfx8pOQl2xLYTYBDYqlkQAAAABJRU5ErkJggg==",
    Iv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA1CAMAAAA9D+hBAAAAh1BMVEUAAADExMTDw8PExMTDw8PDw8PDw8PExMS7u7vExMS7u7vExMTExMTExMTExMTExMTExMTExMS/v7/ExMTExMTExMTExMTExMTDw8PExMTBwcHExMTDw8PExMTExMTExMTExMTExMTExMTCwsLBwcHFxcXExMTExMTExMTExMTExMTDw8PExMQaV91nAAAALHRSTlMA7zb9zmidEAX5CeWBwEPcWfMTpuCKcEksJQurfXVOMurIuSAXwrCF1pVSPJVeoSsAAAJCSURBVEjHpZbrcrIwEIY3okA4yFGQAopWa23f+7++b6aK+9FNxJm+vzThmd1kswcyyN9XblwqrVUZu9WeXpG/axUmUu3On4G8PgSQuKu6yX0/b+qVmwAI+7dnllYDkHTNdLXpEmBYWS0uPoHDl2nn6wB8LsxUp1GmZFFaQvckFbTA9ckJ3lygFY56MbKpf9LTDLH3y1aMcDZA+xBxMFn5QPhOs3oP8UHEiqC29IK2Ch3/WzvOeo6QXwYJotEN813yeoRkPN4Fy/vNbjAYg3rF0Nwf0hKX26+Txvd9WwPKwLnAw59v6NPdRDvuH8HclMLjSO3NXKDw+NBbMjehnBW/XKiAiFKciQQnKNYZ6Y9jvCY5SdEKR6JA65wkZ6co1zqgNQ5EBk5QrAPWFGFDRs5K0QYRFUjJzNkoSlHQEnuycBaKFljSgBOZOcdC0QkhZQjIzNkoekNGDsikXAHAhoyCQxmMueICHAeDtRAnG8WcPNsSlkxxeo6fuEkRN44yx0/GjV+JoIg5+UpqHCwUc/JNcgYIysbljg443wQlOc43zm5JSY6zm2uJpCTHtYQuXLk2IyW5htvF5XbEjOvkSEmO62SWjwV6rMrHkZLc+lGVO9ED/FTkLK9zD/hTxyGKMLzc3/7UTbl3b2dtce/mSQGqfk7teFJg+QVw9e1QcAUK036vkeysphLo3j5zxTsjdOaZS8qvFJBE2183ESWAqnyyy+tCAGVRjfNkVZQ/86Q3N73WRYaJsqIWlozk4v9ZeWFi/gEGqk9C9PxgTQAAAABJRU5ErkJggg==",
    Sv = "/assets/png/cps-517a609a.png",
    Lv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAABPUlEQVR4Xu3XQU7CUBDGcY7AwgO40o0mJlyAXcsjmPK0EF2xYu0RvIneQG/CUTzC+CQZFzNpKdhX3jy/XzIbkmbmny6A0QgAAAAgF1T6DZVL6jQz/yKfNyeEvKuwpnH+TT5vDoLbBsEGIbhtEGwQgtsGwQZlFUxldUnu8bV1Zg87FdY0xXKnnpcTdso7BkOF/1BHx56i+pR3DIZcfRfe4Jc6Ktb87Ao75R2DGiw6hVgWPTqlWBYtOsVY1nt0yrGst2gLsezP0ZZi2cnRFmPZ0dGWY1nn6Bxi2cHonGJZY3SOsUxF5xzLfqP/Qyzb/4+eTsfycwAAgA7IrZ6o9NukJ9wo7z5Z+IHwrBakNuFGeTcAADCar29oXk2ijFtfyX1nRYvFhfqa6HvCDrn3rOi+vlZvpq9x9a3cBwAAOfoGv1+Cdxt0SHQAAAAASUVORK5CYII=",
    Gv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAv98ggO+QEM9wYDCgr49QQNrxpMAAAACPSURBVFjD7dRJEsQgDENRxRAIhB58/8v2CRwpvUz57UWx+GWklNJD1U2xCgJv12wIHC6KvrC5xhAou0sGIqf0QkVsOtdwZTjzYimQ/dFBNL9iBdQie6rHPe0nFN088IGmmBoAT5Lv9SQb7phiQHqS1nFTJQFwjey5JQdET9zEf7qxAHiSZM/NNr5IKaUk+gFLVCWn5STHqAAAAABJRU5ErkJggg==",
    kv = "/assets/png/gift-eb0b4c14.png",
    Uv = "/assets/png/giftFolder-dfad8ecb.png",
    Mv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAXVBMVEUAAABBnf9Anv9Anv8/nf8/nv8+nf84j/9Anv8/nf8/nf8/n/8+nv89nv8/nv8/nv9An/8/nf8+nf8/nf8+nf89nf8+nf8/m/86ov8+mf9Anv8/nv9Anv9Bov9Ep/9vpdDiAAAAHHRSTlMAmu+LSMBSB+F9XZNvMNfQpHU5noJoQiQYD/XLuVSGDwAAAO5JREFUOMvtlElygzAQRRsUjchMBpvY+rr/MSMGVZCSkMrCi7j8Nurf/UpQWjQ9kqvWl33u9RDyV5gPlGOMQoWI5p1yLNQUprjLJZ7hOikL1JTjMK1COV/CUYdjPkXmncDXokMpicekMWSihLvEWTPgvtaT8j1lCPimssaYsXRwrLOdPjceY/LZtxnBgxFwn9y4WUbbrS0CO6UiqrYSG+0iwqUUREXWwiL630X/b0RXpszPk7Uc/ZG22GOITNJoKeKP/9G/xOcR1bGoKMKORUYReTsU5X5F/SyiT7Ztje9F1Nd871m2IYhErO2JHsYHoNlWuWXuvI0AAAAASUVORK5CYII=",
    Tv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADPUlEQVR4Ae2Zv3LaQBDGv8Vu3JGUoYgydh97JqQNaUy6JE/gvIFlXsDQZ4A8QfATmBY3hjakcHo8IYVdeuhIkdFlTwIHpJO0EgIV4TcDaO5WYr+7vT97ArZs+b8hrBFl20Wg8IEv34DUIf+dxdfFWfUYSo359wdbdqnd7iMFaxHAjlv8aBtEJ/jncNxdWlCDhXSQgMwFKLvGjuMcYscDT0gkJDMBXrjQJbd6BVmgnDqLaMSZZSLADRmi61mMZ4dCm9rNsyiTArKAuOVBFrKGYHPjnEeZrCxA1Wr8B3SIdUGFOouohFZjBbzQKfzE2nEH9hGPiYm/ZrUeoJ2v2Ahk8ZdtqkktwJvrVQWbggqnpuJdpH+inch8fx+oHgOlErC3B4xGwHDIn+/SJxT1WPCv2OkFEG8PpByz4++qy2UHB97nyVPg6goySG9L+oslqUJotmjJZp7yq6Dzi+g63TsyXvoL0o4BS2xZLsfbVKsQQWT5i1IK2JXvc3SYxFF6BiGWvyCblTiK6TTeRg/qlKQU8GciNr27j7e5vYWQzBYyuYBeL97m2xAyaOwvSSWA5+IxpCJ06/YipkldNxQKIHXjL0q/Dig14FnhvchW98LDA/C67E2Z09/A/Z1XPhKHD+Bg4C9KJcDdgSrInJ/jrrrSUAnD6ftLEofQzPk6Ng2hMwvdJRIJyM15jeMY00uxgFydV07D1PoaUUKTq/NQN9RqHYXVxvZAvs67h18fowwiBeTd8hw6b8NCZ06ogHxjXn3hT6zzGuMYyNH5AVSBD7Q+96U3BARwsvKJ88+oZH3CrXPBd+qk5gQSp4DnCM8hfvHzusBON4njc4IrMdFp5B0KZ9RuddzLWo0HGcIPnrzpr+5eulnc7kIW5+5ox6ajkiQYthKxqeJjMkPNZp1FwChiwXnX1nO0j4wxDeLoFuGTZ27NR5FaBJctr5I+59eJQYD70iGKIo+R61ARG3ReExSg9BuTWMwilPNik85rDD0QzHpCCIoQzNtZYxoDY8jRIi6RIwYBDs/JCXJe5VwgRwIC3OmO9yCQ9MSGB6yJ0O20d/q8w/HNr0e9V6R6/tdHe/qXl3yHX/+0u9iyZUuu/AW9dDOLGD5cYgAAAABJRU5ErkJggg==",
    Qv = "/assets/png/googleVerheader-b9375c0e.png",
    Vv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAYFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////98JRy6AAAAH3RSTlMAlzdnx6OLIPrS6thwsXUXBpJSMBzv4bqrhGFazEso2tRSMwAAAOhJREFUOMvd1MluwyAUheFrnHABD3Hmqe15/7esMXWxIsNllUX+hRHyJwQSgkKskjHFnhaZ7HN2PYTa4E5GguY0wRZwimIVUJFPA1si5eYl936ehrQF9vFHEob5O+H9oougRvhI8AzfWYZjBkAJbJQtgg3TzkpQT44mWeUgdx2H23LrOAlf+2yodLdJ5BbwekWmCMXaBbT3OtmB/qF5kFSAPZVBN4zjsV7twQt4885grbDK8qU4IBXHx+xrHAa9Wa+lvxQARSVZoNnJLOzuUjPJaeRrjrPsTV5qmvupHNKZb4oNrJL5k/4C+UNAbfOVnw8AAAAASUVORK5CYII=",
    Ov = "/assets/png/gverifyDownload-ca7bd1c2.png",
    Pv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAa5JREFUSEvVlr9PFFEUhb8DBvBHQwwSVCr+AwpDZ6kQCwMNCbGTylAQCSTaUJAYA1qaaEEs7CkEY0LN/0EoaUg2KGgWjrnkDVlwdnZnshTc8s2d88097937RlxxqEjfdhdwEyjMu6Rh4EjSaaw3fdF2PPsKPKsA2AZmJJ0UAbqBXeBhBRd/Afcl1VpZ9Ah4CoRV7cQTYAz4DQy1BLSj2JhjewFYzQXYXgaWgL6SwsfAe0nLTQG2byW/B0qKZ+l/JPUVAe4Ae0B/RQCSdG0ANWAdmAKGs4o7VcEJ8FzSpu23wEpVQLR7HbjR0MWxtihpzfYgsAOMVAVsAK+Aj8B0EglbXgK9wE/gceOBKGvRN0kvbN8GfiSh8RhiwGdg9vJpKwuISTgn6ZPte2dTUdq3PQ98yBt+CfAaWAMOgQfno8J2Xh/8BSYlbQXA9gQQ1vXk9UoCjALf0/5Mx8g+G3ZNAPHoAAjhqCisutusEQOQtOID6hfugwJA242dAf7bmxYVdAzQkWGXuzfZou136fhFc5WJaMgvkt4UApJVUUm7t1emdyopbrDcKPO3UKaq89x/x1/fGcMGcgoAAAAASUVORK5CYII=",
    Fv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAJFBMVEX///8AAAD///////////////////////////////////////9l1p1dAAAADHRSTlN6AGUYYDQ6D0tBDS+ZfrdRAAAAyElEQVQ4y+3ROw7CMAwGYCeUga0BKgRTunaCG5SBnUocoEyscAMeF4AjwAk4IsEuckPcSmwM9fC31afUSQyGanTWlyqpPnAFgBulB1PYTcoBpQfznvsPPDEXdThuXZSAeaqDPbjYA2ZaAT9iShWsQOAV3IOAevCuCLxdbSCo1RseIFTmwEqgDST8pQy/FzCWYQmxDOpPoekczSc3VgKNtytAhvNg8OYhVjtIPTr4EfIQIoR1CH2EYQgpwsx+g74jmCT3ISraRvsCRCgvCdUAK6UAAAAASUVORK5CYII=",
    xv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEX///8AAAD///////////////////////////////////////////////////////9PNSPeAAAAEHRSTlN6AF08HgwHbRZHTEJxaVlSg0VbpQAAANVJREFUOMudlD0KwkAQhZ8GiaaIvqCCXQKCrXY2FgoewBNIPEFOIIIX0Bt4BL2EjY1HkkSEZTOvMF/7sT8zO29BQUNxnsHhuPyJDTymXzFBjWspxmldtHOCCQwyghdL9IghTNZIbJHhZIsu7gD6O5bsHREgBdBhxcgRMQpbhIC/1WvLEvhEOW2xoC0iCvEkV1UbffFgInrEuS3Id2A6Ei0ODJGLFeIMcStZh65c90p3130PSQGTEKktYohCAzlwckT1UPMmYsCDuZOMmg6njrP+AAT/iw+kBSsdmw7VUQAAAABJRU5ErkJggg==",
    Nv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAilBMVEX///8AAAABAQEAAAADAwMBAQH////x8fGxsbHs7Oz////a2trY2Nj8/Pz6+vr29vaioqL////6+vr8/Pz////29vb7+/v6+vrb29v4+PiNjY3v7++0tLT+/v7Nzc3u7u7BwcHFxcWdnZ329vbm5ubm5ub39/fj4+Pu7u6Li4vy8vJhYWE8PDzT09OVdoUHAAAALnRSTlN6AAkEBg5xSRU2dz05bmBPBGloY3RXRDooIhQTCFk2LCgfHhoNRkA/MRoYERELaaMOvwAAAZtJREFUSMeV09migiAUheHlRi01x+Z5PFPD+7/eIRS0goL/MvfHjgvgOaYHxXE+P9mDYhqCtz5agnOFuvi7sAAsiqHKlh/BbY1u4e8HMA/xVL56A4oJXiuPRrAcQlc8NYBoBEPZSQNuY5gLty9gnkKT5u6Qt/1UeZZAc1vD3ZkEvyNYtT7VYALb0uUdRLCvLDysQjg0ZdjCpZJhAqdWyN1AH99wKfYxcwKZDypdwIADlxUZcUA/sK1acOAT7YawadS7kAC8wyZJkhTG8iQZ7K7E5xmYEBQEQQdUX5tNMo7bu/LPJOY5UCJEU5wEokPVAmrmPXhMEgV+gqA+4i+UQIzz+foBceF3QHqlpuALdVF9PPNqIJa0ICfVrgXieAnEEgV6Yr1Y+qeAmDcDn/E46Usg5xXwHoD4zNh7wB5As7UDvHegOe4TSCXwLcGwBd4TmGlBzwwWD0B+3RvBmLSAxgYQ74lpwaLSgwH5OnAX2SNgdzAakPxHEqgVRNEQyFqwRZgf7vNaIARd9rPOhj7x5AIF1ApfvSv1i3w4qn/UoBT88WE5BgAAAABJRU5ErkJggg==",
    Hv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAb1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v0wLRAAAAJHRSTlMAS/Fv1hH26uO+WRrGloZ9QDQiBuy2rI5RLwvaoWM5KbB2zJy6xP5/AAABRUlEQVRIx7XU15KDIBiG4U8WLNh71Gjaf//XuMk4FtxoYGbzHPMOZQB8hx8WrEygTTJ6siU0RTRiDXSIK008aDh1tEjxSVrSWo1DQgakcvKD0dbZoT+SncHJrSzonQgbuW/FFbdpT4C17Kdy6RjLMRMeaWiALKquVwuwSIdEwujpRzeIEZBR8EBhFpRgZkFgGnDTwDUNHNOg+PoMLhyzoINnFngYHKPgDPi3MAwT/cs30QxOmIma2/RRhjWRyqjs2OGpviEaGVedvbPnhRgEVnwr8tjRFjAQu4fSVyJ5VhunxeJCL7Y3QGlu7u7fWkxvStXG8yx2hrVqWacqnSYJoTjRiLfYuIwFF1DkrvLjKgV/jc+w0U9LTbHV9nXfYivnNLrn0JMsd1LTY1pUAz2Czw9LU8po1ECT5YxBD11ZHXDOvQv+yy9qGKLfMum7OAAAAABJRU5ErkJggg==",
    Yv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAPFBMVEX///8AAAD///////////////////////////////////////////////////////////////////////+em3UEAAAAFHRSTlN6AAZ2cVYkakFONC1dZEg3Ew8fG1sMEiIAAAFLSURBVEjHpdRBtoMgDAXQNCEggiJ2/3v9/TStiiB4+iYO9B4IJsDjnDiyITI8YuHlGaAlkNCMbaAV7GKeLaAJDqH1GjwJsqjlCqCBU6YrMEAhYx2gKgFTBw6KWavAlsFQBaYMuAqoDEwVQDnqxxXaNfgfT6n9H3TzT09jipGa271khNd7KV8iiG5262OVk2XnuDEPEpdPnK5P3Dq700yr10wvinUB6EmWjxYOtwZOAGB0BnB+F5iulWXw6qV9iP9vpBaLe4D+M8CfEhHlySDxuAO8bdodT83kYwGn2fcav3Vx1lMCFsr6n4PWLlgFx9AiwEJn7Bsg9QLCBBx0Rycw94MhAe4HnMDUD3wC/ia4v6XhbtH67rGigs4oaY2he0cCepdQKKC3OfQ2QHPfhgR0ivl4awRqdHbIr5loLwjZWLjIYmBTQGQ4xO2rP/mFCj6obphNAAAAAElFTkSuQmCC",
    Wv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAclBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9eWEHEAAAAJXRSTlMA+e8Ms29I5uBSjCMVB9XHpYVd2r919Lqqn5hiK5NBOB0QzGl3Kk0zoAAAAW5JREFUSMellOuSgjAMRhssUOSOIIp437z/Ky7SrgVsa5g9f5xxcmxjv4QZuPk8BBD8mTAKSQGogPPme30Q4gRx/VYfAc7YX9z1V8AFXuyq3wj84OESSjTwdBzgmQRhF05oJLAKB7OwtQo7s9BaBTALO6uAZsK1J4i1PdRWoSD8S/97h/teVmT+SKh7trHVXeqg+A7hrn60YQNndVzqnDeQVYfq1KoJ6pmTCnAGBPbaS1e9zvBmjzzMdB8eItNlMjWOic4sdMnQe/aK01JJO9nguIn6Mt8Pdv3z8lMu5eNmNmo1SrL475tUfbaoyKdGq5fEad7XJF61ZfbzKH33xXFKyRQ9LFYRb6KoaorlSoBYh5TGUW1foAog+66QjHyNji7IUarpAh+FB13IRyFfK/C1V9rShVIGgC4EMtoeEvFSRriTIX0J8Yjw/p58ejAUZ2IuNEditjU+oBP4WJhx4VCgiNknt4YLgwSCNzdd9Qt6s7piiQeIGgAAAABJRU5ErkJggg==",
    Jv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAbFBMVEU/n/8AAAA9nv85l/8qjv8/nv89nv8+nv8/nv85nP85m/8+nv8+nv8/nv89nf87nP8/nv8zmP8/nv8/nv89nf87m/85nP8/nv8+nv86nf8/nv8+nv8+nf8/nv8+nv8+nf8+nv8+nv88nf9Anv+V/OxkAAAAI3RSTlNNAEcOBPZWd94XH4q4q0As1AnKoDspJe5mMeivYJbCkIFwNnO3LYEAAAIDSURBVEjHlZZZcoMwDEC9YTD7HiBbE93/jlWgrmw3NMP7gRi9kYSFJ4wHKFP1gr0QYk4VDwkENZbMRVTyXyEVLEQMaldQT/aOUu4IsmTvEeatIG05+mIjJ8020jdCI2zUKcq2uwJqq5o/gurtsxhgM84Ai00hZCgMVHIBANkaD1/UOQm2AeL8MnJMRPHYhi/MjAXGVhghlBUoAZFTPKVwhZEF3ACuwVLvCt6WZUVR1AA3vMRuTQ0JjRv/AOKkGWFIMK5wOZFQuw8qEvwWdBzHOfaAF+2uP0kYmG9o3eGm4cWfWhIqr6SESsq9ndgR4r2mxV4PRdu2mKXGS+ZtBAkpC8Ee4uBLlYoE81F4Nt60KvFBGDBIsqlUdjT6UJiSVntzp9aXd1UoBE2Uc/UMEo44PB2saBTcmsTYrD9TV5kxPrcbYz+gKjizJBlYuOrghwUFm0LMEm/Mpcvvxtkagasx7aQVeLoeovJrHdXEUJG4LCKwJP5Rqe0YTfbF9RhfLfDLDQUKb8FyX48FMZtX7gSI7FcwjxqIB8al6ywo5sZH4yZI0Z3AXR9sVpGDy5WjIKfzAj7Zz6u91/76Yl5CDiGJvsTXPIkgZOIoSFr/RKGOCbXkh4Rk4IeEpOKHhJvhh4R7w48IieD8gLDEkh8Q6ocM/gmcYZeoznpbPAmqZHsYTpBwkG9Qy2nc3O7RigAAAABJRU5ErkJggg==",
    Kv = "/assets/png/invitationBonus-70e655b8.png",
    Xv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAUVBMVEUAAADKwPTMw/Szpe/NxfTOxPS+s/Cwou2woO7NxfOrnuvKwfO2seuxo+7Qx/SypO6xou7Hu/LPxvTPx/Sxo+7OxfK0pu+4rO+/tPDEufK7rvBYqEcBAAAAFnRSTlMA/nb79u/ZrXRRMisO1dT173Nh0c1y5mFbegAAANJJREFUOMuNlFkSgyAQREdwBRFcwnb/g6aiVYIh0X7fr5piYJouiL5TmnOtul7QH0bWOnviWjb+slgTos2IoWGFJKfKO3vB+WqSV2uoU1QeWA+5tZxRReCSZSWr9M48WSer9GpJB2tIVumF9bBYFe0NsWL7VBtvb/HNZ85zcWRx7ExEbbQPxJZIOPuIE9RbgJ46ROtIIZoijWiaOKJxVDOIZsArgAMBxws+Fvb04EcCvyX0yV+0MwErAywgts5YOeBVgxcXXoN4qaaK3gznZvuu6DfORF8BdsKDuQAAAABJRU5ErkJggg==",
    jv = "/assets/png/invitation_bg-6384fc13.png",
    zv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAaVBMVEUAAAAqxZ8rxp8qxZ8pxZ8pxZ8qxZ8pxZ4qxZ8qxp8pxZ8oxJ4pxZ4oxZsqxZ8qxp8qxZ8myJ8qxZ8qxZ8oxZ8qxZ8pxJ4pxp8oxZ8pxZ8mxp8nv50oxJ0ow50lxZsqxp8rxZ8sy6QtzqcQ+LruAAAAIHRSTlMA7PbAlXjxTcqOhj5XJbmwpRD35kbdnH9xbDMNYh0Y1b9QnfUAAAFzSURBVDjLjZTpsoMgDIVBxKV117YuXRLe/yFvq1SDpHc8P5wxfCwJJ4idulS1TXBRaSf+0y1AsMJA/8SyBhzJM8+FCDthynElMCqZ9YBVuOdi5EHMdmBABpUiP43LaTIUuNNODhiRkV6IHoh+nVB+ApKcMuZSRhPN8Tgy69wrARN7Ot1N39DUabtsQkDJnVuclmhEQmhDNeVqmyH6ILQUbL20SZKXLXYhZaDJWK1+SbeLYh2h/bs6sQXPVheDFY7cFeLH1OMn+bOfIN3IPMWoDIaTyL9gz9usKsy8cliQnA8Z12uwK8/djjUXhgfbVXPcg3sA8srj7hC7T4rs30H0kwkAy1qILkwkgkzSN/BQSGxCTYoVmR/bit4drka7IRSzB3IFuHYvVQU7V734xs63yph8joxmK1LtGNe0i1VLWv9EJwaBlKhQw+P9Xeyz6InWxlk1iJ0Gp9tTewxGuQGctt/GdjSjyMlwwOsv8Oa69EUf0T81U1cKZjG2SAAAAABJRU5ErkJggg==",
    Zv = "/assets/svg/inviterecord-d1a37db0.svg",
    qv = "/assets/svg/inviterule-33072617.svg",
    $v = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAaBAMAAAB1IXBvAAAAJ1BMVEUAAAD///////////////////////////////////////////////+uPUo5AAAADHRSTlMA5CqlqZ4vmFlGOx/w4OVaAAAAOElEQVQI12NAB9wBEJr1IFRARgBCM1JBYM0JMMV2xgFM5xwBU0xQrg6MawDhHsbHZT8MNXsCivMBv9EQ7Kk+SJ0AAAAASUVORK5CYII=",
    em = "/assets/png/kBg-80f2d8f2.png",
    tm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAXCAYAAACBMvbiAAAAAXNSR0IArs4c6QAAAflJREFUSEvFljtrVFEUhb8FNinsBAUVRAuL/AJtfRCMKEgEYxE0RJD4ALFQBBsh0UrwRUBQEVFQsTCEiKj5AdpYWSgKFmKhadPpkiOTcLl335kzmWFml/ueu/Y3++y95oo+hu3zwBVgEdivfrHYvtwAWUb40BcY25eAqVIjPvYcxvYF4FpwI3t7CmP7HHA9ANkn6VXPYGyfBW7UgaR8T2BsnwJuNwP5D2N7M/AeWAPslPSlmxtm+yQwE2gOSXpdzCeYr8DWQnJQ0qduANk+DtwPh1V6U84nmCVgoPRgu6TPnQDZPgY8CDT2SHobaSeYq8DF4OE2Sd9WA2R7DHjYDsjKANu+CZwJXt4i6Xs7QLaPAo+Dd3ZJWmimtbJNttPapfUrxyZJP3KAbB8Gnq0GpLLatm8Bp0tiBjZK+tkMyPYI8Dw4s1vSu5wfU/GZGqC/wAZJvyJR24eAF+3OSGWbasSTQSWjKsafBtDvYtL2AeBloFPxkVbdqXVg23eAyQBovaT0/YHtYWAuKDIsab5V8azOLB+ynZwzOWi5Q+uAHUBU8KCk2XZBKgNcc2V3gRPBUEddHZEUzU4WW9Yfpe17wHgLxSOSnmZVrTmUBdOYj+SoyVmjGJP0qBOQrGsqbc4TYLRUdEJS6lzHkd2ZwlBPA0PA2vT52C2QpP8PruurGJJsXncAAAAASUVORK5CYII=",
    sm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAWlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////9ZMre9AAAAHXRSTlMAqPjxoHi7WevIwpCdGxUI5d9GDNGHZzsyTrFQIB+i25MAAAF3SURBVDjLjVULkoMgDOXjX1Gr1uq23v+amxggdF1aMtMxhEcSHkkq3mXL5VIpVS0y30RU+lYfgei2/xc2ZMdFsuGKK/3ubV1vflH+xXWneYTfDy4LWoB0jKENhBgF/sgAKG1OaxHiGjCop8jh8yDLA9Sc8mne41ZGCB1YGzAJYXQYvUTcTF6ezriT97niGw0Y14DSgsJhIN8WPpj3QSwhfzsqQIpkYGYvNiGfqPTuZoMLwgnNqEhQehvQuKMzA2cMRJ4oCW05PskRgSgkyLrUUC+wPTmS6hBYU8oUagv8NJQ038aziuSj38K/2j0E3v17Fuh7oW1Kdg2BK6TmjyyigswkCkRCjaVGAp1Wwd2SRCUDk0MnX+YzPSPTk0z45yfs+AnP1KQrChUvCiqzPlJmE5cZfWWkcAcuXNsKk22FLNIKl+ZSkea6tuseaVceAPo6ADQPALbiuS8jhYdU8VL+1UbI90XW2NgrImMvbZCmj+b0YZ/89/ELOtJFysveiPYAAAAASUVORK5CYII=",
    nm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAolBMVEUAAADvxADxwwDyvQDvxADuwADuwwDouQDuxADvxADuwwDuxADuxADuxADvwwDtwgDvxADuxADuxADuwwDuwwDuwADuxADuwwDvxADwxADtwwDvxADuxADuxADuxADuwwDuwwDvwwDtwwDswwDvwQDuxADtxADuxADzwADuxADvxADvwwDuxADtwwDvxADyxADtxADvwwDswwDtwwDuxADuxACBUfyyAAAANXRSTlMA+wYJ7QwxBMP9lfCgkko9+L+EdkYS5eN/Qzks9OnHuaWMYiQPsquYFdB8H51eUSfLb2ba0w0oS94AAAHMSURBVDjLjVXZkoJADBzu+0YE1FUQ79td/v/XNiC1k6Bs0Q9WOdWTZLqTwN4gSooiiex/iLe4DE3bNtMyXg+TtaupJ0bdwkh009U+87zAEmoEQV7mH2j71KrfIEeTPk/d8mg46mpGedlXPQDdI/G+jCGioaOY+22NMF8sfPx/xetMSX2bPA9IndGfLhY5dxTFJjdltdOZ3N96kGmS73DRy5fyrsyPrAvrcF2gkHHr707gaUOJsUqdwa8YzVE1je83JOE0A154uEcVSHZAYq6bzCjHQX0R5NIt7j4NwJ41xw8QTxv/3ckSagnRQeLCzVm4nPaNP4pM2eGbhdQ6lRVTSnQkpqyIffDsBtLJJu6fFUoEJMfZRGyohU+IPDUXPQg9iLvWaWp4DIEPgYxvF5zdCeQx7GkgveyLuukisJTnFhpn4wQ9ujEZtJk/oA0KHjGJexYGJxA2duzHHoRf9iyUTH7TSlt1NAb8yKJNQdtsblasRWVaqM2y1x4JSDufY03LTLkmjctHAcFWqk3dG4UORzpcntcbrtHjOnoBIHjDKyUfv6QoJpE8vPYo8kAeXKQUmgurWehYU90hq5lCXMdlCsveScust+xHfz5+AcxFuZZUEmDZAAAAAElFTkSuQmCC",
    am = "/assets/png/levelBg-8a31ba4b.png",
    om = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAYFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////98JRy6AAAAH3RSTlMAgxP6BuXTRPTwZXgOn2url2BzTn47MseNXVfevrwoc+hRawAAAQJJREFUSMftkdtugzAQBZcsBAyYa7gkaXv+/y9L7LYLtcAoUh4iMY8wY63XdPD2dFmwTdYt/Irhg3Uofo09ZBJ8Akrz5vERMEhwBj7oxut+TSUQhfMAI9W85heUwQZ9bLhjIqCU1/wGNsjFMEXBcOHGfDcBtakh+l1DA5cf37mD/Ze5yzSTSpA/OMu0F8evGbOgV8mEzJv+Ky7Wl+BUlRNqvvFg4V+N795BiuusCMRfDcA3GmEZzev7AnBLFR5U1DI2Aym09RPsCpDEoYYOY/E9AVQcFuLvCKA66hT8gaAqBU/gcARPBXcJNPZQ0h9fCn6SnoR+YI/OQ0wL8tM2OR28im8VxX9UhQW0vgAAAABJRU5ErkJggg==",
    Am = "/assets/png/myCoin-ef4888d4.png",
    im = "/assets/png/mylottery-59fde5b3.png",
    lm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAZlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+Vn2moAAAAIXRSTlMArL7DtEoe94lFE+PR76F1VC4MBMaWkIJlXj0nqTcI3RW7H2MXAAABDUlEQVQ4y73U3XKDIBAF4NOCqGA0apJW89Pu+79kl0I6DdENk4ucm+Xim92FccRrYrS2OW4mojbDfRLn7bHbUx58pyw4fFEWPJZ0A/t+2dWeRBivdbosuI4S2PJhY/410sqnoRQax6fS3A9MIVD5nmOEWoDY8llfX24Fms7GnmcZxvUctxThxa8HYOI6CjB8HB8AuBQixIHIcWnYy7DnGl5lL0PLdQBOD2EdOip5dFhuFy6zFaEKovALSNBvqK99JYjdr5t8XxlijE/UIKQSvp65JCpthINbhQfizPjLufCpVQLDrBr3aRPIDTdHLKVLRlcVVlLcQPkXkAlhXSbEqDIh0EowvfyErHwbPJ0f5odN1ax180cAAAAASUVORK5CYII=",
    rm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAaVBMVEUAAADtMSTuNSTuNx3uNCPsLhnnMB7vNSTvNSTvNCPvNSTuNSTuNSTuNiTvNSTuNSTvNSTuNSTvNiTuNCPsNCXvMSDzMx7uNSTuNSTvNSTuNCPvNCTvNCTuMyLuNiX4OCb1NybyNyX8OSdqer6VAAAAHnRSTlMAKpYbVAYN4HZJ6tXE+PDmzbqeZDYkFLGpkIhrXDxo4kfcAAABBElEQVQ4y82S646CMBBG11pouayg4nV3Z6a+/0Mu4yXNQGmJicbzq01PmAvf12ehj3qOVpQOqEyqeY3AUJ1HvS14fiOfawk8tJ7sDgasdkFvQzCEtmNtbyAAbSJlJVUmvDOCJ9Jo7WAaVzy0zEAUfGxUQYLLfqaIy2dEnJiEBuJhp0Lqt+4aIV76terxjkw/hRWi45+6LKVGR36tZGk882ktYvbDyTPDYVzNR4u+vUV//wutZ8XXToTBYkgE0lyruh6V72QsAqp7gEmL2aTIuJYLasUPhYOAKEdgFEJU5KX0ZK1LhsI1J3uYnZ53iaekmN/EDhOiYYuxGKXhyjeyRQTWXsE/8Odju14ei1IAAAAASUVORK5CYII=",
    cm = "/assets/png/numberBg-r-3f4e7109.png",
    gm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAATlBMVEUAAAD/uyb/vSb/vCb/vSb/vSH/vSb/vST/vSb/vSb/viT/uyX/vSf/vSf/vCf/vSf/vSb/vSf/vST/xib/sxr/tiT/vSf/vSf/wyj/xinmVG6PAAAAF3RSTlMAPH8upx61Qdu9U3Dx0Ej7jMWFFAoHnhQBI10AAADESURBVDjL7ZTLDoMgEEVHkPJQfFuH///R1ggEJmJXNl30rOByMpCBAHdjWMScG2IHJtwiOMH8zubUWrTbaUFtCQqGPe0ZRGq/BENacYDnMWiiiH5JkjP2R94Gj4c6rYAU7WMX4ipu6AdkghURKd8UkVASleQZUp2L2AGhw/OKDRWbwtao6wyNv9dHtI8MiwWRAYEV+iipKAt9tFxkcFu8a5eB/2d2zzPjn0TuxcVdi24Fz3gtjhAQPZY1TL+u1bAiBm7iBQzsTZuFFRveAAAAAElFTkSuQmCC",
    dm = "/assets/png/points-d5bd78c8.png",
    pm = "/assets/png/qbBg-e03b1b49.png",
    _m = "/assets/png/rechargeIcon-b75e9adc.png",
    um = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAOVBMVEUAAACjo6OgoKCjo6OhoaGjo6Ofn5+np6ejo6Ojo6OlpaWioqKkpKSjo6Ojo6Ojo6Ojo6OkpKSjo6PuE3LfAAAAEnRSTlMAf0C/H98QIM/vMGCfj29Qr1+b1SuLAAAA4UlEQVQ4y+3Sy3aEIBBF0eJR8hCx+/7/x8amdCVCZYUMetZnpm4BBfr05hbblX+lEX2pBJ1uUDKTK1ojUGgyA2z/sHmcbVetG4YNDHBQaEXqxjykbj3gbzceSIdUbUcN8ARyQlz+oBUwHqC7dTF8000ehISNXpQsflh5T6gBrHw8L0JpBR6nlDmE7ucOZ7CnRsVe9AVio4GvAexCjcqFPaG8Vw6a27RXQrvEAg7sh189VNHa7/sFWP24AEY5F0qri3VcVwo0GYNnbU7g56xlgIvp0mfyBWNMer4W11Xp03v7Att9D7xKb3uAAAAAAElFTkSuQmCC",
    vm = "/assets/svg/righticon-84e23970.svg",
    mm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABC1BMVEUAAAAjkuhVsfZGo/Emleoikes5nO45nO4klehpwPs5nO44nO0smOsume1jufo4m+02mew1mu41muwtl+w7n/Eklegkleg4nO0kleg3m+0jlegrluoql+ozmuxEo/FZtvklkuhTq/c1mu0jlehTqvY1mu42mu0pluozmOtPqfY1mu01mewgkulNpvRVq/dmv/s3m+tmv/xUqvc2nO1lv/wjlOgjlOkjlehivfteuPlOp/VduPlXrPhUq/dBn+5nv/sklOhVq/cklOgklehju/pPqPVSqPZhufg0muk6nO1Zrfgllehrwvwrl+oymetVq/dcsfhgtvlFovFmvPpSqfVOpvRKpfJBn+88ne750yo7AAAASXRSTlMAZTg0Bwz38v79/OIzGf7UdnBOKiX69ezpybRaSz0gFBLFtZmUk42BZlhFQjv57+PBwLatrKmgc2BSSUD19fX04eDe0pV+cG5Tq+LO/AAAAiRJREFUSMeVlOda4kAYRj/cJJQkIkV6k7oIuva1bO9DEqMIwv1fyZIxwzfjJAHPL56HczJvCAAh3A3hTfzdnZw1ttfvTpMPk8nxb3MrW7k5te3Hicdxd2eT3bi++Grb9tOE8b07DJimNpvN/M31r4sPSdvDG4Qc6e1+5l/dbKnMb1IPoYOQKXkhVTz0gx1b8nmWhLEXHOyK/oxEBujjIjmI8l0SEeB+5JkgGSl4enjtu0uCvMcA58gHIDEM8PLSHQQHqIss6BPTX/z7dZBMPjJdHpTey9dTYvAObemZlbMA9TihOOsgxHeXxYwCMPJ9Ym0I3MVJDgCymu/fYxDi9xUAqDKfONGB+6UKKw41wrAig1k8C4D3SxfJwafhgf9qHjdgRa5I8ICgE86UWy9xpxr9cZk64Q4InNQFuD2YL1P0a6acEMQSAuQPANTKPfDoE8QJCdyjETBGKXEQBnlmz6eEFPPsDy3ND6JU2Vuf3dn8eboglLQJlIwwyCMxBp8y4WkrsELVeZ9SUFkwIAI9PID3rQowcpoQeB+qogs3TBdVYc05EdAMyErXt76pGBiaWKRb5+gzPgJHj4iUNZzj81MFDjVNgnDQL4xBIBdHDe8WSfiDkFpc0nkuQSIb523HEqioIGPovsxs3HOJPk+j7TjoIvsDCCNWCvBLNQjH7Oy/vnzHhEhyVwVer4xhI/nBj4Q/pmPAVii1q1KiUIm1YHsUI8T+D1vth6Xya0ecAAAAAElFTkSuQmCC",
    hm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAaVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8G612AAAAInRSTlMAKE6jf/cMLbnojNCHQ8Nky7F5GxPs4Z6VN9hrW1QEqnMgN9CCNgAAAVJJREFUOMvVk9mShCAMRUFEwbXd9178/48cwtCAimXX1Lz0fbFyOUkMRrRVlXcZp5RnXV6hc6UFXbVokZ5gmK07Mezi8nc1Hsf8XTU/cok8aXqvhqj2+kYa0Z6LZAE/ME7gyxbJlpvAi8OtGcbgThsLklmAdqoZtLHTM2HcDGfa38RBZuIFErHzyqDVokPIK5FTJfTSbyiCNnCDQSsOQyvLRyfyrW4MRiaE+Ls9eCUdIfJQGXxVagabG7TP1WusWu3dcPfR+L8D4NVosApaNtZDFxjjXjw9A3oi7IVdwNi6IoH5jiDcBYGK3w4usN4HkKVp2m3BWYQPYTMNBtbPHNqttaharUI7MXKCD2VVN2Vw7ATHSn//OYmiKJlqtAMzsHP3Tu+vB/SPYPkJ+BRg/gFXq9/vSjiT13qhkMQryLsCAZMrcSUOGH2iS80NHaMX+pt+AJejOU1Lb+eqAAAAAElFTkSuQmCC",
    wm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAclBMVEUAAADm5ubn5+fn5+fm5ubn5+fm5ubm5ubm5ubm5ubm5ubm5ubn5+fm5ubm5ubn5+fl5eX4+Pjm5ubm5ubm5ubm5ubm5ubm5ubo6Ojm5ubm5ubl5eXk5OTi4uLm5ubr6+vm5ubo6Ojo6Ojn5+fr6+vv7+9VBdPdAAAAI3RSTlMA8uCVt+n5cYDky8Kd1a9QJgaljodrOzUR2klCFwVcDM9jGzEQBV0AAAFFSURBVDjLpZTZkoMgEEVRgnHfd2O2lv//xQGkJI4IU5n7IlBHumnoi77XXAUkfti5BoR8C9YGIOWMBux2WRiyuIn4hPkZVy3A1SB094Cj8azD7g4w0bhYf6LAdT1g3SDD7dOAYNphfSo2cLLPxYmI+NFNLV1BLMmSHNbr7Ve+HU17dFARU06+5DRiE7dFWuUhSzWRExcgQqcqWe4KvHwklnie6xfbHOvB1oNVmRnsKEjR0Qjy/QjGLj/rQwuqwqV8ELNBbQDDbTFhOxtAAlCuI59l+S9QhSa70NbDYH4YW3kCXA2LpTyoVQXPzFfYWa9wkz+w6LX+UdifmXq4Q/eHhzuetwIWrdAovzE3l6Vd22AR7freG4CrNwBy9KqXt1rKbLAUKfzbpMoZ6fWOVtt7is8zR+ealJFmWsDuQ7oiEyfu0df6AXWwOLcY+QcdAAAAAElFTkSuQmCC",
    bm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAWlBMVEUAAACPZP+PZf+OZP+OZP+OZf+PZP+OY/+QZP+OZf+PZP+OZP+OZP+PZf+PZf+OYv+OY/+PZf+PZP+OZf+KX/+KZP+PZf+PY/+PYv+OYv+KYP+NZP+PZf+VaP9j+vNGAAAAHHRSTlMA4MNrrbj5Dwfyll9a6+c2LcuihSQd0FNIQhh7pllA3QAAAQVJREFUOMuN09mygyAMgOGwiLjWpfa0Pcn7v2adAToiSPrf+qkRJ5BNjY1cJ2DrCfdIKA5W6Gu6MpT4ba6zYus6G0M0t0TVqyBEs8UQ6RUz25K7oGO4Fz3zz6BPJNAc5mwJryHO0XkUIIZT0sjAxv8w5CAq2HsjD4UbkIc0AUxUgqHVfQkPJVj6CTbQZ+bWKRyhzcAbJR+jQKZwl1pGVT2ASGG+Ac/dWRgSUZW/USBb7ReJzW3t8itUrKPJ7R5xsAEXO2Qb9o978wa+sQw1hJ7EnWJIl17sN5X9Owscs5djSoizF8+sIElTZr5/yPQczuxxh3z9TAdWveC6t1oegzFCtr2FUx9Y02xiT5HGzwAAAABJRU5ErkJggg==",
    Cm = "/assets/png/success-2a285f08.png",
    ym = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAkFBMVEUAAAD+gCH/gBr+gCD/ehn+gB//gR/+gSD+gSH/gSD/gSD/fxz/gCD/gR7+gSH+gSH+gSD/gCD+fh3+gSD/gSD+gSD+gCD+gCD+gR//gR/+fx7/gR7+gB7+gB7/gxX+gR/+gCD+gSD+gCD+gB//gB//gR//dhL/fAD+gSD+gSD/giD/gCH/gR//gB7+gB/+gSElJVlZAAAAL3RSTlMA8hPOB5FH/el/yRvFJvv576sr6+bi3qOXZj43MSIL1b+zhXptWQ0E27q4jXNDjkNMUFMAAAFiSURBVDjL1ZPbcoIwFEU3GCxyEURAUESt96rN//9dD0iMiaSd9q3rIZlJVrI5JwN+zW5q9ZHOobLlBt40M+Am3qEwMIrOn0RWTo3i2pdeYSlbqaOWI1Q9dhzqpU0XaFi3x+SyByRcM5s7F+S4t4FMouPHVEqTSTMAyChsKeLdYHYFUc0891H1mfPIBiLOR8Dgtbmh1YkVjXuAkhMhFniiFiKs9oqxFNu7BccVF2JMG230VrboKjxGXicm9+icJlEMEerNvbAPKvcAzOkj47knmsM6cSPEYtO1B3RAkqGj5E+4Nho8LgkAhCUDllwSV7jzaXHBGTa9hBXiyAWRZ+PBsMi65fw+rU7i5Xc1FCrDL+NDZ9Mr7vBK3uMF6MGPuU7O0Gtm+n01+mEXxdvDjO+MhVba+JY6mVHDbyHDj4zobQH8e3ExJKjqeNhgLtzhCukBBk5cZQkD20jxPHM2s59Qg78AmZh+9d3MWU0AAAAASUVORK5CYII=",
    fm = "/assets/png/tjBg-e04b3228.png",
    Bm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAbFBMVEUAAAAAkqsAqYEAqoEAqYAAqoIAkqoAqoAAl6EAqoEAqYMAqoAAkasAqoEAkqoAkKkAkaoAj6gAp4MAlKYAkaoAqnsAoXwAp3sAqoEAlaMAqYAAqYAAqoEAqoEAqoEAqoAAnpYAqYEAqnwAqoH24WucAAAAI3RSTlMAc9/vjj9hz4Mt6Zgn+WxJPSPleXITDQf1fV3Xv8msoJ42ISAAXDUAAAETSURBVEjH5dXLkoIwEAXQm5CJhvAcngM4jpP//0ctbQhWQeylVZ4Vi76V7iQAPpyxsne7emkN1jrrXrIdFu3kGKYWs7NjsSAXxzTPQQPwl5DcwEiBOGKK8bYkGwUc2/sGBtOgNcO55wW8RqW8QJLrLNN5Avx/hT3KtSA6AUMhVgp2vU90KgAoa0GOlbipS6jg0HqpT+PjfQ40aSCQiFn17R6JEr+BQC4WP5TIMewHfEc+oWECgUz8PXUcVSJDS8+HlSgQoMt46rDSjvst0QoKT+z+0DSDNFi53Hvqt7Y1CezSuHlwgXPYvBqhkzZblw/qxbe4qH15XQBmd4GJNrr0L1AJNJLxy/KvKJrTZnF/UAaf6gqivIMetjFvygAAAABJRU5ErkJggg==",
    Rm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAWlBMVEUAAADtIyPuNSTuNiXrNCDtNCXuNSTvMR/uMyPuHR3uMyPtISHuNSTuJSPrIhruIiDuLSPtIyPtISHvMyPuMSPvNCPuIyPqMiPtLxzuLiPvNSTvICDtNSTuNiVmM0bCAAAAHXRSTlMAc+/fMJ/4D74llmLZewhJqWw8xolfXywas6k+Vps3cawAAAEeSURBVEjH5ZXZbsMgEEWHFGOzFIz3JOX/f7NWWJ0qY54qRTkvliyOLjMDAj4WKhRzL2FKUCjRwp0idLG+cxV02RCuCpH27yqhSAAaoWoFFYWvSoJQT/tvwqWaILhq3lhgt3nVoNe5TmDTc/8pzgbAjbRWGg51cEkCskq5k4I77DSvERoGcmDAi56Ak8C38F+OCayFtP/Rdb4OTLjlANK4YHBEmMGQRB8MgwgrLPvmI8FYvMDGLjMyL7RgycWVXAmxXjBQ8hMPmyWKJfY/fRI0lGwxQZLM9bGeSHjki63NbE2swRzX+6IV0iVeNqkPbRXIHMrB9XFwFJt0jpjS0UAiJvhz+PAHhdEnYzh7slR7vEDnj+K4G8DNYu1iOHwuv/ORbeErFXaEAAAAAElFTkSuQmCC",
    Em = "/assets/svg/unfinish-43bc1495.svg",
    Dm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAnFBMVEUAAAA3TuM/YfU8YfRAYfRAYvU/YfVAYvQ/YfU/YvQ/YfQzVuxAYPM+YPRAYfQ7XvY/YfQ9YPQ/YvQ/YfU/YPQ/YfQ/YfQ+YfQ+X/U4U+5AYvQ+YPQ8YPU8XfY2WPI/YfQ/YfQ+YPQ4XfY/YfQ+YPQ9YfQ+YPQ8X/U+YfU+YPQ/YfU/YfQ/YfQ+YfM+YfQ9YPY/YfU+YfQ/YfRAYvQS6EUxAAAAM3RSTlMABPcqz/z5iHvyFwg/l+Qd3mvTuG/u18BMC/RUOCUP6KliE5GBc0QvyVrgxbKFjDSgd5w2+sCQAAACbElEQVRIx+2V2ZaiMBBAEzQooA2ILLLJoiDu3fn/f5sAPU2AJA6+zZy5j6EulVRVAPyzFPr7rmdvyjdV+CljvC/eciMLYYK/iCer8ecefzMP4CRV3Rq4Q3a93Z+aWXW1cR90Xq9e+TCLvNuFmAzkj+txpce8Ap2c817CIpCyN5yEVYFZI75m/vfLs2rbUDBk+TRHItn0ccuaIX9AVRHID+Ly5TNUbYF8wFxZstISwHDrytNlZwVaYGVz5FDiyI5KnmqgwZM4BdsqTFkO6o+BC7O8fknCbZW5bPB6skGSmqiutgVJ6mlD4pIFq2kVqooilSfJFlm4tn1GBG5mddag9+R5U6cXQwLKiyI15D3ZL+tW5GJZNTitcmNQox0uMlc2uUNyCtsgGN19jpwLxnN+CEFDobDlAIkvxi6op2zJlrUrfnEl3QwA3WdXe3c8GQ03joyPJGjP6zPUGmBP3qRparXynSfTxPTNu5CFCtUy8gbbvgIWFhVh66QeXwZU93eS6IgptoA6s7VpeWzpkDWsWwygTmIietd+1B24u6q5Tu8bLbSfG+NgCqtL7KGutPGzP0mpviM7m91sehUFnZxT60E4nDEXZhvUX3O0Tjbpad4lL7/bKAUd+gfuSGeDUHt5G2zmpAGK1UaSf+PEORYje6CHVq5+yFRDLCdARCCJ3LMOhNwErrICA0pzSWHGCf/A5tA1+wVG68zluOgwyquMQlS2LS/gUF6OE9yzJxq7vglGHBjbS/TuLNQPd0zIao1TPNxecmmtAhZLmWFLX1HldKe1HoBDeFwwOEZx0P4rlCSEYDrazLSegQ7+880vbppIXhLZnocAAAAASUVORK5CYII=",
    Im = "/assets/png/wallet-a66e2eaa.png",
    Sm = "/assets/png/wallets-7cd3c0b8.png",
    Lm = "/assets/png/widthdrawBlue-fb742a06.png",
    Gm = "/assets/png/zs-1fe6152b.png",
    km = "/assets/png/banner-30f5363c.png",
    Um = "/assets/png/box-9033f481.png",
    Mm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJWSURBVHgBnVRNbtpQEJ4Zt1VpN6YncFWMuitZBKJu6p4g5AbcIHCChBOknCDkBKQniLOj6gIvKxEJH4Bgr6JG8N50HsRgu4aGfhIyz573zcw3PwhbEB199DSrY2TwgMEBBFueMRAEDBAQWr3y8FdYdBcLyBxmdQmGDMFHoO+AKlgbsFVj0MfmOyP0qTTvlP0w3kpqomOlBojoA1FnWyQb5/oGmAHJ+lpoGx26tVnd5ft65Rz2wLTu9uXexDj5y+usXp3sS5hg1nBvzC85L9O/b7iX8sd792P8Pu9MinWKGlrLQkmBJFuf3s67aR2XUmg1QuKT8vDOpyUzo4cI3QyhyCH6jqT67SdCg5rYtfnh5SidrtFTlO0x45k507T+oSkltcvDcT9NyoiDFFkeqw5JgUj7piMiz7EJwarJ5SBtMD10W0LrwC4Ygky0d748Ynh45Zn0HdEzTNvLuQbPgFLKy77BWDHbVGiNuC3tDCzEuOi9ITUil3OkATwHRDk7ti2LQ1oJzF8yto+PfSEOd/FJF/TTUxR9do1kNrxeBAS/F0tv0VHFSwzKQRij5hMwwhcySg3QyrSgVnBqdoXpXzIE6R5bE/8cBzLTB7KRrjbkKFJxF0vzg0yU0gUyIE2J/mpNENUce9aoTqJ69Qz+A6sxrQ6SM6XTlSja+xCbRo9kxMG0JVIneZ9bfRWPNQ5kT17LEu7+Y/WJrbowU4eYXX2FSxpYXzBzU0p8zQpv6cVTi2lta40OWsmS1j0qqfOdSzoftRC0xOATbCYsNiMtDm/pzeJbnizBHzWuJ/LmfeyFAAAAAElFTkSuQmCC",
    Tm = "/assets/png/commission-5db1b1a6.png",
    Qm = "/assets/png/copy_code-5b152517.png",
    Vm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAACyAQMAAABfrPxVAAAABlBMVEVubm5mZmaxTiEnAAAAAnRSTlMzFJgifHUAAAAQSURBVBjTY5jAMApoCyYAAMmkASEJokq3AAAAAElFTkSuQmCC",
    Om = "/assets/png/direct-bb959759.png",
    Pm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAY1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+aRQ2gAAAAIHRSTlMA9TgxPQo2Y8MXEckFLrwm94Xs2qheROBoTR7Pf7V4mrQc5iQAAAEpSURBVEjH7ZXJcoMwDEDNYmIZzBL2Jan+/yvb4ljYTKGe9pID78JY8GxJI4D9l4xnu/X5491j/ig2RQ65WOSJ0JWIeK8mveJjil802fEBDa7Ut+9do6bUy+JYSPGF6KbqbhYxO6RCQ9Cj4Q7HwpQiQerATgBKZEsuO2+sMqXq8tuzplIzKfsKmA/8qQ9piuPUo4SIOAuDtdqYcTsO245L4JQpjSBzp12VmasBXRIjKHQZXo157OKhESJ0ybnOSPgK6SW8lZD7jobQAnsGDgJo+IR7Z6G3LLYI5TbeMrTvKOsLpyJCAQn7OOHOfU4p7eMkKL+iExIiv7aGl3AJvwmq9BHKhAQ5u0LyozADI+IaN+oJ1n9uD2CH+45ZwHgztAVjRUtXwwjsb3wC6TyWj2JVTmoAAAAASUVORK5CYII=",
    Fm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAnCAMAAABKdvqKAAAAZlBMVEUAAAAYoXwSoHgZonsFm3IWonkaonkaonoaonoZonkaonoZonoWoXcaonoYonkaonoaonoXpHkTpHcJqHwaonoaonkaonoXonkaongZonoaonoZonsaonoao3oYongaonkao3gbonrfebjuAAAAIXRSTlMAdRBvBSv59vOyzWAgiTbk2FUZCu3oqz2ZgsSjkXpFnU3S7lkTAAABaklEQVQ4y43S6bqCIBAG4C8WF8S9XI8W93+TJ0HlAUt7f06fMxCDD0j5FCK+SZxjyUNpQUfwSd3SdCJgfaA2Q4UjHr8DgoGGymqOPbNcvb3Al7kWPcwtlnJeI1WOwh9+0+UnSKFcJVxCVxNw5XnCISNdbVH6wYG5VzFX5Uj8oKidIP81SO66OiPzgzGDIzb/mv7C0cM1m4cARjcXcnj+dJmYax0nW6xbdmHSX1hRi4OqWX6oQGKbC27wySbUHUqA7D1DCh81LzNWAHi63TzvJRysMQ1eALb13rLOUnT7wXmkfHll5+45GtjAcXmlGZaA9eqjYIJmdjq2/Q7CRO+DbhhJZHf1Tc6BdVVTsFh9N7L1yQKJOTgJBhkg1rcf1ZkOeNhFPFHUiJbOHLM6xxEueYL+IphAmCPGF8EUmdBHFRfBBmBEVkB+ERywii6CBVbhr8Hry6xIKr5Pvw8TwY7wtkzozUNp8spkDfwDwNp7NEVDn0YAAAAASUVORK5CYII=",
    xm = "/assets/png/group-e09bcc99.png",
    Nm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANqSURBVHgB7ZhPTxNBFMDf26W7XZGkRjwgJtaDRqMoxQ9guRgkFVDi2a/ANwC+gX4C48mDMUEkSuIBTnpBIEGCwQM9CJgYDaGF0u3ujPNWIP2zfzpLahH3lzS72TfTmTdv3ps3DyAiIuKfBuEIFJYyaUR7kAMMAYek84cIixxwEVQ2blybzkKDCaUAXxtKFHPFUY4w4tsO4YnRqo/jpYktV/nKg7Mlu5BBBqvZbzh/uf9dESRRQBJn8jvFmaDJE8hhxGkr+rjJdwt5nTHUbcCuzk6W+fr2ng6SSCvgrDyH7nrbU9vCTnHUTdba834jp8VeMMC8gsrZ5AXeA5JIbaHCSl8SLFyDUPBeo2t61k3y48tA22nTGkbgmm3Fplp7JjegTuQsYCujEBLh2ENesnNXJ3MqWEv0jriXBAmkFECJrVPTF2HQT16y+CY91ZhyESSQUoADD63AQZj1gvzBacawDSSQduLjhpwCCFkIiQi7i37y7bn77c4QHH+CBHJbiMNrCIlKp7MPMb10g55MYY1TQIS5CQgJK7FxLxkXYVSs/BV6z8e0TyCBlAIUx0Xe8xQkoT5Gyj0vosmblpmhd2bbnymkggTyJ7Glj2HAdiiHkjtD9HGTObmQZT6kyMMs+LW+qUqtPiGtwJnUxFbB0nrrsQS10Ut6L6bck7mDXIhWfv07vAmTzB0tnV7oSzIVx1TEW4dnhIhU5OzkL16pQ0RERMTJITCMHlQexGtaxPUE55gQITIBslAiyMUPUTyV50bX1GxQFyfFCDiZPRXYvz4+o4lDIyCFVHHN9Ci90BmDKt5Fhee0Fm3KSxHXkzi/3N/NLWUBGjV5Qlxw0MIFU4zlJo7HjRxd9inN2DPN4e25dLtbuxoL0MrT5ENtkxCICWzxFp5yswRffqRZdu42lV3ESW/GNe1VtSVqLWDjzN+avDNJ4Vf7W7UGvP7SjN2c/siRr4oEUtstltLVbSoUIIcNurs2iHRhqS/tJYwrbR9EVcNUETp25gfOl8sqLYDsMTQJv7ILWcKr7FKpAOdJaBYId/zEh2UXpaWj/HuVBZqyffaHBl+/2z1l/HFelWnl36ss0EQFuL8C7bbuXHYYg4oC8LGpC/EAC5AfOE8Rjcq//2eFrWNIpECzqQ6jWWgWdYxNyR39ICIi4uTwGwOyXIuoPEQ9AAAAAElFTkSuQmCC",
    Hm = "/assets/png/groupIcon2-afe630e6.png",
    Ym = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQQAAAAEAgMAAAClyNqvAAAADFBMVEVubm5tbW1zc3NxcXE7/h65AAAABHRSTlMzLhQSvsn8IgAAACJJREFUOMtjmMAwCigB7AwODKOAEsA4GoKUhuBoLqY0FwMAPhMBsXjCijUAAAAASUVORK5CYII=",
    Wm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAeFBMVEUAAAD4AIn6AIn2AIr0AIT6AIn6AIn5AInrAIb6AIn7AIn/AIX6AIn6AIn6AIn6AIr7AIn6AIn7AIn6AIn5AIj6AIn6AIn7AIn8AIr7AIn6AIn6AIn6AIr6AIn6AIn7AIn7AIn7AIn6AIn5AIr5AIn6AIr5AIn5AImmrdmUAAAAJ3RSTlMAN+cYC7fv2wT5vwfU9a1wyIKSIRzgKngST5mfXEhBMLSKpiZoYlYQ+C3LAAAC8klEQVRYw+2Y2bKiMBRFIWCY51EcUfue///DLjnWxUyGQFVXP7ifYkEWGfbZEayvXqoutkaXajnNyWJYoKarl/HsBhaK/Czh7RNYrj8LxkfBQMlZC9yBkeJIN0AwlG4ZR1NgqgGGpkDP/cjzY1Mg6T8CXc8Y6HyB/xroDcesuJJnk4ZFdizjYAuQZuiyuqPBiGEV/ZD1wKb9vVDbc/jGa4EUIYJashI4qu7K1gGDi/LEoQuBfn0mi6Iuf1uXk5LoZjmT1qGlVMpsS3qSnyW8BW9qYAmsrnfJQifK6NQDobkoNm7hlG9izlbSsy7vyNtTldEZvVmblgS7usz27qZrR5+xja0Ctoxt+sPUeLzfccYzljP2oAIWrLH96bcnLPLIV0rSynk15Solmnxpc0ZNHB4IV7m1D0I4PJ6tjiu4EFv6vy77QADW3Ao5BG0n5qEtLWQB6E/z0QC5RBTTEBVOdnm2djKgfwBW5Mw5xuN4jqUChv5E5KuK7hl/NRyvnzp1MiAM0VQFI0dMSve3QrqEK3e8VARSIAzzZUah/ZpuyofM1AF9LQLxgTgBTsmhtiy3o3y+vQYAciASFVFGswe7evPjR1AB50W2jglodXDnqlUDIayxGqiWF02+HUADhLhCf2iIJVriAFogeC1GLtHz3BtogfP5cPlALPyJl8IiIBAbbdcocAHy+itogDzxHst5GY4vhMVAoCeM5lzKwz4hGACBHhW9IMHQ7XMwAkLwwHld5TwnByPgPDP3xvJ+Zp4REL0hEJPjvLbmwKDAECz5sK1jMAaiSheJLK+KwQgoJoDfBeilmbcWCGmPARkgD92+BTgH5Kt6Lh5sA0LuIPHFa2ArEHKM3DnTNgExcjmeHtgT+Ehs8bbT5xRP+b+4ajWnp3l058xg8PUnSIsiDDQ3dew7wHa1b8AqAEPp3kKG7cA9A6zIVl4aCV8NNyl3LU7nTWMMHUvQfbd6Z+joSt/gTsOqUcbd3VKqb21D3V3rq/9dfwHCmfk6vxZcFgAAAABJRU5ErkJggg==",
    Jm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM8SURBVHgB7ZrPSxtBFIDfm2zSVk0RNVBtoT15akHwZE/9A/Qq9GYrFPrDXgo9ey54KUJPar0KPelV6MmbULCXppcWWi0kgYIxYNzM65utYik6sxPdyW6YT9SYfbvM57zMvJ0dAI/H48kQCG3yeKlS7MvnbjfDo5t5kR9AlAVJdOX4sq/4xyhcjDIALagXAvFQEtZDGdYLQf7n1aPW9zezpX1oA2vhF0uVESlgXCAMay57qcJnIQn2+iR8tBUXNsEv31fGIQeTelk3qDY0cvDwqWqTzXlxA5WsBLC6uAty3CYb6VjCz1cro2mUPUFJP1n5dS9OrFH4NQ9OgtIre0IAYnzu7dcrpjij8EEAwwRQhJTDI3khvN5/1xhnCghIxkqVNIAEI6YYrfD8GhVaIAYhI6iR25TWWuHqfnUIMkauOKSdMrXChQD6IGMIERa0x3UHQ0r/YPU/pjZbVVrdgBd2ROP42zkBOId+EMECIF5DoGc8e94Ch7ju4bKSRYQGy9YicaAyOMSZMCJuqftbJXv6XvRavbcFjnAizKsM60Ry9bzjRLTK9fo6OCBx4UgWaMMcRxsupBMZtFjwE3INTiA3+c/NuOf9lUb1dV+d2/aCm4ZEhDGSbK/BGGUDbSQhq/CFR7fjhbsdL9ztdODm4RSecwd5+pnhychi3Yy4Hqe1f0tUGzoqzAXGNAuMKnULJnhJthqnejuLrKZ0D7RJh1OaUzNqvFVK1/ixT9tlZ4dTmmr8a8EypeEiZaeflrodL9zt+Errkpji/+UEJEKClVaAsN+0mzHUlDHGJeOk7VRjgbbSUm3WnaxNaSnDJlgi3TxROLfSaoZQBw3aHu7vvbFbbVTBBu7hslrT4l4eg0TQV1p48LumO9tYtMytVKYoBfuy4iFqizODH7QRYIAHh13ICK2W/GyKMQoP9AztSCLrz7JzCOqHYO4co/D8NDYFBNuQcloStpdj7LuMVXgsPhrY4cDUSre4be9mS1/ixFrdaaVxv2UkO1OK3RnWt5Zqn3SvgAedHrmRYI84jRdnS1aD6oU2iPeI3B1EGuZ0L/LAViSkAiQAEjYBxSFED9FxryFb35bb3CDu8Xg8meIPz0YVAi1CL4QAAAAASUVORK5CYII=",
    Km = "/assets/png/copyBtn-c9f279a7.png",
    Xm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAA7CAMAAAB7Y5XoAAABEVBMVEUAAAD8IEDoC7KLJ8X7BIL8H03BHNOBJ8CIJ8TcF9r6AYiFKMPQGdj6Bnv8JTuDKcDoFd39JjfTGtv9Aof8Jzr7I0HnFNn5DG/7KDj6B3z8JzzHG9T8I0DmFt/6JD3eF9v1BJzuDLr5AIvoE9frD8nvC7bwCa/4AZD5DG3nFdzpEtDsDsHxCKz7JD35CXPoEtPqEczsDsXtDb7yB6jzB6XzBqL1A5j2ApP5BH37Jjr5AYT7IkLZGNuJJ8OFKML6D2bLG9bTGdmPJsWCKMHwCrP6GVO/HdP2A5b5B3jGG9WsIM70BZ/6H0fiFt3DHNT6E1/6Flr6HE3eF9zOGteVJce5HtG1H9ClIsugI8qbJMmxH88elb01AAAAIHRSTlMARxO0lFNJHOrNzKiZdW1qYTIxMPPr4NvKu7izn5iTelQNPjkAAAHeSURBVFjD7dnnTttQGMbxx1kto0Che7fZw06ALMejTkyzyA4JIfd/IX3N8QgCJCSU8wGd3w389Vj+9B54Dt5rg8FgOv1HJpPx+C/JZDKKonTr9Xqj0fhD0ul0rVbrVKvVX+SyUimXy+fnhUIhlUpdXCSTyd/k7Cyfz5+eJhKJUqmUy+WKxXg8/uEId32RNU1zglM3OA6CXRb0i52OH6w8HmRFFiTZbPY7Am9VmYrexMnGRBasPxi8ZEGvmCROkBWDoF8cDkNwRZ2ghO06yg5n+rG3UJW/Yft2ZrrOVlJQAg8/db0J8klVf4CPnWZzn00EL825BRyochS87M+tY7yjifxY1leoMtdir0dFDdxQcQSZa7E3akPWXnZx1G5DkiTwE4vFIAiCIAiCIAiC8PLQLQz8tAwDGc5Fk3PRuC0q4McwbXxU+Bb3EFWUN+Blz7RfAXS0BS+mbQOIdLufwcdr0z4EobM0n+8aZhOBEB3Cd7F1tNC0wZw4t/4ItitsGM5v4wo963GhyE79dHmf0VmajrZWj05Ti+Vy3e/3r69XNzdXV61Wi4LYEPGDtfuPCyniB++9nwSPCyw4Z8HFcr2+Da7coHGIu0520+TJDzZkM0goGExceBNX7sSw/0H/A61pmlXAICjMAAAAAElFTkSuQmCC",
    jm = "/assets/png/poster-0aa0842a.png",
    zm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABWQAAACIBAMAAACSHf/cAAAALVBMVEUAAABHKr9HKsBIKr9HKsBHJcNIKr9HKsBIKr9IKb9EKL1HKr9HKcBILL9IK7+51PN4AAAADnRSTlMA8XrcpwptvYgjFNFLmLjVLIIAAAJjSURBVHja7NlBqg4AFIbhkyhdRsRQVqDMjGRmJpZgaGJkLLIHQ90lWIKt3NuNpM4akN/tLuF/63nW8A6+zpmDz88fLxytu+/ezFUnnxaO3JPTuXTj48LRu/Ny/nu9EHB/Dm4uJHw4zIIXCwkX/6bB9YWIZ/PXo4WI8/nj9kLGt5l5tZBxzy6g5Xzm5MFCxtnpXFsIeTi3FkK+zpeFkJ/zdiHk+/jWknIx7xdCfszThZBf4yxLytkspEiWGMkSI1liJEuMZImRLDGSJUayxEiWGMkSI1liJEuMZImRLDGSJUayxEiWGMkSI1liJEuMZImRLDGSJUayxEiWGMkSI1liJEuMZImRLDGSJUayxEiWGMkSI1liJEuMZImRLDGSJUayxEiWGMkSI1liJEuMZImRLDGSJUayxEiWGMkSI1liJEuMZImRLDGSJUayxEiWGMkSI1liJEuMZImRLDGSJUayxEiWGMkSI1liJPu7Pbs3aTCAwjB6UQMSrGwFiQvYCRYiTiABp3AIbdzBUjKCbiA4hHViUGzuDBI1ISN8L5wzw1PcH8JIljCSJYxkCSNZwkiWMJIljGQJI1nCSJYwkiWMZAkjWcJIljCSJYxkCSNZwkiWMJIljGQJI1nCSJYwkiWMZAkjWcJIljCSJYxkCVPHDUHmddkQ5KPuG4J81XVDkGWdNgT5rKeGIN+12xDkufYbgkxq7DBLkPms7F8kWVTVTUOMs6o6aIjxWmUyIMiiVvYaQlzVysjPlhDLaf3aaYgwqX9vDQEuam100jB4h9PaGD80DNz5rLY9vr80DNbR3W39+QG4hi/mrLZfWAAAAABJRU5ErkJggg==",
    Zm = "/assets/png/promotionbg-9dcd78e9.png",
    qm = "/assets/png/promotionbg2-264af814.png",
    $m = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOMSURBVHgB7VjRUdtAEH2S8UfGMONUgFMBpgKOCgIVYFUAVABUQKhApgKgApQKcAdRKghJIMmMsS9vpTNIsuQ72Qr54c2ATzrd3ru93XcrAW9YDR6WRKh0F3jo00SfRjb52832a0y/8t49W6Mg2oiwJGoTDNWPPQ/+ISfuF0lZEGngMojWhzXGuBMM1SOJ6XM2e5nbI5oYpd7SccF0jwvZ4n15vp/piEn0zJWoE8FL9XiioU/NpXjiBugMg0i20I5Q/e4BE8XJTmAW6ME7PYg6Z7axVoKhehjwoVDaJHbMlX/CCqC9I9o7T+3pXVt8+rCAxg7QEDmB2CCxmeeObM9bCeIl5iI0Bu86+Q9v0/aklSBXe2OMnaAhMNlmtkb2Zy2QAPcwuWNTJIUJ0gqC6F2MJRCqn8osVHHp9xpr2zZbTlnMwBYxvkJmu0XT+EsRXh8tHptkMCUKH1NiCURq9m1jnQnOJqInv8z3aEqNF7Mx+4XRvm76OyfmJNfZdpWoNTjCx/RAl/YkBIwQF58oXT8X+ijbfAwHOG5xEju3aBAuGihwkRnJ4BANQ2yG6pv1LLcSlGMO+fO3EiLAPJcDuKHHCLMK9cItrk6MHC3KBS7SYqEdpffG6mUCf9ECOba1UGoWepDkbOIci5YBSx+BXdsclR508R49x+1sRR6e7iSb0+upeK1WzHLcdpUmVnrQwXvEmGfq01HNwrVkLhxW9ZUSTNUfAzhBr0TOYFCV0aUE3bwnWKNAt0/ZiLEyyjN6LgZlJR7aEnsunmGStHbT5ljImjhKspji7u/AUaKQZPT4QxC9zx2BJR5s7zmSE0gi3RqPZ8fci2cN+djRFse3B8WbcwRnFXQN9Pg3SDN3osR7bF8JcemkeLsKN0zFU03QJIdCM6B3p/Tsk7WkykAZDs8oeHCyhwbBY+87aiPPIVdusRTfWeFjQwFSJ67xhPFqLZpFxFb2ulAP1hZcZvE0824rZ3GLnhsz7jYo4n+65l24BpJi9xm5LU6/EDQDH78O0yPQWWYMZlV5ioIHfQnoOlncy567GpPA56ukhk+Jkeq6frhw3Occo3z3eIhEw5aDfIHIfCJZEq0oe5UjKCrOCS7wnyAFb7E2LN2DoXoQkVV4VejrQbSxX7xbWiwwC/eZMJd4JciulZETWEr+5MuWJI3Cv0GUbmv1253ja+fsc29eo5aHqEUndn15f8Mq+AsS5UNOW4qc7gAAAABJRU5ErkJggg==",
    eh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADySURBVHgB7de9DcIwFATgl8AgWYVhkGipYAQ6KNmGUcgiYHySaVIh8u6iSPc1Ubo7/8h2hJmZmdnfukiyP92e+G66srtfjmOI9JGkjcTwKt3jcL4OIZJWoK8jX0uMIS6RtoQAod81fKkl6u+oWE6pBUBdIr0AKEtQCoCqBK0AKEpQCwC7BL0AMEtICgCrhKwAMEqkncS/QNjpiR0zSQt8lfbNmH5pASyhNuoDZgGzETNJN/E0/Go2MSs8SA4yVnigXyWY4YF6mWOHB9p1WhEeKA8aVXhIf1Iqw0NagSXCQ9pJvER42EaSNpXS8GZmZmYzfQAnVNcl7N7aEwAAAABJRU5ErkJggg==",
    th = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAA0CAMAAACuLKj9AAAAP1BMVEUAAADuNSTwNST+Lx/wNiPxOCDvNiTuNiTuNyTuNSbuNiT/NyTxNiTvMyPvNSTvNSXuNSXvNSPwNSTwNCHvNiW3sFhdAAAAFHRSTlMA9lEHVxG3vs3Sxw4zGqBg5ZB4RcOfPMYAAABgSURBVDjL7ctJDoAgDEBRiiCKDA69/1m1e9uYaIoL/vblm1alzFtBcOyHV5XBDKTc67CRgqT2rYLt+lTxYLQSxnvzM+EmWBjUbPqbjZ/aIlnUNRMES4IZv3JG5bKTqXUCzkgPy8e6d3QAAAAASUVORK5CYII=",
    sh = "/assets/png/Lv0-c3baf0ba.png",
    nh = "/assets/png/Lv1-cb6d787f.png",
    ah = "/assets/png/Lv2-fabf9d77.png",
    oh = "/assets/png/Lv3-d91fd9c0.png",
    Ah = "/assets/png/Lv4-c0e4f354.png",
    ih = "/assets/png/Lv5-98a2cbb8.png",
    lh = "/assets/png/Lv6-3fc5204d.png",
    rh = "/assets/png/Lv7-fa9f063a.png",
    ch = "/assets/png/lv-fb07f0e5.png",
    gh = "/assets/png/ruleBanner-4ef266c0.png",
    dh = "/assets/png/server-7dce1a10.png",
    ph = "/assets/png/serverbg-97d6004f.png",
    _h = "/assets/png/shareBtnBg-11590d5e.png",
    uh = "/assets/png/subOrdinateActive-60da1a87.png",
    vh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABWQAAAB4CAMAAABCfwvEAAAAPFBMVEUWHysAAAAVHioQFSYVHioVHSkUHSkVHSkVHioVHSoUHSoTHCkUGykTHSoTHCkUGygRGSYVHSkUHSkUHijLKKJbAAAAFHRSTlPPAMILp4dwZ7qxylhAeEoqHJObM4CPlVsAAAKcSURBVHja7N1dcoIwFIDRC4GAgKLuf7Gd2na0HWmtJm/nLOKbTH5uotmQlqHvxnYKADZN7dj1w5KaDfcju+YuAHhYl9dHI5uGXQDwT7shPRDZlNsA4AltTn9FdpZYgKe186+RXW3FArykW7cjO7tLAPCiad6K7D4AeNn+fmT7AKCA/l5kTwFAEadrZK1jAYrrf0Y2BwDF5O+RXQKAgpbbyB49QQAoqj3eRPYcABR1vkb2EAAUdviKbBoDgMLG9BnZIQAobviIbHLqBVBBmy6RnQOACuZLZP2DAFDF7j2yawBQxdqEB7UAteQmGp8hAFTSNZECgEpSGA0DUM0StmQBqslhWDdANX049wKopgvDYQCqGcPgAoBq2pgCgDokFgAAAAAAAAAAAAAAAAAAAOCNPTimAQAAQADkbf/A9nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFxoYO3dQXLiMBCG0f5twDZgxyT3v+tsJhXIwGISaffeIb5ySe4W0Mm5hgKgk6GWAqCTpQ4FQCeHOhYAnRxrKgA6mepaAHRyrbEA6GSsuPkC6OSQyqkA6OKUylsB0MVbKjGOANDFklRyKQA6uCSVjNYXAHQwjEklMY8A0MGUpJKMcwHQ2Dz+jWy2AqCxLZ+RNZAA0NohX5Hd3X0BNDXsn5F1YADQ3Jb7yGYtAJpZ8xjZWN4N0Mwx3yObWwHQxC13kfUtC9DUMc8ia+khQAunfKncufqTC+CXhmteRTb7ewHwC+977lUebfYYAPzYvOVR5ZtxcmYA8CPDNObfyMosQJ/EJpVnPlZv0gD8h2X9yDOVF/bLelvm4VwAvHQe5uW2Xva88AcsyQmJEuuXpwAAAABJRU5ErkJggg==",
    mh = "/assets/png/subordinate-21a30f95.png",
    hh = "/assets/png/team_partner-ea4de013.png",
    wh = "/assets/png/team_port-30473643.png",
    bh = "/assets/png/top1-d83fdb57.png",
    Ch = "/assets/png/top2-ff30d359.png",
    yh = "/assets/png/top3-360e54b1.png",
    fh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANSSURBVHgB7ZhPSxtBFMDf7Ca7iVJYsJf20ObQ9lSpbT9Ak0tBEAwtQhSx4CfwG6jfoP0C1oJgQApKBY96ak+tQnuyhe6pPbUkjXbNrjvT97aJJHH/ZFZiVPYHYWfzZnffm/fmzZsBSEhIuNQwOAPO9HReuO64ACjiba7xwj1gbM/lfDFbLpvQY2IZIIpFw8lm51HxudCXK8rL9OHhIltfr/i+Z2ZmyHXdMZXz/W+Vyqe7W1t1kEQBSRrKb0cp7/XlfM7ri8/4yf/ats6F0B3Ghm8ZxtjX0VEdJJE2oDHyI932p77O4OC8n2ywXP6RzmRWBWMHjLGhO4bxCCSRCiGrVMopjH2HGHBVLWRXVnb8ZGJ29ppzdPQcm5rD+SYZBl0i5QFFUeYhJqrrFoNkbGmphpfPXruRDLrWSaYzkwidTjCUxsPkOPI/6aqlUrdBAikDhBCxDYCIkW2GDef8GkggPYkvGnIeADAhLri4hYn/TE5ep6sixC+QQNYDGxATb4UOIauq9+kqVLV3BuAcWIeYUGkR+F5Mo7jo3aN2StM+ggRSBmBts4Nh9AokoWeC6iJS3rXtMWofc/6lkVK7RnoS67q+wCLiuRUKHd2yFvxkXi1Urz+jzIMe+J2tVqVGn5A2gC0vV9KaVujGE9QnbVmFoGKuWQvRyGvV6jsWo5g7UzlNpQVmlwWVsQcta4SJim/QfKGQg4SEhIQrTWQabZ48YDOP6dHAtGlgTWGAPCajYpAxEzf7b9IBu7NWaJWOWpkDDaAcj/n9NSqdh95g4iJWCCoxvO8rylPcBdZUTdsMMsR3JT6YmhrBB3d7qDxB++tdG7/lJ8xoWo02+1Rm0H65WW53csoD3sYdlY8ZJnGooCce+nlCTExox6nUYzRkGG9tPMF42+mJUx7AUdk+R+UJg0LVT8DW1uz06uoHV1H28VarW1a+s0+bAU6pRB1ycM5QqFqYLILkmXr9PV5sHNwbh6XSzVZZmwFcUV5Anwg9dkFPQMCxS5sBTIgc9AmM8ydh8pNjF/RC6//tHuhD+JwQMe8GBgb+T15V1Vr/b/dAPw2gRTKMWs3b7GBabTsAvkjnQqEGNOYBEeyBy0hiQL+5cgaY0D/MqA5U3NEPEhISrg7/AJ5CT0AKw31WAAAAAElFTkSuQmCC",
    Bh = "/assets/png/u2-c803ae0d.png",
    Rh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAFkAQMAAAA9vAjTAAAABlBMVEVubm5mZmaxTiEnAAAAAnRSTlMzFJgifHUAAAARSURBVCjPY5jAMApGwVAHEwCTVwEhkXttbAAAAABJRU5ErkJggg==",
    Eh = "/assets/svg/Line-5603a544.svg",
    Dh = "/assets/svg/wallet-8814bff8.svg",
    Ih = "/assets/svg/anbg-2e633fe1.svg",
    Sh = "/assets/svg/changlong-7864b972.svg",
    Lh = "/assets/svg/chat-fd5f6e5e.svg",
    Gh = "/assets/svg/close-d5633c35.svg",
    kh = "/assets/svg/copy-0f160247.svg",
    Uh = "/assets/svg/down-ce002f18.svg",
    Mh = "/assets/svg/errorTip-b80a8dd6.svg",
    Th = "/assets/svg/eye-af3b59e2.svg",
    Qh = "/assets/svg/AG-57d80489.svg",
    Vh = "/assets/svg/BB-3b62048b.svg",
    Oh = "/assets/svg/CARD365-9a1f713d.svg",
    Ph = "/assets/svg/CMD-2f1fed5d.svg",
    Fh = "/assets/svg/CQ9-28cbe1a0.svg",
    xh = "/assets/svg/DG-67d92c87.svg",
    Nh = "/assets/svg/EVO-d87fc8c3.svg",
    Hh = "/assets/svg/FISH-1ca23ffb.svg",
    Yh = "/assets/svg/HB-af706a77.svg",
    Wh = "/assets/svg/IM-f20d13d0.svg",
    Jh = "/assets/svg/JDB-29945bf9.svg",
    Kh = "/assets/svg/JILI-09514bce.svg",
    Xh = "/assets/svg/MG-25d464a4.svg",
    jh = "/assets/svg/PG-a80ccdec.svg",
    zh = "/assets/svg/PP-e1337123.svg",
    Zh = "/assets/svg/SABA-1063b963.svg",
    qh = "/assets/svg/SEXY-368e7b37.svg",
    $h = "/assets/svg/SPRIBE-8cda730a.svg",
    ew = "/assets/svg/TB-dfadfe00.svg",
    tw = "/assets/svg/V8CARD-f2121bac.svg",
    sw = "/assets/svg/WICKETS9-be2285e3.svg",
    nw = "/assets/svg/WM-64d293d5.svg",
    aw = "/assets/svg/home-863da605.svg",
    ow = "/assets/svg/hot-7cd8b5f7.svg",
    Aw = "/assets/svg/main-b7c496dc.svg",
    iw = "/assets/svg/nbg-dba06970.svg",
    lw = "/assets/svg/notice-cbe50ffa.svg",
    rw = "/assets/svg/play-d1d7d017.svg",
    cw = "/assets/svg/playactive-34625475.svg",
    gw = "/assets/svg/promotion-f9fa0f41.svg",
    dw = "/assets/svg/resultanbg-bfa48a61.svg",
    pw = "/assets/svg/voice-4afb7225.svg",
    _w = "/assets/svg/wallet-8814bff8.svg",
    uw = "/assets/svg/wallet-8814bff8.svg",
    vw = "/assets/svg/chat-fd5f6e5e.svg",
    mw = "/assets/svg/home-c02b877e.svg",
    hw = "/assets/svg/main-b7c496dc.svg",
    ww = "/assets/svg/promotion-f9fa0f41.svg",
    bw = "/assets/svg/wallet-db917e01.svg",
    Cw = "/assets/png/0-9eed23ad.png",
    yw = "/assets/png/1-793a027d.png",
    fw = "/assets/png/10-ad370b50.png",
    Bw = "/assets/png/2-5381bc14.png",
    Rw = "/assets/png/3-772507f8.png",
    Ew = "/assets/png/4-addcca26.png",
    Dw = "/assets/png/5-309a53a6.png",
    Iw = "/assets/png/6-57560368.png",
    Sw = "/assets/png/7-1deed869.png",
    Lw = "/assets/png/8-b0ebfa02.png",
    Gw = "/assets/png/9-b2e01899.png",
    kw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACPklEQVR4AZVUv28SYRh+vqsmh1PBrR08A5skdiiki9RJxjLq0IRujtdzwwEaXIXzL7CjbnWkGzg0ERNJ7OAAEYdiHIBOHon0Pt/3roT7RSlPAnff977vc+9vgQhIXV8HlCIUsQspt+hKcyWiA4E+bPlJmLXjKFsRJntVgJDvEVPXkckCGxtAIuEKLQs4Pwd6XWA07kPiKEjsI5SGUYeq6sjtArknQCyGhWi2gNNTYGJVRK12hLBnRllWq1IOh/LWYF22YUcCZEVZKq1G5iUtvZZOqmYhy0PjJwoFzQnTiy7lqkFhDQZu/pJJIJsBMhm/XqPBepeQ9sM19g7340Xs74eVPnwExmNgOnXv+J2Lwkil5rqbm8DZmYp/V38UKNhDMuUna7ddzxaBZd3e/MzFy2xzrE8VSKEhnfYbfGljKTgCL9hLIR4rxLoVao9ebymfk1cv4nH+15RI5Zv6bwYuUgSYsI/xyH/L07EMqaT/PJmAR1Ohxung4sIvzOexFNuB1vlO1Zf2LwW23UT7qz8E/vpNpCzLBgidvIuTtcrOzg9Mr17i7h3V11tMGk/wrPIioLyqlPIHwPMXYbIWzfW3Tp8WxYFzpnVVcMZnOJIrg22c0aMB8ULqh6asvlmNlHXZxjAqMx7/+tJJcC9WRv4Zra8cFsKiiraa9PtM73/fiXpdjyS8Ji3SbZmWquYsg/SjeV+OqL0Gv93RtCxaBuJAmG9PvPZikRPXOdmjcdKcaXLBW7pDT3LPPhameRm0+w8XkKbOO2F0CQAAAABJRU5ErkJggg==",
    Uw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACP0lEQVR4AZVUzW4SURQ+50476ALTBDewcbrBjcZG3HTVJrpsoo8AGxufovoEukNgAS6s2/oGsgdDKNFIF043bUzEECApc4e5x3suhszAAPKt4N5zvu+b83MRYkDV6o53I/No4QEC7Okjx1wgtojIRQWf7Vcva3G5OH/glUovELCKtr2D2Szg3RRgMvnvUoJyXaCrK6DRyAUFb5YRG/ilylu/WqOg0SQ1HtMqBO1zkjrWr1RO4sn0hf/xlNRgQP8LjuUcNhIhuykW8+xsE7IwKTvlUs1qKEvln9b+viMePogI0fU1BM0mQO8PkOcBptMg7mdB6NqGoZpfOa6/bW/vWuzOSt7JW8+eLgZ9qQMMRwBBMD0cjYDcS/NTZDKzWG6c+vb91kTKX2LLsp5j6NKQdbtTZ0vAYux+Bts2zoHoUBChI3adaMKPLqyDnoTIf0ylQKB4JDTtHiuEEVFfAur1ooTTWXVEbPScQCykjD1mQpeGw6iatr8O3PEIPCPQEojQmrdvPcnBOpgmhMArqUhdimBCddMET0bUrdxyUpF7vDCLXHdB4kwkbts1XY9+0DlfSLIOD2afph8LwEwato6OFsRUpwO6bO7soeC14fWhwZA2hs7xax9IFsv5iIp8X37nn37ajJTJdI5XLL2OrQ1fsNNJu72aaOzRpNGYOtNGwhwLD6zZbWGd6EF1uH7o3ANMJKaF1+NFv3tAFxf8WPQJqJA4Pj5bSRgmFqj3HNEx22QY9czqWSNFdW4mFgr9+by/AOgiF+80fF8AAAAASUVORK5CYII=",
    Mw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAZCAMAAAAVHr4VAAAAhFBMVEUAAAD7Imf5I2b7Imf6IWb6Imb6Imf6I2b7Imf7IWb6Imb7Imb7HWTzI2j6Imb6Imf6Imb4Imf6Imf6IWX4H2T/HWb6Imf5Imb6IWf8H2b6IGL/G17/HV//FV/7Imf5Imb6Imb6IWf6Imb5Imb6Imb6IWf8I2f7I2b6ImX6IGb6IWP6I2cmZ4EUAAAAK3RSTlMAj6/rkfSp++21pXgcFtG7nXJtPiYf995tTTATEQzp4dTGxa2hmpKEYjc2G6am2QAAAKZJREFUKM+N0kkWgjAQRdHCEExCpG8F7Pva//7MgTBQCvRN7/B/+OzphtEWyNITmrgm6BXiUDShPGJjuwz+qqkc1+aMPbrBNEOifd6jj2SyR4fGYgmRxMAzKaUIFDXYCKy7C+NcCMGmWMIVbwGa1lOUEEhIZ/AAHq/kDGKqj4hzWGbQbExtSyAWyo/jOEkSi3RLyJdWCXvMOWXMXjC7n1dfeb6Gn70BOww82KtfvKAAAAAASUVORK5CYII=",
    Tw = "/assets/png/0-4c03f207.png",
    Qw = "/assets/png/1-bc0ffd53.png",
    Vw = "/assets/png/10-33861487.png",
    Ow = "/assets/png/2-45f9f9a0.png",
    Pw = "/assets/png/3-64da321b.png",
    Fw = "/assets/png/4-06166f6a.png",
    xw = "/assets/png/5-8c6456c9.png",
    Nw = "/assets/png/6-12383ccb.png",
    Hw = "/assets/png/7-013fd6c0.png",
    Yw = "/assets/png/8-3370996c.png",
    Ww = "/assets/png/9-e59e395f.png",
    Jw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAqFBMVEUAAAD/xAD/xAD/xwD/xgD/xgD/wQD/xgD/xgD/xgD/xgD/xgD/xQD/xgD/xQD/xQD/xgD/xgD/xgD/xQD/xQD/xQD/xAD/xgD/xgD/xQD/xgD/xQD/xQD/xAD/xgD/wgD/xgD/////+/D//fX/0jX/yAv/yAj/8cH/77n/7K7/4Hb/2Vb/1ED/yxj//vr/+en/+OL/66f/6Jn/5Y3/4oD/3Wz/3GT/1UfjGAQ7AAAAIHRSTlMAJxP9+4YP+Pbz6p9pYlRL5OCMfHRwTkdBq6aakltDOzpLMIMAAADUSURBVCjPrdDJloIwEIXh26gIotC27TylVJzn8f3fzJSEo2KSlf8mw3dSi+AbOT+ZnFdteSKTN3iqWxUfVZ/vu0JTkGpTaIvU6F89l5LxgTDUYW3khKkQcNRow/hAWGrDt3EefzYuAD2rQr3f7BdTdXserVPlCg8e0zzxE9GK1xpUNT7dpMdyPRIt+fwPpNX5a9YjmsXikFWuzDcT6QuiC+/reKuST5y2V7nJlQGd78YrjXIh+zRmrUBTVFQ/2Ye2psdaDGGo5UttwNiw5Eew5Lr4YnepRDpSPdhNpgAAAABJRU5ErkJggg==",
    Kw = "/assets/png/welfare1-10680ee8.png",
    Xw = "/assets/png/welfare2-ee2251c5.png",
    jw = "/assets/png/welfare3-f8fea12e.png",
    zw = "/assets/png/welfare4-a1a25caa.png",
    Zw = "/assets/png/welfare5-cd8a4785.png",
    qw = "/assets/png/ruleBg-5cdf9658.png",
    $w = "/assets/png/succeed-620aa289.png",
    eb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAABfVBMVEUAAAD2zsT/zFz86MX/6ML/zXTt0Y741pr64LP1xGz1wmb3yHP3yXj97tP30Ij86833zYH97dP41JP87tP2wmb758T87dP1wmb64bX3zYP97M/547v76sv53qz40oz87tL1xGb2wmb1wWb97dD62aD41ZT75Lv426X415r76cn626P43Kj2yHf2x3T3y3z63Kf40o3636z61JH1xGv1w2rzxGv636/30Y330Ir6I2f3zob3zYL75sL647r53az52qT2zH/64LP41pj41JX526f52J/65L3415z2ynz1xG376Mf52aH405L2yHf1xnD5I2f76sz64bb30pH2yXn2xnL87M/76cn64rf1w2r758X53an2x3X415v75b/526X41Jb6NW76JWj4h4H4inn6O2364LT6wqf5mJL3tID3i3P5QnD5M2n6p6L5wqH5w5z5ypv6oZv4xZT4v435N2v748L5vJf40pH3uof6U332wHz2tnf2x3b2rHP2qnL6K2pSKHouAAAANnRSTlMABASaEBAG+u3q6Zhb+O7r6unHxsawk5OEg4JbWlFRS0r4+Ovr6+rq6ujMwrCunJmYjo6BgFZ7xdIVAAABiUlEQVQoz3XT5VbDQBAF4BCkQHF3d9fQUKFY3d2NGhQKFNdnZ2aTpmkb9u93zu6euXco4bRM7q4vm2UrfXtTLVTtaRppZTShE7M+ErccdY02V+v4kj/DaC6Az4AVxz0dImxojKr9pzyfIyu1W7SggypdHRs2yt5okmKrnNMJXxDYSfgS2EXYbfWQ95u6/+M2/P+YQ4o/Pq0e2z78a16K84Xkj8fYRlPTXoFDwBHC+QJr//YYAzPUkIhjwHFg1Osv4GGqv5YtrrcnUHcYeIDq9TpMwfdE1skAm5FLqAZ32GYMtFOdwM+/bCLLaDgupVn7lZbjOcLB2yQ4x4+oSp5nyeWqKPodMlGcKX95P2HdA3rMfH8DqhB4gBri2I9eRE3xiSAPw1h8wGp/JseyaVSLwDiWhm6eGXDQuIjbaYgEmcSds7MpIW5IxHiAga4KbSi+6MUMgWIdpMqCfMiXqSrP13Ib5EIVpcqySVeKXM9yWrwGrdXc01G3RJWy1C0RWcHttQWZbLFvR7SCf5MNxSs7wzOKAAAAAElFTkSuQmCC",
    tb = "/assets/png/bg1-a632ef32.png",
    sb = "/assets/png/bg10-d1b6f11a.png",
    nb = "/assets/png/bg2-a6de80e2.png",
    ab = "/assets/png/bg3-175e9ad5.png",
    ob = "/assets/png/bg4-755cbea3.png",
    Ab = "/assets/png/bg5-2ea411ce.png",
    ib = "/assets/png/bg6-f54c0918.png",
    lb = "/assets/png/bg7-8a89dc2a.png",
    rb = "/assets/png/bg8-8213c27f.png",
    cb = "/assets/png/bg9-e7497af2.png",
    gb = "/assets/png/1-9dd40f94.png",
    db = "/assets/png/1-d1b59662.png",
    pb = "/assets/png/10-7d509274.png",
    _b = "/assets/png/2-344b2433.png",
    ub = "/assets/png/3-3d30f3a5.png",
    vb = "/assets/png/4-cdd5f2c5.png",
    mb = "/assets/png/5-5e5385e3.png",
    hb = "/assets/png/6-59624b2b.png",
    wb = "/assets/png/7-e2c83d07.png",
    bb = "/assets/png/8-b79b5f97.png",
    Cb = "/assets/png/9-ca8f5f37.png",
    yb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAABoVBMVEUAAAD1z5T86MX/6ML/zXT1xGz1wmb3yXj1w2n31Jf415z97tP3z4T868352qP747n97dP2wmb758T87dP64bX97M/1xGr547v3ynz2xm740oz87tL1xGb52aH2wmb1wWb64LT53q720Ir97dD41ZT415r2zH776cn626P405D77dL87tP43Kj41Zf2yHf2x3T63Kf40o3636z61JH3zob3zID66cv86sr54K/53KkVHCb65L364rj2yHb2yXn647v30Y32x3P64LP415z3zob3zIH2y3775sH52aD41pn76Mf53av405H2y3/76sz636/53Kj3z4n2ynv87M/76cn75b/52qT1xnD758P64bb1xGz1w2l1Z0341JT1xW7758WzpIj53q330IpxaltdV0r41Jawm3R6b1pxaFZxZ1NgWkxUT0Q6OjgoKy8cISkXHSfw057lx5HYvo/Is4y4qYuzpImJfWmHeV5nYlZwZU5PTEQuMTPz26/v2K7szpfwzI3OtYe2n3bYtHXPrnN6cWF1a1hxZlF7bE95ak9WUUU/Pjzufb31AAAAOnRSTlMABZoQEOrpmpT9+vjs6+vq6cawk4SCgVtbWFFLSvr4+O7u7uvr6urozMzHxcLBsK6ZmI6Og4NdV1NQenIjTQAAAY9JREFUKM9t02VXAkEUBuBZA7E7UOzurgWklBJQCUVAFOmWEATs1l/tMDDLAL5fn7N77pn7XsCE2llbaBlsmFxc76dAeaq7Ro4Oj08VUqVLLRrbqCnV3la+pMjX+019BFJVRiHDFzk+0NQVuUPOq2DdEtYqVSXLdILC91uGS8jnOY6nPG61WnQCeU8g5qCZmxlO0jA/T5hrc/N3azHHI5lY1EOnMNt64NTjmO3vkZhCWh8MMlxLgQE9Yj7ku/ANHC0QYtjMBZ1l7CLYwgbzkE2QHxz+bMTpdzpDYaf/rcDtoE2vVZmMPH6CJvKtgXxms7BAY4FvSbYiNluGSzn7HA3kWYd4iPn5FQ3jkSpfSGaBOZJ/H5U+zGLI7aATsTDP9IebJpkNn8VAsLeUuYBqJjmYwSyAzKLgSgwqOWYYkntyC51GbUiQ/IUYLRRsI75POhwOr9fn+0ynra8yyDZOoUxon7hLTFnYuKgd//EyUeRKris9A4md5Km+8iMaLXLTZg0oD7W7MtPSUD8xu0qc4B/n8srPMJU9XgAAAABJRU5ErkJggg==",
    fb = "/assets/png/1-19c3074a.png",
    Bb = "/assets/png/2-fbe3e556.png",
    Rb = "/assets/png/3-9fa609be.png",
    Eb = "/assets/png/4-7d37838c.png",
    Db = "/assets/png/5-12691e3c.png",
    Ib = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAXVBMVEUAAAD/n5//n5//nZ3/n5//n5//n5//n5//n5//n5//n5//np7/nZ3/n5//n5/+i4v/n5/+iIj/n5/5WVn9hYX7a2v7c3P////9jIz6Y2P+lJT7enr+9fX+6ur8t7d2ADHTAAAAEnRSTlMA359gIBCQcEDvr4Awv1Dfz79yPRDGAAAAzklEQVRIx+3Vyw6DIBRFUUEQ320vKiDa///MduDgGkQgTdM0cY/PCokRza7i43lBvTWts+8rOI2y/V5AKMLxnlUQrMCggIjwEV0MyBEgfwO0nVAPKtgpsHLfAEBaP5iNdAEQDNy9C6D0gUkeg9wDtEwB+AATCbadXtQzDmybVSk1pIDlDXQKAKVWGQXGbWSt+dJjBZMKZpn2amCBQcW9AObxAIjTC6TtiLt1dfnzO/0h6FM/lQyBEsLVGa6BUIRlSYI4/yBG78RbLXh2ldQLm4VemLc0iw8AAAAASUVORK5CYII=",
    Sb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAPFBMVEUAAAD/n5//n5//np7/n5/6WVn4VFT9hYX6YmLxRETtPDz2UFD0TU37bm7zSkr9iYn9gID8fHz8eHj7ZmYTLcSqAAAABHRSTlMA75CAjdT4PQAAAPVJREFUSMflldtuwyAQBePYA+ty8e3//7UlckKtlVj6UlXpPFmrMwaMYW9vwzhMJsO95u9TF+NLGPqE4SVMnfy64BGvMrWuBQFUuta1AIiO17qekqCndNaNRa9J4Ei+8ystPBHfI+wQ5o8vZgebLWy4R/xUdkvwJT+fFGMxBCHPc44xhBDLE7SFMkCOwT0oimNtComYSxygKDmSmsJBeT0nZRCkKUAs+WpEMITgoOKCIQjuKjgOY9GOC85Y9IrCtzdO5cXY6UUNYAjTzoXN/r03qOw9B8gLT5bOe8mnAySt/+pe+gPX/Y9b1tgnfG+jPW13vL0LnzbwHZcIZY3OAAAAAElFTkSuQmCC",
    Lb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAhFBMVEUAAAD3WFj5Wlr5WVn3WFj3WFj3WFj/XV33WVn6WFj6WFj5WVn6s7H6WVn6WFj4sq/6s7H7Wlr5WVn0V1f6s7L5s7L5sq/3r6/3WFj7tLH7WFj5Vlb7r6/6s7H6tLL5sq/8r6/5WVn6s7H6p6X5gID5c3H6nJv6l5b6jYz5enr5ZGT5Xl56KD9lAAAAIXRSTlMAYO/fgEAgEHC/n6/fz49w739QML+vYCCgj39QQM+fUFDLHkfrAAABK0lEQVRIx+2T2XKDIBRAkUURcIlR07TpgrvJ//9fW4cRtDEwk5dOJuf5HBEugIfj8JUcP3Ihqgkh8uKYnIItOSnS6ippUR7WdpDk1U3ey4V/EpUV8an9snIimQPhFqRzkLoFYg4at2CcA9nWdr1upQ6kHC1J11ykEfxyHvstu2/Ok2IEikvbDH1Xq9XquhuGpp3kVWDh/gBDFx1ioAuXAAONj+w+8oFZvNh8pnydeOG2HdJgIe/UKyKYR3C104hRouxXfazI03WwJ8SbyIhvfJiEizmgeA9uQHbw7+AQV4sv8d8og9uDg1HIMMbeDxTHjCP4HNz/HZyUlsHd/aahm4/mgLoFxlFmLleDABMvkgrrrPXd4Bt7gZz64DoBoTEPEVI/gUIW08wHj8Y3u8iXkyghpcMAAAAASUVORK5CYII=",
    Gb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAqFBMVEUAAAD/xAD/xAD/xwD/xgD/xgD/wQD/xgD/xgD/xgD/xgD/xgD/xQD/xgD/xQD/xQD/xgD/xgD/xgD/xQD/xQD/xQD/xAD/xgD/xgD/xQD/xgD/xQD/xQD/xAD/xgD/wgD/xgD/////+/D//fX/0jX/yAv/yAj/8cH/77n/7K7/4Hb/2Vb/1ED/yxj//vr/+en/+OL/66f/6Jn/5Y3/4oD/3Wz/3GT/1UfjGAQ7AAAAIHRSTlMAJxP9+4YP+Pbz6p9pYlRL5OCMfHRwTkdBq6aakltDOzpLMIMAAADUSURBVCjPrdDJloIwEIXh26gIotC27TylVJzn8f3fzJSEo2KSlf8mw3dSi+AbOT+ZnFdteSKTN3iqWxUfVZ/vu0JTkGpTaIvU6F89l5LxgTDUYW3khKkQcNRow/hAWGrDt3EefzYuAD2rQr3f7BdTdXserVPlCg8e0zzxE9GK1xpUNT7dpMdyPRIt+fwPpNX5a9YjmsXikFWuzDcT6QuiC+/reKuST5y2V7nJlQGd78YrjXIh+zRmrUBTVFQ/2Ye2psdaDGGo5UttwNiw5Eew5Lr4YnepRDpSPdhNpgAAAABJRU5ErkJggg==",
    kb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABGlBMVEUAAABnv/sgit9Wq/cul+wtl+o0lexOp/VXrPg5m+0kleg3m+03m+04nO03m+03mu4xnuo2ofIsmfUklelIpPI5nO05nO05m+1owPtowfwzmutju/k4m+4jk+hlvPo0m+45m+1pwPsllegklOhpwfwllehWrPdXrPgklOdXrPg5m+w4m+0klelXrPdJpPJXrPcllec5nO05m+1XrPgklelnv/w4m+wjlOlUq/g4nOxWq/c4muwjledTqvgklekklOckk+gjleZEovEhkuZQqvRas/hKpfcgiuokku06nO1Zrfgllehrwvw5m+0xmetqwfssl+kolulbsPhYrPdDofA1mutKpfM+nu9lvPpjufpdsvlWq/dVq/ZUqvZYTNSJAAAASXRSTlMA/Rj5IjAR/vDgs6KcbGBSHAkG/fz76+PcwLKbbmlfOvb09O/u7Obk4dvW0c7IyMXDwbu2q6SWiomIfHx2b1tWTkhHPTAlHxgOUE3sQAAAAUdJREFUOMutkddWg0AURW8U0hOK6dXee++9wUAABU2i/v9vyAxwUYI+ZT9lrb1zLgkwbqTmnviPlju1oZo+foy3D52Dea2vUrZOb5O/XLNer80YmqYlVI/Xd6WyupOTgiCheRgvfvCpMDgM0Pu8xQYJ1+OF0cAYBBoH9KcwMPrD0H8oHs4EBgO6jgdsZa2Vd4MeBpNM4IGMAEW6YMYHqdwzFHT6CCQ2SBWAfp9eiAQbS/R+SQAQmNetSJC+v1j8sosA3Wl/IHpiJSm1zgCSmWAgDNL0x6fsXRlccgrDJITgK90s2ezPPQQAXg8OkAUIOFF8CgAN9GQfA67sB+UuF3pyA0g+mKjST7rJ/DZq9uQhjsX8LA8/4CuoTeJxyURYVOm207N8PdWGCGLDtAgydw2jXC2jz3IQh9xeZ+vZO/gT/ih7LsJ4+QYCb4cTftTUjQAAAABJRU5ErkJggg==",
    Ub = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAhFBMVEUAAADvxADovgDuxADvxADsxwDtxADtvgDvxADuwwDuwwDuwwDuxADuxADuwwDtxADvwwDvxQDuxADuxADuxADuxADuxADuxADuxADuxADuxADuxADyxwDvxQDtwwDuxADuxADuwwDuxADuwwDuxQDvwwDuxADtxADuxADwwwDyvwDuxADLJMXoAAAAK3RSTlMA+gfozQ1XC/eem1tSi3ZzNTIs49nX0cnGgntnEtvAqZhuXk9IPdu1lCIURH9X3QAAAQdJREFUKM+Nk29zgjAMxkNbaGGgyFQEnE439y/f//stsjVN2fVuz4ten/wgl7QpxLIWUioqg4iZqeq/TK00svRaxbR9w0i7jaQPGS6UFYKST/PWcbDvA//Nr56QlR/DfvtT34oD71dQ1zPb9fwzdzQtKtF3V3t3AjiOFwVQ+sgLCDMAjIhlN5185Jnw3psG4NWhlCHMJ3Ig8zUdZO8AeXAj3HXbh4iVGB+HjrjtA/bJ+YuaKuDksrTtx4VWp0JCIxujxM1cYOcjFeFCdvl5o6WRxwKaG5/vQA1cx+JK9FnZUocr+c+FQht6M4a3bpMYNR6mNHdFNMi79CCnn4FUXZnMP6KE8jz23zTFVWWWwpROAAAAAElFTkSuQmCC",
    Mb = "/assets/png/0-38e16044.png",
    Tb = "/assets/png/1-fc2bf367.png",
    Qb = "/assets/png/2-aec2ce2a.png",
    Vb = "/assets/png/3-d076d97d.png",
    Ob = "/assets/png/4-24bf9e7a.png",
    Pb = "/assets/png/5-50ff4cff.png",
    Fb = "/assets/svg/ArPayBackground-8c36eecc.svg",
    xb = "/assets/svg/Ar_Gift-f96ba611.svg",
    Nb = "/assets/png/BetSoft-1ada89f3.png",
    Hb = "/assets/png/EVOPlay-b9fb43d3.png",
    Yb = "/assets/png/IM-da817ac5.png",
    Wb = "/assets/png/Lottery-3e32dad3.png",
    Jb = "/assets/png/SEXY_Video-52b1e739.png",
    Kb = "/assets/png/WM_Video-6de833fe.png",
    Xb = "/assets/png/Wickets9-3ce2811c.png",
    jb = "/assets/png/YGG-dbeb9403.png",
    zb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAoCAYAAAB5ADPdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOJSURBVHgB5Vg9bNNAFH7v4iRKUBfSdkCtYMqGVOjULgxlqdSO7Rxlg5WtYkRsEVsRS5S2G2uRusBclkhIsDQLIKJWqghLoFFD4sf34vy4rp0fpU4r8UmXO/vu4s/f+7nzMXnwJ5u9E6vX79nR6F227SkKAcaY84bIr7htH5FlnXA+X3X3c6chq6vxxszMQ2G+TxOEIapGRIq8u1siNykl1JydXbOJUnR9KMZ2doraMPqjCl0zIcWiuo42jGSzU5M2WRDizeYjrU3DthfphgDWmlK1jC1y3Wa7AEbkWxzgS8w8h2qBxgXzodh2ZdjhUcuKWX4dNnMyQvSUrsD5RURf7MUoc4zfTeSNBF1RNMISSRoRvkoJUQVs9xGVD8ghOA6pfRltij8pBQLgHWkZE6MSUhi6gfi/ScGM69geZIYZG+hTyFObqFZoMCoYnBuUi/B/aRZJg1yBBsBXqXZCHYaQIgVC/ZMs8p5vOwC+SjWZaxFVYMhcBRWOkCQvdxiTRgSv4yXT3bFEr8SYw1aqCFDXl5QROUOVw+T5QXkKhCr487IPoQWY64nvHJElVGk2xtfsgT6lCZSGWLN8FXIevNm74DLGvYevJDD6MTkWSOFeBnVuaFLjgB2zuU2/jeuK7fSV0X7WGge1sM5O4wV+uueHkhLEsx1ymwjtkrsP5r/tnR+OUiJlPK13Q5Vzk2He6rZFat754ShF9IOc6O2QzIDIUrcfynUKOUEVPqk2tlE6D0xBtwxM9VKzOvyqb6oJjZSoCUV0c/fJdTul6QDlOfVJzqH4VJeYmlDkdXtrrSSW2/eTuoy108kH77yJLMiqGsoOGluas7oPZ17zW3ZCIQUV1lxlrksOyjVFcq7rJHxtQikBkQZlplsPdkK+p45GmytdiCrlWRXCSp4lF8EVT7RdcHD2SQnhODq+9cBsuX2VIo02+BI7qrjNWSKNUg/CUQrZm53NXEeFZGv74iIEVECy4DffwvakGsbhGL6GdM9UgkIrUGS+vac6U3WgxBEW549Yei6ZDqavWqbZ/BbWqUs7T71tXTC/EXV45C27z5y/kciJqVvWd7ohgEq/b+Xzx0Z/EAGfKWxgZxDkQx2oybVuObpVqxXFtaqHge6uIBjFxN7eV230DmI3NmKNRGJx4qd6zHUIUowXCl1rsXeMHjfq6Z4epnFY56AgYushishx9PT0Cx8cnLu7/wGEeY/4EB0cGQAAAABJRU5ErkJggg==",
    Zb = "/assets/png/ar2-3da2c295.png",
    qb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA+CAYAAABk4ziNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM6SURBVHgB7ZqBbRoxFIbfIyA1haqMwAaFCUI2CBtAM0DCBNAJSAYg10yQMkHpBGEENihSSVWJwOtvQ9QI7sD2GWqR+6RIl+PO5//8/Pz7bJZ+qUtHBMtdUeiIyNGRkQkKnUxQ6ORJ+MvG2ZyckVA99g6mIS34Bx0Ch3rk+XLaXT+pxyaWemxBKCTunn3gUo+sD4VOJih0MkGhkydbWDpw6B06CPYTgSzkQuetCJIJBU98HWMF8eXTTaxpDQXUTdcxBt56X1Sqk0iEwwqFwYSYG9yaDpMu2CpIIdG7CtHJAzJolf4nzEOMMi1uTcZbLyNDVlb+QOPPOnzLn6fXRleSBRIVm2ipHg7LdBgQYjm0yq9vpjdYCVLoEJST77T/fjUiLjR2hdg61oJekLsSsoxc0V7gW+J8F2Kshw9nQQrpF69RgupXvkJwgpBOTMkmpBKk8BiCY9QGIfY0ohSktj7c+oOKFGo4vCd37lUZacXo+pBHnFK7UDtNiK3j15zm5j/Jlpx8JI94aSGJykgKsx7edpNcYPpKVGi7ZLXNolKCwbYKIQ/kJSkUzm3HnXVShZxEp1cQ42uQRbacPUr/1MjiJOHUQqsQ60CM2cO1sZSyscFlukHGa5MDrtZHhZih+/5nLC2zoFMIWoWcRB8uIOaRzMQoY9l47ZL1x3Wmlv5tN6sQhCG2wHz6EBV7xiG2w1hauwsW+LrfRjNo0wlelLhOs1mksbG0MriMl0S73bfJFFz1FxPz6WQsLQ0u+hW3nKbgEr1HFuMumZHKWPoMwdikoN+auZjUxtLa4KJuuo4xJHzb5rLRd2WPxnLV55pI7WOz1M6xIerqFFSI1Xy65BdWqb2mn+GAi6CRr7lLErpsnp/rlW5L7AUJD3y44l3ofuWwfSBbfQidTFDo2K+xGqJnsgv4vxx9wr91PayxjNDRBzg32leW9CJoOeF7hgCpLjccsRJQ1sbq9fgsXMG5C3UOC88TbTgXBIE82ubPbHAStBQwr+PoDH/4pjBT86OVAOMZSVk7eFatJ0rgcocVsWq5AaoGsc9kC8fuCt62rWs5OTvc6kPSsxK2l2W7gkMnExQ6maDQyQe9wcKBv2xTXAIYQ6N0AAAAAElFTkSuQmCC",
    $b = "/assets/png/ar_success-c7e602bd.png",
    e2 = "/assets/png/bg-11bee8bc.png",
    t2 = "/assets/png/bg_De-3df6c4a4.png",
    s2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAJ1BMVEUAAAD///////////////////////////////////////////////+uPUo5AAAADHRSTlMA8iaxzxq2DtmsUCOzC8dhAAAAaklEQVQY02NgMjwDBsIKDAwMimegQAjIsUllAIOww0BCJgDCYT0IJM6AmWCGAjJHCIhZQNodgIyTyJyDyMrOEM1BGIDg4NeD7NAzyF44g+Q59jNI3uYCaoeDioMIdlXPSeQgkQZymHJgugCjXli1nFYPSgAAAABJRU5ErkJggg==",
    n2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAMFBMVEUAAAD/cHD/cHD/cHD/cXL/cXL/cXH/cXL/cHD/cXL/cXP/cHH/cHL/cXL/cHP/cXLdIq22AAAAD3RSTlMAECBA35+Q7zC/z3Bgr1C3zFihAAABAklEQVQoz2MgBchE1X9fehBZRK3+PwgEIUTE/v/cIcBoPf9/IkyEyf+bApiO/6IAFWr50gCT84AxAoEkI0iBLFSZyF8Qqf8RRMY7goXywZT9Z7D0N7C+/woIIQ4wh/UrA0QIoiUBSMh/QhbSLwQS5ycgC3H+AVmyAVmIG2TMegNkIY5fQKJeAFmI8TuQ+M+AEAJzMYWwa1zfgCzE/AvhCPlPUEcgnMokgHCqOFAaAuBhxPYNzH7uDKbiA8CBAzZ//RdoSCGCcP5PaBCCKXCA6V4CkfcdodFxEWa4KCzWWmAMDn8PeNR+hURtPlAOkQA2CzB2gxIAHKiCU8n3JHyJiTAAAEB0ac03E+oNAAAAAElFTkSuQmCC",
    a2 = "/assets/png/C2Chelp-f5be328c.png",
    o2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAABICAMAAAAONRFwAAAApVBMVEUAAAD7I2f6I2f6Imb+F2L6Imb7Imb7IWb7HWX5GWH6Imb7IWb7IGX/CGL6Imb6IWX6IGT6I2f6Imf7IWb7IGb6H2P8HmX6IWb6IWX6IWb5IWX6IGX6IGX8HmX5IWb6I2f////++/36PHj7VIn6Kmz6MHD+9/r+8vb+6/H91OH8jLD8gKf7cJ36S4P9oL37YZL+4uv9wtT9utD9rMX8l7j6RH79ytrZR6PrAAAAH3RSTlMAv8fwC/axlRoT16l3BeJjPvrOb1YwIZ+LfkxGOCe5UPyBwgAAAi1JREFUaN7E1NsVgjAAwFCgIFBerYCgyMn+WzqDX8kC9y+FVWoLp26gKoymMeDQVwSFvh+g0PXZ4NDbDAq9l6DQfZtx6CWAQqcnKHR/gEJPa8ChrwgK/XqAQk/vBofeZlDovQSFrtuMQy8BFPpbgUL3Bzj0GnDoFEGhuwEcemxw6M8MCn2XoND1mXHoJYBC7xUodN2CQ68NDp0iKHQ/gEOPGYH+a16/3uy2N0EYCsNwjIBOcTpmzHTGp5SKKCrz9f//tBnq0g1olZyO66NfbhU9nkrEraa7Hp60XLMwtZcefOBZYs0YC7mt9Lhdq3yTadK0LdfsyhjhVVOG14HlrFzroYsajrJ8Bj09D1DHSZb30KXpW644nzjK9rJ8AjU90G9eyS0QoWgjy0dQ05896ER5YqcpC1pabrnmdPi3ncryQYCUHkzfYJLklZhD2Yb5Y+slqrVIR3SFr/LOihfLX7oyPFtbLo/zUvJTymJZ5tDpWBteu3tLtqP7M+HQ8u1tuZG6toju7/8FejPyEV3JZPsqcJHleAeDF/IRvfyZPlwS9V3TCsz/L7pA3bYSRjCZWt5y01/tDEYT+hG9PDulLYwWurCjhldNZyalMJsbh1d96ndyA7O+ZngtQLEPH5fb3eojOoiEWOKBIWF40XiEIzpNz6m4EYUmvHarbo40ISiVRwEa4TmE4UXhvhfCju+iEV5xcs96aERrVL4R1YTAn5QW+0Xrn3n9jj+u2Em+AcOD+ObMeObDAAAAAElFTkSuQmCC",
    A2 = "/assets/png/hicon14-c2c6ca62.png",
    i2 = "/assets/png/appeal-f920cabd.png",
    l2 = "/assets/png/1_a-c3c7a041.png",
    r2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAAqCAYAAAB1PO9pAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJCSURBVHgB7ZuNTcMwEIVfEAMwQtgANkg3gA3KBIyAmACYgG4AGzRMQDdImIBucNzJbktb94eSxlf7PumpVSw3zjvbl9gpYBiGYRiGYSRDgQ4hogv+GLKmrLooihbGwaj3kxtYsh5Y37SgYb1KGYw/od5PbkTFGtNupMEVjK2o9lOmH9Zwzwau0khdGHPU++kb+EDL08+hNKx7yjgNqPeT3PTz1FEDQ7xSRh1AvZ+0f77pijElnAbU+0ku3zQUj4Z1g0Q4GT+p3165iTEiwOe9oY7TDin18zzQ1hfWB0sWD+7RLyPWF+sdPUNuVLyxWv4+6HCxRKWfW1fuyOWIEv3QstkjRILcKtkn3PW2rEHXK2Wa/NxryZYbfAXXY2dM+Eenvqxa+sGiqEN1Zse31YkNuWlepkX5bHGE4PvznIaftH5zUvnj5Woy2aNOtamOBvw1zdre0BEeNTX4eQZjCT/CB3AjvmSNKcF1Bgt8gByCf46EkOkQx7l5KuFy/yUSwUZ8piQ14nmK7mxEUuAOHwlhIz4A9fRYFxML/Ao5BF2wwP8il6ALFnhPTkEXLPALZEm0RAZBFyzwHg607GDdsq5zeC08qce5/+KDnwUbd+d8zpP9adkRKleKp14IlLUbju+qI2V3bP4ECXIyfpJ7ZahvhkgUbX5uG/HSM6/QL/N96dTQ5uda4Gnxf60LxOM5lQ6g1c/QzV3FekJcWrj3xVKggkI/Q49zMXtmiqj0MzTia9Yj4lIjHWqYn4ZhGIZhGMYx+QGEH+uzsJU/5gAAAABJRU5ErkJggg==",
    c2 = "/assets/png/2-4468ebef.png",
    g2 = "/assets/png/close-32ada670.png",
    d2 = "/assets/png/coin-b8caedbc.png",
    p2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAApCAYAAAC/QpA/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADqSURBVHgB7ZixDcIwEEW/LReUGSGRoKDLCAgGYQY2CBtkoogR0lGAFI9AjSIOU1CAOFuJxMnFvdI/J/2c/tnSmXp33YOoBVBADOP7bll9n1oQGlkjL6j8dereQt+tDASotxfiNIuMUDMcWZlxMfGfY/8ZZONh0ETNyI19mGhCa5MfyVFogDnUDIea4VAzHA5zeYxVf1r7KSX15lzCuoHT53dmscBkEjXzO3Mfh/DYTSoJNVFZA8yhZjj0nuF0vWc4NMAcaoYjKzMmti+RJnSGPDIhuq2S7poGmCNl5gYxyKdWIgehgIeftscnVJhFCVXXS1UAAAAASUVORK5CYII=",
    _2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFySURBVHgB7ZntbYMwEIZfVR0gIzBCV+gGjNAN2g3CBu0GHaEjZISM4G7ACG99xYgoasD461zFj4T4AfbxYN3ZGKDRyAvJoz1GlkdiviMG6YD6DAiFy5vvUBiJ6WKPCGV+BVDCJ/4D/jlNQJsmoE0T0Oa+BewcYxiOQQIeUTffiEF7KeFDS2JtmoA21QrY2nFwZXq13JaYB0Lr/ac9uq2bqhwBK320px7TPPCMUDTmARuuvxi9HjGUFuD0IT9vJAyIpaSAe3jjQn4gBYUFTnPSSwVCCkoJcNr9mx++QypKCNjuXy+S9gkpyS3AZfdNeENqcgr4JC09ZuKtIDkFzq77M3LFzyXAZdfbrCVtlQJXSdtt3FuXgFSZPUlblcBV0g6ebeoQ4LK2F0472lUj4JW0yeOnEOCyTBi5c5mgLsDItX0KgeCffCFJ+0f735FDKBKY25gbbY27/nXj+gv9iPs2kA64/qN7TUCOQ6CAxBzQaOTlB9GrTVQVYX0fAAAAAElFTkSuQmCC",
    u2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAj1JREFUaEPtmb1rFEEYxn/veJd4iAQkiuyhgpErEkUbRcVKFNOoYCuCYutfoOCBCrYW+QtULG0MflRaKe4F0YCFSaEE9oJEJDF+hFt3X9mA3Z07K9zt3LED2z2z8/zeZ3Z2mBH6vEmf+6cAyDvBIgEnEtA3eIRcQIyHOv5dCIrGTSLuy1ECUZ+DqDxFZEve1cw2vi4jekrUl5cgR7J1dkWtvqhvWkDZFUsZfYQJgGbs5JR8wAHKHiRPni1chDDo6KBzApuPQ20azHCe9iH+BXOnYfV5Wx+dAao3wLuWr/m/owe3oFnPCFDZB3seQnl7vhBhE+bPwdr7jACJXIbAbMwXIF4DTVb69m3AV6F8a281epGAVZm6KCoS6GJxrV5dJGBVpi6KckjAwMgkDO9Ox4pWYfkRRF8d+pFtuwI774BYHoh8ewEfTgLxf2wl0muUUWFgfAY27bfv1wrg3RgQOgCQbBAnZkBK9gBf7sHHi45MIa8O1ev25hPl3FlYmXYBYAPsfQuVcXuAcAlmxyD+4QBA5QBMNECMPcDSXfh06Z/63i2j1ZvgXbU3rwrzZ2DlsSMAtWcwcsIeIPwMszWIvzsCMHoZdk2BGUqH0AiCOizeTtX2bgolVkpboTSaaor4J7QWgPQzt94CpFvPrBgIgD4/3H0trxA5nDk7JzpoQ7TBIWJ50pcXHEYn1/e06rMDOL9+xRQ7fsVkUKK4yW8eyDEWLDflTsyX9ttpd63ZOSsSsKtT91RFAt2rrd2b/wA6n9L84qX2nwAAAABJRU5ErkJggg==",
    v2 = "/assets/png/kbz-b7b75d71.png",
    m2 = "/assets/png/kbz_icon-1ab461b7.png",
    h2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGbSURBVHgB7dhBTgIxFAbg/41uTQgn8AZyBNjI1hvoDRwGdpqAie5wHG4AJ2CNK26gR/AEhMT18OyAaGDKINOWNqZfQgrtZKavr29CCnie59lEf7mIO506Uu6KbzXxswIlNAXxiOJ4CA32BsBh1BVX9aAdvYPPGpT05lBwWjTIYVj7nTwNwGlCSfKBksT9RPaCK3HPVTbpcyy6G1BQmAGO2mMwZw98ECnvQRMRyDkoeEO2HU+CBvX7U5QUFI4y15ftYjGERsssMgbLH2kaQkGwZ7zy80Dt1otCF1Ag3UIcicJlZCuj+MbRZi623JDifmt7IBeAmPzL9+TdI6nF/BZi3MBVjNvtLlkNuLJtZHJz21fEzvMB2HYK0+7vgGoVyqK2tNt8BnRMvoD5DKztWEFVvohtsx9AswnEz6u2BAcCuNxsD2Q/gMlksz3Q8d5Cu0xeV5+SfBHbdrwtlL1pVFj7KzGbwSTzGXh8gkm+iG3zAdgmC0DptNiw3Nxk50IDOItGuR7ZZdxqJWLoGi4dLYqFpUTfCbnneZ73P3wBSRZliqHzzZQAAAAASUVORK5CYII=",
    w2 = "/assets/png/wave-9300da3f.png",
    b2 = "/assets/png/wave_icon-41753b97.png",
    C2 = "/assets/png/detail_upi_icon-813ff1e1.png",
    y2 = "/assets/png/fail-5e44a4cc.png",
    f2 = "/assets/png/gift-55dc786a.png",
    B2 = "/assets/png/google_pay-c9a23353.png",
    R2 = "/assets/png/menu_active-80d05974.png",
    E2 = "/assets/png/other_bank-17a0345c.png",
    D2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAb1BMVEUAAAAWt9sQJF4QIFsXuN0QI10Xt9sRJF0Vt9oUt94QJFwQJF0RJF4RI14QJV0RJV4QIGAWud0QJF4XuNwWuNsQJF0WttsQJF0XuNsQI1wQJVoQIFAXttwXudwSJF8Wud0VutoXuNsQJWAXuNwRJF6UrV1hAAAAI3RSTlMAgIAg32BAv2AgQL/v35/fEO/Pv6RwULBwUDAQkI+PfzDPMItdj4YAAAFeSURBVFjD7dPbboMwDIBhk0Bb0qSDQtv13C1+/2ecg8noQUKctGlT/gvcSPiTABVCob9RbKdQrnYKJs3HM2maltZaGgC39y0AzOhajcUM2pJKqQNNGhKsL4YbXc9wdb9TOFueAEeDXEKHPdbtMkHXOWk0xD0TufHBh9xWFbQpsE4feKlGW5jncmLwux2dBjHWLxrkJVgaY/QrQ+825lfMTH4q3Thtt/Eds4GDZqZq/cJQMd/OzAyg5POiYXS12jDLLkz0wry5VWaOkhrNXJAbxwichDFPjFby0p3RnkFKr9Y1w3Vk+L4EPSPrL6X6M9zKP6BwDGHDmP0jk4n1EMbAI+OSctOD0UipZ4brwUiVJKQAa0czlPErrrlGZtSK2g1iOGaSvl/qs/lr++Qds+/IZMBJg5zeQMMIcJVFUbQw9Pxux0Nc5WaSg1AoFJqkyI4uCsxPMAJHJ/4rEwr9Wl8hMNJWXI/S1AAAAABJRU5ErkJggg==",
    I2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAQlBMVEUAAABhOrlgObdgOLdhObhgOLdhOrhhOrpgObhhOrlgQK9hObpiOblgOrhgOrhgNrZhOrliOrpgQL9gObhgObhhOrl5m/PLAAAAFXRSTlMA32BAvyCf73DPEL+vkIAw748QULCWKxIhAAAB+ElEQVRYw92Y3ZarIAxGExD5F22b93/V0znOLJYtiTjlavZVV6XbjxArCgJFbQmRnqCPmytwneCipRdsUgauoCMxpDv0opAEUPUl4SX9IhOpg9mAiLPUxSoFCtsxvN5pznLjJ+TpyPeqLNTCG8aCb9EDfHFrzxQNY+GSL8R4ZEtFM3FYj28PhP9kauMDHNmozbJHpYq0XoptkD33RAzuUBhLHHG/QoTTVGbicXKcyEyp3TyaODT8gCSxyWOwEYY/nyMOVcOIYKgtyMe5U0VonuWkOonOWI0YJ9YOlYlynNAu8KRfgSe3/eOj0VrtOc0gMLfD2s81K0ChzzVUwI3QKMgjNBmmCxq1PPH0zgNa36afNQY9f6PFfwsE5I4cr1p1oqERGvqbmjElHqPxkEZoIuQRmgxqhMZBGaEpAPZzzbofYzU1a5E0DwBwvKb+EqGtqVFvbNC6l0MjaoxwMMCOSrMLIGke0hboDm9M4kikFrlXg+LGZDWdGiVvk+KppoaRqrNUgbBS6rR20cBO8OywuWdDm1QJwSyWOI09VNCRDKtRcCD3auSuuPnfaLz8ICRr+h+oZM35452skSzV469oPGMR12v+AqmSA/AoS11YByJmpg4m0/W+RAb16BcvMvfETkfDFYxKll6wkwtwneLy5PcbDKasCvD8A1L//wZdKHHUAAAAAElFTkSuQmCC",
    S2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAATlBMVEX///8AAAD///////////////////////////////////////////////////////////////////////////////////////////////+h8NhCAAAAGnRSTlOZAI0NHIh7Fwkhg5NIV3QUkF9aTSdoPDBuUuPc/FkAAAL/SURBVGje1ZnbltowDEWPnRASHJMLCZf//9GuaZieDl2xJMRLz/vsLSlG8QCCPtV1Xu/36bEEQ/SCW5PwzJiHjwvqBn8nPT4suOI1zfBJQY9/czp+TnABwxxUBtj4dgNUfIcBGr7HAAXfZYDM9xkgnk+nAVL9XgOE+t0GCPW7DXDUT8NgFLB+fw8Q6ncbIPDdBgh8twE+vvx+gJ/PHrSC4zxP92ijp3hes+2Ytre7mj4t7Vur4riq+HP1/ja9Jnn0i2nZVc98t9yNAr/5U367pSzoWVi/LZg6lvkbsHvEnbOEHT5vb10U66/W/c2H0vk/tzQU6q8PPz9xw56g3ymwG4v117G0vVHgs8Qo8AtbA0U+exD4+z2gyGcPY4FfNKDMZw9xhy9tPkh89mDh8yyBfMHQjQY+pwSZzynp+ewB/P9I3wMPb9lQbYIOMBlYv5TzJjhBb4ia+pnrl+AKOcQ2h5X1i4lfggPUBoZ8qQV00KapzHw0ARl2QxehTYsV+oy/33L1lKDOjQJd4inBkosgcGf67wW2EaV5qUJ1u8PykGeoc6rDlluCNhUWPZ8ftG7U/k1AiHo+syh76ANCb+EPa5O3vaoyxJbrWsU/HrYtrzX04UuwGPi8UWqm1Dxfmb2Jr+/hMDwF4WHg63uINa8tWc+XeyCfgvDQ8+UeyKcgZAufhi6V+RTQIPPlHsinIGSZL/dAPgVFw2nY4fNJL6nAp4AGoX5pSuRTQIOJz9M67vIpoIGZWvKLPQznXT4Fr4Y0d4F8oYdwmxL5JUHo6t85fi//mvwdQ/XjS4ihsn0Zcovyynwp2SKoJiiSLu17gk59RYz5aBIc+/6SmwRLUjPlXt1BxjuJtU5Ag59Pgd8QO9tDzu76KfAbWL8sYGZf/bIgZB+fAl8P5NsFIXvmT4Gzh9Gx7NiDMB+zgJnl+fgEIUv1ewVhdvApMBo4H4dAntJIvk8QZmE+bkHIwnzcgtALP5u5BWE54fXWZxPIuVKRJo7HL2Dqy9qcmvt0bYM+vwBzEia1TV7uOgAAAABJRU5ErkJggg==",
    L2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKsSURBVHgB7ZlPbtNAFMa/MYYVSL0BRaJBrDAnqMsfiR3kBukNyg3IDeAEhBv0ABSZG5gViyKlN2jW1J5hJlFiW8zYM/NeEiT6k7KJ/31f3nvjNy/ALbf83wgQyN7MD/G7moOEOi2/jWaIJAGFmzoDFYkSBGgGgLegsSiL0T4NKFoElPwOItEGsnx+AAWaAZEUIBIfgTt1bj9givJImA+EmKH/6aT0Wd0iFoXc+n2nKPtTrPx6VIBIvAGhji3fbopyMMUECjAQZcAprl2UzhTbnPwDDMRFIK3sv2y7KF0p1pxQgIE4A1K8c9ytyX+hnqGPB/cKMBBnwCGuU5R9ERCqLM8fLcBAnAGbuFZRZq8u8/7rE/LyuSZFIEtx0nJAoSlgOZj/k+zF5QT+TPV75YPtQHgEpGNpTFrLosAxuBDqk0v86rHBN3Q0cPfTJi2oLcbmWepLeTE66zsl3IBNXKsos9dzc/wAVIRe0eq7Z0OnBRnoEdfkf13lIKOuUKcnZTG8UoVFwCmu9VISgpj/WrysvcQbwgy4xNWSKf/X4p9e+V4RtCfWS981OPLbzgKyeh4i3uAdAbbitKPFq5NQ8Qb/FKpveJZGG0Kexu6N/Q2IhLqBd/G+vHhyjkj8DXC9nLqYFuEjCJAGW22yl78+Q6lJwCXTvhbBF+pcqGFwA9OBRbyBJQJBI8ZVfzMBEzwR8B0x6v6GU7yBK4U8VqhVfwNmmAwMjRjD+psQyDUwnP/h/U0I9Aj05v92xRvoBtzLp+5vMN6meAPdgH3ESOpvgh4PAssRY1JdW26rJ9SPZ9gBtAjY55/TXYk30Az8nf9sLYIvNAPdEePOxS8lIJJO/jP3NyHER2A9Ytcz0X2JN8QbMPPP5fApHWOPEP5iEg/1nGi8jf5mJ2T5z0P8A/wBY5gUStpLFNcAAAAASUVORK5CYII=",
    G2 = "/assets/png/0-fe2d9eba.png",
    k2 = "/assets/png/1-a7a4abaf.png",
    U2 = "/assets/png/2-6339417d.png",
    M2 = "/assets/png/0-fe2d9eba.png",
    T2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMA359fH3/vjz8Qv0/Pry9vQlQzpwAAAZVJREFUWMPtmNluhDAMRbM4K4Hx/39tqwCyRg5DjVupDzlPk2g4CtdkATOZXFE2T2TQ6qDiO9arfFtERtCMz+IAxRgDjmiXcfvkxpxjaF2wrmd+6z7icWVyxWta6f+Jxx363umMgd6zjNJmulHy/af5xnffN+4ixFfEz0QS5t3oeo8dCwPeQkILPSG6kAs9CoSHkXxcCFYkJGPAsdChREgl2nAsBJQKHUU1Eiap0FH4Q2ETCMmXYDdyYUGhsJvcUZnKhVkqLEd9u3HlU28RCPt8Sqak8+nJNHceCSt2Ir5THmRYP0wpJ57ItORV5ERgS4PFG9qZEjTu2wwHbjCErxGJ2EIxkz9gc/Y5zbGnZkEVfBe1qCQWttooyWzLU+KncAqncAplwpjCjkNqElYqtEC9SE1iFQqTISw1iawQRoFwed/zhseeFzXvbzlfHufsWYUVqUlUHFN+eddr7HyogmcNqIRF7VCF48fNiAosGMaiP9ko63L/1eaFz4j+5hOPkArmGl/Fumw+A0twPyb5+T4xmfwPvgBs3rpnkcTQ4QAAAABJRU5ErkJggg==",
    Q2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAwCAYAAAC4wJK5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHxSURBVHgB7ZiBcYMwDEVFJ8gIbNCMwAjpBGEENoANmg1IJ8gIjJBu4GyQbqCKw+7Jjk1wbHNHz+9ORw4b21+SBTFAJpPJZDKZfwYi9hiPO9mV7JOshLWQE6eif1VM4dOZJjnQZQ9x2JG9k1Xs3o3soyiKb9gSo/fJzkaaxXLUutDCOyZEkO1gixhCOojJ6BWyao0w0xyDSiuIBQ12RL0qCUxYEmnshs1VQShy09nK6jVVzsqoKxoIQQoQ6CalEOW4fkn/t5m2C1kpf9/Y/S95HffHkEjID4SC06fAX5VAVjVkO6/rA3giU6acaRdzkXjqOOrQmgs0Rch7A+u3KOyWZ1vwFCHTeKR2DV6xhQnlLYeIHRvQS4jxXLtUBOoZUtsG5hv5jizcNhEhQvCxaLTPRKCeIVfXwDXr1BhtVhG2BcFCLEIalwi67lk/ga79JL16QkttnhPBFnRGz7qOj++hoykCZzLEi2ciQpBe1oQYIoQtWq9MlEyEHJ8LuRu/FR2EgPr3TAkJQL0ymlwgFGOCGhKBenFRCIzxVYDTpleh9X5De841OuyC0wvxFDXyckBFBVsE9XIoEFc8ZomJscE3LaQzNl5PdsCt/bG3CImNgDXAx/Oi2CyOrNcJoEPMOFkF8U4GR250CniGTCaTyWQyE7+DJHfnDoRQKwAAAABJRU5ErkJggg==",
    V2 = "/assets/png/saveWallet-c6e5dedc.png",
    O2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAfCAMAAABNnRR0AAAAWlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////9ZMre9AAAAHXRSTlMA8grGq20SLAXfh0hQM+fYvpWQYiEZzbKln3QlfWrn3oEAAADmSURBVDjLjZPrDoMgDEYBUbzfdZuu7/+ay6Qd6sD6/TGUE1NOWnEjk5aRuQMmDQDIiQdVBN8sPKlhS8eCOdjEHBgjWCsGLBCUFQNWgCk5kfLQpDImDfjJEMztsQZovO2mEYJ6p6v1/fWJYIRn28orLLJODyTkIZEyocoDK4NfJBg3KWSi2IMGqOorrq6WHEVSyr+OUhLZB5rP6JVO5Dk93rQnkSowraSVRGbKvwE2byEGanv0b1VGWn8iQxM5khf6luzQ8mtDWknkVRYHanGdDpxIJjhXTSK4qHl7/Sr4qK6d9ei/+wCvSibi56K92QAAAABJRU5ErkJggg==",
    P2 = "/assets/png/setup1-53816735.png",
    F2 = "/assets/png/setup2-666d3e9e.png",
    x2 = "/assets/png/setup2_active-bd15058f.png",
    N2 = "/assets/png/2-bd839975.png",
    H2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMvSURBVHgB7Zm9TttQGIbfz85SqdDAyBTEilTuoGZpx5YrgLkdaghDN4LESIhzBcAVUEa64F5BU4m9WcpYEEVCorW/fiehakLsNOfHKaryDB58/vz6Pb/fASZMKATKS+CNjTUwtvBgoEsQH9LeXpSVWsotxxxI4QoeDKwerbxUwrCiYVjpf+MvyV85wjhgWgGSvg+nKGrnZR8qZKDuMCyDvAuMA56eoah2OWp2DxrIH5GKqYXCoZaOCIWWkC7pRxSPdhv6Qth/j6JhxNDEwJGfqmtp2a7PVAxNtIUUP04o1h0fCgNHoNaYYxQF8yEMMBOC9ACFkcYwQGsd6YXXq6fyDDITFxaA2dnsgjc3wNkZcmo9pkbjFQwowRSmbVnlg4H3jx4Bb14PL7uzA3zLWFfZO4Ahxo502l2vfpLn0kDCi+fAzEx2oQsRcPIhK6VNjb15GGLuiIK5Kb9if+B99of+pS5swwIrRzrt57mih5UbCsNZqwemddji2ddhLYSi3VjUNGEMNalet9722DuiYK6Zrfayy23UQzjAiZDOtoWTZT0xkpeTFTjCjSPoFTNKN6OmyjvsxKfdPgqgc0Qmqsl/etozo7XVyq2OAd1x5RZnjvRRKokQX1Y+Lv95qaIg3hNJbKMAnDrCYa0M72pLFrfhA5i8COnjbZPtem6VcASH78SFH0ejL45qsE8tuxLjrmtpiVBIXvp+2nHRAU6ESFSyYbZNkTLetZNopv1ea3MzQJKewgbfW6Zdu5nM3pEk3YctCTdgiZWQTqAbqMAaXrqryxg7R1xG65newgJjIVytqrN1Bc4QV9R4M8TcEcYqXJOwscNGs1Z38bv9giLQjML/xswR7zZAUXhXazDALPjAtHp3g9TP4mI3HDQKefEtppfyjKCJdtfKveyZmwM2q9CiXge+nt9/K+ea6Xnd7qXviO8HSDPcOJcPOjnJj2fdR8W3BkUoyihdq+1ODA30haRpkGukSTwri4TV1B7rFDEY7N4zFI92G//NZaje9bQv19PpmK6nPbmeThxcT/NGdV/iVWt4UEgwLycOlj/YU/4skZBWfwDhH8M8hqvxCRP6+AXr3BzuT3UFZwAAAABJRU5ErkJggg==",
    Y2 = "/assets/png/3-5d3eefed.png",
    W2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOLSURBVHgB7Zq/b9NAFMff2Y5EJJDCQmGL6MKARCIxIBZqpJTCQstcCcrKQCUkBqhUVyAGpmZghMIfgJQJonZI2JGaf6AinaBbpDZqqto53nOSqrLP9vlnMuQz1Nb1HN83793du/cCMGXKFD8YJMRiwyj0TLPE++wxKLwInJeAKQW8FgZvYh28b+Ndh3H4BQo065X3TUiI2EIWdtbmBoOHZ2eDln47iYOaClb1x/yHFsQgshBbAId1vJ2DZGiynLZS1402RCC0EHKhY9Nax29/FdKAsc28pm7UdKMT6rEwnRcaRpGfWg0AnAOpwtosp+phrKPIdqw0jBI3rd30RRDc/sIebb8pyT4hZRESoZhoibCTOT4dFfq6zEIQKCQ7d/Kkg4tAOcjNfF2LJvaYRRD2GGgsfp18hdir03hFDOHFwVi88XStgUuZf2CCYAx0r2jA0yIoYgsmjOEGLERokco2rlJg7sIE4mUVoUUUsF7CGJi9dDWwD1plUdTu5VqLkDGvbj6BT3dewN0rN4K6PhWtYC4hFAyi7kw3PhJRuVaGg14H9g7/BXW3jwvORrdF+olFs1KcF/H692c4OA6OFUXu5RLCGdyDjIgiwoa79zbRHMnErSKLIJhyy9kkEMKKkDKxRNjw4MkeZqLP5AvwXX8Ly7O67CMJiLCRESLPRS1vX5ev35cSk5AIISLXkv70vcO/OKAv0DV7gWISFuF6WCCkH+oNMmJSsETb2eAWwpTQaRk/MWm4ExNYRHP14nwfIjAS8/H2c1sMMZO/nM6coASfA5dFMLqsQUSclklrYlOW0t3koKdprTAT3sl5MamIQLcShfHC88iD7bVNvMQK5WmPOUIx3dMeJAkD9rU+/27F2S7cR+K41wiyQtIiCDwrVcXtAoama8KEge7T9Mpxee7saJUNmDQsbcXrX55ChlapwuRQrT/0TtL5xlonOc2ghDKMHdbOdzXDr4evkCam9pml6nGW4/hgZh7HUFvyLzMERr9kzj6MSQxWtPDdS34uNUIqjN+ZN1pDMW3IChLBVZ3eLdUdQrDwE9OoakaFHnQnGUuMCHWwog8+yallSHc1q+a7ajmMCCJ6MRStA6q5xRMqhtJmh382opasY5enKU+scnOVK1iijlKetvg3pkItbs09sR8MEHaWkhJ8mBvjlCBgrHj+BwOM9zucDm4W36fBXzjSWkHL6pQpU5LhP2fY2Y6KcIURAAAAAElFTkSuQmCC",
    J2 = "/assets/png/hicon2-147f9796.png",
    K2 = "/assets/png/timeout-fef473aa.png",
    X2 = "/assets/png/tip-f3ade928.png",
    j2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANeSURBVHgB7ZlLctpAEIb/HpyskhQ3CDlB8AlsThD7BuQEFtiL7Ay7VMU2ygnsnCDOCYJPYOcGyglMqKzsMJ0eicfogQCBBFTxLUCaZ/c8Wj09wI71QthQuNF89B+IbqFftMn97CWV20gF2HHKIPVoJfVE0jZdXbnRsnuhio3TE1NdHivIBD2gRA26uOguUksEroxbcF1PxKoC2i5SBqPDzSaiSoxnQDLrUugaq6CkamlKsNMqQ/WlP/ogb4fhTP0OpVIVmr8nVy7tk/vlYfSqJhl0glUxGDjTsvjs7BDUvzcjGhPep9zDgCvT6oN0x35VVtNVrAx6n5TKTvMcA/0TKUuU3Jas90QFetLCVxnotp24h4LwhSe00ktRsDRIvQXzKK0rzz9kT9zI/uhFaxSiADufKqCn1hxFAwFZ/5FfGe3SLbnpBqGYGVDP5+A5yhF7/l+nUx8lhTY8q4a9gQ25K+CPPj/V5yz+e1LPF/wE3HdE+TLMCJCuS1bIQOQ/A6Xnatikp+L5Cqt/RvB6IHiIg2iF/BXgBawbQzb60/X05Ra3TgqbRWVGfnRGNk6BWcTMaBEKeFgZfBdNyV8BrW+xKphibeWuQPD15G9YHo/cq5toYjF7gLmFhPW7WBtoJyXnpACFhPV9fFbHyIo5zCSMvsFSQJymVUH8EEsyPg3jIxadieAk1pqWbZ0HBg0sO80BnmzcxOn2R5H1/nyDZbxQORilCO+Xsl/8ox2RVBB3NgtszJx2k9zeWFHHqUKpI7EsB1Z9U++X9N+d5YXu2BQiS2joCWpdRhYU7qBfdqMxHCvasSQk1uz1sX/sHKWMOwlOTfdIcJgWRDp5s293IkGqeY4z88EkClyOv8gTd5qeTUhlWeENMot9M9qtSafyESI6wLL4m3zQtZOs80BSiCNrR2FhxXy2kBPb5k7H2CmwbrZegYICWxIi2fubKXQ5K9JdTGDLBHMH2UL28hHsUueyNi1/G5ZQ6repmBlgXRPP8xBZ0IPUM3UhCgS3LrhBDuzM6LrZKbBu7E3sIfP1aoThRcUIPj09kou7D4lllepBv2rb54dFmCjAcqVD6GB5erGohOZraTvZnrNcHqi+udhwkYHxEhKf3R3GbTxkxoRCdG1oNi1SQ4uicKmLHVvKfxGoQvU9AEzPAAAAAElFTkSuQmCC",
    z2 = "/assets/png/trc-24c9a180.png",
    Z2 = "/assets/png/trx-8c63cfbf.png",
    q2 = "/assets/png/upi_recharge-a5d50b78.png",
    $2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAP1BMVEUAAAD8aGj+aGj/cHD/aGj+aGj8aWn+Z2f+aGj9aGj8aGj/aGj/YGD/aGj8Zmb/cXL/cHL/cHD/cXL+aGj/cXLSSGKsAAAAE3RSTlMAQJAQ378g78+AYL8QfzDvgDDf6zcOIgAAAMhJREFUKM+tklsSgyAMRZMQXvJQi/tfazu1CBqc6Yf5Ae8xF0ICTwWmwKXYQHkEg/VoABQSB7xARdxJE5PqqXHn70jOdLnO17zpt/Gu/U9Ud6VIDVlJHI/LhAkkBtT7mhlGGCx2p0js/e6NAvfuVo2x4V2CMYbyD2YzxtF+F317tVbA9c1bwWhhGJzh4m7m13oYadGSZduW2mRG0Tzc5rVpNaJLNaf6JKfuh0mRM+fh4q4kbKPYHoEJP6LBZDWCjEzalsLaIzwUbwexBgd/nj2BAAAAAElFTkSuQmCC",
    e0 = "/assets/png/usdt-1fcdec01.png",
    t0 = "/assets/png/usdt_active-9f4c63f2.png",
    s0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAUVBMVEX///8AAAD///////////////////////////////////////////////////////////////////////////////////////////////////94vRsEAAAAG3RSTlPMAMKpFX5wJwq6s2I0BDyTglFNRh6ah1podJ/0efloAAADF0lEQVRo3s3a7ZabIBAG4HFABUQE/Ire/4U2cbulbjBBw5z2/Zmc8CRKEAagSIrQc2U7JhEAJetsNWuR9skEQPiSITwFWenE5wBvRoTD4NjwT4DWdAhvgp1pLwLCM0gKc+IC0HoFyVG+PQtoBqfC9CmAWzgdy9OBXsKFyD4RaEuES0HbpgADg8thw3tAS/ggUr8DeoSPgn0EyNF+EPwroIcM8cdAjzkA7I8AjZAlqOMAl5ApcogBLYNsYW0EKCFj7DPQI+SM/wlwCVkj+Q/AQuZMe0BHOlt5IgqeYgIQ70GqOJEu2pMC4CE/AD4AQlEASvwBPFAA4L6BltEAqv0NGKABwPwGOiqg+wI4UgHIN6ABKgCaDRjpgPUBCIRosPoRHtoT1Y+ogzbEHXCQmDoAHBLj7kBJCdg7wCgBVoBASgAFaKAEwMBMCzRQQUJQjuW+m5ajREjIAvZlw6yaja65ds1tD9yaWQ+1NnPFXkITdEdtq6XX9byMTOLhJZJsXOZa94s6UkZg8e7VDPWNYdo9QHarh+agIZCxV41w6txNlk6YGCEBI9etFeP5XrSK2OQK4yOUvtJNTXTcjAOiOw90Ig5EXnssd/vxHLD2jwV2rPn4TX6sl73FnT7dO/+WW7VrCdH6x4ojfpOPuumNFw9Ez9WqgrMPolqrWQ/bbzrsph0cRJV+EF8zV85r7bavvuV2/yVO15y3X28PfXn8R3szVKiyMXpzIhFDbZpFvRkqKkgJMrsfiyxDSMlCPlyTP3DIH5nkD336aQv9xEsgHYAiTH5JgDVM32mAJixASADkYQlFAnRhEUgDmLCMpQDCMrZwNIDblRLyA1LsiiH5Abcr5+QHmNgVpPIDZl9Sm3IDU6QomBOQPFLWzAn458KszQnYK6Vl9leulJaLgag4Tl/ep9+gCPE5APdqk8gjfBh01Ntc1Bt1/36rsShai3At8c3SSPy17V5/YsN6gtOZ+Kktd3N2y92QHhqQTlw59uASCeXE/3lwYwtv1hcGrg3PcHjG2fjhGfv54ZmAmGaZxu/jP+O0NEakffIXrQQnx9bl3AYAAAAASUVORK5CYII=",
    n0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAPFBMVEUAAAD////////////////////////////////////////////////////////////////////////////YSWgTAAAAE3RSTlMAn2CAIN+/QPCQEDBwUM+Prx9vaviGVAAAA09JREFUeNrtnN1yozAMhY8d/2EDSVfv/67bbCalbpopUBnOtny3nXFcSUeSQQYHBwcHBwcNcGezOWe3YH9edsDP32Enu9BhLkZ2wWAuveyCBbePDRYQbcUoDQi2ouCRfX3eQ48oDYjQI8sEvoVMZCgyKq3rpnVGqFHL+kUpVjpoYqeFByW1DdDEKYkvTOs4qOKrfLqaJHc8dDEqK8eqbqhiVVRiqsJLGIS+UQjWawesZZBWIVhnwoKVXJqFYP3fn74XJnUWbFGO02kdl6oQqxNEkQB9Tqy9YJOesKABSdTwaEGnfz6i9XHEDVYfJ7TBcHtY0ccD2pATt4eBjtvDQKTW8JXEm6VvnLg9DBRRwOEjXD1XQEtsi+eoXKnQ4wEumRi0JVNL5MqF24BAJOz1awJvjrkRScvwROA2IBDJDQgEXgnfcLQ58E7HbcC1Fdk7bIbla2M+EFhTzB232MnJYVMstYNXKLnD1uRxkYIzNsd5zgwzUdJsgRTswkArkDuWfH/AkGb4V2F/LZXiC3bFhS8KnIJ+Wx7lexDgDLH5bsTw6fYieHDGS0XqmLb3j2K74OUVP5q+gI/Sm/G2wXC2dBuM5yQV3rAI5D8QyfNczWHFP0mec8IqflGpK56zmb5j57RbA5byaxpW2+IFdstDUxpNd52AConi0OT88+6gdH53pWRf7cA++L/6+5ixNecqH+evJH7GptQC8fFZEOwnZefnBFgOuz1+u8wUwLjTA0w7V6DZ7+Dk2sFx9qPYtJ2SzYJ+qt9Bye6dg5vfL2g/8B6VdaL/i2Hrl4n1D/KZMFYRSGjCsDiz2U1NWJa/Xs1pMxPWEg4rjH5BY9yaBqWXiYy2mDUv0N2GR3kv65hVkX/DeB77gKOjvaqhOSxfy4RMIs8G0fcfino2IEXo4U/HA5gG0RumwoH8Qg7/hRf2K0P0l66MvMKsYy9C7ePC+hmNh7aYtR6zX9/NokrGFcoy8v7VCWmSeUs0rEnm7akJXbP/nhcAZMe5GssdgiKGOwRFPHkIvgYhcxasgpDpZnG7TDiKOiNxIb6RObv9icjaC6qMjxZbEaQBo62IALi/MXlWKLxt6bkNKGK4P4Ep0v2cD8XCdWZzOopxzYODg4ODH8dfc04/UH4ese0AAAAASUVORK5CYII=",
    a0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAAqCAYAAAB1PO9pAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMgSURBVHgB7ZvvkdowEMWfM/c9dBBfB7kOoANSQbgKIBVAKrhcBbgD7iqAqyB0gFPB0YHyFokJEDBgSxZn729mR/yzrNknraS1ABRFURRFUZTGkEC5WYwxHRYD2pq2SJIkhyfOCs+bd1kMaV9Rjpz2Qnv12fAmQ5+nLL7TRrSO+zinLWg/g/uRDXgy/ljRynaeViCDjDa/wJdTNyBLkxQ0YsBiChtmnmkZypHSxrQubK99YI9dQ9ngwnkfdoR3cR05bATI4IudnjeAB3bqm0DZCE4b095NdVa0obFTROWGbenAA8aGMeE3Wozzw5MnwY8xrdQBtrXAE8b2cOEdLcRcPn/7Ym4KonVyopEyJ0/c2wz+GFxQ55Jz1jMagnO++DNFHHLaD/r0pfBXbOjIxGeCCPC+feNjntyvc27iMz9s192Rtt7ClusLaobOkZX1jJbzdc/jXlmi1xvsfnyIeslof2DzKHvcQdmygA2LKW3uS3wXYjeOZ51L1Bfy86JtngrvkNyCiM2XEhZTeBR/5x6ZlMYmsnZ3S8ttbsMcJGb4+eLYNdvPi64pIpTwGWyIKcsSERCRQ4vvmGF/5Ms9F8auLw7n4+TYNa5dCyf6qWtOEkJ4CTGP+KDUKH5UgoV6YxM/I5RjeXb7EZA2iB9yjhfhxyhHhiMr0XNQnBXCLJ5S2E5wj4bwCUoriSG8ZJFk8eE9lLPa+8QTsKM7d1VL2UODiCF85so33Cg7q2spc1pPF3fVmdKxr6g/i3URbRBdiCF839nN0RbRBV3cOdokuhBsxLu9cNntT4yjWZISTdEC0YUQwsuBi47knj+S8yRhxHZ/gz3G3PgzgUGEp63oxCrOk6PYZbN+pYmZLaybUKG+g/2nT9fyGQ3DrSHkQYv4JT34enZqoLhsJEpcI989sjMffeClj2Xro4vTh1yKBkpa4Rq5nwofGZlGctTLycfbKnxgzL//v3k5pn4lcrJXyl9nF6xy0sPYA/qxkPPmKRqCsQc4YzM4bNd/I14WA/zhA+L0UGHdsO1ULD8Won+TDoyx0WuAuGRNT0gpiqIoiqK0mr9+ixqoo1F5YAAAAABJRU5ErkJggg==",
    o0 = "/assets/png/rechargeHistory-00343620.png",
    A0 = "/assets/png/rechargeIcon-b75e9adc.png",
    i0 = "/assets/png/recycleBtn-2e9e9166.png",
    l0 = "/assets/png/serverIcon-fc4bf5f3.png",
    r0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwBAMAAADMe/ShAAAAD1BMVEX///8AAACAgIC/v79AQEAmZuZrAAACzUlEQVR42u2cW26DMBREUVlBEAsggQUgdpDsf1FVpbY37eAMt7GVfpz5Qtj4yJEy8n1AhxCqqf7yWKvMeXLy+gl+Oz3WJHOenDwBBgy4Cfh22dMSa+3OuX4uFUOrWVDAUyeKoeKc869N+AUBAwbcFtzLOUGGQvPHo5ueLo4tqNsK6UbP98NDaevlBQEDBvwysFrBNcDiEpXBuvWhYJCAAQP+9+Bvu5h/GMgaF23A/jwFGDDgF4J9CLMKeAsnEXAihFHpkPfO8oKAAQNuCPY5zz6R3zALJtPGuYuyAAMGXBecKeNmKix+wbxiN0NYpuSPnQADBlwXHOag0oxHGMj8xRvDQGJo7/Fttw9kcvuTybLRwuST/iqAAQNuAxYn2e5rLqOGMPtDt3u7WL5Qo0zuTG7Y1ZT8jxGKyYABA24DTrabBnj8OSTecg1sGIhxQZvjCXmnDE2AAQNuAr49ai7Vmot3m6tGN4lW9uFv8Zz55TrAgAHXBvfm/66nC7WUTZ+SO/K4qSCFqp3LAAMG3AZsgpHwBAGrgZi2VTEQccrCtgRsMspivYABA64N7s2B4SI1l1XBWnMRAylVYcoXipE7uVMYYMCAa4P7ct9pXGgZRSwlJFUYMZCQLUCFCiki68EhwIABNwFrDLLmMqU6FHIhTEijLrObuKPSoA0wYMBNwNvjTwPNiZRpKPpA5Ehj5TJDeuGNtgMMGHBlsO88N+/ZmTtiINkvkvn9HU4bAwYMuCo4+3rLUm4RWYyBXJKt7PkvoHSuOwYwYMDNwHrMUPBYLrWcykHNIuC/lKl1o95xAQMG/I/AYSA+GVJuSMuDfSLnyJkLMGDALwWP0dqhEZAWf0PPGshguvgPvYYIGDDgRmANYTx42z1vzKYhRMAiCz4fLVIBBgy4PdgnUf2LcqpZwOMTVRgZyr8+CBgw4GpgU8Y1UYncKX5HSBdECFXUO09liq3e+WPlAAAAAElFTkSuQmCC",
    c0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAOVBMVEUAAAD/cXL/cXL/cHL/cHD/cHD/cHL/cXH/cXL/cHD/cHL/cHP/cXL/cnL/cnL/cHL/cHD/cHD/cXIYzXBpAAAAEnRSTlMA799gIF9QkM9An7+vn4BwMBBz5IC4AAAA6ElEQVRo3u3ZSQ4DIQxEUdvQ9JC57n/YZIeySItBtYhU/wIP4Q3CppT60b5ujp5isY5SoDu35vKGkay1xUEFCgarBzydR/ZZIM7nEZgFzq8rgQwEGdhBBlY2cGEDzgYgQIAAAQIECBAgQIAAAQIECPgLIMiApz7Aj5Ktry7g+rIaAXiYUYG7cYHDyEAmA4eRgcIGngPf5LF0AEO/tD4EOJqLRsAB5IFFiKdGYGMPeQWwMoEdgL+IgAWAKxNI+PTgAHXMuJOAuiS6ZRJQtzi38iQBVhzT2Wk5SEAtTRLRsu69+MwbSSn11Rtd2SGJVmfiHAAAAABJRU5ErkJggg==",
    g0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABWCAMAAACn+gtUAAAAPFBMVEUAAAD/cXL/cHL/cHL/cHD/cHD/cXL/cHL/cnL/cHL/cHD/cHD/cXP/cHL/cHH/cHP/cHH/cXH/cHD/cXJKVK13AAAAE3RSTlMA35+AIDDvv4BgEEDPr5BQcLBgJSC3QwAAAWRJREFUWMPV1stugzAUBuFjMFBugZb3f9euKkKJ8jXQtMosvfiFRyPh2NKm+4whiuU+RYiEhTZAtYAcoMVACjG+gIbq/zW8h6h/V8OYq/FRDfNyRb1+1OMa1js3ZzS0+2+YA/S7O/cHNax3LpetGdE8QcPy1xrKp2toQixP19C/gIZOGpryNu1tDXk9IV8Ll42G9YS83dRQ7E48sNfQPTYQ0zENRcQ5DUOsDEc0pC7ilIaUI6DBA6c01JsBafBvPC/XTD/R8BEbpp3ISSXdfQMOObrkgb2GlbqpPXBHgynw+CGDnsJumW9ApwgNHrAGt2wNbtka3PJKV3wHJZkKA2bGgBnRsklomWS0bCakaC4YMANaJh1aNj1aNiVKMg0GTH12oELLZkbLZkTLJiFFkjFgJrRsLmjZDGiZdCjJ9BgwJQZMg5ZNjZZJhZbNjBTNiAGT0DLJaNlMaNlcUJIZMWDyFAf4BJXjrTPfEIFtAAAAAElFTkSuQmCC",
    d0 = "/assets/png/thirdPartyLogo-5dc96e22.png",
    p0 = "/assets/png/widthdrawBlue-fb742a06.png",
    _0 = "/assets/png/1-1ca88291.png",
    u0 = "/assets/png/bankHeader-bc5294cd.png",
    v0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAANlBMVEUAAAD/cHL/cHL/cXH/cHD/cHD/cXL/cXL/cHD/cXP/cXL/cHL/cHL/cHL/cXH/cnL/cHD/cXL9BeKRAAAAEXRSTlMAgJ+/IEDf7xDPr3BgUJCPMOaG6MwAAAGtSURBVGje7djtqoQgEIDhUcfPtN25/5s9HAzKg+tWswN7wOdfEL6YWRRM0zRN4jAvSp/yUNkGuCTk5Oma+MDzwytPd5iTCevorgecoIghIrxFLC7AO1lfkSK1EnxaKLopZPg8PCZ8AAHo9sICEkLatwPI2C8Tvl6uRSdzQdKqIGxCHC9zUIZuiRkq9FSt0PF0jM31rGMsg0WwxGLrKG4Ldu8yFh+OU/C9O4BJ1XXcVgEa+9z4UzAvApbY7PEaffIV0D4fyotAIjYNv/BFwBBbHAYcsblhwBObHwboA2bgywNOeh8sxJaHAVD8x/U4AJgVQ0YYB/hm4B8ErGKx7wKamB7jgCI2dQh46VdmlH6aGunAKh0o0oEgHNAgHLDCAQPCARQOKJAMwLqAZKAaB3SxVUm/h26xLc0MrO13j0P4K/MCCDtbe3/5GwHfPe3ZvyXijYBrv0Y3ubtpkLocjESqmotuPXWmgJG6Ioyk45mmclvRNKKnPgMjK7GtMFKIrcBI8MQVYCgRk4YxJCaENxZiUcI/9ZeT/5/v8QnhnFBUMs5fGNrFtJYA0zRNX+0Htrj4Em9N8YEAAAAASUVORK5CYII=",
    m0 = "/assets/png/momo-3ad521c7.png",
    h0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAM1BMVEUAAAD/cHL/cHL/cHL/cXL/cHL/cHD/cHD/cHD/cHL/cXL/cXL/cXH/cXL/cHD/cHP/cXIUYVkYAAAAEHRSTlMAn2C/34BAIBBw76+QzzBQH1AMWQAAAbxJREFUaN7t2NtuwyAMBmBzNIc0+d//aTdprdDUkUGMLzblu674i5xgE7rdbrdrdhtMxxYOJhneCs55I8hIG0ZcjogeY/xBV1iMCzTvwIydZrHHDKZZBi/lYX4VaVZ8Lm5sIhUOn1xOpKUC3pKiZHOi/yLtdtwRZ1fPDpOc5fHlQ8EFJbDgtFt4/AUIBOn68oQAoUynGFJlpzMeYm6gnclE6nsAqlvYsQRTT8YS+bzfyFWdEjSeerDGphVQ3JattZEmAorpqR7N26wwGuATdfG3ipWDBsyNhhHNg+lSwOjPDTXrdsDt/6erAZVOVDx5pi8pBvOyxZEA+Gw7ssOLpS+5/PY6iF7c5DrtUxbQNlA7yfIA7vaqNQGP1mx1AurzrVMJaKXM2gHhD+/AaNagTSmpqAUgtSLoBOTexFAWBbjnWfSWYGQBTfx59PcsDHjv3Gyre6kh0RuFcVcUIO/J4yrrBox+Q4GEG4iAjK85fmJBgPQC4rXvBxXQvQVuWCKczcvKF+WiU4ImYAFLfcnrbKCJqzag9yCFsc/jmgf3pre+/FHKNIQrLnFMo6IpmFS2SFNiDmZYsDvdbrebzAfWTvmtLwIuPgAAAABJRU5ErkJggg==",
    w0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAASFBMVEUAAAD/cHD/cXL/cHL/cXL/cHD/cHL/cHD/cHL/cXP/cHP/cXH/cXL/cXP/cXH/cHL/cHD/cHL/cnL/cHH/cHD/cXH/cHH/cXIL15YiAAAAF3RSTlMAIN+A7xBgQHDPv7+vv5BQMJ+foHBvsO8vYPYAAAM9SURBVFjDvZnrmqMgDIY5BhAE7cys93+n2yLTtEJBxd38sY/Cy0fCMSVNo8Bny9hyN8Gs42EifSa1E0tmwgE9TxyXj2ZPcdVNLHW70aNIFClGD4FGgJyU9oM4h6VuSTZqlX+e9HAcy5MWxuXnIcESlu+TaZJIVS8Xkly2Q+yPQGTD1KpW6FZBj+V2GLAdLpBr0J3cHdKvddTKmjtR5l7T0V2GfmSymuPP1ZKm1marf6bsgRG/tS1XY4tDHpnnqL4wPpF5lqozx4hWjNrREtvqm5fDss/gTZQpOFST81Cis6lFH29m0gMlbuuAW3RoH1Q+HOA2QoGch6ID1LtQ0gHFSvZNqOqHqlfOLbbQBcVatxehoQ+KUoWMPyF6tBOKU0g/AUCqhhRe34dXR6be02ug8lFEpt5b0g1Ft+k0vfRV0O97kT/352N2TR3QPP6ETPFxDTRJpCRUXSqpAuAcoZZrUEpWnQpxFPgSLujZiAeHsQGhzLD4NNbD9OGEw4txkjCze33nIVBZ6D5VgTsTdW/BEBfmIVtM1CgWMQNt+lTxR9NvBZM3GQYfj1Nc7gyUitjNHsJiuF4RDjeWBhTnkNpAY/ntmGB0N5TjSyyaQfV6ln93s2G/BoVLEaN1KB5kha3e7eSkvVkLYgByKJr6Es9haZ3nGkAlAwDuZ8eeBcZSTAkrLnxKO7Y0TBgPsrT4iRyK31Xg82BEBmNm9jqUK00x+kO2QeV0ikRP28uUJV+4mXSuUrig4oLSD8UFBaLeq6DJm/T6RXpaH6ofisEX/2rj+756iwY8APRD8WCS6PwSKA6l2H92DZQ9Z5LE+HdCAx7L4ky1fVAM07w5VndAkUM3N4BeKPsVik3oXiigULytyT4ojUK3d2jXB71FofmFtwf6U/hq8Lp6GIr5guJLehZKWVGUvjDdgeY7EzPlTgx9KaTxPyW7+tNyVyYQf0Srf3I4mGmWLlYY65HgsRCDIzLbJxwtVqzanbcXepfjo9nQRm7c2XYBXpEKJnlqWvAjmeYkV08FjfinisNmj2AXYb1Wk4xvaQA/rk7HvP0xbN3EjMgDWKjkfEYtj/KQW/6TKxJ7bArcDez35j9zaMfmL1iKpCx38W+lAAAAAElFTkSuQmCC",
    b0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAG1BMVEUAAAD/cXL/cHD/cHD/cXL/cXL/cHL/cXH/cXIfNVtVAAAACHRSTlMAgBAg799wbwcds5AAAAFSSURBVFjD7Zc7rsIwEEUfvA2kpERU1NBQUyCWQMkiWADDR/KyKQAdool8c+WGgmmi0Xh8nGR8Pf772VfbdG4mzMIbPyml8wClhAlICAVICAFICAVICAEAYQBAaAAIBwBCA0BYABAaAMICgNCA2x7EKEA3GYdgGKnjAOTGSEBCKIBG5CEasWHEZ/5FJQQrJEFszezrzY9vyAu+FjB8QyLxtQhPpSgvno//l8yfAp9wj11bCmGWUntZwsxQ/ZyEmaH2wwgzQ7UkCDNDLjp8wgCGy7ocB8KUNXW8fCdsU1gknFNYLAkf13lp+7P6P84vDb/4/PLG1v0+abbr+yu5Ref4DSLgyYwvZL5UtovxcljuryIhlfXVPrLcQ9E+dv2D3W8d/OZEI+4HAGaD5bdwFiLa2lCNiLZWWiOi7TqgEdF8pdFi4CG65ouflkwLEf71+GffbA+gYMN541AEvgAAAABJRU5ErkJggg==",
    C0 = "/assets/png/bankHeader-8061c85e.png",
    y0 = "/assets/png/network-5814d749.png",
    f0 = "/assets/png/recharge_usdt-d87aea5b.png",
    B0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAElBMVEUAAABlZWVmZmZlZWVmZmZmZmZzCPu6AAAABXRSTlMA799gX1SLAhAAAACGSURBVFjD7dfBDcAgCIVhdzBuoAuwgSNgwv6r9GSbEArtqTW+/4rf0RAS2qous/ps1GTGGtgjORsalGtmgqwB3YAUBgCwCygjeK3fUI4B5YTQqnVxqgZoHmADFA8MA5AH8NvQuvX68k3jGDT+99oFAPgQxHecAsEdp0FRyywckXPHYc9t2gGbgItTvrEpPgAAAABJRU5ErkJggg==",
    R0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAeFBMVEUAAAD/cXL/cHD/cHL/cXL/cXL/cHD/cXL/cXP/cHH/cHP/cXL/cXH/cHP/cHH/cnL/cnL/cXH/cHD/cXL/////ycr/goP/pqf/7e7/lZX/29z/9vf/env/uLj/nZ7/wcH/jIz/r7D/lJX/enr/0tP/0tL/5OX/09PbDhPtAAAAE3RSTlMA7yBggN8Qf8+Qv6+/UKCfj89QB+NpBQAAAX9JREFUSMeVlel2gyAQRgcRo2ZtR0Fxidna93/DViWZpkCC94/bdw8z6hnAIuGHtWCIKDYHHsEbklWOT6TkOOMMbfZexcRtVs54lKIX4ViEM3wB21rl4BtWVn6RscUAOOUjFiIw6lzgzFA6Od8/otVAXThRaIhNQRgqsGQS9kECLRFhkEBL8DCBlkiRkIY5KA0tBTZTRTazgA4S4MsEDhlaPEq6oEUGORKX+lR+aV2Ws1De9Le+nuq/whoEvSNdHZX8X9LQl1VJjgC80xVV6+5BVsUJDYyEa9Eop3BRTXF7xEhoy6ZodNfXcryQcjzIQR317+2uJYEh0Y9PR6qJ6bTRx3OLhGmaaM+96oqJTvWDxGcErJd9uA1ky4Rs+a+RLBMigDxMoDkQhwk0mxK2QJhGUxwu7GAkYcGCmX1xqBCD4SNMEP5hrCb8wxg4BkCbkLMNTwNkBOaJz9ebIgeLSKCXlPoNKYvF4CHaOeMJ+Il4ik/kFPc7WT62w8Q643b6BwjfiIpdrFnzAAAAAElFTkSuQmCC",
    E0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAgCDvEN+/YM9QQJAwn4+vcG8hzv4VAAAB3UlEQVRIx5WV25asIAxEizuiqMP/f+yxId0Boj1n6g1MkWyShRCyYT+cKaU4vweNX2SVL4PiV49VpkjlRwuFSyncScfyKHeTJJjyRWYR5ZRfpET8nxxL+Q+Fjte0I7aw+i8cTO7qBi2eXXECSDVcuCSGpqVvzfP78uQytu7nQrJIF/+LZ3BlN6bQ3TJ5DU3f2WXjkCJwRsC4yxHnFtvcp+g+J6gasfLWCeyKG+u5ora07RTF51s/7FiuqC1f17IDqYK4jepjR6D0jF071NDd5wbM+WZd65EDNs2/PS7bFmNWYWvXXyMOGosO+3OkxUdWAz/1g6u+GZvHwG5B5ejKBUM1sIGxm4AczdvN7WQDY1NuvvC169YFOc+XoeJSN9b7J4CgWQthZyz8ZNQtSnyUe2z1jjKarPR5LZM2+KGlZwVmnFDusRM8LW1fdaACJLZGbJ0di9aggwQ2UBktofCF1Q2J7WDbBf2It8maG2xqQ4Iev2pQCoFd20ATwcoApRDYCidNxJSAUgjsgJUnQrzHUWInZD2f5PrHeFSq2+nxMRbtXusxbi60kxLYsO4vv6ATOL7G0yPMfOf0bgcIcclSkXllWVJG4UE634ZbPEuHOPVQhkvP6l84xh1rkNH/APZ0ZXF/2TacAAAAAElFTkSuQmCC",
    D0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACwBAMAAABdmfltAAAAJ1BMVEUAAAC3u8+4vNC4vdC5vNC4u9C4vNC3t8+4vNC5vNCvv8+vr8+4vNAlxIOuAAAADHRSTlMAQN+Q71+fIM+2EBBXQsx1AAABc0lEQVRo3u3aoW7CUBTG8RbGmg1Tu6QCQzAVyAnEzFwFIXuAyQkEmZ5ZlkwheIAJHmGv0NKwkXwPhbxX3ANJP0Pp95fnJj9xi4ByIqWUUqqLxY8FXFN3MPDm1dzN+/D6Xlnu8Ad+pTvpwevJzTP47S35HRZ8A6+RBWMSdpMcgHEV3lFtXQVQbYPwLfD5GzVuuAA2wZMP7COqJUpjPuLgO+yC8zXmHBzjPzgHthx8j9qAIzJAsGDBggULFtwqeLajVFuI08aiEzpSnPIG8XSJT5NgwYIFC24n/DKmYFvIawq2BYCFAcGCOwT3cbJpYzjDycrLg89dxeU9PMGC2wcXFQXbwuK5KeyEK/nuJliwYMGCW/LSVC+0CYF9Nk64kn9uBAsWLFiwYMEkXNDrlQa8RsrBA2MhdIYNB/eM5dqMX7r9M3ZmMWbWhB+A1/Dd5wCIHW+gWlmr2NyONyZRuGTJ7XgfzItM3ogd7/qrMz9RlFJKKb8j8pjIiAxG2WMAAAAASUVORK5CYII=",
    I0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAe1BMVEUAAAD/sjH/zRj/zR//1zb/+XbuR0f/zBb/zRf/zhr/zRn/+HfuSUn/zBn/+njvSUn/zCH/zBn/zRr/3EL/2Dv/82r/1DX/pSL/72T/9nD/4En/7F//+Xb/5FD/6Vn/zBfuSEj/5lX/vTT/yTj/sSr/rSj/2033kj3/0kFOeKcIAAAAE3RSTlMAIsBCE+/v79yBcZGRkYGBMrBherPNdQAAAb1JREFUWMPtkut6gjAMQBUF75dNQAbUDhDw/Z9wpsBKCoya6p99nl4SGj3mq0ze/H9my/kzNEeL85W5Zr7jwNTUs15wgWV6ObxhZqCZWlyypF/OiiPW9MvBLOaky7F4hx3hcj54H8eHL2ehKkivwOeSq4y/Ans7JmFvsGcTk9kjkU0X2Uj0NUAM20hRFcV9E5/jWduwiNBPQ6/IkxEWBFyRmdcv8gT3ImytCRtkVRDP9cckHRFU9ZG/hUVUniMKuqIg8AJYFLCoxiMMJMLNmHdkLoqCKIIl9gAmbEB1IE+ro1ZdERnwUtFFrC4XsdWxyPIzYtoSXbRJUmzpiiKtmVyRg95RetYWJU1M8JGgOI+IEk1EQxkrrqYiEKT3WAyJGCJhQ+QggmRYlMghXL2DQUd5yFg2KNJE3FGeQRgQhawX9fw29q+FLGzBUIpIx0TwFTlQiivXEZE+KVmkckvzERGRSZuTAYooJE5VROW1IvckA8JtogvbnyLXAFV0os5XdeS7El9NZAUGelJEPhz7dVGmsJrxq6hqQ6JHcWWKRJlPJkOiki4qkcgpM2I/pYNEh28y2wli69A0zmHyRpcfDNI0ce7pYkcAAAAASUVORK5CYII=",
    S0 = "/assets/png/1-4a1efcbc.png",
    L0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAsCAYAAAAwwXuTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANBSURBVHgBxZndUdtAFIXPle1MMpAZlyA6yCuBzJgOkgpCKgAqACrAqQDTAR3YE8jwmBKiEvwQTzIx1kYrC2EJ/ezZXcXnwbZkSbNXn/aeu1cCj1Lfd66hcAxWSi7lw68LdCCBJ6mH1yFWvZ+w0xzLwZ4czefwrAC+FPfOYa8h+o+n6EBeCGb0fkAP1F6dUPRDMO6N4BYc0BFFPwTvd/TcC+Eu7xSdCSaZ8xh+gtPyTtH9EVU4gU+JOlEPwxCe5BSgutsdJV/v4FdDxEuXjFyQG8FAfUYXSooFXxStA0ytwaZqMZUnivYEWWNX4DKjprieAk6yCjCj95E4JUqyxyewEuVM0Y4ga+xKbpJiepb8moHTyJWiXYAK3J3t9yfr8+QSrBwp0gHSxi6YyP48Sn9ugSJPkDX2YFCk1lt9ASsHilSAtLFv0Mt37f/R2zfgZE2RI8gae5nek5YDXW9ytmFJ0ThA3thlVqaX/6NXC0q+gpMVRXOCvLE3Z8zH/hj/gaJRgDbGnmXMWllT/PaWGYchQdbYBWZ+Z0MxiK+ow42O4ow9koPFxOTAlKLgDJzCzIuN1BqghbFT1Up2MyIwIm54O0HO2CP8HdyClRLW/EN1/8aotdEYIG3sAW5tGkZ2JVxwrqbD1rzQTJA1dhmwWfFZfCFu1KCqDZA29oqyrElJq3G6ScCKom5QtVCsJ8gae11ZVqEscY3wallM+R1QrGz80q14Te9gYZQosmtP8ZSZlRxtFgUJ2UnyxUyNxmZxNUHW2GMxXx2sejorh/l2ufzqrS7AmX8jxeoAKWNPiuqWsiy/rKYHlAdTKKLT5RRbwjXMxRcB8sauzOnFwVXNNYr7+RKuluKLOaizG3QCMFdEHBvW/xWfyeHvcT6Ou90LcvVQORcLAaaPiqgptqPCANNHbrDUb63Mc0GAsbxfnBV3FbY6asWbqfCYZYFythHjtNzyzwPsvBVvptnmhhwu9CMbgVGp5f9M0O0du7u0l1ZlY3J1Un5xkwaY0Rthm6qphLLl1AyMVsvr/LLp59rYQ2xLbXUsX8Ll3roOkG3F+1XUVsdaFuJpTIHnd+y8kjlmtAqxpCgWxu5TUZIp90wPthjr7B+r1nKprpWFBwAAAABJRU5ErkJggg==",
    G0 = "/assets/png/3-4225fa64.png",
    k0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAaVBMVEUAAAAcuKcquqsvu6wxvK0xvK0xvK0vu6wxvK0vu6wxvK0uvK0tuqwxvK0xvK0wu60wvK0uuqssu6svvK0wvK0vu6wxvK0wvK0ruqkxvK0wu6wxvK0wvK0wvK0wu6wxvK0wu60xvK0yvK3BzxomAAAAInRSTlMABQ489en5Rd9V7i4i8tCRhTUWZLRMvqIb15jJXKl2fW7Dg1SZggAAAn9JREFUWMPt2NtyokAUhWGakw3IGUQFI+73f8gZYMpFgrAbZ+cmlf8upfXVkhBbY/3287ODtGoft7ujRNkiDelfSSdI1x7NOp2l3N6nT+lIxv2gr3mRtAtZ2oUs4MrKcMVluPLynbbycgFXTIYrL2cAhGS4fKEj6yLPEXAFNsOVlYuy7LMqJD59yz5Ktfc06i4MW717UKnM31p72Kfl0dBx2hK4q257nl7XcYx3U5pyq3HQYU1O7EHtk+k1xQ7DqpTQzR7k+PXe4TFHP3+OD/xelBTY/MKt8Qhk3oUcMy4rK7jb8gPuLHdVvhJx8tLlNyu46zJcnxA2G7qQHfx9n+z1+9utTV3IMeNCNn8/S87TZrg+rRXnn92aiJc39iJtz12labPLKGu/wt7VsjlcEhnIyrZ4l8L55BMZyFOdT0wlXDsmNu2M1+zOutTMYDKpTbPGI75kDkum7e+Ci52wrpqTu/NSGDzfC9T4hY/YbhZ68HOP+G7G3m6o5F3j58aFhWxt4EZJeFW8nFrzAgN3uIerUfa3fhf24lji3adMiDtE1M3EZTf7AUjIG24+uLzsdwA5+QJ3Lnc+vxfy9l7I9mvZhftFbpZ7z3A3NmMvL+M6OHC3NsPl5QuOZ7RyWLtwWflUYO/LzbW3dHm5DRT2rmwu7hofVDj54AzlhTV0gLuQp2eco/xvkbUr1btbB3duvZeqW9rMb6KdZBEE3UejiS+59mWgGI796Mm/n/FdhV2UGroxXLNUKrwXpcZ75eUQrtjVwF75zaFjvV3GuvJyDFdIxl5ZGa60DFde9uD+V/flv0qFKsO5mxwtsY7X5xmle2VJdi6bVl9Oaa2s3358fwBsLa2JXzKWGgAAAABJRU5ErkJggg==",
    U0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAANlBMVEUAAAD/cHD/cXL/cHL/cHL/cHD/cXL/cXL/cXL/cHD/cHL/cXP/cXH/cXH/cXH/cHP/cHD/cXLGyizjAAAAEXRSTlMAEN9ggCDvv59AcM+gkM9QMLWLI4gAAAEASURBVEjHxdTNssIgDAXgJPyWtlfz/i97Nx2DBjg6LvyWQOYUUqBf4FD3rJr3GhJhW9FORSVctYNLNlFH7jQVdCjQxE31o4qUdSKP9yE6tYMNeA0GSNZe5mWANCZKQZYRxSYPvrp42FhxBcO5Mv+mzQqSjSYbvbstDMPLtHnxMROp02x4WhBcMChok+Bv93BDp7S9FDDog/LiV6rs76vQq1ONhETETdRUf531Sb5W2xacrAtCXtSFSh6vIhKBCBxgETgAR0QaYwFHBHox6YFrt3NSD3+UMC2kDN5VJ4BHEp5tJOhwG0aKu3wA/+llZ3q7wq/HFbYe48Me/TfFk37lH1IsOTivHSREAAAAAElFTkSuQmCC",
    M0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHJSURBVHgB7ZjBbcIwFIafQ6reECMEqeWcESjtoTe6AekELRMAEwATABtwrFSVGXysSiUyAuLaKO4DUinEaTGJjQn1d4nzbND7/2c7iQEMhv8NAQW4D4sKrAIP/725CTA2gfLFlE6rS5CMVAHu3byOlyaE4OG1kuheAiFTsMIhfa1RkERuATtuM6gL/YgAxaoMZVQls4A9bouSuyoHCcjktngmmaoiJECS26IcVJVfBSh1WxSBqnAC3PuFA0HwJMHtHoT2YNOy0AiAPmRnW5WLUo++VP14h80N/QpGEhxv09n1IHY/cBvztRkdyEYFK+Fhbg62b+IdFjdUxnQp22Mu9lONPKTkZkHBUSNgFTxzsVLYAgXYoIaO23hfQvlyvLlb4abAwi4oQJUApNTHxPPsPEKYNaCbNAHS39nlwfxkJEUAa6cNPAHQWKuXDO59mcMnKPurH5+45Jjjk5hFrBsjQDdGgG6MAN0YAboxAnRTeAH8wdbtZwvPYNZHIKqPEA+E+Jhtl75dTeLRtHOhLpxc8muYExm7g5U68HThjDWLWDfnsQu5jQ8Pm04Uy3qCfCyiD3vm01ltTKLkR1BI2ONZTqGCsJ1CYNDMN6lzq4hBIxnjAAAAAElFTkSuQmCC",
    T0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAM1BMVEUAAAD/cHL/cHD/cHD/cXL/cXP/cHD/cHH/cHD/cHL/cHH/cXL/cXP/cnP/cnL/cHL/cXJIXFloAAAAEHRSTlMAgCBA378wkBCvYO/Pr59wVYQI0QAAAI9JREFUSMft08kKhTAMheE0U2u9Q97/ae+VQnDncSM4fNBdfiSW0o3Jt2yR1ThbAJRzXiNBxSdANuZbwNpYGA98byAHBU0jgf+VQXQYKaA+5v0CF/cEZwisTsuBg7IM/I+DwZxvYMICzaBiQeQ7VjBQJ38LtbragQOU37PA5Eay496GHoi5U+JquuFVmB6oHwU0T16VrFt9AAAAAElFTkSuQmCC",
    Q0 = "/assets/png/bankHeader1-e6943f76.png",
    V0 = "/assets/png/bankHeader2-c079cfd3.png",
    O0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAANlBMVEUAAAD5WFj5WVn3WFj6WFj3WFj5WFj5Wlr5WFj/UlL5WFj4WVn5WFj3Vlb6WVn4WFj5WVn5WVl+DpWlAAAAEXRSTlMAH99gv0CA758QkHBQMM+wr8+JNAYAAAHtSURBVEjHhZXbwqwgCIVR8axNvf/L7tkGIWP1r6tJ1qeAQ8Gi7NLW4CsTsTQD78oVj69O4PgvdC92E+Ix5AkYssE87M52ARi5PcVbCgsgSnnxB4kKILK/aSWJxeKyAEI8+HHsroGVKNrOgNYmocprAWAB3HV6uSKRkr+6N9fgZb9O4Z2eG28AXQHQaUekCyB/Zb8DpwCxnBUi3c2ZjDE9GA1IV3BuhqHte9t7pYCsW3lI8wHQq3fWBw1IUmFmh1pq9QgrAMh30c/lD/+l9pCOlFag8pOj62EAP3jYAXQFGPYVtQwFNzvOy0E1g1MvlJsFEo51pGGagUSpb9RgBoYxkn0GAu18htIFiFMDXCxQf58BHs52D2wLwBHPgE7J/gWQ47MCcdNApaK3M7oAJTs9mIXamXQveFTMqNLisTOAlEpV0zP3wH/9GIue8Mo/UAE0QBgSVn0N/srar4DFFoqT4qjWMB+RJwAwmVq9OuDDHq7CzMAejGtUgZ0CSH03v0Bo4I16E1n1mrH5B2gesn61O/1m3Qz0OdDJTn6Zmhx5wfgZ4HCisCz7g7WvgJd/y/3nRwOeWkI1PhFO7E+foHADlPj2kasKWIYJ8/pVty9AgDs5+wBgh3sZQjSAHl7UUlRALGR/kQ+054bFL7X+Aw0lR3Qxxmf2AAAAAElFTkSuQmCC",
    P0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANtSURBVHgB7Vk9b9NQFL2OnTRhS7amTLDRsvSDJZAFBAOVykClItGhSCwMLJVY+A0wgARDh0qA1AEGkLoU0aXARMuUlgXYCFvDlhAnMfde5xknjr/T2JF8lqb2833nvI9z77OlekPTYIyRgjFHIiBqJAKiRiIgaoy9AKX/gvxpD5TdHZAaDYgTtHweOudmQF280XPdMgOd6fMAuVMQP0jQmr1guWoISL/YBKl2zEqbd+/h3wLEBcSFORWLzDHzatO4ZwiQv1Ugs/GsV8RkEaKGVpyC5v115sTkkWPqsGLc71lCUq0GmaePQfpdNUS0ZxcgKrTnFvSBzGZBqv6CzJNHzNEMyx6Q6nWYwIby5z3QcjlQl1egdeUajBrti2VQb64wefngC0zQwA4wFsUuQHr7HYsh8q3LV/XGH3ZgFOjvU9l9b9tWcQrEDzZQBFoXB8TRUFDYSUJdvoXLdp5/p7ff4kr46NjeUQA3wAAp3BPq6hq0SmXoTE5B+iU6FgobJrRsjvvonDnLsZXXWyAfHbo+5ykTp37+6G6gY+5Ad4Xh2aywSSbfdRov5JkbeAQ7VL/NDkGExeOpj2rV8/O+aiFhs/JRZSi5gj2eByKPs/x9oE26wXcxR85Ee4DcIUyuMDweY5BNZjaeB6q/XDex7YNdayPLo1yhFQqebZY9/vqSHsfFJl15QAhYbBbcc4XZ42UsCcKQJ4Q6D5D1acXTxv9ErLW4ZNteNQkltKdnoI3WHAaBBRB5ff3Ps2+n32yxi1CuUG+v8X1L29IlbmOeJRUFhylVAi0hQYitD8kL66N8wURxZDvFdb5OaJIgs02i00h/alzrEMKUKr4F2JEniFzRXL3D9vr3wUPjObJJPYPrTkPOA1RrkQFgzKAifC0hJ/ICQgTlCgE7m6Q2HKNblvAe8rmcPM+AkTHFwQJPRXYZU+SK1BwWZfjqWP66bxuXYvCscd3vfyY8zYCFvMd0Lx/sO5IXECKCzISrgIHkfaZ7LwgqwlHAqMgLGCKwL4IXEbYCRk1ewK+IgQKiIi9gLt0JThneIiBq8gIWEaWykfjM6BEQF/IC/SKoBOc3Fbn/ZYokPvLRWwhSGRfyZvSfAGmfUDLl3/1fKeNGXsDuGGvZA3qNEq830wzklDKVJwJS8p04YiQCokYiIGokAqLGP9jVItWcMSU4AAAAAElFTkSuQmCC",
    F0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAP1BMVEUAAAD/cXL/cXL/cHD/cXL/cHL/cHL/cXH/cHL/cHP/cXH/cXL/cHL/cHD/cHH/cHD/cXP/cnL/cXH/cHD/cXI7hFOrAAAAFHRSTlMA358g73BgkIC/v69/QFAwz4BfEHAKDyAAAAEDSURBVEjH3ZRbbsQgDEVxMK+QV2fu/tdaqapwWsAMH5WqOZ/oHohNjHk/dpcJwLW686V4gnD5Udwm/ISsmn8wfsNOyW9o8dHNO7R59L6f0YY7dRB6rM28R59mdy9g6ogTAodj9xk39n6L5LI8q61NKNh6j1UrYWn0jWoBhaOsBRQ0QQqMulA3PWsC1QU+ZY1rIdc/26Z2KUJwX/sHCKEWdtygEBfGjcUoNyfohseskWaNk2cNh1kj4u/PsITp7tKsYc6YGAClmMvNH55lWBUWGfIgszc0yIoLmIHxnd9kugcEyctkDJE8wmQe0Yw5geoRGlau1KwaZM1rRALlxR1P80/5BGX/QuYVHkLRAAAAAElFTkSuQmCC",
    x0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAM1BMVEUAAAD/cHD/cXL/cXL/cnL/cHD/cXL/cHH/cHH/cXL/cHD/cXL/cnL/cHL/cHP/cHD/cXLM0ikoAAAAEHRSTlMAEN/vjyDPcGC/QJ+vgFAw/hGpqgAAANhJREFUSMfd1EuSgzAMBFBL8h8Iff/TzlCVRZwYdahUNnk7Fm0hJBN+lJRVgbzW8J5iuNN3ItLwYBUayBhkloh4EoNrx4vuBla8aG7HmPC6uGHi5o0AE8UJbJjYPq3Ae7j6lVJwND6HUWeT5ru0sO0m28oSTQK3Ke6sBE4kpNoMsFbkePKlaI8XuSuW5J0ecdDY5f+hb4ZDlNPjFVN6UmRXnNCdn89riMKhwnaC/m0SBnzJF+BSCQFjYxcVVGVv5F+MDCoPAQNlQwDgvh+42oOOc1Dacw0/4w/+NDjXQcpBAQAAAABJRU5ErkJggg==",
    N0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAD/cXL/cHD/cXH/cXL/cXLbn+3uAAAABXRSTlMA7yCQgOjDGAUAAABMSURBVDjLY6AycAxFAcIwceZQNOAAlWAMQjVAVQDKYA2AMuD8UYlRCeIl0BPckJAIAmYAnBL0dxUjugQsc7KgSxjAIsAQVVyEgboAAJ93cdNBZot8AAAAAElFTkSuQmCC",
    H0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAATlBMVEUAAAD+dG7/enH9bGf9d2//cGz+c2z9bGj/f3T+c2z+dm7/hXf8bWj9bGj/e3L8bGb/eG/8cWv9b2r+dW7+dm79enD/d2/+cmv/fnT9bGemdXgnAAAAFnRSTlMAH9/fMBB/7++fb19Qz7+1j2A/788/8NQSMAAAAPpJREFUSMftj92SwiAMhZNaimX770ro+7/owoIyGqiTC73yGwrTw/kmA3z5FAZl/R+Hwr5DYd+hqC8TWicT2nMUhH2Hwr5DQV8gYONuNNO0mOvLvnXOL086z/31Rd8GHo5mrfdZO9JgtZ9ryUlBV++TfSIGCxcmW4Du269iEy7xjvKWlaLRXuoTAj08M5DHUoL9EH/5SsdszOiOhZOSGh0cGANCADezjJTQihv9TjuR/xAy2Ptk96sDzuwvAlHIyn9YGqHGnQseo0M6AEeduBDAkM8Q4DdJ4LlWVQPL+QZFQyeBGwaKtDoK3JihzBAFboxQYcXKbPjyLv4AUmYsH0ifPg4AAAAASUVORK5CYII=",
    Y0 = "/assets/png/bg1-b6442aec.png",
    W0 = "/assets/png/bg2-c5feb22f.png",
    J0 = "/assets/png/1-bfa3f309.png",
    K0 = "/assets/png/2-79ed5c4e.png",
    X0 = "/assets/png/3-21c2fbaa.png",
    j0 = "/assets/png/4-f425c40c.png",
    z0 = "/assets/png/CancelW-5d1e136e.png",
    Z0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACwBAMAAABdmfltAAAAKlBMVEUAAAC3u8+4vNC4vdC5vNC4vNC3us+3t8+4vNC5vNG5vNCvv8+vr8+4vNA6OSxOAAAADXRSTlMAQN+Q759gIM9fthAQcZ8a8QAAAXlJREFUaN7t2rFKw1AUxvGk1Qa1Q2Yh0MniEOjoUnByCzi6FEqfoLg7iDgWHHyAvoDQR/AVkqYowvcujvcO97SQb2ma7z+eC7/hpkObnkgppZTqYvFdAdfEHVx48+rDzfvwel9a7vALfqU76cHr3s0z+O0s+RkWfAavkQVjHHaTHED4KgbeUT03rgKoNkH4HHj9jho3XADr4MkLdhHVDKUxH3HwJbbB+QpzDo7xG5wDGw6+Qm3AERkgWLBgwYIFC24VPN1Sqi3EaWPRCR0pTnmDeLrEp0mwYMGCBbcT/rylYFvIawq2BYCFAcGCOwT3sbdJYzjD3srjgw9dxfE9PMGC2wcXFQXbwuKhKeyEE/nuJliwYMGCW/LSVC+0CYF9Nk44kX9uBAsWLFiwYMEkXNDrlQa8QsrBA2MhdIo1B/eM5dqMX7r9MXZmccOsCV8Dj+G7zwEQO95AtbRWsbkdb4yjcMmM2/H+My8yeSJ2vOu3zvxEUUoppfz+AcyuA38tYLgiAAAAAElFTkSuQmCC",
    q0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFySURBVHgB7ZntbYMwEIZfVR0gIzBCV+gGjNAN2g3CBu0GHaEjZISM4G7ACG99xYgoasD461zFj4T4AfbxYN3ZGKDRyAvJoz1GlkdiviMG6YD6DAiFy5vvUBiJ6WKPCGV+BVDCJ/4D/jlNQJsmoE0T0Oa+BewcYxiOQQIeUTffiEF7KeFDS2JtmoA21QrY2nFwZXq13JaYB0Lr/ac9uq2bqhwBK320px7TPPCMUDTmARuuvxi9HjGUFuD0IT9vJAyIpaSAe3jjQn4gBYUFTnPSSwVCCkoJcNr9mx++QypKCNjuXy+S9gkpyS3AZfdNeENqcgr4JC09ZuKtIDkFzq77M3LFzyXAZdfbrCVtlQJXSdtt3FuXgFSZPUlblcBV0g6ebeoQ4LK2F0472lUj4JW0yeOnEOCyTBi5c5mgLsDItX0KgeCffCFJ+0f735FDKBKY25gbbY27/nXj+gv9iPs2kA64/qN7TUCOQ6CAxBzQaOTlB9GrTVQVYX0fAAAAAElFTkSuQmCC",
    $0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAM1BMVEUAAAD/cHD/cHL/cHL/cHP/cXL/cHH/cXL/cHL/cXH/cHD/cHD/cHL/cHD/cXP/cnP/cXIGGyG8AAAAEHRSTlMAIICfv9+g72CQQDBwEM+vHMA0JQAAALBJREFUSMft1EsOgzAMBFAnxJj86Nz/tC0SNS2CyGFVqbz9SLYyDt36uHOV9lJkNM1Dpg8eBp7UBJOiAYaJ6AIwyjqR0aQrG/mrgRFGw9VA7B3JMUzYae2KNyiVfpgXGEikq12K3S/9xwEJC7zMYcWtAFdaOEEmFQ8D/qvsgWmTGjcd3schjpQ/CGg1eFgIwI9hFY6rkWGUaCUw2ZYr1rL2f/cqjzOaOCbaq+4c3bo8AXS1RYmErOdlAAAAAElFTkSuQmCC",
    eC = "/assets/png/bg11-8d5da6a8.png",
    tC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAnCAYAAABnlOo2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFQSURBVHgB7Zi9TsJQFMf/vVysglUb/Oiggx3ceAs3B5xl0jfwLXwGB510d9an0M0BJxPUEBW1fiCUnhsKBNLcBbh3OL+hue0Z+stJe5Lzd9Y2d2L0EKKIor8Pt1CGu1DGtHi838usyf4hv4HVrRPk5DpMEITnQBwPhEzKEOm7BV0Ky7tGZYZRQt5KBbaghKQbwhYELIOFdLCQDhbSwUI6WEgHC+lgIR0spIOFdBgRCrbPMmvWdUiOPvj7vkWzcYnWTw2dzhdmjaQVOuWjcaFkTCK80oE6RM0b4zKEmOstiSRkAzLdWn+ju7EiJRKT3vnbrSfUH44y6/2/jLIhG5Dt/2fVhfx8ONaleu0Qs0ZE79fq4JWqsAHx+XqFOJk3FOHZICVo+L29nKqbpWQE+MGxyhhN4aSh56JfSYSqcAx/3M5wCptLpjZ1iWaTiRCLRkIXaRJMpT5WHIsAAAAASUVORK5CYII=",
    sC = "/assets/png/c2clogo-e9e3330b.png",
    nC = "/assets/png/c2clogo_a-38a8cfbe.png",
    aC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEESURBVHgB7ZjREcIgDIaD1wEcoW7iCG6kG3TEdgNHwHBn78DjKNjElPP/XvqSEv40JKREAICucVsG3vuZHyPZsDjnLiWDGgGeDGEBxT0OJLSQNLWBO1HnQIA1EGBN9wKS0mjctGpJmtunANOmVUvck4YtgyORCzAOsTX/IyBUKJ9nrrSdSYHuv0DCGio6KLn94RBbAwGtcApP7yp1Jmm0DzEvfY3K6kiN8DvP4v40BYSIR/3hQV/A791CEEoGmgImzYa2OlERsDd1WhxpCdiVOi2OxAXwcnf11ImciQoI6aKdOtmRUmoi8zozdjIT4zZqDe5C1kCANT3+mSuW0YUAAOCXvADPhiBQvpzxlgAAAABJRU5ErkJggg==",
    oC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEUAAACvsMetr8Wqr8KusMausMarr8OvsMevsMavscelr8WusMausMausMasr8ausMY46WCNAAAAD3RSTlMAn2Ag75BAv69/EN/Pv1Dhl63OAAAAc0lEQVQoz2MgDqwUhAJRA4jA+f8w4Azms/1WggKNr2ABpo9AAsHCFEhS/A5Wr2cAEWCHm/gTIqDvCLVT4v8CsIC8Alg7mDWMBApFPqEK/P9/AVVASI0BzQwGrALxTbBI2J8AFjCBh+kfiELmQFhEziIu4gFZQkr21tMcBQAAAABJRU5ErkJggg==",
    AC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAOVBMVEUAAAD5Wlr7WVn6Wlr7WFj6W1v6Wlr6WVn3WVn6Wlr6WVn5Vlb3V1f5Wlr7W1v4WVn5WVn/UFD6WlqPpRJtAAAAEnRSTlMAgB/fQL/vYGDPoFAwr49wUBD3YNIPAAAAgklEQVQ4y+3Vyw6DIBCFYebCWO39vP/DtrFAF2TEjUaj32YW/AEWJIR1XCjpWqWi0EYqGGg0QBrH/wOBc4V6/QV7V+s3zQimheChRT50hudv0/gFRIehj/HOIWOIf/0xO07KxGk0UwKlcaZHTbW/prH9p72H1MhhVTqBq9/C04UlfQC7NA9cY1vOUQAAAABJRU5ErkJggg==",
    iC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAn2CAIN+/QO+QEDBwUM+grxAW4hoAAANASURBVHja7dzrctowEAXgY6G7jGHf/2U7hAEiCKmt6nKa+PvbGeJqtau1LRm73W632zWgw9Rd0FhNGxnAaKwVZIiAtU4yxIS1ZhlCgTvGJ2zgVGaRBqzKJLwaG/MZ9ThpwKGeKA/4J/IQUdFS6Xe13C2oJk9rXWmuBNSk5O5YKduOqElXSj6bRaImky1IxbzcGNR1qvLLLlt4q1JVYjNlCy/hJDSNpmD+2xaljtJqCuaVMKHQudkUzP/3h+JpUlAFS5Zjfyhzzhbi6qxUZFHfgbUXbNITJjTgpRqDFkL9G0zaGDtcscbYo40Td4QrxviINqLnjjAQuCMMOOocvvC8VfrqwB1hIEkFGs+4ei6LllSL56hcpdDgBVeaTGgrUqfIxZl7AAFH2OvnLG+NuXKky/CD5R5AwJEPIGB5U/hK09bAm8A9gKUrstHoRvG1MU8sa4m50ZuD7DW6UtQBLsjkgN7isimDI7rThrPCPCS/OkEShnC0CXKjyK8POPoV8VUo0C9TTMJQ2sq3rEaZTrfyMwjoE/HwXTn75eU58NAnIxkfmC7vQ1LBmo+8XaY5gU+ap+V6gTYougt0wUvGTCwJ8h8kyftazTGKs3zjgCK/aKlLhrOZvlFr2q0jNvo9Dasa8wK7/KbJL1O47ICynuKmSZv33UEKZnimRJNdgcITlf37EtFbyOpx/FuKB3SVJ4hxKyaBQlfarJlg0Q57/HZemQDLoAeYam2CRjMgyHmA3epHsT6il2lDPzUPyGT9KcANzxf02vDuOuVJ+V+0vV8m5n+QbwhdNgMJh9Burmyq6xCm7a9Xo+82hHkK24JBP6MxLQ+q5NY5oq2p5AW67ngrb6TMmhX5V2zPY9/gqGmPauQpUu41TchS5N1G9PGbot5tkCKM8JedNdNG9Ial8Eh+IAcT+4EX9iND9IeuPiLMnMdGhDrGifUzGi9tMet6zH58N0pVEReUy8jnVyekReZeaFiLzP2pCV2z/7zpm+x2Lqe4p6DIxD0FRQz5FBTRzFUwn4REJ4vbVcJFqluIF+KryNntPzjWXrDK9tGkMlYaWFTGtVg3RqW1kiHmn/ORTvrPnNJ/KJb+U7u73W632632B6FWBDOLx+L2AAAAAElFTkSuQmCC",
    lC = "/assets/png/appeal-f920cabd.png",
    rC = "/assets/png/hicon14-c2c6ca62.png",
    cC = "/assets/png/hicon2-147f9796.png",
    gC = "/assets/png/fail-5e44a4cc.png",
    dC = "/assets/png/2-4468ebef.png",
    pC = "/assets/png/hicon5-be996f48.png",
    _C = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAoEDfYCAQv+8wgFDPkLBwj9K43fEAAAKrSURBVHja7ZzbupsgEIUHhpPiIev9X7ZtLmJbk2B0b1jtx3/txa8rMyBgpNPpdDqdTqfzrxFWM6nGxXlhxEY8WAZhw0f8gSF7ijnhL5TK0AFgNvR4hgYhISiesggJN7zACgUWr4jCQFCA+hHe8JpZ2mPxBpXmBMU72neaG97SvFk7/IK3SrziPYO0xQBg/g06FJikJVvArEOJwR3aRu1QZJU2bAEzdxkDgLmIHcokacIWMHMRGwDMRewAtClib91vZBsKAVct4rDGtB+tjC0EXGuqEMaE56grBFyliP2E14xnAkas2DbGEwFjqdk2bCHgwl1dxh+PyysOkqVm37W7S6sWcTo8KngcRr6OAUV09wusOd/Px5/HAjQo4hFlvNyZ0KKIzfGBFYdZu+BFQcMumAK5IG7sghjZBRFz4BYsodE4zyx4x1hyQcB4ckHoQC6INJALInlyQUR2QVh2wcguiMAu6NgFZ3ZB0wX/d8GRXTCzC3pywYl9JFnZBT254MQ+3ZrZBQdyQWV/J5nZBdnf6pT9vXhmF2RfWVD2tRnDLmjJBZV+fZBd0JILKvsSsGEXZF9EV/ptCHZBSy6o7DtNhl3Qkgsq9W4nAMMumMkFE/eGNmDYBTO5YCI/swDDLpjJBRP7sRTDLujYBQO54MJ+NMqxCwZywYX99JtjFwzfIqj4KuL3HPQ2LRIWhzK7S6/i5TjD8d3IkCokfOVzDRkrJrwxH9/JCFoh4SufDMlQMeGN+YP7dfUS3gjTB4ducsJVVD4lLB+cyPBa7wFuOMVz4rC/nbnCXH9PNrugUxx3ete7jXo5zWBtfny8O/g3F+oVvxr4yO33k5Hc71y/WYJU4HS/SatUxuknemOQ+lhz0DGuQRrh87jESV8zLbNr/wdNnU6n0+l0Op0HPwD2M/DoiSvCDQAAAABJRU5ErkJggg==",
    uC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAPFBMVEUAAAD////////////////////////////////////////////////////////////////////////////YSWgTAAAAE3RSTlMAn+8wf2AgvxDfcFBAgM9fkI+vhyD9mgAAAtFJREFUeNrt3Ntu6yAQhWHAxoBPbbre/113vVMpJiPsJoHMSJ3/umq/QpicbTRN0zRN+1Wx8+PF/m9ZpjkaQcXpEhzucuEyiVAOfUCxMA6GtTgGnLR6PmN3cfhNloc4B2xJJUaL7+QSR4cHc715X92KJ0pvW8QRT/aeRYwBT/c1mOYNCT/J3ObO4aVSZ5r2gZf7MLck+vZCmb6Gwg6V6kyTBodKuZ+zLGm+5KVo6veFioX6vh5VG2v7Bvwk9aAkVG4VvcFbo8wJc8vFikCLBlnBJ+TaLHsBgSB8AYFO9gICn8IXsNZB9sgTNwtX7JN3TAY0bKjyNL1hSwVgwD55exzRtPgycELTppeBnwBN0qwOuEvajdChaa7xGQlfCYclG9qekhkHrduc9Q7F3LxN+rXlI5rp/MW+zhV9178eHcr5F4HL8QkkQuI7+yVjQ6A3REh9W77hnLGH/zwREt/p3bltCAyGCKlva2UCos+ERV8PDiAVln08QCos+TiBVEh9nEAqpD5OIBVSHz8wF977JABzYe6TAcyEmU8KcC/c++QANyH1SQKipz5ZQPT3PmlA9LlPHtDF/bsC8oCuyz85IA24+XKhLODNdxNKAm4+KpQDvPqoUApw7+v7vVAGMPMBmVAC8M53J+QHEh8RcgKpjwp5gdRHhWxA6isImYDUVxSyAXNfUThzAS3xFYSWCeiJryD0XEDiI0JeoCU+IuTdYsyZryjs+MbMOJj58CdsZ2LvToESP/GhQAUqUIEKVKACFahABSpQgQpUoAIVqEAF1gVGTwpoXPCkoeSbIKS5uJ1CKm37AiF5U8jbh0s4KdmHW0zFbIsxokBJwBEnLYa36Xym8RZxEvvVy0LTL1W132Nv2Es4KBn+JuELaEyQOwSvxcR/KbDjhiTbtwll+76FFqTAPqKzfEJWmoy0fLjxgjzeVpwX+90o4+qhmqZpmqb9jf4B1ajnRMHp57sAAAAASUVORK5CYII=",
    vC = "/assets/png/hicon8-a0b773c0.png",
    mC = "/assets/png/1-7f0714b7.png",
    hC = "/assets/png/2-9316f0a9.png",
    wC = "/assets/png/3-b1060d1a.png",
    bC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALvSURBVHgB7VrtcdswDIV7HUAjcIN6gyobeARvEG9gbeBskG7gbKBkAicTKJ1A2QAFI7CCmFikKOjjh98dTr4zCfAREAiSArjhhkmwASUgYkaPnOQ3iSHZkmQsFh8k7/x8JXkhed5sNh+wBhCBnKQkqTENZ5IdLAVrnOTiDaokeeD/DHvJtc9ItvxfwW0lKpI9zAUeoBxEzQPLEnXtmYSDnRwDU4IM3GMbQvZ5ACV4hFR1+4aOYtYeUjwQYcN66I+wcwRNeCSmmamuvYM6GUHCujuHmcCJoVYhw++EwxZmBjapfVwkcLzWo5QoQIRZnZTNsF0jHmFhcHKxKId23HPHCqfO6XHjyUR0xFcB2ObzPawEIsQusR12zhuwMgiv5DGNz0t5I5QZsSmFwu8Kx6KDgRlhk0roHRDjs57J+pTtohgrQ5CoQhOIbcHaIfzDa5fz8wVmAqf3PTSbrjvaaL0HurzxM+9TWobcq4khnhB9XNQ89TVyi+Dk5UgKCe5ngllVpDf1Et2zk0SC+/5/4fsafQLilbp6LLo6HUNC6OgfZwKRQaW2BgnWEyQyOLRiySiSiAqtihsZGKa8l4wWCWHL4tLXyJUng9PvNTKaJFjft4v2T6/dX37mJE8wALSQvZLyO/ppDRQcwgaGLXYxcEvD29UWqFCieJ5R84TQXwajBrsbmOS1RJDRJmHEBGWhxo5xAeONqi6s2O5cw2GP7clFDSsDtlk1LhlhW3MtdnriQ3gjfucqXvoaJ667IsdjMPUcQbwrJ1gYYi2KO3jwOhtcxwHdvYgOAynA7mFyDjMD23Jk/GRie3JhZ2S281/OnrXGUiCVFmozE2dPHp4XoAmPzCOi/nERNpXFaTISwtBBuLtCxUM8nPBa75pBm83kbe4noRQPsQeO2C0yS8QZDwfx622sG4QNQbug2ozjX08b/u+EX6+n7eQsft9+xjTUTCiHkZjiEw4rv6D5dMNA9xMO9/mG3cA9w5o+4bjhhu/xDxyfG0qvtudVAAAAAElFTkSuQmCC",
    CC = "/assets/png/1-a2189950.png",
    yC = "/assets/png/1_a-c3c7a041.png",
    fC = "/assets/png/2-bd839975.png",
    BC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMvSURBVHgB7Zm9TttQGIbfz85SqdDAyBTEilTuoGZpx5YrgLkdaghDN4LESIhzBcAVUEa64F5BU4m9WcpYEEVCorW/fiehakLsNOfHKaryDB58/vz6Pb/fASZMKATKS+CNjTUwtvBgoEsQH9LeXpSVWsotxxxI4QoeDKwerbxUwrCiYVjpf+MvyV85wjhgWgGSvg+nKGrnZR8qZKDuMCyDvAuMA56eoah2OWp2DxrIH5GKqYXCoZaOCIWWkC7pRxSPdhv6Qth/j6JhxNDEwJGfqmtp2a7PVAxNtIUUP04o1h0fCgNHoNaYYxQF8yEMMBOC9ACFkcYwQGsd6YXXq6fyDDITFxaA2dnsgjc3wNkZcmo9pkbjFQwowRSmbVnlg4H3jx4Bb14PL7uzA3zLWFfZO4Ahxo502l2vfpLn0kDCi+fAzEx2oQsRcPIhK6VNjb15GGLuiIK5Kb9if+B99of+pS5swwIrRzrt57mih5UbCsNZqwemddji2ddhLYSi3VjUNGEMNalet9722DuiYK6Zrfayy23UQzjAiZDOtoWTZT0xkpeTFTjCjSPoFTNKN6OmyjvsxKfdPgqgc0Qmqsl/etozo7XVyq2OAd1x5RZnjvRRKokQX1Y+Lv95qaIg3hNJbKMAnDrCYa0M72pLFrfhA5i8COnjbZPtem6VcASH78SFH0ejL45qsE8tuxLjrmtpiVBIXvp+2nHRAU6ESFSyYbZNkTLetZNopv1ea3MzQJKewgbfW6Zdu5nM3pEk3YctCTdgiZWQTqAbqMAaXrqryxg7R1xG65newgJjIVytqrN1Bc4QV9R4M8TcEcYqXJOwscNGs1Z38bv9giLQjML/xswR7zZAUXhXazDALPjAtHp3g9TP4mI3HDQKefEtppfyjKCJdtfKveyZmwM2q9CiXge+nt9/K+ea6Xnd7qXviO8HSDPcOJcPOjnJj2fdR8W3BkUoyihdq+1ODA30haRpkGukSTwri4TV1B7rFDEY7N4zFI92G//NZaje9bQv19PpmK6nPbmeThxcT/NGdV/iVWt4UEgwLycOlj/YU/4skZBWfwDhH8M8hqvxCRP6+AXr3BzuT3UFZwAAAABJRU5ErkJggg==",
    RC = "/assets/png/3-5d3eefed.png",
    EC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOLSURBVHgB7Zq/b9NAFMff2Y5EJJDCQmGL6MKARCIxIBZqpJTCQstcCcrKQCUkBqhUVyAGpmZghMIfgJQJonZI2JGaf6AinaBbpDZqqto53nOSqrLP9vlnMuQz1Nb1HN83793du/cCMGXKFD8YJMRiwyj0TLPE++wxKLwInJeAKQW8FgZvYh28b+Ndh3H4BQo065X3TUiI2EIWdtbmBoOHZ2eDln47iYOaClb1x/yHFsQgshBbAId1vJ2DZGiynLZS1402RCC0EHKhY9Nax29/FdKAsc28pm7UdKMT6rEwnRcaRpGfWg0AnAOpwtosp+phrKPIdqw0jBI3rd30RRDc/sIebb8pyT4hZRESoZhoibCTOT4dFfq6zEIQKCQ7d/Kkg4tAOcjNfF2LJvaYRRD2GGgsfp18hdir03hFDOHFwVi88XStgUuZf2CCYAx0r2jA0yIoYgsmjOEGLERokco2rlJg7sIE4mUVoUUUsF7CGJi9dDWwD1plUdTu5VqLkDGvbj6BT3dewN0rN4K6PhWtYC4hFAyi7kw3PhJRuVaGg14H9g7/BXW3jwvORrdF+olFs1KcF/H692c4OA6OFUXu5RLCGdyDjIgiwoa79zbRHMnErSKLIJhyy9kkEMKKkDKxRNjw4MkeZqLP5AvwXX8Ly7O67CMJiLCRESLPRS1vX5ev35cSk5AIISLXkv70vcO/OKAv0DV7gWISFuF6WCCkH+oNMmJSsETb2eAWwpTQaRk/MWm4ExNYRHP14nwfIjAS8/H2c1sMMZO/nM6coASfA5dFMLqsQUSclklrYlOW0t3koKdprTAT3sl5MamIQLcShfHC88iD7bVNvMQK5WmPOUIx3dMeJAkD9rU+/27F2S7cR+K41wiyQtIiCDwrVcXtAoama8KEge7T9Mpxee7saJUNmDQsbcXrX55ChlapwuRQrT/0TtL5xlonOc2ghDKMHdbOdzXDr4evkCam9pml6nGW4/hgZh7HUFvyLzMERr9kzj6MSQxWtPDdS34uNUIqjN+ZN1pDMW3IChLBVZ3eLdUdQrDwE9OoakaFHnQnGUuMCHWwog8+yallSHc1q+a7ajmMCCJ6MRStA6q5xRMqhtJmh382opasY5enKU+scnOVK1iijlKetvg3pkItbs09sR8MEHaWkhJ8mBvjlCBgrHj+BwOM9zucDm4W36fBXzjSWkHL6pQpU5LhP2fY2Y6KcIURAAAAAElFTkSuQmCC",
    DC = "/assets/png/4-ad3ed5fc.png",
    IC = "/assets/png/4-ad3ed5fc.png",
    SC = "/assets/png/1-e146eac4.png",
    LC = "/assets/png/1-7f0714b7.png",
    GC = "/assets/png/2-e4cd29e8.png",
    kC = "/assets/png/2_a-30530371.png",
    UC = "/assets/png/3-53264d1a.png",
    MC = "/assets/png/3_a-9cfda764.png",
    TC = "/assets/png/3-5d3eefed.png",
    QC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOLSURBVHgB7Zq/b9NAFMff2Y5EJJDCQmGL6MKARCIxIBZqpJTCQstcCcrKQCUkBqhUVyAGpmZghMIfgJQJonZI2JGaf6AinaBbpDZqqto53nOSqrLP9vlnMuQz1Nb1HN83793du/cCMGXKFD8YJMRiwyj0TLPE++wxKLwInJeAKQW8FgZvYh28b+Ndh3H4BQo065X3TUiI2EIWdtbmBoOHZ2eDln47iYOaClb1x/yHFsQgshBbAId1vJ2DZGiynLZS1402RCC0EHKhY9Nax29/FdKAsc28pm7UdKMT6rEwnRcaRpGfWg0AnAOpwtosp+phrKPIdqw0jBI3rd30RRDc/sIebb8pyT4hZRESoZhoibCTOT4dFfq6zEIQKCQ7d/Kkg4tAOcjNfF2LJvaYRRD2GGgsfp18hdir03hFDOHFwVi88XStgUuZf2CCYAx0r2jA0yIoYgsmjOEGLERokco2rlJg7sIE4mUVoUUUsF7CGJi9dDWwD1plUdTu5VqLkDGvbj6BT3dewN0rN4K6PhWtYC4hFAyi7kw3PhJRuVaGg14H9g7/BXW3jwvORrdF+olFs1KcF/H692c4OA6OFUXu5RLCGdyDjIgiwoa79zbRHMnErSKLIJhyy9kkEMKKkDKxRNjw4MkeZqLP5AvwXX8Ly7O67CMJiLCRESLPRS1vX5ev35cSk5AIISLXkv70vcO/OKAv0DV7gWISFuF6WCCkH+oNMmJSsETb2eAWwpTQaRk/MWm4ExNYRHP14nwfIjAS8/H2c1sMMZO/nM6coASfA5dFMLqsQUSclklrYlOW0t3koKdprTAT3sl5MamIQLcShfHC88iD7bVNvMQK5WmPOUIx3dMeJAkD9rU+/27F2S7cR+K41wiyQtIiCDwrVcXtAoama8KEge7T9Mpxee7saJUNmDQsbcXrX55ChlapwuRQrT/0TtL5xlonOc2ghDKMHdbOdzXDr4evkCam9pml6nGW4/hgZh7HUFvyLzMERr9kzj6MSQxWtPDdS34uNUIqjN+ZN1pDMW3IChLBVZ3eLdUdQrDwE9OoakaFHnQnGUuMCHWwog8+yallSHc1q+a7ajmMCCJ6MRStA6q5xRMqhtJmh382opasY5enKU+scnOVK1iijlKetvg3pkItbs09sR8MEHaWkhJ8mBvjlCBgrHj+BwOM9zucDm4W36fBXzjSWkHL6pQpU5LhP2fY2Y6KcIURAAAAAElFTkSuQmCC",
    VC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAPFBMVEUAAAD/cXL/cHD/cXL/cHL/cHD/cHD/cXL/cHH/cHH/cHD/cXP/cXL/cXL/cHP/cXH/cXL/////uLn/pqe8ZvxDAAAAEHRSTlMA7yDfYBBAr6BwMM+PgL+/Y3n6TAAAAOxJREFUSMfdlFsOgyAUBbnyVtSr7H+vTU2TgodXP+t8z8ghIYrHYsKyBzMoa+WIL8iqqWfP68YZu5/rnzaBuIB0pmT7rWjXxnnusqa+4gF8EiwjwZIEPMT/BjH+FpzHETFo+b0A/bM3CX0MJN4QfVl4GvEtoI9Pw32Dj4I+2yTwmYQ+vG8DM9BnkwSa7gX6LFK221ULvs0Cw3mBPiuRQXmBvhQ5K6cF+HCA0BKeNB4At2igBGBbvktEHIXI4k95oppPl4/MVPFndLFAv7hKdvZj4e6+1aKNktkcD0LzkACfbyUUYH09UZtdtXgqL/qSSDLMHWDYAAAAAElFTkSuQmCC",
    OC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAxhJREFUWEftmF1IU3EYxp//8Thnaoqz1LVQyMGszKCbDCpbQWU3JgQRkQVJ3tRifRn2oSEmYkazm0L7uCihICkprAvroilUF11ooMPImE4Up03dh9vOP87UrYztnGnOXexcnvOe9/md5/04h0MAYEN+dxZLomsAspcQxPPnQnVQiklC0Oayo6yrQ9lHsnf0KWNYrhOALFQQfnRGHS5nHslV974gIAeXGcYjT0FaSO4ug4UQJIQFEMUE2aw20HCAmWOIAAlVI+JQxCF/DsRKCWx24YEOSQ8dPZSEsyUy6D9ZobliCli1JQcq2B2PqsupIIR4QPYf/oGhEZdfqCUF2rolFrpqOaLZGRijyYnC4n643f5NWjIgVZYEjbcViFvBeNQtE26c0Bjxvd+5uJKlp7LIyZbig34K007hpuTV1qSxeNyggCyZ9Yg7HBxKLw7ia5ddaOoR0CFJNMHrJxlIkbF4r5/E+YohcFzgnEkrGTzSKZCxVuIJ5DiKC5VDaP84JQjDBwQESl/N4k1zpjfR81e/UH1nxG9iaQzBvTo5Nq2P9cbc1A3j2UuLKBhBID7gVkUa1Nt9H5F3m0bR9HTsHwGGAeor07Bzmy/2QbMZDY1m0TCigKRSgvt1cuRkzzw1pRTXa4fR+m7iL6Gr2lUoOpDoPdf61oJrtcNBwYgC4oP4vnioUyBzti9cLgpN+SA6vtg8gqXFyTh1LNkrrv88BU25KeB4+yMVPfbzJ8dq5XBSa4RKKQXvztzi+9ZrR4l2AFabuImcDyYaiL9RpZSgsd63W8YtbiTEMYiKml18g04UnzbCPB5g8wkUMSggPhe/fRuq5WBnt+9c/rFxN46fMeLnQODFJ9RUQQPxCQv2xKOqzPd+stk4lJwbQHePQ0hP8PqCgPisR4oSoS1N8XxSXLph8ja4oOL/Ltmf+fhN7ubogqZp0VO22CcXe/+CSyZWINi4CJCQY+HnUNj9bMhVG1oIUChkZSiuU462kJz8HhVDmE5CkBQKUX8aFDA7ppk8z1txo9qwjgFqCMW+5filRwnaOKCsq13Z9xsocCy5C2qrBgAAAABJRU5ErkJggg==",
    PC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA0CAMAAADomgtXAAAAQlBMVEUAAAD5WVn3WFj/UlL3WFj5WVn6WVn5Wlr6WVn6WVn3WFj0Wlr6WVn5WVn5V1f4WVn2WVn5WVn5Wlr5WVn6Wlr5WVnL9j4CAAAAFXRSTlMA3yAQYK/P73+PQDC/n1BwcO/Pz2+CUmD/AAABGElEQVRIx53WS46EMAxF0ec4Ifyhqtr732pL0PBU6kGw7/woCIFjHOlexB4lJYOt1RzJTQdz1p+uN3cDAGQLtAKQCHwpsoXaUGKw4BODAgvmgJuEoIwIQUkIwU4BmAPS+SCdH9KhOqEknIkD0vnhhKvZBTfcLR64IAYl3WyazQHH2/20/g6pxoaL6WINKCnJ/wfVzhqwJoAy0zVgnQBKoWvBCUf6+XozxVow4+w8c+YN0YLyJUfeEO1hNadL1jeOxodT7pXxB/J1dBvyDmOdY64WpevNAfnBYDIPpFRxQcrBf3eIAhjNBTkSJQKtoDcXpLQGDAaJuXd8edhjMENrxAmANXRgZHmMr4+c01k8rK5g+flqveshfgHpnsygP6HYvwAAAABJRU5ErkJggg==",
    FC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMA3yC/EM9AgJ+QcGBQ769vMPd6enwAAAGgSURBVEjHpZfZloMgDIYTwiainbz/y87isTmDEGL972j9zGISAPryteSA/COkPUUPZvlE3IiKM6HxJFs+foCKsKqoI1aVFedfG0+E6yhPCxu09NnAJgXXCRfZKHQKO6d9Awe+ofCf1nOlZ23lmyp6wLo2SVq2IpIZOtlq/kZJFmeboDnHJyymo43NAG9YTJP96yzcmHYmNl0z+1spxc7C0v5GxnjhHbP47S15hh7M3pJrdP0yrpDulGJtCnyfwiu89dVkgm60n9ubVKB9bLzav4Aniifqrz524BBRFlnreeh9GIeyEFaF5XF5dNVYBuwWhAvHSmVRZu7FTTHsuywT5MFe4lAMDwppv3RkFtun4TTs03qJJJ61GCZDPYIfdj74w4NtBPvuMFgObDJbSSIa7cFJ3XK80v/qXP57hBTa45AlefmAXqbtRoPdRXUa9bhI3cUqgGaac5pMcqUOrCeichdenx9o9OOfvv0IjTcDfn58FDp8cPwTfXJkFq1T17cCQ7mss+RAU0UFjc+vRrpcoQuZ7lzqYtrpuA6GXOqA/AYX/qS+Sp7emQAAAABJRU5ErkJggg==",
    xC = "/assets/png/uAmount-41b6d3de.png",
    NC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAAAhCAMAAACvFAaeAAAAzFBMVEUAAABtbW1tbW0zMzMwMDAyMjIyMjItODFqampsbGw1NTVtbW0yMjJsbGxsbGxtbW1tbW0wMDBwcHBtbW1sbGwyMjJra2tsbGxqamoQeDjtcyMQeTgzMzMQeDjqcSUQeTjsdCLrdCLqciMQeDgQeDUQeTkQeTjsdCPscyMQeDgQeTjrdCMzMzMQdzfscyPrdCDncCDvcCAQeTftdSLtdCI0eDQzMzNydy5tbW3sdCMQeTjRdSYdeDYreDU5eDN+di2Ldiy8dSendiredCSq/gfPAAAAOHRSTlMA359AIGBQEDC/MO9wQJBgsDAQz1CAcIAgIO/fj4AwupWAYEAw78+/r6BwcG9YUEAgEO/fz7+fj2tPKssAAAKhSURBVEjHnJNtT8IwFIXP9sUtC4wA2QZEAcGoJL6gJrbVKOj//0/ecZrWwF1MfL40uYXb26dnODA0xiQ4pjCmADKjk2T8n2kAXACTMwR6Uk4RiMUcKE0HKX+StO0WwGaDQF/qJY6opFhxr6tfLcsAwOV0i/kcgVzqGQKx2OOiUnKvAnBjl5i5FfCHPtPOnp6SGw5Q8Eg82+nEuXN4xoexj8iojyh7CRcD4NFa++rc1RmivkrTV0On4gClP/Je+u2dc3cgI03fgHdRGVBfKksfwMIKH87No75C1TeETtIOwDnGAF6ssJMB1//T17T6Ypq3tuX73b+Irq/kXbJUYfA7zdQnfMqLBH09XV93msuY5gX7vcmFV536EurrTHMT03xtBb7IbfhOFX0jAEaFe4WPhQ33nU28vlrVx7OK5JS8ATJ/rwe22/l2yDV9KaNQs61CTPPStnw597Rm+gRFX1A0hg7T7PXtf9gngxUEoSCKjm0igoiUrAcJWUjgpk2Lifr/39KnF+7mjl/gARFE5vLuO/PDeuj6Lqgolpo2p3y3f8gXHKmiYaUpcK7TXB/HLdd3nsYqmNW7p082Bexjw7D3mhpZL09N9+0oWkBBwyQ7ZCVvtzAFTWk2NEyCrMZ7e3Cc1eGCzoYdTcGs9m52exq/l4UkzzmM76i+Cv+8x+dqK0OrYmwiAQzEwAFJu2A2ceDsS7j4+y/t7avhhUAwmn+LkA/Z+8gjLWka1fTsdO1fvrRE9udumnp+T3XUc00th9LxqJGJ0jU+sn7SYZvxbKmPqzhfeizCkiF1fYKOtrbvWynTiaDwSv94CsriVpDlVHVRkR4tDd7d5M5cHxGII1P6FO0AqDaLagtq5bWxMWi923oUguio0fOxSby41zLbVUyaPzg2qSNn/CHUAAAAAElFTkSuQmCC",
    HC = "/assets/png/upiline-0a62bd1b.png",
    YC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIASURBVHgB7ZndbcIwEMfPqOozI9ANOgLdgA1gA+KklfpW960PbZJOAJ2AERiBEWAE1L4hwfXiUHBIQj5IsWn9k4DEOSf/w+c7WwGwWCwWywmwrEZ03SdAcOiwDWawBNYaM/+VH15IOUDig61482DwzHxfqE1XKSOEQfy7uWFhuAADQMfp0AjMSduQToV6rZVhL8PGFPERipZUSLfgwrEO6ObiHbiCmii1AvJy9DmoNQLbWiEgzgptSrkOtQnQQL0Q+qkVybYhaOCfTmKE93Qj+wAN1JrELPQFck7xz/qygRxi4ZvIskVHtIF9zuKT6zsWviygQWpnIRYEUQYqXvSxrwl9d+Lj1YwmO6cF2Rga4lfngMxWgF2liTIWjNC9D6Ahao0AOo+0OlxN45PssEBHqROpi5R2udtrIqQqj4AiviM/dIye10vYcN6ntbsouFVm36pUcuBA/F7IBieyMkubh9tompe8ZaJvHUo7kCNeMQCBrjcCto4mbbWtaNSXe1P5jIqUcqBQ/M4QB4U2+Z27MqTkCJan0IHS4puBnrWeVQmpow6cWbzyYBmOkzIhleuANvE7AdiLQ+q4E/kjoFP8nuhPnFNI5Vb81tHOpoCQW7ntnlg31gHd/EkHlmAuKW1pBzL3u6aQ3ndnv+DgPNzud815wSH33cl3AxaLxWI5mW9aTsutJpZ2NAAAAABJRU5ErkJggg==",
    WC = "/assets/png/uploadImg1-53f2ece8.png",
    JC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHPSURBVHgB7Zi9UsJAFIVPMhbQAaU0zIQXsKBUOn0Frey1MNHGzjijpRoLsfZVsKTgBchMGiyBoWHGgnU3YeVHDbsgmwD7Fcyye5i5J1zuvSyg0Wg0mm3G4AviOKf0rUeXOSRLQONwjaeHNxGxOV4aLpIPnlGij9MTFZvTH0wNwg/SxJqjDSTN2hvYwSJkMkC1ClgWULaivfYHUK8DjQZWAXGuLuirS5e9yTIrbyCfB87PgEJher+4C5wcA0eHwEsN6HbxHxDbzcHs34AQe7SVG5XZ0IB8Cv0W/CTsjGmyWSwLsa9LMPpNENgzR99lVs5ApRIfPIdpDvaxDGHKGJ9NzOlPcgZkgrLKWA4iNNbIGSgWxbX8x71itqwPtHxxbbsNFcgZ8Fvi2vo7VCBngAXV6czXMc2KGtoscgYGA6D2Gm+CnTGNIuQ7MQvw7j7qCays8srUounl+9G3xIwqYrFZiMFSRFGaxKHH6aRJrwECB+HoHE9qDRjeowcy3EN4zfI3qU4hw/OCyAR5njkK+GLxKqQIaoKlkU3sy4Bew9F/ZXRCJcNbfp56A5wwpYAfF166CiXNRhmYW3MVEogKxwaixhEgeXqTVUaj0Wg0mji+AKRSdnQDPUaTAAAAAElFTkSuQmCC",
    KC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK2SURBVHgB7ZjNceJAEIW7Vb7sjRC0GcBpy/iwcgSLTACGCIwjMERgbwTC98UDEZg9AEc7g1UI3LjR2z2WbAzCjH4KRlX6qlQlWzOFnt509/QAVFRUVFScAFRqVifEgO/rcFJoieg8+L/OB5ABh0UoOLkIAWtE1Fdq4UEGHL5csIg1rF3IwBmUGHbPBYQ7vsIkIVO2+C8cAQSoAeINZOCPmrcI14EsSaAER0RE27/owxGQL0pAqYQo9VIDZ3VHBD39KSJKtbQkERCuAnbA3X5WCiEfLlBv3xjrhbzVuZVKcmETBwrgabK4Ho1nARSMmsxvuM69gEGJyO2IiOAMMUQOPBYD7dZFF3KikwBSwAHtmc7J5UgsIv6bxXTyOoOI15xWxQUvcQDBb31tkVnItoj3F8kvxtO1YZcQCS+v/GaPU/Zy+2EmIftExBThzCfYAaRvDd8/n+4bkjpGdAASPRwaF4nJGTO8I6azru//GB8amcoRNVlIRT0oIianM1Mkp2EiQjB25E0E9SElIuZpPK/z0rj0/cby8AxaEuGg7TeNP5hg5EhWERtIUXvWFfoA7PhtWhGCkSNR17bTuUX5/t/nF6HBsTadmxRS2YuE68j9SM17aedZJ4SpIcK9Gi8C3TgZYqMQDRe9Di/b55GadUzGWyskwuWlFpi4Y7sQTezOVycsNgqZQsJeinG1GC4FSZOsa6w4fT864HTlpSGhD5F6xsttZ56VS4s3h+FVq/ldapLpnFyOyA/C5lFGwUhh5bgY7nNnE+uD3dSdUmQtQdyRxopvw6TnpREiSGOlxRA8bj/biRHOCD+5mvbhCBCsa2lDLIrLDsfOlGNHUrEr/08Kdo/FeGA5LGioxQD1+ej3tdSn8bE7ci8x8goWwcUwhAw4SCSHAyGcHGlx4fark5KKioqKCuv4DysHQAcYRy1TAAAAAElFTkSuQmCC",
    XC = "/assets/png/wrong-b3102a79.png",
    jC = "/assets/png/wrong_1-b1d69653.png",
    zC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAAV1BMVEUAAAD+aGj+Z2f9aGj/aGj/aGj7aGj/Z2f+aGj7aGj7Zmb/bGz/aGj/aGj+aGj+aGj////+e3v/s7P/7Oz/4+P+cnL/9fX/xsb/19f/oaH+hIT/vb3+kpKMAtkMAAAAD3RSTlMAgO9g378gr5BAMBDPn3A6LnS1AAAB8klEQVRYw7XY6VrqMBCA4TQ7Sct0oVCQ+7/Ow6niSKdZxe+n4vvECcRUFk4La6SER7JVVjhWmhcdh03cCF9AHCyH/TqXSyiIpA4ZhFOQyOjULBrIqIkauoWsZGQxgkNm/BgyGiioqTaoQo1qhRr1yhEqEpu95TUIf91pCVW1ng7kV2PRUB1+qk09op7GAUoblv40wNrzZFClxm3q+355WYorNa7n/n/wcyldoTE+AFwJ2PUcKiPmy6cxDfAZ9w9ElI30hAbgm9+UjZQY0D0QXjRSagBnzJWPtD/f4GeaidKRooFDsYUjpQZYpnKNqf/qDpsMa/OM+/lpXMn35PY4uo+3wEjRoAh98TjDto9vY4SdNsi66OlKRopGFrK2DGSkaCSREV+OIyUGQWRAma74hYSBu0P34TLgSGMGtORD/PJj85JhgNp521/6vT4gmGUCspQLhBNMQ1xJG+B2D6X5tDGWmMHxsI8ppzmGGDyoqZI28KD2fFeZcg1Yrxc2fghNQ9zoyN9zoqCRuFyosJI2FLlakHNkSRh4tWAKqjP4eFKP6Pde/Jhv6wz5/sswEzXI8a0PCKjUG/VK8/7HN+yY/yApWDAt84wW97b6V2o8i6dNilDur//hgLkuNE+LRDovDCdCJzwrzQmr2nW7pDRWRDbkH+Sn133LN+KJAAAAAElFTkSuQmCC",
    ZC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAANlBMVEUAAABlZWVlZWVlZWVmZmZmZmZlZWVgYGBmZmZkZGRnZ2dmZmZmZmZmZmZkZGRlZWVwcHBmZmbpTDmrAAAAEXRSTlMAXyDvv99wEM9An4CvkFAwEIs/ESUAAALKSURBVGje7VnpztsgEORaMIev93/Z1gkqUhczJriuPinzKwE8w86CzSG++OIxKBmDIdp/Q5NJcVlvJHc26Z1BJ6nuYTf7Kcywhg96byOoEXpTDDGzXNSLbFu9nY0el1DpjxPW8+rVmjGJmPtIcTsfWpQlYn/3p9x532635DCoMwirCz2Ap3eSbA//3PWMpE6b3DvstF32M7zjdT32a9tv6aQu8RNI2uBTbmr0BcY9YZfMq92J/bhnBk4vwA8VZpAsxI8VbNNIjTKFM61bj/MGHLCDE0iAFQOwzSmtjtoghpBaHgSYAAx3mJQaAUiBgU3y5wGIYZiz6aZq0lITiwnU+7MQQk2Z2q7JI6W1EMJJAMvfpbqZF7lnV1kI2lUbU6WUKeBKqs4mk9tCElwVs9ncIQVoLkq7o8JVmhtgxGXzTMWjVMowFS/kky1VhssqgALkz/B89K6lCCnwAg7NErqUFGAFzo+HZMxfU6xQ/oCVYazlGCuUn6h1YDF5cUEB89cdpzyIsALgL9OWWNqduKJQ5ccCx1MCQWJ+zscLsIIUP1VgxCJic3soyY69eYAAHqb81UZsoi33TTTPJloAz+BXBf8gPPuyk8Ova+C4uv+Ds/IiP/DJ5N/Hpz/69u5liwSLpf6FF1/EcdU4sHSEQ9Leu/jlpa46jggu3/noXopDeAOi8QaEGhsQvPWRpBk/r+c8CuzeRkAlgJq0HeWXJQCGxDZXH56HhNZRRhoTCDmAZw5DOKY7jnPogQMpdKTmxo7UmpiBAuSPqJkBCoDf/OuD2e3/Hy2PH45jONN5M+PSfsBwf5pTeifZdV0yf3DFQv7yXZi2/Uk7YBZM37Af2JSNUqfex9wNHcUHUKFc1K2VvpeLugS6jyTyVaP1q3uVqkWWq0Z0F4Yl2tDBD99Ut6577XbPbXj9wpqxj2BdYjL00iEyIUolvvjiKfwCFvRUSxPTUJMAAAAASUVORK5CYII=",
    qC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAJ1BMVEUAAACHh4eIiIiIiIiJiYmIiIiAgICHh4eIiIiJiYmHh4eJiYmIiIjoUgTLAAAADHRSTlMAgF/f778QQJ9wIK++Bi87AAAAuElEQVRIx2MY9IDT5wwYHBHAo2jNGSg4jkdRD0zRUdxquM7AQQFORRxnDkMYMWcCcCqqOXMIysDjKBuYAawwIzEB05kzC+COU8ChiPnMCYQ33VDlVM7gBUZQl+AFR8CKfPCqgXpBGb8iJ5izGM8cxOYTmTOgiB5VNOCKVIwgJF5FNkcgJF5FZ85AyFFFo4qGq6KY0xASr6KkaRByMGXzUUXUUIQdkK6IE7sS1IqfbQ92NUcTGAYrAAB2bpwERfID1wAAAABJRU5ErkJggg==",
    $C = "/assets/png/fail-25bd75e6.png",
    e3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAApCAYAAAC/QpA/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADzSURBVHgB7ZgxCsJAEEUna7BSIaQJBi3ExsorWHoES8E2x/EAlh7DK1jZWSiIFmJjpdGYLQRB/0ACGRaZV+4U+2f481nWi/uzLIwTMrUGSZHejrTbTL7OTRBNRYVY/Hr0+/xd2K5HJEFvuII1Qw6hYhBOifG5YjMYU1Vr/2lku+qX04KfjNTa240O2wkvBuVBFdim1cAIFYNQMQgVg/CpJPv8pXbPY7zQZXmIdgdLWP+PyXSYDsuiBkaoGITmDEJzBqEGRqgYhJvbxP2bSGHSgsFVJV4rjDNUlJ6WGhjBink+riSF9S4r5nyYk4TBbdP2s+gFs9c5CIVd5qYAAAAASUVORK5CYII=",
    t3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAACgAQMAAAAcrC+CAAAAA1BMVEW9vb2OR09dAAAADElEQVQY02MYBRQBAAFAAAFU0ROCAAAAAElFTkSuQmCC",
    s3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAASFBMVEUAAAD/cXH/cHD/bW3/cXH/cHH/cnL/cXH/cXL/cXH/cHD/cXL/cXH/Zmb/cXL/cXH/cXH/cHL/cHD/cXL/cXH/cnL/cXP/cXJK7M4RAAAAF3RSTlMAmT4RfmBMj9+gHr9xCu9WhlAwsGkmz3bbQosAAAJkSURBVGje7VjbkqMgEDU0REC8R/3/P93dQIrMaAkHe988TzOVrj7d9N3qxo0b2SDRKznUj7+oB/fqJ8uovBWqfuxQvwST+mfQvsegiFn9Hs+L+u3wSGC45IT4mB+Cq/7h5eQPr8QF/dHOfqIfnk1quM6wfDS45fBn9fl9KUz9YKNcUhJDW0QQDOzPZHovo4oSKCsP+/JHcv75ATEM5E2jpJxPWTwKfQhAEs/CipbBgSRan2plL/TKDRb+RlN+jYooCofA5jvbgwSvd3vLk63Da+IxlvyyuFXRWwy+xSBNC5yUSPX0BXlKAEGoZboJboLfBMaYWYosyHk2BiAgUc96g7HOUuSQiKbbyjGPSfXbRWhx2hc3BsiTFrqxwID243DH+u3GhumQwPARNKADOAQQYbZM0pwEGnwhHHZHMOZZtq55nWQsKYJmpHczHE1JEOak+i+vrcGrucGqU8KVsG6nULttC00jjea1AwmyHG6FUoKyHhUjsF795ypu/XDiI2i8fvkIkJ6hYSNQccf9vv4dG8EUVqWItwuWjcCfhftvRFwEnd/f9l/S9P8m6LieiMLnqQg/dHmD3NZR/+ALgY1Aen2/Y+w4Cy1GIa71GiRILwlieF/E4T+FtYrTSagpSC1C2PAnnTrQge26RtccjW4tEpzhKzyTDX1Lk4FHZnKMaxWFlcaHvtuS0EZMFdmx7uANfl+W/Nsv8RJQBSxGTAeC5CRQBwTUMRJYhhsTSFJ2F7R3ADgRQIzAocx86o8Mh1o3View5qr6mqpzWNVcqC9JeV+knGlW3QF2az0bN1J148aNI/wB8zExgI2+gwYAAAAASUVORK5CYII=",
    n3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABgCAMAAAA6hOw0AAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAH99A74AQMM9wYKC/kFCvdjCaegAAAgNJREFUaN7t2NtuwjAMgGE751NL3v9pJ2GKJVJoHDUXk/Jf7GJsfGqdhhZYrVar1Wr138JSOzKhWD0ohNqdyjgiVFEjRpARJsrnoKqs7GBGqGM5iIAwKbTqRTiYFWYiCswrEhFhXokIhHml6ecJtiehYV7OSA5CR2v12LQddOQLbWj7yEFE0X6RBiaR4TJHwMDc9ueRw2WPyhkvEVzfIGytw4TpuehirePE8/xe/APS29Jaop8oFHTPMqIdwAcmbhPoPS3QLub4KO4QeGt5wEsAvCJc0j8Ep/F0GSl8C1eEN7XaE4Ffje0FUw3CW2DCnQqFzmkj8EyNAw7Na6dggYlwStBrthX4RWyWkQUWGGbi7OKxnwLPVDWbxQM+BfA/CEtEbASeaTPlT4GJ/H311fQpePq9By4cU24FSPX7lpYPggU+5bFZFglagQkWWsJ4Fpol0CztVoBIf/+bYGE7ve/A3cNXATBp+JILROAh8EybGqEjJhS+BH+ItwlMPIVEQ9jhRgGOTdjUd1b2cSh/nNlkH4dyQrmuh7gEA0TvZ1amIx0lfOctaIEBovvGku/4xISJ/U/TGYRpm7fkoCvbnM9ZjxsTs3zhTMrxFj8rXacTlr+tmFVuvjuaRtQS9STFVllqFxNJyQjjxARuMkKDPMyS4xgcl7Yl9J2kBKvVarVare7sDxc1TU4k51VxAAAAAElFTkSuQmCC",
    a3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAjVBMVEUAAAAklecfj+cllOgdjOsklekhlOkhk+kllekklOgjlOkdkukckegklegklOgjlegXke8klegjlegakugklegklekklegjlegjlegjlekjlegjlOgjkuoek+YklegklOgklekjlOgjlegjlOgjlegilOgklOgjlOgilOgik+kikuchlegklOcllOcllei63wiYAAAALnRSTlMA+CD7CP1LO/TAbhUS5LovBurZDPruy7OOeGtEHBnTyMOem5NlY9+BXVM0JqynvZCvpQAAAVJJREFUSMfd1NlygjAYhuEPCAm7KJUd973tf/+X18EZWxJB4kEP9DkMvMwfweBlsHVk4gmXlGjuMWgSmUWtsPAxKhb5gX7ZUTmJ+2cOguDCvXzlkGru5iUXdSAPmNo04iOU5rNo3OQNgs9nA/PfgunhmcDYiCDqCQzqZW0aJC5pBzMBBC7pBvY6AfyUdAOjBJCkpBs4Z6CdfyQ4rm73CwBxRmPBzK+W16+ft6tbGg0oYuBLm7x2cWdrBLQBwIt2beLQcNC55t3WViSr0bHo/HkrXO3V1xKj47t7TFw/fBaqrx1dJ+mSD8AjRS4FvrTBKAZCNRCQyD/5EZwUS8jquXRq8S91yxwSdWbDVoIMdzJ6IGxwx1/QIKNCj3pGA6wdejXuwPP3GMC2Rt8xU2GYuN+Ia+IR5k3lx+9ijEiK8O/2IoAGdo6cdq/uiUFXs1+XJl7ED5x8v5RPoMlFAAAAAElFTkSuQmCC",
    o3 = "/assets/png/succeed-9e022b4f.png",
    A3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAAPFBMVEUAAACHh4eIiIiIiIiAgICJiYmHh4eIiIiIiIiHh4eJiYmHh4eIiIiJiYmHh4eHh4eIiIiJiYmHh4eIiIhCBwhiAAAAE3RSTlMAIN+AEO9gv5AwcECfr89QsF+gUXEMNQAAAeZJREFUWMPdmM2WqyAQhOnmH9EY6/3f9XI5Z8ZMMqLQrqYW2US/UxTQNqhjkQszM4p48cFF1SvjssWb7OxMB2IK/wmc0yNS9RQfeq6ecryK8AB8os/h1T+mC4joi3F94Js2BmY6y0IfI6pMKhjdZNAChJP0aAO4YeZpwReGTAyb1IH0bqMtEwB9yEjqovQBRQNOXZYrlF8ZUXUo/kJJu4/rXp5vgdvC7VSCJfUqRlDdCljMj0DY9EMMv9ongNSAptfJmJHVkAL8DmQagxiLr23ikdSg9JeVWFMVWsk1kWErocIAGocYWFOXr1cC+bpd1vIrUKphWJAEQrB1bpRIDCqRrDLIVuII0DJIQijpPmSQRxnKgiiDRHDNRSQqEEAJBfw1yC3BsnyKF7XKF5tXYS+w47XNIYsYtR6RvBTEe4qS2mShOKx3FWpjYSSjqW9Latv+5Ztgh62Y7wXvx62kGqjMCjGmPeEwmsj82pNOg1ND9zZ+yixjLSi/N8OpvwZYajfZ53oC6eYDwk55dvnQ7YPQuVJ9Vn58O+TbS731xLCuuReQ6dzGQmcnRE6mgdAW0GeDprVgMjUQPl6+cHD0gU8fFw4txQ1FPOv96iNlBmDD1HUJM39ewmTXv9WjC37h6onn4BoT8g/dkRre1XvbQgAAAABJRU5ErkJggg==",
    i3 = "/assets/png/menu_active-80d05974.png",
    l3 = "/assets/png/10-e1104eb3.png",
    r3 = "/assets/png/10-e1104eb3.png",
    c3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAA/1BMVEUAAAAwq2w9untLxYdIv4dKxIdKxYgzrW06uHdLxIc0sHBKxIZKxYZLxIfn/01JxIZKxYZLw4cxrW1LxIcxrGxLxIYwr2zj/0w1sHEzr2+q5Ffm/0131Xcxrm5AunzI8lHn/0w6s3Uzrm5dy4BEvYDl/0w0r3Do/04wrW0yqm0wrGzl/0xMw4dLxIcyrW3sdCPm/00QeThy03ii4Vk1sHFGv4I6tnZzsG4/unxDvoA/t3gZhUXEiDwreDXQdSZIwYMtnmDgdidVv4FEu31ptXQ6s3M0rm44rW6bnFUUfj0xo2Qpmlqll08fjEy1kEUdeTZ+di1funo6i0lHeDPYfjDu8TB/AAAALXRSTlMAQBCfIN+vgDC/n4Bg759wUO/fz79wICDv7+/v38+/v7+QkI+AgHBvYGBQUECV9b1CAAABnklEQVQ4y72TyVbCMBRACxQoCojK4DzP+l6N0kIBBWQGAaf//xYbaNOkNvUcF95FV/ck9yWN8g9El1+tEEvE46lEWpWrqVTCloARoqZBYDMsICOoa2GxCUFVw9S70P3Fgq2yDS45DhFL2ezOo8dh9lKqHt37uZWp535ztyQt3XsQOZWZahz8rAabuXX4Sez3SzVC3JynVSrQGcvXVbndhw0YTOUN/EQNvTIhNdlfswocuj6rkxYwMlF+e96s6Lo+JyMj+MhivDq01TdCBoHLqsDTsNX2nEwhqDYNYupiWX6wA+/1iamUNuEHM1kB+FIpn/xg5Yhjar5UyvMTmQADL7w79XhxzTowLDxx1IKQ6poGl4orQVf16pgd8Ogz9UxMpeaIN6vI1GRVSP36EM4UmmXEpKNeY41Lbb/XyRiAL0W8cdQIYrnppra7BmmBsL2N5j5UtF0nYtaFgWDWqLmtuOTRxmzS1C5ADzyMHlJWmHqFC0wLRCwqUooKYx+X9M2qZSzHtqpmHx2SikdxA6VQUyAplfMRxY8WCUKLKn/gG5gdtS3TI51LAAAAAElFTkSuQmCC",
    g3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAA/1BMVEUAAAAwq2w9untLxYdIv4dKxIdKxYgzrW06uHdLxIc0sHBKxIZKxYZLxIfn/01JxIZKxYZLw4cxrW1LxIcxrGxLxIYwr2zj/0w1sHEzr2+q5Ffm/0131Xcxrm5AunzI8lHn/0w6s3Uzrm5dy4BEvYDl/0w0r3Do/04wrW0yqm0wrGzl/0xMw4dLxIcyrW3sdCPm/00QeThy03ii4Vk1sHFGv4I6tnZzsG4/unxDvoA/t3gZhUXEiDwreDXQdSZIwYMtnmDgdidVv4FEu31ptXQ6s3M0rm44rW6bnFUUfj0xo2Qpmlqll08fjEy1kEUdeTZ+di1funo6i0lHeDPYfjDu8TB/AAAALXRSTlMAQBCfIN+vgDC/n4Bg759wUO/fz79wICDv7+/v38+/v7+QkI+AgHBvYGBQUECV9b1CAAABnklEQVQ4y72TyVbCMBRACxQoCojK4DzP+l6N0kIBBWQGAaf//xYbaNOkNvUcF95FV/ck9yWN8g9El1+tEEvE46lEWpWrqVTCloARoqZBYDMsICOoa2GxCUFVw9S70P3Fgq2yDS45DhFL2ezOo8dh9lKqHt37uZWp535ztyQt3XsQOZWZahz8rAabuXX4Sez3SzVC3JynVSrQGcvXVbndhw0YTOUN/EQNvTIhNdlfswocuj6rkxYwMlF+e96s6Lo+JyMj+MhivDq01TdCBoHLqsDTsNX2nEwhqDYNYupiWX6wA+/1iamUNuEHM1kB+FIpn/xg5Yhjar5UyvMTmQADL7w79XhxzTowLDxx1IKQ6poGl4orQVf16pgd8Ogz9UxMpeaIN6vI1GRVSP36EM4UmmXEpKNeY41Lbb/XyRiAL0W8cdQIYrnppra7BmmBsL2N5j5UtF0nYtaFgWDWqLmtuOTRxmzS1C5ADzyMHlJWmHqFC0wLRCwqUooKYx+X9M2qZSzHtqpmHx2SikdxA6VQUyAplfMRxY8WCUKLKn/gG5gdtS3TI51LAAAAAElFTkSuQmCC",
    d3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAaVBMVEUAAAAcuKcquqsvu6wxvK0xvK0xvK0vu6wxvK0vu6wxvK0uvK0tuqwxvK0xvK0wu60wvK0uuqssu6svvK0wvK0vu6wxvK0wvK0ruqkxvK0wu6wxvK0wvK0wvK0wu6wxvK0wu60xvK0yvK3BzxomAAAAInRSTlMABQ489en5Rd9V7i4i8tCRhTUWZLRMvqIb15jJXKl2fW7Dg1SZggAAAn9JREFUWMPt2NtyokAUhWGakw3IGUQFI+73f8gZYMpFgrAbZ+cmlf8upfXVkhBbY/3287ODtGoft7ujRNkiDelfSSdI1x7NOp2l3N6nT+lIxv2gr3mRtAtZ2oUs4MrKcMVluPLynbbycgFXTIYrL2cAhGS4fKEj6yLPEXAFNsOVlYuy7LMqJD59yz5Ktfc06i4MW717UKnM31p72Kfl0dBx2hK4q257nl7XcYx3U5pyq3HQYU1O7EHtk+k1xQ7DqpTQzR7k+PXe4TFHP3+OD/xelBTY/MKt8Qhk3oUcMy4rK7jb8gPuLHdVvhJx8tLlNyu46zJcnxA2G7qQHfx9n+z1+9utTV3IMeNCNn8/S87TZrg+rRXnn92aiJc39iJtz12labPLKGu/wt7VsjlcEhnIyrZ4l8L55BMZyFOdT0wlXDsmNu2M1+zOutTMYDKpTbPGI75kDkum7e+Ci52wrpqTu/NSGDzfC9T4hY/YbhZ68HOP+G7G3m6o5F3j58aFhWxt4EZJeFW8nFrzAgN3uIerUfa3fhf24lji3adMiDtE1M3EZTf7AUjIG24+uLzsdwA5+QJ3Lnc+vxfy9l7I9mvZhftFbpZ7z3A3NmMvL+M6OHC3NsPl5QuOZ7RyWLtwWflUYO/LzbW3dHm5DRT2rmwu7hofVDj54AzlhTV0gLuQp2eco/xvkbUr1btbB3duvZeqW9rMb6KdZBEE3UejiS+59mWgGI796Mm/n/FdhV2UGroxXLNUKrwXpcZ75eUQrtjVwF75zaFjvV3GuvJyDFdIxl5ZGa60DFde9uD+V/flv0qFKsO5mxwtsY7X5xmle2VJdi6bVl9Oaa2s3358fwBsLa2JXzKWGgAAAABJRU5ErkJggg==",
    p3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAaVBMVEUAAAAcuKcquqsvu6wxvK0xvK0xvK0vu6wxvK0vu6wxvK0uvK0tuqwxvK0xvK0wu60wvK0uuqssu6svvK0wvK0vu6wxvK0wvK0ruqkxvK0wu6wxvK0wvK0wvK0wu6wxvK0wu60xvK0yvK3BzxomAAAAInRSTlMABQ489en5Rd9V7i4i8tCRhTUWZLRMvqIb15jJXKl2fW7Dg1SZggAAAn9JREFUWMPt2NtyokAUhWGakw3IGUQFI+73f8gZYMpFgrAbZ+cmlf8upfXVkhBbY/3287ODtGoft7ujRNkiDelfSSdI1x7NOp2l3N6nT+lIxv2gr3mRtAtZ2oUs4MrKcMVluPLynbbycgFXTIYrL2cAhGS4fKEj6yLPEXAFNsOVlYuy7LMqJD59yz5Ktfc06i4MW717UKnM31p72Kfl0dBx2hK4q257nl7XcYx3U5pyq3HQYU1O7EHtk+k1xQ7DqpTQzR7k+PXe4TFHP3+OD/xelBTY/MKt8Qhk3oUcMy4rK7jb8gPuLHdVvhJx8tLlNyu46zJcnxA2G7qQHfx9n+z1+9utTV3IMeNCNn8/S87TZrg+rRXnn92aiJc39iJtz12labPLKGu/wt7VsjlcEhnIyrZ4l8L55BMZyFOdT0wlXDsmNu2M1+zOutTMYDKpTbPGI75kDkum7e+Ci52wrpqTu/NSGDzfC9T4hY/YbhZ68HOP+G7G3m6o5F3j58aFhWxt4EZJeFW8nFrzAgN3uIerUfa3fhf24lji3adMiDtE1M3EZTf7AUjIG24+uLzsdwA5+QJ3Lnc+vxfy9l7I9mvZhftFbpZ7z3A3NmMvL+M6OHC3NsPl5QuOZ7RyWLtwWflUYO/LzbW3dHm5DRT2rmwu7hofVDj54AzlhTV0gLuQp2eco/xvkbUr1btbB3duvZeqW9rMb6KdZBEE3UejiS+59mWgGI796Mm/n/FdhV2UGroxXLNUKrwXpcZ75eUQrtjVwF75zaFjvV3GuvJyDFdIxl5ZGa60DFde9uD+V/flv0qFKsO5mxwtsY7X5xmle2VJdi6bVl9Oaa2s3358fwBsLa2JXzKWGgAAAABJRU5ErkJggg==",
    _3 = "/assets/png/6-d6ee4bdd.png",
    u3 = "/assets/png/6-d6ee4bdd.png",
    v3 = "/assets/png/8-99f019b4.png",
    m3 = "/assets/png/8-99f019b4.png",
    h3 = "/assets/png/0-6ae0fe8d.png",
    w3 = "/assets/png/1-c4fc5e42.png",
    b3 = "/assets/png/2-4468ebef.png",
    C3 = "/assets/png/0-6ae0fe8d.png",
    y3 = "/assets/png/1-1ca88291.png",
    f3 = "/assets/png/10-e1104eb3.png",
    B3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAolBMVEUAAABMrpNTsZdTs5hUsZZUspdErotTsZZTsZZRs5hTs5dUspdTs5dOrpJTsZZTrpRUsphTspdTs5hQrJBUspdUs5lSsphVtphUtJlTrpT///9Tr5WLyLdWr5bw+Pbp9fHO6OBsuqR5wKyw2s6SzLtitZ2o1cjF5Nur18qk1MdyvKf6/PyOybn0+vje7+rB4tid0MKExbK839Ves5pmt6DU6+QOjEdiAAAAGXRSTlMADuV27tYG3LomnppNHvj3xKpJG2JdUitZbC/aCQAAAulJREFUWMPtmdtysjAQgOUYBPFUtV0WpKCI9YCHtu//an+dqbaYBgMb5+9Fv0vH+SbubtZk0/rjV/AwNDzH0nsAPd1yPGPoK5BqHc/qIpTAruVNNIrVHg5MhJ8xB0O76WINC6ECZIbWSKsj3AD12mr7iSFIgOypVkDaDoIk6LTlvWMTamCOZMPgIdQCXU1qO/ShNv0HifBa0ACrfdOrQyP0R6JXbG5XxteCxlgVcbb7QKAvrg0PSLjCfYFAAkeCxJlAxPwxgbYDZBy7xfN0FYgklGB1FYwx79UYlHkJJJhdVzNfGQaqEKPBLVgHFWIwNcGCqWK4WrLNQJGYlQtjiKrE2CmJB6BKDINS6kySWJy+DgLH5vk767NqXfp4Dhw4qdXW4rN4inAD75vYqiGO4Absy+t3VYq7PldsRDFfcAaoFIMhmbsoS9LD9CzeHtIkq5a7F7GgxeNqs9zl+XG22M+/xPP9YnbM891ysxJE0KksinSR54swiUShiJLw9I30B7l1EXMtM1sWszS6HeMonRXLDK7QL+Le9aab5q+yyXvdTTdQpncRQ5lkvX6Tr4psHSRQRiwOjpGsOJoFnFgYinAaxIuklJZi/dmD4pI4eYkDPhQVyVt8rDDe7dPsbH/N3pITb+fgY5bud6dviZInLrf37emXF8/H5X4eHtJ09UGaHsL5fnl8Lqanmn4XlJvMBinibcCxjYvTBokEG+TeW1p9E7p321Tf6O//19TyaGLxjWGiUjzhDix0MX/eHKgTD/hDIV3MHwptpkrMbMHBmyo2uKsCQcyljlsyWYyG4DpGFeua4AJJFONYcOWlih1bcEknik3BlGWERLFwAOeCkHD+SSjR1jg04ujmPsMm5lPHY80Gb486xat+BMke7zQ09aWG6C5CPVzZgfqo5mD6/4/SPzrSWEcprT62az9XmBJRaPgSwmgPLGLsTtWTUMduEdAmHuMfsZg70Vp0/I7hfj27uUbHb/3xG/gHZs/3SsgJeQcAAAAASUVORK5CYII=",
    R3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAdVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////li2ZAAAAAJnRSTlMA9bAo2w1AF5u5qB3rXkt5cOaIde7iogfSUhQk18RYwb5+Ms2RaL+uKesAAALCSURBVFjD7ZndcqsgEIAhwRYQxL8k/mtMu+//iKenJ/XUoKJCZnrR79Ih3zgLu5Jd9MuPwA8Sym4RBsDRjdEk8JE9XkArDA/giuaejfUScAEzCB5c9r5sSGAREnp7tEkERqJks7ohsArSbNKWDFbDyvVeKWADqVwbXQoboasi/drBZlp/RXgr2AE5mrzHE+ziZDCXg9et+bWC3ZCFOHstWNDOnw0KVtDZvABL5MzGCbAknc5uBtawyXoGY8hhBZk5GB6BMTFaQfj4NvrJSMCFGBLthSM3YuFpK1yI9Ve+EFdiMv52B+BKDMFoAXcn5qOtE+7EabEcCeAv3xkidxk9pqCTbyprx6Fk4y1FrnIpJmjAxy7F2NdCbCnWD1ziVqzW7R1ORcX463AyOatEuminxhJ/O6sml3kYx2//xXEchx8PG8VvME03iKdW1NcmVzzDj6Eo7k9wdlB5c20xaGSDWCuZJ9WH9fATTTyA67BXJ3ggGsQYxpyLXMCAJh4hGu8MY/AghjEVQgTWiuF0QRmMWRBLvFaM39G8+NHCC+Rfx6v76SzNrj5aCEWkhf9jPSrlGxNfGkHufK3Fgr3JEiF/afOyyeP2WSqL/uVdxecDY11b13XbscM5Tt5f+uKzhF5r0MlMCYIzrmRfekjjUvZ/EwSbEoTCEqkg7feU7khkSOlnFyH3ZfPphd79p+n5H9PcpTjXLizWYv3Cgrg7MdcuhY7EgX6NtRfr11gUuhIn2l8FN2KhlazEjVhN/h2zF588pNG4EEs0AbMXMzRFmdqK0yOaRNqK5Y5GyOF8h5vKmvvWTe2hWXziptmkc3TdHnPf0NPNxE0LUsdvd+yb/9Q2rxmZWjSm3bXSj2gLkqw8DXL7uEKAEaH2TUJMA5bE2z8SSme3zDASMlHklOhDLELzwsnYTdEu+zd2yzqqAh/98hP4A3rJZpZkhABvAAAAAElFTkSuQmCC",
    E3 = "/assets/png/4-a1918e48.png",
    D3 = "/assets/png/4_ns-6c3ac287.png",
    I3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAaVBMVEUAAAAcuKcquqsvu6wxvK0xvK0xvK0vu6wxvK0vu6wxvK0uvK0tuqwxvK0xvK0wu60wvK0uuqssu6svvK0wvK0vu6wxvK0wvK0ruqkxvK0wu6wxvK0wvK0wvK0wu6wxvK0wu60xvK0yvK3BzxomAAAAInRSTlMABQ489en5Rd9V7i4i8tCRhTUWZLRMvqIb15jJXKl2fW7Dg1SZggAAAn9JREFUWMPt2NtyokAUhWGakw3IGUQFI+73f8gZYMpFgrAbZ+cmlf8upfXVkhBbY/3287ODtGoft7ujRNkiDelfSSdI1x7NOp2l3N6nT+lIxv2gr3mRtAtZ2oUs4MrKcMVluPLynbbycgFXTIYrL2cAhGS4fKEj6yLPEXAFNsOVlYuy7LMqJD59yz5Ktfc06i4MW717UKnM31p72Kfl0dBx2hK4q257nl7XcYx3U5pyq3HQYU1O7EHtk+k1xQ7DqpTQzR7k+PXe4TFHP3+OD/xelBTY/MKt8Qhk3oUcMy4rK7jb8gPuLHdVvhJx8tLlNyu46zJcnxA2G7qQHfx9n+z1+9utTV3IMeNCNn8/S87TZrg+rRXnn92aiJc39iJtz12labPLKGu/wt7VsjlcEhnIyrZ4l8L55BMZyFOdT0wlXDsmNu2M1+zOutTMYDKpTbPGI75kDkum7e+Ci52wrpqTu/NSGDzfC9T4hY/YbhZ68HOP+G7G3m6o5F3j58aFhWxt4EZJeFW8nFrzAgN3uIerUfa3fhf24lji3adMiDtE1M3EZTf7AUjIG24+uLzsdwA5+QJ3Lnc+vxfy9l7I9mvZhftFbpZ7z3A3NmMvL+M6OHC3NsPl5QuOZ7RyWLtwWflUYO/LzbW3dHm5DRT2rmwu7hofVDj54AzlhTV0gLuQp2eco/xvkbUr1btbB3duvZeqW9rMb6KdZBEE3UejiS+59mWgGI796Mm/n/FdhV2UGroxXLNUKrwXpcZ75eUQrtjVwF75zaFjvV3GuvJyDFdIxl5ZGa60DFde9uD+V/flv0qFKsO5mxwtsY7X5xmle2VJdi6bVl9Oaa2s3358fwBsLa2JXzKWGgAAAABJRU5ErkJggg==",
    S3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAb1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v0wLRAAAAJHRSTlMA+wsI415vKbulBeq0Sasy21lqY/U/HdJTIY8m8K4UxTiDl3op0NuuAAACV0lEQVRYw+3Y246bMBSFYZtDwDieHICQEpqQZL//M7ZQRtuRyyyY7otqNP9tok9LW5YiRX335Suc2VdE3e2eibquofe0OcnNbTV5WSfkxm/0mk5l3J9MsizlyssF3wHI/76XZXkXy/g9SMu8V14u2AWy0B2wjO+AZcG9WMauvFwAF8jIlZevde3SttEQrfJ76pxaW70FbPvpH5ND94HbXFZZxdkN1X/G9HbW3Ubj87nUQ/3yd6abY6yU2tk5d/j01E4f68Oa93A7jfK8e+ZLATk25Lf/4cmhW2oiJPMdgMz3ZZdleAeWp2uAvSyDvcHm0E3ZZRnsBTLvBTK7SA73YrkwRFAOXSy3RFAO7xBW1a/ueZ7lt4H2jiWR70YJDYHNTWeAO9T6cEm0QFaRwi51Vw/OCcqn9w2aQKl3iYpgiRu/eYcuGQ+mBemmvRtLuMaHJUuu/wucbM2tWnmKimD2MP4WPQhmFHfDc7Ppqxv4LEoPPi52sVxdPTiyC9zslrQFlh/KL8XuJRnuB2U7DuYM3Du4WNZOvRZvsbtA1iWTLKM7YFkfVViUg71AZjeQ/7bZsgtkdoPiPHT5DlBmF1+D74BldvE12MUyu3hzc5nuMCeXVehiOXlG7M7ImenYBcVlOnTexWq6w5wcj0P685BT63KW5stP6pNlRtNH2ed1pRhl2c49c02o7m3j+t0KGJjz7xfLy92NwmEZu1gWd7GMXSxjV1DGLpahKyxjF8vAFZexi2Vpl2Vpl2Vpl2URF/+hUx2UWIeE5+aZEixOt1b/VvePXn335fsFBq7ChhimvN8AAAAASUVORK5CYII=",
    L3 = "/assets/png/6-d6ee4bdd.png",
    G3 = "/assets/png/8-99f019b4.png",
    k3 = "/assets/png/8-99f019b4.png",
    U3 = "/assets/png/6-d6ee4bdd.png",
    M3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAMAAAA45HFkAAAAOVBMVEUAAAD7Wlr9WVn6Wlr7W1v7W1v7Wlr6Wlr/UFD6Wlr4WVn6Wlr6Wlr7Wlr8Wlr6WVn/YGD6Wlr6Wlo+38d5AAAAEnRSTlMAXx/fP79/nxDvL6/Pj0+/EG+ei4LYAAAAu0lEQVQ4y73RWw6EIAxAUShFKuBj2P9ixwdUKoZkEjP3j5xEC1W31iFHqglSDlTd4LZCseBqtUmGL9hk94pE6wsQIDzPiXbcjmagxogHN3C3mDjjpU2pygmDJBLmOsanBQGNMOQxjh+MtX3KQZ/LYKsP1O7P8SfP3rBJ/s+LOeUq9eP9lp3I1LbybYNXGOWb2c57Ysfk/oK01Vw0gjQFlsmry3I6HrKAqowjRE/qp2bdNmczqc383/pzfgG8ISui3RpoqgAAAABJRU5ErkJggg==",
    T3 = "/assets/png/withdrawHistory-4c86d7be.png",
    Q3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAACyAQMAAABSsowSAAAABlBMVEVubm5qamodV9tkAAAAAnRSTlMzKcBKMGQAAAAQSURBVBjTYzjAMApoCw4AAAxzAYH5Z83HAAAAAElFTkSuQmCC",
    V3 = "/assets/json/loading-d743b9cc.json",
    O3 = "data:application/octet-stream;base64,JHJlZENvbG9yOiAjRkEyMzY3OwokcmVkWWVsbG93OiAjRkZDNjAwOwokcmVkQmx1ZTogcmdiYSgxMDcsIDE5NCwgMjUyLCAxKTsKCi8vICRib2RlckNvbG9yUjpyZ2JhKDI1MCwgMzUsIDEwMywgMSk7Ci8vICRib3JkZXJDb2xvclk6cmdiYSgyNTUsIDE5OCwgMCwgMSk7Cgo6ZGVlcCgucmVkKSB7Cgljb2xvcjogJHJlZENvbG9yOwp9Cgo6ZGVlcCgueWVsbG93KSB7Cgljb2xvcjogJHJlZFllbGxvdzsKfQpAbWl4aW4gYmcgewoJLy8gbWFyZ2luLXRvcDogMjBweDsKfQoKQG1peGluIGZjIHsKCWRpc3BsYXk6IGZsZXg7CglmbGV4LWRpcmVjdGlvbjogY29sdW1uOwp9CgpAbWl4aW4gZnIgewoJZGlzcGxheTogZmxleDsKCWZsZXgtZGlyZWN0aW9uOiByb3c7Cn0K",
    P3 = "/assets/scss/_extend-0ce1d7b7.scss",
    F3 = "data:application/octet-stream;base64,LmNvbnRlbnQgewogICAgQGV4dGVuZCAlY29udGVudC1mb3JtYXQ7Cn0K",
    x3 = "/assets/scss/always-b8b636c5.scss",
    N3 = "data:application/octet-stream;base64,QGltcG9ydCAndmFycy5zY3NzJzsKQGltcG9ydCAnYWx3YXlzLnNjc3MnOwpAaW1wb3J0ICdmb250cy5zY3NzJzsKCi8vIEBpbXBvcnQgJ1ZJUC92aXAuc2Nzcyc7CiogewoJYm94LXNpemluZzogYm9yZGVyLWJveDsKCS8vIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgJ0ludGVyJywgc2Fucy1zZXJpZjsKCWZvbnQtZmFtaWx5OiAnYmFobnNjaHJpZnQnOwp9CgojYXBwIHsKCS8vIGJhY2tncm91bmQ6ICNmN2Y4ZmY7CgkvL2NvbG9yOiAjZmZmOwoJYmFja2dyb3VuZDogIzBlMTMxYjsKfQoucG9wdXAgewoJcG9zaXRpb246IGZpeGVkOwoJbWF4LWhlaWdodDogMTAwJTsKCgkmLWNlbnRlciB7CgkJdG9wOiA1MCU7CgkJbGVmdDogMDsKCQlyaWdodDogMDsKCQl3aWR0aDogZml0LWNvbnRlbnQ7CgkJbWFyZ2luOiAwIGF1dG87CgkJdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOwoJCS8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsKCX0KCSYtb3ZlcmxheSB7CgkJcG9zaXRpb246IGZpeGVkOwoJCXRvcDogMDsKCQlsZWZ0OiAwOwoJCXdpZHRoOiAxMDAlOwoJCWhlaWdodDogMTAwJTsKCQliYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC43NSk7Cgl9Cn0KLmRpc2FibGUgewoJcG9pbnRlci1ldmVudHM6IG5vbmU7Cn0=",
    H3 = "data:application/octet-stream;base64,Ly8g6LaK5Y2X56uZ5a2X5L2TCkBmb250LWZhY2UgewoJZm9udC1mYW1pbHk6ICdiYWhuc2NocmlmdCc7Cglmb250LXdlaWdodDogNTAwOwoJc3JjOiB1cmwoJ0AvYXNzZXRzL2ZvbnRzL2JhaG5zY2hyaWZ0LndvZmYyJyk7Cn0KCi8vIOWAkuiuoeaXtuWtl+S9kwpAZm9udC1mYWNlIHsKCWZvbnQtZmFtaWx5OiAnZGlnaXRhbERyZWFtRmF0JzsKCXNyYzogdXJsKCdAL2Fzc2V0cy9mb250cy9kaWdpdGFsRHJlYW1GYXQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpOwp9Cg==",
    Y3 = "/assets/scss/lotteryrecord-32e017fa.scss",
    W3 = "data:application/octet-stream;base64,LnZhbi10b2FzdCB7Cgl3b3JkLWJyZWFrOiBicmVhay13b3JkICFpbXBvcnRhbnQ7Cn0KCi5jZy1kZWZhdWx0IHsKCSYudmFuLWJ1dHRvbiB7CgkJYm94LXNoYWRvdzogMHB4IDRweCAwcHggI2UwNDg0NjsKCQlmb250LXdlaWdodDogNzAwOwoJCWZvbnQtc2l6ZTogMzBweDsKCgkJLnZhbi1idXR0b25fX2ljb24gewoJCQloZWlnaHQ6IDEwMCU7CgkJCWRpc3BsYXk6IGZsZXg7CgkJCWFsaWduLWl0ZW1zOiBjZW50ZXI7CgoJCQkmID4gaW1nIHsKCQkJCWhlaWdodDogODAlOwoJCQl9CgkJfQoJfQp9Cg==",
    J3 = "data:application/octet-stream;base64,LmJhbGFuY2UgewogICAgYmFja2dyb3VuZC1jb2xvcjogcmVkOwp9",
    K3 = "/assets/scss/reset-d0806a7b.scss",
    X3 = "/assets/scss/reset-ad9237ba.scss",
    j3 = "/assets/scss/home-fd7fe99a.scss",
    z3 = "/assets/scss/reset-748a9cad.scss",
    Z3 = "/assets/scss/reset-ad9237ba.scss",
    q3 = "/assets/scss/reset-ad9237ba.scss",
    $3 = "/assets/scss/reset-3f430af5.scss",
    ey = "data:application/octet-stream;base64,LyogZ2FtZUxpc3Qg5qC35byP6YCC6YWNIHN0YXJ0ICovCi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7Ci8vIAkuaG90R2FtZUxpc3RJdGVtX19jb250YWluZXIuaXNNaW5pR2FtZSB7Ci8vIAkJd2lkdGg6IDI1NHB4ICFpbXBvcnRhbnQ7Ci8vIAkJaGVpZ2h0OiAyNTRweCAhaW1wb3J0YW50OwoKLy8gCQlpbWcgewovLyAJCQl3aWR0aDogMjQwcHggIWltcG9ydGFudDsKLy8gCQkJaGVpZ2h0OiAyNDBweCAhaW1wb3J0YW50OwovLyAJCX0KLy8gCX0KCi8vIAkuZ2FtZUxpc3RHcmlkX19jb250YWluZXItd3JhcHBlciB7Ci8vIAkJZ2FwOiAxMHB4IDEwcHggIWltcG9ydGFudDsKLy8gCX0KLy8gfQoKLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHsKLy8gCS5nYW1lTGlzdCAubXlTaWRlQmFyIHsKLy8gCQlmbGV4LWdyb3c6IDA7Ci8vIAl9CgovLyAJLmdhbWVMaXN0R3JpZF9fY29udGFpbmVyIHsKLy8gCQl3aWR0aDogNTczLjg5cHggIWltcG9ydGFudDsKLy8gCX0KCi8qIGdhbWVMaXN0IOagt+W8j+mAgumFjSBlbmQgKi8K",
    ty = "/assets/png/20-be90e252.png",
    sy = "/assets/png/20-be90e252.png",
    ny = "data:application/octet-stream;base64,LmNnLWRhcmsgewoJJi52YW4tY2VsbCB7CgkJd2lkdGg6IGNhbGMoMTAwJSAtIDM2cHgpOwoJCW1pbi1oZWlnaHQ6IDg1cHg7CgkJbWFyZ2luLWxlZnQ6IDE4cHg7CgkJbWFyZ2luLXJpZ2h0OiAxOHB4OwoJCXBhZGRpbmc6IDAgMThweDsKCQliYWNrZ3JvdW5kLWNvbG9yOiAjMTUxYzI2OwoJCWFsaWduLWl0ZW1zOiBjZW50ZXI7CgoJCSY6OmFmdGVyIHsKCQkJYm9yZGVyLWJvdHRvbTogbm9uZTsKCQl9CgoJCSYgKyAudmFuLWNlbGwgewoJCQltYXJnaW4tdG9wOiAxOHB4OwoJCX0KCgkJLnZhbi1jZWxsX190aXRsZSB7CgkJCWZvbnQtc2l6ZTogMjZweDsKCQkJZGlzcGxheTogZmxleDsKCQkJYWxpZ24taXRlbXM6IGNlbnRlcjsKCgkJCSYgPiBzcGFuIHsKCQkJCWZvbnQtc2l6ZTogMjZweDsKCQkJCWxpbmUtaGVpZ2h0OiAzN3B4OwoJCQkJdmVydGljYWwtYWxpZ246IG1pZGRsZTsKCQkJfQoJCX0KCgkJLnZhbi1pY29uIHsKCQkJbGluZS1oZWlnaHQ6IGluaGVyaXQ7CgkJfQoJfQoKCSYudmFuLWZpZWxkIHsKCQloZWlnaHQ6IDg4cHg7CgkJd2lkdGg6IDEwMCU7CgkJbWFyZ2luLWxlZnQ6IDA7CgkJbWFyZ2luLXJpZ2h0OiAwOwoJCWJvcmRlci1yYWRpdXM6IDEycHg7CgkJYmFja2dyb3VuZDogIzBlMTMxYjsKCQlmb250LXNpemU6IDMwcHg7CgoJCTo6cGxhY2Vob2xkZXIgewoJCQljb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTsKCQl9CgoJCSY6OmFmdGVyIHsKCQkJYm9yZGVyLWJvdHRvbTogbm9uZTsKCQl9Cgl9CgoJJi52YW4tYnV0dG9uLS1kYW5nZXIgewoJCWNvbG9yOiAjZmEyMzY3OwoJCWJvcmRlci1jb2xvcjogI2ZhMjM2NzsKCQliYWNrZ3JvdW5kOiBub25lOwoJfQp9Cg==",
    ay = "/assets/scss/vars-7c72e458.scss",
    oy = "/assets/scss/withdraw-e99a911a.scss",
    Ay = "/assets/scss/xoxs-717221ec.scss";
let _s = {};
const iy = e => {
    _s = {
        RechargeState: [{
            key: e("all"),
            value: -1
        }, {
            key: e("titleToBePaid"),
            value: 0
        }, {
            key: e("completed"),
            value: 1
        }, {
            key: e("rechargeState4"),
            value: 2
        }],
        RechargeC2CState: [{
            key: e("payments"),
            value: 0
        }, {
            key: e("c2cState1"),
            value: 1
        }, {
            key: e("c2cState3"),
            value: 3
        }, {
            key: e("timeOut"),
            value: 7
        }, {
            key: e("c2cState4"),
            value: 4
        }, {
            key: e("rechargeState4"),
            value: 5
        }, {
            key: e("cancelled"),
            value: 6
        }],
        WithdrawState: [{
            key: e("withdrawStatem1"),
            value: -1
        }, {
            key: e("withdrawState0"),
            value: 0
        }, {
            key: e("rechargeState2"),
            value: 1
        }, {
            key: e("withdrawState2"),
            value: 2
        }, {
            key: e("withdrawing"),
            value: 3
        }],
        C2cState: [{
            key: e("withdrawStatem1"),
            value: -1
        }, {
            key: e("c2cState0"),
            value: 0
        }, {
            key: e("c2cState1"),
            value: 1
        }, {
            key: e("c2cState2"),
            value: 2
        }, {
            key: e("c2cState3"),
            value: 3
        }, {
            key: e("c2cState4"),
            value: 4
        }, {
            key: e("c2cTip9"),
            value: 5
        }, {
            key: e("c2cState6"),
            value: 6
        }, {
            key: e("c2cState7"),
            value: 7
        }, {
            key: e("c2cState8"),
            value: 8
        }, {
            key: e("c2cState9"),
            value: 9
        }],
        RecharegeStatus: [{
            key: e("rechargeState0"),
            value: 0
        }, {
            key: e("rechargeState1"),
            value: 1
        }, {
            key: e("rechargeState2"),
            value: 2
        }, {
            key: e("rechargeState3"),
            value: 3
        }, {
            key: e("rechargeState4"),
            value: 4
        }],
        RechargeType: [{
            key: e("code9200"),
            value: 1
        }, {
            key: e("code9201"),
            value: 2
        }, {
            key: e("code9206"),
            value: 9
        }, {
            key: "USDT",
            value: 11
        }, {
            key: "KBZ",
            value: 13
        }, {
            key: "Wave",
            value: 14
        }, {
            key: "TRX",
            value: 16
        }],
        transMoneyTypes: [{
            key: e("all"),
            value: 0
        }, {
            key: e("withdrawalReduce"),
            value: 1
        }, {
            key: e("gameTransOut"),
            value: 2
        }, {
            key: e("gameTransIn"),
            value: 3
        }, {
            key: e("betReduce"),
            value: 4
        }, {
            key: e("jackpotIncre"),
            value: 5
        }, {
            key: e("agencyCommis"),
            value: 6
        }, {
            key: e("manualAccess"),
            value: 7
        }],
        usdtMainNetwork: [{
            key: "USDT-TRC20111",
            value: 1
        }, {
            key: "USDT-TRC20222",
            value: 2
        }],
        EWalletType: [{
            key: "MOMO1",
            value: 1
        }, {
            key: "MOMO2",
            value: 2
        }],
        levelTypes: [{
            key: e("all"),
            value: -1
        }, {
            key: e("downlevel", [1]),
            value: 1
        }, {
            key: e("downlevel", [2]),
            value: 2
        }, {
            key: e("downlevel", [3]),
            value: 3
        }, {
            key: e("downlevel", [4]),
            value: 4
        }, {
            key: e("downlevel", [5]),
            value: 5
        }, {
            key: e("downlevel", [6]),
            value: 6
        }],
        bettingResult: [{
            key: e("bettingResultState1"),
            value: 2
        }, {
            key: e("bettingResultState2"),
            value: 1
        }, {
            key: e("bettingResultState3"),
            value: 0
        }],
        bettingOrderStatus: [{
            key: e("unsettled"),
            value: 0
        }, {
            key: e("settled"),
            value: 1
        }, {
            key: e("invalidbet"),
            value: 2
        }],
        WStateCorrelationT: [{
            value: 0,
            key: e("stateTips1")
        }, {
            value: 1,
            key: e("stateTips2")
        }, {
            value: 2,
            key: e("stateTips3")
        }, {
            value: 3,
            key: e("stateTips4")
        }],
        RStateCorrelationT: [{
            key: e("RStateTips1"),
            value: 1
        }, {
            key: e("RStateTips2"),
            value: 2
        }],
        gameSelectType: [{
            key: "0",
            value: "0"
        }, {
            key: "1",
            value: "1"
        }, {
            key: "2",
            value: "2"
        }, {
            key: "3",
            value: "3"
        }, {
            key: "4",
            value: "4"
        }, {
            key: "5",
            value: "5"
        }, {
            key: "6",
            value: "6"
        }, {
            key: "7",
            value: "7"
        }, {
            key: "8",
            value: "8"
        }, {
            key: "9",
            value: "9"
        }, {
            key: "10",
            value: "10"
        }, {
            key: "11",
            value: "11"
        }, {
            key: "12",
            value: "12"
        }, {
            key: "13",
            value: "13"
        }, {
            key: "14",
            value: "14"
        }, {
            key: "15",
            value: "15"
        }, {
            key: "16",
            value: "16"
        }, {
            key: "17",
            value: "17"
        }, {
            key: "18",
            value: "18"
        }, {
            key: e("numbersUnmatch"),
            value: "ABC"
        }, {
            key: e("numbersMatch"),
            value: "AAA"
        }, {
            key: "22",
            value: "22"
        }, {
            key: "33",
            value: "33"
        }, {
            key: "44",
            value: "44"
        }, {
            key: "55",
            value: "55"
        }, {
            key: "66",
            value: "66"
        }, {
            key: "111",
            value: "111"
        }, {
            key: "222",
            value: "222"
        }, {
            key: "333",
            value: "333"
        }, {
            key: "444",
            value: "444"
        }, {
            key: "555",
            value: "555"
        }, {
            key: "666",
            value: "666"
        }, {
            key: e("small"),
            value: "L"
        }, {
            key: e("big"),
            value: "H"
        }, {
            key: e("odd"),
            value: "O"
        }, {
            key: e("k3Even"),
            value: "E"
        }, {
            key: e("GTBig"),
            value: "big"
        }, {
            key: e("GTSmall"),
            value: "small"
        }, {
            key: e("GTRed"),
            value: "red"
        }, {
            key: e("GTGreen"),
            value: "green"
        }, {
            key: e("GTPurple"),
            value: "violet"
        }, {
            key: "O",
            value: e("GTOdd")
        }, {
            key: "E",
            value: e("GTEven")
        }, {
            key: "L",
            value: e("GTSmall")
        }, {
            key: "H",
            value: e("GTBig")
        }],
        gameAllName: [{
            key: e("sabaSport"),
            value: 14
        }, {
            key: e("cmdSport"),
            value: 8
        }, {
            key: e("agSport"),
            value: 13
        }, {
            key: e("imSport"),
            value: 15
        }, {
            key: e("dgLive"),
            value: 7
        }, {
            key: e("agLive"),
            value: 10
        }, {
            key: e("evoLive"),
            value: 16
        }, {
            key: e("chess365"),
            value: 19
        }, {
            key: e("chessv8"),
            value: 21
        }, {
            key: e("sexyLive"),
            value: 27
        }, {
            key: e("wmLive"),
            value: 26
        }, {
            key: e("wicketsSport"),
            value: 25
        }],
        languageCodes: [{
            value: "en",
            key: 0
        }, {
            value: "id",
            key: 1
        }, {
            value: "vi",
            key: 2
        }, {
            value: "bra",
            key: 3
        }, {
            value: "tha",
            key: 4
        }, {
            value: "th",
            key: 4
        }, {
            value: "zh",
            key: 5
        }, {
            value: "zh-CN",
            key: 5
        }, {
            value: "tw",
            key: 6
        }, {
            value: "md",
            key: 7
        }, {
            value: "bd",
            key: 8
        }, {
            value: "hd",
            key: 9
        }, {
            value: "my",
            key: 10
        }, {
            value: "pk",
            key: 11
        }, {
            value: "ar",
            key: 12
        }],
        StatusType: [{
            key: e("enableStatus"),
            value: 1
        }, {
            key: e("disabledStatus"),
            value: 0
        }],
        RegionType: [{
            key: e("north"),
            value: "北部"
        }, {
            key: e("central"),
            value: "中央"
        }, {
            key: e("south"),
            value: "南部"
        }],
        gameType: [{
            key: e("lotteryType1"),
            value: 1
        }, {
            key: e("lotteryType2"),
            value: 2
        }, {
            key: e("lotteryType3"),
            value: 3
        }, {
            key: e("lotteryType4"),
            value: 4
        }, {
            key: e("lotteryType5"),
            value: 5
        }],
        gameTabList: [{
            name: e("all"),
            img: "all",
            codeType: -1
        }, {
            name: e("lottery"),
            img: "lottery",
            codeType: 3
        }, {
            name: e("live"),
            img: "video",
            codeType: 1
        }, {
            name: e("chess"),
            img: "chess",
            codeType: 4
        }, {
            name: e("electric"),
            img: "slot",
            codeType: 0
        }],
        VipType: [{
            key: e("receiveSuccess"),
            value: 1
        }, {
            key: e("receiveSuccess"),
            value: 2
        }, {
            key: e("vipcondition"),
            value: 3
        }, {
            key: e("vipcondition"),
            value: 4
        }, {
            key: e("vipTip8"),
            value: 5
        }, {
            key: e("vipTip9"),
            value: 6
        }, {
            key: e("vipTip16"),
            value: 7
        }, {
            key: e("vipTip16"),
            value: 8
        }]
    }
};
let ly = localStorage.getItem("language") || "en",
    ry = D({
        en: Bn,
        rus: Rn,
        vi: En,
        id: Dn,
        hd: In,
        th: Zt,
        tha: Zt,
        md: Sn,
        bra: Ln,
        my: Gn,
        bd: kn,
        zh: Un,
        pk: Mn,
        ar: Tn
    });
const Ge = zs({
    legacy: !1,
    locale: ly,
    fallbackLocale: "en",
    globalInjection: !0,
    warnHtmlMessage: !1,
    messages: ry.value,
    silentTranslationWarn: !0,
    datetimeFormats: {
        zh: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            },
            long: {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long"
            }
        },
        en: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        rus: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        vi: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        my: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        id: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        hd: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        th: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        md: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        bra: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        bd: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        pk: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        ar: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        }
    }
});
iy(Ge.global.t);
const DL = async e => {
        const s = e || hs();
        Cy(s), fn(s)
    },
    qt = e => typeof e == "function",
    cy = e => e !== null && typeof e == "object",
    IL = e => cy(e) && qt(e.then) && qt(e.catch),
    SL = e => e != null,
    LL = () => {},
    gy = e => e.stopPropagation();

function GL(e, s) {
    (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), s && gy(e)
}

function kL(e) {
    const s = {};
    return e !== void 0 && (s.zIndex = +e), s
}
const us = typeof window < "u",
    Vt = navigator.userAgent.toLowerCase(),
    vs = us && /ios|iphone|ipad|ipod/.test(Vt),
    UL = us && /android|adr/.test(Vt),
    dy = !!window.webkit,
    py = !!window.android,
    ML = dy || py,
    _y = /mobi|android|iphone/.test(Vt),
    ms = !_y,
    uy = Ge.global.t;

function vy(e) {
    return e.then(s => [null, s]).catch(s => [s, null])
}
const TL = () => (navigator.language ? navigator.language : navigator.browserLanguage).toLowerCase().slice(0, 2),
    QL = (e, s) => e == "zh-CN" || e == "zh" ? s.includes(e) ? "zh-CN" : "en" : e == "bn" ? s.includes("bdt") ? "bdt" : "en" : e == "pt-br" ? s.includes("bra") ? "bra" : "en" : s.toLowerCase().includes(e.split("-")[0]) ? e.split("-")[0] : "en",
    VL = (e, s, n = !0) => {
        let o = null;
        return function(...A) {
            o || (o = setTimeout(() => {
                !n && e.apply(this, arguments), o = null
            }, s), n && e.apply(this, A))
        }
    },
    OL = e => {
        if (!e) return;
        const s = document.createElement("input");
        s.setAttribute("readonly", "readonly"), s.setAttribute("value", e.toLocaleString()), document.body.appendChild(s), s.select(), document.execCommand("Copy"), document.body.removeChild(s), qs.showSuccessToast(uy("copySuccess"))
    },
    z = (e, s, n = "png", o = "icons") => new URL(Object.assign({
        "../assets/audio/di1.mp3": Qn,
        "../assets/audio/di2.mp3": Vn,
        "../assets/fonts/bahnschrift.woff2": On,
        "../assets/fonts/digitalDreamFat.ttf": Pn,
        "../assets/homeImg/blueHome/electronic_bg.png": Fn,
        "../assets/homeImg/blueHome/fish_bg.png": xn,
        "../assets/homeImg/blueHome/game_mini_bg.png": Nn,
        "../assets/homeImg/blueHome/hot_bg.png": Hn,
        "../assets/homeImg/blueHome/lottery_bg.png": Yn,
        "../assets/homeImg/blueHome/third_bg.png": Wn,
        "../assets/homeImg/damanHome/chess.png": Jn,
        "../assets/homeImg/damanHome/chess_icon.png": Kn,
        "../assets/homeImg/damanHome/fish.png": Xn,
        "../assets/homeImg/damanHome/fish_icon.png": jn,
        "../assets/homeImg/damanHome/flash.png": zn,
        "../assets/homeImg/damanHome/flash_icon.png": Zn,
        "../assets/homeImg/damanHome/lottery.png": qn,
        "../assets/homeImg/damanHome/lottery_icon.png": $n,
        "../assets/homeImg/damanHome/popular.png": ea,
        "../assets/homeImg/damanHome/popular_icon.png": ta,
        "../assets/homeImg/damanHome/slot.png": sa,
        "../assets/homeImg/damanHome/slot_icon.png": na,
        "../assets/homeImg/damanHome/sport.png": aa,
        "../assets/homeImg/damanHome/sport_icon.png": oa,
        "../assets/homeImg/damanHome/video.png": Aa,
        "../assets/homeImg/damanHome/video_icon.png": ia,
        "../assets/homeImg/electronic/customerIcon.svg": la,
        "../assets/homeImg/electronic/down.svg": ra,
        "../assets/homeImg/whiteGoldHome/message.png": ca,
        "../assets/icons/activity/Championship/1.png": ga,
        "../assets/icons/activity/Championship/2.png": da,
        "../assets/icons/activity/Championship/3.png": pa,
        "../assets/icons/activity/Championship/game.png": _a,
        "../assets/icons/activity/DailySignIn/SignInTop.png": ua,
        "../assets/icons/activity/DailySignIn/Signed.png": va,
        "../assets/icons/activity/DailySignIn/Unsigned.png": ma,
        "../assets/icons/activity/DailySignIn/coin.png": ha,
        "../assets/icons/activity/DailySignIn/coin_w.png": wa,
        "../assets/icons/activity/DailySignIn/day7Bg.png": ba,
        "../assets/icons/activity/DailySignIn/day7BgActive.png": Ca,
        "../assets/icons/activity/DailySignIn/gold.png": ya,
        "../assets/icons/activity/DailySignIn/hd_qd_gou@2x.png": fa,
        "../assets/icons/activity/DailySignIn/headerBg.png": Ba,
        "../assets/icons/activity/DailySignIn/headerBg1.png": Ra,
        "../assets/icons/activity/DailyTask/DailyCheckInBanner.png": Ea,
        "../assets/icons/activity/DailyTask/DailyTaskBanner.png": Da,
        "../assets/icons/activity/DailyTask/DailyTaskHero.png": Ia,
        "../assets/icons/activity/DailyTask/activityIcon1.png": Sa,
        "../assets/icons/activity/DailyTask/activityIcon2.png": La,
        "../assets/icons/activity/DailyTask/activityIcon3.png": Ga,
        "../assets/icons/activity/DailyTask/activityIcon4.png": ka,
        "../assets/icons/activity/DailyTask/activityIcon5.png": Ua,
        "../assets/icons/activity/DailyTask/amountIcon.png": Ma,
        "../assets/icons/activity/DailyTask/awardImg.png": Ta,
        "../assets/icons/activity/DailyTask/awardRecord.png": Qa,
        "../assets/icons/activity/DailyTask/close.png": Va,
        "../assets/icons/activity/DailyTask/confirmationReceived.png": Oa,
        "../assets/icons/activity/DailyTask/dualArrow.png": Pa,
        "../assets/icons/activity/DailyTask/friends.png": Fa,
        "../assets/icons/activity/DailyTask/giftRedeem.png": xa,
        "../assets/icons/activity/DailyTask/new.png": Na,
        "../assets/icons/activity/DailyTask/present.png": Ha,
        "../assets/icons/activity/DailyTask/recordIcon.png": Ya,
        "../assets/icons/activity/DailyTask/signInBanner.png": Wa,
        "../assets/icons/activity/DailyTask/taskIcon1.png": Ja,
        "../assets/icons/activity/DailyTask/taskIcon2.png": Ka,
        "../assets/icons/activity/DailyTask/taskIcon3.png": Xa,
        "../assets/icons/activity/DailyTask/taskIcon4.png": ja,
        "../assets/icons/activity/DailyTask/taskIcon5.png": za,
        "../assets/icons/activity/DailyTask/taskbg.png": Za,
        "../assets/icons/activity/DailyTask/weeklyType1.svg": qa,
        "../assets/icons/activity/DailyTask/weeklyType10.svg": $a,
        "../assets/icons/activity/DailyTask/weeklyType11.svg": eo,
        "../assets/icons/activity/DailyTask/weeklyType12.svg": to,
        "../assets/icons/activity/DailyTask/weeklyType2.svg": so,
        "../assets/icons/activity/DailyTask/weeklyType3.svg": no,
        "../assets/icons/activity/DailyTask/weeklyType4.svg": ao,
        "../assets/icons/activity/DailyTask/weeklyType5.svg": oo,
        "../assets/icons/activity/DailyTask/weeklyType6.svg": Ao,
        "../assets/icons/activity/DailyTask/weeklyType7.svg": io,
        "../assets/icons/activity/DailyTask/weeklyType8.svg": lo,
        "../assets/icons/activity/DailyTask/weeklyType9.svg": ro,
        "../assets/icons/activity/MemberPackage/bg.png": co,
        "../assets/icons/activity/MemberPackage/box.png": go,
        "../assets/icons/activity/MemberPackage/cardbg.png": po,
        "../assets/icons/activity/MemberPackage/head.png": _o,
        "../assets/icons/activity/MemberPackage/rule.svg": uo,
        "../assets/icons/activity/PointMall/addAddress.png": vo,
        "../assets/icons/activity/PointMall/claimRuleBg.png": mo,
        "../assets/icons/activity/PointMall/diamond.png": ho,
        "../assets/icons/activity/PointMall/editDefault.png": wo,
        "../assets/icons/activity/PointMall/forbhidden.png": bo,
        "../assets/icons/activity/PointMall/header-bg.png": Co,
        "../assets/icons/activity/PointMall/headerBodyBg.png": yo,
        "../assets/icons/activity/PointMall/icon_jfgz@2x.png": fo,
        "../assets/icons/activity/PointMall/icon_jfjl@2x.png": Bo,
        "../assets/icons/activity/PointMall/icon_tip.png": Ro,
        "../assets/icons/activity/PointMall/jfgz.png": Eo,
        "../assets/icons/activity/PointMall/luckyNumber.png": Do,
        "../assets/icons/activity/PointMall/notice.png": Io,
        "../assets/icons/activity/PointMall/orderCancelSuccess.png": So,
        "../assets/icons/activity/PointMall/orderCancelWarn.png": Lo,
        "../assets/icons/activity/PointMall/p_bg.png": Go,
        "../assets/icons/activity/PointMall/pointsIcon.png": ko,
        "../assets/icons/activity/PointMall/recycleBin.png": Uo,
        "../assets/icons/activity/PointMall/redDiamondSm.png": Mo,
        "../assets/icons/activity/PointMall/statusBg.png": To,
        "../assets/icons/activity/PointMall/successfullyParticipatedBg.png": Qo,
        "../assets/icons/activity/PointMall/successfullyParticipatedBottom.png": Vo,
        "../assets/icons/activity/PointMall/successfullyReceived.png": Oo,
        "../assets/icons/activity/PointMall/ticket.png": Po,
        "../assets/icons/activity/PointMall/warning.png": Fo,
        "../assets/icons/activity/Turntable/bg.png": xo,
        "../assets/icons/activity/Turntable/btn.png": No,
        "../assets/icons/activity/Turntable/money.png": Ho,
        "../assets/icons/activity/Turntable/turntable.png": Yo,
        "../assets/icons/activity/Turntable/zp.png": Wo,
        "../assets/icons/activity/active.svg": Jo,
        "../assets/icons/activity/active_b.svg": Ko,
        "../assets/icons/activity/scck_head.png": Xo,
        "../assets/icons/activity/scck_head.svg": jo,
        "../assets/icons/activity/supportService.png": zo,
        "../assets/icons/common/ar_wallet.png": Zo,
        "../assets/icons/common/close.png": qo,
        "../assets/icons/common/closeGrey.png": $o,
        "../assets/icons/common/downloadApp/91club.png": eA,
        "../assets/icons/common/downloadApp/development.png": tA,
        "../assets/icons/common/downloadApp/development@192.png": sA,
        "../assets/icons/common/downloadApp/development@512.png": nA,
        "../assets/icons/common/downloadApp/downloadPWA92lottery.png": aA,
        "../assets/icons/common/downloadApp/downloadPWAmzplay.png": oA,
        "../assets/icons/common/downloadApp/downloadPWAvn168.png": AA,
        "../assets/icons/common/downloadApp/downloadPWAvxth.png": iA,
        "../assets/icons/common/downloadApp/sit.png": lA,
        "../assets/icons/common/downloadApp/sit@192.png": rA,
        "../assets/icons/common/downloadApp/sit@512.png": cA,
        "../assets/icons/common/downloadPWAar006.png": gA,
        "../assets/icons/common/downloadPWAar018.png": dA,
        "../assets/icons/common/downloadPWAbharatclub.png": pA,
        "../assets/icons/common/downloadPWAdream99.png": _A,
        "../assets/icons/common/downloadPWAlottery7.png": uA,
        "../assets/icons/common/downloadPWAsit.png": vA,
        "../assets/icons/common/downloadPWAvxth.png": mA,
        "../assets/icons/common/downloadPWAyjlottery.png": hA,
        "../assets/icons/common/missingviebg.png": wA,
        "../assets/icons/common/missningLBg.png": bA,
        "../assets/icons/common/newmissingbg.png": CA,
        "../assets/icons/common/newmissingviebg.png": yA,
        "../assets/icons/common/pwa_close.png": fA,
        "../assets/icons/common/rulehead.svg": BA,
        "../assets/icons/common/search.png": RA,
        "../assets/icons/common/success.png": EA,
        "../assets/icons/common/successfullyReceived.png": DA,
        "../assets/icons/common/switch.png": IA,
        "../assets/icons/common/upload_add.png": SA,
        "../assets/icons/common/upload_icon.png": LA,
        "../assets/icons/common/vector.png": GA,
        "../assets/icons/common/warn.png": kA,
        "../assets/icons/electronic/all.png": UA,
        "../assets/icons/electronic/bigaward.png": MA,
        "../assets/icons/electronic/chess.png": TA,
        "../assets/icons/electronic/clicksTopList.png": QA,
        "../assets/icons/electronic/fish.png": VA,
        "../assets/icons/electronic/flash.png": OA,
        "../assets/icons/electronic/lottery.png": PA,
        "../assets/icons/electronic/no1.png": FA,
        "../assets/icons/electronic/no2.png": xA,
        "../assets/icons/electronic/no3.png": NA,
        "../assets/icons/electronic/platformList.png": HA,
        "../assets/icons/electronic/profit.png": YA,
        "../assets/icons/electronic/slot.png": WA,
        "../assets/icons/electronic/sport.png": JA,
        "../assets/icons/electronic/video.png": KA,
        "../assets/icons/electronic/winning.png": XA,
        "../assets/icons/home/AllGames/tab.png": jA,
        "../assets/icons/home/AllGames/tabActive.png": zA,
        "../assets/icons/home/AllGames/winner/BetSoft.png": ZA,
        "../assets/icons/home/AllGames/winner/EVO_Electronic.png": qA,
        "../assets/icons/home/AllGames/winner/EVO_Play.png": $A,
        "../assets/icons/home/AllGames/winner/Hacksaw.png": ei,
        "../assets/icons/home/AllGames/winner/JOKER.png": ti,
        "../assets/icons/home/AllGames/winner/PP.png": si,
        "../assets/icons/home/AllGames/winner/SEXY_Video.png": ni,
        "../assets/icons/home/AllGames/winner/SaBa.png": ai,
        "../assets/icons/home/AllGames/winner/WM_Video.png": oi,
        "../assets/icons/home/AllGames/winner/Wickets9.png": Ai,
        "../assets/icons/home/AllGames/winner/YGG.png": ii,
        "../assets/icons/home/AllLotteryGames/4D/arr-left.svg": li,
        "../assets/icons/home/AllLotteryGames/4D/arr-right.svg": ri,
        "../assets/icons/home/AllLotteryGames/4D/fail.png": ci,
        "../assets/icons/home/AllLotteryGames/4D/howpay.png": gi,
        "../assets/icons/home/AllLotteryGames/4D/oddBg.png": di,
        "../assets/icons/home/AllLotteryGames/4D/odds.png": pi,
        "../assets/icons/home/AllLotteryGames/4D/success.png": _i,
        "../assets/icons/home/AllLotteryGames/5d/kj_di.png": ui,
        "../assets/icons/home/AllLotteryGames/5d/tz_di_g.png": vi,
        "../assets/icons/home/AllLotteryGames/5d/tz_di_l.png": mi,
        "../assets/icons/home/AllLotteryGames/K3/greenBall.png": hi,
        "../assets/icons/home/AllLotteryGames/K3/kj_di.png": wi,
        "../assets/icons/home/AllLotteryGames/K3/missningBg.png": bi,
        "../assets/icons/home/AllLotteryGames/K3/n1.png": Ci,
        "../assets/icons/home/AllLotteryGames/K3/n2.png": yi,
        "../assets/icons/home/AllLotteryGames/K3/n3.png": fi,
        "../assets/icons/home/AllLotteryGames/K3/n4.png": Bi,
        "../assets/icons/home/AllLotteryGames/K3/n5.png": Ri,
        "../assets/icons/home/AllLotteryGames/K3/n6.png": Ei,
        "../assets/icons/home/AllLotteryGames/K3/n7.png": Di,
        "../assets/icons/home/AllLotteryGames/K3/num1.png": Ii,
        "../assets/icons/home/AllLotteryGames/K3/num2.png": Si,
        "../assets/icons/home/AllLotteryGames/K3/num3.png": Li,
        "../assets/icons/home/AllLotteryGames/K3/num4.png": Gi,
        "../assets/icons/home/AllLotteryGames/K3/num5.png": ki,
        "../assets/icons/home/AllLotteryGames/K3/num6.png": Ui,
        "../assets/icons/home/AllLotteryGames/K3/redBall.png": Mi,
        "../assets/icons/home/AllLotteryGames/NewVietnam/Star.png": Ti,
        "../assets/icons/home/AllLotteryGames/NewVietnam/Triangle.png": Qi,
        "../assets/icons/home/AllLotteryGames/NewVietnam/WalletBg.png": Vi,
        "../assets/icons/home/AllLotteryGames/NewVietnam/arrowbottom.png": Oi,
        "../assets/icons/home/AllLotteryGames/NewVietnam/bg1.png": Pi,
        "../assets/icons/home/AllLotteryGames/NewVietnam/bg2.png": Fi,
        "../assets/icons/home/AllLotteryGames/NewVietnam/bg3.png": xi,
        "../assets/icons/home/AllLotteryGames/NewVietnam/bg4.png": Ni,
        "../assets/icons/home/AllLotteryGames/NewVietnam/bg5.png": Hi,
        "../assets/icons/home/AllLotteryGames/NewVietnam/close.png": Yi,
        "../assets/icons/home/AllLotteryGames/NewVietnam/copy.png": Wi,
        "../assets/icons/home/AllLotteryGames/NewVietnam/detail.png": Ji,
        "../assets/icons/home/AllLotteryGames/NewVietnam/fail.png": Ki,
        "../assets/icons/home/AllLotteryGames/NewVietnam/left-border.png": Xi,
        "../assets/icons/home/AllLotteryGames/NewVietnam/left.png": ji,
        "../assets/icons/home/AllLotteryGames/NewVietnam/middle.png": zi,
        "../assets/icons/home/AllLotteryGames/NewVietnam/notwinning.png": Zi,
        "../assets/icons/home/AllLotteryGames/NewVietnam/palybg.png": qi,
        "../assets/icons/home/AllLotteryGames/NewVietnam/right-border.png": $i,
        "../assets/icons/home/AllLotteryGames/NewVietnam/right.png": el,
        "../assets/icons/home/AllLotteryGames/NewVietnam/success.png": tl,
        "../assets/icons/home/AllLotteryGames/NewVietnam/ticketstar.png": sl,
        "../assets/icons/home/AllLotteryGames/NewVietnam/tip.png": nl,
        "../assets/icons/home/AllLotteryGames/NewVietnam/wallet.png": al,
        "../assets/icons/home/AllLotteryGames/NewVietnam/warning2.png": ol,
        "../assets/icons/home/AllLotteryGames/NewVietnam/xosoCity.png": Al,
        "../assets/icons/home/AllLotteryGames/WinGo/00.png": il,
        "../assets/icons/home/AllLotteryGames/WinGo/01.png": ll,
        "../assets/icons/home/AllLotteryGames/WinGo/02.png": rl,
        "../assets/icons/home/AllLotteryGames/WinGo/03.png": cl,
        "../assets/icons/home/AllLotteryGames/WinGo/04.png": gl,
        "../assets/icons/home/AllLotteryGames/WinGo/05.png": dl,
        "../assets/icons/home/AllLotteryGames/WinGo/06.png": pl,
        "../assets/icons/home/AllLotteryGames/WinGo/07.png": _l,
        "../assets/icons/home/AllLotteryGames/WinGo/08.png": ul,
        "../assets/icons/home/AllLotteryGames/WinGo/09.png": vl,
        "../assets/icons/home/AllLotteryGames/WinGo/PreSaleBg.png": ml,
        "../assets/icons/home/AllLotteryGames/WinGo/bcakIcon.png": hl,
        "../assets/icons/home/AllLotteryGames/WinGo/close.png": wl,
        "../assets/icons/home/AllLotteryGames/WinGo/copy.png": bl,
        "../assets/icons/home/AllLotteryGames/WinGo/diban.png": Cl,
        "../assets/icons/home/AllLotteryGames/WinGo/icon_sel_b@2x.png": yl,
        "../assets/icons/home/AllLotteryGames/WinGo/icon_sm.png": fl,
        "../assets/icons/home/AllLotteryGames/WinGo/icon_ss.png": Bl,
        "../assets/icons/home/AllLotteryGames/WinGo/kefu.png": Rl,
        "../assets/icons/home/AllLotteryGames/WinGo/missningBg.png": El,
        "../assets/icons/home/AllLotteryGames/WinGo/missningLBg.png": Dl,
        "../assets/icons/home/AllLotteryGames/WinGo/moreBtn.jpg": Il,
        "../assets/icons/home/AllLotteryGames/WinGo/n0.png": Sl,
        "../assets/icons/home/AllLotteryGames/WinGo/n1.png": Ll,
        "../assets/icons/home/AllLotteryGames/WinGo/n2.png": Gl,
        "../assets/icons/home/AllLotteryGames/WinGo/n3.png": kl,
        "../assets/icons/home/AllLotteryGames/WinGo/n4.png": Ul,
        "../assets/icons/home/AllLotteryGames/WinGo/n5.png": Ml,
        "../assets/icons/home/AllLotteryGames/WinGo/n6.png": Tl,
        "../assets/icons/home/AllLotteryGames/WinGo/n7.png": Ql,
        "../assets/icons/home/AllLotteryGames/WinGo/n8.png": Vl,
        "../assets/icons/home/AllLotteryGames/WinGo/n9.png": Ol,
        "../assets/icons/home/AllLotteryGames/WinGo/refireshIcon.png": Pl,
        "../assets/icons/home/AllLotteryGames/WinGo/rule.png": Fl,
        "../assets/icons/home/AllLotteryGames/WinGo/vector.png": xl,
        "../assets/icons/home/AllLotteryGames/WinGo/voice-off.png": Nl,
        "../assets/icons/home/AllLotteryGames/WinGo/voice.png": Hl,
        "../assets/icons/home/AllLotteryGames/WinTrx/icon-question.png": Yl,
        "../assets/icons/home/AllLotteryGames/WinTrx/num0.png": Wl,
        "../assets/icons/home/AllLotteryGames/WinTrx/num1.png": Jl,
        "../assets/icons/home/AllLotteryGames/WinTrx/num2.png": Kl,
        "../assets/icons/home/AllLotteryGames/WinTrx/num3.png": Xl,
        "../assets/icons/home/AllLotteryGames/WinTrx/num4.png": jl,
        "../assets/icons/home/AllLotteryGames/WinTrx/num5.png": zl,
        "../assets/icons/home/AllLotteryGames/WinTrx/num6.png": Zl,
        "../assets/icons/home/AllLotteryGames/WinTrx/num7.png": ql,
        "../assets/icons/home/AllLotteryGames/WinTrx/num8.png": $l,
        "../assets/icons/home/AllLotteryGames/WinTrx/num9.png": er,
        "../assets/icons/home/AllLotteryGames/WinTrx/numA.png": tr,
        "../assets/icons/home/AllLotteryGames/WinTrx/numB.png": sr,
        "../assets/icons/home/AllLotteryGames/WinTrx/numC.png": nr,
        "../assets/icons/home/AllLotteryGames/WinTrx/numD.png": ar,
        "../assets/icons/home/AllLotteryGames/WinTrx/numE.png": or,
        "../assets/icons/home/AllLotteryGames/WinTrx/numF.png": Ar,
        "../assets/icons/home/AllLotteryGames/WinTrx/prize0.png": ir,
        "../assets/icons/home/AllLotteryGames/WinTrx/prize1.png": lr,
        "../assets/icons/home/AllLotteryGames/WinTrx/prize2.png": rr,
        "../assets/icons/home/AllLotteryGames/WinTrx/prize3.png": cr,
        "../assets/icons/home/AllLotteryGames/WinTrx/prize4.png": gr,
        "../assets/icons/home/AllLotteryGames/WinTrx/prize5.png": dr,
        "../assets/icons/home/AllLotteryGames/WinTrx/prize6.png": pr,
        "../assets/icons/home/AllLotteryGames/WinTrx/prize7.png": _r,
        "../assets/icons/home/AllLotteryGames/WinTrx/prize8.png": ur,
        "../assets/icons/home/AllLotteryGames/WinTrx/prize9.png": vr,
        "../assets/icons/home/AllLotteryGames/WinTrx/prizeA.png": mr,
        "../assets/icons/home/AllLotteryGames/WinTrx/prizeB.png": hr,
        "../assets/icons/home/AllLotteryGames/WinTrx/prizeC.png": wr,
        "../assets/icons/home/AllLotteryGames/WinTrx/prizeD.png": br,
        "../assets/icons/home/AllLotteryGames/WinTrx/prizeE.png": Cr,
        "../assets/icons/home/AllLotteryGames/WinTrx/prizeF.png": yr,
        "../assets/icons/home/AllLotteryGames/WinTrx/trxbg.png": fr,
        "../assets/icons/home/AllLotteryGames/binguo/add.png": Br,
        "../assets/icons/home/AllLotteryGames/binguo/bet_tip.png": Rr,
        "../assets/icons/home/AllLotteryGames/binguo/binguo_time.png": Er,
        "../assets/icons/home/AllLotteryGames/binguo/binguo_tip.png": Dr,
        "../assets/icons/home/AllLotteryGames/binguo/count_icon.png": Ir,
        "../assets/icons/home/AllLotteryGames/binguo/dice_1.png": Sr,
        "../assets/icons/home/AllLotteryGames/binguo/dice_2.png": Lr,
        "../assets/icons/home/AllLotteryGames/binguo/dice_3.png": Gr,
        "../assets/icons/home/AllLotteryGames/binguo/dice_4.png": kr,
        "../assets/icons/home/AllLotteryGames/binguo/dice_5.png": Ur,
        "../assets/icons/home/AllLotteryGames/binguo/dice_6.png": Mr,
        "../assets/icons/home/AllLotteryGames/binguo/hidden_money.png": Tr,
        "../assets/icons/home/AllLotteryGames/binguo/hot_bg.png": Qr,
        "../assets/icons/home/AllLotteryGames/binguo/hot_top.png": Vr,
        "../assets/icons/home/AllLotteryGames/binguo/icon.png": Or,
        "../assets/icons/home/AllLotteryGames/binguo/lock_money.png": Pr,
        "../assets/icons/home/AllLotteryGames/binguo/record.png": Fr,
        "../assets/icons/home/AllLotteryGames/binguo/record_icon.png": xr,
        "../assets/icons/home/AllLotteryGames/binguo/rule_bg.png": Nr,
        "../assets/icons/home/AllLotteryGames/binguo/rule_dice_1.png": Hr,
        "../assets/icons/home/AllLotteryGames/binguo/rule_dice_2.png": Yr,
        "../assets/icons/home/AllLotteryGames/binguo/rule_dice_3.png": Wr,
        "../assets/icons/home/AllLotteryGames/binguo/rule_dice_4.png": Jr,
        "../assets/icons/home/AllLotteryGames/binguo/rule_dice_5.png": Kr,
        "../assets/icons/home/AllLotteryGames/binguo/rule_dice_6.png": Xr,
        "../assets/icons/home/AllLotteryGames/binguo/rule_tip.png": jr,
        "../assets/icons/home/AllLotteryGames/binguo/top_1.png": zr,
        "../assets/icons/home/AllLotteryGames/binguo/top_2.png": Zr,
        "../assets/icons/home/AllLotteryGames/binguo/top_3.png": qr,
        "../assets/icons/home/AllLotteryGames/binguo/trend1.png": $r,
        "../assets/icons/home/AllLotteryGames/binguo/trend2.png": ec,
        "../assets/icons/home/AllLotteryGames/binguo/trend3.png": tc,
        "../assets/icons/home/AllLotteryGames/binguo/trend_go.png": sc,
        "../assets/icons/home/AllLotteryGames/changlong/tg_zcjl_sel_di.png": nc,
        "../assets/icons/home/AllOnlineGames/svg/BetSoft.png": ac,
        "../assets/icons/home/AllOnlineGames/svg/BetSoftActive.png": oc,
        "../assets/icons/home/AllOnlineGames/svg/Hacksaw.png": Ac,
        "../assets/icons/home/AllOnlineGames/svg/HacksawActive.png": ic,
        "../assets/icons/home/AllOnlineGames/svg/JOKER.png": lc,
        "../assets/icons/home/AllOnlineGames/svg/JOKERActive.png": rc,
        "../assets/icons/home/AllOnlineGames/svg/Marbles.png": cc,
        "../assets/icons/home/AllOnlineGames/svg/MarblesActive.png": gc,
        "../assets/icons/home/AllOnlineGames/svg/SEXY.png": dc,
        "../assets/icons/home/AllOnlineGames/svg/SEXYActive.png": pc,
        "../assets/icons/home/AllOnlineGames/svg/Spribe2.png": _c,
        "../assets/icons/home/AllOnlineGames/svg/Spribe2Active.png": uc,
        "../assets/icons/home/AllOnlineGames/svg/YGG.png": vc,
        "../assets/icons/home/AllOnlineGames/svg/YGGActive.png": mc,
        "../assets/icons/home/StartPage/ar018.png": hc,
        "../assets/icons/home/StartPage/ar018_dice.png": wc,
        "../assets/icons/home/StartPage/basantclub.png": bc,
        "../assets/icons/home/StartPage/daman.png": Cc,
        "../assets/icons/home/StartPage/game_dice_basantclub.png": yc,
        "../assets/icons/home/StartPage/game_dice_daman.png": fc,
        "../assets/icons/home/StartPage/game_dice_lottery77.png": Bc,
        "../assets/icons/home/StartPage/lottery7.png": Rc,
        "../assets/icons/home/StartPage/mz9.png": Ec,
        "../assets/icons/home/StartPage/pop888.png": Dc,
        "../assets/icons/home/StartPage/pop888_dice.png": Ic,
        "../assets/icons/home/StartPage/sit.png": Sc,
        "../assets/icons/home/StartPage/vxth.png": Lc,
        "../assets/icons/home/StartPage/vxth_dice.png": Gc,
        "../assets/icons/home/adver1.png": kc,
        "../assets/icons/home/adver2.png": Uc,
        "../assets/icons/home/adver3.png": Mc,
        "../assets/icons/home/arrow_left.png": Tc,
        "../assets/icons/home/arrow_right.png": Qc,
        "../assets/icons/home/avatar.png": Vc,
        "../assets/icons/home/award_icon.png": Oc,
        "../assets/icons/home/btn_gd.png": Pc,
        "../assets/icons/home/btn_left.png": Fc,
        "../assets/icons/home/btn_right.png": xc,
        "../assets/icons/home/changlong_bg.png": Nc,
        "../assets/icons/home/changlong_icon.png": Hc,
        "../assets/icons/home/customer_icon.png": Yc,
        "../assets/icons/home/dianzi/live/SEXY_Video.png": Wc,
        "../assets/icons/home/dianzi/live/WM_Video.png": Jc,
        "../assets/icons/home/dianzi/logo/SEXY_Video.png": Kc,
        "../assets/icons/home/dianzi/onlineSlot/EVOPlay.png": Xc,
        "../assets/icons/home/dianzi/sport/Wickets9.png": jc,
        "../assets/icons/home/electronic/AG_Electronic.png": zc,
        "../assets/icons/home/electronic/CQ9.png": Zc,
        "../assets/icons/home/electronic/EVOPlay.png": qc,
        "../assets/icons/home/electronic/EVO_Electronic.png": $c,
        "../assets/icons/home/electronic/HB.png": eg,
        "../assets/icons/home/electronic/JDB.png": tg,
        "../assets/icons/home/electronic/JILI.png": sg,
        "../assets/icons/home/electronic/MG.png": ng,
        "../assets/icons/home/electronic/PG.png": ag,
        "../assets/icons/home/electronic/PP.png": og,
        "../assets/icons/home/electronic/TB.png": Ag,
        "../assets/icons/home/gameListIcons/bg.png": ig,
        "../assets/icons/home/gameListIcons/bgActive.png": lg,
        "../assets/icons/home/gameListIcons/bgActiveOld.png": rg,
        "../assets/icons/home/gameListIcons/bgOld.png": cg,
        "../assets/icons/home/gameListIcons/chess.png": gg,
        "../assets/icons/home/gameListIcons/chessActive.png": dg,
        "../assets/icons/home/gameListIcons/fish.png": pg,
        "../assets/icons/home/gameListIcons/fishActive.png": _g,
        "../assets/icons/home/gameListIcons/flash.png": ug,
        "../assets/icons/home/gameListIcons/flashActive.png": vg,
        "../assets/icons/home/gameListIcons/lottery.png": mg,
        "../assets/icons/home/gameListIcons/lotteryActive.png": hg,
        "../assets/icons/home/gameListIcons/popular.png": wg,
        "../assets/icons/home/gameListIcons/popularActive.png": bg,
        "../assets/icons/home/gameListIcons/slot.png": Cg,
        "../assets/icons/home/gameListIcons/slotActive.png": yg,
        "../assets/icons/home/gameListIcons/sport.png": fg,
        "../assets/icons/home/gameListIcons/sportActive.png": Bg,
        "../assets/icons/home/gameListIcons/video.png": Rg,
        "../assets/icons/home/gameListIcons/videoActive.png": Eg,
        "../assets/icons/home/game_bg/AG_Sport.png": Dg,
        "../assets/icons/home/game_bg/AG_Sport_big.png": Ig,
        "../assets/icons/home/game_bg/AG_Video.png": Sg,
        "../assets/icons/home/game_bg/AG_Video_big.png": Lg,
        "../assets/icons/home/game_bg/BB.png": Gg,
        "../assets/icons/home/game_bg/CMD.png": kg,
        "../assets/icons/home/game_bg/Card365.png": Ug,
        "../assets/icons/home/game_bg/DG.png": Mg,
        "../assets/icons/home/game_bg/EVO_Video.png": Tg,
        "../assets/icons/home/game_bg/IM.png": Qg,
        "../assets/icons/home/game_bg/SEXY_Video.png": Vg,
        "../assets/icons/home/game_bg/SaBa.png": Og,
        "../assets/icons/home/game_bg/TB.png": Pg,
        "../assets/icons/home/game_bg/V8Card.png": Fg,
        "../assets/icons/home/game_bg/WM_Video.png": xg,
        "../assets/icons/home/game_bg/Wickets9.png": Ng,
        "../assets/icons/home/headerBg.png": Hg,
        "../assets/icons/home/home_message.png": Yg,
        "../assets/icons/home/icon_sevice.png": Wg,
        "../assets/icons/home/icon_sevice1.png": Jg,
        "../assets/icons/home/icons/5d.png": Kg,
        "../assets/icons/home/icons/bigaward.png": Xg,
        "../assets/icons/home/icons/chess.png": jg,
        "../assets/icons/home/icons/clicksTopList.png": zg,
        "../assets/icons/home/icons/fish.png": Zg,
        "../assets/icons/home/icons/flash.png": qg,
        "../assets/icons/home/icons/k3.png": $g,
        "../assets/icons/home/icons/lottery.png": ed,
        "../assets/icons/home/icons/message.svg": td,
        "../assets/icons/home/icons/platformList.png": sd,
        "../assets/icons/home/icons/search_icon.svg": nd,
        "../assets/icons/home/icons/slot.png": ad,
        "../assets/icons/home/icons/sport.png": od,
        "../assets/icons/home/icons/top1.png": Ad,
        "../assets/icons/home/icons/top2.png": id,
        "../assets/icons/home/icons/top3.png": ld,
        "../assets/icons/home/icons/trx.png": rd,
        "../assets/icons/home/icons/video.png": cd,
        "../assets/icons/home/icons/wingo.png": gd,
        "../assets/icons/home/loteria.png": dd,
        "../assets/icons/home/lottery/5D.png": pd,
        "../assets/icons/home/lottery/K3.png": _d,
        "../assets/icons/home/lottery/Trx Win Go.png": ud,
        "../assets/icons/home/lottery/Win Go.png": vd,
        "../assets/icons/home/lottery/XOSO.png": md,
        "../assets/icons/home/lottery/d55.png": hd,
        "../assets/icons/home/lottery/d56.png": wd,
        "../assets/icons/home/lottery/d57.png": bd,
        "../assets/icons/home/lottery/d58.png": Cd,
        "../assets/icons/home/lottery/k310.png": yd,
        "../assets/icons/home/lottery/k311.png": fd,
        "../assets/icons/home/lottery/k312.png": Bd,
        "../assets/icons/home/lottery/k39.png": Rd,
        "../assets/icons/home/lottery/trx13.png": Ed,
        "../assets/icons/home/lottery/trx14.png": Dd,
        "../assets/icons/home/lottery/trx15.png": Id,
        "../assets/icons/home/lottery/trx16.png": Sd,
        "../assets/icons/home/lottery/wingo1.png": Ld,
        "../assets/icons/home/lottery/wingo2.png": Gd,
        "../assets/icons/home/lottery/wingo3.png": kd,
        "../assets/icons/home/lottery/wingo4.png": Ud,
        "../assets/icons/home/luck_bg.png": Md,
        "../assets/icons/home/messageIcon.png": Td,
        "../assets/icons/home/no1.png": Qd,
        "../assets/icons/home/no2.png": Vd,
        "../assets/icons/home/no3.png": Od,
        "../assets/icons/home/notice.png": Pd,
        "../assets/icons/home/pop_login.png": Fd,
        "../assets/icons/home/pop_logo.png": xd,
        "../assets/icons/home/profit.png": Nd,
        "../assets/icons/home/promp_bg.png": Hd,
        "../assets/icons/home/promp_left.png": Yd,
        "../assets/icons/home/promp_right.png": Wd,
        "../assets/icons/home/recycleFail_bg.png": Jd,
        "../assets/icons/home/slots/AG_Electronic.png": Kd,
        "../assets/icons/home/slots/AG_Video.png": Xd,
        "../assets/icons/home/slots/CQ9.png": jd,
        "../assets/icons/home/slots/DG.png": zd,
        "../assets/icons/home/slots/EVO_Electronic.png": Zd,
        "../assets/icons/home/slots/EVO_Video.png": qd,
        "../assets/icons/home/slots/HB.png": $d,
        "../assets/icons/home/slots/JDB.png": ep,
        "../assets/icons/home/slots/JILI.png": tp,
        "../assets/icons/home/slots/MG.png": sp,
        "../assets/icons/home/slots/PG.png": np,
        "../assets/icons/home/slots/PP.png": ap,
        "../assets/icons/home/slots/SEXY_Video.png": op,
        "../assets/icons/home/slots/TB.png": Ap,
        "../assets/icons/home/slots/TB_Chess.png": ip,
        "../assets/icons/home/slots/WM_Video.png": lp,
        "../assets/icons/home/tab/active/all.png": rp,
        "../assets/icons/home/tab/active/chess.png": cp,
        "../assets/icons/home/tab/active/fish.png": gp,
        "../assets/icons/home/tab/active/lottery.png": dp,
        "../assets/icons/home/tab/active/popular.png": pp,
        "../assets/icons/home/tab/active/slot.png": _p,
        "../assets/icons/home/tab/active/video.png": up,
        "../assets/icons/home/tab/all.png": vp,
        "../assets/icons/home/tab/chess.png": mp,
        "../assets/icons/home/tab/fish.png": hp,
        "../assets/icons/home/tab/flash.png": wp,
        "../assets/icons/home/tab/lottery.png": bp,
        "../assets/icons/home/tab/popular.png": Cp,
        "../assets/icons/home/tab/slot.png": yp,
        "../assets/icons/home/tab/sport.png": fp,
        "../assets/icons/home/tab/video.png": Bp,
        "../assets/icons/home/tabBar/activity.png": Rp,
        "../assets/icons/home/tabBar/activity_active.png": Ep,
        "../assets/icons/home/tabBar/home.png": Dp,
        "../assets/icons/home/tabBar/home_active.png": Ip,
        "../assets/icons/home/tabBar/main.png": Sp,
        "../assets/icons/home/tabBar/main_active.png": Lp,
        "../assets/icons/home/tabBar/promotion.png": Gp,
        "../assets/icons/home/tabBar/promotion_active.png": kp,
        "../assets/icons/home/tabBar/wallet.png": Up,
        "../assets/icons/home/tabBar/wallet_active.png": Mp,
        "../assets/icons/home/tab_select.png": Tp,
        "../assets/icons/home/turntable_icon.png": Qp,
        "../assets/icons/home/u18.png": Vp,
        "../assets/icons/home/win.png": Op,
        "../assets/icons/home/win/5D.png": Pp,
        "../assets/icons/home/win/AG_Electronic.png": Fp,
        "../assets/icons/home/win/AG_Sport.png": xp,
        "../assets/icons/home/win/AG_Video.png": Np,
        "../assets/icons/home/win/BB.png": Hp,
        "../assets/icons/home/win/CMD.png": Yp,
        "../assets/icons/home/win/CQ9.png": Wp,
        "../assets/icons/home/win/Card365.png": Jp,
        "../assets/icons/home/win/DG.png": Kp,
        "../assets/icons/home/win/EVO_Electronic.png": Xp,
        "../assets/icons/home/win/EVO_Video.png": jp,
        "../assets/icons/home/win/HB.png": zp,
        "../assets/icons/home/win/IM.png": Zp,
        "../assets/icons/home/win/JDB.png": qp,
        "../assets/icons/home/win/JILI.png": $p,
        "../assets/icons/home/win/K3.png": e_,
        "../assets/icons/home/win/MG.png": t_,
        "../assets/icons/home/win/PG.png": s_,
        "../assets/icons/home/win/PP.png": n_,
        "../assets/icons/home/win/SEXY_Video.png": a_,
        "../assets/icons/home/win/SaBa.png": o_,
        "../assets/icons/home/win/SmallGame.png": A_,
        "../assets/icons/home/win/TB.png": i_,
        "../assets/icons/home/win/TB_Chess.png": l_,
        "../assets/icons/home/win/TrxHash.png": r_,
        "../assets/icons/home/win/V8Card.png": c_,
        "../assets/icons/home/win/WM_Video.png": g_,
        "../assets/icons/home/win/Wickets9.png": d_,
        "../assets/icons/home/win/WinGo.png": p_,
        "../assets/icons/home/win/XOSO.png": __,
        "../assets/icons/home/winning_bg.png": u_,
        "../assets/icons/home/winning_bg2.png": v_,
        "../assets/icons/home/winning_icon.png": m_,
        "../assets/icons/ico/bitbug_favicon1.ico": h_,
        "../assets/icons/ico/favicon.ico": w_,
        "../assets/icons/images/All.png": b_,
        "../assets/icons/images/DailyProfitRank/border1.png": C_,
        "../assets/icons/images/DailyProfitRank/border2.png": y_,
        "../assets/icons/images/DailyProfitRank/border3.png": f_,
        "../assets/icons/images/DailyProfitRank/crown1.png": B_,
        "../assets/icons/images/DailyProfitRank/crown2.png": R_,
        "../assets/icons/images/DailyProfitRank/crown3.png": E_,
        "../assets/icons/images/DailyProfitRank/place1.png": D_,
        "../assets/icons/images/DailyProfitRank/place2.png": I_,
        "../assets/icons/images/DailyProfitRank/place3.png": S_,
        "../assets/icons/images/DailyProfitRank/stage.png": L_,
        "../assets/icons/images/avatar.png": G_,
        "../assets/icons/images/empty.png": k_,
        "../assets/icons/images/loading.gif": U_,
        "../assets/icons/images/promotion/totalIncomeBg.png": M_,
        "../assets/icons/languages/ar.png": T_,
        "../assets/icons/languages/bd.png": Q_,
        "../assets/icons/languages/bra.png": V_,
        "../assets/icons/languages/en.png": O_,
        "../assets/icons/languages/hd.png": P_,
        "../assets/icons/languages/id.png": F_,
        "../assets/icons/languages/japan.png": x_,
        "../assets/icons/languages/korea.png": N_,
        "../assets/icons/languages/md.png": H_,
        "../assets/icons/languages/my.png": Y_,
        "../assets/icons/languages/ph.png": W_,
        "../assets/icons/languages/pk.png": J_,
        "../assets/icons/languages/rus.png": K_,
        "../assets/icons/languages/selected.png": X_,
        "../assets/icons/languages/th.png": j_,
        "../assets/icons/languages/tha.png": z_,
        "../assets/icons/languages/vi.png": Z_,
        "../assets/icons/languages/zh.png": q_,
        "../assets/icons/login/backIcon.png": $_,
        "../assets/icons/login/dl_bg@2x.png": eu,
        "../assets/icons/login/eyeInvisible.png": tu,
        "../assets/icons/login/eyeVisible.png": su,
        "../assets/icons/login/googleIcon.png": nu,
        "../assets/icons/login/newlogin/customer.png": au,
        "../assets/icons/login/newlogin/email.png": ou,
        "../assets/icons/login/newlogin/emailactive.png": Au,
        "../assets/icons/login/newlogin/emailnumber.png": iu,
        "../assets/icons/login/newlogin/forgetpassword.png": lu,
        "../assets/icons/login/newlogin/other.png": ru,
        "../assets/icons/login/newlogin/otheractive.png": cu,
        "../assets/icons/login/newlogin/phone.png": gu,
        "../assets/icons/login/newlogin/phoneactive.png": du,
        "../assets/icons/login/newlogin/tip.png": pu,
        "../assets/icons/main/Avatar/1.png": _u,
        "../assets/icons/main/Avatar/10.png": uu,
        "../assets/icons/main/Avatar/11.png": vu,
        "../assets/icons/main/Avatar/12.png": mu,
        "../assets/icons/main/Avatar/13.png": hu,
        "../assets/icons/main/Avatar/14.png": wu,
        "../assets/icons/main/Avatar/15.png": bu,
        "../assets/icons/main/Avatar/16.png": Cu,
        "../assets/icons/main/Avatar/17.png": yu,
        "../assets/icons/main/Avatar/18.png": fu,
        "../assets/icons/main/Avatar/19.png": Bu,
        "../assets/icons/main/Avatar/2.png": Ru,
        "../assets/icons/main/Avatar/20.png": Eu,
        "../assets/icons/main/Avatar/3.png": Du,
        "../assets/icons/main/Avatar/4.png": Iu,
        "../assets/icons/main/Avatar/5.png": Su,
        "../assets/icons/main/Avatar/6.png": Lu,
        "../assets/icons/main/Avatar/7.png": Gu,
        "../assets/icons/main/Avatar/8.png": ku,
        "../assets/icons/main/Avatar/9.png": Uu,
        "../assets/icons/main/BetRecord/-1.png": Mu,
        "../assets/icons/main/BetRecord/1.png": Tu,
        "../assets/icons/main/BetRecord/10.png": Qu,
        "../assets/icons/main/BetRecord/11.png": Vu,
        "../assets/icons/main/BetRecord/12.png": Ou,
        "../assets/icons/main/BetRecord/16.png": Pu,
        "../assets/icons/main/BetRecord/17.png": Fu,
        "../assets/icons/main/BetRecord/18.png": xu,
        "../assets/icons/main/BetRecord/19.png": Nu,
        "../assets/icons/main/BetRecord/2.png": Hu,
        "../assets/icons/main/BetRecord/20.png": Yu,
        "../assets/icons/main/BetRecord/21.png": Wu,
        "../assets/icons/main/BetRecord/22.png": Ju,
        "../assets/icons/main/BetRecord/23.png": Ku,
        "../assets/icons/main/BetRecord/24.png": Xu,
        "../assets/icons/main/BetRecord/26.png": ju,
        "../assets/icons/main/BetRecord/27.png": zu,
        "../assets/icons/main/BetRecord/29.png": Zu,
        "../assets/icons/main/BetRecord/3.png": qu,
        "../assets/icons/main/BetRecord/30.png": $u,
        "../assets/icons/main/BetRecord/35.png": e1,
        "../assets/icons/main/BetRecord/4.png": t1,
        "../assets/icons/main/BetRecord/5.png": s1,
        "../assets/icons/main/BetRecord/6.png": n1,
        "../assets/icons/main/BetRecord/7.png": a1,
        "../assets/icons/main/BetRecord/acitve/-1.png": o1,
        "../assets/icons/main/BetRecord/acitve/1.png": A1,
        "../assets/icons/main/BetRecord/acitve/10.png": i1,
        "../assets/icons/main/BetRecord/acitve/11.png": l1,
        "../assets/icons/main/BetRecord/acitve/12.png": r1,
        "../assets/icons/main/BetRecord/acitve/16.png": c1,
        "../assets/icons/main/BetRecord/acitve/17.png": g1,
        "../assets/icons/main/BetRecord/acitve/18.png": d1,
        "../assets/icons/main/BetRecord/acitve/19.png": p1,
        "../assets/icons/main/BetRecord/acitve/2.png": _1,
        "../assets/icons/main/BetRecord/acitve/20.png": u1,
        "../assets/icons/main/BetRecord/acitve/21.png": v1,
        "../assets/icons/main/BetRecord/acitve/22.png": m1,
        "../assets/icons/main/BetRecord/acitve/23.png": h1,
        "../assets/icons/main/BetRecord/acitve/24.png": w1,
        "../assets/icons/main/BetRecord/acitve/26.png": b1,
        "../assets/icons/main/BetRecord/acitve/27.png": C1,
        "../assets/icons/main/BetRecord/acitve/29.png": y1,
        "../assets/icons/main/BetRecord/acitve/3.png": f1,
        "../assets/icons/main/BetRecord/acitve/30.png": B1,
        "../assets/icons/main/BetRecord/acitve/35.png": R1,
        "../assets/icons/main/BetRecord/acitve/4.png": E1,
        "../assets/icons/main/BetRecord/acitve/5.png": D1,
        "../assets/icons/main/BetRecord/acitve/6.png": I1,
        "../assets/icons/main/BetRecord/acitve/7.png": S1,
        "../assets/icons/main/CStype1.png": L1,
        "../assets/icons/main/CStype2.png": G1,
        "../assets/icons/main/CStype3.png": k1,
        "../assets/icons/main/CStype4.png": U1,
        "../assets/icons/main/CStype5.png": M1,
        "../assets/icons/main/CStype6.png": T1,
        "../assets/icons/main/CStype7.png": Q1,
        "../assets/icons/main/EmailIcon.png": V1,
        "../assets/icons/main/GooglePolygon.png": O1,
        "../assets/icons/main/GoogleSubtract.png": P1,
        "../assets/icons/main/GoogleTip.png": F1,
        "../assets/icons/main/Laundry/Vector.png": x1,
        "../assets/icons/main/Laundry/icon_close.png": N1,
        "../assets/icons/main/Laundry/promptImg.png": H1,
        "../assets/icons/main/Laundry/right.png": Y1,
        "../assets/icons/main/Laundry/superjackpotHome.png": W1,
        "../assets/icons/main/Laundry/wallet.png": J1,
        "../assets/icons/main/Subtract.png": K1,
        "../assets/icons/main/Super/Group.png": X1,
        "../assets/icons/main/Super/Grouptip.png": j1,
        "../assets/icons/main/Super/SuperJackpotBg.png": z1,
        "../assets/icons/main/Super/close.svg": Z1,
        "../assets/icons/main/Super/icon.png": q1,
        "../assets/icons/main/Super/nodata.png": $1,
        "../assets/icons/main/Super/recivedsuccess.png": ev,
        "../assets/icons/main/Super/rulebg.png": tv,
        "../assets/icons/main/TotalAssetsBg.png": sv,
        "../assets/icons/main/VipIcon.png": nv,
        "../assets/icons/main/about.png": av,
        "../assets/icons/main/activeBg.png": ov,
        "../assets/icons/main/avatorBg.png": Av,
        "../assets/icons/main/ball/00.png": iv,
        "../assets/icons/main/ball/01.png": lv,
        "../assets/icons/main/ball/02.png": rv,
        "../assets/icons/main/ball/03.png": cv,
        "../assets/icons/main/ball/04.png": gv,
        "../assets/icons/main/ball/05.png": dv,
        "../assets/icons/main/ball/06.png": pv,
        "../assets/icons/main/ball/07.png": _v,
        "../assets/icons/main/ball/08.png": uv,
        "../assets/icons/main/ball/09.png": vv,
        "../assets/icons/main/before_cire.png": mv,
        "../assets/icons/main/betInfoStep.png": hv,
        "../assets/icons/main/betResultStep.png": wv,
        "../assets/icons/main/betSixInfoStep.png": bv,
        "../assets/icons/main/betSportStep.png": Cv,
        "../assets/icons/main/bindemailsuccess.png": yv,
        "../assets/icons/main/bxxHeader.png": fv,
        "../assets/icons/main/bxxSecurity.png": Bv,
        "../assets/icons/main/bxxTotal.png": Rv,
        "../assets/icons/main/chessStepIcon.png": Ev,
        "../assets/icons/main/clear.png": Dv,
        "../assets/icons/main/close.png": Iv,
        "../assets/icons/main/cps.png": Sv,
        "../assets/icons/main/down.png": Lv,
        "../assets/icons/main/dropDown.png": Gv,
        "../assets/icons/main/gift.png": kv,
        "../assets/icons/main/giftFolder.png": Uv,
        "../assets/icons/main/giftIcon.png": Mv,
        "../assets/icons/main/googleKey.png": Tv,
        "../assets/icons/main/googleVerheader.png": Qv,
        "../assets/icons/main/guide.png": Vv,
        "../assets/icons/main/gverifyDownload.png": Ov,
        "../assets/icons/main/icon_copy.png": Pv,
        "../assets/icons/main/icon_hd_wxz.png": Fv,
        "../assets/icons/main/icon_qb_wxz.png": xv,
        "../assets/icons/main/icon_sy_wxz.png": Nv,
        "../assets/icons/main/icon_tg.png": Hv,
        "../assets/icons/main/icon_wd_wxz.png": Yv,
        "../assets/icons/main/icon_wd_xz.png": Wv,
        "../assets/icons/main/incomeIcon.png": Jv,
        "../assets/icons/main/invitationBonus.png": Kv,
        "../assets/icons/main/invitationBonusIB.png": Xv,
        "../assets/icons/main/invitation_bg.png": jv,
        "../assets/icons/main/inviteIcon.png": zv,
        "../assets/icons/main/inviterecord.svg": Zv,
        "../assets/icons/main/inviterule.svg": qv,
        "../assets/icons/main/jiantou.png": $v,
        "../assets/icons/main/kBg.png": em,
        "../assets/icons/main/languageChecked.png": tm,
        "../assets/icons/main/languageIcon.png": sm,
        "../assets/icons/main/laundryIcon.png": nm,
        "../assets/icons/main/levelBg.png": am,
        "../assets/icons/main/messages.png": om,
        "../assets/icons/main/myCoin.png": Am,
        "../assets/icons/main/mylottery.png": im,
        "../assets/icons/main/notificationCenter.png": lm,
        "../assets/icons/main/notifyIcon.png": rm,
        "../assets/icons/main/numberBg-r.png": cm,
        "../assets/icons/main/orderIcon.png": gm,
        "../assets/icons/main/points.png": dm,
        "../assets/icons/main/qbBg.png": pm,
        "../assets/icons/main/rechargeIcon.png": _m,
        "../assets/icons/main/refresh.png": um,
        "../assets/icons/main/righticon.svg": vm,
        "../assets/icons/main/safetyIcon.png": mm,
        "../assets/icons/main/serviceCenter.png": hm,
        "../assets/icons/main/settingCenter.png": wm,
        "../assets/icons/main/statsIcon.png": bm,
        "../assets/icons/main/success.png": Cm,
        "../assets/icons/main/superIcon.png": ym,
        "../assets/icons/main/tjBg.png": fm,
        "../assets/icons/main/transferInIcon.png": Bm,
        "../assets/icons/main/transferOutIcon.png": Rm,
        "../assets/icons/main/unfinish.svg": Em,
        "../assets/icons/main/vault.png": Dm,
        "../assets/icons/main/wallet.png": Im,
        "../assets/icons/main/wallets.png": Sm,
        "../assets/icons/main/widthdrawBlue.png": Lm,
        "../assets/icons/main/zs.png": Gm,
        "../assets/icons/promotion/TeamPartner/banner.png": km,
        "../assets/icons/promotion/TeamPartner/box.png": Um,
        "../assets/icons/promotion/TeamReport/roundIcon.png": Mm,
        "../assets/icons/promotion/commission.png": Tm,
        "../assets/icons/promotion/copy_code.png": Qm,
        "../assets/icons/promotion/dashedMiddle.png": Vm,
        "../assets/icons/promotion/direct.png": Om,
        "../assets/icons/promotion/giftIcon.png": Pm,
        "../assets/icons/promotion/greenGroup.png": Fm,
        "../assets/icons/promotion/group.png": xm,
        "../assets/icons/promotion/groupIcon.png": Nm,
        "../assets/icons/promotion/groupIcon2.png": Hm,
        "../assets/icons/promotion/horizentalDashed.png": Ym,
        "../assets/icons/promotion/invite.png": Wm,
        "../assets/icons/promotion/invite_reg.png": Jm,
        "../assets/icons/promotion/promotionShare/copyBtn.png": Km,
        "../assets/icons/promotion/promotionShare/k1.png": Xm,
        "../assets/icons/promotion/promotionShare/poster.png": jm,
        "../assets/icons/promotion/promotionShare/shareBtn.png": zm,
        "../assets/icons/promotion/promotionbg.png": Zm,
        "../assets/icons/promotion/promotionbg2.png": qm,
        "../assets/icons/promotion/rebateRatio.png": $m,
        "../assets/icons/promotion/rightArrow.png": eh,
        "../assets/icons/promotion/rightArrowRed.png": th,
        "../assets/icons/promotion/rule/Lv0.png": sh,
        "../assets/icons/promotion/rule/Lv1.png": nh,
        "../assets/icons/promotion/rule/Lv2.png": ah,
        "../assets/icons/promotion/rule/Lv3.png": oh,
        "../assets/icons/promotion/rule/Lv4.png": Ah,
        "../assets/icons/promotion/rule/Lv5.png": ih,
        "../assets/icons/promotion/rule/Lv6.png": lh,
        "../assets/icons/promotion/rule/Lv7.png": rh,
        "../assets/icons/promotion/rule/lv.png": ch,
        "../assets/icons/promotion/rule/ruleBanner.png": gh,
        "../assets/icons/promotion/server.png": dh,
        "../assets/icons/promotion/serverbg.png": ph,
        "../assets/icons/promotion/shareBtnBg.png": _h,
        "../assets/icons/promotion/subOrdinateActive.png": uh,
        "../assets/icons/promotion/subOrdinateDark.png": vh,
        "../assets/icons/promotion/subordinate.png": mh,
        "../assets/icons/promotion/team_partner.png": hh,
        "../assets/icons/promotion/team_port.png": wh,
        "../assets/icons/promotion/top1.png": bh,
        "../assets/icons/promotion/top2.png": Ch,
        "../assets/icons/promotion/top3.png": yh,
        "../assets/icons/promotion/u1.png": fh,
        "../assets/icons/promotion/u2.png": Bh,
        "../assets/icons/promotion/verticalDashed.png": Rh,
        "../assets/icons/svg/Line.svg": Eh,
        "../assets/icons/svg/activity.svg": Dh,
        "../assets/icons/svg/anbg.svg": Ih,
        "../assets/icons/svg/changlong.svg": Sh,
        "../assets/icons/svg/chat.svg": Lh,
        "../assets/icons/svg/close.svg": Gh,
        "../assets/icons/svg/copy.svg": kh,
        "../assets/icons/svg/down.svg": Uh,
        "../assets/icons/svg/errorTip.svg": Mh,
        "../assets/icons/svg/eye.svg": Th,
        "../assets/icons/svg/game_logo/AG.svg": Qh,
        "../assets/icons/svg/game_logo/BB.svg": Vh,
        "../assets/icons/svg/game_logo/CARD365.svg": Oh,
        "../assets/icons/svg/game_logo/CMD.svg": Ph,
        "../assets/icons/svg/game_logo/CQ9.svg": Fh,
        "../assets/icons/svg/game_logo/DG.svg": xh,
        "../assets/icons/svg/game_logo/EVO.svg": Nh,
        "../assets/icons/svg/game_logo/FISH.svg": Hh,
        "../assets/icons/svg/game_logo/HB.svg": Yh,
        "../assets/icons/svg/game_logo/IM.svg": Wh,
        "../assets/icons/svg/game_logo/JDB.svg": Jh,
        "../assets/icons/svg/game_logo/JILI.svg": Kh,
        "../assets/icons/svg/game_logo/MG.svg": Xh,
        "../assets/icons/svg/game_logo/PG.svg": jh,
        "../assets/icons/svg/game_logo/PP.svg": zh,
        "../assets/icons/svg/game_logo/SABA.svg": Zh,
        "../assets/icons/svg/game_logo/SEXY.svg": qh,
        "../assets/icons/svg/game_logo/SPRIBE.svg": $h,
        "../assets/icons/svg/game_logo/TB.svg": ew,
        "../assets/icons/svg/game_logo/V8CARD.svg": tw,
        "../assets/icons/svg/game_logo/WICKETS9.svg": sw,
        "../assets/icons/svg/game_logo/WM.svg": nw,
        "../assets/icons/svg/home.svg": aw,
        "../assets/icons/svg/hot.svg": ow,
        "../assets/icons/svg/main.svg": Aw,
        "../assets/icons/svg/nbg.svg": iw,
        "../assets/icons/svg/notice.svg": lw,
        "../assets/icons/svg/play.svg": rw,
        "../assets/icons/svg/playactive.svg": cw,
        "../assets/icons/svg/promotion.svg": gw,
        "../assets/icons/svg/resultanbg.svg": dw,
        "../assets/icons/svg/voice.svg": pw,
        "../assets/icons/svg/wallet.svg": _w,
        "../assets/icons/tabBarIcons/activity.svg": uw,
        "../assets/icons/tabBarIcons/chat.svg": vw,
        "../assets/icons/tabBarIcons/home.svg": mw,
        "../assets/icons/tabBarIcons/main.svg": hw,
        "../assets/icons/tabBarIcons/promotion.svg": ww,
        "../assets/icons/tabBarIcons/wallet.svg": bw,
        "../assets/icons/vip/RebateDetails/0.png": Cw,
        "../assets/icons/vip/RebateDetails/1.png": yw,
        "../assets/icons/vip/RebateDetails/10.png": fw,
        "../assets/icons/vip/RebateDetails/2.png": Bw,
        "../assets/icons/vip/RebateDetails/3.png": Rw,
        "../assets/icons/vip/RebateDetails/4.png": Ew,
        "../assets/icons/vip/RebateDetails/5.png": Dw,
        "../assets/icons/vip/RebateDetails/6.png": Iw,
        "../assets/icons/vip/RebateDetails/7.png": Sw,
        "../assets/icons/vip/RebateDetails/8.png": Lw,
        "../assets/icons/vip/RebateDetails/9.png": Gw,
        "../assets/icons/vip/RebateDetails/Circle-1.png": kw,
        "../assets/icons/vip/RebateDetails/Circle-2.png": Uw,
        "../assets/icons/vip/gold.png": Mw,
        "../assets/icons/vip/grade/0.png": Tw,
        "../assets/icons/vip/grade/1.png": Qw,
        "../assets/icons/vip/grade/10.png": Vw,
        "../assets/icons/vip/grade/2.png": Ow,
        "../assets/icons/vip/grade/3.png": Pw,
        "../assets/icons/vip/grade/4.png": Fw,
        "../assets/icons/vip/grade/5.png": xw,
        "../assets/icons/vip/grade/6.png": Nw,
        "../assets/icons/vip/grade/7.png": Hw,
        "../assets/icons/vip/grade/8.png": Yw,
        "../assets/icons/vip/grade/9.png": Ww,
        "../assets/icons/vip/love.png": Jw,
        "../assets/icons/vip/myWelfare/welfare1.png": Kw,
        "../assets/icons/vip/myWelfare/welfare2.png": Xw,
        "../assets/icons/vip/myWelfare/welfare3.png": jw,
        "../assets/icons/vip/myWelfare/welfare4.png": zw,
        "../assets/icons/vip/myWelfare/welfare5.png": Zw,
        "../assets/icons/vip/ruleBg.png": qw,
        "../assets/icons/vip/succeed.png": $w,
        "../assets/icons/vip/swiper/HaveReached.png": eb,
        "../assets/icons/vip/swiper/bg/bg1.png": tb,
        "../assets/icons/vip/swiper/bg/bg10.png": sb,
        "../assets/icons/vip/swiper/bg/bg2.png": nb,
        "../assets/icons/vip/swiper/bg/bg3.png": ab,
        "../assets/icons/vip/swiper/bg/bg4.png": ob,
        "../assets/icons/vip/swiper/bg/bg5.png": Ab,
        "../assets/icons/vip/swiper/bg/bg6.png": ib,
        "../assets/icons/vip/swiper/bg/bg7.png": lb,
        "../assets/icons/vip/swiper/bg/bg8.png": rb,
        "../assets/icons/vip/swiper/bg/bg9.png": cb,
        "../assets/icons/vip/swiper/crown/1.png": gb,
        "../assets/icons/vip/swiper/logo/1.png": db,
        "../assets/icons/vip/swiper/logo/10.png": pb,
        "../assets/icons/vip/swiper/logo/2.png": _b,
        "../assets/icons/vip/swiper/logo/3.png": ub,
        "../assets/icons/vip/swiper/logo/4.png": vb,
        "../assets/icons/vip/swiper/logo/5.png": mb,
        "../assets/icons/vip/swiper/logo/6.png": hb,
        "../assets/icons/vip/swiper/logo/7.png": wb,
        "../assets/icons/vip/swiper/logo/8.png": bb,
        "../assets/icons/vip/swiper/logo/9.png": Cb,
        "../assets/icons/vip/swiper/ununlocked.png": yb,
        "../assets/icons/vip/weal/1.png": fb,
        "../assets/icons/vip/weal/2.png": Bb,
        "../assets/icons/vip/weal/3.png": Rb,
        "../assets/icons/vip/weal/4.png": Eb,
        "../assets/icons/vip/weal/5.png": Db,
        "../assets/icons/vip/weal/weal3.png": Ib,
        "../assets/icons/vip/weal/weal4.png": Sb,
        "../assets/icons/vip/weal/weal5.png": Lb,
        "../assets/icons/vip/weal3.png": Gb,
        "../assets/icons/vip/weal4.png": kb,
        "../assets/icons/vip/weal5.png": Ub,
        "../assets/icons/wallet/0.png": Mb,
        "../assets/icons/wallet/1.png": Tb,
        "../assets/icons/wallet/2.png": Qb,
        "../assets/icons/wallet/3.png": Vb,
        "../assets/icons/wallet/4.png": Ob,
        "../assets/icons/wallet/5.png": Pb,
        "../assets/icons/wallet/ArPayBackground.svg": Fb,
        "../assets/icons/wallet/Ar_Gift.svg": xb,
        "../assets/icons/wallet/BetSoft.png": Nb,
        "../assets/icons/wallet/EVOPlay.png": Hb,
        "../assets/icons/wallet/IM.png": Yb,
        "../assets/icons/wallet/Lottery.png": Wb,
        "../assets/icons/wallet/SEXY_Video.png": Jb,
        "../assets/icons/wallet/WM_Video.png": Kb,
        "../assets/icons/wallet/Wickets9.png": Xb,
        "../assets/icons/wallet/YGG.png": jb,
        "../assets/icons/wallet/ar1.png": zb,
        "../assets/icons/wallet/ar2.png": Zb,
        "../assets/icons/wallet/ar_appeal.png": qb,
        "../assets/icons/wallet/ar_success.png": $b,
        "../assets/icons/wallet/bg.png": e2,
        "../assets/icons/wallet/bg_De.png": t2,
        "../assets/icons/wallet/copy.png": s2,
        "../assets/icons/wallet/hint.png": n2,
        "../assets/icons/wallet/recharge/C2Chelp.png": a2,
        "../assets/icons/wallet/recharge/active_icon.png": o2,
        "../assets/icons/wallet/recharge/amount_error.png": A2,
        "../assets/icons/wallet/recharge/appeal.png": i2,
        "../assets/icons/wallet/recharge/appeal_state.png": l2,
        "../assets/icons/wallet/recharge/banktobank.png": r2,
        "../assets/icons/wallet/recharge/cancel.png": c2,
        "../assets/icons/wallet/recharge/close.png": g2,
        "../assets/icons/wallet/recharge/coin.png": d2,
        "../assets/icons/wallet/recharge/copy.png": p2,
        "../assets/icons/wallet/recharge/detail/appeal.png": _2,
        "../assets/icons/wallet/recharge/detail/bank.png": u2,
        "../assets/icons/wallet/recharge/detail/kbz.png": v2,
        "../assets/icons/wallet/recharge/detail/kbz_icon.png": m2,
        "../assets/icons/wallet/recharge/detail/slot_wallet.png": h2,
        "../assets/icons/wallet/recharge/detail/wave.png": w2,
        "../assets/icons/wallet/recharge/detail/wave_icon.png": b2,
        "../assets/icons/wallet/recharge/detail_upi_icon.png": C2,
        "../assets/icons/wallet/recharge/fail.png": y2,
        "../assets/icons/wallet/recharge/gift.png": f2,
        "../assets/icons/wallet/recharge/google_pay.png": B2,
        "../assets/icons/wallet/recharge/menu_active.png": R2,
        "../assets/icons/wallet/recharge/other_bank.png": E2,
        "../assets/icons/wallet/recharge/paytm.png": D2,
        "../assets/icons/wallet/recharge/phone_pe.png": I2,
        "../assets/icons/wallet/recharge/pix_icon.png": S2,
        "../assets/icons/wallet/recharge/quickpay2.png": L2,
        "../assets/icons/wallet/recharge/rechargeRecords/state/0.png": G2,
        "../assets/icons/wallet/recharge/rechargeRecords/state/1.png": k2,
        "../assets/icons/wallet/recharge/rechargeRecords/state/2.png": U2,
        "../assets/icons/wallet/recharge/rechargeRecords/state/3.png": M2,
        "../assets/icons/wallet/recharge/rechargeRecords/state/4.png": T2,
        "../assets/icons/wallet/recharge/refresh.png": Q2,
        "../assets/icons/wallet/recharge/saveWallet.png": V2,
        "../assets/icons/wallet/recharge/select.png": O2,
        "../assets/icons/wallet/recharge/setup1.png": P2,
        "../assets/icons/wallet/recharge/setup2.png": F2,
        "../assets/icons/wallet/recharge/setup2_active.png": x2,
        "../assets/icons/wallet/recharge/setup3.png": N2,
        "../assets/icons/wallet/recharge/setup3_active.png": H2,
        "../assets/icons/wallet/recharge/setup4.png": Y2,
        "../assets/icons/wallet/recharge/setup4_active.png": W2,
        "../assets/icons/wallet/recharge/success.png": J2,
        "../assets/icons/wallet/recharge/timeout.png": K2,
        "../assets/icons/wallet/recharge/tip.png": X2,
        "../assets/icons/wallet/recharge/transf_amount.png": j2,
        "../assets/icons/wallet/recharge/trc.png": z2,
        "../assets/icons/wallet/recharge/trx.png": Z2,
        "../assets/icons/wallet/recharge/upi_recharge.png": q2,
        "../assets/icons/wallet/recharge/upt_tip.png": $2,
        "../assets/icons/wallet/recharge/usdt.png": e0,
        "../assets/icons/wallet/recharge/usdt_active.png": t0,
        "../assets/icons/wallet/recharge/usdt_channel.png": s0,
        "../assets/icons/wallet/recharge/wait.png": n0,
        "../assets/icons/wallet/recharge/wallettobank.png": a0,
        "../assets/icons/wallet/rechargeHistory.png": o0,
        "../assets/icons/wallet/rechargeIcon.png": A0,
        "../assets/icons/wallet/recycleBtn.png": i0,
        "../assets/icons/wallet/serverIcon.png": l0,
        "../assets/icons/wallet/tobePay/QRCode.png": r0,
        "../assets/icons/wallet/tobePay/explain.png": c0,
        "../assets/icons/wallet/tobePay/fast.png": g0,
        "../assets/icons/wallet/tobePay/thirdPartyLogo.png": d0,
        "../assets/icons/wallet/widthdrawBlue.png": p0,
        "../assets/icons/wallet/withdraw/BankCard.png": _0,
        "../assets/icons/wallet/withdraw/EWallet/bankHeader.png": u0,
        "../assets/icons/wallet/withdraw/EWallet/cards.png": v0,
        "../assets/icons/wallet/withdraw/EWallet/momo.png": m0,
        "../assets/icons/wallet/withdraw/EWallet/wallet.png": h0,
        "../assets/icons/wallet/withdraw/USDT/address.png": w0,
        "../assets/icons/wallet/withdraw/USDT/anotherNamer.png": b0,
        "../assets/icons/wallet/withdraw/USDT/bankHeader.png": C0,
        "../assets/icons/wallet/withdraw/USDT/network.png": y0,
        "../assets/icons/wallet/withdraw/USDT/recharge_usdt.png": f0,
        "../assets/icons/wallet/withdraw/USDT/scan.png": B0,
        "../assets/icons/wallet/withdraw/USDT/usdt.png": R0,
        "../assets/icons/wallet/withdraw/USDT/usdtLogo3.png": E0,
        "../assets/icons/wallet/withdraw/add.png": D0,
        "../assets/icons/wallet/withdraw/balance.png": I0,
        "../assets/icons/wallet/withdraw/bankCard/1.png": S0,
        "../assets/icons/wallet/withdraw/bankCard/21.png": L0,
        "../assets/icons/wallet/withdraw/bankCard/3.png": G0,
        "../assets/icons/wallet/withdraw/bankCard/5.png": k0,
        "../assets/icons/wallet/withdraw/bankCard/address.png": U0,
        "../assets/icons/wallet/withdraw/bankCard/bank.png": M0,
        "../assets/icons/wallet/withdraw/bankCard/bankCard.png": T0,
        "../assets/icons/wallet/withdraw/bankCard/bankHeader1.png": Q0,
        "../assets/icons/wallet/withdraw/bankCard/bankHeader2.png": V0,
        "../assets/icons/wallet/withdraw/bankCard/bankLogo.png": O0,
        "../assets/icons/wallet/withdraw/bankCard/email.png": P0,
        "../assets/icons/wallet/withdraw/bankCard/ifscCode.png": F0,
        "../assets/icons/wallet/withdraw/bankCard/name.png": x0,
        "../assets/icons/wallet/withdraw/bankCard/phone.png": N0,
        "../assets/icons/wallet/withdraw/bankCard/searchIcon2.png": H0,
        "../assets/icons/wallet/withdraw/bg1.png": Y0,
        "../assets/icons/wallet/withdraw/bg2.png": W0,
        "../assets/icons/wallet/withdraw/c2c/1.png": J0,
        "../assets/icons/wallet/withdraw/c2c/2.png": K0,
        "../assets/icons/wallet/withdraw/c2c/3.png": X0,
        "../assets/icons/wallet/withdraw/c2c/4.png": j0,
        "../assets/icons/wallet/withdraw/c2c/CancelW.png": z0,
        "../assets/icons/wallet/withdraw/c2c/add.png": Z0,
        "../assets/icons/wallet/withdraw/c2c/appeal.png": q0,
        "../assets/icons/wallet/withdraw/c2c/bank.png": $0,
        "../assets/icons/wallet/withdraw/c2c/bg11.png": eC,
        "../assets/icons/wallet/withdraw/c2c/bookicon.png": tC,
        "../assets/icons/wallet/withdraw/c2c/c2clogo.png": sC,
        "../assets/icons/wallet/withdraw/c2c/c2clogo_a.png": nC,
        "../assets/icons/wallet/withdraw/c2c/confirmA.png": aC,
        "../assets/icons/wallet/withdraw/c2c/copy-icon.png": oC,
        "../assets/icons/wallet/withdraw/c2c/delBtn.png": AC,
        "../assets/icons/wallet/withdraw/c2c/hicon0.png": iC,
        "../assets/icons/wallet/withdraw/c2c/hicon1.png": lC,
        "../assets/icons/wallet/withdraw/c2c/hicon14.png": rC,
        "../assets/icons/wallet/withdraw/c2c/hicon2.png": cC,
        "../assets/icons/wallet/withdraw/c2c/hicon3.png": gC,
        "../assets/icons/wallet/withdraw/c2c/hicon4.png": dC,
        "../assets/icons/wallet/withdraw/c2c/hicon5.png": pC,
        "../assets/icons/wallet/withdraw/c2c/hicon6.png": _C,
        "../assets/icons/wallet/withdraw/c2c/hicon7.png": uC,
        "../assets/icons/wallet/withdraw/c2c/hicon8.png": vC,
        "../assets/icons/wallet/withdraw/c2c/progress/11/1.png": mC,
        "../assets/icons/wallet/withdraw/c2c/progress/11/2.png": hC,
        "../assets/icons/wallet/withdraw/c2c/progress/11/3.png": wC,
        "../assets/icons/wallet/withdraw/c2c/progress/11/4.png": bC,
        "../assets/icons/wallet/withdraw/c2c/progress/3/1.png": CC,
        "../assets/icons/wallet/withdraw/c2c/progress/3/1_a.png": yC,
        "../assets/icons/wallet/withdraw/c2c/progress/3/2.png": fC,
        "../assets/icons/wallet/withdraw/c2c/progress/3/2_a.png": BC,
        "../assets/icons/wallet/withdraw/c2c/progress/3/3.png": RC,
        "../assets/icons/wallet/withdraw/c2c/progress/3/3_a.png": EC,
        "../assets/icons/wallet/withdraw/c2c/progress/3/4.png": DC,
        "../assets/icons/wallet/withdraw/c2c/progress/3/4_a.png": IC,
        "../assets/icons/wallet/withdraw/c2c/progress/other/1.png": SC,
        "../assets/icons/wallet/withdraw/c2c/progress/other/1_a.png": LC,
        "../assets/icons/wallet/withdraw/c2c/progress/other/2.png": GC,
        "../assets/icons/wallet/withdraw/c2c/progress/other/2_a.png": kC,
        "../assets/icons/wallet/withdraw/c2c/progress/other/3.png": UC,
        "../assets/icons/wallet/withdraw/c2c/progress/other/3_a.png": MC,
        "../assets/icons/wallet/withdraw/c2c/progress/other/4.png": TC,
        "../assets/icons/wallet/withdraw/c2c/progress/other/4_a.png": QC,
        "../assets/icons/wallet/withdraw/c2c/safety.png": VC,
        "../assets/icons/wallet/withdraw/c2c/selectupi.png": OC,
        "../assets/icons/wallet/withdraw/c2c/seleteBank.png": PC,
        "../assets/icons/wallet/withdraw/c2c/successicon.png": FC,
        "../assets/icons/wallet/withdraw/c2c/uAmount.png": xC,
        "../assets/icons/wallet/withdraw/c2c/upi.png": NC,
        "../assets/icons/wallet/withdraw/c2c/upiline.png": HC,
        "../assets/icons/wallet/withdraw/c2c/uploadImg.png": YC,
        "../assets/icons/wallet/withdraw/c2c/uploadImg1.png": WC,
        "../assets/icons/wallet/withdraw/c2c/uploadVideo.png": JC,
        "../assets/icons/wallet/withdraw/c2c/uploadVideo1.png": KC,
        "../assets/icons/wallet/withdraw/c2c/wrong.png": XC,
        "../assets/icons/wallet/withdraw/c2c/wrong_1.png": jC,
        "../assets/icons/wallet/withdraw/checked.png": zC,
        "../assets/icons/wallet/withdraw/clear.png": ZC,
        "../assets/icons/wallet/withdraw/delete.png": qC,
        "../assets/icons/wallet/withdraw/fail.png": $C,
        "../assets/icons/wallet/withdraw/historyHead.png": e3,
        "../assets/icons/wallet/withdraw/line.png": t3,
        "../assets/icons/wallet/withdraw/pwd.png": s3,
        "../assets/icons/wallet/withdraw/refresh.png": n3,
        "../assets/icons/wallet/withdraw/safety.png": a3,
        "../assets/icons/wallet/withdraw/succeed.png": o3,
        "../assets/icons/wallet/withdraw/unchecked.png": A3,
        "../assets/icons/wallet/withdraw/widthdrawTypeBg.png": i3,
        "../assets/icons/wallet/withdraw/withdrawHistory/10.png": l3,
        "../assets/icons/wallet/withdraw/withdrawHistory/10_NS.png": r3,
        "../assets/icons/wallet/withdraw/withdrawHistory/20.png": c3,
        "../assets/icons/wallet/withdraw/withdrawHistory/20_NS.png": g3,
        "../assets/icons/wallet/withdraw/withdrawHistory/5.png": d3,
        "../assets/icons/wallet/withdraw/withdrawHistory/5_NS.png": p3,
        "../assets/icons/wallet/withdraw/withdrawHistory/6.png": _3,
        "../assets/icons/wallet/withdraw/withdrawHistory/6_NS.png": u3,
        "../assets/icons/wallet/withdraw/withdrawHistory/8.png": v3,
        "../assets/icons/wallet/withdraw/withdrawHistory/8_NS.png": m3,
        "../assets/icons/wallet/withdraw/withdrawHistory/state/0.png": h3,
        "../assets/icons/wallet/withdraw/withdrawHistory/state/1.png": w3,
        "../assets/icons/wallet/withdraw/withdrawHistory/state/2.png": b3,
        "../assets/icons/wallet/withdraw/withdrawHistory/state/3.png": C3,
        "../assets/icons/wallet/withdraw/withdrawType/1.png": y3,
        "../assets/icons/wallet/withdraw/withdrawType/10.png": f3,
        "../assets/icons/wallet/withdraw/withdrawType/3.png": B3,
        "../assets/icons/wallet/withdraw/withdrawType/3_selected.png": R3,
        "../assets/icons/wallet/withdraw/withdrawType/4.png": E3,
        "../assets/icons/wallet/withdraw/withdrawType/4_ns.png": D3,
        "../assets/icons/wallet/withdraw/withdrawType/5.png": I3,
        "../assets/icons/wallet/withdraw/withdrawType/5_selected.png": S3,
        "../assets/icons/wallet/withdraw/withdrawType/6.png": L3,
        "../assets/icons/wallet/withdraw/withdrawType/8.png": G3,
        "../assets/icons/wallet/withdraw/withdrawType/KBZpay.png": k3,
        "../assets/icons/wallet/withdraw/withdrawType/WavePay.png": U3,
        "../assets/icons/wallet/withdraw/₫.png": M3,
        "../assets/icons/wallet/withdrawHistory.png": T3,
        "../assets/icons/wallet/xian.png": Q3,
        "../assets/lottie/loading.json": V3,
        "../assets/styles/VIP/vip.scss": O3,
        "../assets/styles/_extend.scss": P3,
        "../assets/styles/_variables.scss": F3,
        "../assets/styles/always.scss": x3,
        "../assets/styles/common.scss": N3,
        "../assets/styles/fonts.scss": H3,
        "../assets/styles/lotteryrecord.scss": Y3,
        "../assets/styles/native.scss": W3,
        "../assets/styles/other/blackGoldHome/reset.scss": J3,
        "../assets/styles/other/blueHome/reset.scss": K3,
        "../assets/styles/other/damanHome/reset.scss": X3,
        "../assets/styles/other/electronic/home.scss": j3,
        "../assets/styles/other/electronic/reset.scss": z3,
        "../assets/styles/other/redHome/reset.scss": Z3,
        "../assets/styles/other/whiteGoldHome/reset.scss": q3,
        "../assets/styles/reset.scss": $3,
        "../assets/styles/tbox.scss": ey,
        "../assets/styles/theme/blue/img/wallet/withdraw/withdrawHistory/20.png": ty,
        "../assets/styles/theme/blue/img/wallet/withdraw/withdrawHistory/20_NS.png": sy,
        "../assets/styles/vant.scss": ny,
        "../assets/styles/vars.scss": ay,
        "../assets/styles/withdraw.scss": oy,
        "../assets/styles/xoxs.scss": Ay
    })[`../assets/${o}/${e}/${s}.${n}`], self.location).href,
    my = (e, s) => {
        var o;
        return (o = e.find(A => A.value === s)) == null ? void 0 : o.key
    },
    PL = (e, s) => {
        var n;
        return (n = e.find(o => o.type === s)) == null ? void 0 : n.typeName
    },
    FL = () => {
        const e = document.querySelector("meta[name=viewport]");
        if (e !== null) {
            let s = e.getAttribute("content"),
                n = /maximum\-scale=[0-9\.]+/g;
            n.test(s) ? s = s.replace(n, "maximum-scale=1.0") : s = [s, "maximum-scale=1.0"].join(", "), e.setAttribute("content", s)
        }
    },
    xL = () => /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
    NL = () => ({
        today: {
            start: pe().startOf("day").unix(),
            end: pe().endOf("day").unix()
        },
        yesterday: {
            start: pe().subtract(1, "days").startOf("day").unix(),
            end: pe().subtract(1, "days").endOf("day").unix()
        },
        tomorrow: {
            start: pe().subtract(-1, "days").startOf("day").unix(),
            end: pe().subtract(-1, "days").endOf("day").unix()
        },
        last7days: {
            start: pe().subtract(1, "weeks").startOf("day").unix(),
            end: pe().subtract(1, "days").endOf("day").unix()
        },
        thisMonth: {
            start: pe().startOf("months").unix(),
            end: pe().endOf("day").unix()
        },
        lastMonth: {
            start: pe().subtract(1, "months").startOf("month").unix(),
            end: pe().subtract(1, "months").endOf("month").unix()
        }
    }),
    HL = (e = "", s = "", n = "", o = "-") => [e.toString(), s.toString(), n.toString()].join(o),
    hy = e => {
        let s = (e == null ? void 0 : e.time) || "",
            n = (e == null ? void 0 : e.status) || 1,
            o = (e == null ? void 0 : e.format) || "YYYY-MM-DD HH:mm:ss",
            A = {
                key: "",
                value: []
            };

        function i() {
            return s ? pe(s) : pe()
        }
        let g, d;
        switch (n) {
            case 1:
                o = "YYYY-MM-DD", g = i().format(o), d = g.split("-");
                break;
            case 2:
                o = "HH:mm:ss", g = i().format(o), d = g.split(":");
                break;
            case 3:
                o = "YYYY-MM", g = i().format(o), d = g.split("-");
                break;
            default:
                g = i().format(o);
                let v = g.split(" "),
                    u = v[0].split("-"),
                    p = v[1].split(":");
                d = [...u, ...p];
                break
        }
        return A = {
            key: g,
            value: d
        }, A
    },
    YL = e => {
        const s = new Date(2022, 0, 1),
            n = new Date;
        return e == -1 && n.setTime(n.getTime() - 24 * 60 * 60 * 1e3), {
            minDate: s,
            maxDate: n
        }
    },
    wy = () => ({
        minDate: new Date(1970, 0, 1),
        maxDate: new Date
    }),
    hs = () => localStorage.getItem("language") || "zh";

function by(e) {
    let s = e === "ar" ? "ar" : "en",
        n = e === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = s, document.documentElement.dir = n
}
const ws = () => {
        const e = my(_s.languageCodes, localStorage.getItem("language") || "en");
        return e === void 0 ? "en" : e
    },
    Cy = e => {
        localStorage.setItem("language", e)
    },
    WL = (e, s, n) => {
        if (e) {
            let o = e.toString();
            if (n == 1) {
                let i = parseFloat(o).toFixed(2);
                i.charAt(i.length - 1) == "0" && (s = 1)
            }
            let A = o.indexOf(".");
            return A !== -1 ? o = o.substring(0, s + A + 1) : o = o.substring(0), parseFloat(o).toFixed(s)
        }
    },
    JL = e => {
        if (!e) return 0;
        let s = "";
        return e > 1e6 ? (e /= 1e6, s = "M") : e > 1e3 && (e /= 1e3, s = "K"), e.toString().indexOf(".") > -1 && (e = e.toFixed(2)), e.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") + s
    },
    KL = (e, s) => {
        var n = 0,
            o = e.toString(),
            A = s.toString();
        try {
            n += o.split(".")[1].length
        } catch {}
        try {
            n += A.split(".")[1].length
        } catch {}
        return Number(o.replace(".", "")) * Number(A.replace(".", "")) / Math.pow(10, n)
    },
    Se = e => {
        const s = Ge.global.t;
        let n, o = [214, 215, -1],
            A = [""];
        e.msgCode ? o.includes(e.msgCode) || A.includes(e.code) ? n = e.msg : n = s("code" + e.msgCode) : n = e.msg || "";
        let i = e.msgCode;
        n && Qe({
            message: `Error: ${i||""} 
 ` + n,
            wordBreak: "break-word"
        })
    },
    O = async e => await e.then(n => n && n.code !== 0 ? (Se(n), null) : n).catch(n => (Se(n), null)),
    _t = () => {
        let e = -1,
            s = navigator.userAgent.toLowerCase();
        return ms ? e = 0 : s.indexOf("android") != -1 || s.indexOf("adr") > -1 ? e = 1 : s.indexOf("iphone") != -1 ? e = 2 : s.indexOf("ipad") != -1 ? e = 3 : e = -1, e
    };

function $t(e, s = !1) {
    setTimeout(() => {
        if (s) {
            const n = window.open("", "_blank");
            n.document.open(), n.document.write(e), n.document.close()
        } else window.open(e)
    })
}
const ct = (e, s) => {
        const n = typeof e == "string";
        let o = n ? e : e.url;
        const A = n ? 1 : e.returnType,
            i = _t();
        if (s == 1 && [1, 2, 3].includes(i) && (o += "&home=1"), A === 2) return $t(o, !0);
        ms ? $t(o) : window.location.assign(o)
    },
    yy = e => Zs.MD5(e).toString().toUpperCase().slice(0, 32);

function gt(e) {
    if (typeof e != "object" || e === null) return e;
    if (Array.isArray(e)) return e.map(gt);
    const s = {};
    for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (s[n] = gt(e[n]));
    return s
}

function bs() {
    return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
        var s = Math.random() * 16 | 0,
            n = e === "x" ? s : s & 3 | 8;
        return n.toString(16)
    })
}
const fy = e => {
    const {
        protocol: s,
        host: n,
        hash: o
    } = window.location, A = s + "//" + n + "/" + o;
    let i = e || "/";
    window.location.href = A + i
};

function XL(e, s) {
    var i;
    const n = sessionStorage.getItem("areaPhoneLenList");
    if (!n) return !0;
    let A = (i = JSON.parse(n).find(g => g.area == "+" + e)) == null ? void 0 : i.len;
    if ((A == null ? void 0 : A.indexOf("-")) != -1) {
        let g = (A == null ? void 0 : A.toString().split("-")) || [];
        return (g == null ? void 0 : g.length) == 2 ? !(s < g[0] || s > g[1]) : !0
    }
    return A == s
}
const jL = () => "sit",
    zL = (e, s, n, o) => {
        let A = [],
            i = o == 0 ? 2 : 3;
        for (; A.length < e;) {
            var g = Math.floor(Math.random() * (n - s + 1)) + s;
            A.includes(g.toString().padStart(i, "0")) || A.push(g.toString().padStart(i, "0"))
        }
        return A
    },
    ZL = (e, s, n) => {
        let o = [];
        for (let A = e; A <= s; A++) {
            const i = A.toString().padStart(n, "0"),
                g = i[0];
            i.split("").every(d => d === g) && o.push(A.toString().padStart(n, "0"))
        }
        return o
    },
    qL = (e, s, n, o) => {
        let A = [];
        const i = n === "even";
        for (let g = e; g <= s; g++) g % 2 === 0 ? i && A.push(g.toString().padStart(o, "0")) : i || A.push(g.toString().padStart(o, "0"));
        return A
    },
    $L = (e, s) => {
        let n = [];
        for (let o = e; o <= s; o++) n.push(o.toString());
        return n
    },
    eG = (e, s, n, o) => {
        let A = [];
        const i = n === "big",
            g = Math.floor((s + e) / 2);
        for (let d = e; d <= s; d++) i ? d > g && A.push(d.toString().padStart(o, "0")) : d <= g && A.push(d.toString().padStart(o, "0"));
        return A
    },
    tG = e => {
        const s = new Set;
        for (let n of e) {
            if (s.has(n)) return !0;
            s.add(n)
        }
        return !1
    },
    sG = () => {
        if (navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")) {
            for (var e = document.querySelectorAll("input, textarea"), s = 0; s < e.length; s++) e[s].blur();
            return !0
        }
        return !1
    },
    By = e => {
        var s = {
            á: "a",
            à: "a",
            ả: "a",
            ã: "a",
            ạ: "a",
            ắ: "a",
            ằ: "a",
            ẳ: "a",
            ẵ: "a",
            ặ: "a",
            ấ: "a",
            ầ: "a",
            ẩ: "a",
            ẫ: "a",
            ậ: "a",
            é: "e",
            è: "e",
            ẻ: "e",
            ẽ: "e",
            ẹ: "e",
            ế: "e",
            ề: "e",
            ể: "e",
            ễ: "e",
            ệ: "e",
            í: "i",
            ì: "i",
            ỉ: "i",
            ĩ: "i",
            ị: "i",
            ó: "o",
            ò: "o",
            ỏ: "o",
            õ: "o",
            ọ: "o",
            ố: "o",
            ồ: "o",
            ổ: "o",
            ỗ: "o",
            ộ: "o",
            ớ: "o",
            ờ: "o",
            ở: "o",
            ỡ: "o",
            ợ: "o",
            ú: "u",
            ù: "u",
            ủ: "u",
            ũ: "u",
            ụ: "u",
            ứ: "u",
            ừ: "u",
            ử: "u",
            ữ: "u",
            ự: "u",
            ý: "y",
            ỳ: "y",
            ỷ: "y",
            ỹ: "y",
            ỵ: "y",
            đ: "d"
        };
        return e.toLowerCase().replace(/[áàảãạắằẳẵặấầẩẫậéèẻẽẹếềểễệíìỉĩịóòỏõọốồổỗộớờởỡợúùủũụứừửữựýỳỷỹỵđ]/g, function(n) {
            return s[n] || n
        })
    },
    nG = e => {
        if (e.length >= 7) return e.substring(0, 3) + "***" + e.substring(e.length - 3); {
            const s = "***",
                n = 7 - e.length,
                o = "*".repeat(n);
            return e.substring(0, Math.ceil((7 - n) / 2)) + s + o + e.substring(Math.ceil((7 - n) / 2))
        }
    };

function aG(e) {
    for (var s = e + "=", n = decodeURIComponent(document.cookie), o = n.split(";"), A = 0; A < o.length; A++) {
        for (var i = o[A]; i.charAt(0) === " ";) i = i.substring(1);
        if (i.indexOf(s) === 0) return i.substring(s.length, i.length)
    }
    return null
}
const oG = e => Math.round(e * 100) / 100,
    Ue = Ge.global.t,
    AG = (e, s) => {
        let n = new Date(e),
            o = n.getUTCFullYear(),
            A = n.getUTCMonth() + 1,
            i = n.getUTCDay(),
            g = n.getUTCDate(),
            d = n.getUTCHours(),
            v = n.getUTCMinutes(),
            u = n.getUTCSeconds(),
            p = [Ue("sunday"), Ue("monday"), Ue("tuesday"), Ue("wednesday"), Ue("thursday"), Ue("friday"), Ue("saturday")];
        return s.replace("yyyy", o.toString()).replace("MM", A.toString().padStart(2, "0")).replace("M", A.toString()).replace("dd", g.toString().padStart(2, "0")).replace("hh", d.toString().padStart(2, "0")).replace("mm", v.toString().padStart(2, "0")).replace("ss", u.toString().padStart(2, "0")).replace("w", p[i])
    },
    Cs = (e, s) => e ? e.length > s ? e.slice(0, s) + "..." : e.toUpperCase() : "",
    Ae = (e, s = "", n = 2) => {
        var o = /(\d{3})(?=\d)/g;
        if (e = parseFloat(e), !isFinite(e) || !e && e !== 0) return "";
        s = s || sessionStorage.getItem("dollarSign") || "", n = n ? ? 2;
        var A = Math.abs(e).toFixed(n),
            i = n ? A.slice(0, -1 - n) : A,
            g = i.length % 3,
            d = g > 0 ? i.slice(0, g) + (i.length > 3 ? "," : "") : "",
            v = n ? A.slice(-1 - n) : "",
            u = e < 0 ? "-" : "",
            p = ws();
        return p == "2" ? u + d + i.slice(g).replace(o, "$1,") + v + s : u + s + d + i.slice(g).replace(o, "$1,") + v
    },
    es = e => {
        let s = localStorage.getItem("number") || "",
            n = localStorage.getItem("numberType") || "",
            o = e || n + s;
        return o ? o.length > 9 ? "+" + o.replace(/^(\d{5})\d+(\d{4})$/, "$1****$2") : "+" + o.replace(/^(\d{4})\d+(\d{2})$/, "$1****$2") : ""
    },
    iG = e => e.replace(/^([\w]{0,4})[\w\d]*@([\w\d]{0,15}[\w\d\.]*)$/, (s, n, o) => {
        const A = n.length,
            i = o.length,
            g = i > 15 ? o.substring(i - 15) : o;
        return `${A>4?n.substring(0,4)+"****":n+"****"}${i>15?"":"@"}${g}`
    });

function ys(e) {
    return btoa(e)
}

function lG(e) {
    return atob(e)
}
const wt = {};
pe.extend($s);
const ts = localStorage.getItem("language") || "zh";
let je = "";
switch (ts) {
    case "zh_TC":
        je = "zh-tw";
        break;
    case "tc":
        je = "zh-tw";
        break;
    default:
        je = ts;
        break
}
je && pe.locale(je);
const Ot = (e, s = "YYYY-MM-DD HH:mm:ss") => {
        var n = 8,
            o = new Date().getTimezoneOffset();
        if (!e) return "";
        typeof e == "number" && (e = new Date(e * 1e3));
        var A = e.getTime(),
            i = new Date(A + o * 60 * 1e3 + n * 60 * 60 * 1e3),
            g = {
                "M+": i.getMonth() + 1,
                "D+": i.getDate(),
                "h+": i.getHours() % 12 === 0 ? 12 : i.getHours() % 12,
                "H+": i.getHours(),
                "m+": i.getMinutes(),
                "s+": i.getSeconds(),
                "q+": Math.floor((i.getMonth() + 3) / 3),
                S: i.getMilliseconds()
            },
            d = {
                0: "日",
                1: "一",
                2: "二",
                3: "三",
                4: "四",
                5: "五",
                6: "六"
            };
        /(Y+)/.test(s) && (s = s.replace(RegExp.$1, (i.getFullYear() + "").substr(4 - RegExp.$1.length))), /(E+)/.test(s) && (s = s.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "星期" : "周" : "") + d[e.getDay() + ""]));
        for (var v in g) new RegExp("(" + v + ")").test(s) && (s = s.replace(RegExp.$1, RegExp.$1.length === 1 ? g[v] : ("00" + g[v]).substr(("" + g[v]).length)));
        return s
    },
    fs = (e, s = 1, n = "YYYY-MM-DD HH:mm:ss") => {
        var o = e;
        return s === 1 ? (isNaN(o) && (o = 0), o = Math.round(parseInt(e.valueOf())), o = pe(o).format(n)) : s === 2 && (o = Pt(o)), o
    },
    Pt = e => {
        e = e.replace(/-/g, "/");
        var s = Math.round(parseInt(new Date(e).valueOf()) / 1e3);
        return isNaN(s) && (s = 0), s
    },
    Bs = e => parseInt(e / 1e3),
    it = e => {
        var s = new Date().getTimezoneOffset() / 60;
        if (s > 0) var n = 8 - s,
            n = n * 60 * 60,
            o = e - n - 46800 + n;
        else var n = 8 + s,
            n = n * 60 * 60,
            o = e - n;
        return o < 0 ? 0 : o
    },
    Rs = (e, s) => {
        let n = e;
        return n.startTime && (n.startTime = parseInt(n.startTime / 1e3 || 0), n.startTime = it(n.startTime)), n.endTime && (n.endTime = parseInt(n.endTime / 1e3 || 0), n.endTime = it(n.endTime)), s && s.length > 0 && s.map(o => {
            let A = n[o];
            A && (A = parseInt(A / 1e3 || 0), A = it(A))
        }), n
    },
    Ry = () => Math.ceil(new Date().getTime() / 1e3),
    Ey = () => pe(new Date).add(7, "day").unix(),
    Es = (e, s = "YYYY-MM-DD HH:mm:ss") => {
        let n = Ot(e, s);
        return pe().to(pe(n))
    };
let Ds = {
    filterDate: Ot,
    filterTimeStamp: fs,
    makeNewTimes: Pt,
    toUnix: Bs,
    toBeiJingTime: Rs,
    fromNow: Es
};

function Dy(e) {
    return e.replace(e[0], e[0].toUpperCase())
}

function Iy(e, s) {
    let n = {};
    return e.map(o => {
        n[o.value] = o.key
    }), s || s === 0 ? n[s] : ""
}
let Is = [];
for (let e in wt) {
    if (wt[e][0].auto === !1) break;
    let n = "filter" + Dy(e);
    Is.push([n, o => Iy(wt[e], o)])
}
Is.forEach(([e, s]) => {
    Ds[e] = n => s(n)
});
const Sy = Ds,
    Ly = Object.freeze(Object.defineProperty({
        __proto__: null,
        Timestamp: it,
        filterDate: Ot,
        filterTimeStamp: fs,
        fromNow: Es,
        getNowTime: Ry,
        makeNewTimes: Pt,
        nextWeek: Ey,
        refiter: Sy,
        toBeiJingTime: Rs,
        toUnix: Bs
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    rG = Ly,
    ut = Le({
        id: "activityStore",
        state: () => ({
            lotteryItemDetail: {},
            orderItem: {},
            redeemItem: {}
        }),
        getters: {
            getLotteryItemDetail: e => e.lotteryItemDetail,
            getOrderItem: e => e.orderItem,
            getRedeemItem: e => e.redeemItem
        },
        actions: {
            setLotteryItemDetail(e) {
                this.lotteryItemDetail = e
            },
            setOrderItem(e) {
                this.orderItem = e
            },
            setRedeemItem(e) {
                this.redeemItem = e
            }
        },
        persist: !0
    }),
    vt = Le({
        id: "commonStore",
        state: () => ({
            isLoading: !1,
            isRefreshToken: !1,
            teleportTarget: null,
            keepAliveList: ["RechargeHistory"]
        }),
        getters: {
            getLoading: e => e.isLoading,
            getIsRefreshToken: e => e.isRefreshToken,
            getKeepAliveList: e => e.keepAliveList
        },
        actions: {
            setLoading(e) {
                this.isLoading = e
            },
            setIsRefreshToken(e) {
                this.isRefreshToken = e
            },
            setKeepAliveList(e) {
                this.keepAliveList.includes(e) || this.keepAliveList.push(e)
            },
            reastKeepAliveList() {
                this.keepAliveList = []
            },
            removeKeepAliveList(e) {
                let s = gt(this.keepAliveList);
                const n = s.indexOf(e);
                n > -1 && (s.splice(n, 1), this.keepAliveList = s)
            }
        }
    }),
    Ft = Le({
        id: "homeStore",
        state: () => ({
            rankList: [],
            sitemsg: {},
            isRead: !1,
            lotterySoltList: {},
            cacheData: new Map,
            homeSetting: {},
            currentMenu: sessionStorage.getItem("clickedGameType") || "",
            currentTitle: ""
        }),
        getters: {
            getRankList: e => e.rankList,
            getSiteMsg: e => e.sitemsg,
            getReadState: e => e.isRead,
            getLotterySoltList: e => e.lotterySoltList,
            getCacheValue: e => s => e.cacheData.get(s),
            getCacheData: e => e.cacheData,
            getHomeSetting: e => e.homeSetting,
            getCurrentMenu: e => e.currentMenu,
            getCurrentTitle: e => e.currentTitle
        },
        actions: {
            setRankList(e) {
                this.rankList = e
            },
            setSiteMsg(e) {
                this.sitemsg = e
            },
            setReadState(e) {
                this.isRead = e
            },
            setLotterySoltList(e) {
                this.lotterySoltList = e
            },
            setCacheData(e, s) {
                this.cacheData.set(e, s)
            },
            setHomeSetting(e) {
                this.homeSetting = e
            },
            setCurrentMenu(e) {
                this.currentMenu = e
            },
            setCurrentTitle(e) {
                this.currentTitle = e
            }
        }
    }),
    Gy = "modulepreload",
    ky = function(e) {
        return "/" + e
    },
    ss = {},
    E = function(s, n, o) {
        if (!n || n.length === 0) return s();
        const A = document.getElementsByTagName("link");
        return Promise.all(n.map(i => {
            if (i = ky(i), i in ss) return;
            ss[i] = !0;
            const g = i.endsWith(".css"),
                d = g ? '[rel="stylesheet"]' : "";
            if (!!o)
                for (let p = A.length - 1; p >= 0; p--) {
                    const w = A[p];
                    if (w.href === i && (!g || w.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${i}"]${d}`)) return;
            const u = document.createElement("link");
            if (u.rel = g ? "stylesheet" : Gy, g || (u.as = "script", u.crossOrigin = ""), u.href = i, document.head.appendChild(u), g) return new Promise((p, w) => {
                u.addEventListener("load", p), u.addEventListener("error", () => w(new Error(`Unable to preload CSS for ${i}`)))
            })
        })).then(() => s()).catch(i => {
            const g = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (g.payload = i, window.dispatchEvent(g), !g.defaultPrevented) throw i
        })
    },
    lt = "/login",
    Uy = ["/500", "/", "/main/About/AboutDetail", "/rpwd", "/register", "/main/CustomerService", "/main/CustomerService/ServiceCollection"],
    My = ["home", "activity", "main", "promotion", "chat", "wallet"],
    qe = [];
let dt = Object.assign({
        "../views/activity/index.vue": () => E(() => Promise.resolve().then(() => r5), void 0),
        "../views/arWallet/index.vue": () => E(() =>
            import ("./page-arWallet-0be1e4d0.js"), ["assets/js/page-arWallet-0be1e4d0.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/native/index-d56959bc.js", "assets/js/en-5db85987.js", "assets/js/rus-ecb14220.js", "assets/js/vi-40bd560a.js", "assets/js/id-24cc3835.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-02b1fc1c.js", "assets/js/bra-1f3ea623.js", "assets/js/my-80d37f62.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-c7494ff8.js", "assets/js/pak-47641c9f.js", "assets/js/ar-1c9ff85b.js", "assets/css/index-cd33d71c.css"]),
        "../views/login/index.vue": () => E(() =>
            import ("./page-login-1e9bdaee.js").then(e => e.i), ["assets/js/page-login-1e9bdaee.js", "assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css", "assets/css/page-login-62a90934.css"]),
        "../views/main/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.i), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/promotion/index.vue": () => E(() =>
            import ("./page-promotion-0cb0b6f4.js").then(e => e.i), ["assets/js/page-promotion-0cb0b6f4.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-main-df5baccb.js", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css"]),
        "../views/register/index.vue": () => E(() =>
            import ("./page-register-297c5458.js"), ["assets/js/page-register-297c5458.js", "assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/js/native/index-d56959bc.js", "assets/js/en-5db85987.js", "assets/js/rus-ecb14220.js", "assets/js/vi-40bd560a.js", "assets/js/id-24cc3835.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-02b1fc1c.js", "assets/js/bra-1f3ea623.js", "assets/js/my-80d37f62.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-c7494ff8.js", "assets/js/pak-47641c9f.js", "assets/js/ar-1c9ff85b.js", "assets/css/index-62fe557d.css"]),
        "../views/rpwd/index.vue": () => E(() =>
            import ("./page-rpwd-e0182f5f.js"), ["assets/js/page-rpwd-e0182f5f.js", "assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css", "assets/js/page-main-df5baccb.js", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css", "assets/js/native/index-d56959bc.js", "assets/js/en-5db85987.js", "assets/js/rus-ecb14220.js", "assets/js/vi-40bd560a.js", "assets/js/id-24cc3835.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-02b1fc1c.js", "assets/js/bra-1f3ea623.js", "assets/js/my-80d37f62.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-c7494ff8.js", "assets/js/pak-47641c9f.js", "assets/js/ar-1c9ff85b.js", "assets/css/index-fe2a9aa2.css"]),
        "../views/test/index.vue": () => E(() =>
            import ("./page-test-758721ce.js").then(e => e.i), ["assets/js/page-test-758721ce.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-login-1e9bdaee.js", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/css/page-login-62a90934.css", "assets/css/page-test-9b89a9fd.css"]),
        "../views/vip/index.vue": () => E(() =>
            import ("./page-vip-ff11fbbb.js").then(e => e.i), ["assets/js/page-vip-ff11fbbb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-vip-5a4f6ef7.css"]),
        "../views/wallet/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.i), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"])
    }),
    kt = Object.assign({
        "../views/activity/ActivityDetail/index.vue": () => E(() => Promise.resolve().then(() => G5), void 0),
        "../views/activity/Championship/index.vue": () => E(() => Promise.resolve().then(() => J5), void 0),
        "../views/activity/DailySignIn/index.vue": () => E(() => Promise.resolve().then(() => i6), void 0),
        "../views/activity/DailyTasks/index.vue": () => E(() => Promise.resolve().then(() => Q6), void 0),
        "../views/activity/FirstRecharge/index.vue": () => E(() => Promise.resolve().then(() => F6), void 0),
        "../views/activity/MemberPackage/index.vue": () => E(() => Promise.resolve().then(() => BR), void 0),
        "../views/activity/PointMall/index.vue": () => E(() => Promise.resolve().then(() => rE), void 0),
        "../views/activity/Turntable/index.vue": () => E(() => Promise.resolve().then(() => YE), void 0),
        "../views/home/AllGames/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.i), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/AllLotteryGames/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.f), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/AllOnlineGames/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.g), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/Messages/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.h), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/game/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.j), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/main/About/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.a), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/Avatar/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.b), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/BetRecords/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.c), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/CustomerService/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.d), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/Feedback/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.e), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/GameStats/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.f), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/GoogleVerify/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.g), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/Guide/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.h), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/InvitationBonus/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.j), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/Language/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.k), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/Laundry/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.l), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/MyCoins/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.m), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/MyCps/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.n), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/NickName/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.o), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/Notification/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.p), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/PointDetail/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.q), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/RedeemGift/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.r), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/SettingCenter/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.s), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/StrongBox/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.t), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/SuperJackpot/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.v), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/withdraw/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.w), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/promotion/CommissionDetail/index.vue": () => E(() =>
            import ("./page-promotion-0cb0b6f4.js").then(e => e.a), ["assets/js/page-promotion-0cb0b6f4.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-main-df5baccb.js", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css"]),
        "../views/promotion/MyCommission/index.vue": () => E(() =>
            import ("./page-promotion-0cb0b6f4.js").then(e => e.b), ["assets/js/page-promotion-0cb0b6f4.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-main-df5baccb.js", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css"]),
        "../views/promotion/MyInvitation/index.vue": () => E(() =>
            import ("./page-promotion-0cb0b6f4.js").then(e => e.c), ["assets/js/page-promotion-0cb0b6f4.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-main-df5baccb.js", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css"]),
        "../views/promotion/MyReceive/index.vue": () => E(() =>
            import ("./page-promotion-0cb0b6f4.js").then(e => e.d), ["assets/js/page-promotion-0cb0b6f4.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-main-df5baccb.js", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css"]),
        "../views/promotion/PromotionRule/index.vue": () => E(() =>
            import ("./page-promotion-0cb0b6f4.js").then(e => e.e), ["assets/js/page-promotion-0cb0b6f4.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-main-df5baccb.js", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css"]),
        "../views/promotion/PromotionShare/index.vue": () => E(() =>
            import ("./page-promotion-0cb0b6f4.js").then(e => e.f), ["assets/js/page-promotion-0cb0b6f4.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-main-df5baccb.js", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css"]),
        "../views/promotion/RebateRatio/index.vue": () => E(() =>
            import ("./page-promotion-0cb0b6f4.js").then(e => e.g), ["assets/js/page-promotion-0cb0b6f4.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-main-df5baccb.js", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css"]),
        "../views/promotion/Server/index.vue": () => E(() =>
            import ("./page-promotion-0cb0b6f4.js").then(e => e.h), ["assets/js/page-promotion-0cb0b6f4.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-main-df5baccb.js", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css"]),
        "../views/promotion/Subordinate/index.vue": () => E(() =>
            import ("./page-promotion-0cb0b6f4.js").then(e => e.j), ["assets/js/page-promotion-0cb0b6f4.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-main-df5baccb.js", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css"]),
        "../views/promotion/TeamPartner/index.vue": () => E(() =>
            import ("./page-promotion-0cb0b6f4.js").then(e => e.k), ["assets/js/page-promotion-0cb0b6f4.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-main-df5baccb.js", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css"]),
        "../views/promotion/TeamReport/index.vue": () => E(() =>
            import ("./page-promotion-0cb0b6f4.js").then(e => e.l), ["assets/js/page-promotion-0cb0b6f4.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-main-df5baccb.js", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css"]),
        "../views/vip/RebateDetails/index.vue": () => E(() =>
            import ("./page-vip-ff11fbbb.js").then(e => e.a), ["assets/js/page-vip-ff11fbbb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-vip-5a4f6ef7.css"]),
        "../views/vip/RecordVsruleHistory/index.vue": () => E(() =>
            import ("./page-vip-ff11fbbb.js").then(e => e.b), ["assets/js/page-vip-ff11fbbb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-vip-5a4f6ef7.css"]),
        "../views/wallet/BankStatus/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.a), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/CancelRecharge/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.b), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/OrderCancel/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.c), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/OtherPay/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.d), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/Recharge/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.e), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/RechargeDetail/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.f), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/RechargeHistory/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.g), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/RechargeUsdt/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.h), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/TobePay/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.j), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/TransAction/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.k), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/Withdraw/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.l), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/WithdrawHistory/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.m), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"])
    }),
    Ut = Object.assign({
        "../views/activity/Championship/ChampionshipDetail/index.vue": () => E(() => Promise.resolve().then(() => E7), void 0),
        "../views/activity/DailySignIn/Record/index.vue": () => E(() => Promise.resolve().then(() => M7), void 0),
        "../views/activity/DailySignIn/Rules/index.vue": () => E(() => Promise.resolve().then(() => W7), void 0),
        "../views/activity/DailyTasks/Record/index.vue": () => E(() => Promise.resolve().then(() => $7), void 0),
        "../views/activity/MemberPackage/Rules/index.vue": () => E(() => Promise.resolve().then(() => B8), void 0),
        "../views/activity/PointMall/AddAddress/index.vue": () => E(() => Promise.resolve().then(() => k8), void 0),
        "../views/activity/PointMall/LotteryActivity/index.vue": () => E(() => Promise.resolve().then(() => V8), void 0),
        "../views/activity/PointMall/LotteryDetail/index.vue": () => E(() => Promise.resolve().then(() => TD), void 0),
        "../views/activity/PointMall/MyLottery/index.vue": () => E(() => Promise.resolve().then(() => zD), void 0),
        "../views/activity/PointMall/MyOrders/index.vue": () => E(() => Promise.resolve().then(() => rI), void 0),
        "../views/activity/PointMall/OrderDetail/index.vue": () => E(() => Promise.resolve().then(() => PI), void 0),
        "../views/activity/PointMall/ReceiveLottery/index.vue": () => E(() => Promise.resolve().then(() => aS), void 0),
        "../views/activity/PointMall/Record/index.vue": () => E(() => Promise.resolve().then(() => wS), void 0),
        "../views/activity/PointMall/Redeem/index.vue": () => E(() => Promise.resolve().then(() => A9), void 0),
        "../views/activity/PointMall/Rules/index.vue": () => E(() => Promise.resolve().then(() => b9), void 0),
        "../views/activity/Turntable/Detail/index.vue": () => E(() => Promise.resolve().then(() => V9), void 0),
        "../views/activity/Turntable/Introduce/index.vue": () => E(() => Promise.resolve().then(() => $9), void 0),
        "../views/activity/Turntable/Rules/index.vue": () => E(() => Promise.resolve().then(() => rL), void 0),
        "../views/home/AllLotteryGames/4D/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.k), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/AllLotteryGames/4DLotteryResults/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.l), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/AllLotteryGames/4DOdds/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.m), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/AllLotteryGames/4DPlay/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.n), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/AllLotteryGames/4DmyGame/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.o), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/AllLotteryGames/5D/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.p), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/AllLotteryGames/BettingRecord5D/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.q), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/AllLotteryGames/BettingRecordK3/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.r), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/AllLotteryGames/BettingRecordWin/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.s), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/AllLotteryGames/BettingRecordWinTrx/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.t), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/AllLotteryGames/Binguo/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.x), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/AllLotteryGames/BinguoCount/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.y), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/AllLotteryGames/BinguoRecord/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.z), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/AllLotteryGames/ChangLong/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.A), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/AllLotteryGames/K3/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.B), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/AllLotteryGames/NewVietnam/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.C), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/AllLotteryGames/Play/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.E), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/AllLotteryGames/WinGo/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.G), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/AllLotteryGames/WinTrx/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.H), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/AllLotteryGames/WinTrxIframe/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.I), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/AllLotteryGames/XoSo/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.J), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/AllLotteryGames/XoSoRecord/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.M), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/AllLotteryGames/XoSoRecordF/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.N), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/Messages/MessageDetail/index.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.O), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/main/About/AboutDetail/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.x), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/CustomerService/ServiceCollection/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.y), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/GoogleVerify/BindGoogle/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.z), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/InvitationBonus/Record/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.A), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/InvitationBonus/Rule/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.B), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/Laundry/LaundryRecord/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.C), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/Laundry/LaundryRule/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.D), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/SettingCenter/BindEmail/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.E), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/SettingCenter/LoginPassword/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.F), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/SettingCenter/UpdatePhone/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.G), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/StrongBox/StrongBoxAbout/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.H), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/StrongBox/StrongBoxRecord/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.I), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/SuperJackpot/rule/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.J), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/main/SuperJackpot/star/index.vue": () => E(() =>
            import ("./page-main-df5baccb.js").then(e => e.K), ["assets/js/page-main-df5baccb.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css"]),
        "../views/promotion/MyCommission/MyCommissionDetail/index.vue": () => E(() =>
            import ("./page-promotion-0cb0b6f4.js").then(e => e.m), ["assets/js/page-promotion-0cb0b6f4.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-main-df5baccb.js", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css"]),
        "../views/promotion/MyInvitation/InvitationDetail/index.vue": () => E(() =>
            import ("./page-promotion-0cb0b6f4.js").then(e => e.n), ["assets/js/page-promotion-0cb0b6f4.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-main-df5baccb.js", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css"]),
        "../views/promotion/Server/ServiceCollection/index.vue": () => E(() =>
            import ("./page-promotion-0cb0b6f4.js").then(e => e.o), ["assets/js/page-promotion-0cb0b6f4.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-main-df5baccb.js", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css"]),
        "../views/promotion/TeamPartner/Invitation/index.vue": () => E(() =>
            import ("./page-promotion-0cb0b6f4.js").then(e => e.p), ["assets/js/page-promotion-0cb0b6f4.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-main-df5baccb.js", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css"]),
        "../views/promotion/TeamReport/TeamReportDetail/index.vue": () => E(() =>
            import ("./page-promotion-0cb0b6f4.js").then(e => e.q), ["assets/js/page-promotion-0cb0b6f4.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-main-df5baccb.js", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css"]),
        "../views/wallet/RechargeHistory/RechargeUpiDetail/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.n), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/Withdraw/AddBankCard/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.p), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/Withdraw/AddKbz/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.q), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/Withdraw/AddPIX/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.r), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/Withdraw/AddType4/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.s), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/Withdraw/AddUSDT/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.t), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/Withdraw/AddUpi/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.u), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/Withdraw/AddUpi_1/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.v), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/Withdraw/AddWave/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.w), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/Withdraw/BankCard/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.x), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/Withdraw/C2cDetail/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.y), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/Withdraw/ChooseBank/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.o), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/Withdraw/PIX/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.z), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/Withdraw/Type4/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.A), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/Withdraw/USDT/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.B), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/Withdraw/Upi/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.C), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/Withdraw/c2cCancelWithdrawal/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.D), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/Withdraw/c2cWrongAmount/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.E), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"]),
        "../views/wallet/WithdrawHistory/WithdrawHistoryDetail/index.vue": () => E(() =>
            import ("./page-wallet-c470b6bd.js").then(e => e.F), ["assets/js/page-wallet-c470b6bd.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/page-home-c0ac7f2c.js", "assets/css/page-home-fcf6e273.css", "assets/js/page-login-1e9bdaee.js", "assets/css/page-login-62a90934.css", "assets/js/page-test-758721ce.js", "assets/css/page-test-9b89a9fd.css", "assets/js/page-promotion-0cb0b6f4.js", "assets/js/page-main-df5baccb.js", "assets/css/page-main-4c36ea73.css", "assets/css/page-promotion-c08a519c.css", "assets/css/page-wallet-2d3c8498.css"])
    }),
    Ss = Object.assign({
        "../views/home/other/blackGoldHome.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.P), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/other/blueHome.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.Q), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/other/damanHome.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.R), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/other/electronic.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.S), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/other/redHome.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.T), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"]),
        "../views/home/other/whiteGoldHome.vue": () => E(() =>
            import ("./page-home-c0ac7f2c.js").then(e => e.U), ["assets/js/page-home-c0ac7f2c.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/css/page-home-fcf6e273.css"])
    });
dt["../views/home/index.vue"] = Ss["../views/home/other/electronic.vue"];
Ss = null;
const xt = [];
for (const e in dt) {
    const s = e.split("/")[2];
    qe.push({
        path: s === "home" ? "/" : `/${s}`,
        name: s,
        component: dt[e],
        meta: {
            title: s,
            tabBar: My.includes(s),
            keepAlive: xt.includes(s)
        }
    })
}
dt = null;
for (const e in kt) {
    const s = "/" + e.split("/")[2] + "/" + e.split("/")[3],
        n = e.split("/")[3];
    if (s.includes("components")) break;
    qe.push({
        path: s,
        name: n,
        component: kt[e],
        meta: {
            title: e.split("/")[3],
            parent: e.split("/")[2],
            tabBar: !1,
            keepAlive: xt.includes(n)
        }
    })
}
kt = null;
for (const e in Ut) {
    const s = "/" + e.split("/")[2] + "/" + e.split("/")[3] + "/" + e.split("/")[4],
        n = e.split("/")[3] + "-" + e.split("/")[4];
    if (s.includes("components")) break;
    qe.push({
        path: s,
        name: n,
        component: Ut[e],
        meta: {
            title: e.split("/")[4],
            parent: e.split("/")[3],
            tabBar: !1,
            keepAlive: xt.includes(n)
        }
    })
}
Ut = null;
const Ty = [{
    path: "/:pathMatch(.*)",
    redirect: "/",
    meta: {
        title: "NotFound",
        tabBar: !1,
        keepAlive: !1
    }
}];
qe.push(...Ty);
const Fe = en({
    history: tn("/"),
    routes: qe,
    scrollBehavior(e, s, n) {
        return {
            top: 0
        }
    }
});
Fe.beforeEach((e, s, n) => {
    const o = ve();
    let A = ["/", "/main", "/activity", "/promotion", "/wallet", "/main/About/AboutDetail", "/main/SettingCenter/LoginPassword", "/main/SettingCenter"];
    if (Number(localStorage.getItem("isToLogin")) == 1 || A.includes(s.path) && e.path === lt) return localStorage.setItem("isToLogin", "2"), n();
    if (e.path === lt) return o.token ? n("/") : n();
    if (Uy.includes(e.path)) return n();
    if (!o.token) return n({
        path: lt,
        replace: !0
    });
    n()
});
const r = {
        GetHomeWebSite: "/GetAppDownloadUrl",
        GetBannerList: "/GetBannerList",
        GetHotGameList: "/GetHotGameList",
        GetClicksTopGameList: "/GetClicksTopGameList",
        GetThirdGameList: "/GetThirdGameList",
        GetThirdGameCategory: "/GetThirdGameCategory",
        GetSmallGameOrFishList: "/GetSmallGameOrFishList",
        GetGameCategoryList: "/GetGameCategoryList",
        GetLotteryCategoryList: "/GetLotteryCategoryList",
        GetAllGameList: "/GetAllGameList",
        GetVideWithChildGame: "/GetVideWithChildGame",
        GetHotLotteryList: "/GetHotLotteryList",
        GetGameUrl: "/GetGameUrl",
        GetMessageList: "/GetMessageList",
        SetOneMessageState: "/SetOneMessageState",
        SetAllMessageState: "/SetAllMessageState",
        GetHomeSettings: "/GetHomeSettings",
        GetElectronWithChildGame: "/GetElectronWithChildGame",
        OneKeyMarkAllData: "/OneKeyMarkAllData",
        IsCanAppDownload: "/IsCanAppDownload",
        GetDailyProfitRank: "/GetDailyProfitRank",
        GetSlotGamesList: "/GetSlotGamesList",
        GetSiteMessageList: "/GetSiteMessageList",
        GetSiteMessage: "/GetSiteMessage",
        GetSafeInfo: "/GetSafeInfo",
        GetWealthState: "/GetWealthState",
        GetSafeAmount: "/GetSafeAmount",
        SetSafeBack: "/SetSafeBack",
        GetSafeUserAmount: "/GetSafeUserAmount",
        SetSafeInto: "/SetSafeInto",
        GetSafeList: "/GetSafeList",
        GetSafeLogList: "/GetSafeLogList",
        GetActivityList: "/GetActivityList",
        GetActivityDetails: "/GetActivityDetails",
        GetDailyTaskList: "/GetTaskList",
        GetContinuousSignInRecharges: "/GetContinuousSignInRecharges",
        GetProductList: "/GetProductList",
        GetBannerTypeList: "/GetBannerTypeList",
        GetIntegralLogList: "/GetIntegralLogList",
        GetProductOrderList: "/GetProductOrderList",
        GetProductOrderDetails: "/GetProductOrderDetails",
        SetProductOrder: "/SetProductOrder",
        SetContinuousSinIn: "/SetContinuousSinIn",
        GetContinuousSinInList: "/GetContinuousSinInList",
        CancelOrderData: "/CancelOrderData",
        GetUserAddress: "/GetUserAddress",
        UpdateUserAddress: "/UpdateUserAddress",
        GetProductRules: "/GetProductRules",
        GetPointMallState: "/GetPointMallState",
        GetPointsLotteryList: "/GetPointsLotteryList",
        GetPointsLotteryDetails: "/GetPointsLotteryDetails",
        GetPointsLotteryOrderList: "/GetPointsLotteryOrderList",
        GetPointLotteryUserAddress: "/GetPointLotteryUserAddress",
        AddPointsLotteryUserAddress: "/AddPointsLotteryUserAddress",
        UpdatePointLotteryUserAddress: "/UpdatePointLotteryUserAddress",
        SetDefaultPointsLotteryUserAddress: "/SetDefaultPointsLotteryUserAddress",
        DeletePointsLotteryUserAddress: "/DeletePointsLotteryUserAddress",
        ReceiveAllGrandAward: "/ReceiveAllGrandAward",
        JoinPointsLottery: "/JoinPointsLottery",
        GetPrize: "/GetPrize",
        NeedPopupFirstRecharge: "/NeedPopupFirstRecharge",
        ReceiveFirstRechargeReward: "/ReceiveFirstRechargeReward",
        GetFirstRechargeList: "/GetFirstRechargeList",
        GetActiveSetting: "/GetActiveSetting",
        GetWeeklyAwardList: "/GetWeeklyAwardList",
        ReceiveWeeklyAward: "/ReceiveWeeklyAward",
        GetWeeklyAwardRecordList: "/GetWeeklyAwardRecordList",
        SaveUserGuidelines: "/SaveUserGuidelines",
        SaveUserDayRequest: "/SaveUserDayRequest",
        GetNewbieGiftPackage: "/GetNewbieGiftPackage",
        ReceiveAward: "/ReceiveAward",
        GetDailyAwardCount: "/GetDailyAwardCount",
        GetDailyAwardList: "/GetDailyAwardList",
        ReceiveDailyAward: "/ReceiveDailyAward",
        GetDailyAwardRecordList: "/GetDailyAwardRecordList",
        NewPromotion: "/NewPromotion",
        PromotionMytem: "/PromotionMytem",
        PromotionTutorial: "/PromotionTutorial",
        GetUrlAddress: "/GetUrlAddress",
        GetPromotionRecord: "/GetPromotionRecord",
        GetAgentServiceList: "/GetAgentServiceList",
        GetTotalRebateRules: "/GetTotalRebateRules",
        GetCommissionDetails: "/GetCommissionDetails",
        GetTeamDayReport: "/TeamDayReport",
        GetPartnerRewards: "/GetPartnerRewards",
        GetPartnerRewardsDeatilList: "/GetPartnerRewardsDeatilList",
        Login: "/Login",
        RefreshToken: "/RefreshToken",
        GetUserInfo: "/GetUserInfo",
        SmsVerifyCode: "/SmsVerifyCode",
        Register: "/Register",
        RegisterState: "/RegisterState",
        LoginOff: "/LoginOff",
        ForgetPassword: "/ForgetPassword",
        ResetPassword: "/ResetPassword",
        EditUserPhoto: "/EditUserPhoto",
        EditNickName: "/EditNickName",
        VerifyPhoneCode: "/VerifyPhoneCode",
        ResetPhoneNum: "/ResetPhoneNum",
        captcha: "/Captcha",
        checkCaptcha: "/Validate",
        GetLoadedSetting: "/GetLoadedSetting",
        ReceiveReturnAwards: "/ReceiveReturnAwards",
        ConversionRedpage: "/ConversionRedpage",
        GetRedpagePageList: "/GetRedpagePageList",
        GameStatis: "/GameStatis",
        GetNewMyEmerdList: "/GetNewMyEmerdList",
        GetTaskList: "/GetTaskList",
        SetTaskOrder: "/SetTaskOrder",
        GetCurrentActivityTasks: "/GetCurrentActivityTasks",
        GetCurrentActivityLevel1People: "/GetCurrentActivityLevel1People",
        GetGoogleVerify: "/GetGoogleVerify",
        GetCustomerServiceTypelist: "/GetCustomerServiceTypelist",
        GetAgentServiceTypeList: "/GetAgentServiceTypeList",
        GetCustomerServiceList: "/GetCustomerServiceList",
        GetIsExistGrandPrizeReward: "/GetIsExistGrandAward",
        ThirdGameReceiveGrandPrizeReward: "/ReceiveGrandAward",
        GetThirdGameRewardsRecordPageList: "/GetGrandAwardPageList",
        GetReWordConfigList: "/GetGrandAwardConfigList",
        GetThirdGameAwardRecordPageList: "/GetHomeGrandAwardPageList",
        bindEmail: "/BindEmail",
        VerifyEmailCode: "/VerifyEmailCode",
        BindPhone: "/BindPhone",
        EmailVerifyCode: "/EmailVerifyCode",
        BindGoogleVerify: "/BindGoogleVerify",
        ResetGoogleVerify: "/ResetGoogleVerify",
        CloseGoogleVerify: "/CloseGoogleVerify",
        RecoverBalance: "/RecoverBalance",
        GetCustomerServiceGroup: "/GetCustomerServiceGroup",
        GetProtocols: "/GetProtocols",
        GetAgreement: "/GetAgreement",
        GetPlayingGuide: "/GetPlayingGuide",
        SubmitSuggest: "/SubmitSuggest",
        GetBalance: "/GetBalance",
        GetWallet: "/GetWallet",
        GetAllwallets: "/GetAllwallets",
        GetUserAmount: "/GetUserAmount",
        GetRechargeRecord: "/GetRechargeRecord",
        GetC2CRechargeRecord: "/GetC2CRechargeRecord",
        GetWithdrawLog: "/GetWithdrawLog",
        GetTransactions: "/GetTransactions",
        GetTransactionsTypes: "/GetTransactionsTypes",
        GetWithdrawalTypes: "/GetWithdrawalTypes",
        GetBankList: "/GetBankList",
        getWithdrawals: "/getWithdrawals",
        NewSetWithdrawal: "/NewSetWithdrawal",
        SetWithdrawalBankCard: "/SetWithdrawalBankCard",
        DeleteBankCard: "/DeleteBankCard",
        SetWithdrawalUsdt: "/SetWithdrawalUsdt",
        SetWithdrawalWallet: "/SetWithdrawalWallet",
        SetWithdrawalCpf: "/SetWithdrawalCpf",
        GetUserRealName: "/GetUserRealName",
        WinGoGetTypeList: "/GetTypeList",
        WinGoGetGameIssue: "/GetGameIssue",
        WinGoGetNoaverageEmerdList: "/GetNoaverageEmerdList",
        WinGoGetMyEmerdList: "/GetMyEmerdList",
        WinGoGetEmerdList: "/GetEmerdList",
        WinGoGameBetting: "/GameBetting",
        WinGoGetWinTheLotteryResult: "/GetWinTheLotteryResult",
        GetLastFiveIssueNumberResult: "/GetLastFiveIssueNumberResult",
        GetRuleByTypeId: "/GetRuleByTypeId",
        WinTxrGetTRXtypeList: "/GetTRXtypeList",
        WinTxrGetTRXGameIssue: "/GetTRXGameIssue",
        WinTxrGetTRXNoaverageEmerdList: "/GetTRXNoaverageEmerdList",
        WinTxrGetTRXMyEmerdList: "/GetTRXMyEmerdList",
        WinTxrGetEmerdList: "/GetTRXEmerdList",
        WinTxrGameTRXBetting: "/GameTRXBetting",
        GetTrxWinTheLotteryResult: "/GetTrxWinTheLotteryResult",
        GetTRXRuleByTypeId: "/GetTRXRuleByTypeId",
        GetXosoGameBaseData: "/GetXosoGameBaseData",
        GetVietnamAreList: "/GetListGameConfig",
        GetDayIssueNolist: "/GetIssueNoList",
        GetXosoOdds: "/GetListXosoOdds",
        GetXosoResult: "/GetXosoResultPageList",
        GetXosoUserRecord: "/GetXosoRecordPageList",
        XosoBetting: "/AddXosoBetting",
        GetListUserResult: "/GetUserResultList",
        CancelBetOrder: "/CancelXosoBetOrder",
        GetXosoAreGamePlay: "/GetXosoAreaPlay",
        GetXosoAreaPlayOdd: "/GetXosoAreaPlayOdd",
        GetFXosoIssueNoList: "/GetFXosoIssueNoList",
        GetFXosoAreaPlay: "/GetFXosoAreaPlay",
        GetFXosoAreaPlayOdd: "/GetFXosoAreaPlayOdd",
        GetFXosoResultPageList: "/GetFXosoResultPageList",
        GetFXosoResult: "/GetFXosoResult",
        GetFXosoRecordPageList: "/GetFXosoRecordPageList",
        AddFXosoBetting: "/AddFXosoBetting",
        GetFXosoUserResult: "/GetFXosoUserResult",
        WinGetWinsUserAmount: "/GetWinsUserAmount",
        GetK3TypeList: "/GetK3TypeList",
        GetGameK3Issue: "/GetGameK3Issue",
        GetK3OneEmerd: "/GetK3OneEmerd",
        GetK3OddsList: "/GetK3OddsList",
        K3GameBetting: "/K3GameBetting",
        GetK3NoaverageEmerdList: "/GetK3NoaverageEmerdList",
        GetMyK3EmerdList: "/GetMyK3EmerdList",
        GetK3TheLotteryResult: "/GetK3TheLotteryResult",
        GetK3RuleByTypeId: "/GetK3RuleByTypeId",
        Get5DtypeList: "/Get5DtypeList",
        GetGame5DIssue: "/GetGame5DIssue",
        Get5DOneEmerd: "/Get5DOneEmerd",
        Get5DOddsList: "/Get5DOddsList",
        Game5DBetting: "/Game5DBetting",
        GetNoaverage5DEmerdList: "/GetNoaverage5DEmerdList",
        Get5DEmerdList: "/Get5DEmerdList",
        GetMy5DEmerdList: "/GetMy5DEmerdList",
        GetD5TheLotteryResult: "/GetD5TheLotteryResult",
        Get5DRuleByTypeId: "/Get5DRuleByTypeId",
        GetLongDragon: "/GetLongDragon",
        GetDateTimeScopeTypes: "/GetDateTimeScopeTypes",
        GetSettingByKey: "/GetSettingByKey",
        GetPayTypeName: "/GetPayTypeName",
        GetRechargeTypes: "/GetRechargeTypes",
        NewSetRechargesBankOrder: "/NewSetRechargesBankOrder",
        UpRechargesBankOrder: "/UpRechargesBankOrder",
        UpdateRechargesUpiOrder: "/UpdateRechargesUpiOrder",
        GetBankOrder: "/GetBankOrder",
        GetBankOrderInfo: "/GetBankOrderInfo",
        C2CRechargeCancel: "/C2CRechargeCancel",
        C2CRecharge: "/C2CRecharge",
        C2CRechargeGetOrderDetail: "/C2CRechargeGetOrderDetail",
        C2CRechargeConfirm: "/C2CRechargeConfirm",
        C2CRechargeGetPayingDetail: "/C2CRechargeGetPayingDetail",
        GetC2CRechargeAwardAmountList: "/GetC2CRechargeAwardAmountList",
        GetC2CCancelReason: "/GetC2CCancelReason",
        C2CRechargeAppeal: "/C2CRechargeAppeal",
        RechargesUsdtOrder: "/RechargesUsdtOrder",
        GetUsdtOrder: "/GetUsdtOrder",
        RechargesUpiOrder: "/RechargesUpiOrder",
        GetUpiOrder: "/GetUpiOrder",
        UpdateRechargesUsdtOrder: "/UpdateRechargesUsdtOrder",
        CheckFirstPixRecharge: "/CheckFirstPixRecharge",
        ARBWalletMemberInfo: "/ARBWalletMemberInfo",
        ARBWalletActivate: "/ARBWalletActivate",
        ARBWalletEnter: "/ARBWalletEnter",
        GetARPayUrl: "/GetARPayUrl",
        ThirdPay: "/ThirdPay",
        NewSetBankQRCodeOrder: "/NewSetBankQRCodeOrder",
        GetCodeModel: "/GetCodeModel",
        SetWithdrawalUPI: "/SetWithdrawalUPI",
        GetC2CWithdrawRecord: "/GetC2CWithdrawRecord",
        GetC2CWithdrawOrderDetail: "/GetC2CWithdrawOrderDetail",
        C2CWithdrawConfirm: "/C2CWithdrawConfirm",
        C2CWithdrawAppeal: "/C2CWithdrawAppeal",
        GetNewUPICanBindCardList: "/GetNewUPICanBindCardList",
        SetWithdrawalNewUPI: "/SetWithdrawalNewUPI",
        GetNewUPIBindMobileNo: "/GetNewUPIBindMobileNo",
        C2CWithdrawRematch: "/C2CWithdrawRematch",
        GetC2CWithdrawRecommendedAmount: "/GetC2CWithdrawRecommendedAmount",
        ChangeC2CWithdrawOrderAmount: "/ChangeC2CWithdrawOrderAmount",
        C2CWithdrawalCancel: "/C2CWithdrawalCancel",
        C2CWithdrawOrderAmountError: "/C2CWithdrawOrderAmountError",
        GetVipUsers: "/GetVipUsers",
        GetPageListVipUserRecord: "/GetPageListVipUserRecord",
        GetListVipLevel: "/GetListVipLevel",
        GetListVipUserRewards: "/GetListVipUserRewards",
        GetVipUserLevelDetail: "/GetVipUserLevelDetail",
        AddReceiveAward: "/AddReceiveAward",
        GetAllVipLevelList: "/GetAllVipLevelList",
        GetCodeWashAmount: "/GetCodeWashAmount",
        AddCodeWashRecord: "/AddCodeWashRecord",
        GetCodeWashRecordList: "/GetCodeWashRecordList",
        GetCodeWashRule: "/GetCodeWashRule",
        UploadImage: "/UploadImage",
        UploadVideo: "/UploadVideo",
        GetMyBingo18HistoryBetting: "/GetMyBingo18HistoryBetting",
        GetBinguoGameConfig: "/GetBingo18GameConfig",
        GetGameBingo18Issue: "/GetGameBingo18Issue",
        GetBingo18OddsList: "/GetBingo18OddsList",
        GetBingo18LastGameResult: "/GetBingo18LastGameResult",
        GetBingo18BetAmount: "/GetBingo18BetAmount",
        Bingo18Betting: "/Bingo18Betting",
        GetBingo18Last50Result: "/GetBingo18Last50Result",
        GetTrendstatistics: "/GetTrendstatistics",
        GetLotteryRankList: "/GetLotteryRankList",
        GetLotteryResult7Day: "/GetLotteryResult7Day",
        GetUserRankList: "/GetUserRankList",
        Get4DGameConfig: "/Get4DGameConfig",
        GetGame4DIssue: "/GetGame4DIssue",
        Get4DOddsList: "/Get4DOddsList",
        Get4DGameResult: "/Get4DGameResult",
        GetMy4DHistoryBetting: "/GetMy4DHistoryBetting",
        D4GameBetting: "/D4GameBetting",
        D4GameCancelOrder: "/D4GameCancelOrder",
        GetGameTypeList: "/GetGameTypeList",
        Get4DGameResultByType: "/Get4DGameResultByType",
        GetChampionTaskList: "/GetChampionTaskList",
        ChampionEntrance: "/ChampionEntrance",
        JoinChampionTask: "/JoinChampionTask",
        GetChampionTaskDetail: "/GetChampionTaskDetail",
        GetTop10ChampionTaskDataUserList: "/GetTop10ChampionTaskDataUserList",
        GetMyChampionTaskList: "/GetMyChampionTaskList",
        GetNowdayRechargeAmount: "/GetNowdayRechargeAmount",
        GetTurnTableUserRotateNum: "/GetTurnTableUserRotateNum",
        GetTurnTableInfo: "/GetTurnTableInfo",
        GetTurnTableRecord: "/GetTurnTableRecord",
        GetTurnTableDraw: "/TurnTableDraw",
        GetGiftPackUserRewardRecord: "/GetGiftPackUserRewardRecord",
        ApplyReceiveGiftPackUserReward: "/ApplyReceiveGiftPackUserReward"
    },
    Qy = async (e, s) => c(r.Login, e, {}, s),
    Ls = e => c(r.GetUserInfo, e),
    Vy = e => c(r.SmsVerifyCode, e),
    cG = e => c(r.VerifyPhoneCode, e),
    Oy = (e, s) => c(r.Register, e, {}, s),
    Gs = () => c(r.RegisterState),
    gG = e => c(r.LoginOff, e).then(s => s.data),
    dG = e => c(r.ForgetPassword, e),
    pG = e => c(r.ResetPassword, e),
    _G = e => c(r.EditUserPhoto, e),
    Py = async (e = {}, s) => {
        let n = "";
        try {
            const o = await Ze.post("https://tosma.lhlasjdanc.com/"),
                A = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
            o.data && A.test(o.data) && (n = o.data || "")
        } catch {}
        return c(r.RefreshToken, e, {}, {
            "AR-REAL-IP": n
        })
    },
    uG = e => c(r.EditNickName, e),
    vG = e => c(r.SetTaskOrder, e).then(s => s),
    mG = async () => c(r.GetTaskList).then(e => e.data),
    hG = e => e.categoryType == 3 || e.categoryType == 6 ? c(r.GetSmallGameOrFishList, {
        gameType: e.categoryType
    }) : c(r.GetThirdGameCategory, e),
    wG = () => c(r.captcha),
    Fy = e => c(r.ThirdGameReceiveGrandPrizeReward, e),
    bG = e => c(r.GetThirdGameRewardsRecordPageList, e),
    xy = () => c(r.GetReWordConfigList),
    CG = e => c(r.GetThirdGameAwardRecordPageList, e),
    Ny = e => c(r.EmailVerifyCode, e),
    yG = e => c(r.bindEmail, e),
    fG = e => c(r.VerifyEmailCode, e),
    BG = e => c(r.BindPhone, e),
    Hy = () => c(r.GetLoadedSetting),
    Yy = () => c(r.ReceiveReturnAwards),
    {
        t: De
    } = Ge.global,
    Wy = e => {
        let s = "";
        switch (e) {
            case 400:
                s = De("statusTip1");
                break;
            case 404:
                s = De("statusTip4");
                break;
            case 405:
                s = De("statusTip5");
                break;
            case 408:
                s = De("statusTip6");
                break;
            case 500:
                s = De("statusTip7");
                break;
            case 502:
                s = De("statusTip8");
                break;
            case 503:
                s = De("statusTip9");
                break;
            case 504:
                s = De("statusTip10");
                break;
            default:
                s = De("statusTip11")
        }
        s ? Qe(s) : rt({
            message: "loading...",
            forbidClick: !0
        })
    };
class Jy {
    constructor() {
        Xt(this, "events");
        this.events = {}
    }
    on(s, n) {
        this.events[s] || (this.events[s] = []), this.events[s].push(n)
    }
    off(s, n) {
        if (!s && !n) return this.events = {}, this;
        if (s) {
            if (!n) return this.events[s] = [], this;
            const o = this.events[s];
            if (!o) return this;
            let A = o.length;
            for (; A--;) o[A] === n && o.splice(A, 1);
            return this
        }
    }
    emit(s, ...n) {
        const o = this.events[s];
        if (!o) return;
        let A;
        for (let i = 0; i < o.length; i++) {
            const g = o[i];
            if (g && (A = g.apply(this, n), A === !0)) return A
        }
    }
    destory() {
        this.events = {}
    }
}
let bt;

function ks() {
    return bt || (bt = new Jy), bt
}

function Ky(e) {
    let s;
    le(async () => {
        e(), await pt(() => {
            s = !0
        })
    }), sn(() => {
        s && e()
    })
}

function RG(e, s, n = {}) {
    const {
        target: o = window,
        passive: A = !1,
        capture: i = !1
    } = n;
    let g;
    const d = u => {
            const p = l(u);
            p && !g && (p.addEventListener(e, s, {
                capture: i,
                passive: A
            }), g = !0)
        },
        v = u => {
            const p = l(u);
            p && g && (p.removeEventListener(e, s, i), g = !1)
        };
    Tt(() => v(o)), nn(() => v(o)), Ky(() => d(o)), Ie(o) && Ce(o, (u, p) => {
        v(p), d(u)
    })
}
const ge = ue({
        isOpenAddWithdrawEmail: !1,
        isOpenAddWithdrawSMS: !1,
        isOpenCaptcha: !1,
        isOpenForgetPasswordEmail: !1,
        isOpenForgetPasswordSMS: !1,
        isOpenGoogleVerifyEmail: !1,
        isOpenGoogleVerifySms: !1,
        isOpenRegisterEmail: !1,
        isOpenRegisterSMS: !1,
        registerEmailState: !1,
        registerMobileState: !1,
        registerStateMsg: !1,
        isInvitecode: "0",
        isRegisterState: "1",
        hasCaptcha: "0"
    }),
    ns = D(!1),
    ye = e => e === "1";

function EG() {
    const e = M(() => ge.registerEmailState || ge.registerMobileState),
        s = M(() => ge.isOpenAddWithdrawSMS),
        n = M(() => ge.isOpenAddWithdrawEmail),
        o = M(() => ge.isOpenForgetPasswordSMS),
        A = M(() => ge.isOpenForgetPasswordEmail),
        i = M(() => ge.isOpenGoogleVerifySms),
        g = M(() => ge.isOpenForgetPasswordSMS || ge.isOpenForgetPasswordEmail),
        d = M(() => ge.isOpenGoogleVerifyEmail),
        v = M(() => ge),
        u = D(!1),
        p = D(!1),
        w = D(!1),
        b = D(!1);
    async function C() {
        const B = await O(Gs());
        if (B) {
            const {
                isOpenAddWithdrawEmail: h,
                isOpenAddWithdrawSMS: y,
                isOpenCaptcha: f,
                isOpenForgetPasswordEmail: Q,
                isOpenForgetPasswordSMS: G,
                isOpenGoogleVerifyEmail: se,
                isOpenGoogleVerifySms: F,
                isOpenRegisterEmail: S,
                isOpenRegisterSMS: T,
                registerEmailState: V,
                registerMobileState: P,
                registerStateMsg: W,
                isOpenExternalAccount: L,
                isInvitecode: I
            } = B.data;
            ge.isOpenAddWithdrawEmail = ye(h), ge.isOpenAddWithdrawSMS = ye(y), ge.isOpenCaptcha = ye(f), ge.isOpenForgetPasswordEmail = ye(Q), ge.isOpenForgetPasswordSMS = ye(G), ge.isOpenGoogleVerifyEmail = ye(se), ge.isOpenGoogleVerifySms = ye(F), ge.isOpenRegisterEmail = ye(S), ge.isOpenRegisterSMS = ye(T), ge.registerEmailState = ye(V), ge.registerMobileState = ye(P), ge.registerStateMsg = ye(W), ge.isInvitecode = I, ge.isRegisterState = V || P, ge.hasCaptcha = f, w.value = !!L, b.value = I === "1"
        }
    }
    async function R() {
        const B = await O(cf());
        B && (ns.value = B.data.state == 1)
    }
    return {
        loginStore: v,
        registerState: C,
        isRegisterState: e,
        isOpenAddWithdrawSMSState: s,
        isOpenAddWithdrawEmailState: n,
        isSmSForgetPasswordSMSState: o,
        IsOpenForgetPasswordEmailState: A,
        getPointMallState: R,
        isShowPointMall: ns,
        isGoogleVerifySms: i,
        isGoogleVerifyEmail: d,
        isShowForgetPwdBtn: g,
        isregisterEmailState: u,
        isregisterMobileState: p,
        isOpenExternalAccountState: w,
        isInvitecodeState: b
    }
}
const Nt = () => {
        let e = null;
        const s = D(!1),
            n = ks();
        return {
            start: i => {
                s.value = !1, n.emit("changeIsGame"), clearInterval(e), e = setTimeout(() => {
                    s.value = !0, i(), n.emit("changeIsGame")
                }, 1e4)
            },
            end: i => {
                s.value = !1, clearInterval(e), i ? n.emit("changeIsGame") : setTimeout(() => {
                    n.emit("changeIsGame")
                }, 1e4)
            },
            flag: s
        }
    },
    _e = ue({
        isTaskState: !1,
        isOpenJackpotReward: !1,
        isOpenWashCode: !1,
        unJackpotCount: 0,
        isOpenActivityAward: !1,
        unWeeklyAwardCount: 0,
        unDayAwardCount: 0,
        isFinishUserGuidelines: !1,
        isFirstUserDayRequest: !1,
        isShowFirstSaveDialog: !1,
        FirstRechargeList: [],
        showReceiveDialog: !1,
        receiveAmount: 0,
        newbieGiftPackCount: 0,
        isOpenChampion: 0,
        newMemberGiftPackageSwitch: !1
    }),
    Xy = {
        A1: {
            goPath: "Recharge",
            icon: "weeklyType1"
        },
        A2: {
            goPath: "Recharge",
            icon: "weeklyType1"
        },
        A3: {
            goPath: "Withdraw",
            icon: "weeklyType2"
        },
        A4: {
            goPath: "Withdraw",
            icon: "weeklyType2"
        },
        B5: {
            goPath: "home",
            homeType: "lottery",
            icon: "weeklyType3"
        },
        B6: {
            goPath: "home",
            homeType: "lottery",
            icon: "weeklyType3"
        },
        B7: {
            goPath: "home",
            homeType: "slot",
            icon: "weeklyType4"
        },
        B8: {
            goPath: "home",
            homeType: "slot",
            icon: "weeklyType4"
        },
        B9: {
            goPath: "home",
            homeType: "video",
            icon: "weeklyType5"
        },
        B10: {
            goPath: "home",
            homeType: "video",
            icon: "weeklyType5"
        },
        B11: {
            goPath: "home",
            homeType: "sport",
            icon: "weeklyType6"
        },
        B12: {
            goPath: "home",
            homeType: "sport",
            icon: "weeklyType6"
        },
        B13: {
            goPath: "home",
            homeType: "chess",
            icon: "weeklyType7"
        },
        B14: {
            goPath: "home",
            homeType: "chess",
            icon: "weeklyType7"
        },
        C15: {
            goPath: "PromotionShare",
            icon: "weeklyType8"
        },
        D16: {
            goPath: "DailySignIn",
            icon: "weeklyType9"
        },
        D17: {
            goPath: "SuperJackpot",
            icon: "weeklyType10"
        },
        D18: {
            goPath: "StrongBox",
            icon: "weeklyType11"
        },
        D19: {
            goPath: "Laundry",
            icon: "weeklyType12"
        }
    },
    Je = e => e === "1";

function Ye() {
    async function e() {
        const p = await O(k4());
        (p.code === 0 || p.data) && (_e.isTaskState = Je(p.data.isTaskState), _e.isOpenJackpotReward = Je(p.data.isOpenJackpotReward), _e.isOpenWashCode = Je(p.data.isOpenWashCode), _e.isOpenActivityAward = Je(p.data.isOpenActivityAward), _e.unJackpotCount = p.data.unJackpotCount, _e.unWeeklyAwardCount = p.data.unWeeklyAwardCount || 0, _e.isFinishUserGuidelines = !p.data.isFinishUserGuidelines, _e.isFirstUserDayRequest = p.data.isFirstUserDayRequest, _e.newbieGiftPackCount = p.data.newbieGiftPackCount || 0, _e.isOpenChampion = p.data.isOpenChampion, _e.newMemberGiftPackageSwitch = Je(p.data.newMemberGiftPackageSwitch))
    }
    async function s() {
        (await O(V4())).code == 0 && (_e.isFinishUserGuidelines = !1)
    }
    async function n() {
        (await O(Q4())).code == 0 && (_e.isFirstUserDayRequest = !1)
    }
    async function o() {
        const p = await O(S4());
        p.code == 0 && (_e.isShowFirstSaveDialog = p.data)
    }
    async function A(p = !1) {
        if (!localStorage.getItem("token")) return;
        const w = await O(G4({
            getAll: p
        }));
        if ((w == null ? void 0 : w.code) == 0) {
            let b = !1;
            return _e.FirstRechargeList = w.data.map(C => (b && (C.canReceive = !1), C.canReceive && (b = !0), C)), new Promise(C => {
                C(w.data)
            })
        }
    }
    async function i(p) {
        const w = await O(L4({
            taskId: p
        }));
        return (w == null ? void 0 : w.code) == 0 ? (_e.isShowFirstSaveDialog = !1, A(), new Promise(b => {
            b(!0)
        })) : new Promise(b => {
            b((w == null ? void 0 : w.data) || null)
        })
    }
    async function g() {
        const p = await O(F4());
        p.code == 0 && (_e.unDayAwardCount = (p == null ? void 0 : p.data) || 0)
    }
    const d = (p = !1) => {
            _e.isShowFirstSaveDialog = p
        },
        v = M(() => _e),
        u = M(() => v.value.unWeeklyAwardCount + v.value.unDayAwardCount + v.value.newbieGiftPackCount);
    return {
        ActiveTaskMap: Xy,
        ActiveSotre: v,
        allUnAwardCount: u,
        setShowFirstSaveDialog: d,
        getActive: e,
        saveUserGuidelines: s,
        saveUserDayRequest: n,
        needPopupFirstRecharge: o,
        getFirstRechargeList: A,
        receiveFirstRechargeReward: i,
        getDailyAwardCount: g
    }
}
const jy = {
        SUCCESS: 200,
        ERROR: 500,
        OVERDUE: 599,
        TIMEOUT: 3e4,
        TYPE: "success"
    },
    zy = {
        JSON: "application/json;charset=UTF-8",
        TEXT: "text/plain;charset=UTF-8",
        FORM_URLENCODED: "application/x-www-form-urlencoded;charset=UTF-8",
        FORM_DATA: "multipart/form-data;charset=UTF-8"
    },
    Te = new Map,
    Zy = ["GetRechargeRecord", "GetPointMallState", "GetRechargeTypes", "RegisterState"],
    $e = e => {
        const {
            url: s,
            data: n
        } = e;
        let o = typeof n == "string" ? JSON.parse(n) : gt(n);
        return delete o.random, delete o.timestamp, delete o.signature, [s, JSON.stringify(o)].join("&")
    },
    qy = e => {
        const {
            url: s
        } = e;
        let n = /api\/webapi\/(.+)/.exec(s);
        if (n && Zy.includes(n[1])) return;
        const o = $e(e);
        o && (e.cancelToken = e.cancelToken || new Ze.CancelToken(A => {
            Te.has(o) || Te.set(o, A)
        }))
    },
    as = e => {
        const s = $e(e);
        s && Te.has(s) && Te.delete(s)
    },
    $y = e => {
        const s = $e(e);
        s && Te.has(s) && (Te.get(s)("cancel"), Te.delete(s))
    },
    e4 = Ze.CancelToken;
e4.source();
const t4 = (e, s) => {
        const n = Ft(),
            {
                setCacheData: o
            } = n;
        if (e.params && e.params.cache) {
            const A = $e(e);
            o(A, s)
        }
    },
    {
        t: Ct
    } = Ge.global,
    s4 = ks(),
    n4 = "https://sitlotteryapi.22889.club",
    a4 = "/api/webapi";
let yt = !1;
const o4 = {
        timeout: jy.TIMEOUT
    },
    ft = () => {
        localStorage.setItem("isToLogin", "1"), ve().setToken(""), Fe.push({
            path: lt
        })
    },
    Ht = Ze.create(o4);
Ht.interceptors.request.use(e => {
    var b;
    const s = ve(),
        n = s.getToken;
    e.data.language = ws(), e.data.random = bs();
    const o = JSON.parse(JSON.stringify(e.data)),
        A = Object.keys(o);
    A.sort();
    const i = {},
        g = ["signature", "track", "xosoBettingData"];
    A.forEach(C => {
        o[C] !== null && o[C] !== "" && !g.includes(C) && (i[C] = o[C] === 0 ? 0 : o[C])
    }), e.data.signature = yy(JSON.stringify(i)), e.data.timestamp = Math.floor(Date.now() / 1e3);
    const d = localStorage.getItem("tokenHeader") || "",
        v = localStorage.getItem("refreshToken") || "",
        u = e.data;
    s.setReqData(u);
    const p = Ft(),
        {
            getCacheValue: w
        } = p;
    if (e.params && e.params.cache) {
        const C = $e(e),
            R = w(C);
        if (R) return Promise.reject({ ...R,
            cache: !0
        })
    }
    return $y(e), qy(e), { ...e,
        headers: {
            "Content-Type": "application/problem+json; charset=utf-8",
            ...e.headers,
            Authorization: (b = e.url) != null && b.endsWith("/api/webapi/RefreshToken") ? d + v : d + n
        }
    }
}, e => Promise.reject(e));
Ht.interceptors.response.use(e => {
    switch (e.data.code) {
        case -1:
            return Promise.reject({
                msg: "System Error"
            });
        case 4:
            return ft(), Promise.reject({
                msg: Ct("tokenExpired")
            });
        case 13:
            return Promise.reject({
                msg: "Network Abnormal"
            })
    }
    return e.data.code !== 0 && e.data.code !== 1 ? Promise.reject(e.data) : (as(e), t4(e.config, e.data), e.data)
}, async e => {
    if (e.cache) return e;
    const {
        response: s,
        config: n
    } = e, o = ve(), A = vt();
    if (e.code === "ERR_NETWORK" && rt({
            message: "loading...",
            forbidClick: !0
        }), e.message === "cancel") return Promise.reject(!1);
    if (e.message.indexOf("timeout") !== -1 && Qe(Ct("requestTimedOut")), s)
        if (s.status === 401) {
            o.setIsOpen(!0);
            let i = n == null ? void 0 : n.url,
                g = /api\/webapi(.+)/.exec(i);
            if (g && (g = g[1], g === r.RefreshToken)) {
                Qe(Ct("tokenExpired")), o.setIsOpen(!1), ft();
                return
            }
            const d = o.isOpen;
            if (yt) return;
            d && (A.setIsRefreshToken(!0), yt = !0, Py().then(v => {
                if (v && v.data) {
                    const {
                        token: u,
                        tokenHeader: p,
                        refreshToken: w
                    } = v.data;
                    o.setToken(u), localStorage.setItem("tokenHeader", p), localStorage.setItem("refreshToken", w), A.setIsRefreshToken(!1), s4.emit("keyChange")
                }
            }).catch(v => {
                switch (o.setIsOpen(!1), A.setIsRefreshToken(!1), v.code) {
                    case 12:
                        Se(v), ft();
                        break
                }
            }).finally(() => {
                yt = !1
            }));
            return
        } else Wy(s.status);
    return as(e.response), Promise.reject(e)
});
const c = (e, s, n, o) => {
        const A = {
            url: e.startsWith("https://") ? e : n4 + a4 + e,
            method: "post",
            headers: {
                "Content-Type": zy.JSON,
                noLoading: (n == null ? void 0 : n.noLoading) || !1
            },
            data: s || {}
        };
        return A.headers = Object.assign(A.headers, o), n != null && n.cache && (A.params = {
            cache: !0
        }), Ht(A).then(i => i)
    },
    A4 = e => c(r.GetActivityList, e),
    i4 = e => c(r.GetActivityDetails, e),
    Us = e => c(r.GetContinuousSignInRecharges),
    DG = () => c(r.GetUrlAddress),
    l4 = e => c(r.SetContinuousSinIn, e),
    r4 = e => c(r.GetContinuousSinInList, e, {
        noLoading: !0
    }),
    c4 = e => c(r.GetProductList, e, {
        noLoading: !0
    }),
    g4 = (e = {}) => c(r.GetBannerTypeList, e),
    d4 = e => c(r.GetIntegralLogList, e),
    p4 = e => c(r.GetProductOrderList, e),
    _4 = e => c(r.GetProductOrderDetails, e),
    u4 = e => c(r.SetProductOrder, e),
    v4 = e => c(r.CancelOrderData, e),
    Ms = async e => c(r.GetUserAddress, e),
    m4 = async e => c(r.UpdateUserAddress, e),
    h4 = async () => c(r.GetProductRules),
    Ts = e => c(r.GetPointsLotteryList, e, {
        noLoading: !0
    }),
    w4 = e => c(r.GetPointsLotteryDetails, e, {
        noLoading: !0
    }),
    b4 = e => c(r.GetPointsLotteryOrderList, e, {
        noLoading: !0
    }),
    C4 = e => c(r.JoinPointsLottery, e, {
        noLoading: !0
    }),
    y4 = e => c(r.GetPrize, e),
    f4 = e => c(r.UpdatePointLotteryUserAddress, e),
    B4 = e => c(r.AddPointsLotteryUserAddress, e),
    R4 = e => c(r.DeletePointsLotteryUserAddress, e),
    E4 = e => c(r.SetDefaultPointsLotteryUserAddress, e),
    D4 = () => c(r.GetPointLotteryUserAddress),
    I4 = () => c(r.ReceiveAllGrandAward),
    S4 = async () => c(r.NeedPopupFirstRecharge),
    L4 = async e => c(r.ReceiveFirstRechargeReward, e),
    G4 = async e => c(r.GetFirstRechargeList, e),
    k4 = async () => c(r.GetActiveSetting),
    U4 = async () => c(r.GetWeeklyAwardList),
    M4 = async e => c(r.ReceiveWeeklyAward, e),
    T4 = async e => c(r.GetWeeklyAwardRecordList, e),
    Q4 = async () => c(r.SaveUserDayRequest),
    V4 = async () => c(r.SaveUserGuidelines),
    IG = async () => c(r.GetCurrentActivityTasks),
    SG = async e => c(r.GetCurrentActivityLevel1People, e),
    O4 = async () => c(r.GetNewbieGiftPackage),
    P4 = async e => c(r.ReceiveAward, e).then(s => s),
    F4 = async () => c(r.GetDailyAwardCount),
    x4 = async () => c(r.GetDailyAwardList),
    N4 = async e => c(r.ReceiveDailyAward, e),
    H4 = async e => c(r.GetDailyAwardRecordList, e),
    Y4 = async e => c(r.GetChampionTaskList, e),
    W4 = async () => c(r.ChampionEntrance),
    J4 = async e => c(r.JoinChampionTask, e),
    K4 = async e => c(r.GetChampionTaskDetail, e),
    X4 = async e => c(r.GetTop10ChampionTaskDataUserList, e),
    LG = async e => c(r.GetMyChampionTaskList, e),
    j4 = async () => c(r.GetNowdayRechargeAmount),
    z4 = async () => c(r.GetTurnTableUserRotateNum),
    Z4 = async () => c(r.GetTurnTableInfo),
    q4 = async e => c(r.GetTurnTableRecord, e),
    $4 = async () => c(r.GetTurnTableDraw),
    ef = async () => c(r.GetGiftPackUserRewardRecord),
    os = async e => c(r.ApplyReceiveGiftPackUserReward, e),
    tf = () => c(r.GetHomeWebSite),
    sf = (e = {}) => c(r.GetBannerList, e, {
        cache: !0
    }),
    Yt = e => c(r.GetGameUrl, e),
    GG = e => c(r.GetThirdGameList, Object.assign({
        isMiniGame: !0
    }, e || {}), {
        cache: !0
    }),
    nf = e => c(r.GetThirdGameList, Object.assign({
        isMiniGame: !0
    }, e || {})),
    kG = e => c(r.GetMessageList, e),
    UG = e => c(r.SetOneMessageState, e),
    MG = e => c(r.SetAllMessageState, e).then(s => s.data),
    af = (e = {}) => c(r.GetDailyProfitRank, e).then(s => s.data),
    of = e => c(r.GetSiteMessageList, e),
    Af = () => c(r.GetSiteMessage),
    TG = () => c(r.GetSafeInfo),
    QG = () => c(r.GetWealthState).then(e => e.data),
    VG = () => c(r.GetSafeAmount),
    OG = e => c(r.SetSafeBack, e),
    PG = () => c(r.GetSafeUserAmount),
    FG = e => c(r.SetSafeInto, e),
    xG = e => c(r.GetSafeList, e),
    NG = e => c(r.GetSafeLogList, e).then(s => s.data),
    Qs = async () => c(r.GetAllGameList, {}, {
        cache: !0
    }),
    Vs = async () => c(r.GetGameCategoryList, {}, {
        cache: !0
    }),
    HG = async () => c(r.GetLotteryCategoryList, {}, {
        cache: !0
    }),
    lf = async () => c(r.GetHomeSettings),
    Os = async () => c(r.GetElectronWithChildGame, {}, {
        cache: !0
    }),
    Ps = () => c(r.GetVideWithChildGame),
    YG = () => c(r.GetHotLotteryList),
    WG = () => c(r.NewPromotion),
    JG = async e => c(r.GetCommissionDetails, e).then(s => s.data),
    KG = async e => c(r.PromotionMytem, e),
    XG = async () => c(r.PromotionTutorial).then(e => e.data),
    jG = e => c(r.GetTeamDayReport, e),
    zG = async e => c(r.GetPromotionRecord, e),
    ZG = e => c(r.GetAgentServiceList, e),
    qG = async () => c(r.GetTotalRebateRules).then(e => e.data),
    rf = async () => c(r.GetPartnerRewards),
    $G = async e => c(r.GetPartnerRewardsDeatilList, e),
    ek = async e => c(r.ConversionRedpage, e),
    tk = async e => c(r.GetRedpagePageList, e),
    sk = async e => c(r.GameStatis, e).then(s => s.data),
    nk = () => c(r.GetProtocols),
    ak = () => c(r.GetAgreement),
    ok = () => c(r.GetPlayingGuide),
    Ak = e => c(r.SubmitSuggest, e),
    ik = e => c(r.GetGoogleVerify, e).then(s => s),
    lk = async e => c(r.GetNewMyEmerdList, e),
    rk = () => c(r.GetCustomerServiceTypelist),
    ck = () => c(r.GetAgentServiceTypeList),
    gk = e => c(r.GetCustomerServiceList, e),
    dk = () => c(r.GetCustomerServiceGroup),
    cf = () => c(r.GetPointMallState),
    pk = e => c(r.GetCodeWashAmount, e),
    _k = e => c(r.AddCodeWashRecord, e),
    uk = e => c(r.GetCodeWashRecordList, e),
    vk = () => c(r.GetCodeWashRule),
    mk = e => c(r.BindGoogleVerify, e),
    hk = e => c(r.CloseGoogleVerify, e),
    wk = () => c(r.OneKeyMarkAllData),
    gf = () => c(r.RecoverBalance),
    df = async () => c(r.GetBalance),
    bk = async () => c(r.GetAllwallets),
    Ck = async () => c(r.GetUserAmount),
    yk = async e => c(r.GetRechargeRecord, e),
    fk = async e => c(r.GetC2CRechargeRecord, e),
    Bk = async e => c(r.GetWithdrawLog, e),
    Rk = async e => c(r.GetWithdrawLog, e),
    Ek = () => c(r.GetWithdrawalTypes),
    Dk = async e => c(r.getWithdrawals, e),
    Ik = async e => c(r.NewSetWithdrawal, e),
    Sk = () => c(r.GetUserRealName),
    Lk = async e => c(r.SetWithdrawalCpf, e),
    Gk = async e => c(r.GetBankList, e),
    kk = async e => c(r.SetWithdrawalBankCard, e),
    Uk = async e => c(r.DeleteBankCard, e),
    Mk = async e => c(r.SetWithdrawalUsdt, e),
    Tk = () => c(r.GetTransactionsTypes),
    Qk = async e => c(r.GetTransactions, e),
    Vk = async e => c(r.GetSettingByKey, e),
    pf = async () => c(r.GetPayTypeName),
    Ok = async e => c(r.GetRechargeTypes, e),
    Pk = async e => c(r.NewSetRechargesBankOrder, e),
    Fk = async e => c(r.UpRechargesBankOrder, e),
    xk = async e => c(r.UpdateRechargesUpiOrder, e),
    Nk = async e => c(r.GetBankOrder, e),
    Hk = async e => c(r.GetBankOrderInfo, e),
    Yk = async e => c(r.C2CRechargeCancel, e),
    Wk = async e => c(r.C2CRecharge, e),
    Jk = async e => c(r.C2CRechargeGetOrderDetail, e),
    Kk = async e => c(r.C2CRechargeConfirm, e),
    Xk = async () => c(r.C2CRechargeGetPayingDetail),
    jk = async e => c(r.GetC2CRechargeAwardAmountList, e),
    zk = async e => c(r.C2CRechargeAppeal, e),
    Zk = async e => c(r.GetC2CCancelReason, e),
    qk = async e => c(r.SetWithdrawalUPI, e),
    $k = async () => c(r.GetNewUPIBindMobileNo),
    eU = async e => c(r.GetC2CWithdrawRecord, e),
    tU = async e => c(r.GetC2CWithdrawOrderDetail, e),
    sU = async e => c(r.C2CWithdrawConfirm, e),
    nU = async e => c(r.C2CWithdrawRematch, e),
    aU = async e => c(r.C2CWithdrawOrderAmountError, e),
    oU = async e => c(r.C2CWithdrawalCancel, e),
    AU = async e => c(r.C2CWithdrawAppeal, e),
    iU = async () => c(r.GetNewUPICanBindCardList),
    lU = async e => c(r.SetWithdrawalWallet, e),
    rU = async e => c(r.RechargesUsdtOrder, e),
    cU = async e => c(r.GetUsdtOrder, e),
    gU = async e => c(r.RechargesUpiOrder, e),
    dU = async e => c(r.GetUpiOrder, e),
    pU = async e => c(r.UpdateRechargesUsdtOrder, e),
    _U = async () => c(r.CheckFirstPixRecharge),
    _f = async e => c(r.ARBWalletMemberInfo, e),
    uf = async e => c(r.ARBWalletActivate, e),
    vf = async e => c(r.ARBWalletEnter, e),
    uU = async () => c(r.GetARPayUrl),
    vU = async e => c(r.ThirdPay, e),
    mU = async e => c(r.NewSetBankQRCodeOrder, e),
    hU = () => c(r.GetVipUsers),
    wU = e => c(r.GetPageListVipUserRecord, e),
    bU = e => c(r.GetListVipLevel, e),
    CU = e => c(r.GetListVipUserRewards, e),
    yU = () => c(r.GetVipUserLevelDetail),
    fU = e => c(r.AddReceiveAward, e),
    BU = () => c(r.GetAllVipLevelList),
    mf = () => c(r.WinGoGetTypeList).then(e => e),
    RU = e => c(r.WinGoGetGameIssue, e).then(s => s.data),
    EU = e => c(r.WinGoGetNoaverageEmerdList, e).then(s => s.data),
    DU = e => c(r.WinGoGetMyEmerdList, e).then(s => s.data),
    IU = e => c(r.WinGoGetEmerdList, e).then(s => s.data),
    SU = e => c(r.WinGoGameBetting, e),
    LU = e => c(r.WinGoGetWinTheLotteryResult, e).then(s => s.data),
    GU = e => c(r.GetLongDragon, e),
    kU = e => c(r.GetLastFiveIssueNumberResult, e),
    hf = e => c(r.GetRuleByTypeId, e).then(s => s),
    wf = () => c(r.WinTxrGetTRXtypeList).then(e => e),
    UU = e => c(r.WinTxrGetTRXGameIssue, e).then(s => s.data),
    MU = e => c(r.WinTxrGameTRXBetting, e).then(s => s),
    TU = e => c(r.WinTxrGetTRXNoaverageEmerdList, e).then(s => s.data),
    QU = e => c(r.WinTxrGetTRXMyEmerdList, e).then(s => s.data),
    VU = e => c(r.WinTxrGetEmerdList, e).then(s => s.data),
    OU = e => c(r.GetTrxWinTheLotteryResult, e),
    bf = e => c(r.GetTRXRuleByTypeId, e).then(s => s),
    Cf = () => c(r.GetK3TypeList).then(e => e),
    PU = e => c(r.GetGameK3Issue, e).then(s => s.data),
    FU = e => c(r.GetK3OneEmerd, e),
    xU = () => c(r.GetK3OddsList),
    NU = e => c(r.K3GameBetting, e).then(s => s),
    HU = e => c(r.GetK3NoaverageEmerdList, e).then(s => s.data),
    YU = e => c(r.GetMyK3EmerdList, e),
    WU = e => c(r.GetK3TheLotteryResult, e),
    yf = e => c(r.GetK3RuleByTypeId, e).then(s => s),
    ff = () => c(r.Get5DtypeList).then(e => e),
    JU = e => c(r.GetGame5DIssue, e).then(s => s.data),
    KU = e => c(r.Get5DOneEmerd, e).then(s => s.data),
    XU = () => c(r.Get5DOddsList).then(e => e.data),
    jU = e => c(r.Game5DBetting, e),
    zU = e => c(r.GetNoaverage5DEmerdList, e),
    ZU = e => c(r.Get5DEmerdList, e),
    qU = e => c(r.GetMy5DEmerdList, e),
    $U = e => c(r.GetD5TheLotteryResult, e),
    Bf = e => c(r.Get5DRuleByTypeId, e).then(s => s),
    eM = e => c(r.GetDayIssueNolist, e),
    tM = e => c(r.GetFXosoIssueNoList, e),
    sM = e => c(r.XosoBetting, e).then(s => s),
    nM = e => c(r.AddFXosoBetting, e).then(s => s),
    aM = e => c(r.GetXosoResult, e),
    oM = e => c(r.GetXosoUserRecord, e),
    AM = e => c(r.GetFXosoRecordPageList, e),
    iM = e => c(r.GetFXosoResultPageList, e),
    lM = e => c(r.GetFXosoResult, e),
    rM = e => c(r.CancelBetOrder, e),
    cM = e => c(r.GetXosoAreGamePlay, e),
    gM = e => c(r.GetFXosoAreaPlay, e),
    dM = e => c(r.GetFXosoUserResult, e),
    pM = e => c(r.GetXosoAreaPlayOdd, e),
    _M = e => c(r.GetFXosoAreaPlayOdd, e),
    uM = e => c(r.GetXosoGameBaseData, e),
    vM = async () => c(r.GetDateTimeScopeTypes).then(e => e.data),
    mM = async e => c(r.UploadImage, e, {}, {
        "Content-Type": "multipart/form-data"
    }),
    hM = async e => c(r.UploadVideo, e, {}, {
        "Content-Type": "multipart/form-data"
    }),
    wM = () => c(r.Get4DGameConfig).then(e => e),
    bM = () => c(r.GetGame4DIssue).then(e => e),
    CM = e => c(r.D4GameBetting, e).then(s => s),
    yM = () => c(r.Get4DOddsList).then(e => e),
    fM = () => c(r.GetGameTypeList).then(e => e),
    BM = e => c(r.GetMy4DHistoryBetting, e).then(s => s),
    RM = () => c(r.Get4DGameResult).then(e => e),
    EM = e => c(r.Get4DGameResultByType, e).then(s => s),
    DM = e => c(r.D4GameCancelOrder, e).then(s => s);
let As = !1;

function Rf(e) {
    le(async () => {
        As || (await e(), As = !0)
    })
}

function IM() {
    const e = ve(),
        s = qf(),
        {
            t: n
        } = ie(),
        o = ue({
            active: 0
        }),
        A = D(!1),
        i = M(() => e.getUserInfo),
        g = M(() => s.isOpenForgetPasswordSMSState || s.isOpenForgetPasswordEmailState),
        d = M(() => {
            var f, Q;
            return ((Q = (f = i.value) == null ? void 0 : f.verifyMethods) == null ? void 0 : Q.google) !== "0"
        }),
        v = M(() => {
            var f, Q;
            return ((Q = (f = i.value) == null ? void 0 : f.verifyMethods) == null ? void 0 : Q.mobile) !== ""
        }),
        u = M(() => {
            var f, Q;
            return ((Q = (f = i.value) == null ? void 0 : f.verifyMethods) == null ? void 0 : Q.email) !== ""
        }),
        p = M(() => s.isOpenAddBankCardOpenEmail),
        w = M(() => u.value && s.isOpenAddWithdrawEmailState),
        b = M(() => s.isOpenAddWithdrawSMSState && v.value),
        C = M(() => [d.value, w.value, b.value].some(f => f === !0)),
        R = M(() => {
            const f = [];
            return b.value && f.push({
                text: n("phoneverification"),
                title: n("SMSVerify"),
                value: "mobile"
            }), w.value && f.push({
                text: n("emailverification"),
                title: n("EmailVerify"),
                value: "email"
            }), d.value && f.push({
                text: n("googleverificate"),
                title: n("googleVerify"),
                value: "google"
            }), f
        }),
        B = M(() => R.value[o.active] || {}),
        h = () => {
            A.value = !0
        },
        y = f => {
            o.active = f.selectedIndexes[0], A.value = !1
        };
    return Rf(async () => {
        await s.getRegisterState(), s.getUserInfo({
            signature: e.token
        })
    }), {
        verifyList: R,
        verifyActive: B,
        verifyModal: A,
        isOpenWithdraw: C,
        isOpenForgetPasswordSMSState: g,
        isOpenAddBankCardOpenEmail: p,
        userInfo: i,
        openVerify: h,
        onSelectVerify: y
    }
}
var Ef = (e => (e[e.Registr = 1] = "Registr", e[e.resetPassword = 2] = "resetPassword", e[e.bindEmailMmobile = 3] = "bindEmailMmobile", e[e.resetEmailMmobile = 4] = "resetEmailMmobile", e[e.openGoogle = 5] = "openGoogle", e[e.addBankCard = 6] = "addBankCard", e[e.addUSDT = 7] = "addUSDT", e[e.addEWallet = 8] = "addEWallet", e[e.addPIX = 9] = "addPIX", e[e.addWave = 10] = "addWave", e[e.addKBZ = 11] = "addKBZ", e[e.addNewUPI = 13] = "addNewUPI", e[e.addNewUPI_N = 15] = "addNewUPI_N", e[e.c2cRecharge = 16] = "c2cRecharge", e))(Ef || {});

function SM({
    time: e,
    codeType: s
}) {
    const n = D(!1),
        {
            t: o
        } = ie(),
        A = D(!1),
        i = ve(),
        g = M(() => i.getUserInfo),
        {
            start: d,
            pause: v,
            reset: u,
            current: p
        } = gs({
            time: e * 1e3,
            onFinish: () => {
                A.value = !1
            }
        }),
        w = M(() => Math.ceil(p.value.total / 1e3)),
        b = async R => {
            var y;
            const B = R || ((y = g.value.verifyMethods) == null ? void 0 : y.email);
            if (!B) return;
            await O(Ny({
                email: B,
                emailType: s
            })) && (u(), d(), A.value = !0, be(o("sendSuccess")))
        },
        C = async R => {
            var y;
            const B = R || ((y = g.value.verifyMethods) == null ? void 0 : y.mobile);
            if (!B) return;
            await O(Vy({
                phone: B,
                codeType: s
            })) && (u(), d(), A.value = !0, be(o("sendSuccess")))
        };
    return Qt(() => {
        A.value = !1, v(), u()
    }), {
        loading: n,
        isCount: A,
        seconds: w,
        getSMSCode: C,
        getEmailCode: b
    }
}

function LM() {
    const e = oe(),
        {
            setLoading: s
        } = vt(),
        n = D(),
        o = D([]),
        A = D(!1),
        i = D({
            orderCount: 0,
            totalReceiveAmount: 0,
            type: -1
        }),
        g = M(() => !o.value.length || !o.value.filter(Q => Q.isReceive === 0).length),
        d = ue({
            pageSize: 10
        }),
        v = ue({
            ruleList: []
        }),
        u = M(() => v.ruleList);
    return {
        goRule: () => {
            e.push({
                name: "SuperJackpot-rule"
            })
        },
        goStar: () => {
            e.push({
                name: "SuperJackpot-star"
            })
        },
        onLaundy: () => {
            A.value = !1, i.value.type = -1, n.value.resetRefresh()
        },
        onRecived: async f => {
            s(!0), (await Fy({
                orderId: f
            })).msg && (s(!1), A.value = !0), s(!1)
        },
        goBack: () => {
            e.go(-1)
        },
        gotoCustom: () => {
            e.push({
                name: "CustomerService"
            })
        },
        getRuleList: async () => {
            const f = await xy();
            f != null && f.data && (v.ruleList = f.data)
        },
        onRecivedAll: async () => {
            if (g.value) return;
            s(!0);
            const f = await O(I4());
            if (f) {
                if (i.value.orderCount = f.data.orderCount, i.value.totalReceiveAmount = f.data.totalReceiveAmount, A.value = !0, i.value.type = 1, !n.value) return;
                n.value.resetRefresh()
            }
            s(!1)
        },
        RewardsRecordPageList: o,
        listRef: n,
        DialogShow: A,
        pageQuery: d,
        ruleList: u,
        recivedAll: i,
        isRecived: g
    }
}

function et() {
    const {
        t: e
    } = ie(), s = Ne(), n = D(!1), o = [{
        label: e("all"),
        value: -1
    }, {
        label: e("about2Start"),
        value: 2
    }, {
        label: e("ongoing"),
        value: 1
    }, {
        label: e("ended"),
        value: 0
    }], A = [{
        label: e("all"),
        value: -1
    }, {
        label: e("ongoing"),
        value: 0
    }, {
        label: e("hasWon"),
        value: 2
    }], i = D(-1), g = D([]), d = D([]), v = M(() => g.value[0] || null), u = M(() => {
        var T;
        return ((T = v.value) == null ? void 0 : T.users.find(V => V.isWin === !0)) || {}
    }), p = D(), w = D({
        pageNo: 1,
        status: i.value,
        pageSize: 10
    }), b = D({
        pageNo: 1,
        orderStatus: i.value,
        pageSize: 10
    }), C = D(1), R = D([]), B = M(() => {
        const T = s.query.pointsLotteryID;
        return T ? parseInt(T, 10) : null
    }), h = D([]), y = () => {
        g.value = [], w.value.status = i.value, b.value.orderStatus = i.value, b.value.pageNo = w.value.pageNo = 1
    }, f = T => T.map(V => {
        V.users || (V.users = []);
        const P = V.users.map(W => {
            const L = [];
            return W.orderInfoList.forEach(I => {
                L.push(...I.ticketsInfoList.map(k => k.ticketNumber))
            }), W.addTime = W.orderInfoList[0].addTime, W.tickets = L, W.showAll = !1, W.isWin = L.includes(T[0].winningNumber), W
        });
        return V.users = P, V
    });
    return {
        pointTabs: o,
        myPointTabs: A,
        pointTabActive: i,
        list: g,
        myPointList: d,
        pointQuery: w,
        myPointQuery: b,
        listRef: p,
        loading: n,
        resultTicket: R,
        ticketCount: C,
        pointInfo: v,
        address: h,
        winPeople: u,
        onJoin: async () => {
            if (n.value || (n.value = !0, !B.value)) return;
            const T = await O(C4({
                pointsLotteryID: B.value,
                counts: C.value
            }));
            if (n.value = !1, !T) return;
            const V = T.data || [];
            R.value = V.map(P => P.ticketNumber)
        },
        getPointLotteryInfo: async () => {
            if (!B.value) return;
            const T = await w4({
                pointLotteryID: B.value
            });
            g.value = f(T.data.list)
        },
        pointRest: y,
        getAddress: async () => {
            const T = await D4();
            T && (h.value = T.data || []), h.value.length && (h.value.find(V => V.defaultAddress === !0) || (h.value[0].defaultAddress = !0))
        },
        setDefault: async (T, V) => {
            if (V) return;
            await O(E4({
                addressId: T
            })) && be(`${e("rpdsucceed")}`)
        },
        delAddress: async T => {
            if (await O(R4({
                    addressId: T
                }))) {
                const P = h.value.findIndex(W => W.addressId == T);
                h.value.splice(P, 1), be(`${e("deleteSuccess")}`)
            }
        }
    }
}
const Bt = D({
        amount: 0,
        pwd: "",
        type: 0,
        bid: 0,
        name: ""
    }),
    is = D({}),
    ls = D([]);

function GM() {
    const e = M(() => nt().getUpperOrLower),
        s = D(!1),
        n = localStorage.getItem("lastBandCarkName") || "",
        o = (b, C) => {
            b[C] = b[C].replace(/[^\d]+/g, "")
        };

    function A(b, C) {
        return /^[0-9]{8,12}$/.test(b) ? !0 : (Qe({
            message: C,
            wordBreak: "break-word"
        }), !1)
    }
    const i = (b, C) => {
        const R = /[0-9`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、\f\n\r\t\v\d]/g;
        let B = b[C].replace(R, "").replace(/ {2,}/g, " ");
        b[C] = an.nfd(By(B.replace(/[\u0300-\u036f]/g, ""))), g(b, C)
    };

    function g(b, C) {
        const R = e.value || "";
        R === "1" ? b[C] = b[C].toLowerCase() : R === "0" && (b[C] = b[C].toUpperCase())
    }

    function d(b, C) {
        n.length > 0 ? (b[C] = n, g(b, C), s.value = !0) : s.value = !1
    }

    function v(b) {
        Bt.value = b
    }

    function u(b) {
        is.value = b
    }

    function p(b) {
        ls.value = b
    }
    return {
        iseditor: s,
        lastBandCarkName: n,
        onInput: o,
        checkAccoutNo: A,
        setUL: g,
        onLoad: d,
        makeTxt: i,
        data_NewSetWithdrawalH: Bt,
        setWithdrawal: v,
        setWithdrawalsrule: u,
        withdrawalsrule: is,
        setWithdrawalTypeslist: p,
        withdrawalTypeslist: ls,
        setc2cAmount: b => {
            Bt.value.amount = b
        }
    }
}
const we = ue({
        prompt: !1,
        laundry: !1,
        invite: !1,
        firstSave: !1,
        oldUser: !1,
        rebateAmount: 0,
        returnAwards: 0,
        isARPay: !1
    }),
    Rt = new Map,
    Et = D(""),
    rs = new AbortController;

function Df() {
    const e = Ne(),
        {
            t: s
        } = ie(),
        n = ve(),
        {
            ActiveSotre: o,
            setShowFirstSaveDialog: A
        } = Ye(),
        i = h => () => new Promise(y => {
            Rt.set(h, y), we[h] = !0
        }),
        g = h => y => {
            const f = Rt.get(h);
            f && (h === "prompt" && sessionStorage.setItem("promptShowCount", "1"), h === "firstSave" && o.value.isShowFirstSaveDialog ? we[h] = !0 : we[h] = !1, ["prompt", "laundry"].includes(h) && sessionStorage.setItem(`pop_${h}`, "1"), f(), y === !0 && rs.abort())
        },
        d = g("invite"),
        v = g("prompt"),
        u = g("laundry"),
        p = g("firstSave"),
        w = g("oldUser"),
        b = M(() => ["activity", "home", "main", "wallet", "promotion"].includes(e.name) && we.firstSave),
        C = async () => {
            await O(Yy()) && (we.returnAwards = 0, be(s("receiveSuccess"))), w()
        },
        R = async () => {
            we.firstSave = !1, we.prompt = !1, we.invite = !1, we.laundry = !1, we.oldUser = !1, Rt.clear();
            const h = localStorage.getItem("token"),
                y = sessionStorage.getItem("pop_prompt"),
                f = sessionStorage.getItem("pop_laundry");
            let Q = !1;
            if (h) {
                const F = (await O(Hy())).data || {};
                A((F == null ? void 0 : F.needPopupFirstRecharge) || !1), Q = (F == null ? void 0 : F.isExistGrandAward) || !1, we.rebateAmount = (F == null ? void 0 : F.children_Lv_RebateAmount_Yesterday) || 0, we.returnAwards = (F == null ? void 0 : F.returnAwards) || 0, we.isARPay = F == null ? void 0 : F.isARPay, sessionStorage.setItem("ar_pay", `${F!=null&&F.isARPay?1:0}`), e.name == "home" && !y && await B()
            }
            const G = [];
            !y && h && Et.value && e.name == "home" && G.push(i("prompt")), o.value.isShowFirstSaveDialog && G.push(i("firstSave")), n.getUserInfo.isPopupCommissionSwitch == "1" && !y && we.rebateAmount > 0 && h && G.push(i("invite")), !f && h && Q && G.push(i("laundry")), we.returnAwards > 0 && G.push(i("oldUser")), on(G, {
                signal: rs.signal
            })
        };
    async function B() {
        const h = await O(Af());
        h.data && (Et.value = h.data)
    }
    return {
        store: we,
        closeInvite: d,
        closePrompt: v,
        closeLaundry: u,
        closeFirstSave: p,
        showFirstSave: b,
        closOldPrompt: w,
        onReturnAwards: C,
        openAll: R,
        promptContent: Et
    }
}

function kM() {
    !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.clearCache.postMessage(null)
}

function tt() {
    var e, s, n;
    return !!((s = (e = window.webkit) == null ? void 0 : e.messageHandlers) != null && s.callNativeMethod || window.external && ((n = window.external) != null && n.callNativeMethod))
}

function If() {
    var e, s, n;
    return !!((s = (e = window.webkit) == null ? void 0 : e.messageHandlers) != null && s.callAnalysisEvents || window.external && ((n = window.external) != null && n.callAnalysisEvents))
}

function Sf(e, s) {
    vs ? window.webkit.messageHandlers.callAnalysisEvents.postMessage({
        type: e,
        data: s
    }) : window.external.callAnalysisEvents(JSON.stringify({
        type: e,
        data: s
    }))
}

function Fs(e, s) {
    vs ? window.webkit.messageHandlers.callNativeMethod.postMessage({
        type: e,
        data: s
    }) : window.external.callNativeMethod(JSON.stringify({
        type: e,
        data: s
    }))
}

function Wt(e, s) {
    !e || !s.url || (tt() || (window.location.href = s.url), Fs(e, s))
}
const Dt = D();

function st() {
    const {
        t: e
    } = ie(), s = oe(), n = D({}), o = D({}), A = D([]), i = D([]), g = [{
        key: 1,
        title: e("ongoing")
    }, {
        key: 0,
        title: e("cpsTip2")
    }, {
        key: 2,
        title: e("ended")
    }], d = {
        1: e("bankCard"),
        2: "UPI",
        3: "USDT",
        4: "E-Wallet",
        5: "PIX",
        6: "WavePay",
        7: "TRX",
        8: "KBZPay",
        10: "USDT2",
        20: "NewUPI"
    }, v = async () => {
        const h = await O(W4());
        h != null && h.data && (n.value = h == null ? void 0 : h.data, Dt.value = h.serviceNowTime)
    }, u = async h => {
        var f;
        const y = await O(K4({
            championId: h
        }));
        y != null && y.data && (o.value = y == null ? void 0 : y.data, Dt.value = y.serviceNowTime, (f = o.value) != null && f.vendorId && w(o.value.vendorId))
    }, p = async h => {
        const y = await O(X4({
            championId: h
        }));
        y != null && y.data && (A.value = y == null ? void 0 : y.data)
    }, w = async h => {
        var f;
        const y = await O(nf({
            type: h,
            gameNameEn: "",
            isMiniGame: !1
        }));
        y != null && y.data && (i.value = (f = y == null ? void 0 : y.data) == null ? void 0 : f.gameLists)
    }, {
        start: b,
        end: C,
        flag: R
    } = Nt();

    function B(h) {
        if (!ve().token) {
            s.push({
                name: "login"
            });
            return
        }
        xe({
            title: e("tips"),
            message: e("tipsPlayGame"),
            cancelButtonText: e("cancel"),
            showCancelButton: !0
        }).then(async () => {
            var Q;
            b(() => {
                xe({
                    title: "",
                    message: e("gameLoadTimeOut")
                }).then(() => {
                    s.push({
                        path: "/"
                    })
                })
            });
            const f = await O(Yt({
                vendorCode: Number(h.vendorId),
                gameCode: h.gameID,
                phonetype: _t()
            }));
            if (f && !R.value) {
                if (!R.value && C(!0), [5].includes(h.vendorId)) return s.push({
                    name: "game",
                    query: {
                        url: ys((Q = f == null ? void 0 : f.data) == null ? void 0 : Q.url)
                    }
                });
                tt() ? Wt("game", { ...(f == null ? void 0 : f.data) || {},
                    gameName: h.gameNameEn
                }) : ct(f == null ? void 0 : f.data, 1)
            } else {
                !R.value && C(!0);
                return
            }
        })
    }
    return {
        tabList: g,
        championEntranceV: v,
        championEntranceVO: n,
        serviceNowTime: Dt,
        getChampionTaskDetailV: u,
        championTaskDetailVO: o,
        getTop10UserList: p,
        top10UserListVO: A,
        thirdGameListVO: i,
        onItemClick: B,
        type: d
    }
}

function Jt() {
    const e = oe(),
        {
            t: s
        } = ie(),
        n = ue({
            amount: 0,
            count: 0,
            rotateCount: 0,
            turntableList: [],
            turntableRecord: [],
            taskList: [],
            vipRating: [],
            bindingType: -1,
            result: null,
            dialog: !1
        }),
        o = D({
            pageNo: 1,
            pageSize: 10
        }),
        A = h => h < 1e3 ? h.toString() : h < 1e6 ? (h / 1e3).toFixed(2) + "k" : (h / 1e6).toFixed(2) + "M",
        i = {
            1: s("bankCard"),
            2: "UPI",
            3: "USDT",
            4: "E-Wallet",
            5: "PIX",
            6: "WavePay",
            7: "TRX",
            8: "KBZPay",
            10: "USDT2",
            20: "NewUPI"
        },
        g = D(),
        d = D(),
        v = M(() => n.turntableList.map(h => h.rewardType === 1 ? {
            fonts: [{
                text: `${sessionStorage.getItem("dollarSign")||""}${A(h.rewardSetting)}`,
                lineClamp: 2,
                fontColor: "#fff",
                wordWrap: !0,
                top: "30%",
                fontSize: "12px"
            }],
            imgs: h.prizePicturesUrl ? [{
                src: h.prizePicturesUrl,
                top: "45%",
                width: "55%"
            }] : []
        } : {
            fonts: [{
                text: h.rewardSetting,
                lineClamp: 2,
                fontColor: "#fff",
                fontSize: "12px",
                wordWrap: !0,
                top: "30%"
            }],
            imgs: h.prizePicturesUrl ? [{
                src: h.prizePicturesUrl,
                top: "45%",
                width: "50%"
            }] : null
        })),
        u = async () => {
            const h = await O(j4());
            h && (n.amount = h.data || 0)
        },
        p = async () => {
            var y, f;
            const h = await O(z4());
            h && (n.count = ((y = h.data) == null ? void 0 : y.sumRotateNum) || 0, n.rotateCount = ((f = h.data) == null ? void 0 : f.surplusRotateNum) || 0)
        },
        w = async () => {
            const h = await O(Z4());
            if (h) {
                n.turntableList = h.data.rewardList;
                const y = h.data.vipRating.split(",");
                n.vipRating = y.map(f => `Vip${f}`), n.taskList = h.data.taskList, n.bindingType = h.data.bindingType
            }
        },
        b = async () => {
            await Promise.all([u(), p(), w()])
        },
        C = An(async () => {
            const h = await $4();
            h.code === 0 ? (g.value.play(), setTimeout(y => {
                n.result = h.data;
                const f = n.turntableList.findIndex(Q => Q.rewardSetting === h.data.rewardSetting);
                if (f == -1) return g.value.stop(0);
                g.value.stop(f)
            }, 1500)) : [904].includes(h.msgCode) ? Qe(s("turntableTip", [i[h.data.bindingType]])) : Se(h)
        }, 600),
        R = async () => {
            n.result && (n.rotateCount = n.result.surplusRotateNum || 0, n.dialog = !0, d.value && d.value.resetRefresh())
        };

    function B() {
        e.go(-1)
    }
    return {
        store: n,
        prizes: v,
        myLucky: g,
        bindingTypes: i,
        recordQuery: o,
        pull: d,
        getTurntabl: b,
        getTurntablInfo: w,
        getTurntablAmount: u,
        onStart: C,
        onEnd: R,
        onClick: B
    }
}

function xs() {
    const {
        t: e
    } = ie(), s = ue({
        firstDepositConfig: {
            activityStartDate: "",
            bonusLimit: 0,
            firstDeposiSendBonust: 0
        },
        giftPackConfigList: [],
        rewardRecordList: []
    }), n = M(() => {
        var p;
        return (p = s.firstDepositConfig) == null ? void 0 : p.activityStartDate
    }), o = M(() => {
        var p;
        return (p = s.firstDepositConfig) == null ? void 0 : p.bonusLimit
    }), A = M(() => {
        var p;
        return (p = s.firstDepositConfig) == null ? void 0 : p.firstDeposiSendBonust
    }), i = M(() => s.giftPackConfigList || []), g = M(() => s.rewardRecordList || []), d = async () => {
        const p = await O(ef());
        p && (s.firstDepositConfig = p.data.firstDepositConfig, s.giftPackConfigList = p.data.giftPackConfigAwardList, s.rewardRecordList = p.data.newUserRewardRecordList)
    };
    return {
        store: s,
        time: n,
        bonusLimit: o,
        firstDeposiSendBonust: A,
        giftPackConfigList: i,
        rewardRecordList: g,
        onReceive: async p => {
            await O(os({
                orderId: p,
                optType: 2
            })) && (be(e("receiveSuccess")), await d())
        },
        onApply: async p => {
            await O(os({
                orderId: p,
                optType: 1
            })) && (be(e("applySuccess")), await d())
        },
        getConfig: d
    }
}
const Lf = {
        login: "Login",
        register: "Register",
        purchase: "Purchase",
        first_purchase: "FirstPurchase",
        recharge: "Recharge"
    },
    Gf = {
        login: "Login",
        register: "CompleteRegistration",
        recharge: "AddToCart",
        first_purchase: "AddToCart",
        purchase: "Purchase"
    },
    Xe = ln("gtag"),
    kf = () => "dataLayer" in window,
    Uf = () => "fbq" in window;
Xe.on((e, s) => {
    kf() && window.gtag("event", e, s), Uf() && (window.fbq("track", Lf[e], s), window.fbq("track", Gf[e], s));
    try {
        if (If() ? Sf(e, s) : tt() && Fs(e, s), !window.android || !window.android.onEvent) return;
        s ? window.android.onEvent(e, JSON.stringify(s)) : window.android.onEvent(e)
    } catch {}
});

function cs() {
    return {
        onTriggerLogin: A => {
            Xe.emit("login")
        },
        onTriggerRegister: A => {
            Xe.emit("register")
        },
        onTriggerPurchase: (A, i) => {
            Xe.emit(i ? "first_purchase" : "purchase", {
                currency: "฿",
                value: 0
            })
        },
        onTriggerRecharege: A => {
            Xe.emit("recharge", {
                currency: "฿",
                value: A.amount || 0
            })
        }
    }
}
const It = D(),
    UM = () => {
        const {
            t: e
        } = ie(), s = M(() => {
            var i;
            return ((i = It.value) == null ? void 0 : i.walletActivationStatus) === 1
        });
        return {
            getInfo: async () => {
                const i = await O(_f({
                    ip: localStorage.getItem("ARIP")
                }));
                i.code === 0 && (It.value = i.data)
            },
            arWallet: It,
            goWallet: async i => {
                var v;
                rt({
                    message: e("loading") + "...",
                    forbidClick: !0
                });
                const g = {
                        returnUrl: "https://" + window.location.host + "/#/main"
                    },
                    d = await O(vf(g));
                if ((d == null ? void 0 : d.code) === 0) {
                    let u = (v = d == null ? void 0 : d.data) == null ? void 0 : v.walletAccessUrl;
                    window.location.href = u
                }
                jt()
            },
            goActive: async i => {
                var v;
                rt({
                    message: e("loading") + "...",
                    forbidClick: !0
                });
                const g = {
                        returnUrl: "https://" + window.location.host + "/#/main"
                    },
                    d = await O(uf(g));
                (d == null ? void 0 : d.code) === 0 && (window.location.href = ((v = d == null ? void 0 : d.data) == null ? void 0 : v.walletActivationPageUrl) + "&memberId=" + d.data.memberId + "&merchantCode=" + d.data.merchantCode + "&timestamp=" + d.data.timestamp), jt()
            },
            isArWalletActive: s
        }
    };

function MM() {
    const e = oe(),
        s = ue({
            config: {
                configAmount: 0,
                effectiveQuantity: 0,
                invitationCode: "",
                numberOfInvitations: 0,
                totalAmount: 0
            }
        }),
        n = D({
            pageNo: 1,
            pageSize: 10
        }),
        o = D([]),
        A = M(() => s.config.configAmount),
        i = M(() => s.config.totalAmount),
        g = M(() => `${location.origin}/#/register?invitationCode=${s.config.invitationCode||""}`),
        d = M(() => s.config.invitationCode || ""),
        v = M(() => s.config.effectiveQuantity),
        u = M(() => s.config.numberOfInvitations);
    return {
        getInfo: async () => {
            const C = await O(rf());
            C && (s.config = C.data)
        },
        goBack: () => {
            e.go(-1)
        },
        goInvitation: async () => {
            await e.push({
                name: "TeamPartner-Invitation"
            })
        },
        amount: A,
        invitationLink: g,
        totalAmount: i,
        invitationCode: d,
        effectiveQuantity: v,
        numberOfInvitations: u,
        query: n,
        partnerList: o
    }
}
const fe = ue({
        banner: [],
        winInfoList: [],
        rankList: [],
        gameTypeList: [],
        allGameList: void 0,
        slotsGame: [],
        videoGame: []
    }),
    Mf = () => {
        const e = nt(),
            s = ve(),
            {
                start: n,
                end: o,
                flag: A
            } = Nt(),
            {
                t: i
            } = ie(),
            g = D(!0),
            d = rn("show-pwa-download", !0),
            v = M(() => e.getIsShowLotteryDragon),
            u = M(() => e.getIsCanAppDownload),
            p = M(() => e.getIsShowAppDownloadIcon),
            w = M(() => e.getProjectLogo),
            b = M(() => fe.banner),
            C = M(() => fe.winInfoList);

        function R() {
            const S = Ft();
            g.value = !(s.getUserInfo.unRead > 0), S.setReadState(g.value)
        }
        const B = async () => {
            const S = await O(sf());
            S && (fe.banner = S.data, fe.banner.length === 0 && fe.banner.push({
                bannerUrl: z("home", "banner"),
                url: ""
            }))
        };
        async function h() {
            const S = await O(tf());
            if (S) {
                let T = navigator.userAgent.toLowerCase(),
                    V = "";
                T.indexOf("windows") != -1 || T.indexOf("android") != -1 ? V = S.data.androidUrl : T.indexOf("iphone") != -1 || T.indexOf("mac") != -1 || T.indexOf("ipad") != -1 ? V = S.data.iosUrl : V = S.data.androidUrl, ct(V)
            }
        }
        async function y() {
            const [S, T] = await vy(af());
            if (S) Qe({
                message: S.msg,
                wordBreak: "break-word"
            });
            else if (T) {
                fe.winInfoList = T.dataList || [];
                const V = T.penarikanList || [];
                V.length > 0 && (fe.rankList = V)
            }
        }
        return {
            getBannerApi: B,
            onDown: h,
            getMessagesData: R,
            getWinInfoDetail: y,
            getGameType: async () => {
                const S = await O(Vs());
                S && (fe.gameTypeList = S.data || [])
            },
            getAllGame: async () => {
                const S = await O(Qs()),
                    T = ["slot", "video", "chess", "sport", "lottery"];
                if (S) {
                    let V = {};
                    for (const [P, W] of Object.entries(S.data)) {
                        let L = P.toLocaleLowerCase();
                        P !== "popular" && T.includes(L) ? V[L] = W.filter(I => I.state === 1) : V[L] = W
                    }
                    fe.allGameList = V
                }
            },
            onItemClick: S => {
                if (!s.token) {
                    Fe.push({
                        name: "login"
                    });
                    return
                }
                xe({
                    title: i("tips"),
                    message: i("tipsPlayGame"),
                    cancelButtonText: i("cancel"),
                    showCancelButton: !0
                }).then(async () => {
                    var P;
                    n(() => {
                        xe({
                            title: "",
                            message: i("gameLoadTimeOut")
                        }).then(() => {
                            Fe.push({
                                path: "/"
                            })
                        })
                    });
                    let T = {
                        gameCode: S.gameCode || S.gameID,
                        vendorCode: Number(S.vendorId) || Number(S.slotsTypeID),
                        returnUrl: location.origin
                    };
                    const V = await O(Yt({ ...T,
                        phonetype: _t()
                    }));
                    if (V && !A.value) {
                        if (!A.value && o(!0), ["5"].includes(`${S.vendorId}`)) return Fe.push({
                            name: "game",
                            query: {
                                url: ys((P = V == null ? void 0 : V.data) == null ? void 0 : P.url)
                            }
                        });
                        tt() ? Wt("game", { ...(V == null ? void 0 : V.data) || {},
                            gameName: S.slotsName || S.gameNameEn || ""
                        }) : ct(V == null ? void 0 : V.data, 1)
                    } else {
                        !A.value && o(!0);
                        return
                    }
                })
            },
            getSlotList: async () => {
                const S = await O(Os());
                S && (fe.slotsGame = S.data)
            },
            getVideonChildGame: async () => {
                const S = await O(Ps());
                S && (fe.videoGame = S.data)
            },
            isRead: g,
            getBanner: b,
            getWinInfo: C,
            showChanglong: v,
            isAppDownload: u,
            isAppDownloadIcon: p,
            showPWA: d,
            projectIcon: w,
            homeState: fe
        }
    },
    Tf = "/assets/png/popular-044514e1.png",
    Qf = "/assets/png/popular_icon-6977543a.png",
    Vf = "/assets/png/lottery-c0a9176b.png",
    Of = "/assets/png/lottery_icon-7f9c3132.png",
    Pf = "/assets/png/video-c9dce622.png",
    Ff = "/assets/png/video_icon-f7afb28f.png",
    xf = "/assets/png/slot-bf07af03.png",
    Nf = "/assets/png/slot_icon-ffc91891.png",
    Hf = "/assets/png/sport-ac79bf87.png",
    Yf = "/assets/png/sport_icon-314ece36.png",
    Wf = "/assets/png/chess-9c4d1dff.png",
    Jf = "/assets/png/chess_icon-6930b633.png",
    Kf = "/assets/png/fish-a70df76d.png",
    Xf = "/assets/png/fish_icon-bee0f4fe.png",
    jf = "/assets/png/flash-eac62fa4.png",
    zf = "/assets/png/flash_icon-4db9e3b4.png",
    de = ue({
        gameList: [],
        categoryList: [],
        active: 0,
        allGame: null,
        loading: !1,
        electron: [],
        video: [],
        imgMap: new Map
    }),
    Zf = {
        1: ["popular"],
        2: ["sport", "chess", "video"],
        3: ["lottery"],
        4: ["slot"],
        5: ["flash", "fish"]
    },
    Ns = Symbol("GAME_PROVIDER_KEY");

function TM() {
    return cn(Ns, {})
}

function QM() {
    const e = oe(),
        {
            start: s,
            end: n,
            flag: o
        } = Nt(),
        {
            t: A
        } = ie(),
        i = M(() => [{
            isShow: !0,
            key: "popular",
            title: A("hot"),
            image: Tf,
            img: Qf,
            state: 1
        }, {
            isShow: !0,
            key: "lottery",
            title: A("lottery"),
            image: Vf,
            img: Of
        }, {
            isShow: !0,
            key: "video",
            title: A("live"),
            image: Pf,
            img: Ff
        }, {
            isShow: !0,
            key: "slot",
            title: A("electronic"),
            image: xf,
            img: Nf
        }, {
            isShow: !0,
            key: "sport",
            title: A("sport"),
            image: Hf,
            img: Yf
        }, {
            isShow: !0,
            key: "chess",
            title: A("chess"),
            image: Wf,
            img: Jf
        }, {
            isShow: !0,
            key: "fish",
            title: A("fishing"),
            image: Kf,
            img: Xf
        }, {
            isShow: !0,
            key: "flash",
            title: A("miniGame"),
            image: jf,
            img: zf
        }].map(({
            img: k,
            ...ne
        }) => Object.assign({}, ne, {
            img: de.imgMap.get(ne.key) || k
        }))),
        g = D(0),
        d = M(() => i.value.map(k => k.key)),
        v = M(() => de.allGame),
        u = M(() => de.electron),
        p = M(() => de.video),
        w = M(() => i.value[g.value]),
        b = M(() => {
            var k;
            return ((k = i.value[g.value]) == null ? void 0 : k.key) || ""
        }),
        C = M(() => {
            var k;
            return ((k = de.allGame) == null ? void 0 : k[b.value]) || []
        }),
        R = M(() => de.allGame ? de.allGame ? de.allGame.popular ? de.allGame.popular[0] : [] : [] : []),
        B = M(() => de.allGame ? de.allGame.popular ? de.allGame.popular[1] : [] : []),
        h = M(() => de.allGame ? de.allGame.lottery || [] : []),
        y = M(() => de.loading),
        f = M(() => {
            let k = -1;
            for (const [ne, J] of Object.entries(Zf)) J.includes(b.value) && (k = Number(ne));
            return k
        }),
        Q = new Map([{
            value: 1,
            path: "WinGo",
            rule: "winGoRule"
        }, {
            value: 3,
            path: "5D",
            rule: "d5Rule"
        }, {
            value: 2,
            path: "K3",
            rule: "k3Rule"
        }, {
            value: 4,
            path: "WinTrx",
            rule: "trxRule"
        }, {
            value: 5,
            path: "XoSo",
            rule: "xosoRule"
        }, {
            value: 6,
            path: "XoSo",
            rule: "xosoRule"
        }, {
            value: 7,
            path: "Binguo",
            rule: ""
        }, {
            value: 8,
            path: "4D",
            rule: ""
        }].map(k => [k.value, k])),
        G = k => {
            g.value = k
        },
        se = async k => {
            if (!ve().token) {
                await e.push({
                    name: "login"
                });
                return
            }
            xe({
                title: A("tips"),
                message: A("tipsPlayGame"),
                cancelButtonText: A("cancel"),
                showCancelButton: !0
            }).then(async () => {
                s(() => {
                    xe({
                        title: "",
                        message: A("gameLoadTimeOut")
                    }).then(() => {
                        e.push({
                            path: "/"
                        })
                    })
                });
                let J = {
                    gameCode: k.gameCode || k.gameID,
                    vendorCode: Number(k.vendorId) || Number(k.slotsTypeID),
                    returnUrl: location.origin
                };
                const q = await O(Yt({ ...J,
                    phonetype: _t()
                }));
                if (q && !o.value) tt() ? Wt("game", { ...(q == null ? void 0 : q.data) || {},
                    gameName: k.slotsName || k.gameNameEn || ""
                }) : ct(q == null ? void 0 : q.data, 1);
                else {
                    !o.value && n(!0);
                    return
                }!o.value && n()
            })
        },
        F = k => {
            const ne = Q.get(k.id || k.categoryId);
            if (!ne) return console.error("no found id path");
            e.push({
                name: "AllLotteryGames-" + ne.path,
                query: {
                    typeId: k.typeId,
                    id: k.id
                }
            })
        },
        S = async k => {
            var J;
            if (!ve().token) {
                await e.push({
                    name: "login"
                });
                return
            }
            if (["chess", "slot", "video"].includes(k.key || b.value)) {
                const q = ((J = de.allGame) == null ? void 0 : J[k.key || b.value]) || [];
                sessionStorage.setItem("slotGamesList", JSON.stringify(q)), sessionStorage.setItem("gameType", JSON.stringify(k.key || b.value)), sessionStorage.setItem("clickedItem", JSON.stringify(k)), await e.push({
                    name: "AllOnlineGames",
                    query: {
                        game: k.key || b.value,
                        vendorCode: k.slotsName
                    }
                });
                return
            }
            await se(k)
        },
        T = k => {
            const ne = ["slot", "video", "chess", "sport", "lottery"],
                J = {};
            for (const [q, re] of Object.entries(k)) {
                const x = q.toLocaleLowerCase();
                if (ne.includes(x)) J[x] = re.filter(H => H.state === 1);
                else if (x === "popular") {
                    const H = k[x];
                    J[x] = [H.platformList, H.clicksTopList], J.clicksVideoTopList = H.clicksVideoTopList
                } else J[x] = re
            }
            return J
        },
        V = async (k = !0) => {
            const ne = async () => ({
                data: null
            });
            if (de.loading) return;
            de.loading = !0;
            const [{
                data: J
            }, {
                data: q
            }] = await Promise.all([k ? Vs() : ne(), Qs()]), re = (J || []).filter(x => x.state === 1);
            de.imgMap = new Map(re.map(x => [x.categoryCode.toLowerCase(), x.categoryImg])), de.categoryList = re, de.allGame = T(q) || {}, de.loading = !1, sessionStorage.setItem("gameData", JSON.stringify(q))
        },
        P = async () => {
            const {
                result: k,
                data: ne
            } = await Os();
            ne && (de.electron = ne)
        },
        W = async () => {
            const {
                result: k,
                data: ne
            } = await Ps();
            ne && (de.video = ne)
        };
    return {
        store: de,
        gameList: i,
        currentGame: b,
        platformList: R,
        current: w,
        loading: y,
        active: g,
        gameType: f,
        currentList: C,
        gameTopList: B,
        allGame: v,
        lotteryType: h,
        gameListKey: d,
        setMenu: k => {
            de.gameList = k
        },
        goGame: se,
        onItemLottery: F,
        onGame: S,
        getGameList: V,
        setActive: G,
        useProvid: () => {
            gn(Ns, {
                gameList: i,
                currentGame: b,
                current: w,
                platformList: R,
                loading: y,
                active: g,
                gameType: f,
                currentList: C,
                gameTopList: B,
                allGame: v,
                lotteryRoutes: Q,
                videoList: p,
                electronList: u,
                onGame: S,
                goGame: se,
                setActive: G,
                getElectronChildGame: P,
                getVideonChildGame: W,
                onItemLottery: F
            })
        },
        getElectronChildGame: P,
        getVideonChildGame: W
    }
}
const Me = ue({
    list: [],
    timer: -1
});

function VM() {
    const e = oe(),
        s = M(() => Me.list),
        n = () => e.push({
            name: "Notification"
        }),
        o = () => {
            clearInterval(Me.timer)
        },
        A = () => {
            o(), Me.timer = setInterval(() => {
                Me.list.push(Me.list.shift())
            }, 7e3)
        };
    return {
        noticeList: s,
        startTimer: A,
        getNotice: async () => {
            try {
                const {
                    data: g
                } = await of ({
                    pageNo: 1,
                    pageSize: 5
                });
                Me.list = g.list || [], Me.list.length && A()
            } catch {}
        },
        clearTimer: o,
        goNotice: n
    }
}
const qf = Le({
        id: "userStore",
        state: () => ({
            currentView: "SignIn",
            userForm: {
                number: "",
                password: "",
                verify: "",
                rePassword: "",
                invitation: "",
                numberType: "",
                email: "",
                remember: !1,
                termAndPolicy: !1,
                vCode: "",
                logintype: "",
                rememberpwd: !1
            },
            rPwdForm: {
                number: "",
                numberType: "",
                email: "",
                verify: "",
                password: "",
                rePassword: ""
            },
            ARIP: "",
            numberTypes: [],
            countDown: 0,
            countEmailDown: 0,
            remember: !1,
            messageDetail: {},
            isShowSMS: !1,
            isRegisterState: !1,
            isAddBankCardSMS: !1,
            isOpenForgetPasswordSMSState: !1,
            isOpenForgetPasswordEmailState: !1,
            isOpenRegisterEmailState: !1,
            isOpenRegisterSMSState: !1,
            isOpenCaptcha: !1,
            isOpenAddWithdrawEmailState: !1,
            isOpenAddWithdrawSMSState: !1,
            isOpenAddBankCardOpenEmail: !1,
            isOpenExternalAccount: !1,
            state: null
        }),
        getters: {
            getCurrentView: e => e.currentView,
            getUserForm: e => e.userForm,
            getNumberTypes: e => e.numberTypes,
            getMessagesDetail: e => e.messageDetail
        },
        actions: {
            setCurrentView(e) {
                this.currentView = e
            },
            setUserForm(e) {
                this.userForm = e
            },
            setNumberTypes(e) {
                this.numberTypes = e
            },
            setNumberType(e) {
                this.userForm.numberType = e, this.rPwdForm.numberType = e
            },
            setCountDown(e) {
                this.countDown = e
            },
            setCountEmailDown(e) {
                this.countEmailDown = e
            },
            setMessageDetail(e) {
                this.messageDetail = e
            },
            loginout() {
                localStorage.removeItem("tokenHeader"), localStorage.removeItem("refreshToken"), localStorage.removeItem("numberType"), localStorage.removeItem("number"), localStorage.removeItem("email"), localStorage.removeItem("isToLogin"), sessionStorage.removeItem("ar_pay")
            },
            remember(e = !1) {
                const s = this.userForm.logintype,
                    n = `ar_account_${s}`,
                    o = localStorage.getItem(n) || "",
                    A = u => {
                        try {
                            return JSON.parse(u)
                        } catch {
                            return null
                        }
                    };
                if (e) {
                    const u = A(o);
                    if (!u) return;
                    s === "email" ? this.userForm.email = u.email : (this.userForm.number = u.number, u.numberType && (this.userForm.numberType = u.numberType)), u.password && (this.userForm.rememberpwd = !0, this.userForm.password = u.password);
                    return
                }
                const i = this.userForm.numberType,
                    g = this.userForm.number,
                    d = this.userForm.email,
                    v = this.userForm.rememberpwd ? this.userForm.password : "";
                localStorage.setItem(n, JSON.stringify({
                    email: d,
                    numberType: i,
                    number: g,
                    password: v,
                    logintype: s
                }))
            },
            async signIn(e) {
                let s = {};
                e.logintype == "email" ? s = {
                    username: e.email,
                    captchaId: e.captchaId,
                    track: e.track,
                    pwd: e.password,
                    phonetype: -1,
                    logintype: e.logintype
                } : s = {
                    username: e.numberType + e.number,
                    captchaId: e.captchaId,
                    track: e.track,
                    pwd: e.password,
                    phonetype: -1,
                    logintype: e.logintype
                }, e.vCode && (s.vCode = e.vCode);
                const n = ve(),
                    {
                        onTriggerLogin: o
                    } = cs();
                return new Promise(async (A, i) => {
                    const g = await Qy(s, {
                        "AR-REAL-IP": this.ARIP
                    });
                    if (g.data && g.code === 0) {
                        o(g.data);
                        const {
                            token: v,
                            tokenHeader: u,
                            refreshToken: p
                        } = g.data;
                        n.setToken(v), this.remember(), localStorage.setItem("tokenHeader", u), localStorage.setItem("refreshToken", p), localStorage.setItem("numberType", e.numberType), localStorage.setItem("number", e.number || ""), localStorage.setItem("email", e.email || ""), localStorage.setItem("isToLogin", "1"), await this.getUserInfo({
                            signature: v
                        }), fy("/home");
                        const {
                            setLoading: w
                        } = vt();
                        return w(!1), A({})
                    }[122, 33].includes(g.msgCode) || Se(g), i(g)
                })
            },
            async getUserInfo(e) {
                var A;
                const s = ve(),
                    n = tB(),
                    o = await O(Ls(e));
                o && (s.setUserInfo(o == null ? void 0 : o.data), n.setAmount((A = o == null ? void 0 : o.data) == null ? void 0 : A.amount), n.setUSDTCanAdd(o == null ? void 0 : o.data))
            },
            async register(e) {
                const {
                    onTriggerRegister: s
                } = cs(), n = await O(Oy(e, {
                    "AR-REAL-IP": this.ARIP
                }));
                return new Promise(async (o, A) => {
                    n ? (s(n.data), o(n)) : A(n)
                })
            },
            async getIp() {
                if (!this.ARIP) try {
                    const e = await Ze.post("https://tosma.lhlasjdanc.com/"),
                        s = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
                    e.data && s.test(e.data) && (this.ARIP = e.data || "")
                } catch {}
            },
            sendCode() {
                this.countDown = 120;
                const e = setInterval(() => {
                    this.countDown > 0 ? this.countDown-- : clearInterval(e), this.countDown === 0 && clearInterval(e)
                }, 1e3)
            },
            sendEmailCode() {
                this.countEmailDown = 300;
                const e = setInterval(() => {
                    this.countEmailDown > 0 ? this.countEmailDown-- : clearInterval(e), this.countEmailDown === 0 && clearInterval(e)
                }, 1e3)
            },
            setRemember(e) {
                this.remember = e
            },
            setICode(e) {
                this.userForm.invitation = e
            },
            clearRpwdData() {
                this.rPwdForm = {
                    number: "",
                    numberType: nt().getAreacode.replace("+", "") || "",
                    verify: "",
                    password: "",
                    rePassword: "",
                    email: ""
                }, this.userForm.number = ""
            },
            async getRegisterState() {
                const e = await O(Gs());
                if (e) {
                    const {
                        registerSMSState: s,
                        registerState: n,
                        isOpenAddBankCardSMS: o,
                        isOpenForgetPasswordSMS: A,
                        isOpenForgetPasswordEmail: i,
                        registerEmailState: g,
                        registerMobileState: d,
                        isOpenAddWithdrawEmail: v,
                        isOpenAddWithdrawSMS: u,
                        isOpenCaptcha: p = "0",
                        addBankCardOpenEmail: w,
                        isOpenExternalAccount: b
                    } = e.data;
                    this.state = e.data;
                    const C = (R = "0") => R === "1";
                    this.isShowSMS = C(s), this.isRegisterState = C(n), this.isAddBankCardSMS = C(o), this.isOpenForgetPasswordSMSState = C(A), this.isOpenForgetPasswordEmailState = C(i), this.isOpenRegisterEmailState = C(g), this.isOpenRegisterSMSState = C(d), this.isOpenCaptcha = C(p), this.isOpenAddWithdrawEmailState = C(v), this.isOpenAddWithdrawSMSState = C(u), this.isOpenAddBankCardOpenEmail = C(w), this.isOpenExternalAccount = C(b)
                }
            }
        }
    }),
    $f = [{
        name: "English",
        key: "en"
    }, {
        name: "中文",
        key: "zh"
    }, {
        name: "Tiếng Việt",
        key: "vi"
    }, {
        name: "Bahasa Melayu",
        key: "my"
    }, {
        name: "Bahasa Indonesia",
        key: "id"
    }, {
        name: "ภาษาไทย",
        key: "th"
    }, {
        name: "မြန်မာဘာသာ",
        key: "md"
    }, {
        name: "Português",
        key: "bra"
    }, {
        name: "हिंदी",
        key: "hd"
    }, {
        name: "русский",
        key: "rus"
    }, {
        name: "Filipino",
        key: "ph"
    }, {
        name: "বাংলা",
        key: "bd"
    }, {
        name: "اردو",
        key: "pk"
    }, {
        name: "عربي",
        key: "ar"
    }],
    ve = Le({
        id: "GlobalState",
        state: () => ({
            token: ot("token", ""),
            userInfo: ot("userInfo", {}),
            language: hs(),
            clientConfig: ot("clientConfig", {}),
            requsetData: "",
            isOpen: !0,
            apiUrl: localStorage.getItem("ApiUrl") || "",
            visibility: 1,
            deferredPrompt: null,
            dollarSign: "",
            projectLogo: "",
            headLogo: "",
            areaCode: null,
            messageList: null
        }),
        getters: {
            getToken: e => e.token,
            getLanguage: e => e.language,
            getLanguageIcon: e => z("languages", `${e.language}`),
            getLanguageName: e => {
                for (let s of $f)
                    if (s.key == e.language) return s.name
            },
            getUserInfo: e => e.userInfo,
            getClientConfig: e => e.clientConfig,
            getReqData: e => e.requsetData,
            getIsOpen: e => e.isOpen,
            getApiUrl: e => e.apiUrl,
            getDollarSign: e => e.dollarSign,
            getMessage: e => e.messageList
        },
        actions: {
            setToken(e) {
                this.token = e, localStorage.setItem("token", e), sessionStorage.removeItem("pop_prompt"), sessionStorage.removeItem("pop_laundry")
            },
            setUserInfo(e) {
                if (this.userInfo = e, e.groupDataShowAuth && e.groupDataShowAuth.length) {
                    const s = {};
                    e.groupDataShowAuth.forEach((n, o) => {
                        s[n.id] = n.isShow
                    }), sessionStorage.setItem("permission", JSON.stringify(s))
                } else sessionStorage.removeItem("permission");
                ot("userInfo", e)
            },
            updateLanguage(e) {
                this.language = e
            },
            setPrompt(e) {
                this.deferredPrompt = e
            },
            SET_HTML_ATTR(e, s) {
                var n;
                (n = document.querySelector("link[rel='icon']")) == null || n.setAttribute("href", e), document.title = s
            },
            setReqData(e) {
                this.requsetData = e
            },
            setIsOpen(e) {
                this.isOpen = e
            },
            setvisibility(e = null) {
                typeof e == "number" ? this.visibility = e : this.visibility++
            },
            setMessage(e) {
                this.messageList = e
            }
        }
    }),
    nt = Le({
        id: "SettingStore",
        state: () => ({
            areaPhoneLenList: [],
            areacode: "",
            headLogo: {}.VITE_BASE_HEADLOGO,
            isShowAppDownloadUp: !1,
            isShowAppDownloadDown: !1,
            isShowLotteryDragon: !1,
            jackportMaxReswadAmount: 0,
            projectName: "sit",
            projectLogo: {}.VITE_BASE_PROJECTLOGO,
            languages: "en",
            webIco: "",
            dollarSign: "฿",
            upperOrLower: {}.VITE_BASE_UPPERORLOWER,
            defaultCurrentLanguage: "",
            isSplitLocalEWallet: !1,
            isOpenLoginChangeLanguage: "0",
            ossUrl: "",
            rewardValidityTime: 0,
            winRate: {},
            isShowHotGameWinOdds: !1,
            isShowAppHandCodeWashingSwitch: !1,
            bigTurntableLink: "",
            isOpenTurntable: !1,
            isPartnerReward: !1
        }),
        getters: {
            getIsCanAppDownload: e => e.isShowAppDownloadUp,
            getIsShowAppDownloadIcon: e => e.isShowAppDownloadDown,
            getIsShowLotteryDragon: e => e.isShowLotteryDragon,
            getProjectLogo: e => e.projectLogo,
            getHeadLogo: e => e.headLogo,
            getDollarSign: e => e.dollarSign,
            getAreaPhoneLenList: e => e.areaPhoneLenList,
            getAreacode: e => e.areacode,
            getLanguage: e => e.languages,
            getWebIco: e => e.webIco,
            getProjectName: e => e.projectName,
            getUpperOrLower: e => e.upperOrLower,
            getDL: e => e.defaultCurrentLanguage,
            getIsSplitLocalEWallet: e => e.isSplitLocalEWallet,
            getLoginChangeLanguage: e => e.isOpenLoginChangeLanguage,
            getOSSUrl: e => e.ossUrl,
            getRewardValidityTime: e => e.rewardValidityTime,
            getWinRate: e => e.winRate,
            getIsShowAppHandCodeWashingSwitch: e => e.isShowAppHandCodeWashingSwitch,
            getBigTurntableLink: e => e.bigTurntableLink,
            getOpenTurntable: e => e.isOpenTurntable,
            getJackportMaxReswadAmount: e => e.jackportMaxReswadAmount,
            getIsPartnerReward: e => e.isPartnerReward
        },
        actions: {
            async getHomeSetting() {
                var s, n;
                const e = await O(lf());
                if (e && e.data) {
                    const {
                        areaPhoneLenList: o,
                        headLogo: A,
                        isShowAppDownloadUp: i,
                        isShowAppDownloadDown: g,
                        isShowLotteryDragon: d,
                        jackportMaxReswadAmount: v,
                        projectName: u,
                        projectLogo: p,
                        languages: w,
                        webIco: b,
                        dollarSign: C,
                        upperOrLower: R,
                        defaultCurrentLanguage: B,
                        isSplitLocalEWallet: h,
                        isOpenLoginChangeLanguage: y,
                        electronicWinRateExternalLink: f,
                        electronicWinRateImgUrl: Q,
                        isShowElectronicWinRateExternalLink: G,
                        isShowHotGameWinOdds: se,
                        isShowAppHandCodeWashingSwitch: F,
                        rewardValidityTime: S,
                        ossUrl: T,
                        bigTurntableLink: V,
                        isOpenTurntable: P,
                        isPartnerReward: W
                    } = e.data;
                    this.ossUrl = T, this.rewardValidityTime = S, this.areaPhoneLenList = o, this.headLogo = A, this.isShowAppDownloadUp = i, this.isShowAppDownloadDown = g, this.isShowLotteryDragon = d, this.jackportMaxReswadAmount = v, this.projectLogo = p, this.projectName = u, this.languages = w, this.webIco = b, this.dollarSign = C, this.upperOrLower = R, this.areacode = ((s = o[0]) == null ? void 0 : s.area) || "", this.isSplitLocalEWallet = h, this.isOpenLoginChangeLanguage = y, this.isShowHotGameWinOdds = se || !1, this.isShowAppHandCodeWashingSwitch = F, this.winRate = {
                        electronicWinRateExternalLink: f,
                        electronicWinRateImgUrl: Q,
                        isShowElectronicWinRateExternalLink: G
                    }, this.bigTurntableLink = V, this.isOpenTurntable = P, this.isPartnerReward = W, sessionStorage.setItem("dollarSign", C), sessionStorage.setItem("areaPhoneLenList", JSON.stringify(o)), localStorage.getItem("language") || (this.defaultCurrentLanguage = B.replace("tha", "th"), by(this.defaultCurrentLanguage)), (n = document.querySelector("link[rel='icon']")) == null || n.setAttribute("href", this.webIco), document.title = this.projectName
                }
            }
        }
    }),
    {
        t: eB
    } = Ge.global,
    tB = Le({
        id: "walletStore",
        state: () => ({
            bankName: {},
            withdrawalslist: [],
            bankList: [],
            withdrawals: {
                amount: 0,
                pwd: "",
                type: 0,
                bid: 0
            },
            payTabList: [],
            amount: 0,
            timestampLast: 0,
            allwallets: "",
            isAllowUserAddUSDT: !0
        }),
        getters: {
            getBankName: e => e.bankName,
            getWithdrawalslist: e => e.withdrawalslist,
            getBankList: e => e.bankList,
            getWithdrawal: e => e.withdrawals,
            getPayTabList: e => e.payTabList,
            getAmount: e => e.amount,
            getTimestampLast: e => e.timestampLast,
            getAllwallets: e => e.allwallets,
            getADDUSTD: e => e.isAllowUserAddUSDT
        },
        actions: {
            setBankName(e) {
                this.bankName = e
            },
            setWithdrawalslist(e) {
                this.withdrawalslist = e
            },
            setBankList(e) {
                this.bankList = e
            },
            setWithdrawal(e) {
                this.withdrawals = e
            },
            setPayTabList(e) {
                this.payTabList = e
            },
            setAmount(e) {
                this.amount = e
            },
            setUSDTCanAdd(e) {
                this.isAllowUserAddUSDT = (e == null ? void 0 : e.isAllowUserAddUSDT) === void 0 ? !0 : (e == null ? void 0 : e.isAllowUserAddUSDT) === "1"
            },
            setTimestampLast(e) {
                this.timestampLast = e
            },
            setAllwallets(e) {
                this.allwallets = e
            },
            async resetData(e, s) {
                const n = await O(s ? gf() : df());
                if (n) {
                    if (this.amount = n == null ? void 0 : n.data.amount, e) return;
                    be(eB("refreshSuccess"))
                }
            },
            async getPayTypeName() {
                const e = await O(pf());
                if (e) {
                    if (nt().getIsSplitLocalEWallet) {
                        let s = e.data.typelist.map(n => (n.payID === 18 && n.paySysName === "KBZPay" && (n.payNameUrl = z("wallet/recharge/detail", "kbz_icon"), n.payNameUrl2 = z("wallet/recharge/detail", "kbz_icon")), n.payID === 18 && n.paySysName === "WavePay" && (n.payNameUrl = z("wallet/recharge/detail", "wave_icon"), n.payNameUrl2 = z("wallet/recharge/detail", "wave_icon")), n));
                        this.setPayTabList(s)
                    }
                    this.setPayTabList(e.data.typelist)
                }
            }
        },
        persist: !0
    }),
    At = 5e3,
    OM = Le({
        id: "lorreryStore",
        state: () => ({
            1: {
                typeID: 1,
                typeName: "Win Go<br />1Min",
                tabName: "WinGo 1Min",
                intervalM: 1,
                scope: "1|10|100|1000",
                sort: 4,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            2: {
                typeID: 2,
                typeName: "Win Go<br />3Min",
                tabName: "WinGo 3Min",
                intervalM: 3,
                scope: "1|10|100|1000",
                sort: 3,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            3: {
                typeID: 3,
                typeName: "Win Go<br />5Min",
                tabName: "WinGo 5Min",
                intervalM: 5,
                scope: "1|10|100|1000",
                sort: 2,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            4: {
                typeID: 4,
                typeName: "Win Go<br />10Min",
                tabName: "WinGo 10Min",
                intervalM: 10,
                scope: "1|10|100|1000",
                sort: 1,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            5: {
                typeID: 5,
                typeName: "5D Lotre<br />1Min",
                tabName: "5D 1Min",
                intervalM: 1,
                scope: "1|10|100|1000",
                sort: 4,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            6: {
                typeID: 6,
                typeName: "5D Lotre<br />3Min",
                tabName: "5D 3Min",
                intervalM: 3,
                scope: "1|10|100|1000",
                sort: 3,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            7: {
                typeID: 7,
                typeName: "5D Lotre<br />5Min",
                tabName: "5D 5Min",
                intervalM: 5,
                scope: "1|10|100|1000",
                sort: 2,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            8: {
                typeID: 8,
                typeName: "5D Lotre<br />10Min",
                tabName: "5D 10Min",
                intervalM: 10,
                scope: "1|10|100|1000",
                sort: 1,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            9: {
                typeID: 9,
                typeName: "K3 Lotre<br />1Min",
                tabName: "K3 1Min",
                intervalM: 1,
                scope: "1|10|100|1000",
                sort: 4,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            10: {
                typeID: 10,
                typeName: "K3 Lotre<br />3Min",
                tabName: "K3 3Min",
                intervalM: 3,
                scope: "1|10|100|1000",
                sort: 3,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            11: {
                typeID: 11,
                typeName: "K3 Lotre<br />5Min",
                tabName: "K3 5Min",
                intervalM: 5,
                scope: "1|10|100|1000",
                sort: 2,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            12: {
                typeID: 12,
                typeName: "K3 Lotre<br />10Min",
                tabName: "K3 10Min",
                intervalM: 10,
                scope: "1|10|100|1000",
                sort: 1,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            13: {
                typeID: 13,
                typeName: "Trx Win Go<br />1Min",
                tabName: "Trx 1Min",
                intervalM: 1,
                scope: "1|10|100|1000",
                sort: 4,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            14: {
                typeID: 14,
                typeName: "Trx Win Go<br />3Min",
                tabName: "Trx 3Min",
                intervalM: 3,
                scope: "1|10|100|1000",
                sort: 3,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            15: {
                typeID: 15,
                typeName: "Trx Win Go<br />5Min",
                tabName: "Trx 5Min",
                intervalM: 5,
                scope: "1|10|100|1000",
                sort: 2,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            16: {
                typeID: 16,
                typeName: "Trx Win Go<br />10Min",
                tabName: "Trx 10Min",
                intervalM: 10,
                scope: "1|10|100|1000",
                sort: 1,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            30: {
                typeID: 30,
                typeName: "Win Go<br />30 second",
                tabName: "WinGo 30 Second",
                intervalM: .5,
                scope: "1|10|100|1000",
                sort: 1,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            winGoLock: !1,
            TrxLock: !1,
            k3Lock: !1,
            fiveDLock: !1,
            winType: {}.VITE_WINGO && JSON.parse({}.VITE_WINGO) || [1, 2, 3, 4]
        }),
        getters: {
            getWingo: e => e.winType.map(s => e[s]),
            get5D: e => [e[5], e[6], e[7], e[8]],
            getK3: e => [e[9], e[10], e[11], e[12]],
            getTrx: e => [e[13], e[14], e[15], e[16]]
        },
        actions: {
            async getWinGoData() {
                if (this.winGoLock) return;
                const e = await O(mf());
                e && e.data && (e.data.forEach(s => {
                    this.setData(s)
                }), this.winGoLock = !0, setTimeout(() => {
                    this.winGoLock = !1
                }, At))
            },
            async getTrxData() {
                if (this.TrxLock) return;
                const e = await O(wf());
                e && e.data && (e.data.forEach(s => {
                    this.setData(s)
                }), this.TrxLock = !0, setTimeout(() => {
                    this.TrxLock = !1
                }, At))
            },
            async getK3Data() {
                if (this.k3Lock) return;
                const e = await O(Cf());
                e && e.data && (e.data.forEach(s => {
                    this.setData(s)
                }), this.k3Lock = !0, setTimeout(() => {
                    this.k3Lock = !1
                }, At))
            },
            async get5DData() {
                if (this.fiveDLock) return;
                const e = await O(ff());
                e && e.data && (e.data.forEach(s => {
                    this.setData(s)
                }), this.fiveDLock = !0, setTimeout(() => {
                    this.fiveDLock = !1
                }, At))
            },
            async getWinGoRule(e) {
                if (this[e].gamePresentation) return;
                const s = await O(hf({
                    typeId: e
                }));
                s && s.data && (this[e].gamePresentation = s.data.gamePresentation)
            },
            async getTrxRule(e) {
                if (this[e].gamePresentation) return;
                const s = await O(bf({
                    typeId: e
                }));
                s && s.data && (this[e].gamePresentation = s.data.gamePresentation)
            },
            async getK3Rule(e) {
                if (this[e].gamePresentation) return;
                const s = await O(yf({
                    typeId: e
                }));
                s && s.data && (this[e].gamePresentation = s.data.gamePresentation)
            },
            async get5DRule(e) {
                if (this[e].gamePresentation) return;
                const s = await O(Bf({
                    typeId: e
                }));
                s && s.data && (this[e].gamePresentation = s.data.gamePresentation)
            },
            setData(e) {
                this[e.typeID].scope = e.scope, this[e.typeID].gamePresentation = e.gamePresentation, this[e.typeID].betMultiple = e.betMultiple
            }
        }
    }),
    ee = (e, s) => {
        const n = e.__vccOpts || e;
        for (const [o, A] of s) n[o] = A;
        return n
    },
    sB = {
        key: 0,
        class: "step"
    },
    nB = $({
        __name: "Progress",
        props: {
            strokeWidth: {
                type: Number,
                default: 6
            },
            total: {
                type: Number,
                default: 0
            },
            numerical: {
                type: Number,
                default: 0
            },
            color: {
                type: String,
                default: "linear-gradient(90deg, #FA2367 0%, #9B25C9 100%)"
            },
            trackColor: {
                type: String,
                default: "#362B4E"
            },
            isShowStep: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const s = e,
                n = M(() => ({
                    background: s.trackColor,
                    height: `${s.strokeWidth}px`,
                    "border-radius": `${s.strokeWidth}px`
                })),
                o = M(() => {
                    let i = "0";
                    return s.numerical == 0 || s.total == 0 ? i = "0" : s.numerical > s.total ? i = "100" : i = String((s.numerical / s.total * 100).toFixed(2)), {
                        background: s.color,
                        width: `${i}%`,
                        height: `${s.strokeWidth}px`,
                        "border-radius": `${s.strokeWidth}px`
                    }
                }),
                A = M(() => `${s.numerical}/${s.total}`);
            return (i, g) => (_(), m("div", null, [e.isShowStep ? (_(), m("div", sB, a(A.value), 1)) : K("", !0), t("div", {
                class: "progress",
                style: Ve(n.value)
            }, [t("div", {
                class: "line",
                style: Ve(o.value)
            }, null, 4)], 4)]))
        }
    });
const aB = ee(nB, [
        ["__scopeId", "data-v-64301cfe"]
    ]),
    oB = {
        class: "head"
    },
    AB = {
        class: "title"
    },
    iB = {
        class: "orange"
    },
    lB = {
        class: "description"
    },
    rB = {
        class: "foot"
    },
    cB = ["onClick"],
    gB = {
        class: "dialog-wrapper"
    },
    dB = {
        class: "dialog-title"
    },
    pB = {
        class: "dialog-content"
    },
    _B = $({
        __name: "listItem",
        props: {
            list: {
                type: Array,
                default: () => [{
                    rewardAmount: 123
                }]
            },
            isRule: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["gorecharge"],
        setup(e, {
            emit: s
        }) {
            const {
                t: n
            } = ie(), o = D(!1), A = D("");
            let i = !1;
            const {
                receiveFirstRechargeReward: g,
                ActiveSotre: d
            } = Ye(), {
                closeFirstSave: v
            } = Df(), u = (b, C) => {
                const {
                    canReceive: R,
                    isFinshed: B
                } = b;
                if (!R) return "n2" + (C ? " rule" : "");
                if (R && !B) return "n1" + (C ? " rule" : "");
                if (B) return "n3" + (C ? " rule" : "");
                if (!B) return "n2" + (C ? " rule" : "")
            }, p = b => {
                const {
                    canReceive: C,
                    isFinshed: R
                } = b;
                return n(C ? R ? "claimed" : "receive" : "torecharge")
            }, w = async b => {
                const {
                    canReceive: C,
                    isFinshed: R
                } = b;
                if (!C) return s("gorecharge");
                if (R || i) return;
                i = !0;
                const B = await g(b.id);
                i = !1, B && (d.value.receiveAmount = b.rewardAmount, d.value.showReceiveDialog = !0, v())
            };
            return (b, C) => {
                const R = N("van-dialog"),
                    B = he("lazy");
                return _(), m(Y, null, [(_(!0), m(Y, null, te(e.list, (h, y) => (_(), m("div", {
                    key: y,
                    class: "first_list-item"
                }, [t("div", oB, [t("div", AB, [j(a(b.$t("firstSave")), 1), t("span", null, a(h.rechargeAmount), 1)]), t("div", iB, "+ " + a(l(Ae)(h.rewardAmount)), 1)]), t("div", lB, a(b.$t("firstSaveT", [l(Ae)(h.rechargeAmount), l(Ae)(h.rewardAmount)])), 1), t("div", rB, [U(aB, {
                    total: h.rechargeAmount,
                    numerical: h.canReceive ? h.rechargeAmount : 0
                }, null, 8, ["total", "numerical"]), t("div", {
                    class: ae(["btn", [u(h, e.isRule)]]),
                    onClick: f => w(h)
                }, a(p(h)), 11, cB)])]))), 128)), U(R, {
                    show: o.value,
                    "onUpdate:show": C[2] || (C[2] = h => o.value = h),
                    "show-confirm-button": !1,
                    className: "noOverHidden"
                }, {
                    default: X(() => [t("div", gB, [Z(t("img", null, null, 512), [
                        [B, l(z)("activity/DailyTask", "taskbg")]
                    ]), t("div", dB, a(b.$t("awardsReceived")), 1), t("div", pB, [t("span", null, a(l(Ae)(A.value)), 1)]), t("div", {
                        class: "dialog-btn",
                        onClick: C[0] || (C[0] = h => o.value = !1)
                    }, a(b.$t("confirm")), 1), t("div", {
                        class: "dialog-footer",
                        onClick: C[1] || (C[1] = h => o.value = !1)
                    }, [Z(t("img", null, null, 512), [
                        [B, l(z)("activity/DailyTask", "close")]
                    ])])])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const uB = ee(_B, [
        ["__scopeId", "data-v-ccc575e5"]
    ]),
    vB = {
        class: "empty__container"
    },
    mB = {
        alt: ""
    },
    hB = $({
        __name: "index",
        setup(e) {
            return (s, n) => {
                const o = he("lazy");
                return _(), m("div", vB, [Z(t("img", mB, null, 512), [
                    [o, l(z)("images", "empty")]
                ]), Be(s.$slots, "text", {}, () => [t("p", null, a(s.$t("noData")), 1)], !0)])
            }
        }
    });
const ke = ee(hB, [
        ["__scopeId", "data-v-5cfbd5f1"]
    ]),
    wB = {
        class: "item"
    },
    bB = ["src"],
    CB = {
        class: "right"
    },
    yB = {
        key: 0
    },
    fB = {
        key: 1
    },
    BB = {
        key: 2
    },
    RB = {
        key: 3,
        class: "time"
    },
    EB = ["innerHTML"],
    DB = {
        key: 4,
        class: "time"
    },
    IB = {
        key: 5,
        class: "time"
    },
    SB = {
        class: "foot"
    },
    LB = {
        class: "amount"
    },
    GB = $({
        __name: "card",
        props: {
            bgImgWidth: {
                default: "100%"
            },
            bgImgHeight: {
                default: "150px"
            },
            itemD: {
                default: {}
            },
            state: {},
            isRefresh: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["update:isRefresh"],
        setup(e, {
            emit: s
        }) {
            const n = e,
                {
                    serviceNowTime: o
                } = st(),
                {
                    isRefresh: A
                } = dn(n, s),
                i = D(0),
                g = D();
            Ce(() => n.itemD.id, w => {
                v()
            }, {
                immediate: !0
            });
            const d = M(() => g.value.current);

            function v() {
                if (n.state == 1) {
                    const w = o.value.replace(/-/g, "/"),
                        b = n.itemD.endTime.replace(/-/g, "/");
                    i.value = new Date(b).getTime() - new Date(w).getTime(), i.value > 0 && (g.value = gs({
                        time: i.value,
                        onChange: u
                    }), g.value.start())
                }
            }

            function u(w) {
                w.total == 0 ? A.value = !0 : A.value = !1
            }

            function p(w) {
                const b = String(w.hours).padStart(2, "0"),
                    C = String(w.minutes).padStart(2, "0"),
                    R = String(w.seconds).padStart(2, "0");
                return b + ":" + C + ":" + R
            }
            return (w, b) => (_(), m("div", wB, [t("img", {
                src: w.itemD.iconUrl,
                alt: "",
                style: Ve(`width:${w.bgImgWidth};height:${w.bgImgHeight};`)
            }, null, 12, bB), t("div", CB, [Be(w.$slots, "content", {}, () => {
                var C, R;
                return [t("div", {
                    class: ae(["head", `type${w.state}`])
                }, [w.state == 1 ? (_(), m("h1", yB, a(w.$t("cpsTip3")), 1)) : w.state == 0 ? (_(), m("h1", fB, a(w.$t("startTime")), 1)) : w.state == 2 ? (_(), m("h1", BB, a(w.$t("ended")), 1)) : K("", !0), w.state == 1 ? (_(), m("div", RB, [t("p", {
                    innerHTML: w.$t("fifteenDays", [d.value.days])
                }, null, 8, EB), t("h6", null, a(p(d.value)), 1)])) : K("", !0), w.state == 0 ? (_(), m("div", DB, a((C = w.itemD) == null ? void 0 : C.startTime), 1)) : K("", !0), w.state == 2 ? (_(), m("div", IB, " 00:00:00 ")) : K("", !0)], 2), t("div", SB, [t("h1", null, a(w.$t("winTips5")), 1), t("div", LB, a(l(Ae)(((R = w.itemD) == null ? void 0 : R.sumBonus) || 0)), 1)])]
            }, !0)]), Be(w.$slots, "footer", {}, void 0, !0)]))
        }
    });
const Kt = ee(GB, [
        ["__scopeId", "data-v-fb3c82da"]
    ]),
    kB = e => (Re("data-v-ab48305e"), e = e(), Ee(), e),
    UB = {
        class: "activity-wrapper"
    },
    MB = {
        class: "activity-banner"
    },
    TB = {
        class: "banner-title"
    },
    QB = {
        class: "banner-para"
    },
    VB = {
        class: "banner-para"
    },
    OB = {
        class: "activity-panel"
    },
    PB = {
        class: "msg-window"
    },
    FB = {
        class: "msg-header"
    },
    xB = {
        class: "msg-footer"
    },
    NB = kB(() => t("div", {
        class: "nowidth"
    }, null, -1)),
    HB = ["onClick"],
    YB = {
        class: "activity-panel-content"
    },
    WB = {
        class: "content-para"
    },
    JB = {
        class: "content-para"
    },
    KB = {
        key: 0,
        class: "cardBox"
    },
    XB = {
        class: "activitySection__container"
    },
    jB = ["onClick"],
    zB = ["src", "onError"],
    ZB = {
        class: "box-content"
    },
    qB = {
        class: "box-title"
    },
    $B = {
        class: "dialog-window"
    },
    e5 = {
        class: "dialog-wrapper"
    },
    t5 = {
        class: "dialog-title"
    },
    s5 = {
        class: "dialog-para"
    },
    n5 = $({
        __name: "index",
        props: {
            activityList: {
                type: Array,
                default: () => {}
            }
        },
        setup(e) {
            const {
                ActiveSotre: s,
                saveUserGuidelines: n,
                saveUserDayRequest: o,
                getDailyAwardCount: A,
                allUnAwardCount: i,
                getActive: g
            } = Ye(), {
                championEntranceV: d,
                championEntranceVO: v
            } = st();
            Ce(() => s.value.isOpenChampion, L => {
                L == 1 && d()
            });
            const u = D(!1);
            Ce(u, L => {
                u.value && d()
            });
            const p = D(!0),
                w = D(!0),
                b = D([]),
                {
                    t: C
                } = ie(),
                R = D(!1),
                B = D(!1),
                h = D(1),
                y = D(!1),
                f = oe(),
                Q = M(() => [{
                    name: C("actTip1"),
                    icon: "a1",
                    goPath: "DailyTasks",
                    noread: i.value,
                    show: s.value.isOpenActivityAward
                }, {
                    name: C("invitationBonus"),
                    icon: "a2",
                    goPath: "InvitationBonus",
                    noread: 0,
                    show: s.value.isTaskState
                }, {
                    name: C("laundryAmount"),
                    icon: "a3",
                    goPath: "Laundry",
                    noread: 0,
                    show: s.value.isOpenWashCode
                }, {
                    name: C("superjackpot"),
                    icon: "a4",
                    goPath: "SuperJackpot",
                    noread: s.value.unJackpotCount,
                    show: s.value.isOpenJackpotReward
                }, {
                    name: C("newMenberPackage"),
                    icon: "a5",
                    goPath: "MemberPackage",
                    noread: 0,
                    show: s.value.newMemberGiftPackageSwitch
                }]),
                G = M(() => Q.value.filter(L => L.show).length);

            function se(L) {
                let I;
                const {
                    bannerID: k,
                    jumpType: ne,
                    contents: J
                } = L;
                if (ne == 2) {
                    if (J.startsWith("/")) {
                        f.push({
                            path: J
                        });
                        return
                    }
                    window.location.assign(J);
                    return
                }
                switch (k) {
                    case 1:
                        I = "DailyTasks";
                        break;
                    case 2:
                        I = "PointMall";
                        break;
                    case 3:
                        I = "InvitationBonus";
                        break;
                    default:
                        I = "ActivityDetail";
                        break
                }
                I == "ActivityDetail" ? f.push({
                    name: I,
                    query: {
                        id: k
                    }
                }) : I && f.push({
                    name: I
                })
            }
            const F = (L, I) => {
                    L.bannerUrl = z("images", "avatar"), pt(() => {
                        let k = document.querySelector(`.act_${I}`);
                        k.src = L.bannerUrl, k.style.objectFit = "contain"
                    })
                },
                S = L => {
                    f.push({
                        name: L
                    })
                },
                T = () => {
                    n(), S("DailyTasks")
                },
                V = () => {
                    w.value = !1, p.value = !1
                },
                P = (L = null) => {
                    o(), L && (V(), S("DailyTasks"))
                },
                W = async () => {
                    const L = await O(A4({
                        pageNo: h.value,
                        pageSize: 20
                    }));
                    L ? (L.data.totalCount == 0 && (y.value = !0), L.data.totalPage <= h.value && (B.value = !0), L.data.list && b.value.push(...L.data.list), h.value++) : B.value = !0, R.value = !1
                };
            return le(async () => {
                await g(), s.value.isOpenActivityAward && A(), s.value.isOpenChampion == 1 && d()
            }), pn(() => {
                w.value = !1, p.value = !1
            }), (L, I) => {
                const k = N("van-popover"),
                    ne = N("van-badge"),
                    J = N("van-list"),
                    q = N("van-dialog"),
                    re = he("lazy");
                return _(), m("div", UB, [t("div", MB, [t("div", null, [t("div", TB, a(L.$t("activity")), 1), t("div", QB, a(L.$t("activityTip1")), 1), t("div", VB, a(L.$t("activityTip2")), 1)])]), t("div", OB, [l(s).isFinishUserGuidelines && l(s).isOpenActivityAward ? (_(), ce(k, {
                    key: 0,
                    show: l(s).isFinishUserGuidelines,
                    "onUpdate:show": I[0] || (I[0] = x => l(s).isFinishUserGuidelines = x),
                    overlay: !0,
                    placement: "top-start",
                    "close-on-click-overlay": !1,
                    onClose: V
                }, {
                    reference: X(() => [NB]),
                    default: X(() => [t("div", PB, [t("div", FB, a(L.$t("activityTip8")), 1), t("div", xB, [t("div", {
                        onClick: T
                    }, [t("span", null, a(L.$t("dragonEntry")), 1), Z(t("img", null, null, 512), [
                        [re, l(z)("activity/DailyTask", "dualArrow")]
                    ])])])])]),
                    _: 1
                }, 8, ["show"])) : K("", !0), t("div", {
                    class: ae(["activity-panel-header", ["lg" + G.value]])
                }, [(_(!0), m(Y, null, te(Q.value, x => (_(), m(Y, null, [x.show ? (_(), m("div", {
                    key: 0,
                    class: "header-item",
                    onClick: H => S(x.goPath)
                }, [U(ne, {
                    content: x.noread,
                    max: "99",
                    "show-zero": !1,
                    color: "#FA5B5B"
                }, {
                    default: X(() => [t("div", {
                        class: ae([x.icon, "bgcontainer"])
                    }, null, 2)]),
                    _: 2
                }, 1032, ["content"]), t("span", null, a(x.name), 1)], 8, HB)) : K("", !0)], 64))), 256))], 2), t("div", YB, [t("div", {
                    class: "content-title",
                    onClick: I[1] || (I[1] = x => S("RedeemGift"))
                }, [Z(t("img", null, null, 512), [
                    [re, l(z)("activity/DailyTask", "signInBanner")]
                ]), t("div", WB, a(L.$t("giftExchange")), 1), t("p", null, a(L.$t("activityTip3")), 1)]), t("div", {
                    class: "content-title",
                    onClick: I[2] || (I[2] = x => S("DailySignIn"))
                }, [Z(t("img", null, null, 512), [
                    [re, l(z)("activity/DailyTask", "giftRedeem")]
                ]), t("div", JB, a(L.$t("code8007")), 1), t("p", null, a(L.$t("activityTip4")), 1)])])]), l(s).isOpenChampion == 1 ? (_(), m("div", KB, [U(Kt, {
                    itemD: l(v),
                    state: l(v).state,
                    isRefresh: u.value,
                    "onUpdate:isRefresh": I[3] || (I[3] = x => u.value = x),
                    bgImgWidth: "100%",
                    bgImgHeight: "150px",
                    onClick: I[4] || (I[4] = () => l(f).push({
                        name: "Championship"
                    }))
                }, null, 8, ["itemD", "state", "isRefresh"])])) : K("", !0), U(J, {
                    loading: R.value,
                    "onUpdate:loading": I[5] || (I[5] = x => R.value = x),
                    finished: B.value,
                    "finished-text": l(C)("noMoreThere"),
                    onLoad: W
                }, {
                    default: X(() => [t("div", XB, [(_(!0), m(Y, null, te(b.value, (x, H) => (_(), m("div", {
                        class: "box",
                        key: H,
                        onClick: me => se(x)
                    }, [t("img", {
                        src: x.bannerUrl,
                        class: ae(`act_${H}`),
                        onError: me => F(x, H)
                    }, null, 42, zB), t("div", ZB, [t("div", qB, a(x.bannerTitle), 1)])], 8, jB))), 128))])]),
                    _: 1
                }, 8, ["loading", "finished", "finished-text"]), y.value ? (_(), ce(ke, {
                    key: 1
                })) : K("", !0), l(i) > 0 && l(s).isOpenActivityAward ? (_(), ce(q, {
                    key: 2,
                    show: l(s).isFirstUserDayRequest,
                    "onUpdate:show": I[8] || (I[8] = x => l(s).isFirstUserDayRequest = x),
                    "show-confirm-button": !1,
                    className: "noOverHidden"
                }, {
                    default: X(() => [t("div", $B, [t("div", e5, [Z(t("img", null, null, 512), [
                        [re, l(z)("activity/DailyTask", "present")]
                    ]), t("div", t5, [j(a(L.$t("activityTip5")) + " ", 1), t("span", null, a(l(i)), 1)]), t("div", s5, a(L.$t("activityTip6")), 1), t("div", {
                        class: "dialog-btn",
                        onClick: I[6] || (I[6] = x => P(!0))
                    }, a(L.$t("activityTip7")), 1), t("div", {
                        class: "dialog-footer",
                        onClick: I[7] || (I[7] = x => P())
                    }, [Z(t("img", null, null, 512), [
                        [re, l(z)("activity/DailyTask", "close")]
                    ])])])])]),
                    _: 1
                }, 8, ["show"])) : K("", !0)])
            }
        }
    });
const a5 = ee(n5, [
        ["__scopeId", "data-v-ab48305e"]
    ]),
    o5 = ["src"],
    A5 = {
        class: "activity"
    },
    i5 = $({
        __name: "index",
        setup(e) {
            const {
                getActive: s
            } = Ye();
            return s(), (n, o) => {
                const A = N("NavBar");
                return _(), m(Y, null, [U(A, {
                    headLogo: !0
                }, {
                    right: X(() => [t("img", {
                        src: l(z)("home", "customer_icon"),
                        onClick: o[0] || (o[0] = i => l(Fe).push({
                            name: "CustomerService"
                        }))
                    }, null, 8, o5)]),
                    _: 1
                }), t("div", A5, [U(a5)])], 64)
            }
        }
    });
const l5 = ee(i5, [
        ["__scopeId", "data-v-c77e4689"]
    ]),
    r5 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: l5
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    c5 = {
        class: "dialog__container",
        role: "dialog",
        tabindex: "0"
    },
    g5 = {
        key: 0,
        class: "dialog__container-img"
    },
    d5 = {
        alt: ""
    },
    p5 = {
        class: "dialog__container-title"
    },
    _5 = {
        class: "dialog__container-content"
    },
    u5 = {
        key: 1,
        class: "dialog__container-footer"
    },
    v5 = ["src"],
    m5 = $({
        __name: "Dialog",
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
                default: !0
            },
            cancelText: {
                type: String,
                default: ""
            },
            clickOutSide: {
                type: Boolean,
                default: !1
            },
            isShowHeader: {
                type: Boolean,
                default: !0
            },
            imgUrl: {
                type: String,
                default: "close"
            },
            showCloseIcon: {
                type: Boolean,
                default: !1
            },
            showFooter: {
                type: Boolean,
                default: !0
            }
        },
        emits: ["update:show", "confirm", "cancel"],
        setup(e, {
            emit: s
        }) {
            const n = e;

            function o(A) {
                n.clickOutSide && s("update:show", !1)
            }
            return (A, i) => {
                const g = he("lazy");
                return _(), m("div", {
                    class: ae(["dialog", {
                        active: e.show,
                        inactive: !e.show
                    }])
                }, [t("div", c5, [e.isShowHeader ? (_(), m("div", g5, [Be(A.$slots, "header", {}, () => [Z(t("img", d5, null, 512), [
                    [g, l(z)("common", e.imgUrl)]
                ])], !0)])) : K("", !0), t("div", p5, [Be(A.$slots, "title", {}, () => [t("h1", null, a(e.title), 1)], !0)]), t("div", _5, [Be(A.$slots, "content", {}, void 0, !0)]), e.showFooter ? (_(), m("div", u5, [Be(A.$slots, "footer", {}, () => [e.showCancelBtn ? (_(), m("button", {
                    key: 0,
                    onClick: i[0] || (i[0] = () => {
                        s("update:show", !1)
                    })
                }, a(e.cancelText || A.$t("cancel")), 1)) : K("", !0), t("button", {
                    onClick: i[1] || (i[1] = () => {
                        s("confirm")
                    })
                }, a(e.confirmText || A.$t("confirm")), 1)], !0)])) : K("", !0), e.showCloseIcon ? (_(), m("img", {
                    key: 2,
                    class: "close_img",
                    src: l(z)("common", "close"),
                    onClick: o
                }, null, 8, v5)) : K("", !0)]), t("div", {
                    class: "dialog__outside",
                    onClick: o
                })], 2)
            }
        }
    });
const ze = ee(m5, [
        ["__scopeId", "data-v-15cf7083"]
    ]),
    h5 = {
        zh_TC: {
            code: "zh_TC",
            name: "Hong Kong",
            dialCode: "+852",
            phoneFormat: "5123 4567"
        },
        en: {
            code: "en",
            name: "USA",
            dialCode: "+1",
            phoneFormat: "213 223 4827"
        },
        mo: {
            code: "mo",
            name: "Macau",
            dialCode: "+853",
            phoneFormat: "6612 3456"
        },
        tw: {
            code: "tw",
            name: "Taiwan",
            dialCode: "+886",
            phoneFormat: "0912 345 678"
        },
        kh: {
            code: "kh",
            name: "Cambodia",
            dialCode: "+855",
            phoneFormat: "091 234 567"
        },
        th: {
            code: "th",
            name: "Thailand",
            dialCode: "+66",
            phoneFormat: "081 234 5678"
        },
        id: {
            code: "id",
            name: "Indonesia",
            dialCode: "+62",
            phoneFormat: "0812-345-678"
        },
        io: {
            code: "io",
            name: "British Indian Ocean Territory",
            dialCode: "+246",
            phoneFormat: "380 1234"
        },
        sg: {
            code: "sg",
            name: "Singapore",
            dialCode: "+65",
            phoneFormat: "8123 4567"
        },
        vi: {
            code: "vi",
            name: "Vietnam",
            dialCode: "+84",
            phoneFormat: "091 234 56 78"
        },
        mm: {
            code: "mm",
            name: "Myanmar",
            dialCode: "+95",
            phoneFormat: "09 212 3456"
        },
        la: {
            code: "la",
            name: "Laos",
            dialCode: "+856",
            phoneFormat: "020 23 123 456"
        },
        zh_CN: {
            code: "zh_CN",
            name: "China",
            dialCode: "+86",
            phoneFormat: "131 2345 6789"
        },
        ae: {
            code: "ae",
            name: "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)",
            dialCode: "+971",
            phoneFormat: "050 123 4567"
        },
        af: {
            code: "af",
            name: "Afghanistan (‫افغانستان‬‎)",
            dialCode: "+93",
            phoneFormat: "070 123 4567"
        },
        al: {
            code: "al",
            name: "Albania (Shqipëri)",
            dialCode: "+355",
            phoneFormat: "066 123 4567"
        },
        dz: {
            code: "dz",
            name: "Algeria (‫الجزائر‬‎)",
            dialCode: "+213",
            phoneFormat: "0551 23 45 67"
        },
        as: {
            code: "as",
            name: "American Samoa",
            dialCode: "+1684",
            phoneFormat: "(684) 733-1234"
        },
        ad: {
            code: "ad",
            name: "Andorra",
            dialCode: "+376",
            phoneFormat: "312 345"
        },
        ao: {
            code: "ao",
            name: "Angola",
            dialCode: "+244",
            phoneFormat: "923 123 456"
        },
        ai: {
            code: "ai",
            name: "Anguilla",
            dialCode: "+1264",
            phoneFormat: "(264) 235-1234"
        },
        ag: {
            code: "ag",
            name: "Antigua and Barbuda",
            dialCode: "+1268",
            phoneFormat: "(268) 464-1234"
        },
        ar: {
            code: "ar",
            name: "Argentina",
            dialCode: "+54",
            phoneFormat: "011 15-2345-6789"
        },
        am: {
            code: "am",
            name: "Armenia (Հայաստան)",
            dialCode: "+374",
            phoneFormat: "077 123456"
        },
        aw: {
            code: "aw",
            name: "Aruba",
            dialCode: "+297",
            phoneFormat: "560 1234"
        },
        au: {
            code: "au",
            name: "Australia",
            dialCode: "+61",
            phoneFormat: "0412 345 678"
        },
        at: {
            code: "at",
            name: "Austria (Österreich)",
            dialCode: "+43",
            phoneFormat: "0664 123456"
        },
        az: {
            code: "az",
            name: "Azerbaijan (Azərbaycan)",
            dialCode: "+994",
            phoneFormat: "040 123 45 67"
        },
        bs: {
            code: "bs",
            name: "Bahamas",
            dialCode: "+1242",
            phoneFormat: "(242) 359-1234"
        },
        bh: {
            code: "bh",
            name: "Bahrain (‫البحرين‬‎)",
            dialCode: "+973",
            phoneFormat: "3600 1234"
        },
        bd: {
            code: "bd",
            name: "Bangladesh (বাংলাদেশ)",
            dialCode: "+880",
            phoneFormat: "01812-345678"
        },
        bb: {
            code: "bb",
            name: "Barbados",
            dialCode: "+1246",
            phoneFormat: "(246) 250-1234"
        },
        by: {
            code: "by",
            name: "Belarus (Беларусь)",
            dialCode: "+375",
            phoneFormat: "8 029 491-19-11"
        },
        be: {
            code: "be",
            name: "Belgium (België)",
            dialCode: "+32",
            phoneFormat: "0470 12 34 56"
        },
        bz: {
            code: "bz",
            name: "Belize",
            dialCode: "+501",
            phoneFormat: "622-1234"
        },
        bj: {
            code: "bj",
            name: "Benin (Bénin)",
            dialCode: "+229",
            phoneFormat: "90 01 12 34"
        },
        bm: {
            code: "bm",
            name: "Bermuda",
            dialCode: "+1441",
            phoneFormat: "(441) 370-1234"
        },
        bt: {
            code: "bt",
            name: "Bhutan (འབྲུག)",
            dialCode: "+975",
            phoneFormat: "17 12 34 56"
        },
        bo: {
            code: "bo",
            name: "Bolivia",
            dialCode: "+591",
            phoneFormat: "71234567"
        },
        ba: {
            code: "ba",
            name: "Bosnia and Herzegovina (Босна и Херцеговина)",
            dialCode: "+387",
            phoneFormat: "061 123 456"
        },
        bw: {
            code: "bw",
            name: "Botswana",
            dialCode: "+267",
            phoneFormat: "71 123 456"
        },
        br: {
            code: "br",
            name: "Brazil (Brasil)",
            dialCode: "+55",
            phoneFormat: "(11) 96123-4567"
        },
        vg: {
            code: "vg",
            name: "British Virgin Islands",
            dialCode: "+1284",
            phoneFormat: "(284) 300-1234"
        },
        bn: {
            code: "bn",
            name: "Brunei",
            dialCode: "+673",
            phoneFormat: "712 3456"
        },
        bg: {
            code: "bg",
            name: "Bulgaria (България)",
            dialCode: "+359",
            phoneFormat: "048 123 456"
        },
        bf: {
            code: "bf",
            name: "Burkina Faso",
            dialCode: "+226",
            phoneFormat: "70 12 34 56"
        },
        bi: {
            code: "bi",
            name: "Burundi (Uburundi)",
            dialCode: "+257",
            phoneFormat: "79 56 12 34"
        },
        cm: {
            code: "cm",
            name: "Cameroon (Cameroun)",
            dialCode: "+237",
            phoneFormat: "6 71 23 45 67"
        },
        ca: {
            code: "ca",
            name: "Canada",
            dialCode: "+1",
            phoneFormat: "(204) 234-5678"
        },
        cv: {
            code: "cv",
            name: "Cape Verde (Kabu Verdi)",
            dialCode: "+238",
            phoneFormat: "991 12 34"
        },
        bq: {
            code: "bq",
            name: "Caribbean Netherlands",
            dialCode: "+599",
            phoneFormat: "318 1234"
        },
        ky: {
            code: "ky",
            name: "Cayman Islands",
            dialCode: "+1345",
            phoneFormat: "(345) 323-1234"
        },
        cf: {
            code: "cf",
            name: "Central African Republic (République centrafricaine)",
            dialCode: "+236",
            phoneFormat: "70 01 23 45"
        },
        td: {
            code: "td",
            name: "Chad (Tchad)",
            dialCode: "+235",
            phoneFormat: "63 01 23 45"
        },
        cl: {
            code: "cl",
            name: "Chile",
            dialCode: "+56",
            phoneFormat: "09 6123 4567"
        },
        cx: {
            code: "cx",
            name: "Christmas Island",
            dialCode: "+61",
            phoneFormat: "0412 345 678"
        },
        cc: {
            code: "cc",
            name: "Cocos (Keeling) Islands",
            dialCode: "+61",
            phoneFormat: "0412 345 678"
        },
        co: {
            code: "co",
            name: "Colombia",
            dialCode: "+57",
            phoneFormat: "321 1234567"
        },
        km: {
            code: "km",
            name: "Comoros (‫جزر القمر‬‎)",
            dialCode: "+269",
            phoneFormat: "321 23 45"
        },
        cd: {
            code: "cd",
            name: "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
            dialCode: "+243",
            phoneFormat: "0991 234 567"
        },
        cg: {
            code: "cg",
            name: "Congo (Republic) (Congo-Brazzaville)",
            dialCode: "+242",
            phoneFormat: "06 123 4567"
        },
        ck: {
            code: "ck",
            name: "Cook Islands",
            dialCode: "+682",
            phoneFormat: "71 234"
        },
        cr: {
            code: "cr",
            name: "Costa Rica",
            dialCode: "+506",
            phoneFormat: "8312 3456"
        },
        ci: {
            code: "ci",
            name: "Côte d’Ivoire",
            dialCode: "+225",
            phoneFormat: "01 23 45 67"
        },
        hr: {
            code: "hr",
            name: "Croatia (Hrvatska)",
            dialCode: "+385",
            phoneFormat: "091 234 5678"
        },
        cu: {
            code: "cu",
            name: "Cuba",
            dialCode: "+53",
            phoneFormat: "05 1234567"
        },
        cw: {
            code: "cw",
            name: "Curaçao",
            dialCode: "+599",
            phoneFormat: "9 518 1234"
        },
        cy: {
            code: "cy",
            name: "Cyprus (Κύπρος)",
            dialCode: "+357",
            phoneFormat: "96 123456"
        },
        cz: {
            code: "cz",
            name: "Czech Republic (Česká republika)",
            dialCode: "+420",
            phoneFormat: "601 123 456"
        },
        dk: {
            code: "dk",
            name: "Denmark (Danmark)",
            dialCode: "+45",
            phoneFormat: "20 12 34 56"
        },
        dj: {
            code: "dj",
            name: "Djibouti",
            dialCode: "+253",
            phoneFormat: "77 83 10 01"
        },
        dm: {
            code: "dm",
            name: "Dominica",
            dialCode: "+1767",
            phoneFormat: "(767) 225-1234"
        },
        ec: {
            code: "ec",
            name: "Ecuador",
            dialCode: "+593",
            phoneFormat: "099 123 4567"
        },
        eg: {
            code: "eg",
            name: "Egypt (‫مصر‬‎)",
            dialCode: "+20",
            phoneFormat: "0100 123 4567"
        },
        sv: {
            code: "sv",
            name: "El Salvador",
            dialCode: "+503",
            phoneFormat: "7012 3456"
        },
        gq: {
            code: "gq",
            name: "Equatorial Guinea (Guinea Ecuatorial)",
            dialCode: "+240",
            phoneFormat: "222 123 456"
        },
        er: {
            code: "er",
            name: "Eritrea",
            dialCode: "+291",
            phoneFormat: "07 123 456"
        },
        ee: {
            code: "ee",
            name: "Estonia (Eesti)",
            dialCode: "+372",
            phoneFormat: "5123 4567"
        },
        et: {
            code: "et",
            name: "Ethiopia",
            dialCode: "+251",
            phoneFormat: "091 123 4567"
        },
        fk: {
            code: "fk",
            name: "Falkland Islands (Islas Malvinas)",
            dialCode: "+500",
            phoneFormat: "51234"
        },
        fo: {
            code: "fo",
            name: "Faroe Islands (Føroyar)",
            dialCode: "+298",
            phoneFormat: "211234"
        },
        fj: {
            code: "fj",
            name: "Fiji",
            dialCode: "+679",
            phoneFormat: "701 2345"
        },
        fi: {
            code: "fi",
            name: "Finland (Suomi)",
            dialCode: "+358",
            phoneFormat: "041 2345678"
        },
        fr: {
            code: "fr",
            name: "France",
            dialCode: "+33",
            phoneFormat: "06 12 34 56 78"
        },
        gf: {
            code: "gf",
            name: "French Guiana (Guyane française)",
            dialCode: "+594",
            phoneFormat: "0694 20 12 34"
        },
        pf: {
            code: "pf",
            name: "French Polynesia (Polynésie française)",
            dialCode: "+689",
            phoneFormat: "87 12 34 56"
        },
        ga: {
            code: "ga",
            name: "Gabon",
            dialCode: "+241",
            phoneFormat: "06 03 12 34"
        },
        gm: {
            code: "gm",
            name: "Gambia",
            dialCode: "+220",
            phoneFormat: "301 2345"
        },
        ge: {
            code: "ge",
            name: "Georgia (საქართველო)",
            dialCode: "+995",
            phoneFormat: "555 12 34 56"
        },
        de: {
            code: "de",
            name: "Germany (Deutschland)",
            dialCode: "+49",
            phoneFormat: "01512 3456789"
        },
        gh: {
            code: "gh",
            name: "Ghana (Gaana)",
            dialCode: "+233",
            phoneFormat: "023 123 4567"
        },
        gi: {
            code: "gi",
            name: "Gibraltar",
            dialCode: "+350",
            phoneFormat: "57123456"
        },
        gr: {
            code: "gr",
            name: "Greece (Ελλάδα)",
            dialCode: "+30",
            phoneFormat: "691 234 5678"
        },
        gl: {
            code: "gl",
            name: "Greenland (Kalaallit Nunaat)",
            dialCode: "+299",
            phoneFormat: "22 12 34"
        },
        gd: {
            code: "gd",
            name: "Grenada",
            dialCode: "+1473",
            phoneFormat: "(473) 403-1234"
        },
        gp: {
            code: "gp",
            name: "Guadeloupe",
            dialCode: "+590",
            phoneFormat: "0690 30-1234"
        },
        gu: {
            code: "gu",
            name: "Guam",
            dialCode: "+1671",
            phoneFormat: "(671) 300-1234"
        },
        gt: {
            code: "gt",
            name: "Guatemala",
            dialCode: "+502",
            phoneFormat: "5123 4567"
        },
        gg: {
            code: "gg",
            name: "Guernsey",
            dialCode: "+44",
            phoneFormat: "07781 123456"
        },
        gn: {
            code: "gn",
            name: "Guinea (Guinée)",
            dialCode: "+224",
            phoneFormat: "601 12 34 56"
        },
        gw: {
            code: "gw",
            name: "Guinea-Bissau (Guiné Bissau)",
            dialCode: "+245",
            phoneFormat: "955 012 345"
        },
        gy: {
            code: "gy",
            name: "Guyana",
            dialCode: "+592",
            phoneFormat: "609 1234"
        },
        ht: {
            code: "ht",
            name: "Haiti",
            dialCode: "+509",
            phoneFormat: "34 10 1234"
        },
        hn: {
            code: "hn",
            name: "Honduras",
            dialCode: "+504",
            phoneFormat: "9123-4567"
        },
        hu: {
            code: "hu",
            name: "Hungary (Magyarország)",
            dialCode: "+36",
            phoneFormat: "(20) 123 4567"
        },
        is: {
            code: "is",
            name: "Iceland (Ísland)",
            dialCode: "+354",
            phoneFormat: "611 1234"
        },
        in: {
            code: "in",
            name: "India (भारत)",
            dialCode: "+91",
            phoneFormat: "099876 54321"
        },
        ir: {
            code: "ir",
            name: "Iran (‫ایران‬‎)",
            dialCode: "+98",
            phoneFormat: "0912 345 6789"
        },
        iq: {
            code: "iq",
            name: "Iraq (‫العراق‬‎)",
            dialCode: "+964",
            phoneFormat: "0791 234 5678"
        },
        ie: {
            code: "ie",
            name: "Ireland",
            dialCode: "+353",
            phoneFormat: "085 012 3456"
        },
        im: {
            code: "im",
            name: "Isle of Man",
            dialCode: "+44",
            phoneFormat: "07924 123456"
        },
        il: {
            code: "il",
            name: "Israel (‫ישראל‬‎)",
            dialCode: "+972",
            phoneFormat: "050-123-4567"
        },
        it: {
            code: "it",
            name: "Italy (Italia)",
            dialCode: "+39",
            phoneFormat: "312 345 6789"
        },
        jm: {
            code: "jm",
            name: "Jamaica",
            dialCode: "+1876",
            phoneFormat: "(876) 210-1234"
        },
        jp: {
            code: "jp",
            name: "Japan (日本)",
            dialCode: "+81",
            phoneFormat: "090-1234-5678"
        },
        je: {
            code: "je",
            name: "Jersey",
            dialCode: "+44",
            phoneFormat: "07797 123456"
        },
        jo: {
            code: "jo",
            name: "Jordan (‫الأردن‬‎)",
            dialCode: "+962",
            phoneFormat: "07 9012 3456"
        },
        kz: {
            code: "kz",
            name: "Kazakhstan (Казахстан)",
            dialCode: "+7",
            phoneFormat: "8 (771) 000 9998"
        },
        ke: {
            code: "ke",
            name: "Kenya",
            dialCode: "+254",
            phoneFormat: "0712 123456"
        },
        ki: {
            code: "ki",
            name: "Kiribati",
            dialCode: "+686",
            phoneFormat: "72012345"
        },
        xk: {
            code: "xk",
            name: "Kosovo",
            dialCode: "+383",
            phoneFormat: ""
        },
        kw: {
            code: "kw",
            name: "Kuwait (‫الكويت‬‎)",
            dialCode: "+965",
            phoneFormat: "500 12345"
        },
        kg: {
            code: "kg",
            name: "Kyrgyzstan (Кыргызстан)",
            dialCode: "+996",
            phoneFormat: "0700 123 456"
        },
        lv: {
            code: "lv",
            name: "Latvia (Latvija)",
            dialCode: "+371",
            phoneFormat: "21 234 567"
        },
        lb: {
            code: "lb",
            name: "Lebanon (‫لبنان‬‎)",
            dialCode: "+961",
            phoneFormat: "71 123 456"
        },
        ls: {
            code: "ls",
            name: "Lesotho",
            dialCode: "+266",
            phoneFormat: "5012 3456"
        },
        lr: {
            code: "lr",
            name: "Liberia",
            dialCode: "+231",
            phoneFormat: "077 012 3456"
        },
        ly: {
            code: "ly",
            name: "Libya (‫ليبيا‬‎)",
            dialCode: "+218",
            phoneFormat: "091-2345678"
        },
        li: {
            code: "li",
            name: "Liechtenstein",
            dialCode: "+423",
            phoneFormat: "660 234 567"
        },
        lt: {
            code: "lt",
            name: "Lithuania (Lietuva)",
            dialCode: "+370",
            phoneFormat: "(8-612) 34567"
        },
        lu: {
            code: "lu",
            name: "Luxembourg",
            dialCode: "+352",
            phoneFormat: "628 123 456"
        },
        mk: {
            code: "mk",
            name: "Macedonia (FYROM) (Македонија)",
            dialCode: "+389",
            phoneFormat: "072 345 678"
        },
        mg: {
            code: "mg",
            name: "Madagascar (Madagasikara)",
            dialCode: "+261",
            phoneFormat: "032 12 345 67"
        },
        mw: {
            code: "mw",
            name: "Malawi",
            dialCode: "+265",
            phoneFormat: "0991 23 45 67"
        },
        my: {
            code: "my",
            name: "Malaysia",
            dialCode: "+60",
            phoneFormat: "012-345 6789"
        },
        mv: {
            code: "mv",
            name: "Maldives",
            dialCode: "+960",
            phoneFormat: "771-2345"
        },
        ml: {
            code: "ml",
            name: "Mali",
            dialCode: "+223",
            phoneFormat: "65 01 23 45"
        },
        mt: {
            code: "mt",
            name: "Malta",
            dialCode: "+356",
            phoneFormat: "9696 1234"
        },
        mh: {
            code: "mh",
            name: "Marshall Islands",
            dialCode: "+692",
            phoneFormat: "235-1234"
        },
        mq: {
            code: "mq",
            name: "Martinique",
            dialCode: "+596",
            phoneFormat: "0696 20 12 34"
        },
        mr: {
            code: "mr",
            name: "Mauritania (‫موريتانيا‬‎)",
            dialCode: "+222",
            phoneFormat: "22 12 34 56"
        },
        mu: {
            code: "mu",
            name: "Mauritius (Moris)",
            dialCode: "+230",
            phoneFormat: "5251 2345"
        },
        yt: {
            code: "yt",
            name: "Mayotte",
            dialCode: "+262",
            phoneFormat: "0639 12 34 56"
        },
        mx: {
            code: "mx",
            name: "Mexico (México)",
            dialCode: "+52",
            phoneFormat: "044 222 123 4567"
        },
        fm: {
            code: "fm",
            name: "Micronesia",
            dialCode: "+691",
            phoneFormat: "350 1234"
        },
        md: {
            code: "md",
            name: "Moldova (Republica Moldova)",
            dialCode: "+373",
            phoneFormat: "0621 12 345"
        },
        mc: {
            code: "mc",
            name: "Monaco",
            dialCode: "+377",
            phoneFormat: "06 12 34 56 78"
        },
        mn: {
            code: "mn",
            name: "Mongolia (Монгол)",
            dialCode: "+976",
            phoneFormat: "8812 3456"
        },
        me: {
            code: "me",
            name: "Montenegro (Crna Gora)",
            dialCode: "+382",
            phoneFormat: "067 622 901"
        },
        ms: {
            code: "ms",
            name: "Montserrat",
            dialCode: "+1664",
            phoneFormat: "(664) 492-3456"
        },
        ma: {
            code: "ma",
            name: "Morocco (‫المغرب‬‎)",
            dialCode: "+212",
            phoneFormat: "0650-123456"
        },
        mz: {
            code: "mz",
            name: "Mozambique (Moçambique)",
            dialCode: "+258",
            phoneFormat: "82 123 4567"
        },
        na: {
            code: "na",
            name: "Namibia (Namibië)",
            dialCode: "+264",
            phoneFormat: "081 123 4567"
        },
        nr: {
            code: "nr",
            name: "Nauru",
            dialCode: "+674",
            phoneFormat: "555 1234"
        },
        np: {
            code: "np",
            name: "Nepal (नेपाल)",
            dialCode: "+977",
            phoneFormat: "984-1234567"
        },
        nl: {
            code: "nl",
            name: "Netherlands (Nederland)",
            dialCode: "+31",
            phoneFormat: "06 12345678"
        },
        nc: {
            code: "nc",
            name: "New Caledonia (Nouvelle-Calédonie)",
            dialCode: "+687",
            phoneFormat: "75.12.34"
        },
        nz: {
            code: "nz",
            name: "New Zealand",
            dialCode: "+64",
            phoneFormat: "021 123 4567"
        },
        ni: {
            code: "ni",
            name: "Nicaragua",
            dialCode: "+505",
            phoneFormat: "8123 4567"
        },
        ne: {
            code: "ne",
            name: "Niger (Nijar)",
            dialCode: "+227",
            phoneFormat: "93 12 34 56"
        },
        ng: {
            code: "ng",
            name: "Nigeria",
            dialCode: "+234",
            phoneFormat: "0802 123 4567"
        },
        nu: {
            code: "nu",
            name: "Niue",
            dialCode: "+683",
            phoneFormat: "1234"
        },
        nf: {
            code: "nf",
            name: "Norfolk Island",
            dialCode: "+672",
            phoneFormat: "3 81234"
        },
        kp: {
            code: "kp",
            name: "North Korea (조선 민주주의 인민 공화국)",
            dialCode: "+850",
            phoneFormat: "0192 123 4567"
        },
        mp: {
            code: "mp",
            name: "Northern Mariana Islands",
            dialCode: "+1670",
            phoneFormat: "(670) 234-5678"
        },
        no: {
            code: "no",
            name: "Norway (Norge)",
            dialCode: "+47",
            phoneFormat: "406 12 345"
        },
        om: {
            code: "om",
            name: "Oman (‫عُمان‬‎)",
            dialCode: "+968",
            phoneFormat: "9212 3456"
        },
        pk: {
            code: "pk",
            name: "Pakistan (‫پاکستان‬‎)",
            dialCode: "+92",
            phoneFormat: "0301 2345678"
        },
        pw: {
            code: "pw",
            name: "Palau",
            dialCode: "+680",
            phoneFormat: "620 1234"
        },
        ps: {
            code: "ps",
            name: "Palestine (‫فلسطين‬‎)",
            dialCode: "+970",
            phoneFormat: "0599 123 456"
        },
        pa: {
            code: "pa",
            name: "Panama (Panamá)",
            dialCode: "+507",
            phoneFormat: "6001-2345"
        },
        pg: {
            code: "pg",
            name: "Papua New Guinea",
            dialCode: "+675",
            phoneFormat: "681 2345"
        },
        py: {
            code: "py",
            name: "Paraguay",
            dialCode: "+595",
            phoneFormat: "0961 456789"
        },
        pe: {
            code: "pe",
            name: "Peru (Perú)",
            dialCode: "+51",
            phoneFormat: "912 345 678"
        },
        ph: {
            code: "ph",
            name: "Philippines",
            dialCode: "+63",
            phoneFormat: "0905 123 4567"
        },
        pl: {
            code: "pl",
            name: "Poland (Polska)",
            dialCode: "+48",
            phoneFormat: "512 345 678"
        },
        pt: {
            code: "pt",
            name: "Portugal",
            dialCode: "+351",
            phoneFormat: "912 345 678"
        },
        qa: {
            code: "qa",
            name: "Qatar (‫قطر‬‎)",
            dialCode: "+974",
            phoneFormat: "3312 3456"
        },
        re: {
            code: "re",
            name: "Réunion (La Réunion)",
            dialCode: "+262",
            phoneFormat: "0692 12 34 56"
        },
        ro: {
            code: "ro",
            name: "Romania (România)",
            dialCode: "+40",
            phoneFormat: "0712 345 678"
        },
        ru: {
            code: "ru",
            name: "Russia (Россия)",
            dialCode: "+7",
            phoneFormat: "8 (912) 345-67-89"
        },
        rw: {
            code: "rw",
            name: "Rwanda",
            dialCode: "+250",
            phoneFormat: "0720 123 456"
        },
        bl: {
            code: "bl",
            name: "Saint Barthélemy (Saint-Barthélemy)",
            dialCode: "+590",
            phoneFormat: "0690 30-1234"
        },
        sh: {
            code: "sh",
            name: "Saint Helena",
            dialCode: "+290",
            phoneFormat: "51234"
        },
        kn: {
            code: "kn",
            name: "Saint Kitts and Nevis",
            dialCode: "+1869",
            phoneFormat: "(869) 765-2917"
        },
        lc: {
            code: "lc",
            name: "Saint Lucia",
            dialCode: "+1758",
            phoneFormat: "(758) 284-5678"
        },
        mf: {
            code: "mf",
            name: "Saint Martin (Saint-Martin (partie française))",
            dialCode: "+590",
            phoneFormat: "0690 30-1234"
        },
        pm: {
            code: "pm",
            name: "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
            dialCode: "+508",
            phoneFormat: "055 12 34"
        },
        vc: {
            code: "vc",
            name: "Saint Vincent and the Grenadines",
            dialCode: "+1784",
            phoneFormat: "(784) 430-1234"
        },
        ws: {
            code: "ws",
            name: "Samoa",
            dialCode: "+685",
            phoneFormat: "601234"
        },
        sm: {
            code: "sm",
            name: "San Marino",
            dialCode: "+378",
            phoneFormat: "66 66 12 12"
        },
        st: {
            code: "st",
            name: "São Tomé and Príncipe (São Tomé e Príncipe)",
            dialCode: "+239",
            phoneFormat: "981 2345"
        },
        sa: {
            code: "sa",
            name: "Saudi Arabia (‫المملكة العربية السعودية‬‎)",
            dialCode: "+966",
            phoneFormat: "051 234 5678"
        },
        sn: {
            code: "sn",
            name: "Senegal (Sénégal)",
            dialCode: "+221",
            phoneFormat: "70 123 45 67"
        },
        rs: {
            code: "rs",
            name: "Serbia (Србија)",
            dialCode: "+381",
            phoneFormat: "060 1234567"
        },
        sc: {
            code: "sc",
            name: "Seychelles",
            dialCode: "+248",
            phoneFormat: "2 510 123"
        },
        sl: {
            code: "sl",
            name: "Sierra Leone",
            dialCode: "+232",
            phoneFormat: "(025) 123456"
        },
        sx: {
            code: "sx",
            name: "Sint Maarten",
            dialCode: "+1721",
            phoneFormat: "(721) 520-5678"
        },
        sk: {
            code: "sk",
            name: "Slovakia (Slovensko)",
            dialCode: "+421",
            phoneFormat: "0912 123 456"
        },
        si: {
            code: "si",
            name: "Slovenia (Slovenija)",
            dialCode: "+386",
            phoneFormat: "031 234 567"
        },
        sb: {
            code: "sb",
            name: "Solomon Islands",
            dialCode: "+677",
            phoneFormat: "74 21234"
        },
        so: {
            code: "so",
            name: "Somalia (Soomaaliya)",
            dialCode: "+252",
            phoneFormat: "7 1123456"
        },
        za: {
            code: "za",
            name: "South Africa",
            dialCode: "+27",
            phoneFormat: "071 123 4567"
        },
        kr: {
            code: "kr",
            name: "South Korea (대한민국)",
            dialCode: "+82",
            phoneFormat: "010-0000-0000"
        },
        ss: {
            code: "ss",
            name: "South Sudan (‫جنوب السودان‬‎)",
            dialCode: "+211",
            phoneFormat: "0977 123 456"
        },
        es: {
            code: "es",
            name: "Spain (España)",
            dialCode: "+34",
            phoneFormat: "612 34 56 78"
        },
        lk: {
            code: "lk",
            name: "Sri Lanka (ශ්‍රී ලංකාව)",
            dialCode: "+94",
            phoneFormat: "071 234 5678"
        },
        sd: {
            code: "sd",
            name: "Sudan (‫السودان‬‎)",
            dialCode: "+249",
            phoneFormat: "091 123 1234"
        },
        sr: {
            code: "sr",
            name: "Suriname",
            dialCode: "+597",
            phoneFormat: "741-2345"
        },
        sj: {
            code: "sj",
            name: "Svalbard and Jan Mayen",
            dialCode: "+47",
            phoneFormat: "412 34 567"
        },
        sz: {
            code: "sz",
            name: "Swaziland",
            dialCode: "+268",
            phoneFormat: "7612 3456"
        },
        se: {
            code: "se",
            name: "Sweden (Sverige)",
            dialCode: "+46",
            phoneFormat: "070-123 45 67"
        },
        ch: {
            code: "ch",
            name: "Switzerland (Schweiz)",
            dialCode: "+41",
            phoneFormat: "078 123 45 67"
        },
        sy: {
            code: "sy",
            name: "Syria (‫سوريا‬‎)",
            dialCode: "+963",
            phoneFormat: "0944 567 890"
        },
        tj: {
            code: "tj",
            name: "Tajikistan",
            dialCode: "+992",
            phoneFormat: "(8) 917 12 3456"
        },
        tz: {
            code: "tz",
            name: "Tanzania",
            dialCode: "+255",
            phoneFormat: "0621 234 567"
        },
        tl: {
            code: "tl",
            name: "Timor-Leste",
            dialCode: "+670",
            phoneFormat: "7721 2345"
        },
        tg: {
            code: "tg",
            name: "Togo",
            dialCode: "+228",
            phoneFormat: "90 11 23 45"
        },
        tk: {
            code: "tk",
            name: "Tokelau",
            dialCode: "+690",
            phoneFormat: "7290"
        },
        to: {
            code: "to",
            name: "Tonga",
            dialCode: "+676",
            phoneFormat: "771 5123"
        },
        tt: {
            code: "tt",
            name: "Trinidad and Tobago",
            dialCode: "+1868",
            phoneFormat: "(868) 291-1234"
        },
        tn: {
            code: "tn",
            name: "Tunisia (‫تونس‬‎)",
            dialCode: "+216",
            phoneFormat: "20 123 456"
        },
        tr: {
            code: "tr",
            name: "Turkey (Türkiye)",
            dialCode: "+90",
            phoneFormat: "0501 234 56 78"
        },
        tm: {
            code: "tm",
            name: "Turkmenistan",
            dialCode: "+993",
            phoneFormat: "8 66 123456"
        },
        tc: {
            code: "tc",
            name: "Turks and Caicos Islands",
            dialCode: "+1649",
            phoneFormat: "(649) 231-1234"
        },
        tv: {
            code: "tv",
            name: "Tuvalu",
            dialCode: "+688",
            phoneFormat: "901234"
        },
        gb: {
            code: "gb",
            name: "United Kingdom",
            dialCode: "+44",
            phoneFormat: "07400 123456"
        },
        ug: {
            code: "ug",
            name: "Uganda",
            dialCode: "+256",
            phoneFormat: "0712 345678"
        },
        ua: {
            code: "ua",
            name: "Ukraine (Україна)",
            dialCode: "+380",
            phoneFormat: "039 123 4567"
        },
        uy: {
            code: "uy",
            name: "Uruguay",
            dialCode: "+598",
            phoneFormat: "094 231 234"
        },
        uz: {
            code: "uz",
            name: "Uzbekistan (Oʻzbekiston)",
            dialCode: "+998",
            phoneFormat: "8 91 234 56 78"
        },
        vu: {
            code: "vu",
            name: "Vanuatu",
            dialCode: "+678",
            phoneFormat: "591 2345"
        },
        va: {
            code: "va",
            name: "Vatican City (Città del Vaticano)",
            dialCode: "+39",
            phoneFormat: "312 345 6789"
        },
        ve: {
            code: "ve",
            name: "Venezuela",
            dialCode: "+58",
            phoneFormat: "0412-1234567"
        },
        wf: {
            code: "wf",
            name: "Wallis and Futuna",
            dialCode: "+681",
            phoneFormat: "50 12 34"
        },
        eh: {
            code: "eh",
            name: "Western Sahara (‫الصحراء الغربية‬‎)",
            dialCode: "+212",
            phoneFormat: "0650-123456"
        },
        ye: {
            code: "ye",
            name: "Yemen (‫اليمن‬‎)",
            dialCode: "+967",
            phoneFormat: "0712 345 678"
        },
        zm: {
            code: "zm",
            name: "Zambia",
            dialCode: "+260",
            phoneFormat: "095 5123456"
        },
        zw: {
            code: "zw",
            name: "Zimbabwe",
            dialCode: "+263",
            phoneFormat: "071 123 4567"
        },
        ax: {
            code: "ax",
            name: "Åland Islands",
            dialCode: "+358",
            phoneFormat: "041 2345678"
        }
    },
    w5 = {
        class: "dropdown"
    },
    b5 = ["onClick"],
    C5 = $({
        __name: "DropDown",
        props: {
            disabled: {
                type: Boolean,
                default: !1
            },
            typeValue: {}
        },
        emits: ["changeT"],
        setup(e, {
            expose: s,
            emit: n
        }) {
            const o = nt(),
                A = D(!1),
                i = Object.entries(h5);

            function g(u) {
                n("changeT", u.replace("+", "")), A.value = !A.value
            }
            const d = M(() => {
                    var p;
                    const u = (p = o.getAreaPhoneLenList) == null ? void 0 : p.map(w => w.area);
                    return u.length ? i.filter(w => u.includes(w[1].dialCode)) : i
                }),
                v = () => {
                    A.value = !1
                };
            return le(async () => {}), s({
                close: v
            }), (u, p) => {
                var w;
                return _(), m("div", w5, [t("div", {
                    class: "dropdown__value",
                    onClick: p[0] || (p[0] = b => u.disabled ? null : A.value = !A.value)
                }, [t("span", null, "+" + a(u.typeValue), 1)]), t("div", {
                    class: ae(["dropdown__list", {
                        active: A.value
                    }])
                }, [(w = d.value) != null && w.length ? (_(!0), m(Y, {
                    key: 0
                }, te(d.value, (b, C) => (_(), m("div", {
                    key: C,
                    class: ae(["dropdown__list-item", {
                        active: b[1].dialCode.includes(u.typeValue)
                    }]),
                    onClick: R => g(b[1].dialCode)
                }, [t("span", null, a(b[1].dialCode), 1), j(" " + a(b[1].name), 1)], 10, b5))), 128)) : K("", !0)], 2)])
            }
        }
    });
const Mt = ee(C5, [
        ["__scopeId", "data-v-df541c6f"]
    ]),
    y5 = {
        key: 0,
        class: "active-container"
    },
    f5 = ["src"],
    B5 = {
        class: "active-box"
    },
    R5 = {
        class: "title"
    },
    E5 = ["innerHTML"],
    D5 = {
        key: 1
    },
    I5 = ["src"],
    S5 = $({
        __name: "index",
        setup(e) {
            const s = oe(),
                {
                    setLoading: n
                } = vt(),
                o = D({}),
                A = async () => {
                    var v;
                    n(!0);
                    const d = await O(i4({
                        bannerId: Number(s.currentRoute.value.query.id)
                    }));
                    (v = d == null ? void 0 : d.data) == null || v.jumpType, o.value = d.data, n(!1)
                },
                i = M(() => {
                    var d;
                    if (!((d = o.value) != null && d.img)) return [];
                    try {
                        return JSON.parse(o.value.img)
                    } catch {
                        return []
                    }
                });

            function g() {
                s.go(-1)
            }
            return le(async () => {
                A()
            }), (d, v) => {
                const u = N("NavBar");
                return _(), m(Y, null, [U(u, {
                    title: d.$t("activityDestitle"),
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: g
                }, null, 8, ["title"]), o.value.coverUrl || o.value.title || o.value.img ? (_(), m("div", y5, [t("img", {
                    class: "banner",
                    src: o.value.coverUrl
                }, null, 8, f5), t("div", B5, [t("div", R5, a(o.value.title), 1), o.value.jumpType !== 3 ? (_(), m("div", {
                    key: 0,
                    innerHTML: o.value.img
                }, null, 8, E5)) : (_(), m("div", D5, [(_(!0), m(Y, null, te(i.value, (p, w) => (_(), m("div", {
                    key: w
                }, [t("img", {
                    src: p == null ? void 0 : p.Url
                }, null, 8, I5)]))), 128))]))])])) : K("", !0)], 64)
            }
        }
    });
const L5 = ee(S5, [
        ["__scopeId", "data-v-4ee7ce3a"]
    ]),
    G5 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: L5
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    k5 = e => (Re("data-v-92fca447"), e = e(), Ee(), e),
    U5 = {
        class: "nodatacontainer"
    },
    M5 = k5(() => t("div", {
        class: "nodata"
    }, null, -1)),
    T5 = {
        class: "font24"
    },
    Q5 = $({
        __name: "index",
        setup(e) {
            const s = oe(),
                n = () => {
                    s.push({
                        name: "home"
                    })
                };
            return (o, A) => (_(), m(Y, null, [t("div", U5, [M5, t("div", T5, a(o.$t("notAmegaJackpot")), 1)]), t("div", {
                class: "Xg-btn-bet",
                onClick: n
            }, a(o.$t("goBetting")), 1)], 64))
        }
    });
const V5 = ee(Q5, [
        ["__scopeId", "data-v-92fca447"]
    ]),
    St = _n.messages();

function Hs(e) {
    const s = D();
    return le(() => {
        const n = "refresh" + bs();
        s.value && s.value.setAttribute("id", n), setTimeout(() => {
            zt.init({
                mainElement: "#" + n,
                triggerElement: "body",
                onRefresh() {
                    e()
                },
                instructionsReleaseToRefresh: St.vanPullRefresh.loosing,
                instructionsPullToRefresh: St.vanPullRefresh.pulling,
                instructionsRefreshing: St.loading
            })
        }, 200)
    }), Tt(() => {
        zt.destroyAll()
    }), {
        elementRef: s
    }
}
const O5 = {
        class: "infiniteScroll__loading"
    },
    P5 = $({
        __name: "ListSimply",
        props: {
            api: {},
            distance: {
                default: 100
            },
            pageQuery: {
                default: {}
            },
            list: {},
            isAutoLoad: {
                type: Boolean,
                default: !0
            },
            Module: {},
            filterData: {}
        },
        emits: ["update:list", "update:pageQuery", "update:totalCount", "pageChange", "listChange"],
        setup(e, {
            expose: s,
            emit: n
        }) {
            const o = e,
                A = M(() => {
                    let h = l(o.list);
                    return o.filterData ? o.filterData(h) : h
                }),
                {
                    isAutoLoad: i
                } = o,
                g = D(!1),
                d = D({
                    pageNo: 1,
                    pageSize: 10
                }),
                v = D(!1),
                u = async h => {
                    if (!d.value.pageNo || !d.value.pageSize) return;
                    v.value = !0;
                    let y = { ...d.value,
                        ...o.pageQuery,
                        ...h
                    };
                    const f = await O(o.api(y));
                    if (f) {
                        d.value.pageNo = f.data.pageNo, n("pageChange", f.data), (f.data.totalCount === 0 || f.data.totalPage === d.value.pageNo) && (g.value = !0);
                        let Q = d.value.pageNo === 1 ? f.data.list : [...o.list.concat(f.data.list)];
                        n("update:list", Q), n("listChange", f), v.value = !1
                    } else v.value = !1
                },
                p = D(!1);
            let w = null;
            async function b() {
                w && (w(), w = null), await u(), pt(() => {
                    w = Ce(B, h => {
                        const {
                            innerHeight: y
                        } = window;
                        p.value || h <= y + o.distance && h !== 0 && d.value.pageNo >= 1 && !v.value && !g.value && (u({
                            pageNo: d.value.pageNo + 1
                        }), p.value = !0, setTimeout(() => {
                            p.value = !1
                        }, 1e3))
                    })
                })
            }
            le(async () => {
                i && b()
            }), Qt(async () => {});
            const C = () => {
                    d.value = {
                        pageNo: 1,
                        pageSize: 10
                    }, g.value = !1, n("update:list", []), b()
                },
                {
                    elementRef: R
                } = Hs(C),
                {
                    bottom: B
                } = ds(R);
            return s({
                resetRefresh: C
            }), (h, y) => {
                const f = N("van-loading");
                return _(), m("div", {
                    class: "infiniteScroll",
                    ref_key: "scrollRef",
                    ref: R
                }, [Be(h.$slots, "content", {
                    list: A.value,
                    Module: h.Module
                }, void 0, !0), Be(h.$slots, "loading", {}, () => [t("div", O5, [v.value && !g.value ? (_(), ce(f, {
                    key: 0,
                    class: "z-50"
                })) : K("", !0), A.value.length === 0 && g.value && h.Module === "" ? (_(), ce(ke, {
                    key: 1
                })) : A.value.length === 0 && g.value && h.Module === "SuperJackpot" ? (_(), ce(V5, {
                    key: 2
                })) : g.value ? (_(), m("div", {
                    key: 3,
                    ref: "pullTextRef"
                }, a(h.$t("noMoreThere")), 513)) : K("", !0)])], !0)], 512)
            }
        }
    });
const Ys = ee(P5, [
        ["__scopeId", "data-v-78a09bd4"]
    ]),
    F5 = {
        class: "championship"
    },
    x5 = {
        class: "tabs"
    },
    N5 = ["onClick"],
    H5 = ["onClick"],
    Y5 = $({
        __name: "index",
        setup(e) {
            const {
                tabList: s,
                serviceNowTime: n,
                type: o
            } = st(), {
                t: A
            } = ie(), i = oe(), g = ue({
                state: 1
            }), d = D([]), v = D(), u = D(!1), p = D(""), w = D(!1);
            Ce(w, f => {
                var Q;
                w.value && ((Q = v.value) == null || Q.resetRefresh())
            });

            function b(f) {
                i.push({
                    name: "Championship-ChampionshipDetail",
                    query: {
                        championId: f
                    }
                })
            }

            function C(f) {
                var Q;
                g.state = f, (Q = v.value) == null || Q.resetRefresh()
            }

            function R(f) {
                n.value = f.serviceNowTime
            }
            const B = D(null),
                h = async f => {
                    B.value && clearTimeout(B.value), B.value = setTimeout(async () => {
                        var G;
                        if (f.isJoin) return;
                        const Q = await y(J4({
                            championId: f.id
                        }));
                        if (Q) {
                            if (Q.code == 0) be(A("success")), (G = v.value) == null || G.resetRefresh();
                            else if ([803, 804, 805].includes(Q.msgCode) && Q.data != null) switch (u.value = !0, Q.msgCode) {
                                case 803:
                                    p.value = A("cpsTip25", [Q.data]);
                                    break;
                                case 804:
                                    p.value = A("cpsTip26", [Q.data]);
                                    break;
                                case 805:
                                    p.value = A("cpsTip27", [o[Q.data]]);
                                    break;
                                default:
                                    p.value = A(`code${Q.msgCode}`)
                            }
                        }
                    }, 100)
                },
                y = async f => await f.then(G => G && G.code !== 0 ? [803, 804, 805].includes(G.msgCode) ? G : (Se(G), null) : G).catch(G => (Se(G), null));
            return (f, Q) => {
                const G = N("NavBar"),
                    se = N("van-sticky");
                return _(), m("div", F5, [U(se, null, {
                    default: X(() => [U(G, {
                        title: f.$t("cpsTip1"),
                        "left-arrow": "",
                        onClickLeft: Q[0] || (Q[0] = () => l(i).back())
                    }, null, 8, ["title"]), t("div", x5, [(_(!0), m(Y, null, te(l(s), F => (_(), m("div", {
                        key: F.key,
                        class: ae({
                            active: g.state == F.key
                        }),
                        onClick: S => C(F.key)
                    }, a(F.title), 11, N5))), 128))])]),
                    _: 1
                }), U(Ys, {
                    list: d.value,
                    "onUpdate:list": Q[2] || (Q[2] = F => d.value = F),
                    api: l(Y4),
                    "page-query": g,
                    "onUpdate:pageQuery": Q[3] || (Q[3] = F => g = F),
                    distance: 100,
                    ref_key: "listRef",
                    ref: v,
                    "is-auto-load": !0,
                    onListChange: R
                }, {
                    content: X(() => [(_(!0), m(Y, null, te(d.value, F => (_(), m("div", {
                        key: F.id
                    }, [U(Kt, {
                        itemD: F,
                        state: F.state,
                        isRefresh: w.value,
                        "onUpdate:isRefresh": Q[1] || (Q[1] = S => w.value = S),
                        onClick: S => b(F.id)
                    }, null, 8, ["itemD", "state", "isRefresh", "onClick"]), [1].includes(F.state) ? (_(), m("div", {
                        key: 0,
                        class: ae(["btn", {
                            active: !F.isJoin
                        }]),
                        onClick: S => h(F)
                    }, a(F.isJoin ? f.$t("cpsTip8") : f.$t("cpsTip9")), 11, H5)) : K("", !0)]))), 128))]),
                    _: 1
                }, 8, ["list", "api", "page-query"]), U(ze, {
                    show: u.value,
                    "onUpdate:show": Q[4] || (Q[4] = F => u.value = F),
                    onConfirm: Q[5] || (Q[5] = () => u.value = !1),
                    showCancelBtn: !1,
                    showCloseIcon: !0,
                    clickOutSide: !0
                }, {
                    content: X(() => [t("h1", null, a(p.value), 1)]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const W5 = ee(Y5, [
        ["__scopeId", "data-v-919d89ff"]
    ]),
    J5 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: W5
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    K5 = {
        class: "dailySignIn__container"
    },
    X5 = {
        class: "dailySignIn__container-hero"
    },
    j5 = {
        class: "dailySignIn__container-hero__header"
    },
    z5 = {
        class: "title"
    },
    Z5 = {
        class: "tip1"
    },
    q5 = {
        class: "tip2"
    },
    $5 = {
        class: "tip3"
    },
    e6 = {
        class: "dailySignIn__container-hero__footer"
    },
    t6 = {
        class: "dailySignIn__container-content"
    },
    s6 = {
        class: "dailySignIn__container-content__wrapper-block__header"
    },
    n6 = {
        class: "day"
    },
    a6 = ["onClick"],
    o6 = $({
        __name: "index",
        setup(e) {
            const s = oe(),
                o = ve().getUserInfo,
                A = D({}),
                i = D([]);
            let g = !1;

            function d() {
                s.go(-1)
            }

            function v(w) {
                s.push({
                    name: w === "rules" ? `${String(s.currentRoute.value.name)}-Rules` : `${String(s.currentRoute.value.name)}-Record`
                })
            }
            async function u() {
                await O(l4({})) && localStorage.setItem("signedFlag", "1"), p()
            }
            const p = async () => {
                const w = await O(Us({
                    uid: o.userId,
                    sign: o.sign
                }));
                localStorage.getItem("signedFlag") === "1" && (g = !0), i.value = w.data.signInRechargesList, A.value = w.data.signIn
            };
            return le(async () => {
                localStorage.setItem("signedFlag", "0"), p()
            }), (w, b) => {
                const C = N("NavBar");
                return _(), m("div", K5, [U(C, {
                    title: w.$t("checkIn"),
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: d
                }, null, 8, ["title"]), t("div", X5, [t("div", j5, [t("div", z5, a(w.$t("code9007")), 1), t("div", Z5, a(w.$t("descRewordsBasedOnConsecutiveDays")), 1), t("div", q5, [j(a(w.$t("checkedInConsecutively")), 1), t("span", null, a(A.value.signCount || 0), 1), j(a(w.$t("days")), 1)]), t("div", $5, [j(a(w.$t("comulativelyObtained")) + " ", 1), t("span", null, a(A.value.signInSum || 0), 1)])]), t("div", e6, [t("div", {
                    onClick: b[0] || (b[0] = R => v("rules"))
                }, a(w.$t("playRules")), 1), t("div", {
                    onClick: b[1] || (b[1] = R => v("record"))
                }, a(w.$t("checkInRecord")), 1)])]), t("div", t6, [(_(!0), m(Y, null, te(i.value, (R, B) => (_(), m("div", {
                    key: B,
                    class: ae(["dailySignIn__container-content__wrapper-block", {
                        signed: B < A.value.signCount
                    }])
                }, [t("div", s6, a(l(Ae)(R.bouns)), 1), t("div", n6, a(w.$t("continuous")) + a(R.day) + " " + a(w.$t("days")), 1)], 2))), 128))]), t("div", {
                    class: ae(["dailySignIn__container-sumbit", {
                        disabled: l(g)
                    }]),
                    onClick: un(u, ["stop"])
                }, a(w.$t("checkIn")), 11, a6)])
            }
        }
    });
const A6 = ee(o6, [
        ["__scopeId", "data-v-c2dec6e2"]
    ]),
    i6 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: A6
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    l6 = {
        class: "dailySignIn__container"
    },
    r6 = {
        class: "task-banner"
    },
    c6 = {
        class: "banner-title"
    },
    g6 = {
        class: "banner-content"
    },
    d6 = {
        class: "task-panel"
    },
    p6 = {
        key: 0,
        class: "task-item"
    },
    _6 = {
        class: "task-item-header"
    },
    u6 = {
        class: "hearder-status new"
    },
    v6 = {
        class: "task-item-type"
    },
    m6 = {
        class: "type-title new"
    },
    h6 = {
        class: "type-tip"
    },
    w6 = {
        class: "task-item-description"
    },
    b6 = {
        class: "task-item-bottom"
    },
    C6 = {
        class: "bottom-title"
    },
    y6 = {
        class: "task-item-header"
    },
    f6 = {
        class: "task-item-type"
    },
    B6 = {
        class: "type-tip"
    },
    R6 = {
        class: "task-item-description"
    },
    E6 = {
        class: "task-item-bottom"
    },
    D6 = {
        class: "bottom-title"
    },
    I6 = ["onClick"],
    S6 = {
        class: "dialog-window"
    },
    L6 = {
        class: "dialog-wrapper"
    },
    G6 = {
        class: "dialog-title"
    },
    k6 = {
        class: "dialog-tips"
    },
    U6 = {
        class: "dialog-content"
    },
    M6 = $({
        __name: "index",
        setup(e) {
            const {
                t: s
            } = ie(), n = D(!1), o = oe(), {
                ActiveTaskMap: A,
                ActiveSotre: i,
                getActive: g
            } = Ye();
            g();
            const d = D(""),
                v = D("0"),
                u = D([]),
                p = D([]),
                w = D([]),
                b = M(() => {
                    let I = [...p.value, ...w.value];
                    if (I.length == 0) return [];
                    const k = ["", 2, 1, 3];
                    I = I.sort((q, re) => k[q.status] - k[re.status]);
                    const ne = I.filter(q => q.status == 1);
                    ne.sort((q, re) => y(re.schedule, re.taskTarget) - y(q.schedule, q.taskTarget));
                    const J = I.findIndex(q => q.status == 1);
                    return I.splice(J, ne.length, ...ne), I
                }),
                C = async () => {
                    const I = await O(U4());
                    I && (p.value = I.data.map(k => ({ ...k,
                        type: "week"
                    })) || [])
                },
                R = async () => {
                    const I = await O(x4());
                    I && (w.value = I.data.map(k => ({ ...k,
                        type: "day"
                    })) || [])
                },
                B = async () => {
                    C(), R()
                },
                h = () => {
                    o.push({
                        name: "activity"
                    })
                };

            function y(I, k) {
                return k == 0 ? 0 : I / k * 100
            }
            const f = async () => {
                    u.value.length = 0;
                    const I = await O(O4());
                    I != null && I.data && u.value.push(I == null ? void 0 : I.data)
                },
                Q = I => ({
                    1: s("goComplete"),
                    2: s("receive"),
                    3: s("claimed")
                })[I] || "",
                G = I => ({
                    1: s("undone"),
                    2: s("complete"),
                    3: s("complete")
                })[I] || "",
                se = I => ({
                    0: s("goComplete"),
                    1: s("receive"),
                    2: s("claimed"),
                    3: s("claimed")
                })[I] || "",
                F = I => ({
                    0: s("undone"),
                    1: s("actTip2"),
                    2: s("claimed"),
                    3: s("complete")
                })[I] || "",
                S = D(null),
                T = async I => {
                    S.value && clearTimeout(S.value), S.value = setTimeout(async () => {
                        if (I.status == 1) return W(I);
                        if (I.status == 3) return;
                        let k;
                        I.type == "week" ? k = await O(M4({
                            weeklyAwardId: I.configId
                        })) : I.type == "day" && (k = await O(N4({
                            dailyAwardId: I.configId
                        }))), k.code === 0 && (n.value = !0, v.value = I.taskAwardAmount, d.value = I.taskTitle, B())
                    }, 100)
                },
                V = D(null),
                P = async I => {
                    V.value && clearTimeout(V.value), V.value = setTimeout(async () => {
                        if ([2, 3].includes(I.status)) return;
                        if (I.status == 0) return o.push({
                            name: "Recharge"
                        });
                        await O(P4({
                            id: I.id
                        })) && (n.value = !0, v.value = I.totalNumber == 0 ? "0" : (Math.floor(I.amount / I.totalNumber * 100) / 100).toString(), d.value = I.title, f())
                    }, 100)
                },
                W = async I => {
                    A[I.taskId].goPath && (A[I.taskId].homeType && sessionStorage.setItem("clickedGameType", A[I.taskId].homeType), o.push({
                        name: A[I.taskId].goPath
                    }))
                },
                L = () => {
                    o.push({
                        name: "DailyTasks-Record"
                    })
                };
            return Ce(() => i.value.isOpenActivityAward, I => {
                I && B()
            }, {
                immediate: !0
            }), le(() => {
                f()
            }), (I, k) => {
                var re, x;
                const ne = N("NavBar"),
                    J = N("van-dialog"),
                    q = he("lazy");
                return _(), m("div", l6, [U(ne, {
                    title: I.$t("actTip1"),
                    backgroundColor: "#151E2B",
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: h
                }, {
                    right: X(() => [t("div", {
                        class: "navi-record",
                        onClick: L
                    }, [Z(t("img", null, null, 512), [
                        [q, l(z)("activity/DailyTask", "awardRecord")]
                    ]), t("span", null, a(I.$t("awardsRecord")), 1)])]),
                    _: 1
                }, 8, ["title"]), t("div", r6, [t("div", null, [t("p", null, [t("div", c6, a(I.$t("actTip1")), 1), t("div", g6, [t("div", null, a(I.$t("awardsTip1")), 1), t("div", null, a(I.$t("awardsTip3")), 1)])])])]), t("div", d6, [u.value.length > 0 ? (_(), m("div", p6, [t("div", _6, [t("div", u6, a(I.$t("actTip3")), 1), t("span", {
                    class: ae(["headerR new", `state${(re=u.value[0])==null?void 0:re.status}`])
                }, a(F((x = u.value[0]) == null ? void 0 : x.status)), 3)]), t("div", v6, [t("div", m6, [t("div", null, a(u.value[0].title), 1)]), t("div", h6, a(u.value[0].receivedNumber + "/" + u.value[0].totalNumber), 1)]), t("div", w6, a(u.value[0].description), 1), t("div", b6, [t("div", null, a(I.$t("awardsAmount")), 1), t("div", C6, [Z(t("img", null, null, 512), [
                    [q, l(z)("activity/DailyTask", "amountIcon")]
                ]), t("span", null, a(l(Ae)(u.value[0].amount)), 1)])]), t("div", {
                    class: ae(["btn btnNew", `status${u.value[0].status}`]),
                    onClick: k[0] || (k[0] = H => P(u.value[0]))
                }, a(se(u.value[0].status)), 3)])) : K("", !0), (_(!0), m(Y, null, te(b.value, (H, me) => (_(), m("div", {
                    class: "task-item",
                    key: me
                }, [t("div", y6, [t("div", {
                    class: ae(["hearder-status", `${H.type}`])
                }, a(H.type == "week" ? I.$t("actTip4") : I.$t("dailyMission")), 3), t("span", {
                    class: ae(["headerR other", `state${H.status}`])
                }, a(G(H.status)), 3)]), t("div", f6, [t("div", {
                    class: ae(["type-title", [l(A)[H.taskId].icon]])
                }, [t("div", null, a(H.taskTitle), 1)], 2), t("div", B6, a(H.schedule + "/" + H.taskTarget), 1)]), t("div", R6, a(H.taskDescribe), 1), t("div", E6, [t("div", null, a(I.$t("awardsAmount")), 1), t("div", D6, [Z(t("img", null, null, 512), [
                    [q, l(z)("activity/DailyTask", "amountIcon")]
                ]), t("span", null, a(l(Ae)(H.taskAwardAmount)), 1)])]), t("div", {
                    class: ae(["btn btnOther", `status${H.status}`]),
                    onClick: Pe => T(H)
                }, a(Q(H.status)), 11, I6)]))), 128))]), U(J, {
                    show: n.value,
                    "onUpdate:show": k[3] || (k[3] = H => n.value = H),
                    "show-confirm-button": !1,
                    className: "noOverHidden"
                }, {
                    default: X(() => [t("div", S6, [t("div", L6, [Z(t("img", null, null, 512), [
                        [q, l(z)("activity/DailyTask", "taskbg")]
                    ]), t("div", G6, a(I.$t("awardsReceived")), 1), t("div", k6, a(d.value), 1), t("div", U6, [t("span", null, a(l(Ae)(v.value)), 1)]), t("div", {
                        class: "dialog-btn",
                        onClick: k[1] || (k[1] = H => n.value = !1)
                    }, a(I.$t("confirm")), 1), t("div", {
                        class: "dialog-footer",
                        onClick: k[2] || (k[2] = H => n.value = !1)
                    }, [Z(t("img", null, null, 512), [
                        [q, l(z)("activity/DailyTask", "close")]
                    ])])])])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const T6 = ee(M6, [
        ["__scopeId", "data-v-8f025e10"]
    ]),
    Q6 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: T6
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    V6 = {
        class: "first_list"
    },
    O6 = $({
        __name: "index",
        setup(e) {
            const {
                ActiveSotre: s,
                getFirstRechargeList: n
            } = Ye(), {
                t: o
            } = ie(), A = oe(), i = M(() => {
                var v;
                return (v = s.value.FirstRechargeList) != null && v.length ? s.value.FirstRechargeList.reduce((u, p) => Math.max(u.rewardAmount || u, p.rewardAmount)) : "0"
            }), g = M(() => [o("firstSave1", [Ae(i.value)]), o("firstSave2"), o("firstSave3"), o("firstSave4"), o("firstSave5"), o("firstSave6")]), d = () => {
                A.push({
                    name: "Recharge"
                })
            };
            return le(() => {
                n()
            }), (v, u) => {
                const p = N("NavBar");
                return _(), m(Y, null, [U(p, {
                    title: v.$t("firstSaveTitle"),
                    "left-arrow": "",
                    onClickLeft: u[0] || (u[0] = w => l(A).go(-1))
                }, null, 8, ["title"]), t("div", V6, [U(uB, {
                    list: l(s).FirstRechargeList,
                    onGorecharge: d
                }, null, 8, ["list"])]), (_(!0), m(Y, null, te(g.value, (w, b) => (_(), m("div", {
                    key: b,
                    class: "rule"
                }, a(`${b+1}. ${w}`), 1))), 128))], 64)
            }
        }
    });
const P6 = ee(O6, [
        ["__scopeId", "data-v-d2437f5e"]
    ]),
    F6 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: P6
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    x6 = "/assets/png/box-4a7ba10d.png",
    N6 = {
        class: "rule"
    },
    H6 = {
        class: "head"
    },
    Y6 = {
        key: 0
    },
    W6 = ["innerHTML"],
    J6 = $({
        __name: "Rule",
        props: {
            tiplist: {
                type: Array,
                default: []
            },
            render: {
                type: String,
                default: "text"
            },
            name: {
                type: String,
                default: []
            }
        },
        setup(e) {
            return (s, n) => (_(), m("div", N6, [t("div", H6, a(e.name), 1), (_(!0), m(Y, null, te(e.tiplist, (o, A) => (_(), m("div", {
                key: A
            }, [e.render === "text" ? (_(), m("div", Y6, a(o), 1)) : (_(), m("div", {
                key: 1,
                innerHTML: o
            }, null, 8, W6))]))), 128)), Be(s.$slots, "default", {}, void 0, !0)]))
        }
    });
const Ws = ee(J6, [
        ["__scopeId", "data-v-9b9790da"]
    ]),
    We = e => (Re("data-v-11e01ac9"), e = e(), Ee(), e),
    K6 = {
        class: "package"
    },
    X6 = {
        class: "package-banner"
    },
    j6 = We(() => t("img", {
        src: x6,
        alt: ""
    }, null, -1)),
    z6 = {
        class: "package-banner-text"
    },
    Z6 = We(() => t("span", null, "1", -1)),
    q6 = We(() => t("span", null, "2", -1)),
    $6 = {
        class: "package-time"
    },
    eR = {
        key: 1,
        class: "package-rule"
    },
    tR = {
        class: "package-rule-titlebox"
    },
    sR = {
        class: "package-rule-title"
    },
    nR = {
        class: "package-rule-title"
    },
    aR = {
        class: "package-rule-title"
    },
    oR = {
        class: "rotateNum"
    },
    AR = {
        key: 2,
        class: "package-tips"
    },
    iR = We(() => t("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "36",
        height: "36",
        viewBox: "0 0 36 36",
        fill: "none"
    }, [t("path", {
        d: "M18 33C22.1421 33 25.8921 31.3211 28.6066 28.6066C31.3211 25.8921 33 22.1421 33 18C33 13.8579 31.3211 10.1079 28.6066 7.39339C25.8921 4.67893 22.1421 3 18 3C13.8579 3 10.1079 4.67893 7.39339 7.39339C4.67893 10.1079 3 13.8579 3 18C3 22.1421 4.67893 25.8921 7.39339 28.6066C10.1079 31.3211 13.8579 33 18 33Z",
        stroke: "#FF7172",
        "stroke-width": "2",
        "stroke-linejoin": "round"
    }), t("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M18 27.75C19.0355 27.75 19.875 26.9105 19.875 25.875C19.875 24.8395 19.0355 24 18 24C16.9645 24 16.125 24.8395 16.125 25.875C16.125 26.9105 16.9645 27.75 18 27.75Z",
        fill: "#EE3625"
    }), t("path", {
        d: "M18 9V21",
        stroke: "#EE3625",
        "stroke-width": "2.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1)),
    lR = {
        class: "package-list"
    },
    rR = {
        class: "package-item-head"
    },
    cR = {
        class: "package-item-box"
    },
    gR = {
        class: "package-item-top"
    },
    dR = {
        class: "moeny"
    },
    pR = We(() => t("p", null, [t("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none"
    }, [t("path", {
        d: "M32.298 18.6091C38.8283 18.6091 44.3643 21.4959 44.5609 25.7142L44.5643 25.9451V33.0765C44.5643 37.4194 38.9472 40.4114 32.2969 40.4114C31.4146 40.4114 30.5506 40.3588 29.714 40.2571V36.7965C30.5255 36.9165 31.3929 36.9828 32.2969 36.9828C37.3037 36.9828 41.1369 34.9416 41.1369 33.0754V31.1142C39.7346 31.9656 37.9769 32.5976 36.0032 32.9554C34.8157 33.1702 33.5689 33.2811 32.2969 33.2811C31.4203 33.2811 30.5552 33.2285 29.714 33.1256V29.6662C30.5437 29.7896 31.4123 29.8525 32.2969 29.8525C33.3655 29.8525 34.4077 29.7611 35.3917 29.5816C38.9186 28.9428 41.1369 27.3199 41.1369 25.9451C41.1369 24.0799 37.3037 22.0376 32.2969 22.0376C31.3929 22.0376 30.5255 22.1051 29.714 22.2251V18.7634C30.5711 18.6599 31.4336 18.6084 32.2969 18.6091H32.298ZM15.6123 6.28564C22.1426 6.28564 27.6786 9.1725 27.8752 13.3896L27.8786 13.6216V35.1074C27.8786 39.4502 22.2615 42.4434 15.6112 42.4434C8.96204 42.4434 3.34375 39.4502 3.34375 35.1074V20.7759V13.6205C3.34375 9.27764 8.96204 6.28564 15.6112 6.28564H15.6123ZM24.4523 33.1462C23.0489 33.9976 21.2912 34.6296 19.3175 34.9874C18.13 35.2022 16.8832 35.3131 15.6112 35.3131C14.3689 35.3151 13.1289 35.2061 11.906 34.9874C9.93232 34.6296 8.17461 33.9976 6.77232 33.1474V35.1074L6.77804 35.2354C6.94718 37.0651 10.7186 39.0148 15.6123 39.0148C20.618 39.0148 24.4512 36.9736 24.4512 35.1074V33.1462H24.4523ZM24.4523 25.9691C23.0489 26.8194 21.2912 27.4525 19.3175 27.8091C18.13 28.0251 16.8832 28.1348 15.6112 28.1348C14.3689 28.1368 13.1289 28.0278 11.906 27.8091C9.93232 27.4525 8.17461 26.8194 6.77232 25.9691V27.9771L6.77918 28.1108C6.91632 29.4559 9.10375 30.9954 12.5163 31.6136C13.5003 31.7919 14.5437 31.8845 15.6112 31.8845C16.6797 31.8845 17.722 31.7931 18.706 31.6136C22.2329 30.9736 24.4512 29.3519 24.4512 27.9771V25.9679L24.4523 25.9691ZM24.4523 18.7908C23.0489 19.6411 21.2912 20.2742 19.3175 20.6308C18.13 20.8479 16.8832 20.9576 15.6112 20.9576C14.3689 20.9597 13.1289 20.8507 11.906 20.6319C9.93232 20.2742 8.17461 19.6422 6.77232 18.7908V20.7999L6.77918 20.9336C6.91632 22.2788 9.10375 23.8171 12.5163 24.4365C13.5003 24.6148 14.5437 24.7062 15.6112 24.7062C16.6797 24.7062 17.722 24.6148 18.706 24.4365C22.2329 23.7965 24.4512 22.1736 24.4512 20.7999V20.7771V18.7908H24.4523ZM15.6112 9.71422C10.6055 9.71422 6.77232 11.7554 6.77232 13.6216C6.77232 14.9965 8.98946 16.6194 12.5175 17.2582C13.5003 17.4365 14.5437 17.5291 15.6112 17.5291C16.6797 17.5291 17.722 17.4365 18.706 17.2582C22.2329 16.6182 24.4512 14.9965 24.4512 13.6216C24.4512 11.7554 20.618 9.71422 15.6112 9.71422Z",
        fill: "#FA2367"
    })])], -1)),
    _R = {
        class: "moeny"
    },
    uR = We(() => t("p", null, [t("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none"
    }, [t("path", {
        d: "M6.64044 22.4187V24.1173H9.50881C10.5045 24.1173 11.4001 24.2346 12.1857 24.4335C12.6452 24.5496 13.001 24.6756 13.2468 24.7856L19.1232 27.1091H26.3929L26.6202 27.1227C27.1428 27.1845 27.7938 27.3722 28.4707 27.796C28.9744 28.1045 29.4046 28.5193 29.7315 29.0113C30.0584 29.5033 30.2739 30.0606 30.3632 30.6445L37.8504 27.4612C38.053 27.3377 38.3136 27.1981 38.6224 27.061C39.4439 26.6965 40.2988 26.4927 41.1894 26.557C42.4111 26.6447 43.4932 27.2512 44.2258 28.3654C45.4166 30.1776 45.1424 32.0256 44.0244 33.4672C43.6909 33.8983 43.3549 34.2083 43.0807 34.4072C42.9985 34.4675 42.9118 34.5212 42.8212 34.5678L33.2896 39.4534L23.9409 44.2302L23.5456 44.4192C22.2655 44.9889 20.8394 45.1444 19.4666 44.8639C19.2675 44.8265 19.0711 44.7761 18.8786 44.7132L8.11045 41.1457L6.64044 41.1445V43.0505H3V22.4187H6.64044ZM9.50881 28.0022L6.64044 28.001V37.262H8.42298C8.56134 37.262 8.69845 37.2768 8.83434 37.3064L9.03322 37.3608L20.1287 41.0358L20.424 41.0889C20.9527 41.1568 21.5468 41.0877 22.1287 40.7949L40.8448 31.2165C40.8756 31.1844 40.9152 31.1411 40.9559 31.0892C41.1412 30.8496 41.1536 30.7619 40.9806 30.4988L40.9423 30.437C40.9362 30.4296 40.9312 30.4321 40.909 30.4308H40.8225C40.6644 30.4432 40.4396 30.5049 40.1962 30.6124C40.1622 30.6275 40.1284 30.6432 40.0949 30.6594L39.9343 30.7409L39.6848 30.8916L39.5168 30.9731L27.396 36.1267C27.1557 36.2288 26.8973 36.2813 26.6363 36.2812H16.8552V32.3974H26.241L26.5412 32.2689V31.4289C26.5412 31.1967 26.5165 31.1547 26.4053 31.0855C26.3428 31.0481 26.2766 31.0175 26.2076 30.9941H18.7514C18.5068 30.9941 18.2646 30.9472 18.0373 30.8582L11.7707 28.379L11.6286 28.3172L11.447 28.258L11.2321 28.1987C10.6675 28.0621 10.0883 27.9957 9.50758 28.001L9.50881 28.0022ZM23.6283 3C32.3434 3 39.4056 10.0646 39.4056 18.7783C39.4056 20.609 39.0943 22.3669 38.5199 24.0036L33.5762 25.733C35.0046 23.6955 35.7691 21.2667 35.7652 18.7783C35.7652 12.0744 30.3323 6.64163 23.6308 6.64163C16.928 6.64163 11.4952 12.0744 11.4952 18.7783C11.4952 19.7357 11.6064 20.6683 11.8164 21.5627L7.99927 20.9203C7.90296 20.2104 7.85468 19.4948 7.85474 18.7783C7.85351 10.0646 14.917 3 23.6283 3ZM25.7605 9.79409L25.7592 10.9676C26.6444 11.114 27.5065 11.3756 28.3237 11.7458L27.3021 14.3214L26.9229 14.1547C25.9285 13.7371 25.0576 13.5271 24.3127 13.5271C23.8791 13.5271 23.5641 13.6037 23.3664 13.7557C23.2751 13.819 23.2003 13.9036 23.1487 14.0021C23.0971 14.1006 23.0701 14.2102 23.07 14.3214C23.07 14.5635 23.196 14.7797 23.4467 14.9712C23.6975 15.1627 24.3769 15.5122 25.485 16.0187C26.5498 16.4968 27.2885 17.0106 27.7024 17.5604C28.1162 18.1088 28.3237 18.7993 28.3237 19.6332C28.3237 20.399 28.1298 21.0785 27.7407 21.6714C27.3528 22.2668 26.7919 22.7276 26.0606 23.0574C25.962 23.1019 25.8619 23.1431 25.7605 23.1809V24.6176H22.0546L22.0508 23.4786C21.8378 23.4547 21.626 23.4213 21.4159 23.3786C20.814 23.2473 20.23 23.0441 19.6766 22.7733V19.8024L20.0608 19.9889C20.5784 20.2273 21.1108 20.42 21.6605 20.5658C22.2764 20.7386 22.9121 20.8308 23.5517 20.84C24.0483 20.84 24.4103 20.7536 24.6413 20.5831C24.7491 20.5096 24.8372 20.4106 24.8975 20.2949C24.9578 20.1791 24.9887 20.0503 24.9872 19.9198C24.9907 19.7608 24.9421 19.6051 24.8488 19.4763C24.724 19.3223 24.572 19.1925 24.4004 19.0933C24.1953 18.9636 23.6481 18.6981 22.7574 18.2991C21.9545 17.9334 21.3492 17.5776 20.9477 17.2342C20.5625 16.9141 20.2561 16.5096 20.0521 16.0521C19.8582 15.6074 19.7606 15.0811 19.7606 14.4734C19.7606 13.3369 20.1744 12.45 21.0021 11.8138C21.3218 11.5708 21.6756 11.3764 22.0521 11.2369L22.0546 9.79409H25.7605Z",
        fill: "#FA2367"
    })])], -1)),
    vR = {
        class: "package-item-tip"
    },
    mR = {
        class: "package-item-bottom"
    },
    hR = ["onClick"],
    wR = ["onClick"],
    bR = {
        key: 2,
        class: "package-item-btn done"
    },
    CR = {
        key: 3,
        class: "package-item-btn done"
    },
    yR = $({
        __name: "index",
        setup(e) {
            const {
                t: s
            } = ie(), n = oe(), {
                getConfig: o,
                onApply: A,
                onReceive: i,
                store: g,
                time: d,
                bonusLimit: v,
                firstDeposiSendBonust: u,
                rewardRecordList: p
            } = xs(), w = () => {
                n.go(-1)
            }, b = () => {
                n.push({
                    name: "MemberPackage-Rules"
                })
            }, C = {
                0: s("witeApply"),
                1: s("c2cState0"),
                2: s("rejected"),
                3: s("unaccalimed"),
                4: s("received")
            };
            return le(() => {
                o()
            }), (R, B) => {
                const h = N("NavBar");
                return _(), m("div", K6, [U(h, {
                    title: R.$t("activityDestitle"),
                    backgroundColor: "linear-gradient(90deg, #A227BD 0%, #FA2466 98.2%)",
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: w
                }, null, 8, ["title"]), t("div", X6, [j6, t("div", z6, [t("div", null, [t("div", {
                    class: "package-desc",
                    onClick: b
                }, a(R.$t("activityDestitle")), 1)]), t("h3", null, a(R.$t("newMenberPackage")), 1), t("h4", null, a(R.$t("newMenberTip")) + "：", 1), t("p", null, [Z6, j(a(R.$t("newMenberRule")), 1)]), t("p", null, [q6, j(a(R.$t("newMenberRule2")), 1)])])]), l(g).firstDepositConfig ? (_(), ce(Ws, {
                    key: 0,
                    name: R.$t("activityTime"),
                    tiplist: []
                }, {
                    default: X(() => [t("h2", $6, a(l(d) || R.$t("lotteryActivityUnstarted")), 1)]),
                    _: 1
                }, 8, ["name"])) : K("", !0), l(g).firstDepositConfig ? (_(), m("div", eR, [t("div", tR, [t("div", sR, a(R.$t("conditionsRule")), 1), t("div", nR, a(R.$t("afterDayBonus")), 1), t("div", aR, a(R.$t("bonusLimit")), 1)]), t("ul", null, [t("li", null, [t("div", null, a(R.$t("newMemberDeposit")), 1), t("div", oR, [t("p", null, a(R.$t("todayBonus")), 1), j(), t("p", null, [t("span", null, a(l(u)) + "%", 1)])]), t("div", null, [t("span", null, a(l(Ae)(l(v))), 1)])])])])) : K("", !0), l(g).firstDepositConfig ? (_(), m("div", AR, [iR, j(" " + a(R.$t("receiveTips")), 1)])) : K("", !0), t("ul", lR, [(_(!0), m(Y, null, te(l(p), y => (_(), m("li", {
                    class: "package-item",
                    key: y.id
                }, [t("div", rR, [t("p", null, a(R.$t("registrationFull", [y.registerDays])), 1)]), t("div", cR, [t("div", gR, [t("ul", null, [t("li", dR, [t("h3", null, a(l(Ae)(y.actualGrandTotalDeposit)), 1), pR, t("p", null, a(R.$t("grandTotalDeposit")), 1)]), t("li", _R, [t("h3", null, a(l(Ae)(y.actualTotalValidBet)), 1), uR, t("p", null, a(R.$t("totalValidBet")), 1)])]), t("div", vR, [t("span", null, a(R.$t("giftBonus")), 1), t("span", null, a(l(Ae)(y.giveAwayBonus)), 1)])]), t("div", mR, a(C[y.state]), 1)]), y.state === 3 ? (_(), m("div", {
                    key: 0,
                    class: "package-item-btn",
                    onClick: f => l(i)(y.id)
                }, a(R.$t("receive")), 9, hR)) : K("", !0), y.state === 0 && y.operateState === 2 ? (_(), m("div", {
                    key: 1,
                    class: "package-item-btn apply",
                    onClick: f => l(A)(y.id)
                }, a(R.$t("activityApply")), 9, wR)) : K("", !0), y.state === 0 && [0, 1].includes(y.operateState) ? (_(), m("div", bR, a(C[0]), 1)) : K("", !0), [0, 3].includes(y.state) ? K("", !0) : (_(), m("div", CR, a(C[y.state]), 1))]))), 128))])])
            }
        }
    });
const fR = ee(yR, [
        ["__scopeId", "data-v-11e01ac9"]
    ]),
    BR = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: fR
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    RR = {
        class: "pointMall__container-treasureActivity"
    },
    ER = {
        class: "treasureActivity-tips"
    },
    DR = {
        class: "treasureActivity-desc"
    },
    IR = $({
        __name: "index",
        setup(e) {
            const s = oe(),
                n = ps(() => E(() =>
                    import ("./diamondRed-896e9b78.js"), ["assets/js/diamondRed-896e9b78.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/native/index-d56959bc.js", "assets/js/en-5db85987.js", "assets/js/rus-ecb14220.js", "assets/js/vi-40bd560a.js", "assets/js/id-24cc3835.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-02b1fc1c.js", "assets/js/bra-1f3ea623.js", "assets/js/my-80d37f62.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-c7494ff8.js", "assets/js/pak-47641c9f.js", "assets/js/ar-1c9ff85b.js"]));

            function o() {
                s.push({
                    name: `${String(s.currentRoute.value.name)}-LotteryActivity`
                })
            }
            return (A, i) => (_(), m("div", RR, [t("div", null, [(_(), ce(vn(l(n)))), t("span", null, a(A.$t("pointsTreasure")), 1)]), t("p", ER, a(A.$t("descComponents1")), 1), t("p", DR, a(A.$t("descComponents2")), 1), t("button", {
                onClick: o
            }, a(A.$t("participateLottery")), 1)]))
        }
    });
const SR = ee(IR, [
        ["__scopeId", "data-v-2a3d11f2"]
    ]),
    LR = {
        class: "infiniteScroll__loading"
    },
    GR = $({
        __name: "List",
        props: {
            api: {},
            distance: {
                default: 100
            },
            pageQuery: {
                default: {}
            },
            list: {},
            isAutoLoad: {
                type: Boolean,
                default: !0
            },
            filterData: {},
            showNoM: {
                type: Boolean,
                default: !0
            }
        },
        emits: ["update:list", "update:pageQuery", "update:totalCount", "pageChange"],
        setup(e, {
            expose: s,
            emit: n
        }) {
            const o = e,
                A = M(() => {
                    let R = l(o.list);
                    return o.filterData ? o.filterData(R) : R
                }),
                {
                    isAutoLoad: i
                } = o,
                g = D(!1),
                d = D({
                    pageNo: 1,
                    pageSize: 10
                }),
                v = D(!1),
                u = async R => {
                    if (!d.value.pageNo || !d.value.pageSize) return;
                    v.value = !0;
                    let B = { ...d.value,
                        ...o.pageQuery,
                        ...R
                    };
                    const h = await O(o.api(B));
                    if (h) {
                        d.value.pageNo = h.data.pageNo, n("pageChange", h.data), (h.data.totalCount === 0 || h.data.totalPage === d.value.pageNo) && (g.value = !0);
                        let y = d.value.pageNo === 1 ? h.data.list : [...o.list.concat(h.data.list)];
                        n("update:list", y), v.value = !1
                    } else v.value = !1;
                    C.value = !1
                },
                p = () => {
                    d.value = {
                        pageNo: 1,
                        pageSize: 10
                    }, g.value = !1, n("update:list", []), pt(() => {
                        u()
                    })
                },
                {
                    elementRef: w
                } = Hs(p),
                {
                    bottom: b
                } = ds(w);
            Ce(b, (R, B) => {
                const {
                    innerHeight: h
                } = window;
                C.value || R <= h + o.distance && B !== 0 && d.value.pageNo >= 1 && !v.value && !g.value && (C.value = !0, u({
                    pageNo: d.value.pageNo + 1
                }), setTimeout(() => {
                    C.value = !1
                }, 1e3))
            });
            const C = D(!1);
            return le(async () => {
                i && u()
            }), s({
                resetRefresh: p
            }), (R, B) => {
                const h = N("van-loading");
                return _(), m("div", {
                    class: "infiniteScroll",
                    ref_key: "scrollRef",
                    ref: w
                }, [Be(R.$slots, "content", {
                    list: A.value
                }, void 0, !0), Be(R.$slots, "loading", {}, () => [t("div", LR, [v.value && !g.value ? (_(), ce(h, {
                    key: 0,
                    class: "z-50"
                })) : K("", !0), A.value.length === 0 && g.value ? (_(), ce(ke, {
                    key: 1,
                    class: "empty"
                })) : g.value && R.showNoM ? (_(), m("div", {
                    key: 2,
                    ref: "pullTextRef"
                }, a(R.$t("noMoreThere")), 513)) : K("", !0)])], !0)], 512)
            }
        }
    });
const Oe = ee(GR, [
        ["__scopeId", "data-v-a501cfbe"]
    ]),
    kR = {
        class: "pointMall__container-products__content-item"
    },
    UR = {
        class: "pointMall__container-products__content-item__header"
    },
    MR = {
        class: "pointMall__container-products__content-item__footer"
    },
    TR = {
        class: "name"
    },
    QR = {
        class: "integral"
    },
    VR = $({
        __name: "ProductItem",
        props: {
            product: {
                type: Object,
                required: !0
            }
        },
        setup(e) {
            const s = e,
                n = oe(),
                o = ut();
            ps(() => E(() =>
                import ("./diamondRedSm-0329c0a7.js"), ["assets/js/diamondRedSm-0329c0a7.js", "assets/js/modules-5f4bb8af.js", "assets/css/modules-13a75a76.css", "assets/js/native/index-d56959bc.js", "assets/js/en-5db85987.js", "assets/js/rus-ecb14220.js", "assets/js/vi-40bd560a.js", "assets/js/id-24cc3835.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-02b1fc1c.js", "assets/js/bra-1f3ea623.js", "assets/js/my-80d37f62.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-c7494ff8.js", "assets/js/pak-47641c9f.js", "assets/js/ar-1c9ff85b.js"]));

            function A() {
                o.setRedeemItem(s.product), n.push({
                    name: `${String(n.currentRoute.value.name)}-Redeem`
                })
            }
            return (i, g) => {
                const d = he("lazy");
                return _(), m("div", kR, [t("div", UR, [Z(t("img", null, null, 512), [
                    [d, e.product.productImg]
                ])]), t("div", MR, [t("div", TR, a(e.product.productName), 1), t("div", QR, a(e.product.integral), 1), t("button", {
                    onClick: A
                }, a(i.$t("exchange")), 1)])])
            }
        }
    });
const OR = ee(VR, [
        ["__scopeId", "data-v-bface71e"]
    ]),
    PR = {
        class: "treasure__container__treasure-item"
    },
    FR = {
        class: "treasure__container__treasure-item__header"
    },
    xR = {
        class: "treasure__container__treasure-item__footer"
    },
    NR = {
        class: "treasure__container__treasure-item__footer-title"
    },
    HR = {
        class: "treasure__container__treasure-item__footer-progressTitle"
    },
    YR = {
        class: "treasure__container__treasure-item__footer-progressDetails"
    },
    WR = {
        class: "treasure__container__treasure-item__footer-ending"
    },
    JR = {
        class: "treasure__container__treasure-item__footer-cost"
    },
    KR = $({
        __name: "Treasure",
        props: {
            item: {}
        },
        setup(e) {
            const s = e,
                {
                    t: n
                } = ie(),
                o = oe();
            ut(), D(0);
            const A = M(() => [s.item.img_Five, s.item.img_Four, s.item.img_One, s.item.img_Three, s.item.img_Two].filter(Boolean)),
                i = (u, p) => u == 0 && p == 0 ? 100 : u / p * 100;

            function g(u, p) {
                if (p === 1) switch (u) {
                    case "2":
                        return "linear-gradient(276deg, #2199DF 0%, #0AB6A8 100%)";
                    case "1":
                        return "#FA2367";
                    case "0":
                        return "linear-gradient(270deg, #9FAAD2 18.36%, #A3B0DE 89.84%, #D5E1FF 96.48%, #7884B0 100%)"
                } else switch (u) {
                    case "1":
                        return "linear-gradient(90deg, #FF9C3A -3.24%, #FFE55C 4.63%, #FFB936 13.43%, #FFF962 76.75%)";
                    default:
                        return "linear-gradient(90deg, #FF9C3A -3.24%, #FFE55C 4.63%, #FFB936 13.43%, #FFF962 76.75%)"
                }
            }

            function d(u) {
                switch (u) {
                    case "2":
                        return n("about2start");
                    case "1":
                        return n("ongoing");
                    case "0":
                        return n("ended")
                }
            }

            function v() {
                const u = s.item;
                o.push({
                    name: "PointMall-LotteryDetail",
                    query: {
                        pointsLotteryID: u.pointsLotteryID
                    }
                })
            }
            return (u, p) => {
                const w = N("van-progress"),
                    b = he("lazy");
                return _(), m("div", PR, [t("div", FR, [t("div", {
                    style: Ve({
                        background: g(u.item.status, 2)
                    }),
                    class: "treasure-state"
                }, [t("span", {
                    style: Ve({
                        background: g(u.item.status, 1)
                    })
                }, a(d(u.item.status)), 5)], 4), Z(t("img", null, null, 512), [
                    [b, A.value[0]]
                ])]), t("div", xR, [t("h1", NR, a(u.item.name), 1), t("div", HR, [t("span", null, a(u.$t("progress")), 1), t("span", null, a(u.$t("totalActivity")), 1)]), U(w, {
                    "stroke-width": "8px",
                    color: "linear-gradient(180deg, #F7D349 -0.23%, #F2D549 99.78%)",
                    percentage: i(u.item.redeemedNumber, u.item.totalNumber),
                    "show-pivot": !1
                }, null, 8, ["percentage"]), t("div", YR, [t("span", null, a(i(u.item.redeemedNumber, u.item.totalNumber).toFixed(2)) + "%", 1), t("div", null, [t("span", null, a(u.item.totalNumber), 1), j(a(u.$t("sheets")), 1)])]), t("div", WR, [t("span", null, a(u.$t("requiredBeforeEnd")), 1), t("div", null, [t("span", null, a(u.item.totalNumber - u.item.redeemedNumber), 1), j(" " + a(u.$t("sheets")), 1)])]), t("div", JR, [t("span", null, a(u.$t("priceOfUnits")), 1), t("div", null, [Z(t("img", null, null, 512), [
                    [b, l(z)("activity/PointMall", "redDiamondSm")]
                ]), j(" " + a(u.item.unit) + ".00 ", 1)])]), t("div", {
                    class: "treasure__container__treasure-item__footer-button",
                    onClick: v
                }, a(u.$t("viewDetail")), 1)])])
            }
        }
    });
const Js = ee(KR, [
        ["__scopeId", "data-v-333c20b7"]
    ]),
    XR = {
        class: "pointMall__container-products"
    },
    jR = ["onClick"],
    zR = {
        class: "pointMall__container-products-point"
    },
    ZR = {
        class: "pointMall__container-products__content"
    },
    qR = {
        key: 0
    },
    $R = {
        key: 1
    },
    eE = $({
        __name: "index",
        setup(e) {
            const s = D(),
                n = oe(),
                {
                    listRef: o,
                    list: A
                } = et(),
                i = D(1),
                {
                    t: g
                } = ie(),
                d = D([]),
                v = D([]),
                u = D({
                    typeId: i.value,
                    pageNo: 1,
                    pageSize: 10
                }),
                p = D();

            function w() {
                n.push({
                    name: `${String(n.currentRoute.value.name)}-LotteryActivity`
                })
            }

            function b() {
                const B = i.value === "1000" ? "MyLottery" : "MyOrders";
                n.push({
                    name: `${String(n.currentRoute.value.name)}-${B}`
                })
            }

            function C(B) {
                i.value = B, B != 1e3 && (u.value.pageNo = 1, u.value.typeId = parseInt(B), v.value = [], s.value.resetRefresh())
            }
            async function R() {
                var h;
                const B = await O(g4());
                if (B) {
                    const y = (h = B.data) == null ? void 0 : h.productTypeList;
                    d.value = y.map(f => f.typeID == "1000" ? Object.assign(f, {
                        typeName: g("MyTreasure")
                    }) : f), d.value.length > 0 && (i.value = d.value[0].typeID)
                }
            }
            return le(async () => {
                await R()
            }), (B, h) => (_(), m(Y, null, [t("div", XR, [t("div", {
                class: "pointMall__container-products__tabs",
                ref_key: "productTabsRef",
                ref: p
            }, [(_(!0), m(Y, null, te(d.value, y => (_(), m("div", {
                key: y.typeID,
                class: ae({
                    active: i.value === y.typeID
                }),
                onClick: f => C(y.typeID)
            }, a(y.typeName), 11, jR))), 128))], 512), i.value === "1000" ? (_(), ce(Oe, {
                key: 0,
                distance: 300,
                api: l(Ts),
                list: l(A),
                "onUpdate:list": h[0] || (h[0] = y => Ie(A) ? A.value = y : null),
                "page-query": {
                    pageNo: 1,
                    status: 1,
                    pageSize: 5
                },
                isAutoLoad: !0,
                showNoM: !1,
                ref_key: "listRef",
                ref: o
            }, {
                content: X(() => [t("div", zR, [(_(!0), m(Y, null, te(l(A), y => (_(), ce(Js, {
                    item: y,
                    key: y.pointsLotteryID
                }, null, 8, ["item"]))), 128))]), Z(t("div", {
                    class: "pointMall__container-products-all",
                    onClick: w
                }, a(B.$t("allActivity")), 513), [
                    [mn, l(A).length]
                ])]),
                _: 1
            }, 8, ["api", "list"])) : (_(), ce(Oe, {
                key: 1,
                distance: 300,
                api: l(c4),
                list: v.value,
                "onUpdate:list": h[1] || (h[1] = y => v.value = y),
                "page-query": u.value,
                "onUpdate:pageQuery": h[2] || (h[2] = y => u.value = y),
                isAutoLoad: !0,
                ref_key: "productRef",
                ref: s
            }, {
                content: X(() => [t("div", ZR, [(_(!0), m(Y, null, te(v.value, (y, f) => (_(), ce(OR, {
                    key: f,
                    product: y
                }, null, 8, ["product"]))), 128))])]),
                _: 1
            }, 8, ["api", "list", "page-query"]))]), t("div", {
                class: "pointMall__container-cart",
                onClick: b
            }, [i.value === "1000" ? (_(), m("div", qR, [t("span", null, a(B.$t("MyTreasure")), 1)])) : (_(), m("div", $R, [t("span", null, a(B.$t("myOrder")), 1)]))])], 64))
        }
    });
const tE = ee(eE, [
        ["__scopeId", "data-v-97bd5dcf"]
    ]),
    sE = {
        class: "pointMall__container-info"
    },
    nE = $({
        __name: "index",
        setup(e) {
            const s = oe();

            function n(o) {
                s.push({
                    name: `${String(s.currentRoute.value.name)}-${o}`
                })
            }
            return (o, A) => (_(), m("div", sE, [t("div", {
                class: "pointMall__container-info__left",
                onClick: A[0] || (A[0] = i => n("Rules"))
            }, [t("div", null, a(o.$t("pointsRule")), 1)]), t("div", {
                class: "pointMall__container-info__right",
                onClick: A[1] || (A[1] = i => n("Record"))
            }, [t("div", null, a(o.$t("pointsRecord")), 1)])]))
        }
    });
const aE = ee(nE, [
        ["__scopeId", "data-v-09a16823"]
    ]),
    oE = {
        class: "pointMall__container"
    },
    AE = {
        class: "header"
    },
    iE = $({
        __name: "index",
        setup(e) {
            const s = ve(),
                n = oe();

            function o() {
                n.go(-1)
            }
            return (A, i) => {
                const g = N("NavBar");
                return _(), m("div", oE, [U(g, {
                    title: A.$t("pointsMall"),
                    ifleftTitle: !0,
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: o
                }, null, 8, ["title"]), t("div", AE, [t("h1", null, a(l(s).getUserInfo.integral), 1), t("span", null, a(A.$t("avaliablePoints")), 1), U(SR)]), U(aE), U(tE)])
            }
        }
    });
const lE = ee(iE, [
        ["__scopeId", "data-v-c994d4a4"]
    ]),
    rE = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: lE
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    cE = "/assets/png/bg-368559ba.png",
    gE = "/assets/png/zp-624cd5c8.png",
    dE = "/assets/png/btn-779fac98.png",
    Ks = e => (Re("data-v-3792a323"), e = e(), Ee(), e),
    pE = {
        class: "turntable-page"
    },
    _E = Ks(() => t("div", {
        class: "turntable-page-header"
    }, [t("img", {
        src: cE,
        alt: ""
    })], -1)),
    uE = {
        class: "turntable-wrap"
    },
    vE = {
        class: "turntable-rule"
    },
    mE = He('<svg width="702" height="59" viewBox="0 0 702 59" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3792a323><path d="M44 3.65333V0H658V3.65333C651 3.65333 626.65 3.65333 619 7.76333C610.5 12.33 606 15.5267 595 36.0767C585.492 53.8395 569.5 58.6056 564 58.91H139C122 58.91 109.5 42.47 106.5 36.99C103.5 31.51 100.005 23.2948 89.5 12.7867C79 2.28333 54 3.65333 44 3.65333Z" fill="url(#paint0_linear_8417_735)" data-v-3792a323></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C7.16344 0 0 7.16346 0 16V46.58L4 44.9099V17.6534C4 9.92137 10.268 3.65335 18 3.65335H49.1714L51 0H16Z" fill="#FFBFA0" data-v-3792a323></path><path fill-rule="evenodd" clip-rule="evenodd" d="M686 0C694.837 0 702 7.16346 702 16V46.58L698 44.9099V17.6534C698 9.92137 691.732 3.65335 684 3.65335H652.829L651 0H686Z" fill="#FFBFA0" data-v-3792a323></path><circle cx="22" cy="26.9199" r="5" fill="#FFBFA0" data-v-3792a323></circle><circle cx="5" cy="5" r="5" transform="matrix(-1 0 0 1 675 21.9199)" fill="#FFBFA0" data-v-3792a323></circle><defs data-v-3792a323><linearGradient id="paint0_linear_8417_735" x1="337" y1="59.3667" x2="337" y2="-2.21296e-06" gradientUnits="userSpaceOnUse" data-v-3792a323><stop stop-color="#FB2C2D" data-v-3792a323></stop><stop offset="1" stop-color="#F95959" data-v-3792a323></stop></linearGradient></defs></svg>', 1),
    hE = {
        class: "turntable-item"
    },
    wE = {
        class: "label"
    },
    bE = {
        class: "wallet"
    },
    CE = He('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" data-v-3792a323><g clip-path="url(#clip0_8417_601)" data-v-3792a323><path d="M24.6778 22.687C22.0234 25.998 18.123 28 13.8922 28C7.2044 28 1.4602 23.0048 0 16.0776L2.779 15.4C3.9466 20.937 8.5428 24.934 13.8922 24.934C17.3726 24.934 20.5716 23.24 22.6982 20.4596L19.6 16.975H28V26.425L24.6778 22.687ZM3.3222 5.313C5.9766 2.002 9.877 0 14.1078 0C20.7956 0 26.5398 4.9952 28 11.9224L25.221 12.6C24.0534 7.063 19.4572 3.066 14.1078 3.066C10.6274 3.066 7.4284 4.76 5.3018 7.5404L8.4 11.025H0V1.575L3.3222 5.313Z" fill="white" data-v-3792a323></path></g><defs data-v-3792a323><clipPath id="clip0_8417_601" data-v-3792a323><rect width="28" height="28" fill="white" data-v-3792a323></rect></clipPath></defs></svg>', 1),
    yE = [CE],
    fE = {
        class: "turntable-item"
    },
    BE = {
        class: "label"
    },
    RE = {
        class: "count"
    },
    EE = {
        class: "count-progress"
    },
    DE = {
        class: "turntable-main"
    },
    IE = {
        class: "turntable-entry"
    },
    SE = He('<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3792a323><path opacity="0.3" d="M77.8132 7.28571L82.0769 11.5714L86.3407 7.28571L82.0769 3L77.8132 7.28571ZM0 42.6429L3.1978 45.8571L6.3956 42.6429L3.1978 39.4286L0 42.6429ZM88.6044 59.7857L91.8022 63L95 59.7857L91.8022 56.5714L88.6044 59.7857Z" fill="#F90089" data-v-3792a323></path><path fill-rule="evenodd" clip-rule="evenodd" d="M61.5714 5H23V82H83V26.3889L61.5714 5Z" fill="#F90089" data-v-3792a323></path><path d="M83 26.5H62L61.5 5L83 26.5Z" fill="#F90089" data-v-3792a323></path><path d="M33 22H51V27H33V22Z" fill="white" data-v-3792a323></path><path d="M72 35H67V39H72V35Z" fill="white" data-v-3792a323></path><path d="M33 35H63V39H33V35Z" fill="white" data-v-3792a323></path><path d="M33 45H63V49H33V45Z" fill="white" data-v-3792a323></path><path d="M33 55H63V59H33V55Z" fill="white" data-v-3792a323></path><path d="M33 64H63V68H33V64Z" fill="white" data-v-3792a323></path><path d="M67 45H72V49H67V45Z" fill="white" data-v-3792a323></path><path d="M72 55H67V59H72V55Z" fill="white" data-v-3792a323></path><path d="M67 64H72V68H67V64Z" fill="white" data-v-3792a323></path><path opacity="0.3" d="M14 91V14H22.5714V82.4444H74V91H14Z" fill="#F90089" data-v-3792a323></path></svg>', 1),
    LE = He('<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3792a323><path fill-rule="evenodd" clip-rule="evenodd" d="M8 8H88V88H76.5714L68 73L59.4286 88H36.5714L28 73L19.4286 88H8V8Z" fill="#3B52FF" data-v-3792a323></path><path d="M23 21H29V26H23V21Z" fill="white" data-v-3792a323></path><path d="M73 21H35V26H73V21Z" fill="white" data-v-3792a323></path><path d="M73 37H35V42H73V37Z" fill="white" data-v-3792a323></path><path d="M63 53H35V58H63V53Z" fill="white" data-v-3792a323></path><path d="M29 37H23V42H29V37Z" fill="white" data-v-3792a323></path><path d="M23 53H29V58H23V53Z" fill="white" data-v-3792a323></path></svg>', 1),
    GE = Ks(() => t("svg", {
        width: "96",
        height: "96",
        viewBox: "0 0 96 96",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [t("circle", {
        cx: "72",
        cy: "75",
        r: "14",
        fill: "white"
    }), t("path", {
        d: "M72 56.2C76.48 56.2 80.64 57.8 83.84 60.36V27.08C83.84 25.48 82.88 22.92 81.6 21.64L67.52 7.24C66.24 5.96 64 5 62.08 5H14.4C10.88 5 8 7.88 8 11.4V81.16C8 84.68 10.88 87.56 14.4 87.56H57.6C54.72 84.36 52.8 79.88 52.8 75.08C52.8 64.84 61.44 56.2 72 56.2ZM60.48 13C60.48 11.08 61.44 10.76 62.72 12.04L77.12 26.44C78.4 27.72 78.08 28.68 76.16 28.68H66.88C63.36 28.68 60.48 25.8 60.48 22.28V13ZM20.16 20.68H48.64C49.92 20.68 50.88 21.64 50.88 22.92C50.88 24.2 49.92 25.16 48.64 25.16H20.16C18.88 25.16 17.92 24.2 17.92 22.92C17.92 21.64 18.88 20.68 20.16 20.68ZM20.16 33.48H72.32C73.6 33.48 74.56 34.44 74.56 35.72C74.56 37 73.6 37.96 72.32 37.96H20.16C18.88 37.96 17.92 37 17.92 35.72C17.92 34.44 18.88 33.48 20.16 33.48ZM17.92 48.52C17.92 47.24 18.88 46.28 20.16 46.28H58.24C59.52 46.28 60.48 47.24 60.48 48.52C60.48 49.8 59.52 50.76 58.24 50.76H20.16C18.88 50.76 17.92 49.8 17.92 48.52ZM72 59.4C63.04 59.4 56 66.44 56 75.4C56 84.36 63.04 91.4 72 91.4C80.96 91.4 88 84.36 88 75.4C88 66.44 80.96 59.4 72 59.4ZM72 87.88C64.96 87.88 59.2 82.12 59.2 75.08C59.2 68.04 64.96 62.28 72 62.28C79.04 62.28 84.8 68.04 84.8 75.08C84.8 82.44 79.04 87.88 72 87.88ZM80.64 71.56L76.16 70.92L73.92 66.76C73.28 65.48 71.36 65.48 70.72 66.76L68.48 70.92L64 71.56C63.36 71.56 62.72 72.2 62.4 72.84C62.08 73.48 62.4 74.12 63.04 74.44L66.56 77.64L65.6 82.44C65.6 83.08 65.92 83.72 66.24 84.04C66.56 84.36 67.52 84.68 68.16 84.36L72.32 82.12L76.48 84.36C76.8 84.68 77.12 84.68 77.12 84.68C77.76 84.68 77.76 84.36 78.08 84.36C78.72 83.72 78.72 83.4 78.72 82.76L78.4 78.28L81.92 75.08C82.24 74.44 82.24 73.48 82.24 72.84C81.6 72.2 81.28 71.88 80.64 71.56Z",
        fill: "#FB2936"
    }), t("path", {
        d: "M60.4799 13C60.4799 11.08 61.4399 10.76 62.7199 12.04L77.1199 26.44C78.3999 27.72 78.0799 28.68 76.1599 28.68H66.8799C63.3599 28.68 60.4799 25.8 60.4799 22.28V13ZM20.1599 20.68H48.6399C49.9199 20.68 50.8799 21.64 50.8799 22.92C50.8799 24.2 49.9199 25.16 48.6399 25.16H20.1599C18.8799 25.16 17.9199 24.2 17.9199 22.92C17.9199 21.64 18.8799 20.68 20.1599 20.68ZM20.1599 33.48H72.3199C73.5999 33.48 74.5599 34.44 74.5599 35.72C74.5599 37 73.5999 37.96 72.3199 37.96H20.1599C18.8799 37.96 17.9199 37 17.9199 35.72C17.9199 34.44 18.8799 33.48 20.1599 33.48ZM17.9199 48.52C17.9199 47.24 18.8799 46.28 20.1599 46.28H58.2399C59.5199 46.28 60.4799 47.24 60.4799 48.52C60.4799 49.8 59.5199 50.76 58.2399 50.76H20.1599C18.8799 50.76 17.9199 49.8 17.9199 48.52Z",
        fill: "white"
    })], -1)),
    kE = {
        class: "turntable-title"
    },
    UE = He('<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3792a323><path d="M41 10H13V44H41V10Z" fill="#F0B90B" stroke="#F0B90B" stroke-width="2" stroke-linejoin="round" data-v-3792a323></path><path d="M35 10V4H8C7.44772 4 7 4.44772 7 5V38H13" stroke="#F0B90B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-3792a323></path><path d="M21 22H33" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-3792a323></path><path d="M21 30H33" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-3792a323></path></svg>', 1),
    ME = {
        class: "turntable-table"
    },
    TE = {
        class: "turntable-table-titlebox"
    },
    QE = {
        class: "turntable-table-title"
    },
    VE = {
        class: "turntable-table-title"
    },
    OE = {
        class: "turntable-table-title"
    },
    PE = {
        key: 0,
        class: "rotateNum"
    },
    FE = {
        key: 1,
        class: "rotateNum"
    },
    xE = {
        style: {
            "text-align": "center"
        }
    },
    NE = $({
        __name: "index",
        setup(e) {
            const s = oe(),
                {
                    t: n
                } = ie(),
                {
                    getTurntabl: o,
                    store: A,
                    pull: i,
                    prizes: g,
                    recordQuery: d,
                    getTurntablAmount: v,
                    onEnd: u,
                    onStart: p,
                    myLucky: w,
                    onClick: b
                } = Jt(),
                C = [{
                    padding: "0px",
                    imgs: [{
                        src: gE,
                        width: "100%",
                        height: "100%",
                        rotate: !0
                    }]
                }],
                R = [{
                    radius: "30%",
                    pointer: !0,
                    imgs: [{
                        src: dE,
                        top: -(204 / 4),
                        width: 158 / 2,
                        height: 204 / 2
                    }]
                }],
                B = {
                    1: n("amountReward"),
                    2: n("physicalReward")
                },
                h = async y => {
                    s.push({
                        name: y
                    })
                };
            return le(() => {
                o()
            }), (y, f) => {
                const Q = N("NavBar");
                return _(), m("div", pE, [U(Q, {
                    title: y.$t("activityTurntable"),
                    backgroundColor: "linear-gradient(90deg, #A227BD 0%, #FA2466 98.2%)",
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: l(b)
                }, null, 8, ["title", "onClickLeft"]), _E, t("div", uE, [t("div", vE, [t("h3", null, a(y.$t("code9101")), 1), mE]), t("div", hE, [t("span", wE, a(y.$t("depositMoney")), 1), t("div", bE, [t("span", null, a(l(Ae)(l(A).amount)), 1), t("span", {
                    class: "re",
                    onClick: f[0] || (f[0] = (...G) => l(v) && l(v)(...G))
                }, yE)])]), t("div", fE, [t("span", BE, a(y.$t("turntableCount")), 1), t("div", RE, [t("span", EE, a(l(A).rotateCount), 1), j("/" + a(l(A).count), 1)])]), t("div", DE, [U(l(hn), {
                    ref_key: "myLucky",
                    ref: w,
                    onStart: l(p),
                    onEnd: l(u),
                    prizes: l(g),
                    width: 350,
                    height: 350,
                    buttons: R,
                    blocks: C,
                    defaultConfig: {
                        offsetDegree: -20,
                        accelerationTime: 1e3
                    },
                    defaultStyle: {
                        lineHeight: 15
                    }
                }, null, 8, ["onStart", "onEnd", "prizes"])]), t("ul", IE, [t("li", {
                    class: "turntable-entry-item",
                    onClick: f[1] || (f[1] = G => h("Turntable-Introduce"))
                }, [SE, t("p", null, a(y.$t("activityIntroduce")), 1)]), t("li", {
                    class: "turntable-entry-item",
                    onClick: f[2] || (f[2] = G => h("Turntable-Detail"))
                }, [LE, t("p", null, a(y.$t("eventDetails")), 1)]), t("li", {
                    class: "turntable-entry-item",
                    onClick: f[3] || (f[3] = G => h("Turntable-Rules"))
                }, [GE, t("p", null, a(y.$t("firstSaveRule")), 1)])]), t("div", kE, [UE, t("span", null, a(y.$t("record")), 1)]), t("div", ME, [t("div", TE, [t("div", QE, a(y.$t("turntableTime")), 1), t("div", VE, a(y.$t("winType")), 1), t("div", OE, a(y.$t("turntableWin")), 1)]), U(Oe, {
                    distance: 300,
                    api: l(q4),
                    list: l(A).turntableRecord,
                    "onUpdate:list": f[4] || (f[4] = G => l(A).turntableRecord = G),
                    "page-query": l(d),
                    "onUpdate:pageQuery": f[5] || (f[5] = G => Ie(d) ? d.value = G : null),
                    isAutoLoad: !0,
                    ref_key: "pull",
                    ref: i
                }, {
                    content: X(() => [t("ul", null, [(_(!0), m(Y, null, te(l(A).turntableRecord, (G, se) => (_(), m("li", {
                        key: se
                    }, [t("div", null, [t("p", null, a(G.drawTime), 1)]), t("div", null, a(B[G.rewardType]), 1), G.rewardType === 1 ? (_(), m("div", PE, a(l(Ae)(G.rewardAmount)), 1)) : (_(), m("div", FE, a(G.rewardSetting), 1))]))), 128))])]),
                    _: 1
                }, 8, ["api", "list", "page-query"])])]), U(ze, {
                    show: l(A).dialog,
                    "onUpdate:show": f[6] || (f[6] = G => l(A).dialog = G),
                    "img-url": "successfullyReceived",
                    onConfirm: f[7] || (f[7] = G => l(A).dialog = !1),
                    "show-cancel-btn": !1,
                    confirmText: y.$t("sure"),
                    title: y.$t("succTip1")
                }, {
                    title: X(() => {
                        var G, se, F;
                        return [t("div", xE, a(y.$t("turntableWinTip")) + " " + a(((G = l(A).result) == null ? void 0 : G.rewardType) === 1 ? l(Ae)((se = l(A).result) == null ? void 0 : se.rewardSetting) : (F = l(A).result) == null ? void 0 : F.rewardSetting), 1)]
                    }),
                    _: 1
                }, 8, ["show", "confirmText", "title"])])
            }
        }
    });
const HE = ee(NE, [
        ["__scopeId", "data-v-3792a323"]
    ]),
    YE = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: HE
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    WE = {
        class: "title"
    },
    JE = {
        class: "con"
    },
    KE = ["innerHTML"],
    XE = {
        class: "red"
    },
    jE = ["innerHTML"],
    zE = {
        class: "condition"
    },
    ZE = {
        key: 0
    },
    qE = {
        class: "green"
    },
    $E = {
        key: 1
    },
    e7 = {
        class: "red"
    },
    t7 = {
        key: 2
    },
    s7 = {
        class: "ranking"
    },
    n7 = {
        class: "top"
    },
    a7 = {
        class: "red"
    },
    o7 = $({
        __name: "rule",
        props: {
            data: {}
        },
        setup(e) {
            const {
                t: s
            } = ie(), n = D(["0"]), {
                type: o
            } = st();

            function A(i, g) {
                return i == g ? s("cpsTip20", [i]) : s("cpsTip21", [i, g])
            }
            return (i, g) => {
                const d = N("van-collapse-item"),
                    v = N("van-collapse");
                return _(), ce(v, {
                    modelValue: n.value,
                    "onUpdate:modelValue": g[0] || (g[0] = u => n.value = u),
                    class: "rule"
                }, {
                    default: X(() => [U(d, {
                        name: "1"
                    }, {
                        title: X(() => [t("div", WE, a(i.$t("cpsTip5")), 1)]),
                        default: X(() => [t("div", JE, [t("h1", null, [t("span", null, a(i.$t("cpsTip11")), 1)]), t("div", {
                            innerHTML: i.$t("cpsTip12", [i.data.vendorCode, i.data.startTime, i.data.endTime])
                        }, null, 8, KE), t("h1", null, [t("span", null, a(i.$t("awardAmount")), 1)]), t("div", null, [j(a(i.$t("cpsTip13")), 1), t("span", XE, a(l(Ae)(i.data.sumBonus || 0)), 1)]), t("h1", null, [t("span", null, a(i.$t("cpsTip14")), 1)]), t("div", null, [t("div", {
                            innerHTML: i.$t("cpsTip15", [i.data.vendorCode])
                        }, null, 8, jE), t("div", zE, [i.data.conditionsBetAmount > 0 ? (_(), m("p", ZE, [j(a(i.$t("betAmounts")) + " ", 1), t("span", qE, a(l(Ae)(i.data.conditionsBetAmount || 0)), 1)])) : K("", !0), i.data.conditionsRechargeAmount > 0 ? (_(), m("p", $E, [j(a(i.$t("rechageAmount")) + " ", 1), t("span", e7, a(l(Ae)(i.data.conditionsRechargeAmount || 0)), 1)])) : K("", !0), i.data.conditionsBindType ? (_(), m("p", t7, [j(a(i.$t("toBind")) + " ", 1), t("span", null, a(l(o)[i.data.conditionsBindType]), 1)])) : K("", !0), i.data.conditionsBetAmount == 0 && i.data.conditionsRechargeAmount == 0 && !i.data.conditionsBindType ? (_(), m(Y, {
                            key: 3
                        }, [j(a(i.$t("cpsTip10")), 1)], 64)) : K("", !0)])]), t("h1", null, [t("span", null, a(i.$t("binguoPaimin")), 1)]), t("div", s7, [t("div", n7, [t("span", null, a(i.$t("binguoPaimin")), 1), t("span", null, a(i.$t("k3WarningTip4")), 1)]), (_(!0), m(Y, null, te(i.data.rankingAwardsList, (u, p) => (_(), m("div", {
                            class: "info",
                            key: p
                        }, [t("span", null, a(A(u.startRanking, u.endRanking)), 1), t("span", a7, a(l(Ae)(u.awardsAmount || 0)), 1)]))), 128)), i.data.rankingAwardsList.length == 0 ? (_(), ce(ke, {
                            key: 0
                        })) : K("", !0)]), t("h1", null, [t("span", null, a(i.$t("cpsTip16")), 1)]), t("div", null, [t("p", null, a(i.$t("cpsTip17")), 1), t("p", null, a(i.$t("cpsTip18")), 1)]), t("h1", null, [t("span", null, a(i.$t("cpsTip19")), 1)]), t("p", null, [t("span", null, a(i.data.vendorCode), 1)])])]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["modelValue"])
            }
        }
    });
const A7 = ee(o7, [
        ["__scopeId", "data-v-58f12cc7"]
    ]),
    i7 = {
        class: "game"
    },
    l7 = {
        class: "items"
    },
    r7 = ["onClick"],
    c7 = $({
        __name: "game",
        props: {
            data: {}
        },
        setup(e) {
            const {
                onItemClick: s
            } = Mf();
            return (n, o) => {
                const A = he("lazy");
                return _(), m("div", i7, [t("h1", null, a(n.$t("cpsTip22")), 1), t("div", l7, [(_(!0), m(Y, null, te(n.data, i => (_(), m("div", {
                    class: "item",
                    key: i.gameID,
                    onClick: g => l(s)(i)
                }, [Z(t("img", null, null, 512), [
                    [A, i.img]
                ])], 8, r7))), 128)), n.data.length == 0 ? (_(), ce(ke, {
                    key: 0
                })) : K("", !0)])])
            }
        }
    });
const g7 = ee(c7, [
        ["__scopeId", "data-v-0b75b71d"]
    ]),
    mt = e => (Re("data-v-b967bb6f"), e = e(), Ee(), e),
    d7 = {
        class: "ChampionshipDetail"
    },
    p7 = {
        class: "ranking"
    },
    _7 = {
        class: "title"
    },
    u7 = {
        class: "amount"
    },
    v7 = mt(() => t("span", null, "--", -1)),
    m7 = mt(() => t("span", null, "--", -1)),
    h7 = mt(() => t("span", null, "--", -1)),
    w7 = {
        class: "rankingList"
    },
    b7 = {
        class: "title"
    },
    C7 = mt(() => t("span", null, "TOP", -1)),
    y7 = {
        key: 0,
        class: "txt"
    },
    f7 = {
        class: "refresh"
    },
    B7 = $({
        __name: "index",
        setup(e) {
            const {
                tabList: s,
                getChampionTaskDetailV: n,
                championTaskDetailVO: o,
                getTop10UserList: A,
                top10UserListVO: i,
                thirdGameListVO: g
            } = st(), d = oe(), v = M(() => {
                var R;
                return o.value ? (R = s.find(B => B.key == o.value.state)) == null ? void 0 : R.title : ""
            }), u = D(), p = D(!1), w = D(null);

            function b() {
                n(u.value)
            }
            Ce(p, R => {
                p.value && b()
            });
            const C = () => {
                A(u.value)
            };
            return le(() => {
                u.value = Number(d.currentRoute.value.query.championId) || 0, u.value != 0 && (b(), C(), w.value = setInterval(C, 10 * 60 * 1e3))
            }), Qt(() => {
                clearInterval(w.value)
            }), (R, B) => {
                const h = N("NavBar");
                return _(), m("div", d7, [U(h, {
                    title: v.value,
                    "left-arrow": "",
                    onClickLeft: B[0] || (B[0] = () => l(d).back())
                }, null, 8, ["title"]), JSON.stringify(l(o)) !== "{}" ? (_(), m(Y, {
                    key: 0
                }, [U(Kt, {
                    itemD: l(o),
                    state: l(o).state,
                    isRefresh: p.value,
                    "onUpdate:isRefresh": B[1] || (B[1] = y => p.value = y)
                }, null, 8, ["itemD", "state", "isRefresh"]), t("div", p7, [t("div", _7, [t("span", null, a(R.$t("binguoPaimin")), 1), t("span", null, a(R.$t("betAmounts")), 1), t("span", null, a(R.$t("k3WarningTip4")), 1)]), t("div", u7, [l(o) && l(o).userJoinInfo ? (_(), m(Y, {
                    key: 0
                }, [t("span", null, a(l(o).userJoinInfo.ranking), 1), t("span", null, a(l(Ae)(l(o).userJoinInfo.sumBetAmount || 0)), 1), t("span", null, a(l(Ae)(l(o).userJoinInfo.awardsAmount || 0)), 1)], 64)) : (_(), m(Y, {
                    key: 1
                }, [v7, m7, h7], 64))])])], 64)) : K("", !0), t("div", w7, [t("div", b7, [C7, t("span", null, a(R.$t("account")), 1), t("span", null, a(R.$t("betAmounts")), 1), t("span", null, a(R.$t("k3WarningTip4")), 1)]), (_(!0), m(Y, null, te(l(i), (y, f) => (_(), m("div", {
                    class: "info",
                    key: f
                }, [
                    [1, 2, 3].includes(y.ranking) ? (_(), m("span", {
                        key: 1,
                        class: ae(`top${y.ranking}`)
                    }, null, 2)) : (_(), m("span", y7, a(y.ranking), 1)), t("span", null, a(y.userName), 1), t("span", null, a(l(Ae)(y.sumBetAmount || 0)), 1), t("span", null, a(l(Ae)(y.awardsAmount || 0)), 1)
                ]))), 128)), t("div", f7, a(R.$t("cpsTip28")), 1), l(i).length == 0 ? (_(), ce(ke, {
                    key: 0
                })) : K("", !0)]), U(A7, {
                    data: l(o)
                }, null, 8, ["data"]), U(g7, {
                    data: l(g)
                }, null, 8, ["data"])])
            }
        }
    });
const R7 = ee(B7, [
        ["__scopeId", "data-v-b967bb6f"]
    ]),
    E7 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: R7
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    D7 = {
        class: "checkInRecord-container content"
    },
    I7 = {
        class: "dailySignInRecord__container-wrapper"
    },
    S7 = {
        class: "dailySignInRecord__container-wrapper__content-left"
    },
    L7 = {
        class: "dailySignInRecord__container-wrapper__content-right"
    },
    G7 = {
        alt: ""
    },
    k7 = $({
        __name: "index",
        setup(e) {
            const s = oe(),
                n = D({
                    pageSize: 20
                }),
                o = D({
                    list: [],
                    pageNo: 0,
                    totalPage: 0,
                    totalCount: 0
                });

            function A() {
                s.back()
            }
            return le(async () => {}), (i, g) => {
                const d = N("NavBar"),
                    v = he("lazy");
                return _(), m("div", D7, [U(d, {
                    title: i.$t("checkInRecord"),
                    "left-arrow": "",
                    onClickLeft: A
                }, null, 8, ["title"]), U(Oe, {
                    distance: 300,
                    api: l(r4),
                    list: o.value.list,
                    "onUpdate:list": g[0] || (g[0] = u => o.value.list = u),
                    "page-query": n.value,
                    "onUpdate:pageQuery": g[1] || (g[1] = u => n.value = u),
                    isAutoLoad: !0
                }, {
                    content: X(() => [t("div", I7, [(_(!0), m(Y, null, te(o.value.list, u => (_(), m("div", {
                        class: "dailySignInRecord__container-wrapper__content",
                        key: u.markDayTime
                    }, [t("div", S7, [t("h1", null, a(i.$t("continuousCheckedIn")) + a(u.continuousDayContinue) + a(i.$t("days")), 1), t("span", null, a(u.markDayTime), 1)]), t("div", L7, [Z(t("img", G7, null, 512), [
                        [v, l(z)("activity/DailySignIn", "gold")]
                    ]), t("span", null, a(u.amount), 1)])]))), 128))])]),
                    _: 1
                }, 8, ["api", "list", "page-query"])])
            }
        }
    });
const U7 = ee(k7, [
        ["__scopeId", "data-v-f72db030"]
    ]),
    M7 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: U7
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    T7 = {
        class: "dailySignInRules__container"
    },
    Q7 = {
        class: "dailySignInRules__container-hero"
    },
    V7 = {
        class: "dailySignInRules__container-hero__wrapper"
    },
    O7 = {
        class: "dailySignInRules__container-hero__wrapper-titlebox"
    },
    P7 = {
        class: "dailySignInRules__container-hero__wrapper-title"
    },
    F7 = {
        class: "dailySignInRules__container-hero__wrapper-title"
    },
    x7 = {
        class: "dailySignInRules__container-hero__wrapper-title"
    },
    N7 = {
        class: "dailySignInRules__container-footer"
    },
    H7 = $({
        __name: "index",
        setup(e) {
            const s = oe(),
                o = ve().getUserInfo,
                A = D({}),
                i = D([]);

            function g() {
                s.go(-1)
            }
            return le(async () => {
                const d = await O(Us({
                    uid: o.userId,
                    sign: o.sign
                }));
                i.value = d.data.signInRechargesList, A.value = d.data.signIn
            }), (d, v) => {
                const u = N("NavBar");
                return _(), m("div", T7, [U(u, {
                    title: d.$t("playRules"),
                    "left-arrow": "",
                    onClickLeft: g
                }, null, 8, ["title"]), t("div", Q7, [t("div", V7, [t("div", O7, [t("div", P7, a(d.$t("ruleSignIn")), 1), t("div", F7, a(d.$t("ruleAcount")), 1), t("div", x7, a(d.$t("ruleBonus")), 1)]), t("ul", null, [(_(!0), m(Y, null, te(i.value, (p, w) => (_(), m("li", {
                    key: w
                }, [t("div", null, a(p.day) + a(d.$t("days")), 1), t("div", null, a(l(Ae)(p.amount)), 1), t("div", null, a(l(Ae)(p.bouns)), 1)]))), 128))])])]), t("div", N7, [t("ul", null, [t("li", null, "1. " + a(d.$t("desc1")) + ";", 1), t("li", null, "2. " + a(d.$t("desc2")) + ";", 1), t("li", null, "3. " + a(d.$t("desc3")) + ";", 1), t("li", null, "4. " + a(d.$t("desc4")) + ";", 1), t("li", null, "5. " + a(d.$t("desc5")) + ";", 1), t("li", null, "6. " + a(d.$t("desc6")) + ";", 1)])])])
            }
        }
    });
const Y7 = ee(H7, [
        ["__scopeId", "data-v-3007ed75"]
    ]),
    W7 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Y7
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    J7 = {
        class: "task-record-container"
    },
    K7 = {
        class: "head"
    },
    X7 = {
        class: "record-panel van-clearfix"
    },
    j7 = {
        class: "amount"
    },
    z7 = {
        class: "markRed"
    },
    Z7 = $({
        __name: "index",
        setup(e) {
            const {
                t: s
            } = ie(), n = oe(), o = D([]), A = D(!1), i = D(!1), g = D(1), d = D(!1), v = D(1), u = M(() => d.value ? "" : s("noMoreThere")), p = async () => {
                let C;
                v.value == 1 ? C = await O(T4({
                    pageNo: g.value,
                    pageSize: 20
                })) : C = await O(H4({
                    pageNo: g.value,
                    pageSize: 20
                })), C ? (C.data.totalCount == 0 && (d.value = !0), C.data.totalPage <= g.value ? i.value = !0 : i.value = !1, C.data.list && (o.value.push(...C.data.list), o.value.sort((R, B) => B.createDate - R.createDate)), g.value++) : i.value = !0, A.value = !1
            }, w = () => {
                n.push({
                    name: "DailyTasks"
                })
            };

            function b(C) {
                v.value = C, g.value = 1, o.value.length = 0, p()
            }
            return (C, R) => {
                const B = N("NavBar"),
                    h = N("van-sticky"),
                    y = N("van-list");
                return _(), m("div", J7, [U(B, {
                    title: C.$t("titlePickUpRecord"),
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: w
                }, null, 8, ["title"]), U(h, {
                    "offset-top": 49
                }, {
                    default: X(() => [t("div", K7, [t("button", {
                        class: ae({
                            active: v.value == 1
                        }),
                        onClick: R[0] || (R[0] = f => b(1))
                    }, a(C.$t("actTip7")), 3), t("button", {
                        class: ae({
                            active: v.value == 2
                        }),
                        onClick: R[1] || (R[1] = f => b(2))
                    }, a(C.$t("actTip8")), 3)])]),
                    _: 1
                }), U(y, {
                    loading: A.value,
                    "onUpdate:loading": R[2] || (R[2] = f => A.value = f),
                    finished: i.value,
                    "finished-text": u.value,
                    onLoad: p
                }, {
                    default: X(() => [t("div", X7, [(_(!0), m(Y, null, te(o.value, f => (_(), m("div", {
                        class: "record-panel-item",
                        key: f.status
                    }, [t("div", null, [t("h1", null, a(v.value == 1 ? C.$t("actTip5") : C.$t("actTip6")), 1), t("h3", j7, a(l(Ae)(f.awardAmount)), 1)]), t("h2", null, [t("span", null, a(f.taskTitle), 1), t("span", z7, a(f.taskTarget + "/" + f.taskTarget), 1)]), t("div", null, [t("span", null, a(f.createDate), 1)])]))), 128))])]),
                    _: 1
                }, 8, ["loading", "finished", "finished-text"]), d.value ? (_(), ce(ke, {
                    key: 0
                })) : K("", !0)])
            }
        }
    });
const q7 = ee(Z7, [
        ["__scopeId", "data-v-96d83325"]
    ]),
    $7 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: q7
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    e8 = {
        class: "table-head"
    },
    t8 = {
        class: "table-container"
    },
    s8 = {
        class: "table-title"
    },
    n8 = {
        class: "table-content"
    },
    a8 = {
        key: 0,
        rowspan: "0"
    },
    o8 = {
        key: 0,
        class: "first-list-item space"
    },
    A8 = {
        class: "head"
    },
    i8 = {
        class: "title"
    },
    l8 = ["innerHTML"],
    r8 = $({
        __name: "RulesTable",
        props: {
            giftPackConfigList: {
                type: Array,
                default: []
            }
        },
        setup(e) {
            const s = n => n.length ? n[0] : {};
            return (n, o) => (_(!0), m(Y, null, te(e.giftPackConfigList, (A, i) => (_(), m("div", {
                key: i
            }, [t("div", e8, a(n.$t("registrationFullTip", [A.registerDays])), 1), t("table", t8, [t("thead", s8, [t("th", null, a(n.$t("activeObject")), 1), t("th", null, a(n.$t("totalValidBets")), 1), t("th", null, a(n.$t("giftBonus")), 1)]), t("tbody", null, [(_(!0), m(Y, null, te(A.configAwardList, (g, d) => (_(), m("tr", n8, [i >= d && d === 0 ? (_(), m("td", a8, a(n.$t("registrationDepositTip", [A.registerDays, A.grandTotalDeposit])), 1)) : K("", !0), t("td", null, a(l(Ae)(g.totalValidBet)) + "+", 1), t("td", null, a(l(Ae)(g.giveAwayBonus)), 1)]))), 256))])]), A.configAwardList.length ? (_(), m("div", o8, [t("div", A8, [t("div", i8, a(n.$t("forexample")) + ":", 1)]), t("div", {
                class: "description",
                innerHTML: n.$t("registrationExample", [A.registerDays, A.grandTotalDeposit, s(A.configAwardList).totalValidBet, s(A.configAwardList).giveAwayBonus])
            }, null, 8, l8)])) : K("", !0)]))), 128))
        }
    });
const c8 = ee(r8, [
        ["__scopeId", "data-v-8062d5af"]
    ]),
    g8 = e => (Re("data-v-05c2f7b7"), e = e(), Ee(), e),
    d8 = {
        class: "member-package-rule"
    },
    p8 = {
        key: 0,
        class: "first-list-item"
    },
    _8 = {
        class: "head"
    },
    u8 = {
        class: "title"
    },
    v8 = {
        class: "description"
    },
    m8 = g8(() => t("span", {
        class: "number"
    }, "24", -1)),
    h8 = ["innerHTML"],
    w8 = {
        class: "number"
    },
    b8 = {
        class: "member-package-rule-bonus"
    },
    C8 = {
        class: "member-package-rule-bonus-title"
    },
    y8 = $({
        __name: "index",
        setup(e) {
            const {
                t: s
            } = ie(), n = oe(), {
                getConfig: o,
                store: A,
                time: i,
                bonusLimit: g,
                firstDeposiSendBonust: d,
                giftPackConfigList: v
            } = xs();
            return le(() => {
                o()
            }), (u, p) => {
                const w = N("NavBar");
                return _(), m(Y, null, [U(w, {
                    title: l(s)("eventDetails"),
                    "left-arrow": "",
                    onClickLeft: p[0] || (p[0] = b => l(n).go(-1))
                }, null, 8, ["title"]), t("div", d8, [l(A).firstDepositConfig ? (_(), m("div", p8, [t("div", _8, [t("div", u8, a(l(s)("newMenberRule")), 1)]), t("div", v8, [j(a(l(s)("activityTime")), 1), t("span", null, a(l(i)), 1), j("，" + a(l(s)("newMemberDeposit")), 1), m8, j(a(l(s)("newMemberDepositTime")) + " ", 1), t("span", {
                    innerHTML: l(s)("platformBonus", [l(d)])
                }, null, 8, h8), j("，" + a(l(s)("bonusLimit")), 1), t("span", w8, a(l(Ae)(l(g))), 1), j("，" + a(l(s)("receiveTips")) + "。 ", 1)])])) : K("", !0), t("div", b8, [t("div", C8, a(l(s)("newMemberPlayGame")), 1), t("div", null, [U(c8, {
                    giftPackConfigList: l(v)
                }, null, 8, ["giftPackConfigList"])])])])], 64)
            }
        }
    });
const f8 = ee(y8, [
        ["__scopeId", "data-v-05c2f7b7"]
    ]),
    B8 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: f8
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    R8 = {
        class: "addAddress__container"
    },
    E8 = {
        class: "addAddress__container-warning"
    },
    D8 = {
        class: "address"
    },
    I8 = {
        class: "title"
    },
    S8 = ["placeholder"],
    L8 = $({
        __name: "index",
        setup(e) {
            const {
                t: s
            } = ie(), n = oe(), o = Ne();
            let A = ue({
                userName: "",
                phoneNumber: "",
                area: "66",
                address: ""
            });
            le(() => {
                Object.keys(o.query).length !== 0 && (o.query.type && o.query.type === "edit" && (A.userName = n.currentRoute.value.query.name, A.phoneNumber = n.currentRoute.value.query.phone, A.address = n.currentRoute.value.query.address, A.area = n.currentRoute.value.query.area), A.phoneNumber = A.phoneNumber.replace(A.area, ""))
            });
            const i = M(() => A.userName && A.phoneNumber && A.address);

            function g(p) {
                const w = /[\u4e00-\u9fa5]/g;
                return p.replace(w, "")
            }
            const d = [{
                title: s("recipientName"),
                icon: "lotteryReceiver",
                value: "userName",
                placeholder: s("plEnterrecipientName"),
                maxlength: 20
            }, {
                title: s("contactInfo"),
                icon: "lotteryContact",
                value: "phoneNumber",
                placeholder: s("plEntercontactInfo"),
                maxlength: 11
            }, {
                title: s("shippingAddr"),
                icon: "lotteryCity",
                value: "address",
                placeholder: s("plEnterCity"),
                maxlength: 150
            }];

            function v() {
                n.back()
            }
            async function u() {
                if (!i.value) return;
                const p = o.query.form,
                    w = o.query.type,
                    b = o.query.addressId,
                    C = {
                        phone: A.phoneNumber,
                        address: A.address,
                        name: A.userName,
                        area: A.area
                    };
                if (p === "lotteryPoint" && w === "edit") {
                    C.userAddressId = parseInt(b, 10), await O(f4(C)) && (be(s("savedSuccessfully")), n.back());
                    return
                } else if (p === "lotteryPoint" && w === "add") {
                    await O(B4(C)) && (be(s("savedSuccessfully")), n.back());
                    return
                }
                let R = { ...A,
                    area: A.area
                };
                await O(m4(R)) && (be(s("savedSuccessfully")), n.back())
            }
            return (p, w) => {
                const b = N("NavBar"),
                    C = N("van-field"),
                    R = he("lazy");
                return _(), m("div", R8, [U(b, {
                    title: l(s)("addAddr"),
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: v
                }, null, 8, ["title"]), t("div", E8, [t("h1", null, [Z(t("img", null, null, 512), [
                    [R, l(z)("activity/PointMall", "warning")]
                ]), j(" " + a(l(s)("kindTips")), 1)]), t("p", null, a(l(s)("descActivity3")), 1)]), t("div", D8, [(_(), m(Y, null, te(d, (B, h) => (_(), m(Y, {
                    key: h
                }, [t("div", I8, a(B.title), 1), h === 0 ? (_(), ce(C, {
                    key: 0,
                    class: "cg-dark text-field",
                    modelValue: l(A)[B.value],
                    "onUpdate:modelValue": y => l(A)[B.value] = y,
                    placeholder: B.placeholder,
                    maxlength: B.maxlength,
                    formatter: g
                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "maxlength"])) : h === 1 ? (_(), ce(C, {
                    key: 1,
                    class: "cg-dark text-field",
                    modelValue: l(A)[B.value],
                    "onUpdate:modelValue": y => l(A)[B.value] = y,
                    placeholder: B.placeholder,
                    maxlength: B.maxlength,
                    formatter: g
                }, {
                    label: X(() => [U(Mt, {
                        "label-width": "",
                        typeValue: l(A).area,
                        "onUpdate:typeValue": w[0] || (w[0] = y => l(A).area = y),
                        disabled: !0
                    }, null, 8, ["typeValue"])]),
                    _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "placeholder", "maxlength"])) : h === 2 ? Z((_(), m("textarea", {
                    key: 2,
                    "onUpdate:modelValue": w[1] || (w[1] = y => l(A).address = y),
                    class: "text-field textarea",
                    placeholder: l(s)("phEnterDetailedAddr"),
                    maxlength: "150"
                }, null, 8, S8)), [
                    [Gt, l(A).address]
                ]) : K("", !0)], 64))), 64))]), t("div", {
                    class: ae(["addAddress__container-saveBtn", {
                        disabled: !i.value
                    }]),
                    onClick: u
                }, a(l(s)("save")), 3)])
            }
        }
    });
const G8 = ee(L8, [
        ["__scopeId", "data-v-289d9106"]
    ]),
    k8 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: G8
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    U8 = {
        class: "lotteryActivity__container"
    },
    M8 = {
        class: "lotteryActivity__container-list"
    },
    T8 = $({
        __name: "index",
        setup(e) {
            const {
                t: s
            } = ie(), n = oe(), {
                listRef: o,
                list: A,
                pointTabs: i,
                pointTabActive: g,
                pointQuery: d,
                pointRest: v
            } = et();
            Ce(g, () => {
                v(), o.value.resetRefresh()
            });

            function u() {
                n.back()
            }
            return (p, w) => {
                const b = N("NavBar"),
                    C = N("van-tab"),
                    R = N("van-tabs");
                return _(), m("div", U8, [U(b, {
                    title: l(s)("sweepstakes"),
                    fixed: "",
                    "left-arrow": "",
                    onClickLeft: u
                }, null, 8, ["title"]), U(R, {
                    active: l(g),
                    "onUpdate:active": w[0] || (w[0] = B => Ie(g) ? g.value = B : null),
                    background: "#151E2B",
                    color: "#fff",
                    "line-width": "0",
                    "line-height": "0",
                    "title-active-color": "#fff",
                    "title-inactive-color": "#fff"
                }, {
                    default: X(() => [(_(!0), m(Y, null, te(l(i), B => (_(), ce(C, {
                        name: B.value,
                        title: B.label
                    }, null, 8, ["name", "title"]))), 256))]),
                    _: 1
                }, 8, ["active"]), U(Oe, {
                    distance: 300,
                    api: l(Ts),
                    list: l(A),
                    "onUpdate:list": w[1] || (w[1] = B => Ie(A) ? A.value = B : null),
                    "page-query": l(d),
                    "onUpdate:pageQuery": w[2] || (w[2] = B => Ie(d) ? d.value = B : null),
                    isAutoLoad: !0,
                    ref_key: "listRef",
                    ref: o
                }, {
                    content: X(() => [t("div", M8, [(_(!0), m(Y, null, te(l(A), B => (_(), ce(Js, {
                        item: B,
                        key: B.pointsLotteryID
                    }, null, 8, ["item"]))), 128))])]),
                    _: 1
                }, 8, ["api", "list", "page-query"])])
            }
        }
    });
const Q8 = ee(T8, [
        ["__scopeId", "data-v-65d8ab8b"]
    ]),
    V8 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Q8
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    at = e => (Re("data-v-e633cf1d"), e = e(), Ee(), e),
    O8 = {
        class: "lotteryDetail__container"
    },
    P8 = {
        key: 0,
        class: "lotteryDetail__container-item"
    },
    F8 = {
        class: "lotteryDetail__container-item__hero"
    },
    x8 = {
        class: "lotteryDetail__container-item__hero-img"
    },
    N8 = at(() => t("div", null, null, -1)),
    H8 = {
        class: "lotteryDetail__container-item__hero-title"
    },
    Y8 = {
        class: "lotteryDetail__container-item__hero-detail"
    },
    W8 = at(() => t("div", null, null, -1)),
    J8 = {
        class: "text-spacing"
    },
    K8 = at(() => t("div", null, null, -1)),
    X8 = {
        class: "lotteryDetail__container-item__hero-progress"
    },
    j8 = {
        key: 0,
        class: "lotteryDetail__container-item__hero-footer"
    },
    z8 = {
        class: "lotteryDetail__container-item__hero-footer__ending"
    },
    Z8 = {
        class: "lotteryDetail__container-item__hero-footer__cost"
    },
    q8 = {
        style: {
            color: "#F95959"
        }
    },
    $8 = {
        key: 1,
        class: "lotteryDetail__container-item__hero-footer"
    },
    eD = {
        class: "lotteryDetail__container-item__hero-footer__ending"
    },
    tD = {
        class: "lotteryDetail__container-item__hero-footer__cost"
    },
    sD = {
        class: "lotteryDetail__container-item__luckyNumber"
    },
    nD = {
        class: "lotteryDetail__container-item__luckyNumber-number"
    },
    aD = {
        key: 0
    },
    oD = {
        key: 1
    },
    AD = {
        class: "lotteryDetail__container-item__luckyNumber-text"
    },
    iD = {
        key: 0
    },
    lD = {
        key: 1
    },
    rD = {
        class: "lotteryDetail__container-item__footer"
    },
    cD = {
        class: "lotteryDetail__container-item__footer-tabBar"
    },
    gD = {
        class: "lotteryDetail__container-item__footer-participants"
    },
    dD = {
        class: "lotteryDetail__container-item__footer-participants__item-header"
    },
    pD = {
        class: "lotteryDetail__container-item__footer-participants__item-tickets"
    },
    _D = {
        key: 0,
        class: "lotteryDetail__container-item__footer-participants__item-tickets__viewAll"
    },
    uD = ["onClick"],
    vD = at(() => t("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none"
    }, [t("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M25.7416 11.694C26.4622 10.8819 25.8857 9.59961 24.8 9.59961L15.8872 9.59961L6.8 9.59961C5.72151 9.59961 5.15333 10.8777 5.87586 11.6783L14.4434 21.1724C15.2295 21.9855 16.5448 21.9855 17.331 21.1724L25.7416 11.694Z",
        fill: "#F85252"
    })], -1)),
    mD = ["innerHTML"],
    hD = {
        key: 0
    },
    wD = {
        key: 1
    },
    bD = {
        class: "lotteryDetail__container-item__actionSheet"
    },
    CD = ["src"],
    yD = ["onClick"],
    fD = ["src"],
    BD = {
        key: 1,
        class: "lotteryDetail__container-item__actionSheetCloseBtn"
    },
    RD = at(() => t("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "60",
        height: "60",
        viewBox: "0 0 60 60",
        fill: "none"
    }, [t("path", {
        d: "M30 57C44.9117 57 57 44.9117 57 30C57 15.0883 44.9117 3 30 3C15.0883 3 3 15.0883 3 30C3 44.9117 15.0883 57 30 57Z",
        stroke: "white",
        "stroke-width": "4",
        "stroke-linejoin": "round"
    }), t("path", {
        d: "M43 17L17 43",
        stroke: "white",
        "stroke-width": "4",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), t("path", {
        d: "M17 17L43 43",
        stroke: "white",
        "stroke-width": "4",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1)),
    ED = [RD],
    DD = {
        class: "van-dialog__content-title"
    },
    ID = {
        class: "van-dialog__content-subTitle"
    },
    SD = {
        class: "van-dialog__content-tips"
    },
    LD = {
        class: "van-dialog__content-ticketsList"
    },
    GD = ["src"],
    kD = ["src"],
    UD = $({
        __name: "index",
        setup(e) {
            const s = oe();
            Ne();
            const n = ve();
            ut();
            const {
                getPointLotteryInfo: o,
                onJoin: A,
                winPeople: i,
                list: g,
                loading: d,
                ticketCount: v,
                resultTicket: u,
                pointInfo: p
            } = et(), w = (S, T) => S == 0 && T == 0 ? 100 : S / T * 100, b = M(() => {
                var S, T, V, P, W;
                return [(S = p.value) == null ? void 0 : S.img_Five, (T = p.value) == null ? void 0 : T.img_Four, (V = p.value) == null ? void 0 : V.img_One, (P = p.value) == null ? void 0 : P.img_Three, (W = p.value) == null ? void 0 : W.img_Two].filter(Boolean)
            }), C = D(0), R = D(!1), B = D(0), h = D(!1), y = [{
                amount: 1,
                price: 10
            }, {
                amount: 3,
                price: 30
            }, {
                amount: 5,
                price: 50
            }, {
                amount: 10,
                price: 100
            }, {
                amount: 20,
                price: 200
            }, {
                amount: 30,
                price: 300
            }, {
                amount: 50,
                price: 500
            }, {
                amount: 100,
                price: 1e3
            }];

            function f() {
                s.push({
                    name: "PointMall-MyLottery"
                })
            }

            function Q(S) {
                g.value.length && (g.value[0].users[S].showAll = !g.value[0].users[S].showAll)
            }

            function G(S, T = !1) {
                T ? se() : (R.value = S, S || (B.value = 0))
            }

            function se() {
                h.value = !0
            }
            const F = async () => {
                h.value = !1, R.value = !1, await o()
            };
            return Ce(u, S => {
                S.length && (h.value = !0)
            }), le(async () => {
                await o()
            }), (S, T) => {
                var re, x;
                const V = N("NavBar"),
                    P = N("van-progress"),
                    W = N("van-tab"),
                    L = N("van-tabs"),
                    I = N("van-button"),
                    k = N("van-action-sheet"),
                    ne = N("van-icon"),
                    J = N("van-dialog"),
                    q = he("lazy");
                return _(), m("div", O8, [U(V, {
                    title: S.$t("drawActivity"),
                    "left-arrow": "",
                    onClickLeft: T[0] || (T[0] = H => l(s).go(-1))
                }, null, 8, ["title"]), l(p) ? (_(), m("div", P8, [t("div", F8, [t("div", x8, [U(l(bn), {
                    autoplay: 3e3,
                    "indicator-color": "white"
                }, {
                    default: X(() => [(_(!0), m(Y, null, te(b.value, H => (_(), ce(l(wn), null, {
                        default: X(() => [Z(t("img", null, null, 512), [
                            [q, H]
                        ])]),
                        _: 2
                    }, 1024))), 256))]),
                    _: 1
                }), N8]), t("div", H8, a((re = l(p)) == null ? void 0 : re.name), 1), t("div", Y8, [t("div", null, [t("span", null, a(S.$t("startTime")), 1), W8, t("span", null, a((x = l(p)) == null ? void 0 : x.startTime), 1)]), t("div", null, [t("span", J8, a(S.$t("betIssue")), 1), K8, t("span", null, a(l(p).issueNumber), 1)])]), t("div", X8, [t("div", null, [t("span", null, a(S.$t("progress")), 1), t("span", null, a(S.$t("totalActivity")), 1)]), U(P, {
                    "stroke-width": "8px",
                    color: "linear-gradient(90deg, #FA2367 0%, #9B25C9 100%)",
                    percentage: w(l(p).redeemedNumber || 0, l(p).totalNumber),
                    "show-pivot": !1
                }, null, 8, ["percentage"]), t("div", null, [t("span", null, a(w(l(p).redeemedNumber || 0, l(p).totalNumber).toFixed(2)) + "%", 1), t("h1", null, a(l(p).totalNumber) + a(S.$t("sheets")), 1)])]), l(p).winningNumber ? (_(), m("div", j8, [t("div", z8, [t("span", null, a(S.$t("lotteryActivityEndTime")), 1), t("div", null, a(l(p).endTime), 1)]), t("div", Z8, [t("span", null, a(S.$t("lotteryWinPeople")), 1), t("div", q8, a(l(es)(l(i).userName)), 1)])])) : (_(), m("div", $8, [t("div", eD, [t("span", null, a(S.$t("requiredBeforeEnd")), 1), t("div", null, [t("span", null, a(l(p).totalNumber - l(p).redeemedNumber), 1), j(" " + a(S.$t("sheets")), 1)])]), t("div", tD, [t("span", null, a(S.$t("perRaffleTicket")), 1), t("div", null, [Z(t("img", null, null, 512), [
                    [q, l(z)("activity/PointMall", "redDiamondSm")]
                ]), t("h5", null, a(l(p).unit) + ".00", 1)])])]))]), t("div", sD, [t("h1", null, a(S.$t("prizenumber")), 1), t("div", null, [t("div", nD, [l(p).winningNumber ? (_(), m("span", aD, a(l(p).winningNumber), 1)) : (_(), m("span", oD, "**********"))]), t("div", AD, [l(p).winningNumber ? (_(), m("span", iD, a(S.$t("prizenumber")), 1)) : (_(), m("span", lD, a(S.$t("waitingforlottery")), 1))]), Z(t("img", null, null, 512), [
                    [q, l(z)("activity/PointMall", "luckyNumber")]
                ])])]), t("div", rD, [t("div", cD, [t("h1", {
                    class: ae({
                        fontWeight600: C.value === 0
                    }),
                    onClick: T[1] || (T[1] = H => C.value = 0)
                }, a(S.$t("participant")), 3), t("h1", {
                    class: ae({
                        fontWeight600: C.value === 1
                    }),
                    onClick: T[2] || (T[2] = H => C.value = 1)
                }, a(S.$t("PrizeDetails")), 3)]), U(L, {
                    active: C.value,
                    "onUpdate:active": T[3] || (T[3] = H => C.value = H),
                    type: "card",
                    background: "transparent",
                    "title-active-color": "#151515",
                    "title-inactive-color": "#333",
                    animated: ""
                }, {
                    default: X(() => [U(W, {
                        title: S.$t("popularProduct"),
                        ref: "targetContainer"
                    }, {
                        default: X(() => [t("div", gD, [(_(!0), m(Y, null, te(l(p).users, (H, me) => (_(), m("div", {
                            class: "lotteryDetail__container-item__footer-participants__item",
                            key: me
                        }, [t("div", dD, [t("span", {
                            class: ae({
                                me: H.isWin
                            })
                        }, a(l(es)(H.userName)), 3), t("span", null, a(H.addTime), 1)]), t("div", pD, [(_(!0), m(Y, null, te(H.showAll ? H.tickets : H.tickets.slice(0, 5), Pe => (_(), m("div", {
                            key: Pe
                        }, [Z(t("img", null, null, 512), [
                            [q, l(z)("activity/PointMall", "ticket")]
                        ]), t("span", null, a(Pe), 1)]))), 128)), !H.showAll && H.tickets.length > 6 ? (_(), m("div", _D, [t("div", {
                            onClick: Pe => Q(me)
                        }, [j(a(S.$t("viewAll")) + " ", 1), vD], 8, uD)])) : K("", !0)])]))), 128))])]),
                        _: 1
                    }, 8, ["title"]), U(W, {
                        title: S.$t("treasureScore")
                    }, {
                        default: X(() => [t("div", {
                            class: "lotteryDetail__container-item__footer-detail",
                            innerHTML: l(p).details
                        }, null, 8, mD)]),
                        _: 1
                    }, 8, ["title"])]),
                    _: 1
                }, 8, ["active"])]), t("div", {
                    class: ae(["lotteryDetail__container-item__participate", {
                        lotteryDetailActive: l(p).status == 1
                    }])
                }, [l(p).status == 2 ? (_(), m("span", hD, a(S.$t("lotteryActivityUnstarted")), 1)) : l(p).status == 0 ? (_(), m("span", wD, a(S.$t("lotteryActivityEnd")), 1)) : (_(), m("span", {
                    key: 2,
                    onClick: T[4] || (T[4] = H => G(!0, !1))
                }, a(S.$t("ParticipateInlottery")), 1))], 2)])) : K("", !0), U(k, {
                    show: R.value,
                    "onUpdate:show": T[5] || (T[5] = H => R.value = H),
                    title: S.$t("descLottery1"),
                    "z-index": "2000",
                    "close-on-click-overlay": !1,
                    closeable: !1
                }, {
                    default: X(() => {
                        var H;
                        return [t("div", bD, [t("div", null, [t("img", {
                            src: l(z)("activity/PointMall", "redDiamondSm")
                        }, null, 8, CD), t("span", null, a(l(n).getUserInfo.integral), 1)]), t("div", null, a(S.$t("myScores")), 1), t("div", null, [(_(), m(Y, null, te(y, (me, Pe) => t("div", {
                            key: Pe,
                            class: ae({
                                activeTicket: me.amount === l(v)
                            }),
                            onClick: cL => v.value = me.amount
                        }, [t("span", null, a(me.amount), 1), t("span", null, a(S.$t("sheets")), 1)], 10, yD)), 64))]), t("div", null, [t("span", null, a(S.$t("needToPay")), 1), t("div", null, [t("img", {
                            src: l(z)("activity/PointMall", "redDiamondSm")
                        }, null, 8, fD), j(" " + a(((H = l(p)) == null ? void 0 : H.unit) * l(v) || 0) + ".00 ", 1)])])]), U(I, {
                            class: "lotteryDetail__container-item__actionSheet-button",
                            block: "",
                            loading: l(d),
                            "loading-text": S.$t("confirmParticipate"),
                            onClick: l(A)
                        }, {
                            default: X(() => [j(a(S.$t("confirmParticipate")), 1)]),
                            _: 1
                        }, 8, ["loading", "loading-text", "onClick"])]
                    }),
                    _: 1
                }, 8, ["show", "title"]), R.value ? (_(), m("div", BD, [t("span", {
                    onClick: T[6] || (T[6] = H => G(!1))
                }, ED)])) : K("", !0), U(J, {
                    show: h.value,
                    "onUpdate:show": T[7] || (T[7] = H => h.value = H),
                    "show-confirm-button": !1,
                    "z-index": "3100"
                }, {
                    default: X(() => [t("div", DD, a(S.$t("participateSuccess")), 1), t("div", ID, [t("span", null, a(l(u).length), 1), j(a(S.$t("sheets")), 1)]), t("div", SD, a(S.$t("congratsOnWinTicket")), 1), t("div", LD, [t("div", null, [(_(!0), m(Y, null, te(l(u), H => (_(), m("div", null, [t("img", {
                        class: "van-dialog__content-ticketsList__ticket",
                        src: l(z)("activity/PointMall", "ticket")
                    }, null, 8, GD), j(" " + a(H), 1)]))), 256))])]), t("div", {
                        class: "van-dialog__content-confirm",
                        onClick: F
                    }, a(S.$t("confirm")), 1), t("div", {
                        class: "van-dialog__content-myTreasure",
                        onClick: f
                    }, [j(a(S.$t("toMyTreasure")) + " ", 1), U(ne, {
                        name: "arrow"
                    }), U(ne, {
                        name: "arrow",
                        style: {
                            left: "-10px"
                        }
                    })]), Z(t("img", null, null, 512), [
                        [q, l(z)("activity/PointMall", "successfullyParticipatedBg")]
                    ]), t("img", {
                        class: "van-dialog__content-successfullyParticipatedBottom",
                        src: l(z)("activity/PointMall", "successfullyParticipatedBottom")
                    }, null, 8, kD)]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const MD = ee(UD, [
        ["__scopeId", "data-v-e633cf1d"]
    ]),
    TD = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: MD
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    QD = {
        class: "myLottery__container"
    },
    VD = {
        class: "myLottery__container-products"
    },
    OD = {
        class: "myLottery__container-products__item"
    },
    PD = {
        class: "myLottery__container-products__item-header"
    },
    FD = {
        class: "myLottery__container-products__item-header__left"
    },
    xD = {
        class: "myLottery__container-products__item-header__right"
    },
    ND = {
        class: "left"
    },
    HD = {
        class: "right"
    },
    YD = {
        class: "myLottery__container-products__item-footer"
    },
    WD = {
        class: "myLottery__container-products__item-footer__header"
    },
    JD = {
        class: "myLottery__container-products__item-footer__body"
    },
    KD = ["onClick"],
    XD = $({
        __name: "index",
        setup(e) {
            const {
                t: s
            } = ie(), n = oe(), {
                myPointTabs: o,
                pointTabActive: A,
                myPointList: i,
                myPointQuery: g,
                listRef: d,
                pointRest: v
            } = et(), u = R => [R.img_Five, R.img_Four, R.img_One, R.img_Three, R.img_Two].filter(Boolean);

            function p() {
                n.back()
            }
            Ce(A, () => {
                g.value.orderStatus = A.value, v(), d.value.resetRefresh()
            });

            function w(R, B) {
                if (B === 1) switch (R) {
                    case 0:
                        return "linear-gradient(270deg, #FF5353 27.64%, #FF4141 91%, #FF9495 96.88%, #EB2426 100%)";
                    case 2:
                        return "linear-gradient(270deg, #FABB2A 18.36%, #EB9315 89.84%, #FBE571 96.48%, #ED8B19 100%)";
                    case 1:
                        return "linear-gradient(270deg, #9FAAD2 18.36%, #A3B0DE 89.84%, #D5E1FF 96.48%, #7884B0 100%)"
                } else switch (R) {
                    case 1:
                        return "linear-gradient(90deg, #BDC9F4 -3.24%, #FFF 4.63%, #C9D5FB 13.43%, #D9E3FF 76.75%)";
                    case 2:
                        return "linear-gradient(90deg, #FF9C3A -3.24%, #FFE55C 4.63%, #FFB936 13.43%, #FFF962 76.75%)";
                    default:
                        return "linear-gradient(90deg, #FF9C3A -3.24%, #FFE55C 4.63%, #FFB936 13.43%, #FFF962 76.75%)"
                }
            }

            function b(R) {
                switch (R) {
                    case 0:
                        return s("ongoing");
                    case 2:
                        return s("winTheLottery");
                    case 1:
                        return s("winTips4")
                }
            }

            function C(R, B) {
                n.push({
                    name: "PointMall-ReceiveLottery",
                    query: {
                        pointsLotteryID: R,
                        orderId: B
                    }
                })
            }
            return (R, B) => {
                const h = N("NavBar"),
                    y = N("van-tab"),
                    f = N("van-tabs"),
                    Q = he("lazy");
                return _(), m("div", QD, [U(h, {
                    title: l(s)("mydraw"),
                    "z-index": "99",
                    fixed: "",
                    "left-arrow": "",
                    onClickLeft: p
                }, null, 8, ["title"]), U(f, {
                    active: l(A),
                    "onUpdate:active": B[0] || (B[0] = G => Ie(A) ? A.value = G : null),
                    background: "#151E2B",
                    color: "#fff",
                    "line-width": "0",
                    "line-height": "0",
                    "title-active-color": "#fff",
                    "title-inactive-color": "#fff"
                }, {
                    default: X(() => [(_(!0), m(Y, null, te(l(o), (G, se) => (_(), ce(y, {
                        name: G.value,
                        key: se,
                        title: G.label
                    }, null, 8, ["name", "title"]))), 128))]),
                    _: 1
                }, 8, ["active"]), U(Oe, {
                    distance: 300,
                    api: l(b4),
                    list: l(i),
                    "onUpdate:list": B[1] || (B[1] = G => Ie(i) ? i.value = G : null),
                    "page-query": l(g),
                    "onUpdate:pageQuery": B[2] || (B[2] = G => Ie(g) ? g.value = G : null),
                    isAutoLoad: !0,
                    ref_key: "listRef",
                    ref: d
                }, {
                    content: X(() => [t("div", VD, [(_(!0), m(Y, null, te(l(i), (G, se) => (_(), m("div", OD, [t("div", PD, [t("div", FD, [t("span", {
                        style: Ve({
                            background: w(G.orderInfo.orderStatus, 1)
                        })
                    }, a(b(G.orderInfo.orderStatus)), 5), t("span", {
                        style: Ve({
                            background: w(G.orderInfo.orderStatus, 2)
                        })
                    }, a(b(G.orderInfo.orderStatus)), 5), Z(t("img", null, null, 512), [
                        [Q, u(G.lotteryInfo)[0]]
                    ])]), t("div", xD, [t("h1", null, a(G.lotteryInfo.name), 1), t("div", null, a(l(s)("betNumber")) + ": " + a(G.lotteryInfo.issueNumber), 1), t("div", null, [t("span", ND, a(G.lotteryInfo.redeemedNumber), 1), j("/" + a(G.lotteryInfo.totalNumber) + " " + a(l(s)("sheets")) + " ", 1), t("span", HD, [Z(t("img", null, null, 512), [
                        [Q, l(z)("activity/PointMall", "redDiamondSm")]
                    ]), j(" " + a(G.lotteryInfo.unit) + ".00 ", 1)])])])]), t("div", YD, [t("div", WD, [t("div", null, [j(a(l(s)("gross")), 1), t("span", null, a(G.ticketsInfo.length), 1), j(a(l(s)("raffleticket")), 1)]), t("div", null, a(l(Ae)(G.ticketsInfo.length * G.lotteryInfo.unit)), 1)]), t("div", JD, [(_(!0), m(Y, null, te(G.ticketsInfo, (F, S) => (_(), m("div", {
                        class: "myLottery__container-products__item-footer__body-item",
                        key: se
                    }, [Z(t("img", null, null, 512), [
                        [Q, l(z)("activity/PointMall", "ticket")]
                    ]), t("span", null, a(F.ticketNumber), 1)]))), 128))])]), G.orderInfo.orderStatus === 2 && G.orderInfo.shippingStatus == 0 ? (_(), m("div", {
                        key: 0,
                        class: ae(["myLottery__container-products__item-button", {
                            boxShadow4px: !0
                        }]),
                        onClick: F => C(G.lotteryInfo.pointsLotteryID, G.orderInfo.pointsLotteryOrdersID)
                    }, [t("span", null, a(l(s)("claimtreasure")), 1)], 8, KD)) : K("", !0), G.orderInfo.shippingStatus > 0 && G.orderInfo.orderStatus === 2 ? (_(), m("div", {
                        key: 1,
                        class: ae(["myLottery__container-products__item-button", {
                            boxShadow4px: !1
                        }])
                    }, [t("span", null, a(l(s)("claimed")), 1)])) : K("", !0)]))), 256))])]),
                    _: 1
                }, 8, ["api", "list", "page-query"])])
            }
        }
    });
const jD = ee(XD, [
        ["__scopeId", "data-v-7d94798e"]
    ]),
    zD = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: jD
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ZD = {
        class: "myOrders__container"
    },
    qD = ["onClick"],
    $D = {
        class: "myOrders__container-item__header-left"
    },
    eI = {
        alt: ""
    },
    tI = {
        class: "myOrders__container-item__header-right"
    },
    sI = ["src"],
    nI = {
        class: "red"
    },
    aI = {
        class: "white"
    },
    oI = {
        class: "myOrders__container-item__footer-top"
    },
    AI = {
        class: "myOrders__container-item__footer-bottom"
    },
    iI = $({
        __name: "index",
        setup(e) {
            const {
                t: s
            } = ie(), n = oe(), o = D({}), A = D({
                pageNo: 1,
                list: [],
                totalCount: 0,
                totalPage: 0
            });

            function i(v) {
                switch (v) {
                    case 0:
                        return s("tobeDelivered");
                    case 1:
                        return s("shipped");
                    case 2:
                        return s("completed");
                    case 3:
                        return s("canceled");
                    default:
                        return s("tobeDelivered")
                }
            }

            function g() {
                n.back()
            }

            function d(v) {
                n.push({
                    name: "PointMall-OrderDetail",
                    query: {
                        orderNumber: v.orderNumber,
                        orderType: v.orderType,
                        orderId: v.orderId
                    }
                })
            }
            return (v, u) => {
                const p = N("NavBar"),
                    w = he("lazy");
                return _(), m("div", ZD, [U(p, {
                    title: l(s)("myOrder"),
                    "left-arrow": "",
                    onClickLeft: g,
                    ifleftTitle: !0
                }, null, 8, ["title"]), U(Oe, {
                    distance: 300,
                    api: l(p4),
                    list: A.value.list,
                    "onUpdate:list": u[0] || (u[0] = b => A.value.list = b),
                    "page-query": o.value,
                    "onUpdate:pageQuery": u[1] || (u[1] = b => o.value = b),
                    isAutoLoad: !0
                }, {
                    content: X(() => [(_(!0), m(Y, null, te(A.value.list, (b, C) => (_(), m("div", {
                        class: "myOrders__container-item",
                        key: C
                    }, [t("div", {
                        class: "myOrders__container-item__header",
                        onClick: R => d(b)
                    }, [t("div", $D, [Z(t("img", eI, null, 512), [
                        [w, b.productImg]
                    ]), t("div", {
                        class: ae(`state${b.state}`)
                    }, [t("span", null, a(i(b.state)), 1)], 2)]), t("div", tI, [t("h1", null, a(l(Cs)(b.productName, 80)), 1), t("div", null, [t("span", null, [t("img", {
                        src: l(z)("activity/PointMall", "diamond"),
                        alt: ""
                    }, null, 8, sI), t("span", nI, a(b.integral / b.counts), 1)]), t("span", aI, " x" + a(b.counts), 1)]), t("div", oI, [t("span", null, a(l(s)("orderNo")), 1), t("span", null, a(b.orderNumber), 1)]), t("div", AI, [t("span", null, a(l(s)("ordertime")), 1), t("span", null, a(b.addTime), 1)]), t("div", null, [t("span", null, a(l(s)("orderTotalAmount")), 1), t("span", null, a(b.integral), 1)])])], 8, qD)]))), 128))]),
                    _: 1
                }, 8, ["api", "list", "page-query"])])
            }
        }
    });
const lI = ee(iI, [
        ["__scopeId", "data-v-df5d4124"]
    ]),
    rI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: lI
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ke = Ge.global.t;

function Lt(e) {
    switch (e) {
        case 0:
            return Ke("tobeDelivered");
        case 1:
            return Ke("shipped");
        case 2:
            return Ke("completed");
        case 3:
            return Ke("canceled");
        default:
            return Ke("tobeDelivered")
    }
}
const cI = {
        class: "orderDetail__container"
    },
    gI = {
        class: "orderDetail__container-header ar-1px-b"
    },
    dI = {
        key: 0
    },
    pI = {
        key: 1
    },
    _I = {
        key: 2
    },
    uI = {
        key: 3
    },
    vI = {
        class: "orderDetail__container-content"
    },
    mI = {
        class: "orderDetail__container-content__itemDetail"
    },
    hI = {
        class: "orderDetail__container-content__itemDetail-header ar-1px-b"
    },
    wI = {
        class: "orderDetail__container-content__itemDetail-body ar-1px-b"
    },
    bI = {
        class: "orderDetail__container-content__itemDetail-body__top"
    },
    CI = {
        alt: ""
    },
    yI = ["src"],
    fI = {
        class: "red"
    },
    BI = {
        class: "white"
    },
    RI = {
        class: "myOrders__container-item__footer-bottom"
    },
    EI = {
        class: "orderDetail__container-content__address"
    },
    DI = {
        class: "orderDetail__container-content__address-header ar-1px-b"
    },
    II = {
        key: 0,
        class: "orderDetail__container-content__address-body"
    },
    SI = {
        class: "orderDetail__container-content__orderDetail"
    },
    LI = {
        class: "orderDetail__container-content__orderDetail-header"
    },
    GI = {
        class: "orderDetail__container-content__orderDetail-body"
    },
    kI = {
        class: "orderDetail__container-content__orderDetail-body__item"
    },
    UI = {
        class: "orderDetail__container-content__orderDetail-body__item"
    },
    MI = {
        class: "orderDetail__container-content__btn"
    },
    TI = {
        class: "content-box"
    },
    QI = {
        style: {
            width: "100%"
        },
        alt: ""
    },
    VI = $({
        __name: "index",
        setup(e) {
            const s = oe();
            ve();
            const n = D(),
                o = D({}),
                A = D(!1),
                i = D(!1),
                g = Ne(),
                d = async () => {
                    const B = g.query.orderType || "",
                        h = g.query.orderId || "",
                        y = await O(Ms({
                            orderId: Number(h),
                            orderType: Number(B)
                        }));
                    y && (n.value = y.data)
                },
                v = D(!1);

            function u(B) {
                return B ? "orderCancelSuccess" : "orderCancelWarn"
            }
            const p = M(() => g.query.orderType !== "2");

            function w() {
                o.value.state !== 3 && (A.value = !0)
            }

            function b() {
                s.back()
            }
            async function C() {
                o.value.state === 0 && v4({
                    orderNumber: o.value.orderNumber
                }).then(B => {
                    B.code == 0 ? (v.value = !0, o.value.state = 1, i.value = !0, R()) : (v.value = !1, o.value.state = 1, i.value = !0, R()), A.value = !1
                }).catch(B => {
                    Se(B)
                }), A.value = !1
            }
            async function R() {
                const B = g.query.orderNumber || "",
                    h = g.query.orderType || "",
                    y = g.query.orderId || "",
                    f = await O(_4({
                        orderNumber: B,
                        orderId: Number(y),
                        orderType: Number(h)
                    }));
                f && (o.value = f.data), d()
            }
            return le(async () => {
                R()
            }), (B, h) => {
                var G, se, F, S, T, V;
                const y = N("NavBar"),
                    f = N("van-icon"),
                    Q = he("lazy");
                return _(), m("div", cI, [U(y, {
                    title: B.$t("orderDetail"),
                    ifleftTitle: !0,
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: b
                }, null, 8, ["title"]), t("div", gI, [t("h1", null, a(l(Lt)(o.value.state)), 1), o.value.state === 3 ? (_(), m("p", dI, a(B.$t("ordercancle")), 1)) : o.value.state === 1 ? (_(), m("p", pI, a(B.$t("orderShipped")), 1)) : o.value.state === 2 ? (_(), m("p", _I, a(B.$t("orderCompleted")), 1)) : o.value.state === 0 ? (_(), m("p", uI, a(B.$t("descActivity4")), 1)) : K("", !0)]), t("div", vI, [t("div", mI, [t("div", hI, [t("h1", null, a(B.$t("productDetail")), 1)]), t("div", wI, [t("div", bI, [t("div", null, [Z(t("img", CI, null, 512), [
                    [Q, o.value.productImg]
                ]), t("div", {
                    class: ae(`state${o.value.state}`)
                }, [t("span", null, a(l(Lt)(o.value.state)), 1)], 2)]), t("div", null, [t("h1", null, a(l(Cs)(o.value.productName, 30)), 1), t("div", null, [t("span", null, [t("img", {
                    src: l(z)("activity/PointMall", "diamond"),
                    alt: ""
                }, null, 8, yI), t("span", fI, a(o.value.integral / o.value.counts || 0), 1)]), t("span", BI, " x" + a(o.value.counts), 1)]), t("div", null, [t("span", null, a(B.$t("orderNo")), 1), t("span", null, a(o.value.orderNumber), 1)]), t("div", RI, [t("span", null, a(B.$t("ordertime")), 1), t("span", null, a(o.value.addTime), 1)])])])])]), t("div", EI, [t("div", DI, [U(f, {
                    name: "location"
                }), t("h1", null, a(B.$t("recipientAddr")), 1)]), n.value ? (_(), m("div", II, [t("div", null, a((G = n.value) == null ? void 0 : G.name), 1), t("div", null, "+" + a((F = n.value) != null && F.phone.startsWith((se = n.value) == null ? void 0 : se.area) ? "" : (S = n.value) == null ? void 0 : S.area) + a((T = n.value) == null ? void 0 : T.phone), 1), t("p", null, a((V = n.value) == null ? void 0 : V.address), 1)])) : K("", !0)]), t("div", SI, [t("div", LI, [U(f, {
                    name: "column"
                }), t("h1", null, a(B.$t("orderDetail")), 1)]), t("div", GI, [t("div", kI, [t("span", null, a(o.value.addTime), 1), t("span", null, a(B.$t("orderSuccess")), 1)]), t("div", UI, [t("span", null, a(o.value.upTime), 1), t("span", null, a(l(Lt)(o.value.state)), 1)])])]), t("div", MI, [o.value.state !== 3 && o.value.state !== 1 && o.value.state !== 2 && p.value ? (_(), m("div", {
                    key: 0,
                    onClick: w,
                    class: "orderDetail__container-content__btn-cancel"
                }, a(B.$t("concelOrder")), 1)) : K("", !0), t("div", {
                    onClick: h[0] || (h[0] = P => l(s).push({
                        name: "CustomerService"
                    }))
                }, a(B.$t("contactServicer")), 1)])]), U(ze, {
                    show: A.value,
                    "onUpdate:show": h[2] || (h[2] = P => A.value = P),
                    onConfirm: C,
                    cancelText: B.$t("close"),
                    confirmText: B.$t("confirmCancel")
                }, {
                    title: X(() => [t("h1", null, a(B.$t("tipWeatherToCancel")), 1)]),
                    content: X(() => [t("div", TI, [Z(t("img", {
                        onClick: h[1] || (h[1] = P => A.value = !1),
                        class: "closeIcon",
                        alt: ""
                    }, null, 512), [
                        [Q, l(z)("common", "closeGrey")]
                    ])])]),
                    _: 1
                }, 8, ["show", "cancelText", "confirmText"]), U(ze, {
                    show: i.value,
                    "onUpdate:show": h[3] || (h[3] = P => i.value = P),
                    onConfirm: h[4] || (h[4] = P => i.value = !1),
                    confirmText: B.$t("confirm"),
                    "show-cancel-btn": !1,
                    title: v.value ? B.$t("orderCanceled") : B.$t("tipUnableToConcel")
                }, {
                    header: X(() => [Z(t("img", QI, null, 512), [
                        [Q, l(z)("activity/PointMall", u(v.value))]
                    ])]),
                    _: 1
                }, 8, ["show", "confirmText", "title"])])
            }
        }
    });
const OI = ee(VI, [
        ["__scopeId", "data-v-21248985"]
    ]),
    PI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: OI
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    FI = {
        class: "receiveLottery__container"
    },
    xI = {
        class: "receiveLottery__container-hero"
    },
    NI = {
        class: "receiveLottery__container-hero__left"
    },
    HI = {
        class: "receiveLottery__container-hero__right"
    },
    YI = {
        class: "receiveLottery__container-note"
    },
    WI = {
        key: 1,
        class: "receiveLottery__container-empty"
    },
    JI = {
        class: "receiveLottery__container-address"
    },
    KI = {
        class: "receiveLottery__container-address__header"
    },
    XI = {
        class: "receiveLottery__container-address__body-content"
    },
    jI = {
        class: "receiveLottery__container-address__body-footer"
    },
    zI = ["onClick"],
    ZI = {
        key: 1,
        class: "receiveLottery__container-address__empty"
    },
    qI = {
        class: "dialog__content-top"
    },
    $I = {
        class: "van-dialog__content-title"
    },
    eS = {
        class: "van-dialog__content-note"
    },
    tS = {
        class: "van-dialog__btns"
    },
    sS = $({
        __name: "index",
        setup(e) {
            const s = oe(),
                n = Ne(),
                {
                    getPointLotteryInfo: o,
                    getAddress: A,
                    setDefault: i,
                    delAddress: g,
                    address: d,
                    list: v,
                    loading: u,
                    pointInfo: p
                } = et(),
                w = M(() => {
                    var y, f, Q, G, se;
                    return [(y = p.value) == null ? void 0 : y.img_Five, (f = p.value) == null ? void 0 : f.img_Four, (Q = p.value) == null ? void 0 : Q.img_One, (G = p.value) == null ? void 0 : G.img_Three, (se = p.value) == null ? void 0 : se.img_Two].filter(Boolean)
                }),
                b = D(!1);
            async function C() {
                s.push({
                    path: "/activity/pointMall/myorders"
                })
            }

            function R() {
                s.back()
            }
            const B = y => {
                const f = d.value[0] || {};
                y === "edit" ? s.push({
                    path: "/activity/pointMall/addAddress",
                    query: { ...f,
                        type: "edit",
                        form: "lotteryPoint"
                    }
                }) : s.push({
                    path: "/activity/pointMall/addAddress",
                    query: {
                        type: "add",
                        form: "lotteryPoint"
                    }
                })
            };
            async function h() {
                if (u.value) return;
                u.value = !0;
                const y = n.query.orderId,
                    f = parseInt(y, 10),
                    Q = d.value.find(se => se.defaultAddress == !0) || d.value[0],
                    G = await O(y4({
                        orderId: f,
                        userAddressId: Q.addressId
                    }));
                u.value = !1, G && (b.value = !0)
            }
            return le(async () => {
                await Promise.all([A(), o()])
            }), (y, f) => {
                const Q = N("NavBar"),
                    G = N("van-icon"),
                    se = N("van-button"),
                    F = N("van-dialog"),
                    S = he("lazy");
                return _(), m("div", FI, [U(Q, {
                    title: y.$t("claimPrize"),
                    fixed: "",
                    "left-arrow": "",
                    onClickLeft: R
                }, null, 8, ["title"]), l(p) ? (_(), m(Y, {
                    key: 0
                }, [t("div", xI, [t("div", NI, [Z(t("img", null, null, 512), [
                    [S, w.value[0]]
                ]), t("span", null, a(y.$t("winTheLottery")), 1), t("span", null, a(y.$t("winTheLottery")), 1)]), t("div", HI, [t("h1", null, a(l(p).name), 1), t("div", null, a(y.$t("betsNo")) + " " + a(l(p).issueNumber), 1), t("div", null, [Z(t("img", null, null, 512), [
                    [S, l(z)("activity/PointMall", "ticket")]
                ]), j(" " + a(l(p).winningNumber), 1)])])]), t("div", YI, [Z(t("img", null, null, 512), [
                    [S, l(z)("activity/PointMall", "notice")]
                ]), t("span", null, a(y.$t("descActivity5")) + "!", 1)])], 64)) : (_(), m("div", WI, [U(ke, null, {
                    default: X(() => [t("p", null, a(y.$t("descActivity6")), 1)]),
                    _: 1
                })])), t("div", JI, [t("div", KI, [U(G, {
                    name: "location"
                }), t("h1", null, a(y.$t("recipientAddr")), 1)]), l(d).length ? (_(!0), m(Y, {
                    key: 0
                }, te(l(d), (T, V) => (_(), m("div", {
                    class: "receiveLottery__container-address__body",
                    key: V
                }, [t("div", XI, [t("div", null, a(T.name), 1), t("div", null, "+" + a(T.area) + a(T.phone), 1), t("div", null, a(T.address), 1)]), t("div", jI, [t("div", {
                    onClick: f[0] || (f[0] = P => B("edit"))
                }, [Z(t("img", null, null, 512), [
                    [S, l(z)("activity/PointMall", "editDefault")]
                ]), j(" " + a(y.$t("edit")), 1)]), t("div", {
                    onClick: P => l(g)(T.addressId)
                }, [Z(t("img", null, null, 512), [
                    [S, l(z)("activity/PointMall", "recycleBin")]
                ]), j(" " + a(y.$t("delete")), 1)], 8, zI)])]))), 128)) : (_(), m("div", ZI, [Z(t("img", {
                    onClick: f[1] || (f[1] = T => B("add"))
                }, null, 512), [
                    [S, l(z)("activity/PointMall", "addAddress")]
                ]), t("p", null, a(y.$t("addrecipientAddr")), 1)]))]), U(se, {
                    loading: l(u),
                    disabled: !l(d).length,
                    "loading-text": y.$t("receive"),
                    class: ae(["receiveLottery__container-receiverBtn", {
                        disabled: !l(d).length
                    }]),
                    onClick: h
                }, {
                    default: X(() => [j(a(y.$t("receive")), 1)]),
                    _: 1
                }, 8, ["loading", "disabled", "loading-text", "class"]), U(F, {
                    show: b.value,
                    "onUpdate:show": f[3] || (f[3] = T => b.value = T),
                    "show-confirm-button": !1,
                    "z-index": "3100"
                }, {
                    default: X(() => [Z(t("img", qI, null, 512), [
                        [S, l(z)("activity/PointMall", "successfullyReceived")]
                    ]), t("div", $I, a(y.$t("receiveSuccess")), 1), t("div", eS, a(y.$t("descActivity7")), 1), t("div", tS, [t("div", {
                        class: "van-dialog__content-btn",
                        onClick: f[2] || (f[2] = T => b.value = !1)
                    }, a(y.$t("close")), 1), t("div", {
                        class: "van-dialog__content-btn",
                        onClick: C
                    }, a(y.$t("checkOrder")), 1)])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const nS = ee(sS, [
        ["__scopeId", "data-v-e9858da7"]
    ]),
    aS = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: nS
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    oS = {
        class: "pointMallRecord__container"
    },
    AS = {
        class: "navbar__content-right__buttons"
    },
    iS = {
        class: "pointMallRecord__container-header"
    },
    lS = {
        class: "points-date"
    },
    rS = {
        class: "contant"
    },
    cS = {
        class: "green"
    },
    gS = {
        class: "red"
    },
    dS = {
        key: 0,
        class: "pointMallRecord__container-list"
    },
    pS = {
        class: "pointMallRecord__container-list__item-left"
    },
    _S = {
        class: "pointMallRecord__container-list__item-right"
    },
    uS = {
        key: 0
    },
    vS = {
        key: 1
    },
    mS = $({
        __name: "index",
        setup(e) {
            const s = D(!1),
                {
                    t: n
                } = ie(),
                o = D(),
                A = oe(),
                {
                    minDate: i,
                    maxDate: g
                } = wy(),
                d = localStorage.getItem("language"),
                {
                    value: v
                } = hy({
                    status: 3
                });
            let u = D(`${v[0]}${n("year")}${v[1]}${n("month")}`);
            const p = ue({
                startDate: pe(i).format("YYYY-MM-DD HH:mm:ss"),
                endDate: pe(g).format("YYYY-MM-DD HH:mm:ss")
            });
            p.startDate = `${v[0]}-${v[1]}-01 00:00:00`;
            const w = new Date(v[0], v[1], 0).getDate();
            p.endDate = `${v[0]}-${v[1]}-${w} 23:59:59`;
            const b = ue({
                    show: !1,
                    actions: [{
                        name: n("pointsAllRecords"),
                        value: -1
                    }, {
                        name: n("pointsBets"),
                        value: 0
                    }, {
                        name: n("pointsRedeem"),
                        value: 3
                    }, {
                        name: n("pointsCanceled"),
                        value: 5
                    }, {
                        name: n("wealName1"),
                        value: 6
                    }, {
                        name: n("wealName2"),
                        value: 7
                    }],
                    selected: {
                        name: n("pointsAllRecords"),
                        value: -1
                    }
                }),
                C = M(() => B.value.filter(V => V.type !== 3).reduce((V, P) => V + P.integral, 0)),
                R = M(() => B.value.filter(V => V.type === 3).reduce((V, P) => V + P.integral, 0)),
                B = D([]);

            function h() {
                A.back()
            }
            const y = D(v);

            function f(V, P) {
                if (V === "year") switch (d) {
                    case "vi":
                        P.text = n("year") + " " + P.text;
                        break;
                    case "en":
                        P.text = n("year") + " " + P.text;
                        break;
                    default:
                        P.text += n("year")
                }
                if (V === "month") switch (d) {
                    case "vi":
                        P.text = n("month") + " " + P.text;
                        break;
                    case "en":
                        P.text = n("month") + " " + P.text;
                        break;
                    default:
                        P.text += n("month")
                }
                return P
            }
            const Q = () => {
                    s.value = !1
                },
                G = ({
                    selectedOptions: V
                }) => {
                    s.value = !1;
                    let [{
                        text: P
                    }, {
                        text: W
                    }] = V;
                    P.slice(0, -1), W.slice(0, -1), W.startsWith("0") && (W = W.replace("0", "")), u.value = P + W;
                    const L = new Date(new Date().getFullYear(), V[1].value, 0).getDate();
                    p.startDate = `${V[0].value}-${V[1].value}-01 00:00:00`, p.endDate = `${V[0].value}-${V[1].value}-${L} 23:59:59`, T.startDate = p.startDate, T.endDate = p.endDate, o.value.resetRefresh()
                };

            function se() {
                b.show = !0
            }

            function F(V) {
                b.selected = V, T.type = V.value, b.show = !1, o.value.resetRefresh()
            }

            function S(V) {
                const L = b.actions.filter(k => k.value === V).map(k => k.name)[0];
                return L ? L.replace(/[\[\]"]/g, "") : ""
            }
            const T = ue({
                type: -1,
                startDate: p.startDate,
                endDate: p.endDate
            });
            return le(() => {
                o.value.resetRefresh()
            }), (V, P) => {
                const W = N("NavBar"),
                    L = N("van-date-picker"),
                    I = N("van-popup"),
                    k = N("van-action-sheet"),
                    ne = he("lazy");
                return _(), m(Y, null, [t("div", oS, [U(W, {
                    title: l(n)("pointsRecord"),
                    "left-arrow": "",
                    onClickLeft: h
                }, {
                    right: X(() => [t("div", AS, [t("div", {
                        class: "btn-filter",
                        onClick: se
                    }, a(b.selected.name), 1)])]),
                    _: 1
                }, 8, ["title"]), t("div", iS, [t("div", lS, [t("div", {
                    class: "pointMallRecord__container-header-date",
                    onClick: P[0] || (P[0] = J => s.value = !0)
                }, [t("div", null, a(l(u)), 1), Z(t("img", null, null, 512), [
                    [ne, l(z)("main", "dropDown")]
                ])])]), t("div", rS, [j(a(l(n)("pointsIncome")), 1), t("span", cS, a(C.value.toFixed(2)), 1), j("    " + a(l(n)("payout")), 1), t("span", gS, a(R.value.toFixed(2)), 1)])]), U(Ys, {
                    api: l(d4),
                    list: B.value,
                    "onUpdate:list": P[1] || (P[1] = J => B.value = J),
                    ref_key: "listRef",
                    ref: o,
                    pageQuery: T
                }, {
                    content: X(() => [B.value.length > 0 ? (_(), m("div", dS, [(_(!0), m(Y, null, te(B.value, (J, q) => (_(), m("div", {
                        class: "pointMallRecord__container-list__item",
                        key: q
                    }, [t("div", pS, [t("div", null, a(S(J.type)), 1), t("div", null, a(J.addTime), 1)]), t("div", _S, [t("div", {
                        class: ae({
                            color2fb192: J.integral && J.type !== 3,
                            colorf95959: J.integral && J.type === 3
                        })
                    }, [J.integral && (J.type === 3 || J.type === 4) ? (_(), m("span", uS, "-")) : (_(), m("span", vS, "+")), j(a(J.integral.toFixed(2)), 1)], 2)])]))), 128))])) : K("", !0)]),
                    _: 1
                }, 8, ["api", "list", "pageQuery"])]), U(I, {
                    show: s.value,
                    "onUpdate:show": P[3] || (P[3] = J => s.value = J),
                    round: "",
                    position: "bottom"
                }, {
                    default: X(() => [U(L, {
                        modelValue: y.value,
                        "onUpdate:modelValue": P[2] || (P[2] = J => y.value = J),
                        title: l(n)("pickDate"),
                        "columns-type": ["year", "month"],
                        formatter: f,
                        onCancel: Q,
                        onConfirm: G
                    }, null, 8, ["modelValue", "title"])]),
                    _: 1
                }, 8, ["show"]), U(k, {
                    show: b.show,
                    "onUpdate:show": P[4] || (P[4] = J => b.show = J),
                    actions: b.actions,
                    onSelect: F
                }, null, 8, ["show", "actions"])], 64)
            }
        }
    });
const hS = ee(mS, [
        ["__scopeId", "data-v-0c1ef9cb"]
    ]),
    wS = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: hS
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    bS = {
        class: "progress__container"
    },
    CS = He('<div class="progress__container-content" data-v-37cfd3b0><div class="progress__container-content__left" data-v-37cfd3b0><div class="progress__container-content__left-content" data-v-37cfd3b0></div></div><div class="progress__container-content__right" data-v-37cfd3b0><div class="progress__container-content__right-content" data-v-37cfd3b0></div></div></div>', 1),
    yS = [CS],
    fS = $({
        __name: "CircleProgress",
        props: {
            color: {
                type: String,
                default: "#FF7172"
            },
            percentage: {
                type: [String, Number],
                default: 0
            }
        },
        setup(e) {
            const s = e;
            Cn(d => ({
                ebfdcc16: "rotate(" + (-135 + n.value) + "deg)",
                "3539a9a8": "rotate(" + (-225 + o.value) + "deg)"
            }));
            const n = D(0),
                o = D(0),
                A = D("#FF7172"),
                i = D(0),
                g = D(null);
            return Ce(i, (d, v) => {
                d >= 0 && d <= 50 ? (o.value = d / 50 * 180, n.value = 0) : d > 50 && d <= 100 && (o.value = 180, n.value = (d - 50) / 50 * 180)
            }, {
                immediate: !0
            }), le(() => {
                A.value = s.color, g.value = setInterval(() => {
                    let d = s.percentage;
                    if (d && d > 0) {
                        if (i.value > d) return
                    } else return;
                    i.value += 1
                }, 10)
            }), Tt(() => {
                clearInterval(g.value), g.value = null
            }), (d, v) => (_(), m("div", bS, yS))
        }
    });
const BS = ee(fS, [
        ["__scopeId", "data-v-37cfd3b0"]
    ]),
    RS = {
        class: "redeem__C"
    },
    ES = {
        class: "redeem__C-hero"
    },
    DS = {
        class: "redeem__C-name"
    },
    IS = {
        class: "redeem__C-detail"
    },
    SS = {
        class: "redeem__C-detail__description"
    },
    LS = {
        class: "redeem__C-detail__description-body"
    },
    GS = {
        class: "redeem__C-detail__description-body__left"
    },
    kS = {
        class: "integral"
    },
    US = {
        class: "exchanged"
    },
    MS = {
        class: "tip"
    },
    TS = {
        class: "redeem__C-detail__description-body__right"
    },
    QS = {
        class: "nowrap"
    },
    VS = {
        class: "redeem__C-detail__redeem-content"
    },
    OS = {
        class: "redeem__C-detail__redeem-content__amount"
    },
    PS = {
        class: "num"
    },
    FS = {
        key: 0,
        class: "redeem__C-detail__redeem-insufficient"
    },
    xS = {
        class: "redeem__C-notes"
    },
    NS = {
        key: 0,
        class: "redeem__C-button__left"
    },
    HS = {
        class: "redeem__C-actionSheet"
    },
    YS = {
        class: "redeem__C-actionSheet__note"
    },
    WS = {
        class: "redeem__C-actionSheet__item"
    },
    JS = {
        class: "redeem__C-actionSheet__item-img",
        alt: ""
    },
    KS = {
        class: "redeem__C-actionSheet__item-desc"
    },
    XS = {
        class: "redeem__C-actionSheet__cost"
    },
    jS = {
        key: 0,
        class: "address"
    },
    zS = {
        class: "title"
    },
    ZS = {
        class: "title"
    },
    qS = {
        class: "title"
    },
    $S = {
        key: 1,
        class: "address"
    },
    e9 = {
        class: "title"
    },
    t9 = ["placeholder"],
    s9 = {
        class: "success",
        alt: ""
    },
    n9 = {
        class: "content-box"
    },
    a9 = $({
        __name: "index",
        setup(e) {
            const {
                t: s
            } = ie(), n = [{
                title: s("recipientName"),
                icon: "lotteryReceiver",
                value: "userName",
                placeholder: s("plEnterrecipientName"),
                maxlength: 20
            }, {
                title: s("contactInfo"),
                icon: "lotteryContact",
                value: "phoneNumber",
                placeholder: s("plEntercontactInfo"),
                maxlength: 11
            }, {
                title: s("shippingAddr"),
                icon: "lotteryCity",
                value: "address",
                placeholder: s("plEnterCity"),
                maxlength: 150
            }];
            let o = ue({
                userName: "",
                phoneNumber: "",
                area: "66",
                address: ""
            });
            const A = ve(),
                i = ut(),
                g = D(!1),
                d = oe(),
                v = D(!1),
                u = D(1),
                p = M(() => b.value.stock > 99 ? 99 : b.value.stock);
            D(!1);
            const w = D({}),
                b = D({}),
                C = D(),
                R = M(() => b.value.integral * u.value);

            function B(W) {
                const L = /[\u4e00-\u9fa5]/g;
                return W.replace(L, "")
            }
            const h = M(() => w.value.integral < R.value || b.value.stock === 0 || w.value.integral === void 0 || w.value.integral === 0 || u.value > 99 || !Number.isInteger(u.value));
            M(() => `^(?:[1-9]|[1-9]\\d|${p})$`);
            const y = M(() => {
                const W = b.value.grandTotal / (b.value.stock + b.value.grandTotal) * 100;
                return b.value.stock > 0 ? Math.floor(100 - W).toFixed(0) : 0
            });

            function f(W) {
                b.value.stock !== 0 && (W === 0 ? u.value > 1 && (u.value -= 1) : u.value += 1)
            }
            const Q = W => {
                W === "edit" ? d.push({
                    path: "/activity/pointMall/addAddress",
                    query: { ...C.value,
                        type: "edit"
                    }
                }) : d.push({
                    path: "/activity/pointMall/addAddress",
                    query: {
                        type: "add"
                    }
                })
            };

            function G() {
                d.push({
                    path: "/activity/pointMall/rules"
                })
            }

            function se() {
                d.push({
                    path: "/activity/pointMall/myorders"
                })
            }

            function F() {
                d.back()
            }

            function S(W) {
                let L = "";
                const {
                    name: I,
                    area: k,
                    phone: ne,
                    address: J
                } = W;
                (!I || (I == null ? void 0 : I.trim()) === "") && (L += s("phEnterName"));
                const q = "" + k + ne;
                return (q.length < 10 || q.length > 14) && (L && (L += `
`), L += s("wrongTel")), (!J || (J == null ? void 0 : J.trim()) === "") && (L && (L += `
`), L += s("addressEmpty")), L ? (yn({
                    message: L
                }), !1) : !0
            }
            async function T() {
                var k, ne, J, q;
                const W = i.getRedeemItem,
                    L = {
                        name: C.value ? (k = C.value) == null ? void 0 : k.name : o.userName,
                        address: C.value ? (ne = C.value) == null ? void 0 : ne.address : o.address,
                        phone: C.value ? (J = C.value) == null ? void 0 : J.phone : o.phoneNumber,
                        counts: u.value,
                        area: C.value ? (q = C.value) == null ? void 0 : q.area : o.area.replace("+", ""),
                        productid: W.productID
                    };
                if (!S(L)) return;
                await O(u4(L)) && (be(s("redeemDialogDesc1")), v.value = !1, g.value = !0), P()
            }
            const V = async () => {
                const W = await O(Ms());
                if (W) {
                    let {
                        phone: L,
                        area: I
                    } = W.data;
                    L = L.replace(I, ""), C.value = { ...W.data,
                        phone: L
                    }
                } else C.value = void 0
            };
            async function P() {
                V();
                const W = await Ls({
                    signature: "string"
                });
                A.setUserInfo(W == null ? void 0 : W.data), w.value = A.getUserInfo, b.value = i.getRedeemItem
            }
            return le(async () => {
                P()
            }), (W, L) => {
                const I = N("NavBar"),
                    k = N("van-icon"),
                    ne = N("van-button"),
                    J = N("van-field"),
                    q = N("van-action-sheet"),
                    re = he("lazy");
                return _(), m("div", RS, [U(I, {
                    title: l(s)("productDetails"),
                    "left-arrow": "",
                    onClickLeft: F,
                    "background-color": "#141C27"
                }, null, 8, ["title"]), t("div", ES, [Z(t("img", null, null, 512), [
                    [re, b.value.productImg]
                ])]), t("div", DS, a(b.value.productName), 1), t("div", IS, [t("div", SS, [t("div", LS, [t("div", GS, [t("div", kS, a(b.value.integral), 1), t("div", US, [j(a(l(s)("exchanged")) + "： ", 1), t("span", null, a(b.value.grandTotal), 1)]), t("div", MS, a(l(s)("authenticIdentification")), 1)]), t("div", TS, [t("div", null, [t("span", QS, a(l(s)("goodsLeft")), 1), t("span", null, a(y.value) + "%", 1)]), U(BS, {
                    percentage: y.value
                }, null, 8, ["percentage"])])])]), t("div", {
                    class: ae(["redeem__C-detail__redeem", {
                        active: h.value
                    }])
                }, [t("div", VS, [t("span", null, a(l(s)("exchangeNo")), 1), t("div", OS, [t("div", {
                    onClick: L[0] || (L[0] = x => f(0))
                }, "-"), t("div", PS, a(u.value), 1), t("div", {
                    onClick: L[1] || (L[1] = x => f(1))
                }, "+")])]), w.value.integral < R.value ? (_(), m("div", FS, [t("div", null, [U(k, {
                    name: "info-o"
                }), j(" " + a(l(s)("descRedeem1")) + " " + a(w.value.integral), 1)]), t("div", {
                    onClick: G
                }, [j(a(l(s)("descRedeem2")), 1), U(k, {
                    name: "arrow"
                })])])) : K("", !0)], 2)]), t("div", xS, [t("h1", null, a(l(s)("descRedeem3")), 1), t("li", null, "• " + a(l(s)("descRedeem4")), 1), t("li", null, "• " + a(l(s)("descRedeem5")), 1), t("li", null, "• " + a(l(s)("descRedeem6")), 1), t("li", null, "• " + a(l(s)("descRedeem7")), 1)]), t("div", {
                    class: ae(["redeem__C-button", {
                        actionSheetShow: v.value
                    }])
                }, [v.value ? (_(), m("div", {
                    key: 1,
                    class: "redeem__C-button__cancel",
                    onClick: L[2] || (L[2] = x => v.value = !1)
                }, a(l(s)("cancel")), 1)) : (_(), m("div", NS, [t("div", null, a(l(s)("consumptionPoints")), 1), t("div", null, a(R.value), 1)])), t("div", {
                    class: ae(["redeem__C-button__right", {
                        disabled: h.value
                    }])
                }, [v.value ? (_(), m("span", {
                    key: 1,
                    onClick: T
                }, a(l(s)("exchange")), 1)) : (_(), m("span", {
                    key: 0,
                    onClick: L[3] || (L[3] = x => v.value = !0)
                }, a(l(s)("exchange")), 1))], 2)], 2), U(q, {
                    show: v.value,
                    "onUpdate:show": L[11] || (L[11] = x => v.value = x),
                    "z-index": "2000",
                    "close-on-click-overlay": !0,
                    closeable: !1,
                    title: l(s)("exchange")
                }, {
                    default: X(() => [t("div", HS, [t("div", YS, a(l(s)("descRedeem8")), 1), t("div", WS, [Z(t("img", JS, null, 512), [
                        [re, b.value.productImg]
                    ]), t("p", KS, a(b.value.productName), 1)]), t("div", XS, [j(a(l(s)("comsumption")) + " ", 1), t("span", null, a(R.value), 1), j(a(l(s)("pointsExchange")), 1)]), C.value ? (_(), m("div", jS, [t("div", zS, [t("span", null, a(l(s)("recipientName")), 1), U(ne, {
                        class: "editbtn",
                        round: "",
                        color: "linear-gradient(226deg, #D12FA6 0%, #FB2936 100%)",
                        onClick: L[4] || (L[4] = x => Q("edit"))
                    }, {
                        default: X(() => [j(a(l(s)("edit")), 1)]),
                        _: 1
                    })]), U(J, {
                        class: "cg-dark text-field",
                        modelValue: C.value.name,
                        "onUpdate:modelValue": L[5] || (L[5] = x => C.value.name = x),
                        readonly: !0
                    }, null, 8, ["modelValue"]), t("div", ZS, a(l(s)("contactInfo")), 1), U(J, {
                        class: "cg-dark text-field",
                        modelValue: C.value.phone,
                        "onUpdate:modelValue": L[7] || (L[7] = x => C.value.phone = x),
                        readonly: !0
                    }, {
                        label: X(() => [U(Mt, {
                            "label-width": "",
                            typeValue: C.value.area,
                            "onUpdate:typeValue": L[6] || (L[6] = x => C.value.area = x),
                            disabled: !0
                        }, null, 8, ["typeValue"])]),
                        _: 1
                    }, 8, ["modelValue"]), t("div", qS, a(l(s)("shippingAddr")), 1), Z(t("textarea", {
                        "onUpdate:modelValue": L[8] || (L[8] = x => C.value.address = x),
                        class: "text-field textarea",
                        readonly: !0
                    }, null, 512), [
                        [Gt, C.value.address]
                    ])])) : (_(), m("div", $S, [(_(), m(Y, null, te(n, (x, H) => (_(), m(Y, {
                        key: H
                    }, [t("div", e9, a(x.title), 1), H === 0 ? (_(), ce(J, {
                        key: 0,
                        class: "cg-dark text-field",
                        modelValue: l(o)[x.value],
                        "onUpdate:modelValue": me => l(o)[x.value] = me,
                        placeholder: x.placeholder,
                        maxlength: x.maxlength,
                        formatter: B
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "maxlength"])) : H === 1 ? (_(), ce(J, {
                        key: 1,
                        class: "cg-dark text-field",
                        modelValue: l(o)[x.value],
                        "onUpdate:modelValue": me => l(o)[x.value] = me,
                        placeholder: x.placeholder,
                        maxlength: x.maxlength,
                        formatter: B
                    }, {
                        label: X(() => [U(Mt, {
                            "label-width": "",
                            typeValue: l(o).area,
                            "onUpdate:typeValue": L[9] || (L[9] = me => l(o).area = me),
                            disabled: !0
                        }, null, 8, ["typeValue"])]),
                        _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue", "placeholder", "maxlength"])) : H === 2 ? Z((_(), m("textarea", {
                        key: 2,
                        "onUpdate:modelValue": L[10] || (L[10] = me => l(o).address = me),
                        class: "text-field textarea",
                        placeholder: l(s)("phEnterDetailedAddr"),
                        maxlength: "150"
                    }, null, 8, t9)), [
                        [Gt, l(o).address]
                    ]) : K("", !0)], 64))), 64))]))])]),
                    _: 1
                }, 8, ["show", "title"]), U(ze, {
                    show: g.value,
                    "onUpdate:show": L[13] || (L[13] = x => g.value = x),
                    confirmText: l(s)("checkOrder"),
                    onConfirm: se,
                    cancelText: l(s)("close")
                }, {
                    header: X(() => [Z(t("img", s9, null, 512), [
                        [re, l(z)("common", "success")]
                    ])]),
                    title: X(() => [t("h1", null, a(l(s)("redeemDialogDesc1")), 1)]),
                    content: X(() => [t("div", n9, [j(a(l(s)("redeemDialogDesc2")) + " ", 1), Z(t("img", {
                        onClick: L[12] || (L[12] = x => g.value = !1),
                        class: "closeIcon",
                        alt: ""
                    }, null, 512), [
                        [re, l(z)("common", "closeGrey")]
                    ])])]),
                    _: 1
                }, 8, ["show", "confirmText", "cancelText"])])
            }
        }
    });
const o9 = ee(a9, [
        ["__scopeId", "data-v-77bc18ac"]
    ]),
    A9 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: o9
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    i9 = e => (Re("data-v-1b91fee1"), e = e(), Ee(), e),
    l9 = {
        class: "pointMall-rule__container"
    },
    r9 = {
        class: "pointMall-rule__container-claimRule"
    },
    c9 = {
        class: "pointMall-rule__container-claimRule__title"
    },
    g9 = {
        class: "pointMall-rule__container-claimRule__body ar-1px-b"
    },
    d9 = i9(() => t("div", null, [t("p", null, "最低奖励 20 积分，随机现金红包")], -1)),
    p9 = {
        class: "pointMall-rule__container-pointRule"
    },
    _9 = {
        class: "pointMall-rule__container-pointRule__title"
    },
    u9 = {
        class: "pointMall-rule__container-pointRule__body"
    },
    v9 = {
        class: "pointRule_titleS"
    },
    m9 = {
        class: "ar-1px-b"
    },
    h9 = $({
        __name: "index",
        setup(e) {
            const {
                t: s
            } = ie(), n = oe(), o = ue([{
                title: s("betAmounts"),
                body: []
            }, {
                title: s("rewordPercent"),
                body: []
            }]), A = async () => {
                const g = await O(h4());
                g && g.data.map(v => (o[0].body.push(v.lotteryAmount + ""), o[1].body.push(v.exchange_Rate * 1e3 * 100 / 1e3 + "%"), v))
            };
            le(() => {
                A()
            });

            function i() {
                n.back()
            }
            return (g, d) => {
                const v = N("NavBar"),
                    u = N("van-icon");
                return _(), m("div", l9, [U(v, {
                    title: l(s)("pointsRule"),
                    "left-arrow": "",
                    onClickLeft: i,
                    ifleftTitle: !0
                }, null, 8, ["title"]), t("div", r9, [t("div", c9, "1." + a(l(s)("claimPoints")), 1), t("div", g9, [t("div", null, a(l(s)("descRules1")), 1), d9, t("div", {
                    onClick: d[0] || (d[0] = p => l(n).push({
                        path: "/main/InvitationBonus"
                    }))
                }, [t("span", null, a(l(s)("toClaim")), 1), U(u, {
                    name: "arrow-up"
                })])])]), t("div", p9, [t("div", _9, "2." + a(l(s)("bonusPoints")), 1), t("div", u9, [t("div", v9, a(l(s)("descRules2")), 1), t("div", null, [(_(!0), m(Y, null, te(o, (p, w) => (_(), m("div", {
                    key: w
                }, [t("p", m9, a(p.title), 1), (_(!0), m(Y, null, te(p.body, b => (_(), m("li", {
                    class: "ar-1px-b",
                    key: b
                }, a(b), 1))), 128))]))), 128))]), t("div", {
                    onClick: d[1] || (d[1] = p => l(n).push({
                        path: "/"
                    }))
                }, [t("span", null, a(l(s)("goBetting")), 1), U(u, {
                    name: "arrow-up"
                })])])])])
            }
        }
    });
const w9 = ee(h9, [
        ["__scopeId", "data-v-1b91fee1"]
    ]),
    b9 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: w9
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    C9 = e => (Re("data-v-819e4a40"), e = e(), Ee(), e),
    y9 = {
        class: "turntable-detail"
    },
    f9 = {
        class: "turntable-detail-wrap"
    },
    B9 = {
        class: "turntable-detail-hero"
    },
    R9 = {
        class: "turntable-detail-hero__wrapper"
    },
    E9 = {
        class: "turntable-detail-hero__wrapper-titlebox"
    },
    D9 = {
        class: "turntable-detail-hero__wrapper-title"
    },
    I9 = {
        class: "turntable-detail-hero__wrapper-title"
    },
    S9 = {
        class: "turntable-detail-hero__wrapper-title"
    },
    L9 = {
        class: "targetAmount"
    },
    G9 = {
        class: "rotateNum"
    },
    k9 = C9(() => t("div", null, "00:00-23:59", -1)),
    U9 = {
        class: "turntable-detail-tips"
    },
    M9 = ["innerHTML"],
    T9 = $({
        __name: "index",
        setup(e) {
            const {
                t: s
            } = ie(), {
                getTurntablInfo: n,
                store: o,
                onClick: A
            } = Jt(), i = D([s("turntableRule2"), s("turntableRule3"), s("turntableRule4"), s("turntableRule5")]), g = {
                1: s("singleDeposit"),
                2: s("cumulativeDeposits")
            }, d = M(() => o.taskList[o.taskList.length - 1]);
            return le(() => {
                n()
            }), (v, u) => {
                const p = N("NavBar");
                return _(), m("div", y9, [U(p, {
                    title: v.$t("activityDestitle"),
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: l(A)
                }, null, 8, ["title", "onClickLeft"]), t("div", f9, [t("div", B9, [t("div", R9, [t("div", E9, [t("div", D9, a(v.$t("turntableTask")), 1), t("div", I9, a(v.$t("turntableCount")), 1), t("div", S9, a(v.$t("turntableTime")), 1)]), t("ul", null, [(_(!0), m(Y, null, te(l(o).taskList, (w, b) => (_(), m("li", {
                    key: b
                }, [t("div", null, [t("p", L9, a(l(Ae)(w.targetAmount)), 1), t("p", null, a(g[w.taskType]) + a(v.$t("amount")), 1)]), t("div", G9, "+" + a(w.rotateNum), 1), k9]))), 128))])])])]), U(Ws, {
                    name: v.$t("rule"),
                    render: "html",
                    tiplist: i.value
                }, {
                    default: X(() => [t("div", U9, [t("p", null, a(v.$t("example")) + "：", 1), d.value ? (_(), m("p", {
                        key: 0,
                        innerHTML: v.$t("turntableExample", [l(Ae)(d.value.targetAmount), d.value.rotateNum])
                    }, null, 8, M9)) : K("", !0)])]),
                    _: 1
                }, 8, ["name", "tiplist"])])
            }
        }
    });
const Q9 = ee(T9, [
        ["__scopeId", "data-v-819e4a40"]
    ]),
    V9 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Q9
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    O9 = e => (Re("data-v-78dff7f8"), e = e(), Ee(), e),
    P9 = {
        class: "turntable-pointRule"
    },
    F9 = {
        class: "turntable-pointRule-wrap"
    },
    x9 = {
        class: "turntable-pointRule__body"
    },
    N9 = {
        class: "turntable-pointRule__title"
    },
    H9 = O9(() => t("span", null, [t("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "28",
        viewBox: "0 0 24 28",
        fill: "none"
    }, [t("path", {
        d: "M23 12.2679C24.3333 13.0378 24.3333 14.9622 23 15.732L3.5 26.9904C2.16666 27.7602 0.499999 26.7979 0.499999 25.2583L0.5 2.74167C0.5 1.20207 2.16667 0.239817 3.5 1.00962L23 12.2679Z",
        fill: "white"
    })])], -1)),
    Y9 = {
        class: "turntable-pointRule__body"
    },
    W9 = {
        class: "turntable-pointRule__title"
    },
    J9 = {
        class: "turntable-tips"
    },
    K9 = {
        class: "turntable-pointRule__body"
    },
    X9 = {
        class: "turntable-pointRule__title"
    },
    j9 = ["innerHTML"],
    z9 = {
        key: 0
    },
    Z9 = $({
        __name: "index",
        setup(e) {
            const {
                getTurntablInfo: s,
                store: n,
                onClick: o,
                bindingTypes: A
            } = Jt();
            return le(() => {
                s()
            }), (i, g) => {
                const d = N("NavBar");
                return _(), m("div", P9, [U(d, {
                    title: i.$t("activityIntroduce"),
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: l(o)
                }, null, 8, ["title", "onClickLeft"]), t("div", F9, [t("div", x9, [t("div", N9, [H9, t("span", null, a(i.$t("turntableActivityTime")), 1)]), t("p", null, a(i.$t("turntableStart")), 1)]), t("div", Y9, [t("div", W9, a(i.$t("validityPeriod")), 1), t("p", null, a(i.$t("officialNotice")), 1)]), t("div", J9, a(i.$t("turntableRule")) + "。", 1), t("div", K9, [t("div", X9, a(i.$t("turntableJoinRule")), 1), t("p", {
                    innerHTML: i.$t("turntableSatisfy", [l(n).vipRating.join("、")])
                }, null, 8, j9), [0, -1].includes(l(n).bindingType) ? K("", !0) : (_(), m("p", z9, [j(a(i.$t("turntableBind")) + " ", 1), t("span", null, a(l(A)[l(n).bindingType] || ""), 1)])), t("p", null, a(i.$t("turntablePrize")), 1)])])])
            }
        }
    });
const q9 = ee(Z9, [
        ["__scopeId", "data-v-78dff7f8"]
    ]),
    $9 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: q9
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ht = e => (Re("data-v-a0f8c0fe"), e = e(), Ee(), e),
    eL = {
        class: "turntable-introduce"
    },
    tL = ht(() => t("div", {
        class: "promotion-box__splitBorder"
    }, [t("span")], -1)),
    sL = ht(() => t("div", {
        class: "promotion-box__borderTopStyle"
    }, [t("span"), t("span")], -1)),
    nL = ht(() => t("div", {
        class: "promotion-box__titleLeft"
    }, null, -1)),
    aL = {
        class: "promotion-title"
    },
    oL = ht(() => t("div", {
        class: "promotion-box__titleRight"
    }, null, -1)),
    AL = {
        class: "promotion-txt"
    },
    iL = $({
        __name: "index",
        setup(e) {
            const s = oe(),
                {
                    t: n
                } = ie(),
                o = D([{
                    title: n("introduceTitle"),
                    content: n("introduceContent")
                }, {
                    title: n("introduceTitle2"),
                    content: n("introduceContent2")
                }, {
                    title: n("introduceTitle3"),
                    content: n("introduceContent3")
                }]);
            return (A, i) => {
                const g = N("NavBar");
                return _(), m(Y, null, [U(g, {
                    title: A.$t("firstSaveRule"),
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: i[0] || (i[0] = d => l(s).go(-1))
                }, null, 8, ["title"]), t("div", eL, [(_(!0), m(Y, null, te(o.value, (d, v) => (_(), m("div", {
                    class: "promotion-box",
                    key: v
                }, [tL, sL, nL, t("div", aL, "0" + a(v + 1), 1), oL, t("div", AL, [t("h3", null, a(d.title), 1), t("p", null, a(d.content), 1)])]))), 128))])], 64)
            }
        }
    });
const lL = ee(iL, [
        ["__scopeId", "data-v-a0f8c0fe"]
    ]),
    rL = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: lL
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    vy as $, O as A, UG as B, E as C, ze as D, lG as E, c as F, ve as G, r as H, YL as I, JL as J, df as K, Oe as L, wM as M, Ik as N, bM as O, CM as P, yM as Q, fM as R, nt as S, BM as T, RM as U, EM as V, DM as W, OL as X, ke as Y, OM as Z, ee as _, vt as a, rk as a$, XU as a0, jU as a1, zU as a2, of as a3, ZU as a4, qU as a5, JU as a6, KU as a7, $U as a8, IU as a9, qL as aA, ZL as aB, zL as aC, tG as aD, oM as aE, AM as aF, sM as aG, nM as aH, dM as aI, EU as aJ, RU as aK, kU as aL, LU as aM, TU as aN, UU as aO, OU as aP, MU as aQ, uM as aR, nG as aS, jL as aT, tf as aU, ct as aV, UL as aW, tB as aX, Df as aY, my as aZ, _s as a_, YU as aa, DU as ab, QU as ac, AG as ad, GU as ae, SU as af, NU as ag, xU as ah, HU as ai, PU as aj, FU as ak, WU as al, VU as am, aM as an, iM as ao, VL as ap, rM as aq, eM as ar, tM as as, lM as at, cM as au, gM as av, pM as aw, _M as ax, $L as ay, eG as az, UM as b, SG as b$, TM as b0, YG as b1, QM as b2, VM as b3, Nt as b4, Qs as b5, Yt as b6, tt as b7, Wt as b8, es as b9, ik as bA, ok as bB, mG as bC, vG as bD, pk as bE, _k as bF, Ys as bG, Kt as bH, LG as bI, ek as bJ, tk as bK, kM as bL, wk as bM, TG as bN, xG as bO, VG as bP, PG as bQ, WL as bR, FG as bS, OG as bT, LM as bU, bG as bV, Us as bW, nk as bX, ak as bY, mk as bZ, hk as b_, Vy as ba, Ef as bb, Ny as bc, dG as bd, Mt as be, EG as bf, sG as bg, wG as bh, hU as bi, uG as bj, QG as bk, gG as bl, iG as bm, _G as bn, hy as bo, HG as bp, lk as bq, HL as br, hG as bs, ck as bt, ZG as bu, gk as bv, dk as bw, Ak as bx, NL as by, sk as bz, Ok as c, Pk as c$, IG as c0, uk as c1, vk as c2, fG as c3, yG as c4, pG as c5, cG as c6, XL as c7, BG as c8, NG as c9, yU as cA, bU as cB, CU as cC, fU as cD, wU as cE, BU as cF, KL as cG, bk as cH, Ck as cI, Yk as cJ, Jk as cK, Zk as cL, pf as cM, rU as cN, _U as cO, aG as cP, vU as cQ, Wk as cR, jk as cS, Xk as cT, Nk as cU, dU as cV, gU as cW, xk as cX, Kk as cY, cU as cZ, pU as c_, xy as ca, CG as cb, WG as cc, Se as cd, JG as ce, vM as cf, wy as cg, KG as ch, qG as ci, DG as cj, ML as ck, Vs as cl, XG as cm, zG as cn, MM as co, jG as cp, $G as cq, IL as cr, LL as cs, SL as ct, RG as cu, GL as cv, kL as cw, IM as cx, SM as cy, mM as cz, uU as d, mU as d0, Hk as d1, Fk as d2, fk as d3, yk as d4, cs as d5, oG as d6, Tk as d7, PL as d8, Qk as d9, uB as dA, TL as dB, QL as dC, xL as dD, FL as dE, rG as dF, Rk as da, eU as db, GM as dc, Vk as dd, Ek as de, Bk as df, zk as dg, Gk as dh, kk as di, lU as dj, Lk as dk, Sk as dl, Mk as dm, $k as dn, qk as dp, iU as dq, Uk as dr, nU as ds, tU as dt, sU as du, AU as dv, oU as dw, hM as dx, aU as dy, Ye as dz, uf as e, Dk as f, z as g, hs as h, DL as i, iy as j, Ge as k, $f as l, gt as m, Mf as n, Ae as o, _t as p, ks as q, Fe as r, by as s, Ps as t, qf as u, GG as v, Ft as w, MG as x, Cs as y, kG as z
};