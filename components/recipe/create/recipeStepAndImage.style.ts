import styled from "styled-components";

export const StepsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const RecipeCompletionImageUpload = styled.div`
  display: flex;
  gap: 10px;
`;

export const InputImageLabel = styled.label`
  width: 120px;
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

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const ImageNameList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
`;

export const ImageNameItem = styled.li`
  margin: 0.5rem 0;
  font-size: 1rem;
  color: var(--mainRed);
  display: flex;
  align-items: center;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: var(--mainRed);
  cursor: pointer;
  margin-right: 0.5rem;
  font-size: 1rem;

  &:hover {
    color: var(--darkRed);
  }
`;

export const ImagePreviewContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  margin-top: 10px;
`;

export const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;
`;