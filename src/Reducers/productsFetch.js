const productsFetch = (state = "00000", action) => {
  switch (action.type) {
    case "FETCH":
      return state + action.data;
    default:
      return state;
  }
};

export default productsFetch;
