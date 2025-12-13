let bodyWidth = $(".navbar").width();
$(".list-banner .van-swipe-item").css("width", `${bodyWidth}px`);

$(document).ready(() => {
  let checkWidth = $("body").width();
  $("html").css("font-size", `${checkWidth / 10}px`);
  $(".van-tabbar .van-tabbar-item").css({
    transform: "scale(0.9)",
  });
});

$(window).resize(() => {
  let checkWidth = $("body").width();
  $("html").css("font-size", `${checkWidth / 10}px`);
  $(".van-tabbar .van-tabbar-item").css({
    transform: "scale(0.9)",
  });
});

function formatMoney(money, type) {
  return String(money).replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${type}`);
}
