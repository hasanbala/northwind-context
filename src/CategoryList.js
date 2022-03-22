import React, { Component } from "react";

class CategoryList extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <div>
          {this.state.categories.map((category) => (
            <div
              // active={
              //   category.categoryName === this.props.currentCategories
              //     ? true
              //     : false
              // }
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CategoryList;
