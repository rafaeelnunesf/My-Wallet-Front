import styled from "styled-components";
const Balance = styled.div`
  display: flex;
  justify-content: space-between;
  p:first-child {
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;

    color: #000000;
  }
  p:last-child {
    font-size: 17px;
    line-height: 20px;

    text-align: right;

    color: ${(props) => (props.hasColor ? "#03AC00" : "#c70000")};
  }
`;
export default Balance;
