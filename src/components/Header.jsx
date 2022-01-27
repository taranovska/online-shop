import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { PureComponent } from "react/cjs/react.production.min";
import { allItems, client } from "../index";
import { GET_ALL_CATEGORIES, GET_ALL_CURRENCIES } from "../query/items";
import CurrencySwitcher from "./CurrencySwitcher";
import classes from "./Header.module.css";
import MyBag from "./MyBag";

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showMyBag: false,
      showCurrencyList: false,
      changeArrow: "M1 0.5L4 3.5L7 0.5",
      currencies: [],
      currentCurrency: "$",
    };
    this.setShowMyBag = this.setShowMyBag.bind(this);
    this.setCloseMyBag = this.setCloseMyBag.bind(this);
    this.setShowCurrencyList = this.setShowCurrencyList.bind(this);
    this.setCloseCurrencyList = this.setCloseCurrencyList.bind(this);
    this.setCurrentCurrency = this.setCurrentCurrency.bind(this);
  }
  componentDidMount() {
    client
      .query({
        query: GET_ALL_CURRENCIES,
      })
      .then((result) => {
        this.setState({
          currencies: result.data.currencies,
        });
      });
  }
  setShowMyBag() {
    this.setState({ showMyBag: true });
    console.log(this.state);
    const { showMyBag } = this.state;
    console.log(showMyBag);
  }
  setCurrentCurrency() {
    this.setState({ currentCurrency: "$" });
  }
  setCloseMyBag() {
    this.setState({ showMyBag: false });
  }
  setShowCurrencyList() {
    this.setState({ showCurrencyList: true });
    this.setState({ changeArrow: "M1 3.5L4 0.5L7 3.5" });
  }
  setCloseCurrencyList() {
    this.setState({ showCurrencyList: false });
    this.setState({ changeArrow: "M1 0.5L4 3.5L7 0.5" });
  }

  render() {
    const { currencies } = this.state;

    return (
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <div className={classes.category_links}>
            <div>
              {this.props.categories.map((category, index = 0) => (
                <Link
                  to={category.name}
                  className={classes.links}
                  key={index++}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_150_358)">
                <path
                  d="M34.0222 28.6646C34.0494 28.983 33.8009 29.2566 33.4846 29.2566H7.46924C7.15373 29.2566 6.90553 28.9843 6.93156 28.6665L8.7959 5.91227C8.8191 5.62962 9.05287 5.41211 9.33372 5.41211H31.5426C31.8226 5.41211 32.0561 5.62853 32.0801 5.91036L34.0222 28.6646Z"
                  fill="#1DCF65"
                />
                <path
                  d="M36.0988 34.6014C36.1313 34.9985 35.8211 35.339 35.4268 35.339H5.59438C5.2009 35.339 4.89092 35.0002 4.92208 34.6037L7.06376 7.34718C7.09168 6.9927 7.38426 6.71973 7.73606 6.71973H33.1958C33.5468 6.71973 33.8391 6.99161 33.868 7.34499L36.0988 34.6014Z"
                  fill="url(#paint0_linear_150_358)"
                />
                <path
                  d="M19.9232 26.6953C16.0402 26.6953 12.8813 22.8631 12.8813 18.1528C12.8813 17.9075 13.0782 17.7085 13.3211 17.7085C13.564 17.7085 13.7608 17.9073 13.7608 18.1528C13.7608 22.3732 16.5253 25.8067 19.9234 25.8067C23.3214 25.8067 26.0859 22.3732 26.0859 18.1528C26.0859 17.9075 26.2827 17.7085 26.5257 17.7085C26.7686 17.7085 26.9654 17.9073 26.9654 18.1528C26.9653 22.8631 23.8062 26.6953 19.9232 26.6953Z"
                  fill="white"
                />
                <path
                  d="M24.2581 18.0337C24.1456 18.0337 24.0331 17.9904 23.9471 17.9036C23.7754 17.7301 23.7754 17.4488 23.9471 17.2753L26.226 14.9729C26.3084 14.8897 26.4203 14.8428 26.5369 14.8428C26.6536 14.8428 26.7654 14.8895 26.8479 14.9729L29.1045 17.2529C29.2762 17.4264 29.2762 17.7077 29.1045 17.8812C28.9327 18.0546 28.6543 18.0547 28.4826 17.8812L26.5368 15.9155L24.569 17.9036C24.4831 17.9904 24.3706 18.0337 24.2581 18.0337Z"
                  fill="white"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_150_358"
                  x1="29.8733"
                  y1="31.3337"
                  x2="11.5132"
                  y2="9.9008"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#52D67A" />
                  <stop offset="1" stopColor="#5AEE87" />
                </linearGradient>
                <clipPath id="clip0_150_358">
                  <rect
                    width="31.16"
                    height="30.176"
                    fill="white"
                    transform="translate(4.91992 5.41211)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          {/* &#x24;  */}
          <div className={classes.currency_cart}>
            <div className={classes.selected_currency}></div>
            {this.state.currentCurrency}
            <div
              className={classes.arrow_up}
              onClick={this.setShowCurrencyList}
            >
              <svg
                width="8"
                height="4"
                viewBox="0 0 8 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d={this.state.changeArrow}
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div onClick={this.setShowMyBag}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5613 4.87359C19.1822 4.41031 18.5924 4.12873 17.9821 4.12873H5.15889L4.75914 2.63901C4.52718 1.77302 3.72769 1.16895 2.80069 1.16895H0.653099C0.295301 1.16895 0 1.45052 0 1.79347C0 2.13562 0.294459 2.418 0.653099 2.418H2.80069C3.11654 2.418 3.39045 2.61936 3.47434 2.92139L6.04306 12.7077C6.27502 13.5737 7.07451 14.1778 8.00152 14.1778H16.4028C17.3289 14.1778 18.1507 13.5737 18.3612 12.7077L19.9405 6.50575C20.0877 5.941 19.9619 5.33687 19.5613 4.87359ZM18.6566 6.22252L17.0773 12.4245C16.9934 12.7265 16.7195 12.9279 16.4036 12.9279H8.00154C7.68569 12.9279 7.41178 12.7265 7.32789 12.4245L5.49611 5.39756H17.983C18.1936 5.39756 18.4042 5.49824 18.5308 5.65948C18.6567 5.81994 18.7191 6.02116 18.6566 6.22252Z"
                fill="#43464E"
              />
              <path
                d="M8.44437 14.9814C7.2443 14.9814 6.25488 15.9276 6.25488 17.0751C6.25488 18.2226 7.24439 19.1688 8.44437 19.1688C9.64445 19.1696 10.6339 18.2234 10.6339 17.0757C10.6339 15.928 9.64436 14.9812 8.44437 14.9812V14.9814ZM8.44437 17.9011C7.9599 17.9011 7.58071 17.5385 7.58071 17.0752C7.58071 16.6119 7.9599 16.2493 8.44437 16.2493C8.92885 16.2493 9.30804 16.6119 9.30804 17.0752C9.30722 17.5188 8.90748 17.9011 8.44437 17.9011Z"
                fill="#43464E"
              />
              <path
                d="M15.6875 14.9814C14.4875 14.9814 13.498 15.9277 13.498 17.0752C13.498 18.2226 14.4876 19.1689 15.6875 19.1689C16.8875 19.1689 17.877 18.2226 17.877 17.0752C17.8565 15.9284 16.8875 14.9814 15.6875 14.9814ZM15.6875 17.9011C15.2031 17.9011 14.8239 17.5385 14.8239 17.0752C14.8239 16.612 15.2031 16.2493 15.6875 16.2493C16.172 16.2493 16.5512 16.612 16.5512 17.0752C16.5512 17.5188 16.1506 17.9011 15.6875 17.9011Z"
                fill="#43464E"
              />
            </svg>
          </div>
        </div>
        <div>
          {this.state.showMyBag && <MyBag change={this.setCloseMyBag}></MyBag>}
        </div>
        <div>
          {this.state.showCurrencyList && (
            <CurrencySwitcher
              currencies={this.state.currencies}
              change={this.setCloseCurrencyList}
              changeCurrency={this.setCurrentCurrency}
            ></CurrencySwitcher>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
