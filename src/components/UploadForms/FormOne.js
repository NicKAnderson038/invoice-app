import React, { Component } from "react";
import { Card } from "material-ui/Card";
import DropDown from "../StaticInputs/DropDown";
import FileUpload from "../StaticInputs/FileUpload";
import classes from "./Form.module.css";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import TotalInvoiceAmount from "../DynamicInputs/TotalInvoiceAmount";
import "../../Styles.css";

class FormOne extends Component {
  render() {
    const topText = "awesome-file.png";
    const bottomText = "Wait, we are uploading...";
    return (
      <React.Fragment>
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
          <TotalInvoiceAmount />
          <h4>Bill To Company *</h4>
          <TextField hintText="Company Name" />
          <button className="circle plus" />
          <h4>Bill To Company Address *</h4>
          <TextField hintText="Company Address" />
          <br />
          <br />
          <RaisedButton label="+ Details" backgroundColor="#FF7800" />
        </Card>
      </React.Fragment>
    );
  }
}

export default FormOne;
