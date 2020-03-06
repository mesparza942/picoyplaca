import React from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";

const DatePicker = props => (
  <KeyboardDatePicker
    disableToolbar
    variant="inline"
    format="MM/dd/yyyy"
    margin="normal"
    id="date-picker-inline"
    label="Date picker inline"
    value={new Date("2014-08-18T21:11:54")}
    onChange={() => null}
    KeyboardButtonProps={{
      "aria-label": "change date"
    }}
  />
);

export default DatePicker;
