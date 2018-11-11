import React, { Component } from "react";
import classes from "./Upload.module.css";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import FormOne from "../components/UploadForms/FormOne";
import FormTwo from "../components/UploadForms/FormTwo";

const styles = {
  customWidth: {
    width: 150
  },
  flex: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    flexDirection: "row"
  }
};
class UploadPage extends Component {
  render() {
    return (
      <div style={styles.flex}>
        <FormOne />
        <FormTwo />
        <div className={classes.btnplus}>
          <FloatingActionButton backgroundColor="#FF7800">
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </div>
    );
  }
}

export default UploadPage;
