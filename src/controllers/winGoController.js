import connection from "../config/connectDB.js";
import GameRepresentationIds from "../constants/game_representation_id.js";
import {
  generateCommissionId,
  generatePeriod,
  yesterdayTime,
} from "../helpers/games.js";

// helper functions
function generateProductId() {
  const date = new Date();
  const years = formatTime(date.getFullYear());
  const months = formatTime(date.getMonth() + 1);
  const days = formatTime(date.getDate());
  return years + months + days + Math.floor(Math.random() * 1000000000000000);
}

function determineColor(join) {
  return JOIN_COLOR_MAP[join] || (join % 2 === 0 ? "red" : "green");
}

function generateCheckJoin(join) {
  if ((!isNumber(join) && join === "l") || join === "n") {
    return `
      <div data-v-a9660e98="" class="van-image" style="width: 30px; height: 30px;">
          <img src="/images/${join === "n" ? "small" : "big"}.png" class="van-image__img">
      </div>
      `;
  } else {
    return `
      <span data-v-a9660e98="">${isNumber(join) ? join : ""}</span>
      `;
  }
}
// end helper functions

const winGoPage = async (req, res) => {
  return res.render("bet/wingo/win.ejs");
};

const winGoPage3 = async (req, res) => {
  return res.render("bet/wingo/win3.ejs");
};

const winGoPage5 = async (req, res) => {
  return res.render("bet/wingo/win5.ejs");
};

const winGoPage10 = async (req, res) => {
  return res.render("bet/wingo/win10.ejs");
};

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
    " " +
    ampm
  );
}

