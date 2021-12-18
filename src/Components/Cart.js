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
            <Price>{item.price}</Price>
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
    <CartContainer>
      <Title>Cart</Title>
      {cart_render}
      {cart.length > 0 ? (
        <Total>
          Total: <TotalPrice>$5937</TotalPrice>
          <Link to="checkout">
            <CheckOut>Check Out</CheckOut>
          </Link>
        </Total>
      ) : (
        <div style={{ textAlign: "center", marginTop: 100, fontSize: 20 }}>
          Cart is Empty
        </div>
      )}
    </CartContainer>
  );
};

export default Cart;
