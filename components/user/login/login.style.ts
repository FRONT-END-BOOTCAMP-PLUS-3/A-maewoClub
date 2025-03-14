import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  text-align: center;
`;

export const ModalCloseButton = styled.button`
  margin-top: 20px;
  padding: 5px 10px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;

export const LoginBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 220px;
  height: 60px;
  padding: 0 10px;
  border-radius: 12px;
  margin: 20px;

  cursor: pointer;
`;

export const SocialName = styled.p`
  font-size: 18px;
`;
