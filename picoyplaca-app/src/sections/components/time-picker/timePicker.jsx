import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardTimePicker } from "@material-ui/pickers";
import { string, func } from "prop-types";

const useStyles = makeStyles(theme => ({
  timePickerContainer: {
    width: 200
  }
}));

const TimePicker = ({ time, onChange }) => {
  const classes = useStyles();
  return (
    <div className={classes.timePickerContainer}>
      <KeyboardTimePicker
        margin="normal"
        id="time-picker"
        label="Time picker"
        value={time}
        onChange={onChange}
      />
    </div>
  );
};

TimePicker.propTypes = {
  date: string.isRequired,
  onChange: func.isRequired
};

TimePicker.defaultProps = {
  date: new Date("2020-03-07T21:11:54")
};

export default TimePicker;
