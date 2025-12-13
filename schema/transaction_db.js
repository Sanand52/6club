import "dotenv/config";
import connection from "../src/config/connectDB.js";

const TRANSACTION_TYPES = {
  DEPOSIT: 1,
  WITHDRAW: 2,
  TRANSFER: 3,
  REWARD: 4,
};

const createTransactionsTable = async () => {
  try {
    const db = await connection;

    await db.execute(`
        CREATE TABLE transactions (
            id SERIAL PRIMARY KEY NOT NULL,
            phone VARCHAR(15) NOT NULL,
            amount INT NOT NULL,
            transactionTypeId VARCHAR(80) NOT NULL,
            transferTypeId VARCHAR(80) NOT NULL,
            details VARCHAR(256) NOT NULL,
            status INT NOT NULL,
            time VARCHAR(30) NOT NULL
        );
      `);

    console.log("Created transactions table successfully!");
  } catch (error) {
    console.log(error);
    console.log("Failed to create transactions table!");
  }
};

createTransactionsTable();
