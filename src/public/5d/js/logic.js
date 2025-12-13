const getGameType = () => {
  const urlParams = new URLSearchParams(window.location.search);

  return urlParams.get("game_type") || "1";
};

let GAME_TYPE_ID = getGameType();
let GAME_NAME = GAME_TYPE_ID === "1" ? "k5d" : `k5d${GAME_TYPE_ID}`;

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
      $(".FDTL__C-time div:eq(1)").text(minute);
    } else {
      $(".FDTL__C-time div:eq(1)").text("0");
    }

    $(".FDTL__C-time div:eq(3)").text(seconds1);
    $(".FDTL__C-time div:eq(4)").text(seconds2);
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
      $(`.van-overlay`).hide();

      $(".FDB__C-mark").show();
      $(".FDB__C-mark div:eq(0)").text(seconds1);
      $(".FDB__C-mark div:eq(1)").text(seconds2);
    } else {
      $(".FDB__C-mark").hide();
    }
  }, 0);
}

$(document).ready(function () {
  countDownTimer({ GAME_TYPE_ID });
});

const selectActiveClockByGameType = (GAME_TYPE_ID) => {
  GAME_TYPE_ID = `${GAME_TYPE_ID}`;
  GAME_NAME = GAME_TYPE_ID === "1" ? "k5d" : `k5d${GAME_TYPE_ID}`;
  window.history.pushState({}, "", `/5d/?game_type=${GAME_TYPE_ID}`);
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

function selectActiveClock(currentTime) {
  $(`.GameList__C-item`).removeClass("active");

  $(`.GameList__C-item[data-game-type="${currentTime}"]`).addClass("active");
}
const displayResultHandler = ({ status, amount, period, result }) => {
  let total = String(result).split("");
  const tabList = ["A", "B", "C", "D", "E"];
  let numberStatusContent = total
    .map((item, index) => {
      return `   
         <div data-v-e05c7c66="">
            <div data-v-e05c7c66="" class="title">${tabList[index]}</div>
            <div data-v-e05c7c66="" class="num">${item}</div>
         </div>`;
    })
    .join(" ");

  numberStatusContent += `
      <div data-v-e05c7c66="">
         <div data-v-e05c7c66="" class="title sum">SUM</div>
         <div data-v-e05c7c66="" class="num">${total.reduce((a, b) => parseInt(a) + parseInt(b), 0)}</div>
      </div>
   `;

  $("#lottery_results_box").html(numberStatusContent);

  $("#popup_game_details").html(`Period:5D ${GAME_TYPE_ID} minute ${period}`);

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

  // setTimeout(() => {
  //    $(".WinningTip__C").hide()
  // }, 5000)
};

// setTimeout(() => {
//   displayResultHandler({
//     amount: 100,
//     period: 1,
//     result: 123,
//     status: STATUS_MAP.WIN,
//   });
// }, 5000);

function showGameHistoryData(list_orders) {
  const containerId = ".GameRecord__C .GameRecord__C-body";
  showResultNow(list_orders?.[0]?.result);

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
        <div data-v-9215aba8="" class="van-row">
            <div data-v-9215aba8="" class="van-col van-col--8">${list_order.period}</div>
            <div data-v-9215aba8="" class="van-col van-col--12">
                <div data-v-9215aba8="" class="numList">
                    ${resultSplit
                      .map((item) => {
                        return `<div data-v-9215aba8="" class="numItem">${item}</div>`;
                      })
                      .join(" ")}
                </div>
            </div>
            <div data-v-9215aba8="" class="van-col van-col--4" style="padding-top: 0.25rem;">
              <span data-v-9215aba8="" class="redNumItem">${totalSum}</span>
            </div>
        </div>
             `;
    })
    .join(" ");

  $(containerId).html(html);
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
      <div data-v-9d93d892="">13</div>
      <div data-v-9d93d892="">1</div>
      <div data-v-9d93d892="">2</div>
      <div data-v-9d93d892="">14</div>
      <div data-v-9d93d892="">41</div>
      <div data-v-9d93d892="">3</div>
      <div data-v-9d93d892="">6</div>
      <div data-v-9d93d892="">0</div>
      <div data-v-9d93d892="">12</div>
      <div data-v-9d93d892="">9</div>`,
    AVG_MISSING: `
      <div data-v-9d93d892="">9</div>
      <div data-v-9d93d892="">6</div>
      <div data-v-9d93d892="">5</div>
      <div data-v-9d93d892="">6</div>
      <div data-v-9d93d892="">15</div>
      <div data-v-9d93d892="">11</div>
      <div data-v-9d93d892="">8</div>
      <div data-v-9d93d892="">15</div>
      <div data-v-9d93d892="">8</div>
      <div data-v-9d93d892="">13</div>`,
    FREQUENCY: `
      <div data-v-9d93d892="">11</div>
      <div data-v-9d93d892="">13</div>
      <div data-v-9d93d892="">17</div>
      <div data-v-9d93d892="">12</div>
      <div data-v-9d93d892="">6</div>
      <div data-v-9d93d892="">7</div>
      <div data-v-9d93d892="">10</div>
      <div data-v-9d93d892="">7</div>
      <div data-v-9d93d892="">10</div>
      <div data-v-9d93d892="">7</div>
      `,
    MAX_CONSECUTIVE: `
      <div data-v-9d93d892="">2</div>
      <div data-v-9d93d892="">2</div>
      <div data-v-9d93d892="">2</div>
      <div data-v-9d93d892="">1</div>
      <div data-v-9d93d892="">2</div>
      <div data-v-9d93d892="">1</div>
      <div data-v-9d93d892="">1</div>
      <div data-v-9d93d892="">1</div>
      <div data-v-9d93d892="">1</div>
      <div data-v-9d93d892="">2</div>
      `,
  },
  B: {
    MISSING: `
      <div data-v-9d93d892="">4</div>
      <div data-v-9d93d892="">19</div>
      <div data-v-9d93d892="">6</div>
      <div data-v-9d93d892="">7</div>
      <div data-v-9d93d892="">8</div>
      <div data-v-9d93d892="">10</div>
      <div data-v-9d93d892="">0</div>
      <div data-v-9d93d892="">11</div>
      <div data-v-9d93d892="">3</div>
      <div data-v-9d93d892="">1</div>`,
    AVG_MISSING: `
      <div data-v-9d93d892="">7</div>
      <div data-v-9d93d892="">5</div>
      <div data-v-9d93d892="">9</div>
      <div data-v-9d93d892="">9</div>
      <div data-v-9d93d892="">10</div>
      <div data-v-9d93d892="">11</div>
      <div data-v-9d93d892="">15</div>
      <div data-v-9d93d892="">11</div>
      <div data-v-9d93d892="">13</div>
      <div data-v-9d93d892="">7</div>`,
    FREQUENCY: `
      <div data-v-9d93d892="">11</div>
      <div data-v-9d93d892="">14</div>
      <div data-v-9d93d892="">9</div>
      <div data-v-9d93d892="">9</div>
      <div data-v-9d93d892="">10</div>
      <div data-v-9d93d892="">11</div>
      <div data-v-9d93d892="">8</div>
      <div data-v-9d93d892="">9</div>
      <div data-v-9d93d892="">6</div>
      <div data-v-9d93d892="">13</div>
      `,
    MAX_CONSECUTIVE: `
      <div data-v-9d93d892="">1</div>
      <div data-v-9d93d892="">1</div>
      <div data-v-9d93d892="">1</div>
      <div data-v-9d93d892="">1</div>
      <div data-v-9d93d892="">2</div>
      <div data-v-9d93d892="">4</div>
      <div data-v-9d93d892="">3</div>
      <div data-v-9d93d892="">2</div>
      <div data-v-9d93d892="">1</div>
      <div data-v-9d93d892="">2</div>
      `,
  },
  C: {
    MISSING: `
      <div data-v-9d93d892="">1</div>
      <div data-v-9d93d892="">8</div>
      <div data-v-9d93d892="">2</div>
      <div data-v-9d93d892="">17</div>
      <div data-v-9d93d892="">7</div>
      <div data-v-9d93d892="">3</div>
      <div data-v-9d93d892="">4</div>
      <div data-v-9d93d892="">33</div>
      <div data-v-9d93d892="">0</div>
      <div data-v-9d93d892="">12</div>`,
    AVG_MISSING: `
      <div data-v-9d93d892="">49</div>
      <div data-v-9d93d892="">5</div>
      <div data-v-9d93d892="">11</div>
      <div data-v-9d93d892="">9</div>
      <div data-v-9d93d892="">8</div>
      <div data-v-9d93d892="">7</div>
      <div data-v-9d93d892="">9</div>
      <div data-v-9d93d892="">13</div>
      <div data-v-9d93d892="">10</div>
      <div data-v-9d93d892="">7</div>`,
    FREQUENCY: `
      <div data-v-9d93d892="">1</div>
      <div data-v-9d93d892="">15</div>
      <div data-v-9d93d892="">10</div>
      <div data-v-9d93d892="">13</div>
      <div data-v-9d93d892="">11</div>
      <div data-v-9d93d892="">12</div>
      <div data-v-9d93d892="">10</div>
      <div data-v-9d93d892="">6</div>
      <div data-v-9d93d892="">9</div>
      <div data-v-9d93d892="">13</div>
      `,
    MAX_CONSECUTIVE: `
      <div data-v-9d93d892="">1</div>
      <div data-v-9d93d892="">1</div>
      <div data-v-9d93d892="">2</div>
      <div data-v-9d93d892="">4</div>
      <div data-v-9d93d892="">2</div>
      <div data-v-9d93d892="">2</div>
      <div data-v-9d93d892="">2</div>
      <div data-v-9d93d892="">1</div>
      <div data-v-9d93d892="">1</div>
      <div data-v-9d93d892="">2</div>
      `,
  },
  D: {
    MISSING: `
      <div data-v-9d93d892="">2</div>
      <div data-v-9d93d892="">15</div>
      <div data-v-9d93d892="">11</div>
      <div data-v-9d93d892="">4</div>
      <div data-v-9d93d892="">1</div>
      <div data-v-9d93d892="">7</div>
      <div data-v-9d93d892="">31</div>
      <div data-v-9d93d892="">12</div>
      <div data-v-9d93d892="">6</div>
      <div data-v-9d93d892="">0</div>`,
    AVG_MISSING: `
      <div data-v-9d93d892="">8</div>
      <div data-v-9d93d892="">13</div>
      <div data-v-9d93d892="">9</div>
      <div data-v-9d93d892="">8</div>
      <div data-v-9d93d892="">9</div>
      <div data-v-9d93d892="">10</div>
      <div data-v-9d93d892="">13</div>
      <div data-v-9d93d892="">9</div>
      <div data-v-9d93d892="">8</div>
      <div data-v-9d93d892="">7</div>`,
    FREQUENCY: `
      <div data-v-9d93d892="">12</div>
      <div data-v-9d93d892="">7</div>
      <div data-v-9d93d892="">10</div>
      <div data-v-9d93d892="">10</div>
      <div data-v-9d93d892="">10</div>
      <div data-v-9d93d892="">9</div>
      <div data-v-9d93d892="">7</div>
      <div data-v-9d93d892="">10</div>
      <div data-v-9d93d892="">12</div>
      <div data-v-9d93d892="">13</div>
      `,
    MAX_CONSECUTIVE: `
      <div data-v-9d93d892="">2</div>
      <div data-v-9d93d892="">1</div>
      <div data-v-9d93d892="">2</div>
      <div data-v-9d93d892="">1</div>
      <div data-v-9d93d892="">2</div>
      <div data-v-9d93d892="">2</div>
      <div data-v-9d93d892="">2</div>
      <div data-v-9d93d892="">2</div>
      <div data-v-9d93d892="">2</div>
      <div data-v-9d93d892="">2</div>
      `,
  },
  E: {
    MISSING: `
      <div data-v-9d93d892="">22</div>
      <div data-v-9d93d892="">25</div>
      <div data-v-9d93d892="">4</div>
      <div data-v-9d93d892="">2</div>
      <div data-v-9d93d892="">1</div>
      <div data-v-9d93d892="">13</div>
      <div data-v-9d93d892="">21</div>
      <div data-v-9d93d892="">7</div>
      <div data-v-9d93d892="">12</div>
      <div data-v-9d93d892="">0</div>`,
    AVG_MISSING: `
      <div data-v-9d93d892="">11</div>
      <div data-v-9d93d892="">8</div>
      <div data-v-9d93d892="">6</div>
      <div data-v-9d93d892="">9</div>
      <div data-v-9d93d892="">6</div>
      <div data-v-9d93d892="">6</div>
      <div data-v-9d93d892="">13</div>
      <div data-v-9d93d892="">19</div>
      <div data-v-9d93d892="">13</div>
      <div data-v-9d93d892="">7</div>`,
    FREQUENCY: `
      <div data-v-9d93d892="">8</div>
      <div data-v-9d93d892="">11</div>
      <div data-v-9d93d892="">13</div>
      <div data-v-9d93d892="">10</div>
      <div data-v-9d93d892="">14</div>
      <div data-v-9d93d892="">14</div>
      <div data-v-9d93d892="">7</div>
      <div data-v-9d93d892="">5</div>
      <div data-v-9d93d892="">6</div>
      <div data-v-9d93d892="">12</div>
      `,
    MAX_CONSECUTIVE: `
      <div data-v-9d93d892="">1</div>
      <div data-v-9d93d892="">2</div>
      <div data-v-9d93d892="">1</div>
      <div data-v-9d93d892="">2</div>
      <div data-v-9d93d892="">3</div>
      <div data-v-9d93d892="">2</div>
      <div data-v-9d93d892="">2</div>
      <div data-v-9d93d892="">2</div>
      <div data-v-9d93d892="">1</div>
      <div data-v-9d93d892="">1</div>
      `,
  },
};

