import styled from "styled-components";

export const WriteReviewButton = styled.button`
  color: #fff;
  padding: 0.5rem 2rem;
  cursor: pointer;
  font-size: 1rem;
  background-color: var(--mainRed);
  border-radius: 20px;
  margin-top: 1rem;

  &:hover {
    background-color: var(--darkRed);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  width: 500px;
  max-width: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalTitle = styled.h1`
  color: var(--mainRed);
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const ModalPoint = styled.div`
  margin-bottom: 1rem;
  color: var(--mainRed);
`;

export const ModalReview = styled.textarea`
  width: 100%;
  height: 100px;
  margin-bottom: 1rem;
  color: gray;
`;

export const ModalButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const InputImage = styled.input`
  display: none;
`;

export const InputImageLabel = styled.label`
  background-color: gray;
  color: white;
  padding: 1rem 1.7rem;
  cursor: pointer;
  margin-right: 1rem;
  display: inline-block;

  &:hover {
    background-color: var(--mainRed);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
export const ModalButton = styled.button`
  color: #fff;
  padding: 0.2rem 2rem;
  cursor: pointer;
  font-size: 1rem;
  background-color: var(--mainRed);
  border-radius: 20px;

  &:hover {
    background-color: var(--darkRed);
  }
`;

export const ImageNameContainer = styled.div`
  margin-right: auto;
  color: var(--mainRed);
`;
