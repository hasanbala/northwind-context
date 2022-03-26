import { AppUseContext } from "../context";
import { useRef } from "react";
import { Button } from "../components";
import { Link } from "react-router-dom";
import { Toggle } from "./toogle";
import "../styles/navbar.css";

export const Navi = () => {
  const { cartState } = AppUseContext();
  const openNav = useRef();
  const closeNavX = useRef();
  const closeNav = useRef();
  // useEffect(() => {
  //   openNav.current.onclick = () => {
  //     document.documentElement.style.setProperty("--nav-width", "100%");
  //   };
  //   closeNavX.current.onclick = () => {
  //     document.documentElement.style.setProperty("--nav-width", "0%");
  //   };
  //   closeNav.current.onclick = () => {
  //     document.documentElement.style.setProperty("--nav-width", "0%");
  //   };
  // }, []);

  const cartBar = () => (
    <li style={{ marginRight: "20px" }}>
      <Link to="/cart">
        <Button
          btn="btn-hover cart"
          message="Cart"
          icon={true}
          len={cartState.length}
        />
      </Link>
    </li>
  );

  return (
    <div className="navbar">
      <nav className="navbarsub">
        <div className="navbarsub-list">
          <ul id="myTopnav">
            <li className="title">
              <h2>NRTHWND-RSTRNT</h2>
            </li>
            <li
              className="item"
              style={{
                marginLeft: "40px",
              }}
            >
              <Link className="link" to="/" data-hover="General">
                General
              </Link>
            </li>
            <li
              className="item"
              style={{
                marginLeft: "40px",
              }}
            >
              <Link className="link" to="/products" data-hover="Products">
                Products
              </Link>
            </li>
          </ul>
        </div>
        <ul
          className="item"
          style={{
            marginRight: "40px",
          }}
        >
          <li className="toggle" ref={openNav}>
            <i className="fas fa-align-justify" />
          </li>
          {cartBar()}
        </ul>
      </nav>
      {/* <Toggle closeNavX={closeNavX} closeNav={closeNav} /> */}
    </div>
  );
};
