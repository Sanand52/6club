let My_Bets_Pages = 1;
let Game_History_Pages = 1;

const getGameType = () => {
   const urlParams = new URLSearchParams(window.location.search);

   $("#game_type_status").text(`${urlParams.get("game_type") || 1} MIN`);

   return urlParams.get("game_type") || 1;
};

let GAME_TYPE = getGameType();

let socket = io();
var pageno = 0;
var limit = 10;
var page = 1;
socket.on("data-server-5d", function (msg) {
   if (msg) {
      let checkData = GAME_TYPE;
      if (checkData == msg.game) {
         pageno = 0;
         limit = 10;
         page = 1;
         let notResult = msg.data[0];
         let Result = msg.data[1];
         let check = $("#number_result").attr("data-select");
         if (check == "all") {
            reload_money();
            callListOrder();
            animationNewPar(Result.result);
         } else {
            reload_money();
            showMeJoin();
            animationNewPar(Result.result);
         }

         handleMyEmerdList();
         $("#period").text(notResult.period);
         $("#previous").addClass("block-click");
         $("#previous").removeClass("action");
         $("#previous .van-icon-arrow").css("color", "#7f7f7f");
         $("#next").removeClass("block-click");
         $("#next").addClass("action");
         $("#next .van-icon-arrow").css("color", "#fff");
      }
   }
});

function animationNewPar(data) {
   let arr = String(data).split("");
   $(".transform0, .transform1, .transform2, .transform3, .transform4, .transform5").addClass("slot-scroll");
   setTimeout(() => {
      for (let i = 0; i < 5; i++) {
         let random = Math.floor(Math.random() * 10);
         $(`.transform${i} .slot-num:eq(0)`).text(random);
         random = Math.floor(Math.random() * 10);
         $(`.transform${i} .slot-num:eq(1)`).text(random);
         $(`.transform${i} .slot-num:eq(2)`).text(arr[i]);
      }
      $(".transform0").removeClass("slot-scroll");
      setTimeout(() => {
         $(".transform1, .transform2, .transform3, .transform4, .transform5").removeClass("slot-scroll");
         showResultNow(data);
      }, 100);
   }, 2500);
}

function alertMess(text, sic) {
   $("body").append(
      `
        <div data-v-1dcba851="" class="msg">
            <div data-v-1dcba851="" class="msg-content v-enter-active v-enter-to" style=""> ${text} </div>
        </div>
        `,
   );
   setTimeout(() => {
      $(".msg .msg-content").removeClass("v-enter-active v-enter-to");
      $(".msg .msg-content").addClass("v-leave-active v-leave-to");
      setTimeout(() => {
         $(".msg").remove();
      }, 100);
   }, 1000);
}

function ShowListOrder(list_orders) {
   if (list_orders.length == 0) {
      return $(`#list_order`).html(
         `
            <div data-v-a9660e98="" class="van-empty">
                <div class="van-empty__image">
                    <img src="/images/empty-image-default.png" />
                </div>
                <p class="van-empty__description">No Data</p>
            </div>
            `,
      );
   }
   let htmls = "";
   let result = list_orders.map(list_orders => {
      let arr = list_orders.result.split("");
      let resultData = ``;
      let total = 0;

      for (let i = 0; i < arr.length; i++) {
         total += Number(arr[i]);
         resultData += `
          <div data-v-42f27458="" class="li circle-black c-row c-row-middle-center c-tc">
              <div data-v-42f27458="">${arr[i]}</div>
          </div>
        `;
      }

      return (htmls += `
        <div data-v-42f27458="" class="c-tc item van-row my_bets_bar">
          <div data-v-42f27458="" class="van-col van-col--8">
            <div data-v-42f27458="" class="c-tc goItem">${list_orders.period}</div>
          </div>
          <div data-v-42f27458="" class="van-col van-col--12">
            <div data-v-42f27458="" class="c-row">
              <div data-v-42f27458="" class="c-row qiu c-row-middle-center">
                ${resultData}
              </div>
            </div>
          </div>
          <div data-v-42f27458="" class="van-col van-col--4">
            <div data-v-42f27458="" class="c-row c-row-middle-center"><span data-v-42f27458=""
                class="li action c-row c-row-middle-center c-tc">${total}</span></div>
          </div>
        </div>
      `);
   });
   $(`#list_order`).html(htmls);
}

function showResultNow(data) {
   let arr = String(data).split("");
   let total = 0;
   for (let i = 0; i < arr.length; i++) {
      total += Number(arr[i]);
      $(`.round-num:eq(${i}) .fade-item`).text(arr[i]);
      let random = Math.floor(Math.random() * 10);
      $(`.transform${i} .slot-num:eq(0)`).text(random);
      random = Math.floor(Math.random() * 10);
      $(`.transform${i} .slot-num:eq(1)`).text(random);
      $(`.transform${i} .slot-num:eq(2)`).text(arr[i]);
   }
   $(".round-num #total_r").text(total);
}
function callListOrder() {
   $.ajax({
      type: "POST",
      url: "/api/webapi/5d/GetNoaverageEmerdList",
      data: {
         gameJoin: GAME_TYPE,
         pageno: "0",
         pageto: "10",
      },
      dataType: "json",
      success: function (response) {
         let list_orders = response.data.gameslist;
         $("#period").text(response.period);
         $("#number_result").text("1/" + response.page);
         ShowListOrder(list_orders);
         if (list_orders.length != 0) {
            showResultNow(list_orders[0].result);
         }
         $(".Loading").fadeOut(0);
      },
   });
}

callListOrder();

$("#GetNoaverageEmerdList").click(function (e) {
   e.preventDefault();
   pageno = 0;
   limit = 10;
   page = 1;
   $(".Loading").fadeIn(0);
   $("#GetMyEmerdList").removeClass("block-click");
   $("#GetMyEmerdList").find(".txt").removeClass("action");
   $("#trend_tab_button").removeClass("block-click");
   $("#trend_tab_button").find(".txt").removeClass("action");
   $(this).addClass("block-click");
   $(this).find(".txt").addClass("action");
   $("#all").fadeIn(0);
   $("#number_result").attr("data-select", "all");
   $("#me").fadeOut(0);
   $("#trend").fadeOut(0);
   $("#pagination_nav").fadeIn(0);
   callListOrder();
   $("#previous").addClass("block-click");
   $("#previous").removeClass("action");
   $("#previous .van-icon-arrow").css("color", "#7f7f7f");
   $("#next").removeClass("block-click");
   $("#next").addClass("action");
   $("#next .van-icon-arrow").css("color", "#fff");
});

$(".van-notice-bar__wrap .van-notice-bar__content").css({
   "transition-duration": "48.34s",
   transform: "translateX(-3417px)",
});
setInterval(() => {
   $(".van-notice-bar__wrap .van-notice-bar__content").css({
      "transition-duration": "0s",
      transform: "translateX(0)",
   });
   setTimeout(() => {
      $(".van-notice-bar__wrap .van-notice-bar__content").css({
         "transition-duration": "48.34s",
         transform: "translateX(-3417px)",
      });
   }, 100);
}, 48000);