function showTrendData(list_orders, tab = "A") {
  const containerId = ".Trend__C .Trend__C-body2";

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
      const position_list = ["A", "B", "C", "D", "E"];
      const position_index = position_list.indexOf(tab);
      const selectedPositionCurrentResult = order.result[position_index];
      const selectedPositionNextResult =
        list_orders?.[index + 1]?.result[position_index];

      const isBig = parseInt(selectedPositionCurrentResult) >= 5;
      const isEven = parseInt(selectedPositionCurrentResult) % 2 === 0;
      const NumberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

      const isLastOrder = index === list_orders.length - 1;

      return `
         <div data-v-9d93d892="" issuenumber="${order.period}" number="${selectedPositionCurrentResult}" rowid="${index}">
            <div data-v-9d93d892="" class="van-row">
               <div data-v-9d93d892="" class="van-col van-col--8">
                  <div data-v-9d93d892="" class="Trend__C-body2-IssueNumber">${order.period}</div>
               </div>
               <div data-v-9d93d892="" class="van-col van-col--16">
                  <div data-v-9d93d892="" class="Trend__C-body2-Num">
                     <canvas data-v-9d93d892="" canvas="" id="myCanvas${index}" class="line-canvas"></canvas>
                     ${NumberList.map((number, index) => {
                       return `<div data-v-9d93d892="" class="Trend__C-body2-Num-item ${selectedPositionCurrentResult == number ? `action` : ""}">${number}</div>`;
                     }).join(" ")}

                     ${isBig ? `<div data-v-9d93d892="" class="Trend__C-body2-Num-BS isB">H</div>` : `<div data-v-9d93d892="" class="Trend__C-body2-Num-BS">L</div>`}
                     ${isEven ? `<div data-v-9d93d892="" class="Trend__C-body2-Num-OE">E</div>` : `<div data-v-9d93d892="" class="Trend__C-body2-Num-OE isE">O</div>`}
                  </div>
               </div>
             ${
               isLastOrder
                 ? ""
                 : `
               <script>
                  drawChartLineInCanvas(${selectedPositionCurrentResult},${selectedPositionNextResult}, "myCanvas${index}")
               </script>`
             }
            </div>
         </div>`;
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
      let splitBet = list_order.bet.split("");
      let position = list_order.join_bet;

      const resultHtml = list_order.result
        .split("")
        .map((item) => {
          return `<div data-v-8bb41fd5="">${item}</div>`;
        })
        .join(" ");

      let betClassName = "";
      let betIcon = "";
      let betHtml = ``;

      if (splitBet[0] === "b") {
        betClassName = "H";
        betIcon = "Big";
        betHtml = `
        <div data-v-8bb41fd5="" class="line1">
          <div data-v-8bb41fd5="">${position === "total" ? "" : position.toUpperCase()}</div>
          <div data-v-8bb41fd5="" class="num">Big</div>
        </div>
        `;
      } else if (splitBet[0] === "s") {
        betClassName = "l";
        betIcon = "Small";
        betHtml = `
        <div data-v-8bb41fd5="" class="line1">
          <div data-v-8bb41fd5="">${position === "total" ? "" : position.toUpperCase()}</div>
          <div data-v-8bb41fd5="" class="num">Small</div>
        </div>
        `;
      } else if (splitBet[0] === "l") {
        betClassName = "O";
        betIcon = "Odd";
        betHtml = `
        <div data-v-8bb41fd5="" class="line1">
          <div data-v-8bb41fd5="">${position === "total" ? "" : position.toUpperCase()}</div>
          <div data-v-8bb41fd5="" class="num">Odd</div>
        </div>
        `;
      } else if (splitBet[0] === "c") {
        betClassName = "E";
        betIcon = "Even";
        betHtml = `
        <div data-v-8bb41fd5="" class="line1">
          <div data-v-8bb41fd5="">${position === "total" ? "" : position.toUpperCase()}</div>
          <div data-v-8bb41fd5="" class="num">Even</div>
        </div>
        `;
      } else {
        betClassName = splitBet.join("|");
        betIcon = splitBet.join("|");
        betHtml = `
        <div data-v-8bb41fd5="" class="line1">
          <div data-v-8bb41fd5="">${position === "total" ? "" : position.toUpperCase()}</div>
          ${splitBet
            .map((item) => {
              return `<div data-v-8bb41fd5="" class="num">${item}</div>`;
            })
            .join(" ")}
        </div>
        `;
      }

      return `
          <div data-v-8bb41fd5="" class="MyGameRecordList__C-item" onclick="openGameBetDetails(${index})">
            <div data-v-8bb41fd5="" class="MyGameRecordList__C-item-l MyGameRecordList__C-item-l-${betClassName}">${betIcon}</div>
            <div data-v-8bb41fd5="" class="MyGameRecordList__C-item-m">
                <div data-v-8bb41fd5="" class="MyGameRecordList__C-item-m-top">${list_order.stage}</div>
                <div data-v-8bb41fd5="" class="MyGameRecordList__C-item-m-bottom">${timerJoin(list_order.time)}</div>
            </div>
              ${
                list_order.status !== 0
                  ? `<div data-v-8bb41fd5="" class="MyGameRecordList__C-item-r ${list_order.status == 1 ? "success" : ""}">
                       <div data-v-8bb41fd5="" class="${list_order.status == 1 ? "green" : "red"}">${list_order.status == 1 ? "Succeed" : "Failed"}</div>
                       <span data-v-8bb41fd5="">${list_order.status == 1 ? `₹${list_order.get.toFixed(2)}` : `-₹${list_order.money.toFixed(2)}`}</span>
                     </div>`
                  : ""
              }
          </div>
          
          <div data-v-8bb41fd5="" class="MyGameRecordList__C-detail  details_box_${index}" style="display: none;">
            <div data-v-8bb41fd5="" class="MyGameRecordList__C-detail-text">Details</div>
            <div data-v-8bb41fd5="" class="MyGameRecordList__C-detail-line">Order number <div data-v-8bb41fd5="">
                    ${list_order.id_product} <svg data-v-8bb41fd5="" class="svg-icon icon-copy">
                        <use xlink:href="#icon-copy"></use>
                    </svg></div>
            </div>
            <div data-v-8bb41fd5="" class="MyGameRecordList__C-detail-line">Period <div data-v-8bb41fd5="">${list_order.stage}</div>
            </div>
            <div data-v-8bb41fd5="" class="MyGameRecordList__C-detail-line">Purchase amount <div data-v-8bb41fd5="">₹${list_order.money.toFixed(2)}</div>
            </div>
            <div data-v-8bb41fd5="" class="MyGameRecordList__C-detail-line">Quantity <div data-v-8bb41fd5="">${list_order.amount}</div>
            </div>
            <div data-v-8bb41fd5="" class="MyGameRecordList__C-detail-line">Amount after tax <div data-v-8bb41fd5=""
                    class="red">₹${list_order.price.toFixed(2)}</div>
            </div>
            <div data-v-8bb41fd5="" class="MyGameRecordList__C-detail-line">Tax <div data-v-8bb41fd5="">₹${list_order.fee.toFixed(2)}</div>
            </div>
           ${
             list_order.status !== 0
               ? `<div data-v-8bb41fd5="" class="MyGameRecordList__C-detail-line">Result <div data-v-8bb41fd5="" class="numList">
                    ${resultHtml}
                </div>
            </div>`
               : ""
           }
            <div data-v-8bb41fd5="" class="MyGameRecordList__C-detail-line">
              Select 
              ${betHtml}
            </div>
            ${
              list_order.status !== 0
                ? `
            <div data-v-8bb41fd5="" class="MyGameRecordList__C-detail-line">
              Status 
              <div data-v-8bb41fd5="" class="${list_order.status == 1 ? "green" : "red"}">${list_order.status == 1 ? "Success" : "Failed"}</div>
            </div>`
                : ""
            }
            <div data-v-8bb41fd5="" class="MyGameRecordList__C-detail-line">
              Win/lose 
              <div data-v-8bb41fd5="" class="${list_order.status == 1 ? "green" : "red"}">
                ${list_order.status == 1 ? `₹${list_order.get.toFixed(2)}` : `- ₹${list_order.money.toFixed(2)}`}
              </div>
            </div>
            <div data-v-8bb41fd5="" class="MyGameRecordList__C-detail-line">
              Order time 
              <div data-v-8bb41fd5="">${timerJoin(list_order.time)}</div>
            </div>
        </div>
             `;
    })
    .join(" ");

  $(containerId).html(html);
}

