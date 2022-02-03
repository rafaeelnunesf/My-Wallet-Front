import styled from "styled-components";
const Value = styled.p`
  font-size: 16px;
  line-height: 19px;
  text-align: right;

  color: #c70000;
  color: ${(props) => (props.hasColor ? "#03AC00" : "#c70000")};
`;
export default Value;
