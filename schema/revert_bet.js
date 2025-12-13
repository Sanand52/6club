import "dotenv/config";
import connection from "../src/config/connectDB.js";
import { yesterdayTime } from "../src/helpers/games.js";

const revertBetsByTime = async (startTime) => {
  try {
    const db = await connection;

    const [users] = await db.query(`SELECT * FROM users`);

    for (let i = 0; i < users.length; i++) {
      const user = users[i];

      const [gameWingo] = await connection.query(
        "SELECT SUM(money) as loss FROM minutes_1 WHERE phone = ? AND get = 0 AND time >= ?",
        [user.phone, startTime],
      );
      const gameWingoLossAmount = gameWingo[0].loss || 0;

      const [gameK3] = await connection.query(
        "SELECT SUM(money) as loss FROM result_k3 WHERE phone = ? AND get = 0 AND time >= ?",
        [user.phone, startTime],
      );
      const gameK3LossAmount = gameK3[0].loss || 0;

      const [game5D] = await connection.query(
        "SELECT SUM(money) as loss FROM result_5d WHERE phone = ? AND get = 0 AND time >= ?",
        [user.phone, startTime],
      );
      const game5DLossAmount = game5D[0].loss || 0;

      const [gameTrx] = await connection.query(
        "SELECT SUM(money) as loss FROM trx_wingo_bets WHERE phone = ? AND get = 0 AND time >= ?",
        [user.phone, startTime],
      );
      const gameTrxLossAmount = gameTrx[0].loss || 0;

      const [gameWingo2] = await connection.query(
        "SELECT SUM(get) as loss FROM minutes_1 WHERE phone = ? AND get != 0 AND time >= ?",
        [user.phone, startTime],
      );
      const gameWingoWinAmount = gameWingo2[0].loss || 0;

      const [gameK32] = await connection.query(
        "SELECT SUM(get) as loss FROM result_k3 WHERE phone = ? AND get != 0 AND time >= ?",
        [user.phone, startTime],
      );
      const gameK3WinAmount = gameK32[0].loss || 0;

      const [game5D2] = await connection.query(
        "SELECT SUM(get) as loss FROM result_5d WHERE phone = ? AND get != 0 AND time >= ?",
        [user.phone, startTime],
      );
      const game5DWinAmount = game5D2[0].loss || 0;

      const [gameTrx2] = await connection.query(
        "SELECT SUM(get) as loss FROM trx_wingo_bets WHERE phone = ? AND get != 0 AND time >= ?",
        [user.phone, startTime],
      );
      const gameTrxWinAmount = gameTrx2[0].loss || 0;

      const [commissions] = await connection.query(
        "SELECT SUM(money) as total FROM commissions WHERE phone = ? AND time >= ?",
        [user.phone, startTime],
      );
      const commissionAmount = parseFloat(commissions[0].total) || 0;

      const [rechargeQ] = await connection.query(
        "SELECT SUM(money) as total FROM recharge WHERE phone = ? AND time >= ? AND status = 1",
        [user.phone, startTime],
      );
      const rechargeAmount = parseFloat(rechargeQ[0].total) || 0;

      const total_loss =
        parseInt(gameWingoLossAmount) +
        parseInt(gameK3LossAmount) +
        parseInt(game5DLossAmount) +
        parseInt(gameTrxLossAmount);
      const total_win =
        parseInt(gameWingoWinAmount) +
        parseInt(gameK3WinAmount) +
        parseInt(game5DWinAmount) +
        parseInt(gameTrxWinAmount);

      console.log("Currently At :", i);
      console.log("total_loss", total_loss);
      console.log("total_win", total_win);
      console.log("commissionAmount", commissionAmount);
      console.log("Before balance", user.money);

      const total = total_win - total_loss;
      console.log("total", total);

      let balance = parseFloat(user.money) - total;
      console.log("balance", balance);
      balance = balance - commissionAmount;

      console.log(rechargeAmount);
      if (balance < 0) {
        balance = rechargeAmount;
      }

      console.log(i);
      console.log(balance);

      // console.log("balance", balance);

      connection
        .query("UPDATE users SET money = ? WHERE phone = ?", [
          balance,
          user.phone,
        ])
        .then();
      connection
        .query("DELETE FROM minutes_1 WHERE phone = ? AND time >= ?", [
          user.phone,
          startTime,
        ])
        .then();
      connection
        .query("DELETE FROM result_k3 WHERE phone = ? AND time >= ?", [
          user.phone,
          startTime,
        ])
        .then();
      connection
        .query("DELETE FROM result_5d WHERE phone = ? AND time >= ?", [
          user.phone,
          startTime,
        ])
        .then();
      connection
        .query("DELETE FROM trx_wingo_bets WHERE phone = ? AND time >= ?", [
          user.phone,
          startTime,
        ])
        .then();
      connection
        .query("DELETE FROM trx_wingo_bets WHERE phone = ? AND time >= ?", [
          user.phone,
          startTime,
        ])
        .then();
      connection
        .query("DELETE FROM commissions WHERE phone = ? AND time >= ?", [
          user.phone,
          startTime,
        ])
        .then();

      //  console.log("gameWingoLossAmount", gameWingoLossAmount);
      //  console.log("gameK3LossAmount", gameK3LossAmount);
      //  console.log("game5DLossAmount", game5DLossAmount);
      //  console.log("gameTrxLossAmount", gameTrxLossAmount);
      //  console.log("gameWingoWinAmount", gameWingoWinAmount);
      //  console.log("gameK3WinAmount", gameK3WinAmount);
      //  console.log("game5DWinAmount", game5DWinAmount);
      //  console.log("gameTrxWinAmount", gameTrxWinAmount);
    }

    console.log("Revert Bets successfully!");
  } catch (error) {
    console.log(error);
    console.log("Failed to revert Bets!");
  }
};

