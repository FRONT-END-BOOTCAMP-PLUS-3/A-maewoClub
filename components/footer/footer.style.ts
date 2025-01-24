import styled from "styled-components";

const FooterStyle = styled.footer`
  background-color: rgb(0, 0, 0);
  padding: 20px;
  font-size: 14px;
  width: 100%;
  // position: fixed;
  bottom: 0;

  color: #999;

  p {
    margin: 0;
  }
`;
const HighlightedText = styled.p`
  color: rgb(178, 178, 178);
  font-weight: bold;
  padding-bottom: 10px;
  word-spacing: 10px;
`;

export { FooterStyle, HighlightedText };
