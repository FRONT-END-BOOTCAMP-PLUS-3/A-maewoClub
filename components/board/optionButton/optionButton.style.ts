import styled from "styled-components";

const OptionButton = styled.button<{ $isActive: boolean }>`
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

  background: ${({ $isActive }) =>
    $isActive ? "var(--point_red, #E50913)" : "#FFF"};
  color: ${({ $isActive }) => ($isActive ? "#FFF" : "#000")};

  &:hover {
    opacity: 0.8;
  }
`;

const DividerBox = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 20px 0; // 위아래 여백 추가
  border-top: 1px solid var(--point_red, #e50913); // 상단 구분선 추가
  border-bottom: 1px solid var(--point_red, #e50913); // 하단 구분선 추가
  width: 100%; // 전체 너비 차지
`;

export { OptionButton, DividerBox };
