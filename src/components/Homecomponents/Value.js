import styled from "styled-components";
const Value = styled.p`
  width: 65px;
  font-size: 16px;
  line-height: 19px;
  text-align: right;

  color: ${(props) => (props.hasColor ? "#03AC00" : "#c70000")};
`;
export default Value;
