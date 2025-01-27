import styled from "styled-components";
import Image from "next/image";

export const CookReviewContainer = styled.div`
  width: 55rem;
  height: auto;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CookReviewCard = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

export const CookReviewUserImg = styled(Image)`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

export const CookReviewUserInfo = styled.div`
  display: flex;
`;

export const CookReviewUserName = styled.h2`
  font-size: 1.1rem;
`;

export const CookReviewUserCreatedAt = styled.p`
  font-size: 1rem;
  margin: 0 1rem;
`;

export const CookReviewUserPoints = styled.div`
  font-size: 1rem;
  color: var(--mainRed);
`;

export const CookReviewUserDescriptionBox = styled.div`
  max-height: 3rem;
  overflow: auto;
`;

export const CookReviewUserDescription = styled.p`
  font-size: 1rem;
  color: #333;
`;

export const CookReviewCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 0.5rem;
  width: 100%;
`;
