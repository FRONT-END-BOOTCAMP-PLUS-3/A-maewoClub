import styled from "styled-components";

export const Text = styled.p`
  color: #fff;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
  margin: 0 auto;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid var(--mainRed);
  border-radius: 4px;
  outline: none;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid var(--mainRed);
  border-radius: 4px;
  resize: vertical;
  height: 100px;
  outline: none;
`;

export const Button = styled.button`
  padding: 10px 15px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: var(--mainRed);
  color: white;
  cursor: pointer;

  &:hover {
    background-color: var(--subRed);
  }
`;

export const IngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const IngredientInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid var(--mainRed);
  border-radius: 4px;
  flex: 1;
  outline: none;
`;