import React, { Component } from "react";

class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.title} * {this.props.currentCategories}
        </h3>
        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>productName</th>
              <th>unitPrice</th>
              <th>quantityPerUnit</th>
              <th>unitsInStock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product, index) => (
              <tr key={product.id}>
                <th scope="row">{index + 1}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <button onClick={() => this.props.addToCart(product)}>
                    add
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductList;
