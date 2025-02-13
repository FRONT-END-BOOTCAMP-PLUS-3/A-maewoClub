import styled from "styled-components";

export const Container = styled.div<{ size: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #999;
  background-color: #fff;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: 2px dashed #ccc;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;