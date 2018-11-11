import React, { Component } from "react";
import TextField from "material-ui/TextField";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionKeys/actionCreators";

class TotalInvoiceAmount extends Component {
  state = {
    numberformat: null
  };

  handleChange = event => {
    this.setState({
      numberformat: event.target.value
    });
    this.props.onTotalInvoiceResult(event.target.value);
  };

  render() {
    const { numberformat } = this.state;

    return (
      <React.Fragment>
        <TextField
          hintText="$0.00"
          type="number"
          onChange={numberformat => this.handleChange(numberformat)}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onTotalInvoiceResult: ingName =>
      dispatch(actionCreators.totalInvoiceResult(ingName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalInvoiceAmount);
