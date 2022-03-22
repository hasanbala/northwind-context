import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navi } from "./navi";
import { CategoryList } from "./categoryList";
import { ProductList } from "./productList";
import { NotFound } from "./notFound";

export const App = () => {
  return (
    <BrowserRouter>
      <Navi />
      <CategoryList />
      <Routes>
        <Route exact path="/" component={ProductList} />
        {/* <Route path="/cart" elementList /> */}
        <Route component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
};
