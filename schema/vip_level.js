// import "dotenv/config";
// import connection from "../src/config/connectDB.js";

// const createVIPLevelTable = async () => {
//    try {
//       const db = await connection;

//       await db.execute(`
//         CREATE TABLE vip_level (
//             id SERIAL PRIMARY KEY NOT NULL,
//             period_id INT NOT NULL,
//             status INT NOT NULL,
//             time VARCHAR(30) NOT NULL
//         );
//       `);

//       console.log("Created VIPLevel table successfully!");
//    } catch (error) {
//       console.log(error);
//       console.log("Failed to create VIPLevel table!");
//    }
// };

// const createVIPLevelUserTable = async () => {
//    try {
//       const db = await connection;

//       await db.execute(`
//         CREATE TABLE vip_level_r (
//             id SERIAL PRIMARY KEY NOT NULL,
//             phone varchar(20) NOT NULL DEFAULT '0',
//             vip_level INT NOT NULL,
//             period_id INT NOT NULL,
//             status INT NOT NULL,
//             time VARCHAR(30) NOT NULL
//         );
//       `);

//       console.log("Created VIPLevelUser table successfully!");
//    } catch (error) {
//       console.log(error);
//       console.log("Failed to create VIPLevelUser table!");
//    }
// };

// createVIPLevelTable();
// createVIPLevelUserTable();
