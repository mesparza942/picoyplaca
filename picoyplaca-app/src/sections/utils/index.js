import { weekdayRanges } from "../../constants";

const isPicoPlacaDay = (day, lastNumPlate) => {
  console.log("isPPDay:", day);
  switch (day) {
    case 1:
      if (weekdayRanges.one.includes(lastNumPlate)) return true;
      else return false;
    case 2:
      if (weekdayRanges.two.includes(lastNumPlate)) return true;
      else return false;
    case 3:
      if (weekdayRanges.three.includes(lastNumPlate)) return true;
      else return false;
    case 4:
      if (weekdayRanges.four.includes(lastNumPlate)) return true;
      else return false;
    case 5:
      if (weekdayRanges.five.includes(lastNumPlate)) return true;
      else return false;
    default:
      // weekend
      return false;
  }
};

const isPicoPlacaTime = time => {
  console.log("time", time);
  // Pico y Placa Time Ranges
  if ((time > 700 && time < 930) || (time > 1600 && time < 1930)) return true;
  else return false; // Out of Pico y Placa Ranges
};

const shouldNotBeOnTheRoad = (day, time, lastNumPlate) =>
  isPicoPlacaDay(day, lastNumPlate) && isPicoPlacaTime(time);

export { shouldNotBeOnTheRoad };
