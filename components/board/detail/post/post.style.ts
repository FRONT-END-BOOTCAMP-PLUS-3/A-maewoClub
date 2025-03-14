import { within } from "@storybook/test";
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

export const InfoWrapper = styled.div`
  display: flex;
  column-gap: 10px;
  margin: 10px 0;
`;

export const SubInfo = styled.p`
  font-size: 12px;
  color: white;
`;

export const Settings = styled.button`
  background: none;
  font-size: 12px;
  color: white;
  padding: 4px;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;
