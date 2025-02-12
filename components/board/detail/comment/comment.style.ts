import styled from "styled-components";

export const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 15px 0;
  background-color: #222;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const Content = styled.p`
  font-size: 16px;
  color: white;
  margin-left: 40px;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;

export const CommentInput = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 20px;
  margin: 20px 0;
  border: 2px solid var(--darkRed);
  border-radius: 20px;
  background-color: var(--black);
  color: white;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  left: 10px;
  top: 10px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

export const Nickname = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: white;
`;

export const CreateDate = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: gray;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: gray;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  border-radius: 5px;
  z-index: 10;

  &:hover {
    background-color: darkred;
  }
`;
