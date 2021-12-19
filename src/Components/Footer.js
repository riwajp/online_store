import { Container, Title, Icon } from "./Styles/Footer.styles";

const Footer = () => {
  return (
    <Container>
      <Title>Tech Store</Title>
      <div style={{ textAlign: "center", marginLeft: -20 }}>
        <Icon src="https://img.icons8.com/color/50/000000/facebook-new.png" />
        <Icon src="https://img.icons8.com/color/48/000000/instagram-new.png" />
        <Icon src="https://img.icons8.com/color/48/000000/twitter.png" />
      </div>
    </Container>
  );
};

export default Footer;
