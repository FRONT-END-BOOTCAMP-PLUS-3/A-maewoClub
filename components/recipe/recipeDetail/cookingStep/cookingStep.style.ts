import styled from "styled-components";
import Image from "next/image";

export const CookingCard = styled.div`
  background-color: rgb(255, 255, 255);
  margin-top: 4rem;
  width: 55rem;
  height: auto;
  padding: 1rem;
  border-radius: 1rem;
  @media (max-width: 768px) {
    width: 30rem;
  }

  display: flex;
  justify-content: space-between;
`;

export const CookCardNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;

  padding: 12px 12px 11px 13px;

  color: rgb(255, 255, 255);
  background-color: rgb(255, 0, 0);
`;
export const CookCardDescription = styled.p`
  margin: 3rem 3rem 0rem 1rem;
  width: 30rem;
  font-size: 1rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
    overflow: hidden;
  }
`;

export const CookCardImage = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;

  @media (max-width: 768px) {
    width: 30rem;
    height: 10rem;
  }
`;
export const CookStepImage = styled(Image)`
  border-radius: 1rem;
  object-fit: cover;
`;
