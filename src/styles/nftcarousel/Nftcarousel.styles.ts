import styled from "styled-components";
import { font_size, text_palette } from "../../helpers/colorScheme";
interface NftcarouselStyleProps {
  viewport: number;
}

export const CarouselWrapper = styled.div<NftcarouselStyleProps>`
  margin: ${(props) => (props.viewport < 768 ? "3rem 1rem" : "5rem 0")};
  padding: 1rem;
`;

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;
export const CardImageWrapper = styled.div<NftcarouselStyleProps>`
  position: relative;
  display: flex;
  justify-content: center;
  height: 450px;
  margin-bottom: 5rem;
  gap: 2rem;
`;
export const CardImage = styled.img<NftcarouselStyleProps>`
  width: 100%;
  object-fit: contain;
  border-radius: 5px;
`;

export const NftDescCardContainer = styled.div`
  position: absolute;
  bottom: -5rem;
  display: flex;
  justify-content: center;
  align=items: center;
  width: 90%;
  background-color: ${text_palette.light};
  border-radius: 20px;
`;

export const NftDescCard = styled.div`
  width: 80%;
  padding: 1rem 0;
`;

export const NftDescCardDetails = styled.div`
  padding: 0.5rem 0;
`;
export const NftDescCardName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    color: ${text_palette.dark};
    font-weight: 900;
    font-size: ${font_size.small};
  }
`;

export const NftDescCardAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  img {
    width: 30px;
    object-fit: contain;
    border-radius: 100%;
  }

  p {
    color: ${text_palette.dark};
    font-weight: 500;
  }
`;
