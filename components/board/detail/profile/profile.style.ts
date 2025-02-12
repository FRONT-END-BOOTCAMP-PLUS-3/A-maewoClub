import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  align-items: center;

  padding: 10px;
  column-gap: 20px;
`;

export const ProfileImage = styled.div`
  border-radius: 70px;
  border: 2px solid white;
  overflow: auto;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const Nickname = styled.p`
  font-size: 22px;
  font-weight: 400;

  color: white;
`;

export const CreateDate = styled.p`
  font-size: 18px;
  font-weight: 400;

  color: gray;
`;