function initGameLogics({
  GAME_TYPE_ID,
  GAME_NAME,
  My_Bets_Pages,
  Game_History_Pages,
}) {
  selectActiveClock(parseInt(GAME_TYPE_ID));

  //--------------------- 5d game logic ---------------------

  var pageno = 0;
  var limit = 10;
  var page = 1;

  // --------------------- 5d game logic ---------------------

  function displayBetTotalMoney() {
    let value = parseInt($("#van-field-1-input").val().trim());

    let money = parseInt(
      $(".Betting__Popup-body-line-item.money.bgcolor")
        .attr("data-money")
        .trim(),
    );
    let total = value * money;
    $(".Betting__Popup-foot-s").text(`Total amount ₹${total.toFixed(2)}`);
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

  const JOIN_POSITION_MAP = {
    A: "a",
    B: "b",
    C: "c",
    D: "d",
    E: "e",
    TOTAL: "total",
  };

  let bettingValueState = {
    joinPosition: JOIN_POSITION_MAP.A,
    joinList: [],
  };

  const renderJoinPositionDisplayState = () => {
    $(".FDB__C-nav div").removeClass("active");
    $(
      `.FDB__C-nav div[data-value="${bettingValueState.joinPosition}"]`,
    ).addClass("active");
  };
  const renderJoinListDisplayState = () => {
    $(".FDB__C-H div").removeClass("active");
    $(".FDB__C-Num div").removeClass("active");

    bettingValueState.joinList.forEach((value) => {
      $(`.FDB__C-Num div[data-txt="${value}"]`).addClass("active");
      $(`.FDB__C-H div[data-txt="${value}"]`).addClass("active");
    });
  };

  function bettingPopupOpen() {
    setBetQuantity(1);
    setBetMoney(1);
    $("#betting_popup").slideDown();
    $(`.van-overlay`).show();
  }

  function bettingPopupClose() {
    $("#betting_popup").slideUp();
    $(`.van-overlay`).hide();
  }

  const cleanBettingValueState = () => {
    bettingValueState = {
      joinPosition: JOIN_POSITION_MAP.A,
      joinList: [],
    };
    renderJoinPositionDisplayState();
    renderJoinListDisplayState();
  };

  $(`.FDB__C-nav div`).click(function () {
    const value = $(this).attr("data-value").trim();

    bettingValueState.joinPosition = JOIN_POSITION_MAP[value.toUpperCase()];

    if (value === JOIN_POSITION_MAP.TOTAL) {
      bettingValueState.joinList = bettingValueState.joinList.filter((v) =>
        isNaN(v),
      );
      $(`.FDB__C-Num`).css("opacity", "0");
    } else {
      $(`.FDB__C-Num`).css("opacity", "1");
    }

    renderJoinPositionDisplayState();
    renderJoinListDisplayState();
  });

  $(`.FDB__C-H > div`).click(function () {
    bettingValueState.joinList = [$(this).attr("data-txt").trim()];

    renderJoinPositionDisplayState();
    renderJoinListDisplayState();
    bettingPopupOpen();
  });

  $(`.FDB__C-Num > div`).click(function () {
    const isExist = bettingValueState.joinList.includes(
      $(this).attr("data-txt").trim(),
    );

    if (isExist) {
      bettingValueState.joinList = bettingValueState.joinList.filter(
        (v) => v !== $(this).attr("data-txt").trim(),
      );
    } else {
      bettingValueState.joinList.push($(this).attr("data-txt").trim());
    }

    bettingValueState.joinList = bettingValueState.joinList.filter((v) =>
      isNumber(v),
    );

    renderJoinPositionDisplayState();
    renderJoinListDisplayState();
    bettingPopupOpen();
  });

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

    const currentX = parseInt($("#van-field-1-input").val().trim());

    let money = $(".Betting__Popup-body-line-item.money.bgcolor").attr(
      "data-money",
    );

    $(this).addClass("block-click");

    $.ajax({
      type: "POST",
      url: "/api/webapi/action/5d/join",
      data: {
        join: bettingValueState.joinPosition,
        list_join: bettingValueState.joinList.join(""),
        money: money,
        x: currentX,
        game: GAME_TYPE_ID,
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

        socket.emit("data-server-5", {
          chane: change,
          join: bettingValueState.joinPosition,
          list_join: bettingValueState.joinList.join(","),
          money: money,
          x: currentX,
          game: GAME_TYPE_ID,
        });
      },
    });

    setTimeout(() => {
      bettingPopupClose();
      cleanBettingValueState();
      $(".Betting__Popup-foot-s").removeClass("block-click");
    }, 500);
  });

  $(".Betting__Popup-foot-c").on("click.foot_c", function (e) {
    e.preventDefault();
    bettingPopupClose();
    cleanBettingValueState();
  });

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

  // ------------------------- 5d game logic --------------------end

  // -------------------------- game pagination -----------------------

  const initGameHistoryTab = (page = 1) => {
    let size = 10;
    let offset = page === 1 ? 0 : (page - 1) * size;
    let limit = page * size;

    $.ajax({
      type: "POST",
      url: "/api/webapi/5d/GetNoaverageEmerdList",
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

  const initChartTab = (page = 1, tab) => {
    let size = 10;
    let offset = page === 1 ? 0 : (page - 1) * size;
    let limit = page * size;

    $.ajax({
      type: "POST",
      url: "/api/webapi/5d/GetNoaverageEmerdList",
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

        showTrendData(list_orders, tab);
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
      url: "/api/webapi/5d/GetMyEmerdList",
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

      const currentTab = $(".Trend__C").attr("data-selected-tab");
      initChartTab(previousPage, currentTab);

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
      const currentTab = $(".Trend__C").attr("data-selected-tab");
      initChartTab(nextPage, currentTab);

      loading.hide();
      $(pagination.getNextBtnSelector(TAB_SECTION_MAP.CHART)).removeClass(
        "disabled",
      );
    },
  );

  // -------------------------------- pagination -----------------------------end

  function openChartStatisticsTab(tab) {
    if (!["A", "B", "C", "D", "E"].includes(tab)) {
      tab = "A";
    }

    $(".Trend__C").attr("data-selected-tab", tab);

    const setSummaryData = (tab) => {
      $(
        ".Trend__C .Trend__C-body1 .Trend__C-body1-line:eq(0) .Trend__C-body1-line-num",
      ).html(GAME_CHART_STATISTICS_HTML[tab].MISSING);
      $(
        ".Trend__C .Trend__C-body1 .Trend__C-body1-line:eq(1) .Trend__C-body1-line-num",
      ).html(GAME_CHART_STATISTICS_HTML[tab].AVG_MISSING);
      $(
        ".Trend__C .Trend__C-body1 .Trend__C-body1-line:eq(2) .Trend__C-body1-line-num",
      ).html(GAME_CHART_STATISTICS_HTML[tab].FREQUENCY);
      $(
        ".Trend__C .Trend__C-body1 .Trend__C-body1-line:eq(3) .Trend__C-body1-line-num",
      ).html(GAME_CHART_STATISTICS_HTML[tab].MAX_CONSECUTIVE);
    };

    setSummaryData(tab);

    initChartTab(1, tab);
  }

  $(".Trend__C-nav > div").click(function () {
    const tab = $(this).text();
    $(".Trend__C-nav > div").removeClass("active");
    $(this).addClass("active");
    openChartStatisticsTab(tab);
  });

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

  //--------------------- 5d game logic ---------------------
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

// const displayLast5Result = ({ results }) => {
//   $(".TimeLeft__C-num").html(
//     results
//       .map((result) => `<div data-v-3e4c6499 class="n${result}"></div>`)
//       .join(" "),
//   );
// };

function showResultNow(data) {
  let arr = String(data).split("");
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += Number(arr[i]);
    $(`.FDP__C-list > div:eq(${i}) .num`).text(arr[i]);
    let random = Math.floor(Math.random() * 10);
    $(`.slot-transform:eq(${i}) .slot-num:eq(0)`).text(random);
    random = Math.floor(Math.random() * 10);
    $(`.slot-transform:eq(${i}) .slot-num:eq(1)`).text(random);
    $(`.slot-transform:eq(${i}) .slot-num:eq(2)`).text(arr[i]);
  }
  $(".FDP__C-sum").text(total);
}
async function RenderResult(data) {
  let arr = String(data).split("");
  $(
    ".slot-transform:eq(0), .slot-transform:eq(1), .slot-transform:eq(2), .slot-transform:eq(3), .slot-transform:eq(4), .slot-transform:eq(5)",
  ).addClass("slot-scroll");
  setTimeout(() => {
    for (let i = 0; i < 5; i++) {
      let random = Math.floor(Math.random() * 10);
      $(`.slot-transform:eq(${i}) .slot-num:eq(0)`).text(random);
      random = Math.floor(Math.random() * 10);
      $(`.slot-transform:eq(${i}) .slot-num:eq(1)`).text(random);
      $(`.slot-transform:eq(${i}) .slot-num:eq(2)`).text(arr[i]);
    }
    $(".slot-transform:eq(0)").removeClass("slot-scroll");
    setTimeout(() => {
      $(
        ".slot-transform:eq(1), .slot-transform:eq(2), .slot-transform:eq(3), .slot-transform:eq(4), .slot-transform:eq(5)",
      ).removeClass("slot-scroll");
      showResultNow(data);
    }, 100);
  }, 2500);
}

socket.on("data-server-5d", async function (msg) {
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
      url: "/api/webapi/5d/GetMyEmerdList",
      data: params,
      headers: { "content-type": "application/x-www-form-urlencoded" },
    });

    const gameList = axios({
      method: "POST",
      url: "/api/webapi/5d/GetNoaverageEmerdList",
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

    const lostGames = lastGameBets?.filter((game) => game.get === 0);
    const lostGamesMoney = lostGames?.reduce(
      (acc, game) => acc + game.money,
      0,
    );
    const winGames = lastGameBets?.filter((game) => game.get > 0);
    const winGamesMoney = winGames?.reduce((acc, game) => acc + game.get, 0);

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
    showTrendData(gameListData, "A");
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
