import React from "react";
import useWindowDimensions from "../../helpers/useWindowDimension";
import {
  NewsletterImage,
  NewsletterWrapper,
  NewspaperFormContainer,
  NewspaperImageContainer,
} from "../../styles/newsletter/Newsletter.styles";
import { Header } from "../header/Header";

export const Newsletter = () => {
  const { width } = useWindowDimensions();
  return (
    <NewsletterWrapper viewport={width as number}>
      <NewspaperImageContainer>
        <NewsletterImage
          viewport={width as number}
          src="\assets\subscribe.png"
          alt="subscribe"
        />
      </NewspaperImageContainer>

      <NewspaperFormContainer>
        <Header
          header="Subscribe and get latest news updates about NFTs"
          subtitle="In commodo auctor eget congue sit. Ultrices eget pretium sit euismod mi id. Risus, aliquam odio posuere ac in in nisl sed augue. Porta aenean egestas malesuada in pulvinar enim viverra."
        />
      </NewspaperFormContainer>
    </NewsletterWrapper>
  );
};
