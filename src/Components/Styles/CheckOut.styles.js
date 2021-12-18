import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
`;

export const FormBox = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  width: 800px;
  max-width: 100%;
  padding: 10px;
  min-height: 200px;
`;

export const Title = styled.div`
  font-size: 25px;
  text-align: center;
`;

export const Input = styled.input`
  width: 95%;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const Label = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;

export const Button = styled.button`
  width: 95%;
  height: 35px;
  background-color: royalblue;
  border: 0 solid white;
  border-radius: 10px;
  color: white;
  padding: 2px;
  text-align: center;
  margin-top: 20px;
`;
export const Error = styled.div`
  color: red;
  font-size: 12px;
`;
