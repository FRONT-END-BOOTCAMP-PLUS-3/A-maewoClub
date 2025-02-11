import { useState, useRef } from "react";
import { Container, HiddenInput, ImagePreview } from "./uploadImage.style";

interface UploadImageProps {
  size?: number;
  onImageUpload?: (file: File | null) => void; 
}

const UploadImage = ({ size = 150, onImageUpload }: UploadImageProps) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      if (onImageUpload) {
        onImageUpload(file);
      }
    }
  };

  return (
    <Container size={size} onClick={() => fileInputRef.current?.click()}>
      {imagePreview ? (
        <ImagePreview src={imagePreview} alt="Uploaded Preview" />
      ) : (
        <div>이미지 업로드</div>
      )}
      <HiddenInput
        type="file"
        ref={fileInputRef}
        accept="image/*"
        onChange={handleImageChange}
      />
    </Container>
  );
};

export default UploadImage;