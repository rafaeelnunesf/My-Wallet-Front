import styled from "styled-components";

const Input = styled.input`
  width: 326px;
  height: 58px;
  left: 25px;
  top: 233px;

  background: #ffffff;
  border-radius: 5px;
  outline: none;
  border: 0;
  border: ${(props) => props.hasColor && "1px solid red"};

  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;

  color: #000000;

  padding-left: 15px;
`;
export default Input;
