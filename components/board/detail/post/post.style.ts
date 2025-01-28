import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: 0 auto;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;

  width: 100%;
  gap: 10px;
`;

export const Title = styled.p`
  font-size: 32px;
  color: white;
`;

export const Content = styled.p`
  font-size: 20px;
  color: white;
`;

export const Image = styled.div`
  width: 300px;
  height: 200px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const SubInfo = styled.p`
  font-size: 12px;
  color: white;
`;
