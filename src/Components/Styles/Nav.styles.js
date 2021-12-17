import styled from "styled-components";

export const NavStyled = styled.div`
  width: 100%;
  min-height: 30px;
  display: flex;
  justify-content: space-between;

  position: fixed;
  top: 0;
  box-shadow: 0 4px 10px 0px gray;
  display: flex;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.nav};
`;

export const Logo = styled.span`
  @import url("https://fonts.googleapis.com/css2?family=Abel&display=swap");

  font-size: 30px;
  font-family: "Abel", sans-serif;
  font-weight: 700;
  padding: 15px;
  cursor: pointer;
`;

export const Links = styled.div`
  padding: 5px;
  height: 100%;
  padding: 15px;
  display: flex;
`;

export const Link = styled.div`
  padding: 5px 10px 5px 10px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #e4ede9;
    border: 0 solid grey;
    border-radius: 20px;
    transition: 0.5s;
  }
`;

export const Cart = styled.div`
  position: fixed;
  padding: 10px;
  bottom: 50px;
  right: 50px;
  max-height: 30px;
  border: 1px solid white;
  box-shadow: 0 4px 10px 0px gray;
  border-radius: 100%;
  background-color: white;
  cursor: pointer;
`;

export const CartIcon = styled.img`
  width: 30px;
  height: auto;
`;

export const CartNum = styled.div`
  background-color: red;

  min-width: 20px;
  min-height: 17px;
  padding-top: 5px;
  text-align: center;
  border-radius: 100%;
  font-size: 10px;
  color: white;
  position: absolute;
  top: -10px;
  right: 2px;
`;
