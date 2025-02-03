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

  margin: 30px 0;
  gap: 18px;
`;

export const CategoryTitle = styled.div`
  font-size: 48px;
  font-weight: 700;
  color: var(--mainRed);
`;

export const TableContainer = styled.div`
  overflow-x: auto;
  padding: 0 5rem 2rem 5rem;
  color: #a0a0a0;
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
