'use client'
import { CookReviewContainer ,CookReviewTitle,CookReviewButton, CookReviewCard,CookReviewUserName ,CookReviewUserImg,CookReviewUserPoints, CookReviewUserCreatedAt, CookReviewUserDescription,CookReviewUserInfo, CookReviewUserDescriptionBox } from "./cookReview.style";

export const CookReview = () => {
  return (
    <CookReviewContainer>
      <CookReviewTitle></CookReviewTitle>
      <CookReviewButton />
      <CookReviewCard></CookReviewCard>
      <CookReviewUserImg></CookReviewUserImg>
      <CookReviewUserInfo>
        <CookReviewUserName></CookReviewUserName>
        <CookReviewUserCreatedAt></CookReviewUserCreatedAt>
        <CookReviewUserPoints></CookReviewUserPoints>
      </CookReviewUserInfo>
      <CookReviewUserDescriptionBox>
        <CookReviewUserDescription></CookReviewUserDescription>
      </CookReviewUserDescriptionBox>
    </CookReviewContainer>
  );
};
