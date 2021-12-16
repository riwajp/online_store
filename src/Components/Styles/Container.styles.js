import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-image: ${({ theme }) => theme.colors.body};
  height: 200px;
`;

export default Container;
