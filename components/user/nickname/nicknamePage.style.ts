import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  width: 100%;
  height: 60vh;
  margin-top: 30px;
`;

export const Command = styled.p`
  margin: 20px;
  font-size: 42px;
  color: white;
`;

export const Input = styled.input`
  padding: 6px 20px;
  font-size: 18px;

  border-radius: 8px;
`;

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 20px 0;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 16px;
  border-radius: 8px;

  background-color: var(--darkRed);
  color: white;
`;
