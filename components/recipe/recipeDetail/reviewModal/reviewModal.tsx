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
import { useRef, useState } from "react";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
  recipeId: number;
  isUpdate: boolean;
  createdAt: string | null;
  reviewId: number | null;
}

export const ReviewModal = ({
  isOpen,
  onClose,
  userId,
  recipeId,
  isUpdate,
  createdAt,
  reviewId,
}: ReviewModalProps) => {
  const [fire, setFire] = useState<number | null>(null);
  const reviewRef = useRef<HTMLTextAreaElement>(null!);
  const imageRef = useRef<HTMLInputElement>(null!);
  const [imageName, setImageName] = useState<string | null>(null);

  const handleImageChange = () => {
    const image = imageRef.current?.files?.[0];
    if (image) {
      setImageName(image.name);
    }
  };

  const postComment = async () => {
    try {
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("content", reviewRef.current?.value || "");
      formData.append("score", fire?.toString() || "");

      if (imageRef.current?.files?.[0]) {
        formData.append("image", imageRef.current.files[0]);
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

  const updateComment = async () => {
    try {
      const existingData = {
        id: reviewId?.toString() || "",
        createdAt: createdAt?.toString() || "",
        userId,
        content: reviewRef.current?.value || "",
        score: fire?.toString() || "",
      };

      const formData = new FormData();
      Object.entries(existingData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      if (imageRef.current?.files?.[0]) {
        formData.append("image", imageRef.current.files[0]);
      }

      await fetch(`/api/recipe-comments?recipeId=${recipeId}`, {
        method: "PUT",
        body: formData,
      });
      
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    if (recipeId && userId) {
      if (isUpdate) {
        await updateComment();
      } else {
        await postComment();
      }
    } else {
      console.error("Recipe ID or User ID is missing");
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
              color={fire !== null && fire >= index ? "var(--mainRed)" : "gray"}
              onClick={() => setFire(index)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </ModalPoint>
        <ModalReview ref={reviewRef} placeholder="얼마나 매운지 의견 남겨주세요" />

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
            <ModalButton onClick={handleSubmit}>등록</ModalButton>
          </ButtonGroup>
        </ModalButtonContainer>
        <ImageNameContainer>{imageName && <p>{imageName}</p>}</ImageNameContainer>
      </ModalContent>
    </ModalOverlay>
  );
};
