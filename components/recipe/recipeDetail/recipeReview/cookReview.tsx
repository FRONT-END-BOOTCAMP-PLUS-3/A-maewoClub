import {
  CookReviewContainer,
  CookReviewCard,
  CookReviewUserImg,
  CookReviewCardContainer,
} from "./cookReview.style";

import CookReviewUserDetails from "./cookReviewUserDetails";

export const reviewTestData = [
  {
    userName: "순대위장",
    createdAt: "2023-10-01 03:15:30",
    points: 5.0,
    description:
      "이 요리는 정말 맛있어요!이 요리는 정말 맛있어요!이 요리는 정말 맛있어요!이 요리는 정말 맛있어요!이 요리는 정말 맛있어요!이 요리는 정말 맛있어요!이 요리는 정말 맛있어요!이 요리는 정말 맛있어요!이 요리는 정말 맛있어요!",
  },
  {
    userName: "아짱매워",
    createdAt: "2023-10-02 12:45:00",
    points: 4.5,
    description: "헐 매워요!",
  },
  {
    userName: "아짱매워",
    createdAt: "2023-10-03 12:45:00",
    points: 3.5,
    description: "와우 매워요!",
  },
  {
    userName: "아짱매워",
    createdAt: "2023-10-03 12:45:00",
    points: 3.5,
    description: "정말 매워요!",
  },
];

type ReviewData = {
  userName: string;
  createdAt: string;
  points: number;
  description: string;
};

interface CookReviewProps {
  review: ReviewData[];
}

export const CookReview = ({ review }: CookReviewProps) => {
  const userImgUrl = "/Dfprofile.png";

  return (
    <>
      {review.map((data, index) => (
        <CookReviewContainer key={index}>
          <CookReviewCardContainer>
            <CookReviewCard>
              {userImgUrl && (
                <CookReviewUserImg
                  src={userImgUrl}
                  alt="Avatar"
                  width={40}
                  height={40}
                />
              )}

              <CookReviewUserDetails
                userName={data.userName}
                createdAt={data.createdAt}
                points={data.points}
                description={data.description}
              />
            </CookReviewCard>
          </CookReviewCardContainer>
        </CookReviewContainer>
      ))}
    </>
  );
};
