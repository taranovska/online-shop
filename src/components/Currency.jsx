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
    event.stopPropagation();
    this.props.changeCurrency();
    console.log("cklicked");
  }
  render() {
    const selectedCurrency = this.props.symbol;
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
    changeCurrency: () => dispatch({ type: "changeCurrency", currency: 1 }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Currency);
