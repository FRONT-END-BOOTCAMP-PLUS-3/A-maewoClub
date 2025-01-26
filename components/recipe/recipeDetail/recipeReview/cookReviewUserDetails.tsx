import {
  CookReviewUserInfo,
  CookReviewUserName,
  CookReviewUserCreatedAt,
  CookReviewUserPoints,
  CookReviewUserDescriptionBox,
  CookReviewUserDescription,
  ReviewBox,
} from "./cookReview.style";
// import { FaStar } from "react-icons/fa";

type CookReviewUserDetailsProps = {
  userName: string;
  createdAt: string;
  points: number;
  description: string;
};

const CookReviewUserDetails = ({
  userName,
  createdAt,
  points,
  description,
}: CookReviewUserDetailsProps) => {
  return (
    <ReviewBox>
      <CookReviewUserInfo>
        <CookReviewUserName>{userName}</CookReviewUserName>
        <CookReviewUserCreatedAt>{createdAt}</CookReviewUserCreatedAt>
        <CookReviewUserPoints>
          {/* <FaStar /> {points} */}
          {points}
        </CookReviewUserPoints>
      </CookReviewUserInfo>
      <CookReviewUserDescriptionBox>
        <CookReviewUserDescription>{description}</CookReviewUserDescription>
      </CookReviewUserDescriptionBox>
    </ReviewBox>
  );
};

export default CookReviewUserDetails;
