import React from "react";
import { Component } from "react";
import classes from "./Currency.module.css";

class Currency extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={classes.currency}>
        {this.props.symbol + " " + this.props.label}
      </div>
    );
  }
}

export default Currency;
