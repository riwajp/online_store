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

export const NotifiersAdd = (data) => {
  return {
    type: "ADD",
    data: data,
  };
};

export const CartAdd = (data) => {
  return {
    type: "CARTADD",
    data: data,
  };
};

export const CartToogle = (data) => {
  return {
    type: "CARTTOOGLE",
    data: data,
  };
};

export const FilterToogle = (data) => {
  return {
    type: "FILTERTOOGLE",
    data: data,
  };
};
