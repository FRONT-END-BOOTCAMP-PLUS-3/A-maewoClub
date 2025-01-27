import styled from "styled-components";
import Image from "next/image";

export const PhotoReviewContainer = styled.div`
  width: 55rem;
  height: 10rem;
  margin: 1rem 0;
`;

export const PhotoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Photo = styled(Image)`
  width: 10rem;
  height: auto;
  object-fit: contain;
`;
