import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import { Input, Label, DatePicker, TimePicker } from "./components";

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

const Content = props => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h2>
        Fill the information below to check if your car is able to be on the
        road
      </h2>
      <div className={classes.formRow}>
        <Label text="License Plate Number" /> <Input />
      </div>
      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container>
            <div className={classes.formRow}>
              <Label text="Date" /> <DatePicker />
            </div>
            <div className={classes.formRow}>
              <Label text="Time" /> <TimePicker />
            </div>
          </Grid>
        </MuiPickersUtilsProvider>
      </div>
    </div>
  );
};

export default Content;
