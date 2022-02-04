import styled from "styled-components";
const Entries = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: space-between;

  div {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
  }
  div p:first-child {
    width: 45px;
    font-size: 16px;
    line-height: 19px;

    color: #c6c6c6;
  }
  div p:last-child {
    width: 170px;
    font-size: 16px;
    line-height: 19px;
    color: #000000;

    text-align: start;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
export default Entries;
