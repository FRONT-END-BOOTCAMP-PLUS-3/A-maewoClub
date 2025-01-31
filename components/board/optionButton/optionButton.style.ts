import styled from "styled-components";

const OptionButton = styled.button<{ isActive: boolean }>`
  display: flex;
  padding: 5px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

  width: auto;
  min-width: 55px;

  background: ${({ isActive }) =>
    isActive ? "var(--point_red, #E50913)" : "#FFF"};
  color: ${({ isActive }) => (isActive ? "#FFF" : "#000")};
  &:hover {
    opacity: 0.8;
  }
`;

export { OptionButton };
