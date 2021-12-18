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
} from "./Styles/Cart.styles";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CartAdd } from "../Actions";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.CartItems);

  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += parseInt(cart[i].price.substring(1)) * 120;
  }
  const cart_render = cart.map((item) => (
    <Product>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Image
              src={"https://electronic-ecommerce.herokuapp.com/" + item.image}
            />
          </Grid>
          <Grid item xs={8}>
            {" "}
            <Name> {item.name}</Name>
            <Price>
              {" "}
              Rs. {parseInt(item.price.substring(1) * 120).toLocaleString()}
            </Price>
          </Grid>
          <Grid item xs={2}>
            {" "}
            <Delete
              src="https://img.icons8.com/material-sharp/50/000000/filled-trash.png"
              onClick={() => dispatch(CartAdd(cart.filter((x) => x !== item)))}
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
              <CheckOut>Check Out</CheckOut>
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
