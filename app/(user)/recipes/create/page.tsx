"use client"

import RecipeCreate from "@/components/recipe/create/recipeCreate";
import { useAuthStore } from "@/store/useAuthStore";

const Page = () => {
  const {isAuthenticated} = useAuthStore();
  return(
    <>
    {isAuthenticated ?? 
      <RecipeCreate></RecipeCreate>
    }
    
    </>
  )
}

export default Page;