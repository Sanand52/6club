const getGameType = () => {
  const urlParams = new URLSearchParams(window.location.search);

  return urlParams.get("game_type") || "1";
};

let GAME_TYPE_ID = getGameType();
let GAME_NAME = GAME_TYPE_ID === "1" ? "k3d" : `k3d${GAME_TYPE_ID}`;

let My_Bets_Pages = 1;
let Game_History_Pages = 1;

let countDownInterval1 = null;
let countDownInterval2 = null;
let countDownInterval3 = null;

var audio1 = new Audio("/audio/di1.da40b233.mp3");
var audio2 = new Audio("/audio/di2.317de251.mp3");

var clicked = false;

function openAudio() {
  audio1.muted = true;
  audio1.play();
  audio2.muted = true;
  audio2.play();
}

$("body").off("click.audio");
$("body").on("click.audio", function (e) {
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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const loading = {
  show: () => {
    $(".van-overlay").fadeIn(0);
    $(".van-toast--loading").fadeIn(0);
  },
  hide: () => {
    $(".van-overlay").fadeOut(0);
    $(".van-toast--loading").fadeOut(0);
  },
};

const pagination = {
  hide(type) {
    $(`.${type}__C-foot`).hide();
  },
  show(type) {
    $(`.${type}__C-foot`).show();
  },
  setState({ pageLength = null, currentPage, type }) {
    $(`.${type}__C-foot .${type}__C-foot-page`).text(
      `${currentPage}/${pageLength}`,
    );

    $(`.${type}__C-foot .${type}__C-foot-previous`).removeClass("disabled");
    $(`.${type}__C-foot .${type}__C-foot-next`).removeClass("disabled");

    if (currentPage === 1) {
      $(`.${type}__C-foot .${type}__C-foot-previous`).addClass("disabled");
    }

    if (currentPage === pageLength) {
      $(`.${type}__C-foot .${type}__C-foot-next`).addClass("disabled");
    }
  },
  getPreviousBtnSelector(type) {
    return `.${type}__C-foot .${type}__C-foot-previous`;
  },
  getNextBtnSelector(type) {
    return `.${type}__C-foot .${type}__C-foot-next`;
  },
  getCurrentPage(type) {
    return parseInt(
      $(`.${type}__C-foot .${type}__C-foot-page`).text().split("/")[0],
    );
  },
};

const TAB_SECTION_MAP = {
  MY_BETS: "MyGameRecord",
  GAME_HISTORY: "GameRecord",
  CHART: "Trend",
};

function countDownTimer({ GAME_TYPE_ID }) {
  const getTimeMSS = (countDownDate) => {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let minute =
      GAME_TYPE_ID == 30 ? 0 : Math.ceil(minutes % parseInt(GAME_TYPE_ID));

    let seconds1 = Math.floor((distance % (1000 * 60)) / 10000);
    let seconds2 = Math.floor(((distance % (1000 * 60)) / 1000) % 10);

    if (seconds1 > 2 && GAME_TYPE_ID == 30) {
      seconds1 = seconds1 - 3;
    }

    return { minute, seconds1, seconds2 };
  };

  var countDownDate = new Date("2030-07-16T23:59:59.9999999+03:00").getTime();

  countDownInterval1 = setInterval(function () {
    const { minute, seconds1, seconds2 } = getTimeMSS(countDownDate);

    if (GAME_TYPE_ID !== "1" && GAME_TYPE_ID !== "30") {
      $(".K3TL__C-time div:eq(1)").text(minute);
    } else {
      $(".K3TL__C-time div:eq(1)").text("0");
    }

    $(".K3TL__C-time div:eq(3)").text(seconds1);
    $(".K3TL__C-time div:eq(4)").text(seconds2);
  }, 0);

  countDownInterval2 = setInterval(() => {
    const { minute, seconds1, seconds2 } = getTimeMSS(countDownDate);
    const check_volume = localStorage.getItem("volume");

    if (minute == 0 && seconds1 == 0 && seconds2 <= 5) {
      if (clicked) {
        if (check_volume == "on") {
          playAudio1();
        }
      }
    }
    if (minute == 0 && seconds1 == 5 && seconds2 == 5) {
      if (clicked) {
        if (check_volume == "on") {
          playAudio2();
        }
      }
    }
  }, 1000);

  countDownInterval3 = setInterval(function () {
    const { minute, seconds1, seconds2 } = getTimeMSS(countDownDate);

    if (minute == 0 && seconds1 == 0 && seconds2 <= 5) {
      $("#betting_popup").slideUp();

      $(".K3B__C-mark").show();
      $(".K3B__C-mark div:eq(0)").text(seconds1);
      $(".K3B__C-mark div:eq(1)").text(seconds2);
    } else {
      $(".K3B__C-mark").hide();
    }
  }, 0);
}

$(document).ready(function () {
  countDownTimer({ GAME_TYPE_ID });
});

const selectActiveClockByGameType = (GAME_TYPE_ID) => {
  GAME_TYPE_ID = `${GAME_TYPE_ID}`;
  GAME_NAME = GAME_TYPE_ID === "1" ? "k3d" : `k3d${GAME_TYPE_ID}`;
  window.history.pushState({}, "", `/k3/?game_type=${GAME_TYPE_ID}`);
  initGameLogics({
    GAME_TYPE_ID,
    GAME_NAME,
    My_Bets_Pages,
    Game_History_Pages,
  });
  clearInterval(countDownInterval1);
  clearInterval(countDownInterval2);
  clearInterval(countDownInterval3);
  countDownTimer({ GAME_TYPE_ID });
};

$(".GameList__C .GameList__C-item").click(function (e) {
  e.preventDefault();
  const GAME_TYPE_ID = $(this).attr("data-game-type");

  $(".GameList__C .GameList__C-item").removeClass("active");
  $(this).addClass("active");

  selectActiveClockByGameType(GAME_TYPE_ID);
});

initGameLogics({ GAME_TYPE_ID, GAME_NAME, My_Bets_Pages, Game_History_Pages });

fetch("/api/webapi/GetUserInfo")
  .then((response) => response.json())
  .then((data) => {
    loading.hide();
    if (data.status === false) {
      unsetCookie();
      return false;
    }
    $("#balance_amount").text(`₹ ${formatIndianNumber(data.data.money_user)} `);
    $("#bonus_balance_amount").text(
      `₹ ${formatIndianNumber(data.data.bonus_money)} `,
    );
  });

$(".reload_money").click(function (e) {
  e.preventDefault();
  $(this).addClass("action block-click");
  setTimeout(() => {
    $(this).removeClass("action block-click");
  }, 3000);
  fetch("/api/webapi/GetUserInfo")
    .then((response) => response.json())
    .then((data) => {
      if (data.status === false) {
        unsetCookie();
        return false;
      }
      $("#balance_amount").text(
        `₹ ${formatIndianNumber(data.data.money_user)} `,
      );
      $("#bonus_balance_amount").text(
        `₹ ${formatIndianNumber(data.data.bonus_money)} `,
      );
    });
});

function drawChartLineInCanvas(topBoxNumber, bottomBoxNumber, canvasId) {
  const myCanvas = document.getElementById(canvasId);
  let boxXList = [10, 40, 70, 100, 128, 157, 186, 215, 244, 273];
  const ctx0 = myCanvas.getContext("2d");
  ctx0.strokeStyle = "#B1835A";
  ctx0.beginPath();
  ctx0.moveTo(boxXList[topBoxNumber], 21);
  ctx0.lineTo(boxXList[bottomBoxNumber], 128);
  ctx0.stroke();
}

function selectActiveClock(currentTime) {
  $(".min_t_30").removeClass("active");
  $(".min_t_1").removeClass("active");
  $(".min_t_3").removeClass("active");
  $(".min_t_5").removeClass("active");
  $(".min_t_10").removeClass("active");

  switch (parseInt(currentTime)) {
    case 30:
      $(".min_t_30").addClass("active");
      break;
    case 1:
      $(".min_t_1").addClass("active");
      break;
    case 3:
      $(".min_t_3").addClass("active");
      break;
    case 5:
      $(".min_t_5").addClass("active");
      break;
    case 10:
      $(".min_t_10").addClass("active");
      break;
    default:
      throw new Error("Invalid time");
  }
}
const displayResultHandler = ({ status, amount, period, result }) => {
  let resultSplit = String(result).split("");

  const sum = resultSplit.reduce((a, b) => parseInt(a) + parseInt(b), 0);

  const resultHtml = `
    <div data-v-2d418cc5="" class="line1">
        ${resultSplit.map((item) => {
          return `<div data-v-2d418cc5="" class="n${item}"></div>`;
        })}
    </div>
    <div data-v-2d418cc5="" class="line2">
        <div data-v-2d418cc5="">${sum}</div>
        <div data-v-2d418cc5="" class="yuan">${sum > 10 ? "Big" : "Small"}</div>
        <div data-v-2d418cc5="">${sum % 2 === 0 ? "Even" : "Odd"}</div>
    </div>
   `;

  $("#lottery_results_box").html(resultHtml);

  $("#popup_game_details").html(`Period:K3 ${GAME_TYPE_ID} minute ${period}`);

  if (status === STATUS_MAP.WIN) {
    $("#popup_win_rupees_display").html(`₹ ${formatIndianNumber(amount)}`);
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
};

function showGameHistoryData(list_orders) {
  const containerId = ".GameRecord__C .GameRecord__C-body";

  displayLast5Result({
    results: list_orders.slice(0, 5).map((game) => game.amount),
  });

  if (list_orders.length == 0) {
    return $(containerId).html(`
        <div data-v-a9660e98="" class="van-empty">
            <div class="van-empty__image">
                <img src="/images/empty-image-default.png" />
            </div>
            <p class="van-empty__description">No data</p>
        </div>
     `);
  }

  let html = list_orders
    .map((list_order) => {
      const resultSplit = String(list_order.result).split("");

      const totalSum = String(list_order.result)
        .split("")
        .reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0);

      return `
          <div data-v-4e09079f="" class="van-row">
            <div data-v-4e09079f="" class="van-col van-col--8">
                ${list_order.period}
            </div>
            <div data-v-4e09079f="" class="van-col van-col--1">
                <span data-v-4e09079f="">${totalSum}</span>
            </div>
            <div data-v-4e09079f="" class="van-col van-col--4">
                <span data-v-4e09079f="">${totalSum <= 10 ? "Small" : "Big"}</span>
            </div>
            <div data-v-4e09079f="" class="van-col van-col--4">
                <span data-v-4e09079f="">${totalSum % 2 === 0 ? "Even" : "Odd"}</span>
            </div>
            <div data-v-4e09079f="" class="van-col van-col--6">
                <div data-v-4e09079f="" class="GameRecord__C-body-premium">
                    <div data-v-4e09079f="" class="n${resultSplit[0]}"></div>
                    <div data-v-4e09079f="" class="n${resultSplit[1]}"></div>
                    <div data-v-4e09079f="" class="n${resultSplit[2]}"></div>
                </div>
            </div>
          </div>
           `;
    })
    .join(" ");

  $(containerId).html(html);
}

function showTrendData(list_orders) {
  const containerId = ".Trend__C .Trend__C-body";

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
      const resultSplit = String(order.result).split("");

      let NumberText = "";

      const is3Different = new Set(resultSplit).size === 3;
      const is2Same = new Set(resultSplit).size === 2;
      const is3Same = new Set(resultSplit).size === 1;

      const resultSplitAscending = resultSplit.sort((a, b) => a - b);

      const is3Consecutive =
        resultSplitAscending[2] - resultSplitAscending[0] === 2;

      if (is3Same) {
        NumberText = "3 same numbers";
      } else if (is2Same) {
        NumberText = "2 same numbers";
      } else if (is3Consecutive) {
        NumberText = "3 consecutive numbers";
      } else if (is3Different) {
        NumberText = "3 different numbers";
      } else {
        NumberText = "";
      }

      return `
        <div data-v-4159c83a="" class="van-row">
          <div data-v-4159c83a="" class="van-col van-col--8">${order.period}</div>
          <div data-v-4159c83a="" class="van-col van-col--6">
              <div data-v-4159c83a="" class="Trend__C-body-premium">
                  <div data-v-4159c83a="" class="n${resultSplit[0]}"></div>
                  <div data-v-4159c83a="" class="n${resultSplit[1]}"></div>
                  <div data-v-4159c83a="" class="n${resultSplit[2]}"></div>
              </div>
          </div>
          <div data-v-4159c83a="" class="van-col van-col--10">
              <div data-v-4159c83a="" class="Trend__C-body-gameText"><span data-v-4159c83a="">${NumberText}</span>
              </div>
          </div>
        </div>
        `;
    })
    .join(" ");

  $(containerId).empty();
  $(containerId).html(html);
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

function showMyBetsData(list_orders) {
  const containerId = ".MyGameRecord__C .MyGameRecord__C-body";

  if (list_orders.length == 0) {
    return $(containerId).html(`
     <div data-v-a9660e98="" class="van-empty">
         <div class="van-empty__image">
             <img src="/images/empty-image-default.png" />
         </div>
         <p class="van-empty__description">No Data</p>
     </div>
     `);
  }

  let html = list_orders
    .map((list_order, index) => {
      let join = list_order.bet;
      let selected = "";
      let color = "";
      if (join == "l") {
        color = "l-big";
        selected = "Big";
      } else if (join == "n") {
        color = "l-small";
        selected = "Small";
      } else if (join == "t") {
        color = "l-violet";
        selected = "Violet";
      } else if (join == "d") {
        color = "l-red";
        selected = "Red";
      } else if (join == "x") {
        color = "l-green";
        selected = "Green";
      } else if (join == "0") {
        color = "l-0";
        selected = "0";
      } else if (join == "5") {
        color = "l-5";
        selected = "5";
      } else if (Number(join) % 2 == 0) {
        color = "l-green";
        selected = Number(join);
      } else if (Number(join) % 2 != 0) {
        color = "l-red";
        selected = Number(join);
      }

      if ((!isNumber(join) && join == "l") || join == "n") {
        checkJoin = `
                  ${selected}
                   `;
      } else {
        checkJoin = `
                   <span data-v-a9660e98="">${isNumber(join) ? join : ""}</span>`;
      }

      let selectedHtml = ``;
      let displayIconClass = ``;
      let displayIconHtml = ``;

      const isTotalTabActive = list_order.join_bet == 1;
      const isSame2TabActive = list_order.join_bet == 2;
      const isSame3TabActive = list_order.join_bet == 3;
      const isDifferentTabActive = list_order.join_bet == 4;

      if (isTotalTabActive) {
        selectedHtml = `
        <div data-v-a5ef3154="" class="line1">
          <span data-v-a5ef3154="">Total:</span>
          ${list_order.bet
            .split("")
            .map((item) => {
              return `<span data-v-a9660e98="" class="btn">${item === "b" ? "Big" : item === "s" ? "Small" : item === "l" ? "Odd" : item === "c" ? "Even" : item}</span>`;
            })
            .join(" ")}
        </div>
        `;
        if (list_order.bet == "c") {
          displayIconClass = `l-E`;
          displayIconHtml = `Even`;
        } else if (list_order.bet == "l") {
          displayIconClass = `l-O`;
          displayIconHtml = `Odd`;
        } else if (list_order.bet == "b") {
          displayIconClass = `l-H`;
          displayIconHtml = `Big`;
        } else if (list_order.bet == "s") {
          displayIconClass = `l-L`;
          displayIconHtml = `Small`;
        } else if (
          list_order.bet.includes("c") ||
          list_order.bet.includes("l") ||
          list_order.bet.includes("b") ||
          list_order.bet.includes("s")
        ) {
          displayIconClass = `l-${list_order.bet.split("")[0]}`;
          displayIconHtml = list_order.bet.split("")[0];
        } else {
          displayIconClass = `l-${list_order.bet}`;
          displayIconHtml = list_order.bet;
        }
      }

      if (isSame2TabActive) {
        selectedHtml = `
        <div data-v-a5ef3154="" class="line1">
          <span data-v-a5ef3154="">2 same numbers:</span>
          ${list_order.bet
            .replace("@", "")
            .split(",")
            .map((item) => {
              return `<span data-v-a5ef3154="" class="btn actionViolet">${item}</span>`;
            })
            .join(" ")}
        </div>
        `;

        displayIconClass = `l-${list_order.bet
          .replace("@", "")
          .split(",")
          .join("")}`;
        displayIconHtml = list_order.bet.replace("@", "").split(",").join("");
      }

      if (isSame3TabActive) {
        if (list_order.bet.includes("@3")) {
          selectedHtml = `
          ${
            list_order.bet.replace("@3", "").split(",")?.[0] !== ""
              ? `<div data-v-a5ef3154="" class="line1">
            <span data-v-a5ef3154="">3 same numbers:</span>
            ${list_order.bet
              .replace("@3", "")
              .split(",")
              .map((item) => {
                return `<span data-v-a5ef3154="" class="btn actionViolet">${item}</span>`;
              })
              .join(" ")}
          </div>}`
              : ""
          }
          <div data-v-a5ef3154="" class="line1">
            <span data-v-a5ef3154="">Any 3 same numbers:</span>
          </div>
          `;
          displayIconClass = `l-undefined`;
          displayIconHtml = "3≠";
        } else {
          selectedHtml = `
          <div data-v-a5ef3154="" class="line1">
            <span data-v-a5ef3154="">3 same numbers:</span>
            ${list_order.bet
              .replace("@", "")
              .split(",")
              .map((item) => {
                return `<span data-v-a5ef3154="" class="btn actionViolet">${item}</span>`;
              })
              .join(" ")}
          </div>
          `;
          displayIconClass = `l-num`;
          displayIconHtml = list_order.bet;
        }
      }

      if (isDifferentTabActive) {
        if (list_order.bet.includes("@u@")) {
          const different3 = list_order.bet.split("@u@")?.[0].split(",");
          const different2 = list_order.bet.split("@u@")?.[1].split(",");

          selectedHtml = `
            ${
              different3[0] !== ""
                ? `
                <div data-v-a5ef3154="" class="line1">
                  <span data-v-a5ef3154="">3 different numbers:</span>
                  ${different3
                    .map((item) => {
                      return `<span data-v-a5ef3154="" class="actionViolet">${item}</span>`;
                    })
                    .join(" ")}
                </div>`
                : ""
            }
            <div data-v-a5ef3154="" class="line1">
              <span data-v-a5ef3154="">3 continuous numbers</span>
            </div>
            ${
              different2[0] !== ""
                ? `
                <div data-v-a5ef3154="" class="line1">
                  <span data-v-a5ef3154="">2 different numbers:</span>
                  ${different2
                    .map((item) => {
                      return `<span data-v-a5ef3154="" class="actionViolet">${item}</span>`;
                    })
                    .join(" ")}
                </div>`
                : ""
            }
            `;

          displayIconClass = `l-undefined`;
          displayIconHtml = "3≠";
        }
        if (list_order.bet.includes("@y@")) {
          const different3 = list_order.bet.split("@y@")?.[0].split(",");
          const different2 = list_order.bet.split("@y@")?.[1].split(",");

          selectedHtml = `
            ${
              different3[0] !== ""
                ? `
                <div data-v-a5ef3154="" class="line1">
                  <span data-v-a5ef3154="">3 different numbers:</span>
                  ${different3
                    .map((item) => {
                      return `<span data-v-a5ef3154="" class="actionViolet">${item}</span>`;
                    })
                    .join(" ")}
                </div>`
                : ""
            }
            ${
              different2[0] !== ""
                ? `
                <div data-v-a5ef3154="" class="line1">
                  <span data-v-a5ef3154="">2 different numbers:</span>
                  ${different2
                    .map((item) => {
                      return `<span data-v-a5ef3154="" class="actionViolet">${item}</span>`;
                    })
                    .join(" ")}
                </div>`
                : ""
            }
            `;

          if (different3[0] !== "") {
            displayIconClass = `l-undefined`;
            displayIconHtml = different3;
          } else {
            displayIconClass = `l-undefined`;
            displayIconHtml = different2;
          }
        }
      }

      return `
        <div data-v-a5ef3154="" class="MyGameRecordList__C-item" onclick="openGameBetDetails(${index})">
            <div data-v-a5ef3154="" class="MyGameRecordList__C-item-l MyGameRecordList__C-item-${displayIconClass}">${displayIconHtml}</div>
            <div data-v-a5ef3154="" class="MyGameRecordList__C-item-m">
                <div data-v-a5ef3154="" class="MyGameRecordList__C-item-m-top">${list_order.stage}</div>
                <div data-v-a5ef3154="" class="MyGameRecordList__C-item-m-bottom">${timerJoin(list_order.time)}</div>
            </div>
             ${
               list_order.status !== 0
                 ? `<div data-v-a5ef3154="" class="MyGameRecordList__C-item-r ${list_order.status == 1 ? "success" : "red"}">
                      <div data-v-a5ef3154="" class="${list_order.status === 1 ? "success" : ""}">${list_order.status == 1 ? "Success" : "Failed"}</div>
                      <span data-v-a5ef3154="" class="${list_order.status === 1 ? "success" : ""}">${list_order.status === 1 ? `+₹${Number(list_order.get).toFixed(2)}` : `-₹${Number(list_order.money).toFixed(2)}`}</span>
                    </div>`
                 : ""
             }
        </div>

        <div data-v-a5ef3154="" class="MyGameRecordList__C-detail details_box_${index}" style="display: none">
          <div data-v-a5ef3154="" class="MyGameRecordList__C-detail-text">Details</div>
          <div data-v-a5ef3154="" class="MyGameRecordList__C-detail-line">Order number <div data-v-a5ef3154="">
                  ${list_order.id_product} <svg data-v-a5ef3154="" class="svg-icon icon-copy">
                      <use xlink:href="#icon-copy"></use>
                  </svg></div>
          </div>
          <div data-v-a5ef3154="" class="MyGameRecordList__C-detail-line">Period <div data-v-a5ef3154="">${list_order.stage}</div>
          </div>
          <div data-v-a5ef3154="" class="MyGameRecordList__C-detail-line">Purchase amount <div data-v-a5ef3154="">₹${Number(list_order.money).toFixed(2)}</div>
          </div>
          <div data-v-a5ef3154="" class="MyGameRecordList__C-detail-line">
            Quantity <div data-v-a5ef3154="">${Number(list_order.amount)}</div>
          </div>
          <div data-v-a5ef3154="" class="MyGameRecordList__C-detail-line">
            Amount after tax <div data-v-a5ef3154="" class="red">₹${Number(list_order.price).toFixed(2)}</div>
          </div>
          <div data-v-a5ef3154="" class="MyGameRecordList__C-detail-line">
            Tax <div data-v-a5ef3154="">₹${Number(list_order.fee).toFixed(2)}</div>
          </div>
          <div data-v-a5ef3154="" class="MyGameRecordList__C-detail-line"  style="display:${list_order.status == 0 ? "none" : ""};">
                Result 
                <div data-v-a5ef3154="" class="numList">
                ${list_order.result
                  .split("")
                  .map((num) => {
                    return `<div data-v-a5ef3154="" class="n${num}"></div>`;
                  })
                  .join(" ")}
                </div>
          </div>
          <div data-v-a5ef3154="" class="MyGameRecordList__C-detail-line noLine"  style="display:${list_order.status == 0 ? "none" : ""};">
              Select 
              ${selectedHtml}
          </div>
          <div data-v-a5ef3154="" class="MyGameRecordList__C-detail-line"  style="display:${list_order.status == 0 ? "none" : ""};">
              Status 
              <div data-v-a5ef3154="" class="${list_order.status == 1 ? "green" : "red"}">${list_order.status == 1 ? "Success" : "Failed"}</div>
          </div>
          <div data-v-a5ef3154="" class="MyGameRecordList__C-detail-line">
              Win/lose 
              <div data-v-a5ef3154="" class="${list_order.status == 1 ? "green" : "red"}">${list_order.status == 1 ? `₹${list_order.get.toFixed(2)}` : `- ₹${list_order.money}`}</div>
          </div>
          <div data-v-a5ef3154="" class="MyGameRecordList__C-detail-line">
              Order time 
              <div data-v-a5ef3154="">${timerJoin(list_order.time)}</div>
          </div>
      </div>
           `;
    })
    .join(" "); //</div>

  $(containerId).html(html);
}

