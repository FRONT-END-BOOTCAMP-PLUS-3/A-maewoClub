import styled from "styled-components";

export const PreviewListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const PreviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const PreviewImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
`;

export const FileName = styled.span`
  font-size: 12px;
  margin-top: 5px;
  color: #333;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;