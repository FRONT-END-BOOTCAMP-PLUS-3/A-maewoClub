import styled from "styled-components";
import Image from "next/image";

export const PhotoReviewContainer = styled.div`
  width: 55rem;
  height: auto;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  position: relative;
`;

export const PhotoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const PhotoWrapper = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  flex-shrink: 0;
`;

export const Photo = styled(Image)`
  object-fit: contain;
`;

export const NavigationButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: black;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  &:first-of-type {
    left: 0;
  }

  &:last-of-type {
    right: 0;
  }
`;
