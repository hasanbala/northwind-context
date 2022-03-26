import { AppUseContext } from "../context";

export const CategoryList = () => {
  const { categoryState, setNowcategory } = AppUseContext();
  const changeCategory = (category) => setNowcategory(category);

  return (
    <div>
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
