import styled from "styled-components";
import Image from "next/image";

export const PhotoReviewContainer = styled.div`
  width: 55rem;
  height: 10rem;
  margin-top: 2rem;
`;

export const PhotoReviewTitle = styled.h1`
  color: #fff;
`;

export const Photo = styled(Image)`
  width: 10rem;

  height: auto;
  object-fit: container;
`;
