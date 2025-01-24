import styled from "styled-components";

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.2);
  margin-top: 4rem;
  border: 2px solid var(--original_red, #a90d18);
  color: rgb(255, 255, 255);

  width: 40rem;
  height: 30rem;
  @media (max-width: 768px) {
    width: 30rem;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
`;

export const MainImageWrapper = styled.div`
  width: 100%;

  img {
    height: 17rem;
    width: 100%;
    object-fit: cover;
  }
`;

export const StepImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -3rem;

  img {
    border-radius: 100%;
  }
`;

export const RecipeUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserName = styled.p`
  font-size: 18px;
`;

export const CardTitle = styled.h2``;

export const CardDescription = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  width: 35rem;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 768px) {
    width: 15rem;
  }
`;
