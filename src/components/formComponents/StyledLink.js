import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: underline;

  font-family: Raleway;
  font-weight: bold;
  font-size: 15px;

  line-height: 18px;

  color: #ffffff;
  :hover{
    cursor: pointer
  }
`;

export default StyledLink;
