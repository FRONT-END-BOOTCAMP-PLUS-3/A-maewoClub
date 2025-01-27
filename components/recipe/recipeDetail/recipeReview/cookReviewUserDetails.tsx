"use client";

import {
  CookReviewUserInfo,
  CookReviewUserName,
  CookReviewUserCreatedAt,
  CookReviewUserPoints,
  CookReviewUserDescriptionBox,
  CookReviewUserDescription,
  ReviewBox,
} from "./cookReview.style";
import { FaFire } from "react-icons/fa";

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
          {Array.from({ length: Math.floor(points) }).map((_, index) => (
            <FaFire key={index} />
          ))}
        </CookReviewUserPoints>
      </CookReviewUserInfo>
      <CookReviewUserDescriptionBox>
        <CookReviewUserDescription>{description}</CookReviewUserDescription>
      </CookReviewUserDescriptionBox>
    </ReviewBox>
  );
};

export default CookReviewUserDetails;
