import React, { Component } from "react";
import { Card } from "material-ui/Card";
import classes from "./Form.module.css";
import TextField from "material-ui/TextField";
import Equipment from "../StaticInputs/Equipment";
import Toggle from "material-ui/Toggle";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionKeys/actionCreators";

const styles = {
  color: {
    color: "red"
  },
  textWidth: {
    width: 500
  },
  textWidth2: {
    width: 300
  },
  toggle: {
    width: 300,
    paddingTop: 20
  }
};

class FormTwo extends Component {
  state = {
    toggle: true
  };
  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
    this.props.onToggleTotalInvoiceResult(this.state.toggle);
  };
  render() {
    // const { Toggle } = state;
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
              Wire Transfer Needed <span style={styles.color}>$25</span>
            </h4>
            <Toggle
              style={styles.toggle}
              onToggle={() => this.handleToggle()}
              // toggled={this.state.Toggled}
              thumbSwitchedStyle={{ backgroundColor: "#FF7800" }}
              trackSwitchedStyle={{ backgroundColor: "#FF7800" }}
              // onClick={() => this.props.onToggleTotalInvoiceResult()}
            />
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.displaytype}>
            <div>
              <h4 style={styles.textWidth2}>Your Rate 3.5%</h4>
              <h4>{this.props.pIResult}</h4>
            </div>
            <div>
              <h4 style={styles.textWidth2}>Total To Be Paid</h4>
              <h4>{this.props.tIResult}</h4>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    tIResult: state.uploadResult.totalInvoiceAmount
      ? "$" + state.uploadResult.totalInvoiceAmount
      : null,
    pIResult: state.uploadResult.percentageAmount
      ? "$" + state.uploadResult.percentageAmount
      : null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleTotalInvoiceResult: ingName =>
      dispatch(actionCreators.toggleTotalInvoiceResult(ingName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormTwo);
