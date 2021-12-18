import Container from "./Styles/Container.styles";
import { HomeStyled } from "./Styles/Home.styles";
import Latest from "./Latest";
import AllProducts from "./AllProducts";
import Banners from "./Banners";
const Home = () => {
  return (
    <HomeStyled>
      <Banners />
      <AllProducts />
    </HomeStyled>
  );
};

export default Home;
