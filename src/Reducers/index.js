import { combineReducers } from "redux";
import navCategory from "./navCategory";
import productsFetch from "./productsFetch";
import Notifiers from "./Notifiers";
import CartItems from "./CartItems";
import CartShow from "./CartShow";

const allReducers = combineReducers({
  navCategory: navCategory,
  productsFetch: productsFetch,
  Notifiers: Notifiers,
  CartItems: CartItems,
  CartShow: CartShow,
});

export default allReducers;
