import React from "react";
import { Btn } from "../../styles/button/Button.styles";

interface ButtonProps {
  text: string;
  color: boolean;
  border: boolean;
  borderType?: string;
}

export const Button = ({ text, color, border, borderType }: ButtonProps) => {
  return (
    <Btn background={color} border={border} borderType={borderType}>
      {text}
    </Btn>
  );
};
