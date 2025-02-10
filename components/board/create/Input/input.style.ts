import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: start;
  width: 100%;

  gap: 15px;
  margin: 20px 0;
`;

export const CategoryName = styled.p`
  color: white;
  font-size: 16px;
  white-space: nowrap;
`;

export const TitleInputBox = styled.input`
  width: 100%;
  border: 2px solid var(--darkRed);
  border-radius: 18px;
  padding: 4px;

  background-color: black;
  color: white;
`;

export const ContentInputBox = styled.textarea`
  width: 100%;
  height: 300px;

  border: 2px solid var(--darkRed);
  border-radius: 18px;
  padding: 4px;

  background-color: black;
  color: white;
`;
