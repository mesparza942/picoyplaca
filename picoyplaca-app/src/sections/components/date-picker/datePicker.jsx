import React from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { string, func } from "prop-types";

const DatePicker = ({ date, onChange }) => (
  <KeyboardDatePicker
    disableToolbar
    variant="inline"
    format="MM/dd/yyyy"
    margin="normal"
    id="date-picker-inline"
    value={date}
    onChange={onChange}
  />
);

DatePicker.propTypes = {
  date: string,
  onChange: func
};

DatePicker.defaultProps = {
  date: new Date("2014-08-18T21:11:54")
};

export default DatePicker;
