import "dotenv/config";
import connection from "../src/config/connectDB.js";
import moment from "moment";

const cleanGame = async (game) => {
  try {
    const db = await connection;

    const TwoDayAgoUnixMoment = moment().subtract(2, "days").valueOf();

    await db.execute(`DELETE FROM wingo WHERE time < '${TwoDayAgoUnixMoment}'`);
    await db.execute(`DELETE FROM 5d WHERE time < '${TwoDayAgoUnixMoment}'`);
    await db.execute(`DELETE FROM k3 WHERE time < '${TwoDayAgoUnixMoment}'`);
    await db.execute(
      `DELETE FROM trx_wingo_game WHERE time < '${TwoDayAgoUnixMoment}'`,
    );

    console.log("Cleaned game successfully!");
  } catch (error) {
    console.log(error);
    console.log("Failed to create admin table!");
  }
};
cleanGame();
