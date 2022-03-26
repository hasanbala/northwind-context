export const categoryReducer = (state, action) => {
  switch (action.type) {
    case "LOAD-CATEGORIES":
      return {
        categories: [...action.payload],
      };
    default:
      return state;
  }
};
