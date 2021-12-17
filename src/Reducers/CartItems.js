const CartItems = (state = [], action) => {
  switch (action.type) {
    case "CARTADD":
      return action.data;
    default:
      return state;
  }
};
export default CartItems;
