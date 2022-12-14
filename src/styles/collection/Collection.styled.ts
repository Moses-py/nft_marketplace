import styled from "styled-components";
import { font_size, text_palette } from "../../helpers/colorScheme";

export const CollectionContainer = styled.div`
  padding: 1rem;
  margin-top: 3rem;
  h1 {
    margin-bottom: 1.5rem;
  }
`;

export const CollectionCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 2rem 0;
`;

export const CollectionCardHolder = styled.div`
  width: 230px;
  object-fit: contain;
  background: rgba(134, 155, 223, 0.14);
  border: 2px solid rgba(83, 84, 136, 0.4);
  border-radius: 250px;
  padding: 1rem 1rem 3rem 1rem;
  position: relative;
`;

export const CollectionCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CollectionCardImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 100%;
  filter: drop-shadow(0px 4px 44px rgba(255, 255, 255, 0.08));
`;

export const CollectionCardName = styled.h2`
  color: ${text_palette.light};
  font-weight: 900;
  font-size: ${font_size.small};
`;

export const CollectionCtaText = styled.p`
  color: ${text_palette.purple_01};
  font-size: ${font_size.small};
`;
