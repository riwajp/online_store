import styled from "styled-components";

export const ProductsList = styled.div`
  width: 100vw;
  padding-left: 10px;
  color: black;
`;

export const ProductContainer = styled.div`
  margin-top: 50px;

  padding: 10px;
  cursor: pointer;

  &:hover {
    transition: 0.5s;

    box-shadow: 0 4px 10px 0px gray;
    margin-top: 20px;
  }
`;

export const ProductImgContainer = styled.div`
  height: 200px;
`;

export const ProductImage = styled.img`
  max-height: 100%;
  width: auto;
  max-width: 100%;
`;

export const ProductDetailsContainer = styled.div``;

export const ProductName = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const ProductCategory = styled.span`
  font-size: 12px;
  color: grey;
  font-weight: 200;
`;

export const ProductPrice = styled.span``;
