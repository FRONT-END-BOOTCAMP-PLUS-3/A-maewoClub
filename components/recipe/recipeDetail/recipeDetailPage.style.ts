import styled from "styled-components";

export const RecipeDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2rem 45rem 0 0;
`;

export const SubTitle = styled.h1`
  color: var(--mainRed);
`;

export const ReviewMoreButton = styled.button`
  color: #fff;
  padding: 0.5rem 10rem;
  cursor: pointer;
  font-size: 1rem;
  background-color: var(--mainRed);
  border-radius: 20px;
  margin-top: 1rem;

  &:hover {
    background-color: var(--darkRed);
  }
`;

export const WriteReviewButton = styled.button`
  padding: 0.5rem 10rem;
  cursor: pointer;
  font-size: 1rem;
  color: var(--mainRed);
  background-color: #fff;
  border-radius: 20px;
  margin-top: 6rem;

  &:hover {
    color: #fff;
    background-color: var(--darkRed);
  }
`;
