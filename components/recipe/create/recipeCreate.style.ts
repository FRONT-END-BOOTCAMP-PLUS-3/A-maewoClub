import styled from "styled-components";

export const RecipeForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  width: 55%;
`;

export const Text = styled.p`
  color: #fff;
`;

export const PreviewImage = styled.p`
  color: #fff;
  width: 100%;
  font-size: 12px;
`;

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
  width: 100%;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid var(--mainRed);
  border-radius: 4px;
  resize: vertical;
  height: 100px;
  width: 100%;
  outline: none;
`;
export const ImageUploadContainer = styled.div`
  width: 40%;
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

export const ButtonStyle = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: flex-end;
`;
