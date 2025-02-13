# 🦁 멋쟁이사자처럼 FE PLUS - 불사조: A-maewoClub
![image](https://github.com/user-attachments/assets/c28681e5-fcfe-43c3-a6f6-3b8ce3245f62)

<br>

## 목차📜

## 🏠배포 주소

<br>

## 🚀프로젝트 소개 
- 아매워클럽은 매운맛 애호가들을 위한 커뮤니티입니다.
- 커뮤니티 게시판 기능을 통하여 매운맛을 공유하고 함께 음식을 즐길 수 있습니다. 

<br>

##  🚀프로젝트 개요
- 구현 시안: 매운맛 커뮤니티
- 프로젝트 기간: 2025.1.16 ~ 2024.2.13
- 리팩토링 기간: 
- 프로젝트 특징: 클린 아키텍처, TS와 Next 기술 익히기
- 프로젝트 목표: 2차 프로젝트를 위한 실무 경험

<br>

##  👨‍👩‍👧‍👦팀원 구성

|[김주영(Lead)](https://github.com/jyservice781)|[최승원(Recorder)](https://github.com/romaneechoiti)|[정현수(Scrum)](https://github.com/hyun9758)|[한정현(PM)](https://github.com/hanjeonghyun)
|:----:|:----:|:----:|:----:|
|<img src="https://avatars.githubusercontent.com/u/142976288?v=4" width="200">|<img src="https://avatars.githubusercontent.com/u/112051914?v=4" width="200">|<img src="https://github.com/FRONTENDSCHOOL8/dosirak/assets/82191626/ad014ace-2ce2-4a0a-ae8a-b12a439eb5c5" width="200">|<img src="https://avatars.githubusercontent.com/u/129199377?v=4" width="200">

<br>

## 🤙담당 페이지

| 이름       | 페이지(담당기능)                                               
| ---------- | ------------------------------------------------------------ 
| **김주영** | **레시피** - 메인 페이지 
| **최승원** | **레시피** - 상세 페이지
| **정현수** | **커뮤니티** - 메인 페이지
| **한정현** | **커뮤니티** - 상세 페이지 

<br>

## 01. 🛠️기술 스택
### ✔️FRONT
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"><img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"><img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">

<img src="https://img.shields.io/badge/zustand-382923?style=for-the-badge&logo=zustand&logoColor=white"><img src="https://img.shields.io/badge/tanstackquery-f59e0b?style=for-the-badge&logo=tanstackquery&logoColor=white">

### ✔️BACK
<img src="https://shields.io/badge/supabase-black?logo=supabase&style=for-the-badge">

### ✔️DESIGN
<img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">

### ✔️DEVELOP & COMMUNICATION TOOL
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"><img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"><img src="https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white"><img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white"><img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">

<br>

## 02. 📑스케폴딩 (CLEAN ARCHITECTURE)


<details>
  <summary><b>클린아키텍처 적용한 폴더구조</b></summary>

  ```

  
  프로젝트 루트/
  📦 
├─ .eslint.cjs
├─ .github
│  ├─ ISSUE_TEMPLATE
│  │  └─ custom.md
│  └─ PULL_REQUEST_TEMPLATE.md
├─ .gitignore
├─ .gitmessage.txt
├─ .prettierc.cjs
├─ .storybook
│  ├─ main.ts
│  └─ preview.ts
├─ README.md
├─ app
│  ├─ (user)
│  │  ├─ auth
│  │  │  └─ page.tsx
│  │  ├─ boards
│  │  │  ├─ [id]
│  │  │  │  └─ page.tsx
│  │  │  ├─ create
│  │  │  │  └─ page.tsx
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ quests
│  │  │  └─ page.tsx
│  │  └─ recipes
│  │     ├─ [id]
│  │     │  └─ page.tsx
│  │     ├─ create
│  │     │  └─ page.tsx
│  │     └─ page.tsx
│  ├─ admin
│  │  ├─ boards
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ quests
│  │  │  └─ page.tsx
│  │  ├─ recipes
│  │  │  └─ page.tsx
│  │  └─ users
│  │     └─ page.tsx
│  ├─ api
│  │  ├─ board-comments
│  │  │  └─ route.ts
│  │  ├─ board-tags
│  │  │  └─ route.ts
│  │  ├─ boards
│  │  │  ├─ detail
│  │  │  │  └─ route.ts
│  │  │  └─ route.ts
│  │  ├─ recipe-comments
│  │  │  └─ route.ts
│  │  ├─ recipe-tags
│  │  │  └─ route.ts
│  │  ├─ recipes
│  │  │  ├─ [id]
│  │  │  │  └─ route.ts
│  │  │  └─ route.ts
│  │  └─ users
│  │     ├─ account
│  │     │  └─ route.ts
│  │     ├─ communityInfo
│  │     │  └─ route.ts
│  │     ├─ login
│  │     │  └─ route.ts
│  │     ├─ me
│  │     │  └─ route.ts
│  │     └─ route.ts
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.module.css
│  └─ reactQueryProvider.tsx
├─ application
│  ├─ board
│  │  ├─ DfBoardCommentUsecase.ts
│  │  ├─ DfBoardCreateUsecase.ts
│  │  ├─ DfBoardDetailUsecase.ts
│  │  ├─ DfBoardListUsecase.ts
│  │  ├─ DfBoardTagUsecase.ts
│  │  ├─ DfBoardUsecase.ts
│  │  └─ dto
│  │     ├─ BoardCommentDto.ts
│  │     ├─ BoardCreateDto.ts
│  │     ├─ BoardDetailDto.ts
│  │     ├─ BoardDto.ts
│  │     ├─ BoardImageDto.ts
│  │     └─ BoardListDto.ts
│  ├─ recipe-comment
│  │  ├─ DfRecipeCommentListUsecase.ts
│  │  ├─ DfRecipeCommentUsecase.ts
│  │  └─ dto
│  │     ├─ RecipeCommentCreateDto.ts
│  │     ├─ RecipeCommentDto.ts
│  │     ├─ RecipeCommentImageDto.ts
│  │     ├─ RecipeCommentImageUpdate.ts
│  │     ├─ RecipeCommentListDto.ts
│  │     ├─ RecipeCommentUpdateDto.ts
│  │     └─ RecipeCommentWithImageDto.ts
│  ├─ recipe-tag
│  │  ├─ DfRecipeTagUsecase.ts
│  │  └─ dto
│  │     └─ RecipeTagDto.ts
│  ├─ recipe
│  │  ├─ DfRecipeCreateUsecase.ts
│  │  ├─ DfRecipeDetailUsecase.ts
│  │  ├─ DfRecipeListUsecase.ts
│  │  ├─ DfRecipeSlideUsecase.ts
│  │  └─ dto
│  │     ├─ RecipeCreateDto.ts
│  │     ├─ RecipeDto.ts
│  │     ├─ RecipeImageDto.ts
│  │     ├─ RecipeIngredientDto.ts
│  │     ├─ RecipeListDto.ts
│  │     ├─ RecipeStepDto.ts
│  │     └─ RecipeUpdateDto.ts
│  └─ users
│     ├─ DfUsersUsecase.ts
│     └─ dto
│        ├─ UserDto.ts
│        └─ UserInfoModalDto.ts
├─ components
│  ├─ board
│  │  ├─ button
│  │  │  ├─ button.style.ts
│  │  │  └─ button.tsx
│  │  ├─ create
│  │  │  ├─ Input
│  │  │  │  ├─ contentInput.tsx
│  │  │  │  ├─ input.style.ts
│  │  │  │  └─ titleInput.tsx
│  │  │  ├─ createPage
│  │  │  │  ├─ createPage.style.ts
│  │  │  │  └─ createPage.tsx
│  │  │  └─ imageBox
│  │  │     ├─ imageBox.style.ts
│  │  │     └─ imageBox.tsx
│  │  ├─ detail
│  │  │  ├─ comment
│  │  │  │  ├─ comment.style.ts
│  │  │  │  └─ comment.tsx
│  │  │  ├─ post
│  │  │  │  ├─ post.style.ts
│  │  │  │  └─ post.tsx
│  │  │  └─ profile
│  │  │     ├─ profile.style.ts
│  │  │     └─ profile.tsx
│  │  ├─ filterBar
│  │  │  ├─ filterBar.style.ts
│  │  │  └─ filterBar.tsx
│  │  ├─ filterButton
│  │  │  └─ filterButton.tsx
│  │  ├─ main
│  │  │  └─ cardPost
│  │  │     ├─ cardPost.style.ts
│  │  │     └─ cardPostItem.tsx
│  │  ├─ optionButton
│  │  │  ├─ optionButton.style.ts
│  │  │  └─ optionButton.tsx
│  │  ├─ overview
│  │  │  ├─ overview.style.ts
│  │  │  └─ overview.tsx
│  │  ├─ searchBar
│  │  │  ├─ searchBar.style.ts
│  │  │  └─ searchBar.tsx
│  │  └─ textForm
│  │     ├─ textForm.style.ts
│  │     └─ textForm.tsx
│  ├─ footer
│  │  ├─ adminFooter
│  │  │  ├─ adminFooter.style.ts
│  │  │  └─ adminFooter.tsx
│  │  ├─ footer.style.ts
│  │  └─ footer.tsx
│  ├─ header
│  │  ├─ adminHeader
│  │  │  ├─ adminHeader.style.ts
│  │  │  └─ adminHeader.tsx
│  │  ├─ header.style.ts
│  │  └─ header.tsx
│  ├─ index
│  │  ├─ admin
│  │  │  ├─ adminPage.style.ts
│  │  │  ├─ adminPage.tsx
│  │  │  └─ table
│  │  │     ├─ table.style.ts
│  │  │     └─ table.tsx
│  │  └─ pages
│  │     ├─ pagesInfo.json
│  │     ├─ subPage.style.ts
│  │     └─ subPage.tsx
│  ├─ recipe
│  │  ├─ cardPaging
│  │  │  ├─ cardPaging.style.ts
│  │  │  └─ cardPaging.tsx
│  │  ├─ create
│  │  │  ├─ imagePreview
│  │  │  │  ├─ ImagePreview.style.ts
│  │  │  │  └─ ImagePreviewList.tsx
│  │  │  ├─ recipeCreate.style.ts
│  │  │  ├─ recipeCreate.tsx
│  │  │  ├─ recipeStepAndImage.style.ts
│  │  │  ├─ recipeStepsAndImage.tsx
│  │  │  └─ uploadImage
│  │  │     ├─ uploadImage.style.ts
│  │  │     └─ uploadImage.tsx
│  │  ├─ recipe.style.ts
│  │  ├─ recipeCard
│  │  │  ├─ recipeCard.style.ts
│  │  │  ├─ recipeCard.tsx
│  │  │  ├─ recipeCardSlide.style.ts
│  │  │  └─ recipeCardSlide.tsx
│  │  ├─ recipeDetail
│  │  │  ├─ cookingStep
│  │  │  │  ├─ cookingStep.style.ts
│  │  │  │  └─ cookingSteps.tsx
│  │  │  ├─ recipeDetailPage.style.ts
│  │  │  ├─ recipeIngredient
│  │  │  │  ├─ ingredient.style.ts
│  │  │  │  └─ ingredient.tsx
│  │  │  ├─ recipeReview
│  │  │  │  ├─ cookReview.style.ts
│  │  │  │  ├─ cookReview.tsx
│  │  │  │  ├─ cookReviewUserDetails.tsx
│  │  │  │  ├─ photoReview.style.ts
│  │  │  │  └─ photoReview.tsx
│  │  │  ├─ recipeUserProfile
│  │  │  │  ├─ recipeUserProfile.style.ts
│  │  │  │  └─ recipeUserProfile.tsx
│  │  │  └─ reviewModal
│  │  │     ├─ reviewModal.style.ts
│  │  │     └─ reviewModal.tsx
│  │  └─ tag
│  │     ├─ tag.style.ts
│  │     └─ tag.tsx
│  └─ user
│     ├─ login
│     │  ├─ exchangeCodeforToken.ts
│     │  ├─ login.style.ts
│     │  ├─ login.tsx
│     │  ├─ loginBox
│     │  │  ├─ loginForm.style.ts
│     │  │  └─ loginForm.tsx
│     │  └─ userInfoModal
│     │     ├─ userInfoModal.style.ts
│     │     └─ userInfoModal.tsx
│     ├─ logout
│     │  ├─ logout.style.ts
│     │  └─ logout.tsx
│     └─ nickname
│        ├─ nicknamePage.style.ts
│        └─ nicknamePage.tsx
├─ domain
│  ├─ entities
│  │  ├─ Board.ts
│  │  ├─ BoardComment.ts
│  │  ├─ BoardImage.ts
│  │  ├─ BoardTag.ts
│  │  ├─ Recipe.ts
│  │  ├─ RecipeComment.ts
│  │  ├─ RecipeCommentImage.ts
│  │  ├─ RecipeImage.ts
│  │  ├─ RecipeIngredient.ts
│  │  ├─ RecipeStep.ts
│  │  ├─ RecipeTag.ts
│  │  └─ User.ts
│  └─ repositories
│     ├─ BoardCommentRepository.ts
│     ├─ BoardImageRepository.ts
│     ├─ BoardRepository.ts
│     ├─ BoardTagRepository.ts
│     ├─ RecipeCommentImageRepository.ts
│     ├─ RecipeCommentRepository.ts
│     ├─ RecipeImageRepository.ts
│     ├─ RecipeIngredientRepository.ts
│     ├─ RecipeRepository.ts
│     ├─ RecipeStepRepository.ts
│     ├─ RecipeTagRepository.ts
│     └─ UserRepository.ts
├─ eslint.config.mjs
├─ hook
│  ├─ useFindUserbyUserId.ts
│  ├─ useLogin.ts
│  ├─ useRecipe.ts
│  └─ useUser.ts
├─ infrastructure
│  └─ repositories
│     ├─ boards
│     │  ├─ SbBoardCommentRepository.ts
│     │  ├─ SbBoardImageRepository.ts
│     │  ├─ SbBoardRepository.ts
│     │  └─ SbBoardTagRepostitory.ts
│     ├─ recipes
│     │  ├─ SbRecipeCommentImageRepository.ts
│     │  ├─ SbRecipeCommentRepository.ts
│     │  ├─ SbRecipeImageRepository.ts
│     │  ├─ SbRecipeIngredientRepository.ts
│     │  ├─ SbRecipeRepository.ts
│     │  ├─ SbRecipeStepRepository.ts
│     │  └─ SbRecipeTagRepository.ts
│     └─ users
│        └─ SbUserRepository.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ public
│  ├─ DfLevel.png
│  ├─ Dfprofile.png
│  ├─ file.svg
│  ├─ google_logo.svg
│  ├─ logo.png
│  ├─ main_board.png
│  ├─ main_food.png
│  ├─ main_recipe.png
│  ├─ recipe.jpg
│  └─ search.svg
├─ store
│  ├─ useAuthStore.ts
│  └─ useRecipeStore.ts
├─ stories
│  ├─ Button.stories.ts
│  ├─ Button.tsx
│  ├─ Configure.mdx
│  ├─ Header.stories.ts
│  ├─ Header.tsx
│  ├─ Page.stories.ts
│  ├─ Page.tsx
│  ├─ assets
│  │  ├─ accessibility.png
│  │  ├─ accessibility.svg
│  │  ├─ addon-library.png
│  │  ├─ assets.png
│  │  ├─ avif-test-image.avif
│  │  ├─ context.png
│  │  ├─ discord.svg
│  │  ├─ docs.png
│  │  ├─ figma-plugin.png
│  │  ├─ github.svg
│  │  ├─ share.png
│  │  ├─ styling.png
│  │  ├─ testing.png
│  │  ├─ theming.png
│  │  ├─ tutorials.svg
│  │  └─ youtube.svg
│  ├─ button.css
│  ├─ header.css
│  └─ page.css
├─ tsconfig.json
└─ utils
   └─ supabase
      └─ server.ts