function downAndHidden() {
   $(".van-overlay").fadeOut();
   $("#box-join").css("transform", "translateY(1000px)");
   $("body").removeClass("van-overflow-hidden");
   $(".0-9 .bet-num-line .bet-box-num").removeClass("active");
   $(".small-big .bet-type-btn").attr("class", "bet-type-btn flex-row-between");
   $("#result").attr("list-join", "");
   $("#result").attr("value", "1000");
   $("#plus-minus .minus").removeClass("action");
   $("#value-join").val(1);
   $(".amount-box .li").removeClass("action");
   $(".amount-box .li:eq(0)").addClass("action");
   $(".multiple-box .li").removeClass("action");
   $(".multiple-box .li:eq(0)").addClass("action");
   $(".supportss").fadeOut();
}

function reload_money() {
   fetch("/api/webapi/GetUserInfo")
      .then(response => response.json())
      .then(data => {
         if (data.status === false) {
            unsetCookie();
            return false;
         }
         $("#balance_amount").text(`₹ ${data.data.money_user}.00 `);
         $(".Loading").fadeOut(0);
      });
}
reload_money();

$("#reload_money").click(async function (e) {
   e.preventDefault();
   $(".Loading").fadeIn(0);
   $(this).addClass("block-click action");
   await reload_money();
   setTimeout(() => {
      $("#reload_money").removeClass("block-click action");
   }, 2500);
});

let checkWidth = $("#app").width();
$("html").css("font-size", `${checkWidth / 10}px`);
$(window).resize(() => {
   let checkWidth = $("#app").width();
   $("html").css("font-size", `${checkWidth / 10}px`);
});

var audio1 = new Audio("/audio/di1.da40b233.mp3");
var audio2 = new Audio("/audio/di2.317de251.mp3");

var clicked = false;

function openAudio() {
   audio1.muted = true;
   audio1.play();
   audio2.muted = true;
   audio2.play();
}

$("body").click(function (e) {
   e.preventDefault();
   if (clicked) return;
   openAudio();
   clicked = true;
});

function playAudio1() {
   audio1.muted = false;
   audio1.play();
}

function playAudio2() {
   audio2.muted = false;
   audio2.play();
}

const initAudio = () => {
   const check_volume = localStorage.getItem("volume");
   if (check_volume == "on") {
      $("#audio_button").removeClass("disableVoice");
   } else if (check_volume == "off") {
      $("#audio_button").addClass("disableVoice");
   } else {
      localStorage.setItem("volume", "on");
      $("#audio_button").removeClass("disableVoice");
   }
};

initAudio();

$("#audio_button").click(function (e) {
   e.preventDefault();
   const check_volume = localStorage.getItem("volume");
   if (check_volume == "on") {
      localStorage.setItem("volume", "off");
   } else {
      localStorage.setItem("volume", "on");
   }
   initAudio();
});

function cownDownTimer() {
   let countDownDate = new Date("2030-07-16T23:59:59.9999999+01:00").getTime();
   setInterval(function () {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      let checkData = Number(GAME_TYPE);
      let minute = Math.ceil(minutes % checkData);
      let seconds1 = Math.floor((distance % (1000 * 60)) / 10000);
      let seconds2 = Math.floor(((distance % (1000 * 60)) / 1000) % 10);
      $(".count_down_d:eq(1)").text(minute);
      $(".count_down_d:eq(2)").text(seconds1);
      $(".count_down_d:eq(3)").text(seconds2);

      if (minute == 0 && seconds1 == 0 && seconds2 <= 5) {
         $(".minH .mark-box").show();
         $(".minH .mark-box .item:eq(1)").text(seconds2);

         downAndHidden();
      }
      if (minute >= 0 && seconds1 >= 1 && seconds2 <= 9) {
         $(".minH .mark-box").hide();
      }
   }, 0);
   setInterval(function () {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let checkData = Number(GAME_TYPE);
      let minute = Math.ceil(minutes % checkData);
      let seconds1 = Math.floor((distance % (1000 * 60)) / 10000);
      let seconds2 = Math.floor(((distance % (1000 * 60)) / 1000) % 10);
      const check_volume = localStorage.getItem("volume");

      if (minute == 0 && seconds1 == 0 && seconds2 <= 5) {
         if (clicked) {
            if (check_volume == "on") {
               playAudio1();
            }
         }
      }

      if (minute == checkData - 1 && seconds1 == 5 && seconds2 >= 9) {
         if (clicked) {
            if (check_volume == "on") {
               playAudio2();
            }
         }
      }
   }, 1000);
}

cownDownTimer();

function result() {
   let join = $("#result").attr("list-join").split("");
   let value = $("#result").attr("value");
   let amount = $("#value-join").val();

   let result = join.length * Number(value) * Number(amount);
   if (result <= 0) {
      result = 1000;
   }
   $("#total").html(result + ".00");
}

$(".van-overlay, .canned-alert").click(function (e) {
   e.preventDefault();
   downAndHidden();
});
$(".0-9 .bet-num-line").click(function (e) {
   e.preventDefault();
   let info = $(this).attr("txt");
   let list = $("#result").attr("list-join");
   let checkClass = $(this).find(".bet-box-num").hasClass("active");

   let checkList = Number(list);
   if (isNaN(checkList)) {
      $("#result").attr("list-join", "");
      list = $("#result").attr("list-join");
   }

   if (checkClass) {
      let newList = list.replace(info, "");
      $("#result").attr("list-join", newList);
      result();
      return $(`.0-9 .bet-num-line[txt=${info}] .bet-box-num`).removeClass("active");
   }
   $(`.0-9 .bet-num-line[txt=${info}] .bet-box-num`).addClass("active");
   $(".small-big .bet-type-btn").attr("class", "bet-type-btn flex-row-between");

   $("#result").attr("list-join", (list += info));
   result();
});

$(".select-number-0-9").click(function (e) {
   e.preventDefault();
   $(".van-overlay").fadeIn();
   $("#box-join").css("transform", "translateY(0px)");
   $("body").addClass("van-overflow-hidden");
});

$(".small-big .bet-type-btn").click(function (e) {
   e.preventDefault();
   let info = $(this).attr("data-join");
   $(".van-overlay").fadeIn();
   $("#box-join").css("transform", "translateY(0px)");
   $("body").addClass("van-overflow-hidden");
   $(`.small-big .bet-type-btn`).attr("class", "bet-type-btn flex-row-between");
   $(`.small-big .bet-type-btn[data-join=${info}]`).addClass(info);
   $(".0-9 .bet-num-line .bet-box-num").removeClass("active");

   let join = $(this).attr("join");
   $("#result").attr("list-join", join);
   result();
});

$(".a-b-c-d-e .d5-bet-type").click(function (e) {
   e.preventDefault();
   let info = $(this).attr("data-join");
   $(`.a-b-c-d-e .d5-bet-type`).removeClass("active");
   $(`.a-b-c-d-e .d5-bet-type[data-join=${info}]`).addClass("active");
   $("#result").attr("join", info);
   if (info == "total") {
      $(".0-9").hide();
      let check = Number($("#result").attr("list-join"));
      if (!isNaN(check)) {
         $("#result").attr("list-join", "");
         $(".0-9 .bet-num-line .bet-box-num").removeClass("active");
      }
   } else {
      $(".0-9").show();
   }
});

