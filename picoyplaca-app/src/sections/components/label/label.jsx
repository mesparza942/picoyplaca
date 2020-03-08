import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { string } from "prop-types";

const useStyles = makeStyles(theme => ({
  labelContainer: {
    margin: theme.spacing(1),
    width: 200,
    textAlign: "right",
    alignSelf: "flex-end"
  },
  pStyles: {
    margin: 0
  }
}));

const Label = props => {
  const classes = useStyles();
  return (
    <div className={classes.labelContainer}>
      <p className={classes.pStyles}>{props.text}: </p>
    </div>
  );
};

Label.propTypes = {
  text: string.isRequired
};

Label.defaultProps = {
  text: "Default Label"
};

export default Label;
