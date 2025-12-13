import axios from "axios";
import connection from "../config/connectDB.js";

export const GAME_CATEGORIES_MAP = {
  SLOT: 1000,
  POKER: 2000,
  LOBBY: 3000,
  FISHING: 4000,
  CASINO: 5000,
};

const gameCategoriesPage = (GameCategoriesId) => async (req, res) => {
  try {
    const response = await axios({
      method: "GET",
      url: "https://api-jetx.online/api/neo_jili/game_list",
      data: {
        agentId: process.env.JILI_AGENT_ID,
        agentKey: process.env.JILI_AGENT_KEY,
        gameBaseUrl: process.env.JILI_GAME_BASE_URL,
        secretKey: process.env.BYTE_FUSION_SECRET_KEY,
      },
    });

    const slotsGame = response?.data?.gameData.find(
      (item) => item.id === GameCategoriesId,
    );

    return res.render("jili/index.ejs", {
      gameName: slotsGame.name,
      gameList: slotsGame.list,
      headerDisplay: "",
      tabAddressJili: req._parsedOriginalUrl.pathname.split("/")[2],
      tabAddressJdb: req._parsedOriginalUrl.pathname.split("/")[2],
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong!",
    });
  }
};

const gameSlotsPage = (GameCategoriesId) => async (req, res) => {
  try {
    const response = await axios({
      method: "GET",
      url: "https://api-jetx.online/api/neo_jili/game_list",
      data: {
        agentId: process.env.JILI_AGENT_ID,
        agentKey: process.env.JILI_AGENT_KEY,
        gameBaseUrl: process.env.JILI_GAME_BASE_URL,
        secretKey: process.env.BYTE_FUSION_SECRET_KEY,
      },
    });

    console.log(response?.data?.gameData);

    const slotsGame = response?.data?.gameData.find(
      (item) => item.id === GameCategoriesId,
    );

    return res.render("jili/slots.ejs", {
      // gameName: slotsGame.name,
      gameList: slotsGame.list,
      // headerDisplay: "",
      // tabAddressJili: req._parsedOriginalUrl.pathname.split("/")[2],
      // tabAddressJdb: req._parsedOriginalUrl.pathname.split("/")[2],
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong!",
    });
  }
};

