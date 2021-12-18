import { combineReducers } from "redux";
import navCategory from "./navCategory";
import productsFetch from "./productsFetch";
import Notifiers from "./Notifiers";
import CartItems from "./CartItems";
import CartShow from "./CartShow";
import FilterState from "./FilterState";

const allReducers = combineReducers({
  navCategory: navCategory,
  productsFetch: productsFetch,
  Notifiers: Notifiers,
  CartItems: CartItems,
  CartShow: CartShow,
  FilterState: FilterState,
});

export default allReducers;
