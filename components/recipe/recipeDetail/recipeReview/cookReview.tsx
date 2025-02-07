import { useEffect, useState } from "react";
import {
  CookReviewContainer,
  CookReviewCard,
  CookReviewUserImg,
  CookReviewCardContainer,
} from "./cookReview.style";

import CookReviewUserDetails from "./cookReviewUserDetails";

type CookReviewProps = {
  recipeId: number;
}


export const CookReview = ({ recipeId }: CookReviewProps) => {
  type ReviewData = {
    userId: string;
    score: number;
    content: string;
    createdAt: string;
    imageUrl?: string;
  };

  const [reviewData, setReviewData] = useState<ReviewData[]>([]);
  
  // GET
  useEffect(() => {
  const getComments = async (id: number) => {
    try {
      const res = await fetch(`/api/recipe-comments?recipeId=${id}`,
        {
          method: "GET",
        });
      const data = await res.json();
      console.log("comment : ", data);
      setReviewData(data);

    } catch (error) {
      console.log(error);
    }
  };
  getComments(recipeId);
  }, [recipeId]);


  

  return (
    <>
     {reviewData.map((data, index) => (
        <CookReviewContainer key={index}>
          <CookReviewCardContainer>
            <CookReviewCard>
              {data.imageUrl && (
                <CookReviewUserImg
                  src={data.imageUrl}
                  alt="Avatar"
                  width={40}
                  height={40}
                />
              )}

              <CookReviewUserDetails
                userName={data.userId}
                createdAt={data.createdAt}
                points={data.score}
                description={data.content}
              />
            </CookReviewCard>
          </CookReviewCardContainer>
        </CookReviewContainer>
      ))}
     
    </>
  );
};
