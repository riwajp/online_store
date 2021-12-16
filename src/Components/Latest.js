import { LatestStyled, LatestTitle, HL } from "./Styles/Home.styles";

import ProductsListDiv from "./ProductsList";
const Latest = () => {
  return (
    <LatestStyled>
      <LatestTitle>
        Latest
        <span
          style={{
            float: "right",
            marginRight: 50,
            color: "brown",
            fontSize: 17,
          }}
        >
          See All
        </span>
      </LatestTitle>
      <HL />
      <ProductsListDiv />
    </LatestStyled>
  );
};

export default Latest;
