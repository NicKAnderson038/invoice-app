import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import DropDown from "../components/StaticInputs/DropDown";
import FileUpload from "../components/StaticInputs/FileUpload";
import Equipment from "../components/StaticInputs/Equipment";
import WireTransfer from "../components/StaticInputs/WireTransfer";
import classes from "./Upload.module.css";
import TextField from "material-ui/TextField";
import Toggle from "material-ui/Toggle";
import "../Styles.css";

const styles = {
  customWidth: {
    width: 150
  },
  flex: {
    display: "flex"
  },
  color: {
    color: "red"
  },
  textWidth: {
    width: 600
  }
};
class UploadPage extends Component {
  state = {
    value: 1
  };
  render() {
    const topText = "awesome-file.png";
    const bottomText = "test";
    return (
      <div style={styles.flex}>
        <Card className={classes.cardsize}>
          <h4>Upload your Documents *</h4>
          <div className={classes.wrapper}>
            <div className={classes.displaytype}>
              <FileUpload myText={topText} />
              <DropDown />
            </div>
            <div className={classes.displaytype}>
              <FileUpload myText={bottomText} />
              <DropDown />
            </div>
          </div>
          <button className="circle plus" />
          <h4>Total Invoice Amount *</h4>
          <TextField hintText="$0.00" />
          <h4>Bill To Company *</h4>
          <TextField hintText="Company Name" />
          <button className="circle plus" />
          <h4>Bill To Company Address *</h4>
          <TextField hintText="Company Address" />
        </Card>
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
              {/* <WireTransfer /> */}
              <Toggle
                thumbSwitchedStyle={{ backgroundColor: "#FF7800" }}
                trackSwitchedStyle={{ backgroundColor: "#FF7800" }}
              />
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default UploadPage;
