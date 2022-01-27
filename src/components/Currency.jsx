import React from "react";
import { PureComponent } from "react/cjs/react.development";

class Currency extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.symbol + " " + this.props.label}</div>;
  }
}

export default Currency;
