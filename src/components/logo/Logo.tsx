import React from "react";
import {
  LogoContainer,
  LogoGen,
  LogoNext,
} from "../../styles/logo/Logo.styles";

export const Logo = () => {
  return (
    <LogoContainer>
      <LogoNext>Next</LogoNext>
      <LogoGen>Gen</LogoGen>
    </LogoContainer>
  );
};
