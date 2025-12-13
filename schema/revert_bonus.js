import "dotenv/config";
import connection from "../src/config/connectDB.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const userList = [];

const revertClaimedDailyBonusByTime = async () => {
  try {
    const db = await connection;

    const [users] = await db.query(`SELECT phone FROM users`);

    for (let i = 0; i < users.length; i++) {
      const user = users[i];

      const [claimedDailyBonus1] = await connection.query(
        "SELECT COUNT(*) AS count FROM claimed_rewards WHERE phone = ? AND type = 'DAILY RECHARGE BONUS'",
        [user.phone],
      );

      const count = Number(claimedDailyBonus1[0].count || 0);

      if (count > 2) {
        const [claimedDailyBonus2] = await connection.query(
          "SELECT SUM(amount) AS sum FROM claimed_rewards WHERE phone = ? AND type = 'DAILY RECHARGE BONUS'",
          [user.phone],
        );

        const sum = Number(claimedDailyBonus2[0].sum || 0);

        console.log("user.phone", user.phone);
        console.log("sum", sum);
        console.log("count", count);

        const one = Number((sum / count).toFixed(2));
        console.log("sum / count", one);

        // --- withdraws
        const [withdraws] = await connection.query(
          "SELECT SUM(money) AS sum FROM withdraw WHERE phone = ? AND status = 0",
          [user.phone],
        );

        await connection.query(
          "UPDATE users SET money = money + ? WHERE phone = ?",
          [withdraws[0].sum || 0, user.phone],
        );

        await connection.query(
          "DELETE FROM withdraw WHERE phone = ? AND status = 0",
          [user.phone],
        );
        // --- withdraws

        // await connection.query(
        //   "UPDATE users SET money = money - ? WHERE phone = ?",
        //   [sum, user.phone],
        // );

        const [user2] = await connection.query(
          "SELECT money FROM users WHERE phone = ?",
          [user.phone],
        );

        await connection.query(
          "DELETE FROM claimed_rewards WHERE phone = ? AND type = 'DAILY RECHARGE BONUS'",
          [user.phone],
        );
        if (user2[0].money - sum < 0) {
          await connection.query("UPDATE users SET money = ? WHERE phone = ?", [
            0,
            user.phone,
          ]);
        } else {
          await connection.query(
            "UPDATE users SET money = money - ? WHERE phone = ?",
            [sum - one, user.phone],
          );
        }
        // if (user2 > rechargeTotal + commissionTotal + giftCardTotal) {

        //   // await connection.query("DELETE FROM minutes_1 WHERE phone = ?", [
        //   //   user.phone,
        //   // ]);

        //   // await connection.query("DELETE FROM trx_wingo_bets WHERE phone = ?", [
        //   //   user.phone,
        //   // ]);

        //   // await connection.query(
        //   //   "UPDATE recharge SET remaining_bet = ? WHERE status = 1 AND phone = ? ORDER BY ID DESC LIMIT 1",
        //   //   [rechargeTotal, user.phone],
        //   // );
        // }

        userList.push({
          id: i,
          moneyB: user2[0].money,
          moneyA: user2[0].money - sum,
          // rechargeTotal: rechargeTotal,
          phone: user.phone,
          sum,
          count,
          single: one,
          withdraws: withdraws[0].sum || 0,
        });

        fs.writeFile(
          path.join(__dirname, "DAILY_BONUS_USER_LIST.json"),
          JSON.stringify(userList),
          (err) => {
            if (err) {
              console.log("Failed to save userList in JSON:", err);
            } else {
              console.log("userList saved in JSON successfully!");
            }
          },
        );
      }
    }

    console.log("Revert Bets successfully!");
  } catch (error) {
    console.log(error);
    console.log("Failed to revert Bets!");
  }
};

revertClaimedDailyBonusByTime();

// const fixBalanceByUser = async (phone) => {
//   const [rechargeTotalRow] = await connection.query(
//     "SELECT SUM(money) AS total FROM recharge WHERE phone = ? AND status = 1",
//     [phone],
//   );

//   const rechargeTotal = Number(rechargeTotalRow?.[0]?.total || 0);

//   const [commissionTotalRow] = await connection.query(
//     "SELECT SUM(money) AS total FROM commissions WHERE phone = ?",
//     [phone],
//   );

//   const commissionTotal = Number(commissionTotalRow?.[0]?.total || 0);

//   const [giftCardTotalRow] = await connection.query(
//     "SELECT SUM(money) AS total FROM redenvelopes_used WHERE phone_used = ?",
//     [phone],
//   );

//   const giftCardTotal = Number(giftCardTotalRow?.[0]?.total || 0);

//   console.log("total", rechargeTotal + commissionTotal + giftCardTotal);
//   console.log("phone", phone);
//   await connection.query("UPDATE users SET money = ? WHERE phone = ?", [
//     rechargeTotal + commissionTotal + giftCardTotal,
//     phone,
//   ]);
// };

// const fix = async () => {
//   const userListData = fs.readFileSync(
//     path.join(__dirname, "ATTENDANCE_BONUS_USER_LIST.json"),
//   );

//   const ATTENDANCE_BONUS_USER_LIST = JSON.parse(userListData);

//   console.log("ATTENDANCE_BONUS_USER_LIST", ATTENDANCE_BONUS_USER_LIST.length);

//   for (let index = 0; index < ATTENDANCE_BONUS_USER_LIST.length; index++) {
//     const user = ATTENDANCE_BONUS_USER_LIST[index];
//     console.log("index", index);
//     console.log("user.phone", user.phone);

//     if(user.sum)
//     await fixBalanceByUser(user.phone);
//   }
// };

// fix();
