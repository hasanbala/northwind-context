import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Col, Container, Row } from "reactstrap";

class App extends Component {
  state = {
    currentCategories: "",
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({
      currentCategories: category.categoryName,
    });
    // console.log(category);
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

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategories={this.state.currentCategories}
                changeCategory={this.changeCategory}
                title="CategoryList"
              />
            </Col>
            <Col xs="9">
              <ProductList
                products={this.state.products}
                title="ProductList"
                currentCategories={this.state.currentCategories}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
