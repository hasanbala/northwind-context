import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Menu, NotFound } from "./pages";
import { Navi } from "./layout";
import "./styles/app.css";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navi />
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route component={NotFound} />
        </Switch>
        <ToastContainer theme="colored" />
      </BrowserRouter>
    </div>
  );
};
