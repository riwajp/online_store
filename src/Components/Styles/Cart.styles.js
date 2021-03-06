import styled from "styled-components";

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  min-height: 100%;
  width: 500px;
  max-width: 100%;
  background-color: white;
  box-shadow: 0 4px 10px 0px gray;
  padding-top: 75px;
  padding-left: 10px;
  padding-right: 20px;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Name = styled.div`
  font-size: 18px;
`;

export const Price = styled.div`
  font-size: 14px;
`;
export const Product = styled.div`
  border-bottom: 1px solid black;
  padding: 2px;
  margin-top: 10px;
`;

export const Total = styled.div`
  background-color: #e0d9d7;
  width: 98%;
  margin-left: auto;
  margin-right: auto;
  height: 40px;
  margin-top: 20px;
  padding: 10px;
`;

export const TotalPrice = styled.div`
  float: right;
`;

export const Delete = styled.img`
  width: 20px;
  height: auto;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 30px;
  text-align: center;
  font-weight: 500;
`;

export const CheckOut = styled.button`
  background-color: royalblue;
  color: white;
  width: 100%;
  height: 40px;
  margin-top: 50px;
  border: 1px solid royalblue;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
    transition: 0.3s;
    color: black;
    border: 1px solid lightblue;
  }
`;

export const Products = styled.div`
  height: 500px;
  max-height: 50vh;
  overflow-y: scroll;
`;

export const AddBtn = styled.button`
  border: 1px solid black;
  padding: 5px;
  font-size: 15px;
  background-color: grey;
  border-radius: 100%;
  height: 27px;
  width: 27px;
  cursor: pointer;
`;

export const Quantity = styled.span`
  font-size: 21px;
  padding: 10px;
`;
