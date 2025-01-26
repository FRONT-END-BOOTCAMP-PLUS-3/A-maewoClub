import React, { useState } from "react";
import {
  CookReviewContainer,
  CookButtonContainer,
  CookReviewButton,
  CookReviewCard,
  CookReviewUserImg,
  ReviewMoreButton,
  CookReviewCardContainer,
} from "./cookReview.style";

import CookReviewUserDetails from "./cookReviewUserDetails";

export const CookReview = () => {
  const [activeButton, setActiveButton] = useState<string>("rating");
  const [visibleCards, setVisibleCards] = useState<number>(2);

  const handleButtonClick = (buttonType: string) => {
    setActiveButton(buttonType);
  };

  const handleShowMore = () => {
    setVisibleCards((prev) => prev + 2);
  };

  const reviewTestData = [
    {
      userName: "순대위장",
      createdAt: "2023-10-01 03:15:30",
      points: 5.0,
      description: "이 요리는 정말 맛있어요!",
    },
    {
      userName: "아짱매워",
      createdAt: "2023-10-02 12:45:00",
      points: 4.5,
      description: "정말 매워요!",
    },
    {
      userName: "아짱매워",
      createdAt: "2023-10-03 12:45:00",
      points: 3.5,
      description: "정말 매워요!",
    },
  ];

  const sortedReviews = [...reviewTestData].sort((a, b) => {
    if (activeButton === "rating") {
      return b.points - a.points;
    } else if (activeButton === "latest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    return 0;
  });

  const userImgUrl = "/Dfprofile.png";

  return (
    <CookReviewContainer>
      <CookButtonContainer>
        <CookReviewButton
          isActive={activeButton === "rating"}
          onClick={() => handleButtonClick("rating")}
        >
          별점순
        </CookReviewButton>
        <CookReviewButton
          isActive={activeButton === "latest"}
          onClick={() => handleButtonClick("latest")}
        >
          최신순
        </CookReviewButton>
      </CookButtonContainer>
      <CookReviewCardContainer>
        {sortedReviews.slice(0, visibleCards).map((review, index) => (
          <CookReviewCard key={index}>
            {userImgUrl && (
              <CookReviewUserImg
                src={userImgUrl}
                alt="Avatar"
                width={100}
                height={100}
              />
            )}
            <CookReviewUserDetails
              userName={review.userName}
              createdAt={review.createdAt}
              points={review.points}
              description={review.description}
            />
          </CookReviewCard>
        ))}
      </CookReviewCardContainer>
      {visibleCards < reviewTestData.length && (
        <ReviewMoreButton onClick={handleShowMore}>더 보기</ReviewMoreButton>
      )}
    </CookReviewContainer>
  );
};
