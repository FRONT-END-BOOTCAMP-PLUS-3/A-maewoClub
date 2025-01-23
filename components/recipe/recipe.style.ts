import styled from "styled-components";

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  margin: 1rem 0;
  text-align: center;
`;

export const RecipeList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const RecipeSlideContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  overflow: hidden;
`;

export const SlideTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const SlideWrapper = styled.div`
  flex: 0 0 33.33%; /* 슬라이드 크기 1/3 */
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const SlideButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  z-index: 10;

  &.left {
    left: 1rem;
  }
  &.right {
    right: 1rem;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;