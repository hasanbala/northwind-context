import React, { Component } from "react";
import { Button, Table } from "reactstrap";

class CartList extends Component {
  renderCart() {
    return (
      <Table striped>
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
                <Button
                  outline
                  color="danger"
                  onClick={() => this.props.removeFromCart(cartItem.product)}
                >
                  X
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  render() {
    return <div> {this.renderCart()}</div>;
  }
}

export default CartList;
