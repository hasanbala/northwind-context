import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "./cartSummary";

class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Northwind</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                {/* <NavLink ></NavLink> */}
                {/* <Link to="/form">Form Demo</Link> */}
              </NavItem>
              <CartSummary
                removeFromCart={this.props.removeFromCart}
                cart={this.props.cart}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navi;
