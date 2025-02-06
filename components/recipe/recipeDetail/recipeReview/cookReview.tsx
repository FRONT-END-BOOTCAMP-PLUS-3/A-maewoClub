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
  const [reviewData, setReviewData] = useState([]);

  const userImgUrl = "/Dfprofile.png";



  // GET
  useEffect(() => {
  const getComments = async (id: number) => {
    try {
      const res = await fetch(`/api/recipe-comments?recipeId=${id}`);
      const data = await res.json();
      console.log("comment : ", data);
      setReviewData(data.recipeComments);

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
              {userImgUrl && (
                <CookReviewUserImg
                  src={userImgUrl}
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
