import React from "react";
import useWindowDimensions from "../../helpers/useWindowDimension";
import {
  HeaderContainer,
  HeaderText,
  SubtitleText,
} from "../../styles/header/Header.styles";

interface HeaderProps {
  header?: string;
  subtitle?: string;
}

export const Header = ({ header, subtitle }: HeaderProps) => {
  const { width } = useWindowDimensions();
  return (
    <HeaderContainer>
      <HeaderText viewport={width as number}>{header}</HeaderText>
      <SubtitleText viewport={width as number}>{subtitle}</SubtitleText>
    </HeaderContainer>
  );
};
