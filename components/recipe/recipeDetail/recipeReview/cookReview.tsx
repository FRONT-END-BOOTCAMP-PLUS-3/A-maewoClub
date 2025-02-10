import { useEffect, useRef, useState } from "react";
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

type CookReviewProps = {
  recipeId: number;
  userId: string;
}

type ReviewData = {
  id: number;
  userId: string;
  score: number;
  content: string;
  createdAt: string;
  imageUrl?: string;
};

export const CookReview = ({ recipeId, userId }: CookReviewProps) => {
  const [reviewData, setReviewData] = useState<ReviewData[]>([]);
  // const [imgData, setImgData] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [selectedFire, setSelectedFire] = useState<number | null>(null);
  const [createdAt, setCreatedAt] = useState<string | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedReviewId, setSelectedReviewId] = useState<number | null>(null);
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
      setReviewData(data);
      // setImgData(data.map((review: ReviewData) => review.imageUrl));
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
  const hasImage = reviewToDelete?.imageUrl ? true : false;

  try {
      await fetch(`/api/recipe-comments?recipeId=${recipeId}`, {
      method: "DELETE",
      body: JSON.stringify({ id: selectedReviewId, hasImage }),
    });
      setReviewData((prevData) => prevData.filter((review) => review.id !== selectedReviewId));
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
                <CookReviewUserImg
                  src={`/public/Dfprofile.png`}
                  alt="Avatar"
                  width={40}
                  height={40}
                />
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
