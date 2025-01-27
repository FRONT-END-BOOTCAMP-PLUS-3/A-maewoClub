"use client";

import { FaFire } from "react-icons/fa";
import {
  ButtonGroup,
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
}

export const ReviewModal = ({ isOpen, onClose }: ReviewModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>요리 후기</ModalTitle>
        <ModalPoint>
          <FaFire size={40} color={`var(--main)`} />
          <FaFire size={40} color="gray" />
          <FaFire size={40} color="gray" />
          <FaFire size={40} color="gray" />
          <FaFire size={40} color="gray" />
        </ModalPoint>
        <ModalReview defaultValue="얼마나 매운지 의견 남겨주세요" />

        <ModalButtonContainer>
          <InputImageLabel htmlFor="file-upload">+</InputImageLabel>
          <InputImage id="file-upload" type="file" accept="image/*" />
          <ButtonGroup>
            <ModalButton onClick={onClose}>취소</ModalButton>
            <ModalButton>등록</ModalButton>
          </ButtonGroup>
        </ModalButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};
