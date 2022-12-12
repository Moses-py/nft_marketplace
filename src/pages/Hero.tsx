import React from "react";
import { Advert } from "../components/advert/Advert";
import { Banner } from "../components/banner/Banner";
import { Navbar } from "../components/navbar/Navbar";
import { NftCarousel } from "../components/nftCarousel/NftCarousel";

export const Hero = () => {
  return (
    <>
      <Navbar />
      <Banner />
      {/* <Advert /> */}
      <NftCarousel />
    </>
  );
};
