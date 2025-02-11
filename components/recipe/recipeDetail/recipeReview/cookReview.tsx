import { useState } from "react";
import {
  CookReviewContainer,
  CookReviewCard,
  CookReviewUserImg,
  CookReviewCardContainer,
  UpdateButton,
  DeleteButton,
} from "./cookReview.style";
import CookReviewUserDetails from "./cookReviewUserDetails";
import { ReviewModal } from "../reviewModal/reviewModal";
import { ButtonGroup, ModalButton, ModalContent, ModalOverlay, ModalTitle } from "../reviewModal/reviewModal.style";
import { RecipeCommentDto } from "@/application/recipe-comment/dto/RecipeCommentDto";
import { RecipeCommentImageDto } from "@/application/recipe-comment/dto/RecipeCommentImageDto";

type CookReviewProps = {
  recipeId: number;
  userId: string;
  reviewData: RecipeCommentDto[];
  reviewImgData: RecipeCommentImageDto[];
}

// export type ReviewData = {
//   id: number;
//   userId: string;
//   score: number;
//   content: string;
//   createdAt: string;
//   imageUrl?: string;
// };

export const CookReview = ({ recipeId, userId, reviewData, reviewImgData }: CookReviewProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [selectedFire, setSelectedFire] = useState<number | null>(null);
  const [createdAt, setCreatedAt] = useState<Date | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedReviewId, setSelectedReviewId] = useState<number | null>(null);


 const handleOpenModal = (review: RecipeCommentDto) => {
  setIsUpdate(true);
  setSelectedFire(review.score);
  setCreatedAt(review.createdAt);   
  setSelectedReviewId(review.id);
  setIsModalOpen(true);
};
const handleCloseModal = () => {
  setIsUpdate(false);
  setSelectedFire(null);
  setCreatedAt(null);
  setSelectedReviewId(null);
  setIsModalOpen(false);
};

const handleOpenDeleteModal = (id: number) => {
  setSelectedReviewId(id);
  setIsDeleteModalOpen(true);
};

const handleCloseDeleteModal = () => {
  setSelectedReviewId(null);
  setIsDeleteModalOpen(false);
};

const handleDelete = async () => {
  if (selectedReviewId === null) return;
  const reviewToDelete = reviewData.find((review) => review.id === selectedReviewId);
  //TODO: 이부분 id 에 recipe comment id에 해당되는 이미지 지우기 함수. 타입 고치기
  const hasImage = reviewToDelete?.id ? true : false;

  try {
      await fetch(`/api/recipe-comments?recipeId=${recipeId}`, {
      method: "DELETE",
      body: JSON.stringify({ id: selectedReviewId, hasImage }),
    });
      handleCloseDeleteModal();
  } catch (error) {
    console.error("Error deleting comment:", error);
  }
};


  return (
    <>
    {reviewData.map((data, index) => (
        <CookReviewContainer key={index}>
          <CookReviewCardContainer>
            <CookReviewCard>
            {/* {data.imageUrl && (
                  <CookReviewUserImg
                    src={data.imageUrl || ""}
                    alt="Avatar"
                    width={40}
                    height={40}
                  />
                )} */}
              <CookReviewUserDetails
                userName={data.userId}
                createdAt={data.createdAt}
                points={data.score}
                description={data.content}
                />
              {data.userId === userId && (
                <>
                  <UpdateButton onClick={() => handleOpenModal(data)}>수정</UpdateButton>
                  <DeleteButton onClick={() => handleOpenDeleteModal(data.id)}>삭제</DeleteButton>
                </>
              )}             
            </CookReviewCard>
          </CookReviewCardContainer>
        </CookReviewContainer>
      ))}
      <ReviewModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        userId={userId}
        recipeId={recipeId}
        isUpdate={isUpdate}
        createdAt={createdAt}
        reviewId={selectedReviewId}
      />
      {isDeleteModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>삭제 확인</ModalTitle>
            <p>정말로 이 댓글을 삭제하시겠습니까?</p>
            <ButtonGroup>
              <ModalButton onClick={handleCloseDeleteModal}>취소</ModalButton>
              <ModalButton onClick={handleDelete}>삭제</ModalButton>
            </ButtonGroup>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};
