import {
  AllProductsContainer,
  Category,
  CategorySelected,
  Categories,
} from "./Styles/ProductsFilter.styles";
import { useSelector, useDispatch } from "react-redux";
import { categoryNav } from "../Actions";
import ProductsListDiv from "./ProductsList";

const AllProducts = () => {
  const dispatch = useDispatch();
  const cat = useSelector((state) => state.navCategory);
  const categories = ["All", "Laptops", "Phones", "Accessories"];
  const categories_render = categories.map((category) => (
    <div onClick={() => dispatch(categoryNav(category))}>
      {category === cat ? (
        <CategorySelected>{category}</CategorySelected>
      ) : (
        <Category>{category}</Category>
      )}
    </div>
  ));
  return (
    <AllProductsContainer>
      <Categories>{categories_render}</Categories>
      <br />
      <ProductsListDiv />
    </AllProductsContainer>
  );
};
export default AllProducts;
