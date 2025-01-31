import { FileName, PreviewImage, PreviewItem, PreviewListContainer, RemoveButton } from "./ImagePreview.style";

interface ImagePreviewListProps {
  images: { name: string; url: string }[];
  onRemove: (index: number) => void;
}

const ImagePreviewList = ({ images, onRemove }: ImagePreviewListProps) => {
  return (
    <PreviewListContainer>
      {images.map((image, index) => (
        <PreviewItem key={index}>
          <PreviewImage src={image.url} alt={image.name} />
          <FileName>{image.name}</FileName>
          <RemoveButton onClick={() => onRemove(index)}>x</RemoveButton>
        </PreviewItem>
      ))}
    </PreviewListContainer>
  );
};

export default ImagePreviewList;