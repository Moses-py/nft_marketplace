import React from "react";
import useWindowDimensions from "../../helpers/useWindowDimension";
import {
  CardWrapper,
  CarouselContainer,
  CarouselWrapper,
} from "../../styles/nftcarousel/Nftcarousel.styles";
import { nft_data } from "../../__mock__/mock";

import { Header } from "../header/Header";
import { NftCard } from "./NftCard";

export const NftCarousel = () => {
  const { width } = useWindowDimensions();

  return (
    <CarouselWrapper viewport={width as number}>
      <Header header="Collect Some NFTs" />

      <CarouselContainer>
        <CardWrapper>
          {nft_data.map((data) => {
            return (
              <NftCard
                author={data.author}
                card_name={data.card_name}
                card_price={data.card_price}
                icon_url={data.icon_url}
                image_url={data.image_url}
              />
            );
          })}
        </CardWrapper>
      </CarouselContainer>
    </CarouselWrapper>
  );
};
