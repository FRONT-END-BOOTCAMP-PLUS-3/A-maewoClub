"use client"

import RecipeCreate from "@/components/recipe/create/recipeCreate";
import UploadImage from "@/components/recipe/create/uploadImage/uploadImage";

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
    <UploadImage></UploadImage>
    </>
  )
}

export default Page;