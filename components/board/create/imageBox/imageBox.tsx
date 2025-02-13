"use client";

import { useState } from "react";
import {
  AddFileInput,
  AddFileLabel,
  ImageContainer,
  RedText,
  SubImage,
  SubImageBox,
  ThumbNail,
  ThumbNailPlaceholder,
} from "./imageBox.style";

interface FileInputProps {
  onUpdate: (files: File[]) => void;
}

const ImageBox = ({ onUpdate }: FileInputProps) => {
  const [localFiles, setLocalFiles] = useState<File[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      const updatedFiles = [...localFiles, ...newFiles];
      setLocalFiles(updatedFiles);
      onUpdate(updatedFiles);
    }
  };

  return (
    <>
      <ImageContainer>
        {localFiles[0] ? (
          <ThumbNail
            src={URL.createObjectURL(localFiles[0])}
            alt='main_image'
          />
        ) : (
          <ThumbNailPlaceholder>
            <RedText>이미지 업로드</RedText>
          </ThumbNailPlaceholder>
        )}
        <SubImageBox>
          {localFiles.slice(1).map((file, index) => (
            <SubImage
              key={index}
              src={URL.createObjectURL(file)}
              alt={`sub_image_${index}`}
            />
          ))}
        </SubImageBox>

        <AddFileLabel htmlFor='fileInput'>+ 이미지 추가</AddFileLabel>
        <AddFileInput
          id='fileInput'
          type='file'
          accept='image/png, image/jpeg'
          multiple
          onChange={handleChange}
        />
      </ImageContainer>
    </>
  );
};

export default ImageBox;
