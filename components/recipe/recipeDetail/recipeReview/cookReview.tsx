import { useEffect, useRef, useState } from "react";
import {
  CookReviewContainer,
  CookReviewCard,
  CookReviewUserImg,
  CookReviewCardContainer,
  UpdateButton,
} from "./cookReview.style";
import CookReviewUserDetails from "./cookReviewUserDetails";
import { ReviewModal } from "../reviewModal/reviewModal";

type CookReviewProps = {
  recipeId: number;
  userId: string;
}

type ReviewData = {
  userId: string;
  score: number;
  content: string;
  createdAt: string;
  imageUrl?: string;
};

export const CookReview = ({ recipeId, userId }: CookReviewProps) => {
  const [reviewData, setReviewData] = useState<ReviewData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [selectedFire, setSelectedFire] = useState<number | null>(null);
  const [createdAt, setCreatedAt] = useState<string>("");
  const reviewRef = useRef<HTMLTextAreaElement>(null!);
  const imageRef = useRef<HTMLInputElement>(null!);  

  useEffect(() => {
  const getComments = async (recipeId: number) => {
    try {
      const res = await fetch(`/api/recipe-comments?recipeId=${recipeId}`,
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


 const handleOpenModal = (review: ReviewData) => {
  setIsUpdate(true);
  setSelectedFire(review.score);
  setCreatedAt(review.createdAt);
  setIsModalOpen(true);
};

const handleCloseModal = () => {
  setIsUpdate(false);
  setSelectedFire(null);
  setCreatedAt("");
  setIsModalOpen(false);
};

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
              {data.userId === userId && (
                <UpdateButton onClick={()=>handleOpenModal(data)}>수정</UpdateButton>
              )}             
            </CookReviewCard>
          </CookReviewCardContainer>
        </CookReviewContainer>
      ))}
      <ReviewModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedFire={selectedFire}
        handleFireClick={setSelectedFire}
        reviewRef={reviewRef}
        imageRef={imageRef}
        handleImageChange={() => {}}
        imageName={null}
        userId={userId}
        recipeId={recipeId}
        isUpdate={isUpdate}
        createdAt={createdAt}
      />
    </>
  );
};
