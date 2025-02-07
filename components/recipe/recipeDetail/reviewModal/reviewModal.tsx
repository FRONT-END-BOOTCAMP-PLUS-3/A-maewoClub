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
import { useEffect } from "react";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFire: number | null;
  handleFireClick: (index: number) => void;
  handleRegister: () => void;
  reviewRef: React.RefObject<HTMLTextAreaElement>;
  imageRef: React.RefObject<HTMLInputElement>;
  handleImageChange: () => void;
  imageName: string | null;
}

export const ReviewModal = ({
  isOpen,
  onClose,
  selectedFire,
  handleFireClick,
  handleRegister,
  reviewRef,
  imageRef,
  handleImageChange,
  imageName,
}: ReviewModalProps) => {

  
  
  useEffect(() => {
    const postComment = async (id:number) => {
      if (!isOpen) return null;
      try {
        const res = await fetch(`/api/recipe-comments?recipeId=${id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            recipeId: id,
            content: reviewRef.current?.value,
            score: selectedFire,
          }),
        });
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    postComment(1);
  }, [isOpen, selectedFire, reviewRef]);

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
            <ModalButton onClick={handleRegister}>등록</ModalButton>
          </ButtonGroup>
        </ModalButtonContainer>
        <ImageNameContainer>
          {imageName && <p>{imageName}</p>}
        </ImageNameContainer>
      </ModalContent>
    </ModalOverlay>
  );
};
