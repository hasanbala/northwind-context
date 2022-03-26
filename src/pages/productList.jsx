import { AppUseContext } from "../context";
import { Button } from "../components";
import "../styles/product.css";

export const ProductList = () => {
  const { productState, nowCategory, cartDispatch, cartState } =
    AppUseContext();

  const filterItem = () =>
    productState.products.filter((item) => item.categoryId === nowCategory.id);
  const temp = () =>
    filterItem().length > 0 ? filterItem() : productState.products;

  const handleAdd = (item) =>
    cartDispatch({ type: "ADD-PRODUCTS", payload: { quantity: 1, item } });

  const handlePop = (item) =>
    cartDispatch({ type: "POP-PRODUCTS", payload: { quantity: 1, item } });

  const handleQuantity = (item) =>
    cartState.map((basket) => {
      if (basket.item.id === item.id) {
        return basket.quantity;
      }
      return null;
    });

  const handleTrash = (item) =>
    cartState.map((basket) => {
      if (basket.item.id === item.id && basket.quantity > 0) {
        return "true";
      }
      return null;
    });
  return (
    <div>
      <h3>ProductList * {nowCategory.categoryName} </h3>
      <table>
        <thead>
          <tr>
            <td>Number</td>
            <td>productName</td>
            <td>unitPrice</td>
            <td>quantityPerUnit</td>
            <td>unitsInStock</td>
            <td>Add to Cart</td>
          </tr>
        </thead>
        <tbody>
          {temp().map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.productName}</td>
              <td>{product.unitPrice}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitsInStock}</td>
              <td className="td-button">
                <Button
                  onclick={() => handlePop(product)}
                  btn="btn-hover rmv"
                  disabled={
                    handleTrash(product).find((item) => item == "true")
                      ? null
                      : handleTrash(product)
                  }
                  message={
                    handleTrash(product).find((item) => item == "true") ? (
                      "-"
                    ) : (
                      <i className="fa-solid fa-basket-shopping" />
                    )
                  }
                />
                <Button
                  btn="btn-hover admin"
                  message={
                    handleQuantity(product) ? handleQuantity(product) : null
                  }
                />
                <Button
                  btn="btn-hover addcart"
                  message="+"
                  onclick={() => handleAdd(product)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
