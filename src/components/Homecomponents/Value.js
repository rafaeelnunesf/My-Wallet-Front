import styled from "styled-components";
const Value = styled.p`
  width: 80px;
  font-size: 16px;
  line-height: 19px;
  text-align: right;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  color: ${(props) => (props.hasColor ? "#03AC00" : "#c70000")};
`;
export default Value;
