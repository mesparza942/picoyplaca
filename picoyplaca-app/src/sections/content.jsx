import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import {
  Input,
  Label,
  DatePicker,
  TimePicker,
  ContainedButton,
  SimpleAlert
} from "./components";
import { text } from "../constants";
import { shouldNotBeOnTheRoad } from "./utils";

const useStyles = makeStyles(theme => ({
  container: {
    margin: "0 auto",
    width: "80%"
  },
  formRow: {
    margin: "0 auto",
    width: "60%",
    display: "flex",
    justifyContent: "center"
  }
}));

const Content = () => {
  const classes = useStyles();
  const {
    subtitle,
    plateNumber,
    dateTxt,
    timeTxt,
    cancelBtn,
    predictBtn,
    warningNegativeMsg,
    warningPositiveMsg
  } = text;
  const [input, onChangeInput] = useState("");
  const [date, onChangeDate] = useState(text.defaultDateTime);
  const [time, onChangeTime] = useState(text.defaultDateTime);
  const [warningMsg, setWarningMsg] = useState("");
  const [isWarningFlag, setIsWarningFlag] = useState(false);
  const [showAlertClass, setShowAlertClass] = useState(false);

  const onCancel = () => {
    onChangeInput("");
    onChangeDate(text.defaultDateTime);
    onChangeTime(text.defaultDateTime);
    setShowAlertClass(false);
  };

  const onPredict = (plate, dateToPredict, timeToPredict) => {
    const lastNumPlate = plate.charAt(plate.length - 1);
    const day = dateToPredict.getDay();
    const hour = timeToPredict.getHours();
    const minute = timeToPredict.getMinutes();

    if (shouldNotBeOnTheRoad(day, `${hour}${minute}`, lastNumPlate)) {
      setIsWarningFlag(true);
      setWarningMsg(warningNegativeMsg);
    } else {
      setIsWarningFlag(false);
      setWarningMsg(warningPositiveMsg);
    }
    setShowAlertClass(true);
  };

  const handleChangeInput = e => onChangeInput(e.target.value);

  const handleChangeDate = newDate => onChangeDate(newDate);

  const handleChangeTime = newTime => onChangeTime(newTime);

  const shouldDisableButton = type => {
    if (type === "clear") {
      return (
        input === "" &&
        date === text.defaultDateTime &&
        time === text.defaultDateTime
      );
    } else {
      return input === "";
    }
  };

  return (
    <div className={classes.container}>
      <h2>{subtitle}</h2>
      <div className={classes.formRow}>
        <Label text={plateNumber} />
        <Input value={input} onChange={handleChangeInput} />
      </div>
      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container>
            <div className={classes.formRow}>
              <Label text={dateTxt} />
              <DatePicker date={date} onChange={handleChangeDate} />
            </div>
            <div className={classes.formRow}>
              <Label text={timeTxt} />
              <TimePicker time={time} onChange={handleChangeTime} />
            </div>
          </Grid>
        </MuiPickersUtilsProvider>
      </div>
      <div className={classes.formRow}>
        <ContainedButton
          label={cancelBtn}
          onClick={onCancel}
          disabled={shouldDisableButton(cancelBtn.toLowerCase())}
        />
        <ContainedButton
          label={predictBtn}
          type="primary"
          onClick={() => onPredict(input, date, time)}
          disabled={shouldDisableButton("primary")}
        />
      </div>
      <div className={classes.formRow}>
        {showAlertClass && (
          <SimpleAlert isAlert={isWarningFlag} alertMsg={warningMsg} />
        )}
      </div>
    </div>
  );
};

export default Content;
