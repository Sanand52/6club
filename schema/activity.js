import "dotenv/config";
import connection from "../src/config/connectDB.js";

const createClaimedRewardTable = async () => {
  try {
    const db = await connection;

    await db.execute(`
        CREATE TABLE claimed_rewards (
            id SERIAL PRIMARY KEY NOT NULL,
            phone VARCHAR(15) NOT NULL,
            reward_id INT NOT NULL,
            type VARCHAR(20) NOT NULL,
            amount INT NOT NULL,
            status INT NOT NULL,
            time VARCHAR(30) NOT NULL
        );
      `);

    console.log("Created claimed_rewards table successfully!");
  } catch (error) {
    console.log(error);
    console.log("Failed to create claimed_rewards table!");
  }
};

createClaimedRewardTable();
