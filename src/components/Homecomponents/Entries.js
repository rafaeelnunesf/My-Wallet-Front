import styled from "styled-components";
const Entries = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: space-between;

  div {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
  }
  div p:first-child {
    font-size: 16px;
    line-height: 19px;

    color: #c6c6c6;
  }
  div p:last-child {
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
`;
export default Entries;
