import "dotenv/config";
import connection from "../src/config/connectDB.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const userList = [];

const revertClaimedDailyBonusByTime = async () => {
  try {
    const db = await connection;

    const [withdraws] = await db.query(
      `SELECT * FROM withdraw WHERE status = 0 AND money <= 2000`,
    );

    for (let i = 0; i < withdraws.length; i++) {
      console.log("i", i);
      const withdraw = withdraws[i];

      const [rechargeTotalRow] = await connection.query(
        `SELECT SUM(money) AS total FROM recharge WHERE phone = ? AND status = 1`,
        [withdraw.phone],
      );

      const rechargeTotal = Number(rechargeTotalRow?.[0]?.total || 0);

      if (rechargeTotal <= 0) {
        await connection.query(`UPDATE withdraw SET status = 2 WHERE id = ?`, [
          withdraw.id,
        ]);

        await connection.query(
          `UPDATE users SET money = money + ? WHERE phone = ?`,
          [withdraw.money, withdraw.phone],
        );

        userList.push({
          rechargeAmount: rechargeTotal,
          phone: withdraw.phone,
          money: withdraw.money,
          isNoRecharge: true,
          isSuccess: false,
        });

        fs.writeFile(
          path.join(__dirname, "WITHDRAW_LIST.json"),
          JSON.stringify(userList),
          (err) => {
            if (err) {
              console.log("Failed to save userList in JSON:", err);
            } else {
              console.log("userList saved in JSON successfully!");
            }
          },
        );

        continue;
      }

      try {
        const response = await axios({
          method: "post",
          url: "https://api.cpmall.co.in/api/payout/create",
          data: {
            amount: withdraw.money,
            accountName: withdraw.name_user,
            accountNumber: withdraw.stk,
            ifscCode: withdraw.ifsc,
            remark: "AUTO WITHDRAWAL",
          },
          headers: {
            authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImJpZ19tdW1iYWlfd2luIiwiY3JlYXRlZF9hdCI6IjIwMjQtMDYtMTdUMTE6MjM6MDQuMDAwWiIsInN0YXR1cyI6MX0sInRpbWVOb3ciOjE3MTk3NzAxMTkyNzYsImlhdCI6MTcxOTc3MDExOSwiZXhwIjoxNzE5ODU2NTE5fQ.A7gvp6be5-wo70L1tVXmDviZ1HMEw2Ds587eDlNKZU4",
          },
        });

        userList.push({
          rechargeAmount: rechargeTotal,
          phone: withdraw.phone,
          money: withdraw.money,
          isNoRecharge: false,
          isSuccess: true,
          success: response?.data,
        });

        console.log("response", response.data);

        await connection.query(`UPDATE withdraw SET status = 1 WHERE id = ?`, [
          withdraw.id,
        ]);
      } catch (error) {
        userList.push({
          rechargeAmount: rechargeTotal,
          phone: withdraw.phone,
          money: withdraw.money,
          isNoRecharge: false,
          isSuccess: false,
          error: error?.response?.data,
        });
        console.log("Failed to create payout:", error);
      }

      fs.writeFile(
        path.join(__dirname, "WITHDRAW_LIST.json"),
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
    console.log("Revert Bets successfully!");
  } catch (error) {
    console.log(error);
    console.log("Failed to revert Bets!");
  }
};

revertClaimedDailyBonusByTime();
