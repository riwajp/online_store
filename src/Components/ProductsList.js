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

const ProductsListDiv = () => {
  return (
    <Link to="/product" style={{ textDecoration: "none" }}>
      <ProductsList>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={2}>
              <ProductContainer>
                <ProductImgContainer>
                  <ProductImage src="https://itti.com.np/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/l/e/lenovo-ideapad-3-2020-price-nepal.jpg" />
                </ProductImgContainer>
                <ProductDetailsContainer>
                  <ProductCategory>Laptops</ProductCategory>
                  <br />
                  <ProductName>Lenovo Ideapad 3</ProductName>
                  <br />

                  <ProductPrice>Rs. 50,000</ProductPrice>
                </ProductDetailsContainer>
              </ProductContainer>
            </Grid>
            <Grid item xs={2}>
              <ProductContainer>
                <ProductImgContainer>
                  <ProductImage src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000" />
                </ProductImgContainer>
                <ProductDetailsContainer>
                  <ProductCategory>Phones</ProductCategory>
                  <br />
                  <ProductName>iPhone 13 Max</ProductName>
                  <br />

                  <ProductPrice>Rs. 50,000</ProductPrice>
                  <br />
                </ProductDetailsContainer>
              </ProductContainer>
            </Grid>

            <Grid item xs={2}>
              <ProductContainer>
                <ProductImgContainer>
                  <ProductImage src="https://itti.com.np/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/l/e/lenovo-ideapad-3-2020-price-nepal.jpg" />
                </ProductImgContainer>
                <ProductDetailsContainer>
                  <ProductCategory>Laptops</ProductCategory>
                  <br />
                  <ProductName>Lenovo Ideapad 3</ProductName>
                  <br />

                  <ProductPrice>Rs. 50,000</ProductPrice>
                </ProductDetailsContainer>
              </ProductContainer>
            </Grid>

            <Grid item xs={2}>
              <ProductContainer>
                <ProductImgContainer>
                  <ProductImage src="https://itti.com.np/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/l/e/lenovo-ideapad-3-2020-price-nepal.jpg" />
                </ProductImgContainer>
                <ProductDetailsContainer>
                  <ProductCategory>Laptops</ProductCategory>
                  <br />
                  <ProductName>Lenovo Ideapad 3</ProductName>
                  <br />

                  <ProductPrice>Rs. 50,000</ProductPrice>
                </ProductDetailsContainer>
              </ProductContainer>
            </Grid>
          </Grid>
        </Box>
      </ProductsList>
    </Link>
  );
};

export default ProductsListDiv;
