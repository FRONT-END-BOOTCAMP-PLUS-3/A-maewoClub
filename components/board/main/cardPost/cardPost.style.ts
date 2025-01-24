import styled from "styled-components";

export const PostStyle = styled.div`
  display: flex;
  width: 716px;
  height: 155px;
  flex-shrink: 0;
`;

export const PostImage = styled.span`
  display: flex;
  width: 176px;
  height: 155px;
  flex-shrink: 0;

  background: url(<path-to-image>) lightgray 50% / cover no-repeat, #d9d9d9;
`;

export const PostTitle = styled.span`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  gap: 11px;
`;

export const PostPhrase = styled.span`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
`;

export const PostText = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  color: #fff;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
`;
