const navCategory = (state = "All", action) => {
  switch (action.type) {
    case "NAVCATCHANGE":
      return action.data;
    default:
      return state;
  }
};
export default navCategory;
