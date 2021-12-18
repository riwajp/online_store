import { NavStyled } from "./Styles/Nav.styles";
import { Logo } from "./Styles/Nav.styles";

import { Links } from "./Styles/Nav.styles";

import { LinkStyled } from "./Styles/Nav.styles";
import { CartIcon, CartNum } from "./Styles/Nav.styles";
import { Cart } from "./Styles/Nav.styles";
import { useSelector, useDispatch } from "react-redux";
import { CartToogle } from "../Actions";
import { Link } from "react-router-dom";

const Nav = () => {
  const cart = useSelector((state) => state.CartItems);
  const cartShow = useSelector((state) => state.CartShow);
  const dispatch = useDispatch();
  return (
    <NavStyled>
      <Logo>
        <Link to="/" style={{ color: "black", textDecoration: "none" }}>
          STORE
        </Link>
      </Logo>
      <Links>
        <Link to="/" style={{ color: "black", textDecoration: "none" }}>
          <LinkStyled>Home</LinkStyled>
        </Link>
      </Links>

      {cartShow === false ? (
        <Cart onClick={() => dispatch(CartToogle(true))}>
          <CartNum>{cart.length}</CartNum>
          <CartIcon src="https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-cart-shopping-actions-those-icons-fill-those-icons-3.png" />
        </Cart>
      ) : (
        <Cart onClick={() => dispatch(CartToogle(false))}>
          {" "}
          <CartIcon src="https://img.icons8.com/ios-glyphs/50/000000/delete-sign.png" />
        </Cart>
      )}
    </NavStyled>
  );
};

export default Nav;
