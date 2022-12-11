import styled from "styled-components";
import { font_size, text_palette } from "../../helpers/colorScheme";

interface NavbarStyleProps {
  openNav?: boolean;
}
export const NavbarWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const NavbarBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

export const NavList = styled.div<NavbarStyleProps>`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  flex-direction: ${(props) => (props.openNav ? "column" : "row")};
  align-items: center;
  gap: 10px;
  background: transparent;
  padding: ${(props) => (props.openNav ? "1rem" : "")};

  li {
    font-size: ${font_size.small};
    color: ${(props) =>
      props.openNav ? text_palette.dark : text_palette.grey_01};
    margin: 0 20px;
    cursor: pointer;
    padding: ${(props) => (props.openNav ? "1rem" : "")};
    background: transparent;
  }
`;

export const BtnGrp = styled.div<NavbarStyleProps>`
  display: flex;
  flex-direction: ${(props) => (props.openNav ? "column" : "row")};
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  background: transparent;
`;

export const MobileNavHolder = styled.div<NavbarStyleProps>`
  position: absolute;
  right: 1rem;
  top: 7rem;
  background: #fff;
  border: 1px solid #fff;
  padding: 2rem;
  border-radius: 10px;
`;
