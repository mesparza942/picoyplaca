import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  labelContainer: {
    margin: theme.spacing(1),
    width: 200
  }
}));

const Label = props => {
  const classes = useStyles();
  return (
    <div className={classes.labelContainer}>
      <p>{props.text || "Default Label:"}</p>
    </div>
  );
};

export default Label;