function initGameLogics({
  GAME_TYPE_ID,
  GAME_NAME,
  My_Bets_Pages,
  Game_History_Pages,
}) {
  selectActiveClock(parseInt(GAME_TYPE_ID));

  //--------------------- k3 game logic ---------------------

  var pageno = 0;
  var limit = 10;
  var page = 1;

  // ---------------------- k3 bet tab -----------------------
  const BET_TAB_MAP = {
    TOTAL: "total",
    SAME_2: "same_2",
    SAME_3: "same_3",
    DIFFERENT: "different",
  };

  const setActiveBetTab = (tab) => {
    $(".K3B__C-bettingList").hide();
    $(".K3B__C-betting2").hide();
    $(".K3B__C-betting3").hide();
    $(".K3B__C-betting4").hide();

    switch (tab) {
      case BET_TAB_MAP.TOTAL:
        $(".K3B__C-bettingList").show();
        break;
      case BET_TAB_MAP.SAME_2:
        $(".K3B__C-betting2").show();
        break;
      case BET_TAB_MAP.SAME_3:
        $(".K3B__C-betting3").show();
        break;
      case BET_TAB_MAP.DIFFERENT:
        $(".K3B__C-betting4").show();
        break;
      default:
        throw new Error("Invalid tab");
    }
  };

  $("#total_bet_tab_btn").off("click.total_bet_tab_btn");
  $("#total_bet_tab_btn").on("click.total_bet_tab_btn", function (e) {
    e.preventDefault();
    setActiveBetTab(BET_TAB_MAP.TOTAL);
    bettingPopupClose();
    cleanBettingValueState();
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });

  $("#same_2_bet_tab_btn").off("click.same_2_bet_tab_btn");
  $("#same_2_bet_tab_btn").on("click.same_2_bet_tab_btn", function (e) {
    e.preventDefault();
    setActiveBetTab(BET_TAB_MAP.SAME_2);
    bettingPopupClose();
    cleanBettingValueState();
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });

  $("#same_3_bet_tab_btn").off("click.same_3_bet_tab_btn");
  $("#same_3_bet_tab_btn").on("click.same_3_bet_tab_btn", function (e) {
    e.preventDefault();
    setActiveBetTab(BET_TAB_MAP.SAME_3);
    bettingPopupClose();
    cleanBettingValueState();
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });

  $("#different_bet_tab_btn").off("click.different_bet_tab_btn");
  $("#different_bet_tab_btn").on("click.different_bet_tab_btn", function (e) {
    e.preventDefault();
    setActiveBetTab(BET_TAB_MAP.DIFFERENT);
    bettingPopupClose();
    cleanBettingValueState();
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });
  // ---------------------- k3 bet tab -----------------------

  // --------------------- k3 game logic ---------------------

  function displayBetTotalMoney() {
    let value = parseInt($("#van-field-1-input").val().trim());
    let money = parseInt(
      $(".Betting__Popup-body-line-item.money.bgcolor")
        .attr("data-money")
        .trim(),
    );
    let total = value * money;
    if (isNumber(total)) {
      $(".Betting__Popup-foot-s").text(`Total amount ₹${total.toFixed(2)}`);
    } else {
      $(".Betting__Popup-foot-s").text(`Total amount`);
    }
  }

  $(".van-overlay").fadeOut();
  $(".popup-join").fadeOut();

  const setBetQuantity = (value) => {
    $("#van-field-1-input").val(value);
    $(".Betting__Popup-body-line-item.quantity").removeClass("bgcolor");
    $(`.Betting__Popup-body-line-item.quantity[data-x="${value}"]`).addClass(
      "bgcolor",
    );
    displayBetTotalMoney();
  };

  const setBetMoney = (value) => {
    $(".Betting__Popup-body-line-item.money").removeClass("bgcolor");
    $(`.Betting__Popup-body-line-item.money[data-money="${value}"]`).addClass(
      "bgcolor",
    );
    displayBetTotalMoney();
  };

  let bettingValueState = {
    total: [],
    same2: [],
    same3: [],
    any3same: [],
    different3: [],
    isDifferent3Ready: false,
    different2: [],
    isDifferent2Ready: false,
    continuous: [],
  };

  const BETTING_VALUE_TYPE_MAP = {
    TOTAL: "total",
    SAME2: "same2",
    SAME3: "same3",
    ANY3SAME: "any3same",
    DIFFERENT3: "different3",
    DIFFERENT2: "different2",
    CONTINUOUS: "continuous",
  };

  const displayBettingValuePreview = () => {
    $(".Betting__Popup-type2 .title");
    let total = ``;
    let same2 = ``;
    let same3 = ``;
    let any3same = ``;
    let different3 = ``;
    let different2 = ``;
    let continuous = ``;

    let html = ``;

    if (bettingValueState?.total && bettingValueState.total.length > 0) {
      const list = bettingValueState.total
        .map((value) => {
          const isNumber = !isNaN(value);
          const isEven = parseInt(value) % 2 === 0;

          let displayValue = value;
          let className = "";
          //Betting__Popup-type2-d
          if (isNumber) {
            if (isEven) {
              className = "green";
            } else {
              className = `red num${value}`;
            }
          } else {
            if (value == "b") {
              className = "red numA";
              displayValue = "Big";
            }

            if (value == "s") {
              className = "red numB";
              displayValue = "Small";
            }

            if (value == "l") {
              className = "red numC";
              displayValue = "Odd";
            }

            if (value == "c") {
              className = "red numD";
              displayValue = "Even";
            }
          }

          return `<div data-v-5f002ad4 class="${className}">${displayValue}</div>`;
        })
        .join("");

      html += `
        <div data-v-5f002ad4="" class="Betting__Popup-type1">
          <p data-v-5f002ad4="" class="title">Total:</p>
          <div data-v-5f002ad4="" class="list">
            ${list}
          </div>
        </div>
        `;
    }

    if (bettingValueState?.same2 && bettingValueState.same2.length > 0) {
      const list = bettingValueState.same2
        .map((value) => {
          return `<div data-v-5f002ad4="" class="Betting__Popup-type2-d">${value}</div>`;
        })
        .join("");

      html += `
        <div data-v-5f002ad4="" class="Betting__Popup-type2">
            <p data-v-5f002ad4="" class="title">2 matching numbers:</p>
            <div data-v-5f002ad4="" class="list">
                ${list}
            </div>
        </div>`;
    }

    if (bettingValueState?.same3 && bettingValueState.same3.length > 0) {
      const list = bettingValueState.same3
        .map((value) => {
          return `<div data-v-5f002ad4="" class="Betting__Popup-type2-d">${value}</div>`;
        })
        .join("");

      html += `
        <div data-v-5f002ad4="" class="Betting__Popup-type2">
            <p data-v-5f002ad4="" class="title">3 matching numbers:</p>
            <div data-v-5f002ad4="" class="list">
                ${list}
            </div>
        </div>`;
    }

    if (bettingValueState?.any3same && bettingValueState.any3same.length > 0) {
      html += `
        <p data-v-5f002ad4="" class="title">Any 3 of the same number:</p>
        <div data-v-5f002ad4="" class="Betting__Popup-type2-r">Any 3 of the same number: odds</div>
        `;
    }

    if (
      bettingValueState?.continuous &&
      bettingValueState.continuous.length > 0
    ) {
      html += `
        <p data-v-5f002ad4="" class="title">3 continuous numbers</p>
        <div data-v-5f002ad4="" class="Betting__Popup-type2-r">3 continuous numbers</div>
        `;
    }

    if (
      bettingValueState?.different3 &&
      bettingValueState.different3.length >= 3
    ) {
      const list = bettingValueState.different3
        .map((value) => {
          return `<div data-v-5f002ad4="" class="Betting__Popup-type2-d">${value}</div>`;
        })
        .join("");

      different3 += `
        <div data-v-5f002ad4="" class="Betting__Popup-type2">
            <p data-v-5f002ad4="" class="title">3 different numbers:</p>
            <div data-v-5f002ad4="" class="list">
                ${list}
            </div>
        </div>`;
    }

    if (
      bettingValueState?.different2 &&
      bettingValueState.different2.length >= 2
    ) {
      const list = bettingValueState.different2
        .map((value) => {
          return `<div data-v-5f002ad4="" class="Betting__Popup-type2-d">${value}</div>`;
        })
        .join("");

      different2 += `
        <div data-v-5f002ad4="" class="Betting__Popup-type2">
            <p data-v-5f002ad4="" class="title">2 different numbers:</p>
            <div data-v-5f002ad4="" class="list">
                ${list}
            </div>
        </div>`;
    }

    $(".Betting__Popup-body")
      .children()
      .each(function () {
        if (!$(this).hasClass("Betting__Popup-body-line")) {
          $(this).remove();
        }
      });

    if (html === "" && different3 === "" && different2 === "") {
      bettingPopupClose();
    }

    html += different3;
    html += different2;

    $(".Betting__Popup-body").prepend(html);
  };

  const createNewBettingValueState = ({ value, type }) => {
    bettingValueState = {
      total: [],
      same2: [],
      same3: [],
      any3same: [],
      different3: [],
      isDifferent3Ready: false,
      different2: [],
      isDifferent2Ready: false,
      continuous: [],
      [type]: [value?.trim()],
    };
  };

  const cleanBettingValueState = () => {
    bettingValueState = {
      total: [],
      same2: [],
      same3: [],
      any3same: [],
      different3: [],
      isDifferent3Ready: false,
      different2: [],
      isDifferent2Ready: false,
      continuous: [],
    };

    renderResultNumberedList(
      ".K3B__C-betting4 .K3B__C-betting4-line1:eq(1) > div",
      bettingValueState.different2,
    );
    renderResultNumberedList(
      ".K3B__C-betting4 .K3B__C-betting4-line1.mb30 > div",
      bettingValueState.different3,
    );
    renderResultNumberedList(
      ".K3B__C-betting3 .K3B__C-betting3-line1 > div",
      bettingValueState.same3,
    );
    renderResultNumberedList(
      ".K3B__C-betting2 .K3B__C-betting2-line1 > div",
      bettingValueState.same2,
    );
    renderResultNumberedList(
      ".K3B__C-betting4 .K3B__C-betting4-btn",
      bettingValueState.continuous,
    );
    renderResultNumberedList(
      ".K3B__C-betting3 .K3B__C-betting3-btn",
      bettingValueState.any3same,
    );
  };

  const toggleBettingValueState = ({ value, type }) => {
    const isExist = bettingValueState?.[type]?.includes(value.trim());

    let currentBettingValue = bettingValueState?.[type] || [];

    if (type === BETTING_VALUE_TYPE_MAP.TOTAL) {
      if (isNaN(value)) {
        if (value === "b" || value === "s") {
          currentBettingValue = currentBettingValue.filter(
            (v) => v !== "b" && v !== "s",
          );
        }

        if (value === "l" || value === "c") {
          currentBettingValue = currentBettingValue.filter(
            (v) => v !== "l" && v !== "c",
          );
        }

        currentBettingValue.push(value.trim());
      } else {
        currentBettingValue.push(value.trim());
      }
    } else {
      currentBettingValue.push(value.trim());
    }

    bettingValueState = {
      ...bettingValueState,
      [type]: isExist
        ? bettingValueState?.[type]?.filter((v) => v !== value.trim())
        : currentBettingValue,
    };
  };

  function bettingPopupOpen({ join, type }) {
    setBetQuantity(1);
    setBetMoney(5);
    if (
      type === BETTING_VALUE_TYPE_MAP.DIFFERENT3 ||
      type === BETTING_VALUE_TYPE_MAP.DIFFERENT2
    ) {
      toggleBettingValueState({ value: join, type });
    } else
      createNewBettingValueState({
        value: join,
        type,
      });

    if (
      type === BETTING_VALUE_TYPE_MAP.DIFFERENT3 &&
      bettingValueState.different3.length === 3
    ) {
      $("#betting_popup").slideDown();
    }
    if (
      type === BETTING_VALUE_TYPE_MAP.DIFFERENT2 &&
      bettingValueState.different2.length === 2
    ) {
      $("#betting_popup").slideDown();
    }

    if (
      type !== BETTING_VALUE_TYPE_MAP.DIFFERENT3 &&
      type !== BETTING_VALUE_TYPE_MAP.DIFFERENT2
    ) {
      $("#betting_popup").slideDown();
    }
  }

  function bettingPopupClose() {
    $("#betting_popup").slideUp();
  }

  function handleBettingButton({ value, type }) {
    if (isBettingPopupOpen()) {
      toggleBettingValueState({ value, type });
    } else {
      if (
        type === BETTING_VALUE_TYPE_MAP.DIFFERENT3 &&
        bettingValueState.different3.length < 2
      ) {
        toggleBettingValueState({ value, type });
      } else if (
        type === BETTING_VALUE_TYPE_MAP.DIFFERENT2 &&
        bettingValueState.different2.length < 1
      ) {
        toggleBettingValueState({ value, type });
      } else {
        bettingPopupOpen({
          join: value,
          type: type,
        });
      }
    }

    displayBettingValuePreview();
  }

  const isBettingPopupOpen = () => {
    return $("#betting_popup").css("display") === "block";
  };

  $(".Betting__Popup-body-line-item.money").off("click.money_btn");
  $(".Betting__Popup-body-line-item.money").on("click.money_btn", function (e) {
    e.preventDefault();

    const thisValue = $(this).attr("data-money");
    setBetMoney(thisValue);
  });

  $(".Betting__Popup-body-line-item.quantity").off("click.x_btn");
  $(`.Betting__Popup-body-line-item.quantity`).on("click.x_btn", function (e) {
    e.preventDefault();

    const thisValue = Number($(this).attr("data-x"));
    setBetQuantity(thisValue);
  });

  $(".Betting__Popup-btn.minus").off("click.minus_btn");
  $(`.Betting__Popup-btn.minus`).on("click.minus_btn", function (e) {
    e.preventDefault();
    const currentX = parseInt($("#van-field-1-input").val());
    const nextX = currentX === 1 ? 1 : currentX - 1;

    setBetQuantity(nextX);
  });

  $(".Betting__Popup-btn.plus").off("click.plus_btn");
  $(`.Betting__Popup-btn.plus`).on("click.plus_btn", function (e) {
    e.preventDefault();
    const currentX = parseInt($("#van-field-1-input").val());
    const nextX = currentX + 1;

    setBetQuantity(nextX);
  });

  $(`#van-field-1-input`).off("input.quantity");
  $(`#van-field-1-input`).on("input.quantity", function (e) {
    e.preventDefault();
    const currentX = $("#van-field-1-input").val()
      ? parseInt($("#van-field-1-input").val())
      : "";
      
    setBetQuantity(currentX);
  });

  $(".Betting__Popup-foot-s").off("click.join_btn");
  $(".Betting__Popup-foot-s").on("click.join_btn", function (event) {
    event.preventDefault();
    let join = "";
    let gameJoin = 0;
    const currentX = parseInt($("#van-field-1-input").val().trim());
    let money = $(".Betting__Popup-body-line-item.money.bgcolor").attr(
      "data-money",
    );

    const isTotalTabActive = $("#total_bet_tab_btn").hasClass("active");
    const isSame2TabActive = $("#same_2_bet_tab_btn").hasClass("active");
    const isSame3TabActive = $("#same_3_bet_tab_btn").hasClass("active");
    const isDifferentTabActive = $("#different_bet_tab_btn").hasClass("active");

    if (isTotalTabActive) {
      join = bettingValueState.total.join(",");

      gameJoin = 1;
    }

    if (isSame2TabActive) {
      join = bettingValueState.same2.join(",");

      join += "@";
      gameJoin = 2;
    }

    if (isSame3TabActive) {
      join = bettingValueState.same3.join(",");
      if (bettingValueState.any3same.length > 0) {
        join += "@3";
      } else {
        join += "@";
      }
      gameJoin = 3;
    }

    if (isDifferentTabActive) {
      join = bettingValueState.different3.join(",");

      if (bettingValueState.continuous.length > 0) {
        join += "@u@";
      } else {
        join += "@y@";
      }

      join += bettingValueState.different2.join(",");
      gameJoin = 4;
    }

    // if (!join || !currentX || !money) {
    //   return;
    // }
    console.log(join, gameJoin, currentX, money);
    $(this).addClass("block-click");
    $.ajax({
      type: "POST",
      url: "/api/webapi/action/k3/join",
      data: {
        listJoin: join,
        game: GAME_TYPE_ID,
        gameJoin: gameJoin,
        xvalue: currentX,
        money: money,
      },
      dataType: "json",
      success: function (response) {
        alertMessage(response.message);
        if (response.status === false) return;
        $("#balance_amount").text(`₹ ${formatIndianNumber(response.money)} `);
        $("#bonus_balance_amount").text(
          `₹ ${formatIndianNumber(response.bonus_money)} `,
        );

        initMyBets();

        let change = String(response.change);

        socket.emit("data-server-3", {
          change,
          listJoin: join,
          game: GAME_TYPE_ID,
          gameJoin: gameJoin,
          xvalue: currentX,
          money: money,
        });
      },
    });

    setTimeout(() => {
      bettingPopupClose();
      cleanBettingValueState();
      $("#join_bet_btn").removeClass("block-click");
    }, 500);
  });

  $(".Betting__Popup-foot-c").on("click.foot_c", function (e) {
    e.preventDefault();
    bettingPopupClose();
  });

  //main button events

  // $(".con-box .bet_button").off("click.con_box");
  // $(".con-box .bet_button").on("click.con_box", function (e) {
  //   e.preventDefault();
  //   let addTop = $(this).attr("data-join");
  //   let cssValueNumber = $(this).attr("data-css-value");
  //   let addText = $(this).text();
  //   alertBox(addTop, cssValueNumber, addText);
  // });

  // $(".number-box .bet_button").off("click.number_box");
  // $(".number-box .bet_button").on("click.number_box", function (e) {
  //   e.preventDefault();
  //   let addTop = $(this).attr("data-join");
  //   let cssValueNumber = $(this).attr("data-css-value");
  //   let addText = $(this).attr("data-join");
  //   alertBox(addTop, cssValueNumber, addText);
  // });

  // $(".btn-box .bet_button").off("click.btn_box");
  // $(".btn-box .bet_button").on("click.btn_box", function (e) {
  //   e.preventDefault();
  //   let addTop = $(this).attr("data-join");
  //   let cssValueNumber = $(this).attr("data-css-value");
  //   let addText = $(this).text();
  //   alertBox(addTop, cssValueNumber, addText);
  // });

  // $(".Betting__C-multiple-r").off("click.multiple_r");
  // $(".Betting__C-multiple-r").on("click.multiple_r", function (e) {
  //   e.preventDefault();
  //   $(".Betting__C-multiple-r").css({
  //     "background-color": "rgb(240, 240, 240)",
  //     color: "rgb(0, 0, 0)",
  //   });

  //   $(this).css({
  //     "background-color": "rgb(63 147 104)",
  //     color: "rgb(255, 255, 255)",
  //   });
  //   $(".Betting__C-multiple-r").removeClass("active");
  //   $(this).addClass("active");
  // });

  const renderResultNumberedList = (className, list) => {
    $(className).removeClass("active");

    // console.log("renderResult");

    list.forEach((value) => {
      $(`${className}[data-value="${value}"]`).addClass("active");
    });
  };

  $(".K3B__C-bettingList .num").off("click.num");
  $(".K3B__C-bettingList .num").on("click.num", function (e) {
    e.preventDefault();
    let value = $(this).attr("data-value");
    handleBettingButton({ value, type: BETTING_VALUE_TYPE_MAP.TOTAL });
  });

  $(".K3B__C-betting2 .K3B__C-betting2-line1 > div").off("click.betting2");
  $(".K3B__C-betting2 .K3B__C-betting2-line1 > div").on(
    "click.betting2",
    function (e) {
      e.preventDefault();
      let value = $(this).attr("data-value");
      handleBettingButton({ value, type: BETTING_VALUE_TYPE_MAP.SAME2 });

      renderResultNumberedList(
        ".K3B__C-betting2 .K3B__C-betting2-line1 > div",
        bettingValueState.same2,
      );
    },
  );
  $(".K3B__C-betting3 .K3B__C-betting3-line1 > div").off("click.betting3");
  $(".K3B__C-betting3 .K3B__C-betting3-line1 > div").on(
    "click.betting3",
    function (e) {
      e.preventDefault();
      let value = $(this).attr("data-value");
      handleBettingButton({ value, type: BETTING_VALUE_TYPE_MAP.SAME3 });

      renderResultNumberedList(
        ".K3B__C-betting3 .K3B__C-betting3-line1 > div",
        bettingValueState.same3,
      );
    },
  );

  $(".K3B__C-betting3 .K3B__C-betting3-btn").off("click.betting3_2");
  $(".K3B__C-betting3 .K3B__C-betting3-btn").on(
    "click.betting3_2",
    function (e) {
      e.preventDefault();
      let value = $(this).attr("data-value");
      handleBettingButton({ value, type: BETTING_VALUE_TYPE_MAP.ANY3SAME });

      renderResultNumberedList(
        ".K3B__C-betting3 .K3B__C-betting3-btn",
        bettingValueState.any3same,
      );
    },
  );

  $(".K3B__C-betting4 .K3B__C-betting4-line1.mb30 > div").off("click.betting4");
  $(".K3B__C-betting4 .K3B__C-betting4-line1.mb30 > div").on(
    "click.betting4",
    function (e) {
      e.preventDefault();
      let value = $(this).attr("data-value");

      bettingValueState.isDifferent3Ready =
        bettingValueState.different3.length >= 3;
      handleBettingButton({ value, type: BETTING_VALUE_TYPE_MAP.DIFFERENT3 });

      // console.log("bettingValueState.different3", bettingValueState.different3);
      renderResultNumberedList(
        ".K3B__C-betting4 .K3B__C-betting4-line1.mb30 > div",
        bettingValueState.different3,
      );
    },
  );

  $(".K3B__C-betting4 .K3B__C-betting4-btn").off("click.betting4_2");
  $(".K3B__C-betting4 .K3B__C-betting4-btn").on(
    "click.betting4_2",
    function (e) {
      e.preventDefault();
      let value = $(this).attr("data-value");
      handleBettingButton({ value, type: BETTING_VALUE_TYPE_MAP.CONTINUOUS });

      renderResultNumberedList(
        ".K3B__C-betting4 .K3B__C-betting4-btn",
        bettingValueState.continuous,
      );
    },
  );

  $(".K3B__C-betting4 .K3B__C-betting4-line1:eq(1) > div").off(
    "click.betting4_3",
  );
  $(".K3B__C-betting4 .K3B__C-betting4-line1:eq(1) > div").on(
    "click.betting4_3",
    function (e) {
      e.preventDefault();
      let value = $(this).attr("data-value");

      bettingValueState.isDifferent2Ready =
        bettingValueState.different2.length >= 2;

      handleBettingButton({ value, type: BETTING_VALUE_TYPE_MAP.DIFFERENT2 });

      // console.log("bettingValueState.different3", bettingValueState.different3);
      renderResultNumberedList(
        ".K3B__C-betting4 .K3B__C-betting4-line1:eq(1) > div",
        bettingValueState.different2,
      );
    },
  );

  const alertMessage = (text, isError) => {
    $("#alert_message .van-toast__text").text(text);

    if (isError) {
      $("#alert_message .van-icon").addClass("van-icon-fail");
      $("#alert_message .van-icon").removeClass("van-icon-success");
    } else {
      $("#alert_message .van-icon").addClass("van-icon-success");
      $("#alert_message .van-icon").removeClass("van-icon-fail");
    }

    $("#alert_message").fadeIn(200);

    setTimeout(() => {
      $("#alert_message").fadeOut(200);
    }, 2000);
  };

  // ------------------------- k3 game logic --------------------end

  // -------------------------- game pagination -----------------------

  const initGameHistoryTab = (page = 1) => {
    let size = 10;
    let offset = page === 1 ? 0 : (page - 1) * size;
    let limit = page * size;

    $.ajax({
      type: "POST",
      url: "/api/webapi/k3/GetNoaverageEmerdList",
      data: {
        gameJoin: GAME_TYPE_ID,
        pageno: offset,
        pageto: 10,
      },
      dataType: "json",
      success: function (response) {
        Game_History_Pages = response.page;
        let list_orders = response.data.gameslist;

        $("#period").text(response.period);

        pagination.setState({
          pageLength: response.page,
          currentPage: page,
          type: TAB_SECTION_MAP.GAME_HISTORY,
        });

        loading.hide();

        showGameHistoryData(list_orders);
      },
    });
  };
  initGameHistoryTab();

  const initChartTab = (page = 1) => {
    let size = 10;
    let offset = page === 1 ? 0 : (page - 1) * size;
    let limit = page * size;

    $.ajax({
      type: "POST",
      url: "/api/webapi/k3/GetNoaverageEmerdList",
      data: {
        gameJoin: GAME_TYPE_ID,
        pageno: offset,
        pageto: 10,
      },
      dataType: "json",
      success: function (response) {
        Game_History_Pages = response.page;
        let list_orders = response.data.gameslist;

        $("#period").text(response.period);

        pagination.setState({
          pageLength: response.page,
          currentPage: page,
          type: TAB_SECTION_MAP.CHART,
        });

        loading.hide();

        showTrendData(list_orders);
      },
    });
  };
  initChartTab();

  function initMyBets(page = 1) {
    let size = 10;
    let offset = page === 1 ? 0 : (page - 1) * size;
    let limit = page * size;
    $.ajax({
      type: "POST",
      url: "/api/webapi/k3/GetMyEmerdList",
      data: {
        gameJoin: GAME_TYPE_ID,
        pageno: offset,
        pageto: 10,
      },
      dataType: "json",
      success: function (response) {
        My_Bets_Pages = response.page;
        let data = response.data.gameslist;

        pagination.setState({
          pageLength: response.page,
          currentPage: page,
          type: TAB_SECTION_MAP.MY_BETS,
        });

        loading.hide();
        showMyBetsData(data);
      },
    });
  }
  initMyBets();

  $(pagination.getPreviousBtnSelector(TAB_SECTION_MAP.MY_BETS)).off(
    "click.mb_previous_page",
  );
  $(pagination.getPreviousBtnSelector(TAB_SECTION_MAP.MY_BETS)).on(
    "click.mb_previous_page",
    function (e) {
      e.preventDefault();

      $(pagination.getPreviousBtnSelector(TAB_SECTION_MAP.MY_BETS)).addClass(
        "disabled",
      );
      loading.show();

      const currentPage = pagination.getCurrentPage(TAB_SECTION_MAP.MY_BETS);
      const previousPage = 1 <= currentPage - 1 ? currentPage - 1 : currentPage;
      initMyBets(previousPage);

      loading.hide();
      $(pagination.getPreviousBtnSelector(TAB_SECTION_MAP.MY_BETS)).removeClass(
        "disabled",
      );
    },
  );

  $(pagination.getNextBtnSelector(TAB_SECTION_MAP.MY_BETS)).off(
    "click.mb_next_page",
  );
  $(pagination.getNextBtnSelector(TAB_SECTION_MAP.MY_BETS)).on(
    "click.mb_next_page",
    function (e) {
      e.preventDefault();

      $(pagination.getNextBtnSelector(TAB_SECTION_MAP.MY_BETS)).addClass(
        "disabled",
      );
      loading.show();

      const currentPage = pagination.getCurrentPage(TAB_SECTION_MAP.MY_BETS);
      const nextPage =
        My_Bets_Pages >= currentPage + 1 ? currentPage + 1 : currentPage;
      initMyBets(nextPage);

      loading.hide();
      $(pagination.getNextBtnSelector(TAB_SECTION_MAP.MY_BETS)).removeClass(
        "disabled",
      );
    },
  );

  $(pagination.getPreviousBtnSelector(TAB_SECTION_MAP.GAME_HISTORY)).off(
    "click.gh_previous_page",
  );
  $(pagination.getPreviousBtnSelector(TAB_SECTION_MAP.GAME_HISTORY)).on(
    "click.gh_previous_page",
    function (e) {
      e.preventDefault();

      $(
        pagination.getPreviousBtnSelector(TAB_SECTION_MAP.GAME_HISTORY),
      ).addClass("disabled");
      loading.show();

      const currentPage = pagination.getCurrentPage(
        TAB_SECTION_MAP.GAME_HISTORY,
      );
      const previousPage = 1 <= currentPage - 1 ? currentPage - 1 : currentPage;
      initGameHistoryTab(previousPage);

      loading.hide();
      $(
        pagination.getPreviousBtnSelector(TAB_SECTION_MAP.GAME_HISTORY),
      ).removeClass("disabled");
    },
  );

  $(pagination.getNextBtnSelector(TAB_SECTION_MAP.GAME_HISTORY)).off(
    "click.gh_next_page",
  );
  $(pagination.getNextBtnSelector(TAB_SECTION_MAP.GAME_HISTORY)).on(
    "click.gh_next_page",
    function (e) {
      e.preventDefault();

      $(pagination.getNextBtnSelector(TAB_SECTION_MAP.GAME_HISTORY)).addClass(
        "disabled",
      );
      loading.show();

      const currentPage = pagination.getCurrentPage(
        TAB_SECTION_MAP.GAME_HISTORY,
      );
      const nextPage =
        Game_History_Pages >= currentPage + 1 ? currentPage + 1 : currentPage;
      initGameHistoryTab(nextPage);

      loading.hide();
      $(
        pagination.getNextBtnSelector(TAB_SECTION_MAP.GAME_HISTORY),
      ).removeClass("disabled");
    },
  );

  $(pagination.getPreviousBtnSelector(TAB_SECTION_MAP.CHART)).off(
    "click.ch_previous_page",
  );
  $(pagination.getPreviousBtnSelector(TAB_SECTION_MAP.CHART)).on(
    "click.ch_previous_page",
    function (e) {
      e.preventDefault();

      $(pagination.getPreviousBtnSelector(TAB_SECTION_MAP.CHART)).addClass(
        "disabled",
      );
      loading.show();

      const currentPage = pagination.getCurrentPage(TAB_SECTION_MAP.CHART);
      const previousPage = 1 <= currentPage - 1 ? currentPage - 1 : currentPage;
      initChartTab(previousPage);

      loading.hide();
      $(pagination.getPreviousBtnSelector(TAB_SECTION_MAP.CHART)).removeClass(
        "disabled",
      );
    },
  );

  $(pagination.getNextBtnSelector(TAB_SECTION_MAP.CHART)).off(
    "click.ch_next_page",
  );
  $(pagination.getNextBtnSelector(TAB_SECTION_MAP.CHART)).on(
    "click.ch_next_page",
    function (e) {
      e.preventDefault();

      $(pagination.getNextBtnSelector(TAB_SECTION_MAP.CHART)).addClass(
        "disabled",
      );
      loading.show();

      const currentPage = pagination.getCurrentPage(TAB_SECTION_MAP.CHART);
      const nextPage =
        Game_History_Pages >= currentPage + 1 ? currentPage + 1 : currentPage;
      initChartTab(nextPage);

      loading.hide();
      $(pagination.getNextBtnSelector(TAB_SECTION_MAP.CHART)).removeClass(
        "disabled",
      );
    },
  );

  // -------------------------------- pagination -----------------------------end

  $(".van-notice-bar__wrap .van-notice-bar__content").css({
    "transition-duration": "48.9715s",
    transform: "translateX(-2448.57px)",
  });

  setInterval(() => {
    $(".van-notice-bar__wrap .van-notice-bar__content").css({
      "transition-duration": "0s",
      transform: "translateX(0)",
    });
    setTimeout(() => {
      $(".van-notice-bar__wrap .van-notice-bar__content").css({
        "transition-duration": "48.9715s",
        transform: "translateX(-2448.57px)",
      });
    }, 100);
  }, 48000);

  $(".van-button--default").off("click.van_button");
  $(".van-button--default").on("click.van_button", function (e) {
    e.preventDefault();
    $(".van-popup-vf, .van-overlay").fadeOut(100);
  });

  $(".circular").off("click.circular");
  $(".circular").on("click.circular", function (e) {
    e.preventDefault();
    $(".van-popup-vf, .van-overlay").fadeIn(100);
  });

  // on window load

  // ------------------ Tab handling Logic -------------------

  const TAB_NAME_MAP = {
    GAME_HISTORY: "GAME_HISTORY",
    TREND: "TREND",
    MY_BETS: "MY_BETS",
  };

  const setActiveTab = (selectedTabName) => {
    $("#game_history_tab").removeClass("active");
    $("#trend_tab").removeClass("active");
    $("#my_bets_tab").removeClass("active");

    $("#game_history_tab_button").removeClass("active");
    $("#trend_tab_button").removeClass("active");
    $("#my_bets_tab_button").removeClass("active");
    if (TAB_NAME_MAP.GAME_HISTORY === selectedTabName) {
      $("#game_history_tab").addClass("active");
      $("#game_history_tab_button").addClass("active");
      $(".GameRecord__C").show();
      $(".Trend__C").hide();
      $(".MyGameRecord__C").hide();
    }
    if (TAB_NAME_MAP.TREND === selectedTabName) {
      $("#trend_tab").addClass("active");
      $("#trend_tab_button").addClass("active");
      $(".GameRecord__C").hide();
      $(".Trend__C").show();
      $(".MyGameRecord__C").hide();
    }
    if (TAB_NAME_MAP.MY_BETS === selectedTabName) {
      $("#my_bets_tab").addClass("active");
      $("#my_bets_tab_button").addClass("active");
      $(".GameRecord__C").hide();
      $(".Trend__C").hide();
      $(".MyGameRecord__C").show();
    }
  };

  $("#game_history_tab_button").off("click.game_history_tab_button");
  $("#game_history_tab_button").on(
    "click.game_history_tab_button",
    function (e) {
      e.preventDefault();

      setActiveTab(TAB_NAME_MAP.GAME_HISTORY);

      initGameHistoryTab();
    },
  );

  $("#trend_tab_button").off("click.trend_tab_button");
  $("#trend_tab_button").on("click.trend_tab_button", function (e) {
    e.preventDefault();

    setActiveTab(TAB_NAME_MAP.TREND);

    initChartTab();
  });

  $("#my_bets_tab_button").off("click.my_bets_tab_button");
  $("#my_bets_tab_button").on("click.my_bets_tab_button", function (e) {
    e.preventDefault();

    setActiveTab(TAB_NAME_MAP.MY_BETS);

    initMyBets();
  });

  // ------------------ Tab handling Logic -------------------end

  //--------------------- k3 game logic ---------------------
}
//------------------helpers-------------------
const isNumber = (params) => {
  let pattern = /^[0-9]*\d$/;
  return pattern.test(params);
};

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
  return (
    years +
    "-" +
    months +
    "-" +
    days +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds +
    ":" +
    ampm
  );
}

