import {
  ProductPageStyled,
  Image,
  Details,
  Name,
  Price,
  Category,
  Description,
  AddToCart,
  BuyNow,
} from "./Styles/ProductPage.styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { HL } from "./Styles/Home.styles";

const ProductPage = () => {
  return (
    <ProductPageStyled>
      {" "}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={6}>
          <Grid item xs={5}>
            <Image src="https://itti.com.np/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/l/e/lenovo-ideapad-3-2020-price-nepal.jpg" />
          </Grid>
          <Grid item xs={6}>
            <Details>
              <Category>Laptops</Category>
              <Name>Lenovo Ideapad 3</Name>
              <HL />
              <br />
              <Description>
                8GB DDR3 Toshiba RAM, 500GB SSD, Intel UHD Integrated Graphics,
                15" Display
              </Description>
              <br />
              <Price>Rs. 50,000</Price>
              <br />
              <AddToCart>Add to Cart</AddToCart>
              <BuyNow>Buy Now</BuyNow>
            </Details>
          </Grid>
        </Grid>
      </Box>
    </ProductPageStyled>
  );
};
export default ProductPage;
