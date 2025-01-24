import styled from "styled-components";

export const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  /* width: 100%; */
  padding: 10px 5px;
`;

export const Content = styled.p`
  display: flex;
  justify-content: start;
  margin-left: 100px;

  font-size: 18px;
  color: white;
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
