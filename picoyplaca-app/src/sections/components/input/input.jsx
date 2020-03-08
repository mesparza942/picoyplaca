import React from "react";
import { string, func } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  inputContainer: {
    margin: `${theme.spacing(1)}px 0`,
    width: 200
  }
}));

const Input = ({ value, label, onChange }) => {
  const classes = useStyles();
  return (
    <div className={classes.inputContainer}>
      <TextField
        id="standard-basic"
        label={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Input.propTypes = {
  label: string,
  value: string,
  onChange: func
};

Input.defaultProps = {
  value: "",
  label: "eg: PCQ-4170"
};

export default Input;
