import styled from "styled-components";
import { text_palette } from "../../helpers/colorScheme";

interface ButtonStyleProps {
  background?: boolean;
  border?: boolean;
  borderType?: string;
  textColorChange?: boolean;
  fullWidth?: boolean;
}

export const Btn = styled.button<ButtonStyleProps>`
  width: ${(props) => props.fullWidth && "100%"};

  border: ${(props) =>
    props.border ? `1px solid ${text_palette.purple_01}` : "none"};

  background: ${(props) =>
    props.background
      ? "linear-gradient(180deg,rgba(92, 67, 246, 1) 0%,rgba(188, 97, 243, 1) 100%)"
      : "transparent"};

  color: ${(props) =>
    props.textColorChange ? text_palette.dark : text_palette.grey_01};

  border-radius: ${(props) => (props.borderType === "curved" ? "10px" : 0)};

  padding: 15px 40px;
  cursor: pointer;
`;
