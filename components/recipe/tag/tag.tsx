"use client"
import { useEffect, useState } from "react";
import { TagContainer, TagStyle } from "./tag.style";
import { RecipeTagDto } from "@/application/recipe-tag/dto/RecipeTagDto";

const Tag = () => {
  const [tagData, setTagData] = useState<RecipeTagDto[]>();

  useEffect(() => {
    const fetchTag = async () => {
      try {
        const res = await fetch("/api/recipe-tags", {
          method: "GET",
        })
        if (!res.ok) {
          throw new Error(`서버 응답 실패: ${res.status}`);
        }
        const data = await res.json();
        setTagData(data);
      } catch (error) {
        console.error("fetch 에러:", error);
      }
    };
    fetchTag();
  }, []);
  
  return (
    <TagContainer>
      {tagData?.map((tags) => (
        <TagStyle key={tags.id}>{tags.content}</TagStyle>
      ))}
    </TagContainer>
  );
};
export default Tag;
