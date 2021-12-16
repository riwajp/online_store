import {
  AllProductsContainer,
  Category,
  Categories,
} from "./Styles/ProductsFilter.styles";

import ProductsListDiv from "./ProductsList";

const AllProducts = () => {
  return (
    <AllProductsContainer>
      <Categories>
        <Category>All</Category>
        <Category>Laptops</Category>
        <Category>Phones</Category>
        <Category>Accessories</Category>
      </Categories>
      <br />
      <ProductsListDiv />
    </AllProductsContainer>
  );
};
export default AllProducts;
