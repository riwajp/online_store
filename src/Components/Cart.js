import {
  CartContainer,
  Image,
  Name,
  Price,
  Product,
  Total,
  TotalPrice,
  Delete,
  Title,
  CheckOut,
  Products,
  AddBtn,
  Quantity,
} from "./Styles/Cart.styles";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CartAdd } from "../Actions";
import { Link } from "react-router-dom";
import { CartToogle } from "../Actions";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.CartItems);

  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total +=
      parseInt(cart[i].product.price.substring(1)) *
      parseInt(cart[i].quantity) *
      120;
  }
  function decrease(item) {
    if (item.quantity > 1) {
      var cart_new = cart;
      cart_new[cart.indexOf(item)].quantity = item.quantity - 1;
      cart_new = [
        ...cart.slice(0, cart.indexOf(item)),
        cart_new[cart.indexOf(item)],
        ...cart.slice(cart.indexOf(item) + 1),
      ];

      dispatch(CartAdd(cart_new));
    }
  }

  function increase(item) {
    var cart_new = cart;
    cart_new[cart.indexOf(item)].quantity = item.quantity + 1;
    cart_new = [
      ...cart.slice(0, cart.indexOf(item)),
      cart_new[cart.indexOf(item)],
      ...cart.slice(cart.indexOf(item) + 1),
    ];

    dispatch(CartAdd(cart_new));
  }

  const cart_render = cart.map((item) => (
    <Product>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Image
              src={
                "https://electronic-ecommerce.herokuapp.com/" +
                item.product.image
              }
            />
          </Grid>
          <Grid item xs={6}>
            {" "}
            <Name> {item.product.name}</Name>
            <Price>
              {" "}
              Rs.{" "}
              {parseInt(item.product.price.substring(1) * 120).toLocaleString()}
            </Price>
          </Grid>
          <Grid item xs={3}>
            <AddBtn onClick={() => decrease(item)}>-</AddBtn>
            <Quantity>{item.quantity}</Quantity>
            <AddBtn onClick={() => increase(item)}>+</AddBtn>
          </Grid>
          <Grid item xs={1}>
            {" "}
            <Delete
              src="https://img.icons8.com/material-sharp/50/000000/filled-trash.png"
              onClick={() =>
                dispatch(
                  CartAdd(cart.filter((x) => x.product !== item.product))
                )
              }
            />
          </Grid>
        </Grid>
      </Box>
    </Product>
  ));
  return (
    <CartContainer className="slide-in-right ">
      <Title>Cart</Title>

      {cart.length > 0 ? (
        <div>
          <Products>{cart_render}</Products>
          <Total>
            Total: <TotalPrice>Rs.{total.toLocaleString()}</TotalPrice>
            <Link to="checkout">
              <CheckOut onClick={() => dispatch(CartToogle(false))}>
                Check Out
              </CheckOut>
            </Link>
            <br />
            <br />
          </Total>
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: 100, fontSize: 20 }}>
          Cart is Empty
        </div>
      )}
    </CartContainer>
  );
};

export default Cart;