export const correctTimeStamps = async () => {
  try {
    await connection.query(`
       UPDATE users u
       JOIN (
         SELECT phone, UNIX_TIMESTAMP(today) * 1000 AS time
         FROM users
       ) t ON u.phone = t.phone
       SET u.time = t.time
     `);
    console.log("Timestamps corrected successfully for all users.");
  } catch (error) {
    console.error("Error correcting timestamps:", error);
  }
};

const deleteCommissions = async () => {
  try {
    const timeNow = new Date();
    const startOfDay = new Date(
      timeNow.getFullYear(),
      timeNow.getMonth(),
      timeNow.getDate(),
    ).getTime();
    console.log(startOfDay);
    const [result] = await connection.query(
      "DELETE FROM commissions WHERE time > ?",
      [startOfDay],
    );
    console.log("Commissions deleted successfully.");
  } catch (error) {
    console.error("Error deleting commissions:", error);
  }
};

const updateCommissionsTime = async () => {
  try {
    const { startOfYesterdayTimestamp, endOfYesterdayTimestamp } =
      yesterdayTime();
    const [result] = await connection.query(
      "UPDATE commissions SET time = ? WHERE time > ?",
      [1719599399999, startOfYesterdayTimestamp],
    );
    console.log("Commissions updated successfully.");
  } catch (error) {
    console.error("Error updating commissions:", error);
  }
};

// revertBetsByTime(1718562600000);

// correctTimeStamps();

// deleteCommissions();

// updateCommissionsTime();
const updateTimestamps = async () => {
  try {
    const db = await connection;
    // SQL query to update only UNIX timestamps (assumed to be less than a certain threshold to differentiate from millisecond timestamps)
    // This threshold is set to the UNIX timestamp for 01/01/2001 (978307200), assuming any value above this is already in milliseconds
    const query = `
      UPDATE claimed_rewards
      SET time = time * 1000
      WHERE time < 1739608240
    `;

    // Execute the query
    const [result] = await db.query(query);

    // Log the result
    console.log("Timestamps updated successfully:", result);
  } catch (error) {
    // Log any errors
    console.error("Error updating timestamps:", error);
  }
};
updateTimestamps();
