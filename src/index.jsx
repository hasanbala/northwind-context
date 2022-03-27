import React from "react";
import ReactDOM from "react-dom";
import { MenuProvider } from "./context";
import { App } from "./app";

ReactDOM.render(
  <React.StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
