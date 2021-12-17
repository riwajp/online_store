const productsFetch = (state = "", action) => {
  switch (action.type) {
    case "FETCH":
      return action.data;
    default:
      return state;
  }
};

export default productsFetch;
