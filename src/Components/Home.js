import Container from "./Styles/Container.styles";
import { HomeStyled } from "./Styles/Home.styles";
import Latest from "./Latest";
import AllProducts from "./AllProducts";

const Home = () => {
  return (
    <HomeStyled>
      <Latest />
      <AllProducts />
    </HomeStyled>
  );
};

export default Home;
