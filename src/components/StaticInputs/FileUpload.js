import React from "react";
import TextField from "material-ui/TextField";
import { CardText } from "material-ui/Card";
import classes from "./FileUpload.module.css";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  text: {
    marginLeft: 2
  }
});

const fileUpload = props => {
  return (
    <div>
      <CardText>
        <div className={classes.dot} />

        <TextField
          id="sample"
          hintText={props.myText}
          style={styles.text}
          type="text"
        />
      </CardText>
    </div>
  );
};
export default fileUpload;
