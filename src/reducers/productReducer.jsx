export const productReducer = (state, action) => {
  switch (action.type) {
    case "LOAD-PRODUCTS":
      return {
        products: [...action.payload],
      };
    default:
      return state;
  }
};
