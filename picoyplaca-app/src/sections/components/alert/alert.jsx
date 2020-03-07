import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { bool, string } from "prop-types";

const useStyles = makeStyles(theme => ({
  alertContainer: {
    width: "100%",
    marginTop: theme.spacing(2)
  }
}));

const SimpleAlert = ({ isAlert, alertMsg }) => {
  const classes = useStyles();

  return (
    <div className={classes.alertContainer}>
      <Alert severity={isAlert ? "error" : "success"}>{alertMsg}</Alert>
    </div>
  );
};

SimpleAlert.propTypes = {
  alertMsg: string,
  isAlert: bool
};

export default SimpleAlert;
