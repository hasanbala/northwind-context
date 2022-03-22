import React, { useEffect, useReducer, useState } from "react";
import { reducer } from "../reducers";

const Menu = React.createContext(null);
export const AppUseContext = () => React.useContext(Menu);
const initialState = { products: [], cart: [] };

export const MenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [category, setCategory] = useState("");

  useEffect(() => {
    (async function () {
      const response = await fetch("http://localhost:3000/categories");
      const data = await response.json();
      console.log(data);
      dispatch({ type: "LOAD", payload: data });
    })();
  }, []);

  const contextValue = {
    state,
    dispatch,
    category,
    setCategory,
  };

  return <Menu.Provider value={contextValue}>{children}</Menu.Provider>;
};
// export const MenuConsumer = Menu.Consumer;