function formateTimeHHmmss(params = "") {
  let date = new Date(Number(params));
  let hours = date.getHours();
  let minutes = formateT(date.getMinutes());
  let seconds = formateT(date.getSeconds());
  return hours + ":" + minutes + ":" + seconds;
}

function formatIndianNumber(num) {
  let formattedNum = new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(num);
  return formattedNum;
}

var socket = io();
var pageno = 0;
var limit = 10;
var page = 1;

const STATUS_MAP = {
  WIN: "win",
  LOSS: "loss",
  NONE: "none",
};

const displayLast5Result = ({ results }) => {
  $(".TimeLeft__C-num").html(
    results
      .map((result) => `<div data-v-3e4c6499 class="n${result}"></div>`)
      .join(" "),
  );
};

async function RenderResult(results) {
  for (let i = 0; i < 30; i++) {
    let random1 = Math.floor(Math.random() * 6) + 1;
    $(".K3TL__C-l3 .box div:eq(0)").attr("class", `num${random1}`);
    let random2 = Math.floor(Math.random() * 6) + 1;
    $(".K3TL__C-l3 .box div:eq(1)").attr("class", `num${random2}`);
    let random3 = Math.floor(Math.random() * 6) + 1;
    $(".K3TL__C-l3 .box div:eq(2)").attr("class", `num${random3}`);
    await sleep(50);
  }
  let result = String(results).split("");
  $(".K3TL__C-l3 .box div:eq(0)").attr("class", `num${result[0]}`);
  $(".K3TL__C-l3 .box div:eq(1)").attr("class", `num${result[1]}`);
  $(".K3TL__C-l3 .box div:eq(2)").attr("class", `num${result[2]}`);
  return false;
}

