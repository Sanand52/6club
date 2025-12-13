import {
    W as t,
    X as o,
    Y as e
} from "./modules-3ee1a0d5.js";
const n = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        fill: "none"
    },
    c = e("circle", {
        cx: "28",
        cy: "24",
        r: "18",
        fill: "#FFF4F4"
    }, null, -1),
    s = e("path", {
        stroke: "#FFCDCB",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "3.2",
        d: "M3 23c0-5.984 3.526-10.164 9.009-10.868Q12.846 12 13.75 12h21.5c.559 0 1.096.022 1.612.11C42.41 12.77 46 16.972 46 23v11c0 6.6-4.3 11-10.75 11h-21.5C7.3 45 3 40.6 3 34v-2.178"
    }, null, -1),
    r = e("path", {
        stroke: "#FFCDCB",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "3.2",
        d: "M46 23.724h-6.452c-2.366 0-4.301 1.862-4.301 4.138S37.182 32 39.548 32H46m-9-20c-.516-.083-1.194 0-1.753 0H14c-.602 0-1.44-.083-2 0 0 0 .731-.648 1.247-1.145l6.99-6.745A7.74 7.74 0 0 1 25.571 2c1.997 0 3.914.758 5.333 2.11l3.764 3.662C36.045 9.076 39.548 12 37 12"
    }, null, -1),
    l = [c, s, r];

function i(d, h) {
    return t(), o("svg", n, [...l])
}
const _ = {
    render: i
};
export {
    _ as
    default, i as render
};