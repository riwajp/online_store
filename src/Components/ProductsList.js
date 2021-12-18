import {
  ProductsList,
  ProductContainer,
  ProductImgContainer,
  ProductImage,
  ProductDetailsContainer,
  ProductName,
  ProductCategory,
  ProductPrice,
} from "./Styles/ProductsList.styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const ProductsListDiv = (props) => {
  const filterState = useSelector((state) => state.FilterState);

  const products = useSelector((state) => state.productsFetch);
  const cat = useSelector((state) => state.navCategory);
  var products_render;
  var products_selected = [];
  const catMap = {
    Laptops: "laptop",
    Phones: "mobile",
    Accessories: "watch" || "headseat" || "keyboard",
  };
  if (products !== "" && products["data"]) {
    if (props.type === "latest") {
      products_selected = products.data.product.slice(0, 4);
    } else {
      if (cat === "All") {
        products_selected = products.data.product;
      } else if (cat === "Accessories") {
        products_selected = products.data.product.filter(
          (item) =>
            item.category[1] === "keyboard" ||
            item.category[1] === "headseat" ||
            item.category[1] === "watch"
        );
      } else {
        products_selected = products.data.product.filter(
          (item) => item.category[1] === catMap[cat]
        );
      }
      if (
        filterState.state === true &&
        filterState.filters.minPrice !== null &&
        filterState.filters.maxPrice !== null
      ) {
        products_selected = products_selected.filter(
          (item) =>
            item.price.substring(1) * 120 > filterState.filters.minPrice &&
            item.price.substring(1) * 120 < filterState.filters.maxPrice
        );
      }
    }

    products_render = products_selected.map((product) => (
      <Grid item xs={3}>
        <Link
          to={"/product/" + product.id}
          style={{ textDecoration: "none", color: "black" }}
        >
          <ProductContainer>
            <ProductImgContainer>
              <ProductImage
                src={
                  "https://electronic-ecommerce.herokuapp.com/" + product.image
                }
              />
            </ProductImgContainer>
            <ProductDetailsContainer>
              <ProductCategory>
                {product.category[0].toUpperCase()}/
                {product.category[1].toUpperCase()}
              </ProductCategory>
              <br />
              <ProductName>{product.name}</ProductName>
              <br />

              <ProductPrice>
                Rs.{" "}
                {parseInt(product.price.substring(1) * 120).toLocaleString()}
              </ProductPrice>
            </ProductDetailsContainer>
          </ProductContainer>
        </Link>
      </Grid>
    ));
  }
  return (
    <ProductsList>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          {products_render}
        </Grid>
      </Box>
    </ProductsList>
  );
};

export default ProductsListDiv;
