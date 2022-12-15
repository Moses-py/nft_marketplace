import React from "react";
import {
  CollectionCardContent,
  CollectionCardHolder,
  CollectionCardImage,
  CollectionCardName,
  CollectionCtaText,
} from "../../styles/collection/Collection.styled";

interface CollectionCardProps {
  url: string;
}

export const CollectionCard: React.FunctionComponent<CollectionCardProps> = ({
  url,
}) => {
  return (
    <>
      <CollectionCardHolder>
        <CollectionCardContent>
          <CollectionCardImage src={url} alt="collection card" />
          <CollectionCardName>Broken Collection</CollectionCardName>
          <CollectionCtaText>View Collection</CollectionCtaText>
        </CollectionCardContent>
      </CollectionCardHolder>
    </>
  );
};
