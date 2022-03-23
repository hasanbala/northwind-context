import { Button } from "./components";
import { AppUseContext } from "./context";
import { toast } from "react-toastify";

export const Product = ({ item }) => {
  const { addCart, items } = AppUseContext();

  const choose = items.find((key) => key === item.id);
  const handleCart = () => {
    addCart(item, choose);
  };

  return (
    <tbody>
      <tr key={item.id}>
        {/* <td>{index + 1}</td> */}
        <td>{item.productName}</td>
        <td>{item.unitPrice}</td>
        <td>{item.quantityPerUnit}</td>
        <td>{item.unitsInStock}</td>
        <td>
          <Button
            btn={choose ? "btn-hover rmv" : "btn-hover addcart"}
            message={choose ? "Remove" : "Add"}
            // btn="btn-hover addcart"
            // message="Add"
            onclick={handleCart}
          />
        </td>
      </tr>
    </tbody>
  );
};
