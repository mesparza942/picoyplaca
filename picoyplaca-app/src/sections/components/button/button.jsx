import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { string, func, bool } from "prop-types";

const useStyles = makeStyles(theme => ({
  buttonContainer: {
    margin: theme.spacing(1),
    width: 100
  }
}));

const ContainedButton = ({ type, label, onClick, disabled }) => {
  const classes = useStyles();

  return (
    <div className={classes.buttonContainer}>
      <Button
        variant="contained"
        color={type}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </Button>
    </div>
  );
};

ContainedButton.propTypes = {
  type: string,
  label: string,
  onClick: func,
  disabled: bool
};

ContainedButton.defaultProps = {
  type: "default"
};

export default ContainedButton;
