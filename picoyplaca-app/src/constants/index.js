const text = {
  title: "Pico y Placa Exercise",
  subtitle:
    "Fill the information below to check if your car is able to be on the road",
  plateNumber: "License Plate Number",
  dateTxt: "Date",
  timeTxt: "Time",
  cancelBtn: "Clear",
  predictBtn: "Predict",
  defaultDateTime: new Date("2020-03-07T21:11:54"),
  warningNegativeMsg:
    "Your Car should not be on the road for the information selected",
  warningPositiveMsg:
    "Your Car is good to be on the road for the information selected"
};

const weekdayRanges = {
  one: ["1", "2"], // monday for plate number 1 & 2
  two: ["3", "4"], // tuesday for plate number 3 & 4
  three: ["5", "6"], // wednesday for plate number 5 & 6
  four: ["7", "8"], // thursday for plate number 7 & 8
  five: ["9", "0"] // friday for plate number 9 & 0
};

export { text, weekdayRanges };