$(".amount-box .li").click(function (e) {
   e.preventDefault();
   let value = $(this).attr("value");
   $("#result").attr("value", value);
   $(".amount-box .li").removeClass("action");
   $(this).addClass("action");
   result();
});

$(".multiple-box .li").click(function (e) {
   e.preventDefault();
   let value = $(this).attr("amount");
   $("#value-join").val(value);
   $(".multiple-box .li").removeClass("action");
   $(this).addClass("action");
   $("#plus-minus .minus").addClass("action");
   result();
});

$("#plus-minus .minus").click(function (e) {
   e.preventDefault();
   let value = Number($("#value-join").val());
   if (value <= 1) {
      $(".multiple-box .li:eq(0)").addClass("action");
      $("#plus-minus .minus").removeClass("action");
      result();
      return false;
   }
   $("#value-join").val((value -= 1));
   value = Number($("#value-join").val());
   if (value <= 1) {
      $(".multiple-box .li:eq(0)").addClass("action");
      $("#plus-minus .minus").removeClass("action");
      result();
      return false;
   }
   value = Number($("#value-join").val());
   if (value <= 1) {
      $("#plus-minus .minus").removeClass("action");
      return false;
   }
   $(`.multiple-box .li`).removeClass("action");
   $(`.multiple-box .li[amount=${value}]`).addClass("action");
   result();
});
$("#plus-minus .plus").click(function (e) {
   e.preventDefault();
   let value = Number($("#value-join").val());
   $("#value-join").val((value += 1));
   $(`.multiple-box .li`).removeClass("action");
   $(`.multiple-box .li[amount=${value}]`).addClass("action");

   $("#plus-minus .minus").addClass("action");
   result();
});
$("#value-join").on("input", function () {
   let value = Number($(this).val());
   if (value > 1) {
      $("#plus-minus .minus").addClass("action");
   } else {
      $("#plus-minus .minus").removeClass("action");
   }
   $(`.multiple-box .li`).removeClass("action");
   $(`.multiple-box .li[amount=${value}]`).addClass("action");
   result();
});

$(".foot .right").click(function (e) {
   e.preventDefault();
   let join = $("#result").attr("join"); // loại ? vd: abcde total
   let list_join = $("#result").attr("list-join"); // bet to
   let value = $("#result").attr("value"); // money
   let x = $("#value-join").val().trim(); // x
   let game = GAME_TYPE;

   $(".Loading").fadeIn(0);
   $(".foot .right").addClass("block-click");
   $.ajax({
      type: "POST",
      url: "/api/webapi/action/5d/join",
      data: {
         join: join,
         list_join: list_join,
         money: value,
         x: x,
         game: game,
      },
      dataType: "json",
      success: function (response) {
         $(".Loading").fadeOut(0);
         let chane = response.change;
         socket.emit("data-server-5", { chane, join, list_join, money: value, x, game });
         alertMess(response.message);
         setTimeout(() => {
            downAndHidden();
            $(".foot .right").removeClass("block-click");
         }, 500);
         if (response.status == true) {
            $("#money_show").text("₹ " + response.money + ".00");
            showMeJoin();
         }
      },
   });
});

function formateT(params) {
   let result = params < 10 ? "0" + params : params;
   return result;
}

function timerJoin(params = "", addHours = 0) {
   let date = "";
   if (params) {
      date = new Date(Number(params));
   } else {
      date = new Date();
   }

   date.setHours(date.getHours() + addHours);

   let years = formateT(date.getFullYear());
   let months = formateT(date.getMonth() + 1);
   let days = formateT(date.getDate());

   let hours = date.getHours() % 12;
   hours = hours === 0 ? 12 : hours;
   let ampm = date.getHours() < 12 ? "AM" : "PM";

   let minutes = formateT(date.getMinutes());
   let seconds = formateT(date.getSeconds());

   return years + "-" + months + "-" + days + " " + hours + ":" + minutes + ":" + seconds + " " + ampm;
}

function isNumber(params) {
   let pattern = /^[0-9]*\d$/;
   return pattern.test(params);
}

let currentDisplay = "";
function openGameBetDetails(index) {
   $(`.MyGameRecordList__C-detail`).css("display", "none");

   if (currentDisplay === `details_box_${index}`) {
      $(`.details_box_${index}`).css("display", "none");
      currentDisplay = ``;
   } else {
      $(`.details_box_${index}`).css("display", "block");
      currentDisplay = `details_box_${index}`;
   }
}

