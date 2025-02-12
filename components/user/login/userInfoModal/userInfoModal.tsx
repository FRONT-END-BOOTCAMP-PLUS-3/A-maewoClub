import { useEffect, useState } from "react";
import { ModalOverlay } from "@/components/recipe/recipeDetail/reviewModal/reviewModal.style";
import { BoardContainer, BoardDateLikeWrapper, BoardHeader, BoardHeaderContainer, BoardItem, BoardItemContent, BoardItemDate, BoardItemLike, BoardItemTitle, BoardList, BoardTitle, ModalContent, UserCommunityBox, UserCommunityCount, UserCommunityTitle, UserCommunityWrapper, UserContainer, UserImage, UserInfoWrapper, UserLevelBackground, UserLevelBadge, UserLevelImage, UserLevelImgWarpper, UserLevelInfoWrapper, UserLevelTitle, UserLevelWrapper, UserNickName } from "./userInfoModal.style";
import { FaFire } from "react-icons/fa6";
import { useAuthStore } from "@/store/useAuthStore";
import { UserInfoRecipesModalDto, UserInfoBoardsModalDto } from "@/application/users/dto/UserInfoModalDto";

type UserInfoModalProps = {
    onClose: () => void;
}

    const mockImg = "/Dfprofile.png";
    const DfLevelImg = "/Dflevel.png"

export const UserInfoModal = ({ onClose }: UserInfoModalProps) => {
    const { user } = useAuthStore();
    const [userRecipes, setUserRecipes] = useState<UserInfoRecipesModalDto[]>([]);
    const [userBoards, setUserBoards] = useState<UserInfoBoardsModalDto[]>([]);  
    const [activeTab, setActiveTab] = useState<"recipes" | "boards">("recipes");
      
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`/api/users/communityInfo?userId=${user?.id}`);
                const data = await response.json();
                setUserRecipes(data.UserInfoModalDto.userRecipes);
                setUserBoards(data.UserInfoModalDto.userBoards);
                console.log(data);
            } catch (error) {
                console.error("❌ 데이터 가져오기 중 에러 발생:", error);
            }
        };
        if (user?.id) {
            fetchUserData();
        }
    }, [user?.id]);
   

    const formatDate = (dateString: Date) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        });
    };
    
    const truncateDescription = (description: string, maxLength: number) => {
        if (description.length > maxLength) {
            return description.slice(0, maxLength) + "...";
        }
        return description;
    };
    
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const getLevelTitle = (level: number) => {
        switch (level) {
            case 1:
                return "깨진 알";
            case 2:
                return "머리만 나온 알";
            case 3:
                return "병아리";
            case 4:
                return "닭";
            case 5:
                return "불사조";
            default:
                return "";
        }
    }

    const handleRecipeClick = (recipeId: number) => {
        window.location.href = `/recipes/${recipeId}`;
    };
    const handleBoardClick = (boardId: number) => {
        window.location.href = `/boards/${boardId}`;
      };

    return (
    <ModalOverlay onClick={handleOverlayClick}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
            <UserContainer>
                <UserInfoWrapper>
                    <UserNickName>{user?.nickname}</UserNickName>
                    <UserImage
                        src={user?.photoUrl || mockImg}
                        alt="user"
                        width={200}
                        height={200}
                    />
                </UserInfoWrapper>

                <UserLevelWrapper>
                    <UserLevelImgWarpper>
                        <UserLevelImage
                            src={DfLevelImg}
                            alt="레벨이미지"
                            width={100}
                            height={100}
                        />
                    </UserLevelImgWarpper>
                    <UserLevelInfoWrapper>
                        <UserLevelTitle>
                            {getLevelTitle(Number(user?.level) || 0)}
                        </UserLevelTitle>
                        <UserLevelBackground>
                            <UserLevelBadge>
                            {[...Array(5)].map((_, index) => (
                                <FaFire
                                key={index}
                                size={30}
                                color={index < (Number(user?.level) || 0) ? "var(--mainRed)" : "gray"}
                                />
                            ))}
                            </UserLevelBadge>
                        </UserLevelBackground>
                    </UserLevelInfoWrapper>
                </UserLevelWrapper>
                
                <UserCommunityBox>
                    <UserCommunityWrapper>
                        <UserCommunityTitle>레시피</UserCommunityTitle>
                        <UserCommunityCount>{userRecipes.length}</UserCommunityCount>
                    </UserCommunityWrapper>
                    <UserCommunityWrapper>
                        <UserCommunityTitle>커뮤니티</UserCommunityTitle>
                        <UserCommunityCount>{userBoards.length}</UserCommunityCount>
                    </UserCommunityWrapper>
                </UserCommunityBox>

            </UserContainer>

            <BoardContainer>
                <BoardHeaderContainer>
                    <BoardHeader onClick={() => setActiveTab("recipes")}>
                    <BoardTitle>레시피</BoardTitle>
                    </BoardHeader>
                    <BoardHeader onClick={() => setActiveTab("boards")}>
                    <BoardTitle>커뮤니티</BoardTitle>
                    </BoardHeader>
                    <BoardHeader>
                    <BoardTitle>챌린지</BoardTitle>
                    </BoardHeader>
                </BoardHeaderContainer>
                <BoardList>
                    {activeTab === "recipes" &&
                    userRecipes.map((recipe) => (
                        <BoardItem key={recipe.id}>
                            <BoardItemTitle onClick={() => handleRecipeClick(recipe.id)}>
                                {recipe.title}
                            </BoardItemTitle>
                            <BoardItemContent>{truncateDescription(recipe.description, 10)}</BoardItemContent>
                            <BoardDateLikeWrapper>
                                <BoardItemDate>{formatDate(recipe.createdAt)}</BoardItemDate>
                                <BoardItemLike> 좋아요: {recipe.likeCount}</BoardItemLike>
                            </BoardDateLikeWrapper>
                        </BoardItem>
                    ))}
                    {activeTab === "boards" &&
                    userBoards.map((board) => (
                        <BoardItem key={board.id}>
                            <BoardItemTitle onClick={() => handleBoardClick(board.id)}>
                                {board.title}
                            </BoardItemTitle>
                            <BoardItemContent>{truncateDescription(board.description, 10)}</BoardItemContent>
                            <BoardDateLikeWrapper>
                                <BoardItemDate>{formatDate(board.createdAt)}</BoardItemDate>
                                <BoardItemLike>좋아요 : {board.likeCount}</BoardItemLike>
                            </BoardDateLikeWrapper>
                        </BoardItem>
                    ))}
                </BoardList>
            </BoardContainer>
        </ModalContent>
    </ModalOverlay>
    )
}