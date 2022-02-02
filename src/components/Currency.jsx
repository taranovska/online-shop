import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import classes from "./Currency.module.css";

class Currency extends Component {
  constructor(props) {
    super(props);
    this.changeCurrencyHandler = this.changeCurrencyHandler.bind(this);
  }
  changeCurrencyHandler(event, currency) {
    const selectedCurrency = this.props.symbol;
    // event.stopPropagation();
    this.props.changeCurrency(selectedCurrency);
    console.log("cklicked");
  }
  render() {
    return (
      <div className={classes.currency} onClick={this.changeCurrencyHandler}>
        {this.props.symbol + " " + this.props.label}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currency: state.currency,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrency: (cur) => dispatch({ type: "changeCurrency", payload: cur }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Currency);
