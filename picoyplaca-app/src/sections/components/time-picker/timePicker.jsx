import React from "react";
import { KeyboardTimePicker } from "@material-ui/pickers";
import { string, func } from "prop-types";

const TimePicker = ({ time, onChange }) => (
  <KeyboardTimePicker
    margin="normal"
    id="time-picker"
    label="Time picker"
    value={time}
    onChange={onChange}
  />
);

TimePicker.propTypes = {
  date: string,
  onChange: func
};

TimePicker.defaultProps = {
  date: new Date("2014-08-18T21:11:54")
};

export default TimePicker;
