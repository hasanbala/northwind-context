import React, { Component } from "react";
import Navi from "./navi";
import CategoryList from "./categoryList";
import ProductList from "./productList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartList from "./cartList";
import NotFound from "./notFound";

class App extends Component {
  state = {
    currentCategories: "",
    products: [],
    cart: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({
      currentCategories: category.categoryName,
    });
    this.getProducts(category.id);
  };

  getProducts = (seo) => {
    let url = "http://localhost:3000/products";
    if (seo) {
      url += "?categoryId=" + seo;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((item) => item.product.id === product.id);

    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product, quantity: 1 });
    }
    this.setState({
      cart: newCart,
    });
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(
      (item) => item.product.id !== product.id
    );
    this.setState({
      cart: newCart,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
        <CategoryList
          title="CategoryList"
          currentCategories={this.state.currentCategories}
          changeCategory={this.changeCategory}
        />
        <Routes>
          <Route
            exact
            path="/"
            render={(props) => (
              <ProductList
                {...props}
                title="ProductList"
                products={this.state.products}
                currentCategories={this.state.currentCategories}
                addToCart={this.addToCart}
              />
            )}
          />
          <Route
            exact
            path="/cart"
            render={(props) => (
              <CartList
                {...props}
                cart={this.state.cart}
                removeFromCart={this.removeFromCart}
              />
            )}
          />
          <Route element={NotFound} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
