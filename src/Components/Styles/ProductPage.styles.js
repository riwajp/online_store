import styled from "styled-components";

export const ProductPageStyled = styled.div`
  margin-top: 100px;
  width: 100vw;
  padding: 20px;
`;
export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Details = styled.div`
  min-width: 100%;
  min-height: 200px;
  padding: 10px;
`;
export const Name = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-left: 20px;
`;

export const Price = styled.div`
  font-size: 25px;
  color: green;
  font-weight: 300;
  margin-top: 20px;
  margin-left: 20px;
`;
export const Category = styled.div`
  font-size: 15px;
  color: grey;
  font-weight: 200;
  margin-left: 20px;
`;

export const Description = styled.div`
  margin-top: 50px;
  margin-left: 20px;
`;

export const AddToCart = styled.button`
  width: 95%;
  height: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: #2a2929;
  border: 1px solid #2a2929;
  color: white;
  margin-top: 50px;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    background-color: #141414;
  }
`;

export const BuyNow = styled.button`
  width: 95%;
  height: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: #0cc7b2;
  border: 1px solid #0cc7b2;
  color: white;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    transition: 0.3s;
    background-color: #059786;
  }
`;