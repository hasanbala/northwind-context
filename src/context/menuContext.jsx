import React, { useEffect, useReducer, useState } from "react";
import { reducer } from "../reducers";

const Menu = React.createContext(null);
export const AppUseContext = () => React.useContext(Menu);
const initialState = { categories: [], products: [] };
const defaultCart = JSON.parse(localStorage.getItem("cart")) || [];

export const MenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [nowCategory, setNowcategory] = useState({});
  const [items, setItems] = useState(defaultCart);

  useEffect(() => {
    (async function () {
      const response = await fetch("http://localhost:3000/categories");
      const data = await response.json();
      dispatch({ type: "LOAD-CATEGORIES", payload: data });
    })();
    (async function () {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      dispatch({ type: "LOAD-PRODUCTS", payload: data });
    })();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addCart = (product, choose) => {
    if (!choose) {
      return setItems((item) => [...item, product.id]);
    }
    const filterAdd = items.filter((item) => item !== choose);
    setItems(filterAdd);
  };

  const contextValue = {
    state,
    dispatch,
    nowCategory,
    setNowcategory,
    addCart,
    items,
  };

  return <Menu.Provider value={contextValue}>{children}</Menu.Provider>;
};
// export const MenuConsumer = Menu.Consumer;
