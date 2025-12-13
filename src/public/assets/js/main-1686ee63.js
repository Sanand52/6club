import {
    W as l,
    X as t,
    Y as e
} from "./modules-3ee1a0d5.js";
const o = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        fill: "none"
    },
    n = e("circle", {
        cx: "28",
        cy: "24",
        r: "18",
        fill: "#FFF4F4"
    }, null, -1),
    c = e("path", {
        fill: "#FFCDCB",
        "fill-rule": "evenodd",
        d: "M24.08 5.28C13.741 5.28 5.36 13.661 5.36 24s8.381 18.72 18.72 18.72S42.8 34.339 42.8 24v-8.76h3.36V24c0 12.194-9.886 22.08-22.08 22.08S2 36.195 2 24 11.886 1.92 24.08 1.92h20.28v3.36z",
        "clip-rule": "evenodd"
    }, null, -1),
    d = e("path", {
        fill: "#FFCDCB",
        d: "M46.16 3.6a1.68 1.68 0 1 1-3.36 0 1.68 1.68 0 0 1 3.36 0M46.16 15.12a1.68 1.68 0 1 1-3.36 0 1.68 1.68 0 0 1 3.36 0"
    }, null, -1),
    s = e("path", {
        fill: "#FFCDCB",
        "fill-rule": "evenodd",
        d: "M15.806 29.582a1.68 1.68 0 0 1 2.372.144c1.15 1.298 2.748 2.794 5.462 2.794 2.872 0 4.857-1.428 5.805-2.533a1.68 1.68 0 0 1 2.55 2.186c-1.451 1.695-4.314 3.707-8.355 3.707-4.198 0-6.647-2.424-7.977-3.926a1.68 1.68 0 0 1 .143-2.372",
        "clip-rule": "evenodd"
    }, null, -1),
    i = [n, c, d, s];

function a(r, h) {
    return l(), t("svg", o, [...i])
}
const u = {
    render: a
};
export {
    u as
    default, a as render
};