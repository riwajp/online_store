const Notifiers = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return action.data;
    default:
      return state;
  }
};
export default Notifiers;
