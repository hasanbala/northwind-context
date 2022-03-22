import React, { Component } from "react";
// import { Link } from "react-router-dom";

import CartSummary from "./cartSummary";

class Navi extends Component {
  render() {
    return (
      <div>
        <div color="light">
          <a href="/">Northwind</a>
          <div />
          <div>
            <div>
              <CartSummary
                removeFromCart={this.props.removeFromCart}
                cart={this.props.cart}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navi;
