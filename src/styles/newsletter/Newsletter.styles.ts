import styled from "styled-components";

interface NewsletterProps {
  viewport: number;
}

export const NewsletterWrapper = styled.div<NewsletterProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.viewport < 768 ? "column" : "row")};
  padding: 1rem;
`;
export const NewspaperImageContainer = styled.div`
  padding: 1rem;
  position: relative;
`;

export const NewspaperFormContainer = styled.div`
  h1 {
    text-align: left;
  }
  p {
    margin: 0;
    text-align: left;
  }
`;

export const NewsletterImage = styled.img<NewsletterProps>`
  width: ${(props) => (props.viewport < 768 ? "90vw" : "45vw")};
  object-fit: contain;
`;
