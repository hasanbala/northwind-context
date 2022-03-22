import { AppUseContext } from "./context";

export const Navi = () => {
  const { state } = AppUseContext();
  const { cart } = state;

  const renderSummary = () => (
    <div>
      {/* <div>Your Cart</div>
      <div>
        {cart.map((cartItem) => (
          <div key={cartItem.product.id}>
            {cartItem.product.productName}
            <div color="success">{cartItem.quantity}</div>
          </div>
        ))}
      </div> */}
    </div>
  );

  const renderEmpty = () => (
    <div>
      <a>Empty Cart</a>
    </div>
  );
  return (
    <div>
      {/* return <div>{cart.length > 0 ? renderSummary() : renderEmpty()}</div>; */}
    </div>
  );
};
