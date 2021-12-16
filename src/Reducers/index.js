import { combineReducers } from "redux";
import navCategory from "./navCategory";
import productsFetch from "./productsFetch";

const allReducers = combineReducers({
  navCategory: navCategory,
  productsFetch: productsFetch,
});

export default allReducers;
