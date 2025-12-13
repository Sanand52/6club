import moment from "moment";
// import GameRepresentationIds from "../constants/game_representation_id"
import _ from "lodash";

export function getNthMinuteSinceDayStart() {
  const now = moment();
  const startOfDay = moment().startOf("day");
  const diff = now.diff(startOfDay, "minutes");
  return diff;
}

export function generatePeriod(gameRepresentationId) {
  const TodayPeriod = moment().format("YYYYMMDD");
  const nthMinuteSinceDayStart = getNthMinuteSinceDayStart() + 1;
  const paddedNthMinuteSinceDayStart = _.padStart(
    nthMinuteSinceDayStart.toString(),
    4,
    "0",
  );

  let NewGamePeriod = `${TodayPeriod}${gameRepresentationId}${paddedNthMinuteSinceDayStart}`;

  return parseInt(NewGamePeriod);
}

export const generateClaimRewardID = () => {
  const min = 1;
  const max = 2147483647;
  const id = Math.floor(Math.random() * (max - min + 1)) + min;

  return id;
};

export const getTodayStartTime = () => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return now.getTime();
};

export const getTimeBasedOnDate = (inputDate) => {
  const inputDateObj = new Date(inputDate);
  const now = new Date();

  if (inputDateObj < new Date(now.toDateString())) {
    inputDateObj.setHours(23, 59, 59, 999);
    return inputDateObj.getTime();
  } else {
    return now.getTime();
  }
}

export const getStartOfWeekTimestamp = () => {
  const now = new Date();
  const dayOfWeek = now.getDay(); // Day of week (0-6), Sunday is 0
  const diff = (dayOfWeek === 0 ? -6 : 1) - dayOfWeek; // Calculate difference to Monday
  const startOfWeek = new Date(now.setDate(now.getDate() + diff)); // Set to the previous or current Monday
  startOfWeek.setHours(0, 0, 0, 0); // Set time to 00:00:00.000

  return startOfWeek.getTime();
};

export const yesterdayTime = () => {
  const currentDate = new Date();
  const startOfYesterday = new Date(currentDate);
  startOfYesterday.setDate(currentDate.getDate() - 1);
  startOfYesterday.setHours(0, 0, 0, 0);

  const endOfYesterday = new Date(currentDate);
  endOfYesterday.setDate(currentDate.getDate() - 1);
  endOfYesterday.setHours(23, 59, 59, 999);

  // Convert to timestamps
  const startOfYesterdayTimestamp = startOfYesterday.getTime();
  const endOfYesterdayTimestamp = endOfYesterday.getTime();

  return {
    startOfYesterdayTimestamp,
    endOfYesterdayTimestamp,
  };
};

export const monthTime = () => {
  const currentDate = new Date();
  const startOfMonth = new Date(currentDate);
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);

  const endOfMonth = new Date(currentDate);
  endOfMonth.setDate(currentDate.getDate());

  return {
    startOfMonthTimestamp: startOfMonth.getTime(),
    endOfMonthTimestamp: endOfMonth.getTime(),
  };
}

export const getDayTime = (time='') => {
  const currentDate = new Date(time);
  const startOfDay = new Date(currentDate);
  startOfDay.setHours(0, 0, 0, 0);
  const endOfDay = new Date(currentDate);
  endOfDay.setHours(23, 59, 59, 999);
  return {
    startOfDayTimestamp: startOfDay.getTime(),
    endOfDayTimestamp: endOfDay.getTime(),
  };
}

export function generateCommissionId() {
  const timestamp = Date.now(); // Current timestamp in milliseconds
  const randomNum = Math.floor(Math.random() * 100000); // Random number between 0 and 99999
  return `cmn-${timestamp}-${randomNum}`;
}

export function getBonuses(amount) {
  const bonusTable = {
    100: { selfBonus: 28, uplineBonus: 28 },
    200: { selfBonus: 48, uplineBonus: 58 },
    500: { selfBonus: 108, uplineBonus: 128 },
    1000: { selfBonus: 188, uplineBonus: 208 },
    5000: { selfBonus: 288, uplineBonus: 768 },
    10000: { selfBonus: 488, uplineBonus: 1288 },
    50000: { selfBonus: 2888, uplineBonus: 6888 },
    100000: { selfBonus: 5008, uplineBonus: 9999 },
  };

  if (amount >= 100 && amount < 200) {
    return bonusTable[100];
  } else if (amount >= 200 && amount < 500) {
    return bonusTable[200];
  } else if (amount >= 500 && amount < 1000) {
    return bonusTable[500];
  } else if (amount >= 1000 && amount < 5000) {
    return bonusTable[1000];
  } else if (amount >= 5000 && amount < 10000) {
    return bonusTable[5000];
  } else if (amount >= 10000 && amount < 50000) {
    return bonusTable[10000];
  } else if (amount >= 50000 && amount < 100000) {
    return bonusTable[50000];
  } else if (amount >= 100000) {
    return bonusTable[100000];
  } else {
    return { selfBonus: 0, uplineBonus: 0 };
  }
}
