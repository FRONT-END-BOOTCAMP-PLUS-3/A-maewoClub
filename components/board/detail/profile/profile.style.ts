import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  align-items: center;

  padding: 10px;
  column-gap: 20px;
`;

export const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 70px;

  overflow: auto;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const Nickname = styled.p`
  font-size: 18px;
  font-weight: 400;

  color: white;
`;

export const CreateDate = styled.p`
  font-size: 18px;
  font-weight: 400;

  color: gray;
`;
