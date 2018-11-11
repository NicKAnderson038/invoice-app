import React from "react";
import TextField from "material-ui/TextField";
import { CardText } from "material-ui/Card";
import classes from "./FileUpload.module.css";
import Toggle from "material-ui/Toggle";

const styles = theme => ({
  display: {
    display: "flex"
  },
  color: {
    color: "red"
  }
});

const wireTransfer = props => {
  return (
    <div style={styles.display}>
      {/* <CardText>
        <div />

        <TextField
          id="sample"
          hintText={props.myText}
          style={styles.text}
          type="text"
        />
      </CardText> */}
      <h4>
        Wire Transfer Needed<span style={styles.color}>$25</span>
      </h4>

      <Toggle style={styles.color} />
    </div>
  );
};
export default wireTransfer;
