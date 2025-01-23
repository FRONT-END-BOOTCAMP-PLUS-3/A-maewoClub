import styled from "styled-components";

export const Picosisimo = styled.p`
  text-align: center;
  font-size: 14rem;
  font-weight: 1000;
  line-height: 400px;
  letter-spacing: -8px;

  background: linear-gradient(
    90deg,
    rgba(163, 7, 7, 0.82) 35.5%,
    rgba(255, 90, 2, 0.61) 51%,
    rgba(112, 5, 5, 0.82) 65.5%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Wrapper = styled.div`
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 700px;

  background-color: black;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80%;
  height: 500px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  gap: 30px;
`;

export const Title = styled.p`
  font-size: 40px;
  font-weight: 700;

  color: white;
`;

export const Content = styled.p`
  font-size: 30px;
  font-weight: 700;
  line-height: normal;

  color: white;
`;

export const InfoImage = styled.img`
  flex: 1;

  width: 570px;
  height: 400px;
  margin: 40px 20px;
`;
