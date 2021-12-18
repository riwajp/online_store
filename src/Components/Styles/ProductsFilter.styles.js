import styled from "styled-components";

export const AllProductsContainer = styled.div`
  margin-top: 10px;
`;

export const Categories = styled.div`
  display: flex;
`;

export const Category = styled.div`
  font-size: 18px;
  margin-left: 20px;
  cursor: pointer;
  padding: 10px 15px 10px 15px;
  &:hover {
    background-color: #e4ede9;
    border: 0 solid grey;
    border-radius: 20px;
    transition: 0.3s;
  }
`;

export const CategorySelected = styled.div`
  font-size: 18px;
  margin-left: 20px;
  cursor: pointer;
  padding: 10px 15px 10px 15px;

  background-color: #e4ede9;
  border: 0 solid grey;
  border-radius: 20px;
  transition: 0.3s;
`;
