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
  object-fit: cover;
  border-radius: 50%;
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

export const SortButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 45rem;
  padding-bottom: 0.5rem;
  overflow: hidden;
`;
export const SortButton = styled.button`
  color: white;
  padding: 5px 20px;
  cursor: pointer;
  font-size: 1rem;
  background-color: var(--darkRed);

  &.active {
    background-color: var(--mainRed);
  }

  &:hover {
    background-color: #800000;
  }
`;

export const UpdateButton = styled.button`
  margin-left: 1rem;
  color: white;
  padding: 5px 5px;
  cursor: pointer;
  font-size: 1rem;
  background-color: var(--mainRed); 
`

export const DeleteButton = styled.button`
  color: white;
  padding: 5px 5px;
  cursor: pointer;
  font-size: 1rem;
  background-color: var(--darkRed); 
`;