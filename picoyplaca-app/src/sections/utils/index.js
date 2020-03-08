import { weekdayRanges } from "../../constants";

const isPicoPlacaDay = (day, lastNumPlate) => {
  switch (day) {
    case 1: // monday
      if (weekdayRanges.one.includes(lastNumPlate)) return true;
      else return false;
    case 2: // tuesday
      if (weekdayRanges.two.includes(lastNumPlate)) return true;
      else return false;
    case 3: // wednesday
      if (weekdayRanges.three.includes(lastNumPlate)) return true;
      else return false;
    case 4: // thursday
      if (weekdayRanges.four.includes(lastNumPlate)) return true;
      else return false;
    case 5: // friday
      if (weekdayRanges.five.includes(lastNumPlate)) return true;
      else return false;
    default:
      // weekend
      return false;
  }
};

const isPicoPlacaTime = time => {
  // Pico y Placa Time Ranges: 7:00 - 9:30 or 16:00 - 19:30
  if ((time > 700 && time < 930) || (time > 1600 && time < 1930)) return true;
  else return false; // Out of Pico y Placa Ranges
};

const shouldNotBeOnTheRoad = (day, time, lastNumPlate) =>
  isPicoPlacaDay(day, lastNumPlate) && isPicoPlacaTime(time);

export { shouldNotBeOnTheRoad };
