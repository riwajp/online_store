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
  InStock,
  OutofStock,
  ATCdisabled,
  BNdisabled,
  Date,
} from "./Styles/ProductPage.styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { HL } from "./Styles/Home.styles";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { NotifiersAdd } from "../Actions";
import { CartAdd } from "../Actions";

const ProductPage = () => {
  const dispatch = useDispatch();
  const id = useParams().id;
  console.log(id);
  const all_products = useSelector((state) => state.productsFetch);
  const cart = useSelector((state) => state.CartItems);
  var product = all_products.data.product.filter(
    (item) => item.id === parseInt(id)
  );
  product = product[0];
  console.log(product);
  var notifications = useSelector((state) => state.Notifiers);

  function add_to_cart() {
    var notification = product.name + " added to Cart.";
    notification = [...notifications, notification];

    dispatch(NotifiersAdd(notification));
    var cart_new = [...cart, product];
    dispatch(CartAdd(cart_new));
  }

  function tsToDate(ts) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var formatted_date = new window.Date(ts);
    console.log(formatted_date);
    return (
      formatted_date.getDate() +
      "/" +
      months[formatted_date.getMonth()] +
      "/" +
      formatted_date.getFullYear()
    );
  }
  return (
    <ProductPageStyled>
      {" "}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={6}>
          <Grid item md={5} sm={12}>
            <Image
              src={
                "https://electronic-ecommerce.herokuapp.com/" + product.image
              }
            />
          </Grid>
          <Grid item md={6} sm={12}>
            <Details>
              <Category>
                {product.category[0].toUpperCase()} /{" "}
                {product.category[1].toUpperCase()}
              </Category>
              <Name>{product.name}</Name>
              <HL />
              <br />
              {product.stock > 0 ? (
                <InStock>In Stock</InStock>
              ) : (
                <OutofStock>Out of Stock</OutofStock>
              )}

              <Description>
                <Date>Date Added: {tsToDate(product.createDate)}</Date>
                <br />
                8GB DDR3 Toshiba RAM, 500GB SSD, Intel UHD Integrated Graphics,
                15" Display
              </Description>
              <br />
              <Price>
                Rs.{" "}
                {parseInt(product.price.substring(1) * 120).toLocaleString()}
              </Price>
              <br />
              {product.stock > 0 ? (
                <div>
                  <AddToCart onClick={() => add_to_cart()}>
                    Add to Cart
                  </AddToCart>
                  <BuyNow>Buy Now</BuyNow>
                </div>
              ) : (
                <div>
                  <ATCdisabled>Add to Cart</ATCdisabled>
                  <BNdisabled>Buy Now</BNdisabled>
                </div>
              )}
            </Details>
          </Grid>
        </Grid>
      </Box>
    </ProductPageStyled>
  );
};
export default ProductPage;
