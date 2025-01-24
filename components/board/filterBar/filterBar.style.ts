import styled from "styled-components";

const FilterBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0);
`;

const FilterButton = styled.button<{ isActive: boolean }>`
  display: inline-flex;
  padding: 5px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  background: var(--point_red, #e50913);
  box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: ${({ isActive }) =>
    isActive ? "var(--point-red, #e50914)" : "var(--black-red, #8b0000)"};
  color: #fff;

  &:hover {
    background-color: ${({ isActive }) =>
      isActive
        ? "var(--dark-point-red, #d40812)"
        : "var(--dark-black-red, #5a0000)"};
  }
`;

export { FilterBarContainer, FilterButton };
