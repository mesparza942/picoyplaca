import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { string, func } from "prop-types";

const useStyles = makeStyles(theme => ({
  datePickerContainer: {
    width: 200
  }
}));

const DatePicker = ({ date, onChange }) => {
  const classes = useStyles();
  return (
    <div className={classes.datePickerContainer}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        value={date}
        onChange={onChange}
      />
    </div>
  );
};

DatePicker.propTypes = {
  date: string.isRequired,
  onChange: func.isRequired
};

DatePicker.defaultProps = {
  date: new Date("2020-03-07T21:11:54")
};

export default DatePicker;
