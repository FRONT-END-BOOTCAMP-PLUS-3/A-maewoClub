import styled from "styled-components";

export const TagStyle = styled.span`
  display: inline-block;
  background-color: #fff; 
  color: var(--mainRed); 
  font-size: 0.875rem;  
  font-weight: 500; 
  padding: 4px 8px; 
  border-radius: 12px; 
  border: 1px solid #ff4d4d;
  white-space: nowrap; 
  margin-right: 8px; 
  margin-bottom:2px;
  cursor: default; 
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #ff4d4d;
    color: #fff;
  }
`;


export const TagContainer = styled.div`
  width:100%
`

export const Tag = styled.span`
  background: var(--mainRed);
  color: #fff;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 30px;
  display: inline-block;

`
