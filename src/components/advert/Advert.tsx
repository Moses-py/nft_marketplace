import React from "react";
import useWindowDimensions from "../../helpers/useWindowDimension";
import { AdvertImage, AdvertList } from "../../styles/advert/Advert.styles";

export const Advert = () => {
  const { width } = useWindowDimensions();
  return (
    <AdvertList viewport={width as number}>
      <AdvertImage src="\assets\icons\Blocktual.svg" alt="advert" />
      <AdvertImage src="\assets\icons\Jackpot.svg" alt="advert" />
      <AdvertImage src="\assets\icons\Minicoin.svg" alt="advert" />
      <AdvertImage src="\assets\icons\NextPlanet.svg" alt="advert" />
      <AdvertImage src="\assets\icons\TopUp.svg" alt="advert" />
    </AdvertList>
  );
};
