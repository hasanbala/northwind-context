export const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD":
      return {
        ...state,
      };
    case "ADD-CART":
      return {
        ...state,
        cart: [...state.menu, ...action.payload],
      };
    default:
      return state;
  }
};
