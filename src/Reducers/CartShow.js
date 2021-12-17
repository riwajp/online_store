const CartShow = (state = false, action) => {
  switch (action.type) {
    case "CARTTOOGLE":
      return action.data;

    default:
      return state;
  }
};
export default CartShow;
