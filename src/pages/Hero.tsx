import React from "react";
import { Banner } from "../components/banner/Banner";
import { Collection } from "../components/collection/Collection";
import { Creator } from "../components/creators/Creator";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import { Newsletter } from "../components/newsletter/Newsletter";
import { NftCarousel } from "../components/nftCarousel/NftCarousel";

export const Hero = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <NftCarousel />
      <Creator />
      <Newsletter />
      <Collection />
      <Footer />
    </>
  );
};
