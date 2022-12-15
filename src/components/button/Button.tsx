import React from "react";
import { Btn } from "../../styles/button/Button.styles";

interface ButtonProps {
  text: string;
  color: boolean;
  border: boolean;
  borderType?: string;
  textColorChange?: boolean;
  fullWidth?: boolean;
}

export const Button = ({
  text,
  color,
  border,
  borderType,
  textColorChange,
  fullWidth,
}: ButtonProps) => {
  return (
    <Btn
      background={color}
      border={border}
      borderType={borderType}
      textColorChange={textColorChange}
      fullWidth={fullWidth}
    >
      {text}
    </Btn>
  );
};
