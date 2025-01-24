import { CookReviewContainer } from "./cookReview.style";
import { CookReviewTitle } from "./cookReview.style";
import { CookReviewButton } from "./cookReview.style";
import { CookReviewCard } from "./cookReview.style";
import { CookReviewUserImg } from "./cookReview.style";
import { CookReviewUserName } from "./cookReview.style";
import { CookReviewUserCreatedAt } from "./cookReview.style";
import { CookReviewUserDescription } from "./cookReview.style";
import { CookReviewUserPoints } from "./cookReview.style";
import { CookReviewUserInfo } from "./cookReview.style";
import { CookReviewUserDescriptionBox } from "./cookReview.style";

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
