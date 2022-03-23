import { AppUseContext } from "./context";
import { Product } from "./product";

export const ProductList = () => {
  const { state, nowCategory } = AppUseContext();

  const filterItem = () =>
    state.products.filter((item) => item.categoryId === nowCategory.id);
  const temp = () => (filterItem().length > 0 ? filterItem() : state.products);

  return (
    <div>
      <h3>ProductList * {nowCategory.categoryName} </h3>
      <table>
        <thead>
          <tr>
            {/* <td>Number</td> */}
            <td>productName</td>
            <td>unitPrice</td>
            <td>quantityPerUnit</td>
            <td>unitsInStock</td>
            <td>Add to Cart</td>
          </tr>
        </thead>
        {temp().map((product, index) => (
          <Product item={product} key={index} />
        ))}
      </table>
    </div>
  );
};