function GetMyEmerdList(datas) {
   if (datas.length == 0) {
      return $(`#showJoinMe`).html(
         `
        <div data-v-a9660e98="" class="van-empty">
            <div class="van-empty__image">
                <img src="/images/empty-image-default.png" />
            </div>
            <p class="van-empty__description">No Data</p>
        </div>
        `,
      );
   }

   let html = datas
      .map((data, index) => {
         let arr = data.result.split("");
         let resultData = ``;
         let total = 0;
         const tab_list = ["A", "B", "C", "D", "E"];
         const tab_index = tab_list.indexOf(data.join_bet.toUpperCase());
         const finalResult = data.join_bet == "total" ? arr.map(data => parseInt(data)).reduce((a, b) => a + b, 0) : data.result[tab_index];

         for (let i = 0; i < arr.length; i++) {
            total += Number(arr[i]);
            //    resultData += `
            //     <div data-v-42f27458="" class="li circle-black">${arr[i]}</div>
            //   `
            resultData += `
               <div data-v-b4b99df8="">${arr[i]}</div>
            `;
         }

         let join = "";
         let arr2 = data.bet.split("");
         for (let i = 0; i < arr2.length; i++) {
            let check = isNumber(data.bet);
            if (check) {
               join += `
                  <div data-v-42f27458="">
                      <span data-v-42f27458="" style="color: rgb(0, 0, 0);">
                        <span data-v-42f27458="" class="li circle-black" style="color: rgb(0, 0, 0);">${arr2[i]}</span>  
                      </span>
                  </div>`;
            } else {
               join += `
               <div data-v-42f27458="">
                 <span data-v-42f27458="" style="color: rgb(0, 0, 0);">${arr2[i] == "c" ? "Even" : arr2[i] == "l" ? "Odd" : arr2[i] == "b" ? "Big" : "Small"}</span>
               </div>
               `;
            }
         }
         return `
         <div data-v-b4b99df8="" class="MyGameRecordList__C-item" onclick="openGameBetDetails(${index})">
            <div data-v-b4b99df8="" class="MyGameRecordList__C-item-l MyGameRecordList__C-item-l-8">8</div>
            <div data-v-b4b99df8="" class="MyGameRecordList__C-item-m">
               <div data-v-b4b99df8="" class="MyGameRecordList__C-item-m-top">${data.stage}</div>
               <div data-v-b4b99df8="" class="MyGameRecordList__C-item-m-bottom">${timerJoin(data.time)}</div>
            </div>
            ${
               data.status !== 0
                  ? `<div data-v-b4b99df8="" class="MyGameRecordList__C-item-r ${data.status == 1 ? "success" : ""}">
                        <div data-v-b4b99df8="" class="${data.status == 1 ? "success" : ""}">${data.status == 1 ? "Success" : "Failed"}</div>
                        <span data-v-b4b99df8="">${data.status == 1 ? `₹${data.get}.00` : `-₹${data.money}.00`}</span>
                     </div>`
                  : ""
            }
         </div>

         <div data-v-b4b99df8="" class="MyGameRecordList__C-detail details_box_${index}" style="display: none;">
            <div data-v-b4b99df8="" class="MyGameRecordList__C-detail-text">Details</div>
            <div data-v-b4b99df8="" class="MyGameRecordList__C-detail-line">
               Order number
               <div data-v-b4b99df8="">${data.id_product} <img data-v-b4b99df8="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAhFBMVEUAAABRUVFQUFBRUVFRUVFRUVFRUVFRUVFQUFBRUVFQUFBRUVFQUFBQUFBRUVFRUVFSUlJSUlJRUVFQUFBSUlJRUVFRUVFRUVFRUVFRUVFRUVFQUFBRUVFRUVFRUVFRUVFQUFBRUVFRUVFRUVFQUFBQUFBQUFBSUlJYWFhJSUlQUFBRUVGJ3MxyAAAAK3RSTlMAv0B6VerZrqiblYmCaGJIOiQdFg/79vDl39TKxbq0oY9zblxONC4pCQTPqkRvegAAAWZJREFUeNrtz0duw0AQAEGSzjnnnIP+/z8ffJOBgRfgiCts9Qca1UmSNGZDP0FDN37DbIJAQH4DAQGJAwEBiQMBAYlbTsjQLWcgtQVSWyC1BVJbILUFUlsgtdUQZJiyMSGzKRsTclbwBQEpgJwXfEFACiAXBV8QkALIWsEXBKRFyGXBF2QKSD/k1WdCruYhXV4gTUHWQUBAQsg1CEgO5BukMsgNCEgO5BYEJAfSg4CAhJA7EJAcyD0ISA5kAwQEJIRsgoCAhJAHEJAcyBYICEgI2QYBAQkhjyAgOZAdEBCQELILAgISQlZAQEDagDyBgORAnkFAciB7ICAgIWQfBAQkhLyAgORAVkEWC+nnWlbI30Bqh7yCgORADkBAQMIGEBCQNiCHICAgYW8gIDmQdxCQHMgHCEgO5AgEBCTsGKRySGog/+ik4AsC0iLktOALAtIi5LPgCwJS0FfBFwSkpH7COkmSMvoBUQl8xsUGEfcAAAAASUVORK5CYII=" /></div>
            </div>
            <div data-v-b4b99df8="" class="MyGameRecordList__C-detail-line">
               Period
               <div data-v-b4b99df8="">${data.stage}</div>
            </div>
            <div data-v-b4b99df8="" class="MyGameRecordList__C-detail-line">
               Purchase amount
               <div data-v-b4b99df8="">₹${data.money}.00</div>
            </div>
            <div data-v-b4b99df8="" class="MyGameRecordList__C-detail-line">
               Quantity
               <div data-v-b4b99df8="">${data.amount}</div>
            </div>
            <div data-v-b4b99df8="" class="MyGameRecordList__C-detail-line">
               Amount after tax
               <div data-v-b4b99df8="" class="red">₹${data.price}.00</div>
            </div>
            <div data-v-b4b99df8="" class="MyGameRecordList__C-detail-line">
               Tax
               <div data-v-b4b99df8="">₹${data.fee}.00</div>
            </div>
            <div data-v-b4b99df8="" class="MyGameRecordList__C-detail-line" style="display: ${data.status == 0 ? "none" : ""}">
               Result
               <div data-v-b4b99df8="" class="numList">
                  ${resultData}
               </div>
            </div>
            <div data-v-b4b99df8="" class="MyGameRecordList__C-detail-line">
               Select
               <div data-v-b4b99df8="" class="line1">
                  <div data-v-b4b99df8="">${data.join_bet == "total" ? "Total" : data.join_bet.toUpperCase()}</div>
                  <div data-v-b4b99df8="" class="num">${finalResult}</div>
               </div>
            </div>
            <div data-v-b4b99df8="" class="MyGameRecordList__C-detail-line" style="display:${data.status == 0 ? "none" : ""};">
               Status
               <div data-v-b4b99df8="" class="${data.status == 1 ? "green" : "red"}">${data.status == 1 ? "Success" : "Failed"}</div>
            </div>
            <div data-v-b4b99df8="" class="MyGameRecordList__C-detail-line" style="display:${data.status == 0 ? "none" : ""};">
               Win/lose
               <div data-v-b4b99df8="" class="${data.status == 1 ? "green" : "red"}">${data.status == 1 ? `₹${data.get}` : `- ₹${data.price}`}</div>
            </div>
            <div data-v-b4b99df8="" class="MyGameRecordList__C-detail-line">
               Order time
               <div data-v-b4b99df8="">${timerJoin(data.time)}</div>
            </div>
         </div>
      `;
      })
      .join("");

   $(`#showJoinMe`).html(html);
}

function callAjaxMeJoin() {
   $.ajax({
      type: "POST",
      url: "/api/webapi/5d/GetMyEmerdList",
      data: {
         gameJoin: GAME_TYPE,
         pageno: "0",
         pageto: "10",
      },
      dataType: "json",
      success: function (response) {
         let data = response.data.gameslist;
         $("#number_result").text("1/" + response.page);
         GetMyEmerdList(data);
         $(".Loading").fadeOut(0);
      },
   });
}

const STATUS_MAP = {
   WIN: "win",
   LOSS: "loss",
   NONE: "none",
};

const displayResultHandler = ({ status, amount, period, result }) => {
   let total = String(result).split("");
   const tabList = ["A", "B", "C", "D", "E"];
   let numberStatusContent = total
      .map((item, index) => {
         return `   
         <div data-v-e2a7b350="">
            <div data-v-e2a7b350="" class="title">${tabList[index]}</div>
            <div data-v-e2a7b350="" class="num">${item}</div>
         </div>`;
      })
      .join(" ");

   numberStatusContent += `
      <div data-v-e2a7b350="">
         <div data-v-e2a7b350="" class="title sum">SUM</div>
         <div data-v-e2a7b350="" class="num">${total.reduce((a, b) => parseInt(a) + parseInt(b), 0)}</div>
      </div>
   `;

   $("#lottery_results_box").html(numberStatusContent);

   $("#popup_game_details").html(`Period:5D ${GAME_TYPE} minute ${period}`);

   if (status === STATUS_MAP.WIN) {
      $("#popup_win_rupees_display").html(`₹${amount}.00`);
      $("#popup_greeting_display").html(`Congratulations`);
      $("#popup_background").removeClass("isL");
      $("#popup_greeting_display").removeClass("isL");
      $("#popup_win_rupees_display").css("display", "block");
      $("#popup_win_symbol").css("display", "block");
      $("#popup_loss_symbol").css("display", "none");
   } else if (status === STATUS_MAP.LOSS) {
      $("#popup_greeting_display").html(`Sorry`);
      $("#popup_background").addClass("isL");
      $("#popup_greeting_display").addClass("isL");
      $("#popup_win_rupees_display").css("display", "none");
      $("#popup_win_symbol").css("display", "none");
      $("#popup_loss_symbol").css("display", "block");
   } else {
      // $(".modal-popup__title").text("Result")
      // $(".modal-popup__amount").text(`No Bets !`)
   }

   $("#popup_modal").css("display", "block");

   // setTimeout(() => {
   //    $(".WinningTip__C").hide()
   // }, 5000)
};

