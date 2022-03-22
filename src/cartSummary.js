import React, { Component } from "react";
// import { a } from "react-router-dom";

class CartSummary extends Component {
  renderSummary() {
    return (
      <div>
        <div nav caret>
          Your Cart
        </div>
        <div right>
          {this.props.cart.map((cartItem) => (
            <div key={cartItem.product.id}>
              <div onClick={() => this.props.removeFromCart(cartItem.product)}>
                X
              </div>
              {cartItem.product.productName}
              <div color="success">{cartItem.quantity}</div>
            </div>
          ))}
          <div />
          <div>
            <a to="/cart">Go To Cart</a>
          </div>
        </div>
      </div>
    );
  }

  renderEmpty() {
    return (
      <div>
        <a>Empty Cart</a>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

export default CartSummary;
