import { AppUseContext } from "../context";
import "../styles/category.css";

export const CategoryList = () => {
  const { categoryState, setNowcategory } = AppUseContext();
  const changeCategory = (category) => setNowcategory(category);

  return (
    <div className="category">
      <h3> Categories</h3>
      <ul>
        {categoryState.categories.map((category) => (
          <li onClick={() => changeCategory(category)} key={category.id}>
            {category.categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};