function handleMyEmerdList() {
   $.ajax({
      type: "POST",
      url: "/api/webapi/5d/GetMyEmerdList",
      data: {
         gameJoin: GAME_TYPE,
         pageno: "0",
         pageto: "10",
      },
      dataType: "json",
      success: function (response) {
         let data = response.data.gameslist;
         $("#number_result").text("1/" + response.page);
         GetMyEmerdList(data);
         $(".Loading").fadeOut(0);

         let lastGame = data[0];

         // Nested AJAX call
         $.ajax({
            type: "POST",
            url: "/api/webapi/5d/GetNoaverageEmerdList",
            data: {
               gameJoin: GAME_TYPE,
               pageno: "0",
               pageto: "10",
            },
            dataType: "json",
            success: function (response) {
               let list_orders = response.data.gameslist;

               // Assuming firstGame is defined somewhere in your code
               console.log(lastGame.stage, list_orders[0].period);
               if (lastGame && lastGame.stage === list_orders[0].period) {
                  if (lastGame.get == 0) {
                     displayResultHandler({
                        status: STATUS_MAP.LOSS,
                        amount: lastGame.money,
                        period: list_orders[0].period,
                        result: list_orders[0].result,
                     });
                  } else {
                     displayResultHandler({
                        status: STATUS_MAP.WIN,
                        amount: lastGame.get,
                        period: list_orders[0].period,
                        result: list_orders[0].result,
                     });
                  }
               } else {
                  // displayResultHandler({
                  //    status: STATUS_MAP.NONE,
                  //    period: list_orders[0].period,
                  //    result: list_orders[0].result,
                  // })
               }
            },
         });
      },
   });
}

async function showMeJoin() {
   await callAjaxMeJoin();
   setTimeout(() => {
      $("#showJoinMe .hb").click(function (e) {
         e.preventDefault();
         $(this).find(".details").toggleClass("display-none");
      });

      $(".copy-to-img").click(function (e) {
         e.preventDefault();
         var copyText = $(this).attr("data-clipboard-text");
         navigator.clipboard.writeText(copyText);
         alertMess("Copy successful");
      });
   }, 500);
}

function drawChartLineInCanvas(topBoxNumber, bottomBoxNumber, canvasId) {
   const myCanvas = document.getElementById(canvasId);
   let boxXList = [5, 35, 65, 95, 123, 152, 181, 210, 239, 268];
   const ctx0 = myCanvas.getContext("2d");
   ctx0.strokeStyle = "#B1835A";
   ctx0.beginPath();
   ctx0.moveTo(boxXList[topBoxNumber], 21);
   ctx0.lineTo(boxXList[bottomBoxNumber], 128);
   ctx0.stroke();
}

