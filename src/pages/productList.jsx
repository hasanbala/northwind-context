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

  const handleQuantity = (id) =>
    cartState.map((basket) => {
      if (basket.item.id === id) {
        return basket.quantity;
      }
      return null;
    });

  const handleTrash = (id) =>
    cartState.map((basket) => {
      if (basket.item.id === id && basket.quantity > 0) {
        return "true";
      }
      return null;
    });

  const handleTrashCheck = (id) =>
    handleTrash(id).find((item) => item === "true");

  return (
    <div className="product">
      <h3> {nowCategory.categoryName ?? "* ProductList"} </h3>
      <table>
        <thead>
          <tr>
            <td>Number</td>
            <td>Product Name</td>
            <td>Unit Price</td>
            <td>Quantity Per Unit</td>
            <td>Units In Stock</td>
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
                  btn={
                    handleTrashCheck(product.id)
                      ? "btn-hover rmv"
                      : "btn-hover rmv2"
                  }
                  disabled={
                    handleTrashCheck(product.id)
                      ? null
                      : handleTrash(product.id)
                  }
                  message={handleTrashCheck(product.id) ? "-" : "trash"}
                />
                <Button
                  btn="btn-hover admin"
                  message={
                    handleQuantity(product.id)
                      ? handleQuantity(product.id)
                      : null
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
