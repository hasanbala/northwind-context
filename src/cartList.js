import React, { Component } from "react";

class CartList extends Component {
  removeFromCart = (product) => {
    this.props.removeFromCart(product);
  };

  renderCart() {
    return (
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>categoryId</th>
            <th>productName</th>
            <th>unitPrice</th>
            <th>quantityPerUnit</th>
            <th>unitsInStock</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((cartItem, index) => (
            <tr key={cartItem.product.id}>
              <td>{index + 1}</td>
              <td>{cartItem.product.categoryId}</td>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.product.quantityPerUnit}</td>
              <td>{cartItem.product.unitsInStock}</td>
              <td>
                <button
                  outline
                  color="danger"
                  onClick={() => this.removeFromCart(cartItem.product)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    return <div> {this.renderCart()}</div>;
  }
}

export default CartList;
