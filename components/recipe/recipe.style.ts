import styled from "styled-components";

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  margin: 1rem 0;
  text-align: left;
  color: #fff;
`;

export const CreateBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--mainRed); 
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: var(--subRed); /* 더 어두운 톤 */
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

`

export const RecipeList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 2rem;
`;

export const RecipeSlideContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const SlideTrack = styled.div<{ position: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ position }) => `translateX(${position}%)`};
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
  background-color: rgba(255, 255, 255, 0.5);
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
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

export const RecipeCard = styled.div`
  width: 150px;
  height: 150px;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: #555;
`;
