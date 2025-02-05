"use client"
import { useEffect, useState } from "react";
import { TagContainer, TagStyle } from "./tag.style";
import { RecipeTag } from "@/domain/entities/recipes/RecipeTag";

const Tag = () => {
  /*TODO: Error fetching menus: SyntaxError: Failed to execute 'json' on 'Response': Unexpected end of JSON input
   at RecipeCard.useEffect.fetchRecipesd
    이 에러해결 볼것*/
  const [tagData, setTagData] = useState<RecipeTag[]>();

  useEffect(() => {
    const fetchTag = async () => {
      try {
        const res = await fetch("/api/recipe-tags");
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
      {tagData?.map((tag) => (
        <TagStyle key={tag.id}>{tag.content}</TagStyle>
      ))}
    </TagContainer>
  );
};
export default Tag;
