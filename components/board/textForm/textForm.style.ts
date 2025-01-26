import styled from "styled-components";

const TextFormContainer = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  align-items: flex-start;
  gap: 13px;
`;

const Title = styled.span`
  color: #fff;
  font-family: ".SF Georgian";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
`;

const Content = styled.p`
  color: #fff;
  font-family: ".SF Georgian";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
`;

export { TextFormContainer, Title, Content };