const GAME_CHART_STATISTICS_HTML = {
   A: {
      MISSING: `
      <div data-v-c53b15fb="">13</div>
      <div data-v-c53b15fb="">1</div>
      <div data-v-c53b15fb="">2</div>
      <div data-v-c53b15fb="">14</div>
      <div data-v-c53b15fb="">41</div>
      <div data-v-c53b15fb="">3</div>
      <div data-v-c53b15fb="">6</div>
      <div data-v-c53b15fb="">0</div>
      <div data-v-c53b15fb="">12</div>
      <div data-v-c53b15fb="">9</div>`,
      AVG_MISSING: `
      <div data-v-c53b15fb="">9</div>
      <div data-v-c53b15fb="">6</div>
      <div data-v-c53b15fb="">5</div>
      <div data-v-c53b15fb="">6</div>
      <div data-v-c53b15fb="">15</div>
      <div data-v-c53b15fb="">11</div>
      <div data-v-c53b15fb="">8</div>
      <div data-v-c53b15fb="">15</div>
      <div data-v-c53b15fb="">8</div>
      <div data-v-c53b15fb="">13</div>`,
      FREQUENCY: `
      <div data-v-c53b15fb="">11</div>
      <div data-v-c53b15fb="">13</div>
      <div data-v-c53b15fb="">17</div>
      <div data-v-c53b15fb="">12</div>
      <div data-v-c53b15fb="">6</div>
      <div data-v-c53b15fb="">7</div>
      <div data-v-c53b15fb="">10</div>
      <div data-v-c53b15fb="">7</div>
      <div data-v-c53b15fb="">10</div>
      <div data-v-c53b15fb="">7</div>
      `,
      MAX_CONSECUTIVE: `
      <div data-v-c53b15fb="">2</div>
      <div data-v-c53b15fb="">2</div>
      <div data-v-c53b15fb="">2</div>
      <div data-v-c53b15fb="">1</div>
      <div data-v-c53b15fb="">2</div>
      <div data-v-c53b15fb="">1</div>
      <div data-v-c53b15fb="">1</div>
      <div data-v-c53b15fb="">1</div>
      <div data-v-c53b15fb="">1</div>
      <div data-v-c53b15fb="">2</div>
      `,
   },
   B: {
      MISSING: `
      <div data-v-c53b15fb="">4</div>
      <div data-v-c53b15fb="">19</div>
      <div data-v-c53b15fb="">6</div>
      <div data-v-c53b15fb="">7</div>
      <div data-v-c53b15fb="">8</div>
      <div data-v-c53b15fb="">10</div>
      <div data-v-c53b15fb="">0</div>
      <div data-v-c53b15fb="">11</div>
      <div data-v-c53b15fb="">3</div>
      <div data-v-c53b15fb="">1</div>`,
      AVG_MISSING: `
      <div data-v-c53b15fb="">7</div>
      <div data-v-c53b15fb="">5</div>
      <div data-v-c53b15fb="">9</div>
      <div data-v-c53b15fb="">9</div>
      <div data-v-c53b15fb="">10</div>
      <div data-v-c53b15fb="">11</div>
      <div data-v-c53b15fb="">15</div>
      <div data-v-c53b15fb="">11</div>
      <div data-v-c53b15fb="">13</div>
      <div data-v-c53b15fb="">7</div>`,
      FREQUENCY: `
      <div data-v-c53b15fb="">11</div>
      <div data-v-c53b15fb="">14</div>
      <div data-v-c53b15fb="">9</div>
      <div data-v-c53b15fb="">9</div>
      <div data-v-c53b15fb="">10</div>
      <div data-v-c53b15fb="">11</div>
      <div data-v-c53b15fb="">8</div>
      <div data-v-c53b15fb="">9</div>
      <div data-v-c53b15fb="">6</div>
      <div data-v-c53b15fb="">13</div>
      `,
      MAX_CONSECUTIVE: `
      <div data-v-c53b15fb="">1</div>
      <div data-v-c53b15fb="">1</div>
      <div data-v-c53b15fb="">1</div>
      <div data-v-c53b15fb="">1</div>
      <div data-v-c53b15fb="">2</div>
      <div data-v-c53b15fb="">4</div>
      <div data-v-c53b15fb="">3</div>
      <div data-v-c53b15fb="">2</div>
      <div data-v-c53b15fb="">1</div>
      <div data-v-c53b15fb="">2</div>
      `,
   },
   C: {
      MISSING: `
      <div data-v-c53b15fb="">1</div>
      <div data-v-c53b15fb="">8</div>
      <div data-v-c53b15fb="">2</div>
      <div data-v-c53b15fb="">17</div>
      <div data-v-c53b15fb="">7</div>
      <div data-v-c53b15fb="">3</div>
      <div data-v-c53b15fb="">4</div>
      <div data-v-c53b15fb="">33</div>
      <div data-v-c53b15fb="">0</div>
      <div data-v-c53b15fb="">12</div>`,
      AVG_MISSING: `
      <div data-v-c53b15fb="">49</div>
      <div data-v-c53b15fb="">5</div>
      <div data-v-c53b15fb="">11</div>
      <div data-v-c53b15fb="">9</div>
      <div data-v-c53b15fb="">8</div>
      <div data-v-c53b15fb="">7</div>
      <div data-v-c53b15fb="">9</div>
      <div data-v-c53b15fb="">13</div>
      <div data-v-c53b15fb="">10</div>
      <div data-v-c53b15fb="">7</div>`,
      FREQUENCY: `
      <div data-v-c53b15fb="">1</div>
      <div data-v-c53b15fb="">15</div>
      <div data-v-c53b15fb="">10</div>
      <div data-v-c53b15fb="">13</div>
      <div data-v-c53b15fb="">11</div>
      <div data-v-c53b15fb="">12</div>
      <div data-v-c53b15fb="">10</div>
      <div data-v-c53b15fb="">6</div>
      <div data-v-c53b15fb="">9</div>
      <div data-v-c53b15fb="">13</div>
      `,
      MAX_CONSECUTIVE: `
      <div data-v-c53b15fb="">1</div>
      <div data-v-c53b15fb="">1</div>
      <div data-v-c53b15fb="">2</div>
      <div data-v-c53b15fb="">4</div>
      <div data-v-c53b15fb="">2</div>
      <div data-v-c53b15fb="">2</div>
      <div data-v-c53b15fb="">2</div>
      <div data-v-c53b15fb="">1</div>
      <div data-v-c53b15fb="">1</div>
      <div data-v-c53b15fb="">2</div>
      `,
   },
   D: {
      MISSING: `
      <div data-v-c53b15fb="">2</div>
      <div data-v-c53b15fb="">15</div>
      <div data-v-c53b15fb="">11</div>
      <div data-v-c53b15fb="">4</div>
      <div data-v-c53b15fb="">1</div>
      <div data-v-c53b15fb="">7</div>
      <div data-v-c53b15fb="">31</div>
      <div data-v-c53b15fb="">12</div>
      <div data-v-c53b15fb="">6</div>
      <div data-v-c53b15fb="">0</div>`,
      AVG_MISSING: `
      <div data-v-c53b15fb="">8</div>
      <div data-v-c53b15fb="">13</div>
      <div data-v-c53b15fb="">9</div>
      <div data-v-c53b15fb="">8</div>
      <div data-v-c53b15fb="">9</div>
      <div data-v-c53b15fb="">10</div>
      <div data-v-c53b15fb="">13</div>
      <div data-v-c53b15fb="">9</div>
      <div data-v-c53b15fb="">8</div>
      <div data-v-c53b15fb="">7</div>`,
      FREQUENCY: `
      <div data-v-c53b15fb="">12</div>
      <div data-v-c53b15fb="">7</div>
      <div data-v-c53b15fb="">10</div>
      <div data-v-c53b15fb="">10</div>
      <div data-v-c53b15fb="">10</div>
      <div data-v-c53b15fb="">9</div>
      <div data-v-c53b15fb="">7</div>
      <div data-v-c53b15fb="">10</div>
      <div data-v-c53b15fb="">12</div>
      <div data-v-c53b15fb="">13</div>
      `,
      MAX_CONSECUTIVE: `
      <div data-v-c53b15fb="">2</div>
      <div data-v-c53b15fb="">1</div>
      <div data-v-c53b15fb="">2</div>
      <div data-v-c53b15fb="">1</div>
      <div data-v-c53b15fb="">2</div>
      <div data-v-c53b15fb="">2</div>
      <div data-v-c53b15fb="">2</div>
      <div data-v-c53b15fb="">2</div>
      <div data-v-c53b15fb="">2</div>
      <div data-v-c53b15fb="">2</div>
      `,
   },
   E: {
      MISSING: `
      <div data-v-c53b15fb="">22</div>
      <div data-v-c53b15fb="">25</div>
      <div data-v-c53b15fb="">4</div>
      <div data-v-c53b15fb="">2</div>
      <div data-v-c53b15fb="">1</div>
      <div data-v-c53b15fb="">13</div>
      <div data-v-c53b15fb="">21</div>
      <div data-v-c53b15fb="">7</div>
      <div data-v-c53b15fb="">12</div>
      <div data-v-c53b15fb="">0</div>`,
      AVG_MISSING: `
      <div data-v-c53b15fb="">11</div>
      <div data-v-c53b15fb="">8</div>
      <div data-v-c53b15fb="">6</div>
      <div data-v-c53b15fb="">9</div>
      <div data-v-c53b15fb="">6</div>
      <div data-v-c53b15fb="">6</div>
      <div data-v-c53b15fb="">13</div>
      <div data-v-c53b15fb="">19</div>
      <div data-v-c53b15fb="">13</div>
      <div data-v-c53b15fb="">7</div>`,
      FREQUENCY: `
      <div data-v-c53b15fb="">8</div>
      <div data-v-c53b15fb="">11</div>
      <div data-v-c53b15fb="">13</div>
      <div data-v-c53b15fb="">10</div>
      <div data-v-c53b15fb="">14</div>
      <div data-v-c53b15fb="">14</div>
      <div data-v-c53b15fb="">7</div>
      <div data-v-c53b15fb="">5</div>
      <div data-v-c53b15fb="">6</div>
      <div data-v-c53b15fb="">12</div>
      `,
      MAX_CONSECUTIVE: `
      <div data-v-c53b15fb="">1</div>
      <div data-v-c53b15fb="">2</div>
      <div data-v-c53b15fb="">1</div>
      <div data-v-c53b15fb="">2</div>
      <div data-v-c53b15fb="">3</div>
      <div data-v-c53b15fb="">2</div>
      <div data-v-c53b15fb="">2</div>
      <div data-v-c53b15fb="">2</div>
      <div data-v-c53b15fb="">1</div>
      <div data-v-c53b15fb="">1</div>
      `,
   },
};