const rosesPlus = async (phone, money, levels = [], timeNow = "") => {
  try {
    const [userResult] = await connection.query(
      "SELECT `phone`, `code`, `invite`, `money` FROM users WHERE phone = ? AND veri = 1 LIMIT 1",
      [phone],
    );
    const userInfo = userResult[0];

    if (!userInfo) {
      return;
    }

    let userReferrer = userInfo.invite;
    let commissionsToInsert = [];
    let usersToUpdate = [];

    for (let i = 0; i < levels.length; i++) {
      const levelCommission = levels[i] * money;
      const [referrerRows] = await connection.query(
        "SELECT phone, money, code, invite FROM users WHERE code = ?",
        [userReferrer],
      );
      const referrerInfo = referrerRows[0];

      if (referrerInfo) {
        const commissionId = generateCommissionId();

        commissionsToInsert.push([
          commissionId,
          referrerInfo.phone,
          userInfo.phone,
          levelCommission,
          i + 1,
          timeNow,
        ]);
        usersToUpdate.push([levelCommission, referrerInfo.phone]);
        userReferrer = referrerInfo.invite;
      } else {
        console.log(`Level ${i + 1} referrer not found.`);
        break;
      }
    }

    if (commissionsToInsert.length > 0) {
      await connection.query(
        "INSERT INTO commissions (commission_id, phone, from_user_phone, money, level, time) VALUES ?",
        [commissionsToInsert],
      );
    }

    if (usersToUpdate.length > 0) {
      const updatePromises = usersToUpdate.map(([money, phone]) =>
        connection.query("UPDATE users SET money = money + ? WHERE phone = ?", [
          money,
          phone,
        ]),
      );
      await Promise.all(updatePromises);
    }

    return {
      success: true,
      message: "Commissions calculated and inserted successfully.",
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};
const distributeCommission = async () => {
  try {
    const { startOfYesterdayTimestamp, endOfYesterdayTimestamp } =
      yesterdayTime();
    const [levelResult] = await connection.query("SELECT f1 FROM level");
    const levels = levelResult.map((row) => row.f1 / 100);

    // const [bets] = await connection.query('SELECT phone, SUM(money + fee) AS total_money FROM minutes_1 WHERE time > ? AND time <= ? GROUP BY phone', [startOfDay, endTime]);

    const [bets] = await connection.query(
      `
      SELECT phone, SUM(total_money) AS total_money
      FROM (
        SELECT phone, SUM(money + fee) AS total_money
        FROM minutes_1
        WHERE time > ? AND time <= ?
        GROUP BY phone
        UNION ALL
        SELECT phone, SUM(money + fee) AS total_money
        FROM trx_wingo_bets
        WHERE time > ? AND time <= ?
        GROUP BY phone
      ) AS combined
      GROUP BY phone
      `,
      [
        startOfYesterdayTimestamp,
        endOfYesterdayTimestamp,
        startOfYesterdayTimestamp,
        endOfYesterdayTimestamp,
      ],
    );

    const promises = bets.map((bet) =>
      rosesPlus(bet.phone, bet.total_money, levels, endOfYesterdayTimestamp),
    );
    const response = await Promise.all(promises);
    return {
      success: true,
      message: "Commissions distributed successfully.",
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};

// const distributeCommission = async () => {
//   const timeNow = new Date();
//   const startOfDay = new Date(timeNow.getFullYear(), timeNow.getMonth(), timeNow.getDate()).getTime();
//   const endTime = timeNow.getTime();
//   const updatePromises = [];

//   const [bets] = await connection.query('SELECT phone,SUM(money) AS total_money FROM minutes_1 GROUP BY phone');

//   const [commissions] = await connection.query(
//     'SELECT phone, SUM(money) AS total_commission FROM commissions WHERE time > ? AND time <= ? GROUP BY phone',
//     [startOfDay, endTime]
//   );
//   if (commissions.length === 0) {
//     console.log("No new commissions to process.");
//     return {
//       success: false,
//       message: "No new commissions to process.",
//     };
//   }
//   for (const commission of commissions) {
//     const { phone, total_commission } = commission;
//     const updatePromise = connection.query(
//       "UPDATE users SET money = money + ? WHERE phone = ?",
//       [total_commission, phone]
//     );
//     updatePromises.push(updatePromise);
//   }
//   await Promise.all(updatePromises);
//   return {
//     success: true,
//     message: "Commissions distributed successfully.",
//   };
// }
// const rosesPlus = async (auth, money) => {
//     const [level] = await connection.query('SELECT * FROM level ');
//     let level0 = level[0];

//     const [user] = await connection.query('SELECT `phone`, `code`, `invite` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ', [auth]);
//     let userInfo = user[0];
//     const [f1] = await connection.query('SELECT `phone`, `code`, `invite`, `rank` FROM users WHERE code = ? AND veri = 1  LIMIT 1 ', [userInfo.invite]);
//     if (money >= 10000) {
//         if (f1.length > 0) {
//             let infoF1 = f1[0];
//             let rosesF1 = (money / 100) * level0.f1;
//             await connection.query('UPDATE users SET money = money + ?, roses_f1 = roses_f1 + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF1, rosesF1, rosesF1, rosesF1, infoF1.phone]);
//             const [f2] = await connection.query('SELECT `phone`, `code`, `invite`, `rank` FROM users WHERE code = ? AND veri = 1  LIMIT 1 ', [infoF1.invite]);
//             if (f2.length > 0) {
//                 let infoF2 = f2[0];
//                 let rosesF2 = (money / 100) * level0.f2;
//                 await connection.query('UPDATE users SET money = money + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF2, rosesF2, rosesF2, infoF2.phone]);
//                 const [f3] = await connection.query('SELECT `phone`, `code`, `invite`, `rank` FROM users WHERE code = ? AND veri = 1  LIMIT 1 ', [infoF2.invite]);
//                 if (f3.length > 0) {
//                     let infoF3 = f3[0];
//                     let rosesF3 = (money / 100) * level0.f3;
//                     await connection.query('UPDATE users SET money = money + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF3, rosesF3, rosesF3, infoF3.phone]);
//                     const [f4] = await connection.query('SELECT `phone`, `code`, `invite`, `rank` FROM users WHERE code = ? AND veri = 1  LIMIT 1 ', [infoF3.invite]);
//                     if (f4.length > 0) {
//                         let infoF4 = f4[0];
//                         let rosesF4 = (money / 100) * level0.f4;
//                         await connection.query('UPDATE users SET money = money + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF4, rosesF4, rosesF4, infoF4.phone]);
//                     }
//                 }
//             }

//         }
//     }
// }

// const rosesPlus = async (auth, money) => {
//     const [level] = await connection.query('SELECT * FROM level ');

//     const [user] = await connection.query('SELECT `phone`, `code`, `invite`, `user_level` FROM users WHERE token = ? AND veri = 1 LIMIT 1 ', [auth]);
//     let userInfo = user[0];
//     const [f1] = await connection.query('SELECT `phone`, `code`, `invite`, `rank`, `user_level` FROM users WHERE code = ? AND veri = 1 LIMIT 1 ', [userInfo.invite]);

//     if (money < 300) {
//         return; // No need to proceed if money is less than 300
//     }

//     if (f1.length === 0) {
//         return; // No referrer found
//     }

//     let infoF1 = f1[0];

//     const f2 = await connection.query('SELECT `phone`, `code`, `invite`, `rank`, `user_level` FROM users WHERE code = ? AND veri = 1 LIMIT 1 ', [infoF1.invite]);
//     if (f2.length > 0) {
//         let infoF2 = f2[0];
//         if (infoF2.user_level >= 2) {
//             let rosesF2 = (money / 100) * level[1].f1;
//             await connection.query('UPDATE users SET money = money + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF2, rosesF2, rosesF2, infoF2.phone]);
//         }

//         const f3 = await connection.query('SELECT `phone`, `code`, `invite`, `rank`, `user_level` FROM users WHERE code = ? AND veri = 1 LIMIT 1 ', [infoF2.invite]);
//         if (f3.length > 0) {
//             let infoF3 = f3[0];
//             if (infoF3.user_level >= 3) {
//                 let rosesF3 = (money / 100) * level[2].f1;
//                 await connection.query('UPDATE users SET money = money + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF3, rosesF3, rosesF3, infoF3.phone]);
//             }

//             const f4 = await connection.query('SELECT `phone`, `code`, `invite`, `rank`, `user_level` FROM users WHERE code = ? AND veri = 1 LIMIT 1 ', [infoF3.invite]);
//             if (f4.length > 0) {
//                 let infoF4 = f4[0];
//                 if (infoF4.user_level >= 4) {
//                     let rosesF4 = (money / 100) * level[3].f1;
//                     await connection.query('UPDATE users SET money = money + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF4, rosesF4, rosesF4, infoF4.phone]);
//                 }
//             }
//         }
//     }
// }

// const rosesPlus = async (auth, money) => {
//     const [level] = await connection.query('SELECT * FROM level ');
//     const [user] = await connection.query('SELECT `phone`, `code`, `invite` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ', [auth]);
//     let userInfo = user[0];
//     const [f1] = await connection.query('SELECT `phone`, `code`, `invite`, `rank` FROM users WHERE code = ? AND veri = 1  LIMIT 1 ', [userInfo.invite]);
//     let infoF1 = f1[0];

//     const [check_invite] = await connection.query('SELECT * FROM users WHERE invite = ?', [userInfo.invite]);
//     if (money >= 300) {
//         let levels = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44];
//         let levelIndex = levels.findIndex(levelThreshold => check_invite.length < levelThreshold);

//         if (levelIndex !== -1) {
//             let rosesF1 = (money / 100) * level[levelIndex].f1;
//             await connection.query('UPDATE users SET money = money + ?, roses_f1 = roses_f1 + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF1, rosesF1, rosesF1, rosesF1, infoF1.phone]);
//         }
//     }
// }

const VALID_TYPE_IDS = [1, 3, 5, 10];
const GAME_JOIN_MAP = {
  1: "wingo",
  3: "wingo3",
  5: "wingo5",
  10: "wingo10",
};
const JOIN_COLOR_MAP = {
  l: "big",
  n: "small",
  t: "violet",
  d: "red",
  x: "green",
  0: "red-violet",
  5: "green-violet",
};

const betWinGo = async (req, res) => {
  let { typeid, join, x, money } = req.body;
  let auth = req.cookies.auth;

  if (typeid != 1 && typeid != 3 && typeid != 5 && typeid != 10) {
    return res.status(200).json({
      message: "Error!",
      status: true,
    });
  }

  let gameJoin = "";
  if (typeid == 1) gameJoin = "wingo";
  if (typeid == 3) gameJoin = "wingo3";
  if (typeid == 5) gameJoin = "wingo5";
  if (typeid == 10) gameJoin = "wingo10";
  const [winGoNow] = await connection.query(
    "SELECT period FROM wingo WHERE status = 0 AND game = ? ORDER BY id DESC LIMIT 1",
    [gameJoin],
  );
  const [user] = await connection.query(
    "SELECT `phone`, `code`, `invite`, `level`, `money`, `bonus_money` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ",
    [auth],
  );

  if (!winGoNow[0] || !user[0] || !isNumber(x) || !isNumber(money)) {
    return res.status(200).json({
      message: "Error!",
      status: true,
    });
  }

  let userInfo = user[0];
  let period = winGoNow[0].period;
  let fee = x * money * 0.02;
  let total = x * money - fee;
  let timeNow = Date.now();
  let check = userInfo.money - total;

  console.log("fee", fee);
  console.log("total", total);
  console.log("check", check);
  console.log("timeNow", timeNow);

  let date = new Date();
  let years = formateT(date.getFullYear());
  let months = formateT(date.getMonth() + 1);
  let days = formateT(date.getDate());
  let id_product =
    years + months + days + Math.floor(Math.random() * 1000000000000000);

  let formatTime = timerJoin();

  let color = "";
  if (join == "l") {
    color = "big";
  } else if (join == "n") {
    color = "small";
  } else if (join == "t") {
    color = "violet";
  } else if (join == "d") {
    color = "red";
  } else if (join == "x") {
    color = "green";
  } else if (join == "0") {
    color = "red-violet";
  } else if (join == "5") {
    color = "green-violet";
  } else if (join % 2 == 0) {
    color = "red";
  } else if (join % 2 != 0) {
    color = "green";
  }

  let checkJoin = "";

  if ((!isNumber(join) && join == "l") || join == "n") {
    checkJoin = `
        <div data-v-a9660e98="" class="van-image" style="width: 30px; height: 30px;">
            <img src="/images/${join == "n" ? "small" : "big"}.png" class="van-image__img">
        </div>
        `;
  } else {
    checkJoin = `
        <span data-v-a9660e98="">${isNumber(join) ? join : ""}</span>
        `;
  }

  let result = `
    <div data-v-a9660e98="" issuenumber="${period}" addtime="${formatTime}" rowid="1" class="hb">
        <div data-v-a9660e98="" class="item c-row">
            <div data-v-a9660e98="" class="result">
                <div data-v-a9660e98="" class="select select-${color}">
                    ${checkJoin}
                </div>
            </div>
            <div data-v-a9660e98="" class="c-row c-row-between info">
                <div data-v-a9660e98="">
                    <div data-v-a9660e98="" class="issueName">
                        ${period}
                    </div>
                    <div data-v-a9660e98="" class="tiem">${formatTime}</div>
                </div>
            </div>
        </div>
        <!---->
    </div>
    `;

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
      " " +
      ampm
    );
  }

  let checkTime = timerJoin(date.getTime());

  if (check >= 0) {
    const sql = `INSERT INTO minutes_1 SET 
        id_product = ?,
        phone = ?,
        code = ?,
        invite = ?,
        stage = ?,
        level = ?,
        money = ?,
        amount = ?,
        fee = ?,
        get = ?,
        game = ?,
        bet = ?,
        status = ?,
        today = ?,
        time = ?`;
    await connection.query(sql, [
      id_product,
      userInfo.phone,
      userInfo.code,
      userInfo.invite,
      period,
      userInfo.level,
      total,
      x,
      fee,
      0,
      gameJoin,
      join,
      0,
      checkTime,
      timeNow,
    ]);

    const previous_bonus_money = userInfo.bonus_money;

    const totalBetMoney = money * x;

    const isBonusWalletEnabled = process.env.ENABLE_BONUS_MONEY === "true";

    let mainWalletBetMoney = isBonusWalletEnabled
      ? totalBetMoney * 0.97
      : totalBetMoney;
    let bonusWalletBetMoney = isBonusWalletEnabled ? totalBetMoney * 0.03 : 0;

    if (!(previous_bonus_money >= bonusWalletBetMoney)) {
      mainWalletBetMoney = totalBetMoney;
      bonusWalletBetMoney = 0;
    }

    await connection.query(
      "UPDATE users SET money = money - ?, total_money = total_money - ?, bonus_money = bonus_money - ? WHERE token = ?",
      [mainWalletBetMoney, mainWalletBetMoney, bonusWalletBetMoney, auth],
    );

    const [users] = await connection.query(
      "SELECT `money`, `bonus_money`, `level` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ",
      [auth],
    );

    // rosesPlus(auth, money * x);

    return res.status(200).json({
      message: "Successful bet",
      status: true,
      data: result,
      change: users[0].level,
      money: users[0].money,
      bonus_money: users[0].bonus_money,
    });
  } else {
    return res.status(200).json({
      message: "The amount is not enough",
      status: false,
    });
  }
};
const listOrderOld = async (req, res) => {
  let { typeid, pageno, pageto } = req.body;

  if (typeid != 1 && typeid != 3 && typeid != 5 && typeid != 10)
    return res.status(200).json({
      message: "Error!",
      status: true,
    });

  if (pageno < 0 || pageto < 0)
    return res.status(200).json({
      code: 0,
      msg: "No more data",
      data: {
        gameslist: [],
      },
      page: 1,
      status: false,
    });

  let auth = req.cookies.auth;

  const [user] = await connection.query(
    "SELECT `phone`, `code`, `invite`, `level`, `money` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ",
    [auth],
  );
  if (!user[0]) {
    return res.status(200).json({
      message: "Authentication failed!",
      status: true,
    });
  }

  let game = "";
  if (typeid == 1) game = "wingo";
  if (typeid == 3) game = "wingo3";
  if (typeid == 5) game = "wingo5";
  if (typeid == 10) game = "wingo10";

  const [wingo] = await connection.query(
    "SELECT * FROM wingo WHERE status != 0 AND game = ? ORDER BY id DESC LIMIT ?, ?",
    [game, Number(pageno), Number(pageto)],
  );
  const [wingoAll] = await connection.query(
    "SELECT COUNT(*) as game_length FROM wingo WHERE status != 0 AND game = ?",
    [game],
  );
  const [period] = await connection.query(
    "SELECT period FROM wingo WHERE status = 0 AND game = ? ORDER BY id DESC LIMIT 1",
    [game],
  );

  if (wingo.length == 0 && period.length !== 0)
    return res.status(200).json({
      code: 0,
      msg: "No more data",
      data: {
        gameslist: [],
      },
      period: period[0].period,
      page: 1,
      status: false,
    });

  if (period.length == 0)
    return res.status(200).json({
      message: "Unable to get previous period",
      status: true,
    });

  let page = Math.ceil(wingoAll[0].game_length / 10);

  return res.status(200).json({
    code: 0,
    msg: "Receive success",
    data: {
      gameslist: wingo,
    },
    period: period[0].period,
    page: page,
    status: true,
  });
};

const GetMyEmerdList = async (req, res) => {
  let { typeid, pageno, pageto } = req.body;

  // if (!pageno || !pageto) {
  //     pageno = 0;
  //     pageto = 10;
  // }

  if (typeid != 1 && typeid != 3 && typeid != 5 && typeid != 10) {
    return res.status(200).json({
      message: "Error!",
      status: true,
    });
  }

  if (pageno < 0 || pageto < 0) {
    return res.status(200).json({
      code: 0,
      msg: "No more data",
      data: {
        gameslist: [],
      },
      page: 1,
      status: false,
    });
  }
  let auth = req.cookies.auth;

  let game = "";
  if (typeid == 1) game = "wingo";
  if (typeid == 3) game = "wingo3";
  if (typeid == 5) game = "wingo5";
  if (typeid == 10) game = "wingo10";

  const [user] = await connection.query(
    "SELECT `phone`, `code`, `invite`, `level`, `money` FROM users WHERE token = ? AND veri = 1 LIMIT 1",
    [auth],
  );
  const [minutes_1] = await connection.query(
    "SELECT * FROM minutes_1 WHERE phone = ? AND game = ? ORDER BY id DESC LIMIT ?, ?",
    [user[0].phone, game, Number(pageno), Number(pageto)],
  );
  const [minutes_1All] = await connection.query(
    "SELECT COUNT(*) as bet_length FROM minutes_1 WHERE phone = ? AND game = ?",
    [user[0].phone, game],
  );

  if (!minutes_1[0]) {
    return res.status(200).json({
      code: 0,
      msg: "No more data",
      data: {
        gameslist: [],
      },
      page: 1,
      status: false,
    });
  }
  if (!pageno || !pageto || !user[0] || !minutes_1[0]) {
    return res.status(200).json({
      message: "Error!",
      status: true,
    });
  }
  let page = Math.ceil(minutes_1All[0].bet_length / 10);

  let datas = minutes_1.map((data) => {
    let { id, phone, code, invite, level, game, ...others } = data;
    return others;
  });

  return res.status(200).json({
    code: 0,
    msg: "Receive success",
    data: {
      gameslist: datas,
    },
    page: page,
    status: true,
  });
};

const addWinGo = async (game) => {
  try {
    let join = "";
    if (game == 1) join = "wingo";
    if (game == 3) join = "wingo3";
    if (game == 5) join = "wingo5";
    if (game == 10) join = "wingo10";

    const [winGoNow] = await connection.query(
      "SELECT period FROM wingo WHERE status = 0 AND game = ? ORDER BY id DESC LIMIT 1",
      [join],
    );
    const isPendingGame = winGoNow.length > 0;

    if (isPendingGame) {
      const [setting] = await connection.query("SELECT * FROM `admin_ac` ");

      let previousPeriod = winGoNow[0].period;
      let amount = Math.floor(Math.random() * 10);

      const [minPlayers] = await connection.query(
        "SELECT * FROM minutes_1 WHERE status = 0 AND game = ?",
        [join],
      );

      if (minPlayers.length >= 2) {
        const betColumns = [
          // red_small
          { name: "red_0", bets: ["0", "t", "d", "n"] },
          { name: "red_2", bets: ["2", "d", "n"] },
          { name: "red_4", bets: ["4", "d", "n"] },
          // green small
          { name: "green_1", bets: ["1", "x", "n"] },
          { name: "green_3", bets: ["3", "x", "n"] },
          // green big
          { name: "green_5", bets: ["5", "x", "t", "l"] },
          { name: "green_7", bets: ["7", "x", "l"] },
          { name: "green_9", bets: ["9", "x", "l"] },
          // red big
          { name: "red_6", bets: ["6", "d", "l"] },
          { name: "red_8", bets: ["8", "d", "l"] },
        ];

        const totalMoneyPromises = betColumns.map(async (column) => {
          // Generate placeholders for the array elements
          const placeholders = column.bets.map(() => "?").join(",");
          // Prepare the query, using placeholders for the array
          const query = `
                   SELECT SUM(money) AS total_money
                   FROM minutes_1
                   WHERE game = ? AND status = 0 AND bet IN (${placeholders})
               `;
          // Execute the query, spreading the array into the parameters
          const [result] = await connection.query(query, [
            join,
            ...column.bets,
          ]);
          return {
            name: column.name,
            total_money: result[0]?.total_money
              ? parseInt(result[0].total_money, 10)
              : 0,
          };
        });

        const categories = await Promise.all(totalMoneyPromises);
        let smallestCategory = categories.reduce(
          (smallest, category) =>
            smallest === null || category.total_money < smallest.total_money
              ? category
              : smallest,
          null,
        );
        const colorBets = {
          red_6: [6],
          red_8: [8],
          red_2: [2], //0 removed
          red_4: [4],
          green_3: [3],
          green_7: [7], //5 removed
          green_9: [9], //
          green_1: [1],
          green_5: [5],
          red_0: [0],
        };

        const betsForCategory = colorBets[smallestCategory.name] || [];
        const availableBets = betsForCategory.filter(
          (bet) =>
            !categories.find(
              (category) =>
                category.name === smallestCategory.name &&
                category.total_money < smallestCategory.total_money,
            ),
        );
        let lowestBet;
        if (availableBets.length > 0) {
          lowestBet = availableBets[0];
        } else {
          lowestBet = betsForCategory.reduce((lowest, bet) =>
            bet < lowest ? bet : lowest,
          );
        }

        amount = lowestBet;
      } else if (
        minPlayers.length === 1 &&
        parseFloat(minPlayers[0].money) >= 20
      ) {
        const betColumns = [
          { name: "red_small", bets: ["0", "2", "4", "d", "n"] },
          { name: "red_big", bets: ["6", "8", "d", "l"] },
          { name: "green_big", bets: ["5", "7", "9", "x", "l"] },
          { name: "green_small", bets: ["1", "3", "x", "n"] },
          { name: "violet_small", bets: ["0", "t", "n"] },
          { name: "violet_big", bets: ["5", "t", "l"] },
        ];

        const categories = await Promise.all(
          betColumns.map(async (column) => {
            const [result] = await connection.query(
              `
                     SELECT SUM(money) AS total_money
                     FROM minutes_1
                     WHERE game = ? AND status = 0 AND bet IN (?)
                     `,
              [join, column.bets],
            );
            return {
              name: column.name,
              total_money: parseInt(result[0]?.total_money) || 0,
            };
          }),
        );

        const colorBets = {
          red_big: [6, 8],
          red_small: [2, 4], //0 removed
          green_big: [7, 9], //5 removed
          green_small: [1, 3],
          violet_big: [5],
          violet_small: [0],
        };

        const smallestCategory = categories.reduce((smallest, category) =>
          !smallest || category.total_money < smallest.total_money
            ? category
            : smallest,
        );

        const betsForCategory = colorBets[smallestCategory.name] || [];
        const availableBets = betsForCategory.filter(
          (bet) =>
            !categories.find(
              (category) =>
                category.name === smallestCategory.name &&
                category.total_money < smallestCategory.total_money,
            ),
        );

        const lowestBet =
          availableBets.length > 0
            ? availableBets[0]
            : Math.min(...betsForCategory);
        amount = lowestBet;
      }

      let nextResult = "";
      if (game == 1) nextResult = setting[0].wingo1;
      if (game == 3) nextResult = setting[0].wingo3;
      if (game == 5) nextResult = setting[0].wingo5;
      if (game == 10) nextResult = setting[0].wingo10;

      let newArr = "";
      if (nextResult == "-1") {
        // game algorithm generate result
        await connection.query(
          "UPDATE wingo SET amount = ?, status = 1, release_status = 1 WHERE period = ? AND game = ?",
          [amount, previousPeriod, join],
        );
        newArr = "-1";
      } else {
        // admin set result
        let result = "";
        let arr = nextResult.split("|");
        let check = arr.length;
        if (check == 1) {
          newArr = "-1";
        } else {
          for (let i = 1; i < arr.length; i++) {
            newArr += arr[i] + "|";
          }
          newArr = newArr.slice(0, -1);
        }
        result = arr[0];
        await connection.query(
          "UPDATE wingo SET amount = ?, status = 1, release_status = 1 WHERE period = ? AND game = ?",
          [result, previousPeriod, join],
        );
      }

      let adminWingoKey = "";
      if (game == 1) adminWingoKey = "wingo1";
      if (game == 3) adminWingoKey = "wingo3";
      if (game == 5) adminWingoKey = "wingo5";
      if (game == 10) adminWingoKey = "wingo10";

      await connection.query(`UPDATE admin_ac SET ${adminWingoKey} = ?`, [
        newArr,
      ]);
    }

    let timeNow = Date.now();
    let gameRepresentationId = GameRepresentationIds.WINGO[game];
    let NewGamePeriod = generatePeriod(gameRepresentationId);

    //console.log(NewGamePeriod, join);

    await connection.query(
      `
         INSERT INTO wingo
         SET period = ?, amount = 0, game = ?, status = 0, time = ?
      `,
      [NewGamePeriod, join, timeNow],
    );
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};

const handlingWinGo1P = async (typeid) => {
  try {
    let game = "";
    if (typeid == 1) game = "wingo";
    if (typeid == 3) game = "wingo3";
    if (typeid == 5) game = "wingo5";
    if (typeid == 10) game = "wingo10";

    const [winGoNow] = await connection.query(
      "SELECT * FROM wingo WHERE status = 1 AND release_status = 1 AND game = ? ORDER BY id DESC LIMIT 1",
      [game],
    );

    if (winGoNow.length === 0) {
      return;
    }

    await connection.query(
      "UPDATE minutes_1 SET result = ? WHERE status = 0 AND game = ?",
      [winGoNow[0].amount, game],
    );

    let result = Number(winGoNow[0].amount);

    await batchUpdateBetStatus(result, game);

    const [order] = await connection.query(
      "SELECT * FROM minutes_1 WHERE status = 0 AND game = ?",
      [game],
    );

    for (let i = 0; i < order.length; i++) {
      let orders = order[i];
      let result = orders.result;
      let bet = orders.bet;
      let total = orders.money;
      let id = orders.id;
      let phone = orders.phone;
      let winAmount = calculateWinAmount(bet, result, total);

      const [users] = await connection.query(
        "SELECT `money` FROM `users` WHERE `phone` = ?",
        [phone],
      );

      let totals = parseFloat(users[0].money) + parseFloat(winAmount);

      await connection.query(
        "UPDATE `minutes_1` SET `get` = ?, `status` = 1 WHERE `id` = ?",
        [parseFloat(winAmount), id],
      );

      await connection.query(
        "UPDATE `users` SET `money` = ? WHERE `phone` = ?",
        [totals, phone],
      );
    }

    await connection.query(
      "UPDATE wingo SET release_status = 2 WHERE period = ? AND game = ?",
      [winGoNow[0].period, game],
    );
  } catch (error) {
    console.log(error);
  }
};

const batchUpdateBetStatus = async (result, game) => {
  const validBets = getValidBets(result);
  const batchSize = 1000; // Adjust this based on your data volume and server capacity
  let offset = 0;

  while (true) {
    const [rows] = await connection.execute(
      `UPDATE minutes_1 SET status = 2 
       WHERE status = 0 AND game = ? AND bet NOT IN (${validBets.map(() => "?").join(",")})
       LIMIT ${batchSize}`,
      [game, ...validBets],
    );

    if (rows.affectedRows === 0) break; // No more rows to update
    offset += batchSize;
  }
};

const getValidBets = (result) => {
  result = Number(result);

  const baseValidBets = [result.toString()];

  if (result % 2 === 0) baseValidBets.push("d");
  else baseValidBets.push("x");

  if (result === 0 || result === 5) baseValidBets.push("t");

  if (result <= 4) baseValidBets.push("n");
  else baseValidBets.push("l");

  return baseValidBets;
};

const calculateWinAmount = (bet, result, total) => {
  let winAmount = 0;
  if (bet == "l" || bet == "n") {
    winAmount = total * 2;
  } else {
    if (result == 0 || result == 5) {
      if (bet == "d" || bet == "x") {
        winAmount = total * 1.5;
      } else if (bet == "t") {
        winAmount = total * 4.5;
      } else if (bet == "0" || bet == "5") {
        winAmount = total * 4.5;
      }
    } else {
      if (result == 1 && bet == "1") {
        winAmount = total * 9;
      } else {
        if (result == 1 && bet == "x") {
          winAmount = total * 2;
        }
      }
      if (result == 2 && bet == "2") {
        winAmount = total * 9;
      } else {
        if (result == 2 && bet == "d") {
          winAmount = total * 2;
        }
      }
      if (result == 3 && bet == "3") {
        winAmount = total * 9;
      } else {
        if (result == 3 && bet == "x") {
          winAmount = total * 2;
        }
      }
      if (result == 4 && bet == "4") {
        winAmount = total * 9;
      } else {
        if (result == 4 && bet == "d") {
          winAmount = total * 2;
        }
      }
      if (result == 6 && bet == "6") {
        winAmount = total * 9;
      } else {
        if (result == 6 && bet == "d") {
          winAmount = total * 2;
        }
      }
      if (result == 7 && bet == "7") {
        winAmount = total * 9;
      } else {
        if (result == 7 && bet == "x") {
          winAmount = total * 2;
        }
      }
      if (result == 8 && bet == "8") {
        winAmount = total * 9;
      } else {
        if (result == 8 && bet == "d") {
          winAmount = total * 2;
        }
      }
      if (result == 9 && bet == "9") {
        winAmount = total * 9;
      } else {
        if (result == 9 && bet == "x") {
          winAmount = total * 2;
        }
      }
    }
  }
  return winAmount;
};

const winGoController = {
  winGoPage,
  betWinGo,
  listOrderOld,
  GetMyEmerdList,
  handlingWinGo1P,
  addWinGo,
  distributeCommission,
  winGoPage3,
  winGoPage5,
  winGoPage10,
};

export default winGoController;
