import styled, { keyframes } from "styled-components";

interface ButtonProps {
  active?: boolean;
}

export const ScrollContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
`;

export const Picosisimo = styled.p`
  text-align: center;
  font-size: clamp(6rem, 10vw, 12rem);
  font-weight: 800;
  letter-spacing: -10px;
  white-space: nowrap;
  background: linear-gradient(
    90deg,
    rgba(163, 7, 7, 0.82) 35.5%,
    rgba(255, 90, 2, 0.61) 51%,
    rgba(112, 5, 5, 0.82) 65.5%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: text-shadow 0.3s ease;

  &:hover {
    text-shadow: 0 0 5px var(--darkRed);
  }

  @media (max-width: 768px) {
    font-size: 6rem;
    letter-spacing: -5px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 500px;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

export const Title = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  font-family: "Pretendard", sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Content = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: normal;
  color: white;
  font-family: "Pretendard", sans-serif;
  white-space: pre-line;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const InfoImage = styled.img`
  width: 570px;
  height: 400px;
  margin: 40px 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin: 20px 0;
  }
`;

const expandAnimation = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

export const Button = styled.div<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(props) => (props.$active ? "40px" : "20px")};
  height: 8px;
  background-color: ${(props) => (props.$active ? "lightgray" : "gray")};
  font-size: 0.8rem;
  margin-bottom: 10px;
  color: white;

  animation: ${expandAnimation} 0.5s ease-in-out forwards;
  transition: width 0.3s ease;
  transform-origin: left;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  gap: 2px;
  top: 50%;
  left: 15%;
  transform: translateY(-50%);
  z-index: 1000;

  @media (max-width: 768px) {
    top: auto;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: row;
    gap: 5px;
  }
`;
