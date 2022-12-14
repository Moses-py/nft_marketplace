import React from "react";
import { CreatorCardContainer } from "../../styles/creator/Creator.styles";
import { nft_creator_data } from "../../__mock__/creator";
import { Header } from "../header/Header";
import { CreatorCard } from "./CreatorCard";

export const Creator = () => {
  return (
    <>
      <Header
        header="Top Creators"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos nostrum dicta sit libero vel debitis saepe voluptate sint tempore."
      />

      <CreatorCardContainer>
        {nft_creator_data.map((data) => (
          <CreatorCard url={data.url} author={data.author} />
        ))}
      </CreatorCardContainer>
    </>
  );
};
