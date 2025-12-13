import "dotenv/config";
import connection from "../src/config/connectDB.js";

const createTrxHashGameTable = async () => {
  try {
    const db = await connection;

    await db.execute(`
        CREATE TABLE trx_wingo_game (
            id SERIAL PRIMARY KEY NOT NULL,
            period VARCHAR(255) NOT NULL,
            result INT NOT NULL,
            game VARCHAR(20) NOT NULL,
            status INT NOT NULL,
            block_id INT NOT NULL,
            block_time VARCHAR(30) NOT NULL,
            hash TEXT NOT NULL,
            time VARCHAR(30) NOT NULL
        );
    `);

    console.log("Created trx_wingo_game table successfully!");
  } catch (error) {
    console.log("Failed to create trx_wingo_game table!");
    console.log(error);
  }
};
createTrxHashGameTable();

const createTrxHashBetsTable = async () => {
  try {
    const db = await connection;

    await db.execute(`
        CREATE TABLE trx_wingo_bets (
            id SERIAL PRIMARY KEY  NOT NULL,
            id_product VARCHAR(100)  NOT NULL,
            phone VARCHAR(20)  NOT NULL,
            code VARCHAR(30)  NOT NULL,
            invite VARCHAR(30)  NOT NULL,
            stage VARCHAR(255)  NOT NULL,
            result INT  NOT NULL,
            more INT  NOT NULL,
            level INT  NOT NULL,
            money INT  NOT NULL,
            amount INT  NOT NULL,
            fee INT  NOT NULL,
            get INT  NOT NULL,
            game VARCHAR(50)  NOT NULL,
            bet VARCHAR(10)  NOT NULL,
            status INT  NOT NULL,
            today VARCHAR(50)  NOT NULL,
            time VARCHAR(30)  NOT NULL
        );
    `);

    console.log("Created trx_wingo_bets table successfully!");
  } catch (error) {
    console.log("Failed to create trx_wingo_bets table!");
    console.log(error);
  }
};
createTrxHashBetsTable();
