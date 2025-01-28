import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 450px;

  margin: 20px;
  gap: 15px;
`;

export const ThumbNail = styled.img`
  width: 100%;
  height: 200px;

  border-radius: 20px;
  border: 1px solid var(--mainRed);
  background: #313131;
`;

export const ThumbNailPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 200px;

  border-radius: 20px;
  border: 1px solid var(--mainRed);
  background: #313131;
`;

export const RedText = styled.p`
  font-size: 18px;
  color: var(--mainRed);
`;

export const SubImageBox = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;

  gap: 20px;
`;

export const SubImage = styled.img`
  width: 28%;
  height: 80px;

  background: #313131;
  border-radius: 20px;
  border: 1px solid var(--mainRed);
`;

export const AddFileLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;

  color: var(--mainRed);
  border-radius: 20px;
  border: 1px solid var(--mainRed);
  background: #313131;

  cursor: pointer;
`;

export const AddFileInput = styled.input`
  display: none;
`;
