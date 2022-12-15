import styled from "styled-components";
import { font_size, text_palette } from "../../helpers/colorScheme";

export const CreatorContainer = styled.div`
  padding: 1rem;
`;

export const CreatorCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 2rem 0;
`;

export const CreatorCardWrapper = styled.div`
  width: 250px;
  border-radius: 5px;
  background: rgba(134, 155, 223, 0.14);
  border: 2px solid rgba(83, 84, 136, 0.4);
  padding: 1rem 1rem 3rem 1rem;
  position: relative;
`;

export const CreatorCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CreatorCardImage = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 100%;
  filter: drop-shadow(0px 4px 44px rgba(255, 255, 255, 0.08));
`;

export const CreatorCardAuthor = styled.h2`
  color: ${text_palette.light};
  font-weight: 900;
  font-size: ${font_size.small};
`;

export const CardCtaContainer = styled.div`
  position: absolute;
  bottom: -1.5rem;
  width: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
