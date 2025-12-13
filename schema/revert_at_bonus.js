import "dotenv/config";
import connection from "../src/config/connectDB.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const userList = [];

const fixBalanceByUser = async (phone, money) => {
  await connection.query("UPDATE users SET money = ? WHERE phone = ?", [
    money,
    phone,
  ]);
};

const fix = async () => {
  const userListData = fs.readFileSync(
    path.join(__dirname, "ATTENDANCE_BONUS_USER_LIST.json"),
  );

  const ATTENDANCE_BONUS_USER_LIST = JSON.parse(userListData);

  //   console.log("ATTENDANCE_BONUS_USER_LIST", ATTENDANCE_BONUS_USER_LIST.length);

  for (let index = 0; index < ATTENDANCE_BONUS_USER_LIST.length; index++) {
    const user = ATTENDANCE_BONUS_USER_LIST[index];
    console.log("index", index);
    console.log("user.phone", user.phone);
    console.log(user.rechargeTotal);
    console.log(user.money);

    if (user.sum >= 25) await fixBalanceByUser(user.phone, user.money);
  }
};

fix();
