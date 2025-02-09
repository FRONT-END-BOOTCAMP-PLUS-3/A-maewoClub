"use client";

import { FaFire } from "react-icons/fa";
import {
  ButtonGroup,
  ImageNameContainer,
  InputImage,
  InputImageLabel,
  ModalButton,
  ModalButtonContainer,
  ModalContent,
  ModalOverlay,
  ModalPoint,
  ModalReview,
  ModalTitle,
} from "./reviewModal.style";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFire: number | null;
  handleFireClick: (index: number) => void;
  reviewRef: React.RefObject<HTMLTextAreaElement>;
  imageRef: React.RefObject<HTMLInputElement>;
  handleImageChange: () => void;
  imageName: string | null;
  userId: string;
  recipeId: number;
}

export const ReviewModal = ({
  isOpen,
  onClose,
  selectedFire,
  handleFireClick,
  reviewRef,
  imageRef,
  handleImageChange,
  imageName,
  userId,
  recipeId,
}: ReviewModalProps) => {

  const postComment = async () => {
    /* 
    try {
      const res = await fetch(`/api/recipe-comments?recipeId=${recipeId}`, {
        method: "POST",
        body: JSON.stringify({
          userId: userId,
          content: reviewRef.current?.value,
          score: selectedFire,
        }),
      });
      const data = await res.json();
      console.log(data);
      onClose();
    } catch (error) {
      console.log(error);
    } 
    */
    try {
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("content", reviewRef.current?.value || "");
      formData.append("score", selectedFire?.toString() || "");

      if (imageRef.current?.files?.[0]) {
        const file = imageRef.current.files[0];
        formData.append("image", file);
      }
        await fetch(`/api/recipe-comments?recipeId=${recipeId}`, {
          method: "POST",
          body: formData,
        });
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  

  if (!isOpen) return null; 


  return (
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>요리 후기</ModalTitle>
        <ModalPoint>
          {[...Array(5)].map((_, index) => (
            <FaFire
              key={index}
              size={40}
              color={
                selectedFire !== null && selectedFire >= index
                  ? "var(--mainRed)"
                  : "gray"
              }
              onClick={() => handleFireClick(index)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </ModalPoint>
        <ModalReview
          ref={reviewRef}
          placeholder="얼마나 매운지 의견 남겨주세요"
        />

        <ModalButtonContainer>
          <InputImageLabel htmlFor="file-upload">이미지 업로드</InputImageLabel>
          <InputImage
            id="file-upload"
            type="file"
            accept="image/*"
            ref={imageRef}
            onChange={handleImageChange}
          />
          <ButtonGroup>
            <ModalButton onClick={onClose}>취소</ModalButton>
            <ModalButton onClick={postComment}>등록</ModalButton>
          </ButtonGroup>
        </ModalButtonContainer>
        <ImageNameContainer>
          {imageName && <p>{imageName}</p>}
        </ImageNameContainer>
      </ModalContent>
    </ModalOverlay>
  );
};
