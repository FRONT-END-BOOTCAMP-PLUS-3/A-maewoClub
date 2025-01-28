"use client";

import { Text, TextArea, Button } from "./recipeCreate.style";

export const RecipeStepsAndImage = () => {
  return (
    <>
      <Text>요리순서</Text>
      <Text>요리의 순서를 빠짐없이 적어주세요</Text>
      <Text>Step</Text>
      <TextArea name="description" placeholder="재료 손질 예시"></TextArea>
      <Button>추가</Button>

      <Text>요리 완성 사진</Text>
      <Button>한번에 업로드</Button>
    </>
  );
};
