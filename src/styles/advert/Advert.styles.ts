import styled from "styled-components";

interface AdvertStyleProps {
  viewport: number;
}

export const AdvertList = styled.div<AdvertStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin: 10rem 0;
  flex-wrap: wrap;
`;

export const AdvertImage = styled.img``;
