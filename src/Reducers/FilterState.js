const FilterState = (
  state = { state: false, filters: { minPrice: 0, maxPrice: 99999999 } },
  action
) => {
  switch (action.type) {
    case "FILTERTOOGLE":
      return action.data;

    default:
      return state;
  }
};
export default FilterState;
