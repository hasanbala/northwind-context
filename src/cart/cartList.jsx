import { Button } from "../components";
import { AppUseContext } from "../context";
import "../styles/cart.css";

export const CartList = () => {
  const { cartState, cartDispatch } = AppUseContext();

  const handlePop = (item) =>
    cartDispatch({ type: "REMOVE-PRODUCTS", payload: item });

  return (
    <div className="adm-orders">
      <div className="adm-sub-title">
        <h2>PRODÜCTS</h2>
      </div>
      <div className="adm-order-sub">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <td>Product Name</td>
              <td>Unit Price</td>
              <td>Quantity Per Unit</td>
              <td>Units In Stock</td>
              <th>Number of Product</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartState.map((cartItem, index) => (
              <tr key={cartItem.item.id}>
                <td>{index + 1}</td>
                <td>{cartItem.item.productName}</td>
                <td>{cartItem.item.unitPrice}</td>
                <td>{cartItem.item.quantityPerUnit}</td>
                <td>{cartItem.item.unitsInStock}</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <Button
                    message="X"
                    btn="btn-hover out "
                    onclick={() => handlePop(cartItem)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
