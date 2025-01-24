import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  text-decoration: ${props => props.$active ? 'var(--mainRed)' : 'var(--darkRed)'};
   background-color: #fff;
  color: ${props => props.$active ? 'var(--mainRed)' : 'var(--darkRed)'};
  padding: 2px 6px;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;

  &:hover {
    background-color: ${props => props.$active ? 'var(--darkRed)' : 'var(--mainRed)'};
    color: ${props => props.$active ? 'var(--black)' : '#fff'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;