function openChartStatisticsTab(tab) {
   function removeActiveTab() {
      $(".statistic_tab_a").removeClass("active");
      $(".statistic_tab_b").removeClass("active");
      $(".statistic_tab_c").removeClass("active");
      $(".statistic_tab_d").removeClass("active");
      $(".statistic_tab_e").removeClass("active");
   }

   $(".Trend__C").attr("selected-tab", tab);

   if (tab === "A") {
      removeActiveTab();
      $(".statistic_tab_a").addClass("active");
      $("#chart_missing_box").html(GAME_CHART_STATISTICS_HTML.A.MISSING);
      $("#chart_avg_missing_box").html(GAME_CHART_STATISTICS_HTML.A.AVG_MISSING);
      $("#chart_frequency_box").html(GAME_CHART_STATISTICS_HTML.A.FREQUENCY);
      $("#chart_max_consecutive_box").html(GAME_CHART_STATISTICS_HTML.A.MAX_CONSECUTIVE);
   } else if (tab === "B") {
      removeActiveTab();
      $(".statistic_tab_b").addClass("active");
      $("#chart_missing_box").html(GAME_CHART_STATISTICS_HTML.B.MISSING);
      $("#chart_avg_missing_box").html(GAME_CHART_STATISTICS_HTML.B.AVG_MISSING);
      $("#chart_frequency_box").html(GAME_CHART_STATISTICS_HTML.B.FREQUENCY);
      $("#chart_max_consecutive_box").html(GAME_CHART_STATISTICS_HTML.B.MAX_CONSECUTIVE);
   } else if (tab === "C") {
      removeActiveTab();
      $(".statistic_tab_c").addClass("active");
      $("#chart_missing_box").html(GAME_CHART_STATISTICS_HTML.C.MISSING);
      $("#chart_avg_missing_box").html(GAME_CHART_STATISTICS_HTML.C.AVG_MISSING);
      $("#chart_frequency_box").html(GAME_CHART_STATISTICS_HTML.C.FREQUENCY);
      $("#chart_max_consecutive_box").html(GAME_CHART_STATISTICS_HTML.C.MAX_CONSECUTIVE);
   } else if (tab === "D") {
      removeActiveTab();
      $(".statistic_tab_d").addClass("active");
      $("#chart_missing_box").html(GAME_CHART_STATISTICS_HTML.D.MISSING);
      $("#chart_avg_missing_box").html(GAME_CHART_STATISTICS_HTML.D.AVG_MISSING);
      $("#chart_frequency_box").html(GAME_CHART_STATISTICS_HTML.D.FREQUENCY);
      $("#chart_max_consecutive_box").html(GAME_CHART_STATISTICS_HTML.D.MAX_CONSECUTIVE);
   } else if (tab === "E") {
      removeActiveTab();
      $(".statistic_tab_e").addClass("active");
      $("#chart_missing_box").html(GAME_CHART_STATISTICS_HTML.E.MISSING);
      $("#chart_avg_missing_box").html(GAME_CHART_STATISTICS_HTML.E.AVG_MISSING);
      $("#chart_frequency_box").html(GAME_CHART_STATISTICS_HTML.E.FREQUENCY);
      $("#chart_max_consecutive_box").html(GAME_CHART_STATISTICS_HTML.E.MAX_CONSECUTIVE);
   } else {
      console.log("No tab");
   }

   initChartTab(1, tab);
}

function showTrendData(list_orders, tab = "A") {
   const containerId = "#chart_container";

   if (list_orders.length == 0) {
      return $(containerId).html(`
       <div data-v-a9660e98="" class="van-empty">
         <div class="van-empty__image">
           <img src="/images/empty-image-default.png" />
         </div>
         <p class="van-empty__description">No data</p>
       </div>`);
   }

   const html = list_orders
      .map((order, index) => {
         const tab_list = ["A", "B", "C", "D", "E"];
         const tab_index = tab_list.indexOf(tab);
         const finalResult = order.result[tab_index];
         const nextFinalResult = list_orders?.[index + 1]?.result[0];

         const isBig = parseInt(finalResult) >= 5;
         const isEven = parseInt(finalResult) % 2 === 0;
         const NumberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

         const isLastOrder = index === list_orders.length - 1;

         return `
         <div data-v-c53b15fb="" issuenumber="${order.period}" number="${finalResult}" colour="${isBig ? "red" : "green"}" rowid="${index}">
            <div data-v-c53b15fb="" class="van-row">
               <div data-v-c53b15fb="" class="van-col van-col--8">
                  <div data-v-c53b15fb="" class="Trend__C-body2-IssueNumber">${order.period}</div>
               </div>
               <div data-v-c53b15fb="" class="van-col van-col--16">
                  <div data-v-c53b15fb="" class="Trend__C-body2-Num">
                     <canvas data-v-c53b15fb="" canvas="" id="myCanvas${index}" class="line-canvas"></canvas>
                     ${NumberList.map((number, index) => {
                        return `<div data-v-c53b15fb="" class="Trend__C-body2-Num-item ${finalResult == number ? `action` : ""}">${number}</div>`;
                     }).join(" ")}

                     ${isBig ? `<div data-v-c53b15fb="" class="Trend__C-body2-Num-BS isB">H</div>` : `<div data-v-c53b15fb="" class="Trend__C-body2-Num-BS">L</div>`}
                     ${isEven ? `<div data-v-c53b15fb="" class="Trend__C-body2-Num-OE">E</div>` : `<div data-v-c53b15fb="" class="Trend__C-body2-Num-OE isE">O</div>`}
                  </div>
               </div>
             ${
                isLastOrder
                   ? ""
                   : `
               <script>
                  drawChartLineInCanvas(${finalResult},${nextFinalResult}, "myCanvas${index}")
               </script>`
             }
            </div>
         </div>`;
      })
      .join(" ");

   $(containerId).empty();
   $(containerId).html(html);
}

async function initChartTab(page = 1, tab = "A") {
   let size = 10;
   let offset = page === 1 ? 0 : (page - 1) * size;
   let limit = page * size;
   $.ajax({
      type: "POST",
      url: "/api/webapi/5d/GetNoaverageEmerdList",
      data: {
         gameJoin: GAME_TYPE,
         pageno: offset,
         pageto: "10",
      },
      dataType: "json",
      success: function (response) {
         let list_orders = response.data.gameslist;

         $("#period").text(response.period);

         $("#number_result__chart").text(`${page}/${response.page}`);

         if (page == 1) $("#chart__bottom_nav .previous_page").addClass("disabled");
         else $("#chart__bottom_nav .previous_page").removeClass("disabled");

         if (page == response.page) $("#chart__bottom_nav .next_page").addClass("disabled");
         else $("#chart__bottom_nav .next_page").removeClass("disabled");

         showTrendData(list_orders, tab);

         $(".Loading").fadeOut(0);
      },
   });
}

$("#chart__bottom_nav .previous_page").off("click.ch_previous_page");
$("#chart__bottom_nav .previous_page").on("click.ch_previous_page", function (e) {
   e.preventDefault();
   $("#chart__bottom_nav .previous_page").addClass("block-click");

   $(".Loading").fadeIn(0);

   const currentPage = parseInt($("#number_result__chart").text().split("/")[0]);
   const previousPage = 1 <= currentPage - 1 ? currentPage - 1 : currentPage;
   console.log(previousPage);
   initChartTab(previousPage);

   $(".Loading").fadeOut(0);

   $("#chart__bottom_nav .previous_page").removeClass("block-click");
});

$("#chart__bottom_nav .next_page").off("click.ch_next_page");
$("#chart__bottom_nav .next_page").on("click.ch_next_page", function (e) {
   e.preventDefault();
   $("#chart__bottom_nav .next_page").addClass("block-click");

   $(".Loading").fadeIn(0);

   const currentPage = parseInt($("#number_result__chart").text().split("/")[0]);
   const nextPage = currentPage + 1;
   console.log(nextPage);
   initChartTab(nextPage);

   $(".Loading").fadeOut(0);

   $("#chart__bottom_nav .next_page").removeClass("block-click");
});

