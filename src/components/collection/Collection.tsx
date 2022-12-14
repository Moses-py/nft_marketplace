import React from "react";
import {
  CollectionCardWrapper,
  CollectionContainer,
} from "../../styles/collection/Collection.styled";
import { nft_collection_data } from "../../__mock__/collection";
import { Header } from "../header/Header";
import { CollectionCard } from "./CollectionCard";

export const Collection = () => {
  return (
    <CollectionContainer>
      <Header
        header="NFTs Collections"
        subtitle="Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed augue."
      />
      <CollectionCardWrapper>
        {nft_collection_data.map((data) => {
          return <CollectionCard url={data} />;
        })}
      </CollectionCardWrapper>
    </CollectionContainer>
  );
};
