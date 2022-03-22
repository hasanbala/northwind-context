import { useEffect, useState } from "react";
import { AppUseContext } from "./context";

export const CategoryList = () => {
  const { setCategory } = AppUseContext();
  const [categories, setCategories] = useState([]);

  const changeCategory = (category) => setCategory(category.categoryName);

  // useEffect(() => {
  //   (async function () {
  //     const response = await fetch("http://localhost:3000/categories");
  //     const data = await response.json();
  //     setCategories(data);
  //   })();
  // }, []);

  return (
    <div>
      <h3>CategoryList</h3>
      <div>
        {categories.map((category) => (
          <div
            // active={
            //   category.categoryName === this.props.currentCategories
            //     ? true
            //     : false
            // }
            onClick={changeCategory}
            key={category.id}
          >
            {category.categoryName}
          </div>
        ))}
      </div>
    </div>
  );
};
