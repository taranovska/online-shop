import React from "react";
import { Component } from "react/cjs/react.production.min";
import classes from "./AvailableSizes.module.css";

class AvailableSizes extends Component {
  render() {
    return (
      <div className={classes.allBoxesSize}>
        <div className={classes.sizeBox}>XS</div>
        <div className={classes.sizeBox}>S</div>
      </div>
    );
  }
}
export default AvailableSizes;
