import { AppUseContext } from "./context";

export const ProductList = () => {
  const { category, state } = AppUseContext();
  const { cart, products } = state;

  const addToCart = () => {
    // let newCart = cart;
    // var addedItem = newCart.find((item) => item.product.id === product.id);
    // if (addedItem) {
    //   addedItem.quantity += 1;
    // } else {
    //   newCart.push({ product, quantity: 1 });
    // }
    // this.setState({
    //   cart: newCart,
    // });
  };
  return (
    <div>
      <h3>ProductList * {category}</h3>
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>productName</th>
            <th>unitPrice</th>
            <th>quantityPerUnit</th>
            <th>unitsInStock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <th>{index + 1}</th>
              <td>{product.productName}</td>
              <td>{product.unitPrice}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitsInStock}</td>
              <td>{/* <button onClick={addToCart(product)}>add</button> */}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
