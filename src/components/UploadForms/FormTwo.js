import React, { Component } from "react";
import { Card } from "material-ui/Card";
import classes from "./Form.module.css";
import TextField from "material-ui/TextField";
import Equipment from "../StaticInputs/Equipment";
import Toggle from "material-ui/Toggle";

const styles = {
  color: {
    color: "red"
  },
  textWidth: {
    width: 500
  }
};

class FormTwo extends Component {
  render() {
    return (
      <Card className={classes.cardsize}>
        <h4>First Pick Up</h4>
        <TextField hintText="Los Angeles, California" />
        <h4>Final Distination</h4>
        <TextField hintText="Los Angeles, California" />
        <h4>Load Number</h4>
        <TextField hintText="0" />
        <h4>Equipment Type</h4>
        <div className={classes.wrapper}>
          <div className={classes.displaytype}>
            <Equipment myText="Dry" />
            <Equipment myText="Ft 00" />
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.displaytype}>
            <h4 style={styles.textWidth}>
              Wire Transfer Needed<span style={styles.color}>$25</span>
            </h4>
            <Toggle
              thumbSwitchedStyle={{ backgroundColor: "#FF7800" }}
              trackSwitchedStyle={{ backgroundColor: "#FF7800" }}
            />
          </div>
        </div>
      </Card>
    );
  }
}

export default FormTwo;
