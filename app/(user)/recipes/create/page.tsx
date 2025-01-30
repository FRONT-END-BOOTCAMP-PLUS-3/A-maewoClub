"use client"

import RecipeCreate from "@/components/recipe/create/recipeCreate";

const Page = () => {
  
  // useEffect(() => {
  //   if(userInfo != true){
  //     loginModal 띄우기
  //   }
  // })

  return(
    <>
    {/* 로그인 회원만 보이도록 할 것 */}
    <RecipeCreate></RecipeCreate>
    </>
  )
}

export default Page;