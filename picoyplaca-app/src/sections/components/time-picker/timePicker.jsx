import React from "react";
import { KeyboardTimePicker } from "@material-ui/pickers";

const TimePicker = props => (
  <KeyboardTimePicker
    margin="normal"
    id="time-picker"
    label="Time picker"
    value={new Date("2014-08-18T21:11:54")}
    onChange={() => null}
    KeyboardButtonProps={{
      "aria-label": "change time"
    }}
  />
);

export default TimePicker;
