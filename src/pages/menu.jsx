import { ProductList } from "./productList";
import { CategoryList } from "./categoryList";
import "../styles/menu.css";

export const Menu = () => {
  return (
    <div className="menu">
      <CategoryList />
      <ProductList />
    </div>
  );
};
