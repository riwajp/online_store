export const fetchProducts = (data) => {
  return {
    type: "FETCH",
    data: data,
  };
};

export const categoryNav = (cat) => {
  return {
    type: "NAVCATCHANGE",
    data: cat,
  };
};
