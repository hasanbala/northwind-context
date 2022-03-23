export const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD-CATEGORIES":
      return {
        ...state,
        categories: [...action.payload],
      };
    case "LOAD-PRODUCTS":
      return {
        ...state,
        products: [...action.payload],
      };
    default:
      return state;
  }
};
