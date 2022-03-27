export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD-PRODUCTS":
      const addedItem = state.find(
        (product) => product.item.id === action.payload.item.id
      );
      if (addedItem) {
        const newCart = state.map((basket) => {
          if (basket.item.id === action.payload.item.id) {
            return { ...addedItem, quantity: addedItem.quantity + 1 };
          }
          return basket;
        });
        return newCart;
      } else {
        return [...state, { ...action.payload }];
      }

    case "POP-PRODUCTS":
      const popItem = state.find(
        (product) => product.item.id === action.payload.item.id
      );
      if (popItem && popItem.quantity > 1) {
        const newCart = state.map((basket) => {
          if (basket.item.id === action.payload.item.id) {
            return { ...popItem, quantity: popItem.quantity - 1 };
          }
          return basket;
        });
        return newCart;
      } else {
        const newState = state.filter(
          (product) => product.item.id !== action.payload.item.id
        );
        return newState;
      }

    case "REMOVE-PRODUCTS":
      const newState = state.filter(
        (product) => product.item.id !== action.payload.item.id
      );
      return newState;

    default:
      return state;
  }
};
