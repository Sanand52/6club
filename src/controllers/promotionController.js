import moment from "moment";
import connection from "../config/connectDB.js";
import {
  REWARD_STATUS_TYPES_MAP,
  REWARD_TYPES_MAP,
} from "../constants/reward_types.js";
import { PaymentStatusMap } from "./paymentController.js";
import {
  getStartOfWeekTimestamp,
  getTimeBasedOnDate,
  getTodayStartTime,
  monthTime,
  yesterdayTime,
} from "../helpers/games.js";

function getOrdinal(n) {
  let s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

const getSubordinateDataByPhone = async (phone) => {
  const [[row_1]] = await connection.execute(
    "SELECT COUNT(*) AS `count` FROM `recharge` WHERE `phone` = ? AND `status` = ?",
    [phone, PaymentStatusMap.SUCCESS],
  );
  const rechargeQuantity = row_1.count;
  const [[row_2]] = await connection.execute(
    "SELECT SUM(money) AS `sum` FROM `recharge` WHERE `phone` = ? AND `status` = ?",
    [phone, PaymentStatusMap.SUCCESS],
  );
  const rechargeAmount = row_2.sum;

  const [[row_3]] = await connection.execute(
    "SELECT SUM(money) AS `sum` FROM `recharge` WHERE `phone` = ? AND `status` = ? ORDER BY id LIMIT 1 ",
    [phone, PaymentStatusMap.SUCCESS],
  );
  const firstRechargeAmount = row_3.sum;

  const [gameWingo] = await connection.query(
    "SELECT SUM(money) as totalBettingAmount FROM minutes_1 WHERE phone = ?",
    [phone],
  );
  const gameWingoBettingAmount = gameWingo[0].totalBettingAmount || 0;

  const [gameK3] = await connection.query(
    "SELECT SUM(money) as totalBettingAmount FROM result_k3 WHERE phone = ?",
    [phone],
  );
  const gameK3BettingAmount = gameK3[0].totalBettingAmount || 0;

  const [game5D] = await connection.query(
    "SELECT SUM(money) as totalBettingAmount FROM result_5d WHERE phone = ?",
    [phone],
  );
  const game5DBettingAmount = game5D[0].totalBettingAmount || 0;

  return {
    rechargeQuantity,
    rechargeAmount,
    firstRechargeAmount,
    bettingAmount:
      parseInt(gameWingoBettingAmount) +
      parseInt(gameK3BettingAmount) +
      parseInt(game5DBettingAmount),
  };
};

const getSubordinatesListDataByCode = async (code, startDate) => {
  let [subordinatesList] = startDate
    ? await connection.execute(
        "SELECT `code`, `phone`, `id_user`, `level`, `time` FROM `users` WHERE `invite` = ? AND time <= ?",
        [code, startDate],
      )
    : await connection.execute(
        "SELECT `code`, `phone`, `id_user`, `time` FROM `users` WHERE `invite` = ?",
        [code],
      );

  let subordinatesCount = subordinatesList.length;
  let subordinatesRechargeQuantity = 0;
  let subordinatesRechargeAmount = 0;
  let subordinatesWithDepositCount = 0;
  let subordinatesFirstDepositAmount = 0;
  let subordinatesWithBettingCount = 0;
  let subordinatesBettingAmount = 0;

  for (let index = 0; index < subordinatesList.length; index++) {
    const subordinate = subordinatesList[index];
    const {
      rechargeQuantity,
      rechargeAmount,
      bettingAmount,
      firstRechargeAmount,
    } = await getSubordinateDataByPhone(subordinate.phone);

    subordinatesRechargeQuantity += parseInt(rechargeQuantity) || 0;
    subordinatesRechargeAmount += parseInt(rechargeAmount) || 0;
    subordinatesList[index]["rechargeQuantity"] =
      parseInt(rechargeQuantity) || 0;
    subordinatesList[index]["rechargeAmount"] = parseInt(rechargeAmount) || 0;
    subordinatesList[index]["bettingAmount"] = parseInt(bettingAmount) || 0;
    subordinatesList[index]["firstRechargeAmount"] =
      parseInt(firstRechargeAmount) || 0;
    subordinatesList[index]["level"] = subordinatesList[index]["level"] || 0;
    subordinatesList[index]["commission"] =
      subordinatesList[index]["commission"] || 0;
    subordinatesWithBettingCount += parseInt(bettingAmount) > 0 ? 1 : 0;
    subordinatesBettingAmount += parseInt(bettingAmount);
    subordinatesFirstDepositAmount += parseInt(firstRechargeAmount) || 0;

    if (rechargeAmount > 0) {
      subordinatesWithDepositCount++;
    }
  }

  return {
    subordinatesList,
    subordinatesCount,
    subordinatesRechargeQuantity,
    subordinatesRechargeAmount,
    subordinatesWithDepositCount,
    subordinatesWithBettingCount,
    subordinatesBettingAmount,
    subordinatesFirstDepositAmount,
  };
};

const getOneLevelTeamSubordinatesData = async (directSubordinatesList) => {
  let oneLevelTeamSubordinatesCount = 0;
  let oneLevelTeamSubordinatesRechargeQuantity = 0;
  let oneLevelTeamSubordinatesRechargeAmount = 0;
  let oneLevelTeamSubordinatesWithDepositCount = 0;
  let oneLevelTeamSubordinatesList = [];

  for (const directSubordinate of directSubordinatesList) {
    const indirectSubordinatesData = await getSubordinatesListDataByCode(
      directSubordinate.code,
    );
    oneLevelTeamSubordinatesList = [
      ...oneLevelTeamSubordinatesList,
      ...indirectSubordinatesData.subordinatesList,
    ];
    oneLevelTeamSubordinatesCount += indirectSubordinatesData.subordinatesCount;
    oneLevelTeamSubordinatesRechargeQuantity +=
      indirectSubordinatesData.subordinatesRechargeQuantity;
    oneLevelTeamSubordinatesRechargeAmount +=
      indirectSubordinatesData.subordinatesRechargeAmount;
    oneLevelTeamSubordinatesWithDepositCount +=
      indirectSubordinatesData.subordinatesWithDepositCount;
  }

  return {
    oneLevelTeamSubordinatesCount,
    oneLevelTeamSubordinatesRechargeQuantity,
    oneLevelTeamSubordinatesRechargeAmount,
    oneLevelTeamSubordinatesWithDepositCount,
    oneLevelTeamSubordinatesList,
  };
};

// const subordinatesDataAPI = async (req, res) => {
//   try {
//       const authToken = req.cookies.auth;
//       const [userRow] = await connection.execute("SELECT `code`, `invite` FROM `users` WHERE `token` = ? AND `veri` = 1", [authToken]);
//       const user = userRow?.[0];

//       if (!user) {
//          return res.status(401).json({ message: "Unauthorized" });
//       }

//       const directSubordinatesData = await getSubordinatesListDataByCode(user.code);

//       let directSubordinatesCount = directSubordinatesData.subordinatesCount;
//       let directSubordinatesRechargeQuantity = directSubordinatesData.subordinatesRechargeQuantity;
//       let directSubordinatesRechargeAmount = directSubordinatesData.subordinatesRechargeAmount;
//       let directSubordinatesWithDepositCount = directSubordinatesData.subordinatesWithDepositCount;

//       const directSubordinatesList = directSubordinatesData.subordinatesList;

//       let teamSubordinatesCount = directSubordinatesCount;
//       let teamSubordinatesRechargeQuantity = directSubordinatesRechargeQuantity;
//       let teamSubordinatesRechargeAmount = directSubordinatesRechargeAmount;
//       let teamSubordinatesWithDepositCount = directSubordinatesWithDepositCount;

//       let tempSubordinatesList = directSubordinatesList;

//       for (let index = 0; index < 10; index++) {
//          const element = await getOneLevelTeamSubordinatesData(tempSubordinatesList);

//          tempSubordinatesList = element.oneLevelTeamSubordinatesList;
//          teamSubordinatesCount += element.oneLevelTeamSubordinatesCount;
//          teamSubordinatesRechargeQuantity += element.oneLevelTeamSubordinatesRechargeQuantity;
//          teamSubordinatesRechargeAmount += element.oneLevelTeamSubordinatesRechargeAmount;
//          teamSubordinatesWithDepositCount += element.oneLevelTeamSubordinatesWithDepositCount;
//       }

//       return res.status(200).json({
//          data: {
//             directSubordinatesCount,
//             directSubordinatesRechargeQuantity,
//             directSubordinatesRechargeAmount,
//             directSubordinatesWithDepositCount,
//             teamSubordinatesCount,
//             teamSubordinatesRechargeQuantity,
//             teamSubordinatesRechargeAmount,
//             teamSubordinatesWithDepositCount,
//          },
//       });
//   } catch (error) {
//       console.log(error);
//       return res.status(500).json({ message: error.message });
//   }
// };
const createInviteMap = (rows) => {
  const inviteMap = {};
  rows.forEach((user) => {
    if (!inviteMap[user.invite]) {
      inviteMap[user.invite] = [];
    }
    inviteMap[user.invite].push(user);
  });
  return inviteMap;
};

const getLevelUsers = (inviteMap, userCode, currentLevel, maxLevel) => {
  if (currentLevel > maxLevel) return [];

  const levelUsers = inviteMap[userCode] || [];
  if (levelUsers.length === 0) return [];
  return levelUsers.flatMap((user) => [
    { ...user, user_level: currentLevel },
    ...getLevelUsers(inviteMap, user.code, currentLevel + 1, maxLevel),
  ]);
};

const getUserLevels = (rows, userCode, maxLevel = 10) => {
  const inviteMap = createInviteMap(rows);
  const usersByLevels = getLevelUsers(inviteMap, userCode, 1, maxLevel);

  return { usersByLevels, level1Referrals: inviteMap[userCode] };
};

const userStats = async (startTime, endTime, phone = "") => {
  const [rows] = await connection.query(
    `
      SELECT
          u.phone,
          u.invite,
          u.code,
          u.time,
          u.id_user,
          COALESCE(r.total_deposit_amount, 0) AS total_deposit_amount,
          COALESCE(r.total_deposit_number, 0) AS total_deposit_number,
          COALESCE(m.total_bets, 0) AS total_bets,
          COALESCE(m.total_bet_amount, 0) AS total_bet_amount,
          COALESCE(c.total_commission, 0) AS total_commission
      FROM
          users u
      LEFT JOIN
          (
              SELECT
                  phone,
                  SUM(CASE WHEN status = 1 THEN COALESCE(money, 0) ELSE 0 END) AS total_deposit_amount,
                  COUNT(CASE WHEN status = 1 THEN phone ELSE NULL END) AS total_deposit_number
              FROM
                  recharge
              WHERE
                  time > ? AND time < ?
              GROUP BY
                  phone
          ) r ON u.phone = r.phone
      LEFT JOIN
          (
              SELECT 
                  phone,
                  COALESCE(SUM(total_bet_amount), 0) AS total_bet_amount,
                  COALESCE(SUM(total_bets), 0) AS total_bets
              FROM (
                  SELECT 
                      phone,
                      SUM(money + fee) AS total_bet_amount,
                      COUNT(*) AS total_bets
                  FROM minutes_1
                  WHERE time >= ? AND time <= ?
                  GROUP BY phone
                  UNION ALL
                  SELECT 
                      phone,
                      SUM(money + fee) AS total_bet_amount,
                      COUNT(*) AS total_bets
                  FROM trx_wingo_bets
                  WHERE time >= ? AND time <= ?
                  GROUP BY phone
              ) AS combined
              GROUP BY phone
          ) m ON u.phone = m.phone
      LEFT JOIN
          (
              SELECT
                  from_user_phone AS phone,
                  SUM(money) AS total_commission
              FROM
                  commissions
              WHERE
                  time > ? AND time <= ? AND phone = ?
              GROUP BY
                  from_user_phone
          ) c ON u.phone = c.phone
      GROUP BY
          u.phone
      ORDER BY
          u.time DESC;
      `,
    [
      startTime,
      endTime,
      startTime,
      endTime,
      startTime,
      endTime,
      startTime,
      endTime,
      phone,
    ],
  );

  return rows;
};

const getCommissionStatsByTime = async (time, phone) => {
  const { startOfYesterdayTimestamp, endOfYesterdayTimestamp } =
    yesterdayTime();
  const [commissionRow] = await connection.execute(
    `
      SELECT
          time,
          SUM(COALESCE(c.money, 0)) AS total_commission,
          SUM(CASE 
              WHEN c.time >= ? 
              THEN COALESCE(c.money, 0)
              ELSE 0 
          END) AS last_week_commission,
          SUM(CASE 
              WHEN c.time > ? AND c.time <= ?
              THEN COALESCE(c.money, 0)
              ELSE 0 
          END) AS yesterday_commission
      FROM
          commissions c
      WHERE
          c.phone = ?
      `,
    [time, startOfYesterdayTimestamp, endOfYesterdayTimestamp, phone],
  );
  return commissionRow?.[0] || {};
};

const subordinatesDataAPI = async (req, res) => {
  try {
    const authToken = req.cookies.auth;
    const startOfWeek = getStartOfWeekTimestamp();
    const { startOfYesterdayTimestamp, endOfYesterdayTimestamp } =
      yesterdayTime();
    const [userRow] = await connection.execute(
      "SELECT * FROM `users` WHERE `token` = ? AND `veri` = 1",
      [authToken],
    );
    const user = userRow?.[0];
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const commissions = await getCommissionStatsByTime(startOfWeek, user.phone);

    // console.time("getUserLevels"); // Start the timer
    const userStatsData = await userStats(
      startOfYesterdayTimestamp,
      endOfYesterdayTimestamp,
    );
    // console.timeEnd("getUserLevels");
    const { usersByLevels = [], level1Referrals = [] } = getUserLevels(
      userStatsData,
      user.code,
    );

    const directSubordinatesCount = level1Referrals.length;
    const noOfRegisteredSubordinates = level1Referrals.filter(
      (user) => user.time >= startOfYesterdayTimestamp,
    ).length;
    const directSubordinatesRechargeQuantity = level1Referrals.reduce(
      (acc, curr) => acc + curr.total_deposit_number,
      0,
    );
    const directSubordinatesRechargeAmount = level1Referrals.reduce(
      (acc, curr) => acc + +curr.total_deposit_amount,
      0,
    );
    const directSubordinatesWithDepositCount = level1Referrals.filter(
      (user) => user.total_deposit_number === 1,
    ).length;

    const teamSubordinatesCount = usersByLevels.length;
    const noOfRegisterAll = usersByLevels.filter(
      (user) => user.time >= startOfYesterdayTimestamp,
    );
    const noOfRegisterAllSubordinates = noOfRegisterAll.length;
    const teamSubordinatesRechargeQuantity = usersByLevels.reduce(
      (acc, curr) => acc + curr.total_deposit_number,
      0,
    );
    const teamSubordinatesRechargeAmount = usersByLevels.reduce(
      (acc, curr) => acc + +curr.total_deposit_amount,
      0,
    );
    const teamSubordinatesWithDepositCount = usersByLevels.filter(
      (user) => user.total_deposit_number === 1,
    ).length;

    const totalCommissions = commissions?.total_commission || 0;
    const totalCommissionsThisWeek = commissions?.last_week_commission || 0;
    const totalCommissionsYesterday = commissions?.yesterday_commission || 0;

    return res.status(200).json({
      data: {
        directSubordinatesCount,
        noOfRegisteredSubordinates,
        directSubordinatesRechargeQuantity,
        directSubordinatesRechargeAmount,
        directSubordinatesWithDepositCount,
        teamSubordinatesCount,
        noOfRegisterAllSubordinates,
        teamSubordinatesRechargeQuantity,
        teamSubordinatesRechargeAmount,
        teamSubordinatesWithDepositCount,
        totalCommissions,
        totalCommissionsThisWeek,
        totalCommissionsYesterday,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

// const subordinatesDataByTimeAPI = async (req, res) => {
//    try {
//       const authToken = req.cookies.auth;
//       const [userRow] = await connection.execute("SELECT `code`, `invite` FROM `users` WHERE `token` = ? AND `veri` = 1", [authToken]);
//       const user = userRow?.[0];
//       const startDate = req.query.startDate;
//       console.log('===================',req.query.startDate)

//       if (!user) {
//          return res.status(401).json({ message: "Unauthorized" });
//       }

//       const directSubordinatesData = await getSubordinatesListDataByCode(user.code, startDate);

//       let directSubordinatesCount = directSubordinatesData.subordinatesCount;
//       let directSubordinatesRechargeQuantity = directSubordinatesData.subordinatesRechargeQuantity;
//       let directSubordinatesRechargeAmount = directSubordinatesData.subordinatesRechargeAmount;
//       let directSubordinatesWithDepositCount = directSubordinatesData.subordinatesWithDepositCount;
//       let directSubordinatesWithBettingCount = directSubordinatesData.subordinatesWithBettingCount;
//       let directSubordinatesBettingAmount = directSubordinatesData.subordinatesBettingAmount;
//       let directSubordinatesFirstDepositAmount = directSubordinatesData.subordinatesFirstDepositAmount;

//       const directSubordinatesList = directSubordinatesData.subordinatesList;

//       res.status(200).json({
//          status: true,
//          data: {
//             directSubordinatesCount,
//             directSubordinatesRechargeQuantity,
//             directSubordinatesRechargeAmount,
//             directSubordinatesWithDepositCount,
//             directSubordinatesWithBettingCount,
//             directSubordinatesBettingAmount,
//             directSubordinatesFirstDepositAmount,
//             directSubordinatesList,
//          },
//          message: "Successfully fetched subordinates data",
//       });
//    } catch (error) {
//       console.log(error);
//       res.status(500).json({
//          message: "Something went wrong!",
//          error,
//       });
//    }
// };

const subordinatesDataByTimeAPI = async (req, res) => {
  try {
    const authToken = req.cookies.auth;
    const [userRow] = await connection.execute(
      "SELECT `code`,phone, `invite` FROM `users` WHERE `token` = ? AND `veri` = 1",
      [authToken],
    );
    const user = userRow?.[0];
    const startDate = +req.query.startDate;
    const endDate = getTimeBasedOnDate(startDate);

    const searchFromUid = req.query.id || "";
    const levelFilter = req.query.level;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    // const levelFilter = "";

    // console.log("===================", req.query.startDate, searchFromUid, levelFilter);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const userStatsData = await userStats(startDate, endDate, user.phone);
    // console.time('getUserLevels'); // Start the timer
    const { usersByLevels = [] } = getUserLevels(userStatsData, user.code);
    // console.timeEnd('getUserLevels'); //
    // const filteredUsers = usersByLevels.filter(user => user.time >= startDate && user.id_user.includes(searchFromUid) && (levelFilter !== "All" ? user.user_level === +levelFilter : true));
    const filteredUsers = usersByLevels.filter(
      (user) =>
        user.id_user.includes(searchFromUid) &&
        (levelFilter !== "All" ? user.user_level === +levelFilter : true),
    );
    // const usersFilterByPositiveData = filteredUsers.filter(
    //   (user) =>
    //     user.total_deposit_number > 0 ||
    //     user.total_deposit_amount > 0 ||
    //     user.total_bets > 0,
    // );

    const sortedUsersByBet = filteredUsers.sort((a, b) => b.total_bet_amount - a.total_bet_amount);

    const subordinatesRechargeQuantity = filteredUsers.reduce(
      (acc, curr) => acc + curr.total_deposit_number,
      0,
    );
    const subordinatesRechargeAmount = filteredUsers.reduce(
      (acc, curr) => acc + +curr.total_deposit_amount,
      0,
    );
    /**********************for bets ********************************** */
    const subordinatesWithBetting = filteredUsers.filter(
      (user) => user.total_bets > 0,
    );
    const subordinatesWithBettingCount = subordinatesWithBetting.length;
    const subordinatesBettingAmount = subordinatesWithBetting
      .reduce((acc, curr) => acc + +curr.total_bet_amount, 0)
      .toFixed();

    /**********************for first deposit ********************************** */
    const subordinatesWithFirstDeposit = filteredUsers.filter(
      (user) => user.total_deposit_number === 1,
    );
    const subordinatesWithFirstDepositCount =
      subordinatesWithFirstDeposit.length;
    const subordinatesWithFirstDepositAmount =
      subordinatesWithFirstDeposit.reduce(
        (acc, curr) => acc + +curr.total_deposit_amount,
        0,
      );

    //for pagination
    const paginatedUsers = sortedUsersByBet.slice(
      offset,
      offset + limit,
    );
    const totalUsers = sortedUsersByBet.length;
    const totalPages = Math.ceil(totalUsers / limit);

    res.json({
      status: true,
      meta: {
        totalPages,
        currentPage: page,
      },
      data: {
        usersByLevels: paginatedUsers,

        subordinatesRechargeQuantity,
        subordinatesRechargeAmount,
        subordinatesWithBettingCount,
        subordinatesBettingAmount,
        subordinatesWithFirstDepositCount,
        subordinatesWithFirstDepositAmount,
      },
      message: "Successfully fetched subordinates data",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const subordinatesAPI = async (req, res) => {
  try {
    const authToken = req.cookies.auth;
    const [userRow] = await connection.execute(
      "SELECT `code`,phone, `invite` FROM `users` WHERE `token` = ? AND `veri` = 1",
      [authToken],
    );
    const type = req.query.type || "today";

    const { startOfYesterdayTimestamp, endOfYesterdayTimestamp } =
      yesterdayTime();
    const { startOfMonthTimestamp, endOfMonthTimestamp } = monthTime();

    const startDate =
      type === "today"
        ? getTodayStartTime()
        : type === "yesterday"
          ? startOfYesterdayTimestamp
          : type === "this month"
            ? startOfMonthTimestamp
            : "";
    const endDate =
      type === "today"
        ? new Date().getTime()
        : type === "yesterday"
          ? endOfYesterdayTimestamp
          : type === "this month"
            ? endOfMonthTimestamp
            : "";

    const user = userRow?.[0];

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userStatsData = await userStats(startDate, endDate, user.phone);
    // console.time('getUserLevels'); // Start the timer
    const { level1Referrals } = getUserLevels(userStatsData, user.code);

    const users = level1Referrals
      .map((user) => {
        const { phone, id_user: uid, time } = user;
        const phoneFormat = phone.slice(0, 3) + "****" + phone.slice(7);
        const timeUtc = new Date(parseInt(time))
          .toLocaleString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
            timeZone: "UTC",
          })
          .replace(",", "");
        if (user.time >= startDate)
          return { phone: phoneFormat, uid, time: timeUtc };
        else return null;
      })
      .filter(Boolean);

    res.status(200).json({
      status: true,
      type,
      users,
      message: "Successfully fetched subordinates data",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const InvitationBonusList = [
  {
    id: 1,
    numberOfInvitedMembers: 3,
    numberOfDeposits: 3,
    amountOfRechargePerPerson: 555,
    bonusAmount: 199,
  },

  {
    id: 2,
    numberOfInvitedMembers: 5,
    numberOfDeposits: 5,
    amountOfRechargePerPerson: 555,
    bonusAmount: 299,
  },
  {
    id: 3,
    numberOfInvitedMembers: 10,
    numberOfDeposits: 10,
    amountOfRechargePerPerson: 1111,
    bonusAmount: 599,
  },
  {
    id: 4,
    numberOfInvitedMembers: 30,
    numberOfDeposits: 30,
    amountOfRechargePerPerson: 1111,
    bonusAmount: 1799,
  },
  {
    id: 5,
    numberOfInvitedMembers: 50,
    numberOfDeposits: 50,
    amountOfRechargePerPerson: 1111,
    bonusAmount: 2799,
  },
  {
    id: 6,
    numberOfInvitedMembers: 75,
    numberOfDeposits: 75,
    amountOfRechargePerPerson: 1555,
    bonusAmount: 4799,
  },
  {
    id: 7,
    numberOfInvitedMembers: 100,
    numberOfDeposits: 100,
    amountOfRechargePerPerson: 1555,
    bonusAmount: 6799,
  },
  {
    id: 8,
    numberOfInvitedMembers: 200,
    numberOfDeposits: 200,
    amountOfRechargePerPerson: 1555,
    bonusAmount: 12229,
  },
  {
    id: 9,
    numberOfInvitedMembers: 500,
    numberOfDeposits: 500,
    amountOfRechargePerPerson: 1777,
    bonusAmount: 33339,
  },
  {
    id: 10,
    numberOfInvitedMembers: 1000,
    numberOfDeposits: 1000,
    amountOfRechargePerPerson: 1777,
    bonusAmount: 64449,
  },
  {
    id: 11,
    numberOfInvitedMembers: 2000,
    numberOfDeposits: 2000,
    amountOfRechargePerPerson: 1777,
    bonusAmount: 122229,
  },
  {
    id: 12,
    numberOfInvitedMembers: 5000,
    numberOfDeposits: 5000,
    amountOfRechargePerPerson: 2111,
    bonusAmount: 299999,
  },
  {
    id: 13,
    numberOfInvitedMembers: 10000,
    numberOfDeposits: 10000,
    amountOfRechargePerPerson: 2555,
    bonusAmount: 999999,
  },
];

const getInvitationBonus = async (req, res) => {
  try {
    const authToken = req.cookies.auth;
    const [userRow] = await connection.execute(
      "SELECT `code`, `invite`, `phone` FROM `users` WHERE `token` = ? AND `veri` = 1",
      [authToken],
    );
    const user = userRow?.[0];

    console.log(user);
    if (!user) {
      return res.status(401).json({ status: false, message: "Unauthorized" });
    }

    const directSubordinatesData = await getSubordinatesListDataByCode(
      user.code,
    );

    let directSubordinatesCount = directSubordinatesData.subordinatesCount;
    let directSubordinatesRechargeAmount =
      directSubordinatesData.subordinatesRechargeAmount;

    const [claimedRewardsRow] = await connection.execute(
      "SELECT * FROM `claimed_rewards` WHERE `type` = ? AND `phone` = ?",
      [REWARD_TYPES_MAP.INVITATION_BONUS, user.phone],
    );

    const invitationBonusData = InvitationBonusList.map((item) => {
      const currentNumberOfDeposits =
        directSubordinatesData.subordinatesList.filter(
          (subordinate) =>
            subordinate.rechargeAmount >= item.amountOfRechargePerPerson,
        ).length;
      return {
        id: item.id,
        isFinished:
          directSubordinatesCount >= item.numberOfInvitedMembers &&
          currentNumberOfDeposits >= item.numberOfDeposits,
        isClaimed: claimedRewardsRow.some(
          (claimedReward) => claimedReward.reward_id === item.id,
        ),
        required: {
          numberOfInvitedMembers: item.numberOfInvitedMembers,
          numberOfDeposits: item.numberOfDeposits,
          amountOfRechargePerPerson: item.amountOfRechargePerPerson,
        },
        current: {
          numberOfInvitedMembers: Math.min(
            directSubordinatesCount,
            item.numberOfInvitedMembers,
          ),
          numberOfDeposits: Math.min(
            currentNumberOfDeposits,
            item.numberOfDeposits,
          ),
          amountOfRechargePerPerson: Math.min(
            directSubordinatesRechargeAmount,
            item.amountOfRechargePerPerson,
          ),
        },
        bonusAmount: item.bonusAmount,
      };
    });

    return res.status(200).json({
      data: invitationBonusData,
      status: true,
      message: "Successfully fetched invitation bonus data",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const claimInvitationBonus = async (req, res) => {
  try {
    const authToken = req.cookies.auth;
    const invitationBonusId = req.body.id;

    const [userRow] = await connection.execute(
      "SELECT `code`, `invite`, `phone` FROM `users` WHERE `token` = ? AND `veri` = 1",
      [authToken],
    );
    const user = userRow?.[0];

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const directSubordinatesData = await getSubordinatesListDataByCode(
      user.code,
    );

    let directSubordinatesCount = directSubordinatesData.subordinatesCount;
    let directSubordinatesRechargeAmount =
      directSubordinatesData.subordinatesRechargeAmount;

    const [claimedRewardsRow] = await connection.execute(
      "SELECT * FROM `claimed_rewards` WHERE `type` = ? AND `phone` = ?",
      [REWARD_TYPES_MAP.INVITATION_BONUS, user.phone],
    );

    const invitationBonusData = InvitationBonusList.map((item) => {
      const currentNumberOfDeposits =
        directSubordinatesData.subordinatesList.filter(
          (subordinate) =>
            subordinate.rechargeAmount >= item.amountOfRechargePerPerson,
        ).length;
      return {
        id: item.id,
        isFinished:
          directSubordinatesCount >= item.numberOfInvitedMembers &&
          currentNumberOfDeposits >= item.numberOfDeposits,
        isClaimed: claimedRewardsRow.some(
          (claimedReward) => claimedReward.reward_id === item.id,
        ),
        required: {
          numberOfInvitedMembers: item.numberOfInvitedMembers,
          numberOfDeposits: item.numberOfDeposits,
          amountOfRechargePerPerson: item.amountOfRechargePerPerson,
        },
        current: {
          numberOfInvitedMembers: Math.min(
            directSubordinatesCount,
            item.numberOfInvitedMembers,
          ),
          numberOfDeposits: Math.min(
            currentNumberOfDeposits,
            item.numberOfDeposits,
          ),
          amountOfRechargePerPerson: Math.min(
            directSubordinatesRechargeAmount,
            item.amountOfRechargePerPerson,
          ),
        },
        bonusAmount: item.bonusAmount,
      };
    });

    const claimableBonusData = invitationBonusData.filter(
      (item) => item.isFinished && item.id === invitationBonusId,
    );

    if (claimableBonusData.length === 0) {
      return res.status(400).json({
        status: false,
        message: "You does not meet the requirements to claim this reword!",
      });
    }

    const claimedRewardsData = invitationBonusData.find(
      (item) => item.isClaimed && item.id === invitationBonusId,
    );

    if (claimedRewardsData?.id === invitationBonusId) {
      return res.status(400).json({
        status: false,
        message: "Bonus already claimed",
      });
    }

    const claimedBonusData = claimableBonusData?.find(
      (item) => item.id === invitationBonusId,
    );

    const time = moment().valueOf();

    await connection.execute(
      "UPDATE `users` SET `money` = `money` + ?, `total_money` = `total_money` + ? WHERE `phone` = ?",
      [claimedBonusData.bonusAmount, claimedBonusData.bonusAmount, user.phone],
    );

    await connection.execute(
      "INSERT INTO `claimed_rewards` (`reward_id`, `type`, `phone`, `amount`, `status`, `time`) VALUES (?, ?, ?, ?, ?, ?)",
      [
        invitationBonusId,
        REWARD_TYPES_MAP.INVITATION_BONUS,
        user.phone,
        claimedBonusData.bonusAmount,
        REWARD_STATUS_TYPES_MAP.SUCCESS,
        time,
      ],
    );

    return res.status(200).json({
      status: true,
      message: "Successfully claimed invitation bonus",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const getInvitedMembers = async (req, res) => {
  try {
    const authToken = req.cookies.auth;
    const [userRow] = await connection.execute(
      "SELECT `code`, `invite`, `phone` FROM `users` WHERE `token` = ? AND `veri` = 1",
      [authToken],
    );
    const user = userRow?.[0];

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    let [invitedMembers] = await connection.execute(
      "SELECT `phone`, `time`, `id_user`, `id_user`, `name_user` FROM `users` WHERE `invite` = ?",
      [user.code],
    );

    for (let index = 0; index < invitedMembers.length; index++) {
      const invitedMember = invitedMembers[index];

      const [[row_2]] = await connection.execute(
        "SELECT SUM(money) AS `sum` FROM `recharge` WHERE `phone` = ? AND `status` = ?",
        [invitedMember.phone, PaymentStatusMap.SUCCESS],
      );
      const rechargeAmount = row_2.sum;

      invitedMembers[index]["rechargeAmount"] = rechargeAmount;
    }

    return res.status(200).json({
      data: invitedMembers.map((invitedMember) => ({
        uid: invitedMember.id_user,
        phone: invitedMember.phone,
        create_time: moment(invitedMember.time, "x").format(
          "YYYY-MM-DD HH:mm:ss",
        ),
        amount: invitedMember.rechargeAmount,
        username: invitedMember.name_user,
      })),
      status: true,
      message: "Successfully fetched invited members",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const DailyRechargeBonusList = [
  {
    id: 1,
    rechargeAmount: 1000,
    bonusAmount: 38,
  },
  {
    id: 2,
    rechargeAmount: 5000,
    bonusAmount: 128,
  },
  {
    id: 3,
    rechargeAmount: 10000,
    bonusAmount: 208,
  },
  {
    id: 4,
    rechargeAmount: 50000,
    bonusAmount: 508,
  },
  {
    id: 5,
    rechargeAmount: 100000,
    bonusAmount: 888,
  },
];

const getDailyRechargeReword = async (req, res) => {
  try {
    const authToken = req.cookies.auth;
    const [userRow] = await connection.execute(
      "SELECT `phone` FROM `users` WHERE `token` = ? AND `veri` = 1",
      [authToken],
    );
    const user = userRow?.[0];

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const today = moment().startOf("day").valueOf();
    const [todayRechargeRow] = await connection.execute(
      "SELECT SUM(money) AS `sum` FROM `recharge` WHERE `phone` = ? AND `status` = ? AND `time` >= ?",
      [user.phone, PaymentStatusMap.SUCCESS, today],
    );
    const todayRechargeAmount = todayRechargeRow[0].sum || 0;

    const [claimedRewardsRow] = await connection.execute(
      "SELECT * FROM `claimed_rewards` WHERE `type` = ? AND `phone` = ? AND `time` >= ?",
      [REWARD_TYPES_MAP.DAILY_RECHARGE_BONUS, user.phone, today],
    );

    console.log("claimedRewardsRow", [
      REWARD_TYPES_MAP.DAILY_RECHARGE_BONUS,
      user.phone,
      today,
    ]);
    console.log("claimedRewardsRow", claimedRewardsRow);

    const dailyRechargeRewordList = DailyRechargeBonusList.map((item) => {
      console.log("item", todayRechargeAmount);
      console.log("item", item.rechargeAmount);
      console.log(
        "item",
        claimedRewardsRow.some(
          (claimedReward) => claimedReward.reward_id === item.id,
        ),
      );
      return {
        id: item.id,
        rechargeAmount: Math.min(todayRechargeAmount, item.rechargeAmount),
        requiredRechargeAmount: item.rechargeAmount,
        bonusAmount: item.bonusAmount,
        isFinished: todayRechargeAmount >= item.rechargeAmount,
        isClaimed: claimedRewardsRow.some(
          (claimedReward) => claimedReward.reward_id === item.id,
        ),
      };
    });

    return res.status(200).json({
      data: dailyRechargeRewordList,
      status: true,
      message: "Successfully fetched daily recharge bonus data",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const claimDailyRechargeReword = async (req, res) => {
  try {
    const authToken = req.cookies.auth;
    const dailyRechargeRewordId = req.body.id;
    const [userRow] = await connection.execute(
      "SELECT `phone` FROM `users` WHERE `token` = ? AND `veri` = 1",
      [authToken],
    );
    const user = userRow?.[0];

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const today = moment().startOf("day").valueOf();
    const [todayRechargeRow] = await connection.execute(
      "SELECT SUM(money) AS `sum` FROM `recharge` WHERE `phone` = ? AND `status` = ? AND `time` >= ?",
      [user.phone, PaymentStatusMap.SUCCESS, today],
    );
    const todayRechargeAmount = todayRechargeRow[0].sum || 0;

    const [claimedRewardsRow] = await connection.execute(
      "SELECT * FROM `claimed_rewards` WHERE `type` = ? AND `phone` = ? AND `time` >= ?",
      [REWARD_TYPES_MAP.DAILY_RECHARGE_BONUS, user.phone, today],
    );

    const dailyRechargeRewordList = DailyRechargeBonusList.map((item) => {
      return {
        id: item.id,
        rechargeAmount: todayRechargeAmount,
        requiredRechargeAmount: item.rechargeAmount,
        bonusAmount: item.bonusAmount,
        isFinished: todayRechargeAmount >= item.rechargeAmount,
        isClaimed: claimedRewardsRow.some(
          (claimedReward) => claimedReward.reward_id === item.rechargeAmount,
        ),
      };
    });

    const claimableBonusData = dailyRechargeRewordList.filter(
      (item) =>
        item.isFinished && item.rechargeAmount >= item.requiredRechargeAmount,
    );

    if (claimableBonusData.length === 0) {
      return res.status(400).json({
        status: false,
        message: "You does not meet the requirements to claim this reword!",
      });
    }

    const claimedBonusData = claimableBonusData?.find(
      (item) => item.id === dailyRechargeRewordId,
    );

    const [bonusList] = await connection.query(
      "SELECT * FROM `claimed_rewards` WHERE `type` = ? AND `phone` = ? AND `time` >= ? AND `reward_id` = ?",
      [
        REWARD_TYPES_MAP.DAILY_RECHARGE_BONUS,
        user.phone,
        today,
        claimedBonusData.id,
      ],
    );

    if (bonusList.length > 0) {
      return res.status(400).json({
        status: false,
        message: "Bonus already claimed",
      });
    }

    const time = moment().valueOf();

    await connection.execute(
      "UPDATE `users` SET `money` = `money` + ?, `total_money` = `total_money` + ? WHERE `phone` = ?",
      [claimedBonusData.bonusAmount, claimedBonusData.bonusAmount, user.phone],
    );

    await connection.execute(
      "INSERT INTO `claimed_rewards` (`reward_id`, `type`, `phone`, `amount`, `status`, `time`) VALUES (?, ?, ?, ?, ?, ?)",
      [
        claimedBonusData.id,
        REWARD_TYPES_MAP.DAILY_RECHARGE_BONUS,
        user.phone,
        claimedBonusData.bonusAmount,
        REWARD_STATUS_TYPES_MAP.SUCCESS,
        time,
      ],
    );

    return res.status(200).json({
      status: true,
      message: "Successfully claimed daily recharge bonus",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const dailyRechargeRewordRecord = async (req, res) => {
  try {
    const authToken = req.cookies.auth;
    const [userRow] = await connection.execute(
      "SELECT `phone` FROM `users` WHERE `token` = ? AND `veri` = 1",
      [authToken],
    );
    const user = userRow?.[0];

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const [claimedRewardsRow] = await connection.execute(
      "SELECT * FROM `claimed_rewards` WHERE `type` = ? AND `phone` = ?",
      [REWARD_TYPES_MAP.DAILY_RECHARGE_BONUS, user.phone],
    );

    const claimedRewardsData = claimedRewardsRow.map((claimedReward) => {
      const currentDailyRechargeReword = DailyRechargeBonusList.find(
        (item) => item?.id === claimedReward?.reward_id,
      );
      return {
        id: claimedReward.reward_id,
        requireRechargeAmount: currentDailyRechargeReword?.rechargeAmount || 0,
        amount: claimedReward.amount,
        status: claimedReward.status,
        time: moment.unix(claimedReward.time).format("YYYY-MM-DD HH:mm:ss"),
      };
    });
    console.log(user);
    return res.status(200).json({
      data: claimedRewardsData,
      status: true,
      message: "Successfully fetched daily recharge bonus record",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const firstRechargeBonusList = [
  {
    id: 1,
    rechargeAmount: 100000,
    bonusAmount: 5888,
    agentBonus: 9999,
  },
  {
    id: 2,
    rechargeAmount: 50000,
    bonusAmount: 2888,
    agentBonus: 6888,
  },
  {
    id: 3,
    rechargeAmount: 10000,
    bonusAmount: 488,
    agentBonus: 1288,
  },
  {
    id: 4,
    rechargeAmount: 5000,
    bonusAmount: 288,
    agentBonus: 768,
  },
  {
    id: 5,
    rechargeAmount: 1000,
    bonusAmount: 188,
    agentBonus: 208,
  },
  {
    id: 6,
    rechargeAmount: 500,
    bonusAmount: 108,
    agentBonus: 128,
  },
  {
    id: 7,
    rechargeAmount: 200,
    bonusAmount: 48,
    agentBonus: 58,
  },
  {
    id: 8,
    rechargeAmount: 100,
    bonusAmount: 28,
    agentBonus: 28,
  },
];

const getFirstRechargeRewords = async (req, res) => {
  try {
    const authToken = req.cookies.auth;
    const [userRow] = await connection.execute(
      "SELECT `phone` FROM `users` WHERE `token` = ? AND `veri` = 1",
      [authToken],
    );
    const user = userRow?.[0];

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const [claimedRewardsRow] = await connection.execute(
      "SELECT * FROM `claimed_rewards` WHERE `type` = ? AND `phone` = ?",
      [REWARD_TYPES_MAP.FIRST_RECHARGE_BONUS, user.phone],
    );
    const [rechargeRow] = await connection.execute(
      "SELECT * FROM `recharge` WHERE `phone` = ? AND `status` = ? ORDER BY id DESC LIMIT 1 ",
      [user.phone, PaymentStatusMap.SUCCESS],
    );
    const firstRecharge = rechargeRow?.[0];

    const firstRechargeRewordList = firstRechargeBonusList.map(
      (item, index) => {
        const currentRechargeAmount = firstRecharge?.money || 0;
        return {
          id: item.id,
          currentRechargeAmount: Math.min(
            item.rechargeAmount,
            currentRechargeAmount,
          ),
          requiredRechargeAmount: item.rechargeAmount,
          bonusAmount: item.bonusAmount,
          agentBonus: item.agentBonus,
          isFinished:
            index === 0
              ? currentRechargeAmount >= item.rechargeAmount
              : currentRechargeAmount >= item.rechargeAmount &&
                firstRechargeBonusList[index - 1]?.rechargeAmount >
                  currentRechargeAmount,
          isClaimed: claimedRewardsRow.some(
            (claimedReward) => claimedReward.reward_id === item.id,
          ),
        };
      },
    );

    return res.status(200).json({
      data: firstRechargeRewordList,
      isExpired: firstRechargeRewordList.some(
        (item) => item.isFinished && item.isClaimed,
      ),
      status: true,
      message: "Successfully fetched first recharge bonus data",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const claimFirstRechargeReword = async (req, res) => {
  try {
    const authToken = req.cookies.auth;
    const firstRechargeRewordId = req.body.id;
    const [userRow] = await connection.execute(
      "SELECT * FROM `users` WHERE `token` = ? AND `veri` = 1",
      [authToken],
    );
    const user = userRow?.[0];

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const [claimedRewardsRow] = await connection.execute(
      "SELECT * FROM `claimed_rewards` WHERE `type` = ? AND `phone` = ?",
      [REWARD_TYPES_MAP.FIRST_RECHARGE_BONUS, user.phone],
    );
    const [rechargeRow] = await connection.execute(
      "SELECT * FROM `recharge` WHERE `phone` = ? AND `status` = ? ORDER BY id DESC LIMIT 1 ",
      [user.phone, PaymentStatusMap.SUCCESS],
    );
    const firstRecharge = rechargeRow?.[0];

    const firstRechargeRewordList = firstRechargeBonusList.map(
      (item, index) => {
        const currentRechargeAmount = firstRecharge?.money || 0;
        return {
          id: item.id,
          currentRechargeAmount: Math.min(
            item.rechargeAmount,
            currentRechargeAmount,
          ),
          requiredRechargeAmount: item.rechargeAmount,
          bonusAmount: item.bonusAmount,
          agentBonus: item.agentBonus,
          isFinished:
            index === 0
              ? currentRechargeAmount >= item.rechargeAmount
              : currentRechargeAmount >= item.rechargeAmount &&
                firstRechargeBonusList[index - 1]?.rechargeAmount >
                  currentRechargeAmount,
          isClaimed: claimedRewardsRow.some(
            (claimedReward) => claimedReward.reward_id === item.id,
          ),
        };
      },
    );

    const claimableBonusData = firstRechargeRewordList.filter(
      (item) => item.isFinished,
    );

    if (claimableBonusData.length === 0) {
      return res.status(400).json({
        status: false,
        message: "You does not meet the requirements to claim this reword!",
      });
    }

    const isExpired = firstRechargeRewordList.some(
      (item) => item.isFinished && item.isClaimed,
    );

    if (isExpired) {
      return res.status(400).json({
        status: false,
        message: "Bonus already claimed",
      });
    }

    const claimedBonusData = claimableBonusData?.find(
      (item) => item.id === firstRechargeRewordId,
    );

    const time = moment().valueOf();

    await connection.execute(
      "UPDATE `users` SET `money` = `money` + ?, `total_money` = `total_money` + ? WHERE `phone` = ?",
      [claimedBonusData.bonusAmount, claimedBonusData.bonusAmount, user.phone],
    );

    await connection.execute(
      "INSERT INTO `claimed_rewards` (`reward_id`, `type`, `phone`, `amount`, `status`, `time`) VALUES (?, ?, ?, ?, ?, ?)",
      [
        claimedBonusData.id,
        REWARD_TYPES_MAP.FIRST_RECHARGE_BONUS,
        user.phone,
        claimedBonusData.bonusAmount,
        REWARD_STATUS_TYPES_MAP.SUCCESS,
        time,
      ],
    );
    return res.status(200).json({
      status: true,
      message: "Successfully claimed first recharge bonus",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const AttendanceBonusList = [
  {
    id: 1,
    days: 1,
    bonusAmount: 5,
    requiredAmount: 200,
  },
  {
    id: 2,
    days: 2,
    bonusAmount: 18,
    requiredAmount: 1000,
  },
  {
    id: 3,
    days: 3,
    bonusAmount: 100,
    requiredAmount: 3000,
  },
  {
    id: 4,
    days: 4,
    bonusAmount: 200,
    requiredAmount: 10000,
  },
  {
    id: 5,
    days: 5,
    bonusAmount: 400,
    requiredAmount: 20000,
  },
  {
    id: 6,
    days: 6,
    bonusAmount: 3000,
    requiredAmount: 100000,
  },
  {
    id: 7,
    days: 7,
    bonusAmount: 7000,
    requiredAmount: 200000,
  },
];

const getAttendanceBonus = async (req, res) => {
  try {
    const authToken = req.cookies.auth;
    const [userRow] = await connection.execute(
      "SELECT `phone` FROM `users` WHERE `token` = ? AND `veri` = 1",
      [authToken],
    );
    const user = userRow?.[0];

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const [claimedRewardsRow] = await connection.execute(
      "SELECT * FROM `claimed_rewards` WHERE `type` = ? AND `phone` = ?",
      [REWARD_TYPES_MAP.ATTENDANCE_BONUS, user.phone],
    );

    let attendanceBonusId = 0;

    if (claimedRewardsRow.length === 0) {
      attendanceBonusId = 0;
    } else {
      const lastClaimedReword =
        claimedRewardsRow?.[claimedRewardsRow.length - 1];
      const lastClaimedRewordTime = lastClaimedReword?.time || 0;

      const lastClaimedRewordDate = moment
        .unix(lastClaimedRewordTime)
        .startOf("day");
      const today = moment().startOf("day");

      if (today.diff(lastClaimedRewordDate, "days") < 1) {
        attendanceBonusId = lastClaimedReword.reward_id;
      } else if (today.diff(lastClaimedRewordDate, "days") >= 2) {
        attendanceBonusId = 0;
      } else {
        attendanceBonusId = lastClaimedReword.reward_id;
      }
    }

    const claimedBonusData = AttendanceBonusList.find(
      (item) => item.id === attendanceBonusId,
    );

    return res.status(200).json({
      status: true,
      data: {
        id: claimedBonusData?.id || 0,
        days: claimedBonusData?.days || 0,
        bonusAmount: claimedBonusData?.bonusAmount || 0,
      },
      message: "Successfully fetched attendance bonus data",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: true,
      message: error.message,
    });
  }
};

const claimAttendanceBonus = async (req, res) => {
  try {
    const authToken = req.cookies.auth;
    const [userRow] = await connection.execute(
      "SELECT `phone` FROM `users` WHERE `token` = ? AND `veri` = 1",
      [authToken],
    );
    const user = userRow?.[0];

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const [claimedRewardsRow] = await connection.execute(
      "SELECT * FROM `claimed_rewards` WHERE `type` = ? AND `phone` = ?",
      [REWARD_TYPES_MAP.ATTENDANCE_BONUS, user.phone],
    );

    if (claimedRewardsRow.map((item) => item.reward_id).includes(7)) {
      return res.status(400).json({
        status: false,
        message: "You have already claimed the attendance bonus for 7 days",
      });
    }

    let attendanceBonusId = 0;

    if (claimedRewardsRow.length === 0) {
      attendanceBonusId = 1;
    } else {
      const lastClaimedReword =
        claimedRewardsRow?.[claimedRewardsRow.length - 1];
      const lastClaimedRewordTime = lastClaimedReword?.time || 0;

      const lastClaimedRewordDate = moment
        .unix(lastClaimedRewordTime)
        .startOf("day");
      const today = moment().startOf("day");

      if (today.diff(lastClaimedRewordDate, "days") < 1) {
        return res.status(400).json({
          status: false,
          message: "You have already claimed the attendance bonus today",
        });
      } else if (today.diff(lastClaimedRewordDate, "days") >= 2) {
        attendanceBonusId = 1;
      } else {
        attendanceBonusId = lastClaimedReword.reward_id + 1;
      }
    }

    const claimedBonusData = AttendanceBonusList.find(
      (item) => item.id === attendanceBonusId,
    );

    const [rechargeTotal] = await connection.query(
      "SELECT SUM(money) AS total_recharge FROM recharge WHERE status = 1 AND phone = ?",
      [user.phone],
    );
    const totalRecharge = +rechargeTotal[0].total_recharge || 0;

    const check = totalRecharge >= claimedBonusData.requiredAmount;

    if (!check)
      return res.status(400).json({
        status: false,
        message: "Total Recharge amount doesn't met the Required Amount !",
      });

    const time = moment().valueOf();

    await connection.execute(
      "UPDATE `users` SET `money` = `money` + ?, `total_money` = `total_money` + ? WHERE `phone` = ?",
      [claimedBonusData.bonusAmount, claimedBonusData.bonusAmount, user.phone],
    );

    await connection.execute(
      "INSERT INTO `claimed_rewards` (`reward_id`, `type`, `phone`, `amount`, `status`, `time`) VALUES (?, ?, ?, ?, ?, ?)",
      [
        claimedBonusData.id,
        REWARD_TYPES_MAP.ATTENDANCE_BONUS,
        user.phone,
        claimedBonusData.bonusAmount,
        REWARD_STATUS_TYPES_MAP.SUCCESS,
        time,
      ],
    );

    return res.status(200).json({
      status: true,
      message: `Successfully claimed attendance bonus for ${getOrdinal(claimedBonusData.days)} day`,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: true,
      message: error.message,
    });
  }
};

const getAttendanceBonusRecord = async (req, res) => {
  try {
    const authToken = req.cookies.auth;
    const [userRow] = await connection.execute(
      "SELECT `phone` FROM `users` WHERE `token` = ? AND `veri` = 1",
      [authToken],
    );
    const user = userRow?.[0];

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const [claimedRewardsRow] = await connection.execute(
      "SELECT * FROM `claimed_rewards` WHERE `type` = ? AND `phone` = ?",
      [REWARD_TYPES_MAP.ATTENDANCE_BONUS, user.phone],
    );

    const claimedRewardsData = claimedRewardsRow.map((claimedReward) => {
      const currentAttendanceBonus = AttendanceBonusList.find(
        (item) => item?.id === claimedReward?.reward_id,
      );
      return {
        id: claimedReward.reward_id,
        days: currentAttendanceBonus?.days || 0,
        amount: claimedReward.amount,
        status: claimedReward.status,
        time: moment.unix(claimedReward.time).format("YYYY-MM-DD HH:mm:ss"),
      };
    });

    return res.status(200).json({
      data: claimedRewardsData,
      status: true,
      message: "Successfully fetched attendance bonus record",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: true,
      message: error.message,
    });
  }
};

const promotionController = {
  subordinatesDataAPI,
  subordinatesAPI,
  getInvitationBonus,
  claimInvitationBonus,
  getInvitedMembers,
  getDailyRechargeReword,
  claimDailyRechargeReword,
  dailyRechargeRewordRecord,
  getFirstRechargeRewords,
  claimFirstRechargeReword,
  claimAttendanceBonus,
  getAttendanceBonusRecord,
  getAttendanceBonus,
  subordinatesDataByTimeAPI,
};

export default promotionController;
