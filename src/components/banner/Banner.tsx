import React from "react";
import useWindowDimensions from "../../helpers/useWindowDimension";
import {
  BannerHeader,
  BannerSubtitle,
  BannerWrapper,
  Image,
  ImageBanner,
  TextBanner,
  BtnGrp,
} from "../../styles/banner/Banner.styles";
import { Button } from "../button/Button";

export const Banner = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <BannerWrapper viewport={width as number}>
        <TextBanner viewport={width as number}>
          <BannerHeader viewport={width as number}>
            Best NFTs Marketplace.
          </BannerHeader>
          <BannerSubtitle viewport={width as number}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            ut tenetur nesciunt quam veniam praesentium quo deleniti iste cumque
            laborum placeat rem porro incidunt illo repellendus ad debitis iusto
            dolorem nostrum tempore consectetur culpa.
          </BannerSubtitle>
          <BtnGrp viewport={width as number}>
            <Button text="Get Started" color={true} border={false} />
            <Button
              text="Create NFTS"
              color={false}
              border={true}
              textColorChange={false}
            />
          </BtnGrp>
        </TextBanner>

        <ImageBanner viewport={width as number}>
          <Image viewport={width as number} src="\assets\skull.png" alt="NFT" />
        </ImageBanner>
      </BannerWrapper>
    </>
  );
};
