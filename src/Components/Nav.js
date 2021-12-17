import { NavStyled } from "./Styles/Nav.styles";
import { Logo } from "./Styles/Nav.styles";

import { Links } from "./Styles/Nav.styles";

import { Link } from "./Styles/Nav.styles";
import { CartIcon, CartNum } from "./Styles/Nav.styles";
import { Cart } from "./Styles/Nav.styles";
import { useSelector, useDispatch } from "react-redux";
import { CartToogle } from "../Actions";

const Nav = () => {
  const cart = useSelector((state) => state.CartItems);
  const cartShow = useSelector((state) => state.CartShow);
  const dispatch = useDispatch();
  return (
    <NavStyled>
      <Logo>STORE </Logo>
      <Links>
        <Link>Home</Link>
        <Link>Categories</Link>
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