socket.on("data-server-k3", async function (msg) {
  try {
    GAME_TYPE_ID = getGameType();

    console.log(msg);
    console.log(GAME_NAME);

    if (msg.data[0].game != GAME_TYPE_ID) {
      return;
    }

    RenderResult(msg.data[1].result);

    loading.show();

    const params = new URLSearchParams();
    params.append("gameJoin", GAME_TYPE_ID);
    params.append("pageno", "0");
    params.append("pageto", "10");

    const betList = axios({
      method: "POST",
      url: "/api/webapi/k3/GetMyEmerdList",
      data: params,
      headers: { "content-type": "application/x-www-form-urlencoded" },
    });

    const gameList = axios({
      method: "POST",
      url: "/api/webapi/k3/GetNoaverageEmerdList",
      data: params,
      headers: { "content-type": "application/x-www-form-urlencoded" },
    });

    const [betDataResponse, gameDataResponse] = await Promise.all([
      betList,
      gameList,
    ]);

    const betListData = betDataResponse.data?.data?.gameslist;
    const gameListData = gameDataResponse.data?.data?.gameslist;

    const lastGame = gameListData?.[0];

    const lastGameBets = betListData?.filter(
      (game) => String(game.stage) === String(lastGame?.period),
    );

    console.log("betListData", betListData);
    console.log("betListData", lastGame);

    const lostGames = lastGameBets?.filter((game) => game.get === 0);
    const lostGamesMoney = lostGames?.reduce(
      (acc, game) => acc + game.money,
      0,
    );
    const winGames = lastGameBets?.filter((game) => game.get > 0);
    const winGamesMoney = winGames?.reduce((acc, game) => acc + game.get, 0);

    console.log("lastGameBets", lastGameBets);

    if (lastGameBets.length > 0) {
      if (winGamesMoney > 0) {
        displayResultHandler({
          status: STATUS_MAP.WIN,
          amount: winGamesMoney,
          period: lastGame?.period,
          result: lastGame?.result,
        });
      } else {
        displayResultHandler({
          status: STATUS_MAP.LOSS,
          amount: lostGamesMoney,
          period: lastGame?.period,
          result: lastGame?.result,
        });
      }
    } else {
      // displayResultHandler({
      //    status: STATUS_MAP.NONE,
      //    period: lastGame?.period,
      //    result: lastGame?.amount,
      // });
    }

    $("#period").text(gameDataResponse.data.period);

    pagination.setState({
      pageLength: gameDataResponse.data.page,
      currentPage: 1,
      type: TAB_SECTION_MAP.GAME_HISTORY,
    });
    pagination.setState({
      pageLength: betDataResponse.data.page,
      currentPage: 1,
      type: TAB_SECTION_MAP.MY_BETS,
    });

    showGameHistoryData(gameListData);
    showTrendData(gameListData);
    showMyBetsData(betListData);

    fetch("/api/webapi/GetUserInfo")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === false) {
          unsetCookie();
          return false;
        }
        $("#balance_amount").text(
          `₹ ${formatIndianNumber(data.data.money_user)} `,
        );
        $("#bonus_balance_amount").text(
          `₹ ${formatIndianNumber(data.data.bonus_money)} `,
        );
      });

    loading.hide();
  } catch (error) {
    console.log(error);
  }
});
