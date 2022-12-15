import React from "react";
import {
  CardCtaContainer,
  CreatorCardAuthor,
  CreatorCardContent,
  CreatorCardImage,
  CreatorCardWrapper,
} from "../../styles/creator/Creator.styles";
import { Button } from "../button/Button";

interface CreatorCardProps {
  url: string;
  author: string;
}

export const CreatorCard: React.FunctionComponent<CreatorCardProps> = ({
  url,
  author,
}) => {
  return (
    <>
      <CreatorCardWrapper>
        <CreatorCardContent>
          <CreatorCardImage src={url} alt="nft_card_small" />
          <CreatorCardAuthor>{author}</CreatorCardAuthor>
        </CreatorCardContent>
        <CardCtaContainer>
          <Button
            text="View details"
            border={true}
            borderType="curved"
            color={true}
            fullWidth={false}
          />
        </CardCtaContainer>
      </CreatorCardWrapper>
    </>
  );
};
