import styled from "styled-components";
import { font_size, text_palette } from "../../helpers/colorScheme";

interface HeaderStyleProps {
  viewport: number;
}

export const HeaderContainer = styled.div`
  text-align: center;
  padding: 1rem;
`;

export const HeaderText = styled.h1<HeaderStyleProps>`
  color: ${text_palette.light};
  font-size: ${(props) => (props.viewport < 1024 ? "7vw" : "3vw")};
  font-weight: 900;
`;

export const SubtitleText = styled.h1`
  color: ${text_palette.grey_01};
  font-size: ${font_size.small};
  font-weight: 400;
`;
