import React, { useEffect, useReducer, useState } from "react";
import { UseLocalStorage } from "../hooks/useLocalStorage";
import { categoryReducer, productReducer, cartReducer } from "../reducers";

const Menu = React.createContext(null);
export const AppUseContext = () => React.useContext(Menu);

export const MenuProvider = ({ children }) => {
  const [storage, setStorage] = UseLocalStorage("cart", []);
  const [nowCategory, setNowcategory] = useState({});
  const [cartState, cartDispatch] = useReducer(cartReducer, storage);
  const [productState, productDispatch] = useReducer(productReducer, {
    products: [],
  });
  const [categoryState, categoryDispatch] = useReducer(categoryReducer, {
    categories: [],
  });

  useEffect(() => {
    (async function () {
      const response = await fetch("http://localhost:3000/categories");
      const data = await response.json();
      categoryDispatch({ type: "LOAD-CATEGORIES", payload: data });
    })();
    (async function () {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      productDispatch({ type: "LOAD-PRODUCTS", payload: data });
    })();
  }, []);

  useEffect(() => {
    setStorage(cartState);
  }, [cartState, setStorage]);

  const contextValue = {
    cartState,
    cartDispatch,
    productState,
    productDispatch,
    categoryState,
    categoryDispatch,
    nowCategory,
    setNowcategory,
  };

  return <Menu.Provider value={contextValue}>{children}</Menu.Provider>;
};
