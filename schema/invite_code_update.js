import "dotenv/config";
import connection from "../src/config/connectDB.js";

let user = {
  id: 1,
  id_user: "1500936",
  phone: "6666666666",
  token: "5e278e5f08fbc22100e37ffb1c18213d",
  name_user: "Main User",
  password: "",
  plain_password: "6666666666",
  money: 6566260,
  total_money: 1807,
  bonus_money: 0,
  roses_f1: 0,
  roses_f: 0,
  roses_today: 0,
  level: 1,
  rank: 1,
  code: "842642415274",
  invite: "842642415271",
  ctv: "000000",
  veri: 1,
  otp: "673282",
  ip_address: "103.220.81.55",
  status: 1,
  today: "2023-10-04 12:00:25",
  time: "1700227388142",
  time_otp: "0",
  user_level: 3,
  avatar: "8-ea087ede.png",
};

const updateUserTable = async () => {
  try {
    const db = await connection;

    const [users] = await db.query("SELECT `id`, `id_user`, `code` FROM users");

    for (let i = 0; i < users.length; i++) {
      const id_user = users[i].id_user;
      const previousCode = users[i].code;
      const newCode = users[i].code.toString().slice(0, 5) + id_user;

      db.query(`UPDATE users SET code = ? WHERE code = ?`, [
        newCode,
        previousCode,
      ]);
      db.query(`UPDATE users SET invite = ? WHERE invite = ?`, [
        newCode,
        previousCode,
      ]);

      console.log(
        "user code and invite successfully updated!",
        users[i].id,
        id_user,
        previousCode,
        newCode,
      );
    }

    //   const id_user = user.id_user;
    //   const previousCode = user.code;
    //   const newCode = user.code.toString().slice(0, 5) + id_user;

    //   console.log(id_user);
    //   console.log(user.code.toString().slice(0, 5));
    //   console.log(previousCode);
    //   console.log(newCode);

    //   db.query(`UPDATE users SET code + ? WHERE code = ?`, [newCode, previousCode]);
    //   db.query(`UPDATE users SET invite + ? WHERE invite = ?`, [newCode, previousCode]);

    //   db.query(`UPDATE users SET money = money + ?, total_money = total_money + ? WHERE phone`);
    //   await connection.query("UPDATE users SET money = money + ?, total_money = total_money + ? WHERE `phone` = ?", [user_money, user_money, phone]);

    //   await connection.query("UPDATE users SET money = money + ?, total_money = total_money + ? WHERE `code` = ? AND `phone` = ?", [inviter_money, inviter_money, invite, inviter?.[0].phone]);

    console.log("user code and invite successfully updated!");
  } catch (error) {
    console.log(error);
    console.log("Failed to create user table!");
  }
};

updateUserTable();
