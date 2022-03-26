import { useEffect, useState } from "react";

const useInput = (key, defaultValues) => {
  const [storage, setStorage] = useLocalStorage(key, defaultValues);
  const [input, setInput] = useState(storage);

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    setStorage(input);
  }, [input, setStorage]);

  return [input, handleChange];
};

const useLocalStorage = (key, initialValue) => {
  const handleStorage = () => {
    const localData = localStorage.getItem(key);
    return localData ? JSON.parse(localData) : initialValue;
  };
  const [storage, setStorage] = useState(handleStorage);
  const updateStorage = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setStorage(value);
  };
  return [storage, updateStorage];
};

export const Product = () => {
  const defaultValues = {
    name: "",
    age: "",
    email: "",
  };
  const [inputs, setInputs] = useInput("form", defaultValues);
  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" value={inputs.name} onChange={setInputs} />
        </div>
        <div>
          <label htmlFor="age">age</label>
          <input name="age" value={inputs.age} onChange={setInputs} />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input name="email" value={inputs.email} onChange={setInputs} />
        </div>
      </form>
    </div>
  );
};
