import React from "react";
import { PureComponent } from "react/cjs/react.development";
import { client } from "..";
import { GET_ALL_CURRENCIES } from "../query/items";
import Currency from "./Currency";
import classes from "./CurrencySwitcher.module.css";
class CurrencySwitcher extends PureComponent {
  constructor(props) {
    super(props);
    // this.changeCurrency = this.changeCurrency.bind(this);
  }

  // changeCurrency() {
  //   console.log("cklicked");
  // }

  render() {
    const classesCurrency = classes.currencySwitcher + " " + classes.backdrop;

    return (
      <div className={classesCurrency} onClick={this.props.change}>
        {this.props.currencies.map((currency, index) => (
          <Currency
            key={index++}
            symbol={currency.symbol}
            label={currency.label}
          ></Currency>
        ))}
      </div>
    );
  }
}

export default CurrencySwitcher;
