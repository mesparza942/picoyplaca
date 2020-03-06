import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  inputContainer: {
    margin: theme.spacing(1),
    width: 200
  }
}));

const Input = () => {
  const classes = useStyles();
  return (
    <div className={classes.inputContainer}>
      <TextField id="standard-basic" label="" />
    </div>
  );
};

export default Input;
