import React, { Component } from "react";
import Navi from "./navi";
import CategoryList from "./categoryList";
import ProductList from "./productList";
import { Col, Container, Row } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router";
import CartList from "./cartList";
import NotFound from "./notFound";
import FormDemo from "./formDemo";

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
    alertify.success(product.productName + "added to cart");
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(
      (item) => item.product.id !== product.id
    );
    this.setState({
      cart: newCart,
    });
    alertify.error(product.productName + "removed to cart");
  };

  render() {
    return (
      <div>
        <Container>
          {console.log()}
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <CategoryList
                title="CategoryList"
                currentCategories={this.state.currentCategories}
                changeCategory={this.changeCategory}
              />
            </Col>
            <Col xs="9">
              <Switch>
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
                {/* <Route exact path="/form" component={FormDemo} /> */}
                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
