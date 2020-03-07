import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { string } from "prop-types";

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
      <p>{props.text}: </p>
    </div>
  );
};

Label.propTypes = {
  text: string
};

Label.defaultProps = {
  text: "Default Label:"
};

export default Label;
