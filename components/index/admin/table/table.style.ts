import styled from "styled-components";
import { FaAngleLeft } from "react-icons/fa6";

export const BackButton = styled(FaAngleLeft)`
  color: white;
  font-size: 24px;

  cursor: pointer;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  margin: 20px 0;
  gap: 18px;
`;

export const CategoryTitle = styled.div`
  font-size: 48px;
  font-weight: 700;
  color: var(--mainRed);
`;

export const TableContainer = styled.div`
  height: 70vh;
  overflow-x: auto;
  overflow-y: auto;
  color: #a0a0a0;
  padding: 0 10px;

  &::-webkit-scrollbar {
    width: 10px;
    height: 5px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid white;
`;

export const TableData = styled.td`
  padding: 24px;
  text-align: center;
  border-bottom: 1px solid white;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  color: white;
  background-color: #323232;
  padding: 5px 10px;

  border: none;
  border-radius: 18px;
  cursor: pointer;

  &:hover {
    background-color: var(--darkRed);
  }
`;
