"use client";

import { useRouter } from "next/navigation";
import {
  FoodImage,
  UserNickname,
  TextContainer,
  Container,
  Description,
  Tier,
  UserContainer,
  UserProfileImage,
} from "./recipeCard.style";
import { TagContainer, Tag } from "../tag/tag.style";

type RecipeCardProps = {
  children: React.ReactNode;
  id: string;
};

const RecipeCard = ({ children, id }: RecipeCardProps) => {
  // const [listData, setListData] = useState<RecipeDto[]>();
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchRecipes = async () => {
  //     setIsLoading(true);

  //     try {
  //       const res = await fetch("/api/recipes", {
  //         method: "GET",
  //       })
  //       const data = await res.json();
  //       setListData(data);
  //       console.log("recipe card data: ", data);

  //     } catch (error) {
  //       console.error("Error fetching recipes:", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchRecipes();
  // }, []);

  // if(isLoading)(
  //   <div>loading 중입니다...</div>
  // )

  const router = useRouter();
  const imageUrl = "/recipe.jpg";
  const profileUrl = "/Dfprofile.png";

  const handleCardClick = () => {
    router.push(`/recipes/${id}`);
  };

  return (
    <Container onClick={handleCardClick}>
      {imageUrl && (
        <FoodImage src={imageUrl} alt="Avatar" width={100} height={100} />
      )}
      <TextContainer>
        <TagContainer>
          <Tag key={id}>{id}</Tag>
        </TagContainer>
        <Description>{children}</Description>
        <UserContainer>
          {imageUrl && (
            <UserProfileImage
              src={profileUrl}
              alt="Avatar"
              width={100}
              height={100}
            />
          )}
          <UserNickname>
            나의 고향 신길동 매운 떡볶이
            <Tier>알</Tier>
          </UserNickname>
        </UserContainer>
      </TextContainer>
    </Container>
  );
};

export default RecipeCard;