const getGameLink = async (req, res) => {
  try {
    let token = req.cookies.auth;
    let gameId = req.query.game_id;

    const [rows] = await connection.execute(
      "SELECT `token`, `status` FROM `users` WHERE `token` = ? AND `veri` = 1",
      [token],
    );

    if (auth !== rows[0].token && rows[0].status !== 1) {
      return res.status(400).json({
        message: "Login is required to access this api",
        isAuthorized: false,
      });
    }

    if (!gameId) {
      return res.status(400).json({
        message: "gameID is required!",
        isAuthorized: true,
      });
    }

    console.log({
      gameId: gameId,
      agentId: process.env.JILI_AGENT_ID,
      agentKey: process.env.JILI_AGENT_KEY,
      gameBaseUrl: process.env.JILI_GAME_BASE_URL,
      token: token,
      secretKey: process.env.BYTE_FUSION_SECRET_KEY,
    });

    const response = await axios({
      method: "POST",
      url: "https://api-jetx.online/api/neo_jili/generate_link",
      data: {
        gameId: gameId,
        agentId: process.env.JILI_AGENT_ID,
        agentKey: process.env.JILI_AGENT_KEY,
        gameBaseUrl: process.env.JILI_GAME_BASE_URL,
        token: token,
        secretKey: process.env.BYTE_FUSION_SECRET_KEY,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    // return res.status(200).json({
    //    message: "Game link generated successfully!",
    //    gameLink: response?.data?.gameLink,
    //    isAuthorized: true,
    // })
    return res.redirect(response?.data?.gameLink);
  } catch (error) {
    console.log(error);
    console.log(error?.response?.data);
    return res.status(500).json({
      message: "Something went wrong!",
    });
  }
};

const gameList = async (req, res) => {
  try {
    const response = await axios({
      method: "GET",
      url: "https://api-jetx.online/api/neo_jili/game_list",
      data: {
        agentId: process.env.JILI_AGENT_ID,
        agentKey: process.env.JILI_AGENT_KEY,
        gameBaseUrl: process.env.JILI_GAME_BASE_URL,
        secretKey: process.env.BYTE_FUSION_SECRET_KEY,
      },
    });

    return res.status(200).json({
      gameData: response.data.gameData,
    });
  } catch (error) {
    return res
      .status(401)
      .json({ errorCode: 4, message: "Error while fetching from database!" });
  }
};

const auth = async (req, res) => {
  try {
    const { reqId, token } = req.body;
    // Check if reqId and token are provided
    if (!reqId || !token) {
      return res
        .status(400)
        .json({ errorCode: 5, message: "Request ID and token are required" });
    }

    const [rows] = await connection.execute(
      "SELECT * FROM `users` WHERE `token` = ? AND `veri` = 1",
      [token],
    );

    // Check if token exists in the users database
    if (rows[0]?.status == 1) {
      // Get user details from the database
      const username = rows[0]?.phone;
      const balance = rows[0]?.money;
      const token = rows[0]?.token;

      // Return the user details as the response
      return res.status(200).json({
        errorCode: 0,
        message: "Success",
        currency: "INR",
        username,
        balance,
        token,
      });
    }

    return res
      .status(401)
      .json({ errorCode: 4, message: "Token expired or invalid" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ errorCode: 4, message: "Error while fetching from database!" });
  }
};

const bet = async (req, res) => {
  const reqId = req.body?.reqId;
  const token = req.body?.token;
  const currency = req.body?.currency;
  const game = req.body?.game;
  const wagersTime = req.body?.wagersTime;
  const betAmount = req.body?.betAmount;
  const round = req.body?.["round(*)"];
  const winloseAmount = req.body?.winloseAmount;
  const isFreeRound = req.body?.isFreeRound;
  const userId = req.body?.userId;
  const transactionId = req.body?.transactionId;
  const platform = req.body?.platform;
  const statementType = req.body?.statementType;
  const gameCategory = req.body?.gameCategory;
  const freeSpinData = req.body?.freeSpinData;
  // console.log("bet");
  // console.log(reqId);
  // console.log(token);
  try {
    // // console.log({
    //    reqId,
    //    token,
    //    currency,
    //    game,
    //    wagersTime,
    //    betAmount,
    //    round,
    //    winloseAmount,
    //    isFreeRound,
    //    userId,
    //    transactionId,
    //    platform,
    //    statementType,
    //    gameCategory,
    //    freeSpinData,
    // })

    console.log("Player Bet Request");
    console.log(req.body);

    // Check if reqId and token are provided
    if (!reqId || !token) {
      return res
        .status(400)
        .json({ errorCode: 4, message: "Request ID and token are required" });
    }

    const [rows] = await connection.execute(
      "SELECT * FROM `users` WHERE `token` = ? AND `veri` = 1",
      [token],
    );

    // Check if token exists in the users database
    if (rows[0]?.status == 1) {
      // console.log(rows[0]?.status, 1)
      // Get user details from the database
      const username = rows[0]?.phone;
      const balance = rows[0]?.money;
      const token = rows[0]?.token;

      // console.log(balance, betAmount, winloseAmount)
      if (balance < betAmount) {
        // console.log({
        //    errorCode: 2,
        //    message: "Not enough balance to bet",
        // });
        return res.status(400).json({
          errorCode: 2,
          message: "Not enough balance to bet",
        });
      }

      console.log("finalAmount", Number(balance - betAmount + winloseAmount));

      const finalAmount = Number(balance - betAmount + winloseAmount);

      await connection.query(
        "UPDATE users SET money = ?, total_money = ? WHERE `phone` = ?",
        [finalAmount, finalAmount, username],
      );

      // Return the user details as the response
      return res.status(200).json({
        errorCode: 0,
        message: "success",
        username,
        currency: "INR",
        balance: finalAmount,
        txId: transactionId,
        token,
      });
    }

    return res
      .status(401)
      .json({ errorCode: 4, message: "Token expired or invalid" });
  } catch (error) {
    console.log(error);
    return res
      .status(401)
      .json({ errorCode: 4, message: "Error while fetching from database!" });
  }
};

const cancelBet = async (req, res) => {
  const reqId = req.body?.reqId;
  const token = req.body?.token;
  // const currency = req.body?.currency
  // const game = req.body?.game
  // const wagersTime = req.body?.wagersTime
  const betAmount = req.body?.betAmount;
  // const round = req.body?.["round(*)"]
  const winloseAmount = req.body?.winloseAmount;
  // const userId = req.body?.userId
  // const transactionId = req.body?.transactionId
  // const platform = req.body?.platform
  // const statementType = req.body?.statementType
  // const gameCategory = req.body?.gameCategory
  // const freeSpinData = req.body?.freeSpinData
  // console.log("cancelBet");
  // console.log(reqId);
  // console.log(token);
  try {
    // // console.log({
    //    reqId,
    //    token,
    //    currency,
    //    game,
    //    wagersTime,
    //    betAmount,
    //    round,
    //    winloseAmount,
    //    isFreeRound,
    //    userId,
    //    transactionId,
    //    platform,
    //    statementType,
    //    gameCategory,
    //    freeSpinData,
    // })

    console.log("Player cancelBet Request");
    console.log(req.body);

    // Check if reqId and token are provided
    if (!reqId || !token) {
      return res.status(400).json({
        errorCode: 4,
        message: "Request ID and token are required",
      });
    }

    const [rows] = await connection.execute(
      "SELECT * FROM `users` WHERE `token` = ? AND `veri` = 1",
      [token],
    );

    // console.log("cancelBet")

    // Check if token exists in the users database
    if (rows[0]?.status == 1) {
      const username = rows[0]?.phone;
      const balance = rows[0]?.money;
      const token = rows[0]?.token;

      // if (balance <= betAmount) {
      //    return res.status(400).json({
      //       errorCode: 2,
      //       message: "Bet request failed!",
      //    })
      // }
      // console.log(balance);
      // console.log(betAmount);
      // console.log(winloseAmount);
      // console.log(balance, preserve, betAmount, winloseAmount)
      console.log("finalAmount", Number(balance + betAmount - winloseAmount));

      const finalAmount = Number(balance + betAmount - winloseAmount);

      await connection.query(
        "UPDATE users SET money = ?, total_money = ? WHERE `phone` = ?",
        [finalAmount, finalAmount, username],
      );

      // Return the user details as the response
      return res.status(200).json({
        errorCode: 0,
        message: "success",
        username,
        currency: "INR",
        balance: finalAmount,
        token,
      });
    }

    return res
      .status(401)
      .json({ errorCode: 4, message: "Token expired or invalid" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ errorCode: 5, message: "Error while fetching from database!" });
  }
};

const sessionBet = async (req, res) => {
  const reqId = req.body?.reqId;
  const token = req.body?.token;
  // const currency = req.body?.currency
  // const game = req.body?.game
  // const wagersTime = req.body?.wagersTime
  const betAmount = req.body?.betAmount;
  // const round = req.body?.["round(*)"]
  const winloseAmount = req.body?.winloseAmount;
  const preserve = req.body?.preserve;
  // const isFreeRound = req.body?.isFreeRound
  // const userId = req.body?.userId
  // const transactionId = req.body?.transactionId
  // const platform = req.body?.platform
  // const statementType = req.body?.statementType
  // const gameCategory = req.body?.gameCategory
  // const freeSpinData = req.body?.freeSpinData
  // console.log("sessionBet");

  console.log("Player sessionBet Request");
  console.log(req.body);
  try {
    // // console.log({
    //    reqId,
    //    token,
    //    currency,
    //    game,
    //    wagersTime,
    //    betAmount,
    //    round,
    //    winloseAmount,
    //    isFreeRound,
    //    userId,
    //    transactionId,
    //    platform,
    //    statementType,
    //    gameCategory,
    //    freeSpinData,
    // })

    // Check if reqId and token are provided
    if (!reqId || !token) {
      return res
        .status(400)
        .json({ errorCode: 4, message: "Request ID and token are required" });
    }

    const [rows] = await connection.execute(
      "SELECT * FROM `users` WHERE `token` = ? AND `veri` = 1",
      [token],
    );

    // // console.log("cancelSessionBet")

    // Check if token exists in the users database
    if (rows[0]?.status == 1) {
      // console.log(rows[0]?.status, 1)
      // Get user details from the database
      const username = rows[0]?.phone;
      const balance = rows[0]?.money;
      const token = rows[0]?.token;

      if (balance <= betAmount) {
        return res.status(400).json({
          errorCode: 2,
          message: "Bet request failed!",
        });
      }

      // // console.log(balance, betAmount, winloseAmount)

      let finalAmount;

      if (preserve === 0 && betAmount > 0 && winloseAmount === 0) {
        finalAmount = Number(balance - betAmount);
      } else if (preserve === 0 && betAmount === 0 && winloseAmount >= 0) {
        finalAmount = Number(balance + winloseAmount);
      } else if ((preserve > 0, betAmount === 0, winloseAmount === 0)) {
        finalAmount = Number(balance - preserve);
      } else if (preserve > 0 && betAmount >= 0 && winloseAmount >= 0) {
        finalAmount = Number(balance + preserve - betAmount + winloseAmount);
      }

      console.log(finalAmount);

      await connection.query(
        "UPDATE users SET money = ?, total_money = ? WHERE `phone` = ?",
        [finalAmount, finalAmount, username],
      );

      // Return the user details as the response
      return res.status(200).json({
        errorCode: 0,
        message: "success",
        username,
        currency: "INR",
        balance: finalAmount,
        // txId: transactionId,
        token,
      });
    }
    return res
      .status(401)
      .json({ errorCode: 4, message: "Token expired or invalid" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ errorCode: 5, message: "Error while fetching from database!" });
  }
};

const cancelSessionBet = async (req, res) => {
  const reqId = req.body?.reqId;
  const token = req.body?.token;
  // const currency = req.body?.currency
  // const game = req.body?.game
  // const wagersTime = req.body?.wagersTime
  const betAmount = req.body?.betAmount;
  // const round = req.body?.["round(*)"]
  const winloseAmount = req.body?.winloseAmount;
  const preserve = req.body?.preserve;
  // const isFreeRound = req.body?.isFreeRound
  // const userId = req.body?.userId
  // const transactionId = req.body?.transactionId
  // const platform = req.body?.platform
  // const statementType = req.body?.statementType
  // const gameCategory = req.body?.gameCategory
  // const freeSpinData = req.body?.freeSpinData
  // console.log("cancelSessionBet");

  console.log("Player cancelSessionBet Request");
  console.log(req.body);
  try {
    // // console.log({
    //    reqId,
    //    token,
    //    currency,
    //    game,
    //    wagersTime,
    //    betAmount,
    //    round,
    //    winloseAmount,
    //    isFreeRound,
    //    userId,
    //    transactionId,
    //    platform,
    //    statementType,
    //    gameCategory,
    //    freeSpinData,
    // })

    // Check if reqId and token are provided
    if (!reqId || !token) {
      return res
        .status(400)
        .json({ errorCode: 5, message: "Request ID and token are required" });
    }

    const [rows] = await connection.execute(
      "SELECT * FROM `users` WHERE `token` = ? AND `veri` = 1",
      [token],
    );

    // // console.log("cancelSessionBet")

    // Check if token exists in the users database
    if (rows[0]?.status == 1) {
      // console.log(rows[0]?.status, 1)
      // Get user details from the database
      const username = rows[0]?.phone;
      const balance = rows[0]?.money;
      const token = rows[0]?.token;

      if (balance <= betAmount) {
        return res.status(400).json({
          message: "Bet request failed!",
        });
      }

      // // console.log(balance, betAmount, winloseAmount)

      // const finalAmount = balance + betAmount - winloseAmount

      let finalAmount;

      if (preserve === 0) {
        finalAmount = Number(balance + betAmount);
      } else if (preserve > 0) {
        finalAmount = Number(balance + preserve);
      }

      console.log(finalAmount);

      await connection.query(
        "UPDATE users SET money = ?, total_money = ? WHERE `phone` = ?",
        [finalAmount, finalAmount, username],
      );

      // Return the user details as the response
      return res.status(200).json({
        errorCode: 0,
        message: "success",
        username,
        currency: "INR",
        balance: finalAmount,
        token,
      });
    }
    return res
      .status(401)
      .json({ errorCode: 4, message: "Token expired or invalid" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ errorCode: 4, message: "Error while fetching from database!" });
  }
};

const jiliGamesController = {
  auth,
  bet,
  getGameLink,
  gameList,
  gameCategoriesPage,
  cancelBet,
  cancelSessionBet,
  sessionBet,
  gameSlotsPage,
};

export default jiliGamesController;
