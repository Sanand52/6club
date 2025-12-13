import "dotenv/config";
import connection from "../src/config/connectDB.js";

const createAdminTable = async () => {
  try {
    const db = await connection;

    await db.execute(`
        CREATE TABLE admin (
          id int(11) NOT NULL AUTO_INCREMENT,
          wingo1 text NOT NULL,
          wingo3 text NOT NULL,
          wingo5 text NOT NULL,
          wingo10 text NOT NULL,
          k5d text NOT NULL,
          k5d3 text NOT NULL,
          k5d5 text,
          k5d10 text NOT NULL,
          k3d text NOT NULL,
          k3d3 text NOT NULL,
          k3d5 text NOT NULL,
          k3d10 text NOT NULL,
          win_rate int(11) NOT NULL DEFAULT 0,
          telegram varchar(100) NOT NULL DEFAULT '0',
          cskh varchar(100) NOT NULL DEFAULT '0',
          PRIMARY KEY (id)
        )`);

    console.log("Created admin table successfully!");
  } catch (error) {
    console.log(error);
    console.log("Failed to create admin table!");
  }
};

createAdminTable();
