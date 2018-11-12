import React from "react";
import AppBar from "material-ui/AppBar";
import classes from "./NavBar.module.css";

const titleLeft = {
  display: "-webkit-box"
};

const AppBarExampleIcon = () => (
  <AppBar
    className={classes.navcolor}
    // title={<span style={titleLeft}>Title</span>}
  />
);

export default AppBarExampleIcon;
