import styled from "styled-components";

export const Container = styled.div`
  background-color: #f8f9fa;
  margin-top: 5rem;
  max-width: 900px;
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
`;
export const Title = styled.h2`
  color: var(--mainRed);
`;

export const IngredientContainer = styled.div`
  padding: 1rem;
`;

export const IngredientList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const IngredientItem = styled.li`
  display: flex;
  justify-content: space-around;
  width: calc(50% - 1rem);
  border-bottom: 1px solid var(--mainRed);
`;

export const IngredientName = styled.p`
  font-size: 1.2rem;
  margin: 0;
`;

export const IngredientAmount = styled.p`
  font-size: 1.2rem;
  margin: 0;
`;
