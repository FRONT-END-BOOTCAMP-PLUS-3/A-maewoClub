import styled from "styled-components";

export const Picosisimo = styled.p`
  text-align: center;
  font-size: 12rem;
  font-weight: 800;
  letter-spacing: -10px;

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
  height: 100vh;

  background-color: black;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 500px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 30px;
`;

export const Title = styled.p`
  font-size: 2.5rem;
  font-weight: 700;

  color: white;
`;

export const Content = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: normal;

  color: white;
`;

export const InfoImage = styled.img`
  width: 570px;
  height: 400px;
  margin: 40px 20px;
`;
