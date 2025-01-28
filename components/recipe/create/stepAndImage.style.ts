import styled from "styled-components";

export const StepsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const RecipeCompletionImageUpload = styled.div`
  display: flex;
  gap: 10px;
`;

export const InputImageLabel = styled.label`
  background-color: var(--mainRed);
  color: white;
  border-radius: 1rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  text-align: center;

  &:hover {
    background-color: var(--darkRed);
  }
`;

export const InputImage = styled.input`
  display: none;
`;

export const InputImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