var pageno = 0;
var limit = 10;
var page = 1;
$("#trend_tab_button").click(function (e) {
   e.preventDefault();
   pageno = 0;
   limit = 10;
   page = 1;
   $(".Loading").fadeIn(0);
   $("#GetNoaverageEmerdList").removeClass("block-click");
   $("#GetNoaverageEmerdList").find(".txt").removeClass("action");
   $("#GetMyEmerdList").removeClass("block-click");
   $("#GetMyEmerdList").find(".txt").removeClass("action");

   $(this).addClass("block-click");
   $(this).find(".txt").addClass("action");
   $("#all").fadeOut(0);
   $("#trend").fadeIn(0);
   $("#me").fadeOut(0);
   $("#pagination_nav").fadeOut(0);
   $("#number_result").attr("data-select", "me");
   initChartTab();
   $("#previous").addClass("block-click");
   $("#previous").removeClass("action");
   $("#previous .van-icon-arrow").css("color", "#7f7f7f");
   $("#next").removeClass("block-click");
   $("#next").addClass("action");
   $("#next .van-icon-arrow").css("color", "#fff");
});
$("#GetMyEmerdList").click(function (e) {
   e.preventDefault();
   pageno = 0;
   limit = 10;
   page = 1;
   $(".Loading").fadeIn(0);
   $("#GetNoaverageEmerdList").removeClass("block-click");
   $("#GetNoaverageEmerdList").find(".txt").removeClass("action");
   $("#trend_tab_button").removeClass("block-click");
   $("#trend_tab_button").find(".txt").removeClass("action");
   $(this).addClass("block-click");
   $(this).find(".txt").addClass("action");
   $("#all").fadeOut(0);
   $("#me").fadeIn(0);
   $("#pagination_nav").fadeIn(0);
   $("#trend").fadeOut(0);
   $("#number_result").attr("data-select", "me");
   showMeJoin();
   $("#previous").addClass("block-click");
   $("#previous").removeClass("action");
   $("#previous .van-icon-arrow").css("color", "#7f7f7f");
   $("#next").removeClass("block-click");
   $("#next").addClass("action");
   $("#next .van-icon-arrow").css("color", "#fff");
});

var pageno = 0;
var limit = 10;
var page = 1;
$("#next").click(function (e) {
   e.preventDefault();
   let check = $("#number_result").attr("data-select");
   $(".Loading").fadeIn(0);
   $("#previous").removeClass("block-click");
   $("#previous").addClass("action");
   $("#previous .van-icon-arrow-left").css("color", "#fff");
   pageno += 10;
   let pageto = limit;
   let url = "";
   if (check == "all") {
      url = "/api/webapi/5d/GetNoaverageEmerdList";
   } else {
      url = "/api/webapi/5d/GetMyEmerdList";
   }
   $.ajax({
      type: "POST",
      url: url,
      data: {
         gameJoin: GAME_TYPE,
         pageno: pageno,
         pageto: pageto,
      },
      dataType: "json",
      success: async function (response) {
         $(".Loading").fadeOut(0);
         if (response.status === false) {
            pageno -= 10;
            $("#next").addClass("block-click");
            $("#next").removeClass("action");
            $("#next .van-icon-arrow").css("color", "#7f7f7f");
            alertMess(response.msg);
            return false;
         }
         let list_orders = response.data.gameslist;
         $("#period").text(response.period);
         $("#number_result").text(++page + "/" + response.page);
         if (check == "all") {
            ShowListOrder(list_orders);
         } else {
            await GetMyEmerdList(list_orders);
            setTimeout(() => {
               $("#showJoinMe .hb").click(function (e) {
                  e.preventDefault();
                  $(this).find(".details").toggleClass("display-none");
               });

               $(".copy-to-img").click(function (e) {
                  e.preventDefault();
                  var copyText = $(this).attr("data-clipboard-text");
                  navigator.clipboard.writeText(copyText);
                  alertMess("Copy successful");
               });
            }, 500);
         }
      },
   });
});
$("#previous").click(function (e) {
   e.preventDefault();
   let check = $("#number_result").attr("data-select");
   $(".Loading").fadeIn(0);
   $("#next").removeClass("block-click");
   $("#next").addClass("action");
   $("#next .van-icon-arrow").css("color", "#fff");
   pageno -= 10;
   let pageto = limit;
   let url = "";
   if (check == "all") {
      url = "/api/webapi/5d/GetNoaverageEmerdList";
   } else {
      url = "/api/webapi/5d/GetMyEmerdList";
   }
   $.ajax({
      type: "POST",
      url: url,
      data: {
         gameJoin: GAME_TYPE,
         pageno: pageno,
         pageto: pageto,
      },
      dataType: "json",
      success: async function (response) {
         $(".Loading").fadeOut(0);
         if (page - 1 < 2) {
            $("#previous").addClass("block-click");
            $("#previous").removeClass("action");
            $("#previous .van-icon-arrow-left").css("color", "#7f7f7f");
         }
         if (response.status === false) {
            pageno = 0;
            $("#previous .arr:eq(0)").addClass("block-click");
            $("#previous .arr:eq(0)").removeClass("action");
            $("#previous .van-icon-arrow-left").css("color", "#7f7f7f");
            alertMess(response.msg);
            return false;
         }
         let list_orders = response.data.gameslist;
         $("#period").text(response.period);
         $("#number_result").text(--page + "/" + response.page);
         if (check == "all") {
            ShowListOrder(list_orders);
         } else {
            await GetMyEmerdList(list_orders);
            setTimeout(() => {
               $("#showJoinMe .hb").click(function (e) {
                  e.preventDefault();
                  $(this).find(".details").toggleClass("display-none");
               });

               $(".copy-to-img").click(function (e) {
                  e.preventDefault();
                  var copyText = $(this).attr("data-clipboard-text");
                  navigator.clipboard.writeText(copyText);
                  alertMess("Copy Successfull");
               });
            }, 500);
         }
      },
   });
});

$(".circular, #quytacs").click(function (e) {
   e.preventDefault();
   $(".supportss").fadeIn();
   $(".van-overlay").fadeIn();
   $("body").addClass("van-overflow-hidden");
});

$(".submit-support").click(function (e) {
   e.preventDefault();
   downAndHidden();
});

$("#game-join .item").click(async function (e) {
   e.preventDefault();
   let game = $(this).attr("game");
   $("html").attr("data-dpr", game);
   $(".Loading").fadeIn(0);
   await callListOrder();
   await showMeJoin();

   // $('.Loading').fadeOut(0);
   $(".minH .mark-box").hide();

   let actionOld = $("#game-join").find(".action");
   actionOld.find(".img .van-image:eq(0)").fadeOut(0);
   actionOld.find(".img .van-image:eq(1)").fadeIn(0);
   actionOld.removeClass("action block-click");

   $(this).addClass("action block-click");
   $(this).find(".img .van-image:eq(0)").fadeIn(0);
   $(this).find(".img .van-image:eq(1)").fadeOut(0);
});
