import styled from "styled-components";
import { font_size, text_palette } from "../../helpers/colorScheme";

interface FooterStyleProps {
  viewport: number;
}

export const FooterContainer = styled.div<FooterStyleProps>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: flex-start;
  padding: 2rem 3rem;
  gap: ${(props) => (props.viewport < 600 ? "50px" : "150px")};
  margin-top: 6rem;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FooterBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  p {
    text-align: left;
  }
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 13px;
  color: ${text_palette.light};
`;

export const FooterHeader = styled.h2`
  color: ${text_palette.light};
  font-size: ${font_size.small};
  font-weight: 900;
`;

export const FooterLink = styled.p`
  color: ${text_palette.light};
  font-size: ${font_size.small};
  font-weight: 400;
`;

export const FooterText = styled.p`
  color: ${text_palette.light};
  font-size: ${font_size.small};
  font-weight: 400;
  line-height: 2;
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(83, 84, 136, 0.3);
  width: 100%;
`;
