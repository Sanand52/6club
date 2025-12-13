var tn = Object.defineProperty;
var sn = (e, s, n) => (s in e ? tn(e, s, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[s] = n));
var qt = (e, s, n) => (sn(e, typeof s != "symbol" ? s + "" : s, n), n);
import { r as S, j as nn, k as De, l as an, m as pe, n as An, o as on, p as Me, q as ln, t as cn, u as et, v as dt, w as ce, x as mt, y as gn, z as Vt, A as rn, B as Ie, C as Be, D as l, E as ve, F as Q, G as ie, H as ms, I as Ot, J as Ce, K as ae, M as He, N as dn, O as pn, P as Pe, Q as _n, R as un, S as $t, T as mn, U as vn, V as hn, W as lt, X as q, Y as _, Z as m, _ as t, $ as Ge, a0 as a, a1 as H, a2 as x, a3 as _e, a4 as Y, a5 as se, a6 as U, a7 as j, a8 as K, a9 as oe, aa as P, ab as wn, ac as be, ad as bn, ae as de, af as fe, ag as Re, ah as es, L as Cn, ai as vs, aj as hs, ak as ws, al as bs, am as Ye, an as Bn, ao as xe, ap as yn, aq as fn, ar as Rn } from "./modules-aa8ffe67.js";
import { s as En } from "./native/index-3d731397.js";
import { e as In } from "./en-53bf8069.js";
import { r as Sn } from "./rus-ecb14220.js";
import { v as Dn } from "./vi-60d1c3eb.js";
import { i as Gn } from "./id-16b6cb52.js";
import { h as Un } from "./hd-c5b1d7e8.js";
import { t as ts } from "./tha-330057b2.js";
import { m as Mn } from "./md-e8a5e3b0.js";
import { b as Ln } from "./bra-38f5b166.js";
import { m as kn } from "./my-32fb9d60.js";
import { b as Tn } from "./bdt-d8f19d0c.js";
import { z as Qn } from "./zh-7d334abd.js";
import { p as Vn } from "./pak-dbcb2394.js";
import { a as On } from "./ar-78aaffbf.js";
const Nn = "/assets/mp3/di1-0f3d86cb.mp3",
   Fn = "/assets/mp3/di2-ad9aa8fb.mp3",
   xn = "/assets/woff2/bahnschrift-610d57ac.woff2",
   Pn = "/assets/ttf/digitalDreamFat-7e51cfaf.ttf",
   Hn = "/assets/png/electronic_bg-3178ba77.png",
   Yn = "/assets/png/fish_bg-bf0b060b.png",
   Wn = "/assets/png/game_mini_bg-c04fcbbd.png",
   Kn = "/assets/png/hot_bg-cdfcf84a.png",
   Xn = "/assets/png/lottery_bg-6a8872fc.png",
   Jn = "/assets/png/third_bg-dfa325e7.png",
   zn = "/assets/png/chess-9c4d1dff.png",
   jn = "/assets/png/chess_icon-6930b633.png",
   Zn = "/assets/png/fish-a70df76d.png",
   qn = "/assets/png/fish_icon-bee0f4fe.png",
   $n = "/assets/png/flash-eac62fa4.png",
   ea = "/assets/png/flash_icon-4db9e3b4.png",
   ta = "/assets/png/lottery-c0a9176b.png",
   sa = "/assets/png/lottery_icon-7f9c3132.png",
   na = "/assets/png/popular-044514e1.png",
   aa = "/assets/png/popular_icon-6977543a.png",
   Aa = "/assets/png/slot-bf07af03.png",
   oa = "/assets/png/slot_icon-ffc91891.png",
   ia = "/assets/png/sport-ac79bf87.png",
   la = "/assets/png/sport_icon-314ece36.png",
   ca = "/assets/png/video-c9dce622.png",
   ga = "/assets/png/video_icon-f7afb28f.png",
   ra = "/assets/svg/customerIcon-9421b6ab.svg",
   da = "/assets/svg/down-d4e547db.svg",
   pa = "/assets/svg/message-8d1fb933.svg",
   _a = "/assets/png/1-dcdd0031.png",
   ua = "/assets/png/2-0c408958.png",
   ma = "/assets/png/3-f5a58c12.png",
   va = "/assets/png/SignInTop-2fa51663.png",
   ha = "/assets/png/Signed-dd8900d1.png",
   wa = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADcCAMAAABeS10FAAAANlBMVEUAAADy9P/y9f/y9P/v8//y9f/y9f/z9f/y9f/y9f/x9f/z9P/y9f/v9//v7//z9v/z9f/y9P/i0Ek1AAAAEXRSTlMA79+PEM+ffz+vb79fICBvryAXY8EAAAHGSURBVHja7dcLciIxDABR2eP5QiC6/2U3sJVQEHKAVvW7QZfkGTuebdfP3hKrzZ/rFn8aK7jtoS8f7/OmLONd4lFiet/6OV4UGt9/0/N6nrKcecTDnAWdCu/ny5aes6gj7j56FtVG3CxZ1nQfYBY2ag8wc42IsifwpkVsWdoWa5Z2jT1L22ve0h56lHol/dYiizOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkC6+oEtS2vRs7Q59ixtj2uWtsaWpW1R+yvTI2LNwpaIGFnYJb5MWdYSN6PsKeyXuDuyqHN8KbykU/w4ZUFzPIw5yzmNuCm7pVO8OJd6VrQjfrksWcY04p3LUmKKbR3xp23dZ/B/v/X92OLJP4FNsObshU1KAAAAAElFTkSuQmCC",
   ba = "/assets/png/ar-headerBg-27af7ca7.png",
   Ca = "/assets/png/banner-wallet-5c08d2a5.png",
   Ba = "/assets/png/bonus-bg-85440c74.png",
   ya = "/assets/png/box-de13019b.png",
   fa = "/assets/png/calendar-e3cefc2e.png",
   Ra = "/assets/png/coin-bf31faf3.png",
   Ea = "/assets/png/day7Bg-d7c942bc.png",
   Ia = "/assets/png/day7BgActive-0b574f89.png",
   Sa = "/assets/png/headerBg-1db58d3b.png",
   Da = "/assets/png/points-bg-f3229da9.png",
   Ga = "/assets/png/record-icon-7443c527.png",
   Ua = "/assets/png/rule-icon-6d69d0e8.png",
   Ma = "/assets/png/signedBg-1cce7434.png",
   La = "/assets/png/DailyCheckInBanner-fb1a15ac.png",
   ka = "/assets/png/DailyTaskBanner-18df10a5.png",
   Ta = "/assets/png/claimRuleBg-98d00852.png",
   Qa = "/assets/png/PointsMallBanner-f06d8fac.png",
   Va = "/assets/png/activityIcon1-67076a48.png",
   Oa = "/assets/png/activityIcon2-65587a73.png",
   Na = "/assets/png/activityIcon3-2aeac4f4.png",
   Fa = "/assets/png/activityIcon4-4b3e3dac.png",
   xa = "/assets/png/activityIcon5-bed22bcc.png",
   Pa = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGRSURBVHgB7ZfPSwJBFMe/b9YSwV+HQCNCI7NL4KV7B7t36tpfEP4JHvoDOkR/gReDLnnPQ39CEEFQpAeJsnRTSy2dadfYLazWrWYzyi8MO8N78z775g3DDAkhFAxBDEOSXPDuwpJdVzngvcUosrE8Hpt5ZOfSdqbQt2qcXw7iqpiC4K9hKkIzMST3VaupX894Zz6Fy/PTPqiuIMqFgVl/PmO9jp1WGkJY13PMk8Tq0QEGgkvrQd5srIHz4IfOtUoCjfoK7GjcfSgmwjljKAQVFa8vh6ntXglchqGrBSTqbFrFEv4AoDd7SmhRE+ZPE8CbtYBW2y19zF4MIgKnxWGu5h85QEbg3wh2QbKoWgFdlID7u/fMacSxIR1M12VQ4cyWr9Slppty78tjcfDorKWv1IyFooD0jqKHJfwc2OcHqVWwk+OBvnJ3dWgSQmt2JH1Xi+mIBg8D7fZbY+shw5wC9zTufm798ikFozs6MocAZkyFwxKMikbf3Fys4810XfVb4g7dRLTEFI/XvIPRv3s7PQHFo3muTyJYoAAAAABJRU5ErkJggg==",
   Ha = "/assets/png/awardImg-36ab6349.png",
   Ya =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK7SURBVHgB7VmBlZswDFU6QUbwCNmgdIJmlNsg2QA6QbJBugG5Ca6dgOsEZAPVPr4fwgcEbMHdvZf/np4TsCV/yTayTfTAA0nYkAKYeWuLnZWfVgx+byEONyuvKJ+tXDebzZU+GrbjmZXcSs3z4dqcrOxIG06pFUPjHS+DDrn/hZW9a4uo+Ppb6NyjzktPW0MagLE3pQPv8sCLxxjjIHm2Ugl9uSQeS8BAWdXzXBo7Jhtr9R6F3iopGn0EEP5aGFAft4GD4m2EBILOnzW8PmLbDdGLGJ7zSUgCgVfOtBLgKE/CzGkbEvCdv1AEvA6KgCBRzYq6IMBRCrq63kARwHDyDsznNAwJ9KGaQiqFANrvhM1saiPJfJDARF1JBKDDL7ElrQ0lAs6h9VAUvtEnh036XAL4C3/3tCY0IgA9fl7WvOB3qM+wCgHoKvuG0acfQgJ/UXaG0VcicEVpaC0oD6HeLPkrReCGcngSc0LuMqDPw5AC7kZUM+TQV/mwa5CYQsB/8VTWWn6/STEUCW63uvVYpUoz5NCpQoLbxO5FPg8n8R+UaltGmwq82uIHNedCxkoZScKgvMmHIYF/KDNShBKJDOXzYA1uznscFkldU4YTt2dJ2VglmboaWgAxJFgkczShcoHKR1oIc0lwcwTpcLqnWw6jRVPXgMTTxHrTFhduU9cjLQh07mnMUfbdYfa8FFGYznoBcPeAwcxpK+dCxWvuglr78nChoLkIFNyfPMrg9ogx3oEIYb02CbHqVJy6nHP3cPfCyx/unsQqqDP/QKJS88p9G3qdFwbkesxY3gwlAl4/CL2LOEgaKwJjpxiDcMiBuxeEBa+x4sF4yV24ZMvdce0xHMJLPoN3OfdfEGa0NtDRM8dfsxapHVe56KaGTEZNzv6dmpMDQ92Lbiduw+T2HL/db5x7PvDAR+I/w7/NbtRCey8AAAAASUVORK5CYII=",
   Wa = "/assets/png/close-32ada670.png",
   Ka = "/assets/png/confirmationReceived-823361d4.png",
   Xa = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEySURBVHgB7ZTBbcIwFIbfs0pREIeOwAh0BDbgiH1pO0InaDpBR2hOIbeqEzBC2KAZoYdKVgnk4YcUCSQTxwZx8neJpS/5Xyy/Z4BIJHILaqXeLvFdiC7ZEKUbpT5DfXBhappXInreSFnSfP7g67tA1wt/Sk0HACsg+jU7nCVFUfn44MKMXiwmAnHFa1u4y9sQ0AMO4sDDB4ilOdepjw8u3IbfD4ePiFiZcy23Uj75+Kugpcz+paRz4+TyTO8dH3NH9MPP7ZkecXmmV3O18MjUo9EHj1CD+J7keerjT34OesKdWyN+EcDENNJLslxmPj6ocDsuJhRqgNm4KNY+3obzjPmCEEKUvOaRGef52scHFeaR4FsJiSrbxeDywYV3AJkJ/B5obQ11+WC0UuklPhKJ3IQ9jzb4kh/4axMAAAAASUVORK5CYII=",
   Ja = "/assets/png/friends-4ef5392a.png",
   za = "/assets/png/giftRedeem-45917887.png",
   ja = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJoSURBVHgB7Zi/ixNREMdn5m0SFIJBbLTaRisDQqqrLo2CcCZqdb8E9S/wKgvJGXOcYnXiH6AWMZa55IL1XWUVsLDxqrOyUTgJ3Jlfb9wVFN3sZncOcVd8n2p5Mzs73/fmzcACGAz/NwhCWo9vZ3l4kLdAndWaM5r5IzG8KVVffRLFqc6fYcQCIZ4mwv6Q8QOl093y3Wc9SRyRADd5HA7mQOus18ZIO+VK/X2UOM1H87Ya0qUJA1GPU+mORASBAD0YFPySd0HWM+3qwqmwGO4mpMZq1v8DOsuHB3kQIBKgWNtTzGmw1EU3wSCH108vZ9wTdEsvyIeIzoEAkQBwk5yGu4NfD4tB5tGXk7NBJxj5Gx5kJeRc2DAf91JuPVyY8a43a4sFYLbD3gfizyBAJABJ7Ubx4xHmN2tLP2u5s37jvAIoRHqX1TsQIG6jHWcnddRktO7AseM9Nexfn1b3P3B2szu32uiCALEAl++zoN+3LeCp9ToCHKQs1efRKBvmh5nMnnQGGJKAbwm1a0sbjHwHpMEIbpXuNV5srS0XmfVv/RyRdq9U6tvus9ORbhLCcxCCjE9Kqy9Xfl3z7UJHSf5v4JeXdJAlDiMgbgIE4D4kEYQ975Ll56cBrxFwEYSMAd5GclSOn4YHIEQzbXvXjjSJwwhro3+Sf/4OWEGG9vpikxkugABkWilV6pthfu215auMegMkjKFVvt+YmAOBAkBjzhkdNkggnYviNmadc47eBgGo4ITfupkDcWMExI0REDdGQNwYAXFjBMSNERA3RkDcBAsgTuafCQ+BAsbMO5AYcN/JpwUGg2GCb+ai1hgUO+IJAAAAAElFTkSuQmCC",
   Za = "/assets/png/present-360b680e.png",
   qa = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGRSURBVHgB7ZfPSwJBFMe/b9YSwV+HQCNCI7NL4KV7B7t36tpfEP4JHvoDOkR/gReDLnnPQ39CEEFQpAeJsnRTSy2dadfYLazWrWYzyi8MO8N78z775g3DDAkhFAxBDEOSXPDuwpJdVzngvcUosrE8Hpt5ZOfSdqbQt2qcXw7iqpiC4K9hKkIzMST3VaupX894Zz6Fy/PTPqiuIMqFgVl/PmO9jp1WGkJY13PMk8Tq0QEGgkvrQd5srIHz4IfOtUoCjfoK7GjcfSgmwjljKAQVFa8vh6ntXglchqGrBSTqbFrFEv4AoDd7SmhRE+ZPE8CbtYBW2y19zF4MIgKnxWGu5h85QEbg3wh2QbKoWgFdlID7u/fMacSxIR1M12VQ4cyWr9Slppty78tjcfDorKWv1IyFooD0jqKHJfwc2OcHqVWwk+OBvnJ3dWgSQmt2JH1Xi+mIBg8D7fZbY+shw5wC9zTufm798ikFozs6MocAZkyFwxKMikbf3Fys4810XfVb4g7dRLTEFI/XvIPRv3s7PQHFo3muTyJYoAAAAABJRU5ErkJggg==",
   $a = "/assets/png/signInBanner-33f86d3f.png",
   eA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAQlBMVEX/amQAAAD6W1r/amT/aWP/a2X7Wlr8YV79Y2D/aWT/ZmP/aGL/Z2D/cGD/YGD/amP8X137X1z/amP/aWP/amT6WVk0pykRAAAAFXRSTlN/AN93UG/3r59nKCAYEBBvv79gX08jNqgRAAAAi0lEQVQY022PWw6EIAxF24o8BXWU/W91ekFIZuL5KDcnoQ9ikMxKFExkAJU/9LDmrraFJssGlZuZLqtakbzYKg7pYop4j9o4kBMZra4+eCIVQasMJZhKoA4sDex0fbv/j6G190NhjVtnKmc3J3Ikbgc6qVY80q7bl9+DyvvZzGUf5ioMBeIdtItJDL5GGwgTyom2RgAAAABJRU5ErkJggg==",
   tA = "/assets/png/taskIcon1-4d9fdca3.png",
   sA =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANeSURBVHgB7ZldUtswEMf/a1Ke0xuYExRO0HCCwgkIJyAJdKZvhLfOAIk5AeEE5QaBE5Ab4BvUQ99IbXUl29gEf8hYDn3wb4b4Q7Kk1Wq1qwVoaWlpaakBoSbi+HgPgbjmls5oMnG0vhmOHlXn08kWamKhLr6w+bcLgVMxGHfLqovRqM8X+Y2tU7+M+gIgmPGPBymE9TQorc6CqithRs7YQ01qC0CO4/GgrtSDwFHRrKZmn+UOzmAAAxqQBHLtl2vh1ew7LgxgRAAdLTQx+6rvKpXFYGAXFHdB1jy6Ogj+Xr3uSZXZILpF4A9RNKgK2ikVQAy+b4OCKd9tq8GtC6IZgk9n5Px0C6sVFYrh8ICrzPChUJ+mlze5pXkFYvCD1f38uPI6WuvBLUKjNUjH5nZZ2zhCbCsvfW7u5Gmik9uetTzlwSYQeO0Gh8pgI0Jj9broyM7fAZFH5+eL6Mnlvzu2M54ca8r97UXv2aaWcmfL3N3yNTAc/Uay5t2020/ZRQ8mWFnvLAQPemMe2Z3E4/4/Z31atI0mBrthHca3KvYhf25s8KpR0eflOlcTg3hbpmHmWFbQ8QMeXVzcqX6kXcjArZndiG3O/xX7EHJUn6V2piEAuUntpfSkTW6l9oonNyFAqhFhcNnkIehrlepVQwm7vAotIIItNjriwewj3F0qoMJzbQwFc+n+/f04FCDn8lbtXgIy9jHsN0KMC5AVx5AzGbNWdli6GxjGvAZykILRdNrnuzsYZG0CvEDiHgZZvwCgLzBIB2tCOSjrieMrsQeDGNdA5mns5KQHenrg3aj80F8R8xqw/nCQBxU7hSH58hp+0ENDmBeAAzOOZHu81nnff7bR8CmuqgAutLyxrCPwPlKxlwYaNpBy7QLGHdHb7qo5Ox0j7iaGqfI/LhqDFuy1Z/JOHWo0tK0lQBzihgeNYBeNCMEemuOol0fL0tpui46U8kBvR49vDtZiwIkqooOq0WPGEFy5bOKZD9tWCYUwjxTWWXBmYifz67xmeYBjLj1NveKONnfL8jR1UT7DD+Spz07e0hULUPFQrw7W1gPerENWdRjPuDALp+jpW8ZZ25XLNi9bV5zYkqnEOCX4MRQOXqKVG03Wu3RKovn0ooDMFd3L/z2k81AtLS0t/x//ACb4T8s751c6AAAAAElFTkSuQmCC",
   nA = "/assets/png/taskIcon3-dd14a0b4.png",
   aA = "/assets/png/taskIcon4-61254c95.png",
   AA = "/assets/png/taskIcon5-de1c9e45.png",
   oA = "/assets/svg/weeklyType1-4e6a518c.svg",
   iA = "/assets/svg/weeklyType10-e2864813.svg",
   lA = "/assets/svg/weeklyType11-2f107626.svg",
   cA = "/assets/svg/weeklyType12-a3ad5631.svg",
   gA = "/assets/svg/weeklyType2-29588ce0.svg",
   rA = "/assets/svg/weeklyType3-83c89d1c.svg",
   dA = "/assets/svg/weeklyType4-b69d1ea6.svg",
   pA = "/assets/svg/weeklyType5-55d8ee4a.svg",
   _A = "/assets/svg/weeklyType6-2b568df7.svg",
   uA = "/assets/svg/weeklyType7-6216de33.svg",
   mA = "/assets/svg/weeklyType8-989628fa.svg",
   vA = "/assets/svg/weeklyType9-50d81e89.svg",
   hA = "/assets/png/bg-ba405365.png",
   wA = "/assets/png/box-119d5324.png",
   bA = "/assets/png/head-bd89a79f.png",
   CA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYBAMAAACDuy0HAAAAJ1BMVEUAAAC4vdC3vM+5vNG4vdC5vNC4vNC4vNC5vdG7vtG3u8+4vtK4vNBm9UTmAAAADHRSTlMAX3Bv38+/QH9PgE+iOTbvAAAAq0lEQVRIx2MYBcMDLDkDBgogNiOELQBiM0HYgchq2c5AgAEOxWcSkBTLuOO3eMoJJE7MBvyK2Y8gcc4Q8tOZUcUjVbExXpUIBZQDJgUSFPMcGFVMC8WCGIrxKDhDSPGZ4aJY5wwKOESK4sNDwYNUV0w4IQ2+xD/iFDMbMFAJKBFUMPiqtlHFg1CxTwF+tZxHkTg9nvgVlxzE0thWIKaxzSCKv2XuwTAKhgUAAE7Fr+UtQsk9AAAAAElFTkSuQmCC",
   BA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAPFBMVEUAAAD////////////////////////////////////////////////////////////////////////////YSWgTAAAAE3RSTlMA30Afv59fEO9/j2CvMM9vUE9w9hbPGQAAAS5JREFUSMfdlW1vwyAMhG1eAoSQJuX//9fBwqqB7VRI0zTt+RTRng5zFwL/DLeaZVJic85WT0m2XMApo6MoZo005nmj8MtGCqaNLMCsEU7WoNq4OY0pkrM9J8VAT3QtkvW1SY7nKIll0VyPnpcgN4x3bY8sG4zgKxltzUg1Xtj34CHlVl3o/I/Omw660+VUh7l5rVag+GYu/KSEMPk2q3bEcphpxx4vdVZ9zYiZ4ZSbyaVPKkvCjFRQuyQNE67oOnYaMm0m3XCSa+H5uw4B5MQSfwnfXbfGjmAXPWmmgAcJJUk2EEFBcsgSfS4cCn4Wp6IaVuKh397N1n1vhG8tuh8/9IWgsdBD9vR79TaXrtwVIw/vxz+cl2QBkefnvvRwh2R0IBMNbqkzDjsGB3+dD0kBI8ViYimIAAAAAElFTkSuQmCC",
   yA = "/assets/png/claimRuleBg-98d00852.png",
   fA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAX98f72+fEL8/fzCAz6+PUNCGCFwAAAHwSURBVEjHtZdZgoMgDEBr2AKK2vtfdiYFzchaaoefUpLXrEb6+IdlrNIenr8LcHXWDJAK5fO6cBJvoVYTmS/dxwWy+iBulsMqaDULClVYpeHAl5ZZH3SkE4lARR6qxqdgFm1RGHCpyuwSfnunfQNf6uxmGlFppkusatdCMZ0dy7lXyfmVlinxSDLbp+U1569cENunSdObNGCOtx+34++CvutYa5iKDEu2q+Oaewc4HwlLSOhh0kE2zARnM2efEPY77e1fw6yU0vkxxijZcJXODy2FYE4JFBQbR/IsDtIuV239nDtSZkgiEkOdQMTht41e53QjCRDz7Th1KV1Pv46hruGzSFdLp6JF5IrnNLP54+Gj++JRoSvsQ8REkbjYzDX2LBHDVXoqCr8FmwG3Gb6bME/Ta7RUNja3/rRJVvr8tD3d3QfDyA8eybNESC6MDQMKFc+dHBhDPKAPv22drQQiOHU4MnrhT4EsCXY+rw59mRo+Ugahv2WBTQa0OA3z23kLOiBz9irRybh1N16xD+PHXu5w81qRZ3Pus8UA3ftXKZcLXPdmazZmyzRMNXYHZvOlZAO3+BIWu4B7h3AlEsFxD/csKLnOl3VLikbMfFmXzpQxvtlWF7LZQVxq26IYnzAlUZmRP2VuRSAOvFaWyG+vHySHO/nzpJ72AAAAAElFTkSuQmCC",
   RA = "/assets/png/coin-cb038c55.png",
   EA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAAZlBMVEUAAAD+Z2f+Z2f/aGj/aGj+aWn+Z2f/aGj/Z2f+aGj9aGj/aGj/cHD/aWn/aWn+Z2f/aGj/aWn+aGj/////7Oz+e3v/9fX/s7P/xsb+lZX+hIT+oaH/vb3/qqr+cnL/4+P/2dn+vb1whnSVAAAAEnRSTlMA728gv8+vQK+fgH8Qrz/PYF9kLee/AAAA/ElEQVQ4y5XU246CMBCA4emBAnJYnRYFXXf1/V/SiYxSeiD6XyiEL81ACuDVyroQiKKoDgpSlRq9qjICioGHgpWkwCghfbHDZLtY5I3EbJInFXki5pkr3EgDVWKm6TjSb0mky4iTtW5eRmXEr7V2QqqFfRIM/yQufFNdUjgWVA1FclASVz75AX4of+dFXC11Qk4AHzg7Du9BWXALse7yXO4WCAThDegG+g+F4HHZ2PHoCx63xpd5Xo0EGm8nnNnccdUBWgzMiOsUgPZNLEywGSYXCuyB0riR+XRjbm9vrsmJhkHeNF+9sJTqQqEVhPVmBXpIpfZm/gTVsoWlB6ylQAcPcY3LAAAAAElFTkSuQmCC",
   IA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE3SURBVHgB7ZU9TsNAEIXfjK2gSAjlCG7TxScgN0goKOjCCTgCyw24AXQUFIQTACeAzq2PYFGAhJQdZv0TWWYDsnEQRb5mvVp73syT/QxsGdp08HxlRsMDXoiVEdoUZMrkwy7HJybdKJDcmIgH/KCXEbqRvr3aOD41Weg7pQHP8+IiL1ZwjxZwgBmEJsN9Xuj20ivgbNFR4YqPj88NWpDcXoAZE0Fh7Vqg7nkQ4FAEcKs+YL4r2PS8SS5Q99x17ornkwhNtZspfkAtPdMGc8+bZ1zeUHjenaj0HF6Btq+ij8pzr8A22QnsBP6RQBUrGgQztydQ/lWH6IlGrKQS2mWvAkTyuFrhyYXfO9vr+Mj0O4Er7ov2IuyYMvySynOvwJ6OpEuK7qw9/ypcktyZiCzPu/zk657/OZ8aKXjhhF7s+wAAAABJRU5ErkJggg==",
   SA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEUAAAD///////////////////////////////////////////////////////////87TQQwAAAAD3RSTlMAfyDv3xBfn8+/j69QPzAXrfL2AAABeElEQVQ4y31TMUvDQBR+LaS2oJLF2YKioyDoJES6iUMiCo6Kbl0qgnNcnHVw79bVxb2CP0B/gv9AmmiTWuSa9y53Ly+BfENy9325+/LuvgcGTv/VU0ejLpRwMlSE9KrEe8rgtsg3PMVwmW8+qgJ+2OdaCRzYjZiTm62XhYnml1UFlyRsVIVdEvyqkFrrJLC/Hhr7HRz0wOIU53sAELIb//wkW0rFAsNBzziAFgpTKGCgTdr4OiwKHWSetPdnUVhB5pcWJiAwpM1fsmckhe+M+iP5RgpLGTWnA3Gl0KAC0OlBCmdYCAlzKYyRQwFNhAUJHl+ZuND8NlxhTeZjc8tywQwLFOeOh0oFDvTg3wgfej6FCz2IvzS/moc1go4IBmzm03toiMQ2fZssxwS9ZxYQuhzQNKD71khMXPKjbJtxRJXyV6HIu+2au3PbO/WhblWFt5rGqW01eJf8PrezL7qG21lsFoswbTO/BgJbeZkzw7NP/1nFxyPbiwtv5V6k9O/RXgAAAABJRU5ErkJggg==",
   DA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAM1BMVEUAAADBxM7Bxc2/v8zCxM2/xMq/v8/CxM7BxM7CxM2/xM2/wszCxM7Dxc/BxszCxc/CxM4Xk94qAAAAEHRSTlMA338gjzAQ78+vYFC/f29PQRq8kwAAAF9JREFUOMvt0TsWgCAQQ9EgDAj4Yf+rtTZncrSHV98qwWq60vALRnCoToKHgp1g3n13gYvBcxspJRO8rLCr8DOeJkPU3i5CtkmnZbGfV3Z8VPWAfBE5LQMNLYvtxmrmHv9iDm3Rgq51AAAAAElFTkSuQmCC",
   GA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEUAAAD3UlL3UFD4UVH5UFD4UlL5UVH4UlL4UVH5UFD0UFD/UFD4UVH3UVH5U1P4UlLzeQBdAAAAD3RSTlMAYCDff+/Pr28/MBC/oFD7iFbYAAAAXElEQVQoz2MYzOChIBQIQfiM/2HgK0SAEy7wGaqlHyZgBBVggelQgJnqDxH4CbeGFyLQgLA4H8T/guSSzSABByQBJvv//7+jOFb5//9sFAGu+M8KqP5ZU8Qw1AAA7wxGmme3UKAAAAAASUVORK5CYII=",
   UA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAYCDff+/Pr28wEL+gUEA/GHhL0AAAAFhJREFUOMvt0DkOgDAMBdHBZCOs9z8tDVIMMZEo6PLaP5Il032yDhVBGY6aR9mMYERL9S7cuOcBgWaxU1n0njCEsjsseSy7Ta4iQrMImVeTVw+wizkK3S9ON+cIxPsc+cAAAAAASUVORK5CYII=",
   MA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFfSURBVHgB7dfhbYMwEAVgGzJARmgnqAPif7JBNki6QTpBu0FGaDpBu0EHQKLpBhnBCwB9lrCKEhOOYJ8UiSdFVsxZ/mRsAUJMmfKfJEl2SqmHIWMiESjAvEsp93Ec/2RZpqjjpAiQBrNtdekoilZ5nh/7xnpfIYup61qXZblA1wd+86qqvikr5XWF2hgAVkfE9KdpekCzEYSV8gbqwthQUV5AfRgXCrfzEWX6vGb0HqJiTFBTN61p5q6aUaAhGEftyVV38y0bifG7qUNhbgKFxAwGhcYMAnFgTEinDBPsOTAkECZ4xQQ7DoyJJGDeuDAmV1cIEyyb9pkD0wtqwbRgwJBBXJhRoBAYkxmlCJNuAFja/4A8oVn7xlBAdu9sgRBnSO+YXhBeol7wdvfrugbMl2/MlLvMxaMDn74K+2Yt+HIqiuIgukD4MvhEwwkyh2dhD8jMcbHzZAWKnk7rXecPsI6tjEMlhl4AAAAASUVORK5CYII=",
   LA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAM1BMVEUAAACJiYmJiYmHh4eKioqFhYWIiIiHh4eIiIiKioqHh4eKioqIiIiJiYmIiIh/f3+IiIgDnFayAAAAEHRSTlMAf++gMDC/IK8/gG+QX08QX/6sYgAAAG1JREFUOMvdz7sOgDAIhWGw1Fbrhfd/WqMOZ4J2MKbpPzF8gUB9VFLdBJ1i3SiUvUewyza46Bkox7zTaRuMqcHIMGZrMOtHhmY9bAO0OAYIxkEwNgrMnF1DWe98Q4mfhHpJ2G7Ha04Rr5kV+r0Lt3cHD2qk98sAAAAASUVORK5CYII=",
   kA = "/assets/png/empty-4ac9a431.png",
   TA = "/assets/png/forbhidden-a43247ed.png",
   QA = "/assets/png/headerBg-f3ff97d4.png",
   VA = "/assets/png/headerBodyBg-d59c1854.png",
   OA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAG1BMVEUAAAD////////////////////////////////rTT7CAAAACHRSTlMA3yCvgJBgX5HUBXUAAABsSURBVDjLYxi8gLEDBQjAJThQJRoQEiAmgjcoJCQ6MEAjWKIDC4BIYAYFLSQYgUEKJoiVQAB6SAjikGBthMqjS2Q0QRloEkwSDtglmJsZsEt4CGGXYOoowC7BiIhaQhKYgH4SmKARdxIdpAAAP71k2/nGsWMAAAAASUVORK5CYII=",
   NA = "/assets/png/iphone14-a3ffcac4.png",
   FA =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAY1BMVEUAAAD/c3P/c3T/c3T/cnT/c3T/cnT/dHX/cHD/c3X/c3T/cnT/cnP/c3X/cnP/c3X/c3T/c3P/c3T/////p6j/fH3/9/f/qKj/1NT/tbX/7u7/7e3/jY7/e3z/3Nz/hYb/jo5kS7ByAAAAEnRSTlMAIN/vj7+fMBBvz19wr0A/f09L1+60AAAC3UlEQVRo3u2a25arIAxAuamotZdE6W3anv//ytOHTn0YhlAQbNe4X12ru4EohMAWFhYW/gJ6V6uuERLuSFEUql5rlhpelwIsiK6tWDLWSoADUa5ZAvS2ARLR8om1lZLgRzmlmhcwkk+tFYxkVK8kvIxoM4/ySMHzhjsiV4lml0aFD3MDUQge6BUAc5grCdHIKqeXNtPe/GYuYSIkD82rrBnm5e3NqQcPGu3tVeDDCdFM+yVZgRd4B7xYRSQWLY5PsAKmFkPh420hRBw/2FykEEs6s0tIIaYzm4OVr5uvePgCKzwo4ANi7yfuDR6o/PIP+B+ixXzFn44e79hjrgICHozNPPTHi82Lt9dnmYOdPVpjBqu3D0jsFiLMo9fOlliVCHOwFxpHHQrgNpvBtVpRf23tSC3K7BAPlBdU4Pq/P+MRHBzROL0gfvNWQHAhHhPPgRM5nYya2ekgMSUxxTGETLKG5GjiLU7GziqugSBVdilIjiJ2l8no5hI3Od8m+n2SkBxpFcMPeoMPDgN4Mlzxga2W9BSf8MkRPNnjExMsNvikB0+O+OQcLN6f8cH14j3UB3xgW53fK7lme50aSE6ReR8wit9rkZhtWdxBcjbvtfWZbbPHSkhMx9g82dWSZbmdYSCeA0EVVrT1hiraToFFG1NOb3SZWjoKc8J7BofYUOYN+5XG4SUDok4rBPudLemNMLcOsZaEN8bMX28K3Kw/OBz3g81sBiK1/E8j7EeKB8SrNeYvKmC6jhkdhjpEHc0He8CBx8YX8BPDjTg2DviIOMQ0JaPQMkwc325bpRC379z+Sdfwyt/iq6dtahrE88TXI3QDHuzPpgcPxCc0ridt1X/G5QQP81tfBJHVJ125iTc3Qd74Wl3peS6S1Z95de5OK/KGO8LLbLNLq+lRzq2WqmLTwn3mutlqloBN6XQLtWHJqNpOWKVlzVlq9KZWRfF9lb3pVL3TbGFhYeEP8B9UTyex1fWvVwAAAABJRU5ErkJggg==",
   xA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEdSURBVHgB7dmxbcJAGIbh7w4KyoyQDJA+ZSaIRJXIKZINknRpEiw8ALABFCCoELAAOzAAjOAFuONAokFwBwLuB/Q9DSD/Mn7NAZINEB1FhQZGWVIxUN+AvUNUKlcWzZf/9o9vquDbOKy+16zCr3taQnwld3qfXp8fVW88Ge8aKvr2YJX9XD6auXkop90ZIuqnb/e6oKda48u9THfN6cB+Vssm9sFvvKd36YYCLh4DpDFAGgOkMUAaA6QxQBoDpDFAGgOkMUDa1QcU9xkaZInFheISksYAaQyQttfP6KG2XY5fXy7HifET2GZ5pt2fH2Lgl1jazQfkkOc9Bm+AMWhAmIFt+bYHb3T3s6TuKj8QuFt4BrkBGuW/Tgqi81kAtq08LC23+8EAAAAASUVORK5CYII=",
   PA =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALJSURBVHgB7ZlNUhsxEIVfSxQJsCE3GG7gnABzA7xIFUUWkBMA+/yMQ7EOOUG8StgNJAfAN4hvkLlBvImdUEgdyTZJKsWMPS3ZuMDfwmNbI1mvuzVSt4EFCx42hIhk6fY61Nq+JrvJoJr7Khk1dQicG6aLxuuPLUQkmoAvx7sHFpQCvD7m1twymrGEBAvwVtd6JXMWr1fp5zxybkz/RSM97yIAhUCUXr2sOnmP67Pt+w7CLuT3EcDnt8/fuUsNcmparb1BAOIQytLdmtL4ighY2K3Gq7M2BIg9QBpBlvsXDRKPJfJAlu6vK331HRGxpvdEsqBlHtC/6ojOSh0CZAL4zwYVDyUbUyiAgh59MceUCSAO2nxijikUgByxsbIxZQLMozaiwx0IEAlopK0ugdqIBIPbjfQshwDxRmZgmoiEEyAeSyzAb/0WeI9AiNCSHiM8YadRs5y6V1HsDuGOue4dIYAgAX4tWLO8BYEIH/fW9LdC84FoGVl2vJsq8J4bMhlza9cSNxsvP50iAlEyMn/1lszSncT5tK5J7zkL+zzhZnftus8dZlzA9lvDe//2QwAB+cBOohQdgNS+C4hulTzX9a0rrT64t4lfxObaNqWP0coCBjmwy6KY+PCW5hzM59byBfCzc2PdobUf15a02nSJ/+FtiT8xnRr7o1nVI5UEDKyu1SUwhdPokNwal51V8MbET6HsxKeQU528Z2Cg7OTZxHn2RB6YgeX/Z2JPjBXg49eVP3zynmC2OBG9p+PWxNgQGpU9EsyeZJKSS6kHRqHzDXeIC6WNslAq9QAtqWilEzFEh6XNRQ3TKJ0Iceet3kbRWij2gLraxnzgSvarhXMpFEAKm5gTdMlcigUwhRRto+IOgYVzKVnEnGB+SIoayp5C8YtXcgrnEvwHx11zrwXELx+K4byopVCAZXtU1nGGuGxPXjdasOC+8xuz5wp8kgUCVwAAAABJRU5ErkJggg==",
   HA = "/assets/png/luckyNumber-9a71df15.png",
   YA =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN3SURBVHgB1Zq9bhNBEMf/u2cFlAIZUdAaiYYqToWEhLAfABJXIFPEPEGSHidO/ABxnoCkAIfKTniAGCFR0MSpqFCOLkggWSDlS7kdZs8+y47j+Hz+uv1JpzvfraX93+zezM6swJAo5V7FIGVCgmYgRIJvRQHBB0VbmtkCZBOhqiAOoVQllduxMQQEBqCUm49GrOlFBWT4ZwzBsEFUVoo2BxEVSAi//YRliVWC++aHhhDYci7VWhBBfQnRw8ey5AYB8xghQQRJvw0/5dOL0rIORi1Cw3MoIy25X1pPZ/z+x5dF9tZfb5CgJUwAQaLwYuX9cs92Nz3Uk1la0/t8GcdkqSrnJJnKlWvdGnQVEiIRHjeK6TpHQiZCE2/06VquFaLnBMIlwiPe6FsHHUNLfymkwDuEGEW0nFopFlrvtQnRfkJ/9hDcS4+LmnLUbKufaRtaIiJXEX4RmihHFm1DrGmRhjWOYBAKKpnK7lT0ddMiDWsYhQXR7LNrEROt4cG+5a72LXWLCDmR8GMoiGm3764QKTEHQ+G+L+izMHlYeUQEYlIvT2E4FwpJXmKHMhTpDyKOw6SYgeFIKZ5JBYrBfKIcHxoRkvQiGvHb8v6jJ3j49CUit6YxDs7+/oH9bQ+/vn/10zzqO/kQe/x8bCI0t+/cc1+cX7SQmp+GkanxifC4PD/13VaSTyE/vnzE2b/fGBeX5yf4yUPLJzY7RcFCqGfLYx6rx/7G69ghzidLzrl+huGQwqHkQL4K0xFUlTq1D9NRqLgLq3I+fWSuYyR7Llt84PoRHmPbMBSlsKvPdYdIUwWYCpHbd1dIKrdV489wBYah6yhebqsZojhw1mAYuhjkXTeF6PwQT/gyDKHVGpq2oNFxlC6o+ApZJgvZrdbQtAnRCpWg0A8xTmJ31Bc7wvjU22KBy82bCCm8ot1MrexsXb3ftWK1m08fIHQ1Eqqy85u97knXhZVyppJ8ClEcRlx6O012e9qjGJrhOuJFCEpwdRGBiqGtlPLpAptuERPAnRPZYs/ctK81eyr7YUmReqM/exgfNf6CLvsRoel7CwcskeNFzAJGiHbM2qf1s4Uj6KaakQjiJWuFjzWvCtUPA25zYkFCLNXLEiKGAHC2wOZjG85J4abJ3IuBhLRS33iGBEjELSlndCr2ymKt1sjY1EjnCYSoDnPj2X95YFpJbnQT6wAAAABJRU5ErkJggg==",
   WA = "/assets/png/notice-70e5599f.png",
   KA = "/assets/png/orderCancelSuccess-88db2a4b.png",
   XA = "/assets/png/tip-f64b7558.png",
   JA = "/assets/png/orderCanceled-24ddf61e.png",
   zA = "/assets/png/orderCanceledImg-7320c80b.png",
   jA = "/assets/png/orderCompleted-9097de24.png",
   ZA = "/assets/png/orderCompletedImg-f55ac1d8.png",
   qA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD+SURBVHgB7dexDsFQFAbgvxgsRMIDeAujF/ACJhajwUZiIJFYJUYLkxfwAkZv4QFIhMWil0o6qtue1mnj/9be3t6/J/fcFiAi0uTYDNrN2p2HyS0AU8FvHfOOmbTG282nATlYeBhnorB4T/317EXQAKsA3kTQE/jibAOkVuYDFCDU6M5RLNUQxf16xmEzhIS4AlEX/763XIWUuAK+/bIXanyzv0IcuIm1MYA2BtDGk9gXV18PS1yB++2EqLxPCSlxBQ7rETRxE2tjAG08BzL/R6aN54A2BtCWeBeKo9MEYQXYhYT+JsAFaswx6KpVANe4g28TJeTiGjMFEVFqPQE4cD81TsJRDwAAAABJRU5ErkJggg==",
   $A = "/assets/png/orderPending-800494a8.png",
   eo = "/assets/png/orderPendingImg-ca97fcb9.png",
   to = "/assets/png/orderSent-1bf577ad.png",
   so = "/assets/png/orderSentImg-37fc0123.png",
   no = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEUAAAD///////////////////////////////////////////////////////////87TQQwAAAAD3RSTlMA3yBfEO+/j38/r59vgFC2OH4VAAAA0klEQVQ4y82QMQ7CMAxFTagEAwwtExPhBrCw0olrZIADcINyg4qTcAS4UoUqCkiYKERy68QTS59keXht7G/oK1ODjProRIEBjRNGA0PVriEE4H8ilQTGxQYt91DsUBDFPI8+pVDHZwxfwvBxI4jJWxBJLcyAYtbZKu3m2JNhyQ9M+JasH3EByuSDDMAWE3C9DSoNtrgoT2qRgS0uLitYVtpVW7hT0i8kkrPdyn7+Ky+26HMEwidnT1Fjw+lwbF2CBSTYSQSMFkSJxLMtRobEB/rNF09VtsbED2iFAAAAAElFTkSuQmCC",
   ao = "/assets/png/plus-c89b9841.png",
   Ao =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMHSURBVHgB7Zm/TxRBFMe/b3Y5yCnRhEoSAzTnH6CNNGJMbIwaC9RY+RdYWlBdQSxMqPwnBBKNgrEyYiONJtqeiTkjYsMZ48HJnbvzfHOowd05btld7jZhP8X9eDs7ed+3M/PezgA5OYcbitpwoTxdKGKopB09Cq1H2FEFaB5EShBzDUo1la+qR7BdPV9e3Ix0X7cGL8vTR+tOYYqZR9FDtFaV42i+6SZkTwGP7t0oOdo9m2ak94M41/K1XrlWfljdo42dx+Wb40qpi8gAruuvXJqZr9iuKZvRDBvlOueQEXzPmTQ+2a5ZBXyHc6Zfw8YGAwUzD23XQgLa0VeqhIxhFhGzEgbtIQFbA0PjyCgFVTgVtIUEeJ43gYyiCCeCNjdoMOMtSnYjcJFBF+SORMONoD7Lqr8sfTW6N6aRoCkkQFka2WBS0/I5uY9kbu9HAsCMk9LLXNe2Wg8HbQqxMc6nAxHFfooJBGSDXEA6RJjAHYgtQCZeBSkhSeo9YhJbABHm5St25HbRkEm8hJjEH0KMNewsfUlE1NrLp3mZiUmyOSAimLCAeIjTNMc7gYiNi4SQxior80qI21HvMU4r4zw48RBMLMCwPxH8WkEtpuG8IRUBBiOCFEYkupc7tmEsSc0jdQ8jLVLNA6yxjI6Tmhri9jJS5gASGb2zWcX51PLGbnqXiZl/4gDIa6F+kwvoNz0ToNIp/Gz9/o/sEteRALKvNjUmeoGEOISNoC0koOXTNyTAOMrtQu3Pf5YMzTSbpOL8iwa1grZQKTE06HzxfX8McRFHpUSekUdRMtlXfq+lVTpoxqegLfQEGr+208mYTBUkLJWD0Ga9GrSFBFwvL7bkFe8rMoY58Lh6/2loflpXIdraWpEdriayAlNTNX68tV2yCjBKXc9bRUbQ7L+yRd+w577gs9lbYx5oqm9nBRJ5d8Bb7XQ6Y+i6sfnk7pVhXSye7vWZgexUrHO93jHy/9ohIkaIUzw25pE3YXawo24CR6WdQJWqyTHr+sfaxoc7D55nZw7m5GSY335HGwmUlPrlAAAAAElFTkSuQmCC",
   oo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAz1BMVEUAAAD/7GH/737/6mD/733/62X/62D/7GD/7nb/73//52D/62H/737/73//737/7GH/733/62H/7GL/733/737/7GP/733/7WD/0UL/737/73//73//7GL/737/62D/73//xC3/62H/737/gQ7/z0H/5lr/gA3/yTf/yDT/fQv9bgL9agD/kRX/egn9bAH9gQv+cgX/4Fz/3FT/uTr/1E3/zj3/myP/oh3/nRr+jRj/7Hn/0kT/vSn+kxv/iRH9awH/6XT/w0H9sjb+syX/qyFBdG+/AAAAIHRSTlMA39+fYCCPf08QEM+fb+/vv7+vgH9fQDDvz7+vn5BAMCJCMlIAAAGASURBVFjD7dPZcoIwFIDhYGUR9717CSBqWyzgvnd7/2cqok5byYEcLjpTh38IcMM3IZOQtKTllGxcrVw807rWeao8xDh3Om/1SOdG569A4Oo6piLoiDqqErjkRYQCTuleqgmX3ZjMpfsavUpilfp1NY68b+gq5LTLdFdP42m8OEKZ0HwEioA0E4RuKQrSPABqUyTUW7AhCQtpLhuqoqERG8qjIZMNCSmUQucMvTtPQPYHBhoOHqEGzgoBzR27D2Q7UwQ0sQzD2A0jeFrW/j249z8R0Mj/6OAciSNrbFCL/TZZP7Obrf75PkqhP4TM9ctp0yTQcDsItZ2hoeDQhnLsBNDE+nXIgtFPAg0ta28El98OQ/9aIM19JriMA7eZnsk+OgeoAkFLJFSAIBcJKRBExygoQ0Cog4IUGKIeAmqQCIi6PU6olCWhavRnHsdCjTKNHAkn05M6cTUJM5ViEwk7CenIBEgVUE6egIkCxhFJRDIvU5ZJdKoiXcQnNVWSlqQvRQq5DODZPk0AAAAASUVORK5CYII=",
   io = "/assets/png/recordHeaderBg-f1304499.png",
   lo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAALVBMVEUAAACJiYmJiYmIiIiIiIiIiIiIiIiEhISIiIiJiYmIiIiHh4eHh4eGhoaIiIgIqJ6CAAAADnRSTlMAfz+/3+9fEJ+PbyCvcMD78PYAAABvSURBVCjPYyAFsL0DggsoQiwgoXAUITkHBgbmh8gi3HEKDAxMTwug3ERBQUHhJ4JAEHcQSIgBhd6hAZAqCaASGPBrFAPpZHqMMNROgYEmQi5AhCb0DoiGrtAsEML0Nv2EkCMWIsTuhxB5uoHY5AcAUAZooKGgJB8AAAAASUVORK5CYII=",
   co = "/assets/png/redDiamond-7d6eb86a.png",
   go =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALQSURBVHgBtVdBdtNADJWUkscLGx8hOQG+AekFir3gvTYsCCco7EnrkHZdcwLSBW13zivsQ09AOQG+AV4F6MOjzthJ2sRjZ+wkf5HY1sxIoxnpSwiGCDzHAmo4NYIXzGADYBOArVSKkXwOEeE2FnADYjJyvVFksi6uGhB4+00iPASk7oNCg4URhvF/0Xe9q7BwHOQqdqwaPTtm5HewBpDR3zv68j5XDlrlctc1GsvHJmwGoYjFrs4blFF+2rE3rFwh2VBw+speFix4YAs7X0bGEwse2LJyhdQTKqKm2Jk9XH98fcbATd0sAfwJGG+hDJDbBPhGZ4S63PI/uZjJEUxd/0u7jgynvQ8Xb6ECgkHHly4+1MnkUbTUUSRHgDt0rF+CQxXLUBVx3ZO/+oSEmIQ3Bl7Xotrdb90YAdB3excerIGg3/GIQLfBSMSTFgHdOfqpHK6rPF2m7oPeC0lqJ5S5XTdPMFd3/SO43jASLLSZUPEKyVRpZ0Vy90dXQ9gQpmtlvKBITV5CXeihEZOVA4aaj00VBTqGs7+dHOhiuBK+DjoyFFnjabAob1LMOAwG+21YE8HgwJHR5OfJlQFRvpACHYEYK1fEBvS5YEhEOWczg0XiyVhlSiirXGVXAcGKIiYkIcRPKIaVEoi5Eaasqko4yRf4HVajaWpEGUqPhbghEPURFNyDJSOCx1SaVe5YpShd/B1RkqkEnIMZZLXUGOcZoWSmyhXLqso5DUMWPpjDru00zpY/Xp901G03jpgZy85LsiLu1iEtuydJjlcGybTaNZ2rChy3d5nS8dyAhJb//Ugbjm2Cw5e9y9bsbZ4Jk7sQ864aAFsDh6mOByykYlUiCUJ3O0ZwsvZyb1DQmOB4c8eR7lzXmBT2hmUvpg5JRR3/8fKaVaPmFGro5ZTYeZC5hc9lxeFXbk6zhqj2/Kkj46+NgM8xTTizhBSxIpYK7fk9m+82M8hBahcAAAAASUVORK5CYII=",
   ro = "/assets/png/redeemdBg-f3207fa8.png",
   po = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAclBMVEUAAAD/62D/62D/7GH/7GH/7GH/62H/7GH/62H/7GH/72D/52D/62H/62D/7GD/6WD/6mH/62H/gQ79agD/fgz/0Uz/szb+cQP+ykj9bAH/5Fz+egr/1E//tjj/iBP/3lb/wD/+qzD/pyz+lSD/jhj/rjGjMz3bAAAAEXRSTlMAjxDv33+/r59PICDPv1BQz5404poAAAFgSURBVFjD7dfdboJAEIZh9kdA0doPxdblR6V6/7dYExLCtsPCjhy0ynumB0+yQybZDeaeIrkVkVbAZUd0AaBDsZWDzEooNF2ORHeoKV65HYG2w/53+QFtC9epQnSglKgDYd1/vjV8IIR9zgIekON0K/hCoCce+0OCnDT8IUXN+40BYUlAwh+izxZyoIiANAfSBAQOpKaC8M+hqpoGqo2pp4Bq3Ls9DpXNr/IRqHVaiQ+d0VayIdsBzkyouFYZrLJrdWJAgCH+8YfoZug1oeyzm+FCp3xnlRdM6Hz8sDp+MaEy36fdci5krqlVdeIP28r8gc8/Q5NCA+s1ftcU7Ood2fCuaVgV9nr17JomoOgHlO/7a3dtM+J6fEut6F0TIy7sKLLejOvCLhX8k/Tr0bs4oErgXeJ6+A03/KwN4dV70Jdcw6ONNWn+6UTgLIkxJiWSYCi5FBvtMnQkljKYe4a+Achz1don6Ce1AAAAAElFTkSuQmCC",
   _o = "/assets/png/statusBg-219ad07d.png",
   uo = "/assets/png/successfullyParticipatedBg-627114a9.png",
   mo = "/assets/png/successfullyParticipatedBottom-75c3a447.png",
   vo = "/assets/png/successfullyReceived-6890160c.png",
   ho = "/assets/png/ticket-50e7f4ff.png",
   wo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMA3z/vIJ8QX4/Pv29/r3BPMA0sGxsAAAFBSURBVEjHzZTdloMwCISTkF+j1rz/y+45Xd2RBvDsXb+7gjRkBuK+Ez/u+OcUDUbA92GIBSsPbyhIPLOe4cjDlB0SjHglFh7vV7zw+OIuupLwPF7cRZavfQxOVi9XxWhyqnyULbmRY1BbRBNghQX6hOI2MAFWmEBrWGEDE2CFCUyAFSbJ2QWpDsUEZc4OaRPsreMB0g6ASastUps6DqYNUeiYLKO7oGGd1xBs57nhl/w+9fzRJCPOIBU38SJJWII8nFxlYW/3jUwMj8xHAdgR3mkoBSR61HWvvTRn3LumjirJO7JJxkHwHD//p6uj8XqL7wt6st8AusSv+d5TU8c7ucP/WZIgnbpAaSdYsuobF54emYlqP5MzuQ0Vnx0QBg1gIP9T0fC9Mvzg9EOn+Kmd4GwKu/tS3DOxb43GIJ+61PwPLjJO63kYt4wAAAAASUVORK5CYII=",
   bo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJJSURBVHgB7Zc/b9NAGMafu4Q/qhgysCFEEDMiLDAggYGZJkFCrWAgLMxUYmEIOHRFov0EZAEKSKQpM8KMZWrFF3AFYyUigVpA8b3cBaK6F599toOqVn2kKLL93j2/9z3f+Q7Yzeq40476IYdYmuCOWyuBT9QKHJeIWA2g0r9HPmPwAoGPEMKruwu+bZ+JAB33RqVYOFAlkENgDizEQF5AvAvxW8K8WYmPHTGUWeJwhXNWBeONUJZZ9bc6feoCmxJosWcEWHp86ykxNMZgahQjNjf58PnM8JqHHxKje//TfMtjSxw7rH2AvQlw5OhxXLg7j2OVq4mxYwdQ5meu30fx0ITVMjtWgLD52vI7fF15n9jGCkCVMqmcurn/aQk2KoYvSC2bQFkPKp+bHHQ87DynuR++0CsQ+eFYffsE/V8bA5AT56/lMZdJkm8EIIG1qEY/1r9EQmQpu/RYNQKAi0VTQx3i1MWpTGMOTts8RmZKd/bmN/ln/CCFs1ZKZS7LX22+PLmNRw8RAvOI0bASP7+vpzSX2TLm6feKI1Ek2pLrERIgltsPkFZBX7T0eyMVUPs5gfgqZJHcFbWj9orRC1Fw0IU2XfKJ/KjsjQB1t90ToDsYkwSCGdNO2bgU15sLnhyKFnKbo1VvvjZO70Jc41cfPntTV07L4YODzOYv3LiYWIA8EDbmStYno87stMPBnskm5fhI8tX7o4YQFrLeDwzeiYAux0zRnspaBJtnbc2VUp0Nh5IH0jIKvMFBt2UXpQFUsDGnn3p2hf4AAUQILrxtdcYAAAAASUVORK5CYII=",
   Co = "/assets/png/bg-495f293b.png",
   Bo = "/assets/png/btn-779fac98.png",
   yo = "/assets/png/money-61d676bd.png",
   fo = "/assets/png/turntable-b345db9e.png",
   Ro = "/assets/png/zp-624cd5c8.png",
   Eo = "/assets/svg/active-0d7a3379.svg",
   Io = "/assets/svg/active_b-4a60eef5.svg",
   So = "/assets/png/supportService-17e09920.png",
   Do = "/assets/png/ar_wallet-62a42389.png",
   Go = "/assets/png/close-84ce5e6a.png",
   Uo = "/assets/png/sit-9e9718ff.png",
   Mo = "/assets/png/sit-9e9718ff.png",
   Lo = "/assets/png/sit@192-d3719cf1.png",
   ko = "/assets/png/sit@192-d3719cf1.png",
   To = "/assets/png/sit-9e9718ff.png",
   Qo = "/assets/png/sit@192-d3719cf1.png",
   Vo = "/assets/png/sit@192-d3719cf1.png",
   Oo = "/assets/png/downloadPWA66-d0d63439.png",
   No = "/assets/png/downloadPWAar006-9de82932.png",
   Fo = "/assets/png/downloadPWAbigmumbai-950e12c9.png",
   xo = "/assets/png/downloadPWAokwin-19b71141.png",
   Po = "/assets/png/downloadPWApoppg-0694a49e.png",
   Ho = "/assets/png/downloadPWAsit-bb6994f6.png",
   Yo = "/assets/png/downloadPWAyjlottery-fb0d02e2.png",
   Wo = "/assets/png/missingviebg-f283c7c1.png",
   Ko = "/assets/png/missningBg-c1f02bcd.png",
   Xo = "/assets/png/missningLBg-ca049a47.png",
   Jo = "/assets/png/newmissingbg-b08ac203.png",
   zo = "/assets/png/newmissingviebg-0d3c6b98.png",
   jo = "/assets/svg/rulehead-55c095f9.svg",
   Zo =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMkSURBVHgB7VhdbtpAEJ5dpwiiPNAT1D1ByAlKbuA8BaxIgROkNyA5QZMTQF8gb6EngJwgcAP3BjxU4q/e7TfGKKjYZvkLfuCTLJB3Z/z5m/Xs7BAdcUS6IWhL6FLJnkpZJK3PNZENh/ngPtEA/z0Sou8r1c09P3u0BTYiqh0n//f09E5rXQShookNHtQD6adNSa9NdOK6dyB3DwXzMw+ClWsrrfsa/0kpj29LIfKBwkJ8I36Z+XyojHsPmWaz8b/vIaIjpXyDAA/ZVutxI6LsxBKiPlcQhl0fDqFO19C+AvvbhQh4eLnLRXWnpVJRCdFh35lW63LRXpo85I/rFqBQJ3xI8AB2ZEqSgbkNtoFtlX3gstknIlQwsV9JlJX8RNRhxwhzOzMcXqxDMIowvyj7Yp8IsxHZE1oNm9eXIvqZazYrtAOE4b4alssNKHULsi8Q5DLJZqWirB5U/JxrtSq0YwQ+Q2V5/SfNNVGURLs9oD0hk8lUJ+Nxgde/lnKA6EXOM/qY9gnRaAzCDwwJWjtx8w5OlMHLi1NS0pxUEGVwTk4aTw3RIOXxzhaD1BANoPWvuKFUEdVcuMQgXUQTQr+URyfl8g+8mcNb5T7zZyQZVF4oSiLHohTlfdcenZ0ZFQu7xEk2y6H3sF33l8bijCylbPpgcPLHz9eosdg1qt4L3VQglihqxXNKEWKJ6oR99xBISk/54c1NkVKCxDxq+X6NUoJEolwjpkXVeKKzypuk79f5HE8HRnx6kvIprBHtSS5XpwMjMfT++9HWwUlx52SnrlvjhobJ3ESifFqcCnHFdSLSVWVcLvNp0aYtwUtp7Lov2FTu8R1UTGxWVk9nzWZvSsRHWQ+XEzYNKrQhpvg4sZTewvORB99VEzujMo/JBk2DsMMBdeuostYiHBCEjfL9oJnB6599sm8T+6WaanR9/V1YVk0pdRHVdeMeElTl/GrPPAg+4nZx1H3lMk1bVlAaahQ1KNnyctaOdBabalFNsLWJmiBcp0VLSm49GpWDYVPtNTsaPW5S527dyJ2TRiuxgOuLCJXTM+V+47dHO2jkHnFE2vEPNOZ8InMlqBAAAAAASUVORK5CYII=",
   qo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI4SURBVHgB7dzRURNRFIfxczMWQglJBziEMfJkB2IFaAVCBUoFYAc+CWgy0kFCB1SS473ROPh2zuof3Oz3m4HwsJsMHyebkNysGQAAAACgX4ol3Szu3rv5sbntZfYz93ezw8nHyKZXi+Vx8XJhCV78zcuDyWVk2y+L5duRlw+Ws6q3cR69ja1RZuPr+eq7u5+m4+6GcfujtwaZncIT/Huqit37uk7L4eTWBuRmvnzlpU59Ha46ZGf19z+N7Bee4Br3pF2u6119aHGbF9PJ5zZY7edSyuvofplDxLh9O6o3ZAP1YLD2ovukjsHII7AYgcUILEZgMQKLEViMwGIEFiOwGIHFnoW3rC/yGOiAv/B1fnfSvqxH4oeI/8DafPuW07n1BA9yYgQWI7AYgcUILEZgMQKLhQO3hSftywYu2yH8j8aDtWKXNmDZDhwixAgsRmAxAos9+qtpHRc//+F6vnLrIrEI/F9hgsUefYKPDjYT1GmKtpM7m47TH314KkywGIHFCCxGYLHwg1z7HJphtzu0ZxGdnwM/EQ4RYgQWI7AYgcUILEZgMQKL9Wp1JYuf0V0fFz8rZDuEDxF9XPyskO3Ag5wYgcUILEZgMQKLEViMwGIEFiOwGIHFCCwWD1zsvl1cfVvu20C1M7C2y2K2iu4TDuxr/7S58lG52N7QkLTB2pzetloXD7/glVoG+uvkxPvWRf/PgL11O5uOn0c3Th2DN1f8812F8F1kZ7QTU7ufZeICAAAAAProB0QQyfTA95UHAAAAAElFTkSuQmCC",
   $o = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFWSURBVHgB7ZhRToNAEEBn0VQ/+OgR8AZ4BE8gn4X2Q09iPAHeQL/gtz2JHsEj9A+FsOMuCQTbgu0yrCGdl5BsdrKTl8nuZAIAw5wZRRQ95ctlDMQIICSPoldEfKgSC/E2S5JHIIJMtC3ZJCeUdYCARlKIbbOp1npPx4CAwaJtyQLgrt6v1oSyg0R3Jd0k+ahjek0payzaJzmGrJHoMZLUsieL5mEYHytJKWtSUf8UyZpfsjqHDTAI5l2x7zBE/fWd7TvfxSUYINbrLRhiepak4duARamZjOjeY6r6JEAwy7LbIY/GhGyx8BzHeVe99vk6TV/asUMV1T3O+3JdO72uhaqaB4hzJXW/G+M7Sg2LUsOi1BgNJX/wCSNALnqVpjcwAnxHqWFRaqbfni7K0i9WK7BJiegLKQ/GOkXVTBpjWYJN+n4t7olKKTdqeIX/RNV0AwwzMX4AcHnD990jZh4AAAAASUVORK5CYII=",
   ei = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAjCAMAAADlnnmAAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMA3yBggO/PMBCgj79QQG+vkLfRazwAAAC8SURBVDjLtdJLEoJADARQkjAfBlBz/8tqgdqFBkgW9BJeU9PFdFdmznrngL/pK6PfN13i5XVcPTk9k66ZnHPT24t3bsy3mOf88b1zbsxPKeZ7DfnaYp6z6asU2xeC/1nV2PCS7PMsnyE5mKuPzQtdQ7ydO8AP3Sbj9zkbc+GNP0mCufseDZxLEnzevS04V69Irt1Jg2Q49Wgg8JEGwf+lJMOzJdHwejS8Hg2fR2anR8Tt0YB3NuADjVSOxBNajhv3t2tsGwAAAABJRU5ErkJggg==",
   ti = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAnCAYAAAB9qAq4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHkSURBVHgB7ZiBcYIwFIYfTsAI2aBuUDpBHYFOYDuBOkHbCbQTqBOoE9QNcIOywet7ENoUAk3I4447/e7eCVF+fpNo/hABgYhTeonBkSiKjuAJ3SOhl0eqGZXSzTnVmeqD6ki6F9uFKfrzRbWmUvC/sZhq66CZsRebwBL7k3WZ5Pf0Z3xYSBqsTMZC5homJxCOonq2tC/gd675wp2W8IGEQWZunmA57CmEUfSilMEY/87FFMJJeOpIGaxzDzLMhjKoQAY1lEExhjKYgwz5UAZPIMOZDUp9W5MdhHPhNZ8NnkEYHSaOEMbq5wjLxT8UZarzSoD9ySqdag4+gTC6F1/AnwvVQ6MVw0ODst2N2mfoHhoO2BXhsMyGrmImPEXiDl1ONpsO7QPasiARtQhywlbgnrLtadiunWhdriJRu157ow+NIdZzKaW6A3dONEwbQ4OnyNzjeh7qfedmDMvNzSv2Rxlan9iPLbb9igNEbQYz7E9mak20IMfrKYwDRbWuTiba7RLGBS+TCR9wD46l5+rwE4hRGyz+Ra428otxMxjKVRnMW46DkDLImc40tQchpAy+1843INSLEgZ3ZtRidEJegQChBvnht3VHSCbfQMIk+j+q5Q3SoVrMHfV5w+QT5/gexVr8Da0NleU3SpLlAAAAAElFTkSuQmCC",
   si = "/assets/png/bigaward-a6efd2ac.png",
   ni = "/assets/png/chess-11735038.png",
   ai = "/assets/png/clicksTopList-dfac71d9.png",
   Ai = "/assets/png/fish-57b49990.png",
   oi = "/assets/png/flash-be6ad48f.png",
   ii = "/assets/png/loteria-0ccd41c5.png",
   li = "/assets/png/no1-5c6f8e80.png",
   ci = "/assets/png/no2-1683c744.png",
   gi = "/assets/png/no3-95e1b4d0.png",
   ri = "/assets/png/platformList-5db5d715.png",
   di = "/assets/png/profit-56d94e8f.png",
   pi = "/assets/png/slot-3fcac344.png",
   _i = "/assets/png/sport-f0fdc902.png",
   ui = "/assets/png/video-0216ce19.png",
   mi = "/assets/png/win-6264c04c.png",
   vi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAHlBMVEUAAAC9w+m8w+q9w+i+wuu/w+q/v9+/v++vv9+9w+gtCQzJAAAACXRSTlMAf2/fH28QEBBSJMwoAAAAR0lEQVQ4y2MYaNAkCAIqyEwwYLGcCQKTE5CZIMA0EwIUkJkgwAjlCSAxR4YEziBhh4acAzITDFzBYR2GzBzMYDSVjKYSMAAACrn1KT+NIB4AAAAASUVORK5CYII=",
   hi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAFVBMVEUAAAD///////////////////////9Iz20EAAAABnRSTlMAf2/fHxAgWfstAAAARklEQVQ4y2MYaBAkCAIqyEwwYDFLA4HkAGQmCDClQYACMhMEGKE8ASTmyJDAGSSs0JBzQGaCgRM4rFWRmYMZjKaS0VQCBgBO3abRrCyiaQAAAABJRU5ErkJggg==",
   wi = "/assets/png/bg-f5ff3553.png",
   bi = "/assets/png/bgActive-a1b5932b.png",
   Ci =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAsVBMVEUAAAC5wOi9w+m9w+m9wui+xOm8wui9w+i8w+m7wufc4PPW2fK/x+e/z9/g5PS9w+nd4PS9xOm9w+jP1O28wum7xey9wunu7/nk5vXi5vW9w+jl5/fX2vHGy+rS1+/Jz++6xeqvv9+9w+j////m6fbv8PnFyuv3+PzO0u7Fy+vBx+na3fLW2vH2+Pz7+/7R1u/7+/3e4fTO0u3Jzu3r7PfKzuzBx+rz9Pvy9Pri5fTq7PhH8lZpAAAAInRSTlMAIF/v339vvz8w338gEM/Px5+PcFBPT+/v36+fn3BgXzAQ4Z+IRAAAAgRJREFUSMftlGdi4jAQhSVTDCGkbrK9PTV3OiR7/4OtxgbJilmzB8j3U3pvisqwd47M+XMUTab/qZ7M7uSLqYTQiB+uL8tj5KIBRBz1yq9jq9l5A/GlJ8t4AKIKDBiM/6UfoUGag5L5Go5Rr55IpCrgyJezPn1GhmKdAnuz0gBWQpjvZ/rd7kAUVYITqVRoDm3bvZQrIaS22+UaIakg7t7qfxi7qmwZGd6QrMiw/NlJYHmFYzhEw75clbT3OdR/MLSYaKfn/OTYLDeVTb6eBIavpJdSOj1jzrHIEmUbuw8MH+sEQnv90eEZtPXTtFBCpq9ef8bB2y3Q8WXw+sCxWYCImGfcTt2KxAd1Ey8gxp1nsctcoCBSakCMOgajXW8OSrHPnSEs6UC1xqHhFkSnpAjEanEuA1HX+sQ8HI6wh6iRSyMXmIaBPOM5m484H12zeUTrqdgIyyfW5p5+gsbppjGkGMMmjJSKDN/C6YJECZNWO1eXvxuVkL58OvO8VW6yo8GCE5L2rljIYz1b8nyDkMxGMJSgM9Bu6n+lEZKYAkhLn8Dzq+5sC/yR2uurHEShOOvwWNrEmkZFmQE6KRZUUd8om1WkP1IoWVwcfbNWLbncKiWdvncYE6Jm2TuMCR4HhvqPx5z1EdWW9GgoEE/YJaYPt2SozEHezJz8kmkSRc/T3+ydhr8ZYX4bSzFdgwAAAABJRU5ErkJggg==",
   Bi = "/assets/png/chessActive-59bc1962.png",
   yi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAwCAMAAACPHmKLAAAAolBMVEUAAAC+w+i8xOW+w+i8w+m9xOm/x+e+w+m9w+m9w+m6wOm9xOm9w+m9w+m9wum9xOj///+9w+j4+P29w+f6+/7///+8wuf2+Pzy8/vi5fXr7fj///+9w+m8xOnd4fP////P1vG5wuXy9fy9w+j////3+PzW2vHFy+vi5fXv8Pnm6fbBx+rm6Pbe4fPa3fLO0u7Kzuz7+/7z9PvS1u/r7PjJzu3m8auQAAAAI3RSTlMA3xC/b0Ag78+PH59/X58wH6+EgNePUO/v38+/r59/b29QT27fv8IAAAGoSURBVEjH7ZTZkoIwEEUTCAYQxH32tSO4jIrb///aJCSaoIk4L/MwNafKKiw41fTlAvrnd8gC76dKAtSPxvLYu832gUPbrSyiAHhwgxTAkUW54E6rWSFQUcwYY18FQLvRaUth+Nbtft5PFiCdZuOhyw/D9HEJgsE1wcMgCKoUELmDCkzcc56hIq5W6qV9kLjvjYAkUP/f4QS2Jt3CIPGRJARN4F5bLxuBQeJaW4GTNMJgElqMFK6S2krlYDkFDtFXRmpvsGDdwwMZ3Bg00/xcwGamal7bNNjqXMlMQ5Q6qG2xlc01iUwDaEihxpyJtq9d6VK4YM0qJvvVbl0UZV7qGa5Up8xgtj49Di8TbYktQxZbw8iPXct8KmOKfYtiTJmoKhKxjupwTF587tfIJ0pQSWPRs45n+ZBodvMtHzA9gEQJzcXS0MT+tXKToQsicBLyn+2dCp1GTLVhEuPT1rO83vWe7IlbWfGUhHOYbWQNCfSQU9FdXC43jBsdcccdYhXEGWXoJ57IEwFykeK68YGaCTp4LzpbFjljT+g2RqP+a0LSuD/soj/KN6LnegS6aYSSAAAAAElFTkSuQmCC",
   fi =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAwCAYAAAC4wJK5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANxSURBVHgB7ZhPTxNBFMBfiRUhplQJeIG4JoYLJoqe8OL6CSwXr9ZPQP0E1E8AfALq1YtXTrZe5GZrAgeNyVbk0IBNoTEoEfN8b3Y2LNvt7kx3++ewv+RlZndmOu91dt68eQAJCQkJCX0ipdoRER9QkSWppVKpYxghxlQ7kuI1KkySFhnEUiZZJ8l1G0NtWRYYNaTyXtioLRKDV0wa13K1WyRrI2MQKWJi71hsKIwCpEgBo7E1dGNIgRIG/9tspCElh5c/rdEwJsAIy6sUPVdJ8rLsxhoMErQ9jtVFGdOnf1mWhYAVcf6AwkBWhiZ5F6DIbZ/+BTmGV2MD1djqmzH0w6shk5sh43UcgoVxu2S0N6kVMnE55DeqqIcJcYL2Equw1mX8OupTVNFNKXZCe1mrJAaoUSd5I8v7JDmNsW44TluCOEB7Uw6LfJh+qgHgCxgeapubrF0PaDNweBRB0YCsHJDt0p7TmfVw9z2e7O9iDFigCH9OjvL5Ln2egRYpaHzehpb1CSIiwnqVju49wQeZ4TygHXKz38+DBqfNfVEe7ZWhUduG899tiEBepdMVV90g4cOoLus9nZbjU7Nw1j4S9fbBnpDM3CJMzd+Diek50OSJSidxTpDiLehRaS+nzR9wsPPWty09kRFGTkzPw1Wqj6WviXfMv/M/wvjxzAzJrDNkk86JAoTgrIRzf47MJCl4485D3z3xlz4tll+Nb77jbi4suw1w9OpAOiGDJEtGVpw98ZIktgzG9MJjrzKh8CfHhni4dD6hfX/nfcqeiyMIsfGFEWRNnQo+3isQA2PpcZhffi5WRJXm149+r9m5mFyhchVsxflZpI5IStzWETtJD8WxDsc8hnzt5Jy04Y3988sOeamTwH4ziyYZ/civqS5Lw/WO47KCk/9SDQBNKsoQAd4HLLx5z9qH4l16MgPXb92FDHku3tCKlEhe9ZTAQ/980yDhq23RTzedNKYJEVcjIksyC9mBThqzQsUmDI6aZ/4axAHawaLuFbNXDHRlR4L0Ul4JRm6mFbjwGP3itXT7FfkcuApaRjDyx59C/wzhUKMo6x9k+R36AaplP3Qpeebgz5ezjaHxUxRDnEnioBgwhwn9Bu1EgoW9k4NRAe2LVEnToMhnj/JhpwsptyGr7vDgWEoF7FsbX31XpLNISEiIif84x4O7uQIuoAAAAABJRU5ErkJggg==",
   Ri = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAARVBMVEUAAAC+w+i9w+m+w+m9w+m/x+e9w+m9w+m3v+e+w+i7w+e8w+i9w+m8xOe9w+q/x+e9w+m+wuu9wuq9wui6v9+9xOq9w+hu/f6YAAAAFnRSTlMA35/vfyDPXyC/QL9vME8Qrz+PjxCPGQkmEQAAAWVJREFUSMftlNtuwyAMhm1MOOXcdn7/R51LEE6ClG7SLlap3w2W+cH+XVL48PYkg8zOdLDHL4gYfQcNc+SC1WTnSg49nOiQK/Yi2WzpZpNs9Uo2kk7JAZTcP1lv6q6LVU6m31Z1brOv0E2d55YAsF0Ua0OlDWIHrtE7UZR7PGyYp3wKSRYYJ3dQSzfSyZIDpkctYOfBmudqPcSdebEurVAJ2NYCD7Xrkx6YZDubX7eAAEoGFp33qAe+cn2HWyAk0U85GB2SrIh9sKxEQzzC7HKQeywjw7Q1CQADH+l1SltProTD+DwgFyn191KHCeZaHW5kxVAD2rh/H2n/umbDLzDiuUKO+BW9ePwVCPaPDiDSzw+QXUEI3nGDA9/k7g/9z8DW9Hi+foUdYWnGOtOxxwBHbs2HHS/1cDIp9VOjv6iBIMRrfX169aseaae/PnEvwysTO+lbH3cdHlHv4YJgiPsVPvwbvgHQ7k7e8s8rJAAAAABJRU5ErkJggg==",
   Ei = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAPFBMVEUAAAD////////////////////////////////////////////////////////////////////////////YSWgTAAAAE3RSTlMA3yDvv3+fz19AEI8wT69vP6BwUw0ItgAAAV5JREFUSMftlN2O3CAMhY8x/0kmmfX7v2sZQJDEUtpKvehK+91gmYPt4xkFP3x7kieR4A3OxBcR2WigyFY6biZNkAZF3DAkA/eQVFfzUiW1flKNpFvyC5M6P7vox22wQ87etnM6d9WXMZuJoim6VsiOgfoYLAFB6UNR9DoRDf+RbyaVA+sWLmpbO7xqIJxHA5d35z+ni7An80ASsdwDcaNBnnZjksEGoJo/WsBAz+A1973KYKn9A7WgkIp+q8EaiMtJZI2TifUsK3KoQZ2xr4xSGxLAl1yxc0ttptDDff08eLPc4PE7tJnyrLSwA4mCnJXBjnT+d+W3/AZfPA84sCiUo13+CoL7Rw+I+M8fsDtQMDGIIiCq3JLnN4O06fVe/sAJ81JrzXyd0eDKIhd2wD7qcTN5AEnpH3oQCvaq17xlEFFY+aR/frH05fWN3fTaxzKXx2wjHjCexR744b/hF3VnRDjdUAbuAAAAAElFTkSuQmCC",
   Ii = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAS1BMVEUAAAC+w+i7xuK5wOi9w+m+w+i9w+m9w+m9xOm7w+e9w+m7xOe+xOm8wue9w+e/x+e9wum8xOq9w+m8w+i+wuu/xOq8xOm3x+e9w+h/uA+mAAAAGHRSTlMA3xAg77+Pb59AfzDPYFAgn1+vvz9fnyC2+CWzAAACDUlEQVRIx+1UW3KDMAxcvwnG5hWo73/SWsJAPE7TmX53P5gEVlp2ZYR//A1frhM6CcBGid8RTGL0CPnaPfAZD5EOCInjpxk/0KVNJ1+hTwU9foSaCmeRzC8wP1nZcolb1t35S6vUv+fby6J0Ir1ifsvv+d2XvrdGV3RK2LX8seIM+76vZ92EmNp4u5ut++LyeYTgYEmlhr/5NtNlDNEDiGTmiTzMrRW4HT7M8e79CCVKgUGNi+8gl9uup4qZ26n6SKTLoByIafuJo33AJwvHnV5hryNB3fST506VesRkIHNgXe15OgU8q8sQi2yX7zxywyYnyoP8dVSFgWNJBAmTJUTSdUhHHgnQOSe+2jLLObd39LQOSW9QOg1Qiajo9arYfWLL2kNOVYGmPFxac8EdiAyCTQS+VSM/0RJG5ALC4uHdA/BFgerGZtA9nCYtfu/IM8DAHtqPgptoqMwxNI2zA/1TMO1Hkakcv+45/IFnIBTlNNHleFrB8BBENkInacwtvKRTolU5lytqhKMgW5QiS4xnSPEUmNHmJMlxngdpmM5oOlRUTxDtCkuCU9Qxyw3Xl1eml5Ua2BnuWlwqbpt/2YQWLSRQnopNFlVz7Y23cOmC6Wy36CSWfR044LeQ1LBdHirc/HaZ1cvjK4b4eeEr8bI8Ah+TJz4jrGV5jERfZ/wOFabVYhzE7hT+8Sd8A9tIO5hgqvIKAAAAAElFTkSuQmCC",
   Si = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAPFBMVEUAAAD////////////////////////////////////////////////////////////////////////////YSWgTAAAAE3RSTlMAIN+fXxC/7z+PbzDPUH+vgHCQ8YC7ugAAAfJJREFUSMftld12rCAMhXf4i4hop3n/dz0moKOH6bSr1/0uWA6EJDsEBn/8Dpq9Y3FArhHfE5IYK8I++gnvmZw0XET7TPTGPH7KYU/4kM7Hm+x9t9mi2XfSV1KCCt6Sn8sZq+9/bf95Soyzkyvhpb3l4LZ1zYnlhgMeoz3dbBbv/bnPo8pYXv+05rWrnNrkjKxR7pSnfd7NYw21AKgqZkIadfirwim13D8I5PqGhDun/Yy4PeUW3RHMHd1bQk6BcVHLvHonlk6RjNk8XclnS6g3tpqQ7uR9IiGyurpS/BGgWPQYqobtM9PucKhT7Rl487WYeFEi0h7CCd+L1OohAKupjhnUq5bloav3InEAsSxmlIGVE5l6MclcEO8aWLN5SGpee+fE4ExEsKk7+wpHJNfT2ArKPAGlR9B9NBz0ipkBbnlXrUAXn8dLYU4Y1LpA3OFBf9E+KGFsbgKvVvzFzsCRTnsd2uqNZCk4jtjaIpWoXcJkwcbmC22DZD0jWegoUj0CBIx1iu3USGMku3A82X6T9T+TOKsiVyAs/eZZVkbFQA6Yz4eLagjl8hJmjESgr7pw3Ol0vhsvechJ8tlvLG7zabECvySqw/HxoED4ivVin6NJqRPeQe7yeARrk+lnfygzSD9SwPdQ8CmDFudnwh+/4h8oTS67+P3++wAAAABJRU5ErkJggg==",
   Di = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAP1BMVEUAAAC9wui9xOO5wOe9w+m+w+m9xOm9wum9wuq9xOm9w+i+w+i9w+m9w+m7w+e9xOq8w+q8xea8w+i+wuu9w+ibEgMaAAAAFHRSTlMA3xAgX8+f749/779vr0CPTzC/P/IMveQAAAD1SURBVEjH1ZTLrsIwDERxnk1f0HvP/38rSBVEyMHCS86qixnZE7u+/A7JqY/iNJTZaagEl36Hmy8yTC5Dgzk4DTRnS8zRYbgBZEdTEYDimYPXseB0THzn2EtPfXK15GEhPT95shr6TF+5DCfz8XmlQVQIWKzpdsPKi6S1vYmgK5DH+uPtUYLQ2bW699BO/QadyZotUtZ0rZz02G0cYYw86uujgGXYwWVojAw2uiXBJNuhNdvgDzBJg1UyiXq5qyOC0ZOxsRFz1r4SaWgIYr+pJlaGyMcre1Rbr4mCIkfzChfeqU1pLEtt4Ztbn7ZcQf6m/3D5Be7pNDPJUp5AEQAAAABJRU5ErkJggg==",
   Gi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMA798QII9fz59/v29Ar08w18wSFQAAAPJJREFUSMfVk0uSwzAIRAVCP1uO+/6nncxMKUoKmYRl3sqLfgUIHL6H7MwLO4VKToEQXfkO3HwjA8klNICiU0BztgQSh3DDneJoSvBL9ezBa2xwGgmfGb3Oqf+w9xc35PGJwW7kC+bJlSHQeX3SAKshgM3a7hR2PMg6O5uIugLKOn++PEpkTLpOzx7af/7AE8naLbjuOREGY+y2GOESvtcnJcASOuASGlaCjW6JYVLsoTXH4g8wyYtTMhF93OQYwejJuFgxV7ci2QU0ke031QhdNCThgpPsvEYYiiLBQCpeoaYylkIthvdIPgoBvKUewzfwA6Q2Kb84ve5sAAAAAElFTkSuQmCC",
   Ui = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAP1BMVEUAAAC9xOm9w+m7xei9w+i9w+m+w+i8w+m9w+q9w+q9w+m7wt+9w+m7wei7w+e+wuu9w+m9wum9xOi/v++9w+gzqOpcAAAAFHRSTlMAn38gv+/fX29PjxCvMEA/z59wEIRJTiEAAAGGSURBVEjH7VTLtoMwCMyDPE2sbfn/b70EbKjZub6dFQIDA+FofvjhihpiuZOfkLDdIFgkpLsd4p0WLhDDmROvgCd2thTRqRUwbGf+jD8tLnBagbiZ832cvkdYCVC/TRB5Gt4xAPUpj1KBuNAQk0ZL4M2+otbIJNN3I9g28w5YlHAc2C/1sVVStew/XVQW4y8TtvU5GzoVwG+XR57zvbj8xAw8Vi6nolGuAronxysTAKeKhAnQGvNGjM3ZLhdhAYvEO469ksJg9tw96414UGSUAqrPeq3F7mv322BTPSR42mYf0UckV+L8eXLN4r4F0uLjJIgqKwTUM/O8avIHzNxXCU+Jlg/BSwMhSNxEJXBCGTuIky8NeAYR0OVLePG8+HR8N9glZexxflVpG733eRBAHtwwsqQMH8WFUMy+vjQvm+HEd2icpQAqrD1XpoTrLaUxWtPvlpUgU6Feq7ZWRijCc4x2IWih7zE6rjjyNEH/CDo1rIQ6PcGbiXR8nHnJj/u0uvnhP+EPi7Y6Kx2go6UAAAAASUVORK5CYII=",
   Mi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAPFBMVEUAAAD////////////////////////////////////////////////////////////////////////////YSWgTAAAAE3RSTlMAn38gv+/fb18Qj68wQD9Pz1CAcC8O+AAAAYNJREFUSMftU8vaqyAM5JIAIlY98/7veoKxgOxc/51Fv5jJkCGk5ocfnsgczjf1CYLlhcBCkN52CG9aOBaFMzci48bGeCC4HjF4uesbby0mOO4hEK96H1ruw7OA8hiS2uv0Bibps3/2TKKlFUidPfmabOwNKIpNX4xiWczCOLvgOCDcP3SsWVxN808Pl7vxjxuu83OucAED0jUh53zZXbSIdF0rnrejelwmOHvx+RIQmouERLBSCYTV2aIbYQm78gV1rgyw2WLxl9+AQ5h6FFVrXp+m+Fz8UtVyHgR+A5fKfoKk0lXfVm612BYWLz40gbqyKkBbMx0ISZ4RtW8TWGX3r8BrAxUob0ITaMFZZxCaXuA1tmqg6Jfqwr3x6RgbbFpC8tO+srYN3vtYBaQPPi5xrjnhVbCbbX5pQVSB09zRaLVCwPx3+AyC5y6lerV1WL44CpKaUGps3RV8qs5d0LymxoPGaxTMOGILyXzh+q1pFuSWYW8a0vFNxqk+bC0q5oe/hP8n4zdAYgN9AwAAAABJRU5ErkJggg==",
   Li = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAUVBMVEUAAAC8wui+wui8w+W9w+m7w+e8xOm9w+m+w+m+w+i8xOm9w+m9w+m+w+i9xOm8xOi9xee9wum8w+i9w+i+wuu9wum8w+m/xOq8wue9xey9w+hFPiXMAAAAGnRSTlMAIN8Qf0Bfb+/fn4/Pv58wYJ+/rz/vr19QT+4AY4YAAAGYSURBVEjH7ZTderMgEIRnWREooPkx+dK9/wv9UJMsmtD26XHfEwVmcBkQ/PE7yA3Gi/h0doTvucEaedDhO4sNMhAdV7mZ4Hz4hzYcpRAsOilEprw+0YCSVmLMhINfm4Ea+iAPAjHzXNjXDi8qGYtdeWvo0InSW1GOOOCFg1huGaZRLPYEyciq+Rz13WCQ8PoBET48NQ7ovW5fWc9+O9I8wHeNGREjk5EVmifK2ECLDnERnIjzEu1xbSK/JuWkcKHxVB4RY1iivaGb9fcwHGrORd4xGHTs4fyzeBunpbM0BtSkUw92QQYLRM3nzMVSzt9sMagZwd06b9QN1+CyBV23huir0Fd0vYWBsEFmNETdgaq81rlzXJ0Jq+8eNUYHBm34OoCEGq27Vp2RWiU5Ueyzjp5EcajZjHB3h27tnyjrSF+lvV+C0muUuoYMt59G+Xgwi9Tc3XuvaMK+DgBtnFn4JKnorVlweIWTRrm/CwzjDWRaBkNAw/HWkKh9Gb8zREab3uwNZsLXsN0Y8APIXdNF5GI+HOGPX/Ef889Moti3JH8AAAAASUVORK5CYII=",
   ki = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAPFBMVEUAAAD////////////////////////////////////////////////////////////////////////////YSWgTAAAAE3RSTlMA3yCfX0AQ73+/j2/PrzCAcE+QSI5SmQAAAYpJREFUSMftld2ywiAMhJMAofy0tuX93/UArQaxeByv/Wac1rBbw4IUfnwHBYU2JRvnQB/INzCY7kzwj6WIFZE65GhgtahhDO+nbipXz+SO67D5mA5uQJht2p6/RAO99I7EzKWx9w6bRLJku3BpuOXOBW2SoOBi5joZHhnMkgz0YHLgRLMtTX+g8qdD5wHWD03IFSvLhyn1TcUywPY+Zdg9P6ZN5UGui7TqwFeBI3Y1WnV8BfeaVCglS0sZ8rBg9W81N2f47LJlzvKJgYGUhtU+Vtx4U4s125boNHDApAzALvnMnC1l/1Gf0wJ8O57rZcElOGeA5meDtxK66GVpVLc7alFClBVo2hvtu8Byb4zcW2jBdqehaLzUI7RI361qhjhqKaSrPjRJtVu4pxGeTmgb/4mcjOgm7X4Kgm6i3GUZ1v4xgrojorKZprM6wxC2bQAwZsXKRqlBm6Ma4BWOEmV/FiAPDrKBYXz0XRsiDefrrwyeYYzG3oAG3sPmyfDZK2uO5ZWFKhD8+Io/iPQ4OunFPpMAAAAASUVORK5CYII=",
   Ti = "/assets/png/tab-97a30bc0.png",
   Qi = "/assets/png/tabActive-796a5254.png",
   Vi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAQlBMVEUAAAC9wui7xuu9w+i+w+m8w+i7w+e9weW9w+m3v+e9xOm9w+m+w+i8xOi9w+m9w+q9w+m8wuW+wuu9wum+xey9w+g/FWCxAAAAFXRSTlMA3x9g779AEH8gn8+/MK9vj1A/709yzzMXAAABIklEQVRIx+2UzXKFIAxGE4kGFH9627z/qzZQxxaEQTZd3bNhBjjzJRqFN//CB+1wgdgWdiGGEyPCTYFJ7BUgM7SxGnEFOICOiBjQEdEOGH5YSY6womzDCRRYPUmd+eYYaWCyakT5tOtQ4LWjHlKaMYvIFlrlYUpYQXGbHh+JQCIYGymXz4tGJIIevMIcSQHUlEnXTCBthKQIspZwE5bQSAULgDdhDJsVfEW4LiwOvv7a2BIcKJaeCxBxc5+g+F7B9gpbn8CHPBUYlAnlsTDrmPie9yC4kCRC52iMJQHDU6xgSgIxcCViAWDJhTjDrmiMDsDkAp5fuRkxYzS6PWDM+SWWj2qUmTD/CZzle2sK7F4UdJDgUKqU7sfyF6yx7QxvOvgGqmE2j89P9cwAAAAASUVORK5CYII=",
   Oi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMA3x9gv+9AEH+fzzCvb49fT0luqY8AAAEXSURBVEjH7ZRLrsMgDEVtYmNCfvX+N/tMg6IXCiJMOuqZIIEO1wQH+PEVXrzBBWJf2JQFMpOqdAVhDVeAztAnWMQV4AAeR+SAgYh+gDtZWPc0oq55puotxNpmLh3L73AU1ajBYXEV/IZp8Z4x29SajirO31je2622vN8EVsX3QerlS7SIm2ALPvWRVkBL8TYWAlsyaxWUVEIpxHSQBgEAPwRKkw2oIahmooPXfxt7ggMj8HMhX+Y8Jhg0KoRRYR0TZNengoDhUR8LM4CjkXtQjKwdYbw1MH3FBkdNYAFpREQA0UI4e9hVDXIAUylg/ssnwgI64Nwp3oRUPjpo4LF8BHL5FKYKG2llOwttU4+fKGKLdRP4McAfbZ4shcM8rK0AAAAASUVORK5CYII=",
   Ni = "/assets/png/BetSoft-80415603.png",
   Fi = "/assets/png/Hacksaw-08e9f33c.png",
   xi = "/assets/png/JOKER-dbc6795a.png",
   Pi = "/assets/png/YGG-58ec9d10.png",
   Hi = "/assets/svg/arr-left-bfe1fd7a.svg",
   Yi = "/assets/svg/arr-right-2572fbc2.svg",
   Wi = "/assets/png/fail-2d46961d.png",
   Ki = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJQSURBVHgB7ZqxTsMwEIZ/tykDrDATngAkmCGMbEjMDGxsIDYkEGGBnYkBiWdgYwOxIiRYYCR753ah1JxTp0pcp00qJ3FRPukUORcr98uWz84FmHFYloc45x5dtsjWpLmRr//ygt7tLaalsbkJ5/AwagbS3skeGGPPk/o745wy8AsyD+XgSvPIjun9AV0PxglppDmoswj8CeUFr8MVMchYtGgFyA4+7MFPEzEiQE4bH/bhy9gS6EbgHvYyMgoJAVKhC3vx1FFQR2AX9pOIURWwCvtJxKgKcGE/brzx7wTMHLWASbDFRRRJoQKae3to3dzAOTkBFhZQBIUJEMELC1+ysYHW2VkhIgoR0KT9fRR8BFteRuvqClhagkmMCwiDp0OKDkbBhyNhUIQ5ATQ9WtfXqcFHmBaROFLSRoljCsSxUkwRYVnh7Tb42xvY+nooKg90QhvGbURA2cQF1ImsamoBVTPzAhyUxO/jI/jra+bnGzs74RZkEqUso2LN/zk6ytUH8/OYu7vTukpfRtk0m7iMfUpLZCJb9z8/Mz/fpCmUltnrTGwTtYCqqRMZ73bBaYXhnQ5MIkpPWc4JqoAAOb/O9U5Pw0RlGk5LrnN+rnMF8UZjnDPTi2gEiqD/9ZXmCuINVcAHcqJ+fTACZeHm/n6aNxGjmsg8DAp7NrMdr1qO1IlJRNWVyXEEFPxK/IZuGb2EvRyoN0YEyOGxUcRllsr9EJpKoqxpCz6mgTqKquA3r44nrqkNx8nzs4eoDooCm4viSlEBBj96iKXyOdeUmVX+AJlNvtL0wqD2AAAAAElFTkSuQmCC",
   Xi = "/assets/png/oddBg-80cbe063.png",
   Ji = "/assets/png/odds-7ec4c7ff.png",
   zi = "/assets/png/success-6974caeb.png",
   ji =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALHSURBVHgBxVc9iBNBFH6zyRJNDs3BCVpoxEYEEcWf4gpTCKJCYmXl5Qo5OEFJcWBjjhTL3TWCxaHFNRarlgqXgIpgkZRioWJzImLORrHZkzMYNtl13qw77N7+r7ve12SXNzPfN+9N5n1LdF3PwDYiCzHx/M7sQRipJfaSEXsXb618gRggYTPw6v7NYl9R6nR8mb6WPYZ1iCCuZsVcK6ygQAG4U3XQbwJo0xANspgbk4KE+ApoL03XdU2j5HoRYoEoRBCkym15GaIKaC9ONWmsCQmAECJVGo8kt5gAKZMjcC1c0y3myICR9tFdSAFEyMxtLYdNgHHgfr2JX/NACYqYK5yyHkxbCYzTnhY5Qi+qg01bKXgGjN1vfoKEkC/uATGXh43vPUesMD4+ce7GPQWfeQaG6qAKCWGidATKM0swWZt3jfeVn3XzmV/FuqZehgRw6MwFOHq+xp7Xuk9cx+j6qOwQAN7Xa2ggMQowyde6T72Gci5WAtZY/gHijgJLd0hysHIaZ8Dsai7Yd/gkO1BewFh5ZpHVPSy5lTOwHR+vXKc7zMP6+y58pAv3lR88hqSnr8yxeCRyC4wM0H7uNeDDy4fs98CxszA51YD99BeB6ca0xyb/y8nvgdbC1aHXWCQ9UZ3l7+rvPieORU5RnX/Msm+9CTteg7/S9JuZQFjJ1991I5NTWs7FBRCS6fhN+fz6heN/jeRv2ysQFUQgqw4B+eKu5aCJuFNTRFxyRFbc2eJirN2wtVB7EMZ67d5bgo1vPYgJmdb/mvli64a0eUjYMoNWiE+O7XjM5oxsArBPZ6mHg5SA/nCrSXVYskvUsdADmbgIXNPNnLp6wkpDlpIUwcjpmq4xP1v+jPrDYcq2XPCbjuVAD0eHyRAdMs71I2cSw36aYfvUqWsaaiNqXDQP7yB06DdAB+8U03IFIbQAN0H/9eM0LfwBguFFi+ApyggAAAAASUVORK5CYII=",
   Zi = "/assets/png/greenBall-b7685130.png",
   qi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkQAAAACCAYAAAC5fsMCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFnSURBVHgB7ZZBTsJAFIbfK8QYExBvULYYE72BHMAm3gBvACeBG+gNCPUAcoMutLq0nkCkC5vYznOoxGoo9J+k7ObbNGn+NDPfzPtTXoazVyJ2aZOofep1CSB+9sciNCSMKDvKLk6614uq4DL0B/pxSzg3es13VaHPl6n7lTUCYuoQgDCNjnvepCr3Hkw7jQMn2OJzE6Z5u+f1kah2sfIwIAzY8ceTP2SmMYGw4n7r7GpelYsf7y+FZVq34/zslPOwD8dxOAuE+JwwYMeG8wE7Np0PI8cG86Hvz6TV80ZIdkfflGE7aI3toALbQb/YDlpTUwdFjl5gKdvel6EyPC2kN5gcYhdUMBmmpGnTRUXnKHHRqIk3EcHXwOSi0XwNoGMT9NlVDt4/uP7zSxJamDgmcSI4ygzvz2g+FL2h2ZXjtNmMaA+wYOeXO3YEdqGUwfybzIftoALbQT/ftR30J0swtoMKdv3zfANrkh4HgZHSwQAAAABJRU5ErkJggg==",
   $i = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIUSURBVHgB7ZnLSiNREIb/OmToySDMQNzpMFnN7NRHmDCLCcyAeRTxBUxewMubRFDIxssjRJdujBh3BhS8BbTLqqMRb2hONcaD5INAn+468HddTjUVwiO4XP6dEk+DUZFlEQOACE1mNB2oRo1G68GzO2GVyjd0z+dSxgzeEUdYRJKvUb1+pGvqiePu+Ya8xRQiQD1KSb6kIp2/I56LRZzitYgmvSbJuWIK3kWEpKCSE3FziBRHXJHCiSe0T2BMO0SUe89QdIicocCsRC8wh6z8PAZNHYImO0Dh4uZeewS8L7+VH0AnQRboqvyXYeHLJejfHujPwYtmvDYGXhWhZzZf2HaJODe7DYyfvGrqX+DXMXh+wiTSlIPquX7E3dmLrd9jIFyg5NlrYX0Ov0fyNZRggfTf5gm/V4oplHCB46ew4is9kPAQf+8/957QO4YC+ICdpPMZZuTwDiVYIDcLsMLtQQjcGoUV3/oCCQ/xzlffvkLh9TFTXzYVifZWDsmn9ojJe4qtiqWn8sJEX55Uz6XGPqzYv2Z6aOuT7uIP8N4ZKZXOWwUpqFGfElnILvCNGX7yZ2UoMCsqsIVI0TGczmaWESnM1HQpUx2RIuGtuU+NxmZKWEJkqCadV/siySXdqsYbkaBackm+qtdeINU3jyjplmLwpPfc7Xxa1/TYQEfCV0BVppuTg5tbU0v++liG1IOm3P0n10oqvCVBDvjTAAAAAElFTkSuQmCC",
   el = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJFSURBVHgB7ZixbhNBEIb/2dt0sUWFUCqnSgoDV2CJMnkCp4EqFTSEhjxAIEahwRVu4AVMQyjijiqhB4krUtgVbpI6UgoEub1h52yDHLyOpTObK+6TLO16bqVP4731zhAucVEN10CmzqANYq7ACxQRcRQEwUuKov5YZDTgMLwRm2QXzNu4Tghv9ED0bDAdycXxkZ2GyAUUaa3WRVLJNM1cbuQEDmNjdmVEP8KwomPzHbmE1/WCNeUpj6jNTVCtBpRK4F4XSfs9cHICP6gNuqje+SYpnRTWH/eBlZXxL09PET967EWSCH3lkpPM/SMnLC0h2NuDD5hRUa4g1evOhVS7B5TL8IFTEOUSpkGLi/CBU5C7Xeci2YdsPz5wC75951yUTInNG7dgrwfzbDvN1h/Oz5E0m0g6HfjCHjO3+cqHhm9z+rNaSZ/oWR6SbF4XCjmnEMxKIZiVQjArhWBWCsGszPRfPFfsTZxs2SBMvXMO8SoodY56upVWiCn2dmReN8GHh841M1235iJnaxz1anKxZR48dGbT2x5MM+eKbT1xx+AD2XPDfTcJWl11xvwIXnULnxL3JshfvjrDyYG7xlFs2wvwgNnZGS/ARthyImm3HasoCl7cvLVsR/fxv5GKUI4T6Uj+/GXFuuAP+1b8uXOJ7c18ssdMdc0Oj5BDtA6W1cLx8Wd7preQO7gl/er0JdFaN+T3Rm6QFrBuyEgNptGZ9ITzkUlujfrTMqPLYWkJB8Y0iOmuq3c4dyWiPjjpWJmDwZb7y29CactilPQAJQAAAABJRU5ErkJggg==",
   tl =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKkSURBVHgB7Zmxb1JRFMa/80JDGhjcuiLMatd2ksSmOJXO4mqNmNhY99I/QFMHjczWGTqJwaSdiiPpXmXt1gHSkKbveM5DKoX7qPbSyxv6W+De817yce4959x7IAzBudxDn3gFjLwMU3AAEZrMaHqgLarVWpdsF8Ly+Tvonm76jHVMEY+wjfjsFlWrJzqmvjjunu7Jr5hHBFCPUnw2qyK9YEY8FxVxSqBFNOl3kj2X8sG/Qp9OJIBkEjg+hmt8UDYm4jaNVhFGG29ACwu9cacDrlTAX3bgCo84H5NdOC8RO2r88BGYm/s7oYILhcCbXP4EJzBWPBj2Hi0tXRY3aMvnQ203QMozTqcz414C3bsPV3i4Biz70RVGgdw4CH9Dxf08givMHjw8BH+vG02889lpyqHz3DKHWiVYvEd/AkZE+ZpiRLxLxguMANcKEpdEXmAMk0D2qPd6A8hkerVbsoBfLk8kmOz3oIrTsqjCBum04ReL1iKtl5ierY2KUxJJkHrVEnuBi4vhtkwattgHybiyJ160xVogH4WXvbEl8x+xF/jurdmLesDVSLbEfom1BBZfSGpp9MYqVsphMBeJNHPD3JY6W6YjUBO7HuFMCX6IydTi/4CeFECrqxfiuF7vXWVDAsqpQFp73rsVDs7pDTKdBr8sGt9xt8SypMPi+pCcgsJszgRS+oq6HHLVdefB5BV1ud02TqvAFhzAB42xBwv+0RiZ0zacNDWxCxfoAVavrAa4WjHeFpmpSWfS8pUGzR5cIXvRKzwNPoM6LmkGIXdw8d7doMN69nh522O8QoTwCe9nvn5bD4IkFu+WdL0REVRLLD5b0u+BQKrun1C8m1XVmDKqod+f1jENP6At4XOgJN3NB+761tSSvz52wVSdqdX2By2/AZx/6VOK71bIAAAAAElFTkSuQmCC",
   sl =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALDSURBVHgB7VnBahNRFD13jExTBAsVXFQxCNadzbY7owuzqDQb3foL4g80+QHRT+jaTQoK2ahd6TZ114LYogUFIxGqMZDO9d6XJk3T9yZOx6ZvkQNDZubNnDnvzrvzzrshDIGLxdsR8TIYJTnMYQwgQp0Z9QBUoVpt+0hbX1ipNIN2ayViPMYZIiA8Q5itULXa1GPqieN26630Ig8PoBGlMFtQkYE5I5HzRZzCaBFNuk8y5nIR+BM8RAQqBCJuBZ4iIC5J4vjzao+BsZxBzNijpR3Q4jcg2wG+XAC/v2y2NKB8A3RnF7iyB/yYAr8TzjdzrstzGSfRg4+gu7uHJ+abINlUbAxhvDjtsGx9TO+BHorQq7/Aq/PWewIrkfZyUNxg2315wHQHiTH756i4Qc7FrxKAn/hngbjRhBMSQVpoIClIohTbnv9uPW8XOCJC/DuDxMieIOpwCOSNS7E3acIkBW/Mxrd/tnPaI1ifBW/N2IleXgMaIRJDom7utUE77Pg60H7xHltb5DWbTNbxpq/84AEnzeA+5LMVaLJI0hhO4TOcjmHjFugJAniOicC0mAhMi4nAtJgITAu3LdGpTpyvcb861TWmulNdWketnEs7h9OnGBN+cd051TkFBk8+dG15D2o4H22aX+ekP0rcMUfd6ZpV5Xx6y67DSqTrkEFxQw/5745alxMOE2wfgw5xfcJTcNTIJxE4AqfiqFvnrKfH66hjOsabdoNsj+DWRWe2pnHU0St7chnD6lgSOLvEqzcBWSeYhFH3K1GLlKgev7aIxes5RCI06CVhK9MtBsR8FdRRa+EoBw+hZTitzazBUzBTPYiYqvAUkiCV4Hytth4RnsMzqCatV5sszoTtsr5veALVkgmzZd03Aqm63qSwXfAhkiZyB/VpPabhC7QkvA+Upbq5ML66NW3LXx9rkHzQITfY8hcq4BPQIashgAAAAABJRU5ErkJggg==",
   nl =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALqSURBVHgB7ZkxTxtBEIXfrIwsZIp0tATXIWmhChIIqGLqkDZEcaSgkB74AYlIkSh0iUJqjiqOiAQVpAuix3FLR2ELWcg3mTlji9i7d8Zn7Cv4Gvtud8fvdndmbtaEFnh+/rFP/ASMnFyOoQ8Q4ZgZxwa0QYVC6b+2prBc7h6qF2s+YwUDxBA2kR7eIM8712tqiOPqxb48xSMkAJ1RSg9Pq0gT3JGZS4o4JdAimvQ7yZ4b88F/nb0zGWBkBDg7Q08ZHQXKZaBScXbxQdMpEbcGhzBafQuanKxfiyHe2QF/30Yc6OkSaHGx/uAC7+3VbVomwBDnqLYw9weW5TVfvtafsgX2PPDWZ3QlbvkFKJdrt3l6Cn6Vtw0pGZs4mp21igva9AccbaHIGJu4wGY2C5qZtTWNGeuI8SzCoAcTuCk0Ph7eYcJu06ALOGRjO1FHC0MdxoJVIB8dwomKK57ipvDhUajH8u8j6337DJ6cgH/t2Q1tf+su5FTK8HWszaa3E/ymDarNzzFciLOYmSuHEVG+hgOHoY6RvWYk1DRtSpiBYzKiBSaArpyknyReYAq9QPaTebMKSMANUphEAX9rqyf5O/4eVHEfPzVzaxP12nw+tsjYS0zPl9vFKZkRkM5qTOILnJpyt2Uj0lsHxHeSsLSXiUhvHRBboL4qOdvCUmaHxBf4/p19FvUFVz05JvGXWNNV/qWElqtkr2IlHQb3EhFmbpm7VBeXaIEahLupQTqxaQvwLbhzcSO/NmqFAZSdQX+XkySk7LQv8UDKTkebfQ9GlJW3UnY6Sl27wIiyst9lZ6n1ZlLKTj2Gk0NN7La1aNnp8NZ+lp3MdEyXcuQrBzT71pHXy85iEX5I/doxshfN0rPgM6rslNm7H5ywXi7MbRrGayQIn/Bh6MfPlcBJUunquq43EoJqSaWH1/V7IJC8g3NKV6dVNQaMamicT+s1tXbQI+EasC6nmw/7d25NJfnrYxdM3lChcHC95R+cNEhMdUdBaQAAAABJRU5ErkJggg==",
   al =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALoSURBVHgB7Vk9bFJRFP7OE0OadnBrRwKdq3MnmWSDXWdrxMFoYhcNMGpi1fgT66yzdCPpYLvASjp1ae3aqR0gDUPf9ZyHIO/dc4GEpt6Bbyn33o/zvnvuPe9+vRASMIXC3ZBMEQYlbmZwDSBC2xi0A1CNGo2T2NhQWKl0C72LSmjwFP8RAeE90gs1qtfPpU0DcaZ38YtncQceQDJK6YW8iAyiHs6cL+IEkRbWJJ+J91wmhPkNDxGC8gGLq8BTBGRKXDj+LK0Fg2IK2t5bXkbw7DmQywGdDszBAcyP78DpqR5I+PcfAGtrwNISTLM5kU/FEmh9fRI/Q5eFe8Z62OcvwOJinMpfDjdf2EGE//pN9HcmfrfD/E3g6CjWHSCBKHNJcfg36yRIMpd82IAvsablLy6BHm5Y3ZbAaJkciJZkir7hWC6r9OXcfHl2IjlxgTyLK4UWT1udMYgL7PYLwgVtzCT2TAwaf0x8HB+zhi7cAiWAVJMG/qI2Zr5tW0EH/HDrLdT4Gp8Rbn+1+uw9yDMMn5T7sxntKz/WXxucwWhsNDPC1ypYINXt4ivZtV8zniGA55gLnBVzgbNiLnBWzAXOipTay7Zn6JAFchTJuepyyGyhAvFy0/IHjn3Al+Py3ZZlVgX2USfixPEmIY63XNYdsubAHQ7ZyWdo57HtqDceQYU4Xslqku9y4A6HHMVweEI1fjIoslm4QJrbHufANUc9jj/RUU+Cw/ddKcYa1kmOWtnE4xy1abbsvlbLydf8oO2oXQ6Zi0N11K5qdfHrP3W+w4HfqKyuVmM9Z2cw+/v9Tb6y0m/v7sJ8+ugMHGVlhA9uO18zo3z+p12usnB4iPDVS5Uvrxm5OMrAQ8g1nNzN7MBTGEPtIDRUh6fgAqkFNxuNvZDwAZ5BNMl9dVTFqXSvKusNTyBaUumFqnyOBFJ975zSvbwPmYwy9/d+WtqUJMiV8CVQ5dvN29d3b00n/NPHDrgeZMuNjvwB2vhrdVBl1O8AAAAASUVORK5CYII=",
   Al = "/assets/png/n7-039e2d7d.png",
   ol = "/assets/png/num1-4e0b367d.png",
   il = "/assets/png/num2-e0ca561e.png",
   ll = "/assets/png/num3-a27e7a35.png",
   cl = "/assets/png/num4-244236b8.png",
   gl = "/assets/png/num5-9e8804fe.png",
   rl = "/assets/png/num6-19fef323.png",
   dl = "/assets/png/redBall-fd34b99e.png",
   pl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAjCAMAAADL21gSAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAfyDf70C/EG+Pz59gcFBPMK8DE0pVAAAAwUlEQVQ4y4WSWQ7DMAhEbYOXpNnK/Q/bJaJ1AsnMp/XkJ2CCyTwEmCSSINREIoSKSMG2dyqApg/UsA36knxTkQ37yg4VYFMfsllfjl1IIepflzAKzBgWQgwvIaRyz5S9FFGcmBG2SyXlbj8Pn3nWY2nZItzMso1ydGpcT3+Re5oTxB6Tz7rsQGbAwYHIDAdt6vNtHGe+9JEu578yvrANtT959mz8e53I85E2R69UrC/b8kfja0Kbc/L1+LJW5+TKvAB/bSBMYNbj4AAAAABJRU5ErkJggg==",
   _l = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAMAAABMOI/cAAAAOVBMVEUAAAD/j4v/jor/jor/jov/j4f/jor/f3//jon/j4r/h4f/j3//jYn/jon/jYr/jYn/jIb/jov/joo7JEFDAAAAEnRSTlMAf9/vXyA/EL+fIBBvz5+PUE9KnGCKAAAAeUlEQVQoz3XRSRKAIAxE0ZAIqDhy/8M6lGUv0vlLX1UiINJKE1bWrgOD1O/0ZPA2ZQ9fqQXwrwKAMgWsAiBLHLAKgMbsAKsAbh6HbhFoABaM2iv/3cIPeARXUoXBNuMS3XAH5h4KwwmM33C0PJ/XIq5Zuy3CqqUK6QKbLRhz3froGQAAAABJRU5ErkJggg==",
   ul = "/assets/png/WalletBg-eedd378a.png",
   ml = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD2SURBVHgB7dThDYIwEAXghxPoBm7gCo7gBrqJbqAbwAaOgE4CG8AG5xEb4x+QXivF+L6E9Be5d831ACIiIiIi+lcZAonIVo+Nfkv4u2dZdkMqGr6QcGekoIVPEs8RRuYR0qKVHmvE0eoorWBgakDDd/PeIK6VNtHC0wIGrpB3sQG1JXzH1IBzQTwFptaNkX6NhKvcSE5PCx8k3B4paYBS7CqkpiG2YrfGHGiQXPzlmIvuJsXvQTexbj9kjb7oDq/ht1Yv7p/5kOdarUbcfvqH20fD7UY0kHZtfiLDa7XE3En/g472cL/ONXF9C17+THgiIiIims4DgE/PN6bHlxEAAAAASUVORK5CYII=",
   vl = "/assets/png/bg1-c7e3c3ac.png",
   hl = "/assets/png/bg2-6bb5d543.png",
   wl = "/assets/png/bg3-90fd24c7.png",
   bl = "/assets/png/bg4-200f47b7.png",
   Cl = "/assets/png/bg5-71cd6b43.png",
   Bl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAX98f72+fEL8/fzCAz6+PUNCGCFwAAAHwSURBVEjHtZdZgoMgDEBr2AKK2vtfdiYFzchaaoefUpLXrEb6+IdlrNIenr8LcHXWDJAK5fO6cBJvoVYTmS/dxwWy+iBulsMqaDULClVYpeHAl5ZZH3SkE4lARR6qxqdgFm1RGHCpyuwSfnunfQNf6uxmGlFppkusatdCMZ0dy7lXyfmVlinxSDLbp+U1569cENunSdObNGCOtx+34++CvutYa5iKDEu2q+Oaewc4HwlLSOhh0kE2zARnM2efEPY77e1fw6yU0vkxxijZcJXODy2FYE4JFBQbR/IsDtIuV239nDtSZkgiEkOdQMTht41e53QjCRDz7Th1KV1Pv46hruGzSFdLp6JF5IrnNLP54+Gj++JRoSvsQ8REkbjYzDX2LBHDVXoqCr8FmwG3Gb6bME/Ta7RUNja3/rRJVvr8tD3d3QfDyA8eybNESC6MDQMKFc+dHBhDPKAPv22drQQiOHU4MnrhT4EsCXY+rw59mRo+Ugahv2WBTQa0OA3z23kLOiBz9irRybh1N16xD+PHXu5w81qRZ3Pus8UA3ftXKZcLXPdmazZmyzRMNXYHZvOlZAO3+BIWu4B7h3AlEsFxD/csKLnOl3VLikbMfFmXzpQxvtlWF7LZQVxq26IYnzAlUZmRP2VuRSAOvFaWyG+vHySHO/nzpJ72AAAAAElFTkSuQmCC",
   yl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAG1BMVEUAAAD/cHL/cXP/cXL/cHD/cHD/cXH/cXH/cXKHG6ONAAAACHRSTlMAf2/fIBC/z4tSxnwAAABeSURBVBjTY0AHQYJgoAJis1h0gEFzAJDD1A6RqVAAchgbIaolBIA6xNrAOkAchA4gh6kDChSAHEYYR4BOnMQKBQSno9kBSUaVAcEBegDJoUAOqwVcBxA4QTytih5MAHWJUsGFmjujAAAAAElFTkSuQmCC",
   fl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAASFBMVEX6WloAAAD5WVn6WVn7WVn/WVn6Wlr8W1v6WFj/WVn6W1v7WVn9W1v5WFj/VVX6WVn5Wlr4Wlr8XV33WFj5Wlr5WVn1WFj5WVkDM/vyAAAAF3RSTlNmALKfQAxMX1ImWTkygAaPf28sIO/vGs8Gg/oAAADoSURBVEjH1dbRjgIhDEDRdkvLDDOrq672///URI0DFugYfdD7fhIghAL4ZB8OeJYE94YN4vC/bQMWKJsQSZVaYIzwULgApToYARpAqQY4toFSBQToACUDGDpgEQuYHKD0AMQDui1BrIEBcaf3fgsA1TZ40Ez4YEb8y4ULIhfi2APL/Tvs6NZggRWMeT6AtGcH2CRcm9gBVhrg9RZAP1nkA9Iieg28viTbdwJqbdg/VuqCtAbEDIizJHNbZ1jRlIHTGsAZQAG3YJ77fpHNQOk39kaWLY6VoRigmXB97O4lgSnJzN/zdVjVGetuE8QMTcuRAAAAAElFTkSuQmCC",
   Rl = "/assets/png/fail-2d46961d.png",
   El = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzBAMAAADIjy0ZAAAAMFBMVEUAAAD/cXH/cHD/cHD/cXL/cHH/cHH/cXL/cXH/cXP/cHD/cXH/cXP/cXH/cnL/cXKE7Iw/AAAAD3RSTlMA3yAQn79f75BvMD/Pz68n36Y/AAAAhElEQVQ4y+3LIRKCUBRG4SvjDkwmiUaSYzOYHekWd+ASWIJmk+7AnbgWGCBymMcMAeb+kfZO/ebY0OFSMC8fZB9g3j3IEacySLLzqA30BZp3ZtPGqU7NawXlx9yecPYlgc781rARdIJU0IPaRFcqRX9yRQUvRfDTlGmySJEiLUVbSTcpPfgItYvzQsIJAAAAAElFTkSuQmCC",
   Il = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoBAMAAAAMH8foAAAAD1BMVEUAAAD/cHL/cXP/cHH/cXJ5nib9AAAABHRSTlMAQL+/+4r3MAAAAC1JREFUGNNjAAFGFyBwBjOZQExHMFMExDQAM1VATIGhphTBRChAaEMybAgqBgAMYjR3jBImUQAAAABJRU5ErkJggg==",
   Sl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAoBAMAAACLAuyrAAAAD1BMVEUAAAD/cHL/cXP/cHH/cXJ5nib9AAAABHRSTlMAQL+/+4r3MAAAAJZJREFUSMet10ERwzAMRNFUCHooBAEQhY7CH1Mmh00IPAH4M/6WpfVx1+ck9T1SZYDzAH8G+H+AbYAbXhQyiaWA8yq0ElsBFyuMxHLAiUIrsR1wo5BKLAmcKJQSWwI3CqHEssCJQiexLXA5kB+ZXwpvG93Y/Onx4cDHlx6wfAXwJcXXqF70PIrwsMTjnA+cPhL70M6/FRfw4xxkSHeoPgAAAABJRU5ErkJggg==",
   Dl = "/assets/png/notwinning-7e54c381.png",
   Gl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAr4AAAA8BAMAAAByTqS8AAAAD1BMVEUAAAD/cXH/cXP/cHD/cXLrmyVbAAAABHRSTlMAz28g8GvgRwAAAMxJREFUeNrt1jEBwEAIwEAkIAEJWADqX1PHV5AtJyFT4hNo7Ita+6LOvqi0L6rsi2r7kibsS1r7os6+qLQvquyLavuSJuxLWvuizr6otC+q7Itq+5Im7Eta+6LOvqi0L6rsi2r7kibsS1r7os6+qLQvquyLavuSJuxLWvuizr6otC+q7Itq+5Im7Eta+6LOvqi0L6rsi2r7kibsS1r7os6+qLQvquyLavuSJuxLWvuizr6otC+q7Itq+5Im7Eta+6LOvqi0L6rsi3r78AMQQo8geT/5zwAAAABJRU5ErkJggg==",
   Ul = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzBAMAAADIjy0ZAAAAMFBMVEUAAAD/cXH/cHD/cHD/cXL/cXP/cHH/cXL/cXP/cHD/cXH/cnL/cHT/cnL/cHL/cXKOCLU4AAAAD3RSTlMA3xAgn79f728wz48/r49nIDyvAAAAg0lEQVQ4y2OI/48OqtwUGMDg/H9M8MUALMX4Hwv4DdbH8R8bEGbABnRagVIfJzBgBSZwbZjAEKhNAbsU0/3//zfg0Mby//9nHFJM8v//MeAA8/9/V8BtYgIOKeb//x1wSAFDfQEuqf7/Bbjd8QGXlD5uKf5RqVGpUSmaSbHJw6Uw5QIA7nW2ncl6ReYAAAAASUVORK5CYII=",
   Ml = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoBAMAAAAMH8foAAAAD1BMVEUAAAD/cHL/cXP/cHH/cXJ5nib9AAAABHRSTlMAQL+/+4r3MAAAAC5JREFUGNNjUHEBAgEGEBABMQ3ATCYQ0xHMZAQxncHMoagYzkQoQGhDGDbUlAIADGI0dxvWkPsAAAAASUVORK5CYII=",
   Ll = "/assets/png/success-6974caeb.png",
   kl =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMASURBVHgB7Zc9bNNAFMf/7xoIQhQqhb1h6cRQxARLoTMIJjpSFpYuSSt1TbswVLRkqlhAZUKoCwMzHxMLqEhMsBAhpEqolVJSBaXEfjyfg4gdx77LRzvUP8nx+fxy9793796dgZSUlOMFmRhxoTAmN+/KB/5cLr/V7xcXR3GQOQNbfjX36elKzcQ0gzhxRAUp3hJJkxEmFbku6NKBcxlwJmDLWa+fBUCpXTSdbZzKfKaVaOEK0SInQeqbCCx1ETlYXDcHRRfhODek73yUSYdQbUjqDfypPlwcjIJGpnQohej0qFLixSMQ+Q9GFs3mVLhaRRjO4qhhynGpdLK9KiBUAvsazBlrZQNvFnIYJJ5Xd3YC0x/yKOdhjmQFtSWDu68Xw8DJBtoMT/047MjL4IYgUhhR3ade8mYVQ4VPW9hm25+CCZ+dZ6Ld34WIb4vyPAaGOyOOmJbCqsTgV1gSECpboufR5dZjkefnS9LoEvpFUU5W8rT/wDelp1VYouJe0trasggto2ckfgkTYL7TVjkhvU7reotQyCSbuOJhVYAtxA/kN+flmg6YZ3wbfb2Ai9dJzakkg1Y4VGALs6EdjLyaKNSnl2wgcci8m2DzXoS+ggGJQv3TDPdwgqLd2EVDtCUiN2BIskeJZtErRN2nlfk8LIgVysXikn8m7RHu2LXqbWWrHS2w6v1T/chd6UDOpPoU1d9xj6iuV70Xq6Q2/DtdAbtXWwbGTYXSk5LdiMsW/4/H34GK0m7dz1IEf/FQYjoKExRKdC4y7/UF1c3q4gnGKPMe7KjKlP7EMHA48JEXWkzuJ5hTlVi7RI8ePgG52xg0J9w4oXoHMk3uVdm1KrrEyujb3AZpOzB4FXopIsnGq8OB3C/hqoiPO+cezL06eAgNNBofw9UdQvV0sitiuYLDxhP523lH6+v74VeRO5OIfSkZ4LoIXpL78ENBH16cD/jx/Tk9bsV9WBMM4YWFcbgq/7/iz54MSA+C5+bkgExZ2FKv11CrNWhz8wApKSkpAf4C5BP5hhN/VpgAAAAASUVORK5CYII=",
   Tl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAPFBMVEUAAAD/aWn/cHD/aGj/aWn/aWn+aGj+Z2f+aWn9aGj/aGj/aGj/amr/aGj/cXL/a2v/cXL/cHD+aGj/cXLlHFRuAAAAEnRSTlMAPxDfj3+/78+QX78wIO8f3yCab4IVAAAAx0lEQVQoz62SSQ7DMAhFGT3EdtM6979rpabxXKmLsDHwBALz4S5DDZyzDRJXMFjFHYBQOOAAyXOT2thTS5OTLiZxqYmcXnXb11FHBXu5vJwvT3yZimnGVIYJG8wY0JxvZFhhsGe5yBqrnr2xw2N3S2uc+EzBGkP+B/O+xmQ/j/k5Wl1g/PO6MFpYGkcYur8ez1gamekkehxaTzIdD49HrEee5UC0kAMk56mXnktdLNyshCw0CtmwIAEkVGsQZotibM5sFOEmewPAUQXQHORhdwAAAABJRU5ErkJggg==",
   Ql = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAeFBMVEUAAAD/oKD/oKD/oaH/n5//n5//oKD/oaH/n5//n5//oKD/n5//oKD/n5/+i4v/n5/+iIj/n5//oaH/n5//n5//oaH/n5/5WVn9hYX6a2v7c3P////8i4v7eXn6YmL5XV3+lpb+j4/+9fX+6ur+m5v8trb7f3/6Zmaz6OagAAAAFnRSTlMA359fIBBvP++vjzC/f9/Pv49/YFBPchRNZwAAANhJREFUSMft1bkSgjAUheEEw467XoQQdvX931CLFBdDSFJYMMNfn2+YYQlkyz7/mnjaLqmyv0WwmMem+wBMUR/vWQTGzhgkYBG+RGYDdgjQtYCxEiXq5AVsCYyiySc9AGiqB20tdxgAxUDdqwBCHSjzebDTgCp3AfgCtSWQu6rnTzsgNwPn/OUC+i+orIB8ZsD5kFuBQo6EqP90W+HtCrrG7dXAAoPI1wJoixkQLH5AnShwhywOydoOgZ/urkclQyAEczHB7cEUZcRJUOUfxLwj1RYHPtly6gOS6nMolZZu1QAAAABJRU5ErkJggg==",
   Vl = "/assets/png/warning2-9b67d247.png",
   Ol = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD4SURBVHgB7dY9DoJAEAXgt8aEVuMFtLGzsfNCegA7G63sjDWn0wsYqUys1iHGAiMLCvuH70smG7IJ7MDyACDyS2u9lbrq9uXnPMKm/ALavp1pDQoN5HdJhgHsypRSw7LJpg1oOCANlK6zh8ixAd/6sCU9FI9X6+/ma+IW8i36Bvgd8I0xWooxWg8b8I0x6htj9GctxWhlA7LN5zLMpJK3qTsCYGxAFr/Ac/GfJAhA1TswReCMMSpPYAmzFA4wRkMWfYz+3RPYS42kLlIbBKDbf6OMUQfYgG+db6Dql/kG+zLTZOHtltQ5yTBG2M4SSpPXQfRbiIgi9wD8lPxYVp+kYgAAAABJRU5ErkJggg==",
   Nl = "/assets/png/PreSaleBg-03470bc7.png",
   Fl = "/assets/png/agree-a-32b06ce9.png",
   xl =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAP1BMVEUAAADh4eHi4uLj4+Ph4eHe3t7i4uLh4eHg4ODh4eHi4uLh4eHg4ODg4ODg4ODi4uLk5OTl5eXg4ODf39/h4eE1ZOnrAAAAFHRSTlMAgaAi7xNh4NDAcZFiUkKwQjIykTUFLcsAAAKASURBVGje7ZrbjusgDEUBA+ESyiTl/7/1aI5UaDJAATN5GGW9VvKOjW0Su+TmJiLAGcr+Q43bJxuXVoUTiq1ApgBUhwLKoDWE06GKXlHmKQ8fWcYlTM08XuKxhGaWR390bOiCAfrxuWJUfmMo0/ynE3tX9M/GmTw94Sb9WYSSZuzRui9E+IsdFZ6t4dcH81TUivAQSi2a7KsW80niUNqi075vyA1gfQpv8eGONCHf4qQ7zlc1pzao5pN+i6glZCjvDKmwV7K6+ckeFVeXg/1BhaV80GzQflKoH8NjJP4J+zFIMUCKDKFikArpHH+HMQHgMZPqDgzfgS6WqKg5wMgwPiZJzQEYFwBedkFmxBG56opNbgGMgOClpgfJARS0FGhz/AHvAi0UCSNIfD5GkKocydfLksjmECdoeCzXXB/1eAGWbZgqyqKR2Y75CtyGF4DcIezpCOYdAmTaoJ4hoDLdwqQqwMMylwJF94mcsbooPo1YRmC9Bf6GQMz5C9L0ukJzqQPi0ZlWAVObXaYzC8SVX/yIufbCsfNO2UdTl176Yv5rC+Rzy8+qAlUoPy4mXfnm6pdfoqe4AEvx9cHN/QBZy+/dHCacwFIT95gUSg6UXQgO2yXCUh81ckCecFgvGCVUqzw8f2cYQix+nFNvyWLOQAqqrRA/Utsah9bPwaEg/eWxpiUf0P2bDcc7BrNEqM61A3jM8DpQ6NkjKdE/3l8otJoPWvTkRIIVKvNxWoLY3qxOcL/up8hLFq2PfOBtmSWRZtTIbyhTHL3pAha6sKL/DQqxqGtENkrwGP3JEmmPhEB+Wvc6QZCAUUXrdNZSXLIfIspKQaayvf9pAAS5uXnxD+T8kWUPlb1KAAAAAElFTkSuQmCC",
   Pl =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMZSURBVHgBxVqBldowDBW3QNmg3qCM4BHY4Nig3YDcBEcngA3KBukGuU6Q6wThJtDJLzIoxkAcy7n/nl4ewZa+ZDmWnSxAAYi4pMua5AeJIVmRLFk83lneSP6R/F0sFu/wVXCkSbYkNU5HQ7IhMTARC0gER/snyS8YRtjhBJcof/Bv4Hbf+bqK9HM4kLwUHRWOeBeJYkViE/RY7tNGRmUL2nBDzEQl6hTSd3Q7Zw6B7jYnrUIDz0HUGw3iETsrHI6Is7mGHHDKSOygMDi18lMqIN+ViPod22scjnqaE6xAPx/TOBgcptRzSsdORN6AMrBfQ8yIdulcAq/zJlFc/0qQsiPaW8GnedR4KxpXoIyA/OgAUbvdQ148XOe8B2VEyFeJ/RuRSstYg71QvgJF5JJnHfZm/yD6e1CEBnmhq46OAvYVoYcFJXDUVMgLfde6RH6p5T72JQhqkRd6Pdfa3zAFjBQhz7plqbFUT5+S5Fm/TKONfMZ2kInS5IUdP692cmbXkIG5yLMtPw+OsnQ4wkTMSZ7tHdhOC8LopFp/bvJs85z2T+L+CRKB/WJyELfcpryC8jgfFjxBHsKaZHIaToVzQB59JIGPQF7ErRqV66gbGJQRLefT5BoIh4tLV9oJ0v9HTmL/o8lUOpsTKB/9qLuQhU6o7+jYzmAh0y4lpBMO4zbj4/VflRJLVH6Gl3Qi0G38zVpjHtwxpOYEXh46zS1jFpSg7cRV+og/XBr5iZFV1EWMqjmBw327uWfIgiI0nMB+b+2xjzWQo6A2F4T+LCdweOBmxhh5BWVEnLAj+21Fn+pR4ybVQAoCJx4udBgcNMOIDgbLH+46UpsR7aZxweHq3JZwYgQHgzkHzThTXXPDtkWNAzHUet2TZvM1sFlBDvD6dU+LBUpljnoTjPoGNBDJR4c96r1mrQPdTZF5F0kpPyIVpr/o3uL1u+cuNWWmfGpg6FKRxFZSt79+g8snBx98/xtcPjMwEP9E4TfJjvbZyacjk8BptYlEMQU1j17ygYJH8gjccoYuFvoI+09ujGhygsvo/OfrUSPan6uQr+opoFVSAAAAAElFTkSuQmCC",
   Hl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAhFBMVEUAAABRUVFQUFBRUVFRUVFRUVFRUVFRUVFQUFBRUVFQUFBRUVFQUFBQUFBRUVFRUVFSUlJSUlJRUVFQUFBSUlJRUVFRUVFRUVFRUVFRUVFRUVFQUFBRUVFRUVFRUVFRUVFQUFBRUVFRUVFRUVFQUFBQUFBQUFBSUlJYWFhJSUlQUFBRUVGJ3MxyAAAAK3RSTlMAv0B6VerZrqiblYmCaGJIOiQdFg/79vDl39TKxbq0oY9zblxONC4pCQTPqkRvegAAAWZJREFUeNrtz0duw0AQAEGSzjnnnIP+/z8ffJOBgRfgiCts9Qca1UmSNGZDP0FDN37DbIJAQH4DAQGJAwEBiQMBAYlbTsjQLWcgtQVSWyC1BVJbILUFUlsgtdUQZJiyMSGzKRsTclbwBQEpgJwXfEFACiAXBV8QkALIWsEXBKRFyGXBF2QKSD/k1WdCruYhXV4gTUHWQUBAQsg1CEgO5BukMsgNCEgO5BYEJAfSg4CAhJA7EJAcyD0ISA5kAwQEJIRsgoCAhJAHEJAcyBYICEgI2QYBAQkhjyAgOZAdEBCQELILAgISQlZAQEDagDyBgORAnkFAciB7ICAgIWQfBAQkhLyAgORAVkEWC+nnWlbI30Bqh7yCgORADkBAQMIGEBCQNiCHICAgYW8gIDmQdxCQHMgHCEgO5AgEBCTsGKRySGog/+ik4AsC0iLktOALAtIi5LPgCwJS0FfBFwSkpH7COkmSMvoBUQl8xsUGEfcAAAAASUVORK5CYII=",
   Yl = "/assets/png/diban-35ba643e.png",
   Wl =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN+SURBVHgB7VmNldowDBZ9HYANmpvg6ATNTVA2uGxw6QTkJoCbADoBrxNAJ4BOkHQC6ASqROSLIpJcHP4e7+V7T8/ElmXrx7ZsAHr06HHXGMCZgIghFSOib1IOhRh7okzoD9F6MBis4dagSQ+JJkQ79EdKNCcK4AR08gBPnIoXohgKKzO2RL+l3As5sFcCKDykkZBHXuEaoMmPxHoObP1ElGorIyCKjJy0ize8PEADPFMxg9zqbN03/ibr7RVPCLmFH1VXbv9LtLWxz8pTMVF8MfH8hHODBhrXWctzLaTCq/sHWPbGM5wTMoCb3EaHC/1+qZh4Kgt0JrSUfpYnMkZwPDs8cXFbBdIay8/VhD5cC2KIxFh7apRwbRs40+QjNVig6rVFZ+i/iBeq/0q1jVR9DKdCWWSu6qZqkAQ6QrxR5YmZ8yqcAhIQWusbjyRwIowSY6kbqroQugKLGNcuTq1HPGWO0SxQzBc5iuyh1K2kbgZdgUWcx/JduR485E1caGB5JxtisZO5sWL57r6YldCxUcjb+pgvXI2laZ9pb2Nx7nRbB1g+uA6C1e8QPIFF6OkzY6zaw5qxSnwWg7rJU7GEemTgj0DKByLeccYVsoKG/k+tU3AVKhtxfYjdUmaLROTrmK9CKmOO1FxWVXOt8wBarTHfDTiF5lT5DfyRaQtivgmEhoeTOq5/Jd5E+N6jgeqO5vsZ2sNlnHuSs4ATQTIyKha6DvMkLoDqcSvxCe4cvQK3Rq/ArXH3Cvhsow5NNy7ex0NoBl/sf8AlgUXeMpVvfelOa/pE2B5xjYydOokDObFdql2ZldZ5gE9anjyntBGUrc6C+UT+Z/p8l5IfthY1cvmgCqHCi3Iyu3r+zYbaqzq/0x/LNyUfzBtkLoQnqWir8+AOG+7GtYtYchHOHJ8gz38YmWLJDDUe+S2gH7dcyWM/0Fy638oYWOTnMRZxmhgeH4/ZvhPdJmUK54JSIFIDsCIjxaMXehNKj1ZYvqklWIRSKwW6bKPsTpc18g7BKTenyhn9/grHL88WW/eWKoq4PJ9lHBSAc0N7wA2M5de6CDyB5UtSisfPNpcJIVVnQ2aOLV4qML9lLVW/1ITURUPocL1U3/ynhLtFRUzUvobynxwg7V8gPwN0/73ICJQSj+CBVv8PYH4fDeG64DXx8BFT22TuF1wftxizR48e18Z/HkVj2KbuHeEAAAAASUVORK5CYII=",
   Kl =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALsSURBVHgBvZfLceJAEIZHggCUgXEEdgaLD0BxWm8E4JtvoALOwJl3BIgMOC5wsMjAG8HKGWjvPPb/oUVpVbIYydR2lZhBmp5vuqe7NTKUhkwmEwvN4+Fw+G4YRvF4PBbw35LHPu694967aZpb27aXOnMaGsAGgE2CAPDREuKh/eAY9C0AH7gw9tF6+O+gXWARXmrweDxuYKKeAN39ft/vdDquSpDBYFDE2DquGheAq99qtRxtMCyd0EpdYIx+AYt+ky2ZAm5fBUNpDmgdF4E99QWBB3pwexddB/CX8LNcBEpLX28BpWw2G7dUKsFxRrNSqVjr9XoVPLtYPBqN6mjmn0HxnK6v4fqRFDRxErLchuVT3jP5wz1B08WkXpKl2DOm1JuM1xbOyXghQzLlDIYwCgt4+PSZMldKb3BcFjiDFI0lqXl2Ndz4G40bDYA4CbmN+fqUxu1IUUb6I/TuzeFw+CxWLHSU6baslgdW73Y7ws0i/vhpcjUrXBh+Lpd75h4/sNaqlCJBaKeFC+ubSZ+j80tlEEmNl5TwD1Y0Wmyh46uMIrX4BMc882vj5QVjmeoGgjgJtsrS1sFFa+9URoF7T0WFr0xcV9MRY7g4P89qhU5BZZAQlBMyp3WC9BTMtHgrAfY/oCoIZhNJzaOKxZe40hRAi1mg1FPnsuma+XyeSkzqro4yyl4ttKfaUAr0+Hbz2u320oQig2sGFxSvWU0oxjlUTguVHK/Dw6fSfEonpAMLQaLVrOkRqKdSiHjJg4edC1is7tNqrCwWDqXHrFCZkwWmH+gaEaummLgBD/QwoK9uIITC2h6gM+xtM7j/z5kLZ6Kf5XL5Ht1mtVpVq9Vqq74gIegC0Nfws9jjbWC5yvCyFyC/NrrcuqiliWAKD3+Ad+Vs7GAB/DJwlSaQ6SZn8mnc2GufMAWcFuqI9pos4PKdhP4fGXaHewWpSJYAZ4jeqQStSg0OixyRipHvJCXfUx72kqV3yYKUBAzkL2iCDBhLai70AAAAAElFTkSuQmCC",
   Xl = "/assets/png/n0-0d01142d.png",
   Jl = "/assets/png/n1-79ffc280.png",
   zl = "/assets/png/n2-8d24568c.png",
   jl = "/assets/png/n3-36d0281f.png",
   Zl = "/assets/png/n4-cef3307e.png",
   ql = "/assets/png/n5-9c53233d.png",
   $l = "/assets/png/n6-6c01f296.png",
   ec = "/assets/png/n7-94f93054.png",
   tc = "/assets/png/n8-a7675e89.png",
   sc = "/assets/png/n9-f18dcbcc.png",
   nc = "/assets/png/refireshIcon-9e318457.png",
   ac =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANASURBVHgB7VdNUhpBFH7djSblam7g5ARJThBZp6LMTtEq8AToMqXAIKZcCidgrIqYHT8mlSXkBOEGkhNksoilwLyX1zNKJfzMINFs4ldFQXW/7vf1+wfgf4eIEvh8tG4OBjGTCE24A4SQXSnRfb1X7YTKTds4LyYzCMIGIIOlunBXkDBuz0oC5022WpiZACvPs/IdQbTr4WXdsusuzIGanTBALiWkEMeCsLCaOyvNdLBxmLxoHiTTcE9oHm7sNIrJ75P25OhC7V3yBRCYHi7Wh2t22vik1+eEN3ji8Jeh42l0Lza2gNJAQNeyHd/sHw83Uh71SwMEgy3D/pTbBJQnQWaYUgGi7amFgvXW6eq7GsVN94qDmbe6oQSImfJpX7l+uUc9BwXuWvtnJTZjicm19OWIUAgjIAVkZL+nfZ4IGJGr/MCMsIBHaMhhaF4ZvpcCEwISdII9UbZyp3UIAfvdIJCpP1lhNIHfYdkfutrsSvUqHJQNkpDn9HJJ4HGzmEzdWmoSiEQCgcoQgViUAA4wrmKqwj7PswVOwPtZClILTO2vqecAt63sWT3qfgmReOoHBn9cJcSyDpFZMMnfcxGQsV6Ltbv8+jJH/4pUvZZfWAQsT/1IeK7d1TzY2Im6P9QFNXvd9GuCt/hSp1KzuOUSYE1I2l7dqzqhZ7mQSSny/LM0NwE2PwdZ31XyOs0p6XA6BFGNIsVBGXqSOA05YdoQgYgscFx+yS6bvMKmP+ZLu0gyLsFLQ/C6qeBa0fWUF1orIgn4JHJVh5tKHRaWTOhfdm8aUxvuCZEEfBKB0g48AGZIw4fFI4FHApFZoGeCmOplCMSKLslcGRuruclV8Ly4tcKVMsNVQM8UHR5IynogGQqgHOue4xZQnG4UdBxWbnIv+Ip6qBDQ4F7wg4tRRQ+t48r1IEs1lvl2I5uQXq9VO0qbvoAu6TDevsWkF0vVvxBAbf1qVt6wsqfp4T6/UvJUhCDjVvZ9+/blOLIWyG46UtArPUHpRra2X30WSeBGSUJJ5FmQvuhRbHw/afM8kEK1GIfroGPqWcHKVu0xWW5KSsGah3QyaT6I/Gc0Df7rgLg5CXfUSv8M2h21vxjXH6HxC2RMhCT38+4CAAAAAElFTkSuQmCC",
   Ac = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAv2DfkCDvcBCvnzDPgFBAXz1CD60AAACTSURBVDjL5ZNLDsMgDEQHjPkmbbn/ZQskqUzl7CJlkbdAMDxbsDDugd3i64RfMs/Oq6p8pBNJl3ycG+lYIbkzyQkpnUlZSGZURdsWuxOoZ+ZfKgBV8QRVcni3/vZA6aRwsfSs3z1bSluS6DdLeYuSkNaeF4B3ixgofaLDPJym5eOm+2PP1GXJcQpV1HOEzko+4F6+jgwmeQTHRtsAAAAASUVORK5CYII=",
   oc = "/assets/png/time-22d33c56.png",
   ic = "/assets/png/time_a-714e9b6a.png",
   lc = "/assets/png/voice-off-1e3d14c8.png",
   cc =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANvSURBVHgB7VnBattAEJ0kvdfg3iNQ7i7+AYPzAQH3noA/oJD23IBzb8G5t+DcC829BafnHtx7Qeo9YH+AYbuDZtBalVYz0tom4AePXXtX2pndmZ3Z1ZEx5gSeMY7hmeOgwL5xUMDBwPKt5VfLP5ZPlmuql6FjeUPta+r/xTICBY5a7kIoBAp96Rk4tTwr/Id9v1c8s7I8t/wNEqACDTmxXJocWJ9aji37ll3PszN6ZmE5pP9iy2/0fyKVo4kCMQ3MmDtCSMmIS9qWnrb/qPWBK8tflj0yjXPiI4TDisqXot6KWRs7MzetMRHpCuBK9p2VnW3LhEbOoJMWghcVKMPSUSqIArHJ7TKE8K4CM5ptFnxqhLbPlGyjuE9HlneW7yAM1lS+gJaoc2IMNBFkDnsLuwduGgNfB98KRJAHmzeWDxAOkhWIIFt93JXOIN+dNuBbgQG9BLfIkMJLkdLYHO3L4XEQdq6R0kG75OyJ46wLcti44MR17xpSv8Qod6F+3YMVHJvN9KIIbLs2cgVOnPeVRvsqE2LH+Qly4DJ/piXHpccI/QoyO8f6PbV9Ah3uqeyVtlZozUmV1HxiI4sVk8KKSFfVkExiE+JkTRoROQWYCfrOlQp4zbnKhE6p/Asy8PLOBH218YRl6JQ1VsUBbaTU9EdBnhT9ve8PfSbuCPqsICCOawaRCIRIqewJ+vIOJzsy5jKoIjF3PgUZeKu7EfS9olKqgNcfqxTgl78GGTBTRaVxdn1KYNsl9ZU6c0RlWtZYpQAfESUmASTQe6qjkHg9wqbSofoPyJW7rRKoBBcFmTZh/DnIUrhXM69NfSoxVr4zMZ6YJEnmtDcOsckCmntzge/CKKw9R4+c50+0CnDYnysHDUmO2pWr5osDrmN6T0VbwgWNm4Ln2sanAAp/R3XOMncFHOsj1XGLTit7CpaRbXm6Q9OZ1tm+xAdcpwx9reIj+97SCK5YpBdb7q3cNpVwzwuis8i+rhaL7JrcbIxRxArt7TTOCptTYvQH/jIOzebtnCrQNb1eT5zZmjdUZGg2T2cLo7xWRLb5QsOJWUS/U8guAR6ojtmjm5ZjVonJYY+ec9Nk3K4b3fy1/cQUQRZsPoDy2xZkSuIezwGzEdoq4AJnlqN2BNmMu7OMxDT90SlbI6QCe8HhO/G+cVBg3/gHyH43a6HjlMwAAAAASUVORK5CYII=",
   gc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIHSURBVHgB7Zg7SMNAGID/89FiW7T4QBSF4BudRAW3Doqig4uLk44ianXR0cFBB7EK6uDg4ODo4uLczUERQQRBpVURoYiptJG01jMXTTHSR9JrrhXyQUlyzR1f///uT3oIY1wIeUwB5DmmIGFrcYxbnxpyQwYgI+fgzuqMU/DfuAFjNwZw2m2OrumNwws9YxSBQXimhidin7F1Iqa0CULIIx36dAyT/Qhuzo64ohFxSRJzJfreYrH2zW8deUEjWRP8SadHGm885Y0I+ezlTd3TK9s8aIA6xX/nWdoOGHMCf0MWzDJogCqCcjqjkT1pDE5PPwTA2yqam7REUSV4vDbJRcXwqfQz00fCCBD4rBbH6ODCbnylq+pgVBSWciZHwMCJYmjud5P5JKHFFKTFFKTFFKTFsNetRFTWhaGl9xnKqt6h2BpLdts4hLr2wXEmv/EwE6xvf4XOgXvQC5MUk2i1SpHLBCaCFVJqbaUR+fz6pBq8By0QDJRo6sssggoPV+WyHDlqgckcfHm0x887XE/wfFsGDZ0BTX2ZRFB4s8DdeZV8XtMYlBeLkvJ0MKuDl97auKQemNbBb8lKuQ4WJamDJaUf3rYewa9cMxUkkHSTTwr8bf0HPuXCfBbTYgrS8r8EEcKa9kuMBCGkclCVGZvTuSzwvLR9gnLy550EiDio2sxNdEryXvAL6de2v7wRk4sAAAAASUVORK5CYII=",
   rc = "/assets/png/walletbg-b089b79d.png",
   dc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHTSURBVHgB1ZXLSgMxFIb/TEcUlapIwYWKd9AKFncuFLtzo28g6jOIa9u19Bm8PIGXB7C40E2VbqRQhSIWFbUyLTi0tJ14Emwp6jTT28IPQjIh+U/OSeYc4L/DSoO7s71lDrZLzQfwXtQJCYbB2eHU2vbB97cQD+1a4AE0EQ0sMLm6HWTx09AmZ3wfLYAO7dfB+IaTxd0DE9TG5dh8T8L8SKJgpqvucVHIdQ4sQ8HA3ArcQ17kzQyKhSzcg7Ny/HBxBKuQs91H2j5dJe4e9ErxVPyS2pWc83j96BudR9/YfHnOhl5NoY/2Ho/sP1/uy3NG4lr2bZ1u1XYoPRAnNBI3MiQlxH0IKufqNmDlc7KVEOHyzPileDp5q9quNlBJF51cXHg284anyDG9IrUHyjuopH9qQXrjVLxmAy69A2bq0bG4oKYQPUdOUKjy7v9CeGA4WdjZP4ThpXWMLK5D09vhFI2yXdTJwmzmVb4c0VsOvRCZlcUoTVPmO0cLsDjb0qZXd8KU9YJoMkJzmmpCueDEKG27KLM6SX72MIOBR4tCnA4uZ34uEZXNqhIyEddKARW/nmmRwcd448K2BqiejjRD2NYA/RhzvAnCtgZI3BC1tFHhEl9bbcP0BtvWGgAAAABJRU5ErkJggg==",
   pc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAUVBMVEUAAAD9Vl38Vlz9VVv+VVz8VVz8VFj8VV37VFz8VVr9Vlz7V1v/UGD/UFD8VVz+VVz+Vlz6VVr8Vlz8U1z+Vlz/Vlv9VVz8Vln7VVr/Vl39VlwA+quyAAAAGnRSTlMA34Cfv78gYEBg73AQEJDPrzCgUM+Pz1CQj1KlcRgAAAHTSURBVFjD7ZfbroMgEEUZ0BHxrj23/f8feuqRyTEWCo1vjeulbZqswS0TGHXxDnS2HwfCE2gYtU1qtEMWzvAzz0QA3Gh0U0XR2pQOAE1xDxNgrMrAzoCLr2kErMqkBopoGUCrbHS8qgGpfFqHXoX5hFEvMMfqtkD9iqgB2lhEVrZTVaVTn4DwDlgA3jQ/uEP1KjcP9FKCga+gqAK2LwM2Gi4QwvgnikWhAdkhPStLwAhQeYSAj5SI/Mv7XD/YIbyvZgkZ0E9FQCP7HGrPMRtKiGTFBcLvd8oVEQpfWNJ46EjOEmnAbGHfACqOOKBXWSIlL123N4SYVaao7XHHrZHX3+bIt1UZIg8vle1UgqRIeu20KN1raVF+r6VF+b0movO9RlevXb0WFwmX6BJdokt0RsRTpwLwNL0isoUDMNQPwxzhjmH/20VEDSBGD/FhCPPo57daubD/AE4vti7F9O8pK2u1nNlTbDzivyO2m4GhkyUOu0RkAXwDzHZHaFWQAgPbQTyrydf262xk+rmbaGFCGR8KV+Zuf6gu8t9+BuuxEh+mtBxnQkt+cmUH6vY1STIPw5V9uDAMvAXNh6GsEnH2dEe6dxLQCbRsndPY0lFp1cU78gurYkMhQqKXowAAAABJRU5ErkJggg==",
   _c = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkQAAAACCAYAAAC5fsMCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFnSURBVHgB7ZZBTsJAFIbfK8QYExBvULYYE72BHMAm3gBvACeBG+gNCPUAcoMutLq0nkCkC5vYznOoxGoo9J+k7ObbNGn+NDPfzPtTXoazVyJ2aZOofep1CSB+9sciNCSMKDvKLk6614uq4DL0B/pxSzg3es13VaHPl6n7lTUCYuoQgDCNjnvepCr3Hkw7jQMn2OJzE6Z5u+f1kah2sfIwIAzY8ceTP2SmMYGw4n7r7GpelYsf7y+FZVq34/zslPOwD8dxOAuE+JwwYMeG8wE7Np0PI8cG86Hvz6TV80ZIdkfflGE7aI3toALbQb/YDlpTUwdFjl5gKdvel6EyPC2kN5gcYhdUMBmmpGnTRUXnKHHRqIk3EcHXwOSi0XwNoGMT9NlVDt4/uP7zSxJamDgmcSI4ygzvz2g+FL2h2ZXjtNmMaA+wYOeXO3YEdqGUwfybzIftoALbQT/ftR30J0swtoMKdv3zfANrkh4HgZHSwQAAAABJRU5ErkJggg==",
   uc = "/assets/png/num0-d3a30585.png",
   mc = "/assets/png/num1-fdab1e12.png",
   vc = "/assets/png/num2-b18f079a.png",
   hc = "/assets/png/num3-8254ed13.png",
   wc = "/assets/png/num4-5f2d81c5.png",
   bc = "/assets/png/num5-fd2837e8.png",
   Cc = "/assets/png/num6-0cbd3b10.png",
   Bc = "/assets/png/num7-05973970.png",
   yc = "/assets/png/num8-41b2260f.png",
   fc = "/assets/png/num9-310d63e2.png",
   Rc = "/assets/png/numA-594afa89.png",
   Ec = "/assets/png/numB-cad56304.png",
   Ic = "/assets/png/numC-8d88d857.png",
   Sc = "/assets/png/numD-06e782e9.png",
   Dc = "/assets/png/numE-f70da99f.png",
   Gc = "/assets/png/numF-956f8923.png",
   Uc = "/assets/png/prize0-96a81e16.png",
   Mc = "/assets/png/prize1-fe15d69b.png",
   Lc = "/assets/png/prize2-28af3286.png",
   kc = "/assets/png/prize3-6700769f.png",
   Tc = "/assets/png/prize4-5a5999aa.png",
   Qc = "/assets/png/prize5-82f7fa61.png",
   Vc = "/assets/png/prize6-57181440.png",
   Oc = "/assets/png/prize7-ca1d24be.png",
   Nc = "/assets/png/prize8-3ffac79f.png",
   Fc = "/assets/png/prize9-63d3f3f8.png",
   xc = "/assets/png/prizeA-7217212f.png",
   Pc = "/assets/png/prizeB-6c3c2497.png",
   Hc = "/assets/png/prizeC-bbf8b83c.png",
   Yc = "/assets/png/prizeD-46a95e2f.png",
   Wc = "/assets/png/prizeE-90087f02.png",
   Kc = "/assets/png/prizeF-46aeece0.png",
   Xc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABkCAMAAAAmJEckAAAAP1BMVEX///8AAAD////////////////////////////////////////////////////////////////////////////NY5A9AAAAFHRSTlMZAIDw49+MYEPSnzYwIKlvJxDCkGyVZQwAAAC2SURBVFjD7dQ7FoMwEENRZEMwX9ug/a81J9VUNDmi01vArTQzUNwb4CDMoEGDBg0aNGjQoEGDBg0aNGjQoEGDBg0a1FXE4Jy5KsFE3hCCHzIhQI0nBE9yhg5sF/MOHbgtnHbowG3kdEAHlpHLAR1YMq8OHVjJFdCBiUzQgDFnIbiSFTqwncwzdGBbfuehAWPOGjA8BRjn0aEA49t36MBK3oAEjDlrwPA0YHz7Z/CPcoEUnHY89wXC8zWTbYUx3AAAAABJRU5ErkJggg==",
   Jc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABkCAMAAAAmJEckAAAAOVBMVEX///8AAAD///////////////////////////////////////////////////////////////////9ESdXCAAAAEnRSTlMZAH8y8I3i319D0p4gqW8nEMP4kXXQAAAAtklEQVRYw+3UOQ7DQBADQVq7si5bB///WIcTWYCADtkPqIgzev2vTX7eDbh0o+Bsf/W0G3CwRzFgeSA42rs48NzcZ3Hgufq9iAM/k99NDFgeB7bu9RAHzt3fQxy425uEgDVnAixvEAhu9i4OPC/3RRz4qfMAwJozBbbJaxMHtu7rEAPWt4fAmjMElkeBoz0IBOvbQ6C9CAYVMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDYiAbD/4AhpswUwpgprkAAAAASUVORK5CYII=",
   zc = "/assets/png/trxbg-38af3973.png",
   jc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIGSURBVHgBtZW/S1tRFMe/57a0phR9pUO3ErCFTsVCW7qUvi6aTvUvKHarWczaoUjp0EKXTMWtpZMuouCggpBsggHFwclgcFNQr4JBM+R4zn1RTGJe3kPfZ7n33R/n3PPO4XwJIXi5Ya9eq44Rky+faYDTjS0L0BoBs2CasRPzlU426ErDXzJpJv4rBn1EgIn+mTp9v8rRrdaF3uzQmFyZlOkzREReOQDikdSrJ6cnpfJyRwe92cFxYvySaQ/io3cyd1/343SlXGxzoC9vGL8WEo0vkRyeR+JyEPzz+qpOwy6v//jvxuffPqELlti80Jzcdp+Gx8HhxpXHDx8hIl5QJHhv3OuZR3DjsK9lbiT7w0iKWjVnGPiIhGCmd0aGASQGp6lvdJAvL2ki53K/4yTUsb23g7c/R3FYPW5aN60HWw/EoS91v21NI9iCa2TdsX8W3OhlhxARKxFQBQlB0nENEReRHLMGd2p5JIVohbH5gopHATeMaoT2IldFolif4VQqnBgVZlWAdOLa9Ulp06pYyDQTdmtpYwXTpSK293fCjmlyv9qJhfkLB4GT8nLqZb/swe90cffooLtxhkjn4oWuNCmaOCmoWMj0DeKrmg1evtgkWm2aHETydErK9wFUayMghgsiMB/Of0vzXgiqFdrOg47rmqLXMFiRoSLtsoiee3mbn+lYIGcDdLyePrURVwAAAABJRU5ErkJggg==",
   Zc =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALYSURBVHgB5VZNbtNQEJ55jgoCFu2CouzSE2CTA9Q9QdMTkN6AqgSJVZIVEiWKeoKWE7Q5QdMDFIcT4AVSRLogi1JYxDPM2NTkx3bcqOmmnxQltt+bL89v3vd9AA8NmHegd3ngAphNZnaBsQTApagCDuV3DwF7AMFnZ/1dL0+9ucRKyIx1GWpzQIcGoAsw8p3iez98/q29Co9HNiFWEHEbkH1EbjrPa92FiMOCT6nODBUk2nWK2YXief1WlQ3U0cApXJmms7E3TBpnkie3S/wkOCNixGvj5CVVOMX9Y1wxDgWMWkNrJY2bWbGuVCcwcKf8otZII/AGrSrJd3l9/zhtzEX/oIEGt/Ha2ppe+eyKo9d7nkWqkCY7QvlkjSkXaw2tBc+oPv1sgtjrayNBxfy2GnBHMI+sBhNUolORQswW1mVQakMsAmdtb6jNGZ2MBGLve9vW81kupu/ZwuRRc9rjq46JqRBUZd86sCRwwIdE4M4Qy7l7aSw+hSVBhUcEZnPsOoYNV4VccrcYCn4ktdPEDKt32VTTcIp7fqzvkKJc94H/ewzoe/0PJVgSvJ+i/QDDGWJRVh8KhRIsC39Gtqwu7qFCTBzwubiKC6HtzQcS7hLkh9omEHydIdZ2Z8AT+dnIU8i5pdCoVyMGO/H1+MMvg09neUw8tE2LPDkJQy02L3Wok4nbvX61/nbr5t5EV2PATSZzFIaADJAZVcWeVvV4iGVXMknVZlmCgSxo/P4EsWpqKJsJNjYxif71geQtg3PULrRZ7ky/xZlzHNkYu95lK5Vc/6CY+xr+MhtZr9n70VJSN8lmEzNXuIcmOJH00M3KTamEcV5jF8naiVRrEonKpQNxxdqKchN5F9IckJdUU6nMifKaRJ4EUsX8eKupRAKCCjyiJEekjprJzVsI1S4UHs3c8CbM2NKk8wJi/kA/+GgTmarap2bsqKvDEr5maRUg1YLbJNKHhb8f/2gYvPLTRwAAAABJRU5ErkJggg==",
   qc =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAABeCAYAAAB/7LVmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMhSURBVHgB7dpNUhNBGIfxtydJibscYTyBeIOwAFKu8ADgcILACQgnEDeWO0Zxb3YmYQEX0MoNTHGCLFQsw6TtDh+VQmSffz+/BTXp7JqnMt0940zYznCz4511zVszfCxrjaf75VpvYonbGWy8Nue63iwPH89rDbdbrvXHJiozUdvDdhH+iUc3gUdFNb18Y4krztq5d668CTxqVVN/bMJkI3feWg8Mb1niZn+seGC4VXxp5yZKNvL/aBqSk1rkSBCRQx6RQ1799qI422rOrn51zLtiYee9lE42Bu6x73cG7dI7/9oSU6vcs9kj34d56YZ5ObBl5WwSTtNG4eLDyUa/vB2e/5IXZ+ur1dXld+/vzk6B5XN9XNwKF8fbp5t3x8VZPDetptnnhfNkYPl524t3pniZhQcB8faUGyAmLL06cRkelystS0fyj/S99w/PwcqK4tw0q+nvrRh5bmKK4cvVWWblv9+4Xvw7c/65JeiqbrmvudH98bBLH8d3enymNy/hyXcueYRYWdX5tN4/Dxvpw/gPvB5157WfK/vxnZYwtmoJct4fzOcl868W5yWr3Frcm4V1rORrD257uOlNkHO++3F9eLg4Vpy2W5X51DfZZa3hDhffOpzPi5+/pJWbGBd/6FQjvzEO9+JRiDquN3NLa//xmGTmJUZeN23xFpwb7ktqXnisD3lEDnn1iwsDZHk/s/rXb8r7ToDlChJA5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JAXI58YIMp7N8nMuZEBohpPXC+rV27X+DWHJPd2ctQfZ5P3/XF9lr0IIz0DBDhz47BM2f/xbrAXP/8F5RrRvj9YxagAAAAASUVORK5CYII=",
   $c = "/assets/png/binguo_tip-5bf2ec89.png",
   eg = "/assets/png/count_icon-841b89c6.png",
   tg = "/assets/png/dice_1-3eb8e22b.png",
   sg = "/assets/png/dice_2-38383685.png",
   ng = "/assets/png/dice_3-c91e0c1c.png",
   ag = "/assets/png/dice_4-3537b074.png",
   Ag = "/assets/png/dice_5-a11110ab.png",
   og = "/assets/png/dice_6-3734f323.png",
   ig = "/assets/png/hidden_money-4d2f0151.png",
   lg = "/assets/png/hot_bg-52030c8d.png",
   cg = "/assets/png/hot_top-db35cb37.png",
   gg =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALuSURBVHgB7ZpNaxNBGMef2ZS0gpqih0jFsFJUPPhysKceXBVqQQ9e/AC5WRH0G9h8B8GejKciemmggiloc7Cn5NDag7UYXPBUsTZFD0kwO32elKXZySa7aWazk5If5GVnd5b/f95nnwXoc5ifi0afTBuWZd1knF3HQ/xw3T53ZfwS3Ju8DYdlvfgN3q98suWY+GUyDVaBsUzpxYecV/4h8BDOa/w5r1nGvlMOwVIvGJ1bYOD/Z7GZKZNxLVmaa21Ea3Xi5OMpEr6MNzIgPHTOrGXS0uoCVwOUgXGYBUUgLa1MNBmgZqOSeBvSNPpo2hDTmwxgs0mDonDGm2rBYYBKH390UBZuiLXgrIH/tQegOhp3aHQY4Ey7BorDOTg0Cn3gYIJSF6dGsRProD5644EGfc7AgBe7//5CkAxBgHxey+OnABfPnccV6y0Yjg6DbAKrAVs8sfnzB8xnM1CpVkA2gRig9b0t3mZrZxteLb6T3qSkGyDxtElxg8TPL2WkmpBmgJpHevFtS/E2sk103Yltwb92fsPWn21feWwT1Lmpf3SDlFHIq9TdIBP5r1+gWwYTWdgMDIRN3xsIdC3UyMTlq3ABh02/FHCE8jPE9sRA7PgJuDMx2VGe+KnTsPnG20BPmlClWoVOKfvM05MaKOMyg9ZIifhZ33kKG2u+rutZH6DZ+jAztheDYTRsBgbCputOPIIbdQozyd6wrxc3fG16RAMmdPh0Lnn/YX2ikk0iPlbf9LhgNh4ITYiZ0CEj0SgEQeLMmGs6EzQ6DDBu+Zs9GhCfPsiA9tcf8yvuJxk4NApNKLIAYD2FDqBtoYytoW8sttB42BQnjs3cDTsy2QZm7r7MOpa0TcMoBrNToCioLSmmRcSEcuG7eezGOPYVCjarA0YpU6W57GsxPeJ2cblQzKlkYl/80qzruXYZKSKIoc10WKEnLMEcBu5S7V418PeyB4U2MTpIATZG4f+ADNEYj/dexRLHoVLLtRN+ZNgD0kIVRvkm2awAAAAASUVORK5CYII=",
   rg = "/assets/png/lock_money-47931447.png",
   dg = "/assets/png/record-5001454f.png",
   pg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIoSURBVHgBnVRBdtpADJWmfaXZcQT3BCGrvtJF4ASJ2wPEOQFkV7LBbEh2gRMAJzA+QcimJatwg9IbZFVg0VG/HDsxgwm86L15npGlL80fSUwFEj5E5YMFBWLoWIQqUHmqF6aZIZpDF7e++MMiX3YV3fvo1PyjQQJgaERCM2znyVmozEyn2B6n5h0XeA3wehrdkEVmTP3VR+qFR/4jbZHuNGoaS23Y9gDa2QC8uo/bZG2AbR0Gc9pDrn5FHj63LDT+UfUvngHxI4DyBtGO9gXLg8L3wb6j88vP/jgD/A1++pdVv+cY1/Bpw6GCYGXsJ1gjlzfYheC2sSzRJ6PZqXIDTCnAdbBqKZiKBhjAp523XS2pB+7pAyrDAPmEmCdOxAB8hrRdwjT7p0PdfxRkjuvWDJA9YyV2HM5ot6xlideYYR2+x3UqQHfLo0Y7BDerOKo5lmcKjYW21l8mWuRFesMp8poxJ93xeoZPL74WAImgNdVZxE2/swtQH8HJ7AS6P4Yt3bHhMx0I2U/U2eRVUGs3eliUd6axWaxoqDVU+mubeQM4hPicZ1dTXtN9vfX1e5i3vZ7GjdRnmHRK9ycmjKEBeHhz64H3CwVMXhldMhabcHKbNvzeYOojYvsZBewYJD1pLXXcVsyL8l1aUgOZNYVk1Kp+e6aLC6IG9NIFEwzZGA+X1aWHgIc6M/WQTZi8P9P26wRGGKUgnqRdoTXLwqhRuVsc0LBoAP8HIQz5W1LQdRoAAAAASUVORK5CYII=",
   _g = "/assets/png/rule_bg-50b5b9c0.png",
   ug = "/assets/png/rule_dice_1-0f7cd7df.png",
   mg = "/assets/png/rule_dice_2-aeca7e3d.png",
   vg = "/assets/png/rule_dice_3-5d32ae31.png",
   hg = "/assets/png/rule_dice_4-34353cc2.png",
   wg = "/assets/png/rule_dice_5-58830c67.png",
   bg = "/assets/png/rule_dice_6-fc323f22.png",
   Cg = "/assets/png/rule_tip-5d3f81b0.png",
   Bg = "/assets/png/top_1-4e868024.png",
   yg = "/assets/png/top_2-7d8a7364.png",
   fg = "/assets/png/top_3-d324faac.png",
   Rg = "/assets/png/trend1-e90c2f20.png",
   Eg = "/assets/png/trend2-db817e06.png",
   Ig = "/assets/png/trend3-2a1b1d6f.png",
   Sg = "/assets/png/trend_go-7405456e.png",
   Dg = "/assets/png/icon-5d-dadd282e.png",
   Gg = "/assets/png/icon-k3-dabf0a83.png",
   Ug = "/assets/png/icon-wg-b65da4c5.png",
   Mg = "/assets/png/cover-d3a3fd7e.png",
   Lg = "/assets/svg/datePickerBg-f47e6011.svg",
   kg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAXVBMVEX/cHMAAAD/cXP/bnD/cXP/bnL/cHH/cXP/b3L/b3T/cHD/cXL/cHL/cXP/cXP/cXL/cHL/cnP/cXL/cHL/cXL/cnT/cHD/bnD/cXL/cXP/cnT/c3P/cXP/cXP/cXLL0lArAAAAHnRSTlNmAFkMUybseUMsBvVwjF/Fs6jclkw5ORm9n4Jfz4PUDJwWAAABPUlEQVQ4y8XV226DMAwGYJMjhDOjQNvN7/+Yk7YUm8Rs0y7a/wqiT06apAaKP+c5VFelugPcTVnpH6mdgcXYU7oqSKKsSMMFhFxCTrUBMUqnVLPJc8tpIJnFhAPl6xynGuv3lq2XU0vjfsLvDDS2Msqmd+jaBvyAONJyibKiV3T+66HFutlH7U4N0Qmv+xOVnR9UA6XGR60RexrWkVacOloKo1WkJaP+BnvVjYbLSOUjdfhGLyrSTpIbOqB0kUpywNrzd6K5pOk57aSaLYCwgOxW+bQmGL5ZPFvc0nyzqpT2sWh+BDqltz7++uxgixmOadqEGrqEiXToGuCx/GrzfCDiYa9UQXTNqiZFiRZLsrHAsxz/3AZOo8J/W8a5NVpob4sklyA2TZs3zfW8FRsOZ/tbgzcdQKfyBv/yj9EndBgOIfFeKtkAAAAASUVORK5CYII=",
   Tg = "/assets/png/ticket-ce321abb.png",
   Qg = "/assets/png/ticketActive-6e6b78fa.png",
   Vg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAaVBMVEUAAAD/cHP/cHL/cHL/cXL/bnP/cHn/bGz/cXL/b3D/cXP/cXH/cHL/cXP/cHD/cHH/bXH/cXL/b3H/cXT/cHL/cXP/cnP/cXL/cXH/a3L/a2v/VVX/cXL/cXP/cnT/cHD/cHT/f3//cXLOBDhZAAAAInRSTlMAZkB53zMZGvEgjYBwXxDsDM8vVL6yqJtMJhMG4sZ5UD0G/+yBPgAAAPxJREFUOMvt1GmPgjAQgOEpVLctpRwe6+ruqvP/f6RiCtNjBONn3xACyRNCesGnKaeLewDtOqzNXdXhkAQoRNzmEvFeIRJNqzVJrZCjZOm738hS6jBRXKL11cuCqHKwEUxHT2ukpGD78bTCoJKlvaf2CbX0uJrG30iGbtEElKoy+o8oWQompqUZZnpvLENdRBsc2+cUJE93DO1CWo72T+RUJ/+KjzrB0Cqm/vX3hcEaFpu6Xwl11ihMqMHGlLumSWjNTax93GxCbUapma+q+UXYB1LDgaNrT51a2jACxrZLtHhnc8NZLh0ZlJ45iFYnSBuOtx7g+BXWnuDT2A2G+jAbEgn+mAAAAABJRU5ErkJggg==",
   Og = "/assets/png/cover-359b7ec0.png",
   Ng =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAQlBMVEUAAAC9w+m9xOm+w+i8w+m6xOi9w+m9w+m9wum+w+i8w+a9w+m9w+m/weq8xOq8w+i/v++7v9+9wue9xOq/z9+9w+jRFXRcAAAAFXRSTlMAf5/fPyDvb4+/MM+vX0+/EBBgXxA6zvcZAAADJUlEQVR42u2a3XLbIBBGgeVHIEWy5Oz7v2rTaeq1y4JsmgHGw7lK4sxYKz4OsJIYDAaDwWAwGAwGg7fGYgGT6I6AJTjRHQ5L0KI7FiwhiO6YsQAruuOCJWyiO1YsYRHdMWEJUtTAyBcA5LCwLWrbZos8q2DpIi1UxPRhaJVxcztpSfwPtmiF0BtGiDTNVwYqI+IAfGQWVfDFoXKCx/gm0rKYYpY5SYHJyK2BtELmSrNV7tmJV19aGlNc6dae1GEOqZRcgyBUdWk5TKCozGyuPuVNuaBuf75AbWlNyAN7TgVUhwZ+PoRepGWisLPTVyYzJ/uQlsxtd4GZCtEAXGxVaV2QBbIjdqXxyNwD2YG0LM2BNVPlgRz2O1ymA2ld74bMJj81kI8lNJeWyv4H0ARJAH+wraUFJhM+KtN0dc6dz48Pc6K3o7pqzmUiHvilxKZ81/R4GNJOMujpipmoHF0159a0eT3izs2j6cUD2S5qIJNuPejng+3jzl0155akkgDxli3LZf6huI+YpaW0yLzqfo2euMzzm2FiaSotTcG6y5kuKcTWfKIQEuY18LgDBy5a+UJ0E2nxmw/KlmRsAPlCVFVpOd68x785ujD6VflCoJm0KM6fEEnM4w3PLIir/stOn9aUlo/Mez50do+kzIwN1N1p2fOGW3zV18xRZqIBqSmty/N7oinOllDpgwzU3Wnp5/uamit5iseDLNdIWvBCCj3beLeTiZanWtKaIvOmSTz/D05tXyh38xUtpw2kReY1v8nsAfLJJ3s3kpbi56+FL67MHsCaTB0zEpWlBSZjVM8dXCAIBspVE2nR1xmbPKsuTz5ydrb6Y1CKiyT7c0g6uJwNivb1j4cUF6DfWWyqZeKvj5Pj8I16WsvjxF0zfRCdqHFxOhhhTDgmb5u9uzGTWGiW8tPdYcfvbggy70l7Z482I/0158DQBEnihMeOXzhb7++ZwQxeWCxCVEFSiGlbweOwiFlUYUG0+huFWQB7fuFsxufpWlpluQf1PFrUIHQdlxfQWIQSveHepZAJ8T3e1/ddm+gF7LsUMhgMBoPBYDAYDAY/xi8Ek1Bj46OEsgAAAABJRU5ErkJggg==",
   Fg =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAf5/fPyDvX78Qb48wz69P/SNvygAAAxdJREFUeNrtmt1y4yAMRgHxa2Nb7/+0251No7gWSsJ2gMlwrtqmnUbh41jIVpPJZDKZTCaTyWTy0XisYFXDkbGGRQ3HgjVYNRw71pDVcGxYgVfDkbCGqIbjwBp2NRwr1qBVC5x+A0AOD3E3MW4eeQ7FMkRaqIg1OLrKLFs/aWn8D+LlCmEjXlBlul8ZqIwLAfDMppoQq0O1KB4Xu0jLY4lNS5ICJ8itg7Sy8E7FKpMS0O2lZbFEoI/2SR0uaGP0kRVhWkpLbmcNlSnmKum7csG4+0+hqbSEzxySpAKqwwK/H/Io0nIUdqnn0MXM6TGkpaV2F5itcFmA5JtKKxWCJa5YoPUQPgM9gLS8o1ZMqDLwf5xuLhtAWkHdSb74qgM5ltBdWkb8DaANUgD+4XtLC5wQPirTDXXO3Z4fH7bCbMcMNZwTIp75S4kXfNfveJjLTnLfoUh8VMJQw7mjbN6ImLh9tL55IEuqBbro1kBfB3aOuw01nNuLSgJKUfJc5k/FhSt7T2mRec3jNXrlMs83w8TeVVqWgvWQM1tTiG95RyEXzOvg3IEDFy25ENtWWmLzQdnSjA1ALsQ0ldbCmzf8zFFi9GvkQqCbtCjOCS4Si/IF8bDfJHq1pbQiY1556ShuyUuHeWjbafnnA7fruw7CUWalBWkprfR6T7QyfbkpH2SgbadlX59rWq7k9boeZLlO0oI3UhjZwbtf79nMrTut9WLeMoX7/3kx8Quz3HxFl9Mu0iLzur8IPYCcfLJ3J2kZfv96+CJcegB5AdOGRGNpgROMGrmDC2TFQLnqIi36d84Xz6r7i7ecF9/hNujx8z1Bed5GeZEWxcb2x0OKC9D3LL40MonhnNQQO8209vPGPYQ5iC3UuC82O+VcDmv03Z7d2E5icSDMChcc+NkNReZ9Mt5Jl2ZkvOEcONogRRYVceAHzo7Hz8zJc2iPVagm6IcQJ0CJyi2yqSbsiN7eMCgCOPIDZxu+ztDSqss9mNexqgV56Li8gcUqjBqN5VMKWRE/43n9OLSJ3sB/SiGTyWQymUwmk8lk8mv8AfaIAjiWXLu0AAAAAElFTkSuQmCC",
   xg =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAQlBMVEUAAAC9w+m9xOm+w+i8w+m6xOi9w+m9w+m9wum+w+i8w+a9w+m9w+m/weq8xOq8w+i/v++7v9+9wue9xOq/z9+9w+jRFXRcAAAAFXRSTlMAf5/fPyDvb4+/MM+vX0+/EBBgXxA6zvcZAAADJUlEQVR42u2a3XLbIBBGgeVHIEWy5Oz7v2rTaeq1y4JsmgHGw7lK4sxYKz4OsJIYDAaDwWAwGAwGg7fGYgGT6I6AJTjRHQ5L0KI7FiwhiO6YsQAruuOCJWyiO1YsYRHdMWEJUtTAyBcA5LCwLWrbZos8q2DpIi1UxPRhaJVxcztpSfwPtmiF0BtGiDTNVwYqI+IAfGQWVfDFoXKCx/gm0rKYYpY5SYHJyK2BtELmSrNV7tmJV19aGlNc6dae1GEOqZRcgyBUdWk5TKCozGyuPuVNuaBuf75AbWlNyAN7TgVUhwZ+PoRepGWisLPTVyYzJ/uQlsxtd4GZCtEAXGxVaV2QBbIjdqXxyNwD2YG0LM2BNVPlgRz2O1ymA2ld74bMJj81kI8lNJeWyv4H0ARJAH+wraUFJhM+KtN0dc6dz48Pc6K3o7pqzmUiHvilxKZ81/R4GNJOMujpipmoHF0159a0eT3izs2j6cUD2S5qIJNuPejng+3jzl0155akkgDxli3LZf6huI+YpaW0yLzqfo2euMzzm2FiaSotTcG6y5kuKcTWfKIQEuY18LgDBy5a+UJ0E2nxmw/KlmRsAPlCVFVpOd68x785ujD6VflCoJm0KM6fEEnM4w3PLIir/stOn9aUlo/Mez50do+kzIwN1N1p2fOGW3zV18xRZqIBqSmty/N7oinOllDpgwzU3Wnp5/uamit5iseDLNdIWvBCCj3beLeTiZanWtKaIvOmSTz/D05tXyh38xUtpw2kReY1v8nsAfLJJ3s3kpbi56+FL67MHsCaTB0zEpWlBSZjVM8dXCAIBspVE2nR1xmbPKsuTz5ydrb6Y1CKiyT7c0g6uJwNivb1j4cUF6DfWWyqZeKvj5Pj8I16WsvjxF0zfRCdqHFxOhhhTDgmb5u9uzGTWGiW8tPdYcfvbggy70l7Z482I/0158DQBEnihMeOXzhb7++ZwQxeWCxCVEFSiGlbweOwiFlUYUG0+huFWQB7fuFsxufpWlpluQf1PFrUIHQdlxfQWIQSveHepZAJ8T3e1/ddm+gF7LsUMhgMBoPBYDAYDAY/xi8Ek1Bj46OEsgAAAABJRU5ErkJggg==",
   Pg =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAf5/fPyDvX78Qb48wz69P/SNvygAAAxdJREFUeNrtmt1y4yAMRgHxa2Nb7/+0251No7gWSsJ2gMlwrtqmnUbh41jIVpPJZDKZTCaTyWTy0XisYFXDkbGGRQ3HgjVYNRw71pDVcGxYgVfDkbCGqIbjwBp2NRwr1qBVC5x+A0AOD3E3MW4eeQ7FMkRaqIg1OLrKLFs/aWn8D+LlCmEjXlBlul8ZqIwLAfDMppoQq0O1KB4Xu0jLY4lNS5ICJ8itg7Sy8E7FKpMS0O2lZbFEoI/2SR0uaGP0kRVhWkpLbmcNlSnmKum7csG4+0+hqbSEzxySpAKqwwK/H/Io0nIUdqnn0MXM6TGkpaV2F5itcFmA5JtKKxWCJa5YoPUQPgM9gLS8o1ZMqDLwf5xuLhtAWkHdSb74qgM5ltBdWkb8DaANUgD+4XtLC5wQPirTDXXO3Z4fH7bCbMcMNZwTIp75S4kXfNfveJjLTnLfoUh8VMJQw7mjbN6ImLh9tL55IEuqBbro1kBfB3aOuw01nNuLSgJKUfJc5k/FhSt7T2mRec3jNXrlMs83w8TeVVqWgvWQM1tTiG95RyEXzOvg3IEDFy25ENtWWmLzQdnSjA1ALsQ0ldbCmzf8zFFi9GvkQqCbtCjOCS4Si/IF8bDfJHq1pbQiY1556ShuyUuHeWjbafnnA7fruw7CUWalBWkprfR6T7QyfbkpH2SgbadlX59rWq7k9boeZLlO0oI3UhjZwbtf79nMrTut9WLeMoX7/3kx8Quz3HxFl9Mu0iLzur8IPYCcfLJ3J2kZfv96+CJcegB5AdOGRGNpgROMGrmDC2TFQLnqIi36d84Xz6r7i7ecF9/hNujx8z1Bed5GeZEWxcb2x0OKC9D3LL40MonhnNQQO8209vPGPYQ5iC3UuC82O+VcDmv03Z7d2E5icSDMChcc+NkNReZ9Mt5Jl2ZkvOEcONogRRYVceAHzo7Hz8zJc2iPVagm6IcQJ0CJyi2yqSbsiN7eMCgCOPIDZxu+ztDSqss9mNexqgV56Li8gcUqjBqN5VMKWRE/43n9OLSJ3sB/SiGTyWQymUwmk8lk8mv8AfaIAjiWXLu0AAAAAElFTkSuQmCC",
   Hg = "/assets/png/AG_Fish-c641b195.png",
   Yg = "/assets/png/AG_FishActive-f0dce70e.png",
   Wg =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAQlBMVEUAAAC9w+m9xOm+w+i8w+m6xOi9w+m9w+m9wum+w+i8w+a9w+m9w+m/weq8xOq8w+i/v++7v9+9wue9xOq/z9+9w+jRFXRcAAAAFXRSTlMAf5/fPyDvb4+/MM+vX0+/EBBgXxA6zvcZAAADJUlEQVR42u2a3XLbIBBGgeVHIEWy5Oz7v2rTaeq1y4JsmgHGw7lK4sxYKz4OsJIYDAaDwWAwGAwGg7fGYgGT6I6AJTjRHQ5L0KI7FiwhiO6YsQAruuOCJWyiO1YsYRHdMWEJUtTAyBcA5LCwLWrbZos8q2DpIi1UxPRhaJVxcztpSfwPtmiF0BtGiDTNVwYqI+IAfGQWVfDFoXKCx/gm0rKYYpY5SYHJyK2BtELmSrNV7tmJV19aGlNc6dae1GEOqZRcgyBUdWk5TKCozGyuPuVNuaBuf75AbWlNyAN7TgVUhwZ+PoRepGWisLPTVyYzJ/uQlsxtd4GZCtEAXGxVaV2QBbIjdqXxyNwD2YG0LM2BNVPlgRz2O1ymA2ld74bMJj81kI8lNJeWyv4H0ARJAH+wraUFJhM+KtN0dc6dz48Pc6K3o7pqzmUiHvilxKZ81/R4GNJOMujpipmoHF0159a0eT3izs2j6cUD2S5qIJNuPejng+3jzl0155akkgDxli3LZf6huI+YpaW0yLzqfo2euMzzm2FiaSotTcG6y5kuKcTWfKIQEuY18LgDBy5a+UJ0E2nxmw/KlmRsAPlCVFVpOd68x785ujD6VflCoJm0KM6fEEnM4w3PLIir/stOn9aUlo/Mez50do+kzIwN1N1p2fOGW3zV18xRZqIBqSmty/N7oinOllDpgwzU3Wnp5/uamit5iseDLNdIWvBCCj3beLeTiZanWtKaIvOmSTz/D05tXyh38xUtpw2kReY1v8nsAfLJJ3s3kpbi56+FL67MHsCaTB0zEpWlBSZjVM8dXCAIBspVE2nR1xmbPKsuTz5ydrb6Y1CKiyT7c0g6uJwNivb1j4cUF6DfWWyqZeKvj5Pj8I16WsvjxF0zfRCdqHFxOhhhTDgmb5u9uzGTWGiW8tPdYcfvbggy70l7Z482I/0158DQBEnihMeOXzhb7++ZwQxeWCxCVEFSiGlbweOwiFlUYUG0+huFWQB7fuFsxufpWlpluQf1PFrUIHQdlxfQWIQSveHepZAJ8T3e1/ddm+gF7LsUMhgMBoPBYDAYDAY/xi8Ek1Bj46OEsgAAAABJRU5ErkJggg==",
   Kg =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAf5/fPyDvX78Qb48wz69P/SNvygAAAxdJREFUeNrtmt1y4yAMRgHxa2Nb7/+0251No7gWSsJ2gMlwrtqmnUbh41jIVpPJZDKZTCaTyWTy0XisYFXDkbGGRQ3HgjVYNRw71pDVcGxYgVfDkbCGqIbjwBp2NRwr1qBVC5x+A0AOD3E3MW4eeQ7FMkRaqIg1OLrKLFs/aWn8D+LlCmEjXlBlul8ZqIwLAfDMppoQq0O1KB4Xu0jLY4lNS5ICJ8itg7Sy8E7FKpMS0O2lZbFEoI/2SR0uaGP0kRVhWkpLbmcNlSnmKum7csG4+0+hqbSEzxySpAKqwwK/H/Io0nIUdqnn0MXM6TGkpaV2F5itcFmA5JtKKxWCJa5YoPUQPgM9gLS8o1ZMqDLwf5xuLhtAWkHdSb74qgM5ltBdWkb8DaANUgD+4XtLC5wQPirTDXXO3Z4fH7bCbMcMNZwTIp75S4kXfNfveJjLTnLfoUh8VMJQw7mjbN6ImLh9tL55IEuqBbro1kBfB3aOuw01nNuLSgJKUfJc5k/FhSt7T2mRec3jNXrlMs83w8TeVVqWgvWQM1tTiG95RyEXzOvg3IEDFy25ENtWWmLzQdnSjA1ALsQ0ldbCmzf8zFFi9GvkQqCbtCjOCS4Si/IF8bDfJHq1pbQiY1556ShuyUuHeWjbafnnA7fruw7CUWalBWkprfR6T7QyfbkpH2SgbadlX59rWq7k9boeZLlO0oI3UhjZwbtf79nMrTut9WLeMoX7/3kx8Quz3HxFl9Mu0iLzur8IPYCcfLJ3J2kZfv96+CJcegB5AdOGRGNpgROMGrmDC2TFQLnqIi36d84Xz6r7i7ecF9/hNujx8z1Bed5GeZEWxcb2x0OKC9D3LL40MonhnNQQO8209vPGPYQ5iC3UuC82O+VcDmv03Z7d2E5icSDMChcc+NkNReZ9Mt5Jl2ZkvOEcONogRRYVceAHzo7Hz8zJc2iPVagm6IcQJ0CJyi2yqSbsiN7eMCgCOPIDZxu+ztDSqss9mNexqgV56Li8gcUqjBqN5VMKWRE/43n9OLSJ3sB/SiGTyWQymUwmk8lk8mv8AfaIAjiWXLu0AAAAAElFTkSuQmCC",
   Xg =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAQlBMVEUAAAC9w+m9xOm+w+i8w+m6xOi9w+m9w+m9wum+w+i8w+a9w+m9w+m/weq8xOq8w+i/v++7v9+9wue9xOq/z9+9w+jRFXRcAAAAFXRSTlMAf5/fPyDvb4+/MM+vX0+/EBBgXxA6zvcZAAADJUlEQVR42u2a3XLbIBBGgeVHIEWy5Oz7v2rTaeq1y4JsmgHGw7lK4sxYKz4OsJIYDAaDwWAwGAwGg7fGYgGT6I6AJTjRHQ5L0KI7FiwhiO6YsQAruuOCJWyiO1YsYRHdMWEJUtTAyBcA5LCwLWrbZos8q2DpIi1UxPRhaJVxcztpSfwPtmiF0BtGiDTNVwYqI+IAfGQWVfDFoXKCx/gm0rKYYpY5SYHJyK2BtELmSrNV7tmJV19aGlNc6dae1GEOqZRcgyBUdWk5TKCozGyuPuVNuaBuf75AbWlNyAN7TgVUhwZ+PoRepGWisLPTVyYzJ/uQlsxtd4GZCtEAXGxVaV2QBbIjdqXxyNwD2YG0LM2BNVPlgRz2O1ymA2ld74bMJj81kI8lNJeWyv4H0ARJAH+wraUFJhM+KtN0dc6dz48Pc6K3o7pqzmUiHvilxKZ81/R4GNJOMujpipmoHF0159a0eT3izs2j6cUD2S5qIJNuPejng+3jzl0155akkgDxli3LZf6huI+YpaW0yLzqfo2euMzzm2FiaSotTcG6y5kuKcTWfKIQEuY18LgDBy5a+UJ0E2nxmw/KlmRsAPlCVFVpOd68x785ujD6VflCoJm0KM6fEEnM4w3PLIir/stOn9aUlo/Mez50do+kzIwN1N1p2fOGW3zV18xRZqIBqSmty/N7oinOllDpgwzU3Wnp5/uamit5iseDLNdIWvBCCj3beLeTiZanWtKaIvOmSTz/D05tXyh38xUtpw2kReY1v8nsAfLJJ3s3kpbi56+FL67MHsCaTB0zEpWlBSZjVM8dXCAIBspVE2nR1xmbPKsuTz5ydrb6Y1CKiyT7c0g6uJwNivb1j4cUF6DfWWyqZeKvj5Pj8I16WsvjxF0zfRCdqHFxOhhhTDgmb5u9uzGTWGiW8tPdYcfvbggy70l7Z482I/0158DQBEnihMeOXzhb7++ZwQxeWCxCVEFSiGlbweOwiFlUYUG0+huFWQB7fuFsxufpWlpluQf1PFrUIHQdlxfQWIQSveHepZAJ8T3e1/ddm+gF7LsUMhgMBoPBYDAYDAY/xi8Ek1Bj46OEsgAAAABJRU5ErkJggg==",
   Jg =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAf5/fPyDvX78Qb48wz69P/SNvygAAAxdJREFUeNrtmt1y4yAMRgHxa2Nb7/+0251No7gWSsJ2gMlwrtqmnUbh41jIVpPJZDKZTCaTyWTy0XisYFXDkbGGRQ3HgjVYNRw71pDVcGxYgVfDkbCGqIbjwBp2NRwr1qBVC5x+A0AOD3E3MW4eeQ7FMkRaqIg1OLrKLFs/aWn8D+LlCmEjXlBlul8ZqIwLAfDMppoQq0O1KB4Xu0jLY4lNS5ICJ8itg7Sy8E7FKpMS0O2lZbFEoI/2SR0uaGP0kRVhWkpLbmcNlSnmKum7csG4+0+hqbSEzxySpAKqwwK/H/Io0nIUdqnn0MXM6TGkpaV2F5itcFmA5JtKKxWCJa5YoPUQPgM9gLS8o1ZMqDLwf5xuLhtAWkHdSb74qgM5ltBdWkb8DaANUgD+4XtLC5wQPirTDXXO3Z4fH7bCbMcMNZwTIp75S4kXfNfveJjLTnLfoUh8VMJQw7mjbN6ImLh9tL55IEuqBbro1kBfB3aOuw01nNuLSgJKUfJc5k/FhSt7T2mRec3jNXrlMs83w8TeVVqWgvWQM1tTiG95RyEXzOvg3IEDFy25ENtWWmLzQdnSjA1ALsQ0ldbCmzf8zFFi9GvkQqCbtCjOCS4Si/IF8bDfJHq1pbQiY1556ShuyUuHeWjbafnnA7fruw7CUWalBWkprfR6T7QyfbkpH2SgbadlX59rWq7k9boeZLlO0oI3UhjZwbtf79nMrTut9WLeMoX7/3kx8Quz3HxFl9Mu0iLzur8IPYCcfLJ3J2kZfv96+CJcegB5AdOGRGNpgROMGrmDC2TFQLnqIi36d84Xz6r7i7ecF9/hNujx8z1Bed5GeZEWxcb2x0OKC9D3LL40MonhnNQQO8209vPGPYQ5iC3UuC82O+VcDmv03Z7d2E5icSDMChcc+NkNReZ9Mt5Jl2ZkvOEcONogRRYVceAHzo7Hz8zJc2iPVagm6IcQJ0CJyi2yqSbsiN7eMCgCOPIDZxu+ztDSqss9mNexqgV56Li8gcUqjBqN5VMKWRE/43n9OLSJ3sB/SiGTyWQymUwmk8lk8mv8AfaIAjiWXLu0AAAAAElFTkSuQmCC",
   zg = "/assets/png/BB-0d6d87d8.png",
   jg = "/assets/png/BBActive-dcbc63b9.png",
   Zg = "/assets/png/BG-b697a78f.png",
   qg = "/assets/png/BGActive-741637e8.png",
   $g = "/assets/png/BetSoft-791013ca.png",
   er = "/assets/png/BetSoftActive-a2fb8c94.png",
   tr =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAQlBMVEUAAAC7xeq9w+m9xOm9w+m9wui9w+q+xOi+w+i+w+m9w+m8w+i8wui9w+m+wui9w+m9w+m+v+e8w+m9wum/z9+9w+iwpH2cAAAAFXRSTlMAH3+fX98/37/vb78wr9+PzxBP7xAzfFCOAAADCElEQVR42u2Y3W7DIAyFMRAS8rMkXXn/V11VaUqZc2zSTbvyd1e1AR/bx9A4wzAMwzAMwzAMwzAMwzAMwzD+m3sMH7m0MH0/Eh4fPp4MT5bwxHufHIMei2f51+SbGROS4XNpJR2hITzX0esLhnKBPpDjJLwNLkgs7ULuwgbd94+0XOrp8gWC8+f6C1ssBRNBYnQ80HGtIKlgwpUdCInV2fVd9IIs7ULG0vBbKtcZlV3WRBCH9sVC5qbMxHKd1R3wgD6TayCIQuDAwlYfyg9uVDF3YB/YIbNroReFIB3Y6gQUHiTR7TfwJYQ3Qi8L2YoIoQ4P7CgSPdJridALktBoe7IWkQADoYaK3FhimfcYcNFAkhD/kiLJ6jNbArgSuGDQCqpbPTkkpO7cdZCsHoB3DvbCyEK1yLVAVSiZC+HXsY2A1UFn7dyVjAVXa3JNrFUoHRfCBlZHQbJ60jtjENJA2CEyfdUbG+iY+6sO10tWD2ogdNKXO3i8eWTFOpQBCAmvrryJ952sBhKkId+DWmkMdW+EcyG+mveLZPWoH2Z9wX5ObxZk/pGU9TTCsQpLtDpXSQ1Wn3C11jdm7wN/JmSul42S1UmfOYN0Gva/nr0TyFZ+HVgbupoFmO7YYnV8iITLVo+o7NXAQv/CEkp33iWrM7Hjn8ze8yiHWocLktVJyqhudbf8evaOzPzgOrQDq8OM6lYP+H69XJ+9qIErrdDqKN0d2BP5+T2LEH9gV99zDJLVZy5et/rksJDt6uylYyXAKpQsQSNTk9UPMh7MmD2zpFS3RpYaaHVo5KnhLWUnN9460zlg9ipCOuKh8qeTdojcN/U9UDMEZ++TAevAVkd9k6nitubzpQ92kEhp1KXTxAU4eLHVcYfrfM7gj7dGOgk5ExfCq69bPb6noya2ZaPDsxe/dPXitx08lnU2cgyaSgPxfPYejGjw6lany+UY3Snzun3qBeExLfINYlMamN7srM3v7g+I4Dp0k6ZKEK0+tJeiW8bkDMMwDMMwDMMwDMMwDMMwDMP4d74AL/Jekqvz+LIAAAAASUVORK5CYII=",
   sr =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAH99/n78/72BfbzAQr4/PT3DJVIrFAAADAElEQVR42u2YWZLbMAxECXCTtYf3P2xcriSKDGKhZ2q+8P5cNpcG2C1awXEcx3Ecx3Ecx3Ecx3Ecx3Gcn2adEtZmIf8dkp4f8EV+saUXMcYSCPCcvMq/hmhmLpyMWJuVcm2NI1IdqE+Y2gCYIFAKXUZvyNTsQlZhAQx/0Gqplyu2Af41FQeW2BrPgxTGShR02BtSGk8aWQGIWDOrvorekM0u5Fcz/BbaOLOyyl6AJZB1VSGLqTJTG2cPF3RDtQQDSRRCAku3em5vnHBjwc46og2XYAFFIUSHanVgFF4U0e0n8yULPQhKpY7WLFafmTkuQPQIaoXQG1L4aHuyN5HEbgQMHTlJYYn3COykCSQhUezctdxCp6CuFFyQtYbqVi+hJ4Se3D1LVk+Mdy7WRqhCtyBYgNtWKhVCr2MHSFanJ2ulriRsfLdyMLHftoJUCAkshCRZvegnIwtlAM0hutWxm0v4flNECChZnagshszClR2OYTR7U7dW+D79Ek7xvlPVjSQp5JH2ykS+n43UFxJveb9JVp/0hxk23s/lw4Ysb0XZuzv8dduWaHWqEgxWz3y39g+y90nsCVnu006S1UHPnCw9DfHL2ZuZatX/A+vgrmaJLffDYnX+IZKGrf7g2n4LLO5fWOHKXVfJ6kTs/C3Z299lvusISbI6SBXVrR62L2fvTMzPXIdW0eq0ogarJ/5+vY1nL3eAb1oVq9NyI7Mm5+fPLAJ0wKq+58iS1RcqXrd6DryQYzR74ZqJYRdaVlgjg8nqF5UGs856jcqCFa/SaFano7PhLSXKB29foA+TvYoQBPo9HV20h8h6MNYjYaEDbPa+yKwO1eq0XRVunHtlplbfx0pRV7qFS2zw6lYPtQ1TF/LH20bpbLkCFUK7r1t9+lzHxWSrBjLZK750jeK3SB7Ldg4IBMjNwKOfvRczF7y61WG4HXPosuxH1RtC97TJN4hDOcDw4ck64hq+gYm5Dp1SqiTR6tneCtzmEhzHcRzHcRzHcRzHcRzHcRzH+XF+A+HGLGf2hX9qAAAAAElFTkSuQmCC",
   nr = "/assets/png/CQ9-9faff6b9.png",
   ar = "/assets/png/CQ9Active-362e9af8.png",
   Ar = "/assets/png/Card365-2780fce5.png",
   or = "/assets/png/Card365Active-7d8a7b67.png",
   ir = "/assets/png/DG-a2a07dee.png",
   lr = "/assets/png/DGActive-9e0c5335.png",
   cr =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAP1BMVEUAAAC7xeu9w+m+w+i+w+i+wum8w+i9w+m9v+m9xOm9w+m9w+q9w+m8xOe8w+i9wum9w+m7xey/z9+9wuq9w+iD6jxaAAAAFHRSTlMAH3+/319A7xCfj2+vML+fz08QTyv4WA4AAAKhSURBVHja7ZjbkqsgEEUbuXlj4kz4/289qZrCVrrbnJdAMtXrTQWLBZuLgqIoiqIoiqIoiqIoiqIoyl/hx4QHBlrhrQw8MPtVAMpUHs5nCT+5/Eu0Q4IWDFkGHoyxXM1AMLngjxpDzCc2D5TWIjCXqwgEnwsGdlADcTRizUXCfkmzZcujFQdpyywDEBqLQKRtkZOVXCbwyWwugtlycrLGohazyASEtiKYrfQsWQbHo3W6UGTxBLjO1pgL32U1zsg2e++XNWYkwOtAEfO8iBWSFUnU8lfYS7nMZ7O9SMh8mbXcvsEvjk2R4W9DexFs4AJHYpUsLzQYTSIgrUXkbN3rxFgcoTOJnSUdREy1zFYz+4alhFfNTE/0EAHLZctV3exRrGbkstVWRM5WqJO1XuTHMs96iGCPjmKyYD9kAWVhhrSHCPaoF5MF+xYClPDyExeKuJqZ69FVTJbBIpSRPnyVCGW6zNZc93HgNxFxuLqI0NmKyUr/JeLIKaWTyFINQMJkfZYIZqsSGz5MpM7WRha7a5H4LnME9+35tERt9BwzsatWO5FgKsZzUyJm66C10LZaoCTRsumGSLNlmVpoSvFM7tqL0DlgMCmsKWF6k7PWKVvu0MGee9Mg180jIJ1EsFcNmywI9e6PeGYE+4lgtoQ1SPxLbBwzgt1EsKHW8+0apC/alf127CeCv7OxDj8TYiL16LdjP5GQK1Z5cx2wlm3zT55uiIiULSnxo8s7bgrmx6QFNV70eYgiMlK2xLU0VaqXA9hRJDxtmM8EKVg9RcDlI9/y6557dBOhhSNw3IV0fRGPniKYLXktNS5T4gKEniKw0WRRPFG5GSB0EqGlHciEmzuEahjhg0n3ZXjgw0dbKIqiKIqiKIqiKIqiKIqivAv/AFLcqcH3ZS0/AAAAAElFTkSuQmCC",
   gr =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAH79/31/vQBCfj2+vMD/PT3F9VZIAAAKYSURBVHja7ZjbkuogEEUbwi03I///s8eqU5lWdrfOi6BTvd5iSMyC3ZBAhmEYhmEYhmEYhmEYhmEYf4Xi8g1HvYheh264n6NMyHyeXB4l4hzqf5KfdurBVHXoRknn0UKAqyfxXmNK9YEjEtJbhJbzKBEQ64mjH1iDCRix7iK5nmC2/Hlq40E6qshEQGcRSvgserL2UAE5md1FOFtBT1Y51VJVmQnoK8LZ2l8ly/F49EoXiqwRoOfZKvXkes7GlTmWGOO6pcpkAt4g4l438UqyEkSt+stPq1DlbPYXyVVus7XpD2KKnPwz9RfhB1zpntQkKzYPjCaJmN4ieraubWK8Nj/tYpUMEHEwzT5U9sytlFstQk+MEOG+XqXAXThZyoJRhGx1FtGzldtkbSwGeMxWVxHs0aImiw5eR4FVGNKeItijUU0WPauDjG9cbxMJLYvUo5uaLMdNkIIn3yWCzE+ztbR9nOVFRB2uISJYrZys/VciAd5SBomszQDsnKzvEuFsNWLTl4m02Tpgsnsukj6lRnjdXh6mqAPfY2ZCSsdiv7iGQszdtlB60Fp/96y7atl1QcRseeEqNkUi5q6/CNYAx8jLpsAsvId1FsFshbsOjtKdJula/A7oLYK96sRkUW5XfyZ+yvdIky2lrtVdYheEEewvgmsBJwtuJVbJJn47jhPh7Wy+Rq6EtMN1OPmOE8m1YcN7YcFn32VPnv88O0DLlpb4EvhcmLMrbl9ZQ/s87Lb3ixlR59K9UX06gANF8ssHixXQgjVShEK956rf7rXHMBFsnEjiqqTLg8dIkSy95uPqhySo87EidGCykAgqsyNgkAi2DqRzme9c/FToi9mv63QjXr7awjAMwzAMwzAMwzAMwzAM41P4BxMxkWB6AFDCAAAAAElFTkSuQmCC",
   rr =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAP1BMVEUAAAC7xeu9w+m+w+i+w+i+wum8w+i9w+m9v+m9xOm9w+m9w+q9w+m8xOe8w+i9wum9w+m7xey/z9+9wuq9w+iD6jxaAAAAFHRSTlMAH3+/319A7xCfj2+vML+fz08QTyv4WA4AAAKhSURBVHja7ZjbkqsgEEUbuXlj4kz4/289qZrCVrrbnJdAMtXrTQWLBZuLgqIoiqIoiqIoiqIoiqIoyl/hx4QHBlrhrQw8MPtVAMpUHs5nCT+5/Eu0Q4IWDFkGHoyxXM1AMLngjxpDzCc2D5TWIjCXqwgEnwsGdlADcTRizUXCfkmzZcujFQdpyywDEBqLQKRtkZOVXCbwyWwugtlycrLGohazyASEtiKYrfQsWQbHo3W6UGTxBLjO1pgL32U1zsg2e++XNWYkwOtAEfO8iBWSFUnU8lfYS7nMZ7O9SMh8mbXcvsEvjk2R4W9DexFs4AJHYpUsLzQYTSIgrUXkbN3rxFgcoTOJnSUdREy1zFYz+4alhFfNTE/0EAHLZctV3exRrGbkstVWRM5WqJO1XuTHMs96iGCPjmKyYD9kAWVhhrSHCPaoF5MF+xYClPDyExeKuJqZ69FVTJbBIpSRPnyVCGW6zNZc93HgNxFxuLqI0NmKyUr/JeLIKaWTyFINQMJkfZYIZqsSGz5MpM7WRha7a5H4LnME9+35tERt9BwzsatWO5FgKsZzUyJm66C10LZaoCTRsumGSLNlmVpoSvFM7tqL0DlgMCmsKWF6k7PWKVvu0MGee9Mg180jIJ1EsFcNmywI9e6PeGYE+4lgtoQ1SPxLbBwzgt1EsKHW8+0apC/alf127CeCv7OxDj8TYiL16LdjP5GQK1Z5cx2wlm3zT55uiIiULSnxo8s7bgrmx6QFNV70eYgiMlK2xLU0VaqXA9hRJDxtmM8EKVg9RcDlI9/y6557dBOhhSNw3IV0fRGPniKYLXktNS5T4gKEniKw0WRRPFG5GSB0EqGlHciEmzuEahjhg0n3ZXjgw0dbKIqiKIqiKIqiKIqiKIqivAv/AFLcqcH3ZS0/AAAAAElFTkSuQmCC",
   dr =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAH79/31/vQBCfj2+vMD/PT3F9VZIAAAKYSURBVHja7ZjbkuogEEUbwi03I///s8eqU5lWdrfOi6BTvd5iSMyC3ZBAhmEYhmEYhmEYhmEYhmEYf4Xi8g1HvYheh264n6NMyHyeXB4l4hzqf5KfdurBVHXoRknn0UKAqyfxXmNK9YEjEtJbhJbzKBEQ64mjH1iDCRix7iK5nmC2/Hlq40E6qshEQGcRSvgserL2UAE5md1FOFtBT1Y51VJVmQnoK8LZ2l8ly/F49EoXiqwRoOfZKvXkes7GlTmWGOO6pcpkAt4g4l438UqyEkSt+stPq1DlbPYXyVVus7XpD2KKnPwz9RfhB1zpntQkKzYPjCaJmN4ieraubWK8Nj/tYpUMEHEwzT5U9sytlFstQk+MEOG+XqXAXThZyoJRhGx1FtGzldtkbSwGeMxWVxHs0aImiw5eR4FVGNKeItijUU0WPauDjG9cbxMJLYvUo5uaLMdNkIIn3yWCzE+ztbR9nOVFRB2uISJYrZys/VciAd5SBomszQDsnKzvEuFsNWLTl4m02Tpgsnsukj6lRnjdXh6mqAPfY2ZCSsdiv7iGQszdtlB60Fp/96y7atl1QcRseeEqNkUi5q6/CNYAx8jLpsAsvId1FsFshbsOjtKdJula/A7oLYK96sRkUW5XfyZ+yvdIky2lrtVdYheEEewvgmsBJwtuJVbJJn47jhPh7Wy+Rq6EtMN1OPmOE8m1YcN7YcFn32VPnv88O0DLlpb4EvhcmLMrbl9ZQ/s87Lb3ixlR59K9UX06gANF8ssHixXQgjVShEK956rf7rXHMBFsnEjiqqTLg8dIkSy95uPqhySo87EidGCykAgqsyNgkAi2DqRzme9c/FToi9mv63QjXr7awjAMwzAMwzAMwzAMwzAM41P4BxMxkWB6AFDCAAAAAElFTkSuQmCC",
   pr =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAARVBMVEUAAAC9wui+wuu+w+i9w+i8w+i3x+e9xOm3xOG9w+m7w+e/x+e7wOm9w+m9w+i9w+m9w+m9w+m9w+m6w+e+xOi6wue9w+gKq3thAAAAFnRSTlMA3z+/YL8gnxDvQCAff2+vz49PMN9gBtbyoAAAAlVJREFUeNrt292uojAUhuGFBdsCpfzod/+XOnSYiuK4QXdM1mr6njTBoycpLDBAX61R6CdKIA3gQglUYK4lItN1DQkuQpoLYCXvMRUg/7YYFMltKoAuggoSnDkZSgIylwhkmpKANLPAmwQgOgBcApAiACoiH9ae5BYhdVg7kluE0LXykh0RIr9niKlF3jzeIMbpkuZGK/NcUQGiichjAfTzaklekwWKlsjEOYIQCWp0JYXarjRhwkeIFQYZHsfGClHCJjzm7P8grUfVkpziqWA8rAsQqfdauH/E7e4gxiltSE4R0ofV30G0sGd3hG4DUfBV6wkidY7Ih5jzM8QS1dIgncWl2ULQD/YJUruS+GYwp7eQ0BYy8r561ZirXkHQkYs/qLDyHfGPkJoabHuAnIhrjxAomwjkVS1fiCvUeBzi6wERMqreEZsGzNXruGiwV4RMYeUjsZjTARLSZX8YMoDVQzxWSOwgRPMa9RlCPgnIQM0lCUiIIcSOZ58EJJQhTMoQ9pDTWo+lYT3k5EBoTWGppFtlhmzLkAzJkKN9HzKdlox0yK0MeV2GZEiG/FyGZEgKkEEtDdIhCktVhvxQhmSIVMh5LUL69VAnB5LMH3QZ8l4ZkjxE4eN4fZdR41cx+vZ1LPBxBa93axw+yzpu7zO3Gh/kOb5F9/7+6nntqrXuLYpl/I3SO/tr4HZybCgFDlVx3VVr1wMUy/nt5VvtgJ3YXXJfUjxeJ+vbpGshZJDv54QM8v1aLWSQHxn1Qgb5kVEvY5Dv1157/K0SeHJsMqexnL6v+APsxhEqPRi3qgAAAABJRU5ErkJggg==",
   _r =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAvz8g32CfEO9/r8+PTzBvcNmyeXoAAAJKSURBVHja7dvZjqMwEIXh8oI3tpz3f9mxhxgSMgSSUbdclv8b9+0nGRdpGfrRlEA/UQUZAJoqSCOmiMjOsyLGZYiKfzjOe0wgdt9iEMS3SQPzXxD3h8VKS1VAYpVApqkKiIqCYCuAGMR8BRB9P3ZDWnviW4bItM7EtwyhTgTODtLcJ/oxxEqWL48rxHrTUWx0wI34JRAzRBSwAPq4OuLX5ACtiGyeI0gRo0bfUUrNnU1LhjhmkAFPj8IGEcwmPGLuXxAVIDgdW/lRsAHOx1VxfdfC40/c2wPEemEs8SlD+rSGB4hhNumRWgci41PrBcJ1jvCHWPUKcUSSG+TmoNUegn5wLxDpOyo3i5jZQ1J7yFj26SURE0cQ3MgjlV+Lyx3xzxBJCvueIJJK7RkC4SqBHKXKhXgtxuuQIAdkyCh6T8U0ICa3caFwVoZMaS1H4hAzdwhM11+GDCjqRzw2SO4ixJQ16huEQhWQgZSuApIqEOJGFaqApBqkkBqkeIjc6rE0yDXPB0JbAksdrXUNsq9BGqRB3vebkEkuWe6QtQY5rkEapEHe1yANUgNkEEsDd4jAkmiQNzVIg3CFqK0M6dXazAdSzT/oGuSzGqR6iMDXlfVdhsR/VdC3r6PG1+my7tZ4fJfzpd1nVgZfFEq8Rff5/urL2lVbt48oruDv4D7ZX0NpD8eOonEpUequ2uouUFzJt5fX1ICTijtyDykBx/H6NqnTTAb5eZ7JID9PGSaD/MqoZzLIr4x6HoP8PJUvMwuGD8cuK8du+nnFHwpT0ee1/OoeAAAAAElFTkSuQmCC",
   ur = "/assets/png/Hacksaw-d5a9f183.png",
   mr = "/assets/png/HacksawActive-c206e018.png",
   vr =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAARVBMVEUAAAC8xOq9wui9w+m9wuW7w+e+xOi7xOi9w+m9w+m9w+m+w+m+w+i9w+m9w+m+wuu9wum8w+i9w+i8w+m9xOq/xOq9w+g5UtMaAAAAFnRSTlMAH9/vEEDfMH+Pn8+/r28/779gUI9fkkxLsAAAAtFJREFUeNrtmsuSgyAQRZuHKKIkmkn//6eOpkZJhsfouKC1OEtXnoLbdiNQKBQKhUKhsAlZ2bbnHCeE6bStJJyQSnfoYXQFp4I1AiOolsFZqDpM0p9jWVaNBB39VZEaN0F9gz0EbkQ9gS5S4w6+yFZjpnAXiuj2qhXuRNVAkFrgbgRBk9njCiazxxVM3nN+5sRLhf9GUarCGg/wBWQY8RAPIAJTeAhBZXO1OHGBzcXwMDQGlA4P0wEBKsRrLEmPeIklYfhi6O/ouLcD+vA7Rsn/fW9xgtcAzOCCkQCM4yeGAViM0UBuFE6Mn2FhAKvJ58MGIwjIiHv7GmbWLQQvmMA3DLxoqMZd4wzzRLzWXkDaRENeTETEr8zPJVQk65bElAiM3ggVr9cSclKlRcAGTKQhGBIbFnE0gWFQcgxgISc6IpI2YSGTFnLSpUT8cCsZN+khJyYuUtcBEyO9b4ynnwURF6mC4e7WbwwtEUyIhMLtovDA30A+0iLBcLu5djyRSNikWerZiUSC4XYmhER4QiQe7udiQqeRT4l44U43kAZy0idEEuEWtX8CM0BO2oRIKhJiqcyGyEBiN4hgk2wgaTSN1RYRfG5pIG+QE5kUcSapBlJQGKygS4n4M5UINJCWQNEC0CkR38QEGndGIOvL6z7WF3K7ZAz9KlSBWepBICITYn3N/qMvZAp9kyZwvihV/ibeVSKlmw4dqtFrGtyzcVVd6axVBAbd3b95KB9iQ4e7oTawr3E/AImv4dElodIwLlSXSMj+ew/kzuYcUuAhOJEFAXjgIUYgg8YtEP3F847kBzYWlZsoLxg/f0COXQW8E7sKOJtcw2M2uYbHZMJ354Okx5z4c+f8v5f8Nam6+4uRb44HmSuZYVh7geX4URnwTwYSg9Sf3PpLaMywlkez0ZCtVWFu2qDHoM+zGG/Im9WDueME531rb/QDXigUCoVCgQbfJ0FDaxvgQ40AAAAASUVORK5CYII=",
   hr =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMA3x/vEECPML9/n89fr28/UFzr1bgAAAKkSURBVHja7ZrNtqsgDEYTQARB2rz/y167PNbew0/1OCCy2MOO3IUPEg10Op1Op9PpHEINYZoRaUE6o8Og4IYM2lCE0wPcCmElZcBJwF0YDBWZ77EssUaM4b8qStMhuG+wp6SDoAe+KE0n0GxPY4F0CmS6vUakk+AIDBklnUYyNHl5tGDy8mjB5DPnd068QvozyOkU1nQBDWzwdIknMEEgXUJy2VwTLTSwuQRdhkeDYugyBhgwELWxJDNRE0vykxAzS9qRk6EYlJSl/v0+bfW4cLThVOJMdgIgUA4LtUFa8P+HRUS3y/ajpQwSKhBHfYQX9AP+bDpJH7j1R8s17ppeiJQIjDLxl1uml6LLiMQns99CxfLcUlQSAR+1UPnzWkFNhrIIhISJcgxDEvIicSRQlNqwADXRRZHYpFD3T1ATUxKJw40qbzJDTVxeZBwTJk5Fd0ykXwWZFxmS4TbvO4aXCBVEUuHeo/Ck30A9yiKZcGtY8TcSSZtYWLE3EkmGezdhJIIFkXy4/WbCp5AviRTC7VMnM9Rk/ipCulRAGi7l71QQKUVCbiezY9KQhAMiZIsFJI+icTgiQv5IAfmAmqhDIuRLBaTk0FiBKYnEPZVMFJCBwaEFoEsisYlLFO6CQda3x32+H2jfJT71qRATvdSTQUQW5PsxZ9rQa4hjE5t4v6iwfhG/n0SoraEdtDruN6yf6TcmBGTQ6J7+zMP5JTYYOg23hn2L+xVY3IaNfXqDoYmEnJ97YPdubmMvPO4/V/OkSzAa02xlqKadMadmBs/aGQVsZziznXHZdgaY2xkpb2fIf8Hj4XiwGclMI6YGlmNFGPqKYdFIfeUxN6GxbjDMZsOyPavSPLSjCKPvsxgfqEfQxklaQJyn8OAf8E6n0+l0Ojz4ByXA+kXvaGg5AAAAAElFTkSuQmCC",
   wr =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAQlBMVEUAAAC9w+i+w+i6xei9w+m9w+m9xOm9w+m7w+e9w+m9w+m9w+q+w+m7weW8w+m/v+++wuuxv9+/z9+9wui/xeq9w+ifpIyzAAAAFXRSTlMAv98gf++fX0Bvr4/PMFAQPxAQsDDf9J/kAAAC0klEQVR42u3abY+jIBAH8AHkQUC99m6+/1e9mtwtFBCSsgHZ8Hu5po3jzF/BLkzTNE3TNE3TNA3LYEQzkmTpBY4eTiSDHgiGJBisI3qUwjgGNjgo1uErtLfiOwoACmsZaE8HEXHRqSGgtXCQJLwcHGst0JwKInLasZqC5kwQkRPBWgTas0FEXhgfsSUqiMhpcU1avmgbRHp5pzunRAYROcn0CTFJc3dZprvOlvAiEv/tF7xb8AvPjSmF5mwQkZO78ADXlahcd6E1lojIlpsQk3mCHx0L2bMRWSFycNfBSMdCRGLmtReRTEtophAL9eojwl1t2fv1A5xoJluJI7IWTicOArvOzwrV6iOyFk6H+5/w/fG/rDGTiAgJIhKiF4d33usxUo5IvhDJnG0l6Eho7EhERAW1RbCIApR1j8iBRRIaKEekkFh1xw1iKiJYiMhyxy37JxEhN3yJohIRMYVJZ3fc5n4SkQVLVmiOxGN0lO6hFEs4lPWPiLzjm4cPIsLoV8OET9OecXfjzhM3ZJZPlQhbxb1eNuYiQkoRiXv46/oYhcYSEdmzjzVGcydL2+1zy5dX5CLytJg7LCoKaRsRjdk9ufA+W6c+IiwzOk+BDst+H7TF44jI64gwW1jfsh5PxHJEdni389L6VvRaba2JK0gvZkcR9NAHxEyPxVY5ItYPx0rQRxlElA0ClNcuIlYp9rLtq7H4jrL/1Em+GN50Y1WOiMYKbRtSjshwP+nqOCIbfgMNteojsmI9+4C2tlREBqzDv/quSSP+G0riKaKwEt+hORbeZeojwpcHtCcSESFYgXQpA2Tqzflv8iFh5AO6YNRfUIzrSdFhMJqnt0UauSESxb6dZSwcHTpcQ/7Fgnb/bamWuMcK7ztXJGMPFscEPlwdQJN1bDCa5YfUwTDBjjdXQO6yVK0myS2Wqt+B7YbQsxNUGzngUE3TNE3TNE3Tj/AXlC//VaP+WkMAAAAASUVORK5CYII=",
   br =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAv98gf+8/n69vEI8wz2BfUL4prOkAAALLSURBVHja7drRkqsgDAbgAAICYs37v+xpZ3oKaoSdsgOyw3e7sx1j8mu0hWEYhmEYhmEYhm45PJkFI3l+QWJEsoeAFhgePcBhGd2iFCHxYAHLsYw0UJ/BPQ4ACks5qG8+RCREp4SG6iw/ROTJSiw1QXXqEJGXDYspqM4dIvLCsBSD+vw+Ii9C9tgSFUfkbQpNmj5mjzt62psbp2SNI/K20gckVp66yoq56WzpOCJv+nJEJvyQqTHlUJ2PI/IWTjzAdSUq1V2oTRARWVIT4hJ3cNuwkC0ZEQMnVoYOnjQsRBMzP5+mh2wJTxTioS46IjLUlrxeWwhOM1kDHRFDH04iCOI6PwaqoiNiMocjw3/sLfGHVeaIiLDMosEv/rzJVreRfETShTxEsBiGwQMqs0REVFQbCbM45LWPiEVay4bQEckkVt3xAZGKCGYiMt3xkf2biLAbvkRRRERcZtLFHR9zv4nIhDkGqmPnMbK5ayjHHAk/0Dwi6x3fPHwREcHxjevYzFvGfSKmwdO77blOfWyVjHpZWYgI+2FEVGJ+VLsNhYjIlrytCZ46WN7mOZc+vToVEeuT65QuKKRuRGb88JAqREA9dEREYnSsxkAkPw/qkueIrNcRET6z34oWd8R8RDbY22Ruv9Wtti1DnEF+MTuKYYRbOHMtlq18RDwE1jCMcQEnyp8ClFIvIl4p8bRsxnnc4+I/9bI+OdnswYqOyIwF6jYkH5HuvtKdzxFZsECbjZGOiMFy3kJdCxWRDuuIz35oUo8/QyHuIgoLyQ2qE8RVxhSWMVmoTxMRYViANSkDVurN+cy+pN3DQhOCxwtFvyzHQEBvbPSI1HNDVtTb8ipjkhjw7hryjgVv/t1SKX2PDe83N5K+B0siQXZXB3CyjgV6M/2ROgQSfH9zBewuq2qxld1iVf0NYnOMI6Lks3t0OFTDMAzDMAzD8Cf8A7Rq0P77zcLDAAAAAElFTkSuQmCC",
   Cr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAS1BMVEUAAAC9xOm8w+i8w+i+w+i9xe+9w+i+w+i6xOS9w+m9w+m9w+m+w+m5v+e8w+i/x+e9w+m9xOe9wum9w+e9w+m9w+i9wum6wue9w+j3vHDpAAAAGHRSTlMAn79Avx9g3xCPf2/vIFAgzzDvgK+vn2AGMAuUAAAB+ElEQVR42u3a227qMBSEYQcH20lMEqDAvP+T7lTayI0PpKqzkKrOd9GLTkX5OURIWBERERERERHRr6dN3qg+DR5Z/ro1r51b5LWT2keHks8SjSKzNa9YlLRqHzNKmmXtUTMHJ5SpfViUdMs6oGYOHIqs2sdYKrGnZXUWFXPw4rnr1V7c8eERG4//14dFxqV3W3NEH5Bz0GpPbXL7KrghMbvNOTXkLyjvC2mAijnQSB0ZwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMKQvxnitBnPvz9Etx4La+RD3LUdpEJch6fWyYWE3QiFzAha4ZAJi0Ym5IqvetkQIxcyYW0SDbFyIQPWOskQA7mQFmtWMsQKhvg3hhgIhiAyy4VM9p0hN7mQBpIhFmsmE3LbJWSAaEiT/Nc0xOwRcoZsyBh/s5+GWLdDiPbCIc4jOLj8q60+ZABkQoIhOnfg7i/OkbjBIuGHKczZkKnFOsTpD6QarWo8b9JP4Rr5xf07p6AaFz62pSFdfFRo9Miz54oQ9yzBbNKnvI/eTwV9mNMQG4dYlMyqRh/uThRitQp+eF4rDZE7r3W650M6p4Lt81o7hHilalNsHHLpTvEfeZScwgVwO0S1Lx6QeuehG5ef82VpsB+dzuV2TZ5+Mfcq+rVR6tHkGUVERERERERERLX+AQwQpRRs9v7yAAAAAElFTkSuQmCC",
   Br = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAn78fQGDfEO+Pf29Qz68wgEWEWfEAAAHoSURBVHja7drLbsIwFEVRv+3ECXD+/2ebDpCLH0Sqc5GqnjVgwEVJNiEWAysiIiIiIiIi+vOc79vUt5zQlR5n41d3gz5j1TUWjHyXOAz5s/GLgBGjrrFjRB/TFTPjwmJMXSNgZDmmGTPjImIoqGtso5Jgj2kMmBgXb+7dqq4SrU+obc8L8QEdaY1n44oz6DFOXcm8ewJvaOzxdNzK/QXlcyEamBgXDi3LEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCG/M+Q6Px2//shziQcgpcPiQ+TpULiUs4Z5ULK3AuF7CiMcIjFQcuEPPDTKhvi5UJsfTDRkCAXkvFqkQzxkApprzpIhgTBkPTBEA/BEFR2uRAbPhlykwvRkAwJeOU7IbdLQjJEQ3Rz1jbEXxFyh2zIhp+C7YSEeEGIS8IhMaEwsf9rmw/JgExIkat9B1G/2UcSc0AjZVvG3RBr8BoS3Q0t7dSM5yGTLWvkYGPPggEdy9+2NmSpj7gl9IX7REh8lmD37S1fq+dpYB2PjQp1SMDIrmas5XKqkOBU8cv9Wm2I3H4tq/shS1TF+X6tC0KSmmR1qEPSYusPJYzYsgCehyjz5guZd8/LdrzuCUjhtrhe7qL73Jvxqqq3vVJe93lFRERERERERESzvgAZBisAdtY1oQAAAABJRU5ErkJggg==",
   yr = "/assets/png/JOKER-4897aa9d.png",
   fr = "/assets/png/JOKERActive-e3869b94.png",
   Rr =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAP1BMVEUAAAC+w+i9w+m9w+m8w+m9w+m4wOi8w+S/x+e+w+i9w+m9w+m9w+m9w+m8w+i9w+m7wua8xeq8w+i9w+e9w+gxn5VgAAAAFHRSTlMA35/vP48gECC/f19vz7+vMDBQgHS0MPoAAANZSURBVHja7ZvLduswCEVBD8tv58H/f+tt3RslSKhOR0ZZ2rMud5BjOAJsDI1Go9FoNBpvEdxsNkT6wi6Dn12ACnF+oIzFO6iK/m6pAJoeasEN9CtbHWHhMmQG/VEJnt5Ce4LdLL0JTqAXKRxlvNrTuEd6YR3NUVCUpteV6ZgAYD5ScgGFXJk9xj3VjhxjFSrhOhB2FqpOCddBE+wYqk0J9zlh9xRSleMDEsOAJEQGNZ3CnjidLETGgxomygIiC5G5gRJ6LAQEBnoHqyW5jBCQKKSi5OopofurENIxoAxZQP4sZAAFOCkgUUhFIdlKASm3KOuG+kIiOSSCpdt/pYTz63t+ZB0JMVLSjXA2SAzbHQq5SL2AhdOQrT6KKvMOf9Jmd09C2xuxxep30VYUF2JMwChmFnTKSknI02YnFIVgKVgBzsTJR+/VjiUh8yOUukwyi3neI5lEyPGoMsOZeNHphmgtCFnTWxAxcCaD5PQrMSHyaXCjhA3OZJFuKcY/BKs/CPmlM7FCYk2UCJGNgKqESJM3Pn1fsPocJLfDmQiVeXppVWRDX/ars04hGGJAmBAxIGQDwEWnkI4HRBZiolQHAFaTEMya3oUJkYq3+5+IXlMjj0mZA0dlIeuzpi95e7PAmWxp8z4wISgEpI+paBOZZ2KS5t0RFyL8Uh+vj4oGkjmZCgcuZMmPrB7jY9KgqGl0vCQ74kKG/Mi6v/yD0dPGBz7dDkmiGDEgO7YHCFbNYAUDOYhM6f33mQXu7JSatRxaAH6UH5psydCBMSBMq1HidYAAQkCicW7C21EepE2HRTiY1ekumZr67EVoQA1NPOcu9IeWP3/ciGNncBoGXUaPwotBwxJrogwcHrrVYIjhX0ziM6m6BnbGVXxyGPDlZDW6X/SUnleHR61fg5RYihrGktP5iNLdHh6yJKDNITfKsOUtD13P5iKluz3mk4sMqgmIvGBm++xMk1G0pukPNpiC0b/3wA0gr8Q6rGXNCTokEfQ3Nw1ENRgkrgJKVLcK+K3kM3R8K/kMHfsCc0qVC8yy42vy+ect+X8x4dv2ULOSKdOZDwjHD91Kh6yKBqlfcNtHyPhJMCx6Y1R7Vsk4vwixqO2DyviJq1+XveAjbqbST1wbjUaj0WicwD/55Q4qiwHPggAAAABJRU5ErkJggg==",
   Er =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMA3yCf778/jxAwf2/Pr2BfUICp2FVVAAADUUlEQVR42u2bS5bjMAhFhf7+tsP+F9sVd1mJBLLTI6Mc3Vmd1CDP8ATIRHU6nU6n0+l8RPSTWQDwBzu7MPmoGsQHh4Q5eNUU+mGxAhitWsE7PGVpIyxUBsXJj0oM+BHSE2yz+CHwR8mFhOOUIPY01pD5YDRXQRGaXkOm45k505WSQQlkyOwx7ql25RgrUEmuA9TOjM0pOXSkxNox2JoSDaWNk5CmHB8BM4wiQqqApFM4YI6mQuoEJYYVSUCokDqbEoKGSkCUw0+wUpLL0IC8hDSUXBoLNBFyhYwBxZGA/LcQpwTguYAkIQ2FZGEDctqiuAXkhYRzSAJqj3/AgvvrOz2yroQYLulGdTeAGVZfChm4XsCqW6FWH1mVtMNfpdk9nPaytlr9BmlFcUY6h7yoZpbSwkpJpGmzE6tCoBasqO7E84foYMeakOkIpSyTTGyea0CTC6FaDVV4J4F1ujlS/qSrmmh5uRPHOX1AIoSeBhsWLOpOZu6RQvqDsfpBpB/diWUSa0UihDMCiBLCTd7w8n3F6lPk3K7uhKnM61urwht62D+dZAqBmAJChJCA7NcNg0whOg8IL8Qkqf7pL0lCgDS9cyGEFm//m4hBUiMPZcfnsS7EvWr6TNubWd3JUjbvLhMCTEB0SkUrqP01RfPusRBCv2lIn4+CBpKpmApdLmSmR5aGdE0aBTWNPi/JHnMhjh5Zj7d/MHLa+JhPt65IFMMGJN1SRCtmsFLu/Umu5fMPxAKP7JSapBxaSoWRvzRZiqEDUkAyrUaI15WK6sVKetmNeTuaB2mRYZEcIHVaF1OTJpdHESQ08TkPpj+0ydnshbedlJcw6GZoYF4MmiyxViSAk3KJXbvNDm8mCUSqrIE9Y2CvSyK8naxG9oue2n11PGq9i7+JJfzVG3F6PqLo7fCQxYS81zwHGxJsfctD1t1cova0R/XO0sJeDb9gZjU503gErWmGiycdjfy9B2oAuhLroZU1p2qtg7D51bWzeHasAhKaWwV8KvkOHU8l36FjX2AuaXKBuXR8awum37jk/8MKH9tDzEomjzZfEI5/aIeXOEGD1Al++QoZT7SBqjdGsWcVjw8zE4vWflCZfuIa3LwXfIDFNPoT106n0+l0OjfwFyW28qqODgtyAAAAAElFTkSuQmCC",
   Ir = "/assets/png/35-e05f12c6.png",
   Sr =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAsCAYAAAAJpsrIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANfSURBVHgBtVmNldowDBb3OgCdoOkEzQbNBpdOcOkExwbQCY4NYANggqQTHJ3AdALaCVTrRS7GJ/kHct97eiGxLH2WbfmHGUwARKzso7Yyt1J5RSeW42w2+wPvDUtkbqWxsrFyxjwY1m9hajChZQGZGMklR/puUlMQkggu4BZQq6y84vvCYEn0rPITlkXpzE6clJJLjz+r9JxhjIisrXSotBjHiLdWtpjXyKd7SJGDlZU5FADHydNhOpqtVLlOVFqXEhJ8VGxHg5mFFeyjh+sk6UAJ8ptNlIPijMg2Vj5Z+cifz1Z+gZJgKXr28QJjYo62ZKu1gCKp1KFE22MaO9IV6lMPhWNvEzrQUAsGq0xCEsFKIEcpybDNuV9oFEOLzFaWwKDSA1J3SNhkkspJwGfhvU4R08ZWBW+7zwh6LabRKGSrGDEJUrR2gl7PZT3q2LCO0eqXdGOTqbfg8g51NKyzzvEFEeVzZrQINZdTVpcmhPFsaF3eS8R6QXEf6MwVgybQWwk6Txl2CFdJ9gHkrHsM3rXZMziH/L4Oyk9WDk6Hs/+g2PoKAbFKUDpBATELilQjOB7oG45jqONvPxVbnyEglrMgazrOCbXW7Qh+eOXu97OVR/49QIaPD3A7aGE+4eWERDluRYu8fQ6k4JUTabeIH/l3NCAPXoUYJB0XrYaf5MgtXzSu3HhbuXKvu48pHxqxKng/CTpu5j5639wM3FoCB/7tD+oGLsRDXJNFOT8l04VXZoKixisLk65bJepUuihJsL3gQFoN+gjp/wTwOhnvQXB4y5LklqGFUncesfvIdbeaL8IDXGZJiKX/wlvqgV9dbtJONES8U8parut87rXteum2J2eDWHKfUYEG1MPeC7r37l7RI5+1i+0VA9rW2uDtyCOViJpoBMdu3WE5epSHyJqllsjtIuSqSINyCPaYf3xrwgMv5ZhX0A+83+0M2isEqS619gtcH3h/A+8yhDo0q2npCtfNgxaBGJZ4/xUB5bmXiI+9VrFLkDMYu5WJE1piela3MSMrTMMg36ti/Bqqw/z72g4yWtjifRd3pXUbyAXqh9wp0eOtF8U4dq3BaUFRWsC9wDF6UxC86UYyl6S7VzWZZEiPMnuTY38GEwAvybWCS3Km5PoXxsQ8lP5l8w9KoeguCvL40AAAAABJRU5ErkJggg==",
   Dr = "/assets/png/OB-af2b5c19.png",
   Gr = "/assets/png/OBActive-680b9e3b.png",
   Ur = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAANlBMVEUAAAC9w+m9wui9w+m8xOq8w+i+w+i+wui+wuu7w+e9w+m8xt+9w+m9w+m9wum9xOu6xee9w+iyk7V+AAAAEXRSTlMAf99fH7+/3z9A7xCfb49PMCWVK40AAAExSURBVHja7drbjoMgFEbhDVKPtS3v/7LDDLGZg4DGOkJd363Jb1ZMTAwKAAAAAAAAXs3YVar1M1rmEEJICSGdU20MSc/obvKQndj1qi0zV/EIeVmIMcOWmb5pjDjHh2yf2TlEq5h+aUivApr/CrlIjE6EpF+0dW4hxhvky2C8AkN+vroq6xFCyNlDRuX08ZBeOaMEVGoyiHNIyETHQ7SsQQghhIjUYWWF2DBCCHmzEN9ACCGEpEMuXrck5PJbn1GITAIhUTUhSfapibEFhUSdKmT61A0xSjVFhKQeS+cuHx6in1IhxsgM49xzCDEySYQ4behUjhBCSg+5qqBB5j2Ul5i52W9uytk1pJUFsj96I4SQLENa526TxtaRT7mGJH6q+XsHQggpJQQAAAAAAODUPgB3i8qTZ1myqgAAAABJRU5ErkJggg==",
   Mr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAf9+/XyA/QB/vEJ9vjzBQTx9ZcL4AAAEvSURBVHja7dndboQgEEDhAUXF/Wl5/5ctDSXZJgJrXSus57s1mXhiHGMQAAAAAAAAvJpxq/Trx2hZQgghLYSMXr8xpDxGj9FdduLW67eMuUhAyMtCpmneMsZqPYl3fMj2MTuHaJVjnw2xKkH/V0gnOboQUl60XW0hJvh5UWYTNBjye3X1LiCEkLOHXJVn8yFWeVdJ6FU0i3dISKTzIVrWIIQQQkS6tLZCXBohhLxZSGgghBBCyiFdMP7pg2grCpFoIaSoI6To4T5yXEMhWacKib+6KUYp3URI6bGM/vLhIVpHpRBjZIHxPmoImSQqhHhD6lSOEEJaD7mopFmW3VVQGHNzD27K2zVkkCdUf/RGCCFVhgzepyu6Dp58qzVkacdmNzMhhLQSAgAAAAAAcGpfIRTJWwn8aNMAAAAASUVORK5CYII=",
   Lr = "/assets/png/PP-8da0b811.png",
   kr = "/assets/png/PPActive-d332e3eb.png",
   Tr = "/assets/png/SABA-60803003.png",
   Qr = "/assets/png/SABAActive-4b811445.png",
   Vr = "/assets/png/SEXY-05174410.png",
   Or = "/assets/png/SEXYActive-a1f08d17.png",
   Nr = "/assets/png/SPRIBE-6f001948.png",
   Fr = "/assets/png/SPRIBEActive-c13f06df.png",
   xr = "/assets/png/Spribe2-2765ea87.png",
   Pr =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAYAAABznEEcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKnSURBVHgB7ZfdcdswDIAhX96rThBlgjYbyBPUnSDuBHYmsDxB3QmsTNB2ArkT1J3AzARRJ2ABGSwhmpLYu7aX3OG7w1kkAfAPgGQARVEURVEURXlpZO7BWlviz1uUHMVkWVaLMepfcPMapUV5RPmCeoZ1lsJvzr9HHD8IPwX+FN3E3I99lfD5E+UgbcT8OcQ24HRRaWMvOaHkbiIb54kXRjrNgM5GLKZ2vkWfHZi7EDqnAT1L4zNWrlifTuPAz9S/hnFok8sJnYpveQrD4ubeQyKzYBG3eD1z8Bt5F7F5zdJy+zoYp3CgML0RfXcwzRbNyOYTt0sOowvfErcJiVvYFvyp9EC7lgT6pxbTM1M6A9TiOU8xoE20or3mBdCOb1BuR2xbmCZFJyRp4RLaRC3aK5lQiRiYXtAPSMeFngmr1BAzDo17MWmTuBEXr49Bf06xjPIRfBjtYJo7qnDgc3QbmxN19kL6t4YdOxsprzwmS2zDpdVRsk4TL4LdZpyf1BL7JJPaDpfYgsZ/JzbeCOXDAzdpcKjEleDDZJtw5YuLE4tDJ085aNj/54idYT0n8ZxDw++RUw5vYmeD2m/9TZB9GdisWWfsJpbcXkT6Tm7u2JrpZUcxXFifB+/F+CbQp2Sb062N3EDL1a0SJ1VCOkfxXKQYUDhVKHQy3S65vh//xMkIbhOv4B8iX3a5iEETLOJ/UojnY4rBFZw/MVZwTqY9bsSA/2JNcvKXeMM5sBJ94fxdiZUdGDkfugcbL48n679QqzAhQ4SPRvT1EtKml1iiivi5gMaveDdzPgV6WxZ8AvfuvwK3axgPLyrP36D/Bv8K53xwdgdaU+CHfMtSSjoPQeFwfqJkVvxReYl0lZCuGNI+lZ8l9DlO4SQ/qxVFURRFURRFUVL5BQGB2fVH4otlAAAAAElFTkSuQmCC",
   Hr =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAARVBMVEUAAAC9xOm9w+m+w+i8w+m7w+y9wue9w+m7w+S/weq9w+m+w+i9w+m7wue/x+e9w+e9w+m8w+i9w+m8w+q8xOq/xOq9w+jPmQmvAAAAFnRSTlMAn3/fPx9g7xBfb7+PMCCAr7/PT19fakoX+wAAA0xJREFUeNrtm+tu6yAMgE0MgQEht433f9RTqSGQy5qQMymOxPdzWiu+2saGplAoFAqFQqFwCjVqZhD9CzkYprmC56G4Rb9hYBweBbfS/4J8kEtt/EfwB55Ajf7F41W48adAB5RRdlMS2DPGun7YFE0LdHHoU3o7ikSSV/1DglLL1EIr2CDq1EUSrZTWR37fYwWjnl41zjABHxCMuMl5BNI0cXUGYwMvKpImzGeBzAGMc1A0UKH2ucg2TS8qs5dDn49x0QSJTPfMXwETEwMU4P4agwIRGiiFxqjQX6SKH4IkkFyK79DN/V1sURDRsxRN2On1GTohgYa/2RfhE2r/FYJOSFxIo30RPyG2YfDwwpIJSR1Wek1ESSohwRCQayJQEeklTVjoVRFFZFDR03kQroqAoZFb0zK+c0TkQqQmkVshMVSGSBtO9eu3uBMe1nRahJv1QcRQKJKpROyhCAZ8AIObpXDAmhYxHops0atOxOA2Ylo0+SJ6PRv0cCfDtP/kiyBfbRgIdxF3UpkhEmnXb3In8cPMF/F6OeVADqREpHugiP4KMPQB+0ARATOim0NCRySu4VgkwpZ/pbBrDdOC8kSUDLN7sv0OcCfd2YYodv+BJ/NaB/cR56RMkSqKJPPancQ56boIC/PanbhYqJdFMKTnrchpFXkiXSLSeAITyrzmKkvEeR/9Kwq1PheJzBCJAcEks77hTmJL4OdFVJdOjZzEkT0ercyBiK0mrJGLw66hcD5Mv+jhOdNvzCZO5H4uTikmRyR2QKQwaC1vsXWmyPB+MY1STydg6bJEmAIARyggMc1NhojU77SkFJB4KW3PishKTZenNJrhRPyaud2KfO3QrC6BpQAiaD/xk/NlaE3vaRSIvfpQJLWn0gv3Hhtoz4q0ntijKOtHyZg7FknnLSRTIG+aOEHxYxE+e8sGiBFNvDgQUdbT9QBo8JyIaqMyEvSIdZKK7P+OgWp9BER3INK0xif0pParBdVaZBy5cwDO8dp20qdIQn1wi8ClCPO/0RNNq5kaz4hIIvPuZxV1JCIrutWx4LNIrx+i8VEELYFrhv8VQaapV/gKjUGkGXVlGbOV/moek1ApTTUQeAbrbxB1R7rlFQqFQqFQIMw/kBTjJLUeQYQAAAAASUVORK5CYII=",
   Yr =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAX38fn99A778QP2+PMK/PUE+OIRLAAAADPUlEQVR42u2a646zIBCGgeFYULvc/8V+TVcED63it4mvCc+vzaY28zgzMFpYo9FoNBqNxiHc00urVHxhBiu9dux+OB1UXDFIzW6FDiZ+wNzIhdv4FcXZHeDvkrq9irbxEIoYMi6sWkJZKWVvh1XTCIYLzavKhh8qJB/C3iQp3JQW3m2Y8tLFgHaKiBn5+Jg1iV5eXE1I+lqAEtykppcwTYhXoLt3GUKayFjFu/KeU1I8Q4HHWowoywtl9iIV67GUr1Mg072MZ1CFiWUI6HiOwTEy498IG6NT8SQi3wQDUFzusUE/7e+0pgzaA67BJfJwfBYnJazTv2yL6BG3fQXhpCSFIrdF4git0xDZiwCTEp4iPSfiDEpKVErIOREmQPaSLgV6VsSBDCo+3dCzIsxi1NYYBq8RMTMRDlFbqTBchYjII9b8K65Ep5gOi2i7fBCxCE0ytkjYFVGJ9duggPCANQbxsyuyxi92IskuI5dFVy+SE0AI3T6M60+9iNKLBUOxq8grqakQyYjll1xJvpn1ItHPpxxWA5SIoRuKeJ6QKibCDUWITVA/pQRHJMewL5KR8/8irFrDGFCdiEtj46NYfgd2Jf3RDZE2P/Ao5rWeXUeekypFRBKZzWtXkuek8yIyzWtXQrlRT4uoVJ6XYsYo6kT6QqSLABPKFLOoEqEYs79A6PWpSUyVSB+LilQYb+TTlqCPi7i+nBo1xCN7frSyOyJBjARrZg+7FuH5sPyhR9dPv7y4/MEuZxhTUi0S3h2CMGjN32L7SpHhfTHQj2/pphqqEpGOMUZACcllbitEjP8tS6SE5JfS4aiIEW6cVDA2wwSZFPhahG/QLSYuA3MCzccRXvNjKMc7jcLyXj0X2bFH2Qu3jg2IoyIigh1FWZ6skXRExPWoRzS7PEHpfRE9eZuOgZFNIu2IuBBxPV4m6piIE1lZAXqMfbInooPBP8JM/Y5INz+LbaHWqxliKfJ8aqKXImkeehNLDNA+uIbUXETGT1jQsprg6qPIDY7Fz+BuT8QI3O6Y8V3E+ptofBVRAeA1w/+KKOnRO3yBV0mk+/EiSBmE591tCqqkEwPAGay/gXgPveU1Go1Go9EA5h92vbogjIu89gAAAABJRU5ErkJggg==",
   Wr =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAARVBMVEUAAAC9xOm9w+m+w+i8w+m7w+y9wue9w+m7w+S/weq9w+m+w+i9w+m7wue/x+e9w+e9w+m8w+i9w+m8w+q8xOq/xOq9w+jPmQmvAAAAFnRSTlMAn3/fPx9g7xBfb7+PMCCAr7/PT19fakoX+wAAA0xJREFUeNrtm+tu6yAMgE0MgQEht433f9RTqSGQy5qQMymOxPdzWiu+2saGplAoFAqFQqFwCjVqZhD9CzkYprmC56G4Rb9hYBweBbfS/4J8kEtt/EfwB55Ajf7F41W48adAB5RRdlMS2DPGun7YFE0LdHHoU3o7ikSSV/1DglLL1EIr2CDq1EUSrZTWR37fYwWjnl41zjABHxCMuMl5BNI0cXUGYwMvKpImzGeBzAGMc1A0UKH2ucg2TS8qs5dDn49x0QSJTPfMXwETEwMU4P4agwIRGiiFxqjQX6SKH4IkkFyK79DN/V1sURDRsxRN2On1GTohgYa/2RfhE2r/FYJOSFxIo30RPyG2YfDwwpIJSR1Wek1ESSohwRCQayJQEeklTVjoVRFFZFDR03kQroqAoZFb0zK+c0TkQqQmkVshMVSGSBtO9eu3uBMe1nRahJv1QcRQKJKpROyhCAZ8AIObpXDAmhYxHops0atOxOA2Ylo0+SJ6PRv0cCfDtP/kiyBfbRgIdxF3UpkhEmnXb3In8cPMF/F6OeVADqREpHugiP4KMPQB+0ARATOim0NCRySu4VgkwpZ/pbBrDdOC8kSUDLN7sv0OcCfd2YYodv+BJ/NaB/cR56RMkSqKJPPancQ56boIC/PanbhYqJdFMKTnrchpFXkiXSLSeAITyrzmKkvEeR/9Kwq1PheJzBCJAcEks77hTmJL4OdFVJdOjZzEkT0ercyBiK0mrJGLw66hcD5Mv+jhOdNvzCZO5H4uTikmRyR2QKQwaC1vsXWmyPB+MY1STydg6bJEmAIARyggMc1NhojU77SkFJB4KW3PishKTZenNJrhRPyaud2KfO3QrC6BpQAiaD/xk/NlaE3vaRSIvfpQJLWn0gv3Hhtoz4q0ntijKOtHyZg7FknnLSRTIG+aOEHxYxE+e8sGiBFNvDgQUdbT9QBo8JyIaqMyEvSIdZKK7P+OgWp9BER3INK0xif0pParBdVaZBy5cwDO8dp20qdIQn1wi8ClCPO/0RNNq5kaz4hIIvPuZxV1JCIrutWx4LNIrx+i8VEELYFrhv8VQaapV/gKjUGkGXVlGbOV/moek1ApTTUQeAbrbxB1R7rlFQqFQqFQIMw/kBTjJLUeQYQAAAAASUVORK5CYII=",
   Kr =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAX38fn99A778QP2+PMK/PUE+OIRLAAAADPUlEQVR42u2a646zIBCGgeFYULvc/8V+TVcED63it4mvCc+vzaY28zgzMFpYo9FoNBqNxiHc00urVHxhBiu9dux+OB1UXDFIzW6FDiZ+wNzIhdv4FcXZHeDvkrq9irbxEIoYMi6sWkJZKWVvh1XTCIYLzavKhh8qJB/C3iQp3JQW3m2Y8tLFgHaKiBn5+Jg1iV5eXE1I+lqAEtykppcwTYhXoLt3GUKayFjFu/KeU1I8Q4HHWowoywtl9iIV67GUr1Mg072MZ1CFiWUI6HiOwTEy498IG6NT8SQi3wQDUFzusUE/7e+0pgzaA67BJfJwfBYnJazTv2yL6BG3fQXhpCSFIrdF4git0xDZiwCTEp4iPSfiDEpKVErIOREmQPaSLgV6VsSBDCo+3dCzIsxi1NYYBq8RMTMRDlFbqTBchYjII9b8K65Ep5gOi2i7fBCxCE0ytkjYFVGJ9duggPCANQbxsyuyxi92IskuI5dFVy+SE0AI3T6M60+9iNKLBUOxq8grqakQyYjll1xJvpn1ItHPpxxWA5SIoRuKeJ6QKibCDUWITVA/pQRHJMewL5KR8/8irFrDGFCdiEtj46NYfgd2Jf3RDZE2P/Ao5rWeXUeekypFRBKZzWtXkuek8yIyzWtXQrlRT4uoVJ6XYsYo6kT6QqSLABPKFLOoEqEYs79A6PWpSUyVSB+LilQYb+TTlqCPi7i+nBo1xCN7frSyOyJBjARrZg+7FuH5sPyhR9dPv7y4/MEuZxhTUi0S3h2CMGjN32L7SpHhfTHQj2/pphqqEpGOMUZACcllbitEjP8tS6SE5JfS4aiIEW6cVDA2wwSZFPhahG/QLSYuA3MCzccRXvNjKMc7jcLyXj0X2bFH2Qu3jg2IoyIigh1FWZ6skXRExPWoRzS7PEHpfRE9eZuOgZFNIu2IuBBxPV4m6piIE1lZAXqMfbInooPBP8JM/Y5INz+LbaHWqxliKfJ8aqKXImkeehNLDNA+uIbUXETGT1jQsprg6qPIDY7Fz+BuT8QI3O6Y8V3E+ptofBVRAeA1w/+KKOnRO3yBV0mk+/EiSBmE591tCqqkEwPAGay/gXgPveU1Go1Go9EA5h92vbogjIu89gAAAABJRU5ErkJggg==",
   Xr = "/assets/png/V8Card-b3317c94.png",
   Jr = "/assets/png/V8CardActive-0e4717f3.png",
   zr = "/assets/png/YGG-f24e929b.png",
   jr =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAwCAYAAADn/d+1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL0SURBVHgB7ZuNdeIwDMfNLXAZIRu0I2SEbgCdADYgG8AG0AnaDXwbcDdB2IBu8D/rYq4myB/QQJNav/f8eM+SlTwpjiw7KCUIgiAIGQCgMm1lWoOWJ0bnycq0aQsao4T+MY6d4Zw1o7dg9BZqJPxQ46Fg+n4yfQ9KuD32ddXlwOg1jF6lhOswzpubtjPtkZEdQs6mMYlBK017NW2pBD/kIMeRDTmuI9eMw2tHvmbkbx0bJU5nkQSFoxOM/083nIQMPmEfHHnDyGeOfA5+lklQuniceYRktMoqPA6dgV+FETQjKP9o+CGbhRI+wPmrxBeYg6e/8Th6h7jNUgnn2KDEHNgnGjIz4hgn1bg9ayWcEno60c6WLfpHg1lSp9zTtwYfSZgcNAvo9RGYg71OFbiOm/hrlRs4zxVNJDCFDeIW8eR/tLexY0IzsWLuRaucQPvUhxxZRsZPEWcasUFVvQ6Mz+fVhbSkvfSMnSOdxSdsjGaH+NMg/nQeof2mwhm3wuUsnfFF4nVJp1K5gbSE3aA9dArVJ6+2hWxUiOeeDQIrsGywgdG4jq1j59rVmIZU6+fg8oKw7sHGoHLFYE4M7RP6bto+QZ30nieTSd0V2L7nC+y8D2l2TNQXgPbjBErWD/a3Mq1MHP5LtcHYR65Rmp+NtZ3Cb9UG8Y+yD4a5xpvKAfA7tjH+nY3ggqSLNpFTYdjgClQu4LIdXQoE5QVaaWnbt0q4xnGJTKuv8orA7FQuIG01pK0TfTXLNGCfK/w2TmA04uTxuiLgOYq1TiOZWww+gn/FUV/J2C5T9J3g0AxqGP2sKnWqmGvrkCfE9658x7NNJ3ihU8dFwj0dc04NqUvCgP+ihNCOjq9ar5XQP/C/+5fgv1oh8knO9wZpH0K4kG6phNsB/pNSH7JReA/Ar9K61Eq4HwjXMvJFyb1Bu0xtwOeN0R6/jun/ISeYjT/aAHxhRC9WNkpGG5DvigRkYEhABoYEZGBIQAbG2AOyT+wTBEEQ+ucvFAovRtfUbowAAAAASUVORK5CYII=",
   Zr = "/assets/png/66-587f7c92.png",
   qr = "/assets/png/66lottery-05fa3aa7.png",
   $r = "/assets/png/ar006-28e58397.png",
   ed = "/assets/png/ar017-db766c5c.png",
   td = "/assets/png/ar020-a42acc41.png",
   sd = "/assets/png/ar021-fa11faa6.png",
   nd = "/assets/png/basantclub-1d080abf.png",
   ad = "/assets/png/bigMumbai-5c1b147a.png",
   Ad = "/assets/png/daman-91d0d479.png",
   od = "/assets/png/game_66-7dc7cf27.png",
   id = "/assets/png/game_dice_66lottery-c1b9a100.png",
   ld = "/assets/png/game_dice_66lottery-c1b9a100.png",
   cd = "/assets/png/game_dice_ar006-723a5cfa.png",
   gd = "/assets/png/game_dice_ar017-eaa70873.png",
   rd = "/assets/png/game_dice_ar020-907c4123.png",
   dd = "/assets/png/game_dice_ar021-7790cc1c.png",
   pd = "/assets/png/game_dice_basantclub-8e2d71d1.png",
   _d = "/assets/png/game_dice_bdggame-13373d77.png",
   ud = "/assets/png/game_dice_bdtgame-48d0267a.png",
   md = "/assets/png/game_dice_bigmumbai-fed4a459.png",
   vd = "/assets/png/game_dice_daman-160c8c5a.png",
   hd = "/assets/png/game_dice_okwin-59c5bf57.png",
   wd = "/assets/png/game_dice_pakgames-02617f51.png",
   bd = "/assets/png/game_dice_poppg-5464fb7a.png",
   Cd = "/assets/png/game_66-7dc7cf27.png",
   Bd = "/assets/png/game_dice_yjlottery-20918f41.png",
   yd = "/assets/png/game_p1-ba544161.png",
   fd = "/assets/png/game_p2-afac186a.png",
   Rd = "/assets/png/okwin-9468baad.png",
   Ed = "/assets/png/poppg-6cd2ae29.png",
   Id = "/assets/png/sit-82a78bd6.png",
   Sd = "/assets/png/yjlottery-1ab96dd1.png",
   Dd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAIVBMVEUAAAD5Wlr3WFj6WVn6WFj5V1f6WVn5WVn5WVn4V1f5WVnpXZn/AAAACnRSTlMA72C/v1DP329wWe0twgAAAKNJREFUOMtjoA/gMFwFAkkgdrMUiLlMASyhtQoCGhgYmKDMFWCJLCivgIGBDcpcDpZYBQULGBi4YOwRLlEF5SQwMLBDmcvAErOgPGBYc0KZi8ASTI4g9kIjEFsFHB/CCgyDF7AaIpwbjHAuIvkEIJLPUrCEF5RnwMDAAmUuBktIQXkCDAyMUObCgY9BGkvg9Dn+sIpCJB9WbMnHFCn5BDDQBQAAbjlnhYlIhpEAAAAASUVORK5CYII=",
   Gd = "/assets/png/ar-notice-2afc1522.png",
   Ud = "/assets/png/avatar-ea3b8ee9.png",
   Md =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMZSURBVHgBxVqBldowDBW3QNmg3qCM4BHY4Nig3YDcBEcngA3KBukGuU6Q6wThJtDJLzIoxkAcy7n/nl4ewZa+ZDmWnSxAAYi4pMua5AeJIVmRLFk83lneSP6R/F0sFu/wVXCkSbYkNU5HQ7IhMTARC0gER/snyS8YRtjhBJcof/Bv4Hbf+bqK9HM4kLwUHRWOeBeJYkViE/RY7tNGRmUL2nBDzEQl6hTSd3Q7Zw6B7jYnrUIDz0HUGw3iETsrHI6Is7mGHHDKSOygMDi18lMqIN+ViPod22scjnqaE6xAPx/TOBgcptRzSsdORN6AMrBfQ8yIdulcAq/zJlFc/0qQsiPaW8GnedR4KxpXoIyA/OgAUbvdQ148XOe8B2VEyFeJ/RuRSstYg71QvgJF5JJnHfZm/yD6e1CEBnmhq46OAvYVoYcFJXDUVMgLfde6RH6p5T72JQhqkRd6Pdfa3zAFjBQhz7plqbFUT5+S5Fm/TKONfMZ2kInS5IUdP692cmbXkIG5yLMtPw+OsnQ4wkTMSZ7tHdhOC8LopFp/bvJs85z2T+L+CRKB/WJyELfcpryC8jgfFjxBHsKaZHIaToVzQB59JIGPQF7ErRqV66gbGJQRLefT5BoIh4tLV9oJ0v9HTmL/o8lUOpsTKB/9qLuQhU6o7+jYzmAh0y4lpBMO4zbj4/VflRJLVH6Gl3Qi0G38zVpjHtwxpOYEXh46zS1jFpSg7cRV+og/XBr5iZFV1EWMqjmBw327uWfIgiI0nMB+b+2xjzWQo6A2F4T+LCdweOBmxhh5BWVEnLAj+21Fn+pR4ybVQAoCJx4udBgcNMOIDgbLH+46UpsR7aZxweHq3JZwYgQHgzkHzThTXXPDtkWNAzHUet2TZvM1sFlBDvD6dU+LBUpljnoTjPoGNBDJR4c96r1mrQPdTZF5F0kpPyIVpr/o3uL1u+cuNWWmfGpg6FKRxFZSt79+g8snBx98/xtcPjMwEP9E4TfJjvbZyacjk8BptYlEMQU1j17ygYJH8gjccoYuFvoI+09ujGhygsvo/OfrUSPan6uQr+opoFVSAAAAAElFTkSuQmCC",
   Ld = "/assets/png/banner-32a231b2.png",
   kd = "/assets/png/changlong_bg-82acfbd5.png",
   Td = "/assets/png/changlong_icon-a1be5291.png",
   Qd = "/assets/png/bg-edc23a85.png",
   Vd = "/assets/png/bgActive-805fae0e.png",
   Od = "/assets/png/bgActiveOld-0e6f6732.png",
   Nd = "/assets/png/bgOld-d9a87831.png",
   Fd = "/assets/png/chess-9a2d9c33.png",
   xd = "/assets/png/chessActive-53643ac1.png",
   Pd = "/assets/png/fish-2be0a575.png",
   Hd = "/assets/png/fishActive-aca8b68b.png",
   Yd = "/assets/png/flash-77bbc5d6.png",
   Wd = "/assets/png/flashActive-ef7a14b3.png",
   Kd = "/assets/png/lottery-49847eb7.png",
   Xd = "/assets/png/lotteryActive-c43af489.png",
   Jd = "/assets/png/popular-40beb97d.png",
   zd = "/assets/png/popularActive-168afcaa.png",
   jd = "/assets/png/slot-a9a2f416.png",
   Zd = "/assets/png/slotActive-b5921bd5.png",
   qd = "/assets/png/sport-3c47e41a.png",
   $d = "/assets/png/sportActive-0235eeda.png",
   ep = "/assets/png/video-727f5ef5.png",
   tp = "/assets/png/videoActive-eb4fe331.png",
   sp = "/assets/png/icon_sevice-af9dd176.png",
   np = "/assets/png/5d-f8ff113e.png",
   ap = "/assets/png/k3-a4a42715.png",
   Ap = "/assets/svg/message-8d1fb933.svg",
   op = "/assets/svg/search_icon-4452570e.svg",
   ip = "/assets/png/top1-573e2e29.png",
   lp = "/assets/png/top2-40f62dc7.png",
   cp = "/assets/png/top3-31e06806.png",
   gp = "/assets/png/trx-6b43aee9.png",
   rp = "/assets/png/wingo-7fed1973.png",
   dp = "/assets/png/loteria-0ccd41c5.png",
   pp = "/assets/png/d55-92bf4299.png",
   _p = "/assets/png/d56-381350f2.png",
   up = "/assets/png/d57-59e91e51.png",
   mp = "/assets/png/d58-b02f0617.png",
   vp = "/assets/png/k310-1fc41fc4.png",
   hp = "/assets/png/k311-2acf4e28.png",
   wp = "/assets/png/k312-126dcbfe.png",
   bp = "/assets/png/k39-707408c6.png",
   Cp = "/assets/png/trx13-30f132be.png",
   Bp = "/assets/png/trx14-af832a85.png",
   yp = "/assets/png/trx15-5500af52.png",
   fp = "/assets/png/trx16-27318f43.png",
   Rp = "/assets/png/wingo1-26adecc4.png",
   Ep = "/assets/png/wingo2-7620426f.png",
   Ip = "/assets/png/wingo3-af2ecabf.png",
   Sp = "/assets/png/wingo4-c325a189.png",
   Dp = "/assets/png/luck_bg-62bc96e0.png",
   Gp = "/assets/png/minGame-8928b3ff.png",
   Up = "/assets/png/notice-ddf69f91.png",
   Mp = "/assets/png/profit-56d94e8f.png",
   Lp = "/assets/png/promp_bg-c1dabf59.png",
   kp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAYCAYAAACmwZ5SAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJASURBVHgB7ZdNTsMwEIXHLkj8LcoCIVaEG9BcADgBcALaE7QsWQBFgjXlBJQTUE4AJyDcgKzZ0BVIIGzepE4IIW0d2opG9JNGduOx45eZTFyiCRPGFq11FXZO/wEIdfQXju08SfllJ9YvkyV5Frwd62/QX/PieVXYSN6vRDqHFG3mjiTCr57nYFcNWC3oD5/NlGs1smCKRsCHUjtSiKCvlCqjqVNGTCHiDEmL3HrKtWPMSUvtNqwihOCWRHL06fT0UijVXjo62idLOIosUpjNYfE9NI4Z9rGRq9BXStmcLZX8fmtiDovyaDjsYk8t7kQRfjo7W6fOd62sER0IL6J/s3x42Oq3GkcRET3uMuyI2Bh8ualTHzDnAffnhz5IHeConoRimegd1p2UKEe/0Ydj1WLRIGqY/2Dhese+ZAnu30CzBvMpOz6sZNaIiASr9/cfKfxRKFTIAk7Redct4SGddPNRWl/Mue6WTTrHwYZ9GIu+yDCNfVmsnxyIBM90wv+NlYMDnzIwLWXX9C9I2aABwOa5Cl9ZuDbZNyxSSSLBi/V6G1Go4A3bCloYZeQtvXoGaBQ1GpxVCx+n16CgIfJ6f3+Ld3lTc7YghQW3QgRFB9dukPa/Fm0OFs8WrhzZtW4RHup3mKs6BBKq/P6C6wZFDJ+sFrLlGoM2Ra0XaQ8rFBX/VheNb5PyDB7mdeIoyb+L5pjZTIzdUp4xwkKeYbUUn5oZC32sztZjiRH8CPN6/fc10X7MvWAmi4Dci50wwZ5Pgw1cEb3Yvd4AAAAASUVORK5CYII=",
   Tp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAYCAYAAACmwZ5SAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJESURBVHgB7ZdNTvMwEIbHLp/0/S3KAiFWhBvQXAA4AXAC2hO0XbIAigRr4ASUEwAngBMQbkDWbOgKJBA276R2CVHSOLRFCvSRRp56JrEnY49doilTBmitm5Aj+gkgUE+/41FJkQV8N2J6nUpKkYDXY/oKfWcSy9lSpQnwGARNyMTqhGuGV1P6WjRmnoLAw9c9hrQifQLMWMUUIv6yaZlbTunbwzNpS7sHaQghelSQV6U2pBCRrpSqo+nQmBFWweQ5qIDGwyYCvshz4ixykMJ8ZDyzhcYz5hBzOrO+Usrun1otJEfuDw5OhVK9ud3ddrx/kGEMdosB2DjK/uGs7rsEy3AWkdG9DLMnYjb4ctOhHO4PD5epf1+oa6wWBF6Ffjm/sxPN6cMexgDHaJYgIRUnhNTMO5zgrGmiWwfXa/Z18CPd32r1wW/omFNzMGbyARhDCAd9Qu6wLwcbFniGeIn+8/0aJrWf5aO0Pvnr+2uuy1m9vLSTfa+VSsPqmVUak+cqfEb5dNn3M0XK8kvKzC1QkdJ5xTC/+9vqAwvb26HV846lRcrHoxF5Tj8FIjSKGhVgttPpYVU0sOPXohYSt4vMgfoXiwfKh7/o0igZfrq5ucLeW9X8Lixhwa0QUfFE3yWWfaGghzEzxJY2iA0qflZXjW+XPglXUQRIqKrt/74fFTEcWRfIzjmMLkVtdDCJ88RVkn9XzTWzm7BdUZkxgVkeIK0Un5axWZ+J3K2/BBPwHSQY9t/XZPuu9AEzRQIofbBTppSXNzWCXBHkhhdcAAAAAElFTkSuQmCC",
   Qp = "/assets/png/turntable_icon-04916ea0.png",
   Vp = "/assets/png/u18-7146ab6f.png",
   Op = "/assets/png/win-6264c04c.png",
   Np = "/assets/png/winning_bg-d9c728ae.png",
   Fp = "/assets/png/winning_bg2-85772bbb.png",
   xp = "data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAcSURBVHgB7cAxAQAAAMKg9U9tB28oAAAAAIDfABRkAAFctxwzAAAAAElFTkSuQmCC",
   Pp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAnCAYAAAB9qAq4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHkSURBVHgB7ZiBcYIwFIYfTsAI2aBuUDpBHYFOYDuBOkHbCbQTqBOoE9QNcIOywet7ENoUAk3I4447/e7eCVF+fpNo/hABgYhTeonBkSiKjuAJ3SOhl0eqGZXSzTnVmeqD6ki6F9uFKfrzRbWmUvC/sZhq66CZsRebwBL7k3WZ5Pf0Z3xYSBqsTMZC5homJxCOonq2tC/gd675wp2W8IGEQWZunmA57CmEUfSilMEY/87FFMJJeOpIGaxzDzLMhjKoQAY1lEExhjKYgwz5UAZPIMOZDUp9W5MdhHPhNZ8NnkEYHSaOEMbq5wjLxT8UZarzSoD9ySqdag4+gTC6F1/AnwvVQ6MVw0ODst2N2mfoHhoO2BXhsMyGrmImPEXiDl1ONpsO7QPasiARtQhywlbgnrLtadiunWhdriJRu157ow+NIdZzKaW6A3dONEwbQ4OnyNzjeh7qfedmDMvNzSv2Rxlan9iPLbb9igNEbQYz7E9mak20IMfrKYwDRbWuTiba7RLGBS+TCR9wD46l5+rwE4hRGyz+Ra428otxMxjKVRnMW46DkDLImc40tQchpAy+1843INSLEgZ3ZtRidEJegQChBvnht3VHSCbfQMIk+j+q5Q3SoVrMHfV5w+QT5/gexVr8Da0NleU3SpLlAAAAAElFTkSuQmCC",
   Hp = "/assets/png/border1-3b6518ec.png",
   Yp = "/assets/png/border2-7a806be7.png",
   Wp = "/assets/png/border3-cfec4a7d.png",
   Kp = "/assets/png/crown1-3912fd85.png",
   Xp = "/assets/png/crown2-c8aced52.png",
   Jp = "/assets/png/crown3-2ca02146.png",
   zp = "/assets/png/place1-fe39c3f3.png",
   jp = "/assets/png/place2-8189be28.png",
   Zp = "/assets/png/place3-d9b0be38.png",
   qp = "/assets/png/stage-f0b7a560.png",
   $p = "/assets/png/avatar-5a79e664.png",
   e_ = "/assets/png/avatar1-2f23f3bd.png",
   t_ = "/assets/png/empty-9dd03351.png",
   s_ = "/assets/png/gameDefault-91e9c0e8.png",
   n_ = "/assets/gif/loading-030cd50a.gif",
   a_ = "/assets/png/logo-e3b68b06.png",
   A_ = "/assets/png/headerBg-8a21d5a6.png",
   o_ = "/assets/png/heroImg-00649ceb.png",
   i_ = "/assets/png/totalIncomeBg-e5f99b03.png",
   l_ = "/assets/png/promotionBg-8f7ec356.png",
   c_ = "/assets/png/tabBarBg-0d05851f.png",
   g_ =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMVSURBVHgB1Zq/TttQFMa/41SVA1LlqlMnzFKxJXRAjGbqSvdKwBNAF0QnnK0jPEHTJ4A3aNi6EaaiLjhvkKWJF3J7jv+ASZwYOybx/UmR7WsHne+ec67PuYFQApbrWL7/b5eU0eBLW0E1+WMRyEo85gHkEdBVNLoBah3/+28Pc0IoiLIsC75/+Oed6Xz88sFBAUIx6nweMbkFxIZDqSMQWb03r7FxsIH5oTb/vVZeIUaeh5VpnmI4vONTV4xHqah9qNGdebx1mudbz/IAG26zwRc8683xe+V54AkeyNh5jjcyPcDG77Hh12nGvyA2qdH1yvHWbtaDMwUEIQO0yw+XbBQvbiPCRVZITRUQGe9i2RDcWSJSBaiVFXGdi6ogIr5t76XdmhAQJOz9/Q9UDBqNzsyTbXt8PM0Dv5YR81lITnBiX4yPPxEQxb2NisIimubJlpscexAQhE6V4n4KpHAotVd8nfRArjfgspBQ8v3BUXwdCIhmfx+akPTCq2jMwRysvX2PBWMpLib7HPJBLaTq9eKlwtoacHuLJdAhoh0jCJ/F1jll4bAXLMkBB/qya/BLS8fZj2kaHD4N6IstIWRDXxq6C7By9cQVRHsBkCTuQ2NkGdVZgCcCutAXT3KgB325kRzQ2QNdA6Z5CX3pGNTvSxJ3oB9dLqe9uKG5QsGqtNfr4dNG6Xujmayurp7LMWxoZMtcdp0LbKfICrB48wPWfd8PViEEYUR0Dn1oi/Fy8lhKmOaZRm/lVnzyIEAjL7Ti2RcmfuDI2+AvOAc8Nn49OTBZjSr1uYqhpEKbdsbHJwSQuIfoKypGrVY7SIZOTGo/wCLaSCRKBWgNBoPUimFqQ8MiXFRDhCStO+3mzI4sEGEYS8mJKOYPZhkvZLaUJK4j2kTwrwKLgWscqXM2/TCUZ/KsnlgSm8Ll60VDKpr11nA43ExL2DRyNfVRXoiQnyiR2PB6vb6eFTITNqEg0W8Kzl+iw0bxzeEOf65MLmP6YVmfm8ICkpiRGI7bpgq3Km0kNsxkhvlen49dwzB6cuTvXBY1Osl/HTU6hXQNo/8AAAAASUVORK5CYII=",
   r_ = "/assets/png/bd-de258be1.png",
   d_ = "/assets/png/bra-42104755.png",
   p_ = "/assets/png/en-4c6eba8e.png",
   __ = "/assets/png/hd-796a1d34.png",
   u_ =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALISURBVHgB1ZrbcZtAGIXPkhknj6gD9JLLk5QKInegVOCkAtsVWOrAqSBKBXYHVioIfsrlxaQC8Rhnxqz/g1gNAgkBkvHuN4MFaD36z/5nl72gcADuEPj/8Gr8AnqQAIHcGirA13LkikU8PCB8gLqV8/k7/IqwJwotYdD/cXSqoUZyOUIrdKjhfcEeYhoLMIHLv54VangvFPQsgTdtKqSRgN94fXHowFEKSE/e4M+0fvka/MTbQCG5kuJDdEMk1jyukw1vVwGp9RMP+keHwZOAvym/Pd5VsFIALSM1MXtKy2xDp72YulradjtbLZQFP4EFVLWLjQKYOqqHRYiITyLiW/l+ATZY+u85bFOFBBonUO+LDdsrF9Q3tgVPGNOyJ1xnTUDWYAJYixqKQyZrd8zJsq/Xd7AcWukI9/0+opjXqwzIyQUcgFaSgeOZuU4z4ErtG/JZMBkYwSHyWUgFSO2fwjEk5g/pp2v2yfMS9z1mYARH4SzQk9rvcpR5UBg7MzCAoyTpsBsqgKNI8AM5dABH4crHzhmZzaQDvDiONRyGGYjhMK4L4EofQrhL5Gmt/8JRJPZb1zMQqsVi4SulFnAQyUDf6/V6bMRzuEcosaeNmEq+wzEkZi7Lr+bEl3CvO53zTyqANjKKXEDa7Iz2Sc/Nzawxc2Zm3aJWETZeI2A1mHMlCxLj1ARPSmujMriTvQDYOkuLfN/v52+UhtOi8CPsbNB0yHHxZkkA0yMFz2EZEtPnvHUMGyc0UnBGr8ESMt9fb/qucpNPeqaJ9EzPumaaBT/Z9v3OXUoRMRYRX9F990rPn9MNVYVqbbOKiEBE3KC7vYOQnckmzxdptNHdgaXSZ1GVZYo0ftWA2ZAPCjnB4TAP0ctsdFyb1i97ZEJGIoQr220ffPNsJNw4cENrAXmMGPA1G6W4VBlgvb3E2RFmU1jOAq/bBp3nEca4HAfo9UboAAAAAElFTkSuQmCC",
   m_ = "/assets/png/japan-09a3697b.png",
   v_ = "/assets/png/korea-9ace4c53.png",
   h_ = "/assets/png/md-8f32f4c5.png",
   w_ = "/assets/png/my-2cbaca53.png",
   b_ = "/assets/png/ph-f374fde7.png",
   C_ = "/assets/png/pk-076f0344.png",
   B_ = "/assets/png/rus-3e998552.png",
   y_ =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANCSURBVHgB1ZrNUhNBEMf/PasloEVtWR4tHQ4eFAKxvHoIJ4/CzRtcPQFPQHgC4AmITwA+AaAHj6xAsJADA6I3IcRSi4/dtidAKkDIFyHu/Kq2tnZ2kvS/uyfZng6hCWwmtf8HGOAw6iOQBiHJDF9u+WdziGBkzAAcKE8tEhA8DYzBNSE0iDX6d4RhML+WyxQaQEQFYJpWHhYaFVO3gIK3o2iEmUZR4uHrwxnPUxP1CqlLQLb30XjzDT8PEae7l7cnap5fy6QvSa3DY561uY3WYDyP+muJhqo2YbVXD4UhL7XQeIu2n7mW0APVJlYUkO3V47JIM7jBlKmAH4FnbdpWmnRlClnjmTmNGFBpXZQVYENn1SNOEA33LJt3l4YvDojXU3KaRzzpJ6KF0oFyAjblpBFPjBzPRUTubODcIhbj7YLRiC9ajtHSgWIExHh7cxPxx3q/6ywKpREYhxvYr/RiFAoRsN4P8/lNr7MTjlCMwi17tbbxM9XRfhvI5+EI/vFxNCznqYKAl69mRnLcDsewj/FTKj35SYvxrXzOaRYp6Enf+7ieTDHoDRwk8eTBuuIGq6k4kN3YTYoA6oOjiO1a3ffbNNylT0VR4RfYVXyVyx/AYfyqJWXcsQJycBS/847bAvjXvhEBFMBR9rnNKEK0BUch8GcRwM5GIIK3oEKEc3AWChTMmF3EC3AMn/4GMG9NoR4YH3mx+Pihn4JDbO3kptNjpxdSUvpy7LEjHHz/xnbD2dpe+CU+rfCn4QgHG18zl3au2ZEolHrfUnwWslE4/LET+ygc7uxU7uIc7e0ucUzJf5ivvvEm8/Txfi52qRSe2KQv2lt2ez2b0MMMnkGMUKDBZytm7vJ4GbpXTEaaeTU32m4a8fxEOeMtFZt8Kz06Ld2R/7pnao1PrG6nr7pftUu5LN0adZJOre2TEXJRSGO9WZOpPK0GCm3WiOdlH0OjFUgH31M0WEubta5G942nlHidI5pOrJp07S+pExuNoxBpSashNItTw+/dwlRXYOoqcRv+s4cVEoVIMWFEVlqDm8PSsCO8v6uQqdfw4jugCZxGJUmMFBH6JM00l64X8bB8UC5iqb8ZW1IGBh0e5ho1upR/fhLSEeU2NEYAAAAASUVORK5CYII=",
   f_ = "/assets/png/vi-7e276113.png",
   R_ =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAA0CAMAAAAe047PAAAAsVBMVEUAAAD////////////////eKRD////fLBDdJBDdIBH//wDWABTcHRHeJhD/3gDcGxHYBhPbGBHaEBLbFBHfLw/oWwvpbl3gNR7ZDBLhNg/lTQ3jQA75vgP/6QD63trkRw3/7gDiOg7mUwzrbgr2qgT+2wH/+wDgMxvscgnzmQb/5ADoYQvqaArteAnsdQnvhAjviwfznwX70gL7ygL81wH64NzwkQfzpAb2tAT/9AD/4AAVvM40AAAABXRSTlMA8q1Ehq9quroAAAHeSURBVEjH7dfHsptAEAVQFEY9UUMWUaAAylkv+f8/zKjMA5e9YWq88IK76g2n6O7ZtGEYo+FgopXBcGRUGb/5M/RHAEvJXdQxM/9tXP3PvGHakDgOVxx1zmw+MoY+qoPbLzHZpQnB3SV/aAyaH4IQN5Cd0B8X0V3aDIzJd20t11LUtYy2yc1GCpm0kHkuQ6euAbHF0gFiIaIOBTe6Ndu9cQ4ky1jois4QICewbYandM2qIpBQW7abfJyt7hCG4yGKwstXXnhZFK28uh3u7kp6Yqg7xLclTdN8Wuzz9IsWkVU/pvBwv19c0r01YS4eNJ++UtKbDL5bw2wV26FQGDYEwXW/r5z0eWAWtBMnBAmlrQFnO1pB9MgEoDZYqL4jLh55TtNyZ6LfAoSDImR6lCbnlBaubBnMlhHDoASxNf3gLH7QVbtusog+E29BVCAr259MB0znM7FwA6F3St+xEiSXy1cPYNneooHAzJ5Pz1RqDYgDv8biNAuTSHoxeERl2H8HAicG4Ja0XC2Ix6vrldWPSAcS5poWR4y1Ie6u6d0T+hDJwu2JIdCGgDjkNWUNqKEwAU2oTQ/1UA/1UA/9Z9DrhNDPZlAfNbrxh/WZpZP6zDLGc3+j2Zc/Hxv/7BT9CVXQY1p+QpJwAAAAAElFTkSuQmCC",
   E_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGTSURBVHgB7dk/SgNBFAbw781sQLuAbYRcQOy1CdpGTNJosBBPEGv/YEQR0nmErRIt4gpaCtkjJHiBFLa2omBm3BUsMzua2TyE+TUp3gt5HzOzG3YBz5sJ2Tb2O42SfF9cJ6FKyJFW4kUV3p4aR9GrTb9VgPvL5haBqpgjPdGPtbPeQ1ZfZgCO4X/YhBCm4t1VfYlr+BRJqvY7e8YtawwQfC5sglnhQ62Z6sYAmsQymJHA31fgP/ABuPkA3HwAbj4ANx+Amw/AzQfg5gNw8wG8GRmfC0XtZg2CiuCk1LjevomnlQPTd6UULQ1dASMtKU4+4ml1f4i5BXAo2W6xIBpnNBU1UIMjzgIQIdw+6R3Y9EYXzVCA9uGAsy00UXpk3awxhCPOViDZOq2ovWsxGBXTXjji8gyUhRQDzJm/jHIzBvjVwcyJVjDOYF6BACG4aX1tKhsD1I+7QwWcg0n628kfubGpRyLD7eA53tlYSe5TqGCOvoc/7baz+qxfdCfX+HJyuz2UQqwiRxOlRggoTFcfnpe/L1X8Z946wW7eAAAAAElFTkSuQmCC",
   I_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAP1BMVEUAAADExMTExMTDw8PExMTFxcXFxcXExMS/v7/FxcXFxcXExMTExMTDw8PExMTFxcXFxcXExMTPz8+/v7/ExMTkagEbAAAAFHRSTlMAIO/ff29fvxDfMD/PoI+fr1AQMBwdwB4AAAFQSURBVDjL5ZJbkoQgDEXDI4iAqN3sf61DIEFHqmvmv/OhEE5ycwvgm0Il+z9uLQU/HJ0OrTvD4IqdoZdbdOHQh+sczphlSmKlvZu4uPZG2bkqfnDRzFlKL/FKuM9cig+/OoLCmcs8Au7ZqUDcG4IW00OGE2Fh040D/G1baeFO8mDo07gmpdUAa5djVGQPgej3OFtuwqZX7U3o1C0RmjevL+/rWLZqVzqnyV0bc70atgVJInPUaR/ip5TkATrmIBYBd3Gq6pGSVWpc18mPY9jYGKk0jgeP0nCjPxtDTgpnZXDkjGy0kgv3AK+4FG6opMmQXJVwob8wK0/jgCu8qWS+c/oU7hJumUqyrl2MOdDLzd85maVs/p6iQScOMnG1HcYXANlBwsriH9zWua2NZ4zmR8l+Jy6Ycotk/czJfQU8kqmRdgwwhU9y7X+F3yx8VfwAZv4b1F/KTEQAAAAASUVORK5CYII=",
   S_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAOVBMVEUAAADExMTFxcXExMTFxcXFxcXExMTExMTExMTFxcW/v7/ExMTExMTFxcXGxsa/v7/Pz8/FxcXExMSmSILoAAAAEnRSTlMA338gMF/vP7+fEHBPj28wEM9PEbqRAAABB0lEQVQ4y+1TR5IDIQwkCBjCJP3/scvaQj3Feqfsu/sCJXUrIcwXH8GHzbmt0T0r5ciCmNu/tCqsARte0uh8xAlUjCkUHrGtfxHu116LAYLtJjfz3I1xMtld7gelY4zATsyKcmjhjsWDWcHz4AUWBGVGdNRlu0p4bSn3g2S0Pby2h0IWkRDcK3OS66mJC3NWdxFbHBpCwKTq1nNjIgSiahokF+IoLBZNvT5vuafWvk8kXNEMjWYQMBi4k+bmnNraD68Wi4HHm4EPyfyE/vmEO3jbvBRDWBKVMQX7d33e371594/N8pR3lCNf4egk+QrnDv+0+1dEhJvRrt81mVtQq87V4M0Xn+AHBckSwmsdObYAAAAASUVORK5CYII=",
   D_ = "/assets/png/googleIcon-09d7bd62.png",
   G_ = "/assets/png/iconservr-r-75c1fc71.png",
   U_ = "/assets/png/iconservr-dafbd4f0.png",
   M_ =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMWSURBVHgB7Zg9aBRBFMffm70kGo0ErooYTJpYeoKNVgkpRXSRiARBWztFuyS6RVJa2yYgehjkAmKds9E2dRpPFGw8OYhckLud55uNhHzszM1u5j5C9hfY3M283Zn/vDdv3xxARsbJBiEF75fuj3iN5rhAHOGv/YQ4BGkQ+BcJqjIMf4d9ua935l7/hIQkErAezJzd8vonieg8tAEUtDXUbH6YClb/WN9jaxhNPpe7STLlaluSVIQAS2rgXW335BVqDOVlW3srAe+CmX4hxAR0CBWiakwbWysBXt9AHjrMOcsxrQRgQ7Q9dA5SbzSsxsyBI5BogndgQQINmuwEYJ2QNoFgw2gncgNggTMBJPApX1umNeI/lnuNP220sHO3B2zgaVUTWG+DI5x5QBAuEsoLNrZI4seOJ46OuxACqgPhpqUtuMJZCHULZx6IQOLcjfP8SZeJqrz4r/j/d3CEUw8gqewCpjSa5yx1GRzi1ANcVn/hOuAS59LYtyhP/td/G3CF2xAiUqn0pW6P0p6rK07YJkbMo6RRjoXTu2286hwWVunz0OOi8gPz+55FuM3Lar3JWx5oSsHtYc87M8+5+xGYsgtX3a3qm91BeeJS4EMeXFdxVvmoWQ6lfOYHxYrxWabO0tJsQUhc56UZBitohXfyZ6MJ0jRf7oIdFSkavj+3ql0YrYBScG9MeIInD2OQCIMIpOt8eQDJqMmwPu4Ha7W4Tu0mxpx4AYknH93JE8Tpw82pJq8YBhx8rOvUbmJ+KRVSpzwkFSLT/IzI9QRylBtTH0mFACU8iOszZCEqwNHIUxTvilQ/P+1lTNcRG0Iq/qHH+Lg4ezGu/di/yDIB3SYT0G2OjYAb82++xbVrBJyqQW+hrYViBfjBshLQMyIQEwpQcBFRhh4hJLmi6zMIIO1NnYUq/kKxrOvVCvAX3q4B2B1Q2giX0jRlMjBmIRlKX60AdIeaJPmk1YnMKEDdrFZAdjicOHzLvHhX/OfF5Va21nVuVKEKmPRQ3JJc3uJOiWt51DTDCaOiPM0/zn9iv5dNMZ+RkbGff+g/DZiy7tCfAAAAAElFTkSuQmCC",
   L_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiAgMAAABHKeNRAAAADFBMVEUAAAAAAAAAAAAAAAA16TeWAAAAA3RSTlMA3yDHuD3GAAAAOUlEQVQY02MAAqYABijgvABjqSfAWHMboAymMriyG3RTxlD/HwIuIFggWYQOhCkYJtNBISLUECEJAM0+KB3Upf5VAAAAAElFTkSuQmCC",
   k_ = "/assets/png/customer-c218e1f0.png",
   T_ =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANHSURBVHgB7VnLjeJAFGw8EoIbIRDCTAS7ZLBEMBDB4gu/C3Dge4GNgNkIYCNAG8EQAhksJ0BIwFZZbtQ2BrfNzyO5JDTd7W5c1Z9XrxkhYsSIESPGFUjIQrfbbSYSiXcUsyLCOBwOc/z5U6vVmqwb8sHLy8sUAjIi4jAMI0uusp7o9Xrj9XpttlqtJVYhCxEzEd1VWGAFcpj9BblCzE+uQCGVSs0ajUaGD9iBHUX04CDPiUa9ZG0hVF7dItA2FxEB9z12yRu5DQaDV3WXHM+AW0QymaSIqXg+PjabTY5bnOQhxrHFeQYOam+qlQNY7/f7Qy6VeALw3hEm02QZ26aACR27+xjuBnUlWK9UKibamuLB4DsleUxiyYs8YZwZ7BbRerCIEt/JAv0JKzE819E498BLBL6oiPaluBP43fgUqtXqL9axvUeoNy6OcZ8BN9xnggdpv99PxI29wiafK5fLc04aJm9kZwYXYWh8sWMl+II7eMUCk/KmkJ/pkCd8BRBuETc2PIdBpdPpT75Pd7CWAOKciGsMTzWosGmMtgDCSwQND0R+i+BwGFTYHMz3EHvBfbAJxOoG2pua41WD+o6kbIK2UJlwoBWQ4Epgr07UNl2vUA3KImAYw7DkrfEiJPDipruNIhBNzAvDjgYlYedcoc9RWAElhLy/skKr73Q6P1iu1+uM33nV8NwGxf7tdtuKNKZpLq8REVgAt4AkQkir5z6GCCvpwyzzdifD7IJltFkHne5q95/dQkSgQ0zy6haw79EOqwe5lryvqvByV/TlKllhlPXhcJjZbre8qNzeB4APP/IE2/hMnJI/cVfewRk+6QGsh1kJLQEMm9g2RYV84VKSxWe8R9h9/dw1e40IHQELxnzhJD/2G8RLEET8w17/FP4GFVqEnwArXZCGpUtegvE9QIw/EYGQnBc++dYlAccki5Wg5EPCIUInaTx3I1ti6fMPJi8RSISngN1uV2RuzvKDyUtoi/C61DfhptbPKU8iL6ElwiFANaonk5fwFXEUwBQ3YuQlLoqQPy1OZYprXy6iQl7CUwQ+0wQdc7VatdSf7q7Jz+8MR2gnjv/g+ALkJRwi1DPwbmeHUccCHvVNxIgRI0Yk8B/jXmlqMD7YrgAAAABJRU5ErkJggg==",
   Q_ =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN9SURBVHgB7VhNctowFH4SJGuOwBHIDcIBOq13DelMyQmSLDttGiUk02XoCUpn2iQ7k6R7eoNwBG5QVpkpYCnvCYvYBuM/Al742yDZkvV96Ol9zwYoUKBAgQIZwEzjodU4lQyaoKAK+UafA3TfnFyfUYebqxMOd6BYBXIPVtVcTe/+Yv+HM9k6tkRnaIv3VV7mvdzuAoOBLMm69el2YItmtcTHh1wp1eSlUQ8vVCxxO5ATWaeBkDcEyPPyqKeYOjIhVJsTAawP+UFfTp52NPnLZo3ImyjhnkF+Ec5WHU94FzYMCeyndJ7qlugONXk59oU4u2s1VGBOXzrbdToT1MH7bfw5hA1AAny3Tq6PqP3nYu+jo1gnOIYvmDfbCeq8xQfgg85gzaA1DXlM8YeLyBN4yHyfCHyQWKcIydQxrUlt7U8A7bCxfMlz5kUoOMCoG8KrgQ2lkgfWlxtN+P58/wrJi6UzFpyBIHxnwr5s1LgCe/VegeS5qlufr/v0p5XK4ytK8VGzOETDvxO4wMq9gnJ82dkx5Gm9OOQJcQQQ/CJWaXjzBvVI68WdHlcAYbGIbIb3YlCuuyYNzSQCCPMi0PDIbCAh5gwqBXlCnEO8CL6DTbBbDYH/xmmcyV6Demh92JWgbACVqhJOugMGNc7/+8qMuF7hNahpX12lJU9IKwDNpiSC17QINKHwOS8GNbuGIZjlHKUSMCXy66/pk9Xbrb131CYTksAtv+H5DUqPRz/R4zEMs4hILECHgEvEJaOtngOz78/3dGiguC6Zkk6zlCbJoL7eduie665tLqG3ChGJDrEbvyJAXnjH4D8izPuqFyHuOpTlbUyjnYEZw0tYLoNavQ9Q2osiPx0Hgu5BgHyIu1a4g2n5W7NKnTQ7EVdA3zr53TQdqs2XFVl0j0LFJb/cXTH3ZxERLYBiGA0HPOTDanMfL3xfvWvt/8OQeIw0qAwieCR5qlPQLZOQ9zCrxM7xC0U4VlS9FS7AU2RRNzn5FJgTEV00hgjAvM3AWit5g4QiFgqQgKaDtTm110reIIGIOQHTXH+j65yNkDeIKcInwGtUGyVvEEPETIBb4gpq54K8QYQILYC+wJkSl14uckPeIEQE49ClWqiNRiV8n+4y1OevCp3a8UXKrZ2ml1zknrxBQMTsDHA5agJTr/jRajVgwAal8WgXChQoUCAXeAaFeLKC2QMu/AAAAABJRU5ErkJggg==",
   V_ = "/assets/png/email-c79fa2c3.png",
   O_ = "/assets/png/forgetpassword-135cea3e.png",
   N_ =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ9SURBVHgB7Zg/ctpQEMY/oAA65QbyCUKZLs4AtUmZzjlBQhdojBsYaHBOYB8Bd8kMTOIbUKaLfIKkAxrItx45fzyjh/R2gzVj/WY8li2B9tu3+3bfAgUFT5sSDBkMBkG1Wu2Uy+WT3W7X4L/C+NayVCpF2+32utfrXcEQMwHD4bBTqVQuaXiw59GIz5xbCanAgPF4PKWHL3hZS/F4wGc77XYb8/n8BkrUAmj8GT36Adk5poiAIj5DgSqERqPRKb15CQXMi9f9fn8GT8pQQOPPoETyRpIfnngLEO/jzy7jjSS97FzwxFsAvX8CIySp4YlGQAg7nsMTbwFxobIihCeqJM4DGgERjGA4LuGJRoD3Sx/CcLyFJ5ocuIYR/K7DF7JarTbj0v+EnkjT2HkL6Ha7YvxbKJHOFApUzRwbsW+tVusZL1/Ag7itvoACdTdKEZ+azSajqXSc5XM0/iON9+li/8HkPLBYLL5SxC1FSHFzNmaSN+xA37ADVXn+9/fBGGny5EjJy/Cvah3JXi9Hys1mM2P3aZH8BQUFMEji+1kQk/Ql/2zIOSFptCI7EO9FvFzy941FQnsL4G4T0qB3/DlNMQtycRUXtAgeZBYgHq/X6zJKeQ9DZK60Wq3Os65IJgGx17/A4DCfgEztXmVZjdTN3GQyafxn44U7B8m70n4g1QocwPMPSb0Se1dAYv7Axgt3Dksz8NorQBIWhzX+njB+txNnCMWh8x2PCEPpyBVKzhWwmH0a4NyuE1dgOp0GrJQ/8MhI9WZ9OEqqD4krsF6vveeVluwb/iYKiHubXOCyxSXAcvapwmWLK4lD5Icw6UaiAGWHaUqebCkoyBu/AFYp85fnJKc8AAAAAElFTkSuQmCC",
   F_ =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKUSURBVHgB7Zg9ctNAFMf/u+u49hHEARjMCQIcIIkqBtM4JwA6KJw4yaSGnMAuINDJgYbOwwnIDAfAnABXFEq0y1tBGL5WsvatLc9Ev87jkfb99T73AQ0N1xuBgCTDfkfJdIfeum0EujCIfv51TgfN6PfZ1t7pGAEJJiA5erAjIUeA6aD4xJnQOAglRCIAbw8fPpcQSanxFvIKeWf07qi3jwCwPWAN0cAQHggjXmztvXoCBiwByWGvL+lrgoGGiePB6wk8YYWQlGCHAYXeyCY/PPEWYL/+b1WGQ0dtUOXyxFuAUthGIEyG1QswRkQIhcQteOKfA8Z0EQpGKAbpA3XiL4A6KoIhzuGJtwAh4H3oPxjzBZ54C8gynCEQ1E1raGS6TYeKObhQKHIGO28B8XA81xC7YGInUzBgVaF48NK6/gSe0BDIHqsVmLyZfnp//95NymncqfIcGX8SD06fgkm4C42dTO1wV9qUBIWe3uVMoH+8DYGxQuyclI8aV93a3sKo7OaVS3+bxMMJP/kbGhpy2En8axcksWkM7YIgIvd2wnZuQwlNw5s2HzLq5rYhgoG3ADI8Uq2LR2R0f6F1issAIcaZ2jiIn41n8KCygB9f/GLfCPMYAbErlkyTkIoeqSTAfnXZSqeBLvP/s2amVftuFW8sPAslx/3uUo230Ltllk6T497C19WFPLD0L/83FTxRKsDGPBn/cWXGX2FFXLZvl+VEaQjZhF258RY6Mz+7hEIP5KGj0s+oEd1q3ygKpUIPUJ0PsgLnIC/TwnLt9EAe+yr9ivqZ64y84MgFtwek/8I1MIXLX6cAJcUm1gUDpy3S/QzC7T6Z0O3OaYs7hOoonU5M5PqnoAr5T5hLYJ1saWhYK74DoYPm7x9BJEcAAAAASUVORK5CYII=",
   x_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIBSURBVHgB7Zo7bsJAEIYHx0jQkS6lj0Bu4CDRwwninCBYQkJUiSsejUmZCqVKSw5gQZmSnCDkBk4FAgH5F1FQeBdvtHhB2k+yFnnGZv7Zh6WdzdEROp2Om8vlnvDTpQzZbrdTy7IGrVbrTeR3JTL2er0GmndcDmUMknaDplapVH6jKPrk+vEMyLyDl4xJInhkbZTP5xsin9VqNcB7ayTBfD6/DoIgTrLZvIfQfWUE5JAECCxuNps/Ip9utxuTJMVi8R7NS5KNK2Cz2ZQQEEniIsDhMR+SBHGUeDab1OLg8ihDpAQgE8+UDQ0M31IaRykBWNICygAMQw9NKgEWXThGgG6MAN0YAboxAnRjBOjGCNCNEaAbI0A3RoBujADdGAG6MQJ0c/ECpLYWWc2AzgzZzd1vOjPMHOAwQ295tm07qPTcYqv8gd2jE6C6wLGrLi4Wi7uDmhYrOU3DMBwtl8sx7GVSyCl6oJ5UkPN9P0bZqs7qaKQQ1QIm7XZ7xjMyG+shUohSAQguTXZnpBClAjBhnRRuaXzS/ycphE1QdjSBZ99/CF1SiPJJjEk6TPpiH1T+pRENTe4yWigU2LIXpi13HrALtN/vD9br9df+novh9fiPd+3Acx88m7AUj6x5LKOkEVabFpV3hadVoiiaVqtVlkV2csShbJngu+Fj6X0VOf0Bnb6jYT8x8UsAAAAASUVORK5CYII=",
   P_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIdSURBVHgB7ZpPbtNAFMa/NzZdhxMQbhBO0HCBUu8gVMKcIGXJosWQSF2WnKBdtd3FaRcswxFyA8IJaDdIJPF7jAFVKHT8B009rTQ/KVHkeUnm5+fxwt8QSrgY7HQF8k6/umiWGQlGW/snx0VFVDR4Mej1GfgIh5DIm639U+McjALjJG6rcDGFoI2qCCb8gHeLSgJWh8LYRg0423gYJceXN42Fpi8FwaojdSavIYVv0duzeVHNZPDiqqTx/84l/BHDcCUYBTLhlqr3P7oB6J4Pe0clNZv5W63fFWqZxkLYRHdMzy1Gg9QVeI9GoL4+G60qlbUEnu2dJGiAybD3SnezkoDCPccLuMYLuMYLuMYLuMYLuMYLuMYLuMYLuMYLuMYLuMYLuMYLuObeC9R6tPjp4HkbDbDIqtfWElis1BfcMfwauBHCnAWvOeTHrPAk/5wfwy1gN+D4zYxX359GSfp3pjXTmVuqguVUP/fvwCLWO6DPerQ2+V/kIR1nWaTbcwmLWBUgos9FIV+UnM117DaDRawKCMtVaQ34Kyxi9xIielRaAlVaUwfLa0A648FO1zSah+e2tyxYX8SK+Gh8ELfXj18n//8BkRgXvvk2yhspguVh1bjzGp0Vq2wxPR++HJHQnwXLm4zlbtXkcZ0skNQ0VpjFjz/0Yp3WFybvtw3rbDoqiHdLNxPoa3o7IOmLNLvdJr8lZ8KjaO80Lar7CY2ury92lhT6AAAAAElFTkSuQmCC",
   H_ =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMKSURBVHgB5VdNTttAFH5vJlA1LOrewJwgzglIL0CSHX8S3IB0WalgTCp12XCDIlUNXSXhApgTYE6Ab0C6KEjEM69vggKJjROnqTftJzk/9njeN29m3vcNwP8OnKdxx61ZIIs1fmlNINkEaPPtPgL1NUGAKAIdqcu6dxZm7TMTgU5zpyKBXAJyiKCLyMG0DKRU4cMA3koh35BQDgFUuMOKaUNKe1mITCVgRiwKxSMgqgJiS0d3p3Wv24dZhI839gSiS4Q+qbv3095JJdD5vGGLSFwQEY/m3ssSeJL8noVy4PL01LTS79KygdOCA6hW9eDHCSyA80+bDdK4n0YCk8yHab/KErzX3LoBnvjq4fdVyETirhzPpIg3loXiF5P2jCO3eQj2rEbrH9st3jFdlK/d+LMJAib1HLxi5hz+Mkgtebx7ap3mRiWVgIyEyyM6mnfBZUHd+8p9YksCui8SGI4eoFY9aJ9CTtDR8ilPhTMsaHECMBAVLjQ+5AiTBR5kVxRWqgkCCFjiy4ecwdsuMOssQUAgOKgpgJyhQVwD60iCAKfGUjr6CXkjikIktBMEmIK1vLR0C3ljWViE0E8Q4PkPlXpOTW7QgncAJQlooJAEOpAzBOgSz/fTWiuMfrCGX/LXGsyHBmvGXC8Yv8Af3bH/jzDyKQoPN6z5q3lUwhFYwG51pMsjZXzKgCkS583tgJVwl//OFCJTzUbiktUvdI639oxbGpflCS1QgB7PT2O8VKYB5YqLiI3h9YLKvUSYa41rrNr4/QkC9YNvfppsLgpj7Xj0ftyUJPzAk2webzamdWjacUltDa8Z8m0MifGVxh/Gn02xZHjBVvukfthuwQJ4dEPAboiyWbI4iUeL/Sem9NlRpwU3EGkd1D+chTp6VWZ7bQlZvOo1t3chY+Bec2ff+EqeHtLqvjztfJDtYMLZMG6JFyifiogXqvA1RNcgRB8edJ83sy2gUOJwDu+KGoEOhIajdbd9Oavv+Y5mTAQG5vSDJUDhGAHjDiwmFnKqQw7u6+hXL89C9u/hN426mNlP8ERBAAAAAElFTkSuQmCC",
   Y_ = "/assets/png/pwd-9a974e76.png",
   W_ =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANFSURBVHgB7Zk9TxRBGMefmb1Vg2AuWkGFhdhAgqGyw87CF45EI+cLfAOxsZAIywGNjfAJIMbgC8HjrZdKGwkYOqqrpCLZiIHI7czjzBEMOW725mZnFxPv19xln2fu/v+Z2dmZZwHq1Pm/IWCRj969Mw1wro07vAU4v4SENJX+BHEHKN0NWFDo9T5sgUWsGJifeNTsFIPLJOVcAY5nw3IJxV0WONtp+P3thjf3CyJibED29vmU28yQdCBiCxhACPkhRmUryqjUbEAKd6nbQSlpr9bb2iIijIq2ATlNXI5dpr2tCwXcvD387qtuflUDKxOP2xnyLlu9rQNLpeZ7X7zZ0clNhQWXc33XGWMdkDCO7x/o5lJV4JP3pI0DSV48wNrdV0u7uvlKA5QUr0LCSPG3hmfXammjnELCWSNCcpSLz3s9aaANPeKBWMh471dV7Sj8A5wU/6CVOg3rlMA0dejnfK5vUNX21A2cED+R7ZSixdfWo2uUkH5V+9BVKG4qiudEiMd0WWpa9RunNgLl4lfG+/oph/UK4kM5FQPl4pfHsk/FnmoGDEjcQAXxIxxgEgxJ1IBCvAcRSMxAHOIliRiwIN5XBZQGGID2hioMGz2PgAYGGIl83Itr2hxHaeBsCn9CBGyKRw7fVTHlk7jI3R2HBmBCufil3MPXHHAQTEFYVYWUI+Ds+dtgwAnx49lpJBHEl8ANVURpQB4qRD1H+2AhqSgeYQAigXI7XVBFQ5dRRoh2uSMe8SCOA7AYFg81UOTFTdAgLvElEEO3GaEG7ntzB6KMEnovVFptbIknBGbCpo+k6pOYu+4XVSzudZ4FfLRaTlUDsj4ji03l1+MWL5bdqWq9L9HaC+3zYO34ihT/ExYLwFBri61dWlx8fqcpdaHxokPowc2ht3/vizi2B5zCtczQ7IZObqTyeiziAUYzL2c93XxjA/lcdkCWPcAitYqXmJ8HEDrBIibiJeYGKF8AS3CCz0zESyLdA4cVNFnHIa1gBBY4JRndG7YSVt6R5ceynhjKkRqa+GLKTAHbm8x4Cz5EwNpbSjka4BBhRF0GBIvCj7D6mlVSMkKh2yFOvzjLdotLvvjcEPujReD7M7aE16lT55A/YvejUb8U6f8AAAAASUVORK5CYII=",
   K_ = "/assets/png/1-a6662edb.png",
   X_ = "/assets/png/10-29a6603e.png",
   J_ = "/assets/png/11-925c456e.png",
   z_ = "/assets/png/12-ae12c679.png",
   j_ = "/assets/png/13-5676d43f.png",
   Z_ = "/assets/png/14-a397ff6b.png",
   q_ = "/assets/png/15-80f41fc6.png",
   $_ = "/assets/png/16-cf8e1441.png",
   eu = "/assets/png/17-bedde42f.png",
   tu = "/assets/png/18-52955242.png",
   su = "/assets/png/19-2ac9fd83.png",
   nu = "/assets/png/2-58c8a9bc.png",
   au = "/assets/png/20-a58f23bf.png",
   Au = "/assets/png/3-abfcc056.png",
   ou = "/assets/png/4-12a0d0c5.png",
   iu = "/assets/png/5-ab77b716.png",
   lu = "/assets/png/6-7c7f5203.png",
   cu = "/assets/png/7-00479cfa.png",
   gu = "/assets/png/8-ea087ede.png",
   ru = "/assets/png/9-6d772f2c.png",
   du = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJaSURBVHgB7dnBbtNAEADQmXWK1F4IF6An3C+gHBEqygrBlXxC+ILQLyD9g/QLKF9A7lDZSg8cKV9AOAU4WQKpQrF32LUqUBM39o7byErnnar12tbYk+3sGEAIIYQQQgghxCIEpujTNKQU3xLgLgC1YflNThFwpPfuHRRe6+Rnn8i8JoQQlsLEXmykAnOgH29PgEEBk8nUGwLolAXr2Hm7Bmjw4WTamT/2cfyja8AMy4PNr9QGop570MDEDtjdGDwpoO78GGLWAU/uAQITP2AODG4vDBGWZkgBzjm51QbcABLwupOA150EvO5qFB4wAV9kvi0MKTwFX8i497kab9gcek23dbBK4Wh+VM1o5BuAIXoHTOzNg+NqY+XqaVQPlk409EVlZ0da7yRFh6NoGpoAu4QmxIJq7B+bIQYgfr63HYMQ4kaqtWhFdtEyiC/tZZZs1yjJF60NiLldiqvEDvh4PO3Z3Xv1zoP916NmZ48uW6lXpQVMhKqPrvdQ+QQIzcZmz/41nD8Uff7aht9bfVOtzZOogA652cIO2AbLaLPgw6LR7NdWB5EGVZ+f7ae5n9ArYGAHfJWC7FZMrT9xlbnkKrYZelZ5/zUiYK3vuN+1hhWQ3dK6a0RKO+5LBqRVVmmb+zU2D40IOP/6kNL7qvOPx9/3nz29PwSGRqS03RZ6FiPELl5qvGH7YavCd6ULCjoejtvf2j3xTtoqT2lSQfLiyV3/Lsm5GgFntuug+l5nqGB02TGt88ppAteMndIq3RxQ3mrB0vRC2/+yZeN+nTcjhBBCCCGEEOI6/QVm9MUNAI75bwAAAABJRU5ErkJggg==",
   pu = "/assets/png/1-40ae7baf.png",
   _u = "/assets/png/10-da12a6c6.png",
   uu = "/assets/png/10-da12a6c6.png",
   mu = "/assets/png/10-da12a6c6.png",
   vu = "/assets/png/16-2bd4085f.png",
   hu = "/assets/png/16-2bd4085f.png",
   wu =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgB7ZjNchJBEIC7x5RV8WJyUcgJniB4B5J149nkCcQnEJ9A8gTgE5g8AZW7qQWhymN8A/AEcsKqWB5kp+1hKxbZ3VmW1aQS7O+yUzP9M70zO9s9AIIgCIIgCIIgCIIgCIJwv8A0Quf9cRMJSkkyRHDmVnOtj72xx0b3Idlp53kl53ifxk2NUIdk4aFbzhXD3Vl1NyAFpGkbUHHAtGWxPGWhrmkpI7/MHsDUPDXor4HG6nCwBchAKm8H1XxNzR4WbeM88SN3L98wbbNyRHRqNYZ44lZyR6bpVndaoOnYKkvUVb9+PosbMjYI9PtVdVO/XsfZnqaVRd5K1kEyq7oonCCr1MBxila/SPhlVd1s++keIwGvOxLwuiMBrzv/XcCxqaXXm7wh0nVOCqaEquOWn7yFO4KZmyaNJm+HDKiowW/vOFVsEeeqnPOWODOqn/cnTbgDeJ9HBTM3zuReQkYiAWukWkSKg/a8gaVwuEVm6hX8JdFvmLJVITdNsLpLysEUxAU8jPRxhZOUxG/MEgqAf4B3MdjyfWzby9P0RAPG66WdBjp2y09fe/1J7HYy446THy5Ojs3ugt3lrlmtP7JK7UECXm+07//Y9MIXEMt0kah05eea93CHW8k3FutMBTifPJ+MJ2FZE+yLSlAHX+FfPvJ4JQ7BCh36vmrPW5ebba5ba5CAJvwQd9uyTNccuHqGF+H+2N/SQWWHD6lRy38ADUR8HPTyrQZvKXY+JIUdfgGnHGwnqu13kVTi1iOWmT9JnyGogk1Og/9doRqGr1D4DzK/YUnSDaZ8s5+aIAiCIAiCIAiCIAiCINwGvwH1ffnjKGA4rQAAAABJRU5ErkJggg==",
   bu = "/assets/png/19-2b8a5fc5.png",
   Cu = "/assets/png/2-79d63988.png",
   Bu = "/assets/png/20-1f5d984e.png",
   yu = "/assets/png/21-d4ee3b73.png",
   fu = "/assets/png/22-24343d89.png",
   Ru = "/assets/png/23-83a407d7.png",
   Eu =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALYSURBVHgB7ZlPbtNAFIffc1pRiY1XkKzqnICwRCRqrKgLVi0noByBI3AETtByAy5QxUAllrgnqFkFdkaUqiLxPN44RAluEmXGM44rzae0XdR18vXnvD8xgMPhcDgcDofD4dAB4R4y/Hrlw6+9Y+F5B0DkD3rNl5v+7Q7cA+aC+AQFHItrCPKoiOTXa5Vz1TLhqeCDvkxQChKy4DIQkkG32QYFapFwLni91xGIR0jQ5wQ70wT5sTYSjECRrQgXBDss2M9/QfljY7yxeAuKVCI8E+SXeEBAfV3B/0A8C8NmAopYEx5+HvXngsiy5JfQu4Mg8R40MFa0pKAg7CDCEcFM0BIaxWqGdsJFQSEFcZahuSSXIkj5vTtDKeHzT6MTRHxlPcElIGAsIPvIz/3hsNeKQBO1hBFPK0kQ5oJAjaiR3URh2E7BALWZtGwJFtmacFWCRSoT3pZgEWvCJgXzwYUJn5b/JxkT5nIfCRCXsoruTG5jVcFc6uZhAFnGLQ59kJsRUcD1MZDbEbe9kA+LoCTawjqCwy+jAMbELQ19uerJnyzV4XOwlGxzQnaC6cG8+tG/J5KDxmFXvxUtotiW4I0gilcJ5ind7vlSSoAXgAf7MiG5IMgVT0xgQWj6baM2V2LQuKugSJ6SaPj5pSf3VPT2ZUr8mv2Ve2tJvAm1w7CVgAGUEj6/+H7FKQUrLz0baG5Fq/CUjiY7Ca7DQ3wHBlETrhhZGMPnj2IwSK2FiUhr511HDWZpTDnJhAteTJT9RMKYwEvHuyJ+8cxMoVqkEmFuSyyEMV+jKbeYS84uzRqNePfP76TqEdOQcLUplUFJWBYRTioBEt+4YifbSsmhgNpHPBc/TqECBt3HSrdPVFB7DxOdgG14sgKL1K4P69xNUDo/1Ih8sgrtVvVaCduYrIrU5/6wvJvQa52BZeqTsMElfx1qwpwCWAFTLyv/eZXD4XA4HA6Hw+Gwx1+QjG5sHIcl5wAAAABJRU5ErkJggg==",
   Iu = "/assets/png/26-5206d38e.png",
   Su = "/assets/png/27-9188478b.png",
   Du = "/assets/png/29-1825e402.png",
   Gu = "/assets/png/3-6318b052.png",
   Uu = "/assets/png/30-d5d51a19.png",
   Mu = "/assets/png/35-e05f12c6.png",
   Lu = "/assets/png/4-12492e70.png",
   ku =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALJSURBVHgB7ZhNdhJBEMerBlzLKgFXeALZ5iUECLrICjxB4ASSExhPYDyB8QSSvXw80OeWnMBZCbpxtip0WTPDKCgz002GPGLqt4Hurv74d1V3TzeAIAiCIAiCIAiCIAiCcMvBVZmdweQTl+QhuU76R8VsRce2MxyfcY3noItFzep+7kLbHO4YSx7uup5lKEHvzjuJ9XBnODlHghohZngEGdBv3UEiJ0iRhf3qwW4zzHrJw67QpMUSqcvvaWrG2fGgM37fJmK9HjLBuL36RI3ucNILs05HtoXq9EcK22DAvan1FoEKv5uwUt+O93ZtMMSNCp2J8vukFoL1LEhHOS1GMDrHezkbDODZdWgph8rBjHO+Uy1mnwYlnfdfXrNn834ZFjyLBXT75o3OAU3SsGmIQw3mM45gL5UpKv/xBsFNkLhgnNILSsEbjuUai6iDMbyEeN0rIG2vWdNUW6VmdpAmCq+buOBKJdd3fznM8jz4NQSrq+qh/rnq97kz4p+Rju3mQzph3g0/nyOm7uva/31E3TrBSN5SyRtU2azgzmDccD9LEbB0M9uQGclvWognLLS8jWJdNh/S3lGE/XlCe+cNg1Bdhq1h3p05sqAcVT9aMFml3mAMRgMC71t4ISf629aUx8UHrbAyfzlhGSKIEUwNhdgAI64bzNajnr8P2JWif8Tp0Ps4zquZVeIxR9olv4YB+TxcuL0ougIjqM6TXOdb06j34Wuzsr8Teb66QmEKLBZrroNiGk9e8AzU6RMDz4TB39gFXpMv+W/ktZJ+whlPzoluYGkIXr5vxptrW/Jy4w1tPtBV92D2dMbzYARqiis3ML5b2yvzFxN8Cf93ngyfUNalOxhfeJ5KAp7I6kH24aqirXniYbGO75XrHF1+G2HeddkawXxPbh0dul5Rr2BdENpuG1HPSXfuEU8QBEEQBEEQBEEQBOH/4xe8WAcXsNxK+AAAAABJRU5ErkJggg==",
   Tu = "/assets/png/6-d33a01cc.png",
   Qu = "/assets/png/7-0fc3263c.png",
   Vu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF7SURBVHgB7dnhUcIwFAfwfz2/wwbiBo6AE8gIbIBO4AowAbiBG9AN0AmKE9gN4kupfgpt30tpa/n/7t5x1wtJH0lDkgJERERERETUIufcTGIv8e3qHSReK+paSWQN6vFtbX3b6FrZsNY8UM/C6e1hdAO7JfQWgWtz6D3AKCZhi0ng2hR6lu8Uuk64d0x47Jjw2DHhsYtJ+Ai9r8C1D3TTdiEm4Q10cold4Po79Am8wShBhHJt7OOupuinxC5JkvxMPTOclp3+c1JRjx8hqdSTgoiuUhuT1hOqt2t+ovKTlp9sjvivJNml08kkzPvYtph7WG7+AP3Jw4v08jpQl/8hVjj9LdXxI2bT+WhxNtszdWnPtbYwusUwpGU0UfQwjAaRcLkCe0QHuFsau6E8w78biFmTsr1sHpxNW7P0M4yGMqTzC5f/EzOkfaPalVPoxKMYotJr92i48JDyllOSOHKDa6dnfifUO7n5qcTONXtdmsU8d0RERERERHRpP6UgfNRRH6+JAAAAAElFTkSuQmCC",
   Ou =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANtSURBVHgB7ZnhdZswEMfPff3ebBA6QbxB6AbuBEkmsDcwniDpBE4mqDsBeIK6E1iewHSCq+5JJMohKIfAdt7T7z09QAiJPzqdpAMgEolEIpFIJBIZhAmMDCKm+jDV6dYer2wiSp2UTVuddpPJpICPhhZ5pdNSpyPK2dtnE7h0AoX6WFKdMCCDmTQa013rlHhuk+kWOh102rF7VP5GJ3reJ07p9HBRpm57wkduP0TXelKdnpt6GwYguIetyc08t1TfXrHj9ycYJ+eS6TpXEEAvwfaFBvniDWy1MOrpzNNOsGgxaDzp2Ozpw+o0w7oTnMGpwObxOgYkdIpmbPP8Xt5bbNK6oXXHotQL7kttwHhrzgHaUda8F/r80cl/1vkPIKSPYHelRJS64dJTLgcz1VR8AzMldXnW24avztGnK+phZl5JQ7mclSOzzFhe1vDsva8cmjHt8gRCPkkKY30KIrNScCJsW4WTdScdyyLBUF8NvcA4tIlYsXIpCOgjuKIcY/ygWZnNWfbrctS2WTa803/5DDJufC8RwFwLvGN5CbsmL71heQW8Da1bECAVnDjnfyAc7o19+IbNgdXRGalJJ855CadhifWNg3LOExAg7eGmRkPqUJ78lF3TdLZ1fEbvjx0iOIFwXrSIjGfauT1nbdCYLULblpq0cs4HjUS42Pn2B8v+0tC2AgFSwa5nvoFxaZsF3LYVCJAKdr3jFAeON3XBtpk6WaLZQirYnQ/FqxwhfH7+a498L7wBASKnRV5Sf2HykFXPzqUNMq6xHvOiukksF1ZtFNwPoU6xW+I7nrShXN5ht9SVzNbJAwFd9+ZBgin27IZc9r6xPKDgJ6fOPbuXgBDpGAa7YXenjATGCeiRl6Z49IIutLhHeD//rvpsTftGLalHf7MXeBdNRH/EQ0G3RYNyxaBZWmbs/lc4JWiCazyauHTu59ykoQdYDxoe8Vz/nbAeiiHWaEIxeYhgNL5i7an/Hs5Ji+i8r2Bb5/HixFag8cD7EMHWKpYNQo/Yc0hwQnZLr9gFCTkl8qSNfwXQeFpyeNUS9RreVmxNy9QCjLdWMACDCCbsC323ZpeA3xtPoftyVMGl/SZtA/0LjxzbOaLwF6uUwXrYgy8q8cuTp8DseGihsfP9ifgwoJmrF2P3WiQSiUQikUgkcgb+AX5SUCuxMXRlAAAAAElFTkSuQmCC",
   Nu =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMZSURBVHgB7ZmBcdswDADhXAZQN2AmqDtB1QnqDepOUHcCKxM0mcDuBHEnkDtB3AnEDeINUPAspjRMSqDsk3s5/B3PoQiSgAiApAKgKIqiKIqiKIqi/Ecg4gOOR+nnvYHr8R7GY+f/mMCVcK8dxmE/mUze+cpVVjh0sRHYhZXbLklSbEk/JVweI5TbUvkDx0oXVD7CQa9CMIYFKWRwjePzQqWiUvToZlq5PhYgpZ08l2cqDQ6jxh5DE4Y3HWOW0oEKzKdp+y4wn3WHHlOneFuKTKOnIKEdPBcTKJnjHc8JQ5eJcVZ+rh59X0AK5q/SgvVfZ/Q1IF+xV2OQrV5kzhqkYN5JaBXpL/WQaoCxHidXBH2nrH3D9eralqQnIUvlnj+kzX5LE+6hf+tYs7rbCg3IcHI/aJ7fwbNwzh1IQXkMzjvG6Ns2Nkze4GWZcZ1uEooWINvUH2kl10G/GR7H1bqn/5bVl3BZrEgKZfHXsD4+9h7Y87pjjJLJNnhBYralYliyup9Y3cfeFyphxv4F6eOpZXUD6bks9PNExXtYVvz2xV7F5OeYWDns3pMNGwclcgmd+UFpE5NL3Za6MvSG4rYKJjJwGnuvyYJkXdbcJsbinmRhODxBRVc45dIm8dxS+R6R/cme7Vn9MaKQo2SKOff/FpFzW8/RmPQivzIZ/tKzXDrFHAaScOuayUgPHRXrN4/IiM/Q08QkD3AGmM4LJciNdi+NH2GLmHxKj5hLm8gzS6WC80hl/hXp96GNdeeqln7u2hUyQb8dtcXcdAWnOp+doQ2TWaKMMuhTd8i5O3TuPdit7Cox3iZnoCfWuWLt0kuBow769R1VGxRe1lsdmo6xKpCCh7d9onDblnOT8RSY9zGhxkMScrmkCOZ19QXKPjvNcgz2K9HgqSuvMB+n5JCPCeeQzNC3zCAn6GPpvk0gvs3tj3PI5zOMj0018CztjXVBv8V/K+yeVzCMEmRn80ux8xk/BjfYu8IM4iejoaRczMLlsV2N3GAD42FpJe5gZPjlYcx/cFm4Atxg2flTURRFURRFURRFeWP8BVmDq2egXi68AAAAAElFTkSuQmCC",
   Fu =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMZSURBVHgB7ZmBcdswDADhXAZQN2AmqDtB1QnqDepOUHcCKxM0mcDuBHEnkDtB3AnEDeINUPAspjRMSqDsk3s5/B3PoQiSgAiApAKgKIqiKIqiKIqi/Ecg4gOOR+nnvYHr8R7GY+f/mMCVcK8dxmE/mUze+cpVVjh0sRHYhZXbLklSbEk/JVweI5TbUvkDx0oXVD7CQa9CMIYFKWRwjePzQqWiUvToZlq5PhYgpZ08l2cqDQ6jxh5DE4Y3HWOW0oEKzKdp+y4wn3WHHlOneFuKTKOnIKEdPBcTKJnjHc8JQ5eJcVZ+rh59X0AK5q/SgvVfZ/Q1IF+xV2OQrV5kzhqkYN5JaBXpL/WQaoCxHidXBH2nrH3D9eralqQnIUvlnj+kzX5LE+6hf+tYs7rbCg3IcHI/aJ7fwbNwzh1IQXkMzjvG6Ns2Nkze4GWZcZ1uEooWINvUH2kl10G/GR7H1bqn/5bVl3BZrEgKZfHXsD4+9h7Y87pjjJLJNnhBYralYliyup9Y3cfeFyphxv4F6eOpZXUD6bks9PNExXtYVvz2xV7F5OeYWDns3pMNGwclcgmd+UFpE5NL3Za6MvSG4rYKJjJwGnuvyYJkXdbcJsbinmRhODxBRVc45dIm8dxS+R6R/cme7Vn9MaKQo2SKOff/FpFzW8/RmPQivzIZ/tKzXDrFHAaScOuayUgPHRXrN4/IiM/Q08QkD3AGmM4LJciNdi+NH2GLmHxKj5hLm8gzS6WC80hl/hXp96GNdeeqln7u2hUyQb8dtcXcdAWnOp+doQ2TWaKMMuhTd8i5O3TuPdit7Cox3iZnoCfWuWLt0kuBow769R1VGxRe1lsdmo6xKpCCh7d9onDblnOT8RSY9zGhxkMScrmkCOZ19QXKPjvNcgz2K9HgqSuvMB+n5JCPCeeQzNC3zCAn6GPpvk0gvs3tj3PI5zOMj0018CztjXVBv8V/K+yeVzCMEmRn80ux8xk/BjfYu8IM4iejoaRczMLlsV2N3GAD42FpJe5gZPjlYcx/cFm4Atxg2flTURRFURRFURRFeWP8BVmDq2egXi68AAAAAElFTkSuQmCC",
   xu =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMZSURBVHgB7ZmBcdswDADhXAZQN2AmqDtB1QnqDepOUHcCKxM0mcDuBHEnkDtB3AnEDeINUPAspjRMSqDsk3s5/B3PoQiSgAiApAKgKIqiKIqiKIqi/Ecg4gOOR+nnvYHr8R7GY+f/mMCVcK8dxmE/mUze+cpVVjh0sRHYhZXbLklSbEk/JVweI5TbUvkDx0oXVD7CQa9CMIYFKWRwjePzQqWiUvToZlq5PhYgpZ08l2cqDQ6jxh5DE4Y3HWOW0oEKzKdp+y4wn3WHHlOneFuKTKOnIKEdPBcTKJnjHc8JQ5eJcVZ+rh59X0AK5q/SgvVfZ/Q1IF+xV2OQrV5kzhqkYN5JaBXpL/WQaoCxHidXBH2nrH3D9eralqQnIUvlnj+kzX5LE+6hf+tYs7rbCg3IcHI/aJ7fwbNwzh1IQXkMzjvG6Ns2Nkze4GWZcZ1uEooWINvUH2kl10G/GR7H1bqn/5bVl3BZrEgKZfHXsD4+9h7Y87pjjJLJNnhBYralYliyup9Y3cfeFyphxv4F6eOpZXUD6bks9PNExXtYVvz2xV7F5OeYWDns3pMNGwclcgmd+UFpE5NL3Za6MvSG4rYKJjJwGnuvyYJkXdbcJsbinmRhODxBRVc45dIm8dxS+R6R/cme7Vn9MaKQo2SKOff/FpFzW8/RmPQivzIZ/tKzXDrFHAaScOuayUgPHRXrN4/IiM/Q08QkD3AGmM4LJciNdi+NH2GLmHxKj5hLm8gzS6WC80hl/hXp96GNdeeqln7u2hUyQb8dtcXcdAWnOp+doQ2TWaKMMuhTd8i5O3TuPdit7Cox3iZnoCfWuWLt0kuBow769R1VGxRe1lsdmo6xKpCCh7d9onDblnOT8RSY9zGhxkMScrmkCOZ19QXKPjvNcgz2K9HgqSuvMB+n5JCPCeeQzNC3zCAn6GPpvk0gvs3tj3PI5zOMj0018CztjXVBv8V/K+yeVzCMEmRn80ux8xk/BjfYu8IM4iejoaRczMLlsV2N3GAD42FpJe5gZPjlYcx/cFm4Atxg2flTURRFURRFURRFeWP8BVmDq2egXi68AAAAAElFTkSuQmCC",
   Pu =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALrSURBVHgB7ZjhldowDIDFPf43GzS3ASNkg9IJjtuATgCdoHSC3E0AG5BOAJ0g6QTQCVSpETzFOInNy6PcVd97ejaxbEuxbIsAGIZhGIZhGIZhGIbxf4CIGck3kh3JAWu43MrzFN4L5Mwaw8jfg+Njkl+BujMSjoTPo9Fo36ZE7SsqPkAcRxrzC9wCCecYONQnHeOVGE8JN+KB3mxBZRHRJyHhbZDAG2Qs5VeSDMJJSRYkfWF4JNlDPxXcGqxP5FgSzzilas/hznhQ9WeoVySGObwxzg7TXq6gP0RdnmAAKBIWEmF/pUNvrfTm6nkiY+g8gus59l2lWJ/aJYaTOP3L2JAmvZkzZtZi14UOlU/KSR8H/XLaDEhJXnoGOjHtcHgrzvhkovokzlwrj00r1V62vIQu+qNRDJnKZFtxRqeeZY/DXSydfjrjO3hsKVV73jIX2zkRWTltbG/4VSrO88pnjiQDOewNWWlL3Ta83AZLj83zPh3wGJH3ODHICkvfg6/dce4Uzu5/gKTFBz2m/0DEuIMr63A46h7GZhju1POtOybWp3C3I5cv5vDgUeAMigdIIYyQTCqUjarzPkxl5TL1/FXK0P34W9WTsW4RZ5cQTkH3d2yy0grn9WQDj3dyhrdLpVQqyf1jaPxzO68wTTSDOGeZVxie76r+SeREoeqVqrf+e4NmpO51SC8gjgqaITgUhapn4A9n5oeqJ+hPVlJovoz9SBpmVMQm+s8UXi+eSfgUTeVnAeFRsDltDzmEMqedw/lRzcNhr+/rSmwqpJ3759Bc4cezkRjHGlrA6z4AIDbv3aWnPffM5dM7oD9DXJ46zTAOvg5aT0gcxuHE0z5pmW8VMPZKd9hiOL1fOnAAhz12lT1zzlrm5TGmrvIS+43c6Y5Y34+ctnGencKdgM3UN/XpjJRyBvVB8RHqe5APkJ/AJ5tz94nuUfT3V9yN/4wRXAHWYc0rzuVGPh4YhmEYhmEYhmEYhmHcB38AVsFdQjpOpnIAAAAASUVORK5CYII=",
   Hu =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALrSURBVHgB7ZjhldowDIDFPf43GzS3ASNkg9IJjtuATgCdoHSC3E0AG5BOAJ0g6QTQCVSpETzFOInNy6PcVd97ejaxbEuxbIsAGIZhGIZhGIZhGIbxf4CIGck3kh3JAWu43MrzFN4L5Mwaw8jfg+Njkl+BujMSjoTPo9Fo36ZE7SsqPkAcRxrzC9wCCecYONQnHeOVGE8JN+KB3mxBZRHRJyHhbZDAG2Qs5VeSDMJJSRYkfWF4JNlDPxXcGqxP5FgSzzilas/hznhQ9WeoVySGObwxzg7TXq6gP0RdnmAAKBIWEmF/pUNvrfTm6nkiY+g8gus59l2lWJ/aJYaTOP3L2JAmvZkzZtZi14UOlU/KSR8H/XLaDEhJXnoGOjHtcHgrzvhkovokzlwrj00r1V62vIQu+qNRDJnKZFtxRqeeZY/DXSydfjrjO3hsKVV73jIX2zkRWTltbG/4VSrO88pnjiQDOewNWWlL3Ta83AZLj83zPh3wGJH3ODHICkvfg6/dce4Uzu5/gKTFBz2m/0DEuIMr63A46h7GZhju1POtOybWp3C3I5cv5vDgUeAMigdIIYyQTCqUjarzPkxl5TL1/FXK0P34W9WTsW4RZ5cQTkH3d2yy0grn9WQDj3dyhrdLpVQqyf1jaPxzO68wTTSDOGeZVxie76r+SeREoeqVqrf+e4NmpO51SC8gjgqaITgUhapn4A9n5oeqJ+hPVlJovoz9SBpmVMQm+s8UXi+eSfgUTeVnAeFRsDltDzmEMqedw/lRzcNhr+/rSmwqpJ3759Bc4cezkRjHGlrA6z4AIDbv3aWnPffM5dM7oD9DXJ46zTAOvg5aT0gcxuHE0z5pmW8VMPZKd9hiOL1fOnAAhz12lT1zzlrm5TGmrvIS+43c6Y5Y34+ctnGencKdgM3UN/XpjJRyBvVB8RHqe5APkJ/AJ5tz94nuUfT3V9yN/4wRXAHWYc0rzuVGPh4YhmEYhmEYhmEYhmHcB38AVsFdQjpOpnIAAAAASUVORK5CYII=",
   Yu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGcSURBVHgB7djhUcIwFAfwV4/v4gZ1ArqBOIk6gTiBdQLZAJiAYwLKBHUDwgTWCerL8XqnudckxUOg9//d5QLpS5vXhpKWCAAAAAAAAAAA4LIkMUF1Xb9zlQXCVkmSTDl2zZ/HgdiCY+9lv5NArOHYW9LH1LnvgOLc0D7hYcv2isuG4lVS7+hwKR0Tn9Fh3W7sxM49sTMnNvfEFva4njFNu/a9okg8NSqKZzzbdh1it4HjfnTtG51wXyDhvkPCfYeE+w4JW7xCeeay5VLKmvVsyNhCa+hWA2WHr1zlP5oybrMrrRc6MR5HytWUSyF1Z9oVflTaJr417T96oD/SEk7pDMnVPXgqN7SEjdI2DyziDR2RzK4ltT+eRtMSXjjf3zjZJz5o23Sy2w39HtyI2o3kajWxd55YkkdP+1Ihc9pDfbPmOEHOc+ZS2jS50resw0qJXQfiZvJv4VrX4b7Wpzs+9Y0HXzF7k7J3wZzLtTTbKW3PqqH9XXLBcYXSfUPhqde8HVmR/57xRfrPpXnDkpKfIQAAAAAAAAAAgAv3DYnvrcX7SHOhAAAAAElFTkSuQmCC",
   Wu =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALnSURBVHgB7ZfdcdswDIDhXN+rEbhBNIIzQbRB1AmcDeJOYHUCqRM0nUD2BHImkDqBvQFKVtCZpkCRlvzSC747nGzihwBNgTSAIAiCIAiCIAiCIAiCIPxfrGINETHRj1zLo5azlpSeH1r2q9Vqf0OstX48a+kozoFidBP2Ro7k02nbM2OXUtw/Wl/BXHSgFy0nvFDjmFKLCsRZa2kdHzdGwvhtmflOFGsQOz8Fc9HOGTNZjTzNRJw3JuGciVVHFuxjC0vA61/EsKNxhderOvDKxMhxXGxCupSJkTv+FcbRwBKw34LoK4pZDMO7E0Mxdi3pEk+MckbBNTKvg8tDQK884xvw8+h8zybipBM6m07Lnp5na8w0sUrLk25ST1wjc/kS0B894x8TPu4qb2bEPzjfO7I9+jr53WC2U4vUBZHfjo3lqzzbr7VsXh1dxeRQky6z4mYka7g32DedgpJLrEm5ppVbfuuIgs17nFLyqWf+lvy2VHyL193d5FHikuNoovgMx+feMOkrjBeKLVjLBsc7pOaS9vjXnvEU7gmOt+BAzthOFVx7dCc3aUffUA4Zfeb8g936loLNVjZbqwqtcETBjUdfO3MWZJ874wnyr9UWloD9O2beR+WMn6ZWGPlLxVCwIhvfGRv1KyHfOFuf/UMgmKLVNp3XPE3wF8uEO/eGPxmGDjxEHC/KymNDCxnbnLz60MXjDfp/KTZFxOr/09NFoIMF0DYuKOawmCXMJFRwxoyZSRXE8xvm0dHzmdEpmMZ74woVnNwakOiszwXczj5wTexgmoNPESp4z4x9t96/JORHtj/Az1dm7Kf1mbtmfrO+czm8wxyQv00NZ+DO011LJo45PtwjaIeXS4xNwfjaNiX23V95cqhhCcj/vauRx9vQKPEqEKeIzKFF/jiq8V6XDux/DZNwYyVqJv2F1h07Is6a4pzwci82FxkV8DMLluPlwtJaMYz/GgRBEARBEARBEARBEITPwF+ey98hJ3b0CAAAAABJRU5ErkJggg==",
   Ku =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMESURBVHgB7ZiLkZswEIbXNynAHRwdxB2EqyBOBaGDuAPTgZ0K7KvAlwpwKvClAkgFOBVstNHqWGQBApzJZGa/mR2DHr9WD6SVARRFURRFURRFURRFUZT/nEVfJiIm5mdt7NHYkpN/GHtdLBZnGEGH1k/WeoEJsOZn1k1Y90qaxp6N7jFWKDVWYD+lsexOWrWxA3cg1sctDlMaW/eJLI3tcBxlyNEZWuuIzhaBujXXD7Hp6uwlILInJ9DOFNnG2ClQbnUnrbCDjbY/iHvZNpdZBzqf+kJ+wzk53tNw4omuZmpdeh2Et89DkkEPJv8oypYyIxMZrdkagkWzDq2g45EO1v4gYXsp5xF6/kpbu4xSJG5gBnO1PAdzz/nb2RrWkxNw8BMKmME9tLC9bOuO9OhjzB+oB5P2UeR/hXlIrWeYAJ/vZ34lZ9NAsRri9a7ynTqciPczzCMRz5OCCeabeI7eTyJIHoRg5Y/GBJzWdaaWrOs2rleRNnhWO/wV8gB/h7kDdwMP4JlflyM2xJ18eWesArsUE5hP5bRosyAneYRp5mmmHr3y1IlfYGePYuqK05deGQftCyk/b2nzEnVuMPlbaH8SlX+2pTADbAccKafVGE/BO33R5ZOXV4dmGm0gE4rgCsrciIQTzADtBaARt2k5Tqfu6Ezpl+OBILv06O0XaKMZOsjdMnoae/VzjpifC7SX4xPYJfkF7FWwClSleh+gWfYSqvvJ94fbysFeDftwn8Nb35yAnIUSR1zTuP4KwzeVUVrYfY3cYSAWRxuMnPD2sym5T/Ki0Yqll9h2mJ6zCAep3tZrjBy4jNHCuKtkrw7apZ6wVkgvC1UovUIF2k1kJRxLOO2AtyNbiDIxWjRD24BO3qHhOr7jukvP/zXn+Xr7vlEKNRLD/k5aG08nw+k+EUcYYmQjBfZcJ0dodepgs6pidBzBI2voTzwK4VJj76H5g4zsz59vxl5iQ0hPy0F1v7NOFamTsg7t7Ak0AZPz7Sw07x7xKYqiKIqiKIqiKIqiKP+c31538oDRetHhAAAAAElFTkSuQmCC",
   Xu =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA8CAYAAADRy2JxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMqSURBVHgB7ZjRcdswDEAhXf+bTlBmgjoTVJ0g7gR2J6g7QdwJ7Exge4IkE8SZIOoEYiaIOgELWNQZpklRjO3r+YJ3h5MMQSBBgiRkAEEQBEEQBEEQBEEQBOE8yNobY8wYLyOUAcoFSolyj3KbZVltbejZLOCrtLaa+VzgRXlsyd8D2i650rEnX/eoo77cQbhN8rN2/DxCBHznW2s8M2GemdPCxBkx+ypiW9ngfPZjq1Mmzo0TfBSyy/E6xOukY5AGaNP13GXOA4qgIm33ZYptFpBIjnLNfmuUT5gStBxumf468D6lzhXKL6ajwIce298ol/Yd3cM3RNr84eiHAfvvtl1XNsErZrhq1zeyZnoVcKzRvkSZQ7P+uuzJVtv1yQe2b5a4bS6dPn4M2Ne23R2hBx+cjvKOaNjOkIY4NfSH2yp4Oy+H+KHgS/bil/YBjS7Y9DgTNCRCaf/EfheJm9sxKOHtfGb3fyARmvklyk/Yzj4de6848ys4HV/Z/QukcY39+2t9FFanoalJfNBRqdjvmu1rTfFCATtH4V4GmP1zXlm9ct6fWH3FdHcodCS5NcWA+ef2Y+a7i4r7sO90sV8AoXLoMbyJBF9ZcQdOeYLxMXT8c/txz+CJ2UHBs+DcQEYdwfuYB4Lx8WzSKzzKoIW9ciaB4CtHQqWydwm8th003cFXxlkqxp/2S+e9aWLwitnPmf4xEHwRijV3FfaIcyu20AlA1RYdh1QVXtpiJwR9gExRxnjPN9PUCo/DT4oBJLKp7WmUrWwceKqnUAfbiimlwAHoVz32QbP71Epxc9TNWAeo/m5H8wG2R4mC05Hc6WORdzxLnc3/gYIDoJnXzAkVEHObxjzVD6nCjg1tgJsrNMVZS9lhr1wlLVcKnjafwupozVfWOU/HU1Z7MdxlEfqXJtTHRUCf5XZzWzmN7XzduX83HQGdYNtnT1hHThovNPOUArTTr6FJo/bI0NAMCndaw/ZT9wLi+0LIlnRtmtaUlvYbuxVg9jXsDlbNnpH+yTM5JWwHjb+rQGjIqKqC9wd92V1R8AbeIfQ/ZQ6CIAiCIAiCIAiCIAjCefAPqX9cvacpc0IAAAAASUVORK5CYII=",
   Ju = "/assets/png/21-445197ac.png",
   zu =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMZSURBVHgB7ZmLcdswDEDhXAdQN2AnsDNB1AnqDepO0HaCOBM4G8idoM4ElidwMoHUCepOgAIRdbYV8CvZse/47nBMGBIkCBAkFYBEIpFIJBKJRCKR8GAEPUHECRU5yZiEf85I1EGTHcmzLjck5Wg0eoZrgozMSO5JthhHRfKdRMGloyf6F4fjHgLBZsEVSa5lAkOjB1jjaajQ4W02Ct1RxX9bYN/I0as4pFclWP/EYOgawylQMNyZtKjTVyqW4E9J8gL7RMXSJjI26A6Ok9oh3PaWklqtx15Q8QPc1AfSovh30vUNfMEmjH08W5HMSTJPvRwxS4OuLbq3D8/pkWTqO6avsRXa4YF9PGAbY43+cNscTgE2m9/GqydgALCJjvcxVE9AOSbA4ThMKO3HlBJjrwgKGbywGLuFE6GNbqnwHBcTbA51U6I6+STYozqEB42glpEw4JSK34b2PynNP4IDPVnWw/drBc1x1MJHT03yRLIifTuLDu73xaCD5Rc0d/MaYsEm3Yve9exfoD+VXuCujpDra799juZjovDo60p2JvKOnhjijEbz2Zt79I01mL2U9TSYdSjXHG+EOiU1pH1SQhxLkluST7rkq15337KxM4uOjaCjFnSEe9mwel5HEcoengntcqHdyjKHwnMsZ565AT92MCA6Wro6xxCAzsxlp5oXwXqc+Rpcw/DUnd8VhPNHqAs2uIbzMETU1EKdsnW48ZzIR7hMJG9aF1Iy+EWoC9pfnnS/bsR4XJpXbesgGVwKdc5kEILO3F19GwhAn7l5p7o2XVVbJINXhraxXwbHeHypyKlYBIzLZIKOtdCuhBhQvl7OPfrF3rSqjp5YlGuOpmPpSai7g9PxAP15iH41oflNnDn6hXpYfOlgOHPoCymZCYpnEG5whW8/nnMdP0OVQY+0MFs8dgLrKHDIb134di8XEG7wDAIRdDifpr64rpbdV8kUrhyrwToJfIa90Rme8nPpGXA+HgSjY8/ji+CDTyM2mjzLD28O6RKuGC+DGX1lW0I4MXfk9h9wLf8gkUgkEolEIpFIvCv/AVU9+VnOW6UJAAAAAElFTkSuQmCC",
   ju =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMVSURBVHgBvVjhVeMwDFZ4/X9sQG4C2ICwQW8CygSwQcMEcBMUJjiYoLkJoBPEN0F7EwipVkBVlDRNGr73/NLKtvTFlmQ5CfQAImb0OKfGzwtqp9IYG2pBWkFtlSRJAWOByJxSm1Nb4+EoZW4Kx8JAQh7mrHOf3WQPqYweC2qp081bVlBbQdw2DR5fbbVHgsff9NpieTMPSyHcVU9G7alp9ZrmJQ3K+C2nTlfo68jiX38gBotGTjrvoYmYTGx8gyOgIALPZCd37LjkKmIljo+SF4DaFOvBNPVIzfH7wIQuMPqelX8GSiLEFtAN/FY6yl4gRqfFP2hHKdt6R78flPyJ5DeamM7cjA0NqBmkcUuIKaDCFbX3jnNdG57OzwDDejin4ABjqtDg7ciNLG+YO/PGYfQ5jUeWn8ibXCsdvJwBvgliq1Cia+Z0ArvLyHiGcdB2DN2bcZeW2GaMSgDjSXFrxG/VD7Gp/fJqAvFMq/AOw3FLRLRrWKdn8AnyamQFfJ02l0wsVZ0rGA6PiIXnLjrFbH0sVQIvJ42BOdYPcG07nZjOAMMRwNeTmf+cZv4qn96ZY4mlMBzPZCy3QsmNS2ODfarwbPNWBvV/b2XZF5KvfhvxjwbbgYnpSDyHcdEW9dr2lpiOhgvsUI8fG2IzU6IVE3tRgm3WhfEwM///y9PWYi8TjgpivIGvPeZS5BX64wzrd4LqPLYEHuWpE3LQ1YWtEDJw0LG66IpcdE6NfKEN8t1Rl7ql52tHJPaodJamL2U5+xhIYadDmTvHuJhwVM7I3p2QeoDd/HVflVz6lsQr9GYG7txe0K9gA3RLzEHXeRiPpNz0/3RnYrwk2NvLXBOzWwk9gPXLzxr3fdfAegnMWGAsgZdDiGH05YWjf9ZVQRO5ZV9ionPdm5RSxBFXDiEmqzxvILRumz9p6pDEy87NkTNtMc6hz4dxdbSdQUyoGTQXBQXErz0BDiUm5AI9fslyp+BHX/W5qQsC9P381Ab0E+wS27HGAz9dMSZwGLzS2ztXA8RkyneId+9mfnRgzHW3fVbhEHwAFCZQOroQMr4AAAAASUVORK5CYII=",
   Zu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHrSURBVHgB7ZmBTcMwEEV/EAN0A9IJgAkIE1AmoIzACEzACJQNOoLZIJ2gYQOYIJxVRzEWjXru2XWle9LJTatIff2OfVYBRVEURVEURVFiqHCG9H0/o2FBdUc1q6rq8dB7L3EGeILXbqy9j59x7lhBqgXVG9W2388WTIpI2CV4Q/VA1bjXh2DA5CTPcCBoxwZxzOn57Tg3ZEnYE7SLTIN4QZ8VV9aSTJgkG4yCVnYGWT4QgdiUdoL+NJUW9Oko3TkiiE44s2DIKyJhJUySSxqekF/Q0lJ9Uq0pXYNIuMI98jEIGlsk+Q0BSuq0kgiGnFI4i2BITuGTCIakFBYTdI0LJH4kSWFDtaFaU7XcL+ekaow7wLW7HuoeEb1zyDGrtAFTkG6v8VdoaDlrTG9z0Y1GCDfhF+ym6r+CLiVf4gpjajXiiW40QtitpUsplBpSq5EG9qloH6yE3YG7Rl5WUrKWkjutgVsSbiHEBcrGSMpaSheOOvNOUUIvbVf7DrvV/8eN9r1W8tkdyCXcYRTZuNFed7lbTCnhrCkdA1fYYCf2hVEwe0oKA+4+/I4M0IxJ9vcJd0ovkZ4VElJipzVPudCV1niY1Kt6acLinVVISVNa7JA/RUkJix3yp+AKd0iDbVwMFEVRFEVRFEUpll89TtE+6KRNLAAAAABJRU5ErkJggg==",
   qu = "/assets/png/26-443407d9.png",
   $u = "/assets/png/27-4ed9e7d3.png",
   em =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK0SURBVHgB7Zj/cdpQDMcF1//DBvEGZYPQDegEpROUTlAzQboBZALoBHYmCJkAdwLcCV6f4CtQhMFOguFyp8+dzpal90N+z9IDIsdxHMdxHMdxHMdxHMdxPh4hhDS85ClKX9mzcMgUtlWoJoG9r9pzv0PVbwLbGvJL2WYVfbLv6Mh406rYutQMDjaTSb8VtM+iDFS/8/hc9HvYehB+8Sm1jVrhhVmRMeyiD7EqLD0JCrLSPqbfOXzm0H9DF3jMMe7XaDszvpsxIYnyz/R8LHUrvO50Ost4fYRuOymjvYCU/EB062PaPePZM/SbKAnuC4y5aDImhPsqxUHPx/KJmpHQeUiMnuO6pAvRNOBWiKuQE4JW33GrdONA9w38SjoPBa63dGECMj5/w+Og0n/LyIsbvjfjvwbEl/K9bGnOnrzFJsa3jx3wDXph7D/UVlzG9gs6zSwKD86JiLPpl4qEVsedKlWcnGannHWwTIfzuLLzBHK8/cQ2xje3OTzQYfZ8kZ3FR9qo59yurx4tJaPi5ZXI0rvv+sScdmOqfvUzPtTM1fw7pGpfqiYl9XKF+5XUQNgz6FPY06BOTPCRNgMzSTJ1eo1aOpAxlU+QBVF1OFNjjlSfI7GbsVLdj2zpSQw+pUNyfh59i3jPR7XPxv5gV7AJvAK8nePtE213yoial6bHI3M9NlaKWHdJa/KaDs4Ftt0fqAm1COLb5KfuNYJVFLjeUMtInBc9eOA758SSv+VTOAeXPmlxwFLicroCdQH3UA7uoP8z9iTsDxDlsQO7Quy3aCdJ8C/tt3cPJU3GLKhtwuEfAMII9qzCNjV9rGxZCtuffZZ12P98zCrsKWwzrVfMubIsWZr+AVBE+Vl3qqkDB4qvtC9BOevqwPI9ygNtdwLL5MpJ1XEcx3Ecx3Ecx3Ecx3Guzn/XjS0WXRNi4wAAAABJRU5ErkJggg==",
   tm =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKBSURBVHgB7ZqBcdswDEW/ex3AG5SdINmg6gTtCMoEzQZxJ2g3qDdoN7A6QZwJ5A3sDRDgRF8YWrIpRQQthe+OJ5KhQ0EkABECkMlkMplTiOg7lz2XX3gPsKBrsjh9P+QBcDGYGyzUyspb23ZBL/yBEh+hxGKxEIG3XK1sl0ECPkCXA5clEqImMK/uPV82XGrZzkiE5grfOnXDZee0n6CEmg77sE5XvNKfuWqkDiW0ddjnlU6LexKLLT4bU0d02HFDxvbVtr2y7aOv3mNq8E2XdrWM01e4Bsv3w20vJ2MTU4fdl4k7p74785sVFxH2PyJxrW7pgEikdEttrLiUeL07RiW1le4i2tvYaDrM2/RBruxTfwYM/8bjbwLGwW7/A//fLa4Fe9Y9Utq+TgvcwsaOeXStNF9unTEFRmCsFT63BeVhiNX9cmZM0eGKQvS+F4N0mO9taVfVBAyXhyGrHDLWnUPGf3rj3CcMXeFHNAJUXL56f7uhcSIYNfrPHQdX+Wy7pPiUbXP35VrdUjSmJPADWWv+FhYYgLedxD8aJAjdsG/uff9jCJyMIQLHPC2tO/pLr12h/QRVIFFk84QQk9rjt2XHuPXQOc6RrfTcSRG1vPPaFRRRF5gN6xoJyTo8d7LRik2L391qhm9SWGk/IikxMDWBsw7PnZinpV1Hv/HaB7R/aVjiwpEzHw8DyDocSIX0/IMW1MSGf1M6JAVKPxuImhSFv6THhq4ha4+auHRN8agpYapTJ/SSXjgWe0q1fUOhZptfjEcFIKpiMBWo+eBVU3/kk2mBqUJNulIdIKhs33vMAbq8zcXFqejpoFfLoVidLLkc0x0kx7LSTD3MZDLT5hnkj9yOIOEXhQAAAABJRU5ErkJggg==",
   sm =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL9SURBVHgB7ZqNsdowDMd1nYARMgIbNBs0GzQblA1gg7BB3gZvhNybgG7gvgnoBv9GF1FCkD9C4uTg+XfnO7BlW7ItWQkQJRKJRCKReDkAbNqSt6Vqy7kthr8rchk6mrYcNJmnoFX8hHt2ilyuyDUUiW8Uj01g3TZQbhZiGvyh1H1X6n4odb8pEpMMFj/dsR8qzZrSW+4zqMsVuQ9lrkzmirb7TkQBIz7HQWmrtGvkPZnCIpM55jotbrTs7DAosULlQM7AEZDaz7XSfhqMUciC3shAP1VxQHeF2KgvyqC7ZjR4wWwn4Ch9WaaCnWiRXDN4Bz91W0pL2wH67jLs53vc7+rdGLQkDmNC8Bnj61vSGqDbDYPlMBgExzWMZl98Q3waLByock97iTi7bQLmnnfXcfVXI58zj2yD6TRtKRzzcBTf4xoPdjQXuDfAyGQbR5+sZ3xIkGKZd3iyKcXQ/wtEMxmbOZQ0CIiYoqCPfcA4BdxuMz0DQ9j1U9smCzTWaTS6Xa0D+k8/1mJwyJE06Pk2/JmSjWowfz+PdsE6FjQXCIvC3L4VJU8e5YxnnEzG8i12I7rFeaDA9OvHiDEhO3f2jFPSEuDxZOPmKQfhx3XIEWs8F8P+NKTxpimJztfHLF5FSyHK8dXAwagZoaQ3emLc4p1Ehxxz7zS6ZMDgsSccViw47cPjR/wsc73TVPCYodyHM6bLe+mgXRDZS4ZmMJ4zTQXjji4bykeTr5O6V+/1O9ze2bUs1m6k4dPTS3QR0TsROt++5LkaPx1z2LK5qtfewM+RpmJRxuD6CmczkLe9/uHdz5TxM9jd5qDI8pwc1bXEZnqmhW7XSinae2WtT2MxwPT7y9jGIusNQLj+flUgZrYVqIjNkKonVzkWJqNnAu48mI/9L9jJ6BmB259tzPfmYg0wLm2s6dmB25/7sMw6QWdu4L56AMuV9dTA/aqopFcE+v283I9iFPcfABqfSt0fWpClDV6dZPCrkwx+dZY2+K9S90mJRCKRSCS+BP8A6hc45+tUCh0AAAAASUVORK5CYII=",
   nm =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAsCAYAAAAJpsrIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANfSURBVHgBtVmNldowDBb3OgCdoOkEzQbNBpdOcOkExwbQCY4NYANggqQTHJ3AdALaCVTrRS7GJ/kHct97eiGxLH2WbfmHGUwARKzso7Yyt1J5RSeW42w2+wPvDUtkbqWxsrFyxjwY1m9hajChZQGZGMklR/puUlMQkggu4BZQq6y84vvCYEn0rPITlkXpzE6clJJLjz+r9JxhjIisrXSotBjHiLdWtpjXyKd7SJGDlZU5FADHydNhOpqtVLlOVFqXEhJ8VGxHg5mFFeyjh+sk6UAJ8ptNlIPijMg2Vj5Z+cifz1Z+gZJgKXr28QJjYo62ZKu1gCKp1KFE22MaO9IV6lMPhWNvEzrQUAsGq0xCEsFKIEcpybDNuV9oFEOLzFaWwKDSA1J3SNhkkspJwGfhvU4R08ZWBW+7zwh6LabRKGSrGDEJUrR2gl7PZT3q2LCO0eqXdGOTqbfg8g51NKyzzvEFEeVzZrQINZdTVpcmhPFsaF3eS8R6QXEf6MwVgybQWwk6Txl2CFdJ9gHkrHsM3rXZMziH/L4Oyk9WDk6Hs/+g2PoKAbFKUDpBATELilQjOB7oG45jqONvPxVbnyEglrMgazrOCbXW7Qh+eOXu97OVR/49QIaPD3A7aGE+4eWERDluRYu8fQ6k4JUTabeIH/l3NCAPXoUYJB0XrYaf5MgtXzSu3HhbuXKvu48pHxqxKng/CTpu5j5639wM3FoCB/7tD+oGLsRDXJNFOT8l04VXZoKixisLk65bJepUuihJsL3gQFoN+gjp/wTwOhnvQXB4y5LklqGFUncesfvIdbeaL8IDXGZJiKX/wlvqgV9dbtJONES8U8parut87rXteum2J2eDWHKfUYEG1MPeC7r37l7RI5+1i+0VA9rW2uDtyCOViJpoBMdu3WE5epSHyJqllsjtIuSqSINyCPaYf3xrwgMv5ZhX0A+83+0M2isEqS619gtcH3h/A+8yhDo0q2npCtfNgxaBGJZ4/xUB5bmXiI+9VrFLkDMYu5WJE1piela3MSMrTMMg36ti/Bqqw/z72g4yWtjifRd3pXUbyAXqh9wp0eOtF8U4dq3BaUFRWsC9wDF6UxC86UYyl6S7VzWZZEiPMnuTY38GEwAvybWCS3Km5PoXxsQ8lP5l8w9KoeguCvL40AAAAABJRU5ErkJggg==",
   am =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMOSURBVHgB7ZqLcdswDEDhTuARuEG1QdQJmk5gbRBvYHmCuhPYmcDNBHYmiDegNkg2QMET1DA8fkRakuU7vjucLBGkAAGkSMoAmUwmk8lkMpnMICxgZBCxpENB8sDHJYvig6RheSU5LxaLC9wb5OSSZEMiMR5JUpEIuAfY0Xe8HqnagrmiIkLyhsMjcW7RJoNW6I7qjqTEtPTuUG0/whxgZ13sNb01Xs8Kbol66gEDhaZb4TDcxmls+6xvcNob+kM5rO4pIJFvkM4JPt+nNrYwDuqeR0gkyWFsXxfCo3KgCUQD41GQDTVMAaeyDKSdsNQbKqX11F7G2p8S4RLGj25D8ovEN81Uzq5hbFKiy/ViXksF1wm9BSREEhVhNkR4VHzR7Zt+jbaACC0kVPcqIYLYlC49ZWrl82VkTuljxEv3o2fXKCCCWIcfPGV/dAOxnQqmvD52xnkT0C8hgliHheO6SsO6O+F+/Bv86W/jbIlqKK2/QwRDOfzDOF+x7gfE8Wy59hqoE9VtYh22Nb41UlnQoebTGIdVlhy4DbWB8MTXQxEe1WGTi57KzBOkoQ94JcmOBz3lcGymOIl1WL9xA+3k4D8c3ZR1a0Ny1s67FdEjPVB1z0tPm4Jc4/DWMsB0fTdU1+S5a8t4aD/5+OKp28BYkDFHnuHsLGW2OfZJK3fNpSV+XTfvjXLBfdq1FP0LY4Ht9FA6yjYWY960ctc0sdJ0hKX8BP4HNt58mhov0L4Scm0GSKOus5x19g6nNly+s5RFzbQGwWOoYsk6S0uZ0NoQ6OfIOid0PLCpnA0ZWmi6urG10Y7EfuiZVMHU9DC01nRLvnYw2thgPBKn3q/uaejJqFOY55hGDVOC4cW5ztrRRp/tIhs367t9vyEpvcqoX2LaN6irtmmvdTp2Y05iO9qeMJ3bfnLB4XcjfVQwB7Dtz0N8InXxPhtnOzB9AAqhPsEKmCtkXD2Q4yqqNdwD2Ea7wvS/PKiHlrLjGWSKP7WoiUYJ7Y6nYNH/1NIt8NXeldpBOUMmk8lkMplMJjN//gF0UPOBrBte+wAAAABJRU5ErkJggg==",
   Am = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHhSURBVHgB7ZjhVcIwEMevPr/LCN1ANqBOIE5gmUDcQDdwA3ACcQIZASYgG8gG8fIanjGPNDlMK8L/9969EnrJ5ZLLJSkRAAAAAAAAAAAAADhFtNYbnZcPge0nLaMmARd0ZhRuwcys/VlSXpZFUdy0KbDtF37csgyspLK14tqaJNXU3bBgKRNsz3U+gkvoMtKPR5YFyXhjGTrlTx5xRXKWLGkzRTRleXDKZUgx5vBW2lke3a33V+WMuGnvztGdOZ0b+m2l2t5jM0jM4RyU9O2U8t5VlD9ftNKFw88sr9QkoDHJMUvonX4mopQ6yikH62Z3mMNwaZ42UR3i8JrbmEsqsP6KH6sU3T5COiu62b6uUvX9LerfOUzNUikF+t06rJujXskyoiOkixm+pyb7HiV9hLSi5hBhkGTeECaDh9ZwSZHBjjk84hAlIf45OP1smwC3NQ29s8upohZiDtdW+uTadlzttrgU7DYYzRtdhLTZD93QXZOMsZUVOzGxe2wQ66gRk71rkqDzUAnsbfSBtx6njdZblq+fMsP+fTMnyvm97x480PGr5VVC2/sJDFJNPaDz3oc3ITvH9InHRJGi30XTrg2VpK3/cIadPkg/4rnMYu2f3Uc8AAAAAAAAAAAAgNPjC/DU4rAqMkoaAAAAAElFTkSuQmCC",
   om =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALbSURBVHgB7ZntcdswDIbhXv9HI6gTxBuUmaDeoO4EcSdIMoHTCZxMkHYCqRPUmUDewN4AJU9yToZfipSoxnWC544nCwQ/IBIgJBMpiqIoiqIoiqIox0xoAMy8sJdlQO2HLRe2GEojp37sbCnd+JPJpKSxsEYX3I2xJbdly6djSWMRYUzW6C34tKxoLGxnc88ghdAr+LSY/VwG+bA0ho791PnPoqWT20sldDZU+5okJ7/fbzxt9rhdNQPy0s7nisaA8eoZoTMFOquOPp27PIA224j5mCHtorAdZYzJhB7a+vOI/p848DA97SrZaF/3gdKYApnbPjsh+4L0KMwdxY0Z4mU+qQYjf3kGMjnJtX0oGwpgddZU+22bvKsN1/FC6qz3P1INvgSykg4nMO2awAAufBXNdi9A1SONQaT/onN41mOMSrTdNjJZfDlBRWPAOBr+AXoo8OQ9xknFtPtL2dIGyH5H6EX5r4MjInKA7zKfTjH4M5CV7ZtmwpnQ6eO/XymNayn4SMMxQFaKe3SE/KIImm0/F+IdtY4YQUbHD9clMCb5ramH/xY80H85IoMDbe5BmwWlwjjy3gO9beihePq/Af0Hoy3XKWnnvIb6cDBzYuy/KKiRaHdjL7eg6huFyYDs4Nwe6sMwpRT3JkLnBa7Pb2cs2oJ3kX6IFuKZUuA0/82AXtZs4YoxTxFzcn0sPe3ztu6QFUari44aI+5ddHVJSFuWU8Q3K65fJVEUDvXxEHvmdw2OMqeZ0DF8eioGJ8KQoGWATK5wdK78j9jYcoVWt5fB7MmcQMeXdDpK8hjr6OvDKNU7WF2uA5Oh18XFh5+2PIaiebTB1hCXl85B1cG7pvvaYXU/0euxA19Y4uE6W5kK2bUnMBR07lgjVo0x+xftro/tOZ0z7P+wjrilc6bZytW7MNbBcX+HuO2d/rr1P9Cs8KIxvO23FdfZlavLSFEURVEURVEURXmD/AXAFsDlNK8DQwAAAABJRU5ErkJggg==",
   im = "/assets/png/7-50491f4f.png",
   lm = "/assets/png/CStype1-44df01f2.png",
   cm = "/assets/png/CStype2-d7b94bf8.png",
   gm = "/assets/png/CStype3-7588d980.png",
   rm = "/assets/png/CStype2-d7b94bf8.png",
   dm = "/assets/png/CStype5-6b3a66e3.png",
   pm = "/assets/png/CStype6-3823ff6e.png",
   _m = "/assets/png/CStype7-dea3a1e2.png",
   um = "/assets/png/EmailIcon-8c68af53.png",
   mm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFcSURBVHgBrZU7TsNAEIZnloiCAuUIoUEyVbhBjoBCUlDhK+QAwBqJPpzA6ZB4hRtkOYFLkzTJEdxAgewddh2TWFbs+LG/ZBe7q08zn61ZBBX/hfcAUD0krCEX0DC4mPIuSeal1ibyVzrWFV9BzbAoxIvMms0O2XL+5tx5Lm9DjbD8LeRHx+j5z9wGc9AY3GEHzFVVL/0n3gEz0BQ8VnLvloGXhG6ifXvat0moTlv7jpXk+K4DTbL2/fXqzLJKGkATNGIv67sxNBXlG2fzd+e6BUaDHSAYm6w04VJgtFJECIDIMVYpET1+ozw5veSTxpUSwCdJ5NbwVvyv1YcirSJJo7MB/8huVYZqb7rVH6Tx+YAHu85UgqIa4BGqAd4vHuCloFtvN6LM+UKobjUiObLUF4UKaeXB1r+I8tbf7W0PlITCbOajblWitPd5Kwrq12L60I3CUF2ATJT1VpQ/ov2P0oJWLt4AAAAASUVORK5CYII=",
   vm =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANLSURBVHgB7ZnPTxNBFMe/M1uTEhrl6knqQSx6KEe9UG/eABtMPIF/gfoHSLf8A5a/ALhiEPgL3JMewURTw0HqySMcAI1x5/lmI6bW2R+zu9ga+kmatLPb2e97897MvFlgyJCLjcA50H7p1kiIWQeYJuBIAe8E0XZl3vWQM7kYsLvqjhVH5ax0MM0dzrLosZCHHSmCR0rtwIdXeeR2kJHUBrzfcKuXHDFDhJoQooYUEJEHEjs/SHm3H7p7SEFiAwIvl1DVoVEQYiHMy+mhDsvxlFLrNqEWaYAWPVKSixA0I4Wo5i86VFTiUAs14ONm46mA8wIDAbkT9UbTdMVoQHtjeZETchUDhK/8Z5PzzVZvuzTd7Eh6ggHDEXLB1G40gBO1ikEjRJPEf87QgH4zEAYUr94KPmkooM+MXr+LUvnO79/fvnyADX0dgV7xaTZmfTOgV/zJpzf4aul9TV8MMIk/PniLNJgXMsJnxJA28TKI75gajUksQYcEcQ0haOFXJu8H353iZZwk9F4mzws6glGrAZ9LQET11fW9xKJGu0SFkTVsSJmjwmgAV1iR1ZFOtm6vxxmRR8xzWBs1mXNAqdjy7phFJDEiv4SVnrHV1FgsYE8IGGOumzgj8pxtKvPPPVO70YDynMviKVGRHWZEnuK5+N8Juxa6lfB9akqZ7LRBG6E58742opss4jUkaDvsWuTqvf9q+ZCTJ3Ehb8qDrOJ5+uxMPGiUwy5HrsQ+0Qos6A2nzOIZRdSMuh45Agdb7th3krsgjMOCkV8rdJq9zR/EeF8TOQI6mZWvHsMSLTyzeMR7XxO7mdOnZHzTNv4xHBprlbq7Fndfot1oQfIoCPNm6lzg0PGlivV+cCsS0t5yxx3OB5tZKQ16AfWFmqrMJTu5TlwPBB0KdS/JCp2WoG9+RlLxwX9gyf6WWwXJ13mPxJn4G3N2x+zWFZl+gB7iXHNCxzz3aStek6qk1EOs2Fu8SVlHRvQMdypoyiZsusn8iqm9ySfZAg3bxU6HDL8DaN6sL7WQgcxFfaW+tGY7Gry7XDkRqpxVvCbXt5R6qpW+cNm9fx2FBx5XtE4OtdKGi4nzec3KhkDJGne+KEjPLrR3Kqk1FdQZQ4YMyZOfmKaIyBCaLRkAAAAASUVORK5CYII=",
   hm = "/assets/png/GoogleTip-5cc2cf6f.png",
   wm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIgSURBVHgB7Zcxb9NAFMf/7xJFsOUjBPgCFSyMRqUVG2Jkwki0gqntgMAsTaYIprBVbYf0G7QbtCA8soD8BYDwDbo2be76XlpLVWq7d85ZatX+Flvns++n9+5874AbrhiEkrTDoHm7Xg+J6KkhCk6bE23MZxwexlE/HqAEzkLdV48DpdQSGQSG0Mz9MFH/yJidD+u723DASujTwtzMOBIGy0USOQz43Xh0cNCxiVqhUHdhLqwBL86kZFrGKY029vpwFfq4OL/KlzYqQIF6b9e/rmQ9q2U1SmQ4zD1UhAEezt6/+//777/J5DOV9YIiWkLFyFTIalc5/WdQMXnzUuGScU2ENLa0Gt4x8td2pA7fsMy7zd1Qbnm1Jq5bgd8InZUJgxav1lU44k9oUqbR+MG3LThSRmhba/2Ir4lvmVJCvBftRJvf4sZweCLlUaaUkMwLGXilH++LlE+ZUkIyoAycSvmUEcou+1RK0gZfMtMIpVL/4JmrsXUYMjEqhkz2GNlCI9NBxYyAraz2zIqRK7nB7IN7xPtQgGrovN/Y61kLjaV+/YmlzOT6N+DK+xY8wEenfQ3zJk9m3Oeij3RfP2kprX0s60Qr9Sxa+zIo6mRdHXQX59s84Zx3b0HqIo7Ksk3fGixJU8inEam3rQ6LkqIR4XlUkKJz78ARhxRapWhqoZSiFLqkaBLrlE2SppD/ZE0CtSQ9BuYny7zk8mQNN1TEMTBq4PScuU9tAAAAAElFTkSuQmCC",
   bm = "/assets/png/promptImg-2d383886.png",
   Cm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAKlBMVEUAAABlZWVlZWVmZmZnZ2dlZWVnZ2dmZmZmZmZmZmZlZWVlZWVkZGRmZmYneegcAAAADXRSTlMA739fv78/38+fbx8QysQzOAAAAJdJREFUOMtjGAVDDhyqvTEbmziz7N27Fxcgi6TKBoOotXeB4DKSABOQr8DAwA3UANRyAC7AYAukrzEwcAIpkAhcgMEXSF9lYOCASBTABRjAJjAw8EIkLsAFGMBmIyRgAnCd7BCJBoRRuRBXMkEkJkAFEM7lgTh3A8K5DCYX3Rigzr57Cy6AAFygIDHAFlg7e6/rMIyCoQYA2Ml+MQB4FKsAAAAASUVORK5CYII=",
   Bm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAIVBMVEUAAACIiIiKioqIiIiLi4uIiIiJiYmJiYmIiIiAgICIiIhdhGxHAAAACnRSTlMA3x/vL5+Pf28QWISK1wAAAENJREFUKM9jGMyATYSBgVEIRYh9sQMD40IFFLEoEwYmKVRlrEBlivRXNgGoDE1IASyEqRHTeHopYsMMQg4TcEAPcgAA60EX9PjnW0gAAAAASUVORK5CYII=",
   ym = "/assets/png/superjackpotHome-72bbeb43.png",
   fm = "/assets/png/wallet-c751ca9b.png",
   Rm = "/assets/png/zs-455846c6.png",
   Em = "/assets/png/MyCoinsBanner-41979ddc.png",
   Im = "/assets/png/MyCoinsBanner2-208f6260.png",
   Sm = "/assets/png/StrongBoxRecordBg-3a724ef1.png",
   Dm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA4CAMAAACIelvlAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAf2DfIBDvQL+gz6+Qj3AwUNw9ENwAAAEkSURBVEjH7dZLjoMwEEXRB/7zr/1vthUpJcJzcGGpe9Z3huC4Yiyk4DcLAV2ldRKZ1vR0+W2O8i7Oo3+yPMXD6uXrdJi9fD2subwxLBTpqAQAJKxmYJfOgPGf/AGJ2XWSAcBAxBZAJGILZCK2gCNiCGMvhiDiEvzQEEqO8yLp3ZaQy/ei92txJeG8CPoECyKIoq36TEtEPSNa915IBrDIF3MrZIG+MjLpTsgB3T8ZFvSOMpmmyHi1CZmGkBGvQiRTi+rsFiFzL4q+nrsvt87jXRbK5SitIYAXIx6iu7ErOAvuiXAeHyUb6Jn0/LQF18JkCQfOO3MjprEFsDdM3MHVc+oZtrFF459GCWg1VoPiBiNPg7KH3eE+QMKzxlwBu724uHwHPz9ndt9Y/0WDAAAAAElFTkSuQmCC",
   Gm = "/assets/png/Group-74b890b6.png",
   Um = "/assets/png/Grouptip-2ccf91bd.png",
   Mm = "/assets/png/SuperJackpotBg-d3b3a41e.png",
   Lm = "/assets/svg/close-f63083a1.svg",
   km = "/assets/png/icon-d09c63d6.png",
   Tm = "/assets/png/rulebg-307d3fcd.png",
   Qm = "/assets/png/TotalAssetsBg-827973d7.png",
   Vm = "/assets/png/VipIcon-3c72b1cc.png",
   Om = "/assets/png/about-14afb91b.png",
   Nm = "/assets/png/aboutBg-4bc986ee.png",
   Fm =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAQlBMVEUAAAD6Wlr8WVn/W1v7WVn7Wlr6Wlr7W1v5WVn2WFj+SUn5WVn6WVn5Wlr5Wlr5WVn6WVn4WFj6WVn6WVn5WVn5WVmvNBy9AAAAFXRSTlMAZiQOP18xWd8aBk2/75+AUnDPj68jiBfrAAACVklEQVRo3u3X266bMBCFYTM+Es4hvP+rVrtNZSmL2ZAM40rd/i+5yCeHsWxMrVar/Zzc+kj3fnWmbMuwPUvelMulLVeOdv32UnJGv/DFQiMZ3WjMWEHaTsPGt2ZalcXSZDTyDIsDrreD9GncQcf14TKWGFZ5wG3eQdo0jvL7TVSGxdIicH3aBCUvG2V9Gll5PSnsII0BD8N2WSmcdykJIJTtaXjcLm09DQ/XwsPZJbvt4sJJeL4a9v8K7k7CVOivxu7XusmczRd6xdjjSvdhzmfX69zRFjiKsbsT3AKK3wUWIT1M1nwWTaVYpEfZTBWne9L4FD9m3fuKJWpvOOCyHXQjovb7xfnmK2c/p5MH9s+vRuJd1/wN6SWdHWVkn7kDl6FpkrG8bJtcpt8Y8JFhcy23YAndE8MeLjk2ENKhZ3cQslDchRsIaG7A7wwLMfCHdPIMK4AZekk4ysjKYaRpSQesGObHbJ4Wz0yyGEYaQ1YOIy1gBTDQwCrASCOrA+cCc5xqwbn4smg7Nzk1GGUbGy0Y5RscLtownm8hP1WAIQvXh0JwgOtDIdjDG9aBMQv/dCGYzO/a/KQsTM2zCle4whXG9GHf5JRgvwvP+vC8Czt92O3CrT7cmt2iNhzNfqQNk2HqdOHOcN2iJhytYbNRBUYXZacFu5v5PooacNdmQURnWMQiLYWRFdIIi1mkJTCychphOYu0AAZWRCOswiKNsAqLNMIqLNL4fazCIo1n+qzBIo1nOmmySIf8OKixSPvsZlmFzbSbowsvR6sNXZxda2q1Wu0/7xdfC91PBcmGXAAAAABJRU5ErkJggg==",
   xm = "/assets/png/ar-TotalAssetsBg-3e718d2b.png",
   Pm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAOVBMVEUAAAD5WFj5WVn5WFj4WFj5Wlr4Wlr4V1f5WVn5WVn3WFj/Wlr6WVn6WVn6V1f6WVn/VFT6WFj5WVmkHXJzAAAAEnRSTlMAn+9/v+9vb98vIB+Pv29fEI/8P8prAAABiElEQVRo3u3Z22rDMBAEUGt1qa+1o///2CL6MNCuE6HVQAKaxyTsiaQEgWcaGRn5l8uHOTdHQtqejl9DNsc9IZLkDpGvu/k+d4rX56dccqR1as5y/h6guoa17E/EW435LmNEOwdX5i+TOUsRgrIALM26hjLpUk9gnroklHNWXz37AEndo7JzSx9gVTejbJx9NmYNgA94kZ0J7OXzjghIhkACIFAAnyFwDtlB4AAQWAAEFgCBBUBgARBYAAQWAIEFQKgHvOSWuFpgz43xlYC0AvIugG8FHrWHvMfckOg/7dIfwAAGYAAsd4LsFYDxTqgEpBWQdwEMd0LlIbtsuBMqAAiO9T+AwAIgsAAILAACC4DAAiCwAAgsAAIJgOA5AAQhABB4AIQHEZj2GP2nXfoDUGaVZmHrM39Rf9UBT/etOUuRoj6EC32AWf2uV4+CAl3QptcK0qticXclkVjWgC4ubrfdS55Pwyq2FFBz0Ys6vQOz5kUXt7pszvGij01HzM2ZD39NIyMjf/MDbLyK893bZXoAAAAASUVORK5CYII=",
   Hm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAXVBMVEUAAAD/cXL/cXL/cHL/cXL/cXP/cXH/cXL/cHL/cHD/cHL/cHD/////cXL/env/uLn/g4T/29z/29v/lJX/9vf/7e7/7e3/09P/ysr/ycr/wcL/pqf/lZX/r7D/r6/hxXGbAAAADHRSTlMA369g78+QgFAQcHADMg5FAAAAuklEQVQY002QVxbEIAhFUdMnEE3v+1/mIInG+8PjWo4CQt1ohZhrAx9VRtfm3HJYFXVB3dg+7FQ+rrRzG5lt4Z0hcdFSxVLtPvcD4bD61GU1GCsJhY7jSA3og8OKL46bW0O+cB2CHPwOBbKIAfLX4yMp2keqNT1+crPkoG+uLsiNm0PDj8b0SYw1UGeSthPpdPJ95UdEU5swkZEh2SlxNoyJ9leNHRXwYpQ9lr7fLsoq+DA6R1S6qaX7AxMpETByKqHKAAAAAElFTkSuQmCC",
   Ym =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAtFBMVEUAAABcp/9cp/9epv9dn/9cpv9cpv9cpf9cp/9bpv9cpv9dp/9cpP9bp/9eqP9apf9Sn/9dpv9Jmv9eqP9ElP9cp/9cpv////82if+t0v/B3f+Zx//W6P/m8f/N4f/0+f9Il/9Ckv9wsf9Rnv9Qmf9Lmf/r9P/a6f+00/86jf+Duf9ao/+jzf9Xo/8+j/+/2v+32P+Pwv9mrP9op//g7v+31/98tv91rv9mq//N4/+jzP+Nvf89OsrBAAAAFnRSTlMAf78gEN/vz29fr58/n28wz49vT09A/ixTGwAAAdVJREFUWMPtlttygjAQhkHAQ221xwSlCSogKJ6t1bbv/16Ngc7KTIBlai+c+t3JzH4uu3802pXzYnbuaoXcdIyicr1OymnnKowGQWHlGaC+zGAq61sETVspsAgeVQsvpAJNhaBZRXCnEOhVBDe/FdSKBdOPVxUOVjCiOfSQgl6eYIwUzPIEb0jBZkyVuOsSAbB2VBzKhljKfxKMVn0FK3wSXarm8+KTSB30EGc9FdMLysEfCuZeMAi8UsHBgcmt4XE8mNgJw/viJGbW2Ccpng0s2gY+SO9EMrAlX+H2KCCWgY7yFOoFjC6P70CEAXGY4AAEstqPmHjCWBjDn7wyiTs4xLuRnP5E1ruZ19IrrHGYtk9Dl7qcRwER1E28QDYQUxoJCU9mIGiiBLDBrRhoRlDDCWCElIb+qaCOE8AOOZWEkZ8IiIkVDBOB+PoEFhCJge8gZboUWxCaFXSAn8FPEvmQUbfiDLyMwF5SuoGbEioHGYHP0ny3cNc8GMKWMXZy2bG0DLdFglhGMaIp3IMGgBopm4LPORdbiPaTOeQQ1wJsUiZxoL70P2AMTri3F+JjA+oxi4DfBMEiJnVdU9KyChWejHRAGrqp5dF90gt5fL7tmtqVs/MN94DbsbuNvhYAAAAASUVORK5CYII=",
   Wm = "/assets/png/betHistoryShadow-5178f41c.png",
   Km = "/assets/png/betInfoStep-3b1bb5e7.png",
   Xm = "/assets/png/betResultStep-a8e6ae15.png",
   Jm = "/assets/png/betSixInfoStep-aaf77b4b.png",
   zm = "/assets/png/betInfoStep-3b1bb5e7.png",
   jm = "/assets/png/bindemailsuccess-f09f9be2.png",
   Zm = "/assets/png/chessStepIcon-6c5c9900.png",
   qm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEgSURBVHgB7doxCsIwFAbgPyK66KSLTm4ubl7DQ3glb6Bn8BxObk66eAFddKkvUKGDadKSxvbxf/AIkofkx1JfRYCIiKg1DBLIsmwoy0pq7Gh5S52NMQ80rI80NlITT4/dP6JhPaThC2vNkECqwK3BwNoxsHYMHJsMHasKvUs0zHgOYA87RX0DqQWquUm9UN9dJraLa9MZWMKuZVmjm04S+vRro+ySnqO7nGfnTUs7BtaOgQveUKgs8B3dVX3wsGT4sN9no/zlHu22zdenDB3ODyv4RzwJn6HFJGRQFt60tGNg7RhYOwbWjoG1Y2DtYgfeSR0C+3aBfSHvFyzq09L3icXXG7uv2OvDS1o7BtaOgbWr8se0awO9sfuIiIiI6G8+gs0953x++ooAAAAASUVORK5CYII=",
   $m = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAPFBMVEUAAABmZmZmZmZlZWVmZmZgYGBmZmZlZWVlZWVmZmZmZmZmZmZmZmZmZmZwcHBmZmZoaGhlZWViYmJmZmaQ3CEcAAAAE3RSTlMA3x/vTxC/f2+PX8+vLxCfPz8veJ/ZawAAAX9JREFUSMfFVduWgyAMlISLCGi78///uh6Ljd1Qy/qwmxclzsQwgWT4B3M2ZsMAJx+t+wi/e8bRsj2F2wRgDUzzMMzFBg/ATG/h5AEO84trMkCiNn5k8Kjdk9nc2gIQ5+aPFyA08TWOtrHBCODbezEKI6gY5Uy+24//E8v6XVZ81CpheShCrcpvjwh/UA5mQ1oYxSCDaeMxpOjVNzijGPR0jUi708Kozw0H417fMiYN0Muw78IBpCGa7sCuZuRVEs0EPXbBgkpb4zdgFKJmCF7EybVqpSElNSSuajLcoBmCP+56ewLiE4bCC/I3hGspGVDfpks9TblfVi/16ClcQLx2NBzD9Rw+AtzODD3He0J+tgTuuUBGxEkYNV4Ybr/4B73YSTNQDCvNQPZfBWs0V3rgFqRLjUzWuJ/hv4BRNeNyMsgY4UK714yFWnAXd7weWWbqmGRilLBS6CV6YMCLqzEAAR9scSuWbPQA0odJnXE09rfhk81r4MQAmxyl8n9o3+cXFUkPG2qYAAAAAElFTkSuQmCC",
   e1 = "/assets/png/close-00101b6c.png",
   t1 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAQlBMVEUAAACZm7iXl7eZm7mZm7ifn6+Ymriam7iam7iZnLiXm7eYm7iZmrmXmreXl7eZm7iWmLaZm7abm7mWmbmcnL2Zm7jB8zoAAAAAFXRSTlMAXyDv3xBwv8+fQL+vgECQMFB/UB9VK70BAAAC0ElEQVRo3u1Z2Y7cIBA0tzHgYxL//68mY5BGq3KDSXt3s9LUm5Gp6oOzGd5448sgRfJO6/0vlHYxbeuN5MZGtQNUFPIedreTcGyN2au9Di859C/jVVjEJg8ys052CYovIeNeEOw0AFYbeBKPYqNOhh5aukg8+s0fi/HTUMUWihmdTlgF9BSm7IWyPfxLVx+hO8Nk8uCJ5nI8fZ4Vpif8yvaHdJSX+DUk7dZeZgRbOvwe21Fytf/alrnm9AL+ToWlkSzg71aw1UAqyFR3plWtO/6AaBo4NhJgO0kxxInUP5begYVYi4HPCWDBPIMUKw6I8sEL0kQ7MLDhqOkmszQb04sHHQhs+uKCJxz4VT7YLiiD2xInAzhdLTpGDyEzy/NmQiCVNGOEJGFRlkaXtTk36Mll4HcyxfPp/BCVQedOYhRzG2nQLoCfdtmezObnDF+pYwkoYBOOo49NKzYhXY0fzf39oWXDFNAKyN8ekgl2U0IBPsiTYSJyXFcAfvpvDz5NwwUFkr8RcQ2DiFIg+HHaaki7Ga4oFP5egWev9jG9zY982NBWEMNPFeCESMPcZiXZwMoDArxhusIocrAhsybaDBPNQx/GUgEbwictdkDg+Ms1HXF5/4azYtPE2DJxf7y+6Ut60ze1HGObu+/Ygh0MbZChD14VlyWq0peryZzyQHP1EGfvPfyiy6aMIz424sznIc2cCwh99WFjBgfg9sbPgKdvb5bLL7ID9C3d8PhlcYAuZUSegM8OEEg3F0MQ4x3lHP2NBan7S2qIhVsUTJ9c1gzfX5hllpb/h+J4Lu93vcyYeHQI1zOXjg5adD2XLP0u73q+/BambHfSDritTQ/hvxymEiiyr3kUM1T6p5XF7wXOrie2vx45YzaBI7Ert9h5NUer3MTijiTBWxhDgoDyE/ulOtD0weahz9Y4f7AGdg7WLcWgDx2tg09CDm+88VX4A1hDX4dTj/4xAAAAAElFTkSuQmCC",
   s1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAG1BMVEUAAAD////////////////////////////////rTT7CAAAACHRSTlMAf2/fzyAQv1i/o5gAAABWSURBVBjTY0AHSYJgoApis1p0gEFzApDD1AKR8VAAchgbIaolBIA6xNvBOkAchA4gB6EDyEHooBOn0EMBweloDkCSUUP2ALrX2GBeCADJB0Fk1NCDCQANHCEHp1BAOwAAAABJRU5ErkJggg==",
   n1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF+SURBVHgB7ZdNTsJAGIbfb2AvF5CfE8gJsL0BNyD4s1aO4AnEtYZ6BDzBFL0AngCFhVvWJp3xGwJFhsQWHOnCeZKmncnb5mk7X/IN4NmE8oQmMqqUoNpaoA4HKKXiRngZYxeRDxnVEwGpyY3ECg30q61uL7fIdDR4JKIOJ8f8Jk/4NVQR5nlABQnC47Abm9ly5m1EteVlr3Z6HsMB76MBWOZKCRXwMDZzAoWg5/ZMQSLbbPwaszA/hb7mz3aSTmo0FytJ4Xb2HM2xKwluVusgt4ipDpaobyQoPTexDyUEMxmFWTLpr5nKh7brEl2h+StnZcQ6TPu9cR6ISzWvSNF4ERsvYuNFbLyIjRexyezQXMBd3tFE3gfLETfiosM9KxTp8UFFTE9TLpXlerg43hqti+FhRYC5hn5NRbRpxKn/PXAQESNRbZ0FP2V81dikIkKJGH8GTbISqciiudX6Do4x1ZFwJ5+V29pyzl6igLeWARxAJIzEsBF2d9+G/Hu+AB48cqyMOgb1AAAAAElFTkSuQmCC",
   a1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJASURBVHgB7dpNaxNBGAfw/zMpIWoLOXgU3IL0LPgFIoiKB81FPHbxoOLJKqR6ajxJezEeFFsPTb+BpVJs9eAXEHP2oIsXQSh4EF1Cdh4ndS2lNM3s5qWb6fODSUgyCfvf3cm+PAMIIcQIISQ0f/PqhBqPTquImw+er3/GiMkl6VytXs/nf/8pcxSd0Vp7F85NNt9//PIDI0Ql6Xzs28+TDD2x8wYpDyMmUWAXSGDXjSEFRXRKa9xQ4ObC7Uv3kV6AXO5Z5cV6A0OSKjADx83jFG+/YPSk1fLNSvsArVcqr97VMWCpAvcbM5dAVJq/dXGOiGoR0eqjl28DDEDWxrBnwteU1l/NVl9euHvlLPosE1t4Pya4397dzVa36R6YNjO7tPm6W0dX/qU905ar98rFbh1dOiwVT4Rh1yEgJx6uk8Cuk8Cuk8Cuk8Cuk8Cuk8Cuk8Cuk8Cuk8qDDWbaIuI11vQLxL3UiD3TpjFEKW/T6i1Tb3jDir8/XNxcQw+e3LlcNU8lxTxn1qSHATv0+9JxhaHebia8n2Oe3q5EpND6d3/6QJkawyZ8vbK4cV4rNWleriCZxzblmUxWHuIF9+Pd3bP4SmBbi8psqaUtDhGgj+Q47DoJ7DoJ7LojF/jAyaXmwO+NtbisFceVdRo3Fw1T/z/fe/FAzMEwZuL0omPgp36p2MznP8HuTGf3T87MLm3UkFEdd+mwUGhPH/CQEBGuIcM6Bi6EYcMsfYCEmLGKDOs6hpXWPuw1bKYOCSGEsPQX6IS4qt7b7r0AAAAASUVORK5CYII=",
   A1 = "/assets/png/customerBg-da8f3d77.png",
   o1 = "/assets/png/dialogNickname-95aae91b.png",
   i1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAABPUlEQVR4Xu3XQU7CUBDGcY7AwgO40o0mJlyAXcsjmPK0EF2xYu0RvIneQG/CUTzC+CQZFzNpKdhX3jy/XzIbkmbmny6A0QgAAAAgF1T6DZVL6jQz/yKfNyeEvKuwpnH+TT5vDoLbBsEGIbhtEGwQgtsGwQZlFUxldUnu8bV1Zg87FdY0xXKnnpcTdso7BkOF/1BHx56i+pR3DIZcfRfe4Jc6Ktb87Ao75R2DGiw6hVgWPTqlWBYtOsVY1nt0yrGst2gLsezP0ZZi2cnRFmPZ0dGWY1nn6Bxi2cHonGJZY3SOsUxF5xzLfqP/Qyzb/4+eTsfycwAAgA7IrZ6o9NukJ9wo7z5Z+IHwrBakNuFGeTcAADCar29oXk2ijFtfyX1nRYvFhfqa6HvCDrn3rOi+vlZvpq9x9a3cBwAAOfoGv1+Cdxt0SHQAAAAASUVORK5CYII=",
   l1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAv98ggO+QEM9wYDCgr49QQB/EtNFsAAAAj0lEQVRYw+3USRLEIAxDUTEEAqEn3/+wfQJHSpYpv7284RcIIYSHqkmxChxv0yQ4dhP9nANJ3Gc4ymaSAc8hXajwTeMazgy6f7EUyH7vINr5AxRQi+yp7ve0HVD0bI4PNCWrAfAk+V5PsuGKKQakJ5k7LqokAK6RPbfkgOgXN3FPzywAniTZc7ONL0IIIYj+/F8n0LL2sk4AAAAASUVORK5CYII=",
   c1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAUVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////8IN+deAAAAGnRSTlMAZjN/DllfHwa/Jm8sPxnvn0oT38+PTjhAr4Ga/9wAAAE+SURBVFjD7dfBboMwEEVRG8YGEwiBBJL6/z+0JU31FAQRnpcuWnE33h15xmwwe/+9Muu8dV3FMo195Cjq6C3qRO1k9iknrAOJdSCRDqSSc9A11SnsSsfUh1+DukSo9GtS6paua1Cx3TjIq9nqzU4eD9MxrkDZdieG6RTlaHC+al5sqU9w4uX+cG7JcSlO/N5S7xegKsmJ7X0TlfJCcB77NrWdJxsdNCxKdZqDNZnepX1DcJA3U3LjHNzJVE7poNyA0jho+Hmk4uY0Djo3BmkcdCpoBxTpoFCQDl5vQ55zUOAc1L7JEc5BDeegkXNQzjnog3NQ4BzUvskRzkEN56CRc1BOOoA4B3nOQUI6aOAcJCGi8+WUezHKfGgn4eAzMXu/VllnqiqZQc4qc/NfMnX982R6aDZbppzN12bv7/YJ4RFYNVkqAPgAAAAASUVORK5CYII=",
   g1 = "/assets/png/editPhoneIcon-b8962445.png",
   r1 = "/assets/png/editPswIcon-42c6f0d3.png",
   d1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAMFBMVEUAAABlZWVoaGhmZmZmZmZmZmZgYGBwcHBlZWVlZWVmZmZmZmZmZmZkZGRnZ2dmZmaxKdnwAAAAD3RSTlMAP0DPH98QEO9vX3+ff0876Tf7AAAAlUlEQVRIx+3SMQrCQBSE4SnCglbmCpZewNJtvIG9gr3kJmtnqZ7EI3gQSwkkkDC5QWbKhOxXP/7iMZi22wZSONQXKFfyrkPkywjVlRE6OaGYQwsONe9yVMSXUotEqQGdow+lHsVWisjmqyil6E0lUfPm+6TUqWXuErmHcCT/lXrQOYcWHApOaG2EsDJCCEmHgN8DkzYAjXClewBa4foAAAAASUVORK5CYII=",
   p1 = "/assets/png/feedbackImg-b7a3bd03.png",
   _1 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMISURBVHgB7ZnPaxNBFMe/M1NJf1AbaMFDFfdk8dScFDxF6NW2e2vroelf0N5Vum3wJtizlyYXLQimP65Ce5HiQYwnfxw0oB6ECqtIYzU748xGsMhsMtlNuhH3A0mW2Tc/vvPePLJvgYSEhH8aggiUbs9lKEdJXrrcO7xqO5uuUT9nxmKMrAsQi9Oftn3jYRkhoYhCTSzJb0t+MqD908b9GMnIxWdVXyZOLSICxh4oOdNp0IEcI3xKgGYAkeZcFCkl8/5ABAUhkDMZ67jtn2viEvCyJ0gRnO/ZzkbFZCwjD+zk5xYpG3hHibhb3zmRRtsRaTU2JVinjO7KOZdNevU0uql2nbG+EgeycgKcIJac09nOz2Y8r7rQ6Gw1FMBYvzxoavHxID0yLTdQXdpBNoEhpFwoF29+MDuEElFanV0Kuq8VoNKcdGEOzTjeW4Q8FwJN+1FClv0kokEfQpRmUU+PDWHAkMxjBc8TX2Q2moIhMutkOceKOriEkSHS/HjJDNiXk79rf9/QCmCEzAuDQ6vcq8zk4tEiFqVY9rO4cW4QWWgEUP3CRAZdBiV0XNseYN+BPB8ZS9cY7a9EF5AIiJtEQNwkAuKmByHoPT2Ms+MTYKl+hME7OsTB2zLcj68RlVACxiYWkB4dQxTOXLyCJ/ciPU36hAohtYNRqR1V0Q5CeeDV44L0wD56Un0Ii/vhDdpBKAE1P4afoxtI0mjchAohRe/gsJFd7UfVD7lOEUrA+cvXYF2aNLZ/8ehOW3K+jlAhNDhyriX7odEL6BShPFB5uoPU4IhRGv3+9TM+vdxHpwgSoCphgY+V3w7e49nGKk6Yiq5RG0IEJHS5u1PIQkNF164V4Am+hS5DCFHUtesPMU8VUA+jLkHuPsee7o5WgO0UXE7ECroEDlIMel/QsKS2nb++K+oVsdiQC9ycvHW/9eq0wvNO2WoAxISa2/MOF5rYNKeUn3OkUvX0cVIVOz+E7ZsP1poZtvCObMaS/soywuZ/107bLcaV45Zl5XoLvFowfeOZkPC/8wvBefMDf4htogAAAABJRU5ErkJggg==",
   u1 = "/assets/png/zs-455846c6.png",
   m1 = "/assets/png/gift-23560321.png",
   v1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAV1BMVEUAAAD/piL/pif/rjb92Vr/pSP82mP/pSL+2Vv/pCT/piP/pyT/qCz92Fn/pCL/pSP/pSP/pCT/pSX/rC392Vr/pSL+vz3+y0v91lb9z1D/ryz/qyj+xEPCYJ9SAAAAFHRSTlMA30ITwMAi79CBoXEj0NCwkWJSIug1W3oAAACxSURBVEjH7dPZCsIwEIXhLmm6uduTte//nGJBJgqCM8VCIf/9R2YSUuT+UnWqpfTQABcZrXs8qyR2bLHUCJZt8OrGXfYMqqx5y7ZI6xn2WuK99s5flhp+nHj4hN+fS6uJ1VEnuJuYqQRP7DLOOOMlZyKokoVnomxsATmOIkwHB2ujCBsAnobfEM8AgvdBhB3W3LZZg10QYMoIMOWsoca9fMmM948V13YJ1h3PKl3kBD0AJWCmH9OugY8AAAAASUVORK5CYII=",
   h1 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANbSURBVHgB7ZpNaBNBFIDf290klVoM5NBaKqQtXkRK8SYeDNTqqaAHBS8SPHjQkxeleKkX/y7iQUErUk+CXgoFsbZiLv6A+HuQWmmbUmjpoRBoNDZN5vl2pUFtNplNdjG7znfJz7yZ3W9nZ3bfzgIoFAqFj0BwiYdHd4XTsY6DJKAdSaw0hwrjZ26lslADN08ntn4T4YTZltDEdPfK4stjjz7nwQVcEbZkozsGCClWahi11Wb9x5hTaUu22DRAJFpKbfEBjGcWx9yQrlu4nGypcYfS5WRLbbkkXZdwJdnSBiSlK8mW2nJBWoM6qCZrYgqYIqaQXYyMrNUWarF0tH0A6qBm4eunDm2vJrtBJWlZ2VJbLH3pRJ/UdstRVw87oZy0U9lSW01GGGqk6hgeSiaiEcPo5SPTKzQt+lfl3fy/042vFgG+ml90gJ384UyWKCsQpzcVCJEavDuZqla/ovC1ZH8vhPA5IUTBH6QLREcuDE98sAuwFb6cTMT1UPi9j2Q3yOTy+c6hkVSmXKHtGNYM47APZU2iW8KRpF2h/aSla/vBp/A4T9iV2QoTkB9710ID2mZf9p+hhIOO/RgmnAefIgA+2pXZ97AQI+BTeJYetSuzFbZu0wTcB5/Bsjcq3WLqlSpPvpsZ7dvTNY+Icf7ZBg0KEmT4MvqaAC4ODk9cqRgLElw9ua8FjObj4ABOHfciYDfUAAl6xQd5RjbefMhw7vaTBzKxapYOOko46CjhoKOEg44SDjpKOOgY4BUC1zcfTsoTwRQCTRFimJ8UdnGS0LO5MuVdXKv/A++ENZriNKaDpay1JF7NX+YPMwvKmjKc0plLnp84rZvl/w78HsfZzwJ4hGfCSCxG4jGR1opIeZZaLtdrv+KAn1BQq/XbivMO73rYQmNRWJA7Pb0V3UDN0kFHCQcdKeHz916sQkCQ72Ed1qBBIb0gvW/SwijIlVf/vAALKP22n7RwsUhL0KAIkN83aeEmTf8CDQoWcmnZWGnhs3fGl/gWseEmLyHEtJNJ1dFlqWCIp400eZkdoIncWyd1dCfBz97M5fp72mZRD8V5cxH4h3C2tUiF7xNOL5k1J53mu5Zr69TJ50hMM2grL6A7eqPOKWZvFglWcB2zkRDOmUMMFAqFIuj8BOT3cIu1gd1TAAAAAElFTkSuQmCC",
   w1 = "/assets/png/googleKey-610f1cb7.png",
   b1 = "/assets/png/googleValidation-c75de330.png",
   C1 = "/assets/png/googleVerifyBg-c131459b.png",
   B1 = "/assets/png/guide-703c365a.png",
   y1 = "/assets/png/gverifyDownload-e066d4e1.png",
   f1 = "/assets/png/iconChess-6f8048b3.png",
   R1 = "/assets/png/iconElectric-8d550ebf.png",
   E1 = "/assets/png/iconFishing-8e0b9fc2.png",
   I1 = "/assets/png/iconLottery-20921329.png",
   S1 = "/assets/png/iconMiniGame-31b71bbb.png",
   D1 = "/assets/png/iconPhysics-3cd642e2.png",
   G1 = "/assets/png/iconRealPerson-901347d3.png",
   U1 = "/assets/png/iconSlots-dc0d52e9.png",
   M1 = "/assets/png/incomeIcon-b1cda9b8.png",
   L1 = "/assets/png/invitationBonus-9a3437fe.png",
   k1 = "/assets/png/invitation_bg-cba7474d.png",
   T1 = "/assets/png/inviteIcon-81a726c5.png",
   Q1 = "/assets/svg/inviterecord-610ce16f.svg",
   V1 = "/assets/svg/inviterule-c8d78199.svg",
   O1 = "/assets/png/kBg-80f2d8f2.png",
   N1 = "/assets/png/languageIcon-6c5eb934.png",
   F1 = "/assets/png/languageSwitch-8cd33ff0.png",
   x1 = "/assets/png/laundryIcon-cf711e25.png",
   P1 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAQlBMVEUAAABlZWVmZmZlZWVmZmZmZmZmZmZkZGRmZmZlZWVra2tmZmZmZmZnZ2dmZmZgYGBmZmZmZmZlZWViYmJlZWVmZmYJxgEqAAAAFXRSTlMA799/v18fEI9vHz+fL68gT88wL2Dza9ruAAACiklEQVRo3u1YS2KrMAxE8hdMEmjr+1/1vbhpZxEcG4l0xSzB1li/EWY4ceKv4Yjd8E5wzjS8E/k/hgE4CU6CBkZi1yZwxKPI/Oeac6Y2Aeec2QuOn+/gNgGVhWan+WDLNuoJEZeldpcTt+9Nc+hJsp9z3hmmz+I2pZ4qghN02WffTv1l6lcw9NqP+/rA9DPcCFXRSQAG35tfs7+TTWemV9jvJwCDHYD6KiPToojcVZHua65SsSvdmVozN/MkJQhle2gFKMnlOjVk6YYgCudBfF2rMwIkJAh0l7CXDjjdRHP3Ff6VA9qRyYhyxQExAVygUH3FmqGPCTdW22TUEKDUbTVCk54g1Ow4MIsJEIn6cz3BiJM+JefjCAKfNy8RH3gsIWgfdYFOawmum/0UoYNyApiKm7TLMQRfm8GwmARyAqRz3RSpSUuAMuLNrUFLgF4mwVbNKjxslzi/lcAxOSEBIQcKQE8FVQSIqmiFgGiRIKdPAqIFZK0uIHoYmKoIiBIWsvY0D+Rojy46oIxwVMFMBiQzGc/1sJV6DFnfy/i+qjGbY4rUVmNHegKudmwgZTPj63qqfw3wEQ7MVRXUV6pDiitXHAqqEoIDW/CkVbwIBwT3ZEB2T8ZVXRUgbh/BikUCAVL8MWkE2HSdwojtr81lnguD0D53TBRPIgaToRENXEiQh4i/jr0Mq99Rnxb2uxi4xLNbWRfaYx+ZznOXE+Gakd9uhscm0zZvqCy1QVAVJU6+aV6o8p4fFHM1tik+zNuLbHhwfnDE9Hz2FH9ek3hIeUP5BzaO6VLyOE3LGO3vGzKaEeVHzhXAvBLuWrdu03AEwjJv+MHzVxiOg1/MbFcqltnO4+KHEydO9OIfEq1JSVrjUXcAAAAASUVORK5CYII=",
   H1 = "/assets/png/loterry-13b4d059.png",
   Y1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAbFBMVEUAAAD6Wlr7Wlr6WFj5WVn6WVn/X1/5WVn6WVn7WVn4WVn6Wlr7Wlr6WVn6WVn7W1v5WFj6XFz6WVn6Wlr6Wlr6WFj6WVn9W1v6Wlr5WFj/UVH5WVn6WVn7WVn/VVX4WFj6WFj6Wlr5Wlr5WVm2RH15AAAAI3RSTlMAZkyA7IwM2b45cD8Zsp95eVlSqV/1xjImHwbf0FkRlnVG75BVuzYAAAFCSURBVEjH7dXbjoMgFIVhtiJQz/VUT7Xt8P7vOGPSRM0I7G2bXvW//xIWF8C+vd4UqkFvGlTV4Wz4o3caQoz1tSHfbSNtLHJiZcbKZTttaXLgwoYr/HXJNAMIA4m+sgXzAJ6lnIjrBFaVnIJVCJvyBo1lAP/KRxTmN9gt5U58T0IwldztNj6DpWtrof0JHJ2MVhTg7CoM+AyIvH3bAap4F68G02d7OPxA4kzKzDDajRut5VGc6r/KYzjgM64zOr41XD/jTUrDpd5UkrDaYkXCOV9bntM2+/Vi65x628l6MRVnC87IOFhw8Fnsz0yOxzCocX5I81QmgMAPQOW9/yWJcbhjx9+h4oV3uxDMlPvH6Jm51v5XxczexUirS89ciWjfRoJhmnbO7hlOjJhetYyQuNjGEqZ7gtGLowLgHMXs27v6BZ8vPeEyNat8AAAAAElFTkSuQmCC",
   W1 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAbFBMVEUAAAD6Wlr7Wlr6WVn7W1v/XFz6WVn5WFj6WFj8Wlr9W1v5WVn7W1v6Wlr6Wlr7Wlr6WVn6Wlr/VVX5WFj6WVn5WVn/Wlr6Wlr9XFz6WVn5WVn5WFj5WFj7WVn/SUn5WVn5WFj7WVn5WFj5WVm/7V2EAAAAI3RSTlMAZjPsWQzFvo1fJrJ5cBlA2akG9YFNEZ8tznmfllMH4B85z2al2+kAAAKCSURBVGje7drZbuIwFIBhnziLszgLZAcKjN//HQfNVLjKpFHsHB86bf47rj7Jx0bBhO3t7e1949pYpFeuPo0PkWhadLaI1KrSApXtI7W64YbnSmVUjeXWyrCa2NVJDPemLOoR4KsNHG13Y2VVsRmO7OCIeMK6lnaldfFGWNjCgnbEusHNYRqicwaPpIi4mu26EVZzlQI+JEI1Fz7MBUzqOAF8TCX8W8pdw5GE2bLQHayHO09fncH8DIt1HB3Ww10udQAPGawoC7FgPdyV1RwRPlZgUMex4EqCWSkKXGZgXBZuhrkAq2q+iT14EmwrAns392FDfm7r3mFjnhUbXGBzfmCxzDEg5N9M3QSQSszcFtDKjY6Rjwf7B9uFptzbF0zYN1hpQG39WuegI91eN1w4od1bun417MGaRBiNsCYPF+7Uo44eHv8+jY3kcKn+VFLDJ/VeRQuPXL13HEnhX+pZSQjXD1c3jCRwdgq5msTD0+gYTjU6xSuXcKQWCt3BtVosexUsnMHyuORyhzOuluAOA7bYXanbc1x+5g7gFpZ83uWZ82+u2Q12zAALNhtzCO7h8xx8fhV8IoBPr4LTOTj9zvDLdnX4Krh63l+fxfMpqCOAJf94j9yV6hGXBDBkVVjJ6cdF+Ov/TEWGE9pbLl3+9S9fWIPpXtj6PAcjpr9SfDN7hwoNbv+Pa2PGWpTVjnNmXIAgXwKmI9zbd2ZZQPz3j+5wt5+u98a2FBR2bhOwrSW+xabKGUa9IR33TEe43vc3hlfQrGXRX0ZNfIMjhJsXmx4hqlEXBiziV1kzXWWaUccJc9zBsx4u/qibgNGUN5Ph0hX0xSUGiP2iD9je3t7eD+k3JpX0gV3YbR8AAAAASUVORK5CYII=",
   K1 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABXwAAABYCAMAAABxqs/uAAAATlBMVEUAAAD////////////////////////////////////////////////////////////////////CwsLJycnm5ub5+fnx8fHc3NzR0dHZ2dnEhMwPAAAAEXRSTlMA3z8Qf18f749Pny+/z69vUE76KOQAAAMsSURBVHja7NxtbuJADABQJ4FAgbYMKbR7/4suK+0P1A0fkwzZSH3vBFY0Y1me2JEAmJzkC/AfRETT1vvF22sC4MmqzWJZt21caPabKgHwJKv1vol+tfwL8AyrdR03LaVfgMJ2yybOpF+A6ezq+EP6BZhO9RKPWyQAClg0kaNV/AKMVm0jU7NOAIyybuIvrQeAqbzHIPUqATDQqo6Bthq/AGXavZ7dACZQtTHCVucBYIDVNkapEwDZ6hjpPQGQaRGj+d8XINM6xms8ugFkqZooYJsAyNDGv4y6AXw3u4avxgNApipKeUkAPGgZxewSAAMKX6MWAP3mW/gqfQEeVEVJywTA1IVvNBbsAGQXvoaMASaxiTNPbgD3zWqb2Xf6DgB3VRH6DgD3zbvrYMoN4AEvUVqTALijieJs1wG44zXK2yQAbnqLS7b6Alw1x02+JowBhry3GbMAuG3WIxZnbQLgpjZC8gW4b/Z/mkWkDN3hwmfq83G4ojumHsfucMUp9fl1uOIjM5pUIpquUDRfqc+py/iU+dF8PjWa45hoHDPHbIJj1qUMcfZTkm/Xfw6/St3RVDqa8nf0lPEpS97R3+zdS27CQAwAUCcD+VJQlr3/RUt/UhctnYQwDeW9E2QRWZY9tp9/+Jr/GHz9Zg/8m91X8AV4RHEm+AJcdhfB13IHAK8dALaniXeGLAAKquONhb4AJe3jg8U6AOXsYn3HCYCLhljf0wRAzv1ML80AikoRod8GUFgfZ64IAZTVxSf3MwGKaeOVEQuA3215zELVASBDp+oAUF6bIsLpYoAcm50wlvgCZDlIfAGybLflJvEFyHSQ+AJk2uaUm8QXIFuVbPIFyLS9rb6OtwHMMsYKkqIDQPnCQzcBMEun4AvwB062mQHk2dKoxdhOAMzWjnGFRrMNYJGqicVGsRdgoWqMhWo1B4DF2joWOU0AFB51S973AlypS8q9ADOVb7sloxUAxUsPvbQXYCXVPvLUhwmAouE37YVegMLht+487QW4gWqo43upF3kBbqca+hRfNE293w16bAA393Tc9XWTImIC4GV0B6OF7ygYBaNgFAwAAACsYqKcmLLcJAAAAABJRU5ErkJggg==",
   X1 = "/assets/png/myCoin-b5faa55b.png",
   J1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAbFBMVEUAAAD/iRv/ihz/hhr/iBr/iRv/iB3/iRv/ihv/iRz/hR3/iRz/iRr/hRT/iR3/ihv/iRr/hxn/iRv/iRv/gCr/iR3/iRz/hxv/iRz/iRz/iBz/ihz/ixv/hRH/iRz/ih3/iBv/iRv/kiT/iR3fckNCAAAAI3RSTlMAZp8mH1/gb1iPEH9NDPU+MBmxeQbvz0Dsxb6oORLZv5aCBztI/qIAAAHtSURBVFjD7djJkoIwEIDhJISwyiqiuIxOv/87ToFV0wQZk9A5zMH/ZFn6VbNEAfbp02+yDMvKn5Z0MNXkPrg0AUxJ+ngKtELPHop0D0W6RxfRM4t0D0W6hyLd08s9e9BJuqc3ePKw0rMHiWcPlAM4gE2ppbaX+VlYdC7rvYVW5dyhONgZuJC7Vr0Z8xrzDcV/DhnwjQXrnuTcq7gLt4Ph2lbHnFBu3IH0jY5pYLz0ak6sXoAlFbwYtpi6zXtObq8vOjp4pR8Tvdqw7IhnYvBPwOgufrvQwfYGs0Iy+CjAK9gW4Bc8gV8wAs9g4hsUvsGHBRjdT8cCQB1EawajwgRGzewjJzPZGMDHEbQa44jqLShg2WASW/UGjOC1EzclbsUfoOxgpfP2ny8FaxXtVjBcUgqmbi6gZNjXgpNMHmAs2vafInXvMF6MV8578Ypgrnkind582g4gw5Lnl/tejB6bKmHsaO/lDBsdUONgGWT6nY89WC3BZnrZs6lKgSu4W4IDw8oOnhXWXv+67rKV01I5D4gHAMXIsJzNV4dpNxczwO6WXvzNtBJAce4dN95L4VJpkgFmNc4ejog5D3j5Zi+lhzWwteHy2vqZgDBiYV7hdCaxiwJD9c78HBP7koycFMj1zEtpnwkhkjBlnxz6AfNNngUB9TYwAAAAAElFTkSuQmCC",
   z1 = "/assets/png/mycoins_bg-75dde93f.png",
   j1 = "/assets/png/mylottery-648ab3d9.png",
   Z1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAPFBMVEUAAACHh4eIiIiJiYmAgICJiYmHh4eHh4eKioqIiIiIiIiGhoaJiYmIiIiJiYmHh4eFhYWIiIiHh4eIiIgCAT3rAAAAE3RSTlMAIN/vEH/PgDCgkFCvcF9AML9gyaL0PgAAANtJREFUWMPtltsOgjAYg9mBcRJQ+/7v6mIcnd51SzTqevXftAlfS6Bramr6ZZns9l73zwiHa3RY5AAHnNK9Au4seJMJU3oCGxOMmjAA6BOPmGCNToEJo4sJMskJwPa493gHOSEAB/4rElVBPtzxk8kkj4n4SVUR8ZOqJOInVTkhw+9JVVCO39vaUZsPjnrPqF7UgD5jZxgg+YeiR6B/rvBvrzWO5UPqpCGRmTXZlNeyl4kw3+onM5ahiMxYhiIyYxllA2QZ3zXgp4/rwDIUgmS2wy3VPxhNTU1/ohtVZA/vD+fAoAAAAABJRU5ErkJggg==",
   q1 = "/assets/png/notification-7f6e72a5.png",
   $1 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANiSURBVHgB7ZpPaBNBFMa/t9u0Jf4hNHjoQYiXeCoWPHlLra2CFvUieJEUbGjPBUu8GC8NFoR6UlpF7UHRi4IXbS3m1pMQrz0FWuhBKoJgmzSZ50xta0GbzTazO2vZHyxJmGGz3743b957u0BISEhISEhgIASE/HAqgVokZTHHhGXF/pogRCH7+GMBTdICg+RvnktZtnWZBNIsENu8/USw/jFX3gT1UUCTGBGshNpEd5goBQbYRz/zVXA+nUrYkchTJZRhBt8ET6T7urmV3kihCRjEgg+MZ/qvIEKfYFiswnMLK8vKdSrdGDEEAE8FqzWr3Fh+DYRYhaPgXOZ0tJ3ivcR0VsbTKFzA4BQC4Ma7cRTcho4RYiTV5buBmZJyS00iYNTdAceHepM22aPYH9flcQS6YH5JoBfbPzfAy1QWS7dn5lddnKW+hVtgJ/ezX8q72Mk6xUL5FyXliQewc23yX9pt5If6Frgs3jUq3JNtSYBPwicsojN2mz06fqM33tB8eIB0vU74CSGuRKsA6zRVu2AZ4NSd1urOjf0x4m3ccc1pmnbBbNFhGEK5t5OV9bs081EY5FD12Kl64/otzGiFQdgWdYOXL8VDkNAftAgVGERYtFRv3AOX5jIMItaqy/XG9VsYWIEhBPOCU8alfw0T/ZCH/1ZmXlUpptM0b4IW8yL8RIqtlcX9RvJpTxoA0q1Lsnjogg8oNy7Tt9e5mc8/G5lfV3AVtUUbNtwixa6oQ1VN0ASBF2UTYsdlq5a1WuGvX3LTjQn9cx4H8pnzoxbYdSG/VSIOQBMCuJudms2hSRxduozIw3beuEQQ3TIYqSwmA2emvLCyDlz3/O9l+h17AmNTs5vnzQ9fSFhCaGnP6rKwp6ll9tH7EjFflSXjdwQEz3PpW9NzRRa1waCI9qV4GHsy/1bG7h75tQTD+FYtKUvLR549ci0+h0F8LQ/VmpaBJy2ThUEYsraRejg7PfdMRvITQohti5fgE0bfANh6hUEdmBiSj1OFSMi9PrHXKw/QgFHBu1FrXH4U4TFhi+egEwo+6ISCDzqh4AYoNTluFNeCG0j+jRYHTrgW3F6pTGLvjKi4Ft0cDyyuW5IfiqX1i13HX23Ydpl+t25U3luSln+wHq2M5CYLgeluhISEhPz3/AKVPBiFZB9+iAAAAABJRU5ErkJggg==",
   ev = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAOVBMVEUAAAD/cXP/cXL/cHL/cXL/cHD/cHL/cXH/cHL/cXP/cHL/cHH/cHL/cHL/cXL/cHD/cHH/cnL/cXLULIXhAAAAEnRSTlMAX9+/7xCfHz9vj3/Pr08w3y/JxTCZAAACFklEQVRo3u2Z687bIAxAAYO55lK//8NuUyZZS5oFGEb7tp7fjQ7BMbi2+pK4iAApKEE80MEup0nEZCWCW4ikLb7Qr2gBx04nrB/teO10AQY7tKU3hKEhT8QIvUrY6YYg9xpMGqTIlu6xTk7B6LEKmdAHIEZkv0KyVIXuNxiqBXsEXqOlBmzz+RTRUCte1eJeOoGlE+OC4tea9fcnvefl91N+J4hoaQjuNpWBhrFV3aTMyMgXGgVH3sUFDtZDYmgky+l61hISo5SKRLISq5QnaQl5hfKSTRV5iVYkL4kzJHmGBGdIlhkSmCExH0kTH8lH8rUl/04ygrIzJDDj0oozrl9VJhQSyhtpSVDfLShe3P3ABX3gRSTqhISkzJAs7yUw+ON6j17syI/rlk0nsIJ/sRkXYgIjEferalvzUiTaHle2EBFsb0jaVGsCyX4XEyLYvixhYF9ieBTl0t304GSEpP1Tqwr6d4sf3XF98ETT2edEIsZieNg3bOhDMbmxjeixIxPX1l44a+qX5zoSSpubBtEt0NHW96WxXZu7zgasSUQm9E0osG0ECNfrrYbS9EzsG0w6aBnLOtuyv4zDZweTe6ctP48ZE2qWZLonuWvGFCp/KjD+rCm+4njJi+RG30yasWHOztiw9W40KRx7HC/x9s9Ktb8pWdJdjS4blqzG48rlNBbA4bnIEUEbyY+YNQjmoCSn/me+AV95bGodftFJAAAAAElFTkSuQmCC",
   tv = "/assets/png/notifyIcon-af015260.png",
   sv = "/assets/png/numberBG-5a37150a.png",
   nv =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOJSURBVHgB7ZpPSFRBGMC/b972Nk3pz0qkKHgQg8oKPVWXoD/QIYjArko3C4IySzt56NJBbxamyHatY0G1amyH6FArhhBkWqKxgmCEbluu+97XzNrWWu6+2efTnq/5wS77Zr43O78382Zm3w6AQqFQbCAQbHC/fo/+PlBezZKsRMNkABjqxF9ggB/WCESa52/zBpgxMii6dZMRvXg7HIM8yUtYiI6XlNcwgH1rKSeLsckYqZqZjpx78DYhe460sJCd2FZxmpAC4CKQzNnKL9GHstIMJBkPlB12m6yAkAXGdpbWycZLCXddOFrETFYNLkVb1GpEHWVipYTnEvpucDlzJFdHKWEkKAOXoxGUysTJCeuwA9yOQSUyYZbC7e31uhumICsIURcziVWcpXDBZNT1smk+FldZ1tVnFaD7iooSQLmDEAJA1Mg/8JGcRvnlDvK02d8BZiGidgBsQiYvc1l5K2Mkv1q2sKWwVIUAmhHw5xyN1Xy+buTHHel8BNZARAfBLghxIrMTkU3lCqPNvtV3aan6ECxbkHDZ8sxjfkHsyy5RiKnes3ocESbA0cxjvl6dypVvgzgvdRgcwJEuzX/JBHkrN/GWrOCy74jgXuYqHYE6Uq2MWAA2QDLeALI4OIAjwrwJZ7nQzaWPsOJPEp40zAc2sIcjHdHhkjYIStjr/HfCzgxaLllpyeCplZYMaqVlB7XSUisttdL6Zyhhr6OEvY4S9jpK2OsoYa+jhL2OEvY6SvhPEsmY3G43DRZMwlkyYDq1a2618PJEWeIle4ov6besq9TGtFtNJxtybXtgyEb8k2NDlx6PLaTTOhuP1yzq7BDkS0rUHGq9OzDy6/vPHyk2WUEdY9m3TiFR4lpPfxAskOrSlIDP2fJMDSIt3U9eZsoKrgQHRnxkhCFP9G+J55mygut9L+bbegfCmgmRrCciREECKWG/hq9XSheybXdCWSvR3DM4KlofJBHlXQ6GJ7LlX+0NRbJJJ7+b2S9GBppM0NPIeOxUbeU8Mf6wXeNPiE2Y0RHDLd0hy8ev/ZGxT8dqqyoRoTBXnNgz2drdPwgWhIbGp8/srZxIINuODIpTtwCZr9r6BidAAlvbh/NF3IPg33I22zggBjlajD8SXRfWmHWZloSIbmBItMZfmTwt6TND6yG79HXrhLgtTuzf9YFIL0l3RXFrGD7j2Y2uQUf+KFMoFArP8QMoW2xphpE19wAAAABJRU5ErkJggg==",
   av = "/assets/png/points-23026697.png",
   Av = "/assets/png/pointsSmallIncon-01ccfa9c.png",
   ov = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIoSURBVHgB7Zmxb9NAFMa/dwZTqjJAmFCFYIElEkhZ6Ii6MuChAiEhscLGH0DlIrF3REx0ABUYysDeMRNSpfIHZGKrCGpVqW38Xp8718+uL/Glqn9SoiT37nzf+bvPSQy0tFxsqGrh93QpnsXMvaNIbkacdfSjWIiuYRw4OqCM9+Dc7igbDa6D/z5Of+xV6VpJwK8PL7uZcA8sV9AAOqnDDNhOlr/+rlBrs/H+Rc8BPQRAQP2ny1+2rRpnNW6mS3POUReBcJBebl27xuAfrt5qyjanIbrPYhfft2pMAcyjuwiMBkXHajcFRJHMITCXwTesdlOAi1xwAUzOtPAlmL1t/6tHF3QFzFNcgR0dp194DGbzWmMLMMgnT4RXAn9ITsbr1+hqW2hCPcc6Vu0zQIy+6IEde1rIqYW43urn1BaQcyICnjC8GKcRgnDuBXhZ6IwxulM3aSwajVGfuCyi2RidgGGbi1HPuCyiuRj1jMsi2hgNTSsgNK2A0FSKUYLM6n80i/piAf6/wOrwqaihVAARzzPcGwoz8VJsC5F0pnnyOSV7wD2Z5snnmAJE5DamHFOAfl2ex5TTXgdCY+8BYIDwbFmNtgDGGgKj+7C+AEi8qs9DhGOYjXjFKjAFJOnnIQu/RSCYZCVJ1wdWTYQSvm3+2Xq22P1PoEf6dgbNkC/c6+Td+seywsq3WTfS53cQUapCHminh5gAeWjoYw3Z/mqS/gxp3ZaWc8Mx7pGfLkzzm4sAAAAASUVORK5CYII=",
   iv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAUVBMVEX6WloAAAD6Wlr5WFj8W1v5WVn6WVn6Wlr/W1v9W1v/UFD6WVn6WVn5W1v7Wlr/YGD5Wlr7WVn+XFz8W1v6Wlr5WVn5WVn6Wlr4WFj7Wlr5WVlzwNIUAAAAGnRSTlNmABmfX9l5TAwyBvVTWUEScDksJOziz6iWggwEvLQAAAD9SURBVEjH7dfbbsIwEEXRiRl7HNcXkvTq///QUnAbTMbqKLyA5P1igVhEiEgcYLijjt0cfUDgCxQX28RuRPivyfHYeRDkHYsjiJo4bEGYZfAoxSODSYqJwSjFuMUOxLkNtnJsN1hByeiszek8HurMH05t/Jpz1qfzPde9fEFJtfH5heWs+hBgXa6sb69sBNi8XT4zfB6qjiDAzTree4epfoc9xlfVcccdPwK262zwFOAmJOJ/3Et4vfHmms4/7x7bm2Sgaigt13ipxlZksKpH1rQdXkUnBg9LQFLrQ/9r/fpcIsBZsrctXmywe8a6OmtM+5a+JUBKT/Af42nwN4yCGPwgYk/iAAAAAElFTkSuQmCC",
   lv = "/assets/png/pswLock-999ae77f.png",
   cv = "/assets/png/rechargeHistory-3e1026e2.png",
   gv = "/assets/png/rechargeIcon-cea93be8.png",
   rv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADsSURBVHgB7dkxCsIwGAXg1+LgIjh4gHoKj+Gsix5DB0FQcPUIurgLXqKnsBdwcXIp0a7FWP4IeQTet6YtfU3/P6UBRP6S+QZu+9midvkRcEPEU003l7HlhNw3ULtsG/nmGwWMel0X+zyRDBFcd3OHADkSpwBsPePxzbt6R0CxGa7/rRa83SlkBgrEV/gGVANsCsCmAGwKwKYAbOZvoS6T5QH9wch0zuv5QHleIYRmoK08rRGTiphNAdjUhdq0DhhpHWBTADYFYOvsQqH/7WP5MQOuQgLMuy+sGfHtFKmI2RSALSAAozul0RElSW9tYDPoegNJcwAAAABJRU5ErkJggg==",
   dv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAmVBMVEUAAAD/ViD/ViD/ViD/j2z/j23/ViD/j3D/VSD/VSD/j2z/j2z/VCD/VyD/j2z/j2z/VSD/j23/j2v/ViD/UCD/ViD/j2zrOgL/////8+/1nID/imb/azv5wrD/XCf/49r/1cf/uaP/lXP/qo//nX//elD/dkr/6uP3qZDzhGD/cEPuUiHsRhL/sZj/x7X/pIj/ZDP/nX7/hF4htbbUAAAAFXRSTlMAX+/fz48gEDDHn5B/T0Ag79/frxDrbAGJAAABd0lEQVRYw+2T2XKCQBBFUXGJa7YeEAZkEVBxSfL/H5dmyoiQRqcreUo4T0PBPb3UYLT8NvP+k7iDOV40xocToUV/2JA3hSYmbZgIbfpUfiEYzAnBWBBwWjA5gmdCIFi0gr8qcInP1uHxeDgRL1xCkIo64cpWLENRJyEEvlurjvEvVuuawCcEsKvml0Vtz3E8dagadkAJqoai/mZvIblT9FDN0wKQbjk/hrbWmS0+hOUCJdACxE/EGezbsS5srlpIfGgUKIXq4oRj56Vgj753VT19A7gpQGTyIQ627VlXeDhDkcbq9wWIf1ATlOAeYxXWFEBMCIAjiL6P4LIEEpe4L/M5LjFlCSDAa1SZIAOeIKpfpIgnUC3YTq4uwQaPAXAFMrv+mTLJFoAM7AuBBLYAibJzHOdnCUpSN44jrM4QULSCVvC/BF1O/pEQPHAEL4RgxhF0jJ+10DMoBtpb6A4M2tDTrD8yGhhMNRTd6atxg9Gsc5uR0VLnE3Vv03amsBSPAAAAAElFTkSuQmCC",
   pv = "/assets/png/redPacketShadow-d70c1569.png",
   _v = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAOVBMVEUAAACjo6OgoKCjo6OhoaGjo6Ofn5+np6ejo6Ojo6OlpaWioqKkpKSjo6Ojo6Ojo6Ojo6OkpKSjo6PuE3LfAAAAEnRSTlMAf0C/H98QIM/vMGCfj29Qr1+b1SuLAAAA4UlEQVQ4y+3Sy3aEIBBF0eJR8hCx+/7/x8amdCVCZYUMetZnpm4BBfr05hbblX+lEX2pBJ1uUDKTK1ojUGgyA2z/sHmcbVetG4YNDHBQaEXqxjykbj3gbzceSIdUbUcN8ARyQlz+oBUwHqC7dTF8000ehISNXpQsflh5T6gBrHw8L0JpBR6nlDmE7ucOZ7CnRsVe9AVio4GvAexCjcqFPaG8Vw6a27RXQrvEAg7sh189VNHa7/sFWP24AEY5F0qri3VcVwo0GYNnbU7g56xlgIvp0mfyBWNMer4W11Xp03v7Att9D7xKb3uAAAAAAElFTkSuQmCC",
   uv = "/assets/svg/righticon-84e23970.svg",
   mv =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKdSURBVHgB7Zm9bxMxFMCf36XXKjRSpU6tkAhLuiLBQhfKwkRBCAqIP4KR+QbEwMrAyohaCQS0YgSmMIDESpBQxFcXglBCQhPOfjxXBVW2Lwm6hHPU+0n5erYl//wVnw2Qk3OwEcNmXI/WwiLMVFSgFkGpeRKixIXPkoBVSIEgeEIAm4KoAYhdlFg/BDv109HGj6HKD8rwLFqbbQXhChEtOgqPTMCMK4W1Oei+GiSC/RIf3LpSaRbCi67KjxtEVWnh1KWH0dVy33xJCbpgEAcroGgaMoJ7JkTEM1vckEl5nAJ62GAhOAWeIONgWdfJleYU+A7BiSxb3kT3hJ6HrjRLYLf1ERO7LCv0PNQroRm3BNpTM2XwlBDDJTNmCcRxfBQ8BQUsWDEzoMcb+IoQ82bIEkBHJm9QylpYECYI1+iYKAEXuUDW5AJZkwtkTS4wgM7ea2wUIA3IlSM7zM/KbwnEJu+Ba3uBw/zGz850DEZMKgHeo38yzgUa/Fongjew34yA89FdQjjJ31e5xN/9FgmWpKEPRyzS9QCJGlfqHihYQoQPoMRLAkocMkJBlT+quyJcRgjxkYVqkIJ0AvsrpfQv+qcy3IWQlnwVyppcIGsmSoAX254ZswT4lLgFnsKnEk0rZgZ6UnwDT1EgrJNqS2BmOvgMnhLIuG7GLIHOr51U/4zjJO783DZjlsDlaKPHe5xt8Ax94XH+9mNrfjpXIdFuP+cZ0wVP0AsLdpqvXWlOAW1aiOMqeIIkqrpaX9N3H7t189oRKWlZX+hBFpDoKpIvLkT360lZBm7EH904V1LF4vH/fWegx7weNkkt/4ehnyS0SKE4tyADWZZKlRBwlgfnaG5xuKUFqB7f7DX4mvXL+8bXd9fvPPVmDubk+MxvVD7yjXQrn+8AAAAASUVORK5CYII=",
   vv = "/assets/png/safetyIcon-a4a031dd.png",
   hv = "/assets/png/serviceCenter-6b5484d7.png",
   wv = "/assets/png/settingCenter-7f247f9f.png",
   bv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAIRLg7zFgQcCgv5DQcYGAsFEL+c69AAABOElEQVQ4y7WTS5LDIAxEI/4Y7CTv/ocdjxGhApmaVbRxWzSSugvdvhMmPBuIwfxBkeJwciEgy6cqBbDYYEy0VKCYpYz9vWwSV2xGMlhZONb/grCdlNBT5r0ZyFJ8yVX8TIpsUyYRZ5KnLqUnLesIppI79LHTM3Ww9uK6XH95kOQlOYfGCcAmHbq6Ae1IBsxkHVqazXKna43noaqPL4n3BgppkugwsxwzcrjrC8O91VvQzyi9egtzO6dImNtVXIp6v7SjQxvH5LT6zhlH68ch7f1J44Lea8aE7muqbvzdtatWs8NjtibNst/ewr0sit50sXZ9T/8/Oru+TGnqp5mmWGZ6kIxu6CMVadM9pn7eYqU7A4em/KflPDn5GTPsYzmXNXfs6mJb8zUk04dIOB1sDfMU5Qdz+0r8AKe9EWqrUWMCAAAAAElFTkSuQmCC",
   Cv = "/assets/png/sliderNum-ec124ce4.png",
   Bv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGTSURBVHgB7dovT8NAGAbw965jGATfgCk0CQo3AowFte/A/yBAgAAERS0DxAxmmdg3gATFAskcii+AmsPOkbDrlRbFmvYqaJreu+dnltzdLn2uzb1tUyIAAIsIsszN7sZxcNiuL2j+b7vwaSQEtc86/WvT/60K3Npea5DjPJjGaK1Xz7svg6R+SRbRjrOUOkjKqrGbpgwCc4fA3JUoJ/+tn1nJ5QyH9dMXoh0NGwrbNJHb3FmvUg5yCZxF/cwKNi3uEJg71OGo1l7tKqiVJ3ElJVgtN6/6mRXjGf59/gxCxYUN5Vk/s2IMXKT6mRVsWtwhMHcIzB0Cc4fA3CEwdwjMHQJzh8DcITB3CDzRqfWIUicQ6WMKNI8xcFmpXvAzNAwZaikeKUWR5kn9MK15UK9IpRpayomX8eFqf82pntsepK56EecBALBC4i7dPKwtO9pfJAupkh5e3L++xfXFBr472lrwxmqTLKZIPF12nj+j7bE3Hs7Y+ybLzc6My3HtiZf07X59xSevQhaSnvg47fbfCYC/H4dclLC2sLYgAAAAAElFTkSuQmCC",
   yv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAaVBMVEUAAAD6Wlr5WVn7Wlr5WVn/W1v7Wlr6WVn7XFz7W1v5WVn7W1v4WFj6WVn8W1v7WVn6WVn4WVn9XFz8WVn8W1v8Wlr5WVn/SUn/VVX6Wlr6WFj5WFj6Wlr6Wlr6WVn7W1v6Wlr5Wlr5WVmh7Y9iAAAAInRSTlMAZtkzsg0/nyZZ4Xm+jV8fz00tOUwZ8QcGqMWocF9TRtiD6LITtAAAAexJREFUaN7t2Wly4yAQhuH+LKPNtlZLXmLHE+5/yBn/omYUjRsEJFH1c4G3GlSIKkgIIdYtPZR6VpOlFEa91y9kNQXQjfqlsiPv6lEzjP5nLjXLnjy7a6aU/NprI+rImmskX1SepMebZrsf06RWtNCQFHg6aLYdnopeLckeATiFn44DuVF/su7hp9Rp6u6OpWEUOVnrAfewkZClFH/5cA0jXdTFTrPdsKCc4F+jZiphWK92jgn+kYmJgZhUgYmd9RYb1dl+g403zbLFJ3rmwPjU1XqhDeUwsLHlzes8ssKcj43+r80Bhv0u55i3O2xnZTfMyxnhFgE8GOEKAVScLQ5C0Ss1gqjplQ5B5Iz/QxCJhCUsYQlLWMISlrBt+K3ZMGTew6XmKT2HM8118Rv+pbkav+FGc238hi+aK1vJxwVkG4bmsqIDRMISlrCEJbz8zpVhItJv8YqJSHeuAybi3LmuAcMN/zUg4p0rC/pxcQeOdudqsrUeIBL+OeGO8d4VRP19n3/OCKH6qie+IxlRv66cjKhrrehr1joljgHeKWJp4w5sqApeVYqYOnjVEdsj7kIb53d4834iC6qAJ4UiK8rTzO1k3jhHZ08O8gILFQMZ8dJVciJneQtHbWeyTlTdt4XdpMWjz08khBCr8xtfH9HhFMoP2wAAAABJRU5ErkJggg==",
   fv = "/assets/png/sugguesions-5dc75ee8.png",
   Rv = "/assets/png/superIcon-343ff57f.png",
   Ev = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAf78/3xDvXyCPMJ9Qz69vkHBhOX6jAAAA9UlEQVQ4y52T25KEIAxEIYQExMts///Hrin2ooNA1fSDZcipQLfiPlA4ChFlTV0iesavSDtTTkSyriEcuwD0NO0LoPBXKYOXJ8Zf67RD3mclMeamgq1ZKY0Pht4XgPacCrrVK+ghEkG81h7ZtdpwMRjIjt2K/jONBKADARx+TIjPHSgzsJ5vL3ByvgOFsyPRJTPfh+zhq/kRFMDWHkMRsITGkDshnW+3WfZhCBVk648jsLaLG1hLBypUw3Rp/llMSgJ9hHaNbiLBDKlZT7XBTxkzP2ewdpvLUv9oDDZ7AXk5CJDBHFSJj24McZlkmHG5guOD3/UNzgIMzpf1xeYAAAAASUVORK5CYII=",
   Iv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAVFBMVEUAAAD/aGj/bW37Zmb/aGj7aGj+Z2f8aGj9Z2f9aGj9aGj/aGj+aGj/aGj/Z2f+aWn/aWn/aWn/cXL9Zmb/cHD/cXL/cnL/cHP/cnL8aWn+aGj/cXK61PvGAAAAGnRSTlMA3xAwnyDvQHBggL+Qf8/vr4/fUCDvn7+PUP74jfEAAAG6SURBVEjH7ZbdcqswDISR/w0OkKbtOd2+/3vWdKaZhLUxnull9yoR87FCWEjDn+7SwcyCLJmuQfeQ/urwJDH6LDoBcCbcrMr/rA9GAMzxJOpGv3uIjRfbQNV1Q9XAihlP6oi1AmS0rPHYXDuIPrz1Ur0cAXOYmFqBWPEFRgpy6kVv64iNTiLRi2VWCdZ9TIBlHzMQfrRrIYisgkmipAE7lGEujacMx6ECc9Gm/VuS4Sys3M56RqzBTWtNxgTXrQ3MEczW6alcugf2WCjrGsxyD2YBpg82CPffCeEszG4TfB98w/xQL9sH24ciAUMfrIDTMOv3YNUN/07BZtz6YP/QV6b/kKTm8XSANI+nxlKeAuIiBakL793dFndhwtgDG5jn7lYtov7tmErW6v/b27vieNx6qmX9/pm1loxzGRvW6vNbdNMLvT/Ps/OV4OpgSjzo/m3sS3HQcdDsrV8y+7oLrtmkONwv1ACaH9jZ8rlhmlno6kKzHi80Boj1Vep40xK4w02rnrq6tDZIlQCJRdTR+lg05w3Zb+h0pm3jjI0P3m6O9iMYh0OUN+QnudT3sQhpEmTJbIIe/vSjL8GmJOpaiVUOAAAAAElFTkSuQmCC",
   Sv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAArlBMVEUAAABK461L46xE36RL4q1L465K4q1O4a9K4a1K46xK4qxK4a1K46xL4qxK4q1L4axK4q1K361M4q0T0IE53J8u2JUg2I5L4qz///8GzHal8NW79N+O7MvS9+rg+e4X0oTp/PUo15Al0odi5rdE4KY33J0l04ch1YwLznph5rYQ0H6w8tqa79CC5bpW5LEx2Zcs2JT0/vqD68Z46cHk+vHg+e+P7cvH9uWa7tBt57tTDyxnAAAAF3RSTlMAf78Qn28/H3+vj99g79/PTzDv779vT8FjD08AAAGZSURBVFjD7ZZpb4JAEIaVS8Gj2msArYoCWrxQe/7/P1aWjQTbYXcItompzxcTk3kyzLwLW7tyXlRdU4SYekNU3rwFOVqhonEDJFpFBlZPM6hofRvIaKigC3SwFgwogY4IdIBqz1CHEphVBYpYcHh/wnijCmZ2AS5R4BYJJkTBqkjwShRsJnj9bk8QcPZDjI1siFL+k2C2HCAs6Unc2Tiri0+iPSQP8cPFOFxQDn5R4AdbbxtIBZuhm7HPVXuRw5nfi5N4ssbB8e9g4WTcNUsE6RNSPCfHGDSVHOXDaX24DpkATOph4gcgdo6M7FHIBGDRjvPyOZ3fIidIDEwA/RJrnDsZU2bY8jDQBayBcGRnvKR9qWRB4CSsf3zl2mRBzHvPTTbtwEIEshFkOWCYVQXK3wliB92CVXULvRI5QLeg0q95XpbBkL8QkLueAQL8KDOkAhblzvc7twLCKXADF0Q+dls1QITHDesp+/EAAHknWXIDJ8LqGU2QzIEz9qFl1FDaXRARjJN1LuKOwstR+r26kIdHo1G7cn6+AEIy4spd9Gx2AAAAAElFTkSuQmCC",
   Dv = "/assets/png/tradeHistoryShadow-3f93353a.png",
   Gv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAA8CAYAAADc3IdaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHRSURBVHgB7dnbaVtBFIbRPVNBSkjr6SDp4HSSEmKSAhQN2CCEpHOf2YK1wNbl+Hnzf7h8/L38jhLfAyC5einxIwDeQL3+TAHwBkr7JQuBd9AWVshC4B3Uz9cpAJIrX29kIZDd18KShUB69eb9FACJldsPshDI7HZhyUIgtXr3eQqApMr9F7IQyOp+YclCIK364LspABIqj76UhUBGjxaWLARSqk++nwIgmfLsgSwEsnm2sGQhkE598WwKgETKq4eyEMjk1cKShUAqdeb5FABJlLk/kIVAFnMLSxYCacwerJCFQBKzSdjIQiCDJQtLFgIpLDpYIQuBBBYlYSMLgdGWLixZCAy3+GCFLAQGW5yEjSwERlqzsGQhMNSqgxWyEBhoVRI2shAYZe3Caln4KwAGWH2wrn4GwACrk7D5+Hf5c335FgAdbVlYcQn/LQT623SwQhYCA2xKwkYWAr1tXViyEOhu88EKWQh0tjkJG1kI9LRnYclCoKtdBytkIdDRriRsZCHQy96FJQuBbnYfrJCFQCe7k7CRhUAPRywsWQh0ccjBClkIdHBIEjayEDjbUQtLFgKnO+xghSwETnZYEjayEDjTkQtLFgKnOvRghSwETvQfUHp9FvMeuDQAAAAASUVORK5CYII=",
   Uv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAA8BAMAAAAu8pppAAAALVBMVEUAAADy9P/v8v/v7//x8v/y8//v8//x8//x8//x8v/x8//v8v/v9P/v7//x8/8bmNhjAAAADnRSTlMAn2Ag379A78+wgFAwEGHkDoIAAAC+SURBVGjezc5bFcIwFACwK6ESKqESKmESJgEpSEEKFvqAjbGDBn4nIVGQ+Il2s9XN1jBbyWytZGsG2TrM1jBbi9nKZGsLstXM1mm2qtnKZquQrRZk62u2qtlKZquQrVeQrW62bmYrma2VbM0gW91sDbN1N1sPsjWDbDWzNczWYrYy2dqeZKsF2XqbrWq2stkqZOsTZKubrWq2ktkqZGsPstXN1jBbyWytZGsG2TrM1jBbi9nKZGsG2Wpm67ys/odAd0KHcfI1AAAAAElFTkSuQmCC",
   Mv =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMpSURBVHgB7VjBbtNAEJ2xHVdFSLhfQPoFlD9oJNpz+II6Eq24tb00hEuSAwR6aXqrEhDmC0hvKAXVf9D2CwhfgDmhuHSXGdeu7Cg4m8ZtCsqTVju7s7KfxzvjtwaYYYYZMgEOTrzeWC0aUm5KxDxMB56Qcr/SPnLikwmiu+srS0TwBO4AhBCFyrsvbjQ2Ek4A+5I5NoXW34cpAC9yW4i4ibq+RkM3mk8QpWhaTFRIcVY5cHswBTTWV05xyLwG/wj+f6JvN1a/cYNbgjHO4pq9bM0bhi00zaJhnucaG6u1xCLfdypO9vtbmShFb4+6Lbbjr4HsanydzOWsaF2WUCJKJKvRzSVKR0r8HhGkklZPLNZ1B24AI4k27OU8dTW2UcrH5dbRKdsheai0ujW4BYxMJk3Xl7iXEg532pckp4GRRMPEoZX4A6aI0eVJyh539NqLnPUwJYwkGgqDHjVr3jQ/hHv25ggJ4QWGED/j80pZT9F8SjrgE5lFzTSLlEhXPrKpEIBHW6Nz0e/XJ62h5fdfO41nTwr9+78T+aD0ZeIkor1aoFL0MSA1AIlgSSlteojjVyQVVa6Ztk4gerWm641NlFE5+NyjUmTvtLsL5Vb3SuCwTQ+xSGaHWt64jHwquLTRupM36ytNVV8mooQfwvT9UhjtPL26ZUghCWFdpsi5qr7M1NO243oXCIfB4C/HmAQRKUsvW92Oii9TosHFEB4EvUBvFMn4mSjNlznRXZuSQ0IxuFlOO82SJEOpPAW10zTtoT6SeYjyIQmVyF/nPZtYhMAPwfDg/NxV9sWgFFHM5bZYLcVb7AJVDElSidovDxEpZt8vUcdRtriExT8aab6xiUpdb7Kci7fIF9hCbP+65y+8aB8N1aGcaFQVCiGhfJxQmi+OxIGPXqNDzNfS9kqE6BhCEVwEReyRVvCJCJlc7HuCCEZfsjQf49rJxATHIckYjB7OzVVVfBMRvS4iQrxlSD/UVX1jHe6yAhOCsCSp+oYSNVB71HienZzL4q9LMpnoG61p2jFkDJKJLimwAkyARERZJNO/n5JGP6lomJmapz13BjPMMMPdwB8p6pT6SS1HswAAAABJRU5ErkJggg==",
   Lv =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMtSURBVHgB7ZhPTttAFMbfjP9QJKS6J2g4QekNiFToNj0BRipRd8CGNN1gFm0EXTTsUJKq5gSEXRWoSE9QOEHTEzRdVYnIvL5xbGq7JpkUk9Aqn2TNeL6J/fN45s2LAaaaaqpUxOINb/LLOR1xHRnLwGTUFoj7xeqJG26MgO6tLS0Q4Be4AxJCZIu102ZwrkdMALtPzsqCd/ZhAmI9Y4Mxts40bYVOm0F7BJRG05KgAsVF8aDZggmotLZ0zhLaOfwj+v9Bd/PLX+UBY5I+SmfHXrRmdd0WnFt0mpFtpfyyE+nU7bpFN/35rQxKo/eOig1ZD78Gqm+H+6FhWEG/NKUESpDbwc2RoYvIvgWAFNJ2Ip01zYVb0FDQkr2YocKRdYb4uFA5OZd1Hx6KlYYDY9DQxcQ1bUGWiHC8Ve1DTkJDQf2FQz3Zd5ighocnxJYs6LXn5KqHCWkoqJ8YtOiwZk3zgz9nbw9IiLZXEeJHuF1p1dNoPqM84IiqOW6aOVpIVx7VKRBAm6ZGvdfp7Nw0hhbef6qXnj/JduYuI+tBaWeSi4jmapZC0aEHFRMysBDRpoc4e02pYtyXU4Zuvph07SRPvkWn3GyPDOr9+OBji0KRvVVtPChUGlcJjqzTQ8xTtU5HRu+PfET3ZowjzvnZWz+kqXp/BQpDHsLsdlf90c7ER4gy9mOvpAGMAw3yUgeV2nSb7R4D76YQ+xvzqnJaDnawONAg71ZAvYsxuO+Vgv0xj+UOdh3QIC910D2bFhFCzruZwRN3sDjQbv7phoonpRSevNhpmnaiR2keY/iQEpXA35Fz9rpraV2so8n8hAYtVU8tjhr0hwtgPcnzsijsBwEKUfsvqyfOddfxRt1gZ9AnOSzWfic0gzxlUNS0MgY7RhgQ+mme3E1+zl268diXBCljrgQp1Bq2ijcSqP8qnXAb7UgrnqeQ5t0UUhk0SRTo51X74gzNO0wGGeSlAjqKBOObvHf5uVA7LY/ihTUWUH/qlEf1wkoE1Rl/VHqRXjqXxleXyNcTuUfLBAFSFqWJTcrAsnADRUZUplf07WeV00cqOk0tm6cQdgFTTTXV3dAvvamHlWqT4YcAAAAASUVORK5CYII=",
   kv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFHSURBVHgBrZUxcoJAGEa/XU2TyiOQG3gEjgBFZiJNzBHsYwLB9HoCLZ00GJNebsAR9AhUppH9s2wIOkyIyO6bgYJlHsNj2WWQRP6dDcZtkIhdfxlDExb5Xp93kJQXGBbZQQRSvkNLOBic0wtEGPIO336E3nPkOz20gNcNCMDnneskevGGMCUtsDjD/D30trK7BUPSo1wmWU+8eRN5U6mi6J3kvY1JC3p5b5Wkpncb6S+q9zocbKpJdKQKArOrvbWlpfyn9+ZzMrg3Ji2wMmJT01IJpaalqSAKjEkFaCay/Y37tFx0oQmBYnkE7vi4ZGpIaSeQjdzx26o60kaayj9qhuxr6vqr9K8bLpI2XcAbSctuj822mnNSOUXEKP+iuIBurUx129d2+1/KRSyXgHJ9VK+a0YPOxsfyU/R628fhyskfcDrf2vINhBeT8jty+60AAAAASUVORK5CYII=",
   Tv = "/assets/svg/unfinish-43bc1495.svg",
   Qv = "/assets/png/uploadCamera-3c808634.png",
   Vv = "/assets/png/vault-c1107b97.png",
   Ov =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAAe1BMVEUAAAAAr4UDrIQCrIQCrYQCrYUCrIUBroUDrYQCrIQBrYUCrIQBrYUAr4AAn4ACrIQBrIYErIQBroQBrIQDrIT///+B1cFhy7Lg9fDA6uATsYtCwKLv+vgitpSg39Fx0LrQ7+iw5dlCwaOR2smR2shSxqsyu5rQ7+dSxalL3q2KAAAAFHRSTlMAH7/fn3+vb+/vX88/EBCPL89PTwJgLGsAAAKWSURBVFjDvdlpc6JAEAbguTmMR5KWAeTwiub//8JFdpMuHZTBaff9YpUlj830iNiy0fBUKyEldEmkMPpzxcKyiEwCThKT8udFAXcjnnLfVAKPo/hUEoukYrkBDBGrE/CP9itzBpMiPYqNEpiYJBozl4AhWoKFgKciFnTLiZnxu6YEJ6HtWswgILPhFRAQFDFkagjM0jUjCE7kNCkJRxN+g940vlj7xV43y1nQQNT9aHEIRt0FUEQoGKdQAhTesFA6VGChZCiWqihRhYXSocmiR1NSFCLfqxMqmd/VigMtCgs8ewoUz99Qo6ZDY2o0YWwF1Chw9gGPUtYba7MM0SJr7WZTwqOkTN/jvtvmXF2cPC8Qzbd5/3gujvZ094bFDIG2ybvjdwf7VZcDp1/vv7Ldtq97CFYDW39TVOuqsfXomu6zy1vb2t3+8rbK4nJo6dmofc/eENLZUbvuyMa/++Xlyc0tCjepLt2ovdFs6EkHbftjm+s33+Y/sVdltsUaa3BRjM17tiqy79ODDXxqj+e/L8QGIOpm31S/27LYHbPW2s2/WGuzY7PLK/wwlC6A3b92212+Hkm1PdhOdJMg6qTstnhTbCsHy7fNof2q4V6kz3W/rFE81D53qor+KmWYpkc1S+nRD8bp0dUrvk5e9cUXUaNph86pUf6q2x4W0aJpj85jUpSzPooSVT/zIkqU4+9nMlThaIsO5ew3hgpVDMPjUBQLxWgC1J0lzShQiR4uQCAa81eOOzDLUFP/rxESm89CzPf5K8Zy9APEdzSdzJ8ddeK5kw3nlmwkUTyVjCM2Gi4DlpNmCWLNPMOVr2mwTCpW4GiLiI0VkhPYVDwoMsKtOdk18UCNphPDsvrURsjellIo7fHv1h8aQLZAlBTlogAAAABJRU5ErkJggg==",
   Nv = "/assets/png/versionUpdate-e4754b94.png",
   Fv = "/assets/png/0-78e1ab02.png",
   xv = "/assets/png/vip1-cde9e3a4.png",
   Pv = "/assets/png/vip10-61bb0cf3.png",
   Hv = "/assets/png/vip2-6839e741.png",
   Yv = "/assets/png/vip3-30c8484b.png",
   Wv = "/assets/png/vip4-9dc1e9f4.png",
   Kv = "/assets/png/vip5-28139224.png",
   Xv = "/assets/png/vip6-0a2158b6.png",
   Jv = "/assets/png/vip7-48005ca9.png",
   zv = "/assets/png/vip8-23c72cf0.png",
   jv = "/assets/png/vip9-a30a9d27.png",
   Zv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAeFBMVEUAAAD/oKD/oKD/oaH/n5//n5//oKD/oaH/n5//n5//oKD/n5//oKD/n5/+i4v/n5/+iIj/n5//oaH/n5//n5//oaH/n5/5WVn9hYX6a2v7c3P////8i4v7eXn6YmL5XV3+lpb+j4/+9fX+6ur+m5v8trb7f3/6Zmaz6OagAAAAFnRSTlMA359fIBBvP++vjzC/f9/Pv49/YFBPchRNZwAAANhJREFUSMft1bkSgjAUheEEw467XoQQdvX931CLFBdDSFJYMMNfn2+YYQlkyz7/mnjaLqmyv0WwmMem+wBMUR/vWQTGzhgkYBG+RGYDdgjQtYCxEiXq5AVsCYyiySc9AGiqB20tdxgAxUDdqwBCHSjzebDTgCp3AfgCtSWQu6rnTzsgNwPn/OUC+i+orIB8ZsD5kFuBQo6EqP90W+HtCrrG7dXAAoPI1wJoixkQLH5AnShwhywOydoOgZ/urkclQyAEczHB7cEUZcRJUOUfxLwj1RYHPtly6gOS6nMolZZu1QAAAABJRU5ErkJggg==",
   qv = "/assets/png/wallets-7cd3c0b8.png",
   $v =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ/SURBVHgB7ZrPaxNREMe/s0n8hWKlJ8FDe/Es9OYpUPAkqAdFTSIU/wH/g9a/wJtHWzGNoif1XOzJnoKFnsylOUg9tQQr1MTujrOCHmR28zaYNrtvPhA2zJt9vPm+eW8euwsYhmEYhmF4CiEj9Rdc5QpuUISq3DwFxhSTXI8BYvQkgh4DXQ6wST/xttmg9Ux9uDrGgaOERflbxQQjAXVDxq1WjTZd/AMXp/pLXpTgP2DCg4+RbJgJCJ9+j9mBoRnQaPET6fQR8ghhqXmPHqe5pGZArGJug49hLNVanDr+xAy4u8wz5ZPYRgE47GP21QJ1tbbEDCidgtMaygMykctJbWoGFGn2/1Du48LKAvX+tasZUC7jCgrG4ARuanZ9CQSTX+6yIqVRnVRVgOM62Y0Tiem8Znc6CBUZEwCe470AZc1IIVZEmo8oEBJTR7PbEoDnmADwHBMAnmMCwHNMAHiOCQDPMQHgOSYAPMeeCGFUCFfl5eNtuZ7RmpmxJq+dXrv6qzC+EOOpPNLexZgYPQMY19OCIcK8DPyyq7/eCS5JH/MYI6MLEOD0WP2PCFWAsIQ+hkCRpDenpuZ7Sd9OBn+Nz9LHGv4DSTGpe0AlwG4UIhUGNhD/GE5k9f97X+bPuHREyB3NrmbAQYAuCsb3H9jT7KoAb+7QQDaxrygKETrvHtK+1pS4CVYOsI6C8G2AdlJbogDPRDGp5RvIORHQTpr9mNQyuFqnrbgD5JSQsNWqUer4nfbY+6s8J0rNIUfEEzcs+BjnIvPgOU9HAa5JzpzDBCPLdkdKXrvZIKdNfJSPpS8eArNUwnQJOIsJgCPsh4w9OdRsuwZuGIZhGIbhPb8AqxKwMiGz7UEAAAAASUVORK5CYII=",
   eh =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANvSURBVHgB7dpPSBRRHAfw7+/N7kp/MQwiL2WQnSJhJbDTgqIQdPXQJQMTylOXLDrUJSzQY3/wIHatawQpxQaVFyVFEJSwJNFLS5b/ctZ5v94juojte7M+3T/NB5Y9zJvZ+c68ee83swNEIpFICSHsgO72ppRHdEdtvo4JlWHWJcYiwGNBNnv51kD6CxxzHvhBR/Ml9TUAN9q6+gafwiGngbvbUse9eOJj2LOaw+Ka79fcHUgvwhEBl+LxlMOwWuWeREUbHNrWGb7X0XJUeFztBVyltlQlgQ5iSsEhIryElP3wxHqwgYWDCX+q81F6GXnKK7AOGhecZInqTYv09XsObg1j05hAAvP7hJ/OJ3joLt3T3pyMgS9sEXbX6N9e3khc7L7anERIoQLrsIFAjh+hNTjHq/9aIgIkw4a2DmwOq3aN8BWuEU3lWqxD3+9oOg1LVoEfXkvtN4XVVNEwrkJn4AxnoLZpakUQDXofYcEq8E8Zq4cVXlWjYK+b0Dos9dq2XpGJlE074yitj5weIBCGmqIYXEtShB6xSV+z6tJgyDfqfKyGWbfm+9xA6/NJP1ebGAx+ZL1qL+zkxcgQaFj18eGQa6pV/wpfE80cqj4FTE7kamPcqgDVoESwjFWZ2pgPoxQJlAhPBMZ9dVtLF5qg/yywhShwuYsCl7socLkzlpZhqDq4Vj2OMFY7NljyNJzeef3hLjBRKzMawQwnCOrGgW7negCQD2ddWt0d1cGtver++gwccxZYMD7ArVV1EKfhmLMurTryC/WZU117DxwgDsbVeOC0O2uOBy2MObuGd2gCiebhchcFLneFrbRYZhjkfOrJpcCVFun555l6/vwau6TglZZ6nNuAXVT4SovV3L2LClppqVo5sxPlYy5FXGntjGge3oxJLqFEBBvC+AqEMXAsVvENJSJB2XlTG2Ng6S/OokRsBL8WTG2Mgbv63y9xAOOGCk2/2aP31dTOatCq8GgERY79lbc27awCX+97tSBITKBISQ+jNmdX82BpaPTTXPPZE/vVsH0YRYQ8nrr5eMj6TQPrwNrQyMxsS/3JhKqOjqAI6F5348nguzDr5PXqYe+VxtpAiCQzHUABEPFSnEVaX2oIaVsvl/Z0nj+WXfdrVL+qEsRO/nHYkod1kuxLn2Yr4vQ5n6CRSCRSkn4D/8gmNFxpkxYAAAAASUVORK5CYII=",
   th = "/assets/png/zs-1fe6152b.png",
   sh = "/assets/png/banner-bf01ff6f.png",
   nh = "/assets/png/box-83de4bc1.png",
   ah =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKnSURBVHgBlVRLaBNRFL1vZmLzWSRqQis1H/9WpAkEXAjGbgQ3to2CYFRIQaELQZduYtPGXRcq7tzYVXSj+RRLQVCMoCAqsUJrip8kKiYmYgbMR5LO+O60CTP5mPZAwrx37z3v3vvueQTaIOT3Gliu6gVRPCoScIAItjVTnAAk6ToyfC040y6WtJAFzowywNxVqbUG8+AR0PdZQaM3SbZqpQSZxGv4lV6CEp9LEgEmm4kVhNGpszc4jfbKzkPHAX+UFDrh06t5SMQeglAp+k/4gpMtDrMBz8Tj25fF4u+f4nqBvhiDiSjLnPJ456YvbohMTvqIxmKrGiVHrnu+HDx23oZlypFPLcIyLYvPpmn/imC0DoDZ7gLzoEvhl4g9wPILwsqmHSxmpzOYvE73pRan+Owd2vw8CLWqtIffmcQb6dtoPdDw1ffaIPn2iRrEcpZhWRjZahlQkH1diEkN7wS05VNLjTVenoVOhCiQIUYUia1vv1NJ+C4G3bBMK5ADxwsYsDN0eB2qHp3CKD+9E/hsSrHW6I2AAmDaOXNqHXQDDnk7MPSek2U+p9g09FqgG/DG5ahVyvSfxBlCIM5nlOnvdZ3qxgfb7crR+UElSduXoj0kz/BW5SXg6fv+Q4o2S9Msor7pUIfZ0y7nB1H4O85ynFo+W0iqMZhoKSVp/lS0r1v6d4NjeBwsTdl9prr+vvgyOeILjkkbocC50bnpC1RGOXGjwBiUbZQKRHFKJOC5ufo4rJ8UfTEmFPD46zxs/eP+0/fzJw/vIt8WYkMsp4LN/XugE7DfH19EJWmW/xRuuX3Bq3Vb6wNLU2cYmNDqTTaU5DaqIq5n9V3E8eIzaSrN50haEEAYc/vuheXxpFMWSIw6R2mimta8kzhmOBkrteKM2x8uNMf9Az7t3nUzDqY+AAAAAElFTkSuQmCC",
   Ah = "/assets/png/commission-bee894df.png",
   oh = "/assets/png/betInfoStep-2e2a875e.png",
   ih = "/assets/png/bg-79ecb3d8.png",
   lh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABNAAAAACBAMAAABrpTzhAAAAJFBMVEUAAADCwsLCwsLCwsLCwsLCwsLBwcG/v7+/v7/CwsLCwsLCwsJYtnRdAAAAC3RSTlMA35Nw72BAIBC/MDw1kigAAADJSURBVDjLrdKhDoJgFMVxlAlqsuFGoVPodN2k0C0GmwU2H0DfwG4x+AIfiJvj5ZyFe+bu2TV44393v3S8uP9c4w036eGW0mvsO+kp5JYwC+lHwsQ64+P7RfodsqtMZkyYPTKnIU+R6QiTSN/qTIjMkzAZYSSHhc6MCJNDfkmeIxPZTKozQaHv44xM+c04MjQDesBCrpKR8cnQamRuOtPazAEZMrSOMInOuOpPQ9OZlbzPCJOToSGzIUxmMgG+r8nQSp1pCBP9PLQ3a7bYesDNCCMAAAAASUVORK5CYII=",
   ch = "/assets/png/copy_code-631dc83c.png",
   gh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAASFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////neHiwAAAAF3RSTlMAZtl/MllOLAxfRj85JhsTBs95cK+PLT1ZNjUAAACSSURBVCjPpZDbDsMgDEPxFigMCrTd5f//dFmEMqXqw7SelyS2ZGTcKaZyrEegHRoZIJswTg8kWTpNQ/CRRwVTeWkeQYwCychgbhzAI4tRRSEIFMA0Dbf48TrtjUkL7IhuEKwevk34WpfLh43XWY3O1yb6smqSzRpdlBmKJCk9QUnmI59QivsJuirBGPeX8nB/8gYoQQQ++4MtiwAAAABJRU5ErkJggg==",
   rh = "/assets/png/direct-d6ebbb67.png",
   dh = "/assets/png/group-28ea2a49.png",
   ph = "/assets/png/invitation-7d30dab1.png",
   _h = "/assets/png/invite-a6d4c5c9.png",
   uh =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANUSURBVHgB7Zq/axRBFMffm93smWAQjRaJglapFAJXaWUrJMZGMRFEUgpWFjYazhRCivwLQsBfRMQET7sDq3QBITamUtCk8QpJOHN3u/OcySWQgJnZ2dzO7R7z4Q6O3Td78+XNzrw38wAcDocjRyAkZGl2qt8Lm+fDMDrLgJ1iHgWcU0He4wweIsEwHAEiWGMAc/I3Y1jnEd/igFu+7/2K/J4f44+eb0ICjAUvlW4PEWKRIQ4eZtNuwf/9D6INPNb72VQ4MzF+PzNZRMZGVWJtIfuA9e0J2SejdnEN5YM9AKOH20D2yUR0LMEfn90dzqLYPWTfFmfuXIpjqxUsJ6eI88yK3YMBFT89uFbQ22nwo3AQOO+H7BPwMycv6oy0gqNmM9ZQyQIh0ZDORil4oXQzAMQByAly5tYNa6XgAninIWfg0AnlkqkU7ENwHHIGpyBQ3VcKJhbmYbI6AIXqPhtFWt2AE2wHrLW+9vHBMkT4U2ZBhNArMqL7iHAOLGLVw0LkbspHNSSqinBQCl8Di1gUjMuMt8Tuu1ZrXcNlsIQVwUhYER6dP/w+zYuh/QEskPo7LHY+hBAqaw05lJHt7HSMQYqkIpgRfuFAAwhYERIqsRvuiuYEV8Q+1rL80W7S8TBRRfRbigVjhGjRtixdnQYu8Oh2nOBuxwnudqwnD/sRRzYDRHRPHPjE3zfbOYLBhYMhanw6KlgwKkJKszMohMtijf4Ncq1OQKeHdB8kAhO267yHF0R62CeGafwhjVCVUVzSQKyjgmVOLJKLOaNGJD/Jw063LHU7TnC34yKtdiDm0DGSAUI6D08v0kLubwILwQiEEZARFKSEJtJC31dW9SiHdAMaDTDvkYUThcMjrbDR2AIFSg83IVr3TF9zojWxEVcR+28jkAaaSKun+qeqbq5h8enEWBbqsmLBqHr98et3ShPQ4COuQ04g8r7qbLSCa7y5CvJ1zjiyDhOCQOscreBbpbcN8bAVyDiIuBKn7jLWjHRj+uWqMMysaNm38ScvvsWxNVouyzOTRZ6xEkQpdnT6VWxnmJcPz071s+2/V6nDM7fIpTc40cp46Y3RpHqkAnGq1y8whFZpIqKsngkgHRoesXoklh2xvm9gofA9aYG4w+Fw5Ip/NrghQJQ8gjEAAAAASUVORK5CYII=",
   mh = "/assets/png/money-e49e0b22.png",
   vh = "/assets/png/promotionRule-d3de6f26.png",
   hh = "/assets/png/Subtract-c224aa1c.png",
   wh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAP1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////9Du/pqAAAAFHRSTlMAmWbesr/mzO8QQM+PgHBgIDBQf8Hd8okAAADXSURBVEjH7Y3dCsIwDEZT02jXn21uef9ndVCIRQIzxYsJPZf5cjgw+B3T7GmZutSYAx8E97RHiYUkeUNUkLwtquQNUSVviCp5S1TPn0cTfZGfdi3qj6fVq/lWd6yAdUva5huZNZa6zay1z+RYt6iOZ/Jct6VLTnXDLpn9CjB5NsoCJWa7LFxaDlY3NPJslQs0bKWUh+AF7Xa8RvjECTdBu8HBkIc85MvKayaiu4CCdiMitzYushF8247NZJHJLtOQu+QdMbAdxAywcTcRYr+8AWTspMCf8gKlSnI3e1xKpwAAAABJRU5ErkJggg==",
   bh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAkBAMAAACgSm/0AAAAMFBMVEUAAAD/3X7/3H3/23z/3X//3X7/3X3/233/23z/34D/z3D/3X7/3H3/3H3/3X3/3X7nN6EnAAAAD3RSTlMA75BAv99wcCAQEM+/YDBrip+DAAAAqUlEQVRIx+3Tuw3CUBSDYfOUKECUSBQgMQCIBWAD2CAjwAr07AArsAVlRsgKeSlSmhPnbhD5lNeNu6/7EXb+mbA8GG+TVoFbJRpSgHuZtgZcIiIljaWJa4nMVGRN5KIiVyIPFdkTOarIk8hNRU5EdiryBRb9q+lM+HI6c76cztgc0pmaQzojj3Q+MZ2YTkxn6O4e6aQO6dRwSGcDPZ06g57OH1DT2R6C0QFObwRai13FRwAAAABJRU5ErkJggg==",
   Ch = "/assets/png/logo-3c92e42a.png",
   Bh = "/assets/png/lottery-211b0bd1.png",
   yh = "/assets/png/poster-ce19704f.png",
   fh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAWlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////9ZMre9AAAAHXRSTlMAZrLvcCDfToBfM42/2RDGqXkZnzDPlkAmgwmzcwF24HkAAAF8SURBVEjH7dXZjoIwGIZhulELBYFhUWe++7/NEU1ZfkrDcjKT+J75p09sqk2jP1Cu5UXq/AitrcCrL7XbSoxddtovTLNsnklC9oJ5BSNV61aBdic42bRp0dX9NrLNOJ/Y+vm5ASC3Yv1iNgbi3kYxgJbg8M+kItXEaji9Ygt2q22//dGCz/HPpU+vfLNwf8vU+2Px9zRWC6yH+XjwrRdDLHQunB4spB/DRjSOl+7UsObKVjA6ipUAqVzFcehO0bOmGHKhObEBLHKK2VQXLISRLjArr3iX3VkYo6b4mWwLXrSSMIIzznm5wOH47DSqY/i9L3MMu0t2BpvHCcySM5g9zuDuDDY7cEYx245LHMelcDjdi8vvwULcPRi7++D/iMVeKybY7sV2gg3GslSy9AogNDPRpIa+NXxqefi5UzF9XLPRLmaxiogmly4dMZ01zo4ZK6bXXTpKZsKaaC3DXN5ZOO3Wae8sXOUW3vyzcAl5E+gs3E0zoyvv7NPJfgF/kYBMSM3EDwAAAABJRU5ErkJggg==",
   Rh = "/assets/png/promotion_bg-1a73186e.png",
   Eh = "/assets/png/promotionbg-9dcd78e9.png",
   Ih = "/assets/png/rank-1-853e0202.png",
   Sh = "/assets/png/rank-2-8073eafc.png",
   Dh = "/assets/png/rank-3-0a7da055.png",
   Gh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAS1BMVEUAAACHh4eHh4eHh4eHh4eJiYmHh4eDg4OIiIiHh4eIiIiIiIiIiIiIiIiGhoaIiIiGhoaCgoKEhISHh4eKioqIiIiJiYmJiYmIiIiKen8AAAAAGHRSTlMAZh5fP38wEL9Z759RTDnfJgYMj2+vj8+29kadAAABMklEQVQ4y82SW7aDIAxFQ3iIilZRe5n/SC9WXoLKWv3q/kLYPSkJ8Fs0kxA4Qx0cyAema+ZIPG1TMyP00Z1ISmt3xNAqhlDSkhOTLzOWVyJnBgDtLpmrIlNpLIQVldi9wReoqywWKBsQaWMqydQ5SPEy1P8qYzirOhQqW6Bpao5Jp/XjuNQcBy2gBNuQac1ZHdd3ZhE87Id+7jgyJh4er57hGxBv36KgS2/hajeazVg6uWIZsXQmIOk+gdfx0Z/lZjFnXrv8PtadSku/TAG3+9yto4vWLHnbE+lyw/3+zCXMhrgldSYz18gYy53Kb9TOnvVJavwsaUIT0KnrQ6p09Sv/tQdAZwa2axU/od0m0lnlffVZjK8sezJYdrZb4QaaBUuEe6iMb2VhUIEpzjlVCL/JP4+1KKn85bUpAAAAAElFTkSuQmCC",
   Uh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAclBMVEUAAAD/cHP/cXL/cHH/cXL/b3D/cXL/cXH/dHb/cXP/cHL/cnP/bXT/cHL/cnP/cHP/cXL/cXL/cXH/cXL/cnT/f3//cXH/cXT/cHD/cXP/cnL/cHL/cXP/cHL/cXT/b2//bW3/cXL/cHL/cHD/cnn/cXKUZmZkAAAAJXRSTlMAZu8w9SC+fw2Db1gZs19Bz6Df2XkGTDkQsq+PjHksEwfilmAmA/v5RwAAAURJREFUOMvNktl2gzAMRI3tmB1DSAJN0qSb/v8Xy/GmYqvwmnkBRveMZQn2evpofoR4NPtgo7vMqNPFduKU/dEWXNTZSnWxS+6zSCJ7JkkRgPIUXgV5fCifuKz8e0fFPgLaArxtxtYYCiBDC5eUPLs21ShhkRxVaZ20g6ct9BD0aZ1nulGXKgP6ZZ2GQCN2yCI0nZWyZO+/iYV12arb0Q+Wpbq4mgSQHMBvQSORNAtymf/AwaEH9n9saZh3N9WaUZoyQhNFCt6mZMsFRQIgiz8OFxQZs50ZMbJIGn9A8u49kZCuoO5mAO2IlohJVJ6bB8EeIvLK2BCxfhFRRj8zNvfROQ7VK/doEg7HldmFXnPFkYy74qrSDIVdiPiuOUtkKxUa3zaTpVImIjlIEWi1+Le1dcNjUPbO19gbzEQJVqSentnr6Bcl5y/FYilKMwAAAABJRU5ErkJggg==",
   Mh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAATlBMVEUAAACHh4eHh4eHh4eHh4eCgoKGhoaIiIiJiYmFhYWHh4eIiIiHh4eIiIiIiIiIiIiIiIiGhoaEhISIiIiIiIiJiYmJiYmIiIiHh4eIiIi250GbAAAAGXRSTlMAZj8fXxAo338MWU0yn++/jzkGURlvz69Gy6PIVgAAAWdJREFUOMvN0tuWgyAMBdBjAAXBoqjT+v8/OloSO96W89j9UhrikdDiC5kyBJVwT/nijRxudIWozX2n0Oe9Kfi6f7my+KvGUqVhO0ldLFz+WJX5JR0+nM6TDMWWdzwiVhymyl2rlp0BTMJMKHbw4ngwCXPHVpJ4xh3HA9TwvNqnhrRrJWh5hjne6SVErPdMENJR8q2xDrU8AyFXr3MM61MnJ8OHe+XWEkO9ZqbUS3Vj6IjK9B7SL9s0bKqXXLr5TyvznyI11TSrPBB028xsb2CeS/ERRwUxPqa31qh2Xoqooau8bHKziflrRaadtioNLj16zH64rEI1HVhYXvWA5qVS3LnVInKukdCGFwekeKEhFZrORYm14JGNvWh9oJHUllu5cCT3omDyNDRepkZ+P5Anb67O2ijuXOTfhJ7nrSrOyc8AEby15/dqyY5ksKN+jgcdcUHvgqPCNR0nUbWEGzSf22qv8HV+AfFRNE5uq4DBAAAAAElFTkSuQmCC",
   Lh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAV1BMVEX/kQ8AAAD/kQ7/kA//kQ7/kg3/kQ//kQ//kQ7/jA//kQ3/kQ3/kQ7/kQ7/jxD/kA7/jhD/mRr/kQ7/kQ//khD/jxD/kgz/ig7/kQ//kQ7/kA//kQz/kQ+Z2U7pAAAAHHRSTlNmADOMfybtoHgMOV9ZUnBLGQbcw3A+HxHPspYstSjzkQAAAMtJREFUOMvF1UkOwyAMQFFDQhqmzEMH7n/ONhINqITYUqX2r98OYwMj9zu66rKcSXSq3KtB4/TifCVCg0wspDJnIZFxTYYGGeIJzUk3Zmjhkqoj2gt7L9JaIT9ozzXkUn1MpYGTjIyogdNsoAKQ+E4NRvWbdoC2evrAqfCU45RTaFNvzThtrn4ccTo6Kq0dmRZ0OtEp3OgULkO1VX/xBDgVOF08lTiVnrIWk5Z5ig+s2ClT51LFn1thMlAmbA62XbKI5MIPEnIHfz9GT6zSFwiF4ZLeAAAAAElFTkSuQmCC",
   kh = "/assets/png/rebateRatio-c1c45a1d.png",
   Th = "/assets/png/receive-0c641f1c.png",
   Qh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUAAABmZmZkZGRmZmZ0zVwQAAAAA3RSTlMA3yDHuD3GAAAANUlEQVQoz2MYhIC1AYnDnoDE4byBxGEqQ9Y0F1mTOk01YXAQyjANQBiNsJRGWtgTUANxMAIAk88RuZxQh1MAAAAASUVORK5CYII=",
   Vh = "/assets/png/Lv0-c3baf0ba.png",
   Oh = "/assets/png/Lv1-cb6d787f.png",
   Nh = "/assets/png/Lv2-fabf9d77.png",
   Fh = "/assets/png/Lv3-d91fd9c0.png",
   xh = "/assets/png/Lv4-c0e4f354.png",
   Ph = "/assets/png/Lv5-98a2cbb8.png",
   Hh = "/assets/png/Lv6-3fc5204d.png",
   Yh = "/assets/png/Lv7-fa9f063a.png",
   Wh = "/assets/png/lv-450d4246.png",
   Kh = "/assets/png/searchIcon-61d6fcda.png",
   Xh = "/assets/png/server-3f1b4610.png",
   Jh = "/assets/png/serverbg-42e6dd38.png",
   zh = "/assets/png/subordinate-b8957477.png",
   jh = "/assets/png/team_partner-6dfc67a9.png",
   Zh = "/assets/png/team_port-0d89b600.png",
   qh =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANSSURBVHgB7ZhBTxNBFIDfzJRFTIyNcMGLnDxJRP0BthcTCaRUo0FjlHjXeDMc1CUGE28a74KJEaLRUiF6xJOelCZ64mJPctJAaoBuu2+ct5RCy+62s00tkP0uu90325333syb9x5ASEjInoZBA8w+vBaTTCYkyCGQ0FN6nGGMZWzRNpYcncxCkwmkQMociQpeeKAmf8f3zyV7YqNSxJxcdpO/e3S900B7QHJcFEvL3/qffcyDJhw0oclzYc3XmjxBY2gsveMmF5bVjijbZZH1FruiAx9unW8HTbQVIMurS5/GK32ld3aQMKd/yfYDUwjsLzDWaXdHT4MmWktIWbJHWfQnBACBx5P3Xn5yk6Uf3zzE8usX1a0hEedIMagTLQ+IiLsl6/sQDnnJEnef59REvtO9hHIwqPN/NZB6S6cSBgk/sY245EwoEjkGGujtASmDKyD9LVteNoiHQAPtTbzb0FOAQRYCwzJ+0lfmlS7nhsvfoIHmEoI0BIQx6atAhxAnnHFSNE8BFQpnICC2wDEvGYVRIfG48w3D+AoaaClQiuNPQRNU7yRHp7NuMucMKFgDzjjEHxRSQQPtTYy2YdZaz1VkwF413QSUC4lC/gJFHmT4xziyomV9QlsBSszQbotDHZ4gy6O9Gk+aM67J3GYuRJY3Dq/M9t/WT+YaSqdT5rBKLZgJjJ8snxEUqaRMI4gZr9QhJCQkZP9QM4yWOw9SxtToqCp0VX0ro6CLCq+qyM+Wri8G6wixdErXOpk9FaDyUYjChGqZxKAZKEVQGHGv1gudMYLzc8B5TrYZc16KuJ7EqfGRPi4KC02bPKEKHF60FlLjV12LJGkYOafYV2kG1cvvN9PtKnZ4YKNwLywEWibBWMaIccrNE6/NS0YHj5yRwHrVT0t1MN5We2KHB3jEmv+PkyeioliYcBNcNt9Yg/envtjIF4E6FutrseoxFQrQhq1VuzYDWqop+rYHBch/VheLM9adNoePbpdVKKCizQ1oEX5tF/KEV9ulcgm1wPpbsLN+0q22C+ve/rzaAz3QKliNfddxsLR5hbH98e7xgARfBfJruY1iB7GiAbyb+kK+CtA+KN36eGAPEirQavaZAg31Phukjm9TcuckeCEhIfuHfyTHUhOuCVNIAAAAAElFTkSuQmCC",
   $h = "/assets/png/u2-c803ae0d.png",
   ew =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAABI1BMVEUAAAD/qHr/1Yf/4KL/4KP/0n3/pXn/oHD/1oP/oHH/2pL/oXL/36H/0nz/4KX/3Jf/4KP/onT/36X/36P/n3j/0HT/1IP/z3P/oXL/1YT/1IH/vnT/pnn/w3f/p3v/0Xn/z3n/pXr/wEb/wUj/w03/1IH/y2f/z3P/w1D/yWD/xVP/wUr/x1v/xVb/3p//yF7/zGr/gkH/0Hb/ymT/l2L/xlj/2I3/0nr/znD/qlr/2ZD/iUz/ezb/25b/1Yb/zW3/jFH/mmf/lF3/hEX/gD7/2pP/nm3/j1b/3Jr/2JD/1on/1IP/oXH/kVn/h0n/fjv/36D/pnn/t27/s2P/0n3/xHH/v2H/rl//sVn/m1n/mVL/yoP/qW//oWD/pFb/vlH/ulHNLSl1AAAAInRSTlMAIBDvX0Df35+A7+/fz7+/f29QIBDv39/fz7+/r6+AgIAwZ1tgDgAAAdJJREFUOMvF0mdTnEAYwHFyxdg1anoXls7tstSEUO6A43LNK5Zomt//U7jqHoLD8NY/LLz5zTM7O8s8bUef1uZbH77WmmdrfdM0u+ONOvPcnESeF/W6G3UmivUk0b2MqBpz8oOUTLPui2rzxszi5A6d6F5v66h6z71oqut6QlbsTSpGNdofF4vlxbdVF8vF+/Yj8vllyBtSKQOFr78UzY6ADKhalpZnWSo0QmGnkaN1jAxVk8VSsqYaIX63Mu1TlxiRU4pxnKhB3j1t54NCyRI5lmWPySLf+z8nWlLorFP0FiOoiQp7XIpVyCiEX1EEBB7KHDHlFE6GvDB6QGoVEs/Pz85+r5BbiZbzcb8/ntdOuh6bk2xi9mv39KubTeNpZFI0IkjjFPYR6nn67W2gKMBIssgRlBSrXEZx8oCGTmioMhlVTFH+/7u6uvz7hyIbCGSULHKlRNmSkABsijYDx+UlVdPkQpqlSrzrBJsU7dkAu8iQIFTzIJQM5DrA3qNo37eBI7iIL4VcwQFDv0VRo+nbAXAwFgph7IDA9rcPGVprNkjtYTAChUbB0E4HnQMm72C7M/DT9DvpJ3lvn9T3B51miyl02NptzjqlZs3d/QbzFN0ANdiCUspR+gAAAAAASUVORK5CYII=",
   tw =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAvVBMVEUAAAD8c23/f3b/gXX/gHP+dm79bGb8aGT/hHf/hXn+eXD/g3j8aGT/hHf8aWX/hHj8a2f7aWP8aWT9b2n/gnb/fXL+dm77b2j8bWf/gHT7bWf/gXX+e3H9cGrzX1z/hXj+e3L9bGf/hXn7Z2PzXVv/fHL9a2j9ZWD+enD8d2/5bWf9e3L9dGz8cWv8Z2T/hXj8aGT9cWr/gXX+enD8ZmP9bWf+fHL7a2b/f3T9dm71X13+dG33Z2P5cGrzWln3pzICAAAAL3RSTlMAEB8/v58/n9+ffzC/7+9fXy/fv49Qv4Bwbx/v39/Pv6+Pf39/X08g78/Pn+/vryHtdaQAAAIOSURBVEjHpZKLdqIwEIa5VZCbxWq9teutdbtXIBQIYn3/x9pJMBsJicvZ/kc9zsz3zyQD2qdljHZD0G7q9aHNSRD/lTM0/oWvY0HrW2P0SSyReornxFI5Csco4Ig13Kx5GIxk/GuMECJfa6GzbVmXXCxxGAGisszWEpwmu/I6/KWyEAtuk3d0If8DYYzRyuyOnq4wQhhNhAUBXmA8lT4bWsLtXlZBsq4m1YIarNYNCqInTSGLls3rG5BEZipfGGq4vsVTBoKZ6hFZVrzx2MuIXtWGBQUMvjkWq6QLHV0Svilgfma+xLusyrLHW4ZHQtxxQwXaKFhOXBlqEIRqbeqqFg23j9Ru6dZpmj7fMvwEoOaXvk+JdDVvUIC/mksaz+Uw7xjxxC8SP6gND6lw5i3tMFDxA1q2rzN5nua5csQzKafL1sycSHGLGZRYOz6CSnqoQ1OL2tktTYYHyQXCPC/z0hZf4HFJNRP5OSSBTyKxEIVlkkBtPGi190kyKZPzF73zcJJGpX+/vEyd+zQB3+P5KHGECVPo/7b9MYsof5Q4vjLknaM0PBP+dPreddjvoIT88D/QvuFPJThERT5g8OHyBy8NX5YfH9/A0Z0y5nS4JTt7YXxVMYcw5rC3QftmW8TB+KywtF7aMx7FRj/HjPHxSOvpqKoCAx+bWk+5De9oveUSPvC0/vImw52u/Y/+ADPZfxdTotxJAAAAAElFTkSuQmCC",
   sw = "/assets/png/searchIcon1-2d3ce288.png",
   nw = "/assets/svg/Line-5603a544.svg",
   aw = "/assets/svg/SABA-fb0aa616.svg",
   Aw = "/assets/svg/wallet-8814bff8.svg",
   ow = "/assets/svg/anbg-2e633fe1.svg",
   iw = "/assets/svg/changlong-c0fe638a.svg",
   lw = "/assets/svg/chat-fd5f6e5e.svg",
   cw = "/assets/svg/close-d5633c35.svg",
   gw = "/assets/svg/copy-0f160247.svg",
   rw = "/assets/svg/down-87522031.svg",
   dw = "/assets/svg/errorTip-b80a8dd6.svg",
   pw = "/assets/svg/eye-af3b59e2.svg",
   _w = "/assets/svg/AG-84eca29e.svg",
   uw = "/assets/svg/BB-3b62048b.svg",
   mw = "/assets/svg/CARD365-9a1f713d.svg",
   vw = "/assets/svg/CMD-a325834d.svg",
   hw = "/assets/svg/CQ9-28cbe1a0.svg",
   ww = "/assets/svg/DG-67d92c87.svg",
   bw = "/assets/svg/EVO-d87fc8c3.svg",
   Cw = "/assets/svg/FISH-1ca23ffb.svg",
   Bw = "/assets/svg/HB-af706a77.svg",
   yw = "/assets/svg/IM-c1d01dc7.svg",
   fw = "/assets/svg/JDB-29945bf9.svg",
   Rw = "/assets/svg/JILI-09514bce.svg",
   Ew = "/assets/svg/MG-25d464a4.svg",
   Iw = "/assets/svg/PG-a80ccdec.svg",
   Sw = "/assets/svg/PP-e1337123.svg",
   Dw = "/assets/svg/SABA-fb0aa616.svg",
   Gw = "/assets/svg/SEXY-368e7b37.svg",
   Uw = "/assets/svg/SPRIBE-8cda730a.svg",
   Mw = "/assets/svg/TB-dfadfe00.svg",
   Lw = "/assets/svg/V8CARD-f2121bac.svg",
   kw = "/assets/svg/WICKETS9-54fd6260.svg",
   Tw = "/assets/svg/WM-64d293d5.svg",
   Qw = "/assets/svg/home-863da605.svg",
   Vw = "/assets/svg/main-b7c496dc.svg",
   Ow = "/assets/svg/nbg-dba06970.svg",
   Nw = "/assets/svg/play-d1d7d017.svg",
   Fw = "/assets/svg/playactive-34625475.svg",
   xw = "/assets/svg/promotion-f9fa0f41.svg",
   Pw = "/assets/svg/resultanbg-bfa48a61.svg",
   Hw = "/assets/svg/subtract-ca63ef68.svg",
   Yw = "/assets/svg/wallet-8814bff8.svg",
   Ww = "/assets/png/activity-700920a5.png",
   Kw = "/assets/png/activity_active-408a9379.png",
   Xw = "/assets/png/home-1c561b81.png",
   Jw = "/assets/png/home_active-37215634.png",
   zw = "/assets/png/main-6e0e4133.png",
   jw = "/assets/png/main_active-7431c518.png",
   Zw = "/assets/png/promotion-4225db25.png",
   qw = "/assets/png/wallet-fdbcc082.png",
   $w = "/assets/png/wallet_active-65459ed5.png",
   e2 = "/assets/png/0-7c95baba.png",
   t2 = "/assets/png/1-f3747eef.png",
   s2 = "/assets/png/10-3d5b964d.png",
   n2 = "/assets/png/2-31894145.png",
   a2 = "/assets/png/3-12e64a29.png",
   A2 = "/assets/png/4-eb19eb25.png",
   o2 = "/assets/png/5-1af98503.png",
   i2 = "/assets/png/6-b94ab4a3.png",
   l2 = "/assets/png/7-6d4127ff.png",
   c2 = "/assets/png/8-2382e831.png",
   g2 = "/assets/png/9-f2a54b4d.png",
   r2 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKnSURBVHgBlVVLTBNRFL1vSrWli1YBwRDKiBqUGCDBsDCxsDK6UFrcYI1JSTRh42fpplDaJQuVnW5khZ9EKDSSJiQaa0KiQa01QWoMtqCxFQgtST+m7TzfHVuc6cfSs3rz7r3nft55bwgUwbTNqANOY1EQoYcC6WRbfNbkJUADGUpmTMOTE8ViSQGZ45KRA+6hUqXWNbUbQNvQDGptnWhLJeMQ+rIIm4EliEc3AgKF0XxiGeGs/fKdKrX6Vkv3OWjpPgtKVTWUwspbNyx7pkBIxmznrZOjBQ4uh3lkfvwGjW39orsF+mIMFiJv0262zI1drYhMSvp87BrFUe20POMwfztx5gqPbUqxGfzM2noG2+FVNr8Y1DQfB32HAXC2UviZj98zFREy8UMKrE6jq7V09V8vcPrgug+J6AYI6ZS4h+uQ/524rm1u2/HV1vMQeP9ClcnQMEcI9NXwbTKyNZ8HM0IpoA2rzwEPT99+mq1oL0eA8A2tXbKA1Y8eKAcchRQoL45wHRxj7dyzVyMzSrOXwnY4KPvOapXnijlXqTRQDijyYuAoQCAeXZdtauv1UA544lKk/ybwYoXeaEhefqvhIpRDU4dcOj/9iyBQIcgxbb7CU039/tdCLcv+P1K06fO0mJ27UzHQc3KZCskhRZVSJdUWklbr6sRZof5QGvsbj0DnhSFR3FKsvHHDj6WFgHH48aC4gddGvHqRdVopMGYOr559wCLLMu0w350fv1kRKfpiDIu15XgUucWTl5/c/acOk+8+Ty9rH/Y1HoVSwHl/XZgFr+sBJGJb90zWR7dztsIHlpXO7uNItfYAj9I4eKwLlFnho7xQEWu+1/hYRARID5qsT53SeFKqCiRWEK5PYOpnTvgbANQs05k3w5QBQmLCZHNG8uP+ABWB3mDQ94OuAAAAAElFTkSuQmCC",
   d2 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgBlVTNThNRFD73FuxPlJZgAxqT1gSD3QAmBnfgzp2Isjb1DXgB7bTu3CC+AOxlIrJhXVdqorYbx0KBqQuF0KZTAtP/Xs+Z2jozban9kklv7z3fd+75uwy64Nu65HOP8DADtgAgZnEraBwIlgAGagPE+9CTFxvduMy+kdqUHgHj63zY5fMGZsDpm4Ahj9c4a1RLcPYrBfqJCjW9gMIQtQtbBHffxVaZw7UyOnkPRifnAEWhF7T0J8gqHwDqZenW0vNoh8Ge/DJysLMmqud58b+ooO0+cnbl2KpFTJGl8N72q4HEzKLENVLVCjklxw790w+CFKYZxWwGct/jUCocG/nzXA3ACOaVPjNyGHpOiWv6aeOmg253yeMLX5t73GF09GUbqnoBRKNm7NH67HfKWHv8wbatyzcO2uFXl8NRP+YcHItu0yHh9GeSPEIvkDP9JNP+T8XzBqYxXnGfg4Dg5etTVkE1Cf1gd0jtxRib4ag6a28PPZvpK1jGvJox7PHRT5B3M76o/1qgInXl4qfWzjXLptM7Dv1AFTejXkEHQiRQkCXs1x8LLfQVtLcOVV8AZLgAES9kkhhC+Z93f+BC0bHQfIcgVV0wtsWdvLGB+dDy6Y8dpIm7D9uhUV5pfWP+aYezPM51TdfU9kNBY9McPU0MigpyiKvIsbDFy4/N6OuDnTcDiZLYPnIUOSq1dCzPl/I2Kg053REKl56wXqB8U4ry6c9Y3eLa7eXISldBQxRnmwOPYKMG3VicKzhFrb6kWS5rR9AsYknDIX82tSxtmfms1y2awo5FGk2apr/bKrUZdUYRi3lnSdLsvD+outzGVI+K5wAAAABJRU5ErkJggg==",
   p2 = "/assets/png/bottomBg-7eaeb0ce.png",
   _2 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMhSURBVHgB7Zg9UxNBGMf/u8eoxEIKW8fwCYAv4ITaUUgnoQAqS7QHOQjWxE9gbIDuCI410S9A9AsYh5YZYyHjMNyuz4aXCXe7e3tMLklxvyK5u33fffZ5/rtATk5OzjBhyIjAn58Af7jcfRF/62X/oIMMGENGeF7ho4ScV8/MG5+jv1lkQCYrEPivitzjP3u/jTEUn6/t/kKf4cgANsY3ot/OQ6wgA7IZgEQp1hDHKjKg7wMg8ynRX1GTNBFUu2l9hZs6EfgL87gDZD5LpjSPmdNsXPZHP/jYJv5crWwIwL96bYtQzJb9/TbcGopt3ggdEZ5NurrUq/oCepxW70LKt+V3e7XePLEVEGC9M68qOA62Ft7ABc5LCTkoNowvwwGayFXuece46ny3esZi+ygWB2hJOjLSKBXcOdyuTIUXYtO2Gh5jS+T7YcNjUDGhZkpXAVDFELICmsjbdTGGZjR/bAVChJvQICWWaTWOTBtRLTd1Xpt2qx6w0pftylNDHSXuFY5lt/NxwgvZiH6Lb+LwQYt+TTZa5OBHap9EE3S+34QuJhxuLe6oCYLegxGyXfb3DmLt6rIGm5Wag9++2eDB+8o0FwjMjcegzSxmumUjG9UEmU/95druitsAyEzUTMONNtw7fueyAjRZ6/vN6HejFmpUK7+hvMZIINtz63uTuhRjJBYCHzAiUF8apjSzlOCiiVFBSqPbNQ5A2RsDa2L4tGyxxyrmQiG/YsgIKaymbFej8l4Nw0bEo28v1gGU/XpnmGZEkb2ZJCQTzwOhFA0MCSnlp6Q8yYd6cb8O71zJBGtMeDL1DIVHj+HC2Z9TnHz/lpxR/DtIypI4AGVGh9XFlk2oqc7PvHiNtNgGoaSDy7nB6UhpUqg32BX0ncrolKcOt3shpVC9czUbWjM6+XE5k4UJRxPqnN6U0aNXnjqc74UcFWpfMClPHe63Elw4zUg/IM+X6H2uSXUzNxiFalaeOlLdCw1CodqUp450F1uDUKgW5akj1QAGoFBbrndQ16S+WsxSoSYpTx3p70ZJoQpIZy/hXC0JNxfpkJOTk5OT08t/eGAvMtmjQW4AAAAASUVORK5CYII=",
   u2 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMvSURBVHgB7Zg/aBNxFMdfLlUkiwXt4NAaHYSC1BbEsdJFcLD0No0OdursrKGR6KxrN0GJXeRCuogOtdkcSowUJYukZlDQQhyMLeHuvHfJ1eTy7vd7v/xrkPsMucvvXnLv5fd938vvBxASEhIS0gMRbqCRWhrXorGCcxqHwVK2zNqcnspWOcEaMImMxZ7A4JNH4tHGvViwCthIJ1YjNtyFIWE798J7cmKlEjLSt5Y0iBhwBFhgLejJ9XeiGGEBRupmXItqmzAc6VBULdNy+mG9HBQQWMAQm1aGsKkDe2CITStD2NRkAcNuWhmipu6Q0FE2rQyqqdsKGIGmldHR1GOtV73kJy/Nw9yNFRglChtrUCnmx5s5nvPGfT1gu6/1/d8watT3a80zu228bQYs017QorD5vbQdzz26DTIuXrsD569chy/vX8PO2+egwuziCkzNzEPlYx4KuTXmp+wy5tg60jYDqC1Li+jA5Ftp2z2i5FQ5PTXtHr8W8+zPYG7+h1qHjer3Mx+siH0PGOztfob6QQ2OnYjBqbPTwAVjY+MTUPv10/0ODpgT5uYfJ58D+oOXTy2Ah8CgUtxyj2cuXAYu3ozt7X5ixWMumBN1LfBJrCczKcdjsyChGxmpyAdzwFyCrgv/Tpvm8WVsHFGMqozU5GOXTbO2LIoQFqCnnlUbXS8uQkVGfPk0HEe2MpMuaDjOpCIjrnwox6FgrchkzsSVEVc+QY5DwV4Ty5yJIyOOfESOQ8EuABE5E0dGMvnIHIdCqQAkyJlkMpLLR+44FMoFiJxJJCOxfHiOQ6FcABLkTCIZieTDdRyKrgpAKGcKkpFIPiqOQ9F1AQjlTJSMguSj6jgUPRWA+J2JkhEln24ch2IM+gA6kxY9mHXSilMy6pQPOs4fZceh6HkGEL8zlbZeueMoI28mPGn14jgU7O11DsbjxKxmAe7mucvNyZmr7vraWaIeLjktDeZ6aVo/fZkBj1Zn2nnzwpHND1dOh8n36DgUfZ0BDyOdSDm/zGrs5IT7HgtxHacPTetnIAUguXTCcDZAlpo3yS4mM+zNAhX64kIU/5wJz/vjOCEhIf8hfwGBEdaluJanbAAAAABJRU5ErkJggg==",
   m2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAATlBMVEUAAAD92Vv9213/12v/qSf/pSL/piP/piT82Vz/2l//rkP+xUX+y0v/xkX/pSP/pyb/qDP92Vr/pSL+vz7+zEz+yUj+xUP/sjD901P+vDpFktN/AAAAEXRSTlMAgXETQu/AgWJhE9CwoJFxI8SgNiYAAABwSURBVCjP1dDJCoAwDEVR2zrPfXbQ//9RbRVx0XShgnh34UACSV4vjeGYoyCxLgBkNaFDBlcfPprj6HJecLbXTmfNNpbCcyWJuGdGMfsfawtfmA0QYwttoqz0/eVyibOclav7/Kmc4tKzqFgwLpKHrdO/Ihx/cMVZAAAAAElFTkSuQmCC",
   v2 = "/assets/png/0-78e1ab02.png",
   h2 = "/assets/png/1-953c5909.png",
   w2 = "/assets/png/10-b06f6562.png",
   b2 = "/assets/png/2-c9b115fb.png",
   C2 = "/assets/png/3-fb0c8c43.png",
   B2 = "/assets/png/4-3c5b4bba.png",
   y2 = "/assets/png/5-5e49bae2.png",
   f2 = "/assets/png/6-4ee4b170.png",
   R2 = "/assets/png/7-907655eb.png",
   E2 = "/assets/png/8-fc7f2447.png",
   I2 = "/assets/png/9-5a25583e.png",
   S2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAMFBMVEUAAAD/+nj/+Hj/+nj/pSL/9XP/1VL/8G3/sC3/6mj/qif/5WL/0E3/ujf/2lj/y0iGcDo6AAAAA3RSTlMAv0Dv9zc5AAABCUlEQVQ4y2MY3EDRGCsQgsgyGeMACmBpRlzSAmBpZlzSBvSRNk0rhovCuQjpCpdWuByci5BOcXGDy0G4pEhHuLSD7azeCSRhXIS0eVowkIy54uLi+xzCxfRYzBIXEPiK3d+WLS5g4FGMVXqWCxSsxCZtvgQm7TUZi3SECxy0YpH+gpD2wZQ2d0EAr2AMaTsXJHAYQ9oWWfoyhrQJsrQrhvQUZGl3DOktyNLepEqXIEt7YkiHIEs7k+oxG2TpxxjSpkuQpIsxo+QIQtaf9Ai1RCSHYtITk7E5LClOxp5D4yFGH8WVQ+tA2eAonhw6e3swbXIoBODMoTCAyKEDXq7hLnIJFNgEivtBDQBB1ibo5lcExwAAAABJRU5ErkJggg==",
   D2 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALBSURBVHgBtVdLUttAEH09SqUIKx/BOQG+QTgBQTtwFjYnsNkHIz77mBMgFjHsTJHsMTdwbuDcQCsqC2Y63ZIdDB5bY+y8KlWp5tNvZvTmdYsQgH6yWwE2asbQZxBtA1QFuFL0UkZwQ2YMncNDnFzfhsSkMsJ30WbLgdrPRKUYGSB9su4qTm5GWJb4x1ldCZMlCGcW4BgncaeXIpT47vTLNyZuYw0gpu5O5/thKfHdef1SvlcTawQR0p2vvYPpNvOCVHe6ZlKFxtTYLxYzeemf1puGcDlnbsbyIAASUDXh1YVjPow7193xOFXvXtVE5l5eqzODIQI56iVYAv2zeiJHeezpypx9/Bgnt1l+1O8i0/CRMniwLKlC5xBo4OmqgDZz0ebEsqumLwBbPsAbYWFPfO3GoKX+YPpn+7vw7FaVuMgAyhAf3Qwc+MrTVUEkLginFuhZ8ZM7waqwnMAnSke7oinaet2+6m4n0Bji3zO7Fs//ZERAtdcd1uI31gffNayquCqzK0KjyEirIb+mEsvTVTFz5si93rxfhTxXbmT68AhXocTzHKkWRR/6eCPGc2tzutVAaDRvMoO2NWlgSeSJBv7bUsTloXGOHxYF8Rn8IkgePy5LNOzwy8C40lJFc7MGLBunY8QFk7JxsuWBgd0YIiDzaMBF5MGk4JHWZSZO0kwu+QUCoIF/nu83PKStMFKNQbmhFNeJ32uODMq3likd+3sOXYiQdhEEHsG6VN+eC4Hz/bZhChYRgW/FW7NlKhbH7iDu3KTF/ClIAu/KEbTwHyCZ6iI+uv5XQM4Ue3KMqQE1sEZoehTS5nTbjGXqAPlmQWILJL14TeolLsh7bf0euRjejsyRFHdTxzuNkl+YvSoi0zTgRvG/FEioJ2Yfu1rUzRtECER+hRy2I2O2xjl8krm09B2xWq8Rpds/w0WEE/wFgOI0pt3EGGcAAAAASUVORK5CYII=",
   G2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAUVBMVEUAAAD/+nj/+nj/93j//3D/+nj/+Xf/93j/+nj/+3j/+nj/+nf/+3j/+nf/+nf/+Xj/+nj/pSL/rir/8G3/uDX/0E3/6mf/2lj/xUL/42D/1FIjXGXTAAAAEHRSTlMAv98gEM9wQJ+QgFBA769g/c3AKQAAAaRJREFUSMedl+tygyAQhbmJVhM9Kl7S93/QZqbpAAK72O//N2ezWWAVecxgu0bhjZJj/zCiGtNLXJBWV6kPb8b+o0YtogZS1RIkHVG8fYJBTaU+faGCr7zboIomU7pWqERpwuVtc5Eb3KCJbaJXbNcm3MQSP5jl6ZvW4Tbyzx3wD9qPHBd9uDmLO3LRD4Rsc5HvTLREwDqXWdYkWiPknAlOhJi3bNlgzwsB/bVqR8vuUreJOk2IabSJe70QXho9iD4KZjmiAR+jYJYFnk7IaD54tuBYC0UEM9FKXP5jntUbAp46GXnZ1bhnQV5rur2GsiJsxlWiAWFzh7JDyL6Q7o6QUVhEvNhj4en97cfP95HcgQYXNn4w/VUiK+0td3X3qLK37JNjkHASg+XR4dVLDaorPTgtWNuV3xuJlKU0WH42RTF6XWgXg/ggszbpdv5xfyJlX7xLbkQWZXtHholdaHY3z27n10Bzb5USMUaBhF8B693EbqrXvxx1K7MReSa29KcVRXRHu1ILikERais4WkmoPNrKxOzvfNS1/Sh/Pwebzg4F8wdww7OgeqAIWQAAAABJRU5ErkJggg==",
   U2 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALBSURBVHgBtVfLbtpAFB0PD1WCBf0D8gXhIaTs6mV3ZdtVHCFQd9BlV3GWXdVZICEeivmCkF26KnwAyP0D5w+cLeLRc+kQ8ZjBAzhHshj7Ps5cc++da4NpwLKsTDwez8VisS/L5dLElTUMI0MyrAP8eJxzD+tRu90e6Pg0wgiTyWQdDhtrIg34uNzpdNp3XddXKcVUgmq1WkeEAxB+xvWB6YM2aMK2XCgUXieTiadNXKvVfoHMPpJwbwOwLxeLxcx4PP4dSoxIH2DwjUWHK0SeReRPSmIRaZSkK8Bnbjfyt+RCpBYUHmSGlLmQBUwD0M0cSMTvyHrnjRjZm0X2/sEyK1G+g7LNjgDeHOnfSkQBsv0C2R5wugPptYwUux8eS0ogG0Q9lIioPBu04OKBJXOAkrhhJ2I+n98pRHXqD7xSqZSZJFrs2G21Wj47Ed1ud4ifvkS06oLodNyUGYJYtWNtwLctWuqu7zIRX0oEZ0W7hvAhi/oTXywWud2n2OULiwiyMsSzLFfU3DUlADsTVKbkSyLKcIXNqq7PIRcn2yOT9wbGZX++QC6RSDyyEyFscwpxQK/aVxlDZtKhwY6EOGhMlRzBehTx6JATOLDo8GCagO4t2YSo/SVinVGlQQ7DlISOHaaHShry2WzmHfifN2EfItclBfxerzfgdFLg1dwzPRD5XnnQmKRJSlg1lFU54ahyNKMmuCAvr29oI9i4o2nro1O6tDA2HNBxpZ1EAA2CATZs6RpA96bT6bhbxAS8MgfO6uwdANJ7kDbW91szFway53w+f0EzEosQyOI+jsmtWW5vygT5AFPhR5BfsQhAke6SSokF+TPIX0TkJ/VrMSD+wOu1ZXLllwR9AZRKpSc4eGX/G73WBgThz1Qq9bXZbA5VegbTBI1IGFlMLC/pDN/8aKN+j2uEOWuQTqc9x3FCS/MffuQrTSZn6+EAAAAASUVORK5CYII=",
   M2 = "/assets/png/welfare1-eee87ee1.png",
   L2 = "/assets/png/welfare2-cf757d28.png",
   k2 = "/assets/png/welfare3-bfb05d5e.png",
   T2 = "/assets/png/welfare4-5642a4c8.png",
   Q2 = "/assets/png/welfare5-8b250748.png",
   V2 = "/assets/png/succeed-c582cb6c.png",
   O2 = "/assets/png/HaveReached-bd0aadbf.png",
   N2 = "/assets/png/bg1-7ff97a99.png",
   F2 = "/assets/png/bg10-76abb4b7.png",
   x2 = "/assets/png/bg2-ee7fbf5e.png",
   P2 = "/assets/png/bg3-96f1cdae.png",
   H2 = "/assets/png/bg4-c3caf0f8.png",
   Y2 = "/assets/png/bg5-e2132369.png",
   W2 = "/assets/png/bg6-8b5d1b4f.png",
   K2 = "/assets/png/bg7-535312da.png",
   X2 = "/assets/png/bg8-8bdc102c.png",
   J2 = "/assets/png/bg9-74d6723d.png",
   z2 = "/assets/png/1-d951dc6d.png",
   j2 = "/assets/png/2-5df32e87.png",
   Z2 = "/assets/png/1-1fca7935.png",
   q2 = "/assets/png/10-0eaf39a0.png",
   $2 = "/assets/png/2-fcf77958.png",
   e0 = "/assets/png/3-9cf04b7e.png",
   t0 = "/assets/png/4-a4cfd018.png",
   s0 = "/assets/png/5-89e9b349.png",
   n0 = "/assets/png/6-05959c7c.png",
   a0 = "/assets/png/7-a50aebe0.png",
   A0 = "/assets/png/8-8cbed392.png",
   o0 = "/assets/png/9-63365227.png",
   i0 = "/assets/png/ununlocked-b5a4c7d0.png",
   l0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAXVBMVEUAAAD/n5//n5//nZ3/n5//n5//n5//n5//n5//n5//n5//np7/nZ3/n5//n5/+i4v/n5/+iIj/n5/5WVn9hYX7a2v7c3P////9jIz6Y2P+lJT7enr+9fX+6ur8t7d2ADHTAAAAEnRSTlMA359gIBCQcEDvr4Awv1Dfz79yPRDGAAAAzklEQVRIx+3Vyw6DIBRFUUEQ320vKiDa///MduDgGkQgTdM0cY/PCokRza7i43lBvTWts+8rOI2y/V5AKMLxnlUQrMCggIjwEV0MyBEgfwO0nVAPKtgpsHLfAEBaP5iNdAEQDNy9C6D0gUkeg9wDtEwB+AATCbadXtQzDmybVSk1pIDlDXQKAKVWGQXGbWSt+dJjBZMKZpn2amCBQcW9AObxAIjTC6TtiLt1dfnzO/0h6FM/lQyBEsLVGa6BUIRlSYI4/yBG78RbLXh2ldQLm4VemLc0iw8AAAAASUVORK5CYII=",
   c0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAb1BMVEUAAAD/+Hj/93j/pSL/+nj/+nj/7WH/+nj/93j/qSb/+Hn/oiD/+nf/+nn/pSH/+nj/pCL/+Xb/pCL/+3n/piL/oyL/pSP/oyD/+nj/pSL/ujf/8G3/ry3/21n/xUL/qif/5GL/zkv/tTL/6mf/1VIvds/fAAAAGHRSTlMAYCCfgL8Q30DfcCDvz7+gcFDvr6+AYEC38K91AAAA80lEQVRIx+3Waw+CIBSAYSTFysrsehC85v//jc0PzqkEwllbF9/PPIMdN4Qs/VdesANT+5iqKN3DvHyFDQGcdW/NrUfWA4uCEQ4A3LcGq7YDS+2w//O4bPJ02OZwuUVzcJlyZZvIjDuq0MyAheSvOxpwzTWt9Lji7lhIBM44AveTrrLcFhfdsqw9hiXuVtXQJjE4dTy2aEfvOjCZiVJa4grzqQQGQ47BIDH4UWjwVYtbrdk7MmEQuf4u6LGaN+n08KfD/dPv7bdihsEkxPzcfRsbkmFsZ/UwcH/RBGTSdq49MzKNxrO29Yg6tk48fQklS1/aExswyYNgMRgZAAAAAElFTkSuQmCC",
   g0 = "/assets/png/1-85109ac7.png",
   r0 = "/assets/png/2-01462784.png",
   d0 = "/assets/png/3-f43be834.png",
   p0 = "/assets/png/4-fd584731.png",
   _0 = "/assets/png/5-308e318f.png",
   u0 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALBSURBVHgB7ZnPaxNBFMffTIxJG21SraKCuCIGAvVHFA8Fwao3TwnYgqfq0ZP14FE60X9ATx4bvAhVSQSvhRaKFxErFWIrgU3UaEMbkqppbN0ZsysJSZrs5sfsZgP7uexM5i2878x7M5m3ABYWFhbdBDUaeD9NPE4XBGw2fKbY9YABSJQlJMaiw+Nksdl36gpYfkECgPA0GOR4LUWnwtIWDfluELEJ22pWIg/vMMoeQfcR8xvU779FsmpGuLITe0aEovMEzIHgGsBTWkZVApAdTUKXwqYeDGBSzkU1G1zdURLWVDhdOKA2XiWAISZAj4Ghx+l5AbvAALa3/0Lu529Yy+QgXyi09O6hA4MTKy8fXJIA5mGLztWeDboKkB2PJ1MQT6SUdjsMDXpGi7uRHCo3YTcWP86QYOVJrZuA/OYfWHi7VHy2NuMaCHYbjhSfx0s/6JIDOjlfQog9J6Olji4CPsUTejn/H4aFUpO7ADlRk9/SYBTcBSRTq5o2jn4X8IJ7Eq9lNhqOnTw7Atcm7ikC3s1GYXbmCXQK9xVQi/0r47fLs3/+agCOek9Dpxh6Ejv79qj224G7ALu9cVQuvH5abufWV+HzhzfQKdxzwL3XpexE9ZDj/svyktLOZX4AD7gLOHHsSEMBMumvceAJ9xA6fHA/uAf4bZNa6JLE54a9qrnQMYiKpaYuAuQ8uHjhlF4isoVfUP43qts2Kou4POKHoX1u4AmjEKosteh6H+jvcygrISf19/S6cqlpFYfDLiKGRIYgS6n02DdG5irHDbmRyavQ7kpQCULe6/fDjcatS323Mb0AhmnztVHG2CswGcgGqqX2WgFRMBMMRX1B9RJ7lQB5i6KUhcAciNQm3dUy2pEDvrEpYgIRIsI0qDX7Mg0/McUiRAAJEaVijZhBJXe0yIDNb2Ia9gfVP2xYWFhYmIN/GN3vYtDU7mIAAAAASUVORK5CYII=",
   m0 = "/assets/png/weal4-ed65cd71.png",
   v0 = "/assets/png/weal5-051a3201.png",
   h0 = "/assets/png/welfareBG-4c0e64a0.png",
   w0 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL4SURBVHgB5VdLUlNBFD398jGgVSQDRlhFM9Yq4gqEFYgrEFYAjkRnTCxKB+AKiCsgrsBMdRQGOqUdwIRB3kAQeaSvt2/n837hUyTFwFP1Xqdff87tvqfv7QD3BHWTTvRnU6MIDeJHPvTKQQcbIghCns2AuqEqf2xfN2cuMUWbS/x+AVJ1LvlRVdwKFPKYNhSxAeqLKm23riSmizfr/GmDf+pEr9NTIIqAsNOrnyVnKZeA6YdAictazZdJGH62VHm7kSGmi809Llal4kjMIXB0xGShr98GjrjKmzQ3x89jNmq639Jg8rUBMftwFQXsCcH3b8DxMcYKrYEnT70BZF+qBx+agTQo633oVjhuUgdj/M4Jgrp7F+U3BU1+74hls7PAzx/eiNtucRpuyxcWgHntt97BouGKuI8pM/DkxAvqjMXU6XhD+kKLwwnLoTrDQit7kmrNLyIF9rEarngU3MCcweNAgHtCjJhCTBxDjiFx6e/CxMmFI0Ws1G4IIne4DcYOWdCacKSJOVx2QAWN0vkzdOEMaOFOELIWrH3d280ZPjmH/daYqjkRBLSDqLLOUazFB22Lg/sy/X5XR+lSy8FXmOfEUeXgn04axnPhF59Tg27QVo/etyXZFILniB4cphPN1efYo8UucNnmQNJeoEJfjy8uli6dcXBZzeq8rJY9x4TPPOhVDvESC8CVK1Kzo+xLLAO5GZeomekq370PNCYDw6vNqlr80cWyrHyscG6hT060dPl2JUPMhF9ZVPyoJneqibLFCLr2GpND5sY0ZA6naMVzRpV9dtN+v0c6VmtptBUjyg54gO3uujuU3LuGbtCJUQHfuaIij7Ghmto20rfA2ijSIit6h3tkRTawcbSq+zAYBheTaCE+XkoUrHGNRm6WnZLQGDWputFlNYF4dmph8jBZYh8mDSaHlpyaHjJ71Lv4uUCyhDujd7/ucvidSt6tRzqHaKOK8wrHZ1vnfwmLGPjYxWmVH6v7ArT2gO9xbVTO2/GM9H/jH1CXJqQGtaM+AAAAAElFTkSuQmCC",
   b0 = "/assets/png/AG-4e3ef3a2.png",
   C0 = "/assets/png/AG-4e3ef3a2.png",
   B0 = "/assets/svg/ArPayBackground-8c36eecc.svg",
   y0 = "/assets/svg/Ar_Gift-f96ba611.svg",
   f0 = "/assets/png/BetSoft-1ada89f3.png",
   R0 = "/assets/png/CMD-df6e06ac.png",
   E0 = "/assets/png/CQ9-a679c82e.png",
   I0 = "/assets/png/Card365-14ee9d36.png",
   S0 = "/assets/png/DG-43b70b54.png",
   D0 = "/assets/png/EVOPlay-4b83bbe2.png",
   G0 = "/assets/png/EVOPlay-4b83bbe2.png",
   U0 = "/assets/png/EVOPlay-4b83bbe2.png",
   M0 = "/assets/png/HB-d5e5192c.png",
   L0 = "/assets/png/IM-51c9ea33.png",
   k0 = "/assets/png/JDB-8735518a.png",
   T0 = "/assets/png/JILI-c52436c6.png",
   Q0 = "/assets/png/Lottery-3e32dad3.png",
   V0 = "/assets/png/MG-ac952b9a.png",
   O0 = "/assets/png/PG-b671cf40.png",
   N0 = "/assets/png/PP-797b732c.png",
   F0 = "/assets/png/SEXY_Video-52b1e739.png",
   x0 = "/assets/png/SaBa-bc2e31c6.png",
   P0 = "/assets/png/TB-b6321468.png",
   H0 = "/assets/png/TB-b6321468.png",
   Y0 = "/assets/png/V8Card-e97485c2.png",
   W0 = "/assets/png/WM_Video-6de833fe.png",
   K0 = "/assets/png/Wickets9-3ce2811c.png",
   X0 = "/assets/png/YGG-dbeb9403.png",
   J0 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAoCAYAAAB5ADPdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN4SURBVHgB5Vg/aBNhFP+9r0clhSy2LtKiUzah2qkuDnURWpwsFUVCNx1c3KRjcStuLQ5KK4hSJ2nRRee4BARdmkXF0C5GC5GWhvQ+f+9ySc7rXZMYLy344HJfvj93v/zee7/v5ROEbPa5PV0BzvZZnHEt0kjARLBngR9isOGksPXkqpT/GK83rry2J05t44K1OIcemhWUjUH+6YwUEASlgAa3MSkWgzgiM0B+5Ybk/TagDB0lIDUXGJth6GjbzL6y6V67LM4ci0t6N5UdjOGYGL2VVrYMjthtYXOY+U5cLFmDYY6NonvL8YeX2p5dRb8T1U99GhAXd5iuXbNIPRplNs13ssZEdhqkIP/GrWR7AB1aJFNKN1V3jVl5nt9S6AaUwZrme/egasDWqazr6NY6BKRmcAzt/wZFL04xebLtzI2NKabyNB8ygVZWS4qFVlpkBBk+M8M4XUYLi2ZK5aAdQP5c1aIWcwYi2zEWLZ4udvnrS+1qFVnYoHxEgVF2ptjK1Lv4/SGvHNesxbHrxLxkhw9c4ItGpJVOEbx1UTz4EIxy/e3IJYJxjmXi3H6YTpUIqPWeZWO6XS8m63OKbL4l0BT7L/vhoW7Psn+hfVDdmHjuariejCx6jLheu0gw9/whde8QgX0PLk9GEsKVR9BFFoXgEEGeDC9PhimEYkyZC4AhM/cDo7vhxUmJ57cgOwzqLN803hjVsea1gx6B0icvQvwXalATGOPnAcMq20pqEgPFIrHIWmreWHxodmJQ5YD3OXuIOCcVUzWje8jOEkFoaT3B9kWvu1b4TROYFoHvwst6siErawS44gW4bSYBWZtERGWaDCh9mX+x8hxu9CtztimWypj09UgS6CbNtCH/xbsSkAjdwoKbgO0VUwRRCCCcCGZbOMBFDkpCUoGegx/UvhzM8V7042c4MK8QtZkntc0UyMByQKcUTEazMDCnFFfwOfRxOZHDMRc5Ait4UiAY0arTU2/xAG9wxvsoNe8zKPOgA1/YTubUpaZTq155I3ikLiTIpbhyR23PYMtUBF9xTIwe+/Xiumwa/agKPiJhU+Fs9aeh4noJUgv0qoO8lQ5ORv7G6lVBjO3zePHlLfms7cZB7LVV2+9UMeb0/lSvQrfln92UhrckPGP2sU1X+nm618cdPbkDtYr+4di32PxZwqc3d2UvOPgbHBMxCRnQAaEAAAAASUVORK5CYII=",
   z0 = "/assets/png/ar2-3eb83486.png",
   j0 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA+CAYAAABk4ziNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM6SURBVHgB7ZqBbRoxFIbfIyA1haqMwAaFCUI2CBtAM0DCBNAJSAYg10yQMkHpBGEENihSSVWJwOtvQ9QI7sD2GWqR+6RIl+PO5//8/Pz7bJZ+qUtHBMtdUeiIyNGRkQkKnUxQ6ORJ+MvG2ZyckVA99g6mIS34Bx0Ch3rk+XLaXT+pxyaWemxBKCTunn3gUo+sD4VOJih0MkGhkydbWDpw6B06CPYTgSzkQuetCJIJBU98HWMF8eXTTaxpDQXUTdcxBt56X1Sqk0iEwwqFwYSYG9yaDpMu2CpIIdG7CtHJAzJolf4nzEOMMi1uTcZbLyNDVlb+QOPPOnzLn6fXRleSBRIVm2ipHg7LdBgQYjm0yq9vpjdYCVLoEJST77T/fjUiLjR2hdg61oJekLsSsoxc0V7gW+J8F2Kshw9nQQrpF69RgupXvkJwgpBOTMkmpBKk8BiCY9QGIfY0ohSktj7c+oOKFGo4vCd37lUZacXo+pBHnFK7UDtNiK3j15zm5j/Jlpx8JI94aSGJykgKsx7edpNcYPpKVGi7ZLXNolKCwbYKIQ/kJSkUzm3HnXVShZxEp1cQ42uQRbacPUr/1MjiJOHUQqsQ60CM2cO1sZSyscFlukHGa5MDrtZHhZih+/5nLC2zoFMIWoWcRB8uIOaRzMQoY9l47ZL1x3Wmlv5tN6sQhCG2wHz6EBV7xiG2w1hauwsW+LrfRjNo0wlelLhOs1mksbG0MriMl0S73bfJFFz1FxPz6WQsLQ0u+hW3nKbgEr1HFuMumZHKWPoMwdikoN+auZjUxtLa4KJuuo4xJHzb5rLRd2WPxnLV55pI7WOz1M6xIerqFFSI1Xy65BdWqb2mn+GAi6CRr7lLErpsnp/rlW5L7AUJD3y44l3ofuWwfSBbfQidTFDo2K+xGqJnsgv4vxx9wr91PayxjNDRBzg32leW9CJoOeF7hgCpLjccsRJQ1sbq9fgsXMG5C3UOC88TbTgXBIE82ubPbHAStBQwr+PoDH/4pjBT86OVAOMZSVk7eFatJ0rgcocVsWq5AaoGsc9kC8fuCt62rWs5OTvc6kPSsxK2l2W7gkMnExQ6maDQyQe9wcKBv2xTXAIYQ6N0AAAAAElFTkSuQmCC",
   Z0 = "/assets/png/ar_success-c7e602bd.png",
   q0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAANlBMVEUAAABlZWVnZ2dlZWVmZmZgYGBlZWVkZGRgYGBmZmZoaGhmZmZmZmZlZWVkZGRmZmZwcHBmZmYn3H9lAAAAEXRSTlMAYJ/v3xC/QCCAIK+QcFDPEFwncHAAAADVSURBVFjD7dY7EsMgDEVRia//ydv/ZhOlyYxHChq7SaHTAhdsGiio6sEjvZJpanDIs7k+w+dhHKLASz8Dy1BLA6tsk9UjbAASDVX50E6KBIBJoc2LwGnesSVRft0iT2ZgKvDIux6Q9U67HljhlasWmGQo8cie5QhaoMufo7FZ9tEC/BkY4whEIAIRiMB/BhqAfinQWCS8LZcCXyvdC5TlVkDWXwuUJLaDxNVbEBE46crb23ocbubbu6xpoMF8hc7wKqSqD/jkhQxzhkNbyPTsPHI8KWheb7c1z9Bcc9kAAAAASUVORK5CYII=",
   $0 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN5SURBVHgB7VhNThsxFH7PpoDCJr3B9AQNJ2i4QEkWlYAugBPAvqo6KGLdcILCBlXqYpITEE5QegLmBmXTBAG2+57nL5nJZGZCE3XBJyEbx37v87P9fgbgBbOBUBGe26qDqLWkgHfGQINEOACmHoq7o76PCDdKwzXoYa/t9u4qiC9PyHN3HCHwCFAcJARKKEA4V0/6pO1+90vNL5rAFpFi44tBcxyNGTADsk4fJA7gcehHVrDWk+sNMNiQKLZpXjNWZLCr9J+TIovhbDJkFSmuqOvw/xrMGSjTLbtbXk+kXQG4Hw75WumtWetzCXmnew2hwQvIGF8LbLc/Xd7AHAg2hlfBfSNS4pFk/ZgqS+QKCMmQVS60Gm3OIsNHZa2RA7aIVmubtPseyxT6lZc3H6cJF7L2kxeygPefL9swA+Gx3nJfq+HrojvidXbPwyMkksPN9PyMhfgCQ3hMSg0PoRhOspgudBHU2jHL5nWhLsglxLuNXpNWZquqDymDtnt+x/eR+6wrfXQThHBFWMbsO8q+pLlI0X3UAGeBUjyeSshzD+po4ID77Mhg0VC6awkI3Lf+K00IxEOLG3Z6i7ROBNaBQI4VwIaiDCGk2GQJsQdeEpTRVpcMdU8SIncfduZyfnNBPg24CYJ0ihANO7ZR98sj9Ljhhz0HsoTAXqxFPPU8sAsY150m9F9gnFCSQiwJ7GrGdacIoR+0rxxYGu6jy+xHIzEhrfWvYGSlCZWwnjwClQguBRG8bE55M4RodMCNRNiGCrCxSek3QaSv5lA5q+RWaX0d04g6fJ5CPnAaUWcFi/bWeWlLbCG7Uw0XlrmQR6UFd3Zb/c7H3/3O3q3X2WmWXTcZyHvTLjXBBAHPpgWnH4pzGyuABdsqxKH+tzJr2Dp5gXyCkE01w7QgSDOLXQCOPVkTJF4FZDgjtYWDLRrSVyPrGNWqG2d0K7WvUACl1CGnuvxnlCnMMKWssRUdq0ON3PTvOH0XSZWAYHpKjQ6fG1JsfUcbNPaoqIqxGWn24RSUQcaLS5eCemommQolVYlCMa6nKpfFvJ5fbFL15lumFKFAKMUb+UDVJxwli8xAGdEnB0K7vL+ZKKU59IjVpkRNpTQ2ozVB1Ttyn1VKTxLLlMVlQL7NXFAG1v1nHxuyxPhzzHqLzq9JOfFbDJKrOGobum/iGZ9jXlCEvxOwxFb1OU9PAAAAAElFTkSuQmCC",
   eb = "/assets/png/C2Chelp-f5be328c.png",
   tb = "/assets/png/hicon14-c2c6ca62.png",
   sb = "/assets/png/appeal-6e70b57c.png",
   nb = "/assets/png/1_a-c3c7a041.png",
   ab =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJpSURBVHgB7ZmxctNAEIb/PTkzlH4DxAMwJE9gDz0kKhjAVXgCkpqxI+OhD0+AKXDCUNiBHlLSoYIe8QS4CzPBt6wwmZFOkiObEF0y9zX2rVaaXd2t7tcKcDgcjjqhqo7j8JGPS+PnNAgn0yqepQlIwG2laBNEWzL0UQ8REaLZr9OXQfguKnIoTODDoLOngRAWoSSee91R37TnEhg/72wrwitYiGbeDXoH+2mbMp0k+D1YiiLKxZZJIFn3qG+9V6E5Dh+spw3ZGVDKh+2otQUJsNV3f44Ro8IVx0iAfViO5+FmenzdZoAqbd91Mpvhe3psFLGWTYJjWIvExnqYtuR34kS0KdE/TE3YBPEU+mRYVeQ5HBXJ1cBcStOOFIxdNSBPSGIM7/fe7Gas6YHNUvoMzXgS9EbDs7GphdZhOZ5CKz02pYRly+Z8rpuUuHq4BOqmsYTvlEC53gyD29kxInWOqmVoX57gPi6AiglwrGcnG0VCKhF/ylNf5G9TK2wEz0ZRlSuOB519mf6n+EfM94G4yElrel2mAoPwMP47M3HV4P8w0xOswOL3gRI8xa2yY8kM8PxVtLlM/7ThqRYugOwSIsRFTgxqHw0636RPeZw7xknvdL4BylL69H7wOJJ+6mLNzuxL67KNVTBizCbgnUbQa2Wn+szYzps56wPys6biKFaGdLzwSnKnf8iPpZKC483uwa20JVcDmrgPS5Hmbi42zzS8/fj188O7t2W5r7hG/xNSM32zM51Q/oHjhTRRdWNHHpF3xKkWmS2lFLPmIyieBN3D4yKfJT4xbUld3Li02kj2FzgcDof1/Aa0K8HJ/n2hTAAAAABJRU5ErkJggg==",
   Ab = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAPFBMVEUAAAD/cHL/cHL/cXL/cHD/cXL/cHD/cXP/cnL/cXH/cXP/cHL/cHD/cHD/cHH/cHL/cHH/cXH/cXH/cXKK0DjkAAAAE3RSTlMAYIDvIN8Qv5+Qz69AMKCfcL9fnO5FFAAAAO5JREFUWMPt191uwyAMBWA75idAm6Y77/+uq1pNLmNaqctVxHcdHTkkgROapiMJnIr36CL5mthRyxW8bW2CzgIDOf+aRWAi9TwrjK7VMDALpBhme3VPZhdSEWaZlIeZJyUwE1L4wNFjBi3xMub1CwVGMdCzE5ucaPrH+CV2EUY5jNn91rnfzJiDxiR+2HDjd362dcewfvK3lEC11BkjVT1YmprZcU619SA1PRMt+auYfNGP/d4Pa+uLYpJ1+1geyv2SpRJfdchtzKm5w4xJBZg5GtEhL4PK/shfD+UMTys6ajlOMXcO5X1JHGiaDuQbHyixF2zKTCYAAAAASUVORK5CYII=",
   ob = "/assets/png/bank_card_active-d8f133c8.png",
   ib = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAAqCAYAAAB1PO9pAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJCSURBVHgB7ZuNTcMwEIVfEAMwQtgANkg3gA3KBIyAmACYgG4AGzRMQDdImIBucNzJbktb94eSxlf7PumpVSw3zjvbl9gpYBiGYRiGYSRDgQ4hogv+GLKmrLooihbGwaj3kxtYsh5Y37SgYb1KGYw/od5PbkTFGtNupMEVjK2o9lOmH9Zwzwau0khdGHPU++kb+EDL08+hNKx7yjgNqPeT3PTz1FEDQ7xSRh1AvZ+0f77pijElnAbU+0ku3zQUj4Z1g0Q4GT+p3165iTEiwOe9oY7TDin18zzQ1hfWB0sWD+7RLyPWF+sdPUNuVLyxWv4+6HCxRKWfW1fuyOWIEv3QstkjRILcKtkn3PW2rEHXK2Wa/NxryZYbfAXXY2dM+Eenvqxa+sGiqEN1Zse31YkNuWlepkX5bHGE4PvznIaftH5zUvnj5Woy2aNOtamOBvw1zdre0BEeNTX4eQZjCT/CB3AjvmSNKcF1Bgt8gByCf46EkOkQx7l5KuFy/yUSwUZ8piQ14nmK7mxEUuAOHwlhIz4A9fRYFxML/Ao5BF2wwP8il6ALFnhPTkEXLPALZEm0RAZBFyzwHg607GDdsq5zeC08qce5/+KDnwUbd+d8zpP9adkRKleKp14IlLUbju+qI2V3bP4ECXIyfpJ7ZahvhkgUbX5uG/HSM6/QL/N96dTQ5uda4Gnxf60LxOM5lQ6g1c/QzV3FekJcWrj3xVKggkI/Q49zMXtmiqj0MzTia9Yj4lIjHWqYn4ZhGIZhGMYx+QGEH+uzsJU/5gAAAABJRU5ErkJggg==",
   lb = "/assets/png/cancel-0e9b3ff4.png",
   cb =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAAAP1BMVEUAAAD/cnL/cnL/cnL/cXL/cHD/cXL/cXP/cHD/cID/cXL/cXP/dHT/cHj/cHL/cHT/cXP/cnL/cXP/cnL/cXK78Ng9AAAAFHRSTlMAYICf3yDvUBAQMJBAIHBAv3DPsA52an0AAAKfSURBVHja7ZzbcuMgDEBlkAHfXVf//607JEuy3Qbc1FTWNDpvNZ7pwQgsRBJQFEV5dVrf/DhjD1+gM45YQDPBDo0jNrCBIoZYMVDgjSJutT/O6ijyBlkmF1VMAAaCufQ7Hzc2NvfARB+7PkCO2DoDG3Pse5dpXGKEAxOp82PB1AIjthDCJk02FtI/VBmVeTGZacDvs9mppszk6BDYV5TZ6CBrPZlAh2mrybSSZMDRQbBizMx0kKbm1G6QDuDmyotee4DfvAJfUJkcKpNDZXKoTI7XlZlTVYCLobC99ZnEo6kCfCamAj4jE+hxVYCq8KCT8XIHGdb4aCYumQmLVY8+1SA5ZEZMuXGx2ImD+QBVwXxgwP1ypyVWrKBCsIEdWktMrD3sE/z8XMzgEsDjczEz+wDfYs8lXLqAz07t+jL3NXQRIZNG92wZN/gWHuCRXQaX/CRAZhkDBRZWGbdAicAos38SxCnjoYxnlDFQpmMMYAxllZFzajeQGC1mbmOT6f7NOE6Web+7nC+TRmkiATJjSlIlyKSQ2STI3BpUJjNMKEEmvSQHCTKpjNFKkLGpZRYg4yS9DshAorXuVJnCp156b5FZplz6a5Bbhsa9SoaYhLx3rDL7NoI2cZ5RZv/jkAP/xh+tz4xWcCwyhYTC2QkS5mSZiLk/mvNl7gcT7wJkKI3ULEFmSGuNBBlMQSNB5va3yvx32yZpmGwqMUqQaVOSJUDGCFr0bi4Tnf6iXCDRMMrgslNjRD4ZvKrISK58vC4l7YyXxSTkHZQYebcqIwjaxGGXfyz821v0j79NN7hzD0y7dJuE09u/8eNFyFzjp5NxyE7oLydMMmSuqIzKqIzKqMwvl1mpAhvUoaEKNFAJQ0dxs5wfZ/ABFEVRFOWL/AGJsLqvHR1nGQAAAABJRU5ErkJggg==",
   gb = "/assets/png/cip-b63a88d8.png",
   rb =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAPFBMVEUAAABoaGhoaGhmZmZnZ2dmZmZmZmZwcHBmZmZnZ2doaGhnZ2dmZmZmZmZmZmZpaWlmZmZgYGBnZ2dmZmbTzN1eAAAAE3RSTlMAXyDvv3DfEK+fQN+AUM8wkBDPjWztQAAAAuRJREFUaN7tWduu4yAM5H4LNO3p///rbkO1PNhh4BBVWql+aomZwWMSLhZf+9rHTMkcjXPPv6adCbnsF4J7G/STmA5SXYNunqdmljlS1M++RbUCb5og5i6LOsD8nuzd6HUKFf4pYZmU7tasUdj3GLfsz6fW9qbI88M378Gnvl95+zk1P/wKDy3VKLSdwb/XPnLMW26TMvkadvDDesapDurGh4wlvakhfHfMncmkqW001f4Y/w/rieO+YZXCge/FtD0OBoPcMsCHDHeQLISPGWxXSI3yizOte90dcIAMup+GDELEZrsI6vj0iiULPQ0iTgBO9Euk0AlAikWTL5R0HoBYNnOWZ8VRF+1Kd7z0eToLIXLMjqhG9NBcCPEkADJaTfJC9N4EE4L2rPPGtTYG/iGVcGPfBVOBMAN+lN9iU4UUgBmkfrweeOpeWTEQFs8wGoXWhqFoI/0iBWa67AIwDOKLvc1e0oQZaAM1TRJaWgowA8XHUzK31RQwtD9gZ5i5HGOG9hN5RxJTEgMMGJ9X3LVJBBgAfnttHUm7FyMMLD4mePUSyCTGp3i0ATNI8b8STEpEZpFaSTL9YGtAsDRNdzKLDFn7ll60RF60CPrgTwVdED77sZPLn2uguLp+wdk/sGR+dNG3V29bJNgszW+86CaOsmYAM0FtWN0caS0UBDO42sodrhLxxdt3zQ5KDR5AND6AbJ0DCD76lE3z+O154XAUOL2tmDs9bKfrjrGqc0r3a/iqBtC5yghrBJEGQK8yFsyC+01zxXXOhhycWkgAGqAFV4fowhJLfAcMED8jNwMYAH4YvDq8/fJi9scvXBIvXUivX47PXEg/wmRlxtcOZjxzuZZNRgsU+nC//6LE4tJoLYxKilNdwy4QvvpxemKZqlCnfX12TzB8UJkZLNQFMHxIUUuNNu3+aFVFtlIjqoVhir7pmJYr1b1yr/XXVMP5gjVBX7G95GDcweOciVkq8bWvfcr+APQTXgFY+Cs5AAAAAElFTkSuQmCC",
   db = "/assets/png/close-32ada670.png",
   pb = "/assets/png/coin-8fd63dfb.png",
   _b = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADsSURBVHgB7dkxCsIwGAXg1+LgIjh4gHoKj+Gsix5DB0FQcPUIurgLXqKnsBdwcXIp0a7FWP4IeQTet6YtfU3/P6UBRP6S+QZu+9midvkRcEPEU003l7HlhNw3ULtsG/nmGwWMel0X+zyRDBFcd3OHADkSpwBsPePxzbt6R0CxGa7/rRa83SlkBgrEV/gGVANsCsCmAGwKwKYAbOZvoS6T5QH9wch0zuv5QHleIYRmoK08rRGTiphNAdjUhdq0DhhpHWBTADYFYOvsQqH/7WP5MQOuQgLMuy+sGfHtFKmI2RSALSAAozul0RElSW9tYDPoegNJcwAAAABJRU5ErkJggg==",
   ub = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEUAAACvsMetr8Wqr8KusMausMarr8OvsMevsMavscelr8WusMausMausMasr8ausMY46WCNAAAAD3RSTlMAn2Ag75BAv69/EN/Pv1Dhl63OAAAAc0lEQVQoz2MgDqwUhAJRA4jA+f8w4Azms/1WggKNr2ABpo9AAsHCFEhS/A5Wr2cAEWCHm/gTIqDvCLVT4v8CsIC8Alg7mDWMBApFPqEK/P9/AVVASI0BzQwGrALxTbBI2J8AFjCBh+kfiELmQFhEziIu4gFZQkr21tMcBQAAAABJRU5ErkJggg==",
   mb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFySURBVHgB7ZntbYMwEIZfVR0gIzBCV+gGjNAN2g3CBu0GHaEjZISM4G7ACG99xYgoasD461zFj4T4AfbxYN3ZGKDRyAvJoz1GlkdiviMG6YD6DAiFy5vvUBiJ6WKPCGV+BVDCJ/4D/jlNQJsmoE0T0Oa+BewcYxiOQQIeUTffiEF7KeFDS2JtmoA21QrY2nFwZXq13JaYB0Lr/ac9uq2bqhwBK320px7TPPCMUDTmARuuvxi9HjGUFuD0IT9vJAyIpaSAe3jjQn4gBYUFTnPSSwVCCkoJcNr9mx++QypKCNjuXy+S9gkpyS3AZfdNeENqcgr4JC09ZuKtIDkFzq77M3LFzyXAZdfbrCVtlQJXSdtt3FuXgFSZPUlblcBV0g6ebeoQ4LK2F0472lUj4JW0yeOnEOCyTBi5c5mgLsDItX0KgeCffCFJ+0f735FDKBKY25gbbY27/nXj+gv9iPs2kA64/qN7TUCOQ6CAxBzQaOTlB9GrTVQVYX0fAAAAAElFTkSuQmCC",
   vb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAkCAYAAAD/yagrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIxSURBVHgB7ZhPTttAFMa/N45UlrlBpydoOEFygYZ4h9IuwgkKywoIplHFNj1BXakEdk7Eostyg/oI7gmaDVIrJfN4MwgIUWyQ+TeR+G1iz7Mmn2ee530zhAJ+HqxrPBH//q+Mwyge58Vp9uak96HBxGsMboGh8TykRJROib+G24P0svFK6EmvvWeACB6hRM+73cG+vXZCk8/tjiJ8g4cQ81aze9RX9kYp7MFTmMhpI5uXBuYXPMYorKoJGw3PCYCaktzU8Bw20ApLgghlDc8hwutlGlEaw3OY8UeZqenLsp/BV0SbqZj4ojJF6zqoBC1mrsIjpOaPp5OzOIyG3s/6C4+Gy9ELi0eb8n15laN2RSJG3OwebpHPFu8SEbtha30NvqNQV/5N92KWqYQuBy9CH5pKcVjWMUI63yqeoHHzMUplQS6sx2x97z3OCvKFWtcyOVtdZAisiVFB8NuuGHbjFW4fprgDo167Lz8fUQLrR7OFEcb3PNcSRseZjGBqX2b2NOP2P1NDlMD50bwggep5sSTqaDn6sVNZTQ46GnfG1FGS4hIqIyYjdzrfzEytq0Jhn2E3usWekUlLnjZQRqTCRkU2zSlMXueQztFZFJh7Rs825XVWlqlRmXNPo977v96WUpmxtZ3BG5ejhsw+PIUMnDYnNNw56svseyfWamp2B7G9vnGQm3xp15ThTcnet/LFPI/9szti5pFBMAx3f5xeNxeQRK0qXq08We6Gn46zvNg5dlzGQXpimsIAAAAASUVORK5CYII=",
   hb = "/assets/png/kbz-b7b75d71.png",
   wb = "/assets/png/kbz_icon-1ab461b7.png",
   bb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGbSURBVHgB7dhBTgIxFAbg/41uTQgn8AZyBNjI1hvoDRwGdpqAie5wHG4AJ2CNK26gR/AEhMT18OyAaGDKINOWNqZfQgrtZKavr29CCnie59lEf7mIO506Uu6KbzXxswIlNAXxiOJ4CA32BsBh1BVX9aAdvYPPGpT05lBwWjTIYVj7nTwNwGlCSfKBksT9RPaCK3HPVTbpcyy6G1BQmAGO2mMwZw98ECnvQRMRyDkoeEO2HU+CBvX7U5QUFI4y15ftYjGERsssMgbLH2kaQkGwZ7zy80Dt1otCF1Ag3UIcicJlZCuj+MbRZi623JDifmt7IBeAmPzL9+TdI6nF/BZi3MBVjNvtLlkNuLJtZHJz21fEzvMB2HYK0+7vgGoVyqK2tNt8BnRMvoD5DKztWEFVvohtsx9AswnEz6u2BAcCuNxsD2Q/gMlksz3Q8d5Cu0xeV5+SfBHbdrwtlL1pVFj7KzGbwSTzGXh8gkm+iG3zAdgmC0DptNiw3Nxk50IDOItGuR7ZZdxqJWLoGi4dLYqFpUTfCbnneZ73P3wBSRZliqHzzZQAAAAASUVORK5CYII=",
   Cb = "/assets/png/wave-9300da3f.png",
   Bb = "/assets/png/wave_icon-41753b97.png",
   yb = "/assets/png/detail_upi_icon-813ff1e1.png",
   fb = "/assets/png/eth-f22e240a.png",
   Rb = "/assets/png/ewallet-59af22d2.png",
   Eb = "/assets/png/fail-5e44a4cc.png",
   Ib = "/assets/png/gift-55dc786a.png",
   Sb = "/assets/png/google_pay-c9a23353.png",
   Db = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAKlBMVEUAAACHh4eIiIiJiYmAgICHh4eIiIiHh4eIiIiHh4eJiYmKioqJiYmIiIjVTkooAAAADXRSTlMAIN/vEM9goL+AfzCPsPkNAQAAAFdJREFUKM9jGOTAEVNIWQBDqFYRQ4jjEoYyltgQDGVCNzCEGHULMMSEb2EIcdsuwBDLvUaEEPfdCRjG3yTCEUJXMTykq4IuxIrp7bOYgWOMGYQiDIMeAAADHQ7/bC0mGwAAAABJRU5ErkJggg==",
   Gb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAG1BMVEUAAABmZmZmZmZmZmZlZWVkZGRmZmZgYGBmZmZgb6TwAAAACHRSTlMA33CAMCCvEKzmkl0AAAB1SURBVCjPY8AEih1IQJiBgbkDBSgwMDYhK9cQYOBoQOIDeSQIMIqjC7ShCbBKGKCZ4dGEJsDU4YBmi4UoXEAC4uxGDAHCLiXBjMBmNC0sHQpohmq0oAkwNwagWZshgCZQCBcgI5AxI4oJNSqBAWuIzBfCTAwAhPdNTSRz8DQAAAAASUVORK5CYII=",
   Ub = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABPCAMAAAB8gX3lAAAAQlBMVEUAAAD7XFz6W1v6Wlr6Wlr/WVn6Wlr3W1v6W1v6Wlr6Wlr6Wlr5W1v/YGD6W1v6Wlr5WVn8Wlr6Wlr6YGD/UFD6WlpTSiKhAAAAFXRSTlMAQL/fgCCgIO9gMJBwEM/PcFCvMBD8Dj+mAAABTUlEQVRYw+3VWa6DMAxAUTvzRGfvf6vvB1GK45BG6KlSez+JDkiWFWCnyW6CnpA24Ucoi0tlqwoi2qpy1M781Eepq1liL3DGGDxmo+w1xnhN7yjMYT4LDjsVKlqnbIeaFB/Vrrpr4pkddQ9U69JUXlO1kFpKk5BqKENiRlSe5AJTXcsqKU8jygwpTbxbRCyqoTyx9HxNXmQVRQQQRZXZQYSlLCnFPgXPJkkFvrKrlKBoW1qrwlR9hAHWJabqj08vaqorpE0KXgpDSv+jCiPTgCMnz3fGrlUc2ignqFNrHJ4E5SoHS0Y6LOzgPPFP8RuAs3kgqN+6bXRJ1qI7/mZLQwrUkMIhBZnETrKatKhQVpCCgIxvKIh1dIamghgqSNsdBV7XFktSz8yrCwagQ4GPamUeICjeA0t2zsQE39tNd+bYb7Qn9VPfprLqLM/gD76fzOWYcUFAAAAAAElFTkSuQmCC",
   Mb = "/assets/png/online_active-e5c995a2.png",
   Lb = "/assets/png/onlinepay-64a4dce3.png",
   kb = "/assets/png/onlinepay2-c62a95ae.png",
   Tb = "/assets/png/onlinepay_active-fec6a8d1.png",
   Qb = "/assets/png/other_bank-17a0345c.png",
   Vb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAb1BMVEUAAAAWt9sQJF4QIFsXuN0QI10Xt9sRJF0Vt9oUt94QJFwQJF0RJF4RI14QJV0RJV4QIGAWud0QJF4XuNwWuNsQJF0WttsQJF0XuNsQI1wQJVoQIFAXttwXudwSJF8Wud0VutoXuNsQJWAXuNwRJF6UrV1hAAAAI3RSTlMAgIAg32BAv2AgQL/v35/fEO/Pv6RwULBwUDAQkI+PfzDPMItdj4YAAAFeSURBVFjD7dPbboMwDIBhk0Bb0qSDQtv13C1+/2ecg8noQUKctGlT/gvcSPiTABVCob9RbKdQrnYKJs3HM2maltZaGgC39y0AzOhajcUM2pJKqQNNGhKsL4YbXc9wdb9TOFueAEeDXEKHPdbtMkHXOWk0xD0TufHBh9xWFbQpsE4feKlGW5jncmLwux2dBjHWLxrkJVgaY/QrQ+825lfMTH4q3Thtt/Eds4GDZqZq/cJQMd/OzAyg5POiYXS12jDLLkz0wry5VWaOkhrNXJAbxwichDFPjFby0p3RnkFKr9Y1w3Vk+L4EPSPrL6X6M9zKP6BwDGHDmP0jk4n1EMbAI+OSctOD0UipZ4brwUiVJKQAa0czlPErrrlGZtSK2g1iOGaSvl/qs/lr++Qds+/IZMBJg5zeQMMIcJVFUbQw9Pxux0Nc5WaSg1AoFJqkyI4uCsxPMAJHJ/4rEwr9Wl8hMNJWXI/S1AAAAABJRU5ErkJggg==",
   Ob = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAQlBMVEUAAABhOrlgObdgOLdhObhgOLdhOrhhOrpgObhhOrlgQK9hObpiOblgOrhgOrhgNrZhOrliOrpgQL9gObhgObhhOrl5m/PLAAAAFXRSTlMA32BAvyCf73DPEL+vkIAw748QULCWKxIhAAAB+ElEQVRYw92Y3ZarIAxGExD5F22b93/V0znOLJYtiTjlavZVV6XbjxArCgJFbQmRnqCPmytwneCipRdsUgauoCMxpDv0opAEUPUl4SX9IhOpg9mAiLPUxSoFCtsxvN5pznLjJ+TpyPeqLNTCG8aCb9EDfHFrzxQNY+GSL8R4ZEtFM3FYj28PhP9kauMDHNmozbJHpYq0XoptkD33RAzuUBhLHHG/QoTTVGbicXKcyEyp3TyaODT8gCSxyWOwEYY/nyMOVcOIYKgtyMe5U0VonuWkOonOWI0YJ9YOlYlynNAu8KRfgSe3/eOj0VrtOc0gMLfD2s81K0ChzzVUwI3QKMgjNBmmCxq1PPH0zgNa36afNQY9f6PFfwsE5I4cr1p1oqERGvqbmjElHqPxkEZoIuQRmgxqhMZBGaEpAPZzzbofYzU1a5E0DwBwvKb+EqGtqVFvbNC6l0MjaoxwMMCOSrMLIGke0hboDm9M4kikFrlXg+LGZDWdGiVvk+KppoaRqrNUgbBS6rR20cBO8OywuWdDm1QJwSyWOI09VNCRDKtRcCD3auSuuPnfaLz8ICRr+h+oZM35452skSzV469oPGMR12v+AqmSA/AoS11YByJmpg4m0/W+RAb16BcvMvfETkfDFYxKll6wkwtwneLy5PcbDKasCvD8A1L//wZdKHHUAAAAAElFTkSuQmCC",
   Nb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaBAMAAABbZFH9AAAAJFBMVEUAAAD/j4j/j4v/j4v/jYv/j4v/j4v/jov/j4r/j4n/j4//joooFaPkAAAAC3RSTlMAEH/PcL9A759QIJyrhHUAAABpSURBVBjTfckxCoMAEETRSZAUqQKp0qW3svYU1laew1tpI+zldP3oKIjTDJ+nq/06eUUff1cZMezxjGUgtKIJhEATCIGQMcn4jsNU3NTrVGodk/R1VdKj3mL8KNGUaEo0gSYQAiFjkz8Di8+Gi0MPfwwAAAAASUVORK5CYII=",
   Fb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAAAP1BMVEUAAAD/cnL/cnL/cXL/cnL/cHn/cXP/cHL/cHT/cHP/cXP/cXL/cHL/dHT/cXP/cHL/cnP/cXL/cnL/cnL/cXLSRt+9AAAAFHRSTlMAn4DfYBC/YEAgUO+AQM8wj3B/r63+oFoAAAGZSURBVHja7drrUoMwEIbhDTmRcK57/9cqIo62NYS2qa74PX+ZybwzHUpgQwAAAAAFdNWmWHCtgTIGzjC0m+GMjrZVnKFoN8UZ1eFjjFJGSIx1POutiJhxXVlEjOZFIyKGV4hBDGIOFeN44UTE1LyoRcRQ1My6lvGgnIUgZwshaj+DGMQgBjGI+a0Ya2KQEtPy7PSEmJozfOrLx/RNZEakDK82tXSl54W+eS1P5fGKJEAMYhCDmAuISUFMCmJSEPMAe2r4UXqiK537uDha2qvnEka6EPmTo50Ml9HROX3PrFNxGROdCfyV+uGYqkSM5zKGrZ/J006OSxi3XhB72suO+im3du34XdNaWv2tPz3EIOYMYlIQk4KYFMSkICYFMXcyapOhKzq5kTzl1sqIt09CJl54GWc72yVSyLyJQjRWyvBL1lgQMYhBzDFjrBUT0znmPsiICfymGUTEiDrbyTjQjhjEHDGmkXRrt+sFETFW80wHETFE3r20VsaDUtp+BjH/OWb/2c48zxkDZQzVpppuEHNrAQAAADzuFUAonm/lUx9AAAAAAElFTkSuQmCC",
   xb = "/assets/png/qrcode_active-ddfcec2b.png",
   Pb = "/assets/png/quickpay-a4794d89.png",
   Hb =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALHSURBVHgB7ZkxaBNRGMf/30WNEcVCJsWhk5soZHKrboKhZivVIbhLR3GovVoHHR1dpFPtFmvEVVwEh0Kgm1OE4lYQlEq1ued7aV7J5d7dvffuXXLQ/CDc8d7Hy++f3L28ewGmTDnZEHKg5TdnTpX+LgWEJhhmB80dIur0SqdXG0/Wu3CE8wDttcWlAOQDbCauxgP8+vLGKhxQgkO4/EoAvOCnZ5PqGDB3//Y1vP208xkZcRZgIO/r1rsK4cEBpvISxlBrPVusIQOZ7wFbeWJo88MHcd4DthtPN7ZhQaYALuQltiGsA7iUl9iEsAqQh7zENIRxgDzlJSYhjAKMQ16iG0I7wDjlJTohtAJMQl6SFiI1wCTlJUkhEn+JiyAv4Oud2pa/cFnVFxugKPISRqRccigDFE1e4BFd+vjoTjnSPtrAF1fNoslL/lUvVkfbIgE8DyswZBzycYQCvF97cG/oEVCLScoLQgEYgjkY4EKeEer89Zo/4NST6vhj6u95f/PHaHsoAIGuQxNX8vxwd/DmNxOLg15X1Tz6DXyHBs7lj8b8ElcrPn2qnNtR9YW/AUIHKeQkHztmX75cbs8/fvNL1R8K0Dtk75BA0eQFoQANf7PLD69UhUWUF0R+B4LeGZ/fUN3hNidTJdFVOJYXRAI0/PWfwWFwS4ZwNs+zYJePtp82pol8f6y4jpa/MMsXIMsl0FdkgbwrBPaHMbbHF2RVfl7h092uqtRUvj98UufWy4cX2MFB3QM7DwuGrvk9YvSct+zH1drICxKfB8RgYlAxOAwZuWGrfIquxNXaygtStxZtQqhmG3EJqWqzyAu09kaNQhBuIIfZJg7tzV39EHR8nect338PGKJzYx/NNqjy7edvqn5X8gKrrcUss5NLeYH15q5NCNfygkgA2wf6caD6by26FiqovEDlpgrg5N/DPCiy25Qpk+I/kVih1LpulgIAAAAASUVORK5CYII=",
   Yb = "/assets/png/0-6ae0fe8d.png",
   Wb = "/assets/png/1-c4fc5e42.png",
   Kb = "/assets/png/2-4468ebef.png",
   Xb = "/assets/png/0-6ae0fe8d.png",
   Jb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMA359ffyAf748/EL9Pz68vbwgIlO4AAAGXSURBVFjD7ZjbbsMgDIbBQDmFpH7/l91EE1mVSTPHm7QLvquC2k/kN6fGTCZnlM0R+aHVhYrvWKfybREZXjM+iwMUY/Q4op3G7RKMOcbQumBdj/zW14jHlckVz2mlfyfuT+h6JxgTes8ySpvpRsn3j+Yb133fwEmIz4ifiSTMLyP0HjsWeryEhLZHlumHXOhQINyN5OPCYEVCMnocCwElQirRhmNhQKkQKKqRMEmFQOEPhU0gJF96vIxcWFAo7CbYK1O5MEuFZa9vN6586S0CYV9PyZR0zJ5Ma+eWsGIn4jvlRob1w5IC8UKmLa8iJ7Lt0Fu8oB0phcZ9m+GECwzhakQiNl/M5A/YwN6nAZs1C6rgp6hFJbGw3UZJZkeeEjeFUziFUygTxuRfAFKTsFKhfVAvUpNYhcJkCEtNIiuEUSBc3s+84bXnSc3rR86n1zl7VGFFahIVx5RfPvUaux+q4FkHVMKiBlQB/LoZUQFNf2LR32yUdbl+a/PEe0R38YpHSKX8OK6Kddl8Jiwefkxy8//EZPI/+AIU/cYU8JsrnwAAAABJRU5ErkJggg==",
   zb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAAA7CAMAAAAn6dbMAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAIN9AgO8QMM9gcKC/kK9Qj29ZmZoEAAAB7klEQVRYw93Y23LjIAwGYHE+OU5W7/+wO2M1/r31QAzBN6uLTqd0voAEyA79H6EWvhAurtZ0ypEvhy6qR+au6LGXPtrl63nW3BfFTy2zMnlfXFTTd9FD/9CepttF6IXmRxY60/xIQgeaH+m2fNBjow3ND++uTNpka81YFZs7L8jm18+RSedL5zoNZLo0PlrggXo8t5XWx1dGuNCVjnaiLfMwvSVaVQb/MI/TupFBJZzsDfmppshKNDmpIYL+WhbLShNUCrP+Vn5t0ko/Mn2kfTIN2RuFbSHOW/5EB8dsK7KMZmx0dop2GbSv93d7llEzd6weQcZfo6/mFTRkDOJQW4L8XlOVznykIaNmej/UK/2S27QVOp9k1Ay/nWQyvMVabyScfssBbTG+q3eWKXH9qimgD7LSWMsi42cZNFGDDpBR2tPWhHwslW3eui4c5Nc/fVw9A1VlUslUz2HcaZFRM0RNlmjRIokccOK+lEFvcpIkP+l7GXeA4z0sTZBBIx7NizbQMK1988Uq0RDd7hVFVjRKhw+PaJEG6dz6L3lCGqKdwM1EF+oMY8sjeWqGRb5uecyOs1lM+jUfRlucH4Zvo+1Nb9PoQ1zUbTQv2UzWLXdE39tY0n208x3fXfTRpuu7i555q96LZonXknFuFn8BRodWROohzGIAAAAASUVORK5CYII=",
   jb = "/assets/png/sanjiao-9752d7ef.png",
   Zb = "/assets/png/saveWallet-1a0f894b.png",
   qb = "/assets/png/setup1-53816735.png",
   $b = "/assets/png/setup2-666d3e9e.png",
   eC = "/assets/png/setup2_active-bd15058f.png",
   tC = "/assets/png/2-bd839975.png",
   sC =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMvSURBVHgB7Zm9TttQGIbfz85SqdDAyBTEilTuoGZpx5YrgLkdaghDN4LESIhzBcAVUEa64F5BU4m9WcpYEEVCorW/fiehakLsNOfHKaryDB58/vz6Pb/fASZMKATKS+CNjTUwtvBgoEsQH9LeXpSVWsotxxxI4QoeDKwerbxUwrCiYVjpf+MvyV85wjhgWgGSvg+nKGrnZR8qZKDuMCyDvAuMA56eoah2OWp2DxrIH5GKqYXCoZaOCIWWkC7pRxSPdhv6Qth/j6JhxNDEwJGfqmtp2a7PVAxNtIUUP04o1h0fCgNHoNaYYxQF8yEMMBOC9ACFkcYwQGsd6YXXq6fyDDITFxaA2dnsgjc3wNkZcmo9pkbjFQwowRSmbVnlg4H3jx4Bb14PL7uzA3zLWFfZO4Ahxo502l2vfpLn0kDCi+fAzEx2oQsRcPIhK6VNjb15GGLuiIK5Kb9if+B99of+pS5swwIrRzrt57mih5UbCsNZqwemddji2ddhLYSi3VjUNGEMNalet9722DuiYK6Zrfayy23UQzjAiZDOtoWTZT0xkpeTFTjCjSPoFTNKN6OmyjvsxKfdPgqgc0Qmqsl/etozo7XVyq2OAd1x5RZnjvRRKokQX1Y+Lv95qaIg3hNJbKMAnDrCYa0M72pLFrfhA5i8COnjbZPtem6VcASH78SFH0ejL45qsE8tuxLjrmtpiVBIXvp+2nHRAU6ESFSyYbZNkTLetZNopv1ea3MzQJKewgbfW6Zdu5nM3pEk3YctCTdgiZWQTqAbqMAaXrqryxg7R1xG65newgJjIVytqrN1Bc4QV9R4M8TcEcYqXJOwscNGs1Z38bv9giLQjML/xswR7zZAUXhXazDALPjAtHp3g9TP4mI3HDQKefEtppfyjKCJdtfKveyZmwM2q9CiXge+nt9/K+ea6Xnd7qXviO8HSDPcOJcPOjnJj2fdR8W3BkUoyihdq+1ODA30haRpkGukSTwri4TV1B7rFDEY7N4zFI92G//NZaje9bQv19PpmK6nPbmeThxcT/NGdV/iVWt4UEgwLycOlj/YU/4skZBWfwDhH8M8hqvxCRP6+AXr3BzuT3UFZwAAAABJRU5ErkJggg==",
   nC = "/assets/png/3-5d3eefed.png",
   aC =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOLSURBVHgB7Zq/b9NAFMff2Y5EJJDCQmGL6MKARCIxIBZqpJTCQstcCcrKQCUkBqhUVyAGpmZghMIfgJQJonZI2JGaf6AinaBbpDZqqto53nOSqrLP9vlnMuQz1Nb1HN83793du/cCMGXKFD8YJMRiwyj0TLPE++wxKLwInJeAKQW8FgZvYh28b+Ndh3H4BQo065X3TUiI2EIWdtbmBoOHZ2eDln47iYOaClb1x/yHFsQgshBbAId1vJ2DZGiynLZS1402RCC0EHKhY9Nax29/FdKAsc28pm7UdKMT6rEwnRcaRpGfWg0AnAOpwtosp+phrKPIdqw0jBI3rd30RRDc/sIebb8pyT4hZRESoZhoibCTOT4dFfq6zEIQKCQ7d/Kkg4tAOcjNfF2LJvaYRRD2GGgsfp18hdir03hFDOHFwVi88XStgUuZf2CCYAx0r2jA0yIoYgsmjOEGLERokco2rlJg7sIE4mUVoUUUsF7CGJi9dDWwD1plUdTu5VqLkDGvbj6BT3dewN0rN4K6PhWtYC4hFAyi7kw3PhJRuVaGg14H9g7/BXW3jwvORrdF+olFs1KcF/H692c4OA6OFUXu5RLCGdyDjIgiwoa79zbRHMnErSKLIJhyy9kkEMKKkDKxRNjw4MkeZqLP5AvwXX8Ly7O67CMJiLCRESLPRS1vX5ev35cSk5AIISLXkv70vcO/OKAv0DV7gWISFuF6WCCkH+oNMmJSsETb2eAWwpTQaRk/MWm4ExNYRHP14nwfIjAS8/H2c1sMMZO/nM6coASfA5dFMLqsQUSclklrYlOW0t3koKdprTAT3sl5MamIQLcShfHC88iD7bVNvMQK5WmPOUIx3dMeJAkD9rU+/27F2S7cR+K41wiyQtIiCDwrVcXtAoama8KEge7T9Mpxee7saJUNmDQsbcXrX55ChlapwuRQrT/0TtL5xlonOc2ghDKMHdbOdzXDr4evkCam9pml6nGW4/hgZh7HUFvyLzMERr9kzj6MSQxWtPDdS34uNUIqjN+ZN1pDMW3IChLBVZ3eLdUdQrDwE9OoakaFHnQnGUuMCHWwog8+yallSHc1q+a7ajmMCCJ6MRStA6q5xRMqhtJmh382opasY5enKU+scnOVK1iijlKetvg3pkItbs09sR8MEHaWkhJ8mBvjlCBgrHj+BwOM9zucDm4W36fBXzjSWkHL6pQpU5LhP2fY2Y6KcIURAAAAAElFTkSuQmCC",
   AC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGKSURBVHgB7ZlNTsJAFMf/UxpjXHGEegO9ATfA7oSN3gDd0zAEDsANhA24w68DcARuIEdg6abznBJijDodqtSZhvdLmn5MO+lvvtq8BzDMYSN2uWkuL+ph7aSjgGt9GqE8Vs1kelrkgdB2w8uwdZVSMFKgOsonQkFyBZ4H7U5KGAEEVzwO2q/Z3tQzRoG5vIwUhHT58luivMLAVCDCoIf/GTZ/wixA4gwVIDAXUdUFqgELuIYFXMMCrmEB17CAa1jANSzgGhZwDQu4hgX2C61QEGto8aNq0EJvfaRvy1g+rOEJOwnooG4/TmYSHmIVEALjuDuV8BTrHEhJTeAx1h6Ik/vF12vbiHGE/VI4N5Bh7YEsufH9ahkR69/VGeZUtxJZK9eOsxjp4nNZM5kVbqmyMPYAKWzGfg2iB48xDyE60pkZrAmioTM13koYBWI5XitSt9mx/g7Ip2H7TmdtGvAMa5ZyPmzdBLQZRk6zNXqF+vFdratQ3J2NVKrOdZZyoif2Ek4o/o/EMIfCO/yWaMYXCaz7AAAAAElFTkSuQmCC",
   oC = "/assets/png/hicon2-147f9796.png",
   iC = "/assets/png/timeout-fef473aa.png",
   lC = "/assets/png/tip-f64b7558.png",
   cC =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANeSURBVHgB7ZlLctpAEIb/HpyskhQ3CDlB8AlsThD7BuQEFtiL7Ay7VMU2ygnsnCDOCYJPYOcGyglMqKzsMJ0eicfogQCBBFTxLUCaZ/c8Wj09wI71QthQuNF89B+IbqFftMn97CWV20gF2HHKIPVoJfVE0jZdXbnRsnuhio3TE1NdHivIBD2gRA26uOguUksEroxbcF1PxKoC2i5SBqPDzSaiSoxnQDLrUugaq6CkamlKsNMqQ/WlP/ogb4fhTP0OpVIVmr8nVy7tk/vlYfSqJhl0glUxGDjTsvjs7BDUvzcjGhPep9zDgCvT6oN0x35VVtNVrAx6n5TKTvMcA/0TKUuU3Jas90QFetLCVxnotp24h4LwhSe00ktRsDRIvQXzKK0rzz9kT9zI/uhFaxSiADufKqCn1hxFAwFZ/5FfGe3SLbnpBqGYGVDP5+A5yhF7/l+nUx8lhTY8q4a9gQ25K+CPPj/V5yz+e1LPF/wE3HdE+TLMCJCuS1bIQOQ/A6Xnatikp+L5Cqt/RvB6IHiIg2iF/BXgBawbQzb60/X05Ra3TgqbRWVGfnRGNk6BWcTMaBEKeFgZfBdNyV8BrW+xKphibeWuQPD15G9YHo/cq5toYjF7gLmFhPW7WBtoJyXnpACFhPV9fFbHyIo5zCSMvsFSQJymVUH8EEsyPg3jIxadieAk1pqWbZ0HBg0sO80BnmzcxOn2R5H1/nyDZbxQORilCO+Xsl/8ox2RVBB3NgtszJx2k9zeWFHHqUKpI7EsB1Z9U++X9N+d5YXu2BQiS2joCWpdRhYU7qBfdqMxHCvasSQk1uz1sX/sHKWMOwlOTfdIcJgWRDp5s293IkGqeY4z88EkClyOv8gTd5qeTUhlWeENMot9M9qtSafyESI6wLL4m3zQtZOs80BSiCNrR2FhxXy2kBPb5k7H2CmwbrZegYICWxIi2fubKXQ5K9JdTGDLBHMH2UL28hHsUueyNi1/G5ZQ6repmBlgXRPP8xBZ0IPUM3UhCgS3LrhBDuzM6LrZKbBu7E3sIfP1aoThRcUIPj09kou7D4lllepBv2rb54dFmCjAcqVD6GB5erGohOZraTvZnrNcHqi+udhwkYHxEhKf3R3GbTxkxoRCdG1oNi1SQ4uicKmLHVvKfxGoQvU9AEzPAAAAAElFTkSuQmCC",
   gC = "/assets/png/trx-8c63cfbf.png",
   rC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAeCAMAAAD95QUdAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAIL+fH0Df72CAzzCvcJCPUBCMFs9nAAAAkUlEQVQoz4XR3RIDEQwFYGJFsPpz3v9hm1IdsTPtueKbccRwn3jvthCOHxJ7Ch51FuCbFLyRbjKE+imRU8l3CbM569qKS0ibBOCwok1PKwy+NOdFaiRdbhOWeJmZ6hASEUbLpNZssySg2tubbqy4BN7kBDYhK+NiI54BeUvJOTNudwLGS9eQXyVxiH//1CbwlBdcCg3eaboPrQAAAABJRU5ErkJggg==",
   dC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAeCAMAAAD95QUdAAAAP1BMVEUAAAC3t7e6urq6urq9vb23t7e6urq6urq6urq6urq6urq1tbW7u7u3t7e5ubm5ubm4uLi6urq5ubmvr6+6urqFcHChAAAAFHRSTlMAIL+fH0Df74BgzzCvYMCQcG9QEN5tRe4AAACUSURBVCjPhdHbDsIgEARQWMpyE1t1/v9bXbGY7jax8wQnYTIJbo/3zoSw/JE4UvFsswC/pOCVDCtfuY9Xpd+E/JAwm7OctbiEZCQAixZpemlh8Kk5H6RFkqNZWONpM7V9cymF8cgktunmnoCmxG1y0eISWMkYbYSsyIWUeAb6R2rOmbGuBIDNZpA/SuIQL/9UJ/CUN9oQD0oOqon+AAAAAElFTkSuQmCC",
   pC = "/assets/png/upi_recharge-a5d50b78.png",
   _C = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAP1BMVEUAAAD8aGj+aGj/cHD/aGj+aGj8aWn+Z2f+aGj9aGj8aGj/aGj/YGD/aGj8Zmb/cXL/cHL/cHD/cXL+aGj/cXLSSGKsAAAAE3RSTlMAQJAQ378g78+AYL8QfzDvgDDf6zcOIgAAAMhJREFUKM+tklsSgyAMRZMQXvJQi/tfazu1CBqc6Yf5Ae8xF0ICTwWmwKXYQHkEg/VoABQSB7xARdxJE5PqqXHn70jOdLnO17zpt/Gu/U9Ud6VIDVlJHI/LhAkkBtT7mhlGGCx2p0js/e6NAvfuVo2x4V2CMYbyD2YzxtF+F317tVbA9c1bwWhhGJzh4m7m13oYadGSZduW2mRG0Tzc5rVpNaJLNaf6JKfuh0mRM+fh4q4kbKPYHoEJP6LBZDWCjEzalsLaIzwUbwexBgd/nj2BAAAAAElFTkSuQmCC",
   uC = "/assets/png/usdt-40311708.png",
   mC =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAPFBMVEUAAAD////////////////////////////////////////////////////////////////////////////YSWgTAAAAE3RSTlMAn2CAIN+/QPCQEDBwUM+Prx9vaviGVAAAA09JREFUeNrtnN1yozAMhY8d/2EDSVfv/67bbCalbpopUBnOtny3nXFcSUeSQQYHBwcHBwcNcGezOWe3YH9edsDP32Enu9BhLkZ2wWAuveyCBbePDRYQbcUoDQi2ouCRfX3eQ48oDYjQI8sEvoVMZCgyKq3rpnVGqFHL+kUpVjpoYqeFByW1DdDEKYkvTOs4qOKrfLqaJHc8dDEqK8eqbqhiVVRiqsJLGIS+UQjWawesZZBWIVhnwoKVXJqFYP3fn74XJnUWbFGO02kdl6oQqxNEkQB9Tqy9YJOesKABSdTwaEGnfz6i9XHEDVYfJ7TBcHtY0ccD2pATt4eBjtvDQKTW8JXEm6VvnLg9DBRRwOEjXD1XQEtsi+eoXKnQ4wEumRi0JVNL5MqF24BAJOz1awJvjrkRScvwROA2IBDJDQgEXgnfcLQ58E7HbcC1Fdk7bIbla2M+EFhTzB232MnJYVMstYNXKLnD1uRxkYIzNsd5zgwzUdJsgRTswkArkDuWfH/AkGb4V2F/LZXiC3bFhS8KnIJ+Wx7lexDgDLH5bsTw6fYieHDGS0XqmLb3j2K74OUVP5q+gI/Sm/G2wXC2dBuM5yQV3rAI5D8QyfNczWHFP0mec8IqflGpK56zmb5j57RbA5byaxpW2+IFdstDUxpNd52AConi0OT88+6gdH53pWRf7cA++L/6+5ixNecqH+evJH7GptQC8fFZEOwnZefnBFgOuz1+u8wUwLjTA0w7V6DZ7+Dk2sFx9qPYtJ2SzYJ+qt9Bye6dg5vfL2g/8B6VdaL/i2Hrl4n1D/KZMFYRSGjCsDiz2U1NWJa/Xs1pMxPWEg4rjH5BY9yaBqWXiYy2mDUv0N2GR3kv65hVkX/DeB77gKOjvaqhOSxfy4RMIs8G0fcfino2IEXo4U/HA5gG0RumwoH8Qg7/hRf2K0P0l66MvMKsYy9C7ePC+hmNh7aYtR6zX9/NokrGFcoy8v7VCWmSeUs0rEnm7akJXbP/nhcAZMe5GssdgiKGOwRFPHkIvgYhcxasgpDpZnG7TDiKOiNxIb6RObv9icjaC6qMjxZbEaQBo62IALi/MXlWKLxt6bkNKGK4P4Ep0v2cD8XCdWZzOopxzYODg4ODH8dfc04/UH4ese0AAAAASUVORK5CYII=",
   vC =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAAqCAYAAAB1PO9pAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMgSURBVHgB7ZvvkdowEMWfM/c9dBBfB7kOoANSQbgKIBVAKrhcBbgD7iqAqyB0gFPB0YHyFokJEDBgSxZn729mR/yzrNknraS1ABRFURRFUZTGkEC5WYwxHRYD2pq2SJIkhyfOCs+bd1kMaV9Rjpz2Qnv12fAmQ5+nLL7TRrSO+zinLWg/g/uRDXgy/ljRynaeViCDjDa/wJdTNyBLkxQ0YsBiChtmnmkZypHSxrQubK99YI9dQ9ngwnkfdoR3cR05bATI4IudnjeAB3bqm0DZCE4b095NdVa0obFTROWGbenAA8aGMeE3Wozzw5MnwY8xrdQBtrXAE8b2cOEdLcRcPn/7Ym4KonVyopEyJ0/c2wz+GFxQ55Jz1jMagnO++DNFHHLaD/r0pfBXbOjIxGeCCPC+feNjntyvc27iMz9s192Rtt7ClusLaobOkZX1jJbzdc/jXlmi1xvsfnyIeslof2DzKHvcQdmygA2LKW3uS3wXYjeOZ51L1Bfy86JtngrvkNyCiM2XEhZTeBR/5x6ZlMYmsnZ3S8ttbsMcJGb4+eLYNdvPi64pIpTwGWyIKcsSERCRQ4vvmGF/5Ms9F8auLw7n4+TYNa5dCyf6qWtOEkJ4CTGP+KDUKH5UgoV6YxM/I5RjeXb7EZA2iB9yjhfhxyhHhiMr0XNQnBXCLJ5S2E5wj4bwCUoriSG8ZJFk8eE9lLPa+8QTsKM7d1VL2UODiCF85so33Cg7q2spc1pPF3fVmdKxr6g/i3URbRBdiCF839nN0RbRBV3cOdokuhBsxLu9cNntT4yjWZISTdEC0YUQwsuBi47knj+S8yRhxHZ/gz3G3PgzgUGEp63oxCrOk6PYZbN+pYmZLaybUKG+g/2nT9fyGQ3DrSHkQYv4JT34enZqoLhsJEpcI989sjMffeClj2Xro4vTh1yKBkpa4Rq5nwofGZlGctTLycfbKnxgzL//v3k5pn4lcrJXyl9nF6xy0sPYA/qxkPPmKRqCsQc4YzM4bNd/I14WA/zhA+L0UGHdsO1ULD8Won+TDoyx0WuAuGRNT0gpiqIoiqK0mr9+ixqoo1F5YAAAAABJRU5ErkJggg==",
   hC = "/assets/png/serverIcon-fc4bf5f3.png",
   wC =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwBAMAAADMe/ShAAAAD1BMVEX///8AAACAgIC/v79AQEAmZuZrAAACzUlEQVR42u2cW26DMBREUVlBEAsggQUgdpDsf1FVpbY37eAMt7GVfpz5Qtj4yJEy8n1AhxCqqf7yWKvMeXLy+gl+Oz3WJHOenDwBBgy4Cfh22dMSa+3OuX4uFUOrWVDAUyeKoeKc869N+AUBAwbcFtzLOUGGQvPHo5ueLo4tqNsK6UbP98NDaevlBQEDBvwysFrBNcDiEpXBuvWhYJCAAQP+9+Bvu5h/GMgaF23A/jwFGDDgF4J9CLMKeAsnEXAihFHpkPfO8oKAAQNuCPY5zz6R3zALJtPGuYuyAAMGXBecKeNmKix+wbxiN0NYpuSPnQADBlwXHOag0oxHGMj8xRvDQGJo7/Fttw9kcvuTybLRwuST/iqAAQNuAxYn2e5rLqOGMPtDt3u7WL5Qo0zuTG7Y1ZT8jxGKyYABA24DTrabBnj8OSTecg1sGIhxQZvjCXmnDE2AAQNuAr49ai7Vmot3m6tGN4lW9uFv8Zz55TrAgAHXBvfm/66nC7WUTZ+SO/K4qSCFqp3LAAMG3AZsgpHwBAGrgZi2VTEQccrCtgRsMspivYABA64N7s2B4SI1l1XBWnMRAylVYcoXipE7uVMYYMCAa4P7ct9pXGgZRSwlJFUYMZCQLUCFCiki68EhwIABNwFrDLLmMqU6FHIhTEijLrObuKPSoA0wYMBNwNvjTwPNiZRpKPpA5Ehj5TJDeuGNtgMMGHBlsO88N+/ZmTtiINkvkvn9HU4bAwYMuCo4+3rLUm4RWYyBXJKt7PkvoHSuOwYwYMDNwHrMUPBYLrWcykHNIuC/lKl1o95xAQMG/I/AYSA+GVJuSMuDfSLnyJkLMGDALwWP0dqhEZAWf0PPGshguvgPvYYIGDDgRmANYTx42z1vzKYhRMAiCz4fLVIBBgy4PdgnUf2LcqpZwOMTVRgZyr8+CBgw4GpgU8Y1UYncKX5HSBdECFXUO09liq3e+WPlAAAAAElFTkSuQmCC",
   bC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAOVBMVEUAAAD/cXL/cXL/cHL/cHD/cHD/cHL/cXH/cXL/cHD/cHL/cHP/cXL/cnL/cnL/cHL/cHD/cHD/cXIYzXBpAAAAEnRSTlMA799gIF9QkM9An7+vn4BwMBBz5IC4AAAA6ElEQVRo3u3ZSQ4DIQxEUdvQ9JC57n/YZIeySItBtYhU/wIP4Q3CppT60b5ujp5isY5SoDu35vKGkay1xUEFCgarBzydR/ZZIM7nEZgFzq8rgQwEGdhBBlY2cGEDzgYgQIAAAQIECBAgQIAAAQIECPgLIMiApz7Aj5Ktry7g+rIaAXiYUYG7cYHDyEAmA4eRgcIGngPf5LF0AEO/tD4EOJqLRsAB5IFFiKdGYGMPeQWwMoEdgL+IgAWAKxNI+PTgAHXMuJOAuiS6ZRJQtzi38iQBVhzT2Wk5SEAtTRLRsu69+MwbSSn11Rtd2SGJVmfiHAAAAABJRU5ErkJggg==",
   CC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABWCAMAAACn+gtUAAAAPFBMVEUAAAD/cXL/cHL/cHL/cHD/cHD/cXL/cHL/cnL/cHL/cHD/cHD/cXP/cHL/cHH/cHP/cHH/cXH/cHD/cXJKVK13AAAAE3RSTlMA35+AIDDvv4BgEEDPr5BQcLBgJSC3QwAAAWRJREFUWMPV1stugzAUBuFjMFBugZb3f9euKkKJ8jXQtMosvfiFRyPh2NKm+4whiuU+RYiEhTZAtYAcoMVACjG+gIbq/zW8h6h/V8OYq/FRDfNyRb1+1OMa1js3ZzS0+2+YA/S7O/cHNax3LpetGdE8QcPy1xrKp2toQixP19C/gIZOGpryNu1tDXk9IV8Ll42G9YS83dRQ7E48sNfQPTYQ0zENRcQ5DUOsDEc0pC7ilIaUI6DBA6c01JsBafBvPC/XTD/R8BEbpp3ISSXdfQMOObrkgb2GlbqpPXBHgynw+CGDnsJumW9ApwgNHrAGt2wNbtka3PJKV3wHJZkKA2bGgBnRsklomWS0bCakaC4YMANaJh1aNj1aNiVKMg0GTH12oELLZkbLZkTLJiFFkjFgJrRsLmjZDGiZdCjJ9BgwJQZMg5ZNjZZJhZbNjBTNiAGT0DLJaNlMaNlcUJIZMWDyFAf4BJXjrTPfEIFtAAAAAElFTkSuQmCC",
   BC = "/assets/png/thirdPartyLogo-5dc96e22.png",
   yC =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAaVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8G612AAAAInRSTlMAZkAmxmDucBAMv7J5Lh8Z1p9ZUUs5jn+qM8UG45b137yA+ifzJQAAAt1JREFUeNrt2oluozAQgOEZJ9iY+wgJ5Gzn/R9yl2alqNqEs/FMJX9P8MuDLYMAz/M8z/M818K0rlUKQoUm0tS7lRnIo/aaHqQlhgdN3+kaxAiDiJ4wIEM/2ucU8AsPBb2kQ+AVqogGfQKjx2hFLmF4+G/xJO0TFdE0MTB4jHbcDVwLTURzgFsq0kRiA9NDXyc18D5asYGq1ERiA7Ov0UoNvI9WbODXkSc28H4HFRtY96OVG2g0keDALCKSHBhoEh14IBIdeCDZgTXJDsxuwgNLkh2YkfDAUnhgRsIDA+mBkfRALTwwJeGBSnpgTc/oc7FdbPNEntsf28RFuzf4DrsmXx+oY4NvVCm7KlCX+HbKLg68xuhEtzBQJ+hIZZcEHg06E6TzA2N0qpsbGKNj3bzAIzq3mROoDToXhDMCE2RQnSYHxsiimxqokYmdGFgik920QI1s7KTAEtk0kwITZBNMCSyQUT4hsEVGzYTAPTLaTQhETgGM2iErC2MaZJWvCTSxppnOLc6TwZjN674zzbTg5rZZEXikRbauAhNayDgKvNBCFx94Z2ihxG+Sf4ymBc5ujpm79kwz6digm8Dlfnfgvt1+1+6DUExg8nGlJ25GSGB8pRcOEgKTgl6r+QMTTQMK/sAzDUq5A2MaFjAHJiQ88Cg8MCHhgRfpgR/SAwsf6AP9JhlWSg80V+GB+CE9MLkKD8SWhtXcgXgUfmEdKbzxX/mHL9WBhEDca3rhU8JrZ68s6Akt5cW9l1zi7TdtKejTx2/4eOQDfaAP9IGuZTAmR1Y5jLHIKoQxJ2QF4ypkVMM4hYwUgOxtvAGQ/RBaANG/9uzgL8knYQYgegkrANlLuAEQvYQ7mMoGyCCwMFmKDFJ4kPiTXgNfxD6GO5jnVKNT9Ql6YqesTjBfh86ksIit0Ikqh6U6B4lBByvYzZsTg+4EK+XqbY1Vk8OPsFnaqB/WpJkFz/M8z/O8tf4AbNgTpaPK6qwAAAAASUVORK5CYII=",
   fC = "/assets/png/1-bcd21d34.png",
   RC = "/assets/png/E-wallet-472b7b97.png",
   EC = "/assets/png/bankHeader-56d506ba.png",
   IC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAOVBMVEUAAAD/cHL/cHL/cXH/cHD/cHD/cXL/cXL/cHD/cXP/cXL/cHL/cHL/cHL/cXH/cnL/cnL/cHD/cXJr1vXsAAAAEnRSTlMAgJ+/IEDf7xDPr3BgUJCAjzAO7iIYAAABsklEQVRo3u3Y7a6jIBCA4QGGT0Hbuf+L3ZxgouwqVaeTnE14/jUxvEVEozAMwzCIwzwpfclLZRvglpCTp3viC68Pv3h6wlxMWEdPveACRQwR4SNicQE+yfqOFKmV4NtC0U0hw/fhPuEDCEC3FSaQENK2HUDGdprwfLkmncwNSauCsAqxv8xhMfRIzFChp2qGA2/H2FzvOsbUWQRLLLaO4tbg4VXG4sN+Cv7oCmBa6jquqwCNbW78KZiTgCU2uz9H33wEtPeHchJIxKbhB54EDLHFbsARm+sGPLH5boC+YAR+ecBJ74OJ2HI3AIp/u+4HALNiyAj9AN8I/AcBq1jsp4Amplc/oIht2QW89CMzSt9NjXRglg4U6UAQDmgQDljhgAHhAAoHFpAMwDyBZKDqB3SxVUk/P91kW5oZmNv3Hofwt8wLIGzs1tvzDwL+8LA3kYJ/xQcB176NrvLhpsHO86Dq/KnmpFtPB1c1nkwgQk/aH2kqtxZNI3o6ZqBnJrYZegqxFegJnrgCdCVi0tCHxITwwUQsi/BH/eni9+dnfEK4JhSVjPM3hnYxzSXAMAzDr/YHDOQGqujM1TwAAAAASUVORK5CYII=",
   SC = "/assets/png/momo-5cf8e802.png",
   DC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAOVBMVEUAAAD/cHL/cHL/cXL/cHD/cHD/cHD/cHP/cHL/cHL/cXL/cXL/cXH/cXL/cXH/cXL/cHD/cHP/cXKs/XxiAAAAEnRSTlMAn2DfQCAQv3CA76+Qz79/MFDC6rMjAAABwElEQVRo3u3Yy5KDIBAF0OYpr0S9//+xMwstKmVJwLYXM+VZJ9wggW6kx+PxuGbRUZ0ocXXE40pCm1GMDF/Q43KENehjVrpCo99M41aMWGiUMxjhaJTCLr3UV5ZG2W1wpT2JmPBrCp6kZMBoEuR18PRf+EX3W+3o6GHCoLd2/cPPCRek2TFOuxuPvxkMM3d8fsIMpkBNDlxpoRYDtndHOeOxdO4FiE5hQRO/zgXcIrTrDV+WWYLK0Bnco0gFpKkErbWlgYCkzmSDqrdXOD7Nxnfcx4qllTqMtYYW1cvRpYDejys64s/A1d/vrwbkdpe2Mfvz8TaqXbE9ATBBnwgTdno/adK37cDauH5LrOIdAXUC+SSZH+BOa9U9Aa9abGUC8rbrRALqUgbpgPiHZ6Ak16B2KT6JBcDXRZAJCGcdQzoEsDo5vyW0qgSzGY34YBwz4Fi5nc7TLkdPBwLtLiuAX5P7ZScb0PsOBRzvjgjwmBzsL8cI4F5AjPT9IAOyt8CCW8RWvyx8UU4yS1BF3EDTOW9kJlBZoQlUBUyx7/W45MFd5Mbn/5UCdXEZl0yOelmVMCgVS0NsiKpb1As9Ho8Hzw98IRijwEEnGAAAAABJRU5ErkJggg==",
   GC = "/assets/png/address-1eaa946f.png",
   UC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJVSURBVHgB7Zk/UgIxFMZf4AIeRGc8gtI7IxWKDZ5A7AUX8AB4AqlYqbawF+3oofEWeIGNGzAM7m7+vOQFm/3NMAMTHvk+NvteXhagoqIiGG+j9l0ybHcgIDUIRCb+MQUY1xi8iPcQiDoE4Fd8JD9zgLObxgnE8+UnEENuIC9eEsoEqQGVeEkIE2QGTOIl1CZIDNiKl1Ca8DaAFS+hMuFlwCQ+Bf6cCf1iwE7LxilMONcBs3gYNHtxN3t1xHvN9yKfOuF0BezET3fjs/nyo9U4YSz7x8u+73MlGCARWwNRXVXjefF/YkftKLvkyn875XDb7E8ngAC/hGr8SDWkEy8QY7rltPkFJOglNHtfLcqWg0n8Ll6xnDbx/XgMSJzugbwIW/FU8SiS6FK5ZJLhVSd5uu6qx9sd3XbaGK+ZW6K9iWW2yW6U6KI3HQCC/UzlE2+KrdsIwKY53+00Zu66jQCMCN/tNHbuwhIy5nnO71XZwhS7jVfnepe5i3VAk+e38LV6zCaPa77jMHfBQPMhHquKzTZXv05AgRgz7Hv08Q5zl94DZcWGpFA5xuti6zY/dOhC5TN3AX0hsyhU2cs53reQ6aAqVK7xEpJ+4NCFbh+0gc0lZ1CoAxSFrnV+/D2brxaAgLof0LaH5gMAXY0ph6wf2ElQXAmrNvS/+oE8eRPYHhqDcxYSmHrczOEEUrbmjCv3/L553suAwGRCB0Un5n0yZ1pOKqjaSJKzUawJyh6Y7HTa1gR1A0/6fMBkIsTpA/kTGt/tNJYgz8gOeu4TEtO5T0VFhT8/KeP6zvqmEhEAAAAASUVORK5CYII=",
   MC = "/assets/png/bankHeader-8061c85e.png",
   LC = "/assets/png/network-80c18906.png",
   kC = "/assets/png/recharge_usdt-68eb9f5c.png",
   TC = "/assets/png/usdt-60f52334.png",
   QC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAgCDvEN+/YM9QQJAwn4+vcG8hzv4VAAAB3UlEQVRIx5WV25asIAxEizuiqMP/f+yxId0Boj1n6g1MkWyShRCyYT+cKaU4vweNX2SVL4PiV49VpkjlRwuFSyncScfyKHeTJJjyRWYR5ZRfpET8nxxL+Q+Fjte0I7aw+i8cTO7qBi2eXXECSDVcuCSGpqVvzfP78uQytu7nQrJIF/+LZ3BlN6bQ3TJ5DU3f2WXjkCJwRsC4yxHnFtvcp+g+J6gasfLWCeyKG+u5ora07RTF51s/7FiuqC1f17IDqYK4jepjR6D0jF071NDd5wbM+WZd65EDNs2/PS7bFmNWYWvXXyMOGosO+3OkxUdWAz/1g6u+GZvHwG5B5ejKBUM1sIGxm4AczdvN7WQDY1NuvvC169YFOc+XoeJSN9b7J4CgWQthZyz8ZNQtSnyUe2z1jjKarPR5LZM2+KGlZwVmnFDusRM8LW1fdaACJLZGbJ0di9aggwQ2UBktofCF1Q2J7WDbBf2It8maG2xqQ4Iev2pQCoFd20ATwcoApRDYCidNxJSAUgjsgJUnQrzHUWInZD2f5PrHeFSq2+nxMRbtXusxbi60kxLYsO4vv6ATOL7G0yPMfOf0bgcIcclSkXllWVJG4UE634ZbPEuHOPVQhkvP6l84xh1rkNH/APZ0ZXF/2TacAAAAAElFTkSuQmCC",
   VC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACwCAMAAACYaRRsAAAAM1BMVEUAAAC3u8+4vNC5vNC5vdG4vNC3us+3t8+4vNC2vM+5vNG4vM+vv8+vr8+5vNC4vNC4vNB5o5b1AAAAEHRSTlMAQN/vj59gIM+QX5AQEK+/+pPJwgAAAbpJREFUeNrt3MuSokAQRuGsKkS8/+//tMPEbCYygDCbjs7CPt8a5QjKAos0AAAAAMAHKsPUtGywRdeV7evVFg1aMZ3OFvV4akOxJVUrmi0p2hBNPlfFg5tW1Hiw6vkbey+2aFx5VRtt0W27+B4IPmk2lYelePz75M/AAdbsZIlOmpXQ5tVSvdw3b9skabRURdJk79Lsbqnukloo2BL4BoL/QzDBDsEEOwQT7BBMsEMwwQ7BBDsEf3bwTbpYonhDKZauhwb84hM6SIMdSQ8XRoK7QrBDMMEOwQQ7BBPsEEzwtmur18TgeEOVWkawb9i/u17fgWCCCSa4q90RvGzQDsPPBxftUgh+41+THS786AgmmGCC+9ndLwxuUk0MjjeMtY0JwbGGQ9+qIrh/BDsEE+wQTLBDMMEOwQR/0aHWeH/2clwc4ISWcqz11X8bDnVR+uwnZQgmmGCCCSaYYIdggh2CCXYIJtghONTQ+hgjqdCgzmKpxtCgzpukl6WqoemxpY9hs2d721OzOmaN8y2v6BG7Vzk/MEN774jnhBnavjdUfMqdof18mFk0eUqaod2mSwc31AEAAAAA3+4PU1FviV2McX8AAAAASUVORK5CYII=",
   OC =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAArlBMVEUAAAD/sjH/zRj/zR//1zbuR0f/zBb/zRf/zhr/zRn/+HfuSUn/zBn/+njvSUn/zCH/+Xf/+XX/+HT/+nj/zBn/zRr/pSL/20H/2T3/1Db/zBf/30j/1zn/7mP/8Gb/3UT/9nL/9W//8mn/82z/7GDuSEj/+Xf/0zP/5lX/5FL/4Uz/6Vv/6Fj/40//613/+HT/vTT/2033kj3/xzz+yzX/rSj/sSr/0kH/sSz/rym/OY7sAAAAFnRSTlMAIsBCE+/v3IFxkZGRgYEy7+/v7rBhR1ORgAAAAh9JREFUWMPtkuly2jAQgA3hyJ2e1BKyMYGC7dbYXEn6/i/W1QqNughsI03+dPIh7SXzDSMcfPD/czXsQfTmqcv5tb+md88lHV/PzYAjXd/L4ZorD02nyw1D98u55oQb98uhDHpOl9PlFvcOl/ONn+Lp4ssZWA6XV+D70DI0vwIPnxZOfL2lnttFA6VV6vqBiL6UNouyFZ+JKDlNWSY1HA6pyB0qmgIJbJOxSnAnZowBk4GK3KGimWI6lcEs7LDChP3hMQMVuUNFz4rZIet2Rqa6PJpSkROxLYrj5xi3A1Rk8BZFcSQXFpoYw+FAT2IcmIeIKHKHiubRfC43xkguDIAa6KkeSXSkIg+IaDVfwWi1khtrALKu1AEs1aisayq6gPV2PyJ0AsOv1qSVMfiI0rdRreh3W6pRa1Gqc0pHyHrUIErboS5om63ffEUv8L0K8vqcKCOk2Tn2UiSLelEz8hft8yzbnhMVRZHBByKEGvCO9ltI50R5cZLj+WvTv5YXuYE2lKpJ1JbxS71onI81WJGGVlW96AJeqz81Ig+Cf5l48D6iH8gEtiomWE90g6VusMOEWCJnbFGIERMl1DmUoVYUevBOIiFECAFPhGyELDDgR00EgqXujkTCAyJiMGAQIApmSgOjpQ7MEl2KMCUR7ZgzOyLasCVjyyUsCTMBUYeqx83wXLEhov5mt3Rit+kT0eNPZ+4Cwl3fTdN/DD5oy19QoJEcy1l/8AAAAABJRU5ErkJggg==",
   NC = "/assets/png/1-0d1c9b8e.png",
   FC = "/assets/png/21-18ee4374.png",
   xC = "/assets/png/3-a463fd69.png",
   PC =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAaVBMVEUAAAAcuKcquqsvu6wxvK0xvK0xvK0vu6wxvK0vu6wxvK0uvK0tuqwxvK0xvK0wu60wvK0uuqssu6svvK0wvK0vu6wxvK0wvK0ruqkxvK0wu6wxvK0wvK0wvK0wu6wxvK0wu60xvK0yvK3BzxomAAAAInRSTlMABQ489en5Rd9V7i4i8tCRhTUWZLRMvqIb15jJXKl2fW7Dg1SZggAAAn9JREFUWMPt2NtyokAUhWGakw3IGUQFI+73f8gZYMpFgrAbZ+cmlf8upfXVkhBbY/3287ODtGoft7ujRNkiDelfSSdI1x7NOp2l3N6nT+lIxv2gr3mRtAtZ2oUs4MrKcMVluPLynbbycgFXTIYrL2cAhGS4fKEj6yLPEXAFNsOVlYuy7LMqJD59yz5Ktfc06i4MW717UKnM31p72Kfl0dBx2hK4q257nl7XcYx3U5pyq3HQYU1O7EHtk+k1xQ7DqpTQzR7k+PXe4TFHP3+OD/xelBTY/MKt8Qhk3oUcMy4rK7jb8gPuLHdVvhJx8tLlNyu46zJcnxA2G7qQHfx9n+z1+9utTV3IMeNCNn8/S87TZrg+rRXnn92aiJc39iJtz12labPLKGu/wt7VsjlcEhnIyrZ4l8L55BMZyFOdT0wlXDsmNu2M1+zOutTMYDKpTbPGI75kDkum7e+Ci52wrpqTu/NSGDzfC9T4hY/YbhZ68HOP+G7G3m6o5F3j58aFhWxt4EZJeFW8nFrzAgN3uIerUfa3fhf24lji3adMiDtE1M3EZTf7AUjIG24+uLzsdwA5+QJ3Lnc+vxfy9l7I9mvZhftFbpZ7z3A3NmMvL+M6OHC3NsPl5QuOZ7RyWLtwWflUYO/LzbW3dHm5DRT2rmwu7hofVDj54AzlhTV0gLuQp2eco/xvkbUr1btbB3duvZeqW9rMb6KdZBEE3UejiS+59mWgGI796Mm/n/FdhV2UGroxXLNUKrwXpcZ75eUQrtjVwF75zaFjvV3GuvJyDFdIxl5ZGa60DFde9uD+V/flv0qFKsO5mxwtsY7X5xmle2VJdi6bVl9Oaa2s3358fwBsLa2JXzKWGgAAAABJRU5ErkJggg==",
   HC = "/assets/png/address-3d0ea2a9.png",
   YC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHwSURBVHgB7ZlNTvMwEIbfsaNP+sqmR8hRyh6pZAfdEE4A7PlJgT3hBJQNILFIkTgIR+gRugIJqAenCClKCqRJjFvws6onrjLvzNhxJoDD8bchGCCJ1tsQK6Ek1U3HE6ZLqMdhEA3HaJhGBSTRRkcI6oJECHA7d6sxEQ8nry/nQXT7gIaoLSAbbQZ1Sv7tQTHOm8hKZQFfR7v07WtnZS4BFaNdlkpZKSWgmWiXZb6sfCrAcLTL8m1WCgJ0tH0d7Z260VZAH5PHeDrw/oeC6QyV+ciK6gfRzSh7xctPlVJeMLijnUdVFPFesH8dZ0xx0u+1hcARKsFtZoRSkq8Hq9krojB16nxNXp8GBRv/i1GTWaUssOSYEUCt3bzJk89bMIAHA6S1nhxvjqHeS8mTrR29qCMYwIiAFEF615Gt6c6jYA63BmwzS0DjZ/bm4FHeUhCgWO3NmrgAjBVzP2/89jB3d9L78pHcPbiin5yfxy1i2zgBtnECbOME2MYJsI0TYJulF1A46d2fbm5NWMTmW4hzM5LE0dr+9WXWWMiA/hgRLaDzKb72rdBbmlVCPhaXQmDdIrbN79iFkuNeqDunfvq7egf5Z1AK7y/2hFFweDWg1HlBuMASoj9+bAuzjT/TqI8S2tAlJHwsE6R0Cd0M4LDMG7hDyj0CkOrxAAAAAElFTkSuQmCC",
   WC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB7ZlPTgIxFMa/tpqYuMETOJ5AvMF4Ap0FCWElN3BvkBLDATyBrNDExeAJ5AbiCRxPICtjJG1tiUD5N7CyHdPfqq8PJu9L2/c6b4BAIFBoyDpHyqsxKCtDqRJco2Q/4Q/9Va4lATrwiDFyp0Bi+EUmhTzVQjJ7ck6ACZ4y+qyHEfxkSQS1vWSHNuFv8Ibx7rAnpiuQ8osSZd8fKABSfB4kvDc0Y2sFvsooDLvRZERRRBibZsZiCrD4TwL2BrpiZPAeHaNANrFWFjJ4zGIhC7hm8SoRg9AYPkOQJdfdzsz8JW1XylTuvqAASDE6SfjjwIxnWWjE3F+btyUUMo8IAlwTBLgmCHBNEOCaHThGQfWVxCuj5FAB54v2pv87FSCBVtK45xM7vanGSWPWQkzbNX3BRO4F0+UWGiaNLrcn7ODH9lV3oFehl/cQpwK2+ZHeTu95fpcCom3evynFWZ7f6RkwjeSUVxLzcpLyWpkx1RRC3ZpWesrPS4zuN/WhjvKeYfVGx53pNxQA3aE+mnQnplvITBCQPrxHZWvb6wKiBc+RUHXbnhNg0phUsg4/GZrYFlPtym9k4+xAyCWj9FhuOER/wFDXgicI2QlduUAg4B8/lm6oAUXbB0AAAAAASUVORK5CYII=",
   KC = "/assets/png/bankHeader1-3318d52b.png",
   XC = "/assets/png/bankHeader2-8f70dbe2.png",
   JC = "/assets/png/bankLogo-249d8676.png",
   zC = "/assets/png/email-c79fa2c3.png",
   jC = "/assets/png/ifscCode-efa243b1.png",
   ZC =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALJSURBVHgB7ZlNUhsxEIVfSxQJsCE3GG7gnABzA7xIFUUWkBMA+/yMQ7EOOUG8StgNJAfAN4hvkLlBvImdUEgdyTZJKsWMPS3ZuMDfwmNbI1mvuzVSt4EFCx42hIhk6fY61Nq+JrvJoJr7Khk1dQicG6aLxuuPLUQkmoAvx7sHFpQCvD7m1twymrGEBAvwVtd6JXMWr1fp5zxybkz/RSM97yIAhUCUXr2sOnmP67Pt+w7CLuT3EcDnt8/fuUsNcmparb1BAOIQytLdmtL4ighY2K3Gq7M2BIg9QBpBlvsXDRKPJfJAlu6vK331HRGxpvdEsqBlHtC/6ojOSh0CZAL4zwYVDyUbUyiAgh59MceUCSAO2nxijikUgByxsbIxZQLMozaiwx0IEAlopK0ugdqIBIPbjfQshwDxRmZgmoiEEyAeSyzAb/0WeI9AiNCSHiM8YadRs5y6V1HsDuGOue4dIYAgAX4tWLO8BYEIH/fW9LdC84FoGVl2vJsq8J4bMhlza9cSNxsvP50iAlEyMn/1lszSncT5tK5J7zkL+zzhZnftus8dZlzA9lvDe//2QwAB+cBOohQdgNS+C4hulTzX9a0rrT64t4lfxObaNqWP0coCBjmwy6KY+PCW5hzM59byBfCzc2PdobUf15a02nSJ/+FtiT8xnRr7o1nVI5UEDKyu1SUwhdPokNwal51V8MbET6HsxKeQU528Z2Cg7OTZxHn2RB6YgeX/Z2JPjBXg49eVP3zynmC2OBG9p+PWxNgQGpU9EsyeZJKSS6kHRqHzDXeIC6WNslAq9QAtqWilEzFEh6XNRQ3TKJ0Iceet3kbRWij2gLraxnzgSvarhXMpFEAKm5gTdMlcigUwhRRto+IOgYVzKVnEnGB+SIoayp5C8YtXcgrnEvwHx11zrwXELx+K4byopVCAZXtU1nGGuGxPXjdasOC+8xuz5wp8kgUCVwAAAABJRU5ErkJggg==",
   qC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEdSURBVHgB7dmxbcJAGIbh7w4KyoyQDJA+ZSaIRJXIKZINknRpEiw8ALABFCCoELAAOzAAjOAFuONAokFwBwLuB/Q9DSD/Mn7NAZINEB1FhQZGWVIxUN+AvUNUKlcWzZf/9o9vquDbOKy+16zCr3taQnwld3qfXp8fVW88Ge8aKvr2YJX9XD6auXkop90ZIuqnb/e6oKda48u9THfN6cB+Vssm9sFvvKd36YYCLh4DpDFAGgOkMUAaA6QxQBoDpDFAGgOkMUDa1QcU9xkaZInFheISksYAaQyQttfP6KG2XY5fXy7HifET2GZ5pt2fH2Lgl1jazQfkkOc9Bm+AMWhAmIFt+bYHb3T3s6TuKj8QuFt4BrkBGuW/Tgqi81kAtq08LC23+8EAAAAASUVORK5CYII=",
   $C = "/assets/png/searchIcon2-678166c7.png",
   e4 = "/assets/png/bankLogo1-e5dc8d25.png",
   t4 = "/assets/png/bg1-3474c7fd.png",
   s4 = "/assets/png/bg2-78c2b28b.png",
   n4 = "/assets/png/1-bfa3f309.png",
   a4 = "/assets/png/2-79ed5c4e.png",
   A4 = "/assets/png/3-21c2fbaa.png",
   o4 = "/assets/png/4-f425c40c.png",
   i4 = "/assets/png/CancelW-5d1e136e.png",
   l4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACwCAMAAACYaRRsAAAAM1BMVEUAAAC3u8+4vNC5vNC5vdG4vNC3us+3t8+4vNC2vM+5vNG4vM+vv8+vr8+5vNC4vNC4vNB5o5b1AAAAEHRSTlMAQN/vj59gIM+QX5AQEK+/+pPJwgAAAbpJREFUeNrt3MuSokAQRuGsKkS8/+//tMPEbCYygDCbjs7CPt8a5QjKAos0AAAAAMAHKsPUtGywRdeV7evVFg1aMZ3OFvV4akOxJVUrmi0p2hBNPlfFg5tW1Hiw6vkbey+2aFx5VRtt0W27+B4IPmk2lYelePz75M/AAdbsZIlOmpXQ5tVSvdw3b9skabRURdJk79Lsbqnukloo2BL4BoL/QzDBDsEEOwQT7BBMsEMwwQ7BBDsEf3bwTbpYonhDKZauhwb84hM6SIMdSQ8XRoK7QrBDMMEOwQQ7BBPsEEzwtmur18TgeEOVWkawb9i/u17fgWCCCSa4q90RvGzQDsPPBxftUgh+41+THS786AgmmGCC+9ndLwxuUk0MjjeMtY0JwbGGQ9+qIrh/BDsEE+wQTLBDMMEOwQR/0aHWeH/2clwc4ISWcqz11X8bDnVR+uwnZQgmmGCCCSaYYIdggh2CCXYIJtghONTQ+hgjqdCgzmKpxtCgzpukl6WqoemxpY9hs2d721OzOmaN8y2v6BG7Vzk/MEN774jnhBnavjdUfMqdof18mFk0eUqaod2mSwc31AEAAAAA3+4PU1FviV2McX8AAAAASUVORK5CYII=",
   c4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFySURBVHgB7ZntbYMwEIZfVR0gIzBCV+gGjNAN2g3CBu0GHaEjZISM4G7ACG99xYgoasD461zFj4T4AfbxYN3ZGKDRyAvJoz1GlkdiviMG6YD6DAiFy5vvUBiJ6WKPCGV+BVDCJ/4D/jlNQJsmoE0T0Oa+BewcYxiOQQIeUTffiEF7KeFDS2JtmoA21QrY2nFwZXq13JaYB0Lr/ac9uq2bqhwBK320px7TPPCMUDTmARuuvxi9HjGUFuD0IT9vJAyIpaSAe3jjQn4gBYUFTnPSSwVCCkoJcNr9mx++QypKCNjuXy+S9gkpyS3AZfdNeENqcgr4JC09ZuKtIDkFzq77M3LFzyXAZdfbrCVtlQJXSdtt3FuXgFSZPUlblcBV0g6ebeoQ4LK2F0472lUj4JW0yeOnEOCyTBi5c5mgLsDItX0KgeCffCFJ+0f735FDKBKY25gbbY27/nXj+gv9iPs2kA64/qN7TUCOQ6CAxBzQaOTlB9GrTVQVYX0fAAAAAElFTkSuQmCC",
   g4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIBSURBVHgB7ZnhUeMwEIXfaq6AdHC6Co6rIOngKAEqwDYFQBoIpgJCB1ABdIA7QFRAKvCydsggZNlRAoMFo+/frnc8u9ZKepKBRCKRGBMKDeQs0/g6VlSWq5DA3gIk4RmU+g/GoZgao0AViCvU9aUUVHkjfE7OijN5co6YkHxosZh33Q6S/JF4rxAjjJzKRWm7VCeIcIZY8eT2roC270fr9yAmkuOB7XBGQGlEjxoqIOqvv0HbhsI3xymANeLnt238tBFA0PY9Mk+24bZQs0kYxIsB6qXt8OzEjWhTjf6ZIC5WTfKhIi+RCKQ7BwqR0owMMc4BwlIkdW473xUQtZTewDgWSb3cmO4yeoD4mdqGu5HF1jZb+XFS4tuRChibXzvErsDUvZshnjmOSpa6Yb1C7blD4xMILcCA638+IdWKP1IPaFawdUwV8kLO8hJEJ/ggTguR8UYxrvtUoPjN68iY0ORfX3qD/Rg6D/RAPO17tB6BtiUmu92fqik+AbeFjD+MZpwXjzIS991HeDs7kLrj4lTuMnnLHCAtpc+wH8Y2nALqamBQ5EvjCMNoMOvtd96M/amNbXXVaF48I15JYehi8cd2dD83Y45Y8eTWKaC9/Y2xCMLcltFv7h7Wl6iUycT8O6LMliWab5slV5boe1/ALr+YmnnxZXOj3V8SiUQiel4AExucouBknx4AAAAASUVORK5CYII=",
   r4 = "/assets/png/bg11-8d5da6a8.png",
   d4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7ZmBbYMwEEX/oQ6QEegG7QbZpN0gwAIhA5SyQdNNGCEblBG6QLkepFKrKrYhCjmj3JMSQexI92wfSHeAYdw2NGYSZ9kKSbIB41luU8xHS6/V/ZQ/3IUmcJ4/iWctwa8wPykmkvgGJfiNBL+Xy2sE74ih+Og/rnHnDsixSSX4EvqkvkH3DiTJFoorPxa3ANMDFoAnB3jpAsvABLQxAW1MQBsT0MYEtDEBbUxAGxPQxgS0MYEL02IiwdLiL9SAv3ZycaC6/kQkjBMg7Kh6KREhYQHGXirGJSJlRA5074iY4A7IeW/+//ZTLU5xWSb3BnqCOzA0NyLGtwMtjqvc10ibvwPnrNRceKrTOJ59oi0ixnOEulq+5HlPay6KaCWcAsPLirt8uGGUIvEm+bBGZAS7lJwVmcxS79ZI3p2MNfgUorqSDmX3CGbJCTpAhxaGYZzkGy+ZUHii/rz/AAAAAElFTkSuQmCC",
   p4 = "/assets/png/c2clogo-e9e3330b.png",
   _4 = "/assets/png/c2clogo_a-38a8cfbe.png",
   u4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEESURBVHgB7ZjREcIgDIaD1wEcoW7iCG6kG3TEdgNHwHBn78DjKNjElPP/XvqSEv40JKREAICucVsG3vuZHyPZsDjnLiWDGgGeDGEBxT0OJLSQNLWBO1HnQIA1EGBN9wKS0mjctGpJmtunANOmVUvck4YtgyORCzAOsTX/IyBUKJ9nrrSdSYHuv0DCGio6KLn94RBbAwGtcApP7yp1Jmm0DzEvfY3K6kiN8DvP4v40BYSIR/3hQV/A791CEEoGmgImzYa2OlERsDd1WhxpCdiVOi2OxAXwcnf11ImciQoI6aKdOtmRUmoi8zozdjIT4zZqDe5C1kCANT3+mSuW0YUAAOCXvADPhiBQvpzxlgAAAABJRU5ErkJggg==",
   m4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGQSURBVHgB7ZdNTsJAGIbfb0LAuBCO0CPIEoyhnIAOxoUr9ATiDeAGcgK7NzL1BGCMdClHwBt0p8Sk4zcVtGqEJuXHxD4shoZp55lvXjJT4L9DyzpcqUGpJHbOoWEhLUTBS/jcO5H1SWKBvjd65GYfqyOY6ml5LpFb1PNa3duzwSda6y5SIogaGnAKyLf5sr1UQEBYpiXQsCmrLlJyox54FcghEsXPMbbMjwqYss9nDhI1cPq4bBbbnyIhGhS8YjqOhy2RQN/zB3y7HX/UrLW5dDYSYpJd4I+69TuyUekmEnifoRlcBwThIRW6ZMLGwe3w37h3JusBlglw0OzoVo2Lpqy4SElfjVx+aGsPeYcv3d/6bT2EmUAmkAlkAplADmtGkGgpz6+Z7xqh2RcQ6vBuYwL6y/YeHUGHR/LA3ZgA77LufMYhwsmxPBzGf1+7gBk8PuPv/KUQ6iBaIz46m9NraghR8EzZF3eboZRvaQr5JYRKWB3jplMtI4nAhwR0mw+gRaSE1/5JYPdSynKAjAW8ASh4iDyASYHvAAAAAElFTkSuQmCC",
   v4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGrSURBVHgB7ZhdUsIwEMc3qTD6xhHqDfAE4g3wgZnSF/EInAA8gdyAPrV91BPIEbgB9Qa8MSJN3EBhxME2X1adyW8GutNsm/8ku9skAA67EDBkFYYDCuBDeSdZM44jMMBI6HsQdDilLzK+OWM3F2k6A03OwAAUOS3MiAO8nnbiPiHkztv5XoIm2iMqptwDmKKQrJkkpQLW/f4CCPHRvNcNAQqaoMjR1uD8ocoXR3tYmI+8222BBkcjuu712sTzql9E6TV2PkZrSRi7BQmKMBFhMIE8f5Z5pvEppg9CD1P5h2CcD8+TZCLsQzLlAHOPkNmRJ+ed7fXrfdtw3sZ/MZNz7Gu5u8WX+Hvau3ybTKsg8DFTF7CrgdrZKsM6DEU/fkOERhyfrB7ayVQ3TqhtnFDbGH3rBaI6UEoHjLEIFx2ZbJsqxiMqhGCNG4mrSptyP/BPcEJt44Taxgm1jRNqGyfUNsZCccExA7HX2WzmKm2qGK+eimOaK9U2VVyM2sYJtY0TahuZ8tR6C8Mx/CyVJ4hSQsn+LPQXKT1xxu3uAHeQPtQhhLGsmaYROGriA6mkiUPGxSz4AAAAAElFTkSuQmCC",
   h4 = "/assets/png/hicon0-f77ed8cd.png",
   w4 = "/assets/png/appeal-6e70b57c.png",
   b4 = "/assets/png/hicon14-c2c6ca62.png",
   C4 = "/assets/png/hicon2-147f9796.png",
   B4 = "/assets/png/hicon3-88832321.png",
   y4 = "/assets/png/cancel-0e9b3ff4.png",
   f4 = "/assets/png/hicon5-5edd50a0.png",
   R4 = "/assets/png/hicon6-9e8572bd.png",
   E4 = "/assets/png/hicon7-17c43b53.png",
   I4 = "/assets/png/hicon8-a0b773c0.png",
   S4 = "/assets/png/1-7f0714b7.png",
   D4 = "/assets/png/2-9316f0a9.png",
   G4 = "/assets/png/3-b1060d1a.png",
   U4 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALvSURBVHgB7VrtcdswDIV7HUAjcIN6gyobeARvEG9gbeBskG7gbKBkAicTKJ1A2QAFI7CCmFikKOjjh98dTr4zCfAREAiSArjhhkmwASUgYkaPnOQ3iSHZkmQsFh8k7/x8JXkhed5sNh+wBhCBnKQkqTENZ5IdLAVrnOTiDaokeeD/DHvJtc9ItvxfwW0lKpI9zAUeoBxEzQPLEnXtmYSDnRwDU4IM3GMbQvZ5ACV4hFR1+4aOYtYeUjwQYcN66I+wcwRNeCSmmamuvYM6GUHCujuHmcCJoVYhw++EwxZmBjapfVwkcLzWo5QoQIRZnZTNsF0jHmFhcHKxKId23HPHCqfO6XHjyUR0xFcB2ObzPawEIsQusR12zhuwMgiv5DGNz0t5I5QZsSmFwu8Kx6KDgRlhk0roHRDjs57J+pTtohgrQ5CoQhOIbcHaIfzDa5fz8wVmAqf3PTSbrjvaaL0HurzxM+9TWobcq4khnhB9XNQ89TVyi+Dk5UgKCe5ngllVpDf1Et2zk0SC+/5/4fsafQLilbp6LLo6HUNC6OgfZwKRQaW2BgnWEyQyOLRiySiSiAqtihsZGKa8l4wWCWHL4tLXyJUng9PvNTKaJFjft4v2T6/dX37mJE8wALSQvZLyO/ppDRQcwgaGLXYxcEvD29UWqFCieJ5R84TQXwajBrsbmOS1RJDRJmHEBGWhxo5xAeONqi6s2O5cw2GP7clFDSsDtlk1LhlhW3MtdnriQ3gjfucqXvoaJ667IsdjMPUcQbwrJ1gYYi2KO3jwOhtcxwHdvYgOAynA7mFyDjMD23Jk/GRie3JhZ2S281/OnrXGUiCVFmozE2dPHp4XoAmPzCOi/nERNpXFaTISwtBBuLtCxUM8nPBa75pBm83kbe4noRQPsQeO2C0yS8QZDwfx622sG4QNQbug2ozjX08b/u+EX6+n7eQsft9+xjTUTCiHkZjiEw4rv6D5dMNA9xMO9/mG3cA9w5o+4bjhhu/xDxyfG0qvtudVAAAAAElFTkSuQmCC",
   M4 = "/assets/png/1-a2189950.png",
   L4 = "/assets/png/1_a-c3c7a041.png",
   k4 = "/assets/png/2-bd839975.png",
   T4 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMvSURBVHgB7Zm9TttQGIbfz85SqdDAyBTEilTuoGZpx5YrgLkdaghDN4LESIhzBcAVUEa64F5BU4m9WcpYEEVCorW/fiehakLsNOfHKaryDB58/vz6Pb/fASZMKATKS+CNjTUwtvBgoEsQH9LeXpSVWsotxxxI4QoeDKwerbxUwrCiYVjpf+MvyV85wjhgWgGSvg+nKGrnZR8qZKDuMCyDvAuMA56eoah2OWp2DxrIH5GKqYXCoZaOCIWWkC7pRxSPdhv6Qth/j6JhxNDEwJGfqmtp2a7PVAxNtIUUP04o1h0fCgNHoNaYYxQF8yEMMBOC9ACFkcYwQGsd6YXXq6fyDDITFxaA2dnsgjc3wNkZcmo9pkbjFQwowRSmbVnlg4H3jx4Bb14PL7uzA3zLWFfZO4Ahxo502l2vfpLn0kDCi+fAzEx2oQsRcPIhK6VNjb15GGLuiIK5Kb9if+B99of+pS5swwIrRzrt57mih5UbCsNZqwemddji2ddhLYSi3VjUNGEMNalet9722DuiYK6Zrfayy23UQzjAiZDOtoWTZT0xkpeTFTjCjSPoFTNKN6OmyjvsxKfdPgqgc0Qmqsl/etozo7XVyq2OAd1x5RZnjvRRKokQX1Y+Lv95qaIg3hNJbKMAnDrCYa0M72pLFrfhA5i8COnjbZPtem6VcASH78SFH0ejL45qsE8tuxLjrmtpiVBIXvp+2nHRAU6ESFSyYbZNkTLetZNopv1ea3MzQJKewgbfW6Zdu5nM3pEk3YctCTdgiZWQTqAbqMAaXrqryxg7R1xG65newgJjIVytqrN1Bc4QV9R4M8TcEcYqXJOwscNGs1Z38bv9giLQjML/xswR7zZAUXhXazDALPjAtHp3g9TP4mI3HDQKefEtppfyjKCJdtfKveyZmwM2q9CiXge+nt9/K+ea6Xnd7qXviO8HSDPcOJcPOjnJj2fdR8W3BkUoyihdq+1ODA30haRpkGukSTwri4TV1B7rFDEY7N4zFI92G//NZaje9bQv19PpmK6nPbmeThxcT/NGdV/iVWt4UEgwLycOlj/YU/4skZBWfwDhH8M8hqvxCRP6+AXr3BzuT3UFZwAAAABJRU5ErkJggg==",
   Q4 = "/assets/png/3-5d3eefed.png",
   V4 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOLSURBVHgB7Zq/b9NAFMff2Y5EJJDCQmGL6MKARCIxIBZqpJTCQstcCcrKQCUkBqhUVyAGpmZghMIfgJQJonZI2JGaf6AinaBbpDZqqto53nOSqrLP9vlnMuQz1Nb1HN83793du/cCMGXKFD8YJMRiwyj0TLPE++wxKLwInJeAKQW8FgZvYh28b+Ndh3H4BQo065X3TUiI2EIWdtbmBoOHZ2eDln47iYOaClb1x/yHFsQgshBbAId1vJ2DZGiynLZS1402RCC0EHKhY9Nax29/FdKAsc28pm7UdKMT6rEwnRcaRpGfWg0AnAOpwtosp+phrKPIdqw0jBI3rd30RRDc/sIebb8pyT4hZRESoZhoibCTOT4dFfq6zEIQKCQ7d/Kkg4tAOcjNfF2LJvaYRRD2GGgsfp18hdir03hFDOHFwVi88XStgUuZf2CCYAx0r2jA0yIoYgsmjOEGLERokco2rlJg7sIE4mUVoUUUsF7CGJi9dDWwD1plUdTu5VqLkDGvbj6BT3dewN0rN4K6PhWtYC4hFAyi7kw3PhJRuVaGg14H9g7/BXW3jwvORrdF+olFs1KcF/H692c4OA6OFUXu5RLCGdyDjIgiwoa79zbRHMnErSKLIJhyy9kkEMKKkDKxRNjw4MkeZqLP5AvwXX8Ly7O67CMJiLCRESLPRS1vX5ev35cSk5AIISLXkv70vcO/OKAv0DV7gWISFuF6WCCkH+oNMmJSsETb2eAWwpTQaRk/MWm4ExNYRHP14nwfIjAS8/H2c1sMMZO/nM6coASfA5dFMLqsQUSclklrYlOW0t3koKdprTAT3sl5MamIQLcShfHC88iD7bVNvMQK5WmPOUIx3dMeJAkD9rU+/27F2S7cR+K41wiyQtIiCDwrVcXtAoama8KEge7T9Mpxee7saJUNmDQsbcXrX55ChlapwuRQrT/0TtL5xlonOc2ghDKMHdbOdzXDr4evkCam9pml6nGW4/hgZh7HUFvyLzMERr9kzj6MSQxWtPDdS34uNUIqjN+ZN1pDMW3IChLBVZ3eLdUdQrDwE9OoakaFHnQnGUuMCHWwog8+yallSHc1q+a7ajmMCCJ6MRStA6q5xRMqhtJmh382opasY5enKU+scnOVK1iijlKetvg3pkItbs09sR8MEHaWkhJ8mBvjlCBgrHj+BwOM9zucDm4W36fBXzjSWkHL6pQpU5LhP2fY2Y6KcIURAAAAAElFTkSuQmCC",
   O4 = "/assets/png/4-ad3ed5fc.png",
   N4 = "/assets/png/4-ad3ed5fc.png",
   F4 = "/assets/png/1-e146eac4.png",
   x4 = "/assets/png/1-7f0714b7.png",
   P4 = "/assets/png/2-e4cd29e8.png",
   H4 = "/assets/png/2_a-30530371.png",
   Y4 = "/assets/png/3-53264d1a.png",
   W4 = "/assets/png/3_a-9cfda764.png",
   K4 = "/assets/png/3-5d3eefed.png",
   X4 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOLSURBVHgB7Zq/b9NAFMff2Y5EJJDCQmGL6MKARCIxIBZqpJTCQstcCcrKQCUkBqhUVyAGpmZghMIfgJQJonZI2JGaf6AinaBbpDZqqto53nOSqrLP9vlnMuQz1Nb1HN83793du/cCMGXKFD8YJMRiwyj0TLPE++wxKLwInJeAKQW8FgZvYh28b+Ndh3H4BQo065X3TUiI2EIWdtbmBoOHZ2eDln47iYOaClb1x/yHFsQgshBbAId1vJ2DZGiynLZS1402RCC0EHKhY9Nax29/FdKAsc28pm7UdKMT6rEwnRcaRpGfWg0AnAOpwtosp+phrKPIdqw0jBI3rd30RRDc/sIebb8pyT4hZRESoZhoibCTOT4dFfq6zEIQKCQ7d/Kkg4tAOcjNfF2LJvaYRRD2GGgsfp18hdir03hFDOHFwVi88XStgUuZf2CCYAx0r2jA0yIoYgsmjOEGLERokco2rlJg7sIE4mUVoUUUsF7CGJi9dDWwD1plUdTu5VqLkDGvbj6BT3dewN0rN4K6PhWtYC4hFAyi7kw3PhJRuVaGg14H9g7/BXW3jwvORrdF+olFs1KcF/H692c4OA6OFUXu5RLCGdyDjIgiwoa79zbRHMnErSKLIJhyy9kkEMKKkDKxRNjw4MkeZqLP5AvwXX8Ly7O67CMJiLCRESLPRS1vX5ev35cSk5AIISLXkv70vcO/OKAv0DV7gWISFuF6WCCkH+oNMmJSsETb2eAWwpTQaRk/MWm4ExNYRHP14nwfIjAS8/H2c1sMMZO/nM6coASfA5dFMLqsQUSclklrYlOW0t3koKdprTAT3sl5MamIQLcShfHC88iD7bVNvMQK5WmPOUIx3dMeJAkD9rU+/27F2S7cR+K41wiyQtIiCDwrVcXtAoama8KEge7T9Mpxee7saJUNmDQsbcXrX55ChlapwuRQrT/0TtL5xlonOc2ghDKMHdbOdzXDr4evkCam9pml6nGW4/hgZh7HUFvyLzMERr9kzj6MSQxWtPDdS34uNUIqjN+ZN1pDMW3IChLBVZ3eLdUdQrDwE9OoakaFHnQnGUuMCHWwog8+yallSHc1q+a7ajmMCCJ6MRStA6q5xRMqhtJmh382opasY5enKU+scnOVK1iijlKetvg3pkItbs09sR8MEHaWkhJ8mBvjlCBgrHj+BwOM9zucDm4W36fBXzjSWkHL6pQpU5LhP2fY2Y6KcIURAAAAAElFTkSuQmCC",
   J4 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKtSURBVHgB7ZlNctNAEIXfqDhAKicwNwiLrHE2ZBmWsCKcIHYugHMBo5yA5AbJ0mzQPgvCDcQJ0AWYoVs/BOQZzY/GkVLRV+WKLMnKez090nQLmJh43gjsALVYzJEkJ1BiDsgCQtxDyluRphkiE8UACd4Dkre0+ZquyH/3DKeymQxS3ZKxjAzl6EmwARJ98BBlNUcQKqPfN2buEYCzgSrKqEXjFOYoh5KTGhodee2Tap0G6tQ4pWE/oW8HiC/ahHOqGQ2o5fKMDqcYAwIrsV5f6A9pUItzijq+YEwoLEW63gpooj1ZiDOMDSE+6HbrDVT5PjL0mhI8cSYDQzMOA4eH1SeAFxia42P6vHn4fncHH4Ydgbb4AIYz0Ba/2XhHnxnGgE785itCMBnIYSN04oWLz3U7DZNYFLz4MMLC37+rtvf3KxEu9Io8a9pGPwJK/oArLIiFWc/rmTZK/tTtNq2Fuqsjnmz/Rt1mIkrOC60m0xywl3cswMVEtAkrM93eLgMFbNhMRLzbmMrMxHByQcW2W5FtMhFRPBSXlno6lhK/qYRL5nChEdZEv/107SO+RNwYj6ADtTz/BZ9CXjcPeotHLj6vX5oOdj+JFS7hQzud+otnDRddh+1tFZF8p80ZfGie0AFrmxad0Wc6R6CazPIjfGHh/cVbo89YF3Pl7UvhBo+NwhW1Ua5spzmuRstRyPF45PQ/rdFnfHqjs3o+7Lq9yGn7yrVz7VwPlBdU8gguT+hwWPyRT9vdu71ettVF8g3xR6IR79VmD3o/UKcTm5ghDrlv5BuCSsq/6aTUNfrCdziPnN/Sgp7UnexP8B+Ngu/zuo6zD7Hekc3oUitTB1nzi0savVX5oOxJ1LeUFiNFlXIqjfFyr2FXr1ln1VKcjSiOMtXYMo0R8YmJif/5A5b0JTf/pQ3qAAAAAElFTkSuQmCC",
   z4 = "/assets/png/selectupi-a393f4a3.png",
   j4 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA0CAYAAADfRPtlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOCSURBVHgB3ZpLctpAEIZ7BmNZVBY+gnKC2CeIfYLAxgV4g0+Q5ATGJ8A+AayA8gZyApwTwA0iL7PzIlUq81Cne4IJYElIQkKPr0pVIJoq/eqZ7p6eEeAAlsunlq43CgCf6esZXQakE5OuiY34Q+/3O04GYvvG69VVGY6O2oB4CtnCJKF320Ll+pdprdaCQmGQQXGMIYVoz+r12/WbK4GzavUWAb5BxiEvNqfX162372qIWtVqg9VDnlgsKtrj41AJfK3VfkF6A0lYXo4t62OBvSeEaED+OJkXi78lDc0vkFcQLzjIGJBTaGR+YoFnkF8MCRmBUth3/Fe5BCILArlCuTzp9e4hBEeQbpQ4Kr9MCElqBVKCnhQt61IMhy9r9wwISCqHqJO4sKROYJTimFQJ3ClOiMCi0yTQXCBWvDyHiJkVuHe0dCMVAmdCVPyIk4g7bd79BxKGK5QP3e7Ej+0C4BkCkmgeFIgdrd/3XaFIKZEmIgQhSYEmeeTOj+Gfev3sGLFFQeYCApKYQAoqN37m3bRe/0rC7oP57T9RCDQpP50G6cTRwz6QuCdPG+rNzkol9loD9mBfgSq887ygzsAI/NWKJnvEy0CJ0/UR2e29Vg0fRamqeMtdfCmhPtZry+asq91KXEQL8XACSdwMYCMx+xRpurXYmajFMaEEsjin3MUijzXtnD465jUOLODBtFRqY8QtlMAC+SG9ErPodHjoVmDLk1RIP3kFFrVtgFiGiAkskILJLfdSvWychisV0q45L85tA0Fd7VAphj2y2JHL6EUYVH2M6aOpdbvnLjYXywgcC6GjKL0VfrCxlzeVJ227QteD0+/qBcS8JxLag+vQQzaL3a6vsmsdmndjjLkvG8lqgres6EUNOMz7/c9y3sXedI5yuVSe6joPWWOXIRfPNnkdDkDU60GeUyMvkezlIuIADkQcC15PkVSp8BazAQcirhW9Erk9JzklHHqbPM6WhaHqyjWRSWyTx9qT4ShJgUeJ4qgJCexFRpIHfTCkK/I60w+H6qolIo6RYTYVM4MQEylc1m55AG37WVLr7ifkFBqdQ6lrWifMrk0GUO0RyStw2NFKyCL2coGtoqjW6w25Vwk5gQr51bHKjfOiVEo1uSUBGYYdddLrrcrBdwdilycPE6k69oLjyHx+wycMN2672S+F8jm21B9p5kygW1bHaXf4LxD6pofARGu7AAAAAElFTkSuQmCC",
   Z4 = "/assets/png/successicon-14b4ca02.png",
   q4 = "/assets/png/uAmount-41b6d3de.png",
   $4 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAAAhCAMAAACvFAaeAAAAzFBMVEUAAABtbW1tbW0zMzMwMDAyMjIyMjItODFqampsbGw1NTVtbW0yMjJsbGxsbGxtbW1tbW0wMDBwcHBtbW1sbGwyMjJra2tsbGxqamoQeDjtcyMQeTgzMzMQeDjqcSUQeTjsdCLrdCLqciMQeDgQeDUQeTkQeTjsdCPscyMQeDgQeTjrdCMzMzMQdzfscyPrdCDncCDvcCAQeTftdSLtdCI0eDQzMzNydy5tbW3sdCMQeTjRdSYdeDYreDU5eDN+di2Ldiy8dSendiredCSq/gfPAAAAOHRSTlMA359AIGBQEDC/MO9wQJBgsDAQz1CAcIAgIO/fj4AwupWAYEAw78+/r6BwcG9YUEAgEO/fz7+fj2tPKssAAAKhSURBVEjHnJNtT8IwFIXP9sUtC4wA2QZEAcGoJL6gJrbVKOj//0/ecZrWwF1MfL40uYXb26dnODA0xiQ4pjCmADKjk2T8n2kAXACTMwR6Uk4RiMUcKE0HKX+StO0WwGaDQF/qJY6opFhxr6tfLcsAwOV0i/kcgVzqGQKx2OOiUnKvAnBjl5i5FfCHPtPOnp6SGw5Q8Eg82+nEuXN4xoexj8iojyh7CRcD4NFa++rc1RmivkrTV0On4gClP/Je+u2dc3cgI03fgHdRGVBfKksfwMIKH87No75C1TeETtIOwDnGAF6ssJMB1//T17T6Ypq3tuX73b+Irq/kXbJUYfA7zdQnfMqLBH09XV93msuY5gX7vcmFV536EurrTHMT03xtBb7IbfhOFX0jAEaFe4WPhQ33nU28vlrVx7OK5JS8ATJ/rwe22/l2yDV9KaNQs61CTPPStnw597Rm+gRFX1A0hg7T7PXtf9gngxUEoSCKjm0igoiUrAcJWUjgpk2Lifr/39KnF+7mjl/gARFE5vLuO/PDeuj6Lqgolpo2p3y3f8gXHKmiYaUpcK7TXB/HLdd3nsYqmNW7p082Bexjw7D3mhpZL09N9+0oWkBBwyQ7ZCVvtzAFTWk2NEyCrMZ7e3Cc1eGCzoYdTcGs9m52exq/l4UkzzmM76i+Cv+8x+dqK0OrYmwiAQzEwAFJu2A2ceDsS7j4+y/t7avhhUAwmn+LkA/Z+8gjLWka1fTsdO1fvrRE9udumnp+T3XUc00th9LxqJGJ0jU+sn7SYZvxbKmPqzhfeizCkiF1fYKOtrbvWynTiaDwSv94CsriVpDlVHVRkR4tDd7d5M5cHxGII1P6FO0AqDaLagtq5bWxMWi923oUguio0fOxSby41zLbVUyaPzg2qSNn/CHUAAAAAElFTkSuQmCC",
   e3 = "/assets/png/upiline-0a62bd1b.png",
   t3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIASURBVHgB7ZndbcIwEMfPqOozI9ANOgLdgA1gA+KklfpW960PbZJOAJ2AERiBEWAE1L4hwfXiUHBIQj5IsWn9k4DEOSf/w+c7WwGwWCwWywmwrEZ03SdAcOiwDWawBNYaM/+VH15IOUDig61482DwzHxfqE1XKSOEQfy7uWFhuAADQMfp0AjMSduQToV6rZVhL8PGFPERipZUSLfgwrEO6ObiHbiCmii1AvJy9DmoNQLbWiEgzgptSrkOtQnQQL0Q+qkVybYhaOCfTmKE93Qj+wAN1JrELPQFck7xz/qygRxi4ZvIskVHtIF9zuKT6zsWviygQWpnIRYEUQYqXvSxrwl9d+Lj1YwmO6cF2Rga4lfngMxWgF2liTIWjNC9D6Ahao0AOo+0OlxN45PssEBHqROpi5R2udtrIqQqj4AiviM/dIye10vYcN6ntbsouFVm36pUcuBA/F7IBieyMkubh9tompe8ZaJvHUo7kCNeMQCBrjcCto4mbbWtaNSXe1P5jIqUcqBQ/M4QB4U2+Z27MqTkCJan0IHS4puBnrWeVQmpow6cWbzyYBmOkzIhleuANvE7AdiLQ+q4E/kjoFP8nuhPnFNI5Vb81tHOpoCQW7ntnlg31gHd/EkHlmAuKW1pBzL3u6aQ3ndnv+DgPNzud815wSH33cl3AxaLxWI5mW9aTsutJpZ2NAAAAABJRU5ErkJggg==",
   s3 = "/assets/png/uploadImg1-53f2ece8.png",
   n3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHPSURBVHgB7Zi9UsJAFIVPMhbQAaU0zIQXsKBUOn0Frey1MNHGzjijpRoLsfZVsKTgBchMGiyBoWHGgnU3YeVHDbsgmwD7Fcyye5i5J1zuvSyg0Wg0mm3G4AviOKf0rUeXOSRLQONwjaeHNxGxOV4aLpIPnlGij9MTFZvTH0wNwg/SxJqjDSTN2hvYwSJkMkC1ClgWULaivfYHUK8DjQZWAXGuLuirS5e9yTIrbyCfB87PgEJher+4C5wcA0eHwEsN6HbxHxDbzcHs34AQe7SVG5XZ0IB8Cv0W/CTsjGmyWSwLsa9LMPpNENgzR99lVs5ApRIfPIdpDvaxDGHKGJ9NzOlPcgZkgrLKWA4iNNbIGSgWxbX8x71itqwPtHxxbbsNFcgZ8Fvi2vo7VCBngAXV6czXMc2KGtoscgYGA6D2Gm+CnTGNIuQ7MQvw7j7qCays8srUounl+9G3xIwqYrFZiMFSRFGaxKHH6aRJrwECB+HoHE9qDRjeowcy3EN4zfI3qU4hw/OCyAR5njkK+GLxKqQIaoKlkU3sy4Bew9F/ZXRCJcNbfp56A5wwpYAfF166CiXNRhmYW3MVEogKxwaixhEgeXqTVUaj0Wg0mji+AKRSdnQDPUaTAAAAAElFTkSuQmCC",
   a3 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK2SURBVHgB7ZjNceJAEIW7Vb7sjRC0GcBpy/iwcgSLTACGCIwjMERgbwTC98UDEZg9AEc7g1UI3LjR2z2WbAzCjH4KRlX6qlQlWzOFnt509/QAVFRUVFScAFRqVifEgO/rcFJoieg8+L/OB5ABh0UoOLkIAWtE1Fdq4UEGHL5csIg1rF3IwBmUGHbPBYQ7vsIkIVO2+C8cAQSoAeINZOCPmrcI14EsSaAER0RE27/owxGQL0pAqYQo9VIDZ3VHBD39KSJKtbQkERCuAnbA3X5WCiEfLlBv3xjrhbzVuZVKcmETBwrgabK4Ho1nARSMmsxvuM69gEGJyO2IiOAMMUQOPBYD7dZFF3KikwBSwAHtmc7J5UgsIv6bxXTyOoOI15xWxQUvcQDBb31tkVnItoj3F8kvxtO1YZcQCS+v/GaPU/Zy+2EmIftExBThzCfYAaRvDd8/n+4bkjpGdAASPRwaF4nJGTO8I6azru//GB8amcoRNVlIRT0oIianM1Mkp2EiQjB25E0E9SElIuZpPK/z0rj0/cby8AxaEuGg7TeNP5hg5EhWERtIUXvWFfoA7PhtWhGCkSNR17bTuUX5/t/nF6HBsTadmxRS2YuE68j9SM17aedZJ4SpIcK9Gi8C3TgZYqMQDRe9Di/b55GadUzGWyskwuWlFpi4Y7sQTezOVycsNgqZQsJeinG1GC4FSZOsa6w4fT864HTlpSGhD5F6xsttZ56VS4s3h+FVq/ldapLpnFyOyA/C5lFGwUhh5bgY7nNnE+uD3dSdUmQtQdyRxopvw6TnpREiSGOlxRA8bj/biRHOCD+5mvbhCBCsa2lDLIrLDsfOlGNHUrEr/08Kdo/FeGA5LGioxQD1+ej3tdSn8bE7ci8x8goWwcUwhAw4SCSHAyGcHGlx4fark5KKioqKCuv4DysHQAcYRy1TAAAAAElFTkSuQmCC",
   A3 = "/assets/png/wrong-b3102a79.png",
   o3 = "/assets/png/wrong_1-b1d69653.png",
   i3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAAbFBMVEUAAAD+Z2f9aGj/aGj7aGj9aGj+aGj7aGj7Zmb/aGj+aGj/Z2f/cHD/aGj/aGj/aGj+aGj/aWn/YGD+aGj////+e3v/7Oz/tLT/4+P/9fX/xsb+cnL/oaH+hIT/2dn/vb3+kpL+cXH/q6v/0NATJjb9AAAAE3RSTlMA72C/IICQQDB/368Qz5/fcK8Q+V9ZJAAAAgBJREFUWMO12OlWo0AQhuHe6CBrJgVkj47e/z1OxImf0vRWR9/f8TlNddKAwp9Rtu57ute32qpS5NaoTtIiWasmg9hYSet1ZSqhKZDeJBClpki1ic3iiRJ6ChqmpaSqwGKUpMTk1mfgUviXBIOvwOArMPjKlhipxd5KDiK/73RFrNqGPxBUwDDEDr/qmo/oh7Gh3MbbcBhp7nEy6FzjOg3DcPu2lDLXuByH9+jrUrpMY38HsBKy78YujzifPoxppI9kc0dU3kgPMAhf/j95I3UM6u6IzBqpa5DE3mSMdDhe6WtGqNyRwsBQbN5IYSArdKoxDf97ce5mok0zXo4P4+LehUS/+PD+6hkpDBdxP7w/07LnT+OVVlog86KnizPSR3tKQubeRmekMKLIKz6OkfoMIL1ngtMFbMTA7rj7cBox0pBB7eJHvPiz8y3BIL3ytT8Naz2TNysUJSkn8qeEobASN6hcPZT+HhbGW8iQOOxDyuEcQmoc1K4SN3BQ7+SqMqUaND9e2PAhNI1ho8P93KPAiD1caL8SNzQeLXxH881v4H6OpTCr8XrCR4z4rOAahUC7lmdUP/8wLBQHcV56CvZA+AoMvgKDr8Bw26a/SCrhzVRpRou9ZV9S0YhwJvpIqsvf/ocDKjvfPC2IeI2qpSN0qhG5lcrqdt6uqqqtCmzIP+TWD9qaZt1rAAAAAElFTkSuQmCC",
   l3 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAANlBMVEUAAABlZWVlZWVlZWVmZmZmZmZlZWVgYGBmZmZkZGRnZ2dmZmZmZmZmZmZkZGRlZWVwcHBmZmbpTDmrAAAAEXRSTlMAXyDvv99wEM9An4CvkFAwEIs/ESUAAALKSURBVGje7VnpztsgEORaMIev93/Z1gkqUhczJriuPinzKwE8w86CzSG++OIxKBmDIdp/Q5NJcVlvJHc26Z1BJ6nuYTf7Kcywhg96byOoEXpTDDGzXNSLbFu9nY0el1DpjxPW8+rVmjGJmPtIcTsfWpQlYn/3p9x532635DCoMwirCz2Ap3eSbA//3PWMpE6b3DvstF32M7zjdT32a9tv6aQu8RNI2uBTbmr0BcY9YZfMq92J/bhnBk4vwA8VZpAsxI8VbNNIjTKFM61bj/MGHLCDE0iAFQOwzSmtjtoghpBaHgSYAAx3mJQaAUiBgU3y5wGIYZiz6aZq0lITiwnU+7MQQk2Z2q7JI6W1EMJJAMvfpbqZF7lnV1kI2lUbU6WUKeBKqs4mk9tCElwVs9ncIQVoLkq7o8JVmhtgxGXzTMWjVMowFS/kky1VhssqgALkz/B89K6lCCnwAg7NErqUFGAFzo+HZMxfU6xQ/oCVYazlGCuUn6h1YDF5cUEB89cdpzyIsALgL9OWWNqduKJQ5ccCx1MCQWJ+zscLsIIUP1VgxCJic3soyY69eYAAHqb81UZsoi33TTTPJloAz+BXBf8gPPuyk8Ova+C4uv+Ds/IiP/DJ5N/Hpz/69u5liwSLpf6FF1/EcdU4sHSEQ9Leu/jlpa46jggu3/noXopDeAOi8QaEGhsQvPWRpBk/r+c8CuzeRkAlgJq0HeWXJQCGxDZXH56HhNZRRhoTCDmAZw5DOKY7jnPogQMpdKTmxo7UmpiBAuSPqJkBCoDf/OuD2e3/Hy2PH45jONN5M+PSfsBwf5pTeifZdV0yf3DFQv7yXZi2/Uk7YBZM37Af2JSNUqfex9wNHcUHUKFc1K2VvpeLugS6jyTyVaP1q3uVqkWWq0Z0F4Yl2tDBD99Ut6577XbPbXj9wpqxj2BdYjL00iEyIUolvvjiKfwCFvRUSxPTUJMAAAAASUVORK5CYII=",
   c3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAKlBMVEUAAACHh4eIiIiJiYmIiIiHh4eAgICJiYmHh4eIiIiJiYmHh4eJiYmIiIjrELAlAAAADXRSTlMAgN/vv2AQX0CfcCCvMD2PAgAAALhJREFUSMdjGPSAy/YuGFwWwKNo710ouIFH0VyYoiu41XDfhYMGnIo4716CMHzvOuBU1Hv3KpSBx1G6MANYYEZiAta7dzfAHReAQxHT3ZsIb5qhyhXfxQvUoS7BCy6DFdniVQP1QhB+RaYwZzHevYjNJ7J3QRE9qmjAFRWrQ0i8inQvQ0i8iu7ehZCjikYVDVdFvncgJF5Fqcsg5GDK5qOKqKEIOyBdERd2JagVP9tZ7GquJDAMVgAA6r2+C2kh1QoAAAAASUVORK5CYII=",
   g3 = "/assets/png/fail-c3ca10bd.png",
   r3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADsSURBVHgB7dkxCsIwGAXg1+LgIjh4gHoKj+Gsix5DB0FQcPUIurgLXqKnsBdwcXIp0a7FWP4IeQTet6YtfU3/P6UBRP6S+QZu+9midvkRcEPEU003l7HlhNw3ULtsG/nmGwWMel0X+zyRDBFcd3OHADkSpwBsPePxzbt6R0CxGa7/rRa83SlkBgrEV/gGVANsCsCmAGwKwKYAbOZvoS6T5QH9wch0zuv5QHleIYRmoK08rRGTiphNAdjUhdq0DhhpHWBTADYFYOvsQqH/7WP5MQOuQgLMuy+sGfHtFKmI2RSALSAAozul0RElSW9tYDPoegNJcwAAAABJRU5ErkJggg==",
   d3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAACgAQMAAAAcrC+CAAAAA1BMVEW9vb2OR09dAAAADElEQVQY02MYBRQBAAFAAAFU0ROCAAAAAElFTkSuQmCC",
   p3 = "/assets/png/momo-d6d50cc9.png",
   _3 = "/assets/png/pwd-9a974e76.png",
   u3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABgCAMAAAA6hOw0AAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAH99A74AQMM9woL9gkFCvj1/LRELiAAACB0lEQVRo3u3Y266rIBCA4RnOILVd8/4PuxOpnURsZYhc7IT/Yt20yy8IohZms9lsNpv9b+FCDZmwWN0pBGpOJewRSFSPEWSEifJ5UCQrORgR6rjsREAYFFr1JhyMClMhFhhXLESEceVCIIwrDz9P8NgIDeNyRjIIHa3VfbPdtGJ9uYjU2jOIKNov/jpmIsFlrgAd87ZuI4fLnsQZLxFc20RYom7CtFx0kaif2M7vxT9gOWxZS+UvCgXdsozKDuADE7cJ5ZgWyi7meBR3Ca/tiE94C4BXhMv6h+A0ni4jhR/hivCGyJ4I/GmsLxgyCB+BCXcqLOWcVgLPqXHAoSmzDCwwEU6J8pmtBf4QgQH+OgsMM1FfPPYo8JyqarN4wlEA/4OwhYhHgee0nuWjwET6fmOjv6PgiY7Xd9hnuRYg0/ctLe0EC3zKY7UsMtQCEyzUhPEsHJdAvbRrAWL5/m+ChdfpcweuHo4Ch1nDl1woBO4Cz2lVJTTEhMK34HfxNoGJTchlEla4UYB9Ezb0ycpuh/LXmYfsdignlGt6icvQQbTes1IZaS/hGx9BF+ggmh8s+YlPTJjY/jadQJi26ZEdNGWr8znqdWNQPIgXjMvxFj8qTcMJy79WjCpVvx0NI2iJepBiSZZaxURWMsI4MYEPGaFBHibJODqnS9sltJ2kDLPZbDabze7sH11QViOJ2tI8AAAAAElFTkSuQmCC",
   m3 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANaSURBVHgB7ZlPaxNBGMafma2lKEjAg4KC8VS8SAqi4KWpePBSmz0IIRebm7fiWVM3Ld7bT2B7aVI8pLEfoHsS9GILguhpeygoCK4Itoo748y2EY2z/ycmYn5Quju7ZJ/nnXl3550Bhgz5vyHoAS2rXKSUzICQIgF3Occ2Y7xtWk0bmtFioGWVcqDHSwbFJOekBPBcwONcAmZ7nLTBmC0MOchIagMt63ZhxDg2w8GLHKSIFIjeEWaoMPNNmHmyjRTENuBHGWOFw6FBZ4OjnBqHENjed7aaZKiFGjgcGidmDcJEpGmhB6KDZMUeaoEGNhcrcwxYwgBAAWu6tlZXXVMaaC1UZinBYwwQjPN75nzjj4BS1c2UkDkMGELTHWW7+nZewOCh1ETxjzM00G8GwsCZi9dwWvylYQR95vzVaeSv3Pp5/v71MyShrz3QLT4NfTPQLX73+Wbi6Ev6YkAl3nnxFGlQGuBiZogI0iZeBvGOqlGZxETMBn0bAUjx4zeq/vHYyVO+iDhkjLyralT2AGNsBzGRgqSwKLIOG8bZrqpdnQMEodXRO5Fsv0Y9yoSWMc+pUlOAAR5Z3kkBcUxoS1jKbFWzoWosT152CfXuisMxhODuvZH5gty5cf88d3bcrzA+7b2FVvGCUq1RRVwD6/b2QeX6pZviMI8IgkzIc13ixfhvr2+9aqquBU4lPHh1ClpEDDrCOkOo++uaRfwRG0EXQov69mLlo/gXu5BX5UF28dyZqTUuBF0N/RIzhmUkoDuxNURe1sL1sOvhs1E+Koror6IWJXnERAo++PzB/wymmdt0CXDM+eZK2B2hPWBaKy4DryIh8juRXXx09CWRkzmz1rRJSBL1CrFKtxIVfUms2ajnjVZld+KvwR2xxBgZfUmCtdFynhr0JRK8lVLiMo9NxF25jl0PyB9kFFMImBVqwpXPSLLsnnh5vfWoUqAMW9DfE4fi768lWmZPXJHJB8gu1psT3PGHTULxklQlpT+cPD4lXrGryIh8wzFvfyLtbk3mLabWQlmsZJOHST52R7iM8Lr5oJFpCV/THlk5D4NYFOoV5G5Ezy3D27dMayPzC0HrLmWEEVfsVK6C8yUdm3sderXNmhfZVTSIIYxw1wN24H1Z0hHxIUOG/M4PiXOF+DrB20QAAAAASUVORK5CYII=",
   v3 = "/assets/png/succeed-9629ce35.png",
   h3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAAQlBMVEUAAACHh4eIiIiAgICJiYmHh4eHh4eIiIiHh4eJiYmHh4eIiIiHh4eJiYmJiYmJiYmHh4eHh4eIiIiJiYmHh4eIiIituEnzAAAAFXRSTlMAIN8Q72CAvzBwQJ+Qf6+Pz1CwX6BszUUBAAAB80lEQVRYw92Y29KjIBCEZ4az4iGJ/f6vui5b/5oNpQjkavsulfKzp4ERoHOxWWYR7JLVLcZTrZQZNT6kZ6MqEMPymyBjeHhOnvzDzsnT6O8iHAAXOC8v/TFQWd4B2p745k2AmUtZTOeIJBUEmC4ZvAKxkB5vgFyYeWnIjZJZoAOdaDpsFIqOwHTKCHRTdqecMAzdlvlDyRlVE9sjp4TcR9nL6yNwDUuVCtBM7xJEqlbEqv4JRFQ9RMm7fQaYGjS8D8aMkZoU4Q6gcBtEafwsE4dAjbI/VnxKtdPKmBJpthITDOB2iIJWafo66pBLy+UJ0wMJKQwN7oEwdBob6pKAyeDZB9lgKML2QQIiOTz6II+9lBW+D+IhKZcu8Q4BqFPA/wb5SrDSP8QrPfsnm6N4NNj23mYwdjFSP+L+VuC/05Ro6wvF4PmtRq00VE816eme3nZ8+Qbo9s/o3wnv2q2EFGifFRYMR8JLayLz20LcgZXKt2m2d+OXfq4tBS2Qz81wqGVM0FzYZBf1Qv5eW31ASIHklFeVD1s4CBUVDkZOWe4d35aDkfP1rb31INDmci1g5LKNlUsnRAnqAjFpwJaK5icgI18gnL994WA4w4fswuFKfsMume1x9RFGAaDjUHUJM+eXMKOpX+reRLdK8iRzNBcD8gvL5x2yDO1i9QAAAABJRU5ErkJggg==",
   w3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEGSURBVHgB7djPsYIwEAbwb/dZgCW8El4HzwpUjv4pQgtQVApQO9CDwxG1AkuhBBsgqxwEvQiHZAzj/g7MJpPDN5AJLIBS6rvQ8+C8Gq2FpA8PkNCxOz9Mi/GjSKJBn0EJPGIyCYJFfMxrLmaF2vANl5kYDaFBbWsVFZmUiHfwikmhHHk6R8edH2QhPJJl2D7O0XKPivkVog58wtiXZUNoUNs0qG0a1DYNalsLDgnkwkTpmwVtAWr1aM6CGoNlEMaLqnV1e7XPP/qavZqzO8qM8BwN/qvWCegvv1ZxvEfrfI1Vh8zp8WRbA4OSXOEbU2Z6+UmWRMPNfaIHD9xfFqdgFk+glPpSN1dxQnKA8ePVAAAAAElFTkSuQmCC",
   b3 = "/assets/png/10-e1104eb3.png",
   C3 = "/assets/png/10-e1104eb3.png",
   B3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAv2DfIBCAcK+Q78+wUECfj09LwOYAAACRSURBVFjD7dhLDoUgDIXhQqGAr3vd/2adojhriRLPv4AvARoGJYTQl4uSnb5/qM3Au0kcK7TsRkmFOit06YE6oEAHQzdv1EqoZ6s3ahtyToECBQoUKNDR0Un8pcRqNFBTnJXoQjclJfrrgU53x2ftnXJqHmp+50gBBfokmnugYoWW5lfQx+cVWnH6skRCCH24A++S84jA+K8DAAAAAElFTkSuQmCC",
   y3 = "/assets/png/20-be90e252.png",
   f3 = "/assets/png/20-be90e252.png",
   R3 = "/assets/png/3-a463fd69.png",
   E3 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAAeFBMVEUAAAAAqIADrIQDrIQCrYUCrIQCrIQDrIUCq4QAn4ACrIQDq4MCrIQCqoUDqoIDrYQCq4MBqoUAr4AErIQCrYQCr4UDrIT///+B1cHg9fDA6uBCwaMTsYthy7Jiy7Lv+vgitpTQ7+ig4NGR28lx0Lqw5dlSxqsyvJvx24EaAAAAFnRSTlMAIL/v35+Ar3AQz0DvYGCQUDAQz3BvGsqgcAAAApRJREFUWMO1mOt2qjAQRnMlYNWq7Rm5pVy17/+GB7Ftlg5KNOP+41ou2X5khgDDZuGrSAulYEAqYaLNloWRxEYCQpo1f94o4CbiKe+blnAfzR9VupBUWm7AQaSNJPgT+cX8gIdQHmH/SXgQGc8538FBtASJgKcQSfhyYhb8plMBIrRcyQcEsJheAQFBiMmWh0DeJ/oTgolRkSQEI6+LdVX4fO/H12Wx0IIGSvGlxSFYihdAE0nBoKAEUnhzQemkwgUNluKomlKqXVA6qUxG6YpUCrHv7uQsqd9uxYFWCok7+xApPn9DLTWDVFJLJWNboJYCZxu4R1kX1qapk+Zpb4uihHusWXRLd+zbpjp5six30qzJxs8m776+bz6wmCmhbbPh+ENnj3U5cfp1cUwPzZh7SqwnWr/Iq33V2np2TYv09NdfNW5/dZ0yPx1aehaqGLVwiUIddRiObP2rX+4HimspXFGdqlF7S9OpL5G0H49tL/+8yX6xFzH7fO8yYKnDnnumytPj950G/u675vzDtAQkxRRt9deW+aFLe2uLH6y1adcesspdDCUgztXH3v6Q7Weoms6WMIF0UkQ5tHibNxWSZU3b9ccabqF89v2ydsYOuTCCafpdyrCIXhqxFb10wzi9dPuK28mrbnyf1NL1IN1RS/mrHnvYJ610PUp3klTK2YimlGp25o1SytkPgk6q3WiLTsrZH4ZKqtE7NIGUoxfeQCmeJS0opAoNEcKlSzTxiSGYOHggh4leNELC7BYQwCJ54VgOWxdP53ROxC581Ek2nHtnM8QSHmQZs1m4ClhOmiVYRswTrsET42JSaYUbbRFplxopfbQrcSdkjFrT32uWExnNYAxju4mMUKNbKaGj1Xxt/gPAduCwSY6URAAAAABJRU5ErkJggg==",
   I3 = "/assets/png/3_NS-7b95b50c.png",
   S3 = "/assets/png/4-d37103ef.png",
   D3 = "/assets/png/4-d37103ef.png",
   G3 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAaVBMVEUAAAAcuKcquqsvu6wxvK0xvK0xvK0vu6wxvK0vu6wxvK0uvK0tuqwxvK0xvK0wu60wvK0uuqssu6svvK0wvK0vu6wxvK0wvK0ruqkxvK0wu6wxvK0wvK0wvK0wu6wxvK0wu60xvK0yvK3BzxomAAAAInRSTlMABQ489en5Rd9V7i4i8tCRhTUWZLRMvqIb15jJXKl2fW7Dg1SZggAAAn9JREFUWMPt2NtyokAUhWGakw3IGUQFI+73f8gZYMpFgrAbZ+cmlf8upfXVkhBbY/3287ODtGoft7ujRNkiDelfSSdI1x7NOp2l3N6nT+lIxv2gr3mRtAtZ2oUs4MrKcMVluPLynbbycgFXTIYrL2cAhGS4fKEj6yLPEXAFNsOVlYuy7LMqJD59yz5Ktfc06i4MW717UKnM31p72Kfl0dBx2hK4q257nl7XcYx3U5pyq3HQYU1O7EHtk+k1xQ7DqpTQzR7k+PXe4TFHP3+OD/xelBTY/MKt8Qhk3oUcMy4rK7jb8gPuLHdVvhJx8tLlNyu46zJcnxA2G7qQHfx9n+z1+9utTV3IMeNCNn8/S87TZrg+rRXnn92aiJc39iJtz12labPLKGu/wt7VsjlcEhnIyrZ4l8L55BMZyFOdT0wlXDsmNu2M1+zOutTMYDKpTbPGI75kDkum7e+Ci52wrpqTu/NSGDzfC9T4hY/YbhZ68HOP+G7G3m6o5F3j58aFhWxt4EZJeFW8nFrzAgN3uIerUfa3fhf24lji3adMiDtE1M3EZTf7AUjIG24+uLzsdwA5+QJ3Lnc+vxfy9l7I9mvZhftFbpZ7z3A3NmMvL+M6OHC3NsPl5QuOZ7RyWLtwWflUYO/LzbW3dHm5DRT2rmwu7hofVDj54AzlhTV0gLuQp2eco/xvkbUr1btbB3duvZeqW9rMb6KdZBEE3UejiS+59mWgGI796Mm/n/FdhV2UGroxXLNUKrwXpcZ75eUQrtjVwF75zaFjvV3GuvJyDFdIxl5ZGa60DFde9uD+V/flv0qFKsO5mxwtsY7X5xmle2VJdi6bVl9Oaa2s3358fwBsLa2JXzKWGgAAAABJRU5ErkJggg==",
   U3 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAaVBMVEUAAAAcuKcquqsvu6wxvK0xvK0xvK0vu6wxvK0vu6wxvK0uvK0tuqwxvK0xvK0wu60wvK0uuqssu6svvK0wvK0vu6wxvK0wvK0ruqkxvK0wu6wxvK0wvK0wvK0wu6wxvK0wu60xvK0yvK3BzxomAAAAInRSTlMABQ489en5Rd9V7i4i8tCRhTUWZLRMvqIb15jJXKl2fW7Dg1SZggAAAn9JREFUWMPt2NtyokAUhWGakw3IGUQFI+73f8gZYMpFgrAbZ+cmlf8upfXVkhBbY/3287ODtGoft7ujRNkiDelfSSdI1x7NOp2l3N6nT+lIxv2gr3mRtAtZ2oUs4MrKcMVluPLynbbycgFXTIYrL2cAhGS4fKEj6yLPEXAFNsOVlYuy7LMqJD59yz5Ktfc06i4MW717UKnM31p72Kfl0dBx2hK4q257nl7XcYx3U5pyq3HQYU1O7EHtk+k1xQ7DqpTQzR7k+PXe4TFHP3+OD/xelBTY/MKt8Qhk3oUcMy4rK7jb8gPuLHdVvhJx8tLlNyu46zJcnxA2G7qQHfx9n+z1+9utTV3IMeNCNn8/S87TZrg+rRXnn92aiJc39iJtz12labPLKGu/wt7VsjlcEhnIyrZ4l8L55BMZyFOdT0wlXDsmNu2M1+zOutTMYDKpTbPGI75kDkum7e+Ci52wrpqTu/NSGDzfC9T4hY/YbhZ68HOP+G7G3m6o5F3j58aFhWxt4EZJeFW8nFrzAgN3uIerUfa3fhf24lji3adMiDtE1M3EZTf7AUjIG24+uLzsdwA5+QJ3Lnc+vxfy9l7I9mvZhftFbpZ7z3A3NmMvL+M6OHC3NsPl5QuOZ7RyWLtwWflUYO/LzbW3dHm5DRT2rmwu7hofVDj54AzlhTV0gLuQp2eco/xvkbUr1btbB3duvZeqW9rMb6KdZBEE3UejiS+59mWgGI796Mm/n/FdhV2UGroxXLNUKrwXpcZ75eUQrtjVwF75zaFjvV3GuvJyDFdIxl5ZGa60DFde9uD+V/flv0qFKsO5mxwtsY7X5xmle2VJdi6bVl9Oaa2s3358fwBsLa2JXzKWGgAAAABJRU5ErkJggg==",
   M3 = "/assets/png/6-d6ee4bdd.png",
   L3 = "/assets/png/6-d6ee4bdd.png",
   k3 = "/assets/png/8-99f019b4.png",
   T3 = "/assets/png/8-99f019b4.png",
   Q3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHlSURBVHgB7ZhBTsJAFIb/mcpCVhyh3ABuUC6AsDARvIQcAEQb18IN3CgmLkA8gL2B3ECOwEoXpvOcIokMLS0tAwlhvg3hTd/LHx788x6A4UhhUcFh98IBt0ogKsRnsxmEP6l3n724xzauF0DCi6oXEjp2G+8E5iAFjFiv2nlsRZ2Nby/vidEVUsBAXrU9qKixJYZuo8bBhsiA8H/K9e7LRKl3d17iIveBDAiISr39/8ly9ZSVkBWeC+f6uez1BHeU8jgQjFDdGKG6MUJ1c4RCBc2wQ1ShXHjIDE1CIbFFvRUtitDgbhVAHymROTdy4pmuxoNYcIaUCFB/+Z4PWDfm2bDkvU8sYcyT7fa/5Vg2im37Xz3YIG4jUeV8zJvCYDgw1vyYagXwfA1JzL2TJvv48oeEvrnNa2kpXaRAELXqnUEPO0TdmaSNcIt/Ij0z4X8V19nUvEPI2YCVvIVi7r/eauxEecdZcrujkQJOHfk6ijrkVj5Y8GxsyKvbnJ61n4pKDeWJJIOPg8fmpqxLocgJ9oDwRRmcOxsnWCw0N+xF6MIVHrAFZnDWzV5ar9+edoR+e9odmu0pGISjr/9kYnYm/fbEgr0no9ConWmBdnvSvTPpJHrMc+Vf2bThziS7sLqIGQwa+QVaqr18xXHdxQAAAABJRU5ErkJggg==",
   V3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAv99gECDvkK+AcECfz6BQjx//yaM6AAABKUlEQVRYw+2XSW7DMAwAtVBLtNip/v/YHpVSFomyMNoGnPNgYPMggkZR7gJKdnEgYm8Vi7X1xRs9e7MS3NjQ4NUDu/Nc4JsT+yq2vecARf0gqNOrlPdAUUvJaXoPyrMoGim5TS9TXkTRQWHpP5poVKMa1ahG/0/UUW6e3kF5bnr87inTK99ZfCclh+kB5XmDsNw65z+1GwzsphXLV/GxG38CsxJ8yhbRkl9UOFNbvQJGUZS7Af/MFpGf54+aJY5LnCTLnx3iahh7IgijiT3OJtVfEowRHGfcoAqORmabToAYk2Dvs9P/EES5STkjj4bDXWKDIMqjUY3+oejulRJEBa8UHX37Vyre8Uo5ep3IOOhTRkal7ygB7B0lBSzRlHMefQnGnqpRlN/mE/6fvSkyu2x6AAAAAElFTkSuQmCC",
   O3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAYFBMVEX/c3MAAAD/c3T/cnL/cnP/cHD/dHT/c3T/cnP/cHD/dHT/cnT/c3X/cnP/c3P/dHT/c3P/cnL/c3T/c3P/c3P/dHT/dHT/cnP/c3P/b2//e3v/dHX/c3P/cnL/cHD/c3RZiTXqAAAAH3RSTlNmALImn0DsxmAfDYDgeTLPjUy/WVFA2XAsEAb1qUMZyq+d4wAAAWdJREFUaN7t2cmSwiAQgGGMmWhDNmMW4zL9/m85pTUCMYtVpLvKmer/yIEvQE6gNswJIIAA/xSAujNxQKar4T0AJsUVpSUsAlDh6mKYBwySZGYAKJCoFKYASBEZBMUwvxN8oEDSilfAIHFmCACSBwMgpgcqHwBkqPeADhkyHlAhQ5UDemSpt0CDLOUWqJGlvQX2eE8AAT4auEUs3SywVSxtBRBAAAEEEEAAAQQQYC1QVrtncaYeddfdqCgLBCL0Sh6zZAlOVQYBGQ4q7mM7nOwSBJQ4KLmPtThdFgIYHNQGrwAs0KtBxXifzWUSiBaBbwuc9y+nnCbP2vL3YIpkVHtVi3nXOQfF0MEDToqhrQXsHtGmPWDTKPKajQ9o+iVoC/CcQv56tXzg+IV84HxUhB21A57pI+n8DnBCTbY/euaJJSc9Xwe4dEP6+Q7wiXrV5ufn9w91Gk75V0D5CfRnPDUKIIAAfw74ARBwDtBDkJuIAAAAAElFTkSuQmCC",
   N3 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABXwAAABYCAMAAABxqs/uAAAATlBMVEUAAAD////////////////////////////////////////////////////////////////////CwsLJycnm5ub5+fnx8fHc3NzR0dHZ2dnEhMwPAAAAEXRSTlMA3z8Qf18f749Pny+/z69vUE76KOQAAAMsSURBVHja7NxtbuJADABQJ4FAgbYMKbR7/4suK+0P1A0fkwzZSH3vBFY0Y1me2JEAmJzkC/AfRETT1vvF22sC4MmqzWJZt21caPabKgHwJKv1vol+tfwL8AyrdR03LaVfgMJ2yybOpF+A6ezq+EP6BZhO9RKPWyQAClg0kaNV/AKMVm0jU7NOAIyybuIvrQeAqbzHIPUqATDQqo6Bthq/AGXavZ7dACZQtTHCVucBYIDVNkapEwDZ6hjpPQGQaRGj+d8XINM6xms8ugFkqZooYJsAyNDGv4y6AXw3u4avxgNApipKeUkAPGgZxewSAAMKX6MWAP3mW/gqfQEeVEVJywTA1IVvNBbsAGQXvoaMASaxiTNPbgD3zWqb2Xf6DgB3VRH6DgD3zbvrYMoN4AEvUVqTALijieJs1wG44zXK2yQAbnqLS7b6Alw1x02+JowBhry3GbMAuG3WIxZnbQLgpjZC8gW4b/Z/mkWkDN3hwmfq83G4ojumHsfucMUp9fl1uOIjM5pUIpquUDRfqc+py/iU+dF8PjWa45hoHDPHbIJj1qUMcfZTkm/Xfw6/St3RVDqa8nf0lPEpS97R3+zdS27CQAwAUCcD+VJQlr3/RUt/UhctnYQwDeW9E2QRWZY9tp9/+Jr/GHz9Zg/8m91X8AV4RHEm+AJcdhfB13IHAK8dALaniXeGLAAKquONhb4AJe3jg8U6AOXsYn3HCYCLhljf0wRAzv1ML80AikoRod8GUFgfZ64IAZTVxSf3MwGKaeOVEQuA3215zELVASBDp+oAUF6bIsLpYoAcm50wlvgCZDlIfAGybLflJvEFyHSQ+AJk2uaUm8QXIFuVbPIFyLS9rb6OtwHMMsYKkqIDQPnCQzcBMEun4AvwB062mQHk2dKoxdhOAMzWjnGFRrMNYJGqicVGsRdgoWqMhWo1B4DF2joWOU0AFB51S973AlypS8q9ADOVb7sloxUAxUsPvbQXYCXVPvLUhwmAouE37YVegMLht+487QW4gWqo43upF3kBbqca+hRfNE293w16bAA393Tc9XWTImIC4GV0B6OF7ygYBaNgFAwAAACsYqKcmLLcJAAAAABJRU5ErkJggg==",
   F3 = "/assets/png/0-6ae0fe8d.png",
   x3 = "/assets/png/1-c4fc5e42.png",
   P3 = "/assets/png/2-4468ebef.png",
   H3 = "/assets/png/0-6ae0fe8d.png",
   Y3 = "/assets/png/1-bcd21d34.png",
   W3 = "/assets/png/10-e1104eb3.png",
   K3 = "/assets/png/3-a463fd69.png",
   X3 = "/assets/png/4-d37103ef.png",
   J3 = "/assets/png/4_ns-6c3ac287.png",
   z3 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAaVBMVEUAAAAcuKcquqsvu6wxvK0xvK0xvK0vu6wxvK0vu6wxvK0uvK0tuqwxvK0xvK0wu60wvK0uuqssu6svvK0wvK0vu6wxvK0wvK0ruqkxvK0wu6wxvK0wvK0wvK0wu6wxvK0wu60xvK0yvK3BzxomAAAAInRSTlMABQ489en5Rd9V7i4i8tCRhTUWZLRMvqIb15jJXKl2fW7Dg1SZggAAAn9JREFUWMPt2NtyokAUhWGakw3IGUQFI+73f8gZYMpFgrAbZ+cmlf8upfXVkhBbY/3287ODtGoft7ujRNkiDelfSSdI1x7NOp2l3N6nT+lIxv2gr3mRtAtZ2oUs4MrKcMVluPLynbbycgFXTIYrL2cAhGS4fKEj6yLPEXAFNsOVlYuy7LMqJD59yz5Ktfc06i4MW717UKnM31p72Kfl0dBx2hK4q257nl7XcYx3U5pyq3HQYU1O7EHtk+k1xQ7DqpTQzR7k+PXe4TFHP3+OD/xelBTY/MKt8Qhk3oUcMy4rK7jb8gPuLHdVvhJx8tLlNyu46zJcnxA2G7qQHfx9n+z1+9utTV3IMeNCNn8/S87TZrg+rRXnn92aiJc39iJtz12labPLKGu/wt7VsjlcEhnIyrZ4l8L55BMZyFOdT0wlXDsmNu2M1+zOutTMYDKpTbPGI75kDkum7e+Ci52wrpqTu/NSGDzfC9T4hY/YbhZ68HOP+G7G3m6o5F3j58aFhWxt4EZJeFW8nFrzAgN3uIerUfa3fhf24lji3adMiDtE1M3EZTf7AUjIG24+uLzsdwA5+QJ3Lnc+vxfy9l7I9mvZhftFbpZ7z3A3NmMvL+M6OHC3NsPl5QuOZ7RyWLtwWflUYO/LzbW3dHm5DRT2rmwu7hofVDj54AzlhTV0gLuQp2eco/xvkbUr1btbB3duvZeqW9rMb6KdZBEE3UejiS+59mWgGI796Mm/n/FdhV2UGroxXLNUKrwXpcZ75eUQrtjVwF75zaFjvV3GuvJyDFdIxl5ZGa60DFde9uD+V/flv0qFKsO5mxwtsY7X5xmle2VJdi6bVl9Oaa2s3358fwBsLa2JXzKWGgAAAABJRU5ErkJggg==",
   j3 = "/assets/png/6-d6ee4bdd.png",
   Z3 = "/assets/png/8-99f019b4.png",
   q3 = "/assets/png/8-99f019b4.png",
   $3 = "/assets/png/6-d6ee4bdd.png",
   eB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABNCAMAAADei7fQAAAARVBMVEUAAAD7WVn6Wlr5Wlr6Wlr/UVH6Wlr6WVn7WFj6Wlr7WVn6Wlr6WVn6WVn4WVn7WVn7Wlr0VVX5WVn6Wlr0Wlr7Wlr6WloIGyxJAAAAFnRSTlMAH7+A3xDvYECfkM/fr3BQkDCgbzB/uIxM3wAAATVJREFUSMft18tuhDAMQNHExCGPCTCdqf//U2t10ZEw1NjqplXv/igoEEeEn6wBF40IiPtHOopHfaJyrujbch/Tigb0CuZoR1yNdsS9exClKJBJkUWhA9HmQVQ8CDyI0IPmQ5QTd47aIZq+jsZjkGwoKIY5CwQqCsWDAnjQLDdCR0VuuY5W2hUvoG1/gIOOMImFdDTENqio7Df8hidozFwnLtHeOI47YLCivJhHWJowGNHydMzyDm1FgazTnMjByFC6OxBlVvZplNWj8Ww3obr+lcdNqElD3Jt4QNQRitG36kguVS+gRbysC2imfYaVTKg6UEwONMiMCkiTD1AtXCfu0eDsgidriwdFB4LgQHcHqsGObmhFr3vDaMyo24dlnsxjOTcMRgQLk+so9dpW/GU/XX8OfQBvBtu11LrG1wAAAABJRU5ErkJggg==",
   tB =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAYAAAAPOoFWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ/SURBVHgB3VfbcdpAFL13JRysxDPqIHQQp4KgDvi0MR+kAicVGCoIqSBkxsb+C6kAOgipIHIHyg8IgbQ5qwDmISSt8cgzPh/Ssrq7Zx/nPmA6ALLZtOdBcJlmY47HX7nf9+I2HQDf921DiFaqkWV18YzJmHJiWq+3YPx2vQ+/bUlUSxsHmz5svDCK2rl3Jpg/SCmr630yx7jlYkzmrqACUShZfoFE0YhEwtq2jjYBI2L2ZBh6qQKRtZrtl8s2VlSZE7nHd3fu+vfJ2VkFavyTNkcJY7nXu1ftxJ3NGo0qVnw1Izo1pFSKI4NiRbrY4fcj3+8sfUcHvL2TwLK+cYacQe5GUeSots7ONi5hZlmDLKLFCitCiAGIbNLAiiyo1zt4neYdqAjxuiQNxGTqonUHLtDUMY7JcBxXVACWx9jMtJRyyPCp+MINQ6nVJU2YSuYyiiidR7qvbm+dta57HL1jMP9CO7dIBIjeZRlBDK3tPuXg6O+QBgTnWFlpMvmZ1D+Hg5MOmfwv4TS4+6LFdvjKJKMCUSwZI/xn2FRUzEz6gKiTO+LEZDKHvyDN7JtUjywU4neWEfxpJ8IsdqsVeUTZNEe0KLX2grk6PT//sTw2FQhUhqBsJW9Oox7BxcUgR3p/FHbyWcjcpgIQkx1fXw+hSq3Qo4CA0NexX/mZWSq1NSO5h9Lgs4b9Axl3u14opQMxDHOM8wIi56BwpQYf3dw4qKA+kqr3EkhUXkPd/v5NrzciTWTWjfOTkzgFTcPw7+vx2H1MCfcsWO1s3mjUcOFapVkaEAY9ZPcNta4qYhB9Ic2IkAa4kktbrvGC8xkViOf5MwjWT7jVJ1Mj5Ljjj/8AVmLvuqO67rIAAAAASUVORK5CYII=",
   sB = "data:application/octet-stream;base64,JHJlZENvbG9yOiAjYjE4MzVhOwokcmVkWWVsbG93OiAjZmY3ZDA2Owo6ZGVlcCgucmVkKSB7Cgljb2xvcjogJHJlZENvbG9yOwp9Cgo6ZGVlcCgueWVsbG93KSB7Cgljb2xvcjogJHJlZFllbGxvdzsKfQpAbWl4aW4gYmcgewoJbWFyZ2luLXRvcDogMzBweDsKCWJhY2tncm91bmQ6ICNmZmZmZmY7Cglib3gtc2hhZG93OiAwcHggOHB4IDE2cHggcmdiYSgyMDgsIDIwOCwgMjM3LCAwLjM2KTsKCWJvcmRlci1yYWRpdXM6IDEwcHg7Cn0KCkBtaXhpbiBmYyB7CglkaXNwbGF5OiBmbGV4OwoJZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKfQoKQG1peGluIGZyIHsKCWRpc3BsYXk6IGZsZXg7CglmbGV4LWRpcmVjdGlvbjogcm93Owp9Cg==",
   nB = "/assets/scss/_extend-e7660a76.scss",
   aB = "data:application/octet-stream;base64,LmNvbnRlbnQgewogICAgQGV4dGVuZCAlY29udGVudC1mb3JtYXQ7Cn0K",
   AB = "/assets/scss/always-e8085a27.scss",
   oB = "data:application/octet-stream;base64,QGltcG9ydCAndmFycy5zY3NzJzsKQGltcG9ydCAnYWx3YXlzLnNjc3MnOwpAaW1wb3J0ICdmb250cy5zY3NzJzsKCi8vIEBpbXBvcnQgJ1ZJUC92aXAuc2Nzcyc7CiogewoJYm94LXNpemluZzogYm9yZGVyLWJveDsKCS8vIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgJ0ludGVyJywgc2Fucy1zZXJpZjsKCWZvbnQtZmFtaWx5OiAnYmFobnNjaHJpZnQnOwp9CgojYXBwIHsKCWJhY2tncm91bmQ6ICNmZmY7Cn0KLnBvcHVwIHsKCXBvc2l0aW9uOiBmaXhlZDsKCW1heC1oZWlnaHQ6IDEwMCU7CgoJJi1jZW50ZXIgewoJCXRvcDogNTAlOwoJCWxlZnQ6IDA7CgkJcmlnaHQ6IDA7CgkJd2lkdGg6IGZpdC1jb250ZW50OwoJCW1hcmdpbjogMCBhdXRvOwoJCXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsKCQkvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7Cgl9CgkmLW92ZXJsYXkgewoJCXBvc2l0aW9uOiBmaXhlZDsKCQl0b3A6IDA7CgkJbGVmdDogMDsKCQl3aWR0aDogMTAwJTsKCQloZWlnaHQ6IDEwMCU7CgkJYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM1KTsKCX0KfQo=",
   iB = "data:application/octet-stream;base64,Ly8g6LaK5Y2X56uZ5a2X5L2TCkBmb250LWZhY2UgewoJZm9udC1mYW1pbHk6ICdiYWhuc2NocmlmdCc7Cglmb250LXdlaWdodDogNTAwOwoJc3JjOiB1cmwoJ0AvYXNzZXRzL2ZvbnRzL2JhaG5zY2hyaWZ0LndvZmYyJyk7Cn0KCi8vIOWAkuiuoeaXtuWtl+S9kwpAZm9udC1mYWNlIHsKCWZvbnQtZmFtaWx5OiAnZGlnaXRhbERyZWFtRmF0JzsKCXNyYzogdXJsKCdAL2Fzc2V0cy9mb250cy9kaWdpdGFsRHJlYW1GYXQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpOwp9Cg==",
   lB = "/assets/scss/lotteryrecord-6f5783f0.scss",
   cB = "data:application/octet-stream;base64,LnZhbi10b2FzdCB7Cgl3b3JkLWJyZWFrOiBicmVhay13b3JkICFpbXBvcnRhbnQ7Cn0KCi5jZy1kZWZhdWx0IHsKCSYudmFuLWJ1dHRvbiB7CgkJYm94LXNoYWRvdzogMHB4IDRweCAwcHggIzg5NjY0NjsKCQlmb250LXdlaWdodDogNzAwOwoJCWZvbnQtc2l6ZTogMzBweDsKCgkJLnZhbi1idXR0b25fX2ljb24gewoJCQloZWlnaHQ6IDEwMCU7CgkJCWRpc3BsYXk6IGZsZXg7CgkJCWFsaWduLWl0ZW1zOiBjZW50ZXI7CgoJCQkmID4gaW1nIHsKCQkJCWhlaWdodDogODAlOwoJCQl9CgkJfQoJfQp9Cg==",
   gB = "data:application/octet-stream;base64,LmJhbGFuY2UgewogICAgYmFja2dyb3VuZC1jb2xvcjogcmVkOwp9",
   rB = "/assets/scss/reset-d0806a7b.scss",
   dB = "data:application/octet-stream;base64,",
   pB = "/assets/scss/home-b988719d.scss",
   _B = "/assets/scss/reset-4ccc6eae.scss",
   uB = "/assets/scss/reset-ad9237ba.scss",
   mB = "/assets/scss/ar-a2be1972.scss",
   vB = "/assets/scss/qiuqiu-48a001a7.scss",
   hB = "/assets/scss/reset-0683135f.scss",
   wB = "/assets/scss/reset-5dcbe458.scss",
   bB = "data:application/octet-stream;base64,LyogZ2FtZUxpc3Qg5qC35byP6YCC6YWNIHN0YXJ0ICovCi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7Ci8vIAkuaG90R2FtZUxpc3RJdGVtX19jb250YWluZXIuaXNNaW5pR2FtZSB7Ci8vIAkJd2lkdGg6IDI1NHB4ICFpbXBvcnRhbnQ7Ci8vIAkJaGVpZ2h0OiAyNTRweCAhaW1wb3J0YW50OwoKLy8gCQlpbWcgewovLyAJCQl3aWR0aDogMjQwcHggIWltcG9ydGFudDsKLy8gCQkJaGVpZ2h0OiAyNDBweCAhaW1wb3J0YW50OwovLyAJCX0KLy8gCX0KCi8vIAkuZ2FtZUxpc3RHcmlkX19jb250YWluZXItd3JhcHBlciB7Ci8vIAkJZ2FwOiAxMHB4IDEwcHggIWltcG9ydGFudDsKLy8gCX0KLy8gfQoKLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHsKLy8gCS5nYW1lTGlzdCAubXlTaWRlQmFyIHsKLy8gCQlmbGV4LWdyb3c6IDA7Ci8vIAl9CgovLyAJLmdhbWVMaXN0R3JpZF9fY29udGFpbmVyIHsKLy8gCQl3aWR0aDogNTczLjg5cHggIWltcG9ydGFudDsKLy8gCX0KCi8vIAkud2l0aGRyYXdfX2NvbnRhaW5lciAucmVjeWNsZUJ0bkQgewovLyAJCW1heC13aWR0aDogbm9uZTsKLy8gCX0KLy8gfQoKLyogZ2FtZUxpc3Qg5qC35byP6YCC6YWNIGVuZCAqLwo=",
   CB = "/assets/png/20-be90e252.png",
   BB = "/assets/png/20-be90e252.png",
   yB = "data:application/octet-stream;base64,JHBsYWNlaG9sZGVyLWNvbG9yOiAjZGJkYmRiOwokY29sb3ItZmI1MTUxOiAjZmI1MTUxOwokZm9udC1mYW1pbHk6ICdiYWhuc2NocmlmdCc7Ci8vICRmb250LWZhbWlseTogJ1JvYm90bycsICdJbnRlcicsIHNhbnMtc2VyaWY7CiR2YXIxOiAjMzQ1ZWVmOwokdmFyMjogI2ZmZmZmZjsKJHZhcjM6ICMzMzMzMzM7CiR2YXI0OiAjZGZkZmRmOwoKOnJvb3QgewoJLS12YW4tcG9wdXAtYmFja2dyb3VuZDogI2YwZjBmNTsKfQo=",
   fB = "/assets/scss/withdraw-a67683ea.scss",
   RB = "/assets/scss/xoxs-087a2cb9.scss";
let Cs = {};
const EB = e => {
   Cs = {
      RechargeState: [
         { key: e("all"), value: -1 },
         { key: e("titleToBePaid"), value: 0 },
         { key: e("completed"), value: 1 },
         { key: e("rechargeState4"), value: 2 },
      ],
      RechargeC2CState: [
         { key: e("payments"), value: 0 },
         { key: e("c2cState1"), value: 1 },
         { key: e("c2cState3"), value: 3 },
         { key: e("timeOut"), value: 7 },
         { key: e("c2cState4"), value: 4 },
         { key: e("rechargeState4"), value: 5 },
         { key: e("cancelled"), value: 6 },
      ],
      WithdrawState: [
         { key: e("withdrawStatem1"), value: -1 },
         { key: e("withdrawState0"), value: 0 },
         { key: e("rechargeState2"), value: 1 },
         { key: e("withdrawState2"), value: 2 },
         { key: e("withdrawing"), value: 3 },
      ],
      C2cState: [
         { key: e("withdrawStatem1"), value: -1 },
         { key: e("c2cState0"), value: 0 },
         { key: e("c2cState1"), value: 1 },
         { key: e("c2cState2"), value: 2 },
         { key: e("c2cState3"), value: 3 },
         { key: e("c2cState4"), value: 4 },
         { key: e("c2cTip9"), value: 5 },
         { key: e("c2cState6"), value: 6 },
         { key: e("c2cState7"), value: 7 },
         { key: e("c2cState8"), value: 8 },
         { key: e("c2cState9"), value: 9 },
      ],
      RecharegeStatus: [
         { key: e("rechargeState0"), value: 0 },
         { key: e("rechargeState1"), value: 1 },
         { key: e("rechargeState2"), value: 2 },
         { key: e("rechargeState3"), value: 3 },
         { key: e("rechargeState4"), value: 4 },
      ],
      RechargeType: [
         { key: e("code9200"), value: 1 },
         { key: e("code9201"), value: 2 },
         { key: e("code9206"), value: 9 },
         { key: "USDT", value: 11 },
         { key: "KBZ", value: 13 },
         { key: "Wave", value: 14 },
         { key: "TRX", value: 16 },
      ],
      transMoneyTypes: [
         { key: e("all"), value: 0 },
         { key: e("withdrawalReduce"), value: 1 },
         { key: e("gameTransOut"), value: 2 },
         { key: e("gameTransIn"), value: 3 },
         { key: e("betReduce"), value: 4 },
         { key: e("jackpotIncre"), value: 5 },
         { key: e("agencyCommis"), value: 6 },
         { key: e("manualAccess"), value: 7 },
      ],
      usdtMainNetwork: [
         { key: "USDT-TRC20111", value: 1 },
         { key: "USDT-TRC20222", value: 2 },
      ],
      EWalletType: [
         { key: "MOMO1", value: 1 },
         { key: "MOMO2", value: 2 },
      ],
      levelTypes: [
         { key: e("all"), value: -1 },
         { key: e("downlevel", [1]), value: 1 },
         { key: e("downlevel", [2]), value: 2 },
         { key: e("downlevel", [3]), value: 3 },
         { key: e("downlevel", [4]), value: 4 },
         { key: e("downlevel", [5]), value: 5 },
         { key: e("downlevel", [6]), value: 6 },
      ],
      bettingResult: [
         { key: e("bettingResultState1"), value: 2 },
         { key: e("bettingResultState2"), value: 1 },
         { key: e("bettingResultState3"), value: 0 },
      ],
      bettingOrderStatus: [
         { key: e("unsettled"), value: 0 },
         { key: e("settled"), value: 1 },
         { key: e("invalidbet"), value: 2 },
      ],
      WStateCorrelationT: [
         { value: 0, key: e("stateTips1") },
         { value: 1, key: e("stateTips2") },
         { value: 2, key: e("stateTips3") },
         { value: 3, key: e("stateTips4") },
      ],
      RStateCorrelationT: [
         { key: e("RStateTips1"), value: 1 },
         { key: e("RStateTips2"), value: 2 },
      ],
      gameSelectType: [
         { key: "0", value: "0" },
         { key: "1", value: "1" },
         { key: "2", value: "2" },
         { key: "3", value: "3" },
         { key: "4", value: "4" },
         { key: "5", value: "5" },
         { key: "6", value: "6" },
         { key: "7", value: "7" },
         { key: "8", value: "8" },
         { key: "9", value: "9" },
         { key: "10", value: "10" },
         { key: "11", value: "11" },
         { key: "12", value: "12" },
         { key: "13", value: "13" },
         { key: "14", value: "14" },
         { key: "15", value: "15" },
         { key: "16", value: "16" },
         { key: "17", value: "17" },
         { key: "18", value: "18" },
         { key: e("numbersUnmatch"), value: "ABC" },
         { key: e("numbersMatch"), value: "AAA" },
         { key: "22", value: "22" },
         { key: "33", value: "33" },
         { key: "44", value: "44" },
         { key: "55", value: "55" },
         { key: "66", value: "66" },
         { key: "111", value: "111" },
         { key: "222", value: "222" },
         { key: "333", value: "333" },
         { key: "444", value: "444" },
         { key: "555", value: "555" },
         { key: "666", value: "666" },
         { key: e("small"), value: "L" },
         { key: e("big"), value: "H" },
         { key: e("odd"), value: "O" },
         { key: e("k3Even"), value: "E" },
         { key: e("GTBig"), value: "big" },
         { key: e("GTSmall"), value: "small" },
         { key: e("GTRed"), value: "red" },
         { key: e("GTGreen"), value: "green" },
         { key: e("GTPurple"), value: "violet" },
         { key: "O", value: e("GTOdd") },
         { key: "E", value: e("GTEven") },
         { key: "L", value: e("GTSmall") },
         { key: "H", value: e("GTBig") },
      ],
      gameAllName: [
         { key: e("sabaSport"), value: 14 },
         { key: e("cmdSport"), value: 8 },
         { key: e("agSport"), value: 13 },
         { key: e("imSport"), value: 15 },
         { key: e("dgLive"), value: 7 },
         { key: e("agLive"), value: 10 },
         { key: e("evoLive"), value: 16 },
         { key: e("chess365"), value: 19 },
         { key: e("chessv8"), value: 21 },
         { key: e("sexyLive"), value: 27 },
         { key: e("wmLive"), value: 26 },
         { key: e("wicketsSport"), value: 25 },
      ],
      languageCodes: [
         { value: "en", key: 0 },
         { value: "id", key: 1 },
         { value: "vi", key: 2 },
         { value: "bra", key: 3 },
         { value: "tha", key: 4 },
         { value: "th", key: 4 },
         { value: "zh", key: 5 },
         { value: "zh-CN", key: 5 },
         { value: "tw", key: 6 },
         { value: "md", key: 7 },
         { value: "bd", key: 8 },
         { value: "hd", key: 9 },
         { value: "my", key: 10 },
         { value: "pk", key: 11 },
         { value: "ar", key: 12 },
      ],
      StatusType: [
         { key: e("enableStatus"), value: 1 },
         { key: e("disabledStatus"), value: 0 },
      ],
      RegionType: [
         { key: e("north"), value: "北部" },
         { key: e("central"), value: "中央" },
         { key: e("south"), value: "南部" },
      ],
      gameType: [
         { key: e("lotteryType1"), value: 1 },
         { key: e("lotteryType2"), value: 2 },
         { key: e("lotteryType3"), value: 3 },
         { key: e("lotteryType4"), value: 4 },
         { key: e("lotteryType5"), value: 5 },
      ],
      gameTabList: [
         { name: e("all"), img: "all", codeType: -1 },
         { name: e("lottery"), img: "lottery", codeType: 3 },
         { name: e("live"), img: "video", codeType: 1 },
         { name: e("chess"), img: "chess", codeType: 4 },
         { name: e("electric"), img: "slot", codeType: 0 },
      ],
      VipType: [
         { key: e("receiveSuccess"), value: 1 },
         { key: e("receiveSuccess"), value: 2 },
         { key: e("vipcondition"), value: 3 },
         { key: e("vipcondition"), value: 4 },
         { key: e("vipTip8"), value: 5 },
         { key: e("vipTip9"), value: 6 },
         { key: e("vipTip16"), value: 7 },
         { key: e("vipTip16"), value: 8 },
      ],
   };
};
let IB = localStorage.getItem("language") || "en",
   SB = S({ en: In, rus: Sn, vi: Dn, id: Gn, hd: Un, th: ts, tha: ts, md: Mn, bra: Ln, my: kn, bd: Tn, zh: Qn, pk: Vn, ar: On });
const Le = nn({
   legacy: !1,
   locale: IB,
   fallbackLocale: "en",
   globalInjection: !0,
   warnHtmlMessage: !1,
   messages: SB.value,
   silentTranslationWarn: !0,
   datetimeFormats: { zh: { short: { year: "numeric", month: "short", day: "numeric" }, long: { year: "numeric", month: "long", day: "numeric", weekday: "long" } }, en: { short: { year: "numeric", month: "short", day: "numeric" } }, rus: { short: { year: "numeric", month: "short", day: "numeric" } }, vi: { short: { year: "numeric", month: "short", day: "numeric" } }, my: { short: { year: "numeric", month: "short", day: "numeric" } }, id: { short: { year: "numeric", month: "short", day: "numeric" } }, hd: { short: { year: "numeric", month: "short", day: "numeric" } }, th: { short: { year: "numeric", month: "short", day: "numeric" } }, md: { short: { year: "numeric", month: "short", day: "numeric" } }, bra: { short: { year: "numeric", month: "short", day: "numeric" } }, bd: { short: { year: "numeric", month: "short", day: "numeric" } }, pk: { short: { year: "numeric", month: "short", day: "numeric" } }, ar: { short: { year: "numeric", month: "short", day: "numeric" } } },
});
EB(Le.global.t);
const KU = async e => {
      const s = e || Rs();
      OB(s), En(s);
   },
   ss = e => typeof e == "function",
   DB = e => e !== null && typeof e == "object",
   XU = e => DB(e) && ss(e.then) && ss(e.catch),
   JU = e => e != null,
   zU = () => {},
   GB = e => e.stopPropagation();
function jU(e, s) {
   (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), s && GB(e);
}
function ZU(e) {
   const s = {};
   return e !== void 0 && (s.zIndex = +e), s;
}
const Bs = typeof window < "u",
   Nt = navigator.userAgent.toLowerCase(),
   UB = Bs && /ios|iphone|ipad|ipod/.test(Nt),
   qU = Bs && /android|adr/.test(Nt),
   MB = /mobi|android|iphone/.test(Nt),
   ys = !MB,
   LB = Le.global.t;
function kB(e) {
   return e.then(s => [null, s]).catch(s => [s, null]);
}
const $U = () => (navigator.language ? navigator.language : navigator.browserLanguage).toLowerCase().slice(0, 2),
   eM = (e, s) => (e == "zh-CN" || e == "zh" ? (s.includes(e) ? "zh-CN" : "en") : e == "bn" ? (s.includes("bdt") ? "bdt" : "en") : e == "pt-br" ? (s.includes("bra") ? "bra" : "en") : s.toLowerCase().includes(e.split("-")[0]) ? e.split("-")[0] : "en"),
   tM = (e, s, n = !0) => {
      let A = null;
      return function (...o) {
         A ||
            ((A = setTimeout(() => {
               !n && e.apply(this, arguments), (A = null);
            }, s)),
            n && e.apply(this, o));
      };
   },
   fs = e => {
      if (!e) return;
      const s = document.createElement("input");
      s.setAttribute("readonly", "readonly"), s.setAttribute("value", e.toLocaleString()), document.body.appendChild(s), s.select(), document.execCommand("Copy"), document.body.removeChild(s), An.showSuccessToast(LB("copySuccess"));
   },
   V = (e, s, n = "png", A = "icons") =>
      new URL(
         Object.assign({
            "../assets/audio/di1.mp3": Nn,
            "../assets/audio/di2.mp3": Fn,
            "../assets/fonts/bahnschrift.woff2": xn,
            "../assets/fonts/digitalDreamFat.ttf": Pn,
            "../assets/homeImg/blueHome/electronic_bg.png": Hn,
            "../assets/homeImg/blueHome/fish_bg.png": Yn,
            "../assets/homeImg/blueHome/game_mini_bg.png": Wn,
            "../assets/homeImg/blueHome/hot_bg.png": Kn,
            "../assets/homeImg/blueHome/lottery_bg.png": Xn,
            "../assets/homeImg/blueHome/third_bg.png": Jn,
            "../assets/homeImg/damanHome/chess.png": zn,
            "../assets/homeImg/damanHome/chess_icon.png": jn,
            "../assets/homeImg/damanHome/fish.png": Zn,
            "../assets/homeImg/damanHome/fish_icon.png": qn,
            "../assets/homeImg/damanHome/flash.png": $n,
            "../assets/homeImg/damanHome/flash_icon.png": ea,
            "../assets/homeImg/damanHome/lottery.png": ta,
            "../assets/homeImg/damanHome/lottery_icon.png": sa,
            "../assets/homeImg/damanHome/popular.png": na,
            "../assets/homeImg/damanHome/popular_icon.png": aa,
            "../assets/homeImg/damanHome/slot.png": Aa,
            "../assets/homeImg/damanHome/slot_icon.png": oa,
            "../assets/homeImg/damanHome/sport.png": ia,
            "../assets/homeImg/damanHome/sport_icon.png": la,
            "../assets/homeImg/damanHome/video.png": ca,
            "../assets/homeImg/damanHome/video_icon.png": ga,
            "../assets/homeImg/electronic/customerIcon.svg": ra,
            "../assets/homeImg/electronic/down.svg": da,
            "../assets/homeImg/whiteGoldHome/message.svg": pa,
            "../assets/icons/activity/Championship/1.png": _a,
            "../assets/icons/activity/Championship/2.png": ua,
            "../assets/icons/activity/Championship/3.png": ma,
            "../assets/icons/activity/DailySignIn/SignInTop.png": va,
            "../assets/icons/activity/DailySignIn/Signed.png": ha,
            "../assets/icons/activity/DailySignIn/Unsigned.png": wa,
            "../assets/icons/activity/DailySignIn/ar-headerBg.png": ba,
            "../assets/icons/activity/DailySignIn/banner-wallet.png": Ca,
            "../assets/icons/activity/DailySignIn/bonus-bg.png": Ba,
            "../assets/icons/activity/DailySignIn/box.png": ya,
            "../assets/icons/activity/DailySignIn/calendar.png": fa,
            "../assets/icons/activity/DailySignIn/coin.png": Ra,
            "../assets/icons/activity/DailySignIn/day7Bg.png": Ea,
            "../assets/icons/activity/DailySignIn/day7BgActive.png": Ia,
            "../assets/icons/activity/DailySignIn/headerBg.png": Sa,
            "../assets/icons/activity/DailySignIn/points-bg.png": Da,
            "../assets/icons/activity/DailySignIn/record-icon.png": Ga,
            "../assets/icons/activity/DailySignIn/rule-icon.png": Ua,
            "../assets/icons/activity/DailySignIn/signedBg.png": Ma,
            "../assets/icons/activity/DailyTask/DailyCheckInBanner.png": La,
            "../assets/icons/activity/DailyTask/DailyTaskBanner.png": ka,
            "../assets/icons/activity/DailyTask/DailyTaskHero.png": Ta,
            "../assets/icons/activity/DailyTask/PointsMallBanner.png": Qa,
            "../assets/icons/activity/DailyTask/activityIcon1.png": Va,
            "../assets/icons/activity/DailyTask/activityIcon2.png": Oa,
            "../assets/icons/activity/DailyTask/activityIcon3.png": Na,
            "../assets/icons/activity/DailyTask/activityIcon4.png": Fa,
            "../assets/icons/activity/DailyTask/activityIcon5.png": xa,
            "../assets/icons/activity/DailyTask/amountIcon.png": Pa,
            "../assets/icons/activity/DailyTask/awardImg.png": Ha,
            "../assets/icons/activity/DailyTask/awardRecord.png": Ya,
            "../assets/icons/activity/DailyTask/close.png": Wa,
            "../assets/icons/activity/DailyTask/confirmationReceived.png": Ka,
            "../assets/icons/activity/DailyTask/dualArrow.png": Xa,
            "../assets/icons/activity/DailyTask/friends.png": Ja,
            "../assets/icons/activity/DailyTask/giftRedeem.png": za,
            "../assets/icons/activity/DailyTask/new.png": ja,
            "../assets/icons/activity/DailyTask/present.png": Za,
            "../assets/icons/activity/DailyTask/recordIcon.png": qa,
            "../assets/icons/activity/DailyTask/signInBanner.png": $a,
            "../assets/icons/activity/DailyTask/stepperIcon.png": eA,
            "../assets/icons/activity/DailyTask/taskIcon1.png": tA,
            "../assets/icons/activity/DailyTask/taskIcon2.png": sA,
            "../assets/icons/activity/DailyTask/taskIcon3.png": nA,
            "../assets/icons/activity/DailyTask/taskIcon4.png": aA,
            "../assets/icons/activity/DailyTask/taskIcon5.png": AA,
            "../assets/icons/activity/DailyTask/weeklyType1.svg": oA,
            "../assets/icons/activity/DailyTask/weeklyType10.svg": iA,
            "../assets/icons/activity/DailyTask/weeklyType11.svg": lA,
            "../assets/icons/activity/DailyTask/weeklyType12.svg": cA,
            "../assets/icons/activity/DailyTask/weeklyType2.svg": gA,
            "../assets/icons/activity/DailyTask/weeklyType3.svg": rA,
            "../assets/icons/activity/DailyTask/weeklyType4.svg": dA,
            "../assets/icons/activity/DailyTask/weeklyType5.svg": pA,
            "../assets/icons/activity/DailyTask/weeklyType6.svg": _A,
            "../assets/icons/activity/DailyTask/weeklyType7.svg": uA,
            "../assets/icons/activity/DailyTask/weeklyType8.svg": mA,
            "../assets/icons/activity/DailyTask/weeklyType9.svg": vA,
            "../assets/icons/activity/MemberPackage/bg.png": hA,
            "../assets/icons/activity/MemberPackage/box.png": wA,
            "../assets/icons/activity/MemberPackage/head.png": bA,
            "../assets/icons/activity/PointMall/addAddress.png": CA,
            "../assets/icons/activity/PointMall/cart.png": BA,
            "../assets/icons/activity/PointMall/claimRuleBg.png": yA,
            "../assets/icons/activity/PointMall/close.png": fA,
            "../assets/icons/activity/PointMall/coin.png": RA,
            "../assets/icons/activity/PointMall/confirm.png": EA,
            "../assets/icons/activity/PointMall/copy.png": IA,
            "../assets/icons/activity/PointMall/diamond.png": SA,
            "../assets/icons/activity/PointMall/dropdown.png": DA,
            "../assets/icons/activity/PointMall/dropdownRed.png": GA,
            "../assets/icons/activity/PointMall/dropdownWhite.png": UA,
            "../assets/icons/activity/PointMall/edit.png": MA,
            "../assets/icons/activity/PointMall/editDefault.png": LA,
            "../assets/icons/activity/PointMall/empty.png": kA,
            "../assets/icons/activity/PointMall/forbhidden.png": TA,
            "../assets/icons/activity/PointMall/headerBg.png": QA,
            "../assets/icons/activity/PointMall/headerBodyBg.png": VA,
            "../assets/icons/activity/PointMall/income.png": OA,
            "../assets/icons/activity/PointMall/iphone14.png": NA,
            "../assets/icons/activity/PointMall/loading.png": FA,
            "../assets/icons/activity/PointMall/lotteryContact.png": xA,
            "../assets/icons/activity/PointMall/lotteryReceiver.png": PA,
            "../assets/icons/activity/PointMall/luckyNumber.png": HA,
            "../assets/icons/activity/PointMall/minus.png": YA,
            "../assets/icons/activity/PointMall/notice.png": WA,
            "../assets/icons/activity/PointMall/orderCancelSuccess.png": KA,
            "../assets/icons/activity/PointMall/orderCancelWarn.png": XA,
            "../assets/icons/activity/PointMall/orderCanceled.png": JA,
            "../assets/icons/activity/PointMall/orderCanceledImg.png": zA,
            "../assets/icons/activity/PointMall/orderCompleted.png": jA,
            "../assets/icons/activity/PointMall/orderCompletedImg.png": ZA,
            "../assets/icons/activity/PointMall/orderItemDetail.png": qA,
            "../assets/icons/activity/PointMall/orderPending.png": $A,
            "../assets/icons/activity/PointMall/orderPendingImg.png": eo,
            "../assets/icons/activity/PointMall/orderSent.png": to,
            "../assets/icons/activity/PointMall/orderSentImg.png": so,
            "../assets/icons/activity/PointMall/output.png": no,
            "../assets/icons/activity/PointMall/plus.png": ao,
            "../assets/icons/activity/PointMall/pointsIcon.png": Ao,
            "../assets/icons/activity/PointMall/record.png": oo,
            "../assets/icons/activity/PointMall/recordHeaderBg.png": io,
            "../assets/icons/activity/PointMall/recycleBin.png": lo,
            "../assets/icons/activity/PointMall/redDiamond.png": co,
            "../assets/icons/activity/PointMall/redDiamondSm.png": go,
            "../assets/icons/activity/PointMall/redeemdBg.png": ro,
            "../assets/icons/activity/PointMall/rule.png": po,
            "../assets/icons/activity/PointMall/statusBg.png": _o,
            "../assets/icons/activity/PointMall/successfullyParticipatedBg.png": uo,
            "../assets/icons/activity/PointMall/successfullyParticipatedBottom.png": mo,
            "../assets/icons/activity/PointMall/successfullyReceived.png": vo,
            "../assets/icons/activity/PointMall/ticket.png": ho,
            "../assets/icons/activity/PointMall/treasure.png": wo,
            "../assets/icons/activity/PointMall/verified.png": bo,
            "../assets/icons/activity/Turntable/bg.png": Co,
            "../assets/icons/activity/Turntable/btn.png": Bo,
            "../assets/icons/activity/Turntable/money.png": yo,
            "../assets/icons/activity/Turntable/turntable.png": fo,
            "../assets/icons/activity/Turntable/zp.png": Ro,
            "../assets/icons/activity/active.svg": Eo,
            "../assets/icons/activity/active_b.svg": Io,
            "../assets/icons/activity/supportService.png": So,
            "../assets/icons/common/ar_wallet.png": Do,
            "../assets/icons/common/close.png": Go,
            "../assets/icons/common/downloadApp/91club.png": Uo,
            "../assets/icons/common/downloadApp/development.png": Mo,
            "../assets/icons/common/downloadApp/development@192.png": Lo,
            "../assets/icons/common/downloadApp/development@512.png": ko,
            "../assets/icons/common/downloadApp/sit.png": To,
            "../assets/icons/common/downloadApp/sit@192.png": Qo,
            "../assets/icons/common/downloadApp/sit@512.png": Vo,
            "../assets/icons/common/downloadPWA66.png": Oo,
            "../assets/icons/common/downloadPWAar006.png": No,
            "../assets/icons/common/downloadPWAbigmumbai.png": Fo,
            "../assets/icons/common/downloadPWAokwin.png": xo,
            "../assets/icons/common/downloadPWApoppg.png": Po,
            "../assets/icons/common/downloadPWAsit.png": Ho,
            "../assets/icons/common/downloadPWAyjlottery.png": Yo,
            "../assets/icons/common/missingviebg.png": Wo,
            "../assets/icons/common/missningBg.png": Ko,
            "../assets/icons/common/missningLBg.png": Xo,
            "../assets/icons/common/newmissingbg.png": Jo,
            "../assets/icons/common/newmissingviebg.png": zo,
            "../assets/icons/common/rulehead.svg": jo,
            "../assets/icons/common/switch.png": Zo,
            "../assets/icons/common/upload_add.png": qo,
            "../assets/icons/common/upload_icon.png": $o,
            "../assets/icons/common/vector.png": ei,
            "../assets/icons/electronic/all.png": ti,
            "../assets/icons/electronic/bigaward.png": si,
            "../assets/icons/electronic/chess.png": ni,
            "../assets/icons/electronic/clicksTopList.png": ai,
            "../assets/icons/electronic/fish.png": Ai,
            "../assets/icons/electronic/flash.png": oi,
            "../assets/icons/electronic/lottery.png": ii,
            "../assets/icons/electronic/no1.png": li,
            "../assets/icons/electronic/no2.png": ci,
            "../assets/icons/electronic/no3.png": gi,
            "../assets/icons/electronic/platformList.png": ri,
            "../assets/icons/electronic/profit.png": di,
            "../assets/icons/electronic/slot.png": pi,
            "../assets/icons/electronic/sport.png": _i,
            "../assets/icons/electronic/video.png": ui,
            "../assets/icons/electronic/winning.png": mi,
            "../assets/icons/home/AllGames/all.png": vi,
            "../assets/icons/home/AllGames/allActive.png": hi,
            "../assets/icons/home/AllGames/bg.png": wi,
            "../assets/icons/home/AllGames/bgActive.png": bi,
            "../assets/icons/home/AllGames/chess.png": Ci,
            "../assets/icons/home/AllGames/chessActive.png": Bi,
            "../assets/icons/home/AllGames/fish.png": yi,
            "../assets/icons/home/AllGames/fishActive.png": fi,
            "../assets/icons/home/AllGames/flash.png": Ri,
            "../assets/icons/home/AllGames/flashActive.png": Ei,
            "../assets/icons/home/AllGames/lottery.png": Ii,
            "../assets/icons/home/AllGames/lotteryActive.png": Si,
            "../assets/icons/home/AllGames/popular.png": Di,
            "../assets/icons/home/AllGames/popularActive.png": Gi,
            "../assets/icons/home/AllGames/slot.png": Ui,
            "../assets/icons/home/AllGames/slotActive.png": Mi,
            "../assets/icons/home/AllGames/sport.png": Li,
            "../assets/icons/home/AllGames/sportActive.png": ki,
            "../assets/icons/home/AllGames/tab.png": Ti,
            "../assets/icons/home/AllGames/tabActive.png": Qi,
            "../assets/icons/home/AllGames/video.png": Vi,
            "../assets/icons/home/AllGames/videoActive.png": Oi,
            "../assets/icons/home/AllGames/winner/BetSoft.png": Ni,
            "../assets/icons/home/AllGames/winner/Hacksaw.png": Fi,
            "../assets/icons/home/AllGames/winner/JOKER.png": xi,
            "../assets/icons/home/AllGames/winner/YGG.png": Pi,
            "../assets/icons/home/AllLotteryGames/4D/arr-left.svg": Hi,
            "../assets/icons/home/AllLotteryGames/4D/arr-right.svg": Yi,
            "../assets/icons/home/AllLotteryGames/4D/fail.png": Wi,
            "../assets/icons/home/AllLotteryGames/4D/howpay.png": Ki,
            "../assets/icons/home/AllLotteryGames/4D/oddBg.png": Xi,
            "../assets/icons/home/AllLotteryGames/4D/odds.png": Ji,
            "../assets/icons/home/AllLotteryGames/4D/success.png": zi,
            "../assets/icons/home/AllLotteryGames/K3/bitactive.png": ji,
            "../assets/icons/home/AllLotteryGames/K3/greenBall.png": Zi,
            "../assets/icons/home/AllLotteryGames/K3/line.png": qi,
            "../assets/icons/home/AllLotteryGames/K3/n1.png": $i,
            "../assets/icons/home/AllLotteryGames/K3/n2.png": el,
            "../assets/icons/home/AllLotteryGames/K3/n3.png": tl,
            "../assets/icons/home/AllLotteryGames/K3/n4.png": sl,
            "../assets/icons/home/AllLotteryGames/K3/n5.png": nl,
            "../assets/icons/home/AllLotteryGames/K3/n6.png": al,
            "../assets/icons/home/AllLotteryGames/K3/n7.png": Al,
            "../assets/icons/home/AllLotteryGames/K3/num1.png": ol,
            "../assets/icons/home/AllLotteryGames/K3/num2.png": il,
            "../assets/icons/home/AllLotteryGames/K3/num3.png": ll,
            "../assets/icons/home/AllLotteryGames/K3/num4.png": cl,
            "../assets/icons/home/AllLotteryGames/K3/num5.png": gl,
            "../assets/icons/home/AllLotteryGames/K3/num6.png": rl,
            "../assets/icons/home/AllLotteryGames/K3/redBall.png": dl,
            "../assets/icons/home/AllLotteryGames/NewVietnam/Star.png": pl,
            "../assets/icons/home/AllLotteryGames/NewVietnam/Triangle.png": _l,
            "../assets/icons/home/AllLotteryGames/NewVietnam/WalletBg.png": ul,
            "../assets/icons/home/AllLotteryGames/NewVietnam/arrowbottom.png": ml,
            "../assets/icons/home/AllLotteryGames/NewVietnam/bg1.png": vl,
            "../assets/icons/home/AllLotteryGames/NewVietnam/bg2.png": hl,
            "../assets/icons/home/AllLotteryGames/NewVietnam/bg3.png": wl,
            "../assets/icons/home/AllLotteryGames/NewVietnam/bg4.png": bl,
            "../assets/icons/home/AllLotteryGames/NewVietnam/bg5.png": Cl,
            "../assets/icons/home/AllLotteryGames/NewVietnam/close.png": Bl,
            "../assets/icons/home/AllLotteryGames/NewVietnam/copy.png": yl,
            "../assets/icons/home/AllLotteryGames/NewVietnam/detail.png": fl,
            "../assets/icons/home/AllLotteryGames/NewVietnam/fail.png": Rl,
            "../assets/icons/home/AllLotteryGames/NewVietnam/left-border.png": El,
            "../assets/icons/home/AllLotteryGames/NewVietnam/left.png": Il,
            "../assets/icons/home/AllLotteryGames/NewVietnam/middle.png": Sl,
            "../assets/icons/home/AllLotteryGames/NewVietnam/notwinning.png": Dl,
            "../assets/icons/home/AllLotteryGames/NewVietnam/palybg.png": Gl,
            "../assets/icons/home/AllLotteryGames/NewVietnam/right-border.png": Ul,
            "../assets/icons/home/AllLotteryGames/NewVietnam/right.png": Ml,
            "../assets/icons/home/AllLotteryGames/NewVietnam/success.png": Ll,
            "../assets/icons/home/AllLotteryGames/NewVietnam/ticketstar.png": kl,
            "../assets/icons/home/AllLotteryGames/NewVietnam/tip.png": Tl,
            "../assets/icons/home/AllLotteryGames/NewVietnam/wallet.png": Ql,
            "../assets/icons/home/AllLotteryGames/NewVietnam/warning2.png": Vl,
            "../assets/icons/home/AllLotteryGames/NewVietnam/xosoCity.png": Ol,
            "../assets/icons/home/AllLotteryGames/WinGo/PreSaleBg.png": Nl,
            "../assets/icons/home/AllLotteryGames/WinGo/agree-a.png": Fl,
            "../assets/icons/home/AllLotteryGames/WinGo/agree-b.png": xl,
            "../assets/icons/home/AllLotteryGames/WinGo/bcakIcon.png": Pl,
            "../assets/icons/home/AllLotteryGames/WinGo/copy.png": Hl,
            "../assets/icons/home/AllLotteryGames/WinGo/diban.png": Yl,
            "../assets/icons/home/AllLotteryGames/WinGo/kefu.png": Wl,
            "../assets/icons/home/AllLotteryGames/WinGo/moreBtn.png": Kl,
            "../assets/icons/home/AllLotteryGames/WinGo/n0.png": Xl,
            "../assets/icons/home/AllLotteryGames/WinGo/n1.png": Jl,
            "../assets/icons/home/AllLotteryGames/WinGo/n2.png": zl,
            "../assets/icons/home/AllLotteryGames/WinGo/n3.png": jl,
            "../assets/icons/home/AllLotteryGames/WinGo/n4.png": Zl,
            "../assets/icons/home/AllLotteryGames/WinGo/n5.png": ql,
            "../assets/icons/home/AllLotteryGames/WinGo/n6.png": $l,
            "../assets/icons/home/AllLotteryGames/WinGo/n7.png": ec,
            "../assets/icons/home/AllLotteryGames/WinGo/n8.png": tc,
            "../assets/icons/home/AllLotteryGames/WinGo/n9.png": sc,
            "../assets/icons/home/AllLotteryGames/WinGo/refireshIcon.png": nc,
            "../assets/icons/home/AllLotteryGames/WinGo/rule-r.png": ac,
            "../assets/icons/home/AllLotteryGames/WinGo/rule.png": Ac,
            "../assets/icons/home/AllLotteryGames/WinGo/time.png": oc,
            "../assets/icons/home/AllLotteryGames/WinGo/time_a.png": ic,
            "../assets/icons/home/AllLotteryGames/WinGo/voice-off.png": lc,
            "../assets/icons/home/AllLotteryGames/WinGo/voice.png": cc,
            "../assets/icons/home/AllLotteryGames/WinGo/wallet.png": gc,
            "../assets/icons/home/AllLotteryGames/WinGo/walletbg.png": rc,
            "../assets/icons/home/AllLotteryGames/WinTrx/icon-question.png": dc,
            "../assets/icons/home/AllLotteryGames/WinTrx/icon-tip.png": pc,
            "../assets/icons/home/AllLotteryGames/WinTrx/line.png": _c,
            "../assets/icons/home/AllLotteryGames/WinTrx/num0.png": uc,
            "../assets/icons/home/AllLotteryGames/WinTrx/num1.png": mc,
            "../assets/icons/home/AllLotteryGames/WinTrx/num2.png": vc,
            "../assets/icons/home/AllLotteryGames/WinTrx/num3.png": hc,
            "../assets/icons/home/AllLotteryGames/WinTrx/num4.png": wc,
            "../assets/icons/home/AllLotteryGames/WinTrx/num5.png": bc,
            "../assets/icons/home/AllLotteryGames/WinTrx/num6.png": Cc,
            "../assets/icons/home/AllLotteryGames/WinTrx/num7.png": Bc,
            "../assets/icons/home/AllLotteryGames/WinTrx/num8.png": yc,
            "../assets/icons/home/AllLotteryGames/WinTrx/num9.png": fc,
            "../assets/icons/home/AllLotteryGames/WinTrx/numA.png": Rc,
            "../assets/icons/home/AllLotteryGames/WinTrx/numB.png": Ec,
            "../assets/icons/home/AllLotteryGames/WinTrx/numC.png": Ic,
            "../assets/icons/home/AllLotteryGames/WinTrx/numD.png": Sc,
            "../assets/icons/home/AllLotteryGames/WinTrx/numE.png": Dc,
            "../assets/icons/home/AllLotteryGames/WinTrx/numF.png": Gc,
            "../assets/icons/home/AllLotteryGames/WinTrx/prize0.png": Uc,
            "../assets/icons/home/AllLotteryGames/WinTrx/prize1.png": Mc,
            "../assets/icons/home/AllLotteryGames/WinTrx/prize2.png": Lc,
            "../assets/icons/home/AllLotteryGames/WinTrx/prize3.png": kc,
            "../assets/icons/home/AllLotteryGames/WinTrx/prize4.png": Tc,
            "../assets/icons/home/AllLotteryGames/WinTrx/prize5.png": Qc,
            "../assets/icons/home/AllLotteryGames/WinTrx/prize6.png": Vc,
            "../assets/icons/home/AllLotteryGames/WinTrx/prize7.png": Oc,
            "../assets/icons/home/AllLotteryGames/WinTrx/prize8.png": Nc,
            "../assets/icons/home/AllLotteryGames/WinTrx/prize9.png": Fc,
            "../assets/icons/home/AllLotteryGames/WinTrx/prizeA.png": xc,
            "../assets/icons/home/AllLotteryGames/WinTrx/prizeB.png": Pc,
            "../assets/icons/home/AllLotteryGames/WinTrx/prizeC.png": Hc,
            "../assets/icons/home/AllLotteryGames/WinTrx/prizeD.png": Yc,
            "../assets/icons/home/AllLotteryGames/WinTrx/prizeE.png": Wc,
            "../assets/icons/home/AllLotteryGames/WinTrx/prizeF.png": Kc,
            "../assets/icons/home/AllLotteryGames/WinTrx/timea.png": Xc,
            "../assets/icons/home/AllLotteryGames/WinTrx/timeb.png": Jc,
            "../assets/icons/home/AllLotteryGames/WinTrx/trxbg.png": zc,
            "../assets/icons/home/AllLotteryGames/binguo/add.png": jc,
            "../assets/icons/home/AllLotteryGames/binguo/bet_tip.png": Zc,
            "../assets/icons/home/AllLotteryGames/binguo/binguo_time.png": qc,
            "../assets/icons/home/AllLotteryGames/binguo/binguo_tip.png": $c,
            "../assets/icons/home/AllLotteryGames/binguo/count_icon.png": eg,
            "../assets/icons/home/AllLotteryGames/binguo/dice_1.png": tg,
            "../assets/icons/home/AllLotteryGames/binguo/dice_2.png": sg,
            "../assets/icons/home/AllLotteryGames/binguo/dice_3.png": ng,
            "../assets/icons/home/AllLotteryGames/binguo/dice_4.png": ag,
            "../assets/icons/home/AllLotteryGames/binguo/dice_5.png": Ag,
            "../assets/icons/home/AllLotteryGames/binguo/dice_6.png": og,
            "../assets/icons/home/AllLotteryGames/binguo/hidden_money.png": ig,
            "../assets/icons/home/AllLotteryGames/binguo/hot_bg.png": lg,
            "../assets/icons/home/AllLotteryGames/binguo/hot_top.png": cg,
            "../assets/icons/home/AllLotteryGames/binguo/icon.png": gg,
            "../assets/icons/home/AllLotteryGames/binguo/lock_money.png": rg,
            "../assets/icons/home/AllLotteryGames/binguo/record.png": dg,
            "../assets/icons/home/AllLotteryGames/binguo/record_icon.png": pg,
            "../assets/icons/home/AllLotteryGames/binguo/rule_bg.png": _g,
            "../assets/icons/home/AllLotteryGames/binguo/rule_dice_1.png": ug,
            "../assets/icons/home/AllLotteryGames/binguo/rule_dice_2.png": mg,
            "../assets/icons/home/AllLotteryGames/binguo/rule_dice_3.png": vg,
            "../assets/icons/home/AllLotteryGames/binguo/rule_dice_4.png": hg,
            "../assets/icons/home/AllLotteryGames/binguo/rule_dice_5.png": wg,
            "../assets/icons/home/AllLotteryGames/binguo/rule_dice_6.png": bg,
            "../assets/icons/home/AllLotteryGames/binguo/rule_tip.png": Cg,
            "../assets/icons/home/AllLotteryGames/binguo/top_1.png": Bg,
            "../assets/icons/home/AllLotteryGames/binguo/top_2.png": yg,
            "../assets/icons/home/AllLotteryGames/binguo/top_3.png": fg,
            "../assets/icons/home/AllLotteryGames/binguo/trend1.png": Rg,
            "../assets/icons/home/AllLotteryGames/binguo/trend2.png": Eg,
            "../assets/icons/home/AllLotteryGames/binguo/trend3.png": Ig,
            "../assets/icons/home/AllLotteryGames/binguo/trend_go.png": Sg,
            "../assets/icons/home/AllLotteryGames/changlong/icon-5d.png": Dg,
            "../assets/icons/home/AllLotteryGames/changlong/icon-k3.png": Gg,
            "../assets/icons/home/AllLotteryGames/changlong/icon-wg.png": Ug,
            "../assets/icons/home/AllLotteryGames/cover.png": Mg,
            "../assets/icons/home/AllOnlineGames/gameList/VietnamLottery/datePickerBg.svg": Lg,
            "../assets/icons/home/AllOnlineGames/gameList/VietnamLottery/help.png": kg,
            "../assets/icons/home/AllOnlineGames/gameList/VietnamLottery/ticket.png": Tg,
            "../assets/icons/home/AllOnlineGames/gameList/VietnamLottery/ticketActive.png": Qg,
            "../assets/icons/home/AllOnlineGames/gameList/VietnamLottery/ticketVolume.png": Vg,
            "../assets/icons/home/AllOnlineGames/gameList/cover.png": Og,
            "../assets/icons/home/AllOnlineGames/svg/AG.png": Ng,
            "../assets/icons/home/AllOnlineGames/svg/AGActive.png": Fg,
            "../assets/icons/home/AllOnlineGames/svg/AG_Electronic.png": xg,
            "../assets/icons/home/AllOnlineGames/svg/AG_ElectronicActive.png": Pg,
            "../assets/icons/home/AllOnlineGames/svg/AG_Fish.png": Hg,
            "../assets/icons/home/AllOnlineGames/svg/AG_FishActive.png": Yg,
            "../assets/icons/home/AllOnlineGames/svg/AG_Sport.png": Wg,
            "../assets/icons/home/AllOnlineGames/svg/AG_SportActive.png": Kg,
            "../assets/icons/home/AllOnlineGames/svg/AG_Video.png": Xg,
            "../assets/icons/home/AllOnlineGames/svg/AG_VideoActive.png": Jg,
            "../assets/icons/home/AllOnlineGames/svg/BB.png": zg,
            "../assets/icons/home/AllOnlineGames/svg/BBActive.png": jg,
            "../assets/icons/home/AllOnlineGames/svg/BG.png": Zg,
            "../assets/icons/home/AllOnlineGames/svg/BGActive.png": qg,
            "../assets/icons/home/AllOnlineGames/svg/BetSoft.png": $g,
            "../assets/icons/home/AllOnlineGames/svg/BetSoftActive.png": er,
            "../assets/icons/home/AllOnlineGames/svg/CMD.png": tr,
            "../assets/icons/home/AllOnlineGames/svg/CMDActive.png": sr,
            "../assets/icons/home/AllOnlineGames/svg/CQ9.png": nr,
            "../assets/icons/home/AllOnlineGames/svg/CQ9Active.png": ar,
            "../assets/icons/home/AllOnlineGames/svg/Card365.png": Ar,
            "../assets/icons/home/AllOnlineGames/svg/Card365Active.png": or,
            "../assets/icons/home/AllOnlineGames/svg/DG.png": ir,
            "../assets/icons/home/AllOnlineGames/svg/DGActive.png": lr,
            "../assets/icons/home/AllOnlineGames/svg/EVO.png": cr,
            "../assets/icons/home/AllOnlineGames/svg/EVOActive.png": gr,
            "../assets/icons/home/AllOnlineGames/svg/EVOPlay.png": rr,
            "../assets/icons/home/AllOnlineGames/svg/EVOPlayActive.png": dr,
            "../assets/icons/home/AllOnlineGames/svg/HB.png": pr,
            "../assets/icons/home/AllOnlineGames/svg/HBActive.png": _r,
            "../assets/icons/home/AllOnlineGames/svg/Hacksaw.png": ur,
            "../assets/icons/home/AllOnlineGames/svg/HacksawActive.png": mr,
            "../assets/icons/home/AllOnlineGames/svg/IM.png": vr,
            "../assets/icons/home/AllOnlineGames/svg/IMActive.png": hr,
            "../assets/icons/home/AllOnlineGames/svg/JDB.png": wr,
            "../assets/icons/home/AllOnlineGames/svg/JDBActive.png": br,
            "../assets/icons/home/AllOnlineGames/svg/JILI.png": Cr,
            "../assets/icons/home/AllOnlineGames/svg/JILIActive.png": Br,
            "../assets/icons/home/AllOnlineGames/svg/JOKER.png": yr,
            "../assets/icons/home/AllOnlineGames/svg/JOKERActive.png": fr,
            "../assets/icons/home/AllOnlineGames/svg/MG.png": Rr,
            "../assets/icons/home/AllOnlineGames/svg/MGActive.png": Er,
            "../assets/icons/home/AllOnlineGames/svg/Marbles.png": Ir,
            "../assets/icons/home/AllOnlineGames/svg/MarblesActive.png": Sr,
            "../assets/icons/home/AllOnlineGames/svg/OB.png": Dr,
            "../assets/icons/home/AllOnlineGames/svg/OBActive.png": Gr,
            "../assets/icons/home/AllOnlineGames/svg/PG.png": Ur,
            "../assets/icons/home/AllOnlineGames/svg/PGActive.png": Mr,
            "../assets/icons/home/AllOnlineGames/svg/PP.png": Lr,
            "../assets/icons/home/AllOnlineGames/svg/PPActive.png": kr,
            "../assets/icons/home/AllOnlineGames/svg/SABA.png": Tr,
            "../assets/icons/home/AllOnlineGames/svg/SABAActive.png": Qr,
            "../assets/icons/home/AllOnlineGames/svg/SEXY.png": Vr,
            "../assets/icons/home/AllOnlineGames/svg/SEXYActive.png": Or,
            "../assets/icons/home/AllOnlineGames/svg/SPRIBE.png": Nr,
            "../assets/icons/home/AllOnlineGames/svg/SPRIBEActive.png": Fr,
            "../assets/icons/home/AllOnlineGames/svg/Spribe2.png": xr,
            "../assets/icons/home/AllOnlineGames/svg/Spribe2Active.png": Pr,
            "../assets/icons/home/AllOnlineGames/svg/TB.png": Hr,
            "../assets/icons/home/AllOnlineGames/svg/TBActive.png": Yr,
            "../assets/icons/home/AllOnlineGames/svg/TB_Chess.png": Wr,
            "../assets/icons/home/AllOnlineGames/svg/TB_ChessActive.png": Kr,
            "../assets/icons/home/AllOnlineGames/svg/V8Card.png": Xr,
            "../assets/icons/home/AllOnlineGames/svg/V8CardActive.png": Jr,
            "../assets/icons/home/AllOnlineGames/svg/YGG.png": zr,
            "../assets/icons/home/AllOnlineGames/svg/YGGActive.png": jr,
            "../assets/icons/home/StartPage/66.png": Zr,
            "../assets/icons/home/StartPage/66lottery.png": qr,
            "../assets/icons/home/StartPage/ar006.png": $r,
            "../assets/icons/home/StartPage/ar017.png": ed,
            "../assets/icons/home/StartPage/ar020.png": td,
            "../assets/icons/home/StartPage/ar021.png": sd,
            "../assets/icons/home/StartPage/basantclub.png": nd,
            "../assets/icons/home/StartPage/bigMumbai.png": ad,
            "../assets/icons/home/StartPage/daman.png": Ad,
            "../assets/icons/home/StartPage/game_66.png": od,
            "../assets/icons/home/StartPage/game_dice_66lottery copy.png": id,
            "../assets/icons/home/StartPage/game_dice_66lottery.png": ld,
            "../assets/icons/home/StartPage/game_dice_ar006.png": cd,
            "../assets/icons/home/StartPage/game_dice_ar017.png": gd,
            "../assets/icons/home/StartPage/game_dice_ar020.png": rd,
            "../assets/icons/home/StartPage/game_dice_ar021.png": dd,
            "../assets/icons/home/StartPage/game_dice_basantclub.png": pd,
            "../assets/icons/home/StartPage/game_dice_bdggame.png": _d,
            "../assets/icons/home/StartPage/game_dice_bdtgame.png": ud,
            "../assets/icons/home/StartPage/game_dice_bigmumbai.png": md,
            "../assets/icons/home/StartPage/game_dice_daman.png": vd,
            "../assets/icons/home/StartPage/game_dice_okwin.png": hd,
            "../assets/icons/home/StartPage/game_dice_pakgames.png": wd,
            "../assets/icons/home/StartPage/game_dice_poppg.png": bd,
            "../assets/icons/home/StartPage/game_dice_sit.png": Cd,
            "../assets/icons/home/StartPage/game_dice_yjlottery.png": Bd,
            "../assets/icons/home/StartPage/game_p1.png": yd,
            "../assets/icons/home/StartPage/game_p2.png": fd,
            "../assets/icons/home/StartPage/okwin.png": Rd,
            "../assets/icons/home/StartPage/poppg.png": Ed,
            "../assets/icons/home/StartPage/sit.png": Id,
            "../assets/icons/home/StartPage/yjlottery.png": Sd,
            "../assets/icons/home/all.png": Dd,
            "../assets/icons/home/ar-notice.png": Gd,
            "../assets/icons/home/avatar.png": Ud,
            "../assets/icons/home/backIcon.png": Md,
            "../assets/icons/home/banner.png": Ld,
            "../assets/icons/home/changlong_bg.png": kd,
            "../assets/icons/home/changlong_icon.png": Td,
            "../assets/icons/home/gameListIcons/bg.png": Qd,
            "../assets/icons/home/gameListIcons/bgActive.png": Vd,
            "../assets/icons/home/gameListIcons/bgActiveOld.png": Od,
            "../assets/icons/home/gameListIcons/bgOld.png": Nd,
            "../assets/icons/home/gameListIcons/chess.png": Fd,
            "../assets/icons/home/gameListIcons/chessActive.png": xd,
            "../assets/icons/home/gameListIcons/fish.png": Pd,
            "../assets/icons/home/gameListIcons/fishActive.png": Hd,
            "../assets/icons/home/gameListIcons/flash.png": Yd,
            "../assets/icons/home/gameListIcons/flashActive.png": Wd,
            "../assets/icons/home/gameListIcons/lottery.png": Kd,
            "../assets/icons/home/gameListIcons/lotteryActive.png": Xd,
            "../assets/icons/home/gameListIcons/popular.png": Jd,
            "../assets/icons/home/gameListIcons/popularActive.png": zd,
            "../assets/icons/home/gameListIcons/slot.png": jd,
            "../assets/icons/home/gameListIcons/slotActive.png": Zd,
            "../assets/icons/home/gameListIcons/sport.png": qd,
            "../assets/icons/home/gameListIcons/sportActive.png": $d,
            "../assets/icons/home/gameListIcons/video.png": ep,
            "../assets/icons/home/gameListIcons/videoActive.png": tp,
            "../assets/icons/home/icon_sevice.png": sp,
            "../assets/icons/home/icons/5d.png": np,
            "../assets/icons/home/icons/k3.png": ap,
            "../assets/icons/home/icons/message.svg": Ap,
            "../assets/icons/home/icons/search_icon.svg": op,
            "../assets/icons/home/icons/top1.png": ip,
            "../assets/icons/home/icons/top2.png": lp,
            "../assets/icons/home/icons/top3.png": cp,
            "../assets/icons/home/icons/trx.png": gp,
            "../assets/icons/home/icons/wingo.png": rp,
            "../assets/icons/home/loteria.png": dp,
            "../assets/icons/home/lottery/d55.png": pp,
            "../assets/icons/home/lottery/d56.png": _p,
            "../assets/icons/home/lottery/d57.png": up,
            "../assets/icons/home/lottery/d58.png": mp,
            "../assets/icons/home/lottery/k310.png": vp,
            "../assets/icons/home/lottery/k311.png": hp,
            "../assets/icons/home/lottery/k312.png": wp,
            "../assets/icons/home/lottery/k39.png": bp,
            "../assets/icons/home/lottery/trx13.png": Cp,
            "../assets/icons/home/lottery/trx14.png": Bp,
            "../assets/icons/home/lottery/trx15.png": yp,
            "../assets/icons/home/lottery/trx16.png": fp,
            "../assets/icons/home/lottery/wingo1.png": Rp,
            "../assets/icons/home/lottery/wingo2.png": Ep,
            "../assets/icons/home/lottery/wingo3.png": Ip,
            "../assets/icons/home/lottery/wingo4.png": Sp,
            "../assets/icons/home/luck_bg.png": Dp,
            "../assets/icons/home/minGame.png": Gp,
            "../assets/icons/home/notice.png": Up,
            "../assets/icons/home/profit.png": Mp,
            "../assets/icons/home/promp_bg.png": Lp,
            "../assets/icons/home/promp_left.png": kp,
            "../assets/icons/home/promp_right.png": Tp,
            "../assets/icons/home/turntable_icon.png": Qp,
            "../assets/icons/home/u18.png": Vp,
            "../assets/icons/home/win.png": Op,
            "../assets/icons/home/winning_bg.png": Np,
            "../assets/icons/home/winning_bg2.png": Fp,
            "../assets/icons/ico/bitbug_favicon1.ico": xp,
            "../assets/icons/images/All.png": Pp,
            "../assets/icons/images/DailyProfitRank/border1.png": Hp,
            "../assets/icons/images/DailyProfitRank/border2.png": Yp,
            "../assets/icons/images/DailyProfitRank/border3.png": Wp,
            "../assets/icons/images/DailyProfitRank/crown1.png": Kp,
            "../assets/icons/images/DailyProfitRank/crown2.png": Xp,
            "../assets/icons/images/DailyProfitRank/crown3.png": Jp,
            "../assets/icons/images/DailyProfitRank/place1.png": zp,
            "../assets/icons/images/DailyProfitRank/place2.png": jp,
            "../assets/icons/images/DailyProfitRank/place3.png": Zp,
            "../assets/icons/images/DailyProfitRank/stage.png": qp,
            "../assets/icons/images/avatar.png": $p,
            "../assets/icons/images/avatar1.png": e_,
            "../assets/icons/images/empty.png": t_,
            "../assets/icons/images/gameDefault.png": s_,
            "../assets/icons/images/loading.gif": n_,
            "../assets/icons/images/logo.png": a_,
            "../assets/icons/images/main/headerBg.png": A_,
            "../assets/icons/images/promotion/heroImg.png": o_,
            "../assets/icons/images/promotion/totalIncomeBg.png": i_,
            "../assets/icons/images/promotionBg.png": l_,
            "../assets/icons/images/tabBarBg.png": c_,
            "../assets/icons/languages/ar.png": g_,
            "../assets/icons/languages/bd.png": r_,
            "../assets/icons/languages/bra.png": d_,
            "../assets/icons/languages/en.png": p_,
            "../assets/icons/languages/hd.png": __,
            "../assets/icons/languages/id.png": u_,
            "../assets/icons/languages/japan.png": m_,
            "../assets/icons/languages/korea.png": v_,
            "../assets/icons/languages/md.png": h_,
            "../assets/icons/languages/my.png": w_,
            "../assets/icons/languages/ph.png": b_,
            "../assets/icons/languages/pk.png": C_,
            "../assets/icons/languages/rus.png": B_,
            "../assets/icons/languages/th.png": y_,
            "../assets/icons/languages/vi.png": f_,
            "../assets/icons/languages/zh.png": R_,
            "../assets/icons/login/cellphone.png": E_,
            "../assets/icons/login/eyeInvisible.png": I_,
            "../assets/icons/login/eyeVisible.png": S_,
            "../assets/icons/login/googleIcon.png": D_,
            "../assets/icons/login/iconservr-r.png": G_,
            "../assets/icons/login/iconservr.png": U_,
            "../assets/icons/login/invitation.png": M_,
            "../assets/icons/login/leftArrow.png": L_,
            "../assets/icons/login/newlogin/customer.png": k_,
            "../assets/icons/login/newlogin/email.png": T_,
            "../assets/icons/login/newlogin/emailactive.png": Q_,
            "../assets/icons/login/newlogin/emailnumber.png": V_,
            "../assets/icons/login/newlogin/forgetpassword.png": O_,
            "../assets/icons/login/newlogin/other.png": N_,
            "../assets/icons/login/newlogin/otheractive.png": F_,
            "../assets/icons/login/newlogin/phone.png": x_,
            "../assets/icons/login/newlogin/phoneactive.png": P_,
            "../assets/icons/login/newlogin/tip.png": H_,
            "../assets/icons/login/password.png": Y_,
            "../assets/icons/login/verify.png": W_,
            "../assets/icons/main/Avatar/1.png": K_,
            "../assets/icons/main/Avatar/10.png": X_,
            "../assets/icons/main/Avatar/11.png": J_,
            "../assets/icons/main/Avatar/12.png": z_,
            "../assets/icons/main/Avatar/13.png": j_,
            "../assets/icons/main/Avatar/14.png": Z_,
            "../assets/icons/main/Avatar/15.png": q_,
            "../assets/icons/main/Avatar/16.png": $_,
            "../assets/icons/main/Avatar/17.png": eu,
            "../assets/icons/main/Avatar/18.png": tu,
            "../assets/icons/main/Avatar/19.png": su,
            "../assets/icons/main/Avatar/2.png": nu,
            "../assets/icons/main/Avatar/20.png": au,
            "../assets/icons/main/Avatar/3.png": Au,
            "../assets/icons/main/Avatar/4.png": ou,
            "../assets/icons/main/Avatar/5.png": iu,
            "../assets/icons/main/Avatar/6.png": lu,
            "../assets/icons/main/Avatar/7.png": cu,
            "../assets/icons/main/Avatar/8.png": gu,
            "../assets/icons/main/Avatar/9.png": ru,
            "../assets/icons/main/BetRecord/-1.png": du,
            "../assets/icons/main/BetRecord/1.png": pu,
            "../assets/icons/main/BetRecord/10.png": _u,
            "../assets/icons/main/BetRecord/11.png": uu,
            "../assets/icons/main/BetRecord/12.png": mu,
            "../assets/icons/main/BetRecord/16.png": vu,
            "../assets/icons/main/BetRecord/17.png": hu,
            "../assets/icons/main/BetRecord/18.png": wu,
            "../assets/icons/main/BetRecord/19.png": bu,
            "../assets/icons/main/BetRecord/2.png": Cu,
            "../assets/icons/main/BetRecord/20.png": Bu,
            "../assets/icons/main/BetRecord/21.png": yu,
            "../assets/icons/main/BetRecord/22.png": fu,
            "../assets/icons/main/BetRecord/23.png": Ru,
            "../assets/icons/main/BetRecord/24.png": Eu,
            "../assets/icons/main/BetRecord/26.png": Iu,
            "../assets/icons/main/BetRecord/27.png": Su,
            "../assets/icons/main/BetRecord/29.png": Du,
            "../assets/icons/main/BetRecord/3.png": Gu,
            "../assets/icons/main/BetRecord/30.png": Uu,
            "../assets/icons/main/BetRecord/35.png": Mu,
            "../assets/icons/main/BetRecord/4.png": Lu,
            "../assets/icons/main/BetRecord/5.png": ku,
            "../assets/icons/main/BetRecord/6.png": Tu,
            "../assets/icons/main/BetRecord/7.png": Qu,
            "../assets/icons/main/BetRecord/acitve/-1.png": Vu,
            "../assets/icons/main/BetRecord/acitve/1.png": Ou,
            "../assets/icons/main/BetRecord/acitve/10.png": Nu,
            "../assets/icons/main/BetRecord/acitve/11.png": Fu,
            "../assets/icons/main/BetRecord/acitve/12.png": xu,
            "../assets/icons/main/BetRecord/acitve/16.png": Pu,
            "../assets/icons/main/BetRecord/acitve/17.png": Hu,
            "../assets/icons/main/BetRecord/acitve/18.png": Yu,
            "../assets/icons/main/BetRecord/acitve/19.png": Wu,
            "../assets/icons/main/BetRecord/acitve/2.png": Ku,
            "../assets/icons/main/BetRecord/acitve/20.png": Xu,
            "../assets/icons/main/BetRecord/acitve/21.png": Ju,
            "../assets/icons/main/BetRecord/acitve/22.png": zu,
            "../assets/icons/main/BetRecord/acitve/23.png": ju,
            "../assets/icons/main/BetRecord/acitve/24.png": Zu,
            "../assets/icons/main/BetRecord/acitve/26.png": qu,
            "../assets/icons/main/BetRecord/acitve/27.png": $u,
            "../assets/icons/main/BetRecord/acitve/29.png": em,
            "../assets/icons/main/BetRecord/acitve/3.png": tm,
            "../assets/icons/main/BetRecord/acitve/30.png": sm,
            "../assets/icons/main/BetRecord/acitve/35.png": nm,
            "../assets/icons/main/BetRecord/acitve/4.png": am,
            "../assets/icons/main/BetRecord/acitve/5.png": Am,
            "../assets/icons/main/BetRecord/acitve/6.png": om,
            "../assets/icons/main/BetRecord/acitve/7.png": im,
            "../assets/icons/main/CStype1.png": lm,
            "../assets/icons/main/CStype2.png": cm,
            "../assets/icons/main/CStype3.png": gm,
            "../assets/icons/main/CStype4.png": rm,
            "../assets/icons/main/CStype5.png": dm,
            "../assets/icons/main/CStype6.png": pm,
            "../assets/icons/main/CStype7.png": _m,
            "../assets/icons/main/EmailIcon.png": um,
            "../assets/icons/main/GooglePolygon.png": mm,
            "../assets/icons/main/GoogleSubtract.png": vm,
            "../assets/icons/main/GoogleTip.png": hm,
            "../assets/icons/main/Laundry/Vector.png": wm,
            "../assets/icons/main/Laundry/promptImg.png": bm,
            "../assets/icons/main/Laundry/right.png": Cm,
            "../assets/icons/main/Laundry/ruleicon.png": Bm,
            "../assets/icons/main/Laundry/superjackpotHome.png": ym,
            "../assets/icons/main/Laundry/wallet.png": fm,
            "../assets/icons/main/Laundry/zs.png": Rm,
            "../assets/icons/main/MyCoinsBanner.png": Em,
            "../assets/icons/main/MyCoinsBanner2.png": Im,
            "../assets/icons/main/StrongBoxRecordBg.png": Sm,
            "../assets/icons/main/Subtract.png": Dm,
            "../assets/icons/main/Super/Group.png": Gm,
            "../assets/icons/main/Super/Grouptip.png": Um,
            "../assets/icons/main/Super/SuperJackpotBg.png": Mm,
            "../assets/icons/main/Super/close.svg": Lm,
            "../assets/icons/main/Super/icon.png": km,
            "../assets/icons/main/Super/rulebg.png": Tm,
            "../assets/icons/main/TotalAssetsBg.png": Qm,
            "../assets/icons/main/VipIcon.png": Vm,
            "../assets/icons/main/about.png": Om,
            "../assets/icons/main/aboutBg.png": Nm,
            "../assets/icons/main/aboutCenter.png": Fm,
            "../assets/icons/main/ar-TotalAssetsBg.png": xm,
            "../assets/icons/main/balanceIcon.png": Pm,
            "../assets/icons/main/before_cire.png": Hm,
            "../assets/icons/main/betHistory.png": Ym,
            "../assets/icons/main/betHistoryShadow.png": Wm,
            "../assets/icons/main/betInfoStep.png": Km,
            "../assets/icons/main/betResultStep.png": Xm,
            "../assets/icons/main/betSixInfoStep.png": Jm,
            "../assets/icons/main/betSportStep.png": zm,
            "../assets/icons/main/bindemailsuccess.png": jm,
            "../assets/icons/main/chessStepIcon.png": Zm,
            "../assets/icons/main/clear.png": qm,
            "../assets/icons/main/clearIcon.png": $m,
            "../assets/icons/main/close.png": e1,
            "../assets/icons/main/close_B.png": t1,
            "../assets/icons/main/copy.png": s1,
            "../assets/icons/main/copyIcon.png": n1,
            "../assets/icons/main/cps.png": a1,
            "../assets/icons/main/customerBg.png": A1,
            "../assets/icons/main/dialogNickname.png": o1,
            "../assets/icons/main/down.png": i1,
            "../assets/icons/main/dropDown.png": l1,
            "../assets/icons/main/editPencil.png": c1,
            "../assets/icons/main/editPhoneIcon.png": g1,
            "../assets/icons/main/editPswIcon.png": r1,
            "../assets/icons/main/exchangeIcon.png": d1,
            "../assets/icons/main/feedbackImg.png": p1,
            "../assets/icons/main/gRecord.png": _1,
            "../assets/icons/main/gameStatsSteps.png": u1,
            "../assets/icons/main/gift.png": m1,
            "../assets/icons/main/giftFolder.png": v1,
            "../assets/icons/main/giftIcon.png": h1,
            "../assets/icons/main/googleKey.png": w1,
            "../assets/icons/main/googleValidation.png": b1,
            "../assets/icons/main/googleVerifyBg.png": C1,
            "../assets/icons/main/guide.png": B1,
            "../assets/icons/main/gverifyDownload.png": y1,
            "../assets/icons/main/iconChess.png": f1,
            "../assets/icons/main/iconElectric.png": R1,
            "../assets/icons/main/iconFishing.png": E1,
            "../assets/icons/main/iconLottery.png": I1,
            "../assets/icons/main/iconMiniGame.png": S1,
            "../assets/icons/main/iconPhysics.png": D1,
            "../assets/icons/main/iconRealPerson.png": G1,
            "../assets/icons/main/iconSlots.png": U1,
            "../assets/icons/main/incomeIcon.png": M1,
            "../assets/icons/main/invitationBonus.png": L1,
            "../assets/icons/main/invitation_bg.png": k1,
            "../assets/icons/main/inviteIcon.png": T1,
            "../assets/icons/main/inviterecord.svg": Q1,
            "../assets/icons/main/inviterule.svg": V1,
            "../assets/icons/main/kBg.png": O1,
            "../assets/icons/main/languageIcon.png": N1,
            "../assets/icons/main/languageSwitch.png": F1,
            "../assets/icons/main/laundryIcon.png": x1,
            "../assets/icons/main/logout.png": P1,
            "../assets/icons/main/loterry.png": H1,
            "../assets/icons/main/lotteryHistory.png": Y1,
            "../assets/icons/main/lotteryIcon.png": W1,
            "../assets/icons/main/moonBar.png": K1,
            "../assets/icons/main/myCoin.png": X1,
            "../assets/icons/main/myWithdrawHistory.png": J1,
            "../assets/icons/main/mycoins_bg.png": z1,
            "../assets/icons/main/mylottery.png": j1,
            "../assets/icons/main/nextIcon.png": Z1,
            "../assets/icons/main/notification.png": q1,
            "../assets/icons/main/notificationCenter.png": $1,
            "../assets/icons/main/notificationIcon.png": ev,
            "../assets/icons/main/notifyIcon.png": tv,
            "../assets/icons/main/numberBG.png": sv,
            "../assets/icons/main/orderIcon.png": nv,
            "../assets/icons/main/points.png": av,
            "../assets/icons/main/pointsSmallIncon.png": Av,
            "../assets/icons/main/privacyIcon.png": ov,
            "../assets/icons/main/productOrders.png": iv,
            "../assets/icons/main/pswLock.png": lv,
            "../assets/icons/main/rechargeHistory.png": cv,
            "../assets/icons/main/rechargeIcon.png": gv,
            "../assets/icons/main/recordIcon.png": rv,
            "../assets/icons/main/redPacket.png": dv,
            "../assets/icons/main/redPacketShadow.png": pv,
            "../assets/icons/main/refresh.png": _v,
            "../assets/icons/main/righticon.svg": uv,
            "../assets/icons/main/riskProtocal.png": mv,
            "../assets/icons/main/safetyIcon.png": vv,
            "../assets/icons/main/serviceCenter.png": hv,
            "../assets/icons/main/settingCenter.png": wv,
            "../assets/icons/main/settings.png": bv,
            "../assets/icons/main/sliderNum.png": Cv,
            "../assets/icons/main/statsIcon.png": Bv,
            "../assets/icons/main/suggestionCenter.png": yv,
            "../assets/icons/main/sugguesions.png": fv,
            "../assets/icons/main/superIcon.png": Rv,
            "../assets/icons/main/support.png": Ev,
            "../assets/icons/main/tipIcon.png": Iv,
            "../assets/icons/main/tradeHistory.png": Sv,
            "../assets/icons/main/tradeHistoryShadow.png": Dv,
            "../assets/icons/main/transAction/ar-trans.png": Gv,
            "../assets/icons/main/transAction/trans.png": Uv,
            "../assets/icons/main/transferInIcon.png": Mv,
            "../assets/icons/main/transferOutIcon.png": Lv,
            "../assets/icons/main/trianglered.png": kv,
            "../assets/icons/main/unfinish.svg": Tv,
            "../assets/icons/main/uploadCamera.png": Qv,
            "../assets/icons/main/vault.png": Vv,
            "../assets/icons/main/vaultSmallIcon.png": Ov,
            "../assets/icons/main/versionUpdate.png": Nv,
            "../assets/icons/main/vip0.png": Fv,
            "../assets/icons/main/vip1.png": xv,
            "../assets/icons/main/vip10.png": Pv,
            "../assets/icons/main/vip2.png": Hv,
            "../assets/icons/main/vip3.png": Yv,
            "../assets/icons/main/vip4.png": Wv,
            "../assets/icons/main/vip5.png": Kv,
            "../assets/icons/main/vip6.png": Xv,
            "../assets/icons/main/vip7.png": Jv,
            "../assets/icons/main/vip8.png": zv,
            "../assets/icons/main/vip9.png": jv,
            "../assets/icons/main/wallet.png": Zv,
            "../assets/icons/main/wallets.png": qv,
            "../assets/icons/main/widthdrawBlue.png": $v,
            "../assets/icons/main/withdrawHistory.png": eh,
            "../assets/icons/main/zs.png": th,
            "../assets/icons/promotion/TeamPartner/banner.png": sh,
            "../assets/icons/promotion/TeamPartner/box.png": nh,
            "../assets/icons/promotion/TeamReport/roundIcon.png": ah,
            "../assets/icons/promotion/commission.png": Ah,
            "../assets/icons/promotion/commission/betInfoStep.png": oh,
            "../assets/icons/promotion/commission/bg.png": ih,
            "../assets/icons/promotion/commission/line.png": lh,
            "../assets/icons/promotion/copy_code.png": ch,
            "../assets/icons/promotion/crown.png": gh,
            "../assets/icons/promotion/direct.png": rh,
            "../assets/icons/promotion/group.png": dh,
            "../assets/icons/promotion/invitation.png": ph,
            "../assets/icons/promotion/invite.png": _h,
            "../assets/icons/promotion/invite_reg.png": uh,
            "../assets/icons/promotion/money.png": mh,
            "../assets/icons/promotion/promotionRule.png": vh,
            "../assets/icons/promotion/promotionShare/Subtract.png": hh,
            "../assets/icons/promotion/promotionShare/bank.png": wh,
            "../assets/icons/promotion/promotionShare/bg1.png": bh,
            "../assets/icons/promotion/promotionShare/logo.png": Ch,
            "../assets/icons/promotion/promotionShare/lottery.png": Bh,
            "../assets/icons/promotion/promotionShare/poster.png": yh,
            "../assets/icons/promotion/promotionShare/trucktick.png": fh,
            "../assets/icons/promotion/promotion_bg.png": Rh,
            "../assets/icons/promotion/promotionbg.png": Eh,
            "../assets/icons/promotion/rank-1.png": Ih,
            "../assets/icons/promotion/rank-2.png": Sh,
            "../assets/icons/promotion/rank-3.png": Dh,
            "../assets/icons/promotion/rankList/directSubordinate.png": Gh,
            "../assets/icons/promotion/rankList/extraBonus.png": Uh,
            "../assets/icons/promotion/rankList/groupSubordinate.png": Mh,
            "../assets/icons/promotion/rankList/wallet.png": Lh,
            "../assets/icons/promotion/rebateRatio.png": kh,
            "../assets/icons/promotion/receive.png": Th,
            "../assets/icons/promotion/right_arrow.png": Qh,
            "../assets/icons/promotion/rule/Lv0.png": Vh,
            "../assets/icons/promotion/rule/Lv1.png": Oh,
            "../assets/icons/promotion/rule/Lv2.png": Nh,
            "../assets/icons/promotion/rule/Lv3.png": Fh,
            "../assets/icons/promotion/rule/Lv4.png": xh,
            "../assets/icons/promotion/rule/Lv5.png": Ph,
            "../assets/icons/promotion/rule/Lv6.png": Hh,
            "../assets/icons/promotion/rule/Lv7.png": Yh,
            "../assets/icons/promotion/rule/lv.png": Wh,
            "../assets/icons/promotion/searchIcon.png": Kh,
            "../assets/icons/promotion/server.png": Xh,
            "../assets/icons/promotion/serverbg.png": Jh,
            "../assets/icons/promotion/subordinate.png": zh,
            "../assets/icons/promotion/team_partner.png": jh,
            "../assets/icons/promotion/team_port.png": Zh,
            "../assets/icons/promotion/u1.png": qh,
            "../assets/icons/promotion/u2.png": $h,
            "../assets/icons/promotion/wallet.png": ew,
            "../assets/icons/searchBarIcons/searchIcon.png": tw,
            "../assets/icons/searchBarIcons/searchIcon1.png": sw,
            "../assets/icons/svg/Line.svg": nw,
            "../assets/icons/svg/SABA.svg": aw,
            "../assets/icons/svg/activity.svg": Aw,
            "../assets/icons/svg/anbg.svg": ow,
            "../assets/icons/svg/changlong.svg": iw,
            "../assets/icons/svg/chat.svg": lw,
            "../assets/icons/svg/close.svg": cw,
            "../assets/icons/svg/copy.svg": gw,
            "../assets/icons/svg/down.svg": rw,
            "../assets/icons/svg/errorTip.svg": dw,
            "../assets/icons/svg/eye.svg": pw,
            "../assets/icons/svg/game_logo/AG.svg": _w,
            "../assets/icons/svg/game_logo/BB.svg": uw,
            "../assets/icons/svg/game_logo/CARD365.svg": mw,
            "../assets/icons/svg/game_logo/CMD.svg": vw,
            "../assets/icons/svg/game_logo/CQ9.svg": hw,
            "../assets/icons/svg/game_logo/DG.svg": ww,
            "../assets/icons/svg/game_logo/EVO.svg": bw,
            "../assets/icons/svg/game_logo/FISH.svg": Cw,
            "../assets/icons/svg/game_logo/HB.svg": Bw,
            "../assets/icons/svg/game_logo/IM.svg": yw,
            "../assets/icons/svg/game_logo/JDB.svg": fw,
            "../assets/icons/svg/game_logo/JILI.svg": Rw,
            "../assets/icons/svg/game_logo/MG.svg": Ew,
            "../assets/icons/svg/game_logo/PG.svg": Iw,
            "../assets/icons/svg/game_logo/PP.svg": Sw,
            "../assets/icons/svg/game_logo/SABA.svg": Dw,
            "../assets/icons/svg/game_logo/SEXY.svg": Gw,
            "../assets/icons/svg/game_logo/SPRIBE.svg": Uw,
            "../assets/icons/svg/game_logo/TB.svg": Mw,
            "../assets/icons/svg/game_logo/V8CARD.svg": Lw,
            "../assets/icons/svg/game_logo/WICKETS9.svg": kw,
            "../assets/icons/svg/game_logo/WM.svg": Tw,
            "../assets/icons/svg/home.svg": Qw,
            "../assets/icons/svg/main.svg": Vw,
            "../assets/icons/svg/nbg.svg": Ow,
            "../assets/icons/svg/play.svg": Nw,
            "../assets/icons/svg/playactive.svg": Fw,
            "../assets/icons/svg/promotion.svg": xw,
            "../assets/icons/svg/resultanbg.svg": Pw,
            "../assets/icons/svg/subtract.svg": Hw,
            "../assets/icons/svg/wallet.svg": Yw,
            "../assets/icons/tabBarIcons/activity.png": Ww,
            "../assets/icons/tabBarIcons/activity_active.png": Kw,
            "../assets/icons/tabBarIcons/home.png": Xw,
            "../assets/icons/tabBarIcons/home_active.png": Jw,
            "../assets/icons/tabBarIcons/main.png": zw,
            "../assets/icons/tabBarIcons/main_active.png": jw,
            "../assets/icons/tabBarIcons/promotion.png": Zw,
            "../assets/icons/tabBarIcons/wallet.png": qw,
            "../assets/icons/tabBarIcons/wallet_active.png": $w,
            "../assets/icons/vip/RebateDetails/0.png": e2,
            "../assets/icons/vip/RebateDetails/1.png": t2,
            "../assets/icons/vip/RebateDetails/10.png": s2,
            "../assets/icons/vip/RebateDetails/2.png": n2,
            "../assets/icons/vip/RebateDetails/3.png": a2,
            "../assets/icons/vip/RebateDetails/4.png": A2,
            "../assets/icons/vip/RebateDetails/5.png": o2,
            "../assets/icons/vip/RebateDetails/6.png": i2,
            "../assets/icons/vip/RebateDetails/7.png": l2,
            "../assets/icons/vip/RebateDetails/8.png": c2,
            "../assets/icons/vip/RebateDetails/9.png": g2,
            "../assets/icons/vip/RebateDetails/Circle-1.png": r2,
            "../assets/icons/vip/RebateDetails/Circle-2.png": d2,
            "../assets/icons/vip/bottomBg.png": p2,
            "../assets/icons/vip/crown.png": _2,
            "../assets/icons/vip/diamond.png": u2,
            "../assets/icons/vip/gold.png": m2,
            "../assets/icons/vip/grade/0.png": v2,
            "../assets/icons/vip/grade/1.png": h2,
            "../assets/icons/vip/grade/10.png": w2,
            "../assets/icons/vip/grade/2.png": b2,
            "../assets/icons/vip/grade/3.png": C2,
            "../assets/icons/vip/grade/4.png": B2,
            "../assets/icons/vip/grade/5.png": y2,
            "../assets/icons/vip/grade/6.png": f2,
            "../assets/icons/vip/grade/7.png": R2,
            "../assets/icons/vip/grade/8.png": E2,
            "../assets/icons/vip/grade/9.png": I2,
            "../assets/icons/vip/insurance1.png": S2,
            "../assets/icons/vip/love.png": D2,
            "../assets/icons/vip/love2.png": G2,
            "../assets/icons/vip/love3.png": U2,
            "../assets/icons/vip/myWelfare/welfare1.png": M2,
            "../assets/icons/vip/myWelfare/welfare2.png": L2,
            "../assets/icons/vip/myWelfare/welfare3.png": k2,
            "../assets/icons/vip/myWelfare/welfare4.png": T2,
            "../assets/icons/vip/myWelfare/welfare5.png": Q2,
            "../assets/icons/vip/succeed.png": V2,
            "../assets/icons/vip/swiper/HaveReached.png": O2,
            "../assets/icons/vip/swiper/bg/bg1.png": N2,
            "../assets/icons/vip/swiper/bg/bg10.png": F2,
            "../assets/icons/vip/swiper/bg/bg2.png": x2,
            "../assets/icons/vip/swiper/bg/bg3.png": P2,
            "../assets/icons/vip/swiper/bg/bg4.png": H2,
            "../assets/icons/vip/swiper/bg/bg5.png": Y2,
            "../assets/icons/vip/swiper/bg/bg6.png": W2,
            "../assets/icons/vip/swiper/bg/bg7.png": K2,
            "../assets/icons/vip/swiper/bg/bg8.png": X2,
            "../assets/icons/vip/swiper/bg/bg9.png": J2,
            "../assets/icons/vip/swiper/crown/1.png": z2,
            "../assets/icons/vip/swiper/crown/2.png": j2,
            "../assets/icons/vip/swiper/logo/1.png": Z2,
            "../assets/icons/vip/swiper/logo/10.png": q2,
            "../assets/icons/vip/swiper/logo/2.png": $2,
            "../assets/icons/vip/swiper/logo/3.png": e0,
            "../assets/icons/vip/swiper/logo/4.png": t0,
            "../assets/icons/vip/swiper/logo/5.png": s0,
            "../assets/icons/vip/swiper/logo/6.png": n0,
            "../assets/icons/vip/swiper/logo/7.png": a0,
            "../assets/icons/vip/swiper/logo/8.png": A0,
            "../assets/icons/vip/swiper/logo/9.png": o0,
            "../assets/icons/vip/swiper/ununlocked.png": i0,
            "../assets/icons/vip/wallet.png": l0,
            "../assets/icons/vip/wallet1.png": c0,
            "../assets/icons/vip/weal/1.png": g0,
            "../assets/icons/vip/weal/2.png": r0,
            "../assets/icons/vip/weal/3.png": d0,
            "../assets/icons/vip/weal/4.png": p0,
            "../assets/icons/vip/weal/5.png": _0,
            "../assets/icons/vip/weal/weal3.png": u0,
            "../assets/icons/vip/weal/weal4.png": m0,
            "../assets/icons/vip/weal/weal5.png": v0,
            "../assets/icons/vip/welfareBG.png": h0,
            "../assets/icons/vip/xm.png": w0,
            "../assets/icons/wallet/AG.png": b0,
            "../assets/icons/wallet/AG_Video.png": C0,
            "../assets/icons/wallet/ArPayBackground.svg": B0,
            "../assets/icons/wallet/Ar_Gift.svg": y0,
            "../assets/icons/wallet/BetSoft.png": f0,
            "../assets/icons/wallet/CMD.png": R0,
            "../assets/icons/wallet/CQ9.png": E0,
            "../assets/icons/wallet/Card365.png": I0,
            "../assets/icons/wallet/DG.png": S0,
            "../assets/icons/wallet/EVOPlay.png": D0,
            "../assets/icons/wallet/EVO_Electronic.png": G0,
            "../assets/icons/wallet/EVO_Video.png": U0,
            "../assets/icons/wallet/HB.png": M0,
            "../assets/icons/wallet/IM.png": L0,
            "../assets/icons/wallet/JDB.png": k0,
            "../assets/icons/wallet/JILI.png": T0,
            "../assets/icons/wallet/Lottery.png": Q0,
            "../assets/icons/wallet/MG.png": V0,
            "../assets/icons/wallet/PG.png": O0,
            "../assets/icons/wallet/PP.png": N0,
            "../assets/icons/wallet/SEXY_Video.png": F0,
            "../assets/icons/wallet/SaBa.png": x0,
            "../assets/icons/wallet/TB.png": P0,
            "../assets/icons/wallet/TB_Chess.png": H0,
            "../assets/icons/wallet/V8Card.png": Y0,
            "../assets/icons/wallet/WM_Video.png": W0,
            "../assets/icons/wallet/Wickets9.png": K0,
            "../assets/icons/wallet/YGG.png": X0,
            "../assets/icons/wallet/ar1.png": J0,
            "../assets/icons/wallet/ar2.png": z0,
            "../assets/icons/wallet/ar_appeal.png": j0,
            "../assets/icons/wallet/ar_success.png": Z0,
            "../assets/icons/wallet/copy.png": q0,
            "../assets/icons/wallet/hint.png": $0,
            "../assets/icons/wallet/recharge/C2Chelp.png": eb,
            "../assets/icons/wallet/recharge/amount_error.png": tb,
            "../assets/icons/wallet/recharge/appeal.png": sb,
            "../assets/icons/wallet/recharge/appeal_state.png": nb,
            "../assets/icons/wallet/recharge/bankN.png": ab,
            "../assets/icons/wallet/recharge/bank_card.png": Ab,
            "../assets/icons/wallet/recharge/bank_card_active.png": ob,
            "../assets/icons/wallet/recharge/banktobank.png": ib,
            "../assets/icons/wallet/recharge/cancel.png": lb,
            "../assets/icons/wallet/recharge/chongzhi.png": cb,
            "../assets/icons/wallet/recharge/cip.png": gb,
            "../assets/icons/wallet/recharge/clean.png": rb,
            "../assets/icons/wallet/recharge/close.png": db,
            "../assets/icons/wallet/recharge/coin.png": pb,
            "../assets/icons/wallet/recharge/copy.png": _b,
            "../assets/icons/wallet/recharge/copy1.png": ub,
            "../assets/icons/wallet/recharge/detail/appeal.png": mb,
            "../assets/icons/wallet/recharge/detail/bank.png": vb,
            "../assets/icons/wallet/recharge/detail/kbz.png": hb,
            "../assets/icons/wallet/recharge/detail/kbz_icon.png": wb,
            "../assets/icons/wallet/recharge/detail/slot_wallet.png": bb,
            "../assets/icons/wallet/recharge/detail/wave.png": Cb,
            "../assets/icons/wallet/recharge/detail/wave_icon.png": Bb,
            "../assets/icons/wallet/recharge/detail_upi_icon.png": yb,
            "../assets/icons/wallet/recharge/eth.png": fb,
            "../assets/icons/wallet/recharge/ewallet.png": Rb,
            "../assets/icons/wallet/recharge/fail.png": Eb,
            "../assets/icons/wallet/recharge/gift.png": Ib,
            "../assets/icons/wallet/recharge/google_pay.png": Sb,
            "../assets/icons/wallet/recharge/left_arrow.png": Db,
            "../assets/icons/wallet/recharge/mainChain.png": Gb,
            "../assets/icons/wallet/recharge/moneyicon.png": Ub,
            "../assets/icons/wallet/recharge/online_active.png": Mb,
            "../assets/icons/wallet/recharge/onlinepay.png": Lb,
            "../assets/icons/wallet/recharge/onlinepay2.png": kb,
            "../assets/icons/wallet/recharge/onlinepay_active.png": Tb,
            "../assets/icons/wallet/recharge/other_bank.png": Qb,
            "../assets/icons/wallet/recharge/paytm.png": Vb,
            "../assets/icons/wallet/recharge/phone_pe.png": Ob,
            "../assets/icons/wallet/recharge/point.png": Nb,
            "../assets/icons/wallet/recharge/qrcode.png": Fb,
            "../assets/icons/wallet/recharge/qrcode_active.png": xb,
            "../assets/icons/wallet/recharge/quickpay.png": Pb,
            "../assets/icons/wallet/recharge/quickpay2.png": Hb,
            "../assets/icons/wallet/recharge/rechargeRecords/state/0.png": Yb,
            "../assets/icons/wallet/recharge/rechargeRecords/state/1.png": Wb,
            "../assets/icons/wallet/recharge/rechargeRecords/state/2.png": Kb,
            "../assets/icons/wallet/recharge/rechargeRecords/state/3.png": Xb,
            "../assets/icons/wallet/recharge/rechargeRecords/state/4.png": Jb,
            "../assets/icons/wallet/recharge/refresh.png": zb,
            "../assets/icons/wallet/recharge/sanjiao.png": jb,
            "../assets/icons/wallet/recharge/saveWallet.png": Zb,
            "../assets/icons/wallet/recharge/setup1.png": qb,
            "../assets/icons/wallet/recharge/setup2.png": $b,
            "../assets/icons/wallet/recharge/setup2_active.png": eC,
            "../assets/icons/wallet/recharge/setup3.png": tC,
            "../assets/icons/wallet/recharge/setup3_active.png": sC,
            "../assets/icons/wallet/recharge/setup4.png": nC,
            "../assets/icons/wallet/recharge/setup4_active.png": aC,
            "../assets/icons/wallet/recharge/shuoming.png": AC,
            "../assets/icons/wallet/recharge/success.png": oC,
            "../assets/icons/wallet/recharge/timeout.png": iC,
            "../assets/icons/wallet/recharge/tip.png": lC,
            "../assets/icons/wallet/recharge/transf_amount.png": cC,
            "../assets/icons/wallet/recharge/trx.png": gC,
            "../assets/icons/wallet/recharge/unit_active.png": rC,
            "../assets/icons/wallet/recharge/unit_icon.png": dC,
            "../assets/icons/wallet/recharge/upi_recharge.png": pC,
            "../assets/icons/wallet/recharge/upt_tip.png": _C,
            "../assets/icons/wallet/recharge/usdt.png": uC,
            "../assets/icons/wallet/recharge/wait.png": mC,
            "../assets/icons/wallet/recharge/wallettobank.png": vC,
            "../assets/icons/wallet/serverIcon.png": hC,
            "../assets/icons/wallet/tobePay/QRCode.png": wC,
            "../assets/icons/wallet/tobePay/explain.png": bC,
            "../assets/icons/wallet/tobePay/fast.png": CC,
            "../assets/icons/wallet/tobePay/thirdPartyLogo.png": BC,
            "../assets/icons/wallet/wallets.png": yC,
            "../assets/icons/wallet/withdraw/BankCard.png": fC,
            "../assets/icons/wallet/withdraw/E-wallet.png": RC,
            "../assets/icons/wallet/withdraw/EWallet/bankHeader.png": EC,
            "../assets/icons/wallet/withdraw/EWallet/cards.png": IC,
            "../assets/icons/wallet/withdraw/EWallet/momo.png": SC,
            "../assets/icons/wallet/withdraw/EWallet/wallet.png": DC,
            "../assets/icons/wallet/withdraw/USDT/address.png": GC,
            "../assets/icons/wallet/withdraw/USDT/anotherNamer.png": UC,
            "../assets/icons/wallet/withdraw/USDT/bankHeader.png": MC,
            "../assets/icons/wallet/withdraw/USDT/network.png": LC,
            "../assets/icons/wallet/withdraw/USDT/recharge_usdt.png": kC,
            "../assets/icons/wallet/withdraw/USDT/usdt.png": TC,
            "../assets/icons/wallet/withdraw/USDT/usdtLogo3.png": QC,
            "../assets/icons/wallet/withdraw/add.png": VC,
            "../assets/icons/wallet/withdraw/balance.png": OC,
            "../assets/icons/wallet/withdraw/bankCard/1.png": NC,
            "../assets/icons/wallet/withdraw/bankCard/21.png": FC,
            "../assets/icons/wallet/withdraw/bankCard/3.png": xC,
            "../assets/icons/wallet/withdraw/bankCard/5.png": PC,
            "../assets/icons/wallet/withdraw/bankCard/address.png": HC,
            "../assets/icons/wallet/withdraw/bankCard/bank.png": YC,
            "../assets/icons/wallet/withdraw/bankCard/bankCard.png": WC,
            "../assets/icons/wallet/withdraw/bankCard/bankHeader1.png": KC,
            "../assets/icons/wallet/withdraw/bankCard/bankHeader2.png": XC,
            "../assets/icons/wallet/withdraw/bankCard/bankLogo.png": JC,
            "../assets/icons/wallet/withdraw/bankCard/email.png": zC,
            "../assets/icons/wallet/withdraw/bankCard/ifscCode.png": jC,
            "../assets/icons/wallet/withdraw/bankCard/name.png": ZC,
            "../assets/icons/wallet/withdraw/bankCard/phone.png": qC,
            "../assets/icons/wallet/withdraw/bankCard/searchIcon2.png": $C,
            "../assets/icons/wallet/withdraw/bankLogo1.png": e4,
            "../assets/icons/wallet/withdraw/bg1.png": t4,
            "../assets/icons/wallet/withdraw/bg2.png": s4,
            "../assets/icons/wallet/withdraw/c2c/1.png": n4,
            "../assets/icons/wallet/withdraw/c2c/2.png": a4,
            "../assets/icons/wallet/withdraw/c2c/3.png": A4,
            "../assets/icons/wallet/withdraw/c2c/4.png": o4,
            "../assets/icons/wallet/withdraw/c2c/CancelW.png": i4,
            "../assets/icons/wallet/withdraw/c2c/add.png": l4,
            "../assets/icons/wallet/withdraw/c2c/appeal.png": c4,
            "../assets/icons/wallet/withdraw/c2c/bank.png": g4,
            "../assets/icons/wallet/withdraw/c2c/bg11.png": r4,
            "../assets/icons/wallet/withdraw/c2c/bookicon.png": d4,
            "../assets/icons/wallet/withdraw/c2c/c2clogo.png": p4,
            "../assets/icons/wallet/withdraw/c2c/c2clogo_a.png": _4,
            "../assets/icons/wallet/withdraw/c2c/confirmA.png": u4,
            "../assets/icons/wallet/withdraw/c2c/copy-icon.png": m4,
            "../assets/icons/wallet/withdraw/c2c/delBtn.png": v4,
            "../assets/icons/wallet/withdraw/c2c/hicon0.png": h4,
            "../assets/icons/wallet/withdraw/c2c/hicon1.png": w4,
            "../assets/icons/wallet/withdraw/c2c/hicon14.png": b4,
            "../assets/icons/wallet/withdraw/c2c/hicon2.png": C4,
            "../assets/icons/wallet/withdraw/c2c/hicon3.png": B4,
            "../assets/icons/wallet/withdraw/c2c/hicon4.png": y4,
            "../assets/icons/wallet/withdraw/c2c/hicon5.png": f4,
            "../assets/icons/wallet/withdraw/c2c/hicon6.png": R4,
            "../assets/icons/wallet/withdraw/c2c/hicon7.png": E4,
            "../assets/icons/wallet/withdraw/c2c/hicon8.png": I4,
            "../assets/icons/wallet/withdraw/c2c/progress/11/1.png": S4,
            "../assets/icons/wallet/withdraw/c2c/progress/11/2.png": D4,
            "../assets/icons/wallet/withdraw/c2c/progress/11/3.png": G4,
            "../assets/icons/wallet/withdraw/c2c/progress/11/4.png": U4,
            "../assets/icons/wallet/withdraw/c2c/progress/3/1.png": M4,
            "../assets/icons/wallet/withdraw/c2c/progress/3/1_a.png": L4,
            "../assets/icons/wallet/withdraw/c2c/progress/3/2.png": k4,
            "../assets/icons/wallet/withdraw/c2c/progress/3/2_a.png": T4,
            "../assets/icons/wallet/withdraw/c2c/progress/3/3.png": Q4,
            "../assets/icons/wallet/withdraw/c2c/progress/3/3_a.png": V4,
            "../assets/icons/wallet/withdraw/c2c/progress/3/4.png": O4,
            "../assets/icons/wallet/withdraw/c2c/progress/3/4_a.png": N4,
            "../assets/icons/wallet/withdraw/c2c/progress/other/1.png": F4,
            "../assets/icons/wallet/withdraw/c2c/progress/other/1_a.png": x4,
            "../assets/icons/wallet/withdraw/c2c/progress/other/2.png": P4,
            "../assets/icons/wallet/withdraw/c2c/progress/other/2_a.png": H4,
            "../assets/icons/wallet/withdraw/c2c/progress/other/3.png": Y4,
            "../assets/icons/wallet/withdraw/c2c/progress/other/3_a.png": W4,
            "../assets/icons/wallet/withdraw/c2c/progress/other/4.png": K4,
            "../assets/icons/wallet/withdraw/c2c/progress/other/4_a.png": X4,
            "../assets/icons/wallet/withdraw/c2c/safety.png": J4,
            "../assets/icons/wallet/withdraw/c2c/selectupi.png": z4,
            "../assets/icons/wallet/withdraw/c2c/seleteBank.png": j4,
            "../assets/icons/wallet/withdraw/c2c/successicon.png": Z4,
            "../assets/icons/wallet/withdraw/c2c/uAmount.png": q4,
            "../assets/icons/wallet/withdraw/c2c/upi.png": $4,
            "../assets/icons/wallet/withdraw/c2c/upiline.png": e3,
            "../assets/icons/wallet/withdraw/c2c/uploadImg.png": t3,
            "../assets/icons/wallet/withdraw/c2c/uploadImg1.png": s3,
            "../assets/icons/wallet/withdraw/c2c/uploadVideo.png": n3,
            "../assets/icons/wallet/withdraw/c2c/uploadVideo1.png": a3,
            "../assets/icons/wallet/withdraw/c2c/wrong.png": A3,
            "../assets/icons/wallet/withdraw/c2c/wrong_1.png": o3,
            "../assets/icons/wallet/withdraw/checked.png": i3,
            "../assets/icons/wallet/withdraw/clear.png": l3,
            "../assets/icons/wallet/withdraw/delete.png": c3,
            "../assets/icons/wallet/withdraw/fail.png": g3,
            "../assets/icons/wallet/withdraw/historyHead.png": r3,
            "../assets/icons/wallet/withdraw/line.png": d3,
            "../assets/icons/wallet/withdraw/momo.png": p3,
            "../assets/icons/wallet/withdraw/pwd.png": _3,
            "../assets/icons/wallet/withdraw/refresh.png": u3,
            "../assets/icons/wallet/withdraw/safety.png": m3,
            "../assets/icons/wallet/withdraw/succeed.png": v3,
            "../assets/icons/wallet/withdraw/unchecked.png": h3,
            "../assets/icons/wallet/withdraw/withdrawHistory/1.png": w3,
            "../assets/icons/wallet/withdraw/withdrawHistory/10.png": b3,
            "../assets/icons/wallet/withdraw/withdrawHistory/10_NS.png": C3,
            "../assets/icons/wallet/withdraw/withdrawHistory/1_NS.png": B3,
            "../assets/icons/wallet/withdraw/withdrawHistory/20.png": y3,
            "../assets/icons/wallet/withdraw/withdrawHistory/20_NS.png": f3,
            "../assets/icons/wallet/withdraw/withdrawHistory/3.png": R3,
            "../assets/icons/wallet/withdraw/withdrawHistory/3_1.png": E3,
            "../assets/icons/wallet/withdraw/withdrawHistory/3_NS.png": I3,
            "../assets/icons/wallet/withdraw/withdrawHistory/4.png": S3,
            "../assets/icons/wallet/withdraw/withdrawHistory/4_NS.png": D3,
            "../assets/icons/wallet/withdraw/withdrawHistory/5.png": G3,
            "../assets/icons/wallet/withdraw/withdrawHistory/5_NS.png": U3,
            "../assets/icons/wallet/withdraw/withdrawHistory/6.png": M3,
            "../assets/icons/wallet/withdraw/withdrawHistory/6_NS.png": L3,
            "../assets/icons/wallet/withdraw/withdrawHistory/8.png": k3,
            "../assets/icons/wallet/withdraw/withdrawHistory/8_NS.png": T3,
            "../assets/icons/wallet/withdraw/withdrawHistory/all.png": Q3,
            "../assets/icons/wallet/withdraw/withdrawHistory/all_NS.png": V3,
            "../assets/icons/wallet/withdraw/withdrawHistory/bc.png": O3,
            "../assets/icons/wallet/withdraw/withdrawHistory/moonBar.png": N3,
            "../assets/icons/wallet/withdraw/withdrawHistory/state/0.png": F3,
            "../assets/icons/wallet/withdraw/withdrawHistory/state/1.png": x3,
            "../assets/icons/wallet/withdraw/withdrawHistory/state/2.png": P3,
            "../assets/icons/wallet/withdraw/withdrawHistory/state/3.png": H3,
            "../assets/icons/wallet/withdraw/withdrawType/1.png": Y3,
            "../assets/icons/wallet/withdraw/withdrawType/10.png": W3,
            "../assets/icons/wallet/withdraw/withdrawType/3.png": K3,
            "../assets/icons/wallet/withdraw/withdrawType/4.png": X3,
            "../assets/icons/wallet/withdraw/withdrawType/4_ns.png": J3,
            "../assets/icons/wallet/withdraw/withdrawType/5.png": z3,
            "../assets/icons/wallet/withdraw/withdrawType/6.png": j3,
            "../assets/icons/wallet/withdraw/withdrawType/8.png": Z3,
            "../assets/icons/wallet/withdraw/withdrawType/KBZpay.png": q3,
            "../assets/icons/wallet/withdraw/withdrawType/WavePay.png": $3,
            "../assets/icons/wallet/withdraw/฿.png": eB,
            "../assets/icons/wallet/withdraw/₫.png": tB,
            "../assets/styles/VIP/vip.scss": sB,
            "../assets/styles/_extend.scss": nB,
            "../assets/styles/_variables.scss": aB,
            "../assets/styles/always.scss": AB,
            "../assets/styles/common.scss": oB,
            "../assets/styles/fonts.scss": iB,
            "../assets/styles/lotteryrecord.scss": lB,
            "../assets/styles/native.scss": cB,
            "../assets/styles/other/blackGoldHome/reset.scss": gB,
            "../assets/styles/other/blueHome/reset.scss": rB,
            "../assets/styles/other/damanHome/reset.scss": dB,
            "../assets/styles/other/electronic/home.scss": pB,
            "../assets/styles/other/electronic/reset.scss": _B,
            "../assets/styles/other/redHome/reset.scss": uB,
            "../assets/styles/other/whiteGoldHome/ar.scss": mB,
            "../assets/styles/other/whiteGoldHome/qiuqiu.scss": vB,
            "../assets/styles/other/whiteGoldHome/reset.scss": hB,
            "../assets/styles/reset.scss": wB,
            "../assets/styles/tbox.scss": bB,
            "../assets/styles/theme/blue/img/wallet/withdraw/withdrawHistory/20.png": CB,
            "../assets/styles/theme/blue/img/wallet/withdraw/withdrawHistory/20_NS.png": BB,
            "../assets/styles/vars.scss": yB,
            "../assets/styles/withdraw.scss": fB,
            "../assets/styles/xoxs.scss": RB,
         })[`../assets/${A}/${e}/${s}.${n}`],
         self.location,
      ).href,
   TB = (e, s) => {
      var A;
      return (A = e.find(o => o.value === s)) == null ? void 0 : A.key;
   },
   sM = (e, s) => {
      var n;
      return (n = e.find(A => A.type === s)) == null ? void 0 : n.typeName;
   },
   nM = () => {
      const e = document.querySelector("meta[name=viewport]");
      if (e !== null) {
         let s = e.getAttribute("content"),
            n = /maximum\-scale=[0-9\.]+/g;
         n.test(s) ? (s = s.replace(n, "maximum-scale=1.0")) : (s = [s, "maximum-scale=1.0"].join(", ")), e.setAttribute("content", s);
      }
   },
   aM = () => /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
   AM = () => ({ today: { start: pe().startOf("day").unix(), end: pe().endOf("day").unix() }, yesterday: { start: pe().subtract(1, "days").startOf("day").unix(), end: pe().subtract(1, "days").endOf("day").unix() }, tomorrow: { start: pe().subtract(-1, "days").startOf("day").unix(), end: pe().subtract(-1, "days").endOf("day").unix() }, last7days: { start: pe().subtract(1, "weeks").startOf("day").unix(), end: pe().subtract(1, "days").endOf("day").unix() }, thisMonth: { start: pe().startOf("months").unix(), end: pe().endOf("day").unix() }, lastMonth: { start: pe().subtract(1, "months").startOf("month").unix(), end: pe().subtract(1, "months").endOf("month").unix() } }),
   oM = (e = "", s = "", n = "", A = "-") => [e.toString(), s.toString(), n.toString()].join(A),
   QB = e => {
      let s = (e == null ? void 0 : e.time) || "",
         n = (e == null ? void 0 : e.status) || 1,
         A = (e == null ? void 0 : e.format) || "YYYY-MM-DD HH:mm:ss",
         o = { key: "", value: [] };
      function i() {
         return s ? pe(s) : pe();
      }
      let c, u;
      switch (n) {
         case 1:
            (A = "YYYY-MM-DD"), (c = i().format(A)), (u = c.split("-"));
            break;
         case 2:
            (A = "HH:mm:ss"), (c = i().format(A)), (u = c.split(":"));
            break;
         case 3:
            (A = "YYYY-MM"), (c = i().format(A)), (u = c.split("-"));
            break;
         default:
            c = i().format(A);
            let h = c.split(" "),
               d = h[0].split("-"),
               p = h[1].split(":");
            u = [...d, ...p];
            break;
      }
      return (o = { key: c, value: u }), o;
   },
   iM = e => {
      const s = new Date(2022, 0, 1),
         n = new Date();
      return e == -1 && n.setTime(n.getTime() - 24 * 60 * 60 * 1e3), { minDate: s, maxDate: n };
   },
   VB = () => ({ minDate: new Date(1970, 0, 1), maxDate: new Date() }),
   Rs = () => localStorage.getItem("language") || "zh",
   Es = () => {
      const e = TB(Cs.languageCodes, localStorage.getItem("language") || "en");
      return e === void 0 ? "en" : e;
   },
   OB = e => {
      localStorage.setItem("language", e);
   };
function NB(e) {
   let s = e === "ar" ? "ar" : "en",
      n = e === "ar" ? "rtl" : "ltr";
   (document.documentElement.lang = s), (document.documentElement.dir = n);
}
const lM = (e, s, n) => {
      if (e) {
         let A = e.toString();
         if (n == 1) {
            let i = parseFloat(A).toFixed(2);
            i.charAt(i.length - 1) == "0" && (s = 1);
         }
         let o = A.indexOf(".");
         return o !== -1 ? (A = A.substring(0, s + o + 1)) : (A = A.substring(0)), parseFloat(A).toFixed(s);
      }
   },
   cM = e => {
      if (!e) return 0;
      let s = "";
      return e > 1e6 ? ((e /= 1e6), (s = "M")) : e > 1e3 && ((e /= 1e3), (s = "K")), e.toString().indexOf(".") > -1 && (e = e.toFixed(2)), e.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") + s;
   },
   gM = (e, s) => {
      var n = 0,
         A = e.toString(),
         o = s.toString();
      try {
         n += A.split(".")[1].length;
      } catch {}
      try {
         n += o.split(".")[1].length;
      } catch {}
      return (Number(A.replace(".", "")) * Number(o.replace(".", ""))) / Math.pow(10, n);
   },
   Ue = e => {
      const s = Le.global.t;
      let n,
         A = [214, 215, -1],
         o = [""];
      e.msgCode ? (A.includes(e.msgCode) || o.includes(e.code) ? (n = e.msg) : (n = s("code" + e.msgCode))) : (n = e.msg || "");
      let i = e.msgCode;
      n &&
         De({
            message:
               `Error: ${i || ""} 
 ` + n,
            wordBreak: "break-word",
         });
   },
   O = async e => await e.then(n => (n && n.code !== 0 ? (Ue(n), null) : n)).catch(n => (Ue(n), null)),
   vt = () => {
      let e = -1,
         s = navigator.userAgent.toLowerCase();
      return ys ? (e = 0) : s.indexOf("android") != -1 || s.indexOf("adr") > -1 ? (e = 1) : s.indexOf("iphone") != -1 ? (e = 2) : s.indexOf("ipad") != -1 ? (e = 3) : (e = -1), e;
   };
function ns(e, s = !1) {
   setTimeout(() => {
      if (s) {
         const n = window.open("", "_blank");
         n.document.open(), n.document.write(e), n.document.close();
      } else window.open(e);
   });
}
const pt = (e, s) => {
      const n = typeof e == "string";
      let A = n ? e : e.url;
      const o = n ? 1 : e.returnType,
         i = vt();
      if ((s == 1 && [1, 2, 3].includes(i) && (A += "&home=1"), o === 2)) return ns(A, !0);
      ys ? ns(A) : window.location.assign(A);
   },
   FB = e => an.MD5(e).toString().toUpperCase().slice(0, 32);
function _t(e) {
   if (typeof e != "object" || e === null) return e;
   if (Array.isArray(e)) return e.map(_t);
   const s = {};
   for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (s[n] = _t(e[n]));
   return s;
}
function Is() {
   return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (e) {
      var s = (Math.random() * 16) | 0,
         n = e === "x" ? s : (s & 3) | 8;
      return n.toString(16);
   });
}
const xB = e => {
   const { protocol: s, host: n, hash: A } = window.location,
      o = s + "//" + n + "/" + A;
   let i = e || "/";
   window.location.href = o + i;
};
function rM(e, s) {
   var i;
   const n = sessionStorage.getItem("areaPhoneLenList");
   if (!n) return !0;
   let o = (i = JSON.parse(n).find(c => c.area == "+" + e)) == null ? void 0 : i.len;
   if ((o == null ? void 0 : o.indexOf("-")) != -1) {
      let c = (o == null ? void 0 : o.toString().split("-")) || [];
      return (c == null ? void 0 : c.length) == 2 ? !(s < c[0] || s > c[1]) : !0;
   }
   return o == s;
}
const dM = () => "bigMumbai",
   pM = (e, s, n, A) => {
      let o = [],
         i = A == 0 ? 2 : 3;
      for (; o.length < e; ) {
         var c = Math.floor(Math.random() * (n - s + 1)) + s;
         o.includes(c.toString().padStart(i, "0")) || o.push(c.toString().padStart(i, "0"));
      }
      return o;
   },
   _M = (e, s, n) => {
      let A = [];
      for (let o = e; o <= s; o++) {
         const i = o.toString().padStart(n, "0"),
            c = i[0];
         i.split("").every(u => u === c) && A.push(o.toString().padStart(n, "0"));
      }
      return A;
   },
   uM = (e, s, n, A) => {
      let o = [];
      const i = n === "even";
      for (let c = e; c <= s; c++) c % 2 === 0 ? i && o.push(c.toString().padStart(A, "0")) : i || o.push(c.toString().padStart(A, "0"));
      return o;
   },
   mM = (e, s) => {
      let n = [];
      for (let A = e; A <= s; A++) n.push(A.toString());
      return n;
   },
   vM = (e, s, n, A) => {
      let o = [];
      const i = n === "big",
         c = Math.floor((s + e) / 2);
      for (let u = e; u <= s; u++) i ? u > c && o.push(u.toString().padStart(A, "0")) : u <= c && o.push(u.toString().padStart(A, "0"));
      return o;
   },
   hM = e => {
      const s = new Set();
      for (let n of e) {
         if (s.has(n)) return !0;
         s.add(n);
      }
      return !1;
   },
   wM = () => {
      if (navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")) {
         for (var e = document.querySelectorAll("input, textarea"), s = 0; s < e.length; s++) e[s].blur();
         return !0;
      }
      return !1;
   },
   PB = e => {
      var s = { á: "a", à: "a", ả: "a", ã: "a", ạ: "a", ắ: "a", ằ: "a", ẳ: "a", ẵ: "a", ặ: "a", ấ: "a", ầ: "a", ẩ: "a", ẫ: "a", ậ: "a", é: "e", è: "e", ẻ: "e", ẽ: "e", ẹ: "e", ế: "e", ề: "e", ể: "e", ễ: "e", ệ: "e", í: "i", ì: "i", ỉ: "i", ĩ: "i", ị: "i", ó: "o", ò: "o", ỏ: "o", õ: "o", ọ: "o", ố: "o", ồ: "o", ổ: "o", ỗ: "o", ộ: "o", ớ: "o", ờ: "o", ở: "o", ỡ: "o", ợ: "o", ú: "u", ù: "u", ủ: "u", ũ: "u", ụ: "u", ứ: "u", ừ: "u", ử: "u", ữ: "u", ự: "u", ý: "y", ỳ: "y", ỷ: "y", ỹ: "y", ỵ: "y", đ: "d" };
      return e.toLowerCase().replace(/[áàảãạắằẳẵặấầẩẫậéèẻẽẹếềểễệíìỉĩịóòỏõọốồổỗộớờởỡợúùủũụứừửữựýỳỷỹỵđ]/g, function (n) {
         return s[n] || n;
      });
   },
   bM = e => {
      if (e.length >= 7) return e.substring(0, 3) + "***" + e.substring(e.length - 3);
      {
         const s = "***",
            n = 7 - e.length,
            A = "*".repeat(n);
         return e.substring(0, Math.ceil((7 - n) / 2)) + s + A + e.substring(Math.ceil((7 - n) / 2));
      }
   };
function CM(e) {
   for (var s = e + "=", n = decodeURIComponent(document.cookie), A = n.split(";"), o = 0; o < A.length; o++) {
      for (var i = A[o]; i.charAt(0) === " "; ) i = i.substring(1);
      if (i.indexOf(s) === 0) return i.substring(s.length, i.length);
   }
   return null;
}
const Qe = Le.global.t,
   BM = (e, s) => {
      let n = new Date(e),
         A = n.getFullYear(),
         o = n.getMonth() + 1,
         i = n.getDay(),
         c = n.getDate(),
         u = n.getHours(),
         h = n.getMinutes(),
         d = n.getSeconds(),
         p = [Qe("sunday"), Qe("monday"), Qe("tuesday"), Qe("wednesday"), Qe("thursday"), Qe("friday"), Qe("saturday")];
      return s.replace("yyyy", A.toString()).replace("MM", o.toString().padStart(2, "0")).replace("M", o.toString()).replace("dd", c.toString().padStart(2, "0")).replace("hh", u.toString().padStart(2, "0")).replace("mm", h.toString().padStart(2, "0")).replace("ss", d.toString().padStart(2, "0")).replace("w", p[i]);
   },
   Ss = (e, s) => (e.length > s ? e.slice(0, s) + "..." : e.toUpperCase()),
   Ae = (e, s = "", n = 2) => {
      var A = /(\d{3})(?=\d)/g;
      if (((e = parseFloat(e)), !isFinite(e) || (!e && e !== 0))) return "";
      (s = s || sessionStorage.getItem("dollarSign") || ""), (n = n ?? 2);
      var o = Math.abs(e).toFixed(n),
         i = n ? o.slice(0, -1 - n) : o,
         c = i.length % 3,
         u = c > 0 ? i.slice(0, c) + (i.length > 3 ? "," : "") : "",
         h = n ? o.slice(-1 - n) : "",
         d = e < 0 ? "-" : "",
         p = Es();
      return p == "2" ? d + u + i.slice(c).replace(A, "$1,") + h + s : d + s + u + i.slice(c).replace(A, "$1,") + h;
   },
   as = e => {
      let s = localStorage.getItem("number") || "",
         n = localStorage.getItem("numberType") || "",
         A = e || n + s;
      return A ? (A.length > 9 ? "+" + A.replace(/^(\d{5})\d+(\d{4})$/, "$1****$2") : "+" + A.replace(/^(\d{4})\d+(\d{2})$/, "$1****$2")) : "";
   },
   yM = e =>
      e.replace(/^([\w]{0,4})[\w\d]*@([\w\d]{0,15}[\w\d\.]*)$/, (s, n, A) => {
         const o = n.length,
            i = A.length,
            c = i > 15 ? A.substring(i - 15) : A;
         return `${o > 4 ? n.substring(0, 4) + "****" : n + "****"}${i > 15 ? "" : "@"}${c}`;
      });
function Ds(e) {
   return btoa(e);
}
function fM(e) {
   return atob(e);
}
const ft = {};
pe.extend(on);
const As = localStorage.getItem("language") || "zh";
let Ze = "";
switch (As) {
   case "zh_TC":
      Ze = "zh-tw";
      break;
   case "tc":
      Ze = "zh-tw";
      break;
   default:
      Ze = As;
      break;
}
Ze && pe.locale(Ze);
const Ft = (e, s = "YYYY-MM-DD HH:mm:ss") => {
      var n = 8,
         A = new Date().getTimezoneOffset();
      if (!e) return "";
      typeof e == "number" && (e = new Date(e * 1e3));
      var o = e.getTime(),
         i = new Date(o + A * 60 * 1e3 + n * 60 * 60 * 1e3),
         c = { "M+": i.getMonth() + 1, "D+": i.getDate(), "h+": i.getHours() % 12 === 0 ? 12 : i.getHours() % 12, "H+": i.getHours(), "m+": i.getMinutes(), "s+": i.getSeconds(), "q+": Math.floor((i.getMonth() + 3) / 3), S: i.getMilliseconds() },
         u = { 0: "日", 1: "一", 2: "二", 3: "三", 4: "四", 5: "五", 6: "六" };
      /(Y+)/.test(s) && (s = s.replace(RegExp.$1, (i.getFullYear() + "").substr(4 - RegExp.$1.length))), /(E+)/.test(s) && (s = s.replace(RegExp.$1, (RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? "星期" : "周") : "") + u[e.getDay() + ""]));
      for (var h in c) new RegExp("(" + h + ")").test(s) && (s = s.replace(RegExp.$1, RegExp.$1.length === 1 ? c[h] : ("00" + c[h]).substr(("" + c[h]).length)));
      return s;
   },
   Gs = (e, s = 1, n = "YYYY-MM-DD HH:mm:ss") => {
      var A = e;
      return s === 1 ? (isNaN(A) && (A = 0), (A = Math.round(parseInt(e.valueOf()))), (A = pe(A).format(n))) : s === 2 && (A = xt(A)), A;
   },
   xt = e => {
      e = e.replace(/-/g, "/");
      var s = Math.round(parseInt(new Date(e).valueOf()) / 1e3);
      return isNaN(s) && (s = 0), s;
   },
   Us = e => parseInt(e / 1e3),
   gt = e => {
      var s = new Date().getTimezoneOffset() / 60;
      if (s > 0)
         var n = 8 - s,
            n = n * 60 * 60,
            A = e - n - 46800 + n;
      else
         var n = 8 + s,
            n = n * 60 * 60,
            A = e - n;
      return A < 0 ? 0 : A;
   },
   Ms = (e, s) => {
      let n = e;
      return (
         n.startTime && ((n.startTime = parseInt(n.startTime / 1e3 || 0)), (n.startTime = gt(n.startTime))),
         n.endTime && ((n.endTime = parseInt(n.endTime / 1e3 || 0)), (n.endTime = gt(n.endTime))),
         s &&
            s.length > 0 &&
            s.map(A => {
               let o = n[A];
               o && ((o = parseInt(o / 1e3 || 0)), (o = gt(o)));
            }),
         n
      );
   },
   HB = () => Math.ceil(new Date().getTime() / 1e3),
   YB = () => pe(new Date()).add(7, "day").unix(),
   Ls = (e, s = "YYYY-MM-DD HH:mm:ss") => {
      let n = Ft(e, s);
      return pe().to(pe(n));
   };
let ks = { filterDate: Ft, filterTimeStamp: Gs, makeNewTimes: xt, toUnix: Us, toBeiJingTime: Ms, fromNow: Ls };
function WB(e) {
   return e.replace(e[0], e[0].toUpperCase());
}
function KB(e, s) {
   let n = {};
   return (
      e.map(A => {
         n[A.value] = A.key;
      }),
      s || s === 0 ? n[s] : ""
   );
}
let Ts = [];
for (let e in ft) {
   if (ft[e][0].auto === !1) break;
   let n = "filter" + WB(e);
   Ts.push([n, A => KB(ft[e], A)]);
}
Ts.forEach(([e, s]) => {
   ks[e] = n => s(n);
});
const XB = ks,
   JB = Object.freeze(Object.defineProperty({ __proto__: null, Timestamp: gt, filterDate: Ft, filterTimeStamp: Gs, fromNow: Ls, getNowTime: HB, makeNewTimes: xt, nextWeek: YB, refiter: XB, toBeiJingTime: Ms, toUnix: Us }, Symbol.toStringTag, { value: "Module" })),
   RM = JB,
   tt = Me({
      id: "activityStore",
      state: () => ({ lotteryItemDetail: {}, orderItem: {}, redeemItem: {} }),
      getters: { getLotteryItemDetail: e => e.lotteryItemDetail, getOrderItem: e => e.orderItem, getRedeemItem: e => e.redeemItem },
      actions: {
         setLotteryItemDetail(e) {
            this.lotteryItemDetail = e;
         },
         setOrderItem(e) {
            this.orderItem = e;
         },
         setRedeemItem(e) {
            this.redeemItem = e;
         },
      },
      persist: !0,
   }),
   ht = Me({
      id: "commonStore",
      state: () => ({ isLoading: !1, isRefreshToken: !1, teleportTarget: null, keepAliveList: ["RechargeHistory"] }),
      getters: { getLoading: e => e.isLoading, getIsRefreshToken: e => e.isRefreshToken, getKeepAliveList: e => e.keepAliveList },
      actions: {
         setLoading(e) {
            this.isLoading = e;
         },
         setIsRefreshToken(e) {
            this.isRefreshToken = e;
         },
         setKeepAliveList(e) {
            this.keepAliveList.includes(e) || this.keepAliveList.push(e);
         },
         reastKeepAliveList() {
            this.keepAliveList = [];
         },
         removeKeepAliveList(e) {
            let s = _t(this.keepAliveList);
            const n = s.indexOf(e);
            n > -1 && (s.splice(n, 1), (this.keepAliveList = s));
         },
      },
   }),
   Pt = Me({
      id: "homeStore",
      state: () => ({ rankList: [], sitemsg: {}, isRead: !1, lotterySoltList: {}, cacheData: new Map(), currentMenu: sessionStorage.getItem("clickedGameType") || "", currentTitle: "" }),
      getters: { getRankList: e => e.rankList, getSiteMsg: e => e.sitemsg, getReadState: e => e.isRead, getLotterySoltList: e => e.lotterySoltList, getCacheValue: e => s => e.cacheData.get(s), getCacheData: e => e.cacheData, getCurrentMenu: e => e.currentMenu, getCurrentTitle: e => e.currentTitle },
      actions: {
         setRankList(e) {
            this.rankList = e;
         },
         setSiteMsg(e) {
            this.sitemsg = e;
         },
         setReadState(e) {
            this.isRead = e;
         },
         setLotterySoltList(e) {
            this.lotterySoltList = e;
         },
         setCacheData(e, s) {
            this.cacheData.set(e, s);
         },
         setCurrentMenu(e) {
            this.currentMenu = e;
         },
         setCurrentTitle(e) {
            this.currentTitle = e;
         },
      },
   }),
   zB = "modulepreload",
   jB = function (e) {
      return "/" + e;
   },
   os = {},
   I = function (s, n, A) {
      if (!n || n.length === 0) return s();
      const o = document.getElementsByTagName("link");
      return Promise.all(
         n.map(i => {
            if (((i = jB(i)), i in os)) return;
            os[i] = !0;
            const c = i.endsWith(".css"),
               u = c ? '[rel="stylesheet"]' : "";
            if (!!A)
               for (let p = o.length - 1; p >= 0; p--) {
                  const C = o[p];
                  if (C.href === i && (!c || C.rel === "stylesheet")) return;
               }
            else if (document.querySelector(`link[href="${i}"]${u}`)) return;
            const d = document.createElement("link");
            if (((d.rel = c ? "stylesheet" : zB), c || ((d.as = "script"), (d.crossOrigin = "")), (d.href = i), document.head.appendChild(d), c))
               return new Promise((p, C) => {
                  d.addEventListener("load", p), d.addEventListener("error", () => C(new Error(`Unable to preload CSS for ${i}`)));
               });
         }),
      )
         .then(() => s())
         .catch(i => {
            const c = new Event("vite:preloadError", { cancelable: !0 });
            if (((c.payload = i), window.dispatchEvent(c), !c.defaultPrevented)) throw i;
         });
   },
   rt = "/login",
   ZB = ["/500", "/", "/main/About/AboutDetail", "/rpwd", "/register", "/main/CustomerService", "/main/CustomerService/ServiceCollection"],
   qB = ["home", "activity", "main", "promotion", "chat", "wallet"],
   st = [];
let ut = Object.assign({
      "../views/activity/index.vue": () => I(() => Promise.resolve().then(() => BR), void 0),
      "../views/arWallet/index.vue": () => I(() => import("./page-arWallet-a22a0baf.js"), ["assets/js/page-arWallet-a22a0baf.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/native/index-3d731397.js", "assets/js/en-53bf8069.js", "assets/js/rus-ecb14220.js", "assets/js/vi-60d1c3eb.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-38f5b166.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-dbcb2394.js", "assets/js/ar-78aaffbf.js", "assets/css/index-86f1297f.css"]),
      "../views/login/index.vue": () => I(() => import("./page-login-f45d2d32.js").then(e => e.i), ["assets/js/page-login-f45d2d32.js", "assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css", "assets/css/page-login-5dee7998.css"]),
      "../views/main/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.i), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/promotion/index.vue": () => I(() => import("./page-promotion-9934b9b0.js").then(e => e.i), ["assets/js/page-promotion-9934b9b0.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-main-69015c32.js", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css"]),
      "../views/register/index.vue": () => I(() => import("./page-register-ae4f577e.js"), ["assets/js/page-register-ae4f577e.js", "assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/native/index-3d731397.js", "assets/js/en-53bf8069.js", "assets/js/rus-ecb14220.js", "assets/js/vi-60d1c3eb.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-38f5b166.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-dbcb2394.js", "assets/js/ar-78aaffbf.js", "assets/css/index-feb919fc.css"]),
      "../views/rpwd/index.vue": () => I(() => import("./page-rpwd-f8424aa7.js"), ["assets/js/page-rpwd-f8424aa7.js", "assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/native/index-3d731397.js", "assets/js/en-53bf8069.js", "assets/js/rus-ecb14220.js", "assets/js/vi-60d1c3eb.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-38f5b166.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-dbcb2394.js", "assets/js/ar-78aaffbf.js", "assets/css/index-fe6b4bd4.css"]),
      "../views/test/index.vue": () => I(() => import("./page-test-ce2e121f.js").then(e => e.i), ["assets/js/page-test-ce2e121f.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-login-f45d2d32.js", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/css/page-login-5dee7998.css", "assets/css/page-test-294f10d3.css"]),
      "../views/vip/index.vue": () => I(() => import("./page-vip-ae3ea7d7.js").then(e => e.i), ["assets/js/page-vip-ae3ea7d7.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-vip-b76e9680.css"]),
      "../views/wallet/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.i), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
   }),
   Tt = Object.assign({
      "../views/activity/ActivityDetail/index.vue": () => I(() => Promise.resolve().then(() => XR), void 0),
      "../views/activity/Championship/index.vue": () => I(() => Promise.resolve().then(() => sE), void 0),
      "../views/activity/DailySignIn/index.vue": () => I(() => Promise.resolve().then(() => BE), void 0),
      "../views/activity/DailyTasks/index.vue": () => I(() => Promise.resolve().then(() => $E), void 0),
      "../views/activity/FirstRecharge/index.vue": () => I(() => Promise.resolve().then(() => l8), void 0),
      "../views/activity/MemberPackage/index.vue": () => I(() => Promise.resolve().then(() => x8), void 0),
      "../views/activity/PointMall/index.vue": () => I(() => Promise.resolve().then(() => M5), void 0),
      "../views/activity/Turntable/index.vue": () => I(() => Promise.resolve().then(() => pI), void 0),
      "../views/home/AllGames/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.i), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/AllLotteryGames/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.e), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/AllOnlineGames/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.f), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/Messages/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.g), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/game/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.h), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/main/About/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.a), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/Avatar/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.b), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/BetRecords/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.c), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/CustomerService/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.d), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/Feedback/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.e), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/GameStats/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.f), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/GoogleVerify/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.g), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/Guide/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.h), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/InvitationBonus/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.j), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/Language/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.k), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/Laundry/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.l), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/MyCoins/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.m), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/MyCps/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.n), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/Notification/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.o), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/PointDetail/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.p), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/RedeemGift/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.q), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/SettingCenter/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.r), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/StrongBox/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.s), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/SuperJackpot/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.t), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/withdraw/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.v), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/promotion/CommissionDetail/index.vue": () => I(() => import("./page-promotion-9934b9b0.js").then(e => e.a), ["assets/js/page-promotion-9934b9b0.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-main-69015c32.js", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css"]),
      "../views/promotion/MyCommission/index.vue": () => I(() => import("./page-promotion-9934b9b0.js").then(e => e.b), ["assets/js/page-promotion-9934b9b0.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-main-69015c32.js", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css"]),
      "../views/promotion/MyInvitation/index.vue": () => I(() => import("./page-promotion-9934b9b0.js").then(e => e.c), ["assets/js/page-promotion-9934b9b0.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-main-69015c32.js", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css"]),
      "../views/promotion/MyReceive/index.vue": () => I(() => import("./page-promotion-9934b9b0.js").then(e => e.d), ["assets/js/page-promotion-9934b9b0.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-main-69015c32.js", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css"]),
      "../views/promotion/PromotionRule/index.vue": () => I(() => import("./page-promotion-9934b9b0.js").then(e => e.e), ["assets/js/page-promotion-9934b9b0.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-main-69015c32.js", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css"]),
      "../views/promotion/PromotionShare/index.vue": () => I(() => import("./page-promotion-9934b9b0.js").then(e => e.f), ["assets/js/page-promotion-9934b9b0.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-main-69015c32.js", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css"]),
      "../views/promotion/RebateRatio/index.vue": () => I(() => import("./page-promotion-9934b9b0.js").then(e => e.g), ["assets/js/page-promotion-9934b9b0.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-main-69015c32.js", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css"]),
      "../views/promotion/Server/index.vue": () => I(() => import("./page-promotion-9934b9b0.js").then(e => e.h), ["assets/js/page-promotion-9934b9b0.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-main-69015c32.js", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css"]),
      "../views/promotion/Subordinate/index.vue": () => I(() => import("./page-promotion-9934b9b0.js").then(e => e.j), ["assets/js/page-promotion-9934b9b0.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-main-69015c32.js", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css"]),
      "../views/promotion/TeamPartner/index.vue": () => I(() => import("./page-promotion-9934b9b0.js").then(e => e.k), ["assets/js/page-promotion-9934b9b0.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-main-69015c32.js", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css"]),
      "../views/promotion/TeamReport/index.vue": () => I(() => import("./page-promotion-9934b9b0.js").then(e => e.l), ["assets/js/page-promotion-9934b9b0.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-main-69015c32.js", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css"]),
      "../views/vip/RebateDetails/index.vue": () => I(() => import("./page-vip-ae3ea7d7.js").then(e => e.a), ["assets/js/page-vip-ae3ea7d7.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-vip-b76e9680.css"]),
      "../views/vip/RecordVsruleHistory/index.vue": () => I(() => import("./page-vip-ae3ea7d7.js").then(e => e.b), ["assets/js/page-vip-ae3ea7d7.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-vip-b76e9680.css"]),
      "../views/wallet/BankStatus/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.a), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/CancelRecharge/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.b), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/OrderCancel/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.c), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/OtherPay/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.d), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/Recharge/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.e), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/RechargeDetail/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.f), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/RechargeHistory/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.g), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/RechargeUsdt/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.h), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/TobePay/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.j), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/TransAction/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.k), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/Withdraw/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.l), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/WithdrawHistory/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.m), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
   }),
   Qt = Object.assign({
      "../views/activity/Championship/ChampionshipDetail/index.vue": () => I(() => Promise.resolve().then(() => WI), void 0),
      "../views/activity/DailySignIn/Record/index.vue": () => I(() => Promise.resolve().then(() => $I), void 0),
      "../views/activity/DailySignIn/Rules/index.vue": () => I(() => Promise.resolve().then(() => c7), void 0),
      "../views/activity/DailyTasks/Record/index.vue": () => I(() => Promise.resolve().then(() => m7), void 0),
      "../views/activity/MemberPackage/Rules/index.vue": () => I(() => Promise.resolve().then(() => x7), void 0),
      "../views/activity/PointMall/AddAddress/index.vue": () => I(() => Promise.resolve().then(() => $7), void 0),
      "../views/activity/PointMall/LotteryActivity/index.vue": () => I(() => Promise.resolve().then(() => aS), void 0),
      "../views/activity/PointMall/LotteryDetail/index.vue": () => I(() => Promise.resolve().then(() => s9), void 0),
      "../views/activity/PointMall/MyLottery/index.vue": () => I(() => Promise.resolve().then(() => v9), void 0),
      "../views/activity/PointMall/MyOrders/index.vue": () => I(() => Promise.resolve().then(() => D9), void 0),
      "../views/activity/PointMall/OrderDetail/index.vue": () => I(() => Promise.resolve().then(() => oD), void 0),
      "../views/activity/PointMall/ReceiveLottery/index.vue": () => I(() => Promise.resolve().then(() => RD), void 0),
      "../views/activity/PointMall/Record/index.vue": () => I(() => Promise.resolve().then(() => PD), void 0),
      "../views/activity/PointMall/Redeem/index.vue": () => I(() => Promise.resolve().then(() => LG), void 0),
      "../views/activity/PointMall/Rules/index.vue": () => I(() => Promise.resolve().then(() => FG), void 0),
      "../views/activity/Turntable/Detail/index.vue": () => I(() => Promise.resolve().then(() => nU), void 0),
      "../views/activity/Turntable/Introduce/index.vue": () => I(() => Promise.resolve().then(() => wU), void 0),
      "../views/activity/Turntable/Rules/index.vue": () => I(() => Promise.resolve().then(() => DU), void 0),
      "../views/home/AllLotteryGames/4D/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.j), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/AllLotteryGames/4DLotteryResults/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.k), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/AllLotteryGames/4DOdds/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.l), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/AllLotteryGames/4DPlay/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.m), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/AllLotteryGames/4DmyGame/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.n), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/AllLotteryGames/5D/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.o), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/AllLotteryGames/BettingRecord5D/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.p), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/AllLotteryGames/BettingRecordK3/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.q), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/AllLotteryGames/BettingRecordWin/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.r), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/AllLotteryGames/BettingRecordWinTrx/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.s), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/AllLotteryGames/Binguo/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.t), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/AllLotteryGames/BinguoCount/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.x), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/AllLotteryGames/BinguoRecord/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.y), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/AllLotteryGames/ChangLong/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.z), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/AllLotteryGames/K3/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.A), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/AllLotteryGames/NewVietnam/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.B), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/AllLotteryGames/Play/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.C), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/AllLotteryGames/WinGo/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.E), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/AllLotteryGames/WinTrx/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.G), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/AllLotteryGames/WinTrxIframe/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.H), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/AllLotteryGames/XoSo/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.I), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/AllLotteryGames/XoSoRecord/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.J), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/AllLotteryGames/XoSoRecordF/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.M), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/Messages/MessageDetail/index.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.N), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/main/About/AboutDetail/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.w), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/CustomerService/ServiceCollection/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.x), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/GoogleVerify/BindGoogle/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.y), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/InvitationBonus/Record/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.z), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/InvitationBonus/Rule/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.A), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/Laundry/LaundryRecord/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.B), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/Laundry/LaundryRule/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.C), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/SettingCenter/BindEmail/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.D), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/SettingCenter/LoginPassword/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.E), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/SettingCenter/UpdatePhone/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.F), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/StrongBox/StrongBoxAbout/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.G), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/StrongBox/StrongBoxRecord/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.H), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/SuperJackpot/rule/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.I), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/main/SuperJackpot/star/index.vue": () => I(() => import("./page-main-69015c32.js").then(e => e.J), ["assets/js/page-main-69015c32.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css"]),
      "../views/promotion/MyCommission/MyCommissionDetail/index.vue": () => I(() => import("./page-promotion-9934b9b0.js").then(e => e.m), ["assets/js/page-promotion-9934b9b0.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-main-69015c32.js", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css"]),
      "../views/promotion/MyInvitation/InvitationDetail/index.vue": () => I(() => import("./page-promotion-9934b9b0.js").then(e => e.n), ["assets/js/page-promotion-9934b9b0.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-main-69015c32.js", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css"]),
      "../views/promotion/Server/ServiceCollection/index.vue": () => I(() => import("./page-promotion-9934b9b0.js").then(e => e.o), ["assets/js/page-promotion-9934b9b0.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-main-69015c32.js", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css"]),
      "../views/promotion/TeamPartner/Invitation/index.vue": () => I(() => import("./page-promotion-9934b9b0.js").then(e => e.p), ["assets/js/page-promotion-9934b9b0.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-main-69015c32.js", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css"]),
      "../views/promotion/TeamReport/TeamReportDetail/index.vue": () => I(() => import("./page-promotion-9934b9b0.js").then(e => e.q), ["assets/js/page-promotion-9934b9b0.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-main-69015c32.js", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css"]),
      "../views/wallet/RechargeHistory/RechargeUpiDetail/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.n), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/Withdraw/AddBankCard/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.p), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/Withdraw/AddKbz/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.q), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/Withdraw/AddPIX/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.r), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/Withdraw/AddType4/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.s), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/Withdraw/AddUSDT/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.t), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/Withdraw/AddUpi/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.u), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/Withdraw/AddUpi_1/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.v), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/Withdraw/AddWave/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.w), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/Withdraw/BankCard/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.x), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/Withdraw/C2cDetail/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.y), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/Withdraw/ChooseBank/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.o), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/Withdraw/PIX/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.z), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/Withdraw/Type4/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.A), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/Withdraw/USDT/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.B), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/Withdraw/Upi/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.C), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/Withdraw/c2cCancelWithdrawal/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.D), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/Withdraw/c2cWrongAmount/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.E), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
      "../views/wallet/WithdrawHistory/WithdrawHistoryDetail/index.vue": () => I(() => import("./page-wallet-28eba3cb.js").then(e => e.F), ["assets/js/page-wallet-28eba3cb.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-home-67e89e9a.js", "assets/css/page-home-482c7bbf.css", "assets/js/page-login-f45d2d32.js", "assets/css/page-login-5dee7998.css", "assets/js/page-test-ce2e121f.js", "assets/css/page-test-294f10d3.css", "assets/js/page-promotion-9934b9b0.js", "assets/js/page-main-69015c32.js", "assets/css/page-main-b60516e4.css", "assets/css/page-promotion-c5d99bfe.css", "assets/css/page-wallet-5b1813bb.css"]),
   }),
   Qs = Object.assign({
      "../views/home/other/blackGoldHome.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.O), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/other/blueHome.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.P), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/other/damanHome.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.Q), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/other/electronic.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.R), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/other/redHome.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.S), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
      "../views/home/other/whiteGoldHome.vue": () => I(() => import("./page-home-67e89e9a.js").then(e => e.T), ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/css/page-home-482c7bbf.css"]),
   });
ut["../views/home/index.vue"] = Qs["../views/home/other/whiteGoldHome.vue"];
Qs = null;
const Ht = ["AllGames"];
for (const e in ut) {
   const s = e.split("/")[2];
   st.push({ path: s === "home" ? "/" : `/${s}`, name: s, component: ut[e], meta: { title: s, tabBar: qB.includes(s), keepAlive: Ht.includes(s) } });
}
ut = null;
for (const e in Tt) {
   const s = "/" + e.split("/")[2] + "/" + e.split("/")[3],
      n = e.split("/")[3];
   if (s.includes("components")) break;
   st.push({ path: s, name: n, component: Tt[e], meta: { title: e.split("/")[3], parent: e.split("/")[2], tabBar: !1, keepAlive: Ht.includes(n) } });
}
Tt = null;
for (const e in Qt) {
   const s = "/" + e.split("/")[2] + "/" + e.split("/")[3] + "/" + e.split("/")[4],
      n = e.split("/")[3] + "-" + e.split("/")[4];
   if (s.includes("components")) break;
   st.push({ path: s, name: n, component: Qt[e], meta: { title: e.split("/")[4], parent: e.split("/")[3], tabBar: !1, keepAlive: Ht.includes(n) } });
}
Qt = null;
const $B = [{ path: "/:pathMatch(.*)", redirect: "/", meta: { title: "NotFound", tabBar: !1, keepAlive: !1 } }];
st.push(...$B);
const qe = ln({
   history: cn("/"),
   routes: st,
   scrollBehavior(e, s, n) {
      return { top: 0 };
   },
});
qe.beforeEach((e, s, n) => {
   const A = me();
   let o = ["/", "/main", "/activity", "/promotion", "/wallet", "/main/About/AboutDetail", "/main/SettingCenter/LoginPassword", "/main/SettingCenter"];
   if (Number(localStorage.getItem("isToLogin")) == 1 || (o.includes(s.path) && e.path === rt)) return localStorage.setItem("isToLogin", "2"), n();
   if (e.path === rt) return A.token ? n("/") : n();
   if (ZB.includes(e.path)) return n();
   if (!A.token) return n({ path: rt, replace: !0 });
   n();
});
const g = {
      GetHomeWebSite: "/GetAppDownloadUrl",
      GetBannerList: "/GetBannerList",
      GetHotGameList: "/GetHotGameList",
      GetClicksTopGameList: "/GetClicksTopGameList",
      GetThirdGameList: "/GetThirdGameList",
      GetThirdGameCategory: "/GetThirdGameCategory",
      GetSmallGameOrFishList: "/GetSmallGameOrFishList",
      GetGameCategoryList: "/GetGameCategoryList",
      GetLotteryCategoryList: "/GetLotteryCategoryList",
      GetHotLotteryList: "/GetHotLotteryList",
      GetAllGameList: "/GetAllGameList",
      GetGameUrl: "/GetGameUrl",
      GetMessageList: "/GetMessageList",
      SetOneMessageState: "/SetOneMessageState",
      SetAllMessageState: "/SetAllMessageState",
      GetHomeSettings: "/GetHomeSettings",
      OneKeyMarkAllData: "/OneKeyMarkAllData",
      GetElectronWithChildGame: "/GetElectronWithChildGame",
      GetVideWithChildGame: "/GetVideWithChildGame",
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
      ApplyReceiveGiftPackUserReward: "/ApplyReceiveGiftPackUserReward",
   },
   ey = async (e, s) => r(g.Login, e, {}, s),
   Vs = e => r(g.GetUserInfo, e),
   ty = e => r(g.SmsVerifyCode, e),
   EM = e => r(g.VerifyPhoneCode, e),
   sy = (e, s) => r(g.Register, e, {}, s),
   Os = () => r(g.RegisterState),
   IM = e => r(g.LoginOff, e).then(s => s.data),
   SM = e => r(g.ForgetPassword, e),
   DM = e => r(g.ResetPassword, e),
   GM = e => r(g.EditUserPhoto, e),
   ny = async (e = {}, s) => {
      let n = "";
      const A = await et.post("https://tosma.lhlasjdanc.com/"),
         o = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
      return A.data && o.test(A.data) && (n = A.data || ""), r(g.RefreshToken, e, {}, { "AR-REAL-IP": n });
   },
   UM = e => r(g.EditNickName, e),
   MM = e => r(g.SetTaskOrder, e).then(s => s),
   LM = async () => r(g.GetTaskList).then(e => e.data),
   kM = e => (e.categoryType == 3 || e.categoryType == 6 ? r(g.GetSmallGameOrFishList, { gameType: e.categoryType }) : r(g.GetThirdGameCategory, e)),
   TM = () => r(g.captcha),
   ay = e => r(g.ThirdGameReceiveGrandPrizeReward, e),
   QM = async e => r(g.GetThirdGameRewardsRecordPageList, e),
   Ay = e => r(g.EmailVerifyCode, e),
   VM = e => r(g.bindEmail, e),
   OM = e => r(g.VerifyEmailCode, e),
   NM = e => r(g.BindPhone, e),
   oy = () => r(g.GetLoadedSetting),
   iy = () => r(g.ReceiveReturnAwards),
   { t: Ee } = Le.global,
   ly = e => {
      let s = "";
      switch (e) {
         case 400:
            s = Ee("statusTip1");
            break;
         case 404:
            s = Ee("statusTip4");
            break;
         case 405:
            s = Ee("statusTip5");
            break;
         case 408:
            s = Ee("statusTip6");
            break;
         case 500:
            s = Ee("statusTip7");
            break;
         case 502:
            s = Ee("statusTip8");
            break;
         case 503:
            s = Ee("statusTip9");
            break;
         case 504:
            s = Ee("statusTip10");
            break;
         default:
            s = Ee("statusTip11");
      }
      s ? De(s) : dt({ message: "loading...", forbidClick: !0 });
   };
class cy {
   constructor() {
      qt(this, "events");
      this.events = {};
   }
   on(s, n) {
      this.events[s] || (this.events[s] = []), this.events[s].push(n);
   }
   off(s, n) {
      if (!s && !n) return (this.events = {}), this;
      if (s) {
         if (!n) return (this.events[s] = []), this;
         const A = this.events[s];
         if (!A) return this;
         let o = A.length;
         for (; o--; ) A[o] === n && A.splice(o, 1);
         return this;
      }
   }
   emit(s, ...n) {
      const A = this.events[s];
      if (!A) return;
      let o;
      for (let i = 0; i < A.length; i++) {
         const c = A[i];
         if (c && ((o = c.apply(this, n)), o === !0)) return o;
      }
   }
   destory() {
      this.events = {};
   }
}
let Rt;
function Ns() {
   return Rt || (Rt = new cy()), Rt;
}
function gy(e) {
   let s;
   ce(async () => {
      e(),
         await mt(() => {
            s = !0;
         });
   }),
      gn(() => {
         s && e();
      });
}
function FM(e, s, n = {}) {
   const { target: A = window, passive: o = !1, capture: i = !1 } = n;
   let c;
   const u = d => {
         const p = l(d);
         p && !c && (p.addEventListener(e, s, { capture: i, passive: o }), (c = !0));
      },
      h = d => {
         const p = l(d);
         p && c && (p.removeEventListener(e, s, i), (c = !1));
      };
   Vt(() => h(A)),
      rn(() => h(A)),
      gy(() => u(A)),
      Ie(A) &&
         Be(A, (d, p) => {
            h(p), u(d);
         });
}
const is = S(!1);
function xM() {
   const e = S(!1),
      s = S(!1),
      n = S(!1),
      A = S(!1),
      o = S(!1),
      i = S(!1),
      c = S(!1),
      u = S(!1),
      h = S(!1),
      d = S(!1),
      p = S(!1),
      C = S(!1),
      B = S(!1);
   async function w() {
      const b = await O(Os());
      if (b) {
         const { registerSMSState: v, registerState: f, IsOpenForgetPasswordSMS: R, IsOpenForgetPasswordEmail: L, isOpenCaptcha: M = "0", isOpenGoogleVerifySms: ee, isOpenGoogleVerifyEmail: N, registerEmailState: G, registerMobileState: k, isOpenAddWithdrawSMS: T, isOpenAddWithdrawEmail: F, isOpenExternalAccount: ne, isInvitecode: ge } = b.data;
         (e.value = Number(v) !== 0), (s.value = Number(f) !== 0), (o.value = R === "1"), (i.value = L === "1"), (u.value = Number(ee) !== 0), (h.value = Number(N) !== 0), (d.value = G === "1"), (p.value = k === "1"), (n.value = Number(T) !== 0), (A.value = Number(F) !== 0), (c.value = M === "1"), (C.value = ne === "1"), (B.value = ge === "1");
      }
   }
   async function y() {
      const b = await O(I6());
      b && (is.value = b.data.state == 1);
   }
   return { registerState: w, isShowSMS: e, isRegisterState: s, isOpenAddWithdrawSMSState: n, isOpenAddWithdrawEmailState: A, isSmSForgetPasswordSMSState: o, IsOpenForgetPasswordEmailState: i, getPointMallState: y, isShowPointMall: is, hasOpenCaptcha: c, isGoogleVerifySms: u, isGoogleVerifyEmail: h, isregisterEmailState: d, isregisterMobileState: p, isOpenExternalAccountState: C, isInvitecodeState: B };
}
const Yt = () => {
      let e = null;
      const s = S(!1),
         n = Ns(),
         A = i => {
            (s.value = !1),
               n.emit("changeIsGame"),
               clearInterval(e),
               (e = setTimeout(() => {
                  (s.value = !0), i(), n.emit("changeIsGame");
               }, 1e4));
         },
         o = i => {
            (s.value = !1),
               clearInterval(e),
               i
                  ? n.emit("changeIsGame")
                  : setTimeout(() => {
                       n.emit("changeIsGame");
                    }, 1e4);
         };
      return (
         Vt(() => {
            (s.value = !1), clearInterval(e);
         }),
         { start: A, end: o, flag: s }
      );
   },
   ue = ve({ isTaskState: !1, isOpenJackpotReward: !1, isOpenWashCode: !1, unJackpotCount: 0, isOpenActivityAward: !1, unWeeklyAwardCount: 0, unDayAwardCount: 0, isFinishUserGuidelines: !1, isFirstUserDayRequest: !1, isShowFirstSaveDialog: !1, FirstRechargeList: [], showReceiveDialog: !1, receiveAmount: 0, newbieGiftPackCount: 0, isOpenChampion: 0, newMemberGiftPackageSwitch: !1 }),
   ry = {
      A1: { goPath: "Recharge", icon: "weeklyType1" },
      A2: { goPath: "Recharge", icon: "weeklyType1" },
      A3: { goPath: "Withdraw", icon: "weeklyType2" },
      A4: { goPath: "Withdraw", icon: "weeklyType2" },
      B5: { goPath: "home", homeType: "lottery", icon: "weeklyType3" },
      B6: { goPath: "home", homeType: "lottery", icon: "weeklyType3" },
      B7: { goPath: "home", homeType: "slot", icon: "weeklyType4" },
      B8: { goPath: "home", homeType: "slot", icon: "weeklyType4" },
      B9: { goPath: "home", homeType: "video", icon: "weeklyType5" },
      B10: { goPath: "home", homeType: "video", icon: "weeklyType5" },
      B11: { goPath: "home", homeType: "sport", icon: "weeklyType6" },
      B12: { goPath: "home", homeType: "sport", icon: "weeklyType6" },
      B13: { goPath: "home", homeType: "chess", icon: "weeklyType7" },
      B14: { goPath: "home", homeType: "chess", icon: "weeklyType7" },
      C15: { goPath: "PromotionShare", icon: "weeklyType8" },
      D16: { goPath: "DailySignIn", icon: "weeklyType9" },
      D17: { goPath: "SuperJackpot", icon: "weeklyType10" },
      D18: { goPath: "StrongBox", icon: "weeklyType11" },
      D19: { goPath: "Laundry", icon: "weeklyType12" },
   },
   Je = e => e === "1";
function We() {
   async function e() {
      const p = await O(zy());
      (p.code === 0 || p.data) && ((ue.isTaskState = Je(p.data.isTaskState)), (ue.isOpenJackpotReward = Je(p.data.isOpenJackpotReward)), (ue.isOpenWashCode = Je(p.data.isOpenWashCode)), (ue.isOpenActivityAward = Je(p.data.isOpenActivityAward)), (ue.unJackpotCount = p.data.unJackpotCount), (ue.unWeeklyAwardCount = p.data.unWeeklyAwardCount || 0), (ue.isFinishUserGuidelines = !p.data.isFinishUserGuidelines), (ue.isFirstUserDayRequest = p.data.isFirstUserDayRequest), (ue.newbieGiftPackCount = p.data.newbieGiftPackCount || 0), (ue.isOpenChampion = p.data.isOpenChampion), (ue.newMemberGiftPackageSwitch = Je(p.data.newMemberGiftPackageSwitch)));
   }
   async function s() {
      (await O(e6())).code == 0 && (ue.isFinishUserGuidelines = !1);
   }
   async function n() {
      (await O($y())).code == 0 && (ue.isFirstUserDayRequest = !1);
   }
   async function A() {
      const p = await O(Ky());
      p.code == 0 && (ue.isShowFirstSaveDialog = p.data);
   }
   async function o(p = !1) {
      if (!localStorage.getItem("token")) return;
      const C = await O(Jy({ getAll: p }));
      if ((C == null ? void 0 : C.code) == 0) {
         let B = !1;
         return (
            (ue.FirstRechargeList = C.data.map(w => (B && (w.canReceive = !1), w.canReceive && (B = !0), w))),
            new Promise(w => {
               w(C.data);
            })
         );
      }
   }
   async function i(p) {
      const C = await O(Xy({ taskId: p }));
      return (C == null ? void 0 : C.code) == 0
         ? ((ue.isShowFirstSaveDialog = !1),
           o(),
           new Promise(B => {
              B(!0);
           }))
         : new Promise(B => {
              B((C == null ? void 0 : C.data) || null);
           });
   }
   async function c() {
      const p = await O(n6());
      p.code == 0 && (ue.unDayAwardCount = (p == null ? void 0 : p.data) || 0);
   }
   const u = (p = !1) => {
         ue.isShowFirstSaveDialog = p;
      },
      h = Q(() => ue),
      d = Q(() => h.value.unWeeklyAwardCount + h.value.unDayAwardCount + h.value.newbieGiftPackCount);
   return { ActiveTaskMap: ry, ActiveSotre: h, allUnAwardCount: d, setShowFirstSaveDialog: u, getActive: e, saveUserGuidelines: s, saveUserDayRequest: n, needPopupFirstRecharge: A, getFirstRechargeList: o, receiveFirstRechargeReward: i, getDailyAwardCount: c };
}
const dy = { SUCCESS: 200, ERROR: 500, OVERDUE: 599, TIMEOUT: 3e4, TYPE: "success" },
   py = { JSON: "application/json;charset=UTF-8", TEXT: "text/plain;charset=UTF-8", FORM_URLENCODED: "application/x-www-form-urlencoded;charset=UTF-8", FORM_DATA: "multipart/form-data;charset=UTF-8" },
   Oe = new Map(),
   _y = ["GetRechargeRecord", "GetPointMallState", "GetRechargeTypes", "RegisterState"],
   nt = e => {
      const { url: s, data: n } = e;
      let A = typeof n == "string" ? JSON.parse(n) : _t(n);
      return delete A.random, delete A.timestamp, delete A.signature, [s, JSON.stringify(A)].join("&");
   },
   uy = e => {
      const { url: s } = e;
      let n = /api\/webapi\/(.+)/.exec(s);
      if (n && _y.includes(n[1])) return;
      const A = nt(e);
      A &&
         (e.cancelToken =
            e.cancelToken ||
            new et.CancelToken(o => {
               Oe.has(A) || Oe.set(A, o);
            }));
   },
   ls = e => {
      const s = nt(e);
      s && Oe.has(s) && Oe.delete(s);
   },
   my = e => {
      const s = nt(e);
      s && Oe.has(s) && (Oe.get(s)("cancel"), Oe.delete(s));
   },
   vy = et.CancelToken;
vy.source();
const hy = (e, s) => {
      const n = Pt(),
         { setCacheData: A } = n;
      if (e.params && e.params.cache) {
         const o = nt(e);
         A(o, s);
      }
   },
   { t: Et } = Le.global,
   wy = Ns(),
   by = "https://BigMumbaiapi.com",
   Cy = "/api/webapi";
let It = !1;
const By = { timeout: dy.TIMEOUT },
   St = () => {
      localStorage.setItem("isToLogin", "1"), me().setToken(""), qe.push({ path: rt });
   },
   Wt = et.create(By);
Wt.interceptors.request.use(
   e => {
      var B;
      const s = me(),
         n = s.getToken;
      (e.data.language = Es()), (e.data.random = Is());
      const A = JSON.parse(JSON.stringify(e.data)),
         o = Object.keys(A);
      o.sort();
      const i = {},
         c = ["signature", "track", "xosoBettingData"];
      o.forEach(w => {
         A[w] !== null && A[w] !== "" && !c.includes(w) && (i[w] = A[w] === 0 ? 0 : A[w]);
      }),
         (e.data.signature = FB(JSON.stringify(i))),
         (e.data.timestamp = Math.floor(Date.now() / 1e3));
      const u = localStorage.getItem("tokenHeader") || "",
         h = localStorage.getItem("refreshToken") || "",
         d = e.data;
      s.setReqData(d);
      const p = Pt(),
         { getCacheValue: C } = p;
      if (e.params && e.params.cache) {
         const w = nt(e),
            y = C(w);
         if (y) return Promise.reject({ ...y, cache: !0 });
      }
      return my(e), uy(e), { ...e, headers: { "Content-Type": "application/problem+json; charset=utf-8", ...e.headers, Authorization: (B = e.url) != null && B.endsWith("/api/webapi/RefreshToken") ? u + h : u + n } };
   },
   e => Promise.reject(e),
);
Wt.interceptors.response.use(
   e => {
      switch (e.data.code) {
         case -1:
            return Promise.reject({ msg: "System Error" });
         case 4:
            return St(), Promise.reject({ msg: Et("tokenExpired") });
         case 13:
            return Promise.reject({ msg: "Network Abnormal" });
      }
      return e.data.code !== 0 && e.data.code !== 1 ? Promise.reject(e.data) : (ls(e), hy(e.config, e.data), e.data);
   },
   async e => {
      if (e.cache) return e;
      const { response: s, config: n } = e,
         A = me(),
         o = ht();
      if ((e.code === "ERR_NETWORK" && dt({ message: "loading...", forbidClick: !0 }), e.message === "cancel")) return Promise.reject(!1);
      if ((e.message.indexOf("timeout") !== -1 && De(Et("requestTimedOut")), s))
         if (s.status === 401) {
            A.setIsOpen(!0);
            let i = n == null ? void 0 : n.url,
               c = /api\/webapi(.+)/.exec(i);
            if (c && ((c = c[1]), c === g.RefreshToken)) {
               De(Et("tokenExpired")), A.setIsOpen(!1), St();
               return;
            }
            const u = A.isOpen;
            if (It) return;
            u &&
               (o.setIsRefreshToken(!0),
               (It = !0),
               ny()
                  .then(h => {
                     if (h && h.data) {
                        const { token: d, tokenHeader: p, refreshToken: C } = h.data;
                        A.setToken(d), localStorage.setItem("tokenHeader", p), localStorage.setItem("refreshToken", C), o.setIsRefreshToken(!1), wy.emit("keyChange");
                     }
                  })
                  .catch(h => {
                     switch ((A.setIsOpen(!1), o.setIsRefreshToken(!1), h.code)) {
                        case 12:
                           Ue(h), St();
                           break;
                     }
                  })
                  .finally(() => {
                     It = !1;
                  }));
            return;
         } else ly(s.status);
      return ls(e.response), Promise.reject(e);
   },
);
const r = (e, s, n, A) => {
      const o = { url: e.startsWith("https://") ? e : by + Cy + e, method: "post", headers: { "Content-Type": py.JSON, noLoading: (n == null ? void 0 : n.noLoading) || !1 }, data: s || {} };
      return (o.headers = Object.assign(o.headers, A)), n != null && n.cache && (o.params = { cache: !0 }), Wt(o).then(i => i);
   },
   yy = e => r(g.GetActivityList, e),
   fy = e => r(g.GetActivityDetails, e),
   Fs = e => r(g.GetContinuousSignInRecharges),
   PM = () => r(g.GetUrlAddress),
   Ry = e => r(g.SetContinuousSinIn, e),
   Ey = e => r(g.GetContinuousSinInList, e, { noLoading: !0 }),
   Iy = e => r(g.GetProductList, e, { noLoading: !0 }),
   Sy = (e = {}) => r(g.GetBannerTypeList, e),
   Dy = e => r(g.GetIntegralLogList, e),
   Gy = e => r(g.GetProductOrderList, e),
   Uy = e => r(g.GetProductOrderDetails, e),
   My = e => r(g.SetProductOrder, e),
   Ly = e => r(g.CancelOrderData, e),
   xs = async e => r(g.GetUserAddress, e),
   ky = async e => r(g.UpdateUserAddress, e),
   Ty = async () => r(g.GetProductRules),
   Ps = e => r(g.GetPointsLotteryList, e, { noLoading: !0 }),
   Qy = e => r(g.GetPointsLotteryDetails, e, { noLoading: !0 }),
   Vy = e => r(g.GetPointsLotteryOrderList, e, { noLoading: !0 }),
   Oy = e => r(g.JoinPointsLottery, e, { noLoading: !0 }),
   Ny = e => r(g.GetPrize, e),
   Fy = e => r(g.UpdatePointLotteryUserAddress, e),
   xy = e => r(g.AddPointsLotteryUserAddress, e),
   Py = e => r(g.DeletePointsLotteryUserAddress, e),
   Hy = e => r(g.SetDefaultPointsLotteryUserAddress, e),
   Yy = () => r(g.GetPointLotteryUserAddress),
   Wy = () => r(g.ReceiveAllGrandAward),
   Ky = async () => r(g.NeedPopupFirstRecharge),
   Xy = async e => r(g.ReceiveFirstRechargeReward, e),
   Jy = async e => r(g.GetFirstRechargeList, e),
   zy = async () => r(g.GetActiveSetting),
   jy = async () => r(g.GetWeeklyAwardList),
   Zy = async e => r(g.ReceiveWeeklyAward, e),
   qy = async e => r(g.GetWeeklyAwardRecordList, e),
   $y = async () => r(g.SaveUserDayRequest),
   e6 = async () => r(g.SaveUserGuidelines),
   HM = async () => r(g.GetCurrentActivityTasks),
   YM = async e => r(g.GetCurrentActivityLevel1People, e),
   t6 = async () => r(g.GetNewbieGiftPackage),
   s6 = async e => r(g.ReceiveAward, e).then(s => s),
   n6 = async () => r(g.GetDailyAwardCount),
   a6 = async () => r(g.GetDailyAwardList),
   A6 = async e => r(g.ReceiveDailyAward, e),
   o6 = async e => r(g.GetDailyAwardRecordList, e),
   i6 = async e => r(g.GetChampionTaskList, e),
   l6 = async () => r(g.ChampionEntrance),
   c6 = async e => r(g.JoinChampionTask, e),
   g6 = async e => r(g.GetChampionTaskDetail, e),
   r6 = async e => r(g.GetTop10ChampionTaskDataUserList, e),
   WM = async e => r(g.GetMyChampionTaskList, e),
   d6 = async () => r(g.GetNowdayRechargeAmount),
   p6 = async () => r(g.GetTurnTableUserRotateNum),
   _6 = async () => r(g.GetTurnTableInfo),
   u6 = async e => r(g.GetTurnTableRecord, e),
   m6 = async () => r(g.GetTurnTableDraw),
   v6 = async () => r(g.GetGiftPackUserRewardRecord),
   cs = async e => r(g.ApplyReceiveGiftPackUserReward, e),
   h6 = () => r(g.GetHomeWebSite),
   w6 = (e = {}) => r(g.GetBannerList, e, { cache: !0 }),
   Kt = e => r(g.GetGameUrl, e),
   KM = e => r(g.GetThirdGameList, Object.assign({ isMiniGame: !0 }, e || {}), { cache: !0 }),
   b6 = e => r(g.GetThirdGameList, Object.assign({ isMiniGame: !0 }, e || {})),
   XM = e => r(g.GetMessageList, e),
   JM = e => r(g.SetOneMessageState, e),
   zM = e => r(g.SetAllMessageState, e).then(s => s.data),
   C6 = (e = {}) => r(g.GetDailyProfitRank, e).then(s => s.data),
   B6 = e => r(g.GetSiteMessageList, e),
   y6 = () => r(g.GetSiteMessage),
   jM = () => r(g.GetSafeInfo),
   ZM = () => r(g.GetWealthState).then(e => e.data),
   qM = () => r(g.GetSafeAmount),
   $M = e => r(g.SetSafeBack, e),
   eL = () => r(g.GetSafeUserAmount),
   tL = e => r(g.SetSafeInto, e),
   sL = e => r(g.GetSafeList, e),
   nL = e => r(g.GetSafeLogList, e).then(s => s.data),
   Hs = async () => r(g.GetGameCategoryList, {}, { cache: !0 }),
   aL = async () => r(g.GetLotteryCategoryList, {}, { cache: !0 }),
   Ys = async () => r(g.GetAllGameList, {}, { cache: !0 }),
   f6 = async () => r(g.GetHomeSettings),
   R6 = () => r(g.GetReWordConfigList),
   AL = e => r(g.GetThirdGameAwardRecordPageList, e),
   Ws = async () => r(g.GetElectronWithChildGame, {}, { cache: !0 }),
   Ks = () => r(g.GetVideWithChildGame),
   oL = () => r(g.GetHotLotteryList),
   iL = () => r(g.NewPromotion),
   lL = async e => r(g.GetCommissionDetails, e).then(s => s.data),
   cL = async e => r(g.PromotionMytem, e),
   gL = async () => r(g.PromotionTutorial).then(e => e.data),
   rL = e => r(g.GetTeamDayReport, e),
   dL = async e => r(g.GetPromotionRecord, e),
   pL = e => r(g.GetAgentServiceList, e),
   _L = async () => r(g.GetTotalRebateRules).then(e => e.data),
   E6 = async () => r(g.GetPartnerRewards),
   uL = async e => r(g.GetPartnerRewardsDeatilList, e),
   mL = async e => r(g.ConversionRedpage, e),
   vL = async e => r(g.GetRedpagePageList, e),
   hL = async e => r(g.GameStatis, e).then(s => s.data),
   wL = () => r(g.GetProtocols),
   bL = () => r(g.GetAgreement),
   CL = () => r(g.GetPlayingGuide),
   BL = e => r(g.SubmitSuggest, e),
   yL = e => r(g.GetGoogleVerify, e).then(s => s),
   fL = async e => r(g.GetNewMyEmerdList, e),
   RL = () => r(g.GetCustomerServiceTypelist),
   EL = () => r(g.GetAgentServiceTypeList),
   IL = e => r(g.GetCustomerServiceList, e),
   SL = () => r(g.GetCustomerServiceGroup),
   I6 = () => r(g.GetPointMallState),
   DL = e => r(g.GetCodeWashAmount, e),
   GL = e => r(g.AddCodeWashRecord, e),
   UL = e => r(g.GetCodeWashRecordList, e),
   ML = () => r(g.GetCodeWashRule),
   LL = e => r(g.BindGoogleVerify, e),
   kL = e => r(g.CloseGoogleVerify, e),
   TL = () => r(g.OneKeyMarkAllData),
   S6 = () => r(g.RecoverBalance),
   D6 = async () => r(g.GetBalance),
   QL = async () => r(g.GetAllwallets),
   VL = async () => r(g.GetUserAmount),
   OL = async e => r(g.GetRechargeRecord, e),
   NL = async e => r(g.GetC2CRechargeRecord, e),
   FL = async e => r(g.GetWithdrawLog, e),
   xL = async e => r(g.GetWithdrawLog, e),
   PL = () => r(g.GetWithdrawalTypes),
   HL = async e => r(g.getWithdrawals, e),
   YL = async e => r(g.NewSetWithdrawal, e),
   WL = () => r(g.GetUserRealName),
   KL = async e => r(g.SetWithdrawalCpf, e),
   XL = async e => r(g.GetBankList, e),
   JL = async e => r(g.SetWithdrawalBankCard, e),
   zL = async e => r(g.DeleteBankCard, e),
   jL = async e => r(g.SetWithdrawalUsdt, e),
   ZL = () => r(g.GetTransactionsTypes),
   qL = async e => r(g.GetTransactions, e),
   $L = async e => r(g.GetSettingByKey, e),
   G6 = async () => r(g.GetPayTypeName),
   ek = async e => r(g.GetRechargeTypes, e),
   tk = async e => r(g.NewSetRechargesBankOrder, e),
   sk = async e => r(g.UpRechargesBankOrder, e),
   nk = async e => r(g.UpdateRechargesUpiOrder, e),
   ak = async e => r(g.GetBankOrder, e),
   Ak = async e => r(g.GetBankOrderInfo, e),
   ok = async e => r(g.C2CRechargeCancel, e),
   ik = async e => r(g.C2CRecharge, e),
   lk = async e => r(g.C2CRechargeGetOrderDetail, e),
   ck = async e => r(g.C2CRechargeConfirm, e),
   gk = async () => r(g.C2CRechargeGetPayingDetail),
   rk = async e => r(g.GetC2CRechargeAwardAmountList, e),
   dk = async e => r(g.C2CRechargeAppeal, e),
   pk = async e => r(g.GetC2CCancelReason, e),
   _k = async e => r(g.SetWithdrawalNewUPI, e),
   uk = async () => r(g.GetNewUPIBindMobileNo),
   mk = async e => r(g.GetC2CWithdrawRecord, e),
   vk = async e => r(g.GetC2CWithdrawOrderDetail, e),
   hk = async e => r(g.C2CWithdrawConfirm, e),
   wk = async e => r(g.C2CWithdrawRematch, e),
   bk = async e => r(g.C2CWithdrawOrderAmountError, e),
   Ck = async e => r(g.C2CWithdrawalCancel, e),
   Bk = async e => r(g.C2CWithdrawAppeal, e),
   yk = async () => r(g.GetNewUPICanBindCardList),
   fk = async e => r(g.SetWithdrawalWallet, e),
   Rk = async e => r(g.RechargesUsdtOrder, e),
   Ek = async e => r(g.GetUsdtOrder, e),
   Ik = async e => r(g.RechargesUpiOrder, e),
   Sk = async e => r(g.GetUpiOrder, e),
   Dk = async e => r(g.UpdateRechargesUsdtOrder, e),
   Gk = async () => r(g.CheckFirstPixRecharge),
   U6 = async e => r(g.ARBWalletMemberInfo, e),
   M6 = async e => r(g.ARBWalletActivate, e),
   L6 = async e => r(g.ARBWalletEnter, e),
   Uk = async () => r(g.GetARPayUrl),
   Mk = () => r(g.GetVipUsers),
   Lk = e => r(g.GetPageListVipUserRecord, e),
   kk = e => r(g.GetListVipLevel, e),
   Tk = e => r(g.GetListVipUserRewards, e),
   Qk = () => r(g.GetVipUserLevelDetail),
   Vk = e => r(g.AddReceiveAward, e),
   Ok = () => r(g.GetAllVipLevelList),
   k6 = () => r(g.WinGoGetTypeList).then(e => e),
   Nk = e => r(g.WinGoGetGameIssue, e).then(s => s.data),
   Fk = e => r(g.WinGoGetNoaverageEmerdList, e).then(s => s.data),
   xk = e => r(g.WinGoGetMyEmerdList, e).then(s => s.data),
   Pk = e => r(g.WinGoGetEmerdList, e).then(s => s.data),
   Hk = e => r(g.WinGoGameBetting, e),
   Yk = e => r(g.WinGoGetWinTheLotteryResult, e).then(s => s.data),
   Wk = e => r(g.GetLongDragon, e),
   Kk = e => r(g.GetLastFiveIssueNumberResult, e),
   T6 = e => r(g.GetRuleByTypeId, e).then(s => s),
   Q6 = () => r(g.WinTxrGetTRXtypeList).then(e => e),
   Xk = e => r(g.WinTxrGetTRXGameIssue, e).then(s => s.data),
   Jk = e => r(g.WinTxrGameTRXBetting, e).then(s => s),
   zk = e => r(g.WinTxrGetTRXNoaverageEmerdList, e).then(s => s.data),
   jk = e => r(g.WinTxrGetTRXMyEmerdList, e).then(s => s.data),
   Zk = e => r(g.WinTxrGetEmerdList, e).then(s => s.data),
   qk = e => r(g.GetTrxWinTheLotteryResult, e),
   V6 = e => r(g.GetTRXRuleByTypeId, e).then(s => s),
   O6 = () => r(g.GetK3TypeList).then(e => e),
   $k = e => r(g.GetGameK3Issue, e).then(s => s.data),
   eT = e => r(g.GetK3OneEmerd, e),
   tT = () => r(g.GetK3OddsList),
   sT = e => r(g.K3GameBetting, e).then(s => s),
   nT = e => r(g.GetK3NoaverageEmerdList, e).then(s => s.data),
   aT = e => r(g.GetMyK3EmerdList, e),
   AT = e => r(g.GetK3TheLotteryResult, e),
   N6 = e => r(g.GetK3RuleByTypeId, e).then(s => s),
   F6 = () => r(g.Get5DtypeList).then(e => e),
   oT = e => r(g.GetGame5DIssue, e).then(s => s.data),
   iT = e => r(g.Get5DOneEmerd, e).then(s => s.data),
   lT = () => r(g.Get5DOddsList).then(e => e.data),
   cT = e => r(g.Game5DBetting, e),
   gT = e => r(g.GetNoaverage5DEmerdList, e),
   rT = e => r(g.Get5DEmerdList, e),
   dT = e => r(g.GetMy5DEmerdList, e),
   pT = e => r(g.GetD5TheLotteryResult, e),
   x6 = e => r(g.Get5DRuleByTypeId, e).then(s => s),
   _T = e => r(g.GetDayIssueNolist, e),
   uT = e => r(g.GetFXosoIssueNoList, e),
   mT = e => r(g.XosoBetting, e).then(s => s),
   vT = e => r(g.AddFXosoBetting, e).then(s => s),
   hT = e => r(g.GetXosoResult, e),
   wT = e => r(g.GetXosoUserRecord, e),
   bT = e => r(g.GetFXosoRecordPageList, e),
   CT = e => r(g.GetFXosoResultPageList, e),
   BT = e => r(g.GetFXosoResult, e),
   yT = e => r(g.CancelBetOrder, e),
   fT = e => r(g.GetXosoAreGamePlay, e),
   RT = e => r(g.GetFXosoAreaPlay, e),
   ET = e => r(g.GetFXosoUserResult, e),
   IT = e => r(g.GetXosoAreaPlayOdd, e),
   ST = e => r(g.GetFXosoAreaPlayOdd, e),
   DT = e => r(g.GetXosoGameBaseData, e),
   GT = async () => r(g.GetDateTimeScopeTypes).then(e => e.data),
   UT = async e => r(g.UploadImage, e, {}, { "Content-Type": "multipart/form-data" }),
   MT = async e => r(g.UploadVideo, e, {}, { "Content-Type": "multipart/form-data" }),
   LT = () => r(g.Get4DGameConfig).then(e => e),
   kT = () => r(g.GetGame4DIssue).then(e => e),
   TT = e => r(g.D4GameBetting, e).then(s => s),
   QT = () => r(g.Get4DOddsList).then(e => e),
   VT = () => r(g.GetGameTypeList).then(e => e),
   OT = e => r(g.GetMy4DHistoryBetting, e).then(s => s),
   NT = () => r(g.Get4DGameResult).then(e => e),
   FT = e => r(g.Get4DGameResultByType, e).then(s => s),
   xT = e => r(g.D4GameCancelOrder, e).then(s => s);
let gs = !1;
function P6(e) {
   ce(async () => {
      gs || (await e(), (gs = !0));
   });
}
function PT() {
   const e = me(),
      s = df(),
      { t: n } = ie(),
      A = ve({ active: 0 }),
      o = S(!1),
      i = Q(() => e.getUserInfo),
      c = Q(() => s.isOpenForgetPasswordSMSState || s.isOpenForgetPasswordEmailState),
      u = Q(() => {
         var R, L;
         return ((L = (R = i.value) == null ? void 0 : R.verifyMethods) == null ? void 0 : L.google) !== "0";
      }),
      h = Q(() => {
         var R, L;
         return ((L = (R = i.value) == null ? void 0 : R.verifyMethods) == null ? void 0 : L.mobile) !== "";
      }),
      d = Q(() => {
         var R, L;
         return ((L = (R = i.value) == null ? void 0 : R.verifyMethods) == null ? void 0 : L.email) !== "";
      }),
      p = Q(() => s.isOpenAddBankCardOpenEmail),
      C = Q(() => d.value && s.isOpenAddWithdrawEmailState),
      B = Q(() => s.isOpenAddWithdrawSMSState && h.value),
      w = Q(() => [u.value, C.value, B.value].some(R => R === !0)),
      y = Q(() => {
         const R = [];
         return B.value && R.push({ text: n("phoneverification"), title: n("SMSVerify"), value: "mobile" }), C.value && R.push({ text: n("emailverification"), title: n("EmailVerify"), value: "email" }), u.value && R.push({ text: n("googleverificate"), title: n("googleVerify"), value: "google" }), R;
      }),
      b = Q(() => y.value[A.active] || {}),
      v = () => {
         o.value = !0;
      },
      f = R => {
         (A.active = R.selectedIndexes[0]), (o.value = !1);
      };
   return (
      P6(async () => {
         await s.getRegisterState(), s.getUserInfo({ signature: e.token });
      }),
      { verifyList: y, verifyActive: b, verifyModal: o, isOpenWithdraw: w, isOpenForgetPasswordSMSState: c, isOpenAddBankCardOpenEmail: p, userInfo: i, openVerify: v, onSelectVerify: f }
   );
}
var H6 = (e => ((e[(e.Registr = 1)] = "Registr"), (e[(e.resetPassword = 2)] = "resetPassword"), (e[(e.bindEmailMmobile = 3)] = "bindEmailMmobile"), (e[(e.resetEmailMmobile = 4)] = "resetEmailMmobile"), (e[(e.openGoogle = 5)] = "openGoogle"), (e[(e.addBankCard = 6)] = "addBankCard"), (e[(e.addUSDT = 7)] = "addUSDT"), (e[(e.addEWallet = 8)] = "addEWallet"), (e[(e.addPIX = 9)] = "addPIX"), (e[(e.addWave = 10)] = "addWave"), (e[(e.addKBZ = 11)] = "addKBZ"), (e[(e.addNewUPI = 13)] = "addNewUPI"), (e[(e.addNewUPI_N = 15)] = "addNewUPI_N"), (e[(e.c2cRecharge = 16)] = "c2cRecharge"), e))(H6 || {});
function HT({ time: e, codeType: s }) {
   const n = S(!1),
      { t: A } = ie(),
      o = S(!1),
      i = me(),
      c = Q(() => i.getUserInfo),
      {
         start: u,
         pause: h,
         reset: d,
         current: p,
      } = ms({
         time: e * 1e3,
         onFinish: () => {
            o.value = !1;
         },
      }),
      C = Q(() => Math.ceil(p.value.total / 1e3)),
      B = async y => {
         var f;
         const b = y || ((f = c.value.verifyMethods) == null ? void 0 : f.email);
         if (!b) return;
         (await O(Ay({ email: b, emailType: s }))) && (d(), u(), (o.value = !0), Ce(A("sendSuccess")));
      },
      w = async y => {
         var f;
         const b = y || ((f = c.value.verifyMethods) == null ? void 0 : f.mobile);
         if (!b) return;
         (await O(ty({ phone: b, codeType: s }))) && (d(), u(), (o.value = !0), Ce(A("sendSuccess")));
      };
   return (
      Ot(() => {
         (o.value = !1), h(), d();
      }),
      { loading: n, isCount: o, seconds: C, getSMSCode: w, getEmailCode: B }
   );
}
function YT() {
   const e = ae(),
      { setLoading: s } = ht(),
      n = S(),
      A = S([]),
      o = S(!1),
      i = S({ orderCount: 0, totalReceiveAmount: 0, type: -1 }),
      c = Q(() => !A.value.length || !A.value.filter(L => L.isReceive === 0).length),
      u = ve({ pageSize: 10 }),
      h = ve({ ruleList: [] }),
      d = Q(() => h.ruleList);
   return {
      goRule: () => {
         e.push({ name: "SuperJackpot-rule" });
      },
      goStar: () => {
         e.push({ name: "SuperJackpot-star" });
      },
      onLaundy: () => {
         (o.value = !1), (i.value.type = -1), n.value.resetRefresh();
      },
      onRecived: async R => {
         s(!0), (await ay({ orderId: R })).msg && (s(!1), (o.value = !0)), s(!1);
      },
      goBack: () => {
         e.go(-1);
      },
      gotoCustom: () => {
         e.push({ name: "CustomerService" });
      },
      getRuleList: async () => {
         const R = await R6();
         R != null && R.data && (h.ruleList = R.data);
      },
      onRecivedAll: async () => {
         if (c.value) return;
         s(!0);
         const R = await O(Wy());
         if (R) {
            if (((i.value.orderCount = R.data.orderCount), (i.value.totalReceiveAmount = R.data.totalReceiveAmount), (o.value = !0), (i.value.type = 1), !n.value)) return;
            n.value.resetRefresh();
         }
         s(!1);
      },
      RewardsRecordPageList: A,
      listRef: n,
      DialogShow: o,
      pageQuery: u,
      ruleList: d,
      recivedAll: i,
      isRecived: c,
   };
}
function at() {
   const { t: e } = ie(),
      s = He(),
      n = S(!1),
      A = [
         { label: e("all"), value: -1 },
         { label: e("about2Start"), value: 2 },
         { label: e("ongoing"), value: 1 },
         { label: e("ended"), value: 0 },
      ],
      o = [
         { label: e("all"), value: -1 },
         { label: e("ongoing"), value: 0 },
         { label: e("hasWon"), value: 2 },
      ],
      i = S(-1),
      c = S([]),
      u = S([]),
      h = Q(() => c.value[0] || null),
      d = Q(() => {
         var k;
         return ((k = h.value) == null ? void 0 : k.users.find(T => T.isWin === !0)) || {};
      }),
      p = S(),
      C = S({ pageNo: 1, status: i.value, pageSize: 10 }),
      B = S({ pageNo: 1, orderStatus: i.value, pageSize: 10 }),
      w = S(1),
      y = S([]),
      b = Q(() => {
         const k = s.query.pointsLotteryID;
         return k ? parseInt(k, 10) : null;
      }),
      v = S([]),
      f = () => {
         (c.value = []), (C.value.status = i.value), (B.value.orderStatus = i.value), (B.value.pageNo = C.value.pageNo = 1);
      },
      R = k =>
         k.map(T => {
            T.users || (T.users = []);
            const F = T.users.map(ne => {
               const ge = [];
               return (
                  ne.orderInfoList.forEach(D => {
                     ge.push(...D.ticketsInfoList.map(E => E.ticketNumber));
                  }),
                  (ne.addTime = ne.orderInfoList[0].addTime),
                  (ne.tickets = ge),
                  (ne.showAll = !1),
                  (ne.isWin = ge.includes(k[0].winningNumber)),
                  ne
               );
            });
            return (T.users = F), T;
         });
   return {
      pointTabs: A,
      myPointTabs: o,
      pointTabActive: i,
      list: c,
      myPointList: u,
      pointQuery: C,
      myPointQuery: B,
      listRef: p,
      loading: n,
      resultTicket: y,
      ticketCount: w,
      pointInfo: h,
      address: v,
      winPeople: d,
      onJoin: async () => {
         if (n.value || ((n.value = !0), !b.value)) return;
         const k = await O(Oy({ pointsLotteryID: b.value, counts: w.value }));
         if (((n.value = !1), !k)) return;
         const T = k.data || [];
         y.value = T.map(F => F.ticketNumber);
      },
      getPointLotteryInfo: async () => {
         if (!b.value) return;
         const k = await Qy({ pointLotteryID: b.value });
         c.value = R(k.data.list);
      },
      pointRest: f,
      getAddress: async () => {
         const k = await Yy();
         k && (v.value = k.data || []), v.value.length && (v.value.find(T => T.defaultAddress === !0) || (v.value[0].defaultAddress = !0));
      },
      setDefault: async (k, T) => {
         if (T) return;
         (await O(Hy({ addressId: k }))) && Ce(`${e("rpdsucceed")}`);
      },
      delAddress: async k => {
         if (await O(Py({ addressId: k }))) {
            const F = v.value.findIndex(ne => ne.addressId == k);
            v.value.splice(F, 1), Ce(`${e("deleteSuccess")}`);
         }
      },
   };
}
const Dt = S({ amount: 0, pwd: "", type: 0, bid: 0, name: "" }),
   rs = S({}),
   ds = S([]);
function WT() {
   const e = Q(() => ot().getUpperOrLower),
      s = S(!1),
      n = localStorage.getItem("lastBandCarkName") || "",
      A = (B, w) => {
         B[w] = B[w].replace(/[^\d]+/g, "");
      };
   function o(B, w) {
      return /^[0-9]{8,12}$/.test(B) ? !0 : (De({ message: w, wordBreak: "break-word" }), !1);
   }
   const i = (B, w) => {
      const y = /[0-9`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、\f\n\r\t\v\d]/g;
      let b = B[w].replace(y, "").replace(/ {2,}/g, " ");
      (B[w] = dn.nfd(PB(b.replace(/[\u0300-\u036f]/g, "")))), c(B, w);
   };
   function c(B, w) {
      const y = e.value || "";
      y === "1" ? (B[w] = B[w].toLowerCase()) : y === "0" && (B[w] = B[w].toUpperCase());
   }
   function u(B, w) {
      n.length > 0 ? ((B[w] = n), c(B, w), (s.value = !0)) : (s.value = !1);
   }
   function h(B) {
      Dt.value = B;
   }
   function d(B) {
      rs.value = B;
   }
   function p(B) {
      ds.value = B;
   }
   return {
      iseditor: s,
      lastBandCarkName: n,
      onInput: A,
      checkAccoutNo: o,
      setUL: c,
      onLoad: u,
      makeTxt: i,
      data_NewSetWithdrawalH: Dt,
      setWithdrawal: h,
      setWithdrawalsrule: d,
      withdrawalsrule: rs,
      setWithdrawalTypeslist: p,
      withdrawalTypeslist: ds,
      setc2cAmount: B => {
         Dt.value.amount = B;
      },
   };
}
const he = ve({ prompt: !1, laundry: !1, invite: !1, firstSave: !1, oldUser: !1, rebateAmount: 0, returnAwards: 0, isARPay: !1 }),
   Gt = new Map(),
   Ut = S(""),
   ps = new AbortController();
function Y6() {
   const e = He(),
      { t: s } = ie(),
      n = me(),
      { ActiveSotre: A, setShowFirstSaveDialog: o } = We(),
      i = v => () =>
         new Promise(f => {
            Gt.set(v, f), (he[v] = !0);
         }),
      c = v => f => {
         const R = Gt.get(v);
         R && (v === "prompt" && sessionStorage.setItem("promptShowCount", "1"), v === "firstSave" && A.value.isShowFirstSaveDialog ? (he[v] = !0) : (he[v] = !1), ["prompt", "laundry"].includes(v) && sessionStorage.setItem(`pop_${v}`, "1"), R(), f === !0 && ps.abort());
      },
      u = c("invite"),
      h = c("prompt"),
      d = c("laundry"),
      p = c("firstSave"),
      C = c("oldUser"),
      B = Q(() => ["activity", "home", "main", "wallet", "promotion"].includes(e.name) && he.firstSave),
      w = async () => {
         (await O(iy())) && ((he.returnAwards = 0), Ce(s("receiveSuccess"))), C();
      },
      y = async () => {
         (he.firstSave = !1), (he.prompt = !1), (he.invite = !1), (he.laundry = !1), (he.oldUser = !1), Gt.clear();
         const v = localStorage.getItem("token"),
            f = sessionStorage.getItem("pop_prompt"),
            R = sessionStorage.getItem("pop_laundry");
         let L = !1;
         if (v) {
            const N = (await O(oy())).data || {};
            o((N == null ? void 0 : N.needPopupFirstRecharge) || !1), (L = (N == null ? void 0 : N.isExistGrandAward) || !1), (he.rebateAmount = (N == null ? void 0 : N.children_Lv_RebateAmount_Yesterday) || 0), (he.returnAwards = (N == null ? void 0 : N.returnAwards) || 0), (he.isARPay = N == null ? void 0 : N.isARPay), e.name == "home" && !f && (await b());
         }
         const M = [];
         !f && v && Ut.value && e.name == "home" && M.push(i("prompt")), A.value.isShowFirstSaveDialog && M.push(i("firstSave")), n.getUserInfo.isPopupCommissionSwitch == "1" && !f && he.rebateAmount > 0 && v && M.push(i("invite")), !R && v && L && M.push(i("laundry")), he.returnAwards > 0 && M.push(i("oldUser")), pn(M, { signal: ps.signal });
      };
   async function b() {
      const v = await O(y6());
      v.data && (Ut.value = v.data);
   }
   return { store: he, closeInvite: u, closePrompt: h, closeLaundry: d, closeFirstSave: p, showFirstSave: B, closOldPrompt: C, onReturnAwards: w, openAll: y, promptContent: Ut };
}
function KT() {
   !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.clearCache.postMessage(null);
}
function wt() {
   var e, s, n;
   return !!(((s = (e = window.webkit) == null ? void 0 : e.messageHandlers) != null && s.callNativeMethod) || (window.external && (n = window.external) != null && n.callNativeMethod));
}
function Xt(e, s) {
   !e || !s.url || (wt() || (window.location.href = s.url), UB ? window.webkit.messageHandlers.callNativeMethod.postMessage({ type: e, data: s }) : window.external.callNativeMethod(JSON.stringify({ type: e, data: s })));
}
const Mt = S();
function At() {
   const { t: e } = ie(),
      s = ae(),
      n = S({}),
      A = S({}),
      o = S([]),
      i = S([]),
      c = [
         { key: 1, title: e("ongoing") },
         { key: 0, title: e("cpsTip2") },
         { key: 2, title: e("ended") },
      ],
      u = { 1: e("bankCard"), 2: "UPI", 3: "USDT", 4: "E-Wallet", 5: "PIX", 6: "WavePay", 7: "TRX", 8: "KBZPay", 10: "USDT2", 20: "NewUPI" },
      h = async () => {
         const v = await O(l6());
         v != null && v.data && ((n.value = v == null ? void 0 : v.data), (Mt.value = v.serviceNowTime));
      },
      d = async v => {
         var R;
         const f = await O(g6({ championId: v }));
         f != null && f.data && ((A.value = f == null ? void 0 : f.data), (Mt.value = f.serviceNowTime), (R = A.value) != null && R.vendorId && C(A.value.vendorId));
      },
      p = async v => {
         const f = await O(r6({ championId: v }));
         f != null && f.data && (o.value = f == null ? void 0 : f.data);
      },
      C = async v => {
         var R;
         const f = await O(b6({ type: v, gameNameEn: "", isMiniGame: !1 }));
         f != null && f.data && (i.value = (R = f == null ? void 0 : f.data) == null ? void 0 : R.gameLists);
      },
      { start: B, end: w, flag: y } = Yt();
   function b(v) {
      if (!me().token) {
         s.push({ name: "login" });
         return;
      }
      Pe({ title: e("tips"), message: e("tipsPlayGame"), cancelButtonText: e("cancel"), showCancelButton: !0 }).then(async () => {
         var L;
         B(() => {
            Pe({ title: "", message: e("gameLoadTimeOut") }).then(() => {
               s.push({ path: "/" });
            });
         });
         const R = await O(Kt({ vendorCode: Number(v.vendorId), gameCode: v.gameID, phonetype: vt() }));
         if (R && !y.value) {
            if ((!y.value && w(!0), [5].includes(v.vendorId))) return s.push({ name: "game", query: { url: Ds((L = R == null ? void 0 : R.data) == null ? void 0 : L.url) } });
            wt() ? Xt("game", { ...((R == null ? void 0 : R.data) || {}), gameName: v.gameNameEn }) : pt(R == null ? void 0 : R.data, 1);
         } else {
            !y.value && w(!0);
            return;
         }
         !y.value && w();
      });
   }
   return { tabList: c, championEntranceV: h, championEntranceVO: n, serviceNowTime: Mt, getChampionTaskDetailV: d, championTaskDetailVO: A, getTop10UserList: p, top10UserListVO: o, thirdGameListVO: i, onItemClick: b, type: u };
}
function Jt() {
   const e = ae(),
      { t: s } = ie(),
      n = ve({ amount: 0, count: 0, rotateCount: 0, turntableList: [], turntableRecord: [], taskList: [], vipRating: [], bindingType: -1, result: null, dialog: !1 }),
      A = S({ pageNo: 1, pageSize: 10 }),
      o = v => (v < 1e3 ? v.toString() : v < 1e6 ? (v / 1e3).toFixed(2) + "k" : (v / 1e6).toFixed(2) + "M"),
      i = { 1: s("bankCard"), 2: "UPI", 3: "USDT", 4: "E-Wallet", 5: "PIX", 6: "WavePay", 7: "TRX", 8: "KBZPay", 10: "USDT2", 20: "NewUPI" },
      c = S(),
      u = S(),
      h = Q(() => n.turntableList.map(v => (v.rewardType === 1 ? { fonts: [{ text: `${sessionStorage.getItem("dollarSign") || ""}${o(v.rewardSetting)}`, lineClamp: 2, fontColor: "#fff", wordWrap: !0, top: "30%", fontSize: "12px" }], imgs: v.prizePicturesUrl ? [{ src: v.prizePicturesUrl, top: "45%", width: "55%" }] : [] } : { fonts: [{ text: v.rewardSetting, lineClamp: 2, fontColor: "#fff", fontSize: "12px", wordWrap: !0, top: "30%" }], imgs: v.prizePicturesUrl ? [{ src: v.prizePicturesUrl, top: "45%", width: "50%" }] : null }))),
      d = async () => {
         const v = await O(d6());
         v && (n.amount = v.data || 0);
      },
      p = async () => {
         var f, R;
         const v = await O(p6());
         v && ((n.count = ((f = v.data) == null ? void 0 : f.sumRotateNum) || 0), (n.rotateCount = ((R = v.data) == null ? void 0 : R.surplusRotateNum) || 0));
      },
      C = async () => {
         const v = await O(_6());
         if (v) {
            n.turntableList = v.data.rewardList;
            const f = v.data.vipRating.split(",");
            (n.vipRating = f.map(R => `Vip${R}`)), (n.taskList = v.data.taskList), (n.bindingType = v.data.bindingType);
         }
      },
      B = async () => {
         await Promise.all([d(), p(), C()]);
      },
      w = _n(async () => {
         const v = await m6();
         v.code === 0
            ? (c.value.play(),
              setTimeout(f => {
                 n.result = v.data;
                 const R = n.turntableList.findIndex(L => L.rewardSetting === v.data.rewardSetting);
                 if (R == -1) return c.value.stop(0);
                 c.value.stop(R);
              }, 1500))
            : [904].includes(v.msgCode)
              ? De(s("turntableTip", [i[v.data.bindingType]]))
              : Ue(v);
      }, 600),
      y = async () => {
         n.result && ((n.rotateCount = n.result.surplusRotateNum || 0), (n.dialog = !0), u.value && u.value.resetRefresh());
      };
   function b() {
      e.go(-1);
   }
   return { store: n, prizes: h, myLucky: c, bindingTypes: i, recordQuery: A, pull: u, getTurntabl: B, getTurntablInfo: C, getTurntablAmount: d, onStart: w, onEnd: y, onClick: b };
}
function Xs() {
   const { t: e } = ie(),
      s = ve({ firstDepositConfig: { activityStartDate: "", bonusLimit: 0, firstDeposiSendBonust: 0 }, giftPackConfigList: [], rewardRecordList: [] }),
      n = Q(() => s.firstDepositConfig.activityStartDate),
      A = Q(() => s.firstDepositConfig.bonusLimit),
      o = Q(() => s.firstDepositConfig.firstDeposiSendBonust),
      i = Q(() => s.giftPackConfigList || []),
      c = Q(() => s.rewardRecordList || []),
      u = async () => {
         const p = await O(v6());
         p && ((s.firstDepositConfig = p.data.firstDepositConfig), (s.giftPackConfigList = p.data.giftPackConfigAwardList), (s.rewardRecordList = p.data.newUserRewardRecordList));
      };
   return {
      store: s,
      time: n,
      bonusLimit: A,
      firstDeposiSendBonust: o,
      giftPackConfigList: i,
      rewardRecordList: c,
      onReceive: async p => {
         (await O(cs({ orderId: p, optType: 2 }))) && (Ce(e("receiveSuccess")), await u());
      },
      onApply: async p => {
         (await O(cs({ orderId: p, optType: 1 }))) && (Ce(e("applySuccess")), await u());
      },
      getConfig: u,
   };
}
const je = un("gtag"),
   W6 = () => "dataLayer" in window,
   K6 = () => "fbq" in window;
je.on((e, s) => {
   W6() && window.gtag("event", e, s), K6() && window.fbq("track", e, s);
   try {
      if (!window.android || !window.android.onEvent) return;
      s ? window.android.onEvent(e, JSON.stringify(s)) : window.android.onEvent(e);
   } catch {}
});
function _s() {
   return {
      onTriggerLogin: o => {
         je.emit("login");
      },
      onTriggerRegister: o => {
         je.emit("register");
      },
      onTriggerPurchase: (o, i) => {
         je.emit(i ? "first_purchase" : "purchase", { currency: "₹", value: 0 });
      },
      onTriggerRecharege: o => {
         je.emit("recharge");
      },
   };
}
const Lt = S(),
   XT = () => {
      const { t: e } = ie(),
         s = Q(() => {
            var i;
            return ((i = Lt.value) == null ? void 0 : i.walletActivationStatus) === 1;
         });
      return {
         getInfo: async () => {
            const i = await O(U6({ ip: localStorage.getItem("ARIP") }));
            i.code === 0 && (Lt.value = i.data);
         },
         arWallet: Lt,
         goWallet: async i => {
            var h;
            dt({ message: e("loading") + "...", forbidClick: !0 });
            const c = { returnUrl: "https://" + window.location.host + "/#/main" },
               u = await O(L6(c));
            if ((u == null ? void 0 : u.code) === 0) {
               let d = (h = u == null ? void 0 : u.data) == null ? void 0 : h.walletAccessUrl;
               window.location.href = d;
            }
            $t();
         },
         goActive: async i => {
            var h;
            dt({ message: e("loading") + "...", forbidClick: !0 });
            const c = { returnUrl: "https://" + window.location.host + "/#/main" },
               u = await O(M6(c));
            (u == null ? void 0 : u.code) === 0 && (window.location.href = ((h = u == null ? void 0 : u.data) == null ? void 0 : h.walletActivationPageUrl) + "&memberId=" + u.data.memberId + "&merchantCode=" + u.data.merchantCode + "&timestamp=" + u.data.timestamp), $t();
         },
         isArWalletActive: s,
      };
   };
function JT() {
   const e = ae(),
      s = ve({ config: { configAmount: 0, effectiveQuantity: 0, invitationCode: "", numberOfInvitations: 0, totalAmount: 0 } }),
      n = S({ pageNo: 1, pageSize: 10 }),
      A = S([]),
      o = Q(() => s.config.configAmount),
      i = Q(() => s.config.totalAmount),
      c = Q(() => `${location.origin}/#/register?invitationCode=${s.config.invitationCode || ""}`),
      u = Q(() => s.config.invitationCode || ""),
      h = Q(() => s.config.effectiveQuantity),
      d = Q(() => s.config.numberOfInvitations);
   return {
      getInfo: async () => {
         const w = await O(E6());
         w && (s.config = w.data);
      },
      goBack: () => {
         e.go(-1);
      },
      goInvitation: async () => {
         await e.push({ name: "TeamPartner-Invitation" });
      },
      amount: o,
      invitationLink: c,
      totalAmount: i,
      invitationCode: u,
      effectiveQuantity: h,
      numberOfInvitations: d,
      query: n,
      partnerList: A,
   };
}
const ye = ve({ banner: [], winInfoList: [], rankList: [], gameTypeList: [], allGameList: void 0, slotsGame: [], videoGame: [] }),
   X6 = () => {
      const e = ot(),
         s = me(),
         { start: n, end: A, flag: o } = Yt(),
         { t: i } = ie(),
         c = S(!0),
         u = mn("show-pwa-download", !0),
         h = Q(() => e.getIsShowLotteryDragon),
         d = Q(() => e.getIsCanAppDownload),
         p = Q(() => e.getIsShowAppDownloadIcon),
         C = Q(() => e.getProjectLogo),
         B = Q(() => ye.banner),
         w = Q(() => ye.winInfoList);
      function y() {
         const G = Pt();
         (c.value = !(s.getUserInfo.unRead > 0)), G.setReadState(c.value);
      }
      const b = async () => {
         const G = await O(w6());
         G && ((ye.banner = G.data), ye.banner.length === 0 && ye.banner.push({ bannerUrl: V("home", "banner"), url: "" }));
      };
      async function v() {
         const G = await O(h6());
         if (G) {
            let k = navigator.userAgent.toLowerCase(),
               T = "";
            k.indexOf("windows") != -1 || k.indexOf("android") != -1 ? (T = G.data.androidUrl) : k.indexOf("iphone") != -1 || k.indexOf("mac") != -1 || k.indexOf("ipad") != -1 ? (T = G.data.iosUrl) : (T = G.data.androidUrl), pt(T);
         }
      }
      async function f() {
         const [G, k] = await kB(C6());
         if (G) De({ message: G.msg, wordBreak: "break-word" });
         else if (k) {
            ye.winInfoList = k.dataList || [];
            const T = k.penarikanList || [];
            T.length > 0 && (ye.rankList = T);
         }
      }
      return {
         getBannerApi: b,
         onDown: v,
         getMessagesData: y,
         getWinInfoDetail: f,
         getGameType: async () => {
            const G = await O(Hs());
            G && (ye.gameTypeList = G.data || []);
         },
         getAllGame: async () => {
            const G = await O(Ys()),
               k = ["slot", "video", "chess", "sport", "lottery"];
            if (G) {
               let T = {};
               for (const [F, ne] of Object.entries(G.data)) {
                  let ge = F.toLocaleLowerCase();
                  F !== "popular" && k.includes(ge) ? (T[ge] = ne.filter(D => D.state === 1)) : (T[ge] = ne);
               }
               ye.allGameList = T;
            }
         },
         onItemClick: G => {
            if (!s.token) {
               qe.push({ name: "login" });
               return;
            }
            Pe({ title: i("tips"), message: i("tipsPlayGame"), cancelButtonText: i("cancel"), showCancelButton: !0 }).then(async () => {
               var F;
               n(() => {
                  Pe({ title: "", message: i("gameLoadTimeOut") }).then(() => {
                     qe.push({ path: "/" });
                  });
               });
               let k = { gameCode: G.gameCode || G.gameID, vendorCode: Number(G.vendorId) || Number(G.slotsTypeID) };
               const T = await O(Kt({ ...k, phonetype: vt() }));
               if (T && !o.value) {
                  if ((!o.value && A(!0), ["5"].includes(`${G.vendorId}`))) return qe.push({ name: "game", query: { url: Ds((F = T == null ? void 0 : T.data) == null ? void 0 : F.url) } });
                  wt() ? Xt("game", { ...((T == null ? void 0 : T.data) || {}), gameName: G.slotsName || G.gameNameEn || "" }) : pt(T == null ? void 0 : T.data, 1);
               } else {
                  !o.value && A(!0);
                  return;
               }
            });
         },
         getSlotList: async () => {
            const G = await O(Ws());
            G && (ye.slotsGame = G.data);
         },
         getVideonChildGame: async () => {
            const G = await O(Ks());
            G && (ye.videoGame = G.data);
         },
         isRead: c,
         getBanner: B,
         getWinInfo: w,
         showChanglong: h,
         isAppDownload: d,
         isAppDownloadIcon: p,
         showPWA: u,
         projectIcon: C,
         homeState: ye,
      };
   },
   J6 = "/assets/png/popular-044514e1.png",
   z6 = "/assets/png/popular_icon-6977543a.png",
   j6 = "/assets/png/lottery-c0a9176b.png",
   Z6 = "/assets/png/lottery_icon-7f9c3132.png",
   q6 = "/assets/png/video-c9dce622.png",
   $6 = "/assets/png/video_icon-f7afb28f.png",
   ef = "/assets/png/slot-bf07af03.png",
   tf = "/assets/png/slot_icon-ffc91891.png",
   sf = "/assets/png/sport-ac79bf87.png",
   nf = "/assets/png/sport_icon-314ece36.png",
   af = "/assets/png/chess-9c4d1dff.png",
   Af = "/assets/png/chess_icon-6930b633.png",
   of = "/assets/png/fish-a70df76d.png",
   lf = "/assets/png/fish_icon-bee0f4fe.png",
   cf = "/assets/png/flash-eac62fa4.png",
   gf = "/assets/png/flash_icon-4db9e3b4.png",
   re = ve({ gameList: [], categoryList: [], active: 0, allGame: null, loading: !1, electron: [], video: [], imgMap: new Map() }),
   rf = { 1: ["popular"], 2: ["sport", "chess", "video"], 3: ["lottery"], 4: ["slot"], 5: ["flash", "fish"] },
   Js = Symbol("GAME_PROVIDER_KEY");
function zT() {
   return vn(Js, {});
}
function jT() {
   const e = ae(),
      { start: s, end: n, flag: A } = Yt(),
      { t: o } = ie(),
      i = Q(() =>
         [
            { isShow: !0, key: "popular", title: o("hot"), image: J6, img: z6, state: 1 },
            { isShow: !0, key: "lottery", title: o("lottery"), image: j6, img: Z6 },
            { isShow: !0, key: "video", title: o("live"), image: q6, img: $6 },
            { isShow: !0, key: "slot", title: o("electronic"), image: ef, img: tf },
            { isShow: !0, key: "sport", title: o("sport"), image: sf, img: nf },
            { isShow: !0, key: "chess", title: o("chess"), image: af, img: Af },
            { isShow: !0, key: "fish", title: o("fishing"), image: of, img: lf },
            { isShow: !0, key: "flash", title: o("miniGame"), image: cf, img: gf },
         ].map(({ img: E, ...X }) => Object.assign({}, X, { img: re.imgMap.get(X.key) || E })),
      ),
      c = S(0),
      u = Q(() => i.value.map(E => E.key)),
      h = Q(() => re.allGame),
      d = Q(() => re.electron),
      p = Q(() => re.video),
      C = Q(() => i.value[c.value]),
      B = Q(() => {
         var E;
         return ((E = i.value[c.value]) == null ? void 0 : E.key) || "";
      }),
      w = Q(() => {
         var E;
         return ((E = re.allGame) == null ? void 0 : E[B.value]) || [];
      }),
      y = Q(() => (re.allGame ? (re.allGame ? (re.allGame.popular ? re.allGame.popular[0] : []) : []) : [])),
      b = Q(() => (re.allGame ? (re.allGame.popular ? re.allGame.popular[1] : []) : [])),
      v = Q(() => (re.allGame ? re.allGame.lottery || [] : [])),
      f = Q(() => re.loading),
      R = Q(() => {
         let E = -1;
         for (const [X, J] of Object.entries(rf)) J.includes(B.value) && (E = Number(X));
         return E;
      }),
      L = new Map(
         [
            { value: 1, path: "WinGo", rule: "winGoRule" },
            { value: 3, path: "5D", rule: "d5Rule" },
            { value: 2, path: "K3", rule: "k3Rule" },
            { value: 4, path: "WinTrx", rule: "trxRule" },
            { value: 5, path: "XoSo", rule: "xosoRule" },
            { value: 6, path: "XoSo", rule: "xosoRule" },
            { value: 7, path: "Binguo", rule: "" },
            { value: 8, path: "4D", rule: "" },
         ].map(E => [E.value, E]),
      ),
      M = E => {
         c.value = E;
      },
      ee = async E => {
         if (!me().token) {
            await e.push({ name: "login" });
            return;
         }
         Pe({ title: o("tips"), message: o("tipsPlayGame"), cancelButtonText: o("cancel"), showCancelButton: !0 }).then(async () => {
            s(() => {
               Pe({ title: "", message: o("gameLoadTimeOut") }).then(() => {
                  e.push({ path: "/" });
               });
            });
            let J = { gameCode: E.gameCode || E.gameID, vendorCode: Number(E.vendorId) || Number(E.slotsTypeID) };
            const W = await O(Kt({ ...J, phonetype: vt() }));
            if (W && !A.value) wt() ? Xt("game", { ...((W == null ? void 0 : W.data) || {}), gameName: E.slotsName || E.gameNameEn || "" }) : pt(W == null ? void 0 : W.data, 1);
            else {
               !A.value && n(!0);
               return;
            }
            !A.value && n();
         });
      },
      N = E => {
         const X = L.get(E.id || E.categoryId);
         if (!X) return console.error("no found id path");
         e.push({ name: "AllLotteryGames-" + X.path, query: { typeId: E.typeId, id: E.id } });
      },
      G = async E => {
         var J;
         if (!me().token) {
            await e.push({ name: "login" });
            return;
         }
         if (["chess", "slot", "video"].includes(E.key || B.value)) {
            const W = ((J = re.allGame) == null ? void 0 : J[E.key || B.value]) || [];
            sessionStorage.setItem("slotGamesList", JSON.stringify(W)), sessionStorage.setItem("gameType", JSON.stringify(E.key || B.value)), sessionStorage.setItem("clickedItem", JSON.stringify(E)), await e.push({ name: "AllOnlineGames", query: { game: E.key || B.value, vendorCode: E.slotsName } });
            return;
         }
         await ee(E);
      },
      k = E => {
         const X = ["slot", "video", "chess", "sport", "lottery"],
            J = {};
         for (const [W, le] of Object.entries(E)) {
            const te = W.toLocaleLowerCase();
            if (X.includes(te)) J[te] = le.filter(z => z.state === 1);
            else if (te === "popular") {
               const z = E[te];
               (J[te] = [z.platformList, z.clicksTopList]), (J.clicksVideoTopList = z.clicksVideoTopList);
            } else J[te] = le;
         }
         return J;
      },
      T = async (E = !0) => {
         const X = async () => ({ data: null });
         if (re.loading) return;
         re.loading = !0;
         const [{ data: J }, { data: W }] = await Promise.all([E ? Hs() : X(), Ys()]),
            le = (J || []).filter(te => te.state === 1);
         (re.imgMap = new Map(le.map(te => [te.categoryCode.toLowerCase(), te.categoryImg]))), (re.categoryList = le), (re.allGame = k(W) || {}), (re.loading = !1), sessionStorage.setItem("gameData", JSON.stringify(W));
      },
      F = async () => {
         const { result: E, data: X } = await Ws();
         X && (re.electron = X);
      },
      ne = async () => {
         const { result: E, data: X } = await Ks();
         X && (re.video = X);
      };
   return {
      store: re,
      gameList: i,
      currentGame: B,
      platformList: y,
      current: C,
      loading: f,
      active: c,
      gameType: R,
      currentList: w,
      gameTopList: b,
      allGame: h,
      lotteryType: v,
      gameListKey: u,
      setMenu: E => {
         re.gameList = E;
      },
      goGame: ee,
      onItemLottery: N,
      onGame: G,
      getGameList: T,
      setActive: M,
      useProvid: () => {
         hn(Js, { gameList: i, currentGame: B, current: C, platformList: y, loading: f, active: c, gameType: R, currentList: w, gameTopList: b, allGame: h, lotteryRoutes: L, videoList: p, electronList: d, onGame: G, goGame: ee, setActive: M, getElectronChildGame: F, getVideonChildGame: ne, onItemLottery: N });
      },
      getElectronChildGame: F,
      getVideonChildGame: ne,
   };
}
const Ve = ve({ list: [], timer: -1 });
function ZT() {
   const e = ae(),
      s = Q(() => Ve.list),
      n = () => e.push({ name: "Notification" }),
      A = () => {
         clearInterval(Ve.timer);
      },
      o = () => {
         A(),
            (Ve.timer = setInterval(() => {
               Ve.list.push(Ve.list.shift());
            }, 7e3));
      };
   return {
      noticeList: s,
      startTimer: o,
      getNotice: async () => {
         try {
            const { data: c } = await B6({ pageNo: 1, pageSize: 5 });
            (Ve.list = c.list || []), Ve.list.length && o();
         } catch {}
      },
      clearTimer: A,
      goNotice: n,
   };
}
const df = Me({
      id: "userStore",
      state: () => ({ currentView: "SignIn", userForm: { number: "", password: "", verify: "", rePassword: "", invitation: "", numberType: "", email: "", remember: !1, termAndPolicy: !1, vCode: "", logintype: "", rememberpwd: !1 }, rPwdForm: { number: "", numberType: "", email: "", verify: "", password: "", rePassword: "" }, ARIP: "", numberTypes: [], countDown: 0, countEmailDown: 0, remember: !1, messageDetail: {}, isShowSMS: !1, isRegisterState: !1, isAddBankCardSMS: !1, isOpenForgetPasswordSMSState: !1, isOpenForgetPasswordEmailState: !1, isOpenRegisterEmailState: !1, isOpenRegisterSMSState: !1, isOpenCaptcha: !1, isOpenAddWithdrawEmailState: !1, isOpenAddWithdrawSMSState: !1, isOpenAddBankCardOpenEmail: !1, isOpenExternalAccount: !1, state: null }),
      getters: { getCurrentView: e => e.currentView, getUserForm: e => e.userForm, getNumberTypes: e => e.numberTypes, getMessagesDetail: e => e.messageDetail },
      actions: {
         setCurrentView(e) {
            this.currentView = e;
         },
         setUserForm(e) {
            this.userForm = e;
         },
         setNumberTypes(e) {
            this.numberTypes = e;
         },
         setNumberType(e) {
            (this.userForm.numberType = e), (this.rPwdForm.numberType = e);
         },
         setCountDown(e) {
            this.countDown = e;
         },
         setCountEmailDown(e) {
            this.countEmailDown = e;
         },
         setMessageDetail(e) {
            this.messageDetail = e;
         },
         loginout() {
            localStorage.removeItem("tokenHeader"), localStorage.removeItem("refreshToken"), localStorage.removeItem("numberType"), localStorage.removeItem("number"), localStorage.removeItem("email"), localStorage.removeItem("isToLogin");
         },
         remember(e = !1) {
            const s = this.userForm.logintype,
               n = `ar_account_${s}`,
               A = localStorage.getItem(n) || "",
               o = d => {
                  try {
                     return JSON.parse(d);
                  } catch {
                     return null;
                  }
               };
            if (e) {
               const d = o(A);
               if (!d) return;
               s === "email" ? (this.userForm.email = d.email) : ((this.userForm.number = d.number), d.numberType && (this.userForm.numberType = d.numberType)), d.password && ((this.userForm.rememberpwd = !0), (this.userForm.password = d.password));
               return;
            }
            const i = this.userForm.numberType,
               c = this.userForm.number,
               u = this.userForm.email,
               h = this.userForm.rememberpwd ? this.userForm.password : "";
            localStorage.setItem(n, JSON.stringify({ email: u, numberType: i, number: c, password: h, logintype: s }));
         },
         async signIn(e) {
            let s = {};
            e.logintype == "email" ? (s = { username: e.email, captchaId: e.captchaId, track: e.track, pwd: e.password, phonetype: -1, logintype: e.logintype }) : (s = { username: e.numberType + e.number, captchaId: e.captchaId, track: e.track, pwd: e.password, phonetype: -1, logintype: e.logintype }), e.vCode && (s.vCode = e.vCode);
            const n = me(),
               { onTriggerLogin: A } = _s();
            return new Promise(async (o, i) => {
               const c = await ey(s, { "AR-REAL-IP": this.ARIP });
               if (c.data && c.code === 0) {
                  A(c.data);
                  const { token: h, tokenHeader: d, refreshToken: p } = c.data;
                  n.setToken(h), this.remember(), localStorage.setItem("tokenHeader", d), localStorage.setItem("refreshToken", p), localStorage.setItem("numberType", e.numberType), localStorage.setItem("number", e.number || ""), localStorage.setItem("email", e.email || ""), localStorage.setItem("isToLogin", "1"), await this.getUserInfo({ signature: h }), xB("/home");
                  const { setLoading: C } = ht();
                  return C(!1), o({});
               }
               [122, 33].includes(c.msgCode) || Ue(c), i(c);
            });
         },
         async getUserInfo(e) {
            var o;
            const s = me(),
               n = uf(),
               A = await O(Vs(e));
            A && (s.setUserInfo(A == null ? void 0 : A.data), n.setAmount((o = A == null ? void 0 : A.data) == null ? void 0 : o.amount), n.setUSDTCanAdd(A == null ? void 0 : A.data));
         },
         async register(e) {
            const { onTriggerRegister: s } = _s(),
               n = await O(sy(e, { "AR-REAL-IP": this.ARIP }));
            return new Promise(async (A, o) => {
               n ? (s(n.data), A(n)) : o(n);
            });
         },
         async getIp() {
            if (this.ARIP) return;
            const e = await et.post("https://tosma.lhlasjdanc.com/"),
               s = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
            e.data && s.test(e.data) && (this.ARIP = e.data || "");
         },
         sendCode() {
            this.countDown = 120;
            const e = setInterval(() => {
               this.countDown > 0 ? this.countDown-- : clearInterval(e), this.countDown === 0 && clearInterval(e);
            }, 1e3);
         },
         sendEmailCode() {
            this.countEmailDown = 300;
            const e = setInterval(() => {
               this.countEmailDown > 0 ? this.countEmailDown-- : clearInterval(e), this.countEmailDown === 0 && clearInterval(e);
            }, 1e3);
         },
         setRemember(e) {
            this.remember = e;
         },
         setICode(e) {
            this.userForm.invitation = e;
         },
         clearRpwdData() {
            (this.rPwdForm = { number: "", numberType: ot().getAreacode.replace("+", "") || "", verify: "", password: "", rePassword: "", email: "" }), (this.userForm.number = "");
         },
         async getRegisterState() {
            const e = await O(Os());
            if (e) {
               const { registerSMSState: s, registerState: n, isOpenAddBankCardSMS: A, isOpenForgetPasswordSMS: o, isOpenForgetPasswordEmail: i, registerEmailState: c, registerMobileState: u, isOpenAddWithdrawEmail: h, isOpenAddWithdrawSMS: d, isOpenCaptcha: p = "0", addBankCardOpenEmail: C, isOpenExternalAccount: B } = e.data;
               this.state = e.data;
               const w = (y = "0") => y === "1";
               (this.isShowSMS = w(s)), (this.isRegisterState = w(n)), (this.isAddBankCardSMS = w(A)), (this.isOpenForgetPasswordSMSState = w(o)), (this.isOpenForgetPasswordEmailState = w(i)), (this.isOpenRegisterEmailState = w(c)), (this.isOpenRegisterSMSState = w(u)), (this.isOpenCaptcha = w(p)), (this.isOpenAddWithdrawEmailState = w(h)), (this.isOpenAddWithdrawSMSState = w(d)), (this.isOpenAddBankCardOpenEmail = w(C)), (this.isOpenExternalAccount = w(B));
            }
         },
      },
   }),
   pf = [
      { name: "English", key: "en" },
      { name: "中文", key: "zh" },
      { name: "Tiếng Việt", key: "vi" },
      { name: "Bahasa Melayu", key: "my" },
      { name: "Bahasa Indonesia", key: "id" },
      { name: "ภาษาไทย", key: "th" },
      { name: "မြန်မာဘာသာ", key: "md" },
      { name: "Português", key: "bra" },
      { name: "हिंदी", key: "hd" },
      { name: "русский", key: "rus" },
      { name: "Filipino", key: "ph" },
      { name: "বাংলা", key: "bd" },
      { name: "اردو", key: "pk" },
      { name: "عربي", key: "ar" },
   ],
   me = Me({
      id: "GlobalState",
      state: () => ({ token: lt("token", ""), userInfo: lt("userInfo", {}), language: Rs(), clientConfig: lt("clientConfig", {}), requsetData: "", isOpen: !0, apiUrl: localStorage.getItem("ApiUrl") || "", visibility: 1, deferredPrompt: null, dollarSign: "", projectLogo: "", headLogo: "", areaCode: null, messageList: null }),
      getters: {
         getToken: e => e.token,
         getLanguage: e => e.language,
         getLanguageIcon: e => V("languages", `${e.language}`),
         getLanguageName: e => {
            for (let s of pf) if (s.key == e.language) return s.name;
         },
         getUserInfo: e => e.userInfo,
         getClientConfig: e => e.clientConfig,
         getReqData: e => e.requsetData,
         getIsOpen: e => e.isOpen,
         getApiUrl: e => e.apiUrl,
         getDollarSign: e => e.dollarSign,
         getMessage: e => e.messageList,
      },
      actions: {
         setToken(e) {
            (this.token = e), localStorage.setItem("token", e), sessionStorage.removeItem("pop_prompt"), sessionStorage.removeItem("pop_laundry");
         },
         setUserInfo(e) {
            if (((this.userInfo = e), e.groupDataShowAuth && e.groupDataShowAuth.length)) {
               const s = {};
               e.groupDataShowAuth.forEach((n, A) => {
                  s[n.id] = n.isShow;
               }),
                  sessionStorage.setItem("permission", JSON.stringify(s));
            } else sessionStorage.removeItem("permission");
            lt("userInfo", e);
         },
         updateLanguage(e) {
            this.language = e;
         },
         setPrompt(e) {
            this.deferredPrompt = e;
         },
         SET_HTML_ATTR(e, s) {
            var n;
            (n = document.querySelector("link[rel='icon']")) == null || n.setAttribute("href", e), (document.title = s);
         },
         setReqData(e) {
            this.requsetData = e;
         },
         setIsOpen(e) {
            this.isOpen = e;
         },
         setvisibility(e = null) {
            typeof e == "number" ? (this.visibility = e) : this.visibility++;
         },
         setMessage(e) {
            this.messageList = e;
         },
      },
   }),
   ot = Me({
      id: "SettingStore",
      persist: !0,
      state: () => ({ areaPhoneLenList: [], areacode: "", headLogo: "https://img.ergwrgwer.com/GoagamesWebImg/headlogo.png", isShowAppDownloadUp: !1, isShowAppDownloadDown: !1, isShowLotteryDragon: !1, jackportMaxReswadAmount: 0, projectName: "bigMumbai", projectLogo: "https://img.ergwrgwer.com/GoagamesWebImg/logo.png", languages: "en", webIco: "", dollarSign: "₹", upperOrLower: "1", defaultCurrentLanguage: "", isSplitLocalEWallet: !1, isOpenLoginChangeLanguage: "0", ossUrl: "", rewardValidityTime: 0, winRate: {}, isShowHotGameWinOdds: !1, isShowAppHandCodeWashingSwitch: !1, bigTurntableLink: "", isOpenTurntable: !1, isPartnerReward: !1 }),
      getters: { getIsCanAppDownload: e => e.isShowAppDownloadUp, getIsShowAppDownloadIcon: e => e.isShowAppDownloadDown, getIsShowLotteryDragon: e => e.isShowLotteryDragon, getProjectLogo: e => e.projectLogo, getHeadLogo: e => e.headLogo, getDollarSign: e => e.dollarSign, getAreaPhoneLenList: e => e.areaPhoneLenList, getAreacode: e => e.areacode, getLanguage: e => e.languages, getWebIco: e => e.webIco, getProjectName: e => e.projectName, getUpperOrLower: e => e.upperOrLower, getDL: e => e.defaultCurrentLanguage, getIsSplitLocalEWallet: e => e.isSplitLocalEWallet, getLoginChangeLanguage: e => e.isOpenLoginChangeLanguage, getOSSUrl: e => e.ossUrl, getRewardValidityTime: e => e.rewardValidityTime, getWinRate: e => e.winRate, getIsShowAppHandCodeWashingSwitch: e => e.isShowAppHandCodeWashingSwitch, getBigTurntableLink: e => e.bigTurntableLink, getOpenTurntable: e => e.isOpenTurntable, getIsPartnerReward: e => e.isPartnerReward },
      actions: {
         async getHomeSetting() {
            var s, n;
            const e = await O(f6());
            if (e && e.data) {
               const { areaPhoneLenList: A, headLogo: o, isShowAppDownloadUp: i, isShowAppDownloadDown: c, isShowLotteryDragon: u, jackportMaxReswadAmount: h, projectName: d, projectLogo: p, languages: C, webIco: B, dollarSign: w, upperOrLower: y, defaultCurrentLanguage: b, isSplitLocalEWallet: v, isOpenLoginChangeLanguage: f, electronicWinRateExternalLink: R, electronicWinRateImgUrl: L, isShowElectronicWinRateExternalLink: M, isShowHotGameWinOdds: ee, isShowAppHandCodeWashingSwitch: N, rewardValidityTime: G, ossUrl: k, bigTurntableLink: T, isOpenTurntable: F, isPartnerReward: ne } = e.data;
               (this.ossUrl = k),
                  (this.rewardValidityTime = G),
                  (this.areaPhoneLenList = A),
                  (this.headLogo = o),
                  (this.isShowAppDownloadUp = i),
                  (this.isShowAppDownloadDown = c),
                  (this.isShowLotteryDragon = u),
                  (this.jackportMaxReswadAmount = h),
                  (this.projectLogo = p),
                  (this.projectName = d),
                  (this.languages = C),
                  (this.webIco = B),
                  (this.dollarSign = w),
                  (this.upperOrLower = y),
                  (this.areacode = ((s = A[0]) == null ? void 0 : s.area) || ""),
                  (this.isSplitLocalEWallet = v),
                  (this.isOpenLoginChangeLanguage = f),
                  (this.isShowHotGameWinOdds = ee || !1),
                  (this.isShowAppHandCodeWashingSwitch = N),
                  (this.winRate = { electronicWinRateExternalLink: R, electronicWinRateImgUrl: L, isShowElectronicWinRateExternalLink: M }),
                  (this.bigTurntableLink = T),
                  (this.isOpenTurntable = F),
                  (this.isPartnerReward = ne),
                  sessionStorage.setItem("dollarSign", w),
                  sessionStorage.setItem("areaPhoneLenList", JSON.stringify(A)),
                  localStorage.getItem("language") || ((this.defaultCurrentLanguage = b.replace("tha", "th")), NB(this.defaultCurrentLanguage)),
                  (n = document.querySelector("link[rel='icon']")) == null || n.setAttribute("href", B),
                  (document.title = d);
            }
         },
      },
   }),
   { t: _f } = Le.global,
   uf = Me({
      id: "walletStore",
      state: () => ({ bankName: {}, withdrawalslist: [], bankList: [], withdrawals: { amount: 0, pwd: "", type: 0, bid: 0 }, payTabList: [], amount: 0, timestampLast: 0, allwallets: "", isAllowUserAddUSDT: !0 }),
      getters: { getBankName: e => e.bankName, getWithdrawalslist: e => e.withdrawalslist, getBankList: e => e.bankList, getWithdrawal: e => e.withdrawals, getPayTabList: e => e.payTabList, getAmount: e => e.amount, getTimestampLast: e => e.timestampLast, getAllwallets: e => e.allwallets, getADDUSTD: e => e.isAllowUserAddUSDT },
      actions: {
         setBankName(e) {
            this.bankName = e;
         },
         setWithdrawalslist(e) {
            this.withdrawalslist = e;
         },
         setBankList(e) {
            this.bankList = e;
         },
         setWithdrawal(e) {
            this.withdrawals = e;
         },
         setPayTabList(e) {
            this.payTabList = e;
         },
         setAmount(e) {
            this.amount = e;
         },
         setUSDTCanAdd(e) {
            this.isAllowUserAddUSDT = (e == null ? void 0 : e.isAllowUserAddUSDT) === void 0 ? !0 : (e == null ? void 0 : e.isAllowUserAddUSDT) === "1";
         },
         setTimestampLast(e) {
            this.timestampLast = e;
         },
         setAllwallets(e) {
            this.allwallets = e;
         },
         async resetData(e, s) {
            const n = await O(s ? S6() : D6());
            if (n) {
               if (((this.amount = n == null ? void 0 : n.data.amount), e)) return;
               Ce(_f("refreshSuccess"));
            }
         },
         async getPayTypeName() {
            const e = await O(G6());
            if (e) {
               if (ot().getIsSplitLocalEWallet) {
                  let s = e.data.typelist.map(n => (n.payID === 18 && n.paySysName === "KBZPay" && ((n.payNameUrl = V("wallet/recharge/detail", "kbz_icon")), (n.payNameUrl2 = V("wallet/recharge/detail", "kbz_icon"))), n.payID === 18 && n.paySysName === "WavePay" && ((n.payNameUrl = V("wallet/recharge/detail", "wave_icon")), (n.payNameUrl2 = V("wallet/recharge/detail", "wave_icon"))), n));
                  this.setPayTabList(s);
               }
               this.setPayTabList(e.data.typelist);
            }
         },
      },
      persist: !0,
   }),
   ct = 5e3,
   qT = Me({
      id: "lorreryStore",
      state: () => ({
         1: { typeID: 1, typeName: "Win Go 1Min", tabName: "WinGo 1Min", intervalM: 1, scope: "1|10|100|1000", sort: 4, gamePresentation: null, betMultiple: "1|5|10|20|50|100" },
         2: { typeID: 2, typeName: "Win Go 3Min", tabName: "WinGo 3Min", intervalM: 3, scope: "1|10|100|1000", sort: 3, gamePresentation: null, betMultiple: "1|5|10|20|50|100" },
         3: { typeID: 3, typeName: "Win Go 5Min", tabName: "WinGo 5Min", intervalM: 5, scope: "1|10|100|1000", sort: 2, gamePresentation: null, betMultiple: "1|5|10|20|50|100" },
         4: { typeID: 4, typeName: "Win Go 10Min", tabName: "WinGo 10Min", intervalM: 10, scope: "1|10|100|1000", sort: 1, gamePresentation: null, betMultiple: "1|5|10|20|50|100" },
         5: { typeID: 5, typeName: "5D 1Min", tabName: "5D 1Min", intervalM: 1, scope: "1|10|100|1000", sort: 4, gamePresentation: null, betMultiple: "1|5|10|20|50|100" },
         6: { typeID: 6, typeName: "5D 3Min", tabName: "5D 3Min", intervalM: 3, scope: "1|10|100|1000", sort: 3, gamePresentation: null, betMultiple: "1|5|10|20|50|100" },
         7: { typeID: 7, typeName: "5D 5Min", tabName: "5D 5Min", intervalM: 5, scope: "1|10|100|1000", sort: 2, gamePresentation: null, betMultiple: "1|5|10|20|50|100" },
         8: { typeID: 8, typeName: "5D 10Min", tabName: "5D 10Min", intervalM: 10, scope: "1|10|100|1000", sort: 1, gamePresentation: null, betMultiple: "1|5|10|20|50|100" },
         9: { typeID: 9, typeName: "K3 1Min", tabName: "K3 1Min", intervalM: 1, scope: "1|10|100|1000", sort: 4, gamePresentation: null, betMultiple: "1|5|10|20|50|100" },
         10: { typeID: 10, typeName: "K3 3Min", tabName: "K3 3Min", intervalM: 3, scope: "1|10|100|1000", sort: 3, gamePresentation: null, betMultiple: "1|5|10|20|50|100" },
         11: { typeID: 11, typeName: "K3 5Min", tabName: "K3 5Min", intervalM: 5, scope: "1|10|100|1000", sort: 2, gamePresentation: null, betMultiple: "1|5|10|20|50|100" },
         12: { typeID: 12, typeName: "K3 10Min", tabName: "K3 10Min", intervalM: 10, scope: "1|10|100|1000", sort: 1, gamePresentation: null, betMultiple: "1|5|10|20|50|100" },
         13: { typeID: 13, typeName: "Trx 1Min", tabName: "Trx 1Min", intervalM: 1, scope: "1|10|100|1000", sort: 4, gamePresentation: null, betMultiple: "1|5|10|20|50|100" },
         14: { typeID: 14, typeName: "Trx 3Min", tabName: "Trx 3Min", intervalM: 3, scope: "1|10|100|1000", sort: 3, gamePresentation: null, betMultiple: "1|5|10|20|50|100" },
         15: { typeID: 15, typeName: "Trx 5Min", tabName: "Trx 5Min", intervalM: 5, scope: "1|10|100|1000", sort: 2, gamePresentation: null, betMultiple: "1|5|10|20|50|100" },
         16: { typeID: 16, typeName: "Trx 10Min", tabName: "Trx 10Min", intervalM: 10, scope: "1|10|100|1000", sort: 1, gamePresentation: null, betMultiple: "1|5|10|20|50|100" },
         30: { typeID: 30, typeName: "Win Go<br />30 second", tabName: "WinGo 30 Second", intervalM: 0.5, scope: "1|10|100|1000", sort: 1, gamePresentation: null, betMultiple: "1|5|10|20|50|100" },
         winGoLock: !1,
         TrxLock: !1,
         k3Lock: !1,
         fiveDLock: !1,
         winType: ({}.VITE_WINGO && JSON.parse({}.VITE_WINGO)) || [1, 2, 3, 4],
      }),
      getters: { getWingo: e => e.winType.map(s => e[s]), get5D: e => [e[5], e[6], e[7], e[8]], getK3: e => [e[9], e[10], e[11], e[12]], getTrx: e => [e[13], e[14], e[15], e[16]] },
      actions: {
         async getWinGoData() {
            if (this.winGoLock) return;
            const e = await O(k6());
            e &&
               e.data &&
               (e.data.forEach(s => {
                  this.setData(s);
               }),
               (this.winGoLock = !0),
               setTimeout(() => {
                  this.winGoLock = !1;
               }, ct));
         },
         async getTrxData() {
            if (this.TrxLock) return;
            const e = await O(Q6());
            e &&
               e.data &&
               (e.data.forEach(s => {
                  this.setData(s);
               }),
               (this.TrxLock = !0),
               setTimeout(() => {
                  this.TrxLock = !1;
               }, ct));
         },
         async getK3Data() {
            if (this.k3Lock) return;
            const e = await O(O6());
            e &&
               e.data &&
               (e.data.forEach(s => {
                  this.setData(s);
               }),
               (this.k3Lock = !0),
               setTimeout(() => {
                  this.k3Lock = !1;
               }, ct));
         },
         async get5DData() {
            if (this.fiveDLock) return;
            const e = await O(F6());
            e &&
               e.data &&
               (e.data.forEach(s => {
                  this.setData(s);
               }),
               (this.fiveDLock = !0),
               setTimeout(() => {
                  this.fiveDLock = !1;
               }, ct));
         },
         async getWinGoRule(e) {
            if (this[e].gamePresentation) return;
            const s = await O(T6({ typeId: e }));
            s && s.data && (this[e].gamePresentation = s.data.gamePresentation);
         },
         async getTrxRule(e) {
            if (this[e].gamePresentation) return;
            const s = await O(V6({ typeId: e }));
            s && s.data && (this[e].gamePresentation = s.data.gamePresentation);
         },
         async getK3Rule(e) {
            if (this[e].gamePresentation) return;
            const s = await O(N6({ typeId: e }));
            s && s.data && (this[e].gamePresentation = s.data.gamePresentation);
         },
         async get5DRule(e) {
            if (this[e].gamePresentation) return;
            const s = await O(x6({ typeId: e }));
            s && s.data && (this[e].gamePresentation = s.data.gamePresentation);
         },
         setData(e) {
            (this[e.typeID].scope = e.scope), (this[e.typeID].gamePresentation = e.gamePresentation), (this[e.typeID].betMultiple = e.betMultiple);
         },
      },
   }),
   $ = (e, s) => {
      const n = e.__vccOpts || e;
      for (const [A, o] of s) n[A] = o;
      return n;
   },
   mf = { key: 0, class: "step" },
   vf = q({
      __name: "Progress",
      props: { strokeWidth: { type: Number, default: 12 }, total: { type: Number, default: 0 }, numerical: { type: Number, default: 0 }, color: { type: String, default: "#FA5D5D" }, trackColor: { type: String, default: "#D8D8D8" }, isShowStep: { type: Boolean, default: !0 } },
      setup(e) {
         const s = e,
            n = Q(() => ({ background: s.trackColor, height: `${s.strokeWidth}px`, "border-radius": `${s.strokeWidth}px` })),
            A = Q(() => {
               let i = "0";
               return s.numerical == 0 || s.total == 0 ? (i = "0") : s.numerical > s.total ? (i = "100") : (i = String(((s.numerical / s.total) * 100).toFixed(2))), { background: s.color, width: `${i}%`, height: `${s.strokeWidth}px`, "border-radius": `${s.strokeWidth}px` };
            }),
            o = Q(() => `${s.numerical}/${s.total}`);
         return (i, c) => (_(), m("div", { class: "progress", style: Ge(n.value) }, [t("div", { class: "line", style: Ge(A.value) }, null, 4), e.isShowStep ? (_(), m("div", mf, a(o.value), 1)) : H("", !0)], 4));
      },
   });
const hf = $(vf, [["__scopeId", "data-v-c0491936"]]),
   wf = { class: "head" },
   bf = { class: "title" },
   Cf = { class: "orange" },
   Bf = { class: "description" },
   yf = { class: "foot" },
   ff = ["onClick"],
   Rf = { class: "dialog-wrapper" },
   Ef = { class: "dialog-title" },
   If = { class: "dialog-content" },
   Sf = q({
      __name: "listItem",
      props: { list: { type: Array, default: () => [{ rewardAmount: 123 }] }, isRule: { type: Boolean, default: !1 } },
      emits: ["gorecharge"],
      setup(e, { emit: s }) {
         const { t: n } = ie(),
            A = S(!1),
            o = S("");
         let i = !1;
         const { receiveFirstRechargeReward: c, ActiveSotre: u } = We(),
            { closeFirstSave: h } = Y6(),
            d = (B, w) => {
               const { canReceive: y, isFinshed: b } = B;
               if (!y) return "n2" + (w ? " rule" : "");
               if (y && !b) return "n1" + (w ? " rule" : "");
               if (b) return "n3" + (w ? " rule" : "");
               if (!b) return "n2" + (w ? " rule" : "");
            },
            p = B => {
               const { canReceive: w, isFinshed: y } = B;
               return n(w ? (y ? "claimed" : "receive") : "torecharge");
            },
            C = async B => {
               const { canReceive: w, isFinshed: y } = B;
               if (!w) return s("gorecharge");
               if (y || i) return;
               i = !0;
               const b = await c(B.id);
               (i = !1), b && ((u.value.receiveAmount = B.rewardAmount), (u.value.showReceiveDialog = !0), h());
            };
         return (B, w) => {
            const y = x("van-dialog"),
               b = _e("lazy");
            return (
               _(),
               m(
                  Y,
                  null,
                  [
                     (_(!0),
                     m(
                        Y,
                        null,
                        se(e.list, (v, f) => (_(), m("div", { key: f, class: "first_list-item" }, [t("div", wf, [t("div", bf, [K(a(B.$t("firstSave")), 1), t("span", null, a(v.rechargeAmount), 1)]), t("div", Cf, "+ " + a(l(Ae)(v.rewardAmount)), 1)]), t("div", Bf, a(B.$t("firstSaveT", [v.rechargeAmount, v.rewardAmount])), 1), t("div", yf, [U(hf, { "stroke-width": 16, color: "#FA5D5D", total: v.rechargeAmount, numerical: v.canReceive ? v.rechargeAmount : 0 }, null, 8, ["total", "numerical"]), t("div", { class: oe(["btn", [d(v, e.isRule)]]), onClick: R => C(v) }, a(p(v)), 11, ff)])]))),
                        128,
                     )),
                     U(y, { show: A.value, "onUpdate:show": w[2] || (w[2] = v => (A.value = v)), "show-confirm-button": !1, className: "noOverHidden" }, { default: j(() => [t("div", Rf, [P(t("img", null, null, 512), [[b, l(V)("activity/DailyTask", "confirmationReceived")]]), t("div", Ef, a(B.$t("awardsReceived")), 1), t("div", If, [P(t("img", null, null, 512), [[b, l(V)("activity/DailyTask", "amountIcon")]]), t("span", null, a(l(Ae)(o.value)), 1)]), t("div", { class: "dialog-btn", onClick: w[0] || (w[0] = v => (A.value = !1)) }, a(B.$t("confirm")), 1), t("div", { class: "dialog-footer", onClick: w[1] || (w[1] = v => (A.value = !1)) }, [P(t("img", null, null, 512), [[b, l(V)("activity/DailyTask", "close")]])])])]), _: 1 }, 8, ["show"]),
                  ],
                  64,
               )
            );
         };
      },
   });
const Df = $(Sf, [["__scopeId", "data-v-4a7efe47"]]),
   Gf = { class: "item" },
   Uf = ["src"],
   Mf = { class: "right" },
   Lf = { key: 0 },
   kf = { key: 1 },
   Tf = { key: 2 },
   Qf = { key: 3, class: "time" },
   Vf = ["innerHTML"],
   Of = { key: 4, class: "time" },
   Nf = { key: 5, class: "time" },
   Ff = { class: "foot" },
   xf = { class: "amount" },
   Pf = q({
      __name: "card",
      props: { bgImgWidth: { default: "100%" }, bgImgHeight: { default: "150px" }, itemD: { default: {} }, state: {}, isRefresh: { type: Boolean, default: !1 } },
      emits: ["update:isRefresh"],
      setup(e, { emit: s }) {
         const n = e,
            { serviceNowTime: A } = At(),
            { isRefresh: o } = wn(n, s),
            i = S(0),
            c = S();
         Be(
            () => n.itemD.id,
            C => {
               h();
            },
            { immediate: !0 },
         );
         const u = Q(() => c.value.current);
         function h() {
            if (n.state == 1) {
               const C = A.value.replace(/-/g, "/"),
                  B = n.itemD.endTime.replace(/-/g, "/");
               (i.value = new Date(B).getTime() - new Date(C).getTime()), i.value > 0 && ((c.value = ms({ time: i.value, onChange: d })), c.value.start());
            }
         }
         function d(C) {
            C.total == 0 ? (o.value = !0) : (o.value = !1);
         }
         function p(C) {
            const B = String(C.hours).padStart(2, "0"),
               w = String(C.minutes).padStart(2, "0"),
               y = String(C.seconds).padStart(2, "0");
            return B + ":" + w + ":" + y;
         }
         return (C, B) => (
            _(),
            m("div", Gf, [
               t("img", { src: C.itemD.iconUrl, alt: "", style: Ge(`width:${C.bgImgWidth};height:${C.bgImgHeight};`) }, null, 12, Uf),
               t("div", Mf, [
                  be(
                     C.$slots,
                     "content",
                     {},
                     () => {
                        var w, y;
                        return [t("div", { class: oe(["head", `type${C.state}`]) }, [C.state == 1 ? (_(), m("h1", Lf, a(C.$t("cpsTip3")), 1)) : C.state == 0 ? (_(), m("h1", kf, a(C.$t("startTime")), 1)) : C.state == 2 ? (_(), m("h1", Tf, a(C.$t("ended")), 1)) : H("", !0), C.state == 1 ? (_(), m("div", Qf, [t("p", { innerHTML: C.$t("fifteenDays", [u.value.days]) }, null, 8, Vf), t("h6", null, a(p(u.value)), 1)])) : H("", !0), C.state == 0 ? (_(), m("div", Of, a((w = C.itemD) == null ? void 0 : w.startTime), 1)) : H("", !0), C.state == 2 ? (_(), m("div", Nf, " 00:00:00 ")) : H("", !0)], 2), t("div", Ff, [t("h1", null, a(C.$t("winTips5")), 1), t("div", xf, a(l(Ae)(((y = C.itemD) == null ? void 0 : y.sumBonus) || 0)), 1)])];
                     },
                     !0,
                  ),
               ]),
               be(C.$slots, "footer", {}, void 0, !0),
            ])
         );
      },
   });
const zt = $(Pf, [["__scopeId", "data-v-a4213359"]]),
   Hf = e => (fe("data-v-df7a533f"), (e = e()), Re(), e),
   Yf = { class: "activity-wrapper" },
   Wf = { class: "activity-banner" },
   Kf = { class: "banner-title" },
   Xf = { class: "banner-para" },
   Jf = { class: "banner-para" },
   zf = { class: "activity-panel" },
   jf = { class: "msg-window" },
   Zf = { class: "msg-header" },
   qf = { class: "msg-footer" },
   $f = Hf(() => t("div", { class: "nowidth" }, null, -1)),
   eR = ["onClick"],
   tR = { class: "activity-panel-content" },
   sR = { class: "content-para" },
   nR = { class: "content-para" },
   aR = { key: 0, class: "cardBox" },
   AR = { class: "activitySection__container" },
   oR = ["onClick"],
   iR = ["src", "onError"],
   lR = { class: "box-content" },
   cR = { class: "box-title" },
   gR = { class: "dialog-window" },
   rR = { class: "dialog-wrapper" },
   dR = { class: "dialog-title" },
   pR = { class: "dialog-para" },
   _R = q({
      __name: "index",
      props: { activityList: { type: Array, default: () => {} } },
      setup(e) {
         const { ActiveSotre: s, saveUserGuidelines: n, saveUserDayRequest: A, getDailyAwardCount: o, allUnAwardCount: i } = We();
         o();
         const { championEntranceV: c, championEntranceVO: u } = At();
         Be(
            () => s.value.isOpenChampion,
            D => {
               D == 1 && c();
            },
         );
         const h = S(!1);
         Be(h, D => {
            h.value && c();
         });
         const d = S(!0),
            p = S(!0),
            C = S([]),
            { t: B } = ie(),
            w = S(!1),
            y = S(!1),
            b = S(1),
            v = S(!1),
            f = ae(),
            R = Q(() => [
               { name: B("actTip1"), icon: "a1", goPath: "DailyTasks", noread: i.value, show: s.value.isOpenActivityAward },
               { name: B("invitationBonus"), icon: "a2", goPath: "InvitationBonus", noread: 0, show: s.value.isTaskState },
               { name: B("laundryAmount"), icon: "a3", goPath: "Laundry", noread: 0, show: s.value.isOpenWashCode },
               { name: B("superjackpot"), icon: "a4", goPath: "SuperJackpot", noread: s.value.unJackpotCount, show: s.value.isOpenJackpotReward },
               { name: B("newMenberPackage"), icon: "a5", goPath: "MemberPackage", noread: 0, show: s.value.newMemberGiftPackageSwitch },
            ]),
            L = Q(() => R.value.filter(D => D.show).length);
         function M(D) {
            let E;
            const { bannerID: X, jumpType: J, contents: W } = D;
            if (J == 2) {
               if (W.startsWith("/")) {
                  f.push({ path: W });
                  return;
               }
               window.location.assign(W);
               return;
            }
            switch (X) {
               case 1:
                  E = "DailyTasks";
                  break;
               case 2:
                  E = "PointMall";
                  break;
               case 3:
                  E = "InvitationBonus";
                  break;
               default:
                  E = "ActivityDetail";
                  break;
            }
            E == "ActivityDetail" ? f.push({ name: E, query: { id: X } }) : E && f.push({ name: E });
         }
         const ee = (D, E) => {
               (D.bannerUrl = V("images", "avatar")),
                  mt(() => {
                     let X = document.querySelector(`.act_${E}`);
                     (X.src = D.bannerUrl), (X.style.objectFit = "contain");
                  });
            },
            N = D => {
               f.push({ name: D });
            },
            G = () => {
               n(), N("DailyTasks");
            },
            k = () => {
               (p.value = !1), (d.value = !1);
            },
            T = (D = null) => {
               A(), D && (k(), N("DailyTasks"));
            },
            F = async () => {
               const D = await O(yy({ pageNo: b.value, pageSize: 20 }));
               D ? (D.data.totalCount == 0 && (v.value = !0), D.data.totalPage <= b.value && (y.value = !0), D.data.list && C.value.push(...D.data.list), b.value++) : (y.value = !0), (w.value = !1);
            },
            ne = S("top-start");
         function ge() {
            ne.value = localStorage.getItem("language") == "ar" ? "top-end" : "top-start";
         }
         return (
            ce(() => {
               s.value.isOpenChampion == 1 && c(), ge();
            }),
            bn(() => {
               (p.value = !1), (d.value = !1);
            }),
            (D, E) => {
               const X = x("van-popover"),
                  J = x("van-badge"),
                  W = x("van-list"),
                  le = x("Empty"),
                  te = x("van-dialog"),
                  z = _e("lazy");
               return (
                  _(),
                  m("div", Yf, [
                     t("div", Wf, [t("div", null, [t("div", Kf, a(D.$t("activity")), 1), t("div", Xf, a(D.$t("activityTip1")), 1), t("div", Jf, a(D.$t("activityTip2")), 1)])]),
                     t("div", zf, [
                        l(s).isFinishUserGuidelines && l(s).isOpenActivityAward ? (_(), de(X, { key: 0, id: "popover", show: l(s).isFinishUserGuidelines, "onUpdate:show": E[0] || (E[0] = Z => (l(s).isFinishUserGuidelines = Z)), overlay: !0, placement: ne.value, "close-on-click-overlay": !1, onClose: k }, { reference: j(() => [$f]), default: j(() => [t("div", jf, [t("div", Zf, a(D.$t("activityTip8")), 1), t("div", qf, [t("div", { onClick: G }, [t("span", null, a(D.$t("dragonEntry")), 1), P(t("img", null, null, 512), [[z, l(V)("activity/DailyTask", "dualArrow")]])])])])]), _: 1 }, 8, ["show", "placement"])) : H("", !0),
                        t(
                           "div",
                           { class: oe(["activity-panel-header", ["lg" + L.value]]) },
                           [
                              (_(!0),
                              m(
                                 Y,
                                 null,
                                 se(R.value, Z => (_(), m(Y, null, [Z.show ? (_(), m("div", { key: 0, class: "header-item", onClick: we => N(Z.goPath) }, [U(J, { content: Z.noread, max: "99", "show-zero": !1, color: "#FA5B5B" }, { default: j(() => [t("div", { class: oe([Z.icon, "bgcontainer"]) }, null, 2)]), _: 2 }, 1032, ["content"]), t("span", null, a(Z.name), 1)], 8, eR)) : H("", !0)], 64))),
                                 256,
                              )),
                           ],
                           2,
                        ),
                        t("div", tR, [t("div", { class: "content-title", onClick: E[1] || (E[1] = Z => N("RedeemGift")) }, [P(t("img", null, null, 512), [[z, l(V)("activity/DailyTask", "signInBanner")]]), t("div", sR, a(D.$t("giftExchange")), 1), t("p", null, a(D.$t("activityTip3")), 1)]), t("div", { class: "content-title", onClick: E[2] || (E[2] = Z => N("DailySignIn")) }, [P(t("img", null, null, 512), [[z, l(V)("activity/DailyTask", "giftRedeem")]]), t("div", nR, a(D.$t("code8007")), 1), t("p", null, a(D.$t("activityTip4")), 1)])]),
                     ]),
                     l(s).isOpenChampion == 1 ? (_(), m("div", aR, [U(zt, { itemD: l(u), state: l(u).state, isRefresh: h.value, "onUpdate:isRefresh": E[3] || (E[3] = Z => (h.value = Z)), bgImgWidth: "100%", bgImgHeight: "150px", onClick: E[4] || (E[4] = () => l(f).push({ name: "Championship" })) }, null, 8, ["itemD", "state", "isRefresh"])])) : H("", !0),
                     U(
                        W,
                        { loading: w.value, "onUpdate:loading": E[5] || (E[5] = Z => (w.value = Z)), finished: y.value, "finished-text": l(B)("noMoreThere"), onLoad: F },
                        {
                           default: j(() => [
                              t("div", AR, [
                                 (_(!0),
                                 m(
                                    Y,
                                    null,
                                    se(C.value, (Z, we) => (_(), m("div", { class: "box", key: we, onClick: Xe => M(Z) }, [t("img", { src: Z.bannerUrl, class: oe(`act_${we}`), onError: Xe => ee(Z, we) }, null, 42, iR), t("div", lR, [t("div", cR, a(Z.bannerTitle), 1)])], 8, oR))),
                                    128,
                                 )),
                              ]),
                           ]),
                           _: 1,
                        },
                        8,
                        ["loading", "finished", "finished-text"],
                     ),
                     v.value ? (_(), de(le, { key: 1 })) : H("", !0),
                     l(i) > 0 && l(s).isOpenActivityAward ? (_(), de(te, { key: 2, show: l(s).isFirstUserDayRequest, "onUpdate:show": E[8] || (E[8] = Z => (l(s).isFirstUserDayRequest = Z)), "show-confirm-button": !1, className: "noOverHidden" }, { default: j(() => [t("div", gR, [t("div", rR, [P(t("img", null, null, 512), [[z, l(V)("activity/DailyTask", "present")]]), t("div", dR, [K(a(D.$t("activityTip5")) + " ", 1), t("span", null, a(l(i)), 1)]), t("div", pR, a(D.$t("activityTip6")), 1), t("div", { class: "dialog-btn", onClick: E[6] || (E[6] = Z => T(!0)) }, a(D.$t("activityTip7")), 1), t("div", { class: "dialog-footer", onClick: E[7] || (E[7] = Z => T()) }, [P(t("img", null, null, 512), [[z, l(V)("activity/DailyTask", "close")]])])])])]), _: 1 }, 8, ["show"])) : H("", !0),
                  ])
               );
            }
         );
      },
   });
const uR = $(_R, [["__scopeId", "data-v-df7a533f"]]),
   bt = e => (fe("data-v-6dd6243e"), (e = e()), Re(), e),
   mR = bt(() => t("br", null, null, -1)),
   vR = bt(() => t("br", null, null, -1)),
   hR = bt(() => t("br", null, null, -1)),
   wR = bt(() => t("br", null, null, -1)),
   bR = q({
      __name: "index",
      setup(e) {
         const { getActive: s } = We();
         return (
            s(),
            (n, A) => {
               const o = x("NavBar");
               return _(), m(Y, null, [U(o, { "background-color": "linear-gradient(90deg, #8deef5 0%, #259aa3 100%)", headLogo: !0 }), U(uR), mR, vR, hR, wR], 64);
            }
         );
      },
   });
const CR = $(bR, [["__scopeId", "data-v-6dd6243e"]]),
   BR = Object.freeze(Object.defineProperty({ __proto__: null, default: CR }, Symbol.toStringTag, { value: "Module" })),
   yR = { class: "dialog__container", role: "dialog", tabindex: "0" },
   fR = { key: 0, class: "dialog__container-img" },
   RR = { alt: "" },
   ER = { class: "dialog__container-title" },
   IR = { class: "dialog__container-content" },
   SR = { key: 1, class: "dialog__container-footer" },
   DR = ["src"],
   GR = q({
      __name: "Dialog",
      props: { show: { type: Boolean, default: !1 }, title: { type: String, default: "" }, confirmText: { type: String, default: "" }, showCancelBtn: { type: Boolean, default: !0 }, cancelText: { type: String, default: "" }, clickOutSide: { type: Boolean, default: !1 }, isShowHeader: { type: Boolean, default: !0 }, imgUrl: { type: String, default: "orderCancelWarn" }, showCloseIcon: { type: Boolean, default: !1 }, showFooter: { type: Boolean, default: !0 } },
      emits: ["update:show", "confirm"],
      setup(e, { emit: s }) {
         const n = e;
         Be(
            () => n.show,
            i => {
               i ? window.addEventListener("touchmove", o, { passive: !1 }) : window.removeEventListener("touchmove", o);
            },
         );
         function A(i) {
            n.clickOutSide && s("update:show", !1);
         }
         const o = i => {};
         return (i, c) => {
            const u = _e("lazy");
            return (
               _(),
               m(
                  "div",
                  { class: oe(["dialog", { active: e.show, inactive: !e.show }]) },
                  [
                     t("div", yR, [
                        e.isShowHeader ? (_(), m("div", fR, [be(i.$slots, "header", {}, () => [P(t("img", RR, null, 512), [[u, l(V)("activity/PointMall", e.imgUrl)]])], !0)])) : H("", !0),
                        t("div", ER, [be(i.$slots, "title", {}, () => [t("h1", null, a(e.title), 1)], !0)]),
                        t("div", IR, [be(i.$slots, "content", {}, void 0, !0)]),
                        e.showFooter
                           ? (_(),
                             m("div", SR, [
                                be(
                                   i.$slots,
                                   "footer",
                                   {},
                                   () => [
                                      e.showCancelBtn
                                         ? (_(),
                                           m(
                                              "button",
                                              {
                                                 key: 0,
                                                 onClick:
                                                    c[0] ||
                                                    (c[0] = () => {
                                                       s("update:show", !1);
                                                    }),
                                              },
                                              a(e.cancelText || i.$t("cancel")),
                                              1,
                                           ))
                                         : H("", !0),
                                      t(
                                         "button",
                                         {
                                            onClick:
                                               c[1] ||
                                               (c[1] = () => {
                                                  s("confirm");
                                               }),
                                         },
                                         a(e.confirmText || i.$t("confirm")),
                                         1,
                                      ),
                                   ],
                                   !0,
                                ),
                             ]))
                           : H("", !0),
                        e.showCloseIcon ? (_(), m("img", { key: 2, class: "close_img", src: l(V)("common", "close"), onClick: A }, null, 8, DR)) : H("", !0),
                     ]),
                     t("div", { class: "dialog__outside", onClick: A }),
                  ],
                  2,
               )
            );
         };
      },
   });
const $e = $(GR, [["__scopeId", "data-v-68975d75"]]),
   UR = {
      zh_TC: { code: "zh_TC", name: "Hong Kong", dialCode: "+852", phoneFormat: "5123 4567" },
      en: { code: "en", name: "USA", dialCode: "+1", phoneFormat: "213 223 4827" },
      mo: { code: "mo", name: "Macau", dialCode: "+853", phoneFormat: "6612 3456" },
      tw: { code: "tw", name: "Taiwan", dialCode: "+886", phoneFormat: "0912 345 678" },
      kh: { code: "kh", name: "Cambodia", dialCode: "+855", phoneFormat: "091 234 567" },
      th: { code: "th", name: "Thailand", dialCode: "+66", phoneFormat: "081 234 5678" },
      id: { code: "id", name: "Indonesia", dialCode: "+62", phoneFormat: "0812-345-678" },
      io: { code: "io", name: "British Indian Ocean Territory", dialCode: "+246", phoneFormat: "380 1234" },
      sg: { code: "sg", name: "Singapore", dialCode: "+65", phoneFormat: "8123 4567" },
      vi: { code: "vi", name: "Vietnam", dialCode: "+84", phoneFormat: "091 234 56 78" },
      mm: { code: "mm", name: "Myanmar", dialCode: "+95", phoneFormat: "09 212 3456" },
      la: { code: "la", name: "Laos", dialCode: "+856", phoneFormat: "020 23 123 456" },
      zh_CN: { code: "zh_CN", name: "China", dialCode: "+86", phoneFormat: "131 2345 6789" },
      ae: { code: "ae", name: "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", dialCode: "+971", phoneFormat: "050 123 4567" },
      af: { code: "af", name: "Afghanistan (‫افغانستان‬‎)", dialCode: "+93", phoneFormat: "070 123 4567" },
      al: { code: "al", name: "Albania (Shqipëri)", dialCode: "+355", phoneFormat: "066 123 4567" },
      dz: { code: "dz", name: "Algeria (‫الجزائر‬‎)", dialCode: "+213", phoneFormat: "0551 23 45 67" },
      as: { code: "as", name: "American Samoa", dialCode: "+1684", phoneFormat: "(684) 733-1234" },
      ad: { code: "ad", name: "Andorra", dialCode: "+376", phoneFormat: "312 345" },
      ao: { code: "ao", name: "Angola", dialCode: "+244", phoneFormat: "923 123 456" },
      ai: { code: "ai", name: "Anguilla", dialCode: "+1264", phoneFormat: "(264) 235-1234" },
      ag: { code: "ag", name: "Antigua and Barbuda", dialCode: "+1268", phoneFormat: "(268) 464-1234" },
      ar: { code: "ar", name: "Argentina", dialCode: "+54", phoneFormat: "011 15-2345-6789" },
      am: { code: "am", name: "Armenia (Հայաստան)", dialCode: "+374", phoneFormat: "077 123456" },
      aw: { code: "aw", name: "Aruba", dialCode: "+297", phoneFormat: "560 1234" },
      au: { code: "au", name: "Australia", dialCode: "+61", phoneFormat: "0412 345 678" },
      at: { code: "at", name: "Austria (Österreich)", dialCode: "+43", phoneFormat: "0664 123456" },
      az: { code: "az", name: "Azerbaijan (Azərbaycan)", dialCode: "+994", phoneFormat: "040 123 45 67" },
      bs: { code: "bs", name: "Bahamas", dialCode: "+1242", phoneFormat: "(242) 359-1234" },
      bh: { code: "bh", name: "Bahrain (‫البحرين‬‎)", dialCode: "+973", phoneFormat: "3600 1234" },
      bd: { code: "bd", name: "Bangladesh (বাংলাদেশ)", dialCode: "+880", phoneFormat: "01812-345678" },
      bb: { code: "bb", name: "Barbados", dialCode: "+1246", phoneFormat: "(246) 250-1234" },
      by: { code: "by", name: "Belarus (Беларусь)", dialCode: "+375", phoneFormat: "8 029 491-19-11" },
      be: { code: "be", name: "Belgium (België)", dialCode: "+32", phoneFormat: "0470 12 34 56" },
      bz: { code: "bz", name: "Belize", dialCode: "+501", phoneFormat: "622-1234" },
      bj: { code: "bj", name: "Benin (Bénin)", dialCode: "+229", phoneFormat: "90 01 12 34" },
      bm: { code: "bm", name: "Bermuda", dialCode: "+1441", phoneFormat: "(441) 370-1234" },
      bt: { code: "bt", name: "Bhutan (འབྲུག)", dialCode: "+975", phoneFormat: "17 12 34 56" },
      bo: { code: "bo", name: "Bolivia", dialCode: "+591", phoneFormat: "71234567" },
      ba: { code: "ba", name: "Bosnia and Herzegovina (Босна и Херцеговина)", dialCode: "+387", phoneFormat: "061 123 456" },
      bw: { code: "bw", name: "Botswana", dialCode: "+267", phoneFormat: "71 123 456" },
      br: { code: "br", name: "Brazil (Brasil)", dialCode: "+55", phoneFormat: "(11) 96123-4567" },
      vg: { code: "vg", name: "British Virgin Islands", dialCode: "+1284", phoneFormat: "(284) 300-1234" },
      bn: { code: "bn", name: "Brunei", dialCode: "+673", phoneFormat: "712 3456" },
      bg: { code: "bg", name: "Bulgaria (България)", dialCode: "+359", phoneFormat: "048 123 456" },
      bf: { code: "bf", name: "Burkina Faso", dialCode: "+226", phoneFormat: "70 12 34 56" },
      bi: { code: "bi", name: "Burundi (Uburundi)", dialCode: "+257", phoneFormat: "79 56 12 34" },
      cm: { code: "cm", name: "Cameroon (Cameroun)", dialCode: "+237", phoneFormat: "6 71 23 45 67" },
      ca: { code: "ca", name: "Canada", dialCode: "+1", phoneFormat: "(204) 234-5678" },
      cv: { code: "cv", name: "Cape Verde (Kabu Verdi)", dialCode: "+238", phoneFormat: "991 12 34" },
      bq: { code: "bq", name: "Caribbean Netherlands", dialCode: "+599", phoneFormat: "318 1234" },
      ky: { code: "ky", name: "Cayman Islands", dialCode: "+1345", phoneFormat: "(345) 323-1234" },
      cf: { code: "cf", name: "Central African Republic (République centrafricaine)", dialCode: "+236", phoneFormat: "70 01 23 45" },
      td: { code: "td", name: "Chad (Tchad)", dialCode: "+235", phoneFormat: "63 01 23 45" },
      cl: { code: "cl", name: "Chile", dialCode: "+56", phoneFormat: "09 6123 4567" },
      cx: { code: "cx", name: "Christmas Island", dialCode: "+61", phoneFormat: "0412 345 678" },
      cc: { code: "cc", name: "Cocos (Keeling) Islands", dialCode: "+61", phoneFormat: "0412 345 678" },
      co: { code: "co", name: "Colombia", dialCode: "+57", phoneFormat: "321 1234567" },
      km: { code: "km", name: "Comoros (‫جزر القمر‬‎)", dialCode: "+269", phoneFormat: "321 23 45" },
      cd: { code: "cd", name: "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", dialCode: "+243", phoneFormat: "0991 234 567" },
      cg: { code: "cg", name: "Congo (Republic) (Congo-Brazzaville)", dialCode: "+242", phoneFormat: "06 123 4567" },
      ck: { code: "ck", name: "Cook Islands", dialCode: "+682", phoneFormat: "71 234" },
      cr: { code: "cr", name: "Costa Rica", dialCode: "+506", phoneFormat: "8312 3456" },
      ci: { code: "ci", name: "Côte d’Ivoire", dialCode: "+225", phoneFormat: "01 23 45 67" },
      hr: { code: "hr", name: "Croatia (Hrvatska)", dialCode: "+385", phoneFormat: "091 234 5678" },
      cu: { code: "cu", name: "Cuba", dialCode: "+53", phoneFormat: "05 1234567" },
      cw: { code: "cw", name: "Curaçao", dialCode: "+599", phoneFormat: "9 518 1234" },
      cy: { code: "cy", name: "Cyprus (Κύπρος)", dialCode: "+357", phoneFormat: "96 123456" },
      cz: { code: "cz", name: "Czech Republic (Česká republika)", dialCode: "+420", phoneFormat: "601 123 456" },
      dk: { code: "dk", name: "Denmark (Danmark)", dialCode: "+45", phoneFormat: "20 12 34 56" },
      dj: { code: "dj", name: "Djibouti", dialCode: "+253", phoneFormat: "77 83 10 01" },
      dm: { code: "dm", name: "Dominica", dialCode: "+1767", phoneFormat: "(767) 225-1234" },
      ec: { code: "ec", name: "Ecuador", dialCode: "+593", phoneFormat: "099 123 4567" },
      eg: { code: "eg", name: "Egypt (‫مصر‬‎)", dialCode: "+20", phoneFormat: "0100 123 4567" },
      sv: { code: "sv", name: "El Salvador", dialCode: "+503", phoneFormat: "7012 3456" },
      gq: { code: "gq", name: "Equatorial Guinea (Guinea Ecuatorial)", dialCode: "+240", phoneFormat: "222 123 456" },
      er: { code: "er", name: "Eritrea", dialCode: "+291", phoneFormat: "07 123 456" },
      ee: { code: "ee", name: "Estonia (Eesti)", dialCode: "+372", phoneFormat: "5123 4567" },
      et: { code: "et", name: "Ethiopia", dialCode: "+251", phoneFormat: "091 123 4567" },
      fk: { code: "fk", name: "Falkland Islands (Islas Malvinas)", dialCode: "+500", phoneFormat: "51234" },
      fo: { code: "fo", name: "Faroe Islands (Føroyar)", dialCode: "+298", phoneFormat: "211234" },
      fj: { code: "fj", name: "Fiji", dialCode: "+679", phoneFormat: "701 2345" },
      fi: { code: "fi", name: "Finland (Suomi)", dialCode: "+358", phoneFormat: "041 2345678" },
      fr: { code: "fr", name: "France", dialCode: "+33", phoneFormat: "06 12 34 56 78" },
      gf: { code: "gf", name: "French Guiana (Guyane française)", dialCode: "+594", phoneFormat: "0694 20 12 34" },
      pf: { code: "pf", name: "French Polynesia (Polynésie française)", dialCode: "+689", phoneFormat: "87 12 34 56" },
      ga: { code: "ga", name: "Gabon", dialCode: "+241", phoneFormat: "06 03 12 34" },
      gm: { code: "gm", name: "Gambia", dialCode: "+220", phoneFormat: "301 2345" },
      ge: { code: "ge", name: "Georgia (საქართველო)", dialCode: "+995", phoneFormat: "555 12 34 56" },
      de: { code: "de", name: "Germany (Deutschland)", dialCode: "+49", phoneFormat: "01512 3456789" },
      gh: { code: "gh", name: "Ghana (Gaana)", dialCode: "+233", phoneFormat: "023 123 4567" },
      gi: { code: "gi", name: "Gibraltar", dialCode: "+350", phoneFormat: "57123456" },
      gr: { code: "gr", name: "Greece (Ελλάδα)", dialCode: "+30", phoneFormat: "691 234 5678" },
      gl: { code: "gl", name: "Greenland (Kalaallit Nunaat)", dialCode: "+299", phoneFormat: "22 12 34" },
      gd: { code: "gd", name: "Grenada", dialCode: "+1473", phoneFormat: "(473) 403-1234" },
      gp: { code: "gp", name: "Guadeloupe", dialCode: "+590", phoneFormat: "0690 30-1234" },
      gu: { code: "gu", name: "Guam", dialCode: "+1671", phoneFormat: "(671) 300-1234" },
      gt: { code: "gt", name: "Guatemala", dialCode: "+502", phoneFormat: "5123 4567" },
      gg: { code: "gg", name: "Guernsey", dialCode: "+44", phoneFormat: "07781 123456" },
      gn: { code: "gn", name: "Guinea (Guinée)", dialCode: "+224", phoneFormat: "601 12 34 56" },
      gw: { code: "gw", name: "Guinea-Bissau (Guiné Bissau)", dialCode: "+245", phoneFormat: "955 012 345" },
      gy: { code: "gy", name: "Guyana", dialCode: "+592", phoneFormat: "609 1234" },
      ht: { code: "ht", name: "Haiti", dialCode: "+509", phoneFormat: "34 10 1234" },
      hn: { code: "hn", name: "Honduras", dialCode: "+504", phoneFormat: "9123-4567" },
      hu: { code: "hu", name: "Hungary (Magyarország)", dialCode: "+36", phoneFormat: "(20) 123 4567" },
      is: { code: "is", name: "Iceland (Ísland)", dialCode: "+354", phoneFormat: "611 1234" },
      in: { code: "in", name: "India (भारत)", dialCode: "+91", phoneFormat: "099876 54321" },
      ir: { code: "ir", name: "Iran (‫ایران‬‎)", dialCode: "+98", phoneFormat: "0912 345 6789" },
      iq: { code: "iq", name: "Iraq (‫العراق‬‎)", dialCode: "+964", phoneFormat: "0791 234 5678" },
      ie: { code: "ie", name: "Ireland", dialCode: "+353", phoneFormat: "085 012 3456" },
      im: { code: "im", name: "Isle of Man", dialCode: "+44", phoneFormat: "07924 123456" },
      il: { code: "il", name: "Israel (‫ישראל‬‎)", dialCode: "+972", phoneFormat: "050-123-4567" },
      it: { code: "it", name: "Italy (Italia)", dialCode: "+39", phoneFormat: "312 345 6789" },
      jm: { code: "jm", name: "Jamaica", dialCode: "+1876", phoneFormat: "(876) 210-1234" },
      jp: { code: "jp", name: "Japan (日本)", dialCode: "+81", phoneFormat: "090-1234-5678" },
      je: { code: "je", name: "Jersey", dialCode: "+44", phoneFormat: "07797 123456" },
      jo: { code: "jo", name: "Jordan (‫الأردن‬‎)", dialCode: "+962", phoneFormat: "07 9012 3456" },
      kz: { code: "kz", name: "Kazakhstan (Казахстан)", dialCode: "+7", phoneFormat: "8 (771) 000 9998" },
      ke: { code: "ke", name: "Kenya", dialCode: "+254", phoneFormat: "0712 123456" },
      ki: { code: "ki", name: "Kiribati", dialCode: "+686", phoneFormat: "72012345" },
      xk: { code: "xk", name: "Kosovo", dialCode: "+383", phoneFormat: "" },
      kw: { code: "kw", name: "Kuwait (‫الكويت‬‎)", dialCode: "+965", phoneFormat: "500 12345" },
      kg: { code: "kg", name: "Kyrgyzstan (Кыргызстан)", dialCode: "+996", phoneFormat: "0700 123 456" },
      lv: { code: "lv", name: "Latvia (Latvija)", dialCode: "+371", phoneFormat: "21 234 567" },
      lb: { code: "lb", name: "Lebanon (‫لبنان‬‎)", dialCode: "+961", phoneFormat: "71 123 456" },
      ls: { code: "ls", name: "Lesotho", dialCode: "+266", phoneFormat: "5012 3456" },
      lr: { code: "lr", name: "Liberia", dialCode: "+231", phoneFormat: "077 012 3456" },
      ly: { code: "ly", name: "Libya (‫ليبيا‬‎)", dialCode: "+218", phoneFormat: "091-2345678" },
      li: { code: "li", name: "Liechtenstein", dialCode: "+423", phoneFormat: "660 234 567" },
      lt: { code: "lt", name: "Lithuania (Lietuva)", dialCode: "+370", phoneFormat: "(8-612) 34567" },
      lu: { code: "lu", name: "Luxembourg", dialCode: "+352", phoneFormat: "628 123 456" },
      mk: { code: "mk", name: "Macedonia (FYROM) (Македонија)", dialCode: "+389", phoneFormat: "072 345 678" },
      mg: { code: "mg", name: "Madagascar (Madagasikara)", dialCode: "+261", phoneFormat: "032 12 345 67" },
      mw: { code: "mw", name: "Malawi", dialCode: "+265", phoneFormat: "0991 23 45 67" },
      my: { code: "my", name: "Malaysia", dialCode: "+60", phoneFormat: "012-345 6789" },
      mv: { code: "mv", name: "Maldives", dialCode: "+960", phoneFormat: "771-2345" },
      ml: { code: "ml", name: "Mali", dialCode: "+223", phoneFormat: "65 01 23 45" },
      mt: { code: "mt", name: "Malta", dialCode: "+356", phoneFormat: "9696 1234" },
      mh: { code: "mh", name: "Marshall Islands", dialCode: "+692", phoneFormat: "235-1234" },
      mq: { code: "mq", name: "Martinique", dialCode: "+596", phoneFormat: "0696 20 12 34" },
      mr: { code: "mr", name: "Mauritania (‫موريتانيا‬‎)", dialCode: "+222", phoneFormat: "22 12 34 56" },
      mu: { code: "mu", name: "Mauritius (Moris)", dialCode: "+230", phoneFormat: "5251 2345" },
      yt: { code: "yt", name: "Mayotte", dialCode: "+262", phoneFormat: "0639 12 34 56" },
      mx: { code: "mx", name: "Mexico (México)", dialCode: "+52", phoneFormat: "044 222 123 4567" },
      fm: { code: "fm", name: "Micronesia", dialCode: "+691", phoneFormat: "350 1234" },
      md: { code: "md", name: "Moldova (Republica Moldova)", dialCode: "+373", phoneFormat: "0621 12 345" },
      mc: { code: "mc", name: "Monaco", dialCode: "+377", phoneFormat: "06 12 34 56 78" },
      mn: { code: "mn", name: "Mongolia (Монгол)", dialCode: "+976", phoneFormat: "8812 3456" },
      me: { code: "me", name: "Montenegro (Crna Gora)", dialCode: "+382", phoneFormat: "067 622 901" },
      ms: { code: "ms", name: "Montserrat", dialCode: "+1664", phoneFormat: "(664) 492-3456" },
      ma: { code: "ma", name: "Morocco (‫المغرب‬‎)", dialCode: "+212", phoneFormat: "0650-123456" },
      mz: { code: "mz", name: "Mozambique (Moçambique)", dialCode: "+258", phoneFormat: "82 123 4567" },
      na: { code: "na", name: "Namibia (Namibië)", dialCode: "+264", phoneFormat: "081 123 4567" },
      nr: { code: "nr", name: "Nauru", dialCode: "+674", phoneFormat: "555 1234" },
      np: { code: "np", name: "Nepal (नेपाल)", dialCode: "+977", phoneFormat: "984-1234567" },
      nl: { code: "nl", name: "Netherlands (Nederland)", dialCode: "+31", phoneFormat: "06 12345678" },
      nc: { code: "nc", name: "New Caledonia (Nouvelle-Calédonie)", dialCode: "+687", phoneFormat: "75.12.34" },
      nz: { code: "nz", name: "New Zealand", dialCode: "+64", phoneFormat: "021 123 4567" },
      ni: { code: "ni", name: "Nicaragua", dialCode: "+505", phoneFormat: "8123 4567" },
      ne: { code: "ne", name: "Niger (Nijar)", dialCode: "+227", phoneFormat: "93 12 34 56" },
      ng: { code: "ng", name: "Nigeria", dialCode: "+234", phoneFormat: "0802 123 4567" },
      nu: { code: "nu", name: "Niue", dialCode: "+683", phoneFormat: "1234" },
      nf: { code: "nf", name: "Norfolk Island", dialCode: "+672", phoneFormat: "3 81234" },
      kp: { code: "kp", name: "North Korea (조선 민주주의 인민 공화국)", dialCode: "+850", phoneFormat: "0192 123 4567" },
      mp: { code: "mp", name: "Northern Mariana Islands", dialCode: "+1670", phoneFormat: "(670) 234-5678" },
      no: { code: "no", name: "Norway (Norge)", dialCode: "+47", phoneFormat: "406 12 345" },
      om: { code: "om", name: "Oman (‫عُمان‬‎)", dialCode: "+968", phoneFormat: "9212 3456" },
      pk: { code: "pk", name: "Pakistan (‫پاکستان‬‎)", dialCode: "+92", phoneFormat: "0301 2345678" },
      pw: { code: "pw", name: "Palau", dialCode: "+680", phoneFormat: "620 1234" },
      ps: { code: "ps", name: "Palestine (‫فلسطين‬‎)", dialCode: "+970", phoneFormat: "0599 123 456" },
      pa: { code: "pa", name: "Panama (Panamá)", dialCode: "+507", phoneFormat: "6001-2345" },
      pg: { code: "pg", name: "Papua New Guinea", dialCode: "+675", phoneFormat: "681 2345" },
      py: { code: "py", name: "Paraguay", dialCode: "+595", phoneFormat: "0961 456789" },
      pe: { code: "pe", name: "Peru (Perú)", dialCode: "+51", phoneFormat: "912 345 678" },
      ph: { code: "ph", name: "Philippines", dialCode: "+63", phoneFormat: "0905 123 4567" },
      pl: { code: "pl", name: "Poland (Polska)", dialCode: "+48", phoneFormat: "512 345 678" },
      pt: { code: "pt", name: "Portugal", dialCode: "+351", phoneFormat: "912 345 678" },
      qa: { code: "qa", name: "Qatar (‫قطر‬‎)", dialCode: "+974", phoneFormat: "3312 3456" },
      re: { code: "re", name: "Réunion (La Réunion)", dialCode: "+262", phoneFormat: "0692 12 34 56" },
      ro: { code: "ro", name: "Romania (România)", dialCode: "+40", phoneFormat: "0712 345 678" },
      ru: { code: "ru", name: "Russia (Россия)", dialCode: "+7", phoneFormat: "8 (912) 345-67-89" },
      rw: { code: "rw", name: "Rwanda", dialCode: "+250", phoneFormat: "0720 123 456" },
      bl: { code: "bl", name: "Saint Barthélemy (Saint-Barthélemy)", dialCode: "+590", phoneFormat: "0690 30-1234" },
      sh: { code: "sh", name: "Saint Helena", dialCode: "+290", phoneFormat: "51234" },
      kn: { code: "kn", name: "Saint Kitts and Nevis", dialCode: "+1869", phoneFormat: "(869) 765-2917" },
      lc: { code: "lc", name: "Saint Lucia", dialCode: "+1758", phoneFormat: "(758) 284-5678" },
      mf: { code: "mf", name: "Saint Martin (Saint-Martin (partie française))", dialCode: "+590", phoneFormat: "0690 30-1234" },
      pm: { code: "pm", name: "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", dialCode: "+508", phoneFormat: "055 12 34" },
      vc: { code: "vc", name: "Saint Vincent and the Grenadines", dialCode: "+1784", phoneFormat: "(784) 430-1234" },
      ws: { code: "ws", name: "Samoa", dialCode: "+685", phoneFormat: "601234" },
      sm: { code: "sm", name: "San Marino", dialCode: "+378", phoneFormat: "66 66 12 12" },
      st: { code: "st", name: "São Tomé and Príncipe (São Tomé e Príncipe)", dialCode: "+239", phoneFormat: "981 2345" },
      sa: { code: "sa", name: "Saudi Arabia (‫المملكة العربية السعودية‬‎)", dialCode: "+966", phoneFormat: "051 234 5678" },
      sn: { code: "sn", name: "Senegal (Sénégal)", dialCode: "+221", phoneFormat: "70 123 45 67" },
      rs: { code: "rs", name: "Serbia (Србија)", dialCode: "+381", phoneFormat: "060 1234567" },
      sc: { code: "sc", name: "Seychelles", dialCode: "+248", phoneFormat: "2 510 123" },
      sl: { code: "sl", name: "Sierra Leone", dialCode: "+232", phoneFormat: "(025) 123456" },
      sx: { code: "sx", name: "Sint Maarten", dialCode: "+1721", phoneFormat: "(721) 520-5678" },
      sk: { code: "sk", name: "Slovakia (Slovensko)", dialCode: "+421", phoneFormat: "0912 123 456" },
      si: { code: "si", name: "Slovenia (Slovenija)", dialCode: "+386", phoneFormat: "031 234 567" },
      sb: { code: "sb", name: "Solomon Islands", dialCode: "+677", phoneFormat: "74 21234" },
      so: { code: "so", name: "Somalia (Soomaaliya)", dialCode: "+252", phoneFormat: "7 1123456" },
      za: { code: "za", name: "South Africa", dialCode: "+27", phoneFormat: "071 123 4567" },
      kr: { code: "kr", name: "South Korea (대한민국)", dialCode: "+82", phoneFormat: "010-0000-0000" },
      ss: { code: "ss", name: "South Sudan (‫جنوب السودان‬‎)", dialCode: "+211", phoneFormat: "0977 123 456" },
      es: { code: "es", name: "Spain (España)", dialCode: "+34", phoneFormat: "612 34 56 78" },
      lk: { code: "lk", name: "Sri Lanka (ශ්‍රී ලංකාව)", dialCode: "+94", phoneFormat: "071 234 5678" },
      sd: { code: "sd", name: "Sudan (‫السودان‬‎)", dialCode: "+249", phoneFormat: "091 123 1234" },
      sr: { code: "sr", name: "Suriname", dialCode: "+597", phoneFormat: "741-2345" },
      sj: { code: "sj", name: "Svalbard and Jan Mayen", dialCode: "+47", phoneFormat: "412 34 567" },
      sz: { code: "sz", name: "Swaziland", dialCode: "+268", phoneFormat: "7612 3456" },
      se: { code: "se", name: "Sweden (Sverige)", dialCode: "+46", phoneFormat: "070-123 45 67" },
      ch: { code: "ch", name: "Switzerland (Schweiz)", dialCode: "+41", phoneFormat: "078 123 45 67" },
      sy: { code: "sy", name: "Syria (‫سوريا‬‎)", dialCode: "+963", phoneFormat: "0944 567 890" },
      tj: { code: "tj", name: "Tajikistan", dialCode: "+992", phoneFormat: "(8) 917 12 3456" },
      tz: { code: "tz", name: "Tanzania", dialCode: "+255", phoneFormat: "0621 234 567" },
      tl: { code: "tl", name: "Timor-Leste", dialCode: "+670", phoneFormat: "7721 2345" },
      tg: { code: "tg", name: "Togo", dialCode: "+228", phoneFormat: "90 11 23 45" },
      tk: { code: "tk", name: "Tokelau", dialCode: "+690", phoneFormat: "7290" },
      to: { code: "to", name: "Tonga", dialCode: "+676", phoneFormat: "771 5123" },
      tt: { code: "tt", name: "Trinidad and Tobago", dialCode: "+1868", phoneFormat: "(868) 291-1234" },
      tn: { code: "tn", name: "Tunisia (‫تونس‬‎)", dialCode: "+216", phoneFormat: "20 123 456" },
      tr: { code: "tr", name: "Turkey (Türkiye)", dialCode: "+90", phoneFormat: "0501 234 56 78" },
      tm: { code: "tm", name: "Turkmenistan", dialCode: "+993", phoneFormat: "8 66 123456" },
      tc: { code: "tc", name: "Turks and Caicos Islands", dialCode: "+1649", phoneFormat: "(649) 231-1234" },
      tv: { code: "tv", name: "Tuvalu", dialCode: "+688", phoneFormat: "901234" },
      gb: { code: "gb", name: "United Kingdom", dialCode: "+44", phoneFormat: "07400 123456" },
      ug: { code: "ug", name: "Uganda", dialCode: "+256", phoneFormat: "0712 345678" },
      ua: { code: "ua", name: "Ukraine (Україна)", dialCode: "+380", phoneFormat: "039 123 4567" },
      uy: { code: "uy", name: "Uruguay", dialCode: "+598", phoneFormat: "094 231 234" },
      uz: { code: "uz", name: "Uzbekistan (Oʻzbekiston)", dialCode: "+998", phoneFormat: "8 91 234 56 78" },
      vu: { code: "vu", name: "Vanuatu", dialCode: "+678", phoneFormat: "591 2345" },
      va: { code: "va", name: "Vatican City (Città del Vaticano)", dialCode: "+39", phoneFormat: "312 345 6789" },
      ve: { code: "ve", name: "Venezuela", dialCode: "+58", phoneFormat: "0412-1234567" },
      wf: { code: "wf", name: "Wallis and Futuna", dialCode: "+681", phoneFormat: "50 12 34" },
      eh: { code: "eh", name: "Western Sahara (‫الصحراء الغربية‬‎)", dialCode: "+212", phoneFormat: "0650-123456" },
      ye: { code: "ye", name: "Yemen (‫اليمن‬‎)", dialCode: "+967", phoneFormat: "0712 345 678" },
      zm: { code: "zm", name: "Zambia", dialCode: "+260", phoneFormat: "095 5123456" },
      zw: { code: "zw", name: "Zimbabwe", dialCode: "+263", phoneFormat: "071 123 4567" },
      ax: { code: "ax", name: "Åland Islands", dialCode: "+358", phoneFormat: "041 2345678" },
   },
   MR = { class: "dropdown" },
   LR = ["onClick"],
   kR = q({
      __name: "DropDown",
      props: { disabled: { type: Boolean, default: !1 }, typeValue: {} },
      emits: ["changeT"],
      setup(e, { expose: s, emit: n }) {
         const A = ot(),
            o = S(!1),
            i = Object.entries(UR);
         function c(d) {
            n("changeT", d.replace("+", "")), (o.value = !o.value);
         }
         const u = Q(() => {
               const d = A.getAreaPhoneLenList.map(p => p.area);
               return d.length ? i.filter(p => d.includes(p[1].dialCode)) : i;
            }),
            h = () => {
               o.value = !1;
            };
         return (
            ce(async () => {}),
            s({ close: h }),
            (d, p) => {
               var B;
               const C = x("van-icon");
               return (
                  _(),
                  m("div", MR, [
                     t("div", { class: "dropdown__value", onClick: p[0] || (p[0] = w => (d.disabled ? null : (o.value = !o.value))) }, [t("span", null, "+" + a(d.typeValue), 1), U(C, { name: "arrow-down", class: oe({ arrowActive: o.value }) }, null, 8, ["class"])]),
                     t(
                        "div",
                        { class: oe(["dropdown__list", { active: o.value }]) },
                        [
                           (B = u.value) != null && B.length
                              ? (_(!0),
                                m(
                                   Y,
                                   { key: 0 },
                                   se(u.value, (w, y) => (_(), m("div", { key: y, class: oe(["dropdown__list-item", { active: w[1].dialCode.includes(d.typeValue) }]), onClick: b => c(w[1].dialCode) }, [t("span", null, a(w[1].dialCode), 1), K(" " + a(w[1].name), 1)], 10, LR))),
                                   128,
                                ))
                              : H("", !0),
                        ],
                        2,
                     ),
                  ])
               );
            }
         );
      },
   });
const zs = $(kR, [["__scopeId", "data-v-482b13c8"]]),
   TR = { class: "empty__container" },
   QR = { alt: "" },
   VR = q({
      __name: "index",
      setup(e) {
         return (s, n) => {
            const A = _e("lazy");
            return _(), m("div", TR, [P(t("img", QR, null, 512), [[A, l(V)("images", "empty")]]), be(s.$slots, "text", {}, () => [t("p", null, a(s.$t("noData")), 1)], !0)]);
         };
      },
   });
const ke = $(VR, [["__scopeId", "data-v-9df420ea"]]),
   OR = { key: 0, class: "active-container" },
   NR = ["src"],
   FR = { class: "active-box" },
   xR = { class: "title" },
   PR = ["innerHTML"],
   HR = { key: 1 },
   YR = ["src"],
   WR = q({
      __name: "index",
      setup(e) {
         const s = ae(),
            { setLoading: n } = ht(),
            A = S({}),
            o = async () => {
               var h;
               n(!0);
               const u = await O(fy({ bannerId: Number(s.currentRoute.value.query.id) }));
               (h = u == null ? void 0 : u.data) == null || h.jumpType, (A.value = u.data), n(!1);
            },
            i = Q(() => {
               var u;
               if (!((u = A.value) != null && u.img)) return [];
               try {
                  return JSON.parse(A.value.img);
               } catch {
                  return [];
               }
            });
         function c() {
            s.go(-1);
         }
         return (
            ce(async () => {
               o();
            }),
            (u, h) => {
               const d = x("NavBar");
               return (
                  _(),
                  m(
                     Y,
                     null,
                     [
                        U(d, { title: u.$t("activityDestitle"), backgroundColor: "linear-gradient(90deg, #8deef5 0%, #259aa3 100%)", placeholder: !1, "left-arrow": "", onClickLeft: c }, null, 8, ["title"]),
                        A.value.coverUrl || A.value.title || A.value.img
                           ? (_(),
                             m("div", OR, [
                                t("img", { class: "banner", src: A.value.coverUrl }, null, 8, NR),
                                t("div", FR, [
                                   t("div", xR, a(A.value.title), 1),
                                   A.value.jumpType !== 3
                                      ? (_(), m("div", { key: 0, innerHTML: A.value.img }, null, 8, PR))
                                      : (_(),
                                        m("div", HR, [
                                           (_(!0),
                                           m(
                                              Y,
                                              null,
                                              se(i.value, (p, C) => (_(), m("div", { key: C }, [t("img", { src: p == null ? void 0 : p.Url }, null, 8, YR)]))),
                                              128,
                                           )),
                                        ])),
                                ]),
                             ]))
                           : H("", !0),
                     ],
                     64,
                  )
               );
            }
         );
      },
   });
const KR = $(WR, [["__scopeId", "data-v-383afef9"]]),
   XR = Object.freeze(Object.defineProperty({ __proto__: null, default: KR }, Symbol.toStringTag, { value: "Module" })),
   kt = Cn.messages();
function js(e) {
   const s = S();
   return (
      ce(() => {
         const n = "refresh" + Is();
         s.value && s.value.setAttribute("id", n),
            setTimeout(() => {
               es.init({
                  mainElement: "#" + n,
                  triggerElement: "body",
                  onRefresh() {
                     e();
                  },
                  instructionsReleaseToRefresh: kt.vanPullRefresh.loosing,
                  instructionsPullToRefresh: kt.vanPullRefresh.pulling,
                  instructionsRefreshing: kt.loading,
               });
            }, 200);
      }),
      Vt(() => {
         es.destroyAll();
      }),
      { elementRef: s }
   );
}
const JR = { class: "infiniteScroll__loading" },
   zR = q({
      __name: "ListSimply",
      props: { api: {}, distance: { default: 100 }, pageQuery: { default: {} }, list: {}, isAutoLoad: { type: Boolean, default: !0 }, filterData: {} },
      emits: ["update:list", "update:pageQuery", "update:totalCount", "pageChange", "listChange"],
      setup(e, { expose: s, emit: n }) {
         const A = e,
            o = Q(() => {
               let v = l(A.list);
               return A.filterData ? A.filterData(v) : v;
            }),
            { isAutoLoad: i } = A,
            c = S(!1),
            u = S({ pageNo: 1, pageSize: 10 }),
            h = S(!1),
            d = async v => {
               if (!u.value.pageNo || !u.value.pageSize) return;
               h.value = !0;
               let f = { ...u.value, ...A.pageQuery, ...v };
               const R = await O(A.api(f));
               if (R) {
                  (u.value.pageNo = R.data.pageNo), n("pageChange", R.data), (R.data.totalCount === 0 || R.data.totalPage === u.value.pageNo) && (c.value = !0);
                  let L = u.value.pageNo === 1 ? R.data.list : [...A.list.concat(R.data.list)];
                  n("update:list", L), n("listChange", R), (h.value = !1);
               } else h.value = !1;
            },
            p = S(!1);
         let C = null;
         async function B() {
            C && (C(), (C = null)),
               await d(),
               mt(() => {
                  C = Be(b, v => {
                     const { innerHeight: f } = window;
                     p.value ||
                        (v <= f + A.distance &&
                           v !== 0 &&
                           u.value.pageNo >= 1 &&
                           !h.value &&
                           !c.value &&
                           (d({ pageNo: u.value.pageNo + 1 }),
                           (p.value = !0),
                           setTimeout(() => {
                              p.value = !1;
                           }, 1e3)));
                  });
               });
         }
         ce(async () => {
            i && B();
         }),
            Ot(async () => {});
         const w = () => {
               (u.value = { pageNo: 1, pageSize: 10 }), (c.value = !1), n("update:list", []), B();
            },
            { elementRef: y } = js(w),
            { bottom: b } = vs(y);
         return (
            s({ resetRefresh: w }),
            (v, f) => {
               const R = x("van-loading");
               return _(), m("div", { class: "infiniteScroll", ref_key: "scrollRef", ref: y }, [be(v.$slots, "content", { list: o.value }, void 0, !0), be(v.$slots, "loading", {}, () => [t("div", JR, [h.value && !c.value ? (_(), de(R, { key: 0, class: "z-50" })) : H("", !0), o.value.length === 0 && c.value ? be(v.$slots, "empty", { key: 1 }, () => [U(ke)], !0) : c.value ? (_(), m("div", { key: 2, ref: "pullTextRef" }, a(v.$t("noMoreThere")), 513)) : H("", !0)])], !0)], 512);
            }
         );
      },
   });
const Zs = $(zR, [["__scopeId", "data-v-1bb72b7d"]]),
   jR = { class: "championship" },
   ZR = { class: "tabs" },
   qR = ["onClick"],
   $R = ["onClick"],
   eE = q({
      __name: "index",
      setup(e) {
         const { tabList: s, serviceNowTime: n, type: A } = At(),
            { t: o } = ie(),
            i = ae(),
            c = ve({ state: 1 }),
            u = S([]),
            h = S(),
            d = S(!1),
            p = S(""),
            C = S(!1);
         Be(C, R => {
            var L;
            C.value && ((L = h.value) == null || L.resetRefresh());
         });
         function B(R) {
            i.push({ name: "Championship-ChampionshipDetail", query: { championId: R } });
         }
         function w(R) {
            var L;
            (c.state = R), (L = h.value) == null || L.resetRefresh();
         }
         function y(R) {
            n.value = R.serviceNowTime;
         }
         const b = S(null),
            v = async R => {
               b.value && clearTimeout(b.value),
                  (b.value = setTimeout(async () => {
                     var M;
                     if (R.isJoin) return;
                     const L = await f(c6({ championId: R.id }));
                     if (L) {
                        if (L.code == 0) Ce(o("success")), (M = h.value) == null || M.resetRefresh();
                        else if ([803, 804, 805].includes(L.msgCode) && L.data != null)
                           switch (((d.value = !0), L.msgCode)) {
                              case 803:
                                 p.value = o("cpsTip25", [L.data]);
                                 break;
                              case 804:
                                 p.value = o("cpsTip26", [L.data]);
                                 break;
                              case 805:
                                 p.value = o("cpsTip27", [A[L.data]]);
                                 break;
                              default:
                                 p.value = o(`code${L.msgCode}`);
                           }
                     }
                  }, 100));
            },
            f = async R => await R.then(M => (M && M.code !== 0 ? ([803, 804, 805].includes(M.msgCode) ? M : (Ue(M), null)) : M)).catch(M => (Ue(M), null));
         return (R, L) => {
            const M = x("NavBar"),
               ee = x("van-sticky");
            return (
               _(),
               m("div", jR, [
                  U(ee, null, {
                     default: j(() => [
                        U(M, { title: R.$t("cpsTip1"), "left-arrow": "", onClickLeft: L[0] || (L[0] = () => l(i).back()) }, null, 8, ["title"]),
                        t("div", ZR, [
                           (_(!0),
                           m(
                              Y,
                              null,
                              se(l(s), N => (_(), m("div", { key: N.key, class: oe({ active: c.state == N.key }), onClick: G => w(N.key) }, a(N.title), 11, qR))),
                              128,
                           )),
                        ]),
                     ]),
                     _: 1,
                  }),
                  U(
                     Zs,
                     { list: u.value, "onUpdate:list": L[2] || (L[2] = N => (u.value = N)), api: l(i6), "page-query": c, "onUpdate:pageQuery": L[3] || (L[3] = N => (c = N)), distance: 100, ref_key: "listRef", ref: h, "is-auto-load": !0, onListChange: y },
                     {
                        content: j(() => [
                           (_(!0),
                           m(
                              Y,
                              null,
                              se(u.value, N => (_(), m("div", { key: N.id }, [U(zt, { itemD: N, state: N.state, isRefresh: C.value, "onUpdate:isRefresh": L[1] || (L[1] = G => (C.value = G)), onClick: G => B(N.id) }, null, 8, ["itemD", "state", "isRefresh", "onClick"]), [1].includes(N.state) ? (_(), m("div", { key: 0, class: oe(["btn", { active: !N.isJoin }]), onClick: G => v(N) }, a(N.isJoin ? R.$t("cpsTip8") : R.$t("cpsTip9")), 11, $R)) : H("", !0)]))),
                              128,
                           )),
                        ]),
                        _: 1,
                     },
                     8,
                     ["list", "api", "page-query"],
                  ),
                  U($e, { show: d.value, "onUpdate:show": L[4] || (L[4] = N => (d.value = N)), onConfirm: L[5] || (L[5] = () => (d.value = !1)), showCancelBtn: !1, showCloseIcon: !0, clickOutSide: !0 }, { content: j(() => [t("h1", null, a(p.value), 1)]), _: 1 }, 8, ["show"]),
               ])
            );
         };
      },
   });
const tE = $(eE, [["__scopeId", "data-v-9e342d17"]]),
   sE = Object.freeze(Object.defineProperty({ __proto__: null, default: tE }, Symbol.toStringTag, { value: "Module" })),
   jt = e => (fe("data-v-3ba0459b"), (e = e()), Re(), e),
   nE = { class: "dailySignIn__container" },
   aE = { class: "dailySignIn__container-hero" },
   AE = { class: "dailySignIn__container-hero__header" },
   oE = { class: "dailySignIn__container-hero__footer" },
   iE = jt(() => t("div", { class: "img-wrap" }, null, -1)),
   lE = jt(() => t("div", { class: "white-wrapper" }, null, -1)),
   cE = { class: "dailySignIn__container-content" },
   gE = { class: "dailySignIn__container-content__wrapper" },
   rE = { class: "dailySignIn__container-content__wrapper-block__header" },
   dE = jt(() => t("div", { class: "daySevenGift" }, null, -1)),
   pE = { class: "dayHeader" },
   _E = { key: 0 },
   uE = { key: 1 },
   mE = { class: "days-span" },
   vE = { class: "dailySignIn__container-content__footer" },
   hE = { class: "btn-wrapper" },
   wE = ["disabled"],
   bE = q({
      __name: "index",
      setup(e) {
         ie();
         const s = ae(),
            A = me().getUserInfo,
            o = S({}),
            i = S([]);
         let c = !1;
         function u() {
            s.go(-1);
         }
         function h(C) {
            s.push({ name: C === "rules" ? `${String(s.currentRoute.value.name)}-Rules` : `${String(s.currentRoute.value.name)}-Record` });
         }
         async function d() {
            (await O(Ry({}))) && localStorage.setItem("signedFlag", "1"), p();
         }
         const p = async () => {
            const C = await O(Fs({ uid: A.userId, sign: A.sign }));
            localStorage.getItem("signedFlag") === "1" && (c = !0), (i.value = C.data.signInRechargesList), (o.value = C.data.signIn);
         };
         return (
            ce(async () => {
               localStorage.setItem("signedFlag", "0"), p();
            }),
            (C, B) => {
               const w = x("NavBar"),
                  y = _e("lazy");
               return (
                  _(),
                  m("div", nE, [
                     U(w, { title: C.$t("checkIn"), backgroundColor: "linear-gradient(90deg, #8deef5 0%, #259aa3 100%)", placeholder: !1, "left-arrow": "", onClickLeft: u }, null, 8, ["title", "backgroundColor"]),
                     t("div", aE, [t("div", AE, [t("h1", null, a(C.$t("code9007")), 1), t("p", null, a(C.$t("descRewordsBasedOnConsecutiveDays")), 1), t("p", null, [K(a(C.$t("checkedInConsecutively")), 1), t("span", null, a(o.value.signCount || 0), 1), K(a(C.$t("days")), 1)]), t("h1", null, [K(a(C.$t("comulativelyObtained")) + " ", 1), t("span", null, a(l(Ae)(o.value.signInSum) || l(Ae)(0)), 1)])]), t("div", oE, [t("button", { onClick: B[0] || (B[0] = b => h("rules")) }, a(C.$t("playRules")), 1), t("button", { onClick: B[1] || (B[1] = b => h("record")) }, a(C.$t("checkInRecord")), 1)]), iE]),
                     lE,
                     t("div", cE, [
                        t("div", gE, [
                           (_(!0),
                           m(
                              Y,
                              null,
                              se(i.value.slice(0, 7), (b, v) => (_(), m("div", { key: v, class: oe(["dailySignIn__container-content__wrapper-block", { signed: v < o.value.signCount }]) }, [t("div", rE, [dE, t("span", pE, a(l(Ae)(b.bouns)), 1)]), v < 6 ? P((_(), m("img", _E, null, 512)), [[y, l(V)("activity/DailySignIn", "coin")]]) : P((_(), m("img", uE, null, 512)), [[y, l(V)("activity/DailySignIn", "coin")]]), t("span", mE, a(b.day) + " " + a(C.$t("days")), 1)], 2))),
                              128,
                           )),
                        ]),
                        t("div", vE, [
                           t("div", hE, [
                              t(
                                 "button",
                                 {
                                    onClick:
                                       B[2] ||
                                       (B[2] = b => {
                                          b.stopPropagation(), d();
                                       }),
                                    disabled: l(c),
                                    class: oe({ greyBtn: l(c) }),
                                 },
                                 a(C.$t("checkIn")),
                                 11,
                                 wE,
                              ),
                           ]),
                        ]),
                     ]),
                  ])
               );
            }
         );
      },
   });
const CE = $(bE, [["__scopeId", "data-v-3ba0459b"]]),
   BE = Object.freeze(Object.defineProperty({ __proto__: null, default: CE }, Symbol.toStringTag, { value: "Module" })),
   yE = { class: "dailySignIn__container" },
   fE = { class: "task-banner" },
   RE = { class: "banner-title" },
   EE = { class: "banner-content" },
   IE = { class: "task-panel" },
   SE = { key: 0, class: "task-item" },
   DE = { class: "task-item-header" },
   GE = { class: "hearder-status new" },
   UE = { class: "headerR" },
   ME = { class: "task-item-type" },
   LE = { class: "type-title new" },
   kE = { class: "type-tip" },
   TE = { class: "task-item-description" },
   QE = { class: "task-item-bottom" },
   VE = { class: "bottom-title" },
   OE = { class: "task-item-header" },
   NE = { class: "headerR" },
   FE = { class: "task-item-type" },
   xE = { class: "type-tip" },
   PE = { class: "task-item-description" },
   HE = { class: "task-item-bottom" },
   YE = { class: "bottom-title" },
   WE = ["onClick"],
   KE = { class: "dialog-window" },
   XE = { class: "dialog-wrapper" },
   JE = { class: "dialog-title" },
   zE = { class: "dialog-tips" },
   jE = { class: "dialog-content" },
   ZE = q({
      __name: "index",
      setup(e) {
         const { t: s } = ie(),
            n = S(!1),
            A = ae(),
            { ActiveTaskMap: o, ActiveSotre: i, getActive: c } = We();
         c();
         const u = S(""),
            h = S("0"),
            d = S([]),
            p = S([]),
            C = S([]),
            B = Q(() => {
               let D = [...p.value, ...C.value];
               if (D.length == 0) return [];
               const E = ["", 2, 1, 3];
               D = D.sort((W, le) => E[W.status] - E[le.status]);
               const X = D.filter(W => W.status == 1);
               X.sort((W, le) => f(le.schedule, le.taskTarget) - f(W.schedule, W.taskTarget));
               const J = D.findIndex(W => W.status == 1);
               return D.splice(J, X.length, ...X), D;
            }),
            w = async () => {
               const D = await O(jy());
               D && (p.value = D.data.map(E => ({ ...E, type: "week" })) || []);
            },
            y = async () => {
               const D = await O(a6());
               D && (C.value = D.data.map(E => ({ ...E, type: "day" })) || []);
            },
            b = async () => {
               w(), y();
            },
            v = () => {
               A.push({ name: "activity" });
            };
         function f(D, E) {
            return E == 0 ? 0 : (D / E) * 100;
         }
         const R = async () => {
               d.value.length = 0;
               const D = await O(t6());
               D != null && D.data && d.value.push(D == null ? void 0 : D.data);
            },
            L = D => ({ 1: s("goComplete"), 2: s("receive"), 3: s("claimed") })[D] || "",
            M = D => ({ 1: s("undone"), 2: s("complete"), 3: s("complete") })[D] || "",
            ee = D => ({ 0: s("goComplete"), 1: s("receive"), 2: s("claimed"), 3: s("claimed") })[D] || "",
            N = D => ({ 0: s("undone"), 1: s("actTip2"), 2: s("claimed"), 3: s("complete") })[D] || "",
            G = S(null),
            k = async D => {
               G.value && clearTimeout(G.value),
                  (G.value = setTimeout(async () => {
                     if (D.status == 1) return ne(D);
                     if (D.status == 3) return;
                     let E;
                     D.type == "week" ? (E = await O(Zy({ weeklyAwardId: D.configId }))) : D.type == "day" && (E = await O(A6({ dailyAwardId: D.configId }))), E.code === 0 && ((n.value = !0), (h.value = D.taskAwardAmount), (u.value = D.taskTitle), b());
                  }, 100));
            },
            T = S(null),
            F = async D => {
               T.value && clearTimeout(T.value),
                  (T.value = setTimeout(async () => {
                     if ([2, 3].includes(D.status)) return;
                     if (D.status == 0) return A.push({ name: "Recharge" });
                     (await O(s6({ id: D.id }))) && ((n.value = !0), (h.value = D.totalNumber == 0 ? "0" : (Math.floor((D.amount / D.totalNumber) * 100) / 100).toString()), (u.value = D.title), R());
                  }, 100));
            },
            ne = async D => {
               o[D.taskId].goPath && (o[D.taskId].homeType && sessionStorage.setItem("clickedGameType", o[D.taskId].homeType), A.push({ name: o[D.taskId].goPath }));
            },
            ge = () => {
               A.push({ name: "DailyTasks-Record" });
            };
         return (
            Be(
               () => i.value.isOpenActivityAward,
               D => {
                  D && b();
               },
               { immediate: !0 },
            ),
            ce(() => {
               R();
            }),
            (D, E) => {
               var le;
               const X = x("NavBar"),
                  J = x("van-dialog"),
                  W = _e("lazy");
               return (
                  _(),
                  m("div", yE, [
                     U(X, { title: "", backgroundColor: "linear-gradient(90deg, #8deef5 0%, #259aa3 100%)", placeholder: !1, "left-arrow": "", onClickLeft: v }, { right: j(() => [t("div", { class: "navi-record", onClick: ge }, [P(t("img", null, null, 512), [[W, l(V)("activity/DailyTask", "awardRecord")]]), t("span", null, a(D.$t("awardsRecord")), 1)])]), _: 1 }),
                     t("div", fE, [t("div", null, [P(t("img", null, null, 512), [[W, l(V)("activity/DailyTask", "present")]]), t("p", null, [t("div", RE, a(D.$t("actTip1")), 1), t("div", EE, [t("div", null, a(D.$t("awardsTip1")), 1), t("div", null, a(D.$t("awardsTip3")), 1)])])])]),
                     t("div", IE, [
                        d.value.length > 0 ? (_(), m("div", SE, [t("div", DE, [t("div", GE, a(D.$t("actTip3")), 1), t("span", UE, a(N((le = d.value[0]) == null ? void 0 : le.status)), 1)]), t("div", ME, [t("div", LE, [t("div", null, a(d.value[0].title), 1)]), t("div", kE, a(d.value[0].receivedNumber + "/" + d.value[0].totalNumber), 1)]), t("div", TE, a(d.value[0].description), 1), t("div", QE, [t("div", null, a(D.$t("awardsAmount")), 1), t("div", VE, [P(t("img", null, null, 512), [[W, l(V)("activity/DailyTask", "amountIcon")]]), t("span", null, a(l(Ae)(d.value[0].amount)), 1)])]), t("div", { class: oe(["btn btnNew", `status${d.value[0].status}`]), onClick: E[0] || (E[0] = te => F(d.value[0])) }, a(ee(d.value[0].status)), 3)])) : H("", !0),
                        (_(!0),
                        m(
                           Y,
                           null,
                           se(B.value, (te, z) => (_(), m("div", { class: "task-item", key: z }, [t("div", OE, [t("div", { class: oe(["hearder-status", `${te.type}`]) }, a(te.type == "week" ? D.$t("actTip4") : D.$t("dailyMission")), 3), t("span", NE, a(M(te.status)), 1)]), t("div", FE, [t("div", { class: oe(["type-title", [l(o)[te.taskId].icon]]) }, [t("div", null, a(te.taskTitle), 1)], 2), t("div", xE, a(te.schedule + "/" + te.taskTarget), 1)]), t("div", PE, a(te.taskDescribe), 1), t("div", HE, [t("div", null, a(D.$t("awardsAmount")), 1), t("div", YE, [P(t("img", null, null, 512), [[W, l(V)("activity/DailyTask", "amountIcon")]]), t("span", null, a(l(Ae)(te.taskAwardAmount)), 1)])]), t("div", { class: oe(["btn btnOther", `status${te.status}`]), onClick: Z => k(te) }, a(L(te.status)), 11, WE)]))),
                           128,
                        )),
                     ]),
                     B.value.length == 0 ? (_(), de(ke, { key: 0 })) : H("", !0),
                     U(J, { show: n.value, "onUpdate:show": E[3] || (E[3] = te => (n.value = te)), "show-confirm-button": !1, className: "noOverHidden" }, { default: j(() => [t("div", KE, [t("div", XE, [P(t("img", null, null, 512), [[W, l(V)("activity/DailyTask", "confirmationReceived")]]), t("div", JE, a(D.$t("awardsReceived")), 1), t("div", zE, a(u.value), 1), t("div", jE, [P(t("img", null, null, 512), [[W, l(V)("activity/DailyTask", "amountIcon")]]), t("span", null, a(l(Ae)(h.value)), 1)]), t("div", { class: "dialog-btn", onClick: E[1] || (E[1] = te => (n.value = !1)) }, a(D.$t("confirm")), 1), t("div", { class: "dialog-footer", onClick: E[2] || (E[2] = te => (n.value = !1)) }, [P(t("img", null, null, 512), [[W, l(V)("activity/DailyTask", "close")]])])])])]), _: 1 }, 8, ["show"]),
                  ])
               );
            }
         );
      },
   });
const qE = $(ZE, [["__scopeId", "data-v-1a106b38"]]),
   $E = Object.freeze(Object.defineProperty({ __proto__: null, default: qE }, Symbol.toStringTag, { value: "Module" })),
   e8 = { class: "rule" },
   t8 = { class: "head" },
   s8 = { key: 0 },
   n8 = ["innerHTML"],
   a8 = q({
      __name: "Rule",
      props: { tiplist: { type: Array, default: [] }, render: { type: String, default: "text" }, name: { type: String, default: [] } },
      setup(e) {
         return (s, n) => (
            _(),
            m("div", e8, [
               t("div", t8, a(e.name), 1),
               (_(!0),
               m(
                  Y,
                  null,
                  se(e.tiplist, (A, o) => (_(), m("div", { key: o }, [e.render === "text" ? (_(), m("div", s8, a(A), 1)) : (_(), m("div", { key: 1, innerHTML: A }, null, 8, n8))]))),
                  128,
               )),
               be(s.$slots, "default", {}, void 0, !0),
            ])
         );
      },
   });
const Ct = $(a8, [["__scopeId", "data-v-7f58f423"]]),
   A8 = { class: "first_list" },
   o8 = q({
      __name: "index",
      setup(e) {
         const { ActiveSotre: s, getFirstRechargeList: n } = We(),
            { t: A } = ie(),
            o = ae(),
            i = Q(() => {
               var h;
               return (h = s.value.FirstRechargeList) != null && h.length ? s.value.FirstRechargeList.reduce((d, p) => Math.max(d.rewardAmount || d, p.rewardAmount)) : "0";
            }),
            c = Q(() => [A("firstSave1", [Ae(i.value)]), A("firstSave2"), A("firstSave3"), A("firstSave4"), A("firstSave5"), A("firstSave6")]),
            u = () => {
               o.push({ name: "Recharge" });
            };
         return (
            ce(() => {
               n();
            }),
            (h, d) => {
               const p = x("NavBar");
               return _(), m(Y, null, [U(p, { title: h.$t("firstSaveTitle"), "left-arrow": "", onClickLeft: d[0] || (d[0] = C => l(o).go(-1)) }, null, 8, ["title"]), t("div", A8, [U(Df, { list: l(s).FirstRechargeList, onGorecharge: u }, null, 8, ["list"])]), U(Ct, { name: h.$t("firstSaveRule"), tiplist: c.value }, null, 8, ["name", "tiplist"])], 64);
            }
         );
      },
   });
const i8 = $(o8, [["__scopeId", "data-v-bb39b164"]]),
   l8 = Object.freeze(Object.defineProperty({ __proto__: null, default: i8 }, Symbol.toStringTag, { value: "Module" })),
   c8 = "/assets/png/box-119d5324.png",
   Ke = e => (fe("data-v-f5540eba"), (e = e()), Re(), e),
   g8 = { class: "package" },
   r8 = { class: "package-banner" },
   d8 = Ke(() => t("img", { src: c8, alt: "" }, null, -1)),
   p8 = { class: "package-banner-text" },
   _8 = Ke(() => t("span", null, "1", -1)),
   u8 = Ke(() => t("span", null, "2", -1)),
   m8 = { class: "package-time" },
   v8 = { key: 1, class: "package-rule" },
   h8 = { class: "package-rule-titlebox" },
   w8 = { class: "package-rule-title" },
   b8 = { class: "package-rule-title" },
   C8 = { class: "package-rule-title" },
   B8 = { class: "rotateNum" },
   y8 = { key: 2, class: "package-tips" },
   f8 = Ke(() => t("svg", { xmlns: "http://www.w3.org/2000/svg", width: "36", height: "36", viewBox: "0 0 36 36", fill: "none" }, [t("path", { d: "M18 33C22.1421 33 25.8921 31.3211 28.6066 28.6066C31.3211 25.8921 33 22.1421 33 18C33 13.8579 31.3211 10.1079 28.6066 7.39339C25.8921 4.67893 22.1421 3 18 3C13.8579 3 10.1079 4.67893 7.39339 7.39339C4.67893 10.1079 3 13.8579 3 18C3 22.1421 4.67893 25.8921 7.39339 28.6066C10.1079 31.3211 13.8579 33 18 33Z", stroke: "#A4EBF3", "stroke-width": "2", "stroke-linejoin": "round" }), t("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M18 27.75C19.0355 27.75 19.875 26.9105 19.875 25.875C19.875 24.8395 19.0355 24 18 24C16.9645 24 16.125 24.8395 16.125 25.875C16.125 26.9105 16.9645 27.75 18 27.75Z", fill: "#A4EBF3" }), t("path", { d: "M18 9V21", stroke: "#A4EBF3", "stroke-width": "2.5", "stroke-linecap": "round", "stroke-linejoin": "round" })], -1)),
   R8 = { class: "package-list" },
   E8 = { class: "package-item-head" },
   I8 = { class: "package-item-box" },
   S8 = { class: "package-item-top" },
   D8 = { class: "moeny" },
   G8 = Ke(() =>
      t(
         "p",
         null,
         [
            t("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" }, [
               t("path", {
                  d: "M32.298 18.6091C38.8283 18.6091 44.3643 21.4959 44.5609 25.7142L44.5643 25.9451V33.0765C44.5643 37.4194 38.9472 40.4114 32.2969 40.4114C31.4146 40.4114 30.5506 40.3588 29.714 40.2571V36.7965C30.5255 36.9165 31.3929 36.9828 32.2969 36.9828C37.3037 36.9828 41.1369 34.9416 41.1369 33.0754V31.1142C39.7346 31.9656 37.9769 32.5976 36.0032 32.9554C34.8157 33.1702 33.5689 33.2811 32.2969 33.2811C31.4203 33.2811 30.5552 33.2285 29.714 33.1256V29.6662C30.5437 29.7896 31.4123 29.8525 32.2969 29.8525C33.3655 29.8525 34.4077 29.7611 35.3917 29.5816C38.9186 28.9428 41.1369 27.3199 41.1369 25.9451C41.1369 24.0799 37.3037 22.0376 32.2969 22.0376C31.3929 22.0376 30.5255 22.1051 29.714 22.2251V18.7634C30.5711 18.6599 31.4336 18.6084 32.2969 18.6091H32.298ZM15.6123 6.28564C22.1426 6.28564 27.6786 9.1725 27.8752 13.3896L27.8786 13.6216V35.1074C27.8786 39.4502 22.2615 42.4434 15.6112 42.4434C8.96204 42.4434 3.34375 39.4502 3.34375 35.1074V20.7759V13.6205C3.34375 9.27764 8.96204 6.28564 15.6112 6.28564H15.6123ZM24.4523 33.1462C23.0489 33.9976 21.2912 34.6296 19.3175 34.9874C18.13 35.2022 16.8832 35.3131 15.6112 35.3131C14.3689 35.3151 13.1289 35.2061 11.906 34.9874C9.93232 34.6296 8.17461 33.9976 6.77232 33.1474V35.1074L6.77804 35.2354C6.94718 37.0651 10.7186 39.0148 15.6123 39.0148C20.618 39.0148 24.4512 36.9736 24.4512 35.1074V33.1462H24.4523ZM24.4523 25.9691C23.0489 26.8194 21.2912 27.4525 19.3175 27.8091C18.13 28.0251 16.8832 28.1348 15.6112 28.1348C14.3689 28.1368 13.1289 28.0278 11.906 27.8091C9.93232 27.4525 8.17461 26.8194 6.77232 25.9691V27.9771L6.77918 28.1108C6.91632 29.4559 9.10375 30.9954 12.5163 31.6136C13.5003 31.7919 14.5437 31.8845 15.6112 31.8845C16.6797 31.8845 17.722 31.7931 18.706 31.6136C22.2329 30.9736 24.4512 29.3519 24.4512 27.9771V25.9679L24.4523 25.9691ZM24.4523 18.7908C23.0489 19.6411 21.2912 20.2742 19.3175 20.6308C18.13 20.8479 16.8832 20.9576 15.6112 20.9576C14.3689 20.9597 13.1289 20.8507 11.906 20.6319C9.93232 20.2742 8.17461 19.6422 6.77232 18.7908V20.7999L6.77918 20.9336C6.91632 22.2788 9.10375 23.8171 12.5163 24.4365C13.5003 24.6148 14.5437 24.7062 15.6112 24.7062C16.6797 24.7062 17.722 24.6148 18.706 24.4365C22.2329 23.7965 24.4512 22.1736 24.4512 20.7999V20.7771V18.7908H24.4523ZM15.6112 9.71422C10.6055 9.71422 6.77232 11.7554 6.77232 13.6216C6.77232 14.9965 8.98946 16.6194 12.5175 17.2582C13.5003 17.4365 14.5437 17.5291 15.6112 17.5291C16.6797 17.5291 17.722 17.4365 18.706 17.2582C22.2329 16.6182 24.4512 14.9965 24.4512 13.6216C24.4512 11.7554 20.618 9.71422 15.6112 9.71422Z",
                  fill: "#A4EBF3",
               }),
            ]),
         ],
         -1,
      ),
   ),
   U8 = { class: "moeny" },
   M8 = Ke(() =>
      t(
         "p",
         null,
         [
            t("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" }, [
               t("path", {
                  d: "M6.64044 22.4187V24.1173H9.50881C10.5045 24.1173 11.4001 24.2346 12.1857 24.4335C12.6452 24.5496 13.001 24.6756 13.2468 24.7856L19.1232 27.1091H26.3929L26.6202 27.1227C27.1428 27.1845 27.7938 27.3722 28.4707 27.796C28.9744 28.1045 29.4046 28.5193 29.7315 29.0113C30.0584 29.5033 30.2739 30.0606 30.3632 30.6445L37.8504 27.4612C38.053 27.3377 38.3136 27.1981 38.6224 27.061C39.4439 26.6965 40.2988 26.4927 41.1894 26.557C42.4111 26.6447 43.4932 27.2512 44.2258 28.3654C45.4166 30.1776 45.1424 32.0256 44.0244 33.4672C43.6909 33.8983 43.3549 34.2083 43.0807 34.4072C42.9985 34.4675 42.9118 34.5212 42.8212 34.5678L33.2896 39.4534L23.9409 44.2302L23.5456 44.4192C22.2655 44.9889 20.8394 45.1444 19.4666 44.8639C19.2675 44.8265 19.0711 44.7761 18.8786 44.7132L8.11045 41.1457L6.64044 41.1445V43.0505H3V22.4187H6.64044ZM9.50881 28.0022L6.64044 28.001V37.262H8.42298C8.56134 37.262 8.69845 37.2768 8.83434 37.3064L9.03322 37.3608L20.1287 41.0358L20.424 41.0889C20.9527 41.1568 21.5468 41.0877 22.1287 40.7949L40.8448 31.2165C40.8756 31.1844 40.9152 31.1411 40.9559 31.0892C41.1412 30.8496 41.1536 30.7619 40.9806 30.4988L40.9423 30.437C40.9362 30.4296 40.9312 30.4321 40.909 30.4308H40.8225C40.6644 30.4432 40.4396 30.5049 40.1962 30.6124C40.1622 30.6275 40.1284 30.6432 40.0949 30.6594L39.9343 30.7409L39.6848 30.8916L39.5168 30.9731L27.396 36.1267C27.1557 36.2288 26.8973 36.2813 26.6363 36.2812H16.8552V32.3974H26.241L26.5412 32.2689V31.4289C26.5412 31.1967 26.5165 31.1547 26.4053 31.0855C26.3428 31.0481 26.2766 31.0175 26.2076 30.9941H18.7514C18.5068 30.9941 18.2646 30.9472 18.0373 30.8582L11.7707 28.379L11.6286 28.3172L11.447 28.258L11.2321 28.1987C10.6675 28.0621 10.0883 27.9957 9.50758 28.001L9.50881 28.0022ZM23.6283 3C32.3434 3 39.4056 10.0646 39.4056 18.7783C39.4056 20.609 39.0943 22.3669 38.5199 24.0036L33.5762 25.733C35.0046 23.6955 35.7691 21.2667 35.7652 18.7783C35.7652 12.0744 30.3323 6.64163 23.6308 6.64163C16.928 6.64163 11.4952 12.0744 11.4952 18.7783C11.4952 19.7357 11.6064 20.6683 11.8164 21.5627L7.99927 20.9203C7.90296 20.2104 7.85468 19.4948 7.85474 18.7783C7.85351 10.0646 14.917 3 23.6283 3ZM25.7605 9.79409L25.7592 10.9676C26.6444 11.114 27.5065 11.3756 28.3237 11.7458L27.3021 14.3214L26.9229 14.1547C25.9285 13.7371 25.0576 13.5271 24.3127 13.5271C23.8791 13.5271 23.5641 13.6037 23.3664 13.7557C23.2751 13.819 23.2003 13.9036 23.1487 14.0021C23.0971 14.1006 23.0701 14.2102 23.07 14.3214C23.07 14.5635 23.196 14.7797 23.4467 14.9712C23.6975 15.1627 24.3769 15.5122 25.485 16.0187C26.5498 16.4968 27.2885 17.0106 27.7024 17.5604C28.1162 18.1088 28.3237 18.7993 28.3237 19.6332C28.3237 20.399 28.1298 21.0785 27.7407 21.6714C27.3528 22.2668 26.7919 22.7276 26.0606 23.0574C25.962 23.1019 25.8619 23.1431 25.7605 23.1809V24.6176H22.0546L22.0508 23.4786C21.8378 23.4547 21.626 23.4213 21.4159 23.3786C20.814 23.2473 20.23 23.0441 19.6766 22.7733V19.8024L20.0608 19.9889C20.5784 20.2273 21.1108 20.42 21.6605 20.5658C22.2764 20.7386 22.9121 20.8308 23.5517 20.84C24.0483 20.84 24.4103 20.7536 24.6413 20.5831C24.7491 20.5096 24.8372 20.4106 24.8975 20.2949C24.9578 20.1791 24.9887 20.0503 24.9872 19.9198C24.9907 19.7608 24.9421 19.6051 24.8488 19.4763C24.724 19.3223 24.572 19.1925 24.4004 19.0933C24.1953 18.9636 23.6481 18.6981 22.7574 18.2991C21.9545 17.9334 21.3492 17.5776 20.9477 17.2342C20.5625 16.9141 20.2561 16.5096 20.0521 16.0521C19.8582 15.6074 19.7606 15.0811 19.7606 14.4734C19.7606 13.3369 20.1744 12.45 21.0021 11.8138C21.3218 11.5708 21.6756 11.3764 22.0521 11.2369L22.0546 9.79409H25.7605Z",
                  fill: "#A4EBF3",
               }),
            ]),
         ],
         -1,
      ),
   ),
   L8 = { class: "package-item-tip" },
   k8 = { class: "package-item-bottom" },
   T8 = ["onClick"],
   Q8 = ["onClick"],
   V8 = { key: 2, class: "package-item-btn done" },
   O8 = { key: 3, class: "package-item-btn done" },
   N8 = q({
      __name: "index",
      setup(e) {
         const { t: s } = ie(),
            n = ae(),
            { getConfig: A, onApply: o, onReceive: i, store: c, time: u, bonusLimit: h, firstDeposiSendBonust: d, rewardRecordList: p } = Xs(),
            C = () => {
               n.go(-1);
            },
            B = () => {
               n.push({ name: "MemberPackage-Rules" });
            },
            w = { 0: s("witeApply"), 1: s("c2cState0"), 2: s("rejected"), 3: s("unaccalimed"), 4: s("received") };
         return (
            ce(() => {
               A();
            }),
            (y, b) => {
               const v = x("NavBar");
               return (
                  _(),
                  m("div", g8, [
                     U(v, { title: y.$t("activityDestitle"), backgroundColor: "linear-gradient(90deg, #8deef5 0%, #259aa3 100%)", placeholder: !1, "left-arrow": "", onClickLeft: C }, null, 8, ["title"]),
                     t("div", r8, [d8, t("div", p8, [t("div", null, [t("div", { class: "package-desc", onClick: B }, a(y.$t("activityDestitle")), 1)]), t("h3", null, a(y.$t("newMenberPackage")), 1), t("h4", null, a(y.$t("newMenberTip")) + "：", 1), t("p", null, [_8, K(a(y.$t("newMenberRule")), 1)]), t("p", null, [u8, K(a(y.$t("newMenberRule2")), 1)])])]),
                     l(c).firstDepositConfig ? (_(), de(Ct, { key: 0, name: y.$t("activityTime"), tiplist: [] }, { default: j(() => [t("h2", m8, a(l(u) || y.$t("lotteryActivityUnstarted")), 1)]), _: 1 }, 8, ["name"])) : H("", !0),
                     l(c).firstDepositConfig ? (_(), m("div", v8, [t("div", h8, [t("div", w8, a(y.$t("conditionsRule")), 1), t("div", b8, a(y.$t("afterDayBonus")), 1), t("div", C8, a(y.$t("bonusLimit")), 1)]), t("ul", null, [t("li", null, [t("div", null, a(y.$t("newMemberDeposit")), 1), t("div", B8, [t("p", null, a(y.$t("todayBonus")), 1), K(), t("p", null, [t("span", null, a(l(d)) + "%", 1)])]), t("div", null, [t("span", null, a(l(Ae)(l(h))), 1)])])])])) : H("", !0),
                     l(c).firstDepositConfig ? (_(), m("div", y8, [f8, K(" " + a(y.$t("receiveTips")), 1)])) : H("", !0),
                     t("ul", R8, [
                        (_(!0),
                        m(
                           Y,
                           null,
                           se(
                              l(p),
                              f => (
                                 _(),
                                 m("li", { class: "package-item", key: f.id }, [
                                    t("div", E8, [t("p", null, a(y.$t("registrationFull", [f.registerDays])), 1)]),
                                    t("div", I8, [t("div", S8, [t("ul", null, [t("li", D8, [t("h3", null, a(l(Ae)(f.actualGrandTotalDeposit)), 1), G8, t("p", null, a(y.$t("grandTotalDeposit")), 1)]), t("li", U8, [t("h3", null, a(l(Ae)(f.actualTotalValidBet)), 1), M8, t("p", null, a(y.$t("totalValidBet")), 1)])]), t("div", L8, [t("span", null, a(y.$t("giftBonus")), 1), t("span", null, a(l(Ae)(f.giveAwayBonus)), 1)])]), t("div", k8, a(w[f.state]), 1)]),
                                    f.state === 3 ? (_(), m("div", { key: 0, class: "package-item-btn", onClick: R => l(i)(f.id) }, a(y.$t("receive")), 9, T8)) : H("", !0),
                                    f.state === 0 && f.operateState === 2 ? (_(), m("div", { key: 1, class: "package-item-btn apply", onClick: R => l(o)(f.id) }, a(y.$t("activityApply")), 9, Q8)) : H("", !0),
                                    f.state === 0 && [0, 1].includes(f.operateState) ? (_(), m("div", V8, a(w[0]), 1)) : H("", !0),
                                    [0, 3].includes(f.state) ? H("", !0) : (_(), m("div", O8, a(w[f.state]), 1)),
                                 ])
                              ),
                           ),
                           128,
                        )),
                     ]),
                  ])
               );
            }
         );
      },
   });
const F8 = $(N8, [["__scopeId", "data-v-f5540eba"]]),
   x8 = Object.freeze(Object.defineProperty({ __proto__: null, default: F8 }, Symbol.toStringTag, { value: "Module" })),
   P8 = { class: "pointMall__container-treasureActivity" },
   H8 = { class: "treasureActivity-tips" },
   Y8 = { class: "treasureActivity-desc" },
   W8 = q({
      __name: "index",
      setup(e) {
         const s = ae(),
            n = ws(() => I(() => import("./diamondRed-f363599a.js"), ["assets/js/diamondRed-f363599a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/native/index-3d731397.js", "assets/js/en-53bf8069.js", "assets/js/rus-ecb14220.js", "assets/js/vi-60d1c3eb.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-38f5b166.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-dbcb2394.js", "assets/js/ar-78aaffbf.js"]));
         function A() {
            s.push({ name: `${String(s.currentRoute.value.name)}-LotteryActivity` });
         }
         return (o, i) => (_(), m("div", P8, [t("div", null, [(_(), de(hs(l(n)))), t("span", null, a(o.$t("pointsTreasure")), 1)]), t("p", H8, a(o.$t("descComponents1")), 1), t("p", Y8, a(o.$t("descComponents2")), 1), t("button", { onClick: A }, a(o.$t("participateLottery")), 1)]));
      },
   });
const K8 = $(W8, [["__scopeId", "data-v-96929cef"]]),
   X8 = { class: "infiniteScroll__loading" },
   J8 = q({
      __name: "List",
      props: { api: {}, distance: { default: 100 }, pageQuery: { default: {} }, list: {}, isAutoLoad: { type: Boolean, default: !0 }, filterData: {}, showNoM: { type: Boolean, default: !0 } },
      emits: ["update:list", "update:pageQuery", "update:totalCount", "pageChange"],
      setup(e, { expose: s, emit: n }) {
         const A = e,
            o = Q(() => {
               let y = l(A.list);
               return A.filterData ? A.filterData(y) : y;
            }),
            { isAutoLoad: i } = A,
            c = S(!1),
            u = S({ pageNo: 1, pageSize: 10 }),
            h = S(!1),
            d = async y => {
               if (!u.value.pageNo || !u.value.pageSize) return;
               h.value = !0;
               let b = { ...u.value, ...A.pageQuery, ...y };
               const v = await O(A.api(b));
               if (v) {
                  (u.value.pageNo = v.data.pageNo), n("pageChange", v.data), (v.data.totalCount === 0 || v.data.totalPage === u.value.pageNo) && (c.value = !0);
                  let f = u.value.pageNo === 1 ? v.data.list : [...A.list.concat(v.data.list)];
                  n("update:list", f), (h.value = !1);
               } else h.value = !1;
               w.value = !1;
            },
            p = () => {
               (u.value = { pageNo: 1, pageSize: 10 }),
                  (c.value = !1),
                  n("update:list", []),
                  mt(() => {
                     d();
                  });
            },
            { elementRef: C } = js(p),
            { bottom: B } = vs(C);
         Be(B, (y, b) => {
            const { innerHeight: v } = window;
            w.value ||
               (y <= v + A.distance &&
                  b !== 0 &&
                  u.value.pageNo >= 1 &&
                  !h.value &&
                  !c.value &&
                  ((w.value = !0),
                  d({ pageNo: u.value.pageNo + 1 }),
                  setTimeout(() => {
                     w.value = !1;
                  }, 1e3)));
         });
         const w = S(!1);
         return (
            ce(async () => {
               i && d();
            }),
            s({ resetRefresh: p }),
            (y, b) => {
               const v = x("van-loading");
               return _(), m("div", { class: "infiniteScroll", ref_key: "scrollRef", ref: C }, [be(y.$slots, "content", { list: o.value }, void 0, !0), be(y.$slots, "loading", {}, () => [t("div", X8, [h.value && !c.value ? (_(), de(v, { key: 0, class: "z-50" })) : H("", !0), o.value.length === 0 && c.value ? (_(), de(ke, { key: 1, class: "empty" })) : c.value && y.showNoM ? (_(), m("div", { key: 2, ref: "pullTextRef" }, a(y.$t("noMoreThere")), 513)) : H("", !0)])], !0)], 512);
            }
         );
      },
   });
const Ne = $(J8, [["__scopeId", "data-v-004096dd"]]),
   z8 = { class: "pointMall__container-products__content-item" },
   j8 = { class: "pointMall__container-products__content-item__header" },
   Z8 = { class: "pointMall__container-products__content-item__header-left" },
   q8 = { class: "pointMall__container-products__content-item__header-redeemed" },
   $8 = { class: "pointMall__container-products__content-item__footer" },
   e5 = { class: "product-title" },
   t5 = q({
      __name: "ProductItem",
      props: { product: { type: Object, required: !0 } },
      setup(e) {
         const s = e,
            n = ae(),
            A = tt(),
            o = ws(() => I(() => import("./diamondRedSm-a85a9495.js"), ["assets/js/diamondRedSm-a85a9495.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/native/index-3d731397.js", "assets/js/en-53bf8069.js", "assets/js/rus-ecb14220.js", "assets/js/vi-60d1c3eb.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-38f5b166.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-dbcb2394.js", "assets/js/ar-78aaffbf.js"]));
         function i() {
            A.setRedeemItem(s.product), n.push({ name: `${String(n.currentRoute.value.name)}-Redeem` });
         }
         return (c, u) => {
            const h = _e("lazy");
            return _(), m("div", z8, [t("div", j8, [P(t("img", null, null, 512), [[h, e.product.productImg]]), t("div", Z8, [K(a(c.$t("productLeft")) + ": ", 1), t("span", null, a(e.product.stock > 9999 ? "9999+" : e.product.stock), 1)]), t("div", q8, [t("span", null, a(e.product.grandTotal > 9999 ? "9999+" : e.product.grandTotal), 1), K(" (" + a(c.$t("pointsExchanged")) + ") ", 1)])]), t("div", $8, [t("span", e5, a(l(Ss)(e.product.productName, 40)), 1), t("div", null, [(_(), de(hs(l(o)))), t("span", null, a(e.product.integral) + ".00", 1)]), t("button", { onClick: i }, a(c.$t("exchange")), 1)])]);
         };
      },
   });
const s5 = $(t5, [["__scopeId", "data-v-6fa08806"]]),
   n5 = { class: "treasure__container__treasure-item" },
   a5 = { class: "treasure__container__treasure-item__header" },
   A5 = { class: "treasure__container__treasure-item__footer" },
   o5 = { class: "treasure__container__treasure-item__footer-title" },
   i5 = { class: "treasure__container__treasure-item__footer-progressTitle" },
   l5 = { class: "treasure__container__treasure-item__footer-progressDetails" },
   c5 = { class: "treasure__container__treasure-item__footer-ending" },
   g5 = { class: "treasure__container__treasure-item__footer-cost" },
   r5 = q({
      __name: "Treasure",
      props: { item: {} },
      setup(e) {
         const s = e,
            { t: n } = ie(),
            A = ae();
         tt(), S(0);
         const o = Q(() => [s.item.img_Five, s.item.img_Four, s.item.img_One, s.item.img_Three, s.item.img_Two].filter(Boolean)),
            i = (d, p) => (d == 0 && p == 0 ? 100 : (d / p) * 100);
         function c(d, p) {
            if (p === 1)
               switch (d) {
                  case "2":
                     return "linear-gradient(270deg, #40C693 18.36%, #45BA8D 89.84%, #59E2AE 96.48%, #23976C 100%)";
                  case "1":
                     return "linear-gradient(270deg, #FF5353 27.64%, #FF4141 91%, #FF9495 96.88%, #EB2426 100%)";
                  case "0":
                     return "linear-gradient(270deg, #9FAAD2 18.36%, #A3B0DE 89.84%, #D5E1FF 96.48%, #7884B0 100%)";
               }
            else
               switch (d) {
                  case "1":
                     return "linear-gradient(90deg, #FF9C3A -3.24%, #FFE55C 4.63%, #FFB936 13.43%, #FFF962 76.75%)";
                  default:
                     return "linear-gradient(90deg, #FF9C3A -3.24%, #FFE55C 4.63%, #FFB936 13.43%, #FFF962 76.75%)";
               }
         }
         function u(d) {
            switch (d) {
               case "2":
                  return n("about2start");
               case "1":
                  return n("ongoing");
               case "0":
                  return n("ended");
            }
         }
         function h() {
            const d = s.item;
            A.push({ name: "PointMall-LotteryDetail", query: { pointsLotteryID: d.pointsLotteryID } });
         }
         return (d, p) => {
            const C = x("van-progress"),
               B = _e("lazy");
            return (
               _(),
               m("div", n5, [
                  t("div", a5, [t("div", { style: Ge({ background: c(d.item.status, 2) }), class: "treasure-state" }, [t("span", { style: Ge({ background: c(d.item.status, 1) }) }, a(u(d.item.status)), 5)], 4), P(t("img", null, null, 512), [[B, o.value[0]]])]),
                  t("div", A5, [t("h1", o5, a(d.item.name), 1), t("div", i5, [t("span", null, a(d.$t("progress")), 1), t("span", null, a(d.$t("totalActivity")), 1)]), U(C, { "stroke-width": "8px", color: "#A4EBF3", percentage: i(d.item.redeemedNumber, d.item.totalNumber), "show-pivot": !1 }, null, 8, ["percentage"]), t("div", l5, [t("span", null, a(i(d.item.redeemedNumber, d.item.totalNumber).toFixed(2)) + "%", 1), t("div", null, [t("span", null, a(d.item.totalNumber), 1), K(a(d.$t("sheets")), 1)])]), t("div", c5, [t("span", null, a(d.$t("requiredBeforeEnd")), 1), t("div", null, [t("span", null, a(d.item.totalNumber - d.item.redeemedNumber), 1), K(" " + a(d.$t("sheets")), 1)])]), t("div", g5, [t("span", null, a(d.$t("priceOfUnits")), 1), t("div", null, [P(t("img", null, null, 512), [[B, l(V)("activity/PointMall", "redDiamondSm")]]), K(" " + a(d.item.unit) + ".00 ", 1)])]), t("div", { class: "treasure__container__treasure-item__footer-button", onClick: h }, a(d.$t("viewDetail")), 1)]),
               ])
            );
         };
      },
   });
const qs = $(r5, [["__scopeId", "data-v-d240c0af"]]),
   d5 = { class: "pointMall__container-products" },
   p5 = ["onClick"],
   _5 = { class: "pointMall__container-products-point" },
   u5 = { class: "pointMall__container-products__content" },
   m5 = { key: 0 },
   v5 = Ye(
      '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-eecd0eb8><g clip-path="url(#clip0_5920_5716)" data-v-eecd0eb8><path d="M0.0426667 7.33867C0.0426667 9.96 3.51733 12.3787 9.16 13.6907C14.8 15.0053 21.7493 15.0053 27.3893 13.6907C33.032 12.3813 36.5067 9.96 36.5067 7.33867C36.5067 3.28533 28.344 0 18.2747 0C8.20533 0 0.0426667 3.28533 0.0426667 7.33867ZM24.9867 23.3067C27.6 21.2907 30.44 19.6667 35.408 19.4933C36.2613 18.7813 36.5387 18.072 36.6027 16.968V10.312C36.3493 14.264 28.3013 17.4587 18.3707 17.4587C8.44267 17.4587 0.0453334 14.1707 0.0453333 10.12V16.4453C0.0453333 20.5253 8.21867 23.816 18.2747 23.816C20.9227 23.824 22.7947 23.7333 24.9867 23.3093V23.3067ZM0.0426667 18.976V25.3067C0.0426667 29.3547 8.216 32.6453 18.272 32.6453H19.6027C19.7653 30.4213 20.968 28.0773 22.5227 26.1707C20.9653 26.3387 19.84 26.4427 18.2747 26.4427C8.21333 26.44 0.0426667 23.152 0.0426667 18.976ZM18.2533 35.4667C8.152 35.4667 0 32.3093 0 28.1387V34.456C0 38.5013 8.184 41.784 18.2533 41.784H20.768C19.7227 39.944 19.4053 37.904 19.4053 35.464H18.2533V35.4667ZM44.3147 26.5227C43.147 25.3543 41.7606 24.4275 40.2347 23.7952C38.7087 23.1628 37.0731 22.8374 35.4213 22.8374C33.7696 22.8374 32.134 23.1628 30.608 23.7952C29.082 24.4275 27.6956 25.3543 26.528 26.5227C24.7701 28.2825 23.5731 30.5239 23.0884 32.9637C22.6036 35.4034 22.8528 37.9321 23.8045 40.2304C24.7561 42.5286 26.3675 44.4932 28.4352 45.8761C30.5028 47.259 32.9339 47.9981 35.4213 48C37.9082 47.9968 40.3384 47.257 42.4052 45.8739C44.472 44.4908 46.0828 42.5264 47.0342 40.2287C47.9857 37.931 48.2351 35.403 47.7511 32.9636C47.2671 30.5243 46.0713 28.283 44.3147 26.5227ZM38.2773 38.5653C37.0027 39.8453 35.992 41.176 35.3387 42.368C34.6853 41.176 33.672 39.8427 32.3973 38.5653C31.272 37.4148 29.9933 36.425 28.5973 35.624C29.7893 34.9707 31.1227 33.9573 32.3973 32.6827C33.6747 31.4053 34.6853 30.0747 35.3387 28.88C35.992 30.0747 37.0027 31.408 38.2773 32.6827C39.5573 33.9573 40.888 34.9707 42.08 35.624C40.888 36.2773 39.5547 37.2907 38.2773 38.5653Z" fill="white" data-v-eecd0eb8></path></g><defs data-v-eecd0eb8><clipPath id="clip0_5920_5716" data-v-eecd0eb8><rect width="48" height="48" fill="white" data-v-eecd0eb8></rect></clipPath></defs></svg>',
      1,
   ),
   h5 = { key: 1 },
   w5 = ["src"],
   b5 = q({
      __name: "index",
      setup(e) {
         const s = S(),
            n = ae(),
            { listRef: A, list: o } = at(),
            i = S(1),
            { t: c } = ie(),
            u = S([]),
            h = S([]),
            d = S({ typeId: i.value, pageNo: 1, pageSize: 10 }),
            p = S();
         function C() {
            n.push({ name: `${String(n.currentRoute.value.name)}-LotteryActivity` });
         }
         function B() {
            const b = i.value === "1000" ? "MyLottery" : "MyOrders";
            n.push({ name: `${String(n.currentRoute.value.name)}-${b}` });
         }
         function w(b) {
            (i.value = b), b != 1e3 && ((d.value.pageNo = 1), (d.value.typeId = parseInt(b)), (h.value = []), s.value.resetRefresh());
         }
         async function y() {
            var v;
            const b = await O(Sy());
            if (b) {
               const f = (v = b.data) == null ? void 0 : v.productTypeList;
               (u.value = f.map(R => (R.typeID == "1000" ? Object.assign(R, { typeName: c("MyTreasure") }) : R))), u.value.length > 0 && (i.value = u.value[0].typeID);
            }
         }
         return (
            ce(async () => {
               await y();
            }),
            (b, v) => (
               _(),
               m(
                  Y,
                  null,
                  [
                     t("div", d5, [
                        t(
                           "div",
                           { class: "pointMall__container-products__tabs", ref_key: "productTabsRef", ref: p },
                           [
                              (_(!0),
                              m(
                                 Y,
                                 null,
                                 se(u.value, f => (_(), m("div", { key: f.typeID, class: oe({ active: i.value === f.typeID }), onClick: R => w(f.typeID) }, a(f.typeName), 11, p5))),
                                 128,
                              )),
                           ],
                           512,
                        ),
                        i.value === "1000"
                           ? (_(),
                             de(
                                Ne,
                                { key: 0, distance: 300, api: l(Ps), list: l(o), "onUpdate:list": v[0] || (v[0] = f => (Ie(o) ? (o.value = f) : null)), "page-query": { pageNo: 1, status: 1, pageSize: 5 }, isAutoLoad: !0, showNoM: !1, ref_key: "listRef", ref: A },
                                {
                                   content: j(() => [
                                      t("div", _5, [
                                         (_(!0),
                                         m(
                                            Y,
                                            null,
                                            se(l(o), f => (_(), de(qs, { item: f, key: f.pointsLotteryID }, null, 8, ["item"]))),
                                            128,
                                         )),
                                      ]),
                                      P(t("div", { class: "pointMall__container-products-all", onClick: C }, a(b.$t("allActivity")), 513), [[bs, l(o).length]]),
                                   ]),
                                   _: 1,
                                },
                                8,
                                ["api", "list"],
                             ))
                           : (_(),
                             de(
                                Ne,
                                { key: 1, distance: 300, api: l(Iy), list: h.value, "onUpdate:list": v[1] || (v[1] = f => (h.value = f)), "page-query": d.value, "onUpdate:pageQuery": v[2] || (v[2] = f => (d.value = f)), isAutoLoad: !0, ref_key: "productRef", ref: s },
                                {
                                   content: j(() => [
                                      t("div", u5, [
                                         (_(!0),
                                         m(
                                            Y,
                                            null,
                                            se(h.value, (f, R) => (_(), de(s5, { key: R, product: f }, null, 8, ["product"]))),
                                            128,
                                         )),
                                      ]),
                                   ]),
                                   _: 1,
                                },
                                8,
                                ["api", "list", "page-query"],
                             )),
                     ]),
                     t("div", { class: "pointMall__container-cart", onClick: B }, [i.value === "1000" ? (_(), m("div", m5, [v5, t("span", null, a(b.$t("MyTreasure")), 1)])) : (_(), m("div", h5, [t("img", { src: l(V)("activity/PointMall", "cart") }, null, 8, w5), t("span", null, a(b.$t("myOrder")), 1)]))]),
                  ],
                  64,
               )
            )
         );
      },
   });
const C5 = $(b5, [["__scopeId", "data-v-eecd0eb8"]]),
   $s = e => (fe("data-v-b9264082"), (e = e()), Re(), e),
   B5 = { class: "pointMall__container-info" },
   y5 = $s(() => t("div", { class: "rule-icon" }, null, -1)),
   f5 = $s(() => t("div", { class: "record-icon" }, null, -1)),
   R5 = q({
      __name: "index",
      setup(e) {
         const s = ae();
         function n(A) {
            s.push({ name: `${String(s.currentRoute.value.name)}-${A}` });
         }
         return (A, o) => (_(), m("div", B5, [t("div", { class: "pointMall__container-info__left", onClick: o[0] || (o[0] = i => n("Rules")) }, [y5, t("span", null, a(A.$t("pointsRule")), 1)]), t("div", { class: "pointMall__container-info__right", onClick: o[1] || (o[1] = i => n("Record")) }, [f5, t("span", null, a(A.$t("pointsRecord")), 1)])]));
      },
   });
const E5 = $(R5, [["__scopeId", "data-v-b9264082"]]),
   I5 = { class: "pointMall__container" },
   S5 = { class: "pointMall__container-header" },
   D5 = { class: "pointMall__container-header__content" },
   G5 = q({
      __name: "index",
      setup(e) {
         const s = me(),
            n = ae();
         function A() {
            n.go(-1);
         }
         return (o, i) => {
            const c = x("NavBar"),
               u = _e("lazy");
            return _(), m("div", I5, [U(c, { title: o.$t("pointsMall"), backgroundColor: "linear-gradient(125deg, #A4EBF3 0%, #CCF2F4 100%)", placeholder: !1, "left-arrow": "", onClickLeft: A }, null, 8, ["title", "backgroundColor"]), t("div", S5, [P(t("img", null, null, 512), [[u, l(V)("activity/PointMall", "headerBg")]]), t("div", D5, [P(t("img", null, null, 512), [[u, l(V)("activity/PointMall", "diamond")]]), t("span", null, a(o.$t("avaliablePoints")), 1), t("h1", null, a(l(s).getUserInfo.integral), 1)])]), U(K8), U(E5), U(C5)]);
         };
      },
   });
const U5 = $(G5, [["__scopeId", "data-v-d2d90ef6"]]),
   M5 = Object.freeze(Object.defineProperty({ __proto__: null, default: U5 }, Symbol.toStringTag, { value: "Module" })),
   L5 = "/assets/png/bg-495f293b.png",
   k5 = "/assets/png/zp-624cd5c8.png",
   T5 = "/assets/png/btn-779fac98.png",
   en = e => (fe("data-v-824a8ad5"), (e = e()), Re(), e),
   Q5 = { class: "turntable-page" },
   V5 = en(() => t("div", { class: "turntable-page-header" }, [t("img", { src: L5, alt: "" })], -1)),
   O5 = { class: "turntable-wrap" },
   N5 = { class: "turntable-rule" },
   F5 = Ye(
      '<svg width="702" height="59" viewBox="0 0 702 59" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-824a8ad5><path d="M44 3.65333V0H658V3.65333C651 3.65333 626.65 3.65333 619 7.76333C610.5 12.33 606 15.5267 595 36.0767C585.492 53.8395 569.5 58.6056 564 58.91H139C122 58.91 109.5 42.47 106.5 36.99C103.5 31.51 100.005 23.2948 89.5 12.7867C79 2.28333 54 3.65333 44 3.65333Z" fill="url(#paint0_linear_8417_735)" data-v-824a8ad5></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C7.16344 0 0 7.16346 0 16V46.58L4 44.9099V17.6534C4 9.92137 10.268 3.65335 18 3.65335H49.1714L51 0H16Z" fill="#DAAE82" data-v-824a8ad5></path><path fill-rule="evenodd" clip-rule="evenodd" d="M686 0C694.837 0 702 7.16346 702 16V46.58L698 44.9099V17.6534C698 9.92137 691.732 3.65335 684 3.65335H652.829L651 0H686Z" fill="#DAAE82" data-v-824a8ad5></path><circle cx="22" cy="26.9199" r="5" fill="#DAAE82" data-v-824a8ad5></circle><circle cx="5" cy="5" r="5" transform="matrix(-1 0 0 1 675 21.9199)" fill="#DAAE82" data-v-824a8ad5></circle><defs data-v-824a8ad5><linearGradient id="paint0_linear_8417_735" x1="337" y1="59.3667" x2="337" y2="-2.21296e-06" gradientUnits="userSpaceOnUse" data-v-824a8ad5><stop stop-color="#DAAE82" data-v-824a8ad5></stop><stop offset="1" stop-color="#B2845B" data-v-824a8ad5></stop></linearGradient></defs></svg>',
      1,
   ),
   x5 = { class: "turntable-item" },
   P5 = { class: "label" },
   H5 = { class: "wallet" },
   Y5 = Ye('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" data-v-824a8ad5><g clip-path="url(#clip0_8417_601)" data-v-824a8ad5><path d="M24.6778 22.687C22.0234 25.998 18.123 28 13.8922 28C7.2044 28 1.4602 23.0048 0 16.0776L2.779 15.4C3.9466 20.937 8.5428 24.934 13.8922 24.934C17.3726 24.934 20.5716 23.24 22.6982 20.4596L19.6 16.975H28V26.425L24.6778 22.687ZM3.3222 5.313C5.9766 2.002 9.877 0 14.1078 0C20.7956 0 26.5398 4.9952 28 11.9224L25.221 12.6C24.0534 7.063 19.4572 3.066 14.1078 3.066C10.6274 3.066 7.4284 4.76 5.3018 7.5404L8.4 11.025H0V1.575L3.3222 5.313Z" fill="white" data-v-824a8ad5></path></g><defs data-v-824a8ad5><clipPath id="clip0_8417_601" data-v-824a8ad5><rect width="28" height="28" fill="white" data-v-824a8ad5></rect></clipPath></defs></svg>', 1),
   W5 = [Y5],
   K5 = { class: "turntable-item" },
   X5 = { class: "label" },
   J5 = { class: "count" },
   z5 = { class: "count-progress" },
   j5 = { class: "turntable-main" },
   Z5 = { class: "turntable-entry" },
   q5 = Ye(
      '<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-824a8ad5><path opacity="0.3" d="M77.8132 7.28571L82.0769 11.5714L86.3407 7.28571L82.0769 3L77.8132 7.28571ZM0 42.6429L3.1978 45.8571L6.3956 42.6429L3.1978 39.4286L0 42.6429ZM88.6044 59.7857L91.8022 63L95 59.7857L91.8022 56.5714L88.6044 59.7857Z" fill="#A4EBF3" data-v-824a8ad5></path><path fill-rule="evenodd" clip-rule="evenodd" d="M61.5714 5H23V82H83V26.3889L61.5714 5Z" fill="#A4EBF3" data-v-824a8ad5></path><path d="M83 26.5H62L61.5 5L83 26.5Z" fill="#A4EBF3" data-v-824a8ad5></path><path d="M33 22H51V27H33V22Z" fill="white" data-v-824a8ad5></path><path d="M72 35H67V39H72V35Z" fill="white" data-v-824a8ad5></path><path d="M33 35H63V39H33V35Z" fill="white" data-v-824a8ad5></path><path d="M33 45H63V49H33V45Z" fill="white" data-v-824a8ad5></path><path d="M33 55H63V59H33V55Z" fill="white" data-v-824a8ad5></path><path d="M33 64H63V68H33V64Z" fill="white" data-v-824a8ad5></path><path d="M67 45H72V49H67V45Z" fill="white" data-v-824a8ad5></path><path d="M72 55H67V59H72V55Z" fill="white" data-v-824a8ad5></path><path d="M67 64H72V68H67V64Z" fill="white" data-v-824a8ad5></path><path opacity="0.3" d="M14 91V14H22.5714V82.4444H74V91H14Z" fill="#A4EBF3" data-v-824a8ad5></path></svg>',
      1,
   ),
   $5 = Ye('<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-824a8ad5><path fill-rule="evenodd" clip-rule="evenodd" d="M8 8H88V88H76.5714L68 73L59.4286 88H36.5714L28 73L19.4286 88H8V8Z" fill="#A4EBF3" data-v-824a8ad5></path><path d="M23 21H29V26H23V21Z" fill="white" data-v-824a8ad5></path><path d="M73 21H35V26H73V21Z" fill="white" data-v-824a8ad5></path><path d="M73 37H35V42H73V37Z" fill="white" data-v-824a8ad5></path><path d="M63 53H35V58H63V53Z" fill="white" data-v-824a8ad5></path><path d="M29 37H23V42H29V37Z" fill="white" data-v-824a8ad5></path><path d="M23 53H29V58H23V53Z" fill="white" data-v-824a8ad5></path></svg>', 1),
   eI = en(() =>
      t(
         "svg",
         { width: "96", height: "96", viewBox: "0 0 96 96", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
         [
            t("circle", { cx: "72", cy: "75", r: "14", fill: "white" }),
            t("path", {
               d: "M72 56.2C76.48 56.2 80.64 57.8 83.84 60.36V27.08C83.84 25.48 82.88 22.92 81.6 21.64L67.52 7.24C66.24 5.96 64 5 62.08 5H14.4C10.88 5 8 7.88 8 11.4V81.16C8 84.68 10.88 87.56 14.4 87.56H57.6C54.72 84.36 52.8 79.88 52.8 75.08C52.8 64.84 61.44 56.2 72 56.2ZM60.48 13C60.48 11.08 61.44 10.76 62.72 12.04L77.12 26.44C78.4 27.72 78.08 28.68 76.16 28.68H66.88C63.36 28.68 60.48 25.8 60.48 22.28V13ZM20.16 20.68H48.64C49.92 20.68 50.88 21.64 50.88 22.92C50.88 24.2 49.92 25.16 48.64 25.16H20.16C18.88 25.16 17.92 24.2 17.92 22.92C17.92 21.64 18.88 20.68 20.16 20.68ZM20.16 33.48H72.32C73.6 33.48 74.56 34.44 74.56 35.72C74.56 37 73.6 37.96 72.32 37.96H20.16C18.88 37.96 17.92 37 17.92 35.72C17.92 34.44 18.88 33.48 20.16 33.48ZM17.92 48.52C17.92 47.24 18.88 46.28 20.16 46.28H58.24C59.52 46.28 60.48 47.24 60.48 48.52C60.48 49.8 59.52 50.76 58.24 50.76H20.16C18.88 50.76 17.92 49.8 17.92 48.52ZM72 59.4C63.04 59.4 56 66.44 56 75.4C56 84.36 63.04 91.4 72 91.4C80.96 91.4 88 84.36 88 75.4C88 66.44 80.96 59.4 72 59.4ZM72 87.88C64.96 87.88 59.2 82.12 59.2 75.08C59.2 68.04 64.96 62.28 72 62.28C79.04 62.28 84.8 68.04 84.8 75.08C84.8 82.44 79.04 87.88 72 87.88ZM80.64 71.56L76.16 70.92L73.92 66.76C73.28 65.48 71.36 65.48 70.72 66.76L68.48 70.92L64 71.56C63.36 71.56 62.72 72.2 62.4 72.84C62.08 73.48 62.4 74.12 63.04 74.44L66.56 77.64L65.6 82.44C65.6 83.08 65.92 83.72 66.24 84.04C66.56 84.36 67.52 84.68 68.16 84.36L72.32 82.12L76.48 84.36C76.8 84.68 77.12 84.68 77.12 84.68C77.76 84.68 77.76 84.36 78.08 84.36C78.72 83.72 78.72 83.4 78.72 82.76L78.4 78.28L81.92 75.08C82.24 74.44 82.24 73.48 82.24 72.84C81.6 72.2 81.28 71.88 80.64 71.56Z",
               fill: "#A4EBF3",
            }),
            t("path", { d: "M60.4799 13C60.4799 11.08 61.4399 10.76 62.7199 12.04L77.1199 26.44C78.3999 27.72 78.0799 28.68 76.1599 28.68H66.8799C63.3599 28.68 60.4799 25.8 60.4799 22.28V13ZM20.1599 20.68H48.6399C49.9199 20.68 50.8799 21.64 50.8799 22.92C50.8799 24.2 49.9199 25.16 48.6399 25.16H20.1599C18.8799 25.16 17.9199 24.2 17.9199 22.92C17.9199 21.64 18.8799 20.68 20.1599 20.68ZM20.1599 33.48H72.3199C73.5999 33.48 74.5599 34.44 74.5599 35.72C74.5599 37 73.5999 37.96 72.3199 37.96H20.1599C18.8799 37.96 17.9199 37 17.9199 35.72C17.9199 34.44 18.8799 33.48 20.1599 33.48ZM17.9199 48.52C17.9199 47.24 18.8799 46.28 20.1599 46.28H58.2399C59.5199 46.28 60.4799 47.24 60.4799 48.52C60.4799 49.8 59.5199 50.76 58.2399 50.76H20.1599C18.8799 50.76 17.9199 49.8 17.9199 48.52Z", fill: "white" }),
         ],
         -1,
      ),
   ),
   tI = { class: "turntable-title" },
   sI = Ye('<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-824a8ad5><path d="M41 10H13V44H41V10Z" fill="#A4EBF3" stroke="#A4EBF3" stroke-width="2" stroke-linejoin="round" data-v-824a8ad5></path><path d="M35 10V4H8C7.44772 4 7 4.44772 7 5V38H13" stroke="#A4EBF3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-824a8ad5></path><path d="M21 22H33" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-824a8ad5></path><path d="M21 30H33" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-824a8ad5></path></svg>', 1),
   nI = { class: "turntable-table" },
   aI = { class: "turntable-table-titlebox" },
   AI = { class: "turntable-table-title" },
   oI = { class: "turntable-table-title" },
   iI = { class: "turntable-table-title" },
   lI = { key: 0, class: "rotateNum" },
   cI = { key: 1, class: "rotateNum" },
   gI = { style: { "text-align": "center" } },
   rI = q({
      __name: "index",
      setup(e) {
         const s = ae(),
            { t: n } = ie(),
            { getTurntabl: A, store: o, pull: i, prizes: c, recordQuery: u, getTurntablAmount: h, onEnd: d, onStart: p, myLucky: C, onClick: B } = Jt(),
            w = [{ padding: "0px", imgs: [{ src: k5, width: "100%", height: "100%", rotate: !0 }] }],
            y = [{ radius: "30%", pointer: !0, imgs: [{ src: T5, top: -(204 / 4), width: 158 / 2, height: 204 / 2 }] }],
            b = { 1: n("amountReward"), 2: n("physicalReward") },
            v = async f => {
               s.push({ name: f });
            };
         return (
            ce(() => {
               A();
            }),
            (f, R) => {
               const L = x("NavBar");
               return (
                  _(),
                  m("div", Q5, [
                     U(L, { title: f.$t("activityTurntable"), backgroundColor: "linear-gradient(90deg, #8deef5 0%, #259aa3 100%)", placeholder: !1, "left-arrow": "", onClickLeft: l(B) }, null, 8, ["title", "onClickLeft"]),
                     V5,
                     t("div", O5, [
                        t("div", N5, [t("h3", null, a(f.$t("code9101")), 1), F5]),
                        t("div", x5, [t("span", P5, a(f.$t("depositMoney")), 1), t("div", H5, [t("span", null, a(l(Ae)(l(o).amount)), 1), t("span", { class: "re", onClick: R[0] || (R[0] = (...M) => l(h) && l(h)(...M)) }, W5)])]),
                        t("div", K5, [t("span", X5, a(f.$t("turntableCount")), 1), t("div", J5, [t("span", z5, a(l(o).rotateCount), 1), K("/" + a(l(o).count), 1)])]),
                        t("div", j5, [U(l(Bn), { ref_key: "myLucky", ref: C, onStart: l(p), onEnd: l(d), prizes: l(c), width: 350, height: 350, buttons: y, blocks: w, defaultConfig: { offsetDegree: -20, accelerationTime: 1e3 }, defaultStyle: { lineHeight: 15 } }, null, 8, ["onStart", "onEnd", "prizes"])]),
                        t("ul", Z5, [t("li", { class: "turntable-entry-item", onClick: R[1] || (R[1] = M => v("Turntable-Introduce")) }, [q5, t("p", null, a(f.$t("activityIntroduce")), 1)]), t("li", { class: "turntable-entry-item", onClick: R[2] || (R[2] = M => v("Turntable-Detail")) }, [$5, t("p", null, a(f.$t("eventDetails")), 1)]), t("li", { class: "turntable-entry-item", onClick: R[3] || (R[3] = M => v("Turntable-Rules")) }, [eI, t("p", null, a(f.$t("firstSaveRule")), 1)])]),
                        t("div", tI, [sI, t("span", null, a(f.$t("record")), 1)]),
                        t("div", nI, [
                           t("div", aI, [t("div", AI, a(f.$t("turntableTime")), 1), t("div", oI, a(f.$t("winType")), 1), t("div", iI, a(f.$t("turntableWin")), 1)]),
                           U(
                              Ne,
                              { distance: 300, api: l(u6), list: l(o).turntableRecord, "onUpdate:list": R[4] || (R[4] = M => (l(o).turntableRecord = M)), "page-query": l(u), "onUpdate:pageQuery": R[5] || (R[5] = M => (Ie(u) ? (u.value = M) : null)), isAutoLoad: !0, ref_key: "pull", ref: i },
                              {
                                 content: j(() => [
                                    t("ul", null, [
                                       (_(!0),
                                       m(
                                          Y,
                                          null,
                                          se(l(o).turntableRecord, (M, ee) => (_(), m("li", { key: ee }, [t("div", null, [t("p", null, a(M.drawTime), 1)]), t("div", null, a(b[M.rewardType]), 1), M.rewardType === 1 ? (_(), m("div", lI, a(l(Ae)(M.rewardAmount)), 1)) : (_(), m("div", cI, a(M.rewardSetting), 1))]))),
                                          128,
                                       )),
                                    ]),
                                 ]),
                                 _: 1,
                              },
                              8,
                              ["api", "list", "page-query"],
                           ),
                        ]),
                     ]),
                     U(
                        $e,
                        { show: l(o).dialog, "onUpdate:show": R[6] || (R[6] = M => (l(o).dialog = M)), "img-url": "successfullyReceived", onConfirm: R[7] || (R[7] = M => (l(o).dialog = !1)), "show-cancel-btn": !1, confirmText: f.$t("sure"), title: f.$t("succTip1") },
                        {
                           title: j(() => {
                              var M, ee, N;
                              return [t("div", gI, a(f.$t("turntableWinTip")) + " " + a(((M = l(o).result) == null ? void 0 : M.rewardType) === 1 ? l(Ae)((ee = l(o).result) == null ? void 0 : ee.rewardSetting) : (N = l(o).result) == null ? void 0 : N.rewardSetting), 1)];
                           }),
                           _: 1,
                        },
                        8,
                        ["show", "confirmText", "title"],
                     ),
                  ])
               );
            }
         );
      },
   });
const dI = $(rI, [["__scopeId", "data-v-824a8ad5"]]),
   pI = Object.freeze(Object.defineProperty({ __proto__: null, default: dI }, Symbol.toStringTag, { value: "Module" })),
   _I = { class: "title" },
   uI = { class: "con" },
   mI = ["innerHTML"],
   vI = ["innerHTML"],
   hI = { class: "condition" },
   wI = { key: 0 },
   bI = { key: 1 },
   CI = { key: 2 },
   BI = { class: "ranking" },
   yI = { class: "top" },
   fI = q({
      __name: "rule",
      props: { data: {} },
      setup(e) {
         const { t: s } = ie(),
            n = S(["0"]),
            { type: A } = At();
         function o(i, c) {
            return i == c ? s("cpsTip20", [i]) : s("cpsTip21", [i, c]);
         }
         return (i, c) => {
            const u = x("van-collapse-item"),
               h = x("van-collapse");
            return (
               _(),
               de(
                  h,
                  { modelValue: n.value, "onUpdate:modelValue": c[0] || (c[0] = d => (n.value = d)), class: "rule" },
                  {
                     default: j(() => [
                        U(
                           u,
                           { name: "1" },
                           {
                              title: j(() => [t("div", _I, a(i.$t("cpsTip5")), 1)]),
                              default: j(() => [
                                 t("div", uI, [
                                    t("h1", null, [t("span", null, a(i.$t("cpsTip11")), 1)]),
                                    t("div", { innerHTML: i.$t("cpsTip12", [i.data.vendorCode, i.data.startTime, i.data.endTime]) }, null, 8, mI),
                                    t("h1", null, [t("span", null, a(i.$t("awardAmount")), 1)]),
                                    t("div", null, [K(a(i.$t("cpsTip13")), 1), t("span", null, a(l(Ae)(i.data.sumBonus || 0)), 1)]),
                                    t("h1", null, [t("span", null, a(i.$t("cpsTip14")), 1)]),
                                    t("div", null, [t("div", { innerHTML: i.$t("cpsTip15", [i.data.vendorCode]) }, null, 8, vI), t("div", hI, [i.data.conditionsBetAmount > 0 ? (_(), m("p", wI, [K(a(i.$t("betAmounts")) + " ", 1), t("span", null, a(l(Ae)(i.data.conditionsBetAmount || 0)), 1)])) : H("", !0), i.data.conditionsRechargeAmount > 0 ? (_(), m("p", bI, [K(a(i.$t("rechageAmount")) + " ", 1), t("span", null, a(l(Ae)(i.data.conditionsRechargeAmount || 0)), 1)])) : H("", !0), i.data.conditionsBindType ? (_(), m("p", CI, [K(a(i.$t("toBind")) + " ", 1), t("span", null, a(l(A)[i.data.conditionsBindType]), 1)])) : H("", !0), i.data.conditionsBetAmount == 0 && i.data.conditionsRechargeAmount == 0 && !i.data.conditionsBindType ? (_(), m(Y, { key: 3 }, [K(a(i.$t("cpsTip10")), 1)], 64)) : H("", !0)])]),
                                    t("h1", null, [t("span", null, a(i.$t("binguoPaimin")), 1)]),
                                    t("div", BI, [
                                       t("div", yI, [t("span", null, a(i.$t("binguoPaimin")), 1), t("span", null, a(i.$t("k3WarningTip4")), 1)]),
                                       (_(!0),
                                       m(
                                          Y,
                                          null,
                                          se(i.data.rankingAwardsList, (d, p) => (_(), m("div", { class: "info", key: p }, [t("span", null, a(o(d.startRanking, d.endRanking)), 1), t("span", null, a(l(Ae)(d.awardsAmount || 0)), 1)]))),
                                          128,
                                       )),
                                       i.data.rankingAwardsList.length == 0 ? (_(), de(ke, { key: 0 })) : H("", !0),
                                    ]),
                                    t("h1", null, [t("span", null, a(i.$t("cpsTip16")), 1)]),
                                    t("div", null, [t("p", null, a(i.$t("cpsTip17")), 1), t("p", null, a(i.$t("cpsTip18")), 1)]),
                                    t("h1", null, [t("span", null, a(i.$t("cpsTip19")), 1)]),
                                    t("p", null, [t("span", null, a(i.data.vendorCode), 1)]),
                                 ]),
                              ]),
                              _: 1,
                           },
                        ),
                     ]),
                     _: 1,
                  },
                  8,
                  ["modelValue"],
               )
            );
         };
      },
   });
const RI = $(fI, [["__scopeId", "data-v-9316fb3f"]]),
   EI = { class: "game" },
   II = { class: "items" },
   SI = ["onClick"],
   DI = q({
      __name: "game",
      props: { data: {} },
      setup(e) {
         const { onItemClick: s } = X6();
         return (n, A) => {
            const o = _e("lazy");
            return (
               _(),
               m("div", EI, [
                  t("h1", null, a(n.$t("cpsTip22")), 1),
                  t("div", II, [
                     (_(!0),
                     m(
                        Y,
                        null,
                        se(n.data, i => (_(), m("div", { class: "item", key: i.gameID, onClick: c => l(s)(i) }, [P(t("img", null, null, 512), [[o, i.img]])], 8, SI))),
                        128,
                     )),
                     n.data.length == 0 ? (_(), de(ke, { key: 0 })) : H("", !0),
                  ]),
               ])
            );
         };
      },
   });
const GI = $(DI, [["__scopeId", "data-v-b1361c5a"]]),
   Bt = e => (fe("data-v-6bdef52c"), (e = e()), Re(), e),
   UI = { class: "ChampionshipDetail" },
   MI = { class: "ranking" },
   LI = { class: "title" },
   kI = { class: "amount" },
   TI = Bt(() => t("span", null, "--", -1)),
   QI = Bt(() => t("span", null, "--", -1)),
   VI = Bt(() => t("span", null, "--", -1)),
   OI = { class: "rankingList" },
   NI = { class: "title" },
   FI = Bt(() => t("span", null, "TOP", -1)),
   xI = { key: 0, class: "txt" },
   PI = { class: "refresh" },
   HI = q({
      __name: "index",
      setup(e) {
         const { tabList: s, getChampionTaskDetailV: n, championTaskDetailVO: A, getTop10UserList: o, top10UserListVO: i, thirdGameListVO: c } = At(),
            u = ae(),
            h = Q(() => {
               var y;
               return A.value ? ((y = s.find(b => b.key == A.value.state)) == null ? void 0 : y.title) : "";
            }),
            d = S(),
            p = S(!1),
            C = S(null);
         function B() {
            n(d.value);
         }
         Be(p, y => {
            p.value && B();
         });
         const w = () => {
            o(d.value);
         };
         return (
            ce(() => {
               (d.value = Number(u.currentRoute.value.query.championId) || 0), d.value != 0 && (B(), w(), (C.value = setInterval(w, 10 * 60 * 1e3)));
            }),
            Ot(() => {
               clearInterval(C.value);
            }),
            (y, b) => {
               const v = x("NavBar");
               return (
                  _(),
                  m("div", UI, [
                     U(v, { title: h.value, "left-arrow": "", onClickLeft: b[0] || (b[0] = () => l(u).back()) }, null, 8, ["title"]),
                     JSON.stringify(l(A)) !== "{}" ? (_(), m(Y, { key: 0 }, [U(zt, { itemD: l(A), state: l(A).state, isRefresh: p.value, "onUpdate:isRefresh": b[1] || (b[1] = f => (p.value = f)) }, null, 8, ["itemD", "state", "isRefresh"]), t("div", MI, [t("div", LI, [t("span", null, a(y.$t("binguoPaimin")), 1), t("span", null, a(y.$t("betAmounts")), 1), t("span", null, a(y.$t("k3WarningTip4")), 1)]), t("div", kI, [l(A) && l(A).userJoinInfo ? (_(), m(Y, { key: 0 }, [t("span", null, a(l(A).userJoinInfo.ranking), 1), t("span", null, a(l(Ae)(l(A).userJoinInfo.sumBetAmount || 0)), 1), t("span", null, a(l(Ae)(l(A).userJoinInfo.awardsAmount || 0)), 1)], 64)) : (_(), m(Y, { key: 1 }, [TI, QI, VI], 64))])])], 64)) : H("", !0),
                     t("div", OI, [
                        t("div", NI, [FI, t("span", null, a(y.$t("account")), 1), t("span", null, a(y.$t("betAmounts")), 1), t("span", null, a(y.$t("k3WarningTip4")), 1)]),
                        (_(!0),
                        m(
                           Y,
                           null,
                           se(l(i), (f, R) => (_(), m("div", { class: "info", key: R }, [[1, 2, 3].includes(f.ranking) ? (_(), m("span", { key: 1, class: oe(`top${f.ranking}`) }, null, 2)) : (_(), m("span", xI, a(f.ranking), 1)), t("span", null, a(f.userName), 1), t("span", null, a(l(Ae)(f.sumBetAmount || 0)), 1), t("span", null, a(l(Ae)(f.awardsAmount || 0)), 1)]))),
                           128,
                        )),
                        t("div", PI, a(y.$t("cpsTip28")), 1),
                        l(i).length == 0 ? (_(), de(ke, { key: 0 })) : H("", !0),
                     ]),
                     U(RI, { data: l(A) }, null, 8, ["data"]),
                     U(GI, { data: l(c) }, null, 8, ["data"]),
                  ])
               );
            }
         );
      },
   });
const YI = $(HI, [["__scopeId", "data-v-6bdef52c"]]),
   WI = Object.freeze(Object.defineProperty({ __proto__: null, default: YI }, Symbol.toStringTag, { value: "Module" })),
   KI = { class: "checkInRecord-container content" },
   XI = { class: "dailySignInRecord__container-wrapper" },
   JI = { class: "dailySignInRecord__container-wrapper__content-left" },
   zI = { class: "dailySignInRecord__container-wrapper__content-right" },
   jI = { alt: "" },
   ZI = q({
      __name: "index",
      setup(e) {
         const s = ae(),
            n = S({ pageSize: 20 }),
            A = S({ list: [], pageNo: 0, totalPage: 0, totalCount: 0 });
         function o() {
            s.back();
         }
         return (
            ce(async () => {}),
            (i, c) => {
               const u = x("NavBar"),
                  h = _e("lazy");
               return (
                  _(),
                  m("div", KI, [
                     U(u, { title: i.$t("checkInRecord"), "left-arrow": "", onClickLeft: o }, null, 8, ["title"]),
                     U(
                        Ne,
                        { distance: 300, api: l(Ey), list: A.value.list, "onUpdate:list": c[0] || (c[0] = d => (A.value.list = d)), "page-query": n.value, "onUpdate:pageQuery": c[1] || (c[1] = d => (n.value = d)), isAutoLoad: !0 },
                        {
                           content: j(() => [
                              t("div", XI, [
                                 (_(!0),
                                 m(
                                    Y,
                                    null,
                                    se(A.value.list, d => (_(), m("div", { class: "dailySignInRecord__container-wrapper__content", key: d.markDayTime }, [t("div", JI, [t("h1", null, a(i.$t("continuousCheckedIn")) + a(d.continuousDayContinue) + a(i.$t("days")), 1), t("span", null, a(d.markDayTime), 1)]), t("div", zI, [P(t("img", jI, null, 512), [[h, l(V)("activity/DailySignIn", "coin")]]), t("span", null, a(d.amount), 1)])]))),
                                    128,
                                 )),
                              ]),
                           ]),
                           _: 1,
                        },
                        8,
                        ["api", "list", "page-query"],
                     ),
                  ])
               );
            }
         );
      },
   });
const qI = $(ZI, [["__scopeId", "data-v-acc5b922"]]),
   $I = Object.freeze(Object.defineProperty({ __proto__: null, default: qI }, Symbol.toStringTag, { value: "Module" })),
   e7 = { class: "dailySignInRules__container" },
   t7 = { class: "dailySignInRules__container-hero" },
   s7 = { class: "dailySignInRules__container-hero__wrapper" },
   n7 = { class: "dailySignInRules__container-hero__wrapper-titlebox" },
   a7 = { class: "dailySignInRules__container-hero__wrapper-title" },
   A7 = { class: "dailySignInRules__container-hero__wrapper-title" },
   o7 = { class: "dailySignInRules__container-hero__wrapper-title" },
   i7 = q({
      __name: "index",
      setup(e) {
         const s = ae(),
            A = me().getUserInfo,
            { t: o } = ie(),
            i = S({}),
            c = S([]),
            u = S([o("desc1"), o("desc2"), o("desc3"), o("desc4"), o("desc5"), o("desc6")]);
         function h() {
            s.go(-1);
         }
         return (
            ce(async () => {
               const d = await O(Fs({ uid: A.userId, sign: A.sign }));
               (c.value = d.data.signInRechargesList), (i.value = d.data.signIn);
            }),
            (d, p) => {
               const C = x("NavBar");
               return (
                  _(),
                  m("div", e7, [
                     U(C, { title: d.$t("playRules"), "left-arrow": "", onClickLeft: h }, null, 8, ["title"]),
                     t("div", t7, [
                        t("div", s7, [
                           t("div", n7, [t("div", a7, a(d.$t("ruleSignIn")), 1), t("div", A7, a(d.$t("ruleAcount")), 1), t("div", o7, a(d.$t("ruleBonus")), 1)]),
                           t("ul", null, [
                              (_(!0),
                              m(
                                 Y,
                                 null,
                                 se(c.value, (B, w) => (_(), m("li", { key: w }, [t("div", null, a(B.day), 1), t("div", null, a(l(Ae)(B.amount)), 1), t("div", null, a(l(Ae)(B.bouns)), 1)]))),
                                 128,
                              )),
                           ]),
                        ]),
                     ]),
                     U(Ct, { name: d.$t("rule"), tiplist: u.value }, null, 8, ["name", "tiplist"]),
                  ])
               );
            }
         );
      },
   });
const l7 = $(i7, [["__scopeId", "data-v-a528612c"]]),
   c7 = Object.freeze(Object.defineProperty({ __proto__: null, default: l7 }, Symbol.toStringTag, { value: "Module" })),
   g7 = { class: "task-record-container" },
   r7 = { class: "head" },
   d7 = { class: "record-panel van-clearfix" },
   p7 = { class: "markRed" },
   _7 = q({
      __name: "index",
      setup(e) {
         const { t: s } = ie(),
            n = ae(),
            A = S([]),
            o = S(!1),
            i = S(!1),
            c = S(1),
            u = S(!1),
            h = S(1),
            d = Q(() => (u.value ? "" : s("noMoreThere"))),
            p = async () => {
               let w;
               h.value == 1 ? (w = await O(qy({ pageNo: c.value, pageSize: 20 }))) : (w = await O(o6({ pageNo: c.value, pageSize: 20 }))), w ? (w.data.totalCount == 0 && (u.value = !0), w.data.totalPage <= c.value ? (i.value = !0) : (i.value = !1), w.data.list && (A.value.push(...w.data.list), A.value.sort((y, b) => b.createDate - y.createDate)), c.value++) : (i.value = !0), (o.value = !1);
            },
            C = () => {
               n.push({ name: "DailyTasks" });
            };
         function B(w) {
            (h.value = w), (c.value = 1), (A.value.length = 0), p();
         }
         return (w, y) => {
            const b = x("NavBar"),
               v = x("van-sticky"),
               f = x("van-list"),
               R = _e("lazy");
            return (
               _(),
               m("div", g7, [
                  U(b, { title: w.$t("titlePickUpRecord"), placeholder: !1, "left-arrow": "", onClickLeft: C }, null, 8, ["title"]),
                  U(v, { "offset-top": 49 }, { default: j(() => [t("div", r7, [t("button", { class: oe({ active: h.value == 1 }), onClick: y[0] || (y[0] = L => B(1)) }, a(w.$t("actTip7")), 3), t("button", { class: oe({ active: h.value == 2 }), onClick: y[1] || (y[1] = L => B(2)) }, a(w.$t("actTip8")), 3)])]), _: 1 }),
                  U(
                     f,
                     { loading: o.value, "onUpdate:loading": y[2] || (y[2] = L => (o.value = L)), finished: i.value, "finished-text": d.value, onLoad: p },
                     {
                        default: j(() => [
                           t("div", d7, [
                              (_(!0),
                              m(
                                 Y,
                                 null,
                                 se(A.value, L => (_(), m("div", { class: "record-panel-item", key: L.status }, [t("h1", null, a(h.value == 1 ? w.$t("actTip5") : w.$t("actTip6")), 1), t("h2", null, [t("span", null, a(L.taskTitle), 1), t("span", p7, a(L.taskTarget + "/" + L.taskTarget), 1)]), t("div", null, [t("span", null, a(L.createDate), 1), t("h3", null, [P(t("img", null, null, 512), [[R, l(V)("activity/DailyTask", "recordIcon")]]), t("span", null, a(l(Ae)(L.awardAmount)), 1)])])]))),
                                 128,
                              )),
                           ]),
                        ]),
                        _: 1,
                     },
                     8,
                     ["loading", "finished", "finished-text"],
                  ),
                  u.value ? (_(), de(ke, { key: 0 })) : H("", !0),
               ])
            );
         };
      },
   });
const u7 = $(_7, [["__scopeId", "data-v-8881fbdf"]]),
   m7 = Object.freeze(Object.defineProperty({ __proto__: null, default: u7 }, Symbol.toStringTag, { value: "Module" })),
   v7 = { class: "table-head" },
   h7 = { class: "table-container" },
   w7 = { class: "table-title" },
   b7 = { class: "table-content" },
   C7 = { key: 0, rowspan: "0" },
   B7 = { key: 0, class: "first-list-item space" },
   y7 = { class: "head" },
   f7 = { class: "title" },
   R7 = ["innerHTML"],
   E7 = q({
      __name: "RulesTable",
      props: { giftPackConfigList: { type: Array, default: [] } },
      setup(e) {
         const s = n => (n.length ? n[0] : {});
         return (n, A) => (
            _(!0),
            m(
               Y,
               null,
               se(
                  e.giftPackConfigList,
                  (o, i) => (
                     _(),
                     m("div", { key: i }, [
                        t("div", v7, a(n.$t("registrationFullTip", [o.registerDays])), 1),
                        t("table", h7, [
                           t("thead", w7, [t("th", null, a(n.$t("activeObject")), 1), t("th", null, a(n.$t("totalValidBets")), 1), t("th", null, a(n.$t("giftBonus")), 1)]),
                           t("tbody", null, [
                              (_(!0),
                              m(
                                 Y,
                                 null,
                                 se(o.configAwardList, (c, u) => (_(), m("tr", b7, [i >= u && u === 0 ? (_(), m("td", C7, a(n.$t("registrationDepositTip", [o.registerDays, o.grandTotalDeposit])), 1)) : H("", !0), t("td", null, a(l(Ae)(c.totalValidBet)) + "+", 1), t("td", null, a(l(Ae)(c.giveAwayBonus)), 1)]))),
                                 256,
                              )),
                           ]),
                        ]),
                        o.configAwardList.length ? (_(), m("div", B7, [t("div", y7, [t("div", f7, a(n.$t("forexample")) + ":", 1)]), t("div", { class: "description", innerHTML: n.$t("registrationExample", [o.registerDays, o.grandTotalDeposit, s(o.configAwardList).totalValidBet, s(o.configAwardList).giveAwayBonus]) }, null, 8, R7)])) : H("", !0),
                     ])
                  ),
               ),
               128,
            )
         );
      },
   });
const I7 = $(E7, [["__scopeId", "data-v-9ba303c9"]]),
   S7 = e => (fe("data-v-2ca81c68"), (e = e()), Re(), e),
   D7 = { class: "member-package-rule" },
   G7 = { class: "first-list-item" },
   U7 = { class: "head" },
   M7 = { class: "title" },
   L7 = { class: "description" },
   k7 = S7(() => t("span", { class: "number" }, "24", -1)),
   T7 = ["innerHTML"],
   Q7 = { class: "number" },
   V7 = { class: "member-package-rule-bonus" },
   O7 = { class: "member-package-rule-bonus-title" },
   N7 = q({
      __name: "index",
      setup(e) {
         const { t: s } = ie(),
            n = ae(),
            { getConfig: A, time: o, bonusLimit: i, firstDeposiSendBonust: c, giftPackConfigList: u } = Xs();
         return (
            ce(() => {
               A();
            }),
            (h, d) => {
               const p = x("NavBar");
               return _(), m(Y, null, [U(p, { title: l(s)("eventDetails"), "left-arrow": "", onClickLeft: d[0] || (d[0] = C => l(n).go(-1)) }, null, 8, ["title"]), t("div", D7, [t("div", G7, [t("div", U7, [t("div", M7, a(l(s)("newMenberRule")), 1)]), t("div", L7, [K(a(l(s)("activityTime")), 1), t("span", null, a(l(o)), 1), K("，" + a(l(s)("newMemberDeposit")), 1), k7, K(a(l(s)("newMemberDepositTime")) + " ", 1), t("span", { innerHTML: l(s)("platformBonus", [l(c)]) }, null, 8, T7), K("，" + a(l(s)("bonusLimit")), 1), t("span", Q7, a(l(Ae)(l(i))), 1), K("，" + a(l(s)("receiveTips")) + "。 ", 1)])]), t("div", V7, [t("div", O7, a(l(s)("newMemberPlayGame")), 1), t("div", null, [U(I7, { giftPackConfigList: l(u) }, null, 8, ["giftPackConfigList"])])])])], 64);
            }
         );
      },
   });
const F7 = $(N7, [["__scopeId", "data-v-2ca81c68"]]),
   x7 = Object.freeze(Object.defineProperty({ __proto__: null, default: F7 }, Symbol.toStringTag, { value: "Module" })),
   P7 = { class: "addAddress__container" },
   H7 = { class: "addAddress__container-warning" },
   Y7 = { class: "addAddress__container-forum" },
   W7 = { class: "addAddress__container-forum__item" },
   K7 = { class: "input_model" },
   X7 = { key: 0, class: "dropCon" },
   J7 = ["onUpdate:modelValue", "placeholder", "maxlength"],
   z7 = ["onUpdate:modelValue", "placeholder", "maxlength"],
   j7 = ["placeholder"],
   Z7 = q({
      __name: "index",
      setup(e) {
         const { t: s } = ie(),
            n = ae(),
            A = He();
         let o = ve({ userName: "", phoneNumber: "", area: "66", address: "" });
         ce(() => {
            Object.keys(A.query).length !== 0 && (A.query.type && A.query.type === "edit" && ((o.userName = n.currentRoute.value.query.name), (o.phoneNumber = n.currentRoute.value.query.phone), (o.address = n.currentRoute.value.query.address), (o.area = n.currentRoute.value.query.area)), (o.phoneNumber = o.phoneNumber.replace(o.area, "")));
         });
         const i = Q(() => o.userName && o.phoneNumber && o.address),
            c = [
               { title: s("recipientName"), icon: "lotteryReceiver", value: "userName", placeholder: s("plEnterrecipientName"), maxlength: 20 },
               { title: s("contactInfo"), icon: "lotteryContact", value: "phoneNumber", placeholder: s("plEntercontactInfo"), maxlength: 11 },
               { title: s("shippingAddr"), icon: "lotteryCity", value: "address", placeholder: s("plEnterCity"), maxlength: 150 },
            ];
         function u() {
            n.back();
         }
         async function h() {
            if (!i.value) return;
            const d = A.query.form,
               p = A.query.type,
               C = A.query.addressId,
               B = { phone: o.phoneNumber, address: o.address, name: o.userName, area: o.area };
            if (d === "lotteryPoint" && p === "edit") {
               (B.userAddressId = parseInt(C, 10)), (await O(Fy(B))) && (Ce(s("savedSuccessfully")), n.back());
               return;
            } else if (d === "lotteryPoint" && p === "add") {
               (await O(xy(B))) && (Ce(s("savedSuccessfully")), n.back());
               return;
            }
            let w = { ...o, area: o.area };
            (await O(ky(w))) && (Ce(s("savedSuccessfully")), n.back());
         }
         return (d, p) => {
            const C = x("NavBar"),
               B = x("van-icon"),
               w = _e("only-num");
            return (
               _(),
               m("div", P7, [
                  U(C, { title: l(s)("addAddr"), placeholder: !1, "left-arrow": "", onClickLeft: u }, null, 8, ["title"]),
                  t("div", H7, [t("h1", null, [U(B, { name: "warning" }), K(" " + a(l(s)("kindTips")), 1)]), t("p", null, a(l(s)("descActivity3")), 1)]),
                  t("div", Y7, [
                     (_(),
                     m(
                        Y,
                        null,
                        se(c, (y, b) =>
                           t("div", W7, [
                              t("h1", null, [U(B, { name: b < 2 ? l(V)("activity/PointMall", y.icon) : "location" }, null, 8, ["name"]), K(" " + a(y.title), 1)]),
                              t("div", K7, [b === 1 ? (_(), m("div", X7, [U(zs, { typeValue: l(o).area, "onUpdate:typeValue": p[0] || (p[0] = v => (l(o).area = v)), onChangeT: p[1] || (p[1] = v => (l(o).area = v)) }, null, 8, ["typeValue"])])) : H("", !0), b === 0 ? P((_(), m("input", { key: 1, type: "text", "onUpdate:modelValue": v => (l(o)[y.value] = v), placeholder: y.placeholder, maxlength: y.maxlength }, null, 8, J7)), [[xe, l(o)[y.value]]]) : H("", !0), b === 1 ? P((_(), m("input", { key: 2, type: "text", "onUpdate:modelValue": v => (l(o)[y.value] = v), placeholder: y.placeholder, maxlength: y.maxlength }, null, 8, z7)), [[w], [xe, l(o)[y.value]]]) : H("", !0)]),
                              b === 2 ? P((_(), m("textarea", { key: 0, "onUpdate:modelValue": p[2] || (p[2] = v => (l(o).address = v)), placeholder: l(s)("phEnterDetailedAddr"), maxlength: "150" }, null, 8, j7)), [[xe, l(o).address]]) : H("", !0),
                           ]),
                        ),
                        64,
                     )),
                  ]),
                  t("div", { class: oe(["addAddress__container-saveBtn", { disabled: !i.value }]), onClick: h }, a(l(s)("save")), 3),
               ])
            );
         };
      },
   });
const q7 = $(Z7, [["__scopeId", "data-v-7c087f5f"]]),
   $7 = Object.freeze(Object.defineProperty({ __proto__: null, default: q7 }, Symbol.toStringTag, { value: "Module" })),
   eS = { class: "lotteryActivity__container" },
   tS = { class: "lotteryActivity__container-list" },
   sS = q({
      __name: "index",
      setup(e) {
         const { t: s } = ie(),
            n = ae(),
            { listRef: A, list: o, pointTabs: i, pointTabActive: c, pointQuery: u, pointRest: h } = at();
         Be(c, () => {
            h(), A.value.resetRefresh();
         });
         function d() {
            n.back();
         }
         return (p, C) => {
            const B = x("NavBar"),
               w = x("van-tab"),
               y = x("van-tabs");
            return (
               _(),
               m("div", eS, [
                  U(B, { title: l(s)("sweepstakes"), fixed: "", "left-arrow": "", onClickLeft: d }, null, 8, ["title"]),
                  U(
                     y,
                     { active: l(c), "onUpdate:active": C[0] || (C[0] = b => (Ie(c) ? (c.value = b) : null)), background: "#A4EBF3", color: "#fff", "line-width": "0", "line-height": "0", "title-active-color": "#fff", "title-inactive-color": "#fff" },
                     {
                        default: j(() => [
                           (_(!0),
                           m(
                              Y,
                              null,
                              se(l(i), b => (_(), de(w, { name: b.value, title: b.label }, null, 8, ["name", "title"]))),
                              256,
                           )),
                        ]),
                        _: 1,
                     },
                     8,
                     ["active"],
                  ),
                  U(
                     Ne,
                     { distance: 300, api: l(Ps), list: l(o), "onUpdate:list": C[1] || (C[1] = b => (Ie(o) ? (o.value = b) : null)), "page-query": l(u), "onUpdate:pageQuery": C[2] || (C[2] = b => (Ie(u) ? (u.value = b) : null)), isAutoLoad: !0, ref_key: "listRef", ref: A },
                     {
                        content: j(() => [
                           t("div", tS, [
                              (_(!0),
                              m(
                                 Y,
                                 null,
                                 se(l(o), b => (_(), de(qs, { item: b, key: b.pointsLotteryID }, null, 8, ["item"]))),
                                 128,
                              )),
                           ]),
                        ]),
                        _: 1,
                     },
                     8,
                     ["api", "list", "page-query"],
                  ),
               ])
            );
         };
      },
   });
const nS = $(sS, [["__scopeId", "data-v-56c90138"]]),
   aS = Object.freeze(Object.defineProperty({ __proto__: null, default: nS }, Symbol.toStringTag, { value: "Module" })),
   Fe = e => (fe("data-v-f888849c"), (e = e()), Re(), e),
   AS = { class: "lotteryDetail__container" },
   oS = { key: 0, class: "lotteryDetail__container-item" },
   iS = { class: "lotteryDetail__container-item__hero" },
   lS = { class: "lotteryDetail__container-item__hero-img" },
   cS = Fe(() => t("div", null, null, -1)),
   gS = { class: "lotteryDetail__container-item__hero-title" },
   rS = { class: "lotteryDetail__container-item__hero-detail" },
   dS = Fe(() => t("div", null, null, -1)),
   pS = { class: "text-spacing" },
   _S = Fe(() => t("div", null, null, -1)),
   uS = { class: "lotteryDetail__container-item__hero-progress" },
   mS = { key: 0, class: "lotteryDetail__container-item__hero-footer" },
   vS = { class: "lotteryDetail__container-item__hero-footer__ending" },
   hS = { class: "lotteryDetail__container-item__hero-footer__cost" },
   wS = { style: { color: "#A4EBF3" } },
   bS = { key: 1, class: "lotteryDetail__container-item__hero-footer" },
   CS = { class: "lotteryDetail__container-item__hero-footer__ending" },
   BS = { class: "lotteryDetail__container-item__hero-footer__cost" },
   yS = { class: "lotteryDetail__container-item__luckyNumber" },
   fS = { class: "lotteryDetail__container-item__luckyNumber-number" },
   RS = { key: 0 },
   ES = { key: 1 },
   IS = { class: "lotteryDetail__container-item__luckyNumber-text" },
   SS = { key: 0 },
   DS = { key: 1 },
   GS = { class: "lotteryDetail__container-item__footer" },
   US = { class: "lotteryDetail__container-item__footer-tabBar" },
   MS = { class: "lotteryDetail__container-item__footer-participants" },
   LS = { class: "lotteryDetail__container-item__footer-participants__item-header" },
   kS = { class: "lotteryDetail__container-item__footer-participants__item-tickets" },
   TS = { key: 0, class: "lotteryDetail__container-item__footer-participants__item-tickets__viewAll" },
   QS = ["onClick"],
   VS = Fe(() => t("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 32 32", fill: "none" }, [t("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M25.7416 11.694C26.4622 10.8819 25.8857 9.59961 24.8 9.59961L15.8872 9.59961L6.8 9.59961C5.72151 9.59961 5.15333 10.8777 5.87586 11.6783L14.4434 21.1724C15.2295 21.9855 16.5448 21.9855 17.331 21.1724L25.7416 11.694Z", fill: "#3c838b" })], -1)),
   OS = ["innerHTML"],
   NS = { key: 0 },
   FS = { key: 1 },
   xS = { class: "lotteryDetail__container-item__actionSheet" },
   PS = Fe(() => t("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" }, [t("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM15.0027 10.9995C14.2722 10.9995 13.5998 11.3978 13.2488 12.0383L8.68993 20.357C8.27753 21.1095 8.39114 22.0413 8.97227 22.6726L22.5283 37.4007C23.3206 38.2615 24.6792 38.2615 25.4714 37.4007L39.0275 22.6726C39.6086 22.0413 39.7222 21.1095 39.3098 20.357L34.751 12.0383C34.3999 11.3978 33.7276 10.9995 32.9971 10.9995H15.0027Z", fill: "#A4EBF3" })], -1)),
   HS = ["onClick"],
   YS = Fe(() => t("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" }, [t("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM15.0027 10.9995C14.2722 10.9995 13.5998 11.3978 13.2488 12.0383L8.68993 20.357C8.27753 21.1095 8.39114 22.0413 8.97227 22.6726L22.5283 37.4007C23.3206 38.2615 24.6792 38.2615 25.4714 37.4007L39.0275 22.6726C39.6086 22.0413 39.7222 21.1095 39.3098 20.357L34.751 12.0383C34.3999 11.3978 33.7276 10.9995 32.9971 10.9995H15.0027Z", fill: "#A4EBF3" })], -1)),
   WS = { key: 1, class: "lotteryDetail__container-item__actionSheetCloseBtn" },
   KS = Fe(() => t("svg", { xmlns: "http://www.w3.org/2000/svg", width: "60", height: "60", viewBox: "0 0 60 60", fill: "none" }, [t("path", { d: "M30 57C44.9117 57 57 44.9117 57 30C57 15.0883 44.9117 3 30 3C15.0883 3 3 15.0883 3 30C3 44.9117 15.0883 57 30 57Z", stroke: "white", "stroke-width": "4", "stroke-linejoin": "round" }), t("path", { d: "M43 17L17 43", stroke: "white", "stroke-width": "4", "stroke-linecap": "round", "stroke-linejoin": "round" }), t("path", { d: "M17 17L43 43", stroke: "white", "stroke-width": "4", "stroke-linecap": "round", "stroke-linejoin": "round" })], -1)),
   XS = [KS],
   JS = { class: "van-dialog__content-title" },
   zS = { class: "van-dialog__content-subTitle" },
   jS = { class: "van-dialog__content-tips" },
   ZS = { class: "van-dialog__content-ticketsList" },
   qS = ["src"],
   $S = ["src"],
   e9 = q({
      __name: "index",
      setup(e) {
         const s = ae();
         He();
         const n = me();
         tt();
         const { getPointLotteryInfo: A, onJoin: o, winPeople: i, list: c, loading: u, ticketCount: h, resultTicket: d, pointInfo: p } = at(),
            C = (G, k) => (G == 0 && k == 0 ? 100 : (G / k) * 100),
            B = Q(() => {
               var G, k, T, F, ne;
               return [(G = p.value) == null ? void 0 : G.img_Five, (k = p.value) == null ? void 0 : k.img_Four, (T = p.value) == null ? void 0 : T.img_One, (F = p.value) == null ? void 0 : F.img_Three, (ne = p.value) == null ? void 0 : ne.img_Two].filter(Boolean);
            }),
            w = S(0),
            y = S(!1),
            b = S(0),
            v = S(!1),
            f = [
               { amount: 1, price: 10 },
               { amount: 3, price: 30 },
               { amount: 5, price: 50 },
               { amount: 10, price: 100 },
               { amount: 20, price: 200 },
               { amount: 30, price: 300 },
               { amount: 50, price: 500 },
               { amount: 100, price: 1e3 },
            ];
         function R() {
            s.push({ name: "PointMall-MyLottery" });
         }
         function L(G) {
            c.value.length && (c.value[0].users[G].showAll = !c.value[0].users[G].showAll);
         }
         function M(G, k = !1) {
            k ? ee() : ((y.value = G), G || (b.value = 0));
         }
         function ee() {
            v.value = !0;
         }
         const N = async () => {
            (v.value = !1), (y.value = !1), await A();
         };
         return (
            Be(d, G => {
               G.length && (v.value = !0);
            }),
            ce(async () => {
               await A();
            }),
            (G, k) => {
               var le, te;
               const T = x("NavBar"),
                  F = x("van-progress"),
                  ne = x("van-tab"),
                  ge = x("van-tabs"),
                  D = x("van-button"),
                  E = x("van-action-sheet"),
                  X = x("van-icon"),
                  J = x("van-dialog"),
                  W = _e("lazy");
               return (
                  _(),
                  m("div", AS, [
                     U(T, { title: G.$t("drawActivity"), "left-arrow": "", onClickLeft: k[0] || (k[0] = z => l(s).go(-1)) }, null, 8, ["title"]),
                     l(p)
                        ? (_(),
                          m("div", oS, [
                             t("div", iS, [
                                t("div", lS, [
                                   U(
                                      l(fn),
                                      { autoplay: 3e3, "indicator-color": "white" },
                                      {
                                         default: j(() => [
                                            (_(!0),
                                            m(
                                               Y,
                                               null,
                                               se(B.value, z => (_(), de(l(yn), null, { default: j(() => [P(t("img", null, null, 512), [[W, z]])]), _: 2 }, 1024))),
                                               256,
                                            )),
                                         ]),
                                         _: 1,
                                      },
                                   ),
                                   cS,
                                ]),
                                t("div", gS, a((le = l(p)) == null ? void 0 : le.name), 1),
                                t("div", rS, [t("div", null, [t("span", null, a(G.$t("startTime")), 1), dS, t("span", null, a((te = l(p)) == null ? void 0 : te.startTime), 1)]), t("div", null, [t("span", pS, a(G.$t("betIssue")), 1), _S, t("span", null, a(l(p).issueNumber), 1)])]),
                                t("div", uS, [t("div", null, [t("span", null, a(G.$t("progress")), 1), t("span", null, a(G.$t("totalActivity")), 1)]), U(F, { "stroke-width": "8px", color: "#A4EBF3", percentage: C(l(p).redeemedNumber || 0, l(p).totalNumber), "show-pivot": !1 }, null, 8, ["percentage"]), t("div", null, [t("span", null, a(C(l(p).redeemedNumber || 0, l(p).totalNumber).toFixed(2)) + "%", 1), t("h1", null, a(l(p).totalNumber) + a(G.$t("sheets")), 1)])]),
                                l(p).winningNumber ? (_(), m("div", mS, [t("div", vS, [t("span", null, a(G.$t("lotteryActivityEndTime")), 1), t("div", null, a(l(p).endTime), 1)]), t("div", hS, [t("span", null, a(G.$t("lotteryWinPeople")), 1), t("div", wS, a(l(as)(l(i).userName)), 1)])])) : (_(), m("div", bS, [t("div", CS, [t("span", null, a(G.$t("requiredBeforeEnd")), 1), t("div", null, [t("span", null, a(l(p).totalNumber - l(p).redeemedNumber), 1), K(" " + a(G.$t("sheets")), 1)])]), t("div", BS, [t("span", null, a(G.$t("perRaffleTicket")), 1), t("div", null, [P(t("img", null, null, 512), [[W, l(V)("activity/PointMall", "redDiamondSm")]]), t("h5", null, a(l(p).unit) + ".00", 1)])])])),
                             ]),
                             t("div", yS, [t("h1", null, a(G.$t("prizenumber")), 1), t("div", null, [t("div", fS, [l(p).winningNumber ? (_(), m("span", RS, a(l(p).winningNumber), 1)) : (_(), m("span", ES, "**********"))]), t("div", IS, [l(p).winningNumber ? (_(), m("span", SS, a(G.$t("prizenumber")), 1)) : (_(), m("span", DS, a(G.$t("waitingforlottery")), 1))]), P(t("img", null, null, 512), [[W, l(V)("activity/PointMall", "luckyNumber")]])])]),
                             t("div", GS, [
                                t("div", US, [t("h1", { class: oe({ fontWeight600: w.value === 0 }), onClick: k[1] || (k[1] = z => (w.value = 0)) }, a(G.$t("participant")), 3), t("h1", { class: oe({ fontWeight600: w.value === 1 }), onClick: k[2] || (k[2] = z => (w.value = 1)) }, a(G.$t("PrizeDetails")), 3)]),
                                U(
                                   ge,
                                   { active: w.value, "onUpdate:active": k[3] || (k[3] = z => (w.value = z)), type: "card", background: "transparent", "title-active-color": "#151515", "title-inactive-color": "hsl(0 0% 62% / 1)", animated: "" },
                                   {
                                      default: j(() => [
                                         U(
                                            ne,
                                            { title: G.$t("popularProduct"), ref: "targetContainer" },
                                            {
                                               default: j(() => [
                                                  t("div", MS, [
                                                     (_(!0),
                                                     m(
                                                        Y,
                                                        null,
                                                        se(
                                                           l(p).users,
                                                           (z, Z) => (
                                                              _(),
                                                              m("div", { class: "lotteryDetail__container-item__footer-participants__item", key: Z }, [
                                                                 t("div", LS, [t("span", { class: oe({ me: z.isWin }) }, a(l(as)(z.userName)), 3), t("span", null, a(z.addTime), 1)]),
                                                                 t("div", kS, [
                                                                    (_(!0),
                                                                    m(
                                                                       Y,
                                                                       null,
                                                                       se(z.showAll ? z.tickets : z.tickets.slice(0, 5), we => (_(), m("div", { key: we }, [P(t("img", null, null, 512), [[W, l(V)("activity/PointMall", "ticket")]]), t("span", null, a(we), 1)]))),
                                                                       128,
                                                                    )),
                                                                    !z.showAll && z.tickets.length > 6 ? (_(), m("div", TS, [t("div", { onClick: we => L(Z) }, [K(a(G.$t("viewAll")) + " ", 1), VS], 8, QS)])) : H("", !0),
                                                                 ]),
                                                              ])
                                                           ),
                                                        ),
                                                        128,
                                                     )),
                                                  ]),
                                               ]),
                                               _: 1,
                                            },
                                            8,
                                            ["title"],
                                         ),
                                         U(ne, { title: G.$t("treasureScore") }, { default: j(() => [t("div", { class: "lotteryDetail__container-item__footer-detail", innerHTML: l(p).details }, null, 8, OS)]), _: 1 }, 8, ["title"]),
                                      ]),
                                      _: 1,
                                   },
                                   8,
                                   ["active"],
                                ),
                             ]),
                             t("div", { class: oe(["lotteryDetail__container-item__participate", { lotteryDetailActive: l(p).status == 1 }]) }, [l(p).status == 2 ? (_(), m("span", NS, a(G.$t("lotteryActivityUnstarted")), 1)) : l(p).status == 0 ? (_(), m("span", FS, a(G.$t("lotteryActivityEnd")), 1)) : (_(), m("span", { key: 2, onClick: k[4] || (k[4] = z => M(!0, !1)) }, a(G.$t("ParticipateInlottery")), 1))], 2),
                          ]))
                        : H("", !0),
                     U(
                        E,
                        { show: y.value, "onUpdate:show": k[5] || (k[5] = z => (y.value = z)), title: G.$t("descLottery1"), "z-index": "2000", "close-on-click-overlay": !1, closeable: !1 },
                        {
                           default: j(() => {
                              var z;
                              return [
                                 t("div", xS, [
                                    t("div", null, [PS, t("span", null, a(l(n).getUserInfo.integral), 1)]),
                                    t("div", null, a(G.$t("myScores")), 1),
                                    t("div", null, [
                                       (_(),
                                       m(
                                          Y,
                                          null,
                                          se(f, (Z, we) => t("div", { key: we, class: oe({ activeTicket: Z.amount === l(h) }), onClick: Xe => (h.value = Z.amount) }, [t("span", null, a(Z.amount), 1), t("span", null, a(G.$t("sheets")), 1)], 10, HS)),
                                          64,
                                       )),
                                    ]),
                                    t("div", null, [t("span", null, a(G.$t("needToPay")), 1), t("div", null, [YS, K(" " + a(((z = l(p)) == null ? void 0 : z.unit) * l(h) || 0) + ".00 ", 1)])]),
                                 ]),
                                 U(D, { class: "lotteryDetail__container-item__actionSheet-button", block: "", loading: l(u), "loading-text": G.$t("confirmParticipate"), onClick: l(o) }, { default: j(() => [K(a(G.$t("confirmParticipate")), 1)]), _: 1 }, 8, ["loading", "loading-text", "onClick"]),
                              ];
                           }),
                           _: 1,
                        },
                        8,
                        ["show", "title"],
                     ),
                     y.value ? (_(), m("div", WS, [t("span", { onClick: k[6] || (k[6] = z => M(!1)) }, XS)])) : H("", !0),
                     U(
                        J,
                        { show: v.value, "onUpdate:show": k[7] || (k[7] = z => (v.value = z)), "show-confirm-button": !1, "z-index": "3100" },
                        {
                           default: j(() => [
                              t("div", JS, a(G.$t("participateSuccess")), 1),
                              t("div", zS, [t("span", null, a(l(d).length), 1), K(a(G.$t("sheets")), 1)]),
                              t("div", jS, a(G.$t("congratsOnWinTicket")), 1),
                              t("div", ZS, [
                                 t("div", null, [
                                    (_(!0),
                                    m(
                                       Y,
                                       null,
                                       se(l(d), z => (_(), m("div", null, [t("img", { class: "van-dialog__content-ticketsList__ticket", src: l(V)("activity/PointMall", "ticket") }, null, 8, qS), K(" " + a(z), 1)]))),
                                       256,
                                    )),
                                 ]),
                              ]),
                              t("div", { class: "van-dialog__content-confirm", onClick: N }, a(G.$t("confirm")), 1),
                              t("div", { class: "van-dialog__content-myTreasure", onClick: R }, [K(a(G.$t("toMyTreasure")) + " ", 1), U(X, { name: "arrow" }), U(X, { name: "arrow", style: { left: "-10px" } })]),
                              P(t("img", null, null, 512), [[W, l(V)("activity/PointMall", "successfullyParticipatedBg")]]),
                              t("img", { class: "van-dialog__content-successfullyParticipatedBottom", src: l(V)("activity/PointMall", "successfullyParticipatedBottom") }, null, 8, $S),
                           ]),
                           _: 1,
                        },
                        8,
                        ["show"],
                     ),
                  ])
               );
            }
         );
      },
   });
const t9 = $(e9, [["__scopeId", "data-v-f888849c"]]),
   s9 = Object.freeze(Object.defineProperty({ __proto__: null, default: t9 }, Symbol.toStringTag, { value: "Module" })),
   n9 = { class: "myLottery__container" },
   a9 = { class: "myLottery__container-products" },
   A9 = { class: "myLottery__container-products__item" },
   o9 = { class: "myLottery__container-products__item-header" },
   i9 = { class: "myLottery__container-products__item-header__left" },
   l9 = { class: "myLottery__container-products__item-header__right" },
   c9 = { class: "left" },
   g9 = { class: "right" },
   r9 = { class: "myLottery__container-products__item-footer" },
   d9 = { class: "myLottery__container-products__item-footer__header" },
   p9 = { class: "myLottery__container-products__item-footer__body" },
   _9 = ["onClick"],
   u9 = q({
      __name: "index",
      setup(e) {
         const { t: s } = ie(),
            n = ae(),
            { myPointTabs: A, pointTabActive: o, myPointList: i, myPointQuery: c, listRef: u, pointRest: h } = at(),
            d = y => [y.img_Five, y.img_Four, y.img_One, y.img_Three, y.img_Two].filter(Boolean);
         function p() {
            n.back();
         }
         Be(o, () => {
            (c.value.orderStatus = o.value), h(), u.value.resetRefresh();
         });
         function C(y, b) {
            if (b === 1)
               switch (y) {
                  case 0:
                     return "linear-gradient(270deg, #FF5353 27.64%, #FF4141 91%, #FF9495 96.88%, #EB2426 100%)";
                  case 2:
                     return "linear-gradient(270deg, #FABB2A 18.36%, #EB9315 89.84%, #FBE571 96.48%, #ED8B19 100%)";
                  case 1:
                     return "linear-gradient(270deg, #9FAAD2 18.36%, #A3B0DE 89.84%, #D5E1FF 96.48%, #7884B0 100%)";
               }
            else
               switch (y) {
                  case 1:
                     return "linear-gradient(90deg, #BDC9F4 -3.24%, #FFF 4.63%, #C9D5FB 13.43%, #D9E3FF 76.75%)";
                  case 2:
                     return "linear-gradient(90deg, #FF9C3A -3.24%, #FFE55C 4.63%, #FFB936 13.43%, #FFF962 76.75%)";
                  default:
                     return "linear-gradient(90deg, #FF9C3A -3.24%, #FFE55C 4.63%, #FFB936 13.43%, #FFF962 76.75%)";
               }
         }
         function B(y) {
            switch (y) {
               case 0:
                  return s("ongoing");
               case 2:
                  return s("winTheLottery");
               case 1:
                  return s("winTips4");
            }
         }
         function w(y, b) {
            n.push({ name: "PointMall-ReceiveLottery", query: { pointsLotteryID: y, orderId: b } });
         }
         return (y, b) => {
            const v = x("NavBar"),
               f = x("van-tab"),
               R = x("van-tabs"),
               L = _e("lazy");
            return (
               _(),
               m("div", n9, [
                  U(v, { title: l(s)("mydraw"), "z-index": "99", fixed: "", "left-arrow": "", onClickLeft: p }, null, 8, ["title"]),
                  U(
                     R,
                     { active: l(o), "onUpdate:active": b[0] || (b[0] = M => (Ie(o) ? (o.value = M) : null)), background: "#A4EBF3", color: "#fff", "line-width": "0", "line-height": "0", "title-active-color": "#fff", "title-inactive-color": "#fff" },
                     {
                        default: j(() => [
                           (_(!0),
                           m(
                              Y,
                              null,
                              se(l(A), (M, ee) => (_(), de(f, { name: M.value, key: ee, title: M.label }, null, 8, ["name", "title"]))),
                              128,
                           )),
                        ]),
                        _: 1,
                     },
                     8,
                     ["active"],
                  ),
                  U(
                     Ne,
                     { distance: 300, api: l(Vy), list: l(i), "onUpdate:list": b[1] || (b[1] = M => (Ie(i) ? (i.value = M) : null)), "page-query": l(c), "onUpdate:pageQuery": b[2] || (b[2] = M => (Ie(c) ? (c.value = M) : null)), isAutoLoad: !0, ref_key: "listRef", ref: u },
                     {
                        content: j(() => [
                           t("div", a9, [
                              (_(!0),
                              m(
                                 Y,
                                 null,
                                 se(
                                    l(i),
                                    (M, ee) => (
                                       _(),
                                       m("div", A9, [
                                          t("div", o9, [t("div", i9, [t("span", { style: Ge({ background: C(M.orderInfo.orderStatus, 1) }) }, a(B(M.orderInfo.orderStatus)), 5), t("span", { style: Ge({ background: C(M.orderInfo.orderStatus, 2) }) }, a(B(M.orderInfo.orderStatus)), 5), P(t("img", null, null, 512), [[L, d(M.lotteryInfo)[0]]])]), t("div", l9, [t("h1", null, a(M.lotteryInfo.name), 1), t("div", null, a(l(s)("betNumber")) + ": " + a(M.lotteryInfo.issueNumber), 1), t("div", null, [t("span", c9, a(M.lotteryInfo.redeemedNumber), 1), K("/" + a(M.lotteryInfo.totalNumber) + " " + a(l(s)("sheets")) + " ", 1), t("span", g9, [P(t("img", null, null, 512), [[L, l(V)("activity/PointMall", "redDiamondSm")]]), K(" " + a(M.lotteryInfo.unit) + ".00 ", 1)])])])]),
                                          t("div", r9, [
                                             t("div", d9, [t("div", null, [K(a(l(s)("gross")), 1), t("span", null, a(M.ticketsInfo.length), 1), K(a(l(s)("raffleticket")), 1)]), t("div", null, a(l(Ae)(M.ticketsInfo.length * M.lotteryInfo.unit)), 1)]),
                                             t("div", p9, [
                                                (_(!0),
                                                m(
                                                   Y,
                                                   null,
                                                   se(M.ticketsInfo, (N, G) => (_(), m("div", { class: "myLottery__container-products__item-footer__body-item", key: ee }, [P(t("img", null, null, 512), [[L, l(V)("activity/PointMall", "ticket")]]), t("span", null, a(N.ticketNumber), 1)]))),
                                                   128,
                                                )),
                                             ]),
                                          ]),
                                          M.orderInfo.orderStatus === 2 && M.orderInfo.shippingStatus == 0 ? (_(), m("div", { key: 0, class: oe(["myLottery__container-products__item-button", { boxShadow4px: !0 }]), onClick: N => w(M.lotteryInfo.pointsLotteryID, M.orderInfo.pointsLotteryOrdersID) }, [t("span", null, a(l(s)("claimtreasure")), 1)], 8, _9)) : H("", !0),
                                          M.orderInfo.shippingStatus > 0 && M.orderInfo.orderStatus === 2 ? (_(), m("div", { key: 1, class: oe(["myLottery__container-products__item-button", { boxShadow4px: !1 }]) }, [t("span", null, a(l(s)("claimed")), 1)])) : H("", !0),
                                       ])
                                    ),
                                 ),
                                 256,
                              )),
                           ]),
                        ]),
                        _: 1,
                     },
                     8,
                     ["api", "list", "page-query"],
                  ),
               ])
            );
         };
      },
   });
const m9 = $(u9, [["__scopeId", "data-v-3b1bb9a6"]]),
   v9 = Object.freeze(Object.defineProperty({ __proto__: null, default: m9 }, Symbol.toStringTag, { value: "Module" })),
   h9 = { class: "myOrders__container" },
   w9 = ["onClick"],
   b9 = { class: "myOrders__container-item__header-left" },
   C9 = { alt: "" },
   B9 = { alt: "" },
   y9 = { class: "myOrders__container-item__header-right" },
   f9 = { class: "myOrders__container-item__footer" },
   R9 = { class: "myOrders__container-item__footer-top" },
   E9 = { class: "myOrders__container-item__footer-bottom" },
   I9 = q({
      __name: "index",
      setup(e) {
         const { t: s } = ie(),
            n = ae(),
            A = S({}),
            o = S({ pageNo: 1, list: [], totalCount: 0, totalPage: 0 });
         function i(p) {
            switch (p) {
               case 0:
                  return V("activity/PointMall", "orderPending");
               case 1:
                  return V("activity/PointMall", "orderSent");
               case 2:
                  return V("activity/PointMall", "orderCompleted");
               case 3:
                  return V("activity/PointMall", "orderCanceled");
               default:
                  return V("activity/PointMall", "orderPending");
            }
         }
         function c(p) {
            switch (p) {
               case 0:
                  return "0px 2px 1px #2AB27E";
               case 1:
                  return "0px 2px 1px #FB616080";
               case 2:
                  return "0px 2px 1px #E79319";
               case 3:
                  return "0px 2px 1px #8F9DD0";
               default:
                  return "0px 2px 1px #2AB27E";
            }
         }
         function u(p) {
            switch (p) {
               case 0:
                  return s("tobeDelivered");
               case 1:
                  return s("shipped");
               case 2:
                  return s("completed");
               case 3:
                  return s("canceled");
               default:
                  return s("tobeDelivered");
            }
         }
         function h() {
            n.back();
         }
         function d(p) {
            n.push({ name: "PointMall-OrderDetail", query: { orderNumber: p.orderNumber, orderType: p.orderType, orderId: p.orderId } });
         }
         return (p, C) => {
            const B = x("NavBar"),
               w = x("van-icon"),
               y = _e("lazy");
            return (
               _(),
               m("div", h9, [
                  U(B, { title: l(s)("myOrder"), "left-arrow": "", onClickLeft: h }, null, 8, ["title"]),
                  U(
                     Ne,
                     { distance: 300, api: l(Gy), list: o.value.list, "onUpdate:list": C[0] || (C[0] = b => (o.value.list = b)), "page-query": A.value, "onUpdate:pageQuery": C[1] || (C[1] = b => (A.value = b)), isAutoLoad: !0 },
                     {
                        content: j(() => [
                           (_(!0),
                           m(
                              Y,
                              null,
                              se(
                                 o.value.list,
                                 (b, v) => (
                                    _(),
                                    m("div", { class: "myOrders__container-item", key: v }, [
                                       t("div", { class: "myOrders__container-item__header", onClick: f => d(b) }, [t("div", b9, [P(t("img", C9, null, 512), [[y, b.productImg]]), t("div", null, [P(t("img", B9, null, 512), [[y, i(b.state)]]), t("span", { style: Ge({ textShadow: c(b.state) }) }, a(u(b.state)), 5)])]), t("div", y9, [t("h1", null, a(l(Ss)(b.productName, 80)), 1), t("div", null, [t("span", null, [U(w, { name: l(V)("activity/PointMall", "redDiamondSm") }, null, 8, ["name"]), t("span", null, a(b.integral / b.counts), 1)]), t("span", null, " x" + a(b.counts), 1)]), t("div", null, [t("span", null, a(l(s)("orderTotalAmount")), 1), t("span", null, a(b.integral), 1)])])], 8, w9),
                                       t("div", f9, [t("div", R9, [t("span", null, a(l(s)("orderNo")), 1), t("span", null, a(b.orderNumber), 1), U(w, { onClick: () => l(fs)(b.orderNumber), name: l(V)("activity/PointMall", "copy") }, null, 8, ["onClick", "name"])]), t("div", E9, [t("span", null, a(l(s)("ordertime")), 1), t("span", null, a(b.addTime), 1)])]),
                                    ])
                                 ),
                              ),
                              128,
                           )),
                        ]),
                        _: 1,
                     },
                     8,
                     ["api", "list", "page-query"],
                  ),
               ])
            );
         };
      },
   });
const S9 = $(I9, [["__scopeId", "data-v-8f5b7b0f"]]),
   D9 = Object.freeze(Object.defineProperty({ __proto__: null, default: S9 }, Symbol.toStringTag, { value: "Module" })),
   ze = Le.global.t;
function G9(e) {
   switch (e) {
      case 0:
         return V("activity/PointMall", "orderPendingImg");
      case 1:
         return V("activity/PointMall", "orderSentImg");
      case 2:
         return V("activity/PointMall", "orderCompletedImg");
      case 3:
         return V("activity/PointMall", "orderCanceledImg");
      default:
         return V("activity/PointMall", "orderPendingImg");
   }
}
function us(e) {
   switch (e) {
      case 0:
         return ze("tobeDelivered");
      case 1:
         return ze("shipped");
      case 2:
         return ze("completed");
      case 3:
         return ze("canceled");
      default:
         return ze("tobeDelivered");
   }
}
const U9 = { class: "orderDetail__container" },
   M9 = { class: "orderDetail__container-header" },
   L9 = { class: "orderDetail__container-header__content" },
   k9 = { key: 0 },
   T9 = { key: 1 },
   Q9 = { key: 2 },
   V9 = { key: 3 },
   O9 = ["src"],
   N9 = { class: "orderDetail__container-content" },
   F9 = { class: "orderDetail__container-content__itemDetail" },
   x9 = { class: "orderDetail__container-content__itemDetail-header" },
   P9 = { class: "orderDetail__container-content__itemDetail-body" },
   H9 = { class: "orderDetail__container-content__itemDetail-body__top" },
   Y9 = { alt: "" },
   W9 = { class: "colorf95959" },
   K9 = { class: "orderDetail__container-content__itemDetail-body__footer" },
   X9 = { class: "myOrders__container-item__footer-bottom" },
   J9 = { class: "orderDetail__container-content__address" },
   z9 = { class: "orderDetail__container-content__address-header" },
   j9 = { key: 0, class: "orderDetail__container-content__address-body" },
   Z9 = { class: "orderDetail__container-content__orderDetail" },
   q9 = { class: "orderDetail__container-content__orderDetail-header" },
   $9 = { class: "orderDetail__container-content__orderDetail-body" },
   eD = { class: "orderDetail__container-content__orderDetail-body__item" },
   tD = { class: "orderDetail__container-content__orderDetail-body__item" },
   sD = { class: "orderDetail__container-content__btn" },
   nD = { style: { width: "100%" }, alt: "" },
   aD = q({
      __name: "index",
      setup(e) {
         const s = ae();
         me(), tt();
         const n = S(),
            A = S({}),
            o = S(!1),
            i = S(!1),
            c = He(),
            u = async () => {
               const b = c.query.orderType || "",
                  v = c.query.orderId || "",
                  f = await O(xs({ orderId: Number(v), orderType: Number(b) }));
               f && (n.value = f.data);
            },
            h = S(!1);
         function d(b) {
            return b ? "orderCancelSuccess" : "orderCancelWarn";
         }
         const p = Q(() => c.query.orderType !== "2");
         function C() {
            A.value.state !== 3 && (o.value = !0);
         }
         function B() {
            s.back();
         }
         async function w() {
            A.value.state === 0 &&
               Ly({ orderNumber: A.value.orderNumber })
                  .then(b => {
                     b.code == 0 ? ((h.value = !0), (A.value.state = 1), (i.value = !0), y()) : ((h.value = !1), (A.value.state = 1), (i.value = !0), y()), (o.value = !1);
                  })
                  .catch(b => {
                     Ue(b);
                  }),
               (o.value = !1);
         }
         async function y() {
            const b = c.query.orderNumber || "",
               v = c.query.orderType || "",
               f = c.query.orderId || "",
               R = await O(Uy({ orderNumber: b, orderId: Number(f), orderType: Number(v) }));
            R && (A.value = R.data), u();
         }
         return (
            ce(async () => {
               y();
            }),
            (b, v) => {
               var M, ee, N, G, k, T;
               const f = x("NavBar"),
                  R = x("van-icon"),
                  L = _e("lazy");
               return (
                  _(),
                  m("div", U9, [
                     U(f, { title: b.$t("myOrder"), backgroundColor: "linear-gradient(90deg, #8deef5 0%, #259aa3 100%)", placeholder: !1, "left-arrow": "", onClickLeft: B }, null, 8, ["title"]),
                     t("div", M9, [t("div", L9, [t("div", null, [t("h1", null, a(l(us)(A.value.state)), 1), A.value.state === 3 ? (_(), m("p", k9, a(b.$t("ordercancle")), 1)) : A.value.state === 1 ? (_(), m("p", T9, a(b.$t("orderShipped")), 1)) : A.value.state === 2 ? (_(), m("p", Q9, a(b.$t("orderCompleted")), 1)) : A.value.state === 0 ? (_(), m("p", V9, a(b.$t("descActivity4")), 1)) : H("", !0)]), t("img", { src: l(G9)(A.value.state), alt: "" }, null, 8, O9)])]),
                     t("div", N9, [
                        t("div", F9, [
                           t("div", x9, [U(R, { name: l(V)("activity/PointMall", "orderItemDetail") }, null, 8, ["name"]), t("h1", null, a(b.$t("productDetail")), 1)]),
                           t("div", P9, [t("div", H9, [t("div", null, [P(t("img", Y9, null, 512), [[L, A.value.productImg]])]), t("div", null, [t("h1", null, a(A.value.productName), 1), t("div", null, [t("span", null, [U(R, { name: l(V)("activity/PointMall", "redDiamondSm") }, null, 8, ["name"]), t("span", null, a(A.value.integral / A.value.counts || 0), 1)]), t("span", null, " x" + a(A.value.counts), 1)]), t("div", null, [t("span", null, a(b.$t("orderTotalAmount")), 1), t("span", W9, [U(R, { name: l(V)("activity/PointMall", "redDiamondSm") }, null, 8, ["name"]), K("   " + a(A.value.integral), 1)])])])]), t("div", K9, [t("div", null, [t("span", null, a(b.$t("orderNo")), 1), t("span", null, a(A.value.orderNumber), 1), U(R, { onClick: v[0] || (v[0] = () => l(fs)(A.value.orderNumber)), name: l(V)("activity/PointMall", "copy") }, null, 8, ["name"])]), t("div", X9, [t("span", null, a(b.$t("ordertime")), 1), t("span", null, a(A.value.addTime), 1)])])]),
                        ]),
                        t("div", J9, [t("div", z9, [U(R, { name: "location" }), t("h1", null, a(b.$t("recipientAddr")), 1)]), n.value ? (_(), m("div", j9, [t("div", null, a((M = n.value) == null ? void 0 : M.name), 1), t("div", null, "+" + a((N = n.value) != null && N.phone.startsWith((ee = n.value) == null ? void 0 : ee.area) ? "" : (G = n.value) == null ? void 0 : G.area) + a((k = n.value) == null ? void 0 : k.phone), 1), t("p", null, a((T = n.value) == null ? void 0 : T.address), 1)])) : H("", !0)]),
                        t("div", Z9, [t("div", q9, [U(R, { name: l(V)("activity/PointMall", "orderItemDetail") }, null, 8, ["name"]), t("h1", null, a(b.$t("orderDetail")), 1)]), t("div", $9, [t("div", eD, [t("span", null, a(A.value.addTime), 1), t("span", null, a(b.$t("orderSuccess")), 1)]), t("div", tD, [t("span", null, a(A.value.upTime), 1), t("span", null, a(l(us)(A.value.state)), 1)])])]),
                        t("div", sD, [A.value.state !== 3 && A.value.state !== 1 && A.value.state !== 2 && p.value ? (_(), m("div", { key: 0, onClick: C, class: "orderDetail__container-content__btn-cancel" }, a(b.$t("concelOrder")), 1)) : H("", !0), t("div", { onClick: v[1] || (v[1] = F => l(s).push({ name: "CustomerService" })) }, a(b.$t("contactServicer")), 1)]),
                     ]),
                     U($e, { show: o.value, "onUpdate:show": v[2] || (v[2] = F => (o.value = F)), cancelText: b.$t("cancel"), confirmText: b.$t("confirm"), onConfirm: w }, { title: j(() => [t("h1", null, a(b.$t("tipWeatherToCancel")), 1)]), _: 1 }, 8, ["show", "cancelText", "confirmText"]),
                     U($e, { show: i.value, "onUpdate:show": v[3] || (v[3] = F => (i.value = F)), onConfirm: v[4] || (v[4] = F => (i.value = !1)), confirmText: b.$t("confirm"), "show-cancel-btn": !1, title: h.value ? b.$t("orderCanceled") : b.$t("tipUnableToConcel") }, { header: j(() => [P(t("img", nD, null, 512), [[L, l(V)("activity/PointMall", d(h.value))]])]), _: 1 }, 8, ["show", "confirmText", "title"]),
                  ])
               );
            }
         );
      },
   });
const AD = $(aD, [["__scopeId", "data-v-27b2391b"]]),
   oD = Object.freeze(Object.defineProperty({ __proto__: null, default: AD }, Symbol.toStringTag, { value: "Module" })),
   iD = { class: "receiveLottery__container" },
   lD = { class: "receiveLottery__container-hero" },
   cD = { class: "receiveLottery__container-hero__left" },
   gD = { class: "receiveLottery__container-hero__right" },
   rD = { class: "receiveLottery__container-note" },
   dD = { key: 1, class: "receiveLottery__container-empty" },
   pD = { class: "receiveLottery__container-address" },
   _D = { class: "receiveLottery__container-address__header" },
   uD = { class: "receiveLottery__container-address__body-content" },
   mD = { class: "receiveLottery__container-address__body-footer" },
   vD = ["onClick"],
   hD = { key: 1, class: "receiveLottery__container-address__empty" },
   wD = { class: "dialog__content-top" },
   bD = { class: "van-dialog__content-title" },
   CD = { class: "van-dialog__content-note" },
   BD = ["src"],
   yD = q({
      __name: "index",
      setup(e) {
         const s = ae(),
            n = He(),
            { getPointLotteryInfo: A, getAddress: o, setDefault: i, delAddress: c, address: u, list: h, loading: d, pointInfo: p } = at(),
            C = Q(() => {
               var f, R, L, M, ee;
               return [(f = p.value) == null ? void 0 : f.img_Five, (R = p.value) == null ? void 0 : R.img_Four, (L = p.value) == null ? void 0 : L.img_One, (M = p.value) == null ? void 0 : M.img_Three, (ee = p.value) == null ? void 0 : ee.img_Two].filter(Boolean);
            }),
            B = S(!1);
         async function w() {
            s.push({ path: "/activity/pointMall/myorders" });
         }
         function y() {
            s.back();
         }
         const b = f => {
            const R = u.value[0] || {};
            f === "edit" ? s.push({ path: "/activity/pointMall/addAddress", query: { ...R, type: "edit", form: "lotteryPoint" } }) : s.push({ path: "/activity/pointMall/addAddress", query: { type: "add", form: "lotteryPoint" } });
         };
         async function v() {
            if (d.value) return;
            d.value = !0;
            const f = n.query.orderId,
               R = parseInt(f, 10),
               L = u.value.find(ee => ee.defaultAddress == !0) || u.value[0],
               M = await O(Ny({ orderId: R, userAddressId: L.addressId }));
            (d.value = !1), M && (B.value = !0);
         }
         return (
            ce(async () => {
               await Promise.all([o(), A()]);
            }),
            (f, R) => {
               const L = x("NavBar"),
                  M = x("van-icon"),
                  ee = x("van-button"),
                  N = x("van-dialog"),
                  G = _e("lazy");
               return (
                  _(),
                  m("div", iD, [
                     U(L, { title: f.$t("claimPrize"), fixed: "", "left-arrow": "", onClickLeft: y }, null, 8, ["title"]),
                     l(p) ? (_(), m(Y, { key: 0 }, [t("div", lD, [t("div", cD, [P(t("img", null, null, 512), [[G, C.value[0]]]), t("span", null, a(f.$t("winTheLottery")), 1), t("span", null, a(f.$t("winTheLottery")), 1)]), t("div", gD, [t("h1", null, a(l(p).name), 1), t("div", null, a(f.$t("betsNo")) + " " + a(l(p).issueNumber), 1), t("div", null, [P(t("img", null, null, 512), [[G, l(V)("activity/PointMall", "ticket")]]), K(" " + a(l(p).winningNumber), 1)])])]), t("div", rD, [P(t("img", null, null, 512), [[G, l(V)("activity/PointMall", "notice")]]), t("span", null, a(f.$t("descActivity5")) + "!", 1)])], 64)) : (_(), m("div", dD, [U(ke, null, { default: j(() => [t("p", null, a(f.$t("descActivity6")), 1)]), _: 1 })])),
                     t("div", pD, [
                        t("div", _D, [U(M, { name: "location" }), t("h1", null, a(f.$t("recipientAddr")), 1)]),
                        l(u).length
                           ? (_(!0),
                             m(
                                Y,
                                { key: 0 },
                                se(l(u), (k, T) => (_(), m("div", { class: "receiveLottery__container-address__body", key: T }, [t("div", uD, [t("div", null, a(k.name), 1), t("div", null, "+" + a(k.area) + a(k.phone), 1), t("div", null, a(k.address), 1)]), t("div", mD, [t("div", { onClick: R[0] || (R[0] = F => b("edit")) }, [P(t("img", null, null, 512), [[G, l(V)("activity/PointMall", "editDefault")]]), K(" " + a(f.$t("edit")), 1)]), t("div", { onClick: F => l(c)(k.addressId) }, [P(t("img", null, null, 512), [[G, l(V)("activity/PointMall", "recycleBin")]]), K(" " + a(f.$t("delete")), 1)], 8, vD)])]))),
                                128,
                             ))
                           : (_(), m("div", hD, [P(t("img", { onClick: R[1] || (R[1] = k => b("add")) }, null, 512), [[G, l(V)("activity/PointMall", "addAddress")]]), t("p", null, a(f.$t("addrecipientAddr")), 1)])),
                     ]),
                     U(ee, { loading: l(d), disabled: !l(u).length, "loading-text": f.$t("receive"), class: oe(["receiveLottery__container-receiverBtn", { disabled: !l(u).length }]), onClick: v }, { default: j(() => [K(a(f.$t("receive")), 1)]), _: 1 }, 8, ["loading", "disabled", "loading-text", "class"]),
                     U(N, { show: B.value, "onUpdate:show": R[3] || (R[3] = k => (B.value = k)), "show-confirm-button": !1, "z-index": "3100" }, { default: j(() => [P(t("img", wD, null, 512), [[G, l(V)("activity/PointMall", "successfullyReceived")]]), t("div", bD, a(f.$t("receiveSuccess")), 1), t("div", CD, a(f.$t("descActivity7")), 1), t("div", { class: "van-dialog__content-btn", onClick: w }, a(f.$t("checkOrder")), 1), t("img", { src: l(V)("activity/PointMall", "close"), class: "dialog__content-bottom", onClick: R[2] || (R[2] = k => (B.value = !1)) }, null, 8, BD)]), _: 1 }, 8, ["show"]),
                  ])
               );
            }
         );
      },
   });
const fD = $(yD, [["__scopeId", "data-v-e18e66f9"]]),
   RD = Object.freeze(Object.defineProperty({ __proto__: null, default: fD }, Symbol.toStringTag, { value: "Module" })),
   ED = { class: "pointMallRecord__container" },
   ID = { class: "navbar__content-right__buttons" },
   SD = { class: "pointMallRecord__container-header" },
   DD = { class: "points-date" },
   GD = { class: "pointMallRecord__container-header__content" },
   UD = { class: "pointMallRecord__container-header__content-left" },
   MD = { alt: "" },
   LD = { class: "pointMallRecord__container-header__content-right" },
   kD = { alt: "" },
   TD = { key: 0, class: "pointMallRecord__container-list" },
   QD = { class: "pointMallRecord__container-list__item-left" },
   VD = { class: "pointMallRecord__container-list__item-right" },
   OD = { key: 0 },
   ND = { key: 1 },
   FD = q({
      __name: "index",
      setup(e) {
         const s = S(!1),
            { t: n } = ie(),
            A = S(),
            o = ae(),
            { minDate: i, maxDate: c } = VB(),
            u = localStorage.getItem("language"),
            { value: h } = QB({ status: 3 });
         let d = S(`${h[0]}${n("year")}${h[1]}${n("month")}`);
         const p = ve({ startDate: pe(i).format("YYYY-MM-DD HH:mm:ss"), endDate: pe(c).format("YYYY-MM-DD HH:mm:ss") });
         p.startDate = `${h[0]}-${h[1]}-01 00:00:00`;
         const C = new Date(h[0], h[1], 0).getDate();
         p.endDate = `${h[0]}-${h[1]}-${C} 23:59:59`;
         const B = ve({
               show: !1,
               actions: [
                  { name: n("pointsAllRecords"), value: -1 },
                  { name: n("pointsBets"), value: 0 },
                  { name: n("pointsRedeem"), value: 3 },
                  { name: n("pointsCanceled"), value: 5 },
                  { name: n("wealName1"), value: 6 },
                  { name: n("wealName2"), value: 7 },
               ],
               selected: { name: "", value: 0 },
            }),
            w = Q(() => b.value.filter(T => T.type !== 3).reduce((T, F) => T + F.integral, 0)),
            y = Q(() => b.value.filter(T => T.type === 3).reduce((T, F) => T + F.integral, 0)),
            b = S([]);
         function v() {
            o.back();
         }
         const f = S(h);
         function R(T, F) {
            if (T === "year")
               switch (u) {
                  case "vi":
                     F.text = n("year") + " " + F.text;
                     break;
                  case "en":
                     F.text = n("year") + " " + F.text;
                     break;
                  default:
                     F.text += n("year");
               }
            if (T === "month")
               switch (u) {
                  case "vi":
                     F.text = n("month") + " " + F.text;
                     break;
                  case "en":
                     F.text = n("month") + " " + F.text;
                     break;
                  default:
                     F.text += n("month");
               }
            return F;
         }
         const L = () => {
               s.value = !1;
            },
            M = ({ selectedOptions: T }) => {
               s.value = !1;
               let [{ text: F }, { text: ne }] = T;
               F.slice(0, -1), ne.slice(0, -1), ne.startsWith("0") && (ne = ne.replace("0", "")), (d.value = F + ne);
               const ge = new Date(new Date().getFullYear(), T[1].value, 0).getDate();
               (p.startDate = `${T[0].value}-${T[1].value}-01 00:00:00`), (p.endDate = `${T[0].value}-${T[1].value}-${ge} 23:59:59`), (k.startDate = p.startDate), (k.endDate = p.endDate), A.value.resetRefresh();
            };
         function ee() {
            B.show = !0;
         }
         function N(T) {
            (B.selected = T), (k.type = T.value), (B.show = !1), A.value.resetRefresh();
         }
         function G(T) {
            const ge = B.actions.filter(E => E.value === T).map(E => E.name)[0];
            return ge ? ge.replace(/[\[\]"]/g, "") : "";
         }
         const k = ve({ type: -1, startDate: p.startDate, endDate: p.endDate });
         return (
            ce(() => {
               A.value.resetRefresh();
            }),
            (T, F) => {
               const ne = x("NavBar"),
                  ge = x("van-date-picker"),
                  D = x("van-popup"),
                  E = x("van-action-sheet"),
                  X = _e("lazy");
               return (
                  _(),
                  m(
                     Y,
                     null,
                     [
                        t("div", ED, [
                           U(ne, { title: l(n)("pointsRecord"), "left-arrow": "", onClickLeft: v }, { right: j(() => [t("div", ID, [P(t("img", { alt: "", onClick: ee }, null, 512), [[X, l(V)("activity/PointMall", "pointsIcon")]])])]), _: 1 }, 8, ["title"]),
                           t("div", SD, [t("div", DD, [t("div", { class: "pointMallRecord__container-header-date", onClick: F[0] || (F[0] = J => (s.value = !0)) }, [t("div", null, a(l(d)), 1), P(t("img", null, null, 512), [[X, l(V)("main", "dropDown")]])])]), t("div", GD, [t("div", UD, [t("div", null, a(w.value.toFixed(2)), 1), t("div", null, [P(t("img", MD, null, 512), [[X, l(V)("activity/PointMall", "income")]]), t("span", null, a(l(n)("pointsIncome")), 1)])]), t("div", LD, [t("div", null, a(y.value.toFixed(2)), 1), t("div", null, [P(t("img", kD, null, 512), [[X, l(V)("activity/PointMall", "output")]]), t("span", null, a(l(n)("payout")), 1)])])])]),
                           U(
                              Zs,
                              { api: l(Dy), list: b.value, "onUpdate:list": F[1] || (F[1] = J => (b.value = J)), ref_key: "listRef", ref: A, pageQuery: k },
                              {
                                 content: j(() => [
                                    b.value.length > 0
                                       ? (_(),
                                         m("div", TD, [
                                            (_(!0),
                                            m(
                                               Y,
                                               null,
                                               se(b.value, (J, W) => (_(), m("div", { class: "pointMallRecord__container-list__item", key: W }, [t("div", QD, [t("div", null, a(G(J.type)), 1), t("div", null, a(J.addTime), 1)]), t("div", VD, [t("div", { class: oe({ color2fb192: J.integral && J.type !== 3, colorf95959: J.integral && J.type === 3 }) }, [J.integral && (J.type === 3 || J.type === 4) ? (_(), m("span", OD, "-")) : (_(), m("span", ND, "+")), K(a(J.integral.toFixed(2)), 1)], 2)])]))),
                                               128,
                                            )),
                                         ]))
                                       : H("", !0),
                                 ]),
                                 _: 1,
                              },
                              8,
                              ["api", "list", "pageQuery"],
                           ),
                        ]),
                        U(D, { show: s.value, "onUpdate:show": F[3] || (F[3] = J => (s.value = J)), round: "", position: "bottom" }, { default: j(() => [U(ge, { modelValue: f.value, "onUpdate:modelValue": F[2] || (F[2] = J => (f.value = J)), title: l(n)("pickDate"), "columns-type": ["year", "month"], formatter: R, onCancel: L, onConfirm: M }, null, 8, ["modelValue", "title"])]), _: 1 }, 8, ["show"]),
                        U(E, { show: B.show, "onUpdate:show": F[4] || (F[4] = J => (B.show = J)), actions: B.actions, onSelect: N }, null, 8, ["show", "actions"]),
                     ],
                     64,
                  )
               );
            }
         );
      },
   });
const xD = $(FD, [["__scopeId", "data-v-2c413ae4"]]),
   PD = Object.freeze(Object.defineProperty({ __proto__: null, default: xD }, Symbol.toStringTag, { value: "Module" })),
   HD = { class: "redeem__container" },
   YD = { class: "redeem__container-hero" },
   WD = { class: "redeem__container-detail" },
   KD = { class: "redeem__container-detail__description" },
   XD = { class: "redeem__container-detail__description-header" },
   JD = { class: "redeem__container-detail__description-body" },
   zD = { class: "redeem__container-detail__description-body__left" },
   jD = { class: "redeem__container-detail__description-body__right" },
   ZD = { class: "circleTxt" },
   qD = { class: "nowrap" },
   $D = { class: "redeem__container-detail__description-footer" },
   eG = { class: "redeem__container-detail__redeem-content" },
   tG = { class: "redeem__container-detail__redeem-content__amount" },
   sG = ["placeholder", "pattern"],
   nG = { class: "redeem__container-detail__redeem-insufficient" },
   aG = { key: 0 },
   AG = { key: 1 },
   oG = { key: 2 },
   iG = { class: "redeem__container-detail__notes" },
   lG = { class: "redeem__container-button" },
   cG = { key: 0, class: "redeem__container-button__left" },
   gG = ["src"],
   rG = { class: "redeem__container-actionSheet" },
   dG = { class: "redeem__container-actionSheet__note" },
   pG = { class: "redeem__container-actionSheet__item" },
   _G = { class: "redeem__container-actionSheet__item-img" },
   uG = { class: "redeem__container-actionSheet__item-desc" },
   mG = { class: "redeem__container-actionSheet__cost" },
   vG = { class: "redeem__container-actionSheet__address" },
   hG = { class: "redeem__container-actionSheet__address-header" },
   wG = { alt: "" },
   bG = { key: 0 },
   CG = { key: 0, class: "redeem__container-actionSheet__address-default" },
   BG = { class: "redeem__container-actionSheet__address-default__name" },
   yG = { class: "redeem__container-actionSheet__address-default__phone" },
   fG = { key: 1 },
   RG = { class: "addAddress__container-forum__item" },
   EG = { class: "input_model" },
   IG = { key: 0 },
   SG = ["onUpdate:modelValue", "placeholder", "maxlength"],
   DG = ["placeholder"],
   GG = { alt: "" },
   UG = q({
      __name: "index",
      setup(e) {
         const { t: s } = ie(),
            n = [
               { title: s("recipientName"), icon: "lotteryReceiver", value: "userName", placeholder: s("plEnterrecipientName"), maxlength: 20 },
               { title: s("contactInfo"), icon: "lotteryContact", value: "phoneNumber", placeholder: s("plEntercontactInfo"), maxlength: 11 },
               { title: s("shippingAddr"), icon: "lotteryCity", value: "address", placeholder: s("plEnterCity"), maxlength: 150 },
            ];
         let A = ve({ userName: "", phoneNumber: "", area: "66", address: "" });
         const o = me(),
            i = tt(),
            c = S(!1),
            u = ae(),
            h = S(!1),
            d = S(1),
            p = Q(() => (B.value.stock > 99 ? 99 : B.value.stock));
         S(!1);
         const C = S({}),
            B = S({}),
            w = S(),
            y = Q(() => B.value.integral * d.value);
         function b(D) {
            const E = D.target,
               X = /[\u4e00-\u9fa5]/g;
            E.value = E.value.replace(X, "");
         }
         const v = Q(() => C.value.integral < y.value || B.value.stock === 0 || C.value.integral === void 0 || C.value.integral === 0 || d.value > 99 || !Number.isInteger(d.value)),
            f = Q(() => `^(?:[1-9]|[1-9]\\d|${p})$`),
            R = Q(() => {
               const D = (B.value.grandTotal / (B.value.stock + B.value.grandTotal)) * 100;
               return B.value.stock > 0 ? Math.floor(100 - D).toFixed(0) : 0;
            });
         function L(D) {
            B.value.stock !== 0 && (D === 0 ? d.value > 1 && (d.value -= 1) : (d.value += 1));
         }
         function M() {
            (d.value = Number(d.value.toString().replace(/\D/g, ""))), C.value.integral < y.value && De(s("quantityExceeded"));
         }
         const ee = D => {
            D === "edit" ? u.push({ path: "/activity/pointMall/addAddress", query: { ...w.value, type: "edit" } }) : u.push({ path: "/activity/pointMall/addAddress", query: { type: "add" } });
         };
         function N() {
            u.push({ path: "/activity/pointMall/rules" });
         }
         async function G() {
            u.push({ path: "/activity/pointMall/myorders" });
         }
         function k() {
            u.back();
         }
         function T(D) {
            let E = "";
            const { name: X, area: J, phone: W, address: le } = D;
            (!X || (X == null ? void 0 : X.trim()) === "") && (E += s("phEnterName"));
            const te = "" + J + W;
            return (
               (te.length < 10 || te.length > 14) &&
                  (E &&
                     (E += `
`),
                  (E += s("wrongTel"))),
               (!le || (le == null ? void 0 : le.trim()) === "") &&
                  (E &&
                     (E += `
`),
                  (E += s("addressEmpty"))),
               E ? (Rn({ message: E }), !1) : !0
            );
         }
         async function F() {
            var J, W, le, te;
            const D = i.getRedeemItem,
               E = { name: w.value ? ((J = w.value) == null ? void 0 : J.name) : A.userName, address: w.value ? ((W = w.value) == null ? void 0 : W.address) : A.address, phone: w.value ? ((le = w.value) == null ? void 0 : le.phone) : A.phoneNumber, counts: d.value, area: w.value ? ((te = w.value) == null ? void 0 : te.area) : A.area.replace("+", ""), productid: D.productID };
            if (!T(E)) return;
            (await O(My(E))) && (Ce(s("redeemDialogDesc1")), (h.value = !1), (c.value = !0)), ge();
         }
         const ne = async () => {
            const D = await O(xs());
            D ? (w.value = D.data) : (w.value = void 0);
         };
         async function ge() {
            ne();
            const D = await Vs({ signature: "string" });
            o.setUserInfo(D == null ? void 0 : D.data), (C.value = o.getUserInfo), (B.value = i.getRedeemItem);
         }
         return (
            ce(async () => {
               ge();
            }),
            (D, E) => {
               const X = x("NavBar"),
                  J = x("van-circle"),
                  W = x("van-divider"),
                  le = x("van-icon"),
                  te = x("van-action-sheet"),
                  z = _e("lazy");
               return (
                  _(),
                  m("div", HD, [
                     U(X, { title: l(s)("exchangeGoods"), "left-arrow": "", onClickLeft: k }, null, 8, ["title"]),
                     t("div", YD, [P(t("img", null, null, 512), [[z, B.value.productImg]])]),
                     t("div", WD, [
                        t("div", KD, [t("h1", XD, a(B.value.productName), 1), t("div", JD, [t("div", zD, [t("div", null, [P(t("img", null, null, 512), [[z, l(V)("activity/PointMall", "redDiamondSm")]]), t("span", null, a(B.value.integral), 1)]), t("div", null, [t("span", null, a(l(s)("exchanged")), 1), t("span", null, a(B.value.grandTotal), 1)])]), t("div", jD, [U(J, { "current-rate": R.value, "onUpdate:currentRate": E[0] || (E[0] = Z => (R.value = Z)), speed: 100, color: "#A4EBF3", "layer-color": "#fff", "stroke-width": "30", "stroke-linecap": "butt", rate: 100, size: "70px" }, { default: j(() => [t("div", ZD, [t("span", qD, a(l(s)("goodsLeft")), 1), t("span", null, a(R.value) + "%", 1)])]), _: 1 }, 8, ["current-rate"])])]), U(W, { dashed: "" }), t("div", $D, [P(t("img", null, null, 512), [[z, l(V)("activity/PointMall", "verified")]]), K(" " + a(l(s)("authenticIdentification")), 1)])]),
                        t(
                           "div",
                           { class: oe(["redeem__container-detail__redeem", { active: v.value }]) },
                           [
                              t("div", eG, [t("span", null, a(l(s)("exchangeNo")), 1), t("div", tG, [t("span", null, [P(t("img", { onClick: E[1] || (E[1] = Z => L(0)) }, null, 512), [[z, l(V)("activity/PointMall", "minus")]])]), P(t("input", { type: "digit", step: "1", placeholder: l(s)("plsEnterQuantity"), max: "maxAmount", min: "1", disabled: "", onInput: E[2] || (E[2] = Z => M()), pattern: f.value, "onUpdate:modelValue": E[3] || (E[3] = Z => (d.value = Z)) }, null, 40, sG), [[xe, d.value]]), t("span", null, [P(t("img", { onClick: E[4] || (E[4] = Z => L(1)) }, null, 512), [[z, l(V)("activity/PointMall", "plus")]])])])]),
                              t("div", nG, [C.value.integral < y.value ? (_(), m("div", aG, a(l(s)("descRedeem1")) + " " + a(C.value.integral), 1)) : B.value.stock === 0 ? (_(), m("div", AG, a(l(s)("code241")), 1)) : (_(), m("div", oG, a(l(s)("noRedeemableItems")), 1)), P(t("div", { onClick: N }, [K(a(l(s)("descRedeem2")), 1), U(le, { name: "arrow" }), U(le, { name: "arrow" })], 512), [[bs, d.value > p.value]])]),
                           ],
                           2,
                        ),
                        t("div", iG, [t("h1", null, a(l(s)("descRedeem3")), 1), t("li", null, a(l(s)("descRedeem4")), 1), t("li", null, a(l(s)("descRedeem5")), 1), t("li", null, a(l(s)("descRedeem6")), 1), t("li", null, a(l(s)("descRedeem7")), 1)]),
                     ]),
                     t("div", lG, [h.value ? (_(), m("div", { key: 1, class: "redeem__container-button__cancel", onClick: E[5] || (E[5] = Z => (h.value = !1)) }, a(l(s)("cancel")), 1)) : (_(), m("div", cG, [t("div", null, [t("span", null, a(l(s)("consumptionPoints")), 1)]), t("div", null, [t("img", { src: l(V)("activity/PointMall", "redDiamondSm"), alt: "" }, null, 8, gG), t("span", null, a(y.value), 1)])])), t("div", { class: oe(["redeem__container-button__right", { disabled: v.value }]) }, [h.value ? (_(), m("span", { key: 1, onClick: F }, a(l(s)("exchangeConfirm")), 1)) : (_(), m("span", { key: 0, onClick: E[6] || (E[6] = Z => (h.value = !0)) }, a(l(s)("exchange")), 1))], 2)]),
                     U(
                        te,
                        { show: h.value, "onUpdate:show": E[12] || (E[12] = Z => (h.value = Z)), "z-index": "2000", "close-on-click-overlay": !0, closeable: !1, title: l(s)("exchange") },
                        {
                           default: j(() => {
                              var Z, we, Xe, Zt;
                              return [
                                 t("div", rG, [
                                    t("div", dG, [U(le, { name: "warning-o" }), t("p", null, a(l(s)("descRedeem8")), 1)]),
                                    t("div", pG, [t("div", _G, [P(t("img", null, null, 512), [[z, B.value.productImg]])]), t("p", uG, a(B.value.productName), 1)]),
                                    t("div", mG, [K(a(l(s)("comsumption")) + " ", 1), t("span", null, a(y.value) + ".00 ", 1), K(a(l(s)("pointsExchange")), 1)]),
                                    t("div", vG, [
                                       t("div", hG, [U(le, { name: "location" }), t("span", null, a(l(s)("recipientAddr")), 1), w.value ? (_(), m("div", { key: 0, onClick: E[7] || (E[7] = Se => ee("edit")) }, [P(t("img", wG, null, 512), [[z, l(V)("activity/PointMall", "edit")]]), t("span", null, a(l(s)("edit")), 1)])) : H("", !0)]),
                                       U(W),
                                       w.value
                                          ? (_(), m("div", bG, [(Z = w.value) != null && Z.name ? (_(), m("div", CG, [t("div", BG, a((we = w.value) == null ? void 0 : we.name), 1), t("div", yG, a("+" + ((Xe = w.value) == null ? void 0 : Xe.phone)), 1), t("p", null, a((Zt = w.value) == null ? void 0 : Zt.address), 1)])) : (_(), m("div", { key: 1, class: "redeem__container-actionSheet__address-empty", onClick: E[8] || (E[8] = Se => ee("add")) }, [P(t("img", null, null, 512), [[z, l(V)("activity/PointMall", "addAddress")]]), t("p", null, a(l(s)("addrecipientAddr")), 1)]))]))
                                          : (_(),
                                            m("div", fG, [
                                               (_(),
                                               m(
                                                  Y,
                                                  null,
                                                  se(n, (Se, it) => t("div", RG, [t("h1", null, [U(le, { name: it < 2 ? l(V)("activity/PointMall", Se.icon) : "location" }, null, 8, ["name"]), K(" " + a(Se.title), 1)]), t("div", EG, [it === 1 ? (_(), m("div", IG, [U(zs, { typeValue: l(A).area, "onUpdate:typeValue": E[9] || (E[9] = Te => (l(A).area = Te)), onChangeT: E[10] || (E[10] = Te => (l(A).area = Te)) }, null, 8, ["typeValue"])])) : H("", !0), it !== 2 ? P((_(), m("input", { key: 1, type: "text", "onUpdate:modelValue": Te => (l(A)[Se.value] = Te), placeholder: Se.placeholder, maxlength: Se.maxlength, onInput: b }, null, 40, SG)), [[xe, l(A)[Se.value]]]) : H("", !0)]), it === 2 ? P((_(), m("textarea", { key: 0, "onUpdate:modelValue": E[11] || (E[11] = Te => (l(A).address = Te)), placeholder: l(s)("phEnterDetailedAddr"), maxlength: "150" }, null, 8, DG)), [[xe, l(A).address]]) : H("", !0)])),
                                                  64,
                                               )),
                                            ])),
                                    ]),
                                 ]),
                              ];
                           }),
                           _: 1,
                        },
                        8,
                        ["show", "title"],
                     ),
                     U($e, { show: c.value, "onUpdate:show": E[13] || (E[13] = Z => (c.value = Z)), onConfirm: G, confirmText: l(s)("redeemDialogDesc0"), cancelText: l(s)("cancel") }, { header: j(() => [P(t("img", GG, null, 512), [[z, l(V)("main/Laundry", "promptImg")]])]), title: j(() => [t("h1", null, a(l(s)("redeemDialogDesc1")), 1)]), content: j(() => [K(a(l(s)("redeemDialogDesc2")), 1)]), _: 1 }, 8, ["show", "confirmText", "cancelText"]),
                  ])
               );
            }
         );
      },
   });
const MG = $(UG, [["__scopeId", "data-v-0feb1b58"]]),
   LG = Object.freeze(Object.defineProperty({ __proto__: null, default: MG }, Symbol.toStringTag, { value: "Module" })),
   kG = { class: "pointMall-rule__container content" },
   TG = { class: "pointMall-rule__container-pointRule" },
   QG = { class: "pointMall-rule__container-pointRule__title" },
   VG = { class: "pointMall-rule__container-pointRule__body" },
   OG = q({
      __name: "index",
      setup(e) {
         const { t: s } = ie(),
            n = ae(),
            A = ve([
               { title: s("betAmounts"), body: [] },
               { title: s("rewordPercent"), body: [] },
            ]),
            o = async () => {
               const u = await O(Ty());
               u && u.data.map(d => (A[0].body.push(d.lotteryAmount + ""), A[1].body.push((d.exchange_Rate * 1e3 * 100) / 1e3 + "%"), d));
            };
         ce(() => {
            o();
         });
         function i() {
            n.back();
         }
         const c = () => {
            sessionStorage.setItem("clickedGameType", "lottery"), n.push({ path: "/" });
         };
         return (u, h) => {
            const d = x("NavBar"),
               p = x("van-icon");
            return (
               _(),
               m("div", kG, [
                  U(d, { title: l(s)("pointsRule"), "left-arrow": "", onClickLeft: i }, null, 8, ["title"]),
                  t("div", TG, [
                     t("div", QG, a(l(s)("bonusPoints")), 1),
                     t("div", VG, [
                        t("div", null, a(l(s)("descRules2")), 1),
                        t("div", null, [
                           (_(!0),
                           m(
                              Y,
                              null,
                              se(
                                 A,
                                 (C, B) => (
                                    _(),
                                    m("div", { key: B }, [
                                       t("p", null, a(C.title), 1),
                                       (_(!0),
                                       m(
                                          Y,
                                          null,
                                          se(C.body, w => (_(), m("li", { key: w }, a(w), 1))),
                                          128,
                                       )),
                                    ])
                                 ),
                              ),
                              128,
                           )),
                        ]),
                        t("div", { onClick: h[0] || (h[0] = C => c()) }, [t("span", null, a(l(s)("goBetting")), 1), U(p, { name: "upgrade" })]),
                     ]),
                  ]),
               ])
            );
         };
      },
   });
const NG = $(OG, [["__scopeId", "data-v-ad58f402"]]),
   FG = Object.freeze(Object.defineProperty({ __proto__: null, default: NG }, Symbol.toStringTag, { value: "Module" })),
   xG = e => (fe("data-v-4b37590c"), (e = e()), Re(), e),
   PG = { class: "turntable-detail" },
   HG = { class: "turntable-detail-wrap" },
   YG = { class: "turntable-detail-hero" },
   WG = { class: "turntable-detail-hero__wrapper" },
   KG = { class: "turntable-detail-hero__wrapper-titlebox" },
   XG = { class: "turntable-detail-hero__wrapper-title" },
   JG = { class: "turntable-detail-hero__wrapper-title" },
   zG = { class: "turntable-detail-hero__wrapper-title" },
   jG = { class: "targetAmount" },
   ZG = { class: "rotateNum" },
   qG = xG(() => t("div", null, "00:00-23:59", -1)),
   $G = { class: "turntable-detail-tips" },
   eU = ["innerHTML"],
   tU = q({
      __name: "index",
      setup(e) {
         const { t: s } = ie(),
            { getTurntablInfo: n, store: A, onClick: o } = Jt(),
            i = S([s("turntableRule2"), s("turntableRule3"), s("turntableRule4"), s("turntableRule5")]),
            c = { 1: s("singleDeposit"), 2: s("cumulativeDeposits") },
            u = Q(() => A.taskList[A.taskList.length - 1]);
         return (
            ce(() => {
               n();
            }),
            (h, d) => {
               const p = x("NavBar");
               return (
                  _(),
                  m("div", PG, [
                     U(p, { title: h.$t("activityDestitle"), placeholder: !1, "left-arrow": "", onClickLeft: l(o) }, null, 8, ["title", "onClickLeft"]),
                     t("div", HG, [
                        t("div", YG, [
                           t("div", WG, [
                              t("div", KG, [t("div", XG, a(h.$t("turntableTask")), 1), t("div", JG, a(h.$t("turntableCount")), 1), t("div", zG, a(h.$t("turntableTime")), 1)]),
                              t("ul", null, [
                                 (_(!0),
                                 m(
                                    Y,
                                    null,
                                    se(l(A).taskList, (C, B) => (_(), m("li", { key: B }, [t("div", null, [t("p", jG, a(l(Ae)(C.targetAmount)), 1), t("p", null, a(c[C.taskType]) + a(h.$t("amount")), 1)]), t("div", ZG, "+" + a(C.rotateNum), 1), qG]))),
                                    128,
                                 )),
                              ]),
                           ]),
                        ]),
                     ]),
                     U(Ct, { name: h.$t("rule"), render: "html", tiplist: i.value }, { default: j(() => [t("div", $G, [t("p", null, a(h.$t("example")) + "：", 1), u.value ? (_(), m("p", { key: 0, innerHTML: h.$t("turntableExample", [l(Ae)(u.value.targetAmount), u.value.rotateNum]) }, null, 8, eU)) : H("", !0)])]), _: 1 }, 8, ["name", "tiplist"]),
                  ])
               );
            }
         );
      },
   });
const sU = $(tU, [["__scopeId", "data-v-4b37590c"]]),
   nU = Object.freeze(Object.defineProperty({ __proto__: null, default: sU }, Symbol.toStringTag, { value: "Module" })),
   aU = e => (fe("data-v-545601da"), (e = e()), Re(), e),
   AU = { class: "turntable-pointRule" },
   oU = { class: "turntable-pointRule-wrap" },
   iU = { class: "turntable-pointRule__body" },
   lU = { class: "turntable-pointRule__title" },
   cU = aU(() => t("span", null, [t("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "28", viewBox: "0 0 24 28", fill: "none" }, [t("path", { d: "M23 12.2679C24.3333 13.0378 24.3333 14.9622 23 15.732L3.5 26.9904C2.16666 27.7602 0.499999 26.7979 0.499999 25.2583L0.5 2.74167C0.5 1.20207 2.16667 0.239817 3.5 1.00962L23 12.2679Z", fill: "white" })])], -1)),
   gU = { class: "turntable-pointRule__body" },
   rU = { class: "turntable-pointRule__title" },
   dU = { class: "turntable-tips" },
   pU = { class: "turntable-pointRule__body" },
   _U = { class: "turntable-pointRule__title" },
   uU = ["innerHTML"],
   mU = { key: 0 },
   vU = q({
      __name: "index",
      setup(e) {
         const { getTurntablInfo: s, store: n, onClick: A, bindingTypes: o } = Jt();
         return (
            ce(() => {
               s();
            }),
            (i, c) => {
               const u = x("NavBar");
               return _(), m("div", AU, [U(u, { title: i.$t("activityIntroduce"), placeholder: !1, "left-arrow": "", onClickLeft: l(A) }, null, 8, ["title", "onClickLeft"]), t("div", oU, [t("div", iU, [t("div", lU, [cU, t("span", null, a(i.$t("turntableActivityTime")), 1)]), t("p", null, a(i.$t("turntableStart")), 1)]), t("div", gU, [t("div", rU, a(i.$t("validityPeriod")), 1), t("p", null, a(i.$t("officialNotice")), 1)]), t("div", dU, a(i.$t("turntableRule")) + "。", 1), t("div", pU, [t("div", _U, a(i.$t("turntableJoinRule")), 1), t("p", { innerHTML: i.$t("turntableSatisfy", [l(n).vipRating.join("、")]) }, null, 8, uU), [0, -1].includes(l(n).bindingType) ? H("", !0) : (_(), m("p", mU, [K(a(i.$t("turntableBind")) + " ", 1), t("span", null, a(l(o)[l(n).bindingType] || ""), 1)])), t("p", null, a(i.$t("turntablePrize")), 1)])])]);
            }
         );
      },
   });
const hU = $(vU, [["__scopeId", "data-v-545601da"]]),
   wU = Object.freeze(Object.defineProperty({ __proto__: null, default: hU }, Symbol.toStringTag, { value: "Module" })),
   yt = e => (fe("data-v-89eb08bb"), (e = e()), Re(), e),
   bU = { class: "turntable-introduce" },
   CU = yt(() => t("div", { class: "promotion-box__splitBorder" }, [t("span")], -1)),
   BU = yt(() => t("div", { class: "promotion-box__borderTopStyle" }, [t("span"), t("span")], -1)),
   yU = yt(() => t("div", { class: "promotion-box__titleLeft" }, null, -1)),
   fU = { class: "promotion-title" },
   RU = yt(() => t("div", { class: "promotion-box__titleRight" }, null, -1)),
   EU = { class: "promotion-txt" },
   IU = q({
      __name: "index",
      setup(e) {
         const s = ae(),
            { t: n } = ie(),
            A = S([
               { title: n("introduceTitle"), content: n("introduceContent") },
               { title: n("introduceTitle2"), content: n("introduceContent2") },
               { title: n("introduceTitle3"), content: n("introduceContent3") },
            ]);
         return (o, i) => {
            const c = x("NavBar");
            return (
               _(),
               m(
                  Y,
                  null,
                  [
                     U(c, { title: o.$t("firstSaveRule"), placeholder: !1, "left-arrow": "", onClickLeft: i[0] || (i[0] = u => l(s).go(-1)) }, null, 8, ["title"]),
                     t("div", bU, [
                        (_(!0),
                        m(
                           Y,
                           null,
                           se(A.value, (u, h) => (_(), m("div", { class: "promotion-box", key: h }, [CU, BU, yU, t("div", fU, "0" + a(h + 1), 1), RU, t("div", EU, [t("h3", null, a(u.title), 1), t("p", null, a(u.content), 1)])]))),
                           128,
                        )),
                     ]),
                  ],
                  64,
               )
            );
         };
      },
   });
const SU = $(IU, [["__scopeId", "data-v-89eb08bb"]]),
   DU = Object.freeze(Object.defineProperty({ __proto__: null, default: SU }, Symbol.toStringTag, { value: "Module" }));
export {
   rT as $,
   O as A,
   cM as B,
   Ae as C,
   $e as D,
   D6 as E,
   LT as F,
   me as G,
   kT as H,
   TT as I,
   QT as J,
   VT as K,
   Ne as L,
   OT as M,
   YL as N,
   NT as O,
   FT as P,
   xT as Q,
   fs as R,
   ot as S,
   ke as T,
   qT as U,
   kB as V,
   lT as W,
   cT as X,
   gT as Y,
   B6 as Z,
   $ as _,
   ht as a,
   jT as a$,
   dT as a0,
   oT as a1,
   iT as a2,
   pT as a3,
   Pk as a4,
   aT as a5,
   xk as a6,
   jk as a7,
   BM as a8,
   qe as a9,
   hM as aA,
   wT as aB,
   bT as aC,
   mT as aD,
   vT as aE,
   ET as aF,
   Fk as aG,
   Nk as aH,
   Kk as aI,
   Yk as aJ,
   zk as aK,
   Xk as aL,
   qk as aM,
   Jk as aN,
   DT as aO,
   bM as aP,
   dM as aQ,
   h6 as aR,
   pt as aS,
   qU as aT,
   uf as aU,
   Y6 as aV,
   TB as aW,
   Cs as aX,
   RL as aY,
   zT as aZ,
   oL as a_,
   _t as aa,
   Wk as ab,
   Hk as ac,
   sT as ad,
   tT as ae,
   nT as af,
   $k as ag,
   eT as ah,
   AT as ai,
   Zk as aj,
   hT as ak,
   CT as al,
   tM as am,
   yT as an,
   _T as ao,
   uT as ap,
   BT as aq,
   fT as ar,
   RT as as,
   IT as at,
   ST as au,
   mM as av,
   vM as aw,
   uM as ax,
   _M as ay,
   pM as az,
   XT as b,
   YM as b$,
   ZT as b0,
   vt as b1,
   Ns as b2,
   Yt as b3,
   Kt as b4,
   Ds as b5,
   wt as b6,
   Xt as b7,
   Ks as b8,
   as as b9,
   yL as bA,
   CL as bB,
   LM as bC,
   MM as bD,
   DL as bE,
   GL as bF,
   Zs as bG,
   zt as bH,
   WM as bI,
   mL as bJ,
   vL as bK,
   KT as bL,
   TL as bM,
   jM as bN,
   sL as bO,
   qM as bP,
   eL as bQ,
   lM as bR,
   tL as bS,
   $M as bT,
   YT as bU,
   QM as bV,
   Fs as bW,
   wL as bX,
   bL as bY,
   LL as bZ,
   kL as b_,
   ty as ba,
   H6 as bb,
   SM as bc,
   zs as bd,
   wM as be,
   TM as bf,
   yM as bg,
   Ay as bh,
   Mk as bi,
   UM as bj,
   ZM as bk,
   IM as bl,
   GM as bm,
   QB as bn,
   aL as bo,
   fL as bp,
   oM as bq,
   kM as br,
   EL as bs,
   pL as bt,
   IL as bu,
   SL as bv,
   BL as bw,
   AM as bx,
   hL as by,
   xM as bz,
   ek as c,
   Ak as c$,
   Ct as c0,
   HM as c1,
   UL as c2,
   ML as c3,
   OM as c4,
   VM as c5,
   DM as c6,
   EM as c7,
   rM as c8,
   NM as c9,
   Qk as cA,
   kk as cB,
   Tk as cC,
   Vk as cD,
   Lk as cE,
   Ok as cF,
   gM as cG,
   QL as cH,
   VL as cI,
   ok as cJ,
   lk as cK,
   pk as cL,
   G6 as cM,
   Rk as cN,
   Gk as cO,
   CM as cP,
   ik as cQ,
   rk as cR,
   gk as cS,
   ak as cT,
   Sk as cU,
   Ik as cV,
   nk as cW,
   ck as cX,
   Ek as cY,
   Dk as cZ,
   tk as c_,
   nL as ca,
   AL as cb,
   iL as cc,
   Ue as cd,
   lL as ce,
   GT as cf,
   VB as cg,
   cL as ch,
   _L as ci,
   PM as cj,
   Hs as ck,
   gL as cl,
   dL as cm,
   JT as cn,
   rL as co,
   uL as cp,
   Os as cq,
   XU as cr,
   zU as cs,
   JU as ct,
   FM as cu,
   jU as cv,
   ZU as cw,
   PT as cx,
   HT as cy,
   UT as cz,
   Uk as d,
   sk as d0,
   NL as d1,
   OL as d2,
   _s as d3,
   ZL as d4,
   sM as d5,
   qL as d6,
   xL as d7,
   mk as d8,
   WT as d9,
   aM as dA,
   nM as dB,
   RM as dC,
   $L as da,
   PL as db,
   FL as dc,
   dk as dd,
   XL as de,
   JL as df,
   fk as dg,
   KL as dh,
   WL as di,
   jL as dj,
   uk as dk,
   _k as dl,
   yk as dm,
   zL as dn,
   wk as dp,
   vk as dq,
   hk as dr,
   Bk as ds,
   Ck as dt,
   MT as du,
   bk as dv,
   We as dw,
   Df as dx,
   $U as dy,
   eM as dz,
   M6 as e,
   HL as f,
   V as g,
   Rs as h,
   KU as i,
   EB as j,
   Le as k,
   pf as l,
   X6 as m,
   KM as n,
   Pt as o,
   zM as p,
   Ss as q,
   XM as r,
   NB as s,
   JM as t,
   df as u,
   I as v,
   fM as w,
   r as x,
   g as y,
   iM as z,
};
