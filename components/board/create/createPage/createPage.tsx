"use client";
import Button from "@/components/board/button/button";
import ImageBox from "@/components/board/create/imageBox/imageBox";
import ContentInput from "@/components/board/create/Input/contentInput";
import TitleInput from "@/components/board/create/Input/titleInput";
import {
  ButtonWrapper,
  Container,
  ContentandImage,
  ContentWrapper,
  FilterGroupWrapper,
} from "./createPage.style";
import FilterButtonGroup from "../../optionButton/optionButton";

interface CreatePageProps {
  onTitleUpdate: (updatedTitle: string) => void;
  onContentUpdate: (updatedContent: string) => void;
  onFileUpdate: (updatedFiles: File[]) => void;
  onSubmit: () => void;
  onTagUpdate: (selectedTagId: number) => void;
}

const CreatePage = ({
  onTitleUpdate,
  onContentUpdate,
  onFileUpdate,
  onSubmit,
  onTagUpdate,
}: CreatePageProps) => {
  return (
    <Container>
      <ContentandImage>
        <ContentWrapper>
          <TitleInput onUpdate={onTitleUpdate} />
          <ContentInput onUpdate={onContentUpdate} />
        </ContentWrapper>
        <ImageBox onUpdate={onFileUpdate} />
      </ContentandImage>
      <FilterGroupWrapper>
        <FilterButtonGroup onFilterChange={onTagUpdate} />
      </FilterGroupWrapper>
      <ButtonWrapper onClick={onSubmit}>
        <Button>등록</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default CreatePage;
