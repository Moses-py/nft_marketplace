import styled from "styled-components";
import { font_size, text_palette } from "../../helpers/colorScheme";

interface BannerStyleProps {
  viewport: number;
}

export const BannerWrapper = styled.div<BannerStyleProps>`
  display: ${(props) => ((props.viewport as number) < 990 ? "" : "flex")};
  gap: 1rem;
  justify-content: space-around;
  align-items: center;
  padding: 0 2rem;
`;

export const ImageBanner = styled.div<BannerStyleProps>`
  display: flex;
  border-radius: 100%;
  justify-content: center;
`;

export const Image = styled.img<BannerStyleProps>`
  border-radius: 100%;
  width: ${(props) => (props.viewport < 768 ? "70vw" : "38vw")};
  object-fit: contain;
`;

export const TextBanner = styled.div<BannerStyleProps>`
  padding: ${(props) => (props.viewport < 768 ? "1rem 0" : "3rem")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: ${(props) => (props.viewport < 1024 ? "0" : "5rem")};
`;

export const BannerHeader = styled.h1<BannerStyleProps>`
  font-size: ${(props) => (props.viewport < 768 ? "9vw" : "4vw")};
  font-weight: 900;
  background-image: linear-gradient(
    90deg,
    rgba(92, 67, 246, 1) 0%,
    rgba(188, 97, 243, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 1rem 0;
`;

export const BannerSubtitle = styled.p<BannerStyleProps>`
  font-weight: 400;
  font-size: ${font_size.small};
  color: ${text_palette.grey_01};
  word-wrap: wrap;
  margin: 3rem 0;
  line-height: 2;
`;

export const BtnGrp = styled.div<BannerStyleProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  background: transparent;
  width: ${(props) => (props.viewport < 1440 ? "100%" : "50%")};
  margin-bottom: ${(props) => (props.viewport < 768 ? "2rem" : 0)};
`;
