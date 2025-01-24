import styled from "styled-components";

export const CookingCard = styled.div`
  background-color: rgb(255, 255, 255);
  margin-top: 4rem;
  width: 55rem;
  height: 27rem;
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
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  padding: 12px 12px 11px 13px;
  margin-right: 1rem;

  color: rgb(255, 255, 255);
  background-color: rgb(255, 0, 0);
`;
export const CookCardDescription = styled.p`
  margin-top: 3rem;
  margin-right: 3rem;
  width: 30rem;
  font-size: 1rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
    overflow: hidden;
  }
`;

export const CookCardImage = styled.div`
  height: 20rem;

  img {
    height: 100%;
    width: 100%;
    border-radius: 1rem;
  }
  @media (max-width: 768px) {
    width: 30rem;
    height: 10rem;
  }
`;
