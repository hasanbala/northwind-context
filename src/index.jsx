import React from "react";
import ReactDOM from "react-dom";
import { MenuProvider } from "./context";
import { App } from "./app";
import { Product } from "./components/product";

ReactDOM.render(
  <React.StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
    {/* <Product /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
