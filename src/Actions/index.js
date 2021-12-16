export const fetch = () => {
  return {
    type: "FETCH",
    data: "ds",
  };
};

export const categoryNav = (cat) => {
  return {
    type: "NAVCATCHANGE",
    data: cat,
  };
};
