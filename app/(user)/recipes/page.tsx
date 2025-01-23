"use client"
import RecipeCard from "@/components/recipe/recipeCard/recipeCard"
import { SubTitle } from "@/components/recipe/recipe.style"


export default function page(){
  return (
    <>
      <SubTitle>Top. 10 </SubTitle>
      <RecipeCard />
      <SubTitle>총 1000개의 레시피가 있습니다.</SubTitle>

      <SubTitle>최근 본 레시피</SubTitle>
    </>
  )
}