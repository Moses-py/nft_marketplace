import React from "react";
import useWindowDimensions from "../../helpers/useWindowDimension";
import {
  CardImage,
  CardImageWrapper,
  NftDescCard,
  NftDescCardAuthor,
  NftDescCardContainer,
  NftDescCardDetails,
  NftDescCardName,
} from "../../styles/nftcarousel/Nftcarousel.styles";
import { Button } from "../button/Button";

interface NftCardProps {
  image_url: string;
  card_name: string;
  card_price: string;
  icon_url: string;
  author: string;
}

export const NftCard: React.FunctionComponent<NftCardProps> = ({
  image_url,
  card_name,
  card_price,
  icon_url,
  author,
}) => {
  const { width } = useWindowDimensions();

  return (
    <CardImageWrapper viewport={width as number}>
      <CardImage viewport={width as number} src={image_url} alt="nft_card" />
      <NftDescCardContainer>
        <NftDescCard>
          <NftDescCardDetails>
            <NftDescCardName>
              <h2>{card_name}</h2>
              <h2>{card_price}</h2>
            </NftDescCardName>
            <NftDescCardAuthor>
              <img src={icon_url} alt="creator_card" />
              <p>{author}</p>
            </NftDescCardAuthor>
          </NftDescCardDetails>

          <Button
            text="Place a bid"
            border={true}
            borderType="curved"
            color={true}
          />
        </NftDescCard>
      </NftDescCardContainer>
    </CardImageWrapper>
  );
};
