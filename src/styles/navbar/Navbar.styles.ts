import styled from "styled-components";
import { font_size, text_palette } from "../../helpers/colorScheme";

export const NavbarBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
`;

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  li {
    font-size: ${font_size.small};
    color: ${text_palette.grey_01};
    margin: 0 20px;
    cursor: pointer;
  }
`;

export const BtnGrp = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
`;
