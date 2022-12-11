import styled from "styled-components";
import { font_size, text_palette } from "../../helpers/colorScheme";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LogoNext = styled.h1`
    font-weight: 900;
    background-image: linear-gradient(180deg,rgba(92, 67, 246, 1) 0%,rgba(188, 97, 243, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 100%;
    font-size: ${font_size.logo};
  }
`;
export const LogoGen = styled.h1`
  color: transparent;
  font-weight: 900;
  font-size: ${font_size.logo};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${text_palette.purple_01};
`;
