import { NavStyled } from "./Styles/Nav.styles";
import { Logo } from "./Styles/Nav.styles";

import { Links } from "./Styles/Nav.styles";

import { Link } from "./Styles/Nav.styles";
import { CartIcon } from "./Styles/Nav.styles";
import { Cart } from "./Styles/Nav.styles";

const Nav = () => {
  return (
    <NavStyled>
      <Logo>STORE </Logo>
      <Links>
        <Link>Home</Link>
        <Link>Categories</Link>
      </Links>
      <Cart>
        <CartIcon src="https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-cart-shopping-actions-those-icons-fill-those-icons-3.png" />
      </Cart>
    </NavStyled>
  );
};

export default Nav;
