import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px 20px;
  border-bottom: 1px solid lightgray;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;

  margin: 10px;
`;

export const Category = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: gray;
  margin: 5px;
`;

export const Input = styled.input`
  padding: 2px;
`;

export const ErrorMsg = styled.p`
  font-size: 14px;
  color: var(--darkRed);
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 20px;
  border: none;
  border-radius: 12px;
  color: white;
  background-color: var(--mainRed);
`;
