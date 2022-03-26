import { useState } from "react";

export const UseLocalStorage = (key, initailValue) => {
  const handleStorage = () => {
    const storage = localStorage.getItem(key);
    return storage ? JSON.parse(storage) : initailValue;
  };

  const [storage, setStorage] = useState(handleStorage);

  const updateStorage = (values) => {
    localStorage.setItem(key, JSON.stringify(values));
    setStorage(values);
  };

  return [storage, updateStorage];
};
