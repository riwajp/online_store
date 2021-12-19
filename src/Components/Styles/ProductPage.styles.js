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

export const InStock = styled.div`
  height: 20px;
  background-color: green;
  color: white;
  padding: 10px;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 100px;
`;

export const OutofStock = styled.div`
  height: 20px;
  background-color: red;
  color: white;
  padding: 10px;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 130px;
`;

export const ATCdisabled = styled.button`
  width: 95%;
  height: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: #2a2929;
  border: 1px solid #2a2929;
  color: white;
  margin-top: 50px;

  &:hover {
    transition: 0.3s;
    background-color: #141414;
  }
  cursor: not-allowed;
`;

export const BNdisabled = styled.button`
  width: 95%;
  height: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: #0cc7b2;
  border: 1px solid #0cc7b2;
  color: white;
  cursor: not-allowed;
  margin-top: 10px;
`;

export const Date = styled.div`
  color: grey;
`;

export const Added = styled.button`
  width: 95%;
  height: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: #2ecc71;
  border: 1px solid #2ecc71;
  color: white;
  margin-top: 50px;
  cursor: pointer;
`;
