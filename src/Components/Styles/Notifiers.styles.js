import styled from "styled-components";

export const NotifierContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
`;

export const Notification = styled.div`
  min-width: 300px;
  max-width: 100%;
  background-color: #1b1c1c;
  color: white;
  padding: 10px;
  margin-top: 10px;
  font-size: 12px;
`;
export const Cross = styled.img`
  float: right;
  cursor: pointer;
  width: 15px;
  height: auto;
`;
